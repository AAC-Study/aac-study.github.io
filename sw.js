/* Service worker: быстрая загрузка, пуш-уведомления и офлайн-уроки.
   Быстро: файлы сайта (страница, стили, скрипты, картинки) хранятся на устройстве в кэше этой версии
   и открываются сразу, без ожидания сети. Новая версия сайта = новый SW_VERSION: браузер сам скачивает
   новый sw.js, он заново кладёт файлы в новый кэш, старый удаляет. Плашка «Сайт обновился» (js/update.js)
   предлагает перезагрузить. version.json, setup.html, 404.html, supabase/ и test/ всегда из сети.
   Без сети и без кэша — то, что человек сам скачал кнопкой «Скачать для офлайна» (aac-offline-v1, js/offline.js). */
var SW_VERSION = '2026-11-10.7';
var OFFLINE_CACHE = 'aac-offline-v1';
var STATIC = 'aac-static-' + SW_VERSION;
/* всё, что подключает index.html (проверяет test/sw.e2e.js), и картинки */
var SHELL = ['index.html', 'manifest.webmanifest',
  'css/base.css', 'css/app.css', 'css/frames.css', 'css/avatar.css', 'css/lesson.css', 'css/titles.css', 'css/report.css', 'css/social.css', 'css/themes.css',
  'js/boot.js', 'js/config.js', 'js/util.js', 'js/i18n.js', 'js/icons.js', 'js/store.js', 'data/subjects.js', 'data/lessons/index.js', 'data/homework.js', 'data/exams.js',
  'js/titles.js', 'js/app.js', 'js/themes.js', 'js/frames.js', 'js/avatar.js', 'js/reading.js', 'js/draft.js', 'js/sync.js', 'js/tasks.js', 'js/social.js',
  'js/presence.js', 'js/people.js', 'js/chat.js', 'js/offline.js', 'js/lesson.js', 'js/homework.js', 'js/hw-remind.js', 'js/report.js', 'js/admin.js',
  'js/push.js', 'js/update.js',
  'img/favicon.svg', 'img/icon-32.png', 'img/icon-180.png', 'img/icon-192.png', 'img/icon-512.png', 'img/badge-96.png'];
/* на компьютере разработчика (localhost) кэш выключен, если тест не попросил его: sw.js?cache=1 */
var NO_CACHE = /^(localhost|127\.0\.0\.1)$/.test(self.location.hostname) && !/[?&]cache=1/.test(self.location.search);
var NET_ONLY = /^(version\.json|sw\.js|setup\.html|404\.html|supabase\/|test\/)/;

function scopeUrl(rel) { return new URL(rel, self.registration.scope).href; }
self.addEventListener('install', function (e) {
  /* ?v=версия — чтобы и сервер GitHub (CDN), и браузер отдали свежий файл, а не старую копию */
  if (NO_CACHE) { self.skipWaiting(); return; }
  e.waitUntil(caches.open(STATIC).then(function (c) {
    return Promise.all(SHELL.map(function (rel) {
      return fetch(scopeUrl(rel) + '?v=' + encodeURIComponent(SW_VERSION), { cache: 'reload' })
        .then(function (r) { if (r.ok) return c.put(scopeUrl(rel), r); })
        .catch(function () { /* файл возьмём из сети при первом открытии */ });
    }));
  }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('aac-static-') === 0 && k !== STATIC; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function fromOffline(req, err) {
  return caches.open(OFFLINE_CACHE).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (r) {
      if (r) return r;
      if (req.mode === 'navigate') {
        return c.match(self.registration.scope).then(function (x) { return x || c.match(scopeUrl('index.html')); })
          .then(function (x) { if (x) return x; throw err; });
      }
      throw err;
    });
  });
}
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;            // Supabase, шрифты и т.п. — не трогаем
  if (NO_CACHE) { e.respondWith(fetch(req).catch(function (err) { return fromOffline(req, err); })); return; }
  var scope = new URL(self.registration.scope).pathname;
  if (url.pathname.indexOf(scope) !== 0) return;
  var rel = url.pathname.slice(scope.length);
  if (NET_ONLY.test(rel) || /(^|&)t=|v=\d{10,}/.test(url.search.slice(1)) || /\/(setup|404)\.html/.test(req.referrer || '')) return;
  if (req.mode === 'navigate') {
    if (rel !== '' && rel !== 'index.html') return;          // другие страницы (404.html для /math и т.п.) — из сети
    rel = 'index.html';
  }
  var key = scopeUrl(rel);
  e.respondWith(caches.open(STATIC).then(function (c) {
    return c.match(key).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (r) {
        if (r && r.ok && r.type === 'basic') c.put(key, r.clone()).catch(function () {});
        return r;
      });
    });
  }).catch(function (err) { return fromOffline(req, err); }));
});

/* iPhone/Safari требует показывать каждое уведомление, иначе отключает подписку */
var MUST_SHOW = /iPhone|iPad|iPod|Macintosh.*Safari/.test(self.navigator.userAgent || '') && !/Chrome|Chromium|Edg|Firefox/.test(self.navigator.userAgent || '');

self.addEventListener('push', function (e) {
  var msg = {};
  try { msg = e.data ? e.data.json() : {}; } catch (err) { msg = { title: 'AAC', body: e.data ? e.data.text() : '' }; }
  var isTest = msg.tag === 'test' || msg.tag === 'goal';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    var onSite = list.filter(function (c) { return c.focused && c.visibilityState === 'visible'; });
    /* человек сейчас на сайте: системное уведомление не нужно, сайт сам обновит колокольчик и чат */
    list.forEach(function (c) { try { c.postMessage({ type: 'push', tag: msg.tag || '', url: msg.url || '' }); } catch (err) { /* */ } });
    if (onSite.length && !isTest && !MUST_SHOW) return null;
    return show(msg);
  }));
});

function show(msg) {
  /* Каждое сообщение — отдельное уведомление (телефон сам сложит их в стопку, как в мессенджерах).
     Поэтому у сообщений чата метка уникальная: «chat-<чат>-<время>». Когда открываешь чат, сайт убирает его уведомления. */
  var tag = msg.tag || '';
  var chat = /^chat-/.test(tag) ? tag.slice(5) : '';
  // у всех, кроме проверочных, метка уникальная — уведомления не заменяют друг друга
  if (tag && tag !== 'test' && tag !== 'goal') tag = tag + '-' + Date.now();
  return self.registration.showNotification(msg.title || 'AAC', {
    body: msg.body || '',
    icon: 'img/icon-192.png',
    badge: 'img/badge-96.png',      // значок в строке состояния Android: только белый силуэт на прозрачном фоне
    tag: tag || undefined,
    renotify: !!tag,        // со звуком и баннером, даже если метка повторилась (проверочные пуши)
    /* Звук и вибрация как в мессенджерах: телефон сам решает по своему режиму
       (звук — звенит, вибрация — вибрирует, беззвучный — тихо). На Android уведомление со звуком всплывает сверху. */
    silent: false,
    vibrate: [180, 80, 180],
    timestamp: Date.now(),
    data: { url: msg.url || '', chat: chat }
  });
}

/* сайт спрашивает версию (видно в настройках уведомлений) */
self.addEventListener('message', function (e) {
  if (e.data && e.data.type === 'version' && e.ports && e.ports[0]) e.ports[0].postMessage(SW_VERSION);
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var base = self.registration.scope;
  var hash = (e.notification.data && e.notification.data.url) || '';
  var target = base + (hash.charAt(0) === '#' ? hash : '');
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      if (c.url.indexOf(base) === 0 && 'focus' in c) {
        if (hash && 'navigate' in c) c.navigate(target);
        return c.focus();
      }
    }
    return self.clients.openWindow ? self.clients.openWindow(target) : null;
  }));
});
