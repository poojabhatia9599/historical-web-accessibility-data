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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-form",[],t):"object"==typeof exports?exports["wafer-form"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-form"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r=window.webpackJsonpwafer_wafers_wafer_form;window.webpackJsonpwafer_wafers_wafer_form=function(t,n,o){for(var a,s,u=0,c=[];u<t.length;u++)s=t[u],i[s]&&c.push(i[s][0]),i[s]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);for(r&&r(t,n,o);c.length;)c.shift()()};var n={},i={3:0,4:0};return t.e=function(e){function r(){s.onerror=s.onload=null,clearTimeout(u);var t=i[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),i[e]=void 0)}var n=i[e];if(0===n)return new Promise(function(e){e()});if(n)return n[2];var o=new Promise(function(t,r){n=i[e]=[t,r]});n[2]=o;var a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,t.nc&&s.setAttribute("nonce",t.nc),s.src=t.p+"wf-form-1.30.7-"+{0:"923cd4faed",1:"d057816877",2:"6f0e99d72b"}[e]+".chunk.js";var u=setTimeout(r,12e4);return s.onerror=s.onload=r,a.appendChild(s),o},t.m=e,t.c=n,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20220331235545/https://s.yimg.com/aaq/wf/",t.oe=function(e){throw e},t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,r,n)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(n)},c=window.wafer,l=c.base,f=c.constants,d=c.utils,m=c.WaferBaseClass,h=f.ATTR_PREFIX,p=d.bindEvent,v=d.clearAndSetInnerHTML,b=d.convertNodeListToArray,g=d.fetchWithCache,y=d.findAncestor,w=d.getElementsByAttrValues,_=d.unbindEvent,E=d.urlify,A=["handleSubmit","handleOnChange","handleOnSubmit"],O=["action","focus"],C="wafer-form-boundary-error",j="function"==typeof document.createElement("input").checkValidity,k=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.errorClass,s=r.selector,u=r.successClass;n(this,t);var c=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:o,selector:s,successClass:u},{STATE_ATTRS:O})),l=e.getAttribute("action"),f=e.getAttribute(h+"boundary"),d=e.getAttribute(h+"boundary-error-class")||C,m=e.getAttribute(h+"cache"),p=e.getAttribute(h+"credentials"),v=e.getAttribute(h+"critical"),g=e.getAttribute(h+"success-class"),_=e.getAttribute(h+"custom-event"),E=e.getAttribute(h+"form-type"),j=e.getAttribute(h+"mode"),k=b(e.getElementsByTagName("input")),P=(e.getAttribute("method")||"get").toUpperCase(),L=b(e.getElementsByTagName("select")),T=e.getAttribute(h+"result-selector"),S=e.getAttribute(h+"target"),I=e.getAttribute(h+"focus"),x=e.getAttribute(h+"trigger")||"",F=e.getAttribute(h+"timeout"),V=e.getAttribute(h+"form-send-unchecked")||!1,N=f&&y(e,f),W=w("data-wf-trigger",["change","click"],e),M=W.change,B=W.click,q=[];return k.forEach(function(e){var t=e.getAttribute("type");"submit"!==t&&"button"!==t&&q.push(e)}),L.forEach(function(e){q.push(e)}),q=q.concat(b(e.getElementsByTagName("textarea"))),B.forEach(function(e){e.classList.add("trigger-submit")}),c._util=a({},c._util,{action:l,boundary:f,cache:null===m||void 0===m?0:Number(m),critical:v,customSuccessClass:g,targetElem:S&&(N||document.body).querySelector(S),boundaryElem:N,boundaryErrorClass:d,trigger:x,timeout:null===F||void 0===F?6e3:Number(F),type:E,credentials:p,elem:e,elemsWithOnChange:M,elemsWithValues:q,errorClass:o,focus:null===I||void 0===I?0:Number(I),hasCustomEvent:null===_||void 0===_?0:Number(_),includeUncheckedValues:null===V||void 0===V?0:Number(V),inputElems:k,method:P,mode:j,pending:!1,resultSelector:T,selector:s,successClass:u}),c._state={submitAllowed:!0},A.forEach(function(e){c[e]=c[e].bind(c)}),c.addEventListeners(),I&&c.focus(),"onLoad"===x&&c.submitForm(),c}return o(t,e),s(t,[{key:"removeInputEvents",value:function(){var e=this;this._util.inputElems.forEach(function(t){t.hasAttribute("required")&&(_(t,"invalid",e.handleInvalidInput),_(t,"change",e.handleInputChange),_(t,"keydown",e.handleInputChange,{passive:!1}))})}},{key:"addInputEvents",value:function(){var e=this,t=this._util.inputElems;this.handleInvalidInput=this.handleInvalidInput.bind(this),this.handleInputChange=this.handleInputChange.bind(this),t.forEach(function(t){t.hasAttribute("required")&&(p(t,"invalid",e.handleInvalidInput),p(t,"change",e.handleInputChange),p(t,"keydown",e.handleInputChange,{passive:!1}))})}},{key:"addEventListeners",value:function(){var e=this,t=this._util,r=t.elem;t.elemsWithOnChange.forEach(function(t){p(t,"change",e.handleOnChange)}),p(r,"submit",this.handleOnSubmit,{passive:!1}),this.addInputEvents()}},{key:"handleElementWithValue",value:function(e){if("weather"===e.getAttribute(h+"ac-type")||"weather"===e.getAttribute(h+"lp-type")){var t=e.getAttribute("data-user-input"),r=e.getAttribute("data-value"),n=e.value,i=r||n;if(t||i===n){var o=e.getAttribute("data-wf-ac-url")||e.getAttribute("data-wf-lp-url");if(o)return g(o.replace("{term}",n),{cache:1,cacheStrategy:"cacheFirst",useRid:0}).then(function(r){var n=e.getAttribute(h+"lp-saved-url"),o=r[0];if(!o)return e;var a=o.woeid;return a+="",e.setAttribute("data-value",a),e.setAttribute("data-user-input",i),n?g(n,{body:JSON.stringify({requests:{g0:{resource:"WeatherLocationService.favoriteLocation",operation:"create",params:{woeid:a,term:t}}}})}).catch(function(e){}):e}).then(function(){return e}).catch(function(){return e})}}return e}},{key:"focus",value:function(){var e=this;if(!this._util.elementToFocus){var t=b(this._util.elem.getElementsByTagName("input"))[0];if(!t)return null;this._util.elementToFocus=t}this._util.elementToFocus&&setTimeout(function(){e._util.elementToFocus.focus()},100)}},{key:"_handleCustomValidation",value:function(e){var t=this;if(e){if(!this._util.hasCustomEvent)return e;var r=this._util.elem;return new Promise(function(n,i){p(r,"customValidateStatus",function o(a){var s=a.detail;_(r,"customValidateStatus",o),s.success?n(e):(r.classList.add("wafer-form-incomplete"),r.classList.remove("wafer-form-inprogress"),t._util.pending=!1,i())});var o=new CustomEvent("customValidate",{detail:{body:e}});r.dispatchEvent(o)})}}},{key:"submitForm",value:function(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.forcePreference,a=void 0!==o&&o,s=this._util,u=s.action,c=s.type,f="/"!==u&&!a,d="topicPreference"===c,m="myYahooMigrate"===c||"myYahooOnboarding"===c,h="modulePreference"===c||"modulePreferenceClear"===c;if(!f&&h)return void new Promise(function(e){r.e(1).then(function(t){e(r("./src/types/preference.js"))}.bind(null,r)).catch(r.oe)}).then(function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).submitForm.call(n,e)});if(d)return void new Promise(function(e){r.e(0).then(function(t){e(r("./src/types/topic.js"))}.bind(null,r)).catch(r.oe)}).then(function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).submitForm.call(n,e)});if(m)return void new Promise(function(e){r.e(2).then(function(t){e(r("./src/types/myyahoo.js"))}.bind(null,r)).catch(r.oe)}).then(function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).submitForm.call(n,e)});if(!this._util.pending&&u){var p=this._util.elem;this._util.pending=!0,this._state.submitAllowed=!0,p.classList.remove("wafer-form-incomplete"),p.classList.add("wafer-form-inprogress"),this.formValues.then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.values;return n._state.submitAllowed?(e&&e.preventDefault(),r):(p.classList.add("wafer-form-incomplete"),p.classList.remove("wafer-form-inprogress"),void(n._util.pending=!1))}).then(function(e){return n._handleCustomValidation(e)}).then(function(r){if(r){var i=n._util,o=i.boundaryElem,a=i.boundaryErrorClass,s=i.cache,c=i.credentials,f=i.customSuccessClass,d=i.errorClass,m=i.method,b=i.mode,y=i.resultSelector,w=i.successClass,_=i.targetElem,A=i.timeout,O=void 0,C=u;if(f&&p.classList.remove(f),p.classList.remove(w),p.classList.remove(d),o&&o.classList.remove(a),"POST"===m)O=JSON.stringify(r);else{var j=!0;if(window.__waferFormGetUrlify)try{var k=window.__waferFormGetUrlify.call(null,C,r,E,p);k&&(C=k,j=!1)}catch(e){j=!0}j&&(C=C+(-1===C.indexOf("?")?"?":"&")+E(r))}g(C,{mode:b,cache:s,timeout:A,body:O,credentials:c}).then(function(t){if(n._util.pending=!1,_){var r=void 0;if(l.destroy(_),y){var i=document.createElement("div");i.innerHTML=t.html;var o=i.querySelector(y);r=o&&o.innerHTML||t.html}else r=t.html;v(_,r),l.syncAssets(t.assets),l.sync(_)}return f&&p.classList.add(f),p.classList.remove("wafer-form-inprogress"),p.classList.add(w),l.emitWaferEvent("form:submit",{elem:p,meta:{data:t}}),!h||n.submitForm(e,{forcePreference:!0})}).catch(function(e){return n._util.pending=!1,l.emitError({name:t.name,elem:p,meta:{url:C,body:O},stack:e.stack||e.message}),p.classList.remove("wafer-form-inprogress"),p.classList.add(d),o&&o.classList.add(a),!1})}})}}},{key:"destroy",value:function(){var e=this,r=this._util,n=r.elem,i=r.elemsWithOnChange;this.removeInputEvents(),i.forEach(function(t){_(t,"change",e.onchange)}),_(n,"submit",this.handleOnSubmit,{passive:!1}),u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"stateDidUpdate",value:function(){if("focus"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stateAttr)return void this.focus();"stateChange"===this._util.trigger&&this.submitForm()}},{key:"handleInvalidInput",value:function(e){var t=this._util.elem,r=e.target;if(void 0===r.__customError){var n=r.getAttribute(h+"custom-error");n=null===n||void 0===n?0:Number(n),r.__customError=n}t.classList.add("wafer-form-incomplete"),r.classList.add("wafer-form-elem-error"),r.__customError&&r.setCustomValidity(" ")}},{key:"handleInputChange",value:function(e){var t=this._util,r=t.elem,n=t.errorClass,i=e.target;r.classList.remove("wafer-form-incomplete",n),i.classList.remove("wafer-form-elem-error"),i.setCustomValidity("")}},{key:"handleOnChange",value:function(){var e=this;setTimeout(function(){e.submitForm()},100)}},{key:"handleOnSubmit",value:function(e){e.preventDefault()}},{key:"handleSubmit",value:function(e){this.submitForm()}},{key:"formValues",get:function(){var e=this,t=this._util||{},r=t.elemsWithValues,n=void 0===r?[]:r,i=t.includeUncheckedValues,o=t.method;return Promise.all(n.map(function(t){return e.handleElementWithValue(t)})).then(function(t){var r={};return{values:t.reduce(function(t,n){var a=n.getAttribute("data-user-input"),s=n.getAttribute("data-value"),u=n.hasAttribute("required"),c=n.value,l=s||c;if(j&&!n.checkValidity())return e._state.submitAllowed=!1,t;if(u&&!l)return e._state.submitAllowed=!1,t;var f=n.getAttribute(h+"input-format-pattern");if(void 0!==l){var d=n.getAttribute("name"),m=d.split("."),p=n.checked,v=n.type,b=void 0;if("POST"===o&&m.length>1?(d=m.pop(),b=t,m.forEach(function(e){b[e]=b[e]||{},b=b[e]})):b=t,"undefined"===l)return r[d]=!0,t;if(a||l!==c){var g=n.getAttribute("data-assist-src");g&&(b["assist-src"]=g),b[d+"-src"]="assist",b[d+"-term"]=a||c}if(!n.getAttribute("data-wf-on")&&("radio"!==v||p)){if("checkbox"===v){var y=n.getAttribute("data-wf-checkbox-array-key");y?(b[y]=b[y]||(i?{}:[]),p?"on"===l?i?b[y][d]=!0:b[y].push(d):b[y].push(l):i&&(b[y][d]=!1)):"on"===l?b[d]=p:p&&(b[d]=l)}else{var w="",_="";f&&l&&(w=f.replace(/INPUT/g,l)),_=w||l,_&&(b[d]=_)}s&&(b[d+"-dval"]=c,b[d+"-src"]="assist",b[d+"-term"]=a||c)}}return t},{}),undefinedKeyMap:r}})}}]),t}(m);k.events={click:[["trigger-submit","handleSubmit"]]},t.default=k,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return u=i(r("./src/base.js"))}function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=window.wafer.controllers.WaferBaseController,l=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.errorClass,i=void 0===r?"wafer-form-error":r,s=e.root,c=void 0===s?document:s,l=e.selector,f=void 0===l?".wafer-form":l,d=e.successClass,m=void 0===d?"wafer-form-complete":d;o(this,t);var h=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:c,selector:f,props:{errorClass:i,selector:f,successClass:m},WaferClass:(u||n()).default}));return h.sync(),h}return s(t,e),t}(c);t.default=l,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i;t.default=new((i||function(){return i=n(r("./src/controller.js"))}()).default)({selector:".wafer-form"}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 23:55:45 Mar 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:49:26 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.059
  cdx.remote: 0.09
  esindex: 0.01
  LoadShardBlock: 82.465 (6)
  PetaboxLoader3.datanode: 95.959 (7)
  load_resource: 48.251
*/