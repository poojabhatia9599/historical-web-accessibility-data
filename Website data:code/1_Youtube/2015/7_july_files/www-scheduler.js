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

(function(){var e=this;function g(a){a=a.split(".");for(var b=e,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function h(a,b,c){return a.call.apply(a.bind,arguments)}function k(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function l(a,b,c){l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:k;return l.apply(null,arguments)}var m=Date.now||function(){return+new Date};function n(a,b){var c=a.split("."),d=e;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)c.length||void 0===b?d[f]?d=d[f]:d=d[f]={}:d[f]=b}
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return l.apply(null,c)}return l(this,a)};function p(){this.l=this.l;this.A=this.A}p.prototype.l=!1;p.prototype.isDisposed=function(){return this.l};p.prototype.dispose=function(){this.l||(this.l=!0,this.B())};p.prototype.B=function(){if(this.A)for(;this.A.length;)this.A.shift()()};function r(){p.call(this);this.f=[];this.f[3]=[];this.f[2]=[];this.f[1]=[];this.f[0]=[];this.h={};this.o=r.f;this.D=this.v=0;this.C=this.m=!1;this.j=[];this.F=l(this.G,this)}(function(){var a=r;function b(){}b.prototype=p.prototype;a.H=p.prototype;a.prototype=new b;a.base=function(a,b,f){for(var v=Array(arguments.length-2),q=2;q<arguments.length;q++)v[q-2]=arguments[q];return p.prototype[b].apply(a,v)}})();r.l="hidden";r.j=1E3/60;r.h=3;r.f=r.j-r.h;
function t(a,b,c,d){++a.D;var f=a.D;a.h[f]=b;a.m&&!d?a.j.push({id:f,priority:c}):(a.f[c].push(f),a.C||a.m||a.start());return f}function u(a){a.j.length=0;for(var b=3;0<=b;b--)a.f[b].length=0;a.h={};a.stop()}function w(a){try{a()}catch(b){(a=g("yt.www.errors.log"))&&a(b)}}
r.prototype.G=function(){this.stop();this.m=!0;for(var a=m()+this.o,b=this.f[3];b.length;){var c=b.shift(),d=this.h[c];delete this.h[c];d&&w(d)}if(!(m()>=a)){do{a:{for(b=2;0<=b;b--)for(c=this.f[b];c.length;){var d=c.shift(),f=this.h[d];delete this.h[d];if(f){b=f;break a}}b=null}b&&w(b)}while(b&&m()<a)}this.m=!1;b=0;for(c=this.j.length;b<c;b++)d=this.j[b],this.f[d.priority].push(d.id);this.o=r.f;(a<=m()||this.j.length)&&this.start();this.j.length=0};
r.prototype.start=function(){this.C=!1;0==this.v&&(this.v=window.setTimeout(this.F,1))};r.prototype.pause=function(){this.stop();this.C=!0};r.prototype.stop=function(){window.clearTimeout(this.v);this.v=0};r.prototype.B=function(){u(this);this.stop();r.H.B.call(this)};function x(){var a=g("yt.scheduler.instance.instance_");if(!a||a.isDisposed())a=new r,n("yt.scheduler.instance.instance_",a);return a}function y(){var a=g("yt.scheduler.instance.instance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),n("yt.scheduler.instance.instance_",null))}function z(){u(x())}var A=g("yt.scheduler.instance.timerIdMap_")||{};function B(a,b,c){if(0==c||void 0===c)return c=void 0===c,-t(x(),a,b,c);var d=window.setTimeout(function(){var c=t(x(),a,b);A[d]=c},c);return d}
function C(a){var b=x(),c=m();w(a);a=m()-c;b.o-=a}function D(a){var b=x();if(0>a)delete b.h[-a];else{var c=A[a];c?(delete b.h[c],delete A[a]):window.clearTimeout(a)}}function E(){x().start()}function F(){x().pause()};function G(){}G.getInstance=function(){return G.f?G.f:G.f=new G};G.prototype.addTask=function(a){return B(a,2)};G.prototype.cancelTask=function(a){D(a)};if(!g("yt.scheduler.initialized")){n("yt.scheduler.instance.dispose",y);n("yt.scheduler.instance.addJob",B);n("yt.scheduler.instance.addImmediateJob",C);n("yt.scheduler.instance.cancelJob",D);n("yt.scheduler.instance.cancelAllJobs",z);n("yt.scheduler.instance.start",E);n("yt.scheduler.instance.pause",F);n("yt.scheduler.SpfScheduler.instance",G.getInstance());var H=G.getInstance(),I=G.getInstance().addTask;H.addTask=I;var J=G.getInstance(),K=G.getInstance().cancelTask;J.cancelTask=K;n("yt.scheduler.initialized",
!0)};})();


}
/*
     FILE ARCHIVED ON 00:22:15 Jul 01, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:01:02 Dec 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 197.931
  exclusion.robots: 0.082
  exclusion.robots.policy: 0.072
  cdx.remote: 0.068
  esindex: 0.012
  LoadShardBlock: 28.691 (3)
  PetaboxLoader3.datanode: 45.351 (4)
  load_resource: 125.852
  PetaboxLoader3.resolve: 73.494
*/