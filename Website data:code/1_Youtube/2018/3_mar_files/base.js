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

var _yt_www={};(function(g){var window=this;var ea,ja,ia,ka,baa,pa,qa,daa,eaa,Va,qb,naa,ub,paa,uc,qaa,raa,vc,yc,taa,Ic,Kc,Lc,Pc,uaa,Sc,Zc,Yc,waa,bd,cd,dd,ed,xaa,fd,gd,kd,yaa,ld,sd,Ad,yd,vd,Aaa,Dd,Bd,Cd,Gd,zaa,Baa,Pd,Qd,Ud,Caa,Daa,Eaa,$d,be,Gaa,ge,he,ie,Haa,le,pe,qe,re,se,te,Ee,He,Je,Kaa,Le,Ue,Naa,kf,ef,Oaa,Paa,Qaa,vf,wf,Raa,Bf,zf,xf,Df,Kf,Tf,Uf,Zaa,$f,qg,$aa,wg,xg,aba,Dg,Eg,Lg,Kg,bba,Pg,Wg,$g,ch,eh,cba,fba,rh,sh,th,uh,gba,Gh,Hh,Kh,Jh,Lh,Mh,Nh,jba,Qh,Uh,Ah,Bh,wh,Yh,pba,qba,Th,Ch,Vh,yh,xh,zh,ai,Eh,Oh,Fh,lba,Rh,ci,di,fi,sba,ei,gi,tba,ji,bi,ki,
uba,hi,ii,vba,qi,wba,Cba,Bba,Aba,wi,zba,xba,yba,Dba,Eba,Gba,Hba,Li,Gi,Ii,Ni,Iba,Oi,Qi,Jba,Kba,Ri,Si,Xi,aj,bj,cj,gj,hj,ij,Qba,Rba,Yi,$i,Wi,Pba,Zi,mj,oj,lj,pj,nj,Sba,Wba,Tba,Zba,Vba,Uba,Xba,Yba,aca,sj,$ba,qj,bca,dca,fca,eca,cca,tj,uj,vj,ha,fa,aaa,ma,wj,Ca,caa;g.da=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ea=function(){ea=function(){};
fa.Symbol||(fa.Symbol=aaa)};
ja=function(){ea();var a=fa.Symbol.iterator;a||(a=fa.Symbol.iterator=fa.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(this)}});
ja=function(){}};
ia=function(a){var b=0;return ka(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
ka=function(a){ja();a={next:a};a[fa.Symbol.iterator]=function(){return this};
return a};
g.la=function(a){ja();var b=a[window.Symbol.iterator];return b?b.call(a):ia(a)};
g.oa=function(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
baa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
pa=function(a,b){if(b){for(var c=fa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ha(c,d,{configurable:!0,writable:!0,value:f})}};
qa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ra=function(a){return void 0!==a};
g.sa=function(a){return"string"==typeof a};
g.ta=function(a){return"number"==typeof a};
g.p=function(a,b,c){a=a.split(".");c=c||g.n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ra(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.r=function(a,b){for(var c=a.split("."),d=b||g.n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.ua=function(){};
g.va=function(a){a.Bc=void 0;a.getInstance=function(){return a.Bc?a.Bc:a.Bc=new a}};
g.wa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.ya=function(a){return"array"==g.wa(a)};
g.za=function(a){var b=g.wa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Aa=function(a){return"function"==g.wa(a)};
g.Ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Da=function(a){return a[Ca]||(a[Ca]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.t=daa:g.t=eaa;return g.t.apply(null,arguments)};
g.v=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.w=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Tv=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
g.Ea=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ea);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ga=function(a,b,c){b=g.Fa(a,b,c);return 0>b?null:g.sa(a)?a.charAt(b):a[b]};
g.Fa=function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ia=function(a,b){return 0<=(0,g.Ha)(a,b)};
g.Ja=function(a){return 0==a.length};
g.La=function(a,b){var c=(0,g.Ha)(a,b),d;(d=0<=c)&&g.Ka(a,c);return d};
g.Ka=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Ma=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Na=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.za(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Oa=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Pa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Qa=function(a){return/^[\s\xa0]*$/.test(a)};
g.Ra=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Sa=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ta=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Wa=function(a,b){for(var c=0,d=(0,g.Ua)(String(a)).split("."),e=(0,g.Ua)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Va(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||Va(0==l[2].length,0==m[2].length)||Va(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Va=function(a,b){return a<b?-1:a>b?1:0};
g.Xa=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.Za=function(a){return-1!=g.Ya.indexOf(a)};
g.bb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.cb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.db=function(a,b){return null!==a&&b in a};
g.eb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.fb=function(a){for(var b in a)return!1;return!0};
g.gb=function(a,b){b in a&&delete a[b]};
g.hb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.ib=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};
g.jb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.lb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kb.length;f++)c=kb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.mb=function(){return g.Za("Trident")||g.Za("MSIE")};
g.ob=function(){return g.Za("Safari")&&!(g.nb()||g.Za("Coast")||g.Za("Opera")||g.Za("Edge")||g.Za("Silk")||g.Za("Android"))};
g.nb=function(){return(g.Za("Chrome")||g.Za("CriOS"))&&!g.Za("Edge")};
g.pb=function(){return g.Za("Android")&&!(g.nb()||g.Za("Firefox")||g.Za("Opera")||g.Za("Silk"))};
qb=function(){return g.Za("iPhone")&&!g.Za("iPod")&&!g.Za("iPad")};
g.rb=function(){return qb()||g.Za("iPad")||g.Za("iPod")};
g.sb=function(a){g.sb[" "](a);return a};
g.tb=function(a,b){try{return g.sb(a[b]),!0}catch(c){}return!1};
naa=function(a,b){var c=maa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
ub=function(){var a=g.n.document;return a?a.documentMode:void 0};
g.wb=function(a){return naa(a,function(){return 0<=g.Wa(g.vb,a)})};
g.yb=function(a){return Number(g.xb)>=a};
g.Ab=function(){this.C="";this.F=g.zb};
g.Bb=function(a){var b=new g.Ab;b.C=a;return b};
g.Db=function(){this.C="";this.F=Cb};
g.Eb=function(a){if(a instanceof g.Db&&a.constructor===g.Db&&a.F===Cb)return a.C;g.wa(a);return"type_error:SafeUrl"};
g.Hb=function(a){if(a instanceof g.Db)return a;a=a.Td?a.Uc():String(a);Fb.test(a)||(a="about:invalid#zClosurez");return g.Gb(a)};
g.Ib=function(a){if(a instanceof g.Db)return a;a=a.Td?a.Uc():String(a);Fb.test(a)||(a="about:invalid#zClosurez");return g.Gb(a)};
g.Gb=function(a){var b=new g.Db;b.C=a;return b};
g.Kb=function(){this.C="";this.F=g.Jb};
g.Lb=function(a){var b=new g.Kb;b.C=a;return b};
g.Nb=function(){this.C="";this.F=g.Mb};
g.Ob=function(a){var b=new g.Nb;b.C=a;return b};
g.Qb=function(){this.C="";this.D=Pb;this.F=null};
g.Rb=function(a){if(a instanceof g.Qb&&a.constructor===g.Qb&&a.D===Pb)return a.C;g.wa(a);return"type_error:SafeHtml"};
g.Tb=function(a){if(a instanceof g.Qb)return a;var b=null;a.Fl&&(b=a.og());a=g.Ta(a.Td?a.Uc():String(a));return g.Sb(a,b)};
g.Sb=function(a,b){var c=new g.Qb;c.C=a;c.F=b;return c};
g.Ub=function(a,b){var c=b instanceof g.Db?b:g.Ib(b);a.href=g.Eb(c)};
g.Vb=function(a,b){var c=b instanceof g.Db?b:g.Ib(b);a.href=g.Eb(c)};
g.Wb=function(a,b){return g.Sb(b,null)};
g.Xb=function(a,b){this.x=g.ra(a)?a:0;this.y=g.ra(b)?b:0};
g.Yb=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Zb=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.$b=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.sa(a)?window.document.getElementById(a):a};
g.ac=function(a){var b=window.document;return g.sa(a)?b.getElementById(a):a};
g.cc=function(a,b){g.bb(b,function(b,d){b&&b.Td&&(b=b.Uc());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:bc.hasOwnProperty(d)?a.setAttribute(bc[d],b):g.Oa(d,"aria-")||g.Oa(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.ec=function(a){return g.dc(a||window)};
g.dc=function(a){a=a.document;a=g.fc(a)?a.documentElement:a.body;return new g.$b(a.clientWidth,a.clientHeight)};
g.hc=function(a,b,c){return g.gc(window.document,arguments)};
g.gc=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ta(d.name),'"');if(d.type){c.push(' type="',g.Ta(d.type),'"');var e={};g.lb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.sa(d)?c.className=d:g.ya(d)?c.className=d.join(" "):g.cc(c,d));2<b.length&&g.ic(a,c,b,2);return c};
g.ic=function(a,b,c,d){function e(c){c&&b.appendChild(g.sa(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.za(f)||g.Ba(f)&&0<f.nodeType?e(f):(0,g.y)(paa(f)?g.Ma(f):f,e)}};
g.fc=function(a){return"CSS1Compat"==a.compatMode};
g.jc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.kc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.lc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Ba(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Aa(a))return"function"==typeof a.item}return!1};
g.mc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.nc=function(a){return function(){return a}};
g.oc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.pc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.qc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.rc=function(a,b){a.style.height=g.qc(b,!0)};
g.sc=function(a,b){a.style.width=g.qc(b,!0)};
g.tc=function(a){return!!a.google_async_iframe_id};
uc=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
qaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=q=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var q=l^d&(f^l);var u=1518500249}else q=d^f^l,u=1859775393;else 60>c?(q=d&f|l&(d|f),u=2400959708):(q=d^f^l,u=3395469782);q=((a<<5|a>>>27)&4294967295)+q+m+u+b[c]&4294967295;m=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=q}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==q)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[q++]=a[d++],u++,64==q)for(q=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>q?c(l,56-q):c(l,64-(q-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,u;a();return{reset:a,update:c,digest:d,uw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
raa=function(a,b,c){var d=[],e=[];if(1==(g.ya(c)?2:1))return e=[b,a],(0,g.y)(d,function(a){e.push(a)}),vc(e.join(" "));
var f=[],k=[];(0,g.y)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ja(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.y)(d,function(a){e.push(a)});
a=vc(e.join(" "));a=[c,a];g.Ja(k)||a.push(k.join(""));return a.join("_")};
vc=function(a){var b=qaa();b.update(a);return b.uw().toLowerCase()};
g.wc=function(a){this.C=a||{cookie:""}};
g.xc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Ua)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
yc=function(a){var b=uc(String(g.n.location.href)),c=g.n.__OVERRIDE_SID;null==c&&(c=(new g.wc(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.n.__SAPISID:g.n.__APISID,null==b&&(b=(new g.wc(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.n.location.href);return d&&b&&c?[c,raa(uc(d),b,a||null)].join(" "):null}return null};
g.zc=function(){this.Hc=this.Hc;this.Wb=this.Wb};
g.Cc=function(a,b){g.Ac(a,g.v(g.Bc,b))};
g.Ac=function(a,b){a.Hc?g.ra(void 0)?b.call(void 0):b():(a.Wb||(a.Wb=[]),a.Wb.push(g.ra(void 0)?(0,g.t)(b,void 0):b))};
g.Bc=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Dc=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.gt=!0};
g.Ec=function(a){var b=g.r("window.location.href");if(g.sa(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.n.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.Fc=function(a,b){g.Dc.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.zc=null;a&&this.init(a,b)};
g.Hc=function(a){return!(!a||!a[Gc])};
taa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.nh=e;this.key=++saa;this.Eg=this.gi=!1};
Ic=function(a){a.Eg=!0;a.listener=null;a.C=null;a.src=null;a.nh=null};
g.Jc=function(a){this.src=a;this.listeners={};this.C=0};
Kc=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.La(a.listeners[c],b);d&&(Ic(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Lc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Eg&&f.listener==b&&f.capture==!!c&&f.nh==d)return e}return-1};
g.Nc=function(a,b,c,d,e){if(d&&d.once)return g.Mc(a,b,c,d,e);if(g.ya(b)){for(var f=0;f<b.length;f++)g.Nc(a,b[f],c,d,e);return null}c=g.Oc(c);return g.Hc(a)?a.O(b,c,g.Ba(d)?!!d.capture:!!d,e):Pc(a,b,c,!1,d,e)};
Pc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ba(e)?!!e.capture:!!e,l=g.Qc(a);l||(a[Rc]=l=new g.Jc(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=uaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)vaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Sc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Tc++;return c};
uaa=function(){var a=waa,b=Uc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Mc=function(a,b,c,d,e){if(g.ya(b)){for(var f=0;f<b.length;f++)g.Mc(a,b[f],c,d,e);return null}c=g.Oc(c);return g.Hc(a)?a.Re(b,c,g.Ba(d)?!!d.capture:!!d,e):Pc(a,b,c,!0,d,e)};
g.Vc=function(a,b,c,d,e){if(g.ya(b))for(var f=0;f<b.length;f++)g.Vc(a,b[f],c,d,e);else d=g.Ba(d)?!!d.capture:!!d,c=g.Oc(c),g.Hc(a)?a.Wa(b,c,d,e):a&&(a=g.Qc(a))&&(b=a.uf(b,c,d,e))&&g.Wc(b)};
g.Wc=function(a){if(g.ta(a)||!a||a.Eg)return!1;var b=a.src;if(g.Hc(b))return Kc(b.zd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Sc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Tc--;(c=g.Qc(b))?(Kc(c,a),0==c.C&&(c.src=null,b[Rc]=null)):Ic(a);return!0};
Sc=function(a){return a in Xc?Xc[a]:Xc[a]="on"+a};
Zc=function(a,b,c,d){var e=!0;if(a=g.Qc(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Eg&&(f=Yc(f,d),e=e&&!1!==f)}return e};
Yc=function(a,b){var c=a.listener,d=a.nh||a.src;a.gi&&g.Wc(a);return c.call(d,b)};
waa=function(a,b){if(a.Eg)return!0;if(!Uc){var c=b||g.r("window.event"),d=new g.Fc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Zc(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Zc(c[k],f,!1,d),e=e&&l}return e}return Yc(a,new g.Fc(b,
this))};
g.Qc=function(a){a=a[Rc];return a instanceof g.Jc?a:null};
g.Oc=function(a){if(g.Aa(a))return a;a[$c]||(a[$c]=function(b){return a.handleEvent(b)});
return a[$c]};
g.ad=function(){g.zc.call(this);this.zd=new g.Jc(this);this.Bv=this;this.qm=null};
bd=function(a,b,c,d){b=a.zd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Eg&&k.capture==c){var l=k.listener,m=k.nh||k.src;k.gi&&Kc(a.zd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.gt};
cd=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
dd=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
ed=function(a){g.n.setTimeout(function(){throw a;},0)};
xaa=function(){var a=g.n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Za("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.mb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ra(c.next)){c=c.next;var a=c.Un;c.Un=null;a()}};
return function(a){d.next={Un:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.n.setTimeout(a,0)}};
fd=function(){this.F=this.C=null};
gd=function(){this.next=this.scope=this.mc=null};
kd=function(a,b){hd||yaa();id||(hd(),id=!0);jd.add(a,b)};
yaa=function(){if(-1!=String(g.n.Promise).indexOf("[native code]")){var a=g.n.Promise.resolve(void 0);hd=function(){a.then(ld)}}else hd=function(){var a=ld;
!g.Aa(g.n.setImmediate)||g.n.Window&&g.n.Window.prototype&&!g.Za("Edge")&&g.n.Window.prototype.setImmediate==g.n.setImmediate?(md||(md=xaa()),md(a)):g.n.setImmediate(a)}};
ld=function(){for(var a;a=jd.remove();){try{a.mc.call(a.scope)}catch(b){ed(b)}dd(nd,a)}id=!1};
g.od=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.pd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.rd=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.ua)try{var c=this;a.call(b,function(a){g.qd(c,2,a)},function(a){g.qd(c,3,a)})}catch(d){g.qd(this,3,d)}};
sd=function(){this.next=this.context=this.F=this.G=this.C=null;this.D=!1};
g.ud=function(a,b,c){var d=td.get();d.G=a;d.F=b;d.context=c;return d};
g.wd=function(a,b,c){vd(a,b,c,null)||kd(g.v(b,a))};
g.xd=function(a){return new g.rd(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],g.wd(m,g.v(f,l),k);
else b(e)})};
g.zd=function(a,b){return yd(a,null,b,void 0)};
Ad=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Ad(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Bd(c),Cd(c,e,3,b)))}a.D=null}else g.qd(a,3,b)};
g.Ed=function(a,b){a.F||2!=a.C&&3!=a.C||Dd(a);a.G?a.G.next=b:a.F=b;a.G=b};
yd=function(a,b,c,d){var e=g.ud(null,null,null);e.C=new g.rd(function(a,k){e.G=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){k(q)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.ra(e)&&b instanceof g.Fd?k(b):a(e)}catch(q){k(q)}}:k});
e.C.D=a;g.Ed(a,e);return e.C};
g.qd=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,vd(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,Dd(a),3!=b||c instanceof g.Fd||zaa(a,c)))};
vd=function(a,b,c,d){if(a instanceof g.rd)return g.Ed(a,g.ud(b||g.ua,c||null,d)),!0;if(g.pd(a))return a.then(b,c,d),!0;if(g.Ba(a))try{var e=a.then;if(g.Aa(e))return Aaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Aaa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Dd=function(a){a.L||(a.L=!0,kd(a.J,a))};
Bd=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Cd=function(a,b,c,d){if(3==c&&b.F&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Gd(b,c,d);else try{b.D?b.G.call(b.context):Gd(b,c,d)}catch(e){Hd.call(null,e)}dd(td,b)};
Gd=function(a,b,c){2==b?a.G.call(a.context,c):a.F&&a.F.call(a.context,c)};
zaa=function(a,b){a.H=!0;kd(function(){a.H&&Hd.call(null,b)})};
g.Fd=function(a){g.Ea.call(this,a)};
g.Id=function(a,b,c){if(g.Aa(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.n.setTimeout(a,b||0)};
g.Jd=function(a){g.n.clearTimeout(a)};
g.Kd=function(a,b,c){g.zc.call(this);this.C=a;this.D=b||0;this.F=c;this.yc=(0,g.t)(this.fp,this)};
g.Od=function(){if(!Ld){Ld={};g.Md={};Nd={};for(var a=0;65>a;a++)Ld[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),g.Md[Ld[a]]=a,Nd[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(g.Md["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
Baa=function(){this.F=-1};
Pd=function(){this.F=64;this.C=[];this.L=[];this.R=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
Qd=function(a,b,c){c||(c=0);var d=a.R;if(g.sa(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):(f=c^k^l,
q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.Rd=function(a){if(a.classList)return a.classList;a=a.className;return g.sa(a)&&a.match(/\S+/g)||[]};
g.A=function(a,b){return a.classList?a.classList.contains(b):g.Ia(g.Rd(a),b)};
g.Sd=function(){};
Ud=function(a){if(a instanceof g.Sd)return a;if("function"==typeof a.fd)return a.fd(!1);if(g.za(a)){var b=0,c=new g.Sd;c.next=function(){for(;;){if(b>=a.length)throw g.Td;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Vd=function(a,b,c){if(g.za(a))try{(0,g.y)(a,b,c)}catch(d){if(d!==g.Td)throw d;}else{a=Ud(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Td)throw d;}}};
Caa=function(a){if(g.za(a))return g.Ma(a);a=Ud(a);var b=[];g.Vd(a,function(a){b.push(a)});
return b};
g.Xd=function(a,b){this.F={};this.C=[];this.Ze=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.Wd(this,a)};
Daa=function(a,b){return a===b};
g.Zd=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.Yd(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.Yd(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.Wd=function(a,b){if(b instanceof g.Xd)for(var c=b.Jc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.Yd=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ae=function(a){var b=[];$d(new Eaa,a,b);return b.join("")};
Eaa=function(){};
$d=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),$d(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),be(d,c),c.push(":"),$d(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":be(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
be=function(a,b){b.push('"',a.replace(Faa,function(a){var b=ce[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),ce[a]=b);return b}),'"')};
g.de=function(a){g.zc.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.ee=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ga(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.ud(b)}};
Gaa=function(a,b,c){kd(function(){a.apply(b,c)})};
g.fe=function(a){this.C=a};
ge=function(a){this.C=a};
he=function(a){this.data=a};
ie=function(a){return!g.ra(a)||a instanceof he?a:new he(a)};
g.je=function(a){this.C=a};
g.ke=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.B)()||!!b&&b>(0,g.B)()};
Haa=function(){};
le=function(){};
g.me=function(a){this.C=a};
g.ne=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
pe=function(a,b){this.F=a;this.C=null;if(g.C&&!g.yb(9)){oe||(oe=new g.Xd);this.C=oe.get(a);this.C||(b?this.C=window.document.getElementById(b):(this.C=window.document.createElement("userdata"),this.C.addBehavior("#default#userData"),window.document.body.appendChild(this.C)),oe.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
qe=function(a){return"_"+(0,window.encodeURIComponent)(a).replace(/[.!~*'()%]/g,function(a){return Iaa[a]})};
re=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
se=function(a){return a.C.XMLDocument.documentElement};
te=function(a,b){this.F=a;this.C=b+"::"};
g.ue=function(a){var b=new g.ne;return b.isAvailable()?a?new te(b,a):b:null};
g.ve=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.we=function(a){return a.match(Jaa)};
g.xe=function(a){return a?(0,window.decodeURI)(a):a};
g.ye=function(a){return g.xe(g.we(a)[3]||null)};
g.ze=function(a){a=g.we(a);return g.ve(null,null,null,null,a[5],a[6],a[7])};
g.Ae=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.Be=function(a,b,c){if(g.ya(b))for(var d=0;d<b.length;d++)g.Be(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ra(b)))};
g.Ce=function(a){var b=[],c;for(c in a)g.Be(c,a[c],b);return b.join("&")};
g.De=function(a,b){var c=g.Ce(b);return g.Ae(a,c)};
Ee=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.Ge=function(a){Ee(g.Fe,arguments)};
He=function(a,b){var c=g.D(a,void 0);c?c.push(b):g.Ge(a,[b])};
g.D=function(a,b){return a in g.Fe?g.Fe[a]:b};
Je=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Ie(b)}}:a};
g.Ie=function(a,b,c,d,e){var f=g.r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.D("ERRORS",[]),f.push([a,b,c,d,e]),g.Ge("ERRORS",f))};
g.Ke=function(a){g.Ie(a,"WARNING",void 0,void 0,void 0)};
Kaa=function(a,b,c,d,e){var f=!1,k;if((k=(k=g.Fe.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.sa(a)?f=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.Ie(e))};
g.Me=function(a){return!!Le(a)};
g.Ne=function(a){return Number(Le(a)||0)};
Le=function(a){return g.D("EXPERIMENT_FLAGS",{})[a]};
g.E=function(a,b){return a?a.dataset?a.dataset[g.Oe(b)]:a.getAttribute("data-"+b):null};
g.Oe=function(a){return Pe[a]||(Pe[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Qe=function(a,b){g.Aa(a)&&(a=Je(a));return window.setTimeout(a,b)};
g.Re=function(a,b){g.Aa(a)&&(a=Je(a));return window.setInterval(a,b)};
g.Se=function(a){window.clearTimeout(a)};
g.Te=function(a){window.clearInterval(a)};
g.F=function(a,b,c){var d=Ue();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Ve[e]&&b.apply(c||window,d)};
try{We[a]?k():g.Qe(k,0)}catch(l){g.Ie(l)}},c);
Ve[e]=!0;Xe[a]||(Xe[a]=[]);Xe[a].push(e);return e}return 0};
g.Ye=function(a){var b=Ue();b&&(g.ta(a)?a=[a]:g.sa(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.y)(a,function(a){b.unsubscribeByKey(a);delete Ve[a]}))};
g.H=function(a,b){var c=Ue();return c?c.publish.apply(c,arguments):!1};
g.Ze=function(a,b){We[a]=!0;var c=Ue();c=c?c.publish.apply(c,arguments):!1;We[a]=!1;return c};
Ue=function(){return g.r("ytPubsubPubsubInstance")};
g.af=function(a,b){var c=g.$e(a);window.spf.script.load(a,c,b)};
g.$e=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Laa,""),b=b.replace(Maa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.cf=function(){return null!=g.bf};
g.df=function(){return g.bf?g.bf.invoke():null};
Naa=function(){};
g.ff=function(a,b){return ef(a,0,b)};
g.gf=function(a,b){return ef(a,1,b)};
g.jf=function(a){for(var b=0,c=a.length;b<c;b++)g.hf(a[b])};
kf=function(){};
g.lf=function(){return!!g.r("yt.scheduler.instance")};
ef=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Qe(a,c||0)};
g.hf=function(a){if(!(0,window.isNaN)(a)){var b=g.r("yt.scheduler.instance.cancelJob");b?b(a):g.Se(a)}};
g.mf=function(){return(0,window.parseInt)(g.D("DCLKSTAT",0),10)};
Oaa=function(){if(!nf)return null;var a=nf();return"open"in a?a:null};
g.qf=function(a){switch(g.of(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.of=function(a){return a&&"status"in a?a.status:-1};
g.rf=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Sa(e[0]||"");e=g.Sa(e[1]||"");f in b?g.ya(b[f])?g.Na(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.tf=function(a,b){return g.sf(a,b||{},!0)};
g.sf=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.rf(e[1]||"");for(var f in b)if(c||!g.db(e,f))e[f]=b[f];return g.De(a,e)+d};
Paa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.we(a)[1]||null,e=g.ye(a);d&&e?(d=c,c=g.we(a),d=g.we(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.ye(c)==e&&(Number(g.we(c)[4]||null)||null)==(Number(g.we(a)[4]||null)||null):!0;for(var f in uf){if((e=d=g.D(uf[f]))&&!(e=c)){e=f;var k=g.D("CORS_HEADER_WHITELIST")||{},l=g.ye(a);e=l?(k=k[l])?g.Ia(k,e):!1:!0}e&&(b[f]=d)}return b};
Qaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=vf(a,b);var d=wf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.Se(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.n;c?b.Z&&b.Z.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Za&&b.Za.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.zr&&0<b.timeout&&(f=g.Qe(function(){e||(e=!0,g.Se(f),b.zr.call(b.context||g.n))},b.timeout))}else g.I(a,b)};
g.I=function(a,b){var c=b.format||"JSON";a=vf(a,b);var d=wf(a,b),e=!1,f,k=xf(a,function(a){if(!e){e=!0;f&&g.Se(f);var d=g.qf(a),k=null;if(d||400<=a.status&&500>a.status)k=Raa(c,a,b.ob);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.n;d?b.Z&&b.Z.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Za&&b.Za.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.hc&&0<b.timeout&&(f=g.Qe(function(){e||(e=!0,k.abort(),g.Se(f),b.hc.call(b.context||g.n,k))},b.timeout));
return k};
vf=function(a,b){b.yB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.D("XSRF_FIELD_NAME",void 0),d=b.ua;d&&(d[c]&&delete d[c],a=g.tf(a,d));return a};
wf=function(a,b){var c=g.D("XSRF_FIELD_NAME",void 0),d=g.D("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.D("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Kw||g.ye(a)&&!b.withCredentials&&g.ye(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&g.sa(e)&&(e=g.rf(e),g.lb(e,f),e=b.Cs&&"JSON"==b.Cs?JSON.stringify(e):g.Ce(e));f=e||f&&!g.fb(f);!yf&&f&&"POST"!=b.method&&(yf=!0,g.Ie(Error("AJAX request with postData should use POST")));
return e};
Raa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?zf(b):null)d={},(0,g.y)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.Af(a)})}c&&Bf(d);
return d};
Bf=function(a){if(g.Ba(a))for(var b in a)"html_content"==b||g.Pa(b,"_html")?a[b]=g.Wb(g.Bb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Bf(a[b])};
zf=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Af=function(a){var b="";(0,g.y)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Cf=function(a,b){b.method="POST";b.ia||(b.ia={});return g.I(a,b)};
xf=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Je(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Oaa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof window.FormData));if(e=Paa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
Df=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.Ef=function(a){var b=new Df;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.Ff=function(a){var b=new Df;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.Hf=function(a){var b=a.__yt_uid_key;b||(b=Gf(),a.__yt_uid_key=b);return b};
g.If=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Saa+"VisibilityState";if(b in a)return a[b]};
g.Jf=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Taa||(this[b]=a[b]);this.scale=a.scale;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=
null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
Kf=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Lf=function(a){g.ra(a.C)||Kf(a);return a.C};
g.Mf=function(a){g.ra(a.F)||Kf(a);return a.F};
g.Of=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.eb(Nf,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.J=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Of(a,b,c,d);if(e)return e;e=++Pf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.Jf(d);if(!g.mc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.Jf(b);
b.currentTarget=a;return c.call(a,b)};
k=Je(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);Nf[e]=[a,b,c,k,d];return e};
g.K=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.y)(a,function(a){if(a in Nf){var b=Nf[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Nf[a]}}))};
g.Qf=function(a,b,c){var d;return d=g.J(a,b,function(){g.K(d);c.apply(a,arguments)},!1)};
g.Rf=function(a){for(var b in Nf)Nf[b][0]==a&&g.K(b)};
g.Sf=function(a){this.yc=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.J(window,"mousemove",(0,g.t)(this.W,this));this.N=g.Re((0,g.t)(this.R,this),25)};
Tf=function(){g.zc.call(this);this.C=[]};
Uf=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.jb(Uaa);this.assets=a.assets||{};this.attrs=a.attrs||g.jb(Vaa);this.params=a.params||g.jb(Waa);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Vf=function(a){a instanceof Uf||(a=new Uf(a));return a};
g.Yf=function(a,b,c,d,e,f){f=f||{};f.name=c||g.D("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Wf||(c=a.stacktrace,d=a.columnNumber,a=g.Ec(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),Xf[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={ua:{a:"logerror",t:"jserror",type:a.name,
msg:a.message.substr(0,1E3),line:e,level:void 0===b?"ERROR":b,"client.name":f.name},ia:{url:g.D("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ia.stack=c);for(var k in f)b.ia["client."+k]=f[k];if(k=g.D("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ia[l]=k[l];g.I(g.D("ECATCHER_REPORT_HOST","")+"/error_204",b);Xf[a.message]=!0;Wf++}};
g.dg=function(a,b){if(a.ni){var c=a.ni;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Zf[a.ni.token]=d;c=$f(a.endpoint,a.ni.token)}else c=$f(a.endpoint);c.push(a.payload);ag[a.endpoint]=new b;c.length>=(g.Ne("web_logging_max_batch")||20)?g.bg():g.cg()};
g.bg=function(){g.Se(g.fg);if(!g.fb(g.gg)){for(var a in g.gg){var b=ag[a];if(b){var c=void 0,d=a,e=b,f=Xaa[d],k=hg[d]||{};hg[d]=k;b=Math.round(g.ig());for(c in g.gg[d]){var l=g.jg(e);l[f]=$f(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;var m=Zf[c];if(m)a:{var q=l,u=c;if(m.videoId)var z="VIDEO";else if(m.playlistId)z="PLAYLIST";else break a;q.credentialTransferTokenTargetId=m;q.context=q.context||{};q.context.user=q.context.user||{};q.context.user.credentialTransferTokens=
[{token:u,scope:z}]}delete Zf[c];m=l;m.requestTimeMs=b;(z=g.D("EVENT_ID",void 0))&&g.Me("enable_gel_web_client_event_id")&&(q=(g.D("BATCH_CLIENT_COUNTER",void 0)||0)+1,q>Yaa&&(q=1),g.Ge("BATCH_CLIENT_COUNTER",q),m.serializedClientEventId={serializedEventId:z,clientCounter:q});g.kg(e,d,l,{retry:!0})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.gg[a]}}g.fb(g.gg)||
g.cg()}};
Zaa=function(){var a=[];for(e in g.gg){var b=hg[e]||{};hg[e]=b;for(var c in g.gg[e]){var d=$f(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.ig());for(var f in hg)b=hg[f],b.eventType=f in lg?lg[f]:"UNKNOWN_TYPE",c=mg[f],b.metricIntervalMs=c?e-c:e-g.ng,a.push(b),mg[f]=e,delete hg[f];return a};
g.cg=function(){g.Se(g.fg);g.fg=g.Qe(g.bg,g.D("LOGGING_BATCH_TIMEOUT",g.og||1E4))};
$f=function(a,b){b=void 0===b?"":b;g.gg[a]=g.gg[a]||{};g.gg[a][b]=g.gg[a][b]||[];return g.gg[a][b]};
g.rg=function(){if(null==g.r("_lact",window)){var a=(0,window.parseInt)(g.D("LACT"),10);a=(0,window.isFinite)(a)?(0,g.B)()-Math.max(a,0):-1;g.p("_lact",a,window);g.p("_fact",a,window);-1==a&&g.pg();g.J(window.document,"keydown",g.pg);g.J(window.document,"keyup",g.pg);g.J(window.document,"mousedown",g.pg);g.J(window.document,"mouseup",g.pg);g.J(window,"resize",function(){qg("resize",200)});
g.J(window,"scroll",function(){qg("scroll",200)});
new g.Sf(function(){qg("mouse",100)});
g.J(window.document,"touchstart",g.pg);g.J(window.document,"touchend",g.pg)}};
qg=function(a,b){sg[a]||(sg[a]=!0,g.gf(function(){g.pg();sg[a]=!1},b))};
g.pg=function(){null==g.r("_lact",window)&&g.rg();var a=(0,g.B)();g.p("_lact",a,window);-1==g.r("_fact",window)&&g.p("_fact",a,window);(a=g.r("ytglobal.ytUtilActivityCallback_"))&&a()};
g.tg=function(){var a=g.r("_lact",window);return null==a?-1:Math.max((0,g.B)()-a,0)};
g.vg=function(a,b,c,d){var e=g.ug,f={};f.eventTimeMs=Math.round(c||g.ig());f[a]=b;f.context={lastActivityMs:String(c?-1:g.tg())};g.dg({endpoint:"log_event",payload:f,ni:d},e)};
$aa=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
wg=function(a){var b={"X-Goog-Visitor-Id":g.D("VISITOR_DATA","")},c;a?c="Bearer "+g.r("gapi.auth.getToken")().OV:c=yc([]);c&&(b.Authorization=c,b["X-Goog-AuthUser"]=g.D("SESSION_INDEX",0));return b};
xg=function(a){a=Object.assign({},a);delete a.Authorization;var b=yc();if(b){var c=new Pd;c.update(g.D("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();g.za(b);g.Od();c=Nd;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],k=e+1<b.length,l=k?b[e+1]:0,m=e+2<b.length,q=m?b[e+2]:0,u=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[u],c[f],c[l],c[q])}b=d.join("");a.hash=b}return a};
g.zg=function(a,b,c,d){g.yg.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Ag=function(a,b,c){g.yg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.Bg=function(a){var b;(b=g.ue(a))||(a=new pe(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.je(a):null;this.F=window.document.domain||window.location.hostname};
aba=function(a,b,c,d){if(d)return null;d=Cg.get("nextId",!0)||1;var e=Cg.get("requests",!0)||{};e[d]={method:a,request:b,authState:xg(c),requestTime:Math.round(g.ig())};Cg.set("nextId",d+1,86400,!0);Cg.set("requests",e,86400,!0);return d};
Dg=function(a){var b=Cg.get("requests",!0)||{};delete b[a];Cg.set("requests",b,86400,!0)};
Eg=function(a){var b=Cg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.ig())-d.requestTime)){var e=d.authState,f=xg(wg(!1));g.ib(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.ig())),g.kg(a,d.method,e,{}));delete b[c]}}Cg.set("requests",b,86400,!0)}};
g.ug=function(a){var b=this;this.C=a||{innertubeApiKey:g.D("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.D("INNERTUBE_API_VERSION",void 0),AB:g.D("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),CB:g.D("INNERTUBE_CONTEXT_HL",void 0),BB:g.D("INNERTUBE_CONTEXT_GL",void 0),DB:g.D("INNERTUBE_HOST_OVERRIDE",void 0)||"",EB:!!g.D("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.ff(function(){Eg(b)})};
g.jg=function(a){a=a.C;a={client:{hl:a.CB,gl:a.BB,clientName:a.AB,clientVersion:a.innertubeContextClientVersion}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.D("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.D("DELEGATED_SESSION_ID")});return{context:a}};
g.kg=function(a,b,c,d){!g.D("VISITOR_DATA")&&.01>Math.random()&&g.Ie(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,Cs:"JSON",hc:function(){d.hc()},
zr:d.hc,Z:function(a,b){d.Z&&d.Z(b)},
vj:function(a){d.Z&&d.Z(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
yr:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=a.C.EB||!1,k=wg(f);Object.assign(e.headers,k);var l="",m=a.C.DB;m&&(l=m);e.headers.Authorization&&!l&&(e.headers["x-origin"]=window.location.origin);l=""+l+$aa(a.C.innertubeApiVersion,b,c)+"?alt=json&key="+a.C.innertubeApiKey;var q;if(d.retry&&g.Me("retry_web_logging_batches")&&(q=aba(b,c,k,f))){var u=e.Z,z=e.vj;e.Z=function(a,b){Dg(q);u(a,b)};
c.vj=function(a,b){Dg(q);z(a,b)}}try{g.Me("use_fetch_for_op_xhr")?Qaa(l,e):g.Cf(l,e)}catch(G){if("InvalidAccessError"==G)q&&(Dg(q),q=0),g.Ie(Error("An extension is blocking network request."),"WARNING");
else throw G;}q&&g.ff(function(){Eg(a)},5E3)};
g.Fg=function(a,b,c){g.vg(a,b,c,void 0)};
g.Gg=function(){g.Me("log_web_meta")&&Zaa().forEach(function(a){g.Fg("delayedEventMetricCaptured",a)})};
g.Hg=function(a,b,c,d,e){this.D=a;this.H=b;this.G=c;this.F=d;this.C=e};
g.Ig=function(a){var b={};void 0!==a.D?b.trackingParams=a.D:(b.veType=a.H,null!=a.G&&(b.veCounter=a.G),null!=a.F&&(b.elementIndex=a.F));void 0!==a.C&&(b.dataElement=g.Ig(a.C));return b};
g.Jg=function(a,b,c){(0,g.y)(b,function(b){g.vg("visualElementHidden",{csn:a,ve:g.Ig(b),eventType:c?16:8})})};
Lg=function(a,b){var c=Object.keys(a).join("");Kg("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Fg("latencyActionInfo",a))};
Kg=function(a){Mg[a]=Mg[a]||{count:0};var b=Mg[a];b.count++;b.time=g.ig();Ng||(Ng=g.ff(bba,5E3));return 10<b.count?(11==b.count&&g.Yf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
bba=function(){var a=g.ig(),b;for(b in Mg)6E4<a-Mg[b].time&&delete Mg[b];Ng=0};
Pg=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.B)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Og)for(a=1,b=0;b<Og.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Og.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Tg=function(a){var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.tg()>b)&&"visible"==g.If()){b=-1;g.Qg&&(b=Math.round(g.ig()-g.Qg));var c=String;var d=g.r("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.B)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.Rg,index:String(Sg),lastEventDeltaMs:String(b),trigger:a};g.vg("foregroundHeartbeat",a);g.p("_fact",-1,window);Sg++;g.Qg=g.ig()}};
g.Ug=function(){var a=g.D("ROOT_VE_TYPE",void 0);return a?new g.Hg(void 0,a,void 0):null};
g.Vg=function(){var a=g.D("client-screen-nonce")||g.D("EVENT_ID");return a?a:null};
Wg=function(){var a=g.Ug(),b=g.Vg();b&&a&&g.Jg(b,[a],!0)};
g.Xg=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Je(d):null;this.H=e?Je(e):null;this.G=[];this.C=this.F=0};
g.Yg=function(a){g.hf(a.F);a.F=g.gf((0,g.t)(a.init,a))};
g.ah=function(a){a.name in Zg&&$g(a.name);Zg[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.y)(a.deps,function(b){if(!(b in Zg))throw Error("Module "+b+" required by "+a.name);Zg[b].reqs.push(a.name)});
a.enable()};
$g=function(a){if(a in Zg){var b=Zg[a];(0,g.y)(b.reqs,function(a){$g(a)});
try{b.disable()}catch(c){}delete Zg[a]}};
ch=function(a){Ee(g.bh,arguments)};
g.dh=function(a){return a in g.bh};
eh=function(a){Ee(g.bh,arguments)};
g.fh=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Ya,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Eb(g.Hb(a)),"about:invalid#zClosurez"===a?a="":(a=g.Rb(g.Tb(a)),a=g.Ra(g.ae(a))),g.Qa(a)||(a=g.hc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.lc(a).body.appendChild(a))):e?xf(a,b,"POST",e,d):g.D("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?xf(a,b,"GET","",d):cba(a,b))};
cba=function(a,b){var c=new window.Image,d=""+dba++;gh[d]=c;c.onload=c.onerror=function(){b&&gh[d]&&b();delete gh[d]};
c.src=a};
g.hh=function(a,b){a=a||"";var c=a.match(eba);window.spf.style.load(a,c?c[1]:"",b)};
g.ih=function(a,b,c){var d=g.D("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.ye(window.location.href);e&&d.push(e);e=g.ye(a);if(g.Ia(d,e)||!e&&g.Oa(a,"/"))if(g.Me("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.Ub(d,a),a=d.href),a&&(a=g.ze(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Vg();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Xa(a).toString(36),b=b?g.Ce(b):"",g.zg(a,b,c||5))):(c="ST-"+g.Xa(a).toString(36),b=b?g.Ce(b):"",
g.zg(c,b,5))}};
g.jh=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.Vb(d.location,g.De(a,b)+c)};
g.kh=function(a,b){b&&g.ih(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.jh(a)};
g.lh=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.D("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.ih(a,b);if(c)return!1;g.kh(a);return!0};
g.mh=function(a,b){this.version=a;this.args=b};
g.nh=function(a,b){this.topic=a;this.C=b};
g.ph=function(a,b){var c=g.oh();c&&c.publish.call(c,a.toString(),a,b)};
g.oh=function(){return g.r("ytPubsub2Pubsub2Instance")};
fba=function(a){if(qh.getEntriesByType){var b=qh.getEntriesByType("paint");if(b=g.Ga(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Aa(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
rh=function(){var a=g.D("TIMING_TICK_EXPIRATION");a||(a={},g.Ge("TIMING_TICK_EXPIRATION",a));return a};
sh=function(){var a=rh(),b;for(b in a)g.hf(a[b]);g.Ge("TIMING_TICK_EXPIRATION",{})};
th=function(a,b){g.mh.call(this,1,arguments)};
uh=function(a,b){g.mh.call(this,1,arguments)};
gba=function(){vh=!1;wh();if("cold"==xh().yt_lt){var a=yh(),b=zh(),c;for(c in a)g.Oa(c,"_")||"tick_"+c in b||Ah(c,a[c]);a=xh();for(c in a)"info_"+c in b||Bh(c,a[c])}Ch(!0);g.Dh(!1)};
Gh=function(a){Eh(a);hba();Fh(!1,a);a||(g.D("TIMING_ACTION")&&g.Ge("PREVIOUS_ACTION",g.D("TIMING_ACTION")),g.Ge("TIMING_ACTION",""))};
g.Ih=function(a,b,c){b||"_"==a[0]||Hh(a,c);var d=yh(c),e=b||g.ig();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=rh();var f=e[a];f&&(g.hf(f),e[a]=0);Ah(a,b,c)||g.Dh(!1,c);return d[a]};
Hh=function(a,b){qh.mark&&(g.Oa(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),qh.mark(a))};
Kh=function(a,b){Jh("yt_sts",a,void 0);g.Ih("_start",b,void 0)};
Jh=function(a,b,c){xh(c)[a]=b;Bh(a,b,c)};
Lh=function(a){var b=xh(void 0);return a in b};
Mh=function(a){var b=yh(a);if(b.aft)return b.aft;a=g.D((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
Nh=function(a){g.Ih("nreqs",a.requestStart,void 0);g.Ih("nress",a.responseStart,void 0);g.Ih("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.Ih("nrs",a.redirectStart,void 0),g.Ih("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.Ih("ndnss",a.domainLookupStart,void 0),g.Ih("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.Ih("ntcps",a.connectStart,void 0),g.Ih("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.Ih("nstcps",a.secureConnectionStart,void 0),g.Ih("ntcpe",a.connectEnd,void 0))};
g.Dh=function(a,b){if(!Oh(b)){var c=g.D((b||"")+"TIMING_ACTION",void 0),d=yh(b);if(g.r("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Mh(b)))if(g.Me("tighter_critical_section")&&!Ph&&(g.ph(iba,new th(Math.round(c-d._start),b)),Ph=!0),a||b)Qh(b);else{c=!0;var e=g.D("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Qh(b)}}};
jba=function(){switch(g.If()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Qh=function(a){sh();if(!Rh()){var b=yh(a),c=xh(a),d=b._start,e;for(e in b)if(g.Oa(e,"_")&&g.ya(b[e])){var f=e.slice(1);if(f in kba){var k=(0,g.Sh)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.r("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))Th(k,f),Gh(a)}else{var l=g.D("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.D((a||"")+"TIMING_ACTION",void 0)};var m=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var q=window.location.protocol+g.r("ytplayer.config.assets.js");(q=qh.getEntriesByName?qh.getEntriesByName(q)[0]:null)?c.h5jse=Math.round(c.h5jse-q.responseEnd):delete c.h5jse}b.aft=Mh(a);lba(a)&&"youtube"==l&&(Jh("yt_lt","hot_bg",a),l=
b.vc,q=b.pbs,delete b.aft,c.aft=Math.round(q-l));for(var u in c)"_"!=u.charAt(0)&&(k[u]=c[u]);b.ps=g.ig();c={};u=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,u.push(e+"."+l));k.rt=u.join(",");(b=g.r("ytdebug.logTiming"))&&b(k,c);Th(k,f,a);g.ph(mba,new uh(c.aft+(m||0),a))}}};
Uh=function(a){if(!Oh(void 0)){if(!g.Me("send_empty_timing")){var b=g.D("CSI_SERVICE_NAME","youtube");if(!g.D("TIMING_ACTION",void 0)||!b)return}g.Ih("aa",void 0,void 0);Jh("ap",1,void 0);Jh("yt_fss",a,void 0);!g.Me("enable_csi_abandonment_info")||Lh("yt_lt")||wh();Qh(void 0)}};
Ah=function(a,b,c){zh(c)["tick_"+a]=b;c||b||g.ig();return Rh()?(c=Vh(c),"_start"==a?Kg("baseline_"+c)||g.Fg("latencyActionBaselined",{clientActionNonce:c},b):Kg("tick_"+a+"_"+c)||g.Fg("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Bh=function(a,b,c){zh(c)["info_"+a]=b;if(Rh())if(a in Wh){var d=Wh[a];g.Ia(nba,d)&&(b=!!b);if(Rh()){a={};d=d.split(".");for(var e=a,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=b;b=Vh(c);Lg(a,b)}}else g.Ia(oba,a)||g.Ie(Error("Unknown label "+a+" logged with GEL CSI."))};
wh=function(){var a=g.D("TIMING_INFO",{});for(b in a)Jh(b,a[b]);Jh("is_nav",1);(a=g.Vg())&&Jh("csn",a);(a=g.D("PREVIOUS_ACTION",void 0))&&Jh("pa",a);var b=xh();b.p=g.D("CLIENT_PROTOCOL")||"unknown";b.t=g.D("CLIENT_TRANSPORT")||"unknown";Jh("yt_vis",jba());if("cold"==b.yt_lt){a=qh.timing||{};a.navigationStart&&(g.Ih("srt",a.responseStart),1!=b.prerender&&Kh("n",a.navigationStart));b=fba(a);0<b&&g.Ih("fpt",b);Nh(a);qh.getEntriesByType&&pba();a=[];if(window.document.querySelector&&qh&&qh.getEntriesByName)for(var c in Xh)b=
Xh[c],qba(c,b)&&a.push(b);a.length&&Jh("rc",a.join(","))}Rh()&&(c={},c.actionType=rba[g.D("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Vh(void 0),Lg(c,a))};
Yh=function(a){return Math.round(qh.timing.navigationStart+a)};
pba=function(){var a=window.location.protocol,b=qh.getEntriesByType("resource");b=(0,g.Zh)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20180301000400/https://fonts.gstatic.com/s/")});
(b=(0,g.$h)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.Ih("wffs",Yh(b.startTime)),g.Ih("wffe",Yh(b.responseEnd)))};
qba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=qh.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.Ih("rsf_"+b,d+Math.round(c.fetchStart)),g.Ih("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(Lh("rc")||Jh("rc",""),0===c.transferSize))?!0:!1:!1};
Th=function(a,b,c){if(g.Me("debug_csi_data")){var d=g.r("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||g.fh(a,void 0,void 0,void 0,f)}catch(k){g.fh(a,void 0,void 0,void 0,f)}}else g.fh(a);Fh(!0,c)};
Ch=function(a){g.p("ytglobal.timingready_",a,void 0)};
Vh=function(a){var b=ai(a).nonce;b||(b=Pg(),ai(a).nonce=b);return b};
yh=function(a){return ai(a).tick};
xh=function(a){return ai(a).info};
zh=function(a){a=ai(a);"gel"in a||(a.gel={});return a.gel};
ai=function(a){return g.r("ytcsi."+(a||"")+"data_")||Eh(a)};
Eh=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
Oh=function(a){return!!g.r("yt.timing."+(a||"")+"pingSent_")};
Fh=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
lba=function(a){var b=yh(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==xh(a).yt_pvis};
Rh=function(){return vh||g.Me("csi_on_gel")};
ci=function(a,b){g.zc.call(this);this.H=this.qa=a;this.N=b;this.L=!1;this.api={};this.ea=this.W=null;this.R=new g.de;g.Cc(this,this.R);this.D={};this.ma=this.ka=this.F=this.nb=this.C=null;this.V=!1;this.G=this.J=null;this.Ta={};this.wb=["onReady"];this.eb=null;this.rb=window.NaN;this.Y={};bi(this);this.Uh("WATCH_LATER_VIDEO_ADDED",this.CG.bind(this));this.Uh("WATCH_LATER_VIDEO_REMOVED",this.DG.bind(this));this.Uh("onAdAnnounce",this.Av.bind(this));this.zb=new Tf(this);g.Cc(this,this.zb)};
di=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
fi=function(a){var b=!0,c=ei(a);c&&a.C&&(a=a.C,b=g.E(c,"version")==a.assets.js);return b&&!!g.r("yt.player.Application.create")};
sba=function(a){if(!a.pb()&&!a.V){var b=fi(a);if(b&&"html5"==(ei(a)?"html5":null))a.ma="html5",a.L||gi(a);else if(hi(a),a.ma="html5",b&&a.G)a.qa.appendChild(a.G),gi(a);else{a.C.loaded=!0;var c=!1;a.J=function(){c=!0;var b=a.C.clone();g.r("yt.player.Application.create")(a.qa,b);gi(a)};
a.V=!0;b?a.J():(g.af(a.C.assets.js,a.J),g.hh(a.C.assets.css),ii(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
ei=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
gi=function(a){if(!a.pb()){var b=ei(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||tba(a)):a.rb=g.Qe(function(){gi(a)},50)}};
tba=function(a){bi(a);a.L=!0;var b=ei(a);b.addEventListener&&(a.W=ji(a,b,"addEventListener"));b.removeEventListener&&(a.ea=ji(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=ji(a,b,e))}for(var f in a.D)a.W(f,a.D[f]);di(a);a.ka&&a.ka(a.api);a.R.oa("onReady",a.api)};
ji=function(a,b,c){var d=b[c];return function(){try{return a.eb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.eb=e,g.Ke(e))}}};
bi=function(a){a.L=!1;if(a.ea)for(var b in a.D)a.ea(b,a.D[b]);for(var c in a.Y)g.Se((0,window.parseInt)(c,10));a.Y={};a.W=null;a.ea=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Uh.bind(a);a.api.removeEventListener=a.RK.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ax.bind(a);a.api.getPlayerType=a.Sx.bind(a);a.api.getCurrentVideoConfig=a.bx.bind(a);a.api.loadNewVideoConfig=a.Yl.bind(a);a.api.isReady=a.yC.bind(a)};
ki=function(a,b){var c=b;if("string"==typeof b){if(a.Ta[b])return a.Ta[b];c=function(){var a=g.r(b);a&&a.apply(g.n,arguments)};
a.Ta[b]=c}return c?c:null};
uba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.n[c]=function(c){var d=a.C&&a.C.args&&a.C.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.R.oa(b,c);else{var f=g.Qe(function(){a.pb()||(a.R.oa(b,c),g.gb(a.Y,String(f)))},0);
g.hb(a.Y,String(f),!0)}};
return c};
hi=function(a){g.Ih("dcp");a.cancel();bi(a);a.ma=null;a.C&&(a.C.loaded=!1);var b=ei(a);b&&(fi(a)||!ii(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.jc(a.qa)};
ii=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.ni=function(a,b){a=g.sa(a)?g.ac(a):a;var c=g.li+"_"+g.Da(a),d=g.mi[c];if(d)return d.Yl(b),d.api;d=new ci(a,c);g.mi[c]=d;g.H("player-added",d.api);g.Ac(d,g.v(vba,d));g.Qe(function(){d.Yl(b)},0);
return d.api};
vba=function(a){delete g.mi[a.N]};
g.oi=function(a){if(!a)return null;var b=g.li+"_"+g.Da(a),c=g.mi[b];c||(c=new ci(a,b),g.mi[b]=c);return c.api};
g.pi=function(a){return g.oi(window.document.getElementById(a))};
g.ri=function(a,b){var c={};c.key=a;c.value=b;return qi().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.si=function(a){return qi().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
qi=function(){return ti?window.Promise.resolve(ti):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))ti=b,a(ti);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),qi()};
c.onupgradeneeded=wba})};
wba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Cba=function(){ui++;var a=g.ec(),b=new g.pc(0,0,a.width,a.height);Jh("vph",a.height);Jh("vpw",a.width);g.Ih("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;vi.start();for(var f=0;f<c;f++){var k=a[f];if(wi(k,b)){var l=xba(k);l.then(yba);d.push(l);xi.push(l);k.loadTime||(e=!1)}}e&&Jh("yt_eil",1);g.Ih("vpcc");b=g.xd(d).then(zba);g.zd(b,Aba);b.then(Bba);xi.push(b);return b};
Bba=function(){vi.stop()};
Aba=function(){g.Ih("vpr")};
wi=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.Hf(c);if(e in yi)return!0;if(e in Ai)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Ai[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Ai[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)yi[d[c]]=!0;return!0};
zba=function(a){var b=g.ec();b=new g.pc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;wi(a[d].xB,b)&&c<f&&(c=f)}return c};
xba=function(a){var b=ui;return new g.rd(function(c,d){var e={xB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){ui!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},Bi.push(a))})};
yba=function(a){vi.start();a=a.time;Ci<a&&(Ci=a,g.Ih("lim",a))};
Dba=function(){g.Ih("vptl",Ci);g.Ih("vpl",Ci)};
Eba=function(){xi.forEach(function(a){a.cancel()});
Ci=xi.length=0;yi={};Ai={};Bi.forEach(function(a){a.slt=void 0});
Bi.length=0};
g.Di=function(a,b){g.fh("/gen_204?"+a,b)};
Gba=function(a){if(null==a)return[];var b=[];Fba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Ei=function(){return g.A(g.x("page-container"),"remote-connected")};
Hba=function(){Fi=g.Re(Gi,5E3);var a=g.Hi();a?(a.addEventListener("onReady",Gi),a.addEventListener("onStateChange",Gi)):Ii("unable to init PP monitor")};
Li=function(a){for(var b in g.mi){var c=g.mi[b];c&&c.cancel()}if(a=a||null){b=g.Hi();var d=!0;c=g.Ji;g.Ji=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Ki="",g.ni("player-api",a)):b.playVideo();a=g.Vf(a);a.loaded=!0}Gi();g.p("ytplayer.config",a,void 0)};
g.Hi=function(){return g.pi("player-api")};
Gi=function(){var a=g.Hi();if(a){var b=g.x("player");b=!b||g.A(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.D("PAGE_NAME"),e=g.Ei();!c||d||e||(Ii("PP playing off watch (paused)"),a.pauseVideo());b&&d?Ii("PP off-screen on watch"):b||d||Ii("PP !off-screen off watch")}};
Ii=function(a){var b=g.D("PAGE_NAME");b&&(a+="("+[b,Ki,g.r("_spf_state.nav-counter")].join()+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.Ie(Error(a),"WARNING"))};
Ni=function(){g.Ih("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.Ih("cpt");g.H("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?(g.Ih("cpt"),g.H("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){g.Ih("cpt");
g.H("on_cpt_tick",(new Date).getTime())},0);
Iba();g.D("CSI_VIEWPORT")&&(Mi=Cba(),Mi.then(function(a){g.Ih("vpl",a);Mi=null},function(){}))};
Iba=function(){Oi("init");var a=g.D("PAGE_NAME",void 0);a&&Oi("init-"+a)};
Oi=function(a){g.lf()?Pi.push(g.gf(g.v(g.Ze,a),0)):g.H(a)};
Qi=function(){g.jf(Pi);Pi.length=0;Eba();Mi&&(Mi.cancel(),Mi=null);var a=g.D("PAGE_NAME",void 0);a&&g.Ze("dispose-"+a);g.Ze("dispose")};
Jba=function(){Ni()};
Kba=function(){g.D("TIMING_REPORT_ON_UNLOAD")&&g.Dh(!0);Uh("u");g.Tg("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Wg();g.Gg();g.bg();Qi();g.Ze("pageunload")};
Ri=function(){g.pg()};
Si=function(){window.yt_spf_loaded_history=!0;g.pg()};
Xi=function(){Ti=1;Ui=Vi=0;g.D("TIMING_REPORT_ON_UNLOAD")&&g.Dh(!0);g.Me("warm_load_nav_start_web")?(Uh("n"),Gh(),Ch(!1),g.Ge("TIMING_AFT_KEYS",[]),Jh("yt_lt","warm"),g.Ge("TIMING_ACTION",""),g.Ge("TIMING_WAIT",[]),sh()):(Uh("n"),Gh());Kh("n");Hh("nr");Wi(Lba);Wg();g.Ze("navigate")};
aj=function(a){a=a.detail.part||a.detail.partial;g.Ih("nc"+Vi);++Vi;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.Ih("bc");else{var b=1==Ti;Ti=2;b?(Wi(Mba),Yi()):Wi(Nba);if(b=a&&a.data&&a.data.swfcfg)Zi(a.timing,b.args),$i(b)}};
bj=function(){g.Ih("np"+Ui);++Ui};
cj=function(a){a=a.detail.response;var b=1==Ti;Ti=3;b&&(Wi(Oba),Yi());if(b=a.data&&a.data.swfcfg)Zi(a.timing,b.args),$i(b)};
gj=function(a){g.Ih("nd");a=a.detail.response;g.dj=a.cacheKey;a=a.timing;var b=window._spf_state;g.ej.navigationCount=b&&b["nav-counter"]||0;g.Me("warm_load_nav_start_web")?g.Ih("srt",a.responseStart):(Kh("ne",a.responseStart),Jh("srt",Math.max(0,a.responseStart-a.navigationStart)));Jh("yt_lt",a.spfCached?"hot":"warm");g.Ih("pfs",a.fetchStart);g.Ih("pfrs",a.responseStart);"redirectStart"in a&&Nh(a);Wi(fj);window.document.getElementById("content").style.height="";Ni();Ti=0};
hj=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Ie(a)};
ij=function(a){g.Di(g.Ce({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Qba=function(){Pba();window.yt_spf_loaded_history=!1};
Rba=function(){};
Yi=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Qi();a=g.D("PREVIOUS_ACTION");for(var b in g.Fe)delete g.Fe[b];g.Ge("PREVIOUS_ACTION",a);g.Ge("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);if((b=g.Hi())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Ki=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),Ki="recovered"):Ki="missing2"}else Ki="missing";Gi()};
$i=function(a){"cfg"in yh(void 0)||g.Ih("cfg");Li(a)};
Wi=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.hf(jj);jj=g.gf(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Se(kj);kj=g.Qe(function(){b.className=e},c)},0)};
Pba=function(){var a=fj[0]+50;g.Se(kj);kj=g.Qe(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
Zi=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Gba(b));g.D("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Di(g.Ce(c)))};
mj=function(){return"granted"!=window.Notification.permission?window.Promise.resolve():lj().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})["catch"](function(){})};
oj=function(){nj({type:"notifications_register",data:g.D("ID_TOKEN")})};
lj=function(){return window.navigator.serviceWorker.getRegistration(String(Le("service_worker_scope")||""))};
pj=function(a){return!(!a||!a.pushManager)};
nj=function(a){lj().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Sba=function(){if(!g.D("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(Le("service_worker_push_force_notification_prompt_tag")||"");return a?g.si("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
Wba=function(){var a=void 0===a?!1:a;return(window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification?lj().then(pj):window.Promise.resolve(!1)).then(function(b){if(!b)return window.Promise.resolve();b=mj().then(function(){nj({type:"notifications_check_registration",data:g.D("ID_TOKEN")})});
return"default"!=window.Notification.permission?b:b.then(function(){return Tba(a)}).then(function(a){if(a)return Uba(),Vba().then(function(){})})})};
Tba=function(a){return g.D("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.D("LOGGED_IN",void 0)&&(void 0===a?0:a)?Sba().then(function(a){if(a)return!0;a=[Xba(),Yba()];g.D("LOGGED_IN",void 0)||a.push(Zba());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
Zba=function(){var a=g.Ne("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.si("WatchCount").then(function(b){return b>=a})};
Vba=function(){var a=arguments;g.Me("service_worker_push_prompt_modal_enable")&&$ba();return window.Notification.requestPermission().then(function(a){qj();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return mj().then(function(){g.ri("NotificationsDisabled",!1);oj();return window.Promise.resolve(!0)});
"denied"==a&&oj();return window.Promise.resolve(!1)})["catch"](function(){qj();
return window.Promise.reject.apply(window.Promise,[].concat(a instanceof Array?a:baa(g.la(a))))})};
Uba=function(){g.si("PromptCount").then(function(a){return g.ri("PromptCount",a+1)}).then(function(){return g.ri("PromptTime",(0,g.B)())}).then(function(){var a=String(Le("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.si("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.ri("PromptTags",JSON.stringify(c))})})};
Xba=function(){return-1==g.Ne("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.si("PromptCount").then(function(a){a||(a=0);return window.Promise.resolve(a<g.Ne("service_worker_push_prompt_cap"))})};
Yba=function(){var a=g.Ne("service_worker_push_prompt_delay_ms");return a?g.si("PromptTime").then(function(b){return window.Promise.resolve((0,g.B)()-a>(b||0))}):window.Promise.resolve(!0)};
aca=function(){rj||qj()};
sj=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
$ba=function(){var a=g.x("yt-push-prompt-modal-bg");rj=g.Me("service_worker_push_prompt_modal_ignore_click");a?sj(a):(a=g.hc("div",{id:"yt-push-prompt-modal-bg"}),sj(a),window.document.body.appendChild(a),g.Qf(window.document,"click",aca))};
qj=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.kc(a)};
bca=function(a){return pj(a)?Wba():window.Promise.resolve()};
dca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(cca)})};
fca=function(){var a="/sw.js",b=g.D("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=tj(a);g.Me("service_worker_push_enabled")&&a.then(eca).then(bca)};
eca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
cca=function(a){a&&tj("/sw.js?0",a.scope)};
tj=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(Le("service_worker_scope")||"")||"/"})};
uj=function(){g.Xg.call(this,"www/base");this.D=0};
vj=function(a){(a=a.detail.name)&&$g(a)};
g.aa=[];ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
fa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;aaa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)wj=Object.setPrototypeOf;else{var xj;a:{var gca={a:!0},yj={};try{yj.__proto__=gca;xj=yj.a;break a}catch(a){}xj=!1}wj=xj?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=wj;
pa("Array.prototype.find",function(a){return a?a:function(a,c){a:{var b=this;b instanceof String&&(b=String(b));for(var e=b.length,f=0;f<e;f++){var k=b[f];if(a.call(c,k,f,b)){b=k;break a}}b=void 0}return b}});
pa("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
var hca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)qa(d,e)&&(a[e]=d[e])}return a};
pa("Object.assign",function(a){return a||hca});
var ica=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
pa("Reflect.construct",function(){return ica});
pa("Promise",function(a){function b(a){this.C=0;this.D=void 0;this.F=[];var b=this.H();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.L()})};
var e=fa.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.L=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(q){this.H(q)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.L(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(m){this.G(m);return}"function"==typeof b?this.ma(b,a):this.L(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.L=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.C)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.C);this.C=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.F){for(var a=this.F,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.F=null}};
var f=new c;b.prototype.V=function(a){var b=this.H();a.ji(b.resolve,b.reject)};
b.prototype.ma=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(q){c.reject(q)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(ba){f(ba)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.ji(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.ji=function(a,b){function c(){switch(d.C){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?f.F(c):this.F.push(function(){f.F(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.la(a),f=e.next();!f.done;f=e.next())d(f.value).ji(b,c)})};
b.all=function(a){var c=g.la(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).ji(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
pa("WeakMap",function(a){function b(a){this.hb=(f+=Math.random()+1).toString();if(a){ea();ja();a=g.la(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){qa(a,e)||ha(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(q){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!qa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.hb]=b;return this};
b.prototype.get=function(a){return qa(a,e)?a[e][this.hb]:void 0};
b.prototype.has=function(a){return qa(a,e)&&qa(a[e],this.hb)};
b.prototype["delete"]=function(a){return qa(a,e)&&qa(a[e],this.hb)?delete a[e][this.hb]:!1};
return b});
pa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return ka(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&qa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,lc:l}}return{id:c,list:d,index:-1,lc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.la(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.la([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(z){return!1}}())return a;
ea();ja();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.lc?c.lc.value=b:(c.lc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.lc),this.F.previous.next=c.lc,this.F.previous=c.lc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.lc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.lc.previous.next=a.lc.next,a.lc.next.previous=a.lc.previous,a.lc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).lc};
e.prototype.get=function(a){return(a=d(this,a).lc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
pa("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.la(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.la([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
ea();ja();b.prototype.add=function(a){this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
pa("Array.from",function(a){return a?a:function(a,c,d){ja();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
pa("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!(0,window.isNaN)(a)&&window.Infinity!==a&&-window.Infinity!==a}});
g.zj=g.zj||{};g.n=this;Ca="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.B=Date.now||function(){return+new Date};g.w(g.Ea,Error);g.Ea.prototype.name="CustomError";g.Ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.sa(a))return g.sa(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.jca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.sa(a))return g.sa(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Zh=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.sa(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.Sh=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.sa(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.$h=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.y)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Aj=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Bj=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Ua=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.Cj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var Dj=g.n.navigator;if(Dj){var Ej=Dj.userAgent;if(Ej){g.Ya=Ej;break a}}g.Ya=""};var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.sb[" "]=g.ua;var Mj,maa,Qj;g.Fj=g.Za("Opera");g.C=g.mb();g.Gj=g.Za("Edge");g.Hj=g.Gj||g.C;g.Ij=g.Za("Gecko")&&!(-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.Za("Edge"))&&!(g.Za("Trident")||g.Za("MSIE"))&&!g.Za("Edge");g.Jj=-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.Za("Edge");g.Kj=g.Za("Macintosh");g.Lj=g.Za("Windows");g.kca=g.Za("Linux")||g.Za("CrOS");g.lca=g.Za("Android");g.mca=qb();g.nca=g.Za("iPad");g.oca=g.Za("iPod");g.pca=g.rb();
a:{var Nj="",Oj=function(){var a=g.Ya;if(g.Ij)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Gj)return/Edge\/([\d\.]+)/.exec(a);if(g.C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Jj)return/WebKit\/(\S+)/.exec(a);if(g.Fj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Oj&&(Nj=Oj?Oj[1]:"");if(g.C){var Pj=ub();if(null!=Pj&&Pj>(0,window.parseFloat)(Nj)){Mj=String(Pj);break a}}Mj=Nj}g.vb=Mj;maa={};var Rj=g.n.document;Qj=Rj&&g.C?ub()||("CSS1Compat"==Rj.compatMode?(0,window.parseInt)(g.vb,10):5):void 0;g.xb=Qj;var oaa;oaa=!g.C||g.yb(9);g.qca=!g.Ij&&!g.C||g.C&&g.yb(9)||g.Ij&&g.wb("1.9.1");g.Sj=g.C&&!g.wb("9");g.rca=g.C||g.Fj||g.Jj;g.Ab.prototype.Td=!0;g.Ab.prototype.Uc=function(){return this.C};
g.Ab.prototype.toString=function(){return"Const{"+this.C+"}"};
g.zb={};g.Bb("");g.sca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.tca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Tj=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");g.Db.prototype.Td=!0;g.Db.prototype.Uc=function(){return this.C};
g.Db.prototype.Fl=!0;g.Db.prototype.og=function(){return 1};
var Fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Cb={};g.Gb("about:blank");g.Kb.prototype.Td=!0;g.Jb={};g.Kb.prototype.Uc=function(){return this.C};
g.Uj=g.Lb("");g.Vj=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.uca=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Nb.prototype.Td=!0;g.Mb={};g.Nb.prototype.Uc=function(){return this.C};
g.vca=g.Ob("");g.Qb.prototype.Fl=!0;g.Qb.prototype.og=function(){return this.F};
g.Qb.prototype.Td=!0;g.Qb.prototype.Uc=function(){return this.C};
var Pb={};g.Sb("<!DOCTYPE html>",0);g.Wj=g.Sb("",0);g.Xj=g.Sb("<br>",0);g.h=g.Xb.prototype;g.h.clone=function(){return new g.Xb(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Xb&&g.Yb(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.Xb?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.ta(b)&&(this.y+=b));return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.$b.prototype;g.h.clone=function(){return new g.$b(this.width,this.height)};
g.h.Nv=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Nv()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.width*=a;this.height*=c;return this};var bc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.Yj=g.nc(null);g.wca=g.oc(function(){return-1!=g.Ya.indexOf("Google Web Preview")||1E-4>Math.random()});g.Zj=window.document;g.ak=window;g.h=g.pc.prototype;g.h.clone=function(){return new g.pc(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Xb?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.Xb?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.ta(b)&&(this.top+=b));return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.bk=g.Ij?"MozUserSelect":g.Jj||g.Gj?"WebkitUserSelect":null;g.xca=Object.prototype.hasOwnProperty;g.ck=g.tc(window);g.dk=g.ck&&window.parent||window;g.ek=(new Date).getTime();g.h=g.wc.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ra(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.B)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Ua)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.ra(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Jc=function(){return g.xc(this).keys};
g.h.Fb=g.da(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Lb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.Nd=g.da(3);g.h.clear=function(){for(var a=g.xc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.yg=new g.wc("undefined"==typeof window.document?null:window.document);g.yg.F=3950;g.zc.prototype.Hc=!1;g.zc.prototype.pb=function(){return this.Hc};
g.zc.prototype.dispose=function(){this.Hc||(this.Hc=!0,this.X())};
g.zc.prototype.X=function(){if(this.Wb)for(;this.Wb.length;)this.Wb.shift()()};g.Dc.prototype.stopPropagation=function(){this.F=!0};
g.Dc.prototype.preventDefault=function(){this.gt=!1};var Uc,zca,vaa;g.yca=!g.C||g.yb(9);Uc=!g.C||g.yb(9);zca=g.C&&!g.wb("9");vaa=function(){if(!g.n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.n.addEventListener("test",g.ua,b);g.n.removeEventListener("test",g.ua,b);return a}();g.fk=g.Jj?"webkitTransitionEnd":g.Fj?"otransitionend":"transitionend";g.w(g.Fc,g.Dc);var Aca={2:"touch",3:"pen",4:"mouse"};
g.Fc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Ij&&(g.tb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Kj?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.sa(a.pointerType)?a.pointerType:Aca[a.pointerType]||"";this.state=a.state;this.zc=a;a.defaultPrevented&&
this.preventDefault()};
g.Fc.prototype.stopPropagation=function(){g.Fc.M.stopPropagation.call(this);this.zc.stopPropagation?this.zc.stopPropagation():this.zc.cancelBubble=!0};
g.Fc.prototype.preventDefault=function(){g.Fc.M.preventDefault.call(this);var a=this.zc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,zca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Gc="closure_listenable_"+(1E6*Math.random()|0),saa=0;g.h=g.Jc.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Lc(a,b,d,e);-1<k?(b=a[k],c||(b.gi=!1)):(b=new taa(b,this.src,f,!!d,e),b.gi=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Lc(e,b,c,d);return-1<b?(Ic(e[b]),g.Ka(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Ic(d[e]);delete this.listeners[c];this.C--}return b};
g.h.qg=g.da(5);g.h.uf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Lc(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.ra(a),d=c?a.toString():"",e=g.ra(b);return g.cb(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Rc="closure_lm_"+(1E6*Math.random()|0),Xc={},Tc=0,$c="__closure_events_fn_"+(1E9*Math.random()>>>0);g.w(g.ad,g.zc);g.ad.prototype[Gc]=!0;g.h=g.ad.prototype;g.h.Ii=function(){return this.qm};
g.h.Fh=g.da(6);g.h.addEventListener=function(a,b,c,d){g.Nc(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Vc(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Ii();if(b){var c=[];for(var d=1;b;b=b.Ii())c.push(b),++d}b=this.Bv;d=a.type||a;if(g.sa(a))a=new g.Dc(a,b);else if(a instanceof g.Dc)a.target=a.target||b;else{var e=a;a=new g.Dc(d,b);g.lb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=bd(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=bd(k,d,!0,a)&&e,a.F||(e=bd(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=bd(k,d,!1,a)&&e;return e};
g.h.X=function(){g.ad.M.X.call(this);this.removeAllListeners();this.qm=null};
g.h.O=function(a,b,c,d){return this.zd.add(String(a),b,!1,c,d)};
g.h.Re=function(a,b,c,d){return this.zd.add(String(a),b,!0,c,d)};
g.h.Wa=function(a,b,c,d){return this.zd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.zd?this.zd.removeAll(a):0};
g.h.qg=g.da(4);g.h.uf=function(a,b,c,d){return this.zd.uf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.zd.hasListener(g.ra(a)?String(a):void 0,b)};cd.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var md;var nd=new cd(function(){return new gd},function(a){a.reset()});
fd.prototype.add=function(a,b){var c=nd.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
fd.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
gd.prototype.set=function(a,b){this.mc=a;this.scope=b;this.next=null};
gd.prototype.reset=function(){this.next=this.scope=this.mc=null};var hd,id=!1,jd=new fd;sd.prototype.reset=function(){this.context=this.F=this.G=this.C=null;this.D=!1};
var td=new cd(function(){return new sd},function(a){a.reset()});
g.rd.prototype.then=function(a,b,c){return yd(this,g.Aa(a)?a:null,g.Aa(b)?b:null,c)};
g.od(g.rd);g.rd.prototype.cancel=function(a){0==this.C&&kd(function(){var b=new g.Fd(a);Ad(this,b)},this)};
g.rd.prototype.W=function(a){this.C=0;g.qd(this,2,a)};
g.rd.prototype.N=function(a){this.C=0;g.qd(this,3,a)};
g.rd.prototype.J=function(){for(var a;a=Bd(this);)Cd(this,a,this.C,this.R);this.L=!1};
var Hd=ed;g.w(g.Fd,g.Ea);g.Fd.prototype.name="cancel";g.w(g.Kd,g.zc);g.h=g.Kd.prototype;g.h.hb=0;g.h.X=function(){g.Kd.M.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.hb=g.Id(this.yc,g.ra(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Jd(this.hb);this.hb=0};
g.h.Ke=g.da(7);g.h.isActive=function(){return 0!=this.hb};
g.h.fp=function(){this.hb=0;this.C&&this.C.call(this.F)};g.gk=g.Za("Firefox");g.hk=qb()||g.Za("iPod");g.ik=g.Za("iPad");g.Bca=g.pb();g.jk=g.nb();g.kk=g.ob()&&!g.rb();var Ld,Nd;Ld=null;g.Md=null;Nd=null;g.w(Pd,Baa);Pd.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Pd.prototype.update=function(a,b){if(null!=a){g.ra(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)Qd(this,a,d),d+=this.F;if(g.sa(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){Qd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){Qd(this,e);f=0;break}}this.D=f;this.H+=b}};
Pd.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;Qd(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.Td="StopIteration"in g.n?g.n.StopIteration:{message:"StopIteration",stack:""};g.Sd.prototype.next=function(){throw g.Td;};
g.Sd.prototype.fd=function(){return this};g.h=g.Xd.prototype;g.h.Lb=function(){return this.D};
g.h.Fb=g.da(0);g.h.Jc=function(){g.Zd(this);return this.C.concat()};
g.h.Nd=g.da(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Lb())return!1;var c=b||Daa;g.Zd(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Ze=this.D=this.C.length=0};
g.h.remove=function(a){return g.Yd(this.F,a)?(delete this.F[a],this.D--,this.Ze++,this.C.length>2*this.D&&g.Zd(this),!0):!1};
g.h.get=function(a,b){return g.Yd(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.Yd(this.F,a)||(this.D++,this.C.push(a),this.Ze++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.Jc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.Xd(this)};
g.h.fd=function(a){g.Zd(this);var b=0,c=this.Ze,d=this,e=new g.Sd;e.next=function(){if(c!=d.Ze)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Td;var e=d.C[b++];return a?e:d.F[e]};
return e};var ce={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Faa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.w(g.de,g.zc);g.h=g.de.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.ud=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.ua):(c&&g.La(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Gaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.ud(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.y)(b,this.ud,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Lb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Lb(b);return a};
g.h.X=function(){g.de.M.X.call(this);this.clear();this.D.length=0};g.fe.prototype.set=function(a,b){g.ra(b)?this.C.set(a,g.ae(b)):this.C.remove(a)};
g.fe.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.fe.prototype.remove=function(a){this.C.remove(a)};g.w(ge,g.fe);ge.prototype.set=function(a,b){ge.M.set.call(this,a,ie(b))};
ge.prototype.F=function(a){a=ge.M.get.call(this,a);if(!g.ra(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ge.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ra(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.w(g.je,ge);g.je.prototype.set=function(a,b,c){if(b=ie(b)){if(c){if(c<(0,g.B)()){g.je.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.B)()}g.je.M.set.call(this,a,b)};
g.je.prototype.F=function(a,b){var c=g.je.M.F.call(this,a);if(c)if(!b&&g.ke(c))g.je.prototype.remove.call(this,a);else return c};g.w(le,Haa);le.prototype.Lb=function(){var a=0;g.Vd(this.fd(!0),function(){a++});
return a};
le.prototype.clear=function(){var a=Caa(this.fd(!0)),b=this;(0,g.y)(a,function(a){b.remove(a)})};g.w(g.me,le);g.h=g.me.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Lb=function(){return this.C.length};
g.h.fd=function(a){var b=0,c=this.C,d=new g.Sd;d.next=function(){if(b>=c.length)throw g.Td;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.w(g.ne,g.me);g.w(pe,le);var Iaa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},oe=null;g.h=pe.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(qe(a),b);re(this)};
g.h.get=function(a){a=this.C.getAttribute(qe(a));if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(qe(a));re(this)};
g.h.Lb=function(){return se(this).attributes.length};
g.h.fd=function(a){var b=0,c=se(this).attributes,d=new g.Sd;d.next=function(){if(b>=c.length)throw g.Td;var d=c[b++];if(a)return(0,window.decodeURIComponent)(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){for(var a=se(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);re(this)};g.w(te,le);te.prototype.set=function(a,b){this.F.set(this.C+a,b)};
te.prototype.get=function(a){return this.F.get(this.C+a)};
te.prototype.remove=function(a){this.F.remove(this.C+a)};
te.prototype.fd=function(a){var b=this.F.fd(!0),c=this,d=new g.Sd;d.next=function(){for(var d=b.next();d.substr(0,c.C.length)!=c.C;)d=b.next();return a?d.substr(c.C.length):c.F.get(d)};
return d};var Jaa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.ig=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.lk="Microsoft Internet Explorer"==window.navigator.appName;g.Fe=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.Fe,void 0);var Pe={};var Cca=g.r("ytPubsubPubsubInstance")||new g.de;g.de.prototype.subscribe=g.de.prototype.subscribe;g.de.prototype.unsubscribeByKey=g.de.prototype.ud;g.de.prototype.publish=g.de.prototype.oa;g.de.prototype.clear=g.de.prototype.clear;g.p("ytPubsubPubsubInstance",Cca,void 0);var Ve=g.r("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",Ve,void 0);var Xe=g.r("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",Xe,void 0);var We=g.r("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",We,void 0);var Laa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Maa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.bf=null;g.oa(kf,Naa);kf.prototype.start=function(){var a=g.r("yt.scheduler.instance.start");a&&a()};
kf.prototype.pause=function(){var a=g.r("yt.scheduler.instance.pause");a&&a()};
g.va(kf);kf.getInstance();(0,g.B)();var nf=g.ra(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.ra(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var uf,yf;uf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};yf=!1;g.mk=zf;Df.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.pd(a)?a:g.Ff(a)):2===this.F&&b?(a=b.call(c,this.C),g.pd(a)?a:g.Ef(a)):this};
Df.prototype.getValue=function(){return this.C};
g.od(Df);var Dca=0,Saa=g.Jj?"webkit":g.Ij?"moz":g.C?"ms":g.Fj?"o":"",Gf=g.r("ytDomDomGetNextId")||function(){return++Dca};
g.p("ytDomDomGetNextId",Gf,void 0);var Taa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Jf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Jf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Jf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Nf=g.r("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",Nf,void 0);var Pf=g.r("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",Pf,void 0);g.w(g.Sf,g.zc);g.Sf.prototype.W=function(a){this.C=new g.Xb(g.Lf(a),g.Mf(a))};
g.Sf.prototype.R=function(){if(this.C){var a=g.ig();if(0!=this.D){var b=g.Zb(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.yc();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.Sf.prototype.X=function(){g.Te(this.N);g.K(this.J)};g.oa(Tf,g.zc);Tf.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.ig);break}};
Tf.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.ig)}g.zc.prototype.X.call(this)};var Uaa={enablejsapi:1},Vaa={},Waa={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};Uf.prototype.clone=function(){var a=new Uf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.wa(c)?a[b]=g.jb(c):a[b]=c}return a};var Xf={},Wf=0;var Yaa,Xaa,lg,ag;Yaa=Math.pow(2,16)-1;Xaa={log_event:"events",log_interaction:"interactions"};lg=Object.create(null);lg.log_event="GENERIC_EVENT_LOGGING";lg.log_interaction="INTERACTION_LOGGING";ag={};g.fg=0;g.gg=g.r("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.gg,void 0);var Zf=g.r("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",Zf,void 0);var hg=g.r("ytLoggingTransportDispatchedStats_")||{};
g.p("ytLoggingTransportDispatchedStats_",hg,void 0);var mg=g.r("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",mg,void 0);var sg={};g.Bg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.B)()+1E3*c);return}catch(f){}var e="";if(d)try{e=(0,window.escape)(g.ae(b))}catch(f){return}else e=(0,window.escape)(b);g.zg(a,e,c,this.F)};
g.Bg.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.yg.get(""+a,void 0))&&(c=(0,window.unescape)(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.Bg.prototype.remove=function(a){this.C&&this.C.remove(a);g.Ag(a,"/",this.F)};var Cg=new g.Bg("yt.innertube");var Mg=g.r("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",Mg,void 0);var Ng=0;var Og=(0,g.B)().toString();var Sg;g.Rg=Pg();Sg=0;g.Qg=null;g.h=g.Xg.prototype;g.h.eL=function(){this.hj()||this.init()};
g.h.enable=function(){this.C=1;(0,g.y)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.eL,this),this.subscribe("dispose-"+a,this.dispose,this),g.D("PAGE_NAME")==a&&g.Yg(this))},this)};
g.h.init=function(){g.hf(this.F);this.C=2;this.L&&this.L()};
g.h.hj=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.hf(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Ie(a)}};
g.h.subscribe=function(a,b,c){a=g.F(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.Ye(this.G);this.G=[]};var Zg=g.r("yt.modules.registry_")||{};g.p("yt.modules.registry_",Zg,void 0);g.bh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.bh,void 0);var gh={},dba=0;var eba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.nh.prototype.toString=function(){return this.topic};var Eca=g.r("ytPubsub2Pubsub2Instance")||new g.de;g.de.prototype.subscribe=g.de.prototype.subscribe;g.de.prototype.unsubscribeByKey=g.de.prototype.ud;g.de.prototype.publish=g.de.prototype.oa;g.de.prototype.clear=g.de.prototype.clear;g.p("ytPubsub2Pubsub2Instance",Eca,void 0);g.nk=g.r("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.nk,void 0);g.ok=g.r("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.ok,void 0);
g.pk=g.r("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.pk,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var qh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.oa(th,g.mh);g.oa(uh,g.mh);var iba=new g.nh("aft-recorded",th),mba=new g.nh("timing-sent",uh);var kba={vc:!0},Xh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},Wh={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",
yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},oba="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
rba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
"video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"},nba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),Ph=!1,vh=!1,hba=(0,g.t)(qh.clearResourceTimings||qh.webkitClearResourceTimings||
qh.mozClearResourceTimings||qh.msClearResourceTimings||qh.oClearResourceTimings||g.ua,qh);g.oa(ci,g.zc);g.h=ci.prototype;
g.h.Yl=function(a){this.pb()||(this.nb=a=g.Vf(a),this.C=a.clone(),this.F=this.C.attrs.id||this.F,"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N),this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F),this.C.args.enablejsapi="1",this.C.args.playerapiid=this.N,this.ka||(this.ka=ki(this,this.C.args.jsapicallback||"onYouTubePlayerReady")),this.C.args.jsapicallback=null,(a=this.C.attrs.width)&&g.sc(this.H,Number(a)||a),(a=this.C.attrs.height)&&g.rc(this.H,Number(a)||a),sba(this),
this.L&&di(this))};
g.h.bx=function(){return this.nb};
g.h.yC=function(){return this.L};
g.h.Uh=function(a,b){var c=this,d=ki(this,b);if(d){if(!g.Ia(this.wb,a)&&!this.D[a]){var e=uba(this,a);this.W&&this.W(a,e)}this.R.subscribe(a,d);"onReady"==a&&this.L&&g.Qe(function(){d(c.api)},0)}};
g.h.RK=function(a,b){if(!this.pb()){var c=ki(this,b);c&&g.ee(this.R,a,c)}};
g.h.Av=function(a){g.H("a11y-announce",a)};
g.h.CG=function(a){g.H("WATCH_LATER_VIDEO_ADDED",a)};
g.h.DG=function(a){g.H("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Sx=function(){return this.ma||(ei(this)?"html5":null)};
g.h.Ax=function(){return this.eb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.$e(this.C.assets.js);window.spf.script.ignore(b,a)}g.Se(this.rb);this.V=!1};
g.h.X=function(){hi(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Ie(b)}this.Ta=null;for(var a in this.D)g.n[this.D[a]]=null;this.nb=this.C=this.api=null;delete this.qa;delete this.H;g.zc.prototype.X.call(this)};g.mi={};g.li="player_uid_"+(1E9*Math.random()>>>0);var ti=null;g.qk=window.performance&&window.performance.memory;g.ej={};var Ci=0,xi=[],Bi=[],ui=0,yi={},Ai={},vi=new g.Kd(Dba,1E3);var Fba=["server_prefetched_vast","vmap"];var Fi,Ki;g.Ji=null;Ki="";var Mi=null,Pi=[];var Ti,kj,jj,Vi,Ui,Lba,Oba,Mba,Nba,fj;Vi=0;Ui=0;Lba=[900,60,"waiting"];Oba=[500,99,"waiting"];Mba=[300,60,"waiting"];Nba=[400,99,"waiting"];fj=[300,101,"done"];var rj=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.Ge,void 0);g.p("yt.pushConfigArray",He,void 0);g.p("yt.getConfig",g.D,void 0);g.p("yt.config.set",g.Ge,void 0);g.p("yt.config.pushArray",He,void 0);g.p("yt.config.get",g.D,void 0);g.p("yt.hasMsg",g.dh,void 0);g.p("yt.setMsg",ch,void 0);g.p("yt.setGoogMsg",eh,void 0);g.p("yt.msgs.has",g.dh,void 0);g.p("yt.msgs.set",ch,void 0);g.p("yt.msgs.setGoog",eh,void 0);g.p("yt.pubsub.publish",g.H,void 0);g.p("yt.pubsub.subscribe",g.F,void 0);
g.p("ytcsi.tick",g.Ih,void 0);g.w(uj,g.Xg);
uj.prototype.enable=function(){window.onload=Jba;window.onunload=Kba;window.onerror=Kaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Ri),window.addEventListener("spfhistory",Si),window.addEventListener("spfrequest",Xi),window.addEventListener("spfpartprocess",aj),window.addEventListener("spfpartdone",bj),window.addEventListener("spfprocess",cj),window.addEventListener("spfdone",gj),window.addEventListener("spferror",hj),window.addEventListener("spfreload",
ij),window.addEventListener("spfjsbeforeunload",vj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Qba),this.subscribe("dispose",Rba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
uj.prototype.init=function(){uj.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.D("PAGEFRAME_JS")){var b=g.D("PAGEFRAME_JS",void 0);var c=function(){var a=g.r("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.r("yt.www.masthead.loadSearchbox"))&&a();
a=g.D("JS_COMMON_MODULE");var d=g.D("JS_PAGE_MODULES");d||(d=[a]);a=g.D("JS_DELAY_LOAD",0);0<a?(g.Se(this.D),this.D=g.Qe(function(){b&&g.af(b,c);window.spf.script.require(d)},a)):(b&&g.af(b,c),window.spf.script.require(d));
g.p("yt.abuse.botguardInitialized",g.cf,void 0);g.p("yt.abuse.invokeBotguard",g.df,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",g.mf,void 0);g.p("yt.player.exports.navigate",g.lh,void 0);g.p("yt.util.activity.init",g.rg,void 0);g.p("yt.util.activity.getTimeSinceActive",g.tg,void 0);g.p("yt.util.activity.setTimestamp",g.pg,void 0);Li(g.r("ytplayer.config"));g.r("ytspf.enabled")&&Hba();gba();g.D("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.Me("service_worker_enabled")?fca():dca())};
uj.prototype.dispose=function(){g.Se(this.D);var a=g.r("ytbin.www.pageframe.cancelSetup");a&&a();g.Te(Fi);if(a=g.Hi())a.removeEventListener("onReady",Gi),a.removeEventListener("onStateChange",Gi);Ch(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.E(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.Rf(a);uj.M.dispose.call(this)};
uj.prototype.disable=function(){uj.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Ri),window.removeEventListener("spfhistory",Si),window.removeEventListener("spfrequest",Xi),window.removeEventListener("spfpartprocess",aj),window.removeEventListener("spfpartdone",bj),window.removeEventListener("spfprocess",cj),window.removeEventListener("spfdone",gj),window.removeEventListener("spferror",hj),window.removeEventListener("spfreload",ij),window.removeEventListener("spfjsbeforeunload",
vj));window.onload=null;window.onunload=null;window.onerror=null};
g.ah(new uj);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:04:00 Mar 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:36:17 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 359.748
  exclusion.robots: 0.123
  exclusion.robots.policy: 0.11
  cdx.remote: 0.075
  esindex: 0.013
  LoadShardBlock: 257.182 (3)
  PetaboxLoader3.datanode: 215.295 (5)
  load_resource: 170.507 (2)
  PetaboxLoader3.resolve: 154.157 (2)
*/