if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let n={};const t=e=>s(e,r),d={module:{uri:r},exports:n,require:t};a[r]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(c(...e),n)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/79eTYM7q1S9jN1WbQNO-H/_buildManifest.js",revision:"c74f7999fff0a02cdb124b23d28c63c5"},{url:"/_next/static/79eTYM7q1S9jN1WbQNO-H/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b308cfb-4760bdd226ae193b.js",revision:"4760bdd226ae193b"},{url:"/_next/static/chunks/0c428ae2-bdc2e2be1bb74c7c.js",revision:"bdc2e2be1bb74c7c"},{url:"/_next/static/chunks/496-dc2d63c04836e69a.js",revision:"dc2d63c04836e69a"},{url:"/_next/static/chunks/53.e29bab9c05081fd2.js",revision:"e29bab9c05081fd2"},{url:"/_next/static/chunks/5e2a4920.f8fc3ae48b216660.js",revision:"f8fc3ae48b216660"},{url:"/_next/static/chunks/630.2b806a21e54fe205.js",revision:"2b806a21e54fe205"},{url:"/_next/static/chunks/66-135e0e68bfb0caba.js",revision:"135e0e68bfb0caba"},{url:"/_next/static/chunks/6728d85a-7a5292ddde90d612.js",revision:"7a5292ddde90d612"},{url:"/_next/static/chunks/690.da864f641e474f73.js",revision:"da864f641e474f73"},{url:"/_next/static/chunks/707-5bec624812ed8ddb.js",revision:"5bec624812ed8ddb"},{url:"/_next/static/chunks/7779ef99-1edb0c857c9bf043.js",revision:"1edb0c857c9bf043"},{url:"/_next/static/chunks/c7773329-14b8d1c2b5e11e3d.js",revision:"14b8d1c2b5e11e3d"},{url:"/_next/static/chunks/d0447323-974a36af27147bd7.js",revision:"974a36af27147bd7"},{url:"/_next/static/chunks/d0c16330-14cbdd7da467249a.js",revision:"14cbdd7da467249a"},{url:"/_next/static/chunks/d7eeaac4-78dbfc293e49aae6.js",revision:"78dbfc293e49aae6"},{url:"/_next/static/chunks/framework-ecc4130bc7a58a64.js",revision:"ecc4130bc7a58a64"},{url:"/_next/static/chunks/main-44343bc394548d4c.js",revision:"44343bc394548d4c"},{url:"/_next/static/chunks/pages/_app-4f6e2f0b3da6fa29.js",revision:"4f6e2f0b3da6fa29"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/blogs-dd232e5bd4da3d6f.js",revision:"dd232e5bd4da3d6f"},{url:"/_next/static/chunks/pages/blogs/demo-blog-b0523152efc9bb12.js",revision:"b0523152efc9bb12"},{url:"/_next/static/chunks/pages/blogs/how-to-write-blog-e156432cec442fc0.js",revision:"e156432cec442fc0"},{url:"/_next/static/chunks/pages/blogs/what-are-syntax-and-expressions-in-js-e43cddc3ceb3a8b8.js",revision:"e43cddc3ceb3a8b8"},{url:"/_next/static/chunks/pages/index-08263482dab2dd6a.js",revision:"08263482dab2dd6a"},{url:"/_next/static/chunks/pages/misc-a5df4e0092ebebf0.js",revision:"a5df4e0092ebebf0"},{url:"/_next/static/chunks/pages/misc/best-captured-fbb28826e535b617.js",revision:"fbb28826e535b617"},{url:"/_next/static/chunks/pages/misc/quick-message-591996a84dd79af9.js",revision:"591996a84dd79af9"},{url:"/_next/static/chunks/pages/tech-38df38598f0dd979.js",revision:"38df38598f0dd979"},{url:"/_next/static/chunks/pages/tech/notes-a4e886270e04a744.js",revision:"a4e886270e04a744"},{url:"/_next/static/chunks/pages/tech/notes/javascript-code-snippets-by-ashutosh-anand-tiwari-6ed2ed3fbf819814.js",revision:"6ed2ed3fbf819814"},{url:"/_next/static/chunks/pages/tech/notes/namaste-frontend-3f71e6554bbe7094.js",revision:"3f71e6554bbe7094"},{url:"/_next/static/chunks/pages/tech/notes/namaste-js-4b35607a275a2c78.js",revision:"4b35607a275a2c78"},{url:"/_next/static/chunks/pages/tech/notes/namaste-node-js-089ab9e1a4256fd9.js",revision:"089ab9e1a4256fd9"},{url:"/_next/static/chunks/pages/tech/notes/namaste-react-a69654fd08abd962.js",revision:"a69654fd08abd962"},{url:"/_next/static/chunks/pages/tech/projects-22a87642bb045fa6.js",revision:"22a87642bb045fa6"},{url:"/_next/static/chunks/pages/tech/resume-be002c3986d8fd77.js",revision:"be002c3986d8fd77"},{url:"/_next/static/chunks/pages/town-8daff6edd8305c75.js",revision:"8daff6edd8305c75"},{url:"/_next/static/chunks/pages/travel-79f13197db896bb3.js",revision:"79f13197db896bb3"},{url:"/_next/static/chunks/pages/travel/%5Bplace%5D-6ff2a9fa34512d8e.js",revision:"6ff2a9fa34512d8e"},{url:"/_next/static/chunks/pages/travel/pending-2d3e8651f7e6d4fc.js",revision:"2d3e8651f7e6d4fc"},{url:"/_next/static/chunks/pages/travel/pending/%5Bplace%5D-167c002e9da65d76.js",revision:"167c002e9da65d76"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-d0b96a27a2ba706f.js",revision:"d0b96a27a2ba706f"},{url:"/_next/static/css/7723aab11588e53f.css",revision:"7723aab11588e53f"},{url:"/_next/static/media/source-serif-pro-cyrillic-400-normal.10da3424.woff",revision:"10da3424"},{url:"/_next/static/media/source-serif-pro-cyrillic-400-normal.98899870.woff2",revision:"98899870"},{url:"/_next/static/media/source-serif-pro-cyrillic-ext-400-normal.12702c76.woff",revision:"12702c76"},{url:"/_next/static/media/source-serif-pro-cyrillic-ext-400-normal.b3adab66.woff2",revision:"b3adab66"},{url:"/_next/static/media/source-serif-pro-greek-400-normal.2cf6eb7a.woff",revision:"2cf6eb7a"},{url:"/_next/static/media/source-serif-pro-greek-400-normal.6b515fe1.woff2",revision:"6b515fe1"},{url:"/_next/static/media/source-serif-pro-latin-400-normal.92b5708c.woff",revision:"92b5708c"},{url:"/_next/static/media/source-serif-pro-latin-400-normal.c76ceb37.woff2",revision:"c76ceb37"},{url:"/_next/static/media/source-serif-pro-latin-ext-400-normal.5658e86a.woff2",revision:"5658e86a"},{url:"/_next/static/media/source-serif-pro-latin-ext-400-normal.67a02737.woff",revision:"67a02737"},{url:"/_next/static/media/source-serif-pro-vietnamese-400-normal.14dc5580.woff2",revision:"14dc5580"},{url:"/_next/static/media/source-serif-pro-vietnamese-400-normal.6ef59b3e.woff",revision:"6ef59b3e"},{url:"/app.png",revision:"f7d02c3b0a1d0ad6bc31ac822a5e1306"},{url:"/envelop.ico",revision:"eb6218520b927b77700b51b590541435"},{url:"/favicon.ico",revision:"6a7f82fe0ab96c3b48dc88f8a714c113"},{url:"/favicon_misc.ico",revision:"7b7db103ceeb1c8fc417501555fdd1ad"},{url:"/favicon_resume.ico",revision:"2c8cbcd30ba5e1a773e7aca9901051e0"},{url:"/favicon_tech.ico",revision:"f508b76a11cb8b32ce19ead18187b525"},{url:"/favicon_travel.ico",revision:"fec97696bcd4f5634a061c02cd987b7e"},{url:"/images/Leaves.jpeg",revision:"d565c5551a8a3a12a02a0511d9ffce96"},{url:"/images/ashu_office.png",revision:"8b7817768e64784b454ce2f29e6e154d"},{url:"/images/ashu_travel.jpeg",revision:"1f64dbd9f3d460751b8bb874cab29b26"},{url:"/images/charawan.jpg",revision:"b91ff0ed0d21e886fe744df6d4a01e47"},{url:"/images/envelop.png",revision:"7a6102b7e721f36831c10d13774e8762"},{url:"/images/leaves2.jpeg",revision:"32e1b37b4cff7d25c87505d3257a8fe4"},{url:"/images/profile.jpg",revision:"6ab40866a82e51ca44b9ff04b2145dee"},{url:"/images/profile1.jpg",revision:"e45a1d896066dfe2fa142aa85ddbf396"},{url:"/images/profile1_.JPG",revision:"3903b52413b2bd7782742d004f1b54d2"},{url:"/images/resume_thumbnail.JPG",revision:"71c6b8ab05b2bfa227b667de9ec51bd0"},{url:"/images/tech-illustration.png",revision:"b4d1cf0a940a6b52970b1f5a556d24e5"},{url:"/images/tech_illus.png",revision:"0b7b2db79500d7a95a7e85bfbed8ec8c"},{url:"/images/travel2_illu.png",revision:"2d0d1c68089bfacf282ec615a4b40260"},{url:"/images/travel_illu.png",revision:"6dba46c71d9ea5d24aca87dd43def5e6"},{url:"/images/travelpfp/agra.jpeg",revision:"261c82c44d3a6e9c490e1ab2df6ef9bc"},{url:"/images/travelpfp/agra2.jpeg",revision:"b1cfb76402ce8c0c677ec29e8133ba47"},{url:"/images/travelpfp/ayodhya.jpeg",revision:"e7f0dc874d01451e883a38891146c02c"},{url:"/images/travelpfp/coorg.jpeg",revision:"387a66ea64cbf190df09f182158c7c6c"},{url:"/images/travelpfp/delhi.jpeg",revision:"d6bab6be191171bd1051eb5d5d8a2ce8"},{url:"/images/travelpfp/delhi_.jpeg",revision:"3dc753df9953f775379444317c63f2b1"},{url:"/images/travelpfp/dwarka.jpeg",revision:"aece716091b869bba72cddd3e658ea78"},{url:"/images/travelpfp/goa.jpeg",revision:"0b7ed677d0c1e0eb73ffd3ab6411e59b"},{url:"/images/travelpfp/haridwar.jpeg",revision:"e1617dc9db7d29771f318c24c14374d1"},{url:"/images/travelpfp/leh.jpeg",revision:"91b7c382c929aca6c83311166fdd4e05"},{url:"/images/travelpfp/madhugiri.jpeg",revision:"8de1ffabacfa0f4abc7595ed9921d586"},{url:"/images/travelpfp/manali.jpeg",revision:"54eb88e9f21e1e5de071dd1faf9ee0bb"},{url:"/images/travelpfp/mathura.jpeg",revision:"ac3fcbfd7db7d276790aef564c40ec2a"},{url:"/images/travelpfp/mussoorie.jpeg",revision:"a17821fdad6af1f00602839add553c1f"},{url:"/images/travelpfp/nepal.jpeg",revision:"e0ab678d46e853a08c3c9c7cb2f294b5"},{url:"/images/travelpfp/ramnagar.jpeg",revision:"d8d0ce01979b6c4a7602cda7a9c018d0"},{url:"/images/travelpfp/rishikesh.jpeg",revision:"5f134601a6d6fa8f483fb9abce6ef81e"},{url:"/images/travelpfp/sangam.jpeg",revision:"8935298a5753955847590cf99ea2ef1a"},{url:"/images/travelpfp/sikkim.jpeg",revision:"0d7577d0c20a02465ac126d0e95582bc"},{url:"/images/travelpfp/varanasi.jpeg",revision:"a92df011360301f1119a60117dc16a7e"},{url:"/images/travelpfp/vrindavan.jpeg",revision:"228518dc81d0e02cde98257e92f222b5"},{url:"/images/versions/adventurr.jpeg",revision:"71904ea1c8ea05fc3ae5909120def1d3"},{url:"/images/versions/badminton.jpeg",revision:"a1a68022f435f96e94d0cec230056a03"},{url:"/images/versions/chef.jpeg",revision:"04283159773a30406988c81cdb6012b8"},{url:"/images/versions/cyclist.jpeg",revision:"4674c932579f1ce3a9e8f048c309c5de"},{url:"/images/versions/family.jpeg",revision:"0a3b6f1487d7707ef10cb0a30ca49b25"},{url:"/images/versions/gamer.jpeg",revision:"0dc9051f56b21ef7d2f7fc9c8a0445e0"},{url:"/images/versions/poet.jpeg",revision:"2ddc0ba2f3752a6f1059117a50af7302"},{url:"/images/versions/reader.jpeg",revision:"a236adb971ecd438cf4780079b37bd5a"},{url:"/images/versions/runner.jpeg",revision:"26382bf00aeed109b5b773fb19c3b5cb"},{url:"/images/versions/trek.jpeg",revision:"130e518eb2e4778504aa6467dc7a96bd"},{url:"/images/versions/village.jpeg",revision:"b5fd79f805bc57b2f0ef010ac5a6231e"},{url:"/manifest.json",revision:"0762056c72307bf807018b1a08c6292b"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pdfs/resume.pdf",revision:"4c83751a47cbddedd7f19b85e0559df6"},{url:"/pdfs/resume_.pdf",revision:"cc078f78dbb3ce456d9993fc36e8c0a3"},{url:"/robots.txt",revision:"83300e33eda9a01e345f0379845d9542"},{url:"/sitemap.xml",revision:"d79149831a5ba1a17e57a95c88ccca82"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));