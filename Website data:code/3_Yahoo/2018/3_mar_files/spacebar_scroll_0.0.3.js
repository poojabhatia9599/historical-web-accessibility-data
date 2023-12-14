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

YUI.add("type_spacebar_scroll",function(e,d){var f="mega-uh-wrapper";var a=40;var c=250;var b=document.documentElement;keydown=function(k){var i=document.activeElement.nodeName;if((k.keyCode===32&&i==="BODY")||(k.keyCode===33||k.keyCode===34)){var h=window.innerHeight;var g=document.getElementById(f)?document.getElementById(f).offsetHeight:0;var j=h-g-a;k.preventDefault();if(k){isShift=k.shiftKey||k.keyCode===33?true:false;}else{isShift=window.event.shiftKey||k.keyCode===33?true:false;}currScrollPosition=(window.pageYOffset||b.scrollTop)-(b.clientTop||0);scrollToHere=j+currScrollPosition;if(isShift){scrollToHere=currScrollPosition-j;}smoothScrollTo(scrollToHere);}};window.smoothScrollTo=(function(){var i,h,g;return function(k){var l=window.pageYOffset,m=k-window.pageYOffset;h=Date.now();g=0;if(i){clearInterval(i);}function j(){var n;g=(Date.now()-h)/c;if(g>=1){clearInterval(i);g=1;}n=g*m+l;window.scrollBy(0,n-window.pageYOffset);}i=setInterval(j,10);return i;};}());window.onkeydown=keydown;},"0.0.1");/* Copyright (c) 2018, Yahoo! Inc.  All rights reserved. */


}
/*
     FILE ARCHIVED ON 21:26:50 Feb 28, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:41:27 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 159.792
  exclusion.robots: 0.141
  exclusion.robots.policy: 0.131
  cdx.remote: 0.059
  esindex: 0.009
  LoadShardBlock: 106.793 (3)
  PetaboxLoader3.datanode: 87.324 (5)
  load_resource: 154.144 (2)
  PetaboxLoader3.resolve: 47.467 (2)
*/