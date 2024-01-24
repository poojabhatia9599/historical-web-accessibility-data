!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-menu",[],t):"object"==typeof exports?exports["wafer-menu"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-menu"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=window.wafer,c=u.constants,l=u.WaferBaseClass,f=u.utils,p=f.convertNodeListToArray,v=c.ATTR_PREFIX,d=["menuClick","toggleMenu"],m=[],y=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.selector;r(this,t);var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:m})),i=p(e.getElementsByClassName("menu-options"))[0],u=p(e.getElementsByClassName("menu-toggle"))[0],c=i.getAttribute(v+"menu-active-class")||"menu-active";return s._util=a({},s._util,{activeClass:c,elem:e,optionsElem:i,toggleElem:u}),d.forEach(function(e){s[e]=s[e].bind(s)}),s.addEventListeners(),s._state=a({},s._state,{active:i.classList.contains(c)}),s}return s(t,e),i(t,[{key:"menuClick",value:function(e){var t=this._util,n=t.activeClass,r=t.optionsElem,o=e.target;p(r.getElementsByClassName("menu-item-active")).forEach(function(e){e.classList.remove("menu-item-active")}),this.didComplete(null,o.getAttribute("data-value")||o.value.toLowerCase()),this._state.active=!1,o.classList.add("menu-item-active"),r.classList.remove(n)}},{key:"toggleMenu",value:function(){var e=this._util,t=e.activeClass,n=e.optionsElem;this._state.active?(this._state.active=!1,n.classList.remove(t)):(this._state.active=!0,n.classList.add(t))}},{key:"handleClickOutside",value:function(e){if(this._state.active){var t=e.waferComposedMap,n=this._util,r=n.activeClass,o=n.optionsElem,s=n.toggleElem;t().get(o)||t().get(s)||(this._state.active=!1,o.classList.remove(r))}}}]),t}(l);y.events={click:[["menu-item","menuClick"],["menu-toggle","toggleMenu"]]},t.default=y,e.exports=t.default},"./src/controller.js":function(e,t,n){"use strict";function r(){return u=o(n("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=window.wafer.controllers.WaferBaseController,f=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.containerClass,o=void 0===n?null:n,i=e.root,l=void 0===i?document:i,f=e.selector;s(this,t);var p=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:l,selector:f,WaferClass:(u||r()).default}));return p._options=c({},p._options,{props:{},container:!!o&&l.getElementsByClassName(o)}),p.sync(),p}return i(t,e),t}(l);t.default=f,e.exports=t.default},"./src/entry.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o;t.default=new((o||function(){return o=r(n("./src/controller.js"))}()).default)({selector:"wafer-menu"}),e.exports=t.default}})});