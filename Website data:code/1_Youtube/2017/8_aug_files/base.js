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

var _yt_www={};(function(g){var window=this;var ha,ma,la,na,qa,ra,caa,daa,Ma,ob,maa,sb,paa,qaa,oaa,uc,raa,saa,vc,taa,vaa,Hc,Kc,Lc,Jc,Pc,waa,Sc,Zc,Yc,yaa,bd,cd,dd,ed,zaa,fd,gd,ld,Aaa,md,sd,ud,Baa,zd,Dd,xd,vd,Daa,Cd,Ad,Bd,Gd,Caa,Fd,Pd,Eaa,Td,Vd,Wd,Gaa,ae,be,ce,Haa,le,ve,we,ze,Jaa,Be,Ce,Le,Ue,af,Maa,df,Naa,Oaa,Paa,of,mf,lf,qf,sf,tf,uf,wf,vf,Af,xf,Nf,Of,Pf,Qf,Yf,Zf,Zaa,ig,wg,$aa,Fg,Eg,aba,cba,Vg,Wg,Xg,Yg,$g,Zg,eba,fba,ah,bh,gh,hh,oh,nh,rh,sh,th,iba,wh,Bh,mba,jh,qh,Ah,Fh,pba,qba,zh,Jh,Dh,ih,ph,Ch,Kh,eh,uh,fh,kba,Nh,Ph,Qh,Rh,Uh,Th,Wh,Sh,Xh,Lh,Oh,
wba,Yh,$h,Zh,xba,ei,mi,qi,vi,yba,zba,Aba,Fi,Bba,Cba,Dba,Eba,Fba,Gba,Iba,Jba,Oi,Qi,Si,Wi,Kba,Xi,Zi,Lba,Mba,$i,aj,fj,jj,kj,lj,pj,qj,rj,Sba,Tba,gj,ij,ej,Rba,hj,uj,vj,Uba,wj,xj,Vba,yj,Wba,Xba,zj,Aj,Bj,Cj,Yba,Zba,$ba,aca,bca,dca,fca,eca,cca,Hj,Ij,Jj,da,Kj,Da,baa;g.ca=function(a){return function(){return g.ba[a].apply(this,arguments)}};
g.fa=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ea)ea(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
ha=function(){ha=function(){};
ia.Symbol||(ia.Symbol=aaa)};
ma=function(){ha();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(this)}});
ma=function(){}};
la=function(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
na=function(a){ma();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a};
g.pa=function(a){ma();var b=a[window.Symbol.iterator];return b?b.call(a):la(a)};
qa=function(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}};
ra=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.sa=function(a){return void 0!==a};
g.ta=function(a){return"string"==typeof a};
g.ua=function(a){return"number"==typeof a};
g.n=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.sa(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.q=function(a,b){for(var c=a.split("."),d=b||g.m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d};
g.va=function(){};
g.wa=function(a){a.Ac=void 0;a.getInstance=function(){return a.Ac?a.Ac:a.Ac=new a}};
g.xa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.ya=function(a){return"array"==g.xa(a)};
g.za=function(a){var b=g.xa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Ba=function(a){return"function"==g.xa(a)};
g.Ca=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ea=function(a){return a[Da]||(a[Da]=++baa)};
caa=function(a,b,c){return a.call.apply(a.bind,arguments)};
daa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.r=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.r=caa:g.r=daa;return g.r.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.XV=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
g.Fa=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Fa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ga=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Ha=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Ia=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Ja=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ka=function(a){if(!eaa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(faa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(gaa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(haa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(iaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(jaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(kaa,"&#0;"));return a};
g.Na=function(a,b){for(var c=0,d=(0,g.La)(String(a)).split("."),e=(0,g.La)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",p=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];p=/(\d*)(\D*)(.*)/.exec(p)||["","","",""];if(0==l[0].length&&0==p[0].length)break;c=Ma(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==p[1].length?0:(0,window.parseInt)(p[1],10))||Ma(0==l[2].length,0==p[2].length)||Ma(l[2],p[2]);l=l[3];p=p[3]}while(0==c)}return c};
Ma=function(a,b){return a<b?-1:a>b?1:0};
g.Oa=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.Qa=function(a,b,c){b=g.Pa(a,b,c);return 0>b?null:g.ta(a)?a.charAt(b):a[b]};
g.Pa=function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Sa=function(a,b){return 0<=(0,g.Ra)(a,b)};
g.Ta=function(a){return 0==a.length};
g.Va=function(a,b){var c=(0,g.Ra)(a,b),d;(d=0<=c)&&g.Ua(a,c);return d};
g.Ua=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Wa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Xa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.za(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Za=function(a){return-1!=g.Ya.indexOf(a)};
g.$a=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.ab=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.bb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.cb=function(a,b){var c=g.za(b),d=c?b:arguments;for(c=c?0:1;c<d.length&&(a=a[d[c]],g.sa(a));c++);return a};
g.db=function(a,b){return null!==a&&b in a};
g.eb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.fb=function(a){for(var b in a)return!1;return!0};
g.gb=function(a,b){b in a&&delete a[b]};
g.hb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.ib=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.kb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<jb.length;f++)c=jb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.lb=function(){return g.Za("Trident")||g.Za("MSIE")};
g.nb=function(){return g.Za("Safari")&&!(g.mb()||g.Za("Coast")||g.Za("Opera")||g.Za("Edge")||g.Za("Silk")||g.Za("Android"))};
g.mb=function(){return(g.Za("Chrome")||g.Za("CriOS"))&&!g.Za("Edge")};
ob=function(){return g.Za("iPhone")&&!g.Za("iPod")&&!g.Za("iPad")};
g.pb=function(){return ob()||g.Za("iPad")||g.Za("iPod")};
g.qb=function(a){g.qb[" "](a);return a};
g.rb=function(a,b){try{return g.qb(a[b]),!0}catch(c){}return!1};
maa=function(a,b){var c=laa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
sb=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.ub=function(a){return maa(a,function(){return 0<=g.Na(g.tb,a)})};
g.wb=function(a){return Number(g.vb)>=a};
g.yb=function(){this.C="";this.F=g.xb};
g.Ab=function(a){var b=new g.yb;b.C=a;return b};
g.Cb=function(){this.C="";this.F=Bb};
g.Db=function(a){if(a instanceof g.Cb&&a.constructor===g.Cb&&a.F===Bb)return a.C;g.xa(a);return"type_error:SafeUrl"};
g.Hb=function(a){if(a instanceof g.Cb)return a;a=a.pe?a.xd():String(a);g.Eb.test(a)||(a="about:invalid#zClosurez");return g.Gb(a)};
g.Gb=function(a){var b=new g.Cb;b.C=a;return b};
g.Jb=function(){this.C="";this.F=g.Ib};
g.Kb=function(a){var b=new g.Jb;b.C=a;return b};
g.Mb=function(){this.C="";this.D=g.Lb;this.F=null};
g.Nb=function(a,b){var c=new g.Mb;c.C=a;c.F=b;return c};
g.Ob=function(a,b){var c=b instanceof g.Cb?b:g.Hb(b);a.href=g.Db(c)};
g.Pb=function(a,b){var c=b instanceof g.Cb?b:g.Hb(b);a.href=g.Db(c)};
g.Qb=function(a,b){return g.Nb(b,null)};
g.Rb=function(a,b){this.x=g.sa(a)?a:0;this.y=g.sa(b)?b:0};
g.Sb=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Tb=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.ta(a)?window.document.getElementById(a):a};
g.Ub=function(a){var b=window.document;return g.ta(a)?b.getElementById(a):a};
g.Wb=function(a,b){g.$a(b,function(b,d){b&&b.pe&&(b=b.xd());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Vb.hasOwnProperty(d)?a.setAttribute(Vb[d],b):g.Ga(d,"aria-")||g.Ga(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.Yb=function(a){return g.Xb(a||window)};
g.Xb=function(a){a=a.document;a=g.Zb(a)?a.documentElement:a.body;return new g.Tb(a.clientWidth,a.clientHeight)};
g.ac=function(a){var b=g.$b(a);a=a.parentWindow||a.defaultView;return g.y&&g.ub("10")&&a.pageYOffset!=b.scrollTop?new g.Rb(b.scrollLeft,b.scrollTop):new g.Rb(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
g.$b=function(a){return a.scrollingElement?a.scrollingElement:!g.bc&&g.Zb(a)?a.documentElement:a.body||a.documentElement};
g.dc=function(a,b,c){return g.cc(window.document,arguments)};
g.cc=function(a,b){var c=String(b[0]),d=b[1];if(!naa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ka(d.name),'"');if(d.type){c.push(' type="',g.Ka(d.type),'"');var e={};g.kb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ta(d)?c.className=d:g.ya(d)?c.className=d.join(" "):g.Wb(c,d));2<b.length&&g.ec(a,c,b,2);return c};
g.ec=function(a,b,c,d){function e(c){c&&b.appendChild(g.ta(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.za(f)||g.Ca(f)&&0<f.nodeType?e(f):(0,g.z)(oaa(f)?g.Wa(f):f,e)}};
g.fc=function(a){return window.document.createElement(String(a))};
g.Zb=function(a){return"CSS1Compat"==a.compatMode};
g.gc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.hc=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b)};
g.ic=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};
paa=function(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null};
qaa=function(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a};
g.jc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
oaa=function(a){if(a&&"number"==typeof a.length){if(g.Ca(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Ba(a))return"function"==typeof a.item}return!1};
g.kc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.lc=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
g.mc=function(a,b){return a&&b?b instanceof g.lc?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1};
g.nc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.oc=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return a.left=c,a.top=e,a.width=d-c,a.height=f-e,!0}return!1};
g.pc=function(a){return new g.Tb(a.width,a.height)};
g.qc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.rc=function(a,b){a.style.height=g.qc(b,!0)};
g.sc=function(a,b){a.style.width=g.qc(b,!0)};
g.tc=function(a){return function(){return a}};
uc=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
raa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=t=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],p=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var t=l^d&(f^l);var w=1518500249}else t=d^f^l,w=1859775393;else 60>c?(t=d&f|l&(d|f),w=2400959708):(t=d^f^l,w=3395469782);t=((a<<5|a>>>27)&4294967295)+t+p+w+b[c]&4294967295;p=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=t}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+p&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==t)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[t++]=a[d++],w++,64==t)for(t=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>t?c(l,56-t):c(l,64-(t-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var p=24;0<=p;p-=8)a[d++]=e[k]>>p&255;return a}
for(var e=[],f=[],k=[],l=[128],p=1;64>p;++p)l[p]=0;var t,w;a();return{reset:a,update:c,digest:d,jw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
saa=function(a,b,c){var d=[],e=[];if(1==(g.ya(c)?2:1))return e=[b,a],(0,g.z)(d,function(a){e.push(a)}),vc(e.join(" "));
var f=[],k=[];(0,g.z)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ta(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.z)(d,function(a){e.push(a)});
a=vc(e.join(" "));a=[c,a];g.Ta(k)||a.push(k.join(""));return a.join("_")};
vc=function(a){var b=raa();b.update(a);return b.jw().toLowerCase()};
g.wc=function(a){this.C=a||{cookie:""}};
g.xc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.La)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
taa=function(){var a=[],b=uc(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.wc(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.wc(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.m.location.href);return d&&b&&c?[c,saa(uc(d),b,a||null)].join(" "):null}return null};
g.yc=function(){this.Dc=this.Dc;this.Lb=this.Lb};
g.Bc=function(a,b){g.zc(a,g.u(g.Ac,b))};
g.zc=function(a,b){a.Dc?g.sa(void 0)?b.call(void 0):b():(a.Lb||(a.Lb=[]),a.Lb.push(g.sa(void 0)?(0,g.r)(b,void 0):b))};
g.Ac=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Cc=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1;this.Ms=!0};
g.Dc=function(a,b){g.Cc.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.L=!1;this.xc=null;a&&this.init(a,b)};
g.Gc=function(a){return!(!a||!a[Ec])};
vaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.gh=e;this.key=++uaa;this.wg=this.Uh=!1};
Hc=function(a){a.wg=!0;a.listener=null;a.C=null;a.src=null;a.gh=null};
g.Ic=function(a){this.src=a;this.listeners={};this.C=0};
Kc=function(a,b,c,d,e,f){var k=b.toString();b=a.listeners[k];b||(b=a.listeners[k]=[],a.C++);var l=Jc(b,c,e,f);-1<l?(a=b[l],d||(a.Uh=!1)):(a=new vaa(c,a.src,k,!!e,f),a.Uh=d,b.push(a));return a};
Lc=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Va(a.listeners[c],b);d&&(Hc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Jc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.wg&&f.listener==b&&f.capture==!!c&&f.gh==d)return e}return-1};
g.Nc=function(a,b,c,d,e){if(d&&d.once)return g.Mc(a,b,c,d,e);if(g.ya(b)){for(var f=0;f<b.length;f++)g.Nc(a,b[f],c,d,e);return null}c=g.Oc(c);return g.Gc(a)?a.O(b,c,g.Ca(d)?!!d.capture:!!d,e):Pc(a,b,c,!1,d,e)};
Pc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ca(e)?!!e.capture:!!e,l=g.Qc(a);l||(a[Rc]=l=new g.Ic(a));c=Kc(l,b,c,d,k,f);if(c.C)return c;d=waa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)xaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Sc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Tc++;return c};
waa=function(){var a=yaa,b=Uc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Mc=function(a,b,c,d,e){if(g.ya(b)){for(var f=0;f<b.length;f++)g.Mc(a,b[f],c,d,e);return null}c=g.Oc(c);return g.Gc(a)?a.Le(b,c,g.Ca(d)?!!d.capture:!!d,e):Pc(a,b,c,!0,d,e)};
g.Vc=function(a,b,c,d,e){if(g.ya(b))for(var f=0;f<b.length;f++)g.Vc(a,b[f],c,d,e);else d=g.Ca(d)?!!d.capture:!!d,c=g.Oc(c),g.Gc(a)?a.Wa(b,c,d,e):a&&(a=g.Qc(a))&&(b=a.kf(b,c,d,e))&&g.Wc(b)};
g.Wc=function(a){if(g.ua(a)||!a||a.wg)return!1;var b=a.src;if(g.Gc(b))return Lc(b.wd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(Sc(c),d);Tc--;(c=g.Qc(b))?(Lc(c,a),0==c.C&&(c.src=null,b[Rc]=null)):Hc(a);return!0};
Sc=function(a){return a in Xc?Xc[a]:Xc[a]="on"+a};
Zc=function(a,b,c,d){var e=!0;if(a=g.Qc(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.wg&&(f=Yc(f,d),e=e&&!1!==f)}return e};
Yc=function(a,b){var c=a.listener,d=a.gh||a.src;a.Uh&&g.Wc(a);return c.call(d,b)};
yaa=function(a,b){if(a.wg)return!0;if(!Uc){var c=b||g.q("window.event"),d=new g.Dc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(p){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var k=a.type,l=c.length-1;!d.F&&0<=l;l--)d.currentTarget=c[l],f=Zc(c[l],k,!0,d),e=e&&f;for(l=0;!d.F&&l<c.length;l++)d.currentTarget=c[l],f=Zc(c[l],k,!1,d),e=e&&f}return e}return Yc(a,new g.Dc(b,
this))};
g.Qc=function(a){a=a[Rc];return a instanceof g.Ic?a:null};
g.Oc=function(a){if(g.Ba(a))return a;a[$c]||(a[$c]=function(b){return a.handleEvent(b)});
return a[$c]};
g.ad=function(){g.yc.call(this);this.wd=new g.Ic(this);this.vv=this;this.Yl=null};
bd=function(a,b,c,d){b=a.wd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.wg&&k.capture==c){var l=k.listener,p=k.gh||k.src;k.Uh&&Lc(a.wd,k);e=!1!==l.call(p,d)&&e}}return e&&0!=d.Ms};
cd=function(a,b,c){this.H=c;this.D=a;this.G=b;this.F=0;this.C=null};
dd=function(a,b){a.G(b);a.F<a.H&&(a.F++,b.next=a.C,a.C=b)};
ed=function(a){g.m.setTimeout(function(){throw a;},0)};
zaa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Za("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.r)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.lb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.sa(c.next)){c=c.next;var a=c.Ln;c.Ln=null;a()}};
return function(a){d.next={Ln:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
fd=function(){this.F=this.C=null};
gd=function(){this.next=this.scope=this.lc=null};
ld=function(a,b){hd||Aaa();id||(hd(),id=!0);var c=jd,d=kd.get();d.set(a,b);c.F?c.F.next=d:c.C=d;c.F=d};
Aaa=function(){if(-1!=String(g.m.Promise).indexOf("[native code]")){var a=g.m.Promise.resolve(void 0);hd=function(){a.then(md)}}else hd=function(){var a=md;
!g.Ba(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.Za("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(nd||(nd=zaa()),nd(a)):g.m.setImmediate(a)}};
md=function(){for(var a;a=jd.remove();){try{a.lc.call(a.scope)}catch(b){ed(b)}dd(kd,a)}id=!1};
g.od=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.pd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.rd=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.va)try{var c=this;a.call(b,function(a){g.qd(c,2,a)},function(a){g.qd(c,3,a)})}catch(d){g.qd(this,3,d)}};
sd=function(){this.next=this.context=this.F=this.D=this.C=null;this.G=!1};
ud=function(a,b,c){var d=td.get();d.D=a;d.F=b;d.context=c;return d};
Baa=function(a,b,c){vd(a,b,c,null)||ld(g.u(b,a))};
g.wd=function(a){return new g.rd(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],Baa(p,g.u(f,l),k);
else b(e)})};
g.yd=function(a,b){return xd(a,null,b,void 0)};
zd=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.G||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?zd(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Ad(c),Bd(c,e,3,b)))}a.D=null}else g.qd(a,3,b)};
Dd=function(a,b){a.F||2!=a.C&&3!=a.C||Cd(a);a.G?a.G.next=b:a.F=b;a.G=b};
xd=function(a,b,c,d){var e=ud(null,null,null);e.C=new g.rd(function(a,k){e.D=b?function(c){try{var e=b.call(d,c);a(e)}catch(t){k(t)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.sa(e)&&b instanceof Fd?k(b):a(e)}catch(t){k(t)}}:k});
e.C.D=a;Dd(a,e);return e.C};
g.qd=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,vd(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,Cd(a),3!=b||c instanceof Fd||Caa(a,c)))};
vd=function(a,b,c,d){if(a instanceof g.rd)return Dd(a,ud(b||g.va,c||null,d)),!0;if(g.pd(a))return a.then(b,c,d),!0;if(g.Ca(a))try{var e=a.then;if(g.Ba(e))return Daa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Daa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(p){f(p)}};
Cd=function(a){a.L||(a.L=!0,ld(a.J,a))};
Ad=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Bd=function(a,b,c,d){if(3==c&&b.F&&!b.G)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Gd(b,c,d);else try{b.G?b.D.call(b.context):Gd(b,c,d)}catch(e){Hd.call(null,e)}dd(td,b)};
Gd=function(a,b,c){2==b?a.D.call(a.context,c):a.F&&a.F.call(a.context,c)};
Caa=function(a,b){a.H=!0;ld(function(){a.H&&Hd.call(null,b)})};
Fd=function(a){g.Fa.call(this,a)};
g.Id=function(a,b,c){if(g.Ba(a))c&&(a=(0,g.r)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.r)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.Jd=function(a){g.m.clearTimeout(a)};
g.Kd=function(a,b,c){g.yc.call(this);this.C=a;this.D=b||0;this.F=c;this.wc=(0,g.r)(this.Lk,this)};
g.Ld=function(a){var b=g.q("window.location.href");if(g.ta(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.Md=function(a){if(a.classList)return a.classList;a=a.className;return g.ta(a)&&a.match(/\S+/g)||[]};
g.B=function(a,b){return a.classList?a.classList.contains(b):g.Sa(g.Md(a),b)};
g.Nd=function(){};
Pd=function(a){if(a instanceof g.Nd)return a;if("function"==typeof a.dd)return a.dd(!1);if(g.za(a)){var b=0,c=new g.Nd;c.next=function(){for(;;){if(b>=a.length)throw g.Od;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Qd=function(a,b,c){if(g.za(a))try{(0,g.z)(a,b,c)}catch(d){if(d!==g.Od)throw d;}else{a=Pd(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Od)throw d;}}};
Eaa=function(a){if(g.za(a))return g.Wa(a);a=Pd(a);var b=[];g.Qd(a,function(a){b.push(a)});
return b};
g.Rd=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};
g.Sd=function(a){a=String(a);if(g.Rd(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};
g.Ud=function(a){return(new Td(void 0)).Gj(a)};
Td=function(a){this.C=a};
Vd=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Vd(a,a.C?a.C.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Wd(d,c),c.push(":"),Vd(a,a.C?a.C.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Wd(b,
c);break;case "number":c.push((0,window.isFinite)(b)&&!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Wd=function(a,b){b.push('"',a.replace(Faa,function(a){var b=Xd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Xd[a]=b);return b}),'"')};
g.Yd=function(a){g.yc.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.Zd=function(a,b,c,d){if(b=a.F[b]){var e=a.C;if(b=g.Qa(b,function(a){return e[a+1]==c&&e[a+2]==d}))return a.rd(b)}return!1};
Gaa=function(a,b,c){ld(function(){a.apply(b,c)})};
g.$d=function(a){this.C=a};
ae=function(a){this.C=a};
be=function(a){this.data=a};
ce=function(a){return!g.sa(a)||a instanceof be?a:new be(a)};
g.de=function(a){this.C=a};
g.fe=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.ee)()||!!b&&b>(0,g.ee)()};
g.ge=function(a){this.C=a};
Haa=function(){};
g.he=function(){};
g.je=function(a){this.C=a};
g.ke=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
le=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.C=a};
g.me=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.ne=function(a){return a.match(Iaa)};
g.oe=function(a){return a?(0,window.decodeURI)(a):a};
g.pe=function(a){return g.oe(g.ne(a)[3]||null)};
g.qe=function(a){a=g.ne(a);return g.me(null,null,null,null,a[5],a[6],a[7])};
g.re=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.se=function(a,b,c){if(g.ya(b))for(var d=0;d<b.length;d++)g.se(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ia(b)))};
g.te=function(a){var b=[],c;for(c in a)g.se(c,a[c],b);return b.join("&")};
g.ue=function(a,b){var c=g.te(b);return g.re(a,c)};
ve=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
we=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.ye=function(a){we(g.xe,arguments)};
g.C=function(a,b){return a in g.xe?g.xe[a]:b};
ze=function(a,b){var c=g.C(a,void 0);c?c.push(b):g.ye(a,[b])};
g.Ae=function(a,b,c,d,e){var f=g.q("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.C("ERRORS",[]),f.push([a,b,c,d,e]),g.ye("ERRORS",f))};
Jaa=function(a,b,c,d,e){var f=!1,k=g.xe.EXPERIMENT_FLAGS;if((k=k?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,p=k.length;l<p;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.ta(a)||(window.ErrorEvent&&a instanceof window.ErrorEvent&&(d=a.colno),a="Unknown error",b="Unknown file",c=0),e=Error(),e.message=a,e.fileName=b,e.lineNumber=c,(0,window.isNaN)(d)||(e.columnNumber=d)),g.Ae(e))};
Be=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Ae(b)}}:a};
Ce=function(a){return g.C("EXPERIMENT_FLAGS",{})[a]};
g.De=function(a){return!!Ce(a)};
g.Ee=function(a){a=Ce(a);return Number(a||0)};
g.D=function(a,b){return a?a.dataset?a.dataset[g.Fe(b)]:a.getAttribute("data-"+b):null};
g.Fe=function(a){return Ge[a]||(Ge[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.He=function(a){window.clearInterval(a)};
g.Ie=function(a){window.clearTimeout(a)};
g.Je=function(a,b){g.Ba(a)&&(a=Be(a));return window.setInterval(a,b)};
g.Ke=function(a,b){g.Ba(a)&&(a=Be(a));return window.setTimeout(a,b)};
g.E=function(a,b,c){var d=Le();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Me[e]&&b.apply(c||window,d)};
try{Ne[a]?k():g.Ke(k,0)}catch(l){g.Ae(l)}},c);
Me[e]=!0;Oe[a]||(Oe[a]=[]);Oe[a].push(e);return e}return 0};
g.Pe=function(a){var b=Le();b&&(g.ua(a)?a=[a]:g.ta(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.z)(a,function(a){b.unsubscribeByKey(a);delete Me[a]}))};
Le=function(){return g.q("ytPubsubPubsubInstance")};
g.F=function(a,b){var c=Le();return c?c.publish.apply(c,arguments):!1};
g.Qe=function(a,b){Ne[a]=!0;var c=Le();c=c?c.publish.apply(c,arguments):!1;Ne[a]=!1;return c};
g.Re=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Kaa,""),b=b.replace(Laa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.Se=function(a,b){var c=g.Re(a);window.spf.script.load(a,c,b)};
Ue=function(){return null!=g.Te};
g.Ve=function(){return g.Te?g.Te.invoke():null};
g.We=function(){return!!g.q("yt.scheduler.instance")};
g.Xe=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Ke(a,c||0)};
g.Ye=function(a,b){return g.Xe(a,1,b)};
g.Ze=function(a){if(!(0,window.isNaN)(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.Ie(a)}};
g.$e=function(a){for(var b=0,c=a.length;b<c;b++)g.Ze(a[b])};
af=function(){return(0,window.parseInt)(g.C("DCLKSTAT",0),10)};
g.bf=function(a){return a&&"status"in a?a.status:-1};
Maa=function(){if(!cf)return null;var a=cf();return"open"in a?a:null};
df=function(a){switch(g.bf(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.ef=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Ja(e[0]||"");e=g.Ja(e[1]||"");f in b?g.ya(b[f])?g.Xa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.ff=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.ef(e[1]||"");for(var f in b)if(c||!g.db(e,f))e[f]=b[f];return g.ue(a,e)+d};
g.gf=function(a,b){return g.ff(a,b||{},!0)};
Naa=function(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=g.ne(a)[1]||null,e=g.pe(a);d&&e?(d=c,c=g.ne(a),d=g.ne(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.pe(c)==e&&(Number(g.ne(c)[4]||null)||null)==(Number(g.ne(a)[4]||null)||null):!0;for(var f in hf){if((e=d=g.C(hf[f]))&&!(e=c)){var k=a;e=f;var l=g.C("CORS_HEADER_WHITELIST")||{};e=(k=g.pe(k))?(l=l[k])?g.Sa(l,e):!1:!0}e&&(b[f]=d)}return b};
Oaa=function(a,b){var c=g.C("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Bw&&(!g.pe(a)||b.withCredentials||g.pe(a)==window.document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.ka&&b.ka[c])};
g.G=function(a,b){var c=b.format||"JSON";b.pB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var d=g.C("XSRF_FIELD_NAME",void 0),e=g.C("XSRF_TOKEN",void 0),f=b.Ba;f&&(f[d]&&delete f[d],a=g.gf(a,f));f=b.postBody||"";var k=b.ka;Oaa(a,b)&&(k||(k={}),k[d]=e);k&&g.ta(f)&&(d=g.ef(f),g.kb(d,k),f=b.ds&&"JSON"==b.ds?JSON.stringify(d):g.te(d));d=f||k&&!g.fb(k);!kf&&d&&"POST"!=b.method&&(kf=!0,g.Ae(Error("AJAX request with postData should use POST")));
var l=!1,p,t=lf(a,function(a){if(!l){l=!0;p&&g.Ie(p);var d=df(a),e=null;if(d||400<=a.status&&500>a.status)e=Paa(c,a,b.sb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||g.m;d?b.Z&&b.Z.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.cb&&b.cb.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.mc&&0<b.timeout&&(p=g.Ke(function(){l||(l=!0,t.abort(),g.Ie(p),b.mc.call(b.context||g.m,t))},b.timeout));
return t};
Paa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?mf(b):null)d={},(0,g.z)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.nf(a)})}c&&of(d);
return d};
of=function(a){if(g.Ca(a))for(var b in a)"html_content"==b||g.Ha(b,"_html")?a[b]=g.Qb(g.Ab("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):of(a[b])};
mf=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.nf=function(a){var b="";(0,g.z)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.pf=function(a,b){b.method="POST";b.ka||(b.ka={});return g.G(a,b)};
lf=function(a,b,c,d,e,f,k){function l(){4==(p&&"readyState"in p?p.readyState:0)&&b&&Be(b)(p)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var p=Maa();if(!p)return null;"onloadend"in p?p.addEventListener("loadend",l,!1):p.onreadystatechange=l;p.open(c,a,!0);f&&(p.responseType=f);k&&(p.withCredentials=!0);c="POST"==c;if(e=Naa(a,e))for(var t in e)p.setRequestHeader(t,e[t]),"content-type"==t.toLowerCase()&&(c=!1);c&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded");p.send(d);return p};
g.rf=function(){var a=g.cb(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||g.C("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||g.De("html5_serverside_pagead_id_sets_cookie")?"//web.archive.org/web/20170801000112/https://googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//web.archive.org/web/20170801000112/https://googleads.g.doubleclick.net/pagead/id",b=g.ib(Qaa);return new g.rd(function(c,d){b.Z=function(a){df(a)?c(a):d(new qf("Request failed, status="+a.status,"net.badstatus",a))};
b.onError=function(a){d(new qf("Unknown request error","net.unknown",a))};
b.mc=function(a){d(new qf("Request timed out","net.timeout",a))};
g.G(a,b)})};
qf=function(a,b,c){g.Fa.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"};
sf=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
tf=function(a){var b=new sf;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
uf=function(a){var b=new sf;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
wf=function(a){g.Fa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof vf;this.isTimeout=a instanceof Raa&&a.errorCode==Saa.TIMEOUT;this.isCanceled=a instanceof Fd};
vf=function(){g.Fa.call(this,"Biscotti ID is missing from server")};
g.Bf=function(a){a=a.responseText;if(!g.Ga(a,")]}'"))throw new vf;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new vf;a=a.id;xf(a);g.zf=uf(a);Af(18E5,2);return a};
g.Cf=function(a,b){var c=new wf(b);xf("");g.zf=tf(c);0<a&&Af(12E4,a-1);throw c;};
Af=function(a,b){g.Ke(function(){g.yd(g.rf().then(g.Bf,function(a){return g.Cf(b,a)}),g.va)},a)};
xf=function(a){g.n("yt.ads.biscotti.lastId_",a,void 0)};
g.Df=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Taa+"VisibilityState";if(b in a)return a[b]};
g.Gf=function(a){var b=a.__yt_uid_key;b||(b=Ef(),a.__yt_uid_key=b);return b};
g.Hf=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Uaa||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.C=a.pageX;this.F=a.pageY}};
g.Jf=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.eb(If,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.H=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Jf(a,b,c,d);if(e)return e;e=++Kf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.Hf(d);if(!g.kc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.Hf(b);
b.currentTarget=a;return c.call(a,b)};
k=Be(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);If[e]=[a,b,c,k,d];return e};
g.I=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.z)(a,function(a){if(a in If){var b=If[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete If[a]}}))};
g.Lf=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Mf=function(a){for(var b in If)If[b][0]==a&&g.I(b)};
Nf=function(a){g.yc.call(this);this.C=[];this.F=a||this};
Of=function(a,b,c,d){d=Be((0,g.r)(d,a.F));d={target:b,name:c,Be:d};b.addEventListener(c,d.Be,void 0);a.C.push(d)};
Pf=function(a){for(;a.C.length;){var b=a.C.pop();b.target.removeEventListener(b.name,b.Be)}};
Qf=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.ib(Vaa);this.assets=a.assets||{};this.attrs=a.attrs||g.ib(Waa);this.params=a.params||g.ib(Xaa);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Rf=function(a){a instanceof Qf||(a=new Qf(a));return a};
g.Tf=function(){this.C=this.minor=this.major=0;var a=g.q("window.navigator.plugins"),b=g.q("window.navigator.mimeTypes");a=a&&a["Shockwave Flash"];b=b&&b["application/x-shockwave-flash"];if(b=a&&b&&b.enabledPlugin&&a.description||""){a=b.indexOf("Shockwave Flash");0<=a&&(b=b.substr(a+15));a=b.split(" ");var c="";b="";for(var d=0,e=a.length;d<e;d++)if(c)if(b)break;else b=a[d];else c=a[d];c=c.split(".");a=(0,window.parseInt)(c[0],10)||0;c=(0,window.parseInt)(c[1],10)||0;d=0;if("r"==b.charAt(0)||"d"==
b.charAt(0))d=(0,window.parseInt)(b.substr(1),10)||0;b=[a,c,d]}else b=[0,0,0];this.major=b[0];this.minor=b[1];this.C=b[2];if(0>=this.major){if(g.Sf)try{var f=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(t){f=null}else{var k=window.document.body;var l=window.document.createElement("object");l.setAttribute("type","application/x-shockwave-flash");f=k.appendChild(l)}if(f&&"GetVariable"in f)try{var p=f.GetVariable("$version")}catch(t){p=""}k&&l&&k.removeChild(l);(f=p||"")?(f=f.split(" ")[1].split(","),
f=[(0,window.parseInt)(f[0],10)||0,(0,window.parseInt)(f[1],10)||0,(0,window.parseInt)(f[2],10)||0]):f=[0,0,0];this.major=f[0];this.minor=f[1];this.C=f[2]}};
g.Uf=function(a,b){var c="string"==typeof b?b.split("."):[b,void 0,void 0];c[0]=(0,window.parseInt)(c[0],10)||0;c[1]=(0,window.parseInt)(c[1],10)||0;c[2]=(0,window.parseInt)(c[2],10)||0;return a.major>c[0]||a.major==c[0]&&a.minor>c[1]||a.major==c[0]&&a.minor==c[1]&&a.C>=c[2]};
g.Xf=function(a){return a in g.Wf};
Yf=function(a){we(g.Wf,arguments)};
Zf=function(a){we(g.Wf,arguments)};
g.$f=function(a,b,c){if(b){a=g.ta(a)?g.Ub(a):a;var d=g.ib(c.attrs);d.tabindex=0;var e=g.ib(c.params);e.flashvars=g.te(c.args);if(g.Sf){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=window.document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(var k in e)d=window.document.createElement("param"),d.setAttribute("name",k),d.setAttribute("value",e[k]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=window.document.createElement("embed");b.setAttribute("name",
d.id);for(var l in d)b.setAttribute(l,d[l]);for(var p in e)b.setAttribute(p,e[p])}e=window.document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}};
g.cg=function(a,b,c,d,e,f){b=void 0===b?"ERROR":b;e=void 0===e?!1:e;f=f||{};f.name=c||g.C("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=ag.value||(c=a.stacktrace,d=a.columnNumber,a=g.Ld(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),bg[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){d=a.fileName;
b={Ba:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":f.name},ka:{url:g.C("PAGE_NAME",window.location.href),file:d},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ka.stack=c);for(var k in f)b.ka["client."+k]=f[k];if(k=g.C("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ka[l]=k[l];g.G("/error_204",b);bg[a.message]=!0;ag.value++}};
g.dg=function(a,b,c,d,e){this.D=a;this.H=b;this.G=c;this.F=d;this.C=e};
g.eg=function(a){return new g.dg(a)};
g.fg=function(a){var b={};void 0!==a.D?b.trackingParams=a.D:(b.veType=a.H,null!=a.G&&(b.veCounter=a.G),null!=a.F&&(b.elementIndex=a.F));void 0!==a.C&&(b.dataElement=g.fg(a.C));return b};
g.lg=function(a,b){g.gg[a.endpoint]=b;if(a.Yh){var c=a.Yh;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);hg[a.Yh.token]=d;c=ig(a.endpoint,a.Yh.token)}else c=ig(a.endpoint);c.push(a.Rb);d=g.Ee("web_logging_max_batch")||20;c.length>=d?g.jg():g.kg()};
g.jg=function(){g.Ie(g.mg);if(!g.fb(g.ng)){for(var a in g.ng){var b=g.og[a];if(!b){var c=g.gg[a];if(!c)continue;b=new c;g.og[a]=b}c=void 0;var d=a,e=b,f=Yaa[d],k=pg[d]||{};pg[d]=k;b=Math.round((0,g.qg)());for(c in g.ng[d]){var l=g.rg(e);l[f]=ig(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var p=hg[c];if(p)a:{var t=l,w=c;if(p.videoId)var A="VIDEO";else if(p.playlistId)A="PLAYLIST";else break a;t.credentialTransferTokenTargetId=p;t.context=
t.context||{};t.context.user=t.context.user||{};t.context.user.credentialTransferTokens=[{token:w,scope:A}]}delete hg[c];g.sg(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.ng[a]}g.fb(g.ng)||g.kg()}};
Zaa=function(){var a=[],b;for(b in g.ng){var c=pg[b]||{};pg[b]=c;for(var d in g.ng[b]){var e=ig(b,d);c.storedEventsCount=c.storedEventsCount||0;c.storedEventsCount+=e.length}}d=Math.round((0,g.qg)());for(b in pg)c=pg[b],b in tg?c.eventType=tg[b]:c.eventType="UNKNOWN_TYPE",e=ug[b],c.metricIntervalMs=e?d-e:d-g.vg,a.push(c),ug[b]=d,delete pg[b];return a};
g.kg=function(){g.Ie(g.mg);g.mg=g.Ke(g.jg,g.C("LOGGING_BATCH_TIMEOUT",1E4))};
ig=function(a,b){b||(b="");g.ng[a]=g.ng[a]||{};g.ng[a][b]=g.ng[a][b]||[];return g.ng[a][b]};
g.xg=function(){if(null==g.q("_lact",window)){var a=(0,window.parseInt)(g.C("LACT"),10);a=(0,window.isFinite)(a)?(0,g.ee)()-Math.max(a,0):-1;g.n("_lact",a,window);g.n("_fact",a,window);-1==a&&wg();g.H(window.document,"keydown",wg);g.H(window.document,"keyup",wg);g.H(window.document,"mousedown",wg);g.H(window.document,"mouseup",wg);g.E("page-mouse",wg);g.E("page-scroll",wg);g.E("page-resize",wg)}};
wg=function(){null==g.q("_lact",window)&&(g.xg(),g.q("_lact",window));var a=(0,g.ee)();g.n("_lact",a,window);-1==g.q("_fact",window)&&g.n("_fact",a,window);(a=g.q("ytglobal.ytUtilActivityCallback_"))&&a()};
g.yg=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.ee)()-a,0)};
g.Ag=function(a,b,c,d){var e=g.zg,f={};f.eventTimeMs=Math.round(c||(0,g.qg)());f[a]=b;f.context={lastActivityMs:String(c?-1:g.yg())};a=g.De("web_system_health_gel2")&&"systemHealthCaptured"==a?"log_event2":"log_event";g.lg({endpoint:a,Rb:f,Yh:d},e)};
$aa=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.zg=function(a){this.C=a||{apiaryHost:g.C("APIARY_HOST",void 0),VV:g.C("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!g.C("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:g.C("GAPI_HINT_PARAMS",void 0),innertubeApiKey:g.C("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.C("INNERTUBE_API_VERSION",void 0),rB:g.C("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),tB:g.C("INNERTUBE_CONTEXT_HL",void 0),sB:g.C("INNERTUBE_CONTEXT_GL",void 0),
xhrApiaryHost:g.C("XHR_APIARY_HOST",void 0)||"",uB:g.C("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
g.rg=function(a){a=a.C;a={client:{hl:a.tB,gl:a.sB,clientName:a.rB,clientVersion:a.innertubeContextClientVersion}};g.C("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.C("DELEGATED_SESSION_ID")});return{context:a}};
g.sg=function(a,b,c,d){!g.C("VISITOR_DATA")&&.01>Math.random()&&g.Ae(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.C("VISITOR_DATA","")},ka:c,ds:"JSON",mc:d.mc,Z:function(a,b){d.Z&&d.Z(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=taa();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.C("SESSION_INDEX",0));var k="",l=a.C.uB;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);g.pf(""+k+$aa(a.C.innertubeApiVersion,b,c)+"?alt=json&key="+a.C.innertubeApiKey,e)};
g.Bg=function(a,b){g.Ag(a,b,void 0,void 0)};
g.Cg=function(){g.De("log_web_meta")&&Zaa().forEach(function(a){g.Bg("delayedEventMetricCaptured",a)})};
g.Dg=function(a,b,c){(0,g.z)(b,function(b){g.Ag("visualElementHidden",{csn:a,ve:g.fg(b),eventType:c?16:8})})};
Fg=function(a,b){var c=Object.keys(a).join("");Eg("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Ag("latencyActionInfo",a))};
Eg=function(a){Gg[a]=Gg[a]||{count:0};var b=Gg[a];b.count++;b.time=(0,g.qg)();Hg||(Hg=g.Xe(aba,0,5E3));return 10<b.count?(11==b.count&&g.cg(Error("CSI data exceeded logging limit with key: "+a)),!0):!1};
aba=function(){var a=(0,g.qg)(),b;for(b in Gg)6E4<a-Gg[b].time&&delete Gg[b];Hg=0};
g.Kg=function(a){if(!g.Ig&&!g.Jg||!window.JSON)return null;try{var b=g.Ig.get(a)}catch(c){}if(!g.ta(b))try{b=g.Jg.get(a)}catch(c){}if(!g.ta(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.Lg=function(){var a=g.C("ROOT_VE_TYPE",void 0);return a?new g.dg(void 0,a,void 0):null};
g.Mg=function(){return g.Kg("yt-interaction-logging-parent")};
g.Ng=function(){var a=g.C("client-screen-nonce",void 0);a||(a=g.C("EVENT_ID",void 0));return a};
g.Og=function(a,b){a=a||"";var c=a.match(bba);window.spf.style.load(a,c?c[1]:"",b)};
g.Pg=function(a,b,c){a&&(c&&(c=g.Ya,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.dc("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.jc(a).body.appendChild(a)):g.C("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?lf(a,b):cba(a,b))};
cba=function(a,b){var c=new window.Image,d=""+dba++;Qg[d]=c;c.onload=c.onerror=function(){b&&Qg[d]&&b();delete Qg[d]};
c.src=a};
g.Rg=function(a,b){this.version=a;this.args=b};
g.Sg=function(a,b){this.topic=a;this.Zh=b};
g.Ug=function(a,b){var c=g.Tg();c&&c.publish.call(c,a.toString(),a,b)};
g.Tg=function(){return g.q("ytPubsub2Pubsub2Instance")};
Vg=function(){var a=g.C("TIMING_TICK_EXPIRATION");a||(a={},g.ye("TIMING_TICK_EXPIRATION",a));return a};
Wg=function(){var a=Vg(),b;for(b in a)g.Ze(a[b]);g.ye("TIMING_TICK_EXPIRATION",{})};
Xg=function(a,b){g.Rg.call(this,1,arguments)};
Yg=function(a,b){g.Rg.call(this,1,arguments)};
$g=function(a){this.C=a||window;this.W=this.D=0;if(this.C.performance&&this.C.performance.timing&&this.C.performance.getEntriesByType){a=g.Yb(this.C);this.J=new g.nc(0,0,a.width,a.height);var b;a=[];for(var c=this.C.document.getElementsByTagName("*"),d=0,e=c.length;d<e;d++){var f=c[d];if("IMG"==f.tagName||"IFRAME"==f.tagName)if(b=Zg(this,f,f.src)){if("IFRAME"==f.tagName){try{var k=(new $g(f.contentWindow)).D}catch(l){k=0}0<k&&(b.timing=k)}a.push(b)}(b=this.C.getComputedStyle(f)["background-image"])&&
(b=$g.C.exec(b))&&1<b.length&&(b=Zg(this,f,b[1]))&&a.push(b)}this.F=a;this.H=this.C.performance.getEntriesByType("resource");this.R=this.C.performance.getEntriesByType("mark");k={};a=0;for(c=this.H.length;a<c;a++)d=this.H[a],k[d.name]=d.responseEnd;a=0;for(c=this.R.length;a<c;a++)d=this.R[a],"mark_iframe_loaded: "==d.name.slice(0,20)&&(k[d.name.slice(20)]=d.startTime);a=0;for(c=this.F.length;a<c;a++)d=this.F[a],d.timing||(d.timing=k[d.url]||0);this.L=eba(this);this.G=fba(this);f=k=0;if(this.G.length)for(c=
a=0,d=this.G.length;c<d;c++)e=this.G[c],f=e.timing-f,0<f&&1>a&&(k+=(1-a)*f),f=e.timing,a=e.progress;this.D=Math.round(k||this.L);this.W=f}};
Zg=function(a,b,c){return c&&b.getBoundingClientRect&&(b=b.getBoundingClientRect(),b=new g.nc(b.left,b.top,b.width,b.height),g.oc(b,a.J))?new ah(b,c):null};
eba=function(a){var b=a.C,c=b.performance.timing.navigationStart;if("msFirstPaint"in b.performance.timing)var d=b.performance.timing.C-c;else if("chrome"in b&&"loadTimes"in b.chrome){var e=b.chrome.loadTimes(),f=e.firstPaintTime;if(0<f){var k=e.startLoadTime;"requestTime"in e&&(k=e.requestTime);f>=k&&(d=1E3*(f-k))}}if(void 0===d||0>d||12E4<d){d=b.performance.timing.responseStart-c;var l={};b=b.document.getElementsByTagName("head")[0].children;c=0;for(e=b.length;c<e;c++)f=b[c],"SCRIPT"==f.tagName&&
f.src&&!f.async?l[f.src]=!0:"LINK"==f.tagName&&"stylesheet"==f.rel&&f.href&&(l[f.href]=!0);a.H.some(function(a){if(!l[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===d||a>d)d=a})}return Math.max(d,0)||0};
fba=function(a){var b={0:0},c=0;var d=a.L;for(var e=0,f=a.F.length;e<f;e++){var k=a.F[e],l=d;k.timing>d&&(l=k.timing);b[l]||(b[l]=0);k=g.pc(k.region).Yf();b[l]+=k;c+=k}e=g.pc(a.J).Yf();0<e&&(e=.1*Math.max(e-c,0),d in b||(b[d]=0),b[d]+=e,c+=e);a=[];if(c){for(var p in b)d=new bh((0,window.parseFloat)(p),b[p]),a.push(d);a.sort(function(a,b){return a.timing-b.timing});
e=b=0;for(f=a.length;e<f;e++)d=a[e],b+=d.Yf,d.progress=b/c}return a};
ah=function(a,b){this.region=a;this.url=b};
bh=function(a,b){this.Yf=b;this.timing=a};
g.dh=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.ee)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ch)for(a=1,b=0;b<ch.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ch.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&
63));return a.join("")};
gh=function(a){eh(a);gba();fh(!1,a);a||(g.C("TIMING_ACTION")&&g.ye("PREVIOUS_ACTION",g.C("TIMING_ACTION")),g.ye("TIMING_ACTION",""))};
g.lh=function(a,b,c){b||"_"==a[0]||hh(a,c);var d=ih(c),e=b||(0,g.qg)();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=Vg();var f=e[a];f&&(g.Ze(f),e[a]=0);jh(a,b,c)||g.kh(!1,c);return d[a]};
hh=function(a,b){mh.mark&&(g.Ga(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),mh.mark(a))};
oh=function(a,b){nh("yt_sts",a,void 0);g.lh("_start",b,void 0)};
nh=function(a,b,c){ph(c)[a]=b;qh(a,b,c)};
rh=function(a){var b=ph(void 0);return a in b};
sh=function(a){var b=ih(a);if(b.aft)return b.aft;a=g.C((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
th=function(a){g.lh("nreqs",a.requestStart,void 0);g.lh("nress",a.responseStart,void 0);g.lh("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.lh("nrs",a.redirectStart,void 0),g.lh("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.lh("ndnss",a.domainLookupStart,void 0),g.lh("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.lh("ntcps",a.connectStart,void 0),g.lh("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.lh("nstcps",a.secureConnectionStart,void 0),g.lh("ntcpe",a.connectEnd,void 0))};
g.kh=function(a,b){if(!uh(b)){var c=g.C((b||"")+"TIMING_ACTION",void 0),d=ih(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=sh(b)))if(g.De("tighter_critical_section")&&!vh&&(g.Ug(hba,new Xg(Math.round(c-d._start),b)),vh=!0),a||b)wh(b);else{c=!0;var e=g.C("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&wh(b)}}};
iba=function(){switch(g.Df()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
wh=function(a){Wg();if(!g.De("csi_on_gel")){var b=ih(a),c=ph(a),d=b._start,e;for(e in b)if(g.Ga(e,"_")&&g.ya(b[e])){var f=e.slice(1);if(f in jba){var k=(0,g.yh)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.q("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))zh(k,f),gh(a)}else{var l=g.C("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.C((a||"")+"TIMING_ACTION",void 0)};var p=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var t=window.location.protocol+g.q("ytplayer.config.assets.js");(t=mh.getEntriesByName?mh.getEntriesByName(t)[0]:null)?c.h5jse=Math.round(c.h5jse-t.responseEnd):delete c.h5jse}b.aft=sh(a);kba(a)&&"youtube"==l&&(nh("yt_lt","hot_bg",a),l=
b.vc,t=b.pbs,delete b.aft,c.aft=Math.round(t-l));for(var w in c)"_"!=w.charAt(0)&&(k[w]=c[w]);b.ps=(0,g.qg)();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,w.push(e+"."+l));k.rt=w.join(",");(b=g.q("ytdebug.logTiming"))&&b(k,c);zh(k,f,a);g.Ug(lba,new Yg(c.aft+(p||0),a))}}};
Bh=function(a){if(!uh(void 0)){if(!g.De("send_empty_timing")){var b=g.C("CSI_SERVICE_NAME","youtube");if(!g.C("TIMING_ACTION",void 0)||!b)return}g.lh("aa",void 0,void 0);nh("ap",1,void 0);nh("yt_fss",a,void 0);!g.De("enable_csi_abandonment_info")||rh("yt_lt")||Ah();wh(void 0)}};
mba=function(){if("cold"==ph().yt_lt){var a=ih(),b=Ch(),c;for(c in a)g.Ga(c,"_")||"tick_"+c in b||jh(c,a[c]);a=ph();for(c in a)"info_"+c in b||qh(c,a[c])}};
jh=function(a,b,c){Ch(c)["tick_"+a]=b;c||b||(0,g.qg)();return g.De("csi_on_gel")?(c=Dh(c),"_start"==a?Eg("baseline_"+c)||g.Ag("latencyActionBaselined",{clientActionNonce:c},b):Eg("tick_"+a+"_"+c)||g.Ag("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
qh=function(a,b,c){Ch(c)["info_"+a]=b;if(g.De("csi_on_gel"))if(a in Eh){var d={};a=Eh[a];g.Sa(nba,a)&&(b=!!b);a=a.split(".");for(var e=d,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];d[a[a.length-1]]=b;b=Dh(c);Fg(d,b)}else g.Sa(oba,a)||g.Ae(Error("Unknown label "+a+" logged with GEL CSI."))};
Ah=function(){var a=g.C("TIMING_INFO",{});for(b in a)nh(b,a[b]);nh("is_nav",1);(a=g.Ng())&&nh("csn",a);(a=g.C("PREVIOUS_ACTION",void 0))&&nh("pa",a);var b=ph();b.p=g.C("CLIENT_PROTOCOL")||"unknown";b.t=g.C("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&nh("ba",1);nh("yt_vis",iba());if("cold"==b.yt_lt){a=mh.timing||{};g.De("cold_load_nav_start_web")&&a.navigationStart&&(g.lh("srt",a.responseStart),1!=b.prerender&&oh("n",a.navigationStart));a:if(a.msFirstPaint)b=Math.max(0,
a.msFirstPaint);else{if(b=window.chrome)if(b=b.loadTimes,g.Ba(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;b=Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0);break a}b=0}0<b&&g.lh("fpt",b);th(a);mh.getEntriesByType&&pba();a=g.C("SPEEDINDEX_FOR_ACTIONS",void 0);b=g.C("TIMING_ACTION",void 0);a&&-1<a.indexOf(b)&&(a=(0,g.qg)(),b=new $g,c=(0,g.qg)(),0<b.D&&(nh("si",b.D),g.lh("vsc",Fh(b.W)),g.lh("sics",a),g.lh("sice",
c)));a=[];if(window.document.querySelector&&mh&&mh.getEntriesByName)for(var d in Gh)b=Gh[d],qba(d,b)&&a.push(b);a.length&&nh("rc",a.join(","))}g.De("csi_on_gel")&&(d={},d.actionType=rba[g.C("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Dh(),Fg(d,a))};
Fh=function(a){return Math.round(mh.timing.navigationStart+a)};
pba=function(){var a=window.location.protocol,b=mh.getEntriesByType("resource"),c=g.Qa(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170801000112/https://fonts.googleapis.com/css?family=")});
b=(0,g.Hh)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170801000112/https://fonts.gstatic.com/s/")});
b=(0,g.Ih)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0});
c&&0<c.startTime&&0<c.responseEnd&&(g.lh("wfcs",Fh(c.startTime)),g.lh("wfce",Fh(c.responseEnd)));b&&0<b.startTime&&0<b.responseEnd&&(g.lh("wffs",Fh(b.startTime)),g.lh("wffe",Fh(b.responseEnd)))};
qba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=mh.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.lh("rsf_"+b,d+Math.round(c.fetchStart)),g.lh("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(rh("rc")||nh("rc",""),0===c.transferSize))?!0:!1:!1};
zh=function(a,b,c){if(g.De("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.n("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||g.Pg(a,void 0)}catch(f){g.Pg(a,void 0)}else g.Pg(a);fh(!0,c)};
Jh=function(a){g.n("ytglobal.timingready_",a,void 0)};
Dh=function(a){var b=Kh(a).nonce;b||(b=g.dh(),Kh(a).nonce=b);return b};
ih=function(a){return Kh(a).tick};
ph=function(a){return Kh(a).info};
Ch=function(a){a=Kh(a);"gel"in a||(a.gel={});return a.gel};
Kh=function(a){return g.q("ytcsi."+(a||"")+"data_")||eh(a)};
eh=function(a){var b={tick:{},info:{}};g.n("ytcsi."+(a||"")+"data_",b,void 0);return b};
uh=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
fh=function(a,b){g.n("yt.timing."+(b||"")+"pingSent_",a,void 0)};
kba=function(a){var b=ih(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==ph(a).yt_pvis};
Nh=function(a,b){g.yc.call(this);this.J=this.G=a;this.ia=b;this.R=!1;this.api={};this.ib=this.ea=null;this.ma=new g.Yd;g.Bc(this,this.ma);this.D={};this.W=this.jb=this.F=this.Eb=this.C=null;this.na=!1;this.N=this.L=this.H=this.Y=null;this.qb={};this.Bc=["onReady"];this.Aa=new Nf(this);g.Bc(this,this.Aa);this.Dd=null;this.dc=window.NaN;this.ab={};Lh(this);this.Xd("onDetailedError",(0,g.r)(this.nG,this));this.Xd("onTabOrderChange",(0,g.r)(this.Rv,this));this.Xd("onTabAnnounce",(0,g.r)(this.wn,this));
this.Xd("WATCH_LATER_VIDEO_ADDED",(0,g.r)(this.qG,this));this.Xd("WATCH_LATER_VIDEO_REMOVED",(0,g.r)(this.rG,this));g.Mh||(this.Xd("onMouseWheelCapture",(0,g.r)(this.aG,this)),this.Xd("onMouseWheelRelease",(0,g.r)(this.bG,this)));this.Xd("onAdAnnounce",(0,g.r)(this.wn,this));this.V=new Nf(this);g.Bc(this,this.V);this.Oc=!1;this.tb=null};
Ph=function(a,b){a.Eb=b;a.C=b.clone();a.F=a.C.attrs.id||a.F;"video-player"==a.F&&(a.F=a.ia,a.C.attrs.id=a.ia);a.J.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F);a.C.args.enablejsapi="1";a.C.args.playerapiid=a.ia;a.jb||(a.jb=Oh(a,a.C.args.jsapicallback||"onYouTubePlayerReady"));a.C.args.jsapicallback=null;var c=a.C.attrs.width;c&&g.sc(a.J,Number(c)||c);(c=a.C.attrs.height)&&g.rc(a.J,Number(c)||c)};
Qh=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Rh=function(a){var b=a.C&&a.C.args;if(b&&b.fflags){var c=b.el;b=b.fflags;if((!c||"profilepage"==c)&&0<=b.indexOf("web_player_disable_flash_watch=true")||"embedded"==c&&0<=b.indexOf("web_player_disable_flash_embed=true"))return!1}g.sa(a.C.disable.flash)||(c=a.C.disable,b=g.Uf(g.Tf.getInstance(),a.C.minVersion),c.flash=!b);return!a.C.disable.flash};
Uh=function(a,b){var c=a.C,d=c&&c.args&&c.args.fflags;!d||0>d.indexOf("web_player_flash_fallback_killswitch=true")||b&&(5!=(sba[b.errorCode]||5)||-1==tba.indexOf(b.errorCode))||!Rh(a)||((d=Sh(a))&&d.stopVideo&&d.stopVideo(),d&&d.getUpdatedConfigurationData&&(c=d.getUpdatedConfigurationData(),c=g.Rf(c)),c.args.autoplay=1,c.args.html5_unavailable="1",Ph(a,c),Th(a,"flash"))};
Th=function(a,b){if(!a.ob()){if(!b){var c;if(!(c=!a.C.html5&&Rh(a))){if(!g.sa(a.C.disable.html5)){c=!0;void 0!=a.C.args.deviceHasDisplay&&(c=a.C.args.deviceHasDisplay);if(2.2==Vh)var d=!0;else{a:{var e=c;c=g.q("yt.player.utils.videoElement_");c||(c=g.fc("VIDEO"),g.n("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?uba:vba;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(k){d="html5.missingapi"}}d=!d}d&&(d=Wh(a)||a.C.assets.js);a.C.disable.html5=
!d;d||(a.C.args.html5_unavailable="1")}c=!!a.C.disable.html5}b=c?Rh(a)?"flash":"unsupported":"html5"}("flash"==b?a.dM:a.eM).call(a)}};
Wh=function(a){var b=!0,c=Sh(a);c&&a.C&&(a=a.C,b=g.D(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
Sh=function(a){var b=g.x(a.F);!b&&a.J&&a.J.querySelector&&(b=a.J.querySelector("#"+a.F));return b};
Xh=function(a,b,c){var d=b[c];return function(){try{return a.Dd=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Dd=e,g.Ae(e,"WARNING"))}}};
Lh=function(a){a.R=!1;if(a.ib)for(var b in a.D)a.ib(b,a.D[b]);for(var c in a.ab)g.Ie((0,window.parseInt)(c,10));a.ab={};a.ea=null;a.ib=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=(0,g.r)(a.Xd,a);a.api.removeEventListener=(0,g.r)(a.JK,a);a.api.destroy=(0,g.r)(a.dispose,a);a.api.getLastError=(0,g.r)(a.px,a);a.api.getPlayerType=(0,g.r)(a.Ix,a);a.api.getCurrentVideoConfig=(0,g.r)(a.Sw,a);a.api.loadNewVideoConfig=(0,g.r)(a.Xm,a);a.api.isReady=(0,g.r)(a.rM,a)};
Oh=function(a,b){var c=b;if("string"==typeof b){if(a.qb[b])return a.qb[b];c=function(){var a=g.q(b);a&&a.apply(g.m,arguments)};
a.qb[b]=c}return c?c:null};
wba=function(a,b){var c="ytPlayer"+b+a.ia,d=(0,g.r)(function(a){if("html5"==Yh(this)){var c=this.C&&this.C.args&&this.C.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true")){this.ma.qa(b,a);return}}var d=g.Ke((0,g.r)(function(){this.ob()||(this.ma.qa(b,a),g.gb(this.ab,String(d)))},this),0);
g.hb(this.ab,String(d),!0)},a);
a.D[b]=c;g.m[c]=d;return c};
Yh=function(a){return(a=Sh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null};
$h=function(a){g.lh("dcp");a.cancel();Lh(a);a.W=null;a.C&&(a.C.loaded=!1);var b=Sh(a);"html5"==Yh(a)?Wh(a)||!Zh(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null):b&&b.destroy&&b.destroy();g.gc(a.G);Pf(a.Aa);a.L=null;a.N=null};
Zh=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
xba=function(a){delete g.ai[a.getId()]};
g.ci=function(a,b){a=g.ta(a)?g.Ub(a):a;b=g.Rf(b);var c=g.bi+"_"+g.Ea(a),d=g.ai[c];if(d)return d.Xm(b),d.api;d=new Nh(a,c);g.ai[c]=d;g.F("player-added",d.api);g.zc(d,g.u(xba,d));g.Ke(function(){d.Xm(b)},0);
return d.api};
g.di=function(a){a=g.x(a);if(!a)return null;var b=g.bi+"_"+g.Ea(a),c=g.ai[b];c||(c=new Nh(a,b),g.ai[b]=c);return c.api};
ei=function(){if(g.De("log_web_screen_end")){var a=g.Lg(),b=g.Ng();b&&a&&g.Dg(b,[a],!0)}};
g.ii=function(a){var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.yg()>b)&&"visible"==g.Df()){b=-1;g.fi&&(b=Math.round((0,g.qg)()-g.fi));var c=String;var d=g.q("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.ee)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.gi,index:String(hi),lastEventDeltaMs:String(b),trigger:a};g.Bg("foregroundHeartbeat",a);g.n("_fact",-1,window);hi++;g.fi=(0,g.qg)()}};
g.ji=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Be(d):null;this.H=e?Be(e):null;this.G=[];this.C=this.F=0};
g.ki=function(a){g.Ze(a.F);a.F=g.Ye((0,g.r)(a.init,a))};
g.ni=function(a){a.name in li&&mi(a.name);li[a.name]={reqs:[],disable:(0,g.r)(a.disable,a)};(0,g.z)(a.deps,function(b){if(!(b in li))throw Error("Module "+b+" required by "+a.name);li[b].reqs.push(a.name)});
a.enable()};
mi=function(a){if(a in li){var b=li[a];(0,g.z)(b.reqs,function(a){mi(a)});
try{b.disable()}catch(c){}delete li[a]}};
g.pi=function(a,b,c,d){g.oi.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
qi=function(a){if(a){a=a.itct||a.ved;var b=g.q("yt.logging.screen.storeParentElement");a&&b&&b(g.eg(a))}};
g.ri=function(a,b,c){var d=g.C("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.pe(window.location.href);e&&d.push(e);e=g.pe(a);if(g.Sa(d,e)||!e&&g.Ga(a,"/"))if(g.De("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.Ob(d,a),a=d.href),a&&(a=g.qe(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Ng();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Oa(a).toString(36),d=b?g.te(b):"",g.pi(a,d,c||5),qi(b))):(c="ST-"+g.Oa(a).toString(36),a=b?g.te(b):
"",g.pi(c,a,5),qi(b))}};
g.si=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.Pb(d.location,g.ue(a,b)+c)};
g.ti=function(a,b){b&&g.ri(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.si(a)};
g.ui=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.C("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.ri(a,b);if(c)return!1;g.ti(a);return!0};
g.wi=function(a,b){var c={};c.key=a;c.value=b;return vi().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.xi=function(a){return vi().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
vi=function(){return yi?window.Promise.resolve(yi):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))yi=b,a(yi);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),vi()};
c.onupgradeneeded=yba})};
yba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
zba=function(){zi.stop()};
Aba=function(){g.lh("vpr")};
Fi=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.Gf(c);if(e in Ai)return!0;if(e in Ei)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Ei[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Ei[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Ai[d[c]]=!0;return!0};
Bba=function(a){var b=g.Yb();b=new g.nc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Fi(a[d].oB,b)&&c<f&&(c=f)}return c};
Cba=function(a){var b=Gi;return new g.rd(function(c,d){var e={oB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){Gi!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},Hi.push(a))})};
Dba=function(a){zi.start();nh("vpil",++Ii);a=a.time;Ji<a&&(Ji=a,g.lh("lim",a))};
Eba=function(){g.lh("vptl",Ji);g.lh("vpl",Ji)};
Fba=function(){Ki.forEach(function(a){a.cancel()});
Ji=Ii=Ki.length=0;Ai={};Ei={};Hi.forEach(function(a){a.slt=void 0});
Hi.length=0};
Gba=function(){Gi++;var a=g.Yb(),b=new g.nc(0,0,a.width,a.height);nh("vph",a.height);nh("vpw",a.width);g.lh("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;zi.start();for(var f=0;f<c;f++){var k=a[f];if(Fi(k,b)){var l=Cba(k);l.then(Dba);d.push(l);Ki.push(l);k.loadTime||(e=!1)}}e&&nh("yt_eil",1);nh("vpni",d.length);g.lh("vpcc");b=g.wd(d).then(Bba);g.yd(b,Aba);b.then(zba);Ki.push(b);return b};
g.Li=function(a,b){g.Pg("/gen_204?"+a,b)};
Iba=function(a){if(null==a)return[];var b=[];Hba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
return b};
g.Mi=function(){return g.B(g.x("page-container"),"remote-connected")};
Jba=function(){g.n("yt.abuse.botguardInitialized",Ue,void 0);g.n("yt.abuse.invokeBotguard",g.Ve,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",af,void 0);g.n("yt.player.exports.navigate",g.ui,void 0);g.n("yt.util.activity.init",g.xg,void 0);g.n("yt.util.activity.getTimeSinceActive",g.yg,void 0);g.n("yt.util.activity.setTimestamp",Ni,void 0);var a=g.q("ytplayer.config");Oi(a);g.q("ytspf.enabled")&&(Pi=g.Je(Qi,5E3),(a=g.Ri())?(a.addEventListener("onReady",Qi),a.addEventListener("onStateChange",Qi)):
Si("unable to init PP monitor"))};
Oi=function(a){for(var b in g.ai){var c=g.ai[b];c&&c.cancel()}if(a=a||null){b=g.Ri();var d=!0;c=g.Ti;g.Ti=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Ui="",g.ci("player-api",a)):b.playVideo();a=g.Rf(a);a.loaded=!0}Qi();g.n("ytplayer.config",a,void 0)};
g.Ri=function(){return g.di("player-api")};
Qi=function(){var a=g.Ri();if(a){var b=g.x("player");b=!b||g.B(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.C("PAGE_NAME"),e=g.Mi();!c||d||e||(Si("PP playing off watch (paused)"),a.pauseVideo());b&&d?Si("PP off-screen on watch"):b||d||Si("PP !off-screen off watch")}};
Si=function(a){var b=g.C("PAGE_NAME");b&&(b=[b,Ui,g.q("_spf_state.nav-counter")],a+="("+b.join(",")+")",g.n("yt.www.persistentplayer.issue",a,void 0),g.Ae(Error(a),"WARNING"))};
Wi=function(){g.lh("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.lh("cpt");g.F("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?(g.lh("cpt"),g.F("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){g.lh("cpt");
g.F("on_cpt_tick",(new Date).getTime())},0);
Kba();g.C("CSI_VIEWPORT")&&(Vi=Gba(),Vi.then(function(a){g.lh("vpl",a);Vi=null},function(){}))};
Kba=function(){Xi("init");var a=g.C("PAGE_NAME",void 0);a&&Xi("init-"+a)};
Xi=function(a){g.We()?Yi.push(g.Ye(g.u(g.Qe,a),0)):g.F(a)};
Zi=function(){g.$e(Yi);Yi.length=0;Fba();Vi&&(Vi.cancel(),Vi=null);var a=g.C("PAGE_NAME",void 0);a&&g.Qe("dispose-"+a);g.Qe("dispose")};
Lba=function(){Wi()};
Mba=function(){g.C("TIMING_REPORT_ON_UNLOAD")&&g.kh(!0);Bh("u");g.De("log_foreground_heartbeat")&&g.ii("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");ei();g.Cg();g.jg();Zi();g.Qe("pageunload")};
$i=function(){Ni()};
aj=function(a){a=a.detail.url;window.yt_spf_loaded_history=!0;Ni();var b=g.Mg();if(b&&a){var c=g.fg(b.visualElement);b={csn:b.clientScreenNonce};"trackingParams"in c?b.itct=c.trackingParams:(b.veType=c.veType,b.veCounter=c.veCounter);g.ri(a,b)}};
fj=function(){bj=1;cj=dj=0;g.C("TIMING_REPORT_ON_UNLOAD")&&g.kh(!0);g.De("warm_load_nav_start_web")?(Bh("n"),gh(),Jh(!1),g.ye("TIMING_AFT_KEYS",[]),nh("yt_lt","warm"),g.ye("TIMING_ACTION",""),g.ye("TIMING_WAIT",[]),Wg()):(Bh("n"),gh());oh("n");hh("nr");ej(Nba);ei();g.Qe("navigate")};
jj=function(a){a=a.detail.part||a.detail.partial;g.lh("nc"+dj);++dj;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.lh("bc");else{var b=1==bj;bj=2;b?(ej(Oba),gj()):ej(Pba);if(b=a&&a.data&&a.data.swfcfg)hj(a.timing,b.args),ij(b)}};
kj=function(){g.lh("np"+cj);++cj};
lj=function(a){a=a.detail.response;var b=1==bj;bj=3;b&&(ej(Qba),gj());if(b=a.data&&a.data.swfcfg)hj(a.timing,b.args),ij(b)};
pj=function(a){g.lh("nd");a=a.detail.response;g.mj=a.cacheKey;a=a.timing;var b=window._spf_state;g.nj.navigationCount=b&&b["nav-counter"]||0;g.De("warm_load_nav_start_web")?g.lh("srt",a.responseStart):(oh("ne",a.responseStart),nh("srt",Math.max(0,a.responseStart-a.navigationStart)));nh("yt_lt",a.spfCached?"hot":"warm");nh("yt_pft",+!!a.spfPrefetched);g.lh("pfs",a.fetchStart);g.lh("pfrs",a.responseStart);"redirectStart"in a&&th(a);ej(oj);window.document.getElementById("content").style.height="";Wi();
bj=0};
qj=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Ae(a)};
rj=function(a){g.Li(g.te({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Sba=function(){Rba();window.yt_spf_loaded_history=!1};
Tba=function(){};
gj=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Zi();a=g.C("PREVIOUS_ACTION");for(var b in g.xe)delete g.xe[b];g.ye("PREVIOUS_ACTION",a);g.ye("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.n("ytplayer.config",null,void 0);if((b=g.Ri())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Ui=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),Ui="recovered"):Ui="missing2"}else Ui="missing";Qi()};
ij=function(a){"cfg"in ih(void 0)||g.lh("cfg");Oi(a)};
ej=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Ze(sj);sj=g.Ye(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Ie(tj);tj=g.Ke(function(){b.className=e},c)},0)};
Rba=function(){var a=oj[0]+50;g.Ie(tj);tj=g.Ke(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
hj=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Iba(b));g.C("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"removeNonCacheableVideoVars",cached:c,prefetched:d,deleted:e.join("")},g.Li(g.te(c)))};
uj=function(){var a=String(Ce("service_worker_scope")||"");return window.navigator.serviceWorker.getRegistration(a)};
vj=function(a){return uj().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Uba=function(){var a={type:"notifications_check_registration",data:g.C("ID_TOKEN")};return vj(a)};
wj=function(){var a={type:"notifications_register",data:g.C("ID_TOKEN")};vj(a)};
xj=function(){return uj().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})};
Vba=function(){var a=g.Ee("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.xi("WatchCount").then(function(b){return b>=a})};
yj=function(){return window.Notification.requestPermission().then(function(a){var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return xj().then(function(){g.wi("NotificationsDisabled",!1);wj();return window.Promise.resolve(!0)});
"denied"==a&&wj();return window.Promise.resolve(!1)})};
Wba=function(){g.wi("HideTicker",(0,g.ee)());window.document.body.classList.remove("sitewide-ticker-visible")};
Xba=function(){return g.xi("HideTicker").then(function(a){return(0,g.ee)()>a+2592E6})};
zj=function(){return g.De("service_worker_push_home_only")?"HomePromptCount":"PromptCount"};
Aj=function(){var a=zj();return g.xi(a).then(function(b){return g.wi(a,b+1)}).then(function(){if(g.De("service_worker_push_home_only"))return g.wi("HomePromptTime",(0,g.ee)())})};
Bj=function(){var a=window.document.getElementById("ticker");return a&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.D(a,"trigger-condition")?a:null};
Cj=function(){var a=Bj();return a?a.querySelector(".yt-uix-button-alert-info"):null};
Yba=function(){return-1==g.Ee("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.xi(zj()).then(function(a){a||(a=0);return window.Promise.resolve(a<g.Ee("service_worker_push_prompt_cap"))})};
Zba=function(){var a=g.Ee("service_worker_push_prompt_delay_ms");return a?g.xi("HomePromptTime").then(function(b){return window.Promise.resolve((0,g.ee)()-a>(b||0))}):window.Promise.resolve(!0)};
$ba=function(){return g.De("service_worker_push_ticker_enabled")?Xba().then(function(a){if(!a)return window.Promise.resolve();a=Bj();if(!a)return window.Promise.resolve();var b=Cj();if(!b)return window.Promise.resolve();var c=Bj();c=c?c.querySelector(".yt-uix-button-close"):null;if(!c)return window.Promise.resolve();g.H(b,"click",yj);g.H(c,"click",Wba);window.document.body.classList.add("sitewide-ticker-visible");a.classList.add("show");return Aj()}):(Aj(),yj())};
aca=function(){if(!g.C("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0))return window.Promise.resolve(!1);var a=[Yba(),Zba()];g.C("LOGGED_IN",void 0)||a.push(Vba());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})};
bca=function(a){return g.Dj&&!g.Ej&&!g.Fj&&!g.Gj&&window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification&&window.Promise&&a&&a.pushManager?"default"!=window.Notification.permission?xj().then(Uba):aca().then(function(a){if(a)return $ba()}):window.Promise.resolve()};
dca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(cca)})};
fca=function(){var a="/sw.js",b=g.C("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=Hj(a);g.De("service_worker_push_enabled")&&a.then(eca).then(bca)};
eca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
cca=function(a){a&&Hj("/sw.js?0",a.scope)};
Hj=function(a,b){var c=b||String(Ce("service_worker_scope")||"")||"/";return window.navigator.serviceWorker.register(a,{scope:c})};
Ij=function(){g.ji.call(this,"www/base");this.D=0};
Jj=function(a){(a=a.detail.name)&&mi(a)};
g.ba=[];da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)Kj=Object.setPrototypeOf;else{var Lj;a:{var gca={a:!0},Mj={};try{Mj.__proto__=gca;Lj=Mj.a;break a}catch(a){}Lj=!1}Kj=Lj?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ea=Kj,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,aaa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
qa("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
var hca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=da(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
qa("Reflect.construct",function(){return hca});
qa("Promise",function(a){function b(a){this.C=0;this.D=void 0;this.F=[];var b=this.H();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.L()})};
var e=ia.setTimeout;c.prototype.D=function(a){e(a,0)};
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
var f=new c;b.prototype.V=function(a){var b=this.H();a.Vh(b.resolve,b.reject)};
b.prototype.ma=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(t){c.reject(t)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(ka){f(ka)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Vh(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Vh=function(a,b){function c(){switch(d.C){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?f.F(c):this.F.push(function(){f.F(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.pa(a),f=e.next();!f.done;f=e.next())d(f.value).Vh(b,c)})};
b.all=function(a){var c=g.pa(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Vh(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
qa("WeakMap",function(a){function b(a){this.nb=(f+=Math.random()+1).toString();if(a){ha();ma();a=g.pa(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){ra(a,e)||ja(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(t){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!ra(a,e))throw Error("WeakMap key fail: "+a);a[e][this.nb]=b;return this};
b.prototype.get=function(a){return ra(a,e)?a[e][this.nb]:void 0};
b.prototype.has=function(a){return ra(a,e)&&ra(a[e],this.nb)};
b.prototype["delete"]=function(a){return ra(a,e)&&ra(a[e],this.nb)?delete a[e][this.nb]:!1};
return b});
qa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return na(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&ra(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,kc:l}}return{id:c,list:d,index:-1,kc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.pa(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.pa([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(A){return!1}}())return a;
ha();ma();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.kc?c.kc.value=b:(c.kc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.kc),this.F.previous.next=c.kc,this.F.previous=c.kc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.kc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.kc.previous.next=a.kc.next,a.kc.next.previous=a.kc.previous,a.kc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).kc};
e.prototype.get=function(a){return(a=d(this,a).kc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
qa("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.pa(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.pa([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
ha();ma();b.prototype.add=function(a){this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
qa("Array.from",function(a){return a?a:function(a,c,d){ma();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
g.Nj=g.Nj||{};g.m=this;Da="closure_uid_"+(1E9*Math.random()>>>0);baa=0;g.ee=Date.now||function(){return+new Date};g.Oj=window.document;g.Pj=window;g.v(g.Fa,Error);g.Fa.prototype.name="CustomError";var faa,gaa,haa,iaa,jaa,kaa,eaa;g.La=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
faa=/&/g;gaa=/</g;haa=/>/g;iaa=/"/g;jaa=/'/g;kaa=/\x00/g;eaa=/[\x00&<>"']/;g.Qj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.Ra=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(g.ta(a))return g.ta(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.ica=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;
0>c&&(c=Math.max(0,a.length+c));if(g.ta(a))return g.ta(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Hh=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.ta(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var p=k[l];
b.call(c,p,l,a)&&(e[f++]=p)}return e};
g.yh=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.ta(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Ih=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.r)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.z)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Rj=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Sj=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};a:{var Tj=g.m.navigator;if(Tj){var Uj=Tj.userAgent;if(Uj){g.Ya=Uj;break a}}g.Ya=""};var jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.qb[" "]=g.va;var bk,laa,fk;g.Vj=g.Za("Opera");g.y=g.lb();g.Wj=g.Za("Edge");g.Xj=g.Wj||g.y;g.Yj=g.Za("Gecko")&&!(-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.Za("Edge"))&&!(g.Za("Trident")||g.Za("MSIE"))&&!g.Za("Edge");g.bc=-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.Za("Edge");g.Zj=g.Za("Macintosh");g.ak=g.Za("Windows");g.jca=g.Za("Linux")||g.Za("CrOS");g.kca=g.Za("Android");g.Fj=ob();g.Gj=g.Za("iPad");g.lca=g.Za("iPod");g.mca=g.pb();
a:{var ck="",dk=function(){var a=g.Ya;if(g.Yj)return/rv\:([^\);]+)(\)|;)/.exec(a);if(g.Wj)return/Edge\/([\d\.]+)/.exec(a);if(g.y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.bc)return/WebKit\/(\S+)/.exec(a);if(g.Vj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
dk&&(ck=dk?dk[1]:"");if(g.y){var ek=sb();if(null!=ek&&ek>(0,window.parseFloat)(ck)){bk=String(ek);break a}}bk=ck}g.tb=bk;laa={};var gk=g.m.document;fk=gk&&g.y?sb()||("CSS1Compat"==gk.compatMode?(0,window.parseInt)(g.tb,10):5):void 0;g.vb=fk;var naa;naa=!g.y||g.wb(9);g.nca=!g.Yj&&!g.y||g.y&&g.wb(9)||g.Yj&&g.ub("1.9.1");g.hk=g.y&&!g.ub("9");g.oca=g.y||g.Vj||g.bc;g.yb.prototype.pe=!0;g.yb.prototype.xd=function(){return this.C};
g.yb.prototype.toString=function(){return"Const{"+this.C+"}"};
g.xb={};g.Ab("");g.pca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.qca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.ik=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");var Bb;g.Cb.prototype.pe=!0;g.Cb.prototype.xd=function(){return this.C};
g.Cb.prototype.ol=!0;g.Cb.prototype.He=g.ca(1);g.Eb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;Bb={};g.Gb("about:blank");g.Jb.prototype.pe=!0;g.Ib={};g.Jb.prototype.xd=function(){return this.C};
g.jk=g.Kb("");g.kk=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.rca=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Mb.prototype.ol=!0;g.Mb.prototype.He=g.ca(0);g.Mb.prototype.pe=!0;g.Mb.prototype.xd=function(){return this.C};
g.Lb={};g.Nb("<!DOCTYPE html>",0);g.lk=g.Nb("",0);g.mk=g.Nb("<br>",0);g.h=g.Rb.prototype;g.h.clone=function(){return new g.Rb(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Rb&&g.Sb(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.Tb.prototype;g.h.clone=function(){return new g.Tb(this.width,this.height)};
g.h.Yf=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Yf()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.width*=a;this.height*=c;return this};var Vb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.h=g.lc.prototype;g.h.getHeight=function(){return this.bottom-this.top};
g.h.clone=function(){return new g.lc(this.top,this.right,this.bottom,this.left)};
g.h.contains=function(a){return g.mc(this,a)};
g.h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};g.h=g.nc.prototype;g.h.clone=function(){return new g.nc(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Rb?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.nk=g.Yj?"MozUserSelect":g.bc||g.Wj?"WebkitUserSelect":null;g.ok=g.tc(null);g.sca=Object.prototype.hasOwnProperty;g.pk=!!window.google_async_iframe_id;g.qk=g.pk&&window.parent||window;g.rk=(new Date).getTime();g.h=g.wc.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.sa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.ee)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.La)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.sa(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Ec=g.ca(2);g.h.Jb=g.ca(3);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Ab=g.ca(7);g.h.ee=g.ca(8);g.h.clear=function(){for(var a=g.xc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.oi=new g.wc("undefined"==typeof window.document?null:window.document);g.oi.F=3950;g.yc.prototype.Dc=!1;g.yc.prototype.ob=function(){return this.Dc};
g.yc.prototype.dispose=function(){this.Dc||(this.Dc=!0,this.X())};
g.yc.prototype.X=function(){if(this.Lb)for(;this.Lb.length;)this.Lb.shift()()};g.Cc.prototype.stopPropagation=function(){this.F=!0};
g.Cc.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Ms=!1};var Uc,uca;g.tca=!g.y||g.wb(9);Uc=!g.y||g.wb(9);uca=g.y&&!g.ub("9");!g.bc||g.ub("528");g.Yj&&g.ub("1.9b")||g.y&&g.ub("8")||g.Vj&&g.ub("9.5")||g.bc&&g.ub("528");g.Yj&&!g.ub("8")||g.y&&g.ub("9");var xaa=function(){if(!g.m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.m.addEventListener("test",g.va,b);g.m.removeEventListener("test",g.va,b);return a}();g.sk=g.y?"focusin":"DOMFocusIn";g.tk=g.y?"focusout":"DOMFocusOut";g.uk=g.bc?"webkitTransitionEnd":g.Vj?"otransitionend":"transitionend";g.v(g.Dc,g.Cc);
g.Dc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Yj&&(g.rb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.L=g.Zj?a.metaKey:a.ctrlKey;this.state=a.state;this.xc=a;a.defaultPrevented&&this.preventDefault()};
g.Dc.prototype.stopPropagation=function(){g.Dc.M.stopPropagation.call(this);this.xc.stopPropagation?this.xc.stopPropagation():this.xc.cancelBubble=!0};
g.Dc.prototype.preventDefault=function(){g.Dc.M.preventDefault.call(this);var a=this.xc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,uca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ec="closure_listenable_"+(1E6*Math.random()|0),uaa=0;g.h=g.Ic.prototype;g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Jc(e,b,c,d);return-1<b?(Hc(e[b]),g.Ua(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Hc(d[e]);delete this.listeners[c];this.C--}return b};
g.h.gg=g.ca(10);g.h.kf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Jc(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.sa(a),d=c?a.toString():"",e=g.sa(b);return g.ab(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Rc="closure_lm_"+(1E6*Math.random()|0),Xc={},Tc=0,$c="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.ad,g.yc);g.ad.prototype[Ec]=!0;g.h=g.ad.prototype;g.h.zi=function(){return this.Yl};
g.h.yh=g.ca(11);g.h.addEventListener=function(a,b,c,d){g.Nc(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Vc(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.zi();if(b){var c=[];for(var d=1;b;b=b.zi())c.push(b),++d}b=this.vv;d=a.type||a;if(g.ta(a))a=new g.Cc(a,b);else if(a instanceof g.Cc)a.target=a.target||b;else{var e=a;a=new g.Cc(d,b);g.kb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=bd(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=bd(k,d,!0,a)&&e,a.F||(e=bd(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=bd(k,d,!1,a)&&e;return e};
g.h.X=function(){g.ad.M.X.call(this);this.removeAllListeners();this.Yl=null};
g.h.O=function(a,b,c,d){return Kc(this.wd,String(a),b,!1,c,d)};
g.h.Le=function(a,b,c,d){return Kc(this.wd,String(a),b,!0,c,d)};
g.h.Wa=function(a,b,c,d){return this.wd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.wd?this.wd.removeAll(a):0};
g.h.gg=g.ca(9);g.h.kf=function(a,b,c,d){return this.wd.kf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.wd.hasListener(g.sa(a)?String(a):void 0,b)};cd.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var nd;var kd=new cd(function(){return new gd},function(a){a.reset()},100);
fd.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
gd.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
gd.prototype.reset=function(){this.next=this.scope=this.lc=null};var hd,id=!1,jd=new fd;sd.prototype.reset=function(){this.context=this.F=this.D=this.C=null;this.G=!1};
var td=new cd(function(){return new sd},function(a){a.reset()},100);
g.rd.prototype.then=function(a,b,c){return xd(this,g.Ba(a)?a:null,g.Ba(b)?b:null,c)};
g.od(g.rd);g.rd.prototype.cancel=function(a){0==this.C&&ld(function(){var b=new Fd(a);zd(this,b)},this)};
g.rd.prototype.W=function(a){this.C=0;g.qd(this,2,a)};
g.rd.prototype.N=function(a){this.C=0;g.qd(this,3,a)};
g.rd.prototype.J=function(){for(var a;a=Ad(this);)Bd(this,a,this.C,this.R);this.L=!1};
var Hd=ed;g.v(Fd,g.Fa);Fd.prototype.name="cancel";g.v(g.Kd,g.yc);g.h=g.Kd.prototype;g.h.nb=0;g.h.X=function(){g.Kd.M.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.nb=g.Id(this.wc,g.sa(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Jd(this.nb);this.nb=0};
g.h.isActive=function(){return 0!=this.nb};
g.h.Lk=function(){this.nb=0;this.C&&this.C.call(this.F)};g.Mh=g.Za("Firefox");g.vk=ob()||g.Za("iPod");g.wk=g.Za("iPad");g.Ej=g.Za("Android")&&!(g.mb()||g.Za("Firefox")||g.Za("Opera")||g.Za("Silk"));g.Dj=g.mb();g.xk=g.nb()&&!g.pb();g.Od="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.Nd.prototype.next=function(){throw g.Od;};
g.Nd.prototype.dd=function(){return this};Td.prototype.Gj=function(a){var b=[];Vd(this,a,b);return b.join("")};
var Xd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Faa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;g.v(g.Yd,g.yc);g.h=g.Yd.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.rd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.va):(c&&g.Va(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.qa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Gaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;k=this.D.pop();)this.rd(k)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.z)(b,this.rd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Ab=g.ca(6);g.h.X=function(){g.Yd.M.X.call(this);this.clear();this.D.length=0};g.$d.prototype.set=function(a,b){g.sa(b)?this.C.set(a,g.Ud(b)):this.C.remove(a)};
g.$d.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return g.Sd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.$d.prototype.remove=function(a){this.C.remove(a)};g.v(ae,g.$d);ae.prototype.set=function(a,b){ae.M.set.call(this,a,ce(b))};
ae.prototype.F=function(a){a=ae.M.get.call(this,a);if(!g.sa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ae.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.sa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.de,ae);g.de.prototype.set=function(a,b,c){if(b=ce(b)){if(c){if(c<(0,g.ee)()){g.de.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.ee)()}g.de.M.set.call(this,a,b)};
g.de.prototype.F=function(a,b){var c=g.de.M.F.call(this,a);if(c)if(!b&&g.fe(c))g.de.prototype.remove.call(this,a);else return c};g.v(g.ge,g.de);g.v(g.he,Haa);g.he.prototype.Ab=g.ca(5);g.he.prototype.clear=function(){var a=Eaa(this.dd(!0)),b=this;(0,g.z)(a,function(a){b.remove(a)})};g.v(g.je,g.he);g.h=g.je.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.ta(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Ab=g.ca(4);g.h.dd=function(a){var b=0,c=this.C,d=new g.Nd;d.next=function(){if(b>=c.length)throw g.Od;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.ta(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.ke,g.je);g.v(le,g.je);var Iaa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var yk=!1,zk="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(yk=!0,a.description)){zk=ve(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){yk=!0;zk="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],yk=!(!a||!a.enabledPlugin))){zk=ve(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");yk=
!0;zk=ve(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");yk=!0;zk="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),yk=!0,zk=ve(b.GetVariable("$version"))}catch(c){}})();
g.vca=yk;g.wca=zk;g.qg=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Sf="Microsoft Internet Explorer"==window.navigator.appName;g.xe=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.n("yt.config_",g.xe,void 0);var Ge={};var xca=g.q("ytPubsubPubsubInstance")||new g.Yd;g.Yd.prototype.subscribe=g.Yd.prototype.subscribe;g.Yd.prototype.unsubscribeByKey=g.Yd.prototype.rd;g.Yd.prototype.publish=g.Yd.prototype.qa;g.Yd.prototype.clear=g.Yd.prototype.clear;g.n("ytPubsubPubsubInstance",xca,void 0);var Me=g.q("ytPubsubPubsubSubscribedKeys")||{};g.n("ytPubsubPubsubSubscribedKeys",Me,void 0);var Oe=g.q("ytPubsubPubsubTopicToKeys")||{};g.n("ytPubsubPubsubTopicToKeys",Oe,void 0);var Ne=g.q("ytPubsubPubsubIsSynchronous")||{};
g.n("ytPubsubPubsubIsSynchronous",Ne,void 0);var Kaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Laa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Te=null;(0,g.ee)();var cf=g.sa(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.sa(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var hf,kf;hf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};kf=!1;g.Ak=mf;var Saa={PO:"net.badstatus",vT:"net.retryexhausted",TIMEOUT:"net.timeout",UNKNOWN:"net.unknown"};g.fa(qf,g.Fa);var Raa=qf;sf.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.pd(a)?a:uf(a)):2===this.F&&b?(a=b.call(c,this.C),g.pd(a)?a:tf(a)):this};
sf.prototype.getValue=function(){return this.C};
g.od(sf);var Qaa;g.fa(wf,g.Fa);wf.prototype.name="BiscottiError";g.fa(vf,g.Fa);vf.prototype.name="BiscottiMissingError";Qaa={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0};g.zf=null;var yca=0,Taa=g.bc?"webkit":g.Yj?"moz":g.y?"ms":g.Vj?"o":"",Ef=g.q("ytDomDomGetNextId")||function(){return++yca};
g.n("ytDomDomGetNextId",Ef,void 0);var Uaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Hf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Hf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Hf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var If=g.q("ytEventsEventsListeners")||{};g.n("ytEventsEventsListeners",If,void 0);var Kf=g.q("ytEventsEventsCounter")||{count:0};g.n("ytEventsEventsCounter",Kf,void 0);g.fa(Nf,g.yc);Nf.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.Be);break}};
Nf.prototype.X=function(){Pf(this);g.yc.prototype.X.call(this)};var Vaa={enablejsapi:1},Waa={},Xaa={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};Qf.prototype.clone=function(){var a=new Qf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.xa(c)?a[b]=g.ib(c):a[b]=c}return a};g.wa(g.Tf);g.Tf.prototype.getVersion=function(){return[this.major,this.minor,this.C]};g.Wf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.n("yt.msgs_",g.Wf,void 0);var ag={value:0},bg={};var Yaa,tg;Yaa={log_event:"events",log_event2:"events",log_interaction:"interactions"};tg=Object.create(null);tg.log_event="GENERIC_EVENT_LOGGING";tg.log_event2="GENERIC_EVENT_LOGGING";tg.log_interaction="INTERACTION_LOGGING";g.og={};g.gg={};g.mg=0;g.ng=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.n("ytLoggingTransportLogPayloadsQueue_",g.ng,void 0);var hg=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.n("ytLoggingTransportTokensToCttTargetIds_",hg,void 0);
var pg=g.q("ytLoggingTransportDispatchedStats_")||{};g.n("ytLoggingTransportDispatchedStats_",pg,void 0);var ug=g.q("ytLoggingTransportCapturedTime_")||{};g.n("ytytLoggingTransportCapturedTime_",ug,void 0);var Ni=wg;var Gg=g.q("ytLoggingLatencyUsageStats_")||{};g.n("ytLoggingLatencyUsageStats_",Gg,void 0);var Hg=0;var Bk,Ck;Bk=new g.ke;g.Jg=Bk.isAvailable()?new g.ge(Bk):null;Ck=new le;g.Ig=Ck.isAvailable()?new g.ge(Ck):null;var bba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Dk={},sba=(Dk["api.invalidparam"]=2,Dk.auth=150,Dk["drm.auth"]=150,Dk["heartbeat.net"]=150,Dk["heartbeat.servererror"]=150,Dk["heartbeat.stop"]=150,Dk["html5.unsupportedads"]=5,Dk["fmt.noneavailable"]=5,Dk["fmt.decode"]=5,Dk["fmt.unplayable"]=5,Dk["html5.missingapi"]=5,Dk["html5.unsupportedlive"]=5,Dk["drm.unavailable"]=5,Dk);var Ek={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Vh;var Fk=g.Ya;Fk=Fk.toLowerCase();if(-1!=Fk.indexOf("android")){var Gk=Fk.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Gk)Vh=(0,window.parseFloat)(Gk[1]);else{var Hk=Fk.match("("+g.bb(Ek).join("|")+")");Vh=Hk?Ek[Hk[0]]:0}}else Vh=void 0;var uba=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],vba=['audio/mp4; codecs="mp4a.40.2"'];var Qg={},dba=0;g.Rg.prototype.Gj=function(){return{version:this.version,args:this.args}};g.Sg.prototype.toString=function(){return this.topic};var zca=g.q("ytPubsub2Pubsub2Instance")||new g.Yd;g.Yd.prototype.subscribe=g.Yd.prototype.subscribe;g.Yd.prototype.unsubscribeByKey=g.Yd.prototype.rd;g.Yd.prototype.publish=g.Yd.prototype.qa;g.Yd.prototype.clear=g.Yd.prototype.clear;g.n("ytPubsub2Pubsub2Instance",zca,void 0);g.Ik=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.n("ytPubsub2Pubsub2SubscribedKeys",g.Ik,void 0);g.Jk=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.n("ytPubsub2Pubsub2TopicToKeys",g.Jk,void 0);
g.Kk=g.q("ytPubsub2Pubsub2IsAsync")||{};g.n("ytPubsub2Pubsub2IsAsync",g.Kk,void 0);g.n("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.fa(Xg,g.Rg);g.fa(Yg,g.Rg);var hba=new g.Sg("aft-recorded",Xg),lba=new g.Sg("timing-sent",Yg);var mh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};ah.prototype.toString=function(){return this.region.toString()+": "+this.timing+" => "+this.url};
bh.prototype.toString=function(){return["progress",this.progress,"timing",this.timing,"area",this.Yf].join(": ")};
$g.F=.1;$g.C=/url\(["']?(http[^'"\)]+)['"]?\)/i;$g.D="mark_iframe_loaded: ";$g.G=20;var ch=(0,g.ee)().toString();var jba={vc:!0},Gh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'script[name="mobile_polymer/mobile_polymer"]':"mpj",
'link[rel="import"][name="mobile_polymer"]':"mph",'script[name="player-plasma-phone/base"]':"mpppj",'script[name="player-plasma-tablet/base"]':"mpptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mppc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",
'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},Eh={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",plid:"videoId",paused:"playerInfo.isPausedOnLoad",
fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},oba="ap c cver ei srt yt_fss yt_li ba vpil vpni yt_eil pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),rba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",
channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH",
"watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR"},nba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),vh=!1,gba=(0,g.r)(mh.clearResourceTimings||
mh.webkitClearResourceTimings||mh.mozClearResourceTimings||mh.msClearResourceTimings||mh.oClearResourceTimings||g.va,mh);g.v(Nh,g.yc);var tba=["fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g.h=Nh.prototype;g.h.getId=function(){return this.ia};
g.h.Xm=function(a,b){this.ob()||(Ph(this,a),Th(this,b),this.R&&Qh(this))};
g.h.Sw=function(){return this.Eb};
g.h.eM=function(){if(!this.na){var a=Wh(this);if(a&&"html5"==Yh(this))this.W="html5",this.R||this.vg();else if($h(this),this.W="html5",a&&this.H)this.G.appendChild(this.H),this.vg();else{this.C.loaded=!0;var b=!1;this.Y=(0,g.r)(function(){b=!0;var a=this.G,d=this.C.clone();g.q("yt.player.Application.create")(a,d);this.vg()},this);
this.na=!0;a?this.Y():(g.Se(this.C.assets.js,this.Y),g.Og(this.C.assets.css),Zh(this)&&!b&&g.n("yt.player.Application.create",null,void 0))}}};
g.h.dM=function(){var a=this.C.clone();if(!this.L){var b=Sh(this);b&&(this.L=g.fc("SPAN"),this.L.tabIndex=0,Of(this.Aa,this.L,"focus",this.Yq),this.N=g.fc("SPAN"),this.N.tabIndex=0,Of(this.Aa,this.N,"focus",this.Yq),g.hc(this.L,b),g.ic(this.N,b))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";"flash"==Yh(this)?(this.W="flash",this.R||this.vg()):($h(this),this.W="flash",this.C.loaded=!0,window!=window.top&&window.document.referrer&&(a.args.framer=window.document.referrer.substring(0,
128)),g.$f(this.G,a.url,a),this.vg())};
g.h.Yq=function(){Sh(this).focus()};
g.h.vg=function(){if(!this.ob()){var a=Sh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.na=!1,a.isNotServable&&a.isNotServable(this.C.args.video_id))Uh(this);else{Lh(this);this.R=!0;a=Sh(this);a.addEventListener&&(this.ea=Xh(this,a,"addEventListener"));a.removeEventListener&&(this.ib=Xh(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=Xh(this,a,d))}for(var e in this.D)this.ea(e,
this.D[e]);Qh(this);this.jb&&this.jb(this.api);this.ma.qa("onReady",this.api)}else this.dc=g.Ke((0,g.r)(this.vg,this),50)}};
g.h.rM=function(){return this.R};
g.h.Xd=function(a,b){if(!this.ob()){var c=Oh(this,b);if(c){if(!g.Sa(this.Bc,a)&&!this.D[a]){var d=wba(this,a);this.ea&&this.ea(a,d)}this.ma.subscribe(a,c);"onReady"==a&&this.R&&g.Ke(g.u(c,this.api),0)}}};
g.h.JK=function(a,b){if(!this.ob()){var c=Oh(this,b);c&&g.Zd(this.ma,a,c)}};
g.h.Rv=function(a){a=a?qaa:paa;for(var b=a(window.document.activeElement);b&&(1!=b.nodeType||b==this.L||b==this.N||(b.focus(),b!=window.document.activeElement));)b=a(b)};
g.h.wn=function(a){g.F("a11y-announce",a)};
g.h.nG=function(a){Uh(this,a)};
g.h.qG=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.h.rG=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.aG=function(){this.Oc||(g.Dj?(this.tb=g.ac(window.document),Of(this.V,window,"scroll",this.GI),Of(this.V,this.G,"touchmove",this.eI)):(Of(this.V,this.G,"mousewheel",this.xr),Of(this.V,this.G,"wheel",this.xr)),this.Oc=!0)};
g.h.bG=function(){Pf(this.V);this.Oc=!1};
g.h.xr=function(a){g.Lf(a)};
g.h.GI=function(){window.scrollTo(this.tb.x,this.tb.y)};
g.h.eI=function(a){a.preventDefault()};
g.h.Ix=function(){return this.W||Yh(this)};
g.h.px=function(){return this.Dd};
g.h.cancel=function(){if(this.Y){var a=this.Y,b=g.Re(this.C.assets.js);window.spf.script.ignore(b,a)}g.Ie(this.dc);this.na=!1};
g.h.X=function(){$h(this);if(this.H&&this.C&&this.H.destroy)try{this.H.destroy()}catch(b){g.Ae(b)}this.qb=null;for(var a in this.D)g.m[this.D[a]]=null;this.Eb=this.C=this.api=null;delete this.G;delete this.J;Nh.M.X.call(this)};g.ai={};g.bi="player_uid_"+(1E9*Math.random()>>>0);var hi;hi=0;g.fi=0;g.h=g.ji.prototype;g.h.VK=function(){this.Xi()||this.init()};
g.h.enable=function(){this.C=1;(0,g.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.VK,this),this.subscribe("dispose-"+a,this.dispose,this),g.C("PAGE_NAME")==a&&g.ki(this))},this)};
g.h.init=function(){g.Ze(this.F);this.C=2;this.L&&this.L()};
g.h.Xi=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Ze(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Ae(a)}};
g.h.subscribe=function(a,b,c){a=g.E(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.Pe(this.G);this.G=[]};var li=g.q("yt.modules.registry_")||{};g.n("yt.modules.registry_",li,void 0);var Aca=g.q("yt.abuse.botguardInitialized")||Ue;g.n("yt.abuse.botguardInitialized",Aca,void 0);var Bca=g.q("yt.abuse.invokeBotguard")||g.Ve;g.n("yt.abuse.invokeBotguard",Bca,void 0);var Cca=g.q("yt.abuse.dclkstatus.checkDclkStatus")||af;g.n("yt.abuse.dclkstatus.checkDclkStatus",Cca,void 0);var Dca=g.q("yt.player.exports.navigate")||g.ui;g.n("yt.player.exports.navigate",Dca,void 0);var Eca=g.q("yt.util.activity.init")||g.xg;g.n("yt.util.activity.init",Eca,void 0);
var Fca=g.q("yt.util.activity.getTimeSinceActive")||g.yg;g.n("yt.util.activity.getTimeSinceActive",Fca,void 0);var Gca=g.q("yt.util.activity.setTimestamp")||Ni;g.n("yt.util.activity.setTimestamp",Gca,void 0);var yi=null;g.Lk=window.performance&&window.performance.memory;g.nj={};var Ii=0,Ji=0,Ki=[],Hi=[],Gi=0,Ai={},Ei={},zi=new g.Kd(Eba,1E3);var Hba=["server_prefetched_vast","vmap"];var Pi,Ui;g.Ti=null;Ui="";var Vi=null,Yi=[];var bj,tj,sj,dj,cj,Nba,Qba,Oba,Pba,oj;dj=0;cj=0;Nba=[900,60,"waiting"];Qba=[500,99,"waiting"];Oba=[300,60,"waiting"];Pba=[400,99,"waiting"];oj=[300,101,"done"];window.yt=window.yt||{};g.n("yt.setConfig",g.ye,void 0);g.n("yt.pushConfigArray",ze,void 0);g.n("yt.getConfig",g.C,void 0);g.n("yt.config.set",g.ye,void 0);g.n("yt.config.pushArray",ze,void 0);g.n("yt.config.get",g.C,void 0);g.n("yt.hasMsg",g.Xf,void 0);g.n("yt.setMsg",Yf,void 0);g.n("yt.setGoogMsg",Zf,void 0);g.n("yt.msgs.has",g.Xf,void 0);g.n("yt.msgs.set",Yf,void 0);g.n("yt.msgs.setGoog",Zf,void 0);g.n("yt.pubsub.publish",g.F,void 0);g.n("yt.pubsub.subscribe",g.E,void 0);
g.n("ytcsi.tick",g.lh,void 0);g.v(Ij,g.ji);
Ij.prototype.enable=function(){window.onload=Lba;window.onunload=Mba;window.onerror=Jaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",$i),window.addEventListener("spfhistory",aj),window.addEventListener("spfrequest",fj),window.addEventListener("spfpartprocess",jj),window.addEventListener("spfpartdone",kj),window.addEventListener("spfprocess",lj),window.addEventListener("spfdone",pj),window.addEventListener("spferror",qj),window.addEventListener("spfreload",
rj),window.addEventListener("spfjsbeforeunload",Jj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Sba),this.subscribe("dispose",Tba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Ij.prototype.init=function(){Ij.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.C("PAGEFRAME_JS")){var b=g.C("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
a=g.C("JS_COMMON_MODULE");var d=g.C("JS_PAGE_MODULES");d||(d=[a]);a=g.C("JS_DELAY_LOAD",0);0<a?(g.Ie(this.D),this.D=g.Ke(function(){b&&g.Se(b,c);window.spf.script.require(d)},a)):(b&&g.Se(b,c),window.spf.script.require(d));
Jba();Ah();mba();Jh(!0);g.kh(!1);g.C("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&"https:"==window.location.protocol&&(g.De("service_worker_enabled")?fca():dca())};
Ij.prototype.dispose=function(){g.Ie(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.He(Pi);if(a=g.Ri())a.removeEventListener("onReady",Qi),a.removeEventListener("onStateChange",Qi);Jh(!1);(a=Cj())&&g.Mf(a);Ij.M.dispose.call(this)};
Ij.prototype.disable=function(){Ij.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",$i),window.removeEventListener("spfhistory",aj),window.removeEventListener("spfrequest",fj),window.removeEventListener("spfpartprocess",jj),window.removeEventListener("spfpartdone",kj),window.removeEventListener("spfprocess",lj),window.removeEventListener("spfdone",pj),window.removeEventListener("spferror",qj),window.removeEventListener("spfreload",rj),window.removeEventListener("spfjsbeforeunload",
Jj));window.onload=null;window.onunload=null;window.onerror=null};
g.ni(new Ij);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:01:12 Aug 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:26:16 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 217.782
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.057
  cdx.remote: 0.049
  esindex: 0.007
  LoadShardBlock: 149.343 (3)
  PetaboxLoader3.datanode: 137.773 (5)
  load_resource: 363.121 (2)
  PetaboxLoader3.resolve: 256.226 (2)
*/