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

!function(){"use strict";var e={context:{bucket:"",bucketId:"",device:"",intl:"",lang:"",meta:{},region:"",rid:"",site:""},i13n:{}},t=["MAST","LDRB"],n=function(){var n,a,r,o,s,i=window,l=document,d=i.adsConfig,c=i.YAHOO,f=void 0===c?e:c,v=i.DARLA,u=void 0===v?null:v,p=i.wafer,m=p.base||{},g={},h="adRotateEvt",E="scroll",y="homepage-viewer",L="sda-",b="sticky-lrec2-footer",A="sda-LREC4",O="sda-MON2",w="native-leaderboard-ad",C="gemini-ad-refresh",B=!1;function R(){var e;if(d&&(a=d.rotation)&&(null===(e=null==d?void 0:d.positions)||void 0===e?void 0:e[a.currentpos]))if(d.clientPositionMeta.positions.forEach((function(e){g[e.id]=e})),o=g[a.currentpos],u)if(a.enableNavAdRotation&&p.on("fetch:success",(function(e){e.elem.classList.contains("nextgen-page-navigation")&&function(e){var t=i._darlaAutoEvt;t||(t=u.evtSettings("AUTO")||{});for(var n=[],a=0;a<e.length;a++){var r=e[a],o=u.posSettings(r);if(o&&o.dest){var s=document.getElementById(o.dest);s&&I(s,0)&&s.offsetHeight>1&&n.push(r)}}if(n.length){var l=t.sa,d={experience:t.experience,name:h,npv:1,property:"fp",ps:n.join(","),ref:i.location.href,sa:l,secure:t.secure,sp:t.sp,ssl:t.ssl,ult:t.ult};u.add(d),u.event(h)}}(t)})),r=l.getElementById(L+o.pos)){n={offsetX:0,offsetY:parseInt(a.offset,10)||100},p.on(E,D),i.addEventListener("viewerOpened",(function(){B=!0})),i.addEventListener("viewerScrollRestored",(function(){B=!1,function(){var e,t;if(!i.pageloadNonCollapsedAds)return;for(var n=[],r=i.pageloadNonCollapsedAds,o=0,d=["LREC","MAST","LDRB","UBALDRB","UBALREC","UBALREC2","UBALREC3"];o<d.length;o++){var c=d[o],f=c;if(r.indexOf(c)>=0){c.includes("UBA")&&(f=c.split("UBA")[1]);var v=l.getElementById(L+f);v&&I(v)&&n.push(c)}}if(n.length)S(t=_(n,h),!0);else if(r.indexOf("FPAD")>=0&&i.safeframeOptinPositions&&i.safeframeOptinPositions.FPAD){t=_("FPAD",h);var p=u.config(),m=l.getElementById("sda-FPAD");!!(null===(e=null==p?void 0:p.positions)||void 0===e?void 0:e.FPAD)&&m&&I(m)&&S(t)}if(!a)return;var E=l.getElementById(b),y=l.getElementById(A),B=l.getElementById(O);if(E&&I(E)||y&&I(y)||a.mon2enabled&&B&&I(B)){var R=[],P=null==g?void 0:g[a.currentpos],D=(null==P?void 0:P.pos)||"";if(D&&R.push(D),a.mon2enabled?(R.push("MON2"),a.lrec4enabled&&a.lrec4pos&&R.push(a.lrec4pos)):a.lrec4enabled&&a.lrec4pos&&R.push(a.lrec4pos),R.length){var N="fetch_selective_ad_"+D.toLowerCase(),x=_(R.join(","),N);u.add(x),u.event(N)}}s&&I(s)&&function(){if(!s)return;var e=s.getElementsByClassName(C);if(e&&e.length>0){var t=(e=e[0]).getAttribute("data-url"),n=e.getAttribute("data-body");t&&n&&i.wafer&&i.wafer.utils&&i.wafer.utils.fetchWithCache&&i.wafer.utils.fetchWithCache(t,{body:n,cache:0}).then((function(t){if(t&&t.html){e.innerHTML=t.html;var n=e.getElementsByClassName(w);if(n&&n.length>0){s.replaceWith(n[0]);var a=l.getElementsByClassName(w);a&&a.length>0&&(s=a[0],i.wafer.base.sync(s.parentElement))}}}))}}()}()})),i.addEventListener("ads:finish:parse",P),setTimeout((function(){D()}),300);var c=l.getElementsByClassName(w);c&&c.length>0&&(s=c[0])}else console.error("No LRECAdsContainer");else console.error("No Darla instance")}function P(e){var t=e.detail.positions;for(var n in t)if(t.hasOwnProperty(n)){var a=t[n].posData.conf.clean,r=document.getElementById(a);r&&(r=r.parentElement)&&r.classList&&(r.classList.contains("Ht-pl-LDRB")||r.classList.contains("Ht-pl-LREC"))&&(r.classList.remove("Ht-pl-LDRB"),r.classList.remove("Ht-pl-LREC"))}if(t.MON2&&t.LREC3&&t.LREC4){var o=t.MON2.validAd,s=document.getElementById("sda-LREC3"),i=document.getElementById("sda-LREC4");o?(s.classList.add("D(n)"),i.classList.add("D(n)")):(s.classList.remove("D(n)"),i.classList.remove("D(n)"))}}function I(e,t){return t=t||{},p.utils.elementInView(e,t,m.viewport)}function D(e){B||I(r,n)&&(N(),p.removeListener(E,D))}function N(){if(a){var e,t=o,n="",r=[t],s=a.lrec4pos||"LREC4",i=L+s,l=g[s]||x(s,i,i+"-iframe",300,250),d=a.mon2pos||"MON2",c=L+d,f=g[d]||x(d,c,c+"-iframe",300,600);t&&(e=t.pos,t.id=e,n+=e),a.lrec4enabled&&(n+=","+l.pos,r.unshift(l)),a.mon2enabled&&(n+=","+f.pos,r.push(f));var v,p,m="fetch_selective_ad_"+e.toLowerCase(),h=_(n,m);if(u.inProgress()){var E=u.inProgress();if(!E||E!==y)return v=0,void(p=setInterval((function(){v>20?clearInterval(p):(u.inProgress()||(clearInterval(p),N()),v++)}),500));u.abort(),u.add(h),u.addPos(r),u.event(m)}else a.lrec2selectiveenabled&&(u.add(h),u.addPos([r]),u.event(m))}}function x(e,t,n,a,r){return{clean:t,dest:n,h:r,metaSize:!0,pos:e,supports:!1,w:a}}function _(e,t,n){var a,r,o=f.context,s={pg:{device:o.device,intl:o.intl,property:"fp",rid:o.rid,test:o.bucket}},l={experience:{bucket:o.bucket||"",pd:"modal",pt:"index",rid:o.rid||"",sid:(null===(a=null==f?void 0:f.i13n)||void 0===a?void 0:a.currentSID)||""},name:t,npv:1,property:"fp",ps:e,ref:i.location.href,sa:"",secure:1,sp:(null===(r=null==f?void 0:f.i13n)||void 0===r?void 0:r.SPACEID)||"2023538075",ssl:1,ult:s};for(var d in n)n.hasOwnProperty(d)&&(l[d]=n[d]);if(u){var c=u.evtSettings("AUTO");l.sa=c.sa}return l}function S(e,t){var n;t=t||!1,u.inProgress()?u.inProgress()===y&&(u.abort(),t&&i._darlaAutoEvt&&i._darlaAutoEvt.ps&&u.add(i._darlaAutoEvt),u.add(e),u.event(h)):(t&&(null===(n=null==i?void 0:i._darlaAutoEvt)||void 0===n?void 0:n.ps)&&u.add(i._darlaAutoEvt),u.add(e),u.event(h))}u?R():i.addEventListener("darlaReadyOnAsync",(function(){R()}))},a=function(){return a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},a.apply(this,arguments)};var r=function(e){var t=window.rapidInstance,n=e.meta,r=n.index,o=n.selectedValue,s=n.type,i=n.ylk,l=i.sec,d=i.slk,c=void 0===d?o:d,f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(i,["sec","slk"]);f.elm||(f.elm="btn"),t.beaconClick(l,c,r,a(a({},f),{elmt:s}),"")},o=window.wafer;null==o||o.ready((function(){n(),o.on("autocomplete:select",r),o.on("autocomplete:deleted",r)}))}();
//# sourceMappingURL=fpDesktop.js.map


}
/*
     FILE ARCHIVED ON 02:56:22 May 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:48:56 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.112
  exclusion.robots.policy: 0.095
  cdx.remote: 0.141
  esindex: 0.014
  LoadShardBlock: 129.766 (6)
  PetaboxLoader3.datanode: 157.517 (8)
  load_resource: 175.69 (2)
  PetaboxLoader3.resolve: 107.277 (2)
*/