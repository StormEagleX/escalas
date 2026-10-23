
/* V15 iPad. Recursos almacenados únicamente tras una preparación explícita. */
const CACHE_NAME = 'escalas-universo-v15-ipad-20261023-r1';
const CORE = ['./preparar_ipad.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    await cache.addAll(CORE);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const all=await caches.keys();
    await Promise.all(all.filter(n=>n.startsWith('escalas-universo-v15-ipad-') && n!==CACHE_NAME).map(n=>caches.delete(n)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME);
    const saved=await cache.match(event.request,{ignoreSearch:true});
    if(saved)return saved;
    try{return await fetch(event.request);}
    catch(err){
      if(event.request.mode==='navigate'){
        const setup=await cache.match(new URL('./preparar_ipad.html',self.registration.scope));
        if(setup)return setup;
      }
      throw err;
    }
  })());
});
