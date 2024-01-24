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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-clipboard-copy",[],t):"object"==typeof exports?exports["wafer-clipboard-copy"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-clipboard-copy"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20221130223445/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=window.wafer,u=l.constants,s=l.WaferBaseClass,f=u.ATTR_PREFIX,p=["copy-text"],d=["handleCopy"],y=function(e){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.selector;r(this,t);var i=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:a},{STATE_ATTRS:p})),l=e.getAttribute(f+"copy-text")||e.innerText;return i._util=c({},i._util,{elem:e,"copy-text":l}),d.forEach(function(e){i[e]=i[e].bind(i)}),e.classList.add("has-copy-click","has-wafer-click"),i}return a(t,e),i(t,[{key:"stateDidUpdate",value:function(){}},{key:"handleCopy",value:function(){}}]),t}(s);y.events={click:[["has-copy-click","handleCopy"]]},t.default=y,e.exports=t.default},"./src/controller.js":function(e,t,o){"use strict";function r(){return l=n(o("./src/base.js"))}function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},s=window.wafer.controllers.WaferBaseController,f=!!navigator.clipboard,p=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.root,n=void 0===o?document:o,i=e.selector;a(this,t);var s=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:n,selector:i,props:{selector:i},WaferClass:(l||r()).default}));s._state=u({},s._state,{globalTextArea:null});var p=s;return(l||r()).default.prototype.handleCopy=function(){var e=this._util["copy-text"];if(f)return void navigator.clipboard.writeText(e);var t=p._state.globalTextArea;t||(t=document.createElement("textarea"),Object.assign(t.style,{border:"none",boxShadow:"none",display:"none",height:"2em",left:0,outline:"none",padding:0,position:"fixed",top:0,width:"2em"}),document.body.appendChild(t)),t.style.display="block",t.value=e,t.focus(),t.select();try{document.execCommand("copy")}catch(e){}t.style.display="none",p._state.globalTextArea=t},s.sync(),s}return i(t,e),t}(s);t.default=p,e.exports=t.default},"./src/entry.js":function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n;t.default=new((n||function(){return n=r(o("./src/controller.js"))}()).default)({selector:".wafer-clipboard-copy"}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 22:34:45 Nov 30, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:45 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.189
  exclusion.robots.policy: 0.165
  cdx.remote: 0.129
  esindex: 0.012
  LoadShardBlock: 110.237 (6)
  PetaboxLoader3.datanode: 108.286 (7)
  load_resource: 87.633
  PetaboxLoader3.resolve: 51.02
*/