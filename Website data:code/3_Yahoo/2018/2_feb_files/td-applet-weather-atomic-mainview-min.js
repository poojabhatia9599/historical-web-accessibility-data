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

YUI.add("td-applet-weather-atomic-mainview",function(e,t){"use strict";e.namespace("TD.Applet").WeatherMainView=e.Base.create("TDAppletWeatherMainView",e.Af.AppletView,[],{autoRender:!1,events:{".js-set-unit":{click:"updateUnit"},".trigger-detect":{click:"triggerDetect"}},suppressErrors:!1,initializer:function(t){var a=this.get("model"),n=a.getDataModel("weather");this.suppressErrors=!0===t.suppressErrors,a.on("forecastError",e.bind(this.handleError,this)),n.after("weatherDataListChange",this.afterDataChange,this),e.on("fx:done",this.changeAccordianState,this),this.checkEmptyCity(),this.preloadFallbackAssets()},afterDataChange:function(e){this.forceRender()},preloadFallbackAssets:function(){this.get("container").one(".trigger-detect")&&e.use("node-event-simulate",function(){})},checkEmptyCity:function(){var e=this.get("model").get("i18n"),t=this.get("container").one(".js-city-name"),a=e.SEARCH_CITY||"Kindly search your city",n=e.PLACE_NOT_FOUND;t&&t.getHTML().trim()===n&&this.handleError({message:a},"warning",this.get("container").ancestor(".js-applet"))},handleError:function(t,a,n){var i=n||this.get("container");!0!==this.suppressErrors&&e.Af.Message.show(i,{level:a||"error",content:t.message})},updateUnit:function(e){var t=e.target.getData();t&&t.hasOwnProperty("unit")&&this.get("model").saveSettings({unit:t.unit})},triggerDetect:function(t){var a=this;return t.preventDefault(),e.use("node-event-simulate",function(){var e=a.get("container").ancestor(".js-applet").one(".App-Hd .js-panel-trigger");e&&e.simulate("click")}),!1},changeAccordianState:function(e){var t,a=e.fxTarget,n=this.get("model").getDataModel("weather"),i=a.getData("woeid");a&&i&&this.get("container").contains(a)&&(a.hasClass("Collapse-opened")?n.changeAccordianState(i,"e"):n.changeAccordianState(i,"c"),t=n.get("accstate"),this.get("model").saveSettings({accstate:t}))}})},"@VERSION@",{requires:["af-applet-view","af-message","stencil-fx","stencil-fx-collapse"]});

}
/*
     FILE ARCHIVED ON 13:52:09 Jan 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:18 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 171.838
  exclusion.robots: 0.201
  exclusion.robots.policy: 0.188
  cdx.remote: 0.085
  esindex: 0.011
  LoadShardBlock: 133.45 (3)
  PetaboxLoader3.resolve: 108.68 (4)
  PetaboxLoader3.datanode: 58.611 (4)
  load_resource: 36.84
*/