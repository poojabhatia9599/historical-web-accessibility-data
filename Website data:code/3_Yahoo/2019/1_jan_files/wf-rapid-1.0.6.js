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

!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("wafer-rapid",[],r):"object"==typeof exports?exports["wafer-rapid"]=r():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-rapid"]=r())}("undefined"!=typeof self?self:this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="https://web.archive.org/web/20181231235936/https://s.yimg.com/aaq/wf/",r(r.s="./src/entry.js")}({"./src/base.js":function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),a=window.wafer.utils,f=a.get,i=a.findAncestor,l=null,c=null,s=function(e){var r={id:e.id},t=e.getAttribute("data-i13n");return t&&(r=t.split(";").reduce(function(e,r){var t=r.split(":");return 2===t.length&&(e[t[0]]=t[1]),e},r)),r},d=function(){return!l&&c&&(l=f(window,c))&&"function"!=typeof l.refreshModule&&(c=null,l=null),l},p=function(e){if(!e.id)return!1;var r=d();if(!r)return!1;var t=s(e),n=t.id;if(r.isModuleTracked(n))r.refreshModule(n);else{var o=t.sec?u({},n,t.sec):[n];r.addModulesWithViewability(o)}return!0},w=function(){function e(){n(this,e),c=(document.body.getAttribute("data-wf-rapid")||"rapidInstance").split(".")}return o(e,[{key:"sync",value:function(e){if(e){var r=i(e,"wafer-rapid-module");r&&p(r);var t=Array.from(e.getElementsByClassName("wafer-rapid-module"));t.length>0&&Array.prototype.forEach.call(t,function(e){p(e)})}}}]),e}();r.default=w,e.exports=r.default},"./src/entry.js":function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var u;r.default=new((u||function(){return u=n(t("./src/base.js"))}()).default),e.exports=r.default}})});

}
/*
     FILE ARCHIVED ON 23:59:36 Dec 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:25:11 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 162.913
  exclusion.robots: 0.086
  exclusion.robots.policy: 0.075
  cdx.remote: 0.061
  esindex: 0.01
  LoadShardBlock: 104.468 (3)
  PetaboxLoader3.datanode: 106.034 (4)
  load_resource: 127.763
  PetaboxLoader3.resolve: 24.783
*/