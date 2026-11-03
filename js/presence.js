/* «В сети / не в сети».
   1) Пока вкладка открыта и на виду, раз в минуту отмечаем себя (sc_seen). Скрытая вкладка ничего не шлёт.
   2) Чужой статус спрашиваем ТОЛЬКО там, где он виден: «Люди», страница человека, личный чат.
      Сразу при открытии, потом раз в 30 секунд, и только пока эта страница открыта и вкладка на виду.
      Обновляется только маленькая надпись, страница не перерисовывается.
   Зависит от: U, I18N, Store. */
(function () {
  'use strict';
  var el = U.el;
  var ONLINE_MS = 2 * 60 * 1000;      // отмечались за последние 2 минуты = в сети
  var PING_MS = 60 * 1000, WATCH_MS = 30 * 1000;
  var cache = {};                       // uid → время (ms) или 0, если не знаем

  I18N.add({
    he: { pr_online: 'מחובר/ת עכשיו', pr_offline: 'לא מחובר/ת', pr_min: 'פעילות אחרונה: לפני {n} דק׳', pr_hour: 'פעילות אחרונה: לפני {n} שע׳', pr_today: 'פעילות אחרונה: היום ב־{t}', pr_day: 'פעילות אחרונה: {d}' },
    ru: { pr_online: 'в сети', pr_offline: 'не в сети', pr_min: 'был(а) в сети {n} мин назад', pr_hour: 'был(а) в сети {n} ч назад', pr_today: 'был(а) в сети сегодня в {t}', pr_day: 'был(а) в сети {d}' },
    en: { pr_online: 'online', pr_offline: 'offline', pr_min: 'last seen {n} min ago', pr_hour: 'last seen {n} h ago', pr_today: 'last seen today at {t}', pr_day: 'last seen {d}' }
  });

  var sb = function () { return Store.mode !== 'mock' && Store.sb; };
  function me() { var u = Store.auth.current(); return u && u.id; }

  /* ---------- 1. себя отмечаем ---------- */
  var lastPing = 0;
  function ping(force) {
    if (!me() || document.visibilityState === 'hidden') return;
    if (!force && Date.now() - lastPing < PING_MS - 2000) return;
    lastPing = Date.now();
    cache[me()] = Date.now();
    if (sb()) Store.sb.rpc('sc_seen', {}).catch(function () { /* нет сети — не страшно */ });
    else { var m = U.storage.get('mock_seen', {}); m[me()] = Date.now(); U.storage.set('mock_seen', m); }
  }
  setInterval(ping, PING_MS);
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') ping(true); });
  if (Store.ready && Store.ready.then) Store.ready.then(function () { setTimeout(function () { ping(true); }, 1500); });

  /* ---------- 2. чужой статус ---------- */
  function fetchSeen(ids) {
    ids = ids.filter(function (x, i) { return x && ids.indexOf(x) === i; }).slice(0, 200);
    if (!ids.length) return Promise.resolve();
    if (!sb()) {
      var m = U.storage.get('mock_seen', {});
      ids.forEach(function (id) { cache[id] = m[id] || 0; });
      return Promise.resolve();
    }
    return Store.sb.rpc('sc_presence', { p_ids: ids }).then(function (rows) {
      var got = {};
      (rows || []).forEach(function (r) { got[r.id] = r.last_seen ? new Date(r.last_seen).getTime() : 0; });
      ids.forEach(function (id) { cache[id] = got[id] || 0; });
    }, function () { /* оставляем, что было */ });
  }

  function label(ts) {
    if (!ts) return { on: false, text: t('pr_offline') };
    var ago = Date.now() - ts;
    if (ago < ONLINE_MS) return { on: true, text: t('pr_online') };
    var min = Math.floor(ago / 60000);
    if (min < 60) return { on: false, text: t('pr_min', { n: min }) };
    if (min < 6 * 60) return { on: false, text: t('pr_hour', { n: Math.floor(min / 60) }) };
    var d = new Date(ts), now = new Date();
    var loc = { he: 'he-IL', ru: 'ru-RU', en: 'en-GB' }[I18N.lang] || 'en-GB';
    if (d.toDateString() === now.toDateString()) return { on: false, text: t('pr_today', { t: d.toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit', hour12: false }) }) };
    return { on: false, text: t('pr_day', { d: d.toLocaleDateString(loc, { day: 'numeric', month: 'short' }) }) };
  }
  function paint(node) {
    var uid = node.getAttribute('data-pres');
    if (!(uid in cache)) return;
    var l = label(cache[uid]);
    node.classList.toggle('pres--on', l.on);
    node.classList.remove('pres--wait');
    var txt = node.querySelector('.pres__t');
    if (txt && txt.textContent !== l.text) txt.textContent = l.text;
  }

  /* новый значок, статус которого ещё не знаем: спросим сразу (одним запросом на всех) */
  var pending = {}, pendTimer = null;
  function askSoon(uid) {
    pending[uid] = true;
    if (pendTimer) return;
    pendTimer = setTimeout(function () {
      var ids = Object.keys(pending); pending = {}; pendTimer = null;
      fetchSeen(ids).then(function () {
        Array.prototype.forEach.call(document.querySelectorAll('[data-pres]'), function (n) { if (ids.indexOf(n.getAttribute('data-pres')) >= 0) paint(n); });
      });
    }, 60);
  }

  /* маленький значок: точка + текст */
  function badge(uid) {
    var n = el('span', { class: 'pres pres--wait', 'data-pres': uid }, [el('span', { class: 'pres__dot', 'aria-hidden': 'true' }), el('span', { class: 'pres__t' })]);
    if (uid in cache) paint(n); else askSoon(uid);
    return n;
  }

  /* следить за всеми значками внутри root, пока root на странице */
  function watch(root) {
    var stopped = false, timer = null;
    function nodes() { return Array.prototype.slice.call(root.querySelectorAll('[data-pres]')); }
    function tick() {
      if (stopped) return;
      if (!root.isConnected) { stop(); return; }
      if (document.visibilityState === 'hidden') return;
      var list = nodes();
      if (!list.length) return;
      fetchSeen(list.map(function (n) { return n.getAttribute('data-pres'); })).then(function () {
        nodes().forEach(paint);   // только надписи
      });
    }
    function onVis() { if (document.visibilityState === 'visible') tick(); }
    function stop() { stopped = true; clearInterval(timer); document.removeEventListener('visibilitychange', onVis); }
    timer = setInterval(tick, WATCH_MS);
    document.addEventListener('visibilitychange', onVis);
    setTimeout(tick, 0);
    return { stop: stop, now: tick };
  }

  window.Presence = { badge: badge, watch: watch, label: label, ping: ping, _cache: cache };
})();
