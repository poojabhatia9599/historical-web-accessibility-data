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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-fetch",[],t):"object"==typeof exports?exports["wafer-fetch"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-fetch"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20190301004837/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function e(t,r,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,r,n)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(n)},l=window.wafer,f=l.base,h=l.constants,d=l.utils,y=l.WaferBaseClass,v=h.ATTR_PREFIX,p=d.convertNodeListToArray,b=d.fetchWithCache,m=d.findAncestor,g=d.loadScriptAsync,_=["handleFetchClick"],w=["body","cacheKey","url"],C=function(e){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.errorClass,c=r.selector,u=r.successClass;n(this,t);var l=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:o,selector:c,successClass:u},{STATE_ATTRS:w})),h=l._util.url||e.getAttribute(v+"url"),d=e.getAttribute(v+"boundary"),y=e.getAttribute(v+"cache"),b=e.getAttribute(v+"cache-key"),g=e.getAttribute(v+"cache-strategy")||"networkFirst",C=e.getAttribute(v+"cache-ttl"),k=e.getAttribute(v+"delay"),T=e.getAttribute(v+"replace"),A=e.getAttribute(v+"result-selector"),j=e.getAttribute(v+"silent"),O=e.getAttribute(v+"target"),S=e.getAttribute(v+"timeout"),x=e.getAttribute(v+"type")||"default",I=(e.getAttribute(v+"trigger-offset")||"").split(" "),L=s(I,2),P=L[0],E=L[1],N=e.getAttribute(v+"trigger")||"viewport",M=e.getAttribute(v+"body"),R=e.getAttribute(v+"retry-count"),W=e.getAttribute(v+"session-retry-count"),F=!1;if(R=null===R||void 0===R?null:Number(R),W=null===W||void 0===W?null:Number(W),f.isIORetrySupported?W&&(W=Math.min(W,3)):("interval"===N&&(N="delay"),W=null),!R)switch(N){case"interval":case"stateChange":case"viewport":R=2}if("activate"!==N&&"eachClick"!==N&&"interval"!==N&&"stateChange"!==N&&"tabActivate"!==N||(F=!0),!M){var X=p(e.getElementsByClassName("fetch-body")),H=s(X,1),Y=H[0],q=void 0===Y?null:Y;q&&(M=q.innerHTML)}return l._util=a({},l._util,{body:M,cache:null===y||void 0===y?1:Number(y),cacheKey:b,cacheStrategy:g,cacheTtl:null===C||void 0===C?60:Number(C),delay:null===k||void 0===k?1e4:Number(k),timeout:null===S||void 0===S?6e3:Number(S),elem:e,errorClass:o,hasClick:"eachClick"===N||"click"===N,offsetX:Number(E)||0,offsetY:Number(P)||0,replace:null===T||void 0===T?0:Number(T),resultSelector:A,retryCount:R,targetElem:O&&(d&&m(e,d)||document.body).querySelector(O)||e,selector:c,sessionRetryCount:W,shouldAlwaysTrigger:F,trigger:N,type:x,url:h,silent:null===j||void 0===j?0:Number(j),successClass:u}),l._state={retries:0,status:status},_.forEach(function(e){l[e]=l[e].bind(l)}),l}return o(t,e),c(t,[{key:"fetch",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.disable,i=void 0===n||n,o=r.currentSessionRetryCount,a=void 0===o?0:o,s=this._util,c=s.body,u=s.cache,l=s.cacheKey,h=s.cacheStrategy,d=s.cacheTtl,y=s.elem,v=s.errorClass,p=s.replace,m=s.resultSelector,g=s.selector,_=s.sessionRetryCount,w=s.shouldAlwaysTrigger,C=s.silent,k=s.successClass,T=s.targetElem,A=s.timeout,j=s.type,O=s.url;if(!w&&y.classList.contains(k))return Promise.resolve(!0);if(0!==this._state.status){var S=this._state.retries,x={};return y.classList.add("wafer-fetch-trigger-inprogress"),T.classList.add("wafer-fetch-target-inprogress"),S&&(x.retries=S),this._state.status=0,b(O,{body:c,cache:u,cacheKey:l,cacheStrategy:h,cacheTtl:d,paramsToNotCache:x,timeout:A}).then(function(r){var n=j.length?j[0].toUpperCase()+j.slice(1):"",o=e["handle"+n],a=r._fetchMeta||{},s=a.duration,c=a.source;if(i&&(w||y.classList.remove(g.replace(".","")),y.classList.remove(v),y.classList.remove("wafer-fetch-trigger-inprogress"),y.classList.add(k),T.classList.remove("wafer-fetch-target-inprogress")),C)e._state.status=1;else{f.destroy(T,{destroySelf:!w});var u=void 0,l=r.html,h=void 0===l?r.markup:l;if(m){var d=document.createElement("div");d.innerHTML=h;var b=d.querySelector(m);h=b&&b.innerHTML||h}if(p){var _=T.parentNode;T.insertAdjacentHTML("beforebegin",h),_.removeChild(T),u=_}else T.innerHTML=h,u=T;o&&(o.call(e,u),window.wafer.___debugContent&&window.wafer.___debugContent(r.html||r.markup))}return e._state.retries=0,f.emitLog({name:t.constructor.name,elem:y,meta:{duration:s,source:c,url:O}}),f.emitWaferEvent("fetch:success",{elem:y,meta:{duration:s,source:c,url:O}}),!0}).catch(function(r){if(++a,_&&a<_)return e._state.status=2,y.setAttribute("data-wf-session-retry-counter",a),void setTimeout(function(){e.fetch({disable:i,currentSessionRetryCount:a})},A*(a+1));var n=e._util.retryCount;return f.emitError({name:t.constructor.name,elem:y,meta:{url:O},stack:r.stack}),y.classList.remove("wafer-fetch-trigger-inprogress"),y.classList.add(v),T.classList.remove("wafer-fetch-target-inprogress"),++e._state.retries===n&&f.destroy(T),e._state.status=2,!1})}return Promise.resolve(!1)}},{key:"handleDefault",value:function(e){this._state.status=1,f.sync(e)}},{key:"handleTdv1",value:function(e){this._util.head=this._util.head||document.getElementsByTagName("head")[0];var t=this._util.head;p(e.querySelectorAll("script")).forEach(function(e){var r=e.getAttribute("type")||"text/javascript",n=e.innerText;n&&"text/javascript"===r&&(t.appendChild(e),g({type:r,text:n},function(r){r||t.removeChild(e)}))}),this._state.status=1,f.sync(e)}},{key:"stateDidUpdate",value:function(){if("stateChange"===this._util.trigger){var e=this._util.retryCount;if(this._state.retries===e)return;this.fetch()}}},{key:"destroy",value:function(){var e=this._util.timeoutInstance;e&&(clearTimeout(e),this._util.timeoutInstance=null),u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"handleFetchClick",value:function(e){this._util.hasClick&&this.fetch()}},{key:"config",get:function(){var e=this._util;return{delay:e.delay,offsetX:e.offsetX,offsetY:e.offsetY,trigger:e.trigger}}}]),t}(y);C.events={click:[["has-click","handleFetchClick"]]},t.default=C,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return c=i(r("./src/base.js"))}function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c,u=function(){function e(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=window.wafer.utils,h=f.elementInView,d=f.throttle,y=window.wafer.base,v=window.wafer.controllers.WaferBaseController,p=function(e,t,r){var n=parseInt(t.getAttribute("data-wf-fetch-iteration-count"),10)||0;return t.setAttribute("data-wf-fetch-iteration-count",n+1),clearTimeout(e._util.timeoutInstance),e._util.timeoutInstance=null,b.call(void 0,e,t,r)},b=function(e,t,r){!e._util.timeoutInstance&&(e._util.timeoutInstance=setTimeout(function(){e.fetch().then(function(){return p.call(void 0,e,t,r)}).catch(function(){return p.call(void 0,e,t,r)})},r))},m=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.errorClass,i=void 0===r?"wafer-fetch-error":r,s=e.root,u=void 0===s?document:s,l=e.selector,f=e.successClass,h=void 0===f?"wafer-fetch-complete":f,y=e.validateDelay,v=void 0===y?25:y;o(this,t);var p=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:u,selector:l,props:{errorClass:i,selector:l,successClass:h},WaferClass:(c||n()).default}));return p._validateWithThrottle=d(function(){p.validate()},v,p),p.sync(),p}return s(t,e),l(t,[{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle()}},{key:"handleVisibilityChange",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this._state.elementInstances,r=!0,n=!1,i=void 0;try{for(var o,a=t.entries()[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=u(o.value,2),c=s[0],l=s[1],f=l.instance,h=f.config,d=h.delay;switch(h.trigger){case"interval":e?b.call(this,f,c,d):(clearTimeout(f._util.timeoutInstance),f._util.timeoutInstance=null)}}}catch(e){n=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw i}}}},{key:"didSync",value:function(){var e=this._state,t=e.elementInstances,r=e.mounted;0===t.size||r||(this._state.mounted=!0)}},{key:"trigger",value:function(e){var t=this._state.elementInstances.get(e);if(t){t.instance.fetch()}}},{key:"willValidate",value:function(){var e=this,t=this._state.elementInstances,r=!0,n=!1,i=void 0;try{for(var o,a=t.entries()[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)!function(){var r=u(o.value,2),n=r[0],i=r[1],a=i.instance,s=a.config,c=s.delay,l=s.trigger,f=s.offsetX,d=s.offsetY;switch(l){case"delay":!a._util.timeoutInstance&&(a._util.timeoutInstance=setTimeout(function(){a.fetch().then(function(e){clearTimeout(a._util.timeoutInstance),e&&(a.destroy(),t.delete(n))}).catch(function(){clearTimeout(a._util.timeoutInstance)})},c));break;case"interval":b.call(e,a,n,c);break;case"viewport":h(n,{offsetX:f,offsetY:d},y.viewport)&&a.fetch().then(function(e){e&&(a.destroy(),t.delete(n))});break;case"onLoad":a.fetch().then(function(e){e&&(a.destroy(),t.delete(n))});break;case"click":case"eachClick":n.classList.add("has-click")}}()}catch(e){n=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw i}}}}]),t}(v);t.default=m,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i;t.default=new((i||function(){return i=n(r("./src/controller.js"))}()).default)({selector:"wafer-fetch"}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 00:48:37 Mar 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:25:11 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 106.598
  exclusion.robots: 0.086
  exclusion.robots.policy: 0.075
  cdx.remote: 0.068
  esindex: 0.012
  LoadShardBlock: 75.718 (3)
  PetaboxLoader3.datanode: 89.823 (4)
  load_resource: 80.916
  PetaboxLoader3.resolve: 46.819
*/