!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-tooltip",[],e):"object"==typeof exports?exports["wafer-tooltip"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-tooltip"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/base.js":function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var o=[],r=!0,i=!1,n=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(o.push(a.value),!e||o.length!==e);r=!0);}catch(t){i=!0,n=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw n}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},l=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),u=window.wafer,c=u.constants,f=u.features,p=u.utils,d=u.WaferBaseClass,y=c.ATTR_PREFIX,h=c.DISPLAY_BLOCK,v=c.DISPLAY_NONE,w=c.WAFER_DESTROYED,g="has-tooltip-click",b="wafer-tooltip",_="wafer-tooltip-wrapper",m="wafer-tooltip-text",T="wafer-tooltip-close",E=p.clearTimeout,O=p.convertNodeListToArray,S=p.setTimeout,j=["handleTooltipClose","handleTooltipMouseEnter"],C=1,D=0,k=3,L=[200,0],x=15,P="wafer-tooltip-template",A="top",R="",W="viewport",I=[],B=function(t){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.selector,l=o.successClass;r(this,e);var u=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{selector:n},{STATE_ATTRS:I}));u._util={elem:t,selector:n.replace(".","")},u._state=s({},u._state,{mouseEnterTimeout:null});var c=t.getAttribute(y+"local-storage-key");if(!c)return u.teardown(y+"local-storage-key data attribute is mandatory for element with "+b+" class"),i(u);var f=t.getAttribute(y+"max-display-count")||k,p=t.getAttribute(y+"reset-every")||x,d=t.getAttribute(y+"template-id")||P,h=t.getAttribute(y+"display-delay")||D,w=t.getAttribute(y+"tooltip-position")||A,E=t.getAttribute(y+"tooltip-text")||R,S=t.getAttribute(y+"trigger")||W,B=t.getAttribute(y+"trigger-offset"),M=B&&B.split(" ")||L,N=a(M,2),Y=N[0],X=N[1],F=t.getAttribute(y+"tooltip-discovered-count")||C;u._util.localStorageKey=c,u._util.maxDisplayCount=f,u._util.resetEvery=p,u._util.discoveredCount=F;var K=u.getPreviousLocalState;if(u.isResetEveryExceeded(K.lastResetDate)&&u.refreshLastResetDate(),!u.isEligibleToShow)return u.teardown("Tooltip is not eligible to be shown."),i(u);var V=document.getElementById(d);if(!V)return u.teardown("Cannot find a template with id "+d),i(u);if(t.appendChild(V.content.cloneNode(!0)),"top"!==w&&"bottom"!==w)return u.teardown(y+"tooltip-position must be 'top' or 'bottom'"),i(u);var J=O(t.getElementsByClassName(_));if(!J.length)return u.teardown("Cannot find an element with class "+_),i(u);var q=J[0];q.setAttribute("data-toolpos",w),q.style.display=v,u._util.divWrapper=q;var z=O(t.getElementsByClassName(m));return z.length?(z[0].innerHTML=E,u._util.closeButtonElms=O(t.getElementsByClassName(T)),t.classList.contains(T)&&u._util.closeButtonElms.push(t),u._util.closeButtonElms.length&&t.classList.add(g),t.classList.add(l),u._util.offsetX=Number(X),u._util.offsetY=Number(Y),u._util.tooltipDisplayDelay=h,u._util.trigger=S,j.forEach(function(t){u[t]=u[t].bind(u)}),"mouseenter"===S&&u.addEventListeners(),window.wafer.base.sync(t),u):(u.teardown("Cannot find an element with class "+m),i(u))}return n(e,t),l(e,[{key:"teardown",value:function(t){this._util.elem&&this._util.elem.classList.add(w),window.wafer.base.destroy(this._util.elem)}},{key:"destroy",value:function(){var t=this._util.elem;t&&t.classList.add(w),this._util={}}},{key:"showTooltip",value:function(){var t=this,e=this._util,o=e.divWrapper,r=e.tooltipDisplayDelay;if(this.isEligibleToShow&&o&&!this.isTooltipAlreadyVisible){this._util.timeoutId=S(function(){t._util.timeoutId=void 0,o.style.display=h},r);var i=this.getPreviousLocalState;i.lastDisplayCount++,this.writeToLocalStorage=i}}},{key:"hideTooltip",value:function(){var t=this._util.divWrapper;t&&(t.style.display=v)}},{key:"daysDifference",value:function(t,e){return Math.floor((e-t)/864e5)}},{key:"isResetEveryExceeded",value:function(t){var e=this._util.resetEvery,o=Date.now();return this.daysDifference(t,o)>=e}},{key:"refreshLastResetDate",value:function(){var t=this.getPreviousLocalState;t.lastResetDate=Date.now(),t.lastDisplayCount=0,t.discovered=0,this.writeToLocalStorage=t}},{key:"handleTooltipClose",value:function(t){var e=t.target;if(-1!==this._util.closeButtonElms.indexOf(e)){this._util.divWrapper&&(this._util.divWrapper.style.display=v);var o=this.getPreviousLocalState;o.discovered++,this.writeToLocalStorage=o}}},{key:"handleTooltipMouseEnter",value:function(){var t=this;this._state.mouseEnterTimeout&&E(this._state.mouseEnterTimeout,this),this._state.mouseEnterTimeout=S(function(){t.showTooltip()},0,this)}},{key:"config",get:function(){return{offsetX:this._util.offsetX,offsetY:this._util.offsetY,trigger:this._util.trigger}}},{key:"isTooltipAlreadyVisible",get:function(){var t=this._util,e=t.divWrapper,o=t.timeoutId;return e&&e.style.display===h||void 0!==o}},{key:"readFromLocalStorage",get:function(){var t=this._util.localStorageKey,e={};if(f.localStorage)try{e=JSON.parse(window.localStorage.getItem(t))||{}}catch(t){}return e}},{key:"writeToLocalStorage",set:function(t){var e=this._util.localStorageKey;if(f.localStorage)try{window.localStorage.setItem(e,JSON.stringify(t))}catch(t){}}},{key:"getPreviousLocalState",get:function(){var t=this.readFromLocalStorage;return t.discovered=t.discovered||0,t.lastResetDate=t.lastResetDate||Date.now(),t.lastDisplayCount=t.lastDisplayCount||0,t}},{key:"isEligibleToShow",get:function(){var t=this._util,e=t.discoveredCount,o=t.maxDisplayCount,r=this.getPreviousLocalState,i=r.discovered,n=r.lastDisplayCount,a=r.lastResetDate;return!(i>=e||!this.isResetEveryExceeded(a)&&n>=o)}}]),e}(d);B.events={click:[["has-tooltip-click","handleTooltipClose"]],mouseenter:[["_self","handleTooltipMouseEnter"]]},e.default=B,t.exports=e.default},"./src/controller.js":function(t,e,o){"use strict";function r(){return l=i(o("./src/base.js"))}function i(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l,u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},c=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),f=window.wafer.utils,p=f.elementInView,d=f.throttle,y=window.wafer.base,h=window.wafer.controllers.WaferBaseController,v=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.root,i=void 0===o?document:o;n(this,e);var s=e.prototype.configs,c=s.selector,f=s.successClass,p=s.validateDelay,y=void 0===p?25:p,h=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:i,selector:c,props:{selector:c,successClass:f},WaferClass:(l||r()).default}));return h._options=u({},h._options,{defaultOffsetY:200,defaultOffsetX:0}),h._validateWithThrottle=d(function(){h.validate()},y,h),h.sync(),h}return s(e,t),c(e,[{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle()}},{key:"willValidate",value:function(t){var e=this._state.elementInstances;t.forEach(function(t){var o=e.get(t),r=o.instance,i=r.config,n=i.trigger,a=i.offsetX,s=i.offsetY;switch(n){case"mouseenter":break;case"onLoad":r.showTooltip();break;case"viewport":default:p(t,{offsetX:a,offsetY:s},y.viewport)?r.showTooltip():r.hideTooltip()}})}}]),e}(h);v.prototype.configs={selector:".wafer-tooltip",successClass:"wafer-tooltip-done"},e.default=v,t.exports=e.default},"./src/entry.js":function(t,e,o){"use strict";function r(){return n=i(o("./src/controller.js"))}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n;e.default=new((n||r()).default)({selector:(n||r()).default.prototype.configs.selector}),t.exports=e.default}})});