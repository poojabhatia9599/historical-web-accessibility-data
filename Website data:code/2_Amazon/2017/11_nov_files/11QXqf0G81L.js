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

(function(k){var b=window.AmazonUIPageJS||window.P,n=b._namespace||b.attributeErrors,a=n?n("RetailWebsiteOverlayAUIAssets"):b;a.guardFatal?a.guardFatal(k)(a,window):a.execute(function(){k(a,window)})})(function(k,b,n){k.when("A","RWDynamicModalFactory","ready").execute("RWDynamicModalBootstrapper",function(a,n){var l=a.state("rw-dynamic-modal"),d=a.state("rw-dynamic-modal-bootstrap"),e=a.$("#rwol-display-called"),g,f,h=function(){try{b.sessionStorage&&(sessionStorage.setItem("rwolLastPage",b.location.href),
sessionStorage.setItem("rwolLastPageSet",Date.now()))}catch(a){}},m=function(){var c=!1;return function(){c||(c=!0,a.ajax("/gp/overlay/update.html",{method:"post",params:{placementId:g,priority:f}}))}}(),q=function(c){c.pageContent&&a.$("body").append(c.pageContent);c.data&&c.data.tracker?k.when(c.data.tracker).register("RWDynamicModal",function(a){return n(c,a)}):k.register("RWDynamicModal",function(){return n(c)})},u=function(c){if(c&&/\S/.test(c)&&!a.$.isEmptyObject(c))if(g=c.placementId,f=c.priority,
a.$(".nav-input")&&a.$(".nav-input").is(":focus"))a.ajax("/gp/charity/ajax/track.html/ref=rwol_"+c.pageType+"_foc_"+g,{method:"post"});else if(b.$Nav&&b.$Nav.getNow("rwOverlaySuppress"))a.ajax("/gp/charity/ajax/track.html/ref=rwol_"+c.pageType+"_sup_"+g,{method:"post"});else if(a.$.isPlainObject(c.content))q(c);else if(c.content)try{a.$("body").append(c.content),a.defer(function(){a.trigger("rw:overlay:afterDisplay")}),a.state.parse(),(c.displayLogic||"").match("client")||m()}catch(d){b.ueLogError&&
b.ueLogError(d,{logLevel:"FATAL",attribution:"RetaiWebsiteOverlay",message:"[RWOL][Placement "+c.placementId+"] Failed appending content for placement with error: "})}};a.on("rw:overlay:displayed",function(a){m()});if(l)return h(),q(l);if(d){try{if(b.sessionStorage&&!document.referrer){var p=sessionStorage.getItem("rwolLastPageSet");p&&parseInt(p,10)>Date.now()-3E4&&(d.referrer=sessionStorage.getItem("rwolLastPage"))}}catch(v){}d.referrer=d.referrer||document.referrer;if(d.referrer&&d.referrer.match(/^https?:\/\/([^\/]+\.)?amazon\.com(\/|$)/i))return h();
if(!b.$Nav||!b.$Nav.getNow("rwOverlaySuppress")){if(0<e.length){if("0"!==e.val())return h();e.val(1)}h();if(l=(d.queryString=b.location.search)&&b.location.search.split("?").pop())for(l=l.split("&"),e=0;e<l.length;e++)if(h=l[e].split("="),p=b.decodeURIComponent(h[0]),!d.hasOwnProperty(p))try{var r=b.decodeURIComponent(h[1]);d[p]=r}catch(w){d[p]=h[1]}return a.ajax("/gp/overlay/display.html",{method:"post",params:d,success:u})}}});k.when("A","jQuery","a-modal-factory").register("RWDynamicModalFactory",
function(a,b,k){var d,e,g;return function(f,h){if(f&&!d){var m=b('<span style="display:none;"></span>');b("body").append(m);d=k.create(m,f);e=f.data||{};if(h){if(e.countRef)a.on("a:popover:show:"+f.name,function(a){h.track(e.countRef,e)});if(e.disButtonRef)a.on("a:popover:dismiss:"+f.name,function(b){h.track(e.disButtonRef,e);g=!0;a.off("a:popover:dismiss:"+f.name)});if(e.disRef)a.on("a:popover:afterHide:"+f.name,function(a){g||h.track(e.disRef,e)});a.declarative("rw-popover-log-close","click",function(a){h.track(a.data.disRef,
e);g=!0;d.hide()})}a.on("a:popover:afterShow:"+f.name,function(b){a.ajax("/gp/overlay/update.html")});f.autoShow&&d.show();d.attrs("data",e);return d}}})});

}
/*
     FILE ARCHIVED ON 00:32:03 Nov 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:39:01 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 719.691
  exclusion.robots: 0.079
  exclusion.robots.policy: 0.07
  cdx.remote: 0.062
  esindex: 0.009
  LoadShardBlock: 196.283 (3)
  PetaboxLoader3.datanode: 162.581 (5)
  PetaboxLoader3.resolve: 133.568 (3)
  load_resource: 204.997 (2)
*/