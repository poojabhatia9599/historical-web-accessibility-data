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

var _yt_www={};(function(m){var window=this;m.aa=function(a){return function(){return m.ba[a].apply(this,arguments)}};m.l=function(a,b){for(var c=a.split("."),d=b||m.n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d};
m.ca=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};m.da=function(a){return"array"==(0,m.ca)(a)};m.p=function(a){return"string"==typeof a};m.ea=function(a){return"function"==(0,m.ca)(a)};var fa=function(a,b,c){return a.call.apply(a.bind,arguments)};
var ga=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};m.r=function(a,b,c){m.r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ga;return m.r.apply(null,arguments)};m.ha=function(a,b){for(var c in b)a[c]=b[c]};
m.s=function(a,b){var c=a.split("."),d=m.n;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};m.t=function(a,b){function c(){}c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c};m.ia=function(a,b){var c=(0,m.ja)(a,b),d;(d=0<=c)&&(0,m.ka)(a,c);return d};m.ka=function(a,b){m.ma.splice.call(a,b,1)};m.na=function(a,b,c){return 2>=arguments.length?m.ma.slice.call(a,b):m.ma.slice.call(a,b,c)};m.oa=function(){};
m.pa=function(){this.b=[];this.Za={}};m.qa=function(a){ra(m.sa,arguments)};m.v=function(a,b){return a in m.sa?m.sa[a]:b};m.ta=function(a){ra(m.ua,arguments)};m.w=function(a,b){(0,m.ea)(a)&&(a=(0,m.va)(a));return window.setTimeout(a,b)};m.wa=function(a){window.clearTimeout(a)};m.va=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw xa(b),b;}}:a};
var xa=function(a){if(window&&window.yterr){var b=(0,m.l)("yt.www.errors.log");b?b(a):(b=(0,m.v)("ERRORS")||[],b.push(a),(0,m.qa)("ERRORS",b))}};m.ya=function(a){ra(m.za,arguments)};m.Aa=function(a){return a in m.za};var ra=function(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}};m.x=function(a,b,c){var d=Ba();return d?d.subscribe(a,function(){var d=arguments;try{Ca&&Da[a]?b.apply(c||m.n,d):(0,m.w)(function(){b.apply(c||m.n,d)},0)}catch(g){xa(g)}},c):0};
m.Ea=function(a){var b=Ba();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[(0,window.parseInt)(a,10)]),(0,m.y)(a,function(a){b.unsubscribeByKey(a)}))};m.z=function(a,b){var c=Ba();return c?c.publish.apply(c,arguments):!1};var Fa=function(a,b){Da[a]=!0;var c=Ba();c&&c.publish.apply(c,arguments);Da[a]=!1};var Ba=function(){return(0,m.l)("yt.pubsub.instance_")};m.Ga=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.D=(0,m.va)(d||null);this.k=(0,m.va)(e||null);this.j=[]};
m.Ha=function(a){a.name in Ia&&Ja(a.name);Ia[a.name]={reqs:[],disable:(0,m.r)(a.disable,a)};(0,m.y)(a.deps,function(b){if(!(b in Ia))throw Error("Module "+b+" required by "+a.name);Ia[b].reqs.push(a.name)});a.enable()};var Ja=function(a){if(a in Ia){var b=Ia[a];(0,m.y)(b.reqs,function(a){Ja(a)});try{b.disable()}catch(c){}delete Ia[a]}};m.Ka=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)};m.La=function(a,b){var c=a.match(Ma);window.spf.scripts.load(a,b,c?c[1]:"")};
m.Na=function(a){a&&((0,m.p)(a)?(0,m.La)(a):(0,m.da)(a)?(0,m.y)(a,function(a){(0,m.Na)(a)}):(0,m.Ka)(a,function(a,c){(0,m.La)(c,function(){(0,m.Na)(a)})}))};m.Oa=function(a,b){if(a){var c=new window.Image,d=""+Pa++;Qa[d]=c;c.onload=c.onerror=function(){b&&Qa[d]&&b();delete Qa[d]};c.src=a;c=eval("null")}};m.Ra=function(a,b){Sa().tick[a]=b||(0,m.A)()};var Ta=function(a){return a.responseStart-a.navigationStart};
var Ua=function(){var a=Sa().tick,b=Sa().span,c=Sa().info,d=(0,m.l)("yt.timing.reportbuilder_");if(d){if(d=d.apply(null,[a,b,c,void 0]))Va(d),Wa()}else{var d={v:2,s:"youtube",action:(0,m.v)("TIMING_ACTION")},e=(0,m.v)("TIMING_INFO")||{},g;for(g in e)c[g]=e[g];g=c.srt;delete c.srt;if(!g&&0!==g)try{g=Ta((window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance).timing)}catch(h){c.pt&&(g=c.pt)}if(g||0===g)c.srt=g;a.aft||(a.aft=a.vr&&a.cl&&a.cl>a.vr?a.cl:a.vr?a.vr:a.ol);
a.aft&&a.plev&&(a.aft=Math.min(a.aft,a.plev));a.vr&&a.gv&&(b.vl=Math.round(a.vr-a.gv));for(var k in c)"_"!=k.charAt(0)&&(d[k]=c[k]);c={};k=[];g=a._start;for(var q in a)"_"!=q.charAt(0)&&(e=Math.max(Math.round(a[q]-g),0),c[q]=e,k.push(q+"."+e));d.rt=k.join(",");a={};q=[];for(var u in b)"_"!=u.charAt(0)&&(a[u]=b[u],q.push(u+"."+b[u]));d.it=q.join(",");Va(d);(b=(0,m.l)("ytdebug.logTiming"))&&b(d,c,a);Wa()}};
var Xa=function(){var a=(0,m.v)("TIMING_ACTION"),b=!!(0,m.v)("TIMING_WFF"),c=Sa().tick;a&&c._start&&(b&&c.vr?Ua():b||!c.ol&&!c.aft||Ua())};var Va=function(a){var b="https:"==window.location.protocol?"https://web.archive.org/web/20131001000206/https://gg.google.com/csi":"https://web.archive.org/web/20131001000206/http://csi.gstatic.com/csi",c="",d;for(d in a)c+="&"+d+"="+a[d];(0,m.Oa)(b+"?"+c.substring(1))};var Sa=function(){return(0,m.l)("ytcsi.data_")||Wa()};var Wa=function(){var a={tick:{},span:{},info:{}};(0,m.s)("ytcsi.data_",a);return a};
var Ya=function(){(0,m.Ra)("ol");(0,m.z)("init");var a=(0,m.v)("PAGE_NAME");a&&(0,m.z)("init-"+a);Xa()};var Za=function(a){(a=a||(0,m.v)("PAGE_NAME"))&&Fa("dispose-"+a);Fa("dispose")};var $a=function(){Ya()};var ab=function(){Za()};var bb=function(a,b,c){for(var d=window.document.getElementsByTagName("script"),e=!1,g=0,h=d.length;g<h;g++)if(0<d[g].src.indexOf("/debug-")){e=!0;break}e&&(d=Error(),d.message=a,d.fileName=b,d.lineNumber=c,xa(d))};
var cb=function(){Wa();var a=window.document.getElementById("progress");a||(a=window.document.createElement("div"),a.id="progress",a.innerHTML="<dt><dd>",window.document.body.appendChild(a));db(60,900);Fa("navigate")};
var eb=function(a,b){(0,m.Ra)("_start",b.timing.responseStart);var c=Ta(b.timing);Sa().info.srt=c;db(90,500);window.scroll(0,0);var c=(0,m.v)("PAGE_NAME"),d;for(d in m.sa)delete m.sa[d];(0,m.s)("ytplayer.config",null);(d=(0,m.l)("yt.www.watch.player.dispose"))&&d();(d=(0,m.l)("yt.player.cancelAll"))&&d();d=b.swfcfg||null;var e=(0,m.l)("yt.player.embed");d&&e&&(e("player-api",d),d=(0,m.gb)(d),d.loaded=!0);(0,m.s)("ytplayer.config",d);Za(c)};
var hb=function(a){db(101,25);if(a.timing){a=a.timing;var b={spfProcessCss:"cl",spfProcessHtml:"hr",spfProcessJs:"jl"},c;for(c in b)a[c]&&(0,m.Ra)(b[c],a[c])}Ya()};var ib=function(a,b){xa(b)};var jb=function(){kb()};var lb=function(){};
var kb=function(){if(window.document.getElementById("progress")){var a=function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)};(0,m.w)(function(){var b=window.document.getElementById("progress");b&&(b.className="done",b=b.style,b.transitionDuration=b.MozTransitionDuration=b.b=b.j=b.webkitTransitionDuration="",(0,m.w)(a,450))},500)}};
var db=function(a,b){var c=b||500,d=window.document.getElementById("progress");if(d){d.className="";var e=d.style;e.transitionDuration=e.MozTransitionDuration=e.b=e.j=e.webkitTransitionDuration=c+"ms";(0,m.w)(function(){e.width=a+"%";(0,m.w)(function(){d.className="waiting"},c)},0)}};var mb=function(){m.Ga.call(this,"www/base");this.b=0};var nb=function(a,b){var c;(c=(c=b.match(ob))?c[1]+"/"+c[2]:"")&&Ja(c)};m.ba=[];m.pb=m.pb||{};m.n=this;m.qb="closure_uid_"+(1E9*Math.random()>>>0);
m.A=Date.now||function(){return+new Date};Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return m.r.apply(null,c)}return(0,m.r)(this,a)};m.ma=Array.prototype;m.ja=m.ma.indexOf?function(a,b,c){return m.ma.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if((0,m.p)(a))return(0,m.p)(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};m.y=m.ma.forEach?function(a,b,c){m.ma.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=(0,m.p)(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)};
m.rb=m.ma.filter?function(a,b,c){return m.ma.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],g=0,h=(0,m.p)(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var q=h[k];b.call(c,q,k,a)&&(e[g++]=q)}return e};m.sb=m.ma.map?function(a,b,c){return m.ma.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),g=(0,m.p)(a)?a.split(""):a,h=0;h<d;h++)h in g&&(e[h]=b.call(c,g[h],h,a));return e};
m.tb=m.ma.reduce?function(a,b,c,d){d&&(b=(0,m.r)(b,d));return m.ma.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;(0,m.y)(a,function(c,h){e=b.call(d,e,c,h,a)});return e};m.ub=m.ma.some?function(a,b,c){return m.ma.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=(0,m.p)(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&b.call(c,e[g],g,a))return!0;return!1};
m.vb=m.ma.every?function(a,b,c){return m.ma.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=(0,m.p)(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&!b.call(c,e[g],g,a))return!1;return!0};m.oa.prototype.wa=!1;m.oa.prototype.Fa=(0,m.aa)(4);m.oa.prototype.dispose=function(){this.wa||(this.wa=!0,this.O())};m.oa.prototype.O=function(){if(this.$)for(;this.$.length;)this.$.shift()()};(0,m.t)(m.pa,m.oa);m.f=m.pa.prototype;m.f.Ni=1;m.f.Re=0;m.f.ia=function(a,b,c){var d=this.Za[a];d||(d=this.Za[a]=[]);var e=this.Ni;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.Ni=e+3;d.push(e);return e};m.f.Mb=(0,m.aa)(9);m.f.gc=function(a){if(0!=this.Re)return this.j||(this.j=[]),this.j.push(a),!1;var b=this.b[a];if(b){var c=this.Za[b];c&&(0,m.ia)(c,a);delete this.b[a];delete this.b[a+1];delete this.b[a+2]}return!!b};
m.f.ha=function(a,b){var c=this.Za[a];if(c){this.Re++;for(var d=(0,m.na)(arguments,1),e=0,g=c.length;e<g;e++){var h=c[e];this.b[h+1].apply(this.b[h+2],d)}this.Re--;if(this.j&&0==this.Re)for(;c=this.j.pop();)this.gc(c);return 0!=e}return!1};m.f.clear=function(a){if(a){var b=this.Za[a];b&&((0,m.y)(b,this.gc,this),delete this.Za[a])}else this.b.length=0,this.Za={}};m.f.na=(0,m.aa)(8);m.f.O=function(){m.pa.L.O.call(this);delete this.b;delete this.Za;delete this.j};m.sa=window.yt&&window.yt.config_||{};(0,m.s)("yt.config_",m.sa);m.ua=window.yt&&window.yt.tokens_||{};(0,m.s)("yt.tokens_",m.ua);m.za=window.yt&&window.yt.msgs_||{};(0,m.s)("yt.msgs_",m.za);m.wb="Microsoft Internet Explorer"==window.navigator.appName;var xb=(0,m.l)("yt.pubsub.instance_")||new m.pa;m.pa.prototype.subscribe=m.pa.prototype.ia;m.pa.prototype.unsubscribeByKey=m.pa.prototype.gc;m.pa.prototype.publish=m.pa.prototype.ha;m.pa.prototype.clear=m.pa.prototype.clear;(0,m.s)("yt.pubsub.instance_",xb);var Ca=!!(0,m.v)("SYNCHRONOUS_PUBSUB"),Da={};m.f=m.Ga.prototype;m.f.enable=function(){(0,m.y)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.ia("init-"+a,this.init,this),this.ia("dispose-"+a,this.dispose,this),(0,m.v)("PAGE_NAME")==a&&this.init())},this)};m.f.init=function(){this.D&&this.D()};m.f.dispose=function(){this.k&&this.k()};m.f.disable=function(){this.dispose();this.clear()};m.f.ia=function(a,b,c){a=(0,m.x)(a,b,c);this.j.push(a);return a};m.f.clear=function(){(0,m.Ea)(this.j);this.j=[]};var Ia=(0,m.l)("yt.modules.registry_")||{};(0,m.s)("yt.modules.registry_",Ia);var Ma=/jsbin\/(?:[a-zA-Z0-9_-]+\/)*(?:debug-)?([a-zA-Z0-9_-]+?)(?:-vfl|.js)/,ob=/^([a-z]+)_(\w+)_mod$/;var Qa={},Pa=0;window.yt=window.yt||{};(0,m.s)("yt.setConfig",m.qa);(0,m.s)("yt.getConfig",m.v);(0,m.s)("yt.hasMsg",m.Aa);(0,m.s)("yt.setMsg",m.ya);(0,m.s)("yt.setGoogMsg",function(a){ra(m.za,arguments)});(0,m.s)("yt.setAjaxToken",m.ta);(0,m.s)("reportTimingMaps",function(a,b){for(var c in a)(0,m.Ra)(c,a[c]);for(var d in b){c=d;var e=b[d];Sa().info[c]=e}Xa()});(0,m.t)(mb,m.Ga);
mb.prototype.enable=function(){window.onload=$a;window.onunload=ab;window.onerror=bb;var a=window.ytspf||{};a.enabled?(a.config=a.config||{},(0,m.ha)(a.config,{"navigate-requested-callback":cb,"navigate-received-callback":eb,"navigate-processed-callback":hb,"navigate-error-callback":ib,"script-loading-callback":nb}),window.spf.init(a.config),this.ia("init",jb),this.ia("dispose",lb)):window.spf.dispose();this.ia("init",this.init,this);this.ia("dispose",this.dispose,this)};
mb.prototype.init=function(){(window.ytspf||{}).enabled||window.spf.dispose();Ca=!!(0,m.v)("SYNCHRONOUS_PUBSUB");var a,b;!window.ytMastheadLoaded&&(0,m.v)("MASTHEAD_JS")&&(a=(0,m.v)("MASTHEAD_JS"),b=function(){(0,m.l)("ytbin.www.masthead.setup")();window.ytMastheadLoaded=!0});var c={};c[(0,m.v)("JS_COMMON_MODULE")]=(0,m.v)("JS_PAGE_MODULES");var d=(0,m.v)("JS_DELAY_LOAD");0<d?((0,m.wa)(this.b),this.b=(0,m.w)(function(){a&&(0,m.La)(a,b);(0,m.Na)(c)},d)):(a&&(0,m.La)(a,b),(0,m.Na)(c))};
mb.prototype.dispose=function(){(0,m.wa)(this.b)};mb.prototype.disable=function(){mb.L.disable.call(this);window.spf.dispose();window.onload=null;window.onunload=null;window.onerror=null};(0,m.Ha)(new mb);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:02:06 Oct 01, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:42:03 Dec 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 113.837
  exclusion.robots: 0.139
  exclusion.robots.policy: 0.122
  cdx.remote: 0.095
  esindex: 0.013
  LoadShardBlock: 40.008 (3)
  PetaboxLoader3.datanode: 50.307 (4)
  load_resource: 166.215
  PetaboxLoader3.resolve: 146.109
*/