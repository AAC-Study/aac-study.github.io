/* Титулы: открываются по уровню, один выбранный титул видят все. animated — переливающийся текст. */
(function () {
  'use strict';
  var L = [
    { id: 'newbie', lvl: 0, style: 'plain', name: { he: 'מתחיל', ru: 'Новичок', en: 'Newbie' } },
    { id: 'curious', lvl: 2, style: 'mint', name: { he: 'סקרן', ru: 'Любознательный', en: 'Curious mind' } },
    { id: 'solver', lvl: 5, style: 'blue', name: { he: 'פותר בעיות', ru: 'Решатель задач', en: 'Problem solver' } },
    { id: 'nightcoder', lvl: 8, style: 'night', name: { he: 'מתכנת לילה', ru: 'Ночной кодер', en: 'Night coder' } },
    { id: 'formula', lvl: 12, style: 'violet', name: { he: 'אלוף הנוסחאות', ru: 'Знаток формул', en: 'Formula master' } },
    { id: 'loops', lvl: 16, style: 'sunset', name: { he: 'אמן הלולאות', ru: 'Мастер циклов', en: 'Loop master' } },
    { id: 'sqlguru', lvl: 20, style: 'pink', name: { he: 'גורו SQL', ru: 'Гуру SQL', en: 'SQL guru' } },
    { id: 'architect', lvl: 25, style: 'gold', name: { he: 'ארכיטקט', ru: 'Архитектор', en: 'Architect' } },
    { id: 'mentor', lvl: 30, style: 'anim-aurora', name: { he: 'מנטור הקבוצה', ru: 'Наставник группы', en: 'Group mentor' } },
    { id: 'binary', lvl: 40, style: 'anim-neon', name: { he: 'חושב בבינארי', ru: 'Думаю в двоичной', en: 'Thinks in binary' } },
    { id: 'legend', lvl: 60, style: 'anim-gold', name: { he: 'אגדת AAC', ru: 'Легенда AAC', en: 'AAC legend' } },
    { id: 'immortal', lvl: 90, style: 'anim-rainbow', name: { he: 'בלתי מנוצח', ru: 'Непобедимый', en: 'Unbeatable' } }
  ];
  var byId = {};
  L.forEach(function (x) { byId[x.id] = x; });
  window.Titles = {
    list: L,
    get: function (id) { return byId[id] || null; },
    /* значок титула */
    badge: function (id) {
      var x = byId[id]; if (!x) return null;
      return U.el('span', { class: 'ttl ttl--' + x.style + (x.style.indexOf('anim') === 0 ? ' ttl--anim' : '') }, U.tr(x.name));
    }
  };
})();
