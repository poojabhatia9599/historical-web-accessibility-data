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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-fetch",[],t):"object"==typeof exports?exports["wafer-fetch"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-fetch"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20220731235252/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in i)return i.value;var o=i.get;if(void 0!==o)return o.call(n)},f=window.wafer,d=f.base,h=f.constants,y=f.utils,v=f.WaferBaseClass,g=h.ATTR_PREFIX,m=y.clearAndSetInnerHTML,p=y.convertNodeListToArray,b=y.fetchWithCache,_=y.findAncestor,w=y.getConfigFromJSONScriptNode,A=y.getFocusableElems,C=y.loadScriptAsync,T=["handleFetchClick","handleMouseenter"],k=["body","cacheKey","target","url"],E=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.errorClass,o=r.selector,c=r.successClass;i(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:n,selector:o,successClass:c},{STATE_ATTRS:k})),f=l._util.url||e.getAttribute(g+"url"),h=e.getAttribute(g+"boundary"),y=e.getAttribute(g+"cache"),v=e.getAttribute(g+"credentials"),m=l._util.cacheKey||e.getAttribute(g+"cache-key"),b=e.getAttribute(g+"cache-strategy")||"networkFirst",A=e.getAttribute(g+"cache-ttl"),C=e.getAttribute(g+"replace"),E=e.getAttribute(g+"result-selector"),O=e.getAttribute(g+"destroy-target-on-failure"),j=e.getAttribute(g+"dependency"),L=j&&document.querySelector(j),S=e.getAttribute(g+"silent"),P=w(e.getElementsByClassName("wafer-fetch-config")[0]),I=e.getAttribute(g+"importance"),x=e.getAttribute(g+"target"),N=e.getAttribute(g+"timeout"),F=e.getAttribute(g+"type")||"default",M=e.getAttribute(g+"use-page-rid"),R=(e.getAttribute(g+"trigger-offset")||"").split(" "),W=u(R,2),B=W[0],D=W[1],q=e.getAttribute(g+"retry-reset-for-state-change"),H=e.getAttribute(g+"delay"),X=e.getAttribute(g+"trigger")||"viewport",K=l._util.body||e.getAttribute(g+"body"),Y=e.getAttribute(g+"retry-count"),V=e.getAttribute(g+"session-retry-count"),z=!1,U=e.getAttribute(g+"set-focus");if(U=null===U||void 0===U?0:Number(U),Y=null===Y||void 0===Y?null:Number(Y),V=null===V||void 0===V?null:Number(V),d.isIORetrySupported?V&&(V=Math.min(V,3)):("interval"===X&&(X="delay"),V=null),"stateChange"!==X||H||(H=0),!Y)switch(X){case"interval":case"onLoad":case"stateChange":case"viewport":Y=2}if("activate"!==X&&"eachClick"!==X&&"interval"!==X&&"stateChange"!==X&&"tabActivate"!==X||(z=!0),!K){var J=p(e.getElementsByClassName("fetch-body")),G=u(J,1),Q=G[0],Z=void 0===Q?null:Q;Z&&(K=Z.innerHTML)}var $=h&&_(e,h),ee=x&&($||document.body).querySelector(x)||e;return l._util=s({boundary:h,target:x},l._util,{body:K,boundaryElem:$,cache:null===y||void 0===y?1:Number(y),cacheKey:m,cacheStrategy:b,cacheTtl:null===A||void 0===A?60:Number(A),config:P,credentials:v,delay:null===H||void 0===H?1e4:Number(H),dependencyElem:L,destroyTargetOnFailure:null===O||void 0===O?1:Number(O),importance:I,timeout:null===N||void 0===N?6e3:Number(N),elem:e,errorClass:n,isPostWithState:e.getAttribute(g+"[body]")||e.getAttribute(g+"state-body"),offsetX:Number(D)||0,offsetY:Number(B)||0,replace:null===C||void 0===C?0:Number(C),resultSelector:E,retryCount:Y,retryResetForStateChange:q,selector:o,sessionRetryCount:V,setFocus:U,shouldAlwaysTrigger:z,targetElem:ee,trigger:X,type:F,silent:null===S||void 0===S?0:Number(S),successClass:c,url:f,usePageRid:Number(M)||0}),l._state={retries:0,status:status},T.forEach(function(e){l[e]=l[e].bind(l)}),"eachClick"===X||"click"===X?l._util.hasClick=!0:"mouseenter"===X?(l._util.hasMouseenter=!0,l.addEventListeners()):"tabActivate"===X&&e.classList.contains("wf-trigger-activated")&&!e.classList.contains(c)?l.fetch():"onLoad"===X&&l.fetch().then(function(e){e&&l.destroy()}),l}return o(t,e),c(t,[{key:"fetchDependency",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=this._util.dependencyElem;return new Promise(function(n){if(!r)return void n();setTimeout(function(){var i=void 0;if(window.wafer.base._wafers.some(function(e){var t=e._options;return!(!t||"wafer-fetch"!==t.selector)&&(i=e,!0)}),!i)return n();var a=i._state.elementInstances.get(r)||{},o=a.instance;if(!o)return n();var s=o._state.status;if(s)return n();t<5&&0===s&&setTimeout(function(){e.fetchDependency(t++).then(function(){n()})},100*(t+1)),s||i.trigger(r).then(function(){e._util.dependencyElem=null,setTimeout(function(){n()},100)}).catch(function(){e._util.status=void 0})},0)})}},{key:"getTargetForBoundary",value:function(){var e=this._util,t=e.boundary,r=e.elem,n=e.target,i=e.targetElem;return n&&(t&&_(r,t)||document.body).querySelector(n)||i}},{key:"getTargetElem",value:function(){var e=this._util,t=e.elem,r=e.target,n=e.targetElem;return r&&t===n&&(this._util.targetElem=this.getTargetForBoundary()),this._util.targetElem}},{key:"fetch",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.disable,i=void 0===r||r,a=t.currentSessionRetryCount,o=void 0===a?0:a,s=this._util,c=s.elem,l=s.shouldAlwaysTrigger,f=s.successClass;if(this._destroyed||!l&&c.classList.contains(f))return Promise.resolve(!1);var h=this._util,y=h.boundaryElem,v=h.errorClass,g=h.replace,p=h.resultSelector,_=h.selector,w=h.sessionRetryCount,C=h.setFocus,T=h.silent,k=h.timeout,E=h.trigger,O=h.type,j=h.usePageRid,L=this.getTargetElem(),S=void 0;if(0!==this._state.status){var P=this._state.retries,I={};return c.classList.add("wafer-fetch-trigger-inprogress"),L.classList.add("wafer-fetch-target-inprogress"),y&&y.classList.add("wafer-fetch-boundary-inprogress"),P&&(I.retries=P),this._state.status=0,this.fetchDependency().then(function(){S=e._util.url;var t=e._util,r=t.body;if(t.isPostWithState&&!r)throw new Error("Post without body");var n=e._util,i=n.cache,a=n.cacheKey,o=n.cacheStrategy,s=n.cacheTtl,u=n.config,c=n.credentials,l=n.importance,f=u.headers||{};return b(S,{body:r,cache:i,cacheKey:a,cacheStrategy:o,cacheTtl:s,clientHeaders:f,credentials:c,importance:l,paramsToNotCache:I,retries:P,timeout:k,useRid:j})}).then(function(t){var r=O.length?O[0].toUpperCase()+O.slice(1):"",a=e["handle"+r],o=t._fetchMeta,s=void 0===o?{}:o,h=n(t,["_fetchMeta"]),b=s.duration,w=s.source;if(i&&(l||c.classList.remove(_.replace(".","")),y&&y.classList.remove("has-wafer-fetch-error","wafer-fetch-boundary-inprogress"),c.classList.remove(v),c.classList.remove("wafer-fetch-trigger-inprogress"),c.classList.add(f),L!==c&&(L.classList.remove("wafer-fetch-target-error"),L.classList.add("wafer-fetch-target-complete")),L.classList.remove("wafer-fetch-target-inprogress")),T)e._state.status=1;else{d.destroy(L,{destroySelf:"click"===E});var k=void 0,j=void 0,P=t.html,I=void 0===P?t.markup:P;if(p){var x=document.createElement("div");x.innerHTML=I;var N=x.querySelector(p);I=N&&N.innerHTML||I}if(g){var F=L.parentNode,M=L.previousElementSibling;L.insertAdjacentHTML("beforebegin",I),F.removeChild(L),k=F,j=M?M.nextElementSibling:k}else m(L,I),k=L,j=L;if(C&&L){var R=A(j),W=u(R,1),B=W[0];B||(L.setAttribute("tabIndex","-1"),B=L||k),setTimeout(function(){return B.focus()},5)}a&&(a.call(e,k),d.syncAssets(t.assets),window.wafer.___debugContent&&window.wafer.___debugContent(t.html||t.markup))}return e._state.retries=0,d.emitLog({name:"WaferFetch",elem:c,meta:{duration:b,source:w,url:S}}),d.emitWaferEvent("fetch:success",{elem:c,meta:{data:h,duration:b,source:w,targetElem:L,url:S}}),!0}).catch(function(t){var r=t||{},n=r.message;if(S=e._util.url,++o,"Not found"!==n&&w&&o<w)return e._state.status=2,c.setAttribute("data-wf-session-retry-counter",o),setTimeout(function(){e.fetch({disable:i,currentSessionRetryCount:o})},k*(o+1)),!1;if("Post without body"===n)return y&&y.class.remove("wafer-fetch-boundary-inprogress"),c.classList.remove("wafer-fetch-trigger-inprogress"),L.classList.remove("wafer-fetch-target-inprogress"),e._state.status=void 0,!1;var a=e._util,s=a.destroyTargetOnFailure,u=a.retryCount;return d.emitError({name:"WaferFetch",elem:c,meta:{message:n,retryCount:u,targetElem:L,url:S},stack:t.stack||t.message}),c.classList.remove("wafer-fetch-trigger-inprogress"),y&&(y.classList.remove("wafer-fetch-boundary-inprogress"),y.classList.add("has-wafer-fetch-error")),c.classList.add(v),L!==c&&(L.classList.add("wafer-fetch-target-error"),L.classList.remove("wafer-fetch-target-complete")),L.classList.remove("wafer-fetch-target-inprogress"),e._state.status=2,!!("Not found"===n&&u||++e._state.retries===u)&&(s?d.destroy(c):e.destroy(),!0)})}return Promise.resolve(!1)}},{key:"handleDefault",value:function(e){this._state.status=1,d.sync(e)}},{key:"handleTdv1",value:function(e){this._util.head=this._util.head||document.getElementsByTagName("head")[0];var t=this._util.head;p(e.querySelectorAll("script")).forEach(function(e){var r=e.getAttribute("type")||"text/javascript",n=e.innerText;n&&"text/javascript"===r&&(t.appendChild(e),C({type:r,text:n},function(r){r||t.removeChild(e)}))}),this._state.status=1,d.sync(e)}},{key:"stateDidUpdate",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.stateAttr,n=this._util,i=n.retryResetForStateChange,a=n.trigger;if("target"===r&&(this._util.targetElem=this.getTargetForBoundary()),"stateChange"===a){i&&(this._state.retries=0);var o=this._util.retryCount;if(this._state.retries===o)return;var s=this._util.delay;return void(s?setTimeout(function(){e.fetch()},s,this):this.fetch())}}},{key:"destroy",value:function(){var e=this._util,r=e.timeoutInstance,n=e.trigger;r&&(clearTimeout(r),this._util.timeoutInstance=null),"mouseenter"===n&&this.removeEventListeners(),l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"handleFetchClick",value:function(e){this._util.hasClick&&this.fetch()}},{key:"handleMouseenter",value:function(e){this._util.hasMouseenter&&this.fetch()}},{key:"config",get:function(){var e=this._util;return{delay:e.delay,offsetX:e.offsetX,offsetY:e.offsetY,trigger:e.trigger}}}]),t}(v);E.events={click:[["has-fetch-click","handleFetchClick"]],mouseenter:[["_self","handleMouseenter"]]},t.default=E,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return u=i(r("./src/base.js"))}function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=function(){function e(e,t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=window.wafer.utils,d=f.elementInView,h=f.throttle,y=window.wafer.base,v=window.wafer.controllers.WaferBaseController,g=function(e,t,r){var n=parseInt(t.getAttribute("data-wf-fetch-iteration-count"),10)||0;return t.setAttribute("data-wf-fetch-iteration-count",n+1),clearTimeout(e._util.timeoutInstance),e._util.timeoutInstance=null,m.call(void 0,e,t,r)},m=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n&&e.fetch().catch(function(e){}),!e._util.timeoutInstance&&(e._util.timeoutInstance=setTimeout(function(){e.fetch().then(function(){return g.call(void 0,e,t,r,n)}).catch(function(){return g.call(void 0,e,t,r,n)})},r))},p=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.errorClass,i=void 0===r?"wafer-fetch-error":r,s=e.root,c=void 0===s?document:s,l=e.selector,f=e.successClass,d=void 0===f?"wafer-fetch-complete":f,y=e.validateDelay,v=void 0===y?25:y;a(this,t);var g=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:c,selector:l,props:{errorClass:i,selector:l,successClass:d},WaferClass:(u||n()).default}));return g._validateWithThrottle=h(function(){g.validate()},v,g),g.sync(),g}return s(t,e),l(t,[{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle()}},{key:"handleVisibilityChange",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this._state.elementInstances,r=!0,n=!1,i=void 0;try{for(var a,o=t.entries()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=c(a.value,2),u=s[0],l=s[1],f=l.instance,d=f.config,h=d.delay;switch(d.trigger){case"interval":e?m.call(this,f,u,h,!0):(clearTimeout(f._util.timeoutInstance),f._util.timeoutInstance=null)}}}catch(e){n=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw i}}}},{key:"didSync",value:function(){var e=this._state,t=e.elementInstances,r=e.mounted;0===t.size||r||(this._state.mounted=!0)}},{key:"trigger",value:function(e){var t=this._state.elementInstances,r=t.get(e);return new Promise(function(e){if(r){var t=r.instance;if(!t)return e();t.fetch().then(function(r){if(!r)return e();var n=t.config.trigger;return"viewport"!==n&&"onLoad"!==n||t.destroy(),e()}).catch(function(){return e()})}})}},{key:"willValidate",value:function(e){var t=this,r=this._state.elementInstances;e.forEach(function(e){var n=r.get(e),i=n.instance,a=i.config,o=a.delay,s=a.trigger,u=a.offsetX,c=a.offsetY;switch(s){case"delay":!i._util.timeoutInstance&&(i._util.timeoutInstance=setTimeout(function(){i.fetch().then(function(e){clearTimeout(i._util.timeoutInstance),e&&i.destroy()}).catch(function(){clearTimeout(i._util.timeoutInstance)})},o));break;case"interval":m.call(t,i,e,o);break;case"viewport":d(e,{offsetX:u,offsetY:c},y.viewport)&&i.fetch().then(function(e){e&&i.destroy()});break;case"click":case"eachClick":e.classList.add("has-fetch-click","has-wafer-click")}})}}]),t}(v);t.default=p,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i;t.default=new((i||function(){return i=n(r("./src/controller.js"))}()).default)({selector:"wafer-fetch"}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 23:52:52 Jul 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:48 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.072
  exclusion.robots.policy: 0.061
  cdx.remote: 0.094
  esindex: 0.011
  LoadShardBlock: 203.328 (6)
  PetaboxLoader3.datanode: 233.199 (7)
  load_resource: 124.803
  PetaboxLoader3.resolve: 68.907
*/