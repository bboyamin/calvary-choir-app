const CACHE_NAME = 'calvary-choir-v1112';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './user_manual.html',
  './css/styles.css',
  './js/storage.js',
  './js/app.js',
  './manifest.json',
  './assets/church-logo-white.svg',
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
  // 1. GET 메서드만 캐싱 대상
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);

  // 2. 외부 도메인(chrome-extension, youtube, doubleclick, google drive 등)은
  // 서비스 워커 캐시를 오염시키지 않도록 브라우저 기본 네트워크로 통과
  if (url.origin !== self.location.origin) {
    return;
  }

  // 3. API 및 버전 체크 파일은 절대로 서비스 워커 캐시에 보관하지 않고 100% 라이브 네트워크 동기화
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

  // 4. Network-First + 1.8초 지연 안전 폴백: 온라인에선 최신 코드를 우선 받되, 통신이 지연되면 저장된 캐시 화면을 즉시 먼저 열어 멈춤 방지
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
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
