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

!function(){var i,n=0;function e(){var i,n,e,o=document.getElementsByClassName("monalixa-event"),a="maex";if(null==o?void 0:o.length)for(var t=0;t<o.length;t++){var l=o[t],d=null===(i=l.dataset)||void 0===i?void 0:i.monalixaId,r=null===(n=l.dataset)||void 0===n?void 0:n.monalixaTrigger,v=null===(e=l.dataset)||void 0===e?void 0:e.monalixaAction;if(d&&r&&v&&"setcookie"===v)"click"===r?window.wafer.utils.bindEvent(l,"click",u):"onload"===r&&u(null,l)}function u(i,n){var e,o,t,l,d,r=(null==i?void 0:i.currentTarget)||n,v=null===(e=null==r?void 0:r.dataset)||void 0===e?void 0:e.monalixaId;if(v){var u=new Date,w=Math.round(u.getTime()/1e3),c=null===(t=null===(o=window.wafer)||void 0===o?void 0:o.utils)||void 0===t?void 0:t.getCookie(a),f={};if(c)try{f=JSON.parse(c)}catch(i){f={}}f[v]=w,u.setDate(u.getDate()+180),null===(d=null===(l=window.wafer)||void 0===l?void 0:l.utils)||void 0===d||d.setCookie(a,window.encodeURIComponent(JSON.stringify(f)),{expires:u,path:"/"})}}}window.wafer?window.wafer.ready((function(){e()})):i=setInterval((function(){n++,window.wafer&&(clearInterval(i),window.wafer.ready((function(){e()}))),n>20&&clearInterval(i)}),100)}();

}
/*
     FILE ARCHIVED ON 05:45:08 Jan 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:50:08 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.106
  exclusion.robots.policy: 0.092
  cdx.remote: 0.156
  esindex: 0.013
  LoadShardBlock: 967.549 (6)
  PetaboxLoader3.datanode: 951.376 (8)
  load_resource: 345.231 (2)
  PetaboxLoader3.resolve: 195.589 (2)
*/