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

var _yt_www={};(function(g){var window=this;var da,ia,ha,ja,baa,oa,pa,daa,eaa,Va,ob,naa,sb,paa,rc,qaa,raa,sc,saa,uaa,Ec,Gc,Hc,Lc,vaa,Oc,Vc,Uc,xaa,Yc,Zc,$c,ad,yaa,bd,cd,gd,zaa,hd,od,wd,ud,rd,Baa,zd,xd,yd,Cd,Aaa,Kd,Caa,Daa,Md,Od,Faa,Td,Ud,Vd,Gaa,ce,me,ne,qe,te,Iaa,ve,Ee,Ne,Laa,Te,We,Maa,Naa,Oaa,df,ef,Paa,kf,hf,ff,mf,tf,Cf,Df,Waa,Lf,ag,$f,Xaa,ng,mg,Yaa,rg,$aa,bba,Kg,Lg,Mg,Ng,Qg,Rg,Xg,Wg,$g,ah,bh,eba,eh,ih,iba,Tg,Zg,hh,nh,lba,mba,gh,qh,kh,Sg,Yg,jh,rh,Og,ch,Pg,gba,th,uh,wh,oba,vh,xh,pba,Ah,sh,Bh,qba,yh,zh,rba,Hh,Lh,Oh,Qh,Th,Zh,sba,yba,xba,wba,ei,
vba,tba,uba,zba,Aba,Cba,Dba,si,ni,pi,ui,Eba,vi,xi,Fba,Gba,yi,zi,Fi,Ji,Ki,Li,Pi,Qi,Ri,Mba,Nba,Gi,Ii,Ei,Lba,Hi,Vi,Xi,Ui,Yi,Wi,Oba,Sba,Pba,Vba,Rba,Qba,Tba,Uba,Xba,aj,Wba,Zi,Yba,$ba,bca,aca,Zba,bj,cj,dj,fa,ea,aaa,la,ej,Ba,caa;g.ca=function(a){return function(){return g.aa[a].apply(this,arguments)}};
da=function(){da=function(){};
ea.Symbol||(ea.Symbol=aaa)};
ia=function(){da();var a=ea.Symbol.iterator;a||(a=ea.Symbol.iterator=ea.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&fa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(this)}});
ia=function(){}};
ha=function(a){var b=0;return ja(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
ja=function(a){ia();a={next:a};a[ea.Symbol.iterator]=function(){return this};
return a};
g.ka=function(a){ia();var b=a[window.Symbol.iterator];return b?b.call(a):ha(a)};
g.na=function(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
baa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
oa=function(a,b){if(b){for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&fa(c,d,{configurable:!0,writable:!0,value:f})}};
pa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ra=function(a){return void 0!==a};
g.sa=function(a){return"string"==typeof a};
g.ta=function(a){return"number"==typeof a};
g.p=function(a,b,c){a=a.split(".");c=c||g.n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ra(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.r=function(a,b){for(var c=a.split("."),d=b||g.n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.ua=function(){};
g.va=function(a){a.Cc=void 0;a.getInstance=function(){return a.Cc?a.Cc:a.Cc=new a}};
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
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Qv=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
g.Da=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Da);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Fa=function(a,b,c){b=g.Ea(a,b,c);return 0>b?null:g.sa(a)?a.charAt(b):a[b]};
g.Ea=function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ha=function(a,b){return 0<=(0,g.Ga)(a,b)};
g.Ia=function(a){return 0==a.length};
g.Ka=function(a,b){var c=(0,g.Ga)(a,b),d;(d=0<=c)&&g.Ja(a,c);return d};
g.Ja=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.La=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Ma=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.ya(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Na=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Oa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Pa=function(a){return/^[\s\xa0]*$/.test(a)};
g.Ra=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Sa=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ta=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Wa=function(a,b){for(var c=0,d=(0,g.Ua)(String(a)).split("."),e=(0,g.Ua)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Va(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||Va(0==l[2].length,0==m[2].length)||Va(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Va=function(a,b){return a<b?-1:a>b?1:0};
g.Xa=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.Za=function(a){return-1!=g.Ya.indexOf(a)};
g.ab=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.bb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
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
sb=function(){var a=g.n.document;return a?a.documentMode:void 0};
g.ub=function(a){return naa(a,function(){return 0<=g.Wa(g.tb,a)})};
g.wb=function(a){return Number(g.vb)>=a};
g.yb=function(){this.C="";this.F=g.xb};
g.zb=function(a){var b=new g.yb;b.C=a;return b};
g.Bb=function(){this.C="";this.F=Ab};
g.Cb=function(a){if(a instanceof g.Bb&&a.constructor===g.Bb&&a.F===Ab)return a.C;g.wa(a);return"type_error:SafeUrl"};
g.Fb=function(a){if(a instanceof g.Bb)return a;a=a.Td?a.Vc():String(a);Db.test(a)||(a="about:invalid#zClosurez");return g.Eb(a)};
g.Gb=function(a){if(a instanceof g.Bb)return a;a=a.Td?a.Vc():String(a);Db.test(a)||(a="about:invalid#zClosurez");return g.Eb(a)};
g.Eb=function(a){var b=new g.Bb;b.C=a;return b};
g.Ib=function(){this.C="";this.F=g.Hb};
g.Jb=function(a){var b=new g.Ib;b.C=a;return b};
g.Lb=function(){this.C="";this.F=g.Kb};
g.Mb=function(a){var b=new g.Lb;b.C=a;return b};
g.Ob=function(){this.C="";this.D=Nb;this.F=null};
g.Pb=function(a){if(a instanceof g.Ob&&a.constructor===g.Ob&&a.D===Nb)return a.C;g.wa(a);return"type_error:SafeHtml"};
g.Rb=function(a){if(a instanceof g.Ob)return a;var b=null;a.El&&(b=a.og());a=g.Ta(a.Td?a.Vc():String(a));return g.Qb(a,b)};
g.Qb=function(a,b){var c=new g.Ob;c.C=a;c.F=b;return c};
g.Sb=function(a,b){var c=b instanceof g.Bb?b:g.Gb(b);a.href=g.Cb(c)};
g.Tb=function(a,b){var c=b instanceof g.Bb?b:g.Gb(b);a.href=g.Cb(c)};
g.Ub=function(a,b){return g.Qb(b,null)};
g.Vb=function(a,b){this.x=g.ra(a)?a:0;this.y=g.ra(b)?b:0};
g.Wb=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Xb=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.Yb=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.sa(a)?window.document.getElementById(a):a};
g.Zb=function(a){var b=window.document;return g.sa(a)?b.getElementById(a):a};
g.ac=function(a,b){g.ab(b,function(b,d){b&&b.Td&&(b=b.Vc());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:$b.hasOwnProperty(d)?a.setAttribute($b[d],b):g.Na(d,"aria-")||g.Na(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.cc=function(a){return g.bc(a||window)};
g.bc=function(a){a=a.document;a=g.dc(a)?a.documentElement:a.body;return new g.Yb(a.clientWidth,a.clientHeight)};
g.fc=function(a,b,c){return g.ec(window.document,arguments)};
g.ec=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ta(d.name),'"');if(d.type){c.push(' type="',g.Ta(d.type),'"');var e={};g.jb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.sa(d)?c.className=d:g.xa(d)?c.className=d.join(" "):g.ac(c,d));2<b.length&&g.gc(a,c,b,2);return c};
g.gc=function(a,b,c,d){function e(c){c&&b.appendChild(g.sa(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.ya(f)||g.Aa(f)&&0<f.nodeType?e(f):(0,g.y)(paa(f)?g.La(f):f,e)}};
g.dc=function(a){return"CSS1Compat"==a.compatMode};
g.hc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.ic=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.jc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Aa(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.za(a))return"function"==typeof a.item}return!1};
g.kc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.lc=function(a){return function(){return a}};
g.mc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.nc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.oc=function(a,b){a.style.height=g.nc(b,!0)};
g.pc=function(a,b){a.style.width=g.nc(b,!0)};
g.qc=function(a){return!!a.google_async_iframe_id};
rc=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
qaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=q=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var q=l^d&(f^l);var w=1518500249}else q=d^f^l,w=1859775393;else 60>c?(q=d&f|l&(d|f),w=2400959708):(q=d^f^l,w=3395469782);q=((a<<5|a>>>27)&4294967295)+q+m+w+b[c]&4294967295;m=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=q}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==q)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[q++]=a[d++],w++,64==q)for(q=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>q?c(l,56-q):c(l,64-(q-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,w;a();return{reset:a,update:c,digest:d,pw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
raa=function(a,b,c){var d=[],e=[];if(1==(g.xa(c)?2:1))return e=[b,a],(0,g.y)(d,function(a){e.push(a)}),sc(e.join(" "));
var f=[],k=[];(0,g.y)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ia(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.y)(d,function(a){e.push(a)});
a=sc(e.join(" "));a=[c,a];g.Ia(k)||a.push(k.join(""));return a.join("_")};
sc=function(a){var b=qaa();b.update(a);return b.pw().toLowerCase()};
g.tc=function(a){this.C=a||{cookie:""}};
g.uc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Ua)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
saa=function(){var a=[],b=rc(String(g.n.location.href)),c=g.n.__OVERRIDE_SID;null==c&&(c=(new g.tc(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.n.__SAPISID:g.n.__APISID,null==b&&(b=(new g.tc(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.n.location.href);return d&&b&&c?[c,raa(rc(d),b,a||null)].join(" "):null}return null};
g.vc=function(){this.Jc=this.Jc;this.Wb=this.Wb};
g.yc=function(a,b){g.wc(a,g.u(g.xc,b))};
g.wc=function(a,b){a.Jc?g.ra(void 0)?b.call(void 0):b():(a.Wb||(a.Wb=[]),a.Wb.push(g.ra(void 0)?(0,g.t)(b,void 0):b))};
g.xc=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.zc=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.bt=!0};
g.Ac=function(a){var b=g.r("window.location.href");if(g.sa(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.n.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.Bc=function(a,b){g.zc.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.Ac=null;a&&this.init(a,b)};
g.Dc=function(a){return!(!a||!a[Cc])};
uaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.nh=e;this.key=++taa;this.Eg=this.gi=!1};
Ec=function(a){a.Eg=!0;a.listener=null;a.C=null;a.src=null;a.nh=null};
g.Fc=function(a){this.src=a;this.listeners={};this.C=0};
Gc=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Ka(a.listeners[c],b);d&&(Ec(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Hc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Eg&&f.listener==b&&f.capture==!!c&&f.nh==d)return e}return-1};
g.Jc=function(a,b,c,d,e){if(d&&d.once)return g.Ic(a,b,c,d,e);if(g.xa(b)){for(var f=0;f<b.length;f++)g.Jc(a,b[f],c,d,e);return null}c=g.Kc(c);return g.Dc(a)?a.O(b,c,g.Aa(d)?!!d.capture:!!d,e):Lc(a,b,c,!1,d,e)};
Lc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Aa(e)?!!e.capture:!!e,l=g.Mc(a);l||(a[Nc]=l=new g.Fc(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=vaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)waa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Oc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Pc++;return c};
vaa=function(){var a=xaa,b=Qc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Ic=function(a,b,c,d,e){if(g.xa(b)){for(var f=0;f<b.length;f++)g.Ic(a,b[f],c,d,e);return null}c=g.Kc(c);return g.Dc(a)?a.Se(b,c,g.Aa(d)?!!d.capture:!!d,e):Lc(a,b,c,!0,d,e)};
g.Rc=function(a,b,c,d,e){if(g.xa(b))for(var f=0;f<b.length;f++)g.Rc(a,b[f],c,d,e);else d=g.Aa(d)?!!d.capture:!!d,c=g.Kc(c),g.Dc(a)?a.Wa(b,c,d,e):a&&(a=g.Mc(a))&&(b=a.vf(b,c,d,e))&&g.Sc(b)};
g.Sc=function(a){if(g.ta(a)||!a||a.Eg)return!1;var b=a.src;if(g.Dc(b))return Gc(b.Ad,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Oc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Pc--;(c=g.Mc(b))?(Gc(c,a),0==c.C&&(c.src=null,b[Nc]=null)):Ec(a);return!0};
Oc=function(a){return a in Tc?Tc[a]:Tc[a]="on"+a};
Vc=function(a,b,c,d){var e=!0;if(a=g.Mc(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Eg&&(f=Uc(f,d),e=e&&!1!==f)}return e};
Uc=function(a,b){var c=a.listener,d=a.nh||a.src;a.gi&&g.Sc(a);return c.call(d,b)};
xaa=function(a,b){if(a.Eg)return!0;if(!Qc){var c=b||g.r("window.event"),d=new g.Bc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Vc(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Vc(c[k],f,!1,d),e=e&&l}return e}return Uc(a,new g.Bc(b,
this))};
g.Mc=function(a){a=a[Nc];return a instanceof g.Fc?a:null};
g.Kc=function(a){if(g.za(a))return a;a[Wc]||(a[Wc]=function(b){return a.handleEvent(b)});
return a[Wc]};
g.Xc=function(){g.vc.call(this);this.Ad=new g.Fc(this);this.yv=this;this.pm=null};
Yc=function(a,b,c,d){b=a.Ad.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Eg&&k.capture==c){var l=k.listener,m=k.nh||k.src;k.gi&&Gc(a.Ad,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.bt};
Zc=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
$c=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
ad=function(a){g.n.setTimeout(function(){throw a;},0)};
yaa=function(){var a=g.n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Za("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.kb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ra(c.next)){c=c.next;var a=c.Tn;c.Tn=null;a()}};
return function(a){d.next={Tn:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.n.setTimeout(a,0)}};
bd=function(){this.F=this.C=null};
cd=function(){this.next=this.scope=this.qc=null};
gd=function(a,b){dd||zaa();ed||(dd(),ed=!0);fd.add(a,b)};
zaa=function(){if(-1!=String(g.n.Promise).indexOf("[native code]")){var a=g.n.Promise.resolve(void 0);dd=function(){a.then(hd)}}else dd=function(){var a=hd;
!g.za(g.n.setImmediate)||g.n.Window&&g.n.Window.prototype&&!g.Za("Edge")&&g.n.Window.prototype.setImmediate==g.n.setImmediate?(id||(id=yaa()),id(a)):g.n.setImmediate(a)}};
hd=function(){for(var a;a=fd.remove();){try{a.qc.call(a.scope)}catch(b){ad(b)}$c(jd,a)}ed=!1};
g.kd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.ld=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.nd=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.ua)try{var c=this;a.call(b,function(a){g.md(c,2,a)},function(a){g.md(c,3,a)})}catch(d){g.md(this,3,d)}};
od=function(){this.next=this.context=this.F=this.G=this.C=null;this.D=!1};
g.qd=function(a,b,c){var d=pd.get();d.G=a;d.F=b;d.context=c;return d};
g.sd=function(a,b,c){rd(a,b,c,null)||gd(g.u(b,a))};
g.td=function(a){return new g.nd(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],g.sd(m,g.u(f,l),k);
else b(e)})};
g.vd=function(a,b){return ud(a,null,b,void 0)};
wd=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?wd(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):xd(c),yd(c,e,3,b)))}a.D=null}else g.md(a,3,b)};
g.Ad=function(a,b){a.F||2!=a.C&&3!=a.C||zd(a);a.G?a.G.next=b:a.F=b;a.G=b};
ud=function(a,b,c,d){var e=g.qd(null,null,null);e.C=new g.nd(function(a,k){e.G=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){k(q)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.ra(e)&&b instanceof g.Bd?k(b):a(e)}catch(q){k(q)}}:k});
e.C.D=a;g.Ad(a,e);return e.C};
g.md=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,rd(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,zd(a),3!=b||c instanceof g.Bd||Aaa(a,c)))};
rd=function(a,b,c,d){if(a instanceof g.nd)return g.Ad(a,g.qd(b||g.ua,c||null,d)),!0;if(g.ld(a))return a.then(b,c,d),!0;if(g.Aa(a))try{var e=a.then;if(g.za(e))return Baa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Baa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
zd=function(a){a.L||(a.L=!0,gd(a.J,a))};
xd=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
yd=function(a,b,c,d){if(3==c&&b.F&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Cd(b,c,d);else try{b.D?b.G.call(b.context):Cd(b,c,d)}catch(e){Dd.call(null,e)}$c(pd,b)};
Cd=function(a,b,c){2==b?a.G.call(a.context,c):a.F&&a.F.call(a.context,c)};
Aaa=function(a,b){a.H=!0;gd(function(){a.H&&Dd.call(null,b)})};
g.Bd=function(a){g.Da.call(this,a)};
g.Ed=function(a,b,c){if(g.za(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.n.setTimeout(a,b||0)};
g.Fd=function(a){g.n.clearTimeout(a)};
g.Gd=function(a,b,c){g.vc.call(this);this.C=a;this.D=b||0;this.F=c;this.zc=(0,g.t)(this.ep,this)};
g.Hd=function(a){if(a.classList)return a.classList;a=a.className;return g.sa(a)&&a.match(/\S+/g)||[]};
g.A=function(a,b){return a.classList?a.classList.contains(b):g.Ha(g.Hd(a),b)};
g.Id=function(){};
Kd=function(a){if(a instanceof g.Id)return a;if("function"==typeof a.hd)return a.hd(!1);if(g.ya(a)){var b=0,c=new g.Id;c.next=function(){for(;;){if(b>=a.length)throw g.Jd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Ld=function(a,b,c){if(g.ya(a))try{(0,g.y)(a,b,c)}catch(d){if(d!==g.Jd)throw d;}else{a=Kd(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Jd)throw d;}}};
Caa=function(a){if(g.ya(a))return g.La(a);a=Kd(a);var b=[];g.Ld(a,function(a){b.push(a)});
return b};
g.Nd=function(a){var b=[];Md(new Daa,a,b);return b.join("")};
Daa=function(){};
Md=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.xa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Md(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Od(d,c),c.push(":"),Md(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Od(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Od=function(a,b){b.push('"',a.replace(Eaa,function(a){var b=Pd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Pd[a]=b);return b}),'"')};
g.Qd=function(a){g.vc.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.Rd=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Fa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.vd(b)}};
Faa=function(a,b,c){gd(function(){a.apply(b,c)})};
g.Sd=function(a){this.C=a};
Td=function(a){this.C=a};
Ud=function(a){this.data=a};
Vd=function(a){return!g.ra(a)||a instanceof Ud?a:new Ud(a)};
g.Wd=function(a){this.C=a};
g.Yd=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Xd)()||!!b&&b>(0,g.Xd)()};
g.Zd=function(a){this.C=a};
Gaa=function(){};
g.$d=function(){};
g.ae=function(a){this.C=a};
g.be=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
ce=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.C=a};
g.de=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.ee=function(a){return a.match(Haa)};
g.fe=function(a){return a?(0,window.decodeURI)(a):a};
g.ge=function(a){return g.fe(g.ee(a)[3]||null)};
g.he=function(a){a=g.ee(a);return g.de(null,null,null,null,a[5],a[6],a[7])};
g.ie=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.je=function(a,b,c){if(g.xa(b))for(var d=0;d<b.length;d++)g.je(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ra(b)))};
g.ke=function(a){var b=[],c;for(c in a)g.je(c,a[c],b);return b.join("&")};
g.le=function(a,b){var c=g.ke(b);return g.ie(a,c)};
me=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
ne=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.pe=function(a){ne(g.oe,arguments)};
qe=function(a,b){var c=g.B(a,void 0);c?c.push(b):g.pe(a,[b])};
g.B=function(a,b){return a in g.oe?g.oe[a]:b};
te=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.se(b)}}:a};
g.se=function(a,b,c,d,e){var f=g.r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.B("ERRORS",[]),f.push([a,b,c,d,e]),g.pe("ERRORS",f))};
g.ue=function(a){g.se(a,"WARNING",void 0,void 0,void 0)};
Iaa=function(a,b,c,d,e){var f=!1,k;if((k=(k=g.oe.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.sa(a)?f=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.se(e))};
g.we=function(a){return!!ve(a)};
g.xe=function(a){return Number(ve(a)||0)};
ve=function(a){return g.B("EXPERIMENT_FLAGS",{})[a]};
g.C=function(a,b){return a?a.dataset?a.dataset[g.ye(b)]:a.getAttribute("data-"+b):null};
g.ye=function(a){return ze[a]||(ze[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Ae=function(a,b){g.za(a)&&(a=te(a));return window.setTimeout(a,b)};
g.Be=function(a,b){g.za(a)&&(a=te(a));return window.setInterval(a,b)};
g.Ce=function(a){window.clearTimeout(a)};
g.De=function(a){window.clearInterval(a)};
g.D=function(a,b,c){var d=Ee();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Fe[e]&&b.apply(c||window,d)};
try{Ge[a]?k():g.Ae(k,0)}catch(l){g.se(l)}},c);
Fe[e]=!0;He[a]||(He[a]=[]);He[a].push(e);return e}return 0};
g.Ie=function(a){var b=Ee();b&&(g.ta(a)?a=[a]:g.sa(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.y)(a,function(a){b.unsubscribeByKey(a);delete Fe[a]}))};
g.E=function(a,b){var c=Ee();return c?c.publish.apply(c,arguments):!1};
g.Je=function(a,b){Ge[a]=!0;var c=Ee();c=c?c.publish.apply(c,arguments):!1;Ge[a]=!1;return c};
Ee=function(){return g.r("ytPubsubPubsubInstance")};
g.Le=function(a,b){var c=g.Ke(a);window.spf.script.load(a,c,b)};
g.Ke=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Jaa,""),b=b.replace(Kaa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
Ne=function(){return null!=g.Me};
g.Oe=function(){return g.Me?g.Me.invoke():null};
Laa=function(){};
g.Qe=function(a,b){return g.Pe(a,1,b)};
g.Se=function(a){for(var b=0,c=a.length;b<c;b++)g.Re(a[b])};
Te=function(){};
g.Ue=function(){return!!g.r("yt.scheduler.instance")};
g.Pe=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Ae(a,c||0)};
g.Re=function(a){if(!(0,window.isNaN)(a)){var b=g.r("yt.scheduler.instance.cancelJob");b?b(a):g.Ce(a)}};
We=function(){return(0,window.parseInt)(g.B("DCLKSTAT",0),10)};
Maa=function(){if(!Xe)return null;var a=Xe();return"open"in a?a:null};
g.Ze=function(a){switch(g.Ye(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Ye=function(a){return a&&"status"in a?a.status:-1};
g.$e=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Sa(e[0]||"");e=g.Sa(e[1]||"");f in b?g.xa(b[f])?g.Ma(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.bf=function(a,b){return g.af(a,b||{},!0)};
g.af=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.$e(e[1]||"");for(var f in b)if(c||!g.cb(e,f))e[f]=b[f];return g.le(a,e)+d};
Naa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.ee(a)[1]||null,e=g.ge(a);d&&e?(d=c,c=g.ee(a),d=g.ee(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.ge(c)==e&&(Number(g.ee(c)[4]||null)||null)==(Number(g.ee(a)[4]||null)||null):!0;for(var f in cf){if((e=d=g.B(cf[f]))&&!(e=c)){e=f;var k=g.B("CORS_HEADER_WHITELIST")||{},l=g.ge(a);e=l?(k=k[l])?g.Ha(k,e):!1:!0}e&&(b[f]=d)}return b};
Oaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=df(a,b);var d=ef(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.Ce(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.n;c?b.Z&&b.Z.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ab&&b.ab.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.yr&&0<b.timeout&&(f=g.Ae(function(){e||(e=!0,g.Ce(f),b.yr.call(b.context||g.n))},b.timeout))}else g.F(a,b)};
g.F=function(a,b){var c=b.format||"JSON";a=df(a,b);var d=ef(a,b),e=!1,f,k=ff(a,function(a){if(!e){e=!0;f&&g.Ce(f);var d=g.Ze(a),k=null;if(d||400<=a.status&&500>a.status)k=Paa(c,a,b.ob);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.n;d?b.Z&&b.Z.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.ab&&b.ab.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.jc&&0<b.timeout&&(f=g.Ae(function(){e||(e=!0,k.abort(),g.Ce(f),b.jc.call(b.context||g.n,k))},b.timeout));
return k};
df=function(a,b){b.vB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.B("XSRF_FIELD_NAME",void 0),d=b.ua;d&&(d[c]&&delete d[c],a=g.bf(a,d));return a};
ef=function(a,b){var c=g.B("XSRF_FIELD_NAME",void 0),d=g.B("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.B("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Hw||g.ge(a)&&!b.withCredentials&&g.ge(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&g.sa(e)&&(e=g.$e(e),g.jb(e,f),e=b.As&&"JSON"==b.As?JSON.stringify(e):g.ke(e));f=e||f&&!g.eb(f);!gf&&f&&"POST"!=b.method&&(gf=!0,g.se(Error("AJAX request with postData should use POST")));
return e};
Paa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?hf(b):null)d={},(0,g.y)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.jf(a)})}c&&kf(d);
return d};
kf=function(a){if(g.Aa(a))for(var b in a)"html_content"==b||g.Oa(b,"_html")?a[b]=g.Ub(g.zb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):kf(a[b])};
hf=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.jf=function(a){var b="";(0,g.y)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.lf=function(a,b){b.method="POST";b.ia||(b.ia={});return g.F(a,b)};
ff=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&te(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Maa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof window.FormData));if(e=Naa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
mf=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.nf=function(a){var b=new mf;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.of=function(a){var b=new mf;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.qf=function(a){var b=a.__yt_uid_key;b||(b=pf(),a.__yt_uid_key=b);return b};
g.rf=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Qaa+"VisibilityState";if(b in a)return a[b]};
g.sf=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Raa||(this[b]=a[b]);this.scale=a.scale;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=
null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
tf=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.uf=function(a){g.ra(a.C)||tf(a);return a.C};
g.vf=function(a){g.ra(a.F)||tf(a);return a.F};
g.xf=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.db(wf,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.G=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.xf(a,b,c,d);if(e)return e;e=++yf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.sf(d);if(!g.kc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.sf(b);
b.currentTarget=a;return c.call(a,b)};
k=te(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);wf[e]=[a,b,c,k,d];return e};
g.I=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.y)(a,function(a){if(a in wf){var b=wf[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete wf[a]}}))};
g.zf=function(a,b,c){var d;return d=g.G(a,b,function(){g.I(d);c.apply(a,arguments)},!1)};
g.Af=function(a){for(var b in wf)wf[b][0]==a&&g.I(b)};
g.Bf=function(a){this.zc=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.G(window,"mousemove",(0,g.t)(this.W,this));this.N=g.Be((0,g.t)(this.R,this),25)};
Cf=function(){g.vc.call(this);this.C=[]};
Df=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.hb(Saa);this.assets=a.assets||{};this.attrs=a.attrs||g.hb(Taa);this.params=a.params||g.hb(Uaa);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Ef=function(a){a instanceof Df||(a=new Df(a));return a};
g.Hf=function(a,b,c,d,e,f){f=f||{};f.name=c||g.B("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Ff||(c=a.stacktrace,d=a.columnNumber,a=g.Ac(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),Gf[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={ua:{a:"logerror",t:"jserror",type:a.name,
msg:a.message.substr(0,1E3),line:e,level:void 0===b?"ERROR":b,"client.name":f.name},ia:{url:g.B("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ia.stack=c);for(var k in f)b.ia["client."+k]=f[k];if(k=g.B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ia[l]=k[l];g.F("/error_204",b);Gf[a.message]=!0;Ff++}};
g.Of=function(a,b){If[a.endpoint]=b;g.we("very_optimistically_create_gel_client")&&g.Jf();if(a.ni){var c=a.ni;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Kf[a.ni.token]=d;c=Lf(a.endpoint,a.ni.token)}else c=Lf(a.endpoint);c.push(a.payload);c.length>=(g.xe("web_logging_max_batch")||20)?g.Mf():g.Nf()};
g.Mf=function(){g.Ce(g.Pf);if(!g.eb(g.Qf)){for(var a in g.Qf){var b=g.Rf[a];if(!b){var c=If[a];if(!c)continue;b=new c;g.Rf[a]=b}c=void 0;var d=a,e=b,f=Vaa[d],k=Sf[d]||{};Sf[d]=k;b=Math.round(g.Tf());for(c in g.Qf[d]){var l=g.Uf(e);l[f]=Lf(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var m=Kf[c];if(m)a:{var q=l,w=c;if(m.videoId)var z="VIDEO";else if(m.playlistId)z="PLAYLIST";else break a;q.credentialTransferTokenTargetId=m;q.context=q.context||
{};q.context.user=q.context.user||{};q.context.user.credentialTransferTokens=[{token:w,scope:z}]}delete Kf[c];g.Vf(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.Qf[a]}g.eb(g.Qf)||g.Nf()}};
Waa=function(){var a=[];for(e in g.Qf){var b=Sf[e]||{};Sf[e]=b;for(var c in g.Qf[e]){var d=Lf(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.Tf());for(var f in Sf)b=Sf[f],b.eventType=f in Wf?Wf[f]:"UNKNOWN_TYPE",c=Xf[f],b.metricIntervalMs=c?e-c:e-g.Yf,a.push(b),Xf[f]=e,delete Sf[f];return a};
g.Nf=function(){g.Ce(g.Pf);g.Pf=g.Ae(g.Mf,g.B("LOGGING_BATCH_TIMEOUT",g.Zf||1E4))};
Lf=function(a,b){b=void 0===b?"":b;g.Qf[a]=g.Qf[a]||{};g.Qf[a][b]=g.Qf[a][b]||[];return g.Qf[a][b]};
g.Jf=function(){for(var a in g.Qf)if(!g.Rf[a]){var b=If[a];b&&(g.Rf[a]=new b)}};
g.bg=function(a){if(null==g.r("_lact",window)){var b=(0,window.parseInt)(g.B("LACT"),10);b=(0,window.isFinite)(b)?(0,g.Xd)()-Math.max(b,0):-1;g.p("_lact",b,window);g.p("_fact",b,window);-1==b&&$f();g.G(window.document,"keydown",$f);g.G(window.document,"keyup",$f);g.G(window.document,"mousedown",$f);g.G(window.document,"mouseup",$f);g.we("lact_local_listeners")||a?(g.G(window,"resize",function(){ag("resize",200)}),g.G(window,"scroll",function(){ag("scroll",200)}),new g.Bf(function(){ag("mouse",100)}),
g.G(window.document,"touchstart",$f),g.G(window.document,"touchend",$f)):(g.D("page-mouse",$f),g.D("page-scroll",$f),g.D("page-resize",$f))}};
ag=function(a,b){cg[a]||(cg[a]=!0,g.Qe(function(){$f();cg[a]=!1},b))};
$f=function(){null==g.r("_lact",window)&&g.bg();var a=(0,g.Xd)();g.p("_lact",a,window);-1==g.r("_fact",window)&&g.p("_fact",a,window);(a=g.r("ytglobal.ytUtilActivityCallback_"))&&a()};
g.dg=function(){var a=g.r("_lact",window);return null==a?-1:Math.max((0,g.Xd)()-a,0)};
g.fg=function(a,b,c,d){var e=g.eg,f={};f.eventTimeMs=Math.round(c||g.Tf());f[a]=b;f.context={lastActivityMs:String(c?-1:g.dg())};g.Of({endpoint:"log_event",payload:f,ni:d},e)};
Xaa=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.eg=function(a){this.C=a||{innertubeApiKey:g.B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.B("INNERTUBE_API_VERSION",void 0),xB:g.B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),zB:g.B("INNERTUBE_CONTEXT_HL",void 0),yB:g.B("INNERTUBE_CONTEXT_GL",void 0),AB:g.B("INNERTUBE_HOST_OVERRIDE",void 0)||"",BB:!!g.B("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}};
g.Uf=function(a){a=a.C;a={client:{hl:a.zB,gl:a.yB,clientName:a.xB,clientVersion:a.innertubeContextClientVersion}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.B("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.B("DELEGATED_SESSION_ID")});return{context:a}};
g.Vf=function(a,b,c,d){!g.B("VISITOR_DATA")&&.01>Math.random()&&g.se(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.B("VISITOR_DATA","")},method:"POST",ia:c,As:"JSON",jc:function(){d.jc()},
yr:d.jc,Z:function(a,b){d.Z&&d.Z(b)},
xr:function(a){d.Z&&d.Z(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
wr:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f;a.C.BB?f="Bearer "+g.r("gapi.auth.getToken")().MV:f=saa();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.B("SESSION_INDEX",0));var k="",l=a.C.AB;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);a=""+k+Xaa(a.C.innertubeApiVersion,b,c)+"?alt=json&key="+a.C.innertubeApiKey;try{g.we("use_fetch_for_op_xhr")?Oaa(a,e):g.lf(a,e)}catch(m){if("InvalidAccessError"==m)g.se(Error("An extension is blocking network request."),"WARNING");else throw m;
}};
g.gg=function(a,b,c){g.fg(a,b,c,void 0)};
g.hg=function(){g.we("log_web_meta")&&Waa().forEach(function(a){g.gg("delayedEventMetricCaptured",a)})};
g.ig=function(a,b,c,d,e){this.D=a;this.H=b;this.G=c;this.F=d;this.C=e};
g.jg=function(a){return new g.ig(a)};
g.kg=function(a){var b={};void 0!==a.D?b.trackingParams=a.D:(b.veType=a.H,null!=a.G&&(b.veCounter=a.G),null!=a.F&&(b.elementIndex=a.F));void 0!==a.C&&(b.dataElement=g.kg(a.C));return b};
g.lg=function(a,b,c){(0,g.y)(b,function(b){g.fg("visualElementHidden",{csn:a,ve:g.kg(b),eventType:c?16:8})})};
ng=function(a,b){var c=Object.keys(a).join("");mg("info_"+c+"_"+b)||(a.clientActionNonce=b,g.gg("latencyActionInfo",a))};
mg=function(a){og[a]=og[a]||{count:0};var b=og[a];b.count++;b.time=g.Tf();pg||(pg=g.Pe(Yaa,0,5E3));return 10<b.count?(11==b.count&&g.Hf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
Yaa=function(){var a=g.Tf(),b;for(b in og)6E4<a-og[b].time&&delete og[b];pg=0};
rg=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Xd)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(qg)for(a=1,b=0;b<qg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^qg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&
63));return a.join("")};
g.vg=function(a){var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.dg()>b)&&"visible"==g.rf()){b=-1;g.sg&&(b=Math.round(g.Tf()-g.sg));var c=String;var d=g.r("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Xd)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.tg,index:String(ug),lastEventDeltaMs:String(b),trigger:a};g.fg("foregroundHeartbeat",a);g.p("_fact",-1,window);ug++;g.sg=g.Tf()}};
g.yg=function(a){if(!g.wg&&!g.xg||!window.JSON)return null;try{var b=g.wg.get(a)}catch(c){}if(!g.sa(b))try{b=g.xg.get(a)}catch(c){}if(!g.sa(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.zg=function(){var a=g.B("ROOT_VE_TYPE",void 0);return a?new g.ig(void 0,a,void 0):null};
g.Ag=function(){return g.yg("yt-interaction-logging-parent")};
g.Bg=function(){var a=g.B("client-screen-nonce")||g.B("EVENT_ID");return a?a:null};
g.Cg=function(a,b){a=a||"";var c=a.match(Zaa);window.spf.style.load(a,c?c[1]:"",b)};
g.Dg=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Ya,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Cb(g.Fb(a)),"about:invalid#zClosurez"===a?a="":(a=g.Pb(g.Rb(a)),a=g.Ra(g.Nd(a))),g.Pa(a)||(a=g.fc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.jc(a).body.appendChild(a))):e?ff(a,b,"POST",e,d):g.B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?ff(a,b,"GET","",d):$aa(a,b))};
$aa=function(a,b){var c=new window.Image,d=""+aba++;Eg[d]=c;c.onload=c.onerror=function(){b&&Eg[d]&&b();delete Eg[d]};
c.src=a};
g.Fg=function(a,b){this.version=a;this.args=b};
g.Gg=function(a,b){this.topic=a;this.C=b};
g.Ig=function(a,b){var c=g.Hg();c&&c.publish.call(c,a.toString(),a,b)};
g.Hg=function(){return g.r("ytPubsub2Pubsub2Instance")};
bba=function(a){if(Jg.getEntriesByType){var b=Jg.getEntriesByType("paint");if(b=g.Fa(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.za(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
Kg=function(){var a=g.B("TIMING_TICK_EXPIRATION");a||(a={},g.pe("TIMING_TICK_EXPIRATION",a));return a};
Lg=function(){var a=Kg(),b;for(b in a)g.Re(a[b]);g.pe("TIMING_TICK_EXPIRATION",{})};
Mg=function(a,b){g.Fg.call(this,1,arguments)};
Ng=function(a,b){g.Fg.call(this,1,arguments)};
Qg=function(a){Og(a);cba();Pg(!1,a);a||(g.B("TIMING_ACTION")&&g.pe("PREVIOUS_ACTION",g.B("TIMING_ACTION")),g.pe("TIMING_ACTION",""))};
g.Vg=function(a,b,c){b||"_"==a[0]||Rg(a,c);var d=Sg(c),e=b||g.Tf();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=Kg();var f=e[a];f&&(g.Re(f),e[a]=0);Tg(a,b,c)||g.Ug(!1,c);return d[a]};
Rg=function(a,b){Jg.mark&&(g.Na(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Jg.mark(a))};
Xg=function(a,b){Wg("yt_sts",a,void 0);g.Vg("_start",b,void 0)};
Wg=function(a,b,c){Yg(c)[a]=b;Zg(a,b,c)};
$g=function(a){var b=Yg(void 0);return a in b};
ah=function(a){var b=Sg(a);if(b.aft)return b.aft;a=g.B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
bh=function(a){g.Vg("nreqs",a.requestStart,void 0);g.Vg("nress",a.responseStart,void 0);g.Vg("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.Vg("nrs",a.redirectStart,void 0),g.Vg("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.Vg("ndnss",a.domainLookupStart,void 0),g.Vg("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.Vg("ntcps",a.connectStart,void 0),g.Vg("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.Vg("nstcps",a.secureConnectionStart,void 0),g.Vg("ntcpe",a.connectEnd,void 0))};
g.Ug=function(a,b){if(!ch(b)){var c=g.B((b||"")+"TIMING_ACTION",void 0),d=Sg(b);if(g.r("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=ah(b)))if(g.we("tighter_critical_section")&&!dh&&(g.Ig(dba,new Mg(Math.round(c-d._start),b)),dh=!0),a||b)eh(b);else{c=!0;var e=g.B("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&eh(b)}}};
eba=function(){switch(g.rf()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
eh=function(a){Lg();if(!g.we("csi_on_gel")){var b=Sg(a),c=Yg(a),d=b._start,e;for(e in b)if(g.Na(e,"_")&&g.xa(b[e])){var f=e.slice(1);if(f in fba){var k=(0,g.fh)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.r("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))gh(k,f),Qg(a)}else{var l=g.B("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.B((a||"")+"TIMING_ACTION",void 0)};var m=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var q=window.location.protocol+g.r("ytplayer.config.assets.js");(q=Jg.getEntriesByName?Jg.getEntriesByName(q)[0]:null)?c.h5jse=Math.round(c.h5jse-q.responseEnd):delete c.h5jse}b.aft=ah(a);gba(a)&&"youtube"==l&&(Wg("yt_lt","hot_bg",a),l=
b.vc,q=b.pbs,delete b.aft,c.aft=Math.round(q-l));for(var w in c)"_"!=w.charAt(0)&&(k[w]=c[w]);b.ps=g.Tf();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,w.push(e+"."+l));k.rt=w.join(",");(b=g.r("ytdebug.logTiming"))&&b(k,c);gh(k,f,a);g.Ig(hba,new Ng(c.aft+(m||0),a))}}};
ih=function(a){if(!ch(void 0)){if(!g.we("send_empty_timing")){var b=g.B("CSI_SERVICE_NAME","youtube");if(!g.B("TIMING_ACTION",void 0)||!b)return}g.Vg("aa",void 0,void 0);Wg("ap",1,void 0);Wg("yt_fss",a,void 0);!g.we("enable_csi_abandonment_info")||$g("yt_lt")||hh();eh(void 0)}};
iba=function(){if("cold"==Yg().yt_lt){var a=Sg(),b=jh(),c;for(c in a)g.Na(c,"_")||"tick_"+c in b||Tg(c,a[c]);a=Yg();for(c in a)"info_"+c in b||Zg(c,a[c])}};
Tg=function(a,b,c){jh(c)["tick_"+a]=b;c||b||g.Tf();return g.we("csi_on_gel")?(c=kh(c),"_start"==a?mg("baseline_"+c)||g.gg("latencyActionBaselined",{clientActionNonce:c},b):mg("tick_"+a+"_"+c)||g.gg("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Zg=function(a,b,c){jh(c)["info_"+a]=b;if(g.we("csi_on_gel"))if(a in lh){var d={};a=lh[a];g.Ha(jba,a)&&(b=!!b);a=a.split(".");for(var e=d,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];d[a[a.length-1]]=b;b=kh(c);ng(d,b)}else g.Ha(kba,a)||g.se(Error("Unknown label "+a+" logged with GEL CSI."))};
hh=function(){var a=g.B("TIMING_INFO",{});for(b in a)Wg(b,a[b]);Wg("is_nav",1);(a=g.Bg())&&Wg("csn",a);(a=g.B("PREVIOUS_ACTION",void 0))&&Wg("pa",a);var b=Yg();b.p=g.B("CLIENT_PROTOCOL")||"unknown";b.t=g.B("CLIENT_TRANSPORT")||"unknown";Wg("yt_vis",eba());if("cold"==b.yt_lt){a=Jg.timing||{};a.navigationStart&&(g.Vg("srt",a.responseStart),1!=b.prerender&&Xg("n",a.navigationStart));b=bba(a);0<b&&g.Vg("fpt",b);bh(a);Jg.getEntriesByType&&lba();a=[];if(window.document.querySelector&&Jg&&Jg.getEntriesByName)for(var c in mh)b=
mh[c],mba(c,b)&&a.push(b);a.length&&Wg("rc",a.join(","))}g.we("csi_on_gel")&&(c={},c.actionType=nba[g.B("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=kh(void 0),ng(c,a))};
nh=function(a){return Math.round(Jg.timing.navigationStart+a)};
lba=function(){var a=window.location.protocol,b=Jg.getEntriesByType("resource");b=(0,g.oh)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20180201001337/https://fonts.gstatic.com/s/")});
(b=(0,g.ph)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.Vg("wffs",nh(b.startTime)),g.Vg("wffe",nh(b.responseEnd)))};
mba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=Jg.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.Vg("rsf_"+b,d+Math.round(c.fetchStart)),g.Vg("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&($g("rc")||Wg("rc",""),0===c.transferSize))?!0:!1:!1};
gh=function(a,b,c){if(g.we("debug_csi_data")){var d=g.r("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||g.Dg(a,void 0,void 0,void 0,f)}catch(k){g.Dg(a,void 0,void 0,void 0,f)}}else g.Dg(a);Pg(!0,c)};
qh=function(a){g.p("ytglobal.timingready_",a,void 0)};
kh=function(a){var b=rh(a).nonce;b||(b=rg(),rh(a).nonce=b);return b};
Sg=function(a){return rh(a).tick};
Yg=function(a){return rh(a).info};
jh=function(a){a=rh(a);"gel"in a||(a.gel={});return a.gel};
rh=function(a){return g.r("ytcsi."+(a||"")+"data_")||Og(a)};
Og=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
ch=function(a){return!!g.r("yt.timing."+(a||"")+"pingSent_")};
Pg=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
gba=function(a){var b=Sg(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Yg(a).yt_pvis};
th=function(a,b){g.vc.call(this);this.H=this.qa=a;this.N=b;this.L=!1;this.api={};this.ea=this.W=null;this.R=new g.Qd;g.yc(this,this.R);this.D={};this.ma=this.ka=this.F=this.nb=this.C=null;this.V=!1;this.G=this.J=null;this.Ta={};this.wb=["onReady"];this.eb=null;this.rb=window.NaN;this.X={};sh(this);this.Uh("WATCH_LATER_VIDEO_ADDED",this.AG.bind(this));this.Uh("WATCH_LATER_VIDEO_REMOVED",this.BG.bind(this));this.Uh("onAdAnnounce",this.xv.bind(this));this.zb=new Cf(this);g.yc(this,this.zb)};
uh=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
wh=function(a){var b=!0,c=vh(a);c&&a.C&&(a=a.C,b=g.C(c,"version")==a.assets.js);return b&&!!g.r("yt.player.Application.create")};
oba=function(a){if(!a.pb()&&!a.V){var b=wh(a);if(b&&"html5"==(vh(a)?"html5":null))a.ma="html5",a.L||xh(a);else if(yh(a),a.ma="html5",b&&a.G)a.qa.appendChild(a.G),xh(a);else{a.C.loaded=!0;var c=!1;a.J=function(){c=!0;var b=a.C.clone();g.r("yt.player.Application.create")(a.qa,b);xh(a)};
a.V=!0;b?a.J():(g.Le(a.C.assets.js,a.J),g.Cg(a.C.assets.css),zh(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
vh=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
xh=function(a){if(!a.pb()){var b=vh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||pba(a)):a.rb=g.Ae(function(){xh(a)},50)}};
pba=function(a){sh(a);a.L=!0;var b=vh(a);b.addEventListener&&(a.W=Ah(a,b,"addEventListener"));b.removeEventListener&&(a.ea=Ah(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Ah(a,b,e))}for(var f in a.D)a.W(f,a.D[f]);uh(a);a.ka&&a.ka(a.api);a.R.oa("onReady",a.api)};
Ah=function(a,b,c){var d=b[c];return function(){try{return a.eb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.eb=e,g.ue(e))}}};
sh=function(a){a.L=!1;if(a.ea)for(var b in a.D)a.ea(b,a.D[b]);for(var c in a.X)g.Ce((0,window.parseInt)(c,10));a.X={};a.W=null;a.ea=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Uh.bind(a);a.api.removeEventListener=a.NK.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.xx.bind(a);a.api.getPlayerType=a.Px.bind(a);a.api.getCurrentVideoConfig=a.Yw.bind(a);a.api.loadNewVideoConfig=a.Xl.bind(a);a.api.isReady=a.vC.bind(a)};
Bh=function(a,b){var c=b;if("string"==typeof b){if(a.Ta[b])return a.Ta[b];c=function(){var a=g.r(b);a&&a.apply(g.n,arguments)};
a.Ta[b]=c}return c?c:null};
qba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.n[c]=function(c){var d=a.C&&a.C.args&&a.C.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.R.oa(b,c);else{var f=g.Ae(function(){a.pb()||(a.R.oa(b,c),g.fb(a.X,String(f)))},0);
g.gb(a.X,String(f),!0)}};
return c};
yh=function(a){g.Vg("dcp");a.cancel();sh(a);a.ma=null;a.C&&(a.C.loaded=!1);var b=vh(a);b&&(wh(a)||!zh(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.hc(a.qa)};
zh=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.Eh=function(a,b){a=g.sa(a)?g.Zb(a):a;var c=g.Ch+"_"+g.Ca(a),d=g.Dh[c];if(d)return d.Xl(b),d.api;d=new th(a,c);g.Dh[c]=d;g.E("player-added",d.api);g.wc(d,g.u(rba,d));g.Ae(function(){d.Xl(b)},0);
return d.api};
rba=function(a){delete g.Dh[a.N]};
g.Fh=function(a){if(!a)return null;var b=g.Ch+"_"+g.Ca(a),c=g.Dh[b];c||(c=new th(a,b),g.Dh[b]=c);return c.api};
g.Gh=function(a){return g.Fh(window.document.getElementById(a))};
Hh=function(){var a=g.zg(),b=g.Bg();b&&a&&g.lg(b,[a],!0)};
g.Ih=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?te(d):null;this.H=e?te(e):null;this.G=[];this.C=this.F=0};
g.Jh=function(a){g.Re(a.F);a.F=g.Qe((0,g.t)(a.init,a))};
g.Mh=function(a){a.name in Kh&&Lh(a.name);Kh[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.y)(a.deps,function(b){if(!(b in Kh))throw Error("Module "+b+" required by "+a.name);Kh[b].reqs.push(a.name)});
a.enable()};
Lh=function(a){if(a in Kh){var b=Kh[a];(0,g.y)(b.reqs,function(a){Lh(a)});
try{b.disable()}catch(c){}delete Kh[a]}};
Oh=function(a){ne(g.Nh,arguments)};
g.Ph=function(a){return a in g.Nh};
Qh=function(a){ne(g.Nh,arguments)};
g.Sh=function(a,b,c,d){g.Rh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Uh=function(a,b,c){var d=g.B("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.ge(window.location.href);e&&d.push(e);e=g.ge(a);if(g.Ha(d,e)||!e&&g.Na(a,"/"))if(g.we("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.Sb(d,a),a=d.href),a&&(a=g.he(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Bg();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Xa(a).toString(36),d=b?g.ke(b):"",g.Sh(a,d,c||5),Th(b))):(c="ST-"+g.Xa(a).toString(36),a=b?g.ke(b):
"",g.Sh(c,a,5),Th(b))}};
Th=function(a){if(a){a=a.itct||a.ved;var b=g.r("yt.logging.screen.storeParentElement");a&&b&&b(g.jg(a))}};
g.Vh=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.Tb(d.location,g.le(a,b)+c)};
g.Xh=function(a,b){b&&g.Uh(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.Vh(a)};
g.Yh=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.B("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Uh(a,b);if(c)return!1;g.Xh(a);return!0};
g.$h=function(a,b){var c={};c.key=a;c.value=b;return Zh().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.ai=function(a){return Zh().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
Zh=function(){return bi?window.Promise.resolve(bi):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))bi=b,a(bi);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),Zh()};
c.onupgradeneeded=sba})};
sba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
yba=function(){ci++;var a=g.cc(),b=new g.mc(0,0,a.width,a.height);Wg("vph",a.height);Wg("vpw",a.width);g.Vg("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;di.start();for(var f=0;f<c;f++){var k=a[f];if(ei(k,b)){var l=tba(k);l.then(uba);d.push(l);fi.push(l);k.loadTime||(e=!1)}}e&&Wg("yt_eil",1);g.Vg("vpcc");b=g.td(d).then(vba);g.vd(b,wba);b.then(xba);fi.push(b);return b};
xba=function(){di.stop()};
wba=function(){g.Vg("vpr")};
ei=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.qf(c);if(e in gi)return!0;if(e in hi)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return hi[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return hi[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)gi[d[c]]=!0;return!0};
vba=function(a){var b=g.cc();b=new g.mc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;ei(a[d].uB,b)&&c<f&&(c=f)}return c};
tba=function(a){var b=ci;return new g.nd(function(c,d){var e={uB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){ci!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},ii.push(a))})};
uba=function(a){di.start();a=a.time;ji<a&&(ji=a,g.Vg("lim",a))};
zba=function(){g.Vg("vptl",ji);g.Vg("vpl",ji)};
Aba=function(){fi.forEach(function(a){a.cancel()});
ji=fi.length=0;gi={};hi={};ii.forEach(function(a){a.slt=void 0});
ii.length=0};
g.ki=function(a,b){g.Dg("/gen_204?"+a,b)};
Cba=function(a){if(null==a)return[];var b=[];Bba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.li=function(){return g.A(g.x("page-container"),"remote-connected")};
Dba=function(){mi=g.Be(ni,5E3);var a=g.oi();a?(a.addEventListener("onReady",ni),a.addEventListener("onStateChange",ni)):pi("unable to init PP monitor")};
si=function(a){for(var b in g.Dh){var c=g.Dh[b];c&&c.cancel()}if(a=a||null){b=g.oi();var d=!0;c=g.qi;g.qi=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(ri="",g.Eh("player-api",a)):b.playVideo();a=g.Ef(a);a.loaded=!0}ni();g.p("ytplayer.config",a,void 0)};
g.oi=function(){return g.Gh("player-api")};
ni=function(){var a=g.oi();if(a){var b=g.x("player");b=!b||g.A(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.B("PAGE_NAME"),e=g.li();!c||d||e||(pi("PP playing off watch (paused)"),a.pauseVideo());b&&d?pi("PP off-screen on watch"):b||d||pi("PP !off-screen off watch")}};
pi=function(a){var b=g.B("PAGE_NAME");b&&(a+="("+[b,ri,g.r("_spf_state.nav-counter")].join()+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.se(Error(a),"WARNING"))};
ui=function(){g.Vg("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.Vg("cpt");g.E("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?(g.Vg("cpt"),g.E("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){g.Vg("cpt");
g.E("on_cpt_tick",(new Date).getTime())},0);
Eba();g.B("CSI_VIEWPORT")&&(ti=yba(),ti.then(function(a){g.Vg("vpl",a);ti=null},function(){}))};
Eba=function(){vi("init");var a=g.B("PAGE_NAME",void 0);a&&vi("init-"+a)};
vi=function(a){g.Ue()?wi.push(g.Qe(g.u(g.Je,a),0)):g.E(a)};
xi=function(){g.Se(wi);wi.length=0;Aba();ti&&(ti.cancel(),ti=null);var a=g.B("PAGE_NAME",void 0);a&&g.Je("dispose-"+a);g.Je("dispose")};
Fba=function(){ui()};
Gba=function(){g.B("TIMING_REPORT_ON_UNLOAD")&&g.Ug(!0);ih("u");g.vg("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Hh();g.hg();g.Mf();xi();g.Je("pageunload")};
yi=function(){$f()};
zi=function(a){a=a.detail.url;window.yt_spf_loaded_history=!0;$f();var b=g.Ag();if(b&&a){var c=g.kg(b.visualElement);b={csn:b.clientScreenNonce};"trackingParams"in c?b.itct=c.trackingParams:(b.veType=c.veType,b.veCounter=c.veCounter);g.Uh(a,b)}};
Fi=function(){Bi=1;Ci=Di=0;g.B("TIMING_REPORT_ON_UNLOAD")&&g.Ug(!0);g.we("warm_load_nav_start_web")?(ih("n"),Qg(),qh(!1),g.pe("TIMING_AFT_KEYS",[]),Wg("yt_lt","warm"),g.pe("TIMING_ACTION",""),g.pe("TIMING_WAIT",[]),Lg()):(ih("n"),Qg());Xg("n");Rg("nr");Ei(Hba);Hh();g.Je("navigate")};
Ji=function(a){a=a.detail.part||a.detail.partial;g.Vg("nc"+Di);++Di;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.Vg("bc");else{var b=1==Bi;Bi=2;b?(Ei(Iba),Gi()):Ei(Jba);if(b=a&&a.data&&a.data.swfcfg)Hi(a.timing,b.args),Ii(b)}};
Ki=function(){g.Vg("np"+Ci);++Ci};
Li=function(a){a=a.detail.response;var b=1==Bi;Bi=3;b&&(Ei(Kba),Gi());if(b=a.data&&a.data.swfcfg)Hi(a.timing,b.args),Ii(b)};
Pi=function(a){g.Vg("nd");a=a.detail.response;g.Mi=a.cacheKey;a=a.timing;var b=window._spf_state;g.Ni.navigationCount=b&&b["nav-counter"]||0;g.we("warm_load_nav_start_web")?g.Vg("srt",a.responseStart):(Xg("ne",a.responseStart),Wg("srt",Math.max(0,a.responseStart-a.navigationStart)));Wg("yt_lt",a.spfCached?"hot":"warm");g.Vg("pfs",a.fetchStart);g.Vg("pfrs",a.responseStart);"redirectStart"in a&&bh(a);Ei(Oi);window.document.getElementById("content").style.height="";ui();Bi=0};
Qi=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.se(a)};
Ri=function(a){g.ki(g.ke({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Mba=function(){Lba();window.yt_spf_loaded_history=!1};
Nba=function(){};
Gi=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");xi();a=g.B("PREVIOUS_ACTION");for(var b in g.oe)delete g.oe[b];g.pe("PREVIOUS_ACTION",a);g.pe("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);if((b=g.oi())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())ri=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),ri="recovered"):ri="missing2"}else ri="missing";ni()};
Ii=function(a){"cfg"in Sg(void 0)||g.Vg("cfg");si(a)};
Ei=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Re(Si);Si=g.Qe(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Ce(Ti);Ti=g.Ae(function(){b.className=e},c)},0)};
Lba=function(){var a=Oi[0]+50;g.Ce(Ti);Ti=g.Ae(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
Hi=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Cba(b));g.B("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.ki(g.ke(c)))};
Vi=function(){return"granted"!=window.Notification.permission?window.Promise.resolve():Ui().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})["catch"](function(){})};
Xi=function(){Wi({type:"notifications_register",data:g.B("ID_TOKEN")})};
Ui=function(){return window.navigator.serviceWorker.getRegistration(String(ve("service_worker_scope")||""))};
Yi=function(a){return!(!a||!a.pushManager)};
Wi=function(a){Ui().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Oba=function(){if(!g.B("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(ve("service_worker_push_force_notification_prompt_tag")||"");return a?g.ai("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
Sba=function(){var a=void 0===a?!1:a;return(window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification?Ui().then(Yi):window.Promise.resolve(!1)).then(function(b){if(!b)return window.Promise.resolve();b=Vi().then(function(){Wi({type:"notifications_check_registration",data:g.B("ID_TOKEN")})});
return"default"!=window.Notification.permission?b:b.then(function(){return Pba(a)}).then(function(a){if(a)return Qba(),Rba().then(function(){})})})};
Pba=function(a){return g.B("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.B("LOGGED_IN",void 0)&&(void 0===a?0:a)?Oba().then(function(a){if(a)return!0;a=[Tba(),Uba()];g.B("LOGGED_IN",void 0)||a.push(Vba());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
Vba=function(){var a=g.xe("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.ai("WatchCount").then(function(b){return b>=a})};
Rba=function(){var a=arguments;g.we("service_worker_push_prompt_modal_enable")&&Wba();return window.Notification.requestPermission().then(function(a){Zi();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return Vi().then(function(){g.$h("NotificationsDisabled",!1);Xi();return window.Promise.resolve(!0)});
"denied"==a&&Xi();return window.Promise.resolve(!1)})["catch"](function(){Zi();
return window.Promise.reject.apply(window.Promise,[].concat(a instanceof Array?a:baa(g.ka(a))))})};
Qba=function(){g.ai("PromptCount").then(function(a){return g.$h("PromptCount",a+1)}).then(function(){return g.$h("PromptTime",(0,g.Xd)())}).then(function(){var a=String(ve("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.ai("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.$h("PromptTags",JSON.stringify(c))})})};
Tba=function(){return-1==g.xe("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.ai("PromptCount").then(function(a){a||(a=0);return window.Promise.resolve(a<g.xe("service_worker_push_prompt_cap"))})};
Uba=function(){var a=g.xe("service_worker_push_prompt_delay_ms");return a?g.ai("PromptTime").then(function(b){return window.Promise.resolve((0,g.Xd)()-a>(b||0))}):window.Promise.resolve(!0)};
Xba=function(){$i||Zi()};
aj=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
Wba=function(){var a=g.x("yt-push-prompt-modal-bg");$i=g.we("service_worker_push_prompt_modal_ignore_click");a?aj(a):(a=g.fc("div",{id:"yt-push-prompt-modal-bg"}),aj(a),window.document.body.appendChild(a),g.zf(window.document,"click",Xba))};
Zi=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.ic(a)};
Yba=function(a){return Yi(a)?Sba():window.Promise.resolve()};
$ba=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(Zba)})};
bca=function(){var a="/sw.js",b=g.B("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=bj(a);g.we("service_worker_push_enabled")&&a.then(aca).then(Yba)};
aca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
Zba=function(a){a&&bj("/sw.js?0",a.scope)};
bj=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(ve("service_worker_scope")||"")||"/"})};
cj=function(){g.Ih.call(this,"www/base");this.D=0};
dj=function(a){(a=a.detail.name)&&Lh(a)};
g.aa=[];fa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;aaa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)ej=Object.setPrototypeOf;else{var fj;a:{var cca={a:!0},gj={};try{gj.__proto__=cca;fj=gj.a;break a}catch(a){}fj=!1}ej=fj?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ej,dca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];
if(d)for(var e in d)pa(d,e)&&(a[e]=d[e])}return a};
oa("Object.assign",function(a){return a||dca});
var eca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=la(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
oa("Reflect.construct",function(){return eca});
oa("Promise",function(a){function b(a){this.C=0;this.D=void 0;this.F=[];var b=this.H();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.L()})};
var e=ea.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.L=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(q){this.H(q)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.L(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(m){this.G(m);return}"function"==typeof b?this.ma(b,a):this.L(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.L=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.C)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.C);this.C=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.F){for(var a=this.F,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.F=null}};
var f=new c;b.prototype.V=function(a){var b=this.H();a.ji(b.resolve,b.reject)};
b.prototype.ma=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(q){c.reject(q)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(Z){f(Z)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.ji(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.ji=function(a,b){function c(){switch(d.C){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?f.F(c):this.F.push(function(){f.F(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.ka(a),f=e.next();!f.done;f=e.next())d(f.value).ji(b,c)})};
b.all=function(a){var c=g.ka(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).ji(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
oa("WeakMap",function(a){function b(a){this.hb=(f+=Math.random()+1).toString();if(a){da();ia();a=g.ka(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){pa(a,e)||fa(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(q){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!pa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.hb]=b;return this};
b.prototype.get=function(a){return pa(a,e)?a[e][this.hb]:void 0};
b.prototype.has=function(a){return pa(a,e)&&pa(a[e],this.hb)};
b.prototype["delete"]=function(a){return pa(a,e)&&pa(a[e],this.hb)?delete a[e][this.hb]:!1};
return b});
oa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return ja(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&pa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,mc:l}}return{id:c,list:d,index:-1,mc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.ka(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.ka([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(z){return!1}}())return a;
da();ia();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.mc?c.mc.value=b:(c.mc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.mc),this.F.previous.next=c.mc,this.F.previous=c.mc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.mc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.mc.previous.next=a.mc.next,a.mc.next.previous=a.mc.previous,a.mc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).mc};
e.prototype.get=function(a){return(a=d(this,a).mc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
oa("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.ka(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.ka([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
da();ia();b.prototype.add=function(a){this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
oa("Array.from",function(a){return a?a:function(a,c,d){ia();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
g.hj=g.hj||{};g.n=this;Ba="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Xd=Date.now||function(){return+new Date};g.v(g.Da,Error);g.Da.prototype.name="CustomError";g.Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.sa(a))return g.sa(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.fca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.sa(a))return g.sa(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.oh=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.sa(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.fh=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.sa(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.ph=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.y)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.ij=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.jj=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Ua=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.kj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var lj=g.n.navigator;if(lj){var mj=lj.userAgent;if(mj){g.Ya=mj;break a}}g.Ya=""};var ib="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.qb[" "]=g.ua;var uj,maa,zj;g.nj=g.Za("Opera");g.J=g.kb();g.oj=g.Za("Edge");g.pj=g.oj||g.J;g.qj=g.Za("Gecko")&&!(-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.Za("Edge"))&&!(g.Za("Trident")||g.Za("MSIE"))&&!g.Za("Edge");g.rj=-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.Za("Edge");g.sj=g.Za("Macintosh");g.tj=g.Za("Windows");g.gca=g.Za("Linux")||g.Za("CrOS");g.hca=g.Za("Android");g.ica=ob();g.jca=g.Za("iPad");g.kca=g.Za("iPod");g.lca=g.pb();
a:{var vj="",wj=function(){var a=g.Ya;if(g.qj)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.oj)return/Edge\/([\d\.]+)/.exec(a);if(g.J)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.rj)return/WebKit\/(\S+)/.exec(a);if(g.nj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
wj&&(vj=wj?wj[1]:"");if(g.J){var xj=sb();if(null!=xj&&xj>(0,window.parseFloat)(vj)){uj=String(xj);break a}}uj=vj}g.tb=uj;maa={};var Aj=g.n.document;zj=Aj&&g.J?sb()||("CSS1Compat"==Aj.compatMode?(0,window.parseInt)(g.tb,10):5):void 0;g.vb=zj;var oaa;oaa=!g.J||g.wb(9);g.mca=!g.qj&&!g.J||g.J&&g.wb(9)||g.qj&&g.ub("1.9.1");g.Bj=g.J&&!g.ub("9");g.nca=g.J||g.nj||g.rj;g.yb.prototype.Td=!0;g.yb.prototype.Vc=function(){return this.C};
g.yb.prototype.toString=function(){return"Const{"+this.C+"}"};
g.xb={};g.zb("");g.oca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.pca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Cj=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");g.Bb.prototype.Td=!0;g.Bb.prototype.Vc=function(){return this.C};
g.Bb.prototype.El=!0;g.Bb.prototype.og=function(){return 1};
var Db=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ab={};g.Eb("about:blank");g.Ib.prototype.Td=!0;g.Hb={};g.Ib.prototype.Vc=function(){return this.C};
g.Dj=g.Jb("");g.Ej=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.qca=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Lb.prototype.Td=!0;g.Kb={};g.Lb.prototype.Vc=function(){return this.C};
g.rca=g.Mb("");g.Ob.prototype.El=!0;g.Ob.prototype.og=function(){return this.F};
g.Ob.prototype.Td=!0;g.Ob.prototype.Vc=function(){return this.C};
var Nb={};g.Qb("<!DOCTYPE html>",0);g.Fj=g.Qb("",0);g.Gj=g.Qb("<br>",0);g.h=g.Vb.prototype;g.h.clone=function(){return new g.Vb(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Vb&&g.Wb(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.Vb?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.ta(b)&&(this.y+=b));return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.Yb.prototype;g.h.clone=function(){return new g.Yb(this.width,this.height)};
g.h.Kv=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Kv()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.width*=a;this.height*=c;return this};var $b={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.Hj=g.lc(null);g.Ij=window.document;g.Jj=window;g.h=g.mc.prototype;g.h.clone=function(){return new g.mc(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Vb?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.Vb?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.ta(b)&&(this.top+=b));return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.Kj=g.qj?"MozUserSelect":g.rj||g.oj?"WebkitUserSelect":null;g.sca=Object.prototype.hasOwnProperty;g.Lj=g.qc(window);g.Mj=g.Lj&&window.parent||window;g.Nj=(new Date).getTime();g.h=g.tc.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ra(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Xd)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Ua)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.ra(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Ec=g.ca(0);g.h.Jb=g.ca(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Ab=g.ca(5);g.h.ke=g.ca(6);g.h.clear=function(){for(var a=g.uc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Rh=new g.tc("undefined"==typeof window.document?null:window.document);g.Rh.F=3950;g.vc.prototype.Jc=!1;g.vc.prototype.pb=function(){return this.Jc};
g.vc.prototype.dispose=function(){this.Jc||(this.Jc=!0,this.Y())};
g.vc.prototype.Y=function(){if(this.Wb)for(;this.Wb.length;)this.Wb.shift()()};g.zc.prototype.stopPropagation=function(){this.F=!0};
g.zc.prototype.preventDefault=function(){this.bt=!1};var Qc,uca,waa;g.tca=!g.J||g.wb(9);Qc=!g.J||g.wb(9);uca=g.J&&!g.ub("9");waa=function(){if(!g.n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.n.addEventListener("test",g.ua,b);g.n.removeEventListener("test",g.ua,b);return a}();g.Oj=g.rj?"webkitTransitionEnd":g.nj?"otransitionend":"transitionend";g.v(g.Bc,g.zc);var vca={2:"touch",3:"pen",4:"mouse"};
g.Bc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.qj&&(g.rb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.sj?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.sa(a.pointerType)?a.pointerType:vca[a.pointerType]||"";this.state=a.state;this.Ac=a;a.defaultPrevented&&
this.preventDefault()};
g.Bc.prototype.stopPropagation=function(){g.Bc.M.stopPropagation.call(this);this.Ac.stopPropagation?this.Ac.stopPropagation():this.Ac.cancelBubble=!0};
g.Bc.prototype.preventDefault=function(){g.Bc.M.preventDefault.call(this);var a=this.Ac;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,uca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Cc="closure_listenable_"+(1E6*Math.random()|0),taa=0;g.h=g.Fc.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Hc(a,b,d,e);-1<k?(b=a[k],c||(b.gi=!1)):(b=new uaa(b,this.src,f,!!d,e),b.gi=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Hc(e,b,c,d);return-1<b?(Ec(e[b]),g.Ja(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Ec(d[e]);delete this.listeners[c];this.C--}return b};
g.h.qg=g.ca(8);g.h.vf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Hc(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.ra(a),d=c?a.toString():"",e=g.ra(b);return g.bb(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Nc="closure_lm_"+(1E6*Math.random()|0),Tc={},Pc=0,Wc="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.Xc,g.vc);g.Xc.prototype[Cc]=!0;g.h=g.Xc.prototype;g.h.Ii=function(){return this.pm};
g.h.Fh=g.ca(9);g.h.addEventListener=function(a,b,c,d){g.Jc(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Rc(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Ii();if(b){var c=[];for(var d=1;b;b=b.Ii())c.push(b),++d}b=this.yv;d=a.type||a;if(g.sa(a))a=new g.zc(a,b);else if(a instanceof g.zc)a.target=a.target||b;else{var e=a;a=new g.zc(d,b);g.jb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=Yc(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=Yc(k,d,!0,a)&&e,a.F||(e=Yc(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=Yc(k,d,!1,a)&&e;return e};
g.h.Y=function(){g.Xc.M.Y.call(this);this.removeAllListeners();this.pm=null};
g.h.O=function(a,b,c,d){return this.Ad.add(String(a),b,!1,c,d)};
g.h.Se=function(a,b,c,d){return this.Ad.add(String(a),b,!0,c,d)};
g.h.Wa=function(a,b,c,d){return this.Ad.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.Ad?this.Ad.removeAll(a):0};
g.h.qg=g.ca(7);g.h.vf=function(a,b,c,d){return this.Ad.vf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.Ad.hasListener(g.ra(a)?String(a):void 0,b)};Zc.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var id;var jd=new Zc(function(){return new cd},function(a){a.reset()});
bd.prototype.add=function(a,b){var c=jd.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
bd.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
cd.prototype.set=function(a,b){this.qc=a;this.scope=b;this.next=null};
cd.prototype.reset=function(){this.next=this.scope=this.qc=null};var dd,ed=!1,fd=new bd;od.prototype.reset=function(){this.context=this.F=this.G=this.C=null;this.D=!1};
var pd=new Zc(function(){return new od},function(a){a.reset()});
g.nd.prototype.then=function(a,b,c){return ud(this,g.za(a)?a:null,g.za(b)?b:null,c)};
g.kd(g.nd);g.nd.prototype.cancel=function(a){0==this.C&&gd(function(){var b=new g.Bd(a);wd(this,b)},this)};
g.nd.prototype.W=function(a){this.C=0;g.md(this,2,a)};
g.nd.prototype.N=function(a){this.C=0;g.md(this,3,a)};
g.nd.prototype.J=function(){for(var a;a=xd(this);)yd(this,a,this.C,this.R);this.L=!1};
var Dd=ad;g.v(g.Bd,g.Da);g.Bd.prototype.name="cancel";g.v(g.Gd,g.vc);g.h=g.Gd.prototype;g.h.hb=0;g.h.Y=function(){g.Gd.M.Y.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.hb=g.Ed(this.zc,g.ra(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Fd(this.hb);this.hb=0};
g.h.Le=g.ca(10);g.h.isActive=function(){return 0!=this.hb};
g.h.ep=function(){this.hb=0;this.C&&this.C.call(this.F)};g.Pj=g.Za("Firefox");g.Qj=ob()||g.Za("iPod");g.Rj=g.Za("iPad");g.wca=g.nb();g.Sj=g.lb();g.Tj=g.mb()&&!g.pb();g.Jd="StopIteration"in g.n?g.n.StopIteration:{message:"StopIteration",stack:""};g.Id.prototype.next=function(){throw g.Jd;};
g.Id.prototype.hd=function(){return this};var Pd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Eaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.Qd,g.vc);g.h=g.Qd.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.vd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.ua):(c&&g.Ka(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Faa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.vd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.y)(b,this.vd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Ab=g.ca(4);g.h.Y=function(){g.Qd.M.Y.call(this);this.clear();this.D.length=0};g.Sd.prototype.set=function(a,b){g.ra(b)?this.C.set(a,g.Nd(b)):this.C.remove(a)};
g.Sd.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Sd.prototype.remove=function(a){this.C.remove(a)};g.v(Td,g.Sd);Td.prototype.set=function(a,b){Td.M.set.call(this,a,Vd(b))};
Td.prototype.F=function(a){a=Td.M.get.call(this,a);if(!g.ra(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Td.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ra(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.Wd,Td);g.Wd.prototype.set=function(a,b,c){if(b=Vd(b)){if(c){if(c<(0,g.Xd)()){g.Wd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Xd)()}g.Wd.M.set.call(this,a,b)};
g.Wd.prototype.F=function(a,b){var c=g.Wd.M.F.call(this,a);if(c)if(!b&&g.Yd(c))g.Wd.prototype.remove.call(this,a);else return c};g.v(g.Zd,g.Wd);g.v(g.$d,Gaa);g.$d.prototype.Ab=g.ca(3);g.$d.prototype.clear=function(){var a=Caa(this.hd(!0)),b=this;(0,g.y)(a,function(a){b.remove(a)})};g.v(g.ae,g.$d);g.h=g.ae.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Ab=g.ca(2);g.h.hd=function(a){var b=0,c=this.C,d=new g.Id;d.next=function(){if(b>=c.length)throw g.Jd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.be,g.ae);g.v(ce,g.ae);var Haa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Uj=!1,Vj="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(Uj=!0,a.description)){Vj=me(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){Uj=!0;Vj="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],Uj=!(!a||!a.enabledPlugin))){Vj=me(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Uj=
!0;Vj=me(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Uj=!0;Vj="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Uj=!0,Vj=me(b.GetVariable("$version"))}catch(c){}})();
g.xca=Uj;g.yca=Vj;g.Tf=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Wj="Microsoft Internet Explorer"==window.navigator.appName;g.oe=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.oe,void 0);var ze={};var zca=g.r("ytPubsubPubsubInstance")||new g.Qd;g.Qd.prototype.subscribe=g.Qd.prototype.subscribe;g.Qd.prototype.unsubscribeByKey=g.Qd.prototype.vd;g.Qd.prototype.publish=g.Qd.prototype.oa;g.Qd.prototype.clear=g.Qd.prototype.clear;g.p("ytPubsubPubsubInstance",zca,void 0);var Fe=g.r("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",Fe,void 0);var He=g.r("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",He,void 0);var Ge=g.r("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",Ge,void 0);var Jaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Kaa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Me=null;g.na(Te,Laa);Te.prototype.start=function(){var a=g.r("yt.scheduler.instance.start");a&&a()};
Te.prototype.pause=function(){var a=g.r("yt.scheduler.instance.pause");a&&a()};
g.va(Te);Te.getInstance();(0,g.Xd)();var Xe=g.ra(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.ra(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var cf,gf;cf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};gf=!1;g.Xj=hf;mf.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.ld(a)?a:g.of(a)):2===this.F&&b?(a=b.call(c,this.C),g.ld(a)?a:g.nf(a)):this};
mf.prototype.getValue=function(){return this.C};
g.kd(mf);var Aca=0,Qaa=g.rj?"webkit":g.qj?"moz":g.J?"ms":g.nj?"o":"",pf=g.r("ytDomDomGetNextId")||function(){return++Aca};
g.p("ytDomDomGetNextId",pf,void 0);var Raa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.sf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.sf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.sf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var wf=g.r("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",wf,void 0);var yf=g.r("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",yf,void 0);g.v(g.Bf,g.vc);g.Bf.prototype.W=function(a){this.C=new g.Vb(g.uf(a),g.vf(a))};
g.Bf.prototype.R=function(){if(this.C){var a=g.Tf();if(0!=this.D){var b=g.Xb(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.zc();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.Bf.prototype.Y=function(){g.De(this.N);g.I(this.J)};g.na(Cf,g.vc);Cf.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.ig);break}};
Cf.prototype.Y=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.ig)}g.vc.prototype.Y.call(this)};var Saa={enablejsapi:1},Taa={},Uaa={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};Df.prototype.clone=function(){var a=new Df,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.wa(c)?a[b]=g.hb(c):a[b]=c}return a};var Gf={},Ff=0;var Vaa,Wf,If;Vaa={log_event:"events",log_interaction:"interactions"};Wf=Object.create(null);Wf.log_event="GENERIC_EVENT_LOGGING";Wf.log_interaction="INTERACTION_LOGGING";g.Rf={};If={};g.Pf=0;g.Qf=g.r("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.Qf,void 0);var Kf=g.r("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",Kf,void 0);var Sf=g.r("ytLoggingTransportDispatchedStats_")||{};
g.p("ytLoggingTransportDispatchedStats_",Sf,void 0);var Xf=g.r("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",Xf,void 0);var cg={};var og=g.r("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",og,void 0);var pg=0;var qg=(0,g.Xd)().toString();var ug;g.tg=rg();ug=0;g.sg=null;var Yj,Zj;Yj=new g.be;g.xg=Yj.isAvailable()?new g.Zd(Yj):null;Zj=new ce;g.wg=Zj.isAvailable()?new g.Zd(Zj):null;var Zaa=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Eg={},aba=0;g.Gg.prototype.toString=function(){return this.topic};var Bca=g.r("ytPubsub2Pubsub2Instance")||new g.Qd;g.Qd.prototype.subscribe=g.Qd.prototype.subscribe;g.Qd.prototype.unsubscribeByKey=g.Qd.prototype.vd;g.Qd.prototype.publish=g.Qd.prototype.oa;g.Qd.prototype.clear=g.Qd.prototype.clear;g.p("ytPubsub2Pubsub2Instance",Bca,void 0);g.ak=g.r("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.ak,void 0);g.bk=g.r("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.bk,void 0);
g.ck=g.r("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.ck,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var Jg=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.na(Mg,g.Fg);g.na(Ng,g.Fg);var dba=new g.Gg("aft-recorded",Mg),hba=new g.Gg("timing-sent",Ng);var fba={vc:!0},mh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},lh={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",
yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},kba="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
nba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
"video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"},jba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),dh=!1,cba=(0,g.t)(Jg.clearResourceTimings||Jg.webkitClearResourceTimings||
Jg.mozClearResourceTimings||Jg.msClearResourceTimings||Jg.oClearResourceTimings||g.ua,Jg);g.na(th,g.vc);g.h=th.prototype;
g.h.Xl=function(a){this.pb()||(this.nb=a=g.Ef(a),this.C=a.clone(),this.F=this.C.attrs.id||this.F,"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N),this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F),this.C.args.enablejsapi="1",this.C.args.playerapiid=this.N,this.ka||(this.ka=Bh(this,this.C.args.jsapicallback||"onYouTubePlayerReady")),this.C.args.jsapicallback=null,(a=this.C.attrs.width)&&g.pc(this.H,Number(a)||a),(a=this.C.attrs.height)&&g.oc(this.H,Number(a)||a),oba(this),
this.L&&uh(this))};
g.h.Yw=function(){return this.nb};
g.h.vC=function(){return this.L};
g.h.Uh=function(a,b){var c=this,d=Bh(this,b);if(d){if(!g.Ha(this.wb,a)&&!this.D[a]){var e=qba(this,a);this.W&&this.W(a,e)}this.R.subscribe(a,d);"onReady"==a&&this.L&&g.Ae(function(){d(c.api)},0)}};
g.h.NK=function(a,b){if(!this.pb()){var c=Bh(this,b);c&&g.Rd(this.R,a,c)}};
g.h.xv=function(a){g.E("a11y-announce",a)};
g.h.AG=function(a){g.E("WATCH_LATER_VIDEO_ADDED",a)};
g.h.BG=function(a){g.E("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Px=function(){return this.ma||(vh(this)?"html5":null)};
g.h.xx=function(){return this.eb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.Ke(this.C.assets.js);window.spf.script.ignore(b,a)}g.Ce(this.rb);this.V=!1};
g.h.Y=function(){yh(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.se(Error("Error destroying player: "+b))}this.Ta=null;for(var a in this.D)g.n[this.D[a]]=null;this.nb=this.C=this.api=null;delete this.qa;delete this.H;g.vc.prototype.Y.call(this)};g.Dh={};g.Ch="player_uid_"+(1E9*Math.random()>>>0);g.h=g.Ih.prototype;g.h.bL=function(){this.hj()||this.init()};
g.h.enable=function(){this.C=1;(0,g.y)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.bL,this),this.subscribe("dispose-"+a,this.dispose,this),g.B("PAGE_NAME")==a&&g.Jh(this))},this)};
g.h.init=function(){g.Re(this.F);this.C=2;this.L&&this.L()};
g.h.hj=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Re(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.se(a)}};
g.h.subscribe=function(a,b,c){a=g.D(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.Ie(this.G);this.G=[]};var Kh=g.r("yt.modules.registry_")||{};g.p("yt.modules.registry_",Kh,void 0);g.Nh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.Nh,void 0);g.p("yt.abuse.botguardInitialized",g.r("yt.abuse.botguardInitialized")||Ne,void 0);g.p("yt.abuse.invokeBotguard",g.r("yt.abuse.invokeBotguard")||g.Oe,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",g.r("yt.abuse.dclkstatus.checkDclkStatus")||We,void 0);g.p("yt.player.exports.navigate",g.r("yt.player.exports.navigate")||g.Yh,void 0);g.p("yt.util.activity.init",g.r("yt.util.activity.init")||g.bg,void 0);g.p("yt.util.activity.getTimeSinceActive",g.r("yt.util.activity.getTimeSinceActive")||g.dg,void 0);
g.p("yt.util.activity.setTimestamp",g.r("yt.util.activity.setTimestamp")||$f,void 0);var bi=null;g.dk=window.performance&&window.performance.memory;g.Ni={};var ji=0,fi=[],ii=[],ci=0,gi={},hi={},di=new g.Gd(zba,1E3);var Bba=["server_prefetched_vast","vmap"];var mi,ri;g.qi=null;ri="";var ti=null,wi=[];var Bi,Ti,Si,Di,Ci,Hba,Kba,Iba,Jba,Oi;Di=0;Ci=0;Hba=[900,60,"waiting"];Kba=[500,99,"waiting"];Iba=[300,60,"waiting"];Jba=[400,99,"waiting"];Oi=[300,101,"done"];var $i=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.pe,void 0);g.p("yt.pushConfigArray",qe,void 0);g.p("yt.getConfig",g.B,void 0);g.p("yt.config.set",g.pe,void 0);g.p("yt.config.pushArray",qe,void 0);g.p("yt.config.get",g.B,void 0);g.p("yt.hasMsg",g.Ph,void 0);g.p("yt.setMsg",Oh,void 0);g.p("yt.setGoogMsg",Qh,void 0);g.p("yt.msgs.has",g.Ph,void 0);g.p("yt.msgs.set",Oh,void 0);g.p("yt.msgs.setGoog",Qh,void 0);g.p("yt.pubsub.publish",g.E,void 0);g.p("yt.pubsub.subscribe",g.D,void 0);
g.p("ytcsi.tick",g.Vg,void 0);g.v(cj,g.Ih);
cj.prototype.enable=function(){window.onload=Fba;window.onunload=Gba;window.onerror=Iaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",yi),window.addEventListener("spfhistory",zi),window.addEventListener("spfrequest",Fi),window.addEventListener("spfpartprocess",Ji),window.addEventListener("spfpartdone",Ki),window.addEventListener("spfprocess",Li),window.addEventListener("spfdone",Pi),window.addEventListener("spferror",Qi),window.addEventListener("spfreload",
Ri),window.addEventListener("spfjsbeforeunload",dj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Mba),this.subscribe("dispose",Nba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
cj.prototype.init=function(){cj.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.B("PAGEFRAME_JS")){var b=g.B("PAGEFRAME_JS",void 0);var c=function(){var a=g.r("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.r("yt.www.masthead.loadSearchbox"))&&a();
a=g.B("JS_COMMON_MODULE");var d=g.B("JS_PAGE_MODULES");d||(d=[a]);a=g.B("JS_DELAY_LOAD",0);0<a?(g.Ce(this.D),this.D=g.Ae(function(){b&&g.Le(b,c);window.spf.script.require(d)},a)):(b&&g.Le(b,c),window.spf.script.require(d));
g.p("yt.abuse.botguardInitialized",Ne,void 0);g.p("yt.abuse.invokeBotguard",g.Oe,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",We,void 0);g.p("yt.player.exports.navigate",g.Yh,void 0);g.p("yt.util.activity.init",g.bg,void 0);g.p("yt.util.activity.getTimeSinceActive",g.dg,void 0);g.p("yt.util.activity.setTimestamp",$f,void 0);si(g.r("ytplayer.config"));g.r("ytspf.enabled")&&Dba();hh();iba();qh(!0);g.Ug(!1);g.B("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.we("service_worker_enabled")?bca():$ba())};
cj.prototype.dispose=function(){g.Ce(this.D);var a=g.r("ytbin.www.pageframe.cancelSetup");a&&a();g.De(mi);if(a=g.oi())a.removeEventListener("onReady",ni),a.removeEventListener("onStateChange",ni);qh(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.C(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.Af(a);cj.M.dispose.call(this)};
cj.prototype.disable=function(){cj.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",yi),window.removeEventListener("spfhistory",zi),window.removeEventListener("spfrequest",Fi),window.removeEventListener("spfpartprocess",Ji),window.removeEventListener("spfpartdone",Ki),window.removeEventListener("spfprocess",Li),window.removeEventListener("spfdone",Pi),window.removeEventListener("spferror",Qi),window.removeEventListener("spfreload",Ri),window.removeEventListener("spfjsbeforeunload",
dj));window.onload=null;window.onunload=null;window.onerror=null};
g.Mh(new cj);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:13:37 Feb 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:35:05 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 82.455
  exclusion.robots: 0.095
  exclusion.robots.policy: 0.084
  cdx.remote: 0.068
  esindex: 0.009
  LoadShardBlock: 31.895 (3)
  PetaboxLoader3.datanode: 877.056 (5)
  load_resource: 996.717 (2)
  PetaboxLoader3.resolve: 145.095 (2)
*/