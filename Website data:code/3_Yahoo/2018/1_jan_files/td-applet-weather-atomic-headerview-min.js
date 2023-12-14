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

YUI.add("td-applet-weather-atomic-headerview",function(e,t){"use strict";var n=".LocationPanel",r=".js-city-name";e.namespace("TD.Applet").WeatherHeaderView=e.Base.create("TDAppletWeatherHeaderView",e.Af.AppletView,[],{autoRender:!1,locationPicker:null,titleNode:null,onlyShowCity:!1,initializer:function(t){var r=this,i=r.get("container"),s,o=i.ancestor(".js-applet"),u=r.get("model"),a,f,l=u.syncContext.context.crumb||null,c=u.get("config").showWidgetLink;t=t||{},r.onlyShowCity=t.onlyShowCity===!0,s=u.get("data"),a={container:null,current:null,favorite:null,user_crumb:l,tooltip_conf:{container:o},i13n:s.i13n,show_manage_link:c},s.useplus&&(a.useplus=!0),s.current&&(a.current=s.current),s.favorite&&(a.favorite=s.favorite),t.ui.tooltipPosition&&(a.tooltip_conf.position=t.ui.tooltipPosition),t.ui.glyphHook&&(a.glyphHook=t.ui.glyphHook),t.autoDetectLocation!==null&&(a.autoDetectLocation=t.autoDetectLocation===!0),f=i&&i.one(n);if(!f)return;a.container=f,t.panelType&&t.panelType==="detection"?e.use("af-location-detection",function(e){r.locationPicker=new e.Af.LocationDetection(a)}):e.use("af-location-panel",function(e){r.locationPicker=new e.Af.LocationPanel(a)}),r.get("model").after("dataChange",r.handleSelectedLocationChange,r)},handleSelectedLocationChange:function(e){var t=this.get("model"),n=t.getDataModel("weather"),i,s="Weather",o,u=n.get("weatherDataList"),a=n.get("currentLoc"),f=t.get("i18n")||{};this.titleNode||(this.titleNode=this.get("container").one(r)),u[0]&&u[0].location&&(i=u[0].location,i&&(i.displayName?s=i.displayName:(i.city&&(s=i.city),this.onlyShowCity||(o=i.statecode||i.state,o&&(s+=", "+o))),a.woeid&&i.woeid&&a.woeid===i.woeid&&(s+='\n<b class="Fz-s Dimmed">('+(f.CURRENT_LOCATION||"Current Location")+")</b>"))),this.titleNode.setHTML(s)}})},"@VERSION@",{requires:["af-applet-view","mjata-model-store"]});


}
/*
     FILE ARCHIVED ON 00:38:13 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:17 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 95.653
  exclusion.robots: 0.108
  exclusion.robots.policy: 0.1
  cdx.remote: 0.05
  esindex: 0.009
  LoadShardBlock: 50.151 (3)
  PetaboxLoader3.datanode: 84.759 (5)
  load_resource: 193.024 (2)
  PetaboxLoader3.resolve: 111.184 (2)
*/