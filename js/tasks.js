/* Задачи урока.
   1) TaskCheck — проверка ответа (чистые функции, работают и в node: test/checker.test.js).
   2) Tasks.open(lesson, task, opts) — окно решения: черновик (рисование/текст), поле ответа, «Проверить»,
      подсказки, шторка с полным решением, промпт для ИИ.
   Без ?. и ?? — для старых iPhone. */
(function (root) {
  'use strict';

  /* =====================================================================
     1. CHECKER
     ===================================================================== */
  var TOL = 1e-6;

  function near(a, b) { return Math.abs(a - b) <= TOL * Math.max(1, Math.abs(b)); }
  function inList(v, list) { for (var i = 0; i < list.length; i++) if (near(v, list[i])) return true; return false; }
  function dedupe(list) {
    var out = [];
    list.forEach(function (v) { if (!inList(v, out)) out.push(v); });
    return out;
  }
  function sameSet(u, e) {
    if (u.length !== e.length) return false;
    for (var i = 0; i < e.length; i++) if (!inList(e[i], u)) return false;
    return true;
  }
  function subsetOf(u, e) {
    if (!u.length) return false;
    for (var i = 0; i < u.length; i++) if (!inList(u[i], e)) return false;
    return true;
  }

  /* Общая нормализация: разные минусы, знаки умножения, степени, индексы, кириллическая «х». */
  function norm(s) {
    s = String(s == null ? '' : s).toLowerCase();
    s = s.replace(/[−‒–—―﹣－]/g, '-')
      .replace(/[×·∙⋅•]/g, '*')
      .replace(/÷|∕|⁄/g, '/')
      .replace(/²/g, '^2').replace(/³/g, '^3')
      .replace(/₁/g, '1').replace(/₂/g, '2')
      .replace(/½/g, '(1/2)').replace(/¼/g, '(1/4)').replace(/¾/g, '(3/4)')
      .replace(/х/g, 'x')                    // кириллическая х
      .replace(/sqrt/g, '√')
      .replace(/ /g, ' ')
      .replace(/[{}\[\]]/g, ' ');
    // «ответ:», «תשובה:», «answer:» и т.п. в начале
    s = s.replace(/^\s*(?:תשובה|פתרונות|פתרון|שורשים|ответ|корни|answers?|roots?|solutions?)\s*:?\s*/, '');
    return s.trim().replace(/[.!;,\s]+$/, '');
  }

  /* Слова «нет решения» на трёх языках + ∅ */
  var NONE_RE = new RegExp('^(?:x\\s*=\\s*)?(?:' + [
    '∅', 'ø', 'אין', 'אין פתרון', 'אין פתרונות',
    'אין שורשים', 'ללא פתרון',
    'нет', 'нет решений', 'нет решения',
    'нет корней', 'решений нет', 'корней нет',
    'нет действительных корней',
    'none', 'no', 'no solution', 'no solutions', 'no roots', 'no real roots', 'no real solutions', 'empty set'
  ].join('|') + ')$');
  function isNone(input) {
    if (/^\s*(?:x\s*=\s*)?\{\s*\}\s*$/.test(String(input))) return true;
    var s = norm(input).replace(/["'«»“”]/g, '').replace(/\s+/g, ' ').trim();
    return NONE_RE.test(s);
  }

  /* Безопасный разбор выражения: числа, + − × ÷ / ^, скобки, √. Возвращает число или NaN. */
  function evalExpr(src) {
    var s = String(src).replace(/\s+/g, '');
    var i = 0;
    function peek() { return s.charAt(i); }
    function fail() { throw new Error('parse'); }
    function number() {
      var m = /^(\d+(?:\.\d*)?|\.\d+)/.exec(s.slice(i));
      if (!m) fail();
      i += m[0].length;
      return parseFloat(m[0]);
    }
    function primary() {
      var c = peek();
      if (c === '(') { i++; var v = expr(); if (peek() !== ')') fail(); i++; return v; }
      if (c === '√') { i++; var r = power(); if (r < 0) fail(); return Math.sqrt(r); }
      if (/[\d.]/.test(c)) return number();
      return fail();
    }
    function power() {
      var b = primary();
      if (peek() === '^') { i++; var e = unary(); return Math.pow(b, e); }
      return b;
    }
    function unary() {
      var c = peek();
      if (c === '-') { i++; return -unary(); }
      if (c === '+') { i++; return unary(); }
      return power();
    }
    function term() {
      var v = unary();
      for (;;) {
        var c = peek();
        if (c === '*') { i++; v *= unary(); }
        else if (c === '/') { i++; var d = unary(); if (d === 0) fail(); v /= d; }
        else if (c === '(' || c === '√') { v *= unary(); }   // 2(3), 2√3
        else return v;
      }
    }
    function expr() {
      var v = term();
      for (;;) {
        var c = peek();
        if (c === '+') { i++; v += term(); }
        else if (c === '-') { i++; v -= term(); }
        else return v;
      }
    }
    try {
      if (!s) return NaN;
      var v = expr();
      if (i !== s.length || !isFinite(v)) return NaN;
      return v;
    } catch (e) { return NaN; }
  }

  /* Варианты прочтения строки (запятая — разделитель или десятичная; «ו-5» — «и 5» или «и −5»;
     пробел перед минусом — новый корень или вычитание). Ответ засчитывается, если подходит любой вариант. */
  function variants(input) {
    var base = norm(input);
    // x=, x1=, x₁=, x_1=, x1,2=
    base = base.replace(/x\s*(?:_?\s*[12](?:\s*,\s*2)?)?\s*=/g, ';');
    base = base.replace(/(^|\s)(?:and|or|и|или|או)(?=\s|$)/g, ';');
    var vav = [base];
    if (base.indexOf('ו') >= 0) {
      vav = [
        base.replace(/(^|[\s;,])ו\s*־?\s*/g, '$1;'),
        base.replace(/(^|[\s;,])ו\s*[־\-]?\s*/g, '$1;')
      ];
    }
    var out = [];
    vav.forEach(function (v) {
      [v.replace(/,/g, ';'), v.replace(/(\d),(\d)/g, '$1.$2').replace(/,/g, ';')].forEach(function (c) {
        var s1 = c.replace(/([\d).])\s+(?=[\d(.√]|[+\-±][\d(.√])/g, '$1;');
        var s2 = c.replace(/([\d).])\s+(?=[\d(.√+\-±])/g, '$1;');
        [s1, s2].forEach(function (x) { if (out.indexOf(x) < 0) out.push(x); });
      });
    });
    return out;
  }

  function parseList(str) {
    var parts = str.split(';').map(function (p) { return p.trim(); }).filter(function (p) { return p; });
    if (!parts.length) return null;
    var vals = [];
    for (var k = 0; k < parts.length; k++) {
      var p = parts[k];
      var expanded = p.indexOf('±') >= 0 ? [p.replace('±', '+'), p.replace('±', '-')] : [p];
      for (var j = 0; j < expanded.length; j++) {
        var v = evalExpr(expanded[j]);
        if (isNaN(v)) return null;
        vals.push(v);
      }
    }
    return vals;
  }

  /* Все разборы ввода, которые получились (массив массивов чисел). */
  function parseValues(input) {
    var lists = [];
    variants(input).forEach(function (v) {
      var l = parseList(v);
      if (l) lists.push(l);
    });
    return lists;
  }

  function rootsFrom(a, b, D) {
    if (D < 0) return [];
    var s = Math.sqrt(D);
    return dedupe([(-b + s) / (2 * a), (-b - s) / (2 * a)]);
  }

  /* Что, скорее всего, не так (ключ строки перевода). */
  function diagnose(task, u, e) {
    if (u.length < e.length && subsetOf(u, e)) return 'tk_diag_missing';
    if (u.length > e.length && subsetOf(e, u)) return 'tk_diag_extra';
    if (sameSet(u.map(function (v) { return -v; }), e)) return 'tk_diag_sign';
    var abc = task.answer && task.answer.abc;
    if (abc && abc.length === 3) {
      var a = evalExpr(abc[0]), b = evalExpr(abc[1]), c = evalExpr(abc[2]);
      var D = b * b - 4 * a * c;
      if (D >= 0 && subsetOf(u, dedupe([(-b + Math.sqrt(D)) / a, (-b - Math.sqrt(D)) / a]))) return 'tk_diag_2a';
      var noSq = [b - 4 * a * c, Math.abs(b) - 4 * a * c];
      for (var k = 0; k < noSq.length; k++) {
        if (noSq[k] >= 0 && subsetOf(u, rootsFrom(a, b, noSq[k]))) return 'tk_diag_square';
        if (subsetOf(u, dedupe([(-b + noSq[k]) / (2 * a), (-b - noSq[k]) / (2 * a)]))) return 'tk_diag_square';
      }
      var acSign = b * b + 4 * a * c;
      if (acSign >= 0 && subsetOf(u, rootsFrom(a, b, acSign))) return 'tk_diag_ac_sign';
    }
    for (var i = 0; i < u.length; i++) if (inList(u[i], e)) return 'tk_diag_one_wrong';
    return 'tk_diag_generic';
  }

  function normText(s) {
    return norm(s).replace(/["'«»“”.,!?]/g, '').replace(/\s+/g, ' ').trim();
  }

  /* check(task, input) → { status: 'correct' | 'wrong' | 'unparsed' | 'empty', diag?, values? } */
  function check(task, input) {
    var kind = task.kind || 'roots';
    var ans = task.answer || {};
    if (kind === 'choice') {
      if (input === '' || input == null) return { status: 'empty' };
      return Number(input) === Number(ans.index) ? { status: 'correct' } : { status: 'wrong', diag: 'tk_diag_choice' };
    }
    if (!String(input == null ? '' : input).trim()) return { status: 'empty' };

    if (kind === 'text') {
      var got = normText(input);
      var ok = (ans.accept || []).some(function (a) { return normText(a) === got; });
      return ok ? { status: 'correct' } : { status: 'wrong', diag: 'tk_diag_generic' };
    }

    if (kind === 'number') {
      var s = String(input).replace(/^\s*[a-zа-я]\s*=\s*/i, '');
      var exp = evalExpr(norm(String(ans.value)));
      var lists = parseValues(s);
      if (!lists.length) return { status: 'unparsed' };
      for (var i = 0; i < lists.length; i++) {
        var d = dedupe(lists[i]);
        if (d.length === 1 && near(d[0], exp)) return { status: 'correct', values: d };
      }
      var one = lists.filter(function (l) { return dedupe(l).length === 1; })[0];
      if (one && near(-one[0], exp)) return { status: 'wrong', diag: 'tk_diag_sign_one', values: one };
      return { status: 'wrong', diag: 'tk_diag_number', values: lists[0] };
    }

    // roots
    var expected = (ans.roots || []).map(function (r) { return evalExpr(norm(r)); });
    if (isNone(input)) {
      if (!expected.length) return { status: 'correct', values: [] };
      var abc = ans.abc;
      if (abc) {
        var a = evalExpr(abc[0]), b = evalExpr(abc[1]), c = evalExpr(abc[2]);
        if (b - 4 * a * c < 0 || Math.abs(b) - 4 * a * c < 0) return { status: 'wrong', diag: 'tk_diag_square', values: [] };
      }
      return { status: 'wrong', diag: 'tk_diag_said_none', values: [] };
    }
    var all = parseValues(input);
    if (!all.length) return { status: 'unparsed' };
    for (var k = 0; k < all.length; k++) {
      if (sameSet(dedupe(all[k]), expected)) return { status: 'correct', values: dedupe(all[k]) };
    }
    var u = dedupe(all[0]);
    if (!expected.length) return { status: 'wrong', diag: 'tk_diag_expected_none', values: u };
    return { status: 'wrong', diag: diagnose(task, u, expected), values: u };
  }

  var TaskCheck = { check: check, evalExpr: evalExpr, parseValues: parseValues, isNone: isNone, norm: norm };
  root.TaskCheck = TaskCheck;
  if (typeof module !== 'undefined' && module.exports) module.exports = TaskCheck;
  if (!root.document) return;   // node: дальше только интерфейс

  /* =====================================================================
     2. UI STRINGS
     ===================================================================== */
  I18N.add({
    he: {
      tk_task: 'משימה {label}', tk_ai_task: 'משימת AI {label}', tk_solve_eq: 'פתרו את המשוואה',
      tk_draw: 'ציור', tk_type: 'הקלדה', tk_pen: 'עט', tk_eraser: 'מחק', tk_undo: 'ביטול', tk_clear: 'ניקוי',
      tk_color: 'צבע {n}', tk_size: 'עובי {n}', tk_answer_ph_text: 'התשובה שלך', tk_draft: 'טיוטה', tk_draft_ph: 'כאן אפשר לכתוב את הדרך, שורה אחרי שורה…',
      tk_symbols: 'סימנים', tk_answer: 'התשובה שלך', tk_answer_ph_roots: 'למשל: −1, −5', tk_answer_ph_number: 'מספר אחד',
      tk_format_roots: 'כתבו את הפתרונות עם פסיק ביניהם, למשל −1, −5 או 1/3. אם אין פתרון — כתבו "אין פתרון".',
      tk_format_number: 'כתבו מספר אחד.', tk_choose: 'בחרו תשובה:',
      tk_check: 'בדיקה', tk_correct: 'נכון! כל הכבוד', tk_correct_sub: 'המשימה סומנה כפתורה.', tk_wrong: 'עוד לא',
      tk_unparsed: 'לא הצלחתי לבדוק את התשובה הזו. העתיקו את הפרומפט והדביקו אותו בכל AI — הוא יבדוק את הפתרון.',
      tk_hint: 'רמז', tk_hint_n: 'רמז {n}', tk_more_hint: 'עוד רמז', tk_hint_last: 'זה היה הרמז האחרון. הפתרון המלא נמצא למטה.',
      tk_hint_empty: 'הרמזים יופיעו כאן אחרי בדיקה — או פתחו את הראשון כבר עכשיו.', tk_show_hint: 'להציג רמז',
      tk_solution: 'תשובה ופתרון מלא', tk_open: 'לפתוח', tk_close: 'לסגור',
      tk_prompt: 'פרומפט ל־AI', tk_prompt_lead: 'העתיקו והדביקו בכל AI (ChatGPT, Claude, Gemini…), גם בצ׳אט חדש וריק. הפרומפט כולל את המשימה ואת התשובה שלכם.',
      tk_copy: 'העתקה', tk_copied: 'הועתק', tk_download: 'הורדה', tk_solved: 'נפתרה',
      tk_made_by_ai: 'נוצר על ידי AI', tk_level: 'רמה {n}',
      tk_level_1: 'כמו בשיעור', tk_level_2: 'קצת יותר קשה', tk_level_3: 'עוד קצת יותר קשה',
      tk_diag_missing: 'יש כאן פתרון נכון, אבל חסר עוד אחד. כש־D > 0 יש שני פתרונות — חשבו גם את השני, עם מינוס לפני השורש.',
      tk_diag_extra: 'כתבתם יותר פתרונות ממה שיש. בדקו את D: כש־D = 0 יש פתרון אחד בלבד.',
      tk_diag_sign: 'המספרים נכונים, אבל הסימנים הפוכים. הנוסחה מתחילה ב־−b: אם b חיובי, מתחילים ממספר שלילי.',
      tk_diag_sign_one: 'המספר נכון, אבל הסימן הפוך. בדקו את הסימנים בחישוב.',
      tk_diag_2a: 'נראה שה־2 במכנה הלך לאיבוד. מחלקים ב־2a, לא ב־a.',
      tk_diag_square: 'נראה ש־b לא הועלה בריבוע. ב־D = b² − 4ac קודם מעלים את b בריבוע (במחשבון: x² מיד אחרי b), ומספר שלילי — בסוגריים.',
      tk_diag_ac_sign: 'בדקו את הסימן של 4ac: אם a או c שליליים, מינוס כפול מינוס נותן פלוס.',
      tk_diag_one_wrong: 'פתרון אחד נכון והשני לא. חשבו שוב את השני — במיוחד את הסימן לפני √D ואת החלוקה ב־2a.',
      tk_diag_generic: 'זה עדיין לא נכון. נסו להציב את התשובה במשוואה: אם שני הצדדים לא שווים, יש טעות בדרך. הרמז יעזור.',
      tk_diag_expected_none: 'חשבו שוב את D ובדקו את הסימן שלו. מה הוא אומר על מספר הפתרונות?',
      tk_diag_said_none: 'למשוואה הזו יש פתרון. חשבו שוב את D — זכרו ש־b² אף פעם לא שלילי, גם כש־b שלילי.',
      tk_diag_number: 'זה לא המספר הנכון. בדקו את החישוב שלב אחרי שלב.',
      tk_diag_choice: 'זו לא התשובה הנכונה. הרמז יעזור.',
      tk_ai_reply: 'ה־AI יענה ב:', tk_ai_warn: 'זה AI: הוא יכול לטעות. בדקו בעצמכם כל דבר שהוא כותב.',
      tk_code: 'הקוד שלך', tk_code_ph_java: 'כתבו כאן את הקוד ב־Java…', tk_code_ph_html: 'כתבו כאן את קוד ה־HTML…', tk_code_ph_sql: 'כתבו כאן את השאילתה ב־SQL…',
      tk_code_note: 'כתבו את הקוד כאן, הריצו אותו אצלכם (IntelliJ / VS Code / SSMS) והכניסו למטה מה יצא.',
      tk_preview: 'להציג את הדף', tk_preview_hide: 'להסתיר את הדף', tk_preview_note: 'תמונות מהאינטרנט לא מוצגות כאן, רק הקוד שלכם.',
      tk_diag_code: 'עוד לא. עברו על הקוד שורה אחרי שורה (או הריצו אותו שוב) ובדקו מה בדיוק הוא מדפיס.'
    },
    ru: {
      tk_task: 'Задача {label}', tk_ai_task: 'Задача от ИИ {label}', tk_solve_eq: 'Реши уравнение',
      tk_draw: 'Рисовать', tk_type: 'Печатать', tk_pen: 'Ручка', tk_eraser: 'Ластик', tk_undo: 'Отменить', tk_clear: 'Очистить',
      tk_color: 'Цвет {n}', tk_size: 'Толщина {n}', tk_answer_ph_text: 'Твой ответ', tk_draft: 'Черновик', tk_draft_ph: 'Здесь можно записать решение, строка за строкой…',
      tk_symbols: 'Символы', tk_answer: 'Твой ответ', tk_answer_ph_roots: 'например: −1, −5', tk_answer_ph_number: 'одно число',
      tk_format_roots: 'Запиши корни через запятую, например −1, −5 или 1/3. Если решений нет — напиши «нет решений».',
      tk_format_number: 'Запиши одно число.', tk_choose: 'Выбери ответ:',
      tk_check: 'Проверить', tk_correct: 'Верно! Отлично', tk_correct_sub: 'Задача отмечена как решённая.', tk_wrong: 'Пока нет',
      tk_unparsed: 'Я не смог проверить этот ответ — скопируй промпт и вставь его в любой ИИ, он проверит решение.',
      tk_hint: 'Подсказка', tk_hint_n: 'Подсказка {n}', tk_more_hint: 'Ещё подсказка', tk_hint_last: 'Это была последняя подсказка. Полное решение — ниже.',
      tk_hint_empty: 'Подсказки появятся здесь после проверки — или открой первую прямо сейчас.', tk_show_hint: 'Показать подсказку',
      tk_solution: 'Ответ и полное решение', tk_open: 'Открыть', tk_close: 'Закрыть',
      tk_prompt: 'Промпт для ИИ', tk_prompt_lead: 'Скопируй и вставь в любой ИИ (ChatGPT, Claude, Gemini…), даже в новый пустой чат. В промпте есть задача и твой ответ.',
      tk_copy: 'Копировать', tk_copied: 'Скопировано', tk_download: 'Скачать', tk_solved: 'Решено',
      tk_made_by_ai: 'Придумано ИИ', tk_level: 'Уровень {n}',
      tk_level_1: 'Как на уроке', tk_level_2: 'Чуть сложнее', tk_level_3: 'Ещё чуть сложнее',
      tk_diag_missing: 'Один корень верный, но не хватает второго. Когда D > 0, корней два — посчитай и второй, с минусом перед корнем.',
      tk_diag_extra: 'Корней получилось больше, чем есть. Проверь D: когда D = 0, корень один.',
      tk_diag_sign: 'Числа верные, но знаки перепутаны. Формула начинается с −b: если b положительное, начинаем с отрицательного числа.',
      tk_diag_sign_one: 'Число верное, но знак противоположный. Проверь знаки в вычислениях.',
      tk_diag_2a: 'Похоже, потерялась двойка в знаменателе. Делим на 2a, а не на a.',
      tk_diag_square: 'Похоже, b не возведено в квадрат. В D = b² − 4ac сначала возводим b в квадрат (на калькуляторе — x² сразу после b), отрицательное число — в скобках.',
      tk_diag_ac_sign: 'Проверь знак у 4ac: если a или c отрицательные, минус на минус даёт плюс.',
      tk_diag_one_wrong: 'Один корень верный, второй нет. Пересчитай второй — особенно знак перед √D и деление на 2a.',
      tk_diag_generic: 'Пока неверно. Подставь ответ в уравнение: если части не равны — где-то ошибка. Подсказка поможет.',
      tk_diag_expected_none: 'Пересчитай D и посмотри на его знак. Что он говорит о количестве корней?',
      tk_diag_said_none: 'У этого уравнения есть решение. Пересчитай D — b² никогда не бывает отрицательным, даже если b отрицательное.',
      tk_diag_number: 'Это не то число. Проверь вычисления шаг за шагом.',
      tk_diag_choice: 'Это неверный ответ. Подсказка поможет.',
      tk_ai_reply: 'ИИ ответит на:', tk_ai_warn: 'Это ИИ: он может ошибаться. Проверяй сам всё, что он пишет.',
      tk_code: 'Твой код', tk_code_ph_java: 'Пиши здесь код на Java…', tk_code_ph_html: 'Пиши здесь HTML-код…', tk_code_ph_sql: 'Пиши здесь запрос SQL…',
      tk_code_note: 'Напиши код здесь, запусти у себя (IntelliJ / VS Code / SSMS) и впиши ниже, что получилось.',
      tk_preview: 'Показать страницу', tk_preview_hide: 'Скрыть страницу', tk_preview_note: 'Картинки из интернета здесь не показываются, только твой код.',
      tk_diag_code: 'Пока нет. Пройди по коду строка за строкой (или запусти ещё раз) и проверь, что именно он печатает.'
    },
    en: {
      tk_task: 'Task {label}', tk_ai_task: 'AI task {label}', tk_solve_eq: 'Solve the equation',
      tk_draw: 'Draw', tk_type: 'Type', tk_pen: 'Pen', tk_eraser: 'Eraser', tk_undo: 'Undo', tk_clear: 'Clear',
      tk_color: 'Color {n}', tk_size: 'Size {n}', tk_answer_ph_text: 'Your answer', tk_draft: 'Draft', tk_draft_ph: 'Write your working here, line by line…',
      tk_symbols: 'Symbols', tk_answer: 'Your answer', tk_answer_ph_roots: 'e.g. −1, −5', tk_answer_ph_number: 'one number',
      tk_format_roots: 'Write the roots separated by commas, e.g. −1, −5 or 1/3. If there is none, write "no solution".',
      tk_format_number: 'Write one number.', tk_choose: 'Choose an answer:',
      tk_check: 'Check', tk_correct: 'Correct! Well done', tk_correct_sub: 'The task is marked as solved.', tk_wrong: 'Not yet',
      tk_unparsed: 'I couldn\'t check this answer — copy the prompt and paste it into any AI, it will check your solution.',
      tk_hint: 'Hint', tk_hint_n: 'Hint {n}', tk_more_hint: 'Another hint', tk_hint_last: 'That was the last hint. The full solution is below.',
      tk_hint_empty: 'Hints appear here after you check — or open the first one now.', tk_show_hint: 'Show a hint',
      tk_solution: 'Answer and full solution', tk_open: 'Open', tk_close: 'Close',
      tk_prompt: 'Prompt for AI', tk_prompt_lead: 'Copy and paste into any AI (ChatGPT, Claude, Gemini…), even a brand-new empty chat. The prompt includes the task and your answer.',
      tk_copy: 'Copy', tk_copied: 'Copied', tk_download: 'Download', tk_solved: 'Solved',
      tk_made_by_ai: 'Made by AI', tk_level: 'Level {n}',
      tk_level_1: 'Like the lesson', tk_level_2: 'A bit harder', tk_level_3: 'A bit harder still',
      tk_diag_missing: 'One root is right, but another is missing. When D > 0 there are two roots — work out the second one too, with a minus before the root.',
      tk_diag_extra: 'You wrote more roots than there are. Check D: when D = 0 there is only one root.',
      tk_diag_sign: 'The numbers are right but the signs are flipped. The formula starts with −b: if b is positive, you start from a negative number.',
      tk_diag_sign_one: 'The number is right but the sign is flipped. Check the signs in your working.',
      tk_diag_2a: 'Looks like the 2 in the denominator went missing. Divide by 2a, not by a.',
      tk_diag_square: 'Looks like b wasn\'t squared. In D = b² − 4ac, square b first (on a calculator press x² right after b); a negative b goes in brackets.',
      tk_diag_ac_sign: 'Check the sign of 4ac: if a or c is negative, minus times minus is plus.',
      tk_diag_one_wrong: 'One root is right, the other isn\'t. Recheck the second one — especially the sign before √D and the division by 2a.',
      tk_diag_generic: 'Not quite yet. Substitute your answer into the equation: if the two sides are not equal, there is a mistake somewhere. The hint will help.',
      tk_diag_expected_none: 'Recompute D and look at its sign. What does it tell you about the number of roots?',
      tk_diag_said_none: 'This equation does have a solution. Recompute D — b² is never negative, even when b is negative.',
      tk_diag_number: 'That is not the right number. Check your working step by step.',
      tk_diag_choice: 'That is not the right answer. The hint will help.',
      tk_ai_reply: 'The AI will answer in:', tk_ai_warn: 'This is AI: it can make mistakes. Check everything it writes yourself.',
      tk_code: 'Your code', tk_code_ph_java: 'Write your Java code here…', tk_code_ph_html: 'Write your HTML here…', tk_code_ph_sql: 'Write your SQL query here…',
      tk_code_note: 'Write the code here, run it on your computer (IntelliJ / VS Code / SSMS) and enter below what came out.',
      tk_preview: 'Show the page', tk_preview_hide: 'Hide the page', tk_preview_note: 'Images from the internet are not shown here, only your code.',
      tk_diag_code: 'Not yet. Go through the code line by line (or run it again) and check exactly what it prints.'
    }
  });

  /* =====================================================================
     3. HELPERS (download / copy / text)
     ===================================================================== */
  var el = U.el;

  function pick(obj, lang) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.he || obj.ru || obj.en || '';
  }
  function plain(s) { return String(s).replace(/`/g, ''); }

  /* В RTL-тексте латинские формулы без `кавычек` (подсказки, решения) изолируем автоматически,
     иначе «a = 1, b = 6» в иврите переставляется. */
  var RUN_RE = /[A-Za-z0-9\u221a(\u2212\-\u00b1][A-Za-z0-9\u221a\u00b1\u00d7\u00f7\u2212+\-=<>\u2260\u2264\u2265()\/.,\u00b2\u00b3\u2081\u2082: ]*[A-Za-z0-9\u00b2\u00b3\u2081\u2082)]|[A-Za-z0-9]/g;
  function count(s, ch) { return s.split(ch).length - 1; }
  function appendIsolated(frag, text) {
    var last = 0, m;
    RUN_RE.lastIndex = 0;
    while ((m = RUN_RE.exec(text))) {
      var run = m[0], start = m.index;
      while (run.charAt(0) === '(' && count(run, '(') > count(run, ')')) { run = run.slice(1); start++; }
      while (run.charAt(run.length - 1) === ')' && count(run, ')') > count(run, '(')) run = run.slice(0, -1);
      run = run.replace(/[\s.,:=+\-\u2212]+$/, '');
      if (!run) continue;
      if (start > last) frag.appendChild(document.createTextNode(text.slice(last, start)));
      frag.appendChild(el('span', { class: 'mi', dir: 'ltr' }, run));
      last = start + run.length;
      RUN_RE.lastIndex = Math.max(RUN_RE.lastIndex, last);
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
  }

  /* Текст с `математикой` → DOM (математика изолирована как LTR). */
  function rich(text) {
    var frag = document.createDocumentFragment();
    var rtl = window.I18N && I18N.dir() === 'rtl';
    String(text == null ? '' : text).split('\n').forEach(function (line, li) {
      if (li) frag.appendChild(el('br'));
      line.split('`').forEach(function (part, i) {
        if (!part) return;
        if (i % 2) frag.appendChild(el('span', { class: part.length <= 18 ? 'm m--nw' : 'm', dir: 'ltr' }, part));
        else if (rtl && /[A-Za-z0-9]/.test(part)) appendIsolated(frag, part);
        else frag.appendChild(document.createTextNode(part));
      });
    });
    return frag;
  }

  /* Скачать текст как .txt (UTF-8 с BOM — чтобы Блокнот показал иврит и русский). */
  function downloadText(filename, text) {
    var body = '﻿' + String(text).replace(/\r?\n/g, '\r\n');
    var blob;
    try { blob = new Blob([body], { type: 'text/plain;charset=utf-8' }); } catch (e) { blob = null; }
    var a = document.createElement('a');
    var canDownload = blob && ('download' in a) && window.URL && URL.createObjectURL;
    if (canDownload) {
      var url = URL.createObjectURL(blob);
      a.href = url; a.download = filename; a.rel = 'noopener'; a.style.display = 'none';
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(url); if (a.parentNode) a.parentNode.removeChild(a); }, 1500);
      return 'download';
    }
    // старый iOS Safari: без атрибута download — открываем текст в новой вкладке
    var w = window.open('', '_blank');
    if (w && w.document) {
      w.document.open();
      w.document.write('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' +
        U.esc(filename) + '</title><pre style="white-space:pre-wrap;font:15px/1.6 -apple-system,sans-serif;padding:16px" dir="auto">' + U.esc(text) + '</pre>');
      w.document.close();
      return 'tab';
    }
    if (blob && window.URL) { location.href = URL.createObjectURL(blob); return 'nav'; }
    return 'none';
  }

  function copyText(text) {
    function fallback() {
      return new Promise(function (resolve, reject) {
        var ta = el('textarea', { readonly: true, style: 'position:fixed;top:0;left:0;opacity:0;font-size:16px' });
        ta.value = text;
        document.body.appendChild(ta);
        ta.focus(); ta.select();
        try { ta.setSelectionRange(0, text.length); } catch (e) { /* old iOS */ }
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        document.body.removeChild(ta);
        if (ok) resolve(); else reject(new Error('copy'));
      });
    }
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext !== false) {
      return navigator.clipboard.writeText(text).catch(fallback);
    }
    return fallback();
  }

  function fmtDate(iso) {
    var p = String(iso || '').split('-');
    return p.length === 3 ? p[2] + '.' + p[1] + '.' + p[0] : String(iso || '');
  }

  function subjectName(id, lang) {
    var s = (window.SUBJECTS || []).filter(function (x) { return x.id === id; })[0];
    return s ? pick(s.name, lang) : id;
  }

  function taskText(task, lang) { return plain(pick(task.text, lang)); }
  function taskLabel(task, lang) { return pick(task.label, lang); }

  /* Ответ задачи текстом (для файла и промпта). */
  function answerText(task, lang) {
    var a = task.answer || {};
    var none = { he: 'אין פתרון', ru: 'решений нет', en: 'no solution' }[lang] || 'no solution';
    if (task.kind === 'choice') return pick((task.options || [])[a.index], lang);
    if (task.kind === 'number') return String(a.value).replace(/-/g, '−');
    if (task.kind === 'text') return (a.accept || [])[0] || '';
    var r = (a.roots || []).map(function (v) { return String(v).replace(/-/g, '−'); });
    if (!r.length) return none;
    if (r.length === 1) return 'x = ' + r[0];
    return r.map(function (v, i) { return 'x' + (i ? '₂' : '₁') + ' = ' + v; }).join(',  ');
  }

  /* =====================================================================
     4. PROMPT FOR AI
     ===================================================================== */
  /* Промпт всегда на английском (его лучше всего понимает любой ИИ, даже бесплатный и без контекста).
     Язык ответа выбирает человек переключателем над промптом: иврит, русский или английский. */
  var REPLY_LANG = { he: 'Hebrew', ru: 'Russian', en: 'English' };
  function replyLine(rl) {
    var name = REPLY_LANG[rl] || 'English';
    return 'LANGUAGE: Always answer me in ' + name + ', even if earlier messages in this chat were in another language.';
  }
  var ASK_FIRST = [
    'IMPORTANT, before you explain anything: you cannot see my screen or my notebook. If my answer is wrong, or I mention an error you cannot fully understand from this message,',
    'FIRST ask me to send a photo or screenshot of my work (or to paste it as text), and wait for it. Then explain exactly what happened in MY work, not in general.'
  ];
  var PROMPT_MATH = [
    'You are a patient private math tutor. I am a beginner college student (practical engineering / software technician program, first semester).',
    'Topic: {topic} (subject: {subject}, lesson of {date}). Only use what is taught at this level; no advanced shortcuts.', '',
    'The task:', '{instr}{task}', '', 'My answer: {answer}', '',
    'What I need:', '1. Check whether my answer is correct.', '2. Explain the solution step by step, one operation per line.', '{method}',
    '4. If I made a mistake, find exactly where it is and explain it calmly and simply.',
    '5. Give me a hint first and let me try again. Give the final answer only if I ask for it.',
    '6. Use × for multiplication (not a dot) and write formulas plainly.', '',
  ].concat(ASK_FIRST);
  var METHOD_QUAD = '3. Use the method from class: write down a, b, c → D = b² − 4ac → √D → x₁,₂ = (−b ± √D) / (2a).';
  var METHOD_OTHER = '3. Use the standard school method, no advanced shortcuts.';
  var PROMPT_CODE = [
    'You are a patient programming tutor ({code}). I am a beginner college student (software technician program, first semester).',
    'Topic: {topic} (subject: {subject}, lesson of {date}). Only use what we have learned up to this lesson; nothing advanced.', '',
    'The task:', '{task}', '', 'My code:', '{mycode}', '', 'My answer: {answer}', '',
    'What I need:', '1. Check whether my code and my answer are correct.',
    '2. If there is a mistake, show exactly which line and why, in plain words.',
    '3. Walk through the code line by line (and in a loop, round by round), showing what happens at each step.',
    '4. Give a hint first and let me try again. Show full code only if I ask for it.', '',
  ].concat(ASK_FIRST);
  var NO_ANSWER = 'I have not answered yet.';
  var NO_CODE = '(I have not written code yet. If you need my code, ask me to paste it or send a screenshot.)';

  /* Предметы программирования: вместо рисования и формул — поле для кода. */
  var PROG = { algo: 'Java', fullstack: 'HTML', sql: 'SQL' };
  function codeLangOf(lesson) { return (lesson && PROG[lesson.subject]) || ''; }
  var CODE_SYMBOLS = {
    Java: ['{', '}', '(', ')', ';', '"', '=', '==', '!=', '<', '>', '<=', '>=', '+', '-', '*', '/', '%', '++', '&&', '||', '!', '[', ']'],
    HTML: ['<', '>', '/', '=', '"', '</', '#', ';', ':'],
    SQL: ['(', ')', ',', ';', "'", '=', '<>', '<', '>', '*', '%']
  };
  function quadLesson(lesson) {
    var tk = (lesson && lesson.tasks) || {};
    return (tk.teacher || []).concat(tk.ai || []).some(function (x) { return x.kind === 'roots'; });
  }
  /* Переключатель «ИИ ответит на: עברית / Русский / English». Выбор запоминается. */
  function aiLang() { var v = U.storage.get('ai_lang', ''); return REPLY_LANG[v] ? v : (REPLY_LANG[I18N.lang] ? I18N.lang : 'en'); }
  function aiLangSwitch(onChange) {
    var names = { he: 'עברית', ru: 'Русский', en: 'English' };
    var row = el('div', { class: 'ai-lang', role: 'group', 'aria-label': t('tk_ai_reply') });
    row.appendChild(el('span', { class: 'ai-lang__label' }, t('tk_ai_reply')));
    var seg = el('div', { class: 'tk-seg ai-lang__seg' });
    ['he', 'ru', 'en'].forEach(function (l) {
      var b = el('button', { type: 'button', class: 'tk-seg__btn', 'data-lang': l, lang: l, dir: l === 'he' ? 'rtl' : 'ltr', 'aria-pressed': l === aiLang() ? 'true' : 'false' }, names[l]);
      b.addEventListener('click', function () {
        U.storage.set('ai_lang', l);
        U.$$('.tk-seg__btn', seg).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        if (onChange) onChange(l);
      });
      seg.appendChild(b);
    });
    row.appendChild(seg);
    return row;
  }

  function buildPrompt(lesson, task, studentAnswer, replyLang, myCode) {
    var codeLang = codeLangOf(lesson);
    var L = 'en';   // текст задачи для ИИ — по-английски
    var instr = (typeof task.text === 'string' && task.kind === 'roots') ? 'Solve the equation: ' : '';
    var text = taskText(task, L);
    if (task.kind === 'choice') {
      text += '\n' + (task.options || []).map(function (o, i) { return String.fromCharCode(65 + i) + ') ' + pick(o, L); }).join('\n');
    }
    var ans = String(studentAnswer == null ? '' : studentAnswer).trim();
    var vars = {
      topic: pick(lesson.title, L), subject: subjectName(lesson.subject, L), date: fmtDate(lesson.date),
      instr: instr, task: text, answer: ans ? '"' + ans + '"' : NO_ANSWER,
      /* способ решения: свой у урока/задачи (method: {he,ru,en}); формула корней — только в уроках про квадратные уравнения */
      method: (task.method || lesson.method) ? '3. ' + pick(task.method || lesson.method, L)
        : (quadLesson(lesson) && (task.kind === 'roots' || task.kind === 'number' || task.kind === 'choice') ? METHOD_QUAD : METHOD_OTHER)
    };
    var body = PROMPT_MATH;
    if (codeLang) {
      body = PROMPT_CODE;
      vars.code = codeLang;
      vars.mycode = String(myCode || '').trim() ? '```\n' + String(myCode).replace(/\s+$/, '') + '\n```' : NO_CODE;
      if (task.method || lesson.method) body = body.concat(['', pick(task.method || lesson.method, L)]);
    }
    return body.concat(['', replyLine(replyLang || I18N.lang)]).map(function (line) {
      return line.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    }).join('\n');
  }

  /* =====================================================================
     5. COLLAPSIBLE PANEL (height animated inside the modal, no scroll jump)
     ===================================================================== */
  function motionOff() {
    return U.reducedMotion() || document.documentElement.getAttribute('data-motion') === 'reduce';
  }

  function panel(opts) {
    var body = el('div', { class: 'tk-panel__body', id: opts.id });
    var inner = el('div', { class: 'tk-panel__inner' });
    body.appendChild(inner);
    var stateEl = el('span', { class: 'tk-panel__state' });
    var head = el('button', { type: 'button', class: 'tk-panel__head', 'aria-expanded': 'false', 'aria-controls': opts.id }, [
      el('span', { class: 'tk-panel__icon', html: Icons.get(opts.icon) }),
      el('span', { class: 'tk-panel__title' }, opts.title),
      stateEl,
      el('span', { class: 'tk-panel__chev', html: Icons.get('chevronDown') })
    ]);
    var box = el('section', { class: 'tk-panel tk-panel--' + opts.kind }, [head, body]);
    var open = false;
    body.style.height = '0px';
    body.hidden = true;

    function setLabel() { stateEl.textContent = open ? t('tk_close') : t('tk_open'); }
    function set(o, instant) {
      if (o === open) return;
      open = o;
      head.setAttribute('aria-expanded', o ? 'true' : 'false');
      box.classList.toggle('is-open', o);
      setLabel();
      if (o && opts.onOpen) opts.onOpen();
      var noAnim = instant || motionOff();
      if (o) {
        body.hidden = false;
        if (noAnim) { body.style.height = 'auto'; return; }
        body.style.height = '0px';
        var h = inner.offsetHeight;
        requestAnimationFrame(function () {
          body.style.height = h + 'px';
          afterTransition(body, function () { if (open) body.style.height = 'auto'; });
        });
      } else {
        if (noAnim) { body.style.height = '0px'; body.hidden = true; return; }
        body.style.height = inner.offsetHeight + 'px';
        body.offsetHeight; // reflow
        requestAnimationFrame(function () {
          body.style.height = '0px';
          afterTransition(body, function () { if (!open) body.hidden = true; });
        });
      }
    }
    head.addEventListener('click', function () { set(!open); });
    setLabel();
    return {
      el: box, inner: inner, head: head,
      open: function (instant) { set(true, instant); }, close: function (instant) { set(false, instant); },
      isOpen: function () { return open; },
      /* После изменения содержимого открытой панели — плавно подогнать высоту. */
      refit: function () {
        if (!open || motionOff()) return;
        var from = body.offsetHeight;
        body.style.height = from + 'px';
        var to = inner.offsetHeight;
        requestAnimationFrame(function () {
          body.style.height = to + 'px';
          afterTransition(body, function () { if (open) body.style.height = 'auto'; });
        });
      }
    };
  }

  function afterTransition(node, fn) {
    var done = false;
    function finish() { if (done) return; done = true; node.removeEventListener('transitionend', onEnd); fn(); }
    function onEnd(e) { if (e.target === node) finish(); }
    node.addEventListener('transitionend', onEnd);
    setTimeout(finish, 450);
  }

  /* =====================================================================
     6. TASK WINDOW
     ===================================================================== */
  var openCount = 0;        // открыто окно задачи → трекер чтения на паузе
  var drafts = {};          // черновики в памяти: key → {strokes, text, mode, answer}
  var solvedLocal = {};     // решённые в этой сессии (если нет входа)

  /* Черновик (рисунок, текст, ответ) хранится в этом браузере: после F5 или обновления сайта ничего не пропадает. */
  function draftKey(key) { var u = window.Store && Store.auth.current(); return 'tk_draft:' + (u ? u.id : 'guest') + ':' + key; }
  function loadDraft(key) {
    var d = U.storage.get(draftKey(key), null) || {};
    return { strokes: Array.isArray(d.strokes) ? d.strokes : [], text: d.text || '', mode: d.mode === 'type' ? 'type' : 'draw',
             answer: d.answer != null ? d.answer : U.storage.get('tk_ans:' + key, ''), at: d.at || 0 };
  }
  var saveTimers = {};
  function saveDraft(key, st) {
    clearTimeout(saveTimers[key]);
    saveTimers[key] = setTimeout(function () {
      st.at = Date.now();
      var data = { strokes: st.strokes, text: st.text, mode: st.mode, answer: st.answer, at: st.at };
      if (!U.storage.set(draftKey(key), data)) {          // места мало: сохраняем хотя бы текст и ответ
        U.storage.set(draftKey(key), { strokes: [], text: st.text, mode: st.mode, answer: st.answer, at: st.at });
      }
      if (window.DraftSync) DraftSync.push(key, data);   // и на сервер — чтобы открыть на другом устройстве
    }, 400);
  }

  function solveKey(lesson, task) { return 'solve:' + lesson.id + ':' + task.id; }
  function isSolved(lesson, task) {
    var k = solveKey(lesson, task);
    if (solvedLocal[k]) return true;
    try { return !!(window.Store && Store.progress.has(k)); } catch (e) { return false; }
  }

  var UNDO_SVG = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>';
  var COLORS = ['ink', '#3b6cf6', '#e5484d', '#16a34a', '#f59e0b'];
  var SIZES = [2, 4, 8];
  var SYMBOLS = ['²', '√', '×', '÷', '(', ')', '−', '+', '=', '/', '±'];

  function openTask(lesson, task, opts) {
    opts = opts || {};
    var lang = I18N.lang;
    var key = solveKey(lesson, task);
    var st = drafts[key] || (drafts[key] = loadDraft(key));
    var attempts = 0, hintsShown = 0, hintUsed = false, solved = isSolved(lesson, task);
    var hints = task.hints || [];
    var isAI = !!task.level;

    /* ---- head ---- */
    var head = el('div', { class: 'tk-head' });
    var badges = el('div', { class: 'tk-head__badges' }, [el('span', { class: 'tk-badge' }, taskLabel(task, lang))]);
    if (isAI) {
      badges.appendChild(el('span', { class: 'tk-aibadge', html: Icons.get('robot') + '<span>' + U.esc(t('tk_made_by_ai')) + '</span>' }));
      badges.appendChild(el('span', { class: 'chip' }, t('tk_level', { n: task.level }) + ' · ' + t('tk_level_' + task.level)));
    }
    var solvedChip = el('span', { class: 'tk-solved-chip', html: Icons.get('check') + '<span>' + U.esc(t('tk_solved')) + '</span>' });
    solvedChip.hidden = !solved;
    badges.appendChild(solvedChip);
    head.appendChild(badges);
    var groupTitle = task.group && lesson.tasks && lesson.tasks.groups ? pick(lesson.tasks.groups[task.group], lang) : '';
    var instr = typeof task.text === 'string' ? (task.kind === 'roots' ? t('tk_solve_eq') : '') : '';
    if (groupTitle) head.appendChild(el('div', { class: 'tk-head__group' }, groupTitle));
    else if (instr) head.appendChild(el('div', { class: 'tk-head__group' }, instr));
    var codeLang = codeLangOf(lesson);
    var q = typeof task.text === 'string'
      ? el('div', { class: 'tk-head__q tk-head__q--math', dir: 'ltr' }, task.text)
      : el('div', { class: 'tk-head__q' }, [rich(pick(task.text, lang))]);
    head.appendChild(q);

    /* ---- draft: toolbar + canvas/textarea + symbols ---- */
    var work = el('div', { class: 'tk-work' });
    var modeDraw = el('button', { type: 'button', class: 'tk-seg__btn', 'aria-pressed': 'true', html: Icons.get('pencil') + '<span>' + U.esc(t('tk_draw')) + '</span>' });
    var modeType = el('button', { type: 'button', class: 'tk-seg__btn', 'aria-pressed': 'false', html: Icons.get('keyboard') + '<span>' + U.esc(t('tk_type')) + '</span>' });
    var seg = el('div', { class: 'tk-seg', role: 'group', 'aria-label': t('tk_draft') }, [modeDraw, modeType]);

    var penBtn = el('button', { type: 'button', class: 'tk-tool is-on', title: t('tk_pen'), 'aria-label': t('tk_pen'), 'aria-pressed': 'true', html: Icons.get('pencil') });
    var eraserBtn = el('button', { type: 'button', class: 'tk-tool', title: t('tk_eraser'), 'aria-label': t('tk_eraser'), 'aria-pressed': 'false', html: Icons.get('eraser') });
    var undoBtn = el('button', { type: 'button', class: 'tk-tool', title: t('tk_undo'), 'aria-label': t('tk_undo'), html: UNDO_SVG });
    var clearBtn = el('button', { type: 'button', class: 'tk-tool', title: t('tk_clear'), 'aria-label': t('tk_clear'), html: Icons.get('trash') });

    var colorBtns = COLORS.map(function (c, i) {
      var b = el('button', { type: 'button', class: 'tk-color' + (i === 0 ? ' is-on' : ''), 'aria-label': t('tk_color', { n: i + 1 }), 'aria-pressed': i === 0 ? 'true' : 'false' },
        [el('span', { class: 'tk-color__dot' + (c === 'ink' ? ' tk-color__dot--ink' : ''), style: c === 'ink' ? null : 'background:' + c })]);
      b.addEventListener('click', function () {
        colorBtns.forEach(function (x) { x.classList.remove('is-on'); x.setAttribute('aria-pressed', 'false'); });
        b.classList.add('is-on'); b.setAttribute('aria-pressed', 'true');
        draft.setColor(c); setTool('pen');
      });
      return b;
    });
    var sizeBtns = SIZES.map(function (s, i) {
      var b = el('button', { type: 'button', class: 'tk-size' + (i === 1 ? ' is-on' : ''), 'aria-label': t('tk_size', { n: i + 1 }), 'aria-pressed': i === 1 ? 'true' : 'false' },
        [el('span', { class: 'tk-size__dot', style: 'width:' + (s + 4) + 'px;height:' + (s + 4) + 'px' })]);
      b.addEventListener('click', function () {
        sizeBtns.forEach(function (x) { x.classList.remove('is-on'); x.setAttribute('aria-pressed', 'false'); });
        b.classList.add('is-on'); b.setAttribute('aria-pressed', 'true');
        draft.setSize(s);
      });
      return b;
    });

    var drawTools = el('div', { class: 'tk-tools' }, [
      el('div', { class: 'tk-tools__grp' }, [penBtn, eraserBtn]),
      el('div', { class: 'tk-tools__grp' }, sizeBtns),
      el('div', { class: 'tk-tools__grp tk-tools__colors' }, colorBtns)
    ]);
    var topRow = el('div', { class: 'tk-toolbar' }, [seg, el('div', { class: 'tk-toolbar__end' }, [undoBtn, clearBtn])]);

    var canvasHost = el('div', { class: 'tk-canvas' });
    var textArea = codeLang
      ? el('textarea', { class: 'tk-text tk-code input', placeholder: t('tk_code_ph_' + codeLang.toLowerCase()), rows: 10, dir: 'ltr', wrap: 'off',
          spellcheck: 'false', autocapitalize: 'off', autocomplete: 'off', autocorrect: 'off', 'aria-label': t('tk_code') + ' (' + codeLang + ')' })
      : el('textarea', { class: 'tk-text input', placeholder: t('tk_draft_ph'), rows: 8, dir: 'auto', 'aria-label': t('tk_draft') });
    textArea.value = st.text || '';
    var symRow = el('div', { class: 'tk-symbols', dir: 'ltr', role: 'group', 'aria-label': t('tk_symbols') });
    (codeLang ? CODE_SYMBOLS[codeLang] : SYMBOLS).forEach(function (s) {
      var b = el('button', { type: 'button', class: 'tk-sym', dir: 'ltr' }, s);
      b.addEventListener('mousedown', function (e) { e.preventDefault(); });   // не терять фокус поля
      b.addEventListener('click', function () { insertSymbol(s); });
      symRow.appendChild(b);
    });

    var preview = null;
    if (codeLang) {
      /* программирование: только код — без рисования и математических символов */
      topRow.replaceChild(el('div', { class: 'tk-code__label', html: Icons.get('keyboard') + '<span>' + U.esc(t('tk_code')) + ' · ' + U.esc(codeLang) + '</span>' }), seg);
      work.classList.add('tk-work--code');
      work.appendChild(topRow);
      work.appendChild(textArea);
      work.appendChild(symRow);
      work.appendChild(el('p', { class: 'tk-note muted tk-code__note' }, t('tk_code_note')));
      textArea.addEventListener('keydown', function (e) {
        if ((e.key === 'Tab' || e.keyCode === 9) && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) { e.preventDefault(); insertSymbol('    '); }
      });
      if (codeLang === 'HTML') {
        /* живой просмотр: песочница без скриптов, без доступа к сайту */
        var pvBtn = el('button', { type: 'button', class: 'btn btn--ghost tk-preview__btn', html: Icons.get('eye') + '<span>' + U.esc(t('tk_preview')) + '</span>' });
        var pvBox = el('div', { class: 'tk-preview', hidden: true });
        var pvFrame = el('iframe', { class: 'tk-preview__frame', sandbox: '', referrerpolicy: 'no-referrer', title: t('tk_preview') });
        pvBox.appendChild(pvFrame);
        pvBox.appendChild(el('p', { class: 'tk-note muted' }, t('tk_preview_note')));
        var pvTimer = null;
        function renderPreview() { pvFrame.srcdoc = textArea.value; }
        pvBtn.addEventListener('click', function () {
          pvBox.hidden = !pvBox.hidden;
          pvBtn.querySelector('span').textContent = t(pvBox.hidden ? 'tk_preview' : 'tk_preview_hide');
          if (!pvBox.hidden) renderPreview();
        });
        textArea.addEventListener('input', function () {
          if (pvBox.hidden) return;
          clearTimeout(pvTimer); pvTimer = setTimeout(renderPreview, 400);
        });
        work.appendChild(pvBtn);
        work.appendChild(pvBox);
        preview = pvBox;
      }
    } else {
      work.appendChild(topRow);
      work.appendChild(drawTools);
      work.appendChild(canvasHost);
      work.appendChild(textArea);
      work.appendChild(symRow);
    }

    var draft = Draft.create(canvasHost, { strokes: st.strokes, onChange: function (strokes) { st.strokes = strokes; saveDraft(key, st); } });

    function setTool(tool) {
      draft.setTool(tool);
      penBtn.classList.toggle('is-on', tool === 'pen'); penBtn.setAttribute('aria-pressed', tool === 'pen' ? 'true' : 'false');
      eraserBtn.classList.toggle('is-on', tool === 'eraser'); eraserBtn.setAttribute('aria-pressed', tool === 'eraser' ? 'true' : 'false');
    }
    penBtn.addEventListener('click', function () { setTool('pen'); });
    eraserBtn.addEventListener('click', function () { setTool('eraser'); });
    undoBtn.addEventListener('click', function () {
      if (st.mode === 'draw') draft.undo();
      else if (document.execCommand) { textArea.focus(); document.execCommand('undo'); }
    });
    clearBtn.addEventListener('click', function () {
      if (st.mode === 'draw') draft.clear();
      else { textArea.value = ''; st.text = ''; }
      saveDraft(key, st);
    });

    function setMode(m) {
      if (codeLang) m = 'type';
      st.mode = m; saveDraft(key, st);
      modeDraw.setAttribute('aria-pressed', m === 'draw' ? 'true' : 'false');
      modeType.setAttribute('aria-pressed', m === 'type' ? 'true' : 'false');
      work.classList.toggle('is-type', m === 'type');
      drawTools.hidden = m !== 'draw';
      canvasHost.hidden = m !== 'draw';
      textArea.hidden = m !== 'type';
      if (m === 'draw') draft.refresh();
      else lastField = textArea;
    }
    modeDraw.addEventListener('click', function () { setMode('draw'); });
    modeType.addEventListener('click', function () { setMode('type'); textArea.focus(); });
    textArea.addEventListener('input', function () { st.text = textArea.value; saveDraft(key, st); });

    /* ---- answer ---- */
    var ansWrap = el('div', { class: 'tk-answer' });
    var answerInput = null, choiceVal = '';
    var checkBtn = el('button', { type: 'button', class: 'btn btn--ok tk-check', disabled: true, html: Icons.get('check') + '<span>' + U.esc(t('tk_check')) + '</span>' });
    var answerId = 'tk-ans-' + task.id;
    if (task.kind === 'choice') {
      ansWrap.appendChild(el('div', { class: 'tk-answer__label' }, t('tk_choose')));
      var opts2 = el('div', { class: 'tk-choices', role: 'radiogroup' });
      (task.options || []).forEach(function (o, i) {
        var b = el('button', { type: 'button', class: 'tk-choice', role: 'radio', 'aria-checked': 'false', dir: 'auto' }, [rich(pick(o, lang))]);
        b.addEventListener('click', function () {
          choiceVal = String(i);
          U.$$('.tk-choice', opts2).forEach(function (x) { x.setAttribute('aria-checked', 'false'); x.classList.remove('is-on'); });
          b.setAttribute('aria-checked', 'true'); b.classList.add('is-on');
          updateCheck();
        });
        opts2.appendChild(b);
      });
      ansWrap.appendChild(el('div', { class: 'tk-answer__row' }, [opts2, checkBtn]));
    } else {
      answerInput = el('input', {
        id: answerId, class: 'input tk-answer__input', type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false',
        dir: 'ltr', placeholder: task.kind === 'number' ? t('tk_answer_ph_number') : (task.kind === 'roots' ? t('tk_answer_ph_roots') : (task.placeholder ? pick(task.placeholder, lang) : t('tk_answer_ph_text')))
      });
      answerInput.value = st.answer || '';
      ansWrap.appendChild(el('label', { class: 'tk-answer__label', for: answerId }, t('tk_answer')));
      ansWrap.appendChild(el('div', { class: 'tk-answer__row' }, [answerInput, checkBtn]));
      ansWrap.appendChild(el('div', { class: 'tk-answer__help' }, task.kind === 'number' ? t('tk_format_number') : (task.kind === 'roots' ? t('tk_format_roots') : '')));
      answerInput.addEventListener('input', function () {
        st.answer = answerInput.value;
        U.storage.set('tk_ans:' + key, st.answer);
        saveDraft(key, st);
        updateCheck();
        if (promptPanel.isOpen()) refreshPrompt();
      });
      answerInput.addEventListener('keydown', function (e) {
        if ((e.key === 'Enter' || e.keyCode === 13) && !checkBtn.disabled) { e.preventDefault(); doCheck(); }
      });
      answerInput.addEventListener('focus', function () { lastField = answerInput; });
    }
    textArea.addEventListener('focus', function () { lastField = textArea; });
    var lastField = codeLang ? textArea : (answerInput || textArea);

    function currentAnswer() { return task.kind === 'choice' ? choiceVal : (answerInput ? answerInput.value : ''); }
    function updateCheck() {
      var has = String(currentAnswer()).trim().length >= 1;
      checkBtn.disabled = !has;
      checkBtn.classList.toggle('is-ready', has);
    }

    function insertSymbol(s) {
      var f = lastField;
      if (!f) return;
      if (st.mode === 'draw' && f === textArea) { f = answerInput || textArea; }
      if (codeLang && f === answerInput && s.length > 1 && /^ +$/.test(s)) return;
      var v = f.value, a = f.selectionStart, b = f.selectionEnd;
      if (typeof a !== 'number') { a = b = v.length; }
      f.value = v.slice(0, a) + s + v.slice(b);
      try { f.setSelectionRange(a + s.length, a + s.length); } catch (e) { /* ignore */ }
      f.focus();
      f.dispatchEvent(new Event('input', { bubbles: true }));
    }

    /* ---- result + panels ---- */
    var result = el('div', { class: 'tk-result', role: 'status', 'aria-live': 'polite' });

    var hintPanel = panel({ id: 'tk-hint-' + task.id, kind: 'hint', icon: 'bulb', title: t('tk_hint'), onOpen: function () {
      if (!hintsShown && hints.length) { hintsShown = 1; hintUsed = true; renderHints(); }
    } });
    var solPanel = panel({ id: 'tk-sol-' + task.id, kind: 'sol', icon: 'eye', title: t('tk_solution'), onOpen: function () { hintUsed = true; } });
    var promptPanel = panel({ id: 'tk-ai-' + task.id, kind: 'ai', icon: 'robot', title: t('tk_prompt'), onOpen: function () { refreshPrompt(); } });

    var diagBox = el('div', { class: 'tk-diag' });
    var hintList = el('ol', { class: 'tk-hints' });
    var moreHint = el('button', { type: 'button', class: 'btn btn--ghost tk-more', html: Icons.get('bulb') + '<span>' + U.esc(t('tk_more_hint')) + '</span>' });
    var hintNote = el('p', { class: 'tk-note muted' });
    hintPanel.inner.appendChild(diagBox);
    hintPanel.inner.appendChild(hintList);
    hintPanel.inner.appendChild(hintNote);
    hintPanel.inner.appendChild(moreHint);
    moreHint.addEventListener('click', function () {
      if (hintsShown < hints.length) { hintsShown++; hintUsed = true; renderHints(); hintPanel.refit(); }
    });

    function renderHints() {
      hintList.innerHTML = '';
      for (var i = 0; i < hintsShown && i < hints.length; i++) {
        hintList.appendChild(el('li', { class: 'tk-hints__item' + (i === hintsShown - 1 ? ' is-new' : '') }, [
          el('span', { class: 'tk-hints__n' }, t('tk_hint_n', { n: i + 1 })),
          el('span', { class: 'tk-hints__text' }, [rich(pick(hints[i], lang))])
        ]));
      }
      moreHint.hidden = hintsShown >= hints.length || hintsShown === 0;
      hintNote.textContent = !hintsShown ? t('tk_hint_empty') : (hintsShown >= hints.length ? t('tk_hint_last') : '');
      hintNote.hidden = !hintNote.textContent;
    }
    renderHints();

    // solution lines
    var solList = el('ol', { class: 'tk-sol' });
    (task.solution || []).forEach(function (line) {
      if (typeof line === 'string') solList.appendChild(el('li', { class: 'tk-sol__math', dir: 'ltr' }, line));
      else {
        var txt = pick(line, lang);
        var isAns = /^(תשובה|Ответ|Answer)\s*:/.test(txt);
        solList.appendChild(el('li', { class: 'tk-sol__text' + (isAns ? ' tk-sol__answer' : '') }, [rich(txt)]));
      }
    });
    solPanel.inner.appendChild(solList);

    // prompt
    var promptArea = el('textarea', { class: 'input tk-prompt', readonly: true, rows: 10, dir: 'auto', 'aria-label': t('tk_prompt') });
    var copyBtn = el('button', { type: 'button', class: 'btn btn--primary', html: Icons.get('copy') + '<span>' + U.esc(t('tk_copy')) + '</span>' });
    var dlBtn = el('button', { type: 'button', class: 'btn', html: Icons.get('download') + '<span>' + U.esc(t('tk_download')) + '</span>' });
    promptPanel.inner.appendChild(el('p', { class: 'tk-note' }, t('tk_prompt_lead')));
    promptPanel.inner.appendChild(aiLangSwitch(function () { refreshPrompt(); }));
    promptPanel.inner.appendChild(el('p', { class: 'tk-note ai-warn' }, t('tk_ai_warn')));
    promptPanel.inner.appendChild(promptArea);
    promptPanel.inner.appendChild(el('div', { class: 'tk-prompt__btns' }, [copyBtn, dlBtn]));
    function answerForPrompt() {
      if (task.kind === 'choice') return choiceVal === '' ? '' : pick((task.options || [])[Number(choiceVal)], lang);
      return currentAnswer();
    }
    function refreshPrompt() { promptArea.value = buildPrompt(lesson, task, answerForPrompt(), aiLang(), codeLang ? textArea.value : ''); }
    copyBtn.addEventListener('click', function () {
      refreshPrompt();
      copyText(promptArea.value).then(function () { U.toast(t('tk_copied')); }, function () {
        promptArea.focus(); promptArea.select();
      });
    });
    dlBtn.addEventListener('click', function () {
      refreshPrompt();
      downloadText('prompt-' + lesson.id + '-' + task.id + '.txt', promptArea.value);
    });

    /* ---- check ---- */
    function showResult(kind, title, text) {
      result.innerHTML = '';
      result.className = 'tk-result tk-result--' + kind;
      var icon = kind === 'ok' ? 'check' : (kind === 'warn' ? 'question' : 'close');
      result.appendChild(el('span', { class: 'tk-result__icon', html: Icons.get(icon) }));
      var txt = el('div', { class: 'tk-result__text' });
      if (title) txt.appendChild(el('strong', null, title));
      if (text) txt.appendChild(el('span', null, [rich(text)]));
      result.appendChild(txt);
      // перезапуск анимации появления
      result.classList.remove('is-in'); result.offsetWidth; result.classList.add('is-in');
    }

    function doCheck() {
      var input = currentAnswer();
      var r = check(task, input);
      if (r.status === 'empty') return;
      if (r.status === 'correct') {
        solved = true;
        solvedLocal[key] = true;
        solvedChip.hidden = false;
        showResult('ok', t('tk_correct'), t('tk_correct_sub'));
        checkBtn.classList.add('is-done');
        var pts = hintUsed ? Store.POINTS.solve_hint : Store.POINTS.solve;
        if (task.level) pts += task.level * Store.POINTS.ai_level_bonus;
        try {
          var p = Store.progress.award(key, pts, { kind: hintUsed ? 'solve_hint' : 'solve', level: task.level || 0 });
          if (p && p.catch) p.catch(function () { /* нет входа — очки не начисляются */ });
        } catch (e) { /* ignore */ }
        if (opts.onSolved) opts.onSolved(task);
        return;
      }
      if (r.status === 'unparsed') {
        showResult('warn', '', t('tk_unparsed'));
        try { Store.reportIssue({ type: 'checker_unparsed', lesson: lesson.id, task: task.id, input: String(input) }); } catch (e) { /* ignore */ }
        promptPanel.head.classList.add('is-attn');
        return;
      }
      attempts++;
      showResult('bad', t('tk_wrong'), '');
      result.appendChild(el('span', { class: 'sr-only' }, t(codeLang && task.kind !== 'choice' ? 'tk_diag_code' : (r.diag || 'tk_diag_generic'))));
      diagBox.innerHTML = '';
      var diagKey = codeLang && (task.kind === 'number' || task.kind === 'text' || !r.diag) ? 'tk_diag_code' : (r.diag || 'tk_diag_generic');
      diagBox.appendChild(el('p', { class: 'tk-diag__text' }, [rich(t(diagKey))]));
      diagBox.hidden = false;
      if (hints.length) { hintsShown = Math.max(hintsShown, Math.min(attempts, hints.length)); hintUsed = true; }
      renderHints();
      var meU = window.Store && Store.auth.current();
      var autoHint = !(meU && meU.prefs && meU.prefs.hintOpen === false);
      if (hintPanel.isOpen()) hintPanel.refit(); else if (autoHint) hintPanel.open();
      diagBox.classList.remove('is-pulse'); diagBox.offsetWidth; diagBox.classList.add('is-pulse');
    }
    diagBox.hidden = true;
    checkBtn.addEventListener('click', doCheck);

    var content = el('div', { class: 'tk' + (isAI ? ' tk--ai' : '') }, [
      head, work, ansWrap, result, hintPanel.el, solPanel.el, promptPanel.el
    ]);

    setMode(st.mode || 'draw');
    updateCheck();

    /* черновик с другого устройства новее — подставляем его (рисунок, текст, ответ) */
    if (window.DraftSync) DraftSync.pull(key).then(function (r) {
      if (!r || closed || !(r.at > (st.at || 0))) return;
      if (!r.big) st.strokes = Array.isArray(r.strokes) ? r.strokes : [];   // слишком большой рисунок на сервер не уходит — оставляем свой
      st.text = r.text || ''; st.answer = r.answer != null ? r.answer : st.answer; st.at = r.at;
      draft.setStrokes(st.strokes);
      textArea.value = st.text;
      if (answerInput) { answerInput.value = st.answer || ''; U.storage.set('tk_ans:' + key, st.answer || ''); }
      U.storage.set(draftKey(key), { strokes: st.strokes, text: st.text, mode: r.mode === 'type' ? 'type' : 'draw', answer: st.answer, at: st.at });
      setMode(r.mode === 'type' ? 'type' : 'draw');
      updateCheck();
    });

    var title = isAI ? t('tk_ai_task', { label: taskLabel(task, lang) }) : t('tk_task', { label: taskLabel(task, lang) });
    openCount++;
    var closed = false;
    var m = App.modal({
      title: title, content: content, wide: true,
      onClose: function () {
        if (closed) return;
        closed = true; openCount--;
        draft.destroy();
        if (opts.onClose) opts.onClose();
      }
    });
    // холст меряем после вставки в DOM
    setTimeout(function () { draft.refresh(); }, 30);
    setTimeout(function () { draft.refresh(); }, 350);
    return m;
  }

  root.Tasks = {
    open: openTask,
    isOpen: function () { return openCount > 0; },
    isSolved: isSolved,
    solveKey: solveKey,
    buildPrompt: buildPrompt, aiLang: aiLang, aiLangSwitch: aiLangSwitch, replyLine: replyLine, ASK_FIRST: ASK_FIRST,
    answerText: answerText,
    taskText: taskText,
    taskLabel: taskLabel,
    downloadText: downloadText,
    copyText: copyText,
    rich: rich,
    pick: pick,
    plain: plain,
    fmtDate: fmtDate,
    subjectName: subjectName
  };
})(typeof window !== 'undefined' ? window : globalThis);
