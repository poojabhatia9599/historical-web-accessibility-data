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

YUI.add("td-applet-weather-atomic-mainview",function(e,t){"use strict";e.namespace("TD.Applet").WeatherMainView=e.Base.create("TDAppletWeatherMainView",e.Af.AppletView,[],{autoRender:!1,events:{".js-set-unit":{click:"updateUnit"},".trigger-detect":{click:"triggerDetect"}},suppressErrors:!1,initializer:function(t){var a=this,n=a.get("model"),r=n.getDataModel("weather");a.suppressErrors=!0===t.suppressErrors,n.on("forecastError",e.bind(a.handleError,a)),r.after("weatherDataListChange",a.afterDataChange,a),e.on("fx:done",a.changeAccordianState,a),a.checkEmptyCity(),a.preloadFallbackAssets()},afterDataChange:function(e){this.forceRender()},preloadFallbackAssets:function(){this.get("container").one(".trigger-detect")&&e.use("node-event-simulate",function(){})},checkEmptyCity:function(){var e=this,t=e.get("model").get("i18n"),a=e.get("container").one(".js-city-name"),n=t.SEARCH_CITY||"Kindly search your city",r=t.PLACE_NOT_FOUND;a&&a.getHTML().trim()===r&&e.handleError({message:n},"warning",this.get("container").ancestor(".js-applet"))},handleError:function(t,a,n){var r=n||this.get("container");!0!==this.suppressErrors&&e.Af.Message.show(r,{level:a||"error",content:t.message})},updateUnit:function(e){var t=e.target.getData();t&&t.hasOwnProperty("unit")&&this.get("model").saveSettings({unit:t.unit})},triggerDetect:function(t){var a=this;return t.preventDefault(),e.use("node-event-simulate",function(){var e=a.get("container").ancestor(".js-applet").one(".App-Hd .js-panel-trigger");e&&e.simulate("click")}),!1},changeAccordianState:function(e){var t,a=e.fxTarget,n=this.get("model").getDataModel("weather"),r=a.getData("woeid");a&&r&&this.get("container").contains(a)&&(a.hasClass("Collapse-opened")?n.changeAccordianState(r,"e"):n.changeAccordianState(r,"c"),t=n.get("accstate"),this.get("model").saveSettings({accstate:t}))}})},"@VERSION@",{requires:["af-applet-view","af-message","stencil-fx","stencil-fx-collapse"]});

}
/*
     FILE ARCHIVED ON 21:27:26 Feb 28, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:35 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 69.796
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.094
  cdx.remote: 0.054
  esindex: 0.008
  LoadShardBlock: 39.203 (3)
  PetaboxLoader3.datanode: 69.805 (5)
  load_resource: 130.227 (2)
  PetaboxLoader3.resolve: 95.722 (2)
*/