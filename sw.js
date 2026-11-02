/* Service worker: только пуш-уведомления (ничего не кэширует, чтобы всегда была свежая версия сайта). */
var SW_VERSION = '2026-11-02.12';
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

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
  if (chat) tag = 'chat-' + chat + '-' + Date.now();
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
