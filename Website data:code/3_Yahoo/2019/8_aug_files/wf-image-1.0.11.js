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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-image",[],t):"object"==typeof exports?exports["wafer-image"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-image"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20190731235653/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/controller.js":function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,r){r&&e.setAttribute("srcset",r),e.src=t}function i(e,t,r){var o=e.getAttribute(r);o&&(e.setAttribute(t,o),e.removeAttribute(r))}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},f=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,o)}if("value"in n)return n.value;var s=n.get;if(void 0!==s)return s.call(o)},l=window.wafer,p=l.constants,d=l.utils,y=d.bindEvent,b=d.convertNodeListToArray,v=d.each,w=d.isNodeName,m=d.unbindEvent,g=p.ATTR_PREFIX,_=window.wafer.controllers.WaferLazyController,h=window.wafer.base,O=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,a=void 0===r?document:r;o(this,t);var s=t.prototype.configs,i=s.selector,f=s.successClass,u=s.separator,l=s.srcset,p=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:a,selector:i,successClass:f}));return p._options=c({},p._options,{defaultOffsetY:500,defaultOffsetX:0,separator:u,srcset:l}),p.sync(),p}return a(t,e),f(t,[{key:"loadElement",value:function(e,t){var r=this,o=this._options,n=o.error,a=o.errorClass,c=o.isRetina,f=o.separator,u=o.src,l=o.srcset;if(this._shouldLoadElement(e,t)){var p=e.getAttribute(u),d=e.getAttribute(g+"fallback-src");if(p){var _=p.split(f),O=_[c&&_.length>1?1:0],j=e.getAttribute(l),P=w(e,"img"),x=e.parentNode,A=x&&w(x,"picture");if(P||void 0===e.src){var E=new Image,L=function t(){n&&n(e,"invalid"),e.classList.add(a),d&&(e.classList.add("wafer-img-fallback"),e.src=d),h.emitError({elem:e,meta:{src:p},name:"WaferImage",stack:{}}),m(E,"error",t),m(E,"load",k)},k=function t(){P?A||s(e,O,j):e.style.backgroundImage='url("'+O+'")',r._itemLoaded(e),m(E,"load",t),m(E,"error",L)};A&&(E=e,v(b(x.getElementsByTagName("source")),function(e){i(e,"srcset",l)})),y(E,"error",L),y(E,"load",k),s(E,O,j)}}}}},{key:"_itemLoaded",value:function(e){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_itemLoaded",this).call(this,e);var r=this._options.srcset;e.removeAttribute(r)}}]),t}(_);O.prototype.configs={selector:".wafer-img",separator:"|",srcset:"data-wf-srcset",successClass:"wafer-img-loaded",allowPrefetch:!0},t.default=O,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function o(){return a=n(r("./src/controller.js"))}function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a;t.default=new((a||o()).default)({selector:(a||o()).default.prototype.configs.selector}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 23:56:53 Jul 31, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:26:34 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 293.001
  exclusion.robots: 0.127
  exclusion.robots.policy: 0.113
  cdx.remote: 0.085
  esindex: 0.012
  LoadShardBlock: 173.672 (3)
  PetaboxLoader3.datanode: 94.726 (5)
  PetaboxLoader3.resolve: 227.451 (3)
  load_resource: 366.066 (2)
*/