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

(function(){var e=this;function f(a){a=a.split(".");for(var b=e,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function g(a,b,c){return a.call.apply(a.bind,arguments)}function k(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function l(a,b,c){l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:k;return l.apply(null,arguments)}var m=Date.now||function(){return+new Date};function n(a,b){var c=a.split("."),d=e;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var h;c.length&&(h=c.shift());)c.length||void 0===b?d[h]?d=d[h]:d=d[h]={}:d[h]=b}
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return l.apply(null,c)}return l(this,a)};function q(){this.o=this.o;this.v=this.v}q.prototype.o=!1;q.prototype.dispose=function(){this.o||(this.o=!0,this.C())};q.prototype.C=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function t(){q.call(this);this.d=[];this.d[3]=[];this.d[2]=[];this.d[1]=[];this.d[0]=[];this.g={};this.k=t.d;this.D=this.t=0;this.B=this.A=!1;this.j=[];this.F=l(this.G,this)}(function(){var a=t;function b(){}b.prototype=q.prototype;a.H=q.prototype;a.prototype=new b;a.base=function(a,b,h){for(var p=Array(arguments.length-2),r=2;r<arguments.length;r++)p[r-2]=arguments[r];return q.prototype[b].apply(a,p)}})();t.k="hidden";t.j=1E3/60;t.g=3;t.d=t.j-t.g;
function u(a,b,c){++a.D;var d=a.D;a.g[d]=b;a.A?a.j.push({id:d,priority:c}):(a.d[c].push(d),a.B||a.start());return d}function v(a){a.j.length=0;for(var b=3;0<=b;b--)a.d[b].length=0;a.g={};a.stop()}function w(a){try{a()}catch(b){(a=f("yt.www.errors.log"))&&a(b)}}
t.prototype.G=function(){this.stop();this.A=!0;for(var a=m()+this.k,b=this.d[3];b.length;){var c=this.g[b.shift()];c&&w(c)}for(b=2;0<=b;b--){for(var c=a,d=this.d[b];d.length&&m()<c;){var h=d.shift(),p=this.g[h];delete this.g[h];p&&w(p)}if(!(m()<c))break}this.A=!1;b=0;for(c=this.j.length;b<c;b++)d=this.j[b],this.d[d.priority].push(d.id);this.k=t.d;(a<=m()||this.j.length)&&this.start();this.j.length=0};t.prototype.start=function(){this.B=!1;0==this.t&&(this.t=window.setTimeout(this.F,1))};
t.prototype.pause=function(){this.stop();this.B=!0};t.prototype.stop=function(){window.clearTimeout(this.t);this.t=0};t.prototype.C=function(){v(this);this.stop();t.H.C.call(this)};function x(){var a=f("yt.scheduler.instance.instance_");if(!a||a.o)a=new t,n("yt.scheduler.instance.instance_",a);return a}var y=f("yt.scheduler.instance.timerIdMap_")||{};function z(a,b,c){if(0==c)return-u(x(),a,b);var d=window.setTimeout(function(){var c=u(x(),a,b);y[d]=c},c);return d}function A(a){var b=x();if(0>a)delete b.g[-a];else{var c=y[a];c?(delete b.g[c],delete y[a]):window.clearTimeout(a)}};function B(){}B.getInstance=function(){return B.d?B.d:B.d=new B};B.prototype.addTask=function(a){return z(a,2,0)};B.prototype.cancelTask=function(a){A(a)};n("yt.scheduler.instance.dispose",function(){var a=f("yt.scheduler.instance.instance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),n("yt.scheduler.instance.instance_",null))});n("yt.scheduler.instance.addJob",z);n("yt.scheduler.instance.addImmediateJob",function(a){var b=x(),c=m();w(a);a=m()-c;b.k-=a});n("yt.scheduler.instance.cancelJob",A);n("yt.scheduler.instance.cancelAllJobs",function(){v(x())});n("yt.scheduler.instance.start",function(){x().start()});n("yt.scheduler.instance.pause",function(){x().pause()});
n("yt.scheduler.SpfScheduler.instance",B.getInstance());var C=B.getInstance(),D=B.getInstance().addTask;C.addTask=D;var E=B.getInstance(),F=B.getInstance().cancelTask;E.cancelTask=F;})();


}
/*
     FILE ARCHIVED ON 00:06:23 Jan 01, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:00:26 Dec 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 145.106
  exclusion.robots: 0.088
  exclusion.robots.policy: 0.077
  cdx.remote: 0.067
  esindex: 0.009
  LoadShardBlock: 31.037 (3)
  PetaboxLoader3.datanode: 56.991 (4)
  load_resource: 100.351
  PetaboxLoader3.resolve: 56.971
*/