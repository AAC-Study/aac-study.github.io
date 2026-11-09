/* =====================================================================
   «Пройти урок как игру» — тестовая страница, отдельно от сайта.
   Без входа и без базы. Прогресс хранится только в этом браузере.

   Игра урока: window.PLAY['<lesson id>'] = { lesson, levels: [ { name, stages: [stage…] } ] }
   stage.type:
     learn  – { title, text, code?[], why? }                       чтение, кнопка «Понятно»
     quiz   – { q, code?[], options:[{ t, ok?, why }], why }        выбрать ответ
     input  – { q, code?[], answer:[…] | set:[…], hints:[…], solution:[…], why }
     order  – { q, lines:[…в правильном порядке], why }            собрать строки по порядку
     sort   – { q, buckets:[…], cards:[{ t, b }], why }            разложить карточки
     widget – { q, widget:'bits'|'binadd'|'trace'|'sqlrows'|'grid'|'quad', …, why }
   В тексте: `код` → моноширинный, **жирный**.
   ===================================================================== */
(function () {
  'use strict';
  var PLAY = window.PLAY = window.PLAY || {};
  var W = window.PlayWidgets = window.PlayWidgets || {};
  var app;

  /* ---------- мелочи ---------- */
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (attrs[k] == null) continue;
      if (k === 'class') n.className = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k.indexOf('on') === 0) n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c != null) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function rich(s) {
    return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
  }
  function store(k, v) {
    try { if (v === undefined) return JSON.parse(localStorage.getItem('play:' + k) || 'null'); localStorage.setItem('play:' + k, JSON.stringify(v)); } catch (e) { return null; }
  }
  function norm(s) {
    return String(s == null ? '' : s).toLowerCase()
      .replace(/[−–—]/g, '-').replace(/[’‘]/g, "'").replace(/[“”]/g, '"')
      .replace(/\s+/g, ' ').replace(/\s*([(),;=<>*+\/])\s*/g, '$1').replace(/;$/, '').trim();
  }
  function numNorm(s) { var t = norm(s).replace(',', '.'); return /^-?\d+(\.\d+)?$/.test(t) ? String(parseFloat(t)) : t; }
  function codeBlock(lines, hl) {
    var pre = el('div', { class: 'code' });
    lines.forEach(function (ln, i) {
      var span = el('span', { class: hl && hl.indexOf(i) >= 0 ? 'hl' : null, text: ln });
      pre.appendChild(span); if (i < lines.length - 1) pre.appendChild(document.createTextNode('\n'));
    });
    return pre;
  }
  function subj(id) { return (window.SUBJECTS || []).filter(function (s) { return s.id === id; })[0] || { name: { ru: id }, hue: 250 }; }
  function lessonMeta(id) { return (window.LESSON_INDEX || window.LESSONS_INDEX || []).filter ? null : null; }
  function flatStages(g) { var out = []; g.levels.forEach(function (lv, li) { lv.stages.forEach(function (s) { out.push({ s: s, li: li }); }); }); return out; }
  function scorable(s) { return s.type !== 'learn'; }

  /* ---------- нижняя панель ---------- */
  var dock = { box: null, t: null, d: null, btns: null };
  function makeDock() {
    dock.t = el('div', { class: 'fb__t' }); dock.d = el('div', { class: 'fb__d' });
    dock.btns = el('div', { class: 'btns' });
    dock.box = el('div', { class: 'dock' }, [el('div', { class: 'dock__in' }, [el('div', { class: 'fb' }, [dock.t, dock.d]), dock.btns])]);
    document.body.appendChild(dock.box);
  }
  function setDock(state, title, detail, buttons) {
    dock.box.className = 'dock' + (state ? ' ' + state : '');
    dock.t.textContent = title || '';
    dock.d.innerHTML = '';
    if (detail) {
      if (detail.nodeType) dock.d.appendChild(detail); else dock.d.innerHTML = rich(detail);
    }
    dock.btns.innerHTML = '';
    buttons.forEach(function (b) {
      var btn = el('button', { type: 'button', class: 'btn' + (b.ghost ? ' btn--ghost' : ''), text: b.label, onclick: b.on });
      if (b.disabled) btn.disabled = true;
      b.el = btn; dock.btns.appendChild(btn);
    });
    return buttons;
  }

  /* ---------- список уроков ---------- */
  function home() {
    if (dock.box) dock.box.style.display = 'none';
    app.innerHTML = '';
    app.appendChild(el('header', { class: 'home__head' }, [
      el('span', { class: 'tag', text: 'Тест · отдельно от сайта' }),
      el('h1', { text: 'Пройти урок как игру' }),
      el('p', { text: 'Последний урок каждого предмета. Читаешь коротко, сам нажимаешь и вводишь, сразу видишь, верно или нет и почему.' })
    ]));
    var list = el('div', { class: 'lcards' });
    Object.keys(PLAY).forEach(function (id) {
      var g = PLAY[id], s = subj(g.subject), all = flatStages(g), st = store('st:' + id) || {};
      var done = st.done ? all.length : (st.i || 0), pct = Math.round(done / all.length * 100);
      var ico = el('div', { class: 'lcard__ico', text: g.badge || s.name.ru.slice(0, 1) });
      ico.style.background = 'linear-gradient(135deg, hsl(' + s.hue + ' 70% 58%), hsl(' + ((s.hue + 40) % 360) + ' 65% 50%))';
      list.appendChild(el('button', { type: 'button', class: 'lcard', onclick: function () { start(id); } }, [
        ico,
        el('div', { class: 'lcard__body' }, [
          el('div', { class: 'lcard__sub', text: s.name.ru + ' · ' + g.date }),
          el('div', { class: 'lcard__title', text: g.title }),
          el('div', { class: 'lcard__bar', html: '<i style="width:' + pct + '%"></i>' }),
          el('div', { class: 'lcard__meta', text: st.done ? '✓ Пройден · ★ ' + (st.stars || 0) + ' из ' + all.filter(function (x) { return scorable(x.s); }).length : (done ? 'Продолжить с шага ' + (done + 1) + ' из ' + all.length : g.levels.length + ' этапов · ' + all.length + ' шагов') })
        ])
      ]));
    });
    app.appendChild(list);
    window.scrollTo(0, 0);
  }

  /* ---------- игра ---------- */
  var G = null;
  function start(id) {
    var g = PLAY[id], st = store('st:' + id) || {};
    if (st.done) st = {};
    G = { id: id, g: g, all: flatStages(g), i: st.i || 0, stars: st.stars || 0, missed: st.missed || [] };
    if (location.hash !== '#' + id) history.pushState(null, '', '#' + id);
    if (dock.box) dock.box.style.display = '';
    render();
  }
  function save() { store('st:' + G.id, { i: G.i, stars: G.stars, missed: G.missed }); }

  function topBar() {
    var bar = el('div', { class: 'bar' });
    var cur = G.all[G.i] ? G.all[G.i].li : G.g.levels.length;
    G.g.levels.forEach(function (lv, li) {
      var inLv = G.all.filter(function (x) { return x.li === li; }).length;
      var before = G.all.filter(function (x, k) { return x.li === li && k < G.i; }).length;
      var seg = el('div', { class: 'bar__seg' + (li < cur ? ' done' : '') }, [el('i')]);
      seg.firstChild.style.width = (li < cur ? 100 : li === cur ? Math.round(before / inLv * 100) : 0) + '%';
      bar.appendChild(seg);
    });
    return el('div', { class: 'top' }, [
      el('button', { type: 'button', class: 'x', 'aria-label': 'К списку уроков', text: '✕', onclick: function () { history.pushState(null, '', location.pathname); home(); } }),
      bar,
      el('div', { class: 'stars', text: '★ ' + G.stars })
    ]);
  }

  function render() {
    app.innerHTML = '';
    if (G.i >= G.all.length) return finish();
    var cur = G.all[G.i], s = cur.s, lv = G.g.levels[cur.li];
    app.appendChild(topBar());
    app.appendChild(el('div', { class: 'level', text: 'Этап ' + (cur.li + 1) + ' из ' + G.g.levels.length + ' · ' + lv.name }));
    var card = el('section', { class: 'card' });
    app.appendChild(card);
    (TYPES[s.type] || TYPES.learn)(card, s);
    window.scrollTo(0, 0);
  }
  function next() { G.i++; save(); render(); }

  /* Итог шага: ok/bad, звезда только с первой попытки */
  function result(s, ok, detail, firstTry) {
    if (ok) {
      if (firstTry && !s._starred) { G.stars++; s._starred = true; }
      if (!firstTry && G.missed.indexOf(s.title || s.q) < 0) G.missed.push(s.title || s.q);
      var top = app.querySelector('.stars'); if (top) top.textContent = '★ ' + G.stars;
      setDock('ok', firstTry ? 'Верно! ★' : 'Верно!', detail || s.why || '', [{ label: 'Дальше', on: next }]);
    }
  }
  function wrong(text, retry, extra) {
    var b = [{ label: 'Ещё раз', on: retry }];
    if (extra) b.unshift(extra);
    setDock('bad', 'Не совсем', text, b);
  }

  var TYPES = {
    learn: function (card, s) {
      card.appendChild(el('div', { class: 'kicker', text: 'Объяснение' }));
      if (s.title) card.appendChild(el('h2', { text: s.title }));
      if (s.text) card.appendChild(el('p', { html: rich(s.text) }));
      if (s.code) card.appendChild(codeBlock(s.code, s.hl));
      if (s.after) card.appendChild(el('p', { html: rich(s.after) }));
      if (s.why) card.appendChild(el('details', { class: 'why' }, [el('summary', { text: 'Почему так?' }), el('div', { html: rich(s.why) })]));
      setDock('', '', '', [{ label: 'Понятно →', on: next }]);
    },

    quiz: function (card, s) {
      card.appendChild(el('div', { class: 'kicker kicker--q', text: 'Вопрос' }));
      card.appendChild(el('div', { class: 'q', html: rich(s.q) }));
      if (s.code) card.appendChild(codeBlock(s.code, s.hl));
      var box = el('div', { class: 'opts' }), pick = -1, tries = 0;
      var order = s.options.map(function (o, i) { return i; });
      if (s.shuffle !== false) order.sort(function () { return Math.random() - .5; });
      var btns = [];
      order.forEach(function (oi) {
        var o = s.options[oi];
        var b = el('button', { type: 'button', class: 'opt', 'aria-pressed': 'false', html: rich(o.t), onclick: function () {
          if (b.disabled) return;
          btns.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
          b.setAttribute('aria-pressed', 'true'); pick = oi; d[0].el.disabled = false;
        } });
        btns[oi] = b; box.appendChild(b);
      });
      card.appendChild(box);
      var d = setDock('', '', '', [{ label: 'Проверить', disabled: true, on: check }]);
      function check() {
        if (pick < 0) return;
        var o = s.options[pick]; tries++;
        if (o.ok) {
          btns[pick].classList.add('ok'); btns.forEach(function (x) { x.disabled = true; });
          result(s, true, o.why || s.why, tries === 1);
        } else {
          btns[pick].classList.add('bad'); btns[pick].disabled = true; btns[pick].setAttribute('aria-pressed', 'false');
          var was = pick; pick = -1;
          wrong(o.why || 'Подумай ещё раз.', function () { d = setDock('', '', '', [{ label: 'Проверить', disabled: true, on: check }]); });
        }
      }
    },

    input: function (card, s) {
      card.appendChild(el('div', { class: 'kicker kicker--q', text: 'Сам' }));
      card.appendChild(el('div', { class: 'q', html: rich(s.q) }));
      if (s.code) card.appendChild(codeBlock(s.code, s.hl));
      var f = el('input', { class: 'field', type: 'text', inputmode: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: s.placeholder || 'Твой ответ' });
      card.appendChild(f);
      var tries = 0;
      var d = setDock('', '', '', [{ label: 'Проверить', disabled: true, on: check }]);
      f.addEventListener('input', function () { f.classList.remove('bad'); d[0].el && (d[0].el.disabled = !f.value.trim()); });
      f.addEventListener('keydown', function (e) { if (e.key === 'Enter' && f.value.trim()) check(); });
      setTimeout(function () { try { f.focus({ preventScroll: true }); } catch (e) {} }, 300);
      function ok(v) {
        if (s.set) {
          var parts = norm(v).split(/[,;\s]+|\bи\b/).filter(Boolean).map(numNorm).sort();
          var want = s.set.map(numNorm).sort();
          return parts.length === want.length && parts.every(function (p, i) { return p === want[i]; });
        }
        var nv = numNorm(v);
        return s.answer.some(function (a) { return numNorm(a) === nv; });
      }
      function check() {
        if (!f.value.trim()) return;
        tries++;
        if (ok(f.value)) {
          f.classList.add('ok'); f.readOnly = true;
          result(s, true, s.why, tries === 1);
        } else {
          f.classList.add('bad'); f.classList.remove('shake'); void f.offsetWidth; f.classList.add('shake');
          var hint = (s.hints || [])[Math.min(tries, (s.hints || []).length) - 1] || 'Проверь ещё раз.';
          var extra = tries >= 2 && s.solution ? { label: 'Решение', ghost: true, on: showSol } : null;
          wrong('Подсказка: ' + hint, function () { d = setDock('', '', '', [{ label: 'Проверить', on: check }]); f.focus(); }, extra);
        }
      }
      function showSol() {
        if (G.missed.indexOf(s.q) < 0) G.missed.push(s.q);
        var box = el('div'); box.appendChild(codeBlock(s.solution));
        f.value = s.set ? s.set.join(', ') : s.answer[0]; f.classList.remove('bad'); f.readOnly = true;
        setDock('info', 'Решение', box, [{ label: 'Дальше', on: next }]);
        dock.box.className = 'dock info';
      }
    },

    order: function (card, s) {
      card.appendChild(el('div', { class: 'kicker kicker--q', text: 'Собери по порядку' }));
      card.appendChild(el('div', { class: 'q', html: rich(s.q) }));
      var built = el('div', { class: 'built' }), pool = el('div', { class: 'pool' });
      card.appendChild(built); card.appendChild(pool);
      var idx = s.lines.map(function (l, i) { return i; });
      do { idx.sort(function () { return Math.random() - .5; }); } while (idx.every(function (v, i) { return v === i; }) && idx.length > 1);
      var tries = 0, chips = [];
      idx.forEach(function (li) {
        var c = el('button', { type: 'button', class: 'chip' + (s.text ? ' txt' : ''), text: s.lines[li] });
        c._li = li;
        c.addEventListener('click', function () {
          (c.parentNode === pool ? built : pool).appendChild(c);
          built.querySelectorAll('.chip').forEach(function (x) { x.classList.remove('bad', 'ok'); });
          d[0].el.disabled = pool.children.length > 0;
        });
        chips.push(c); pool.appendChild(c);
      });
      var d = setDock('', '', '', [{ label: 'Проверить', disabled: true, on: check }]);
      function check() {
        tries++;
        var got = [].map.call(built.children, function (c) { return c; });
        var allOk = true;
        got.forEach(function (c, i) {
          var good = s.lines[i] === c.textContent;   // одинаковые строки взаимозаменяемы
          c.classList.add(good ? 'ok' : 'bad'); if (!good) allOk = false;
        });
        if (allOk) { chips.forEach(function (c) { c.disabled = true; }); result(s, true, s.why, tries === 1); }
        else wrong(s.hint || 'Красные строки стоят не на своём месте. Нажми на строку, чтобы вернуть её вниз.', function () { d = setDock('', '', '', [{ label: 'Проверить', on: check }]); });
      }
    },

    sort: function (card, s) {
      card.appendChild(el('div', { class: 'kicker kicker--q', text: 'Разложи' }));
      card.appendChild(el('div', { class: 'q', html: rich(s.q) }));
      card.appendChild(el('p', { class: 'w-note', text: 'Нажми на карточку, потом на группу.' }));
      var pool = el('div', { class: 'pool' }), sel = null, tries = 0, cards = [];
      var order = s.cards.map(function (c, i) { return i; }).sort(function () { return Math.random() - .5; });
      order.forEach(function (ci) {
        var c = el('button', { type: 'button', class: 'chip txt', 'aria-pressed': 'false', text: s.cards[ci].t });
        c._b = s.cards[ci].b;
        c.addEventListener('click', function () {
          if (sel && sel !== c && c.parentNode !== pool) return;   // нажали на группу (на карточку в ней) — переносит обработчик группы
          cards.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
          if (sel === c) { sel = null; return; }
          sel = c; c.setAttribute('aria-pressed', 'true');
        });
        cards.push(c); pool.appendChild(c);
      });
      card.appendChild(pool);
      var grid = el('div', { class: 'buckets' }), bks = [];
      s.buckets.forEach(function (name, bi) {
        var b = el('div', { class: 'bucket', role: 'button', tabindex: '0' }, [el('div', { class: 'bucket__name', text: name })]);
        b._bi = bi;
        b.addEventListener('click', function (e) {
          if (!sel || sel.parentNode === b) return;
          sel.setAttribute('aria-pressed', 'false'); sel.classList.remove('bad');
          b.appendChild(sel); sel = null;
          d[0].el.disabled = pool.children.length > 0;
        });
        bks.push(b); grid.appendChild(b);
      });
      card.appendChild(grid);
      var d = setDock('', '', '', [{ label: 'Проверить', disabled: true, on: check }]);
      function check() {
        tries++; var allOk = true, why = [];
        bks.forEach(function (b) {
          [].forEach.call(b.querySelectorAll('.chip'), function (c) {
            var good = c._b === b._bi; c.classList.toggle('ok', good); c.classList.toggle('bad', !good);
            if (!good) { allOk = false; pool.appendChild(c); }
          });
        });
        if (allOk) { cards.forEach(function (c) { c.disabled = true; }); result(s, true, s.why, tries === 1); }
        else wrong(s.hint || 'Неверные карточки вернулись наверх. Разложи их ещё раз.', function () { d = setDock('', '', '', [{ label: 'Проверить', disabled: pool.children.length > 0, on: check }]); });
      }
    },

    widget: function (card, s) {
      card.appendChild(el('div', { class: 'kicker kicker--q', text: s.kicker || 'Попробуй сам' }));
      if (s.title) card.appendChild(el('h2', { text: s.title }));
      card.appendChild(el('div', { class: 'q', html: rich(s.q) }));
      if (s.code) card.appendChild(codeBlock(s.code, s.hl));
      var host = el('div', { class: 'w' }); card.appendChild(host);
      var tries = 0, d;
      var api = {
        el: el, rich: rich, codeBlock: codeBlock,
        ready: function (on) { if (d && d[0].el) d[0].el.disabled = !on; },
        wrong: function (text) { tries++; wrong(text, function () { d = setDock('', '', '', [{ label: 'Проверить', on: w.check }]); }); },
        right: function (text) { tries++; result(s, true, text || s.why, tries === 1); },
        info: function (text) { /* подсказка, не попытка */ }
      };
      var w = W[s.widget](host, s, api);
      d = setDock('', '', '', [{ label: 'Проверить', disabled: !w.readyAtStart, on: w.check }]);
    }
  };

  /* ---------- финал ---------- */
  function finish() {
    var all = G.all.filter(function (x) { return scorable(x.s); }).length;
    store('st:' + G.id, { done: true, stars: G.stars, missed: G.missed });
    app.innerHTML = '';
    var box = el('section', { class: 'end' }, [
      el('div', { class: 'end__big', text: '✓' }),
      el('h2', { text: 'Урок пройден!' }),
      el('p', { text: G.g.title }),
      el('div', { class: 'end__stars', text: '★ ' + G.stars + ' / ' + all }),
      el('p', { text: G.stars === all ? 'Всё с первой попытки. Отлично!' : 'Звезда даётся, если верно с первой попытки.' })
    ]);
    if (G.missed.length) {
      box.appendChild(el('p', { html: '<b>Стоит повторить:</b>' }));
      var ul = el('ul', { class: 'end__list' });
      G.missed.forEach(function (m) { ul.appendChild(el('li', { html: rich(m) })); });
      box.appendChild(ul);
    }
    box.appendChild(el('div', { class: 'btns' }, [
      el('button', { type: 'button', class: 'btn', text: 'Пройти заново', onclick: function () { store('st:' + G.id, {}); start(G.id); } }),
      el('a', { class: 'btn btn--ghost', href: '../#/lesson/' + G.id, text: 'Открыть урок на сайте' }),
      el('button', { type: 'button', class: 'btn btn--ghost', text: 'К списку уроков', onclick: function () { history.pushState(null, '', location.pathname); home(); } })
    ]));
    app.appendChild(box);
    dock.box.style.display = 'none';
    window.scrollTo(0, 0);
  }

  function route() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (id && PLAY[id]) start(id); else home();
  }
  document.addEventListener('DOMContentLoaded', function () {
    app = document.getElementById('app');
    makeDock();
    route();
    window.addEventListener('popstate', route);
  });
})();
