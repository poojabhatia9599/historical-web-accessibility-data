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

(function(g){g.execute(function(){g.when("generic-observable").register("gw-herotator-controller",function(e){var b=function(){};return function(i){function f(){t.notifyObservers("delayBegin")}function c(){t.notifyObservers("delayInterrupted")}function h(a){for(var d=0;d<y.length;d++)if(y[d]===a)return d+1}function d(a){a=a||{};return{delay_complete:a.delay_complete||b,js_ready:a.js_ready||b,fg_loaded:a.fg_loaded||b,mouse_move:a.mouse_move||b,mouse_leave:a.mouse_leave||b,delay_interrupted_timeout:a.delay_interrupted_timeout||
b,rotation_complete:a.rotation_complete||b,goto_card:function(a){a!==w&&s.user_navigation(y[a-1])},user_navigation:a.user_navigation||function(a){s=new n(a)},user_interaction:a.user_interaction||function(){s.user_navigation(y[w-1])},stop_autorotation:a.stop_autorotation||function(){s.user_navigation(y[w-1])},pause:a.pause||b,resume:a.resume||b}}function k(){function a(){!b&&B[c]&&(s=u===1?new p:new m)}f();var c=y[(w-1+1)%u+1-1],b=!0;return new d({fg_loaded:function(d){d===c&&a()},delay_complete:function(){b=
!1;a()},mouse_move:function(){s=new g},pause:function(){s=new o}})}function g(){c();return new d({mouse_move:c,mouse_leave:function(){s=new k},delay_interrupted_timeout:function(){s.mouse_leave()},pause:function(){s=new o(!0)}})}function o(a){c();return new d({mouse_move:function(){a=!0;c()},mouse_leave:function(){a=!1},resume:function(){s=a?new g:E>0?new k:new p}})}function m(){t.notifyObservers("autorotating");w=(w-1+1)%u+1;t.notifyObservers("gotoCard",w);E--;return new d({rotation_complete:function(){s=
E>0?new k:new p},mouse_move:function(){s=E>0?new j:new p},pause:function(){s=new a}})}function j(){var a=!1;return new d({rotation_complete:function(){f();s=a?new o:new g},pause:function(){a=!0},resume:function(){a=!1}})}function a(){var a=!1;return new d({rotation_complete:function(){f();s=new o(a)},mouse_move:function(){a=!0},mouse_leave:function(){a=!1}})}function n(a){t.notifyObservers("userNavigation");w=h(a);t.notifyObservers("gotoCard",w);return new d({rotation_complete:function(){s=new p},
user_navigation:function(a){s=new q(a)},user_interaction:b})}function q(a){return new d({rotation_complete:function(){s=new n(a)},user_navigation:function(d){a=d},user_interaction:b})}function p(){t.notifyObservers("stopAutorotation");return new d({})}var i=i||{},t=new e,s=new function(){function a(){B[v]&&p&&(t.notifyObservers("ready"),s=new k,f&&s.pause(),c&&s.stop_autorotation())}var p=!1,c=!1,f=!1;return new d({fg_loaded:function(d){d===v&&a()},js_ready:function(){p=!0;a()},user_navigation:b,
stop_autorotation:function(){c=!0},pause:function(){f=!0},resume:function(){f=!1}})},y=i.fgIDs||[],u=y.length,v=y[0],w=i.card_num||1,B={},E=i.circular?Infinity:u;return{delayComplete:function(){s.delay_complete()},jsReady:function(){s.js_ready()},fgLoaded:function(a){B[a]=!0;v===a&&t.notifyObservers("atfLoaded");s.fg_loaded(a)},mouseMove:function(){s.mouse_move()},mouseLeave:function(){s.mouse_leave()},delayInterruptedTimeout:function(){s.delay_interrupted_timeout()},rotationComplete:function(){s.rotation_complete()},
gotoCard:function(a){s.goto_card(a)},userInteraction:function(){s.user_interaction()},userNavigation:function(a){s.user_navigation(a)},stopAutorotation:function(){s.stop_autorotation()},pause:function(){s.pause()},resume:function(){s.resume()},addObserver:t.addObserver,removeObserver:t.removeObserver}}})})})(function(){var g=window.AmazonUIPageJS||P,e=g.attributeErrors;return e?e("AmazonGatewayHerotatorJS"):g}());

}
/*
     FILE ARCHIVED ON 08:08:57 Jun 01, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:17:19 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 55.712
  exclusion.robots: 0.075
  exclusion.robots.policy: 0.065
  cdx.remote: 0.113
  esindex: 0.01
  LoadShardBlock: 30.524 (3)
  PetaboxLoader3.datanode: 34.323 (4)
  load_resource: 50.896
  PetaboxLoader3.resolve: 20.58
*/