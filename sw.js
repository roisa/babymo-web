// Baby Mo service worker — v2 (2026-05)
//
// Strategy:
//   - HTML navigations: network-first with stale-cache fallback
//   - Static assets (fonts, images, JS chunks): cache-first
//   - Search index + videos.json: stale-while-revalidate
//
// The previous SW was a kill-switch (unregistering itself). Returning
// visitors who still have that old SW will fetch this file on next
// navigation, install + activate it cleanly. We clear unrelated caches
// in activate to avoid carrying old kill-switch state forward.

const VERSION = "babymo-v2-20260527";
const HTML_CACHE = `${VERSION}-html`;
const STATIC_CACHE = `${VERSION}-static`;
const DATA_CACHE = `${VERSION}-data`;

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => !k.startsWith(VERSION))
          .map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

function isStatic(url) {
  return (
    url.pathname.includes("/_next/static/") ||
    url.pathname.startsWith("/assets/") ||
    url.pathname.includes("/babymo-web/_next/static/") ||
    url.pathname.includes("/babymo-web/assets/") ||
    /\.(woff2?|png|jpg|jpeg|svg|webp|ico)$/i.test(url.pathname)
  );
}

function isData(url) {
  return /\/data\/(search|videos)\.json$/.test(url.pathname);
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Static assets — cache-first
  if (isStatic(url)) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            const copy = res.clone();
            caches.open(STATIC_CACHE).then((c) => c.put(req, copy));
            return res;
          }),
      ),
    );
    return;
  }

  // Data files — SWR
  if (isData(url)) {
    event.respondWith(
      caches.open(DATA_CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        const network = fetch(req)
          .then((res) => {
            if (res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(() => cached);
        return cached || network;
      }),
    );
    return;
  }

  // HTML navigations — network-first
  const accept = req.headers.get("accept") || "";
  if (req.mode === "navigate" || accept.includes("text/html")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(HTML_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          if (cached) return cached;
          return new Response(
            "<h1>Offline</h1><p>Halaman ini belum tersimpan.</p>",
            { headers: { "content-type": "text/html; charset=utf-8" } },
          );
        }),
    );
  }
});
