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
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return l.apply(null,c)}return l(this,a)};function p(){this.o=this.o;this.v=this.v}p.prototype.o=!1;p.prototype.dispose=function(){this.o||(this.o=!0,this.C())};p.prototype.C=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function q(){p.call(this);this.d=[];this.d[3]=[];this.d[2]=[];this.d[1]=[];this.d[0]=[];this.g={};this.k=q.d;this.D=this.t=0;this.B=this.A=!1;this.j=[];this.F=l(this.G,this)}(function(){var a=q;function b(){}b.prototype=p.prototype;a.H=p.prototype;a.prototype=new b;a.base=function(a,b,h){return p.prototype[b].apply(a,Array.prototype.slice.call(arguments,2))}})();q.k="hidden";q.j=1E3/60;q.g=3;q.d=q.j-q.g;
function r(a,b,c){++a.D;var d=a.D;a.g[d]=b;a.A?a.j.push({id:d,priority:c}):(a.d[c].push(d),a.B||a.start());return d}function t(a){a.j.length=0;for(var b=3;0<=b;b--)a.d[b].length=0;a.g={};a.stop()}function u(a){try{a()}catch(b){(a=f("yt.www.errors.log"))&&a(b)}}
q.prototype.G=function(){this.stop();this.A=!0;for(var a=m()+this.k,b=this.d[3];b.length;){var c=this.g[b.shift()];c&&u(c)}for(b=2;0<=b;b--){for(var c=a,d=this.d[b];d.length&&m()<c;){var h=d.shift(),w=this.g[h];delete this.g[h];w&&u(w)}if(!(m()<c))break}this.A=!1;b=0;for(c=this.j.length;b<c;b++)d=this.j[b],this.d[d.priority].push(d.id);this.k=q.d;(a<=m()||this.j.length)&&this.start();this.j.length=0};q.prototype.start=function(){this.B=!1;0==this.t&&(this.t=window.setTimeout(this.F,1))};
q.prototype.pause=function(){this.stop();this.B=!0};q.prototype.stop=function(){window.clearTimeout(this.t);this.t=0};q.prototype.C=function(){t(this);this.stop();q.H.C.call(this)};function v(){var a=f("yt.scheduler.instance.instance_");if(!a||a.o)a=new q,n("yt.scheduler.instance.instance_",a);return a}var x=f("yt.scheduler.instance.timerIdMap_")||{};function y(a,b,c){if(0==c)return-r(v(),a,b);var d=window.setTimeout(function(){var c=r(v(),a,b);x[d]=c},c);return d}function z(a){var b=v();if(0>a)delete b.g[-a];else{var c=x[a];c?(delete b.g[c],delete x[a]):window.clearTimeout(a)}};function A(){}A.getInstance=function(){return A.d?A.d:A.d=new A};A.prototype.addTask=function(a){return y(a,2,0)};A.prototype.cancelTask=function(a){z(a)};n("yt.scheduler.instance.dispose",function(){var a=f("yt.scheduler.instance.instance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),n("yt.scheduler.instance.instance_",null))});n("yt.scheduler.instance.addJob",y);n("yt.scheduler.instance.addImmediateJob",function(a){var b=v(),c=m();u(a);a=m()-c;b.k-=a});n("yt.scheduler.instance.cancelJob",z);n("yt.scheduler.instance.cancelAllJobs",function(){t(v())});n("yt.scheduler.instance.start",function(){v().start()});n("yt.scheduler.instance.pause",function(){v().pause()});
n("yt.scheduler.SpfScheduler.instance",A.getInstance());var B=A.getInstance(),C=A.getInstance().addTask;B.addTask=C;var D=A.getInstance(),E=A.getInstance().cancelTask;D.cancelTask=E;})();


}
/*
     FILE ARCHIVED ON 00:02:21 Dec 01, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:49:06 Dec 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 199.841
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.062
  cdx.remote: 0.044
  esindex: 0.006
  LoadShardBlock: 136.156 (3)
  PetaboxLoader3.datanode: 147.103 (5)
  load_resource: 161.553 (2)
  PetaboxLoader3.resolve: 92.055 (2)
*/