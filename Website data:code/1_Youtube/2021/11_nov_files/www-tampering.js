var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function n(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function aa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var q=aa(this);function r(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var h=a[d];if(!(h in c))break a;c=c[h]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&p(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(k||"")+"_"+h++,k)}
function c(k,m){this.g=k;p(this,"description",{configurable:!0,writable:!0,value:m})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",h=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=q[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&p(d.prototype,a,{configurable:!0,writable:!0,value:function(){return u(n(this))}})}return a});
function u(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:n(a)}}
function w(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},x;
if("function"==typeof Object.setPrototypeOf)x=Object.setPrototypeOf;else{var y;a:{var ca={a:!0},z={};try{z.__proto__=ca;y=z.a;break a}catch(a){}y=!1}x=y?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var A=x;
function B(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(A)A(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.s=b.prototype}
function C(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
r("WeakMap",function(a){function b(e){this.g=(f+=Math.random()+1).toString();if(e){e=v(e);for(var g;!(g=e.next()).done;)g=g.value,this.set(g[0],g[1])}}
function c(){}
function d(e){var g=typeof e;return"object"===g&&null!==e||"function"===g}
function h(e){if(!C(e,m)){var g=new c;p(e,m,{value:g})}}
function k(e){var g=Object[e];g&&(Object[e]=function(l){if(l instanceof c)return l;Object.isExtensible(l)&&h(l);return g(l)})}
if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),g=Object.seal({}),l=new a([[e,2],[g,3]]);if(2!=l.get(e)||3!=l.get(g))return!1;l.delete(e);l.set(g,4);return!l.has(e)&&4==l.get(g)}catch(t){return!1}}())return a;
var m="$jscomp_hidden_"+Math.random();k("freeze");k("preventExtensions");k("seal");var f=0;b.prototype.set=function(e,g){if(!d(e))throw Error("Invalid WeakMap key");h(e);if(!C(e,m))throw Error("WeakMap key fail: "+e);e[m][this.g]=g;return this};
b.prototype.get=function(e){return d(e)&&C(e,m)?e[m][this.g]:void 0};
b.prototype.has=function(e){return d(e)&&C(e,m)&&C(e[m],this.g)};
b.prototype.delete=function(e){return d(e)&&C(e,m)&&C(e[m],this.g)?delete e[m][this.g]:!1};
return b});
r("Map",function(a){function b(){var f={};return f.previous=f.next=f.head=f}
function c(f,e){var g=f.g;return u(function(){if(g){for(;g.head!=f.g;)g=g.previous;for(;g.next!=g.head;)return g=g.next,{done:!1,value:e(g)};g=null}return{done:!0,value:void 0}})}
function d(f,e){var g=e&&typeof e;"object"==g||"function"==g?k.has(e)?g=k.get(e):(g=""+ ++m,k.set(e,g)):g="p_"+e;var l=f.data_[g];if(l&&C(f.data_,g))for(f=0;f<l.length;f++){var t=l[f];if(e!==e&&t.key!==t.key||e===t.key)return{id:g,list:l,index:f,h:t}}return{id:g,list:l,index:-1,h:void 0}}
function h(f){this.data_={};this.g=b();this.size=0;if(f){f=v(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new a(v([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var g=e.entries(),l=g.next();if(l.done||l.value[0]!=f||"s"!=l.value[1])return!1;l=g.next();return l.done||4!=l.value[0].x||"t"!=l.value[1]||!g.next().done?!1:!0}catch(t){return!1}}())return a;
var k=new WeakMap;h.prototype.set=function(f,e){f=0===f?0:f;var g=d(this,f);g.list||(g.list=this.data_[g.id]=[]);g.h?g.h.value=e:(g.h={next:this.g,previous:this.g.previous,head:this.g,key:f,value:e},g.list.push(g.h),this.g.previous.next=g.h,this.g.previous=g.h,this.size++);return this};
h.prototype.delete=function(f){f=d(this,f);return f.h&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.data_[f.id],f.h.previous.next=f.h.next,f.h.next.previous=f.h.previous,f.h.head=null,this.size--,!0):!1};
h.prototype.clear=function(){this.data_={};this.g=this.g.previous=b();this.size=0};
h.prototype.has=function(f){return!!d(this,f).h};
h.prototype.get=function(f){return(f=d(this,f).h)&&f.value};
h.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};
h.prototype.keys=function(){return c(this,function(f){return f.key})};
h.prototype.values=function(){return c(this,function(f){return f.value})};
h.prototype.forEach=function(f,e){for(var g=this.entries(),l;!(l=g.next()).done;)l=l.value,f.call(e,l[1],l[0],this)};
h.prototype[Symbol.iterator]=h.prototype.entries;var m=0;return h});
r("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var d=this+"";b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var h=b.length;0<h&&0<c;)if(d[--c]!=b[--h])return!1;return 0>=h}});
r("Set",function(a){function b(c){this.g=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var h=d.entries(),k=h.next();if(k.done||k.value[0]!=c||k.value[1]!=c)return!1;k=h.next();return k.done||k.value[0]==c||4!=k.value[0].x||k.value[1]!=k.value[0]?!1:h.next().done}catch(m){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var h=this;this.g.forEach(function(k){return c.call(d,k,k,h)})};
return b});
var D=this||self;function E(a,b){a=a.split(".");var c=D;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
;var F={},G=null;var da="function"===typeof Uint8Array;var H="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function I(a){Object.isFrozen(a)||(H?a[H]|=1:void 0!==a.g?a.g|=1:Object.defineProperties(a,{g:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function J(a){return null!==a&&"object"===typeof a&&a.constructor===Object}
;function K(a,b){if(null!=a)return Array.isArray(a)||J(a)?L(a,b):b(a)}
function L(a,b){if(Array.isArray(a)){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=K(a[d],b);if(Array.isArray(a)){var h;H?h=a[H]:h=a.g;a=!!((null==h?0:h)&1)}else a=!1;a&&I(c);return c}h={};for(c in a)h[c]=K(a[c],b);return h}
function M(a){a:switch(typeof a){case "number":a=isFinite(a)?a:String(a);break a;case "object":if(da&&null!=a&&a instanceof Uint8Array){var b;"object"!=typeof a||a&&Array.isArray(a);void 0===b&&(b=0);if(!G){G={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var k=c.concat(d[h].split(""));F[h]=k;for(var m=0;m<k.length;m++){var f=k[m];void 0===G[f]&&(G[f]=m)}}}b=F[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(h=
k=0;k<a.length-2;k+=3){var e=a[k],g=a[k+1];f=a[k+2];m=b[e>>2];e=b[(e&3)<<4|g>>4];g=b[(g&15)<<2|f>>6];f=b[f&63];c[h++]=""+m+e+g+f}m=0;f=d;switch(a.length-k){case 2:m=a[k+1],f=b[(m&15)<<2]||d;case 1:a=a[k],c[h]=""+b[a>>2]+b[(a&3)<<4|m>>4]+f+d}a=c.join("")}}return Array.isArray(a)?L(a,M):a}
;var N;function O(a,b,c){var d=N;N=null;a||(a=d);d=this.constructor.o;a||(a=d?[d]:[]);this.i=(d?0:-1)-(this.constructor.m||0);this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],J(d))){this.l=a-this.i;this.j=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.i),this.j=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.i,(d=this.g[a])?Array.isArray(d)&&I(d):this.g[a]=P):(d=this.l+this.i,this.g[d]||(this.j=this.g[d]={}),(d=this.j[a])?Array.isArray(d)&&I(d):this.j[a]=P)}
var P=Object.freeze(I([]));O.prototype.toJSON=function(){return L(this.g,M)};
O.prototype.toString=function(){return this.g.toString()};var Q=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function R(a){return a?decodeURI(a):a}
;function S(a){O.call(this,a,1)}
B(S,O);var T,U,V,W=D.window,ea=(null===(T=null===W||void 0===W?void 0:W.yt)||void 0===T?void 0:T.config_)||(null===(U=null===W||void 0===W?void 0:W.ytcfg)||void 0===U?void 0:U.data_)||{},X=(null===(V=null===W||void 0===W?void 0:W.ytcfg)||void 0===V?void 0:V.obfuscatedData_)||[];function Y(){S.apply(this,arguments)}
B(Y,S);new Y(X);E("yt.config_",ea);E("yt.configJspb_",X);Object.freeze(["js-httpswwwgoogleanalyticscomanalyticsjs","js-chromeextensionpkedcjkdefgpdelpbcmbmeomcjbeemfm","video-","js-http","css-http"]);
var fa=Object.freeze("document.appendChild document.body.appendChild document.querySelector document.querySelectorAll history.back history.go".split(" ")),ha=Object.freeze("fonts.googleapis.com s0.2mdn.net securepubads.g.doubleclick.net ssl.google-analytics.com static.doubleclick.net www.google-analytics.com www.googletagservices.com www.youtube.com youtube.com".split(" ")),ia=Object.freeze(["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl","enhhojjnijigcajfphajepfemndkmdlo"]),
ja=Object.freeze(".corp.google.com .googlevideo.com .ytimg.com .google.com .googlesyndication.com .gstatic.com .prod.google.com .google.ru".split(" ")),ka=Object.freeze(["chrome-extension","safari-extension","safari-resource","opera"]);function la(){return fa.map(function(a){return ma(a)}).filter(function(a){return!!a})}
function ma(a){var b=a.split(".");a=b[b.length-1];b=b.reduce(function(c,d){return c&&c[d]},window);
if(!b)return a+" is missing";b=Function.prototype.toString.call(b).replace(/\n/g," ").replace(/  +/g," ");return b!="function "+a+"() { [native code] }"?a+" is not native, prologue: "+b.slice(0,50):null}
function Z(a){var b=a.match(Q)[1]||null;return ka.some(function(c){return b==c})}
function na(a){var b=R(a.match(Q)[3]||null);return!b||Z(a)?!0:ha.some(function(c){return b==c})||ja.some(function(c){return b.endsWith(c)})}
function oa(a){if(!Z(a))return null;var b=R(a.match(Q)[3]||null);return b?ia.some(function(c){return b==c})?null:b:null}
function pa(){var a=new Set;[].concat(w(document.querySelectorAll("script"))).forEach(function(b){b.src&&!na(b.src)&&a.add(b.src)});
[].concat(w(document.querySelectorAll("link[href]"))).forEach(function(b){"alternate"==b.rel||na(b.href)||a.add(b.href)});
return[].concat(w(a)).sort()}
function qa(){var a=new Set;[].concat(w(document.querySelectorAll("script"))).forEach(function(b){b.src&&(b=oa(b.src))&&a.add(b)});
return[].concat(w(a)).sort()}
;E("ytbin.polymer.shared.lib.tampering.info",function(){var a=pa(),b=la(),c=qa(),d=[];c.length&&d.push("extensions",c);a.length&&d.push("suspiciousIncludes",a);b.length&&d.push("suspiciousApis",b);return d.length?d:null});}).call(this);


}
/*
     FILE ARCHIVED ON 00:02:46 Dec 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:08:43 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 335.287
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.058
  cdx.remote: 0.052
  esindex: 0.008
  LoadShardBlock: 72.719 (3)
  PetaboxLoader3.datanode: 54.576 (4)
  load_resource: 182.656
  PetaboxLoader3.resolve: 49.948
*/