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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-darla",[],t):"object"==typeof exports?exports["wafer-darla"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-darla"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20220601001426/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=window.wafer,c=u.constants,f=u.WaferBaseClass,l=c.ATTR_PREFIX,d=["darla-config"],p=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:d}));return r._util=i({},r._util,{"darla-config":e.getAttribute(l+"darla-config")}),r}return a(t,e),s(t,[{key:"stateDidUpdate",value:function(){this._stateDidUpdate()}}]),t}(f);p.events={},t.default=p,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return u=o(r("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),d=window.wafer.utils,p=d.getUrlParameterValueByName,v=window.wafer.controllers.WaferLazyController,y=d.bindEvent,w=function(e){function t(){a(this,t);var e=t.prototype.configs,r=e.selector,o=e.successClass,s=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{selector:r,successClass:o,WaferClass:(u||n()).default}));s._options=f({},s._options,{defaultOffsetY:1200,defaultOffsetX:0});var c=s;return(u||n()).default.prototype._stateDidUpdate=function(){var e=this._util.elem;c.loadElement(e).catch(function(){})},s.sync(),s}return s(t,e),l(t,[{key:"makeDarlaCall",value:function(e,t,r,n){var o=this,a=r.addAutoEvent,i=void 0!==a&&a,s=r.addCleanContainer,u=void 0!==s&&s,f=r.authed,l=void 0===f?"0":f,d=r.bucket,v=void 0===d?"testBucket":d,y=r.device,w=void 0===y?"smartphone":y,h=r.flex,b=r.height,g=void 0===b?250:b,m=r.includeRapidKey,_=void 0!==m&&m,O=r.intl,j=void 0===O?"us":O,x=r.maxRetry,A=void 0===x?5:x,C=r.meta,P=void 0===C?{}:C,E=r.metaSize,T=r.npv,S=void 0===T||T,k=r.rid,R=void 0===k?"testRid":k,D=r.rotateAds,I=void 0!==D&&D,z=r.rotateTime,M=void 0===z?3e4:z,L=r.site,U=void 0===L?"fp":L,N=r.siteAttribute,B=r.ssl,Y=void 0===B||B,F=r.supports,K=r.waitDelay,V=void 0===K?350:K,W=r.width,H=void 0===W?300:W,X=window.DARLA;if(e&&t&&X){var q=X.config(),J=q.onFailure,G=q.onSuccess;X.config().onSuccess=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.retryCount=0,G&&G.apply(X,t)},X.config().onFailure=function(){for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];var u=X.prefetched();return r.retryCount===A&&X.abort(),r.retryCount>A?(n&&n.style&&(n.style.display="none"),void(r.retryCount=0)):u&&u.length>0&&V>0?void setTimeout(function(){r.retryCount++,o.makeDarlaCall.call(o,e,t,r,n)},r.retryCount===A?2*V:V):void(J&&J.apply(X,i))};var Q=window.vzm&&window.vzm.getPageContext&&window.vzm.getPageContext()||window.YAHOO&&window.YAHOO.context||{},Z="";Q.ynet&&(t=p("_spaceid",window.location.href)||t,Z=p("atwKV",window.location.href)||Z);var $={pg:{device:w,intl:j,property:U,rid:R,test:v}},ee='Y-BUCKET="'+v+'"';if(N){var te=Q.authed||l,re="lu:"+te,ne=N.split("pct"),oe=c(ne,2),ae=oe[0],ie=oe[1],se=window.rapidInstance;if(_&&se&&se.getRapidAttribute){var ue=se.getRapidAttribute("keys"),ce=ue.pd,fe=void 0===ce?"":ce,le=ue.pt,de=void 0===le?"":le,pe=ue.ver,ve=void 0===pe?"":pe;re=re+(fe?";pd:"+fe:"")+(de?";pt:"+de:"")+(ve?";ver:"+ve:"")}ee+=ae&&ie?" "+ae+re+";pct"+ie:" "+N}else"tw"===j&&(ee+=' rs="lu:'+l+'"');Z&&(ee+=" "+Z);var ye=e.replace(",","_"),we="wafer_darla_fetch_"+ye;X.add({name:we,autoStart:I,autoRT:M,ps:e,sa:ee,sp:t,ref:window.location.href,npv:S,ssl:Y,ult:$});var he=e.split(","),be=X.evtSettings("AUTO"),ge={autoIV:1,autoMax:25,autoRT:"10000"};he.forEach(function(e){var t=P[e]||{},r=t.width||H,n=t.height||g,o=t.metaSize||E,a=t.supports||F,s=t.flex||h,c=t.css,f={pos:e,dest:"wafer-darla-"+e,w:r,h:n};u&&(f.clean="wafer-darla-clean-"+e),o&&(f.metaSize=o),a&&(f.supports=a),s&&(f.flex=s),c&&(f.css=c),i&&!be.ps[e]&&(be.ps[e]=Object.assign({},{id:e},ge)),X.addPos(f)}),i&&X.add(be),X.event(we)}}},{key:"_checkIfDarlaNameSpaceExist",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(function(r,n){if(t>5)return n(new Error("namespace does not exist"));if(window.DARLA)return r();var o=t+1;setTimeout(function(){e._checkIfDarlaNameSpaceExist(o).then(function(){r()}).catch(function(e){n(e)})},50*o)})}},{key:"loadElement",value:function(e){var t=this;return new Promise(function(r,n){if(t._shouldLoadElement(e)){var o=t._state.elementInstances,a=o.get(e),i=a.instance,s={};try{s=JSON.parse(i._util["darla-config"]),s.retryCount=0}catch(e){return void n(e)}return s?t._checkIfDarlaNameSpaceExist().then(function(){var n=window.DARLA,o=n&&n.inProgress();if(o)throw new Error("darla in progress");var a=s,i=a.pos,u=a.spaceid;if(i&&u&&n){var c=s,f=c.abortDarlaCalls,l=void 0===f?[]:f;o&&Array.isArray(l)&&l.length&&-1!==l.indexOf(o)&&n.abort(),t.makeDarlaCall(i,u,s,e),y(e,"load",t._itemLoaded(e))}r()}).catch(function(e){n(e)}):void n(new Error("config missing"))}r()})}}]),t}(v);w.prototype.configs={selector:".wafer-darla",successClass:"wafer-darla-done"},t.default=w,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(){return a=o(r("./src/controller.js"))}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a;t.default=new((a||n()).default)({selector:(a||n()).default.prototype.configs.selector}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 00:14:26 Jun 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:27 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.142
  exclusion.robots.policy: 0.128
  cdx.remote: 0.146
  esindex: 0.013
  LoadShardBlock: 83.037 (6)
  PetaboxLoader3.datanode: 78.327 (8)
  load_resource: 120.918 (2)
  PetaboxLoader3.resolve: 26.56
*/