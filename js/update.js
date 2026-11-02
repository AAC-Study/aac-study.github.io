/* «Сайт обновился»: раз в 3 минуты и при возврате на вкладку сверяем version.json.
   Если версия новая — показываем плашку. Ничего не пропадает: уровень и очки в базе,
   черновики задач и место в уроке хранятся в браузере. */
(function () {
  'use strict';
  if (window.I18N) I18N.add({
    he: { upd_text: 'האתר עודכן. אפשר לרענן — שום דבר לא ילך לאיבוד.', upd_now: 'לרענן', upd_later: 'אחר כך' },
    ru: { upd_text: 'Сайт обновился. Можно обновить страницу — ничего не пропадёт.', upd_now: 'Обновить', upd_later: 'Позже' },
    en: { upd_text: 'The site was updated. Refresh — nothing will be lost.', upd_now: 'Refresh', upd_later: 'Later' }
  });
  var base = null, shown = false, snoozeUntil = 0;
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
        U.el('button', { type: 'button', class: 'btn btn--primary', onclick: function () { location.reload(); } }, t('upd_now'))
      ])
    ]);
    document.body.appendChild(bar);
  }
  check();
  setInterval(function () { if (!document.hidden) check(); }, 3 * 60e3);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) check(); });
})();
