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

!function(){"use strict";var e=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},t=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},n=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},i=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},a=function(e,t,n){var i;return function(a){t.value>=0&&(a||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},r=-1,o=function(){n((function(e){var t=e.timeStamp;r=t}),!0)},s=function(){return r<0&&((r=window.webVitals.firstHiddenTime)===1/0&&o(),i((function(){setTimeout((function(){r="hidden"===document.visibilityState?0:1/0,o()}),0)}))),{get firstHiddenTime(){return r}}},u=function(n,r){var o,u=s(),c=e("FCP"),d=function(e){"first-contentful-paint"===e.name&&(p&&p.disconnect(),e.startTime<u.firstHiddenTime&&(c.value=e.startTime,c.entries.push(e),o(!0)))},f=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],p=f?null:t("paint",d);(f||p)&&(o=a(n,c,r),f&&d(f),i((function(t){c=e("FCP"),o=a(n,c,r),requestAnimationFrame((function(){requestAnimationFrame((function(){c.value=performance.now()-t.timeStamp,o(!0)}))}))})))},c=!1,d=-1,f={};var p,m,v=/\s+/g,l=window,g=[];function h(){var e=l.rapidInstance;if(e&&e.getRapidAttribute)for(p=p||e.getRapidAttribute("keys"),m=m||e.getRapidAttribute("spaceid");g.length;)w(g.shift())}function w(e){var t=e.entries,n=void 0===t?[]:t,i=e.name,a=e.value,r=l.rapidInstance;if(r&&r.beaconPerformanceData&&r.getRapidAttribute&&r.setRapidAttribute){for(var o="CLS"===i?parseFloat(a.toFixed(3)):Math.round(a),s="perf_"+i.toLowerCase(),u=n.length,c=n[u-1]||{},d=u-2;d>=0;d--)n[d].value>c.value&&(c=n[d]);var f=c.element||c.target||c.sources&&c.sources[0]&&c.sources[0].node,g={};g[s]=o,f&&(g[s+"_elmt"]=(f.nodeName||"").toLowerCase(),g[s+"_id"]=f.id||f.className||"",g[s+"_slk"]=(f.innerText||f.alt||f.title||"").replace(v," ").substr(0,150)),c.url&&(g[s+"_url"]=c.url);var h=r.getRapidAttribute("keys"),w=r.getRapidAttribute("spaceid");if(h&&p)for(var y in h)h.hasOwnProperty(y)&&!p.hasOwnProperty(y)&&(p[y]="");r.setRapidAttribute({spaceid:m}),r.beaconPerformanceData({perf_usertime:{utm:g}},p),r.setRapidAttribute({spaceid:w})}}function y(e){l.rapidInstance?(h(),w(e)):g.push(e)}u(y),function(r,o){var u,c=s(),d=e("FID"),f=function(e){e.startTime<c.firstHiddenTime&&(d.value=e.processingStart-e.startTime,d.entries.push(e),u(!0))},p=t("first-input",f);u=a(r,d,o),p&&n((function(){p.takeRecords().map(f),p.disconnect()}),!0),p||window.webVitals.firstInputPolyfill(f),i((function(){d=e("FID"),u=a(r,d,o),window.webVitals.resetFirstInputPolyfill(),window.webVitals.firstInputPolyfill(f)}))}(y),function(r,o){var u,c=s(),d=e("LCP"),p=function(e){var t=e.startTime;t<c.firstHiddenTime&&(d.value=t,d.entries.push(e)),u()},m=t("largest-contentful-paint",p);if(m){u=a(r,d,o);var v=function(){f[d.id]||(m.takeRecords().map(p),m.disconnect(),f[d.id]=!0,u(!0))};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),n(v,!0),i((function(t){d=e("LCP"),u=a(r,d,o),requestAnimationFrame((function(){requestAnimationFrame((function(){d.value=performance.now()-t.timeStamp,f[d.id]=!0,u(!0)}))}))}))}}(y),function(e,t,n){try{var i=window.performance,a=i.getEntriesByType&&i.getEntriesByType("navigation")[0]||{entryType:"navigation",startTime:0},r=i.timing||{};!a[n]&&r[n]&&(a[n]=Math.max(r[n]-r.navigationStart,0));var o=a[n];if(o<0||o>i.now())return;e({delta:o,entries:[a],id:t,name:t,value:o})}catch(e){}}(y,"TTFB","responseStart"),l.addEventListener&&(l.addEventListener("DOMContentLoaded",h),l.addEventListener("pagehide",(function(){!function(r,o){c||(u((function(e){d=e.value})),c=!0);var s,f=function(e){d>-1&&r(e)},p=e("CLS",0),m=0,v=[],l=function(e){if(!e.hadRecentInput){var t=v[0],n=v[v.length-1];m&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(m+=e.value,v.push(e)):(m=e.value,v=[e]),m>p.value&&(p.value=m,p.entries=v,s())}},g=t("layout-shift",l);g&&(s=a(f,p,o),n((function(){g.takeRecords().map(l),s(!0)})),i((function(){m=0,d=-1,p=e("CLS",0),s=a(f,p,o)})))}(y)})))}();


}
/*
     FILE ARCHIVED ON 23:56:06 Mar 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:49:47 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.058
  cdx.remote: 0.094
  esindex: 0.015
  LoadShardBlock: 91.536 (6)
  PetaboxLoader3.datanode: 179.563 (8)
  load_resource: 240.069 (2)
  PetaboxLoader3.resolve: 115.075 (2)
*/