if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let n={};const d=e=>s(e,r),b={module:{uri:r},exports:n,require:d};a[r]=Promise.all(i.map((e=>b[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2pAb2zOhxpE2za-uESvQ_/_buildManifest.js",revision:"fb6407d4231705dcb343df594c061013"},{url:"/_next/static/2pAb2zOhxpE2za-uESvQ_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/019d026b-d9230ba2a6a56c98.js",revision:"d9230ba2a6a56c98"},{url:"/_next/static/chunks/2e3a845b-773b50249c046e52.js",revision:"773b50249c046e52"},{url:"/_next/static/chunks/3369-b6d3681f9f0f1350.js",revision:"b6d3681f9f0f1350"},{url:"/_next/static/chunks/36d2f571.397d7fd94f5da120.js",revision:"397d7fd94f5da120"},{url:"/_next/static/chunks/3a17f596-9feffef2cf8263c7.js",revision:"9feffef2cf8263c7"},{url:"/_next/static/chunks/41155975-0002c7fccb0dc903.js",revision:"0002c7fccb0dc903"},{url:"/_next/static/chunks/4fee24eb-16d27741a3946c57.js",revision:"16d27741a3946c57"},{url:"/_next/static/chunks/5707-76e807d7bd88a501.js",revision:"76e807d7bd88a501"},{url:"/_next/static/chunks/5727625e-8d3a254bf485d08f.js",revision:"8d3a254bf485d08f"},{url:"/_next/static/chunks/5894.fc97f86d3c139cda.js",revision:"fc97f86d3c139cda"},{url:"/_next/static/chunks/646e0218-9855ac06895d468b.js",revision:"9855ac06895d468b"},{url:"/_next/static/chunks/6750-ed1ce2c8ad34e3e4.js",revision:"ed1ce2c8ad34e3e4"},{url:"/_next/static/chunks/69480c19-3aa6af11bfe43b33.js",revision:"3aa6af11bfe43b33"},{url:"/_next/static/chunks/6999-c7abf3fd2c7fe90c.js",revision:"c7abf3fd2c7fe90c"},{url:"/_next/static/chunks/6b2193de-c032d6d27c0b45af.js",revision:"c032d6d27c0b45af"},{url:"/_next/static/chunks/6eb5140f-7e93abba67505414.js",revision:"7e93abba67505414"},{url:"/_next/static/chunks/7066-66ec8f32cb353c2d.js",revision:"66ec8f32cb353c2d"},{url:"/_next/static/chunks/8630.3a6e84784946bd70.js",revision:"3a6e84784946bd70"},{url:"/_next/static/chunks/d3820dff-79caf6626787e701.js",revision:"79caf6626787e701"},{url:"/_next/static/chunks/d9067523-685585e5d1e59b11.js",revision:"685585e5d1e59b11"},{url:"/_next/static/chunks/framework-0995a3e8436ddc4f.js",revision:"0995a3e8436ddc4f"},{url:"/_next/static/chunks/main-2931c9bd2dff9a50.js",revision:"2931c9bd2dff9a50"},{url:"/_next/static/chunks/pages/404-7d5484582843cfac.js",revision:"7d5484582843cfac"},{url:"/_next/static/chunks/pages/_app-b7a1ed4457be1856.js",revision:"b7a1ed4457be1856"},{url:"/_next/static/chunks/pages/_error-a1dfd1adb240a82a.js",revision:"a1dfd1adb240a82a"},{url:"/_next/static/chunks/pages/blog-03e6c09cd8b7fe45.js",revision:"03e6c09cd8b7fe45"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-b1506a86560191ec.js",revision:"b1506a86560191ec"},{url:"/_next/static/chunks/pages/digital-garden-0ef8fb1e1d2ebfe4.js",revision:"0ef8fb1e1d2ebfe4"},{url:"/_next/static/chunks/pages/digital-garden/blog-ebe59cbc4f00ac94.js",revision:"ebe59cbc4f00ac94"},{url:"/_next/static/chunks/pages/digital-garden/blog/%5Bslug%5D-05f028d60aaf4705.js",revision:"05f028d60aaf4705"},{url:"/_next/static/chunks/pages/digital-garden/books-01c88e07e9701b2c.js",revision:"01c88e07e9701b2c"},{url:"/_next/static/chunks/pages/digital-garden/books/%5Bslug%5D-c920358821cd707b.js",revision:"c920358821cd707b"},{url:"/_next/static/chunks/pages/digital-garden/daily-updates-baca405e8e1e30b9.js",revision:"baca405e8e1e30b9"},{url:"/_next/static/chunks/pages/digital-garden/daily-updates/%5Bslug%5D-dc6b4e4411ee00bd.js",revision:"dc6b4e4411ee00bd"},{url:"/_next/static/chunks/pages/digital-garden/experience-1b4d8cf7f602dd33.js",revision:"1b4d8cf7f602dd33"},{url:"/_next/static/chunks/pages/digital-garden/experience/%5Bslug%5D-a5a86d36c77a664d.js",revision:"a5a86d36c77a664d"},{url:"/_next/static/chunks/pages/digital-garden/films-9afcb3a8fd1afded.js",revision:"9afcb3a8fd1afded"},{url:"/_next/static/chunks/pages/digital-garden/films/%5Bslug%5D-702706be91c90555.js",revision:"702706be91c90555"},{url:"/_next/static/chunks/pages/digital-garden/notes-7a83d2d43842f44a.js",revision:"7a83d2d43842f44a"},{url:"/_next/static/chunks/pages/digital-garden/notes/backend-with-nodejs-by-procoderr-notes-b50ca8b85216d59d.js",revision:"b50ca8b85216d59d"},{url:"/_next/static/chunks/pages/digital-garden/notes/backend-with-nodejs-by-procoderr-notes/%5Bslug%5D-40c3bbb05902ede6.js",revision:"40c3bbb05902ede6"},{url:"/_next/static/chunks/pages/digital-garden/notes/javascript-snippets-7f1ac1d00b874983.js",revision:"7f1ac1d00b874983"},{url:"/_next/static/chunks/pages/digital-garden/notes/javascript-snippets/%5Bslug%5D-209fbbf1d7d9aee6.js",revision:"209fbbf1d7d9aee6"},{url:"/_next/static/chunks/pages/digital-garden/notes/namaste-node-js-fd85af73073bd44c.js",revision:"fd85af73073bd44c"},{url:"/_next/static/chunks/pages/digital-garden/notes/namaste-node-js-season-2/%5Bslug%5D-c0aa61d11991134d.js",revision:"c0aa61d11991134d"},{url:"/_next/static/chunks/pages/digital-garden/notes/namaste-node-js-season-2/analysis-c74e71286cd5298e.js",revision:"c74e71286cd5298e"},{url:"/_next/static/chunks/pages/digital-garden/notes/namaste-node-js-season-2/data-30efb262d9efc696.js",revision:"30efb262d9efc696"},{url:"/_next/static/chunks/pages/digital-garden/notes/namaste-node-js/%5Bslug%5D-df56e41c266a3c4a.js",revision:"df56e41c266a3c4a"},{url:"/_next/static/chunks/pages/digital-garden/notes/namaste-node-js/analysis-77295b7b40f6aa88.js",revision:"77295b7b40f6aa88"},{url:"/_next/static/chunks/pages/digital-garden/notes/namaste-node-js/data-0dad3f999569bc44.js",revision:"0dad3f999569bc44"},{url:"/_next/static/chunks/pages/digital-garden/poems-aab47bdbc18088b2.js",revision:"aab47bdbc18088b2"},{url:"/_next/static/chunks/pages/digital-garden/poems/%5Bslug%5D-b5bbed040b451cc0.js",revision:"b5bbed040b451cc0"},{url:"/_next/static/chunks/pages/digital-garden/stories-eff9cc22f95dbcff.js",revision:"eff9cc22f95dbcff"},{url:"/_next/static/chunks/pages/digital-garden/stories/%5Bslug%5D-1c9b1d650d6e69f1.js",revision:"1c9b1d650d6e69f1"},{url:"/_next/static/chunks/pages/digital-garden/testimonials-ff925f69e5184bf2.js",revision:"ff925f69e5184bf2"},{url:"/_next/static/chunks/pages/digital-garden/testimonials/%5Bslug%5D-35056d283e16b95a.js",revision:"35056d283e16b95a"},{url:"/_next/static/chunks/pages/index-7ede8129cf88d6b9.js",revision:"7ede8129cf88d6b9"},{url:"/_next/static/chunks/pages/misc-46fa02cda2b97ca6.js",revision:"46fa02cda2b97ca6"},{url:"/_next/static/chunks/pages/misc/best-captured-63628f604dae4edb.js",revision:"63628f604dae4edb"},{url:"/_next/static/chunks/pages/misc/quick-message-a5dba853d985d163.js",revision:"a5dba853d985d163"},{url:"/_next/static/chunks/pages/tech-b6c90b32a8bc06af.js",revision:"b6c90b32a8bc06af"},{url:"/_next/static/chunks/pages/tech/projects-525613227c7f6734.js",revision:"525613227c7f6734"},{url:"/_next/static/chunks/pages/tech/resume-b3037cbf53ce9a85.js",revision:"b3037cbf53ce9a85"},{url:"/_next/static/chunks/pages/town-5be5edfd93be4ddd.js",revision:"5be5edfd93be4ddd"},{url:"/_next/static/chunks/pages/travel-12f1506053917542.js",revision:"12f1506053917542"},{url:"/_next/static/chunks/pages/travel/%5Bplace%5D-adc052bed8bfba65.js",revision:"adc052bed8bfba65"},{url:"/_next/static/chunks/pages/travel/pending-b8a25530bfd87fc6.js",revision:"b8a25530bfd87fc6"},{url:"/_next/static/chunks/pages/travel/pending/%5Bplace%5D-8941e3c158e236f9.js",revision:"8941e3c158e236f9"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f665f07688a08345.js",revision:"f665f07688a08345"},{url:"/_next/static/css/2afafc7b61888db9.css",revision:"2afafc7b61888db9"},{url:"/_next/static/media/source-serif-pro-cyrillic-400-normal.10da3424.woff",revision:"10da3424"},{url:"/_next/static/media/source-serif-pro-cyrillic-400-normal.98899870.woff2",revision:"98899870"},{url:"/_next/static/media/source-serif-pro-cyrillic-ext-400-normal.12702c76.woff",revision:"12702c76"},{url:"/_next/static/media/source-serif-pro-cyrillic-ext-400-normal.b3adab66.woff2",revision:"b3adab66"},{url:"/_next/static/media/source-serif-pro-greek-400-normal.2cf6eb7a.woff",revision:"2cf6eb7a"},{url:"/_next/static/media/source-serif-pro-greek-400-normal.6b515fe1.woff2",revision:"6b515fe1"},{url:"/_next/static/media/source-serif-pro-latin-400-normal.92b5708c.woff",revision:"92b5708c"},{url:"/_next/static/media/source-serif-pro-latin-400-normal.c76ceb37.woff2",revision:"c76ceb37"},{url:"/_next/static/media/source-serif-pro-latin-ext-400-normal.5658e86a.woff2",revision:"5658e86a"},{url:"/_next/static/media/source-serif-pro-latin-ext-400-normal.67a02737.woff",revision:"67a02737"},{url:"/_next/static/media/source-serif-pro-vietnamese-400-normal.14dc5580.woff2",revision:"14dc5580"},{url:"/_next/static/media/source-serif-pro-vietnamese-400-normal.6ef59b3e.woff",revision:"6ef59b3e"},{url:"/admin/config.yml",revision:"cdf9618fc29f05df25b2ff2de6139546"},{url:"/admin/example.css",revision:"a826e0c6fda222aa449dcc214425b408"},{url:"/admin/index.html",revision:"e02bb1fe0dc1ec38f957d26a731d05b5"},{url:"/ads.txt",revision:"78c6e998bbf5791dcfb111ac39d7f035"},{url:"/app.png",revision:"d03d6cb7d45f396b10c92f12266976aa"},{url:"/digigarden.ico",revision:"49c15c30cb006176f96fcaa41aa5a401"},{url:"/envelop.ico",revision:"eb6218520b927b77700b51b590541435"},{url:"/favicon.ico",revision:"6a7f82fe0ab96c3b48dc88f8a714c113"},{url:"/favicon_misc.ico",revision:"7b7db103ceeb1c8fc417501555fdd1ad"},{url:"/favicon_resume.ico",revision:"2c8cbcd30ba5e1a773e7aca9901051e0"},{url:"/favicon_tech.ico",revision:"f508b76a11cb8b32ce19ead18187b525"},{url:"/favicon_travel.ico",revision:"fec97696bcd4f5634a061c02cd987b7e"},{url:"/images/Leaves.jpeg",revision:"d565c5551a8a3a12a02a0511d9ffce96"},{url:"/images/all.png",revision:"4d8f4b8953c3fc32ad2f5d7dedbb3f3f"},{url:"/images/ashu.png",revision:"d2ccb85bba01fefe78df255da74bd774"},{url:"/images/ashu_office.png",revision:"8b7817768e64784b454ce2f29e6e154d"},{url:"/images/ashu_travel.jpeg",revision:"1f64dbd9f3d460751b8bb874cab29b26"},{url:"/images/atul.png",revision:"b4bebceb5b0c52363dfbd1f4b7e98273"},{url:"/images/blogs/1.png",revision:"a83d65877172427ee11ed08b48c839e0"},{url:"/images/blogs/1000120935.jpg",revision:"672cfdc44e6be4e482094bba7e9e019a"},{url:"/images/blogs/1000129708.jpg",revision:"121bdfd999fd7458e715dcd3ef3656c5"},{url:"/images/blogs/1000131580.jpg",revision:"0d2ed3050b5cc7c0c9fa5a8055fbe07b"},{url:"/images/blogs/123.png",revision:"de93c940a69411da9052391681ed0cde"},{url:"/images/blogs/1e12db.png",revision:"3e8f392a27287e8adc22499be5658a1c"},{url:"/images/blogs/1env.jpg",revision:"d82652c47f1721db248526ef7970e57a"},{url:"/images/blogs/1osprocess1.jpg",revision:"e41e1506d4884ca5b95b81c48c7a7a62"},{url:"/images/blogs/1thread-thumb.jpg",revision:"27ac2e012b2b58709cb8404be74d8eca"},{url:"/images/blogs/1wsl.jpg",revision:"d70efd93dfb38c0099a2d8af5ff8a2fb"},{url:"/images/blogs/2.png",revision:"5fec7ccb731890f2d4e39ddc73899853"},{url:"/images/blogs/2e12db.png",revision:"e827432003fe9b7543a9ba2af9fd8b20"},{url:"/images/blogs/2env.jpg",revision:"7e78140a9350a65d4dc0823c80a0ea47"},{url:"/images/blogs/2osprocess2.jpg",revision:"edde943f1f6b44462293cb6d7fe02a11"},{url:"/images/blogs/2threas2.jpg",revision:"9b028c56d36c7b7b09ab94b56994372b"},{url:"/images/blogs/2wsl.jpg",revision:"c59e6ebec9929b40016c9fac8ef7bb40"},{url:"/images/blogs/3.png",revision:"e84bb87857dd9974d8d6b38f28509b9d"},{url:"/images/blogs/3e12db.png",revision:"a76a5d816a2f598377fb77ef0464cad6"},{url:"/images/blogs/3env.jpg",revision:"c215a466842c91a8c536f9b5958d6261"},{url:"/images/blogs/3osprocess.jpg",revision:"486a54af8131d6e7796d9ef7bd92410d"},{url:"/images/blogs/3thread.jpg",revision:"c953483e736ea008831e37f0c07c1c14"},{url:"/images/blogs/4-thread.jpg",revision:"a1ee34ab60cee151f0eb975dd8ab4648"},{url:"/images/blogs/4.png",revision:"eb7340d61d59eb71ef76a7c7e938fc55"},{url:"/images/blogs/4e12db.png",revision:"87766c52dfe3d8e7465b999c12b7511f"},{url:"/images/blogs/4env.jpg",revision:"a4c227ff039abdf43dc3a2eda49dd667"},{url:"/images/blogs/4osprocess.jpg",revision:"4bca093ef182b82439193cd182a2fee3"},{url:"/images/blogs/5.png",revision:"895c74004b2387775397cec469f0e4a7"},{url:"/images/blogs/5e12db.png",revision:"e85c3b1573b1d32e602453f16186b4df"},{url:"/images/blogs/5env.jpg",revision:"315d63ab4a09460bcd59da05c53a3b10"},{url:"/images/blogs/5threadgareeb.jpg",revision:"af088314fcf9ab1c3b854e809b7ae20e"},{url:"/images/blogs/6.png",revision:"d3fc3aa1c69dc5d0ece5d3a21a7ba0f5"},{url:"/images/blogs/6e12db.png",revision:"d8f260f97c3ca765eddf1c892798fe18"},{url:"/images/blogs/6env.jpg",revision:"d3d445d7cf59666ec5a18a08c0907bd1"},{url:"/images/blogs/6trhead.jpg",revision:"eb651e37c2625b5f976b28d8e61ed0ab"},{url:"/images/blogs/7.png",revision:"637a890d6b3d5c5db1fc9d5caf8cc97e"},{url:"/images/blogs/7e12db.png",revision:"d1d5e5c347f64fbb6033e60b2f24c53e"},{url:"/images/blogs/7emv.jpg",revision:"0d40c2d7b930719afc62dfb62a6cb6e4"},{url:"/images/blogs/Leaves.png",revision:"3e637224a14385347183fd4296b38a03"},{url:"/images/blogs/aaaaa.jpg",revision:"ba8942a1e32651e50c8a4bfcd26b5c4a"},{url:"/images/blogs/aaapath.jpg",revision:"d26ab826c69ba8a2d2bfc6700008fa4c"},{url:"/images/blogs/ake9im1.png",revision:"6057ad0d1840355eec5fd80676136bfe"},{url:"/images/blogs/ake9im2.png",revision:"9d8af76260e294d35b6b12aac589c397"},{url:"/images/blogs/ake9im4.png",revision:"7e9ffa879fe81e3cfd8588374cacb935"},{url:"/images/blogs/ake9img3.png",revision:"4d1ef62327780e51cb65f4e02ad7fb12"},{url:"/images/blogs/ake9m5.png",revision:"bb95d0f3ce7fb567319e543eba78054c"},{url:"/images/blogs/aks2.jfif",revision:"ceda0c8c0671350a74a770d8cda65c76"},{url:"/images/blogs/bash-commands-15-pro.png",revision:"ede9e8324876ecd8a6027eb37f15d247"},{url:"/images/blogs/cmd_pro122.png",revision:"eec1da78311f85090a2abb54f3fff7bb"},{url:"/images/blogs/cmddd_pro.png",revision:"80b12eea151721372b1da0a362dfa9e9"},{url:"/images/blogs/ctrlzpro.png",revision:"1825a64dc2d8858c14afab416c35ed83"},{url:"/images/blogs/dad.png",revision:"62178d13ce2a0d964c0f9169d18007b6"},{url:"/images/blogs/dodo.jpg",revision:"e5a0da93c4679231cccfd40102e5ef70"},{url:"/images/blogs/e11p1.png",revision:"bc326581aa76ba8eccfb3a395cf2c739"},{url:"/images/blogs/e11p2.png",revision:"0757a862102153a17a0ee35a1356eae7"},{url:"/images/blogs/e11p3.png",revision:"6ad79748240e56212aebad7884793d58"},{url:"/images/blogs/e11p4.png",revision:"919de85b9663b039ea72932b077cdf4a"},{url:"/images/blogs/e11p5.png",revision:"41ec7f6a860775550406a558d194319f"},{url:"/images/blogs/e11p6.png",revision:"ec56a20815fda3649e0720a65108bbf7"},{url:"/images/blogs/e11p7.png",revision:"41813db09f04b958c4a6a15769edae6b"},{url:"/images/blogs/e11p8.png",revision:"88c87fafe3c3d2b5c42331f0ec3b89df"},{url:"/images/blogs/e13m1.png",revision:"501e51e4b25c1a72e2eec640b52efe65"},{url:"/images/blogs/e13m2.png",revision:"e76192328338648022299251f1af6ab4"},{url:"/images/blogs/e13m3.png",revision:"5ef6e2a72c5547bafa0df991f1d04e45"},{url:"/images/blogs/e13m4.png",revision:"46650b0706b7ac27a0ff2ef2ad7137ef"},{url:"/images/blogs/e13m5.png",revision:"cf4dff6a88637ac21bb3ff45779fdc6a"},{url:"/images/blogs/e81.png",revision:"b19999bd5ac0268d04e71ec4b0b1a0b3"},{url:"/images/blogs/e82.png",revision:"be934f062371ceb5f809761022e2e18c"},{url:"/images/blogs/e83.png",revision:"7e160117b4e7940f8551344ba11da4af"},{url:"/images/blogs/e9ppp000.png",revision:"deee5ee55627ee474f7cb3cb5967dfd2"},{url:"/images/blogs/eoi82.png",revision:"ba9a4a181dcb54fdf26a8b1e396539f8"},{url:"/images/blogs/epi81.png",revision:"1290ab6b54a23883cfc7c9a03301dae9"},{url:"/images/blogs/epi83.png",revision:"2532a26a7ef301dbac8f4f1cc1b9afb3"},{url:"/images/blogs/epi84.png",revision:"0e5079e3bbfa018d6ac389faf3cadd43"},{url:"/images/blogs/epi85.png",revision:"7df71d0bca7ae4c6e54e4b8662f87e27"},{url:"/images/blogs/epi86.png",revision:"1a80d04fe5b826dbcbb952b3022fdc9e"},{url:"/images/blogs/epi87.png",revision:"d5c51df00226d6cb84891960f60af8eb"},{url:"/images/blogs/githubwali.png",revision:"9d1b13d9ee687f5f4201f98998001fc5"},{url:"/images/blogs/images.jpeg",revision:"ff823e194032cd8eb57477627bee3cc4"},{url:"/images/blogs/img_20240905_100200.jpg",revision:"5d8558ee5f626b14f49fdd24cb5d7879"},{url:"/images/blogs/nano_proc.png",revision:"e678cb07cfa03db6ede09e8366ea377f"},{url:"/images/blogs/pfp2.png",revision:"d03d6cb7d45f396b10c92f12266976aa"},{url:"/images/blogs/photo_2024-03-29_22-44-34.jpg",revision:"296ce7d73cfe81a23651fd315e21bc75"},{url:"/images/blogs/prcod_os3.png",revision:"8adad57f9251f99896fed4475e55b989"},{url:"/images/blogs/pro-e77-p-5.png",revision:"06e81aa26e87f49349dcf4b48bfe8924"},{url:"/images/blogs/pro-e772.png",revision:"534f9e105cf2ff5477f973a3f3c9cb38"},{url:"/images/blogs/procd_os1.png",revision:"76420821dbdbcb6f7320d8832dab7f86"},{url:"/images/blogs/procod_os2.png",revision:"5ffcbce53c28f80c6de5c00fd3e0db58"},{url:"/images/blogs/proe77-2.png",revision:"2dec5a5fbf0787c22fb560ae4b5daf25"},{url:"/images/blogs/proe77-4.png",revision:"84e55cc84c14bd00d395e084ebfb7a15"},{url:"/images/blogs/promt-procdre.png",revision:"055fa195017b107ea02202c52cf41d3f"},{url:"/images/blogs/python.png",revision:"71cdee1cf577763d33a84f300d3b58a8"},{url:"/images/blogs/threaadpooo-thumb.png",revision:"cea0cb73932c97bd92962bf271b55a49"},{url:"/images/blogs/threaadpoool.png",revision:"07753d56772d823e2bfda690d6c4838d"},{url:"/images/blogs/threadpool-thumb.webp",revision:"ffe966e3cfcdccd14beb504a147b7e4b"},{url:"/images/charawan.jpg",revision:"b91ff0ed0d21e886fe744df6d4a01e47"},{url:"/images/envelop.png",revision:"7a6102b7e721f36831c10d13774e8762"},{url:"/images/harshil.png",revision:"943d6039ecdf20c526c1360281fa9804"},{url:"/images/kanka.png",revision:"00fec428fa54c213607b744603dc1f09"},{url:"/images/karan.png",revision:"5fd7532c48b490dc129de8fe3e23a986"},{url:"/images/kavish.png",revision:"e92294e17be2c86b6e16d963022e369c"},{url:"/images/leaves2.jpeg",revision:"32e1b37b4cff7d25c87505d3257a8fe4"},{url:"/images/nihal.png",revision:"d5a94966cdd32d5253c905ce0901dcc8"},{url:"/images/profile.jpg",revision:"6ab40866a82e51ca44b9ff04b2145dee"},{url:"/images/profile1.jpg",revision:"e45a1d896066dfe2fa142aa85ddbf396"},{url:"/images/profile1_.JPG",revision:"3903b52413b2bd7782742d004f1b54d2"},{url:"/images/ram.png",revision:"269291c94ef50c9c2805f6ecef42575c"},{url:"/images/resume_thumbnail.JPG",revision:"71c6b8ab05b2bfa227b667de9ec51bd0"},{url:"/images/tech-illustration.png",revision:"b4d1cf0a940a6b52970b1f5a556d24e5"},{url:"/images/tech_illus.png",revision:"0b7b2db79500d7a95a7e85bfbed8ec8c"},{url:"/images/travel_illu.png",revision:"6dba46c71d9ea5d24aca87dd43def5e6"},{url:"/images/travelpfp/agra.jpeg",revision:"261c82c44d3a6e9c490e1ab2df6ef9bc"},{url:"/images/travelpfp/agra2.jpeg",revision:"b1cfb76402ce8c0c677ec29e8133ba47"},{url:"/images/travelpfp/ayodhya.jpeg",revision:"e7f0dc874d01451e883a38891146c02c"},{url:"/images/travelpfp/coorg.jpeg",revision:"387a66ea64cbf190df09f182158c7c6c"},{url:"/images/travelpfp/delhi.jpeg",revision:"d6bab6be191171bd1051eb5d5d8a2ce8"},{url:"/images/travelpfp/delhi_.jpeg",revision:"3dc753df9953f775379444317c63f2b1"},{url:"/images/travelpfp/dwarka.jpeg",revision:"aece716091b869bba72cddd3e658ea78"},{url:"/images/travelpfp/goa.jpeg",revision:"0b7ed677d0c1e0eb73ffd3ab6411e59b"},{url:"/images/travelpfp/haridwar.jpeg",revision:"e1617dc9db7d29771f318c24c14374d1"},{url:"/images/travelpfp/leh.jpeg",revision:"91b7c382c929aca6c83311166fdd4e05"},{url:"/images/travelpfp/madhugiri.jpeg",revision:"8de1ffabacfa0f4abc7595ed9921d586"},{url:"/images/travelpfp/manali.jpeg",revision:"54eb88e9f21e1e5de071dd1faf9ee0bb"},{url:"/images/travelpfp/mathura.jpeg",revision:"ac3fcbfd7db7d276790aef564c40ec2a"},{url:"/images/travelpfp/mussoorie.jpeg",revision:"a17821fdad6af1f00602839add553c1f"},{url:"/images/travelpfp/nepal.jpeg",revision:"e0ab678d46e853a08c3c9c7cb2f294b5"},{url:"/images/travelpfp/ramnagar.jpeg",revision:"d8d0ce01979b6c4a7602cda7a9c018d0"},{url:"/images/travelpfp/rishikesh.jpeg",revision:"5f134601a6d6fa8f483fb9abce6ef81e"},{url:"/images/travelpfp/sangam.jpeg",revision:"8935298a5753955847590cf99ea2ef1a"},{url:"/images/travelpfp/sikkim.jpeg",revision:"0d7577d0c20a02465ac126d0e95582bc"},{url:"/images/travelpfp/varanasi.jpeg",revision:"a92df011360301f1119a60117dc16a7e"},{url:"/images/travelpfp/vrindavan.jpeg",revision:"228518dc81d0e02cde98257e92f222b5"},{url:"/images/versions/adventurr.jpeg",revision:"71904ea1c8ea05fc3ae5909120def1d3"},{url:"/images/versions/badminton.jpeg",revision:"a1a68022f435f96e94d0cec230056a03"},{url:"/images/versions/chef.jpeg",revision:"04283159773a30406988c81cdb6012b8"},{url:"/images/versions/cyclist.jpeg",revision:"4674c932579f1ce3a9e8f048c309c5de"},{url:"/images/versions/family.jpeg",revision:"0a3b6f1487d7707ef10cb0a30ca49b25"},{url:"/images/versions/gamer.jpeg",revision:"0dc9051f56b21ef7d2f7fc9c8a0445e0"},{url:"/images/versions/poet.jpeg",revision:"2ddc0ba2f3752a6f1059117a50af7302"},{url:"/images/versions/reader.jpeg",revision:"a236adb971ecd438cf4780079b37bd5a"},{url:"/images/versions/runner.jpeg",revision:"26382bf00aeed109b5b773fb19c3b5cb"},{url:"/images/versions/trek.jpeg",revision:"130e518eb2e4778504aa6467dc7a96bd"},{url:"/images/versions/village.jpeg",revision:"b5fd79f805bc57b2f0ef010ac5a6231e"},{url:"/manifest.json",revision:"0762056c72307bf807018b1a08c6292b"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/notes.ico",revision:"bde5f9fe21e7ad1d378e8369798b7d8e"},{url:"/pdfs/resume.pdf",revision:"4c83751a47cbddedd7f19b85e0559df6"},{url:"/pdfs/resume_.pdf",revision:"cc078f78dbb3ce456d9993fc36e8c0a3"},{url:"/qr.PNG",revision:"374fde8680919415d2811ed9609aacac"},{url:"/robots.txt",revision:"83300e33eda9a01e345f0379845d9542"},{url:"/sitemap.xml",revision:"d79149831a5ba1a17e57a95c88ccca82"},{url:"/universe.ico",revision:"7aab2604454bff155f63084593e27299"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
