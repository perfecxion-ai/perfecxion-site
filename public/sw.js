// Service Worker for offline functionality and performance
const CACHE_NAME = 'perfecxion-v1'
const urlsToCache = [
  '/',
  '/offline',
  '/logo-perfecxion.svg',
  '/_next/static/css/app.css',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/framework.js',
  '/_next/static/chunks/pages/_app.js'
]

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache.map(url => new Request(url, { cache: 'reload' })))
      })
      .catch((error) => {
        console.error('Failed to cache:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          // Update cache in background for HTML documents
          if (event.request.headers.get('accept')?.includes('text/html')) {
            event.waitUntil(updateCache(event.request))
          }
          return response
        }

        // Network request with cache fallback
        return fetch(event.request).then((response) => {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }

          // Clone the response
          const responseToCache = response.clone()

          // Cache successful responses
          caches.open(CACHE_NAME)
            .then((cache) => {
              // Cache static assets and HTML pages
              if (shouldCache(event.request)) {
                cache.put(event.request, responseToCache)
              }
            })

          return response
        }).catch(() => {
          // Offline fallback for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/offline')
          }
          
          // Return cached version if available
          return caches.match(event.request)
        })
      })
  )
})

// Helper function to update cache in background
function updateCache(request) {
  return fetch(request).then((response) => {
    if (!response || response.status !== 200) return
    
    return caches.open(CACHE_NAME).then((cache) => {
      cache.put(request, response.clone())
    })
  })
}

// Helper function to determine if request should be cached
function shouldCache(request) {
  const url = new URL(request.url)
  
  // Cache static assets
  if (url.pathname.startsWith('/_next/static/')) return true
  if (url.pathname.endsWith('.js')) return true
  if (url.pathname.endsWith('.css')) return true
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|ico)$/)) return true
  if (url.pathname.match(/\.(woff|woff2|ttf|otf)$/)) return true
  
  // Cache HTML pages (but not API routes)
  if (!url.pathname.startsWith('/api/') && request.headers.get('accept')?.includes('text/html')) {
    return true
  }
  
  return false
}

// Handle background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncOfflineForms())
  }
})

// Sync offline form submissions
async function syncOfflineForms() {
  try {
    const cache = await caches.open('offline-forms')
    const requests = await cache.keys()
    
    for (const request of requests) {
      try {
        const response = await fetch(request.clone())
        if (response.ok) {
          await cache.delete(request)
        }
      } catch (error) {
        console.error('Failed to sync form:', error)
      }
    }
  } catch (error) {
    console.error('Sync failed:', error)
  }
}

// Handle push notifications
self.addEventListener('push', (event) => {
  if (!event.data) return
  
  const data = event.data.json()
  const options = {
    body: data.body,
    icon: '/logo-perfecxion.svg',
    badge: '/logo-perfecxion.svg',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/'
    }
  }
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  )
})

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  )
})