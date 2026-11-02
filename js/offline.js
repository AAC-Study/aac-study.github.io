/* Офлайн-уроки: кнопка «Скачать для офлайна» кладёт урок и сам сайт в память браузера (Cache Storage).
   Без интернета sw.js отдаёт их оттуда, и урок открывается (например, в самолёте).
   С интернетом сайт всегда грузится из сети — офлайн-копия только запасная и сама обновляется. */
(function () {
  'use strict';
  var el = U.el;
  var CACHE = 'aac-offline-v1';
  var KEY = 'offline_lessons';          // { id: время скачивания }
  var STATIC = ['./', 'index.html', 'manifest.webmanifest', 'version.json', 'data/subjects.js', 'data/lessons/index.js',
    'img/favicon.svg', 'img/icon-32.png', 'img/icon-180.png', 'img/icon-192.png', 'img/icon-512.png', 'img/badge-96.png',
    'vendor/cropper.min.css', 'vendor/cropper.min.js'];

  I18N.add({
    he: { off_save: 'להוריד לשימוש בלי אינטרנט', off_saving: 'מוריד…', off_saved: 'זמין בלי אינטרנט', off_remove: 'למחוק מהמכשיר',
      off_done: 'השיעור נשמר. אפשר לפתוח אותו גם בלי אינטרנט', off_removed: 'השיעור נמחק מהמכשיר', off_fail: 'לא הצלחנו להוריד. בדקו את האינטרנט',
      off_unsupported: 'הדפדפן הזה לא תומך בשיעורים בלי אינטרנט', off_now: 'אין אינטרנט — מוצגת הגרסה השמורה', off_hint: 'פעם אחת עם אינטרנט — ואז השיעור נפתח גם בטיסה.' },
    ru: { off_save: 'Скачать для офлайна', off_saving: 'Скачиваю…', off_saved: 'Доступен без интернета', off_remove: 'Удалить с устройства',
      off_done: 'Урок сохранён. Его можно открыть и без интернета', off_removed: 'Урок удалён с устройства', off_fail: 'Не получилось скачать. Проверь интернет',
      off_unsupported: 'Этот браузер не умеет хранить уроки без интернета', off_now: 'Нет интернета — показана сохранённая версия', off_hint: 'Один раз с интернетом — и урок откроется даже в самолёте.' },
    en: { off_save: 'Save for offline', off_saving: 'Saving…', off_saved: 'Available offline', off_remove: 'Remove from device',
      off_done: 'Lesson saved. It opens without internet too', off_removed: 'Lesson removed from this device', off_fail: 'Could not save. Check your internet',
      off_unsupported: 'This browser cannot keep lessons offline', off_now: 'No internet — showing the saved copy', off_hint: 'Once with internet, then the lesson opens even on a plane.' }
  });

  function supported() { return 'caches' in window && 'serviceWorker' in navigator && window.isSecureContext && location.protocol !== 'file:'; }
  function list() { return U.storage.get(KEY, {}) || {}; }
  function setList(x) { U.storage.set(KEY, x); }

  /* файлы самого сайта: всё, что подключено на странице (скрипты и стили), плюс картинки и данные */
  function shellUrls() {
    var out = STATIC.slice();
    Array.prototype.forEach.call(document.querySelectorAll('script[src], link[rel="stylesheet"][href]'), function (n) {
      var u = n.getAttribute('src') || n.getAttribute('href');
      if (u && !/^https?:/i.test(u) && !/^\/\//.test(u)) out.push(u.split('?')[0]);
    });
    return out.filter(function (u, i) { return out.indexOf(u) === i; });
  }
  function lessonUrl(id) { return 'data/lessons/' + id + '.js'; }

  function put(cache, urls) {
    // cache: 'reload' — всегда свежая копия из сети, а не из HTTP-кэша
    return Promise.all(urls.map(function (u) {
      return fetch(u, { cache: 'reload' }).then(function (r) {
        if (!r.ok) throw new Error(u + ': ' + r.status);
        return cache.put(u, r);
      });
    }));
  }
  function ensureSw() {
    return navigator.serviceWorker.getRegistration().then(function (r) {
      return r || navigator.serviceWorker.register('sw.js');
    });
  }

  var Offline = {
    supported: supported,
    has: function (id) { return !!list()[id]; },
    save: function (id) {
      if (!supported()) return Promise.reject(new Error('off_unsupported'));
      return ensureSw().then(function () { return caches.open(CACHE); }).then(function (c) {
        return put(c, shellUrls().concat([lessonUrl(id)]));
      }).then(function () {
        var l = list(); l[id] = Date.now(); setList(l);
        if (window.Store && Store.progress && Store.POINTS) {
          try { var p = Store.progress.award('download:' + id + ':offline', Store.POINTS.download); if (p && p.catch) p.catch(function () {}); } catch (e) { /* */ }
        }
      });
    },
    remove: function (id) {
      var l = list(); delete l[id]; setList(l);
      if (!supported()) return Promise.resolve();
      return caches.open(CACHE).then(function (c) {
        if (!Object.keys(l).length) return caches.delete(CACHE);
        return c.delete(lessonUrl(id));
      });
    },
    /* с интернетом, если есть скачанные уроки: тихо обновляем офлайн-копию (раз на версию сайта) */
    refresh: function () {
      var ids = Object.keys(list());
      if (!ids.length || !supported() || !navigator.onLine) return;
      fetch('version.json?t=' + Date.now(), { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (j) {
        if (!j || !j.v || U.storage.get('offline_ver', '') === j.v) return null;
        return caches.open(CACHE).then(function (c) {
          return put(c, shellUrls().concat(ids.map(lessonUrl)));
        }).then(function () { U.storage.set('offline_ver', j.v); });
      }).catch(function () { /* в другой раз */ });
    },
    /* кнопка для страницы урока */
    button: function (id) {
      var box = el('div', { class: 'off-box' });
      function draw() {
        box.innerHTML = '';
        if (!supported()) { box.appendChild(el('p', { class: 'muted off-note' }, t('off_unsupported'))); return; }
        if (Offline.has(id)) {
          box.appendChild(el('span', { class: 'chip off-chip', html: Icons.get('check') + '<span>' + U.esc(t('off_saved')) + '</span>' }));
          box.appendChild(el('button', { type: 'button', class: 'btn btn--ghost off-rm', 'data-act': 'offline-remove', onclick: function () {
            Offline.remove(id).then(function () { U.toast(t('off_removed')); draw(); });
          } }, t('off_remove')));
        } else {
          var b = el('button', { type: 'button', class: 'btn off-save', 'data-act': 'offline-save',
            html: Icons.get('download') + '<span>' + U.esc(t('off_save')) + '</span>' });
          b.addEventListener('click', function () {
            b.disabled = true; b.lastChild.textContent = t('off_saving');
            Offline.save(id).then(function () { U.toast(t('off_done')); draw(); }, function () { U.toast(t('off_fail'), 'err'); draw(); });
          });
          box.appendChild(b);
          box.appendChild(el('p', { class: 'muted off-note' }, t('off_hint')));
        }
      }
      draw();
      return box;
    }
  };
  window.Offline = Offline;

  /* полоска «нет интернета» */
  function netBar() {
    var bar = document.querySelector('.off-bar');
    if (navigator.onLine) { if (bar) bar.remove(); return; }
    if (!bar) document.body.appendChild(el('div', { class: 'off-bar', role: 'status' }, t('off_now')));
  }
  window.addEventListener('online', function () { netBar(); Offline.refresh(); });
  window.addEventListener('offline', netBar);
  document.addEventListener('DOMContentLoaded', function () { netBar(); setTimeout(Offline.refresh, 4000); });
})();
