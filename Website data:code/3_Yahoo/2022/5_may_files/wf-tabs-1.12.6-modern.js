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

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-tabs",[],e):"object"==typeof exports?exports["wafer-tabs"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-tabs"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(a[i])return a[i].exports;var o=a[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://web.archive.org/web/20220430234656/https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/entry.js":function(t,e,a){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){var a=[],i=!0,o=!1,s=void 0;try{for(var r,n=t[Symbol.iterator]();!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){o=!0,s=t}finally{try{!i&&n.return&&n.return()}finally{if(o)throw s}}return a}return function(e,a){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),h=function t(e,a,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,a);if(void 0===o){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,a,i)}if("value"in o)return o.value;var r=o.get;if(void 0!==r)return r.call(i)},f=window.wafer,v=f.base,d=f.constants,b=f.utils,p=f.WaferBaseClass,g=b.bindEvent,y=b.clearTimeout,m=b.convertNodeListToArray,w=b.findAncestor,T=b.setTimeout,_=b.unbindEvent,E=d.ATTR_PREFIX,A=["handleKeyDown","handleTargetFocusIn","handleTargetFocusOut","handleTargetMouseLeave","handleTargetMouseOver","tabChange","tabClick","tabFocusIn","tabMouseOver"],O=function(t){function e(t){i(this,e);for(var a,s=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{},{})),r=t.getAttribute(E+"active-class")||"wafer-tab-active",n=t.getAttribute(E+"trigger-active-class")||"active",u=t.getAttribute(E+"inactive-class"),c=Number(t.getAttribute(E+"scroll-restore"))||0,h=t.hasAttribute(E+"collapsable"),f=t.hasAttribute(E+"handle-hover"),v=t.hasAttribute(E+"handle-focus"),d=t.hasAttribute(E+"tabs-allowdefault"),b=t.hasAttribute(E+"disable-focus"),p=t.hasAttribute(E+"aria"),g=Number(t.getAttribute(E+"auto-switch"))||0,y=Number(t.getAttribute(E+"auto-switch-timeout"))||2e3,T=Number(t.getAttribute(E+"auto-switch-rotation-interval"))||0,_=Number(t.getAttribute(E+"active-index"))||(h?null:0),O=w(t,t.getAttribute(E+"boundary"))||document.body,S=t.getAttribute(E+"target"),k=t.getAttribute("aria-orientation"),C="vertical"===k,x=[],F=0,j=t.getElementsByClassName("tab");a=j[F];++F)x.push({tabElem:a,hasTrigger:"tabActivate"===a.getAttribute(E+"trigger")});var L=m(O.getElementsByClassName(S)),I=l(L,1),P=I[0],D=P&&P.children,H=D&&m(D),M=H&&H.length!==x.length,N=s._util={activeClass:r,autoSwitchRotationInterval:T,autoSwitchTimeout:y,boundary:O,elem:t,inactiveClass:u,isCollapsable:h,singleTabpanel:M,shouldAllowDefault:d,shouldAutoSwitch:g,shouldDisableFocus:b,shouldHandleFocus:v,shouldHandleHover:f,shouldScrollRestore:c,shouldUseAria:p,tabsElems:x,targetElem:P,triggerActiveClass:n,targetElems:H,verticalTabs:C};if(P&&P.classList.add("wafer-tabs-target"),s._state={activeIndex:0,activeTabElem:null,tabsTopStyleInPixel:0},c&&(s._state.scrollPositions=s._state.scrollPositions||{},s._state.tabsTopStyleInPixel=parseInt(window.getComputedStyle(t).top)||0),null!==_){s._state.activeIndex=_;var R=N.tabsElems[_];R&&s.activateTab(R.tabElem,{skipScroll:!0,useTrigger:!1})}return A.forEach(function(t){s[t]=s[t].bind(s)}),g&&s.setTimeoutForTabChange(),s.addEventListeners(),s}return s(e,t),c(e,[{key:"addEventListeners",value:function(){var t=this._util,a=t.shouldAutoSwitch,i=t.targetElem;a&&(g(i,"focusin",this.handleTargetFocusIn,{passive:!1}),g(i,"focusout",this.handleTargetFocusOut,{passive:!1}),g(i,"mouseleave",this.handleTargetMouseLeave,{passive:!1}),g(i,"mouseover",this.handleTargetMouseOver,{passive:!1})),h(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"addEventListeners",this).call(this)}},{key:"removeEventListeners",value:function(){var t=this._util,a=t.shouldAutoSwitch,i=t.targetElem;a&&(_(i,"focusin",this.handleTargetFocusIn,{passive:!1}),_(i,"focusout",this.handleTargetFocusOut,{passive:!1}),_(i,"mouseleave",this.handleTargetMouseLeave,{passive:!1}),_(i,"mouseover",this.handleTargetMouseOver,{passive:!1})),h(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"removeEventListeners",this).call(this)}},{key:"setTimeoutForTabChange",value:function(){var t=this,e=this._util.autoSwitchTimeout,a=this._util.autoSwitchRotationInterval;a&&this._util.switchTabTimeout&&(e=a),this.pauseSwitching(),this._util.switchTabTimeout=T(function(){t.switchTab("next"),t.setTimeoutForTabChange()},e,this)}},{key:"switchTab",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.focus,i=void 0!==a&&a,o=this._util.tabsElems,s=this._state.activeIndex,r="next"===t?s+1:s-1;s===o.length-1&&"next"===t?this.activateTab(o[0].tabElem,{focus:i,force:!0}):0===s&&"prev"===t?this.activateTab(o[o.length-1].tabElem,{focus:i,force:!0}):this.activateTab(o[r].tabElem,{focus:i,force:!0})}},{key:"handleKeyDown",value:function(t){t=t||window.event;var e=this._util.verticalTabs;switch(t.keyCode){case 37:this.switchTab("prev",{focus:!0});break;case 38:e&&(t.preventDefault(),this.switchTab("prev",{focus:!0}));break;case 39:this.switchTab("next",{focus:!0});break;case 40:e&&(t.preventDefault(),this.switchTab("next",{focus:!0}))}}},{key:"pauseSwitching",value:function(){this._util.switchTabTimeout&&y(this._util.switchTabTimeout,this)}},{key:"activateTab",value:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.focus,o=void 0!==i&&i,s=a.force,r=void 0!==s&&s,n=a.skipScroll,u=void 0!==n&&n,c=a.useTrigger,h=void 0===c||c,f=this._state.activeTabElem,d=this._util.triggerActiveClass;if(!r&&t===f)return void t.classList.add(d);var b=!1,p=t.classList.contains("wafer-fetch")&&t||t.getElementsByClassName("wafer-fetch")[0],g=this._util,y=g.activeClass,m=g.boundary,w=g.elem,_=g.inactiveClass,E=g.singleTabpanel,A=g.shouldAutoSwitch,O=g.shouldScrollRestore,S=g.shouldUseAria,k=g.tabsElems,C=g.targetElems,x=this._state,F=x.activeIndex,j=x.tabsTopStyleInPixel;b=p&&!p.classList.contains("wafer-fetch-complete"),A&&this.pauseSwitching();var L=0,I=0;if(O){var P=window.pageYOffset||document.documentElement.scrollTop,D=window.pageXOffset||document.documentElement.scrollLeft,H=m.getBoundingClientRect(),M=H.top,N=H.left;L=M+P-j,I=N+D,M>j?u=!0:this._state.scrollPositions[F]={top:P,lef:D}}if(b){var R=C||[],U=l(R,1),B=U[0];if(B){var K=B.parentNode;K&&K.style&&(K.style.minHeight="",K.style.minHeight=K.offsetHeight+"px")}}k.forEach(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=a.tabElem,s=a.hasTrigger,r=arguments[1],n=void 0;if(n=E?C&&C[0]:C&&C[r],i===t){if(i.classList.add(d),i.setAttribute("aria-selected",!0),S&&(i.setAttribute("tabindex",0),o&&i.focus({preventScroll:!0})),e._state.activeIndex=r,e._state.activeTabElem=i,n){if(O&&!u){var l=e._state||{},c=l.scrollPositions,f=void 0===c?{}:c,b=f[r]||{},p=b.top,g=void 0===p?L:p,m=b.left,A=void 0===m?I:m;T(function(){window.scrollTo(A,g)},2)}_&&n.classList.remove(_),n.classList.add(y),n.setAttribute("aria-hidden",!1),S&&n.removeAttribute("hidden"),v.unlock(i),v.sync(n),v.syncUI(n),h&&s&&v.trigger(i),v.emitWaferEvent("tab:selected",{elem:w,meta:{tabElem:i,targetElem:n}})}}else v.lock(i),i.classList.remove(d),i.setAttribute("aria-selected",!1),S&&(n&&n.removeAttribute("hidden"),i.setAttribute("tabindex",-1)),n&&!E&&(n.classList.remove(y),_&&n.classList.add(_),n.setAttribute("aria-hidden",!0),S&&(n.setAttribute("hidden","hidden"),n.setAttribute("tabindex",-1)))})}},{key:"focusActiveTab",value:function(){var t=this._util,e=t.singleTabpanel,a=t.shouldDisableFocus,i=t.targetElems,o=void 0;(o=e?i&&i[0]:i&&i[this._state.activeIndex])&&!a&&(o.setAttribute("tabIndex",-1),o.focus({preventScroll:!0}))}},{key:"deactivateTab",value:function(t){var e=this,a=this._util,i=a.activeClass,o=a.inactiveClass,s=a.tabsElems,r=a.targetElems,n=a.triggerActiveClass;this._state.activeTabElem=null,s.some(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=a.tabElem,u=arguments[1],l=r&&r[u];if(s===t)return s.classList.remove(n),s.setAttribute("aria-selected",!1),l&&(l.classList.remove(i),o&&l.classList.add(o),l.setAttribute("aria-hidden",!0)),e._state.activeIndex=0,!0})}},{key:"tabClick",value:function(t){!this._util.shouldAllowDefault&&t.preventDefault(),this.activateTab(t.eventTarget),this.focusActiveTab()}},{key:"handleTargetFocusIn",value:function(t){this._util.shouldAutoSwitch&&this.pauseSwitching()}},{key:"tabFocusIn",value:function(t){var e=this._util,a=e.shouldHandleFocus,i=e.focusOutTimeout;a&&(i&&y(i,this),this.activateTab(t.currentTarget))}},{key:"focusIn",value:function(t){this._util.shouldUseAria&&g(document,"keydown",this.handleKeyDown)}},{key:"handleTargetFocusOut",value:function(t){this._util.shouldAutoSwitch&&this.setTimeoutForTabChange()}},{key:"focusOut",value:function(){var t=this,e=this._util,a=e.shouldHandleFocus,i=e.shouldUseAria,o=this._state.activeTabElem;o&&a&&(this._util.focusOutTimeout=T(function(){t.deactivateTab(o)},1,this)),i&&_(document,"keydown",this.handleKeyDown)}},{key:"handleTargetMouseOver",value:function(t){this._util.shouldAutoSwitch&&this.pauseSwitching()}},{key:"tabMouseOver",value:function(t){var e=this._util,a=e.shouldAutoSwitch,i=e.shouldHandleHover;a&&this.pauseSwitching(),i&&this.activateTab(t.currentTarget)}},{key:"handleTargetMouseLeave",value:function(t){this._util.shouldAutoSwitch&&this.setTimeoutForTabChange()}},{key:"mouseover",value:function(){this._util.shouldAutoSwitch&&this.pauseSwitching()}},{key:"mouseleave",value:function(){var t=this._util,e=t.shouldAutoSwitch,a=t.shouldHandleHover,i=t.isCollapsable,o=this._state.activeTabElem;e&&this.setTimeoutForTabChange(),a&&i&&o&&this.deactivateTab(o)}},{key:"tabChange",value:function(t){t.preventDefault();var e=t.eventTarget.selectedIndex||0;this.activateTab(t.eventTarget.options[e])}},{key:"destroy",value:function(){this.pauseSwitching(),this.removeEventListeners(),h(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"config",get:function(){return{shouldAutoSwitch:this._util.shouldAutoSwitch}}}]),e}(p);O.events={change:[["tabs","tabChange"]],click:[["tab","tabClick"]],focusin:[["tab","tabFocusIn"],["_self","focusIn"]],focusout:[["_self","focusOut"]],mouseleave:[["_self","mouseleave"]],mouseover:[["tab","tabMouseOver"],["_self","mouseover"]]};var S=O,k=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),C=function t(e,a,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,a);if(void 0===o){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,a,i)}if("value"in o)return o.value;var r=o.get;if(void 0!==r)return r.call(i)},x=window.wafer,F=x.controllers,j=x.utils,L=j.findAncestor,I=F.WaferBaseController,P=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.root,i=void 0===a?document:a,o=t.selector,s=void 0===o?".wafer-tabs":o;r(this,e);var u=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:i,selector:s,WaferClass:S}));return u.sync(),u.handleFetchSuccessEvent=u.handleFetchSuccessEvent.bind(u),u.handleErrorEvent=u.handleErrorEvent.bind(u),u.addEventListeners(),u}return u(e,t),k(e,[{key:"handleTabTargetFetchUpdate",value:function(t){var e=t.elem;if(e&&"tab"===e.getAttribute("role")){var a=t.meta.targetElem||e,i=L(a,"wafer-tabs-target");i&&i.style&&(i.style.minHeight="")}}},{key:"handleFetchSuccessEvent",value:function(t){this.handleTabTargetFetchUpdate(t)}},{key:"handleErrorEvent",value:function(t){"wafer-fetch"===t.name&&this.handleTabTargetFetchUpdate(t)}},{key:"addEventListeners",value:function(){var t=this;window.wafer.ready(function(){window.wafer.on("fetch:success",t.handleFetchSuccessEvent),window.wafer.on("error",t.handleErrorEvent)}),C(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"addEventListeners",this)&&C(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"addEventListeners",this).call(this)}},{key:"handleVisibilityChange",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this._state.elementInstances,a=!0,i=!1,o=void 0;try{for(var s,r=e.values()[Symbol.iterator]();!(a=(s=r.next()).done);a=!0){var n=s.value,u=n.instance;u.config.shouldAutoSwitch&&(t?u.setTimeoutForTabChange():u.pauseSwitching())}}catch(t){i=!0,o=t}finally{try{!a&&r.return&&r.return()}finally{if(i)throw o}}}}]),e}(I),D=P;e.default=new D({selector:".wafer-tabs"})}})});

}
/*
     FILE ARCHIVED ON 23:46:56 Apr 30, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:36 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.112
  exclusion.robots.policy: 0.099
  cdx.remote: 0.154
  esindex: 0.013
  LoadShardBlock: 296.378 (6)
  PetaboxLoader3.datanode: 217.9 (7)
  load_resource: 87.163
  PetaboxLoader3.resolve: 53.885
*/