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

(function(d){var b=window.AmazonUIPageJS||window.P,m=b._namespace||b.attributeErrors,c=m?m("AmazonGatewayHerotatorJS"):b;c.guardFatal?c.guardFatal(d)(c,window):c.execute(function(){d(c,window)})})(function(d,b,m){d.when("generic-observable").register("gw-herotator-controller",function(b){var d=function(){};return function(l){function k(){p.notifyObservers("delayBegin")}function h(){p.notifyObservers("delayInterrupted")}function f(a){for(var e=0;e<B.length;e++)if(B[e]===a)return e+1}function a(a){a=
a||{};return{delay_complete:a.delay_complete||d,js_ready:a.js_ready||d,fg_loaded:a.fg_loaded||d,mouse_move:a.mouse_move||d,mouse_leave:a.mouse_leave||d,delay_interrupted_timeout:a.delay_interrupted_timeout||d,rotation_complete:a.rotation_complete||d,goto_card:function(a){a!==C&&r.user_navigation(B[a-1])},user_navigation:a.user_navigation||function(a){r=new x(a)},user_interaction:a.user_interaction||function(){r.user_navigation(B[C-1])},stop_autorotation:a.stop_autorotation||function(){r.user_navigation(B[C-
1])},pause:a.pause||d,resume:a.resume||d}}function g(){function e(){!f&&D[g]&&(r=1===z?new y:new t)}k();var g=B[(C-1+1)%z+1-1],f=!0;return new a({fg_loaded:function(a){a===g&&e()},delay_complete:function(){f=!1;e()},mouse_move:function(){r=new v},pause:function(){r=new q}})}function v(){h();return new a({mouse_move:h,mouse_leave:function(){r=new g},delay_interrupted_timeout:function(){r.mouse_leave()},pause:function(){r=new q(!0)}})}function q(e){h();return new a({mouse_move:function(){e=!0;h()},
mouse_leave:function(){e=!1},resume:function(){r=e?new v:0<G?new g:new y}})}function t(){p.notifyObservers("autorotating");C=(C-1+1)%z+1;p.notifyObservers("gotoCard",C);G--;return new a({rotation_complete:function(){r=0<G?new g:new y},mouse_move:function(){r=0<G?new e:new y},pause:function(){r=new m}})}function e(e){var g=!1;return new a({rotation_complete:function(){k();r=g?new q:new v},pause:function(){g=!0},resume:function(){g=!1}})}function m(){var e=!1;return new a({rotation_complete:function(){k();
r=new q(e)},mouse_move:function(){e=!0},mouse_leave:function(){e=!1}})}function x(e){p.notifyObservers("userNavigation");C=f(e);p.notifyObservers("gotoCard",C);return new a({rotation_complete:function(){r=new y},user_navigation:function(a){r=new u(a)},user_interaction:d})}function u(e){return new a({rotation_complete:function(){r=new x(e)},user_navigation:function(a){e=a},user_interaction:d})}function y(){p.notifyObservers("stopAutorotation");return new a({})}l=l||{};var p=new b,r=new function(){function e(){D[E]&&
f&&(p.notifyObservers("ready"),r=new g,c&&r.pause(),b&&r.stop_autorotation())}var f=!1,b=!1,c=!1;return new a({fg_loaded:function(a){a===E&&e()},js_ready:function(){f=!0;e()},user_navigation:d,stop_autorotation:function(){b=!0},pause:function(){c=!0},resume:function(){c=!1}})},B=l.fgIDs||[],z=B.length,E=B[0],C=l.card_num||1,D={},G=l.circular?Infinity:z;return{delayComplete:function(){r.delay_complete()},jsReady:function(){r.js_ready()},fgLoaded:function(a){D[a]=!0;E===a&&p.notifyObservers("atfLoaded");
r.fg_loaded(a)},mouseMove:function(){r.mouse_move()},mouseLeave:function(){r.mouse_leave()},delayInterruptedTimeout:function(){r.delay_interrupted_timeout()},rotationComplete:function(){r.rotation_complete()},gotoCard:function(a){r.goto_card(a)},userInteraction:function(){r.user_interaction()},userNavigation:function(a){r.user_navigation(a)},stopAutorotation:function(){r.stop_autorotation()},pause:function(){r.pause()},resume:function(){r.resume()},addObserver:p.addObserver,removeObserver:p.removeObserver}}});
d.when("herotator-btf").register("herotator",function(b){return b});d.register("herotator-btf",function(){return function(c,n){function l(a){return function(){d.when("gw-desktop-herotator/controller").execute(function(){I[a]()})}}function k(a,e,g){a.addEventListener?a.addEventListener(e,g,!1):a.attachEvent("on"+e,g)}function h(a,g){z[a]=[];var f=g.length;if(0<f)for(var b=0;b<f;b++)(function(f){var b=new Image;b.onload=function(){z[a].splice(e(z[a],b),1);z[a]&&0===z[a].length&&
d.when("gw-desktop-herotator/controller").execute(function(){var e=document.getElementById("gw-ftGr-"+a),g=e.className,g=g.replace(/\s*\ba\-lazy\-loaded\b\s*/,"");e.className=g;I.fgLoaded(a)});d.when("A").execute(function(e){var g=e.$("#gw-ftGr-"+a+" img.a-dynamic-image");e.loadDynamicImage(g)})};z[a].push(b);b.src=g[f].src})(b);else d.when("gw-desktop-herotator/controller").execute(function(){I.fgLoaded(a)})}function f(){B=Date.now()}function a(){D||q()}function g(){F=F?Math.min(F,Date.now()):Date.now();
clearTimeout(p.timeout_id);clearTimeout(g.timeout_id);g.timeout_id=setTimeout(function(){g.timeout_id=0;I.delayInterruptedTimeout()},3E3)}function v(){D=!0}function q(){q.sent||(clearTimeout(q.timeout),q.timeout=setTimeout(function(){t(c.uri,c.data);q.sent=!0},2E3))}function t(a,e){d.when("A").execute(function(g){g.$.ajax(a,{async:!1,cache:!1,type:"post",data:e})})}function e(a,e){if(a.indexOf)return a.indexOf(e);for(var g=0;g<a.length;g++)if(a[g]===e)return g}function m(){return U=U||u()}function x(a){"object"===
typeof b.ue&&"function"===typeof b.ue.count&&b.ue.count(a,(b.ue.count(a)||0)+1)}function u(){var a=L(".a-carousel-rounded-buttons .a-carousel-left,.a-carousel-rounded-buttons .a-carousel-right");L(".a-carousel-rounded-buttons .a-carousel-left").attr("cel_widget_id","gw-desktop-hero-left-cel");L(".a-carousel-rounded-buttons .a-carousel-right").attr("cel_widget_id","gw-desktop-hero-right-cel");L(".a-carousel-rounded-buttons .a-carousel-left").addClass("celwidget");L(".a-carousel-rounded-buttons .a-carousel-right").addClass("celwidget");
L(".a-carousel-rounded-buttons .a-carousel-left").click(function(a){x("gw-desktop-hero-left")});L(".a-carousel-rounded-buttons .a-carousel-right").click(function(a){x("gw-desktop-hero-right")});return{show:function(){a.show();L(".a-carousel-left").css("z-index",10);L(".a-carousel-right").css("z-index",10)},hide:function(){a.hide()}}}function y(){var a=L("#gw-desktop-herotator");a.addClass("gw-desktop-herotator-ready");d.register("herotator-controls",function(){1<a.find(".a-carousel-card").length?
(m().show(),b.GWI&&b.GWI.recordLatency("gwHerotatorActive")):m().hide()})}function p(a){G<F&&(C-=F-G,F=0);G=Date.now();p.timeout_id=setTimeout(function(){C=E;I.delayComplete()},C)}function r(a,e){r.current_card!==e&&(r.current_card=e,w.gotoPage(e),T.notifyObservers("page_changed"));setTimeout(function(){I.rotationComplete()},250)}var B=Date.now(),z={},E=5E3,C=E,D=!1,G=0,F=0,w,L,K=document.getElementById("gw-desktop-herotator").getElementsByTagName("ol")[0],T,I,U;k(K,"click",l("userInteraction"));
k(K,"mouseenter",l("mouseMove"));k(K,"mousemove",l("mouseMove"));k(K,"mouseleave",l("mouseLeave"));k(K,"touchstart",l("userInteraction"));k(K,"touchmove",l("userInteraction"));k(K,"touchend",l("userInteraction"));k(K,"touchcancel",l("userInteraction"));for(var K=document.getElementById("gw-desktop-herotator").getElementsByTagName("li")[0],M=0,N=K.childNodes[M];N&&"div"!==String(N.nodeName).toLowerCase();)M++,N=K.childNodes[M];M=N;K=String(M.id).replace(/^gw-ftGr-/,"");M=M.getElementsByTagName("img");
h(K,M||[]);for(var Q=[K],K=0;n[K];)Q.push(n[K].fgID),K++;d.when("gw-herotator-controller").execute(function(e){I=new e({fgIDs:Q});I.addObserver("atfLoaded",f);I.addObserver("delayBegin",p);I.addObserver("delayInterrupted",g);I.addObserver("gotoCard",r);I.addObserver("userNavigation",a);I.addObserver("stopAutorotation",v);I.addObserver("ready",function(){var a=Date.now()-B;C=Math.max(E-a,1);y();L("#gw-desktop-herotator").addClass("gw-desktop-herotator-ready")});d.register("gw-desktop-herotator/controller");
d.when("generic-observable").register("gw-desktop-herotator",function(a){T=new a;return{getAutorotationDelay:function(){return E},setAutorotationDelay:function(a){a=parseInt(a,10);C=a-(E-C);E=a},stopAutorotation:function(){I.stopAutorotation()},disableNavigation:function(){m().hide();w.pause()},enableNavigation:function(){m().show();w.resume()},pause:function(){I.pause()},resume:function(){I.resume()},addObserver:T.addObserver,removeObserver:T.removeObserver}})});d.when("A","a-carousel-framework",
"gwAjax").execute(function(a,e,g){function f(){var a=0;for(b.GWI&&b.GWI.recordLatency("gw-hero-btf-populate");n[a];){var e=n[a].fgID,g=n[a].content,c=document.getElementById("gw-ftGr-"+e);L(c).html(g);g=c.getElementsByTagName("img");h(e,g);a++}}L=a.$;e.onInit("gateway-desktop-layout.herotator",function(){var b=a.$("#gw-desktop-herotator > .a-carousel-container");w=e.getCarousel(b);w.onChange("pageNumber",function(){var a=w.getAttr("pageNumber");I.gotoCard(a);a-=2;n[a]&&n[a].callbackUrl&&(g(n[a].callbackUrl,
{type:"POST",id:"desktop-herotator-btf-"+n[a].fgID}),delete n[a].callbackUrl)});f();d.when("gw-desktop-herotator").register("gw-desktop-herotator/dom-ready");d.when("gw-desktop-herotator/controller","gw-desktop-herotator").execute(function(){I.jsReady()})})})}})});

}
/*
     FILE ARCHIVED ON 00:41:56 Nov 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:38:49 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 83.702
  exclusion.robots: 0.072
  exclusion.robots.policy: 0.062
  cdx.remote: 0.057
  esindex: 0.009
  LoadShardBlock: 41.171 (3)
  PetaboxLoader3.datanode: 129.32 (4)
  load_resource: 1522.155
  PetaboxLoader3.resolve: 707.189
*/