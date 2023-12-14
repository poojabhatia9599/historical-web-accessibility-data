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

YUI.add("td-ads-model",function(s){"use strict";s.namespace("TD.Ads").Model=s.Base.create("TDAdsModel",s.Model,[s.Af.Sync],{resource:"curveballAds",readonly:!0,consolidate:!1,initializer:function(s){var a=this;s.smad&&s.smad.enabled?(a.sectionId=s.smad.sectionId,a.count=s.smad.count,a.lowerBound=s.smad.lowerBound,a.sm_ads_image_tag=s.smad.sm_ads_image_tag,a.adsType=s.smad.type,a.sm_ads_enabled=s.smad.enabled,a.sm_ads_screen_orientation=s.smad.sm_ads_screen_orientation,a.adsContentType=s.smad.adsContentType,a.bypassRedirect=s.smad.bypassRedirect,a.cssClass=s.smad.cssClass,a.spaceId=s.smad.spaceId):(a.sectionId=s.sectionId,a.count=s.count,a.lowerBound=s.lowerBound)},shift:function(s){var a=this,e=a.get(s)||[],d=e.shift();return e.length<=a.lowerBound&&a.prefetch(s),d},isSMAdCached:function(s){return(this.get(s)||[]).length>0},fetchAds:function(s,a){this.sync("read",{params:s},function(s,e){!s&&e&&a&&a(s,[].concat(e))})},prefetch:function(s){var a,e=this,d={params:{sectionId:e.sectionId,count:e.count}};e.sm_ads_enabled&&(d.params.sm_ads_enabled="true",e.sm_ads_image_tag&&(d.params.sm_ads_image_tag=e.sm_ads_image_tag),e.adsType&&(d.params.adsType=e.adsType),e.sm_ads_screen_orientation&&(d.params.sm_ads_screen_orientation=e.sm_ads_screen_orientation),e.adsContentType&&(d.params.adsContentType=e.adsContentType),e.cssClass&&(d.params.cssClass=e.cssClass),e.bypassRedirect&&(d.params.bypassRedirect=e.bypassRedirect),e.spaceId&&(d.params.spaceId=e.spaceId)),e.sync("read",d,function(d,n){!d&&n&&(a=(a=e.get(s)).concat(n||[]),e.set(s,a))})}},{ATTRS:{smallCurveball:{value:[]},largeCurveball:{value:[]}}})},"@VERSION@",{requires:["af-sync","base-build","model","af-beacon"]});

}
/*
     FILE ARCHIVED ON 23:34:39 Jun 30, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:33:14 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 189.017
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.074
  cdx.remote: 0.054
  esindex: 0.009
  LoadShardBlock: 152.239 (3)
  PetaboxLoader3.datanode: 191.742 (4)
  load_resource: 139.887
  PetaboxLoader3.resolve: 44.053
*/