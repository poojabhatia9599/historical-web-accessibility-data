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

(function(c){var g=window.AmazonUIPageJS||window.P,p=g._namespace||g.attributeErrors,a=p?p("AmazonGatewayHerotatorJS"):g;a.guardFatal?a.guardFatal(c)(a,window):a.execute(function(){c(a,window)})})(function(c,g,p){c.when("generic-observable").register("gw-herotator-controller",function(a){var h=function(){};return function(c){function l(){t.notifyObservers("delayBegin")}function k(){t.notifyObservers("delayInterrupted")}function g(b){for(var a=0;a<A.length;a++)if(A[a]===b)return a+1}function b(b){b=
b||{};return{delay_complete:b.delay_complete||h,js_ready:b.js_ready||h,fg_loaded:b.fg_loaded||h,mouse_move:b.mouse_move||h,mouse_leave:b.mouse_leave||h,delay_interrupted_timeout:b.delay_interrupted_timeout||h,rotation_complete:b.rotation_complete||h,goto_card:function(b){b!==B&&q.user_navigation(A[b-1])},user_navigation:b.user_navigation||function(b){q=new r(b)},user_interaction:b.user_interaction||function(){q.user_navigation(A[B-1])},stop_autorotation:b.stop_autorotation||function(){q.user_navigation(A[B-
1])},pause:b.pause||h,resume:b.resume||h}}function e(){function a(){!e&&C[d]&&(q=1===E?new z:new u)}l();var d=A[(B-1+1)%E+1-1],e=!0;return new b({fg_loaded:function(b){b===d&&a()},delay_complete:function(){e=!1;a()},mouse_move:function(){q=new f},pause:function(){q=new v}})}function f(){k();return new b({mouse_move:k,mouse_leave:function(){q=new e},delay_interrupted_timeout:function(){q.mouse_leave()},pause:function(){q=new v(!0)}})}function v(a){k();return new b({mouse_move:function(){a=!0;k()},
mouse_leave:function(){a=!1},resume:function(){q=a?new f:0<H?new e:new z}})}function u(){t.notifyObservers("autorotating");B=(B-1+1)%E+1;t.notifyObservers("gotoCard",B);H--;return new b({rotation_complete:function(){q=0<H?new e:new z},mouse_move:function(){q=0<H?new d:new z},pause:function(){q=new y}})}function d(a){var d=!1;return new b({rotation_complete:function(){l();q=d?new v:new f},pause:function(){d=!0},resume:function(){d=!1}})}function y(){var a=!1;return new b({rotation_complete:function(){l();
q=new v(a)},mouse_move:function(){a=!0},mouse_leave:function(){a=!1}})}function r(a){t.notifyObservers("userNavigation");B=g(a);t.notifyObservers("gotoCard",B);return new b({rotation_complete:function(){q=new z},user_navigation:function(b){q=new x(b)},user_interaction:h})}function x(a){return new b({rotation_complete:function(){q=new r(a)},user_navigation:function(b){a=b},user_interaction:h})}function z(){t.notifyObservers("stopAutorotation");return new b({})}c=c||{};var t=new a,q=new function(){function a(){C[D]&&
d&&(t.notifyObservers("ready"),q=new e,c&&q.pause(),f&&q.stop_autorotation())}var d=!1,f=!1,c=!1;return new b({fg_loaded:function(b){b===D&&a()},js_ready:function(){d=!0;a()},user_navigation:h,stop_autorotation:function(){f=!0},pause:function(){c=!0},resume:function(){c=!1}})},A=c.fgIDs||[],E=A.length,D=A[0],B=c.card_num||1,C={},H=c.circular?Infinity:E;return{delayComplete:function(){q.delay_complete()},jsReady:function(){q.js_ready()},fgLoaded:function(b){C[b]=!0;D===b&&t.notifyObservers("atfLoaded");
q.fg_loaded(b)},mouseMove:function(){q.mouse_move()},mouseLeave:function(){q.mouse_leave()},delayInterruptedTimeout:function(){q.delay_interrupted_timeout()},rotationComplete:function(){q.rotation_complete()},gotoCard:function(b){q.goto_card(b)},userInteraction:function(){q.user_interaction()},userNavigation:function(b){q.user_navigation(b)},stopAutorotation:function(){q.stop_autorotation()},pause:function(){q.pause()},resume:function(){q.resume()},addObserver:t.addObserver,removeObserver:t.removeObserver}}});
c.when("herotator-btf").register("herotator",function(a){return a});c.register("herotator-btf",function(){return function(a,h){function n(b){return function(){c.when("gw-desktop-herotator/controller").execute(function(){F[b]()})}}function l(b,a,d){b.addEventListener?b.addEventListener(a,d,!1):b.attachEvent("on"+a,d)}function k(b,a){E[b]=[];var e=a.length;if(0<e)for(var f=0;f<e;f++)(function(e){var f=new Image;f.onload=function(){E[b].splice(d(E[b],f),1);E[b]&&0===E[b].length&&
c.when("gw-desktop-herotator/controller").execute(function(){var a=document.getElementById("gw-ftGr-"+b),d=a.className,d=d.replace(/\s*\ba\-lazy\-loaded\b\s*/,"");a.className=d;F.fgLoaded(b)});c.when("A").execute(function(a){var d=a.$("#gw-ftGr-"+b+" img.a-dynamic-image");a.loadDynamicImage(d)})};E[b].push(f);f.src=a[e].src})(f);else c.when("gw-desktop-herotator/controller").execute(function(){F.fgLoaded(b)})}function m(){A=Date.now()}function b(){C||v()}function e(){I=I?Math.min(I,Date.now()):Date.now();
clearTimeout(t.timeout_id);clearTimeout(e.timeout_id);e.timeout_id=setTimeout(function(){e.timeout_id=0;F.delayInterruptedTimeout()},3E3)}function f(){C=!0}function v(){v.sent||(clearTimeout(v.timeout),v.timeout=setTimeout(function(){u(a.uri,a.data);v.sent=!0},2E3))}function u(b,a){c.when("A").execute(function(d){d.$.ajax(b,{async:!1,cache:!1,type:"post",data:a})})}function d(b,a){if(b.indexOf)return b.indexOf(a);for(var d=0;d<b.length;d++)if(b[d]===a)return d}function y(){return p=p||x()}function r(b){"object"===
typeof g.ue&&"function"===typeof g.ue.count&&g.ue.count(b,(g.ue.count(b)||0)+1)}function x(){var b=L(".a-carousel-rounded-buttons .a-carousel-left,.a-carousel-rounded-buttons .a-carousel-right");L(".a-carousel-rounded-buttons .a-carousel-left").attr("cel_widget_id","gw-desktop-hero-left-cel");L(".a-carousel-rounded-buttons .a-carousel-right").attr("cel_widget_id","gw-desktop-hero-right-cel");L(".a-carousel-rounded-buttons .a-carousel-left").addClass("celwidget");L(".a-carousel-rounded-buttons .a-carousel-right").addClass("celwidget");
L(".a-carousel-rounded-buttons .a-carousel-left").click(function(b){r("gw-desktop-hero-left")});L(".a-carousel-rounded-buttons .a-carousel-right").click(function(b){r("gw-desktop-hero-right")});return{show:function(){b.show();L(".a-carousel-left").css("z-index",10);L(".a-carousel-right").css("z-index",10)},hide:function(){b.hide()}}}function z(){var b=L("#gw-desktop-herotator");b.addClass("gw-desktop-herotator-ready");c.register("herotator-controls",function(){1<b.find(".a-carousel-card").length?
(y().show(),g.GWI&&g.GWI.recordLatency("gwHerotatorActive")):y().hide()})}function t(b){H<I&&(B-=I-H,I=0);H=Date.now();t.timeout_id=setTimeout(function(){B=D;F.delayComplete()},B)}function q(b,a){q.current_card!==a&&(q.current_card=a,w.gotoPage(a),S.notifyObservers("page_changed"));setTimeout(function(){F.rotationComplete()},250)}var A=Date.now(),E={},D=5E3,B=D,C=!1,H=0,I=0,w,L,K=document.getElementById("gw-desktop-herotator").getElementsByTagName("ol")[0],S,F,p;l(K,"click",n("userInteraction"));
l(K,"mouseenter",n("mouseMove"));l(K,"mousemove",n("mouseMove"));l(K,"mouseleave",n("mouseLeave"));l(K,"touchstart",n("userInteraction"));l(K,"touchmove",n("userInteraction"));l(K,"touchend",n("userInteraction"));l(K,"touchcancel",n("userInteraction"));for(var K=document.getElementById("gw-desktop-herotator").getElementsByTagName("li")[0],M=0,T=K.childNodes[M];T&&"div"!==String(T.nodeName).toLowerCase();)M++,T=K.childNodes[M];M=T;K=String(M.id).replace(/^gw-ftGr-/,"");M=M.getElementsByTagName("img");
k(K,M||[]);for(var N=[K],K=0;h[K];)N.push(h[K].fgID),K++;c.when("gw-herotator-controller").execute(function(a){F=new a({fgIDs:N});F.addObserver("atfLoaded",m);F.addObserver("delayBegin",t);F.addObserver("delayInterrupted",e);F.addObserver("gotoCard",q);F.addObserver("userNavigation",b);F.addObserver("stopAutorotation",f);F.addObserver("ready",function(){var b=Date.now()-A;B=Math.max(D-b,1);z();L("#gw-desktop-herotator").addClass("gw-desktop-herotator-ready")});c.register("gw-desktop-herotator/controller");
c.when("generic-observable").register("gw-desktop-herotator",function(b){S=new b;return{getAutorotationDelay:function(){return D},setAutorotationDelay:function(b){b=parseInt(b,10);B=b-(D-B);D=b},stopAutorotation:function(){F.stopAutorotation()},disableNavigation:function(){y().hide();w.pause()},enableNavigation:function(){y().show();w.resume()},pause:function(){F.pause()},resume:function(){F.resume()},addObserver:S.addObserver,removeObserver:S.removeObserver}})});c.when("A","a-carousel-framework",
"gwAjax").execute(function(b,a,d){function e(){var b=0;for(g.GWI&&g.GWI.recordLatency("gw-hero-btf-populate");h[b];){var a=h[b].fgID,d=h[b].content,f=document.getElementById("gw-ftGr-"+a);L(f).html(d);d=f.getElementsByTagName("img");k(a,d);b++}}L=b.$;a.onInit("gateway-desktop-layout.herotator",function(){var f=b.$("#gw-desktop-herotator > .a-carousel-container");w=a.getCarousel(f);w.onChange("pageNumber",function(){var b=w.getAttr("pageNumber");F.gotoCard(b);b-=2;h[b]&&h[b].callbackUrl&&(d(h[b].callbackUrl,
{type:"POST",id:"desktop-herotator-btf-"+h[b].fgID}),delete h[b].callbackUrl)});e();c.when("gw-desktop-herotator").register("gw-desktop-herotator/dom-ready");c.when("gw-desktop-herotator/controller","gw-desktop-herotator").execute(function(){F.jsReady()})})})}})});

}
/*
     FILE ARCHIVED ON 03:07:02 Mar 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:35:45 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 567.603
  exclusion.robots: 0.059
  exclusion.robots.policy: 0.052
  cdx.remote: 0.043
  esindex: 0.007
  LoadShardBlock: 103.224 (3)
  PetaboxLoader3.datanode: 159.906 (5)
  load_resource: 173.622 (2)
  PetaboxLoader3.resolve: 106.197 (2)
*/