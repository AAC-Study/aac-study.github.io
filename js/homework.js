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
      hw_links: 'קישורים', hw_ai: 'פרומפט ל־AI: עזרה צעד אחר צעד',
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
      hw_links: 'Ссылки', hw_ai: 'Промпт для ИИ: помощь по шагам',
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
      hw_links: 'Links', hw_ai: 'AI prompt: step-by-step help',
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
  function buildPrompt(h, replyLang) {
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
      '6. At the end, help me get ready to present my work to the teacher: ask me 3-5 questions the teacher may ask about it, and check that I can explain every part in my own words.'
    ];
    if (h.selfPrompt) lines.push('7. The teacher asked us to write a prompt ourselves. Do not write it for me: ask me questions, help me improve my own draft, and explain what makes a prompt good.');
    if (h.aiRule === 'banned') lines.push('', 'Note: the teacher does not allow AI-written work in this course. Never write the solution or code for me; only explain, give hints and check my own work.');
    lines = lines.concat([''], Tasks.ASK_FIRST, ['', Tasks.replyLine(replyLang)]);
    return lines.join('\n');
  }

  function aiBox(h) {
    var box = el('details', { class: 'card hw-ai' });
    var sum = el('summary', { class: 'hw-ai__head' }, [el('span', { class: 'hw-ai__icon', html: Icons.get('robot') }), el('span', null, t('hw_ai')), el('span', { class: 'hw-ai__chev', html: Icons.get('chevronDown') })]);
    box.appendChild(sum);
    var area = el('textarea', { class: 'input tk-prompt', readonly: true, rows: 12, dir: 'ltr', 'aria-label': t('hw_ai') });
    function refresh() { area.value = buildPrompt(h, Tasks.aiLang()); }
    var copy = el('button', { type: 'button', class: 'btn btn--primary', html: Icons.get('copy') + '<span>' + U.esc(t('tk_copy')) + '</span>' });
    copy.addEventListener('click', function () {
      refresh();
      var done = function () { U.toast(t('tk_copied')); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(area.value).then(done, function () { area.focus(); area.select(); });
      else { area.focus(); area.select(); try { document.execCommand('copy'); done(); } catch (e) { /* */ } }
    });
    var inner = el('div', { class: 'hw-ai__body' }, [
      el('p', { class: 'tk-note' }, t('hw_ai_lead')),
      Tasks.aiLangSwitch(refresh),
      el('p', { class: 'tk-note ai-warn' }, t('hw_ai_warn')),
      h.aiRule === 'banned' ? el('p', { class: 'tk-note ai-warn' }, t('hw_ai_banned')) : null,
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

  window.Homework = { list: list, left: left, sorted: sorted, buildPrompt: buildPrompt };

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
