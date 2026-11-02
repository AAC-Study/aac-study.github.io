/* Service worker: только пуш-уведомления (ничего не кэширует, чтобы всегда была свежая версия сайта). */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener('push', function (e) {
  var msg = {};
  try { msg = e.data ? e.data.json() : {}; } catch (err) { msg = { title: 'AAC', body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(msg.title || 'AAC', {
    body: msg.body || '',
    icon: 'img/icon-192.png',
    badge: 'img/icon-192.png',
    tag: msg.tag || undefined,
    renotify: !!msg.tag,
    silent: true,           // без звука, как просили
    data: { url: msg.url || '' }
  }));
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
