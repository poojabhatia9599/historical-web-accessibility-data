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

YUI.add("td-applet-weather-atomic-headerview",function(e,t){"use strict";e.namespace("TD.Applet").WeatherHeaderView=e.Base.create("TDAppletWeatherHeaderView",e.Af.AppletView,[],{autoRender:!1,locationPicker:null,titleNode:null,onlyShowCity:!1,initializer:function(t){var o,i,n,a=this,l=a.get("container"),c=l.ancestor(".js-applet"),r=a.get("model"),s=r.syncContext.context.crumb||null,u=r.get("config").showWidgetLink;t=t||{},a.onlyShowCity=!0===t.onlyShowCity,o=r.get("data"),i={container:null,current:null,favorite:null,user_crumb:s,tooltip_conf:{container:c},i13n:o.i13n,show_manage_link:u},o.useplus&&(i.useplus=!0),o.current&&(i.current=o.current),o.favorite&&(i.favorite=o.favorite),t.ui.tooltipPosition&&(i.tooltip_conf.position=t.ui.tooltipPosition),t.ui.glyphHook&&(i.glyphHook=t.ui.glyphHook),null!==t.autoDetectLocation&&(i.autoDetectLocation=!0===t.autoDetectLocation),(n=l&&l.one(".LocationPanel"))&&(i.container=n,t.panelType&&"detection"===t.panelType?e.use("af-location-detection",function(e){a.locationPicker=new e.Af.LocationDetection(i)}):e.use("af-location-panel",function(e){a.locationPicker=new e.Af.LocationPanel(i)}),a.get("model").after("dataChange",a.handleSelectedLocationChange,a))},handleSelectedLocationChange:function(e){var t,o,i=this.get("model"),n=i.getDataModel("weather"),a="Weather",l=n.get("weatherDataList"),c=n.get("currentLoc"),r=i.get("i18n")||{};this.titleNode||(this.titleNode=this.get("container").one(".js-city-name")),l[0]&&l[0].location&&(t=l[0].location)&&(t.displayName?a=t.displayName:(t.city&&(a=t.city),this.onlyShowCity||(o=t.statecode||t.state)&&(a+=", "+o)),c.woeid&&t.woeid&&c.woeid===t.woeid&&(a+='\n<b class="Fz-s Dimmed">('+(r.CURRENT_LOCATION||"Current Location")+")</b>")),this.titleNode.setHTML(a)}})},"@VERSION@",{requires:["af-applet-view","mjata-model-store"]});

}
/*
     FILE ARCHIVED ON 14:43:43 Apr 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:36 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 178.717
  exclusion.robots: 0.118
  exclusion.robots.policy: 0.11
  cdx.remote: 0.05
  esindex: 0.009
  LoadShardBlock: 142.775 (3)
  PetaboxLoader3.datanode: 173.782 (5)
  load_resource: 126.866 (2)
  PetaboxLoader3.resolve: 69.485 (2)
*/