(self.AMP=self.AMP||[]).push({n:"amp-image-viewer",v:"0",f:(function(AMP,_){
var f;function m(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};self.log=self.log||{user:null,dev:null,userForEmbed:null};var n=self.log;function p(){if(!n.user)throw Error("failed to call initLogConstructor");return n.user}function q(){if(n.dev)return n.dev;throw Error("failed to call initLogConstructor");};function r(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function t(a,b){a=a.__AMP_TOP||a;var c=a.services;c||(c=a.services={});b=c[b];b.obj||(b.obj=new b.ctor(b.context),b.ctor=null,b.context=null,b.resolve&&b.resolve(b.obj));return b.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function aa(a){var b;return(b="function"===typeof a.getElementsByTagName?a.getElementsByTagName("img"):a.querySelectorAll("img"))&&b[0]||null};var u,v="Webkit webkit Moz moz ms O o".split(" ");function w(a,b){var c=void 0;if(2>b.length?0:0==b.lastIndexOf("--",0))return b;u||(u=Object.create(null));var d=u[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<v.length;g++){var h=v[g]+e;if(void 0!==a[h]){e=h;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(u[b]=d)}return d}function ba(a,b,c){var d;(b=w(a.style,b))&&(a.style[b]=d?c+d:c)}function x(a,b){for(var c in b)ba(a,c,b[c])}
function ca(a){var b=!1;if(void 0===b){var c;c=(c=w(a.style,"display"))?a.style[c]:void 0;b="none"==c}ba(a,"display",b?"":"none")};function y(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}};function A(){this.L=null}f=A.prototype;f.add=function(a){var b=this;this.L||(this.L=[]);this.L.push(a);return function(){b.remove(a)}};f.remove=function(a){this.L&&(a=this.L.indexOf(a),-1<a&&this.L.splice(a,1))};f.removeAll=function(){this.L&&(this.L.length=0)};f.fire=function(a){if(this.L)for(var b=this.L,c=0;c<b.length;c++)(0,b[c])(a)};f.getHandlerCount=function(){return this.L?this.L.length:0};function da(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1};function B(a,b,c){var d=this;this.cb=t(a,"timer");this.ib=b;this.gb=c||0;this.ka=-1;this.Ka=0;this.V=!1;this.fb=function(){return d.ya()}}B.prototype.isPending=function(){return-1!=this.ka};B.prototype.schedule=function(a){var b=a||this.gb;this.V&&10>b&&(b=10);var c=Date.now()+b;return!this.isPending()||-10>c-this.Ka?(this.cancel(),this.Ka=c,this.ka=this.cb.delay(this.fb,b),!0):!1};B.prototype.ya=function(){this.ka=-1;this.Ka=0;this.V=!0;this.ib();this.V=!1};
B.prototype.cancel=function(){this.isPending()&&(this.cb.cancel(this.ka),this.ka=-1)};var ea=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function fa(a){var b=a.getAttribute("srcset");if(b){a=[];for(var c;c=ea.exec(b);){var d=c[1],e=void 0,g;if(c[2]){var h=c[3].toLowerCase();if("w"==h)e=parseInt(c[2],10);else if("x"==h)g=parseFloat(c[2]);else continue}else g=1;a.push({url:d,width:e,dpr:g})}return new C(a)}var k=p().assert(a.getAttribute("src"),'Either non-empty "srcset" or "src" attribute must be specified: %s',a);return new C([{url:k,width:void 0,dpr:1}])}
function C(a){p().assert(0<a.length,"Srcset must have at least one source");this.ma=a;for(var b=!1,c=!1,d=0;d<a.length;d++)var e=a[d],b=b||!!e.width,c=c||!!e.dpr;p().assert(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?ga:ha);this.eb=b}
C.prototype.select=function(a,b){if(this.eb){b*=a;a=this.ma;for(var c=0,d=Infinity,e=Infinity,g=0;g<a.length;g++){var h=a[g].width,k=Math.abs(h-b);if(k<=1.1*d||1.2<b/e)c=g,d=k,e=h;else break}}else for(a=this.ma,c=0,d=Infinity,e=0;e<a.length;e++)if(g=Math.abs(a[e].dpr-b),g<=d)c=e,d=g;else break;b=c;return this.ma[b].url};C.prototype.getUrls=function(){return this.ma.map(function(a){return a.url})};
C.prototype.stringify=function(a){for(var b=[],c=this.ma,d=0;d<c.length;d++){var e=c[d],g=e.url;a&&(g=a(g));g=this.eb?g+(" "+e.width+"w"):g+(" "+e.dpr+"x");b.push(g)}return b.join(", ")};function ga(a,b){p().assert(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function ha(a,b){p().assert(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr};function ia(a,b,c){var d=Date.now();this.type=a;this.data=b;this.time=d;this.event=c}
function ja(a,b){this.T=a;this.w=[];this.aa=[];this.O=[];this.A=[];this.c=null;this.nb=b;this.Da=!1;this.ya=new B(a.ownerDocument.defaultView,this.Ya.bind(this));this.$a=new A;this.ia=Object.create(null);this.Ua=this.mb.bind(this);this.Sa=this.kb.bind(this);this.Ta=this.lb.bind(this);this.Ra=this.jb.bind(this);this.T.addEventListener("touchstart",this.Ua);this.T.addEventListener("touchend",this.Sa);this.T.addEventListener("touchmove",this.Ta);this.T.addEventListener("touchcancel",this.Ra);this.La=
!1}function ka(a){var b=!0,b=void 0===b?!1:b,c=a.__AMP_Gestures;c||(c=new ja(a,b),a.__AMP_Gestures=c);return c}f=ja.prototype;f.cleanup=function(){this.T.removeEventListener("touchstart",this.Ua);this.T.removeEventListener("touchend",this.Sa);this.T.removeEventListener("touchmove",this.Ta);this.T.removeEventListener("touchcancel",this.Ra);delete this.T.__AMP_Gestures;this.ya.cancel()};f.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.ia[d];e||(this.w.push(c),e=new A,this.ia[d]=e);return e.add(b)};
f.removeGesture=function(a){var b=(new a(this)).getType();if(a=this.ia[b]){a.removeAll();a=da(this.w,function(a){return a.getType()==b});if(0>a)return!1;this.w.splice(a,1);this.O.splice(a,1);this.A.splice(a,1);this.aa.splice(a,1);delete this.ia[b];return!0}return!1};f.onPointerDown=function(a){return this.$a.add(a)};
f.mb=function(a){var b=Date.now();this.Da=!1;this.$a.fire(a);for(var c=0;c<this.w.length;c++)if(!this.O[c]&&(this.A[c]&&this.A[c]<b&&D(this,c),this.w[c].onTouchStart(a))){var d=c;this.aa[d]=!0;this.A[d]=0}E(this,a)};f.lb=function(a){for(var b=Date.now(),c=0;c<this.w.length;c++)this.aa[c]&&(this.A[c]&&this.A[c]<b?D(this,c):this.w[c].onTouchMove(a)||D(this,c));E(this,a)};
f.kb=function(a){for(var b=Date.now(),c=0;c<this.w.length;c++)this.aa[c]&&(this.A[c]&&this.A[c]<b?D(this,c):(this.w[c].onTouchEnd(a),(!this.A[c]||this.A[c]<b)&&D(this,c)));E(this,a)};f.jb=function(a){for(var b=0;b<this.w.length;b++){var c=b;this.O[c]=0;D(this,c)}E(this,a)};function E(a,b){var c=!!a.c||a.Da;a.Da=!1;if(!c)for(var d=Date.now(),e=0;e<a.w.length;e++)if(a.O[e]||a.A[e]&&a.A[e]>=d){c=!0;break}c&&(b.stopPropagation(),a.nb||b.preventDefault());a.La&&(a.La=!1,a.Ya())}
f.Ya=function(){for(var a=Date.now(),b=-1,c=0;c<this.w.length;c++)if(!this.O[c])this.A[c]&&this.A[c]<a&&D(this,c);else if(-1==b||this.O[c]>this.O[b])b=c;if(-1!=b){for(var d=0,c=0;c<this.w.length;c++)!this.O[c]&&this.aa[c]&&(d=Math.max(d,this.A[c]-a));if(2>d){for(var a=b,c=this.w[a],e=0;e<this.w.length;e++)if(e!=a){var g=e;this.O[g]=0;D(this,g)}this.O[a]=0;this.A[a]=0;this.c=c;c.acceptStart()}else this.ya.schedule(d)}};function D(a,b){a.aa[b]=!1;a.A[b]=0;a.O[b]||a.w[b].acceptCancel()}
function F(a,b){this.qb=a;this.wa=b}f=F.prototype;f.getType=function(){return this.qb};f.signalReady=function(a){var b=this.wa;if(b.c)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.w.length;d++)b.w[d]==this&&(b.O[d]=c+a,b.A[d]=0);b.La=!0}};f.signalPending=function(a){var b=this.wa;if(b.c)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.w.length;d++)b.w[d]==this&&(b.A[d]=c+a)};f.signalEnd=function(){var a=this.wa;a.c==this&&(a.c=null,a.Da=!0)};
f.signalEmit=function(a,b){var c=this.wa.ia[this.getType()];c&&c.fire(new ia(this.getType(),a,b))};f.acceptStart=function(){};f.acceptCancel=function(){};f.onTouchStart=function(){return!1};f.onTouchMove=function(){return!1};f.onTouchEnd=function(){};function la(){}var ma=Math.round(-16.67/Math.log(.95));function G(a,b,c){1>b&&(b=1);var d=a/b,e=.5+Math.min(b/33.34,.5);return d*e+c*(1-e)}function na(a,b,c,d,e,g){var h;return(new oa(a,b,c,d,e,g,h)).start()}function oa(a,b,c,d,e,g,h){this.X=h||t(self,"vsync");this.U=a;this.Ea=g;this.h=b;this.j=c;this.Ha=d;this.Ia=e;this.m=this.l=0;a=new r;this.ja=a.promise;this.Pa=a.resolve;this.Oa=a.reject;this.ba=!1}f=oa.prototype;
f.start=function(){this.ba=!0;if(.02>=Math.abs(this.Ha)&&.02>=Math.abs(this.Ia))this.Ea(this.h,this.j),this.Fa(!0);else{this.l=this.Ha;this.m=this.Ia;var a=this.ob.bind(this),b=this.Fa.bind(this,!0);this.X.runAnimMutateSeries(this.U,a,5E3).then(b,b)}return this};f.halt=function(){this.ba&&this.Fa(!1)};f.then=function(a,b){return a||b?this.ja.then(a,b):this.ja};f.thenAlways=function(a){a=a||la;return this.then(a,a)};
f.ob=function(a,b){if(!this.ba)return!1;this.h+=b*this.l;this.j+=b*this.m;if(!this.Ea(this.h,this.j))return!1;var c=Math.exp(-a/ma);this.l=this.Ha*c;this.m=this.Ia*c;return.02<Math.abs(this.l)||.02<Math.abs(this.m)};f.Fa=function(a){this.ba&&(this.ba=!1,this.Ea(this.h,this.j),a?this.Pa():this.Oa())};function H(a){F.call(this,"doubletap",a);this.S=this.j=this.h=this.C=this.B=0;this.Za=null}m(H,F);f=H.prototype;f.onTouchStart=function(a){return 1<this.S?!1:(a=a.touches)&&1==a.length?(this.B=a[0].clientX,this.C=a[0].clientY,this.h=a[0].clientX,this.j=a[0].clientY,!0):!1};f.onTouchMove=function(a){return(a=a.touches)&&1==a.length?(this.h=a[0].clientX,this.j=a[0].clientY,a=8<=Math.abs(this.j-this.C),8<=Math.abs(this.h-this.B)||a?(this.acceptCancel(),!1):!0):!1};
f.onTouchEnd=function(a){this.S++;2>this.S?this.signalPending(200):(this.Za=a,this.signalReady(0))};f.acceptStart=function(){this.S=0;this.signalEmit({clientX:this.h,clientY:this.j},this.Za);this.signalEnd()};f.acceptCancel=function(){this.S=0};function I(a,b,c,d){F.call(this,a,b);this.ra=c;this.Ca=d;this.c=!1;this.m=this.l=this.N=this.G=this.W=this.Z=this.Y=this.j=this.h=this.C=this.B=0}m(I,F);f=I.prototype;
f.onTouchStart=function(a){return(a=a.touches)&&1==a.length?(this.W=Date.now(),this.B=a[0].clientX,this.C=a[0].clientY,!0):!1};
f.onTouchMove=function(a){var b=a.touches;if(b&&1==b.length){var c=b[0],b=c.clientX,c=c.clientY;this.h=b;this.j=c;if(this.c)this.P(!1,!1,a);else if(a=Math.abs(b-this.B),b=Math.abs(c-this.C),this.ra&&this.Ca)(8<=a||8<=b)&&this.signalReady(-10);else if(this.ra)if(8<=a&&a>b)this.signalReady(-10);else{if(8<=b)return!1}else if(this.Ca)if(8<=b&&b>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1;return!0}return!1};f.onTouchEnd=function(a){this.ca(a)};
f.acceptStart=function(){this.c=!0;this.Y=this.B;this.Z=this.C;this.N=this.W;this.B=this.h;this.C=this.j;this.P(!0,!1,null)};f.acceptCancel=function(){this.c=!1};
f.P=function(a,b,c){this.G=Date.now();var d=this.G-this.N;if(!b&&4<d||b&&16<d)this.l=G(this.h-this.Y,d,this.l),this.m=G(this.j-this.Z,d,this.m),this.l=1E-4<Math.abs(this.l)?this.l:0,this.m=1E-4<Math.abs(this.m)?this.m:0,this.Y=this.h,this.Z=this.j,this.N=this.G;this.signalEmit({first:a,last:b,time:this.G,deltaX:this.ra?this.h-this.B:0,deltaY:this.Ca?this.j-this.C:0,startX:this.B,startY:this.C,lastX:this.h,lastY:this.j,velocityX:this.ra?this.l:0,velocityY:this.Ca?this.m:0},c)};
f.ca=function(a){this.c&&(this.c=!1,this.P(!1,!0,a),this.signalEnd())};function J(a){I.call(this,"swipe-xy",a,!0,!0)}m(J,I);function K(a){F.call(this,"tapzoom",a);this.c=!1;this.m=this.l=this.N=this.G=this.Z=this.Y=this.S=this.j=this.h=this.C=this.B=0}m(K,F);f=K.prototype;f.onTouchStart=function(a){return this.c?!1:(a=a.touches)&&1==a.length?(this.B=a[0].clientX,this.C=a[0].clientY,!0):!1};
f.onTouchMove=function(a){var b=a.touches;if(b&&1==b.length){this.h=b[0].clientX;this.j=b[0].clientY;if(this.c)this.P(!1,!1,a);else if(a=8<=Math.abs(this.j-this.C),8<=Math.abs(this.h-this.B)||a){if(0==this.S)return this.acceptCancel(),!1;this.signalReady(0)}return!0}return!1};f.onTouchEnd=function(a){this.c?this.ca(a):(this.S++,1==this.S?this.signalPending(400):this.acceptCancel())};f.acceptStart=function(){this.S=0;this.c=!0;this.P(!0,!1,null)};f.acceptCancel=function(){this.S=0;this.c=!1};
f.P=function(a,b,c){this.G=Date.now();a?this.l=this.m=0:2<this.G-this.N&&(this.l=G(this.h-this.Y,this.G-this.N,this.l),this.m=G(this.j-this.Z,this.G-this.N,this.m));this.Y=this.h;this.Z=this.j;this.N=this.G;this.signalEmit({first:a,last:b,centerClientX:this.B,centerClientY:this.C,deltaX:this.h-this.B,deltaY:this.j-this.C,velocityX:this.l,velocityY:this.m},c)};f.ca=function(a){this.c&&(this.c=!1,this.P(!1,!0,a),this.signalEnd())};
function L(a){F.call(this,"pinch",a);this.c=!1;this.m=this.l=this.N=this.G=this.W=this.Wa=this.Va=this.Na=this.Ma=this.va=this.ta=this.ua=this.sa=this.qa=this.oa=this.pa=this.na=0}m(L,F);f=L.prototype;f.onTouchStart=function(a){return(a=a.touches)&&1==a.length?!0:a&&2==a.length?(this.W=Date.now(),this.na=a[0].clientX,this.pa=a[0].clientY,this.oa=a[1].clientX,this.qa=a[1].clientY,!0):!1};
f.onTouchMove=function(a){var b=a.touches;if(b&&1==b.length)return!0;if(b&&2==b.length){this.sa=b[0].clientX;this.ua=b[0].clientY;this.ta=b[1].clientX;this.va=b[1].clientY;if(this.c)this.P(!1,!1,a);else{var c=this.sa-this.na,d=this.ua-this.pa,e=this.ta-this.oa,g=this.va-this.qa;if(0>=c*e&&0>=d*g)(4<=Math.abs(c-e)||4<=Math.abs(d-g))&&this.signalReady(0);else if(10<=Math.abs(c+e)||10<=Math.abs(d+g))return!1}return!0}return!1};f.onTouchEnd=function(a){this.ca(a)};
f.acceptStart=function(){this.c=!0;this.N=this.W;this.Na=this.Ma=0;this.Va=.5*(this.na+this.oa);this.Wa=.5*(this.pa+this.qa);this.P(!0,!1,null)};f.acceptCancel=function(){this.c=!1};
f.P=function(a,b,c){this.G=Date.now();var d=this.G-this.N,e=Math.abs(this.sa-this.na-(this.ta-this.oa)),g=Math.abs(this.ua-this.pa-(this.va-this.qa));if(!b&&4<d||b&&16<d)this.l=G(e-this.Ma,d,this.l),this.m=G(g-this.Na,d,this.m),this.l=1E-4<Math.abs(this.l)?this.l:0,this.m=1E-4<Math.abs(this.m)?this.m:0,this.Ma=e,this.Na=g,this.N=this.G;var d=this.na,h=this.oa,k=this.pa,l=this.qa,z=(d-h)*(d-h)+(k-l)*(k-l),d=this.sa,h=this.ta,k=this.ua,l=this.va,Q=(d-h)*(d-h)+(k-l)*(k-l);this.signalEmit({first:a,last:b,
time:this.G,centerClientX:this.Va,centerClientY:this.Wa,dir:Math.sign(Q-z),deltaX:.5*e,deltaY:.5*g,velocityX:.5*this.l,velocityY:.5*this.m},c)};f.ca=function(a){this.c&&(this.c=!1,this.P(!1,!0,a),this.signalEnd())};function M(a,b,c,d){var e=new pa(0,0,a,b,c,d,1,1);return e.solveYValueFromXValue.bind(e)}function pa(a,b,c,d,e,g,h,k){this.x0=a;this.y0=b;this.x1=c;this.y1=d;this.x2=e;this.y2=g;this.x3=h;this.y3=k}f=pa.prototype;f.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
f.solvePositionFromXValue=function(a){var b=1E-6,c=(a-this.x0)/(this.x3-this.x0);if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,g=0,h=0;8>h;h++){var g=this.getPointX(c),k=(this.getPointX(c+b)-g)/b;if(Math.abs(g-a)<b)return c;if(Math.abs(k)<b)break;else g<a?d=c:e=c,c-=(g-a)/k}for(h=0;Math.abs(g-a)>b&&8>h;h++)g<a?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),g=this.getPointX(c);return c};
f.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var b=this.lerp(this.x0,this.x1,a),c=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var b=this.lerp(this.y0,this.y1,a),c=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a),b=this.lerp(b,c,a),c=this.lerp(c,d,a);return this.lerp(b,c,a)};f.lerp=function(a,b,c){return a+c*(b-a)};
var qa=M(.25,.1,.25,1),ra=M(.42,0,1,1),sa=M(0,0,.58,1),ta=M(.42,0,.58,1),ua={linear:function(a){return a},ease:qa,"ease-in":ra,"ease-out":sa,"ease-in-out":ta};function va(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var b=a.match(/cubic-bezier\((.+)\)/);if(b&&(b=b[1].split(",").map(parseFloat),4==b.length)){for(var c=0;4>c;c++)if(isNaN(b[c]))return null;return M(b[0],b[1],b[2],b[3])}return null}return ua[a]}return a};function wa(){}function N(a,b){this.U=a;this.X=b||t(self,"vsync");this.Xa=null;this.I=[]}function xa(a,b,c){var d=ya;return(new N(a)).setCurve(d).add(0,b,1).start(c)}N.prototype.setCurve=function(a){a&&(this.Xa=va(a));return this};N.prototype.add=function(a,b,c,d){this.I.push({delay:a,func:b,duration:c,curve:va(d)});return this};N.prototype.start=function(a){var b=new O(this.X,this.U,this.I,this.Xa,a);return b};
function O(a,b,c,d,e){this.X=a;this.U=b;this.I=[];for(b=0;b<c.length;b++){var g=c[b];this.I.push({delay:g.delay,func:g.func,duration:g.duration,curve:g.curve||d,started:!1,completed:!1})}this.hb=e;this.W=Date.now();this.V=!0;this.ab={};e=new r;this.ja=e.promise;this.Pa=e.resolve;this.Oa=e.reject;this.bb=this.X.createAnimTask(this.U,{mutate:this.pb.bind(this)});this.X.canAnimate(this.U)?this.bb(this.ab):(q().warn("Animation","cannot animate"),P(this,!1,0))}
O.prototype.then=function(a,b){return a||b?this.ja.then(a,b):this.ja};O.prototype.thenAlways=function(a){a=a||wa;return this.then(a,a)};O.prototype.halt=function(a){P(this,!1,a||0)};function P(a,b,c){if(a.V){a.V=!1;if(0!=c){1<a.I.length&&a.I.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<c)for(c=0;c<a.I.length;c++)a.I[c].func(1,!0);else for(var d=a.I.length-1;0<=d;d--)a.I[d].func(0,!1)}catch(e){q().error("Animation","completion failed: "+e,e),b=!1}}b?a.Pa():a.Oa()}}
O.prototype.pb=function(){if(this.V){for(var a=Date.now(),b=Math.min((a-this.W)/this.hb,1),c=0;c<this.I.length;c++){var d=this.I[c];!d.started&&b>=d.delay&&(d.started=!0)}for(c=0;c<this.I.length;c++)if(d=this.I[c],d.started&&!d.completed)a:{var e,g;if(0<d.duration){if(e=g=Math.min((b-d.delay)/d.duration,1),d.curve&&1!=e)try{e=d.curve(g)}catch(h){q().error("Animation","step curve failed: "+h,h);P(this,!1,0);break a}}else e=g=1;1==g&&(d.completed=!0);try{d.func(e,d.completed)}catch(h){q().error("Animation",
"step mutate failed: "+h,h),P(this,!1,0)}}1==b?P(this,!0,0):this.X.canAnimate(this.U)?this.bb(this.ab):(q().warn("Animation","cancel animation"),P(this,!1,0))}};function R(a,b){return function(c){return a+(b-a)*c}};var ya=M(.4,0,.2,1.4),za=["aria-label","aria-describedby","aria-labelledby"],Aa={"amp-img":!0,"amp-anim":!0};function S(a){a=AMP.BaseElement.call(this,a)||this;a.F=null;a.Qa=null;a.$=0;a.la=0;a.D=null;a.M=null;a.Ba=null;a.o=1;a.Aa=1;a.Ga=1;a.Ja=1;a.xa=2;a.B=0;a.C=0;a.J=0;a.K=0;a.fa=0;a.ga=0;a.da=0;a.ea=0;a.H=null;a.ha=null;a.za=null;a.R=null;return a}m(S,AMP.BaseElement);f=S.prototype;
f.buildCallback=function(){this.element.classList.add("i-amphtml-image-viewer");var a=this.getRealChildren();p().assert(1==a.length,"amp-image-viewer should have its target element\n   as the one and only child");p().assert(Aa[a[0].tagName.toLowerCase()],a[0].tagName+" is not supported by <amp-image-viewer>");this.za=a[0];this.setAsOwner(this.za)};f.onMeasureChanged=function(){var a=this;this.R&&this.R.then(function(){return T(a)})};
f.layoutCallback=function(){var a=this;if(this.R)return this.R;var b=this.za,c=b.hasAttribute("i-amphtml-layout")||b.classList.contains("i-amphtml-layout"),d=c?Promise.resolve():b.signals().whenSignal("load-end");c||this.scheduleLayout(b);return this.R=d.then(function(){return Ba(a)}).then(function(){return T(a)}).then(function(){return Ca(a)})};f.pauseCallback=function(){var a=this;this.R&&this.R.then(function(){T(a);a.H&&(a.H.cleanup(),a.H=null)})};
f.resumeCallback=function(){var a=this;this.R&&this.R.then(function(){a.H||Ca(a)})};f.unlayoutCallback=function(){this.H&&(this.H.cleanup(),this.H=null);this.R=null;return!0};f.isLayoutSupported=function(a){return"fill"==a};f.getImageBox=function(){return this.M};f.getImage=function(){return this.F};
f.getImageBoxWithOffset=function(){if(0==this.J&&0==this.K||!this.M)return this.M;var a=(this.o-1)/2,b;b=this.M;var c=a,d=a;b=y(b.left-b.width*c,b.top-b.height*d,b.width*(1+2*c),b.height*(1+2*d));c=this.J;d=this.K;return 0==c&&0==d||0==b.width&&0==b.height?b:y(b.left+c,b.top+d,b.width,b.height)};function Da(a,b){var c=aa(b);a.measureElement(function(){c?(a.$=c.naturalWidth||b.offsetWidth,a.la=c.naturalHeight||b.offsetHeight):(a.$=b.offsetWidth,a.la=b.offsetHeight)})}
function Ba(a){if(a.F)return Promise.resolve();a.F=a.element.ownerDocument.createElement("img");a.F.classList.add("i-amphtml-image-viewer-image");var b=a.za;Da(a,b);a.Qa=fa(b);return a.mutateElement(function(){x(a.F,{top:0,left:0,width:0,height:0});ca(b);a.element.appendChild(a.F);return b.getImpl().then(function(b){b.propagateAttributes(za,a.F)})})}
function T(a){return a.measureElement(function(){var b;b=a.element.getBoundingClientRect();b=y(Number(b.left),Number(b.top),Number(b.width),Number(b.height));a.D=b;b=a.$/a.la;var c=Math.min(a.D.width/b,a.D.height),d=Math.min(a.D.height*b,a.D.width);16>=Math.abs(d-a.$)&&Math.abs(16>=c-a.la)&&(d=a.$,c=a.la);a.M=y(Math.round((a.D.width-d)/2),Math.round((a.D.height-c)/2),Math.round(d),Math.round(c));c=a.D.width/a.D.height;a.xa=Math.max(2,Math.max(c/b,b/c));a.Aa=a.o=1;a.B=a.J=0;a.C=a.K=0;U(a,a.o)}).then(function(){var b=
a.F;return a.mutateElement(function(){x(b,{top:a.M.top+"px",left:a.M.left+"px",width:a.M.width+"px",height:a.M.height+"px"});V(a)},b)}).then(function(){return Ea(a)})}function Ea(a){if(!a.Qa)return Promise.resolve();a.Ga=Math.max(a.Ga,a.o);var b=a.Qa.select(Math.max(a.M.width*a.Ga,a.$),a.getDpr());return b==a.F.getAttribute("src")?Promise.resolve():a.mutateElement(function(){a.F.setAttribute("src",b)},a.F)}
function Ca(a){a.H=ka(a.element);a.H.onPointerDown(function(){a.ha&&(a.ha.halt(),event.preventDefault())});a.H.onGesture(H,function(b){event.preventDefault();var c=1==a.o?a.xa:a.Ja;Fa(a,c,a.D.width/2-b.data.clientX,a.D.height/2-b.data.clientY,!0).then(function(){return W(a)})});a.H.onGesture(K,function(b){event.preventDefault();var c=b.data.deltaX,d=b.data.deltaY;X(a,b.data.centerClientX,b.data.centerClientY,c,d,Math.abs(d)>Math.abs(c)?Math.sign(d):Math.sign(-c));b.data.last&&Ga(a,b.data.centerClientX,
b.data.centerClientY,b.data.deltaX,b.data.deltaY,b.data.velocityY,b.data.velocityY)});a.H.onGesture(L,function(b){event.preventDefault();X(a,b.data.centerClientX,b.data.centerClientY,b.data.deltaX,b.data.deltaY,b.data.dir);b.data.last&&W(a)})}function Ha(a){a.Ba=a.H.onGesture(J,function(b){event.preventDefault();var c=b.data.deltaY,d=Y(a.B+b.data.deltaX,a.fa,a.da,0),c=Y(a.C+c,a.ga,a.ea,0);Z(a,a.o,d,c,!1);b.data.last&&Ia(a,b.data.velocityX,b.data.velocityY)})}
function Y(a,b,c,d){return Math.max(b-d,Math.min(c+d,a))}function U(a,b){var c=0,d=0,e=a.D.height-a.M.height*b;0<=e?d=c=0:(d=e/2,c=-d);var g=0,h=0;b=a.D.width-a.M.width*b;0<=b?h=g=0:(h=b/2,g=-h);a.fa=h;a.ga=d;a.da=g;a.ea=c}function V(a){var b=a.F,c;c=a.J;var d=a.K;"number"==typeof c&&(c+="px");void 0===d?c="translate("+c+")":("number"==typeof d&&(d+="px"),c="translate("+c+", "+d+")");x(b,{transform:c+" "+("scale("+a.o+")")})}
function Ia(a,b,c){a.ha=na(a.F,a.J,a.K,b,c,function(b,c){b=Y(b,a.fa,a.da,0);c=Y(c,a.ga,a.ea,0);if(1>Math.abs(b-a.J)&&1>Math.abs(c-a.K))return!1;Z(a,a.o,b,c,!1);return!0});a.ha.thenAlways(function(){a.ha=null;return Ja(a)})}function X(a,b,c,d,e,g){if(0!=g){var h=Math.sqrt(d*d+e*e);g=a.Aa*(1+g*h/100);var k=a.D.width/2-b,l=a.D.height/2-c;d=Math.min(k,h/100*k);e=Math.min(l,h/100*l);Fa(a,g,d,e,!1)}}
function Fa(a,b,c,d,e){b=Y(b,a.Ja,a.xa,.25);if(b!=a.o)return U(a,b),c=Y(a.B+c*b,a.fa,a.da,0),d=Y(a.C+d*b,a.ga,a.ea,0),Z(a,b,c,d,e)}function Ga(a,b,c,d,e,g,h){(0==g&&0==h?Promise.resolve():na(a.F,d,e,g,h,function(d,e){X(a,b,c,d,e,Math.abs(e)>Math.abs(d)?Math.sign(e):Math.sign(-d));return!0}).thenAlways()).then(function(){W(a)})}function W(a){var b=a.o>a.Aa;return Ja(a).then(function(){b&&Ea(a);1>=a.o?a.Ba&&(a.Ba(),a.Ba=null,a.H.removeGesture(J)):Ha(a)})}
function Z(a,b,c,d,e){var g=b-a.o,h=c-a.J,k=d-a.K,h=Math.sqrt(h*h+k*k),l=0;if(e)var z=250,l=Math.min(z,Math.max(z*h*.01,z*Math.abs(g)));if(16<l&&e){var Q=R(a.o,b),Ka=R(a.J,c),La=R(a.K,d);e=xa(a.F,function(b){a.o=Q(b);a.J=Ka(b);a.K=La(b);V(a)},l).thenAlways(function(){a.o=b;a.J=c;a.K=d;V(a)})}else a.o=b,a.J=c,a.K=d,V(a),e=e?Promise.resolve():void 0;return e}
function Ja(a){var b=Y(a.o,a.Ja,a.xa,0);b!=a.o&&U(a,b);var c=Y(a.J/a.o*b,a.fa,a.da,0),d=Y(a.K/a.o*b,a.ga,a.ea,0);return Z(a,b,c,d,!0).then(function(){a.Aa=a.o;a.B=a.J;a.C=a.K})}(function(a){a.registerElement("amp-image-viewer",S,".i-amphtml-image-viewer-image{position:absolute}.i-amphtml-image-viewer{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}\n/*# sourceURL=/extensions/amp-image-viewer/0.1/amp-image-viewer.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-image-viewer-0.1.js.map
