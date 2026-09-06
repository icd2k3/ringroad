const CACHE = "ringroad-itinerary-2027-v1";

const sameOrigin = (url) =>
  new URL(url, self.location.href).origin === self.location.origin;

const indexUrl = () => new URL("./index.html", self.location.href).href;

/** Safari refuses any Response the SW marks as redirected. Rebuild as a plain 200. */
async function unwrap(response) {
  if (!response || !response.ok) return null;
  const headers = new Headers(response.headers);
  headers.delete("location");
  const body = await response.blob();
  return new Response(body, {
    status: 200,
    statusText: "OK",
    headers,
  });
}

async function put(request, response) {
  const clean = await unwrap(response);
  if (!clean) return null;
  const cache = await caches.open(CACHE);
  await cache.put(request, clean.clone());
  return clean;
}

async function refreshPrecache() {
  const listRes = await fetch("./precache.json", { cache: "no-store" });
  const files = await listRes.json();
  await Promise.all(
    files.map(async (file) => {
      if (file === "./" || file === "/") return;
      try {
        const req = new Request(new URL(file, self.location.href), { cache: "reload" });
        const res = await fetch(req);
        await put(req, res);
      } catch (_) {}
    })
  );
}

async function fromCache(request) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(request, { ignoreSearch: true });
  if (hit) return hit;

  const url = new URL(request.url);
  const isNav =
    request.mode === "navigate" ||
    url.pathname === "/" ||
    url.pathname.endsWith("/");
  if (isNav) {
    return (
      (await cache.match(indexUrl(), { ignoreSearch: true })) ||
      (await cache.match("./index.html", { ignoreSearch: true }))
    );
  }
  return undefined;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      await refreshPrecache();
      self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      // Keep the cache populated during install; deleting it here can erase
      // the offline copy if connectivity drops between install and activation.
      await Promise.all(keys.filter((k) => k.startsWith("ringroad-") && k !== CACHE).map((k) => caches.delete(k)));
      self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "refresh") {
    event.waitUntil(refreshPrecache());
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (!sameOrigin(event.request.url)) return;

  event.respondWith(
    (async () => {
      try {
        const res = await fetch(event.request);
        const clean = await put(event.request, res);
        if (clean) return clean;
        const fallback = await fromCache(event.request);
        if (fallback) return fallback;
        return new Response("Offline", { status: 503, statusText: "Offline" });
      } catch (_) {
        const cached = await fromCache(event.request);
        if (cached) return cached;
        return new Response("Offline", { status: 503, statusText: "Offline" });
      }
    })()
  );
});
