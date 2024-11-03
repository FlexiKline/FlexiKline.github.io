'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "54f9fb659fc7ca2a26da2d804b843427",
"version.json": "dded867fd13367c70c2012d3359294d5",
"index.html": "58fda4151a6b2367194dcd66129c79f1",
"/": "58fda4151a6b2367194dcd66129c79f1",
"main.dart.js": "e99f1fb9dd9029bd3cf129b104c1d8e8",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "659584f84643e60d0a4a69b81ba2b106",
"icons/icon-192.png": "e8acfecbced240f5f73e80609a1fdfd9",
"icons/Icon-maskable-192.png": "e8acfecbced240f5f73e80609a1fdfd9",
"icons/Icon-maskable-512.png": "7e55b93f0c002827872aa3981acbfd81",
"icons/icon-512.png": "7e55b93f0c002827872aa3981acbfd81",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"assets/AssetManifest.json": "3d9ff27f40f0c1ced07c98712b056412",
"assets/NOTICES": "b2eacb9867945bdf07e87556238935b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8cd98e8c000d30016a1b1281c4ad0589",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6284b833aee65a8f601935955df9f72d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8efc85b52da23c3ed792fea476535d35",
"assets/fonts/MaterialIcons-Regular.otf": "4b47cb95d6ad6d9b242740efe5b97f87",
"assets/assets/imgs/logo_round.png": "3d2e4c66a86d089491d9c301d5556e26",
"assets/assets/imgs/logo.png": "c1abe8b52b0e9541a72f80dcede6aef5",
"assets/assets/svgs/parallelChannel.svg": "92970e5a90f2d33b6ae68e53bb2da0e5",
"assets/assets/svgs/verticalLine.svg": "61b1c3b025893ee1b24fcce560196b75",
"assets/assets/svgs/horizontalRayLine.svg": "d87e447d52063a593cebe40321a76c5c",
"assets/assets/svgs/rectangle.svg": "4a63be27b7f7e2a9499ad6cecf1e8fb7",
"assets/assets/svgs/visual_order.svg": "4e5b658d47e59378fea7a620e7a15b81",
"assets/assets/svgs/fibFans.svg": "f41ff8a8c6892e57a8b790fadec342b2",
"assets/assets/svgs/horizontalLine.svg": "c31f03a9198660153932c0a7c3aa7a9c",
"assets/assets/svgs/lock.svg": "9fc5578526226eaea2cab12b1684fa1a",
"assets/assets/svgs/fibExpansion.svg": "89e7ec56ac5f36ce5ba5f9482fbe2a5e",
"assets/assets/svgs/priceLine.svg": "b0b325f46ace72d783e37cde9d45b30d",
"assets/assets/svgs/trendAngle.svg": "10019db2ed21a8be7811b6ce658c0b6f",
"assets/assets/svgs/horizontalTrendLine.svg": "5edbc98027de5a0441c44b45b5aa8d0a",
"assets/assets/svgs/continuous_drawing.svg": "10896a98882f120b81773a482d103f96",
"assets/assets/svgs/magnet_mode_weak.svg": "7217681e824d09329fcee1d0b4ee6427",
"assets/assets/svgs/fibRetracement.svg": "368cc2948a4e5568f0247bb672a0245d",
"assets/assets/svgs/paint_color.svg": "5251e9e69e01b6cd4f75b0cbc3c9e775",
"assets/assets/svgs/magnet_mode_strong.svg": "e8feeff92658fb8b3a24a6e71364d3dd",
"assets/assets/svgs/magnet_mode_normal.svg": "7217681e824d09329fcee1d0b4ee6427",
"assets/assets/svgs/arrowLine.svg": "1d63da2b15d15d561a31d38289cac14d",
"assets/assets/svgs/line_type_solid.svg": "1736242a56f8ae84d524bdb5361b1ac5",
"assets/assets/svgs/unlock.svg": "283d1390d2ad1c90e104f300d5aed995",
"assets/assets/svgs/delete.svg": "cb8088f200063cfd19c7ed491e2f92a6",
"assets/assets/svgs/line_weight_2.svg": "b1970144577441ffe1305689093fd9e3",
"assets/assets/svgs/crossLine.svg": "8e517ce1230e6d2a400358424b6e6c27",
"assets/assets/svgs/rayLine.svg": "8a23bfa0318635ffcc5729c7fb219267",
"assets/assets/svgs/line_weight_3.svg": "40da7b517aaf8b6bd6d9879607968275",
"assets/assets/svgs/line_weight_1.svg": "334cc4cbd0346f922e2223c75d79042d",
"assets/assets/svgs/extendedTrendLine.svg": "e1391e813ad3ff37af8c74398b08b0e1",
"assets/assets/svgs/line_type_dashed.svg": "6a93824ccf7a333bd3088078fbad6168",
"assets/assets/svgs/line_weight_4.svg": "975a736c2f94fbad2f9f945aacb718a1",
"assets/assets/svgs/line_type_dotted.svg": "134095b3318b9519657177d2124035ba",
"assets/assets/svgs/trendLine.svg": "e485031a22af73c530423220c16ca297",
"assets/assets/ok_kline_config.json": "d41d8cd98f00b204e9800998ecf8427e",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
