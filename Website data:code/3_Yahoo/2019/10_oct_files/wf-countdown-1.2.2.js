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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-countdown",[],t):"object"==typeof exports?exports["wafer-countdown"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-countdown"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20190930234246/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=window.wafer.base,s=24,u={HOUR:"hours"},f=function(e){var t=[];return e&&"string"==typeof e&&e.split(";").forEach(function(e){t.push(e)}),t},i=function(e){var t=Date.parse(e)-Date.parse(new Date),n=new Map;if(t>0){var r=Math.floor(t/1e3%60),o=Math.floor(t/1e3/60%60),a=Math.floor(t/36e5%s),u=Math.floor(t/864e5);n.set("total",t),n.set("days",u),n.set("hours",a),n.set("minutes",o),n.set("seconds",r)}else n.set("total",0),n.set("days",0),n.set("hours",0),n.set("minutes",0),n.set("seconds",0);return n},c=function(){function e(t){r(this,e),this._util={elem:t};var n=t.getAttribute("data-wf-countdown-type")||"",o=t.getAttribute("data-wf-countdown-largest-unit")||"";if(n&&u.HOUR===o){var a=new RegExp("(\\b"+o+";.*)","gm").exec(n),s=Array.isArray(a)&&a[1];s&&(n=s)}if(n){var i=f(n),c=new Map;i.forEach(function(e){c.set(e,t.getElementsByClassName("wafer-countdown-"+e)[0])});var l=t.getAttribute("data-wf-countdown-enddate");l&&c.size===i.length&&this.setupCount(c,l,o)}}return o(e,[{key:"addBreakpointClass",value:function(e){var t=this._util.elem,n=t.classList,r=e.get("days"),o=e.get("hours"),s=e.get("minutes"),u=e.get("seconds"),f=0===r&&0!==o,i=0===r&&0===o&&0!==s,c=0===r&&0===o&&0===s&&0===u,l=void 0;c?(n.remove("wafer-countdown-lessthan24h","wafer-countdown-lessthan1h"),n.add("wafer-countdown-expired"),l="expired"):i?(n.remove("wafer-countdown-lessthan24h"),n.add("wafer-countdown-lessthan1h"),l="lessThanAnHour"):f&&(n.add("wafer-countdown-lessthan24h"),l="lessThanADay"),l&&a.emitWaferEvent("countdown:"+l,{elem:t,meta:{}})}},{key:"setupCount",value:function(e,t,n){function r(){var r=i(t);o.addBreakpointClass(r),e.forEach(function(e,t){var o=r.get(t);t===u.HOUR&&n===u.HOUR&&(o+=r.get("days")*s);var a=o>=10?""+o:("0"+o).slice(-2);e.innerHTML!==a&&(e.innerHTML=a)}),r.get("total")<=0&&clearInterval(o._util.countTimeInterval)}var o=this,a=o._util.elem;r(),a.classList.add("wafer-countdown-started"),o._util.countTimeInterval=setInterval(r,1e3)}},{key:"destroy",value:function(){clearInterval(this._util.countTimeInterval)}}]),e}();t.default=c,e.exports=t.default},"./src/controller.js":function(e,t,n){"use strict";function r(){return f=o(n("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f,i=window.wafer.controllers.WaferBaseController,c=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.root,o=void 0===n?document:n,u=e.selector,i=void 0===u?".wafer-countdown":u;a(this,t);var c=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:i,WaferClass:(f||r()).default}));return c.sync(),c}return u(t,e),t}(i);t.default=c,e.exports=t.default},"./src/entry.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o;t.default=new((o||function(){return o=r(n("./src/controller.js"))}()).default)({selector:".wafer-countdown"}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 23:42:46 Sep 30, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:29:07 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 99.314
  exclusion.robots: 0.087
  exclusion.robots.policy: 0.078
  cdx.remote: 0.055
  esindex: 0.009
  LoadShardBlock: 53.911 (3)
  PetaboxLoader3.datanode: 118.732 (5)
  load_resource: 373.15 (2)
  PetaboxLoader3.resolve: 120.875 (2)
*/