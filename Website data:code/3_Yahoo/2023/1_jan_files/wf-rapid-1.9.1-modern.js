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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-rapid",[],t):"object"==typeof exports?exports["wafer-rapid"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-rapid"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20230101041134/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var l=window.wafer.utils.get,f=null,d=null,p=function(e){return e&&(d=e),!f&&d&&(f=l(window,d))&&"function"!=typeof f.refreshModule&&(d=null,f=null),f},y=function(){var e=void 0;return function(t){if(!(e=e||window.rapidPageConfig))return!1;var r=e,n=r.rapidConfig,o=void 0===n?{}:n,i=o.tracked_mods_viewability;return!!i&&!!i[t]}}(),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=window.wafer,g=h.base,w=h.constants,_=h.utils,m=h.WaferBaseClass,k=_.getDataYlk,O=_.getYlkMapForNode,j=_.setTimeout,E=_.clearTimeout,T=w.ATTR_PREFIX,P=[],M=["handleClick","handleRapidMouseEnter","handleRapidMouseLeave"],C=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.selector;n(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:i},{STATE_ATTRS:P})),s=e.getAttribute(T+"rapid-trigger");if(!s)return o(a);"click"!==s&&"eachClick"!==s||e.classList.add("has-rapid-click","has-wafer-click");var u=e.getAttribute(T+"rapid-method"),c=e.getAttribute(T+"rapid-name"),l=e.getAttribute("data-rapid_p")||"1";return a._util=v({},a._util,{elem:e,name:c,pos:l,trigger:s,triggerMethod:u}),a._state=a._state||{},M.forEach(function(e){a[e]=a[e].bind(a)}),"onLoad"===s?(a._beaconTrigger(),a.destroy()):"mouseenter"===s&&(a._state.mouseEnterTimeout=null,a.addEventListeners()),a}return i(t,e),b(t,[{key:"_beaconTrigger",value:function(){var e=p();if(e){var t=this._util,r=t.elem,n=t.name,o=t.trigger,i=t.triggerMethod,a=t.pos,s=k(r);if("beaconClick"===i)e.beaconClick(s.sec,s.slk,a,s);else if("beaconEvent"===i){var u=this._util.elem;g.emitLog({name:"WaferRapid",elem:u,meta:{i13n:s,name:n,type:"beaconEvent"}}),e.beaconEvent(n,s)}else if("beaconLinkViews"===i)e.beaconLinkViews([v({},s,{_links:[s]})]);else if("pageView"===i){var c=O(r,"data-page-i13n"),l=s.spaceid,f=e.getRapidAttribute("keys");e.clearRapidAttribute(["keys"]),e.setRapidAttribute({keys:Object.assign({},f,c),spaceid:l||e.getRapidAttribute("spaceid")}),e.beaconPageview(c),"click"===o&&this.destroy()}}}},{key:"handleClick",value:function(){this._util.elem.classList.contains("has-rapid-click")&&this._beaconTrigger()}},{key:"handleRapidMouseEnter",value:function(){var e=this;this._destroyed||(E(this._state.mouseEnterTimeout,this),this._state.mouseEnterTimeout=j(function(){e._beaconTrigger()},100,this))}},{key:"handleRapidMouseLeave",value:function(){this._destroyed||E(this._state.mouseEnterTimeout,this)}}]),t}(m);C.events={click:[["has-rapid-click","handleClick"]],mouseenter:[["_self","handleRapidMouseEnter"]],mouseleave:[["_self","handleRapidMouseLeave"]]};var L=C,R=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),A=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},x=window.wafer.controllers.WaferBaseController,I=window.wafer.utils,W=I.getDataYlk,B=I.convertNodeListToArray,N=function(e){for(var t=e,r=void 0;t;)t.classList.contains("wafer-rapid-module")&&(r=t),t=t.parentElement;return r},S=function(e,t){var r=t.get(e);if(!r)return!1;var n=r.instance,o=n._util.trigger;if(!e.id&&o)return!1;if(!e.id)return!1;var i=p();if(!i)return!1;var a=W(e),s=a.id,u=!1;if(i.isModuleTracked(s)?y(s)||e.classList.contains("wafer-rapid-tracked")?i.refreshModule(s):(i.removeModule(s),u=!0):u=!0,u){var l=a.sec?c({},s,a.sec):[s];i.addModulesWithViewability(l)}return e.classList.add("wafer-rapid-tracked"),!0},V=function(e,t){var r=t.get(e);if(!r)return!1;var n=r.instance,o=n._util.trigger;if(!e.id&&o)return!1;if(!e.id&&!o)return!1;var i=p();if(!i)return!1;var a=W(e),s=a.id;return i.isModuleTracked(s)&&i.removeModule(s),e.classList.remove("wafer-rapid-tracked"),!0},D=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,n=void 0===r?document:r,o=e.selector,i=void 0===o?".wafer-rapid-module":o;a(this,t);var u=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:n,selector:i,props:{selector:i},WaferClass:L}));return p((document.body.getAttribute("data-wf-rapid")||"rapidInstance").split(".")),u.sync(),u}return u(t,e),R(t,[{key:"trigger",value:function(e){var t=this._state.elementInstances,r=t.get(e),n=r.instance;if(n){"scrollChange"===n._util.trigger&&(n._beaconTrigger(),n.destroy())}}},{key:"sync",value:function(e){if(A(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"sync",this).call(this,e),e){var r=this._state.elementInstances,n=N(e);if(n)return void S(n,r);var o=B(e.getElementsByClassName("wafer-rapid-module"));o.length>0&&Array.prototype.forEach.call(o,function(e){S(e,r)})}}},{key:"destroy",value:function(e){if(!e)return void A(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this);var r=this._state.elementInstances;e.classList.contains("wafer-rapid-module")&&V(e,r);var n=B(e.getElementsByClassName("wafer-rapid-module",r));n.length>0&&Array.prototype.forEach.call(n,function(e){V(e,r)}),A(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this,e)}}]),t}(x),F=D;t.default=new F}})});

}
/*
     FILE ARCHIVED ON 04:11:34 Jan 01, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:10 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.063
  cdx.remote: 0.101
  esindex: 0.014
  LoadShardBlock: 139.929 (6)
  PetaboxLoader3.datanode: 141.111 (8)
  load_resource: 179.557 (2)
  PetaboxLoader3.resolve: 84.865 (2)
*/