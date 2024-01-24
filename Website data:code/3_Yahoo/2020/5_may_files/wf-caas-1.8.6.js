!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-caas",[],t):"object"==typeof exports?exports["wafer-caas"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-caas"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,a){"use strict";function r(){return o=a("./src/utils.js")}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=function(){function e(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw i}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),f=window.wafer,d=f.base,v=f.constants,h=f.utils,m=f.WaferBaseClass,w=v.ATTR_PREFIX,p=h.convertNodeListToArray,y=h.fetchWithCache,g=h.getConfigFromJSONScriptNode,_=h.loadCSSSync,b=h.loadScriptAsync,C=["caas-category-label","caas-collapsed","caas-url","caas-uuid"],A=/^https:\/\/s.yimg.com\/(os|aaq)\/c/,E=function(e){function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.caasConfig,s=a.errorClass,o=a.selector,u=a.successClass;n(this,t);var f=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:s,selector:o,successClass:u},{STATE_ATTRS:C})),d=e.getAttribute(w+"caas-cache"),v=e.getAttribute(w+"caas-collapsed"),h=e.getAttribute(w+"caas-url"),m=e.getAttribute(w+"caas-uuid"),p=e.getAttribute(w+"caas-cache-strategy")||"cacheFirst",y=e.getAttribute(w+"caas-cache-ttl"),_=e.getAttribute(w+"caas-category-label"),b=e.getAttribute("href"),A=e.getAttribute(w+"caas-prefetch"),E=e.getAttribute(w+"caas-load-assets"),k=e.getAttribute(w+"caas-timeout"),P=e.getAttribute(w+"caas-type")||"default",j=e.getAttribute(w+"caas-wrapper"),S=e.getAttribute(w+"caas-dependency"),L=S&&document.querySelector(S),O=(e.getAttribute(w+"caas-trigger-offset")||"").split(" "),T=l(O,2),I=T[0],M=T[1],N=e.getAttribute(w+"caas-trigger")||"viewport";if(f._util=c({},f._util,{"caas-collapsed":null===v||void 0===v?0:Number(v),"caas-url":h,"caas-uuid":m,cache:null===d||void 0===d?1:Number(d),caasConfig:r,cacheStrategy:p,cacheTtl:null===y||void 0===y?300:Number(y),categoryLabel:_,dependencyElem:L,isPrefetch:null===A||void 0===A?0:Number(A),timeout:null===k||void 0===k?6e3:Number(k),elem:e,errorClass:s,href:b,type:P,loadAssets:null===E||void 0===E?0:Number(E),offsetX:Number(M)||0,offsetY:Number(I)||0,selector:o,successClass:u,trigger:N,wrapper:j}),m&&f._util.isPrefetch&&window.__waferCaasCollection.addAndBeaconDuplicateId(m),f._state={status:status},"sidekick"===P){var x=e.getAttribute(w+"caas-second-node"),W=x&&document.getElementById(x);W&&(f._util.secondNode=W)}else"renderedArticle"===P&&setTimeout(function(){var t=e.getElementsByClassName("wafer-caas-data")[0],a=t&&g(t);f.handleRenderedArticle(a)},0);return f}return s(t,e),u(t,[{key:"loadCaasAssets",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise(function(r){var n=e._util.type,i="sidekick"===n?"CAAS_SIDEKICK":"CAAS",s=void 0,o=!0,c=!0;window.__caasModules=window.__caasModules||{},t.forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,a=e.asset;"js"===t&&a.value&&(o=!1),"css"===t&&(c=!1)}),t.forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=e.asset;s=(void 0===n?{}:n).value,A.test(s)&&("js"===t?b({src:s},function(){o=!0,c&&r()},i):"css"===t&&(window.__caasModules[i]?(c=!0,o&&r()):(window.__caasModules[i]=!0,_({src:s,text:a},function(){c=!0,o&&r()}))))})})}},{key:"updateCategoryLabel",value:function(){var e=this._util,t=e["caas-category-label"],a=e.elem;if(a&&t){var r=p(a.getElementsByClassName("caas-category-label"))[0];r&&(r.innerHTML=t)}}},{key:"fetch",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(t.disable,this._util["caas-url"]),r=this._util["caas-uuid"];if(!a&&!r)return Promise.reject(new Error("uuid and url is missing"));var n=this._util,i=n.dependencyElem,s=n.successClass;if(i&&!i.classList.contains(s))return Promise.reject(new Error("dependency not yet complete"));var o=this._util,c=o.caasConfig,l=void 0===c?{}:c,u=o.cache,f=o.cacheStrategy,v=o.cacheTtl,h=o.elem,m=o.errorClass,w=o.secondNode,g=o.timeout,_=o.type,b=r+":"+l.contextParams;if(h.classList.contains(s))return Promise.resolve(!0);if(0!==this._state.status){var C=!1;if(a){var A=-1===a.indexOf("?")?"?":"&";a=a+A+l.contextParams}else a=(l.caasUrl||"https://www.yahoo.com/caas/content/article/")+"?uuid="+r+"&"+l.contextParams;return h.classList.add("wafer-caas-trigger-inprogress"),this._state.status=0,new Promise(function(t,n){if(!e._util.loadAssets&&!window.CAAS)return void n(new Error("CAAS Base is missing"));if("default"===_){var i=window.__waferCaasCollection.get(r);if(i)return C=!0,void t(i)}y(a,{cache:u,cacheKey:b,cacheStrategy:f,cacheTtl:v,timeout:g}).then(function(e){t(e)}).catch(function(e){n(e)})}).then(function(t){var a=t.assets;if(!e._util.loadAssets||!a.length)return t;var r=t.style;return e.loadCaasAssets(a,r).then(function(){return t})}).then(function(t){var n=_.length?_[0].toUpperCase()+_.slice(1):"",i=e["handle"+n],o=t._fetchMeta||{},c=o.duration,l=o.source;d.destroy(h,{destroySelf:!1});var u=void 0;if("default"===_){var f=t||{},v=f.assets,m=f.items,y=void 0===m?[]:m,g={};y.length>1?y.some(function(e){return((e||{}).data||{}).partnerData.uuid===r&&(g=e,!0)}):g=y[0],u=(g||{}).markup,h.innerHTML=u,!C&&window.__waferCaasCollection.set(r,{assets:v,items:[g]})}else if("sidekick"===_)if(u=t.markup,w){var b=document.createElement("div"),A=document.createElement("div");b.innerHTML=u,A.innerHTML=u;for(var E=p(b.getElementsByClassName("sidekick-item")),k=E.length,P=Math.round(k/2),j=P+1;j<k;j++){var S=E[j].parentNode;S.parentNode.removeChild(S)}h.innerHTML=b.innerHTML;for(var L=p(A.getElementsByClassName("sidekick-item")),O=0;O<=P;O++){var T=L[O].parentNode;T.parentNode.removeChild(T)}h.innerHTML=b.innerHTML,w.innerHTML=A.innerHTML}else h.innerHTML=u;if(e._util["caas-collapsed"]){var I=p(h.getElementsByClassName("caas-body-wrapper"))[0];I&&I.classList.add("caas-body-collapsed")}return e.updateCategoryLabel(),i&&i.call(e,h,t),h.classList.remove("wafer-caas-trigger-inprogress"),h.classList.add(s),d.emitLog({name:"WaferCaas",elem:h,meta:{duration:c,source:C?"MEMORY":l,url:a}}),!0}).catch(function(t){return d.emitWaferEvent("caas:"+("default"===_?"article":_)+":error",{elem:h,meta:{url:a,uuid:r},stack:t.stack}),h.classList.remove("wafer-caas-trigger-inprogress"),h.classList.add(m),h.classList.remove(s),d.destroy(h),e._state.status=2,!1})}return Promise.resolve(!1)}},{key:"handleSidekick",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this._util,r=a["caas-url"],n=a.elem,i=a.secondNode;if(!t.markup)return void d.emitWaferEvent("caas:sidekick:error",{elem:n,meta:{url:r}});d.emitWaferEvent("caas:sidekick:init",{elem:n,meta:{url:r}}),this._state.status=1,d.sync(e),i&&d.sync(i)}},{key:"handleRenderedArticle",value:function(e){var t=this._util,a=t["caas-uuid"],r=t.elem,n=t.successClass;if(window.__waferCaasCollection.set(a,{items:[{data:{partnerData:c({},e,{uuid:a})}}]}),this.handleDefault(r),d.destroy(r,{destroySelf:!1}),this._util["caas-collapsed"]){var i=p(r.getElementsByClassName("caas-body-wrapper"))[0];i&&i.classList.add("caas-body-collapsed")}this.updateCategoryLabel(),r.classList.add(n),d.emitLog({name:"WaferCaas",elem:r,meta:{}})}},{key:"handleDefault",value:function(e){var t=this,a=this._util,n=a["caas-uuid"],i=a.elem,s=a.type,c=window.__waferCaasCollection.get(n)||{},u=c.items,f=void 0===u?[]:u,v=l(f,1),h=v[0];h=void 0===h?{}:h;var m=h.data,w=h.markup;if(!("renderedArticle"===s||w&&m))return void d.emitWaferEvent("caas:article:error",{elem:i,meta:{uuid:n}});var p=m.partnerData;if(window._caasInstance)window._caasInstance.sync(),d.emitWaferEvent("caas:article:sync",{elem:i,meta:{data:p,instance:window._caasInstance}});else{var g=this._util.wrapper,_=window.wafer.wafers["wafer-video"];_&&(!0===_.__esModule?_.default.pause("wafer-caas"):_.pause("wafer-caas")),window._caasInstance=new window.CAAS.BASE({container:g}),window._caasInstance.on("link:clicked",function(e){if(e.isYahoo){var a=t._util.caasConfig,s=void 0===a?{}:a,c=s.contextParams,u=void 0===c?{}:c,f=(s.caasUrl||"https://www.yahoo.com/caas/content/article/")+"?url="+e.href+"&"+u;return d.emitWaferEvent("caas:yahooLink:clicked",{elem:i,meta:{data:e,instance:window._caasInstance}}),y(f,{timeout:2e3}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.items,a=void 0===t?[]:t,n=e.assets;return(0,(o||r()).handlePrefetchedData)(a,n,u)}).then(function(t){var a=l(t,1),r=a[0];r=void 0===r?{}:r;var s=r.data,o=s.partnerData,c=void 0===o?{}:o,u=c.uuid;d.emitWaferEvent("caas:yahooLink:fetched",{elem:i,meta:{data:Object.assign({parentUuid:n,uuid:u},e),instance:window._caasInstance}})}).catch(function(){d.emitWaferEvent("caas:link:clicked",{elem:i,meta:{data:e,instance:window._caasInstance}})})}d.emitWaferEvent("caas:link:clicked",{elem:i,meta:{data:e,instance:window._caasInstance}})}),d.emitWaferEvent("caas:article:init",{elem:i,meta:{data:p,instance:window._caasInstance}})}this._state.status=1,d.sync(e)}},{key:"handleArticleInViewport",value:function(){var e=this._util,t=e.elem,a=e.type,r=e["caas-uuid"],n=window.__waferCaasCollection.get(r)||{},i=n.items,s=void 0===i?[]:i,o=l(s,1),c=o[0];c=void 0===c?{}:c;var u=c.data,f=c.markup;if("renderedArticle"===a||f&&u){var v=u.partnerData;d.emitWaferEvent("caas:article:inview",{elem:t,meta:{data:v,instance:window._caasInstance}})}}},{key:"stateDidUpdate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stateAttr;if("caas-collapsed"!==t){if("caas-category-label"===t)return void this.updateCategoryLabel();"stateChange"===this._util.trigger&&this.fetch().catch(function(){})}else{if(!this._util.elem)return;if(this._util["caas-collapsed"]=Number(this._util["caas-collapsed"]),this._util["caas-collapsed"]){var a=p(this._util.elem.getElementsByClassName("caas-body-wrapper"))[0];a&&a.classList.add("caas-body-collapsed")}}}},{key:"config",get:function(){var e=this._util,t=e["caas-url"],a=e["caas-uuid"];return{caasConfig:e.caasConfig,href:e.href,isPrefetch:e.isPrefetch,offsetX:e.offsetX,offsetY:e.offsetY,selector:e.selector,trigger:e.trigger,type:e.type,url:t,uuid:a}}}]),t}(m);t.default=E,e.exports=t.default},"./src/controller.js":function(e,t,a){"use strict";function r(){return l=i(a("./src/base.js"))}function n(){return u=a("./src/utils.js")}function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u,f=function(){function e(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw i}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),v=window.wafer,h=v.base,m=v.utils,w=m.elementInView,p=m.fetchWithCache,y=m.getConfigFromJSONScriptNode,g=m.throttle,_=window.wafer.controllers.WaferBaseController;window.__waferCaasCollection=function(){var e=new Map,t=[],a=new Map;return{addAndBeaconDuplicateId:function(t){if(e.has(t))return void setTimeout(function(){h.emitWaferEvent("caas:prefetch:duplicate:id",{meta:{uuid:t}})},0);e.set(t,!0)},set:function(e,r){t.push(e),a.set(e,r)},freeMemory:function(e){if(!(t.length<25)){var r=t[0];window.wafer.db.get(r+":"+e,"fetch",{timeout:1e3}).then(function(e){if(!e)return void h.emitWaferEvent("caas:set:remove:failed");var n=t.indexOf(r);t.splice(n,1),a.delete(r)}).catch(function(){h.emitWaferEvent("caas:set:indexeddb:failed")})}},get:function(e){return a.get(e)}}}();var b=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.errorClass,n=void 0===a?"wafer-caas-error":a,i=e.root,c=void 0===i?document:i,u=e.selector,f=e.successClass,d=void 0===f?"wafer-caas-complete":f,v=e.validateDelay,h=void 0===v?25:v;s(this,t);var m=y(document.getElementById("wafer-caas-config")),w=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:c,selector:u,props:{caasConfig:m,errorClass:n,selector:u,successClass:d},WaferClass:(l||r()).default}));return w._validateWithThrottle=g(function(){w.validate()},h,w),w._state=w._state||{},w.sync(),w.addPublicAPIs(m),w}return c(t,e),d(t,[{key:"addPublicAPIs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.contextParams,a=void 0===t?{}:t;window.wafer.caas||(window.wafer.caas={getData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Promise.all(e.map(function(e){return new Promise(function(t){var r=window.__waferCaasCollection.get(e);if(r){var n=f(r.items,1),i=n[0].data;return t((void 0===i?{}:i).partnerData||{})}if(!window.wafer.db)return t({});window.wafer.db.get(e+":"+a,"fetch",{timeout:3e3}).then(function(e){try{var a=JSON.parse(e.value),r=a.items,n=f(r,1),i=n[0].data;return t((void 0===i?{}:i).partnerData||{})}catch(e){return t({})}}).catch(function(e){t({})})})}))}})}},{key:"prefetch",value:function(){if(window.CAAS){var e=this._state.elementInstances,t={},a=[],r=[],i=void 0,s=void 0,o=void 0,c=0,l=0,f=!0,d=!1,v=void 0;try{for(var m,w=e.values()[Symbol.iterator]();!(f=(m=w.next()).done);f=!0){var y=m.value;a[c]=a[c]||[];var g=y.instance,_=g.config,b=_.caasConfig,C=void 0===b?{}:b,A=_.href,E=_.isPrefetch,k=_.uuid;if(o=o||C.caasUrl,s=s||C.contextParams||"",E&&k){var P=t[k];!P&&a[c].push({href:A,uuid:k}),t[k]=!0,g.destroy(),!P&&++l>=10&&(l=0,c++)}}}catch(e){d=!0,v=e}finally{try{!f&&w.return&&w.return()}finally{if(d)throw v}}return Promise.all(a.map(function(e){var t=e.map(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).uuid});if(t.length)return i=(o||"https://www.yahoo.com/caas/content/article/")+"?uuid="+t.join(",")+"&"+s,p(i,{cache:0}).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.items,i=void 0===a?[]:a,o=t.assets;return(0,(u||n()).handlePrefetchedData)(i,o,s,function(t){var a=e[t].href;a&&r.push(a)})})})).then(function(){if(r.length)return Promise.all(r.map(function(e){return p((o||"https://www.yahoo.com/caas/content/article/")+"?url="+e+"&"+s,{cache:0}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.items,a=void 0===t?[]:t,r=e.assets;return(0,(u||n()).handlePrefetchedData)(a,r,s)})}))}).then(function(){h.emitWaferEvent("caas:prefetch:success",{meta:{url:i}})}).catch(function(){h.emitWaferEvent("caas:prefetch:failed",{meta:{url:i}})})}}},{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle()}},{key:"didSync",value:function(){var e=this,t=this._state,a=t.elementInstances,r=t.mounted;0===a.size||r||(this._state.mounted=!0),setTimeout(function(){e.prefetch()},10)}},{key:"trigger",value:function(e){var t=this._state.elementInstances.get(e);if(t){var a=t.instance;if("renderedArticle"===a.config.type)return;a.fetch()}}},{key:"willValidate",value:function(e){var t=this,a=this._state.elementInstances;e.forEach(function(e){var r=a.get(e),n=r.instance;if(!n.config.isPrefetch){var i=n.config,s=i.offsetX,o=i.offsetY,c=i.selector,l=i.trigger,u=i.type,f=w(e,{offsetX:s,offsetY:o},h.viewport);if("renderedArticle"!==u)switch(l){case"viewport":1!==n._state.status&&f&&n.fetch().then(function(t){t&&c&&e.classList.remove(c.replace(".",""))}).catch(function(){});break;case"onLoad":n.fetch().then(function(t){t&&c&&e.classList.remove(c.replace(".",""))}).catch(function(){})}f&&t._state.activeElem===e||t._state.activeElem&&w(t._state.activeElem,{offsetX:s,offsetY:o},h.viewport)||1!==n._state.status||!f||"default"!==u&&"renderedArticle"!==u||t._state.activeElem!==e&&(n.handleArticleInViewport(),t._state.activeElem=e)}})}},{key:"didDestroy",value:function(e){this._state.activeElem===e&&(this._state.activeElem=null);var t=!0,a=this._state.elementInstances,r=!0,n=!1,i=void 0;try{for(var s,o=a.values()[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var c=s.value,l=c.instance.config,u=l.isPrefetch;if("default"===l.type&&!u){t=!1;break}}}catch(e){n=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw i}}if(t){var f=window.wafer.wafers["wafer-video"];window._caasInstance&&(window._caasInstance.destructor(),window._caasInstance=null),f&&(!0===f.__esModule?f.default.resume("wafer-caas"):f.resume("wafer-caas"))}}}]),t}(_);t.default=b,e.exports=t.default},"./src/entry.js":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n;t.default=new((n||function(){return n=r(a("./src/controller.js"))}()).default)({selector:"wafer-caas"}),e.exports=t.default},"./src/utils.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.handlePrefetchedData=function(e,t,a,r){return Promise.all(e.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],i=e.data,s=void 0===i?{}:i,o=s.partnerData;if(!o)return r&&r(n),Promise.resolve();var c=o.uuid,l={assets:t,items:[e]};return window.__waferCaasCollection.set(c,l),window.wafer.db.set({cachedTime:Date.now(),key:c+":"+a,ttl:1200,value:JSON.stringify(l)},"fetch").then(function(t){return t&&window.__waferCaasCollection.freeMemory(a),e}).catch(function(){return e})}))}}})});