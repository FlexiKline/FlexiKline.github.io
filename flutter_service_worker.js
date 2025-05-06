'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4b427413f71af3d882354a08e12523dc",
"version.json": "b0a81b2b8ea5e65a6b9004ec987e79ea",
"index.html": "a2667b5b49da4d39ef1a58bace53bd50",
"/": "a2667b5b49da4d39ef1a58bace53bd50",
"main.dart.js": "9d3906d9360a91372ee25ff525f7b323",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "659584f84643e60d0a4a69b81ba2b106",
"main.dart.mjs": "5626ebff7c18cd8fadd6b807b6ef84a3",
"icons/icon-192.png": "e8acfecbced240f5f73e80609a1fdfd9",
"icons/Icon-maskable-192.png": "e8acfecbced240f5f73e80609a1fdfd9",
"icons/Icon-maskable-512.png": "7e55b93f0c002827872aa3981acbfd81",
"icons/icon-512.png": "7e55b93f0c002827872aa3981acbfd81",
"manifest.json": "6d47c74d0432df094af01f8a66e9d37d",
"main.dart.wasm": "0875dbddb6b65acf3b9ce85e11b44a5d",
"assets/AssetManifest.json": "28c30514bb3ffba2f14004c402c7fe62",
"assets/NOTICES": "71c2a55acacfa363283d50680a133799",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f80e7b5ac28ba62ab2df03f25fedea70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2694fa52cbbeee5883e5dfa9a6990f01",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4f5fd500c858386c0fa6de4c1d855806",
"assets/fonts/MaterialIcons-Regular.otf": "8f06971298b2865c4e58070fe862f9ac",
"assets/assets/imgs/magnet_mode_weak.png": "21f2e031b3888c16d3bd0fb4f65664ac",
"assets/assets/imgs/logo_round.png": "3d2e4c66a86d089491d9c301d5556e26",
"assets/assets/imgs/continuous_drawing.png": "18b01c1b61424569196a79e444614280",
"assets/assets/imgs/horizontalTrendLine.png": "7b77c7e5def7fb33c2158c28e56a6dcb",
"assets/assets/imgs/tripleWaves.png": "af3dff52958bf95349974dacc22ac5da",
"assets/assets/imgs/priceLine.png": "51e5e9dd7e9b4498e5c590dd1e2e3c0c",
"assets/assets/imgs/trendAngle.png": "85512b4c61385f8f712a5d0198c5b0b8",
"assets/assets/imgs/fibExpansion.png": "a707fdb8beef6bb40d075f0c054d4888",
"assets/assets/imgs/horizontalLine.png": "259f8d7f4145a3f892373449270ecdbf",
"assets/assets/imgs/lock.png": "fc3eb5795846ffebd5a91562d926d136",
"assets/assets/imgs/fibFans.png": "d49b86dc33c3af3bf937913654719d36",
"assets/assets/imgs/visual_order.png": "2ab6303001de977133fda2e0e91b680a",
"assets/assets/imgs/pentaWaves.png": "d56a7032f64035f598e28280649dd248",
"assets/assets/imgs/rectangle.png": "748186de5ce1340168299b15534e81c6",
"assets/assets/imgs/horizontalRayLine.png": "d068216421f8dc06b3ff5db8431c9609",
"assets/assets/imgs/verticalLine.png": "a88cbf40568df5fa95c5c2ed951eb5fd",
"assets/assets/imgs/parallelChannel.png": "5d024a6c1da38932f66575c58d78a3ff",
"assets/assets/imgs/trendLine.png": "8f2f43a297fd53d6604d4ea14e162fb6",
"assets/assets/imgs/line_type_dotted.png": "71101463749e45744829d2606b551d71",
"assets/assets/imgs/line_weight_4.png": "5084e056aa0ffdc607a87635c7097512",
"assets/assets/imgs/logo.png": "c1abe8b52b0e9541a72f80dcede6aef5",
"assets/assets/imgs/line_type_dashed.png": "cad5c8a232514b3ef70ccf7237fcb02f",
"assets/assets/imgs/extendedTrendLine.png": "9fd37e25e6d7a23af31d078709c3844a",
"assets/assets/imgs/line_weight_1.png": "afd2a17394dfe312b4c19af8cb607315",
"assets/assets/imgs/line_weight_3.png": "8629bb6665e320729be2eb0dc4fbef6c",
"assets/assets/imgs/crossLine.png": "8ab021b0b04260d96aaacaa8de146f3e",
"assets/assets/imgs/rayLine.png": "3bd1df4dc548f0de6ff80186576f76ed",
"assets/assets/imgs/line_weight_2.png": "f24303b5e1d9d18ed415e5b863e6247e",
"assets/assets/imgs/delete.png": "a6ec1e546770e194b70a51360c747ab9",
"assets/assets/imgs/unlock.png": "4c76fbbce48dee901a64acfcf3628b55",
"assets/assets/imgs/line_type_solid.png": "f24303b5e1d9d18ed415e5b863e6247e",
"assets/assets/imgs/arrowLine.png": "ca3f15bfb20b1bc008b8dfe7723bedb6",
"assets/assets/imgs/magnet_mode_normal.png": "21f2e031b3888c16d3bd0fb4f65664ac",
"assets/assets/imgs/magnet_mode_strong.png": "d110d13ed4eb166d1a064fbf190c2c14",
"assets/assets/imgs/paint_color.png": "68022a1e1329e3e070047d6b222bd4b4",
"assets/assets/imgs/fibRetracement.png": "fc263c6be40cd8267147c61d26e35c0c",
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
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
