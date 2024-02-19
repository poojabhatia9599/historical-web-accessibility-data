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

(function(e,t){"use strict";function s(){var e=location.href.split("#")[1]||"";/^\{%22/.test(e)&&(e=decodeURIComponent(e));try{return $.parseJSON(e)}catch(t){return{}}}e.ados_results=e.ados_results||null;var n=e.ADS_GLOBALS.network,r=e.ADS_GLOBALS.site,i={main:5,sponsorship:8},o=s();if(e.SKIP_AD_PROBABILITY&&Math.random()<=e.SKIP_AD_PROBABILITY){var u=o.keywords?o.keywords:[],a=!1;if(e.SKIP_AD_KEYWORDS&&u)for(var f=0;f<u.length;f++)if($.inArray(u[f],e.SKIP_AD_KEYWORDS)!==-1){a=!0;break}if(a){var l=document.getElementById("main"),c=document.createElement("img"),h=Math.floor(Math.random()*e.SKIP_AD_IMAGES.length);c.height=250,c.width=300,c.src=e.SKIP_AD_IMAGES[h],l.appendChild(c);return}}ados.run.push(function(){ados.isAsync=!0;var t=null;if(o.placements){var s=o.placements.split(",");for(var u=0;u<s.length;u++){var a=s[u].split(":"),f=a[0],l=a[1];t=ados_add_placement(n,r,f,i[f]),t.setFlightCreativeId(l),t.setProperties({subreddit:o.subreddit})}}else for(var f in i)t=ados_add_placement(n,r,f,i[f]),t.setProperties({subreddit:o.subreddit});ados_setWriteResults(!0),o.keywords&&ados_setKeywords(o.keywords),ados_load();var c=0,h=setInterval(function(){c++,e.ados_results&&(clearInterval(h),e.ados_results.sponsorship&&(e.postMessage?e.parent.postMessage("ados.createAdFrame:sponsorship",o.origin):(iframe=document.createElement("iframe"),iframe.src="/static/createadframe.html",iframe.style.display="none",document.documentElement.appendChild(iframe))))},50)})})(this);

}
/*
     FILE ARCHIVED ON 23:59:17 Feb 29, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:29:56 Jan 25, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.093
  exclusion.robots.policy: 0.083
  cdx.remote: 0.089
  esindex: 0.009
  LoadShardBlock: 144.771 (6)
  PetaboxLoader3.datanode: 175.457 (8)
  load_resource: 210.402 (2)
  PetaboxLoader3.resolve: 102.134 (2)
*/