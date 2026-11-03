/* Темы сайта: только задний фон (карточки, меню и текст не трогаем).
   Выбор в «Настройках», хранится на этом устройстве. Все анимации — CSS (transform/opacity), см. css/themes.css.
   «Меньше движения» (в настройках или в системе) — частицы стоят на месте. */
(function () {
  'use strict';
  var el = U.el;

  I18N.add({
    he: { th_title: 'ערכת נושא לאתר', th_hint: 'רק הרקע של האתר משתנה. נשמר במכשיר הזה.',
      th_none: 'רגילה', th_autumn: 'סתיו', th_halloween: 'האלווין', th_autumnween: 'סתיו + האלווין', th_christmas: 'חג המולד',
      th_space: 'חלל', th_ocean: 'מתחת לים', th_sakura: 'סאקורה', th_aurora: 'זוהר צפוני' },
    ru: { th_title: 'Тема сайта', th_hint: 'Меняется только фон сайта. Сохраняется на этом устройстве.',
      th_none: 'Обычная', th_autumn: 'Осень', th_halloween: 'Хэллоуин', th_autumnween: 'Осень + Хэллоуин', th_christmas: 'Рождество',
      th_space: 'Космос', th_ocean: 'Под водой', th_sakura: 'Сакура', th_aurora: 'Северное сияние' },
    en: { th_title: 'Site theme', th_hint: 'Only the site background changes. Saved on this device.',
      th_none: 'Plain', th_autumn: 'Autumn', th_halloween: 'Halloween', th_autumnween: 'Autumn + Halloween', th_christmas: 'Christmas',
      th_space: 'Space', th_ocean: 'Under the sea', th_sakura: 'Sakura', th_aurora: 'Northern lights' }
  });

  /* слои частиц: k — вид движения, n — сколько, e — что рисуем (эмодзи или '' = точка/фигура из CSS) */
  var THEMES = [
    { id: 'none', icon: '◯', layers: [] },
    { id: 'autumn', icon: '🍂', layers: [{ k: 'fall', n: 16, e: ['🍁', '🍂', '🍁', '🍂', '🌰'], size: [18, 34] }] },
    { id: 'halloween', icon: '🎃', layers: [
      { k: 'moon', n: 1, e: [''] },
      { k: 'fly', n: 6, e: ['🦇'], size: [18, 30] },
      { k: 'ghost', n: 3, e: ['👻'], size: [26, 38] },
      { k: 'ground', n: 4, e: ['🎃', '🎃', '🕯️', '🎃'], size: [26, 40] },
      { k: 'web', n: 1, e: ['🕸️'] }
    ] },
    { id: 'autumnween', icon: '🍁', icon2: '🎃', layers: [
      { k: 'fall', n: 11, e: ['🍁', '🍂', '🍁', '🍂'], size: [18, 30] },
      { k: 'fly', n: 3, e: ['🦇'], size: [16, 24] },
      { k: 'ground', n: 3, e: ['🎃', '🌾', '🎃'], size: [24, 36] }
    ] },
    { id: 'christmas', icon: '🎄', layers: [
      { k: 'lights', n: 1, e: [''] },
      { k: 'snow', n: 40, e: [''], size: [3, 8] },
      { k: 'ground', n: 3, e: ['🎄', '🎁', '⛄'], size: [30, 44] }
    ] },
    { id: 'space', icon: '🌌', layers: [
      { k: 'star', n: 46, e: [''], size: [1, 3] },
      { k: 'shoot', n: 2, e: [''] },
      { k: 'planet', n: 1, e: ['🪐'], size: [48, 48] }
    ] },
    { id: 'ocean', icon: '🌊', layers: [
      { k: 'rays', n: 1, e: [''] },
      { k: 'bubble', n: 18, e: [''], size: [6, 22] },
      { k: 'swim', n: 4, e: ['🐠', '🐟', '🐡', '🐠'], size: [22, 32] }
    ] },
    { id: 'sakura', icon: '🌸', layers: [{ k: 'fall', n: 18, e: ['🌸', '🌸', '💮'], size: [14, 24] }] },
    { id: 'aurora', icon: '✨', layers: [{ k: 'aurora', n: 3, e: [''] }, { k: 'star', n: 24, e: [''], size: [1, 2.5] }] }
  ];
  var BY = {}; THEMES.forEach(function (x) { BY[x.id] = x; });

  function rnd(seed) { var s = seed; return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
  function current() { var v = U.storage.get('site_theme', 'none'); return BY[v] ? v : 'none'; }

  var host = null;
  function build(id) {
    var th = BY[id] || BY.none;
    if (!host) {
      host = el('div', { id: 'site-bg', class: 'site-bg', 'aria-hidden': 'true' });
      document.body.insertBefore(host, document.body.firstChild);
    }
    host.innerHTML = '';
    if (id === 'none') { document.documentElement.removeAttribute('data-site-theme'); return; }
    document.documentElement.setAttribute('data-site-theme', id);
    var r = rnd(id.length * 977 + 13);
    var small = window.innerWidth < 600;
    th.layers.forEach(function (L) {
      var n = small && L.n > 6 ? Math.ceil(L.n * 0.6) : L.n;
      for (var i = 0; i < n; i++) {
        var sz = L.size ? L.size[0] + r() * (L.size[1] - L.size[0]) : 0;
        var st = '--x:' + (r() * 100).toFixed(1) + '%;--y:' + (r() * 100).toFixed(1) + '%;--d:' + (10 + r() * 14).toFixed(1) + 's;--dl:-' + (r() * 20).toFixed(1) + 's;' +
          '--sw:' + ((r() - 0.5) * 160).toFixed(0) + 'px;--rot:' + ((r() - 0.5) * 900).toFixed(0) + 'deg;--o:' + (0.55 + r() * 0.45).toFixed(2) + ';' +
          (sz ? '--sz:' + sz.toFixed(1) + 'px;' : '') + '--i:' + i + ';';
        host.appendChild(el('span', { class: 'sp sp--' + L.k, style: st }, L.e[i % L.e.length]));
      }
    });
  }

  function set(id) { U.storage.set('site_theme', BY[id] ? id : 'none'); build(current()); }

  /* выбор в настройках: плитки с превью */
  function picker() {
    var now = current();
    var grid = el('div', { class: 'th-pick', role: 'radiogroup', 'aria-label': t('th_title') });
    THEMES.forEach(function (th) {
      var b = el('button', { type: 'button', class: 'th-opt th-opt--' + th.id, role: 'radio', 'aria-checked': th.id === now ? 'true' : 'false', 'data-theme-id': th.id }, [
        el('span', { class: 'th-opt__prev' }, [el('span', { class: 'th-opt__ic' }, th.icon), th.icon2 ? el('span', { class: 'th-opt__ic th-opt__ic--2' }, th.icon2) : null]),
        el('span', { class: 'th-opt__name' }, t('th_' + th.id))
      ]);
      b.addEventListener('click', function () {
        set(th.id);
        U.$$('.th-opt', grid).forEach(function (x) { x.setAttribute('aria-checked', x === b ? 'true' : 'false'); });
      });
      grid.appendChild(b);
    });
    return grid;
  }

  window.SiteThemes = { list: THEMES, current: current, set: set, picker: picker, build: build };
  function start() { build(current()); }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  /* поворот экрана / другая ширина — пересобрать (высота на телефоне меняется при прокрутке, на неё не смотрим) */
  var rt = null, lastW = window.innerWidth;
  window.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { if (Math.abs(window.innerWidth - lastW) > 80 && current() !== 'none') { lastW = window.innerWidth; build(current()); } }, 400);
  });
})();
