const staticBicycle = "dev-bicycle-site-v1"
const assets = [
  "/",
  "/index.html",
  "style.css",
  "bicycle.jpg",
  "rower-gorski.jpg",
  "rower-holenderski.jpg",
  "rower-tandem.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticBicycle).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})