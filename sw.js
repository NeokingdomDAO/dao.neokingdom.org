if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),d={module:{uri:o},exports:l,require:t};s[o]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/dijkstra.c6eae3dd.js",revision:null},{url:"assets/index.04104580.js",revision:null},{url:"assets/index.0d318d5d.css",revision:null},{url:"assets/index.1b022b39.js",revision:null},{url:"assets/index.68f9101a.js",revision:null},{url:"assets/index.9e4fc896.js",revision:null},{url:"assets/tslib.es6.cb12a069.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"core.js",revision:"3ba537269be9a1f6bd953918ad0b18ea"},{url:"index.html",revision:"f0505c70d4ada21d37a1a55a99708351"},{url:"main.css",revision:"95805322ebaf23154373d13f6ca369d6"},{url:"images/neokingdom/logo-192.png",revision:"2f9c162d630d180e6f0bcf1ac06c938e"},{url:"images/neokingdom/logo-512.png",revision:"56e193b8c79a3f86799269768e127142"},{url:"images/shortcut-time-tracking-192.png",revision:"7b4822fd1db08c3ce9be13ad8db57483"},{url:"manifest.webmanifest",revision:"f327d130d272b725106e63e7f67a6b7b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
