'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "231fcb20bc96da95bf12f6b5da18bd5f",
".git/config": "7852531cac4f7401da4c04af45a7bb2e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "af123cf5980f970109c6cfcc72fe316e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e5a00eb01af906e4deb722e770000ce0",
".git/logs/refs/heads/gh-pages": "e5a00eb01af906e4deb722e770000ce0",
".git/logs/refs/remotes/origin/gh-pages": "13c31bf20dacfd701aae9b3a0ee86a0f",
".git/objects/06/4f2374d63f897fa798ab4607a40195a67fba41": "fa731bd4f2c64d5e95a2fb96aedc3dd0",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/a8591d23e3eabf1d52a47682e870df4babe5ca": "6333239454eb81fd3965b0a68e41993e",
".git/objects/2e/aa08990b1d7ffc368645dec37ec479315656ca": "634dc2fa6064ea5bd85bd1ac1a57a1cb",
".git/objects/33/54296b2297b2b1baa60bb4992487be2b324f55": "6f916855f5149fa215d29800b80d0c47",
".git/objects/3f/5a52884d27fb8dedddc9a15ba31d1fdcacce36": "4c05ca68dd7d77fd69016c7ea49754ab",
".git/objects/4b/0dca8d85ed7fc1d36ad4997ec1a6c35aed0f44": "d979f49db3b4cfe37dca0866d07f6825",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/b058ad034a9a2aa35cdfeb8a79fafc2e0fea01": "bebd8ef7161fad3b83cd382ce420966d",
".git/objects/58/0a633229889c5b72025a177558da34cb853e94": "396bf1b5b78088f26b522a7de5c9be09",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/15da9213927b203937aca8b599655d78f29320": "1904b570d3e651dbbd6732e176a1e486",
".git/objects/61/26b995ef1fe9d654af0147d4cfffe4278597f1": "2ab119b83fccd566c9c54d5b1ea0af3b",
".git/objects/62/29151b65827a93ed493f747bad15581312d937": "e9548143f3efbe43ffb48a969e6bdb61",
".git/objects/65/2841bb0c10c939a7639ca19f52f5903c86478d": "4b37484d929942524180506e982c5289",
".git/objects/66/207b339252ff1bc315d9efdc8d39f8cbb19b2a": "7b8db96e6fac1921b12aa1c311108c5b",
".git/objects/6c/8ee7e607e981385e3d8c0be31664fa08f318c2": "4366e8d653f5ad0714dd57b6ce7d4d19",
".git/objects/6c/f3909dcf06843448abd1cb73a8a2e1346b99f7": "12e4405cdfae40155cd8a3ef5a7ad4d5",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/a7fcead680e4dba93c8fe86c76827048a2c27a": "13851f9d908f8e5268eea6a81fca95d5",
".git/objects/85/53e15376fe5d3aa806198f67cac2ffa7baf754": "70262195a5a113c60e44dfce214588df",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/1badfeed710f09b5540ec92dc16bdc0a7aaa6b": "6affd98618b4e0a38805c5046b3f1873",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/91/fd48a5aa5e44402ff009330a88777d735b1dab": "1249f28a3987ee71f1cc11a27cf0e4af",
".git/objects/9a/68b717708c752c0ea487e873bf29692f972432": "a594f9d408d9d147b4e1447fff406a4d",
".git/objects/9b/5eb521e738d73f7b3c9d0039b0323407b8acf0": "1cccc6c7497ecba2421a56f203224ddf",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/fffe8146e3ba1df8618b555a9b6f335a1f4f16": "afdb06d0a620a1330cbf8a7963a5ab30",
".git/objects/b2/3204950f8691465ec3a0423f4d0a9decd9f349": "32cf5fa569fe7661492842fb40e9a484",
".git/objects/b6/d1728bc37842be44aae99f1b18c1633d6c8a54": "600436c2cf71cd333f347ab26cef2d5b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/be/3184f8ab9f1f749f984f44d8e53c1d791c69b0": "998d8b27a3a2c4404e1cb668f1fa7ed5",
".git/objects/c4/363b701f5c468e97e141b959af51745abdd639": "937680041ef7265fa5e8b925b0b7adf1",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/5a5c29c56d608528c9744f47821a2f59206e06": "05e25b64703902a0f753f201e662cada",
".git/objects/d3/73407a6bea57ff17af84b533e97542b7545548": "7fd9cd9f789c1e33d8adc05eb12c724c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/ea/725c826ee8de860d285d396fa6c5abd30a0663": "37be5ae7eb1edb5ec91020951d430b27",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/058c913d11383af8e72d02e5f5d5c209375c00": "a620258f33a67490979da17a84e7b1af",
".git/objects/f4/b5e3b510ea9f039e686374b6a95a3a4a9198ca": "fdd87f46743e0e3cb989332fc60b9b0f",
".git/objects/fa/2033c83e200c6c83e05fe0234fdcb6c66feb39": "91611ccb4f7f9c0f7aa6f08f0c9c5d6b",
".git/refs/heads/gh-pages": "ed79ee5afd7e96643ca84167dd805e27",
".git/refs/remotes/origin/gh-pages": "ed79ee5afd7e96643ca84167dd805e27",
"assets/AssetManifest.bin": "c26b6d43cae29261168fec1d9b1eca1b",
"assets/AssetManifest.bin.json": "22833ec0451ebbf1b518130c3cc3b952",
"assets/AssetManifest.json": "18026d69bfec4d08497bd9dcab1893c0",
"assets/assets/logo.png": "09bdbbef35cd6c1e963309a9bfac238e",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "109f9b84963e2373234cdc50bbc4c545",
"assets/NOTICES": "04986863e9071f2c02d1d991b514aa4e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a53baa14911df76a48506ba22ea66b91",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "60c8c192e5110a5f16497f284120a843",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e8351d08b029e9712c8bbbd1c42d7282",
"/": "e8351d08b029e9712c8bbbd1c42d7282",
"main.dart.js": "32b622b0a7ff68c0ce4a998abf990c6b",
"manifest.json": "0b67a9ef9b63078ea206c9bda45cab41",
"version.json": "869e01d4529e11ce65412410108d8884"};
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
