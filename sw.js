const CACHE = 'babymo-v1';
const PRECACHE = [
  '/',
  '/index.html',
  '/contact.html',
  '/privacy.html',
  '/terms.html',
  '/404.html',
  '/site.webmanifest',
  '/assets/logo.webp',
  '/assets/logo-96.webp',
  '/assets/logo-192.webp',
  '/assets/logo-512.webp',
  '/assets/baby-mo-hero.webp',
  '/assets/og-image.jpg',
  '/assets/favicon.ico',
  '/assets/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE).catch(() => {})));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const { request } = e;
  if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) return;

  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request).catch(() => caches.match(request).then(r => r || caches.match('/404.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(request).then(cached => {
      const fetchPromise = fetch(request).then(resp => {
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(request, clone));
        }
        return resp;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
