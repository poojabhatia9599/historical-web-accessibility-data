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

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-tooltip",[],e):"object"==typeof exports?exports["wafer-tooltip"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-tooltip"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var i=o[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://web.archive.org/web/20191001001018/https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/base.js":function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var o=[],r=!0,i=!1,n=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(o.push(a.value),!e||o.length!==e);r=!0);}catch(t){i=!0,n=t}finally{try{!r&&l.return&&l.return()}finally{if(i)throw n}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),a=window.wafer,l=a.constants,s=a.features,u=a.utils,c=l.ATTR_PREFIX,f=l.DISPLAY_BLOCK,d=l.DISPLAY_NONE,p=l.WAFER_DESTROYED,y="has-tooltip-click",h="wafer-tooltip",v="wafer-tooltip-wrapper",w="wafer-tooltip-text",g="wafer-tooltip-close",b=u.convertNodeListToArray,m=["handleTooltipClose"],_=1,S=0,T=3,O=[200,0],C=15,j="wafer-tooltip-template",E="top",k="",x="viewport",A=function(){function t(e){var o=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.selector,l=n.successClass;r(this,t),this._util={elem:e,selector:a.replace(".","")};var s=e.getAttribute(c+"local-storage-key");if(!s)return void this.teardown(c+"local-storage-key data attribute is mandatory for element with "+h+" class");var u=e.getAttribute(c+"max-display-count")||T,f=e.getAttribute(c+"reset-every")||C,p=e.getAttribute(c+"template-id")||j,A=e.getAttribute(c+"display-delay")||S,D=e.getAttribute(c+"tooltip-position")||E,L=e.getAttribute(c+"tooltip-text")||k,P=e.getAttribute(c+"trigger")||x,I=e.getAttribute(c+"trigger-offset"),W=I&&I.split(" ")||O,N=i(W,2),B=N[0],R=N[1],Y=e.getAttribute(c+"tooltip-discovered-count")||_;if(this._util.localStorageKey=s,this._util.maxDisplayCount=u,this._util.resetEvery=f,this._util.discoveredCount=Y,!this.isEligibleToShow)return void this.teardown("Tooltip is not eligible to be shown.");var M=document.getElementById(p);if(!M)return void this.teardown("Cannot find a template with id "+p);if(e.appendChild(M.content.cloneNode(!0)),"top"!==D&&"bottom"!==D)return void this.teardown(c+"tooltip-position must be 'top' or 'bottom'");var X=b(e.getElementsByClassName(v));if(!X.length)return void this.teardown("Cannot find an element with class "+v);var F=X[0];F.setAttribute("data-toolpos",D),F.style.display=d,this._util.divWrapper=F;var K=b(e.getElementsByClassName(w));if(!K.length)return void this.teardown("Cannot find an element with class "+w);K[0].innerHTML=L,this._util.closeButtonElms=b(e.getElementsByClassName(g)),e.classList.contains(g)&&this._util.closeButtonElms.push(e),this._util.closeButtonElms.length&&e.classList.add(y),e.classList.add(l),this._util.offsetX=Number(R),this._util.offsetY=Number(B),this._util.tooltipDisplayDelay=A,this._util.trigger=P,m.forEach(function(t){o[t]=o[t].bind(o)}),window.wafer.base.sync(e)}return n(t,[{key:"teardown",value:function(t){this._util.elem&&this._util.elem.classList.add(p),window.wafer.base.destroy(this._util.elem)}},{key:"destroy",value:function(){var t=this._util.elem;t&&t.classList.add(p),this._util={}}},{key:"showTooltip",value:function(){var t=this,e=this._util,o=e.divWrapper,r=e.tooltipDisplayDelay;if(this.isEligibleToShow&&o&&!this.isTooltipAlreadyVisible){this._util.timeoutId=setTimeout(function(){t._util.timeoutId=void 0,o.style.display=f},r);var i=this.getPreviousLocalState;i.lastDisplayCount++,this.writeToLocalStorage=i}}},{key:"hideTooltip",value:function(){var t=this._util.divWrapper;t&&(t.style.display=d)}},{key:"daysDifference",value:function(t,e){return Math.round((e-t)/864e5)}},{key:"handleTooltipClose",value:function(t){var e=t.target;if(-1!==this._util.closeButtonElms.indexOf(e)){this._util.divWrapper&&(this._util.divWrapper.style.display=d);var o=this.getPreviousLocalState;o.discovered++,this.writeToLocalStorage=o}}},{key:"config",get:function(){return{offsetX:this._util.offsetX,offsetY:this._util.offsetY,trigger:this._util.trigger}}},{key:"isTooltipAlreadyVisible",get:function(){var t=this._util,e=t.divWrapper,o=t.timeoutId;return e&&e.style.display===f||void 0!==o}},{key:"readFromLocalStorage",get:function(){var t=this._util.localStorageKey,e={};if(s.localStorage)try{e=JSON.parse(window.localStorage.getItem(t))||{}}catch(t){}return e}},{key:"writeToLocalStorage",set:function(t){var e=this._util.localStorageKey;if(s.localStorage)try{window.localStorage.setItem(e,JSON.stringify(t))}catch(t){}}},{key:"getPreviousLocalState",get:function(){var t=this.readFromLocalStorage;return t.discovered=t.discovered||0,t.lastResetDate=t.lastResetDate||Date.now(),t.lastDisplayCount=t.lastDisplayCount||0,t}},{key:"isEligibleToShow",get:function(){var t=this._util,e=t.discoveredCount,o=t.maxDisplayCount,r=t.resetEvery,i=this.getPreviousLocalState,n=i.discovered,a=i.lastDisplayCount,l=i.lastResetDate,s=Date.now(),u=this.daysDifference(l,s);return!(n>=e||u<r&&a>=o)}}]),t}();A.events={click:[["has-tooltip-click","handleTooltipClose"]]},e.default=A,t.exports=e.default},"./src/controller.js":function(t,e,o){"use strict";function r(){return s=i(o("./src/base.js"))}function i(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s,u=function(){function t(t,e){var o=[],r=!0,i=!1,n=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(o.push(a.value),!e||o.length!==e);r=!0);}catch(t){i=!0,n=t}finally{try{!r&&l.return&&l.return()}finally{if(i)throw n}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},f=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),d=window.wafer.utils,p=d.elementInView,y=d.throttle,h=window.wafer.base,v=window.wafer.controllers.WaferBaseController,w=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.root,i=void 0===o?document:o;n(this,e);var l=e.prototype.configs,u=l.selector,f=l.successClass,d=l.validateDelay,p=void 0===d?25:d,h=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:i,selector:u,props:{selector:u,successClass:f},WaferClass:(s||r()).default}));return h._options=c({},h._options,{defaultOffsetY:200,defaultOffsetX:0}),h._validateWithThrottle=y(function(){h.validate()},p,h),h.sync(),h}return l(e,t),f(e,[{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle()}},{key:"willValidate",value:function(){var t=this._state.elementInstances,e=!0,o=!1,r=void 0;try{for(var i,n=t.entries()[Symbol.iterator]();!(e=(i=n.next()).done);e=!0){var a=u(i.value,2),l=a[0],s=a[1],c=s.instance,f=c.config,d=f.trigger,y=f.offsetX,v=f.offsetY;switch(d){case"onLoad":c.renderTooltip();break;case"viewport":default:p(l,{offsetX:y,offsetY:v},h.viewport)?c.showTooltip():c.hideTooltip()}}}catch(t){o=!0,r=t}finally{try{!e&&n.return&&n.return()}finally{if(o)throw r}}}}]),e}(v);w.prototype.configs={selector:".wafer-tooltip",successClass:"wafer-tooltip-done"},e.default=w,t.exports=e.default},"./src/entry.js":function(t,e,o){"use strict";function r(){return n=i(o("./src/controller.js"))}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n;e.default=new((n||r()).default)({selector:(n||r()).default.prototype.configs.selector}),t.exports=e.default}})});

}
/*
     FILE ARCHIVED ON 00:10:18 Oct 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:27:45 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 110.925
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.075
  cdx.remote: 0.077
  esindex: 0.008
  LoadShardBlock: 62.088 (3)
  PetaboxLoader3.datanode: 90.351 (5)
  load_resource: 1013.225 (2)
  PetaboxLoader3.resolve: 54.219 (2)
*/