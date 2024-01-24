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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-geolocation",[],t):"object"==typeof exports?exports["wafer-geolocation"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-geolocation"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20220601001912/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),c=window.wafer,l=c.base,u=c.constants,f=c.WaferBaseClass,d=u.ATTR_PREFIX,p=["handleClick"],h="user.currentPreciseLocation",y=[""],g=function(e){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.selector;r(this,t);var s=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:a},{STATE_ATTRS:y,DEFAULT_STATE_KEY_TO_UPDATE:h})),c=e.getAttribute(d+"timeout"),l=e.getAttribute(d+"trigger")||"click",u=!1;return"eachClick"===l&&(u=!0),s._util=i({},s._util,{timeout:null===c||void 0===c?6e3:Number(c),elem:e,selector:a,shouldAlwaysTrigger:u,trigger:l}),s._state={fetchStatus:void 0},p.forEach(function(e){s[e]=s[e].bind(s)}),s}return a(t,e),s(t,[{key:"getLocation",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(t.disable,this._util),r=o.elem,n=o.timeout;return!o.shouldAlwaysTrigger&&r.classList.contains("wafer-geolocation-success")?Promise.resolve(!0):(r.classList.add("wafer-geolocation-inprogress"),new Promise(function(t,o){if(0===e._state.fetchStatus)return o(new Error("fetch in progress"));window.navigator.geolocation?(e._state.fetchStatus=0,window.navigator.geolocation.getCurrentPosition(function(o){var n=o.coords,a=n.latitude,i=n.longitude;e.didComplete(null,{latitude:"wf-state-reset",longitude:"wf-state-reset"}),setTimeout(function(){e.didComplete(null,{latitude:a,longitude:i})},1),e._state.fetchStatus=1,r.classList.remove("wafer-geolocation-inprogress"),r.classList.add("wafer-geolocation-success"),t(!0)},function(t){e._state.fetchStatus=2,r.classList.remove("wafer-geolocation-inprogress"),t.code===t.PERMISSION_DENIED?r.classList.add("wafer-geolocation-denied"):r.classList.add("wafer-geolocation-error"),l.emitError({name:"WaferGeolocation",elem:r,meta:{},stack:t.stack||t.message}),o(t)},{maximumAge:6e5,timeout:n})):(r.classList.remove("wafer-geolocation-inprogress"),e._state.fetchStatus=2,r.classList.add("wafer-geolocation-unsupported"),o(new Error("geolocation not supported")))}))}},{key:"stateDidUpdate",value:function(){}},{key:"handleClick",value:function(){this._util.elem.classList.contains("wafer-geolocation-denied")||this.getLocation().catch(function(){})}},{key:"config",get:function(){return{trigger:this._util.trigger}}}]),t}(f);g.events={click:[["has-geolocation-click","handleClick"]]},t.default=g,e.exports=t.default},"./src/controller.js":function(e,t,o){"use strict";function r(){return c=n(o("./src/base.js"))}function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),f=window.wafer.utils.throttle,d=window.wafer.controllers.WaferBaseController,p=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.root,n=void 0===o?document:o,s=e.selector,u=e.validateDelay,d=void 0===u?25:u;a(this,t);var p=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:n,selector:s,props:{selector:s},WaferClass:(c||r()).default}));return p._validateWithThrottle=f(function(){p.validate()},d,p),p._state=l({},p._state,{permissionStatus:"prompt"}),p.sync(),p.checkPermissions(),p}return s(t,e),u(t,[{key:"checkPermissions",value:function(){var e=this;if(window.navigator.permissions)try{window.navigator.permissions.query({name:"geolocation"}).then(function(t){var o=t.state,r=e;if("denied"===o){var n=e._state.elementInstances,a=!0,i=!1,s=void 0;try{for(var c,l=n.keys()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){c.value.classList.add("wafer-geolocation-denied")}}catch(e){i=!0,s=e}finally{try{!a&&l.return&&l.return()}finally{if(i)throw s}}}r._state.permissionState=o,t.onchange=function(){r._state.permissionState=this.state;var e=r._state.elementInstances;if("denied"===this.state){var t=!0,o=!1,n=void 0;try{for(var a,i=e.keys()[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){a.value.classList.add("wafer-geolocation-denied")}}catch(e){o=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(o)throw n}}}else{var s=!0,c=!1,l=void 0;try{for(var u,f=e.keys()[Symbol.iterator]();!(s=(u=f.next()).done);s=!0){u.value.classList.remove("wafer-geolocation-denied")}}catch(e){c=!0,l=e}finally{try{!s&&f.return&&f.return()}finally{if(c)throw l}}}}})}catch(e){}}},{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle()}},{key:"didSync",value:function(){var e=this._state,t=e.elementInstances,o=e.mounted;0===t.size||o||(this._state.mounted=!0)}},{key:"willValidate",value:function(e){if("denied"!==this._state.permissionStatus){var t=this._state.elementInstances;e.forEach(function(e){var o=t.get(e),r=o.instance;switch(r.config.trigger){case"onLoad":r.getLocation().then(function(e){e&&r.destroy()});break;case"click":case"eachClick":e.classList.add("has-geolocation-click","has-wafer-click")}})}}}]),t}(d);t.default=p,e.exports=t.default},"./src/entry.js":function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n;t.default=new((n||function(){return n=r(o("./src/controller.js"))}()).default)({selector:".wafer-geolocation"}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 00:19:12 Jun 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:29 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.117
  exclusion.robots.policy: 0.103
  cdx.remote: 0.137
  esindex: 0.01
  LoadShardBlock: 183.207 (6)
  PetaboxLoader3.datanode: 220.661 (8)
  load_resource: 207.343 (2)
  PetaboxLoader3.resolve: 63.67 (2)
*/