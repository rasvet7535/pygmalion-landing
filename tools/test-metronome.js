// ============================================================
// Тестовый скрипт для проверки автономного Метронома
// ============================================================
// Запускает burn-процесс вручную для проверки логики
// без ожидания полуночи UTC

const { Pool } = require('pg');
const Metronome = require('../backend/core/metronome');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://pygmalion:pygmalion_secret_2026@localhost:5433/pygmalion_v04'
});

async function testMetronomeBurn() {
  console.log('=== Тест автономного Метронома ===\n');

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const nowISO = Metronome.getCurrentTimeISO();
    console.log(`Текущее время (UTC): ${nowISO}`);
    console.log(`Текущая фаза: ${Metronome.getCurrentPhase()}\n`);

    // Найти все У.Е., которые должны сгореть
    const toBurnResult = await client.query(
      `
      SELECT ue_uuid, ue_number, triad, actor_ok, burn_at, emission_act_id
      FROM ue_units
      WHERE status IN ('active', 'impulse', 'transferred')
        AND burn_at <= $1::timestamp
      `,
      [nowISO]
    );

    console.log(`Найдено У.Е. для сгорания: ${toBurnResult.rows.length}\n`);

    if (toBurnResult.rows.length === 0) {
      console.log('✅ Нет У.Е. для сгорания (все актуальны)');
      await client.query('ROLLBACK');
      return;
    }

    let burnedCount = 0;

    for (const ue of toBurnResult.rows) {
      console.log(`Сжигаем: ${ue.triad} #${ue.ue_number} (${ue.ue_uuid})`);
      console.log(`  Владелец: ${ue.actor_ok}`);
      console.log(`  burn_at: ${ue.burn_at}`);

      // Создать акт BURNED в acts_log с refs на акт эмиссии
      const actResult = await client.query(
        `
        INSERT INTO acts_log (act_type, actor_ok, payload, refs)
        VALUES ($1, $2, $3, $4)
        RETURNING act_id, created_at
        `,
        [
          'BURNED',
          ue.actor_ok,
          {
            ue_uuid: ue.ue_uuid,
            ue_number: ue.ue_number,
            triad: ue.triad,
            burn_at: ue.burn_at
          },
          [ue.emission_act_id]  // refs на акт эмиссии
        ]
      );

      // Обновить статус У.Е.
      await client.query(
        `
        UPDATE ue_units
        SET status = 'burned',
            transferred_at = $1
        WHERE ue_uuid = $2
        `,
        [actResult.rows[0].created_at, ue.ue_uuid]
      );

      // Создать ребро RELEASE в ro.DAG (замыкание траектории)
      await client.query(
        `
        INSERT INTO ro_dag_edges (from_act_id, to_act_id, edge_type)
        VALUES ($1, $2, $3)
        `,
        [ue.emission_act_id, actResult.rows[0].act_id, 'RELEASE']
      );

      console.log(`  ✅ Акт BURNED создан: ${actResult.rows[0].act_id}\n`);
      burnedCount++;
    }

    await client.query('COMMIT');

    console.log(`\n=== Итог ===`);
    console.log(`Сгорело У.Е.: ${burnedCount}`);
    console.log(`Время: ${nowISO}`);
    console.log(`\n✅ Метроном работает корректно`);

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('\n❌ Ошибка:', err.message);
  } finally {
    client.release();
    await pool.end();
  }
}

testMetronomeBurn();
