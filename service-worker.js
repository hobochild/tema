if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,n,s)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const t={uri:location.origin+r.slice(1)};return Promise.all(n.map(r=>{switch(r){case"exports":return i;case"module":return t;default:return e(r)}})).then(e=>{const r=s(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-7b354808"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/./fonts/AntDesign.ttf",revision:"3a2ba31570920eeb9b1d217cabe58315"},{url:"/./fonts/Entypo.ttf",revision:"744ce60078c17d86006dd0edabcd59a7"},{url:"/./fonts/Feather.ttf",revision:"6beba7e6834963f7f171d3bdd075c915"},{url:"/./fonts/FontAwesome.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"/./fonts/FontAwesome5_Brands.ttf",revision:"c6aef942e3668158ec29d4adcb2e768f"},{url:"/./fonts/FontAwesome5_Solid.ttf",revision:"872545dde71de3842234bf6afe80c4cb"},{url:"/./fonts/Foundation.ttf",revision:"e20945d7c929279ef7a6f1db184a4470"},{url:"/./fonts/Ionicons.ttf",revision:"b2e0fc821c6886fb3940f85a3320003e"},{url:"/./fonts/MaterialCommunityIcons.ttf",revision:"5a293a273bee8d740a045d9922b9a9ae"},{url:"/./fonts/MaterialIcons.ttf",revision:"a37b0c01c0baf1888ca812cc0508f6e2"},{url:"/./fonts/SimpleLineIcons.ttf",revision:"d2285965fe34b05465047401b8595dd0"},{url:"/./fonts/SpaceMono-Regular.ttf",revision:"49a79d66bdea2debf1832bf4d7aca127"},{url:"/expo-service-worker.js",revision:"48c7ed4e7da9792af288a60d7242d615"},{url:"/favicon-16.png",revision:"afd5733ac789ab1795f1ed7a26e1ecd3"},{url:"/favicon-32.png",revision:"3d85359b37ca7590f8e91d593d02ddaf"},{url:"/favicon.ico",revision:"5e52768b0f7cbb62cbe07751add33101"},{url:"/index.html",revision:"cdf00fad9c73cbf5fd9f4f4db8737cea"},{url:"/manifest.json",revision:"953ab71b12c7b57f5f6de1a18fc6487e"},{url:"/register-service-worker.js",revision:"04cf1ae10e30155ca207400239ec1cbd"},{url:"/serve.json",revision:"d0c694b562b2208635f250762cd7fc79"},{url:"/static/js/2.b720a0db.chunk.js",revision:"95669894a4a66e312b8e832e1aa1671f"},{url:"/static/js/app.f43b0cda.chunk.js",revision:"83fe3692ccaf20edbef61719ae0e8e36"},{url:"/static/js/runtime~app.a6639e49.js",revision:"46e6b84eb954502bd93d0bd9569bf6fb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/_/,/\/[^\/]+\.[^\/]+$/]})),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map
