if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const d=e=>i(e,l),t={module:{uri:l},exports:o,require:d};s[l]=Promise.all(n.map((e=>t[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-8bfa659f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/dijkstra.0f8f46b3.js",revision:null},{url:"assets/index.0d318d5d.css",revision:null},{url:"assets/index.2529e5f6.js",revision:null},{url:"assets/index.62739436.js",revision:null},{url:"assets/index.a28c140d.js",revision:null},{url:"assets/index.b3c7c1d9.js",revision:null},{url:"assets/index.d032ceff.js",revision:null},{url:"assets/index.es.3fd7f2ef.js",revision:null},{url:"assets/index.es.423a7f83.js",revision:null},{url:"assets/index.es.5cae6f7b.js",revision:null},{url:"assets/index.fd0505a9.js",revision:null},{url:"assets/tslib.fa1473fe.js",revision:null},{url:"assets/workbox-window.prod.es5.58885db6.js",revision:null},{url:"core.js",revision:"3ba537269be9a1f6bd953918ad0b18ea"},{url:"index.html",revision:"5ac53ec7c9091ad5a43e59afa37d5c9d"},{url:"main.css",revision:"95805322ebaf23154373d13f6ca369d6"},{url:"images/neokingdom/logo-192.png",revision:"2f9c162d630d180e6f0bcf1ac06c938e"},{url:"images/neokingdom/logo-512.png",revision:"56e193b8c79a3f86799269768e127142"},{url:"images/shortcut-time-tracking-192.png",revision:"7b4822fd1db08c3ce9be13ad8db57483"},{url:"manifest.webmanifest",revision:"f327d130d272b725106e63e7f67a6b7b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
