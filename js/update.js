/* «Сайт обновился»: раз в 3 минуты и при возврате на вкладку сверяем version.json.
   Если версия новая — показываем плашку. Ничего не пропадает: уровень и очки в базе,
   черновики задач и место в уроке хранятся в браузере.
   Файлы сайта лежат в кэше устройства (sw.js), поэтому открытая версия — та, что в <meta name="app-version">. */
(function () {
  'use strict';
  if (window.I18N) I18N.add({
    he: { upd_text: 'האתר עודכן. אפשר לרענן — שום דבר לא ילך לאיבוד.', upd_now: 'לרענן', upd_later: 'אחר כך' },
    ru: { upd_text: 'Сайт обновился. Можно обновить страницу — ничего не пропадёт.', upd_now: 'Обновить', upd_later: 'Позже' },
    en: { upd_text: 'The site was updated. Refresh — nothing will be lost.', upd_now: 'Refresh', upd_later: 'Later' }
  });
  var meta = document.querySelector('meta[name="app-version"]');
  var base = meta ? meta.getAttribute('content') : null, shown = false, snoozeUntil = 0;
  var hasSw = 'serviceWorker' in navigator && location.protocol !== 'file:';
  function check() {
    if (location.protocol === 'file:' || shown || Date.now() < snoozeUntil) return;
    fetch('version.json?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      if (!j || !j.v) return;
      if (base === null) { base = j.v; return; }
      if (j.v !== base) show();
    }).catch(function () { /* нет сети — проверим позже */ });
  }
  function show() {
    if (shown || document.querySelector('.upd')) return;
    shown = true;
    var bar = U.el('div', { class: 'upd', role: 'status' }, [
      U.el('span', { class: 'upd__text' }, t('upd_text')),
      U.el('div', { class: 'upd__btns' }, [
        U.el('button', { type: 'button', class: 'btn btn--ghost', onclick: function () { bar.remove(); shown = false; snoozeUntil = Date.now() + 30 * 60e3; } }, t('upd_later')),
        U.el('button', { type: 'button', class: 'btn btn--primary', onclick: function (ev) { ev.currentTarget.disabled = true; refresh(); } }, t('upd_now'))
      ])
    ]);
    document.body.appendChild(bar);
  }
  /* «Обновить»: просим браузер взять новый sw.js, ждём, пока он положит новые файлы, и перезагружаем (не дольше 8 с) */
  function refresh() {
    var gone = false;
    function go() { if (gone) return; gone = true; location.reload(); }
    setTimeout(go, 8000);
    if (!hasSw) return go();
    navigator.serviceWorker.addEventListener('controllerchange', go);
    navigator.serviceWorker.getRegistration().then(function (r) {
      if (!r) return go();
      return r.update().then(function () {
        var w = r.installing || r.waiting;
        if (!w) return go();
        w.addEventListener('statechange', function () { if (w.state === 'activated' || w.state === 'redundant') go(); });
      });
    }).catch(go);
  }
  /* Регистрируем sw.js при каждом открытии: он хранит файлы сайта на устройстве, и сайт открывается сразу.
     Локально (тесты) — только если тест сам попросил (sw_cache_test), иначе sw.js ничего не кэширует. */
  var touched = false, hadController = hasSw && !!navigator.serviceWorker.controller;
  ['pointerdown', 'keydown'].forEach(function (k) { document.addEventListener(k, function () { touched = true; }, { once: true, capture: true }); });
  if (hasSw) {
    var swUrl = 'sw.js'; try { if (localStorage.getItem('sw_cache_test')) swUrl = 'sw.js?cache=1'; } catch (e) { /* */ }
    window.addEventListener('load', function () { navigator.serviceWorker.register(swUrl).catch(function () {}); });
    /* только что открыли страницу (ещё ничего не нажимали), а новая версия уже готова — тихо перезагружаем один раз */
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (hadController && !touched && !gone2 && performance.now() < 8000) { gone2 = true; location.reload(); }
    });
  }
  var gone2 = false;
  check();
  setInterval(function () { if (!document.hidden) check(); }, 3 * 60e3);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) check(); });
})();
