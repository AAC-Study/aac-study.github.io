/* Черновики задач (рисунок, текст, ответ) на сервере: начал на телефоне — продолжил на компьютере.
   В браузере черновик тоже лежит (работает без интернета), сервер — только для переноса между устройствами.
   Таблица drafts: каждый видит и меняет только свои строки (RLS). В пробном режиме ничего не делает. */
(function () {
  'use strict';
  var MAX = 300000;          // больше ~300 КБ рисунок не отправляем (на сервер уйдут только текст и ответ)
  var timers = {}, pending = {};
  function on() { return window.Store && Store.mode === 'supabase' && Store.sb && Store.auth.current(); }
  function send(key, keep) {
    var data = pending[key]; delete pending[key];
    if (!data || !on()) return Promise.resolve();
    var body = { user_id: Store.auth.current().id, key: String(key).slice(0, 200), data: data, updated_at: new Date(data.at || Date.now()).toISOString() };
    try { if (JSON.stringify(body).length > MAX) body.data = { strokes: [], text: data.text, mode: data.mode, answer: data.answer, at: data.at, big: true }; } catch (e) { return Promise.resolve(); }
    return Store.sb.api('POST', '/rest/v1/drafts?on_conflict=user_id,key', body,
      { headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }, keepalive: !!keep && JSON.stringify(body).length < 60000 }).catch(function () { /* нет сети — останется в браузере */ });
  }
  function flush() { Object.keys(pending).forEach(function (k) { clearTimeout(timers[k]); send(k, true); }); }
  window.DraftSync = {
    /* сохранить (не чаще раза в 1,5 секунды на один черновик) */
    push: function (key, data) {
      if (!on()) return;
      pending[key] = data;
      clearTimeout(timers[key]);
      timers[key] = setTimeout(function () { send(key); }, 1500);
    },
    /* черновик с сервера: {strokes, text, mode, answer, at} или null */
    pull: function (key) {
      if (!on()) return Promise.resolve(null);
      return Store.sb.api('GET', '/rest/v1/drafts?select=data,updated_at&key=eq.' + encodeURIComponent(key))
        .then(function (rows) {
          var r = rows && rows[0];
          if (!r || !r.data) return null;
          var d = r.data; d.at = d.at || Date.parse(r.updated_at) || 0;
          return d;
        }, function () { return null; });
    },
    flush: flush
  };
  /* ушёл со страницы — отправляем то, что ещё ждёт */
  document.addEventListener('visibilitychange', function () { if (document.hidden) flush(); });
  window.addEventListener('pagehide', flush);
})();
