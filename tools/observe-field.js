// ============================================================
// Скрипт наблюдения за поведением поля после BURN
// ============================================================
// Мониторит /api/mirror и /api/field каждые 3 минуты
// для отслеживания затухания и "успокоения" системы

const OK_ID = process.argv[2] || '::test123::';
const INTERVAL_MS = 3 * 60 * 1000; // 3 минуты
const API_BASE = 'http://localhost:3000';

let observationCount = 0;
const observations = [];

async function observe() {
  observationCount++;
  const timestamp = new Date().toISOString();

  console.log(`\n=== Наблюдение #${observationCount} (${timestamp}) ===\n`);

  try {
    // Fetch mirror
    const mirrorRes = await fetch(`${API_BASE}/api/mirror/${OK_ID}`);
    const mirror = await mirrorRes.json();

    // Fetch field
    const fieldRes = await fetch(`${API_BASE}/api/field/${OK_ID}`);
    const field = await fieldRes.json();

    // Анализ состояния
    const state = {
      timestamp,
      observation: observationCount,

      // Trace (время)
      silence_hours: mirror.trace.silence_hours,
      last_act_at: mirror.trace.last_act_at,

      // Burn (выдох)
      last_burn_at: mirror.burn.last_burn_at,
      burned_recently: mirror.burn.burned_recently,

      // Field (поле)
      connections: field.field.connections,
      activity: field.field.activity,

      // Directions (векторы)
      given: mirror.directions.given.count,
      received: mirror.directions.received.count,
      burned: mirror.directions.burned.count,

      // Recognition (признание)
      recognition_links: mirror.graph.recognition_links,
      unique_witnesses: mirror.graph.unique_witnesses,

      // Presence (присутствие)
      ue_flow: mirror.presence.ue_flow
    };

    observations.push(state);

    // Вывод
    console.log(`Тишина: ${state.silence_hours}h`);
    console.log(`Последний акт: ${state.last_act_at}`);
    console.log(`Последнее сгорание: ${state.last_burn_at}`);
    console.log(`Сгорело недавно: ${state.burned_recently}`);
    console.log(`\nПоле: ${state.connections}, ${state.activity}`);
    console.log(`Направления: given=${state.given}, received=${state.received}, burned=${state.burned}`);
    console.log(`Признание: links=${state.recognition_links}, witnesses=${state.unique_witnesses}`);
    console.log(`Присутствие: ue_flow=${state.ue_flow}`);

    // Анализ затухания
    if (observations.length > 1) {
      const prev = observations[observations.length - 2];
      const silenceDelta = state.silence_hours - prev.silence_hours;

      console.log(`\n--- Динамика ---`);
      console.log(`Δ silence: +${silenceDelta.toFixed(1)}h`);

      if (state.activity !== prev.activity) {
        console.log(`⚠️ Activity изменилась: ${prev.activity} → ${state.activity}`);
      }

      if (state.connections !== prev.connections) {
        console.log(`⚠️ Connections изменились: ${prev.connections} → ${state.connections}`);
      }
    }

    // Определение фазы "успокоения"
    let settlingPhase = 'unknown';
    if (state.silence_hours < 0.5) {
      settlingPhase = 'alive'; // только что были акты
    } else if (state.silence_hours < 2) {
      settlingPhase = 'cooling'; // активность уходит
    } else {
      settlingPhase = 'silent'; // тишина
    }

    console.log(`\nФаза: ${settlingPhase}`);

  } catch (err) {
    console.error('Ошибка наблюдения:', err.message);
  }
}

// Первое наблюдение сразу
observe();

// Последующие наблюдения каждые 3 минуты
const interval = setInterval(observe, INTERVAL_MS);

// Остановка через 30 минут (10 наблюдений)
setTimeout(() => {
  clearInterval(interval);
  console.log('\n=== Наблюдение завершено ===\n');

  // Итоговый анализ
  if (observations.length > 1) {
    const first = observations[0];
    const last = observations[observations.length - 1];

    console.log('Итоговая динамика:');
    console.log(`Тишина: ${first.silence_hours}h → ${last.silence_hours}h`);
    console.log(`Activity: ${first.activity} → ${last.activity}`);
    console.log(`Connections: ${first.connections} → ${last.connections}`);
    console.log(`\nСистема ${last.activity === 'quiet' ? 'успокоилась' : 'остаётся активной'}.`);
  }

  process.exit(0);
}, 30 * 60 * 1000);

console.log(`Мониторинг запущен для ${OK_ID}`);
console.log(`Интервал: 3 минуты`);
console.log(`Длительность: 30 минут (10 наблюдений)`);
console.log(`Нажмите Ctrl+C для остановки\n`);
