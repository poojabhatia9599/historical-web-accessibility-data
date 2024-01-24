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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-move",[],t):"object"==typeof exports?exports["wafer-move"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-move"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20221101005218/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=[],i=window.wafer,l=i.base,f=i.constants,p=i.utils,d=i.WaferBaseClass,y=p.findAncestor,b=f.ATTR_PREFIX,v=["handleClick"],h=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=r.selector,a=r.successClass;o(this,t);var i=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:s},{STATE_ATTRS:u})),l=e.getAttribute(b+"move-boundary"),f=e.getAttribute(b+"move-replace"),p=e.getAttribute(b+"move-source"),d=e.getAttribute(b+"move-target"),h=e.getAttribute(b+"move-trigger")||"onLoad",w=d&&(l&&y(e,l)||document.body).querySelector(d)||e,m=p&&(l&&y(e,l)||document.body).querySelector(p)||e;return v.forEach(function(e){i[e]=i[e].bind(i)}),i._util=c({},i._util,{elem:e,replace:null===f||void 0===f?0:Number(f),sourceElem:m,successClass:a,targetElem:w,trigger:h}),"onLoad"===h?i.trigger():"click"===h&&e.classList.add("has-move-click","has-wafer-click"),i}return s(t,e),a(t,[{key:"trigger",value:function(){var e=this._util,t=e.elem,r=e.replace,o=e.sourceElem,n=e.successClass,s=e.targetElem;if(r){var c=s.parentNode;l.destroy(s);var a=c.insertBefore(o,s);l.sync(a),c.removeChild(s)}else s.appendChild(o);this.destroy(),r||l.sync(s),t.classList.add(n)}},{key:"handleClick",value:function(e){e.preventDefault(),this.trigger()}}]),t}(d);h.events={click:[["has-move-click","handleClick"]]},t.default=h,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function o(){return u=n(r("./src/base.js"))}function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,i=window.wafer.controllers.WaferBaseController,l=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,n=void 0===r?document:r,a=e.selector,i=e.successClass,l=void 0===i?"wafer-move-complete":i;s(this,t);var f=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:n,selector:a,props:{selector:a,successClass:l},WaferClass:(u||o()).default}));return f.sync(),f}return a(t,e),t}(i);t.default=l,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n;t.default=new((n||function(){return n=o(r("./src/controller.js"))}()).default)({selector:"wafer-move"}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 00:52:18 Nov 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:44 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.159
  exclusion.robots.policy: 0.133
  cdx.remote: 0.208
  esindex: 0.024
  LoadShardBlock: 113.275 (6)
  PetaboxLoader3.datanode: 71.763 (7)
  load_resource: 70.688
  PetaboxLoader3.resolve: 40.416
*/