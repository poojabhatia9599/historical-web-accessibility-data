!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-form",[],t):"object"==typeof exports?exports["wafer-form"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-form"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(n)},c=window.wafer,l=c.base,f=c.constants,d=c.utils,m=c.WaferBaseClass,h=f.ATTR_PREFIX,p=d.bindEvent,b=d.convertNodeListToArray,v=d.fetchWithCache,g=d.findAncestor,y=d.getElementsByAttrValues,_=d.unbindEvent,w=d.urlify,O=["handleSubmit","handleOnChange","handleOnSubmit"],j=["action","focus"],C=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.errorClass,a=r.selector,u=r.successClass;n(this,t);var c=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:i,selector:a,successClass:u},{STATE_ATTRS:j})),l=e.getAttribute("action"),f=e.getAttribute(h+"boundary"),d=e.getAttribute(h+"cache"),m=e.getAttribute(h+"credentials"),p=e.getAttribute(h+"success-class"),v=e.getAttribute(h+"mode"),_=b(e.getElementsByTagName("input")),w=(e.getAttribute("method")||"get").toUpperCase(),C=b(e.getElementsByTagName("select")),E=e.getAttribute(h+"result-selector"),T=e.getAttribute(h+"target"),A=e.getAttribute(h+"focus"),P=e.getAttribute(h+"trigger")||"",S=e.getAttribute(h+"timeout"),k=y("data-wf-trigger",["change","click"],e),x=k.change,L=k.click,F=[];return _.forEach(function(e){var t=e.getAttribute("type");"submit"!==t&&"button"!==t&&F.push(e)}),C.forEach(function(e){F.push(e)}),F=F.concat(b(e.getElementsByTagName("textarea"))),L.forEach(function(e){e.classList.add("trigger-submit")}),c._util=s({},c._util,{action:l,boundary:f,cache:null===d||void 0===d?0:Number(d),customSuccessClass:p,targetElem:T&&(f&&g(e,f)||document.body).querySelector(T),trigger:P,timeout:null===S||void 0===S?6e3:Number(S),credentials:m,elem:e,elemsWithOnChange:x,elemsWithValues:F,errorClass:i,focus:null===A||void 0===A?0:Number(A),method:w,mode:v,pending:!1,resultSelector:E,selector:a,successClass:u}),O.forEach(function(e){c[e]=c[e].bind(c)}),c.addEventListeners(),A&&c.focus(),c}return i(t,e),a(t,[{key:"addEventListeners",value:function(){var e=this,t=this._util,r=t.elem;t.elemsWithOnChange.forEach(function(t){p(t,"change",e.handleOnChange)}),p(r,"submit",this.handleOnSubmit,{passive:!1})}},{key:"focus",value:function(){var e=this;if(!this._util.elementToFocus){var t=b(this._util.elem.getElementsByTagName("input"))[0];if(!t)return null;this._util.elementToFocus=t}this._util.elementToFocus&&setTimeout(function(){e._util.elementToFocus.focus()},100)}},{key:"submitForm",value:function(){var e=this,r=this._util,n=r.action;if(!r.pending&&n){this._util.pending=!0;var o=this._util,i=o.cache,s=o.credentials,a=o.customSuccessClass,u=o.elem,c=o.errorClass,f=o.method,d=o.mode,m=o.resultSelector,h=o.successClass,p=o.targetElem,b=o.timeout,g=this.formValues,y=void 0,_=n;if(a&&u.classList.remove(a),u.classList.remove(h),u.classList.remove(c),"POST"===f)y=JSON.stringify(g);else{var O=!0;if(window.__waferFormGetUrlify)try{var j=window.__waferFormGetUrlify.call(null,_,g,w,u);j&&(_=j,O=!1)}catch(e){O=!0}O&&(_=_+(-1===_.indexOf("?")?"?":"&")+w(g))}v(_,{mode:d,cache:i,timeout:b,body:y,credentials:s}).then(function(t){if(e._util.pending=!1,p){var r=void 0;if(l.destroy(p),m){var n=document.createElement("div");n.innerHTML=t.html;var o=n.querySelector(m);r=o&&o.innerHTML||t.html}else r=t.html;p.innerHTML=r,l.sync(p)}return a&&u.classList.add(a),u.classList.add(h),l.emitWaferEvent("form:submit",{elem:u,meta:{data:t}}),!0}).catch(function(r){return e._util.pending=!1,l.emitError({name:t.name,elem:u,meta:{url:_,body:y},stack:r.stack}),u.classList.add(c),!1})}}},{key:"destroy",value:function(){var e=this,r=this._util,n=r.elem;r.elemsWithOnChange.forEach(function(t){_(t,"change",e.onchange)}),_(n,"submit",this.handleOnSubmit,{passive:!1}),u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"stateDidUpdate",value:function(){if("focus"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stateAttr)return void this.focus();"stateChange"===this._util.trigger&&this.submitForm()}},{key:"handleOnChange",value:function(){var e=this;setTimeout(function(){e.submitForm()},100)}},{key:"handleOnSubmit",value:function(e){e.preventDefault()}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.submitForm()}},{key:"formValues",get:function(){var e=this._util||{},t=e.elemsWithValues;return(void 0===t?[]:t).reduce(function(e,t){var r=t.getAttribute("data-user-input"),n=t.getAttribute("data-value"),o=t.value,i=n||o,s=t.getAttribute(h+"input-format-pattern");if(i&&!t.getAttribute("data-wf-on")&&("radio"!==t.type||t.checked)){var a=t.getAttribute("name"),u="";s&&(u=s.replace(/INPUT/g,i)),e[a]=u||i,n&&(e[a+"-src"]="assist",e[a+"-dval"]=o,e[a+"-term"]=r)}return e},{})}}]),t}(m);C.events={click:[["trigger-submit","handleSubmit"]]},t.default=C,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return u=o(r("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=window.wafer.controllers.WaferBaseController,l=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.errorClass,o=void 0===r?"wafer-form-error":r,a=e.root,c=void 0===a?document:a,l=e.selector,f=void 0===l?".wafer-form":l,d=e.successClass,m=void 0===d?"wafer-form-complete":d;i(this,t);var h=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:c,selector:f,props:{errorClass:o,selector:f,successClass:m},WaferClass:(u||n()).default}));return h.sync(),h}return a(t,e),t}(c);t.default=l,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o;t.default=new((o||function(){return o=n(r("./src/controller.js"))}()).default)({selector:".wafer-form"}),e.exports=t.default}})});