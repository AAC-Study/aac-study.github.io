/* Страница урока: маршрут /lesson/:id.
   Шапка → оглавление (sticky сбоку на компьютере, кнопка + нижняя шторка на телефоне) →
   Файлы · Ход урока · Вопросы · Повторение · Задачи преподавателя · Задачи от ИИ.
   Зависит от: U, I18N, Icons, Store, Tasks (tasks.js), Draft (draft.js), ReadingTracker (reading.js), App. */
(function () {
  'use strict';
  var el = U.el;

  I18N.add({
    he: {
      ls_files: 'קבצים', ls_flow: 'מהלך השיעור', ls_questions: 'שאלות', ls_review: 'חזרה',
      ls_teacher: 'משימות מהמורה', ls_ai: 'משימות AI', ls_contents: 'תוכן העניינים',
      ls_dl_he: 'הורדה בעברית', ls_dl_ru: 'הורדה ברוסית', ls_downloaded: 'הורד',
      ls_file_desc: 'סיכום, מהלך השיעור עם השאלות, חזרה ו־{n} משימות עם תשובות ופתרונות מלאים.',
      ls_file_fmt: 'קובץ טקסט · נפתח בכל מכשיר',
      ls_kind_talk: 'הסבר', ls_kind_board: 'על הלוח', ls_kind_tip: 'טיפ', ls_kind_qa: 'שאלה מהכיתה', ls_kind_faq: 'שאלה נפוצה',
      ls_answer: 'תשובה', ls_tap_task: 'לחצו על משימה כדי לפתור אותה', ls_solved_of: 'נפתרו {n} מתוך {m}',
      ls_ai_note: 'את המשימות האלה המציא AI לפי נושא השיעור. הן לא מהמורה, אבל בדיוק על אותו חומר.',
      ls_read_done: 'השיעור נקרא ✓', ls_reading: 'קריאה: {p}', ls_not_found: 'השיעור לא נמצא', ls_loading: 'טוען את השיעור…',
      ls_back: 'לכל השיעורים', ls_questions_lead: 'כל השאלות מהשיעור במקום אחד. לחצו על שאלה כדי לראות את התשובה.',
      ls_show_in_flow: 'להראות במהלך השיעור', ls_close: 'סגירה', ls_tasks_count: '{n} משימות'
    },
    ru: {
      ls_files: 'Файлы', ls_flow: 'Ход урока', ls_questions: 'Вопросы', ls_review: 'Повторение',
      ls_teacher: 'Задачи от преподавателя', ls_ai: 'Задачи от ИИ', ls_contents: 'Содержание',
      ls_dl_he: 'Скачать на иврите', ls_dl_ru: 'Скачать на русском', ls_downloaded: 'Скачано',
      ls_file_desc: 'Конспект, ход урока с вопросами, повторение и {n} задач с ответами и полными решениями.',
      ls_file_fmt: 'Текстовый файл · откроется на любом устройстве',
      ls_kind_talk: 'Объяснение', ls_kind_board: 'На доске', ls_kind_tip: 'Совет', ls_kind_qa: 'Вопрос из класса', ls_kind_faq: 'Частый вопрос',
      ls_answer: 'Ответ', ls_tap_task: 'Нажми на задачу, чтобы решить её', ls_solved_of: 'Решено {n} из {m}',
      ls_ai_note: 'Эти задачи придумал ИИ по теме урока. Они не от преподавателя, но ровно по тому же материалу.',
      ls_read_done: 'Урок прочитан ✓', ls_reading: 'Прочитано: {p}', ls_not_found: 'Урок не найден', ls_loading: 'Загружаю урок…',
      ls_back: 'Ко всем урокам', ls_questions_lead: 'Все вопросы урока в одном месте. Нажми на вопрос, чтобы увидеть ответ.',
      ls_show_in_flow: 'Показать в ходе урока', ls_close: 'Закрыть', ls_tasks_count: 'Задач: {n}'
    },
    en: {
      ls_files: 'Files', ls_flow: 'Lesson flow', ls_questions: 'Questions', ls_review: 'Review',
      ls_teacher: 'Teacher tasks', ls_ai: 'AI tasks', ls_contents: 'Contents',
      ls_dl_he: 'Download in Hebrew', ls_dl_ru: 'Download in Russian', ls_downloaded: 'Downloaded',
      ls_file_desc: 'Summary, lesson flow with questions, review and {n} tasks with answers and full solutions.',
      ls_file_fmt: 'Text file · opens on any device',
      ls_kind_talk: 'Explanation', ls_kind_board: 'On the board', ls_kind_tip: 'Tip', ls_kind_qa: 'Question from class', ls_kind_faq: 'Common question',
      ls_answer: 'Answer', ls_tap_task: 'Tap a task to solve it', ls_solved_of: 'Solved {n} of {m}',
      ls_ai_note: 'These tasks were invented by AI on the lesson topic. They are not from the teacher, but cover exactly the same material.',
      ls_read_done: 'Lesson read ✓', ls_reading: 'Reading: {p}', ls_not_found: 'Lesson not found', ls_loading: 'Loading the lesson…',
      ls_back: 'All lessons', ls_questions_lead: 'All the questions from the lesson in one place. Tap a question to see the answer.',
      ls_show_in_flow: 'Show in the lesson flow', ls_close: 'Close', ls_tasks_count: '{n} tasks'
    }
  });

  /* Заголовки внутри скачиваемого файла — на языке файла, а не интерфейса. */
  var FILE_STR = {
    he: {
      flow: 'מהלך השיעור', review: 'חזרה', teacher: 'משימות מהמורה', ai: 'משימות AI (נוצרו על ידי AI לפי נושא השיעור)',
      answers: 'תשובות', solutions: 'פתרונות מלאים', q_qa: 'שאלה מהכיתה', q_faq: 'שאלה נפוצה', a: 'תשובה',
      kinds: { talk: 'הסבר', board: 'על הלוח', tip: 'טיפ' }, level: 'רמה {n} — {name}',
      levels: { 1: 'כמו בשיעור', 2: 'קצת יותר קשה', 3: 'עוד קצת יותר קשה' }, solve: 'פתרו את המשוואה',
      options: 'אפשרויות'
    },
    ru: {
      flow: 'Ход урока', review: 'Повторение', teacher: 'Задачи от преподавателя', ai: 'Задачи от ИИ (придуманы ИИ по теме урока)',
      answers: 'Ответы', solutions: 'Полные решения', q_qa: 'Вопрос из класса', q_faq: 'Частый вопрос', a: 'Ответ',
      kinds: { talk: 'Объяснение', board: 'На доске', tip: 'Совет' }, level: 'Уровень {n} — {name}',
      levels: { 1: 'Как на уроке', 2: 'Чуть сложнее', 3: 'Ещё чуть сложнее' }, solve: 'Реши уравнение',
      options: 'Варианты'
    },
    en: {
      flow: 'Lesson flow', review: 'Review', teacher: 'Teacher tasks', ai: 'AI tasks (invented by AI on the lesson topic)',
      answers: 'Answers', solutions: 'Full solutions', q_qa: 'Question from class', q_faq: 'Common question', a: 'Answer',
      kinds: { talk: 'Explanation', board: 'On the board', tip: 'Tip' }, level: 'Level {n} — {name}',
      levels: { 1: 'Like the lesson', 2: 'A bit harder', 3: 'A bit harder still' }, solve: 'Solve the equation',
      options: 'Options'
    }
  };

  var KIND_ICON = { talk: 'book', board: 'pencil', tip: 'bulb', qa: 'question', faq: 'question' };
  var pick = Tasks.pick, rich = Tasks.rich, plain = Tasks.plain, fmtDate = Tasks.fmtDate;

  function motionOff() {
    return U.reducedMotion() || document.documentElement.getAttribute('data-motion') === 'reduce';
  }
  function has(key) { try { return !!(window.Store && Store.progress.has(key)); } catch (e) { return false; } }
  function award(key, pts) {
    try { var p = Store.progress.award(key, pts); if (p && p.catch) p.catch(function () { /* нет входа */ }); } catch (e) { /* ignore */ }
  }
  function subjectOf(id) { return (window.SUBJECTS || []).filter(function (s) { return s.id === id; })[0] || { id: id, hue: 240, icon: 'book', name: { he: id, ru: id, en: id } }; }

  /* =====================================================================
     TXT FILE
     ===================================================================== */
  function wrap(text, width, indent) {
    indent = indent || '';
    var out = [];
    String(text).split('\n').forEach(function (para) {
      var line = '';
      para.split(' ').forEach(function (w) {
        if (line && (line + ' ' + w).length > width) { out.push(indent + line); line = w; }
        else line = line ? line + ' ' + w : w;
      });
      out.push(indent + line);
    });
    return out.join('\n');
  }

  function buildTxt(lesson, lang) {
    var F = FILE_STR[lang] || FILE_STR.en;
    var subj = subjectOf(lesson.subject);
    var L = [];
    var head = pick(subj.name, lang) + ' · ' + fmtDate(lesson.date) + ' · ' + pick(lesson.title, lang);
    var bar = function (ch, n) { return new Array((n || 60) + 1).join(ch); };
    L.push(head, bar('='), '', wrap(plain(pick(lesson.summary, lang)), 90), '');

    // ход урока: Q&A стоят сразу после пункта, к которому относятся (порядок данных)
    L.push('', F.flow.toUpperCase(), bar('-'));
    var n = 0;
    (lesson.timeline || []).forEach(function (it) {
      L.push('');
      if (it.kind === 'qa' || it.kind === 'faq') {
        L.push('   ? ' + (it.kind === 'qa' ? F.q_qa : F.q_faq) + ': ' + plain(pick(it.q, lang)));
        L.push(wrap(F.a + ': ' + plain(pick(it.a, lang)), 86, '     '));
      } else {
        n++;
        var title = it.title ? plain(pick(it.title, lang)) : '';
        L.push(n + '. [' + (F.kinds[it.kind] || it.kind) + ']' + (title ? ' ' + title : ''));
        if (it.text) L.push(wrap(plain(pick(it.text, lang)), 86, '   '));
      }
      (it.math || []).forEach(function (m) { L.push('       ' + m); });
    });

    if (lesson.review && lesson.review.length) {
      L.push('', '', F.review.toUpperCase(), bar('-'));
      lesson.review.forEach(function (r) {
        L.push('', '• ' + plain(pick(r.title, lang)));
        L.push(wrap(plain(pick(r.text, lang)), 86, '  '));
      });
    }

    var tasks = lesson.tasks || {};
    function taskLine(tk) {
      var txt = Tasks.taskText(tk, lang);
      if (typeof tk.text === 'string' && tk.kind === 'roots' && !tk.group) txt = F.solve + ': ' + txt;
      var line = '  ' + Tasks.taskLabel(tk, lang) + ')  ' + txt;
      if (tk.kind === 'choice') line += '   [' + F.options + ': ' + (tk.options || []).map(function (o) { return pick(o, lang); }).join(' / ') + ']';
      return line;
    }
    function eachGroup(list, fn) {
      var last = null;
      list.forEach(function (tk) {
        var g = tk.level ? 'L' + tk.level : (tk.group || '');
        if (g !== last) {
          last = g;
          var title = tk.level ? F.level.replace('{n}', tk.level).replace('{name}', F.levels[tk.level])
            : (tk.group && tasks.groups && tasks.groups[tk.group] ? pick(tasks.groups[tk.group], lang) : '');
          if (title) L.push('', title);
        }
        fn(tk);
      });
    }
    if (tasks.teacher && tasks.teacher.length) {
      L.push('', '', F.teacher.toUpperCase(), bar('-'));
      eachGroup(tasks.teacher, function (tk) { L.push(taskLine(tk)); });
    }
    if (tasks.ai && tasks.ai.length) {
      L.push('', '', F.ai.toUpperCase(), bar('-'));
      eachGroup(tasks.ai, function (tk) { L.push(taskLine(tk)); });
    }

    // ответы и решения — в конце
    var parts = [[F.teacher, tasks.teacher || []], [F.ai, tasks.ai || []]].filter(function (p) { return p[1].length; });
    if (parts.length) {
      L.push('', '', bar('='), F.answers.toUpperCase(), bar('='));
      parts.forEach(function (p) {
        L.push('', p[0] + ':');
        p[1].forEach(function (tk) { L.push('  ' + Tasks.taskLabel(tk, lang) + ')  ' + Tasks.answerText(tk, lang)); });
      });
      L.push('', '', F.solutions.toUpperCase(), bar('-'));
      parts.forEach(function (p) {
        L.push('', '>> ' + p[0]);
        p[1].forEach(function (tk) {
          L.push('', Tasks.taskLabel(tk, lang) + ')  ' + Tasks.taskText(tk, lang));
          (tk.solution || []).forEach(function (s) {
            L.push(typeof s === 'string' ? '      ' + s : '   ' + plain(pick(s, lang)));
          });
        });
      });
    }
    L.push('');
    return L.join('\n');
  }

  function fileName(lesson, lang) {
    var subj = subjectOf(lesson.subject);
    // латиница в имени файла: некоторые браузеры заменяют иврит/кириллицу на «download»
    var name = pick(subj.name, 'en') + ' ' + fmtDate(lesson.date) + ' ' + plain(pick(lesson.title, 'en')) + ' (' + lang.toUpperCase() + ').txt';
    return name.replace(/[^\x20-\x7e]+/g, '').replace(/[\\\/:*?"<>|]+/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function download(lesson, lang) {
    Tasks.downloadText(fileName(lesson, lang), buildTxt(lesson, lang));
    award('download:' + lesson.id + ':' + lang, Store.POINTS.download);
  }

  /* =====================================================================
     PAGE
     ===================================================================== */
  var SECTIONS = [
    { id: 'files', key: 'ls_files', icon: 'download' },
    { id: 'flow', key: 'ls_flow', icon: 'list' },
    { id: 'questions', key: 'ls_questions', icon: 'question' },
    { id: 'review', key: 'ls_review', icon: 'repeat' },
    { id: 'teacher', key: 'ls_teacher', icon: 'pencil' },
    { id: 'ai', key: 'ls_ai', icon: 'robot' }
  ];

  function h2(sec, extra) {
    return el('h2', { class: 'ls-h2', tabindex: '-1' }, [
      el('span', { class: 'ls-h2__icon', html: Icons.get(sec.icon) }),
      el('span', { class: 'ls-h2__text' }, t(sec.key)),
      extra || null
    ]);
  }

  function fileIcon() {
    return '<svg viewBox="0 0 48 56" aria-hidden="true" class="ls-file__svg">' +
      '<path d="M8 2h22l14 14v34a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" class="ls-file__paper"/>' +
      '<path d="M30 2v10a4 4 0 0 0 4 4h10" class="ls-file__fold"/>' +
      '<rect x="0" y="30" width="34" height="15" rx="4" class="ls-file__tag"/>' +
      '<text x="17" y="41" text-anchor="middle" class="ls-file__tagtext">TXT</text>' +
      '<path d="M12 50h22" class="ls-file__line"/></svg>';
  }

  function route(params, view) {
    var id = String(params && params.id || '');
    var ctl = { alive: true, stopTracker: null, cleanups: [] };
    view.innerHTML = '';

    if (!/^[a-z0-9-]+$/.test(id)) { notFound(view); return function () {}; }

    function onLang() { if (ctl.alive && window.LESSONS[id]) draw(true); }
    document.addEventListener('langchange', onLang);

    function draw(keepScroll) {
      var se = document.scrollingElement || document.documentElement;
      var y = se.scrollTop;
      teardown();
      view.innerHTML = '';
      renderLesson(window.LESSONS[id], view, ctl);
      if (keepScroll) se.scrollTop = y;
    }
    function teardown() {
      if (ctl.stopTracker) { ctl.stopTracker(); ctl.stopTracker = null; }
      ctl.cleanups.forEach(function (f) { f(); });
      ctl.cleanups = [];
    }

    /* место в уроке запоминается: после F5 или обновления сайта человек остаётся там же */
    var posKey = 'ls_pos:' + id, posTimer = 0;
    function savePos() {
      clearTimeout(posTimer);
      posTimer = setTimeout(function () {
        if (!ctl.alive) return;
        var se = document.scrollingElement || document.documentElement;
        U.storage.set(posKey, { y: se.scrollTop, h: se.scrollHeight, at: Date.now() });
      }, 300);
    }
    function restorePos() {
      var p = U.storage.get(posKey, null);
      if (!p || !p.y || location.hash.indexOf('#sec-') >= 0) return;
      var se = document.scrollingElement || document.documentElement;
      requestAnimationFrame(function () { se.scrollTop = p.y; });
    }
    document.addEventListener('scroll', savePos, true);
    var firstDraw = draw;
    draw = function (keep) { firstDraw(keep); if (!keep) restorePos(); };

    if (window.LESSONS && window.LESSONS[id]) draw();
    else {
      view.appendChild(el('div', { class: 'ls-loading' }, [el('span', { class: 'ls-spinner' }), t('ls_loading')]));
      var known = (window.LESSON_INDEX || []).some(function (x) { return x.id === id; });
      if (!known) { view.innerHTML = ''; notFound(view); }
      else App.loadScript('data/lessons/' + id + '.js').then(function () {
        if (!ctl.alive) return;
        if (window.LESSONS[id]) draw(); else { view.innerHTML = ''; notFound(view); }
      }, function () { if (ctl.alive) { view.innerHTML = ''; notFound(view); } });
    }

    return function cleanup() {
      ctl.alive = false;
      document.removeEventListener('scroll', savePos, true);
      clearTimeout(posTimer);
      document.removeEventListener('langchange', onLang);
      teardown();
    };
  }

  function notFound(view) {
    view.appendChild(el('div', { class: 'ls-empty card' }, [
      el('h2', null, t('ls_not_found')),
      el('button', { type: 'button', class: 'btn btn--primary', onclick: function () { App.go('/'); } }, t('ls_back'))
    ]));
  }

  function renderLesson(lesson, view, ctl) {
    var lang = I18N.lang;
    var subj = subjectOf(lesson.subject);
    var tasks = lesson.tasks || {};
    var teacher = tasks.teacher || [], ai = tasks.ai || [];
    var readKey = 'read:' + lesson.id;

    var root = el('div', { class: 'ls', style: '--hue:' + (subj.hue || 240) });

    /* ---------- hero ---------- */
    var readChip = el('span', { class: 'ls-readchip', role: 'status' }, t('ls_read_done'));
    readChip.hidden = !has(readKey);
    var hero = el('header', { class: 'ls-hero' }, [
      el('div', { class: 'ls-hero__meta' }, [
        el('button', { type: 'button', class: 'ls-subj', onclick: function () { App.go('/subject/' + lesson.subject); } }, [
          el('span', { class: 'ls-subj__icon', html: Icons.get(subj.icon || 'book') }), pick(subj.name, lang)
        ]),
        el('span', { class: 'ls-date', html: Icons.get('clock') + '<span dir="ltr">' + U.esc(fmtDate(lesson.date)) + '</span>' }),
        readChip
      ]),
      el('h1', { class: 'ls-hero__title' }, [rich(pick(lesson.title, lang))]),
      el('p', { class: 'ls-hero__sum' }, [rich(pick(lesson.summary, lang))])
    ]);

    /* ---------- sections ---------- */
    var main = el('div', { class: 'ls-main' });
    var secEls = {};
    function section(sec, children, extraHead) {
      var s = el('section', { class: 'ls-sec ls-sec--' + sec.id, id: 'ls-' + sec.id, 'aria-labelledby': 'ls-h-' + sec.id });
      var hd = h2(sec, extraHead);
      hd.id = 'ls-h-' + sec.id;
      s.appendChild(hd);
      children.forEach(function (c) { if (c) s.appendChild(c); });
      secEls[sec.id] = s;
      main.appendChild(s);
      return s;
    }

    // Files
    var dlBtn = function (l) {
      var done = has('download:' + lesson.id + ':' + l);
      var b = el('button', { type: 'button', class: 'btn ls-dl' + (done ? ' is-done' : ''), 'data-lang': l },
        [el('span', { class: 'ls-dl__ic', html: Icons.get(done ? 'check' : 'download') }), el('span', null, t('ls_dl_' + l))]);
      b.addEventListener('click', function () {
        download(lesson, l);
        b.classList.add('is-done');
        b.firstChild.innerHTML = Icons.get('check');
      });
      return b;
    };
    var fileCard = el('div', { class: 'ls-file' }, [
      el('div', { class: 'ls-file__icon', html: fileIcon() }),
      el('div', { class: 'ls-file__body' }, [
        el('div', { class: 'ls-file__title' }, [
          pick(subj.name, lang), el('span', { class: 'ls-dot' }, ' · '), el('span', { dir: 'ltr' }, fmtDate(lesson.date)),
          el('span', { class: 'ls-dot' }, ' · '), plain(pick(lesson.title, lang))
        ]),
        el('div', { class: 'ls-file__desc' }, t('ls_file_desc', { n: teacher.length + ai.length })),
        el('div', { class: 'ls-file__fmt' }, t('ls_file_fmt')),
        el('div', { class: 'ls-file__btns' }, [dlBtn('he'), dlBtn('ru')]),
        window.Offline ? Offline.button(lesson.id) : null
      ])
    ]);
    section(SECTIONS[0], [fileCard]);

    // Flow
    var flow = el('ol', { class: 'ls-flow' });
    var questions = [];
    (lesson.timeline || []).forEach(function (it, i) {
      var kind = it.kind || 'talk';
      var li = el('li', { class: 'ls-step ls-step--' + kind, id: 'ls-step-' + i, 'data-read-section': 'flow-' + i });
      li.appendChild(el('span', { class: 'ls-step__dot', html: Icons.get(KIND_ICON[kind] || 'book') }));
      var card = el('div', { class: 'ls-step__card' });
      var meta = el('div', { class: 'ls-step__kind' }, t('ls_kind_' + kind));
      if (it.time) meta.appendChild(el('span', { class: 'ls-step__time', dir: 'ltr' }, it.time));
      card.appendChild(meta);
      if (kind === 'qa' || kind === 'faq') {
        questions.push({ it: it, idx: i });
        card.appendChild(el('div', { class: 'ls-bubble ls-bubble--q' }, [
          el('span', { class: 'ls-bubble__ic', html: Icons.get('question') }),
          el('div', { class: 'ls-bubble__text' }, [rich(pick(it.q, lang))])
        ]));
        var ans = el('div', { class: 'ls-bubble ls-bubble--a' }, [
          el('span', { class: 'ls-bubble__ic', html: Icons.get('check') }),
          el('div', { class: 'ls-bubble__text' }, [
            el('span', { class: 'ls-bubble__label' }, t('ls_answer')),
            el('div', null, [rich(pick(it.a, lang))])
          ])
        ]);
        if (it.math && it.math.length) ans.lastChild.appendChild(mathBlock(it.math));
        card.appendChild(ans);
      } else {
        if (it.title) card.appendChild(el('h3', { class: 'ls-step__title' }, [rich(pick(it.title, lang))]));
        if (it.text) card.appendChild(el('p', { class: 'ls-step__text' }, [rich(pick(it.text, lang))]));
        if (it.math && it.math.length) card.appendChild(mathBlock(it.math));
      }
      li.appendChild(card);
      flow.appendChild(li);
    });
    section(SECTIONS[1], [flow]);

    // Questions (accordion, answer right under the question)
    var qList = el('div', { class: 'ls-qlist' });
    questions.forEach(function (q) {
      var d = el('details', { class: 'ls-q' });
      d.appendChild(el('summary', { class: 'ls-q__sum' }, [
        el('span', { class: 'ls-q__ic', html: Icons.get('question') }),
        el('span', { class: 'ls-q__text' }, [rich(pick(q.it.q, lang))]),
        el('span', { class: 'ls-q__chev', html: Icons.get('chevronDown') })
      ]));
      var body = el('div', { class: 'ls-q__body' }, [
        el('div', { class: 'ls-q__kind' }, t('ls_kind_' + q.it.kind)),
        el('div', { class: 'ls-q__ans' }, [rich(pick(q.it.a, lang))])
      ]);
      var jump = el('button', { type: 'button', class: 'ls-link' }, t('ls_show_in_flow'));
      jump.addEventListener('click', function () {
        var target = document.getElementById('ls-step-' + q.idx);
        if (!target) return;
        scrollToEl(target);
        target.classList.remove('is-flash'); target.offsetWidth; target.classList.add('is-flash');
      });
      body.appendChild(jump);
      d.appendChild(body);
      qList.appendChild(d);
    });
    section(SECTIONS[2], [el('p', { class: 'ls-lead' }, t('ls_questions_lead')), qList],
      el('span', { class: 'ls-h2__count' }, String(questions.length)));

    // Review
    var rev = el('div', { class: 'ls-review' });
    (lesson.review || []).forEach(function (r, i) {
      rev.appendChild(el('div', { class: 'ls-rev', 'data-read-section': 'review-' + i }, [
        el('span', { class: 'ls-rev__n' }, String(i + 1)),
        el('div', null, [
          el('div', { class: 'ls-rev__title' }, [rich(pick(r.title, lang))]),
          el('div', { class: 'ls-rev__text' }, [rich(pick(r.text, lang))])
        ])
      ]));
    });
    section(SECTIONS[3], [rev, el('div', { class: 'ls-endmark', 'data-read-end': '', 'aria-hidden': 'true' })]);

    // Teacher tasks
    var tiles = [];
    function tile(task) {
      var solved = Tasks.isSolved(lesson, task);
      var wide = typeof task.text !== 'string' || task.text.length > 26;
      var b = el('button', { type: 'button', class: 'ls-tile' + (solved ? ' is-solved' : '') + (task.level ? ' ls-tile--ai' : '') + (wide ? ' ls-tile--wide' : '') }, [
        el('span', { class: 'ls-tile__label' }, Tasks.taskLabel(task, lang)),
        typeof task.text === 'string'
          ? el('span', { class: 'ls-tile__expr', dir: 'ltr' }, task.text)
          : el('span', { class: 'ls-tile__text' }, [rich(pick(task.text, lang))]),
        el('span', { class: 'ls-tile__check', html: Icons.get('check'), 'aria-hidden': 'true' })
      ]);
      b.setAttribute('aria-label', Tasks.taskLabel(task, lang) + ': ' + Tasks.taskText(task, lang) + (solved ? ' — ' + t('tk_solved') : ''));
      b.addEventListener('click', function () {
        try { sessionStorage.setItem('open_task', lesson.id + '|' + task.id); } catch (e) { /* */ }
        Tasks.open(lesson, task, { onSolved: function () { refreshTiles(); }, onClose: function () {
          try { sessionStorage.removeItem('open_task'); } catch (e) { /* */ }
          refreshTiles(); b.focus();
        } });
      });
      tiles.push({ el: b, task: task });
      return b;
    }
    var counters = [];
    function counter(list) {
      var c = el('span', { class: 'ls-solved' });
      counters.push({ el: c, list: list });
      return c;
    }
    function refreshTiles() {
      tiles.forEach(function (x) {
        var s = Tasks.isSolved(lesson, x.task);
        x.el.classList.toggle('is-solved', s);
      });
      counters.forEach(function (c) {
        var n = c.list.filter(function (tk) { return Tasks.isSolved(lesson, tk); }).length;
        c.el.textContent = t('ls_solved_of', { n: n, m: c.list.length });
        c.el.classList.toggle('is-all', n === c.list.length && n > 0);
      });
    }

    var tWrap = el('div', { class: 'ls-tasks' });
    tWrap.appendChild(el('p', { class: 'ls-caption', html: Icons.get('pencil') + '<span>' + U.esc(t('ls_tap_task')) + '</span>' }));
    var lastGroup = null, grid = null;
    teacher.forEach(function (task) {
      if (!grid || task.group !== lastGroup) {
        lastGroup = task.group;
        var gt = task.group && tasks.groups ? pick(tasks.groups[task.group], lang) : '';
        if (gt) tWrap.appendChild(el('h3', { class: 'ls-group' }, gt));
        grid = el('div', { class: 'ls-grid' });
        tWrap.appendChild(grid);
      }
      grid.appendChild(tile(task));
    });
    section(SECTIONS[4], [tWrap], counter(teacher));

    // AI tasks
    var aiWrap = el('div', { class: 'ls-tasks ls-tasks--ai' });
    aiWrap.appendChild(el('div', { class: 'ls-ainote' }, [
      el('span', { class: 'ls-aibadge', html: Icons.get('robot') + '<span>' + U.esc(t('tk_made_by_ai')) + '</span>' }),
      el('span', null, t('ls_ai_note'))
    ]));
    var levels = [1, 2, 3].filter(function (lv) { return ai.some(function (x) { return x.level === lv; }); });
    var curLevel = U.storage.get('ls_ai_level', levels[0] || 1);
    if (levels.indexOf(curLevel) < 0) curLevel = levels[0];
    var tabs = el('div', { class: 'ls-tabs', role: 'tablist', 'aria-label': t('ls_ai') });
    var panes = {};
    var tabBtns = {};
    levels.forEach(function (lv) {
      var tb = el('button', { type: 'button', class: 'ls-tab', role: 'tab', id: 'ls-tab-' + lv, 'aria-controls': 'ls-pane-' + lv }, [
        el('span', { class: 'ls-tab__n' }, t('tk_level', { n: lv })),
        el('span', { class: 'ls-tab__name' }, t('tk_level_' + lv))
      ]);
      tb.addEventListener('click', function () { selectLevel(lv, true); });
      tb.addEventListener('keydown', function (e) {
        var k = e.key, i = levels.indexOf(lv), rtl = I18N.dir() === 'rtl';
        var next = (k === 'ArrowRight') !== rtl ? 1 : -1;
        if (k === 'ArrowRight' || k === 'ArrowLeft') {
          e.preventDefault();
          var nl = levels[(i + next + levels.length) % levels.length];
          selectLevel(nl, true); tabBtns[nl].focus();
        }
      });
      tabBtns[lv] = tb;
      tabs.appendChild(tb);
      var g = el('div', { class: 'ls-grid', role: 'tabpanel', id: 'ls-pane-' + lv, 'aria-labelledby': 'ls-tab-' + lv });
      ai.filter(function (x) { return x.level === lv; }).forEach(function (task) { g.appendChild(tile(task)); });
      panes[lv] = g;
    });
    function selectLevel(lv, save) {
      curLevel = lv;
      if (save) U.storage.set('ls_ai_level', lv);
      levels.forEach(function (x) {
        var on = x === lv;
        tabBtns[x].setAttribute('aria-selected', on ? 'true' : 'false');
        tabBtns[x].tabIndex = on ? 0 : -1;
        tabBtns[x].classList.toggle('is-on', on);
        panes[x].hidden = !on;
      });
    }
    aiWrap.appendChild(tabs);
    aiWrap.appendChild(el('p', { class: 'ls-caption', html: Icons.get('pencil') + '<span>' + U.esc(t('ls_tap_task')) + '</span>' }));
    levels.forEach(function (lv) { aiWrap.appendChild(panes[lv]); });
    if (levels.length) selectLevel(curLevel, false);
    section(SECTIONS[5], [aiWrap, Tasks.anyBox()], counter(ai));
    refreshTiles();

    /* ---------- TOC ---------- */
    var tocItems = {};
    function tocList(onPick) {
      var ul = el('ul', { class: 'ls-toc__list' });
      SECTIONS.forEach(function (sec) {
        var count = sec.id === 'teacher' ? teacher.length : sec.id === 'ai' ? ai.length : sec.id === 'questions' ? questions.length : null;
        var b = el('button', { type: 'button', class: 'ls-toc__item', 'data-sec': sec.id }, [
          el('span', { class: 'ls-toc__ic', html: Icons.get(sec.icon) }),
          el('span', { class: 'ls-toc__label' }, t(sec.key)),
          count != null ? el('span', { class: 'ls-toc__count' }, String(count)) : null
        ]);
        b.addEventListener('click', function () {
          setActive(sec.id);
          if (onPick) onPick();
          scrollToEl(secEls[sec.id], true);
        });
        (tocItems[sec.id] = tocItems[sec.id] || []).push(b);
        ul.appendChild(el('li', null, b));
      });
      return ul;
    }
    var progFill = el('span', { class: 'ls-progress__fill' });
    var progText = el('span', { class: 'ls-progress__text' });
    var prog = el('div', { class: 'ls-progress' }, [el('span', { class: 'ls-progress__bar' }, progFill), progText]);
    var aside = el('aside', { class: 'ls-toc', 'aria-label': t('ls_contents') }, [
      el('div', { class: 'ls-toc__title' }, t('ls_contents')),
      el('nav', null, tocList()),
      prog
    ]);

    var layout = el('div', { class: 'ls-layout' }, [main, aside]);
    root.appendChild(hero);
    root.appendChild(layout);

    // phone: floating button + bottom sheet
    var sheet = el('div', { class: 'ls-sheet', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('ls_contents'), hidden: true });
    var sheetPanel = el('div', { class: 'ls-sheet__panel' }, [
      el('div', { class: 'ls-sheet__grip', 'aria-hidden': 'true' }),
      el('div', { class: 'ls-sheet__head' }, [
        el('span', { class: 'ls-toc__title' }, t('ls_contents')),
        el('button', { type: 'button', class: 'btn btn--ghost icon-btn', 'aria-label': t('ls_close'), html: Icons.get('close'), onclick: function () { closeSheet(); } })
      ]),
      el('nav', null, tocList(function () { closeSheet(true); }))
    ]);
    sheet.appendChild(el('div', { class: 'ls-sheet__backdrop', onclick: function () { closeSheet(); } }));
    sheet.appendChild(sheetPanel);
    var fab = el('button', { type: 'button', class: 'ls-fab', 'aria-haspopup': 'dialog', html: Icons.get('list') + '<span>' + U.esc(t('ls_contents')) + '</span>' });
    fab.addEventListener('click', openSheet);
    root.appendChild(fab);
    root.appendChild(sheet);

    function openSheet() {
      sheet.hidden = false;
      sheet.offsetWidth;
      sheet.classList.add('is-open');
      var first = sheet.querySelector('.ls-toc__item.is-active') || sheet.querySelector('.ls-toc__item');
      if (first) first.focus();
      document.addEventListener('keydown', onSheetKey);
    }
    function closeSheet(silent) {
      sheet.classList.remove('is-open');
      document.removeEventListener('keydown', onSheetKey);
      setTimeout(function () { if (!sheet.classList.contains('is-open')) sheet.hidden = true; }, motionOff() ? 0 : 260);
      if (!silent) fab.focus();
    }
    function onSheetKey(e) { if (e.key === 'Escape') closeSheet(); }
    ctl.cleanups.push(function () { document.removeEventListener('keydown', onSheetKey); });

    view.appendChild(root);

    /* ---------- scroll-spy ---------- */
    var active = null;
    function setActive(id) {
      if (id === active) return;
      active = id;
      Object.keys(tocItems).forEach(function (k) {
        tocItems[k].forEach(function (b) {
          b.classList.toggle('is-active', k === id);
          if (k === id) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
        });
      });
    }
    var spyLock = 0;
    function spy() {
      if (Date.now() < spyLock) return;
      var vh = window.innerHeight || 800;
      var line = Math.min(vh * 0.32, 260);
      var cur = SECTIONS[0].id;
      SECTIONS.forEach(function (sec) {
        var s = secEls[sec.id];
        if (s && s.getBoundingClientRect().top <= line) cur = sec.id;
      });
      var se = document.scrollingElement || document.documentElement;
      if (se.scrollTop + vh >= se.scrollHeight - 4) {
        // в самом низу страницы — последняя видимая секция
        var last = SECTIONS[SECTIONS.length - 1].id;
        if (secEls[last].getBoundingClientRect().top < vh) cur = last;
      }
      setActive(cur);
    }
    var raf = 0;
    function onScroll() { if (raf) return; raf = requestAnimationFrame(function () { raf = 0; spy(); }); }
    document.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onScroll);
    ctl.cleanups.push(function () {
      document.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    });
    spy();

    function scrollToEl(target, focusHeading) {
      if (!target) return;
      spyLock = Date.now() + (motionOff() ? 50 : 700);
      try { target.scrollIntoView({ behavior: motionOff() ? 'auto' : 'smooth', block: 'start' }); }
      catch (e) { target.scrollIntoView(true); }
      setTimeout(function () { spyLock = 0; spy(); }, motionOff() ? 60 : 750);
      if (focusHeading) {
        var hd = target.querySelector('.ls-h2');
        if (hd) { try { hd.focus({ preventScroll: true }); } catch (e) { /* old browsers */ } }
      }
    }

    /* ---------- reading tracker ---------- */
    function setProgress(p) {
      var pct = Math.round(p * 100);
      progFill.style.width = pct + '%';
      progText.textContent = t('ls_reading', { p: '\u2066' + pct + '%\u2069' });
    }
    function markRead() {
      readChip.hidden = false;
      readChip.classList.add('is-new');
      prog.classList.add('is-done');
      progFill.style.width = '100%';
      progText.textContent = t('ls_read_done');
    }
    /* после «Обновить» или F5 снова открываем задачу, которая была открыта */
    var openTask = null;
    try { openTask = sessionStorage.getItem('open_task'); } catch (e) { /* */ }
    if (openTask && openTask.indexOf(lesson.id + '|') === 0) {
      var tid = openTask.slice(lesson.id.length + 1);
      var hit = tiles.filter(function (x) { return String(x.task.id) === tid; })[0];
      if (hit) setTimeout(function () { if (!Tasks.isOpen() && hit.el.isConnected) hit.el.click(); }, 80);
    }
    if (has(readKey)) markRead();
    else if (window.ReadingTracker) {
      setProgress(0);
      /* прогресс чтения переживает перезагрузку и обновление сайта; с другим устройством — через сервер */
      var me = Store.auth.current();
      var stKey = 'read_st:' + (me ? me.id : '') + ':' + lesson.id, syncKey = 'read:' + lesson.id;
      var stopT = ctl.stopTracker = ReadingTracker.start(main, function () {
        award(readKey, Store.POINTS.read);
        markRead();
      }, { key: lesson.id, onProgress: setProgress, paused: function () { return Tasks.isOpen(); },
        saved: U.storage.get(stKey, null),
        onSave: function (st) { U.storage.set(stKey, st); if (window.DraftSync) DraftSync.push(syncKey, st); } });
      if (window.DraftSync) DraftSync.pull(syncKey).then(function (r) { if (r && stopT.merge) stopT.merge(r); });
    }
  }

  function mathBlock(lines) {
    var b = el('div', { class: 'ls-math', dir: 'ltr' });
    lines.forEach(function (m) { b.appendChild(el('div', { class: 'ls-math__line' }, m)); });
    return b;
  }

  window.LessonPage = { route: route, buildTxt: buildTxt, fileName: fileName };

  function register() {
    if (window.App && App.registerRoute && !register.done) {
      register.done = true;
      App.registerRoute('/lesson/:id', route);
    }
  }
  register();
  if (!register.done) document.addEventListener('DOMContentLoaded', register);
})();
