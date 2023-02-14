self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('sw-cache').then(function(cache){
            return cache.addAll(['index.html','docw.js'])
        })
    )
})

self.addEventListener('fetch', function(event){
    event.responseWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request)
        })
    )
})
