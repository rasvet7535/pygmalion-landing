# AI-SYSTEM-MAP — Pygmalion Landing

> Единая карта системы для AI-агентов.  
> Landing — витрина перехода + Docker-стек backend.

---

## 1. Репозитории ekosystem

| Репозиторий | Роль | GitHub |
|---|---|---|
| `pygmalion-landing` | Landing + Docker-стек backend + Canon Layer | `rasvet7535/pygmalion-landing` |
| `-Pygmalion-` | Основной backend (upstream) | `TVOY1000/-Pygmalion-` |
| `pygmalion-field` | Frontend / поле присутствия | `rasvet7535/pygmalion-field` |
| `notebooklm-mcp` | Интеллектуальный мост к NotebookLM | `rasvet7535/notebooklm-mcp` |

---

## 2. Canon Layer (SSOT)

**Путь:** `backend/core/canon/`  
**Версия:** `phase1-stable-2026.05`  
**Импорт:** `const Canon = require('./core/canon');`

| Модуль | Статус | Описание |
|---|---|---|
| `emission-policy.js` | ✅ Confirmed | Лимиты: min 3, max 13 У.Е./день, триады, silence |
| `grammar.js` | ✅ Confirmed | Валидация О.К. (`::key::`) |
| `ontology.js` | ✅ Confirmed | Фазы, статусы, типы актов |
| `temporal.js` | ✅ Confirmed | 24+4, burn, getPhase() |
| `reserved.js` | ✅ Confirmed | Резерв ::0::–::33::, `::О::` |
| `bridges.js` | ✅ Confirmed | Bridge-symbols 𝕯, Д/D |
| `protocols.js` | ✅ Confirmed | про.1–про.4,5, доступ |
| `index.js` | ✅ Confirmed | SSOT entry point |

---

## 3. Ключевые константы

| Константа | Значение |
|---|---|
| `EMISSION_DAILY_MIN` | 3 У.Е. |
| `EMISSION_DAILY_MAX` | 13 У.Е. |
| `SILENCE_WINDOW` | 19:55–20:00 UTC |
| `BURN_ACTIVE` | 24h |
| `BURN_IMPULSE` | 28h |
| `ORACLE_OK` | `::О::` |

---

## 4. Статусы

| Статус | Описание |
|---|---|
| ✅ Confirmed | SSOT, прошло верификацию |
| 👁️ Observational | Замечено, не зафиксировано |
| 💭 Speculative | Обсуждается |
| 📦 Archive | Заменено, история |

*Версия: phase1-stable-2026.05*
