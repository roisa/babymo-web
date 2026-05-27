// ─── Kill-switch service worker ───────────────────────────────────
// The earlier static-HTML build registered an aggressive caching SW.
// That SW kept serving stale HTML even after the platform was migrated
// to Next.js. This replacement, served at /sw.js, immediately:
//   1. Unregisters itself (so no future SW interception)
//   2. Wipes every cache the old SW created
//   3. Tells every open tab to reload from network
//
// The browser fetches /sw.js periodically (every navigation if the
// existing SW is > 24h old). Once it sees this new content, the cleanup
// happens automatically — no user action required.
//
// Safe to delete after ~30 days, once we're confident no returning
// visitor still has the old SW installed.

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
    } catch (_) {}
    try {
      await self.registration.unregister();
    } catch (_) {}
    try {
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const c of clients) {
        try { c.navigate(c.url); } catch (_) {}
      }
    } catch (_) {}
  })());
});

// Pass every fetch straight through — never serve from any old cache.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
