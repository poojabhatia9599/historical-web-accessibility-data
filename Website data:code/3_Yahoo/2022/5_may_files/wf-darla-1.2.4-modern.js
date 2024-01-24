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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-darla",[],t):"object"==typeof exports?exports["wafer-darla"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-darla"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20220430234657/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=window.wafer,d=u.constants,p=u.WaferBaseClass,v=d.ATTR_PREFIX,w=["darla-config"],y=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:w}));return r._util=f({},r._util,{"darla-config":e.getAttribute(v+"darla-config")}),r}return a(t,e),c(t,[{key:"stateDidUpdate",value:function(){this._stateDidUpdate()}}]),t}(p);y.events={};var h=y,b=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_=window.wafer.utils,O=_.getUrlParameterValueByName,j=window.wafer.controllers.WaferLazyController,x=window.DARLA||null,P=_.bindEvent,A=function(e){function t(){i(this,t);var e=t.prototype.configs,r=e.selector,n=e.successClass,o=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{selector:r,successClass:n,WaferClass:h}));o._options=g({},o._options,{defaultOffsetY:1200,defaultOffsetX:0});var a=o;return h.prototype._stateDidUpdate=function(){var e=this._util.elem;a.loadElement(e).catch(function(){})},o.sync(),o}return l(t,e),m(t,[{key:"makeDarlaCall",value:function(e,t,r,n,o){var a=r.authed,i=void 0===a?"0":a,s=r.rotateAds,l=void 0!==s&&s,f=r.rotateTime,c=void 0===f?3e4:f,u=r.maxRetry,d=void 0===u?5:u,p=r.width,v=void 0===p?300:p,w=r.height,y=void 0===w?250:w,h=r.device,g=void 0===h?"smartphone":h,m=r.intl,_=void 0===m?"us":m,j=r.site,P=void 0===j?"fp":j,A=r.rid,C=void 0===A?"testRid":A,E=r.bucket,T=void 0===E?"testBucket":E,R=r.npv,S=void 0===R||R,k=r.ssl,D=void 0===k||k,z=r.metaSize,U=r.siteAttribute,I=r.includeRapidKey,B=void 0!==I&&I,L=r.supports,Y=r.flex,K=r.meta,M=void 0===K?{}:K,V=r.waitDelay,W=void 0===V?350:V,H=r.addAutoEvent,N=void 0!==H&&H,X=r.addCleanContainer,q=void 0!==X&&X;if(e&&t&&x){var F=x.inProgress(),J=x.prefetched(),G=window.vzm&&window.vzm.getPageContext&&window.vzm.getPageContext()||window.YAHOO&&window.YAHOO.context||{},Q="";if(G.ynet&&(t=O("_spaceid",window.location.href)||t,Q=O("atwKV",window.location.href)||Q),(F||J&&J.length>0)&&W>0)return n||(n=0),F&&n===d&&x.abort(),n>d?void(o&&o.style&&(o.style.display="none")):void setTimeout(this.makeDarlaCall.bind(this,e,t,r,n+1,o),n===d?2*W:W);var Z={pg:{device:g,intl:_,property:P,rid:C,test:T}},$='Y-BUCKET="'+T+'"';if(U){var ee=G.authed||i,te="lu:"+ee,re=U.split("pct"),ne=b(re,2),oe=ne[0],ae=ne[1],ie=window.rapidInstance;if(B&&ie&&ie.getRapidAttribute){var se=ie.getRapidAttribute("keys"),le=se.pd,fe=void 0===le?"":le,ce=se.pt,ue=void 0===ce?"":ce,de=se.ver,pe=void 0===de?"":de;te=te+(fe?";pd:"+fe:"")+(ue?";pt:"+ue:"")+(pe?";ver:"+pe:"")}$+=oe&&ae?" "+oe+te+";pct"+ae:" "+U}else"tw"===_&&($+=' rs="lu:'+i+'"');Q&&($+=" "+Q);var ve=e.replace(",","_"),we="wafer_darla_fetch_"+ve;x.add({name:we,autoStart:l,autoRT:c,ps:e,sa:$,sp:t,ref:window.location.href,npv:S,ssl:D,ult:Z});var ye=e.split(","),he=x.evtSettings("AUTO"),be={autoIV:1,autoMax:25,autoRT:"10000"};ye.forEach(function(e){var t=M[e]||{},r=t.width||v,n=t.height||y,o=t.metaSize||z,a=t.supports||L,i=t.flex||Y,s=t.css,l={pos:e,dest:"wafer-darla-"+e,w:r,h:n};q&&(l.clean="wafer-darla-clean-"+e),o&&(l.metaSize=o),a&&(l.supports=a),i&&(l.flex=i),s&&(l.css=s),N&&!he.ps[e]&&(he.ps[e]=Object.assign({},{id:e},be)),x.addPos(l)}),N&&x.add(he),x.event(we)}}},{key:"loadElement",value:function(e){var t=this;return new Promise(function(r,n){if(t._shouldLoadElement(e)){var o=t._state.elementInstances,a=o.get(e),i=a.instance,s={};try{s=JSON.parse(i._util["darla-config"])}catch(e){return void n(e)}if(!s)return void n(new Error("config missing"));var l=s,f=l.pos,c=l.spaceid;if(f&&c&&x){var u=x.inProgress(),d=s,p=d.abortDarlaCalls,v=void 0===p?[]:p;u&&Array.isArray(v)&&v.length&&-1!==v.indexOf(u)&&x.abort(),t.makeDarlaCall(f,c,s,0,e),P(e,"load",t._itemLoaded(e))}}r()})}}]),t}(j);A.prototype.configs={selector:".wafer-darla",successClass:"wafer-darla-done"};var C=A;t.default=new C({selector:C.prototype.configs.selector})}})});

}
/*
     FILE ARCHIVED ON 23:46:57 Apr 30, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:49:03 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.055
  cdx.remote: 0.094
  esindex: 0.008
  LoadShardBlock: 378.344 (6)
  PetaboxLoader3.datanode: 322.825 (7)
  load_resource: 126.573
  PetaboxLoader3.resolve: 90.214
*/