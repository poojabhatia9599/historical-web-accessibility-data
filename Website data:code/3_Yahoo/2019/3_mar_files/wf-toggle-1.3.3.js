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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-toggle",[],t):"object"==typeof exports?exports["wafer-toggle"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-toggle"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20190301004838/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=window.wafer&&window.wafer.utils||{},u=s.bindEvent,c=s.convertNodeListToArray,l=s.unbindEvent,f=["click","mouseenter","mouseleave","onLoad","touchstart","touchend","touchmove"],d=window.wafer.base,h=function(e){var t=new Map;return e&&"string"==typeof e&&e.split(";").forEach(function(e){var r=e.split(":");if(3===r.length){var n=r[0];t.has(n)||t.set(n,[]),t.get(n).push(r.slice(1))}}),t},v=function(){function e(t){var r=this;n(this,e);var o=t.getAttribute("data-wf-toggle-target"),i=t.getAttribute("data-wf-toggle-class")||"",s=t.getAttribute("data-wf-sync-delay"),u=this._util=a({},this._util,{drag:{endX:0,endY:0,overallDirectionX:0,startX:0,startY:0},elem:t,syncDelay:null===s||void 0===s?0:Number(s),targetSelector:o});i&&(f.forEach(function(e){r[e]=r[e].bind(r)}),u.events=h(i),u.events.get("onLoad")&&this.processTargets("onLoad"),this.addEventListeners())}return i(e,[{key:"addEventListeners",value:function(){var e=this._util,t=e.elem,r=e.events;if(0!==r.size){var n=!0,o=!1,a=void 0;try{for(var i,s=r.keys()[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var c=i.value;"click"!==c?"onLoad"!==c&&(0===c.indexOf("swipe")?(u(t,"touchstart",this.touchstart),u(t,"touchend",this.touchend),u(t,"touchmove",this.touchmove,{passive:!1})):0===c.indexOf("touch")||u(t,c,this[c])):t.classList.add("has-click")}}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}}}},{key:"removeEventListeners",value:function(){var e=this._util.elem;l(e,"touchstart",this.touchstart),l(e,"touchend",this.touchend),l(e,"touchmove",this.touchmove,{passive:!1}),l(e,"mouseenter",this.mouseenter),l(e,"mouseleave",this.mouseleave)}},{key:"click",value:function(){this.processTargets("click")}},{key:"onLoad",value:function(){this.processTargets("onLoad")}},{key:"mouseenter",value:function(){this.processTargets("mouseenter")}},{key:"mouseleave",value:function(){this.processTargets("mouseleave")}},{key:"touchstart",value:function(e){var t=this._util.drag,r=e.touches[0],n=r.clientY,o=r.pageX;t.startX=o,t.startY=n}},{key:"touchend",value:function(e){this.clearDrag()}},{key:"touchmove",value:function(e){var t=this._util.drag;t.endX=e.touches[0].pageX,t.endY=e.touches[0].clientY;var r=0;t.startX!==t.endX&&(r=t.startX>t.endX?1:-1),t.overallDirectionX=r,this.isValidSwipe()&&(e.preventDefault(),this.triggerSwipe(),this.clearDrag(),this.touchstart(e))}},{key:"isValidSwipe",value:function(){var e=this._util,t=Math.abs(e.drag.startX-e.drag.endX);return t>30&&t>Math.abs(e.drag.startY-e.drag.endY)}},{key:"triggerSwipe",value:function(){var e=this._util;1===e.drag.overallDirectionX?this.swipeleft():-1===e.drag.overallDirectionX&&this.swiperight()}},{key:"swipeleft",value:function(){this.processTargets("swipeleft")}},{key:"swiperight",value:function(){this.processTargets("swiperight")}},{key:"clearDrag",value:function(){this._util.drag={endX:0,endY:0,overallDirectionX:0,startX:0,startY:0}}},{key:"processTargets",value:function(t){var r=this._util,n=r.elem,a=r.events,i=r.syncDelay,s=r.targetSelector;if(a.has(t)){var u=a.get(t);this.getTargets(s).forEach(function(r){u.forEach(function(a){var s=o(a,2),u=s[0],c=s[1],l=r.classList,f=u.replace("WithSync",""),h=f!==u;if(l[f]){var v=l.contains(c);("toggle"===f||"remove"===f&&v||"add"===f&&!v)&&(r.classList[f](c),h&&setTimeout(function(){window.wafer.base.sync(r)},i),d._emit({elem:n,meta:{action:u,className:c,eventName:t,target:r},name:e.name},"toggle:change"))}})})}}},{key:"getTargets",value:function(e){return e&&"string"==typeof e?c(document.querySelectorAll(e)):[this._util.elem]}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"destroy",value:function(){this._util.elem.classList.add("wafer-destroyed"),this.removeEventListeners()}}]),e}();v.events={click:[["has-click","click"]]},t.default=v,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return u=o(r("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=window.wafer.controllers.WaferBaseController,l=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,o=void 0===r?document:r,s=e.selector,c=void 0===s?".wafer-toggle":s;a(this,t);var l=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:c,WaferClass:(u||n()).default}));return l.sync(),l}return s(t,e),t}(c);t.default=l,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o;t.default=new((o||function(){return o=n(r("./src/controller.js"))}()).default)({}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 00:48:38 Mar 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:25:19 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 79.193
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.057
  cdx.remote: 0.05
  esindex: 0.008
  LoadShardBlock: 48.098 (3)
  PetaboxLoader3.datanode: 68.339 (5)
  load_resource: 183.231 (2)
  PetaboxLoader3.resolve: 136.763 (2)
*/