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

YUI.add("type_advance_desktop_viewer",function(c,b){var a=c.Base.create("MyApp",c.Base,[c.Af.Applets,c.Af.Rapid,c.Highlander.Client],{initializer:function(e){var f,g=c.config.doc,i,d="ontouchstart" in g.documentElement,h=function(j){return["INPUT","TEXTAREA"].indexOf(j.nodeName)!==-1;};for(i in c.My.Extensions){if(c.Lang.isFunction(c.My.Extensions[i].init)){c.My.Extensions[i].NAME=i;c.later(Math.floor(Math.random()*20),c.My.Extensions[i],function(){this.init();});}}f=c.one(".Col2");c.on("orientationchange",function(j){if(f){f.setStyle("display","none");c.later(0,this,function(){f.setStyle("display","block");},false);}},window);if(d){c.on("touchstart",function(k){var j=k.target;if(!h(j)&&h(g.activeElement)&&!j.ancestor(".yui3-aclist",true)){g.activeElement.blur();}});}}},{});c.namespace("My").App=a;},"0.0.1",{requires:["stencil","af-applets","base","af-rapid","af-beacon","highlander-client"]});/* Copyright (c) 2019, Yahoo! Inc.  All rights reserved. */


}
/*
     FILE ARCHIVED ON 23:58:01 Nov 30, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:33:07 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 319.887
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.058
  cdx.remote: 0.054
  esindex: 0.01
  LoadShardBlock: 80.051 (3)
  PetaboxLoader3.resolve: 110.658 (2)
  PetaboxLoader3.datanode: 100.929 (4)
  load_resource: 143.208
*/