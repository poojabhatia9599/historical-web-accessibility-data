!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-dropdown-drawer",[],t):"object"==typeof exports?exports["wafer-dropdown-drawer"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-dropdown-drawer"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=window.wafer.WaferBaseClass,c=["buttonClick"],f=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.selector;n(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:a},{STATE_ATTRS:{}})),l=e.getElementsByClassName("wafer-drawer-button")[0],f=e.getElementsByClassName("wafer-drawer-list")[0];return l&&f?(i._util=s({},i._util,{buttonElem:l,elem:e,listElem:f}),i._state=s({},i._state,{expanded:!1}),c.forEach(function(e){i[e]=i[e].bind(i)}),i.checkAndApplyExpandProperties(),i):o(i)}return a(t,e),i(t,[{key:"checkAndApplyExpandProperties",value:function(){var e=this._util,t=e.elem,r=e.listElem,n=r.style;Object.assign(r.style,{display:"flex",flexWrap:"nowrap"}),r.scrollWidth>r.clientWidth?t.classList.add("wafer-dropdown-drawer-active"):(t.classList.remove("wafer-dropdown-drawer-active"),this._state.expanded||t.classList.remove("wafer-dropdown-drawer-expanded")),r.style=n}},{key:"buttonClick",value:function(e){this._util.elem.classList.toggle("wafer-dropdown-drawer-expanded"),this._state.expanded=!this._state.expanded}},{key:"handleResize",value:function(){this.checkAndApplyExpandProperties()}}]),t}(l);f.events={click:[["wafer-drawer-button","buttonClick"]]},t.default=f,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return l=o(r("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c=window.wafer.controllers.WaferBaseController,f=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root,o=void 0===r?document:r,i=e.selector;a(this,t);var c=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:i,props:{selector:i},WaferClass:(l||n()).default}));return c.sync(),c}return i(t,e),t}(c);t.default=f,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o;t.default=new((o||function(){return o=n(r("./src/controller.js"))}()).default)({selector:".wafer-dropdown-drawer"}),e.exports=t.default}})});