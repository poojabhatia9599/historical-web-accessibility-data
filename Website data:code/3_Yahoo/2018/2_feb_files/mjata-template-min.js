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

YUI.add("mjata-template",function(e){"use strict";var t={},n=function(){},r=e.Object;t.dust={hasTemplate:function(e){return!!(dust&&dust.cache&&dust.cache[e])},render:function(e,t,n,i){if(!this.hasTemplate(e)){i("missing template: "+e);return}if(n&&r.size(n)>0){var s=dust.makeBase(n);dust.render(e,s.push(t),i)}else dust.render(e,t,i)}},e.namespace("Mjata").Template={render:function(e,i,s,o){o=o||n;var u;r.some(t,function(t){return t.hasTemplate(e)?(u=t,!0):!1}),u?u.render(e,i,s,o):o("Missing engine: "+e)}}},"@VERSION@",{requires:["dust"]});


}
/*
     FILE ARCHIVED ON 13:43:04 Jan 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:42 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 252.203
  exclusion.robots: 0.107
  exclusion.robots.policy: 0.099
  cdx.remote: 0.05
  esindex: 0.007
  LoadShardBlock: 198.393 (3)
  PetaboxLoader3.datanode: 242.572 (5)
  load_resource: 303.393 (2)
  PetaboxLoader3.resolve: 225.541 (2)
*/