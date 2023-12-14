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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-template",[],t):"object"==typeof exports?exports["wafer-template"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-template"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20191001001016/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(n)},c=window.wafer,f=c.base,u=c.constants,p=c.WaferBaseClass,d=c.utils,m=d.getTemplateNode,v=u.ATTR_PREFIX,w=["stateTrigger"],y=["click"],b=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.errorClass,i=void 0===a?"wafer-template-error":a,l=r.selector,c=r.successClass,f=void 0===c?"wafer-template-success":c;n(this,t);var u=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:i,selector:l,successClass:f},{STATE_ATTRS:w})),p=e.getAttribute(v+"template-target")||"",d=e.getAttribute(v+"template-id"),b=m(document.getElementById(d)),h=e.getAttribute(v+"template-on")||"click",g=e.hasAttribute(v+"template-allow-rerender");return u._util=s({},u._util,{allowRerender:g,elem:e,errorClass:i,events:h?h.split(","):[],successClass:f,targetSelector:p,templateElem:b,templateId:d}),y.forEach(function(e){u[e]=u[e].bind(u)}),u.onWaferEvent=u.onWaferEvent.bind(u),u.addEventListeners(),u}return a(t,e),i(t,[{key:"renderTemplate",value:function(e){var r=this._util,n=r.allowRerender,o=r.elem,a=r.successClass,s=r.targetSelector,i=r.templateElem,l=r.templateId;return new Promise(function(r,c){var u=s?document.querySelector(s):o;o.classList.add("wafer-template-trigger-in-progress"),u.classList.add("wafer-template-target-in-progress"),setTimeout(function(){return i?u?(f.destroy(u),u.innerHTML=i.innerHTML,f.sync(u),u.classList.add(a),o.classList.remove("wafer-template-trigger-in-progress"),u.classList.remove("wafer-template-target-in-progress"),f._emit({elem:o,meta:{eventName:e,target:u},name:t.name},"template:render"),void(n?r(!1):(window.wafer.wafers["wafer-template"].destroy(o),r(!0)))):void c(new Error("[wafer-template] Cannot find target element")):(o.classList.remove("wafer-template-trigger-in-progress"),u.classList.remove("wafer-template-target-in-progress"),void c(new Error("[wafer-template] Cannot find template with id = "+l)))},0)})}},{key:"addEventListeners",value:function(){var e=this,t=this._util,r=t.elem,n=t.events;0!==n.size&&window.wafer.ready(function(){for(var t,o=0;t=n[o];++o)"click"!==t?t.indexOf(":")&&window.wafer.on(t,e.onWaferEvent):r.classList.add("has-template-click")})}},{key:"click",value:function(){-1!==this._util.events.indexOf("click")&&this.renderTemplate("click").catch(function(e){})}},{key:"onWaferEvent",value:function(e){e.elem===this._util.elem&&this.renderTemplate(e.type).catch(function(e){})}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"stateDidUpdate",value:function(){-1!==this._util.events.indexOf("stateChange")&&this.renderTemplate("stateChange")}},{key:"destroy",value:function(){for(var e,r=this._util,n=r.elem,o=r.events,a=0;e=o[a];++a)e.indexOf(":")&&window.wafer.removeListener(e,this.onWaferEvent);n.classList.add("wafer-template-destroyed"),l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}}]),t}(p);b.events={click:[["has-template-click","click"]]},t.default=b,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return l=o(r("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c=window.wafer.controllers.WaferBaseController,f=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,o=void 0===r?document:r,i=e.selector,c=void 0===i?".wafer-template":i;a(this,t);var f=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:c,WaferClass:(l||n()).default}));return f.sync(),f}return i(t,e),t}(c);t.default=f,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o;t.default=new((o||function(){return o=n(r("./src/controller.js"))}()).default)({selector:".wafer-template"}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 00:10:16 Oct 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:25:37 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 309.67
  exclusion.robots: 0.092
  exclusion.robots.policy: 0.082
  cdx.remote: 0.068
  esindex: 0.011
  LoadShardBlock: 129.907 (3)
  PetaboxLoader3.datanode: 113.586 (5)
  PetaboxLoader3.resolve: 244.681 (3)
  load_resource: 288.677 (2)
*/