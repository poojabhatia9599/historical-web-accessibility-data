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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-menu",[],t):"object"==typeof exports?exports["wafer-menu"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-menu"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20221001011834/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},l=window.wafer,c=l.base,f=l.constants,v=l.WaferBaseClass,p=l.utils,d=p.convertNodeListToArray,m=f.ATTR_PREFIX,h=["menuClick","toggleMenu"],y=[],b=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:y})),i=d(e.getElementsByClassName("menu-options"))[0],s=d(i.children),u=d(e.getElementsByClassName("menu-toggle"))[0],l=e.hasAttribute(m+"should-activate-on-hover"),c=e.hasAttribute(m+"skip-menuitem-focus"),f=i.getAttribute(m+"menu-active-class")||"menu-active";n._util=a({},n._util,{activeClass:f,elem:e,menuButtons:s,optionsElem:i,shouldActivateOnHover:l,skipMenuitemFocus:c,toggleElem:u}),h.forEach(function(e){n[e]=n[e].bind(n)}),n.addEventListeners(),n._state=a({},n._state,{active:i.classList.contains(f),activeElem:null,menuActiveElem:!1}),u.setAttribute("aria-expanded","false"),i.setAttribute("tabindex","-1"),i.getAttribute("role")||i.setAttribute("role","menu"),i.setAttribute("aria-hidden","true"),s.forEach(function(e){e.setAttribute("tabindex","-1"),e.setAttribute("role","menuitem")});var v=i.id;v&&u.setAttribute("aria-controls",v);var p=u.id;return p&&i.setAttribute("aria-labelledby",p),n}return i(t,e),s(t,[{key:"openMenu",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this._util,n=t.activeClass,r=t.elem,o=t.menuButtons,i=t.optionsElem,a=t.skipMenuitemFocus,s=t.toggleElem;this.closeOthers(),this._state.active=!0,i.classList.add(n),i.setAttribute("aria-hidden","false"),o.forEach(function(e){e.removeAttribute("tabindex")}),this._state.activeElem=o[0],a&&e?i.focus({preventScroll:!0}):this._state.activeElem.focus(),s.setAttribute("aria-expanded","true"),s.classList.remove("menu-closed"),s.classList.add("active"),c.emitWaferEvent("menu:open",{elem:r,meta:{}})}},{key:"closeMenu",value:function(){var e=this._util,t=e.activeClass,n=e.elem,r=e.menuButtons,o=e.optionsElem,i=e.toggleElem;this._state.active=!1,this._state.activeElem=null,o.classList.remove(t),o.setAttribute("aria-hidden","true"),r.forEach(function(e){e.setAttribute("tabindex","-1")}),i.setAttribute("aria-expanded","false"),i.classList.remove("active"),i.classList.add("menu-closed"),i.focus({preventScroll:!0}),c.emitWaferEvent("menu:close",{elem:n,meta:{}})}},{key:"addEventListeners",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addEventListeners",this).call(this)}},{key:"menuClick",value:function(e){var t=this._util.optionsElem,n=e.eventTarget;d(t.getElementsByClassName("menu-item-active")).forEach(function(e){e.classList.remove("menu-item-active")}),n.classList.add("menu-item-active"),this.didComplete(null,n.getAttribute("data-value")||n.value.toLowerCase()),this.closeMenu()}},{key:"toggleMenu",value:function(){this._state.active?this.closeMenu():this.openMenu()}},{key:"handleClickOutside",value:function(e){var t=e.waferComposedMap,n=this._util,r=n.optionsElem,o=n.toggleElem;this._state.active&&e.target!==o&&(t().get(r)||t().get(o)||this.closeMenu())}},{key:"handleKeyboardDown",value:function(e){if(this._state.active){switch(e.which||e.code){case 27:this.closeMenu();break;case 37:case 38:this.handleListUp(e);break;case 39:case 40:this.handleListDown(e)}}}},{key:"handleListDown",value:function(e){e.preventDefault();var t=this._util.menuButtons,n=t.indexOf(this._state.activeElem);n===t.length-1&&(n=-1);var r=t[n+1];this._state.activeElem=r,r&&r.focus()}},{key:"handleListUp",value:function(e){e.preventDefault();var t=this._util.menuButtons,n=t.indexOf(this._state.activeElem);0===n&&(n=t.length);var r=t[n-1];this._state.activeElem=r,r&&r.focus()}},{key:"mouseOver",value:function(e){if(!this._state.active){this._util.shouldActivateOnHover&&this.openMenu(!0)}}},{key:"mouseLeave",value:function(e){if(this._state.active){this._util.shouldActivateOnHover&&this.closeMenu()}}}]),t}(v);b.events={click:[["menu-item","menuClick"],["menu-toggle","toggleMenu"]],mouseover:[["menu-toggle","mouseOver"]],mouseleave:[["_self","mouseLeave"]]},t.default=b,e.exports=t.default},"./src/controller.js":function(e,t,n){"use strict";function r(){return u=o(n("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=window.wafer.controllers.WaferBaseController,v=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.containerClass,o=void 0===n?null:n,s=e.root,f=void 0===s?document:s,v=e.selector;i(this,t);var p=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:f,selector:v,WaferClass:(u||r()).default})),d=p;return(u||r()).default.prototype.closeOthers=function(){var e=this._util.elem,t=d._state.elementInstances,n=!0,r=!1,o=void 0;try{for(var i,a=t.entries()[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=c(i.value,2),u=s[0],l=s[1];u!==e&&l.instance.closeMenu()}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}},p._options=l({},p._options,{props:{},container:!!o&&f.getElementsByClassName(o)}),p.sync(),p}return s(t,e),t}(f);t.default=v,e.exports=t.default},"./src/entry.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o;t.default=new((o||function(){return o=r(n("./src/controller.js"))}()).default)({selector:"wafer-menu"}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 01:18:34 Oct 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:44 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.086
  exclusion.robots.policy: 0.072
  cdx.remote: 0.135
  esindex: 0.015
  LoadShardBlock: 124.67 (6)
  PetaboxLoader3.datanode: 72.552 (7)
  PetaboxLoader3.resolve: 64.015 (2)
  load_resource: 61.095
*/