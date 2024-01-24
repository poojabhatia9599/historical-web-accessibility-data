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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-move",[],t):"object"==typeof exports?exports["wafer-move"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-move"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20230101040743/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),f=[],p=window.wafer,d=p.base,y=p.constants,b=p.utils,v=p.WaferBaseClass,h=b.findAncestor,w=y.ATTR_PREFIX,m=["handleClick"],g=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=r.selector,s=r.successClass;o(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:c},{STATE_ATTRS:f})),i=e.getAttribute(w+"move-boundary"),u=e.getAttribute(w+"move-replace"),p=e.getAttribute(w+"move-source"),d=e.getAttribute(w+"move-target"),y=e.getAttribute(w+"move-trigger")||"onLoad",b=d&&(i&&h(e,i)||document.body).querySelector(d)||e,v=p&&(i&&h(e,i)||document.body).querySelector(p)||e;return m.forEach(function(e){a[e]=a[e].bind(a)}),a._util=l({},a._util,{elem:e,replace:null===u||void 0===u?0:Number(u),sourceElem:v,successClass:s,targetElem:b,trigger:y}),"onLoad"===y?a.trigger():"click"===y&&e.classList.add("has-move-click","has-wafer-click"),a}return c(t,e),u(t,[{key:"trigger",value:function(){var e=this._util,t=e.elem,r=e.replace,o=e.sourceElem,n=e.successClass,c=e.targetElem;if(r){var s=c.parentNode;d.destroy(c);var a=s.insertBefore(o,c);d.sync(a),s.removeChild(c)}else c.appendChild(o);this.destroy(),r||d.sync(c),t.classList.add(n)}},{key:"handleClick",value:function(e){e.preventDefault(),this.trigger()}}]),t}(v);g.events={click:[["has-move-click","handleClick"]]};var _=g,O=window.wafer.controllers.WaferBaseController,j=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,o=void 0===r?document:r,n=e.selector,c=e.successClass,i=void 0===c?"wafer-move-complete":c;s(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:n,props:{selector:n,successClass:i},WaferClass:_}));return l.sync(),l}return i(t,e),t}(O),C=j;t.default=new C({selector:"wafer-move"})}})});

}
/*
     FILE ARCHIVED ON 04:07:43 Jan 01, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:02 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.11
  exclusion.robots.policy: 0.101
  cdx.remote: 0.175
  esindex: 0.012
  LoadShardBlock: 119.021 (6)
  PetaboxLoader3.datanode: 122.174 (8)
  load_resource: 201.455 (2)
  PetaboxLoader3.resolve: 115.556 (2)
*/