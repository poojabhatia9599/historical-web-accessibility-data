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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-image",[],t):"object"==typeof exports?exports["wafer-image"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-image"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var a=r[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20220101045523/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/controller.js":function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function n(e,t,r){r&&e.setAttribute("srcset",r),e.src=t}function i(e,t,r){var o=e.getAttribute(r);o&&(e.setAttribute(t,o),e.removeAttribute(r))}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=function e(t,r,o){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,r,o)}if("value"in a)return a.value;var n=a.get;if(void 0!==n)return n.call(o)},f=window.wafer,d=f.constants,p=f.utils,y=p.bindEvent,v=p.convertNodeListToArray,m=p.each,b=p.findAncestor,g=p.isNodeName,w=p.unbindEvent,_=d.ATTR_PREFIX,h=window.wafer.controllers.WaferLazyController,O=window.wafer.base,j=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,s=void 0===r?document:r;o(this,t);var n=t.prototype.configs,i=n.nativeClass,u=n.selector,l=n.separator,f=n.srcset,d=n.successClass,p=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:s,selector:u,successClass:d}));return p._options=c({},p._options,{defaultOffsetX:0,defaultOffsetY:500,nativeClass:i,separator:l,srcset:f}),p.sync(),p}return s(t,e),u(t,[{key:"nativeLazyLoadElement",value:function(e){var t=this._getImageMetaWithType(e),r=t.type;if(r){var o=this._options,a=o.src,s=o.srcset,n=o.nativeClass,c=o.selector;e.setAttribute("loading","lazy"),e.classList.remove(c.replace(".","")),e.classList.add(n),e.removeAttribute(a),e.removeAttribute(s),"picture"===r&&m(v(e.parentNode.getElementsByTagName("source")),function(e){i(e,"srcset",s)}),this._addEventsToElement(e,e,"native",t)}}},{key:"loadElement",value:function(e){if(this._shouldLoadElement(e)){var t=this._getImageMetaWithType(e),r=t.type;if(!r)return;var o=this._options.srcset,a=new Image;"picture"===r&&(a=e,m(v(e.parentNode.getElementsByTagName("source")),function(e){i(e,"srcset",o)})),this._addEventsToElement(e,a,"default",t)}}},{key:"_addBoundarySuccessClass",value:function(e){var t=e.getAttribute("data-wf-boundary"),r=t&&b(e,t);r&&(r.classList.add("wafer-image-boundary-success"),r.classList.remove("wafer-image-boundary-error"))}},{key:"_itemLoaded",value:function(e){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_itemLoaded",this).call(this,e),this._addBoundarySuccessClass(e);var r=this._options.srcset;e.removeAttribute(r)}},{key:"_addEventsToElement",value:function(e,t,r,o){var a=this,s=o.elemSrc,i=o.elemSrcset,c=o.fallbackSrc,u=o.type,l=this._options,f=l.error,d=l.errorClass,p=l.successClass,v=function r(){f&&f(e,"invalid");var o=e.getAttribute("data-wf-add-error-to-parent"),a=e.getAttribute("data-wf-boundary"),n=a&&b(e,a);o=Number(o)||0,o&&e.parentNode.classList.add(d),c&&(e.classList.add("wafer-img-fallback"),e.src=c),n&&(n.classList.remove("wafer-image-boundary-success"),n.classList.add("wafer-image-boundary-error")),e.classList.add(d),O.emitError({elem:e,meta:{src:s,srcset:i},name:"WaferImage",stack:{}}),w(t,"error",r),w(t,"load",m)},m=function o(){"native"!==r?("image"===u||"picture"===u?n(e,s,i):e.style.backgroundImage='url("'+s+'")',a._itemLoaded(e)):(a._addBoundarySuccessClass(e),e.classList.add(p)),w(t,"error",v),w(t,"load",o)};y(t,"error",v),y(t,"load",m),n(t,s,i)}},{key:"_getImageMetaWithType",value:function(e){var t=this._options,r=t.isRetina,o=t.separator,a=t.src,s=t.srcset,n=e.getAttribute(a),i=e.getAttribute(_+"fallback-src");if(n){var c=n.split(o),u=c[r&&c.length>1?1:0],l=e.getAttribute(s),f=e.tagName.toLowerCase(),d="img"===f,p=e.parentNode,y=p&&g(p,"picture");if(d||void 0===e.src)return y?{elemSrc:u,elemSrcset:l,fallbackSrc:i,type:"picture"}:{elemSrc:u,elemSrcset:l,fallbackSrc:i,type:d?"image":f}}return{}}}]),t}(h);j.prototype.configs={selector:".wafer-img",separator:"|",srcset:"data-wf-srcset",nativeClass:"wafer-img-native",successClass:"wafer-img-loaded",allowPrefetch:!0},t.default=j,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function o(){return s=a(r("./src/controller.js"))}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s;t.default=new((s||o()).default)({selector:(s||o()).default.prototype.configs.selector}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 04:55:23 Jan 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:12 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.06
  exclusion.robots.policy: 0.051
  cdx.remote: 0.081
  esindex: 0.012
  LoadShardBlock: 220.018 (6)
  PetaboxLoader3.datanode: 183.955 (8)
  load_resource: 250.233 (2)
  PetaboxLoader3.resolve: 78.038 (2)
*/