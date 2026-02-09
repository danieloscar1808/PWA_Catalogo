self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("catalogo-cache").then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./styles.css",
        "./app.js",
        "./manifest.json",
        "./icon-192.png",
        "./icon-512.png",
        "./splash.png"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request))
  );
});
