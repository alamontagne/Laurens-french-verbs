const cacheName = 'french-verbs-cache';
const filesToCache = [
  '/',
  'index.html',
  'styles.css',
  'script.js',
  'confetti.min.js',
  'icon.png',
  'manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});