/**
 * Canon Module Index
 * Единая точка доступа к каноническим константам Pygmalion
 * 
 * Использование:
 *   const Canon = require('./core/canon');
 *   Canon.grammar.isValidOK('::test::');
 *   Canon.ontology.PHASES.ACTIVE;
 *   Canon.temporal.getPhase(now);
 * 
 * Версия канона: phase1-stable-2026.05
 * Изменение версии требует синхронизации AI-SYSTEM-MAP.md
 */

const CANON_VERSION = "phase1-stable-2026.05";

module.exports = {
  CANON_VERSION,
  grammar: require('./grammar'),
  ontology: require('./ontology'),
  emissionPolicy: require('./emission-policy'),
  temporal: require('./temporal'),
  reserved: require('./reserved'),
  bridges: require('./bridges'),
  protocols: require('./protocols'),
  
  // ========================================
  // Convenient aliases
  // ========================================
  get isValidOK() { return this.grammar.isValidOK; },
  get PHASES() { return this.ontology.PHASES; },
  get UE_STATUS() { return this.ontology.UE_STATUS; },
  get ACT_TYPES() { return this.ontology.ACT_TYPES; },
  get getPhase() { return this.temporal.getPhase; },
  get canAct() { return this.temporal.canAct; },
  get isSystemReserve() { return this.reserved.isSystemReserve; },
  get isBridge() { return this.bridges.isBridge; },
  get canAccess() { return this.protocols.canAccess; }
};