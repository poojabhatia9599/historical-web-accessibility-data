YUI.add("td-ads-model",function(s){"use strict";s.namespace("TD.Ads").Model=s.Base.create("TDAdsModel",s.Model,[s.Af.Sync],{resource:"curveballAds",readonly:!0,consolidate:!1,initializer:function(s){var a=this;s.smad&&s.smad.enabled?(a.sectionId=s.smad.sectionId,a.count=s.smad.count,a.lowerBound=s.smad.lowerBound,a.sm_ads_image_tag=s.smad.sm_ads_image_tag,a.adsType=s.smad.type,a.sm_ads_enabled=s.smad.enabled,a.sm_ads_screen_orientation=s.smad.sm_ads_screen_orientation,a.adsContentType=s.smad.adsContentType,a.bypassRedirect=s.smad.bypassRedirect,a.cssClass=s.smad.cssClass,a.spaceId=s.smad.spaceId):(a.sectionId=s.sectionId,a.count=s.count,a.lowerBound=s.lowerBound)},shift:function(s){var a=this,e=a.get(s)||[],d=e.shift();return e.length<=a.lowerBound&&a.prefetch(s),d},isSMAdCached:function(s){return(this.get(s)||[]).length>0},prefetch:function(s){var a,e=this,d={params:{sectionId:e.sectionId,count:e.count}};e.sm_ads_enabled&&(d.params.sm_ads_enabled="true",e.sm_ads_image_tag&&(d.params.sm_ads_image_tag=e.sm_ads_image_tag),e.adsType&&(d.params.adsType=e.adsType),e.sm_ads_screen_orientation&&(d.params.sm_ads_screen_orientation=e.sm_ads_screen_orientation),e.adsContentType&&(d.params.adsContentType=e.adsContentType),e.cssClass&&(d.params.cssClass=e.cssClass),e.bypassRedirect&&(d.params.bypassRedirect=e.bypassRedirect),e.spaceId&&(d.params.spaceId=e.spaceId)),e.sync("read",d,function(d,t){!d&&t&&(a=(a=e.get(s)).concat(t||[]),e.set(s,a))})}},{ATTRS:{smallCurveball:{value:[]},largeCurveball:{value:[]}}})},"@VERSION@",{requires:["af-sync","base-build","model","af-beacon"]});