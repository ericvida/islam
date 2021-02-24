//__HEAD__
var te=Object.create,T=Object.defineProperty,se=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty,ie=Object.getOwnPropertyNames,ne=Object.getOwnPropertyDescriptor;var oe=s=>T(s,"__esModule",{value:!0});var ae=(s,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ie(e))!re.call(s,r)&&r!=="default"&&T(s,r,{get:()=>e[r],enumerable:!(t=ne(e,r))||t.enumerable});return s},a=s=>s&&s.__esModule?s:ae(oe(T(s!=null?te(se(s)):{},"default",{value:s,enumerable:!0})),s);var le=a(require("events")),ue=a(require("fs")),he=a(require("path"));var Te=Symbol.for("#refresh"),fe=Symbol.for("#manifest"),$e=Symbol.for("#absPath"),je=Symbol.for("#raw"),Be=Symbol.for("#watch");var R=class{static for(e){return new Proxy({},new this(e))}constructor(e){this.getter=e}get target(){return this.getter()}get(e,t){return this.target[t]}set(e,t,r){return this.target[t]=r,!0}},l=R.for(function(){return globalThis[fe]});var j=a(require("cluster")),w=a(require("fs")),B=a(require("path")),E=a(require("events"));var $=a(require("perf_hooks")),g=Symbol.for("#spinner"),ce=Symbol.for("#ctime"),C=Symbol.for("#IMBA_OPTIONS"),pe={reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29],black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},h={bold:function(s){return"[1m"+s+"[22m"},red:function(s){return"[31m"+s+"[39m"},green:function(s){return"[32m"+s+"[39m"},yellow:function(s){return"[33m"+s+"[39m"},blue:function(s){return"[94m"+s+"[39m"},gray:function(s){return"[90m"+s+"[39m"},white:function(s){return"[37m"+s+"[39m"},f:function(s,e){let t=pe[s];return"["+t[0]+"m"+e+"["+t[1]+"m"}};h.warn=h.yellow;h.error=h.red;var b=process.platform!=="win32"||process.env.CI||process.env.TERM==="xterm-256color",me={info:h.f("yellowBright",b?"\u2139":"i"),success:h.green(b?"\u2714":"\u221A"),warning:h.yellow(b?"\u26A0":"!!"),error:h.red(b?"\xD7":"\u2716"),debug:h.blue(b?"\u2139":"i")},M=["debug","info","success","warning","error","silent"],de={"-1":"socket","4":"ip4","6":"ip6"};function P(s,...e){let t=h.f;return s=s.replace(/\%([\w\.]+)/g,function(r,n){let i=e.shift();if(n=="kb")return t("dim",(i/1e3).toFixed(1)+"kb");if(n=="path"||n=="bold")return t("bold",i);if(n=="dim")return t("dim",i);if(n=="address"){let o=de[i.addressType];return i.port?t("blueBright",[i.address||"http://127.0.0.1",i.port].join(":")):t("blueBright",o)}else{if(n=="ms")return t("yellow",Math.round(i)+"ms");if(n=="d")return t("blueBright",i);if(n=="red")return t("redBright",i);if(n=="green")return t("greenBright",i);if(n=="yellow")return t("yellowBright",i);if(n=="ref")return t("yellowBright","#"+(i.id||i));if(n=="elapsed"){i!=null&&e.unshift(i);let o=$.performance.now();return t("yellow",Math.round(o)+"ms")}else if(n=="heap"){i!=null&&e.unshift(i);let o=process.memoryUsage().heapUsed/1024/1024;return t("yellow",o.toFixed(2)+"mb")}else return i}}),[s,...e]}var F=null,H=null,O=class{static get main(){return H||(H=new this)}constructor({prefix:e=null,loglevel:t}={}){this[ce]=Date.now(),this.prefix=e?P(...e)[0]:"",this.loglevel=t||process.env.IMBA_LOGLEVEL||globalThis[C]&&globalThis[C].loglevel||"info"}write(e,...t){if(M.indexOf(e)<M.indexOf(this.loglevel))return this;let r=me[e]||e,[n,...i]=P(...t);return this.prefix&&(n=this.prefix+n),this[g]&&this[g].isSpinning?(e=="success"&&(this[g].clear(),console.log(r+" "+n,...i),this[g].frame()),this[g].text=n):console.log(r+" "+n,...i)}debug(...e){return this.write("debug",...e)}log(...e){return this.write("info",...e)}info(...e){return this.write("info",...e)}warn(...e){return this.write("warn",...e)}error(...e){return this.write("error",...e)}success(...e){return this.write("success",...e)}ts(...e){return this.write("debug",...e,$.performance.now())}spinner(){}get[g](){return F}get proxy(){var e=this;let t=function(...r){return e.info(...r)};return t.info=this.info.bind(this),t.warn=this.warn.bind(this),t.error=this.error.bind(this),t.debug=this.debug.bind(this),t.success=this.success.bind(this),t.ts=this.ts.bind(this),t.logger=this,t}async time(e,t){let r=Date.now();if(t){let n=await t();return this.info(""+e+" %ms",Date.now()-r),n}}},A=new O().proxy;var ge=a(require("module")),I=a(require("http")),Fe=a(require("https")),L=a(require("http2"));function u(s){let e;return s?(e=s.toIterable)?e.call(s):s:[]}var k=Symbol.for("#setup"),D=Symbol.for("#setup?"),z=Symbol.for("#watch"),ye=Symbol.for("#dom"),be=Symbol.for("#server"),ve=Symbol.for("#raw"),we={svg:"image/svg+xml",html:"text/html",jpg:"image/jpeg",jpeg:"image/jpeg",js:"text/javascript",mjs:"text/javascript",json:"application/json",otf:"font/otf",ttf:"font/ttf",woff:"font/woff",woff2:"font/woff2",png:"image/png",css:"text/css",avif:"image/avif"},N={svg:{"Content-Type":"image/svg+xml"},html:{"Content-Type":"text/html"},jpg:{"Content-Type":"image/jpeg"},jpeg:{"Content-Type":"image/jpeg"},js:{"Content-Type":"text/javascript"},mjs:{"Content-Type":"text/javascript"},json:{"Content-Type":"application/json"},otf:{"Content-Type":"font/otf"},ttf:{"Content-Type":"font/ttf"},woff:{"Content-Type":"font/woff"},woff2:{"Content-Type":"font/woff2"},png:{"Content-Type":"image/png"},css:{"Content-Type":"text/css"},avif:{"Content-Type":"image/avif"}},f=globalThis.process,V=class extends Set{call(e,...t){var r;r=[];for(let n of u(this))r.push(n[e](...t));return r}close(e={}){var t;t=[];for(let r of u(this))t.push(r.close(e));return t}reload(e={}){var t;t=[];for(let r of u(this))t.push(r.reload(e));return t}broadcast(e,...t){var r;r=[];for(let n of u(this))r.push(n.broadcast(e,...t));return r}emit(e,t){var r;r=[];for(let n of u(this))r.push(n.emit(e,t));return r}},y=new V,W=new class extends E.EventEmitter{constructor(){var e;super(...arguments);e=this,this.autoreload=!1,this.state={},j.default.isWorker&&f.on("message",function(t){if(e.emit("message",t),t[0]=="emit")return e.emit(...t.slice(1))})}[k](){var e=this;if(!!(this[D]!=!0?(this[D]=!0,!0):!1))return this.on("reloading",function(t){var r;console.log("is reloading - from outside"),e.state.reloading=!0,r=[];for(let n of u(y))r.push(n.pause());return r}),this.on("reloaded",async function(t){var r;e.state.reloaded=!0,console.log("is reloaded - from outside"),r=[];for(let i of u(y))r.push(i.close());let n=r;return await Promise.all(n),f.exit(0)}),this.on("manifest:change",function(t){if(f.env.IMBA_HMR)return l.update(t)}),this.on("manifest:error",function(t){return console.log("error from manifest!",t),l.errors=t,y.broadcast("errors",l.errors)}),!0}send(e){if(f.send instanceof Function)return f.send(e)}on(e,t){return e=="change"&&this.watch(),super.on(...arguments)}watch(){var e=this;if(this[z]!=!0?(this[z]=!0,!0):!1)return l.on("change:main",function(){return e.emit("change",l)})}reload(){if(!(this.isReloading!=!0?(this.isReloading=!0,!0):!1))return this;if(this.state.reloading=!0,!f.env.IMBA_SERVE){console.warn("not possible to gracefully reload servers not started via imba start");return}this.send("reload")}},U=class{constructor(e,t={}){this.url=e,[this.path,this.query]=e.split("?"),this.ext=B.default.extname(this.path),this.mimeType=we[this.ext.slice(1)]||"text/plain",this.headers={"Access-Control-Allow-Origin":"*","cache-control":"public"},Object.assign(this.headers,N[this.ext.slice(1)]||{})}respond(e,t){let r=l.urls[this.url],n=this.headers,i=r?l.resolve(r):this.path;if(!i)return console.log("found no path for",r,this.url),t.writeHead(404,{}),t.end();let o=w.default.createReadStream(i);return t.writeHead(200,n),o.pipe(t)}createReadStream(){return w.default.createReadStream(this.path)}pipe(e){return this.createReadStream().pipe(e)}},G=class{static wrap(e){return new this(e)}constructor(e){var t=this;y.add(this),this.id=Math.random(),this.closed=!1,this.paused=!1,this.server=e,this.clients=new Set,this.stalledResponses=[],this.assetResponders={},f.env.IMBA_PATH&&(this.devtoolsPath=B.default.resolve(f.env.IMBA_PATH,"devtools.imba.web.js")),this.scheme=e instanceof I.default.Server?"http":"https";let r=this.server._events.request,n=globalThis[ye];e.off("request",r),r[be]=this,e.on("listening",function(){let i=t.server.address(),o=i.address;(o=="::"||o=="0.0.0.0")&&(o="localhost");let p=""+t.scheme+"://"+o+":"+i.port+"/";return A.info("listening on %bold",p)}),l.on("change",function(i,o){return t.broadcast("manifest",o.data[ve])}),this.handler=function(i,o){var p;let v=i instanceof L.Http2ServerRequest,m=i.url,ee="/__assets__/";if(t.paused||t.closed)return o.statusCode=302,o.setHeader("Location",i.url),v||o.setHeader("Connection","close"),t.closed?(v&&i.stream.session.close(),o.end()):t.stalledResponses.push(o);if(m=="/__hmr__.js"&&t.devtoolsPath){let c=w.default.createReadStream(t.devtoolsPath);return o.writeHead(200,N.js),c.pipe(o)}if(m=="/__hmr__"){let c={"Content-Type":"text/event-stream","Cache-Control":"no-cache"};return v||(c.Connection="keep-alive"),o.writeHead(200,c),t.clients.add(o),t.broadcast("init",l.serializeForBrowser(),[o]),i.on("close",function(){return t.clients.delete(o)}),!0}if(m.indexOf(ee)==0){let c=l.urls[m];return((p=t.assetResponders)[m]||(p[m]=new U(m,t))).respond(i,o)}let S=i.headers,_;if(v?_=S[":scheme"]+"://"+S[":authority"]:_=(i.connection.encrypted?"https":"http")+"://"+S.host,n){let c=new n.Location(i.url,_);return n.Document.create({location:c},function(){return r(i,o)})}else return r(i,o)},e.on("request",this.handler),e.on("close",function(){return console.log("server is closing!!!")}),j.default.isWorker&&(W[k](),W.send("serve"))}broadcast(e,t={},r=this.clients){t=JSON.stringify(t);let n="data: "+t+`


`;for(let i of u(r))i.write("event: "+e+`
`),i.write(`id: imba
`),i.write(n);return this}pause(){return(this.paused!=!0?(this.paused=!0,!0):!1)&&this.broadcast("paused"),this}resume(){if(this.paused!=!1?(this.paused=!1,!0):!1)return this.broadcast("resumed"),this.flushStalledResponses()}flushStalledResponses(){for(let e=0,t=u(this.stalledResponses),r=t.length;e<r;e++)t[e].end();return this.stalledResponses=[]}close(){var e=this;return this.pause(),new Promise(function(t){return e.closed=!0,e.server.close(t),e.flushStalledResponses()})}};function J(s,...e){return G.wrap(s,...e)}var K=Symbol.for("#init"),d=Symbol.for("#asset"),x=class{static wrap(e){let t=new x(e);return new Proxy(t,t)}constructor(e){this.meta=e}get input(){return l.inputs[this.meta.input]}get asset(){return globalThis._MF_?this.meta:this.input.asset}set(e,t,r){return!0}get(e,t){return this.meta.meta&&this.meta.meta[t]!=null?this.meta.meta[t]:this.asset[t]}},Q=class{constructor(e=null){this[K](e)}[K](e=null){this.url=e?e.url:void 0,this.meta=e?e.meta:void 0}adoptNode(e){if(this.meta?.content){for(let t=this.meta.attributes,r=0,n=Object.keys(t),i=n.length,o,p;r<i;r++)o=n[r],p=t[o],e.setAttribute(o,p);e.innerHTML=this.meta.content}return this}toString(){return this.url}toStyleString(){return"url("+this.url+")"}};function X(s){var e,t;if(s[d])return s[d];if(s.type=="svg")return s[d]||(s[d]=new Q(s));if(s.input){let r=globalThis._MF_&&globalThis._MF_[s.input];return r&&(Object.assign(s,r),s[d]=s),s[d]||(s[d]=x.wrap(s))}return s}var Z=a(require("express"));var Y=X({input:"entry:app/index.html"});var q=Z.default();q.get(/.*/,function(s,e){return s.accepts(["image/*","html"])!="html"?e.sendStatus(404):e.send(Y.body)});J(q.listen(process.env.PORT||3e3));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2ltYmEvc3JjL2ltYmEvbWFuaWZlc3QuaW1iYSIsICJub2RlX21vZHVsZXMvaW1iYS9zcmMvaW1iYS9wcm9jZXNzLmltYmEiLCAibm9kZV9tb2R1bGVzL2ltYmEvc3JjL3V0aWxzL2xvZ2dlci5pbWJhIiwgIm5vZGVfbW9kdWxlcy9pbWJhL3NyYy9pbWJhL2Fzc2V0LmltYmEiLCAic2VydmVyLmltYmEiLCAiZW50cnk6YXBwL2luZGV4Lmh0bWwiXSwKICAibWFwcGluZ3MiOiAiO21lQUFBLE9BQTJCLHFCQUMzQixHQUFnQixpQkFDaEIsR0FBZSxzS0FnSEgsS0FBSSxTQUNkLElBQUksT0FBSyxHQUFLLEdBQUksTUFBSSxJQUVuQixZQUFZLFFBQ2YsT0FBTSxLQUVILGdCQUNILE1BQUEsU0FFRyxJQUFJLEVBQUcsU0FDVixNQUFBLE9BQU0sR0FFSCxJQUFJLEVBQUcsRUFBSyxHQUNmLFlBQUEsT0FBTSxHQUFBLEVBQ0MsS0FFSSxFQUFRLEVBQWEsSUFBSSxXQUFFLE1BQUEsWUFBQSxNQ2pJeEMsTUFBb0Isc0JBQ3BCLEVBQWdCLGlCQUNoQixFQUFlLG1CQUNmLEVBQTJCLHFCQ0ozQixNQUEwQix3R0FFcEIsR0FBTyxDQUNaLE1BQUssQ0FBRyxFQUFHLEdBQ1gsS0FBSSxDQUFHLEVBQUcsSUFDVixJQUFHLENBQUcsRUFBRyxJQUNULE9BQU0sQ0FBRyxFQUFHLElBQ1osVUFBUyxDQUFHLEVBQUcsSUFDZixRQUFPLENBQUcsRUFBRyxJQUNiLE9BQU0sQ0FBRyxFQUFHLElBQ1osY0FBYSxDQUFHLEVBQUcsSUFFbkIsTUFBSyxDQUFHLEdBQUksSUFDWixJQUFHLENBQUcsR0FBSSxJQUNWLE1BQUssQ0FBRyxHQUFJLElBQ1osT0FBTSxDQUFHLEdBQUksSUFDYixLQUFJLENBQUcsR0FBSSxJQUNYLFFBQU8sQ0FBRyxHQUFJLElBQ2QsS0FBSSxDQUFHLEdBQUksSUFDWCxNQUFLLENBQUcsR0FBSSxJQUNaLEtBQUksQ0FBRyxHQUFJ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
