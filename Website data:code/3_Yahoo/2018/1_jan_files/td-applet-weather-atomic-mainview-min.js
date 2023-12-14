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

YUI.add("td-applet-weather-atomic-mainview",function(e,t){"use strict";e.namespace("TD.Applet").WeatherMainView=e.Base.create("TDAppletWeatherMainView",e.Af.AppletView,[],{autoRender:!1,events:{".js-set-unit":{click:"updateUnit"},".trigger-detect":{click:"triggerDetect"}},suppressErrors:!1,initializer:function(t){var n=this,r=n.get("model"),i=r.getDataModel("weather");n.suppressErrors=t.suppressErrors===!0,r.on("forecastError",e.bind(n.handleError,n)),i.after("weatherDataListChange",n.afterDataChange,n),e.on("fx:done",n.changeAccordianState,n),n.checkEmptyCity(),n.preloadFallbackAssets()},afterDataChange:function(e){this.forceRender()},preloadFallbackAssets:function(){this.get("container").one(".trigger-detect")&&e.use("node-event-simulate",function(){})},checkEmptyCity:function(){var e=this,t=e.get("model"),n=t.get("i18n"),r=e.get("container").one(".js-city-name"),i=n.SEARCH_CITY||"Kindly search your city",s=n.PLACE_NOT_FOUND;r&&r.getHTML().trim()===s&&e.handleError({message:i},"warning",this.get("container").ancestor(".js-applet"))},handleError:function(t,n,r){var i=r||this.get("container");this.suppressErrors!==!0&&e.Af.Message.show(i,{level:n||"error",content:t.message})},updateUnit:function(e){var t=e.target.getData();t&&t.hasOwnProperty("unit")&&this.get("model").saveSettings({unit:t.unit})},triggerDetect:function(t){var n=this;return t.preventDefault(),e.use("node-event-simulate",function(){var e=n.get("container").ancestor(".js-applet"),t=e.one(".App-Hd .js-panel-trigger");t&&t.simulate("click")}),!1},changeAccordianState:function(e){var t=e.fxTarget,n=this.get("model").getDataModel("weather"),r=t.getData("woeid"),i;t&&r&&this.get("container").contains(t)&&(t.hasClass("Collapse-opened")?n.changeAccordianState(r,"e"):n.changeAccordianState(r,"c"),i=n.get("accstate"),this.get("model").saveSettings({accstate:i}))}})},"@VERSION@",{requires:["af-applet-view","af-message","stencil-fx","stencil-fx-collapse"]});


}
/*
     FILE ARCHIVED ON 00:38:07 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:13 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 134.45
  exclusion.robots: 0.13
  exclusion.robots.policy: 0.122
  cdx.remote: 0.05
  esindex: 0.008
  LoadShardBlock: 57.863 (3)
  PetaboxLoader3.datanode: 109.744 (5)
  load_resource: 128.961 (2)
  PetaboxLoader3.resolve: 71.826 (2)
*/