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

YUI.add("type_idletimer",function(a,j){var c=false,d=-1,f=false,i=a.config.doc,g=30000;function b(k){clearTimeout(d);if(f){if(c){e();}d=setTimeout(e,g);}}function h(){clearTimeout(d);if(f){e(a.Af.PageViz.isHidden());}}function e(k){if(typeof k!="undefined"){if(k===true){d=setTimeout(function(){a.IdleTimer.fire("hidden");},g);}else{a.IdleTimer.fire("active");}}else{var l=false;c=!c;a.IdleTimer.fire(c?"idle":"active");}}a.IdleTimer={isRunning:function(){return f;},isIdle:function(){return c;},start:function(k){f=true;c=false;if(typeof k==="number"){g=k;}a.on("mousemove",b,i);a.on("mousedown",b,i);a.on("keydown",b,i);a.on("touchstart",b,i);if(a.Af.PageViz){a.Af.PageViz.on(["hidden","visible"],h);}d=setTimeout(e,g);},stop:function(){f=false;clearTimeout(d);a.detach("mousemove",b,i);a.detach("mousedown",b,i);a.detach("keydown",b,i);a.detach("touchstart",b,i);a.Af.PageViz.detach(["hidden","visible"],h);}};a.augment(a.IdleTimer,a.Event.Target,true,null,{emitFacade:true});},"1.0.0",{requires:["af-pageviz"]});/* Copyright (c) 2018, Yahoo! Inc.  All rights reserved. */


}
/*
     FILE ARCHIVED ON 23:57:15 Jun 30, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:42:57 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 440.87
  exclusion.robots: 0.179
  exclusion.robots.policy: 0.134
  cdx.remote: 0.098
  esindex: 0.014
  LoadShardBlock: 342.444 (3)
  PetaboxLoader3.datanode: 358.49 (5)
  load_resource: 267.747 (2)
  PetaboxLoader3.resolve: 235.659 (2)
*/