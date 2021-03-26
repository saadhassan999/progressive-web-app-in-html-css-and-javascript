const staticMobile = "dev-mob-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/firebase-messaging-sw.js",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticMobile).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  if (fetchEvent.request.url.indexOf("firestore.googleapis.com") === -1) {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then((res) => {
        return res || fetch(fetchEvent.request);
      })
    );
  }
});
