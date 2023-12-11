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

(function(e,a,t){e.guardFatal(function(){e.when("A","RWDynamicModalFactory","ready").execute("RWDynamicModalBootstrapper",function(d,q){var h=d.state("rw-dynamic-modal"),b=d.state("rw-dynamic-modal-bootstrap"),c=d.$("#rwol-display-called"),l,f,g=function(){if(a.sessionStorage)try{sessionStorage.setItem("rwolLastPage",a.location.href),sessionStorage.setItem("rwolLastPageSet",Date.now())}catch(k){}},m=function(){var a=!1;return function(){a||(a=!0,d.ajax("/gp/overlay/update.html",{method:"post",params:{placementId:l,
priority:f}}))}}(),n=function(a){a.pageContent&&d.$("body").append(a.pageContent);a.data&&a.data.tracker?e.when(a.data.tracker).register("RWDynamicModal",function(b){return q(a,b)}):e.register("RWDynamicModal",function(){return q(a)})},p=function(b){if(b&&/\S/.test(b)&&(!a.$Nav||!a.$Nav.getNow("rwOverlaySuppress")))if(l=b.placementId,f=b.priority,d.$.isPlainObject(b.content))n(b);else if(b.content)try{d.$("body").append(b.content),d.state.parse(),(b.displayLogic||"").match("client")||m()}catch(c){a.ueLogError&&
a.ueLogError(c,{logLevel:"FATAL",attribution:"RetaiWebsiteOverlay",message:"[RWOL][Placement "+b.placementId+"] Failed appending content for placement with error: "})}};d.on("rw:overlay:displayed",function(a){m()});if(h)return g(),n(h);if(b){a.sessionStorage&&!document.referrer&&(h=sessionStorage.getItem("rwolLastPageSet"))&&parseInt(h,10)>Date.now()-3E4&&(b.referrer=sessionStorage.getItem("rwolLastPage"));b.referrer=b.referrer||document.referrer;if(b.referrer&&b.referrer.match(/^https?:\/\/([^\/]+\.)?amazon\.com(\/|$)/i))return g();
if(!a.$Nav||!a.$Nav.getNow("rwOverlaySuppress")){if(0<c.length){if("0"!==c.val())return g();c.val(1)}g();if(c=(b.queryString=a.location.search)&&a.location.search.split("?").pop())for(c=c.split("&"),g=0;g<c.length;g++){var h=c[g].split("="),r=a.decodeURIComponent(h[0]);b.hasOwnProperty(r)||(b[r]=a.decodeURIComponent(h[1]))}return d.ajax("/gp/overlay/display.html",{method:"post",params:b,success:p})}}});e.when("A","jQuery","a-modal-factory").register("RWDynamicModalFactory",function(a,e,h){var b,c,
l;return function(f,g){if(f&&!b){var m=e('<span style="display:none;"></span>');e("body").append(m);b=h.create(m,f);c=f.data||{};if(g){if(c.countRef)a.on("a:popover:show:"+f.name,function(a){g.track(c.countRef,c)});if(c.disButtonRef)a.on("a:popover:dismiss:"+f.name,function(b){g.track(c.disButtonRef,c);l=!0;a.off("a:popover:dismiss:"+f.name)});if(c.disRef)a.on("a:popover:afterHide:"+f.name,function(a){l||g.track(c.disRef,c)});a.declarative("rw-popover-log-close","click",function(a){g.track(a.data.disRef,
c);l=!0;b.hide()})}a.on("a:popover:afterShow:"+f.name,function(b){a.ajax("/gp/overlay/update.html")});f.autoShow&&b.show();b.attrs("data",c);return b}}})})()})(function(){var e=window.AmazonUIPageJS||window.P,a=e._namespace||e.attributeErrors;return a?a("RetailWebsiteOverlayAUIAssets"):e}(),window);

}
/*
     FILE ARCHIVED ON 02:28:38 Aug 01, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:26:20 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 212.249
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.074
  cdx.remote: 0.064
  esindex: 0.01
  LoadShardBlock: 124.512 (3)
  PetaboxLoader3.datanode: 1068.198 (5)
  load_resource: 1833.903 (2)
  PetaboxLoader3.resolve: 844.363 (2)
*/