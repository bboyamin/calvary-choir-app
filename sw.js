const CACHE_NAME = 'calvary-choir-v1005';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/styles.css',
  './js/storage.js',
  './js/app.js',
  './manifest.json',
  './assets/church-logo.svg',
  './assets/church-symbol.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // API 및 버전 체크 파일은 절대로 서비스 워커 캐시에 보관하지 않고 100% 라이브 네트워크 동기화
  if (url.pathname.includes('/api/') || url.pathname.includes('version.json')) {
    event.respondWith(
      fetch(event.request).catch((err) => {
        console.warn('API network fetch failed:', err);
        return new Response(JSON.stringify({ error: 'Network offline' }), {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  // Network-First 전략: 온라인일 때는 항상 서버의 최신 소스코드를 받고, 오프라인일 때만 캐시 사용
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
