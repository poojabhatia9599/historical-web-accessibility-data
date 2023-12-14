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

YUI.add("td-relatedvideo-model",function(e){var i={article:"1",slideshow:"2",video:"3"};e.namespace("TD.RelatedVideo").Model=e.Base.create("TDRelatedVideoModel",e.Model,[e.Af.Sync],{resource:"relatedvideo",readonly:!0,consolidate:!1,initializer:function(e){},fireContentEvent:function(t){var n=[];t&&t.length&&(e.Array.each(t,function(e){var t,l,d;e.id&&(l=e.id,d=!0,!1===e.is_eligible&&(l="SS-"+l,d=!1),t={id:l,link:e.link,eligible:d,title:e.title,type:i[e.type]},n.push(t))}),n.length>0&&e.Af.Event.fire("content:init",{guid:"relatedvideo",list:n,fullList:n}))},loadRelatedVideos:function(e,i){var t={params:e},n=this;this.sync("read",t,function(e,t){!e&&t&&(n.fireContentEvent(t),i(null,t))})}})},"@VERSION@",{requires:["af-sync","base-build","model","af-beacon"]});

}
/*
     FILE ARCHIVED ON 00:29:47 Aug 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:33:10 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 98.04
  exclusion.robots: 0.097
  exclusion.robots.policy: 0.084
  cdx.remote: 0.064
  esindex: 0.01
  LoadShardBlock: 69.845 (3)
  PetaboxLoader3.datanode: 65.871 (5)
  PetaboxLoader3.resolve: 1027.945 (3)
  load_resource: 1041.443 (2)
*/