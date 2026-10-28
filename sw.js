const CACHE_NAME = 'calvary-choir-v1108';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './user_manual.html',
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

  // Network-First + 1.8초 지연 안전 폴백: 온라인에선 최신 코드를 우선 받되, 통신이 지연되면 저장된 캐시 화면을 즉시 먼저 열어 멈춤 방지
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      });

      if (!cachedResponse) {
        return fetchPromise;
      }

      return new Promise((resolve) => {
        let settled = false;
        const timer = setTimeout(() => {
          if (!settled) {
            settled = true;
            resolve(cachedResponse);
          }
        }, 1800);

        fetchPromise
          .then((netRes) => {
            clearTimeout(timer);
            if (!settled) {
              settled = true;
              resolve(netRes);
            }
          })
          .catch(() => {
            clearTimeout(timer);
            if (!settled) {
              settled = true;
              resolve(cachedResponse);
            }
          });
      });
    })
  );
});
