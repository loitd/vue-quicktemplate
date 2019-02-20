/* eslint-disable no-console 
https://medium.com/progressive-web-apps/pwa-create-a-new-update-available-notification-using-service-workers-18be9168d717
There are different cache strategies, depending on your use case.

networkOnly – only fetch from network
cacheOnly – only fetch from cache
fastest – fetch from both, and respond with whichever comes first
networkFirst – fetch from network, if that fails, fetch from cache
cacheFirst – fetch from cache, but also fetch from network and update cache

We can hook into onupdatefound function on the registered Service Worker. 
Even though you can cache tons of files, the Service Worker only checks the hash of your registered service-worker.js. 
If that file has only 1 little change in it, it will be treated as a new version.

Problems can arise when you use a hosting service, that automatically adds max-age headers to your resources 
— especially your service-worker.js.
For instance if you host your PWA over Firebase Hosting, you’ll find this configuration useful.
*/

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    // https://www.npmjs.com/package/register-service-worker
    // Is a must to configure scope since it related to deploy problem to any kind of domain.com/subfix
    registrationOptions: { scope: "./" },
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh. Or vqt will refresh the window automatically.");
      // window.location.reload(true);
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });
}
