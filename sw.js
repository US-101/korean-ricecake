const CACHE = "korean-site-v1";
const ASSETS = [
  "/", "/index.html", "/travel.html", "/translate.html", "/favorites.html",
  "/styles.css", "/manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k!==CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (url.hostname.includes("mymemory.translated.net") || url.hostname.includes("libretranslate")) {
    e.respondWith(fetch(e.request).catch(()=>new Response("翻譯需要網路連線",{status:503})));
    return;
  }
  if (e.request.method === "GET") {
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      }).catch(()=>caches.match("/index.html")))
    );
  }
});