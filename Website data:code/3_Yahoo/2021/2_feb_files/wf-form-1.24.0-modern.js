!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-form",[],t):"object"==typeof exports?exports["wafer-form"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-form"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r=window.webpackJsonpwafer_wafers_wafer_form;window.webpackJsonpwafer_wafers_wafer_form=function(t,n,o){for(var a,s,u=0,c=[];u<t.length;u++)s=t[u],i[s]&&c.push(i[s][0]),i[s]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);for(r&&r(t,n,o);c.length;)c.shift()()};var n={},i={1:0,2:0};return t.e=function(e){function r(){s.onerror=s.onload=null,clearTimeout(u);var t=i[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),i[e]=void 0)}var n=i[e];if(0===n)return new Promise(function(e){e()});if(n)return n[2];var o=new Promise(function(t,r){n=i[e]=[t,r]});n[2]=o;var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,t.nc&&s.setAttribute("nonce",t.nc),s.src=t.p+"wf-form-1.24.0-modern-"+{0:"4b99858f44"}[e]+".chunk.js";var u=setTimeout(r,12e4);return s.onerror=s.onload=r,a.appendChild(s),o},t.m=e,t.c=n,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t.oe=function(e){throw e},t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,r,n)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(n)},d=window.wafer,h=d.base,m=d.constants,p=d.utils,v=d.WaferBaseClass,b=m.ATTR_PREFIX,g=p.bindEvent,y=p.clearAndSetInnerHTML,w=p.convertNodeListToArray,_=p.fetchWithCache,A=p.findAncestor,E=p.getElementsByAttrValues,O=p.unbindEvent,C=p.urlify,k=["handleSubmit","handleOnChange","handleOnSubmit"],T=["action","focus"],j="wafer-form-boundary-error",L="function"==typeof document.createElement("input").checkValidity,P=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.errorClass,a=r.selector,s=r.successClass;n(this,t);var u=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:o,selector:a,successClass:s},{STATE_ATTRS:T})),l=e.getAttribute("action"),f=e.getAttribute(b+"boundary"),d=e.getAttribute(b+"boundary-error-class")||j,h=e.getAttribute(b+"cache"),m=e.getAttribute(b+"credentials"),p=e.getAttribute(b+"critical"),v=e.getAttribute(b+"success-class"),g=e.getAttribute(b+"form-type"),y=e.getAttribute(b+"mode"),_=w(e.getElementsByTagName("input")),O=(e.getAttribute("method")||"get").toUpperCase(),C=w(e.getElementsByTagName("select")),L=e.getAttribute(b+"result-selector"),P=e.getAttribute(b+"target"),I=e.getAttribute(b+"focus"),S=e.getAttribute(b+"trigger")||"",x=e.getAttribute(b+"timeout"),F=f&&A(e,f),N=E("data-wf-trigger",["change","click"],e),W=N.change,V=N.click,B=[];return _.forEach(function(e){var t=e.getAttribute("type");"submit"!==t&&"button"!==t&&B.push(e)}),C.forEach(function(e){B.push(e)}),B=B.concat(w(e.getElementsByTagName("textarea"))),V.forEach(function(e){e.classList.add("trigger-submit")}),u._util=c({},u._util,{action:l,boundary:f,cache:null===h||void 0===h?0:Number(h),critical:p,customSuccessClass:v,targetElem:P&&(F||document.body).querySelector(P),boundaryElem:F,boundaryErrorClass:d,trigger:S,timeout:null===x||void 0===x?6e3:Number(x),type:g,credentials:m,elem:e,elemsWithOnChange:W,elemsWithValues:B,errorClass:o,focus:null===I||void 0===I?0:Number(I),inputElems:_,method:O,mode:y,pending:!1,resultSelector:L,selector:a,successClass:s}),u._state={submitAllowed:!0},k.forEach(function(e){u[e]=u[e].bind(u)}),u.addEventListeners(),I&&u.focus(),u}return o(t,e),l(t,[{key:"removeInputEvents",value:function(){var e=this;this._util.inputElems.forEach(function(t){t.hasAttribute("required")&&(O(t,"invalid",e.handleInvalidInput),O(t,"change",e.handleInputChange),O(t,"keydown",e.handleInputChange,{passive:!1}))})}},{key:"addInputEvents",value:function(){var e=this,t=this._util.inputElems;this.handleInvalidInput=this.handleInvalidInput.bind(this),this.handleInputChange=this.handleInputChange.bind(this),t.forEach(function(t){t.hasAttribute("required")&&(g(t,"invalid",e.handleInvalidInput),g(t,"change",e.handleInputChange),g(t,"keydown",e.handleInputChange,{passive:!1}))})}},{key:"addEventListeners",value:function(){var e=this,t=this._util,r=t.elem;t.elemsWithOnChange.forEach(function(t){g(t,"change",e.handleOnChange)}),g(r,"submit",this.handleOnSubmit,{passive:!1}),this.addInputEvents()}},{key:"handleElementWithValue",value:function(e){if("weather"===e.getAttribute(b+"ac-type")||"weather"===e.getAttribute(b+"lp-type")){var t=e.getAttribute("data-user-input"),r=e.getAttribute("data-value"),n=e.value,i=r||n;if(t||i===n){var o=e.getAttribute("data-wf-ac-url")||e.getAttribute("data-wf-lp-url");if(o)return _(o.replace("{term}",n),{cache:1,cacheStrategy:"cacheFirst",useRid:0}).then(function(r){var n=e.getAttribute(b+"lp-saved-url"),o=r[0];if(!o)return e;var a=o.woeid;return a+="",e.setAttribute("data-value",a),e.setAttribute("data-user-input",i),n?_(n,{body:JSON.stringify({requests:{g0:{resource:"WeatherLocationService.favoriteLocation",operation:"create",params:{woeid:a,term:t}}}})}).catch(function(e){}):e}).then(function(){return e}).catch(function(){return e})}}return e}},{key:"focus",value:function(){var e=this;if(!this._util.elementToFocus){var t=w(this._util.elem.getElementsByTagName("input"))[0];if(!t)return null;this._util.elementToFocus=t}this._util.elementToFocus&&setTimeout(function(){e._util.elementToFocus.focus()},100)}},{key:"submitForm",value:function(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.forcePreference,a=void 0!==o&&o,s=this._util,u=s.action,c=s.type,l="/"!==u&&!a,f="modulePreference"===c||"modulePreferenceClear"===c;if(!l&&f)return f=!0,void new Promise(function(e){r.e(0).then(function(t){e(r("./src/types/preference.js"))}.bind(null,r)).catch(r.oe)}).then(function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).submitForm.call(n,e)});if(!this._util.pending&&u){var d=this._util.elem;this._util.pending=!0,this._state.submitAllowed=!0,d.classList.remove("wafer-form-incomplete"),d.classList.add("wafer-form-inprogress"),this.formValues.then(function(r){if(!n._state.submitAllowed)return d.classList.add("wafer-form-incomplete"),d.classList.remove("wafer-form-inprogress"),void(n._util.pending=!1);e&&e.preventDefault();var i=n._util,o=i.boundaryElem,a=i.boundaryErrorClass,s=i.cache,c=i.credentials,l=i.customSuccessClass,m=i.errorClass,p=i.method,v=i.mode,b=i.resultSelector,g=i.successClass,w=i.targetElem,A=i.timeout,E=void 0,O=u;if(l&&d.classList.remove(l),d.classList.remove(g),d.classList.remove(m),o&&o.classList.remove(a),"POST"===p)E=JSON.stringify(r);else{var k=!0;if(window.__waferFormGetUrlify)try{var T=window.__waferFormGetUrlify.call(null,O,r,C,d);T&&(O=T,k=!1)}catch(e){k=!0}k&&(O=O+(-1===O.indexOf("?")?"?":"&")+C(r))}_(O,{mode:v,cache:s,timeout:A,body:E,credentials:c}).then(function(t){if(n._util.pending=!1,w){var r=void 0;if(h.destroy(w),b){var i=document.createElement("div");i.innerHTML=t.html;var o=i.querySelector(b);r=o&&o.innerHTML||t.html}else r=t.html;y(w,r),h.syncAssets(t.assets),h.sync(w)}return l&&d.classList.add(l),d.classList.remove("wafer-form-inprogress"),d.classList.add(g),h.emitWaferEvent("form:submit",{elem:d,meta:{data:t}}),!f||n.submitForm(e,{forcePreference:!0})}).catch(function(e){return n._util.pending=!1,h.emitError({name:t.name,elem:d,meta:{url:O,body:E},stack:e.stack}),d.classList.remove("wafer-form-inprogress"),d.classList.add(m),o&&o.classList.add(a),!1})})}}},{key:"destroy",value:function(){var e=this,r=this._util,n=r.elem,i=r.elemsWithOnChange;this.removeInputEvents(),i.forEach(function(t){O(t,"change",e.onchange)}),O(n,"submit",this.handleOnSubmit,{passive:!1}),f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"stateDidUpdate",value:function(){if("focus"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stateAttr)return void this.focus();"stateChange"===this._util.trigger&&this.submitForm()}},{key:"handleInvalidInput",value:function(e){var t=this._util.elem,r=e.target;if(void 0===r.__customError){var n=r.getAttribute(b+"custom-error");n=null===n||void 0===n?0:Number(n),r.__customError=n}t.classList.add("wafer-form-incomplete"),r.classList.add("wafer-form-elem-error"),r.__customError&&r.setCustomValidity(" ")}},{key:"handleInputChange",value:function(e){var t=this._util.elem,r=e.target;t.classList.remove("wafer-form-incomplete"),r.classList.remove("wafer-form-elem-error"),r.setCustomValidity("")}},{key:"handleOnChange",value:function(){var e=this;setTimeout(function(){e.submitForm()},100)}},{key:"handleOnSubmit",value:function(e){e.preventDefault()}},{key:"handleSubmit",value:function(e){this.submitForm()}},{key:"formValues",get:function(){var e=this,t=this._util||{},r=t.elemsWithValues,n=void 0===r?[]:r,i=t.method;return Promise.all(n.map(function(t){return e.handleElementWithValue(t)})).then(function(t){return t.reduce(function(t,r){var n=r.getAttribute("data-user-input"),o=r.getAttribute("data-value"),a=r.hasAttribute("required"),s=r.value,u=o||s;if(L&&!r.checkValidity())return e._state.submitAllowed=!1,t;if(a&&!u)return e._state.submitAllowed=!1,t;var c=r.getAttribute(b+"input-format-pattern");if(u){var l=r.getAttribute("name"),f=l.split("."),d=r.checked,h=r.type,m=void 0;if("POST"===i&&f.length>1?(l=f.pop(),m=t,f.forEach(function(e){m[e]=m[e]||{},m=m[e]})):m=t,n||u!==s){var p=r.getAttribute("data-assist-src");p&&(m["assist-src"]=p),m[l+"-src"]="assist",m[l+"-term"]=n||s}if(!r.getAttribute("data-wf-on")&&("radio"!==h||d)){if("checkbox"===h){var v=r.getAttribute("data-wf-checkbox-array-key");v?(m[v]=m[v]||[],d&&("on"===u?m[v].push(l):m[v].push(u))):"on"===u?m[l]=d:d&&(m[l]=u)}else{var g="";c&&(g=c.replace(/INPUT/g,u)),m[l]=g||u}o&&(m[l+"-dval"]=s,m[l+"-src"]="assist",m[l+"-term"]=n||s)}}return t},{})})}}]),t}(v);P.events={click:[["trigger-submit","handleSubmit"]]};var I=P,S=window.wafer.controllers.WaferBaseController,x=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.errorClass,n=void 0===r?"wafer-form-error":r,i=e.root,o=void 0===i?document:i,u=e.selector,c=void 0===u?".wafer-form":u,l=e.successClass,f=void 0===l?"wafer-form-complete":l;a(this,t);var d=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:o,selector:c,props:{errorClass:n,selector:c,successClass:f},WaferClass:I}));return d.sync(),d}return u(t,e),t}(S),F=x;t.default=new F({selector:".wafer-form"})}})});