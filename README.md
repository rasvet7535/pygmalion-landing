# Pygmalion Backend v0.4.0-alpha

## 🚀 Быстрый старт с Docker

### Требования
- Docker 20.10+
- Docker Compose 2.0+

### Запуск

```bash
# 1. Клонировать репозиторий
git clone <repo-url>
cd backend-v0.4.0-clean

# 2. Запустить стек (PostgreSQL + Backend)
docker-compose up -d

# 3. Проверить статус
docker-compose ps

# 4. Проверить логи
docker-compose logs -f backend

# 5. Проверить health
curl http://localhost:3000/health
```

### Остановка

```bash
docker-compose down
```

### Полная очистка (включая данные БД)

```bash
docker-compose down -v
```

---

## 📊 Структура проекта

```
backend-v0.4.0-clean/
├── backend/
│   ├── server.js           # API Gateway
│   └── core/
│       ├── metronome.js    # Метроном (канон времени)
│       └── timeRhythm.js   # TimeRhythm (альт.)
├── sql-schema/
│   └── schema-v3.0-alpha.sql  # Схема БД (auto-init)
├── docs/
│   ├── ADR-01.2-CANONICAL.md  # Единственный канон
│   ├── REPLAY-TEST.md         # Сценарий Replay Test
│   └── ...
├── tools/
│   └── project-inventory.js   # Инвентаризация
├── docker-compose.yml      # Docker стек
├── Dockerfile              # Backend образ
└── package.json
```

---

## 🧪 Replay Test — «Смерть и Воскрешение»

После запуска стека выполните Replay Test:

```bash
# 1. Подключиться к БД
docker-compose exec postgres psql -U pygmalion -d pygmalion_v04

# 2. Выполнить сценарий из docs/REPLAY-TEST.md
# (см. полный SQL-код в документе)
```

---

## 🔧 API Endpoints

- `GET /health` — Health check
- `POST /api/acts` — Запись акта (EMISSION, TRANSFER)
- `GET /api/presence/:ok_id` — Проекция присутствия
- `GET /api/mirror/:ok_id` — Зеркало присутствия
- `POST /api/burn` — Ручное сгорание У.Е.
- `POST /api/ok` — Регистрация О.К.
- `POST /api/annotations` — Добавление интерпретации

---

## 📖 Документация

- **Канон:** `docs/ADR-01.2-CANONICAL.md`
- **Схема БД:** `sql-schema/schema-v3.0-alpha.sql`
- **Replay Test:** `docs/REPLAY-TEST.md`
- **Правила миграции:** `docs/MIGRATION-RULES.md`

---

## 🎯 Статус проекта

**Версия:** v0.4.0-alpha  
**Фаза:** 1 «Фундамент» (95% завершено)  
**Следующий шаг:** Replay Test

---

## 📝 Лицензия

Pygmalion / C.R.I.S.T.A.L.L. — числовая НОД-платформа  
© 2026 Pygmalion Team
