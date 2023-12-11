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

var _yt_www={};(function(g){var window=this;var ha,ma,la,na,baa,qa,ra,daa,eaa,Ma,ob,naa,sb,qaa,raa,paa,uc,saa,taa,vc,uaa,waa,Gc,Jc,Kc,Ic,Oc,xaa,Rc,Zc,Yc,zaa,bd,cd,dd,ed,Aaa,fd,gd,ld,Baa,md,sd,ud,Caa,zd,Fd,xd,vd,Eaa,Ed,Ad,Bd,Hd,Daa,Qd,Faa,Sd,Ud,Vd,Haa,$d,ae,be,Iaa,je,te,ue,ye,Ae,Kaa,Be,Ke,Te,$e,Naa,Oaa,Paa,Qaa,nf,lf,jf,pf,Cf,Ef,Ff,Gf,Mf,Of,Xaa,Zf,mg,Yaa,vg,ug,Zaa,aba,Lg,Mg,Ng,Og,Qg,Pg,dba,eba,fba,Rg,Sg,Ug,Xg,Yg,eh,dh,hh,ih,jh,iba,mh,qh,mba,$g,gh,ph,uh,pba,qba,oh,zh,sh,Zg,fh,rh,Ah,Vg,kh,Wg,kba,Dh,Fh,Gh,Hh,Kh,Jh,Mh,Ih,Nh,Bh,Eh,wba,Oh,Qh,Ph,xba,
Vh,ci,gi,li,yba,Eba,Dba,Cba,ri,Bba,zba,Aba,Fba,Gba,Iba,Jba,Ji,Ei,Gi,Li,Kba,Mi,Oi,Lba,Mba,Pi,Qi,Vi,Zi,$i,aj,ej,fj,gj,Sba,Tba,Wi,Yi,Ui,Rba,Xi,kj,mj,jj,Uba,lj,Vba,Zba,Yba,bca,oj,aca,$ba,sj,nj,pj,qj,Wba,Xba,dca,uj,cca,rj,eca,gca,ica,hca,fca,zj,Aj,Bj,da,Cj,Ca,caa;g.ca=function(a){return function(){return g.ba[a].apply(this,arguments)}};
g.fa=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ea)ea(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
ha=function(){ha=function(){};
ia.Symbol||(ia.Symbol=aaa)};
ma=function(){ha();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(this)}});
ma=function(){}};
la=function(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
na=function(a){ma();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a};
g.pa=function(a){ma();var b=a[window.Symbol.iterator];return b?b.call(a):la(a)};
baa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
qa=function(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}};
ra=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.sa=function(a){return void 0!==a};
g.ta=function(a){return"string"==typeof a};
g.ua=function(a){return"number"==typeof a};
g.n=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.sa(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.q=function(a,b){for(var c=a.split("."),d=b||g.m,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.va=function(){};
g.wa=function(a){a.zc=void 0;a.getInstance=function(){return a.zc?a.zc:a.zc=new a}};
g.xa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.ya=function(a){return"array"==g.xa(a)};
g.za=function(a){var b=g.xa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Aa=function(a){return"function"==g.xa(a)};
g.Ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ea=function(a){return a[Ca]||(a[Ca]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.r=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.r=daa:g.r=eaa;return g.r.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.qV=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
g.Fa=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Fa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ga=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Ha=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Ia=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Ja=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ka=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
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
g.cb=function(a,b){return null!==a&&b in a};
g.db=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.eb=function(a){for(var b in a)return!1;return!0};
g.fb=function(a,b){b in a&&delete a[b]};
g.gb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.hb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.jb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ib.length;f++)c=ib[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.kb=function(){return g.Za("Trident")||g.Za("MSIE")};
g.mb=function(){return g.Za("Safari")&&!(g.lb()||g.Za("Coast")||g.Za("Opera")||g.Za("Edge")||g.Za("Silk")||g.Za("Android"))};
g.lb=function(){return(g.Za("Chrome")||g.Za("CriOS"))&&!g.Za("Edge")};
g.nb=function(){return g.Za("Android")&&!(g.lb()||g.Za("Firefox")||g.Za("Opera")||g.Za("Silk"))};
ob=function(){return g.Za("iPhone")&&!g.Za("iPod")&&!g.Za("iPad")};
g.pb=function(){return ob()||g.Za("iPad")||g.Za("iPod")};
g.qb=function(a){g.qb[" "](a);return a};
g.rb=function(a,b){try{return g.qb(a[b]),!0}catch(c){}return!1};
naa=function(a,b){var c=maa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
sb=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.ub=function(a){return naa(a,function(){return 0<=g.Na(g.tb,a)})};
g.wb=function(a){return Number(g.vb)>=a};
g.yb=function(){this.C="";this.F=g.xb};
g.zb=function(a){var b=new g.yb;b.C=a;return b};
g.Cb=function(){this.C="";this.F=Bb};
g.Db=function(a){if(a instanceof g.Cb&&a.constructor===g.Cb&&a.F===Bb)return a.C;g.xa(a);return"type_error:SafeUrl"};
g.Hb=function(a){if(a instanceof g.Cb)return a;a=a.pe?a.xd():String(a);g.Fb.test(a)||(a="about:invalid#zClosurez");return g.Gb(a)};
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
g.cc=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ka(d.name),'"');if(d.type){c.push(' type="',g.Ka(d.type),'"');var e={};g.jb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ta(d)?c.className=d:g.ya(d)?c.className=d.join(" "):g.Wb(c,d));2<b.length&&g.ec(a,c,b,2);return c};
g.ec=function(a,b,c,d){function e(c){c&&b.appendChild(g.ta(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.za(f)||g.Ba(f)&&0<f.nodeType?e(f):(0,g.z)(paa(f)?g.Wa(f):f,e)}};
g.fc=function(a){return window.document.createElement(String(a))};
g.Zb=function(a){return"CSS1Compat"==a.compatMode};
g.gc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.hc=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b)};
g.ic=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};
g.jc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
qaa=function(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null};
raa=function(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a};
g.kc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Ba(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Aa(a))return"function"==typeof a.item}return!1};
g.lc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.mc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.nc=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return a.left=c,a.top=e,a.width=d-c,a.height=f-e,!0}return!1};
g.oc=function(a){return new g.Tb(a.width,a.height)};
g.pc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.qc=function(a,b){a.style.height=g.pc(b,!0)};
g.rc=function(a,b){a.style.width=g.pc(b,!0)};
g.sc=function(a){return function(){return a}};
g.tc=function(a){return!!a.google_async_iframe_id};
uc=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
saa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=t=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],p=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var t=l^d&(f^l);var w=1518500249}else t=d^f^l,w=1859775393;else 60>c?(t=d&f|l&(d|f),w=2400959708):(t=d^f^l,w=3395469782);t=((a<<5|a>>>27)&4294967295)+t+p+w+b[c]&4294967295;p=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=t}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+p&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==t)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[t++]=a[d++],w++,64==t)for(t=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>t?c(l,56-t):c(l,64-(t-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var p=24;0<=p;p-=8)a[d++]=e[k]>>p&255;return a}
for(var e=[],f=[],k=[],l=[128],p=1;64>p;++p)l[p]=0;var t,w;a();return{reset:a,update:c,digest:d,Tv:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
taa=function(a,b,c){var d=[],e=[];if(1==(g.ya(c)?2:1))return e=[b,a],(0,g.z)(d,function(a){e.push(a)}),vc(e.join(" "));
var f=[],k=[];(0,g.z)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ta(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.z)(d,function(a){e.push(a)});
a=vc(e.join(" "));a=[c,a];g.Ta(k)||a.push(k.join(""));return a.join("_")};
vc=function(a){var b=saa();b.update(a);return b.Tv().toLowerCase()};
g.wc=function(a){this.C=a||{cookie:""}};
g.xc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.La)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
uaa=function(){var a=[],b=uc(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.wc(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.wc(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.m.location.href);return d&&b&&c?[c,taa(uc(d),b,a||null)].join(" "):null}return null};
g.yc=function(){this.Cc=this.Cc;this.Lb=this.Lb};
g.Bc=function(a,b){g.zc(a,g.u(g.Ac,b))};
g.zc=function(a,b){a.Cc?g.sa(void 0)?b.call(void 0):b():(a.Lb||(a.Lb=[]),a.Lb.push(g.sa(void 0)?(0,g.r)(b,void 0):b))};
g.Ac=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Cc=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1;this.Js=!0};
g.Dc=function(a,b){g.Cc.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.L=!1;this.wc=null;a&&this.init(a,b)};
g.Fc=function(a){return!(!a||!a[Ec])};
waa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.eh=e;this.key=++vaa;this.vg=this.Sh=!1};
Gc=function(a){a.vg=!0;a.listener=null;a.C=null;a.src=null;a.eh=null};
g.Hc=function(a){this.src=a;this.listeners={};this.C=0};
Jc=function(a,b,c,d,e,f){var k=b.toString();b=a.listeners[k];b||(b=a.listeners[k]=[],a.C++);var l=Ic(b,c,e,f);-1<l?(a=b[l],d||(a.Sh=!1)):(a=new waa(c,a.src,k,!!e,f),a.Sh=d,b.push(a));return a};
Kc=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Va(a.listeners[c],b);d&&(Gc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Ic=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.vg&&f.listener==b&&f.capture==!!c&&f.eh==d)return e}return-1};
g.Mc=function(a,b,c,d,e){if(d&&d.once)return g.Lc(a,b,c,d,e);if(g.ya(b)){for(var f=0;f<b.length;f++)g.Mc(a,b[f],c,d,e);return null}c=g.Nc(c);return g.Fc(a)?a.R(b,c,g.Ba(d)?!!d.capture:!!d,e):Oc(a,b,c,!1,d,e)};
Oc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ba(e)?!!e.capture:!!e,l=g.Pc(a);l||(a[Qc]=l=new g.Hc(a));c=Jc(l,b,c,d,k,f);if(c.C)return c;d=xaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)yaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Rc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Sc++;return c};
xaa=function(){var a=zaa,b=Tc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Lc=function(a,b,c,d,e){if(g.ya(b)){for(var f=0;f<b.length;f++)g.Lc(a,b[f],c,d,e);return null}c=g.Nc(c);return g.Fc(a)?a.Le(b,c,g.Ba(d)?!!d.capture:!!d,e):Oc(a,b,c,!0,d,e)};
g.Uc=function(a,b,c,d,e){if(g.ya(b))for(var f=0;f<b.length;f++)g.Uc(a,b[f],c,d,e);else d=g.Ba(d)?!!d.capture:!!d,c=g.Nc(c),g.Fc(a)?a.Wa(b,c,d,e):a&&(a=g.Pc(a))&&(b=a.kf(b,c,d,e))&&g.Vc(b)};
g.Vc=function(a){if(g.ua(a)||!a||a.vg)return!1;var b=a.src;if(g.Fc(b))return Kc(b.wd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(Rc(c),d);Sc--;(c=g.Pc(b))?(Kc(c,a),0==c.C&&(c.src=null,b[Qc]=null)):Gc(a);return!0};
Rc=function(a){return a in Wc?Wc[a]:Wc[a]="on"+a};
Zc=function(a,b,c,d){var e=!0;if(a=g.Pc(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.vg&&(f=Yc(f,d),e=e&&!1!==f)}return e};
Yc=function(a,b){var c=a.listener,d=a.eh||a.src;a.Sh&&g.Vc(a);return c.call(d,b)};
zaa=function(a,b){if(a.vg)return!0;if(!Tc){var c=b||g.q("window.event"),d=new g.Dc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(p){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Zc(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Zc(c[k],f,!1,d),e=e&&l}return e}return Yc(a,new g.Dc(b,
this))};
g.Pc=function(a){a=a[Qc];return a instanceof g.Hc?a:null};
g.Nc=function(a){if(g.Aa(a))return a;a[$c]||(a[$c]=function(b){return a.handleEvent(b)});
return a[$c]};
g.ad=function(){g.yc.call(this);this.wd=new g.Hc(this);this.av=this;this.Xl=null};
bd=function(a,b,c,d){b=a.wd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.vg&&k.capture==c){var l=k.listener,p=k.eh||k.src;k.Sh&&Kc(a.wd,k);e=!1!==l.call(p,d)&&e}}return e&&0!=d.Js};
cd=function(a,b,c){this.H=c;this.D=a;this.G=b;this.F=0;this.C=null};
dd=function(a,b){a.G(b);a.F<a.H&&(a.F++,b.next=a.C,a.C=b)};
ed=function(a){g.m.setTimeout(function(){throw a;},0)};
Aaa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Za("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.r)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.kb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.sa(c.next)){c=c.next;var a=c.In;c.In=null;a()}};
return function(a){d.next={In:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
fd=function(){this.F=this.C=null};
gd=function(){this.next=this.scope=this.kc=null};
ld=function(a,b){hd||Baa();id||(hd(),id=!0);var c=jd,d=kd.get();d.set(a,b);c.F?c.F.next=d:c.C=d;c.F=d};
Baa=function(){if(-1!=String(g.m.Promise).indexOf("[native code]")){var a=g.m.Promise.resolve(void 0);hd=function(){a.then(md)}}else hd=function(){var a=md;
!g.Aa(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.Za("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(nd||(nd=Aaa()),nd(a)):g.m.setImmediate(a)}};
md=function(){for(var a;a=jd.remove();){try{a.kc.call(a.scope)}catch(b){ed(b)}dd(kd,a)}id=!1};
g.od=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.pd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.rd=function(a,b){this.C=0;this.O=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.va)try{var c=this;a.call(b,function(a){g.qd(c,2,a)},function(a){g.qd(c,3,a)})}catch(d){g.qd(this,3,d)}};
sd=function(){this.next=this.context=this.F=this.D=this.C=null;this.G=!1};
ud=function(a,b,c){var d=td.get();d.D=a;d.F=b;d.context=c;return d};
Caa=function(a,b,c){vd(a,b,c,null)||ld(g.u(b,a))};
g.wd=function(a){return new g.rd(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],Caa(p,g.u(f,l),k);
else b(e)})};
g.yd=function(a,b){return xd(a,null,b,void 0)};
zd=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.G||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?zd(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Ad(c),Bd(c,e,3,b)))}a.D=null}else g.qd(a,3,b)};
Fd=function(a,b){a.F||2!=a.C&&3!=a.C||Ed(a);a.G?a.G.next=b:a.F=b;a.G=b};
xd=function(a,b,c,d){var e=ud(null,null,null);e.C=new g.rd(function(a,k){e.D=b?function(c){try{var e=b.call(d,c);a(e)}catch(t){k(t)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.sa(e)&&b instanceof g.Gd?k(b):a(e)}catch(t){k(t)}}:k});
e.C.D=a;Fd(a,e);return e.C};
g.qd=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,vd(c,a.W,a.N,a)||(a.O=c,a.C=b,a.D=null,Ed(a),3!=b||c instanceof g.Gd||Daa(a,c)))};
vd=function(a,b,c,d){if(a instanceof g.rd)return Fd(a,ud(b||g.va,c||null,d)),!0;if(g.pd(a))return a.then(b,c,d),!0;if(g.Ba(a))try{var e=a.then;if(g.Aa(e))return Eaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Eaa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(p){f(p)}};
Ed=function(a){a.L||(a.L=!0,ld(a.J,a))};
Ad=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Bd=function(a,b,c,d){if(3==c&&b.F&&!b.G)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Hd(b,c,d);else try{b.G?b.D.call(b.context):Hd(b,c,d)}catch(e){Id.call(null,e)}dd(td,b)};
Hd=function(a,b,c){2==b?a.D.call(a.context,c):a.F&&a.F.call(a.context,c)};
Daa=function(a,b){a.H=!0;ld(function(){a.H&&Id.call(null,b)})};
g.Gd=function(a){g.Fa.call(this,a)};
g.Jd=function(a,b,c){if(g.Aa(a))c&&(a=(0,g.r)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.r)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.Kd=function(a){g.m.clearTimeout(a)};
g.Ld=function(a,b,c){g.yc.call(this);this.C=a;this.D=b||0;this.F=c;this.uc=(0,g.r)(this.Jk,this)};
g.Md=function(a){var b=g.q("window.location.href");if(g.ta(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.Nd=function(a){if(a.classList)return a.classList;a=a.className;return g.ta(a)&&a.match(/\S+/g)||[]};
g.B=function(a,b){return a.classList?a.classList.contains(b):g.Sa(g.Nd(a),b)};
g.Od=function(){};
Qd=function(a){if(a instanceof g.Od)return a;if("function"==typeof a.dd)return a.dd(!1);if(g.za(a)){var b=0,c=new g.Od;c.next=function(){for(;;){if(b>=a.length)throw g.Pd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Rd=function(a,b,c){if(g.za(a))try{(0,g.z)(a,b,c)}catch(d){if(d!==g.Pd)throw d;}else{a=Qd(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Pd)throw d;}}};
Faa=function(a){if(g.za(a))return g.Wa(a);a=Qd(a);var b=[];g.Rd(a,function(a){b.push(a)});
return b};
g.Td=function(a){return(new Sd(void 0)).Ej(a)};
Sd=function(a){this.C=a};
Ud=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Ud(a,a.C?a.C.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Vd(d,c),c.push(":"),Ud(a,a.C?a.C.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Vd(b,
c);break;case "number":c.push((0,window.isFinite)(b)&&!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Vd=function(a,b){b.push('"',a.replace(Gaa,function(a){var b=Wd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Wd[a]=b);return b}),'"')};
g.Xd=function(a){g.yc.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.Yd=function(a,b,c,d){if(b=a.F[b]){var e=a.C;if(b=g.Qa(b,function(a){return e[a+1]==c&&e[a+2]==d}))return a.rd(b)}return!1};
Haa=function(a,b,c){ld(function(){a.apply(b,c)})};
g.Zd=function(a){this.C=a};
$d=function(a){this.C=a};
ae=function(a){this.data=a};
be=function(a){return!g.sa(a)||a instanceof ae?a:new ae(a)};
g.ce=function(a){this.C=a};
g.ee=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.de)()||!!b&&b>(0,g.de)()};
g.fe=function(a){this.C=a};
Iaa=function(){};
g.ge=function(){};
g.he=function(a){this.C=a};
g.ie=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
je=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.C=a};
g.ke=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.le=function(a){return a.match(Jaa)};
g.me=function(a){return a?(0,window.decodeURI)(a):a};
g.ne=function(a){return g.me(g.le(a)[3]||null)};
g.oe=function(a){a=g.le(a);return g.ke(null,null,null,null,a[5],a[6],a[7])};
g.pe=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.qe=function(a,b,c){if(g.ya(b))for(var d=0;d<b.length;d++)g.qe(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ia(b)))};
g.re=function(a){var b=[],c;for(c in a)g.qe(c,a[c],b);return b.join("&")};
g.se=function(a,b){var c=g.re(b);return g.pe(a,c)};
te=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
ue=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.we=function(a){ue(g.ve,arguments)};
ye=function(a,b){var c=g.C(a,void 0);c?c.push(b):g.we(a,[b])};
g.C=function(a,b){return a in g.ve?g.ve[a]:b};
Ae=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.ze(b)}}:a};
g.ze=function(a,b,c,d,e){var f=g.q("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.C("ERRORS",[]),f.push([a,b,c,d,e]),g.we("ERRORS",f))};
Kaa=function(a,b,c,d,e){var f=!1,k=g.ve.EXPERIMENT_FLAGS;if((k=k?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,p=k.length;l<p;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.ta(a)||(window.ErrorEvent&&a instanceof window.ErrorEvent&&(d=a.colno),a="Unknown error",b="Unknown file",c=0),e=Error(),e.message=a,e.fileName=b,e.lineNumber=c,(0,window.isNaN)(d)||(e.columnNumber=d)),g.ze(e))};
g.Ce=function(a){return!!Be(a)};
g.De=function(a){return Number(Be(a)||0)};
Be=function(a){return g.C("EXPERIMENT_FLAGS",{})[a]};
g.D=function(a,b){return a?a.dataset?a.dataset[g.Ee(b)]:a.getAttribute("data-"+b):null};
g.Ee=function(a){return Fe[a]||(Fe[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Ge=function(a,b){g.Aa(a)&&(a=Ae(a));return window.setTimeout(a,b)};
g.He=function(a,b){g.Aa(a)&&(a=Ae(a));return window.setInterval(a,b)};
g.Ie=function(a){window.clearTimeout(a)};
g.Je=function(a){window.clearInterval(a)};
g.E=function(a,b,c){var d=Ke();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Le[e]&&b.apply(c||window,d)};
try{Me[a]?k():g.Ge(k,0)}catch(l){g.ze(l)}},c);
Le[e]=!0;Ne[a]||(Ne[a]=[]);Ne[a].push(e);return e}return 0};
g.Oe=function(a){var b=Ke();b&&(g.ua(a)?a=[a]:g.ta(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.z)(a,function(a){b.unsubscribeByKey(a);delete Le[a]}))};
g.F=function(a,b){var c=Ke();return c?c.publish.apply(c,arguments):!1};
g.Pe=function(a,b){Me[a]=!0;var c=Ke();c=c?c.publish.apply(c,arguments):!1;Me[a]=!1;return c};
Ke=function(){return g.q("ytPubsubPubsubInstance")};
g.Re=function(a,b){var c=g.Qe(a);window.spf.script.load(a,c,b)};
g.Qe=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Laa,""),b=b.replace(Maa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
Te=function(){return null!=g.Se};
g.Ue=function(){return g.Se?g.Se.invoke():null};
g.Ve=function(){return!!g.q("yt.scheduler.instance")};
g.We=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Ge(a,c||0)};
g.Xe=function(a,b){return g.We(a,1,b)};
g.Ye=function(a){if(!(0,window.isNaN)(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.Ie(a)}};
g.Ze=function(a){for(var b=0,c=a.length;b<c;b++)g.Ye(a[b])};
$e=function(){return(0,window.parseInt)(g.C("DCLKSTAT",0),10)};
Naa=function(){if(!af)return null;var a=af();return"open"in a?a:null};
g.cf=function(a){switch(g.bf(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.bf=function(a){return a&&"status"in a?a.status:-1};
g.df=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Ja(e[0]||"");e=g.Ja(e[1]||"");f in b?g.ya(b[f])?g.Xa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.ff=function(a,b){return g.ef(a,b||{},!0)};
g.ef=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.df(e[1]||"");for(var f in b)if(c||!g.cb(e,f))e[f]=b[f];return g.se(a,e)+d};
Oaa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.le(a)[1]||null,e=g.ne(a);d&&e?(d=c,c=g.le(a),d=g.le(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.ne(c)==e&&(Number(g.le(c)[4]||null)||null)==(Number(g.le(a)[4]||null)||null):!0;for(var f in gf){if((e=d=g.C(gf[f]))&&!(e=c)){e=f;var k=g.C("CORS_HEADER_WHITELIST")||{},l=g.ne(a);e=l?(k=k[l])?g.Sa(k,e):!1:!0}e&&(b[f]=d)}return b};
Paa=function(a,b){var c=g.C("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.kw&&(!g.ne(a)||b.withCredentials||g.ne(a)==window.document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.ka&&b.ka[c])};
g.G=function(a,b){var c=b.format||"JSON";b.bB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var d=g.C("XSRF_FIELD_NAME",void 0),e=g.C("XSRF_TOKEN",void 0),f=b.Ba;f&&(f[d]&&delete f[d],a=g.ff(a,f));f=b.postBody||"";var k=b.ka;Paa(a,b)&&(k||(k={}),k[d]=e);k&&g.ta(f)&&(d=g.df(f),g.jb(d,k),f=b.Zr&&"JSON"==b.Zr?JSON.stringify(d):g.re(d));d=f||k&&!g.eb(k);!hf&&d&&"POST"!=b.method&&(hf=!0,g.ze(Error("AJAX request with postData should use POST")));
var l=!1,p,t=jf(a,function(a){if(!l){l=!0;p&&g.Ie(p);var d=g.cf(a),e=null;if(d||400<=a.status&&500>a.status)e=Qaa(c,a,b.sb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||g.m;d?b.Z&&b.Z.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.cb&&b.cb.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.lc&&0<b.timeout&&(p=g.Ge(function(){l||(l=!0,t.abort(),g.Ie(p),b.lc.call(b.context||g.m,t))},b.timeout));
return t};
Qaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?lf(b):null)d={},(0,g.z)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.mf(a)})}c&&nf(d);
return d};
nf=function(a){if(g.Ba(a))for(var b in a)"html_content"==b||g.Ha(b,"_html")?a[b]=g.Qb(g.zb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):nf(a[b])};
lf=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.mf=function(a){var b="";(0,g.z)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.of=function(a,b){b.method="POST";b.ka||(b.ka={});return g.G(a,b)};
jf=function(a,b,c,d,e,f,k){function l(){4==(p&&"readyState"in p?p.readyState:0)&&b&&Ae(b)(p)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var p=Naa();if(!p)return null;"onloadend"in p?p.addEventListener("loadend",l,!1):p.onreadystatechange=l;p.open(c,a,!0);f&&(p.responseType=f);k&&(p.withCredentials=!0);c="POST"==c;if(e=Oaa(a,e))for(var t in e)p.setRequestHeader(t,e[t]),"content-type"==t.toLowerCase()&&(c=!1);c&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded");p.send(d);return p};
pf=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.qf=function(a){var b=new pf;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.rf=function(a){var b=new pf;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.tf=function(a){var b=a.__yt_uid_key;b||(b=sf(),a.__yt_uid_key=b);return b};
g.uf=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Raa+"VisibilityState";if(b in a)return a[b]};
g.vf=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Saa||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.C=a.pageX;this.F=a.pageY}};
g.xf=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.db(wf,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.H=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.xf(a,b,c,d);if(e)return e;e=++yf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.vf(d);if(!g.lc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.vf(b);
b.currentTarget=a;return c.call(a,b)};
k=Ae(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);wf[e]=[a,b,c,k,d];return e};
g.I=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.z)(a,function(a){if(a in wf){var b=wf[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete wf[a]}}))};
g.zf=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Af=function(a,b,c){var d;return d=g.H(a,b,function(){g.I(d);c.apply(a,arguments)},!1)};
g.Bf=function(a){for(var b in wf)wf[b][0]==a&&g.I(b)};
Cf=function(a){g.yc.call(this);this.C=[];this.F=a||this};
Ef=function(a,b,c,d){d=Ae((0,g.r)(d,a.F));d={target:b,name:c,Be:d};b.addEventListener(c,d.Be,void 0);a.C.push(d)};
Ff=function(a){for(;a.C.length;){var b=a.C.pop();b.target.removeEventListener(b.name,b.Be)}};
Gf=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.hb(Taa);this.assets=a.assets||{};this.attrs=a.attrs||g.hb(Uaa);this.params=a.params||g.hb(Vaa);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Hf=function(a){a instanceof Gf||(a=new Gf(a));return a};
g.Jf=function(){this.C=this.minor=this.major=0;var a=g.q("window.navigator.plugins"),b=g.q("window.navigator.mimeTypes");a=a&&a["Shockwave Flash"];b=b&&b["application/x-shockwave-flash"];if(b=a&&b&&b.enabledPlugin&&a.description||""){a=b.indexOf("Shockwave Flash");0<=a&&(b=b.substr(a+15));a=b.split(" ");var c="";b="";for(var d=0,e=a.length;d<e;d++)if(c)if(b)break;else b=a[d];else c=a[d];c=c.split(".");a=(0,window.parseInt)(c[0],10)||0;c=(0,window.parseInt)(c[1],10)||0;d=0;if("r"==b.charAt(0)||"d"==
b.charAt(0))d=(0,window.parseInt)(b.substr(1),10)||0;b=[a,c,d]}else b=[0,0,0];this.major=b[0];this.minor=b[1];this.C=b[2];if(0>=this.major){if(g.If)try{var f=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(t){f=null}else{var k=window.document.body;var l=window.document.createElement("object");l.setAttribute("type","application/x-shockwave-flash");f=k.appendChild(l)}if(f&&"GetVariable"in f)try{var p=f.GetVariable("$version")}catch(t){p=""}k&&l&&k.removeChild(l);(f=p||"")?(f=f.split(" ")[1].split(","),
f=[(0,window.parseInt)(f[0],10)||0,(0,window.parseInt)(f[1],10)||0,(0,window.parseInt)(f[2],10)||0]):f=[0,0,0];this.major=f[0];this.minor=f[1];this.C=f[2]}};
g.Kf=function(a,b){var c="string"==typeof b?b.split("."):[b,void 0,void 0];c[0]=(0,window.parseInt)(c[0],10)||0;c[1]=(0,window.parseInt)(c[1],10)||0;c[2]=(0,window.parseInt)(c[2],10)||0;return a.major>c[0]||a.major==c[0]&&a.minor>c[1]||a.major==c[0]&&a.minor==c[1]&&a.C>=c[2]};
Mf=function(a){ue(g.Lf,arguments)};
g.Nf=function(a){return a in g.Lf};
Of=function(a){ue(g.Lf,arguments)};
g.Pf=function(a,b,c){if(b){a=g.ta(a)?g.Ub(a):a;var d=g.hb(c.attrs);d.tabindex=0;var e=g.hb(c.params);e.flashvars=g.re(c.args);if(g.If){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=window.document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(var k in e)d=window.document.createElement("param"),d.setAttribute("name",k),d.setAttribute("value",e[k]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=window.document.createElement("embed");b.setAttribute("name",
d.id);for(var l in d)b.setAttribute(l,d[l]);for(var p in e)b.setAttribute(p,e[p])}e=window.document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}};
g.Tf=function(a,b,c,d,e,f){f=f||{};f.name=c||g.C("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Qf||(c=a.stacktrace,d=a.columnNumber,a=g.Md(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),Rf[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={Ba:{a:"logerror",t:"jserror",type:a.name,
msg:a.message.substr(0,1E3),line:e,level:void 0===b?"ERROR":b,"client.name":f.name},ka:{url:g.C("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ka.stack=c);for(var k in f)b.ka["client."+k]=f[k];if(k=g.C("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ka[l]=k[l];g.G("/error_204",b);Rf[a.message]=!0;Qf++}};
g.Uf=function(a,b,c,d,e){this.D=a;this.H=b;this.G=c;this.F=d;this.C=e};
g.Vf=function(a){return new g.Uf(a)};
g.Wf=function(a){var b={};void 0!==a.D?b.trackingParams=a.D:(b.veType=a.H,null!=a.G&&(b.veCounter=a.G),null!=a.F&&(b.elementIndex=a.F));void 0!==a.C&&(b.dataElement=g.Wf(a.C));return b};
g.bg=function(a,b){g.Xf[a.endpoint]=b;if(a.Wh){var c=a.Wh;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Yf[a.Wh.token]=d;c=Zf(a.endpoint,a.Wh.token)}else c=Zf(a.endpoint);c.push(a.payload);c.length>=(g.De("web_logging_max_batch")||20)?g.$f():g.ag()};
g.$f=function(){g.Ie(g.cg);if(!g.eb(g.dg)){for(var a in g.dg){var b=g.eg[a];if(!b){var c=g.Xf[a];if(!c)continue;b=new c;g.eg[a]=b}c=void 0;var d=a,e=b,f=Waa[d],k=fg[d]||{};fg[d]=k;b=Math.round(g.gg());for(c in g.dg[d]){var l=g.hg(e);l[f]=Zf(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var p=Yf[c];if(p)a:{var t=l,w=c;if(p.videoId)var A="VIDEO";else if(p.playlistId)A="PLAYLIST";else break a;t.credentialTransferTokenTargetId=p;t.context=
t.context||{};t.context.user=t.context.user||{};t.context.user.credentialTransferTokens=[{token:w,scope:A}]}delete Yf[c];g.ig(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.dg[a]}g.eb(g.dg)||g.ag()}};
Xaa=function(){var a=[],b;for(b in g.dg){var c=fg[b]||{};fg[b]=c;for(var d in g.dg[b]){var e=Zf(b,d);c.storedEventsCount=c.storedEventsCount||0;c.storedEventsCount+=e.length}}d=Math.round(g.gg());for(b in fg)c=fg[b],b in jg?c.eventType=jg[b]:c.eventType="UNKNOWN_TYPE",e=kg[b],c.metricIntervalMs=e?d-e:d-g.lg,a.push(c),kg[b]=d,delete fg[b];return a};
g.ag=function(){g.Ie(g.cg);g.cg=g.Ge(g.$f,g.C("LOGGING_BATCH_TIMEOUT",1E4))};
Zf=function(a,b){b||(b="");g.dg[a]=g.dg[a]||{};g.dg[a][b]=g.dg[a][b]||[];return g.dg[a][b]};
g.ng=function(){if(null==g.q("_lact",window)){var a=(0,window.parseInt)(g.C("LACT"),10);a=(0,window.isFinite)(a)?(0,g.de)()-Math.max(a,0):-1;g.n("_lact",a,window);g.n("_fact",a,window);-1==a&&mg();g.H(window.document,"keydown",mg);g.H(window.document,"keyup",mg);g.H(window.document,"mousedown",mg);g.H(window.document,"mouseup",mg);g.E("page-mouse",mg);g.E("page-scroll",mg);g.E("page-resize",mg)}};
mg=function(){null==g.q("_lact",window)&&g.ng();var a=(0,g.de)();g.n("_lact",a,window);-1==g.q("_fact",window)&&g.n("_fact",a,window);(a=g.q("ytglobal.ytUtilActivityCallback_"))&&a()};
g.og=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.de)()-a,0)};
g.qg=function(a,b,c,d){var e=g.pg,f={};f.eventTimeMs=Math.round(c||g.gg());f[a]=b;f.context={lastActivityMs:String(c?-1:g.og())};b="log_event";g.Ce("web_system_health_gel2")&&"systemHealthCaptured"==a&&(b="log_event2");g.bg({endpoint:b,payload:f,Wh:d},e)};
Yaa=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.pg=function(a){this.C=a||{apiaryHost:g.C("APIARY_HOST",void 0),oV:g.C("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!g.C("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:g.C("GAPI_HINT_PARAMS",void 0),innertubeApiKey:g.C("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.C("INNERTUBE_API_VERSION",void 0),dB:g.C("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),fB:g.C("INNERTUBE_CONTEXT_HL",void 0),eB:g.C("INNERTUBE_CONTEXT_GL",void 0),
xhrApiaryHost:g.C("XHR_APIARY_HOST",void 0)||"",gB:g.C("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
g.hg=function(a){a=a.C;a={client:{hl:a.fB,gl:a.eB,clientName:a.dB,clientVersion:a.innertubeContextClientVersion}};g.C("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.C("DELEGATED_SESSION_ID")});return{context:a}};
g.ig=function(a,b,c,d){!g.C("VISITOR_DATA")&&.01>Math.random()&&g.ze(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.C("VISITOR_DATA","")},ka:c,Zr:"JSON",lc:d.lc,Z:function(a,b){d.Z&&d.Z(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=uaa();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.C("SESSION_INDEX",0));var k="",l=a.C.gB;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);g.of(""+k+Yaa(a.C.innertubeApiVersion,b,c)+"?alt=json&key="+a.C.innertubeApiKey,e)};
g.rg=function(a,b,c){g.qg(a,b,c,void 0)};
g.sg=function(){g.Ce("log_web_meta")&&Xaa().forEach(function(a){g.rg("delayedEventMetricCaptured",a)})};
g.tg=function(a,b,c){(0,g.z)(b,function(b){g.qg("visualElementHidden",{csn:a,ve:g.Wf(b),eventType:c?16:8})})};
vg=function(a,b){var c=Object.keys(a).join("");ug("info_"+c+"_"+b)||(a.clientActionNonce=b,g.rg("latencyActionInfo",a))};
ug=function(a){wg[a]=wg[a]||{count:0};var b=wg[a];b.count++;b.time=g.gg();xg||(xg=g.We(Zaa,0,5E3));return 10<b.count?(11==b.count&&g.Tf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
Zaa=function(){var a=g.gg(),b;for(b in wg)6E4<a-wg[b].time&&delete wg[b];xg=0};
g.Ag=function(a){if(!g.yg&&!g.zg||!window.JSON)return null;try{var b=g.yg.get(a)}catch(c){}if(!g.ta(b))try{b=g.zg.get(a)}catch(c){}if(!g.ta(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.Bg=function(){var a=g.C("ROOT_VE_TYPE",void 0);return a?new g.Uf(void 0,a,void 0):null};
g.Cg=function(){return g.Ag("yt-interaction-logging-parent")};
g.Dg=function(){var a=g.C("client-screen-nonce")||g.C("EVENT_ID");return a?a:null};
g.Eg=function(a,b){a=a||"";var c=a.match($aa);window.spf.style.load(a,c?c[1]:"",b)};
g.Fg=function(a,b,c,d){a&&(c&&(c=g.Ya,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.dc("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.kc(a).body.appendChild(a)):g.C("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?jf(a,b,"GET","",d):aba(a,b))};
aba=function(a,b){var c=new window.Image,d=""+bba++;Gg[d]=c;c.onload=c.onerror=function(){b&&Gg[d]&&b();delete Gg[d]};
c.src=a};
g.Hg=function(a,b){this.version=a;this.args=b};
g.Ig=function(a,b){this.topic=a;this.Xh=b};
g.Kg=function(a,b){var c=g.Jg();c&&c.publish.call(c,a.toString(),a,b)};
g.Jg=function(){return g.q("ytPubsub2Pubsub2Instance")};
Lg=function(){var a=g.C("TIMING_TICK_EXPIRATION");a||(a={},g.we("TIMING_TICK_EXPIRATION",a));return a};
Mg=function(){var a=Lg(),b;for(b in a)g.Ye(a[b]);g.we("TIMING_TICK_EXPIRATION",{})};
Ng=function(a,b){g.Hg.call(this,1,arguments)};
Og=function(a,b){g.Hg.call(this,1,arguments)};
Qg=function(a){this.C=a=void 0===a?window:a;this.W=this.H=0;if(this.C.performance&&this.C.performance.timing&&this.C.performance.getEntriesByType){a=g.Yb(this.C);this.J=new g.mc(0,0,a.width,a.height);a=[];for(var b=this.C.document.getElementsByTagName("*"),c=0,d=b.length;c<d;c++){var e=b[c];if("IMG"==e.tagName||"IFRAME"==e.tagName){var f=Pg(this,e,e.src);if(f){if("IFRAME"==e.tagName){try{var k=(new Qg(e.contentWindow)).H}catch(p){k=0}var l=k;0<l&&(f.timing=l)}a.push(f)}}(f=this.C.getComputedStyle(e)["background-image"])&&
(f=cba.exec(f))&&1<f.length&&(e=Pg(this,e,f[1]))&&a.push(e)}this.F=a;this.G=this.C.performance.getEntriesByType("resource");this.L=this.C.performance.getEntriesByType("mark");k={};b=0;for(a=this.G.length;b<a;b++)c=this.G[b],k[c.name]=c.responseEnd;b=0;for(a=this.L.length;b<a;b++)c=this.L[b],"mark_iframe_loaded: "==c.name.slice(0,20)&&(k[c.name.slice(20)]=c.startTime);b=0;for(a=this.F.length;b<a;b++)c=this.F[b],c.timing||(c.timing=k[c.url]||0);this.O=dba(this);this.D=eba(this);e=k=0;if(this.D.length)for(b=
a=0,c=this.D.length;b<c;b++)d=this.D[b],e=d.timing-e,0<e&&1>a&&(k+=(1-a)*e),e=d.timing,a=d.progress;this.H=Math.round(k||this.O);this.W=e;fba(this)}};
Pg=function(a,b,c){return c&&b.getBoundingClientRect&&(b=b.getBoundingClientRect(),b=new g.mc(b.left,b.top,b.width,b.height),g.nc(b,a.J))?new Rg(b,c):null};
dba=function(a){var b=a.C.performance.timing.navigationStart;if("msFirstPaint"in a.C.performance.timing)var c=a.C.performance.timing.C-b;else if("chrome"in a.C&&"loadTimes"in a.C.chrome){var d=a.C.chrome.loadTimes(),e=d.firstPaintTime;if(0<e){var f=d.startLoadTime;"requestTime"in d&&(f=d.requestTime);e>=f&&(c=1E3*(e-f))}}if(void 0===c||0>c||12E4<c){c=a.C.performance.timing.responseStart-b;var k={};b=a.C.document.getElementsByTagName("head")[0].children;d=0;for(e=b.length;d<e;d++)f=b[d],"SCRIPT"==
f.tagName&&f.src&&!f.async?k[f.src]=!0:"LINK"==f.tagName&&"stylesheet"==f.rel&&f.href&&(k[f.href]=!0);a.G.some(function(a){if(!k[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===c||a>c)c=a})}return Math.max(c,0)||0};
eba=function(a){for(var b={0:0},c=0,d=a.O,e=0,f=a.F.length;e<f;e++){var k=a.F[e],l=d;k.timing>d&&(l=k.timing);b[l]||(b[l]=0);k=g.oc(k.region).Xf();b[l]+=k;c+=k}f=g.oc(a.J).Xf();0<f&&(f=.1*Math.max(f-c,0),d in b||(b[d]=0),b[d]+=f,c+=f);d=[];if(c){for(var p in b)d.push(new Sg((0,window.parseFloat)(p),b[p]));d.sort(function(a,b){return a.timing-b.timing});
p=b=0;for(f=d.length;p<f;p++)a=d[p],b+=a.Xf,a.progress=b/c}return d};
fba=function(a){a.G.map(function(a){return a.name+": "+a.responseEnd}).join(", ");
a.L.map(function(a){return a.name+": "+a.startTime}).join(", ");
a.F.map(function(a){return a.toString()}).join("\n");
a.D.map(function(a){return a.toString()}).join("\n")};
Rg=function(a,b){this.region=a;this.url=b};
Sg=function(a,b){this.Xf=b;this.timing=a};
Ug=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.de)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Tg)for(a=1,b=0;b<Tg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Tg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&
63));return a.join("")};
Xg=function(a){Vg(a);gba();Wg(!1,a);a||(g.C("TIMING_ACTION")&&g.we("PREVIOUS_ACTION",g.C("TIMING_ACTION")),g.we("TIMING_ACTION",""))};
g.bh=function(a,b,c){b||"_"==a[0]||Yg(a,c);var d=Zg(c),e=b||g.gg();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=Lg();var f=e[a];f&&(g.Ye(f),e[a]=0);$g(a,b,c)||g.ah(!1,c);return d[a]};
Yg=function(a,b){ch.mark&&(g.Ga(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),ch.mark(a))};
eh=function(a,b){dh("yt_sts",a,void 0);g.bh("_start",b,void 0)};
dh=function(a,b,c){fh(c)[a]=b;gh(a,b,c)};
hh=function(a){var b=fh(void 0);return a in b};
ih=function(a){var b=Zg(a);if(b.aft)return b.aft;a=g.C((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
jh=function(a){g.bh("nreqs",a.requestStart,void 0);g.bh("nress",a.responseStart,void 0);g.bh("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.bh("nrs",a.redirectStart,void 0),g.bh("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.bh("ndnss",a.domainLookupStart,void 0),g.bh("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.bh("ntcps",a.connectStart,void 0),g.bh("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.bh("nstcps",a.secureConnectionStart,void 0),g.bh("ntcpe",a.connectEnd,void 0))};
g.ah=function(a,b){if(!kh(b)){var c=g.C((b||"")+"TIMING_ACTION",void 0),d=Zg(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=ih(b)))if(g.Ce("tighter_critical_section")&&!lh&&(g.Kg(hba,new Ng(Math.round(c-d._start),b)),lh=!0),a||b)mh(b);else{c=!0;var e=g.C("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&mh(b)}}};
iba=function(){switch(g.uf()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
mh=function(a){Mg();if(!g.Ce("csi_on_gel")){var b=Zg(a),c=fh(a),d=b._start,e;for(e in b)if(g.Ga(e,"_")&&g.ya(b[e])){var f=e.slice(1);if(f in jba){var k=(0,g.nh)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.q("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))oh(k,f),Xg(a)}else{var l=g.C("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.C((a||"")+"TIMING_ACTION",void 0)};var p=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var t=window.location.protocol+g.q("ytplayer.config.assets.js");(t=ch.getEntriesByName?ch.getEntriesByName(t)[0]:null)?c.h5jse=Math.round(c.h5jse-t.responseEnd):delete c.h5jse}b.aft=ih(a);kba(a)&&"youtube"==l&&(dh("yt_lt","hot_bg",a),l=
b.vc,t=b.pbs,delete b.aft,c.aft=Math.round(t-l));for(var w in c)"_"!=w.charAt(0)&&(k[w]=c[w]);b.ps=g.gg();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,w.push(e+"."+l));k.rt=w.join(",");(b=g.q("ytdebug.logTiming"))&&b(k,c);oh(k,f,a);g.Kg(lba,new Og(c.aft+(p||0),a))}}};
qh=function(a){if(!kh(void 0)){if(!g.Ce("send_empty_timing")){var b=g.C("CSI_SERVICE_NAME","youtube");if(!g.C("TIMING_ACTION",void 0)||!b)return}g.bh("aa",void 0,void 0);dh("ap",1,void 0);dh("yt_fss",a,void 0);!g.Ce("enable_csi_abandonment_info")||hh("yt_lt")||ph();mh(void 0)}};
mba=function(){if("cold"==fh().yt_lt){var a=Zg(),b=rh(),c;for(c in a)g.Ga(c,"_")||"tick_"+c in b||$g(c,a[c]);a=fh();for(c in a)"info_"+c in b||gh(c,a[c])}};
$g=function(a,b,c){rh(c)["tick_"+a]=b;c||b||g.gg();return g.Ce("csi_on_gel")?(c=sh(c),"_start"==a?ug("baseline_"+c)||g.rg("latencyActionBaselined",{clientActionNonce:c},b):ug("tick_"+a+"_"+c)||g.rg("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
gh=function(a,b,c){rh(c)["info_"+a]=b;if(g.Ce("csi_on_gel"))if(a in th){var d={};a=th[a];g.Sa(nba,a)&&(b=!!b);a=a.split(".");for(var e=d,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];d[a[a.length-1]]=b;b=sh(c);vg(d,b)}else g.Sa(oba,a)||g.ze(Error("Unknown label "+a+" logged with GEL CSI."))};
ph=function(){var a=g.C("TIMING_INFO",{});for(b in a)dh(b,a[b]);dh("is_nav",1);(a=g.Dg())&&dh("csn",a);(a=g.C("PREVIOUS_ACTION",void 0))&&dh("pa",a);var b=fh();b.p=g.C("CLIENT_PROTOCOL")||"unknown";b.t=g.C("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&dh("ba",1);dh("yt_vis",iba());if("cold"==b.yt_lt){a=ch.timing||{};a.navigationStart&&(g.bh("srt",a.responseStart),1!=b.prerender&&eh("n",a.navigationStart));a:if(a.msFirstPaint)b=Math.max(0,a.msFirstPaint);else{if(b=window.chrome)if(b=
b.loadTimes,g.Aa(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;b=Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0);break a}b=0}0<b&&g.bh("fpt",b);jh(a);ch.getEntriesByType&&pba();a=g.C("SPEEDINDEX_FOR_ACTIONS",void 0);b=g.C("TIMING_ACTION",void 0);a&&-1<a.indexOf(b)&&(a=g.gg(),b=new Qg,c=g.gg(),0<b.H&&(dh("si",b.H),g.bh("vsc",uh(b.W)),g.bh("sics",a),g.bh("sice",c)));a=[];if(window.document.querySelector&&ch&&
ch.getEntriesByName)for(var d in vh)b=vh[d],qba(d,b)&&a.push(b);a.length&&dh("rc",a.join(","))}g.Ce("csi_on_gel")&&(d={},d.actionType=rba[g.C("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=sh(),vg(d,a))};
uh=function(a){return Math.round(ch.timing.navigationStart+a)};
pba=function(){var a=window.location.protocol,b=ch.getEntriesByType("resource"),c=g.Qa(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170901000912/https://fonts.googleapis.com/css?family=")});
b=(0,g.xh)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170901000912/https://fonts.gstatic.com/s/")});
b=(0,g.yh)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0});
c&&0<c.startTime&&0<c.responseEnd&&(g.bh("wfcs",uh(c.startTime)),g.bh("wfce",uh(c.responseEnd)));b&&0<b.startTime&&0<b.responseEnd&&(g.bh("wffs",uh(b.startTime)),g.bh("wffe",uh(b.responseEnd)))};
qba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=ch.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.bh("rsf_"+b,d+Math.round(c.fetchStart)),g.bh("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(hh("rc")||dh("rc",""),0===c.transferSize))?!0:!1:!1};
oh=function(a,b,c){if(g.Ce("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.n("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||g.Fg(a,void 0)}catch(f){g.Fg(a,void 0)}else g.Fg(a);Wg(!0,c)};
zh=function(a){g.n("ytglobal.timingready_",a,void 0)};
sh=function(a){var b=Ah(a).nonce;b||(b=Ug(),Ah(a).nonce=b);return b};
Zg=function(a){return Ah(a).tick};
fh=function(a){return Ah(a).info};
rh=function(a){a=Ah(a);"gel"in a||(a.gel={});return a.gel};
Ah=function(a){return g.q("ytcsi."+(a||"")+"data_")||Vg(a)};
Vg=function(a){var b={tick:{},info:{}};g.n("ytcsi."+(a||"")+"data_",b,void 0);return b};
kh=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
Wg=function(a,b){g.n("yt.timing."+(b||"")+"pingSent_",a,void 0)};
kba=function(a){var b=Zg(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==fh(a).yt_pvis};
Dh=function(a,b){g.yc.call(this);this.J=this.G=a;this.ia=b;this.O=!1;this.api={};this.ib=this.ea=null;this.V=new g.Xd;g.Bc(this,this.V);this.D={};this.W=this.jb=this.F=this.Dd=this.C=null;this.na=!1;this.N=this.L=this.H=this.Y=null;this.qb={};this.Ac=["onReady"];this.Aa=new Cf(this);g.Bc(this,this.Aa);this.Nc=null;this.Zb=window.NaN;this.ab={};Bh(this);this.Wd("onDetailedError",(0,g.r)(this.YF,this));this.Wd("onTabOrderChange",(0,g.r)(this.Dv,this));this.Wd("onTabAnnounce",(0,g.r)(this.tn,this));
this.Wd("WATCH_LATER_VIDEO_ADDED",(0,g.r)(this.bG,this));this.Wd("WATCH_LATER_VIDEO_REMOVED",(0,g.r)(this.cG,this));g.Ch||(this.Wd("onMouseWheelCapture",(0,g.r)(this.LF,this)),this.Wd("onMouseWheelRelease",(0,g.r)(this.MF,this)));this.Wd("onAdAnnounce",(0,g.r)(this.tn,this));this.ma=new Cf(this);g.Bc(this,this.ma);this.Eb=!1;this.tb=null};
Fh=function(a,b){a.Dd=b;a.C=b.clone();a.F=a.C.attrs.id||a.F;"video-player"==a.F&&(a.F=a.ia,a.C.attrs.id=a.ia);a.J.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F);a.C.args.enablejsapi="1";a.C.args.playerapiid=a.ia;a.jb||(a.jb=Eh(a,a.C.args.jsapicallback||"onYouTubePlayerReady"));a.C.args.jsapicallback=null;var c=a.C.attrs.width;c&&g.rc(a.J,Number(c)||c);(c=a.C.attrs.height)&&g.qc(a.J,Number(c)||c)};
Gh=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Hh=function(a){var b=a.C&&a.C.args;if(b&&b.fflags){var c=b.el;b=b.fflags;if(!c||"profilepage"==c||"embedded"==c&&0<=b.indexOf("web_player_disable_flash_embed=true")||0<=b.indexOf("web_player_disable_flash_playerproxy=true"))return!1}g.sa(a.C.disable.flash)||(c=a.C.disable,b=g.Kf(g.Jf.getInstance(),a.C.minVersion),c.flash=!b);return!a.C.disable.flash};
Kh=function(a,b){var c=a.C,d=c&&c.args&&c.args.fflags;!d||0>d.indexOf("web_player_flash_fallback_killswitch=true")||b&&(5!=(sba[b.errorCode]||5)||-1==tba.indexOf(b.errorCode))||!Hh(a)||((d=Ih(a))&&d.stopVideo&&d.stopVideo(),d&&d.getUpdatedConfigurationData&&(c=d.getUpdatedConfigurationData(),c=g.Hf(c)),c.args.autoplay=1,c.args.html5_unavailable="1",Fh(a,c),Jh(a,"flash"))};
Jh=function(a,b){if(!a.ob()){if(!b){var c;if(!(c=!a.C.html5&&Hh(a))){if(!g.sa(a.C.disable.html5)){c=!0;void 0!=a.C.args.deviceHasDisplay&&(c=a.C.args.deviceHasDisplay);if(2.2==Lh)var d=!0;else{a:{var e=c;c=g.q("yt.player.utils.videoElement_");c||(c=g.fc("VIDEO"),g.n("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?uba:vba;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(k){d="html5.missingapi"}}d=!d}d&&(d=Mh(a)||a.C.assets.js);a.C.disable.html5=
!d;d||(a.C.args.html5_unavailable="1")}c=!!a.C.disable.html5}b=c?Hh(a)?"flash":"unsupported":"html5"}("flash"==b?a.LL:a.ML).call(a)}};
Mh=function(a){var b=!0,c=Ih(a);c&&a.C&&(a=a.C,b=g.D(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
Ih=function(a){var b=g.x(a.F);!b&&a.J&&a.J.querySelector&&(b=a.J.querySelector("#"+a.F));return b};
Nh=function(a,b,c){var d=b[c];return function(){try{return a.Nc=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Nc=e,g.ze(e,"WARNING"))}}};
Bh=function(a){a.O=!1;if(a.ib)for(var b in a.D)a.ib(b,a.D[b]);for(var c in a.ab)g.Ie((0,window.parseInt)(c,10));a.ab={};a.ea=null;a.ib=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=(0,g.r)(a.Wd,a);a.api.removeEventListener=(0,g.r)(a.tK,a);a.api.destroy=(0,g.r)(a.dispose,a);a.api.getLastError=(0,g.r)(a.bx,a);a.api.getPlayerType=(0,g.r)(a.ux,a);a.api.getCurrentVideoConfig=(0,g.r)(a.Ew,a);a.api.loadNewVideoConfig=(0,g.r)(a.Kl,a);a.api.isReady=(0,g.r)(a.UB,a)};
Eh=function(a,b){var c=b;if("string"==typeof b){if(a.qb[b])return a.qb[b];c=function(){var a=g.q(b);a&&a.apply(g.m,arguments)};
a.qb[b]=c}return c?c:null};
wba=function(a,b){var c="ytPlayer"+b+a.ia,d=(0,g.r)(function(a){if("html5"==Oh(this)){var c=this.C&&this.C.args&&this.C.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true")){this.V.oa(b,a);return}}var d=g.Ge((0,g.r)(function(){this.ob()||(this.V.oa(b,a),g.fb(this.ab,String(d)))},this),0);
g.gb(this.ab,String(d),!0)},a);
a.D[b]=c;g.m[c]=d;return c};
Oh=function(a){return(a=Ih(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null};
Qh=function(a){g.bh("dcp");a.cancel();Bh(a);a.W=null;a.C&&(a.C.loaded=!1);var b=Ih(a);"html5"==Oh(a)?Mh(a)||!Ph(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null):b&&b.destroy&&b.destroy();g.gc(a.G);Ff(a.Aa);a.L=null;a.N=null};
Ph=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.Th=function(a,b){a=g.ta(a)?g.Ub(a):a;b=g.Hf(b);var c=g.Rh+"_"+g.Ea(a),d=g.Sh[c];if(d)return d.Kl(b),d.api;d=new Dh(a,c);g.Sh[c]=d;g.F("player-added",d.api);g.zc(d,g.u(xba,d));g.Ge(function(){d.Kl(b)},0);
return d.api};
xba=function(a){delete g.Sh[a.getId()]};
g.Uh=function(a){a=g.x(a);if(!a)return null;var b=g.Rh+"_"+g.Ea(a),c=g.Sh[b];c||(c=new Dh(a,b),g.Sh[b]=c);return c.api};
Vh=function(){if(g.Ce("log_web_screen_end")){var a=g.Bg(),b=g.Dg();b&&a&&g.tg(b,[a],!0)}};
g.Zh=function(a){var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.og()>b)&&"visible"==g.uf()){b=-1;g.Wh&&(b=Math.round(g.gg()-g.Wh));var c=String;var d=g.q("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.de)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.Xh,index:String(Yh),lastEventDeltaMs:String(b),trigger:a};g.rg("foregroundHeartbeat",a);g.n("_fact",-1,window);Yh++;g.Wh=g.gg()}};
g.$h=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Ae(d):null;this.H=e?Ae(e):null;this.G=[];this.C=this.F=0};
g.ai=function(a){g.Ye(a.F);a.F=g.Xe((0,g.r)(a.init,a))};
g.di=function(a){a.name in bi&&ci(a.name);bi[a.name]={reqs:[],disable:(0,g.r)(a.disable,a)};(0,g.z)(a.deps,function(b){if(!(b in bi))throw Error("Module "+b+" required by "+a.name);bi[b].reqs.push(a.name)});
a.enable()};
ci=function(a){if(a in bi){var b=bi[a];(0,g.z)(b.reqs,function(a){ci(a)});
try{b.disable()}catch(c){}delete bi[a]}};
g.fi=function(a,b,c,d){g.ei.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.hi=function(a,b,c){var d=g.C("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.ne(window.location.href);e&&d.push(e);e=g.ne(a);if(g.Sa(d,e)||!e&&g.Ga(a,"/"))if(g.Ce("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.Ob(d,a),a=d.href),a&&(a=g.oe(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Dg();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Oa(a).toString(36),d=b?g.re(b):"",g.fi(a,d,c||5),gi(b))):(c="ST-"+g.Oa(a).toString(36),a=b?g.re(b):
"",g.fi(c,a,5),gi(b))}};
gi=function(a){if(a){a=a.itct||a.ved;var b=g.q("yt.logging.screen.storeParentElement");a&&b&&b(g.Vf(a))}};
g.ii=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.Pb(d.location,g.se(a,b)+c)};
g.ji=function(a,b){b&&g.hi(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.ii(a)};
g.ki=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.C("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.hi(a,b);if(c)return!1;g.ji(a);return!0};
g.mi=function(a,b){var c={};c.key=a;c.value=b;return li().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.ni=function(a){return li().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
li=function(){return oi?window.Promise.resolve(oi):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))oi=b,a(oi);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),li()};
c.onupgradeneeded=yba})};
yba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Eba=function(){pi++;var a=g.Yb(),b=new g.mc(0,0,a.width,a.height);dh("vph",a.height);dh("vpw",a.width);g.bh("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;qi.start();for(var f=0;f<c;f++){var k=a[f];if(ri(k,b)){var l=zba(k);l.then(Aba);d.push(l);si.push(l);k.loadTime||(e=!1)}}e&&dh("yt_eil",1);dh("vpni",d.length);g.bh("vpcc");b=g.wd(d).then(Bba);g.yd(b,Cba);b.then(Dba);si.push(b);return b};
Dba=function(){qi.stop()};
Cba=function(){g.bh("vpr")};
ri=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.tf(c);if(e in ti)return!0;if(e in ui)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return ui[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return ui[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)ti[d[c]]=!0;return!0};
Bba=function(a){var b=g.Yb();b=new g.mc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;ri(a[d].aB,b)&&c<f&&(c=f)}return c};
zba=function(a){var b=pi;return new g.rd(function(c,d){var e={aB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){pi!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},vi.push(a))})};
Aba=function(a){qi.start();dh("vpil",++wi);a=a.time;xi<a&&(xi=a,g.bh("lim",a))};
Fba=function(){g.bh("vptl",xi);g.bh("vpl",xi)};
Gba=function(){si.forEach(function(a){a.cancel()});
xi=wi=si.length=0;ti={};ui={};vi.forEach(function(a){a.slt=void 0});
vi.length=0};
g.yi=function(a,b){g.Fg("/gen_204?"+a,b)};
Iba=function(a){if(null==a)return[];var b=[];Hba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
return b};
g.Ci=function(){return g.B(g.x("page-container"),"remote-connected")};
Jba=function(){Di=g.He(Ei,5E3);var a=g.Fi();a?(a.addEventListener("onReady",Ei),a.addEventListener("onStateChange",Ei)):Gi("unable to init PP monitor")};
Ji=function(a){for(var b in g.Sh){var c=g.Sh[b];c&&c.cancel()}if(a=a||null){b=g.Fi();var d=!0;c=g.Hi;g.Hi=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Ii="",g.Th("player-api",a)):b.playVideo();a=g.Hf(a);a.loaded=!0}Ei();g.n("ytplayer.config",a,void 0)};
g.Fi=function(){return g.Uh("player-api")};
Ei=function(){var a=g.Fi();if(a){var b=g.x("player");b=!b||g.B(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.C("PAGE_NAME"),e=g.Ci();!c||d||e||(Gi("PP playing off watch (paused)"),a.pauseVideo());b&&d?Gi("PP off-screen on watch"):b||d||Gi("PP !off-screen off watch")}};
Gi=function(a){var b=g.C("PAGE_NAME");b&&(a+="("+[b,Ii,g.q("_spf_state.nav-counter")].join()+")",g.n("yt.www.persistentplayer.issue",a,void 0),g.ze(Error(a),"WARNING"))};
Li=function(){g.bh("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.bh("cpt");g.F("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?(g.bh("cpt"),g.F("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){g.bh("cpt");
g.F("on_cpt_tick",(new Date).getTime())},0);
Kba();g.C("CSI_VIEWPORT")&&(Ki=Eba(),Ki.then(function(a){g.bh("vpl",a);Ki=null},function(){}))};
Kba=function(){Mi("init");var a=g.C("PAGE_NAME",void 0);a&&Mi("init-"+a)};
Mi=function(a){g.Ve()?Ni.push(g.Xe(g.u(g.Pe,a),0)):g.F(a)};
Oi=function(){g.Ze(Ni);Ni.length=0;Gba();Ki&&(Ki.cancel(),Ki=null);var a=g.C("PAGE_NAME",void 0);a&&g.Pe("dispose-"+a);g.Pe("dispose")};
Lba=function(){Li()};
Mba=function(){g.C("TIMING_REPORT_ON_UNLOAD")&&g.ah(!0);qh("u");g.Ce("log_foreground_heartbeat")&&g.Zh("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Vh();g.sg();g.$f();Oi();g.Pe("pageunload")};
Pi=function(){mg()};
Qi=function(a){a=a.detail.url;window.yt_spf_loaded_history=!0;mg();var b=g.Cg();if(b&&a){var c=g.Wf(b.visualElement);b={csn:b.clientScreenNonce};"trackingParams"in c?b.itct=c.trackingParams:(b.veType=c.veType,b.veCounter=c.veCounter);g.hi(a,b)}};
Vi=function(){Ri=1;Si=Ti=0;g.C("TIMING_REPORT_ON_UNLOAD")&&g.ah(!0);g.Ce("warm_load_nav_start_web")?(qh("n"),Xg(),zh(!1),g.we("TIMING_AFT_KEYS",[]),dh("yt_lt","warm"),g.we("TIMING_ACTION",""),g.we("TIMING_WAIT",[]),Mg()):(qh("n"),Xg());eh("n");Yg("nr");Ui(Nba);Vh();g.Pe("navigate")};
Zi=function(a){a=a.detail.part||a.detail.partial;g.bh("nc"+Ti);++Ti;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.bh("bc");else{var b=1==Ri;Ri=2;b?(Ui(Oba),Wi()):Ui(Pba);if(b=a&&a.data&&a.data.swfcfg)Xi(a.timing,b.args),Yi(b)}};
$i=function(){g.bh("np"+Si);++Si};
aj=function(a){a=a.detail.response;var b=1==Ri;Ri=3;b&&(Ui(Qba),Wi());if(b=a.data&&a.data.swfcfg)Xi(a.timing,b.args),Yi(b)};
ej=function(a){g.bh("nd");a=a.detail.response;g.bj=a.cacheKey;a=a.timing;var b=window._spf_state;g.cj.navigationCount=b&&b["nav-counter"]||0;g.Ce("warm_load_nav_start_web")?g.bh("srt",a.responseStart):(eh("ne",a.responseStart),dh("srt",Math.max(0,a.responseStart-a.navigationStart)));dh("yt_lt",a.spfCached?"hot":"warm");dh("yt_pft",+!!a.spfPrefetched);g.bh("pfs",a.fetchStart);g.bh("pfrs",a.responseStart);"redirectStart"in a&&jh(a);Ui(dj);window.document.getElementById("content").style.height="";Li();
Ri=0};
fj=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.ze(a)};
gj=function(a){g.yi(g.re({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Sba=function(){Rba();window.yt_spf_loaded_history=!1};
Tba=function(){};
Wi=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Oi();a=g.C("PREVIOUS_ACTION");for(var b in g.ve)delete g.ve[b];g.we("PREVIOUS_ACTION",a);g.we("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.n("ytplayer.config",null,void 0);if((b=g.Fi())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Ii=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),Ii="recovered"):Ii="missing2"}else Ii="missing";Ei()};
Yi=function(a){"cfg"in Zg(void 0)||g.bh("cfg");Ji(a)};
Ui=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Ye(hj);hj=g.Xe(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Ie(ij);ij=g.Ge(function(){b.className=e},c)},0)};
Rba=function(){var a=dj[0]+50;g.Ie(ij);ij=g.Ge(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
Xi=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Iba(b));g.C("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"removeNonCacheableVideoVars",cached:c,prefetched:d,deleted:e.join("")},g.yi(g.re(c)))};
kj=function(){return jj().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})};
mj=function(){lj({type:"notifications_register",data:g.C("ID_TOKEN")})};
jj=function(){return window.navigator.serviceWorker.getRegistration(String(Be("service_worker_scope")||""))};
Uba=function(){return lj({type:"notifications_check_registration",data:g.C("ID_TOKEN")})};
lj=function(a){return jj().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Vba=function(){if(!g.C("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(Be("service_worker_push_force_notification_prompt_tag")||"");return a?g.ni("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
Zba=function(){return g.C("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)?Vba().then(function(a){if(a)return!0;a=[Wba(),Xba()];g.C("LOGGED_IN",void 0)||a.push(Yba());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
Yba=function(){var a=g.De("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.ni("WatchCount").then(function(b){return b>=a})};
bca=function(){return g.Ce("service_worker_push_ticker_enabled")?$ba().then(function(a){if(!a)return window.Promise.resolve();a=pj();if(!a)return window.Promise.resolve();var b=qj();if(!b)return window.Promise.resolve();var c=pj();c=c?c.querySelector(".yt-uix-button-close"):null;if(!c)return window.Promise.resolve();g.H(b,"click",oj);g.H(c,"click",aca);window.document.body.classList.add("sitewide-ticker-visible");a.classList.add("show");return nj()}):(nj(),oj())};
oj=function(){var a=arguments;g.Ce("service_worker_push_prompt_modal_enable")&&cca();return window.Notification.requestPermission().then(function(a){rj();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return kj().then(function(){g.mi("NotificationsDisabled",!1);mj();return window.Promise.resolve(!0)});
"denied"==a&&mj();return window.Promise.resolve(!1)})["catch"](function(){rj();
return window.Promise.reject.apply(window.Promise,[].concat(a instanceof Array?a:baa(g.pa(a))))})};
aca=function(){g.mi("HideTicker",(0,g.de)());window.document.body.classList.remove("sitewide-ticker-visible")};
$ba=function(){return g.ni("HideTicker").then(function(a){return(0,g.de)()>a+2592E6})};
sj=function(){return g.Ce("service_worker_push_home_only")?"HomePromptCount":"PromptCount"};
nj=function(){var a=sj();return g.ni(a).then(function(b){return g.mi(a,b+1)}).then(function(){if(g.Ce("service_worker_push_home_only"))return g.mi("HomePromptTime",(0,g.de)())}).then(function(){var a=String(Be("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.ni("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(e){return!1}c||(c=[]);c.push(a);return g.mi("PromptTags",JSON.stringify(c))})})};
pj=function(){var a=window.document.getElementById("ticker");return a&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.D(a,"trigger-condition")?a:null};
qj=function(){var a=pj();return a?a.querySelector(".yt-uix-button-alert-info"):null};
Wba=function(){return-1==g.De("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.ni(sj()).then(function(a){a||(a=0);return window.Promise.resolve(a<g.De("service_worker_push_prompt_cap"))})};
Xba=function(){var a=g.De("service_worker_push_prompt_delay_ms");return a?g.ni("HomePromptTime").then(function(b){return window.Promise.resolve((0,g.de)()-a>(b||0))}):window.Promise.resolve(!0)};
dca=function(){tj||rj()};
uj=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
cca=function(){var a=g.x("yt-push-prompt-modal-bg");tj=g.Ce("service_worker_push_prompt_modal_ignore_click");a?uj(a):(a=g.dc("div",{id:"yt-push-prompt-modal-bg"}),uj(a),window.document.body.appendChild(a),g.Af(window.document,"click",dca))};
rj=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.jc(a)};
eca=function(a){return g.vj&&!g.wj&&!g.xj&&!g.yj&&window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification&&window.Promise&&a&&a.pushManager?"default"!=window.Notification.permission?kj().then(Uba):Zba().then(function(a){if(a)return bca()}):window.Promise.resolve()};
gca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(fca)})};
ica=function(){var a="/sw.js",b=g.C("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=zj(a);g.Ce("service_worker_push_enabled")&&a.then(hca).then(eca)};
hca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
fca=function(a){a&&zj("/sw.js?0",a.scope)};
zj=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(Be("service_worker_scope")||"")||"/"})};
Aj=function(){g.$h.call(this,"www/base");this.D=0};
Bj=function(a){(a=a.detail.name)&&ci(a)};
g.ba=[];da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)Cj=Object.setPrototypeOf;else{var Dj;a:{var jca={a:!0},Ej={};try{Ej.__proto__=jca;Dj=Ej.a;break a}catch(a){}Dj=!1}Cj=Dj?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ea=Cj,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,aaa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
qa("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
var kca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=da(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
qa("Reflect.construct",function(){return kca});
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
b.prototype.G=function(a){this.O(2,a)};
b.prototype.L=function(a){this.O(1,a)};
b.prototype.O=function(a,b){if(0!=this.C)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.C);this.C=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.F){for(var a=this.F,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.F=null}};
var f=new c;b.prototype.V=function(a){var b=this.H();a.Th(b.resolve,b.reject)};
b.prototype.ma=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(t){c.reject(t)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(ka){f(ka)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Th(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Th=function(a,b){function c(){switch(d.C){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?f.F(c):this.F.push(function(){f.F(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.pa(a),f=e.next();!f.done;f=e.next())d(f.value).Th(b,c)})};
b.all=function(a){var c=g.pa(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Th(f(k.length-1),b),e=c.next();while(!e.done)})};
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
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&ra(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,jc:l}}return{id:c,list:d,index:-1,jc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.pa(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.pa([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(A){return!1}}())return a;
ha();ma();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.jc?c.jc.value=b:(c.jc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.jc),this.F.previous.next=c.jc,this.F.previous=c.jc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.jc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.jc.previous.next=a.jc.next,a.jc.next.previous=a.jc.previous,a.jc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).jc};
e.prototype.get=function(a){return(a=d(this,a).jc)&&a.value};
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
qa("Number.isNaN",function(a){return a?a:function(a){return"number"===typeof a&&(0,window.isNaN)(a)}});
g.Fj=g.Fj||{};g.m=this;Ca="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.de=Date.now||function(){return+new Date};g.v(g.Fa,Error);g.Fa.prototype.name="CustomError";var gaa,haa,iaa,jaa,kaa,laa,faa;g.La=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.Gj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.Ra=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(g.ta(a))return g.ta(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.lca=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;
0>c&&(c=Math.max(0,a.length+c));if(g.ta(a))return g.ta(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.xh=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.ta(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var p=k[l];
b.call(c,p,l,a)&&(e[f++]=p)}return e};
g.nh=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.ta(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.yh=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.r)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.z)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Hj=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Ij=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};a:{var Jj=g.m.navigator;if(Jj){var Kj=Jj.userAgent;if(Kj){g.Ya=Kj;break a}}g.Ya=""};var ib="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.qb[" "]=g.va;var Rj,maa,Vj;g.Lj=g.Za("Opera");g.y=g.kb();g.Mj=g.Za("Edge");g.Nj=g.Mj||g.y;g.Oj=g.Za("Gecko")&&!(-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.Za("Edge"))&&!(g.Za("Trident")||g.Za("MSIE"))&&!g.Za("Edge");g.bc=-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.Za("Edge");g.Pj=g.Za("Macintosh");g.Qj=g.Za("Windows");g.mca=g.Za("Linux")||g.Za("CrOS");g.nca=g.Za("Android");g.xj=ob();g.yj=g.Za("iPad");g.oca=g.Za("iPod");g.pca=g.pb();
a:{var Sj="",Tj=function(){var a=g.Ya;if(g.Oj)return/rv\:([^\);]+)(\)|;)/.exec(a);if(g.Mj)return/Edge\/([\d\.]+)/.exec(a);if(g.y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.bc)return/WebKit\/(\S+)/.exec(a);if(g.Lj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Tj&&(Sj=Tj?Tj[1]:"");if(g.y){var Uj=sb();if(null!=Uj&&Uj>(0,window.parseFloat)(Sj)){Rj=String(Uj);break a}}Rj=Sj}g.tb=Rj;maa={};var Wj=g.m.document;Vj=Wj&&g.y?sb()||("CSS1Compat"==Wj.compatMode?(0,window.parseInt)(g.tb,10):5):void 0;g.vb=Vj;var oaa;oaa=!g.y||g.wb(9);g.qca=!g.Oj&&!g.y||g.y&&g.wb(9)||g.Oj&&g.ub("1.9.1");g.Xj=g.y&&!g.ub("9");g.rca=g.y||g.Lj||g.bc;g.yb.prototype.pe=!0;g.yb.prototype.xd=function(){return this.C};
g.yb.prototype.toString=function(){return"Const{"+this.C+"}"};
g.xb={};g.zb("");g.sca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.tca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Yj=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");var Bb;g.Cb.prototype.pe=!0;g.Cb.prototype.xd=function(){return this.C};
g.Cb.prototype.kl=!0;g.Cb.prototype.He=g.ca(1);g.Fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;Bb={};g.Gb("about:blank");g.Jb.prototype.pe=!0;g.Ib={};g.Jb.prototype.xd=function(){return this.C};
g.Zj=g.Kb("");g.ak=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.uca=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Mb.prototype.kl=!0;g.Mb.prototype.He=g.ca(0);g.Mb.prototype.pe=!0;g.Mb.prototype.xd=function(){return this.C};
g.Lb={};g.Nb("<!DOCTYPE html>",0);g.bk=g.Nb("",0);g.ck=g.Nb("<br>",0);g.h=g.Rb.prototype;g.h.clone=function(){return new g.Rb(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Rb&&g.Sb(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.Rb?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.ua(b)&&(this.y+=b));return this};g.h=g.Tb.prototype;g.h.clone=function(){return new g.Tb(this.width,this.height)};
g.h.Xf=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Xf()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Vb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.dk=window.document;g.ek=window;g.h=g.mc.prototype;g.h.clone=function(){return new g.mc(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Rb?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.Rb?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.ua(b)&&(this.top+=b));return this};g.fk=g.Oj?"MozUserSelect":g.bc||g.Mj?"WebkitUserSelect":null;g.gk=g.sc(null);g.vca=Object.prototype.hasOwnProperty;g.hk=g.tc(window);g.ik=g.hk&&window.parent||window;g.jk=(new Date).getTime();g.h=g.wc.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.sa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.de)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.La)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.sa(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Dc=g.ca(2);g.h.Jb=g.ca(3);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Ab=g.ca(7);g.h.ce=g.ca(8);g.h.clear=function(){for(var a=g.xc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.ei=new g.wc("undefined"==typeof window.document?null:window.document);g.ei.F=3950;g.yc.prototype.Cc=!1;g.yc.prototype.ob=function(){return this.Cc};
g.yc.prototype.dispose=function(){this.Cc||(this.Cc=!0,this.X())};
g.yc.prototype.X=function(){if(this.Lb)for(;this.Lb.length;)this.Lb.shift()()};g.Cc.prototype.stopPropagation=function(){this.F=!0};
g.Cc.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Js=!1};var Tc,xca;g.wca=!g.y||g.wb(9);Tc=!g.y||g.wb(9);xca=g.y&&!g.ub("9");!g.bc||g.ub("528");g.Oj&&g.ub("1.9b")||g.y&&g.ub("8")||g.Lj&&g.ub("9.5")||g.bc&&g.ub("528");g.Oj&&!g.ub("8")||g.y&&g.ub("9");var yaa=function(){if(!g.m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.m.addEventListener("test",g.va,b);g.m.removeEventListener("test",g.va,b);return a}();g.kk=g.y?"focusin":"DOMFocusIn";g.lk=g.y?"focusout":"DOMFocusOut";g.mk=g.bc?"webkitTransitionEnd":g.Lj?"otransitionend":"transitionend";g.v(g.Dc,g.Cc);
g.Dc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Oj&&(g.rb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.L=g.Pj?a.metaKey:a.ctrlKey;this.state=a.state;this.wc=a;a.defaultPrevented&&this.preventDefault()};
g.Dc.prototype.stopPropagation=function(){g.Dc.M.stopPropagation.call(this);this.wc.stopPropagation?this.wc.stopPropagation():this.wc.cancelBubble=!0};
g.Dc.prototype.preventDefault=function(){g.Dc.M.preventDefault.call(this);var a=this.wc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,xca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ec="closure_listenable_"+(1E6*Math.random()|0),vaa=0;g.h=g.Hc.prototype;g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ic(e,b,c,d);return-1<b?(Gc(e[b]),g.Ua(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Gc(d[e]);delete this.listeners[c];this.C--}return b};
g.h.eg=g.ca(10);g.h.kf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Ic(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.sa(a),d=c?a.toString():"",e=g.sa(b);return g.ab(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Qc="closure_lm_"+(1E6*Math.random()|0),Wc={},Sc=0,$c="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.ad,g.yc);g.ad.prototype[Ec]=!0;g.h=g.ad.prototype;g.h.xi=function(){return this.Xl};
g.h.xh=g.ca(11);g.h.addEventListener=function(a,b,c,d){g.Mc(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Uc(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.xi();if(b){var c=[];for(var d=1;b;b=b.xi())c.push(b),++d}b=this.av;d=a.type||a;if(g.ta(a))a=new g.Cc(a,b);else if(a instanceof g.Cc)a.target=a.target||b;else{var e=a;a=new g.Cc(d,b);g.jb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=bd(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=bd(k,d,!0,a)&&e,a.F||(e=bd(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=bd(k,d,!1,a)&&e;return e};
g.h.X=function(){g.ad.M.X.call(this);this.removeAllListeners();this.Xl=null};
g.h.R=function(a,b,c,d){return Jc(this.wd,String(a),b,!1,c,d)};
g.h.Le=function(a,b,c,d){return Jc(this.wd,String(a),b,!0,c,d)};
g.h.Wa=function(a,b,c,d){return this.wd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.wd?this.wd.removeAll(a):0};
g.h.eg=g.ca(9);g.h.kf=function(a,b,c,d){return this.wd.kf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.wd.hasListener(g.sa(a)?String(a):void 0,b)};cd.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var nd;var kd=new cd(function(){return new gd},function(a){a.reset()},100);
fd.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
gd.prototype.set=function(a,b){this.kc=a;this.scope=b;this.next=null};
gd.prototype.reset=function(){this.next=this.scope=this.kc=null};var hd,id=!1,jd=new fd;sd.prototype.reset=function(){this.context=this.F=this.D=this.C=null;this.G=!1};
var td=new cd(function(){return new sd},function(a){a.reset()},100);
g.rd.prototype.then=function(a,b,c){return xd(this,g.Aa(a)?a:null,g.Aa(b)?b:null,c)};
g.od(g.rd);g.rd.prototype.cancel=function(a){0==this.C&&ld(function(){var b=new g.Gd(a);zd(this,b)},this)};
g.rd.prototype.W=function(a){this.C=0;g.qd(this,2,a)};
g.rd.prototype.N=function(a){this.C=0;g.qd(this,3,a)};
g.rd.prototype.J=function(){for(var a;a=Ad(this);)Bd(this,a,this.C,this.O);this.L=!1};
var Id=ed;g.v(g.Gd,g.Fa);g.Gd.prototype.name="cancel";g.v(g.Ld,g.yc);g.h=g.Ld.prototype;g.h.nb=0;g.h.X=function(){g.Ld.M.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.nb=g.Jd(this.uc,g.sa(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Kd(this.nb);this.nb=0};
g.h.isActive=function(){return 0!=this.nb};
g.h.Jk=function(){this.nb=0;this.C&&this.C.call(this.F)};g.Ch=g.Za("Firefox");g.nk=ob()||g.Za("iPod");g.ok=g.Za("iPad");g.wj=g.nb();g.vj=g.lb();g.pk=g.mb()&&!g.pb();g.Pd="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.Od.prototype.next=function(){throw g.Pd;};
g.Od.prototype.dd=function(){return this};Sd.prototype.Ej=function(a){var b=[];Ud(this,a,b);return b.join("")};
var Wd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Gaa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;g.v(g.Xd,g.yc);g.h=g.Xd.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.rd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.va):(c&&g.Va(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Haa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.rd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.z)(b,this.rd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Ab=g.ca(6);g.h.X=function(){g.Xd.M.X.call(this);this.clear();this.D.length=0};g.Zd.prototype.set=function(a,b){g.sa(b)?this.C.set(a,g.Td(b)):this.C.remove(a)};
g.Zd.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Zd.prototype.remove=function(a){this.C.remove(a)};g.v($d,g.Zd);$d.prototype.set=function(a,b){$d.M.set.call(this,a,be(b))};
$d.prototype.F=function(a){a=$d.M.get.call(this,a);if(!g.sa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
$d.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.sa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.ce,$d);g.ce.prototype.set=function(a,b,c){if(b=be(b)){if(c){if(c<(0,g.de)()){g.ce.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.de)()}g.ce.M.set.call(this,a,b)};
g.ce.prototype.F=function(a,b){var c=g.ce.M.F.call(this,a);if(c)if(!b&&g.ee(c))g.ce.prototype.remove.call(this,a);else return c};g.v(g.fe,g.ce);g.v(g.ge,Iaa);g.ge.prototype.Ab=g.ca(5);g.ge.prototype.clear=function(){var a=Faa(this.dd(!0)),b=this;(0,g.z)(a,function(a){b.remove(a)})};g.v(g.he,g.ge);g.h=g.he.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.ta(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Ab=g.ca(4);g.h.dd=function(a){var b=0,c=this.C,d=new g.Od;d.next=function(){if(b>=c.length)throw g.Pd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.ta(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.ie,g.he);g.v(je,g.he);var Jaa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var qk=!1,rk="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(qk=!0,a.description)){rk=te(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){qk=!0;rk="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],qk=!(!a||!a.enabledPlugin))){rk=te(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");qk=
!0;rk=te(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");qk=!0;rk="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),qk=!0,rk=te(b.GetVariable("$version"))}catch(c){}})();
g.yca=qk;g.zca=rk;g.gg=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.If="Microsoft Internet Explorer"==window.navigator.appName;g.ve=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.n("yt.config_",g.ve,void 0);var Fe={};var Aca=g.q("ytPubsubPubsubInstance")||new g.Xd;g.Xd.prototype.subscribe=g.Xd.prototype.subscribe;g.Xd.prototype.unsubscribeByKey=g.Xd.prototype.rd;g.Xd.prototype.publish=g.Xd.prototype.oa;g.Xd.prototype.clear=g.Xd.prototype.clear;g.n("ytPubsubPubsubInstance",Aca,void 0);var Le=g.q("ytPubsubPubsubSubscribedKeys")||{};g.n("ytPubsubPubsubSubscribedKeys",Le,void 0);var Ne=g.q("ytPubsubPubsubTopicToKeys")||{};g.n("ytPubsubPubsubTopicToKeys",Ne,void 0);var Me=g.q("ytPubsubPubsubIsSynchronous")||{};
g.n("ytPubsubPubsubIsSynchronous",Me,void 0);var Laa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Maa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Se=null;(0,g.de)();var af=g.sa(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.sa(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var gf,hf;gf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};hf=!1;g.sk=lf;pf.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.pd(a)?a:g.rf(a)):2===this.F&&b?(a=b.call(c,this.C),g.pd(a)?a:g.qf(a)):this};
pf.prototype.getValue=function(){return this.C};
g.od(pf);var Bca=0,Raa=g.bc?"webkit":g.Oj?"moz":g.y?"ms":g.Lj?"o":"",sf=g.q("ytDomDomGetNextId")||function(){return++Bca};
g.n("ytDomDomGetNextId",sf,void 0);var Saa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.vf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.vf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.vf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var wf=g.q("ytEventsEventsListeners")||{};g.n("ytEventsEventsListeners",wf,void 0);var yf=g.q("ytEventsEventsCounter")||{count:0};g.n("ytEventsEventsCounter",yf,void 0);g.fa(Cf,g.yc);Cf.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.Be);break}};
Cf.prototype.X=function(){Ff(this);g.yc.prototype.X.call(this)};var Taa={enablejsapi:1},Uaa={},Vaa={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};Gf.prototype.clone=function(){var a=new Gf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.xa(c)?a[b]=g.hb(c):a[b]=c}return a};g.wa(g.Jf);g.Jf.prototype.getVersion=function(){return[this.major,this.minor,this.C]};g.Lf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.n("yt.msgs_",g.Lf,void 0);var Rf={},Qf=0;var Waa,jg;Waa={log_event:"events",log_event2:"events",log_interaction:"interactions"};jg=Object.create(null);jg.log_event="GENERIC_EVENT_LOGGING";jg.log_event2="GENERIC_EVENT_LOGGING";jg.log_interaction="INTERACTION_LOGGING";g.eg={};g.Xf={};g.cg=0;g.dg=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.n("ytLoggingTransportLogPayloadsQueue_",g.dg,void 0);var Yf=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.n("ytLoggingTransportTokensToCttTargetIds_",Yf,void 0);
var fg=g.q("ytLoggingTransportDispatchedStats_")||{};g.n("ytLoggingTransportDispatchedStats_",fg,void 0);var kg=g.q("ytLoggingTransportCapturedTime_")||{};g.n("ytytLoggingTransportCapturedTime_",kg,void 0);var wg=g.q("ytLoggingLatencyUsageStats_")||{};g.n("ytLoggingLatencyUsageStats_",wg,void 0);var xg=0;var tk,uk;tk=new g.ie;g.zg=tk.isAvailable()?new g.fe(tk):null;uk=new je;g.yg=uk.isAvailable()?new g.fe(uk):null;var $aa=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var vk={},sba=(vk["api.invalidparam"]=2,vk.auth=150,vk["drm.auth"]=150,vk["heartbeat.net"]=150,vk["heartbeat.servererror"]=150,vk["heartbeat.stop"]=150,vk["html5.unsupportedads"]=5,vk["fmt.noneavailable"]=5,vk["fmt.decode"]=5,vk["fmt.unplayable"]=5,vk["html5.missingapi"]=5,vk["html5.unsupportedlive"]=5,vk["drm.unavailable"]=5,vk);var wk={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Lh;var xk=g.Ya;xk=xk.toLowerCase();if(-1!=xk.indexOf("android")){var yk=xk.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(yk)Lh=(0,window.parseFloat)(yk[1]);else{var zk=xk.match("("+g.bb(wk).join("|")+")");Lh=zk?wk[zk[0]]:0}}else Lh=void 0;var uba=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],vba=['audio/mp4; codecs="mp4a.40.2"'];var Gg={},bba=0;g.Hg.prototype.Ej=function(){return{version:this.version,args:this.args}};g.Ig.prototype.toString=function(){return this.topic};var Cca=g.q("ytPubsub2Pubsub2Instance")||new g.Xd;g.Xd.prototype.subscribe=g.Xd.prototype.subscribe;g.Xd.prototype.unsubscribeByKey=g.Xd.prototype.rd;g.Xd.prototype.publish=g.Xd.prototype.oa;g.Xd.prototype.clear=g.Xd.prototype.clear;g.n("ytPubsub2Pubsub2Instance",Cca,void 0);g.Ak=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.n("ytPubsub2Pubsub2SubscribedKeys",g.Ak,void 0);g.Bk=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.n("ytPubsub2Pubsub2TopicToKeys",g.Bk,void 0);
g.Ck=g.q("ytPubsub2Pubsub2IsAsync")||{};g.n("ytPubsub2Pubsub2IsAsync",g.Ck,void 0);g.n("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.fa(Ng,g.Hg);g.fa(Og,g.Hg);var hba=new g.Ig("aft-recorded",Ng),lba=new g.Ig("timing-sent",Og);var ch=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};Rg.prototype.toString=function(){return this.region.toString()+": "+this.timing+" => "+this.url};
Sg.prototype.toString=function(){return["progress",this.progress,"timing",this.timing,"area",this.Xf].join(": ")};
var cba=/url\(["']?(http[^'"\)]+)['"]?\)/i;var Tg=(0,g.de)().toString();var jba={vc:!0},vh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'script[name="mobile-c3/mobile-c3"]':"mcj",
'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",
'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},th={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",
plid:"videoId",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},oba="ap c cver ei srt yt_fss yt_li ba vpil vpni yt_eil pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),rba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",
browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",
"watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR"},nba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
lh=!1,gba=(0,g.r)(ch.clearResourceTimings||ch.webkitClearResourceTimings||ch.mozClearResourceTimings||ch.msClearResourceTimings||ch.oClearResourceTimings||g.va,ch);g.fa(Dh,g.yc);g.h=Dh.prototype;g.h.getId=function(){return this.ia};
g.h.Kl=function(a,b){this.ob()||(Fh(this,a),Jh(this,b),this.O&&Gh(this))};
g.h.Ew=function(){return this.Dd};
g.h.ML=function(){if(!this.na){var a=Mh(this);if(a&&"html5"==Oh(this))this.W="html5",this.O||this.ug();else if(Qh(this),this.W="html5",a&&this.H)this.G.appendChild(this.H),this.ug();else{this.C.loaded=!0;var b=!1;this.Y=(0,g.r)(function(){b=!0;var a=this.C.clone();g.q("yt.player.Application.create")(this.G,a);this.ug()},this);
this.na=!0;a?this.Y():(g.Re(this.C.assets.js,this.Y),g.Eg(this.C.assets.css),Ph(this)&&!b&&g.n("yt.player.Application.create",null,void 0))}}};
g.h.LL=function(){var a=this.C.clone();if(!this.L){var b=Ih(this);b&&(this.L=g.fc("SPAN"),this.L.tabIndex=0,Ef(this.Aa,this.L,"focus",this.Vq),this.N=g.fc("SPAN"),this.N.tabIndex=0,Ef(this.Aa,this.N,"focus",this.Vq),g.hc(this.L,b),g.ic(this.N,b))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";"flash"==Oh(this)?(this.W="flash",this.O||this.ug()):(Qh(this),this.W="flash",this.C.loaded=!0,window!=window.top&&window.document.referrer&&(a.args.framer=window.document.referrer.substring(0,
128)),g.Pf(this.G,a.url,a),this.ug())};
g.h.Vq=function(){Ih(this).focus()};
g.h.ug=function(){if(!this.ob()){var a=Ih(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.na=!1,a.isNotServable&&a.isNotServable(this.C.args.video_id))Kh(this);else{Bh(this);this.O=!0;a=Ih(this);a.addEventListener&&(this.ea=Nh(this,a,"addEventListener"));a.removeEventListener&&(this.ib=Nh(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=Nh(this,a,d))}for(var e in this.D)this.ea(e,
this.D[e]);Gh(this);this.jb&&this.jb(this.api);this.V.oa("onReady",this.api)}else this.Zb=g.Ge((0,g.r)(this.ug,this),50)}};
g.h.UB=function(){return this.O};
g.h.Wd=function(a,b){if(!this.ob()){var c=Eh(this,b);if(c){if(!g.Sa(this.Ac,a)&&!this.D[a]){var d=wba(this,a);this.ea&&this.ea(a,d)}this.V.subscribe(a,c);"onReady"==a&&this.O&&g.Ge(g.u(c,this.api),0)}}};
g.h.tK=function(a,b){if(!this.ob()){var c=Eh(this,b);c&&g.Yd(this.V,a,c)}};
g.h.Dv=function(a){a=a?raa:qaa;for(var b=a(window.document.activeElement);b&&(1!=b.nodeType||b==this.L||b==this.N||(b.focus(),b!=window.document.activeElement));)b=a(b)};
g.h.tn=function(a){g.F("a11y-announce",a)};
g.h.YF=function(a){Kh(this,a)};
g.h.bG=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.h.cG=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.LF=function(){this.Eb||(g.vj?(this.tb=g.ac(window.document),Ef(this.ma,window,"scroll",this.oI),Ef(this.ma,this.G,"touchmove",this.OH)):(Ef(this.ma,this.G,"mousewheel",this.qr),Ef(this.ma,this.G,"wheel",this.qr)),this.Eb=!0)};
g.h.MF=function(){Ff(this.ma);this.Eb=!1};
g.h.qr=function(a){g.zf(a)};
g.h.oI=function(){window.scrollTo(this.tb.x,this.tb.y)};
g.h.OH=function(a){a.preventDefault()};
g.h.ux=function(){return this.W||Oh(this)};
g.h.bx=function(){return this.Nc};
g.h.cancel=function(){if(this.Y){var a=this.Y,b=g.Qe(this.C.assets.js);window.spf.script.ignore(b,a)}g.Ie(this.Zb);this.na=!1};
g.h.X=function(){Qh(this);if(this.H&&this.C&&this.H.destroy)try{this.H.destroy()}catch(b){g.ze(b)}this.qb=null;for(var a in this.D)g.m[this.D[a]]=null;this.Dd=this.C=this.api=null;delete this.G;delete this.J;g.yc.prototype.X.call(this)};
var tba=["fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g.Sh={};g.Rh="player_uid_"+(1E9*Math.random()>>>0);var Yh;g.Xh=Ug();Yh=0;g.Wh=null;g.h=g.$h.prototype;g.h.EK=function(){this.Vi()||this.init()};
g.h.enable=function(){this.C=1;(0,g.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.EK,this),this.subscribe("dispose-"+a,this.dispose,this),g.C("PAGE_NAME")==a&&g.ai(this))},this)};
g.h.init=function(){g.Ye(this.F);this.C=2;this.L&&this.L()};
g.h.Vi=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Ye(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.ze(a)}};
g.h.subscribe=function(a,b,c){a=g.E(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.Oe(this.G);this.G=[]};var bi=g.q("yt.modules.registry_")||{};g.n("yt.modules.registry_",bi,void 0);g.n("yt.abuse.botguardInitialized",g.q("yt.abuse.botguardInitialized")||Te,void 0);g.n("yt.abuse.invokeBotguard",g.q("yt.abuse.invokeBotguard")||g.Ue,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",g.q("yt.abuse.dclkstatus.checkDclkStatus")||$e,void 0);g.n("yt.player.exports.navigate",g.q("yt.player.exports.navigate")||g.ki,void 0);g.n("yt.util.activity.init",g.q("yt.util.activity.init")||g.ng,void 0);g.n("yt.util.activity.getTimeSinceActive",g.q("yt.util.activity.getTimeSinceActive")||g.og,void 0);
g.n("yt.util.activity.setTimestamp",g.q("yt.util.activity.setTimestamp")||mg,void 0);var oi=null;g.Dk=window.performance&&window.performance.memory;g.cj={};var wi=0,xi=0,si=[],vi=[],pi=0,ti={},ui={},qi=new g.Ld(Fba,1E3);var Hba=["server_prefetched_vast","vmap"];var Di,Ii;g.Hi=null;Ii="";var Ki=null,Ni=[];var Ri,ij,hj,Ti,Si,Nba,Qba,Oba,Pba,dj;Ti=0;Si=0;Nba=[900,60,"waiting"];Qba=[500,99,"waiting"];Oba=[300,60,"waiting"];Pba=[400,99,"waiting"];dj=[300,101,"done"];var tj=!1;window.yt=window.yt||{};g.n("yt.setConfig",g.we,void 0);g.n("yt.pushConfigArray",ye,void 0);g.n("yt.getConfig",g.C,void 0);g.n("yt.config.set",g.we,void 0);g.n("yt.config.pushArray",ye,void 0);g.n("yt.config.get",g.C,void 0);g.n("yt.hasMsg",g.Nf,void 0);g.n("yt.setMsg",Mf,void 0);g.n("yt.setGoogMsg",Of,void 0);g.n("yt.msgs.has",g.Nf,void 0);g.n("yt.msgs.set",Mf,void 0);g.n("yt.msgs.setGoog",Of,void 0);g.n("yt.pubsub.publish",g.F,void 0);g.n("yt.pubsub.subscribe",g.E,void 0);
g.n("ytcsi.tick",g.bh,void 0);g.v(Aj,g.$h);
Aj.prototype.enable=function(){window.onload=Lba;window.onunload=Mba;window.onerror=Kaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Pi),window.addEventListener("spfhistory",Qi),window.addEventListener("spfrequest",Vi),window.addEventListener("spfpartprocess",Zi),window.addEventListener("spfpartdone",$i),window.addEventListener("spfprocess",aj),window.addEventListener("spfdone",ej),window.addEventListener("spferror",fj),window.addEventListener("spfreload",
gj),window.addEventListener("spfjsbeforeunload",Bj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Sba),this.subscribe("dispose",Tba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Aj.prototype.init=function(){Aj.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.C("PAGEFRAME_JS")){var b=g.C("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
a=g.C("JS_COMMON_MODULE");var d=g.C("JS_PAGE_MODULES");d||(d=[a]);a=g.C("JS_DELAY_LOAD",0);0<a?(g.Ie(this.D),this.D=g.Ge(function(){b&&g.Re(b,c);window.spf.script.require(d)},a)):(b&&g.Re(b,c),window.spf.script.require(d));
g.n("yt.abuse.botguardInitialized",Te,void 0);g.n("yt.abuse.invokeBotguard",g.Ue,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",$e,void 0);g.n("yt.player.exports.navigate",g.ki,void 0);g.n("yt.util.activity.init",g.ng,void 0);g.n("yt.util.activity.getTimeSinceActive",g.og,void 0);g.n("yt.util.activity.setTimestamp",mg,void 0);Ji(g.q("ytplayer.config"));g.q("ytspf.enabled")&&Jba();ph();mba();zh(!0);g.ah(!1);g.C("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.Ce("service_worker_enabled")?ica():gca())};
Aj.prototype.dispose=function(){g.Ie(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.Je(Di);if(a=g.Fi())a.removeEventListener("onReady",Ei),a.removeEventListener("onStateChange",Ei);zh(!1);(a=qj())&&g.Bf(a);Aj.M.dispose.call(this)};
Aj.prototype.disable=function(){Aj.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Pi),window.removeEventListener("spfhistory",Qi),window.removeEventListener("spfrequest",Vi),window.removeEventListener("spfpartprocess",Zi),window.removeEventListener("spfpartdone",$i),window.removeEventListener("spfprocess",aj),window.removeEventListener("spfdone",ej),window.removeEventListener("spferror",fj),window.removeEventListener("spfreload",gj),window.removeEventListener("spfjsbeforeunload",
Bj));window.onload=null;window.onunload=null;window.onerror=null};
g.di(new Aj);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:09:12 Sep 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:26:28 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 203.773
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.056
  cdx.remote: 0.05
  esindex: 0.008
  LoadShardBlock: 148.333 (3)
  PetaboxLoader3.datanode: 179.686 (5)
  load_resource: 813.459 (2)
  PetaboxLoader3.resolve: 708.022 (2)
*/