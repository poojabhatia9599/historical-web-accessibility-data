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

/* amazon-dtb-javascript-api - v1.0.0 - 2017-04-24 10:40:07 PM */"use strict";function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var _extends=Object.assign||function(a){var b,c,d;for(b=1;b<arguments.length;b++){c=arguments[b];for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};!function(){function a(a){return Object.prototype.hasOwnProperty.call(window,a)}var b=function(){var b=!1;return a("apstag")&&window.apstag.hasOwnProperty("debug")&&(b=!0),b}();b||!function(){function b(b){var c,d=ka.debugGlobal;return a(d)&&window[d].hasOwnProperty(b)&&(c=window[d][b]),c}function c(){var a=ka.defaultAaxHost,c=ka.debugGlobal;return b("host")&&(a=window[c].host),a}function d(){try{return window.top!==window.self?encodeURIComponent(document.referrer):""}catch(a){return encodeURIComponent(document.documentURI)}}function e(){var a,c,e=ka.debugGlobal;if(b("url"))return a=window[e].url,encodeURIComponent(a);c=encodeURIComponent(document.documentURI);try{c=encodeURIComponent(window.top.location.href),c&&"undefined"!==c||(c=d())}catch(f){c=d()}return c}function f(a){a&&((new Image).src=a)}function g(){return""+ka.protocol+c()+ka.pixelPath}function h(a){var b={s:Date.now()},c=i(b),d=""+g()+a+"/"+c;f(d)}function i(a){return encodeURIComponent(JSON.stringify(a))}function j(a){la&&window.localStorage.setItem(ka.debugLocalStorageKey,a)}function k(a){a.ts=Date.now(),ia({type:"LOG_EVENT",event:a})}function l(a){function b(a){if(!ga.cmpFired){ia({type:"CMP_FIRED"});var b=document.createElement("iframe");b.style.display="none",b.src=a,document.body.appendChild(b)}}document.readyState&&"loading"===document.readyState?document.addEventListener?document.addEventListener("DOMContentLoaded",function(){b(a)},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&b(a)}):b(a)}function m(a){try{a&&a.cmp&&""!==a.cmp&&"undefined"!=typeof a.cmp&&l(a.cmp)}catch(b){}}function n(a){if(!a)return!1;try{var b=~~Number(a);if(b>ka.minTimeout)return b}catch(c){return!1}return!1}function o(a,b,c){try{b&&"function"==typeof b&&(a.readyState?a.onreadystatechange=function(){("loaded"===a.readyState||"complete"===a.readyState)&&(a.onreadystatechange=null,b.apply(null,c))}:a.onload=function(){b.apply(null,c)})}catch(d){}}function p(a,b){var c,d;return!a&&b&&"function"==typeof b?void b(!0):(c=document.getElementsByTagName("script")[0],d=document.createElement("script"),d.type="text/javascript",d.async=!0,d.src=a,o(d,b,[!0]),void c.parentNode.insertBefore(d,c))}function q(a){var b=g()+'PH/{"c":"dtb","src":"'+ga.config.pubID+'","bla":"'+a+'","m":"DV"}\'';f(b)}function r(a){var b,c=parseInt(a,10);if(!isNaN(c)){if(0===c)return!0;if(100===c)return!1;if(b=100*Math.random(),c>=b)return!1}return!0}function s(a){var b,c,d=a.lsr||ka.latencySamplingRate;r(d)||(b=ga.AAXReqs.filter(function(b){return b.bidReqID===a.cb})[0],c=b.resTs-b.rqTs,q(c))}function t(a){a.hasOwnProperty("cb")&&ia({type:"RECORD_AAX_RESPONSE_TS",bidReqID:a.cb,ts:Date.now()}),ja.addTimer("br"),ja.set("brs",a.punt?"0":"1"),a.hasOwnProperty("rm")&&ja.schedule(a.to,a.id)}function u(a){m(a),s(a)}function v(a,b){var c=!1,d=null,e=function(b){if(!c){try{a(b),d&&clearTimeout(d),b||ja.set("to","1")}catch(e){return}c=!0}},f=n(b);return d=f?window.setTimeout(e,f):window.setTimeout(e,ka.defaultTimeout),e}function w(){var a=Math.round(1e9*Math.random());return""+a+Date.now()}function x(){var a,b;try{return a=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,b=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,a+"x"+b}catch(c){}return"x"}function y(a){var b=a.map(function(a){return a.hasOwnProperty("mediaType")&&"video"===a.mediaType?{id:a.slotID,mt:ka.mediaTypes.video}:a.hasOwnProperty("sizes")?{id:a.slotID,s:a.sizes.map(function(a){return a.join("x")})}:_extends({},a,{id:"error"})}).filter(function(a){return"error"!==a.id});return i(b)}function z(a,d){var f,g,h=c(),j=ka.protocol,k=ka.dtbPath,l=ga.config.pubID,m=ka.pageloadID,n=e(),o=w(),p=x(),q=ka.libraryVersion,r=ka.debugGlobal;return ia({type:"RECORD_AAX_REQUSET",data:{bidReqID:o,ws:p,url:n,rqTs:Date.now()}}),f="src="+l+"&u="+n+"&pid="+m+"&cb="+o+"&ws="+p+"&v="+q+"&t="+d,a.hasOwnProperty("slots")&&(f+="&slots="+y(a.slots)),ga.config.hasOwnProperty("params")&&(f+="&pj="+i(ga.config.params)),b("bidParams")&&Object.keys(window[r].bidParams).forEach(function(a){f+="&"+a+"="+window[r].bidParams[a]}),g=""+j+h+k+"?"+f}function A(){ga&&ga.hasOwnProperty("Q")&&ga.Q.forEach(function(a){"i"===a[0]?window.apstag.init.apply(null,a[1]):window.apstag.fetchBids.apply(null,a[1])})}function B(a){return k({type:"event",name:"apstag load sucessful",message:"apstag loaded sucessfully with valid config"}),ia({type:"SET_CONFIG",config:a}),"success"}function C(){var a=!1;return ga.config.hasOwnProperty("enableAutoTargeting")&&"googletag"===ga.config.enableAutoTargeting&&(a=!0),a}function D(a){return"undefined"!=typeof a&&a.hasOwnProperty("apiReady")&&a.apiReady===!0}function E(a){return"undefined"!=typeof a?"undefined"!=typeof a.cmd:!1}function F(b){var c=b.slotID;b.hasOwnProperty("mediaType")||a("googletag")&&E&&(D(googletag)?G(c)&&(S(b),ia({type:"BID_APPLIED",bidID:b.amzniid})):googletag.cmd.push(function(){F(b)}))}function G(a){var b;try{b=O().filter(function(b){return b.getSlotElementId()===a})[0]}catch(c){}return b}function H(a){var b,c=ka.displayTargetingKeys;try{D(googletag)&&(b=G(a),c.forEach(function(a){return b.setTargeting(a,"")}))}catch(d){}}function I(a){var b,c;try{c=ga.slotBids,Object.keys(c).forEach(function(d){d===a&&c[d].forEach(function(a){a.bidSetOnSlot===!0&&(b=a.amzniid)})})}catch(d){}return b}function J(a){try{if(ga.slotBids.hasOwnProperty(a)){var b=ga.slotBids[a].filter(function(a){return a.bidSetOnSlot===!0})[0];b&&ia({type:"BID_SET_ON_SLOT",slotID:a,bidID:I(a),set:!1})}}catch(c){}}function K(a,b){var c=decodeURIComponent(a).split("?")[0].split("#")[0],d=decodeURIComponent(b).split("?")[0].split("#")[0];return c===d}function L(a,b){return a.indexOf(b)>-1}function M(a){return L(ga.renderedBids,a)}function N(a){return L(ga.appliedBids,a)}function O(){var a=[];try{a=googletag.pubads().getSlots()}catch(b){}return a}function P(){var a={};try{Object.keys(ga.slotBids).forEach(function(b){var c,d=ga.slotBids[b];d.filter(function(a){return a.bidSetOnSlot}).length>0||(c=d.filter(function(a){return Date.now()-ga.AAXReqs.filter(function(b){return b.bidReqID===a.bidReqID})[0].rqTs<24e4}).filter(function(a){return K(e(),ga.AAXReqs.filter(function(b){return b.bidReqID===a.bidReqID})[0].url)}).filter(function(a){return!M(a.amzniid)}),C()||(c=c.filter(function(a){return!N(a.amzniid)})),c.length>0&&(a[b]=c.map(function(a){var b=ga.AAXReqs.filter(function(b){return b.bidReqID===a.bidReqID})[0].rqTs;return _extends({},a,{rqTs:b})}).reduce(function(a,b){return a.rqTs>b.rqTs?a:b})))})}catch(b){}return a}function Q(a){var b,c;try{c=ga.slotBids,Object.keys(c).forEach(function(d){c[d].forEach(function(c){c.amzniid===a&&(b=c)})})}catch(d){}return b}function R(a){var b,c=["host","ev","cb","cmp"];try{b=a.slots.map(function(b){var d={amznsz:b.size};return c.forEach(function(b){var c,e;a.hasOwnProperty(b)&&(c=a[b],e=b,"cb"===b&&(e="bidReqID"),d[e]=c)}),_extends({},b,d)})}catch(d){}return b}function S(a){try{var b,c=a.slotID,d=a.amzniid,e=fa("display");b=G(c),b&&(Object.keys(a).filter(function(a){return L(e,a)}).forEach(function(c){return b.setTargeting(c,a[c])}),ia({type:"BID_SET_ON_SLOT",slotID:c,bidID:d,set:!0}),h(d))}catch(f){}}function T(){try{var a=P();Object.keys(a).forEach(function(b){F(a[b])}),ga.DFP.slotRenderEndedSet||(googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(a){H(a.slot.getSlotElementId()),J(a.slot.getSlotElementId())})}),ia({type:"DFP_SLOT_RENDER_ENDED_SET"}))}catch(b){}}function U(a,b){var c,d=a.doc.createElement("iframe");d.frameBorder=0,d.marginHeight=0,d.marginWidth=0,d.topMargin=0,d.leftMargin=0,d.scrolling="no",d.allowTransparency=!0,d.width=a.sizes[0]+"px",d.height=a.sizes[1]+"px",d.id=a.adID,ma?(c='<body style="background-color: #FF9900;"><h3>apstag Test Creative</h3><h4>amzniid - '+a.bidID+" | amznbid - "+a.pp+" | amznsz - "+a.sizes.join("x")+"</h4></body>",d.src="javascript:'"+c+"'"):d.src=a.host+"/e/dtb/impi?b="+a.bidID+"&pp="+a.pp+"&rnd="+w(),a.doc.body.appendChild(d),b&&o(a.doc.getElementById(a.adID),function(){return b(a.doc,a.bidID,d)})}function V(b,d,e){var f;a("amzncsm")?f=window.amzncsm:b.defaultView.hasOwnProperty("amzncsm")&&(f=b.defaultView.amzncsm),f&&(f.host=c(),f.rmD(e,d,b.defaultView,b,ga.config.pubID))}function W(a){return function(){var b=P(),c=Object.keys(b),d=[];c.forEach(function(a){var c,e,f;b.hasOwnProperty(a)&&(c=b[a],e={amzniid:c.amzniid,amznbid:c.amznbid,slotID:a},c.hasOwnProperty("size")?(e.size=c.size,e.amznsz=c.amznsz):"video"===c.mediaType&&(e.mediaType="video",f="&amzniid="+c.amzniid+"&amznbid="+c.amznbid,e.qsParams=f,e.encodedQsParams=encodeURIComponent(f)),d.push(e))}),a(d)}}function X(a){return a[0]+"x"+a[1]}function Y(a){var b,c;return 1===a.length?b=X(a[0]):(c=Math.floor(a.length*Math.random()),b=X(a[c])),b}function Z(a,d){var f,g=c(),h=e(),i=w(),j=x(),k=b("testBidTimeout")||200;ia({type:"RECORD_AAX_REQUSET",data:{bidReqID:i,ws:j,url:h,rqTs:Date.now()}}),f=a.slots.map(function(a){var b,c={slotID:a.slotID,amzniid:ka.mockBid.amzniid+"-"+w(),amznbid:ka.mockBid.amznbid};return a.hasOwnProperty("sizes")?(b=Y(a.sizes),c.size=b,c.amznsz=b):"video"===a.mediaType&&(c.mediaType="video",c.amznbid="v_"+c.amznbid),c}),window.setTimeout(function(){window.apstag.bids({slots:f,host:g,status:"ok",cb:i}),d(!0)},k)}function $(a){switch(a){case"getLog":return ga.eventLog;case"getState":return ga;case"enable":return j(!0),"DEBUG MODE ENABLED";case"disable":return j(!1),"DEBUG MODE DISABLED";default:return"unknown debug argument"}}function _(a,b){var c,d,e,f,g,h,i,j,k=Q(b);if(k){ia({type:"BID_RENDERED",bidID:b}),ja.addTimer("imp"),c=k.size,d=k.amznbid,e=k.host,f=c.split("x").map(function(a){return parseInt(a,10)}),g="amznad"+Math.round(1e6*Math.random()),h={bidID:b,doc:a,pp:d,host:e,adID:g,sizes:f},ga.viewabilityEnabled?(i=a.createElement("script"),i.type="text/javascript",i.async=!0,a.body.appendChild(i),o(i,function(){U(h,V)}),i.src=ka.CSM_JS):U(h);try{j=a.defaultView&&a.defaultView.frameElement?a.defaultView.frameElement:window.frameElement,j.width=f[0],j.height=f[1]}catch(l){}}}function aa(a){try{t(a),ia({type:"UPDATE_SLOT_BIDS",bids:R(a)}),a.hasOwnProperty("ev")&&ia({type:"SET_VIEWABILITY",viewability:a.ev}),u(a)}catch(b){}}function ba(a,b){var c,d,e;try{"function"==typeof b&&(d=a.timeout||ga.config.bidTimeout||ka.defaultTimeout,c=v(W(b),d))}catch(f){}ma?Z(a,c):(e=z(a,d),p(e,c))}function ca(a){try{a.punt=!0,t(a),u(a)}catch(b){}}function da(){ga.config.hasOwnProperty("adServer")&&"googletag"===ga.config.adServer&&T()}function ea(a,b){var c=B(a);"success"===c&&"function"==typeof b&&b()}function fa(){var a=arguments.length<=0||void 0===arguments[0]?"display":arguments[0];switch(a){case"display":return ka.displayTargetingKeys;default:return"unknown targeting type "+a}}var ga,ha,ia,ja,ka={CSM_JS:"//web.archive.org/web/20170430233725/http://c.amazon-adsystem.com/aax2/csm.js.gz",defaultTimeout:2e3,protocol:document.location.protocol+"//",debugGlobal:"apstagDEBUG",debugLocalStorageKey:"apstagDebug",defaultAaxHost:"aax.amazon-adsystem.com",dtbPath:"/e/dtb/bid",latencySamplingRate:1,pixelPath:"/x/px/",minTimeout:0,pageloadID:w(),libraryVersion:"4.0.0",mockBid:{amznbid:"testBid",amzniid:"testImpression"},mediaTypes:{video:"v"},displayTargetingKeys:["amznbid","amzniid","amznsz"]},la=function(){return a("localStorage")}(),ma=function(){if(la){var a=window.localStorage.getItem(ka.debugLocalStorageKey);if("true"===a)return!0}return!1}(),na=function(){var a,b=arguments.length<=0||void 0===arguments[0]?{AAXReqs:[],appliedBids:[],DFP:{slots:[]},slotBids:{},config:{},cmpFired:!1,eventLog:[],renderedBids:[],sdPixels:{},viewabilityEnabled:!1}:arguments[0],c=arguments[1];switch(c.type){case"LOG_EVENT":return _extends({},b,{eventLog:[].concat(_toConsumableArray(b.eventLog),[c.event])});case"SET_CONFIG":return _extends({},b,{config:c.config});case"SET_Q":return _extends({},b,{Q:c.Q});case"SET_VIEWABILITY":return _extends({},b,{viewabilityEnabled:c.viewability});case"CMP_FIRED":return _extends({},b,{cmpFired:!0});case"ENABLE_DEBUG":return _extends({},b,{debugEnabled:!0});case"DISABLE_DEBUG":return _extends({},b,{debugEnabled:!1});case"RECORD_AAX_REQUSET":return _extends({},b,{AAXReqs:[].concat(_toConsumableArray(b.AAXReqs),[c.data])});case"RECORD_AAX_RESPONSE_TS":return _extends({},b,{AAXReqs:b.AAXReqs.map(function(a){return a.bidReqID===c.bidReqID&&(a.resTs=c.ts),a})});case"UPDATE_SLOT_BIDS":return a={},c.bids.forEach(function(c){b.slotBids.hasOwnProperty(c.slotID)?a[c.slotID]=[].concat(_toConsumableArray(b.slotBids[c.slotID]),[c]):a[c.slotID]=[c]}),_extends({},b,{slotBids:_extends({},b.slotBids,a)});case"SD_PIXEL":return _extends({},b,{sdPixels:_extends({},b.sdPixels,_defineProperty({},c.id,c.json))});case"DFP_SLOT_RENDER_ENDED_SET":return _extends({},b,{DFP:_extends({},b.DFP,{slotRenderEndedSet:!0})});case"BID_RENDERED":return _extends({},b,{renderedBids:[].concat(_toConsumableArray(b.renderedBids),[c.bidID])});case"BID_APPLIED":return _extends({},b,{appliedBids:[].concat(_toConsumableArray(b.appliedBids),[c.bidID])});case"BID_SET_ON_SLOT":return _extends({},b,{slotBids:_extends({},b.slotBids,_defineProperty({},c.slotID,b.slotBids[c.slotID].map(function(a){return a.amzniid===c.bidID?_extends({},a,{bidSetOnSlot:c.set}):a})))});default:return b}},oa=ma&&a("__REDUX_DEVTOOLS_EXTENSION__")?!0:null;oa&&(ha=window.__REDUX_DEVTOOLS_EXTENSION__(na),ha.subscribe(function(){ga=ha.getState()})),ia=function(a){oa?ha.dispatch(a):ga=na(ga,a)},ja=function(){var a={},b=Date.now(),c=0,d=function(){var a,b=decodeURIComponent(e());return a=b.indexOf("://")>-1?b.split("/")[2]:b.split("/")[0],a=a.split(":")[0]},h=function(c,d){d||(d=Date.now()),a[c]=d-b},j=function(b,c){a[b]=c},k=function(e,h){e||(e=5e3),h||(h="PH"),h+="/",setTimeout(function(){a.i=c,a.t0=b,a.site=d();var e=g()+h+i(a);f(e),a={},b=Date.now(),c++},e)};return{addTimer:h,set:j,schedule:k}}(),ja.addTimer("tlt");try{Object.prototype.hasOwnProperty.call(window,"apstag")&&Object.prototype.hasOwnProperty.call(window.apstag,"_Q")&&window.apstag._Q.length>0&&ia({type:"SET_Q",Q:window.apstag._Q})}catch(pa){}window.apstag=function(){return{punt:ca,init:ea,debug:$,targetingKeys:fa,fetchBids:ba,setDisplayBids:da,renderImp:_,bids:aa}}(),function(){A()}()}()}();

}
/*
     FILE ARCHIVED ON 23:37:25 Apr 30, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:27:16 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.094
  exclusion.robots.policy: 0.076
  cdx.remote: 0.131
  esindex: 0.018
  LoadShardBlock: 235.862 (6)
  PetaboxLoader3.datanode: 133.731 (7)
  PetaboxLoader3.resolve: 71.423 (2)
  load_resource: 102.415
*/