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

(function(e,t){"use strict";function s(){var e=location.href.split("#")[1]||"";/^\{%22/.test(e)&&(e=decodeURIComponent(e));try{return $.parseJSON(e)}catch(t){return{}}}e.ados_results=e.ados_results||null;var n=e.ADS_GLOBALS.network,r=e.ADS_GLOBALS.site,i={main:5,sponsorship:8},o=s(),u=o.properties||{};u.percentage=Math.round(Math.random());if(e.SKIP_AD_PROBABILITY&&Math.random()<=e.SKIP_AD_PROBABILITY){var a=o.keywords?o.keywords:[],f=!1;if(e.SKIP_AD_KEYWORDS&&a)for(var l=0;l<a.length;l++)if($.inArray(a[l],e.SKIP_AD_KEYWORDS)!==-1){f=!0;break}if(f){var c=document.getElementById("main"),h=document.createElement("img"),p=Math.floor(Math.random()*e.SKIP_AD_IMAGES.length);h.height=250,h.width=300,h.src=e.SKIP_AD_IMAGES[p],c.appendChild(h);return}}ados.run.push(function(){ados.isAsync=!0;var t=null;if(o.placements){var s=o.placements.split(",");for(var a=0;a<s.length;a++){var f=s[a].split(":"),l=f[0],c=f[1];t=ados_add_placement(n,r,l,i[l]),t.setFlightCreativeId(c),t.setProperties(u)}}else for(var l in i)t=ados_add_placement(n,r,l,i[l]),t.setProperties(u);ados_setWriteResults(!0),o.keywords&&ados_setKeywords(o.keywords),ados_load();var h=0,p=setInterval(function(){h++,e.ados_results&&(clearInterval(p),e.ados_results.sponsorship&&(e.postMessage?e.parent.postMessage("ados.createAdFrame:sponsorship",o.origin):(iframe=document.createElement("iframe"),iframe.src="/static/createadframe.html",iframe.style.display="none",document.documentElement.appendChild(iframe))))},50)})})(this);

}
/*
     FILE ARCHIVED ON 20:02:46 May 31, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:30:37 Jan 25, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.102
  exclusion.robots.policy: 0.09
  cdx.remote: 0.139
  esindex: 0.013
  LoadShardBlock: 185.155 (6)
  PetaboxLoader3.datanode: 99.775 (7)
  PetaboxLoader3.resolve: 71.922 (2)
  load_resource: 54.771
*/