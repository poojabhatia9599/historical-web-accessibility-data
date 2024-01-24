!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-toggle",[],t):"object"==typeof exports?exports["wafer-toggle"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-toggle"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},c=window.wafer,f=c.constants,d=c.utils,v=c.WaferBaseClass,h=d.bindEvent,p=d.convertNodeListToArray,y=d.setTimeout,g=d.unbindEvent,m=f.ATTR_PREFIX,b=["key"],w=["click","mouseenter","mouseEnterDelay","mouseleave","mouseLeaveDelay","onLoad","touchend","touchmove","touchstart"],_=window.wafer.base,k=function(e){var t=new Map;return e&&"string"==typeof e&&e.split(";").forEach(function(e){var r=e.split(":");if(3===r.length){var n=r[0];t.has(n)||t.set(n,[]),t.get(n).push(r.slice(1))}}),t},O=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:b})),i=e.getAttribute(m+"toggle-aria-expanded"),a=e.getAttribute(m+"toggle-delay"),u=e.getAttribute(m+"toggle-class")||"",l=e.getAttribute(m+"toggle-set-focus"),c=e.getAttribute(m+"toggle-prevent-browser-default-behavior"),f=e.getAttribute(m+"sync-delay"),d=e.getAttribute(m+"toggle-target"),v=e.getAttribute(m+"toggle-aria-expanded-class"),h=r._util=s({},r._util,{ariaExpanded:i,ariaExpandedClass:null===v||void 0===v?0:v,delay:null===a||void 0===a?0:Number(a),drag:{endX:0,endY:0,overallDirectionX:0,startX:0,startY:0},elem:e,preventBrowserDefaultBehavior:null===c||void 0===c?0:Number(c),setFocus:null===l||void 0===l?0:Number(l),syncDelay:null===f||void 0===f?0:Number(f),targetSelector:d});return r._state=s({},r._state,{clickAndMouseExitTimeout:null,isClickAndMouseExit:!1}),i&&r.addAria(),u&&(w.forEach(function(e){r[e]=r[e].bind(r)}),h.events=k(u),h.events.get("onLoad")&&r.processTargets("onLoad"),r.addEventListeners()),r}return i(t,e),u(t,[{key:"addAria",value:function(){var e=this._util,t=e.ariaExpanded,r=e.elem,n=e.targetSelector;r.setAttribute("aria-expanded",Boolean(Number(t)));var o=n.substring(1);document.getElementById(o)&&r.setAttribute("aria-controls",o)}},{key:"addEventListeners",value:function(){var e=this._util,t=e.elem,r=e.events;if(0!==r.size){var n=!0,o=!1,i=void 0;try{for(var a,s=r.keys()[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value,l=this._state.isClickAndMouseExit="clickAndMouseExit"===u;"click"===u||l?t.classList.add("has-toggle-click"):"onLoad"!==u&&("clickOutside"!==u?0===u.indexOf("swipe")?(h(t,"touchstart",this.touchstart),h(t,"touchend",this.touchend),h(t,"touchmove",this.touchmove,{passive:!1})):0===u.indexOf("touch")||h(t,u,this[u]):this._state.isClickOutside=!0)}}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}}}},{key:"removeEventListeners",value:function(){var e=this._util.elem;g(e,"touchstart",this.touchstart),g(e,"touchend",this.touchend),g(e,"touchmove",this.touchmove,{passive:!1}),g(e,"mouseenter",this.mouseEnterDelay),g(e,"mouseleave",this.mouseLeaveDelay),g(e,"mouseenter",this.mouseenter),g(e,"mouseleave",this.mouseleave)}},{key:"click",value:function(e){if(this._util.preventBrowserDefaultBehavior&&(e.preventDefault(),e.stopPropagation()),this._state.isClickAndMouseExit){var t=this._util.elem;h(t,"mouseenter",this.mouseEnterDelay),h(t,"mouseleave",this.mouseLeaveDelay)}this.processTargets("click")}},{key:"onLoad",value:function(){this.processTargets("onLoad")}},{key:"mouseenter",value:function(){this.processTargets("mouseenter")}},{key:"mouseEnterDelay",value:function(){clearTimeout(this._state.clickAndMouseExitTimeout)}},{key:"mouseleave",value:function(){this.processTargets("mouseleave")}},{key:"mouseLeaveDelay",value:function(){var e=this;this._state.clickAndMouseExitTimeout&&clearTimeout(this._state.clickAndMouseExitTimeout);var t=this._util.delay;this._state.clickAndMouseExitTimeout=y(function(){e.processTargets("clickAndMouseExit")},t,this)}},{key:"touchstart",value:function(e){var t=this._util.drag,r=e.touches[0],n=r.clientY,o=r.pageX;t.startX=o,t.startY=n}},{key:"touchend",value:function(e){this.clearDrag()}},{key:"touchmove",value:function(e){var t=this._util.drag;t.endX=e.touches[0].pageX,t.endY=e.touches[0].clientY;var r=0;t.startX!==t.endX&&(r=t.startX>t.endX?1:-1),t.overallDirectionX=r,this.isValidSwipe()&&(e.cancelable&&e.preventDefault(),this.triggerSwipe(),this.clearDrag(),this.touchstart(e))}},{key:"isValidSwipe",value:function(){var e=this._util,t=Math.abs(e.drag.startX-e.drag.endX);return t>30&&t>Math.abs(e.drag.startY-e.drag.endY)}},{key:"triggerSwipe",value:function(){var e=this._util;1===e.drag.overallDirectionX?this.swipeleft():-1===e.drag.overallDirectionX&&this.swiperight()}},{key:"swipeleft",value:function(){this.processTargets("swipeleft")}},{key:"swiperight",value:function(){this.processTargets("swiperight")}},{key:"clearDrag",value:function(){this._util.drag={endX:0,endY:0,overallDirectionX:0,startX:0,startY:0}}},{key:"executeAction",value:function(e,r,n,o,i,a){var s=this._util,u=s.ariaExpanded,l=s.ariaExpandedClass,c=s.elem,f=s.setFocus,d=s.syncDelay;r.classList[o](i),a&&y(function(){window.wafer.base.sync(r)},d,this),f&&(r.setAttribute("tabIndex","-1"),y(function(){return r.focus()},5)),u&&("true"===c.getAttribute("aria-expanded")?(c.setAttribute("aria-expanded","false"),c.classList.remove(l)):(c.setAttribute("aria-expanded","true"),c.classList.add(l))),_._emit({elem:c,meta:{action:n,className:i,eventName:e,target:r},name:t.name},"toggle:change")}},{key:"processTargets",value:function(e){var t=this,r=this._util,n=r.events,o=r.delay,i=r.targetSelector;if(n.has(e)){var s=n.get(e);this.getTargets(i).forEach(function(r){s.forEach(function(n){var i=a(n,2),s=i[0],u=i[1],l=r.classList,c=s.replace("WithSyncDelay","").replace("WithSync","").replace("WithDelay",""),f=-1!==s.indexOf("WithSyncDelay"),d=f||-1!==s.indexOf("WithSync"),v=f||-1!==s.indexOf("WithDelay");if("removeFromOthers"===c)p(document.getElementsByClassName(u)).forEach(function(e){e!==r&&e.classList.remove(u)});else if(l[c]){var h=l.contains(u);t.didComplete(null),("toggle"===c||"remove"===c&&h||"add"===c&&!h)&&(v?y(function(){t.executeAction(e,r,s,c,u,d)},o,t):t.executeAction(e,r,s,c,u,d))}})})}}},{key:"getTargets",value:function(e){return e&&"string"==typeof e?p(document.querySelectorAll(e)):[this._util.elem]}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"handleClickOutside",value:function(e){if(this._state.isClickOutside){(0,e.waferComposedMap)().get(this._util.elem)||this.processTargets("clickOutside")}}},{key:"stateDidUpdate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stateAttr,r=this._util.events;"key"===t&&r.has("stateChange")&&("1"===this._util.key?r.get("stateChange")[0][0]="add":r.get("stateChange")[0][0]="remove",this.processTargets("stateChange"))}},{key:"destroy",value:function(){this.removeEventListeners(),l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}}]),t}(v);O.events={click:[["has-toggle-click","click"]]},t.default=O,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return u=o(r("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},f=window.wafer.controllers.WaferBaseController,d=window.wafer.utils,v=d.bindEvent,h=d.unbindEvent,p=["_handleKeyDown"],y=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,o=void 0===r?document:r,s=e.selector,l=void 0===s?".wafer-toggle":s;i(this,t);var c=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:l,WaferClass:(u||n()).default}));return c.sync(),p.forEach(function(e){c[e]=c[e].bind(c)}),c.addEventListeners(),c}return s(t,e),l(t,[{key:"addEventListeners",value:function(){v(document,"keydown",this._handleKeyDown)}},{key:"_handleKeyDown",value:function(e){switch(e=e||window.event,e.keyCode){case 27:var t=this._state.elementInstances,r=!0,n=!1,o=void 0;try{for(var i,a=t.values()[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var s=i.value,u=s.instance;u.processTargets("clickOutside"),u.processTargets("clickAndMouseExit")}}catch(e){n=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw o}}}}},{key:"destroy",value:function(e){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this,e),e||h(document,"keydown",this._handleKeyDown)}}]),t}(f);t.default=y,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o;t.default=new((o||function(){return o=n(r("./src/controller.js"))}()).default)({}),e.exports=t.default}})});