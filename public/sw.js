const CACHE_NAME = "mycache-v1";


const urlsToCache = [
  "/",
  "/index.html",
  // "/manifest.json",
  // Authors
  "/authors/albert.jpg",
  "/authors/brain.jpg",
  "/authors/buffett.jpg",
  "/authors/clason.jpg",
  "/authors/crement.jpg",
  "/authors/darwish.jpg",
  "/authors/eh.jpg",
  "/authors/ford.jpg",
  "/authors/george.jpg",
  "/authors/hill.jpg",
  "/authors/hoover.jpg",
  "/authors/j.jpg",
  "/authors/james.jpg",
  "/authors/khalil.jpg",
  "/authors/king.jpg",
  "/authors/kiyosaki.jpg",
  "/authors/leo.jpg",
  "/authors/mark.jpg",
  "/authors/nassim.jpg",
  "/authors/nizar.jpg",
  "/authors/oscar.jpg",
  "/authors/patel.jpg",
  "/authors/paulo.jpg",
  "/authors/phil.jpg",
  "/authors/reid.jpg",
  "/authors/rolf.jpg",
  "/authors/shafak.jpg",
  "/authors/tony.jpg",
  "/authors/voss.jpg",
  "/authors/wayne.jpg",
  // Books
  "/books/atomic-habits.webp",
  "/books/beginning.webp",
  "/books/confess.webp",
  "/books/hopeless.webp",
  "/books/it-ends-with-us.webp",
  "/books/never-split-the-difference.webp",
  "/books/one-true-love.webp",
  "/books/react.svg",
  "/books/rich-dad-poor-dad.webp",
  "/books/the-trouble-with-hating-you.webp",
  "/books/think-and-grow-rich.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return Promise.all(
          urlsToCache.map((url) => {
            return cache.add(url).catch((err) => {
              console.warn(`Failed to cache ${url}:, err`);
              return Promise.resolve();
            });
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (!event.request.url.startsWith("http")) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, responseToCache));
          }
          return response;
        })
        .catch(() => {
          return Response.error();
        });
    })
  );
});