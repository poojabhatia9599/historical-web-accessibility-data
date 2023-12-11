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

var _yt_www={};(function(g){var window=this;var ia,ma,la,na,baa,pa,qa,daa,eaa,Va,nb,naa,sb,paa,oc,qaa,raa,pc,saa,uaa,Bc,Dc,Ec,Ic,vaa,Lc,Sc,Rc,xaa,Vc,Wc,Xc,Yc,yaa,Zc,$c,dd,zaa,ed,md,ud,sd,pd,Baa,xd,vd,wd,Ad,Aaa,Id,Caa,Daa,Kd,Md,Faa,Rd,Sd,Td,Gaa,ae,ke,le,oe,qe,Iaa,se,Ce,Le,Laa,Re,Te,Maa,Naa,Oaa,af,bf,Paa,gf,ef,cf,jf,rf,Af,Bf,Waa,If,Yf,Xf,Xaa,kg,jg,Yaa,og,$aa,bba,Hg,Ig,Jg,Kg,Ng,Og,Ug,Tg,Xg,Yg,Zg,eba,bh,fh,iba,Qg,Wg,eh,kh,lba,mba,dh,nh,hh,Pg,Vg,gh,oh,Lg,$g,Mg,gba,qh,rh,th,oba,sh,uh,pba,xh,ph,yh,qba,vh,wh,rba,Eh,Ih,Lh,Nh,Qh,Vh,sba,yba,xba,wba,ai,
vba,tba,uba,zba,Aba,Cba,Dba,oi,ji,li,qi,Eba,ri,ti,Fba,Gba,ui,vi,Bi,Fi,Gi,Hi,Li,Mi,Ni,Mba,Nba,Ci,Ei,Ai,Lba,Di,Ri,Oba,Yi,Qi,Xi,Pba,Tba,Qba,Wba,Sba,Rba,Uba,Vba,Yba,aj,Xba,Zi,Zba,aca,cca,bca,$ba,bj,cj,dj,ea,ej,Ca,caa;g.da=function(a){return function(){return g.ba[a].apply(this,arguments)}};
g.ha=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
ia=function(){ia=function(){};
ja.Symbol||(ja.Symbol=aaa)};
ma=function(){ia();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(this)}});
ma=function(){}};
la=function(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
na=function(a){ma();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a};
g.oa=function(a){ma();var b=a[window.Symbol.iterator];return b?b.call(a):la(a)};
baa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
pa=function(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}};
qa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ra=function(a){return void 0!==a};
g.sa=function(a){return"string"==typeof a};
g.ta=function(a){return"number"==typeof a};
g.p=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ra(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.q=function(a,b){for(var c=a.split("."),d=b||g.m,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.ua=function(){};
g.va=function(a){a.Ac=void 0;a.getInstance=function(){return a.Ac?a.Ac:a.Ac=new a}};
g.xa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.ya=function(a){return"array"==g.xa(a)};
g.za=function(a){var b=g.xa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Aa=function(a){return"function"==g.xa(a)};
g.Ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Da=function(a){return a[Ca]||(a[Ca]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.t=daa:g.t=eaa;return g.t.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.xV=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
g.Ea=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ea);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ga=function(a,b,c){b=g.Fa(a,b,c);return 0>b?null:g.sa(a)?a.charAt(b):a[b]};
g.Fa=function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ia=function(a,b){return 0<=(0,g.Ha)(a,b)};
g.Ja=function(a){return 0==a.length};
g.La=function(a,b){var c=(0,g.Ha)(a,b),d;(d=0<=c)&&g.Ka(a,c);return d};
g.Ka=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Ma=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Oa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.za(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Pa=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Qa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Ra=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Sa=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ta=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Wa=function(a,b){for(var c=0,d=(0,g.Ua)(String(a)).split("."),e=(0,g.Ua)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",n=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""];if(0==l[0].length&&0==n[0].length)break;c=Va(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==n[1].length?0:(0,window.parseInt)(n[1],10))||Va(0==l[2].length,0==n[2].length)||Va(l[2],n[2]);l=l[3];n=n[3]}while(0==c)}return c};
Va=function(a,b){return a<b?-1:a>b?1:0};
g.Xa=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.Za=function(a){return-1!=g.Ya.indexOf(a)};
g.$a=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.ab=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.bb=function(a,b){return null!==a&&b in a};
g.cb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.db=function(a){for(var b in a)return!1;return!0};
g.eb=function(a,b){b in a&&delete a[b]};
g.fb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.gb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.ib=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<hb.length;f++)c=hb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.jb=function(){return g.Za("Trident")||g.Za("MSIE")};
g.lb=function(){return g.Za("Safari")&&!(g.kb()||g.Za("Coast")||g.Za("Opera")||g.Za("Edge")||g.Za("Silk")||g.Za("Android"))};
g.kb=function(){return(g.Za("Chrome")||g.Za("CriOS"))&&!g.Za("Edge")};
g.mb=function(){return g.Za("Android")&&!(g.kb()||g.Za("Firefox")||g.Za("Opera")||g.Za("Silk"))};
nb=function(){return g.Za("iPhone")&&!g.Za("iPod")&&!g.Za("iPad")};
g.ob=function(){return nb()||g.Za("iPad")||g.Za("iPod")};
g.qb=function(a){g.qb[" "](a);return a};
g.rb=function(a,b){try{return g.qb(a[b]),!0}catch(c){}return!1};
naa=function(a,b){var c=maa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
sb=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.ub=function(a){return naa(a,function(){return 0<=g.Wa(g.tb,a)})};
g.wb=function(a){return Number(g.vb)>=a};
g.yb=function(){this.C="";this.F=g.xb};
g.zb=function(a){var b=new g.yb;b.C=a;return b};
g.Bb=function(){this.C="";this.F=Ab};
g.Cb=function(a){if(a instanceof g.Bb&&a.constructor===g.Bb&&a.F===Ab)return a.C;g.xa(a);return"type_error:SafeUrl"};
g.Fb=function(a){if(a instanceof g.Bb)return a;a=a.Od?a.Tc():String(a);g.Db.test(a)||(a="about:invalid#zClosurez");return g.Eb(a)};
g.Eb=function(a){var b=new g.Bb;b.C=a;return b};
g.Hb=function(){this.C="";this.F=g.Gb};
g.Ib=function(a){var b=new g.Hb;b.C=a;return b};
g.Kb=function(){this.C="";this.F=g.Jb};
g.Lb=function(a){var b=new g.Kb;b.C=a;return b};
g.Nb=function(){this.C="";this.D=g.Mb;this.F=null};
g.Ob=function(a,b){var c=new g.Nb;c.C=a;c.F=b;return c};
g.Pb=function(a,b){var c=b instanceof g.Bb?b:g.Fb(b);a.href=g.Cb(c)};
g.Qb=function(a,b){var c=b instanceof g.Bb?b:g.Fb(b);a.href=g.Cb(c)};
g.Rb=function(a,b){return g.Ob(b,null)};
g.Sb=function(a,b){this.x=g.ra(a)?a:0;this.y=g.ra(b)?b:0};
g.Tb=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Ub=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.Vb=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.sa(a)?window.document.getElementById(a):a};
g.Wb=function(a){var b=window.document;return g.sa(a)?b.getElementById(a):a};
g.Yb=function(a,b){g.$a(b,function(b,d){b&&b.Od&&(b=b.Tc());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Xb.hasOwnProperty(d)?a.setAttribute(Xb[d],b):g.Pa(d,"aria-")||g.Pa(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.$b=function(a){return g.Zb(a||window)};
g.Zb=function(a){a=a.document;a=g.ac(a)?a.documentElement:a.body;return new g.Vb(a.clientWidth,a.clientHeight)};
g.cc=function(a,b,c){return g.bc(window.document,arguments)};
g.bc=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ta(d.name),'"');if(d.type){c.push(' type="',g.Ta(d.type),'"');var e={};g.ib(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.sa(d)?c.className=d:g.ya(d)?c.className=d.join(" "):g.Yb(c,d));2<b.length&&g.dc(a,c,b,2);return c};
g.dc=function(a,b,c,d){function e(c){c&&b.appendChild(g.sa(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.za(f)||g.Ba(f)&&0<f.nodeType?e(f):(0,g.y)(paa(f)?g.Ma(f):f,e)}};
g.ac=function(a){return"CSS1Compat"==a.compatMode};
g.ec=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.fc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.gc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Ba(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Aa(a))return"function"==typeof a.item}return!1};
g.hc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.ic=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.jc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.kc=function(a,b){a.style.height=g.jc(b,!0)};
g.lc=function(a,b){a.style.width=g.jc(b,!0)};
g.mc=function(a){return function(){return a}};
g.nc=function(a){return!!a.google_async_iframe_id};
oc=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
qaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=r=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],n=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var r=l^d&(f^l);var w=1518500249}else r=d^f^l,w=1859775393;else 60>c?(r=d&f|l&(d|f),w=2400959708):(r=d^f^l,w=3395469782);r=((a<<5|a>>>27)&4294967295)+r+n+w+b[c]&4294967295;n=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=r}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+n&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==r)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[r++]=a[d++],w++,64==r)for(r=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>r?c(l,56-r):c(l,64-(r-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var n=24;0<=n;n-=8)a[d++]=e[k]>>n&255;return a}
for(var e=[],f=[],k=[],l=[128],n=1;64>n;++n)l[n]=0;var r,w;a();return{reset:a,update:c,digest:d,Xv:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
raa=function(a,b,c){var d=[],e=[];if(1==(g.ya(c)?2:1))return e=[b,a],(0,g.y)(d,function(a){e.push(a)}),pc(e.join(" "));
var f=[],k=[];(0,g.y)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ja(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.y)(d,function(a){e.push(a)});
a=pc(e.join(" "));a=[c,a];g.Ja(k)||a.push(k.join(""));return a.join("_")};
pc=function(a){var b=qaa();b.update(a);return b.Xv().toLowerCase()};
g.qc=function(a){this.C=a||{cookie:""}};
g.rc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Ua)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
saa=function(){var a=[],b=oc(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.qc(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.qc(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.m.location.href);return d&&b&&c?[c,raa(oc(d),b,a||null)].join(" "):null}return null};
g.sc=function(){this.Ic=this.Ic;this.Wb=this.Wb};
g.vc=function(a,b){g.tc(a,g.u(g.uc,b))};
g.tc=function(a,b){a.Ic?g.ra(void 0)?b.call(void 0):b():(a.Wb||(a.Wb=[]),a.Wb.push(g.ra(void 0)?(0,g.t)(b,void 0):b))};
g.uc=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.wc=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Os=!0};
g.xc=function(a){var b=g.q("window.location.href");if(g.sa(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.yc=function(a,b){g.wc.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.L=!1;this.pointerId=0;this.pointerType="";this.xc=null;a&&this.init(a,b)};
g.Ac=function(a){return!(!a||!a[zc])};
uaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Zg=e;this.key=++taa;this.tg=this.Rh=!1};
Bc=function(a){a.tg=!0;a.listener=null;a.C=null;a.src=null;a.Zg=null};
g.Cc=function(a){this.src=a;this.listeners={};this.C=0};
Dc=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.La(a.listeners[c],b);d&&(Bc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Ec=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.tg&&f.listener==b&&f.capture==!!c&&f.Zg==d)return e}return-1};
g.Gc=function(a,b,c,d,e){if(d&&d.once)return g.Fc(a,b,c,d,e);if(g.ya(b)){for(var f=0;f<b.length;f++)g.Gc(a,b[f],c,d,e);return null}c=g.Hc(c);return g.Ac(a)?a.O(b,c,g.Ba(d)?!!d.capture:!!d,e):Ic(a,b,c,!1,d,e)};
Ic=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ba(e)?!!e.capture:!!e,l=g.Jc(a);l||(a[Kc]=l=new g.Cc(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=vaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)waa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Lc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Mc++;return c};
vaa=function(){var a=xaa,b=Nc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Fc=function(a,b,c,d,e){if(g.ya(b)){for(var f=0;f<b.length;f++)g.Fc(a,b[f],c,d,e);return null}c=g.Hc(c);return g.Ac(a)?a.Ke(b,c,g.Ba(d)?!!d.capture:!!d,e):Ic(a,b,c,!0,d,e)};
g.Oc=function(a,b,c,d,e){if(g.ya(b))for(var f=0;f<b.length;f++)g.Oc(a,b[f],c,d,e);else d=g.Ba(d)?!!d.capture:!!d,c=g.Hc(c),g.Ac(a)?a.Wa(b,c,d,e):a&&(a=g.Jc(a))&&(b=a.jf(b,c,d,e))&&g.Pc(b)};
g.Pc=function(a){if(g.ta(a)||!a||a.tg)return!1;var b=a.src;if(g.Ac(b))return Dc(b.wd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Lc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Mc--;(c=g.Jc(b))?(Dc(c,a),0==c.C&&(c.src=null,b[Kc]=null)):Bc(a);return!0};
Lc=function(a){return a in Qc?Qc[a]:Qc[a]="on"+a};
Sc=function(a,b,c,d){var e=!0;if(a=g.Jc(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.tg&&(f=Rc(f,d),e=e&&!1!==f)}return e};
Rc=function(a,b){var c=a.listener,d=a.Zg||a.src;a.Rh&&g.Pc(a);return c.call(d,b)};
xaa=function(a,b){if(a.tg)return!0;if(!Nc){var c=b||g.q("window.event"),d=new g.yc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(n){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Sc(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Sc(c[k],f,!1,d),e=e&&l}return e}return Rc(a,new g.yc(b,
this))};
g.Jc=function(a){a=a[Kc];return a instanceof g.Cc?a:null};
g.Hc=function(a){if(g.Aa(a))return a;a[Tc]||(a[Tc]=function(b){return a.handleEvent(b)});
return a[Tc]};
g.Uc=function(){g.sc.call(this);this.wd=new g.Cc(this);this.ev=this;this.Xl=null};
Vc=function(a,b,c,d){b=a.wd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.tg&&k.capture==c){var l=k.listener,n=k.Zg||k.src;k.Rh&&Dc(a.wd,k);e=!1!==l.call(n,d)&&e}}return e&&0!=d.Os};
Wc=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
Xc=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
Yc=function(a){g.m.setTimeout(function(){throw a;},0)};
yaa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Za("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.jb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ra(c.next)){c=c.next;var a=c.Hn;c.Hn=null;a()}};
return function(a){d.next={Hn:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
Zc=function(){this.F=this.C=null};
$c=function(){this.next=this.scope=this.mc=null};
dd=function(a,b){ad||zaa();bd||(ad(),bd=!0);cd.add(a,b)};
zaa=function(){if(-1!=String(g.m.Promise).indexOf("[native code]")){var a=g.m.Promise.resolve(void 0);ad=function(){a.then(ed)}}else ad=function(){var a=ed;
!g.Aa(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.Za("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(fd||(fd=yaa()),fd(a)):g.m.setImmediate(a)}};
ed=function(){for(var a;a=cd.remove();){try{a.mc.call(a.scope)}catch(b){Yc(b)}Xc(hd,a)}bd=!1};
g.id=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.jd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.ld=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.ua)try{var c=this;a.call(b,function(a){g.kd(c,2,a)},function(a){g.kd(c,3,a)})}catch(d){g.kd(this,3,d)}};
md=function(){this.next=this.context=this.F=this.G=this.C=null;this.D=!1};
g.od=function(a,b,c){var d=nd.get();d.G=a;d.F=b;d.context=c;return d};
g.qd=function(a,b,c){pd(a,b,c,null)||dd(g.u(b,a))};
g.rd=function(a){return new g.ld(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,n;l<a.length;l++)n=a[l],g.qd(n,g.u(f,l),k);
else b(e)})};
g.td=function(a,b){return sd(a,null,b,void 0)};
ud=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?ud(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):vd(c),wd(c,e,3,b)))}a.D=null}else g.kd(a,3,b)};
g.yd=function(a,b){a.F||2!=a.C&&3!=a.C||xd(a);a.G?a.G.next=b:a.F=b;a.G=b};
sd=function(a,b,c,d){var e=g.od(null,null,null);e.C=new g.ld(function(a,k){e.G=b?function(c){try{var e=b.call(d,c);a(e)}catch(r){k(r)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.ra(e)&&b instanceof g.zd?k(b):a(e)}catch(r){k(r)}}:k});
e.C.D=a;g.yd(a,e);return e.C};
g.kd=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,pd(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,xd(a),3!=b||c instanceof g.zd||Aaa(a,c)))};
pd=function(a,b,c,d){if(a instanceof g.ld)return g.yd(a,g.od(b||g.ua,c||null,d)),!0;if(g.jd(a))return a.then(b,c,d),!0;if(g.Ba(a))try{var e=a.then;if(g.Aa(e))return Baa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Baa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(n){f(n)}};
xd=function(a){a.L||(a.L=!0,dd(a.J,a))};
vd=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
wd=function(a,b,c,d){if(3==c&&b.F&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Ad(b,c,d);else try{b.D?b.G.call(b.context):Ad(b,c,d)}catch(e){Bd.call(null,e)}Xc(nd,b)};
Ad=function(a,b,c){2==b?a.G.call(a.context,c):a.F&&a.F.call(a.context,c)};
Aaa=function(a,b){a.H=!0;dd(function(){a.H&&Bd.call(null,b)})};
g.zd=function(a){g.Ea.call(this,a)};
g.Cd=function(a,b,c){if(g.Aa(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.Dd=function(a){g.m.clearTimeout(a)};
g.Ed=function(a,b,c){g.sc.call(this);this.C=a;this.D=b||0;this.F=c;this.wc=(0,g.t)(this.Jk,this)};
g.Fd=function(a){if(a.classList)return a.classList;a=a.className;return g.sa(a)&&a.match(/\S+/g)||[]};
g.A=function(a,b){return a.classList?a.classList.contains(b):g.Ia(g.Fd(a),b)};
g.Gd=function(){};
Id=function(a){if(a instanceof g.Gd)return a;if("function"==typeof a.dd)return a.dd(!1);if(g.za(a)){var b=0,c=new g.Gd;c.next=function(){for(;;){if(b>=a.length)throw g.Hd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Jd=function(a,b,c){if(g.za(a))try{(0,g.y)(a,b,c)}catch(d){if(d!==g.Hd)throw d;}else{a=Id(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Hd)throw d;}}};
Caa=function(a){if(g.za(a))return g.Ma(a);a=Id(a);var b=[];g.Jd(a,function(a){b.push(a)});
return b};
g.Ld=function(a){var b=[];Kd(new Daa,a,b);return b.join("")};
Daa=function(){};
Kd=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Kd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Md(d,c),c.push(":"),Kd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Md(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Md=function(a,b){b.push('"',a.replace(Eaa,function(a){var b=Nd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Nd[a]=b);return b}),'"')};
g.Od=function(a){g.sc.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.Pd=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ga(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.rd(b)}};
Faa=function(a,b,c){dd(function(){a.apply(b,c)})};
g.Qd=function(a){this.C=a};
Rd=function(a){this.C=a};
Sd=function(a){this.data=a};
Td=function(a){return!g.ra(a)||a instanceof Sd?a:new Sd(a)};
g.Ud=function(a){this.C=a};
g.Wd=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Vd)()||!!b&&b>(0,g.Vd)()};
g.Xd=function(a){this.C=a};
Gaa=function(){};
g.Yd=function(){};
g.Zd=function(a){this.C=a};
g.$d=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
ae=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.C=a};
g.be=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.ce=function(a){return a.match(Haa)};
g.de=function(a){return a?(0,window.decodeURI)(a):a};
g.ee=function(a){return g.de(g.ce(a)[3]||null)};
g.fe=function(a){a=g.ce(a);return g.be(null,null,null,null,a[5],a[6],a[7])};
g.ge=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.he=function(a,b,c){if(g.ya(b))for(var d=0;d<b.length;d++)g.he(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ra(b)))};
g.ie=function(a){var b=[],c;for(c in a)g.he(c,a[c],b);return b.join("&")};
g.je=function(a,b){var c=g.ie(b);return g.ge(a,c)};
ke=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
le=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.ne=function(a){le(g.me,arguments)};
oe=function(a,b){var c=g.B(a,void 0);c?c.push(b):g.ne(a,[b])};
g.B=function(a,b){return a in g.me?g.me[a]:b};
qe=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.pe(b)}}:a};
g.pe=function(a,b,c,d,e){var f=g.q("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.B("ERRORS",[]),f.push([a,b,c,d,e]),g.ne("ERRORS",f))};
g.re=function(a){g.pe(a,"WARNING",void 0,void 0,void 0)};
Iaa=function(a,b,c,d,e){var f=!1,k;if((k=(k=g.me.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,n=k.length;l<n;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.sa(a)?f=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.pe(e))};
g.te=function(a){return!!se(a)};
g.ue=function(a){return Number(se(a)||0)};
se=function(a){return g.B("EXPERIMENT_FLAGS",{})[a]};
g.C=function(a,b){return a?a.dataset?a.dataset[g.ve(b)]:a.getAttribute("data-"+b):null};
g.ve=function(a){return we[a]||(we[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.xe=function(a,b){g.Aa(a)&&(a=qe(a));return window.setTimeout(a,b)};
g.ye=function(a,b){g.Aa(a)&&(a=qe(a));return window.setInterval(a,b)};
g.ze=function(a){window.clearTimeout(a)};
g.Be=function(a){window.clearInterval(a)};
g.D=function(a,b,c){var d=Ce();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){De[e]&&b.apply(c||window,d)};
try{Ee[a]?k():g.xe(k,0)}catch(l){g.pe(l)}},c);
De[e]=!0;Fe[a]||(Fe[a]=[]);Fe[a].push(e);return e}return 0};
g.Ge=function(a){var b=Ce();b&&(g.ta(a)?a=[a]:g.sa(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.y)(a,function(a){b.unsubscribeByKey(a);delete De[a]}))};
g.E=function(a,b){var c=Ce();return c?c.publish.apply(c,arguments):!1};
g.He=function(a,b){Ee[a]=!0;var c=Ce();c=c?c.publish.apply(c,arguments):!1;Ee[a]=!1;return c};
Ce=function(){return g.q("ytPubsubPubsubInstance")};
g.Je=function(a,b){var c=g.Ie(a);window.spf.script.load(a,c,b)};
g.Ie=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Jaa,""),b=b.replace(Kaa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
Le=function(){return null!=g.Ke};
g.Me=function(){return g.Ke?g.Ke.invoke():null};
Laa=function(){};
g.Oe=function(a,b){return g.Ne(a,1,b)};
g.Qe=function(a){for(var b=0,c=a.length;b<c;b++)g.Pe(a[b])};
Re=function(){};
g.Se=function(){return!!g.q("yt.scheduler.instance")};
g.Ne=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.xe(a,c||0)};
g.Pe=function(a){if(!(0,window.isNaN)(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.ze(a)}};
Te=function(){return(0,window.parseInt)(g.B("DCLKSTAT",0),10)};
Maa=function(){if(!Ue)return null;var a=Ue();return"open"in a?a:null};
g.We=function(a){switch(g.Ve(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Ve=function(a){return a&&"status"in a?a.status:-1};
g.Xe=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Sa(e[0]||"");e=g.Sa(e[1]||"");f in b?g.ya(b[f])?g.Oa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.Ze=function(a,b){return g.Ye(a,b||{},!0)};
g.Ye=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Xe(e[1]||"");for(var f in b)if(c||!g.bb(e,f))e[f]=b[f];return g.je(a,e)+d};
Naa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.ce(a)[1]||null,e=g.ee(a);d&&e?(d=c,c=g.ce(a),d=g.ce(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.ee(c)==e&&(Number(g.ce(c)[4]||null)||null)==(Number(g.ce(a)[4]||null)||null):!0;for(var f in $e){if((e=d=g.B($e[f]))&&!(e=c)){e=f;var k=g.B("CORS_HEADER_WHITELIST")||{},l=g.ee(a);e=l?(k=k[l])?g.Ia(k,e):!1:!0}e&&(b[f]=d)}return b};
Oaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=af(a,b);var d=bf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.ze(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.m;c?b.Z&&b.Z.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ab&&b.ab.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Zq&&0<b.timeout&&(f=g.xe(function(){e||(e=!0,g.ze(f),b.Zq.call(b.context||g.m))},b.timeout))}else g.F(a,b)};
g.F=function(a,b){var c=b.format||"JSON";a=af(a,b);var d=bf(a,b),e=!1,f,k=cf(a,function(a){if(!e){e=!0;f&&g.ze(f);var d=g.We(a),k=null;if(d||400<=a.status&&500>a.status)k=Paa(c,a,b.pb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.m;d?b.Z&&b.Z.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.ab&&b.ab.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.hc&&0<b.timeout&&(f=g.xe(function(){e||(e=!0,k.abort(),g.ze(f),b.hc.call(b.context||g.m,k))},b.timeout));
return k};
af=function(a,b){b.gB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.B("XSRF_FIELD_NAME",void 0),d=b.ua;d&&(d[c]&&delete d[c],a=g.Ze(a,d));return a};
bf=function(a,b){var c=g.B("XSRF_FIELD_NAME",void 0),d=g.B("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ka,k=g.B("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.qw||g.ee(a)&&!b.withCredentials&&g.ee(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ka&&b.ka[k]||(f||(f={}),f[c]=d);f&&g.sa(e)&&(e=g.Xe(e),g.ib(e,f),e=b.gs&&"JSON"==b.gs?JSON.stringify(e):g.ie(e));f=e||f&&!g.db(f);!df&&f&&"POST"!=b.method&&(df=!0,g.pe(Error("AJAX request with postData should use POST")));
return e};
Paa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?ef(b):null)d={},b=b.getElementsByTagName("*"),(0,g.y)(b,function(a){d[a.tagName]=g.ff(a)})}c&&gf(d);
return d};
gf=function(a){if(g.Ba(a))for(var b in a)"html_content"==b||g.Qa(b,"_html")?a[b]=g.Rb(g.zb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):gf(a[b])};
ef=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.ff=function(a){var b="";(0,g.y)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.hf=function(a,b){b.method="POST";b.ka||(b.ka={});return g.F(a,b)};
cf=function(a,b,c,d,e,f,k){function l(){4==(n&&"readyState"in n?n.readyState:0)&&b&&qe(b)(n)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var n=Maa();if(!n)return null;"onloadend"in n?n.addEventListener("loadend",l,!1):n.onreadystatechange=l;n.open(c,a,!0);f&&(n.responseType=f);k&&(n.withCredentials=!0);c="POST"==c;if(e=Naa(a,e))for(var r in e)n.setRequestHeader(r,e[r]),"content-type"==r.toLowerCase()&&(c=!1);c&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");n.send(d);return n};
jf=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.lf=function(a){var b=new jf;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.mf=function(a){var b=new jf;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.of=function(a){var b=a.__yt_uid_key;b||(b=nf(),a.__yt_uid_key=b);return b};
g.pf=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Qaa+"VisibilityState";if(b in a)return a[b]};
g.qf=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Raa||(this[b]=a[b]);this.scale=a.scale;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.C=a.pageX;this.F=a.pageY}};
rf=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.sf=function(a){g.ra(a.C)||rf(a);return a.C};
g.tf=function(a){g.ra(a.F)||rf(a);return a.F};
g.vf=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.cb(uf,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.G=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.vf(a,b,c,d);if(e)return e;e=++wf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.qf(d);if(!g.hc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.qf(b);
b.currentTarget=a;return c.call(a,b)};
k=qe(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);uf[e]=[a,b,c,k,d];return e};
g.I=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.y)(a,function(a){if(a in uf){var b=uf[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete uf[a]}}))};
g.xf=function(a,b,c){var d;return d=g.G(a,b,function(){g.I(d);c.apply(a,arguments)},!1)};
g.yf=function(a){for(var b in uf)uf[b][0]==a&&g.I(b)};
g.zf=function(a){this.wc=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.G(window,"mousemove",(0,g.t)(this.W,this));this.N=g.ye((0,g.t)(this.R,this),25)};
Af=function(){g.sc.call(this);this.C=[]};
Bf=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.gb(Saa);this.assets=a.assets||{};this.attrs=a.attrs||g.gb(Taa);this.params=a.params||g.gb(Uaa);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Cf=function(a){a instanceof Bf||(a=new Bf(a));return a};
g.Ff=function(a,b,c,d,e,f){f=f||{};f.name=c||g.B("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Df||(c=a.stacktrace,d=a.columnNumber,a=g.xc(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),Ef[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={ua:{a:"logerror",t:"jserror",type:a.name,
msg:a.message.substr(0,1E3),line:e,level:void 0===b?"ERROR":b,"client.name":f.name},ka:{url:g.B("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ka.stack=c);for(var k in f)b.ka["client."+k]=f[k];if(k=g.B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ka[l]=k[l];g.F("/error_204",b);Ef[a.message]=!0;Df++}};
g.Lf=function(a,b){g.Gf[a.endpoint]=b;if(a.Vh){var c=a.Vh;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Hf[a.Vh.token]=d;c=If(a.endpoint,a.Vh.token)}else c=If(a.endpoint);c.push(a.payload);c.length>=(g.ue("web_logging_max_batch")||20)?g.Jf():g.Kf()};
g.Jf=function(){g.ze(g.Mf);if(!g.db(g.Nf)){for(var a in g.Nf){var b=g.Of[a];if(!b){var c=g.Gf[a];if(!c)continue;b=new c;g.Of[a]=b}c=void 0;var d=a,e=b,f=Vaa[d],k=Pf[d]||{};Pf[d]=k;b=Math.round(g.Qf());for(c in g.Nf[d]){var l=g.Rf(e);l[f]=If(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var n=Hf[c];if(n)a:{var r=l,w=c;if(n.videoId)var z="VIDEO";else if(n.playlistId)z="PLAYLIST";else break a;r.credentialTransferTokenTargetId=n;r.context=
r.context||{};r.context.user=r.context.user||{};r.context.user.credentialTransferTokens=[{token:w,scope:z}]}delete Hf[c];g.Sf(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.Nf[a]}g.db(g.Nf)||g.Kf()}};
Waa=function(){var a=[];for(e in g.Nf){var b=Pf[e]||{};Pf[e]=b;for(var c in g.Nf[e]){var d=If(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.Qf());for(var f in Pf)b=Pf[f],b.eventType=f in Tf?Tf[f]:"UNKNOWN_TYPE",c=Uf[f],b.metricIntervalMs=c?e-c:e-g.Vf,a.push(b),Uf[f]=e,delete Pf[f];return a};
g.Kf=function(){g.ze(g.Mf);g.Mf=g.xe(g.Jf,g.B("LOGGING_BATCH_TIMEOUT",g.Wf||1E4))};
If=function(a,b){b=void 0===b?"":b;g.Nf[a]=g.Nf[a]||{};g.Nf[a][b]=g.Nf[a][b]||[];return g.Nf[a][b]};
g.Zf=function(a){if(null==g.q("_lact",window)){var b=(0,window.parseInt)(g.B("LACT"),10);b=(0,window.isFinite)(b)?(0,g.Vd)()-Math.max(b,0):-1;g.p("_lact",b,window);g.p("_fact",b,window);-1==b&&Xf();g.G(window.document,"keydown",Xf);g.G(window.document,"keyup",Xf);g.G(window.document,"mousedown",Xf);g.G(window.document,"mouseup",Xf);g.te("lact_local_listeners")||a?(g.G(window,"resize",function(){Yf("resize",200)}),g.G(window,"scroll",function(){Yf("scroll",200)}),new g.zf(function(){Yf("mouse",100)}),
g.G(window.document,"touchstart",Xf),g.G(window.document,"touchend",Xf)):(g.D("page-mouse",Xf),g.D("page-scroll",Xf),g.D("page-resize",Xf))}};
Yf=function(a,b){$f[a]||($f[a]=!0,g.Oe(function(){Xf();$f[a]=!1},b))};
Xf=function(){null==g.q("_lact",window)&&g.Zf();var a=(0,g.Vd)();g.p("_lact",a,window);-1==g.q("_fact",window)&&g.p("_fact",a,window);(a=g.q("ytglobal.ytUtilActivityCallback_"))&&a()};
g.ag=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.Vd)()-a,0)};
g.cg=function(a,b,c,d){var e=g.bg,f={};f.eventTimeMs=Math.round(c||g.Qf());f[a]=b;f.context={lastActivityMs:String(c?-1:g.ag())};g.Lf({endpoint:"log_event",payload:f,Vh:d},e)};
Xaa=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.bg=function(a){this.C=a||{innertubeApiKey:g.B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.B("INNERTUBE_API_VERSION",void 0),iB:g.B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),kB:g.B("INNERTUBE_CONTEXT_HL",void 0),jB:g.B("INNERTUBE_CONTEXT_GL",void 0),lB:g.B("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
g.Rf=function(a){a=a.C;a={client:{hl:a.kB,gl:a.jB,clientName:a.iB,clientVersion:a.innertubeContextClientVersion}};g.B("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.B("DELEGATED_SESSION_ID")});return{context:a}};
g.Sf=function(a,b,c,d){!g.B("VISITOR_DATA")&&.01>Math.random()&&g.pe(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.B("VISITOR_DATA","")},method:"POST",ka:c,gs:"JSON",hc:function(){d.hc()},
Zq:d.hc,Z:function(a,b){d.Z&&d.Z(b)},
Yq:function(a){d.Z&&d.Z(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Xq:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=saa();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.B("SESSION_INDEX",0));var k="",l=a.C.lB;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);a=""+k+Xaa(a.C.innertubeApiVersion,b,c)+"?alt=json&key="+a.C.innertubeApiKey;try{g.te("use_fetch_for_op_xhr")?Oaa(a,e):g.hf(a,e)}catch(n){if("InvalidAccessError"==n)g.pe(Error("An extension is blocking network request."),"WARNING");else throw n;}};
g.dg=function(a,b,c){g.cg(a,b,c,void 0)};
g.eg=function(){g.te("log_web_meta")&&Waa().forEach(function(a){g.dg("delayedEventMetricCaptured",a)})};
g.fg=function(a,b,c,d,e){this.D=a;this.H=b;this.G=c;this.F=d;this.C=e};
g.gg=function(a){return new g.fg(a)};
g.hg=function(a){var b={};void 0!==a.D?b.trackingParams=a.D:(b.veType=a.H,null!=a.G&&(b.veCounter=a.G),null!=a.F&&(b.elementIndex=a.F));void 0!==a.C&&(b.dataElement=g.hg(a.C));return b};
g.ig=function(a,b,c){(0,g.y)(b,function(b){g.cg("visualElementHidden",{csn:a,ve:g.hg(b),eventType:c?16:8})})};
kg=function(a,b){var c=Object.keys(a).join("");jg("info_"+c+"_"+b)||(a.clientActionNonce=b,g.dg("latencyActionInfo",a))};
jg=function(a){lg[a]=lg[a]||{count:0};var b=lg[a];b.count++;b.time=g.Qf();mg||(mg=g.Ne(Yaa,0,5E3));return 10<b.count?(11==b.count&&g.Ff(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
Yaa=function(){var a=g.Qf(),b;for(b in lg)6E4<a-lg[b].time&&delete lg[b];mg=0};
og=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Vd)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ng)for(a=1,b=0;b<ng.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ng.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&
63));return a.join("")};
g.sg=function(a){var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.ag()>b)&&"visible"==g.pf()){b=-1;g.pg&&(b=Math.round(g.Qf()-g.pg));var c=String;var d=g.q("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Vd)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.qg,index:String(rg),lastEventDeltaMs:String(b),trigger:a};g.cg("foregroundHeartbeat",a);g.p("_fact",-1,window);rg++;g.pg=g.Qf()}};
g.vg=function(a){if(!g.tg&&!g.ug||!window.JSON)return null;try{var b=g.tg.get(a)}catch(c){}if(!g.sa(b))try{b=g.ug.get(a)}catch(c){}if(!g.sa(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.wg=function(){var a=g.B("ROOT_VE_TYPE",void 0);return a?new g.fg(void 0,a,void 0):null};
g.xg=function(){return g.vg("yt-interaction-logging-parent")};
g.yg=function(){var a=g.B("client-screen-nonce")||g.B("EVENT_ID");return a?a:null};
g.zg=function(a,b){a=a||"";var c=a.match(Zaa);window.spf.style.load(a,c?c[1]:"",b)};
g.Ag=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Ya,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.cc("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.gc(a).body.appendChild(a)):e?cf(a,b,"POST",e,d):g.B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?cf(a,b,"GET","",d):$aa(a,b))};
$aa=function(a,b){var c=new window.Image,d=""+aba++;Bg[d]=c;c.onload=c.onerror=function(){b&&Bg[d]&&b();delete Bg[d]};
c.src=a};
g.Cg=function(a,b){this.version=a;this.args=b};
g.Dg=function(a,b){this.topic=a;this.C=b};
g.Fg=function(a,b){var c=g.Eg();c&&c.publish.call(c,a.toString(),a,b)};
g.Eg=function(){return g.q("ytPubsub2Pubsub2Instance")};
bba=function(a){if(Gg.getEntriesByType){var b=Gg.getEntriesByType("paint");if(b=g.Ga(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Aa(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
Hg=function(){var a=g.B("TIMING_TICK_EXPIRATION");a||(a={},g.ne("TIMING_TICK_EXPIRATION",a));return a};
Ig=function(){var a=Hg(),b;for(b in a)g.Pe(a[b]);g.ne("TIMING_TICK_EXPIRATION",{})};
Jg=function(a,b){g.Cg.call(this,1,arguments)};
Kg=function(a,b){g.Cg.call(this,1,arguments)};
Ng=function(a){Lg(a);cba();Mg(!1,a);a||(g.B("TIMING_ACTION")&&g.ne("PREVIOUS_ACTION",g.B("TIMING_ACTION")),g.ne("TIMING_ACTION",""))};
g.Sg=function(a,b,c){b||"_"==a[0]||Og(a,c);var d=Pg(c),e=b||g.Qf();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=Hg();var f=e[a];f&&(g.Pe(f),e[a]=0);Qg(a,b,c)||g.Rg(!1,c);return d[a]};
Og=function(a,b){Gg.mark&&(g.Pa(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Gg.mark(a))};
Ug=function(a,b){Tg("yt_sts",a,void 0);g.Sg("_start",b,void 0)};
Tg=function(a,b,c){Vg(c)[a]=b;Wg(a,b,c)};
Xg=function(a){var b=Vg(void 0);return a in b};
Yg=function(a){var b=Pg(a);if(b.aft)return b.aft;a=g.B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
Zg=function(a){g.Sg("nreqs",a.requestStart,void 0);g.Sg("nress",a.responseStart,void 0);g.Sg("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.Sg("nrs",a.redirectStart,void 0),g.Sg("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.Sg("ndnss",a.domainLookupStart,void 0),g.Sg("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.Sg("ntcps",a.connectStart,void 0),g.Sg("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.Sg("nstcps",a.secureConnectionStart,void 0),g.Sg("ntcpe",a.connectEnd,void 0))};
g.Rg=function(a,b){if(!$g(b)){var c=g.B((b||"")+"TIMING_ACTION",void 0),d=Pg(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Yg(b)))if(g.te("tighter_critical_section")&&!ah&&(g.Fg(dba,new Jg(Math.round(c-d._start),b)),ah=!0),a||b)bh(b);else{c=!0;var e=g.B("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&bh(b)}}};
eba=function(){switch(g.pf()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
bh=function(a){Ig();if(!g.te("csi_on_gel")){var b=Pg(a),c=Vg(a),d=b._start,e;for(e in b)if(g.Pa(e,"_")&&g.ya(b[e])){var f=e.slice(1);if(f in fba){var k=(0,g.ch)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.q("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))dh(k,f),Ng(a)}else{var l=g.B("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.B((a||"")+"TIMING_ACTION",void 0)};var n=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var r=window.location.protocol+g.q("ytplayer.config.assets.js");(r=Gg.getEntriesByName?Gg.getEntriesByName(r)[0]:null)?c.h5jse=Math.round(c.h5jse-r.responseEnd):delete c.h5jse}b.aft=Yg(a);gba(a)&&"youtube"==l&&(Tg("yt_lt","hot_bg",a),l=
b.vc,r=b.pbs,delete b.aft,c.aft=Math.round(r-l));for(var w in c)"_"!=w.charAt(0)&&(k[w]=c[w]);b.ps=g.Qf();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,w.push(e+"."+l));k.rt=w.join(",");(b=g.q("ytdebug.logTiming"))&&b(k,c);dh(k,f,a);g.Fg(hba,new Kg(c.aft+(n||0),a))}}};
fh=function(a){if(!$g(void 0)){if(!g.te("send_empty_timing")){var b=g.B("CSI_SERVICE_NAME","youtube");if(!g.B("TIMING_ACTION",void 0)||!b)return}g.Sg("aa",void 0,void 0);Tg("ap",1,void 0);Tg("yt_fss",a,void 0);!g.te("enable_csi_abandonment_info")||Xg("yt_lt")||eh();bh(void 0)}};
iba=function(){if("cold"==Vg().yt_lt){var a=Pg(),b=gh(),c;for(c in a)g.Pa(c,"_")||"tick_"+c in b||Qg(c,a[c]);a=Vg();for(c in a)"info_"+c in b||Wg(c,a[c])}};
Qg=function(a,b,c){gh(c)["tick_"+a]=b;c||b||g.Qf();return g.te("csi_on_gel")?(c=hh(c),"_start"==a?jg("baseline_"+c)||g.dg("latencyActionBaselined",{clientActionNonce:c},b):jg("tick_"+a+"_"+c)||g.dg("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Wg=function(a,b,c){gh(c)["info_"+a]=b;if(g.te("csi_on_gel"))if(a in ih){var d={};a=ih[a];g.Ia(jba,a)&&(b=!!b);a=a.split(".");for(var e=d,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];d[a[a.length-1]]=b;b=hh(c);kg(d,b)}else g.Ia(kba,a)||g.pe(Error("Unknown label "+a+" logged with GEL CSI."))};
eh=function(){var a=g.B("TIMING_INFO",{});for(b in a)Tg(b,a[b]);Tg("is_nav",1);(a=g.yg())&&Tg("csn",a);(a=g.B("PREVIOUS_ACTION",void 0))&&Tg("pa",a);var b=Vg();b.p=g.B("CLIENT_PROTOCOL")||"unknown";b.t=g.B("CLIENT_TRANSPORT")||"unknown";Tg("yt_vis",eba());if("cold"==b.yt_lt){a=Gg.timing||{};a.navigationStart&&(g.Sg("srt",a.responseStart),1!=b.prerender&&Ug("n",a.navigationStart));b=bba(a);0<b&&g.Sg("fpt",b);Zg(a);Gg.getEntriesByType&&lba();a=[];if(window.document.querySelector&&Gg&&Gg.getEntriesByName)for(var c in jh)b=
jh[c],mba(c,b)&&a.push(b);a.length&&Tg("rc",a.join(","))}g.te("csi_on_gel")&&(c={},c.actionType=nba[g.B("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=hh(void 0),kg(c,a))};
kh=function(a){return Math.round(Gg.timing.navigationStart+a)};
lba=function(){var a=window.location.protocol,b=Gg.getEntriesByType("resource");b=(0,g.lh)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20180101000345/https://fonts.gstatic.com/s/")});
(b=(0,g.mh)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.Sg("wffs",kh(b.startTime)),g.Sg("wffe",kh(b.responseEnd)))};
mba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=Gg.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.Sg("rsf_"+b,d+Math.round(c.fetchStart)),g.Sg("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(Xg("rc")||Tg("rc",""),0===c.transferSize))?!0:!1:!1};
dh=function(a,b,c){if(g.te("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||g.Ag(a,void 0,void 0,void 0,f)}catch(k){g.Ag(a,void 0,void 0,void 0,f)}}else g.Ag(a);Mg(!0,c)};
nh=function(a){g.p("ytglobal.timingready_",a,void 0)};
hh=function(a){var b=oh(a).nonce;b||(b=og(),oh(a).nonce=b);return b};
Pg=function(a){return oh(a).tick};
Vg=function(a){return oh(a).info};
gh=function(a){a=oh(a);"gel"in a||(a.gel={});return a.gel};
oh=function(a){return g.q("ytcsi."+(a||"")+"data_")||Lg(a)};
Lg=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
$g=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
Mg=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
gba=function(a){var b=Pg(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Vg(a).yt_pvis};
qh=function(a,b){g.sc.call(this);this.H=this.oa=a;this.N=b;this.L=!1;this.api={};this.aa=this.W=null;this.R=new g.Od;g.vc(this,this.R);this.D={};this.ma=this.ia=this.F=this.ib=this.C=null;this.V=!1;this.G=this.J=null;this.Sa={};this.sb=["onReady"];this.eb=null;this.nb=window.NaN;this.X={};ph(this);this.Jh("WATCH_LATER_VIDEO_ADDED",this.gG.bind(this));this.Jh("WATCH_LATER_VIDEO_REMOVED",this.hG.bind(this));this.Jh("onAdAnnounce",this.bv.bind(this));this.wb=new Af(this);g.vc(this,this.wb)};
rh=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
th=function(a){var b=!0,c=sh(a);c&&a.C&&(a=a.C,b=g.C(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
oba=function(a){if(!a.qb()&&!a.V){var b=th(a);if(b&&"html5"==(sh(a)?"html5":null))a.ma="html5",a.L||uh(a);else if(vh(a),a.ma="html5",b&&a.G)a.oa.appendChild(a.G),uh(a);else{a.C.loaded=!0;var c=!1;a.J=function(){c=!0;var b=a.C.clone();g.q("yt.player.Application.create")(a.oa,b);uh(a)};
a.V=!0;b?a.J():(g.Je(a.C.assets.js,a.J),g.zg(a.C.assets.css),wh(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
sh=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
uh=function(a){if(!a.qb()){var b=sh(a),c=!1;try{b&&b.getApiInterface&&b.getApiInterface()&&(c=!0)}catch(d){g.re(Error("Error calling getApiInterface: "+d))}c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||pba(a)):a.nb=g.xe(function(){uh(a)},50)}};
pba=function(a){ph(a);a.L=!0;var b=sh(a);b.addEventListener&&(a.W=xh(a,b,"addEventListener"));b.removeEventListener&&(a.aa=xh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=xh(a,b,e))}for(var f in a.D)a.W(f,a.D[f]);rh(a);a.ia&&a.ia(a.api);a.R.qa("onReady",a.api)};
xh=function(a,b,c){var d=b[c];return function(){try{return a.eb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.eb=e,g.re(e))}}};
ph=function(a){a.L=!1;if(a.aa)for(var b in a.D)a.aa(b,a.D[b]);for(var c in a.X)g.ze((0,window.parseInt)(c,10));a.X={};a.W=null;a.aa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Jh.bind(a);a.api.removeEventListener=a.yK.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.gx.bind(a);a.api.getPlayerType=a.zx.bind(a);a.api.getCurrentVideoConfig=a.Iw.bind(a);a.api.loadNewVideoConfig=a.Kl.bind(a);a.api.isReady=a.ZB.bind(a)};
yh=function(a,b){var c=b;if("string"==typeof b){if(a.Sa[b])return a.Sa[b];c=function(){var a=g.q(b);a&&a.apply(g.m,arguments)};
a.Sa[b]=c}return c?c:null};
qba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.m[c]=function(c){var d=a.C&&a.C.args&&a.C.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.R.qa(b,c);else{var f=g.xe(function(){a.qb()||(a.R.qa(b,c),g.eb(a.X,String(f)))},0);
g.fb(a.X,String(f),!0)}};
return c};
vh=function(a){g.Sg("dcp");a.cancel();ph(a);a.ma=null;a.C&&(a.C.loaded=!1);var b=sh(a);b&&(th(a)||!wh(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.ec(a.oa)};
wh=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.Bh=function(a,b){a=g.sa(a)?g.Wb(a):a;var c=g.zh+"_"+g.Da(a),d=g.Ah[c];if(d)return d.Kl(b),d.api;d=new qh(a,c);g.Ah[c]=d;g.E("player-added",d.api);g.tc(d,g.u(rba,d));g.xe(function(){d.Kl(b)},0);
return d.api};
rba=function(a){delete g.Ah[a.getId()]};
g.Ch=function(a){if(!a)return null;var b=g.zh+"_"+g.Da(a),c=g.Ah[b];c||(c=new qh(a,b),g.Ah[b]=c);return c.api};
g.Dh=function(a){return g.Ch(window.document.getElementById(a))};
Eh=function(){var a=g.wg(),b=g.yg();b&&a&&g.ig(b,[a],!0)};
g.Fh=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?qe(d):null;this.H=e?qe(e):null;this.G=[];this.C=this.F=0};
g.Gh=function(a){g.Pe(a.F);a.F=g.Oe((0,g.t)(a.init,a))};
g.Jh=function(a){a.name in Hh&&Ih(a.name);Hh[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.y)(a.deps,function(b){if(!(b in Hh))throw Error("Module "+b+" required by "+a.name);Hh[b].reqs.push(a.name)});
a.enable()};
Ih=function(a){if(a in Hh){var b=Hh[a];(0,g.y)(b.reqs,function(a){Ih(a)});
try{b.disable()}catch(c){}delete Hh[a]}};
Lh=function(a){le(g.Kh,arguments)};
g.Mh=function(a){return a in g.Kh};
Nh=function(a){le(g.Kh,arguments)};
g.Ph=function(a,b,c,d){g.Oh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Rh=function(a,b,c){var d=g.B("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.ee(window.location.href);e&&d.push(e);e=g.ee(a);if(g.Ia(d,e)||!e&&g.Pa(a,"/"))if(g.te("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.Pb(d,a),a=d.href),a&&(a=g.fe(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.yg();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Xa(a).toString(36),d=b?g.ie(b):"",g.Ph(a,d,c||5),Qh(b))):(c="ST-"+g.Xa(a).toString(36),a=b?g.ie(b):
"",g.Ph(c,a,5),Qh(b))}};
Qh=function(a){if(a){a=a.itct||a.ved;var b=g.q("yt.logging.screen.storeParentElement");a&&b&&b(g.gg(a))}};
g.Sh=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.Qb(d.location,g.je(a,b)+c)};
g.Th=function(a,b){b&&g.Rh(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.Sh(a)};
g.Uh=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.B("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Rh(a,b);if(c)return!1;g.Th(a);return!0};
g.Wh=function(a,b){var c={};c.key=a;c.value=b;return Vh().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.Xh=function(a){return Vh().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
Vh=function(){return Yh?window.Promise.resolve(Yh):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))Yh=b,a(Yh);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),Vh()};
c.onupgradeneeded=sba})};
sba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
yba=function(){Zh++;var a=g.$b(),b=new g.ic(0,0,a.width,a.height);Tg("vph",a.height);Tg("vpw",a.width);g.Sg("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;$h.start();for(var f=0;f<c;f++){var k=a[f];if(ai(k,b)){var l=tba(k);l.then(uba);d.push(l);bi.push(l);k.loadTime||(e=!1)}}e&&Tg("yt_eil",1);g.Sg("vpcc");b=g.rd(d).then(vba);g.td(b,wba);b.then(xba);bi.push(b);return b};
xba=function(){$h.stop()};
wba=function(){g.Sg("vpr")};
ai=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.of(c);if(e in ci)return!0;if(e in di)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return di[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return di[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)ci[d[c]]=!0;return!0};
vba=function(a){var b=g.$b();b=new g.ic(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;ai(a[d].fB,b)&&c<f&&(c=f)}return c};
tba=function(a){var b=Zh;return new g.ld(function(c,d){var e={fB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){Zh!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},ei.push(a))})};
uba=function(a){$h.start();a=a.time;fi<a&&(fi=a,g.Sg("lim",a))};
zba=function(){g.Sg("vptl",fi);g.Sg("vpl",fi)};
Aba=function(){bi.forEach(function(a){a.cancel()});
fi=bi.length=0;ci={};di={};ei.forEach(function(a){a.slt=void 0});
ei.length=0};
g.gi=function(a,b){g.Ag("/gen_204?"+a,b)};
Cba=function(a){if(null==a)return[];var b=[];Bba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.hi=function(){return g.A(g.x("page-container"),"remote-connected")};
Dba=function(){ii=g.ye(ji,5E3);var a=g.ki();a?(a.addEventListener("onReady",ji),a.addEventListener("onStateChange",ji)):li("unable to init PP monitor")};
oi=function(a){for(var b in g.Ah){var c=g.Ah[b];c&&c.cancel()}if(a=a||null){b=g.ki();var d=!0;c=g.mi;g.mi=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(ni="",g.Bh("player-api",a)):b.playVideo();a=g.Cf(a);a.loaded=!0}ji();g.p("ytplayer.config",a,void 0)};
g.ki=function(){return g.Dh("player-api")};
ji=function(){var a=g.ki();if(a){var b=g.x("player");b=!b||g.A(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.B("PAGE_NAME"),e=g.hi();!c||d||e||(li("PP playing off watch (paused)"),a.pauseVideo());b&&d?li("PP off-screen on watch"):b||d||li("PP !off-screen off watch")}};
li=function(a){var b=g.B("PAGE_NAME");b&&(a+="("+[b,ni,g.q("_spf_state.nav-counter")].join()+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.pe(Error(a),"WARNING"))};
qi=function(){g.Sg("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.Sg("cpt");g.E("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?(g.Sg("cpt"),g.E("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){g.Sg("cpt");
g.E("on_cpt_tick",(new Date).getTime())},0);
Eba();g.B("CSI_VIEWPORT")&&(pi=yba(),pi.then(function(a){g.Sg("vpl",a);pi=null},function(){}))};
Eba=function(){ri("init");var a=g.B("PAGE_NAME",void 0);a&&ri("init-"+a)};
ri=function(a){g.Se()?si.push(g.Oe(g.u(g.He,a),0)):g.E(a)};
ti=function(){g.Qe(si);si.length=0;Aba();pi&&(pi.cancel(),pi=null);var a=g.B("PAGE_NAME",void 0);a&&g.He("dispose-"+a);g.He("dispose")};
Fba=function(){qi()};
Gba=function(){g.B("TIMING_REPORT_ON_UNLOAD")&&g.Rg(!0);fh("u");g.sg("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Eh();g.eg();g.Jf();ti();g.He("pageunload")};
ui=function(){Xf()};
vi=function(a){a=a.detail.url;window.yt_spf_loaded_history=!0;Xf();var b=g.xg();if(b&&a){var c=g.hg(b.visualElement);b={csn:b.clientScreenNonce};"trackingParams"in c?b.itct=c.trackingParams:(b.veType=c.veType,b.veCounter=c.veCounter);g.Rh(a,b)}};
Bi=function(){wi=1;xi=yi=0;g.B("TIMING_REPORT_ON_UNLOAD")&&g.Rg(!0);g.te("warm_load_nav_start_web")?(fh("n"),Ng(),nh(!1),g.ne("TIMING_AFT_KEYS",[]),Tg("yt_lt","warm"),g.ne("TIMING_ACTION",""),g.ne("TIMING_WAIT",[]),Ig()):(fh("n"),Ng());Ug("n");Og("nr");Ai(Hba);Eh();g.He("navigate")};
Fi=function(a){a=a.detail.part||a.detail.partial;g.Sg("nc"+yi);++yi;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.Sg("bc");else{var b=1==wi;wi=2;b?(Ai(Iba),Ci()):Ai(Jba);if(b=a&&a.data&&a.data.swfcfg)Di(a.timing,b.args),Ei(b)}};
Gi=function(){g.Sg("np"+xi);++xi};
Hi=function(a){a=a.detail.response;var b=1==wi;wi=3;b&&(Ai(Kba),Ci());if(b=a.data&&a.data.swfcfg)Di(a.timing,b.args),Ei(b)};
Li=function(a){g.Sg("nd");a=a.detail.response;g.Ii=a.cacheKey;a=a.timing;var b=window._spf_state;g.Ji.navigationCount=b&&b["nav-counter"]||0;g.te("warm_load_nav_start_web")?g.Sg("srt",a.responseStart):(Ug("ne",a.responseStart),Tg("srt",Math.max(0,a.responseStart-a.navigationStart)));Tg("yt_lt",a.spfCached?"hot":"warm");Tg("yt_pft",+!!a.spfPrefetched);g.Sg("pfs",a.fetchStart);g.Sg("pfrs",a.responseStart);"redirectStart"in a&&Zg(a);Ai(Ki);window.document.getElementById("content").style.height="";qi();
wi=0};
Mi=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.pe(a)};
Ni=function(a){g.gi(g.ie({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Mba=function(){Lba();window.yt_spf_loaded_history=!1};
Nba=function(){};
Ci=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");ti();a=g.B("PREVIOUS_ACTION");for(var b in g.me)delete g.me[b];g.ne("PREVIOUS_ACTION",a);g.ne("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);if((b=g.ki())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())ni=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),ni="recovered"):ni="missing2"}else ni="missing";ji()};
Ei=function(a){"cfg"in Pg(void 0)||g.Sg("cfg");oi(a)};
Ai=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Pe(Oi);Oi=g.Oe(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.ze(Pi);Pi=g.xe(function(){b.className=e},c)},0)};
Lba=function(){var a=Ki[0]+50;g.ze(Pi);Pi=g.xe(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
Di=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Cba(b));g.B("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.gi(g.ie(c)))};
Ri=function(){return"granted"!=window.Notification.permission?window.Promise.resolve():Qi().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})["catch"](function(){})};
Oba=function(){var a=g.Si&&g.te("enable_firefox_push_notifications");return!(!g.Ti&&!a||g.Ui||g.Vi||g.Wi||!window.navigator.serviceWorker||!window.navigator.serviceWorker.getRegistration||!window.Notification||!window.Promise)};
Yi=function(){Xi({type:"notifications_register",data:g.B("ID_TOKEN")})};
Qi=function(){return window.navigator.serviceWorker.getRegistration(String(se("service_worker_scope")||""))};
Xi=function(a){Qi().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Pba=function(){if(!g.B("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(se("service_worker_push_force_notification_prompt_tag")||"");return a?g.Xh("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
Tba=function(){var a=void 0===a?!1:a;if(!Oba())return window.Promise.resolve();var b=Ri().then(function(){Xi({type:"notifications_check_registration",data:g.B("ID_TOKEN")})});
return"default"!=window.Notification.permission?b:b.then(function(){return Qba(a)}).then(function(a){if(a)return Rba(),Sba().then(function(){})})};
Qba=function(a){return g.B("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.B("LOGGED_IN",void 0)&&(void 0===a?0:a)?Pba().then(function(a){if(a)return!0;a=[Uba(),Vba()];g.B("LOGGED_IN",void 0)||a.push(Wba());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
Wba=function(){var a=g.ue("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.Xh("WatchCount").then(function(b){return b>=a})};
Sba=function(){var a=arguments;g.te("service_worker_push_prompt_modal_enable")&&Xba();return window.Notification.requestPermission().then(function(a){Zi();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return Ri().then(function(){g.Wh("NotificationsDisabled",!1);Yi();return window.Promise.resolve(!0)});
"denied"==a&&Yi();return window.Promise.resolve(!1)})["catch"](function(){Zi();
return window.Promise.reject.apply(window.Promise,[].concat(a instanceof Array?a:baa(g.oa(a))))})};
Rba=function(){g.Xh("PromptCount").then(function(a){return g.Wh("PromptCount",a+1)}).then(function(){return g.Wh("PromptTime",(0,g.Vd)())}).then(function(){var a=String(se("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.Xh("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.Wh("PromptTags",JSON.stringify(c))})})};
Uba=function(){return-1==g.ue("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.Xh("PromptCount").then(function(a){a||(a=0);return window.Promise.resolve(a<g.ue("service_worker_push_prompt_cap"))})};
Vba=function(){var a=g.ue("service_worker_push_prompt_delay_ms");return a?g.Xh("PromptTime").then(function(b){return window.Promise.resolve((0,g.Vd)()-a>(b||0))}):window.Promise.resolve(!0)};
Yba=function(){$i||Zi()};
aj=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
Xba=function(){var a=g.x("yt-push-prompt-modal-bg");$i=g.te("service_worker_push_prompt_modal_ignore_click");a?aj(a):(a=g.cc("div",{id:"yt-push-prompt-modal-bg"}),aj(a),window.document.body.appendChild(a),g.xf(window.document,"click",Yba))};
Zi=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.fc(a)};
Zba=function(a){return a&&a.pushManager?Tba():window.Promise.resolve()};
aca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach($ba)})};
cca=function(){var a="/sw.js",b=g.B("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=bj(a);g.te("service_worker_push_enabled")&&a.then(bca).then(Zba)};
bca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
$ba=function(a){a&&bj("/sw.js?0",a.scope)};
bj=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(se("service_worker_scope")||"")||"/"})};
cj=function(){g.Fh.call(this,"www/base");this.D=0};
dj=function(a){(a=a.detail.name)&&Ih(a)};
g.ba=[];ea="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)ej=Object.setPrototypeOf;else{var fj;a:{var dca={a:!0},gj={};try{gj.__proto__=dca;fj=gj.a;break a}catch(a){}fj=!1}ej=fj?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var fa=ej,ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,aaa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
pa("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
pa("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)qa(e,f)&&(a[f]=e[f])}return a}});
var eca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ea(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
pa("Reflect.construct",function(){return eca});
pa("Promise",function(a){function b(a){this.C=0;this.D=void 0;this.F=[];var b=this.H();try{a(b.resolve,b.reject)}catch(n){b.reject(n)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.L()})};
var e=ja.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.L=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(r){this.H(r)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.L(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(n){this.G(n);return}"function"==typeof b?this.ma(b,a):this.L(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.L=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.C)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.C);this.C=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.F){for(var a=this.F,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.F=null}};
var f=new c;b.prototype.V=function(a){var b=this.H();a.Sh(b.resolve,b.reject)};
b.prototype.ma=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(r){c.reject(r)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(ca){f(ca)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Sh(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Sh=function(a,b){function c(){switch(d.C){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?f.F(c):this.F.push(function(){f.F(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.oa(a),f=e.next();!f.done;f=e.next())d(f.value).Sh(b,c)})};
b.all=function(a){var c=g.oa(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Sh(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
pa("WeakMap",function(a){function b(a){this.ob=(f+=Math.random()+1).toString();if(a){ia();ma();a=g.oa(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){qa(a,e)||ka(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(r){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!qa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.ob]=b;return this};
b.prototype.get=function(a){return qa(a,e)?a[e][this.ob]:void 0};
b.prototype.has=function(a){return qa(a,e)&&qa(a[e],this.ob)};
b.prototype["delete"]=function(a){return qa(a,e)&&qa(a[e],this.ob)?delete a[e][this.ob]:!1};
return b});
pa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return na(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&qa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,lc:l}}return{id:c,list:d,index:-1,lc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.oa(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.oa([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(z){return!1}}())return a;
ia();ma();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.lc?c.lc.value=b:(c.lc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.lc),this.F.previous.next=c.lc,this.F.previous=c.lc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.lc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.lc.previous.next=a.lc.next,a.lc.next.previous=a.lc.previous,a.lc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).lc};
e.prototype.get=function(a){return(a=d(this,a).lc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
pa("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.oa(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.oa([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
ia();ma();b.prototype.add=function(a){this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
pa("Array.from",function(a){return a?a:function(a,c,d){ma();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
g.hj=g.hj||{};g.m=this;Ca="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Vd=Date.now||function(){return+new Date};g.v(g.Ea,Error);g.Ea.prototype.name="CustomError";g.Ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.sa(a))return g.sa(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.fca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.sa(a))return g.sa(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.lh=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.sa(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var n=k[l];
b.call(c,n,l,a)&&(e[f++]=n)}return e};
g.ch=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.sa(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.mh=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.y)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.ij=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.jj=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Ua=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.kj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var lj=g.m.navigator;if(lj){var mj=lj.userAgent;if(mj){g.Ya=mj;break a}}g.Ya=""};var hb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.qb[" "]=g.ua;var uj,maa,yj;g.nj=g.Za("Opera");g.J=g.jb();g.oj=g.Za("Edge");g.pj=g.oj||g.J;g.qj=g.Za("Gecko")&&!(-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.Za("Edge"))&&!(g.Za("Trident")||g.Za("MSIE"))&&!g.Za("Edge");g.rj=-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.Za("Edge");g.sj=g.Za("Macintosh");g.tj=g.Za("Windows");g.gca=g.Za("Linux")||g.Za("CrOS");g.hca=g.Za("Android");g.Vi=nb();g.Wi=g.Za("iPad");g.ica=g.Za("iPod");g.jca=g.ob();
a:{var vj="",wj=function(){var a=g.Ya;if(g.qj)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.oj)return/Edge\/([\d\.]+)/.exec(a);if(g.J)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.rj)return/WebKit\/(\S+)/.exec(a);if(g.nj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
wj&&(vj=wj?wj[1]:"");if(g.J){var xj=sb();if(null!=xj&&xj>(0,window.parseFloat)(vj)){uj=String(xj);break a}}uj=vj}g.tb=uj;maa={};var zj=g.m.document;yj=zj&&g.J?sb()||("CSS1Compat"==zj.compatMode?(0,window.parseInt)(g.tb,10):5):void 0;g.vb=yj;var oaa;oaa=!g.J||g.wb(9);g.kca=!g.qj&&!g.J||g.J&&g.wb(9)||g.qj&&g.ub("1.9.1");g.Aj=g.J&&!g.ub("9");g.lca=g.J||g.nj||g.rj;g.yb.prototype.Od=!0;g.yb.prototype.Tc=function(){return this.C};
g.yb.prototype.toString=function(){return"Const{"+this.C+"}"};
g.xb={};g.zb("");g.mca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.nca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Bj=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");var Ab;g.Bb.prototype.Od=!0;g.Bb.prototype.Tc=function(){return this.C};
g.Bb.prototype.kl=!0;g.Bb.prototype.Fe=g.da(1);g.Db=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;Ab={};g.Eb("about:blank");g.Hb.prototype.Od=!0;g.Gb={};g.Hb.prototype.Tc=function(){return this.C};
g.Cj=g.Ib("");g.Dj=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.oca=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Kb.prototype.Od=!0;g.Jb={};g.Kb.prototype.Tc=function(){return this.C};
g.pca=g.Lb("");g.Nb.prototype.kl=!0;g.Nb.prototype.Fe=g.da(0);g.Nb.prototype.Od=!0;g.Nb.prototype.Tc=function(){return this.C};
g.Mb={};g.Ob("<!DOCTYPE html>",0);g.Ej=g.Ob("",0);g.Fj=g.Ob("<br>",0);g.h=g.Sb.prototype;g.h.clone=function(){return new g.Sb(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Sb&&g.Tb(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.Sb?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.ta(b)&&(this.y+=b));return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.Vb.prototype;g.h.clone=function(){return new g.Vb(this.width,this.height)};
g.h.vv=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.vv()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.width*=a;this.height*=c;return this};var Xb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.Gj=window.document;g.Hj=window;g.Gj.getElementsByTagName("script");g.h=g.ic.prototype;g.h.clone=function(){return new g.ic(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Sb?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.Sb?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.ta(b)&&(this.top+=b));return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.Ij=g.qj?"MozUserSelect":g.rj||g.oj?"WebkitUserSelect":null;g.Jj=g.mc(null);g.qca=Object.prototype.hasOwnProperty;g.Kj=g.nc(window);g.Lj=g.Kj&&window.parent||window;g.Mj=(new Date).getTime();g.h=g.qc.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ra(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Vd)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Ua)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.ra(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Dc=g.da(2);g.h.Ib=g.da(3);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Ab=g.da(7);g.h.ce=g.da(8);g.h.clear=function(){for(var a=g.rc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Oh=new g.qc("undefined"==typeof window.document?null:window.document);g.Oh.F=3950;g.sc.prototype.Ic=!1;g.sc.prototype.qb=function(){return this.Ic};
g.sc.prototype.dispose=function(){this.Ic||(this.Ic=!0,this.Y())};
g.sc.prototype.Y=function(){if(this.Wb)for(;this.Wb.length;)this.Wb.shift()()};g.wc.prototype.stopPropagation=function(){this.F=!0};
g.wc.prototype.preventDefault=function(){this.Os=!1};var Nc,sca,waa;g.rca=!g.J||g.wb(9);Nc=!g.J||g.wb(9);sca=g.J&&!g.ub("9");waa=function(){if(!g.m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.m.addEventListener("test",g.ua,b);g.m.removeEventListener("test",g.ua,b);return a}();g.Nj=g.rj?"webkitTransitionEnd":g.nj?"otransitionend":"transitionend";g.v(g.yc,g.wc);var tca={2:"touch",3:"pen",4:"mouse"};
g.yc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.qj&&(g.rb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.L=g.sj?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.sa(a.pointerType)?a.pointerType:tca[a.pointerType]||"";this.state=a.state;this.xc=a;a.defaultPrevented&&
this.preventDefault()};
g.yc.prototype.stopPropagation=function(){g.yc.M.stopPropagation.call(this);this.xc.stopPropagation?this.xc.stopPropagation():this.xc.cancelBubble=!0};
g.yc.prototype.preventDefault=function(){g.yc.M.preventDefault.call(this);var a=this.xc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,sca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var zc="closure_listenable_"+(1E6*Math.random()|0),taa=0;g.h=g.Cc.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Ec(a,b,d,e);-1<k?(b=a[k],c||(b.Rh=!1)):(b=new uaa(b,this.src,f,!!d,e),b.Rh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ec(e,b,c,d);return-1<b?(Bc(e[b]),g.Ka(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Bc(d[e]);delete this.listeners[c];this.C--}return b};
g.h.dg=g.da(10);g.h.jf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Ec(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.ra(a),d=c?a.toString():"",e=g.ra(b);return g.ab(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Kc="closure_lm_"+(1E6*Math.random()|0),Qc={},Mc=0,Tc="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.Uc,g.sc);g.Uc.prototype[zc]=!0;g.h=g.Uc.prototype;g.h.ti=function(){return this.Xl};
g.h.sh=g.da(11);g.h.addEventListener=function(a,b,c,d){g.Gc(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Oc(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.ti();if(b){var c=[];for(var d=1;b;b=b.ti())c.push(b),++d}b=this.ev;d=a.type||a;if(g.sa(a))a=new g.wc(a,b);else if(a instanceof g.wc)a.target=a.target||b;else{var e=a;a=new g.wc(d,b);g.ib(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=Vc(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=Vc(k,d,!0,a)&&e,a.F||(e=Vc(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=Vc(k,d,!1,a)&&e;return e};
g.h.Y=function(){g.Uc.M.Y.call(this);this.removeAllListeners();this.Xl=null};
g.h.O=function(a,b,c,d){return this.wd.add(String(a),b,!1,c,d)};
g.h.Ke=function(a,b,c,d){return this.wd.add(String(a),b,!0,c,d)};
g.h.Wa=function(a,b,c,d){return this.wd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.wd?this.wd.removeAll(a):0};
g.h.dg=g.da(9);g.h.jf=function(a,b,c,d){return this.wd.jf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.wd.hasListener(g.ra(a)?String(a):void 0,b)};Wc.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var fd;var hd=new Wc(function(){return new $c},function(a){a.reset()});
Zc.prototype.add=function(a,b){var c=hd.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
Zc.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
$c.prototype.set=function(a,b){this.mc=a;this.scope=b;this.next=null};
$c.prototype.reset=function(){this.next=this.scope=this.mc=null};var ad,bd=!1,cd=new Zc;md.prototype.reset=function(){this.context=this.F=this.G=this.C=null;this.D=!1};
var nd=new Wc(function(){return new md},function(a){a.reset()});
g.ld.prototype.then=function(a,b,c){return sd(this,g.Aa(a)?a:null,g.Aa(b)?b:null,c)};
g.id(g.ld);g.ld.prototype.cancel=function(a){0==this.C&&dd(function(){var b=new g.zd(a);ud(this,b)},this)};
g.ld.prototype.W=function(a){this.C=0;g.kd(this,2,a)};
g.ld.prototype.N=function(a){this.C=0;g.kd(this,3,a)};
g.ld.prototype.J=function(){for(var a;a=vd(this);)wd(this,a,this.C,this.R);this.L=!1};
var Bd=Yc;g.v(g.zd,g.Ea);g.zd.prototype.name="cancel";g.v(g.Ed,g.sc);g.h=g.Ed.prototype;g.h.ob=0;g.h.Y=function(){g.Ed.M.Y.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.ob=g.Cd(this.wc,g.ra(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Dd(this.ob);this.ob=0};
g.h.isActive=function(){return 0!=this.ob};
g.h.Jk=function(){this.ob=0;this.C&&this.C.call(this.F)};g.Si=g.Za("Firefox");g.Oj=nb()||g.Za("iPod");g.Pj=g.Za("iPad");g.Ui=g.mb();g.Ti=g.kb();g.Qj=g.lb()&&!g.ob();g.Hd="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.Gd.prototype.next=function(){throw g.Hd;};
g.Gd.prototype.dd=function(){return this};var Nd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Eaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.Od,g.sc);g.h=g.Od.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.rd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.ua):(c&&g.La(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.qa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Faa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.rd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.y)(b,this.rd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Ab=g.da(6);g.h.Y=function(){g.Od.M.Y.call(this);this.clear();this.D.length=0};g.Qd.prototype.set=function(a,b){g.ra(b)?this.C.set(a,g.Ld(b)):this.C.remove(a)};
g.Qd.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Qd.prototype.remove=function(a){this.C.remove(a)};g.v(Rd,g.Qd);Rd.prototype.set=function(a,b){Rd.M.set.call(this,a,Td(b))};
Rd.prototype.F=function(a){a=Rd.M.get.call(this,a);if(!g.ra(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Rd.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ra(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.Ud,Rd);g.Ud.prototype.set=function(a,b,c){if(b=Td(b)){if(c){if(c<(0,g.Vd)()){g.Ud.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Vd)()}g.Ud.M.set.call(this,a,b)};
g.Ud.prototype.F=function(a,b){var c=g.Ud.M.F.call(this,a);if(c)if(!b&&g.Wd(c))g.Ud.prototype.remove.call(this,a);else return c};g.v(g.Xd,g.Ud);g.v(g.Yd,Gaa);g.Yd.prototype.Ab=g.da(5);g.Yd.prototype.clear=function(){var a=Caa(this.dd(!0)),b=this;(0,g.y)(a,function(a){b.remove(a)})};g.v(g.Zd,g.Yd);g.h=g.Zd.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Ab=g.da(4);g.h.dd=function(a){var b=0,c=this.C,d=new g.Gd;d.next=function(){if(b>=c.length)throw g.Hd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.$d,g.Zd);g.v(ae,g.Zd);var Haa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Rj=!1,Sj="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(Rj=!0,a.description)){Sj=ke(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){Rj=!0;Sj="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],Rj=!(!a||!a.enabledPlugin))){Sj=ke(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Rj=
!0;Sj=ke(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Rj=!0;Sj="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Rj=!0,Sj=ke(b.GetVariable("$version"))}catch(c){}})();
g.uca=Rj;g.vca=Sj;g.Qf=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Tj="Microsoft Internet Explorer"==window.navigator.appName;g.me=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.me,void 0);var we={};var wca=g.q("ytPubsubPubsubInstance")||new g.Od;g.Od.prototype.subscribe=g.Od.prototype.subscribe;g.Od.prototype.unsubscribeByKey=g.Od.prototype.rd;g.Od.prototype.publish=g.Od.prototype.qa;g.Od.prototype.clear=g.Od.prototype.clear;g.p("ytPubsubPubsubInstance",wca,void 0);var De=g.q("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",De,void 0);var Fe=g.q("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",Fe,void 0);var Ee=g.q("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",Ee,void 0);var Jaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Kaa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Ke=null;g.ha(Re,Laa);Re.prototype.start=function(){var a=g.q("yt.scheduler.instance.start");a&&a()};
Re.prototype.pause=function(){var a=g.q("yt.scheduler.instance.pause");a&&a()};
g.va(Re);Re.getInstance();(0,g.Vd)();var Ue=g.ra(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.ra(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var $e,df;$e={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};df=!1;g.Uj=ef;jf.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.jd(a)?a:g.mf(a)):2===this.F&&b?(a=b.call(c,this.C),g.jd(a)?a:g.lf(a)):this};
jf.prototype.getValue=function(){return this.C};
g.id(jf);var xca=0,Qaa=g.rj?"webkit":g.qj?"moz":g.J?"ms":g.nj?"o":"",nf=g.q("ytDomDomGetNextId")||function(){return++xca};
g.p("ytDomDomGetNextId",nf,void 0);var Raa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.qf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.qf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.qf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var uf=g.q("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",uf,void 0);var wf=g.q("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",wf,void 0);g.v(g.zf,g.sc);g.zf.prototype.W=function(a){this.C=new g.Sb(g.sf(a),g.tf(a))};
g.zf.prototype.R=function(){if(this.C){var a=g.Qf();if(0!=this.D){var b=g.Ub(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.wc();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.zf.prototype.Y=function(){g.Be(this.N);g.I(this.J)};g.ha(Af,g.sc);Af.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.Wf);break}};
Af.prototype.Y=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.Wf)}g.sc.prototype.Y.call(this)};var Saa={enablejsapi:1},Taa={},Uaa={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};Bf.prototype.clone=function(){var a=new Bf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.xa(c)?a[b]=g.gb(c):a[b]=c}return a};var Ef={},Df=0;var Vaa,Tf;Vaa={log_event:"events",log_interaction:"interactions"};Tf=Object.create(null);Tf.log_event="GENERIC_EVENT_LOGGING";Tf.log_interaction="INTERACTION_LOGGING";g.Of={};g.Gf={};g.Mf=0;g.Nf=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.Nf,void 0);var Hf=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",Hf,void 0);var Pf=g.q("ytLoggingTransportDispatchedStats_")||{};
g.p("ytLoggingTransportDispatchedStats_",Pf,void 0);var Uf=g.q("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",Uf,void 0);var $f={};var lg=g.q("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",lg,void 0);var mg=0;var ng=(0,g.Vd)().toString();var rg;g.qg=og();rg=0;g.pg=null;var Vj,Wj;Vj=new g.$d;g.ug=Vj.isAvailable()?new g.Xd(Vj):null;Wj=new ae;g.tg=Wj.isAvailable()?new g.Xd(Wj):null;var Zaa=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Bg={},aba=0;g.Dg.prototype.toString=function(){return this.topic};var yca=g.q("ytPubsub2Pubsub2Instance")||new g.Od;g.Od.prototype.subscribe=g.Od.prototype.subscribe;g.Od.prototype.unsubscribeByKey=g.Od.prototype.rd;g.Od.prototype.publish=g.Od.prototype.qa;g.Od.prototype.clear=g.Od.prototype.clear;g.p("ytPubsub2Pubsub2Instance",yca,void 0);g.Xj=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.Xj,void 0);g.Yj=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.Yj,void 0);
g.Zj=g.q("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.Zj,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var Gg=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.ha(Jg,g.Cg);g.ha(Kg,g.Cg);var dba=new g.Dg("aft-recorded",Jg),hba=new g.Dg("timing-sent",Kg);var fba={vc:!0},jh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},ih={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",
yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},kba="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
nba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",
prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT",
"video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR"},jba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),ah=!1,cba=(0,g.t)(Gg.clearResourceTimings||Gg.webkitClearResourceTimings||Gg.mozClearResourceTimings||Gg.msClearResourceTimings||Gg.oClearResourceTimings||g.ua,Gg);g.ha(qh,g.sc);g.h=qh.prototype;g.h.getId=function(){return this.N};
g.h.Kl=function(a){this.qb()||(this.ib=a=g.Cf(a),this.C=a.clone(),this.F=this.C.attrs.id||this.F,"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N),this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F),this.C.args.enablejsapi="1",this.C.args.playerapiid=this.N,this.ia||(this.ia=yh(this,this.C.args.jsapicallback||"onYouTubePlayerReady")),this.C.args.jsapicallback=null,(a=this.C.attrs.width)&&g.lc(this.H,Number(a)||a),(a=this.C.attrs.height)&&g.kc(this.H,Number(a)||a),oba(this),
this.L&&rh(this))};
g.h.Iw=function(){return this.ib};
g.h.ZB=function(){return this.L};
g.h.Jh=function(a,b){var c=this,d=yh(this,b);if(d){if(!g.Ia(this.sb,a)&&!this.D[a]){var e=qba(this,a);this.W&&this.W(a,e)}this.R.subscribe(a,d);"onReady"==a&&this.L&&g.xe(function(){d(c.api)},0)}};
g.h.yK=function(a,b){if(!this.qb()){var c=yh(this,b);c&&g.Pd(this.R,a,c)}};
g.h.bv=function(a){g.E("a11y-announce",a)};
g.h.gG=function(a){g.E("WATCH_LATER_VIDEO_ADDED",a)};
g.h.hG=function(a){g.E("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.zx=function(){return this.ma||(sh(this)?"html5":null)};
g.h.gx=function(){return this.eb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.Ie(this.C.assets.js);window.spf.script.ignore(b,a)}g.ze(this.nb);this.V=!1};
g.h.Y=function(){vh(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.pe(Error("Error destroying player: "+b))}this.Sa=null;for(var a in this.D)g.m[this.D[a]]=null;this.ib=this.C=this.api=null;delete this.oa;delete this.H;g.sc.prototype.Y.call(this)};g.Ah={};g.zh="player_uid_"+(1E9*Math.random()>>>0);g.h=g.Fh.prototype;g.h.KK=function(){this.Ti()||this.init()};
g.h.enable=function(){this.C=1;(0,g.y)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.KK,this),this.subscribe("dispose-"+a,this.dispose,this),g.B("PAGE_NAME")==a&&g.Gh(this))},this)};
g.h.init=function(){g.Pe(this.F);this.C=2;this.L&&this.L()};
g.h.Ti=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Pe(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.pe(a)}};
g.h.subscribe=function(a,b,c){a=g.D(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.Ge(this.G);this.G=[]};var Hh=g.q("yt.modules.registry_")||{};g.p("yt.modules.registry_",Hh,void 0);g.Kh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.Kh,void 0);g.p("yt.abuse.botguardInitialized",g.q("yt.abuse.botguardInitialized")||Le,void 0);g.p("yt.abuse.invokeBotguard",g.q("yt.abuse.invokeBotguard")||g.Me,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",g.q("yt.abuse.dclkstatus.checkDclkStatus")||Te,void 0);g.p("yt.player.exports.navigate",g.q("yt.player.exports.navigate")||g.Uh,void 0);g.p("yt.util.activity.init",g.q("yt.util.activity.init")||g.Zf,void 0);g.p("yt.util.activity.getTimeSinceActive",g.q("yt.util.activity.getTimeSinceActive")||g.ag,void 0);
g.p("yt.util.activity.setTimestamp",g.q("yt.util.activity.setTimestamp")||Xf,void 0);var Yh=null;g.ak=window.performance&&window.performance.memory;g.Ji={};var fi=0,bi=[],ei=[],Zh=0,ci={},di={},$h=new g.Ed(zba,1E3);var Bba=["server_prefetched_vast","vmap"];var ii,ni;g.mi=null;ni="";var pi=null,si=[];var wi,Pi,Oi,yi,xi,Hba,Kba,Iba,Jba,Ki;yi=0;xi=0;Hba=[900,60,"waiting"];Kba=[500,99,"waiting"];Iba=[300,60,"waiting"];Jba=[400,99,"waiting"];Ki=[300,101,"done"];var $i=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.ne,void 0);g.p("yt.pushConfigArray",oe,void 0);g.p("yt.getConfig",g.B,void 0);g.p("yt.config.set",g.ne,void 0);g.p("yt.config.pushArray",oe,void 0);g.p("yt.config.get",g.B,void 0);g.p("yt.hasMsg",g.Mh,void 0);g.p("yt.setMsg",Lh,void 0);g.p("yt.setGoogMsg",Nh,void 0);g.p("yt.msgs.has",g.Mh,void 0);g.p("yt.msgs.set",Lh,void 0);g.p("yt.msgs.setGoog",Nh,void 0);g.p("yt.pubsub.publish",g.E,void 0);g.p("yt.pubsub.subscribe",g.D,void 0);
g.p("ytcsi.tick",g.Sg,void 0);g.v(cj,g.Fh);
cj.prototype.enable=function(){window.onload=Fba;window.onunload=Gba;window.onerror=Iaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",ui),window.addEventListener("spfhistory",vi),window.addEventListener("spfrequest",Bi),window.addEventListener("spfpartprocess",Fi),window.addEventListener("spfpartdone",Gi),window.addEventListener("spfprocess",Hi),window.addEventListener("spfdone",Li),window.addEventListener("spferror",Mi),window.addEventListener("spfreload",
Ni),window.addEventListener("spfjsbeforeunload",dj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Mba),this.subscribe("dispose",Nba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
cj.prototype.init=function(){cj.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.B("PAGEFRAME_JS")){var b=g.B("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
a=g.B("JS_COMMON_MODULE");var d=g.B("JS_PAGE_MODULES");d||(d=[a]);a=g.B("JS_DELAY_LOAD",0);0<a?(g.ze(this.D),this.D=g.xe(function(){b&&g.Je(b,c);window.spf.script.require(d)},a)):(b&&g.Je(b,c),window.spf.script.require(d));
g.p("yt.abuse.botguardInitialized",Le,void 0);g.p("yt.abuse.invokeBotguard",g.Me,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",Te,void 0);g.p("yt.player.exports.navigate",g.Uh,void 0);g.p("yt.util.activity.init",g.Zf,void 0);g.p("yt.util.activity.getTimeSinceActive",g.ag,void 0);g.p("yt.util.activity.setTimestamp",Xf,void 0);oi(g.q("ytplayer.config"));g.q("ytspf.enabled")&&Dba();eh();iba();nh(!0);g.Rg(!1);g.B("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.te("service_worker_enabled")?cca():aca())};
cj.prototype.dispose=function(){g.ze(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.Be(ii);if(a=g.ki())a.removeEventListener("onReady",ji),a.removeEventListener("onStateChange",ji);nh(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.C(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.yf(a);cj.M.dispose.call(this)};
cj.prototype.disable=function(){cj.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",ui),window.removeEventListener("spfhistory",vi),window.removeEventListener("spfrequest",Bi),window.removeEventListener("spfpartprocess",Fi),window.removeEventListener("spfpartdone",Gi),window.removeEventListener("spfprocess",Hi),window.removeEventListener("spfdone",Li),window.removeEventListener("spferror",Mi),window.removeEventListener("spfreload",Ni),window.removeEventListener("spfjsbeforeunload",
dj));window.onload=null;window.onunload=null;window.onerror=null};
g.Jh(new cj);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:03:45 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:36:21 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 121.78
  exclusion.robots: 0.124
  exclusion.robots.policy: 0.109
  cdx.remote: 0.093
  esindex: 0.014
  LoadShardBlock: 31.272 (3)
  PetaboxLoader3.datanode: 53.568 (5)
  load_resource: 64.465 (2)
  PetaboxLoader3.resolve: 18.582
*/