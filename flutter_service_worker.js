'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d1f84be9dde2b2cac0eac5b8b48ed48b",
"version.json": "2d212ae57f8f669427189425289955f1",
"index.html": "1d6273b0334131f21c16731e6abfc374",
"/": "1d6273b0334131f21c16731e6abfc374",
"main.dart.js": "338c5f78cf25289cf2c14ae43c212b96",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"favicon.png": "659584f84643e60d0a4a69b81ba2b106",
"icons/icon-192.png": "e8acfecbced240f5f73e80609a1fdfd9",
"icons/Icon-maskable-192.png": "e8acfecbced240f5f73e80609a1fdfd9",
"icons/Icon-maskable-512.png": "7e55b93f0c002827872aa3981acbfd81",
"icons/icon-512.png": "7e55b93f0c002827872aa3981acbfd81",
"manifest.json": "6d47c74d0432df094af01f8a66e9d37d",
"assets/AssetManifest.json": "df495f0ec6ca50025d1262e489ad622c",
"assets/NOTICES": "4cafc916511f350380384a262ae39f22",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "116ef801bc631768d74cf02978234a6f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6284b833aee65a8f601935955df9f72d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "792d10c8fa72f65ef4a25ebd1ebe914b",
"assets/fonts/MaterialIcons-Regular.otf": "a9ad5a5c95d309e4e18636c91adbe410",
"assets/assets/imgs/logo_round.png": "3d2e4c66a86d089491d9c301d5556e26",
"assets/assets/imgs/logo.png": "c1abe8b52b0e9541a72f80dcede6aef5",
"assets/assets/svgs/parallelChannel.svg": "bfaeb6f6edc0aeb9f32f483360f843b9",
"assets/assets/svgs/verticalLine.svg": "8d730ed322ccb55035092fbfa36e744c",
"assets/assets/svgs/horizontalRayLine.svg": "f8104789299629297cd14887a89392d4",
"assets/assets/svgs/rectangle.svg": "1905c13775a93cd1aebe4d120e8b3653",
"assets/assets/svgs/visual_order.svg": "095d8adb15790d1506dc49927c4a5831",
"assets/assets/svgs/fibFans.svg": "74f37fed74e6270dc917a630297d1a3f",
"assets/assets/svgs/horizontalLine.svg": "16cc02e340b0b6edc37e849221bfb0bf",
"assets/assets/svgs/lock.svg": "7503a79b44fa15fc46af57552c210576",
"assets/assets/svgs/fibExpansion.svg": "2882aa4a9877b28cef97e83d540e5732",
"assets/assets/svgs/priceLine.svg": "f061f140ab00378a655a146616d9bb34",
"assets/assets/svgs/trendAngle.svg": "c5a11921c897208745e2b0bffb202942",
"assets/assets/svgs/horizontalTrendLine.svg": "8b2014a350eacf87708010098da3be77",
"assets/assets/svgs/continuous_drawing.svg": "00395ea656115a46df871c2997991329",
"assets/assets/svgs/magnet_mode_weak.svg": "7217681e824d09329fcee1d0b4ee6427",
"assets/assets/svgs/fibRetracement.svg": "5f065eec468d9b595d6cc706756710ab",
"assets/assets/svgs/paint_color.svg": "e43c40867a7397936f227723902166fc",
"assets/assets/svgs/magnet_mode_strong.svg": "e8feeff92658fb8b3a24a6e71364d3dd",
"assets/assets/svgs/magnet_mode_normal.svg": "b73d042fbadc700995a92cda1cffefe1",
"assets/assets/svgs/arrowLine.svg": "64f7395a8c4294176227037c9e4f818e",
"assets/assets/svgs/line_type_solid.svg": "846eeed99caa261d592b8a6a59091971",
"assets/assets/svgs/unlock.svg": "37f115667e75fb0cfbc0819e745b9097",
"assets/assets/svgs/delete.svg": "ed283561be1db9b46acb3b4a8606deaa",
"assets/assets/svgs/line_weight_2.svg": "846eeed99caa261d592b8a6a59091971",
"assets/assets/svgs/crossLine.svg": "7f7480f7e6ca1249302ef1761374f3b2",
"assets/assets/svgs/rayLine.svg": "06e715c1937581fb0d43e2d8ce4721a4",
"assets/assets/svgs/line_weight_3.svg": "c8dcbce1e05ff094b8abd76f96e10ae2",
"assets/assets/svgs/line_weight_1.svg": "8d6423ee6f5bc6a83047867962274003",
"assets/assets/svgs/extendedTrendLine.svg": "50c204f0b0b246987ecaee4c00d20f52",
"assets/assets/svgs/line_type_dashed.svg": "19cb20e6da4bf33d3927b163284af252",
"assets/assets/svgs/line_weight_4.svg": "39a20f71d5756c49074afda31ebb48ce",
"assets/assets/svgs/line_type_dotted.svg": "6bb8a2fb8e5ac420434aaf65ef9a20ea",
"assets/assets/svgs/trendLine.svg": "c008f389baef6a266451ecaa28ad6c6a",
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
