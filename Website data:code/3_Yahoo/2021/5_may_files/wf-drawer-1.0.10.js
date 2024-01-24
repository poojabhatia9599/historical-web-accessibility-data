!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-drawer",[],t):"object"==typeof exports?exports["wafer-drawer"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-drawer"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=function e(t,r,n){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in a)return a.value;var o=a.get;if(void 0!==o)return o.call(n)},l=window.wafer,u=l.base,f=l.utils,p=l.WaferBaseClass,d=f.bindEvent,h=f.unbindEvent,w=["drawerstate"],v=["click","transitionend"],y={"open-left":"wafer-drawer-open-left","open-right":"wafer-drawer-open-right",closed:"wafer-drawer-closed"},_=".drawer-swipeable",b=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:w})),i=e.querySelector(_),s=e.querySelector(".drawer-transition"),c=["swipeleft","swiperight"];if(!i||!s){var l;return l=void 0,a(r,l)}return r._util=o({},r._util,{drag:{endX:0,endY:0,overallDirectionX:0,startX:0,startY:0},stateClassMap:y,elem:e,events:c,swipeableElem:i,transitionElem:s}),v.forEach(function(e){r[e]=r[e].bind(r)}),r.addEventListeners(),r.setInitialState(),r}return i(t,e),s(t,[{key:"setInitialState",value:function(){var e=this._util.elem,t=e.getAttribute("data-wf-drawer-state")||"closed";e.classList.add(this._util.stateClassMap[t]||"wafer-drawer-closed"),this._state={drawerState:t,isTransitioning:!1}}},{key:"addEventListeners",value:function(){var e=this,r=this._util,n=(r.elem,r.events),a=r.transitionElem;0!==n.size&&(c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addEventListeners",this).call(this),n.forEach(function(t){a&&0===t.indexOf("swipe")&&d(a,"transitionend",e.transitionend)}))}},{key:"removeEventListeners",value:function(){var e=this._util.transitionElem;c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"removeEventListeners",this).call(this),h(e,"transitionend",this.transitionend)}},{key:"click",value:function(e){var t=e&&e.target&&e.target.getAttribute("data-wf-drawer-state");t&&(this._state.drawerState=t,this.processStateChange())}},{key:"touchstart",value:function(e){var t=this._util.drag,r=e.touches[0],n=r.clientY,a=r.pageX;t.startX=a,t.startY=n}},{key:"touchend",value:function(e){this.clearDrag()}},{key:"touchmove",value:function(e){var t=this._util.drag;t.endX=e.touches[0].pageX,t.endY=e.touches[0].clientY;var r=0;t.startX!==t.endX&&(r=t.startX>t.endX?1:-1),t.overallDirectionX=r,this.isValidSwipe()&&!this._state.isTransitioning&&(e.cancelable&&e.preventDefault(),this.triggerSwipe(),this.clearDrag(),this.touchstart(e))}},{key:"isValidSwipe",value:function(){var e=this._util,t=Math.abs(e.drag.startX-e.drag.endX);return t>30&&t>Math.abs(e.drag.startY-e.drag.endY)}},{key:"triggerSwipe",value:function(){var e=this._util;1===e.drag.overallDirectionX?this.swipeleft():-1===e.drag.overallDirectionX&&this.swiperight()}},{key:"swipeleft",value:function(){this.processTargets("swipeleft")}},{key:"swiperight",value:function(){this.processTargets("swiperight")}},{key:"clearDrag",value:function(){this._util.drag={endX:0,endY:0,overallDirectionX:0,startX:0,startY:0}}},{key:"transitionend",value:function(){this._state.isTransitioning=!1}},{key:"processTargets",value:function(e){var r=this._util,n=r.elem,a=r.events,i=!1,o=this._state.drawerState;if(n&&a&&a.includes(e)){if("swiperight"===e)switch(o){case"closed":this._state.drawerState="open-left";break;case"open-left":i=!0;break;case"open-right":this._state.drawerState="closed"}if("swipeleft"===e)switch(o){case"open-left":this._state.drawerState="closed";break;case"open-right":i=!0;break;case"closed":this._state.drawerState="open-right"}return u._emit({elem:n,meta:{eventName:e,elem:n,_state:this._state},name:t.name},"drawer:change"),!i&&this.processStateChange()}}},{key:"processStateChange",value:function(){var e=this._util,t=e.elem,r=e.stateClassMap,n=this._state.drawerState,a=r[n];n&&a&&(t.classList.contains(a)||(this._state.isTransitioning=!0),t.classList.add(a),Object.values(r).forEach(function(e){e!==a&&t.classList.remove(e)}))}},{key:"stateDidUpdate",value:function(){var e=this._util.drawerstate;this._state.drawerState=e,this.processStateChange()}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"destroy",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.removeEventListeners()}}]),t}(p);b.events={click:[["has-click","click"]],touchstart:[["drawer-swipeable","touchstart"]],touchmove:[["drawer-swipeable","touchmove"]],touchend:[["drawer-swipeable","touchend"]]},t.default=b,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return c=a(r("./src/base.js"))}function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,l=window.wafer.controllers.WaferBaseController,u=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,a=void 0===r?document:r,s=e.selector,l=void 0===s?".wafer-drawer":s;i(this,t);var u=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:a,selector:l,WaferClass:(c||n()).default}));return u.sync(),u}return s(t,e),t}(l);t.default=u,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a;t.default=new((a||function(){return a=n(r("./src/controller.js"))}()).default)({selector:".wafer-drawer"}),e.exports=t.default}})});