'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "da0f57b80c616a11983f8cb8aa2ee6a6",
"assets/AssetManifest.bin.json": "f33cb1c9c45ca6868e9d106175827d91",
"assets/AssetManifest.json": "f185cdeb43865676c88ccab526e92dc3",
"assets/assets/10MinuteMeditation.mp4": "5c2235a8515bc1db79bfbc9a83205e7d",
"assets/assets/AcceptingEmotionsMeditation.mp4": "6bbed55cce50ec94ca07b8783c35c4a7",
"assets/assets/ACTModule1-Orientation/BasicConceptsACT.m4a": "8d6662445870ea8f31283c9a2f5e0aba",
"assets/assets/ACTModule1-Orientation/Orientation.m4a": "c204ab378fbcc616f8073472dad85b52",
"assets/assets/ACTModule2-CreativeHopelessness/ChineseHandcuffs.m4a": "a04c8d6feedba4e5a4baf780e4ff5df1",
"assets/assets/ACTModule2-CreativeHopelessness/InstructionsCreativeHopelessnessWorksheet.m4a": "185c79a223398e911ccc899ed79b656e",
"assets/assets/ACTModule2-CreativeHopelessness/InstructionsGuidedExerciseDifficultFeelings.m4a": "96acabf44ae4907429e869e1316d11aa",
"assets/assets/ACTModule2-CreativeHopelessness/Introduction.m4a": "afe8e4566415e2c700385d891be225fa",
"assets/assets/ACTModule2-CreativeHopelessness/ManInHole.m4a": "ada9ec2f36eadbef983174c1c6ae496e",
"assets/assets/ACTModule2-CreativeHopelessness/Quicksand.m4a": "34572e4b2515f4058b0ee52210b21764",
"assets/assets/ACTModule2-CreativeHopelessness/TugOfWar.m4a": "43e038e9cd4dc52240de9a26a1e9041d",
"assets/assets/ACTModule3-ControlvsWillingness/InstructionsForControlProblemWorksheet.m4a": "2efb8ef25e9ea2e4fcf1f9b1bfacfc37",
"assets/assets/ACTModule3-ControlvsWillingness/InstructionsForLeavesStream.m4a": "9bbbeb9351088287a4b9eda148aaf3e3",
"assets/assets/ACTModule3-ControlvsWillingness/InstructionsForStruggleSwitch.m4a": "ae2f0e26ec851dc5e0180aeb2bac0356",
"assets/assets/ACTModule3-ControlvsWillingness/InstructionsWillingnessWorksheet.m4a": "93030a428a926246cf34254729b64b4a",
"assets/assets/ACTModule3-ControlvsWillingness/ThinkAboutVanilla.m4a": "6807b270d977258004dd212f524905c5",
"assets/assets/ACTModule3-ControlvsWillingness/ThoughtDistancing.m4a": "381c4d801a47f465350fee3021ea1cfd",
"assets/assets/ACTModule3-ControlvsWillingness/ThoughtsAndFeelings.m4a": "c11f083be70c05a143059affb6c23438",
"assets/assets/ACTModule3-ControlvsWillingness/WillingnessAsAlternative.m4a": "91dce8c6949eafee90fc591787cbf394",
"assets/assets/ACTModule4-Acceptance/CaseScenarioPart1.m4a": "49fcbde8009f3b96d08e24a7693f25f4",
"assets/assets/ACTModule4-Acceptance/CaseScenarioPart2.m4a": "2d8d0d691f69f375f5320b56f353e32a",
"assets/assets/ACTModule4-Acceptance/CaseScenarioPart2Continued.m4a": "c78102d6d9cc0f6d768a1c93513299dc",
"assets/assets/ACTModule4-Acceptance/InstructionsForAcceptanceVideo.m4a": "4bf253b964519f604be8b6534ed337e4",
"assets/assets/ACTModule4-Acceptance/InstructionsForCopingWorksheet.m4a": "b3cd415b34935ba9d5691f5232cee477",
"assets/assets/ACTModule4-Acceptance/InstructionsForWillingnessWorksheet.m4a": "d365cc4aa010552ce8cb6ccca9027bd4",
"assets/assets/ACTModule4-Acceptance/ThoughtsAboutHer.m4a": "a06e2afbe9fec21ef59c9b91c8e236a9",
"assets/assets/ACTModule4-Acceptance/ThreeStrategies.m4a": "6ca4d0cf246511ca36074db5340a56bb",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/InstructionsForSelfAContextWorksheet.m4a": "7a7b5f1dc0a05265decf7942ffc597db",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/InstructionsObserverSelf.m4a": "3b299a50f6385bf0d1c048b2e2a84a55",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/LemonExercise.m4a": "479bdc2647bfa207454cdacaeba9b462",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/ObserverSelf.m4a": "30989307f327287087093a0dd0934f2e",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/ObserverSelf13Min.mp3": "c6a69a0938877abd1e06affc5de5b464",
"assets/assets/ACTModule5-CognitiveDefusionAndObservingSelfPart1/PassengersOnBus.m4a": "2f86a64650d7db9d1565fdbca87be575",
"assets/assets/ACTModule6-ObservingSelfPart2AndBeingPresent/BodyScan.m4a": "8ee79e215ac9c874715c7365f13698ea",
"assets/assets/ACTModule6-ObservingSelfPart2AndBeingPresent/InstructionsFor10MinMeditation.m4a": "e259e4fb8ce4b0d70bfaa26a8640ace0",
"assets/assets/ACTModule6-ObservingSelfPart2AndBeingPresent/InstructionsForSelfWorksheet.m4a": "72c6d68409800d689fd1c931d6ff1fdc",
"assets/assets/ACTModule6-ObservingSelfPart2AndBeingPresent/MindfulBreathing.m4a": "e7557cd0331eaeace62ea43b50c6c3c0",
"assets/assets/ACTModule6-ObservingSelfPart2AndBeingPresent/PhysicalizingEmotions.m4a": "f559659373f09e9773ed803caf21c274",
"assets/assets/ACTModule7-ValuesAndCommittedAction/CommittedAction.m4a": "deb46ceac23c21e07c7ea7748a52ee97",
"assets/assets/ACTModule7-ValuesAndCommittedAction/InstructionsForActionPlanWorksheet.m4a": "1316b0394efa1c997b7b6ff93205b718",
"assets/assets/ACTModule7-ValuesAndCommittedAction/InstructionsForReflectingWorksheet.m4a": "8555fc11a521c3b0cbf1710c9ffb84aa",
"assets/assets/ACTModule7-ValuesAndCommittedAction/InstructionsForValuesWorksheet.m4a": "fce1abf99191377bc7aa5b9fc0a298cc",
"assets/assets/ACTModule7-ValuesAndCommittedAction/ValuesExercise.m4a": "8b6678db8209dc3ce808285a5a6546e5",
"assets/assets/ACTModule7-ValuesAndCommittedAction/ValuesInACT.m4a": "706ca6dbffb958f9a596277d05c72707",
"assets/assets/ACTModule7-ValuesAndCommittedAction/ValuesInACTContinued.m4a": "4f3c73d0d173de151f53e28135399ec2",
"assets/assets/ACTModule8-ValuesAndCommittedActionPart2/ChooseToAct.m4a": "bb26c363611c0b7b661cbaecdc3e9ec3",
"assets/assets/ACTModule8-ValuesAndCommittedActionPart2/Instructions.m4a": "87d7f494ed370dc7612a1987eb79b0a9",
"assets/assets/ACTModule8-ValuesAndCommittedActionPart2/InstructionsForActionPlanWorksheet2.m4a": "72894380b5c00e8a6fac69ee6dd9902a",
"assets/assets/ACTModule8-ValuesAndCommittedActionPart2/InstructionsForAdditionalPractice.m4a": "ec740618ba921910d91c98d8cfca184e",
"assets/assets/DemonsOnTheBoat.mp4": "573c3cbbe394ec74cb6cd0bdc7caeb5e",
"assets/assets/GriefLoss.mp4": "d2682a50aa623ff477f08e7f4692f46c",
"assets/assets/images/ahan.jpg": "9b387a45d30feee53410c13ef4e0e209",
"assets/assets/images/Hee-Lee.jpg": "d812eeff0a8b0612673b464063baa3cb",
"assets/assets/images/Jiaqi_Gong.jpg": "90c73d993bd9f97747c164c9dfbaaf1c",
"assets/assets/LeavesOnAStream.mp4": "0a297a075c56b1c1d19e457e07facf7d",
"assets/assets/MakingSpace.mp4": "437a682218ecb793596b4ca089c955a1",
"assets/assets/ObserverSelfExercise.mp4": "de949940eb0dd1281558730339dc4384",
"assets/assets/PracticeExercise1.mp4": "02bfa7e9c7e70574e31631a03f05a542",
"assets/assets/PracticeExercise2.mp4": "10633ed464c920156f08b272f345f111",
"assets/assets/PracticeExercise3.mp4": "168f521f9d275cfd2f2dd6c9c3bbc584",
"assets/assets/PracticeExercise4.mp4": "9db40c3e9953efd2b988fb99f75a2846",
"assets/assets/TheStruggleSwitch.mp4": "a8487963e6554e9cf11b7c0275a8f279",
"assets/assets/Training-Acceptance/AcceptanceAnxiety.mp3": "931fd2b57b8794ccb3af4ab9a6ce56f9",
"assets/assets/Training-Acceptance/LocatingEmotions.m4a": "e45a6c9f6e5a0539b21c812ff83fe598",
"assets/assets/Training-Acceptance/MeditationWorkingDifficulties.mp3": "f1c3b3308429f45368a634e085a48c43",
"assets/assets/Training-Acceptance/MindfulnessEmotions.m4a": "55b01ddd61114c17ed959486e9df488c",
"assets/assets/Training-Acceptance/PhysicalizingEmotion.m4a": "f4a06937df6afc22adc93a17bdfc1386",
"assets/assets/Training-Acceptance/TakingAction.m4a": "2e2a1e565d90908b90a69ed699d707e4",
"assets/assets/Training-Defusion/DisobeyOnPurpose.m4a": "384c71b7e6257aef2e965ac91360be75",
"assets/assets/Training-Defusion/GiveTheMind.m4a": "f31b5c694153942006da9a6d323874a8",
"assets/assets/Training-Defusion/HearingYourThoughts.mp3": "17926c1a7c291da5fc73a3eb673be07d",
"assets/assets/Training-Defusion/LabelingThoughts.m4a": "eaf1d07464d2e2a2efcb4943680a36bf",
"assets/assets/Training-Defusion/MovieScreen.m4a": "be8969bccb99040d72018d07169bfa4b",
"assets/assets/Training-Defusion/SushiTrain.m4a": "e5a0204c7ea384cda874445731a011f1",
"assets/assets/Training-Observer/BlueGlasses.m4a": "a4af4dd768a0339c468c1b896da166af",
"assets/assets/Training-Observer/Chessboard.m4a": "e397a708a7d445f354c10d92fc4bde00",
"assets/assets/Training-Observer/ObserverSelfMetaphors.m4a": "38261ad0cbb5152b4d5547075ad6fa71",
"assets/assets/Training-Observer/TranscendentSelf.mp3": "13d7a2bc9ebbf56dbc69356a04b79082",
"assets/assets/Training-Present/Anchoring.m4a": "79272d891f89469b9f6a20b65db016d8",
"assets/assets/Training-Present/BodyScanMeditation.mp3": "7aa14bd00fa5c9ed3e3c436a03898f04",
"assets/assets/Training-Present/BreathingMeditation.mp3": "2481bfa3f2f83a7ed5e992f3b346c1fe",
"assets/assets/Training-Present/MindfulActivities.m4a": "becfff09869de8ec73c64be18c2efb2e",
"assets/assets/Training-Present/MindfulBreathing.m4a": "fd76d9d438a852a32bd736013f74f221",
"assets/assets/Training-Present/MindfulEating.m4a": "1544f00ac08140eaa1f81ec021228476",
"assets/assets/Training-Present/MindfulnessOfBreath.mp3": "0b4bada3f6580cc1966bd1fcab565bad",
"assets/assets/Training-Present/SoundBodyMeditation.mp3": "c9c2cde0d1475fc0dc340480c4111d5a",
"assets/assets/UnwelcomePartyGuest.mp4": "d4b6bf5096663ae3e0f34f64133d3b36",
"assets/FontManifest.json": "797892e376b6ed09513e57e4841de795",
"assets/fonts/Courgette-Regular.ttf": "cbd252f5c26cd61243888be1891f9921",
"assets/fonts/MaterialIcons-Regular.otf": "b064e95af907141637f5af9f856e6f9f",
"assets/fonts/MaterialIcons-Regular.ttf": "0f900b1d6585ac3d1cdffa01f420472e",
"assets/NOTICES": "eea72127f45329d4d461e8f4ea29c446",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "cc9457856ff4ac8c53e8e5159c2636f0",
"assets/packages/survey_kit/assets/fancy_checkmark.json": "ba198bdf17f5a9a97e89d74c61921edb",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "32cc31c7f950543ad75e035fcaeb2892",
"canvaskit/canvaskit.js.symbols": "bb7854ddbcaa2e58e5bdef66b58d4b47",
"canvaskit/canvaskit.wasm": "6134e7617dab3bf54500b0a2d94fe17a",
"canvaskit/chromium/canvaskit.js": "6a5bd08897043608cb8858ce71bcdd8a",
"canvaskit/chromium/canvaskit.js.symbols": "f23279209989f44e047062055effde63",
"canvaskit/chromium/canvaskit.wasm": "ad6f889daae572b3fd08afc483572ecd",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "dc16cade950cfed532b8c29e0044fe42",
"canvaskit/skwasm.wasm": "aff2178f40209a9841d8d1b47a6e6ec7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "5de281a37b2308e43846d3a0b545c921",
"flutter_bootstrap.js": "cd68efdf3cbeda199058438b36c85e01",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f0b1821f9cefbdc8ddd8273c664f08da",
"/": "f0b1821f9cefbdc8ddd8273c664f08da",
"main.dart.js": "ec88db912d5ef3a271193293a877792a",
"manifest.json": "17866c5dc455070d0c4934d9b0e50cc4",
"version.json": "504bcbc18337c9784bdf96e4bf415224"};
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
