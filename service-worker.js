
const CACHE_NAME = "piv-cache-v1";
const urlsToCache = [
  "index.html",
  "zone-options.html",
  "view-entries.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "5E52CBCA-B358-4884-93B1-E397CBFD04BF.png"
];

// Install service worker and cache necessary files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Serve cached files if available
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
