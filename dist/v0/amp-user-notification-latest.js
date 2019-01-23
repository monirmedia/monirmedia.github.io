(self.AMP=self.AMP||[]).push({n:"amp-user-notification",v:"0",f:(function(AMP,_){
var h;function k(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,d);f&&Object.defineProperty(a,d,f)}else a[d]=b[d]};function l(a){for(var b=null,c="",d=0;d<arguments.length;d++){var f=arguments[d];if(f instanceof Error&&!b){var b=void 0,e=f.message,g=String(Math.random());f.message=g;if(f.message===g)f.message=e,b=f;else{e=Error(f.message);for(b in f)e[b]=f[b];e.stack=f.stack;b=e}}else c&&(c+=" "),c+=f}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}function m(a){var b=l.apply(null,arguments);setTimeout(function(){self.reportError(b);throw b;})}self.log=self.log||{user:null,dev:null,userForEmbed:null};
var p=self.log;function q(){if(!p.user)throw Error("failed to call initLogConstructor");return p.user}function r(){if(p.dev)return p.dev;throw Error("failed to call initLogConstructor");};function t(a){return a||{}};function u(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function v(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;if(b=b!=(b.__AMP_TOP||b)&&w(b,"url-replace")?x(b,"url-replace"):null)return b}return y(a,"url-replace")}function z(a,b){a=a.__AMP_TOP||a;return x(a,b)}function y(a,b){a=A(a);a=B(a);return x(a,b)}function A(a){return a.nodeType?z((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function B(a){a=A(a);return a.isSingleDoc()?a.win:a}
function x(a,b){w(a,b);var c=C(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function D(a,b){var c=F(a,b);if(c)return c;var d=new u,f=d,e=f.promise,f=f.resolve;C(a)[b]={obj:null,promise:e,resolve:f,context:null,ctor:null};return e}function F(a,b){var c=C(a)[b];if(c){if(c.promise)return c.promise;x(a,b);return c.promise=Promise.resolve(c.obj)}return null}function C(a){var b=a.services;b||(b=a.services={});return b}
function w(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function G(a){var b=A(a),c=F(B(a),"geo");return c?c:b.whenBodyAvailable().then(function(){var a;a=b.win;var c=b.getHeadNode(),e;if(c){e=[];for(var c=c.querySelectorAll("script[custom-element]"),g=0;g<c.length;g++)e.push(c[g].getAttribute("custom-element"))}else e=[];a=e.includes("amp-geo")?z(a,"extensions").waitForExtension(a,"amp-geo"):Promise.resolve();return a}).then(function(){return F(B(a),"geo")})};function H(a){this.U=a;this.C=this.G=0;this.o=Object.create(null)}H.prototype.has=function(a){return!!this.o[a]};H.prototype.get=function(a){var b=this.o[a];if(b)return b.access=++this.C,b.payload};H.prototype.put=function(a,b){this.has(a)||this.G++;this.o[a]={payload:b,access:this.C};if(!(this.G<=this.U)){r().warn("lru-cache","Trimming LRU cache");a=this.o;var c=this.C+1,d,f;for(f in a){var e=a[f].access;e<c&&(c=e,d=f)}void 0!==d&&(delete a[d],this.G--)}};t({c:!0,v:!0,a:!0,ad:!0});var I,J;
function K(a){if("string"==typeof a){I||(I=self.document.createElement("a"),J=self.UrlCache||(self.UrlCache=new H(100)));var b=J,c=I;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;
d.origin=c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}}(b="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,b=a.length-10,b=0<=b&&a.indexOf(".localhost",b)==b);return b}
function L(a,b){var c;c=void 0===c?"source":c;q().assert(null!=a,"%s %s must be available",b,c);var d=a;q().assert(K(d)||/^(\/\/)/.test(d),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,d)};var M,N="Webkit webkit Moz moz ms O o".split(" ");function O(a){var b=void 0;M||(M=Object.create(null));var c=M.display;if(!c||b){c="display";if(void 0===a.display){var d;a:{for(d=0;d<N.length;d++){var f=N[d]+"Display";if(void 0!==a[f]){d=f;break a}}d=""}var e=d;void 0!==a[e]&&(c=e)}b||(M.display=c)}return c};function P(){this.h=0;this.R=Promise.resolve();this.O=function(){};this.P=function(){}}P.prototype.onQueueEmpty=function(a){this.O=a;0==this.h&&a()};P.prototype.onQueueNotEmpty=function(a){this.P=a;0<this.h&&a()};P.prototype.registerUI=function(a){var b=this;0==this.h&&this.P();this.h++;var c=this.R.then(function(){return a().then(function(){b.h--;0==b.h&&b.O()})});return this.R=c};function Q(a){a=AMP.BaseElement.call(this,a)||this;a.J=null;a.m=null;var b=new u;a.K=b.promise;a.L=b.resolve;a.l=null;a.F=!1;a.A=null;a.B=null;a.w=null;a.j=null;a.H="";a.I=null;a.T=null;return a}k(Q,AMP.BaseElement);h=Q.prototype;h.isAlwaysFixed=function(){return!0};
h.buildCallback=function(){var a=this,b=this.getAmpDoc();this.T=v(b);this.I=D(B(b),"storage");this.m=q().assert(this.element.id,"amp-user-notification should have an id.");this.H="amp-user-notification:"+this.m;this.A=this.element.getAttribute("data-show-if-geo");this.B=this.element.getAttribute("data-show-if-not-geo");(this.j=this.element.getAttribute("data-show-if-href"))&&L(this.j,this.element);q().assert(1>=!!this.j+!!this.A+!!this.B,'Only one "data-show-if-*" attribute allowed');this.A&&(this.w=
R(this,this.A,!0));this.B&&(this.w=R(this,this.B,!1));(this.l=this.element.getAttribute("data-dismiss-href"))&&L(this.l,this.element);var c=this.element.getAttribute("role");c||this.element.setAttribute("role","alert");var d=this.element.getAttribute("data-persist-dismissal");this.F="false"!=d&&"no"!=d;this.registerAction("dismiss",function(){return a.dismiss(!1)});this.registerAction("optoutOfCid",function(){return S(a)});var f=D(B(b),"userNotificationManager");f.then(function(b){b.registerUserNotification(a.m,
a)})};function R(a,b,c){return G(a.element).then(function(a){q().assert(a,"requires <amp-geo> to use promptIfUnknownForGeoGroup");var d=b.split(/,\s*/).filter(function(b){return 0<=a.ISOCountryGroups.indexOf(b)});return!(c?!d.length:d.length)})}
function T(a,b){var c=a.j;return a.T.expandUrlAsync(c).then(function(c){var d;d={elementId:a.m,ampUserId:b};var e=[],g;for(g in d){var n=d[g];if(null!=n)if(Array.isArray(n))for(var E=0;E<n.length;E++)e.push(encodeURIComponent(g)+"="+encodeURIComponent(n[E]));else e.push(encodeURIComponent(g)+"="+encodeURIComponent(n))}d=e.join("&");e=c;d?(e=e.split("#",2),g=e[0].split("?",2),d=g[0]+(g[1]?"?"+g[1]+"&"+d:"?"+d),d+=e[1]?"#"+e[1]:""):d=e;return d})}
h.V=function(a){var b=this;this.J=a;return T(this,a).then(function(a){var c={credentials:"include",requireAmpResponseSourceOrigin:!1};return z(b.win,"xhr").fetchJson(a,c).then(function(a){return a.json()})})};function U(a){var b=a.element.getAttribute("enctype")||"application/json;charset=utf-8";z(a.win,"xhr").fetchJson(a.l,{method:"POST",credentials:"include",requireAmpResponseSourceOrigin:!1,body:t({elementId:a.m,ampUserId:a.J}),headers:{"Content-Type":b}})}
h.X=function(a){q().assert("boolean"==typeof a.showNotification,'`showNotification` should be a boolean. Got "%s" which is of type %s.',a.showNotification,typeof a.showNotification);a.showNotification||this.L();return Promise.resolve(a.showNotification)};function S(a){return D(B(a.element),"cid").then(function(a){return a.optOut()}).then(function(){return a.dismiss(!1)},function(b){r().error("amp-user-notification","Failed to opt out of Cid",b);a.dismiss(!0)})}
function V(a){return D(B(a.element),"cid").then(function(b){return b.get({scope:"amp-user-notification",createCookieIfNotPresent:!0},Promise.resolve(),a.K)})}h.shouldShow=function(){var a=this;return this.isDismissed().then(function(b){return b?!1:a.j?V(a).then(a.V.bind(a)).then(a.X.bind(a)):a.w?a.w:!0})};
h.show=function(){var a=this.element,b=!0;void 0===b&&(b=(b=O(a.style))?a.style[b]:void 0,b="none"==b);var b=b?"":"none",c=O(a.style);c&&(a.style[c]=b);this.element.classList.add("amp-active");this.getViewport().addToFixedLayer(this.element);return this.K};h.isDismissed=function(){var a=this;return this.F?this.I.then(function(b){return b.get(a.H)}).then(function(a){return!!a},function(a){r().error("amp-user-notification","Failed to read storage",a);return!1}):Promise.resolve(!1)};h.activate=function(){this.dismiss(!1)};
h.dismiss=function(a){var b=this;this.element.classList.remove("amp-active");this.element.classList.add("amp-hidden");this.L();this.getViewport().removeFromFixedLayer(this.element);this.F&&!a&&this.I.then(function(a){a.set(b.H,!0)});this.l&&U(this)};function W(a){this.ampdoc=a;this.S=Object.create(null);this.D=Object.create(null);this.Y=y(this.ampdoc,"viewer");this.M=this.ampdoc.whenReady();this.N=Promise.all([this.Y.whenFirstVisible(),this.M]);this.W=D(B(this.ampdoc),"notificationUIManager")}
W.prototype.get=function(a){var b=this;this.N.then(function(){null==b.ampdoc.getElementById(a)&&q().warn("amp-user-notification","Did not find amp-user-notification element "+a+".")});return X(this,a).promise};W.prototype.getNotification=function(a){var b=this;return this.M.then(function(){return b.S[a]})};
W.prototype.registerUserNotification=function(a,b){var c=this;this.S[a]=b;var d=X(this,a);return this.N.then(function(){return b.shouldShow()}).then(function(a){if(a)return c.W.then(function(a){return a.registerUI(b.show.bind(b))})}).then(d.resolve.bind(this,b)).catch(m.bind(null,"Notification service failed amp-user-notification",a))};function X(a,b){if(a.D[b])return a.D[b];var c=new u;return a.D[b]={promise:c.promise,resolve:c.resolve}}
(function(a){a.registerServiceForDoc("userNotificationManager",W);a.registerServiceForDoc("notificationUIManager",P);a.registerElement("amp-user-notification",Q,"amp-user-notification{position:fixed!important;bottom:0;left:0;overflow:hidden!important;visibility:hidden;background:hsla(0,0%,100%,0.7);z-index:1000;width:100%}amp-user-notification.amp-active{visibility:visible}amp-user-notification.amp-hidden{visibility:hidden}\n/*# sourceURL=/extensions/amp-user-notification/0.1/amp-user-notification.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-user-notification-0.1.js.map
