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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-toggle",[],t):"object"==typeof exports?exports["wafer-toggle"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-toggle"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20221001010410/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},c=window.wafer,f=c.constants,d=c.utils,v=c.WaferBaseClass,h=d.bindEvent,p=d.convertNodeListToArray,y=d.findAncestor,g=d.setTimeout,m=d.unbindEvent,b=f.ATTR_PREFIX,w=["key"],_=["click","mouseenter","mouseEnterDelay","mouseleave","mouseLeaveDelay","onLoad","touchend","touchmove","touchstart"],k=window.wafer.base,E=function(e){var t=new Map;return e&&"string"==typeof e&&e.split(";").forEach(function(e){var r=e.split(":");if(3===r.length){var n=r[0];t.has(n)||t.set(n,[]),t.get(n).push(r.slice(1))}}),t},O=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:w})),i=e.getAttribute(b+"toggle-aria-expanded"),a=e.getAttribute(b+"toggle-delay"),u=e.getAttribute(b+"toggle-class")||"",l=e.getAttribute(b+"toggle-prevent-browser-default-behavior"),c=e.getAttribute(b+"toggle-prevent-scroll"),f=e.getAttribute(b+"sync-delay"),d=e.getAttribute(b+"toggle-target"),v=e.getAttribute(b+"toggle-boundary"),h=e.getAttribute(b+"toggle-aria-expanded-class"),p=e.getAttribute(b+"toggle-set-focus"),g=null;"string"==typeof p&&"NaN"===String(Number(p))&&(g=p,p="1");var m=r._util=s({},r._util,{ariaExpanded:i,ariaExpandedClass:null===h||void 0===h?0:h,boundaryElem:v&&y(e,v),delay:null===a||void 0===a?0:Number(a),drag:{endX:0,endY:0,overallDirectionX:0,startX:0,startY:0},elem:e,focusSelector:g,focusTarget:null,preventBrowserDefaultBehavior:null===l||void 0===l?0:Number(l),preventScroll:null===c||void 0===c?0:Number(c),setFocus:null===p||void 0===p?0:Number(p),syncDelay:null===f||void 0===f?0:Number(f),targetSelector:d});return r._state=s({},r._state,{clickAndMouseExitTimeout:null,isClickAndMouseExit:!1}),i&&r.addAria(),u&&(_.forEach(function(e){r[e]=r[e].bind(r)}),m.events=E(u),m.events.get("onLoad")&&r.processTargets("onLoad"),r.addEventListeners()),r}return i(t,e),u(t,[{key:"addAria",value:function(){var e=this._util,t=e.ariaExpanded,r=e.elem,n=e.targetSelector;r.setAttribute("aria-expanded",Boolean(Number(t)));var o=n.substring(1);document.getElementById(o)&&r.setAttribute("aria-controls",o)}},{key:"addEventListeners",value:function(){var e=this._util,t=e.elem,r=e.events;if(0!==r.size){var n=!0,o=!1,i=void 0;try{for(var a,s=r.keys()[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value,l=this._state.isClickAndMouseExit="clickAndMouseExit"===u;"click"===u||l?t.classList.add("has-toggle-click","has-wafer-click"):"onLoad"!==u&&("clickOutside"!==u?0===u.indexOf("swipe")?(h(t,"touchstart",this.touchstart),h(t,"touchend",this.touchend),h(t,"touchmove",this.touchmove,{passive:!1})):0===u.indexOf("touch")||h(t,u,this[u]):this._state.isClickOutside=!0)}}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}}}},{key:"removeEventListeners",value:function(){var e=this._util.elem;m(e,"touchstart",this.touchstart),m(e,"touchend",this.touchend),m(e,"touchmove",this.touchmove,{passive:!1}),m(e,"mouseenter",this.mouseEnterDelay),m(e,"mouseleave",this.mouseLeaveDelay),m(e,"mouseenter",this.mouseenter),m(e,"mouseleave",this.mouseleave)}},{key:"click",value:function(e){if(this._util.preventBrowserDefaultBehavior&&(e.preventDefault(),e.stopPropagation()),this._state.isClickAndMouseExit){var t=this._util.elem;h(t,"mouseenter",this.mouseEnterDelay),h(t,"mouseleave",this.mouseLeaveDelay)}this.processTargets("click")}},{key:"onLoad",value:function(){this.processTargets("onLoad")}},{key:"mouseenter",value:function(){this.processTargets("mouseenter")}},{key:"mouseEnterDelay",value:function(){clearTimeout(this._state.clickAndMouseExitTimeout)}},{key:"mouseleave",value:function(){this.processTargets("mouseleave")}},{key:"mouseLeaveDelay",value:function(){var e=this;this._state.clickAndMouseExitTimeout&&clearTimeout(this._state.clickAndMouseExitTimeout);var t=this._util.delay;this._state.clickAndMouseExitTimeout=g(function(){e.processTargets("clickAndMouseExit")},t,this)}},{key:"touchstart",value:function(e){var t=this._util.drag,r=e.touches[0],n=r.clientY,o=r.pageX;t.startX=o,t.startY=n}},{key:"touchend",value:function(e){this.clearDrag()}},{key:"touchmove",value:function(e){var t=this._util.drag;t.endX=e.touches[0].pageX,t.endY=e.touches[0].clientY;var r=0;t.startX!==t.endX&&(r=t.startX>t.endX?1:-1),t.overallDirectionX=r,this.isValidSwipe()&&(e.cancelable&&e.preventDefault(),this.triggerSwipe(),this.clearDrag(),this.touchstart(e))}},{key:"isValidSwipe",value:function(){var e=this._util,t=Math.abs(e.drag.startX-e.drag.endX);return t>30&&t>Math.abs(e.drag.startY-e.drag.endY)}},{key:"triggerSwipe",value:function(){var e=this._util;1===e.drag.overallDirectionX?this.swipeleft():-1===e.drag.overallDirectionX&&this.swiperight()}},{key:"swipeleft",value:function(){this.processTargets("swipeleft")}},{key:"swiperight",value:function(){this.processTargets("swiperight")}},{key:"clearDrag",value:function(){this._util.drag={endX:0,endY:0,overallDirectionX:0,startX:0,startY:0}}},{key:"executeAction",value:function(e,r,n,o,i,a,s){var u=this._util,l=u.ariaExpanded,c=u.ariaExpandedClass,f=u.elem,d=u.focusTarget,v=u.preventScroll,h=u.setFocus,p=u.syncDelay;if(r.classList[o](i),(a||s)&&g(function(){window.wafer.base[a?"sync":"syncUI"](r)},p,this),h){var y=void 0;v&&(y={preventScroll:!0}),g(function(){d.focus(y),d!==document.activeElement&&(d.setAttribute("tabIndex","-1"),d.focus(y))},5)}l&&("true"===f.getAttribute("aria-expanded")?(f.setAttribute("aria-expanded","false"),f.classList.remove(c)):(f.setAttribute("aria-expanded","true"),f.classList.add(c))),k._emit({elem:f,meta:{action:n,className:i,eventName:e,target:r},name:t.name},"toggle:change")}},{key:"processTargets",value:function(e){var t=this,r=this._util,n=r.elem,o=r.events;if(!o)return void k.emitError({name:"WaferToggle",elem:n,meta:{elemClassName:n.getAttribute("class")},stack:new Error("events missing for toggle")});var i=this._util,s=i.boundaryElem,u=i.delay,l=i.focusSelector,c=i.setFocus,f=i.targetSelector;if(o.has(e)){var d=o.get(e);this.getTargets(f,s).forEach(function(r){var n=t._util.focusTarget||Boolean(c&&l)?r.querySelector(l)||r:r;t._util.focusTarget=t._util.focusTarget||n,d.forEach(function(n){var o=a(n,2),i=o[0],l=o[1],c=r.classList,f=i.replace("WithSyncUIDelay","").replace("WithSyncDelay","").replace("WithSyncUI","").replace("WithSync","").replace("WithDelay",""),d=-1!==i.indexOf("WithSyncDelay"),v=d||-1!==i.indexOf("WithSync"),h=d||-1!==i.indexOf("Delay"),y=!1;if(v&&(y=-1!==i.indexOf("WithSyncUI"))&&(v=!1),"removeFromOthers"===f)p((s||document).getElementsByClassName(l)).forEach(function(e){e!==r&&e.classList.remove(l)});else if(c[f]){var m=c.contains(l);t.didComplete(null),("toggle"===f||"remove"===f&&m||"add"===f&&!m)&&(h?g(function(){t.executeAction(e,r,i,f,l,v,y)},u,t):t.executeAction(e,r,i,f,l,v,y))}})})}}},{key:"getTargets",value:function(e,t){return e&&"string"==typeof e?p((t||document).querySelectorAll(e)):[this._util.elem]}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"handleClickOutside",value:function(e){if(this._state.isClickOutside){(0,e.waferComposedMap)().get(this._util.elem)||this.processTargets("clickOutside")}}},{key:"stateDidUpdate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stateAttr,r=this._util.events;"key"===t&&r.has("stateChange")&&("1"===this._util.key?r.get("stateChange")[0][0]="add":r.get("stateChange")[0][0]="remove",this.processTargets("stateChange"))}},{key:"destroy",value:function(){this.removeEventListeners(),l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}}]),t}(v);O.events={click:[["has-toggle-click","click"]]},t.default=O,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return u=o(r("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},f=window.wafer.controllers.WaferBaseController,d=window.wafer.utils,v=d.bindEvent,h=d.unbindEvent,p=["_handleKeyDown"],y=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,o=void 0===r?document:r,s=e.selector,l=void 0===s?".wafer-toggle":s;i(this,t);var c=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:l,WaferClass:(u||n()).default}));return c.sync(),p.forEach(function(e){c[e]=c[e].bind(c)}),c.addEventListeners(),c}return s(t,e),l(t,[{key:"addEventListeners",value:function(){v(document,"keydown",this._handleKeyDown)}},{key:"_handleKeyDown",value:function(e){switch(e=e||window.event,e.keyCode){case 27:var t=this._state.elementInstances,r=!0,n=!1,o=void 0;try{for(var i,a=t.values()[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var s=i.value,u=s.instance;u.processTargets("clickOutside"),u.processTargets("clickAndMouseExit")}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}}},{key:"destroy",value:function(e){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this,e),e||h(document,"keydown",this._handleKeyDown)}}]),t}(f);t.default=y,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o;t.default=new((o||function(){return o=n(r("./src/controller.js"))}()).default)({}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 01:04:10 Oct 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:37 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.058
  cdx.remote: 0.09
  esindex: 0.009
  LoadShardBlock: 4317.309 (6)
  PetaboxLoader3.datanode: 4118.045 (7)
  load_resource: 340.115
  PetaboxLoader3.resolve: 335.628
*/