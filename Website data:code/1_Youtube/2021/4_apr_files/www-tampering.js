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
function q(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var t=q(this);function u(a,b){if(b)a:{var c=t;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in c))break a;c=c[k]}a=a[a.length-1];g=c[a];b=b(g);b!=g&&null!=b&&p(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(l){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(g+(l||"")+"_"+k++,l)}
function c(l,m){this.g=l;p(this,"description",{configurable:!0,writable:!0,value:m})}
if(a)return a;c.prototype.toString=function(){return this.g};
var g="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",k=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var g=t[b[c]];"function"===typeof g&&"function"!=typeof g.prototype[a]&&p(g.prototype,a,{configurable:!0,writable:!0,value:function(){return v(n(this))}})}return a});
function v(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:n(a)}}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var g=this+"";b+="";void 0===c&&(c=g.length);c=Math.max(0,Math.min(c|0,g.length));for(var k=b.length;0<k&&0<c;)if(g[--c]!=b[--k])return!1;return 0>=k}});
function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
u("WeakMap",function(a){function b(d){this.g=(e+=Math.random()+1).toString();if(d){d=w(d);for(var f;!(f=d.next()).done;)f=f.value,this.set(f[0],f[1])}}
function c(){}
function g(d){var f=typeof d;return"object"===f&&null!==d||"function"===f}
function k(d){if(!y(d,m)){var f=new c;p(d,m,{value:f})}}
function l(d){var f=Object[d];f&&(Object[d]=function(h){if(h instanceof c)return h;Object.isExtensible(h)&&k(h);return f(h)})}
if(function(){if(!a||!Object.seal)return!1;try{var d=Object.seal({}),f=Object.seal({}),h=new a([[d,2],[f,3]]);if(2!=h.get(d)||3!=h.get(f))return!1;h.delete(d);h.set(f,4);return!h.has(d)&&4==h.get(f)}catch(r){return!1}}())return a;
var m="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var e=0;b.prototype.set=function(d,f){if(!g(d))throw Error("Invalid WeakMap key");k(d);if(!y(d,m))throw Error("WeakMap key fail: "+d);d[m][this.g]=f;return this};
b.prototype.get=function(d){return g(d)&&y(d,m)?d[m][this.g]:void 0};
b.prototype.has=function(d){return g(d)&&y(d,m)&&y(d[m],this.g)};
b.prototype.delete=function(d){return g(d)&&y(d,m)&&y(d[m],this.g)?delete d[m][this.g]:!1};
return b});
u("Map",function(a){function b(){var e={};return e.previous=e.next=e.head=e}
function c(e,d){var f=e.g;return v(function(){if(f){for(;f.head!=e.g;)f=f.previous;for(;f.next!=f.head;)return f=f.next,{done:!1,value:d(f)};f=null}return{done:!0,value:void 0}})}
function g(e,d){var f=d&&typeof d;"object"==f||"function"==f?l.has(d)?f=l.get(d):(f=""+ ++m,l.set(d,f)):f="p_"+d;var h=e.i[f];if(h&&y(e.i,f))for(e=0;e<h.length;e++){var r=h[e];if(d!==d&&r.key!==r.key||d===r.key)return{id:f,list:h,index:e,h:r}}return{id:f,list:h,index:-1,h:void 0}}
function k(e){this.i={};this.g=b();this.size=0;if(e){e=w(e);for(var d;!(d=e.next()).done;)d=d.value,this.set(d[0],d[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var e=Object.seal({x:4}),d=new a(w([[e,"s"]]));if("s"!=d.get(e)||1!=d.size||d.get({x:4})||d.set({x:4},"t")!=d||2!=d.size)return!1;var f=d.entries(),h=f.next();if(h.done||h.value[0]!=e||"s"!=h.value[1])return!1;h=f.next();return h.done||4!=h.value[0].x||"t"!=h.value[1]||!f.next().done?!1:!0}catch(r){return!1}}())return a;
var l=new WeakMap;k.prototype.set=function(e,d){e=0===e?0:e;var f=g(this,e);f.list||(f.list=this.i[f.id]=[]);f.h?f.h.value=d:(f.h={next:this.g,previous:this.g.previous,head:this.g,key:e,value:d},f.list.push(f.h),this.g.previous.next=f.h,this.g.previous=f.h,this.size++);return this};
k.prototype.delete=function(e){e=g(this,e);return e.h&&e.list?(e.list.splice(e.index,1),e.list.length||delete this.i[e.id],e.h.previous.next=e.h.next,e.h.next.previous=e.h.previous,e.h.head=null,this.size--,!0):!1};
k.prototype.clear=function(){this.i={};this.g=this.g.previous=b();this.size=0};
k.prototype.has=function(e){return!!g(this,e).h};
k.prototype.get=function(e){return(e=g(this,e).h)&&e.value};
k.prototype.entries=function(){return c(this,function(e){return[e.key,e.value]})};
k.prototype.keys=function(){return c(this,function(e){return e.key})};
k.prototype.values=function(){return c(this,function(e){return e.value})};
k.prototype.forEach=function(e,d){for(var f=this.entries(),h;!(h=f.next()).done;)h=h.value,e.call(d,h[1],h[0],this)};
k.prototype[Symbol.iterator]=k.prototype.entries;var m=0;return k});
u("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var g;!(g=c.next()).done;)this.add(g.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),g=new a(w([c]));if(!g.has(c)||1!=g.size||g.add(c)!=g||1!=g.size||g.add({x:4})!=g||2!=g.size)return!1;var k=g.entries(),l=k.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=k.next();return l.done||l.value[0]==c||4!=l.value[0].x||l.value[1]!=l.value[0]?!1:k.next().done}catch(m){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,g){var k=this;this.g.forEach(function(l){return c.call(g,l,l,k)})};
return b});
var z=this||self;function A(a,b){a=a.split(".");var c=z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var g;a.length&&(g=a.shift());)a.length||void 0===b?c[g]&&c[g]!==Object.prototype[g]?c=c[g]:c=c[g]={}:c[g]=b}
;var B=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function C(a){return a?decodeURI(a):a}
;A("yt.config_",window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{});Object.freeze(["js-httpswwwgoogleanalyticscomanalyticsjs","js-chromeextensionpkedcjkdefgpdelpbcmbmeomcjbeemfm","video-","js-http","css-http"]);
var D=Object.freeze("document.appendChild document.body.appendChild document.querySelector document.querySelectorAll history.back history.go".split(" ")),E=Object.freeze("fonts.googleapis.com s0.2mdn.net securepubads.g.doubleclick.net ssl.google-analytics.com static.doubleclick.net www.google-analytics.com www.googletagservices.com www.youtube.com youtube.com".split(" ")),F=Object.freeze(["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl","enhhojjnijigcajfphajepfemndkmdlo"]),G=
Object.freeze(".corp.google.com .googlevideo.com .ytimg.com .google.com .googlesyndication.com .gstatic.com .prod.google.com .google.ru".split(" ")),H=Object.freeze(["chrome-extension","safari-extension","safari-resource","opera"]);function I(){return D.map(function(a){return J(a)}).filter(function(a){return!!a})}
function J(a){var b=a.split(".");a=b[b.length-1];b=b.reduce(function(c,g){return c&&c[g]},window);
if(!b)return a+" is missing";b=Function.prototype.toString.call(b).replace(/\n/g," ").replace(/  +/g," ");return b!="function "+a+"() { [native code] }"?a+" is not native, prologue: "+b.slice(0,50):null}
function K(a){var b=a.match(B)[1]||null;return H.some(function(c){return b==c})}
function L(a){var b=C(a.match(B)[3]||null);return!b||K(a)?!0:E.some(function(c){return b==c})||G.some(function(c){return b.endsWith(c)})}
function M(a){if(!K(a))return null;var b=C(a.match(B)[3]||null);return b?F.some(function(c){return b==c})?null:b:null}
function N(){var a=new Set;[].concat(x(document.querySelectorAll("script"))).forEach(function(b){b.src&&!L(b.src)&&a.add(b.src)});
[].concat(x(document.querySelectorAll("link[href]"))).forEach(function(b){"alternate"==b.rel||L(b.href)||a.add(b.href)});
return[].concat(x(a)).sort()}
function O(){var a=new Set;[].concat(x(document.querySelectorAll("script"))).forEach(function(b){b.src&&(b=M(b.src))&&a.add(b)});
return[].concat(x(a)).sort()}
;A("ytbin.polymer.shared.lib.tampering.info",function(){var a=N(),b=I(),c=O(),g=[];c.length&&g.push("extensions",c);a.length&&g.push("suspiciousIncludes",a);b.length&&g.push("suspiciousApis",b);return g.length?g:null});}).call(this);


}
/*
     FILE ARCHIVED ON 02:04:53 May 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:08:22 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 191.869
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.073
  cdx.remote: 0.084
  esindex: 0.013
  LoadShardBlock: 33.095 (3)
  PetaboxLoader3.datanode: 73.766 (5)
  load_resource: 77.239
  PetaboxLoader3.resolve: 29.593
  loaddict: 13.24
*/