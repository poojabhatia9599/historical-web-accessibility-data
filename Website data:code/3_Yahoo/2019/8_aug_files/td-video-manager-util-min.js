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

YUI.add("td-video-manager-util",function(e){"use strict";var n=!1;e.namespace("TD.Applet").VideoManagerUtil=function(e){this.listeners=[]},e.TD.Applet.VideoManagerUtil.prototype={addVmListeners:function(e){var n=this,t=n.listeners||[];e&&(n.listeners=t.concat(e))},attachBroadcastDockingChange:function(e,n){var t=this;e&&n.docking&&YAHOO.VideoPlatform.API_Events&&e.on(YAHOO.VideoPlatform.API_Events.PLAYER_DOCKED_CHANGE,function(n){var a=n||e&&e.controls.isPlaying();t.preventPlayback(a)})},attachEvents:function(e,n){var t=this,a=e,i=n,s=[i.PLAYBACK_PAUSE],r=[i.PLAYBACK_START,i.PLAYBACK_RESUMED];a&&i&&(s.forEach(function(e){t.addVmListeners(a.on(e,t.preventPlayback(!1)))}),r.forEach(function(e){t.addVmListeners(a.on(e,t.preventPlayback(!0)))}),t.addVmListeners(a.on(i.UI_INTERACT,function(e){"es-view"===(e&&e.srcElement)&&t.preventPlayback(!1)})))},detachVmListeners:function(){var e=this,n=e.listeners||[];n.forEach(function(e){e&&e.detach&&e.detach()}),e.listeners=null},cleanup:function(){this.preventPlayback(!1),this.detachVmListeners()},preventPlayback:function(t){n!==t&&(n=t,e.Global.fire("video-manager:prevent-new-playback",t))}}},"@VERSION@",{requires:["event-base","event-custom"]});

}
/*
     FILE ARCHIVED ON 00:29:47 Aug 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:33:27 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 271.737
  exclusion.robots: 0.106
  exclusion.robots.policy: 0.094
  cdx.remote: 0.064
  esindex: 0.007
  LoadShardBlock: 226.097 (3)
  PetaboxLoader3.datanode: 265.008 (5)
  load_resource: 158.707 (2)
  PetaboxLoader3.resolve: 68.769 (2)
*/