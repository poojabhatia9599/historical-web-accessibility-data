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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-caas",[],t):"object"==typeof exports?exports["wafer-caas"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-caas"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20221130223451/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,a){"use strict";function r(){return o=a("./src/utils.js")}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=function(){function e(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw i}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),f=window.wafer,d=f.base,h=f.constants,v=f.utils,w=f.WaferBaseClass,m=h.ATTR_PREFIX,p=v.clearAndSetInnerHTML,g=v.clearTimeout,y=v.convertNodeListToArray,_=v.fetchWithCache,b=v.getConfigFromJSONScriptNode,C=v.getUrlParameterValueByName,k=v.setTimeout,P=["caas-collapsed","caas-url","caas-uuid"],E={},A=function(e){function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.caasConfig,s=a.errorClass,o=a.selector,u=a.successClass;n(this,t);var f=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:s,selector:o,successClass:u},{STATE_ATTRS:P})),d=e.getAttribute(m+"caas-cache"),h=e.getAttribute(m+"caas-collapsed"),v=e.getAttribute(m+"caas-url"),w=e.getAttribute(m+"caas-uuid"),p=e.getAttribute(m+"caas-cache-strategy")||"cacheFirst",g=e.getAttribute(m+"caas-cache-ttl"),y=e.getAttribute("href"),_=e.getAttribute(m+"caas-prefetch"),C=e.getAttribute(m+"caas-prefetch-group"),E=e.getAttribute(m+"caas-timeout"),A=e.getAttribute(m+"caas-type")||"default",S=e.getAttribute(m+"caas-wrapper"),I=e.getAttribute(m+"caas-dependency"),T=I&&document.querySelector(I),j=(e.getAttribute(m+"caas-trigger-offset")||"").split(" "),O=l(j,2),N=O[0],L=O[1],x=e.getAttribute(m+"caas-item-count-balanced"),V=e.getAttribute(m+"caas-target"),W=V&&e.querySelector(V)||e,D=e.getAttribute(m+"caas-trigger")||"viewport";if(f._util=c({},f._util,{"caas-collapsed":null===h||void 0===h?0:Number(h),"caas-url":v,"caas-uuid":w,cache:null===d||void 0===d?1:Number(d),caasConfig:r,cacheStrategy:p,cacheTtl:null===g||void 0===g?300:Number(g),dependencyElem:T,isPrefetch:null===_||void 0===_?0:Number(_),targetElem:W,timeout:null===E||void 0===E?6e3:Number(E),elem:e,errorClass:s,href:y,offsetX:Number(L)||0,offsetY:Number(N)||0,prefetchGroup:C,selector:o,successClass:u,trigger:D,type:A,wrapper:S,isItemCountBalanced:null===x||void 0===x?0:Number(x)}),f._state={halfInView:!1,preInViewTriggered:!1,shouldPrefetchForViewport:"viewportWithPrefetch"===D,status:void 0},"sidekick"===A){var M=e.getAttribute(m+"caas-second-node"),B=M&&document.getElementById(M);B&&(f._util.secondNode=B)}else"renderedArticle"===A&&k(function(){var t=e.getElementsByClassName("wafer-caas-data")[0],a=t&&b(t);f.handleRenderedArticle(a)},0,f);return f}return s(t,e),u(t,[{key:"fetch",value:function(){var e=this,t=this._util["caas-url"],a=this._util["caas-uuid"];if(!t&&!a)return Promise.reject(new Error("uuid and url is missing"));var n=this._util,i=n.dependencyElem,s=n.successClass;if(i&&!i.classList.contains(s))return Promise.reject(new Error("dependency not yet complete"));var c=this._util.elem;if(c.classList.contains(s))return Promise.resolve(!0);var u=this._util,f=u.caasConfig,h=void 0===f?{}:f,v=u.cacheStrategy,w=u.cacheTtl,m=u.errorClass,g=u.secondNode,b=u.targetElem,k=u.timeout,P=u.type,A=a+":1:"+h.contextParams;if(0!==this._state.status){var S=!1;if(t){var I=-1===t.indexOf("?")?"?":"&";t=t+I+h.contextParams}else t=(h.caasUrl||"https://web.archive.org/web/20221130223451/https://www.yahoo.com/caas/content/article/")+"?uuid="+a+"&"+h.contextParams;return t=(0,(o||r()).getCaaSUrlToUse)(t),c.classList.add("wafer-caas-trigger-inprogress"),this._state.status=0,new Promise(function(e,r){if("default"===P){var n=window.__waferCaasCollection.get(a);if(n)return S=!0,void e(n)}var i={cache:0,cacheKey:A,cacheStrategy:v,cacheTtl:w,timeout:k},s=!0;if(-1===t.indexOf("s.yimg.com")&&(i.credentials="include"),"sidekick"===P){var o=C("uuid",t);if(o){var c=o.split(",")[0];c&&(s=!1,window.wafer.caas.getData([c]).then(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=l(a,1),s=n[0],o=s||{},c=o.adMeta,u=o.wikiids,f=c.site_attribute||"";i.body=JSON.stringify({wikis:u,siteAttribute:f}),_(t,i).then(function(t){e(t)}).catch(function(e){r(e)})}))}}s&&_(t,i).then(function(t){e(t)}).catch(function(e){r(e)})}).then(function(e){var t=e.assets;if(!t.length)return e;if("sidekick"!==P&&window.CAAS)return e;var a=e.style,n=E[P];return n?n.then(function(){return e}):(E[P]=(0,(o||r()).loadCaaSAssets)(t,a,P).then(function(){return e}),E[P])}).then(function(r){var n=P.length?P[0].toUpperCase()+P.slice(1):"",i=e["handle"+n],o=r._fetchMeta||{},l=o.duration,u=o.source;d.destroy(c,{destroySelf:!1});var f=void 0;if("default"===P){var h=r||{},v=h.assets,w=h.items,m=void 0===w?[]:w,_={};m.length>1?m.some(function(e){return((e||{}).data||{}).partnerData.uuid===a&&(_=e,!0)}):_=m[0],f=(_||{}).markup,p(b,f),f&&!S&&window.__waferCaasCollection.set(a,{assets:v,items:[_]})}else if("sidekick"===P)if(f=r.markup,g){var C=e._util.isItemCountBalanced,k=document.createElement("div"),E=document.createElement("div");k.innerHTML=f,E.innerHTML=f;for(var A=y(k.getElementsByClassName("sidekick-item")),I=A.length,T=Math.round(I/2)+ +!C,j=T;j<I;j++){var O=A[j].parentNode;O.parentNode.removeChild(O)}p(b,k.innerHTML);for(var N=y(E.getElementsByClassName("sidekick-item")),L=0;L<T;L++){var x=N[L].parentNode;x.parentNode.removeChild(x)}b.innerHTML=k.innerHTML,p(g,E.innerHTML)}else p(b,f);if(e._util["caas-collapsed"]){var V=y(b.getElementsByClassName("caas-body-wrapper"))[0];V&&V.classList.add("caas-body-collapsed")}if(i&&i.call(e,c,r),c.classList.remove("wafer-caas-trigger-inprogress"),c.classList.add(s),d.emitLog({name:"WaferCaas",elem:c,meta:{duration:l,source:S?"MEMORY":u,url:t}}),"default"===P){var W=r.items[0].data.partnerData;d.emitWaferEvent("caas:article:fetch",{elem:c,meta:{data:W,url:t}})}return!0}).catch(function(r){return d.emitWaferEvent("caas:"+("default"===P?"article":P)+":error",{elem:c,meta:{url:t,uuid:a},stack:r.stack||r.message}),c.classList.remove("wafer-caas-trigger-inprogress"),c.classList.add(m),c.classList.remove(s),d.destroy(c),e._state.status=2,!1})}return Promise.resolve(!1)}},{key:"handleSidekick",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this._util,r=a["caas-url"],n=a.elem,i=a.secondNode;if(!t.markup)return void d.emitWaferEvent("caas:sidekick:error",{elem:n,meta:{url:r}});d.emitWaferEvent("caas:sidekick:init",{elem:n,meta:{url:r}}),this._state.status=1,d.sync(e),i&&d.sync(i)}},{key:"handleRenderedArticle",value:function(e){var t=this._util,a=t["caas-uuid"],r=t.elem,n=t.successClass,i=t.targetElem;if(window.__waferCaasCollection.set(a,{items:[{data:{partnerData:c({},e,{uuid:a})}}]}),this.handleDefault(r),this._util["caas-collapsed"]){var s=y(i.getElementsByClassName("caas-body-wrapper"))[0];s&&s.classList.add("caas-body-collapsed")}r.classList.add(n),d.emitLog({name:"WaferCaas",elem:r,meta:{}})}},{key:"handleDefault",value:function(e){var t=this;if(!this._destroyed){var a=this._util,n=a["caas-uuid"],i=a.elem,s=a.type,c=window.__waferCaasCollection.get(n)||{},u=c.items,f=void 0===u?[]:u,h=l(f,1),v=h[0];v=void 0===v?{}:v;var w=v.data,m=v.markup;if(!("renderedArticle"===s||m&&w))return void d.emitWaferEvent("caas:article:error",{elem:i,meta:{hasData:!!w,hasMarkup:!!m,uuid:n}});var p=w.partnerData;if(window._caasInstance)k(function(){t._destroyed||(window._caasInstance.sync(),d.sync(e))},window.__waferCaasRenderInProgress?300:0,this);else{var y=this._util.wrapper;window.wafer.base.pauseVideo("wafer-caas"),window._caasInstance=new window.CAAS.BASE({container:y}),this.handleColorSchemaChange(),window._caasInstance.on("yvideo:scriptLoadingError",function(e){d.emitError({name:"WaferCaas",elem:null,meta:{message:"Could not load js"},stack:e.stack||e.message})}),window._caasInstance.on("link:clicked",function(e){if(e.isYahoo){var a=t._util.caasConfig,s=void 0===a?{}:a,c=s.contextParams,u=void 0===c?{}:c,f=(s.caasUrl||"https://web.archive.org/web/20221130223451/https://www.yahoo.com/caas/content/article/")+"?url="+e.href+"&"+u;return d.emitWaferEvent("caas:yahooLink:clicked",{elem:i,meta:{data:e,instance:window._caasInstance}}),_(f,{timeout:2e3}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.items,a=void 0===t?[]:t,n=e.assets;return(0,(o||r()).handlePrefetchedData)(a,n)}).then(function(t){var a=l(t,1),r=a[0];r=void 0===r?{}:r;var s=r.data,o=s.partnerData,c=void 0===o?{}:o,u=c.uuid;d.emitWaferEvent("caas:yahooLink:fetched",{elem:i,meta:{data:Object.assign({},e,{parentUuid:n,uuid:u}),instance:window._caasInstance}})}).catch(function(){d.emitWaferEvent("caas:link:clicked",{elem:i,meta:{data:e,instance:window._caasInstance}})})}d.emitWaferEvent("caas:link:clicked",{elem:i,meta:{data:e,instance:window._caasInstance}})}),this._state.status=1,d.emitWaferEvent("caas:article:init",{elem:i,meta:{data:p,instance:window._caasInstance}}),d.sync(e)}window.__waferCaasRenderInProgress=!0,g(window.__waferCaasRenderInProgressTimeout),window.__waferCaasRenderInProgressTimeout=k(function(){window.__waferCaasRenderInProgress=!1},300,this),this._state.status=1}}},{key:"handleArticleViewEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"inview";if("pre:inview"===e){if(this._state.preInViewTriggered)return;this._state.preInViewTriggered=!0}else if("half:inview"===e){if(this._state.halfInView)return;this._state.halfInView=!0}else if("half:not:inview"===e){if(!this._state.halfInView)return;this._state.halfInView=!1}else"inview"===e&&(this._state.halfInView=!1);var t=this._util,a=t.elem,r=t.type,n=t["caas-uuid"],i=window.__waferCaasCollection.get(n)||{},s=i.items,o=void 0===s?[]:s,c=l(o,1),u=c[0];u=void 0===u?{}:u;var f=u.data,h=u.markup;if("renderedArticle"===r||h&&f){var v=f.partnerData;d.emitWaferEvent("caas:article:"+e,{elem:a,meta:{data:v,instance:window._caasInstance}})}}},{key:"handleColorSchemaChange",value:function(){var e=window._caasInstance;if(e){var t=window.wafer.base.colorSchema,a=void 0;a="dark"===t?e.componentShouldSwitchToDarkmode:e.componentShouldSwitchToLightmode,a&&a.call(e)}}},{key:"stateDidUpdate",value:function(){if("caas-collapsed"!==(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stateAttr)"stateChange"===this._util.trigger&&this.fetch().catch(function(){});else{if(!this._util.targetElem)return;if(this._util["caas-collapsed"]=Number(this._util["caas-collapsed"]),this._util["caas-collapsed"]){var e=y(this._util.targetElem.getElementsByClassName("caas-body-wrapper"))[0];e&&e.classList.add("caas-body-collapsed")}}}},{key:"config",get:function(){var e=this._util,t=e["caas-url"],a=e["caas-uuid"],r=e.caasConfig,n=e.elem,i=e.href,s=e.isPrefetch,o=e.offsetX,c=e.offsetY,l=e.prefetchGroup,u=e.selector,f=e.trigger,d=e.type;return{caasConfig:r,elem:n,href:i,isPrefetch:s,offsetX:o,offsetY:c,prefetchGroup:l,selector:u,shouldPrefetchForViewport:this._state.shouldPrefetchForViewport,trigger:f,type:d,url:t,uuid:a}}},{key:"shouldPrefetchForViewport",set:function(e){this._state.shouldPrefetchForViewport=e}}]),t}(w);t.default=A,e.exports=t.default},"./src/controller.js":function(e,t,a){"use strict";function r(){return l=i(a("./src/base.js"))}function n(){return u=a("./src/utils.js")}function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u,f=function(){function e(e,t){var a=[],r=!0,n=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw i}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),h=window.wafer,v=h.base,w=h.utils,m=w.elementInView,p=w.fetchWithCache,g=w.getConfigFromJSONScriptNode,y=w.getWaferInstanceForElem,_=w.throttle,b=void 0,C=window.wafer.controllers.WaferBaseController;window.__waferCaasCollection=function(){var e=[],t=new Map,a={};return{set:function(a,r){e.push(a),t.set(a,r)},get:function(e){return a[e]=!0,t.get(e)},clearVisitedNodes:function(){a={}}}}();var k=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.errorClass,n=void 0===a?"wafer-caas-error":a,i=e.root,c=void 0===i?document:i,u=e.selector,f=e.successClass,d=void 0===f?"wafer-caas-complete":f,h=e.validateDelay,v=void 0===h?10:h;s(this,t);var w=g(document.getElementById("wafer-caas-config"));if(w.caasUrl){var m=location,p=m.hostname,y=m.port,b=m.protocol;"localhost"===p||"4443"===y||"https:"!==b||w.mock||(w.caasUrl="/caas/content/article/")}var C=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:c,selector:u,props:{caasConfig:w,errorClass:n,selector:u,successClass:d},WaferClass:(l||r()).default}));return C._validateWithThrottle=_(function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];C.validate.apply(C,t)},v,C),C._state=C._state||{},C._state.lastScrollTop=0,C._state.progressLoader=null,C.sync(),C.addPublicAPIs(w),C}return c(t,e),d(t,[{key:"addPublicAPIs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.contextParams,a=void 0===t?{}:t;window.wafer.caas||(window.wafer.caas={getData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Promise.all(e.map(function(e){return new Promise(function(t){var r=window.__waferCaasCollection.get(e);if(r){var n=f(r.items,1),i=n[0].data;return t((void 0===i?{}:i).partnerData||{})}if(!window.wafer.db)return t({});window.wafer.db.get(e+":1:"+a,"fetch",{timeout:3e3}).then(function(e){try{var a=JSON.parse(e.value),r=a.items,n=f(r,1),i=n[0].data;return t((void 0===i?{}:i).partnerData||{})}catch(e){return t({})}}).catch(function(e){t({})})})}))}})}},{key:"prefetch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!window.wafer.base.isBot){var t=this._state.elementInstances,a={},r=[],i=[],s={},o=void 0,c=void 0,l=void 0,f=0,d=0,h=!0,w=!1,m=void 0;try{for(var g,y=t.values()[Symbol.iterator]();!(h=(g=y.next()).done);h=!0){var _=g.value;r[f]=r[f]||[];var C=_.instance,k=C.config,P=k.caasConfig,E=void 0===P?{}:P,A=k.elem,S=k.href,I=k.isPrefetch,T=k.prefetchGroup,j=k.shouldPrefetchForViewport,O=k.uuid;if(l=l||E.caasUrl,c=c||E.contextParams||"",T){if(!e){s[T]=!0;continue}if(T!==e)continue;c=E[T+"ContextParams"]||c}if((I||j)&&O){var N=a[O]||!!window.__waferCaasCollection.get(O);!N&&r[f].push({href:S,uuid:O}),a[O]=!0,j?(A.classList.add("did-prefetch"),C.shouldPrefetchForViewport=!1):C.destroy(),!N&&++d>=10&&(d=0,f++)}}}catch(e){w=!0,m=e}finally{try{!h&&y.return&&y.return()}finally{if(w)throw m}}for(var L in s)s.hasOwnProperty(L)&&this.prefetch(L);return Promise.all(r.map(function(t){var a=t.map(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).uuid});if(a.length)return o=(l||"https://web.archive.org/web/20221130223451/https://www.yahoo.com/caas/content/article/")+"?uuid="+a.join(",")+"&"+c,o=(0,(u||n()).getCaaSUrlToUse)(o),p(o,{cache:0,timeout:8e3}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.assets,a=e.items,r=void 0===a?[]:a,i={items:r,assets:t};return window.CAAS?i:(b=b||(0,(u||n()).loadCaaSAssets)(t,"","default")).then(function(){return i})}).then(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=a.assets,s=a.items,o=void 0===s?[]:s;return(0,(u||n()).handlePrefetchedData)(o,r,e,function(e){var a=t[e].href;a&&i.push(a)})})})).then(function(){if(i.length)return Promise.all(i.map(function(t){return p((l||"https://web.archive.org/web/20221130223451/https://www.yahoo.com/caas/content/article/")+"?url="+t+"&"+c,{cache:0}).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.items,r=void 0===a?[]:a,i=t.assets;return(0,(u||n()).handlePrefetchedData)(r,i,e)})}))}).then(function(){v.emitWaferEvent("caas:prefetch:success",{meta:{url:o}})}).catch(function(){v.emitWaferEvent("caas:prefetch:failed",{meta:{url:o}})})}}},{key:"_handleArticleInView",value:function(e,t){if(this._state.activeElem!==t){var a=this._state.progressLoader;a&&!a._destroyed||(this._state.progressLoader=y(document.getElementsByClassName("wafer-caas-progress-loader")[0],"wafer-progress-loader")),a=this._state.progressLoader,a&&(a.instance.target=t),e.handleArticleViewEvent(),this._state.activeElem=t}}},{key:"handleScroll",value:function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=1;t=e>this._state.lastScrollTop?1:0,this._state.lastScrollTop=e<=0?0:e,this._validateWithThrottle({scrollDirection:t})}},{key:"handleResize",value:function(){this._validateWithThrottle()}},{key:"didSync",value:function(){var e=this,t=this._state,a=t.elementInstances,r=t.mounted;0===a.size||r||(this._state.mounted=!0),setTimeout(function(){e.prefetch()},10)}},{key:"trigger",value:function(e){var t=this._state.elementInstances.get(e);if(t){var a=t.instance;if("renderedArticle"===a.config.type)return;a.fetch()}}},{key:"handleColorSchemaChange",value:function(){if(this._state&&this._state.mounted){var e=this._state.elementInstances,t=!0,a=!1,r=void 0;try{for(var n,i=e.values()[Symbol.iterator]();!(t=(n=i.next()).done);t=!0){n.value.instance.handleColorSchemaChange()}}catch(e){a=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(a)throw r}}}}},{key:"willValidate",value:function(e){var t=this,a=this._state.elementInstances;e.forEach(function(e){var r=a.get(e),n=r.instance;if(!n.config.isPrefetch){var i=n.config,s=i.offsetX,o=i.offsetY,c=i.selector,l=i.trigger,u=i.type,f=m(e,{offsetX:s,offsetY:o},v.viewport);if("renderedArticle"!==u)switch(l){case"viewport":case"viewportWithPrefetch":1!==n._state.status&&f&&n.fetch().then(function(t){t&&c&&e.classList.remove(c.replace(".",""))}).catch(function(){});break;case"onLoad":n.fetch().then(function(t){t&&c&&e.classList.remove(c.replace(".",""))}).catch(function(){})}var d=!1;if(f){(d=1===n._state.status&&("default"===u||"renderedArticle"===u))&&n.handleArticleViewEvent("pre:inview");var h=t._state.activeElem;if(h===e){if(d){var w=h.getBoundingClientRect(),p=w.top,g=p+h.offsetHeight/2+document.documentElement.scrollTop;window.scrollY>=g?n.handleArticleViewEvent("half:inview"):n.handleArticleViewEvent("half:not:inview")}return}}t._state.activeElem&&m(t._state.activeElem,{offsetX:s,offsetY:o},v.viewport)||d&&t._handleArticleInView(n,e)}})}},{key:"didDestroy",value:function(){var e=!0,t=this._state.elementInstances,a=!0,r=!1,n=void 0;try{for(var i,s=t.values()[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var o=i.value,c=o.instance.config,l=c.isPrefetch;if("default"===c.type&&!l){e=!1;break}}}catch(e){r=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw n}}e&&(window._caasInstance&&(window._caasInstance.destructor(),window._caasInstance=null,window.__waferCaasCollection.clearVisitedNodes()),window.wafer.base.resumeVideo("wafer-caas"))}}]),t}(C);t.default=k,e.exports=t.default},"./src/entry.js":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n;t.default=new((n||function(){return n=r(a("./src/controller.js"))}()).default)({selector:"wafer-caas"}),e.exports=t.default},"./src/utils.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=window.wafer,n=r.features,i=r.utils,s=i.getUrlParameterValueByName,o=i.loadCSSSync,c=i.loadScriptAsync,l=/^https:\/\/s.yimg.com\/(os|aaq)\/c/,u=function(e,t,a){var r=new RegExp("([?&])"+t+"=.*?(&|$)","i"),n=-1!==e.indexOf("?")?"&":"?";return e.match(r)?e.replace(r,"$1"+t+"="+a+"$2"):e+n+t+"="+a};t.handlePrefetchedData=function(e,t,a,r){return Promise.all(e.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],i=e.data,s=void 0===i?{}:i,o=e.markup,c=s.partnerData;if(!c||!o)return r&&r(n),Promise.resolve();a&&(e.data.partnerData.groupName=a);var l=c.uuid,u={assets:t,items:[e]};return window.__waferCaasCollection.set(l,u),e}))},t.loadCaaSAssets=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments[2];return new Promise(function(r){var n="sidekick"===a?"CAAS_SIDEKICK":"CAAS",i=void 0,s=!0,u=!0;window.__caasModules=window.__caasModules||{},e.forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,a=e.asset;"js"===t&&a.value&&(s=!1),"css"===t&&(u=!1)}),e.forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.type,f=e.asset;i=(void 0===f?{}:f).value,l.test(i)&&("js"===a?c({src:i},function(){s=!0,u&&r()},n):"css"===a&&(window.__caasModules[n]?(u=!0,s&&r()):(window.__caasModules[n]=!0,o({src:i,text:t},function(){u=!0,s&&r()}))))})})},t.getCaaSUrlToUse=function(e){var t=[],a=window.wafer.base.colorSchema;n.isPWA&&t.push("pwa"),a&&t.push("darkmode");var r=t.join(",");if(r){var i=s("features",e);e=i?u(e,"features",i+","+r):e+"&features="+r}return e}}})});

}
/*
     FILE ARCHIVED ON 22:34:51 Nov 30, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:54 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.083
  cdx.remote: 0.089
  esindex: 0.009
  LoadShardBlock: 142.299 (6)
  PetaboxLoader3.datanode: 194.14 (8)
  load_resource: 167.767 (2)
  PetaboxLoader3.resolve: 100.479 (2)
*/