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

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-tabs",[],e):"object"==typeof exports?exports["wafer-tabs"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-tabs"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(a[o])return a[o].exports;var i=a[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,o){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://web.archive.org/web/20191101005100/https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/base.js":function(t,e,a){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var a=[],o=!0,i=!1,s=void 0;try{for(var r,n=t[Symbol.iterator]();!(o=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(t){i=!0,s=t}finally{try{!o&&n.return&&n.return()}finally{if(i)throw s}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),u=function t(e,a,o){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,a);if(void 0===i){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,a,o)}if("value"in i)return i.value;var r=i.get;if(void 0!==r)return r.call(o)},l=window.wafer,c=l.base,f=l.constants,h=l.utils,v=l.WaferBaseClass,d=h.bindEvent,b=h.clearTimeout,p=h.convertNodeListToArray,m=h.findAncestor,g=h.setTimeout,y=h.unbindEvent,w=f.ATTR_PREFIX,T=["handleTargetFocusIn","handleTargetFocusOut","handleTargetMouseLeave","handleTargetMouseOver","tabChange","tabClick","tabFocusIn","tabFocusOut","tabMouseLeave","tabMouseOver"],_=function(t){function e(t){o(this,e);for(var a,s=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{},{})),n=t.getAttribute(w+"active-class")||"wafer-tab-active",u=t.getAttribute(w+"inactive-class"),l=Number(t.getAttribute(w+"scroll-restore"))||0,c=t.hasAttribute(w+"collapsable"),f=t.hasAttribute(w+"handle-hover"),h=t.hasAttribute(w+"handle-focus"),v=t.hasAttribute(w+"tabs-allowdefault"),d=Number(t.getAttribute(w+"auto-switch"))||0,b=Number(t.getAttribute(w+"auto-switch-timeout"))||2e3,g=Number(t.getAttribute(w+"active-index"))||(c?null:0),y=m(t,t.getAttribute(w+"boundary"))||document.body,_=t.getAttribute(w+"target"),O=[],E=0,A=t.getElementsByClassName("tab");a=A[E];++E)O.push({tabElem:a,hasTrigger:"tabActivate"===a.getAttribute(w+"trigger")});var S=p(y.getElementsByClassName(_)),j=r(S,1),C=j[0],k=C&&C.children,F=s._util={activeClass:n,autoSwitchTimeout:b,elem:t,inactiveClass:u,isCollapsable:c,shouldAllowDefault:v,shouldAutoSwitch:d,shouldHandleFocus:h,shouldHandleHover:f,shouldScrollRestore:l,tabsElems:O,targetElem:C,targetElems:k&&p(k)};if(s._state={activeIndex:0,activeTabElem:null},l&&(s._state.scrollPositions=s._state.scrollPositions||{},s._util.tabsElems.forEach(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(t.tabElem,arguments[1]);s._state.scrollPositions[e]={top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft}})),null!==g){s._state.activeIndex=g;var x=F.tabsElems[g];x&&s.activateTab(x.tabElem,!0)}return T.forEach(function(t){s[t]=s[t].bind(s)}),d&&s.setTimeoutForTabChange(),s.addEventListeners(),s}return s(e,t),n(e,[{key:"addEventListeners",value:function(){var t=this._util,a=t.shouldAutoSwitch,o=t.targetElem;a&&(d(o,"focusin",this.handleTargetFocusIn,{passive:!1}),d(o,"focusout",this.handleTargetFocusOut,{passive:!1}),d(o,"mouseleave",this.handleTargetMouseLeave,{passive:!1}),d(o,"mouseover",this.handleTargetMouseOver,{passive:!1})),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"addEventListeners",this).call(this)}},{key:"removeEventListeners",value:function(){var t=this._util,a=t.shouldAutoSwitch,o=t.targetElem;a&&(y(o,"focusin",this.handleTargetFocusIn,{passive:!1}),y(o,"focusout",this.handleTargetFocusOut,{passive:!1}),y(o,"mouseleave",this.handleTargetMouseLeave,{passive:!1}),y(o,"mouseover",this.handleTargetMouseOver,{passive:!1})),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"removeEventListeners",this).call(this)}},{key:"setTimeoutForTabChange",value:function(){var t=this,e=this._util.autoSwitchTimeout;this.pauseSwitching(),this._util.switchTabTimeout=g(function(){t.switchToNextTab(),t.setTimeoutForTabChange()},e,this)}},{key:"switchToNextTab",value:function(){var t=this._util.tabsElems,e=this._state.activeIndex;e===t.length-1?this.activateTab(t[0].tabElem,!0):this.activateTab(t[e+1].tabElem,!0)}},{key:"pauseSwitching",value:function(){this._util.switchTabTimeout&&b(this._util.switchTabTimeout,this)}},{key:"activateTab",value:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this._state.activeTabElem;if(!a&&t===o)return void t.classList.add("active");var i=this._util,s=i.activeClass,r=i.elem,n=i.inactiveClass,u=i.shouldAutoSwitch,l=i.shouldScrollRestore,f=i.tabsElems,h=i.targetElems,v=this._state.activeIndex;u&&this.pauseSwitching(),l&&(this._state.scrollPositions[v]={top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft}),f.forEach(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=a.tabElem,i=a.hasTrigger,u=arguments[1],f=h&&h[u];if(o===t){if(o.classList.add("active"),o.setAttribute("aria-selected",!0),e._state.activeIndex=u,e._state.activeTabElem=o,f){if(l){var v=e._state||{},d=v.scrollPositions,b=void 0===d?{}:d,p=b[u]||{},m=p.top,y=p.left;g(function(){window.scrollTo(y,m)},2)}n&&f.classList.remove(n),f.classList.add(s),f.setAttribute("aria-hidden",!1),c.sync(f),c.syncUI(f),i&&c.trigger(o),c.emitWaferEvent("tab:selected",{elem:r,meta:{targetElem:f}})}}else o.classList.remove("active"),o.setAttribute("aria-selected",!1),f&&(f.classList.remove(s),n&&f.classList.add(n),f.setAttribute("aria-hidden",!0))})}},{key:"deactivateTab",value:function(t){var e=this,a=this._util,o=a.activeClass,i=a.inactiveClass,s=a.tabsElems,r=a.targetElems;s.some(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=a.tabElem,n=arguments[1],u=r&&r[n];if(s===t)return s.classList.remove("active"),s.setAttribute("aria-selected",!1),u&&(u.classList.remove(o),i&&u.classList.add(i),u.setAttribute("aria-hidden",!0)),e._state.activeIndex=0,!0})}},{key:"tabClick",value:function(t){!this._util.shouldAllowDefault&&t.preventDefault(),this.activateTab(t.eventTarget)}},{key:"handleTargetFocusIn",value:function(t){this._util.shouldAutoSwitch&&this.pauseSwitching()}},{key:"tabFocusIn",value:function(t){var e=this._util,a=e.shouldHandleFocus,o=e.focusOutTimeout;a&&(o&&b(o,this),this.activateTab(t.currentTarget))}},{key:"handleTargetFocusOut",value:function(t){this._util.shouldAutoSwitch&&this.setTimeoutForTabChange()}},{key:"tabFocusOut",value:function(t){var e=this,a=this._util.shouldHandleFocus,o=t.currentTarget;a&&(this._util.focusOutTimeout=g(function(){e.deactivateTab(o)},1,this))}},{key:"handleTargetMouseOver",value:function(t){this._util.shouldAutoSwitch&&this.pauseSwitching()}},{key:"tabMouseOver",value:function(t){var e=this._util,a=e.shouldAutoSwitch,o=e.shouldHandleHover;a&&this.pauseSwitching(),o&&this.activateTab(t.currentTarget)}},{key:"handleTargetMouseLeave",value:function(t){this._util.shouldAutoSwitch&&this.setTimeoutForTabChange()}},{key:"tabMouseLeave",value:function(t){var e=this._util,a=e.shouldAutoSwitch,o=e.shouldHandleHover;a&&this.setTimeoutForTabChange(),o&&this.deactivateTab(t.currentTarget)}},{key:"mouseover",value:function(){this._util.shouldAutoSwitch&&this.pauseSwitching()}},{key:"mouseleave",value:function(){this._util.shouldAutoSwitch&&this.setTimeoutForTabChange()}},{key:"tabChange",value:function(t){t.preventDefault();var e=t.eventTarget.selectedIndex||0;this.activateTab(t.eventTarget.options[e])}},{key:"destroy",value:function(){this.pauseSwitching(),this.removeEventListeners(),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"config",get:function(){return{shouldAutoSwitch:this._util.shouldAutoSwitch}}}]),e}(v);_.events={change:[["tabs","tabChange"]],click:[["tab","tabClick"]],focusin:[["tab","tabFocusIn"]],focusout:[["tab","tabFocusOut"]],mouseleave:[["tab","tabMouseLeave"],["_self","mouseleave"]],mouseover:[["tab","tabMouseOver"],["_self","mouseover"]]},e.default=_,t.exports=e.default},"./src/controller.js":function(t,e,a){"use strict";function o(){return u=i(a("./src/base.js"))}function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u,l=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),c=window.wafer.controllers.WaferBaseController,f=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.root,i=void 0===a?document:a,n=t.selector,l=void 0===n?".wafer-tabs":n;s(this,e);var c=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:i,selector:l,WaferClass:(u||o()).default}));return c.sync(),c}return n(e,t),l(e,[{key:"handleVisibilityChange",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this._state.elementInstances,a=!0,o=!1,i=void 0;try{for(var s,r=e.values()[Symbol.iterator]();!(a=(s=r.next()).done);a=!0){var n=s.value,u=n.instance;u.config.shouldAutoSwitch&&(t?u.setTimeoutForTabChange():u.pauseSwitching())}}catch(t){o=!0,i=t}finally{try{!a&&r.return&&r.return()}finally{if(o)throw i}}}}]),e}(c);e.default=f,t.exports=e.default},"./src/entry.js":function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i;e.default=new((i||function(){return i=o(a("./src/controller.js"))}()).default)({selector:".wafer-tabs"}),t.exports=e.default}})});

}
/*
     FILE ARCHIVED ON 00:51:00 Nov 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:27:33 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 498.39
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.061
  cdx.remote: 0.058
  esindex: 0.011
  LoadShardBlock: 49.057 (3)
  PetaboxLoader3.datanode: 67.041 (4)
  load_resource: 1096.921
  PetaboxLoader3.resolve: 1062.982
*/