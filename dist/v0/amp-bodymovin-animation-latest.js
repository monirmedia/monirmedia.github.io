(self.AMP=self.AMP||[]).push({n:"amp-bodymovin-animation",v:"0",f:(function(AMP,_){
function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function n(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ba=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function p(a){var b=Object.create(null);if(!a)return b;for(var c;c=ba.exec(a);){var d=n(c[1],c[1]),e=c[2]?n(c[2],c[2]):"";b[d]=e}return b};var q="";
function t(){var a=void 0,b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;var d=!!(self.AMP_CONFIG||{}).test||!1,e=p(c.location.originalHash||c.location.hash),f=p(c.location.search);q||(q=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"010");c=b.AMP_MODE={localDev:!1,development:!("1"!=e.development&&!c.AMP_DEV_MODE),examiner:"2"==e.development,filter:e.filter,geoOverride:e["amp-geo"],minified:!0,lite:void 0!=f.amp_lite,test:d,log:e.log,version:"0",rtvVersion:q}}return c}
;var w=Object.prototype.toString;function x(a){return"number"===typeof a&&isFinite(a)};self.log=self.log||{user:null,dev:null,userForEmbed:null};var y=self.log;function B(){if(!y.user)throw Error("failed to call initLogConstructor");return y.user}function C(){if(y.dev)return y.dev;throw Error("failed to call initLogConstructor");};function D(a){return a||{}};function E(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function ca(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;if(b=b!=(b.__AMP_TOP||b)&&F(b,"url-replace")?G(b,"url-replace"):null)return b}return H(a,"url-replace")}function I(a,b){a=a.__AMP_TOP||a;return G(a,b)}function H(a,b){a=L(a);a=M(a);return G(a,b)}function L(a){return a.nodeType?I((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function M(a){a=L(a);return a.isSingleDoc()?a.win:a}
function G(a,b){F(a,b);var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function F(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function N(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function O(a){this.G=a;this.m=this.A=0;this.j=Object.create(null)}O.prototype.has=function(a){return!!this.j[a]};O.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.m,b.payload};O.prototype.put=function(a,b){this.has(a)||this.A++;this.j[a]={payload:b,access:this.m};if(!(this.A<=this.G)){C().warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.m+1,d,e;for(e in a){var f=a[e].access;f<c&&(c=f,d=e)}void 0!==d&&(delete a[d],this.A--)}};var P=self.AMP_CONFIG||{},Q={thirdParty:P.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:P.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof P.thirdPartyFrameRegex?new RegExp(P.thirdPartyFrameRegex):P.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:P.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof P.cdnProxyRegex?new RegExp(P.cdnProxyRegex):P.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:P.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:P.localDev||!1};D({c:!0,v:!0,a:!0,ad:!0});var R,S;
function T(a){var b;R||(R=self.document.createElement("a"),S=self.UrlCache||(self.UrlCache=new O(100)));var c=b?null:S,d=R;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a}function da(a){"string"==typeof a&&(a=T(a));var b;(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b);return b}
function U(a,b){var c;c=void 0===c?"source":c;B().assert(null!=a,"%s %s must be available",b,c);var d=a;B().assert(da(d)||/^(\/\/)/.test(d),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,d);return d};function ea(a){for(var b=a.nodeName,c=0,d=0,e=a.previousElementSibling;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?"."+d:""};var V;function fa(a,b){var c=void 0,d=a,e=b,f;f=function(a){try{return e(a)}catch(k){throw self.reportError(k),k;}};var g=ga(),h=!1;c&&(h=c.capture);d.addEventListener("message",f,g?c:h);return function(){d&&d.removeEventListener("message",f,g?c:h);f=d=e=null}}function ga(){if(void 0!==V)return V;V=!1;try{var a={get capture(){V=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return V};function ha(a,b){var c=ia(a);return!!c[b]}
function ia(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(f){var g=
f.getAttribute("content").split(",");for(c=0;c<g.length;c++)-1!=e.indexOf(g[c])&&(b[g[c]]=!0)}}Object.assign(b,ja(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=p(a.location.originalHash||a.location.hash);for(var h=0;h<c.length;h++){var l=a["e-"+c[h]];"1"==l&&(b[c[h]]=!0);"0"==l&&(b[c[h]]=!1)}}return b}
function ja(a){a:{var b;try{b=a.document.cookie}catch(g){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("=");if(-1!=d&&"AMP_EXP"==n(c.substring(0,d).trim(),void 0)){a=c.substring(d+1).trim();a=n(a,a);break a}}a=null}var e=a,f=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};var W,ka="Webkit webkit Moz moz ms O o".split(" ");function la(a){var b,c;c=a.style;if(N("border","--"))c="border";else{W||(W=Object.create(null));var d=W.border;if(!d){d="border";if(void 0===c.border){var e;b:{for(e=0;e<ka.length;e++){var f=ka[e]+"Border";if(void 0!==c[f]){e=f;break b}}e=""}void 0!==c[e]&&(d=e)}W.border=d}c=d}c&&(a.style[c]=b?"none"+b:"none")};function ma(a){a=parseFloat(a);return x(a)?a:void 0};var X={};
function na(a,b,c){B().assert("bodymovinanimation","Attribute type required for <amp-ad>: %s",b);for(var d=0,e=a;e&&e!=e.parent;e=e.parent)d++;var d=String(d)+"-"+oa(a),f=e={},g=b.dataset,h;for(h in g)N(h,"vars")||(f[h]=g[h]);if(h=b.getAttribute("json")){var l;a:{try{l=JSON.parse(h);break a}catch(za){}l=void 0}if(void 0===l)throw B().createError("Error parsing JSON in json attribute in element %s",b);for(var k in l)f[k]=l[k]}k=e;l=Date.now();e=b.getAttribute("width");f=b.getAttribute("height");k=
k?k:{};k.width=ma(e);k.height=ma(f);b.getAttribute("title")&&(k.title=b.getAttribute("title"));var z=a.location.href;"about:srcdoc"==z&&(z=a.parent.location.href);var e=L(b),e=M(e),A=G(e,"documentInfo").get(),J=H(b,"viewer"),e=J.getUnconfirmedReferrerUrl(),r=b.getPageLayoutBox(),f=k;h=Q.thirdParty+"/0/ampcontext-v0.js";var g=A.sourceUrl,qa=A.canonicalUrl,A=A.pageViewId,z={href:z},ra=b.tagName,sa={localDev:!1,development:t().development,filter:t().filter,minified:!0,lite:t().lite,
test:!1,log:t().log,version:t().version,rtvVersion:t().rtvVersion},ta=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary),J=!J.isVisible(),r=r?{left:r.left,top:r.top,width:r.width,height:r.height}:null,ua=b.getIntersectionChangeEntry(),m;m=b;for(var K=[],u=0;m&&1==m.nodeType&&25>u;){var v="";m.id&&(v="/"+m.id);K.push(""+m.nodeName.toLowerCase()+v+ea(m));u++;m=m.parentElement}m=K.join();K=m.length;u=5381;for(v=0;v<K;v++)u=33*u^m.charCodeAt(v);f._context=D({ampcontextVersion:"0",ampcontextFilepath:h,
sourceUrl:g,referrer:e,canonicalUrl:qa,pageViewId:A,location:z,startTime:l,tagName:ra,mode:sa,canary:ta,hidden:J,initialLayoutRect:r,initialIntersection:ua,domFingerprint:String(u>>>0),experimentToggles:ia(a),sentinel:d});(a=b.getAttribute("src"))&&(k.src=a);e=k;e.type="bodymovinanimation";Object.assign(e._context,c);return e}
function pa(a,b,c){var d={},e=d.disallowCustom,f=d.allowFullscreen;c=na(a,b,c);var g=a.document.createElement("iframe");X[c.type]||(X[c.type]=0);X[c.type]+=1;var d=va(a,"bodymovinanimation",e),h=T(d).hostname,l=JSON.stringify(D({host:h,type:c.type,count:X[c.type],attributes:c}));g.src=d;g.ampLocation=T(d);g.name=l;c.width&&(g.width=c.width);c.height&&(g.height=c.height);c.title&&(g.title=c.title);f&&g.setAttribute("allowfullscreen","true");g.setAttribute("scrolling","no");la(g);g.onload=function(){this.readyState=
"complete"};ha(a,"no-sync-xhr-in-ads")&&g.setAttribute("allow","sync-xhr 'none';");ha(a,"sandbox-ads")&&wa(g);g.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return g}
function va(a,b,c){var d=void 0,e=a.bootstrapBaseUrl;if(e)a=e;else{var f;f=d;var g=a.document.querySelector('meta[name="amp-3p-iframe-src"]');g?c?(B().error("3p-frame","3p iframe url disabled for "+(b||"unknown")),f=null):(b=U(g.getAttribute("content"),g),B().assert(-1==b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,g),c=T(b),B().assert("localhost"==c.hostname&&!f||c.origin!=T(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",
b,c.origin,g),f=b+"?0"):f=null;f||(a.defaultBootstrapSubDomain=a.defaultBootstrapSubDomain||"d-"+oa(a),f="https://"+a.defaultBootstrapSubDomain+("."+Q.thirdPartyFrameHost+"/0/")+"frame.html");a=a.bootstrapBaseUrl=f}return a}function oa(a){var b;if(a.crypto&&a.crypto.getRandomValues){var c=new Uint32Array(2);a.crypto.getRandomValues(c);b=String(c[0])+c[1]}else b=String(a.Math.random()).substr(2)+"0";return b}
function wa(a){if(a.sandbox&&a.sandbox.supports){for(var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],c="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts".split(" "),d=0;d<b.length;d++){var e=b[d];if(!a.sandbox.supports(e)){C().info("3p-frame","Iframe doesn't support "+e);return}}a.sandbox=b.join(" ")+" "+c.join(" ")}};function xa(a,b){var c,d;c=void 0===c?".":c;d=void 0===d?0:d;U(b.getAttribute("src"),b);return ya(a,b,d).then(function(b){return I(a.win,"batched-xhr").fetchJson(b.xhrUrl,b.fetchOpt)}).then(function(a){return a.json()}).then(function(a){if(null==a)throw Error("Response is undefined.");var b;b=c||".";if("."!=b){b=b.split(".");for(var e=0;e<b.length;e++){var d=b[e];if(d&&a&&void 0!==a[d]&&(null==a||"object"!=typeof a?0:Object.prototype.hasOwnProperty.call(a,d)))a=a[d];else{a=void 0;break}}}b=a;return b})}
function ya(a,b,c){var d=b.getAttribute("src"),e=ca(a),f=1<=c?e.expandUrlAsync(d):Promise.resolve(d);return f.then(function(a){if(1==c){var d=e.collectUnwhitelistedVarsSync(b);if(0<d.length)throw B().createError("URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. "+('Please add data-amp-replace="'+d.join(" ")+'" to the ')+("<"+b.tagName+"> element. See https://bit.ly/amp-var-subs."));}var f={};b.hasAttribute("credentials")?f.credentials=b.getAttribute("credentials"):
f.requireAmpResponseSourceOrigin=!1;return{xhrUrl:a,fetchOpt:f}})};function Y(a){a=AMP.BaseElement.call(this,a)||this;a.F=L(a.element);a.h=null;a.D=null;a.w=null;a.C=null;a.l=null;a.o=null;a.B=null;return a}aa(Y,AMP.BaseElement);Y.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
Y.prototype.preconnectCallback=function(a){var b="svg"===this.w?"https://cdnjs.cloudflare.com/ajax/libs/bodymovin/4.13.0/bodymovin_light.min.js":"https://cdnjs.cloudflare.com/ajax/libs/bodymovin/4.13.0/bodymovin.min.js",c=this.preconnect,d=va(this.win,void 0,void 0);c.preload(d,"document");c.preload(Q.thirdParty+"/0/f.js","script");this.preconnect.url(b,a)};
Y.prototype.buildCallback=function(){var a=this;this.D=this.element.getAttribute("loop")||"true";this.C=!this.element.hasAttribute("noautoplay");this.w=this.element.getAttribute("renderer")||"svg";B().assert(this.element.hasAttribute("src"),"The src attribute must be specified for <amp-bodymovin-animation>");U(this.element.getAttribute("src"),this.element);var b=new E;this.l=b.promise;this.o=b.resolve;this.registerAction("play",function(){Z(a,"play")},1);this.registerAction("pause",function(){Z(a,
"pause")},1);this.registerAction("stop",function(){Z(a,"stop")},1);this.registerAction("seekTo",function(b){var c=b.args;if(c){var e=c,f=parseFloat(e&&e.time);x(f)&&Z(a,"seekTo","time",f);e=parseFloat(e&&e.percent);x(e)&&Z(a,"seekTo","percent",Math.min(Math.max(e,0),1))}},1)};
Y.prototype.layoutCallback=function(){var a=this,b=xa(this.F,this.element);return b.then(function(b){var c=pa(a.win,a.element,{loop:a.D,autoplay:a.C,renderer:a.w,animationData:b});return I(a.win,"vsync").mutatePromise(function(){a.applyFillContent(c);var b;b=a.H.bind(a);b=fa(a.win,b);a.B=b;a.element.appendChild(c);a.h=c}).then(function(){return a.l})})};
Y.prototype.unlayoutCallback=function(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.h=null}this.B&&this.B();a=new E;this.l=a.promise;this.o=a.resolve;return!0};Y.prototype.H=function(a){if((!this.h||a.source==this.h.contentWindow)&&a.data&&("[object Object]"===w.call(a.data)||N(a.data,"{"))){var b="[object Object]"===w.call(a.data)?a.data:JSON.parse(a.data);void 0!==b&&"ready"==b.action&&this.o()}};
function Z(a,b,c,d){a.l.then(function(){if(a.h&&a.h.contentWindow){var e=JSON.stringify(D({action:b,valueType:c||"",value:d||""}));a.h.contentWindow.postMessage(e,"*")}})}(function(a){a.registerElement("amp-bodymovin-animation",Y)})(self.AMP);
})});
//# sourceMappingURL=amp-bodymovin-animation-0.1.js.map
