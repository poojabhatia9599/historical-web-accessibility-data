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

(function(){var f="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},g;
if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var h;a:{var k={L:!0},l={};try{l.__proto__=k;h=l.L;break a}catch(a){}h=!1}g=h?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=g,n=this||self;
function p(a){a=a.split(".");for(var b=n,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function q(a,b,c){return a.call.apply(a.bind,arguments)}
function aa(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=q:r=aa;return r.apply(null,arguments)}
var u=Date.now||function(){return+new Date};
function v(a,b){var c=a.split("."),e=n;c[0]in e||"undefined"==typeof e.execScript||e.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?e[d]&&e[d]!==Object.prototype[d]?e=e[d]:e=e[d]={}:e[d]=b}
;function w(){this.h=this.h;this.m=this.m}
w.prototype.h=!1;w.prototype.dispose=function(){this.h||(this.h=!0,this.o())};
w.prototype.o=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var x=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",x);function y(a,b){return a in x?x[a]:b}
function A(){return y("SCHEDULER_SOFT_STATE_TIMER",800)}
;function B(a){var b=y("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:y("EXPERIMENT_FLAGS",{})[a]}
;var C,D=B("web_emulated_idle_callback_delay");C=void 0===D?300:Number(D||0);var E=1E3/60-3;
function F(a){a=void 0===a?{}:a;w.call(this);this.a=[];this.a[4]=[];this.a[3]=[];this.a[2]=[];this.a[1]=[];this.a[0]=[];this.f=0;this.G=a.timeout||1;this.c={};this.l=E;this.s=this.b=this.j=0;this.u=this.i=!1;this.g=[];this.A=r(this.I,this);this.F=r(this.K,this);this.C=r(this.H,this);this.D=r(this.J,this);this.v=!1;var b;if(b=!!window.requestIdleCallback)b=B("disable_scheduler_requestIdleCallback"),b=!("string"==typeof b&&"false"===b?0:b);this.B=b;(this.w=!!a.useRaf&&!!window.requestAnimationFrame)&&
document.addEventListener("visibilitychange",this.A)}
F.prototype=f(w.prototype);F.prototype.constructor=F;if(m)m(F,w);else for(var G in w)if("prototype"!=G)if(Object.defineProperties){var H=Object.getOwnPropertyDescriptor(w,G);H&&Object.defineProperty(F,G,H)}else F[G]=w[G];function I(a,b){var c=u();J(b);c=u()-c;a.i||(a.l-=c)}
function K(a,b,c,e){++a.s;if(10==c)return I(a,b),a.s;var d=a.s;a.c[d]=b;a.i&&!e?a.g.push({id:d,priority:c}):(a.a[c].push(d),a.u||a.i||(0!=a.b&&L(a)!=a.j&&M(a),a.start()));return d}
function N(a){a.g.length=0;for(var b=4;0<=b;b--)a.a[b].length=0;a.c={};M(a)}
function L(a){for(var b=4;b>=a.f;b--)if(0<a.a[b].length)return 0<b?!document.hidden&&a.w?3:2:1;return 0}
function J(a){try{a()}catch(b){(a=p("yt.logging.errors.log"))&&a(b)}}
F.prototype.H=function(a){var b=void 0;a&&(b=a.timeRemaining());this.v=!0;O(this,b);this.v=!1};
F.prototype.K=function(){O(this)};
F.prototype.J=function(){O(this)};
F.prototype.I=function(){this.b&&(M(this),this.start())};
function O(a,b){M(a);a.i=!0;for(var c=u()+(b||a.l),e=a.a[4];e.length;){var d=e.shift(),t=a.c[d];delete a.c[d];t&&J(t)}e=a.v?0:1;e=a.f>e?a.f:e;if(!(u()>=c)){do{a:{d=a;t=e;for(var z=3;z>=t;z--)for(var Q=d.a[z];Q.length;){var R=Q.shift(),S=d.c[R];delete d.c[R];if(S){d=S;break a}}d=null}d&&J(d)}while(d&&u()<c)}a.i=!1;c=0;for(e=a.g.length;c<e;c++)d=a.g[c],a.a[d.priority].push(d.id);a.l=E;a:{for(c=3;0<=c;c--)if(a.a[c].length){c=!0;break a}c=!1}(c||a.g.length)&&a.start();a.g.length=0}
F.prototype.start=function(){this.u=!1;if(0==this.b)switch(this.j=L(this),this.j){case 1:var a=this.C;this.b=this.B?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,C);break;case 2:this.b=window.setTimeout(this.F,this.G);break;case 3:this.b=window.requestAnimationFrame(this.D)}};
function M(a){if(a.b){switch(a.j){case 1:var b=a.b;a.B?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:window.clearTimeout(a.b);break;case 3:window.cancelAnimationFrame(a.b)}a.b=0}}
F.prototype.o=function(){N(this);M(this);this.w&&document.removeEventListener("visibilitychange",this.A);w.prototype.o.call(this)};var P=p("yt.scheduler.instance.timerIdMap_")||{},T=0,U=0;function V(){var a=p("ytglobal.schedulerInstanceInstance_");if(!a||a.h)a=new F(y("scheduler",void 0)||{}),v("ytglobal.schedulerInstanceInstance_",a);return a}
function ba(){var a=p("ytglobal.schedulerInstanceInstance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),v("ytglobal.schedulerInstanceInstance_",null))}
function ca(){N(V())}
function da(a,b,c){if(0==c||void 0===c)return c=void 0===c,-K(V(),a,b,c);var e=window.setTimeout(function(){var d=K(V(),a,b);P[e]=d},c);
return e}
function ea(a){I(V(),a)}
function fa(a){var b=V();if(0>a)delete b.c[-a];else{var c=P[a];c?(delete b.c[c],delete P[a]):window.clearTimeout(a)}}
function W(a){var b=p("ytcsi.tick");b&&b(a)}
function ha(){W("jse");X()}
function X(){window.clearTimeout(T);V().start()}
function ia(){var a=V();M(a);a.u=!0;window.clearTimeout(T);T=window.setTimeout(ha,A())}
function Y(){window.clearTimeout(U);U=window.setTimeout(function(){W("jset");Z(0)},A())}
function Z(a){Y();var b=V();b.f=a;b.start()}
function ja(a){Y();var b=V();b.f>a&&(b.f=a,b.start())}
function ka(){window.clearTimeout(U);var a=V();a.f=0;a.start()}
;p("yt.scheduler.initialized")||(v("yt.scheduler.instance.dispose",ba),v("yt.scheduler.instance.addJob",da),v("yt.scheduler.instance.addImmediateJob",ea),v("yt.scheduler.instance.cancelJob",fa),v("yt.scheduler.instance.cancelAllJobs",ca),v("yt.scheduler.instance.start",X),v("yt.scheduler.instance.pause",ia),v("yt.scheduler.instance.setPriorityThreshold",Z),v("yt.scheduler.instance.enablePriorityThreshold",ja),v("yt.scheduler.instance.clearPriorityThreshold",ka),v("yt.scheduler.initialized",!0));}).call(this);


}
/*
     FILE ARCHIVED ON 00:00:50 Oct 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:43:58 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 674.897
  exclusion.robots: 0.079
  exclusion.robots.policy: 0.069
  cdx.remote: 0.06
  esindex: 0.009
  LoadShardBlock: 111.847 (3)
  PetaboxLoader3.datanode: 141.487 (5)
  load_resource: 264.443 (2)
  PetaboxLoader3.resolve: 97.419 (2)
*/