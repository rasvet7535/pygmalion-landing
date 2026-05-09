// ============================================================
// Migration Script: sandbox-v0.3.26.05 → backend-v0.4.0
// ============================================================
// Переносит данные из localStorage sandbox в PostgreSQL
// с сохранением целостности ro.DAG (act_id, refs, txId)
//
// Использование:
//   node tools/migrate-v3-to-v4.js --input=sandbox-dump.json [--dry-run]
//
// Этапы:
//   1. Валидация входных данных
//   2. Импорт acts_log (с сохранением act_id и refs)
//   3. Replay для ue_units
//   4. Построение ro_dag_edges
//   5. Верификация целостности
// ============================================================

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// ============================================================
// Конфигурация
// ============================================================

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://pygmalion:pygmalion_secret_2026@localhost:5433/pygmalion_v04'
});

const args = process.argv.slice(2).reduce((acc, arg) => {
  const [key, value] = arg.split('=');
  acc[key.replace('--', '')] = value || true;
  return acc;
}, {});

const INPUT_FILE = args.input;
const DRY_RUN = args['dry-run'] === true;

// ============================================================
// Утилиты
// ============================================================

function log(event, data = {}) {
  console.log(JSON.stringify({
    event,
    timestamp: new Date().toISOString(),
    level: 'info',
    ...data
  }));
}

function logError(event, error, data = {}) {
  console.error(JSON.stringify({
    event,
    timestamp: new Date().toISOString(),
    level: 'error',
    error: error.message,
    stack: error.stack,
    ...data
  }));
}

// ============================================================
// Валидация входных данных
// ============================================================

function validateSandboxDump(dump) {
  const errors = [];

  if (!dump.acts || !Array.isArray(dump.acts)) {
    errors.push('Missing or invalid acts array');
  }

  if (!dump.ue_units || !Array.isArray(dump.ue_units)) {
    errors.push('Missing or invalid ue_units array');
  }

  if (!dump.metadata) {
    errors.push('Missing metadata');
  }

  // Проверка структуры актов
  if (dump.acts && dump.acts.length > 0) {
    const sampleAct = dump.acts[0];
    const requiredFields = ['act_id', 'act_type', 'actor_ok', 'payload', 'created_at'];

    for (const field of requiredFields) {
      if (!(field in sampleAct)) {
        errors.push(`Act missing required field: ${field}`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    stats: {
      acts_count: dump.acts?.length || 0,
      ue_units_count: dump.ue_units?.length || 0,
      version: dump.metadata?.version || 'unknown'
    }
  };
}

// ============================================================
// Импорт acts_log
// ============================================================

async function importActsLog(client, acts) {
  log('import_acts_start', { count: acts.length });

  let imported = 0;
  let skipped = 0;
  const errors = [];

  for (const act of acts) {
    try {
      // Проверка существования акта (идемпотентность)
      const existsResult = await client.query(
        'SELECT act_id FROM acts_log WHERE act_id = $1',
        [act.act_id]
      );

      if (existsResult.rows.length > 0) {
        skipped++;
        continue;
      }

      // Импорт акта с сохранением act_id
      await client.query(
        `INSERT INTO acts_log (act_id, act_type, actor_ok, target_ok, payload, refs, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          act.act_id,
          act.act_type,
          act.actor_ok,
          act.target_ok || null,
          act.payload,
          act.refs || [],
          act.created_at
        ]
      );

      imported++;

      if (imported % 100 === 0) {
        log('import_acts_progress', { imported, skipped });
      }

    } catch (err) {
      errors.push({
        act_id: act.act_id,
        error: err.message
      });

      if (errors.length > 10) {
        throw new Error(`Too many errors during import (${errors.length})`);
      }
    }
  }

  log('import_acts_complete', { imported, skipped, errors: errors.length });

  return { imported, skipped, errors };
}

// ============================================================
// Replay для ue_units
// ============================================================

async function replayUeUnits(client) {
  log('replay_ue_start');

  // Очистка ue_units (производная проекция)
  await client.query('TRUNCATE ue_units');

  // Шаг 1: Восстановить эмиссии
  const triads = ['T1', 'T2', 'T3', 'T4', 'T5'];
  const triadRanges = {
    T1: [1, 2, 3],
    T2: [4, 5, 6],
    T3: [7, 8, 9],
    T4: [10, 11, 12],
    T5: [21]
  };

  let emissionsRestored = 0;

  for (const triad of triads) {
    const ueNumbers = triadRanges[triad];

    const result = await client.query(
      `INSERT INTO ue_units (ue_number, triad, actor_ok, status, created_at, burn_at, emission_act_id)
       SELECT
         unnest($1::int[]) AS ue_number,
         $2 AS triad,
         actor_ok,
         CASE WHEN payload->>'phase' = 'impulse' THEN 'impulse' ELSE 'active' END,
         created_at,
         (payload->>'burn_at')::timestamp,
         act_id
       FROM acts_log
       WHERE act_type = 'EMISSION'
         AND payload->'triads' ? $2
       RETURNING ue_uuid`,
      [ueNumbers, triad]
    );

    emissionsRestored += result.rows.length;
  }

  log('replay_ue_emissions', { restored: emissionsRestored });

  // Шаг 2: Применить передачи
  const transfersResult = await client.query(
    `UPDATE ue_units SET
       status = 'transferred',
       actor_ok = t.target_ok,
       transferred_at = t.created_at,
       transfer_act_id = t.act_id
     FROM acts_log t
     WHERE t.act_type = 'TRANSFER'
       AND ue_units.ue_uuid = (t.payload->>'ue_uuid')::uuid
     RETURNING ue_units.ue_uuid`
  );

  log('replay_ue_transfers', { applied: transfersResult.rows.length });

  // Шаг 3: Применить сгорания
  const burnsResult = await client.query(
    `UPDATE ue_units SET
       status = 'burned',
       transferred_at = b.created_at
     FROM acts_log b
     WHERE b.act_type = 'BURNED'
       AND ue_units.ue_uuid = (b.payload->>'ue_uuid')::uuid
     RETURNING ue_units.ue_uuid`
  );

  log('replay_ue_burns', { applied: burnsResult.rows.length });

  return {
    emissions: emissionsRestored,
    transfers: transfersResult.rows.length,
    burns: burnsResult.rows.length
  };
}

// ============================================================
// Построение ro_dag_edges
// ============================================================

async function buildRoDagEdges(client) {
  log('build_dag_start');

  // Очистка существующих рёбер
  await client.query('TRUNCATE ro_dag_edges');

  // Построение рёбер из refs в acts_log
  const result = await client.query(
    `INSERT INTO ro_dag_edges (from_act_id, to_act_id, edge_type)
     SELECT
       unnest(refs) AS from_act_id,
       act_id AS to_act_id,
       CASE
         WHEN act_type = 'TRANSFER' THEN 'FLOW'
         WHEN act_type = 'BURNED' THEN 'CAUSAL'
         ELSE 'CAUSAL'
       END AS edge_type
     FROM acts_log
     WHERE refs IS NOT NULL AND array_length(refs, 1) > 0
     RETURNING edge_id`
  );

  log('build_dag_complete', { edges_created: result.rows.length });

  return { edges_created: result.rows.length };
}

// ============================================================
// Верификация целостности
// ============================================================

async function verifyIntegrity(client) {
  log('verify_start');

  const checks = [];

  // 1. Проверка: все refs указывают на существующие акты
  const orphanRefsResult = await client.query(
    `SELECT act_id, refs
     FROM acts_log
     WHERE refs IS NOT NULL
       AND EXISTS (
         SELECT 1
         FROM unnest(refs) AS ref_id
         WHERE NOT EXISTS (
           SELECT 1 FROM acts_log WHERE act_id = ref_id
         )
       )`
  );

  checks.push({
    name: 'orphan_refs',
    passed: orphanRefsResult.rows.length === 0,
    count: orphanRefsResult.rows.length
  });

  // 2. Проверка: все ue_units ссылаются на существующие акты эмиссии
  const orphanEmissionsResult = await client.query(
    `SELECT ue_uuid, emission_act_id
     FROM ue_units
     WHERE NOT EXISTS (
       SELECT 1 FROM acts_log WHERE act_id = emission_act_id
     )`
  );

  checks.push({
    name: 'orphan_emissions',
    passed: orphanEmissionsResult.rows.length === 0,
    count: orphanEmissionsResult.rows.length
  });

  // 3. Проверка: все рёбра ro_dag_edges указывают на существующие акты
  const orphanEdgesResult = await client.query(
    `SELECT edge_id, from_act_id, to_act_id
     FROM ro_dag_edges
     WHERE NOT EXISTS (SELECT 1 FROM acts_log WHERE act_id = from_act_id)
        OR NOT EXISTS (SELECT 1 FROM acts_log WHERE act_id = to_act_id)`
  );

  checks.push({
    name: 'orphan_edges',
    passed: orphanEdgesResult.rows.length === 0,
    count: orphanEdgesResult.rows.length
  });

  // 4. Проверка: баланс У.Е. (сумма эмиссий = сумма активных + переданных + сгоревших)
  const balanceResult = await client.query(
    `SELECT
       (SELECT COUNT(*) FROM acts_log WHERE act_type = 'EMISSION') * 6 AS total_emitted,
       (SELECT COUNT(*) FROM ue_units) AS total_ue_units
    `
  );

  const balance = balanceResult.rows[0];
  checks.push({
    name: 'ue_balance',
    passed: balance.total_emitted === parseInt(balance.total_ue_units),
    emitted: balance.total_emitted,
    units: balance.total_ue_units
  });

  const allPassed = checks.every(c => c.passed);

  log('verify_complete', { all_passed: allPassed, checks });

  return { all_passed: allPassed, checks };
}

// ============================================================
// Главная функция
// ============================================================

async function main() {
  log('migration_start', { input: INPUT_FILE, dry_run: DRY_RUN });

  // Проверка входного файла
  if (!INPUT_FILE) {
    console.error('Usage: node migrate-v3-to-v4.js --input=sandbox-dump.json [--dry-run]');
    process.exit(1);
  }

  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Input file not found: ${INPUT_FILE}`);
    process.exit(1);
  }

  // Загрузка дампа
  log('load_dump', { file: INPUT_FILE });
  const dumpContent = fs.readFileSync(INPUT_FILE, 'utf8');
  const dump = JSON.parse(dumpContent);

  // Валидация
  const validation = validateSandboxDump(dump);
  log('validation', validation);

  if (!validation.valid) {
    console.error('Validation failed:', validation.errors);
    process.exit(1);
  }

  if (DRY_RUN) {
    log('dry_run_complete', { message: 'Validation passed, no changes made' });
    return;
  }

  // Миграция
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // 1. Импорт acts_log
    const importResult = await importActsLog(client, dump.acts);

    // 2. Replay ue_units
    const replayResult = await replayUeUnits(client);

    // 3. Построение ro_dag_edges
    const dagResult = await buildRoDagEdges(client);

    // 4. Верификация
    const verifyResult = await verifyIntegrity(client);

    if (!verifyResult.all_passed) {
      throw new Error('Integrity verification failed');
    }

    await client.query('COMMIT');

    log('migration_success', {
      acts_imported: importResult.imported,
      ue_emissions: replayResult.emissions,
      ue_transfers: replayResult.transfers,
      ue_burns: replayResult.burns,
      dag_edges: dagResult.edges_created
    });

  } catch (err) {
    await client.query('ROLLBACK');
    logError('migration_failed', err);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

// ============================================================
// Запуск
// ============================================================

main().catch(err => {
  logError('migration_error', err);
  process.exit(1);
});
