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

!function(e,t,n){var r=6048e5,i="recommended_hidden_until",s="blocked_recommended_creatives";e.recommendedLink={_initialized:!1,init:function(){n("body").on("click",".hide-recommended",function(t){var o=n(t.target).data("creative-id").toString(),u=store.safeGet(s);n(t.target).thing().hide(),u?(u=u.split(","),u.indexOf(o)===-1&&u.push(o),u=u.join(",")):u=o,store.safeSet(s,u),store.safeSet(i,Date.now()+r),e.flatlistevent.sendFlatListEvent(t,"subreddit_recommendation_flatlist_click")}),n("body").on("click",".subscribe-recommended",function(t){e.flatlistevent.sendFlatListEvent(t,"subreddit_recommendation_flatlist_click")})},setup:function(e,t){if(this._initialized)return this;this.displayedThings=e,this.site=t,this._initialized=!0},requestRecommendedLink:function(t){t=t||{};var r=store.safeGet(i);if(r&&r>Date.now())return null;var o=e.utils.parseQueryString(location.search),u="/api/request_recommended_link";o.feature&&(u+="?"+n.param({feature:o.feature},!0));var a=store.safeGet(s);return n.ajax({type:"POST",url:u,timeout:e.config.ads_loading_timeout_ms,data:{site:this.site,dt:this.displayedThings,cur_listing:e.config.cur_listing,blocked_creatives:a}})}}}(r,_,jQuery),$(function(){r.recommendedLink.init()});

}
/*
     FILE ARCHIVED ON 00:02:30 May 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:24:19 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.099
  exclusion.robots.policy: 0.08
  cdx.remote: 0.135
  esindex: 0.021
  LoadShardBlock: 154.207 (6)
  PetaboxLoader3.datanode: 198.842 (8)
  load_resource: 420.996 (2)
  PetaboxLoader3.resolve: 292.51 (2)
*/