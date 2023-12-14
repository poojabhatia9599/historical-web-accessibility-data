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

YUI.add("type_advance_desktop_viewer",function(c,b){var a=c.Base.create("MyApp",c.Base,[c.Af.Applets,c.Af.Rapid,c.Highlander.Client],{initializer:function(e){var f,g=c.config.doc,i,d="ontouchstart" in g.documentElement,h=function(j){return["INPUT","TEXTAREA"].indexOf(j.nodeName)!==-1;};for(i in c.My.Extensions){if(c.Lang.isFunction(c.My.Extensions[i].init)){c.My.Extensions[i].NAME=i;c.later(Math.floor(Math.random()*20),c.My.Extensions[i],function(){this.init();});}}f=c.one(".Col2");c.on("orientationchange",function(j){if(f){f.setStyle("display","none");c.later(0,this,function(){f.setStyle("display","block");},false);}},window);if(d){c.on("touchstart",function(k){var j=k.target;if(!h(j)&&h(g.activeElement)&&!j.ancestor(".yui3-aclist",true)){g.activeElement.blur();}});}}},{});c.namespace("My").App=a;},"0.0.1",{requires:["stencil","af-applets","base","af-rapid","af-beacon","highlander-client"]});/* Copyright (c) 2018, Yahoo! Inc.  All rights reserved. */


}
/*
     FILE ARCHIVED ON 15:21:55 Aug 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:33 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 822.107
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.082
  cdx.remote: 0.059
  esindex: 0.009
  LoadShardBlock: 795.002 (3)
  PetaboxLoader3.datanode: 1486.975 (5)
  load_resource: 1016.865 (2)
  PetaboxLoader3.resolve: 133.331 (2)
*/