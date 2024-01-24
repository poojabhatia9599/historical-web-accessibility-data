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

!function(){let n,e=0;function i(){var n,e,i;const o=document.getElementsByClassName("monalixa-event"),t="maex";if(null==o?void 0:o.length)for(let t=0;t<o.length;t++){const a=o[t],d=null===(n=a.dataset)||void 0===n?void 0:n.monalixaId,r=null===(e=a.dataset)||void 0===e?void 0:e.monalixaTrigger,u=null===(i=a.dataset)||void 0===i?void 0:i.monalixaAction;if(d&&r&&u&&"setcookie"===u)"click"===r?window.wafer.utils.bindEvent(a,"click",l):"onload"===r&&l(null,a)}function l(n,e){var i,o,l,a,d;const r=(null==n?void 0:n.currentTarget)||e,u=null===(i=null==r?void 0:r.dataset)||void 0===i?void 0:i.monalixaId;if(!u)return;const v=new Date,w=Math.round(v.getTime()/1e3),c=null===(l=null===(o=window.wafer)||void 0===o?void 0:o.utils)||void 0===l?void 0:l.getCookie(t);let s={};if(c)try{s=JSON.parse(c)}catch(n){s={}}s[u]=w,v.setDate(v.getDate()+180),null===(d=null===(a=window.wafer)||void 0===a?void 0:a.utils)||void 0===d||d.setCookie(t,window.encodeURIComponent(JSON.stringify(s)),{expires:v,path:"/"})}}window.wafer?window.wafer.ready((function(){i()})):n=setInterval((function(){e++,window.wafer&&(clearInterval(n),window.wafer.ready((function(){i()}))),e>20&&clearInterval(n)}),100)}();

}
/*
     FILE ARCHIVED ON 20:15:00 Apr 30, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:49:19 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.091
  cdx.remote: 0.108
  esindex: 0.009
  LoadShardBlock: 259.601 (6)
  PetaboxLoader3.datanode: 306.874 (8)
  load_resource: 227.661 (2)
  PetaboxLoader3.resolve: 85.083 (2)
*/