/**
 * Emission Policy Module
 * SSOT — Единый источник истины для лимитов эмиссии
 * Канон v1.1 · Этический стоп-кран активен
 *
 * ВСЕ лимиты эмиссии определяются ТОЛЬКО здесь.
 * server.js, metronome.js, replay.js импортируют из этого модуля.
 */

const EMISSION_POLICY = {
  daily: {
    min: 3,
    max: 13,
    // Будущие стадии (зарезервированы, не активированы):
    stage2_max: 50,
    stage3_max: 56,
  },

  triads: {
    T1: { name: 'Знания', range: [1, 2, 3], ueCount: 3 },
    T2: { name: 'Практики', range: [4, 5, 6], ueCount: 3 },
    T3: { name: 'Творчество', range: [7, 8, 9], ueCount: 3 },
    T4: { name: 'Досуг/ЗОЖ', range: [10, 11, 12], ueCount: 3 },
    T5: { name: '№21', range: [21], ueCount: 1 },
  },

  silence_window: { from: "19:55", to: "20:00" },

  burn_window_hours: 28,

  special_roles: {
    predstoyatel_max: 13,
    order_head_bonus: 16,
    theoretical_cap: 88,
  },

  phase_windows: {
    active: { start: "04:00", end: "19:55" },
    silence: { start: "19:55", end: "20:00" },
    sleep: { start: "20:00", end: "04:00" },
  },
};

const TRIADS = EMISSION_POLICY.triads;

/**
 * Валидация выбора триад по канону
 */
function validateTriadSelection(triads) {
  for (const triad of triads) {
    if (!TRIADS[triad]) {
      return { valid: false, error: `Invalid triad: ${triad}` };
    }
  }

  const hasT5 = triads.includes('T5');
  const hasRegularTriad = triads.some(t => ['T1', 'T2', 'T3', 'T4'].includes(t));

  if (hasT5 && !hasRegularTriad) {
    return { valid: false, error: 'T5 (У.Е. №21) доступна только после активации хотя бы одной триады T1-T4' };
  }

  let totalUE = 0;
  triads.forEach(triad => { totalUE += TRIADS[triad].ueCount; });

  if (totalUE < EMISSION_POLICY.daily.min) {
    return { valid: false, error: `Минимум ${EMISSION_POLICY.daily.min} У.Е. (одна триада T1-T4)` };
  }
  if (totalUE > EMISSION_POLICY.daily.max) {
    return { valid: false, error: `Максимум ${EMISSION_POLICY.daily.max} У.Е. (T1+T2+T3+T4+T5)` };
  }

  return { valid: true, totalUE };
}

/**
 * Получить номера У.Е. для триады
 */
function getUENumbersByTriad(triad) {
  return TRIADS[triad] ? TRIADS[triad].range : [];
}

module.exports = {
  EMISSION_POLICY,
  TRIADS,
  validateTriadSelection,
  getUENumbersByTriad,
};
