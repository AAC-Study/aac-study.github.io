/* Экзамены и проверочные (בחנים) на главной: только «есть экзамен, когда», без напоминаний.
   Поля:
     id, subject (id из data/subjects.js)
     kind {he,ru,en} — как назвал преподаватель (בוחן / מבחן …)
     title {he,ru,en} — тема
     date — 'YYYY-MM-DD' или null, если дату ещё не назвали
     hint {he,ru,en} — необязательно: что сказали о сроке («на следующей неделе»)
     hideAfter — 'YYYY-MM-DD': для экзамена без даты, после этого дня не показывать
   С датой — карточка исчезает на следующий день после экзамена. */
window.EXAMS = [
  {
    id: 'computer-2026-11-bohan-bases', subject: 'computer',
    kind: { he: 'בוחן סיכום נושא', ru: 'Экзамен', en: 'End-of-topic quiz' },
    title: { he: 'המרה בין בסיסים, חיבור בינארי, חיבור בין מספרים שליליים לחיוביים · שעה, 3 תרגילים', ru: 'Системы счисления: переводы, двоичное сложение, сложение отрицательных и положительных · 1 час, 3 задания', en: 'Base conversion, binary addition, adding negative and positive numbers · 1 hour, 3 tasks' },
    date: null,
    hint: { he: 'נאמר: בשבוע הבא', ru: 'сказали: на следующей неделе', en: 'said: next week' },
    hideAfter: '2026-11-20'
  }
];
