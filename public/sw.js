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
  console.log("Caching assets");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});




// Activate event: Delete old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  return self.clients.claim(); // 👈 ensures clients use the updated SW
});

