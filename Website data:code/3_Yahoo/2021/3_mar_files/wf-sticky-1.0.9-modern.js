!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-sticky",[],e):"object"==typeof exports?exports["wafer-sticky"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-sticky"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/entry.js":function(t,e,o){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},l=function(){function t(t,e){var o=[],r=!0,n=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(r=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);r=!0);}catch(t){n=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(n)throw i}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),y=window.wafer,p=y.constants,d=y.utils,h=y.WaferBaseClass,v=d.findAncestor,g=p.ATTR_PREFIX,b=function(t){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.selector;r(this,e);var s=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{selector:i},{})),a=t.getAttribute(g+"sticky-boundary"),f=t.getAttribute(g+"sticky-target"),u=(t.getAttribute(g+"sticky-offset")||"").split(" "),y=l(u,4),p=y[0],d=y[1],h=y[2],b=y[3];s._util=c({},s._util,{elem:t,targetElem:f&&(a&&v(t,a)||document.body).querySelector(f)||t,offsetBottom:void 0!==b&&b,offsetLeft:void 0!==d&&d,offsetRight:void 0!==h&&h,offsetTop:void 0!==p&&p});var w=s._util.targetElem,m=w.style,k=m.bottom,_=m.left,O=m.position,j=m.right,S=m.top,E=w.getBoundingClientRect(),x=E.height,P=t.getBoundingClientRect(),T=P.height;return s._util.stickyAllowed=x<=T,s._state={isSticky:!1,previousPositionValue:{bottom:k,left:_,position:O,right:j,top:S}},s}return i(e,t),u(e,[{key:"addSticky",value:function(){var t=this._util,e=t.targetElem,o=t.offsetTop,r=t.offsetLeft,n=t.offsetRight,i={};o&&(i.top=o),r?i.left=r:n&&(i.right=n),this._state.isSticky=!0,Object.assign(e.style,{position:"fixed"},i),e.classList.add("sticky-active")}},{key:"makeStickyFlow",value:function(){var t=this._util,e=t.elem,o=t.offsetLeft,r=t.offsetRight,n=t.offsetBottom,i=t.targetElem,s=e.getBoundingClientRect(),a=i.getBoundingClientRect(),f=a.height,c=s.bottom,l={top:c-f-parseInt(n,10)+"px"};o?l.left=o:r&&(l.right=r),this._state.isSticky=!0,Object.assign(i.style,{position:"fixed"},l),i.classList.add("sticky-flow")}},{key:"removeSticky",value:function(){var t=this._util.targetElem;t.classList.remove("sticky-flow","sticky-active"),this._state.isSticky=!1,Object.assign(t.style,this._state.previousPositionValue)}},{key:"config",get:function(){var t=this._util,e=t.offsetBottom,o=t.offsetTop,r=t.stickyAllowed,n=t.targetElem;return{isSticky:this._state.isSticky,offsetBottom:e,offsetTop:o,stickyAllowed:r,targetElem:n}}}]),e}(h),w=b,m=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),k=window.wafer,_=k.base,O=k.controllers,j=k.utils,S=j.elementInView,E=j.throttle,x=O.WaferBaseController,P=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.root,r=void 0===o?document:o,n=t.selector,i=t.validateDelay,f=void 0===i?15:i;s(this,e);var c=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:r,selector:n,props:{selector:n},WaferClass:w}));return c._validateWithThrottle=E(function(){c.validate()},f,c),c.sync(),c}return f(e,t),m(e,[{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle()}},{key:"didSync",value:function(){var t=this._state,e=t.elementInstances,o=t.mounted;0!==e.size&&!o&&(this._state.mounted=!0)}},{key:"willValidate",value:function(t){var e=this._state.elementInstances;t.forEach(function(t){var o=e.get(t),r=o.instance,n=S(t,{},_.viewport),i=r.config,s=i.isSticky,a=i.stickyAllowed;if(!n||!a)return void(s&&r.removeSticky());var f=r.config.targetElem,c=f.getBoundingClientRect(),l=c.height,u=t.getBoundingClientRect(),y=u.bottom,p=u.top,d=r.config,h=d.offsetTop,v=d.offsetBottom;v=v&&parseInt(v,10),h=h&&parseInt(h,10),y-(l+v+h)<0?r.makeStickyFlow():s&&p-h>=0?r.removeSticky():p-h<0&&r.addSticky()})}}]),e}(x),T=P;e.default=new T({selector:".wafer-sticky"})}})});