(self.AMP=self.AMP||[]).push({n:"amp-ad-custom",v:"0",f:(function(AMP,_){
var k;function t(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function x(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function y(a){var b=Object.create(null);if(!a)return b;for(var c;c=aa.exec(a);){var d=x(c[1],c[1]),e=c[2]?x(c[2],c[2]):"";b[d]=e}return b};var ca="";
function z(){var a=void 0,b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;var d=!!(self.AMP_CONFIG||{}).test||!1,e=y(c.location.originalHash||c.location.hash),f=y(c.location.search);ca||(ca=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"010");c=b.AMP_MODE={localDev:!1,development:!("1"!=e.development&&!c.AMP_DEV_MODE),examiner:"2"==e.development,filter:e.filter,geoOverride:e["amp-geo"],minified:!0,lite:void 0!=f.amp_lite,test:d,log:e.log,version:"0",rtvVersion:ca}}return c}
;var da=Object.prototype.toString;function ea(a){return"number"===typeof a&&isFinite(a)};function fa(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];if(e instanceof Error&&!b){var b=void 0,f=e.message,g=String(Math.random());e.message=g;if(e.message===g)e.message=f,b=e;else{f=Error(e.message);for(b in e)f[b]=e[b];f.stack=e.stack;b=f}}else c&&(c+=" "),c+=e}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function A(a){var b=fa.apply(null,arguments);setTimeout(function(){self.reportError(b);throw b;})}self.log=self.log||{user:null,dev:null,userForEmbed:null};
var B=self.log;function D(){if(!B.user)throw Error("failed to call initLogConstructor");return B.user}function E(){if(B.dev)return B.dev;throw Error("failed to call initLogConstructor");};var F=Object.prototype.hasOwnProperty;function G(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function H(a){return a||{}};function ga(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b}function ha(a){return new Promise(function(b){b(a())})};function ia(a,b){var c=I(a);ja(a);ka(a,a,function(){return b});L(a,"url-replace")}function ja(a){var b=I(a);return a!=b&&la(a,"url-replace")?L(a,"url-replace"):null}function M(a,b){a=I(a);return L(a,b)}function ma(a){var b=na(a),b=oa(b);return L(b,"documentInfo")}function N(a,b){a=na(a);a=oa(a);return L(a,b)}function I(a){return a.__AMP_TOP||a}function na(a){return a.nodeType?M((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function oa(a){a=na(a);return a.isSingleDoc()?a.win:a}
function L(a,b){la(a,b);var c=pa(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function ka(a,b,c){var d=pa(a),e=d["url-replace"];e||(e=d["url-replace"]={obj:null,promise:null,resolve:null,context:null,ctor:null});e.ctor||e.obj||(e.ctor=c,e.context=b,e.resolve&&L(a,"url-replace"))}function pa(a){var b=a.services;b||(b=a.services={});return b}
function qa(a){a=pa(a);var b={},c;for(c in a)if(b.id=c,Object.prototype.hasOwnProperty.call(a,b.id)){var d=a[b.id];d.obj?sa(b.id,d.obj):d.promise&&d.promise.then(function(a){return function(b){return sa(a.id,b)}}(b));b={id:b.id}}}function sa(a,b){if("function"==typeof b.dispose)try{b.dispose()}catch(c){E().error("SERVICE","failed to dispose service",a,c)}}function la(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function ta(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var ua={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},va=/(&|<|>|"|'|`)/g;function wa(a,b,c){a=a.createElement(b);for(var d in c)a.setAttribute(d,c[d]);return a}function xa(a){return a?a.replace(va,ya):a}function ya(a){return ua[a]};function O(a){this.T=a;this.I=this.L=0;this.w=Object.create(null)}O.prototype.has=function(a){return!!this.w[a]};O.prototype.get=function(a){var b=this.w[a];if(b)return b.access=++this.I,b.payload};O.prototype.put=function(a,b){this.has(a)||this.L++;this.w[a]={payload:b,access:this.I};if(!(this.L<=this.T)){E().warn("lru-cache","Trimming LRU cache");a=this.w;var c=this.I+1,d,e;for(e in a){var f=a[e].access;f<c&&(c=f,d=e)}void 0!==d&&(delete a[d],this.L--)}};var P=self.AMP_CONFIG||{},za={thirdParty:P.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:P.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof P.thirdPartyFrameRegex?new RegExp(P.thirdPartyFrameRegex):P.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:P.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof P.cdnProxyRegex?new RegExp(P.cdnProxyRegex):P.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:P.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:P.localDev||!1};H({c:!0,v:!0,a:!0,ad:!0});var Aa,Ba,Ca=["javascript:","data:","vbscript:"];
function R(a,b){Aa||(Aa=self.document.createElement("a"),Ba=self.UrlCache||(self.UrlCache=new O(100)));var c=b?null:Ba,d=Aa;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a}function Da(a,b,c){if(!b)return a;var d=a.split("#",2),e=d[0].split("?",2),f=e[0]+(e[1]?c?"?"+b+"&"+e[1]:"?"+e[1]+"&"+b:"?"+b);return f+=d[1]?"#"+d[1]:""}
function Ea(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(Array.isArray(d))for(var e=0;e<d.length;e++){var f=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else b.push(encodeURIComponent(c)+"="+encodeURIComponent(d))}return b.join("&")}function Fa(a){if(!a)return!0;"string"==typeof a&&(a=R(a));return!Ca.includes(a.protocol)};function Ga(a){for(var b=a.nodeName,c=0,d=0,e=a.previousElementSibling;e&&25>d&&100>c;)e.nodeName==b&&d++,c++,e=e.previousElementSibling;return 25>d&&100>c?"."+d:""};var S;function Ha(a,b,c){var d=void 0,e=a,f=c,g;g=function(a){try{return f(a)}catch(p){throw self.reportError(p),p;}};var h=Ia(),l=!1;d&&(l=d.capture);e.addEventListener(b,g,h?d:l);return function(){e&&e.removeEventListener(b,g,h?d:l);g=e=f=null}}function Ia(){if(void 0!==S)return S;S=!1;try{var a={get capture(){S=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return S};function Ja(a,b,c){var d=c,e=Ha(a,b,function(a){try{d(a)}finally{d=null,e()}});return e}function Ka(a){var b,c;if(a.complete||"complete"==a.readyState||a.document&&"complete"==a.document.readyState)return Promise.resolve(a);var d=new Promise(function(d,f){var e=a.tagName;b="AUDIO"===e||"VIDEO"===e?Ja(a,"loadstart",d):Ja(a,"load",d);e&&(c=Ja(a,"error",f))});return d.then(function(){c&&c();return a},function(){b&&b();var c=a;c&&c.src&&(c=c.src);throw D().createError("Failed to load:",c);})};function La(a,b,c){return Ka(a).then(function(){return Ma(a,b,c)})}function Ma(a,b,c){var d=a.performance&&a.performance.timing;if(d&&0!=d.navigationStart){var e=void 0===c?d[b]:d[c]-d[b];if(ea(e)&&!(0>e))return e}}function Na(a,b){var c=a.performance&&a.performance.navigation;if(c&&void 0!==c[b])return c[b]}function Oa(a){this.ampdoc=a;this.B=this.C=void 0;this.l=Object.create(null);this.F=!1;Pa(this)}k=Oa.prototype;k.initialize=function(){};
k.get=function(a){this.F||(this.initialize(),this.F=!0);return this.l[a]};k.set=function(a,b){this.l[a]=this.l[a]||{sync:void 0,async:void 0};this.l[a].sync=b;this.B=this.C=void 0;return this};k.setAsync=function(a,b){this.l[a]=this.l[a]||{sync:void 0,async:void 0};this.l[a].async=b;this.B=this.C=void 0;return this};k.setBoth=function(a,b,c){return this.set(a,b).setAsync(a,c)};
k.getExpr=function(a,b,c){var d=this;this.F||(this.initialize(),this.F=!0);var e=a?Object.keys(a):null;if(e&&0<e.length){var f=Object.keys(this.l);e.forEach(function(a){void 0===d.l[a]&&f.push(a)});return Qa(this,f,b,c)}this.C||b||(this.C=Qa(this,Object.keys(this.l)));!this.B&&b&&(this.B=Qa(this,Object.keys(this.l),b,c));return b?this.B:this.C};
function Qa(a,b,c,d){Pa(a)&&(b=b.filter(function(b){return Pa(a).includes(b)}));d&&(b=b.filter(function(a){return d[a]}));if(0===b.length){var e=/_^/g;return e}b.sort(function(a,b){return b.length-a.length});var f=b.map(function(a){return"$"===a[0]?"\\"+a:a}).join("|"),g="\\$?("+f+")";c||(g+="(?:\\(((?:\\s*[0-9a-zA-Z-_.]*\\s*(?=,|\\)),?)*)\\s*\\))?");return new RegExp(g,"g")}
function Pa(a){if(a.N)return a.N;var b=a.ampdoc.getRootNode().head;if(!b)return null;var c=b.querySelector('meta[name="amp-allowed-url-macros"]');if(!c)return null;a.N=c.getAttribute("content").split(",").map(function(a){return a.trim()});return a.N};function Ra(a){var b;try{return JSON.parse(a)}catch(c){b&&b(c)}};function Sa(a){var b="url-replacement-v2",c=Ta(a);return!!c[b]}
function Ta(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var d=a.AMP_CONFIG[c];"number"===typeof d&&0<=d&&1>=d&&(b[c]=Math.random()<d)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var e=a.AMP_CONFIG["allow-doc-opt-in"];if(c=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')){var f=c.getAttribute("content").split(",");
for(c=0;c<f.length;c++)-1!=e.indexOf(f[c])&&(b[f[c]]=!0)}}Object.assign(b,Ua(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=y(a.location.originalHash||a.location.hash);for(var g=0;g<c.length;g++){var h=a["e-"+c[g]];"1"==h&&(b[c[g]]=!0);"0"==h&&(b[c[g]]=!1)}}return b}
function Ua(a){a:{var b;try{b=a.document.cookie}catch(g){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("=");if(-1!=d&&"AMP_EXP"==x(c.substring(0,d).trim(),void 0)){a=c.substring(d+1).trim();a=x(a,a);break a}}a=null}var e=a,f=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};var T,Va="Webkit webkit Moz moz ms O o".split(" ");function Wa(a,b,c){if(ta(b,"--"))return b;T||(T=G());var d=T[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<Va.length;f++){var g=Va[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var h=e;void 0!==a[h]&&(d=h)}c||(T[b]=d)}return d}function Xa(a,b){a=a.style;for(var c in b)a.setProperty(Wa(a,c),b[c].toString(),"important")}function U(a,b,c){var d;(b=Wa(a.style,b,void 0))&&(a.style[b]=d?c+d:c)}
function Ya(a){var b={opacity:1,visibility:"visible",animation:"none"},c;for(c in b)U(a,c,b[c])}function Za(a,b){for(var c=0;c<b.length;c++)U(a,b[c],null)};function $a(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}};function ab(){this.h=null}k=ab.prototype;k.add=function(a){var b=this;this.h||(this.h=[]);this.h.push(a);return function(){b.remove(a)}};k.remove=function(a){this.h&&(a=this.h.indexOf(a),-1<a&&this.h.splice(a,1))};k.removeAll=function(){this.h&&(this.h.length=0)};k.fire=function(a){if(this.h)for(var b=this.h,c=0;c<b.length;c++)(0,b[c])(a)};k.getHandlerCount=function(){return this.h?this.h.length:0};function bb(a,b){0>a.indexOf(b)&&a.push(b)};function cb(a){a=parseFloat(a);return ea(a)?a:void 0};var db="AMPDOC_HOST AMPDOC_HOSTNAME AMPDOC_URL AMP_VERSION AVAILABLE_SCREEN_HEIGHT AVAILABLE_SCREEN_WIDTH BACKGROUND_STATE BROWSER_LANGUAGE CANONICAL_HOST CANONICAL_HOSTNAME CANONICAL_PATH CANONICAL_URL COUNTER DOCUMENT_CHARSET DOCUMENT_REFERRER FIRST_CONTENTFUL_PAINT FIRST_VIEWPORT_READY MAKE_BODY_VISIBLE PAGE_VIEW_ID RANDOM SCREEN_COLOR_DEPTH SCREEN_HEIGHT SCREEN_WIDTH SCROLL_HEIGHT SCROLL_LEFT SCROLL_TOP SCROLL_WIDTH SHARE_TRACKING_INCOMING SHARE_TRACKING_OUTGOING SOURCE_HOST SOURCE_HOSTNAME SOURCE_PATH SOURCE_URL TIMESTAMP TIMEZONE TIMEZONE_CODE TITLE TOTAL_ENGAGED_TIME USER_AGENT VARIANT VARIANTS VIEWER VIEWPORT_HEIGHT VIEWPORT_WIDTH".split(" ");
function V(a,b){Oa.call(this,a);a:{if(a.nodeType){var c=ja((a.ownerDocument||a).defaultView);if(c){a=c;break a}}a=N(a,"url-replace")}this.V=a.getVariableSource();this.o=b}t(V,Oa);
V.prototype.initialize=function(){var a=this;this.set("AD_NAV_TIMING",function(b,c){D().assert(b,"The first argument to AD_NAV_TIMING, the start attribute name, is required");return Ma(a.o,b,c)}).setAsync("AD_NAV_TIMING",function(b,c){D().assert(b,"The first argument to AD_NAV_TIMING, the start attribute name, is required");return La(a.o,b,c)});this.set("AD_NAV_TYPE",function(){return Na(a.o,"type")});this.set("AD_NAV_REDIRECT_COUNT",function(){return Na(a.o,"redirectCount")});this.set("HTML_ATTR",
this.W.bind(this));this.set("CLIENT_ID",function(){return null});for(var b=0;b<db.length;b++){var c=db[b],d=this.V.get(c);this.set(c,d.sync).setAsync(c,d.async)}};
V.prototype.W=function(a,b){var c=20,d=10,e=10,f="A4AVariableSource",g=Array.prototype.slice.call(arguments,1);if(!a||!g.length)return"[]";if(g.length>e)return D().error(f,"At most "+e+" may be requested."),"[]";a=decodeURI(a);var h;try{h=this.o.document.querySelectorAll(a)}catch(m){return D().error(f,"Invalid selector: "+a),"[]"}if(h.length>c)return D().error(f,"CSS selector may match at most "+(c+" elements.")),"[]";for(var l=[],n=0;n<h.length&&l.length<d;++n){for(var p={},v=!1,r=0;r<g.length;++r){var u=
g[r];h[n].hasAttribute(u)&&(p[u]=h[n].getAttribute(u),v=!0)}v&&l.push(p)}return JSON.stringify(l)};function eb(a){if("undefined"!==typeof TextDecoder)return(new TextDecoder("utf-8")).decode(a);for(var b=new Uint8Array(a.buffer||a),c=Array(b.length),d=0;d<b.length;d++)c[d]=String.fromCharCode(b[d]);var e=c.join("");return decodeURIComponent(escape(e))};function gb(){this.m=G();this.j=null}k=gb.prototype;k.get=function(a){return this.m[a]||null};k.whenSignal=function(a){var b=this.j&&this.j[a];if(!b){var c=this.m[a];null!=c?b={promise:"number"==typeof c?Promise.resolve(c):Promise.reject(c)}:(c=new ga,b={promise:c.promise,resolve:c.resolve,reject:c.reject});this.j||(this.j=G());this.j[a]=b}return b.promise};
k.signal=function(a,b){if(null==this.m[a]){var c=b||Date.now();this.m[a]=c;(a=this.j&&this.j[a])&&a.resolve&&(a.resolve(c),a.resolve=void 0,a.reject=void 0)}};k.rejectSignal=function(a,b){null==this.m[a]&&(this.m[a]=b,(a=this.j&&this.j[a])&&a.reject&&(a.reject(b),a.resolve=void 0,a.reject=void 0))};k.reset=function(a){this.m[a]&&delete this.m[a];var b=this.j&&this.j[a];b&&!b.resolve&&delete this.j[a]};var hb=["AMP-AD","AMP-ANALYTICS","AMP-PIXEL","AMP-AD-EXIT"],ib;
function jb(a,b,c,d){function e(){a.contentWindow.addEventListener("securitypolicyviolation",function(a){E().warn("FIE","security policy violation",a)})}var f=I(a.ownerDocument.defaultView),g=M(f,"extensions");U(a,"visibility","hidden");a.setAttribute("referrerpolicy","unsafe-url");c.extensionIds&&c.extensionIds.forEach(function(a){return g.preloadExtension(a)});var h=kb(c);a.onload=function(){a.readyState="complete"};var l;void 0===ib&&(ib="srcdoc"in HTMLIFrameElement.prototype);if(ib)a.srcdoc=h,
l=Ka(a),b.appendChild(a),e();else{a.src="about:blank";b.appendChild(a);var n=a.contentWindow.document;n.open();e();n.write(h);l=Ka(a.contentWindow);n.close()}var p;p=lb(a)?Promise.resolve():new Promise(function(b){var c=f.setInterval(function(){lb(a)&&(b(),f.clearInterval(c))},5);l.catch(function(a){A(a)}).then(function(){b();f.clearInterval(c)})});return p.then(function(){var b=new mb(a,c,l);a.__AMP_EMBED__=b;g.installExtensionsInChildWindow(a.contentWindow,c.extensionIds||[],d);nb(b);return b})}
function lb(a){a=a.contentWindow&&a.contentWindow.document;return!!(a&&"loading"!=a.readyState&&"uninitialized"!=a.readyState&&a.body&&a.body.firstChild)}
function kb(a){var b=a.html,c=b.toUpperCase(),d=c.indexOf("<HEAD");-1!=d&&(d=c.indexOf(">",d+1)+1);-1==d&&(d=c.indexOf("<BODY"));-1==d&&(d=c.indexOf("<HTML"),-1!=d&&(d=c.indexOf(">",d+1)+1));var e=[];0<d&&e.push(b.substring(0,d));e.push('<base href="'+xa(a.url)+'">');a.fonts&&a.fonts.forEach(function(a){e.push('<link href="'+xa(a)+'" rel="stylesheet" type="text/css">')});e.push("<meta http-equiv=Content-Security-Policy content=\"script-src 'none';object-src 'none';child-src 'none'\">");0<d?e.push(b.substring(d)):
e.push(b);return e.join("")}function mb(a,b,c){this.iframe=a;this.win=a.contentWindow;this.spec=b;this.host=b.host||null;this.X=Date.now();this.H=!1;this.R=new ab;this.D=this.host?this.host.signals():new gb;this.Y=Promise.all([c,this.whenReady()])}k=mb.prototype;k.destroy=function(){N(this.iframe,"resources").removeForChildWindow(this.win);qa(this.win)};k.getStartTime=function(){return this.X};k.getUrl=function(){return this.spec.url};k.signals=function(){return this.D};k.whenReady=function(){return this.D.whenSignal("render-start")};
k.whenWindowLoaded=function(){return this.Y};k.whenIniLoaded=function(){return this.D.whenSignal("ini-load")};
function nb(a){a.host?a.host.renderStarted():a.D.signal("render-start");U(a.iframe,"visibility","");a.win.document&&a.win.document.body&&(a.win.document.documentElement.classList.add("i-amphtml-fie"),Ya(a.win.document.body));var b;b=a.host?a.host.getLayoutBox():$a(0,0,a.win.innerWidth,a.win.innerHeight);Promise.all([a.whenReady(),ob(a.iframe,a.win,b)]).then(function(){a.D.signal("ini-load")})}k.isVisible=function(){return this.H};k.onVisibilityChanged=function(a){return this.R.add(a)};
k.getBodyElement=function(){return(this.iframe.contentDocument||this.iframe.contentWindow.document).body};function pb(a,b){return N(a.iframe,"resources").measureMutateElement(a.iframe,b.measure||null,b.mutate)}
k.enterFullOverlayMode=function(){var a=this,b=this.iframe.parentNode;D().assert("amp-ad"==b.tagName.toLowerCase(),"Only <amp-ad> is allowed to enter lightbox mode.");var c;return pb(this,{measure:function(){var b=a.host?a.host.getLayoutBox():a.iframe.getBoundingClientRect(),e=-N(a.iframe,"viewport").getScrollTop(),b=0==e||0==b.width&&0==b.height?b:$a(b.left+0,b.top+e,b.width,b.height);c={top:b.top+"px",left:b.left+"px",width:b.width+"px",height:b.height+"px"}},mutate:function(){Xa(a.iframe,{position:"fixed",
left:0,right:0,bottom:0,width:"100vw",top:0,height:"100vh"});Xa(a.getBodyElement(),{background:"transparent",position:"absolute",bottom:"auto",right:"auto",top:c.top,left:c.left,width:c.width,height:c.height})}})};k.leaveFullOverlayMode=function(){var a=this;return pb(this,{mutate:function(){Za(a.iframe,"position left right top bottom width height".split(" "));Za(a.getBodyElement(),"position top left width height bottom right".split(" "))}})};
function ob(a,b,c){return N(a,"resources").getResourcesInRect(b,c).then(function(a){var b=[];a.forEach(function(a){hb.includes(a.element.tagName)||b.push(a.loadedOnce())});return Promise.all(b)})};var W={ANCESTOR_ORIGIN:!0};function qb(a){this.A=a}qb.prototype.expand=function(a,b,c,d,e){if(!a.length)return d?a:Promise.resolve(a);e=this.A.getExpr(b,!0,e);e=rb(a,e);return e.length?sb(this,a,e,b,c,d):d?a:Promise.resolve(a)};function rb(a,b){var c=[];a.replace(b,function(a,b,f){a=a.length;var d=a+f-1;c.push({start:f,stop:d,name:b,length:a})});return c}
function sb(a,b,c,d,e,f){function g(){for(var m="",q=[];l<b.length&&n<=c.length;){if(p&&l===p.start){var C=void 0;d&&F.call(d,p.name)?C={name:p.name,prioritized:d[p.name]}:(C=a.A.get(p.name),C.name=p.name);l=p.stop+1;p=c[++n];"("===b[l]?(l++,v++,h.push(C),m.trim().length&&q.push(m),q.push(g())):(m.length&&q.push(m),q.push(tb(C,void 0,e,f)));m=""}else{if("`"===b[l])r?r=!1:(u=r=!0,D().assert(""===m.trim(),'The substring "'+m+'" was lost during url-replacement. Please ensure the url syntax is correct'),
m="");else if(v&&","===b[l]&&!r){if(m.length){var Q=u?m:m.trim();q.push(Q);u=!1}","===b[l+1]&&(q.push(""),l++);m=""}else{if(v&&")"===b[l]&&!r){l++;v--;var ra=h.pop();q.push(u?m:m.trim());u=!1;return tb(ra,q,e,f)}m+=b[l]}l++}l===b.length&&m.length&&q.push(m)}return f?q.join(""):Promise.all(q).then(function(a){return a.join("")}).catch(function(a){A(a);return""})}var h=[],l=0,n=0,p=c[n],v=0,r=!1,u=!1;return g()}
function tb(a,b,c,d){var e=a.name,f;F.call(a,"prioritized")?f=a.prioritized:d&&F.call(a,"sync")?f=a.sync:d?(D().error("Expander","ignoring async replacement key: ",a.name),f=""):f=a.async||a.sync;var g;if(d){d=f;try{var h="function"===typeof d?d.apply(null,b):d,l;h&&h.then?(D().error("Expander","ignoring async macro resolution"),l=""):l="string"===typeof h||"number"===typeof h?W[e]?h.toString():encodeURIComponent(h):"";c&&(c[e]=l);g=l}catch(n){A(n),c&&(c[e]=""),g=""}}else g=ub(f,e,b,c);return g}
function ub(a,b,c,d){var e;try{return e="function"===typeof a?c?Promise.all(c).then(function(b){return a.apply(null,b)}):ha(a):Promise.resolve(a),e.then(function(a){a=null==a?"":W[b]?a:encodeURIComponent(a);d&&(d[b]=a);return a}).catch(function(a){A(a);d&&(d[b]="");return Promise.resolve("")})}catch(f){return A(f),d&&(d[b]=""),Promise.resolve("")}};function vb(a,b){this.ampdoc=a;this.A=b;this.U=new qb(this.A)}k=vb.prototype;k.expandStringSync=function(a,b,c,d){return X(this,a,b,c,!0,d)};k.expandStringAsync=function(a,b){return X(this,a,b)};k.expandUrlSync=function(a,b,c,d){return wb(a,X(this,a,b,c,!0,d))};k.expandUrlAsync=function(a,b,c){return X(this,a,b,void 0,void 0,c).then(function(b){return wb(a,b)})};k.expandInputValueAsync=function(a){return xb(this,a,!1)};k.expandInputValueSync=function(a){return xb(this,a,!0)};
function xb(a,b,c){"INPUT"==b.tagName&&b.getAttribute("type");var d=yb(b);if(!d)return c?b.value:Promise.resolve(b.value);void 0===b["amp-original-value"]&&(b["amp-original-value"]=b.value);a=X(a,b["amp-original-value"]||b.value,void 0,void 0,c,d);return c?b.value=a:a.then(function(a){return b.value=a})}
function yb(a,b){if(a=a.getAttribute("data-amp-replace")){var c={};a.trim().split(/\s+/).forEach(function(a){!b||F.call(b,a)?c[a]=!0:D().warn("URL","Ignoring unsupported replacement",a)});return c}}
k.maybeExpandLink=function(a,b){var c={CLIENT_ID:!0,QUERY_PARAM:!0},d=a.getAttribute("data-amp-addparams")||"",e=yb(a,c);if(e||d||b){var f=a["amp-original-href"]||a.getAttribute("href"),g=R(f);null==a["amp-original-href"]&&(a["amp-original-href"]=f);if(d)var h=y(d),f=Da(f,Ea(h));a:if(h=ma(this.ampdoc).get(),g.origin==R(h.canonicalUrl).origin||g.origin==R(h.sourceUrl).origin)g=!0;else{if((h=this.ampdoc.getRootNode().querySelector("meta[name=amp-link-variable-allowed-origin]"))&&h.hasAttribute("content"))for(var h=
h.getAttribute("content").trim().split(/\s+/),l=0;l<h.length;l++)if(g.origin==R(h[l]).origin){g=!0;break a}g=!1}var n=g;if(!n)return e&&D().warn("URL","Ignoring link replacement",f," because the link does not go to the document's source, canonical, or whitelisted origin."),a.href=f;if(b){if(!e||!e.QUERY_PARAM){var p={QUERY_PARAM:!0};b=this.expandUrlSync(b,void 0,void 0,p)}g=y(b);f=Da(f,Ea(g))}e&&(f=this.expandUrlSync(f,void 0,void 0,e));return a.href=f}};
function X(a,b,c,d,e,f){var g=Sa(a.ampdoc.win);if(g)return a.U.expand(b,c,d,e,f);var h=a.A.getExpr(c),l,n=b.replace(h,function(b,g,h){var p=[];"string"==typeof h&&(p=h.split(/,\s*/));if(f&&!f[g])return b;var m;if(c&&g in c)m=c[g];else if(m=a.A.get(g))if(e){if(m=m.sync,!m)return D().error("UrlReplacements","ignoring async replacement key: ",g),""}else m=m.async||m.sync;var q;try{q="function"==typeof m?m.apply(null,p):m}catch(Q){e&&(q=""),A(Q)}if(q&&q.then){if(e)return D().error("UrlReplacements","ignoring promise value for key: ",
g),"";var r=q.catch(function(a){A(a)}).then(function(a){n=n.replace(b,W[b]?a:null==a?"":encodeURIComponent(a));d&&(d[b]=a)});l=l?l.then(function(){return r}):r;return b}d&&(d[b]=q);return W[b]?q:null==q?"":encodeURIComponent(q)});l&&(l=l.then(function(){return n}));return e?n:l||Promise.resolve(n)}k.collectVars=function(a,b){var c=Object.create(null);return X(this,a,b,c).then(function(){return c})};
k.collectUnwhitelistedVarsSync=function(a){var b=a.getAttribute("src"),c=Object.create(null);this.expandStringSync(b,void 0,c);var d=Object.keys(c),e=yb(a);return e?d.filter(function(a){return!e[a]}):d};function wb(a,b){var c=R(b,!0).protocol,d=R(a,!0).protocol;if(c!=d)return D().error("UrlReplacements","Illegal replacement of the protocol: ",a),a;D().assert(Fa(b),"The replacement url has invalid protocol: %s",b);return b}k.getVariableSource=function(){return this.A};var zb=["<script amp-ad-metadata type=application/json>",'<script type="application/json" amp-ad-metadata>',"<script type=application/json amp-ad-metadata>"];
function Ab(a){for(var b=-1,c,d=0;d<zb.length&&!(c=zb[d],b=a.lastIndexOf(c),0<=b);d++);if(0>b)return E().warn("amp-ad-util","Could not locate start index for amp meta data in: "+a),null;var e=a.lastIndexOf("\x3c/script>");if(0>e)return E().warn("amp-ad-util","Could not locate closing script tag for amp meta data in: %s",a),null;try{var f=JSON.parse(a.slice(b+c.length,e)),g=f.ampRuntimeUtf16CharOffsets;if(!Array.isArray(g)||2!=g.length||"number"!==typeof g[0]||"number"!==typeof g[1])throw Error("Invalid runtime offsets");
var h={};if(f.customElementExtensions){if(h.customElementExtensions=f.customElementExtensions,!Array.isArray(h.customElementExtensions))throw Error("Invalid extensions",h.customElementExtensions);}else h.customElementExtensions=[];if(f.customStylesheets){h.customStylesheets=f.customStylesheets;var l="Invalid custom stylesheets";if(!Array.isArray(h.customStylesheets))throw Error(l);h.customStylesheets.forEach(function(a){var b;(b="[object Object]"!==da.call(a)||!a.href||"string"!==typeof a.href)||
(a=a.href,"string"==typeof a&&(a=R(a)),(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b),b=!b);if(b)throw Error(l);})}Array.isArray(f.images)&&(h.images=f.images.splice(0,5));h.minifiedCreative=a.slice(0,g[0])+a.slice(g[1],b)+a.slice(e+9);return h}catch(n){return E().warn("amp-ad-util","Invalid amp metadata: %s",a.slice(b+c.length,e)),null}};var Bb={REQUEST_ERROR:"REQUEST_ERROR",INVALID_RESPONSE:"INVALID_RESPONSE",EMPTY_RESPONSE:"EMPTY_RESPONSE",VALIDATOR_ERROR:"VALIDATOR_ERROR",RENDERER_ERROR:"RENDERER_ERROR"};function Cb(){}Cb.prototype.validate=function(){};function Y(){}Y.prototype.render=function(){};function Db(a){a=AMP.BaseElement.call(this,a)||this;a.O=null;a.M=G();a.K=G();a.G=G();a.J={};for(var b in Bb)a.G[b]="COLLAPSE";a.P=0;return a}t(Db,AMP.BaseElement);k=Db.prototype;k.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};k.onLayoutMeasure=function(){Eb(this)};
k.layoutCallback=function(){var a=this;return this.O.then(function(b){return Fb(a,b)}).then(function(b){return Gb(a,b)}).catch(function(b){return Hb(a,b.type,b.msg)})};k.onFailure=function(a,b){this.G[a]&&E().warn("amp-ad-network-base","Recovery mode for failure type "+a+" already registered!");this.G[a]=b};k.registerValidator=function(a,b){b=void 0===b?"default":b;this.M[b]&&E().warn("amp-ad-network-base",b+" validator already registered.");this.M[b]=a};
k.registerRenderer=function(a,b){this.K[b]&&E().warn("amp-ad-network-base","Rendering mode already registered for type '"+b+"'");this.K[b]=a};k.getContext=function(){return this.J};k.getRequestUrl=function(){};k.setRequestRetries=function(a){this.P=a};function Eb(a){N(a.getAmpDoc(),"viewer").whenFirstVisible().then(function(){var b=a.getRequestUrl();a.O=M(a.win,"xhr").fetch(b,{mode:"cors",method:"GET",credentials:"include"})})}
function Fb(a,b){return b.arrayBuffer?b.arrayBuffer().then(function(c){var d=b.headers.get("AMP-Ad-Response-Type")||"default";return a.M[d].validate(a.J,c,b.headers).catch(function(a){return Promise.reject({type:"VALIDATOR_ERROR",msg:a})})}):Promise.reject(Hb(a,"INVALID_RESPONSE"))}function Gb(a,b){return a.K[b.type].render(a.J,a.element,b.creativeData).catch(function(a){return Promise.reject({type:"RENDERER_ERROR",msg:a})})}
function Hb(a,b,c){var d=a.G[b];c&&E().warn("amp-ad-network-base",c);switch(d){case "COLLAPSE":a.attemptChangeSize(0,0);break;case "RETRY":a.P--&&Eb(a);break;default:E().error("amp-ad-network-base","Invalid recovery mode!")}};var Jb={mode:"cors",method:"GET",ampCors:!1,credentials:"omit"};function Z(a){this.o=a;this.w=new O(5)}Z.prototype.fetch=function(a){var b=Kb(a),c=this.w.get(b);c||(c=M(this.o,"xhr").fetchText(b,Jb).then(function(a){return a.text()}),this.w.put(b,c));return c};Z.prototype.render=function(a,b){return M(this.o,"templates").findAndRenderTemplate(b,a)};
Z.prototype.insertAnalytics=function(a,b){b=Array.isArray(b)?b:[b];for(var c=0;c<b.length;c++){var d=b[c],e=a.ownerDocument.createElement("amp-analytics");d.remote&&e.setAttribute("config",d.remote);d.type&&e.setAttribute("type",d.type);if(d.inline){var f=wa(a.ownerDocument,"script",H({type:"application/json"}));f.textContent=JSON.stringify(d.inline);e.appendChild(f)}a.appendChild(e)}};
function Kb(a){var b=za.cdn.slice(8),c=R(a);return 0<c.origin.indexOf(b)?a:"https://"+c.hostname.replace(/-/g,"--").replace(/\./g,"-")+"."+b+"/ad/s/"+c.hostname+c.pathname};function Lb(a,b,c,d){var e=wa(c.ownerDocument,"iframe",H({height:b.height,width:b.width,frameborder:"0",allowfullscreen:"",allowtransparency:"",scrolling:"no"})),f=[];d.customStylesheets&&d.customStylesheets.forEach(function(a){(a=a.href)&&f.push(a)});return jb(e,c,{host:c,url:a,html:d.minifiedCreative,extensionIds:d.customElementExtensions||[],fonts:f},function(a){var b=c.getAmpDoc(),d=new V(c.getAmpDoc(),a);ia(a,new vb(b,d))}).then(function(a){var b=c.isInViewport(),d=a;d.H!=b&&(d.H=b,d.R.fire(d.H));
var f=a.iframe.contentDocument||a.win.document;U(f.body,"visibility","visible");return e})};function Mb(a){Y.apply(this,arguments)}t(Mb,Y);
Mb.prototype.render=function(a,b,c){if(!c.creative&&!c.rawCreativeBytes)return Promise.resolve();var d=c.creative||eb(c.rawCreativeBytes),e=a.win,f;(f=e.defaultBootstrapSubDomain)||(e.crypto&&e.crypto.getRandomValues?(f=new Uint32Array(2),e.crypto.getRandomValues(f),f=String(f[0])+f[1]):f=String(e.Math.random()).substr(2)+"0",f="d-"+f);e.defaultBootstrapSubDomain=f;var g="https://"+e.defaultBootstrapSubDomain+("."+za.thirdPartyFrameHost+"/0/")+"nameframe.html";f=a.win;var h=
a.sentinel,e=c.additionalContextMetadata,l=Date.now(),n=b.getAttribute("width"),p=b.getAttribute("height"),e=e?e:{};e.width=cb(n);e.height=cb(p);b.getAttribute("title")&&(e.title=b.getAttribute("title"));var v=f.location.href;"about:srcdoc"==v&&(v=f.parent.location.href);var r=ma(b).get(),u=N(b,"viewer"),n=u.getUnconfirmedReferrerUrl(),m=b.getPageLayoutBox(),p=e,q=za.thirdParty+"/0/ampcontext-v0.js",C=r.sourceUrl,Q=r.canonicalUrl,r=r.pageViewId,v={href:v},ra=b.tagName,Ib={localDev:!1,
development:z().development,filter:z().filter,minified:!0,lite:z().lite,test:!1,log:z().log,version:z().version,rtvVersion:z().rtvVersion},Rb=!(!f.AMP_CONFIG||!f.AMP_CONFIG.canary),u=!u.isVisible(),m=m?{left:m.left,top:m.top,width:m.width,height:m.height}:null,Sb=b.getIntersectionChangeEntry(),w;w=b;for(var ba=[],J=0;w&&1==w.nodeType&&25>J;){var K="";w.id&&(K="/"+w.id);ba.push(""+w.nodeName.toLowerCase()+K+Ga(w));J++;w=w.parentElement}w=ba.join();ba=w.length;J=5381;for(K=0;K<ba;K++)J=33*J^w.charCodeAt(K);
p._context=H({ampcontextVersion:"0",ampcontextFilepath:q,sourceUrl:C,referrer:n,canonicalUrl:Q,pageViewId:r,location:v,startTime:l,tagName:ra,mode:Ib,canary:Rb,hidden:u,initialLayoutRect:m,initialIntersection:Sb,domFingerprint:String(J>>>0),experimentToggles:Ta(f),sentinel:h});(f=b.getAttribute("src"))&&(e.src=f);var fb=e;fb.creative=d;a=H({src:g,name:JSON.stringify(fb),height:a.size.height,width:a.size.width,frameborder:"0",allowfullscreen:"",allowtransparency:"",scrolling:"no",
marginwidth:"0",marginheight:"0"});c.sentinel&&(a["data-amp-3p-sentinel"]=c.sentinel);a=wa(b.ownerDocument,"iframe",a);b.appendChild(a);return Promise.resolve()};var Nb;function Ob(a){Cb.apply(this,arguments)}t(Ob,Cb);
Ob.prototype.validate=function(a,b,c){b=eb(b);var d=Ra(b);return!d||!c||"amp-mustache"!==c.get("AMP-Ad-Template-Extension")&&"amp-mustache"!==c.get("AMP-template-amp-creative")?Promise.resolve({creativeData:{creative:b},adResponseType:"template",type:"NON_AMP"}):(Nb||(Nb=new Z(a.win))).fetch(d.templateUrl).then(function(b){b=Ab(b);d.analytics&&bb(b.customElementExtensions,"amp-analytics");bb(b.customElementExtensions,"amp-mustache");var c=M(a.win,"extensions");b.customElementExtensions.forEach(function(a){return c.preloadExtension(a)});
return Promise.resolve({creativeData:{templateData:d,creativeMetadata:b},adResponseType:"template",type:"AMP"})})};function Pb(){}t(Pb,Y);Pb.prototype.render=function(a,b,c){return Lb(a.adUrl,a.size,b,c.creativeMetadata).then(function(b){var d=c.templateData,f=d.data;if(!f)return Promise.resolve();var g=Nb||(Nb=new Z(a.win));return g.render(f,b.contentWindow.document.body).then(function(a){var c=d.analytics;c&&g.insertAnalytics(a,c);var e=b.contentWindow.document.querySelector("template");e.parentNode.replaceChild(a,e)})})};var Qb=new Ob,Tb=new Mb;function Ub(a){a=Db.call(this,a)||this;a.registerValidator(Qb,"template");a.registerRenderer(new Pb,"AMP");a.registerRenderer(Tb,"NON_AMP");a.S=a.element.getAttribute("src");a.getContext().win=a.win;return a}t(Ub,Db);Ub.prototype.buildCallback=function(){this.getContext().size={width:this.element.getAttribute("width"),height:this.element.getAttribute("height"),layout:this.element.getAttribute("layout")}};
Ub.prototype.getRequestUrl=function(){var a=this,b=this.S;Object.keys(this.element.dataset).forEach(function(c){if(ta(c,"requestParam")){var d=c.slice(12,c.length);if(d){var e=d.charAt(0).toLowerCase()+d.slice(1);b=Da(b,encodeURIComponent(e)+"="+encodeURIComponent(a.element.dataset[c]),void 0)}}});return this.getContext().adUrl=b};(function(a){a.registerElement("amp-ad-custom",Ub)})(self.AMP);
})});
//# sourceMappingURL=amp-ad-custom-0.1.js.map
