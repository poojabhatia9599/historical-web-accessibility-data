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

!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("wafer-rapid",[],r):"object"==typeof exports?exports["wafer-rapid"]=r():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-rapid"]=r())}("undefined"!=typeof self?self:this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="https://web.archive.org/web/20190131235753/https://s.yimg.com/aaq/wf/",r(r.s="./src/entry.js")}({"./src/base.js":function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),a=window.wafer.utils,i=a.convertNodeListToArray,f=a.get,c=a.findAncestor,l=null,s=null,d=function(e){var r={id:e.id},t=e.getAttribute("data-i13n");return t&&(r=t.split(";").reduce(function(e,r){var t=r.split(":");return 2===t.length&&(e[t[0]]=t[1]),e},r)),r},p=function(){return!l&&s&&(l=f(window,s))&&"function"!=typeof l.refreshModule&&(s=null,l=null),l},w=function(e){if(!e.id)return!1;var r=p();if(!r)return!1;var t=d(e),n=t.id;if(r.isModuleTracked(n))r.refreshModule(n);else{var u=t.sec?o({},n,t.sec):[n];r.addModulesWithViewability(u)}return!0},y=function(){function e(){n(this,e),s=(document.body.getAttribute("data-wf-rapid")||"rapidInstance").split(".")}return u(e,[{key:"sync",value:function(e){if(e){var r=c(e,"wafer-rapid-module");r&&w(r);var t=i(e.getElementsByClassName("wafer-rapid-module"));t.length>0&&Array.prototype.forEach.call(t,function(e){w(e)})}}}]),e}();r.default=y,e.exports=r.default},"./src/entry.js":function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o;r.default=new((o||function(){return o=n(t("./src/base.js"))}()).default),e.exports=r.default}})});

}
/*
     FILE ARCHIVED ON 23:57:53 Jan 31, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:24:27 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 275.143
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.059
  cdx.remote: 0.054
  esindex: 0.01
  LoadShardBlock: 225.338 (3)
  PetaboxLoader3.datanode: 71.505 (4)
  load_resource: 106.436
  PetaboxLoader3.resolve: 69.653
*/