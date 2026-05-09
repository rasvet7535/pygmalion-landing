# 📊 PROJECT STATUS — Pygmalion v0.4.0-alpha

**Дата и время:** 08.05.2026, 23:38:26
**Git branch:** main

## ⚠️ Архитектурные напряжения (Tensions)

### 🟡 Средние

**duplicates:** Найдено 1 файлов-дублей с суффиксами "— копия"
*Влияние:* Неясно, какая версия актуальна
*Примеры:* tools\migrate-v3-to-v4 — копия.md

### 🟢 Низкие

**dual_source_of_truth:** Обнаружены и acts_log, и ue_units в схеме
*Влияние:* Возможно нарушение Event Sourcing — ue_units должны восстанавливаться из acts_log

## 📜 Канон (источники истины)

| Статус | Файл | Размер | Последнее изменение |
|--------|------|--------|---------------------|
| ✅ | ADR-01.2 (Единственный канон) | 6.0 KB | 2026-05-02 22:02:19 |
| ✅ | Schema v3.0 (Структура БД) | 15.8 KB | 2026-05-08 20:19:07 |
| ✅ | Правила миграции | 9.2 KB | 2026-05-02 21:43:36 |

## 🔧 Реализация

| Статус | Файл | Размер | Последнее изменение |
|--------|------|--------|---------------------|
| ✅ | API Gateway (server.js) | 75.9 KB | 2026-05-08 20:31:39 |
| ✅ | TimeRhythm (Метроном) | 4.5 KB | 2026-05-02 21:43:36 |
| ✅ | TimeRhythm (альт.) | 4.1 KB | 2026-05-02 21:43:36 |
| ✅ | Исходная логика (v0.3.26) | 185.8 KB | 2026-05-02 21:43:36 |
| ✅ | Исходное хранилище | 31.2 KB | 2026-05-02 21:43:36 |

## 📖 Документация процессов

| Статус | Файл | Размер | Последнее изменение |
|--------|------|--------|---------------------|
| ✅ | Канон времени 24+4 | 3.5 KB | 2026-05-02 21:43:58 |
| ✅ | ro.DAG структура | 4.3 KB | 2026-05-02 21:43:58 |
| ✅ | Протокол Ночи Очищения | 5.6 KB | 2026-05-02 21:43:58 |

## 📁 Структура ключевых папок

### docs/
📄 ADR-01.2-CANONICAL.md (6.0 KB)
📄 CYCLE-OF-PRESENCE.md (5.5 KB)
📄 ETHICS-OF-RHYTHM.md (3.4 KB)
📄 INITIATOR-TREE-GUIDE.md (9.0 KB)
📄 METRONOME-CANON.md (3.5 KB)
📄 MIGRATION-GUIDE.md (8.9 KB)
📄 MIGRATION-RULES.md (9.2 KB)
📄 ONTOLOGY-ABSOLUTE-ZERO.md (12.1 KB)
📄 POST-STEP-13-REPORT.md (13.1 KB)
📄 PURIFICATION-PROTOCOL.md (5.6 KB)
📄 REPLAY-TEST.md (9.1 KB)
📄 RHYTHM-CANON.md (10.5 KB)
📄 RO-DAG-STRUCTURE.md (4.3 KB)
📄 SILENCE-PROTECTION.md (7.3 KB)
📄 SOCIAL-BREATHING.md (13.3 KB)
📄 STEP-10.5-FACE-SHAPE.md (9.7 KB)
📄 STEP-10.6-PROTOCOL-KOL.md (12.6 KB)
📄 STEP-11.0-ONTOLOGY-ZERO.md (10.7 KB)
📄 STEP-11.1-SOCIAL-INFRASTRUCTURE.md (16.9 KB)
📄 STEP-11.2-12-INSTITUTIONALIZATION.md (14.9 KB)
📄 STEP-13-EXTERNAL-SYMMETRY.md (12.6 KB)
📄 STEP-14-ONTOLOGICAL-THRESHOLD.md (6.1 KB)
📄 STEP-8-FIELD-PROTOTYPE.md (7.8 KB)
📄 UM-LAYER.md (11.5 KB)
📄 VISUALIZATION-CANON.md (30.7 KB)

### sql-schema/
📄 schema-v3.0-alpha.sql (15.8 KB)

### backend/core/
📄 metronome.js (4.5 KB)
📄 timeRhythm.js (4.1 KB)

### migrations/
📄 001_init.sql (4.6 KB)
📄 002_init.sql (5.2 KB)
📄 003_threshold_crossed.sql (1.8 KB)
📄 004_cooldown_fields.sql (1.8 KB)

## 📊 Git изменения (сводка)

- Изменено: 0
- Удалено: 0
- Не отслеживается: 12

<details>
<summary>Полный список изменений</summary>

```
Am ../-Pygmalion-
D  ../.github/workflows/deploy.yml
M  ../.gitignore
A  ../.qwen/installation_id
A  ../.qwen/tasks/playwright_pygmalion.md.md
A  ../0.3.22/audit-i18n.js
A  ../0.3.22/i18n.js
A  ../0.3.22/index.html
A  ../0.3.22/logic.js
A  ../0.3.22/storage.js
A  ../0.3.22/style-threshold.css
A  ../0.3.22/style.css
A  ../0.3.22/threshold.html
R  ../sandbox-v0.3.20/threshold.js -> ../0.3.22/threshold.js
A  ../0.3.22/timeRhythm.js
A  ../QWEN.md
A  ../archive/README.md
A  ../archive/sandbox-v0.3.10/CHANGES_REPORT.md
A  ../archive/sandbox-v0.3.10/index.html
A  "../archive/sandbox-v0.3.10/logic \342\200\224 \321\201\321\202\320\260\321\200\321\213\320\271 \320\272\320\276\320\264.txt"
A  "../archive/sandbox-v0.3.10/logic \342\200\224\320\230\320\241\320\237\320\240\320\220\320\222\320\233\320\225\320\235\320\235\320\220\320\257 \320\222\320\225\320\240\320\241\320\230\320\257\342\200\224 .md"
A  "../archive/sandbox-v0.3.10/logic \342\200\224\320\272\320\276\320\264 \320\264\320\276 \320\270\320\267\320\274\320\265\320\275\320\265\320\275\320\270\321\217.js"
A  ../archive/sandbox-v0.3.10/logic-old.js
A  ../archive/sandbox-v0.3.10/logic.js
R  ../sandbox-v0.3.12/style-threshold.css -> ../archive/sandbox-v0.3.10/style-threshold.css
R  ../sandbox-v0.3.12/style.css -> ../archive/sandbox-v0.3.10/style.css
A  ../archive/sandbox-v0.3.10/test-timer-24plus4.html
A  ../archive/sandbox-v0.3.10/test-v0.4.2.html
R  ../sandbox-v0.3.12/threshold.html -> ../archive/sandbox-v0.3.10/threshold.html
R  ../sandbox-v0.3.12/threshold.js -> ../archive/sandbox-v0.3.10/threshold.js
A  "../archive/sandbox-v0.3.10/\320\230\320\241\320\237\320\240\320\220\320\222\320\233\320\225\320\235\320\235\320\220\320\257 \320\222\320\225\320\240\320\241\320\230\320\257 0.3.12/index.html"
A  "../archive/sandbox-v0.3.10/\320\230\320\241\320\237\320\240\320\220\320\222\320\233\320\225\320\235\320\235\320\220\320\257 \320\222\320\225\320\240\320\241\320\230\320\257 0.3.12/index.txt"
A  "../archive/sandbox-v0.3.10/\320\230\320\241\320\237\320\240\320\220\320\222\320\233\320\225\320\235\320\235\320\220\320\257 \320\222\320\225\320\240\320\241\320\230\320\257 0.3.12/logic-old.js"
A  "../archive/sandbox-v0.3.10/\320\230\320\241\320\237\320\240\320\220\320\222\320\233\320\225\320\235\320\235\320\220\320\257 \320\222\320\225\320\240\320\241\320\230\320\257 0.3.12/logic.js"
A  "../archive/sandbox-v0.3.10/\320\230\320\241\320\237\320\240\320\220\320\222\320\233\320\225\320\235\320\235\320\220\320\257 \320\222\320\225\320\240\320\241\320\230\320\257 0.3.12/style-threshold.css"
A  "../archive/sandbox-v0.3.10/\320\230\320\241\320\237\320\240\320\220\320\222\320\233\320\225\320\235\320\235\320\220\320\257 \320\222\320\225\320\240\320\241\320\230\320\257 0.3.12/style.css"
A  "../archive/sandbox-v0.3.10/\320\230\320\241\320\237\320\240\320\220\320\222\320\233\320\225\320\235\320\235\320\220\320\257 \320\222\320\225\320\240\320\241\320\230\320\257 0.3.12/threshold \342\200\224 htlm.md"
A  "../archive/sandbox-v0.3.10/\320\230\320\241\320\237\320\240\320\220\320\222\320\233\320\225\320\235\320\235\320\220\320\257 \320\222\320\225\320\240\320\241\320\230\320\257 0.3.12/threshold \342\200\224 htlm.txt"
A  "../archive/sandbox-v0.3.10/\320\230\320\241\320\237\320\240\320\220\320\222\320\233\320\225\320\235\320\235\320\220\320\257 \320\222\320\225\320\240\320\241\320\230\320\257 0.3.12/threshold.html"
A  "../archive/sandbox-v0.3.10/\320\230\320\241\320\237\320\240\320\220\320\222\320\233\320\225\320\235\320\235\320\220\320\257 \320\222\320\225\320\240\320\241\320\230\320\257 0.3.12/threshold.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/MLOps_Architecture_Diagram.png"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/MLOps_Pipeline_Strategy_Pygmalion_2026-03-26.xlsx"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/MLOps_Strategy_Pygmalion.docx"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/MLOps_Visual_Charts_2026-03-26_v1.0.xlsx"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/MLOps_Visual_Dashboard_2026-03-26.png"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/Pygmalion_Scaling_Plan_v0.2.6.docx"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/TimeCycles_TransactionFlow.png"
R  "../sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/\320\276\321\204\320\273\320\260\320\271\320\275 MVP \320\237\320\270\320\263\320\274\320\260\320\273\320\270\320\276\320\275  v.0.2.6 .md" -> "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/index.html"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/v.0.2.6.docx"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/FIX-24plus4-TIMER.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/FIX-v0.4.2-CLEAN-BREATH.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/FIX-v0.4.2a-UI-SYNC.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/FIX-v0.4.2b-CRITICAL-PHASE.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/FIX-v0.4.2c-BURN-ORDER.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/FIX-v0.4.2d-IMPULSE-ACTIVE.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/FIX-v0.4.2e-FORCE-UPDATE.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/FIX-v0.4.2f-BALANCE-FIX.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/FIX-v0.4.2g-TRIAD-RESET.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/FIX-v0.4.2i-FULL.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/FIX-v0.4.2i-WARNING-TEXT.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/devtools.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/engine-fixed.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/engine-old.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/engine.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/main.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/state.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/test-timer-24plus4.html"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/test-timer-24plus4.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/test-v0.4.2.html"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\260\321\200\321\205\320\270\320\262\321\213/ui.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\277\321\200\320\276\321\202\320\276\320\272\320\276\320\273\321\213/README.md"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\277\321\200\320\276\321\202\320\276\320\272\320\276\320\273\321\213/index.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\277\321\200\320\276\321\202\320\276\320\272\320\276\320\273\321\213/pro1-plan.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\277\321\200\320\276\321\202\320\276\320\272\320\276\320\273\321\213/pro2-tok-orakul-s.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\277\321\200\320\276\321\202\320\276\320\272\320\276\320\273\321\213/pro3-kol-lico-oblik.js"
A  "../archive/sandbox-v0.3.10/\320\270\321\201\321\205\320\276\320\264\320\275\321\213\320\271 \320\272\320\276\320\264/\320\277\321\200\320\276\321\202\320\276\320\272\320\276\320\273\321\213/pro4-ves.js"
A  "../archive/sandbox-v0.3.10/\320\272\320\276\320\277\320\270\320\270/index.docx"
A  "../archive/sandbox-v0.3.10/\320\272\320\276\320\277\320\270\320\270/index.txt"
A  "../archive/sandbox-v0.3.10/\320\272\320\276\320\277\320\270\320\270/logic \342\200\224 \320\272\320\276\320\277\320\270\321\2172.md"
R  ../sandbox-v0.3.12/logic-old.js -> "../archive/sandbox-v0.3.10/\320\272\320\276\320\277\320\270\320\270/logic-old .txt"
A  "../archive/sandbox-v0.3.10/\320\272\320\276\320\277\320\270\320\270/style \342\200\224 \320\272\320\276\320\277\320\270\321\2173.md"
A  "../archive/sandbox-v0.3.10/\320\272\320\276\320\277\320\270\320\270/threshold \342\200\224 \320\272\320\276\320\277\320\270\321\217 (2).md"
A  "../archive/sandbox-v0.3.13/logic - \321\201\320\273\320\276\320\274\320\260\320\275\321\213\320\271.js"
R  ../sandbox-v0.3.12/logic.js -> ../archive/sandbox-v0.3.13/logic.js
A  ../archive/sandbox-v0.3.13/threshold.html
A  ../archive/sandbox-v0.3.13/threshold.js
A  "../archive/sandbox-v0.3.13/\320\274\321\203\321\201\320\276\321\200/logic \342\200\224 \320\272\320\276\320\277\320\270\321\217 (2).txt"
A  "../archive/sandbox-v0.3.13/\320\274\321\203\321\201\320\276\321\200/\320\222\320\253\320\240\320\225\320\227\320\220\320\235\320\236 ueLifecycle.js"
A  "../archive/sandbox-v0.3.14/0index (2).html"
R  ../sandbox-v0.3.12/index.html -> ../archive/sandbox-v0.3.14/0index.html
A  ../archive/sandbox-v0.3.14/0logic.js
A  ../archive/sandbox-v0.3.14/index.html
A  ../archive/sandbox-v0.3.14/logic.js
A  ../archive/sandbox-v0.3.14/storage.js
A  ../archive/sandbox-v0.3.14/style-threshold.css
A  ../archive/sandbox-v0.3.14/style.css
A  ../archive/sandbox-v0.3.14/threshold.html
R  ../sandbox-v0.3.20/0threshold.js -> ../archive/sandbox-v0.3.14/threshold.js
R  ../sandbox-v0.3.12/timeRhythm.js -> ../archive/sandbox-v0.3.14/timeRhythm.js
A  "../archive/sandbox-v0.3.14/\320\270\321\201\320\277\321\200\320\260\320\262\320\273\320\265\320\275\320\276/threshold.html"
A  "../archive/sandbox-v0.3.14/\320\270\321\201\320\277\321\200\320\260\320\262\320\273\320\265\320\275\320\276/threshold.js"
A  ../archive/sandbox-v0.3.15-canonical/index.html
A  ../archive/sandbox-v0.3.15-canonical/index.md
A  ../archive/sandbox-v0.3.15-canonical/logic.js
A  ../archive/sandbox-v0.3.15-canonical/logic.md
A  ../archive/sandbox-v0.3.15-canonical/storage.js
A  ../archive/sandbox-v0.3.15-canonical/style-threshold.css
A  ../archive/sandbox-v0.3.15-canonical/style.css
A  ../archive/sandbox-v0.3.15-canonical/threshold.html
A  ../archive/sandbox-v0.3.15-canonical/threshold.js
A  ../archive/sandbox-v0.3.15-canonical/timeRhythm.js
A  ../archive/sandbox-v0.3.16-canonical/index.html
A  ../archive/sandbox-v0.3.16-canonical/logic.js
A  ../archive/sandbox-v0.3.16-canonical/storage.js
A  ../archive/sandbox-v0.3.16-canonical/style-threshold.css
A  ../archive/sandbox-v0.3.16-canonical/style.css
A  ../archive/sandbox-v0.3.16-canonical/threshold.html
A  ../archive/sandbox-v0.3.16-canonical/threshold.js
A  ../archive/sandbox-v0.3.16-canonical/timeRhythm.js
A  "../archive/sandbox-v0.3.17/2\320\241\320\275\320\270\320\274\320\276\320\272.PNG"
A  ../archive/sandbox-v0.3.17/index.html
A  ../archive/sandbox-v0.3.17/logic.js
R  ../sandbox-v0.3.20/storage.js -> ../archive/sandbox-v0.3.17/storage.js
A  ../archive/sandbox-v0.3.17/style-threshold.css
A  ../archive/sandbox-v0.3.17/style.css
A  ../archive/sandbox-v0.3.17/threshold.html
A  ../archive/sandbox-v0.3.17/threshold.js
A  ../archive/sandbox-v0.3.17/timeRhythm.js
A  "../archive/sandbox-v0.3.17/\320\241\320\275\320\270\320\274\320\276\320\272.PNG"
A  ../archive/sandbox-v0.3.18/0.txt
A  ../archive/sandbox-v0.3.18/0timeRhythm.js
A  ../archive/sandbox-v0.3.18/CHANGELOG-v0.3.19-fix.md
A  ../archive/sandbox-v0.3.18/CHANGELOG-v0.3.19.md
A  ../archive/sandbox-v0.3.18/CHANGELOG-v0.3.20.md
A  ../archive/sandbox-v0.3.18/index.html
A  "../archive/sandbox-v0.3.18/logic \342\200\224 \320\264\320\276 \320\270\320\267\320\274\320\265\320\275\320\265\320\275\320\270\321\217.md"
R  "../sandbox-v0.3.20/logic \342\200\224 \320\272\320\276\320\277\320\270\321\217.md" -> ../archive/sandbox-v0.3.18/logic.js
R  "../sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/storage.js" -> ../archive/sandbox-v0.3.18/storage.js
R  ../sandbox-v0.3.20/0style-threshold.css -> ../archive/sandbox-v0.3.18/style-threshold.css
R  ../sandbox-v0.3.20/style.css -> ../archive/sandbox-v0.3.18/style.css
R  ../sandbox-v0.3.20/0threshold.html -> ../archive/sandbox-v0.3.18/threshold.html
A  ../archive/sandbox-v0.3.18/threshold.js
R  ../sandbox-v0.3.20/timeRhythm.js -> ../archive/sandbox-v0.3.18/timeRhythm.js
A  "../archive/sandbox-v0.3.18/\320\237\320\233\320\220\320\235.txt"
A  "../archive/sandbox-v0.3.18/\320\277\321\200\320\260\320\262\320\272\320\270.txt"
R  ../sandbox-v0.3.20/00logic.js -> ../archive/sandbox-v0.3.20/00logic.js
R  "../sandbox-v0.3.20/style-threshold \342\200\224 \320\272\320\276\320\277\320\270\321\217.txt" -> ../archive/sandbox-v0.3.20/0style-threshold.css
A  ../archive/sandbox-v0.3.20/0threshold.html
A  ../archive/sandbox-v0.3.20/0threshold.js
A  ../archive/sandbox-v0.3.20/index.html
A  ../archive/sandbox-v0.3.20/logic.js
A  ../archive/sandbox-v0.3.20/logic.md
A  ../archive/sandbox-v0.3.20/storage.js
R  ../sandbox-v0.3.20/style-threshold.css -> ../archive/sandbox-v0.3.20/style-threshold.css
A  ../archive/sandbox-v0.3.20/style.css
R  ../sandbox-v0.3.20/threshold.html -> ../archive/sandbox-v0.3.20/threshold.html
A  ../archive/sandbox-v0.3.20/threshold.js
R  "../sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/timeRhythm.js" -> ../archive/sandbox-v0.3.20/timeRhythm.js
R  ../sandbox-v0.3.20/index.html -> "../archive/sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/index.html"
R  "../sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/logic.js" -> "../archive/sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/logic.js"
A  "../archive/sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/storage.js"
R  "../sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/style-threshold.css" -> "../archive/sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/style-threshold.css"
R  "../sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/style.css" -> "../archive/sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/style.css"
R  "../sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/threshold.html" -> "../archive/sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/threshold.html"
R  "../sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/threshold.js" -> "../archive/sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/threshold.js"
A  "../archive/sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/timeRhythm.js"
A  "../archive/sandbox-v0.3.20/\320\237\320\233\320\220\320\235 \320\270\321\201\320\277\321\200\320\260\320\262\320\273\320\265\320\275\320\270\320\271.txt"
R  "../sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/index.html" -> "../archive/sandbox-v0.3.20/\320\265\321\211\321\221/index.html"
R  ../sandbox-v0.3.20/logic.js -> "../archive/sandbox-v0.3.20/\320\265\321\211\321\221/logic.js"
A  "../archive/sandbox-v0.3.20/\320\265\321\211\321\221/storage.js"
A  "../archive/sandbox-v0.3.20/\320\265\321\211\321\221/style-threshold.css"
A  "../archive/sandbox-v0.3.20/\320\265\321\211\321\221/style.css"
A  "../archive/sandbox-v0.3.20/\320\265\321\211\321\221/threshold.html"
A  "../archive/sandbox-v0.3.20/\320\265\321\211\321\221/threshold.js"
A  "../archive/sandbox-v0.3.20/\320\265\321\211\321\221/timeRhythm.js"
A  "../archive/sandbox-v0.3.20/\320\273\320\276\320\263\320\270\320\272\320\260 \321\201\321\200\320\260\320\262\320\275\320\270/logic (\320\270\321\201\320\277\321\200\320\260\320\273\320\265\320\275\320\276 \320\232\320\262\320\265\320\275).js"
A  "../archive/sandbox-v0.3.20/\320\273\320\276\320\263\320\270\320\272\320\260 \321\201\321\200\320\260\320\262\320\275\320\270/logic (\320\276\321\202 \320\232\320\273\320\260\321\203\320\264).js"
A  "../archive/sandbox-v0.3.20/\320\276\321\202 \320\232\320\273\320\260\321\203\320\264\320\260/logic.js"
A  ../archive/sandbox-v0.3.21/index.html
A  ../archive/sandbox-v0.3.21/logic.js
A  ../archive/sandbox-v0.3.21/storage.js
A  ../archive/sandbox-v0.3.21/style-threshold.css
A  ../archive/sandbox-v0.3.21/style.css
A  ../archive/sandbox-v0.3.21/threshold.html
A  ../archive/sandbox-v0.3.21/threshold.js
A  ../archive/sandbox-v0.3.21/timeRhythm.js
A  "../archive/sandbox-v0.3.21/\320\275\320\265 \321\202\320\276/logic.js"
A  ../archive/sandbox-v0.3.22/0threshold.js
A  ../archive/sandbox-v0.3.22/assets/i18n/en.json
A  ../archive/sandbox-v0.3.22/assets/i18n/ru.json
A  ../archive/sandbox-v0.3.22/audit-i18n.js
A  ../archive/sandbox-v0.3.22/i18n.js
A  ../archive/sandbox-v0.3.22/index.html
A  ../archive/sandbox-v0.3.22/logic.js
A  ../archive/sandbox-v0.3.22/storage.js
A  ../archive/sandbox-v0.3.22/style-threshold.css
A  ../archive/sandbox-v0.3.22/style.css
A  ../archive/sandbox-v0.3.22/threshold.html
A  ../archive/sandbox-v0.3.22/threshold.js
A  ../archive/sandbox-v0.3.22/timeRhythm.js
A  ../archive/sandbox-v0.3.23/assets/i18n/en.json
A  ../archive/sandbox-v0.3.23/assets/i18n/ru.json
A  ../archive/sandbox-v0.3.23/audit-i18n.js
A  ../archive/sandbox-v0.3.23/i18n.js
A  ../archive/sandbox-v0.3.23/index.html
A  ../archive/sandbox-v0.3.23/logic.js
A  ../archive/sandbox-v0.3.23/style-threshold.css
A  ../archive/sandbox-v0.3.23/style.css
A  ../archive/sandbox-v0.3.23/threshold.html
A  ../archive/sandbox-v0.3.23/threshold.js
A  ../archive/sandbox-v0.3.23/timeRhythm.js
A  ../archive/sandbox-v0.3.24/assets/i18n/en.json
A  ../archive/sandbox-v0.3.24/assets/i18n/ru.json
A  ../archive/sandbox-v0.3.24/audit-i18n.js
A  ../archive/sandbox-v0.3.24/i18n.js
A  ../archive/sandbox-v0.3.24/index.html
A  ../archive/sandbox-v0.3.24/logic.js
A  ../archive/sandbox-v0.3.24/storage.js
A  ../archive/sandbox-v0.3.24/style-threshold.css
A  ../archive/sandbox-v0.3.24/style.css
A  ../archive/sandbox-v0.3.24/threshold.html
A  ../archive/sandbox-v0.3.24/threshold.js
A  ../archive/sandbox-v0.3.24/timeRhythm.js
A  ../archive/sandbox-v0.3.25/.claude/settings.local.json
A  ../archive/sandbox-v0.3.25/0logic.js
A  ../archive/sandbox-v0.3.25/assets/i18n/en.json
A  ../archive/sandbox-v0.3.25/assets/i18n/ru.json
A  ../archive/sandbox-v0.3.25/audit-i18n.js
A  ../archive/sandbox-v0.3.25/i18n.js
A  ../archive/sandbox-v0.3.25/index.html
A  ../archive/sandbox-v0.3.25/logic.js
A  ../archive/sandbox-v0.3.25/storage.js
A  ../archive/sandbox-v0.3.25/style-threshold.css
A  ../archive/sandbox-v0.3.25/style.css
A  ../archive/sandbox-v0.3.25/threshold.html
A  ../archive/sandbox-v0.3.25/threshold.js
A  ../archive/sandbox-v0.3.25/timeRhythm.js
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/index (2).html"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/index (3).html"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/index.html"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/logic.js"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/logic.md"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/sandbox-v0.3.25 (2)/assets/i18n/en.json"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/sandbox-v0.3.25 (2)/assets/i18n/ru.json"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/sandbox-v0.3.25 (2)/i18n.js"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/sandbox-v0.3.25 (2)/index.html"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/sandbox-v0.3.25 (2)/logic.js"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/sandbox-v0.3.25 (2)/storage.js"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/sandbox-v0.3.25 (2)/style-threshold.css"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/sandbox-v0.3.25 (2)/style.css"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/sandbox-v0.3.25 (2)/threshold.html"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/sandbox-v0.3.25 (2)/threshold.js"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/sandbox-v0.3.25 (2)/timeRhythm.js"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/\320\260\321\203\320\264\320\270\321\202.txt"
A  "../archive/sandbox-v0.3.25/\320\260\321\200\321\205\320\270\320\262/\320\277\321\200\320\260\320\262\320\272\320\270.txt"
A  ../archive/sandbox-v0.3.26.05/CLAUDE.md
A  ../archive/sandbox-v0.3.26.05/assets/i18n/en.json
A  ../archive/sandbox-v0.3.26.05/assets/i18n/en.json.backup
A  ../archive/sandbox-v0.3.26.05/assets/i18n/ru.json
A  ../archive/sandbox-v0.3.26.05/i18n.js
A  ../archive/sandbox-v0.3.26.05/index.html
A  ../archive/sandbox-v0.3.26.05/logic.js
A  ../archive/sandbox-v0.3.26.05/start-server.bat
A  ../archive/sandbox-v0.3.26.05/storage.js
A  ../archive/sandbox-v0.3.26.05/style-threshold.css
A  ../archive/sandbox-v0.3.26.05/style.css
A  ../archive/sandbox-v0.3.26.05/threshold.html
A  ../archive/sandbox-v0.3.26.05/threshold.js
A  ../archive/sandbox-v0.3.26.05/timeRhythm.js
A  ../archive/sandbox-v0.3.26/.claude/settings.local.json
A  ../archive/sandbox-v0.3.26/CLAUDE.md
A  ../archive/sandbox-v0.3.26/assets/i18n/en.json
A  ../archive/sandbox-v0.3.26/assets/i18n/en.json.backup
A  ../archive/sandbox-v0.3.26/assets/i18n/ru.json
A  ../archive/sandbox-v0.3.26/i18n.js
A  ../archive/sandbox-v0.3.26/index.html
A  ../archive/sandbox-v0.3.26/logic.js
A  ../archive/sandbox-v0.3.26/start-server.bat
A  ../archive/sandbox-v0.3.26/storage.js
A  ../archive/sandbox-v0.3.26/style-threshold.css
A  ../archive/sandbox-v0.3.26/style.css
A  ../archive/sandbox-v0.3.26/threshold.html
A  ../archive/sandbox-v0.3.26/threshold.js
A  ../archive/sandbox-v0.3.26/timeRhythm.js
A  "../archive/sandbox-v0.3.26/\320\267\320\260\320\264\320\260\320\275\320\270\320\265 \320\264\320\273\321\217 .claude/check-ok.html"
A  "../archive/sandbox-v0.3.26/\320\267\320\260\320\264\320\260\320\275\320\270\320\265 \320\264\320\273\321\217 .claude/logic.js"
A  "../archive/sandbox-v0.3.26/\320\267\320\260\320\264\320\260\320\275\320\270\320\265 \320\264\320\273\321\217 .claude/test-ok.html"
A  "../archive/sandbox-v0.3.26/\320\267\320\260\320\264\320\260\320\275\320\270\320\265 \320\264\320\273\321\217 .claude/test-storage.html"
A  "../archive/sandbox-v0.3.26/\320\267\320\260\320\264\320\260\320\275\320\270\320\265 \320\264\320\273\321\217 .claude/timeRhythm.js"
A  "../archive/sandbox-v0.3.26/\320\267\320\260\320\264\320\260\320\275\320\270\320\265 \320\264\320\273\321\217 .claude/\320\267\320\260\320\264\320\260\320\275\320\270\320\265.json"
A  "../archive/server \342\200\224 \320\272\320\276\320\277\320\270\321\217 (2).js.MD"
A  "../archive/server \342\200\224 \320\272\320\276\320\277\320\270\321\217 (2).md"
D  "../assets/audio/Pygmalion\342\200\231s_Ledger_of_Invisible_Capital.mp3"
D  ../assets/audio/blagodarnost.m4a
D  ../assets/css/global.css
D  ../assets/css/manifesto.css
D  ../assets/css/style.css
D  ../assets/css/support.css
D  ../assets/favicon.png
D  ../assets/i18n/en.json
D  ../assets/i18n/js/lang.js
D  ../assets/i18n/ru.json
D  ../assets/img/og-coverOF.png
D  ../assets/img/og-coverOF2.png
D  ../assets/img/og-coverOF4.png
D  ../assets/img/og-coverON.png
D  ../assets/img/og-coverON2.png
D  ../assets/img/og-coverON4.png
D  ../assets/img/og-previewOF_0.png
D  ../assets/img/og-previewOF_1.png
D  ../assets/img/pygmalion-bg.jpg
D  ../assets/js/index.html
D  ../assets/js/lang.js
A  ../backend-migration/.env
A  ../backend-migration/.openclaw/workspace-state.json
A  ../backend-migration/AGENTS.md
A  ../backend-migration/BOOTSTRAP.md
A  ../backend-migration/HEARTBEAT.md
A  ../backend-migration/IDENTITY.md
A  ../backend-migration/MIGRATION-RULES.md
A  ../backend-migration/PROJECT-STATUS.md
A  ../backend-migration/README.md
A  ../backend-migration/SOUL.md
A  ../backend-migration/SYNC-REPORT.md
A  ../backend-migration/TOOLS.md
A  ../backend-migration/USER.md
A  ../backend-migration/backend/core/metronome.js
A  "../backend-migration/backend/core/timeRhythm \342\200\224 \320\272\320\276\320\277\320\270\321\217 (2).js.MD"
A  ../backend-migration/backend/core/timeRhythm.js
A  "../backend-migration/docs/ADR-01 Core Data Model 2 \321\204\320\270\320\275\320\260\320\273.md"
A  ../backend-migration/docs/data-mapping.md
A  ../backend-migration/docs/migration/METRONOME-CANON.md
A  ../backend-migration/docs/migration/PURIFICATION-PROTOCOL.md
A  ../backend-migration/docs/migration/RO-DAG-STRUCTURE.md
A  "../backend-migration/docs/\320\232\320\273\321\216\321\207\320\265\320\262\321\213\320\265 \321\202\320\276\321\207\320\272\320\270.docx"
A  "../backend-migration/docs/\320\260\321\200\321\205\320\270\320\262/ADR-01 Core Data Model 2.md"
A  ../backend-migration/migrations/001_init.sql
A  ../backend-migration/migrations/001_init.txt
A  "../backend-migration/migrations/002_init .sql"
A  ../backend-migration/migrations/002_init.txt
A  ../backend-migration/package-lock.json
A  ../backend-migration/package.json
A  ../backend-migration/prompts/migration-task.md
A  ../backend-migration/server.js
A  ../backend-migration/source-code/i18n.js
A  ../backend-migration/source-code/logic.js
A  ../backend-migration/source-code/storage.js
A  ../backend-migration/source-code/timeRhythm.js
A  ../backend-migration/sql-schema/README.md
A  "../backend-migration/sql-schema/schema-v3.0-alpha \342\200\224 \320\272\320\276\320\277\320\270\321\217 (2).md"
A  "../backend-migration/sql-schema/schema-v3.0-alpha \342\200\224 \320\272\320\276\320\277\320\270\321\217 (2).sql"
A  "../backend-migration/sql-schema/schema-v3.0-alpha \342\200\224 \320\272\320\276\320\277\320\270\321\217 (3).sql.MD"
A  ../backend-migration/sql-schema/schema-v3.0-alpha.sql
A  ../backend-migration/sql-schema/schema-v3.0-alpha.txt
A  ../backend-migration/tools/project-inventory.js
A  ../backend-migration/tools/project-inventory2.js
A  "../backend-migration/\320\274\320\275\320\265\320\275\320\270\320\265 \320\275\320\276\321\202\320\265\320\261\321\203\320\272\320\233\320\234, \320\223\321\200\320\276\320\272, \321\207\320\260\321\202\320\223\320\237\320\2425.txt"
A  "../backend-migration/\320\274\320\275\320\265\320\275\320\270\320\265 \321\207\320\260\321\202 \320\223\320\237\320\242 5.md"
AM .claude/settings.local.json
A  .dockerignore
A  .env.example
A  CHRONICLE.md
A  DECLARATION.md
A  Dockerfile
A  MIGRATION-RULES.md
A  PRINCIPLE-OF-SHAPE.md
AM PROJECT-STATUS.md
A  README.md
A  SESSION-2026-05-03.md
A  backend/core/metronome.js
A  backend/core/timeRhythm.js
AD "backend/server \342\200\224 \320\2723.md"
AD "backend/server \342\200\224 \320\2724.md"
AD "backend/server \342\200\224 \320\2725.md"
AM backend/server.js
AD backend/server.md
A  claude-code-main/.claude-plugin/marketplace.json
A  claude-code-main/.claude/commands/commit-push-pr.md
A  claude-code-main/.claude/commands/dedupe.md
A  claude-code-main/.claude/commands/oncall-triage.md
A  claude-code-main/.devcontainer/Dockerfile
A  claude-code-main/.devcontainer/devcontainer.json
A  claude-code-main/.devcontainer/init-firewall.sh
A  claude-code-main/.gitattributes
A  claude-code-main/.github/ISSUE_TEMPLATE/bug_report.yml
A  claude-code-main/.github/ISSUE_TEMPLATE/config.yml
A  claude-code-main/.github/ISSUE_TEMPLATE/documentation.yml
A  claude-code-main/.github/ISSUE_TEMPLATE/feature_request.yml
A  claude-code-main/.github/ISSUE_TEMPLATE/model_behavior.yml
A  claude-code-main/.github/workflows/auto-close-duplicates.yml
A  claude-code-main/.github/workflows/backfill-duplicate-comments.yml
A  claude-code-main/.github/workflows/claude-dedupe-issues.yml
A  claude-code-main/.github/workflows/claude-issue-triage.yml
A  claude-code-main/.github/workflows/claude.yml
A  claude-code-main/.github/workflows/issue-opened-dispatch.yml
A  claude-code-main/.github/workflows/lock-closed-issues.yml
A  claude-code-main/.github/workflows/log-issue-events.yml
A  claude-code-main/.github/workflows/oncall-triage.yml
A  claude-code-main/.github/workflows/remove-autoclose-label.yml
A  claude-code-main/.github/workflows/stale-issue-manager.yml
A  claude-code-main/.gitignore
A  claude-code-main/.vscode/extensions.json
A  claude-code-main/CHANGELOG.md
A  claude-code-main/LICENSE.md
A  claude-code-main/README.md
A  claude-code-main/SECURITY.md
A  claude-code-main/Script/run_devcontainer_claude_code.ps1
A  claude-code-main/claude-code-main/.claude-plugin/marketplace.json
A  claude-code-main/claude-code-main/.claude/commands/commit-push-pr.md
A  claude-code-main/claude-code-main/.claude/commands/dedupe.md
A  claude-code-main/claude-code-main/.claude/commands/oncall-triage.md
A  claude-code-main/claude-code-main/.devcontainer/Dockerfile
A  claude-code-main/claude-code-main/.devcontainer/devcontainer.json
A  claude-code-main/claude-code-main/.devcontainer/init-firewall.sh
A  claude-code-main/claude-code-main/.gitattributes
A  claude-code-main/claude-code-main/.github/ISSUE_TEMPLATE/bug_report.yml
A  claude-code-main/claude-code-main/.github/ISSUE_TEMPLATE/config.yml
A  claude-code-main/claude-code-main/.github/ISSUE_TEMPLATE/documentation.yml
A  claude-code-main/claude-code-main/.github/ISSUE_TEMPLATE/feature_request.yml
A  claude-code-main/claude-code-main/.github/ISSUE_TEMPLATE/model_behavior.yml
A  claude-code-main/claude-code-main/.github/workflows/auto-close-duplicates.yml
A  claude-code-main/claude-code-main/.github/workflows/backfill-duplicate-comments.yml
A  claude-code-main/claude-code-main/.github/workflows/claude-dedupe-issues.yml
A  claude-code-main/claude-code-main/.github/workflows/claude-issue-triage.yml
A  claude-code-main/claude-code-main/.github/workflows/claude.yml
A  claude-code-main/claude-code-main/.github/workflows/issue-opened-dispatch.yml
A  claude-code-main/claude-code-main/.github/workflows/lock-closed-issues.yml
A  claude-code-main/claude-code-main/.github/workflows/log-issue-events.yml
A  claude-code-main/claude-code-main/.github/workflows/oncall-triage.yml
A  claude-code-main/claude-code-main/.github/workflows/remove-autoclose-label.yml
A  claude-code-main/claude-code-main/.github/workflows/stale-issue-manager.yml
A  claude-code-main/claude-code-main/.gitignore
A  claude-code-main/claude-code-main/.vscode/extensions.json
A  claude-code-main/claude-code-main/CHANGELOG.md
A  claude-code-main/claude-code-main/LICENSE.md
A  claude-code-main/claude-code-main/README.md
A  claude-code-main/claude-code-main/SECURITY.md
A  claude-code-main/claude-code-main/Script/run_devcontainer_claude_code.ps1
R  ../assets/audio/blagodarnost.mp3 -> claude-code-main/claude-code-main/demo.gif
A  claude-code-main/claude-code-main/examples/hooks/bash_command_validator_example.py
A  claude-code-main/claude-code-main/plugins/README.md
A  claude-code-main/claude-code-main/plugins/agent-sdk-dev/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/agent-sdk-dev/README.md
A  claude-code-main/claude-code-main/plugins/agent-sdk-dev/agents/agent-sdk-verifier-py.md
A  claude-code-main/claude-code-main/plugins/agent-sdk-dev/agents/agent-sdk-verifier-ts.md
A  claude-code-main/claude-code-main/plugins/agent-sdk-dev/commands/new-sdk-app.md
A  claude-code-main/claude-code-main/plugins/claude-opus-4-5-migration/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/claude-opus-4-5-migration/README.md
A  claude-code-main/claude-code-main/plugins/claude-opus-4-5-migration/skills/claude-opus-4-5-migration/SKILL.md
A  claude-code-main/claude-code-main/plugins/claude-opus-4-5-migration/skills/claude-opus-4-5-migration/references/effort.md
A  claude-code-main/claude-code-main/plugins/claude-opus-4-5-migration/skills/claude-opus-4-5-migration/references/prompt-snippets.md
A  claude-code-main/claude-code-main/plugins/code-review/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/code-review/README.md
A  claude-code-main/claude-code-main/plugins/code-review/commands/code-review.md
A  claude-code-main/claude-code-main/plugins/commit-commands/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/commit-commands/README.md
A  claude-code-main/claude-code-main/plugins/commit-commands/commands/clean_gone.md
A  claude-code-main/claude-code-main/plugins/commit-commands/commands/commit-push-pr.md
A  claude-code-main/claude-code-main/plugins/commit-commands/commands/commit.md
A  claude-code-main/claude-code-main/plugins/explanatory-output-style/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/explanatory-output-style/README.md
A  claude-code-main/claude-code-main/plugins/explanatory-output-style/hooks-handlers/session-start.sh
A  claude-code-main/claude-code-main/plugins/explanatory-output-style/hooks/hooks.json
A  claude-code-main/claude-code-main/plugins/feature-dev/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/feature-dev/README.md
A  claude-code-main/claude-code-main/plugins/feature-dev/agents/code-architect.md
A  claude-code-main/claude-code-main/plugins/feature-dev/agents/code-explorer.md
A  claude-code-main/claude-code-main/plugins/feature-dev/agents/code-reviewer.md
A  claude-code-main/claude-code-main/plugins/feature-dev/commands/feature-dev.md
A  claude-code-main/claude-code-main/plugins/frontend-design/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/frontend-design/README.md
A  claude-code-main/claude-code-main/plugins/frontend-design/skills/frontend-design/SKILL.md
A  claude-code-main/claude-code-main/plugins/hookify/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/hookify/.gitignore
A  claude-code-main/claude-code-main/plugins/hookify/README.md
A  claude-code-main/claude-code-main/plugins/hookify/agents/conversation-analyzer.md
A  claude-code-main/claude-code-main/plugins/hookify/commands/configure.md
A  claude-code-main/claude-code-main/plugins/hookify/commands/help.md
A  claude-code-main/claude-code-main/plugins/hookify/commands/hookify.md
A  claude-code-main/claude-code-main/plugins/hookify/commands/list.md
A  claude-code-main/claude-code-main/plugins/hookify/core/__init__.py
A  claude-code-main/claude-code-main/plugins/hookify/core/config_loader.py
A  claude-code-main/claude-code-main/plugins/hookify/core/rule_engine.py
A  claude-code-main/claude-code-main/plugins/hookify/examples/console-log-warning.local.md
A  claude-code-main/claude-code-main/plugins/hookify/examples/dangerous-rm.local.md
A  claude-code-main/claude-code-main/plugins/hookify/examples/require-tests-stop.local.md
A  claude-code-main/claude-code-main/plugins/hookify/examples/sensitive-files-warning.local.md
A  claude-code-main/claude-code-main/plugins/hookify/hooks/__init__.py
A  claude-code-main/claude-code-main/plugins/hookify/hooks/hooks.json
A  claude-code-main/claude-code-main/plugins/hookify/hooks/posttooluse.py
A  claude-code-main/claude-code-main/plugins/hookify/hooks/pretooluse.py
A  claude-code-main/claude-code-main/plugins/hookify/hooks/stop.py
A  claude-code-main/claude-code-main/plugins/hookify/hooks/userpromptsubmit.py
A  claude-code-main/claude-code-main/plugins/hookify/matchers/__init__.py
A  claude-code-main/claude-code-main/plugins/hookify/skills/writing-rules/SKILL.md
A  claude-code-main/claude-code-main/plugins/hookify/utils/__init__.py
A  claude-code-main/claude-code-main/plugins/learning-output-style/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/learning-output-style/README.md
A  claude-code-main/claude-code-main/plugins/learning-output-style/hooks-handlers/session-start.sh
A  claude-code-main/claude-code-main/plugins/learning-output-style/hooks/hooks.json
A  claude-code-main/claude-code-main/plugins/plugin-dev/README.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/agents/agent-creator.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/agents/plugin-validator.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/agents/skill-reviewer.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/commands/create-plugin.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/agent-development/SKILL.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/agent-development/examples/agent-creation-prompt.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/agent-development/examples/complete-agent-examples.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/agent-development/references/agent-creation-system-prompt.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/agent-development/references/system-prompt-design.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/agent-development/references/triggering-examples.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/agent-development/scripts/validate-agent.sh
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/command-development/README.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/command-development/SKILL.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/command-development/examples/plugin-commands.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/command-development/examples/simple-commands.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/command-development/references/advanced-workflows.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/command-development/references/documentation-patterns.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/command-development/references/frontmatter-reference.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/command-development/references/interactive-commands.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/command-development/references/marketplace-considerations.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/command-development/references/plugin-features-reference.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/command-development/references/testing-strategies.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/hook-development/SKILL.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/hook-development/examples/load-context.sh
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/hook-development/examples/validate-bash.sh
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/hook-development/examples/validate-write.sh
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/hook-development/references/advanced.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/hook-development/references/migration.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/hook-development/references/patterns.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/hook-development/scripts/README.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/hook-development/scripts/hook-linter.sh
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/hook-development/scripts/validate-hook-schema.sh
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/mcp-integration/SKILL.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/mcp-integration/examples/http-server.json
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/mcp-integration/examples/sse-server.json
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/mcp-integration/examples/stdio-server.json
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/mcp-integration/references/authentication.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/mcp-integration/references/server-types.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/mcp-integration/references/tool-usage.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-settings/SKILL.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-settings/examples/create-settings-command.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-settings/examples/example-settings.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-settings/examples/read-settings-hook.sh
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-settings/references/parsing-techniques.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-settings/references/real-world-examples.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-settings/scripts/parse-frontmatter.sh
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-settings/scripts/validate-settings.sh
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-structure/README.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-structure/SKILL.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-structure/examples/advanced-plugin.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-structure/examples/minimal-plugin.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-structure/examples/standard-plugin.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-structure/references/component-patterns.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/plugin-structure/references/manifest-reference.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/skill-development/SKILL.md
A  claude-code-main/claude-code-main/plugins/plugin-dev/skills/skill-development/references/skill-creator-original.md
A  claude-code-main/claude-code-main/plugins/pr-review-toolkit/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/pr-review-toolkit/README.md
A  claude-code-main/claude-code-main/plugins/pr-review-toolkit/agents/code-reviewer.md
A  claude-code-main/claude-code-main/plugins/pr-review-toolkit/agents/code-simplifier.md
A  claude-code-main/claude-code-main/plugins/pr-review-toolkit/agents/comment-analyzer.md
A  claude-code-main/claude-code-main/plugins/pr-review-toolkit/agents/pr-test-analyzer.md
A  claude-code-main/claude-code-main/plugins/pr-review-toolkit/agents/silent-failure-hunter.md
A  claude-code-main/claude-code-main/plugins/pr-review-toolkit/agents/type-design-analyzer.md
A  claude-code-main/claude-code-main/plugins/pr-review-toolkit/commands/review-pr.md
A  claude-code-main/claude-code-main/plugins/ralph-wiggum/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/ralph-wiggum/README.md
A  claude-code-main/claude-code-main/plugins/ralph-wiggum/commands/cancel-ralph.md
A  claude-code-main/claude-code-main/plugins/ralph-wiggum/commands/help.md
A  claude-code-main/claude-code-main/plugins/ralph-wiggum/commands/ralph-loop.md
A  claude-code-main/claude-code-main/plugins/ralph-wiggum/hooks/hooks.json
A  claude-code-main/claude-code-main/plugins/ralph-wiggum/hooks/stop-hook.sh
A  claude-code-main/claude-code-main/plugins/ralph-wiggum/scripts/setup-ralph-loop.sh
A  claude-code-main/claude-code-main/plugins/security-guidance/.claude-plugin/plugin.json
A  claude-code-main/claude-code-main/plugins/security-guidance/hooks/hooks.json
A  claude-code-main/claude-code-main/plugins/security-guidance/hooks/security_reminder_hook.py
A  claude-code-main/claude-code-main/scripts/auto-close-duplicates.ts
A  claude-code-main/claude-code-main/scripts/backfill-duplicate-comments.ts
A  claude-code-main/claude-code-main/scripts/comment-on-duplicates.sh
A  claude-code-main/demo.gif
A  claude-code-main/examples/hooks/bash_command_validator_example.py
A  claude-code-main/plugins/README.md
A  claude-code-main/plugins/agent-sdk-dev/.claude-plugin/plugin.json
A  claude-code-main/plugins/agent-sdk-dev/README.md
A  claude-code-main/plugins/agent-sdk-dev/agents/agent-sdk-verifier-py.md
A  claude-code-main/plugins/agent-sdk-dev/agents/agent-sdk-verifier-ts.md
A  claude-code-main/plugins/agent-sdk-dev/commands/new-sdk-app.md
A  claude-code-main/plugins/claude-opus-4-5-migration/.claude-plugin/plugin.json
A  claude-code-main/plugins/claude-opus-4-5-migration/README.md
A  claude-code-main/plugins/claude-opus-4-5-migration/skills/claude-opus-4-5-migration/SKILL.md
A  claude-code-main/plugins/claude-opus-4-5-migration/skills/claude-opus-4-5-migration/references/effort.md
A  claude-code-main/plugins/claude-opus-4-5-migration/skills/claude-opus-4-5-migration/references/prompt-snippets.md
A  claude-code-main/plugins/code-review/.claude-plugin/plugin.json
A  claude-code-main/plugins/code-review/README.md
A  claude-code-main/plugins/code-review/commands/code-review.md
A  claude-code-main/plugins/commit-commands/.claude-plugin/plugin.json
A  claude-code-main/plugins/commit-commands/README.md
A  claude-code-main/plugins/commit-commands/commands/clean_gone.md
A  claude-code-main/plugins/commit-commands/commands/commit-push-pr.md
A  claude-code-main/plugins/commit-commands/commands/commit.md
A  claude-code-main/plugins/explanatory-output-style/.claude-plugin/plugin.json
A  claude-code-main/plugins/explanatory-output-style/README.md
A  claude-code-main/plugins/explanatory-output-style/hooks-handlers/session-start.sh
A  claude-code-main/plugins/explanatory-output-style/hooks/hooks.json
A  claude-code-main/plugins/feature-dev/.claude-plugin/plugin.json
A  claude-code-main/plugins/feature-dev/README.md
A  claude-code-main/plugins/feature-dev/agents/code-architect.md
A  claude-code-main/plugins/feature-dev/agents/code-explorer.md
A  claude-code-main/plugins/feature-dev/agents/code-reviewer.md
A  claude-code-main/plugins/feature-dev/commands/feature-dev.md
A  claude-code-main/plugins/frontend-design/.claude-plugin/plugin.json
A  claude-code-main/plugins/frontend-design/README.md
A  claude-code-main/plugins/frontend-design/skills/frontend-design/SKILL.md
A  claude-code-main/plugins/hookify/.claude-plugin/plugin.json
A  claude-code-main/plugins/hookify/.gitignore
A  claude-code-main/plugins/hookify/README.md
A  claude-code-main/plugins/hookify/agents/conversation-analyzer.md
A  claude-code-main/plugins/hookify/commands/configure.md
A  claude-code-main/plugins/hookify/commands/help.md
A  claude-code-main/plugins/hookify/commands/hookify.md
A  claude-code-main/plugins/hookify/commands/list.md
A  claude-code-main/plugins/hookify/core/__init__.py
A  claude-code-main/plugins/hookify/core/config_loader.py
A  claude-code-main/plugins/hookify/core/rule_engine.py
A  claude-code-main/plugins/hookify/examples/console-log-warning.local.md
A  claude-code-main/plugins/hookify/examples/dangerous-rm.local.md
A  claude-code-main/plugins/hookify/examples/require-tests-stop.local.md
A  claude-code-main/plugins/hookify/examples/sensitive-files-warning.local.md
A  claude-code-main/plugins/hookify/hooks/__init__.py
A  claude-code-main/plugins/hookify/hooks/hooks.json
A  claude-code-main/plugins/hookify/hooks/posttooluse.py
A  claude-code-main/plugins/hookify/hooks/pretooluse.py
A  claude-code-main/plugins/hookify/hooks/stop.py
A  claude-code-main/plugins/hookify/hooks/userpromptsubmit.py
A  claude-code-main/plugins/hookify/matchers/__init__.py
A  claude-code-main/plugins/hookify/skills/writing-rules/SKILL.md
A  claude-code-main/plugins/hookify/utils/__init__.py
A  claude-code-main/plugins/learning-output-style/.claude-plugin/plugin.json
A  claude-code-main/plugins/learning-output-style/README.md
A  claude-code-main/plugins/learning-output-style/hooks-handlers/session-start.sh
A  claude-code-main/plugins/learning-output-style/hooks/hooks.json
A  claude-code-main/plugins/plugin-dev/README.md
A  claude-code-main/plugins/plugin-dev/agents/agent-creator.md
A  claude-code-main/plugins/plugin-dev/agents/plugin-validator.md
A  claude-code-main/plugins/plugin-dev/agents/skill-reviewer.md
A  claude-code-main/plugins/plugin-dev/commands/create-plugin.md
A  claude-code-main/plugins/plugin-dev/skills/agent-development/SKILL.md
A  claude-code-main/plugins/plugin-dev/skills/agent-development/examples/agent-creation-prompt.md
A  claude-code-main/plugins/plugin-dev/skills/agent-development/examples/complete-agent-examples.md
A  claude-code-main/plugins/plugin-dev/skills/agent-development/references/agent-creation-system-prompt.md
A  claude-code-main/plugins/plugin-dev/skills/agent-development/references/system-prompt-design.md
A  claude-code-main/plugins/plugin-dev/skills/agent-development/references/triggering-examples.md
A  claude-code-main/plugins/plugin-dev/skills/agent-development/scripts/validate-agent.sh
A  claude-code-main/plugins/plugin-dev/skills/command-development/README.md
A  claude-code-main/plugins/plugin-dev/skills/command-development/SKILL.md
A  claude-code-main/plugins/plugin-dev/skills/command-development/examples/plugin-commands.md
A  claude-code-main/plugins/plugin-dev/skills/command-development/examples/simple-commands.md
A  claude-code-main/plugins/plugin-dev/skills/command-development/references/advanced-workflows.md
A  claude-code-main/plugins/plugin-dev/skills/command-development/references/documentation-patterns.md
A  claude-code-main/plugins/plugin-dev/skills/command-development/references/frontmatter-reference.md
A  claude-code-main/plugins/plugin-dev/skills/command-development/references/interactive-commands.md
A  claude-code-main/plugins/plugin-dev/skills/command-development/references/marketplace-considerations.md
A  claude-code-main/plugins/plugin-dev/skills/command-development/references/plugin-features-reference.md
A  claude-code-main/plugins/plugin-dev/skills/command-development/references/testing-strategies.md
A  claude-code-main/plugins/plugin-dev/skills/hook-development/SKILL.md
A  claude-code-main/plugins/plugin-dev/skills/hook-development/examples/load-context.sh
A  claude-code-main/plugins/plugin-dev/skills/hook-development/examples/validate-bash.sh
A  claude-code-main/plugins/plugin-dev/skills/hook-development/examples/validate-write.sh
A  claude-code-main/plugins/plugin-dev/skills/hook-development/references/advanced.md
A  claude-code-main/plugins/plugin-dev/skills/hook-development/references/migration.md
A  claude-code-main/plugins/plugin-dev/skills/hook-development/references/patterns.md
A  claude-code-main/plugins/plugin-dev/skills/hook-development/scripts/README.md
A  claude-code-main/plugins/plugin-dev/skills/hook-development/scripts/hook-linter.sh
A  claude-code-main/plugins/plugin-dev/skills/hook-development/scripts/test-hook.sh
A  claude-code-main/plugins/plugin-dev/skills/hook-development/scripts/validate-hook-schema.sh
A  claude-code-main/plugins/plugin-dev/skills/mcp-integration/SKILL.md
A  claude-code-main/plugins/plugin-dev/skills/mcp-integration/examples/http-server.json
A  claude-code-main/plugins/plugin-dev/skills/mcp-integration/examples/sse-server.json
A  claude-code-main/plugins/plugin-dev/skills/mcp-integration/examples/stdio-server.json
A  claude-code-main/plugins/plugin-dev/skills/mcp-integration/references/authentication.md
A  claude-code-main/plugins/plugin-dev/skills/mcp-integration/references/server-types.md
A  claude-code-main/plugins/plugin-dev/skills/mcp-integration/references/tool-usage.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-settings/SKILL.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-settings/examples/create-settings-command.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-settings/examples/example-settings.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-settings/examples/read-settings-hook.sh
A  claude-code-main/plugins/plugin-dev/skills/plugin-settings/references/parsing-techniques.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-settings/references/real-world-examples.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-settings/scripts/parse-frontmatter.sh
A  claude-code-main/plugins/plugin-dev/skills/plugin-settings/scripts/validate-settings.sh
A  claude-code-main/plugins/plugin-dev/skills/plugin-structure/README.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-structure/SKILL.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-structure/examples/advanced-plugin.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-structure/examples/minimal-plugin.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-structure/examples/standard-plugin.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-structure/references/component-patterns.md
A  claude-code-main/plugins/plugin-dev/skills/plugin-structure/references/manifest-reference.md
A  claude-code-main/plugins/plugin-dev/skills/skill-development/SKILL.md
A  claude-code-main/plugins/plugin-dev/skills/skill-development/references/skill-creator-original.md
A  claude-code-main/plugins/pr-review-toolkit/.claude-plugin/plugin.json
A  claude-code-main/plugins/pr-review-toolkit/README.md
A  claude-code-main/plugins/pr-review-toolkit/agents/code-reviewer.md
A  claude-code-main/plugins/pr-review-toolkit/agents/code-simplifier.md
A  claude-code-main/plugins/pr-review-toolkit/agents/comment-analyzer.md
A  claude-code-main/plugins/pr-review-toolkit/agents/pr-test-analyzer.md
A  claude-code-main/plugins/pr-review-toolkit/agents/silent-failure-hunter.md
A  claude-code-main/plugins/pr-review-toolkit/agents/type-design-analyzer.md
A  claude-code-main/plugins/pr-review-toolkit/commands/review-pr.md
A  claude-code-main/plugins/ralph-wiggum/.claude-plugin/plugin.json
A  claude-code-main/plugins/ralph-wiggum/README.md
A  claude-code-main/plugins/ralph-wiggum/commands/cancel-ralph.md
A  claude-code-main/plugins/ralph-wiggum/commands/help.md
A  claude-code-main/plugins/ralph-wiggum/commands/ralph-loop.md
A  claude-code-main/plugins/ralph-wiggum/hooks/hooks.json
A  claude-code-main/plugins/ralph-wiggum/hooks/stop-hook.sh
A  claude-code-main/plugins/ralph-wiggum/scripts/setup-ralph-loop.sh
A  claude-code-main/plugins/security-guidance/.claude-plugin/plugin.json
A  claude-code-main/plugins/security-guidance/hooks/hooks.json
A  claude-code-main/plugins/security-guidance/hooks/security_reminder_hook.py
A  claude-code-main/scripts/auto-close-duplicates.ts
A  claude-code-main/scripts/backfill-duplicate-comments.ts
A  claude-code-main/scripts/comment-on-duplicates.sh
A  docker-compose.yml
A  docs/ADR-01.2-CANONICAL.md
A  docs/INITIATOR-TREE-GUIDE.md
A  docs/METRONOME-CANON.md
A  docs/MIGRATION-GUIDE.md
A  docs/MIGRATION-RULES.md
A  docs/ONTOLOGY-ABSOLUTE-ZERO.md
A  docs/PURIFICATION-PROTOCOL.md
A  docs/REPLAY-TEST.md
A  docs/RO-DAG-STRUCTURE.md
A  docs/SOCIAL-BREATHING.md
A  docs/STEP-10.5-FACE-SHAPE.md
A  docs/STEP-10.6-PROTOCOL-KOL.md
A  docs/STEP-11.0-ONTOLOGY-ZERO.md
A  docs/STEP-11.1-SOCIAL-INFRASTRUCTURE.md
A  docs/STEP-11.2-12-INSTITUTIONALIZATION.md
A  docs/STEP-13-EXTERNAL-SYMMETRY.md
A  docs/STEP-8-FIELD-PROTOTYPE.md
A  docs/UM-LAYER.md
A  docs/VISUALIZATION-CANON.md
AM frontend/field.html
AM i18n/en.json
A  i18n/i18n.js
AM i18n/ru.json
AM index.html
R  ../manifesto/en/Black_Paper_Pygmalion_v1.1.EN.pdf -> manifesto/en/Black_Paper_Pygmalion_v1.1.EN.pdf
R  ../manifesto/en/White_Paper_Pygmalion_v1.1.EN.pdf -> manifesto/en/White_Paper_Pygmalion_v1.1.EN.pdf
R  ../manifesto/black-paper/Black_Paper_Pygmalion_v1.1.pdf -> manifesto/ru/Black_Paper_Pygmalion_v1.1.pdf
R  ../manifesto/white-paper/White_Paper_Pygmalion_v1.1.pdf -> manifesto/ru/White_Paper_Pygmalion_v1.1.pdf
A  migrations/001_init.sql
A  migrations/002_init.sql
A  package-lock.json
A  package.json
A  source-code/logic.js
A  source-code/storage.js
A  source-code/timeRhythm.js
AM sql-schema/schema-v3.0-alpha.sql
A  tools/migrate-v3-to-v4.js
A  tools/observe-field.js
A  tools/project-inventory.js
A  tools/replay-core.js
A  tools/test-dump.json
A  tools/test-metronome.js
D  ../contact/favicon.ico
D  ../contact/img/qr-contact.png
D  ../contact/img/qr-contact.txt
D  ../contact/index.html
D  ../docs/App.jsx
D  ../docs/Chronicle_Letopis/1.TXT
D  ../docs/Chronicle_Letopis/Chronicle.docx
D  ../docs/index.css
D  ../docs/main.jsx
A  "../docs/\320\276\321\202\320\262\320\265\321\202\321\213 \320\232\320\273\320\260\321\203\320\264 \320\232\320\276\320\264.docx"
A  "../docs/\320\276\321\202\320\262\320\265\321\202\321\213 \320\232\320\273\320\260\321\203\320\264 \320\232\320\276\320\264.txt"
D  ../faq-advanced-en.html
D  ../faq-advanced.html
D  ../favicon.ico
D  ../gemini-code/FIXES_FOR_GEMINI.md
D  ../gemini-code/Pygmalion_v0.3.2_Canonical.jsx
D  ../gemini-code/threshold.css
D  ../gemini-code/threshold.html
D  ../gemini-code/threshold.js
D  ../hronicle/extended/Chronicle_Letopis.md
D  ../hronicle/index.html
D  ../index.html
D  ../manifesto/black-paper/Black_Paper_Pygmalion_v1.0.pdf
D  ../manifesto/en/index.html
D  ../manifesto/favicon.ico
D  ../manifesto/index.html
D  ../manifesto/manifesto.css
D  ../manifesto/presentations/Pygmalion_KRISTALL_Noonomics.pdf
D  ../manifesto/presentations/Pygmalion_Social_Architecture.pdf
D  ../manifesto/presentations/Pygmalion_The_Value_Protocol.pdf
D  ../manifesto/white-paper/White_Paper_Pygmalion_v1.0..pdf
D  "../mvp/README MVP (ru). md"
D  ../mvp/app/assets/favicon.ico
D  ../mvp/app/assets/index-Bj67uv-4.css
D  ../mvp/app/assets/index-jtofjqSH.js
D  ../mvp/app/index.html
D  ../mvp/app/offline-mvp/-1style.css
D  ../mvp/app/offline-mvp/favicon.ico
D  ../mvp/app/offline-mvp/index.html
D  ../mvp/app/offline-mvp/logic.js
D  ../mvp/app/offline-mvp/style.css
D  ../mvp/app/package-lock.json
D  ../mvp/app/package.json
D  ../mvp/app/postcss.config.js
D  ../mvp/app/public/favicon.ico
D  ../mvp/app/src/App.jsx
D  ../mvp/app/src/index.css
D  ../mvp/app/src/main.jsx
D  ../mvp/app/tailwind.config.js
D  ../mvp/app/vite.config.js
D  "../mvp/download/MVP v.0.2.2. \320\272\320\260\320\275\320\276\320\275 \320\237\320\270\320\263\320\274\320\260\320\273\320\270\320\276\320\275-\320\232.index.html"
D  ../mvp/download/offline-mvp-0.1.6.7z
D  ../mvp/favicon.ico
D  ../mvp/index.html
D  ../mvp/mvp.js
A  ../sandbox-v.A.3.14/0logic.js
A  ../sandbox-v.A.3.14/index.html
A  ../sandbox-v.A.3.14/logic-old.js
A  ../sandbox-v.A.3.14/logic.js
A  ../sandbox-v.A.3.14/storage.js
A  ../sandbox-v.A.3.14/style-threshold.css
A  ../sandbox-v.A.3.14/style.css
A  ../sandbox-v.A.3.14/threshold.html
A  ../sandbox-v.A.3.14/threshold.js
A  ../sandbox-v.A.3.14/timeRhythm.js
D  ../sandbox-v0.3.12/1.txt
D  ../sandbox-v0.3.2/Pygmalion_v0.3.2_Canonical.jsx
D  ../sandbox-v0.3.2/threshold.css
D  ../sandbox-v0.3.2/threshold.html
D  ../sandbox-v0.3.2/threshold.js
D  "../sandbox-v0.3.20/\320\235\320\276\320\262\320\260\321\217 \320\277\320\260\320\277\320\272\320\260/\320\276\321\204\320\273\320\260\320\271\320\275 v.0.2.6.txt"
D  "../sandbox-v0.3.20/\320\237\320\233\320\220\320\235 \320\270\321\201\320\277\321\200\320\260\320\262\320\273\320\265\320\275\320\270\320\271.txt"
D  ../support/favicon.ico
D  ../support/index.html
A  "../\320\263\320\265\320\274\320\270\320\275\320\270 3.1/Pygmalion Sandbox MVP v0.3.0.txt"
A  "../\320\263\320\265\320\274\320\270\320\275\320\270 3.1/\320\237\320\270\320\263\320\274\320\260\320\273\320\270\320\276\320\275 \320\232\320\276\320\274\320\261\320\260\320\271\320\275.txt"
?? CHANGES-STEP-13.md
?? CHANGES-STEP-14.md
?? STEP-13-SUMMARY.txt
?? docs/CYCLE-OF-PRESENCE.md
?? docs/ETHICS-OF-RHYTHM.md
?? docs/POST-STEP-13-REPORT.md
?? docs/RHYTHM-CANON.md
?? docs/SILENCE-PROTECTION.md
?? docs/STEP-14-ONTOLOGICAL-THRESHOLD.md
?? frontend/threshold.html
?? migrations/003_threshold_crossed.sql
?? migrations/004_cooldown_fields.sql
```
</details>

## 🎯 Приоритетные задачи

### Сегодня (08.05.2026)

- [ ] Устранить критические напряжения (tensions)
- [ ] Синхронизация schema-v3.0-alpha.sql с ADR-01.2
- [ ] Валидация триад в server.js (T1-T5, правила эмиссии)
- [ ] Проверка восстановимости ue_units из acts_log

### На неделю

- [ ] Тестирование burn-процесса (правило "следующая полночь")
- [ ] Миграционный скрипт из sandbox-v0.3.26.05
- [ ] Удаление файлов-дублей
- [ ] Документация процессов (METRONOME-CANON, RO-DAG, PURIFICATION)

---

**Рекомендация:** Запускай этот скрипт в начале каждой сессии:
```bash
node tools/project-inventory.js
```
