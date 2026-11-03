/* Определение «урок прочитан».
   ReadingTracker.start(rootEl, onDone, opts?) → stop()   (у stop есть stop.state() для отладки/тестов)

   Как считается (по образцу «engaged time» Chartbeat):
   1. Вовлечённое время. Любое действие (scroll, mousemove, mousedown, keydown, touchstart, touchmove, wheel, focus)
      делает пользователя «активным» на следующие 5 секунд (не суммируется: новое действие просто продлевает окно).
      Часы стоят, если вкладка скрыта (document.hidden) или окно не в фокусе (blur).
   2. Секции. Каждый элемент [data-read-section] должен быть виден хотя бы на 40% (от своей высоты, а если секция
      выше экрана — от высоты экрана) в течение минимального времени, пропорционального числу слов
      (25% от времени чтения при 200 слов/мин, от 1 до 15 секунд). Время идёт только пока пользователь активен.
      Видимость — через IntersectionObserver; если его нет — проверка позиций при каждом тике.
   3. Конец. Элемент [data-read-end] должен хотя бы раз появиться на экране.
   Прочитано = конец достигнут И все секции просмотрены И вовлечённое время ≥ 50% ожидаемого
   (слова / 200 в минуту, минимум 30 с). Прокручивать вверх-вниз можно сколько угодно.
   opts.paused() → true приостанавливает часы (окно задачи поверх урока).
   Состояние хранится в памяти по opts.key, чтобы перерисовка страницы (смена языка) не сбрасывала прогресс.
   opts.saved — прогресс, сохранённый раньше (после перезагрузки страницы); opts.onSave(state) — куда сохранять. */
(function () {
  'use strict';

  var DEFAULTS = {
    wpm: 200, minExpectedSec: 30, engagedRatio: 0.5, idleMs: 5000, tickMs: 500,
    visibleRatio: 0.4, sectionFactor: 0.25, sectionMinMs: 1000, sectionMaxMs: 15000,
    sectionSelector: '[data-read-section]', endSelector: '[data-read-end]'
  };
  var ACTIVITY = ['scroll', 'mousemove', 'mousedown', 'keydown', 'touchstart', 'touchmove', 'wheel', 'focus'];
  var states = {};

  function now() { return Date.now(); }
  function words(node) {
    // «Почему так?» (.ls-why) — по желанию, свёрнуто: в обязательное время чтения не входит
    var txt = node.textContent || '';
    if (node.querySelectorAll) {
      var w = node.querySelectorAll('.ls-why');
      for (var i = 0; i < w.length; i++) txt = txt.replace(w[i].textContent, ' ');
    }
    txt = txt.replace(/\s+/g, ' ').trim();
    return txt ? txt.split(' ').length : 0;
  }
  function viewportH() { return window.innerHeight || document.documentElement.clientHeight || 0; }

  /* Доля видимости: пересечение с экраном / min(высота секции, высота экрана). */
  function visibleFraction(node) {
    var r = node.getBoundingClientRect();
    var vh = viewportH();
    if (!r.height || !vh) return 0;
    var top = Math.max(r.top, 0), bottom = Math.min(r.bottom, vh);
    var inter = Math.max(0, bottom - top);
    return inter / Math.min(r.height, vh);
  }

  /* берём больший прогресс из двух (этот браузер и другое устройство) */
  function merge(S, x) {
    if (!x || typeof x !== 'object') return S;
    if (typeof x.engagedMs === 'number' && x.engagedMs > S.engagedMs) S.engagedMs = x.engagedMs;
    if (x.endReached) S.endReached = true;
    if (x.seen && typeof x.seen === 'object') Object.keys(x.seen).forEach(function (id) {
      var v = Number(x.seen[id]) || 0;
      if (!(S.seen[id] >= v)) S.seen[id] = v;
    });
    return S;
  }

  function start(root, onDone, opts) {
    var o = {};
    Object.keys(DEFAULTS).forEach(function (k) { o[k] = DEFAULTS[k]; });
    if (opts) Object.keys(opts).forEach(function (k) { o[k] = opts[k]; });

    var key = o.key || 'default';
    var S = states[key];
    if (!S) {
      S = states[key] = { engagedMs: 0, seen: {}, endReached: false, done: false };
      merge(S, o.saved);              // прогресс, сохранённый до перезагрузки страницы
    }
    var lastSaved = '';
    function save(force) {
      if (!o.onSave) return;
      var snap = { engagedMs: Math.round(S.engagedMs), seen: S.seen, endReached: S.endReached };
      var j = JSON.stringify(snap);
      if (j === lastSaved) return;
      var t = now();
      if (!force && t - (save.at || 0) < 2000) return;   // не чаще раза в 2 секунды
      save.at = t; lastSaved = j;
      snap.at = t;
      try { o.onSave(snap); } catch (e) { /* */ }
    }

    var sections = Array.prototype.slice.call(root.querySelectorAll(o.sectionSelector));
    var endEl = root.querySelector(o.endSelector);
    var info = sections.map(function (node, i) {
      var id = node.getAttribute('data-read-section') || ('s' + i);
      var wc = words(node);
      var need = Math.min(o.sectionMaxMs, Math.max(o.sectionMinMs, wc / o.wpm * 60000 * o.sectionFactor));
      if (S.seen[id] == null) S.seen[id] = 0;
      return { node: node, id: id, words: wc, needMs: need, near: !window.IntersectionObserver };
    });
    var totalWords = info.reduce(function (s, x) { return s + x.words; }, 0);
    var expectedMs = Math.max(o.minExpectedSec * 1000, totalWords / o.wpm * 60000);
    var needEngagedMs = expectedMs * o.engagedRatio;

    var lastActivity = now();          // открытие страницы — тоже действие
    var focused = document.hasFocus ? document.hasFocus() : true;
    var lastTick = now();
    var stopped = false;
    var timer = null, io = null, ioEnd = null;
    var off = [];
    function on(target, type, fn, opt) { target.addEventListener(type, fn, opt); off.push(function () { target.removeEventListener(type, fn, opt); }); }

    function activity() { lastActivity = now(); focused = true; }
    var passive = { passive: true, capture: true };
    ACTIVITY.forEach(function (ev) { on(ev === 'focus' ? window : document, ev, activity, passive); });
    on(window, 'blur', function () { focused = false; });
    on(window, 'focus', function () { focused = true; lastActivity = now(); });
    on(document, 'visibilitychange', function () { if (!document.hidden) lastActivity = now(); });

    if (window.IntersectionObserver) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          for (var i = 0; i < info.length; i++) if (info[i].node === e.target) info[i].near = e.isIntersecting;
        });
      }, { threshold: [0, 0.01] });
      info.forEach(function (x) { io.observe(x.node); });
      if (endEl) {
        ioEnd = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) { if (e.isIntersecting) S.endReached = true; });
        }, { threshold: 0 });
        ioEnd.observe(endEl);
      }
    }

    function engagedNow(t) {
      if (o.paused && o.paused()) return false;      // например, открыто окно задачи поверх урока
      return !document.hidden && focused && (t - lastActivity) < o.idleMs;
    }

    function progress() {
      var secDone = info.filter(function (x) { return S.seen[x.id] >= x.needMs; }).length;
      var secPart = info.length ? secDone / info.length : 1;
      var timePart = Math.min(1, S.engagedMs / needEngagedMs);
      return Math.min(S.endReached ? 1 : 0.95, (secPart + timePart) / 2);
    }

    function tick() {
      if (stopped) return;
      var t = now();
      var dt = Math.min(t - lastTick, o.tickMs * 2);   // после сна вкладки — не прибавлять лишнее
      lastTick = t;
      if (dt < 0) dt = 0;
      if (!window.IntersectionObserver && endEl && !S.endReached) {
        if (endEl.getBoundingClientRect().top < viewportH()) S.endReached = true;
      }
      if (engagedNow(t)) {
        S.engagedMs += dt;
        info.forEach(function (x) {
          if (!x.near) return;
          if (visibleFraction(x.node) >= o.visibleRatio) S.seen[x.id] += dt;
        });
      }
      if (o.onProgress) o.onProgress(progress());
      save(false);
      if (!S.done && S.endReached && S.engagedMs >= needEngagedMs &&
          info.every(function (x) { return S.seen[x.id] >= x.needMs; })) {
        S.done = true;
        if (onDone) onDone();
        stop();
      }
    }

    function stop() {
      if (stopped) return;
      stopped = true;
      save(true);
      if (timer) clearInterval(timer);
      if (io) io.disconnect();
      if (ioEnd) ioEnd.disconnect();
      off.forEach(function (f) { f(); });
    }
    stop.state = function () {
      return {
        engagedMs: S.engagedMs, needEngagedMs: needEngagedMs, expectedMs: expectedMs, totalWords: totalWords,
        endReached: S.endReached, done: S.done, progress: progress(),
        sections: info.map(function (x) { return { id: x.id, words: x.words, seenMs: S.seen[x.id], needMs: x.needMs }; })
      };
    };

    /* прогресс с другого устройства пришёл позже: добавляем */
    stop.merge = function (x) { merge(S, x); if (o.onProgress && !stopped) o.onProgress(progress()); };
    if (S.done) { stop(); if (onDone) onDone(); return stop; }
    timer = setInterval(tick, o.tickMs);
    if (o.onProgress) o.onProgress(progress());     // сохранённый прогресс видно сразу
    return stop;
  }

  window.ReadingTracker = { start: start, DEFAULTS: DEFAULTS, _states: states };
})();
