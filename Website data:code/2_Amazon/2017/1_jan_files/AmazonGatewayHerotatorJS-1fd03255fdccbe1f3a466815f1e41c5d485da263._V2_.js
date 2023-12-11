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

(function(m){var h=window.AmazonUIPageJS||window.P,r=h._namespace||h.attributeErrors,g=r?r("AmazonGatewayHerotatorJS"):h;g.guardFatal?g.guardFatal(m)(g,window):g.execute(function(){m(g,window)})})(function(m,h,r){m.when("generic-observable").register("gw-herotator-controller",function(g){var k=function(){};return function(n){function f(){w.notifyObservers("delayBegin")}function e(){w.notifyObservers("delayInterrupted")}function b(a){for(var c=0;c<v.length;c++)if(v[c]===a)return c+1}function a(a){a=
a||{};return{delay_complete:a.delay_complete||k,js_ready:a.js_ready||k,fg_loaded:a.fg_loaded||k,mouse_move:a.mouse_move||k,mouse_leave:a.mouse_leave||k,delay_interrupted_timeout:a.delay_interrupted_timeout||k,rotation_complete:a.rotation_complete||k,goto_card:function(a){a!==C&&q.user_navigation(v[a-1])},user_navigation:a.user_navigation||function(a){q=new p(a)},user_interaction:a.user_interaction||function(){q.user_navigation(v[C-1])},stop_autorotation:a.stop_autorotation||function(){q.user_navigation(v[C-
1])},pause:a.pause||k,resume:a.resume||k}}function c(){function c(){!e&&E[b]&&(q=1===y?new u:new m)}f();var b=v[(C-1+1)%y+1-1],e=!0;return new a({fg_loaded:function(a){a===b&&c()},delay_complete:function(){e=!1;c()},mouse_move:function(){q=new d},pause:function(){q=new h}})}function d(){e();return new a({mouse_move:e,mouse_leave:function(){q=new c},delay_interrupted_timeout:function(){q.mouse_leave()},pause:function(){q=new h(!0)}})}function h(b){e();return new a({mouse_move:function(){b=!0;e()},
mouse_leave:function(){b=!1},resume:function(){q=b?new d:0<F?new c:new u}})}function m(){w.notifyObservers("autorotating");C=(C-1+1)%y+1;w.notifyObservers("gotoCard",C);F--;return new a({rotation_complete:function(){q=0<F?new c:new u},mouse_move:function(){q=0<F?new l:new u},pause:function(){q=new x}})}function l(c){var b=!1;return new a({rotation_complete:function(){f();q=b?new h:new d},pause:function(){b=!0},resume:function(){b=!1}})}function x(){var c=!1;return new a({rotation_complete:function(){f();
q=new h(c)},mouse_move:function(){c=!0},mouse_leave:function(){c=!1}})}function p(c){w.notifyObservers("userNavigation");C=b(c);w.notifyObservers("gotoCard",C);return new a({rotation_complete:function(){q=new u},user_navigation:function(a){q=new t(a)},user_interaction:k})}function t(c){return new a({rotation_complete:function(){q=new p(c)},user_navigation:function(a){c=a},user_interaction:k})}function u(){w.notifyObservers("stopAutorotation");return new a({})}n=n||{};var w=new g,q=new function(){function b(){E[A]&&
d&&(w.notifyObservers("ready"),q=new c,e&&q.pause(),f&&q.stop_autorotation())}var d=!1,f=!1,e=!1;return new a({fg_loaded:function(a){a===A&&b()},js_ready:function(){d=!0;b()},user_navigation:k,stop_autorotation:function(){f=!0},pause:function(){e=!0},resume:function(){e=!1}})},v=n.fgIDs||[],y=v.length,A=v[0],C=n.card_num||1,E={},F=n.circular?Infinity:y;return{delayComplete:function(){q.delay_complete()},jsReady:function(){q.js_ready()},fgLoaded:function(a){E[a]=!0;A===a&&w.notifyObservers("atfLoaded");
q.fg_loaded(a)},mouseMove:function(){q.mouse_move()},mouseLeave:function(){q.mouse_leave()},delayInterruptedTimeout:function(){q.delay_interrupted_timeout()},rotationComplete:function(){q.rotation_complete()},gotoCard:function(a){q.goto_card(a)},userInteraction:function(){q.user_interaction()},userNavigation:function(a){q.user_navigation(a)},stopAutorotation:function(){q.stop_autorotation()},pause:function(){q.pause()},resume:function(){q.resume()},addObserver:w.addObserver,removeObserver:w.removeObserver}}});
m.when("herotator-btf").register("herotator",function(g){return g});m.register("herotator-btf",function(){return function(g,k){function n(a){return function(){m.when("gw-desktop-herotator/controller").execute(function(){J[a]()})}}function f(a,c,b){a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent("on"+c,b)}function e(a,c){v[a]=[];var b=c.length;if(0<b)for(var d=0;d<b;d++)(function(b){var d=new Image;d.onload=function(){v[a].splice(l(v[a],d),1);v[a]&&0===v[a].length&&
m.when("gw-desktop-herotator/controller").execute(function(){var c=document.getElementById("gw-ftGr-"+a),b=c.className,b=b.replace(/\s*\ba\-lazy\-loaded\b\s*/,"");c.className=b;J.fgLoaded(a)});m.when("A").execute(function(c){var b=c.$("#gw-ftGr-"+a+" img.a-dynamic-image");c.loadDynamicImage(b)})};v[a].push(d);d.src=c[b].src})(d);else m.when("gw-desktop-herotator/controller").execute(function(){J.fgLoaded(a)})}function b(){q=Date.now()}function a(){C||B()}function c(){F=F?Math.min(F,Date.now()):Date.now();
clearTimeout(u.timeout_id);clearTimeout(c.timeout_id);c.timeout_id=setTimeout(function(){c.timeout_id=0;J.delayInterruptedTimeout()},3E3)}function d(){C=!0}function B(){B.sent||(clearTimeout(B.timeout),B.timeout=setTimeout(function(){z(g.uri,g.data);B.sent=!0},2E3))}function z(a,c){m.when("A").execute(function(b){b.$.ajax(a,{async:!1,cache:!1,type:"post",data:c})})}function l(a,c){if(a.indexOf)return a.indexOf(c);for(var b=0;b<a.length;b++)if(a[b]===c)return b}function x(){return S=S||p()}function p(){var a;
a=G(".a-carousel-rounded-buttons .a-carousel-left, .a-carousel-rounded-buttons .a-carousel-right");return{show:function(){a.show();G(".a-carousel-left").css("z-index",1);G(".a-carousel-right").css("z-index",1)},hide:function(){a.hide()}}}function t(){var a=G("#gw-desktop-herotator");a.addClass("gw-desktop-herotator-ready");m.register("herotator-controls",function(){1<a.find(".a-carousel-card").length?(x().show(),h.GWI&&h.GWI.recordLatency("gwHerotatorActive")):x().hide()})}function u(a){E<F&&(A-=
F-E,F=0);E=Date.now();u.timeout_id=setTimeout(function(){A=y;J.delayComplete()},A)}function w(a,c){w.current_card!==c&&(w.current_card=c,D.gotoPage(c),Q.notifyObservers("page_changed"));setTimeout(function(){J.rotationComplete()},250)}var q=Date.now(),v={},y=5E3,A=y,C=!1,E=0,F=0,D,G,K=document.getElementById("gw-desktop-herotator").getElementsByTagName("ol")[0],Q,J,S;f(K,"click",n("userInteraction"));f(K,"mouseenter",n("mouseMove"));f(K,"mousemove",n("mouseMove"));f(K,"mouseleave",n("mouseLeave"));
f(K,"touchstart",n("userInteraction"));f(K,"touchmove",n("userInteraction"));f(K,"touchend",n("userInteraction"));f(K,"touchcancel",n("userInteraction"));for(var K=document.getElementById("gw-desktop-herotator").getElementsByTagName("li")[0],M=0,r=K.childNodes[M];r&&"div"!==String(r.nodeName).toLowerCase();)M++,r=K.childNodes[M];M=r;K=String(M.id).replace(/^gw-ftGr-/,"");M=M.getElementsByTagName("img");e(K,M||[]);for(var T=[K],K=0;k[K];)T.push(k[K].fgID),K++;m.when("gw-herotator-controller").execute(function(f){J=
new f({fgIDs:T});J.addObserver("atfLoaded",b);J.addObserver("delayBegin",u);J.addObserver("delayInterrupted",c);J.addObserver("gotoCard",w);J.addObserver("userNavigation",a);J.addObserver("stopAutorotation",d);J.addObserver("ready",function(){var a=Date.now()-q;A=Math.max(y-a,1);t();G("#gw-desktop-herotator").addClass("gw-desktop-herotator-ready")});m.register("gw-desktop-herotator/controller");m.when("generic-observable").register("gw-desktop-herotator",function(a){Q=new a;return{getAutorotationDelay:function(){return y},
setAutorotationDelay:function(a){a=parseInt(a,10);A=a-(y-A);y=a},stopAutorotation:function(){J.stopAutorotation()},disableNavigation:function(){x().hide();D.pause()},enableNavigation:function(){x().show();D.resume()},pause:function(){J.pause()},resume:function(){J.resume()},addObserver:Q.addObserver,removeObserver:Q.removeObserver}})});m.when("A","a-carousel-framework","gwAjax").execute(function(a,c,b){function d(){var a=0;for(h.GWI&&h.GWI.recordLatency("gw-hero-btf-populate");k[a];){var c=k[a].fgID,
b=k[a].content,f=document.getElementById("gw-ftGr-"+c);G(f).html(b);b=f.getElementsByTagName("img");e(c,b);a++}}G=a.$;c.onInit("gateway-desktop-layout.herotator",function(){var f=a.$("#gw-desktop-herotator > .a-carousel-container");D=c.getCarousel(f);D.onChange("pageNumber",function(){var a=D.getAttr("pageNumber");J.gotoCard(a);a-=2;k[a]&&k[a].callbackUrl&&(b(k[a].callbackUrl,{type:"POST",id:"desktop-herotator-btf-"+k[a].fgID}),delete k[a].callbackUrl)});d();m.when("gw-desktop-herotator").register("gw-desktop-herotator/dom-ready");
m.when("gw-desktop-herotator/controller","gw-desktop-herotator").execute(function(){J.jsReady()})})})}})});

}
/*
     FILE ARCHIVED ON 16:45:41 Dec 31, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:35:41 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 217.802
  exclusion.robots: 0.081
  exclusion.robots.policy: 0.071
  cdx.remote: 0.058
  esindex: 0.009
  LoadShardBlock: 84.308 (3)
  PetaboxLoader3.datanode: 174.562 (4)
  load_resource: 185.377
  PetaboxLoader3.resolve: 82.369
*/