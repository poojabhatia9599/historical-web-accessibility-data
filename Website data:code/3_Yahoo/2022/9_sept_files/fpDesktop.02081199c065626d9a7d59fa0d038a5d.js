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

!function(){"use strict";var e={context:{bucket:"",bucketId:"",device:"",intl:"",lang:"",meta:{},region:"",rid:"",site:""},i13n:{}},t=["MAST","LDRB"],n=function(){var n,o,a,r,i,s=window,l=document,d=s.adsConfig,c=s.YAHOO,f=void 0===c?e:c,u=s.DARLA,v=void 0===u?null:u,m=s.wafer,p=m.base||{},h={},g="adRotateEvt",w="scroll",E="homepage-viewer",y="sda-",b="sticky-lrec2-footer",A="sda-LREC4",L="sda-MON2",O="native-leaderboard-ad",C="gemini-ad-refresh",B=!1;function R(){var e;if(d&&(o=d.rotation)&&(null===(e=null==d?void 0:d.positions)||void 0===e?void 0:e[o.currentpos]))if(d.clientPositionMeta.positions.forEach((function(e){h[e.id]=e})),r=h[o.currentpos],v)if(o.enableNavAdRotation&&m.on("fetch:success",(function(e){e.elem.classList.contains("nextgen-page-navigation")&&function(e){var t=s._darlaAutoEvt;t||(t=v.evtSettings("AUTO")||{});for(var n=[],o=0;o<e.length;o++){var a=e[o],r=v.posSettings(a);if(r&&r.dest){var i=document.getElementById(r.dest);i&&P(i,0)&&i.offsetHeight>1&&n.push(a)}}if(n.length){var l=t.sa,d={experience:t.experience,name:g,npv:1,property:"fp",ps:n.join(","),ref:s.location.href,sa:l,secure:t.secure,sp:t.sp,ssl:t.ssl,ult:t.ult};v.add(d),v.event(g)}}(t)})),a=l.getElementById(y+(null==r?void 0:r.pos))){n={offsetX:0,offsetY:parseInt(o.offset,10)||100},m.on(w,I),s.addEventListener("viewerOpened",(function(){B=!0})),s.addEventListener("viewerScrollRestored",(function(){B=!1,function(){var e,t;if(!s.pageloadNonCollapsedAds)return;for(var n=[],a=s.pageloadNonCollapsedAds,r=0,d=["LREC","MAST","LDRB","UBALDRB","UBALREC","UBALREC2","UBALREC3"];r<d.length;r++){var c=d[r],f=c;if(a.indexOf(c)>=0){c.includes("UBA")&&(f=c.split("UBA")[1]);var u=l.getElementById(y+f);u&&P(u)&&n.push(c)}}if(n.length)x(t=N(n,g),!0);else if(a.indexOf("FPAD")>=0&&s.safeframeOptinPositions&&s.safeframeOptinPositions.FPAD){t=N("FPAD",g);var m=v.config(),p=l.getElementById("sda-FPAD");!!(null===(e=null==m?void 0:m.positions)||void 0===e?void 0:e.FPAD)&&p&&P(p)&&x(t)}if(!o)return;var w=l.getElementById(b),E=l.getElementById(A),B=l.getElementById(L);if(w&&P(w)||E&&P(E)||o.mon2enabled&&B&&P(B)){var R=[],D=null==h?void 0:h[o.currentpos],I=(null==D?void 0:D.pos)||"";if(I&&R.push(I),o.mon2enabled?(R.push("MON2"),o.lrec4enabled&&o.lrec4pos&&R.push(o.lrec4pos)):o.lrec4enabled&&o.lrec4pos&&R.push(o.lrec4pos),R.length){var k="fetch_selective_ad_"+I.toLowerCase(),S=N(R.join(","),k);v.add(S),v.event(k)}}i&&P(i)&&function(){if(!i)return;var e=i.getElementsByClassName(C);if(e&&e.length>0){var t=(e=e[0]).getAttribute("data-url"),n=e.getAttribute("data-body");t&&n&&s.wafer&&s.wafer.utils&&s.wafer.utils.fetchWithCache&&s.wafer.utils.fetchWithCache(t,{body:n,cache:0}).then((function(t){if(t&&t.html){e.innerHTML=t.html;var n=e.getElementsByClassName(O);if(n&&n.length>0){i.replaceWith(n[0]);var o=l.getElementsByClassName(O);o&&o.length>0&&(i=o[0],s.wafer.base.sync(i.parentElement))}}}))}}()}()})),s.addEventListener("ads:finish:parse",D),setTimeout((function(){I()}),300);var c=l.getElementsByClassName(O);c&&c.length>0&&(i=c[0])}else console.error("No LRECAdsContainer");else console.error("No Darla instance")}function D(e){var t=e.detail.positions;for(var n in t)if(t.hasOwnProperty(n)){var o=t[n].posData.conf.clean,a=document.getElementById(o);a&&(a=a.parentElement)&&a.classList&&(a.classList.contains("Ht-pl-LDRB")||a.classList.contains("Ht-pl-LREC"))&&(a.classList.remove("Ht-pl-LDRB"),a.classList.remove("Ht-pl-LREC"))}if(t.MON2&&t.LREC3&&t.LREC4){var r=t.MON2.validAd,i=document.getElementById("sda-LREC3"),s=document.getElementById("sda-LREC4");r?(i.classList.add("D(n)"),s.classList.add("D(n)")):(i.classList.remove("D(n)"),s.classList.remove("D(n)"))}}function P(e,t){return t=t||{},m.utils.elementInView(e,t,p.viewport)}function I(e){B||P(a,n)&&(k(),m.removeListener(w,I))}function k(){if(o){var e,t=r,n="",a=[t],i=o.lrec4pos||"LREC4",s=y+i,l=h[i]||S(i,s,s+"-iframe",300,250),d=o.mon2pos||"MON2",c=y+d,f=h[d]||S(d,c,c+"-iframe",300,600);t&&(e=t.pos,t.id=e,n+=e),o.lrec4enabled&&(n+=","+l.pos,a.unshift(l)),o.mon2enabled&&(n+=","+f.pos,a.push(f));var u,m,p="fetch_selective_ad_"+e.toLowerCase(),g=N(n,p);if(v.inProgress()){var w=v.inProgress();if(!w||w!==E)return u=0,void(m=setInterval((function(){u>20?clearInterval(m):(v.inProgress()||(clearInterval(m),k()),u++)}),500));v.abort(),v.add(g),v.addPos(a),v.event(p)}else o.lrec2selectiveenabled&&(v.add(g),v.addPos([a]),v.event(p))}}function S(e,t,n,o,a){return{clean:t,dest:n,h:a,metaSize:!0,pos:e,supports:!1,w:o}}function N(e,t,n){var o,a,r=f.context,i={pg:{device:r.device,intl:r.intl,property:"fp",rid:r.rid,test:r.bucket}},l={experience:{bucket:r.bucket||"",pd:"modal",pt:"index",rid:r.rid||"",sid:(null===(o=null==f?void 0:f.i13n)||void 0===o?void 0:o.currentSID)||""},name:t,npv:1,property:"fp",ps:e,ref:s.location.href,sa:"",secure:1,sp:(null===(a=null==f?void 0:f.i13n)||void 0===a?void 0:a.SPACEID)||"2023538075",ssl:1,ult:i};for(var d in n)n.hasOwnProperty(d)&&(l[d]=n[d]);if(v){var c=v.evtSettings("AUTO");l.sa=(null==c?void 0:c.sa)||""}return l}function x(e,t){var n;t=t||!1,v.inProgress()?v.inProgress()===E&&(v.abort(),t&&s._darlaAutoEvt&&s._darlaAutoEvt.ps&&v.add(s._darlaAutoEvt),v.add(e),v.event(g)):(t&&(null===(n=null==s?void 0:s._darlaAutoEvt)||void 0===n?void 0:n.ps)&&v.add(s._darlaAutoEvt),v.add(e),v.event(g))}v?R():s.addEventListener("darlaReadyOnAsync",(function(){R()}))},o=function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};var a=function(e){var t=window.rapidInstance,n=e.meta,a=n.index,r=n.selectedValue,i=n.type,s=n.ylk,l=s.sec,d=s.slk,c=void 0===d?r:d,f=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}(s,["sec","slk"]);f.elm||(f.elm="btn"),t.beaconClick(l,c,a,o(o({},f),{elmt:i}),"")},r=window.wafer,i=function(){var e,t=window.wafer;n(),(e=window.s)&&e.t(),t.on("autocomplete:select",a),t.on("autocomplete:deleted",a),function(){window.wafer.on("form:submit",(function(e){var t;if("darkmode-switcher-form"===e.elem.getAttribute("id")){var n=null===(t=e.meta.body.homeData)||void 0===t?void 0:t.theme;window.YAHOO.switchColorSchema("DARKMODE"===n?"dark":"light")}}));var e=document.getElementById("darkmodeTheme"),t=document.documentElement.getAttribute("data-color-scheme");t?(e&&(e.checked="dark"===t),window.wafer.base.colorSchema=t):e&&"dark"===window.wafer.base.colorSchema&&(e.checked=!0)}()};r?r.ready((function(){i()})):document.body.addEventListener("wafer:ready",(function(){i()})),window.YAHOO.switchColorSchema||(window.YAHOO.switchColorSchema=function(e){document.documentElement.setAttribute("data-color-scheme",e);var t=document.body.classList,n="system-theme-default-off";"dark"===e?(t.add(n,"theme-dark"),t.remove("theme-light")):(t.add(n,"theme-light"),t.remove("theme-dark")),window.wafer.base.colorSchema=e})}();
//# sourceMappingURL=fpDesktop.js.map


}
/*
     FILE ARCHIVED ON 00:41:40 Sep 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:25 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.125
  exclusion.robots.policy: 0.108
  cdx.remote: 0.128
  esindex: 0.011
  LoadShardBlock: 330.559 (6)
  PetaboxLoader3.datanode: 244.206 (9)
  load_resource: 241.751 (2)
  PetaboxLoader3.resolve: 135.713 (2)
  loaddict: 6.71
*/