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

YUI.add("type_flash_detection",function(b){function a(){var d=null,j=false;if(b.UA.ie){try{var f=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash");d=f.GetVariable("$version").replace(/[A-Za-z\s]+/g,"").split(",");}catch(i){}}else{if(b.UA.safari){}else{if(typeof navigator.mimeTypes!=="undefined"){var c=navigator.mimeTypes["application/x-shockwave-flash"];if(c){var h=c.enabledPlugin;if(h){d=h.description.replace(/\s[rd]/g,".").replace(/[A-Za-z\s]+/g,"").split(".");}}}}}if(d){j=(d[0]!=="0");}window.flEnabled=j?true:false;if(b.Cookie&&b.Cookie.set){var g=new Date();g.setDate(g.getDate()+30);b.Cookie.set("flash_enabled",j?1:0,{expires:g});}}a();},"0.0.1",{requires:["base"]});/* Copyright (c) 2018, Yahoo! Inc.  All rights reserved. */


}
/*
     FILE ARCHIVED ON 19:54:14 May 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:20 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 136.634
  exclusion.robots: 0.122
  exclusion.robots.policy: 0.113
  cdx.remote: 0.059
  esindex: 0.009
  LoadShardBlock: 83.36 (3)
  PetaboxLoader3.datanode: 55.427 (5)
  PetaboxLoader3.resolve: 104.523 (4)
  load_resource: 99.243 (2)
*/