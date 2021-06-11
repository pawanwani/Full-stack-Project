const CACHE_NAME = "cache1ForWOW";


//install sw
this.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            cache.addAll([
                "/index.html",
                "/src/App.tsx",
                "/src/App.css",
                "index.tsx",
                "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",

            ])
                .then(() => self.skipWaiting())
        })
    )
})

//listen the request
this.addEventListener("fetch", (e) => {
    console.log("Service Worker: Fetching");
    e.respondWith(
        caches.match(e.request)
            .then(() => {

                return fetch(e.request)
                    .catch(() => caches.match(e.request))
            })
    )
})


this.addEventListener('activate', (e) => {

    e.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cache) => {
                if (cache !== CACHE_NAME) {
                    console.log("Service Worker: Clearing Old Cache ");
                    return caches.delete(cache);
                }
            })
        ))
    )
})