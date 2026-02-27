const CACHE_NAME = 'budugo-v1';
const urlsToCache = [
    '/budugo/',
    '/budugo/index.html',
    '/budugo/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});