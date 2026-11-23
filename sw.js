/* Bornotoron app-shell service worker.
 * Bump CACHE_VERSION when the precache list changes. Network-first requests keep
 * online sessions fresh while the versioned cache provides offline fallback. */
'use strict';

const CACHE_PREFIX = 'bornotoron-shell-';
const CACHE_VERSION = 'v1';
const CACHE_NAME = CACHE_PREFIX + CACHE_VERSION;
const SCOPE_URL = new URL(self.registration.scope);
const INDEX_URL = new URL('./index.html', SCOPE_URL).href;
const INDEX_PATH = new URL('./index.html', SCOPE_URL).pathname;
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './js/rules.js',
  './js/dictionary.js',
  './js/transliterate.js',
  './js/main.js',
  './Assets/Logo/Bornotoron_Logo.png',
  './Assets/Favicon/Bornotoron-Favicon-SVG.svg',
  './Assets/Favicon/Favicon-96x96.png',
  './Assets/Favicon/Web_App_Manifest-192x192.png',
  './Assets/Favicon/Web_App_Manifest-512x512.png',
  './Assets/Favicon/Apple_Touch_Icon.png',
  './Assets/Favicon/Favicon.ico',
  './Assets/Favicon/site.webmanifest'
];
const SHELL_PATHS = new Set(APP_SHELL.map(path => new URL(path, SCOPE_URL).pathname));

async function pruneOldCaches() {
  const names = await caches.keys();
  await Promise.all(names
    .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
    .map(name => caches.delete(name)));
}

async function networkFirst(request, fallbackUrl = '') {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (response.ok && response.type === 'basic') {
      try { await cache.put(request, response.clone()); } catch (_) { /* The network response still works if storage is full. */ }
    }
    return response;
  } catch (_) {
    const cached = await cache.match(request);
    if (cached) return cached;
    if (fallbackUrl) {
      const fallback = await cache.match(fallbackUrl);
      if (fallback) return fallback;
    }
    return Response.error();
  }
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await pruneOldCaches();
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    if (url.pathname === SCOPE_URL.pathname || url.pathname === INDEX_PATH) {
      event.respondWith(networkFirst(request, INDEX_URL));
    }
    return;
  }

  if (SHELL_PATHS.has(url.pathname)) event.respondWith(networkFirst(request));
});

// Maintenance hook used by the regression suite to verify stale-cache cleanup.
self.addEventListener('message', event => {
  if (event.data?.type !== 'PRUNE_OLD_CACHES') return;
  event.waitUntil((async () => {
    await pruneOldCaches();
    event.ports[0]?.postMessage({ ok: true });
  })());
});
