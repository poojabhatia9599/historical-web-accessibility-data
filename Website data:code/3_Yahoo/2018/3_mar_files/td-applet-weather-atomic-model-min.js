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

YUI.add("td-applet-weather-atomic-model",function(t,e){"use strict";function a(t,e,a){if(e===a)return t;switch(e){case"f":return Math.round(1.8*t+32);case"c":return Math.round((t-32)/1.8);default:return t}}t.namespace("TD.Applet").WeatherModel=t.Base.create("TDAppletWeatherModel",t.Model,[t.Af.Sync],{readonly:!0,resource:"weather",idAttribute:"woeid",consolidate:!1,postForRead:!1,setUnit:function(t){t&&(this._modifyWeatherUnit(t),this.set("unit",t.toLowerCase()))},deleteLoc:function(t){var e=this.get("weatherDataList"),a=this._getIndex(t.woeid);a>-1&&(e.splice(a,1),this.set("weatherDataList",e))},addLoc:function(t,e){var a=this.get("weatherDataList");void 0===e&&(e=1),t&&t.location&&t.location.woeid&&this._getIndex(t.location.woeid)<0&&(a.splice(e,0,t),this.set("weatherDataList",a))},replaceLoc:function(t,e){var a=this.get("weatherDataList");void 0===e&&(e=0),t&&t.location&&t.location.woeid&&(a[e]=t,this.set("weatherDataList",a))},copyLocByWoeId:function(t,e){var a=this.get("weatherDataList"),i=this._getIndex(t);void 0===e&&(e=0),i>0&&(a[e]=a[i],this.set("weatherDataList",a))},_getIndex:function(t){var e,a=this.get("weatherDataList"),i=-1;for(e in a)if(a.hasOwnProperty(e)&&a[e].location&&a[e].location.woeid===t){i=e;break}return i},changeAccordianState:function(t,e){var a=this._getIndex(t),i=this.get("weatherDataList");a>-1&&(i[a].accordianState=e||"c"),this.set("weatherDataList",i,{silent:!0})},_modifyWeatherUnit:function(t){var e,i,o=this.get("weatherDataList"),r=this.get("unit");if(r&&(r=r.toLowerCase()),t&&(t=t.toLowerCase()),t!==r){for(e in o)if(o.hasOwnProperty(e))for(i in o[e].current.temp.now=a(o[e].current.temp.now,t,o[e].current.temp.unit),o[e].current.temp.unit=t,o[e].forecast.day)o[e].forecast.day.hasOwnProperty(i)&&(o[e].forecast.day[i].temp.high=a(o[e].forecast.day[i].temp.high,t,o[e].forecast.day[i].temp.unit),o[e].forecast.day[i].temp.low=a(o[e].forecast.day[i].temp.low,t,o[e].forecast.day[i].temp.unit),o[e].forecast.day[i].temp.unit=t);this.unit=t,this.setAttrs({weatherDataList:o})}},loadSingleForecast:function(e,a,i){t.Af.Transport.read("weather",{woeid:e,unit:this.get("unit"),enableWeatherYQLP:a},this.syncContext,i)}},{ATTRS:{accstate:{getter:function(t,e){var a,i=this.get("weatherDataList"),o="";for(a in i)i.hasOwnProperty(a)&&i[a].location&&i[a].location.woeid&&"e"===i[a].accordianState&&(o=""===o?i[a].location.woeid:o+"|"+i[a].location.woeid);return o}},unit:{getter:function(e,a){var i=this.get("weatherDataList");return e||(e=t.Af.Utils.objectGetValue(i[0],"current.temp.unit","F")),e.toLowerCase()}},woeids:{getter:function(t,e){var a,i=this.get("weatherDataList"),o=[];for(a in i)i.hasOwnProperty(a)&&i[a].location&&i[a].location.woeid&&o.push(i[a].location.woeid);return o}},currentLoc:{},total:{getter:function(t,e){return this.get("weatherDataList").length}},weatherDataList:{}}})},"@VERSION@",{requires:["model","af-sync"]});

}
/*
     FILE ARCHIVED ON 21:27:26 Feb 28, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:28 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 77.098
  exclusion.robots: 0.151
  exclusion.robots.policy: 0.14
  cdx.remote: 0.07
  esindex: 0.01
  LoadShardBlock: 48.169 (3)
  PetaboxLoader3.datanode: 300.066 (5)
  load_resource: 321.925 (2)
  PetaboxLoader3.resolve: 66.221 (2)
*/