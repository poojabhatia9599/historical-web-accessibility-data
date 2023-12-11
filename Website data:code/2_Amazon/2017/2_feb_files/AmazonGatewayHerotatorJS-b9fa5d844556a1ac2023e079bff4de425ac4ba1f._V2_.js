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

(function(m){var h=window.AmazonUIPageJS||window.P,t=h._namespace||h.attributeErrors,g=t?t("AmazonGatewayHerotatorJS"):h;g.guardFatal?g.guardFatal(m)(g,window):g.execute(function(){m(g,window)})})(function(m,h,t){m.when("generic-observable").register("gw-herotator-controller",function(g){var k=function(){};return function(n){function f(){v.notifyObservers("delayBegin")}function e(){v.notifyObservers("delayInterrupted")}function b(a){for(var b=0;b<w.length;b++)if(w[b]===a)return b+1}function a(a){a=
a||{};return{delay_complete:a.delay_complete||k,js_ready:a.js_ready||k,fg_loaded:a.fg_loaded||k,mouse_move:a.mouse_move||k,mouse_leave:a.mouse_leave||k,delay_interrupted_timeout:a.delay_interrupted_timeout||k,rotation_complete:a.rotation_complete||k,goto_card:function(a){a!==C&&q.user_navigation(w[a-1])},user_navigation:a.user_navigation||function(a){q=new p(a)},user_interaction:a.user_interaction||function(){q.user_navigation(w[C-1])},stop_autorotation:a.stop_autorotation||function(){q.user_navigation(w[C-
1])},pause:a.pause||k,resume:a.resume||k}}function d(){function b(){!e&&E[d]&&(q=1===y?new u:new m)}f();var d=w[(C-1+1)%y+1-1],e=!0;return new a({fg_loaded:function(a){a===d&&b()},delay_complete:function(){e=!1;b()},mouse_move:function(){q=new c},pause:function(){q=new h}})}function c(){e();return new a({mouse_move:e,mouse_leave:function(){q=new d},delay_interrupted_timeout:function(){q.mouse_leave()},pause:function(){q=new h(!0)}})}function h(b){e();return new a({mouse_move:function(){b=!0;e()},
mouse_leave:function(){b=!1},resume:function(){q=b?new c:0<F?new d:new u}})}function m(){v.notifyObservers("autorotating");C=(C-1+1)%y+1;v.notifyObservers("gotoCard",C);F--;return new a({rotation_complete:function(){q=0<F?new d:new u},mouse_move:function(){q=0<F?new l:new u},pause:function(){q=new x}})}function l(b){var d=!1;return new a({rotation_complete:function(){f();q=d?new h:new c},pause:function(){d=!0},resume:function(){d=!1}})}function x(){var b=!1;return new a({rotation_complete:function(){f();
q=new h(b)},mouse_move:function(){b=!0},mouse_leave:function(){b=!1}})}function p(d){v.notifyObservers("userNavigation");C=b(d);v.notifyObservers("gotoCard",C);return new a({rotation_complete:function(){q=new u},user_navigation:function(a){q=new r(a)},user_interaction:k})}function r(b){return new a({rotation_complete:function(){q=new p(b)},user_navigation:function(a){b=a},user_interaction:k})}function u(){v.notifyObservers("stopAutorotation");return new a({})}n=n||{};var v=new g,q=new function(){function b(){E[A]&&
c&&(v.notifyObservers("ready"),q=new d,e&&q.pause(),f&&q.stop_autorotation())}var c=!1,f=!1,e=!1;return new a({fg_loaded:function(a){a===A&&b()},js_ready:function(){c=!0;b()},user_navigation:k,stop_autorotation:function(){f=!0},pause:function(){e=!0},resume:function(){e=!1}})},w=n.fgIDs||[],y=w.length,A=w[0],C=n.card_num||1,E={},F=n.circular?Infinity:y;return{delayComplete:function(){q.delay_complete()},jsReady:function(){q.js_ready()},fgLoaded:function(a){E[a]=!0;A===a&&v.notifyObservers("atfLoaded");
q.fg_loaded(a)},mouseMove:function(){q.mouse_move()},mouseLeave:function(){q.mouse_leave()},delayInterruptedTimeout:function(){q.delay_interrupted_timeout()},rotationComplete:function(){q.rotation_complete()},gotoCard:function(a){q.goto_card(a)},userInteraction:function(){q.user_interaction()},userNavigation:function(a){q.user_navigation(a)},stopAutorotation:function(){q.stop_autorotation()},pause:function(){q.pause()},resume:function(){q.resume()},addObserver:v.addObserver,removeObserver:v.removeObserver}}});
m.when("herotator-btf").register("herotator",function(g){return g});m.register("herotator-btf",function(){return function(g,k){function n(a){return function(){m.when("gw-desktop-herotator/controller").execute(function(){I[a]()})}}function f(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function e(a,b){w[a]=[];var d=b.length;if(0<d)for(var c=0;c<d;c++)(function(d){var c=new Image;c.onload=function(){w[a].splice(l(w[a],c),1);w[a]&&0===w[a].length&&
m.when("gw-desktop-herotator/controller").execute(function(){var b=document.getElementById("gw-ftGr-"+a),d=b.className,d=d.replace(/\s*\ba\-lazy\-loaded\b\s*/,"");b.className=d;I.fgLoaded(a)});m.when("A").execute(function(b){var d=b.$("#gw-ftGr-"+a+" img.a-dynamic-image");b.loadDynamicImage(d)})};w[a].push(c);c.src=b[d].src})(c);else m.when("gw-desktop-herotator/controller").execute(function(){I.fgLoaded(a)})}function b(){q=Date.now()}function a(){C||B()}function d(){F=F?Math.min(F,Date.now()):Date.now();
clearTimeout(u.timeout_id);clearTimeout(d.timeout_id);d.timeout_id=setTimeout(function(){d.timeout_id=0;I.delayInterruptedTimeout()},3E3)}function c(){C=!0}function B(){B.sent||(clearTimeout(B.timeout),B.timeout=setTimeout(function(){z(g.uri,g.data);B.sent=!0},2E3))}function z(a,b){m.when("A").execute(function(d){d.$.ajax(a,{async:!1,cache:!1,type:"post",data:b})})}function l(a,b){if(a.indexOf)return a.indexOf(b);for(var d=0;d<a.length;d++)if(a[d]===b)return d}function x(){return T=T||p()}function p(){var a;
a=G(".a-carousel-rounded-buttons .a-carousel-left, .a-carousel-rounded-buttons .a-carousel-right");return{show:function(){a.show();G(".a-carousel-left").css("z-index",1);G(".a-carousel-right").css("z-index",1)},hide:function(){a.hide()}}}function r(){var a=G("#gw-desktop-herotator");a.addClass("gw-desktop-herotator-ready");m.register("herotator-controls",function(){1<a.find(".a-carousel-card").length?(x().show(),h.GWI&&h.GWI.recordLatency("gwHerotatorActive")):x().hide()})}function u(a){E<F&&(A-=
F-E,F=0);E=Date.now();u.timeout_id=setTimeout(function(){A=y;I.delayComplete()},A)}function v(a,b){v.current_card!==b&&(v.current_card=b,D.gotoPage(b),Q.notifyObservers("page_changed"));setTimeout(function(){I.rotationComplete()},250)}var q=Date.now(),w={},y=5E3,A=y,C=!1,E=0,F=0,D,G,K=document.getElementById("gw-desktop-herotator").getElementsByTagName("ol")[0],Q,I,T;f(K,"click",n("userInteraction"));f(K,"mouseenter",n("mouseMove"));f(K,"mousemove",n("mouseMove"));f(K,"mouseleave",n("mouseLeave"));
f(K,"touchstart",n("userInteraction"));f(K,"touchmove",n("userInteraction"));f(K,"touchend",n("userInteraction"));f(K,"touchcancel",n("userInteraction"));for(var K=document.getElementById("gw-desktop-herotator").getElementsByTagName("li")[0],M=0,S=K.childNodes[M];S&&"div"!==String(S.nodeName).toLowerCase();)M++,S=K.childNodes[M];M=S;K=String(M.id).replace(/^gw-ftGr-/,"");M=M.getElementsByTagName("img");e(K,M||[]);for(var t=[K],K=0;k[K];)t.push(k[K].fgID),K++;m.when("gw-herotator-controller").execute(function(f){I=
new f({fgIDs:t});I.addObserver("atfLoaded",b);I.addObserver("delayBegin",u);I.addObserver("delayInterrupted",d);I.addObserver("gotoCard",v);I.addObserver("userNavigation",a);I.addObserver("stopAutorotation",c);I.addObserver("ready",function(){var a=Date.now()-q;A=Math.max(y-a,1);r();G("#gw-desktop-herotator").addClass("gw-desktop-herotator-ready")});m.register("gw-desktop-herotator/controller");m.when("generic-observable").register("gw-desktop-herotator",function(a){Q=new a;return{getAutorotationDelay:function(){return y},
setAutorotationDelay:function(a){a=parseInt(a,10);A=a-(y-A);y=a},stopAutorotation:function(){I.stopAutorotation()},disableNavigation:function(){x().hide();D.pause()},enableNavigation:function(){x().show();D.resume()},pause:function(){I.pause()},resume:function(){I.resume()},addObserver:Q.addObserver,removeObserver:Q.removeObserver}})});m.when("A","a-carousel-framework","gwAjax").execute(function(a,b,d){function c(){var a=0;for(h.GWI&&h.GWI.recordLatency("gw-hero-btf-populate");k[a];){var b=k[a].fgID,
d=k[a].content,f=document.getElementById("gw-ftGr-"+b);G(f).html(d);d=f.getElementsByTagName("img");e(b,d);a++}}G=a.$;b.onInit("gateway-desktop-layout.herotator",function(){var f=a.$("#gw-desktop-herotator > .a-carousel-container");D=b.getCarousel(f);D.onChange("pageNumber",function(){var a=D.getAttr("pageNumber");I.gotoCard(a);a-=2;k[a]&&k[a].callbackUrl&&(d(k[a].callbackUrl,{type:"POST",id:"desktop-herotator-btf-"+k[a].fgID}),delete k[a].callbackUrl)});c();m.when("gw-desktop-herotator").register("gw-desktop-herotator/dom-ready");
m.when("gw-desktop-herotator/controller","gw-desktop-herotator").execute(function(){I.jsReady()})})})}})});

}
/*
     FILE ARCHIVED ON 23:17:47 Jan 31, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:35:49 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 170.087
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.061
  cdx.remote: 0.058
  esindex: 0.009
  LoadShardBlock: 132.981 (3)
  PetaboxLoader3.resolve: 167.739 (5)
  PetaboxLoader3.datanode: 64.663 (5)
  load_resource: 133.186 (2)
*/