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

(function(t){var n=window.AmazonUIPageJS||window.P,m=n._namespace||n.attributeErrors,x=m?m("ShoppingPortalAssets"):n;x.guardFatal?x.guardFatal(t)(x,window):x.execute(function(){t(x,window)})})(function(t,n,m){t.when("jQuery","load").register("portal-resource-logger",function(m){return{instrumentResources:function(t){var C;C=!1;if(m.isArray(t)&&!m.isEmptyObject(t)){C=!0;for(var u=0;u<t.length;u++){var w=t[u];if("id"in w&&"regex"in w&&"initiator"in w){if("string"!==typeof w.id||"string"!==typeof w.initiator||
!(w.regex instanceof RegExp)){C=!1;break}}else{C=!1;break}}}u=n.performance&&"function"===typeof n.performance.getEntriesByType&&"undefined"!==typeof n.performance.getEntriesByType("resource")&&"undefined"!==typeof n.ue;if(C&&u){C=Array(t.length);for(u=0;u<C.length;u++)C[u]=!1;for(w=u=0;w<n.performance.getEntriesByType("resource").length&&u<t.length;w++)for(var Q=n.performance.getEntriesByType("resource")[w],M=Q.name,L=Q.initiatorType,F=0;F<t.length;F++)if(!C[F]){var I=t[F].regex;if(L===t[F].initiator&&
I.test(M)){M=t[F].id;L=Q.duration;I=M+(50>L?":cached":":notCached");n.ue.count&&(n.ue.count(M+":duration",L),n.ue.count(M+":startTime",Q.startTime),n.ue.count(I,1));n.ue.tag&&n.ue.tag(I);C[F]=!0;u++;break}}}}}});t.when("portal-resource-logger").execute(function(m){m.instrumentResources([{id:"portalAUI:css",regex:/\/AmazonUI-\S*\.css/,initiator:"link"},{id:"portalAUI:js",regex:/\/AmazonUI-\S*\.js/,initiator:"script"},{id:"portalNav:css",regex:/\S*\.css#AUIClients\/NavDesktopMetaAsset/,initiator:"link"},
{id:"portalNav:js",regex:/\S*\.js#AUIClients\/NavDesktopMetaAsset/,initiator:"script"}])})});

}
/*
     FILE ARCHIVED ON 03:06:56 Mar 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:35:57 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 90.023
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.066
  cdx.remote: 0.123
  esindex: 0.008
  LoadShardBlock: 50.528 (3)
  PetaboxLoader3.datanode: 172.631 (5)
  load_resource: 304.261 (2)
  PetaboxLoader3.resolve: 158.344 (2)
*/