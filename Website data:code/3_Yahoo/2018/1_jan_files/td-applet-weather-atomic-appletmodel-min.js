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

YUI.add("td-applet-weather-atomic-appletmodel",function(e,t){"use strict";e.namespace("TD.Applet").WeatherAppletModel=e.Mjata.ModelBase.createModelClass("TDAppletWeatherAppletModel","1.0",e.Af.AppletModel,[],{initializer:function(t){e.Mjata.ModelStore.after("AfLocations:selectedLocationChange",this.locationChanged,this),this.get("config.enableFav")&&(e.Mjata.ModelStore.after("AfLocations:favLocationAdded",this.favLocationAdded,this),e.Mjata.ModelStore.after("AfLocations:favLocationDeleted",this.favLocationDeleted,this)),e.Mjata.ModelStore.after("AfLocations:currentChange",this.currentChange,this),this.after("settingsChange",e.bind(this.settingsChanged,this)),this.rapid=e.Af.rapid.getRapidTracker()||null},currentChange:function(e){this.getDataModel("weather").set("currentLoc",e.newVal)},locationChanged:function(t){var n=this.getDataModel("weather"),r=this,i=n.get("woeids"),s,o,u="",a=r.get("config.locationChangeReloadEnabled"),f=r.get("data.i13n.sec"),l=r.get("data.i13n.mpos");if(!t.newVal||!t.newVal.woeid)return;o=t.newVal,s=t.newVal.woeid;if(a){r.saveSettings({curloc:s}),r.rapid&&r.rapid.beaconClick(f,"location",0,{cpos:1,elm:"weather",elmt:"click",itc:1,mpos:l},"",function(){window.location.reload()});return}e.Array.indexOf(i,s)<0?n.loadSingleForecast(s,r.get("config.enableWeatherYQLP"),function(t,i){if(!t&&i){var s=r.get("config.daysLimit");i[0]&&(i=i[0]),i.location=o,i.forecast.day&&(i.forecast.day=i.forecast.day.slice(0,s)),r.saveSettings({curloc:i.location.woeid}),n.replaceLoc(r.translate(i),0),e.Global.fire("TDWeatherApplet:locationChanged",i),r.rapid&&r.rapid.beaconClick(f,"location",0,{cpos:1,elm:"weather",elmt:"click",itc:1,mpos:l})}else if(t||!i)i&&i.city&&(u="for "+i.city),r.fire("forecastError",{message:"Forecast details "+u+" could not be found."})}):(r.saveSettings({curloc:s}),n.copyLocByWoeId(s,0))},translate:function(e){var t=this.get("i18n"),n=e&&e.current||null,r=e&&e.forecast||null,i,s=0,o,u=this.get("config"),a,f="",l="",c;e.link&&e.link.href&&(i=u.baseLink,i&&(e.link.href=e.link.href.replace("https://web.archive.org/web/20180101003806/http://weather.yahoo.com",i)),u&&u.urlGeneratorRules&&u.urlGeneratorRules.enabled===!0&&(a=new RegExp("{"+Object.keys(e.location).join("}|{")+"}","gi"),f=i+"/",u.urlGeneratorRules.local_country_code.indexOf(e.location.country.toLowerCase())>=0?l=u.urlGeneratorRules.url_format_local_ajax:l=u.urlGeneratorRules.url_format_international,f+=l.replace(a,function(t){var n=t.replace("{","").replace("}","");return e.location[n]}),e.link.href=f.toLowerCase().replace(/\s/g,"-"))),n&&n.condition&&n.condition.description&&t[n.condition.description]&&(n.condition.description=t[n.condition.description]);if(r&&r.day&&r.day instanceof Array&&r.day.length>0){o=r.day.length;for(s=0;s<o;s+=1)c=r.day[s],c&&(c.condition&&c.condition.description&&t[c.condition.description]&&(c.condition.description=t[c.condition.description]),c.label&&t[c.label]&&(c.label=t[c.label]))}return e},favLocationAdded:function(e){var t=this,n=this.getDataModel("weather"),r=e.location;r&&r.woeid&&n.loadSingleForecast(r.woeid,t.get("config.enableWeatherYQLP"),function(e,i){if(!e&&i){var s=t.get("config.daysLimit");i[0]&&(i=i[0]),i.forecast.day&&(i.forecast.day=i.forecast.day.slice(0,s)),i.accordianState="c",i.location=r,n.addLoc(i,1)}})},favLocationDeleted:function(e){var t=this.getDataModel("weather");t.deleteLoc(e.location)},settingsChanged:function(e){var t=this.getDataModel("weather"),n=e.prevVal&&e.prevVal.hasOwnProperty("unit");n!==e.newVal.unit&&t.setUnit(e.newVal.unit)}})},"@VERSION@",{requires:["mjata-model-base","af-applet-model","mjata-model-store"]});


}
/*
     FILE ARCHIVED ON 00:38:06 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:04 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 106.035
  exclusion.robots: 0.147
  exclusion.robots.policy: 0.137
  cdx.remote: 0.059
  esindex: 0.009
  LoadShardBlock: 74.93 (3)
  PetaboxLoader3.datanode: 136.533 (5)
  load_resource: 256.57 (2)
  PetaboxLoader3.resolve: 169.101 (2)
*/