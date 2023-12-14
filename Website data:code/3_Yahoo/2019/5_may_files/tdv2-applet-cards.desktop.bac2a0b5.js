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

function populateDataUuidList(){var t=[],e=document.querySelectorAll("#local-news a[data-uuid]");return(e=[].slice.call(e)).forEach(function(e){t.push({eligible:!0,href:e.getAttribute("href"),id:e.getAttribute("data-uuid")})}),t}function fireContentInitEvent(t,n){n.length&&setTimeout(function e(){t&&t.Af&&t.Af.Event&&t.Af.Event.fire&&"function"==typeof t.Af.Event.fire?t.Af.Event.fire("content:new",{guid:"p_50000173",list:n}):setTimeout(e,1e3)},0)}YUI&&YUI().use("node-base",function(e){e.Global.on("ymediaReady",function(e){YMedia=e.e,fireContentInitEvent(YMedia,populateDataUuidList()),window.wafer.ready(function(){window.wafer.on("fetch:success",function(e){"local-news"===(e.elem||{}).id&&fireContentInitEvent(YMedia,populateDataUuidList())})})})});

}
/*
     FILE ARCHIVED ON 07:04:37 May 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:26:43 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 150.47
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.057
  cdx.remote: 0.053
  esindex: 0.009
  LoadShardBlock: 117.412 (3)
  PetaboxLoader3.resolve: 126.613 (5)
  PetaboxLoader3.datanode: 57.271 (5)
  load_resource: 100.748 (2)
*/