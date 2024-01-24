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

"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}!function(){var e=window,n=e.onerror,o=["apptype","rid","bucketId","bucket","device","osName","browserName","browserVersion"],t=/^resource:\/\//,r=/ActionScript|Decompress\sfail/,a="",i={beaconPath:"p.gif",site:"fp"},c=function(){var n=e.navigator&&(navigator.connection||navigator.mozConnection||navigator.webkitConnection)||{};return{downlink:n.downlink||"",downlinkMax:n.downlinkMax||"",effectiveType:n.effectiveType||"",rtt:n.rtt||"",saveData:n.saveData||"",type:n.type||""}},s=function(){var n=e.YAHOO&&e.YAHOO.context||e.Af&&e.Af.context||{},t="";return o.forEach((function(e){"undefined"!==_typeof(n[e])&&(t+="&".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(n[e])))})),t},f=function(n,o,t,r){if(!e.navigator||!1!==e.navigator.onLine){n&&o||r&&r("Missing required params - type: ".concat(n,", src: ").concat(o));var a=t||{};o&&(a.src=o),a._rdn=(new Date).getTime().toString().substr(7);var f=Object.keys(a).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])})).join("&"),w=!!window.wafer,d=!(!window.wafer||!window.wafer.ready),g="".concat("/_td_api/beacon","/").concat(n,"?").concat(f).concat(s(),"&site=").concat(i.site,"&connection=").concat(escape(JSON.stringify(c())),"&hasWf=").concat(w,"&hasWfR=").concat(d),u=!(window.navigator&&"sendBeacon"in window.navigator);if(!u)try{window.navigator.sendBeacon(g)}catch(e){u=!0}if(u){var p=new Image;p.onerror=function(e){var n=e instanceof Error?e.toString():e;r&&r(n)},p.onload=function(){r&&r()},p.src=g,e.__testError&&(e.__testImg=p)}}};e.onerror=function(e,o,a){try{if(!t.test(o))!function(e,n){if(n){var o="string"==typeof n?n:n.message;if(!o||!r.test(o)){var t,a=n.toString();if(n){switch(a){case"[object String]":t={code:999,message:n};break;case"[object Error]":t={code:n.code||n.name||999,file:n.fileName||"",line:n.lineNumber||"",message:n.message};break;case"[object Object]":t=n;break;default:try{t={code:999,message:JSON.stringify(n)}}catch(e){}}t.message=t.message&&t.message.substring(0,300)||""}f("error",e,t)}}}("winerror",{code:e.name,file:e.fileName||"",line:e.lineNumber||a||"",message:e.message||e,url:o&&o.substring(0,300)})}catch(e){}return"function"==typeof n&&n(e,o,a)};var w,d=function(n){if(n){var o=n.meta,t=n.name;switch(t){case"IDB-connection-success":window.wafer.base.clearOldCache({timeDiffToDelete:13824e5});break;case"WaferRapid":case"pageshow":case"colorSchema":f("WAFER_LOG",t,{meta:JSON.stringify(o)});break;case"WaferFetch":"nextgen"===(a||(a=e.YAHOO&&e.YAHOO.context&&e.YAHOO.context.apptype),a)&&f("WAFER_LOG",t,{meta:JSON.stringify(o)})}}},g=function(n){if((!e.navigator||!1!==e.navigator.onLine)&&n){var o=n.meta,t=n.name,r=n.stack,a=r&&r.message||r||"",f="/".concat(i.beaconPath,"?err=").concat(t,"&beaconType=wafer_err&info=").concat(escape(JSON.stringify(o)),"&stack=").concat(a,"&connection=").concat(escape(JSON.stringify(c()))).concat(s());e.wafer.utils.fireBeacon(f),e.__testError&&(e.__testBeaconUrl=f)}},u=function(){if(w)return!0;window.wafer.on("log",d),window.wafer.on("error",g),w=!0,window.YAHOO&&window.YAHOO.errBeaconConfig&&Object.assign(i,window.YAHOO.errBeaconConfig),"ReportingObserver"in window&&new window.ReportingObserver((function(e,n){for(var o=0;o<e.length;o++){var t=e[o];if(t&&"csp-violation"!==t.type){var r=t.body||{};r.url=t.url;var a=r.id,i=r.sourceFile;"PreventDefaultPassive"===a&&i.indexOf("oath-player")>-1||f("reporting-observer",t.type,{meta:JSON.stringify(r)})}}}),{buffered:!0}).observe()};window.wafer&&window.wafer.ready?window.wafer.ready((function(){u()})):window.addEventListener("load",(function(){u()})),e.__testError&&u()}();

}
/*
     FILE ARCHIVED ON 00:18:24 Jun 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:24 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.069
  cdx.remote: 0.085
  esindex: 0.009
  LoadShardBlock: 164.409 (6)
  PetaboxLoader3.datanode: 161.045 (7)
  load_resource: 67.335
  PetaboxLoader3.resolve: 35.478
*/