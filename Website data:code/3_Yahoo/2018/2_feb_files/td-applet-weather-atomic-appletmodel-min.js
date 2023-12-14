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

YUI.add("td-applet-weather-atomic-appletmodel",function(e,t){"use strict";e.namespace("TD.Applet").WeatherAppletModel=e.Mjata.ModelBase.createModelClass("TDAppletWeatherAppletModel","1.0",e.Af.AppletModel,[],{initializer:function(t){e.Mjata.ModelStore.after("AfLocations:selectedLocationChange",this.locationChanged,this),this.get("config.enableFav")&&(e.Mjata.ModelStore.after("AfLocations:favLocationAdded",this.favLocationAdded,this),e.Mjata.ModelStore.after("AfLocations:favLocationDeleted",this.favLocationDeleted,this)),e.Mjata.ModelStore.after("AfLocations:currentChange",this.currentChange,this),this.after("settingsChange",e.bind(this.settingsChanged,this)),this.rapid=e.Af.rapid.getRapidTracker()||null},currentChange:function(e){this.getDataModel("weather").set("currentLoc",e.newVal)},locationChanged:function(t){var a,o,i=this.getDataModel("weather"),n=this,r=i.get("woeids"),l="",c=n.get("config.locationChangeReloadEnabled"),d=n.get("data.i13n.sec"),s=n.get("data.i13n.mpos");if(t.newVal&&t.newVal.woeid){if(o=t.newVal,a=t.newVal.woeid,c)return n.saveSettings({curloc:a}),void(n.rapid&&n.rapid.beaconClick(d,"location",0,{cpos:1,elm:"weather",elmt:"click",itc:1,mpos:s},"",function(){window.location.reload()}));e.Array.indexOf(r,a)<0?i.loadSingleForecast(a,n.get("config.enableWeatherYQLP"),function(t,a){if(!t&&a){var r=n.get("config.daysLimit");a[0]&&(a=a[0]),a.location=o,a.forecast.day&&(a.forecast.day=a.forecast.day.slice(0,r)),n.saveSettings({curloc:a.location.woeid}),i.replaceLoc(n.translate(a),0),e.Global.fire("TDWeatherApplet:locationChanged",a),n.rapid&&n.rapid.beaconClick(d,"location",0,{cpos:1,elm:"weather",elmt:"click",itc:1,mpos:s})}else!t&&a||(a&&a.city&&(l="for "+a.city),n.fire("forecastError",{message:"Forecast details "+l+" could not be found."}))}):(n.saveSettings({curloc:a}),i.copyLocByWoeId(a,0))}},translate:function(e){var t,a,o,i,n=this.get("i18n"),r=e&&e.current||null,l=e&&e.forecast||null,c=0,d=this.get("config"),s="";if(e.link&&e.link.href&&((t=d.baseLink)&&(e.link.href=e.link.href.replace("https://web.archive.org/web/20180131135207/http://weather.yahoo.com",t)),d&&d.urlGeneratorRules&&!0===d.urlGeneratorRules.enabled&&(o=new RegExp("{"+Object.keys(e.location).join("}|{")+"}","gi"),s=t+"/",s+=(d.urlGeneratorRules.local_country_code.indexOf(e.location.country.toLowerCase())>=0?d.urlGeneratorRules.url_format_local_ajax:d.urlGeneratorRules.url_format_international).replace(o,function(t){var a=t.replace("{","").replace("}","");return e.location[a]}),e.link.href=s.toLowerCase().replace(/\s/g,"-"))),r&&r.condition&&r.condition.description&&n[r.condition.description]&&(r.condition.description=n[r.condition.description]),l&&l.day&&l.day instanceof Array&&l.day.length>0)for(a=l.day.length,c=0;c<a;c+=1)(i=l.day[c])&&(i.condition&&i.condition.description&&n[i.condition.description]&&(i.condition.description=n[i.condition.description]),i.label&&n[i.label]&&(i.label=n[i.label]));return e},favLocationAdded:function(e){var t=this,a=this.getDataModel("weather"),o=e.location;o&&o.woeid&&a.loadSingleForecast(o.woeid,t.get("config.enableWeatherYQLP"),function(e,i){if(!e&&i){var n=t.get("config.daysLimit");i[0]&&(i=i[0]),i.forecast.day&&(i.forecast.day=i.forecast.day.slice(0,n)),i.accordianState="c",i.location=o,a.addLoc(i,1)}})},favLocationDeleted:function(e){this.getDataModel("weather").deleteLoc(e.location)},settingsChanged:function(e){var t=this.getDataModel("weather");(e.prevVal&&e.prevVal.hasOwnProperty("unit"))!==e.newVal.unit&&t.setUnit(e.newVal.unit)}})},"@VERSION@",{requires:["mjata-model-base","af-applet-model","mjata-model-store"]});

}
/*
     FILE ARCHIVED ON 13:52:07 Jan 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:14 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 138.888
  exclusion.robots: 0.19
  exclusion.robots.policy: 0.177
  cdx.remote: 0.065
  esindex: 0.008
  LoadShardBlock: 67.828 (3)
  PetaboxLoader3.datanode: 271.863 (4)
  load_resource: 695.843
  PetaboxLoader3.resolve: 478.346
*/