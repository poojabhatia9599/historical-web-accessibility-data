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

(function(e,t){"use strict";function s(){var e=location.href.split("#")[1]||"";/^\{%22/.test(e)&&(e=decodeURIComponent(e));try{return $.parseJSON(e)}catch(t){return{}}}e.ados_results=e.ados_results||null;var n=e.ADS_GLOBALS.network,r=e.ADS_GLOBALS.site,i={main:5,sponsorship:8},o=s();ados.run.push(function(){ados.isAsync=!0;if(o.placements){var t=o.placements.split(",");for(var s=0;s<t.length;s++){var u=t[s].split(":"),a=u[0],f=u[1];ados_add_placement(n,r,a,i[a]).setFlightCreativeId(f)}}else for(var a in i)ados_add_placement(n,r,a,i[a]);ados_setWriteResults(!0),o.keywords&&ados_setKeywords(o.keywords),ados_load();var l=0,c=setInterval(function(){l++,e.ados_results&&(clearInterval(c),e.ados_results.sponsorship&&(e.postMessage?e.parent.postMessage("ados.createAdFrame:sponsorship",o.origin):(iframe=document.createElement("iframe"),iframe.src="/static/createadframe.html",iframe.style.display="none",document.documentElement.appendChild(iframe))))},50)})})(this);

}
/*
     FILE ARCHIVED ON 01:35:26 Nov 01, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:36:52 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.056
  cdx.remote: 0.103
  esindex: 0.01
  LoadShardBlock: 269.337 (6)
  PetaboxLoader3.datanode: 214.178 (8)
  load_resource: 188.469 (2)
  PetaboxLoader3.resolve: 95.409 (2)
*/