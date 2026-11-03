/* Домашние задания: список (#/homework) и страница задания (#/homework/:id).
   Данные: data/homework.js (window.HOMEWORK). Промпт для ИИ — на английском, язык ответа выбирает человек.
   Зависит от: U, I18N, Icons, App, Tasks (aiLangSwitch, aiLang, replyLine, ASK_FIRST). */
(function () {
  'use strict';
  var el = U.el;

  I18N.add({
    he: {
      nav_homework: 'שיעורי בית', hw_lead: 'כל שיעורי הבית: מתי ניתנו, עד מתי להגיש ומה בדיוק לעשות.',
      hw_given: 'ניתן', hw_due: 'להגיש עד', hw_due_unknown: 'מועד ההגשה עוד לא ידוע', hw_left_d: 'נשארו {d} ימים ו־{h} שעות', hw_left_h: 'נשארו {h} שעות',
      hw_left_m: 'נשארו {m} דקות', hw_over: 'המועד עבר', hw_active: 'פתוחים', hw_nodue: 'בלי מועד', hw_past: 'המועד עבר', hw_empty: 'אין עדיין שיעורי בית.',
      hw_back: 'לכל שיעורי הבית', hw_not_found: 'שיעורי הבית לא נמצאו', hw_original: 'הטקסט של המרצה', hw_steps: 'מה לעשות, שלב אחרי שלב', hw_submit: 'איך ולאן להגיש',
      hw_links: 'קישורים', hw_ai: 'פרומפט ל־AI', hw_mode: 'מה ה־AI יעשה', hw_mode_tutor: 'עזרה צעד אחר צעד', hw_mode_full: 'לעשות הכול',
      hw_full_lead: 'ה־AI יעשה את כל המשימה: קבצים מוכנים (קוד נקי, בלי הערות מיותרות) וקובץ הסבר נפרד. השורה הראשונה בהסבר: «העבודה נעשתה בעזרת בינה מלאכותית: (שם ה־AI)». בהמשך: מה ביקשו במשימה, איך הכול עובד, מה להעלות ולאן ואיך להציג למרצה.',
      hw_full_warn: 'זה AI: הוא יכול לטעות. בדקו שהקוד רץ, והבינו כל שורה לפני ההצגה: המרצה ישאל אתכם.',
      hw_full_banned: 'בקורס הזה המרצה אסר AI בסמסטר א. גם עם השורה על ה־AI העבודה אולי לא תתקבל. שאלו את המרצה מראש, או בחרו «עזרה צעד אחר צעד».',
      hw_ai_lead: 'העתיקו והדביקו בכל AI (ChatGPT, Claude, Gemini…), גם בצ׳אט חדש וריק. ה־AI יסביר את המשימה, ילווה אתכם שלב אחרי שלב, יבדוק את מה שעשיתם ויכין אתכם להציג את העבודה.',
      hw_ai_warn: 'זה AI: הוא יכול לטעות. בדקו כל דבר בעצמכם. את העבודה עושים אתם, ה־AI רק מסביר ובודק.',
      hw_ai_banned: 'המרצה אסר להשתמש ב־AI בקורס הזה בסמסטר א. השתמשו בפרומפט רק כדי להבין את החומר, ואת הקוד כתבו בעצמכם.',
      hw_count: '{n} שיעורי בית'
    },
    ru: {
      nav_homework: 'Домашние задания', hw_lead: 'Все домашние задания: когда выдали, до когда сдать и что именно сделать.',
      hw_given: 'Выдали', hw_due: 'Сдать до', hw_due_unknown: 'Срок сдачи пока не известен', hw_left_d: 'Осталось {d} дн. {h} ч', hw_left_h: 'Осталось {h} ч',
      hw_left_m: 'Осталось {m} мин', hw_over: 'Срок прошёл', hw_active: 'Открытые', hw_nodue: 'Без срока', hw_past: 'Срок прошёл', hw_empty: 'Домашних заданий пока нет.',
      hw_back: 'Ко всем домашним заданиям', hw_not_found: 'Задание не найдено', hw_original: 'Текст преподавателя', hw_steps: 'Что сделать, по шагам', hw_submit: 'Как и куда сдать',
      hw_links: 'Ссылки', hw_ai: 'Промпт для ИИ', hw_mode: 'Что сделает ИИ', hw_mode_tutor: 'Помощь по шагам', hw_mode_full: 'Сделать целиком',
      hw_full_lead: 'ИИ сделает задание целиком: готовые файлы (чистый код без лишних приписок) и отдельный файл-объяснение. Первая строка объяснения: «Сделано с помощью ИИ: (его название)». Дальше в нём: что было в задании, как всё работает, что куда загрузить и как показать преподавателю.',
      hw_full_warn: 'Это ИИ: он может ошибаться. Проверь, что код запускается, и разберись в каждой строке до показа: преподаватель будет спрашивать тебя.',
      hw_full_banned: 'На этом курсе преподаватель запретил ИИ в семестре א. Даже с пометкой про ИИ работу могут не принять. Спроси преподавателя заранее или выбери «Помощь по шагам».',
      hw_ai_lead: 'Скопируй и вставь в любой ИИ (ChatGPT, Claude, Gemini…), даже в новый пустой чат. ИИ объяснит задание, проведёт тебя по шагам, проверит, что ты сделал, и подготовит к показу работы преподавателю.',
      hw_ai_warn: 'Это ИИ: он может ошибаться. Проверяй всё сам. Задание делаешь ты, ИИ только объясняет и проверяет.',
      hw_ai_banned: 'Преподаватель запретил ИИ на этом курсе в семестре א. Используй промпт только чтобы понять материал, а код пиши сам.',
      hw_count: 'Заданий: {n}'
    },
    en: {
      nav_homework: 'Homework', hw_lead: 'All homework: when it was given, when it is due and exactly what to do.',
      hw_given: 'Given', hw_due: 'Due', hw_due_unknown: 'The deadline is not known yet', hw_left_d: '{d} d {h} h left', hw_left_h: '{h} h left',
      hw_left_m: '{m} min left', hw_over: 'Past the deadline', hw_active: 'Open', hw_nodue: 'No deadline', hw_past: 'Past the deadline', hw_empty: 'No homework yet.',
      hw_back: 'All homework', hw_not_found: 'Homework not found', hw_original: 'The teacher\'s text', hw_steps: 'What to do, step by step', hw_submit: 'How and where to submit',
      hw_links: 'Links', hw_ai: 'AI prompt', hw_mode: 'What the AI does', hw_mode_tutor: 'Step-by-step help', hw_mode_full: 'Do it all',
      hw_full_lead: 'The AI does the whole homework: ready files (clean code, no extra remarks) and a separate explanation file. Its first line: "This work was done with the help of AI: (the AI\'s name)". Then: what the task asked, how it all works, what to upload where and how to present it to the teacher.',
      hw_full_warn: 'This is AI: it can make mistakes. Make sure the code runs and understand every line before you present: the teacher will ask you.',
      hw_full_banned: 'The teacher does not allow AI in this course in semester A. Even with the AI note, the work may not be accepted. Ask the teacher first, or choose "Step-by-step help".',
      hw_ai_lead: 'Copy and paste into any AI (ChatGPT, Claude, Gemini…), even a brand-new empty chat. The AI explains the task, walks you through it step by step, checks your work and gets you ready to present it.',
      hw_ai_warn: 'This is AI: it can make mistakes. Check everything yourself. You do the homework; the AI only explains and checks.',
      hw_ai_banned: 'The teacher does not allow AI in this course in semester A. Use the prompt only to understand the material, and write the code yourself.',
      hw_count: '{n} homework'
    }
  });

  var LOCALE = { he: 'he-IL', ru: 'ru-RU', en: 'en-GB' };
  var TZ = 'Asia/Jerusalem';
  function list() { return Array.isArray(window.HOMEWORK) ? window.HOMEWORK : []; }
  function byId(id) { return list().filter(function (h) { return h.id === id; })[0]; }
  function subject(id) { return (window.SUBJECTS || []).filter(function (s) { return s.id === id; })[0] || { id: id, icon: 'book', hue: 220, name: { he: id, ru: id, en: id } }; }

  function fmt(iso, dateOnly, lang) {
    if (!iso) return '';
    var d = new Date(iso);
    var o = { weekday: 'short', day: 'numeric', month: 'short', timeZone: TZ };
    if (!dateOnly) { o.hour = '2-digit'; o.minute = '2-digit'; o.hour12 = false; }
    try { return d.toLocaleString(LOCALE[lang || I18N.lang] || 'en-GB', o); } catch (e) { return d.toISOString().slice(0, 16).replace('T', ' '); }
  }
  /* сколько осталось: {key, text, kind} */
  function left(h, now) {
    if (!h.due) return { kind: 'nodue', text: t('hw_due_unknown') };
    var ms = new Date(h.due).getTime() - (now || Date.now());
    if (ms <= 0) return { kind: 'past', text: t('hw_over') };
    var m = Math.floor(ms / 60000), hrs = Math.floor(m / 60), d = Math.floor(hrs / 24);
    if (hrs < 1) return { kind: 'soon', text: t('hw_left_m', { m: Math.max(1, m) }) };
    if (hrs < 48) return { kind: hrs < 24 ? 'soon' : 'ok', text: t('hw_left_h', { h: hrs }) };
    return { kind: 'ok', text: t('hw_left_d', { d: d, h: hrs - d * 24 }) };
  }
  function sorted(now) {
    var a = [], n = [], p = [];
    list().forEach(function (h) { var k = left(h, now).kind; (k === 'past' ? p : k === 'nodue' ? n : a).push(h); });
    a.sort(function (x, y) { return new Date(x.due) - new Date(y.due); });
    p.sort(function (x, y) { return new Date(y.due) - new Date(x.due); });
    n.sort(function (x, y) { return new Date(y.given) - new Date(x.given); });
    return { active: a, nodue: n, past: p };
  }

  function chip(s) {
    return el('span', { class: 'hw-subj', style: '--h:' + (s.hue || 220) }, [el('span', { html: Icons.get(s.icon || 'book') }), el('span', null, U.tr(s.name))]);
  }
  function dates(h) {
    var lf = left(h);
    return el('div', { class: 'hw-dates' }, [
      el('span', null, [el('b', null, t('hw_given') + ': '), fmt(h.given, h.givenDateOnly)]),
      el('span', null, [el('b', null, t('hw_due') + ': '), h.due ? fmt(h.due) : '—']),
      el('span', { class: 'hw-left hw-left--' + lf.kind, 'data-id': h.id }, [el('span', { html: Icons.get('clock') }), el('span', null, lf.text)])
    ]);
  }

  function card(h) {
    var s = subject(h.subject);
    return el('a', { class: 'card hw-card', href: '#/homework/' + encodeURIComponent(h.id) }, [
      el('div', { class: 'hw-card__top' }, [chip(s), h.aiRule === 'banned' ? el('span', { class: 'hw-noai', title: t('hw_ai_banned') }, 'AI ✕') : null]),
      el('h3', { class: 'hw-card__title' }, U.tr(h.title)),
      el('p', { class: 'hw-card__sum' }, U.tr(h.summary)),
      dates(h)
    ]);
  }

  function listRoute(params, view) {
    App.setTitle(t('nav_homework'));
    view.appendChild(el('div', { class: 'page-head' }, [el('h1', null, t('nav_homework')), el('p', null, t('hw_lead'))]));
    var g = sorted();
    if (!list().length) { view.appendChild(el('div', { class: 'empty card' }, t('hw_empty'))); return; }
    [['active', 'hw_active'], ['nodue', 'hw_nodue'], ['past', 'hw_past']].forEach(function (x) {
      if (!g[x[0]].length) return;
      view.appendChild(el('div', { class: 'section-label' }, t(x[1]) + ' · ' + g[x[0]].length));
      view.appendChild(el('div', { class: 'hw-list' }, g[x[0]].map(card)));
    });
    // «сколько осталось» обновляется раз в минуту — только эти надписи, не вся страница
    var timer = setInterval(tick, 60000);
    function tick() {
      U.$$('.hw-left[data-id]', view).forEach(function (n) {
        var h = byId(n.getAttribute('data-id')); if (!h) return;
        var lf = left(h); n.className = 'hw-left hw-left--' + lf.kind; n.lastChild.textContent = lf.text;
      });
    }
    return function () { clearInterval(timer); };
  }

  /* ---------- промпт ---------- */
  /* по умолчанию «Сделать целиком»; на курсе, где ИИ запрещён, по умолчанию «Помощь по шагам» */
  function aiMode(h) { var d = h && h.aiRule === 'banned' ? 'tutor' : 'full'; var v = U.storage.get('hw_ai_mode', d); return v === 'tutor' || v === 'full' ? v : d; }

  /* «Сделать целиком»: всё решение + отдельное объяснение, первая строка которого честно говорит, что это сделал ИИ */
  function buildFullPrompt(h, replyLang) {
    var s = subject(h.subject);
    var langName = { he: 'Hebrew', ru: 'Russian', en: 'English' }[(h.original && h.original.lang) || 'he'] || 'Hebrew';
    var rl = { he: 'Hebrew', ru: 'Russian', en: 'English' }[replyLang] || 'Hebrew';
    var sub = (h.submit && h.submit.en) || 'as the teacher asked';
    var lines = [
      'You are an expert and a very clear teacher. I am a beginner college student (software technician program, first semester). Subject: ' + ((s.name && s.name.en) || U.tr(s.name)) + '.',
      'Below is my homework exactly as the teacher gave it (in ' + langName + '), with a short summary.', '',
      'Homework: ' + (h.title.en || U.tr(h.title)),
      'Given: ' + fmt(h.given, h.givenDateOnly, 'en') + '. Due: ' + (h.due ? fmt(h.due, false, 'en') + ' (Israel time)' : 'not known yet') + '.',
      'Summary: ' + (h.summary.en || U.tr(h.summary)), '',
      'The teacher\'s text:', '"""', (h.original && h.original.text) || '', '"""', '',
      'What to submit: ' + sub,
      'What we have learned so far: ' + (h.level || ''), '',
      'Do the WHOLE homework for me, completely and correctly. Two parts:', '',
      'PART 1. The finished work.',
      '1. Do every item of the task, nothing left out. Use only what is listed above as learned (so I can understand and explain all of it), but the result must be fully correct and complete.',
      '2. Give every file ready to save: first the exact file name, then the full content in one block. No "...", no TODO, no parts for me to fill in.',
      '3. Inside the work itself write NO notes, remarks or explanations about how it was made (they would confuse me). Only what the teacher expects to see.',
      '4. Before you answer, check it: the code must compile and run, every item of the task must be done, math answers must be checked by substitution.',
      '5. If the task needs something only I can make (a screenshot, a file from my computer, an upload), tell me exactly how to make it, click by click.',
      '',
      'PART 2. A separate explanation file (file name: explanation.txt).',
      'The VERY FIRST line of this file must be exactly, in Hebrew: "העבודה נעשתה בעזרת בינה מלאכותית: <your real name and version, for example ChatGPT, Claude, Gemini, DeepSeek>". Write your real name, never leave the placeholder.'
    ];
    if (replyLang !== 'he') lines.push('The second line: the same sentence in ' + rl + '.');
    lines = lines.concat([
      'Then, in ' + rl + ' and in simple words:',
      'a) What the teacher asked for in this homework.',
      'b) How the solution works, part by part. For code: line by line, what each line does and why. For math: every operation on its own line with why it is done.',
      'c) Which files to upload, where, and how (' + sub + ').',
      'd) How to present it to the teacher in 1-2 minutes: a short plan of what to say.',
      'e) 5 questions the teacher is likely to ask, each with a short answer I can say in my own words.',
      'f) What to practise so I can explain and repeat it myself.'
    ]);
    if (h.selfPrompt) lines.push('', 'The teacher asked us to write a prompt ourselves: write it as its own file, and in the explanation say why each part of the prompt is there.');
    lines.push('', 'If I later send you an error or a teacher comment you cannot fully understand, FIRST ask me for a photo or screenshot (or the pasted text), then fix exactly that.');
    lines = lines.concat([''], Tasks.DETAIL);
    lines.push('', Tasks.WARN_FIRST);
    lines.push('', Tasks.replyLine(replyLang) + ' The work files themselves stay in the language the teacher expects.');
    return lines.join('\n');
  }

  function buildPrompt(h, replyLang, mode) {
    if ((mode || aiMode(h)) === 'full') return buildFullPrompt(h, replyLang);
    var s = subject(h.subject);
    var L = 'en';
    var langName = { he: 'Hebrew', ru: 'Russian', en: 'English' }[(h.original && h.original.lang) || 'he'] || 'Hebrew';
    var lines = [
      'You are a patient tutor for a beginner college student (software technician program, first semester). Subject: ' + ((s.name && s.name.en) || U.tr(s.name)) + '.',
      'Below is my homework exactly as the teacher gave it (in ' + langName + '), with a short summary.', '',
      'Homework: ' + (h.title.en || U.tr(h.title)),
      'Given: ' + fmt(h.given, h.givenDateOnly, 'en') + '. Due: ' + (h.due ? fmt(h.due, false, 'en') + ' (Israel time)' : 'not known yet') + '.',
      'Summary: ' + (h.summary.en || U.tr(h.summary)), '',
      'The teacher\'s text:', '"""', (h.original && h.original.text) || '', '"""', '',
      'What to submit: ' + ((h.submit && h.submit.en) || ''),
      'What we have learned so far (stay strictly at this level, nothing more advanced): ' + (h.level || ''), '',
      'How I want you to help. I want to do this homework MYSELF and really understand it:',
      '1. Explain in simple words what the teacher is asking for, and split it into small steps.',
      '2. Go one step at a time: tell me what to do in this step, then wait until I do it and send you my result.',
      '3. Check what I send. If something is wrong, show exactly where and why, and give a hint before any solution.',
      '4. Show a small example only if I ask for it, and keep it at our level.',
      '5. If I am short on time, tell me which parts matter most and plan the remaining time with me.',
      '6. At the end, help me get ready to present my work to the teacher: ask me 3-5 questions the teacher may ask about it, and check that I can explain every part in my own words.',
      'I am short on time: always show me the fastest effective way to do it myself, most important parts first.'
    ];
    if (h.selfPrompt) lines.push('7. The teacher asked us to write a prompt ourselves. Do not write it for me: ask me questions, help me improve my own draft, and explain what makes a prompt good.');
    if (h.aiRule === 'banned') lines.push('', 'Note: the teacher does not allow AI-written work in this course. Never write the solution or code for me; only explain, give hints and check my own work.');
    lines = lines.concat([''], Tasks.DETAIL, [''], Tasks.ASK_FIRST, ['', Tasks.WARN_FIRST, '', Tasks.replyLine(replyLang)]);
    return lines.join('\n');
  }

  /* копирование промпта (общее) */
  function copyBtn(area, refresh) {
    var copy = el('button', { type: 'button', class: 'btn btn--primary', html: Icons.get('copy') + '<span>' + U.esc(t('tk_copy')) + '</span>' });
    copy.addEventListener('click', function () {
      refresh();
      var done = function () { U.toast(t('tk_copied')); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(area.value).then(done, function () { area.focus(); area.select(); });
      else { area.focus(); area.select(); try { document.execCommand('copy'); done(); } catch (e) { /* */ } }
    });
    return copy;
  }

  function aiBox(h) {
    var box = el('details', { class: 'card hw-ai' });
    var sum = el('summary', { class: 'hw-ai__head' }, [el('span', { class: 'hw-ai__icon', html: Icons.get('robot') }), el('span', null, t('hw_ai')), el('span', { class: 'hw-ai__chev', html: Icons.get('chevronDown') })]);
    box.appendChild(sum);
    var area = el('textarea', { class: 'input tk-prompt', readonly: true, rows: 12, dir: 'ltr', 'aria-label': t('hw_ai') });
    var lead = el('p', { class: 'tk-note' }), warn = el('p', { class: 'tk-note ai-warn' }), ban = el('p', { class: 'tk-note ai-warn' });
    function refresh() {
      var m = aiMode(h);
      area.value = buildPrompt(h, Tasks.aiLang(), m);
      lead.textContent = t(m === 'full' ? 'hw_full_lead' : 'hw_ai_lead');
      warn.textContent = t(m === 'full' ? 'hw_full_warn' : 'hw_ai_warn');
      ban.textContent = t(m === 'full' ? 'hw_full_banned' : 'hw_ai_banned');
      box.setAttribute('data-mode', m);
    }
    var modeRow = el('div', { class: 'ai-lang hw-mode', role: 'group', 'aria-label': t('hw_mode') }, [el('span', { class: 'ai-lang__label' }, t('hw_mode'))]);
    var modeSeg = el('div', { class: 'tk-seg ai-lang__seg' });
    ['tutor', 'full'].forEach(function (m) {
      var b = el('button', { type: 'button', class: 'tk-seg__btn', 'data-mode': m, 'aria-pressed': m === aiMode(h) ? 'true' : 'false' }, t('hw_mode_' + m));
      b.addEventListener('click', function () {
        U.storage.set('hw_ai_mode', m);
        U.$$('.tk-seg__btn', modeSeg).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        refresh();
      });
      modeSeg.appendChild(b);
    });
    modeRow.appendChild(modeSeg);
    var copy = el('button', { type: 'button', class: 'btn btn--primary', html: Icons.get('copy') + '<span>' + U.esc(t('tk_copy')) + '</span>' });
    copy.addEventListener('click', function () {
      refresh();
      var done = function () { U.toast(t('tk_copied')); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(area.value).then(done, function () { area.focus(); area.select(); });
      else { area.focus(); area.select(); try { document.execCommand('copy'); done(); } catch (e) { /* */ } }
    });
    var inner = el('div', { class: 'hw-ai__body' }, [
      modeRow,
      lead,
      Tasks.aiLangSwitch(refresh),
      warn,
      h.aiRule === 'banned' ? ban : null,
      area,
      el('div', { class: 'tk-prompt__btns' }, [copy])
    ]);
    box.appendChild(inner);
    box.addEventListener('toggle', function () { if (box.open) refresh(); });
    refresh();
    return box;
  }

  function pageRoute(params, view) {
    var h = byId(params.id);
    view.appendChild(el('a', { class: 'btn btn--ghost hw-back', href: '#/homework', html: Icons.get('back') + '<span>' + U.esc(t('hw_back')) + '</span>' }));
    if (!h) { App.setTitle(t('nav_homework')); view.appendChild(el('div', { class: 'empty card' }, t('hw_not_found'))); return; }
    var s = subject(h.subject);
    App.setTitle(U.tr(h.title));
    view.appendChild(el('div', { class: 'page-head hw-head' }, [chip(s), el('h1', null, U.tr(h.title)), el('p', null, U.tr(h.summary))]));
    view.appendChild(el('div', { class: 'card hw-when' }, [dates(h)]));
    if (h.aiRule === 'banned') view.appendChild(el('div', { class: 'card hw-rule' }, [el('span', { html: Icons.get('block') }), el('span', null, t('hw_ai_banned'))]));
    if (h.steps && h.steps.length) {
      view.appendChild(el('div', { class: 'section-label' }, t('hw_steps')));
      view.appendChild(el('ol', { class: 'card hw-steps' }, h.steps.map(function (x) { return el('li', null, U.tr(x)); })));
    }
    if (h.submit) {
      view.appendChild(el('div', { class: 'section-label' }, t('hw_submit')));
      view.appendChild(el('div', { class: 'card hw-submit' }, [el('span', { html: Icons.get('send') }), el('span', null, U.tr(h.submit))]));
    }
    if (h.links && h.links.length) {
      view.appendChild(el('div', { class: 'section-label' }, t('hw_links')));
      view.appendChild(el('div', { class: 'card hw-links' }, h.links.filter(function (l) { return /^https:\/\//.test(l.url || ''); }).map(function (l) {
        return el('a', { href: l.url, target: '_blank', rel: 'noopener noreferrer' }, U.tr(l.label) || l.url);
      })));
    }
    if (h.original && h.original.text) {
      var orig = el('details', { class: 'card hw-orig' }, [
        el('summary', null, t('hw_original')),
        el('div', { class: 'hw-orig__text', dir: h.original.lang === 'he' ? 'rtl' : 'auto', lang: h.original.lang || 'he' }, h.original.text)
      ]);
      view.appendChild(orig);
    }
    view.appendChild(aiBox(h));
  }

  window.Homework = { list: list, left: left, sorted: sorted, buildPrompt: buildPrompt, aiMode: aiMode };

  function register() {
    if (window.App && App.registerRoute && !register.done) {
      register.done = true;
      App.registerRoute('/homework', listRoute);
      App.registerRoute('/homework/:id', pageRoute);
    }
  }
  register();
  if (!register.done) document.addEventListener('DOMContentLoaded', register);
})();
