const CACHE = 'yenilikcilab-v13';
const FILES = [
  './', './index.html', './styles.css', './classroom-tools.css', './app.js',
  './classroom-tools.js', './home-repairs.js', './workshop-projects.js',
  './project-schematics.js', './vendor/html2pdf.bundle.min.js', './vendor/capacitor-bridge.js', './manifest.webmanifest', './icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('yenilikcilab-') && key !== CACHE).map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(request).then(response => {
    if (response && response.ok) {
      const write = caches.open(CACHE).then(cache => cache.put(request, response.clone()));
      event.waitUntil(write);
    }
    return response;
  }).catch(() => caches.match(request).then(cached => cached || (request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
