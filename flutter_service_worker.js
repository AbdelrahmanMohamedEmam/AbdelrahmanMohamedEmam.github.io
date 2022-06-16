'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bf8f6cf4262c18ebba17b0c0d0da0eec",
"index.html": "736eb94f23d094b7106c9459f52d8d60",
"/": "736eb94f23d094b7106c9459f52d8d60",
"main.dart.js": "e2c015b6dc6ca8d1808e8c95129f7192",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7b753027d8a0b3d6d9784b6a42b9a459",
".git/config": "31e8318c678670f7724da68e2ddf0285",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/3e/5f052c747d0ef52b140e6446d097500db20c03": "5593e999bf279d7dae7eb73f4c8ec503",
".git/objects/57/c646073a5643e5f490bc4919f93396ef94c3d1": "8c82d4c16c4c700aa917c8dac494b881",
".git/objects/3b/17a5b3ae99ac0721fe35724c737c0c79310ed9": "4ebb4209d3597aaee4471bab42d24be4",
".git/objects/03/f2227b4ba3a6b6fa23553349d965fff79280c6": "f48e3d2faede710115363ed3ba524c24",
".git/objects/04/d772f4fd9e3759bad73c3036f4a7693e343f7f": "41510e97c6f2bccd19d24d89ab537867",
".git/objects/32/5d4de049035009678cc4f2c2d8af1baac086e8": "19395f16aedb382d312d245fc0a58dea",
".git/objects/69/55922357d84030a33c7a8959a6eaafc537fc6f": "672146a86a0de46641533c234bacea88",
".git/objects/3c/a48068371dded125f2456571714edf48d3e956": "a2aeaa44e702e8b01ee870578c592abb",
".git/objects/3c/c2477df7ce1fc43ae966bbd219d766cf6b1ea0": "e1f842ff624435d413cb06ab035d3a4f",
".git/objects/67/432402f0ea85287b403ea8dfdb1a9e123423c4": "9f23d583dabe7e863d3ee87550089632",
".git/objects/0b/6585788910e4329c08c5a96ba40ef9cfbdd27f": "f958aca8660d3e31165030e8d0f5f78d",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/60/09014d6c61a8f794a21ebf5d5086f5d7e9667e": "3694524b06324315686c1e756c974965",
".git/objects/60/a6f4d5be7dc32afaaf4e287e1e463d183d53d6": "a03ce662d7cf5a31dddd75490f4c1593",
".git/objects/33/a07b9096aef5cc0708b17d87add5d7575fd2e7": "2e2084fd2648fb2d74bb333f15274784",
".git/objects/a4/9ef2a701ae970112062d9ca96d3831c3e18eba": "0400d3b30f458d6be1dfabf2ddb00b49",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/ad/fdc614283a0e042b466db8f88284d5266b9edf": "7b631700a165853364d6fe19dac2b7bc",
".git/objects/be/4cd1793924c4c09ee3c2ed1223edc8dae0d4dd": "4bef6d99f659f1a6bda527fbfd8c765c",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/da/ba128707c5226c0831d6d9605265143e486b4d": "f880ffac65e14ae756b428f824d300ad",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/78b3223f569a8d6b9dca7bf583496df1d3d0f7": "fe77a86752e4e1d50ed01b1edd44cda5",
".git/objects/c0/19c490b0d5dcddccb9c1c93587f6ea8ccdbc2f": "f55717945ce5da0b06d7cfab287a8929",
".git/objects/ee/06df227196943bf20a120a2b69832a497cee7e": "dad243f66559d2eeb57e4b4dc256e683",
".git/objects/f2/1d5334a20cf3c90bdbbd6b77e3e3cd9f1c8d9c": "81f3a2c9981b72c3f08b98799334e886",
".git/objects/e3/c5f2278b47d2d13eb7335efdea8f732233f773": "fada94e55b46f6b421085c8f37a7fd22",
".git/objects/cf/8a4c8ad42d69082595378586ddc80510c9cd61": "1aedc1afb345ce13c85f0e0b5efc1bbe",
".git/objects/ec/9023abee06049bec6868906e151f9c286766a6": "24c5eca7a763a30c0d5992af1ee36754",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/67c43d54baf7a5267f2cc8f9041a048f76fc34": "2e5b6e21d4a46c0bc2e9d729ea7b9095",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/89/b035e09979acdca03fa5d0581f14a50909dedb": "77aa5181c72d3dfcc5960aaa6c256332",
".git/objects/1f/bfeeb22284b4d229c027d72a38b93cbf8f4f45": "9a437280458548e6b05b9f1ae7d551ff",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/1435da785bb2667d453cc07f6cc13a6fb47427": "db2aefa9301e684a8d099758b13c1fa1",
".git/objects/75/c328fce1a167c400bca9c43d273687520c85c2": "10ab12bcb83909a6cb07bfd06e5b890f",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/9a/2800b06b83524a08e69e2640d0cde005276a73": "3b1a81890826aa572149500f7f8b05f7",
".git/objects/5c/7c9df5a72e3cefb2653e2034d33d3a8901886f": "6d0aa5cfaaf304bb83edccb9b853b235",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/30/c6f30b37b3065f027da1c91ffcfff2ccb1699c": "978665be45aa7c83041713242c10004d",
".git/objects/5e/22a22b26d746c797ea413cd0195788eaa1b834": "3b83707b98f74831654cbcdddde8d184",
".git/objects/01/d7e1144614270fa66b9f1c1fa0a32ae1eeca26": "a0789d1b3be5064491318f2cbb0bc76d",
".git/objects/63/ba18dbd5f36753dc7b62a804d6ebb06dd2c6d0": "936e336ac588e3502b40a809c997c4c0",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/d4/726ef2b4246b247cd2d5aa476aa90e7662fcda": "2448304e19452a4997d370b1765debdf",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/d4/979ddfd86e701b0ba0ca68b12f4e01544fae54": "210b4abdb994367284755b16c16cbaea",
".git/objects/b6/3a55b4be6f4e4ca797a0ad5d21cd2c1aee531c": "ec891186eec80b47d05564ca0467168d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/7150884687b1c651e3751fbb615df33e323bc3": "e4e6e99f3aad70f6a5d5f530fea9685e",
".git/objects/ea/e88423d367f282cf4bca9bff7fbd444bb3e348": "35078aa804d7f4b38b273e87b156a8aa",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/3144291442b0378a66e24a4ee4e65a06c4b1fb": "621666c72236ee67b2e78e017dd67f14",
".git/objects/e7/9b64649b40e693590bf39a4906ace7bc5256ff": "e1f1dadf1cf503c9108c720564720d8c",
".git/objects/e7/a9a00d2bca65077420aa6637319463eab0822a": "e8e1dff84feee5c21437d0e51866c463",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1e/23ded7d7b6443db5762362656d8e5bd9dd2d71": "36ebccc3ec64dcb907ee110e8047d0e9",
".git/objects/1e/cc8b6c77986492b09f0d594926ba8b5645d9cd": "0377132134e795612659f1fbd3ba53ad",
".git/objects/24/3aadaababff828f462cd11f85a4abe91ad5114": "eceaf9219e5bbe5af39fd64ecabb6d80",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/2367c6029b9ac18cf4b3f3b196937dbdddf50d": "24ba8b40dc8409af29a14673a89fd2aa",
".git/objects/15/547024a59dd052be876932d88a730cddddccfd": "33e89f43ccdc67b173781d3f458557f3",
".git/objects/85/d6405cea8db7f8d08a8fde5877596ca29dec32": "25ca13111641cd5cd5f1cd82f811b6cd",
".git/objects/85/c69a6bf9df70c6d743f5f504d813c6f6a6b9b4": "90553b3f1dbd11745a9172cc2afeb613",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0946969de4c79fc09b84f0dc5d6f2d5a",
".git/logs/refs/heads/master": "0946969de4c79fc09b84f0dc5d6f2d5a",
".git/logs/refs/remotes/origin/master": "76a6e3f64d380723c77bb8903fbf90e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "e200ed330e1e631dcace8125bcc581b1",
".git/refs/remotes/origin/master": "e200ed330e1e631dcace8125bcc581b1",
".git/index": "ee00f022240665d8ef70ae48418486d9",
".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
"assets/AssetManifest.json": "0b00ef0af5f169b83055ad5c7b39dc52",
"assets/NOTICES": "fe0cda05f91205be054579184c4dc275",
"assets/FontManifest.json": "8a8e8bb7516ac34e740c3674d9841f8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/research_icon.png": "b1d53ae2cd9ed6515d09aad4cf99ef21",
"assets/assets/ziad.jpg": "f7392764b4a2f4cbda5624d2e32dc216",
"assets/assets/logo_and_text_side.png": "53cc7f7530f68f97000101cc81483522",
"assets/assets/neutral_sentiment.png": "4c021faf7697130824d7d3c457ea5836",
"assets/assets/website_prototype.png": "48db89dc7335fc311130affc8075f15c",
"assets/assets/hotel.png": "66c2f814387341d3fca7c210e4cf3ba9",
"assets/assets/text_logo.png": "581f9399f9bc8aa6b685ff175009e164",
"assets/assets/positive_sentiment.png": "877819d01179a702439a786a5e17e4ee",
"assets/assets/emam.jpg": "58c82afb23c59e04dcaa6abefa158f57",
"assets/assets/restaurant.png": "d251d99d0455f1000230f98418a3ac1e",
"assets/assets/drMayada.jpg": "429840e9141ab55b4e1b6379bba6d032",
"assets/assets/mahmoud.jpg": "860926914f459667e8cb553ce23067c3",
"assets/assets/document_icon.png": "63b74377ca1f8f13521493814b9c2599",
"assets/assets/logo.png": "861b633656a859c63b18d7c12793ded3",
"assets/assets/asfar.jpg": "42f20faa56c0a18d11ba3b7f85bab76d",
"assets/assets/negative_sentiment.png": "acd7d9d0c1be91804dc9f432649a4c90",
"assets/assets/Sprinkle.png": "8a789607b663289731451394ff4c2571",
"assets/assets/Meteor.png": "40d5378b0c3cb42b0405886b876d06cb",
"assets/assets/uploadIcon.png": "319a4b1631fcbe04a5d0b887be7ba793",
"assets/assets/more.png": "2eacb468d3a78e3264c31ef238ddc3ba",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/bigData.png": "c8a1b550240ec48724f32aca51bdbec5",
"assets/assets/logo_and_text.png": "9d43dec3c15cf7c9daafc0a42dbaf7fb",
"assets/assets/coding.png": "6c73ade4a8ebd8e571dadca0bb6434c8",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
