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

var _yt_www={};(function(g){var window=this;var fa,la,ka,ma,baa,oa,pa,daa,eaa,Ta,nb,naa,rb,paa,nc,qaa,raa,oc,saa,uaa,Ac,Cc,Dc,Hc,vaa,Kc,Rc,Qc,xaa,Uc,Vc,Wc,Xc,yaa,Yc,Zc,cd,zaa,dd,ld,td,rd,od,Baa,wd,ud,vd,zd,Aaa,Hd,Caa,Daa,Jd,Ld,Faa,Qd,Rd,Sd,Gaa,$d,je,ke,ne,pe,Iaa,re,Ae,Ke,Laa,Qe,Se,Maa,Naa,Oaa,$e,af,Paa,ff,df,bf,hf,pf,zf,Af,Waa,Hf,Xf,Wf,Xaa,kg,jg,Yaa,$aa,bba,Bg,Cg,Dg,Eg,Gg,Jg,Kg,Qg,Pg,Tg,Ug,Vg,eba,Zg,ch,iba,Mg,Sg,bh,hh,lba,mba,ah,kh,eh,Lg,Rg,dh,lh,Hg,Xg,Ig,gba,nh,oh,qh,oba,ph,rh,pba,vh,mh,wh,qba,sh,th,rba,Ch,Kh,Nh,Ph,Sh,Xh,sba,yba,xba,wba,ci,
vba,tba,uba,zba,Aba,Cba,Dba,qi,li,ni,si,Eba,ti,vi,Fba,Gba,wi,xi,Di,Hi,Ii,Ji,Ni,Oi,Pi,Mba,Nba,Ei,Gi,Ci,Lba,Fi,Ti,Oba,$i,Si,Pba,Zi,Qba,Uba,Tba,Wba,bj,Xba,Rba,Sba,Yba,dj,Vba,aj,Zba,aca,cca,bca,$ba,ej,fj,gj,ca,hj,Ba,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
g.ea=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
fa=function(){fa=function(){};
ha.Symbol||(ha.Symbol=aaa)};
la=function(){fa();var a=ha.Symbol.iterator;a||(a=ha.Symbol.iterator=ha.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(this)}});
la=function(){}};
ka=function(a){var b=0;return ma(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
ma=function(a){la();a={next:a};a[ha.Symbol.iterator]=function(){return this};
return a};
g.na=function(a){la();var b=a[window.Symbol.iterator];return b?b.call(a):ka(a)};
baa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
oa=function(a,b){if(b){for(var c=ha,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}};
pa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.qa=function(a){return void 0!==a};
g.ra=function(a){return"string"==typeof a};
g.sa=function(a){return"number"==typeof a};
g.p=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.qa(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.r=function(a,b){for(var c=a.split("."),d=b||g.m,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.ta=function(){};
g.ua=function(a){a.zc=void 0;a.getInstance=function(){return a.zc?a.zc:a.zc=new a}};
g.wa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.xa=function(a){return"array"==g.wa(a)};
g.ya=function(a){var b=g.wa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.za=function(a){return"function"==g.wa(a)};
g.Aa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ca=function(a){return a[Ba]||(a[Ba]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.t=daa:g.t=eaa;return g.t.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.yV=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
g.Da=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Da);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Fa=function(a,b,c){b=g.Ea(a,b,c);return 0>b?null:g.ra(a)?a.charAt(b):a[b]};
g.Ea=function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ha=function(a,b){return 0<=(0,g.Ga)(a,b)};
g.Ia=function(a){return 0==a.length};
g.Ka=function(a,b){var c=(0,g.Ga)(a,b),d;(d=0<=c)&&g.Ja(a,c);return d};
g.Ja=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.La=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Ma=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.ya(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Na=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Oa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Pa=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Qa=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ra=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Ua=function(a,b){for(var c=0,d=(0,g.Sa)(String(a)).split("."),e=(0,g.Sa)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",n=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""];if(0==l[0].length&&0==n[0].length)break;c=Ta(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==n[1].length?0:(0,window.parseInt)(n[1],10))||Ta(0==l[2].length,0==n[2].length)||Ta(l[2],n[2]);l=l[3];n=n[3]}while(0==c)}return c};
Ta=function(a,b){return a<b?-1:a>b?1:0};
g.Va=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.Xa=function(a){return-1!=g.Wa.indexOf(a)};
g.Ya=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Za=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.$a=function(a,b){return null!==a&&b in a};
g.bb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.cb=function(a){for(var b in a)return!1;return!0};
g.db=function(a,b){b in a&&delete a[b]};
g.eb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.fb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.hb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<gb.length;f++)c=gb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.ib=function(){return g.Xa("Trident")||g.Xa("MSIE")};
g.lb=function(){return g.Xa("Safari")&&!(g.kb()||g.Xa("Coast")||g.Xa("Opera")||g.Xa("Edge")||g.Xa("Silk")||g.Xa("Android"))};
g.kb=function(){return(g.Xa("Chrome")||g.Xa("CriOS"))&&!g.Xa("Edge")};
g.mb=function(){return g.Xa("Android")&&!(g.kb()||g.Xa("Firefox")||g.Xa("Opera")||g.Xa("Silk"))};
nb=function(){return g.Xa("iPhone")&&!g.Xa("iPod")&&!g.Xa("iPad")};
g.ob=function(){return nb()||g.Xa("iPad")||g.Xa("iPod")};
g.pb=function(a){g.pb[" "](a);return a};
g.qb=function(a,b){try{return g.pb(a[b]),!0}catch(c){}return!1};
naa=function(a,b){var c=maa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
rb=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.tb=function(a){return naa(a,function(){return 0<=g.Ua(g.sb,a)})};
g.vb=function(a){return Number(g.ub)>=a};
g.xb=function(){this.C="";this.F=g.wb};
g.yb=function(a){var b=new g.xb;b.C=a;return b};
g.Ab=function(){this.C="";this.F=zb};
g.Bb=function(a){if(a instanceof g.Ab&&a.constructor===g.Ab&&a.F===zb)return a.C;g.wa(a);return"type_error:SafeUrl"};
g.Eb=function(a){if(a instanceof g.Ab)return a;a=a.Nd?a.Sc():String(a);g.Cb.test(a)||(a="about:invalid#zClosurez");return g.Db(a)};
g.Db=function(a){var b=new g.Ab;b.C=a;return b};
g.Gb=function(){this.C="";this.F=g.Fb};
g.Hb=function(a){var b=new g.Gb;b.C=a;return b};
g.Jb=function(){this.C="";this.F=g.Ib};
g.Kb=function(a){var b=new g.Jb;b.C=a;return b};
g.Mb=function(){this.C="";this.D=g.Lb;this.F=null};
g.Nb=function(a,b){var c=new g.Mb;c.C=a;c.F=b;return c};
g.Ob=function(a,b){var c=b instanceof g.Ab?b:g.Eb(b);a.href=g.Bb(c)};
g.Pb=function(a,b){var c=b instanceof g.Ab?b:g.Eb(b);a.href=g.Bb(c)};
g.Qb=function(a,b){return g.Nb(b,null)};
g.Rb=function(a,b){this.x=g.qa(a)?a:0;this.y=g.qa(b)?b:0};
g.Sb=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Tb=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.Ub=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.ra(a)?window.document.getElementById(a):a};
g.Vb=function(a){var b=window.document;return g.ra(a)?b.getElementById(a):a};
g.Xb=function(a,b){g.Ya(b,function(b,d){b&&b.Nd&&(b=b.Sc());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Wb.hasOwnProperty(d)?a.setAttribute(Wb[d],b):g.Na(d,"aria-")||g.Na(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.Zb=function(a){return g.Yb(a||window)};
g.Yb=function(a){a=a.document;a=g.$b(a)?a.documentElement:a.body;return new g.Ub(a.clientWidth,a.clientHeight)};
g.bc=function(a,b,c){return g.ac(window.document,arguments)};
g.ac=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ra(d.name),'"');if(d.type){c.push(' type="',g.Ra(d.type),'"');var e={};g.hb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ra(d)?c.className=d:g.xa(d)?c.className=d.join(" "):g.Xb(c,d));2<b.length&&g.cc(a,c,b,2);return c};
g.cc=function(a,b,c,d){function e(c){c&&b.appendChild(g.ra(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.ya(f)||g.Aa(f)&&0<f.nodeType?e(f):(0,g.y)(paa(f)?g.La(f):f,e)}};
g.$b=function(a){return"CSS1Compat"==a.compatMode};
g.dc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.ec=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.fc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Aa(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.za(a))return"function"==typeof a.item}return!1};
g.gc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.hc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.ic=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.jc=function(a,b){a.style.height=g.ic(b,!0)};
g.kc=function(a,b){a.style.width=g.ic(b,!0)};
g.lc=function(a){return function(){return a}};
g.mc=function(a){return!!a.google_async_iframe_id};
nc=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
qaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=q=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],n=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var q=l^d&(f^l);var w=1518500249}else q=d^f^l,w=1859775393;else 60>c?(q=d&f|l&(d|f),w=2400959708):(q=d^f^l,w=3395469782);q=((a<<5|a>>>27)&4294967295)+q+n+w+b[c]&4294967295;n=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=q}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+n&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==q)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[q++]=a[d++],w++,64==q)for(q=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>q?c(l,56-q):c(l,64-(q-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var n=24;0<=n;n-=8)a[d++]=e[k]>>n&255;return a}
for(var e=[],f=[],k=[],l=[128],n=1;64>n;++n)l[n]=0;var q,w;a();return{reset:a,update:c,digest:d,Wv:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
raa=function(a,b,c){var d=[],e=[];if(1==(g.xa(c)?2:1))return e=[b,a],(0,g.y)(d,function(a){e.push(a)}),oc(e.join(" "));
var f=[],k=[];(0,g.y)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ia(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.y)(d,function(a){e.push(a)});
a=oc(e.join(" "));a=[c,a];g.Ia(k)||a.push(k.join(""));return a.join("_")};
oc=function(a){var b=qaa();b.update(a);return b.Wv().toLowerCase()};
g.pc=function(a){this.C=a||{cookie:""}};
g.qc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Sa)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
saa=function(){var a=[],b=nc(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.pc(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.pc(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.m.location.href);return d&&b&&c?[c,raa(nc(d),b,a||null)].join(" "):null}return null};
g.rc=function(){this.Hc=this.Hc;this.Wb=this.Wb};
g.uc=function(a,b){g.sc(a,g.u(g.tc,b))};
g.sc=function(a,b){a.Hc?g.qa(void 0)?b.call(void 0):b():(a.Wb||(a.Wb=[]),a.Wb.push(g.qa(void 0)?(0,g.t)(b,void 0):b))};
g.tc=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.vc=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Ns=!0};
g.wc=function(a){var b=g.r("window.location.href");if(g.ra(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.xc=function(a,b){g.vc.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.L=!1;this.pointerId=0;this.pointerType="";this.wc=null;a&&this.init(a,b)};
g.zc=function(a){return!(!a||!a[yc])};
uaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Yg=e;this.key=++taa;this.qg=this.Qh=!1};
Ac=function(a){a.qg=!0;a.listener=null;a.C=null;a.src=null;a.Yg=null};
g.Bc=function(a){this.src=a;this.listeners={};this.C=0};
Cc=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Ka(a.listeners[c],b);d&&(Ac(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Dc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.qg&&f.listener==b&&f.capture==!!c&&f.Yg==d)return e}return-1};
g.Fc=function(a,b,c,d,e){if(d&&d.once)return g.Ec(a,b,c,d,e);if(g.xa(b)){for(var f=0;f<b.length;f++)g.Fc(a,b[f],c,d,e);return null}c=g.Gc(c);return g.zc(a)?a.O(b,c,g.Aa(d)?!!d.capture:!!d,e):Hc(a,b,c,!1,d,e)};
Hc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Aa(e)?!!e.capture:!!e,l=g.Ic(a);l||(a[Jc]=l=new g.Bc(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=vaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)waa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Kc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Lc++;return c};
vaa=function(){var a=xaa,b=Mc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Ec=function(a,b,c,d,e){if(g.xa(b)){for(var f=0;f<b.length;f++)g.Ec(a,b[f],c,d,e);return null}c=g.Gc(c);return g.zc(a)?a.Je(b,c,g.Aa(d)?!!d.capture:!!d,e):Hc(a,b,c,!0,d,e)};
g.Nc=function(a,b,c,d,e){if(g.xa(b))for(var f=0;f<b.length;f++)g.Nc(a,b[f],c,d,e);else d=g.Aa(d)?!!d.capture:!!d,c=g.Gc(c),g.zc(a)?a.Wa(b,c,d,e):a&&(a=g.Ic(a))&&(b=a.hf(b,c,d,e))&&g.Oc(b)};
g.Oc=function(a){if(g.sa(a)||!a||a.qg)return!1;var b=a.src;if(g.zc(b))return Cc(b.vd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Kc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Lc--;(c=g.Ic(b))?(Cc(c,a),0==c.C&&(c.src=null,b[Jc]=null)):Ac(a);return!0};
Kc=function(a){return a in Pc?Pc[a]:Pc[a]="on"+a};
Rc=function(a,b,c,d){var e=!0;if(a=g.Ic(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.qg&&(f=Qc(f,d),e=e&&!1!==f)}return e};
Qc=function(a,b){var c=a.listener,d=a.Yg||a.src;a.Qh&&g.Oc(a);return c.call(d,b)};
xaa=function(a,b){if(a.qg)return!0;if(!Mc){var c=b||g.r("window.event"),d=new g.xc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(n){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Rc(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Rc(c[k],f,!1,d),e=e&&l}return e}return Qc(a,new g.xc(b,
this))};
g.Ic=function(a){a=a[Jc];return a instanceof g.Bc?a:null};
g.Gc=function(a){if(g.za(a))return a;a[Sc]||(a[Sc]=function(b){return a.handleEvent(b)});
return a[Sc]};
g.Tc=function(){g.rc.call(this);this.vd=new g.Bc(this);this.bv=this;this.Ul=null};
Uc=function(a,b,c,d){b=a.vd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.qg&&k.capture==c){var l=k.listener,n=k.Yg||k.src;k.Qh&&Cc(a.vd,k);e=!1!==l.call(n,d)&&e}}return e&&0!=d.Ns};
Vc=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
Wc=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
Xc=function(a){g.m.setTimeout(function(){throw a;},0)};
yaa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Xa("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.ib()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.qa(c.next)){c=c.next;var a=c.Fn;c.Fn=null;a()}};
return function(a){d.next={Fn:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
Yc=function(){this.F=this.C=null};
Zc=function(){this.next=this.scope=this.lc=null};
cd=function(a,b){$c||zaa();ad||($c(),ad=!0);bd.add(a,b)};
zaa=function(){if(-1!=String(g.m.Promise).indexOf("[native code]")){var a=g.m.Promise.resolve(void 0);$c=function(){a.then(dd)}}else $c=function(){var a=dd;
!g.za(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.Xa("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(ed||(ed=yaa()),ed(a)):g.m.setImmediate(a)}};
dd=function(){for(var a;a=bd.remove();){try{a.lc.call(a.scope)}catch(b){Xc(b)}Wc(fd,a)}ad=!1};
g.gd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.id=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.kd=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.ta)try{var c=this;a.call(b,function(a){g.jd(c,2,a)},function(a){g.jd(c,3,a)})}catch(d){g.jd(this,3,d)}};
ld=function(){this.next=this.context=this.F=this.G=this.C=null;this.D=!1};
g.nd=function(a,b,c){var d=md.get();d.G=a;d.F=b;d.context=c;return d};
g.pd=function(a,b,c){od(a,b,c,null)||cd(g.u(b,a))};
g.qd=function(a){return new g.kd(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,n;l<a.length;l++)n=a[l],g.pd(n,g.u(f,l),k);
else b(e)})};
g.sd=function(a,b){return rd(a,null,b,void 0)};
td=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?td(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):ud(c),vd(c,e,3,b)))}a.D=null}else g.jd(a,3,b)};
g.xd=function(a,b){a.F||2!=a.C&&3!=a.C||wd(a);a.G?a.G.next=b:a.F=b;a.G=b};
rd=function(a,b,c,d){var e=g.nd(null,null,null);e.C=new g.kd(function(a,k){e.G=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){k(q)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.qa(e)&&b instanceof g.yd?k(b):a(e)}catch(q){k(q)}}:k});
e.C.D=a;g.xd(a,e);return e.C};
g.jd=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,od(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,wd(a),3!=b||c instanceof g.yd||Aaa(a,c)))};
od=function(a,b,c,d){if(a instanceof g.kd)return g.xd(a,g.nd(b||g.ta,c||null,d)),!0;if(g.id(a))return a.then(b,c,d),!0;if(g.Aa(a))try{var e=a.then;if(g.za(e))return Baa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Baa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(n){f(n)}};
wd=function(a){a.L||(a.L=!0,cd(a.J,a))};
ud=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
vd=function(a,b,c,d){if(3==c&&b.F&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,zd(b,c,d);else try{b.D?b.G.call(b.context):zd(b,c,d)}catch(e){Ad.call(null,e)}Wc(md,b)};
zd=function(a,b,c){2==b?a.G.call(a.context,c):a.F&&a.F.call(a.context,c)};
Aaa=function(a,b){a.H=!0;cd(function(){a.H&&Ad.call(null,b)})};
g.yd=function(a){g.Da.call(this,a)};
g.Bd=function(a,b,c){if(g.za(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.Cd=function(a){g.m.clearTimeout(a)};
g.Dd=function(a,b,c){g.rc.call(this);this.C=a;this.D=b||0;this.F=c;this.uc=(0,g.t)(this.Gk,this)};
g.Ed=function(a){if(a.classList)return a.classList;a=a.className;return g.ra(a)&&a.match(/\S+/g)||[]};
g.A=function(a,b){return a.classList?a.classList.contains(b):g.Ha(g.Ed(a),b)};
g.Fd=function(){};
Hd=function(a){if(a instanceof g.Fd)return a;if("function"==typeof a.cd)return a.cd(!1);if(g.ya(a)){var b=0,c=new g.Fd;c.next=function(){for(;;){if(b>=a.length)throw g.Gd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Id=function(a,b,c){if(g.ya(a))try{(0,g.y)(a,b,c)}catch(d){if(d!==g.Gd)throw d;}else{a=Hd(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Gd)throw d;}}};
Caa=function(a){if(g.ya(a))return g.La(a);a=Hd(a);var b=[];g.Id(a,function(a){b.push(a)});
return b};
g.Kd=function(a){var b=[];Jd(new Daa,a,b);return b.join("")};
Daa=function(){};
Jd=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.xa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Jd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ld(d,c),c.push(":"),Jd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ld(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Ld=function(a,b){b.push('"',a.replace(Eaa,function(a){var b=Md[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Md[a]=b);return b}),'"')};
g.Nd=function(a){g.rc.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.Od=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Fa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.qd(b)}};
Faa=function(a,b,c){cd(function(){a.apply(b,c)})};
g.Pd=function(a){this.C=a};
Qd=function(a){this.C=a};
Rd=function(a){this.data=a};
Sd=function(a){return!g.qa(a)||a instanceof Rd?a:new Rd(a)};
g.Td=function(a){this.C=a};
g.Vd=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Ud)()||!!b&&b>(0,g.Ud)()};
g.Wd=function(a){this.C=a};
Gaa=function(){};
g.Xd=function(){};
g.Yd=function(a){this.C=a};
g.Zd=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
$d=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.C=a};
g.ae=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.be=function(a){return a.match(Haa)};
g.ce=function(a){return a?(0,window.decodeURI)(a):a};
g.de=function(a){return g.ce(g.be(a)[3]||null)};
g.ee=function(a){a=g.be(a);return g.ae(null,null,null,null,a[5],a[6],a[7])};
g.fe=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.ge=function(a,b,c){if(g.xa(b))for(var d=0;d<b.length;d++)g.ge(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Pa(b)))};
g.he=function(a){var b=[],c;for(c in a)g.ge(c,a[c],b);return b.join("&")};
g.ie=function(a,b){var c=g.he(b);return g.fe(a,c)};
je=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
ke=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.me=function(a){ke(g.le,arguments)};
ne=function(a,b){var c=g.B(a,void 0);c?c.push(b):g.me(a,[b])};
g.B=function(a,b){return a in g.le?g.le[a]:b};
pe=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.oe(b)}}:a};
g.oe=function(a,b,c,d,e){var f=g.r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.B("ERRORS",[]),f.push([a,b,c,d,e]),g.me("ERRORS",f))};
g.qe=function(a){g.oe(a,"WARNING",void 0,void 0,void 0)};
Iaa=function(a,b,c,d,e){var f=!1,k;if((k=(k=g.le.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,n=k.length;l<n;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.ra(a)?f=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.oe(e))};
g.se=function(a){return!!re(a)};
g.te=function(a){return Number(re(a)||0)};
re=function(a){return g.B("EXPERIMENT_FLAGS",{})[a]};
g.C=function(a,b){return a?a.dataset?a.dataset[g.ue(b)]:a.getAttribute("data-"+b):null};
g.ue=function(a){return ve[a]||(ve[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.we=function(a,b){g.za(a)&&(a=pe(a));return window.setTimeout(a,b)};
g.xe=function(a,b){g.za(a)&&(a=pe(a));return window.setInterval(a,b)};
g.ye=function(a){window.clearTimeout(a)};
g.ze=function(a){window.clearInterval(a)};
g.D=function(a,b,c){var d=Ae();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Ce[e]&&b.apply(c||window,d)};
try{De[a]?k():g.we(k,0)}catch(l){g.oe(l)}},c);
Ce[e]=!0;Ee[a]||(Ee[a]=[]);Ee[a].push(e);return e}return 0};
g.Fe=function(a){var b=Ae();b&&(g.sa(a)?a=[a]:g.ra(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.y)(a,function(a){b.unsubscribeByKey(a);delete Ce[a]}))};
g.E=function(a,b){var c=Ae();return c?c.publish.apply(c,arguments):!1};
g.Ge=function(a,b){De[a]=!0;var c=Ae();c=c?c.publish.apply(c,arguments):!1;De[a]=!1;return c};
Ae=function(){return g.r("ytPubsubPubsubInstance")};
g.Ie=function(a,b){var c=g.He(a);window.spf.script.load(a,c,b)};
g.He=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Jaa,""),b=b.replace(Kaa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
Ke=function(){return null!=g.Je};
g.Le=function(){return g.Je?g.Je.invoke():null};
Laa=function(){};
g.Ne=function(a,b){return g.Me(a,1,b)};
g.Pe=function(a){for(var b=0,c=a.length;b<c;b++)g.Oe(a[b])};
Qe=function(){};
g.Re=function(){return!!g.r("yt.scheduler.instance")};
g.Me=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.we(a,c||0)};
g.Oe=function(a){if(!(0,window.isNaN)(a)){var b=g.r("yt.scheduler.instance.cancelJob");b?b(a):g.ye(a)}};
Se=function(){return(0,window.parseInt)(g.B("DCLKSTAT",0),10)};
Maa=function(){if(!Te)return null;var a=Te();return"open"in a?a:null};
g.Ve=function(a){switch(g.Ue(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Ue=function(a){return a&&"status"in a?a.status:-1};
g.We=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Qa(e[0]||"");e=g.Qa(e[1]||"");f in b?g.xa(b[f])?g.Ma(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.Ye=function(a,b){return g.Xe(a,b||{},!0)};
g.Xe=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.We(e[1]||"");for(var f in b)if(c||!g.$a(e,f))e[f]=b[f];return g.ie(a,e)+d};
Naa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.be(a)[1]||null,e=g.de(a);d&&e?(d=c,c=g.be(a),d=g.be(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.de(c)==e&&(Number(g.be(c)[4]||null)||null)==(Number(g.be(a)[4]||null)||null):!0;for(var f in Ze){if((e=d=g.B(Ze[f]))&&!(e=c)){e=f;var k=g.B("CORS_HEADER_WHITELIST")||{},l=g.de(a);e=l?(k=k[l])?g.Ha(k,e):!1:!0}e&&(b[f]=d)}return b};
Oaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=$e(a,b);var d=af(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.ye(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.m;c?b.Z&&b.Z.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ab&&b.ab.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Yq&&0<b.timeout&&(f=g.we(function(){e||(e=!0,g.ye(f),b.Yq.call(b.context||g.m))},b.timeout))}else g.F(a,b)};
g.F=function(a,b){var c=b.format||"JSON";a=$e(a,b);var d=af(a,b),e=!1,f,k=bf(a,function(a){if(!e){e=!0;f&&g.ye(f);var d=g.Ve(a),k=null;if(d||400<=a.status&&500>a.status)k=Paa(c,a,b.pb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.m;d?b.Z&&b.Z.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.ab&&b.ab.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.gc&&0<b.timeout&&(f=g.we(function(){e||(e=!0,k.abort(),g.ye(f),b.gc.call(b.context||g.m,k))},b.timeout));
return k};
$e=function(a,b){b.fB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.B("XSRF_FIELD_NAME",void 0),d=b.ua;d&&(d[c]&&delete d[c],a=g.Ye(a,d));return a};
af=function(a,b){var c=g.B("XSRF_FIELD_NAME",void 0),d=g.B("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ka,k=g.B("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.pw||g.de(a)&&!b.withCredentials&&g.de(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ka&&b.ka[k]||(f||(f={}),f[c]=d);f&&g.ra(e)&&(e=g.We(e),g.hb(e,f),e=b.fs&&"JSON"==b.fs?JSON.stringify(e):g.he(e));f=e||f&&!g.cb(f);!cf&&f&&"POST"!=b.method&&(cf=!0,g.oe(Error("AJAX request with postData should use POST")));
return e};
Paa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?df(b):null)d={},b=b.getElementsByTagName("*"),(0,g.y)(b,function(a){d[a.tagName]=g.ef(a)})}c&&ff(d);
return d};
ff=function(a){if(g.Aa(a))for(var b in a)"html_content"==b||g.Oa(b,"_html")?a[b]=g.Qb(g.yb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):ff(a[b])};
df=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.ef=function(a){var b="";(0,g.y)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.gf=function(a,b){b.method="POST";b.ka||(b.ka={});return g.F(a,b)};
bf=function(a,b,c,d,e,f,k){function l(){4==(n&&"readyState"in n?n.readyState:0)&&b&&pe(b)(n)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var n=Maa();if(!n)return null;"onloadend"in n?n.addEventListener("loadend",l,!1):n.onreadystatechange=l;n.open(c,a,!0);f&&(n.responseType=f);k&&(n.withCredentials=!0);c="POST"==c;if(e=Naa(a,e))for(var q in e)n.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");n.send(d);return n};
hf=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.jf=function(a){var b=new hf;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.kf=function(a){var b=new hf;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.mf=function(a){var b=a.__yt_uid_key;b||(b=lf(),a.__yt_uid_key=b);return b};
g.nf=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Qaa+"VisibilityState";if(b in a)return a[b]};
g.of=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Raa||(this[b]=a[b]);this.scale=a.scale;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.C=a.pageX;this.F=a.pageY}};
pf=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.qf=function(a){g.qa(a.C)||pf(a);return a.C};
g.rf=function(a){g.qa(a.F)||pf(a);return a.F};
g.tf=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.bb(sf,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.G=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.tf(a,b,c,d);if(e)return e;e=++uf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.of(d);if(!g.gc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.of(b);
b.currentTarget=a;return c.call(a,b)};
k=pe(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);sf[e]=[a,b,c,k,d];return e};
g.vf=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.y)(a,function(a){if(a in sf){var b=sf[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete sf[a]}}))};
g.wf=function(a,b,c){var d;return d=g.G(a,b,function(){g.vf(d);c.apply(a,arguments)},!1)};
g.xf=function(a){for(var b in sf)sf[b][0]==a&&g.vf(b)};
g.yf=function(a){this.uc=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.G(window,"mousemove",(0,g.t)(this.W,this));this.N=g.xe((0,g.t)(this.R,this),25)};
zf=function(){g.rc.call(this);this.C=[]};
Af=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.fb(Saa);this.assets=a.assets||{};this.attrs=a.attrs||g.fb(Taa);this.params=a.params||g.fb(Uaa);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Bf=function(a){a instanceof Af||(a=new Af(a));return a};
g.Ef=function(a,b,c,d,e,f){f=f||{};f.name=c||g.B("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Cf||(c=a.stacktrace,d=a.columnNumber,a=g.wc(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),Df[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={ua:{a:"logerror",t:"jserror",type:a.name,
msg:a.message.substr(0,1E3),line:e,level:void 0===b?"ERROR":b,"client.name":f.name},ka:{url:g.B("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ka.stack=c);for(var k in f)b.ka["client."+k]=f[k];if(k=g.B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ka[l]=k[l];g.F("/error_204",b);Df[a.message]=!0;Cf++}};
g.Kf=function(a,b){g.Ff[a.endpoint]=b;if(a.Uh){var c=a.Uh;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Gf[a.Uh.token]=d;c=Hf(a.endpoint,a.Uh.token)}else c=Hf(a.endpoint);c.push(a.payload);c.length>=(g.te("web_logging_max_batch")||20)?g.If():g.Jf()};
g.If=function(){g.ye(g.Lf);if(!g.cb(g.Mf)){for(var a in g.Mf){var b=g.Nf[a];if(!b){var c=g.Ff[a];if(!c)continue;b=new c;g.Nf[a]=b}c=void 0;var d=a,e=b,f=Vaa[d],k=Of[d]||{};Of[d]=k;b=Math.round(g.Pf());for(c in g.Mf[d]){var l=g.Qf(e);l[f]=Hf(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var n=Gf[c];if(n)a:{var q=l,w=c;if(n.videoId)var z="VIDEO";else if(n.playlistId)z="PLAYLIST";else break a;q.credentialTransferTokenTargetId=n;q.context=
q.context||{};q.context.user=q.context.user||{};q.context.user.credentialTransferTokens=[{token:w,scope:z}]}delete Gf[c];g.Rf(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.Mf[a]}g.cb(g.Mf)||g.Jf()}};
Waa=function(){var a=[];for(e in g.Mf){var b=Of[e]||{};Of[e]=b;for(var c in g.Mf[e]){var d=Hf(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.Pf());for(var f in Of)b=Of[f],b.eventType=f in Sf?Sf[f]:"UNKNOWN_TYPE",c=Tf[f],b.metricIntervalMs=c?e-c:e-g.Uf,a.push(b),Tf[f]=e,delete Of[f];return a};
g.Jf=function(){g.ye(g.Lf);g.Lf=g.we(g.If,g.B("LOGGING_BATCH_TIMEOUT",g.Vf||1E4))};
Hf=function(a,b){b=void 0===b?"":b;g.Mf[a]=g.Mf[a]||{};g.Mf[a][b]=g.Mf[a][b]||[];return g.Mf[a][b]};
g.Yf=function(a){if(null==g.r("_lact",window)){var b=(0,window.parseInt)(g.B("LACT"),10);b=(0,window.isFinite)(b)?(0,g.Ud)()-Math.max(b,0):-1;g.p("_lact",b,window);g.p("_fact",b,window);-1==b&&Wf();g.G(window.document,"keydown",Wf);g.G(window.document,"keyup",Wf);g.G(window.document,"mousedown",Wf);g.G(window.document,"mouseup",Wf);g.se("lact_local_listeners")||a?(g.G(window,"resize",function(){Xf("resize",200)}),g.G(window,"scroll",function(){Xf("scroll",200)}),new g.yf(function(){Xf("mouse",100)}),
g.G(window.document,"touchstart",Wf),g.G(window.document,"touchend",Wf)):(g.D("page-mouse",Wf),g.D("page-scroll",Wf),g.D("page-resize",Wf))}};
Xf=function(a,b){Zf[a]||(Zf[a]=!0,g.Ne(function(){Wf();Zf[a]=!1},b))};
Wf=function(){null==g.r("_lact",window)&&g.Yf();var a=(0,g.Ud)();g.p("_lact",a,window);-1==g.r("_fact",window)&&g.p("_fact",a,window);(a=g.r("ytglobal.ytUtilActivityCallback_"))&&a()};
g.$f=function(){var a=g.r("_lact",window);return null==a?-1:Math.max((0,g.Ud)()-a,0)};
g.bg=function(a,b,c,d){var e=g.ag,f={};f.eventTimeMs=Math.round(c||g.Pf());f[a]=b;f.context={lastActivityMs:String(c?-1:g.$f())};g.Kf({endpoint:"log_event",payload:f,Uh:d},e)};
Xaa=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.ag=function(a){this.C=a||{innertubeApiKey:g.B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.B("INNERTUBE_API_VERSION",void 0),hB:g.B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),jB:g.B("INNERTUBE_CONTEXT_HL",void 0),iB:g.B("INNERTUBE_CONTEXT_GL",void 0),kB:g.B("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
g.Qf=function(a){a=a.C;a={client:{hl:a.jB,gl:a.iB,clientName:a.hB,clientVersion:a.innertubeContextClientVersion}};g.B("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.B("DELEGATED_SESSION_ID")});return{context:a}};
g.Rf=function(a,b,c,d){!g.B("VISITOR_DATA")&&.01>Math.random()&&g.oe(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.B("VISITOR_DATA","")},method:"POST",ka:c,fs:"JSON",gc:function(){d.gc()},
Yq:d.gc,Z:function(a,b){d.Z&&d.Z(b)},
Xq:function(a){d.Z&&d.Z(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Wq:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=saa();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.B("SESSION_INDEX",0));var k="",l=a.C.kB;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);a=""+k+Xaa(a.C.innertubeApiVersion,b,c)+"?alt=json&key="+a.C.innertubeApiKey;try{g.se("use_fetch_for_op_xhr")?Oaa(a,e):g.gf(a,e)}catch(n){if("InvalidAccessError"==n)g.oe(Error("An extension is blocking network request."),"WARNING");else throw n;}};
g.dg=function(a,b,c){g.bg(a,b,c,void 0)};
g.eg=function(){g.se("log_web_meta")&&Waa().forEach(function(a){g.dg("delayedEventMetricCaptured",a)})};
g.fg=function(a,b,c,d,e){this.D=a;this.H=b;this.G=c;this.F=d;this.C=e};
g.gg=function(a){return new g.fg(a)};
g.hg=function(a){var b={};void 0!==a.D?b.trackingParams=a.D:(b.veType=a.H,null!=a.G&&(b.veCounter=a.G),null!=a.F&&(b.elementIndex=a.F));void 0!==a.C&&(b.dataElement=g.hg(a.C));return b};
g.ig=function(a,b,c){(0,g.y)(b,function(b){g.bg("visualElementHidden",{csn:a,ve:g.hg(b),eventType:c?16:8})})};
kg=function(a,b){var c=Object.keys(a).join("");jg("info_"+c+"_"+b)||(a.clientActionNonce=b,g.dg("latencyActionInfo",a))};
jg=function(a){lg[a]=lg[a]||{count:0};var b=lg[a];b.count++;b.time=g.Pf();mg||(mg=g.Me(Yaa,0,5E3));return 10<b.count?(11==b.count&&g.Ef(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
Yaa=function(){var a=g.Pf(),b;for(b in lg)6E4<a-lg[b].time&&delete lg[b];mg=0};
g.pg=function(a){if(!g.ng&&!g.og||!window.JSON)return null;try{var b=g.ng.get(a)}catch(c){}if(!g.ra(b))try{b=g.og.get(a)}catch(c){}if(!g.ra(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.qg=function(){var a=g.B("ROOT_VE_TYPE",void 0);return a?new g.fg(void 0,a,void 0):null};
g.rg=function(){return g.pg("yt-interaction-logging-parent")};
g.sg=function(){var a=g.B("client-screen-nonce")||g.B("EVENT_ID");return a?a:null};
g.tg=function(a,b){a=a||"";var c=a.match(Zaa);window.spf.style.load(a,c?c[1]:"",b)};
g.ug=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Wa,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.bc("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.fc(a).body.appendChild(a)):e?bf(a,b,"POST",e,d):g.B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?bf(a,b,"GET","",d):$aa(a,b))};
$aa=function(a,b){var c=new window.Image,d=""+aba++;vg[d]=c;c.onload=c.onerror=function(){b&&vg[d]&&b();delete vg[d]};
c.src=a};
g.wg=function(a,b){this.version=a;this.args=b};
g.xg=function(a,b){this.topic=a;this.C=b};
g.zg=function(a,b){var c=g.yg();c&&c.publish.call(c,a.toString(),a,b)};
g.yg=function(){return g.r("ytPubsub2Pubsub2Instance")};
bba=function(a){if(Ag.getEntriesByType){var b=Ag.getEntriesByType("paint");if(b=g.Fa(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.za(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
Bg=function(){var a=g.B("TIMING_TICK_EXPIRATION");a||(a={},g.me("TIMING_TICK_EXPIRATION",a));return a};
Cg=function(){var a=Bg(),b;for(b in a)g.Oe(a[b]);g.me("TIMING_TICK_EXPIRATION",{})};
Dg=function(a,b){g.wg.call(this,1,arguments)};
Eg=function(a,b){g.wg.call(this,1,arguments)};
Gg=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Ud)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Fg)for(a=1,b=0;b<Fg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Fg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&
63));return a.join("")};
Jg=function(a){Hg(a);cba();Ig(!1,a);a||(g.B("TIMING_ACTION")&&g.me("PREVIOUS_ACTION",g.B("TIMING_ACTION")),g.me("TIMING_ACTION",""))};
g.Og=function(a,b,c){b||"_"==a[0]||Kg(a,c);var d=Lg(c),e=b||g.Pf();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=Bg();var f=e[a];f&&(g.Oe(f),e[a]=0);Mg(a,b,c)||g.Ng(!1,c);return d[a]};
Kg=function(a,b){Ag.mark&&(g.Na(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Ag.mark(a))};
Qg=function(a,b){Pg("yt_sts",a,void 0);g.Og("_start",b,void 0)};
Pg=function(a,b,c){Rg(c)[a]=b;Sg(a,b,c)};
Tg=function(a){var b=Rg(void 0);return a in b};
Ug=function(a){var b=Lg(a);if(b.aft)return b.aft;a=g.B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
Vg=function(a){g.Og("nreqs",a.requestStart,void 0);g.Og("nress",a.responseStart,void 0);g.Og("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.Og("nrs",a.redirectStart,void 0),g.Og("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.Og("ndnss",a.domainLookupStart,void 0),g.Og("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.Og("ntcps",a.connectStart,void 0),g.Og("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.Og("nstcps",a.secureConnectionStart,void 0),g.Og("ntcpe",a.connectEnd,void 0))};
g.Ng=function(a,b){if(!Xg(b)){var c=g.B((b||"")+"TIMING_ACTION",void 0),d=Lg(b);if(g.r("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Ug(b)))if(g.se("tighter_critical_section")&&!Yg&&(g.zg(dba,new Dg(Math.round(c-d._start),b)),Yg=!0),a||b)Zg(b);else{c=!0;var e=g.B("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Zg(b)}}};
eba=function(){switch(g.nf()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Zg=function(a){Cg();if(!g.se("csi_on_gel")){var b=Lg(a),c=Rg(a),d=b._start,e;for(e in b)if(g.Na(e,"_")&&g.xa(b[e])){var f=e.slice(1);if(f in fba){var k=(0,g.$g)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.r("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))ah(k,f),Jg(a)}else{var l=g.B("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.B((a||"")+"TIMING_ACTION",void 0)};var n=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var q=window.location.protocol+g.r("ytplayer.config.assets.js");(q=Ag.getEntriesByName?Ag.getEntriesByName(q)[0]:null)?c.h5jse=Math.round(c.h5jse-q.responseEnd):delete c.h5jse}b.aft=Ug(a);gba(a)&&"youtube"==l&&(Pg("yt_lt","hot_bg",a),l=
b.vc,q=b.pbs,delete b.aft,c.aft=Math.round(q-l));for(var w in c)"_"!=w.charAt(0)&&(k[w]=c[w]);b.ps=g.Pf();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,w.push(e+"."+l));k.rt=w.join(",");(b=g.r("ytdebug.logTiming"))&&b(k,c);ah(k,f,a);g.zg(hba,new Eg(c.aft+(n||0),a))}}};
ch=function(a){if(!Xg(void 0)){if(!g.se("send_empty_timing")){var b=g.B("CSI_SERVICE_NAME","youtube");if(!g.B("TIMING_ACTION",void 0)||!b)return}g.Og("aa",void 0,void 0);Pg("ap",1,void 0);Pg("yt_fss",a,void 0);!g.se("enable_csi_abandonment_info")||Tg("yt_lt")||bh();Zg(void 0)}};
iba=function(){if("cold"==Rg().yt_lt){var a=Lg(),b=dh(),c;for(c in a)g.Na(c,"_")||"tick_"+c in b||Mg(c,a[c]);a=Rg();for(c in a)"info_"+c in b||Sg(c,a[c])}};
Mg=function(a,b,c){dh(c)["tick_"+a]=b;c||b||g.Pf();return g.se("csi_on_gel")?(c=eh(c),"_start"==a?jg("baseline_"+c)||g.dg("latencyActionBaselined",{clientActionNonce:c},b):jg("tick_"+a+"_"+c)||g.dg("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Sg=function(a,b,c){dh(c)["info_"+a]=b;if(g.se("csi_on_gel"))if(a in fh){var d={};a=fh[a];g.Ha(jba,a)&&(b=!!b);a=a.split(".");for(var e=d,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];d[a[a.length-1]]=b;b=eh(c);kg(d,b)}else g.Ha(kba,a)||g.oe(Error("Unknown label "+a+" logged with GEL CSI."))};
bh=function(){var a=g.B("TIMING_INFO",{});for(b in a)Pg(b,a[b]);Pg("is_nav",1);(a=g.sg())&&Pg("csn",a);(a=g.B("PREVIOUS_ACTION",void 0))&&Pg("pa",a);var b=Rg();b.p=g.B("CLIENT_PROTOCOL")||"unknown";b.t=g.B("CLIENT_TRANSPORT")||"unknown";Pg("yt_vis",eba());if("cold"==b.yt_lt){a=Ag.timing||{};a.navigationStart&&(g.Og("srt",a.responseStart),1!=b.prerender&&Qg("n",a.navigationStart));b=bba(a);0<b&&g.Og("fpt",b);Vg(a);Ag.getEntriesByType&&lba();a=[];if(window.document.querySelector&&Ag&&Ag.getEntriesByName)for(var c in gh)b=
gh[c],mba(c,b)&&a.push(b);a.length&&Pg("rc",a.join(","))}g.se("csi_on_gel")&&(c={},c.actionType=nba[g.B("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=eh(),kg(c,a))};
hh=function(a){return Math.round(Ag.timing.navigationStart+a)};
lba=function(){var a=window.location.protocol,b=Ag.getEntriesByType("resource");b=(0,g.ih)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20171201001008/https://fonts.gstatic.com/s/")});
(b=(0,g.jh)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.Og("wffs",hh(b.startTime)),g.Og("wffe",hh(b.responseEnd)))};
mba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=Ag.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.Og("rsf_"+b,d+Math.round(c.fetchStart)),g.Og("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(Tg("rc")||Pg("rc",""),0===c.transferSize))?!0:!1:!1};
ah=function(a,b,c){if(g.se("debug_csi_data")){var d=g.r("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||g.ug(a,void 0,void 0,void 0,f)}catch(k){g.ug(a,void 0,void 0,void 0,f)}}else g.ug(a);Ig(!0,c)};
kh=function(a){g.p("ytglobal.timingready_",a,void 0)};
eh=function(a){var b=lh(a).nonce;b||(b=Gg(),lh(a).nonce=b);return b};
Lg=function(a){return lh(a).tick};
Rg=function(a){return lh(a).info};
dh=function(a){a=lh(a);"gel"in a||(a.gel={});return a.gel};
lh=function(a){return g.r("ytcsi."+(a||"")+"data_")||Hg(a)};
Hg=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
Xg=function(a){return!!g.r("yt.timing."+(a||"")+"pingSent_")};
Ig=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
gba=function(a){var b=Lg(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Rg(a).yt_pvis};
nh=function(a,b){g.rc.call(this);this.H=this.oa=a;this.N=b;this.L=!1;this.api={};this.aa=this.W=null;this.R=new g.Nd;g.uc(this,this.R);this.D={};this.ma=this.ia=this.F=this.ib=this.C=null;this.V=!1;this.G=this.J=null;this.Sa={};this.sb=["onReady"];this.eb=null;this.nb=window.NaN;this.X={};mh(this);this.Ih("WATCH_LATER_VIDEO_ADDED",this.fG.bind(this));this.Ih("WATCH_LATER_VIDEO_REMOVED",this.gG.bind(this));this.Ih("onAdAnnounce",this.av.bind(this));this.wb=new zf(this);g.uc(this,this.wb)};
oh=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
qh=function(a){var b=!0,c=ph(a);c&&a.C&&(a=a.C,b=g.C(c,"version")==a.assets.js);return b&&!!g.r("yt.player.Application.create")};
oba=function(a){if(!a.qb()&&!a.V){var b=qh(a);if(b&&"html5"==(ph(a)?"html5":null))a.ma="html5",a.L||rh(a);else if(sh(a),a.ma="html5",b&&a.G)a.oa.appendChild(a.G),rh(a);else{a.C.loaded=!0;var c=!1;a.J=function(){c=!0;var b=a.C.clone();g.r("yt.player.Application.create")(a.oa,b);rh(a)};
a.V=!0;b?a.J():(g.Ie(a.C.assets.js,a.J),g.tg(a.C.assets.css),th(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
ph=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
rh=function(a){if(!a.qb()){var b=ph(a),c=!1;try{b&&b.getApiInterface&&b.getApiInterface()&&(c=!0)}catch(d){g.qe(Error("Error calling getApiInterface: "+d))}c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||pba(a)):a.nb=g.we(function(){rh(a)},50)}};
pba=function(a){mh(a);a.L=!0;var b=ph(a);b.addEventListener&&(a.W=vh(a,b,"addEventListener"));b.removeEventListener&&(a.aa=vh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=vh(a,b,e))}for(var f in a.D)a.W(f,a.D[f]);oh(a);a.ia&&a.ia(a.api);a.R.qa("onReady",a.api)};
vh=function(a,b,c){var d=b[c];return function(){try{return a.eb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.eb=e,g.qe(e))}}};
mh=function(a){a.L=!1;if(a.aa)for(var b in a.D)a.aa(b,a.D[b]);for(var c in a.X)g.ye((0,window.parseInt)(c,10));a.X={};a.W=null;a.aa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Ih.bind(a);a.api.removeEventListener=a.xK.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.fx.bind(a);a.api.getPlayerType=a.yx.bind(a);a.api.getCurrentVideoConfig=a.Hw.bind(a);a.api.loadNewVideoConfig=a.Hl.bind(a);a.api.isReady=a.YB.bind(a)};
wh=function(a,b){var c=b;if("string"==typeof b){if(a.Sa[b])return a.Sa[b];c=function(){var a=g.r(b);a&&a.apply(g.m,arguments)};
a.Sa[b]=c}return c?c:null};
qba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.m[c]=function(c){var d=a.C&&a.C.args&&a.C.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.R.qa(b,c);else{var f=g.we(function(){a.qb()||(a.R.qa(b,c),g.db(a.X,String(f)))},0);
g.eb(a.X,String(f),!0)}};
return c};
sh=function(a){g.Og("dcp");a.cancel();mh(a);a.ma=null;a.C&&(a.C.loaded=!1);var b=ph(a);b&&(qh(a)||!th(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.dc(a.oa)};
th=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.zh=function(a,b){a=g.ra(a)?g.Vb(a):a;var c=g.xh+"_"+g.Ca(a),d=g.yh[c];if(d)return d.Hl(b),d.api;d=new nh(a,c);g.yh[c]=d;g.E("player-added",d.api);g.sc(d,g.u(rba,d));g.we(function(){d.Hl(b)},0);
return d.api};
rba=function(a){delete g.yh[a.getId()]};
g.Ah=function(a){if(!a)return null;var b=g.xh+"_"+g.Ca(a),c=g.yh[b];c||(c=new nh(a,b),g.yh[b]=c);return c.api};
g.Bh=function(a){return g.Ah(window.document.getElementById(a))};
Ch=function(){var a=g.qg(),b=g.sg();b&&a&&g.ig(b,[a],!0)};
g.Gh=function(a){var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.$f()>b)&&"visible"==g.nf()){b=-1;g.Dh&&(b=Math.round(g.Pf()-g.Dh));var c=String;var d=g.r("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Ud)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.Eh,index:String(Fh),lastEventDeltaMs:String(b),trigger:a};g.bg("foregroundHeartbeat",a);g.p("_fact",-1,window);Fh++;g.Dh=g.Pf()}};
g.Hh=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?pe(d):null;this.H=e?pe(e):null;this.G=[];this.C=this.F=0};
g.Ih=function(a){g.Oe(a.F);a.F=g.Ne((0,g.t)(a.init,a))};
g.Lh=function(a){a.name in Jh&&Kh(a.name);Jh[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.y)(a.deps,function(b){if(!(b in Jh))throw Error("Module "+b+" required by "+a.name);Jh[b].reqs.push(a.name)});
a.enable()};
Kh=function(a){if(a in Jh){var b=Jh[a];(0,g.y)(b.reqs,function(a){Kh(a)});
try{b.disable()}catch(c){}delete Jh[a]}};
Nh=function(a){ke(g.Mh,arguments)};
g.Oh=function(a){return a in g.Mh};
Ph=function(a){ke(g.Mh,arguments)};
g.Rh=function(a,b,c,d){g.Qh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Th=function(a,b,c){var d=g.B("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.de(window.location.href);e&&d.push(e);e=g.de(a);if(g.Ha(d,e)||!e&&g.Na(a,"/"))if(g.se("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.Ob(d,a),a=d.href),a&&(a=g.ee(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.sg();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Va(a).toString(36),d=b?g.he(b):"",g.Rh(a,d,c||5),Sh(b))):(c="ST-"+g.Va(a).toString(36),a=b?g.he(b):
"",g.Rh(c,a,5),Sh(b))}};
Sh=function(a){if(a){a=a.itct||a.ved;var b=g.r("yt.logging.screen.storeParentElement");a&&b&&b(g.gg(a))}};
g.Uh=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.Pb(d.location,g.ie(a,b)+c)};
g.Vh=function(a,b){b&&g.Th(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.Uh(a)};
g.Wh=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.B("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Th(a,b);if(c)return!1;g.Vh(a);return!0};
g.Yh=function(a,b){var c={};c.key=a;c.value=b;return Xh().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.Zh=function(a){return Xh().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
Xh=function(){return $h?window.Promise.resolve($h):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))$h=b,a($h);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),Xh()};
c.onupgradeneeded=sba})};
sba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
yba=function(){ai++;var a=g.Zb(),b=new g.hc(0,0,a.width,a.height);Pg("vph",a.height);Pg("vpw",a.width);g.Og("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;bi.start();for(var f=0;f<c;f++){var k=a[f];if(ci(k,b)){var l=tba(k);l.then(uba);d.push(l);di.push(l);k.loadTime||(e=!1)}}e&&Pg("yt_eil",1);g.Og("vpcc");b=g.qd(d).then(vba);g.sd(b,wba);b.then(xba);di.push(b);return b};
xba=function(){bi.stop()};
wba=function(){g.Og("vpr")};
ci=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.mf(c);if(e in ei)return!0;if(e in fi)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return fi[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return fi[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)ei[d[c]]=!0;return!0};
vba=function(a){var b=g.Zb();b=new g.hc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;ci(a[d].eB,b)&&c<f&&(c=f)}return c};
tba=function(a){var b=ai;return new g.kd(function(c,d){var e={eB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){ai!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},gi.push(a))})};
uba=function(a){bi.start();a=a.time;hi<a&&(hi=a,g.Og("lim",a))};
zba=function(){g.Og("vptl",hi);g.Og("vpl",hi)};
Aba=function(){di.forEach(function(a){a.cancel()});
hi=di.length=0;ei={};fi={};gi.forEach(function(a){a.slt=void 0});
gi.length=0};
g.ii=function(a,b){g.ug("/gen_204?"+a,b)};
Cba=function(a){if(null==a)return[];var b=[];Bba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.ji=function(){return g.A(g.x("page-container"),"remote-connected")};
Dba=function(){ki=g.xe(li,5E3);var a=g.mi();a?(a.addEventListener("onReady",li),a.addEventListener("onStateChange",li)):ni("unable to init PP monitor")};
qi=function(a){for(var b in g.yh){var c=g.yh[b];c&&c.cancel()}if(a=a||null){b=g.mi();var d=!0;c=g.oi;g.oi=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(pi="",g.zh("player-api",a)):b.playVideo();a=g.Bf(a);a.loaded=!0}li();g.p("ytplayer.config",a,void 0)};
g.mi=function(){return g.Bh("player-api")};
li=function(){var a=g.mi();if(a){var b=g.x("player");b=!b||g.A(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.B("PAGE_NAME"),e=g.ji();!c||d||e||(ni("PP playing off watch (paused)"),a.pauseVideo());b&&d?ni("PP off-screen on watch"):b||d||ni("PP !off-screen off watch")}};
ni=function(a){var b=g.B("PAGE_NAME");b&&(a+="("+[b,pi,g.r("_spf_state.nav-counter")].join()+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.oe(Error(a),"WARNING"))};
si=function(){g.Og("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.Og("cpt");g.E("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?(g.Og("cpt"),g.E("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){g.Og("cpt");
g.E("on_cpt_tick",(new Date).getTime())},0);
Eba();g.B("CSI_VIEWPORT")&&(ri=yba(),ri.then(function(a){g.Og("vpl",a);ri=null},function(){}))};
Eba=function(){ti("init");var a=g.B("PAGE_NAME",void 0);a&&ti("init-"+a)};
ti=function(a){g.Re()?ui.push(g.Ne(g.u(g.Ge,a),0)):g.E(a)};
vi=function(){g.Pe(ui);ui.length=0;Aba();ri&&(ri.cancel(),ri=null);var a=g.B("PAGE_NAME",void 0);a&&g.Ge("dispose-"+a);g.Ge("dispose")};
Fba=function(){si()};
Gba=function(){g.B("TIMING_REPORT_ON_UNLOAD")&&g.Ng(!0);ch("u");g.Gh("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Ch();g.eg();g.If();vi();g.Ge("pageunload")};
wi=function(){Wf()};
xi=function(a){a=a.detail.url;window.yt_spf_loaded_history=!0;Wf();var b=g.rg();if(b&&a){var c=g.hg(b.visualElement);b={csn:b.clientScreenNonce};"trackingParams"in c?b.itct=c.trackingParams:(b.veType=c.veType,b.veCounter=c.veCounter);g.Th(a,b)}};
Di=function(){yi=1;zi=Ai=0;g.B("TIMING_REPORT_ON_UNLOAD")&&g.Ng(!0);g.se("warm_load_nav_start_web")?(ch("n"),Jg(),kh(!1),g.me("TIMING_AFT_KEYS",[]),Pg("yt_lt","warm"),g.me("TIMING_ACTION",""),g.me("TIMING_WAIT",[]),Cg()):(ch("n"),Jg());Qg("n");Kg("nr");Ci(Hba);Ch();g.Ge("navigate")};
Hi=function(a){a=a.detail.part||a.detail.partial;g.Og("nc"+Ai);++Ai;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.Og("bc");else{var b=1==yi;yi=2;b?(Ci(Iba),Ei()):Ci(Jba);if(b=a&&a.data&&a.data.swfcfg)Fi(a.timing,b.args),Gi(b)}};
Ii=function(){g.Og("np"+zi);++zi};
Ji=function(a){a=a.detail.response;var b=1==yi;yi=3;b&&(Ci(Kba),Ei());if(b=a.data&&a.data.swfcfg)Fi(a.timing,b.args),Gi(b)};
Ni=function(a){g.Og("nd");a=a.detail.response;g.Ki=a.cacheKey;a=a.timing;var b=window._spf_state;g.Li.navigationCount=b&&b["nav-counter"]||0;g.se("warm_load_nav_start_web")?g.Og("srt",a.responseStart):(Qg("ne",a.responseStart),Pg("srt",Math.max(0,a.responseStart-a.navigationStart)));Pg("yt_lt",a.spfCached?"hot":"warm");Pg("yt_pft",+!!a.spfPrefetched);g.Og("pfs",a.fetchStart);g.Og("pfrs",a.responseStart);"redirectStart"in a&&Vg(a);Ci(Mi);window.document.getElementById("content").style.height="";si();
yi=0};
Oi=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.oe(a)};
Pi=function(a){g.ii(g.he({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Mba=function(){Lba();window.yt_spf_loaded_history=!1};
Nba=function(){};
Ei=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");vi();a=g.B("PREVIOUS_ACTION");for(var b in g.le)delete g.le[b];g.me("PREVIOUS_ACTION",a);g.me("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);if((b=g.mi())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())pi=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),pi="recovered"):pi="missing2"}else pi="missing";li()};
Gi=function(a){"cfg"in Lg(void 0)||g.Og("cfg");qi(a)};
Ci=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Oe(Qi);Qi=g.Ne(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.ye(Ri);Ri=g.we(function(){b.className=e},c)},0)};
Lba=function(){var a=Mi[0]+50;g.ye(Ri);Ri=g.we(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
Fi=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Cba(b));g.B("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.ii(g.he(c)))};
Ti=function(){return Si().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})};
Oba=function(){var a=g.Ui&&g.se("enable_firefox_push_notifications");return!(!g.Vi&&!a||g.Wi||g.Xi||g.Yi||!window.navigator.serviceWorker||!window.navigator.serviceWorker.getRegistration||!window.Notification||!window.Promise)};
$i=function(){Zi({type:"notifications_register",data:g.B("ID_TOKEN")})};
Si=function(){return window.navigator.serviceWorker.getRegistration(String(re("service_worker_scope")||""))};
Pba=function(){return Zi({type:"notifications_check_registration",data:g.B("ID_TOKEN")})};
Zi=function(a){return Si().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Qba=function(){if(!g.B("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(re("service_worker_push_force_notification_prompt_tag")||"");return a?g.Zh("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
Uba=function(){return g.B("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)?Qba().then(function(a){if(a)return!0;a=[Rba(),Sba()];g.B("LOGGED_IN",void 0)||a.push(Tba());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
Tba=function(){var a=g.te("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.Zh("WatchCount").then(function(b){return b>=a})};
Wba=function(){var a=arguments;g.se("service_worker_push_prompt_modal_enable")&&Vba();return window.Notification.requestPermission().then(function(a){aj();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return Ti().then(function(){g.Yh("NotificationsDisabled",!1);$i();return window.Promise.resolve(!0)});
"denied"==a&&$i();return window.Promise.resolve(!1)})["catch"](function(){aj();
return window.Promise.reject.apply(window.Promise,[].concat(a instanceof Array?a:baa(g.na(a))))})};
bj=function(){return g.se("service_worker_push_home_only")?"HomePromptCount":"PromptCount"};
Xba=function(){var a=bj();g.Zh(a).then(function(b){return g.Yh(a,b+1)}).then(function(){if(g.se("service_worker_push_home_only"))return g.Yh("HomePromptTime",(0,g.Ud)())}).then(function(){var a=String(re("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.Zh("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(e){return!1}c||(c=[]);c.push(a);return g.Yh("PromptTags",JSON.stringify(c))})})};
Rba=function(){return-1==g.te("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.Zh(bj()).then(function(a){a||(a=0);return window.Promise.resolve(a<g.te("service_worker_push_prompt_cap"))})};
Sba=function(){var a=g.te("service_worker_push_prompt_delay_ms");return a?g.Zh("HomePromptTime").then(function(b){return window.Promise.resolve((0,g.Ud)()-a>(b||0))}):window.Promise.resolve(!0)};
Yba=function(){cj||aj()};
dj=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
Vba=function(){var a=g.x("yt-push-prompt-modal-bg");cj=g.se("service_worker_push_prompt_modal_ignore_click");a?dj(a):(a=g.bc("div",{id:"yt-push-prompt-modal-bg"}),dj(a),window.document.body.appendChild(a),g.wf(window.document,"click",Yba))};
aj=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.ec(a)};
Zba=function(a){return Oba()&&a&&a.pushManager?"default"!=window.Notification.permission?Ti().then(Pba):Uba().then(function(a){if(a)return Xba(),Wba()}):window.Promise.resolve()};
aca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach($ba)})};
cca=function(){var a="/sw.js",b=g.B("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=ej(a);g.se("service_worker_push_enabled")&&a.then(bca).then(Zba)};
bca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
$ba=function(a){a&&ej("/sw.js?0",a.scope)};
ej=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(re("service_worker_scope")||"")||"/"})};
fj=function(){g.Hh.call(this,"www/base");this.D=0};
gj=function(a){(a=a.detail.name)&&Kh(a)};
g.aa=[];ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)hj=Object.setPrototypeOf;else{var ij;a:{var dca={a:!0},jj={};try{jj.__proto__=dca;ij=jj.a;break a}catch(a){}ij=!1}hj=ij?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var da=hj,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ha="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,aaa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
oa("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
oa("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)pa(e,f)&&(a[f]=e[f])}return a}});
var eca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
oa("Reflect.construct",function(){return eca});
oa("Promise",function(a){function b(a){this.C=0;this.D=void 0;this.F=[];var b=this.H();try{a(b.resolve,b.reject)}catch(n){b.reject(n)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.L()})};
var e=ha.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.L=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(q){this.H(q)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.L(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(n){this.G(n);return}"function"==typeof b?this.ma(b,a):this.L(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.L=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.C)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.C);this.C=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.F){for(var a=this.F,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.F=null}};
var f=new c;b.prototype.V=function(a){var b=this.H();a.Rh(b.resolve,b.reject)};
b.prototype.ma=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(q){c.reject(q)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(ia){f(ia)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Rh(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Rh=function(a,b){function c(){switch(d.C){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?f.F(c):this.F.push(function(){f.F(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.na(a),f=e.next();!f.done;f=e.next())d(f.value).Rh(b,c)})};
b.all=function(a){var c=g.na(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Rh(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
oa("WeakMap",function(a){function b(a){this.ob=(f+=Math.random()+1).toString();if(a){fa();la();a=g.na(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){pa(a,e)||ja(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(q){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!pa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.ob]=b;return this};
b.prototype.get=function(a){return pa(a,e)?a[e][this.ob]:void 0};
b.prototype.has=function(a){return pa(a,e)&&pa(a[e],this.ob)};
b.prototype["delete"]=function(a){return pa(a,e)&&pa(a[e],this.ob)?delete a[e][this.ob]:!1};
return b});
oa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return ma(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&pa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,kc:l}}return{id:c,list:d,index:-1,kc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.na(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.na([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(z){return!1}}())return a;
fa();la();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.kc?c.kc.value=b:(c.kc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.kc),this.F.previous.next=c.kc,this.F.previous=c.kc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.kc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.kc.previous.next=a.kc.next,a.kc.next.previous=a.kc.previous,a.kc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).kc};
e.prototype.get=function(a){return(a=d(this,a).kc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
oa("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.na(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.na([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
fa();la();b.prototype.add=function(a){this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
oa("Array.from",function(a){return a?a:function(a,c,d){la();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
g.kj=g.kj||{};g.m=this;Ba="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Ud=Date.now||function(){return+new Date};g.v(g.Da,Error);g.Da.prototype.name="CustomError";g.Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.ra(a))return g.ra(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.fca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.ra(a))return g.ra(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.ih=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.ra(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var n=k[l];
b.call(c,n,l,a)&&(e[f++]=n)}return e};
g.$g=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.ra(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.jh=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.y)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.lj=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.mj=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Sa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.nj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var oj=g.m.navigator;if(oj){var pj=oj.userAgent;if(pj){g.Wa=pj;break a}}g.Wa=""};var gb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.pb[" "]=g.ta;var xj,maa,Bj;g.qj=g.Xa("Opera");g.I=g.ib();g.rj=g.Xa("Edge");g.sj=g.rj||g.I;g.tj=g.Xa("Gecko")&&!(-1!=g.Wa.toLowerCase().indexOf("webkit")&&!g.Xa("Edge"))&&!(g.Xa("Trident")||g.Xa("MSIE"))&&!g.Xa("Edge");g.uj=-1!=g.Wa.toLowerCase().indexOf("webkit")&&!g.Xa("Edge");g.vj=g.Xa("Macintosh");g.wj=g.Xa("Windows");g.gca=g.Xa("Linux")||g.Xa("CrOS");g.hca=g.Xa("Android");g.Xi=nb();g.Yi=g.Xa("iPad");g.ica=g.Xa("iPod");g.jca=g.ob();
a:{var yj="",zj=function(){var a=g.Wa;if(g.tj)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.rj)return/Edge\/([\d\.]+)/.exec(a);if(g.I)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.uj)return/WebKit\/(\S+)/.exec(a);if(g.qj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
zj&&(yj=zj?zj[1]:"");if(g.I){var Aj=rb();if(null!=Aj&&Aj>(0,window.parseFloat)(yj)){xj=String(Aj);break a}}xj=yj}g.sb=xj;maa={};var Cj=g.m.document;Bj=Cj&&g.I?rb()||("CSS1Compat"==Cj.compatMode?(0,window.parseInt)(g.sb,10):5):void 0;g.ub=Bj;var oaa;oaa=!g.I||g.vb(9);g.kca=!g.tj&&!g.I||g.I&&g.vb(9)||g.tj&&g.tb("1.9.1");g.Dj=g.I&&!g.tb("9");g.lca=g.I||g.qj||g.uj;g.xb.prototype.Nd=!0;g.xb.prototype.Sc=function(){return this.C};
g.xb.prototype.toString=function(){return"Const{"+this.C+"}"};
g.wb={};g.yb("");g.mca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.nca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Ej=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");var zb;g.Ab.prototype.Nd=!0;g.Ab.prototype.Sc=function(){return this.C};
g.Ab.prototype.fl=!0;g.Ab.prototype.Ee=g.ba(1);g.Cb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;zb={};g.Db("about:blank");g.Gb.prototype.Nd=!0;g.Fb={};g.Gb.prototype.Sc=function(){return this.C};
g.Fj=g.Hb("");g.Gj=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.oca=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Jb.prototype.Nd=!0;g.Ib={};g.Jb.prototype.Sc=function(){return this.C};
g.pca=g.Kb("");g.Mb.prototype.fl=!0;g.Mb.prototype.Ee=g.ba(0);g.Mb.prototype.Nd=!0;g.Mb.prototype.Sc=function(){return this.C};
g.Lb={};g.Nb("<!DOCTYPE html>",0);g.Hj=g.Nb("",0);g.Ij=g.Nb("<br>",0);g.h=g.Rb.prototype;g.h.clone=function(){return new g.Rb(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Rb&&g.Sb(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.Rb?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.sa(b)&&(this.y+=b));return this};
g.h.scale=function(a,b){var c=g.sa(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.Ub.prototype;g.h.clone=function(){return new g.Ub(this.width,this.height)};
g.h.uv=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.uv()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.sa(b)?b:a;this.width*=a;this.height*=c;return this};var Wb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.Jj=window.document;g.Kj=window;g.Jj.getElementsByTagName("script");g.h=g.hc.prototype;g.h.clone=function(){return new g.hc(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Rb?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.Rb?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.sa(b)&&(this.top+=b));return this};
g.h.scale=function(a,b){var c=g.sa(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.Lj=g.tj?"MozUserSelect":g.uj||g.rj?"WebkitUserSelect":null;g.Mj=g.lc(null);g.qca=Object.prototype.hasOwnProperty;g.Nj=g.mc(window);g.Oj=g.Nj&&window.parent||window;g.Pj=(new Date).getTime();g.h=g.pc.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.qa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Ud)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Sa)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.qa(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Cc=g.ba(2);g.h.Gb=g.ba(3);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Ab=g.ba(7);g.h.be=g.ba(8);g.h.clear=function(){for(var a=g.qc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Qh=new g.pc("undefined"==typeof window.document?null:window.document);g.Qh.F=3950;g.rc.prototype.Hc=!1;g.rc.prototype.qb=function(){return this.Hc};
g.rc.prototype.dispose=function(){this.Hc||(this.Hc=!0,this.Y())};
g.rc.prototype.Y=function(){if(this.Wb)for(;this.Wb.length;)this.Wb.shift()()};g.vc.prototype.stopPropagation=function(){this.F=!0};
g.vc.prototype.preventDefault=function(){this.Ns=!1};var Mc,sca,waa;g.rca=!g.I||g.vb(9);Mc=!g.I||g.vb(9);sca=g.I&&!g.tb("9");waa=function(){if(!g.m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.m.addEventListener("test",g.ta,b);g.m.removeEventListener("test",g.ta,b);return a}();g.Qj=g.uj?"webkitTransitionEnd":g.qj?"otransitionend":"transitionend";g.v(g.xc,g.vc);var tca={2:"touch",3:"pen",4:"mouse"};
g.xc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.tj&&(g.qb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.L=g.vj?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.ra(a.pointerType)?a.pointerType:tca[a.pointerType]||"";this.state=a.state;this.wc=a;a.defaultPrevented&&
this.preventDefault()};
g.xc.prototype.stopPropagation=function(){g.xc.M.stopPropagation.call(this);this.wc.stopPropagation?this.wc.stopPropagation():this.wc.cancelBubble=!0};
g.xc.prototype.preventDefault=function(){g.xc.M.preventDefault.call(this);var a=this.wc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,sca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var yc="closure_listenable_"+(1E6*Math.random()|0),taa=0;g.h=g.Bc.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Dc(a,b,d,e);-1<k?(b=a[k],c||(b.Qh=!1)):(b=new uaa(b,this.src,f,!!d,e),b.Qh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Dc(e,b,c,d);return-1<b?(Ac(e[b]),g.Ja(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Ac(d[e]);delete this.listeners[c];this.C--}return b};
g.h.cg=g.ba(10);g.h.hf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Dc(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.qa(a),d=c?a.toString():"",e=g.qa(b);return g.Za(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Jc="closure_lm_"+(1E6*Math.random()|0),Pc={},Lc=0,Sc="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.Tc,g.rc);g.Tc.prototype[yc]=!0;g.h=g.Tc.prototype;g.h.ti=function(){return this.Ul};
g.h.qh=g.ba(11);g.h.addEventListener=function(a,b,c,d){g.Fc(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Nc(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.ti();if(b){var c=[];for(var d=1;b;b=b.ti())c.push(b),++d}b=this.bv;d=a.type||a;if(g.ra(a))a=new g.vc(a,b);else if(a instanceof g.vc)a.target=a.target||b;else{var e=a;a=new g.vc(d,b);g.hb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=Uc(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=Uc(k,d,!0,a)&&e,a.F||(e=Uc(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=Uc(k,d,!1,a)&&e;return e};
g.h.Y=function(){g.Tc.M.Y.call(this);this.removeAllListeners();this.Ul=null};
g.h.O=function(a,b,c,d){return this.vd.add(String(a),b,!1,c,d)};
g.h.Je=function(a,b,c,d){return this.vd.add(String(a),b,!0,c,d)};
g.h.Wa=function(a,b,c,d){return this.vd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.vd?this.vd.removeAll(a):0};
g.h.cg=g.ba(9);g.h.hf=function(a,b,c,d){return this.vd.hf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.vd.hasListener(g.qa(a)?String(a):void 0,b)};Vc.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var ed;var fd=new Vc(function(){return new Zc},function(a){a.reset()});
Yc.prototype.add=function(a,b){var c=fd.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
Yc.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
Zc.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
Zc.prototype.reset=function(){this.next=this.scope=this.lc=null};var $c,ad=!1,bd=new Yc;ld.prototype.reset=function(){this.context=this.F=this.G=this.C=null;this.D=!1};
var md=new Vc(function(){return new ld},function(a){a.reset()});
g.kd.prototype.then=function(a,b,c){return rd(this,g.za(a)?a:null,g.za(b)?b:null,c)};
g.gd(g.kd);g.kd.prototype.cancel=function(a){0==this.C&&cd(function(){var b=new g.yd(a);td(this,b)},this)};
g.kd.prototype.W=function(a){this.C=0;g.jd(this,2,a)};
g.kd.prototype.N=function(a){this.C=0;g.jd(this,3,a)};
g.kd.prototype.J=function(){for(var a;a=ud(this);)vd(this,a,this.C,this.R);this.L=!1};
var Ad=Xc;g.v(g.yd,g.Da);g.yd.prototype.name="cancel";g.v(g.Dd,g.rc);g.h=g.Dd.prototype;g.h.ob=0;g.h.Y=function(){g.Dd.M.Y.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.ob=g.Bd(this.uc,g.qa(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Cd(this.ob);this.ob=0};
g.h.isActive=function(){return 0!=this.ob};
g.h.Gk=function(){this.ob=0;this.C&&this.C.call(this.F)};g.Ui=g.Xa("Firefox");g.Rj=nb()||g.Xa("iPod");g.Sj=g.Xa("iPad");g.Wi=g.mb();g.Vi=g.kb();g.Tj=g.lb()&&!g.ob();g.Gd="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.Fd.prototype.next=function(){throw g.Gd;};
g.Fd.prototype.cd=function(){return this};var Md={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Eaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.Nd,g.rc);g.h=g.Nd.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.qd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.ta):(c&&g.Ka(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.qa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Faa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.qd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.y)(b,this.qd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Ab=g.ba(6);g.h.Y=function(){g.Nd.M.Y.call(this);this.clear();this.D.length=0};g.Pd.prototype.set=function(a,b){g.qa(b)?this.C.set(a,g.Kd(b)):this.C.remove(a)};
g.Pd.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Pd.prototype.remove=function(a){this.C.remove(a)};g.v(Qd,g.Pd);Qd.prototype.set=function(a,b){Qd.M.set.call(this,a,Sd(b))};
Qd.prototype.F=function(a){a=Qd.M.get.call(this,a);if(!g.qa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Qd.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.qa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.Td,Qd);g.Td.prototype.set=function(a,b,c){if(b=Sd(b)){if(c){if(c<(0,g.Ud)()){g.Td.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Ud)()}g.Td.M.set.call(this,a,b)};
g.Td.prototype.F=function(a,b){var c=g.Td.M.F.call(this,a);if(c)if(!b&&g.Vd(c))g.Td.prototype.remove.call(this,a);else return c};g.v(g.Wd,g.Td);g.v(g.Xd,Gaa);g.Xd.prototype.Ab=g.ba(5);g.Xd.prototype.clear=function(){var a=Caa(this.cd(!0)),b=this;(0,g.y)(a,function(a){b.remove(a)})};g.v(g.Yd,g.Xd);g.h=g.Yd.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.ra(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Ab=g.ba(4);g.h.cd=function(a){var b=0,c=this.C,d=new g.Fd;d.next=function(){if(b>=c.length)throw g.Gd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.ra(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.Zd,g.Yd);g.v($d,g.Yd);var Haa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Uj=!1,Vj="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(Uj=!0,a.description)){Vj=je(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){Uj=!0;Vj="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],Uj=!(!a||!a.enabledPlugin))){Vj=je(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Uj=
!0;Vj=je(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Uj=!0;Vj="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Uj=!0,Vj=je(b.GetVariable("$version"))}catch(c){}})();
g.uca=Uj;g.vca=Vj;g.Pf=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Wj="Microsoft Internet Explorer"==window.navigator.appName;g.le=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.le,void 0);var ve={};var wca=g.r("ytPubsubPubsubInstance")||new g.Nd;g.Nd.prototype.subscribe=g.Nd.prototype.subscribe;g.Nd.prototype.unsubscribeByKey=g.Nd.prototype.qd;g.Nd.prototype.publish=g.Nd.prototype.qa;g.Nd.prototype.clear=g.Nd.prototype.clear;g.p("ytPubsubPubsubInstance",wca,void 0);var Ce=g.r("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",Ce,void 0);var Ee=g.r("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",Ee,void 0);var De=g.r("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",De,void 0);var Jaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Kaa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Je=null;g.ea(Qe,Laa);Qe.prototype.start=function(){var a=g.r("yt.scheduler.instance.start");a&&a()};
Qe.prototype.pause=function(){var a=g.r("yt.scheduler.instance.pause");a&&a()};
g.ua(Qe);Qe.getInstance();(0,g.Ud)();var Te=g.qa(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.qa(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var Ze,cf;Ze={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};cf=!1;g.Xj=df;hf.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.id(a)?a:g.kf(a)):2===this.F&&b?(a=b.call(c,this.C),g.id(a)?a:g.jf(a)):this};
hf.prototype.getValue=function(){return this.C};
g.gd(hf);var xca=0,Qaa=g.uj?"webkit":g.tj?"moz":g.I?"ms":g.qj?"o":"",lf=g.r("ytDomDomGetNextId")||function(){return++xca};
g.p("ytDomDomGetNextId",lf,void 0);var Raa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.of.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.of.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.of.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var sf=g.r("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",sf,void 0);var uf=g.r("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",uf,void 0);g.v(g.yf,g.rc);g.yf.prototype.W=function(a){this.C=new g.Rb(g.qf(a),g.rf(a))};
g.yf.prototype.R=function(){if(this.C){var a=g.Pf();if(0!=this.D){var b=g.Tb(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.uc();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.yf.prototype.Y=function(){g.ze(this.N);g.vf(this.J)};g.ea(zf,g.rc);zf.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.Vf);break}};
zf.prototype.Y=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.Vf)}g.rc.prototype.Y.call(this)};var Saa={enablejsapi:1},Taa={},Uaa={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};Af.prototype.clone=function(){var a=new Af,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.wa(c)?a[b]=g.fb(c):a[b]=c}return a};var Df={},Cf=0;var Vaa,Sf;Vaa={log_event:"events",log_interaction:"interactions"};Sf=Object.create(null);Sf.log_event="GENERIC_EVENT_LOGGING";Sf.log_interaction="INTERACTION_LOGGING";g.Nf={};g.Ff={};g.Lf=0;g.Mf=g.r("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.Mf,void 0);var Gf=g.r("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",Gf,void 0);var Of=g.r("ytLoggingTransportDispatchedStats_")||{};
g.p("ytLoggingTransportDispatchedStats_",Of,void 0);var Tf=g.r("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",Tf,void 0);var Zf={};var lg=g.r("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",lg,void 0);var mg=0;var Yj,Zj;Yj=new g.Zd;g.og=Yj.isAvailable()?new g.Wd(Yj):null;Zj=new $d;g.ng=Zj.isAvailable()?new g.Wd(Zj):null;var Zaa=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var vg={},aba=0;g.xg.prototype.toString=function(){return this.topic};var yca=g.r("ytPubsub2Pubsub2Instance")||new g.Nd;g.Nd.prototype.subscribe=g.Nd.prototype.subscribe;g.Nd.prototype.unsubscribeByKey=g.Nd.prototype.qd;g.Nd.prototype.publish=g.Nd.prototype.qa;g.Nd.prototype.clear=g.Nd.prototype.clear;g.p("ytPubsub2Pubsub2Instance",yca,void 0);g.ak=g.r("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.ak,void 0);g.bk=g.r("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.bk,void 0);
g.ck=g.r("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.ck,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var Ag=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.ea(Dg,g.wg);g.ea(Eg,g.wg);var dba=new g.xg("aft-recorded",Dg),hba=new g.xg("timing-sent",Eg);var Fg=(0,g.Ud)().toString();var fba={vc:!0},gh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},fh={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",
yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},kba="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
nba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",
search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",
"video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR"},jba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),Yg=!1,cba=(0,g.t)(Ag.clearResourceTimings||Ag.webkitClearResourceTimings||Ag.mozClearResourceTimings||Ag.msClearResourceTimings||Ag.oClearResourceTimings||g.ta,Ag);g.ea(nh,g.rc);g.h=nh.prototype;g.h.getId=function(){return this.N};
g.h.Hl=function(a){this.qb()||(this.ib=a=g.Bf(a),this.C=a.clone(),this.F=this.C.attrs.id||this.F,"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N),this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F),this.C.args.enablejsapi="1",this.C.args.playerapiid=this.N,this.ia||(this.ia=wh(this,this.C.args.jsapicallback||"onYouTubePlayerReady")),this.C.args.jsapicallback=null,(a=this.C.attrs.width)&&g.kc(this.H,Number(a)||a),(a=this.C.attrs.height)&&g.jc(this.H,Number(a)||a),oba(this),
this.L&&oh(this))};
g.h.Hw=function(){return this.ib};
g.h.YB=function(){return this.L};
g.h.Ih=function(a,b){var c=this,d=wh(this,b);if(d){if(!g.Ha(this.sb,a)&&!this.D[a]){var e=qba(this,a);this.W&&this.W(a,e)}this.R.subscribe(a,d);"onReady"==a&&this.L&&g.we(function(){d(c.api)},0)}};
g.h.xK=function(a,b){if(!this.qb()){var c=wh(this,b);c&&g.Od(this.R,a,c)}};
g.h.av=function(a){g.E("a11y-announce",a)};
g.h.fG=function(a){g.E("WATCH_LATER_VIDEO_ADDED",a)};
g.h.gG=function(a){g.E("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.yx=function(){return this.ma||(ph(this)?"html5":null)};
g.h.fx=function(){return this.eb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.He(this.C.assets.js);window.spf.script.ignore(b,a)}g.ye(this.nb);this.V=!1};
g.h.Y=function(){sh(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.oe(Error("Error destroying player: "+b))}this.Sa=null;for(var a in this.D)g.m[this.D[a]]=null;this.ib=this.C=this.api=null;delete this.oa;delete this.H;g.rc.prototype.Y.call(this)};g.yh={};g.xh="player_uid_"+(1E9*Math.random()>>>0);var Fh;g.Eh=Gg();Fh=0;g.Dh=null;g.h=g.Hh.prototype;g.h.JK=function(){this.Ti()||this.init()};
g.h.enable=function(){this.C=1;(0,g.y)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.JK,this),this.subscribe("dispose-"+a,this.dispose,this),g.B("PAGE_NAME")==a&&g.Ih(this))},this)};
g.h.init=function(){g.Oe(this.F);this.C=2;this.L&&this.L()};
g.h.Ti=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Oe(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.oe(a)}};
g.h.subscribe=function(a,b,c){a=g.D(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.Fe(this.G);this.G=[]};var Jh=g.r("yt.modules.registry_")||{};g.p("yt.modules.registry_",Jh,void 0);g.Mh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.Mh,void 0);g.p("yt.abuse.botguardInitialized",g.r("yt.abuse.botguardInitialized")||Ke,void 0);g.p("yt.abuse.invokeBotguard",g.r("yt.abuse.invokeBotguard")||g.Le,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",g.r("yt.abuse.dclkstatus.checkDclkStatus")||Se,void 0);g.p("yt.player.exports.navigate",g.r("yt.player.exports.navigate")||g.Wh,void 0);g.p("yt.util.activity.init",g.r("yt.util.activity.init")||g.Yf,void 0);g.p("yt.util.activity.getTimeSinceActive",g.r("yt.util.activity.getTimeSinceActive")||g.$f,void 0);
g.p("yt.util.activity.setTimestamp",g.r("yt.util.activity.setTimestamp")||Wf,void 0);var $h=null;g.dk=window.performance&&window.performance.memory;g.Li={};var hi=0,di=[],gi=[],ai=0,ei={},fi={},bi=new g.Dd(zba,1E3);var Bba=["server_prefetched_vast","vmap"];var ki,pi;g.oi=null;pi="";var ri=null,ui=[];var yi,Ri,Qi,Ai,zi,Hba,Kba,Iba,Jba,Mi;Ai=0;zi=0;Hba=[900,60,"waiting"];Kba=[500,99,"waiting"];Iba=[300,60,"waiting"];Jba=[400,99,"waiting"];Mi=[300,101,"done"];var cj=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.me,void 0);g.p("yt.pushConfigArray",ne,void 0);g.p("yt.getConfig",g.B,void 0);g.p("yt.config.set",g.me,void 0);g.p("yt.config.pushArray",ne,void 0);g.p("yt.config.get",g.B,void 0);g.p("yt.hasMsg",g.Oh,void 0);g.p("yt.setMsg",Nh,void 0);g.p("yt.setGoogMsg",Ph,void 0);g.p("yt.msgs.has",g.Oh,void 0);g.p("yt.msgs.set",Nh,void 0);g.p("yt.msgs.setGoog",Ph,void 0);g.p("yt.pubsub.publish",g.E,void 0);g.p("yt.pubsub.subscribe",g.D,void 0);
g.p("ytcsi.tick",g.Og,void 0);g.v(fj,g.Hh);
fj.prototype.enable=function(){window.onload=Fba;window.onunload=Gba;window.onerror=Iaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",wi),window.addEventListener("spfhistory",xi),window.addEventListener("spfrequest",Di),window.addEventListener("spfpartprocess",Hi),window.addEventListener("spfpartdone",Ii),window.addEventListener("spfprocess",Ji),window.addEventListener("spfdone",Ni),window.addEventListener("spferror",Oi),window.addEventListener("spfreload",
Pi),window.addEventListener("spfjsbeforeunload",gj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Mba),this.subscribe("dispose",Nba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
fj.prototype.init=function(){fj.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.B("PAGEFRAME_JS")){var b=g.B("PAGEFRAME_JS",void 0);var c=function(){var a=g.r("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.r("yt.www.masthead.loadSearchbox"))&&a();
a=g.B("JS_COMMON_MODULE");var d=g.B("JS_PAGE_MODULES");d||(d=[a]);a=g.B("JS_DELAY_LOAD",0);0<a?(g.ye(this.D),this.D=g.we(function(){b&&g.Ie(b,c);window.spf.script.require(d)},a)):(b&&g.Ie(b,c),window.spf.script.require(d));
g.p("yt.abuse.botguardInitialized",Ke,void 0);g.p("yt.abuse.invokeBotguard",g.Le,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",Se,void 0);g.p("yt.player.exports.navigate",g.Wh,void 0);g.p("yt.util.activity.init",g.Yf,void 0);g.p("yt.util.activity.getTimeSinceActive",g.$f,void 0);g.p("yt.util.activity.setTimestamp",Wf,void 0);qi(g.r("ytplayer.config"));g.r("ytspf.enabled")&&Dba();bh();iba();kh(!0);g.Ng(!1);g.B("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.se("service_worker_enabled")?cca():aca())};
fj.prototype.dispose=function(){g.ye(this.D);var a=g.r("ytbin.www.pageframe.cancelSetup");a&&a();g.ze(ki);if(a=g.mi())a.removeEventListener("onReady",li),a.removeEventListener("onStateChange",li);kh(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.C(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.xf(a);fj.M.dispose.call(this)};
fj.prototype.disable=function(){fj.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",wi),window.removeEventListener("spfhistory",xi),window.removeEventListener("spfrequest",Di),window.removeEventListener("spfpartprocess",Hi),window.removeEventListener("spfpartdone",Ii),window.removeEventListener("spfprocess",Ji),window.removeEventListener("spfdone",Ni),window.removeEventListener("spferror",Oi),window.removeEventListener("spfreload",Pi),window.removeEventListener("spfjsbeforeunload",
gj));window.onload=null;window.onunload=null;window.onerror=null};
g.Lh(new fj);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:10:08 Dec 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:26:35 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 157.665
  exclusion.robots: 0.122
  exclusion.robots.policy: 0.11
  cdx.remote: 0.07
  esindex: 0.01
  LoadShardBlock: 73.694 (3)
  PetaboxLoader3.datanode: 74.462 (5)
  load_resource: 98.433 (2)
  PetaboxLoader3.resolve: 83.853 (2)
*/