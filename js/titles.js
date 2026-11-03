/* Титулы: открываются по уровню, один выбранный титул видят все.
   У каждого: значок, свой фон и тень. С 5 уровня — анимация (блик, звёзды, искры, свечение), см. css/titles.css. */
(function () {
  'use strict';
  var L = [
    { id: 'newbie', lvl: 0, style: 'plain', ic: '🌱', name: { he: 'מתחיל', ru: 'Новичок', en: 'Newbie' } },
    { id: 'curious', lvl: 2, style: 'mint', ic: '🔍', name: { he: 'סקרן', ru: 'Любознательный', en: 'Curious mind' } },
    { id: 'solver', lvl: 5, style: 'blue', ic: '🧩', fx: 'shine', name: { he: 'פותר בעיות', ru: 'Решатель задач', en: 'Problem solver' } },
    { id: 'nightcoder', lvl: 8, style: 'night', ic: '🌙', fx: 'stars', name: { he: 'מתכנת לילה', ru: 'Ночной кодер', en: 'Night coder' } },
    { id: 'formula', lvl: 12, style: 'violet', ic: '∑', fx: 'shine', name: { he: 'אלוף הנוסחאות', ru: 'Знаток формул', en: 'Formula master' } },
    { id: 'loops', lvl: 16, style: 'sunset', ic: '🔁', fx: 'glow', name: { he: 'אמן הלולאות', ru: 'Мастер циклов', en: 'Loop master' } },
    { id: 'sqlguru', lvl: 20, style: 'pink', ic: '🗄️', fx: 'sparkle', name: { he: 'גורו SQL', ru: 'Гуру SQL', en: 'SQL guru' } },
    { id: 'architect', lvl: 25, style: 'gold', ic: '🏛️', fx: 'shine', name: { he: 'ארכיטקט', ru: 'Архитектор', en: 'Architect' } },
    { id: 'mentor', lvl: 30, style: 'anim-aurora', ic: '🧭', fx: 'stars', name: { he: 'מנטור הקבוצה', ru: 'Наставник группы', en: 'Group mentor' } },
    { id: 'binary', lvl: 40, style: 'anim-neon', ic: '💾', fx: 'flicker', name: { he: 'חושב בבינארי', ru: 'Думаю в двоичной', en: 'Thinks in binary' } },
    { id: 'legend', lvl: 60, style: 'anim-gold', ic: '🏆', fx: 'sparkle', name: { he: 'אגדת AAC', ru: 'Легенда AAC', en: 'AAC legend' } },
    { id: 'immortal', lvl: 90, style: 'anim-rainbow', ic: '👑', fx: 'shine', name: { he: 'בלתי מנוצח', ru: 'Непобедимый', en: 'Unbeatable' } }
  ];
  var byId = {};
  L.forEach(function (x) { byId[x.id] = x; });
  window.Titles = {
    list: L,
    get: function (id) { return byId[id] || null; },
    /* значок титула */
    badge: function (id) {
      var x = byId[id]; if (!x) return null;
      var cls = 'ttl ttl--' + x.style + (x.style.indexOf('anim') === 0 ? ' ttl--anim' : '') + (x.fx ? ' ttl--fx ttl--fx-' + x.fx : '');
      return U.el('span', { class: cls, 'data-title': x.id }, [
        U.el('span', { class: 'ttl__ic', 'aria-hidden': 'true' }, x.ic),
        U.el('span', { class: 'ttl__t' }, U.tr(x.name))
      ]);
    }
  };
})();
