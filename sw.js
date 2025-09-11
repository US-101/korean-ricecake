self.addEventListener('install', e=>{ self.skipWaiting(); });
self.addEventListener('activate', e=>{ e.waitUntil(clients.claim()); });
const CACHE='korean-app-v2';
const PASS=[/mymemory\.translated\.net/, /libretranslate/];
self.addEventListener('fetch', e=>{
  const url=e.request.url;
  if(PASS.some(re=>re.test(url))) return;
  e.respondWith((async()=>{
    try{
      const net=await fetch(e.request);
      const cache=await caches.open(CACHE);
      cache.put(e.request, net.clone());
      return net;
    }catch(err){
      const hit=await caches.match(e.request);
      if(hit) return hit;
      return new Response('Offline', {status:200});
    }
  })());
});