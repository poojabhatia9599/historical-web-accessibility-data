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
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return l.apply(null,c)}return l(this,a)};function p(){}p.prototype.p=!1;p.prototype.dispose=function(){this.p||(this.p=!0,this.o())};p.prototype.o=function(){if(this.s)for(;this.s.length;)this.s.shift()()};function q(){this.a=[];this.a[3]=[];this.a[2]=[];this.a[1]=[];this.a[0]=[];this.b={};this.g=q.a;this.q=this.i=0;this.k=this.j=!1;this.d=[];this.t=l(this.u,this)}(function(){var a=q;function b(){}b.prototype=p.prototype;a.v=p.prototype;a.prototype=new b;a.A=function(a,b,f){return p.prototype[b].apply(a,Array.prototype.slice.call(arguments,2))}})();q.g="hidden";q.d=1E3/60;q.b=3;q.a=q.d-q.b;
function r(a,b,c){++a.q;var d=a.q;a.b[d]=b;a.j?a.d.push({id:d,priority:c}):(a.a[c].push(d),a.k||a.start());return d}function s(a){a.d.length=0;for(var b=3;0<=b;b--)a.a[b].length=0;a.b={};a.stop()}function t(a){try{a()}catch(b){(a=g("yt.www.errors.log"))&&a(b)}}
q.prototype.u=function(){this.stop();this.j=!0;for(var a=m()+this.g,b=this.a[3];b.length;){var c=this.b[b.shift()];c&&t(c)}for(b=2;0<=b;b--){for(var c=a,d=this.a[b];d.length&&m()<c;){var f=d.shift(),u=this.b[f];delete this.b[f];u&&t(u)}if(!(m()<c))break}this.j=!1;b=0;for(c=this.d.length;b<c;b++)d=this.d[b],this.a[d.priority].push(d.id);this.g=q.a;(a<=m()||this.d.length)&&this.start();this.d.length=0};q.prototype.start=function(){this.k=!1;0==this.i&&(this.i=window.setTimeout(this.t,1))};
q.prototype.pause=function(){this.stop();this.k=!0};q.prototype.stop=function(){window.clearTimeout(this.i);this.i=0};q.prototype.o=function(){s(this);this.stop();q.v.o.call(this)};function v(){var a=g("yt.scheduler.instance.instance_");if(!a||a.p)a=new q,n("yt.scheduler.instance.instance_",a);return a}var w=g("yt.scheduler.instance.timerIdMap_")||{};n("yt.scheduler.instance.dispose",function(){var a=g("yt.scheduler.instance.instance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),n("yt.scheduler.instance.instance_",null))});n("yt.scheduler.instance.addJob",function(a,b,c){if(0==c)return-r(v(),a,b);var d=window.setTimeout(function(){var c=r(v(),a,b);w[d]=c},c);return d});n("yt.scheduler.instance.addImmediateJob",function(a){var b=v(),c=m();t(a);a=m()-c;b.g-=a});
n("yt.scheduler.instance.cancelJob",function(a){var b=v();if(0>a)delete b.b[-a];else{var c=w[a];c?(delete b.b[c],delete w[a]):window.clearTimeout(a)}});n("yt.scheduler.instance.cancelAllJobs",function(){s(v())});n("yt.scheduler.instance.start",function(){v().start()});n("yt.scheduler.instance.pause",function(){v().pause()});})();


}
/*
     FILE ARCHIVED ON 00:05:34 Aug 01, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:48:51 Dec 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 229.19
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.064
  cdx.remote: 0.058
  esindex: 0.009
  LoadShardBlock: 150.363 (3)
  PetaboxLoader3.datanode: 145.666 (5)
  PetaboxLoader3.resolve: 85.332 (2)
  load_resource: 237.925 (2)
*/