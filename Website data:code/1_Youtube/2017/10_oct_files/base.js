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

var _yt_www={};(function(g){var window=this;var fa,ka,ja,ma,baa,pa,qa,daa,eaa,Ka,mb,naa,qb,paa,nc,qaa,raa,oc,saa,uaa,Ac,Cc,Dc,Hc,vaa,Kc,Rc,Qc,xaa,Uc,Vc,Wc,Xc,yaa,Yc,$c,dd,zaa,ed,ld,td,rd,od,Baa,wd,ud,vd,zd,Aaa,Jd,Caa,Ld,Nd,Od,Eaa,Td,Ud,Vd,Faa,ce,me,ne,qe,se,Haa,te,De,Me,Te,Kaa,Laa,Maa,Naa,ef,cf,bf,gf,vf,wf,Uaa,Hf,Wf,Vaa,eg,dg,Waa,Yaa,ug,vg,wg,xg,zg,yg,aba,bba,cba,Ag,Bg,Dg,Gg,Hg,Og,Ng,Rg,Sg,Tg,fba,Wg,$g,jba,Jg,Qg,Zg,dh,mba,nba,Yg,hh,bh,Ig,Pg,ah,ih,Eg,Ug,Fg,hba,kh,lh,nh,pba,mh,qh,jh,rh,qba,oh,ph,rba,yh,Gh,Jh,Lh,Oh,Th,sba,yba,xba,wba,Zh,vba,tba,
uba,zba,Aba,Cba,Dba,ni,ii,ki,pi,Eba,qi,si,Fba,Gba,ti,ui,zi,Gi,Hi,Ii,Mi,Ni,Oi,Mba,Nba,Di,Fi,yi,Lba,Ei,Si,Oba,Zi,Ri,Pba,Yi,Qba,Uba,Tba,Xba,aj,Wba,Vba,ej,$i,bj,cj,Rba,Sba,Zba,gj,Yba,dj,$ba,bca,dca,cca,aca,hj,ij,jj,ca,kj,Aa,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
g.ea=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
fa=function(){fa=function(){};
ha.Symbol||(ha.Symbol=aaa)};
ka=function(){fa();var a=ha.Symbol.iterator;a||(a=ha.Symbol.iterator=ha.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(this)}});
ka=function(){}};
ja=function(a){var b=0;return ma(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
ma=function(a){ka();a={next:a};a[ha.Symbol.iterator]=function(){return this};
return a};
g.na=function(a){ka();var b=a[window.Symbol.iterator];return b?b.call(a):ja(a)};
baa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
pa=function(a,b){if(b){for(var c=ha,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}};
qa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ra=function(a){return void 0!==a};
g.sa=function(a){return"string"==typeof a};
g.ta=function(a){return"number"==typeof a};
g.n=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ra(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.q=function(a,b){for(var c=a.split("."),d=b||g.m,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.ua=function(){};
g.va=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.wa=function(a){return"array"==g.va(a)};
g.xa=function(a){var b=g.va(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.ya=function(a){return"function"==g.va(a)};
g.za=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ba=function(a){return a[Aa]||(a[Aa]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.r=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.r=daa:g.r=eaa;return g.r.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.eV=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
g.Ca=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ca);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ea=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Fa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Ga=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Ha=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ia=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.La=function(a,b){for(var c=0,d=(0,g.Ja)(String(a)).split("."),e=(0,g.Ja)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",p=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];p=/(\d*)(\D*)(.*)/.exec(p)||["","","",""];if(0==l[0].length&&0==p[0].length)break;c=Ka(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==p[1].length?0:(0,window.parseInt)(p[1],10))||Ka(0==l[2].length,0==p[2].length)||Ka(l[2],p[2]);l=l[3];p=p[3]}while(0==c)}return c};
Ka=function(a,b){return a<b?-1:a>b?1:0};
g.Ma=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.Oa=function(a,b,c){b=g.Na(a,b,c);return 0>b?null:g.sa(a)?a.charAt(b):a[b]};
g.Na=function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Qa=function(a,b){return 0<=(0,g.Pa)(a,b)};
g.Ra=function(a){return 0==a.length};
g.Ta=function(a,b){var c=(0,g.Pa)(a,b),d;(d=0<=c)&&g.Sa(a,c);return d};
g.Sa=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Ua=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Va=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.xa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Xa=function(a){return-1!=g.Wa.indexOf(a)};
g.Ya=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Za=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.$a=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.ab=function(a,b){return null!==a&&b in a};
g.bb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.cb=function(a){for(var b in a)return!1;return!0};
g.db=function(a,b){b in a&&delete a[b]};
g.eb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.fb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.hb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<gb.length;f++)c=gb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.ib=function(){return g.Xa("Trident")||g.Xa("MSIE")};
g.kb=function(){return g.Xa("Safari")&&!(g.jb()||g.Xa("Coast")||g.Xa("Opera")||g.Xa("Edge")||g.Xa("Silk")||g.Xa("Android"))};
g.jb=function(){return(g.Xa("Chrome")||g.Xa("CriOS"))&&!g.Xa("Edge")};
g.lb=function(){return g.Xa("Android")&&!(g.jb()||g.Xa("Firefox")||g.Xa("Opera")||g.Xa("Silk"))};
mb=function(){return g.Xa("iPhone")&&!g.Xa("iPod")&&!g.Xa("iPad")};
g.nb=function(){return mb()||g.Xa("iPad")||g.Xa("iPod")};
g.ob=function(a){g.ob[" "](a);return a};
g.pb=function(a,b){try{return g.ob(a[b]),!0}catch(c){}return!1};
naa=function(a,b){var c=maa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
qb=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.sb=function(a){return naa(a,function(){return 0<=g.La(g.rb,a)})};
g.ub=function(a){return Number(g.tb)>=a};
g.wb=function(){this.C="";this.F=g.vb};
g.xb=function(a){var b=new g.wb;b.C=a;return b};
g.zb=function(){this.C="";this.F=yb};
g.Bb=function(a){if(a instanceof g.zb&&a.constructor===g.zb&&a.F===yb)return a.C;g.va(a);return"type_error:SafeUrl"};
g.Fb=function(a){if(a instanceof g.zb)return a;a=a.ne?a.wd():String(a);g.Cb.test(a)||(a="about:invalid#zClosurez");return g.Db(a)};
g.Db=function(a){var b=new g.zb;b.C=a;return b};
g.Hb=function(){this.C="";this.F=g.Gb};
g.Ib=function(a){var b=new g.Hb;b.C=a;return b};
g.Kb=function(){this.C="";this.D=g.Jb;this.F=null};
g.Lb=function(a,b){var c=new g.Kb;c.C=a;c.F=b;return c};
g.Mb=function(a,b){var c=b instanceof g.zb?b:g.Fb(b);a.href=g.Bb(c)};
g.Nb=function(a,b){var c=b instanceof g.zb?b:g.Fb(b);a.href=g.Bb(c)};
g.Ob=function(a,b){return g.Lb(b,null)};
g.Pb=function(a,b){this.x=g.ra(a)?a:0;this.y=g.ra(b)?b:0};
g.Qb=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Rb=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.sa(a)?window.document.getElementById(a):a};
g.Sb=function(a){var b=window.document;return g.sa(a)?b.getElementById(a):a};
g.Ub=function(a,b){g.Ya(b,function(b,d){b&&b.ne&&(b=b.wd());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Tb.hasOwnProperty(d)?a.setAttribute(Tb[d],b):g.Ea(d,"aria-")||g.Ea(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.Wb=function(a){return g.Vb(a||window)};
g.Vb=function(a){a=a.document;a=g.Xb(a)?a.documentElement:a.body;return new g.Rb(a.clientWidth,a.clientHeight)};
g.Zb=function(a,b,c){return g.Yb(window.document,arguments)};
g.Yb=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ia(d.name),'"');if(d.type){c.push(' type="',g.Ia(d.type),'"');var e={};g.hb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.sa(d)?c.className=d:g.wa(d)?c.className=d.join(" "):g.Ub(c,d));2<b.length&&g.$b(a,c,b,2);return c};
g.$b=function(a,b,c,d){function e(c){c&&b.appendChild(g.sa(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.xa(f)||g.za(f)&&0<f.nodeType?e(f):(0,g.y)(paa(f)?g.Ua(f):f,e)}};
g.ac=function(a){return window.document.createElement(String(a))};
g.Xb=function(a){return"CSS1Compat"==a.compatMode};
g.bc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.cc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.dc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.za(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.ya(a))return"function"==typeof a.item}return!1};
g.ec=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.fc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.gc=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return a.left=c,a.top=e,a.width=d-c,a.height=f-e,!0}return!1};
g.hc=function(a){return new g.Rb(a.width,a.height)};
g.ic=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.jc=function(a,b){a.style.height=g.ic(b,!0)};
g.kc=function(a,b){a.style.width=g.ic(b,!0)};
g.lc=function(a){return function(){return a}};
g.mc=function(a){return!!a.google_async_iframe_id};
nc=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
qaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=t=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],p=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var t=l^d&(f^l);var w=1518500249}else t=d^f^l,w=1859775393;else 60>c?(t=d&f|l&(d|f),w=2400959708):(t=d^f^l,w=3395469782);t=((a<<5|a>>>27)&4294967295)+t+p+w+b[c]&4294967295;p=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=t}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+p&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==t)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[t++]=a[d++],w++,64==t)for(t=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>t?c(l,56-t):c(l,64-(t-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var p=24;0<=p;p-=8)a[d++]=e[k]>>p&255;return a}
for(var e=[],f=[],k=[],l=[128],p=1;64>p;++p)l[p]=0;var t,w;a();return{reset:a,update:c,digest:d,Qv:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
raa=function(a,b,c){var d=[],e=[];if(1==(g.wa(c)?2:1))return e=[b,a],(0,g.y)(d,function(a){e.push(a)}),oc(e.join(" "));
var f=[],k=[];(0,g.y)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ra(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.y)(d,function(a){e.push(a)});
a=oc(e.join(" "));a=[c,a];g.Ra(k)||a.push(k.join(""));return a.join("_")};
oc=function(a){var b=qaa();b.update(a);return b.Qv().toLowerCase()};
g.pc=function(a){this.C=a||{cookie:""}};
g.qc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Ja)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
saa=function(){var a=[],b=nc(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.pc(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.pc(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.m.location.href);return d&&b&&c?[c,raa(nc(d),b,a||null)].join(" "):null}return null};
g.rc=function(){this.Cc=this.Cc;this.Lb=this.Lb};
g.uc=function(a,b){g.sc(a,g.u(g.tc,b))};
g.sc=function(a,b){a.Cc?g.ra(void 0)?b.call(void 0):b():(a.Lb||(a.Lb=[]),a.Lb.push(g.ra(void 0)?(0,g.r)(b,void 0):b))};
g.tc=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.vc=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1;this.Gs=!0};
g.wc=function(a){var b=g.q("window.location.href");if(g.sa(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.xc=function(a,b){g.vc.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.L=!1;this.pointerId=0;this.pointerType="";this.wc=null;a&&this.init(a,b)};
g.zc=function(a){return!(!a||!a[yc])};
uaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.ah=e;this.key=++taa;this.tg=this.Rh=!1};
Ac=function(a){a.tg=!0;a.listener=null;a.C=null;a.src=null;a.ah=null};
g.Bc=function(a){this.src=a;this.listeners={};this.C=0};
Cc=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Ta(a.listeners[c],b);d&&(Ac(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Dc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.tg&&f.listener==b&&f.capture==!!c&&f.ah==d)return e}return-1};
g.Fc=function(a,b,c,d,e){if(d&&d.once)return g.Ec(a,b,c,d,e);if(g.wa(b)){for(var f=0;f<b.length;f++)g.Fc(a,b[f],c,d,e);return null}c=g.Gc(c);return g.zc(a)?a.O(b,c,g.za(d)?!!d.capture:!!d,e):Hc(a,b,c,!1,d,e)};
Hc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.za(e)?!!e.capture:!!e,l=g.Ic(a);l||(a[Jc]=l=new g.Bc(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=vaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)waa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Kc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Lc++;return c};
vaa=function(){var a=xaa,b=Mc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Ec=function(a,b,c,d,e){if(g.wa(b)){for(var f=0;f<b.length;f++)g.Ec(a,b[f],c,d,e);return null}c=g.Gc(c);return g.zc(a)?a.Ie(b,c,g.za(d)?!!d.capture:!!d,e):Hc(a,b,c,!0,d,e)};
g.Nc=function(a,b,c,d,e){if(g.wa(b))for(var f=0;f<b.length;f++)g.Nc(a,b[f],c,d,e);else d=g.za(d)?!!d.capture:!!d,c=g.Gc(c),g.zc(a)?a.Wa(b,c,d,e):a&&(a=g.Ic(a))&&(b=a.gf(b,c,d,e))&&g.Oc(b)};
g.Oc=function(a){if(g.ta(a)||!a||a.tg)return!1;var b=a.src;if(g.zc(b))return Cc(b.vd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(Kc(c),d);Lc--;(c=g.Ic(b))?(Cc(c,a),0==c.C&&(c.src=null,b[Jc]=null)):Ac(a);return!0};
Kc=function(a){return a in Pc?Pc[a]:Pc[a]="on"+a};
Rc=function(a,b,c,d){var e=!0;if(a=g.Ic(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.tg&&(f=Qc(f,d),e=e&&!1!==f)}return e};
Qc=function(a,b){var c=a.listener,d=a.ah||a.src;a.Rh&&g.Oc(a);return c.call(d,b)};
xaa=function(a,b){if(a.tg)return!0;if(!Mc){var c=b||g.q("window.event"),d=new g.xc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(p){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Rc(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Rc(c[k],f,!1,d),e=e&&l}return e}return Qc(a,new g.xc(b,
this))};
g.Ic=function(a){a=a[Jc];return a instanceof g.Bc?a:null};
g.Gc=function(a){if(g.ya(a))return a;a[Sc]||(a[Sc]=function(b){return a.handleEvent(b)});
return a[Sc]};
g.Tc=function(){g.rc.call(this);this.vd=new g.Bc(this);this.Yu=this;this.Xl=null};
Uc=function(a,b,c,d){b=a.vd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.tg&&k.capture==c){var l=k.listener,p=k.ah||k.src;k.Rh&&Cc(a.vd,k);e=!1!==l.call(p,d)&&e}}return e&&0!=d.Gs};
Vc=function(a,b,c){this.H=c;this.D=a;this.G=b;this.F=0;this.C=null};
Wc=function(a,b){a.G(b);a.F<a.H&&(a.F++,b.next=a.C,a.C=b)};
Xc=function(a){g.m.setTimeout(function(){throw a;},0)};
yaa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Xa("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.r)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.ib()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ra(c.next)){c=c.next;var a=c.Hn;c.Hn=null;a()}};
return function(a){d.next={Hn:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
Yc=function(){this.F=this.C=null};
$c=function(){this.next=this.scope=this.kc=null};
dd=function(a,b){ad||zaa();bd||(ad(),bd=!0);cd.add(a,b)};
zaa=function(){if(-1!=String(g.m.Promise).indexOf("[native code]")){var a=g.m.Promise.resolve(void 0);ad=function(){a.then(ed)}}else ad=function(){var a=ed;
!g.ya(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.Xa("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(fd||(fd=yaa()),fd(a)):g.m.setImmediate(a)}};
ed=function(){for(var a;a=cd.remove();){try{a.kc.call(a.scope)}catch(b){Xc(b)}Wc(gd,a)}bd=!1};
g.hd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.id=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.kd=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.ua)try{var c=this;a.call(b,function(a){g.jd(c,2,a)},function(a){g.jd(c,3,a)})}catch(d){g.jd(this,3,d)}};
ld=function(){this.next=this.context=this.F=this.G=this.C=null;this.D=!1};
g.nd=function(a,b,c){var d=md.get();d.G=a;d.F=b;d.context=c;return d};
g.pd=function(a,b,c){od(a,b,c,null)||dd(g.u(b,a))};
g.qd=function(a){return new g.kd(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],g.pd(p,g.u(f,l),k);
else b(e)})};
g.sd=function(a,b){return rd(a,null,b,void 0)};
td=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?td(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):ud(c),vd(c,e,3,b)))}a.D=null}else g.jd(a,3,b)};
g.xd=function(a,b){a.F||2!=a.C&&3!=a.C||wd(a);a.G?a.G.next=b:a.F=b;a.G=b};
rd=function(a,b,c,d){var e=g.nd(null,null,null);e.C=new g.kd(function(a,k){e.G=b?function(c){try{var e=b.call(d,c);a(e)}catch(t){k(t)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.ra(e)&&b instanceof g.yd?k(b):a(e)}catch(t){k(t)}}:k});
e.C.D=a;g.xd(a,e);return e.C};
g.jd=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,od(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,wd(a),3!=b||c instanceof g.yd||Aaa(a,c)))};
od=function(a,b,c,d){if(a instanceof g.kd)return g.xd(a,g.nd(b||g.ua,c||null,d)),!0;if(g.id(a))return a.then(b,c,d),!0;if(g.za(a))try{var e=a.then;if(g.ya(e))return Baa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Baa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(p){f(p)}};
wd=function(a){a.L||(a.L=!0,dd(a.J,a))};
ud=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
vd=function(a,b,c,d){if(3==c&&b.F&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,zd(b,c,d);else try{b.D?b.G.call(b.context):zd(b,c,d)}catch(e){Ad.call(null,e)}Wc(md,b)};
zd=function(a,b,c){2==b?a.G.call(a.context,c):a.F&&a.F.call(a.context,c)};
Aaa=function(a,b){a.H=!0;dd(function(){a.H&&Ad.call(null,b)})};
g.yd=function(a){g.Ca.call(this,a)};
g.Bd=function(a,b,c){if(g.ya(a))c&&(a=(0,g.r)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.r)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.Cd=function(a){g.m.clearTimeout(a)};
g.Dd=function(a,b,c){g.rc.call(this);this.C=a;this.D=b||0;this.F=c;this.uc=(0,g.r)(this.Jk,this)};
g.Gd=function(a){if(a.classList)return a.classList;a=a.className;return g.sa(a)&&a.match(/\S+/g)||[]};
g.z=function(a,b){return a.classList?a.classList.contains(b):g.Qa(g.Gd(a),b)};
g.Hd=function(){};
Jd=function(a){if(a instanceof g.Hd)return a;if("function"==typeof a.cd)return a.cd(!1);if(g.xa(a)){var b=0,c=new g.Hd;c.next=function(){for(;;){if(b>=a.length)throw g.Id;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Kd=function(a,b,c){if(g.xa(a))try{(0,g.y)(a,b,c)}catch(d){if(d!==g.Id)throw d;}else{a=Jd(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Id)throw d;}}};
Caa=function(a){if(g.xa(a))return g.Ua(a);a=Jd(a);var b=[];g.Kd(a,function(a){b.push(a)});
return b};
g.Md=function(a){return(new Ld(void 0)).Ej(a)};
Ld=function(a){this.C=a};
Nd=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.wa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Nd(a,a.C?a.C.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Od(d,c),c.push(":"),Nd(a,a.C?a.C.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Od(b,
c);break;case "number":c.push((0,window.isFinite)(b)&&!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Od=function(a,b){b.push('"',a.replace(Daa,function(a){var b=Pd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Pd[a]=b);return b}),'"')};
g.Qd=function(a){g.rc.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.Rd=function(a,b,c,d){if(b=a.F[b]){var e=a.C;if(b=g.Oa(b,function(a){return e[a+1]==c&&e[a+2]==d}))return a.qd(b)}return!1};
Eaa=function(a,b,c){dd(function(){a.apply(b,c)})};
g.Sd=function(a){this.C=a};
Td=function(a){this.C=a};
Ud=function(a){this.data=a};
Vd=function(a){return!g.ra(a)||a instanceof Ud?a:new Ud(a)};
g.Wd=function(a){this.C=a};
g.Yd=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Xd)()||!!b&&b>(0,g.Xd)()};
g.Zd=function(a){this.C=a};
Faa=function(){};
g.$d=function(){};
g.ae=function(a){this.C=a};
g.be=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
ce=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.C=a};
g.de=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.ee=function(a){return a.match(Gaa)};
g.fe=function(a){return a?(0,window.decodeURI)(a):a};
g.ge=function(a){return g.fe(g.ee(a)[3]||null)};
g.he=function(a){a=g.ee(a);return g.de(null,null,null,null,a[5],a[6],a[7])};
g.ie=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.je=function(a,b,c){if(g.wa(b))for(var d=0;d<b.length;d++)g.je(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ga(b)))};
g.ke=function(a){var b=[],c;for(c in a)g.je(c,a[c],b);return b.join("&")};
g.le=function(a,b){var c=g.ke(b);return g.ie(a,c)};
me=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
ne=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.pe=function(a){ne(g.oe,arguments)};
qe=function(a,b){var c=g.A(a,void 0);c?c.push(b):g.pe(a,[b])};
g.A=function(a,b){return a in g.oe?g.oe[a]:b};
se=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.re(b)}}:a};
g.re=function(a,b,c,d,e){var f=g.q("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.A("ERRORS",[]),f.push([a,b,c,d,e]),g.pe("ERRORS",f))};
Haa=function(a,b,c,d,e){var f=!1,k=g.oe.EXPERIMENT_FLAGS;if((k=k?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,p=k.length;l<p;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.sa(a)?f=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),e=Error(),e.message=f,e.fileName=b,e.lineNumber=c,(0,window.isNaN)(d)?delete e.columnNumber:
e.columnNumber=d),g.re(e))};
g.ue=function(a){return!!te(a)};
g.ve=function(a){return Number(te(a)||0)};
te=function(a){return g.A("EXPERIMENT_FLAGS",{})[a]};
g.C=function(a,b){return a?a.dataset?a.dataset[g.we(b)]:a.getAttribute("data-"+b):null};
g.we=function(a){return ye[a]||(ye[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.ze=function(a,b){g.ya(a)&&(a=se(a));return window.setTimeout(a,b)};
g.Ae=function(a,b){g.ya(a)&&(a=se(a));return window.setInterval(a,b)};
g.Be=function(a){window.clearTimeout(a)};
g.Ce=function(a){window.clearInterval(a)};
g.D=function(a,b,c){var d=De();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Ee[e]&&b.apply(c||window,d)};
try{Fe[a]?k():g.ze(k,0)}catch(l){g.re(l)}},c);
Ee[e]=!0;Ge[a]||(Ge[a]=[]);Ge[a].push(e);return e}return 0};
g.He=function(a){var b=De();b&&(g.ta(a)?a=[a]:g.sa(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.y)(a,function(a){b.unsubscribeByKey(a);delete Ee[a]}))};
g.E=function(a,b){var c=De();return c?c.publish.apply(c,arguments):!1};
g.Ie=function(a,b){Fe[a]=!0;var c=De();c=c?c.publish.apply(c,arguments):!1;Fe[a]=!1;return c};
De=function(){return g.q("ytPubsubPubsubInstance")};
g.Ke=function(a,b){var c=g.Je(a);window.spf.script.load(a,c,b)};
g.Je=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Iaa,""),b=b.replace(Jaa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
Me=function(){return null!=g.Le};
g.Ne=function(){return g.Le?g.Le.invoke():null};
g.Oe=function(){return!!g.q("yt.scheduler.instance")};
g.Pe=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.ze(a,c||0)};
g.Qe=function(a,b){return g.Pe(a,1,b)};
g.Re=function(a){if(!(0,window.isNaN)(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.Be(a)}};
g.Se=function(a){for(var b=0,c=a.length;b<c;b++)g.Re(a[b])};
Te=function(){return(0,window.parseInt)(g.A("DCLKSTAT",0),10)};
Kaa=function(){if(!Ue)return null;var a=Ue();return"open"in a?a:null};
g.We=function(a){switch(g.Ve(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Ve=function(a){return a&&"status"in a?a.status:-1};
g.Xe=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Ha(e[0]||"");e=g.Ha(e[1]||"");f in b?g.wa(b[f])?g.Va(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.Ze=function(a,b){return g.Ye(a,b||{},!0)};
g.Ye=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Xe(e[1]||"");for(var f in b)if(c||!g.ab(e,f))e[f]=b[f];return g.le(a,e)+d};
Laa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.ee(a)[1]||null,e=g.ge(a);d&&e?(d=c,c=g.ee(a),d=g.ee(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.ge(c)==e&&(Number(g.ee(c)[4]||null)||null)==(Number(g.ee(a)[4]||null)||null):!0;for(var f in $e){if((e=d=g.A($e[f]))&&!(e=c)){e=f;var k=g.A("CORS_HEADER_WHITELIST")||{},l=g.ge(a);e=l?(k=k[l])?g.Qa(k,e):!1:!0}e&&(b[f]=d)}return b};
Maa=function(a,b){var c=g.A("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.gw&&(!g.ge(a)||b.withCredentials||g.ge(a)==window.document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.ka&&b.ka[c])};
g.F=function(a,b){var c=b.format||"JSON";b.YA&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var d=g.A("XSRF_FIELD_NAME",void 0),e=g.A("XSRF_TOKEN",void 0),f=b.ua;f&&(f[d]&&delete f[d],a=g.Ze(a,f));f=b.postBody||"";var k=b.ka;Maa(a,b)&&(k||(k={}),k[d]=e);k&&g.sa(f)&&(d=g.Xe(f),g.hb(d,k),f=b.Wr&&"JSON"==b.Wr?JSON.stringify(d):g.ke(d));d=f||k&&!g.cb(k);!af&&d&&"POST"!=b.method&&(af=!0,g.re(Error("AJAX request with postData should use POST")));
var l=!1,p,t=bf(a,function(a){if(!l){l=!0;p&&g.Be(p);var d=g.We(a),e=null;if(d||400<=a.status&&500>a.status)e=Naa(c,a,b.qb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||g.m;d?b.Z&&b.Z.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.bb&&b.bb.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.lc&&0<b.timeout&&(p=g.ze(function(){l||(l=!0,t.abort(),g.Be(p),b.lc.call(b.context||g.m,t))},b.timeout));
return t};
Naa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?cf(b):null)d={},(0,g.y)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.df(a)})}c&&ef(d);
return d};
ef=function(a){if(g.za(a))for(var b in a)"html_content"==b||g.Fa(b,"_html")?a[b]=g.Ob(g.xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):ef(a[b])};
cf=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.df=function(a){var b="";(0,g.y)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.ff=function(a,b){b.method="POST";b.ka||(b.ka={});return g.F(a,b)};
bf=function(a,b,c,d,e,f,k){function l(){4==(p&&"readyState"in p?p.readyState:0)&&b&&se(b)(p)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var p=Kaa();if(!p)return null;"onloadend"in p?p.addEventListener("loadend",l,!1):p.onreadystatechange=l;p.open(c,a,!0);f&&(p.responseType=f);k&&(p.withCredentials=!0);c="POST"==c;if(e=Laa(a,e))for(var t in e)p.setRequestHeader(t,e[t]),"content-type"==t.toLowerCase()&&(c=!1);c&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded");p.send(d);return p};
gf=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.hf=function(a){var b=new gf;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.jf=function(a){var b=new gf;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.mf=function(a){var b=a.__yt_uid_key;b||(b=lf(),a.__yt_uid_key=b);return b};
g.nf=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Oaa+"VisibilityState";if(b in a)return a[b]};
g.of=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Paa||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.C=a.pageX;this.F=a.pageY}};
g.qf=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.bb(pf,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.G=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.qf(a,b,c,d);if(e)return e;e=++rf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.of(d);if(!g.ec(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.of(b);
b.currentTarget=a;return c.call(a,b)};
k=se(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);pf[e]=[a,b,c,k,d];return e};
g.sf=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.y)(a,function(a){if(a in pf){var b=pf[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete pf[a]}}))};
g.tf=function(a,b,c){var d;return d=g.G(a,b,function(){g.sf(d);c.apply(a,arguments)},!1)};
g.uf=function(a){for(var b in pf)pf[b][0]==a&&g.sf(b)};
vf=function(){g.rc.call(this);this.C=[]};
wf=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.fb(Qaa);this.assets=a.assets||{};this.attrs=a.attrs||g.fb(Raa);this.params=a.params||g.fb(Saa);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.xf=function(a){a instanceof wf||(a=new wf(a));return a};
g.Af=function(a,b,c,d,e,f){f=f||{};f.name=c||g.A("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.A("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=yf||(c=a.stacktrace,d=a.columnNumber,a=g.wc(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),zf[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={ua:{a:"logerror",t:"jserror",type:a.name,
msg:a.message.substr(0,1E3),line:e,level:void 0===b?"ERROR":b,"client.name":f.name},ka:{url:g.A("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ka.stack=c);for(var k in f)b.ka["client."+k]=f[k];if(k=g.A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ka[l]=k[l];g.F("/error_204",b);zf[a.message]=!0;yf++}};
g.Bf=function(a,b,c,d,e){this.D=a;this.H=b;this.G=c;this.F=d;this.C=e};
g.Cf=function(a){return new g.Bf(a)};
g.Ef=function(a){var b={};void 0!==a.D?b.trackingParams=a.D:(b.veType=a.H,null!=a.G&&(b.veCounter=a.G),null!=a.F&&(b.elementIndex=a.F));void 0!==a.C&&(b.dataElement=g.Ef(a.C));return b};
g.Kf=function(a,b){g.Ff[a.endpoint]=b;if(a.Vh){var c=a.Vh;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Gf[a.Vh.token]=d;c=Hf(a.endpoint,a.Vh.token)}else c=Hf(a.endpoint);c.push(a.payload);c.length>=(g.ve("web_logging_max_batch")||20)?g.If():g.Jf()};
g.If=function(){g.Be(g.Lf);if(!g.cb(g.Mf)){for(var a in g.Mf){var b=g.Nf[a];if(!b){var c=g.Ff[a];if(!c)continue;b=new c;g.Nf[a]=b}c=void 0;var d=a,e=b,f=Taa[d],k=Of[d]||{};Of[d]=k;b=Math.round(g.Pf());for(c in g.Mf[d]){var l=g.Qf(e);l[f]=Hf(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var p=Gf[c];if(p)a:{var t=l,w=c;if(p.videoId)var B="VIDEO";else if(p.playlistId)B="PLAYLIST";else break a;t.credentialTransferTokenTargetId=p;t.context=
t.context||{};t.context.user=t.context.user||{};t.context.user.credentialTransferTokens=[{token:w,scope:B}]}delete Gf[c];g.Rf(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.Mf[a]}g.cb(g.Mf)||g.Jf()}};
Uaa=function(){var a=[],b;for(b in g.Mf){var c=Of[b]||{};Of[b]=c;for(var d in g.Mf[b]){var e=Hf(b,d);c.storedEventsCount=c.storedEventsCount||0;c.storedEventsCount+=e.length}}d=Math.round(g.Pf());for(b in Of)c=Of[b],b in Sf?c.eventType=Sf[b]:c.eventType="UNKNOWN_TYPE",e=Uf[b],c.metricIntervalMs=e?d-e:d-g.Vf,a.push(c),Uf[b]=d,delete Of[b];return a};
g.Jf=function(){g.Be(g.Lf);g.Lf=g.ze(g.If,g.A("LOGGING_BATCH_TIMEOUT",1E4))};
Hf=function(a,b){b||(b="");g.Mf[a]=g.Mf[a]||{};g.Mf[a][b]=g.Mf[a][b]||[];return g.Mf[a][b]};
g.Xf=function(){if(null==g.q("_lact",window)){var a=(0,window.parseInt)(g.A("LACT"),10);a=(0,window.isFinite)(a)?(0,g.Xd)()-Math.max(a,0):-1;g.n("_lact",a,window);g.n("_fact",a,window);-1==a&&Wf();g.G(window.document,"keydown",Wf);g.G(window.document,"keyup",Wf);g.G(window.document,"mousedown",Wf);g.G(window.document,"mouseup",Wf);g.D("page-mouse",Wf);g.D("page-scroll",Wf);g.D("page-resize",Wf)}};
Wf=function(){null==g.q("_lact",window)&&g.Xf();var a=(0,g.Xd)();g.n("_lact",a,window);-1==g.q("_fact",window)&&g.n("_fact",a,window);(a=g.q("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Yf=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.Xd)()-a,0)};
g.$f=function(a,b,c,d){var e=g.Zf,f={};f.eventTimeMs=Math.round(c||g.Pf());f[a]=b;f.context={lastActivityMs:String(c?-1:g.Yf())};g.Kf({endpoint:"log_event",payload:f,Vh:d},e)};
Vaa=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.Zf=function(a){this.C=a||{apiaryHost:g.A("APIARY_HOST",void 0),cV:g.A("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!g.A("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:g.A("GAPI_HINT_PARAMS",void 0),innertubeApiKey:g.A("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.A("INNERTUBE_API_VERSION",void 0),aB:g.A("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.A("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),cB:g.A("INNERTUBE_CONTEXT_HL",void 0),bB:g.A("INNERTUBE_CONTEXT_GL",void 0),
xhrApiaryHost:g.A("XHR_APIARY_HOST",void 0)||"",dB:g.A("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
g.Qf=function(a){a=a.C;a={client:{hl:a.cB,gl:a.bB,clientName:a.aB,clientVersion:a.innertubeContextClientVersion}};g.A("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.A("DELEGATED_SESSION_ID")});return{context:a}};
g.Rf=function(a,b,c,d){!g.A("VISITOR_DATA")&&.01>Math.random()&&g.re(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.A("VISITOR_DATA","")},ka:c,Wr:"JSON",lc:d.lc,Z:function(a,b){d.Z&&d.Z(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=saa();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.A("SESSION_INDEX",0));var k="",l=a.C.dB;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);g.ff(""+k+Vaa(a.C.innertubeApiVersion,b,c)+"?alt=json&key="+a.C.innertubeApiKey,e)};
g.ag=function(a,b,c){g.$f(a,b,c,void 0)};
g.bg=function(){g.ue("log_web_meta")&&Uaa().forEach(function(a){g.ag("delayedEventMetricCaptured",a)})};
g.cg=function(a,b,c){(0,g.y)(b,function(b){g.$f("visualElementHidden",{csn:a,ve:g.Ef(b),eventType:c?16:8})})};
eg=function(a,b){var c=Object.keys(a).join("");dg("info_"+c+"_"+b)||(a.clientActionNonce=b,g.ag("latencyActionInfo",a))};
dg=function(a){fg[a]=fg[a]||{count:0};var b=fg[a];b.count++;b.time=g.Pf();gg||(gg=g.Pe(Waa,0,5E3));return 10<b.count?(11==b.count&&g.Af(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
Waa=function(){var a=g.Pf(),b;for(b in fg)6E4<a-fg[b].time&&delete fg[b];gg=0};
g.jg=function(a){if(!g.hg&&!g.ig||!window.JSON)return null;try{var b=g.hg.get(a)}catch(c){}if(!g.sa(b))try{b=g.ig.get(a)}catch(c){}if(!g.sa(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.kg=function(){var a=g.A("ROOT_VE_TYPE",void 0);return a?new g.Bf(void 0,a,void 0):null};
g.lg=function(){return g.jg("yt-interaction-logging-parent")};
g.mg=function(){var a=g.A("client-screen-nonce")||g.A("EVENT_ID");return a?a:null};
g.ng=function(a,b){a=a||"";var c=a.match(Xaa);window.spf.style.load(a,c?c[1]:"",b)};
g.og=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Wa,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Zb("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.dc(a).body.appendChild(a)):e?bf(a,b,"POST",e,d):g.A("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?bf(a,b,"GET","",d):Yaa(a,b))};
Yaa=function(a,b){var c=new window.Image,d=""+Zaa++;pg[d]=c;c.onload=c.onerror=function(){b&&pg[d]&&b();delete pg[d]};
c.src=a};
g.qg=function(a,b){this.version=a;this.args=b};
g.rg=function(a,b){this.topic=a;this.Wh=b};
g.tg=function(a,b){var c=g.sg();c&&c.publish.call(c,a.toString(),a,b)};
g.sg=function(){return g.q("ytPubsub2Pubsub2Instance")};
ug=function(){var a=g.A("TIMING_TICK_EXPIRATION");a||(a={},g.pe("TIMING_TICK_EXPIRATION",a));return a};
vg=function(){var a=ug(),b;for(b in a)g.Re(a[b]);g.pe("TIMING_TICK_EXPIRATION",{})};
wg=function(a,b){g.qg.call(this,1,arguments)};
xg=function(a,b){g.qg.call(this,1,arguments)};
zg=function(a){this.C=a=void 0===a?window:a;this.W=this.H=0;if(this.C.performance&&this.C.performance.timing&&this.C.performance.getEntriesByType){a=g.Wb(this.C);this.J=new g.fc(0,0,a.width,a.height);a=[];for(var b=this.C.document.getElementsByTagName("*"),c=0,d=b.length;c<d;c++){var e=b[c];if("IMG"==e.tagName||"IFRAME"==e.tagName){var f=yg(this,e,e.src);if(f){if("IFRAME"==e.tagName){try{var k=(new zg(e.contentWindow)).H}catch(p){k=0}var l=k;0<l&&(f.timing=l)}a.push(f)}}(f=this.C.getComputedStyle(e)["background-image"])&&
(f=$aa.exec(f))&&1<f.length&&(e=yg(this,e,f[1]))&&a.push(e)}this.F=a;this.G=this.C.performance.getEntriesByType("resource");this.L=this.C.performance.getEntriesByType("mark");k={};b=0;for(a=this.G.length;b<a;b++)c=this.G[b],k[c.name]=c.responseEnd;b=0;for(a=this.L.length;b<a;b++)c=this.L[b],"mark_iframe_loaded: "==c.name.slice(0,20)&&(k[c.name.slice(20)]=c.startTime);b=0;for(a=this.F.length;b<a;b++)c=this.F[b],c.timing||(c.timing=k[c.url]||0);this.R=aba(this);this.D=bba(this);e=k=0;if(this.D.length)for(b=
a=0,c=this.D.length;b<c;b++)d=this.D[b],e=d.timing-e,0<e&&1>a&&(k+=(1-a)*e),e=d.timing,a=d.progress;this.H=Math.round(k||this.R);this.W=e;cba(this)}};
yg=function(a,b,c){return c&&b.getBoundingClientRect&&(b=b.getBoundingClientRect(),b=new g.fc(b.left,b.top,b.width,b.height),g.gc(b,a.J))?new Ag(b,c):null};
aba=function(a){var b=a.C.performance.timing.navigationStart;if("msFirstPaint"in a.C.performance.timing)var c=a.C.performance.timing.C-b;else if("chrome"in a.C&&"loadTimes"in a.C.chrome){var d=a.C.chrome.loadTimes(),e=d.firstPaintTime;if(0<e){var f=d.startLoadTime;"requestTime"in d&&(f=d.requestTime);e>=f&&(c=1E3*(e-f))}}if(void 0===c||0>c||12E4<c){c=a.C.performance.timing.responseStart-b;var k={};b=a.C.document.getElementsByTagName("head")[0].children;d=0;for(e=b.length;d<e;d++)f=b[d],"SCRIPT"==
f.tagName&&f.src&&!f.async?k[f.src]=!0:"LINK"==f.tagName&&"stylesheet"==f.rel&&f.href&&(k[f.href]=!0);a.G.some(function(a){if(!k[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===c||a>c)c=a})}return Math.max(c,0)||0};
bba=function(a){for(var b={0:0},c=0,d=a.R,e=0,f=a.F.length;e<f;e++){var k=a.F[e],l=d;k.timing>d&&(l=k.timing);b[l]||(b[l]=0);k=g.hc(k.region).Vf();b[l]+=k;c+=k}f=g.hc(a.J).Vf();0<f&&(f=.1*Math.max(f-c,0),d in b||(b[d]=0),b[d]+=f,c+=f);d=[];if(c){for(var p in b)d.push(new Bg((0,window.parseFloat)(p),b[p]));d.sort(function(a,b){return a.timing-b.timing});
p=b=0;for(f=d.length;p<f;p++)a=d[p],b+=a.Vf,a.progress=b/c}return d};
cba=function(a){a.G.map(function(a){return a.name+": "+a.responseEnd}).join(", ");
a.L.map(function(a){return a.name+": "+a.startTime}).join(", ");
a.F.map(function(a){return a.toString()}).join("\n");
a.D.map(function(a){return a.toString()}).join("\n")};
Ag=function(a,b){this.region=a;this.url=b};
Bg=function(a,b){this.Vf=b;this.timing=a};
Dg=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Xd)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Cg)for(a=1,b=0;b<Cg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Cg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&
63));return a.join("")};
Gg=function(a){Eg(a);dba();Fg(!1,a);a||(g.A("TIMING_ACTION")&&g.pe("PREVIOUS_ACTION",g.A("TIMING_ACTION")),g.pe("TIMING_ACTION",""))};
g.Lg=function(a,b,c){b||"_"==a[0]||Hg(a,c);var d=Ig(c),e=b||g.Pf();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=ug();var f=e[a];f&&(g.Re(f),e[a]=0);Jg(a,b,c)||g.Kg(!1,c);return d[a]};
Hg=function(a,b){Mg.mark&&(g.Ea(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Mg.mark(a))};
Og=function(a,b){Ng("yt_sts",a,void 0);g.Lg("_start",b,void 0)};
Ng=function(a,b,c){Pg(c)[a]=b;Qg(a,b,c)};
Rg=function(a){var b=Pg(void 0);return a in b};
Sg=function(a){var b=Ig(a);if(b.aft)return b.aft;a=g.A((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
Tg=function(a){g.Lg("nreqs",a.requestStart,void 0);g.Lg("nress",a.responseStart,void 0);g.Lg("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.Lg("nrs",a.redirectStart,void 0),g.Lg("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.Lg("ndnss",a.domainLookupStart,void 0),g.Lg("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.Lg("ntcps",a.connectStart,void 0),g.Lg("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.Lg("nstcps",a.secureConnectionStart,void 0),g.Lg("ntcpe",a.connectEnd,void 0))};
g.Kg=function(a,b){if(!Ug(b)){var c=g.A((b||"")+"TIMING_ACTION",void 0),d=Ig(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Sg(b)))if(g.ue("tighter_critical_section")&&!Vg&&(g.tg(eba,new wg(Math.round(c-d._start),b)),Vg=!0),a||b)Wg(b);else{c=!0;var e=g.A("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Wg(b)}}};
fba=function(){switch(g.nf()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Wg=function(a){vg();if(!g.ue("csi_on_gel")){var b=Ig(a),c=Pg(a),d=b._start,e;for(e in b)if(g.Ea(e,"_")&&g.wa(b[e])){var f=e.slice(1);if(f in gba){var k=(0,g.Xg)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.q("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))Yg(k,f),Gg(a)}else{var l=g.A("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.A((a||"")+"TIMING_ACTION",void 0)};var p=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var t=window.location.protocol+g.q("ytplayer.config.assets.js");(t=Mg.getEntriesByName?Mg.getEntriesByName(t)[0]:null)?c.h5jse=Math.round(c.h5jse-t.responseEnd):delete c.h5jse}b.aft=Sg(a);hba(a)&&"youtube"==l&&(Ng("yt_lt","hot_bg",a),l=
b.vc,t=b.pbs,delete b.aft,c.aft=Math.round(t-l));for(var w in c)"_"!=w.charAt(0)&&(k[w]=c[w]);b.ps=g.Pf();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,w.push(e+"."+l));k.rt=w.join(",");(b=g.q("ytdebug.logTiming"))&&b(k,c);Yg(k,f,a);g.tg(iba,new xg(c.aft+(p||0),a))}}};
$g=function(a){if(!Ug(void 0)){if(!g.ue("send_empty_timing")){var b=g.A("CSI_SERVICE_NAME","youtube");if(!g.A("TIMING_ACTION",void 0)||!b)return}g.Lg("aa",void 0,void 0);Ng("ap",1,void 0);Ng("yt_fss",a,void 0);!g.ue("enable_csi_abandonment_info")||Rg("yt_lt")||Zg();Wg(void 0)}};
jba=function(){if("cold"==Pg().yt_lt){var a=Ig(),b=ah(),c;for(c in a)g.Ea(c,"_")||"tick_"+c in b||Jg(c,a[c]);a=Pg();for(c in a)"info_"+c in b||Qg(c,a[c])}};
Jg=function(a,b,c){ah(c)["tick_"+a]=b;c||b||g.Pf();return g.ue("csi_on_gel")?(c=bh(c),"_start"==a?dg("baseline_"+c)||g.ag("latencyActionBaselined",{clientActionNonce:c},b):dg("tick_"+a+"_"+c)||g.ag("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Qg=function(a,b,c){ah(c)["info_"+a]=b;if(g.ue("csi_on_gel"))if(a in ch){var d={};a=ch[a];g.Qa(kba,a)&&(b=!!b);a=a.split(".");for(var e=d,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];d[a[a.length-1]]=b;b=bh(c);eg(d,b)}else g.Qa(lba,a)||g.re(Error("Unknown label "+a+" logged with GEL CSI."))};
Zg=function(){var a=g.A("TIMING_INFO",{});for(b in a)Ng(b,a[b]);Ng("is_nav",1);(a=g.mg())&&Ng("csn",a);(a=g.A("PREVIOUS_ACTION",void 0))&&Ng("pa",a);var b=Pg();b.p=g.A("CLIENT_PROTOCOL")||"unknown";b.t=g.A("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&Ng("ba",1);Ng("yt_vis",fba());if("cold"==b.yt_lt){a=Mg.timing||{};a.navigationStart&&(g.Lg("srt",a.responseStart),1!=b.prerender&&Og("n",a.navigationStart));a:if(a.msFirstPaint)b=Math.max(0,a.msFirstPaint);else{if(b=window.chrome)if(b=
b.loadTimes,g.ya(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;b=Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0);break a}b=0}0<b&&g.Lg("fpt",b);Tg(a);Mg.getEntriesByType&&mba();a=g.A("SPEEDINDEX_FOR_ACTIONS",void 0);b=g.A("TIMING_ACTION",void 0);a&&-1<a.indexOf(b)&&(a=g.Pf(),b=new zg,c=g.Pf(),0<b.H&&(Ng("si",b.H),g.Lg("vsc",dh(b.W)),g.Lg("sics",a),g.Lg("sice",c)));a=[];if(window.document.querySelector&&Mg&&
Mg.getEntriesByName)for(var d in eh)b=eh[d],nba(d,b)&&a.push(b);a.length&&Ng("rc",a.join(","))}g.ue("csi_on_gel")&&(d={},d.actionType=oba[g.A("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=bh(),eg(d,a))};
dh=function(a){return Math.round(Mg.timing.navigationStart+a)};
mba=function(){var a=window.location.protocol,b=Mg.getEntriesByType("resource"),c=g.Oa(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20171001000319/https://fonts.googleapis.com/css?family=")});
b=(0,g.fh)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20171001000319/https://fonts.gstatic.com/s/")});
b=(0,g.gh)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0});
c&&0<c.startTime&&0<c.responseEnd&&(g.Lg("wfcs",dh(c.startTime)),g.Lg("wfce",dh(c.responseEnd)));b&&0<b.startTime&&0<b.responseEnd&&(g.Lg("wffs",dh(b.startTime)),g.Lg("wffe",dh(b.responseEnd)))};
nba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=Mg.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.Lg("rsf_"+b,d+Math.round(c.fetchStart)),g.Lg("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(Rg("rc")||Ng("rc",""),0===c.transferSize))?!0:!1:!1};
Yg=function(a,b,c){if(g.ue("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.n("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||g.og(a,void 0,void 0,void 0,f)}catch(k){g.og(a,void 0,void 0,void 0,f)}}else g.og(a);Fg(!0,c)};
hh=function(a){g.n("ytglobal.timingready_",a,void 0)};
bh=function(a){var b=ih(a).nonce;b||(b=Dg(),ih(a).nonce=b);return b};
Ig=function(a){return ih(a).tick};
Pg=function(a){return ih(a).info};
ah=function(a){a=ih(a);"gel"in a||(a.gel={});return a.gel};
ih=function(a){return g.q("ytcsi."+(a||"")+"data_")||Eg(a)};
Eg=function(a){var b={tick:{},info:{}};g.n("ytcsi."+(a||"")+"data_",b,void 0);return b};
Ug=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
Fg=function(a,b){g.n("yt.timing."+(b||"")+"pingSent_",a,void 0)};
hba=function(a){var b=Ig(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Pg(a).yt_pvis};
kh=function(a,b){g.rc.call(this);this.H=this.na=a;this.N=b;this.L=!1;this.api={};this.ea=this.W=null;this.R=new g.Qd;g.uc(this,this.R);this.D={};this.ma=this.ia=this.F=this.ib=this.C=null;this.V=!1;this.G=this.J=null;this.Ha={};this.sb=["onReady"];this.ab=null;this.mb=window.NaN;this.Y={};jh(this);this.Jh("WATCH_LATER_VIDEO_ADDED",(0,g.r)(this.VF,this));this.Jh("WATCH_LATER_VIDEO_REMOVED",(0,g.r)(this.WF,this));this.Jh("onAdAnnounce",(0,g.r)(this.Xu,this));this.ub=new vf;g.uc(this,this.ub)};
lh=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
nh=function(a){var b=!0,c=mh(a);c&&a.C&&(a=a.C,b=g.C(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
pba=function(a){if(!a.V){var b=nh(a);if(b&&"html5"==(mh(a)?"html5":null))a.ma="html5",a.L||a.tj();else if(oh(a),a.ma="html5",b&&a.G)a.na.appendChild(a.G),a.tj();else{a.C.loaded=!0;var c=!1;a.J=(0,g.r)(function(){c=!0;var a=this.C.clone();g.q("yt.player.Application.create")(this.na,a);this.tj()},a);
a.V=!0;b?a.J():(g.Ke(a.C.assets.js,a.J),g.ng(a.C.assets.css),ph(a)&&!c&&g.n("yt.player.Application.create",null,void 0))}}};
mh=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
qh=function(a,b,c){var d=b[c];return function(){try{return a.ab=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ab=e,g.re(e,"WARNING"))}}};
jh=function(a){a.L=!1;if(a.ea)for(var b in a.D)a.ea(b,a.D[b]);for(var c in a.Y)g.Be((0,window.parseInt)(c,10));a.Y={};a.W=null;a.ea=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=(0,g.r)(a.Jh,a);a.api.removeEventListener=(0,g.r)(a.kK,a);a.api.destroy=(0,g.r)(a.dispose,a);a.api.getLastError=(0,g.r)(a.Yw,a);a.api.getPlayerType=(0,g.r)(a.qx,a);a.api.getCurrentVideoConfig=(0,g.r)(a.Bw,a);a.api.loadNewVideoConfig=(0,g.r)(a.Kl,a);a.api.isReady=(0,g.r)(a.RB,a)};
rh=function(a,b){var c=b;if("string"==typeof b){if(a.Ha[b])return a.Ha[b];c=function(){var a=g.q(b);a&&a.apply(g.m,arguments)};
a.Ha[b]=c}return c?c:null};
qba=function(a,b){var c="ytPlayer"+b+a.N,d=(0,g.r)(function(a){if("html5"==(mh(this)?"html5":null)){var c=this.C&&this.C.args&&this.C.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true")){this.R.qa(b,a);return}}var d=g.ze((0,g.r)(function(){this.ob()||(this.R.qa(b,a),g.db(this.Y,String(d)))},this),0);
g.eb(this.Y,String(d),!0)},a);
a.D[b]=c;g.m[c]=d;return c};
oh=function(a){g.Lg("dcp");a.cancel();jh(a);a.ma=null;a.C&&(a.C.loaded=!1);var b=mh(a);"html5"==(mh(a)?"html5":null)&&(nh(a)||!ph(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.bc(a.na)};
ph=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.uh=function(a,b){a=g.sa(a)?g.Sb(a):a;b=g.xf(b);var c=g.sh+"_"+g.Ba(a),d=g.th[c];if(d)return d.Kl(b),d.api;d=new kh(a,c);g.th[c]=d;g.E("player-added",d.api);g.sc(d,g.u(rba,d));g.ze(function(){d.Kl(b)},0);
return d.api};
rba=function(a){delete g.th[a.getId()]};
g.vh=function(a){if(!a)return null;var b=g.sh+"_"+g.Ba(a),c=g.th[b];c||(c=new kh(a,b),g.th[b]=c);return c.api};
g.wh=function(a){return g.vh(window.document.getElementById(a))};
yh=function(){if(g.ue("log_web_screen_end")){var a=g.kg(),b=g.mg();b&&a&&g.cg(b,[a],!0)}};
g.Ch=function(a){var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Yf()>b)&&"visible"==g.nf()){b=-1;g.zh&&(b=Math.round(g.Pf()-g.zh));var c=String;var d=g.q("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Xd)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.Ah,index:String(Bh),lastEventDeltaMs:String(b),trigger:a};g.ag("foregroundHeartbeat",a);g.n("_fact",-1,window);Bh++;g.zh=g.Pf()}};
g.Dh=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?se(d):null;this.H=e?se(e):null;this.G=[];this.C=this.F=0};
g.Eh=function(a){g.Re(a.F);a.F=g.Qe((0,g.r)(a.init,a))};
g.Hh=function(a){a.name in Fh&&Gh(a.name);Fh[a.name]={reqs:[],disable:(0,g.r)(a.disable,a)};(0,g.y)(a.deps,function(b){if(!(b in Fh))throw Error("Module "+b+" required by "+a.name);Fh[b].reqs.push(a.name)});
a.enable()};
Gh=function(a){if(a in Fh){var b=Fh[a];(0,g.y)(b.reqs,function(a){Gh(a)});
try{b.disable()}catch(c){}delete Fh[a]}};
Jh=function(a){ne(g.Ih,arguments)};
g.Kh=function(a){return a in g.Ih};
Lh=function(a){ne(g.Ih,arguments)};
g.Nh=function(a,b,c,d){g.Mh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Ph=function(a,b,c){var d=g.A("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.ge(window.location.href);e&&d.push(e);e=g.ge(a);if(g.Qa(d,e)||!e&&g.Ea(a,"/"))if(g.ue("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.Mb(d,a),a=d.href),a&&(a=g.he(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.mg();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Ma(a).toString(36),d=b?g.ke(b):"",g.Nh(a,d,c||5),Oh(b))):(c="ST-"+g.Ma(a).toString(36),a=b?g.ke(b):
"",g.Nh(c,a,5),Oh(b))}};
Oh=function(a){if(a){a=a.itct||a.ved;var b=g.q("yt.logging.screen.storeParentElement");a&&b&&b(g.Cf(a))}};
g.Qh=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.Nb(d.location,g.le(a,b)+c)};
g.Rh=function(a,b){b&&g.Ph(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.Qh(a)};
g.Sh=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.A("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Ph(a,b);if(c)return!1;g.Rh(a);return!0};
g.Uh=function(a,b){var c={};c.key=a;c.value=b;return Th().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.Vh=function(a){return Th().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
Th=function(){return Wh?window.Promise.resolve(Wh):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))Wh=b,a(Wh);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),Th()};
c.onupgradeneeded=sba})};
sba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
yba=function(){Xh++;var a=g.Wb(),b=new g.fc(0,0,a.width,a.height);Ng("vph",a.height);Ng("vpw",a.width);g.Lg("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;Yh.start();for(var f=0;f<c;f++){var k=a[f];if(Zh(k,b)){var l=tba(k);l.then(uba);d.push(l);$h.push(l);k.loadTime||(e=!1)}}e&&Ng("yt_eil",1);Ng("vpni",d.length);g.Lg("vpcc");b=g.qd(d).then(vba);g.sd(b,wba);b.then(xba);$h.push(b);return b};
xba=function(){Yh.stop()};
wba=function(){g.Lg("vpr")};
Zh=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.mf(c);if(e in ai)return!0;if(e in bi)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return bi[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return bi[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)ai[d[c]]=!0;return!0};
vba=function(a){var b=g.Wb();b=new g.fc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Zh(a[d].XA,b)&&c<f&&(c=f)}return c};
tba=function(a){var b=Xh;return new g.kd(function(c,d){var e={XA:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){Xh!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},ci.push(a))})};
uba=function(a){Yh.start();Ng("vpil",++di);a=a.time;ei<a&&(ei=a,g.Lg("lim",a))};
zba=function(){g.Lg("vptl",ei);g.Lg("vpl",ei)};
Aba=function(){$h.forEach(function(a){a.cancel()});
ei=di=$h.length=0;ai={};bi={};ci.forEach(function(a){a.slt=void 0});
ci.length=0};
g.fi=function(a,b){g.og("/gen_204?"+a,b)};
Cba=function(a){if(null==a)return[];var b=[];Bba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.gi=function(){return g.z(g.x("page-container"),"remote-connected")};
Dba=function(){hi=g.Ae(ii,5E3);var a=g.ji();a?(a.addEventListener("onReady",ii),a.addEventListener("onStateChange",ii)):ki("unable to init PP monitor")};
ni=function(a){for(var b in g.th){var c=g.th[b];c&&c.cancel()}if(a=a||null){b=g.ji();var d=!0;c=g.li;g.li=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(mi="",g.uh("player-api",a)):b.playVideo();a=g.xf(a);a.loaded=!0}ii();g.n("ytplayer.config",a,void 0)};
g.ji=function(){return g.wh("player-api")};
ii=function(){var a=g.ji();if(a){var b=g.x("player");b=!b||g.z(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.A("PAGE_NAME"),e=g.gi();!c||d||e||(ki("PP playing off watch (paused)"),a.pauseVideo());b&&d?ki("PP off-screen on watch"):b||d||ki("PP !off-screen off watch")}};
ki=function(a){var b=g.A("PAGE_NAME");b&&(a+="("+[b,mi,g.q("_spf_state.nav-counter")].join()+")",g.n("yt.www.persistentplayer.issue",a,void 0),g.re(Error(a),"WARNING"))};
pi=function(){g.Lg("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.Lg("cpt");g.E("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?(g.Lg("cpt"),g.E("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){g.Lg("cpt");
g.E("on_cpt_tick",(new Date).getTime())},0);
Eba();g.A("CSI_VIEWPORT")&&(oi=yba(),oi.then(function(a){g.Lg("vpl",a);oi=null},function(){}))};
Eba=function(){qi("init");var a=g.A("PAGE_NAME",void 0);a&&qi("init-"+a)};
qi=function(a){g.Oe()?ri.push(g.Qe(g.u(g.Ie,a),0)):g.E(a)};
si=function(){g.Se(ri);ri.length=0;Aba();oi&&(oi.cancel(),oi=null);var a=g.A("PAGE_NAME",void 0);a&&g.Ie("dispose-"+a);g.Ie("dispose")};
Fba=function(){pi()};
Gba=function(){g.A("TIMING_REPORT_ON_UNLOAD")&&g.Kg(!0);$g("u");g.ue("log_foreground_heartbeat")&&g.Ch("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");yh();g.bg();g.If();si();g.Ie("pageunload")};
ti=function(){Wf()};
ui=function(a){a=a.detail.url;window.yt_spf_loaded_history=!0;Wf();var b=g.lg();if(b&&a){var c=g.Ef(b.visualElement);b={csn:b.clientScreenNonce};"trackingParams"in c?b.itct=c.trackingParams:(b.veType=c.veType,b.veCounter=c.veCounter);g.Ph(a,b)}};
zi=function(){vi=1;wi=xi=0;g.A("TIMING_REPORT_ON_UNLOAD")&&g.Kg(!0);g.ue("warm_load_nav_start_web")?($g("n"),Gg(),hh(!1),g.pe("TIMING_AFT_KEYS",[]),Ng("yt_lt","warm"),g.pe("TIMING_ACTION",""),g.pe("TIMING_WAIT",[]),vg()):($g("n"),Gg());Og("n");Hg("nr");yi(Hba);yh();g.Ie("navigate")};
Gi=function(a){a=a.detail.part||a.detail.partial;g.Lg("nc"+xi);++xi;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.Lg("bc");else{var b=1==vi;vi=2;b?(yi(Iba),Di()):yi(Jba);if(b=a&&a.data&&a.data.swfcfg)Ei(a.timing,b.args),Fi(b)}};
Hi=function(){g.Lg("np"+wi);++wi};
Ii=function(a){a=a.detail.response;var b=1==vi;vi=3;b&&(yi(Kba),Di());if(b=a.data&&a.data.swfcfg)Ei(a.timing,b.args),Fi(b)};
Mi=function(a){g.Lg("nd");a=a.detail.response;g.Ji=a.cacheKey;a=a.timing;var b=window._spf_state;g.Ki.navigationCount=b&&b["nav-counter"]||0;g.ue("warm_load_nav_start_web")?g.Lg("srt",a.responseStart):(Og("ne",a.responseStart),Ng("srt",Math.max(0,a.responseStart-a.navigationStart)));Ng("yt_lt",a.spfCached?"hot":"warm");Ng("yt_pft",+!!a.spfPrefetched);g.Lg("pfs",a.fetchStart);g.Lg("pfrs",a.responseStart);"redirectStart"in a&&Tg(a);yi(Li);window.document.getElementById("content").style.height="";pi();
vi=0};
Ni=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.re(a)};
Oi=function(a){g.fi(g.ke({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Mba=function(){Lba();window.yt_spf_loaded_history=!1};
Nba=function(){};
Di=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");si();a=g.A("PREVIOUS_ACTION");for(var b in g.oe)delete g.oe[b];g.pe("PREVIOUS_ACTION",a);g.pe("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.n("ytplayer.config",null,void 0);if((b=g.ji())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())mi=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),mi="recovered"):mi="missing2"}else mi="missing";ii()};
Fi=function(a){"cfg"in Ig(void 0)||g.Lg("cfg");ni(a)};
yi=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Re(Pi);Pi=g.Qe(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Be(Qi);Qi=g.ze(function(){b.className=e},c)},0)};
Lba=function(){var a=Li[0]+50;g.Be(Qi);Qi=g.ze(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
Ei=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Cba(b));g.A("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.fi(g.ke(c)))};
Si=function(){return Ri().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})};
Oba=function(){var a=g.Ti&&g.ue("enable_firefox_push_notifications");return!(!g.Ui&&!a||g.Vi||g.Wi||g.Xi||!window.navigator.serviceWorker||!window.navigator.serviceWorker.getRegistration||!window.Notification||!window.Promise)};
Zi=function(){Yi({type:"notifications_register",data:g.A("ID_TOKEN")})};
Ri=function(){return window.navigator.serviceWorker.getRegistration(String(te("service_worker_scope")||""))};
Pba=function(){return Yi({type:"notifications_check_registration",data:g.A("ID_TOKEN")})};
Yi=function(a){return Ri().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Qba=function(){if(!g.A("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(te("service_worker_push_force_notification_prompt_tag")||"");return a?g.Vh("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
Uba=function(){return g.A("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)?Qba().then(function(a){if(a)return!0;a=[Rba(),Sba()];g.A("LOGGED_IN",void 0)||a.push(Tba());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
Tba=function(){var a=g.ve("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.Vh("WatchCount").then(function(b){return b>=a})};
Xba=function(){return g.ue("service_worker_push_ticker_enabled")?Vba().then(function(a){if(!a)return window.Promise.resolve();a=bj();if(!a)return window.Promise.resolve();var b=cj();if(!b)return window.Promise.resolve();var c=bj();c=c?c.querySelector(".yt-uix-button-close"):null;if(!c)return window.Promise.resolve();g.G(b,"click",aj);g.G(c,"click",Wba);window.document.body.classList.add("sitewide-ticker-visible");a.classList.add("show");return $i()}):($i(),aj())};
aj=function(){var a=arguments;g.ue("service_worker_push_prompt_modal_enable")&&Yba();return window.Notification.requestPermission().then(function(a){dj();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return Si().then(function(){g.Uh("NotificationsDisabled",!1);Zi();return window.Promise.resolve(!0)});
"denied"==a&&Zi();return window.Promise.resolve(!1)})["catch"](function(){dj();
return window.Promise.reject.apply(window.Promise,[].concat(a instanceof Array?a:baa(g.na(a))))})};
Wba=function(){g.Uh("HideTicker",(0,g.Xd)());window.document.body.classList.remove("sitewide-ticker-visible")};
Vba=function(){return g.Vh("HideTicker").then(function(a){return(0,g.Xd)()>a+2592E6})};
ej=function(){return g.ue("service_worker_push_home_only")?"HomePromptCount":"PromptCount"};
$i=function(){var a=ej();return g.Vh(a).then(function(b){return g.Uh(a,b+1)}).then(function(){if(g.ue("service_worker_push_home_only"))return g.Uh("HomePromptTime",(0,g.Xd)())}).then(function(){var a=String(te("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.Vh("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(e){return!1}c||(c=[]);c.push(a);return g.Uh("PromptTags",JSON.stringify(c))})})};
bj=function(){var a=window.document.getElementById("ticker");return a&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.C(a,"trigger-condition")?a:null};
cj=function(){var a=bj();return a?a.querySelector(".yt-uix-button-alert-info"):null};
Rba=function(){return-1==g.ve("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.Vh(ej()).then(function(a){a||(a=0);return window.Promise.resolve(a<g.ve("service_worker_push_prompt_cap"))})};
Sba=function(){var a=g.ve("service_worker_push_prompt_delay_ms");return a?g.Vh("HomePromptTime").then(function(b){return window.Promise.resolve((0,g.Xd)()-a>(b||0))}):window.Promise.resolve(!0)};
Zba=function(){fj||dj()};
gj=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
Yba=function(){var a=g.x("yt-push-prompt-modal-bg");fj=g.ue("service_worker_push_prompt_modal_ignore_click");a?gj(a):(a=g.Zb("div",{id:"yt-push-prompt-modal-bg"}),gj(a),window.document.body.appendChild(a),g.tf(window.document,"click",Zba))};
dj=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.cc(a)};
$ba=function(a){return Oba()&&a&&a.pushManager?"default"!=window.Notification.permission?Si().then(Pba):Uba().then(function(a){if(a)return Xba()}):window.Promise.resolve()};
bca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(aca)})};
dca=function(){var a="/sw.js",b=g.A("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=hj(a);g.ue("service_worker_push_enabled")&&a.then(cca).then($ba)};
cca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
aca=function(a){a&&hj("/sw.js?0",a.scope)};
hj=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(te("service_worker_scope")||"")||"/"})};
ij=function(){g.Dh.call(this,"www/base");this.D=0};
jj=function(a){(a=a.detail.name)&&Gh(a)};
g.aa=[];ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)kj=Object.setPrototypeOf;else{var lj;a:{var eca={a:!0},mj={};try{mj.__proto__=eca;lj=mj.a;break a}catch(a){}lj=!1}kj=lj?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var da=kj,ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ha="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,aaa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
pa("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
var fca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
pa("Reflect.construct",function(){return fca});
pa("Promise",function(a){function b(a){this.C=0;this.D=void 0;this.F=[];var b=this.H();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.L()})};
var e=ha.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.L=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(t){this.H(t)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.L(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(p){this.G(p);return}"function"==typeof b?this.ma(b,a):this.L(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.L=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.C)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.C);this.C=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.F){for(var a=this.F,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.F=null}};
var f=new c;b.prototype.V=function(a){var b=this.H();a.Sh(b.resolve,b.reject)};
b.prototype.ma=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(t){c.reject(t)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(la){f(la)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Sh(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Sh=function(a,b){function c(){switch(d.C){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?f.F(c):this.F.push(function(){f.F(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.na(a),f=e.next();!f.done;f=e.next())d(f.value).Sh(b,c)})};
b.all=function(a){var c=g.na(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Sh(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
pa("WeakMap",function(a){function b(a){this.nb=(f+=Math.random()+1).toString();if(a){fa();ka();a=g.na(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){qa(a,e)||ia(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(t){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!qa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.nb]=b;return this};
b.prototype.get=function(a){return qa(a,e)?a[e][this.nb]:void 0};
b.prototype.has=function(a){return qa(a,e)&&qa(a[e],this.nb)};
b.prototype["delete"]=function(a){return qa(a,e)&&qa(a[e],this.nb)?delete a[e][this.nb]:!1};
return b});
pa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return ma(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&qa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,jc:l}}return{id:c,list:d,index:-1,jc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.na(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.na([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(B){return!1}}())return a;
fa();ka();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.jc?c.jc.value=b:(c.jc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.jc),this.F.previous.next=c.jc,this.F.previous=c.jc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.jc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.jc.previous.next=a.jc.next,a.jc.next.previous=a.jc.previous,a.jc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).jc};
e.prototype.get=function(a){return(a=d(this,a).jc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
pa("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.na(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.na([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
fa();ka();b.prototype.add=function(a){this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
pa("Array.from",function(a){return a?a:function(a,c,d){ka();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
pa("Number.isNaN",function(a){return a?a:function(a){return"number"===typeof a&&(0,window.isNaN)(a)}});
g.nj=g.nj||{};g.m=this;Aa="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Xd=Date.now||function(){return+new Date};g.v(g.Ca,Error);g.Ca.prototype.name="CustomError";var gaa,haa,iaa,jaa,kaa,laa,faa;g.Ja=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.oj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.Pa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(g.sa(a))return g.sa(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.gca=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;
0>c&&(c=Math.max(0,a.length+c));if(g.sa(a))return g.sa(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.fh=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.sa(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var p=k[l];
b.call(c,p,l,a)&&(e[f++]=p)}return e};
g.Xg=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.sa(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.gh=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.r)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.y)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.pj=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.qj=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};a:{var rj=g.m.navigator;if(rj){var sj=rj.userAgent;if(sj){g.Wa=sj;break a}}g.Wa=""};var gb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.ob[" "]=g.ua;var Aj,maa,Ej;g.tj=g.Xa("Opera");g.H=g.ib();g.uj=g.Xa("Edge");g.vj=g.uj||g.H;g.wj=g.Xa("Gecko")&&!(-1!=g.Wa.toLowerCase().indexOf("webkit")&&!g.Xa("Edge"))&&!(g.Xa("Trident")||g.Xa("MSIE"))&&!g.Xa("Edge");g.xj=-1!=g.Wa.toLowerCase().indexOf("webkit")&&!g.Xa("Edge");g.yj=g.Xa("Macintosh");g.zj=g.Xa("Windows");g.hca=g.Xa("Linux")||g.Xa("CrOS");g.ica=g.Xa("Android");g.Wi=mb();g.Xi=g.Xa("iPad");g.jca=g.Xa("iPod");g.kca=g.nb();
a:{var Bj="",Cj=function(){var a=g.Wa;if(g.wj)return/rv\:([^\);]+)(\)|;)/.exec(a);if(g.uj)return/Edge\/([\d\.]+)/.exec(a);if(g.H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.xj)return/WebKit\/(\S+)/.exec(a);if(g.tj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Cj&&(Bj=Cj?Cj[1]:"");if(g.H){var Dj=qb();if(null!=Dj&&Dj>(0,window.parseFloat)(Bj)){Aj=String(Dj);break a}}Aj=Bj}g.rb=Aj;maa={};var Fj=g.m.document;Ej=Fj&&g.H?qb()||("CSS1Compat"==Fj.compatMode?(0,window.parseInt)(g.rb,10):5):void 0;g.tb=Ej;var oaa;oaa=!g.H||g.ub(9);g.lca=!g.wj&&!g.H||g.H&&g.ub(9)||g.wj&&g.sb("1.9.1");g.Gj=g.H&&!g.sb("9");g.mca=g.H||g.tj||g.xj;g.wb.prototype.ne=!0;g.wb.prototype.wd=function(){return this.C};
g.wb.prototype.toString=function(){return"Const{"+this.C+"}"};
g.vb={};g.xb("");g.nca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.oca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Hj=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");var yb;g.zb.prototype.ne=!0;g.zb.prototype.wd=function(){return this.C};
g.zb.prototype.kl=!0;g.zb.prototype.Ee=g.ba(1);g.Cb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;yb={};g.Db("about:blank");g.Hb.prototype.ne=!0;g.Gb={};g.Hb.prototype.wd=function(){return this.C};
g.Ij=g.Ib("");g.Jj=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.pca=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Kb.prototype.kl=!0;g.Kb.prototype.Ee=g.ba(0);g.Kb.prototype.ne=!0;g.Kb.prototype.wd=function(){return this.C};
g.Jb={};g.Lb("<!DOCTYPE html>",0);g.Kj=g.Lb("",0);g.Lj=g.Lb("<br>",0);g.h=g.Pb.prototype;g.h.clone=function(){return new g.Pb(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Pb&&g.Qb(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.Pb?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.ta(b)&&(this.y+=b));return this};g.h=g.Rb.prototype;g.h.clone=function(){return new g.Rb(this.width,this.height)};
g.h.Vf=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Vf()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Tb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.Mj=window.document;g.Nj=window;g.h=g.fc.prototype;g.h.clone=function(){return new g.fc(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Pb?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.Pb?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.ta(b)&&(this.top+=b));return this};g.Oj=g.wj?"MozUserSelect":g.xj||g.uj?"WebkitUserSelect":null;g.Pj=g.lc(null);g.qca=Object.prototype.hasOwnProperty;g.Qj=g.mc(window);g.Rj=g.Qj&&window.parent||window;g.Sj=(new Date).getTime();g.h=g.pc.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ra(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Xd)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Ja)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.ra(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Dc=g.ba(2);g.h.Jb=g.ba(3);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Bb=g.ba(7);g.h.ae=g.ba(8);g.h.clear=function(){for(var a=g.qc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Mh=new g.pc("undefined"==typeof window.document?null:window.document);g.Mh.F=3950;g.rc.prototype.Cc=!1;g.rc.prototype.ob=function(){return this.Cc};
g.rc.prototype.dispose=function(){this.Cc||(this.Cc=!0,this.X())};
g.rc.prototype.X=function(){if(this.Lb)for(;this.Lb.length;)this.Lb.shift()()};g.vc.prototype.stopPropagation=function(){this.F=!0};
g.vc.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Gs=!1};var Mc,sca;g.rca=!g.H||g.ub(9);Mc=!g.H||g.ub(9);sca=g.H&&!g.sb("9");!g.xj||g.sb("528");g.wj&&g.sb("1.9b")||g.H&&g.sb("8")||g.tj&&g.sb("9.5")||g.xj&&g.sb("528");g.wj&&!g.sb("8")||g.H&&g.sb("9");var waa=function(){if(!g.m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.m.addEventListener("test",g.ua,b);g.m.removeEventListener("test",g.ua,b);return a}();g.Tj=g.H?"focusin":"DOMFocusIn";g.Uj=g.H?"focusout":"DOMFocusOut";g.Vj=g.xj?"webkitTransitionEnd":g.tj?"otransitionend":"transitionend";g.v(g.xc,g.vc);var tca={2:"touch",3:"pen",4:"mouse"};
g.xc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.wj&&(g.pb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.L=g.yj?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.sa(a.pointerType)?a.pointerType:tca[a.pointerType]||"";this.state=a.state;this.wc=a;a.defaultPrevented&&
this.preventDefault()};
g.xc.prototype.stopPropagation=function(){g.xc.M.stopPropagation.call(this);this.wc.stopPropagation?this.wc.stopPropagation():this.wc.cancelBubble=!0};
g.xc.prototype.preventDefault=function(){g.xc.M.preventDefault.call(this);var a=this.wc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,sca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var yc="closure_listenable_"+(1E6*Math.random()|0),taa=0;g.h=g.Bc.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Dc(a,b,d,e);-1<k?(b=a[k],c||(b.Rh=!1)):(b=new uaa(b,this.src,f,!!d,e),b.Rh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Dc(e,b,c,d);return-1<b?(Ac(e[b]),g.Sa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Ac(d[e]);delete this.listeners[c];this.C--}return b};
g.h.dg=g.ba(10);g.h.gf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Dc(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.ra(a),d=c?a.toString():"",e=g.ra(b);return g.Za(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Jc="closure_lm_"+(1E6*Math.random()|0),Pc={},Lc=0,Sc="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.Tc,g.rc);g.Tc.prototype[yc]=!0;g.h=g.Tc.prototype;g.h.wi=function(){return this.Xl};
g.h.vh=g.ba(11);g.h.addEventListener=function(a,b,c,d){g.Fc(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Nc(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.wi();if(b){var c=[];for(var d=1;b;b=b.wi())c.push(b),++d}b=this.Yu;d=a.type||a;if(g.sa(a))a=new g.vc(a,b);else if(a instanceof g.vc)a.target=a.target||b;else{var e=a;a=new g.vc(d,b);g.hb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=Uc(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=Uc(k,d,!0,a)&&e,a.F||(e=Uc(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=Uc(k,d,!1,a)&&e;return e};
g.h.X=function(){g.Tc.M.X.call(this);this.removeAllListeners();this.Xl=null};
g.h.O=function(a,b,c,d){return this.vd.add(String(a),b,!1,c,d)};
g.h.Ie=function(a,b,c,d){return this.vd.add(String(a),b,!0,c,d)};
g.h.Wa=function(a,b,c,d){return this.vd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.vd?this.vd.removeAll(a):0};
g.h.dg=g.ba(9);g.h.gf=function(a,b,c,d){return this.vd.gf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.vd.hasListener(g.ra(a)?String(a):void 0,b)};Vc.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var fd;var gd=new Vc(function(){return new $c},function(a){a.reset()},100);
Yc.prototype.add=function(a,b){var c=gd.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
Yc.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
$c.prototype.set=function(a,b){this.kc=a;this.scope=b;this.next=null};
$c.prototype.reset=function(){this.next=this.scope=this.kc=null};var ad,bd=!1,cd=new Yc;ld.prototype.reset=function(){this.context=this.F=this.G=this.C=null;this.D=!1};
var md=new Vc(function(){return new ld},function(a){a.reset()},100);
g.kd.prototype.then=function(a,b,c){return rd(this,g.ya(a)?a:null,g.ya(b)?b:null,c)};
g.hd(g.kd);g.kd.prototype.cancel=function(a){0==this.C&&dd(function(){var b=new g.yd(a);td(this,b)},this)};
g.kd.prototype.W=function(a){this.C=0;g.jd(this,2,a)};
g.kd.prototype.N=function(a){this.C=0;g.jd(this,3,a)};
g.kd.prototype.J=function(){for(var a;a=ud(this);)vd(this,a,this.C,this.R);this.L=!1};
var Ad=Xc;g.v(g.yd,g.Ca);g.yd.prototype.name="cancel";g.v(g.Dd,g.rc);g.h=g.Dd.prototype;g.h.nb=0;g.h.X=function(){g.Dd.M.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.nb=g.Bd(this.uc,g.ra(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Cd(this.nb);this.nb=0};
g.h.isActive=function(){return 0!=this.nb};
g.h.Jk=function(){this.nb=0;this.C&&this.C.call(this.F)};g.Ti=g.Xa("Firefox");g.Wj=mb()||g.Xa("iPod");g.Xj=g.Xa("iPad");g.Vi=g.lb();g.Ui=g.jb();g.Yj=g.kb()&&!g.nb();g.Id="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.Hd.prototype.next=function(){throw g.Id;};
g.Hd.prototype.cd=function(){return this};Ld.prototype.Ej=function(a){var b=[];Nd(this,a,b);return b.join("")};
var Pd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Daa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;g.v(g.Qd,g.rc);g.h=g.Qd.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.qd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.ua):(c&&g.Ta(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.qa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Eaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.qd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.y)(b,this.qd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Bb=g.ba(6);g.h.X=function(){g.Qd.M.X.call(this);this.clear();this.D.length=0};g.Sd.prototype.set=function(a,b){g.ra(b)?this.C.set(a,g.Md(b)):this.C.remove(a)};
g.Sd.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Sd.prototype.remove=function(a){this.C.remove(a)};g.v(Td,g.Sd);Td.prototype.set=function(a,b){Td.M.set.call(this,a,Vd(b))};
Td.prototype.F=function(a){a=Td.M.get.call(this,a);if(!g.ra(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Td.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ra(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.Wd,Td);g.Wd.prototype.set=function(a,b,c){if(b=Vd(b)){if(c){if(c<(0,g.Xd)()){g.Wd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Xd)()}g.Wd.M.set.call(this,a,b)};
g.Wd.prototype.F=function(a,b){var c=g.Wd.M.F.call(this,a);if(c)if(!b&&g.Yd(c))g.Wd.prototype.remove.call(this,a);else return c};g.v(g.Zd,g.Wd);g.v(g.$d,Faa);g.$d.prototype.Bb=g.ba(5);g.$d.prototype.clear=function(){var a=Caa(this.cd(!0)),b=this;(0,g.y)(a,function(a){b.remove(a)})};g.v(g.ae,g.$d);g.h=g.ae.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Bb=g.ba(4);g.h.cd=function(a){var b=0,c=this.C,d=new g.Hd;d.next=function(){if(b>=c.length)throw g.Id;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.be,g.ae);g.v(ce,g.ae);var Gaa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Zj=!1,ak="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(Zj=!0,a.description)){ak=me(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){Zj=!0;ak="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],Zj=!(!a||!a.enabledPlugin))){ak=me(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Zj=
!0;ak=me(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Zj=!0;ak="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Zj=!0,ak=me(b.GetVariable("$version"))}catch(c){}})();
g.uca=Zj;g.vca=ak;g.Pf=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.bk="Microsoft Internet Explorer"==window.navigator.appName;g.oe=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.n("yt.config_",g.oe,void 0);var ye={};var wca=g.q("ytPubsubPubsubInstance")||new g.Qd;g.Qd.prototype.subscribe=g.Qd.prototype.subscribe;g.Qd.prototype.unsubscribeByKey=g.Qd.prototype.qd;g.Qd.prototype.publish=g.Qd.prototype.qa;g.Qd.prototype.clear=g.Qd.prototype.clear;g.n("ytPubsubPubsubInstance",wca,void 0);var Ee=g.q("ytPubsubPubsubSubscribedKeys")||{};g.n("ytPubsubPubsubSubscribedKeys",Ee,void 0);var Ge=g.q("ytPubsubPubsubTopicToKeys")||{};g.n("ytPubsubPubsubTopicToKeys",Ge,void 0);var Fe=g.q("ytPubsubPubsubIsSynchronous")||{};
g.n("ytPubsubPubsubIsSynchronous",Fe,void 0);var Iaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Jaa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Le=null;(0,g.Xd)();var Ue=g.ra(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.ra(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var $e,af;$e={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};af=!1;g.ck=cf;gf.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.id(a)?a:g.jf(a)):2===this.F&&b?(a=b.call(c,this.C),g.id(a)?a:g.hf(a)):this};
gf.prototype.getValue=function(){return this.C};
g.hd(gf);var xca=0,Oaa=g.xj?"webkit":g.wj?"moz":g.H?"ms":g.tj?"o":"",lf=g.q("ytDomDomGetNextId")||function(){return++xca};
g.n("ytDomDomGetNextId",lf,void 0);var Paa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.of.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.of.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.of.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pf=g.q("ytEventsEventsListeners")||{};g.n("ytEventsEventsListeners",pf,void 0);var rf=g.q("ytEventsEventsCounter")||{count:0};g.n("ytEventsEventsCounter",rf,void 0);g.ea(vf,g.rc);vf.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.Xf);break}};
vf.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.Xf)}g.rc.prototype.X.call(this)};var Qaa={enablejsapi:1},Raa={},Saa={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};wf.prototype.clone=function(){var a=new wf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.va(c)?a[b]=g.fb(c):a[b]=c}return a};var zf={},yf=0;var Taa,Sf;Taa={log_event:"events",log_interaction:"interactions"};Sf=Object.create(null);Sf.log_event="GENERIC_EVENT_LOGGING";Sf.log_interaction="INTERACTION_LOGGING";g.Nf={};g.Ff={};g.Lf=0;g.Mf=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.n("ytLoggingTransportLogPayloadsQueue_",g.Mf,void 0);var Gf=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.n("ytLoggingTransportTokensToCttTargetIds_",Gf,void 0);var Of=g.q("ytLoggingTransportDispatchedStats_")||{};
g.n("ytLoggingTransportDispatchedStats_",Of,void 0);var Uf=g.q("ytLoggingTransportCapturedTime_")||{};g.n("ytytLoggingTransportCapturedTime_",Uf,void 0);var fg=g.q("ytLoggingLatencyUsageStats_")||{};g.n("ytLoggingLatencyUsageStats_",fg,void 0);var gg=0;var dk,ek;dk=new g.be;g.ig=dk.isAvailable()?new g.Zd(dk):null;ek=new ce;g.hg=ek.isAvailable()?new g.Zd(ek):null;var Xaa=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var fk={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},gk;var hk=g.Wa;hk=hk.toLowerCase();if(-1!=hk.indexOf("android")){var ik=hk.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(ik)gk=(0,window.parseFloat)(ik[1]);else{var jk=hk.match("("+g.$a(fk).join("|")+")");gk=jk?fk[jk[0]]:0}}else gk=void 0;var yca=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],zca=['audio/mp4; codecs="mp4a.40.2"'];var pg={},Zaa=0;g.qg.prototype.Ej=function(){return{version:this.version,args:this.args}};g.rg.prototype.toString=function(){return this.topic};var Aca=g.q("ytPubsub2Pubsub2Instance")||new g.Qd;g.Qd.prototype.subscribe=g.Qd.prototype.subscribe;g.Qd.prototype.unsubscribeByKey=g.Qd.prototype.qd;g.Qd.prototype.publish=g.Qd.prototype.qa;g.Qd.prototype.clear=g.Qd.prototype.clear;g.n("ytPubsub2Pubsub2Instance",Aca,void 0);g.kk=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.n("ytPubsub2Pubsub2SubscribedKeys",g.kk,void 0);g.lk=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.n("ytPubsub2Pubsub2TopicToKeys",g.lk,void 0);
g.mk=g.q("ytPubsub2Pubsub2IsAsync")||{};g.n("ytPubsub2Pubsub2IsAsync",g.mk,void 0);g.n("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.ea(wg,g.qg);g.ea(xg,g.qg);var eba=new g.rg("aft-recorded",wg),iba=new g.rg("timing-sent",xg);var Mg=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};Ag.prototype.toString=function(){return this.region.toString()+": "+this.timing+" => "+this.url};
Bg.prototype.toString=function(){return["progress",this.progress,"timing",this.timing,"area",this.Vf].join(": ")};
var $aa=/url\(["']?(http[^'"\)]+)['"]?\)/i;var Cg=(0,g.Xd)().toString();var gba={vc:!0},eh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'script[name="mobile-c3/mobile-c3"]':"mcj",
'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",
'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},ch={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",
plid:"videoId",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},lba="ap c cver ei srt yt_fss yt_li ba vpil vpni vpst yt_eil pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),oba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",
browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",
"watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR"},kba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
Vg=!1,dba=(0,g.r)(Mg.clearResourceTimings||Mg.webkitClearResourceTimings||Mg.mozClearResourceTimings||Mg.msClearResourceTimings||Mg.oClearResourceTimings||g.ua,Mg);g.ea(kh,g.rc);g.h=kh.prototype;g.h.getId=function(){return this.N};
g.h.Kl=function(a,b){if(!this.ob()){this.ib=a;this.C=a.clone();this.F=this.C.attrs.id||this.F;"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N);this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F);this.C.args.enablejsapi="1";this.C.args.playerapiid=this.N;this.ia||(this.ia=rh(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;var c=this.C.attrs.width;c&&g.kc(this.H,Number(c)||c);(c=this.C.attrs.height)&&g.jc(this.H,Number(c)||c);if(!this.ob()){if(!b&&
!g.ra(this.C.disable.html5)){c=!0;void 0!=this.C.args.deviceHasDisplay&&(c=this.C.args.deviceHasDisplay);if(2.2==gk)var d=!0;else{a:{var e=c;c=g.q("yt.player.utils.videoElement_");c||(c=g.ac("VIDEO"),g.n("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?yca:zca;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(k){d="html5.missingapi"}}d=!d}d=d&&(nh(this)||this.C.assets.js);this.C.disable.html5=!d;d||(this.C.args.html5_unavailable="1")}pba(this)}this.L&&
lh(this)}};
g.h.Bw=function(){return this.ib};
g.h.tj=function(){if(!this.ob()){var a=mh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b){if(this.V=!1,!a.isNotServable||!a.isNotServable(this.C.args.video_id)){jh(this);this.L=!0;a=mh(this);a.addEventListener&&(this.W=qh(this,a,"addEventListener"));a.removeEventListener&&(this.ea=qh(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=qh(this,a,d))}for(var e in this.D)this.W(e,
this.D[e]);lh(this);this.ia&&this.ia(this.api);this.R.qa("onReady",this.api)}}else this.mb=g.ze((0,g.r)(this.tj,this),50)}};
g.h.RB=function(){return this.L};
g.h.Jh=function(a,b){if(!this.ob()){var c=rh(this,b);if(c){if(!g.Qa(this.sb,a)&&!this.D[a]){var d=qba(this,a);this.W&&this.W(a,d)}this.R.subscribe(a,c);"onReady"==a&&this.L&&g.ze(g.u(c,this.api),0)}}};
g.h.kK=function(a,b){if(!this.ob()){var c=rh(this,b);c&&g.Rd(this.R,a,c)}};
g.h.Xu=function(a){g.E("a11y-announce",a)};
g.h.VF=function(a){g.E("WATCH_LATER_VIDEO_ADDED",a)};
g.h.WF=function(a){g.E("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.qx=function(){return this.ma||(mh(this)?"html5":null)};
g.h.Yw=function(){return this.ab};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.Je(this.C.assets.js);window.spf.script.ignore(b,a)}g.Be(this.mb);this.V=!1};
g.h.X=function(){oh(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.re(b)}this.Ha=null;for(var a in this.D)g.m[this.D[a]]=null;this.ib=this.C=this.api=null;delete this.na;delete this.H;g.rc.prototype.X.call(this)};g.th={};g.sh="player_uid_"+(1E9*Math.random()>>>0);var Bh;g.Ah=Dg();Bh=0;g.zh=null;g.h=g.Dh.prototype;g.h.vK=function(){this.Ui()||this.init()};
g.h.enable=function(){this.C=1;(0,g.y)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.vK,this),this.subscribe("dispose-"+a,this.dispose,this),g.A("PAGE_NAME")==a&&g.Eh(this))},this)};
g.h.init=function(){g.Re(this.F);this.C=2;this.L&&this.L()};
g.h.Ui=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Re(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.re(a)}};
g.h.subscribe=function(a,b,c){a=g.D(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.He(this.G);this.G=[]};var Fh=g.q("yt.modules.registry_")||{};g.n("yt.modules.registry_",Fh,void 0);g.Ih=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.n("yt.msgs_",g.Ih,void 0);g.n("yt.abuse.botguardInitialized",g.q("yt.abuse.botguardInitialized")||Me,void 0);g.n("yt.abuse.invokeBotguard",g.q("yt.abuse.invokeBotguard")||g.Ne,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",g.q("yt.abuse.dclkstatus.checkDclkStatus")||Te,void 0);g.n("yt.player.exports.navigate",g.q("yt.player.exports.navigate")||g.Sh,void 0);g.n("yt.util.activity.init",g.q("yt.util.activity.init")||g.Xf,void 0);g.n("yt.util.activity.getTimeSinceActive",g.q("yt.util.activity.getTimeSinceActive")||g.Yf,void 0);
g.n("yt.util.activity.setTimestamp",g.q("yt.util.activity.setTimestamp")||Wf,void 0);var Wh=null;g.nk=window.performance&&window.performance.memory;g.Ki={};var di=0,ei=0,$h=[],ci=[],Xh=0,ai={},bi={},Yh=new g.Dd(zba,1E3);var Bba=["server_prefetched_vast","vmap"];var hi,mi;g.li=null;mi="";var oi=null,ri=[];var vi,Qi,Pi,xi,wi,Hba,Kba,Iba,Jba,Li;xi=0;wi=0;Hba=[900,60,"waiting"];Kba=[500,99,"waiting"];Iba=[300,60,"waiting"];Jba=[400,99,"waiting"];Li=[300,101,"done"];var fj=!1;window.yt=window.yt||{};g.n("yt.setConfig",g.pe,void 0);g.n("yt.pushConfigArray",qe,void 0);g.n("yt.getConfig",g.A,void 0);g.n("yt.config.set",g.pe,void 0);g.n("yt.config.pushArray",qe,void 0);g.n("yt.config.get",g.A,void 0);g.n("yt.hasMsg",g.Kh,void 0);g.n("yt.setMsg",Jh,void 0);g.n("yt.setGoogMsg",Lh,void 0);g.n("yt.msgs.has",g.Kh,void 0);g.n("yt.msgs.set",Jh,void 0);g.n("yt.msgs.setGoog",Lh,void 0);g.n("yt.pubsub.publish",g.E,void 0);g.n("yt.pubsub.subscribe",g.D,void 0);
g.n("ytcsi.tick",g.Lg,void 0);g.v(ij,g.Dh);
ij.prototype.enable=function(){window.onload=Fba;window.onunload=Gba;window.onerror=Haa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",ti),window.addEventListener("spfhistory",ui),window.addEventListener("spfrequest",zi),window.addEventListener("spfpartprocess",Gi),window.addEventListener("spfpartdone",Hi),window.addEventListener("spfprocess",Ii),window.addEventListener("spfdone",Mi),window.addEventListener("spferror",Ni),window.addEventListener("spfreload",
Oi),window.addEventListener("spfjsbeforeunload",jj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Mba),this.subscribe("dispose",Nba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
ij.prototype.init=function(){ij.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.A("PAGEFRAME_JS")){var b=g.A("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
a=g.A("JS_COMMON_MODULE");var d=g.A("JS_PAGE_MODULES");d||(d=[a]);a=g.A("JS_DELAY_LOAD",0);0<a?(g.Be(this.D),this.D=g.ze(function(){b&&g.Ke(b,c);window.spf.script.require(d)},a)):(b&&g.Ke(b,c),window.spf.script.require(d));
g.n("yt.abuse.botguardInitialized",Me,void 0);g.n("yt.abuse.invokeBotguard",g.Ne,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",Te,void 0);g.n("yt.player.exports.navigate",g.Sh,void 0);g.n("yt.util.activity.init",g.Xf,void 0);g.n("yt.util.activity.getTimeSinceActive",g.Yf,void 0);g.n("yt.util.activity.setTimestamp",Wf,void 0);ni(g.q("ytplayer.config"));g.q("ytspf.enabled")&&Dba();Zg();jba();hh(!0);g.Kg(!1);g.A("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.ue("service_worker_enabled")?dca():bca())};
ij.prototype.dispose=function(){g.Be(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.Ce(hi);if(a=g.ji())a.removeEventListener("onReady",ii),a.removeEventListener("onStateChange",ii);hh(!1);(a=cj())&&g.uf(a);ij.M.dispose.call(this)};
ij.prototype.disable=function(){ij.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",ti),window.removeEventListener("spfhistory",ui),window.removeEventListener("spfrequest",zi),window.removeEventListener("spfpartprocess",Gi),window.removeEventListener("spfpartdone",Hi),window.removeEventListener("spfprocess",Ii),window.removeEventListener("spfdone",Mi),window.removeEventListener("spferror",Ni),window.removeEventListener("spfreload",Oi),window.removeEventListener("spfjsbeforeunload",
jj));window.onload=null;window.onunload=null;window.onerror=null};
g.Hh(new ij);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:03:19 Oct 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:26:29 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 350.205
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.06
  cdx.remote: 0.055
  esindex: 0.009
  LoadShardBlock: 299.937 (3)
  PetaboxLoader3.datanode: 463.662 (5)
  load_resource: 486.82 (2)
  PetaboxLoader3.resolve: 280.18 (2)
*/