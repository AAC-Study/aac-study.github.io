/* Домашка: кнопка «Я сделал» и ежедневное напоминание.
   «Сделано» хранится в базе (таблица hw_done) и копией на этом устройстве (если сеть пропала — не теряется).
   Напоминание присылает сервер (функция push, action hw_tick, раз в 10 минут по расписанию) — раз в день,
   в выбранное время, пока есть хотя бы одно несделанное задание со сроком в будущем (или без срока).
   Настройки — в profiles.prefs.hwRemind = { on, zone, tz, time }. По умолчанию: включено, Израиль, 11:00.
   Зависит от: U, I18N, Icons, Store, Push (для «включить уведомления»). */
(function () {
  'use strict';
  var el = U.el;
  var DEF_TZ = 'Asia/Jerusalem', DEF_TIME = '11:00';
  /* страны: Израиль главный и первый, дальше — куда чаще всего летают из Израиля */
  var ZONES = [
    { id: 'il', flag: '🇮🇱', tz: 'Asia/Jerusalem', name: { he: 'ישראל', ru: 'Израиль', en: 'Israel' } },
    { id: 'ru', flag: '🇷🇺', tz: 'Europe/Moscow', name: { he: 'רוסיה (מוסקבה)', ru: 'Россия (Москва)', en: 'Russia (Moscow)' } },
    { id: 'ua', flag: '🇺🇦', tz: 'Europe/Kyiv', name: { he: 'אוקראינה', ru: 'Украина', en: 'Ukraine' } },
    { id: 'us-ny', flag: '🇺🇸', tz: 'America/New_York', name: { he: 'ארה״ב (ניו יורק)', ru: 'США (Нью-Йорк)', en: 'USA (New York)' } },
    { id: 'us-la', flag: '🇺🇸', tz: 'America/Los_Angeles', name: { he: 'ארה״ב (לוס אנג׳לס)', ru: 'США (Лос-Анджелес)', en: 'USA (Los Angeles)' } },
    { id: 'gr', flag: '🇬🇷', tz: 'Europe/Athens', name: { he: 'יוון', ru: 'Греция', en: 'Greece' } },
    { id: 'cy', flag: '🇨🇾', tz: 'Asia/Nicosia', name: { he: 'קפריסין', ru: 'Кипр', en: 'Cyprus' } },
    { id: 'ge', flag: '🇬🇪', tz: 'Asia/Tbilisi', name: { he: 'גאורגיה', ru: 'Грузия', en: 'Georgia' } },
    { id: 'gb', flag: '🇬🇧', tz: 'Europe/London', name: { he: 'בריטניה', ru: 'Великобритания', en: 'United Kingdom' } },
    { id: 'de', flag: '🇩🇪', tz: 'Europe/Berlin', name: { he: 'גרמניה', ru: 'Германия', en: 'Germany' } },
    { id: 'it', flag: '🇮🇹', tz: 'Europe/Rome', name: { he: 'איטליה', ru: 'Италия', en: 'Italy' } },
    { id: 'fr', flag: '🇫🇷', tz: 'Europe/Paris', name: { he: 'צרפת', ru: 'Франция', en: 'France' } },
    { id: 'th', flag: '🇹🇭', tz: 'Asia/Bangkok', name: { he: 'תאילנד', ru: 'Таиланд', en: 'Thailand' } },
    { id: 'ae', flag: '🇦🇪', tz: 'Asia/Dubai', name: { he: 'איחוד האמירויות', ru: 'ОАЭ (Дубай)', en: 'UAE (Dubai)' } }
  ];
  var ZBY = {}; ZONES.forEach(function (z) { ZBY[z.id] = z; });

  I18N.add({
    he: { hr_title: 'תזכורת לשיעורי בית', hr_hint_on: 'כל יום ב־{t} ({z}), כל עוד יש שיעורי בית שלא סימנת «עשיתי».', hr_hint_off: 'כבוי. לא יגיעו תזכורות.',
      hr_zone: 'איפה אתה', hr_time: 'שעה', hr_default: 'ברירת מחדל (ישראל)', hr_auto: 'לפי הטלפון', hr_auto_now: 'לפי הטלפון: {z}',
      hr_saved: 'נשמר', hr_err: 'לא הצלחנו לשמור. נסו שוב', hr_push_off: 'במכשיר הזה ההתראות כבויות, אז התזכורת לא תגיע אליו.', hr_push_btn: 'להפעיל התראות',
      hr_done_btn: 'עשיתי ✓', hr_done_on: 'סיימת, כל הכבוד! 🎉', hr_done_undo: 'ביטול', hr_done_chip: '✓ נעשה', hr_done_hint: 'לחצו כשסיימתם, ואז לא תגיע תזכורת על המשימה הזאת.' },
    ru: { hr_title: 'Напоминание о домашке', hr_hint_on: 'Каждый день в {t} ({z}), пока есть задания, где не нажато «Я сделал».', hr_hint_off: 'Выключено. Напоминаний не будет.',
      hr_zone: 'Где ты', hr_time: 'Время', hr_default: 'По умолчанию (Израиль)', hr_auto: 'Как на телефоне', hr_auto_now: 'Как на телефоне: {z}',
      hr_saved: 'Сохранено', hr_err: 'Не получилось сохранить. Попробуй ещё раз', hr_push_off: 'На этом устройстве уведомления выключены, поэтому напоминание сюда не придёт.', hr_push_btn: 'Включить уведомления',
      hr_done_btn: 'Я сделал ✓', hr_done_on: 'Сделано, молодец! 🎉', hr_done_undo: 'Отменить', hr_done_chip: '✓ Сделано', hr_done_hint: 'Нажми, когда закончишь, и напоминаний об этом задании больше не будет.' },
    en: { hr_title: 'Homework reminder', hr_hint_on: 'Every day at {t} ({z}) while some homework is not marked “I did it”.', hr_hint_off: 'Off. No reminders.',
      hr_zone: 'Where you are', hr_time: 'Time', hr_default: 'Default (Israel)', hr_auto: 'Like my phone', hr_auto_now: 'Like my phone: {z}',
      hr_saved: 'Saved', hr_err: 'Couldn’t save. Try again', hr_push_off: 'Notifications are off on this device, so the reminder won’t reach it.', hr_push_btn: 'Turn on notifications',
      hr_done_btn: 'I did it ✓', hr_done_on: 'Done, well done! 🎉', hr_done_undo: 'Undo', hr_done_chip: '✓ Done', hr_done_hint: 'Tap when you finish, and there will be no more reminders about this homework.' }
  });

  function me() { return Store.auth.current(); }
  function server() { return Store.mode === 'supabase' && Store.sb; }
  function deviceTz() { try { return Intl.DateTimeFormat().resolvedOptions().timeZone || DEF_TZ; } catch (e) { return DEF_TZ; } }

  /* ---------- «Я сделал» ---------- */
  var done = null;   // {hwId: true}
  function key() { var u = me(); return 'hw_done:' + (u ? u.id : '-'); }
  function cache() { if (!done) done = U.storage.get(key(), {}) || {}; return done; }
  function keep() { U.storage.set(key(), done || {}); }
  var loaded = null;
  function load() {
    if (!me()) return Promise.resolve(cache());
    if (!server()) return Promise.resolve(cache());
    if (loaded) return loaded;
    loaded = Store.sb.api('GET', '/rest/v1/hw_done?select=hw_id').then(function (rows) {
      done = {}; (rows || []).forEach(function (r) { done[r.hw_id] = true; }); keep(); return done;
    }, function () { loaded = null; return cache(); });   // таблицы ещё нет / нет сети — показываем то, что помним
    return loaded;
  }
  document.addEventListener('userchange', function () { done = null; loaded = null; });
  function isDone(id) { return !!cache()[id]; }
  function setDone(id, on) {
    cache();
    var was = !!done[id];
    if (on) done[id] = true; else delete done[id];
    keep();
    if (!server()) return Promise.resolve();
    var req = on
      ? Store.sb.api('POST', '/rest/v1/hw_done?on_conflict=user_id,hw_id', { hw_id: id }, { headers: { Prefer: 'resolution=ignore-duplicates,return=minimal' } })
      : Store.sb.api('DELETE', '/rest/v1/hw_done?hw_id=eq.' + encodeURIComponent(id));
    return req.catch(function (e) { if (was) done[id] = true; else delete done[id]; keep(); throw e; });
  }

  /* кнопка внизу страницы задания */
  function doneBox(h) {
    var box = el('div', { class: 'card hw-done' });
    function draw() {
      box.innerHTML = '';
      var on = isDone(h.id);
      box.classList.toggle('is-done', on);
      if (on) {
        var undo = el('button', { type: 'button', class: 'btn btn--ghost hw-done__undo' }, t('hr_done_undo'));
        undo.addEventListener('click', function () { act(false); });
        box.appendChild(el('button', { type: 'button', class: 'btn hw-done__btn is-done', disabled: true }, t('hr_done_on')));
        box.appendChild(undo);
      } else {
        var b = el('button', { type: 'button', class: 'btn hw-done__btn' }, t('hr_done_btn'));
        b.addEventListener('click', function () { act(true); });
        box.appendChild(b);
        box.appendChild(el('p', { class: 'muted hw-done__hint' }, t('hr_done_hint')));
      }
    }
    function act(on) {
      var p = setDone(h.id, on); draw();
      if (on && window.U && U.toast) U.toast(t('hr_done_on'), 'level');
      p.catch(function () { draw(); U.toast(t('hr_err'), 'err'); });
    }
    draw();
    load().then(function () { if (box.isConnected) draw(); });
    return box;
  }
  /* значок на карточке в списке */
  function chip(h) {
    var c = el('span', { class: 'hw-donechip', 'data-done-id': h.id, hidden: !isDone(h.id) }, t('hr_done_chip'));
    return c;
  }
  function refreshChips(root) {
    load().then(function () {
      U.$$('[data-done-id]', root).forEach(function (n) {
        var on = isDone(n.getAttribute('data-done-id'));
        n.hidden = !on;
        var card = n.closest('.hw-card'); if (card) card.classList.toggle('is-done', on);
      });
    });
  }

  /* ---------- настройки напоминания ---------- */
  function cfg() { var u = me(); var c = (u && u.prefs && u.prefs.hwRemind) || {}; return { on: c.on !== false, zone: c.zone || 'default', time: /^\d\d:\d\d$/.test(c.time || '') ? c.time : DEF_TIME, tz: c.tz || '' }; }
  function tzOf(zone) { return zone === 'auto' ? deviceTz() : (ZBY[zone] ? ZBY[zone].tz : DEF_TZ); }
  function zoneLabel(zone) {
    if (zone === 'auto') return t('hr_auto_now', { z: deviceTz().replace(/_/g, ' ') });
    if (ZBY[zone]) return ZBY[zone].flag + ' ' + U.tr(ZBY[zone].name);
    return '🇮🇱 ' + t('hr_default');
  }
  function save(next) {
    var u = me(); if (!u) return Promise.reject(new Error('no_session'));
    var c = { on: !!next.on, zone: next.zone, tz: tzOf(next.zone), time: next.time };
    var prefs = Object.assign({}, u.prefs || {}, { hwRemind: c });
    return Store.profile.update({ prefs: prefs });
  }

  function card() {
    var c = cfg();
    var box = el('div', { class: 'card hw-rem' });
    /* «как на телефоне»: если человек улетел и телефон сменил пояс — тихо обновляем */
    if (c.zone === 'auto' && c.tz !== deviceTz()) save(c).catch(function () {});

    var input = el('input', { type: 'checkbox', 'aria-label': t('hr_title') }); input.checked = c.on;
    var head = el('div', { class: 'hw-rem__head' }, [
      el('span', { class: 'hw-rem__ic', html: Icons.get('bell') }),
      el('div', { class: 'hw-rem__txt' }, [el('b', null, t('hr_title')), el('div', { class: 'muted hw-rem__hint' })]),
      el('label', { class: 'switch' }, [input, el('span')])
    ]);
    var body = el('div', { class: 'hw-rem__body' });
    var globe = el('button', { type: 'button', class: 'btn hw-rem__zone', 'aria-expanded': 'false', 'aria-haspopup': 'listbox' });
    var timeIn = el('input', { type: 'time', class: 'input hw-rem__time', step: 900, value: c.time, 'aria-label': t('hr_time') });
    var listBox = el('div', { class: 'hw-rem__list', role: 'listbox', hidden: true });
    var pushRow = el('div', { class: 'hw-rem__push', hidden: true });
    body.appendChild(el('div', { class: 'hw-rem__row' }, [
      el('div', { class: 'hw-rem__field' }, [el('span', { class: 'hw-rem__label' }, t('hr_zone')), globe]),
      el('div', { class: 'hw-rem__field' }, [el('span', { class: 'hw-rem__label' }, t('hr_time')), timeIn])
    ]));
    body.appendChild(listBox);
    box.appendChild(head); box.appendChild(body); box.appendChild(pushRow);

    function paint() {
      head.querySelector('.hw-rem__hint').textContent = c.on ? t('hr_hint_on', { t: c.time, z: c.zone === 'auto' ? deviceTz().replace(/_/g, ' ') : U.tr((ZBY[c.zone] || ZBY.il).name) }) : t('hr_hint_off');
      box.classList.toggle('is-off', !c.on);
      globe.disabled = !c.on; timeIn.disabled = !c.on;
      globe.innerHTML = '<span aria-hidden="true">🌍</span><span>' + U.esc(zoneLabel(c.zone)) + '</span>';
    }
    function commit(patch) {
      var prev = Object.assign({}, c);
      Object.assign(c, patch); paint();
      save(c).then(function () { U.toast(t('hr_saved')); }, function () { c = prev; input.checked = c.on; timeIn.value = c.time; paint(); U.toast(t('hr_err'), 'err'); });
    }
    input.addEventListener('change', function () { commit({ on: input.checked }); checkPush(); });
    timeIn.addEventListener('change', function () { if (/^\d\d:\d\d$/.test(timeIn.value)) commit({ time: timeIn.value }); else timeIn.value = c.time; });
    function opt(id, label) {
      var b = el('button', { type: 'button', role: 'option', class: 'hw-rem__opt', 'data-zone': id, 'aria-selected': c.zone === id ? 'true' : 'false' }, label);
      b.addEventListener('click', function () { listBox.hidden = true; globe.setAttribute('aria-expanded', 'false'); commit({ zone: id }); });
      return b;
    }
    globe.addEventListener('click', function () {
      if (!listBox.hidden) { listBox.hidden = true; globe.setAttribute('aria-expanded', 'false'); return; }
      listBox.innerHTML = '';
      listBox.appendChild(opt('default', '⭐ ' + t('hr_default')));
      listBox.appendChild(opt('auto', '📱 ' + t('hr_auto_now', { z: deviceTz().replace(/_/g, ' ') })));
      ZONES.forEach(function (z) { listBox.appendChild(opt(z.id, z.flag + ' ' + U.tr(z.name))); });
      listBox.hidden = false; globe.setAttribute('aria-expanded', 'true');
    });
    /* напоминание приходит уведомлением — подсказать, если на этом устройстве они выключены */
    function checkPush() {
      pushRow.hidden = true;
      if (!c.on || !window.Push) return;
      Push.isOn().then(function (on) {
        if (on || !box.isConnected) return;
        pushRow.innerHTML = '';
        var b = el('button', { type: 'button', class: 'btn btn--primary', html: Icons.get('bellRing') + '<span>' + U.esc(t('hr_push_btn')) + '</span>' });
        b.addEventListener('click', function () {
          Push.enable().then(function () { pushRow.hidden = true; U.toast(t('push_on')); }, function (e) { U.toast(t(e && /^push_/.test(e.message) ? e.message : 'push_fail'), 'err'); });
        });
        if (Push.reason && Push.reason()) b.disabled = true;
        pushRow.appendChild(el('p', { class: 'muted' }, t('hr_push_off')));
        pushRow.appendChild(b);
        pushRow.hidden = false;
      });
    }
    paint(); checkPush();
    return box;
  }

  window.HwRemind = { card: card, doneBox: doneBox, chip: chip, refreshChips: refreshChips, isDone: isDone, setDone: setDone, load: load, ZONES: ZONES, cfg: cfg };
})();
