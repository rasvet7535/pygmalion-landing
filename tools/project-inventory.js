// ============================================================
// Pygmalion v0.4.0 — Project Inventory
// ------------------------------------------------------------
// Назначение:
// - Фиксировать текущее состояние проекта
// - Проверять целостность канона (ADR, schema, server)
// - Выявлять архитектурные напряжения (tensions)
// ============================================================

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = '.';
const OUTPUT_FILE = 'PROJECT-STATUS.md';

// Канонические файлы — источники истины
const CANON_FILES = [
  { path: 'docs/ADR-01.2-CANONICAL.md', name: 'ADR-01.2 (Единственный канон)', role: 'canon' },
  { path: 'sql-schema/schema-v3.0-alpha.sql', name: 'Schema v3.0 (Структура БД)', role: 'canon' },
  { path: 'MIGRATION-RULES.md', name: 'Правила миграции', role: 'canon' }
];

// Реализация — должна соответствовать канону
const IMPLEMENTATION_FILES = [
  { path: 'backend/server.js', name: 'API Gateway (server.js)', role: 'implementation' },
  { path: 'backend/core/metronome.js', name: 'TimeRhythm (Метроном)', role: 'implementation' },
  { path: 'backend/core/timeRhythm.js', name: 'TimeRhythm (альт.)', role: 'implementation' },
  { path: 'source-code/logic.js', name: 'Исходная логика (v0.3.26)', role: 'source' },
  { path: 'source-code/storage.js', name: 'Исходное хранилище', role: 'source' }
];

// Документация процессов
const PROCESS_DOCS = [
  { path: 'docs/METRONOME-CANON.md', name: 'Канон времени 24+4', role: 'process' },
  { path: 'docs/RO-DAG-STRUCTURE.md', name: 'ro.DAG структура', role: 'process' },
  { path: 'docs/PURIFICATION-PROTOCOL.md', name: 'Протокол Ночи Очищения', role: 'process' }
];

const CRITICAL_FILES = [...CANON_FILES, ...IMPLEMENTATION_FILES, ...PROCESS_DOCS];

const KEY_DIRECTORIES = [
  'docs',
  'sql-schema',
  'migrations',
  'backend',
  'backend/core',
  'source-code',
  'tools',
  'prompts'
];

/** Получить информацию о файле */
function getFileInfo(filePath) {
  try {
    const stat = fs.statSync(filePath);
    return {
      exists: true,
      sizeKB: (stat.size / 1024).toFixed(1),
      modified: stat.mtime.toISOString().slice(0, 19).replace('T', ' ')
    };
  } catch {
    return { exists: false };
  }
}

/** Проверить архитектурные напряжения (tensions) */
function detectTensions() {
  const tensions = [];

  // 1. Проверка канона
  const canonMissing = CANON_FILES.filter(f => !getFileInfo(f.path).exists);
  if (canonMissing.length > 0) {
    tensions.push({
      level: 'critical',
      type: 'missing_canon',
      message: `Отсутствуют канонические файлы: ${canonMissing.map(f => f.name).join(', ')}`,
      impact: 'Невозможно проверить соответствие реализации канону'
    });
  }

  // 2. Проверка реализации
  const implMissing = IMPLEMENTATION_FILES.filter(f => !getFileInfo(f.path).exists);
  if (implMissing.length > 0) {
    tensions.push({
      level: 'high',
      type: 'missing_implementation',
      message: `Отсутствуют файлы реализации: ${implMissing.map(f => f.name).join(', ')}`,
      impact: 'Система не может функционировать'
    });
  }

  // 3. Проверка дублей (копии файлов)
  const duplicates = findDuplicates();
  if (duplicates.length > 0) {
    tensions.push({
      level: 'medium',
      type: 'duplicates',
      message: `Найдено ${duplicates.length} файлов-дублей с суффиксами "— копия"`,
      impact: 'Неясно, какая версия актуальна',
      files: duplicates.slice(0, 5) // первые 5
    });
  }

  // 4. Проверка несинхронизированных изменений
  const git = getGitStatus();
  if (git.hasChanges) {
    const modifiedCount = git.status.split('\n').filter(l => l.startsWith(' M')).length;
    const deletedCount = git.status.split('\n').filter(l => l.startsWith(' D')).length;
    const untrackedCount = git.status.split('\n').filter(l => l.startsWith('??')).length;

    if (modifiedCount > 10 || deletedCount > 50) {
      tensions.push({
        level: 'medium',
        type: 'git_drift',
        message: `Большое количество изменений: ${modifiedCount} изменено, ${deletedCount} удалено, ${untrackedCount} не отслеживается`,
        impact: 'Сложно понять текущее состояние проекта'
      });
    }
  }

  // 5. Проверка восстановимости из acts_log
  const schemaInfo = getFileInfo('sql-schema/schema-v3.0-alpha.sql');
  if (schemaInfo.exists) {
    const schemaContent = fs.readFileSync('sql-schema/schema-v3.0-alpha.sql', 'utf-8');
    const hasActsLog = schemaContent.includes('acts_log');
    const hasUeUnits = schemaContent.includes('ue_units');

    if (hasActsLog && hasUeUnits) {
      tensions.push({
        level: 'low',
        type: 'dual_source_of_truth',
        message: 'Обнаружены и acts_log, и ue_units в схеме',
        impact: 'Возможно нарушение Event Sourcing — ue_units должны восстанавливаться из acts_log'
      });
    }
  }

  return tensions;
}

/** Найти файлы-дубли */
function findDuplicates() {
  const duplicates = [];
  const dirs = ['sql-schema', 'backend/core', 'tools', 'migrations'];

  dirs.forEach(dir => {
    try {
      const files = fs.readdirSync(dir);
      const dupes = files.filter(f =>
        f.includes('— копия') ||
        f.includes('копия (2)') ||
        f.includes('копия (3)')
      );
      dupes.forEach(f => duplicates.push(path.join(dir, f)));
    } catch {}
  });

  return duplicates;
}

/** Рекурсивное сканирование папки */
function scanDir(dir, depth = 0, maxDepth = 3) {
  if (depth > maxDepth) return '';
  let result = '';
  let items;
  try {
    items = fs.readdirSync(dir);
  } catch {
    return `❌ Нет доступа: ${dir}\n`;
  }

  items.sort().forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    const indent = '  '.repeat(depth);

    if (stat.isDirectory()) {
      result += `${indent}📁 ${item}/\n`;
      result += scanDir(fullPath, depth + 1, maxDepth);
    } else {
      result += `${indent}📄 ${item} (${(stat.size/1024).toFixed(1)} KB)\n`;
    }
  });
  return result;
}

/** Получить Git статус */
function getGitStatus() {
  try {
    const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    const status = execSync('git status --short', { encoding: 'utf8' }).trim();
    return { branch, hasChanges: status.length > 0, status };
  } catch {
    return { branch: 'не Git репозиторий', hasChanges: false };
  }
}

/** Главная функция */
function generateInventory() {
  console.log('🔍 Запуск полной инвентаризации проекта Pygmalion...\n');

  const git = getGitStatus();
  const tensions = detectTensions();

  let report = `# 📊 PROJECT STATUS — Pygmalion v0.4.0-alpha\n\n`;
  report += `**Дата и время:** ${new Date().toLocaleString('ru-RU')}\n`;
  report += `**Git branch:** ${git.branch}\n\n`;

  // Архитектурные напряжения (tensions)
  if (tensions.length > 0) {
    report += `## ⚠️ Архитектурные напряжения (Tensions)\n\n`;

    const critical = tensions.filter(t => t.level === 'critical');
    const high = tensions.filter(t => t.level === 'high');
    const medium = tensions.filter(t => t.level === 'medium');
    const low = tensions.filter(t => t.level === 'low');

    if (critical.length > 0) {
      report += `### 🔴 Критические\n\n`;
      critical.forEach(t => {
        report += `**${t.type}:** ${t.message}\n`;
        report += `*Влияние:* ${t.impact}\n\n`;
      });
    }

    if (high.length > 0) {
      report += `### 🟠 Высокие\n\n`;
      high.forEach(t => {
        report += `**${t.type}:** ${t.message}\n`;
        report += `*Влияние:* ${t.impact}\n\n`;
      });
    }

    if (medium.length > 0) {
      report += `### 🟡 Средние\n\n`;
      medium.forEach(t => {
        report += `**${t.type}:** ${t.message}\n`;
        report += `*Влияние:* ${t.impact}\n`;
        if (t.files) {
          report += `*Примеры:* ${t.files.slice(0, 3).join(', ')}\n`;
        }
        report += `\n`;
      });
    }

    if (low.length > 0) {
      report += `### 🟢 Низкие\n\n`;
      low.forEach(t => {
        report += `**${t.type}:** ${t.message}\n`;
        report += `*Влияние:* ${t.impact}\n\n`;
      });
    }
  } else {
    report += `## ✅ Архитектурных напряжений не обнаружено\n\n`;
  }

  // Канонические файлы
  report += `## 📜 Канон (источники истины)\n\n`;
  report += `| Статус | Файл | Размер | Последнее изменение |\n`;
  report += `|--------|------|--------|---------------------|\n`;

  CANON_FILES.forEach(item => {
    const info = getFileInfo(item.path);
    const status = info.exists ? '✅' : '❌';
    const size = info.exists ? info.sizeKB + ' KB' : '-';
    const mod = info.exists ? info.modified : '-';
    report += `| ${status} | ${item.name} | ${size} | ${mod} |\n`;
  });

  // Реализация
  report += `\n## 🔧 Реализация\n\n`;
  report += `| Статус | Файл | Размер | Последнее изменение |\n`;
  report += `|--------|------|--------|---------------------|\n`;

  IMPLEMENTATION_FILES.forEach(item => {
    const info = getFileInfo(item.path);
    const status = info.exists ? '✅' : '❌';
    const size = info.exists ? info.sizeKB + ' KB' : '-';
    const mod = info.exists ? info.modified : '-';
    report += `| ${status} | ${item.name} | ${size} | ${mod} |\n`;
  });

  // Документация процессов
  report += `\n## 📖 Документация процессов\n\n`;
  report += `| Статус | Файл | Размер | Последнее изменение |\n`;
  report += `|--------|------|--------|---------------------|\n`;

  PROCESS_DOCS.forEach(item => {
    const info = getFileInfo(item.path);
    const status = info.exists ? '✅' : '❌';
    const size = info.exists ? info.sizeKB + ' KB' : '-';
    const mod = info.exists ? info.modified : '-';
    report += `| ${status} | ${item.name} | ${size} | ${mod} |\n`;
  });

  // Структура папок (сокращённая)
  report += `\n## 📁 Структура ключевых папок\n\n`;
  const keyDirs = ['docs', 'sql-schema', 'backend/core', 'migrations'];
  keyDirs.forEach(dir => {
    report += `### ${dir}/\n`;
    report += scanDir(dir, 0, 2); // глубина 2
    report += `\n`;
  });

  // Git изменения (краткая сводка)
  if (git.hasChanges) {
    const lines = git.status.split('\n');
    const modified = lines.filter(l => l.startsWith(' M')).length;
    const deleted = lines.filter(l => l.startsWith(' D')).length;
    const untracked = lines.filter(l => l.startsWith('??')).length;

    report += `## 📊 Git изменения (сводка)\n\n`;
    report += `- Изменено: ${modified}\n`;
    report += `- Удалено: ${deleted}\n`;
    report += `- Не отслеживается: ${untracked}\n\n`;
    report += `<details>\n<summary>Полный список изменений</summary>\n\n\`\`\`\n${git.status}\n\`\`\`\n</details>\n\n`;
  }

  // Приоритетные задачи
  report += `## 🎯 Приоритетные задачи\n\n`;
  report += `### Сегодня (${new Date().toLocaleDateString('ru-RU')})\n\n`;
  report += `- [ ] Устранить критические напряжения (tensions)\n`;
  report += `- [ ] Синхронизация schema-v3.0-alpha.sql с ADR-01.2\n`;
  report += `- [ ] Валидация триад в server.js (T1-T5, правила эмиссии)\n`;
  report += `- [ ] Проверка восстановимости ue_units из acts_log\n\n`;

  report += `### На неделю\n\n`;
  report += `- [ ] Тестирование burn-процесса (правило "следующая полночь")\n`;
  report += `- [ ] Миграционный скрипт из sandbox-v0.3.26.05\n`;
  report += `- [ ] Удаление файлов-дублей\n`;
  report += `- [ ] Документация процессов (METRONOME-CANON, RO-DAG, PURIFICATION)\n\n`;

  report += `---\n\n`;
  report += `**Рекомендация:** Запускай этот скрипт в начале каждой сессии:\n`;
  report += `\`\`\`bash\nnode tools/project-inventory.js\n\`\`\`\n`;

  fs.writeFileSync(OUTPUT_FILE, report, 'utf-8');

  console.log(`✅ Инвентаризация завершена!`);
  console.log(`📂 Отчёт: ${OUTPUT_FILE}`);

  if (tensions.length > 0) {
    const criticalCount = tensions.filter(t => t.level === 'critical').length;
    const highCount = tensions.filter(t => t.level === 'high').length;
    console.log(`⚠️  Обнаружено напряжений: ${tensions.length} (критических: ${criticalCount}, высоких: ${highCount})`);
  } else {
    console.log(`✅ Архитектурных напряжений не обнаружено`);
  }
}

// Запуск
generateInventory();