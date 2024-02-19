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

!function(e,t,n){var r=6048e5,i=-1,s="recommended_hidden_until",o="blocked_recommended_creatives";e.recommendedLink={_initialized:!1,init:function(){n("body").on("click",".hide-recommended",function(t){var i=n(t.target).data("creative-id").toString(),u=store.safeGet(o);n(t.target).thing().hide(),u?(u=u.split(","),u.indexOf(i)===-1&&u.push(i),u=u.join(",")):u=i,store.safeSet(o,u),store.safeSet(s,Date.now()+r),e.flatlistevent.sendFlatListEvent(t,"subreddit_recommendation_flatlist_click")}),n("body").on("click",".subscribe-recommended",function(t){e.flatlistevent.sendFlatListEvent(t,"subreddit_recommendation_flatlist_click")})},setup:function(e,t){if(this._initialized)return this;this.displayedThings=e,this.site=t,this._initialized=!0},requestRecommendedLink:function(t){t=t||{};var r=store.safeGet(s,i);if(r===i)return;if(r&&r>Date.now())return null;var u=e.utils.parseQueryString(location.search),a="/api/request_recommended_link";u.feature&&(a+="?"+n.param({feature:u.feature},!0));var f=store.safeGet(o);return n.ajax({type:"POST",url:a,timeout:e.config.ads_loading_timeout_ms,data:{site:this.site,dt:this.displayedThings,cur_listing:e.config.cur_listing,blocked_creatives:f}})}}}(r,_,jQuery),$(function(){r.recommendedLink.init()});

}
/*
     FILE ARCHIVED ON 00:09:10 Jun 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:24:13 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.056
  cdx.remote: 0.093
  esindex: 0.009
  LoadShardBlock: 354.517 (6)
  PetaboxLoader3.datanode: 220.591 (8)
  PetaboxLoader3.resolve: 199.757 (4)
  load_resource: 210.83 (2)
*/