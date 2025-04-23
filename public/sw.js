const CACHE_NAME = "mycache";
const urlsToCache = [
  "/",
  "/index.html"
];

// Install event: Cache initial files
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  self.skipWaiting(); // 👈 Forces it to activate immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});


// Fetch event: Serve cached files or fetch from network
self.addEventListener("fetch", (event) => {
  try{
    event.respondWith(
      (async () => {
        const response = await caches.match(event.request);
        return response || fetch(event.request);
      })()
    );
  }catch(err){
    console.log(err)
  }
});

// Activate event: Delete old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cache) => cache !== CACHE_NAME)
          .map((cache) => {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          })
      );
    })
  );
});
