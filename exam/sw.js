/* Тренажёры к экзамену: всё хранится на телефоне, работает без интернета. */
var V = 'exam-20261112071428', FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "1-add.html", "2-mul.html", "2-why.html", "3-neg.html", "4-bin.html", "5-hex.html", "6-exam.html"];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(V).then(function (c) { return c.addAll(FILES.map(function (f) { return new Request(f, { cache: 'reload' }); })); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (x) { return x.indexOf('exam-') === 0 && x !== V; }).map(function (x) { return caches.delete(x); })); }).then(function () { return self.clients.claim(); }));
});
/* Сначала с телефона (мгновенно), в фоне тихо обновляем из сети. */
self.addEventListener('fetch', function (e) {
  var r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(caches.open(V).then(function (c) {
    return c.match(r, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(r).then(function (res) { if (res && res.ok && res.type === 'basic') c.put(r, res.clone()); return res; }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});
