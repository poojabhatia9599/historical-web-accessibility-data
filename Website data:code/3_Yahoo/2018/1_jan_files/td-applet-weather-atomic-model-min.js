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

YUI.add("td-applet-weather-atomic-model",function(e,t){"use strict";function n(e,t,n){if(t===n)return e;switch(t){case"f":return Math.round(e*1.8+32);case"c":return Math.round((e-32)/1.8);default:return e}}e.namespace("TD.Applet").WeatherModel=e.Base.create("TDAppletWeatherModel",e.Model,[e.Af.Sync],{readonly:!0,resource:"weather",idAttribute:"woeid",consolidate:!1,postForRead:!1,setUnit:function(e){e&&(this._modifyWeatherUnit(e),this.set("unit",e.toLowerCase()))},deleteLoc:function(e){var t=this.get("weatherDataList"),n=this._getIndex(e.woeid);n>-1&&(t.splice(n,1),this.set("weatherDataList",t))},addLoc:function(e,t){var n=this.get("weatherDataList");typeof t=="undefined"&&(t=1),e&&e.location&&e.location.woeid&&this._getIndex(e.location.woeid)<0&&(n.splice(t,0,e),this.set("weatherDataList",n))},replaceLoc:function(e,t){var n=this.get("weatherDataList");typeof t=="undefined"&&(t=0),e&&e.location&&e.location.woeid&&(n[t]=e,this.set("weatherDataList",n))},copyLocByWoeId:function(e,t){var n=this.get("weatherDataList"),r=this._getIndex(e);typeof t=="undefined"&&(t=0),r>0&&(n[t]=n[r],this.set("weatherDataList",n))},_getIndex:function(e){var t=this.get("weatherDataList"),n=-1,r;for(r in t)if(t.hasOwnProperty(r)&&t[r].location&&t[r].location.woeid===e){n=r;break}return n},changeAccordianState:function(e,t){var n=this._getIndex(e),r=this.get("weatherDataList");n>-1&&(r[n].accordianState=t||"c"),this.set("weatherDataList",r,{silent:!0})},_modifyWeatherUnit:function(e){var t=this.get("weatherDataList"),r=this.get("unit"),i,s;r&&(r=r.toLowerCase()),e&&(e=e.toLowerCase());if(e===r)return;for(i in t)if(t.hasOwnProperty(i)){t[i].current.temp.now=n(t[i].current.temp.now,e,t[i].current.temp.unit),t[i].current.temp.unit=e;for(s in t[i].forecast.day)t[i].forecast.day.hasOwnProperty(s)&&(t[i].forecast.day[s].temp.high=n(t[i].forecast.day[s].temp.high,e,t[i].forecast.day[s].temp.unit),t[i].forecast.day[s].temp.low=n(t[i].forecast.day[s].temp.low,e,t[i].forecast.day[s].temp.unit),t[i].forecast.day[s].temp.unit=e)}this.unit=e,this.setAttrs({weatherDataList:t})},loadSingleForecast:function(t,n,r){e.Af.Transport.read("weather",{woeid:t,unit:this.get("unit"),enableWeatherYQLP:n},this.syncContext,r)}},{ATTRS:{accstate:{getter:function(e,t){var n=this.get("weatherDataList"),r="",i;for(i in n)n.hasOwnProperty(i)&&n[i].location&&n[i].location.woeid&&n[i].accordianState==="e"&&(r===""?r=n[i].location.woeid:r=r+"|"+n[i].location.woeid);return r}},unit:{getter:function(t,n){var r=this.get("weatherDataList");return t||(t=e.Af.Utils.objectGetValue(r[0],"current.temp.unit","F")),t.toLowerCase()}},woeids:{getter:function(e,t){var n=this.get("weatherDataList"),r=[],i;for(i in n)n.hasOwnProperty(i)&&n[i].location&&n[i].location.woeid&&r.push(n[i].location.woeid);return r}},currentLoc:{},total:{getter:function(e,t){var n=this.get("weatherDataList");return n.length}},weatherDataList:{}}})},"@VERSION@",{requires:["model","af-sync"]});


}
/*
     FILE ARCHIVED ON 00:38:06 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:24 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 92.476
  exclusion.robots: 0.382
  exclusion.robots.policy: 0.352
  cdx.remote: 0.158
  esindex: 0.023
  LoadShardBlock: 62.221 (3)
  PetaboxLoader3.datanode: 50.417 (5)
  PetaboxLoader3.resolve: 88.061 (3)
  load_resource: 82.515 (2)
*/