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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-toggle",[],t):"object"==typeof exports?exports["wafer-toggle"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-toggle"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20190801001543/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var r=[],o=!0,n=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(e){n=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(n)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},c=window.wafer,f=c.utils,d=c.WaferBaseClass,h=f.bindEvent,v=f.convertNodeListToArray,p=f.unbindEvent,y=[],g=["click","mouseenter","mouseEnterDelay","mouseleave","mouseLeaveDelay","onLoad","touchend","touchmove","touchstart"],m=window.wafer.base,w=function(e){var t=new Map;return e&&"string"==typeof e&&e.split(";").forEach(function(e){var r=e.split(":");if(3===r.length){var o=r[0];t.has(o)||t.set(o,[]),t.get(o).push(r.slice(1))}}),t},b=function(e){function t(e){o(this,t);var r=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:y})),i=e.getAttribute("data-wf-toggle-target"),a=e.getAttribute("data-wf-toggle-class")||"",u=e.getAttribute("data-wf-toggle-delay"),l=e.getAttribute("data-wf-sync-delay"),c=r._util=s({},r._util,{delay:null===u||void 0===u?0:Number(u),drag:{endX:0,endY:0,overallDirectionX:0,startX:0,startY:0},elem:e,syncDelay:null===l||void 0===l?0:Number(l),targetSelector:i});return r._state=s({},r._state,{clickAndMouseExitTimeout:null,isClickAndMouseExit:!1}),a&&(g.forEach(function(e){r[e]=r[e].bind(r)}),c.events=w(a),c.events.get("onLoad")&&r.processTargets("onLoad"),r.addEventListeners()),r}return i(t,e),u(t,[{key:"addEventListeners",value:function(){var e=this._util,t=e.elem,r=e.events;if(0!==r.size){var o=!0,n=!1,i=void 0;try{for(var a,s=r.keys()[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var u=a.value,l=this._state.isClickAndMouseExit="clickAndMouseExit"===u;"click"===u||l?t.classList.add("has-toggle-click"):"onLoad"!==u&&(0===u.indexOf("swipe")?(h(t,"touchstart",this.touchstart),h(t,"touchend",this.touchend),h(t,"touchmove",this.touchmove,{passive:!1})):0===u.indexOf("touch")||h(t,u,this[u]))}}catch(e){n=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(n)throw i}}}}},{key:"removeEventListeners",value:function(){var e=this._util.elem;p(e,"touchstart",this.touchstart),p(e,"touchend",this.touchend),p(e,"touchmove",this.touchmove,{passive:!1}),p(e,"mouseenter",this.mouseEnterDelay),p(e,"mouseleave",this.mouseLeaveDelay),p(e,"mouseenter",this.mouseenter),p(e,"mouseleave",this.mouseleave)}},{key:"click",value:function(){if(this._state.isClickAndMouseExit){var e=this._util.elem;h(e,"mouseenter",this.mouseEnterDelay),h(e,"mouseleave",this.mouseLeaveDelay)}this.processTargets("click")}},{key:"onLoad",value:function(){this.processTargets("onLoad")}},{key:"mouseenter",value:function(){this.processTargets("mouseenter")}},{key:"mouseEnterDelay",value:function(){clearTimeout(this._state.clickAndMouseExitTimeout)}},{key:"mouseleave",value:function(){this.processTargets("mouseleave")}},{key:"mouseLeaveDelay",value:function(){var e=this;this._state.clickAndMouseExitTimeout&&clearTimeout(this._state.clickAndMouseExitTimeout);var t=this._util.delay;this._state.clickAndMouseExitTimeout=setTimeout(function(){e.processTargets("clickAndMouseExit")},t)}},{key:"touchstart",value:function(e){var t=this._util.drag,r=e.touches[0],o=r.clientY,n=r.pageX;t.startX=n,t.startY=o}},{key:"touchend",value:function(e){this.clearDrag()}},{key:"touchmove",value:function(e){var t=this._util.drag;t.endX=e.touches[0].pageX,t.endY=e.touches[0].clientY;var r=0;t.startX!==t.endX&&(r=t.startX>t.endX?1:-1),t.overallDirectionX=r,this.isValidSwipe()&&(e.preventDefault(),this.triggerSwipe(),this.clearDrag(),this.touchstart(e))}},{key:"isValidSwipe",value:function(){var e=this._util,t=Math.abs(e.drag.startX-e.drag.endX);return t>30&&t>Math.abs(e.drag.startY-e.drag.endY)}},{key:"triggerSwipe",value:function(){var e=this._util;1===e.drag.overallDirectionX?this.swipeleft():-1===e.drag.overallDirectionX&&this.swiperight()}},{key:"swipeleft",value:function(){this.processTargets("swipeleft")}},{key:"swiperight",value:function(){this.processTargets("swiperight")}},{key:"clearDrag",value:function(){this._util.drag={endX:0,endY:0,overallDirectionX:0,startX:0,startY:0}}},{key:"processTargets",value:function(e){var r=this,o=this._util,n=o.elem,i=o.events,s=o.syncDelay,u=o.targetSelector;if(i.has(e)){var l=i.get(e);this.getTargets(u).forEach(function(o){l.forEach(function(i){var u=a(i,2),l=u[0],c=u[1],f=o.classList,d=l.replace("WithSync",""),h=d!==l;if("removeFromOthers"===d)v(document.getElementsByClassName(c)).forEach(function(e){e!==o&&e.classList.remove(c)});else if(f[d]){var p=f.contains(c);r.didComplete(null),("toggle"===d||"remove"===d&&p||"add"===d&&!p)&&(o.classList[d](c),h&&setTimeout(function(){window.wafer.base.sync(o)},s),m._emit({elem:n,meta:{action:l,className:c,eventName:e,target:o},name:t.name},"toggle:change"))}})})}}},{key:"getTargets",value:function(e){return e&&"string"==typeof e?v(document.querySelectorAll(e)):[this._util.elem]}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"destroy",value:function(){this.removeEventListeners(),l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}}]),t}(d);b.events={click:[["has-toggle-click","click"]]},t.default=b,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function o(){return u=n(r("./src/base.js"))}function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,l=window.wafer.controllers.WaferBaseController,c=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,n=void 0===r?document:r,s=e.selector,l=void 0===s?".wafer-toggle":s;i(this,t);var c=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:n,selector:l,WaferClass:(u||o()).default}));return c.sync(),c}return s(t,e),t}(l);t.default=c,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n;t.default=new((n||function(){return n=o(r("./src/controller.js"))}()).default)({}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 00:15:43 Aug 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:24:53 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 104.396
  exclusion.robots: 0.093
  exclusion.robots.policy: 0.085
  cdx.remote: 0.052
  esindex: 0.007
  LoadShardBlock: 57.288 (3)
  PetaboxLoader3.datanode: 156.249 (5)
  load_resource: 198.904 (2)
  PetaboxLoader3.resolve: 68.133 (2)
*/