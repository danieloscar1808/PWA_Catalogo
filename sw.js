<<<<<<< HEAD
self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("catalogo-cache").then(c=>c.addAll([
      "./","./index.html","./styles.css","./app.js","./manifest.json",
      "./icon-192.png","./icon-512.png","./splash.png"
    ]))
  );
});

self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
=======
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
>>>>>>> 92b92e7399abceb966611c0de5e5bc22de719de3
  );
});
