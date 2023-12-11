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

(function(b){var a=window.AmazonUIPageJS||window.P,c=a._namespace||a.attributeErrors,d=c?c("ShoppingPortalAssets"):a;d.guardFatal?d.guardFatal(b)(d,window):d.execute(function(){b(d,window)})})(function(b,a,c){b.when("jQuery","afterLoad").register("portal-resource-logger",function(d){return{instrumentResources:function(b){var f;f=!1;if(d.isArray(b)&&!d.isEmptyObject(b)){f=!0;for(var e=0;e<b.length;e++){var g=b[e];if("id"in g&&"regex"in g&&"initiator"in g){if(!("string"===typeof g.id&&"string"===typeof g.initiator&&
g.regex instanceof RegExp)){f=!1;break}}else{f=!1;break}}}e=a.performance&&"function"===typeof a.performance.getEntriesByType&&"undefined"!==typeof a.performance.getEntriesByType("resource")&&"undefined"!==typeof a.ue;if(f&&e){f=Array(b.length);for(e=0;e<f.length;e++)f[e]=!1;for(g=e=0;g<a.performance.getEntriesByType("resource").length&&e<b.length;g++)for(var c=a.performance.getEntriesByType("resource")[g],l=c.name,h=c.initiatorType,k=0;k<b.length;k++)if(!f[k]){var m=b[k].regex;if(h===b[k].initiator&&
m.test(l)){l=b[k].id;h=c;c=h.duration;a.ue.count&&(a.ue.count(l+":duration",c),a.ue.count(l+":startTime",h.startTime));a.ue.tag&&(h=void 0,h=50>c?l+":cached":l+":notCached",a.ue.tag(h));f[k]=!0;e++;break}}}}}});b.when("portal-resource-logger").execute(function(a){a.instrumentResources([{id:"portalAUI:css",regex:/\/AmazonUI-\S*\.css/,initiator:"link"},{id:"portalAUI:js",regex:/\/AmazonUI-\S*\.js/,initiator:"script"},{id:"portalNav:css",regex:/\S*\.css#AUIClients\/NavDesktopMetaAsset/,initiator:"link"},
{id:"portalNav:js",regex:/\S*\.js#AUIClients\/NavDesktopMetaAsset/,initiator:"script"}])})});

}
/*
     FILE ARCHIVED ON 04:24:57 Sep 01, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:26:20 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 165.315
  exclusion.robots: 0.081
  exclusion.robots.policy: 0.071
  cdx.remote: 0.058
  esindex: 0.009
  LoadShardBlock: 92.752 (3)
  PetaboxLoader3.datanode: 949.719 (5)
  load_resource: 1694.455 (2)
  PetaboxLoader3.resolve: 801.915 (2)
*/