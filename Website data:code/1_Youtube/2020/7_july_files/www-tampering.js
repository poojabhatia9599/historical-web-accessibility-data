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
function n(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:n(a)}}
function q(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var r="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function u(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var w=u(this);function x(a,b){if(b)a:{for(var c=w,e=a.split("."),h=0;h<e.length-1;h++){var k=e[h];if(!(k in c))break a;c=c[k]}e=e[e.length-1];h=c[e];k=b(h);k!=h&&null!=k&&r(c,e,{configurable:!0,writable:!0,value:k})}}
x("String.prototype.endsWith",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var e=this+"";b+="";void 0===c&&(c=e.length);for(var h=Math.max(0,Math.min(c|0,e.length)),k=b.length;0<k&&0<h;)if(e[--h]!=b[--k])return!1;return 0>=k}});
function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
x("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(h||"")+"_"+e++,h)}
function c(h,k){this.a=h;r(this,"description",{configurable:!0,writable:!0,value:k})}
if(a)return a;c.prototype.toString=function(){return this.a};
var e=0;return b});
x("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var e=w[b[c]];"function"===typeof e&&"function"!=typeof e.prototype[a]&&r(e.prototype,a,{configurable:!0,writable:!0,value:function(){return z(n(this))}})}return a});
function z(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
x("WeakMap",function(a){function b(d){this.a=(g+=Math.random()+1).toString();if(d){d=p(d);for(var f;!(f=d.next()).done;)f=f.value,this.set(f[0],f[1])}}
function c(){}
function e(d){var f=typeof d;return"object"===f&&null!==d||"function"===f}
function h(d){if(!y(d,m)){var f=new c;r(d,m,{value:f})}}
function k(d){var f=Object[d];f&&(Object[d]=function(l){if(l instanceof c)return l;Object.isExtensible(l)&&h(l);return f(l)})}
if(function(){if(!a||!Object.seal)return!1;try{var d=Object.seal({}),f=Object.seal({}),l=new a([[d,2],[f,3]]);if(2!=l.get(d)||3!=l.get(f))return!1;l["delete"](d);l.set(f,4);return!l.has(d)&&4==l.get(f)}catch(t){return!1}}())return a;
var m="$jscomp_hidden_"+Math.random();k("freeze");k("preventExtensions");k("seal");var g=0;b.prototype.set=function(d,f){if(!e(d))throw Error("Invalid WeakMap key");h(d);if(!y(d,m))throw Error("WeakMap key fail: "+d);d[m][this.a]=f;return this};
b.prototype.get=function(d){return e(d)&&y(d,m)?d[m][this.a]:void 0};
b.prototype.has=function(d){return e(d)&&y(d,m)&&y(d[m],this.a)};
b.prototype["delete"]=function(d){return e(d)&&y(d,m)&&y(d[m],this.a)?delete d[m][this.a]:!1};
return b});
x("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,d){var f=g.a;return z(function(){if(f){for(;f.head!=g.a;)f=f.previous;for(;f.next!=f.head;)return f=f.next,{done:!1,value:d(f)};f=null}return{done:!0,value:void 0}})}
function e(g,d){var f=d&&typeof d;"object"==f||"function"==f?k.has(d)?f=k.get(d):(f=""+ ++m,k.set(d,f)):f="p_"+d;var l=g.f[f];if(l&&y(g.f,f))for(var t=0;t<l.length;t++){var v=l[t];if(d!==d&&v.key!==v.key||d===v.key)return{id:f,list:l,index:t,b:v}}return{id:f,list:l,index:-1,b:void 0}}
function h(g){this.f={};this.a=b();this.size=0;if(g){g=p(g);for(var d;!(d=g.next()).done;)d=d.value,this.set(d[0],d[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),d=new a(p([[g,"s"]]));if("s"!=d.get(g)||1!=d.size||d.get({x:4})||d.set({x:4},"t")!=d||2!=d.size)return!1;var f=d.entries(),l=f.next();if(l.done||l.value[0]!=g||"s"!=l.value[1])return!1;l=f.next();return l.done||4!=l.value[0].x||"t"!=l.value[1]||!f.next().done?!1:!0}catch(t){return!1}}())return a;
var k=new WeakMap;h.prototype.set=function(g,d){g=0===g?0:g;var f=e(this,g);f.list||(f.list=this.f[f.id]=[]);f.b?f.b.value=d:(f.b={next:this.a,previous:this.a.previous,head:this.a,key:g,value:d},f.list.push(f.b),this.a.previous.next=f.b,this.a.previous=f.b,this.size++);return this};
h.prototype["delete"]=function(g){g=e(this,g);return g.b&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.f[g.id],g.b.previous.next=g.b.next,g.b.next.previous=g.b.previous,g.b.head=null,this.size--,!0):!1};
h.prototype.clear=function(){this.f={};this.a=this.a.previous=b();this.size=0};
h.prototype.has=function(g){return!!e(this,g).b};
h.prototype.get=function(g){return(g=e(this,g).b)&&g.value};
h.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
h.prototype.keys=function(){return c(this,function(g){return g.key})};
h.prototype.values=function(){return c(this,function(g){return g.value})};
h.prototype.forEach=function(g,d){for(var f=this.entries(),l;!(l=f.next()).done;)l=l.value,g.call(d,l[1],l[0],this)};
h.prototype[Symbol.iterator]=h.prototype.entries;var m=0;return h});
x("Set",function(a){function b(c){this.a=new Map;if(c){c=p(c);for(var e;!(e=c.next()).done;)this.add(e.value)}this.size=this.a.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),e=new a(p([c]));if(!e.has(c)||1!=e.size||e.add(c)!=e||1!=e.size||e.add({x:4})!=e||2!=e.size)return!1;var h=e.entries(),k=h.next();if(k.done||k.value[0]!=c||k.value[1]!=c)return!1;k=h.next();return k.done||k.value[0]==c||4!=k.value[0].x||k.value[1]!=k.value[0]?!1:h.next().done}catch(m){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};
b.prototype["delete"]=function(c){c=this.a["delete"](c);this.size=this.a.size;return c};
b.prototype.clear=function(){this.a.clear();this.size=0};
b.prototype.has=function(c){return this.a.has(c)};
b.prototype.entries=function(){return this.a.entries()};
b.prototype.values=function(){return this.a.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,e){var h=this;this.a.forEach(function(k){return c.call(e,k,k,h)})};
return b});
var A=this||self;function B(a,b){var c=a.split("."),e=A;c[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+c[0]);for(var h;c.length&&(h=c.shift());)c.length||void 0===b?e[h]&&e[h]!==Object.prototype[h]?e=e[h]:e=e[h]={}:e[h]=b}
;var C=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function D(a){return a?decodeURI(a):a}
;var E=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};B("yt.config_",E);function F(){var a=[];return"CSS_CLASS_WHITELIST"in E?E.CSS_CLASS_WHITELIST:a}
;var G=Object.freeze(["js-httpswwwgoogleanalyticscomanalyticsjs","js-chromeextensionpkedcjkdefgpdelpbcmbmeomcjbeemfm","video-","js-http","css-http"]),H=Object.freeze("document.appendChild document.body.appendChild document.querySelector document.querySelectorAll history.back history.go".split(" ")),I=Object.freeze("fonts.googleapis.com s0.2mdn.net securepubads.g.doubleclick.net ssl.google-analytics.com static.doubleclick.net www.google-analytics.com www.googletagservices.com www.youtube.com youtube.com".split(" ")),
J=Object.freeze(["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl","enhhojjnijigcajfphajepfemndkmdlo"]),K=Object.freeze(".corp.google.com .googlevideo.com .ytimg.com .google.com .googlesyndication.com .gstatic.com .prod.google.com .google.ru".split(" ")),L=Object.freeze(["chrome-extension","safari-extension","safari-resource","opera"]);function M(){return H.map(function(a){return N(a)}).filter(function(a){return!!a})}
function N(a){var b=a.split(".");a=b[b.length-1];b=b.reduce(function(c,e){return c&&c[e]},window);
if(!b)return a+" is missing";b=Function.prototype.toString.call(b).replace(/\n/g," ").replace(/  +/g," ");return b!="function "+a+"() { [native code] }"?a+" is not native, prologue: "+b.slice(0,50):null}
function O(a){var b=a.match(C)[1]||null;return L.some(function(c){return b==c})}
function P(a){var b=D(a.match(C)[3]||null);return!b||O(a)?!0:I.some(function(c){return b==c})||K.some(function(c){return b.endsWith(c)})}
function Q(a){if(!O(a))return null;var b=D(a.match(C)[3]||null);return b?J.some(function(c){return b==c})?null:b:null}
function R(){var a=new Set;[].concat(q(document.querySelectorAll("script"))).forEach(function(b){b.src&&!P(b.src)&&a.add(b.src)});
[].concat(q(document.querySelectorAll("link[href]"))).forEach(function(b){"alternate"==b.rel||P(b.href)||a.add(b.href)});
return[].concat(q(a)).sort()}
function S(){var a=new Set;[].concat(q(document.querySelectorAll("script"))).forEach(function(b){b.src&&(b=Q(b.src))&&a.add(b)});
return[].concat(q(a)).sort()}
function T(){var a=new Set;[].concat(q(window.document.querySelectorAll("*"))).forEach(function(b){[].concat(q(b.classList)).forEach(function(c){U()||a.add(c)})});
return a}
function U(){return G.some(function(){})}
function V(){var a=new Set(F());if(!a.size)return[];var b=new Set;T().forEach(function(h){a.has(h)||U()||b.add(h)});
var c=[].concat(q(b)).sort();c=c.slice(0,15);var e=b.size-15;0<e&&c.push("...and "+e+" more.");return c}
;B("ytbin.polymer.shared.lib.tampering.info",function(){var a=V(),b=R(),c=M(),e=S(),h=[];e.length&&h.push("extensions",e);a.length&&h.push("suspiciousClasses",a);b.length&&h.push("suspiciousIncludes",b);c.length&&h.push("suspiciousApis",c);return h.length?h:null});}).call(this);


}
/*
     FILE ARCHIVED ON 00:41:10 Jul 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:56:12 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 367.77
  exclusion.robots: 0.055
  exclusion.robots.policy: 0.049
  cdx.remote: 0.04
  esindex: 0.005
  LoadShardBlock: 78.226 (3)
  PetaboxLoader3.datanode: 69.304 (5)
  load_resource: 206.11 (2)
  PetaboxLoader3.resolve: 131.736 (2)
*/