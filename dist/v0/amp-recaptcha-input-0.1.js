(self.AMP=self.AMP||[]).push({n:"amp-recaptcha-input",v:"0",f:(function(AMP,_){
function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var e in b)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,e);d&&Object.defineProperty(a,e,d)}else a[e]=b[e]}function r(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ba=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function t(a){var b=Object.create(null);if(!a)return b;for(var c;c=ba.exec(a);){var e=r(c[1],c[1]),d=c[2]?r(c[2],c[2]):"";b[e]=d}return b};var v="";
function w(){var a=void 0,b=a||self,c;if(b.AMP_MODE)c=b.AMP_MODE;else{c=b;var e=!!(self.AMP_CONFIG||{}).test||!1,d=t(c.location.originalHash||c.location.hash),f=t(c.location.search);v||(v=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"010");c=b.AMP_MODE={localDev:!1,development:!("1"!=d.development&&!c.AMP_DEV_MODE),examiner:"2"==d.development,filter:d.filter,geoOverride:d["amp-geo"],minified:!0,lite:void 0!=f.amp_lite,test:e,log:d.log,version:"0",rtvVersion:v}}return c}
;self.log=self.log||{user:null,dev:null,userForEmbed:null};var x=self.log;function A(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user}function B(){if(x.dev)return x.dev;throw Error("failed to call initLogConstructor");};function C(a){return a||{}};function D(){var a,b;this.promise=new Promise(function(c,e){a=c;b=e});this.resolve=a;this.reject=b};function E(a,b){a=a.__AMP_TOP||a;return F(a,b)}function G(a){return a.nodeType?E((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function H(a){a=G(a);return a.isSingleDoc()?a.win:a}function F(a,b){var c=I(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function I(a){var b=a.services;b||(b=a.services={});return b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function J(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function ca(a){a.parentElement&&a.parentElement.removeChild(a)};function M(a){this.K=a;this.w=this.G=0;this.m=Object.create(null)}M.prototype.has=function(a){return!!this.m[a]};M.prototype.get=function(a){var b=this.m[a];if(b)return b.access=++this.w,b.payload};M.prototype.put=function(a,b){this.has(a)||this.G++;this.m[a]={payload:b,access:this.w};if(!(this.G<=this.K)){B().warn("lru-cache","Trimming LRU cache");a=this.m;var c=this.w+1,e,d;for(d in a){var f=a[d].access;f<c&&(c=f,e=d)}void 0!==e&&(delete a[e],this.G--)}};var N=self.AMP_CONFIG||{},O={thirdParty:N.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:N.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof N.thirdPartyFrameRegex?new RegExp(N.thirdPartyFrameRegex):N.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:N.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof N.cdnProxyRegex?new RegExp(N.cdnProxyRegex):N.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:N.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:N.localDev||!1};C({c:!0,v:!0,a:!0,ad:!0});var P,da;
function Q(a){var b;P||(P=self.document.createElement("a"),da=self.UrlCache||(self.UrlCache=new M(100)));var c=b?null:da,e=P;if(c&&c.has(a))a=c.get(a);else{e.href=a;e.protocol||(e.href=e.href);var d={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
e.origin&&"null"!=e.origin?e.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;c&&c.put(a,d);a=d}return a}function ea(a){"string"==typeof a&&(a=Q(a));var b;(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b);return b};function fa(a){for(var b=a.nodeName,c=0,e=0,d=a.previousElementSibling;d&&25>e&&100>c;)d.nodeName==b&&e++,c++,d=d.previousElementSibling;return 25>e&&100>c?"."+e:""};var R;function ga(a,b,c){var e=void 0,d=a,f=c,g;g=function(a){try{return f(a)}catch(n){throw self.reportError(n),n;}};var h=ha(),k=!1;e&&(k=e.capture);d.addEventListener(b,g,h?e:k);return function(){d&&d.removeEventListener(b,g,h?e:k);g=d=f=null}}function ha(){if(void 0!==R)return R;R=!1;try{var a={get capture(){R=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return R};function S(a,b,c){var e=c,d=ga(a,b,function(a){try{e(a)}finally{e=null,d()}});return d}function ia(a){var b,c;if(a.complete||"complete"==a.readyState||a.document&&"complete"==a.document.readyState)return Promise.resolve(a);var e=new Promise(function(d,e){var f=a.tagName;b="AUDIO"===f||"VIDEO"===f?S(a,"loadstart",d):S(a,"load",d);f&&(c=S(a,"error",e))});return e.then(function(){c&&c();return a},function(){b&&b();var c=a;c&&c.src&&(c=c.src);throw A().createError("Failed to load:",c);})};function ja(a,b){try{return JSON.parse(a)}catch(c){b&&b(c)}};function T(a,b){var c=ka(a);return!!c[b]}
function ka(a){if(a.__AMP__EXPERIMENT_TOGGLES)return a.__AMP__EXPERIMENT_TOGGLES;a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);var b=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var c in a.AMP_CONFIG){var e=a.AMP_CONFIG[c];"number"===typeof e&&0<=e&&1>=e&&(b[c]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length){var d=a.AMP_CONFIG["allow-doc-opt-in"],f=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(f){var g=
f.getAttribute("content").split(",");for(c=0;c<g.length;c++)-1!=d.indexOf(g[c])&&(b[g[c]]=!0)}}Object.assign(b,la(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){c=a.AMP_CONFIG["allow-url-opt-in"];a=t(a.location.originalHash||a.location.hash);for(var h=0;h<c.length;h++){var k=a["e-"+c[h]];"1"==k&&(b[c[h]]=!0);"0"==k&&(b[c[h]]=!1)}}return b}
function la(a){a:{var b;try{b=a.document.cookie}catch(g){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),e=c.indexOf("=");if(-1!=e&&"AMP_EXP"==r(c.substring(0,e).trim(),void 0)){a=c.substring(e+1).trim();a=r(a,a);break a}}a=null}var d=a,f=d?d.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};var U,ma="Webkit webkit Moz moz ms O o".split(" ");function na(a,b){var c=void 0;if(J(b,"--"))return b;U||(U=Object.create(null));var e=U[b];if(!e||c){e=b;if(void 0===a[b]){var d=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<ma.length;f++){var g=ma[f]+d;if(void 0!==a[g]){d=g;break a}}d=""}var h=d;void 0!==a[h]&&(e=h)}c||(U[b]=e)}return e}function V(a,b,c){var e;(b=na(a.style,b))&&(a.style[b]=e?c+e:c)};function oa(a){if(!pa(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return B().error("MESSAGING","Failed to parse message: "+a,c),null}}function pa(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};function qa(a,b,c){var e=a.listeningFors;!e&&c&&(e=a.listeningFors=Object.create(null));a=e||null;if(!a)return a;var d=a[b];!d&&c&&(d=a[b]=[]);return d||null}function ra(a,b){var c=!0,e=Q(b.src).origin,d=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=qa(a,d,!0);for(var f,d=0;d<a.length;d++){var g=a[d];if(g.frame===b){f=g;break}}f||(f={frame:b,origin:e,events:Object.create(null)},a.push(f));return f.events}
function sa(a){for(var b=C({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var e=a[c];if(!e.frame.contentWindow){a.splice(c,1);var d=e.events,f;for(f in d)d[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function ta(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=ua(b.data);if(c&&c.sentinel){var d;d=c.sentinel;var f=b.origin,g=b.source,h=qa(a,d);if(h){for(var k,m=0;m<h.length;m++){var n=h[m],p=n.frame.contentWindow;if(p)if("amp"===d){if(n.origin===f&&p==g){k=n;break}}else{var l;if(!(l=g==p))b:{for(l=g;l&&l!=l.parent;l=l.parent)if(l==p){l=!0;break b}l=!1}if(l){k=n;break}}else setTimeout(sa,0,h)}d=k?k.events:null}else d=h;var K=d;if(K){var u=K[c.type];if(u)for(u=u.slice(),d=0;d<u.length;d++)(0,u[d])(c,
b.source,b.origin)}}}};a.addEventListener("message",b)}}function W(a,b,c){function e(b,e,f){if(d||e==a.contentWindow)"unlisten"==b.sentinel?h():c(b,e,f)}var d,f=a.ownerDocument.defaultView;ta(f);var f=ra(f,a),g=f[b]||(f[b]=[]),h;g.push(e);return h=function(){if(e){var a=g.indexOf(e);-1<a&&g.splice(a,1);c=g=e=null}}}
function ua(a){"string"==typeof a&&(a="{"==a.charAt(0)?ja(a,function(a){B().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:pa(a)?oa(a):null);return a};function va(a){a=parseFloat(a);return"number"===typeof a&&isFinite(a)?a:void 0};var X={};
function wa(a,b){A().assert("recaptcha","Attribute type required for <amp-ad>: %s",b);for(var c=0,e=a;e&&e!=e.parent;e=e.parent)c++;var c=String(c)+"-"+xa(a),d=e={},f=b.dataset,g;for(g in f)J(g,"vars")||(d[g]=f[g]);if(g=b.getAttribute("json")){g=ja(g);if(void 0===g)throw A().createError("Error parsing JSON in json attribute in element %s",b);for(var h in g)d[h]=g[h]}h=e;e=Date.now();d=b.getAttribute("width");g=b.getAttribute("height");h=h?h:{};h.width=va(d);h.height=va(g);b.getAttribute("title")&&(h.title=
b.getAttribute("title"));var k=a.location.href;"about:srcdoc"==k&&(k=a.parent.location.href);var d=G(b),d=H(d),m=F(d,"documentInfo").get(),d=G(b),d=H(d),n=F(d,"viewer"),d=n.getUnconfirmedReferrerUrl(),p=b.getPageLayoutBox();g=h;var f=O.thirdParty+"/0/ampcontext-v0.js",l=m.sourceUrl,K=m.canonicalUrl,m=m.pageViewId,k={href:k},u=b.tagName,ya={localDev:!1,development:w().development,filter:w().filter,minified:!0,lite:w().lite,test:!1,log:w().log,version:w().version,rtvVersion:w().rtvVersion},
za=!(!a.AMP_CONFIG||!a.AMP_CONFIG.canary),n=!n.isVisible(),p=p?{left:p.left,top:p.top,width:p.width,height:p.height}:null,Aa=b.getIntersectionChangeEntry(),q;q=b;for(var L=[],y=0;q&&1==q.nodeType&&25>y;){var z="";q.id&&(z="/"+q.id);L.push(""+q.nodeName.toLowerCase()+z+fa(q));y++;q=q.parentElement}q=L.join();L=q.length;y=5381;for(z=0;z<L;z++)y=33*y^q.charCodeAt(z);g._context=C({ampcontextVersion:"0",ampcontextFilepath:f,sourceUrl:l,referrer:d,canonicalUrl:K,pageViewId:m,location:k,
startTime:e,tagName:u,mode:ya,canary:za,hidden:n,initialLayoutRect:p,initialIntersection:Aa,domFingerprint:String(y>>>0),experimentToggles:ka(a),sentinel:c});(a=b.getAttribute("src"))&&(h.src=a);e=h;e.type="recaptcha";Object.assign(e._context,void 0);return e}
function Ba(a,b){var c={},e=c.disallowCustom,d=c.allowFullscreen,c=wa(a,b),f=a.document.createElement("iframe");X[c.type]||(X[c.type]=0);X[c.type]+=1;var g=Ca(a,e),h=Q(g).hostname,k=JSON.stringify(C({host:h,type:c.type,count:X[c.type],attributes:c}));f.src=g;f.ampLocation=Q(g);f.name=k;c.width&&(f.width=c.width);c.height&&(f.height=c.height);c.title&&(f.title=c.title);d&&f.setAttribute("allowfullscreen","true");f.setAttribute("scrolling","no");V(f,"border","none");f.onload=function(){this.readyState=
"complete"};T(a,"no-sync-xhr-in-ads")&&f.setAttribute("allow","sync-xhr 'none';");T(a,"sandbox-ads")&&Da(f);f.setAttribute("data-amp-3p-sentinel",c._context.sentinel);return f}
function Ca(a,b){var c=void 0,e=a.bootstrapBaseUrl;if(e)a=e;else{var d;d=c;var f=a.document.querySelector('meta[name="amp-3p-iframe-src"]');if(f)if(b)A().error("3p-frame","3p iframe url disabled for recaptcha"),d=null;else{b=f.getAttribute("content");var g;g=void 0===g?"source":g;A().assert(null!=b,"%s %s must be available",f,g);A().assert(ea(b)||/^(\/\/)/.test(b),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',f,g,b);A().assert(-1==
b.indexOf("?"),"3p iframe url must not include query string %s in element %s.",b,f);g=Q(b);A().assert("localhost"==g.hostname&&!d||g.origin!=Q(a.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",b,g.origin,f);d=b+"?0"}else d=null;d||(a.defaultBootstrapSubDomain=a.defaultBootstrapSubDomain||"d-"+xa(a),d="https://"+
a.defaultBootstrapSubDomain+("."+O.thirdPartyFrameHost+"/0/")+"frame.html");a=a.bootstrapBaseUrl=d}return a}function xa(a){var b;if(a.crypto&&a.crypto.getRandomValues){var c=new Uint32Array(2);a.crypto.getRandomValues(c);b=String(c[0])+c[1]}else b=String(a.Math.random()).substr(2)+"0";return b}
function Da(a){if(a.sandbox&&a.sandbox.supports){for(var b=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],c="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts".split(" "),e=0;e<b.length;e++){var d=b[e];if(!a.sandbox.supports(d)){B().info("3p-frame","Iframe doesn't support "+d);return}}a.sandbox=b.join(" ")+" "+c.join(" ")}};function Y(a){this.I=a;this.J=this.I.document.body;this.o=this.h=null;this.D=0;this.B=new D;this.H=[];this.j={}}Y.prototype.register=function(a){this.D++;if(!this.o){this.h=Ba(this.I,a);a=W(this.h,"amp-recaptcha-ready",this.B.resolve);var b=this.N.bind(this),b=W(this.h,"amp-recaptcha-token",b),c;c=this.L.bind(this);c=W(this.h,"amp-recaptcha-error",c);this.H=[a,b,c];this.j={};this.h.classList.add("i-amphtml-recaptcha-iframe");this.J.appendChild(this.h);this.o=ia(this.h)}return this.o};
Y.prototype.unregister=function(){this.D--;0>=this.D&&Ea(this)};
Y.prototype.execute=function(a,b,c){var e=this;if(!this.h)return Promise.reject(Error("An iframe is not created. You must register before executing"));var d=new D,f=a;this.j[f]={resolve:d.resolve,reject:d.reject};this.B.promise.then(function(){var a=C({id:f,sitekey:b,action:"amp_"+c}),d=e.h,k=[{win:d.contentWindow,origin:"*"}];if(d.contentWindow)for(a.type="amp-recaptcha-action",a.sentinel=d.getAttribute("data-amp-3p-sentinel"),a="amp-"+JSON.stringify(a),d=0;d<k.length;d++){var m=k[d];m.win.postMessage(a,
m.origin)}});return d.promise};function Ea(a){a.h&&(ca(a.h),a.H.forEach(function(a){return a()}),a.h=null,a.o=null,a.B=new D,a.H=[],a.j={})}Y.prototype.N=function(a){this.j[a.id].resolve(a.token);delete this.j[a.id]};Y.prototype.L=function(a){this.j[a.id].reject(Error(a.error));delete this.j[a.id]};function Z(a){a=AMP.BaseElement.call(this,a)||this;a.F=null;a.A=null;a.C=E(a.win,"amp-recaptcha");a.l=null;a.M=T(a.win,"amp-recaptcha-input");return a}aa(Z,AMP.BaseElement);Z.prototype.isLayoutSupported=function(a){return"nodisplay"==a};
Z.prototype.buildCallback=function(){var a=this;if(this.M)return this.F=A().assert(this.element.getAttribute("data-sitekey"),"The data-sitekey attribute is required for <amp-recaptcha-input> %s",this.element),this.A=A().assert(this.element.getAttribute("data-action"),"The data-action attribute is required for <amp-recaptcha-input> %s",this.element),this.mutateElement(function(){var b=a.element,c;void 0===c&&(c=(c=na(b.style,"display"))?b.style[c]:void 0,c="none"==c);V(b,"display",c?"":"none");b=a.element;
c={position:"absolute",width:"1px",height:"1px",overflow:"hidden",visibility:"hidden"};for(var e in c)V(b,e,c[e])})};Z.prototype.layoutCallback=function(){this.l||(this.l=this.C.register(this.element));return this.l};Z.prototype.unlayoutCallback=function(){this.l&&(this.C.unregister(),this.l=null);return!0};Z.prototype.getValue=function(){return this.F&&this.A?this.C.execute(this.element.getResourceId(),this.F,this.A):Promise.reject(Error("amp-recaptcha-input requires both the data-sitekey, and data-action attribute"))};
(function(a){var b=a.win,c=b=b.__AMP_TOP||b,e=I(c),d=e["amp-recaptcha"];d||(d=e["amp-recaptcha"]={obj:null,promise:null,resolve:null,context:null,ctor:null});d.ctor||d.obj||(d.ctor=Y,d.context=b,d.resolve&&F(c,"amp-recaptcha"));a.registerElement("amp-recaptcha-input",Z,".i-amphtml-recaptcha-iframe{position:fixed!important;top:0px!important;left:0px!important;height:1px!important;width:1px!important;overflow:hidden!important;visibility:hidden!important}\n/*# sourceURL=/extensions/amp-recaptcha-input/0.1/amp-recaptcha-input.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-recaptcha-input-0.1.js.map
