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

var _yt_www={};(function(g){var window=this;var fa,la,ja,na,baa,pa,qa,daa,eaa,Ka,mb,naa,qb,paa,oc,qaa,raa,pc,saa,uaa,Bc,Dc,Ec,Ic,vaa,Lc,Sc,Rc,xaa,Vc,Xc,Yc,Zc,yaa,$c,ad,ed,zaa,fd,md,ud,sd,pd,Baa,xd,vd,wd,Ad,Aaa,Kd,Caa,Daa,Md,Od,Faa,Td,Ud,Vd,Gaa,ce,me,ne,qe,se,Iaa,te,De,Me,Te,Laa,Maa,Naa,af,bf,Oaa,gf,ef,cf,jf,xf,yf,Vaa,Jf,Yf,Waa,gg,fg,Xaa,Zaa,wg,xg,yg,zg,Bg,Eg,Fg,Ng,Mg,Qg,Rg,Sg,cba,Vg,Zg,gba,Hg,Pg,Yg,dh,jba,kba,Xg,gh,ah,Gg,Og,$g,hh,Cg,Tg,Dg,eba,jh,kh,mh,mba,lh,ph,ih,qh,nba,nh,oh,oba,wh,Eh,Hh,Jh,Mh,Rh,pba,vba,uba,tba,Xh,sba,qba,rba,wba,xba,zba,
Aba,li,gi,ii,ni,Bba,oi,qi,Cba,Dba,ri,si,xi,Bi,Ci,Di,Ki,Li,Mi,Jba,Kba,yi,Ai,wi,Iba,zi,Qi,Lba,Xi,Pi,Mba,Wi,Nba,Rba,Qba,Uba,Zi,Tba,Sba,cj,Yi,$i,aj,Oba,Pba,Wba,ej,Vba,bj,Xba,Zba,aca,$ba,Yba,fj,gj,hj,ca,ij,Aa,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
g.ea=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
fa=function(){fa=function(){};
ha.Symbol||(ha.Symbol=aaa)};
la=function(){fa();var a=ha.Symbol.iterator;a||(a=ha.Symbol.iterator=ha.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(this)}});
la=function(){}};
ja=function(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
na=function(a){la();a={next:a};a[ha.Symbol.iterator]=function(){return this};
return a};
g.oa=function(a){la();var b=a[window.Symbol.iterator];return b?b.call(a):ja(a)};
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
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
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
g.Ab=function(){this.C="";this.F=yb};
g.Bb=function(a){if(a instanceof g.Ab&&a.constructor===g.Ab&&a.F===yb)return a.C;g.va(a);return"type_error:SafeUrl"};
g.Eb=function(a){if(a instanceof g.Ab)return a;a=a.Nd?a.Sc():String(a);g.Cb.test(a)||(a="about:invalid#zClosurez");return g.Db(a)};
g.Db=function(a){var b=new g.Ab;b.C=a;return b};
g.Hb=function(){this.C="";this.F=g.Gb};
g.Ib=function(a){var b=new g.Hb;b.C=a;return b};
g.Kb=function(){this.C="";this.F=g.Jb};
g.Lb=function(a){var b=new g.Kb;b.C=a;return b};
g.Nb=function(){this.C="";this.D=g.Mb;this.F=null};
g.Ob=function(a,b){var c=new g.Nb;c.C=a;c.F=b;return c};
g.Pb=function(a,b){var c=b instanceof g.Ab?b:g.Eb(b);a.href=g.Bb(c)};
g.Qb=function(a,b){var c=b instanceof g.Ab?b:g.Eb(b);a.href=g.Bb(c)};
g.Rb=function(a,b){return g.Ob(b,null)};
g.Sb=function(a,b){this.x=g.ra(a)?a:0;this.y=g.ra(b)?b:0};
g.Tb=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Ub=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.sa(a)?window.document.getElementById(a):a};
g.Vb=function(a){var b=window.document;return g.sa(a)?b.getElementById(a):a};
g.Xb=function(a,b){g.Ya(b,function(b,d){b&&b.Nd&&(b=b.Sc());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Wb.hasOwnProperty(d)?a.setAttribute(Wb[d],b):g.Ea(d,"aria-")||g.Ea(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.Zb=function(a){return g.Yb(a||window)};
g.Yb=function(a){a=a.document;a=g.$b(a)?a.documentElement:a.body;return new g.Ub(a.clientWidth,a.clientHeight)};
g.bc=function(a,b,c){return g.ac(window.document,arguments)};
g.ac=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ia(d.name),'"');if(d.type){c.push(' type="',g.Ia(d.type),'"');var e={};g.hb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.sa(d)?c.className=d:g.wa(d)?c.className=d.join(" "):g.Xb(c,d));2<b.length&&g.cc(a,c,b,2);return c};
g.cc=function(a,b,c,d){function e(c){c&&b.appendChild(g.sa(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.xa(f)||g.za(f)&&0<f.nodeType?e(f):(0,g.y)(paa(f)?g.Ua(f):f,e)}};
g.dc=function(a){return window.document.createElement(String(a))};
g.$b=function(a){return"CSS1Compat"==a.compatMode};
g.ec=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.fc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.gc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.za(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.ya(a))return"function"==typeof a.item}return!1};
g.hc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.ic=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.jc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.kc=function(a,b){a.style.height=g.jc(b,!0)};
g.lc=function(a,b){a.style.width=g.jc(b,!0)};
g.mc=function(a){return function(){return a}};
g.nc=function(a){return!!a.google_async_iframe_id};
oc=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
qaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=t=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],p=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var t=l^d&(f^l);var w=1518500249}else t=d^f^l,w=1859775393;else 60>c?(t=d&f|l&(d|f),w=2400959708):(t=d^f^l,w=3395469782);t=((a<<5|a>>>27)&4294967295)+t+p+w+b[c]&4294967295;p=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=t}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+p&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==t)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[t++]=a[d++],w++,64==t)for(t=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>t?c(l,56-t):c(l,64-(t-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var p=24;0<=p;p-=8)a[d++]=e[k]>>p&255;return a}
for(var e=[],f=[],k=[],l=[128],p=1;64>p;++p)l[p]=0;var t,w;a();return{reset:a,update:c,digest:d,cw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
raa=function(a,b,c){var d=[],e=[];if(1==(g.wa(c)?2:1))return e=[b,a],(0,g.y)(d,function(a){e.push(a)}),pc(e.join(" "));
var f=[],k=[];(0,g.y)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ra(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.y)(d,function(a){e.push(a)});
a=pc(e.join(" "));a=[c,a];g.Ra(k)||a.push(k.join(""));return a.join("_")};
pc=function(a){var b=qaa();b.update(a);return b.cw().toLowerCase()};
g.qc=function(a){this.C=a||{cookie:""}};
g.rc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Ja)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
saa=function(){var a=[],b=oc(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.qc(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.qc(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.m.location.href);return d&&b&&c?[c,raa(oc(d),b,a||null)].join(" "):null}return null};
g.sc=function(){this.Cc=this.Cc;this.Lb=this.Lb};
g.vc=function(a,b){g.tc(a,g.u(g.uc,b))};
g.tc=function(a,b){a.Cc?g.ra(void 0)?b.call(void 0):b():(a.Lb||(a.Lb=[]),a.Lb.push(g.ra(void 0)?(0,g.r)(b,void 0):b))};
g.uc=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.wc=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1;this.Os=!0};
g.xc=function(a){var b=g.q("window.location.href");if(g.sa(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.yc=function(a,b){g.wc.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.L=!1;this.pointerId=0;this.pointerType="";this.wc=null;a&&this.init(a,b)};
g.Ac=function(a){return!(!a||!a[zc])};
uaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Yg=e;this.key=++taa;this.og=this.Qh=!1};
Bc=function(a){a.og=!0;a.listener=null;a.C=null;a.src=null;a.Yg=null};
g.Cc=function(a){this.src=a;this.listeners={};this.C=0};
Dc=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Ta(a.listeners[c],b);d&&(Bc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Ec=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.og&&f.listener==b&&f.capture==!!c&&f.Yg==d)return e}return-1};
g.Gc=function(a,b,c,d,e){if(d&&d.once)return g.Fc(a,b,c,d,e);if(g.wa(b)){for(var f=0;f<b.length;f++)g.Gc(a,b[f],c,d,e);return null}c=g.Hc(c);return g.Ac(a)?a.O(b,c,g.za(d)?!!d.capture:!!d,e):Ic(a,b,c,!1,d,e)};
Ic=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.za(e)?!!e.capture:!!e,l=g.Jc(a);l||(a[Kc]=l=new g.Cc(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=vaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)waa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Lc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Mc++;return c};
vaa=function(){var a=xaa,b=Nc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Fc=function(a,b,c,d,e){if(g.wa(b)){for(var f=0;f<b.length;f++)g.Fc(a,b[f],c,d,e);return null}c=g.Hc(c);return g.Ac(a)?a.Ie(b,c,g.za(d)?!!d.capture:!!d,e):Ic(a,b,c,!0,d,e)};
g.Oc=function(a,b,c,d,e){if(g.wa(b))for(var f=0;f<b.length;f++)g.Oc(a,b[f],c,d,e);else d=g.za(d)?!!d.capture:!!d,c=g.Hc(c),g.Ac(a)?a.Wa(b,c,d,e):a&&(a=g.Jc(a))&&(b=a.gf(b,c,d,e))&&g.Pc(b)};
g.Pc=function(a){if(g.ta(a)||!a||a.og)return!1;var b=a.src;if(g.Ac(b))return Dc(b.vd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(Lc(c),d);Mc--;(c=g.Jc(b))?(Dc(c,a),0==c.C&&(c.src=null,b[Kc]=null)):Bc(a);return!0};
Lc=function(a){return a in Qc?Qc[a]:Qc[a]="on"+a};
Sc=function(a,b,c,d){var e=!0;if(a=g.Jc(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.og&&(f=Rc(f,d),e=e&&!1!==f)}return e};
Rc=function(a,b){var c=a.listener,d=a.Yg||a.src;a.Qh&&g.Pc(a);return c.call(d,b)};
xaa=function(a,b){if(a.og)return!0;if(!Nc){var c=b||g.q("window.event"),d=new g.yc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(p){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Sc(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Sc(c[k],f,!1,d),e=e&&l}return e}return Rc(a,new g.yc(b,
this))};
g.Jc=function(a){a=a[Kc];return a instanceof g.Cc?a:null};
g.Hc=function(a){if(g.ya(a))return a;a[Tc]||(a[Tc]=function(b){return a.handleEvent(b)});
return a[Tc]};
g.Uc=function(){g.sc.call(this);this.vd=new g.Cc(this);this.nv=this;this.Ul=null};
Vc=function(a,b,c,d){b=a.vd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.og&&k.capture==c){var l=k.listener,p=k.Yg||k.src;k.Qh&&Dc(a.vd,k);e=!1!==l.call(p,d)&&e}}return e&&0!=d.Os};
Xc=function(a,b,c){this.H=c;this.D=a;this.G=b;this.F=0;this.C=null};
Yc=function(a,b){a.G(b);a.F<a.H&&(a.F++,b.next=a.C,a.C=b)};
Zc=function(a){g.m.setTimeout(function(){throw a;},0)};
yaa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Xa("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.r)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.ib()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ra(c.next)){c=c.next;var a=c.Gn;c.Gn=null;a()}};
return function(a){d.next={Gn:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
$c=function(){this.F=this.C=null};
ad=function(){this.next=this.scope=this.lc=null};
ed=function(a,b){bd||zaa();cd||(bd(),cd=!0);dd.add(a,b)};
zaa=function(){if(-1!=String(g.m.Promise).indexOf("[native code]")){var a=g.m.Promise.resolve(void 0);bd=function(){a.then(fd)}}else bd=function(){var a=fd;
!g.ya(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.Xa("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(gd||(gd=yaa()),gd(a)):g.m.setImmediate(a)}};
fd=function(){for(var a;a=dd.remove();){try{a.lc.call(a.scope)}catch(b){Zc(b)}Yc(hd,a)}cd=!1};
g.id=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.jd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.ld=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.ua)try{var c=this;a.call(b,function(a){g.kd(c,2,a)},function(a){g.kd(c,3,a)})}catch(d){g.kd(this,3,d)}};
md=function(){this.next=this.context=this.F=this.G=this.C=null;this.D=!1};
g.od=function(a,b,c){var d=nd.get();d.G=a;d.F=b;d.context=c;return d};
g.qd=function(a,b,c){pd(a,b,c,null)||ed(g.u(b,a))};
g.rd=function(a){return new g.ld(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],g.qd(p,g.u(f,l),k);
else b(e)})};
g.td=function(a,b){return sd(a,null,b,void 0)};
ud=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?ud(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):vd(c),wd(c,e,3,b)))}a.D=null}else g.kd(a,3,b)};
g.yd=function(a,b){a.F||2!=a.C&&3!=a.C||xd(a);a.G?a.G.next=b:a.F=b;a.G=b};
sd=function(a,b,c,d){var e=g.od(null,null,null);e.C=new g.ld(function(a,k){e.G=b?function(c){try{var e=b.call(d,c);a(e)}catch(t){k(t)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.ra(e)&&b instanceof g.zd?k(b):a(e)}catch(t){k(t)}}:k});
e.C.D=a;g.yd(a,e);return e.C};
g.kd=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,pd(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,xd(a),3!=b||c instanceof g.zd||Aaa(a,c)))};
pd=function(a,b,c,d){if(a instanceof g.ld)return g.yd(a,g.od(b||g.ua,c||null,d)),!0;if(g.jd(a))return a.then(b,c,d),!0;if(g.za(a))try{var e=a.then;if(g.ya(e))return Baa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Baa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(p){f(p)}};
xd=function(a){a.L||(a.L=!0,ed(a.J,a))};
vd=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
wd=function(a,b,c,d){if(3==c&&b.F&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Ad(b,c,d);else try{b.D?b.G.call(b.context):Ad(b,c,d)}catch(e){Bd.call(null,e)}Yc(nd,b)};
Ad=function(a,b,c){2==b?a.G.call(a.context,c):a.F&&a.F.call(a.context,c)};
Aaa=function(a,b){a.H=!0;ed(function(){a.H&&Bd.call(null,b)})};
g.zd=function(a){g.Ca.call(this,a)};
g.Ed=function(a,b,c){if(g.ya(a))c&&(a=(0,g.r)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.r)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.Fd=function(a){g.m.clearTimeout(a)};
g.Gd=function(a,b,c){g.sc.call(this);this.C=a;this.D=b||0;this.F=c;this.uc=(0,g.r)(this.Gk,this)};
g.Hd=function(a){if(a.classList)return a.classList;a=a.className;return g.sa(a)&&a.match(/\S+/g)||[]};
g.z=function(a,b){return a.classList?a.classList.contains(b):g.Qa(g.Hd(a),b)};
g.Id=function(){};
Kd=function(a){if(a instanceof g.Id)return a;if("function"==typeof a.cd)return a.cd(!1);if(g.xa(a)){var b=0,c=new g.Id;c.next=function(){for(;;){if(b>=a.length)throw g.Jd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Ld=function(a,b,c){if(g.xa(a))try{(0,g.y)(a,b,c)}catch(d){if(d!==g.Jd)throw d;}else{a=Kd(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Jd)throw d;}}};
Caa=function(a){if(g.xa(a))return g.Ua(a);a=Kd(a);var b=[];g.Ld(a,function(a){b.push(a)});
return b};
g.Nd=function(a){var b=[];Md(new Daa,a,b);return b.join("")};
Daa=function(){};
Md=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.wa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Md(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Od(d,c),c.push(":"),Md(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Od(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Od=function(a,b){b.push('"',a.replace(Eaa,function(a){var b=Pd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Pd[a]=b);return b}),'"')};
g.Qd=function(a){g.sc.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.Rd=function(a,b,c,d){if(b=a.F[b]){var e=a.C;if(b=g.Oa(b,function(a){return e[a+1]==c&&e[a+2]==d}))return a.qd(b)}return!1};
Faa=function(a,b,c){ed(function(){a.apply(b,c)})};
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
g.je=function(a,b,c){if(g.wa(b))for(var d=0;d<b.length;d++)g.je(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ga(b)))};
g.ke=function(a){var b=[],c;for(c in a)g.je(c,a[c],b);return b.join("&")};
g.le=function(a,b){var c=g.ke(b);return g.ie(a,c)};
me=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
ne=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.pe=function(a){ne(g.oe,arguments)};
qe=function(a,b){var c=g.B(a,void 0);c?c.push(b):g.pe(a,[b])};
g.B=function(a,b){return a in g.oe?g.oe[a]:b};
se=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.re(b)}}:a};
g.re=function(a,b,c,d,e){var f=g.q("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.B("ERRORS",[]),f.push([a,b,c,d,e]),g.pe("ERRORS",f))};
Iaa=function(a,b,c,d,e){var f=!1,k;if((k=(k=g.oe.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,p=k.length;l<p;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.sa(a)?f=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.re(e))};
g.ue=function(a){return!!te(a)};
g.ve=function(a){return Number(te(a)||0)};
te=function(a){return g.B("EXPERIMENT_FLAGS",{})[a]};
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
g.Je=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Jaa,""),b=b.replace(Kaa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
Me=function(){return null!=g.Le};
g.Ne=function(){return g.Le?g.Le.invoke():null};
g.Oe=function(){return!!g.q("yt.scheduler.instance")};
g.Pe=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.ze(a,c||0)};
g.Qe=function(a,b){return g.Pe(a,1,b)};
g.Re=function(a){if(!(0,window.isNaN)(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.Be(a)}};
g.Se=function(a){for(var b=0,c=a.length;b<c;b++)g.Re(a[b])};
Te=function(){return(0,window.parseInt)(g.B("DCLKSTAT",0),10)};
Laa=function(){if(!Ue)return null;var a=Ue();return"open"in a?a:null};
g.We=function(a){switch(g.Ve(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Ve=function(a){return a&&"status"in a?a.status:-1};
g.Xe=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Ha(e[0]||"");e=g.Ha(e[1]||"");f in b?g.wa(b[f])?g.Va(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.Ze=function(a,b){return g.Ye(a,b||{},!0)};
g.Ye=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Xe(e[1]||"");for(var f in b)if(c||!g.ab(e,f))e[f]=b[f];return g.le(a,e)+d};
Maa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.ee(a)[1]||null,e=g.ge(a);d&&e?(d=c,c=g.ee(a),d=g.ee(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.ge(c)==e&&(Number(g.ee(c)[4]||null)||null)==(Number(g.ee(a)[4]||null)||null):!0;for(var f in $e){if((e=d=g.B($e[f]))&&!(e=c)){e=f;var k=g.B("CORS_HEADER_WHITELIST")||{},l=g.ge(a);e=l?(k=k[l])?g.Qa(k,e):!1:!0}e&&(b[f]=d)}return b};
Naa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=af(a,b);var d=bf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.Be(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.m;c?b.Z&&b.Z.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ab&&b.ab.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Zq&&0<b.timeout&&(f=g.ze(function(){e||(e=!0,g.Be(f),b.Zq.call(b.context||g.m))},b.timeout))}else g.F(a,b)};
g.F=function(a,b){var c=b.format||"JSON";a=af(a,b);var d=bf(a,b),e=!1,f,k=cf(a,function(a){if(!e){e=!0;f&&g.Be(f);var d=g.We(a),k=null;if(d||400<=a.status&&500>a.status)k=Oaa(c,a,b.qb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.m;d?b.Z&&b.Z.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.ab&&b.ab.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.gc&&0<b.timeout&&(f=g.ze(function(){e||(e=!0,k.abort(),g.Be(f),b.gc.call(b.context||g.m,k))},b.timeout));
return k};
af=function(a,b){b.lB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.B("XSRF_FIELD_NAME",void 0),d=b.ua;d&&(d[c]&&delete d[c],a=g.Ze(a,d));return a};
bf=function(a,b){var c=g.B("XSRF_FIELD_NAME",void 0),d=g.B("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ka,k=g.B("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.ww||g.ge(a)&&!b.withCredentials&&g.ge(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ka&&b.ka[k]||(f||(f={}),f[c]=d);f&&g.sa(e)&&(e=g.Xe(e),g.hb(e,f),e=b.gs&&"JSON"==b.gs?JSON.stringify(e):g.ke(e));f=e||f&&!g.cb(f);!df&&f&&"POST"!=b.method&&(df=!0,g.re(Error("AJAX request with postData should use POST")));
return e};
Oaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?ef(b):null)d={},(0,g.y)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.ff(a)})}c&&gf(d);
return d};
gf=function(a){if(g.za(a))for(var b in a)"html_content"==b||g.Fa(b,"_html")?a[b]=g.Rb(g.xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):gf(a[b])};
ef=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.ff=function(a){var b="";(0,g.y)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.hf=function(a,b){b.method="POST";b.ka||(b.ka={});return g.F(a,b)};
cf=function(a,b,c,d,e,f,k){function l(){4==(p&&"readyState"in p?p.readyState:0)&&b&&se(b)(p)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var p=Laa();if(!p)return null;"onloadend"in p?p.addEventListener("loadend",l,!1):p.onreadystatechange=l;p.open(c,a,!0);f&&(p.responseType=f);k&&(p.withCredentials=!0);c="POST"==c;if(e=Maa(a,e))for(var t in e)p.setRequestHeader(t,e[t]),"content-type"==t.toLowerCase()&&(c=!1);c&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded");p.send(d);return p};
jf=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.kf=function(a){var b=new jf;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.mf=function(a){var b=new jf;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.of=function(a){var b=a.__yt_uid_key;b||(b=nf(),a.__yt_uid_key=b);return b};
g.pf=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Paa+"VisibilityState";if(b in a)return a[b]};
g.qf=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Qaa||(this[b]=a[b]);this.scale=a.scale;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.C=a.pageX;this.F=a.pageY}};
g.sf=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.bb(rf,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.G=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.sf(a,b,c,d);if(e)return e;e=++tf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.qf(d);if(!g.hc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.qf(b);
b.currentTarget=a;return c.call(a,b)};
k=se(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);rf[e]=[a,b,c,k,d];return e};
g.uf=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.y)(a,function(a){if(a in rf){var b=rf[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete rf[a]}}))};
g.vf=function(a,b,c){var d;return d=g.G(a,b,function(){g.uf(d);c.apply(a,arguments)},!1)};
g.wf=function(a){for(var b in rf)rf[b][0]==a&&g.uf(b)};
xf=function(){g.sc.call(this);this.C=[]};
yf=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.fb(Raa);this.assets=a.assets||{};this.attrs=a.attrs||g.fb(Saa);this.params=a.params||g.fb(Taa);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.zf=function(a){a instanceof yf||(a=new yf(a));return a};
g.Cf=function(a,b,c,d,e,f){f=f||{};f.name=c||g.B("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Af||(c=a.stacktrace,d=a.columnNumber,a=g.xc(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),Bf[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={ua:{a:"logerror",t:"jserror",type:a.name,
msg:a.message.substr(0,1E3),line:e,level:void 0===b?"ERROR":b,"client.name":f.name},ka:{url:g.B("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ka.stack=c);for(var k in f)b.ka["client."+k]=f[k];if(k=g.B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ka[l]=k[l];g.F("/error_204",b);Bf[a.message]=!0;Af++}};
g.Df=function(a,b,c,d,e){this.D=a;this.H=b;this.G=c;this.F=d;this.C=e};
g.Ff=function(a){return new g.Df(a)};
g.Gf=function(a){var b={};void 0!==a.D?b.trackingParams=a.D:(b.veType=a.H,null!=a.G&&(b.veCounter=a.G),null!=a.F&&(b.elementIndex=a.F));void 0!==a.C&&(b.dataElement=g.Gf(a.C));return b};
g.Mf=function(a,b){g.Hf[a.endpoint]=b;if(a.Uh){var c=a.Uh;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);If[a.Uh.token]=d;c=Jf(a.endpoint,a.Uh.token)}else c=Jf(a.endpoint);c.push(a.payload);c.length>=(g.ve("web_logging_max_batch")||20)?g.Kf():g.Lf()};
g.Kf=function(){g.Be(g.Nf);if(!g.cb(g.Of)){for(var a in g.Of){var b=g.Pf[a];if(!b){var c=g.Hf[a];if(!c)continue;b=new c;g.Pf[a]=b}c=void 0;var d=a,e=b,f=Uaa[d],k=Qf[d]||{};Qf[d]=k;b=Math.round(g.Rf());for(c in g.Of[d]){var l=g.Sf(e);l[f]=Jf(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var p=If[c];if(p)a:{var t=l,w=c;if(p.videoId)var A="VIDEO";else if(p.playlistId)A="PLAYLIST";else break a;t.credentialTransferTokenTargetId=p;t.context=
t.context||{};t.context.user=t.context.user||{};t.context.user.credentialTransferTokens=[{token:w,scope:A}]}delete If[c];g.Tf(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.Of[a]}g.cb(g.Of)||g.Lf()}};
Vaa=function(){var a=[],b;for(b in g.Of){var c=Qf[b]||{};Qf[b]=c;for(var d in g.Of[b]){var e=Jf(b,d);c.storedEventsCount=c.storedEventsCount||0;c.storedEventsCount+=e.length}}d=Math.round(g.Rf());for(b in Qf)c=Qf[b],b in Uf?c.eventType=Uf[b]:c.eventType="UNKNOWN_TYPE",e=Wf[b],c.metricIntervalMs=e?d-e:d-g.Xf,a.push(c),Wf[b]=d,delete Qf[b];return a};
g.Lf=function(){g.Be(g.Nf);g.Nf=g.ze(g.Kf,g.B("LOGGING_BATCH_TIMEOUT",1E4))};
Jf=function(a,b){b||(b="");g.Of[a]=g.Of[a]||{};g.Of[a][b]=g.Of[a][b]||[];return g.Of[a][b]};
g.Zf=function(){if(null==g.q("_lact",window)){var a=(0,window.parseInt)(g.B("LACT"),10);a=(0,window.isFinite)(a)?(0,g.Xd)()-Math.max(a,0):-1;g.n("_lact",a,window);g.n("_fact",a,window);-1==a&&Yf();g.G(window.document,"keydown",Yf);g.G(window.document,"keyup",Yf);g.G(window.document,"mousedown",Yf);g.G(window.document,"mouseup",Yf);g.D("page-mouse",Yf);g.D("page-scroll",Yf);g.D("page-resize",Yf)}};
Yf=function(){null==g.q("_lact",window)&&g.Zf();var a=(0,g.Xd)();g.n("_lact",a,window);-1==g.q("_fact",window)&&g.n("_fact",a,window);(a=g.q("ytglobal.ytUtilActivityCallback_"))&&a()};
g.$f=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.Xd)()-a,0)};
g.bg=function(a,b,c,d){var e=g.ag,f={};f.eventTimeMs=Math.round(c||g.Rf());f[a]=b;f.context={lastActivityMs:String(c?-1:g.$f())};g.Mf({endpoint:"log_event",payload:f,Uh:d},e)};
Waa=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.ag=function(a){this.C=a||{innertubeApiKey:g.B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.B("INNERTUBE_API_VERSION",void 0),nB:g.B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),pB:g.B("INNERTUBE_CONTEXT_HL",void 0),oB:g.B("INNERTUBE_CONTEXT_GL",void 0),qB:g.B("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
g.Sf=function(a){a=a.C;a={client:{hl:a.pB,gl:a.oB,clientName:a.nB,clientVersion:a.innertubeContextClientVersion}};g.B("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.B("DELEGATED_SESSION_ID")});return{context:a}};
g.Tf=function(a,b,c,d){!g.B("VISITOR_DATA")&&.01>Math.random()&&g.re(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.B("VISITOR_DATA","")},method:"POST",ka:c,gs:"JSON",gc:function(){d.gc()},
Zq:d.gc,Z:function(a,b){d.Z&&d.Z(b)},
Yq:function(a){d.Z&&d.Z(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Xq:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=saa();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.B("SESSION_INDEX",0));var k="",l=a.C.qB;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);a=""+k+Waa(a.C.innertubeApiVersion,b,c)+"?alt=json&key="+a.C.innertubeApiKey;g.ue("use_fetch_for_op_xhr")?Naa(a,e):g.hf(a,e)};
g.cg=function(a,b,c){g.bg(a,b,c,void 0)};
g.dg=function(){g.ue("log_web_meta")&&Vaa().forEach(function(a){g.cg("delayedEventMetricCaptured",a)})};
g.eg=function(a,b,c){(0,g.y)(b,function(b){g.bg("visualElementHidden",{csn:a,ve:g.Gf(b),eventType:c?16:8})})};
gg=function(a,b){var c=Object.keys(a).join("");fg("info_"+c+"_"+b)||(a.clientActionNonce=b,g.cg("latencyActionInfo",a))};
fg=function(a){hg[a]=hg[a]||{count:0};var b=hg[a];b.count++;b.time=g.Rf();ig||(ig=g.Pe(Xaa,0,5E3));return 10<b.count?(11==b.count&&g.Cf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
Xaa=function(){var a=g.Rf(),b;for(b in hg)6E4<a-hg[b].time&&delete hg[b];ig=0};
g.lg=function(a){if(!g.jg&&!g.kg||!window.JSON)return null;try{var b=g.jg.get(a)}catch(c){}if(!g.sa(b))try{b=g.kg.get(a)}catch(c){}if(!g.sa(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.mg=function(){var a=g.B("ROOT_VE_TYPE",void 0);return a?new g.Df(void 0,a,void 0):null};
g.ng=function(){return g.lg("yt-interaction-logging-parent")};
g.og=function(){var a=g.B("client-screen-nonce")||g.B("EVENT_ID");return a?a:null};
g.pg=function(a,b){a=a||"";var c=a.match(Yaa);window.spf.style.load(a,c?c[1]:"",b)};
g.qg=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Wa,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.bc("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.gc(a).body.appendChild(a)):e?cf(a,b,"POST",e,d):g.B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?cf(a,b,"GET","",d):Zaa(a,b))};
Zaa=function(a,b){var c=new window.Image,d=""+$aa++;rg[d]=c;c.onload=c.onerror=function(){b&&rg[d]&&b();delete rg[d]};
c.src=a};
g.sg=function(a,b){this.version=a;this.args=b};
g.tg=function(a,b){this.topic=a;this.C=b};
g.vg=function(a,b){var c=g.ug();c&&c.publish.call(c,a.toString(),a,b)};
g.ug=function(){return g.q("ytPubsub2Pubsub2Instance")};
wg=function(){var a=g.B("TIMING_TICK_EXPIRATION");a||(a={},g.pe("TIMING_TICK_EXPIRATION",a));return a};
xg=function(){var a=wg(),b;for(b in a)g.Re(a[b]);g.pe("TIMING_TICK_EXPIRATION",{})};
yg=function(a,b){g.sg.call(this,1,arguments)};
zg=function(a,b){g.sg.call(this,1,arguments)};
Bg=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Xd)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ag)for(a=1,b=0;b<Ag.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ag.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&
63));return a.join("")};
Eg=function(a){Cg(a);aba();Dg(!1,a);a||(g.B("TIMING_ACTION")&&g.pe("PREVIOUS_ACTION",g.B("TIMING_ACTION")),g.pe("TIMING_ACTION",""))};
g.Jg=function(a,b,c){b||"_"==a[0]||Fg(a,c);var d=Gg(c),e=b||g.Rf();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=wg();var f=e[a];f&&(g.Re(f),e[a]=0);Hg(a,b,c)||g.Ig(!1,c);return d[a]};
Fg=function(a,b){Kg.mark&&(g.Ea(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Kg.mark(a))};
Ng=function(a,b){Mg("yt_sts",a,void 0);g.Jg("_start",b,void 0)};
Mg=function(a,b,c){Og(c)[a]=b;Pg(a,b,c)};
Qg=function(a){var b=Og(void 0);return a in b};
Rg=function(a){var b=Gg(a);if(b.aft)return b.aft;a=g.B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
Sg=function(a){g.Jg("nreqs",a.requestStart,void 0);g.Jg("nress",a.responseStart,void 0);g.Jg("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.Jg("nrs",a.redirectStart,void 0),g.Jg("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.Jg("ndnss",a.domainLookupStart,void 0),g.Jg("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.Jg("ntcps",a.connectStart,void 0),g.Jg("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.Jg("nstcps",a.secureConnectionStart,void 0),g.Jg("ntcpe",a.connectEnd,void 0))};
g.Ig=function(a,b){if(!Tg(b)){var c=g.B((b||"")+"TIMING_ACTION",void 0),d=Gg(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Rg(b)))if(g.ue("tighter_critical_section")&&!Ug&&(g.vg(bba,new yg(Math.round(c-d._start),b)),Ug=!0),a||b)Vg(b);else{c=!0;var e=g.B("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Vg(b)}}};
cba=function(){switch(g.pf()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Vg=function(a){xg();if(!g.ue("csi_on_gel")){var b=Gg(a),c=Og(a),d=b._start,e;for(e in b)if(g.Ea(e,"_")&&g.wa(b[e])){var f=e.slice(1);if(f in dba){var k=(0,g.Wg)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.q("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))Xg(k,f),Eg(a)}else{var l=g.B("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.B((a||"")+"TIMING_ACTION",void 0)};var p=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var t=window.location.protocol+g.q("ytplayer.config.assets.js");(t=Kg.getEntriesByName?Kg.getEntriesByName(t)[0]:null)?c.h5jse=Math.round(c.h5jse-t.responseEnd):delete c.h5jse}b.aft=Rg(a);eba(a)&&"youtube"==l&&(Mg("yt_lt","hot_bg",a),l=
b.vc,t=b.pbs,delete b.aft,c.aft=Math.round(t-l));for(var w in c)"_"!=w.charAt(0)&&(k[w]=c[w]);b.ps=g.Rf();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,w.push(e+"."+l));k.rt=w.join(",");(b=g.q("ytdebug.logTiming"))&&b(k,c);Xg(k,f,a);g.vg(fba,new zg(c.aft+(p||0),a))}}};
Zg=function(a){if(!Tg(void 0)){if(!g.ue("send_empty_timing")){var b=g.B("CSI_SERVICE_NAME","youtube");if(!g.B("TIMING_ACTION",void 0)||!b)return}g.Jg("aa",void 0,void 0);Mg("ap",1,void 0);Mg("yt_fss",a,void 0);!g.ue("enable_csi_abandonment_info")||Qg("yt_lt")||Yg();Vg(void 0)}};
gba=function(){if("cold"==Og().yt_lt){var a=Gg(),b=$g(),c;for(c in a)g.Ea(c,"_")||"tick_"+c in b||Hg(c,a[c]);a=Og();for(c in a)"info_"+c in b||Pg(c,a[c])}};
Hg=function(a,b,c){$g(c)["tick_"+a]=b;c||b||g.Rf();return g.ue("csi_on_gel")?(c=ah(c),"_start"==a?fg("baseline_"+c)||g.cg("latencyActionBaselined",{clientActionNonce:c},b):fg("tick_"+a+"_"+c)||g.cg("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Pg=function(a,b,c){$g(c)["info_"+a]=b;if(g.ue("csi_on_gel"))if(a in bh){var d={};a=bh[a];g.Qa(hba,a)&&(b=!!b);a=a.split(".");for(var e=d,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];d[a[a.length-1]]=b;b=ah(c);gg(d,b)}else g.Qa(iba,a)||g.re(Error("Unknown label "+a+" logged with GEL CSI."))};
Yg=function(){var a=g.B("TIMING_INFO",{});for(b in a)Mg(b,a[b]);Mg("is_nav",1);(a=g.og())&&Mg("csn",a);(a=g.B("PREVIOUS_ACTION",void 0))&&Mg("pa",a);var b=Og();b.p=g.B("CLIENT_PROTOCOL")||"unknown";b.t=g.B("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&Mg("ba",1);Mg("yt_vis",cba());if("cold"==b.yt_lt){a=Kg.timing||{};a.navigationStart&&(g.Jg("srt",a.responseStart),1!=b.prerender&&Ng("n",a.navigationStart));a:if(a.msFirstPaint)b=Math.max(0,a.msFirstPaint);else{if(b=window.chrome)if(b=
b.loadTimes,g.ya(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;b=Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0);break a}b=0}0<b&&g.Jg("fpt",b);Sg(a);Kg.getEntriesByType&&jba();a=[];if(window.document.querySelector&&Kg&&Kg.getEntriesByName)for(var d in ch)b=ch[d],kba(d,b)&&a.push(b);a.length&&Mg("rc",a.join(","))}g.ue("csi_on_gel")&&(d={},d.actionType=lba[g.B("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",
a=ah(),gg(d,a))};
dh=function(a){return Math.round(Kg.timing.navigationStart+a)};
jba=function(){var a=window.location.protocol,b=Kg.getEntriesByType("resource");b=(0,g.eh)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20171101011838/https://fonts.gstatic.com/s/")});
(b=(0,g.fh)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.Jg("wffs",dh(b.startTime)),g.Jg("wffe",dh(b.responseEnd)))};
kba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=Kg.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.Jg("rsf_"+b,d+Math.round(c.fetchStart)),g.Jg("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(Qg("rc")||Mg("rc",""),0===c.transferSize))?!0:!1:!1};
Xg=function(a,b,c){if(g.ue("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.n("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||g.qg(a,void 0,void 0,void 0,f)}catch(k){g.qg(a,void 0,void 0,void 0,f)}}else g.qg(a);Dg(!0,c)};
gh=function(a){g.n("ytglobal.timingready_",a,void 0)};
ah=function(a){var b=hh(a).nonce;b||(b=Bg(),hh(a).nonce=b);return b};
Gg=function(a){return hh(a).tick};
Og=function(a){return hh(a).info};
$g=function(a){a=hh(a);"gel"in a||(a.gel={});return a.gel};
hh=function(a){return g.q("ytcsi."+(a||"")+"data_")||Cg(a)};
Cg=function(a){var b={tick:{},info:{}};g.n("ytcsi."+(a||"")+"data_",b,void 0);return b};
Tg=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
Dg=function(a,b){g.n("yt.timing."+(b||"")+"pingSent_",a,void 0)};
eba=function(a){var b=Gg(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Og(a).yt_pvis};
jh=function(a,b){g.sc.call(this);this.H=this.na=a;this.N=b;this.L=!1;this.api={};this.ea=this.W=null;this.R=new g.Qd;g.vc(this,this.R);this.D={};this.ma=this.ia=this.F=this.ib=this.C=null;this.V=!1;this.G=this.J=null;this.Ha={};this.sb=["onReady"];this.bb=null;this.mb=window.NaN;this.Y={};ih(this);this.Ih("WATCH_LATER_VIDEO_ADDED",(0,g.r)(this.hG,this));this.Ih("WATCH_LATER_VIDEO_REMOVED",(0,g.r)(this.iG,this));this.Ih("onAdAnnounce",(0,g.r)(this.kv,this));this.ub=new xf;g.vc(this,this.ub)};
kh=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
mh=function(a){var b=!0,c=lh(a);c&&a.C&&(a=a.C,b=g.C(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
mba=function(a){if(!a.V){var b=mh(a);if(b&&"html5"==(lh(a)?"html5":null))a.ma="html5",a.L||a.qj();else if(nh(a),a.ma="html5",b&&a.G)a.na.appendChild(a.G),a.qj();else{a.C.loaded=!0;var c=!1;a.J=(0,g.r)(function(){c=!0;var a=this.C.clone();g.q("yt.player.Application.create")(this.na,a);this.qj()},a);
a.V=!0;b?a.J():(g.Ke(a.C.assets.js,a.J),g.pg(a.C.assets.css),oh(a)&&!c&&g.n("yt.player.Application.create",null,void 0))}}};
lh=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
ph=function(a,b,c){var d=b[c];return function(){try{return a.bb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.bb=e,g.re(e,"WARNING"))}}};
ih=function(a){a.L=!1;if(a.ea)for(var b in a.D)a.ea(b,a.D[b]);for(var c in a.Y)g.Be((0,window.parseInt)(c,10));a.Y={};a.W=null;a.ea=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=(0,g.r)(a.Ih,a);a.api.removeEventListener=(0,g.r)(a.zK,a);a.api.destroy=(0,g.r)(a.dispose,a);a.api.getLastError=(0,g.r)(a.lx,a);a.api.getPlayerType=(0,g.r)(a.Ex,a);a.api.getCurrentVideoConfig=(0,g.r)(a.Nw,a);a.api.loadNewVideoConfig=(0,g.r)(a.Hl,a);a.api.isReady=(0,g.r)(a.eC,a)};
qh=function(a,b){var c=b;if("string"==typeof b){if(a.Ha[b])return a.Ha[b];c=function(){var a=g.q(b);a&&a.apply(g.m,arguments)};
a.Ha[b]=c}return c?c:null};
nba=function(a,b){var c="ytPlayer"+b+a.N,d=(0,g.r)(function(a){if("html5"==(lh(this)?"html5":null)){var c=this.C&&this.C.args&&this.C.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true")){this.R.qa(b,a);return}}var d=g.ze((0,g.r)(function(){this.ob()||(this.R.qa(b,a),g.db(this.Y,String(d)))},this),0);
g.eb(this.Y,String(d),!0)},a);
a.D[b]=c;g.m[c]=d;return c};
nh=function(a){g.Jg("dcp");a.cancel();ih(a);a.ma=null;a.C&&(a.C.loaded=!1);var b=lh(a);"html5"==(lh(a)?"html5":null)&&(mh(a)||!oh(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.ec(a.na)};
oh=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.th=function(a,b){a=g.sa(a)?g.Vb(a):a;b=g.zf(b);var c=g.rh+"_"+g.Ba(a),d=g.sh[c];if(d)return d.Hl(b),d.api;d=new jh(a,c);g.sh[c]=d;g.E("player-added",d.api);g.tc(d,g.u(oba,d));g.ze(function(){d.Hl(b)},0);
return d.api};
oba=function(a){delete g.sh[a.getId()]};
g.uh=function(a){if(!a)return null;var b=g.rh+"_"+g.Ba(a),c=g.sh[b];c||(c=new jh(a,b),g.sh[b]=c);return c.api};
g.vh=function(a){return g.uh(window.document.getElementById(a))};
wh=function(){if(g.ue("log_web_screen_end")){var a=g.mg(),b=g.og();b&&a&&g.eg(b,[a],!0)}};
g.Ah=function(a){var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.$f()>b)&&"visible"==g.pf()){b=-1;g.xh&&(b=Math.round(g.Rf()-g.xh));var c=String;var d=g.q("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Xd)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.yh,index:String(zh),lastEventDeltaMs:String(b),trigger:a};g.bg("foregroundHeartbeat",a);g.n("_fact",-1,window);zh++;g.xh=g.Rf()}};
g.Bh=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?se(d):null;this.H=e?se(e):null;this.G=[];this.C=this.F=0};
g.Ch=function(a){g.Re(a.F);a.F=g.Qe((0,g.r)(a.init,a))};
g.Fh=function(a){a.name in Dh&&Eh(a.name);Dh[a.name]={reqs:[],disable:(0,g.r)(a.disable,a)};(0,g.y)(a.deps,function(b){if(!(b in Dh))throw Error("Module "+b+" required by "+a.name);Dh[b].reqs.push(a.name)});
a.enable()};
Eh=function(a){if(a in Dh){var b=Dh[a];(0,g.y)(b.reqs,function(a){Eh(a)});
try{b.disable()}catch(c){}delete Dh[a]}};
Hh=function(a){ne(g.Gh,arguments)};
g.Ih=function(a){return a in g.Gh};
Jh=function(a){ne(g.Gh,arguments)};
g.Lh=function(a,b,c,d){g.Kh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Nh=function(a,b,c){var d=g.B("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.ge(window.location.href);e&&d.push(e);e=g.ge(a);if(g.Qa(d,e)||!e&&g.Ea(a,"/"))if(g.ue("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.Pb(d,a),a=d.href),a&&(a=g.he(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.og();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Ma(a).toString(36),d=b?g.ke(b):"",g.Lh(a,d,c||5),Mh(b))):(c="ST-"+g.Ma(a).toString(36),a=b?g.ke(b):
"",g.Lh(c,a,5),Mh(b))}};
Mh=function(a){if(a){a=a.itct||a.ved;var b=g.q("yt.logging.screen.storeParentElement");a&&b&&b(g.Ff(a))}};
g.Oh=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.Qb(d.location,g.le(a,b)+c)};
g.Ph=function(a,b){b&&g.Nh(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.Oh(a)};
g.Qh=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.B("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Nh(a,b);if(c)return!1;g.Ph(a);return!0};
g.Sh=function(a,b){var c={};c.key=a;c.value=b;return Rh().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.Th=function(a){return Rh().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
Rh=function(){return Uh?window.Promise.resolve(Uh):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))Uh=b,a(Uh);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),Rh()};
c.onupgradeneeded=pba})};
pba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
vba=function(){Vh++;var a=g.Zb(),b=new g.ic(0,0,a.width,a.height);Mg("vph",a.height);Mg("vpw",a.width);g.Jg("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;Wh.start();for(var f=0;f<c;f++){var k=a[f];if(Xh(k,b)){var l=qba(k);l.then(rba);d.push(l);Yh.push(l);k.loadTime||(e=!1)}}e&&Mg("yt_eil",1);Mg("vpni",d.length);g.Jg("vpcc");b=g.rd(d).then(sba);g.td(b,tba);b.then(uba);Yh.push(b);return b};
uba=function(){Wh.stop()};
tba=function(){g.Jg("vpr")};
Xh=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.of(c);if(e in Zh)return!0;if(e in $h)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return $h[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return $h[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Zh[d[c]]=!0;return!0};
sba=function(a){var b=g.Zb();b=new g.ic(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Xh(a[d].kB,b)&&c<f&&(c=f)}return c};
qba=function(a){var b=Vh;return new g.ld(function(c,d){var e={kB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){Vh!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},ai.push(a))})};
rba=function(a){Wh.start();Mg("vpil",++bi);a=a.time;ci<a&&(ci=a,g.Jg("lim",a))};
wba=function(){g.Jg("vptl",ci);g.Jg("vpl",ci)};
xba=function(){Yh.forEach(function(a){a.cancel()});
ci=bi=Yh.length=0;Zh={};$h={};ai.forEach(function(a){a.slt=void 0});
ai.length=0};
g.di=function(a,b){g.qg("/gen_204?"+a,b)};
zba=function(a){if(null==a)return[];var b=[];yba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.ei=function(){return g.z(g.x("page-container"),"remote-connected")};
Aba=function(){fi=g.Ae(gi,5E3);var a=g.hi();a?(a.addEventListener("onReady",gi),a.addEventListener("onStateChange",gi)):ii("unable to init PP monitor")};
li=function(a){for(var b in g.sh){var c=g.sh[b];c&&c.cancel()}if(a=a||null){b=g.hi();var d=!0;c=g.ji;g.ji=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(ki="",g.th("player-api",a)):b.playVideo();a=g.zf(a);a.loaded=!0}gi();g.n("ytplayer.config",a,void 0)};
g.hi=function(){return g.vh("player-api")};
gi=function(){var a=g.hi();if(a){var b=g.x("player");b=!b||g.z(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.B("PAGE_NAME"),e=g.ei();!c||d||e||(ii("PP playing off watch (paused)"),a.pauseVideo());b&&d?ii("PP off-screen on watch"):b||d||ii("PP !off-screen off watch")}};
ii=function(a){var b=g.B("PAGE_NAME");b&&(a+="("+[b,ki,g.q("_spf_state.nav-counter")].join()+")",g.n("yt.www.persistentplayer.issue",a,void 0),g.re(Error(a),"WARNING"))};
ni=function(){g.Jg("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.Jg("cpt");g.E("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?(g.Jg("cpt"),g.E("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){g.Jg("cpt");
g.E("on_cpt_tick",(new Date).getTime())},0);
Bba();g.B("CSI_VIEWPORT")&&(mi=vba(),mi.then(function(a){g.Jg("vpl",a);mi=null},function(){}))};
Bba=function(){oi("init");var a=g.B("PAGE_NAME",void 0);a&&oi("init-"+a)};
oi=function(a){g.Oe()?pi.push(g.Qe(g.u(g.Ie,a),0)):g.E(a)};
qi=function(){g.Se(pi);pi.length=0;xba();mi&&(mi.cancel(),mi=null);var a=g.B("PAGE_NAME",void 0);a&&g.Ie("dispose-"+a);g.Ie("dispose")};
Cba=function(){ni()};
Dba=function(){g.B("TIMING_REPORT_ON_UNLOAD")&&g.Ig(!0);Zg("u");g.Ah("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");wh();g.dg();g.Kf();qi();g.Ie("pageunload")};
ri=function(){Yf()};
si=function(a){a=a.detail.url;window.yt_spf_loaded_history=!0;Yf();var b=g.ng();if(b&&a){var c=g.Gf(b.visualElement);b={csn:b.clientScreenNonce};"trackingParams"in c?b.itct=c.trackingParams:(b.veType=c.veType,b.veCounter=c.veCounter);g.Nh(a,b)}};
xi=function(){ti=1;ui=vi=0;g.B("TIMING_REPORT_ON_UNLOAD")&&g.Ig(!0);g.ue("warm_load_nav_start_web")?(Zg("n"),Eg(),gh(!1),g.pe("TIMING_AFT_KEYS",[]),Mg("yt_lt","warm"),g.pe("TIMING_ACTION",""),g.pe("TIMING_WAIT",[]),xg()):(Zg("n"),Eg());Ng("n");Fg("nr");wi(Eba);wh();g.Ie("navigate")};
Bi=function(a){a=a.detail.part||a.detail.partial;g.Jg("nc"+vi);++vi;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.Jg("bc");else{var b=1==ti;ti=2;b?(wi(Fba),yi()):wi(Gba);if(b=a&&a.data&&a.data.swfcfg)zi(a.timing,b.args),Ai(b)}};
Ci=function(){g.Jg("np"+ui);++ui};
Di=function(a){a=a.detail.response;var b=1==ti;ti=3;b&&(wi(Hba),yi());if(b=a.data&&a.data.swfcfg)zi(a.timing,b.args),Ai(b)};
Ki=function(a){g.Jg("nd");a=a.detail.response;g.Hi=a.cacheKey;a=a.timing;var b=window._spf_state;g.Ii.navigationCount=b&&b["nav-counter"]||0;g.ue("warm_load_nav_start_web")?g.Jg("srt",a.responseStart):(Ng("ne",a.responseStart),Mg("srt",Math.max(0,a.responseStart-a.navigationStart)));Mg("yt_lt",a.spfCached?"hot":"warm");Mg("yt_pft",+!!a.spfPrefetched);g.Jg("pfs",a.fetchStart);g.Jg("pfrs",a.responseStart);"redirectStart"in a&&Sg(a);wi(Ji);window.document.getElementById("content").style.height="";ni();
ti=0};
Li=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.re(a)};
Mi=function(a){g.di(g.ke({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Jba=function(){Iba();window.yt_spf_loaded_history=!1};
Kba=function(){};
yi=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");qi();a=g.B("PREVIOUS_ACTION");for(var b in g.oe)delete g.oe[b];g.pe("PREVIOUS_ACTION",a);g.pe("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.n("ytplayer.config",null,void 0);if((b=g.hi())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())ki=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),ki="recovered"):ki="missing2"}else ki="missing";gi()};
Ai=function(a){"cfg"in Gg(void 0)||g.Jg("cfg");li(a)};
wi=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Re(Ni);Ni=g.Qe(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Be(Oi);Oi=g.ze(function(){b.className=e},c)},0)};
Iba=function(){var a=Ji[0]+50;g.Be(Oi);Oi=g.ze(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
zi=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=zba(b));g.B("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.di(g.ke(c)))};
Qi=function(){return Pi().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})};
Lba=function(){var a=g.Ri&&g.ue("enable_firefox_push_notifications");return!(!g.Si&&!a||g.Ti||g.Ui||g.Vi||!window.navigator.serviceWorker||!window.navigator.serviceWorker.getRegistration||!window.Notification||!window.Promise)};
Xi=function(){Wi({type:"notifications_register",data:g.B("ID_TOKEN")})};
Pi=function(){return window.navigator.serviceWorker.getRegistration(String(te("service_worker_scope")||""))};
Mba=function(){return Wi({type:"notifications_check_registration",data:g.B("ID_TOKEN")})};
Wi=function(a){return Pi().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Nba=function(){if(!g.B("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(te("service_worker_push_force_notification_prompt_tag")||"");return a?g.Th("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
Rba=function(){return g.B("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)?Nba().then(function(a){if(a)return!0;a=[Oba(),Pba()];g.B("LOGGED_IN",void 0)||a.push(Qba());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
Qba=function(){var a=g.ve("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.Th("WatchCount").then(function(b){return b>=a})};
Uba=function(){return g.ue("service_worker_push_ticker_enabled")?Sba().then(function(a){if(!a)return window.Promise.resolve();a=$i();if(!a)return window.Promise.resolve();var b=aj();if(!b)return window.Promise.resolve();var c=(c=$i())?c.querySelector(".yt-uix-button-close"):null;if(!c)return window.Promise.resolve();g.G(b,"click",Zi);g.G(c,"click",Tba);window.document.body.classList.add("sitewide-ticker-visible");a.classList.add("show");return Yi()}):(Yi(),Zi())};
Zi=function(){var a=arguments;g.ue("service_worker_push_prompt_modal_enable")&&Vba();return window.Notification.requestPermission().then(function(a){bj();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return Qi().then(function(){g.Sh("NotificationsDisabled",!1);Xi();return window.Promise.resolve(!0)});
"denied"==a&&Xi();return window.Promise.resolve(!1)})["catch"](function(){bj();
return window.Promise.reject.apply(window.Promise,[].concat(a instanceof Array?a:baa(g.oa(a))))})};
Tba=function(){g.Sh("HideTicker",(0,g.Xd)());window.document.body.classList.remove("sitewide-ticker-visible")};
Sba=function(){return g.Th("HideTicker").then(function(a){return(0,g.Xd)()>a+2592E6})};
cj=function(){return g.ue("service_worker_push_home_only")?"HomePromptCount":"PromptCount"};
Yi=function(){var a=cj();return g.Th(a).then(function(b){return g.Sh(a,b+1)}).then(function(){if(g.ue("service_worker_push_home_only"))return g.Sh("HomePromptTime",(0,g.Xd)())}).then(function(){var a=String(te("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.Th("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(e){return!1}c||(c=[]);c.push(a);return g.Sh("PromptTags",JSON.stringify(c))})})};
$i=function(){var a=window.document.getElementById("ticker");return a&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.C(a,"trigger-condition")?a:null};
aj=function(){var a=$i();return a?a.querySelector(".yt-uix-button-alert-info"):null};
Oba=function(){return-1==g.ve("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.Th(cj()).then(function(a){a||(a=0);return window.Promise.resolve(a<g.ve("service_worker_push_prompt_cap"))})};
Pba=function(){var a=g.ve("service_worker_push_prompt_delay_ms");return a?g.Th("HomePromptTime").then(function(b){return window.Promise.resolve((0,g.Xd)()-a>(b||0))}):window.Promise.resolve(!0)};
Wba=function(){dj||bj()};
ej=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
Vba=function(){var a=g.x("yt-push-prompt-modal-bg");dj=g.ue("service_worker_push_prompt_modal_ignore_click");a?ej(a):(a=g.bc("div",{id:"yt-push-prompt-modal-bg"}),ej(a),window.document.body.appendChild(a),g.vf(window.document,"click",Wba))};
bj=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.fc(a)};
Xba=function(a){return Lba()&&a&&a.pushManager?"default"!=window.Notification.permission?Qi().then(Mba):Rba().then(function(a){if(a)return Uba()}):window.Promise.resolve()};
Zba=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(Yba)})};
aca=function(){var a="/sw.js",b=g.B("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=fj(a);g.ue("service_worker_push_enabled")&&a.then($ba).then(Xba)};
$ba=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
Yba=function(a){a&&fj("/sw.js?0",a.scope)};
fj=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(te("service_worker_scope")||"")||"/"})};
gj=function(){g.Bh.call(this,"www/base");this.D=0};
hj=function(a){(a=a.detail.name)&&Eh(a)};
g.aa=[];ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)ij=Object.setPrototypeOf;else{var jj;a:{var bca={a:!0},kj={};try{kj.__proto__=bca;jj=kj.a;break a}catch(a){}jj=!1}ij=jj?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var da=ij,ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ha="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,aaa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
pa("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
pa("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)qa(e,f)&&(a[f]=e[f])}return a}});
var cca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
pa("Reflect.construct",function(){return cca});
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
var f=new c;b.prototype.V=function(a){var b=this.H();a.Rh(b.resolve,b.reject)};
b.prototype.ma=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(t){c.reject(t)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(ka){f(ka)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Rh(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Rh=function(a,b){function c(){switch(d.C){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?f.F(c):this.F.push(function(){f.F(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.oa(a),f=e.next();!f.done;f=e.next())d(f.value).Rh(b,c)})};
b.all=function(a){var c=g.oa(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Rh(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
pa("WeakMap",function(a){function b(a){this.nb=(f+=Math.random()+1).toString();if(a){fa();la();a=g.oa(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){qa(a,e)||ia(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(t){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!qa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.nb]=b;return this};
b.prototype.get=function(a){return qa(a,e)?a[e][this.nb]:void 0};
b.prototype.has=function(a){return qa(a,e)&&qa(a[e],this.nb)};
b.prototype["delete"]=function(a){return qa(a,e)&&qa(a[e],this.nb)?delete a[e][this.nb]:!1};
return b});
pa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return na(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&qa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,kc:l}}return{id:c,list:d,index:-1,kc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.oa(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.oa([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(A){return!1}}())return a;
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
pa("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.oa(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.oa([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
fa();la();b.prototype.add=function(a){this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
pa("Array.from",function(a){return a?a:function(a,c,d){la();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
g.lj=g.lj||{};g.m=this;Aa="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Xd=Date.now||function(){return+new Date};g.v(g.Ca,Error);g.Ca.prototype.name="CustomError";var gaa,haa,iaa,jaa,kaa,laa,faa;g.Ja=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.mj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.Pa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(g.sa(a))return g.sa(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.dca=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;
0>c&&(c=Math.max(0,a.length+c));if(g.sa(a))return g.sa(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.eh=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.sa(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var p=k[l];
b.call(c,p,l,a)&&(e[f++]=p)}return e};
g.Wg=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.sa(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.fh=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.r)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.y)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.nj=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.oj=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};a:{var pj=g.m.navigator;if(pj){var qj=pj.userAgent;if(qj){g.Wa=qj;break a}}g.Wa=""};var gb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.ob[" "]=g.ua;var yj,maa,Cj;g.rj=g.Xa("Opera");g.H=g.ib();g.sj=g.Xa("Edge");g.tj=g.sj||g.H;g.uj=g.Xa("Gecko")&&!(-1!=g.Wa.toLowerCase().indexOf("webkit")&&!g.Xa("Edge"))&&!(g.Xa("Trident")||g.Xa("MSIE"))&&!g.Xa("Edge");g.vj=-1!=g.Wa.toLowerCase().indexOf("webkit")&&!g.Xa("Edge");g.wj=g.Xa("Macintosh");g.xj=g.Xa("Windows");g.eca=g.Xa("Linux")||g.Xa("CrOS");g.fca=g.Xa("Android");g.Ui=mb();g.Vi=g.Xa("iPad");g.gca=g.Xa("iPod");g.hca=g.nb();
a:{var zj="",Aj=function(){var a=g.Wa;if(g.uj)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.sj)return/Edge\/([\d\.]+)/.exec(a);if(g.H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.vj)return/WebKit\/(\S+)/.exec(a);if(g.rj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Aj&&(zj=Aj?Aj[1]:"");if(g.H){var Bj=qb();if(null!=Bj&&Bj>(0,window.parseFloat)(zj)){yj=String(Bj);break a}}yj=zj}g.rb=yj;maa={};var Dj=g.m.document;Cj=Dj&&g.H?qb()||("CSS1Compat"==Dj.compatMode?(0,window.parseInt)(g.rb,10):5):void 0;g.tb=Cj;var oaa;oaa=!g.H||g.ub(9);g.ica=!g.uj&&!g.H||g.H&&g.ub(9)||g.uj&&g.sb("1.9.1");g.Ej=g.H&&!g.sb("9");g.jca=g.H||g.rj||g.vj;g.wb.prototype.Nd=!0;g.wb.prototype.Sc=function(){return this.C};
g.wb.prototype.toString=function(){return"Const{"+this.C+"}"};
g.vb={};g.xb("");g.kca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.lca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Fj=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");var yb;g.Ab.prototype.Nd=!0;g.Ab.prototype.Sc=function(){return this.C};
g.Ab.prototype.fl=!0;g.Ab.prototype.Ee=g.ba(1);g.Cb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;yb={};g.Db("about:blank");g.Hb.prototype.Nd=!0;g.Gb={};g.Hb.prototype.Sc=function(){return this.C};
g.Gj=g.Ib("");g.Hj=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.mca=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Kb.prototype.Nd=!0;g.Jb={};g.Kb.prototype.Sc=function(){return this.C};
g.nca=g.Lb("");g.Nb.prototype.fl=!0;g.Nb.prototype.Ee=g.ba(0);g.Nb.prototype.Nd=!0;g.Nb.prototype.Sc=function(){return this.C};
g.Mb={};g.Ob("<!DOCTYPE html>",0);g.Ij=g.Ob("",0);g.Jj=g.Ob("<br>",0);g.h=g.Sb.prototype;g.h.clone=function(){return new g.Sb(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Sb&&g.Tb(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.Sb?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.ta(b)&&(this.y+=b));return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.Ub.prototype;g.h.clone=function(){return new g.Ub(this.width,this.height)};
g.h.Av=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Av()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.width*=a;this.height*=c;return this};var Wb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.Kj=window.document;g.Lj=window;g.h=g.ic.prototype;g.h.clone=function(){return new g.ic(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Sb?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.Sb?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.ta(b)&&(this.top+=b));return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.Mj=g.uj?"MozUserSelect":g.vj||g.sj?"WebkitUserSelect":null;g.Nj=g.mc(null);g.oca=Object.prototype.hasOwnProperty;g.Oj=g.nc(window);g.Pj=g.Oj&&window.parent||window;g.Qj=(new Date).getTime();g.h=g.qc.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ra(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Xd)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Ja)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.ra(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Dc=g.ba(2);g.h.Hb=g.ba(3);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Bb=g.ba(7);g.h.be=g.ba(8);g.h.clear=function(){for(var a=g.rc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Kh=new g.qc("undefined"==typeof window.document?null:window.document);g.Kh.F=3950;g.sc.prototype.Cc=!1;g.sc.prototype.ob=function(){return this.Cc};
g.sc.prototype.dispose=function(){this.Cc||(this.Cc=!0,this.X())};
g.sc.prototype.X=function(){if(this.Lb)for(;this.Lb.length;)this.Lb.shift()()};g.wc.prototype.stopPropagation=function(){this.F=!0};
g.wc.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Os=!1};var Nc,qca;g.pca=!g.H||g.ub(9);Nc=!g.H||g.ub(9);qca=g.H&&!g.sb("9");!g.vj||g.sb("528");g.uj&&g.sb("1.9b")||g.H&&g.sb("8")||g.rj&&g.sb("9.5")||g.vj&&g.sb("528");g.uj&&!g.sb("8")||g.H&&g.sb("9");var waa=function(){if(!g.m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.m.addEventListener("test",g.ua,b);g.m.removeEventListener("test",g.ua,b);return a}();g.Rj=g.H?"focusin":"DOMFocusIn";g.Sj=g.H?"focusout":"DOMFocusOut";g.Tj=g.vj?"webkitTransitionEnd":g.rj?"otransitionend":"transitionend";g.v(g.yc,g.wc);var rca={2:"touch",3:"pen",4:"mouse"};
g.yc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.uj&&(g.pb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.L=g.wj?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.sa(a.pointerType)?a.pointerType:rca[a.pointerType]||"";this.state=a.state;this.wc=a;a.defaultPrevented&&
this.preventDefault()};
g.yc.prototype.stopPropagation=function(){g.yc.M.stopPropagation.call(this);this.wc.stopPropagation?this.wc.stopPropagation():this.wc.cancelBubble=!0};
g.yc.prototype.preventDefault=function(){g.yc.M.preventDefault.call(this);var a=this.wc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,qca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var zc="closure_listenable_"+(1E6*Math.random()|0),taa=0;g.h=g.Cc.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Ec(a,b,d,e);-1<k?(b=a[k],c||(b.Qh=!1)):(b=new uaa(b,this.src,f,!!d,e),b.Qh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ec(e,b,c,d);return-1<b?(Bc(e[b]),g.Sa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Bc(d[e]);delete this.listeners[c];this.C--}return b};
g.h.ag=g.ba(10);g.h.gf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Ec(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.ra(a),d=c?a.toString():"",e=g.ra(b);return g.Za(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Kc="closure_lm_"+(1E6*Math.random()|0),Qc={},Mc=0,Tc="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.Uc,g.sc);g.Uc.prototype[zc]=!0;g.h=g.Uc.prototype;g.h.si=function(){return this.Ul};
g.h.sh=g.ba(11);g.h.addEventListener=function(a,b,c,d){g.Gc(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Oc(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.si();if(b){var c=[];for(var d=1;b;b=b.si())c.push(b),++d}b=this.nv;d=a.type||a;if(g.sa(a))a=new g.wc(a,b);else if(a instanceof g.wc)a.target=a.target||b;else{var e=a;a=new g.wc(d,b);g.hb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=Vc(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=Vc(k,d,!0,a)&&e,a.F||(e=Vc(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=Vc(k,d,!1,a)&&e;return e};
g.h.X=function(){g.Uc.M.X.call(this);this.removeAllListeners();this.Ul=null};
g.h.O=function(a,b,c,d){return this.vd.add(String(a),b,!1,c,d)};
g.h.Ie=function(a,b,c,d){return this.vd.add(String(a),b,!0,c,d)};
g.h.Wa=function(a,b,c,d){return this.vd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.vd?this.vd.removeAll(a):0};
g.h.ag=g.ba(9);g.h.gf=function(a,b,c,d){return this.vd.gf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.vd.hasListener(g.ra(a)?String(a):void 0,b)};Xc.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var gd;var hd=new Xc(function(){return new ad},function(a){a.reset()},100);
$c.prototype.add=function(a,b){var c=hd.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
$c.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
ad.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
ad.prototype.reset=function(){this.next=this.scope=this.lc=null};var bd,cd=!1,dd=new $c;md.prototype.reset=function(){this.context=this.F=this.G=this.C=null;this.D=!1};
var nd=new Xc(function(){return new md},function(a){a.reset()},100);
g.ld.prototype.then=function(a,b,c){return sd(this,g.ya(a)?a:null,g.ya(b)?b:null,c)};
g.id(g.ld);g.ld.prototype.cancel=function(a){0==this.C&&ed(function(){var b=new g.zd(a);ud(this,b)},this)};
g.ld.prototype.W=function(a){this.C=0;g.kd(this,2,a)};
g.ld.prototype.N=function(a){this.C=0;g.kd(this,3,a)};
g.ld.prototype.J=function(){for(var a;a=vd(this);)wd(this,a,this.C,this.R);this.L=!1};
var Bd=Zc;g.v(g.zd,g.Ca);g.zd.prototype.name="cancel";g.v(g.Gd,g.sc);g.h=g.Gd.prototype;g.h.nb=0;g.h.X=function(){g.Gd.M.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.nb=g.Ed(this.uc,g.ra(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Fd(this.nb);this.nb=0};
g.h.isActive=function(){return 0!=this.nb};
g.h.Gk=function(){this.nb=0;this.C&&this.C.call(this.F)};g.Ri=g.Xa("Firefox");g.Uj=mb()||g.Xa("iPod");g.Vj=g.Xa("iPad");g.Ti=g.lb();g.Si=g.jb();g.Wj=g.kb()&&!g.nb();g.Jd="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.Id.prototype.next=function(){throw g.Jd;};
g.Id.prototype.cd=function(){return this};var Pd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Eaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.Qd,g.sc);g.h=g.Qd.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.qd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.ua):(c&&g.Ta(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.qa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Faa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.qd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.y)(b,this.qd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Bb=g.ba(6);g.h.X=function(){g.Qd.M.X.call(this);this.clear();this.D.length=0};g.Sd.prototype.set=function(a,b){g.ra(b)?this.C.set(a,g.Nd(b)):this.C.remove(a)};
g.Sd.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Sd.prototype.remove=function(a){this.C.remove(a)};g.v(Td,g.Sd);Td.prototype.set=function(a,b){Td.M.set.call(this,a,Vd(b))};
Td.prototype.F=function(a){a=Td.M.get.call(this,a);if(!g.ra(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Td.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ra(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.Wd,Td);g.Wd.prototype.set=function(a,b,c){if(b=Vd(b)){if(c){if(c<(0,g.Xd)()){g.Wd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Xd)()}g.Wd.M.set.call(this,a,b)};
g.Wd.prototype.F=function(a,b){var c=g.Wd.M.F.call(this,a);if(c)if(!b&&g.Yd(c))g.Wd.prototype.remove.call(this,a);else return c};g.v(g.Zd,g.Wd);g.v(g.$d,Gaa);g.$d.prototype.Bb=g.ba(5);g.$d.prototype.clear=function(){var a=Caa(this.cd(!0)),b=this;(0,g.y)(a,function(a){b.remove(a)})};g.v(g.ae,g.$d);g.h=g.ae.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Bb=g.ba(4);g.h.cd=function(a){var b=0,c=this.C,d=new g.Id;d.next=function(){if(b>=c.length)throw g.Jd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.be,g.ae);g.v(ce,g.ae);var Haa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Xj=!1,Yj="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(Xj=!0,a.description)){Yj=me(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){Xj=!0;Yj="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],Xj=!(!a||!a.enabledPlugin))){Yj=me(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Xj=
!0;Yj=me(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Xj=!0;Yj="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Xj=!0,Yj=me(b.GetVariable("$version"))}catch(c){}})();
g.sca=Xj;g.tca=Yj;g.Rf=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Zj="Microsoft Internet Explorer"==window.navigator.appName;g.oe=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.n("yt.config_",g.oe,void 0);var ye={};var uca=g.q("ytPubsubPubsubInstance")||new g.Qd;g.Qd.prototype.subscribe=g.Qd.prototype.subscribe;g.Qd.prototype.unsubscribeByKey=g.Qd.prototype.qd;g.Qd.prototype.publish=g.Qd.prototype.qa;g.Qd.prototype.clear=g.Qd.prototype.clear;g.n("ytPubsubPubsubInstance",uca,void 0);var Ee=g.q("ytPubsubPubsubSubscribedKeys")||{};g.n("ytPubsubPubsubSubscribedKeys",Ee,void 0);var Ge=g.q("ytPubsubPubsubTopicToKeys")||{};g.n("ytPubsubPubsubTopicToKeys",Ge,void 0);var Fe=g.q("ytPubsubPubsubIsSynchronous")||{};
g.n("ytPubsubPubsubIsSynchronous",Fe,void 0);var Jaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Kaa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Le=null;(0,g.Xd)();var Ue=g.ra(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.ra(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var $e,df;$e={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};df=!1;g.ak=ef;jf.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.jd(a)?a:g.mf(a)):2===this.F&&b?(a=b.call(c,this.C),g.jd(a)?a:g.kf(a)):this};
jf.prototype.getValue=function(){return this.C};
g.id(jf);var vca=0,Paa=g.vj?"webkit":g.uj?"moz":g.H?"ms":g.rj?"o":"",nf=g.q("ytDomDomGetNextId")||function(){return++vca};
g.n("ytDomDomGetNextId",nf,void 0);var Qaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.qf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.qf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.qf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var rf=g.q("ytEventsEventsListeners")||{};g.n("ytEventsEventsListeners",rf,void 0);var tf=g.q("ytEventsEventsCounter")||{count:0};g.n("ytEventsEventsCounter",tf,void 0);g.ea(xf,g.sc);xf.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.Vf);break}};
xf.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.Vf)}g.sc.prototype.X.call(this)};var Raa={enablejsapi:1},Saa={},Taa={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};yf.prototype.clone=function(){var a=new yf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.va(c)?a[b]=g.fb(c):a[b]=c}return a};var Bf={},Af=0;var Uaa,Uf;Uaa={log_event:"events",log_interaction:"interactions"};Uf=Object.create(null);Uf.log_event="GENERIC_EVENT_LOGGING";Uf.log_interaction="INTERACTION_LOGGING";g.Pf={};g.Hf={};g.Nf=0;g.Of=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.n("ytLoggingTransportLogPayloadsQueue_",g.Of,void 0);var If=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.n("ytLoggingTransportTokensToCttTargetIds_",If,void 0);var Qf=g.q("ytLoggingTransportDispatchedStats_")||{};
g.n("ytLoggingTransportDispatchedStats_",Qf,void 0);var Wf=g.q("ytLoggingTransportCapturedTime_")||{};g.n("ytytLoggingTransportCapturedTime_",Wf,void 0);var hg=g.q("ytLoggingLatencyUsageStats_")||{};g.n("ytLoggingLatencyUsageStats_",hg,void 0);var ig=0;var bk,ck;bk=new g.be;g.kg=bk.isAvailable()?new g.Zd(bk):null;ck=new ce;g.jg=ck.isAvailable()?new g.Zd(ck):null;var Yaa=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var dk={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},ek;var fk=g.Wa;fk=fk.toLowerCase();if(-1!=fk.indexOf("android")){var gk=fk.match(/android\D*(\d\.\d)[^;|\)]*[;\)]/);if(gk)ek=(0,window.parseFloat)(gk[1]);else{var hk=fk.match("("+g.$a(dk).join("|")+")");ek=hk?dk[hk[0]]:0}}else ek=void 0;var wca=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],xca=['audio/mp4; codecs="mp4a.40.2"'];var rg={},$aa=0;g.tg.prototype.toString=function(){return this.topic};var yca=g.q("ytPubsub2Pubsub2Instance")||new g.Qd;g.Qd.prototype.subscribe=g.Qd.prototype.subscribe;g.Qd.prototype.unsubscribeByKey=g.Qd.prototype.qd;g.Qd.prototype.publish=g.Qd.prototype.qa;g.Qd.prototype.clear=g.Qd.prototype.clear;g.n("ytPubsub2Pubsub2Instance",yca,void 0);g.ik=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.n("ytPubsub2Pubsub2SubscribedKeys",g.ik,void 0);g.jk=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.n("ytPubsub2Pubsub2TopicToKeys",g.jk,void 0);
g.kk=g.q("ytPubsub2Pubsub2IsAsync")||{};g.n("ytPubsub2Pubsub2IsAsync",g.kk,void 0);g.n("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.ea(yg,g.sg);g.ea(zg,g.sg);var bba=new g.tg("aft-recorded",yg),fba=new g.tg("timing-sent",zg);var Kg=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var Ag=(0,g.Xd)().toString();var dba={vc:!0},ch={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},bh={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",
yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},iba="ap c cver ei srt yt_fss yt_li ba plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
lba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",
video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR"},
hba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),Ug=!1,aba=(0,g.r)(Kg.clearResourceTimings||Kg.webkitClearResourceTimings||Kg.mozClearResourceTimings||Kg.msClearResourceTimings||Kg.oClearResourceTimings||g.ua,Kg);g.ea(jh,g.sc);g.h=jh.prototype;g.h.getId=function(){return this.N};
g.h.Hl=function(a,b){if(!this.ob()){this.ib=a;this.C=a.clone();this.F=this.C.attrs.id||this.F;"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N);this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F);this.C.args.enablejsapi="1";this.C.args.playerapiid=this.N;this.ia||(this.ia=qh(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;var c=this.C.attrs.width;c&&g.lc(this.H,Number(c)||c);(c=this.C.attrs.height)&&g.kc(this.H,Number(c)||c);if(!this.ob()){if(!b&&
!g.ra(this.C.disable.html5)){c=!0;void 0!=this.C.args.deviceHasDisplay&&(c=this.C.args.deviceHasDisplay);if(2.2==ek)var d=!0;else{a:try{var e=g.q("yt.player.utils.videoElement_");e||(e=g.dc("VIDEO"),g.n("yt.player.utils.videoElement_",e,void 0));var f=e;if(f.canPlayType)for(e=c?wca:xca,c=0;c<e.length;c++)if(f.canPlayType(e[c])){d=null;break a}d="fmt.noneavailable"}catch(k){d="html5.missingapi"}d=!d}d=d&&(mh(this)||this.C.assets.js);this.C.disable.html5=!d;d||(this.C.args.html5_unavailable="1")}mba(this)}this.L&&
kh(this)}};
g.h.Nw=function(){return this.ib};
g.h.qj=function(){if(!this.ob()){var a=lh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b){if(this.V=!1,!a.isNotServable||!a.isNotServable(this.C.args.video_id)){ih(this);this.L=!0;a=lh(this);a.addEventListener&&(this.W=ph(this,a,"addEventListener"));a.removeEventListener&&(this.ea=ph(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=ph(this,a,d))}for(var e in this.D)this.W(e,
this.D[e]);kh(this);this.ia&&this.ia(this.api);this.R.qa("onReady",this.api)}}else this.mb=g.ze((0,g.r)(this.qj,this),50)}};
g.h.eC=function(){return this.L};
g.h.Ih=function(a,b){if(!this.ob()){var c=qh(this,b);if(c){if(!g.Qa(this.sb,a)&&!this.D[a]){var d=nba(this,a);this.W&&this.W(a,d)}this.R.subscribe(a,c);"onReady"==a&&this.L&&g.ze(g.u(c,this.api),0)}}};
g.h.zK=function(a,b){if(!this.ob()){var c=qh(this,b);c&&g.Rd(this.R,a,c)}};
g.h.kv=function(a){g.E("a11y-announce",a)};
g.h.hG=function(a){g.E("WATCH_LATER_VIDEO_ADDED",a)};
g.h.iG=function(a){g.E("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Ex=function(){return this.ma||(lh(this)?"html5":null)};
g.h.lx=function(){return this.bb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.Je(this.C.assets.js);window.spf.script.ignore(b,a)}g.Be(this.mb);this.V=!1};
g.h.X=function(){nh(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.re(b)}this.Ha=null;for(var a in this.D)g.m[this.D[a]]=null;this.ib=this.C=this.api=null;delete this.na;delete this.H;g.sc.prototype.X.call(this)};g.sh={};g.rh="player_uid_"+(1E9*Math.random()>>>0);var zh;g.yh=Bg();zh=0;g.xh=null;g.h=g.Bh.prototype;g.h.LK=function(){this.Si()||this.init()};
g.h.enable=function(){this.C=1;(0,g.y)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.LK,this),this.subscribe("dispose-"+a,this.dispose,this),g.B("PAGE_NAME")==a&&g.Ch(this))},this)};
g.h.init=function(){g.Re(this.F);this.C=2;this.L&&this.L()};
g.h.Si=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Re(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.re(a)}};
g.h.subscribe=function(a,b,c){a=g.D(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.He(this.G);this.G=[]};var Dh=g.q("yt.modules.registry_")||{};g.n("yt.modules.registry_",Dh,void 0);g.Gh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.n("yt.msgs_",g.Gh,void 0);g.n("yt.abuse.botguardInitialized",g.q("yt.abuse.botguardInitialized")||Me,void 0);g.n("yt.abuse.invokeBotguard",g.q("yt.abuse.invokeBotguard")||g.Ne,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",g.q("yt.abuse.dclkstatus.checkDclkStatus")||Te,void 0);g.n("yt.player.exports.navigate",g.q("yt.player.exports.navigate")||g.Qh,void 0);g.n("yt.util.activity.init",g.q("yt.util.activity.init")||g.Zf,void 0);g.n("yt.util.activity.getTimeSinceActive",g.q("yt.util.activity.getTimeSinceActive")||g.$f,void 0);
g.n("yt.util.activity.setTimestamp",g.q("yt.util.activity.setTimestamp")||Yf,void 0);var Uh=null;g.lk=window.performance&&window.performance.memory;g.Ii={};var bi=0,ci=0,Yh=[],ai=[],Vh=0,Zh={},$h={},Wh=new g.Gd(wba,1E3);var yba=["server_prefetched_vast","vmap"];var fi,ki;g.ji=null;ki="";var mi=null,pi=[];var ti,Oi,Ni,vi,ui,Eba,Hba,Fba,Gba,Ji;vi=0;ui=0;Eba=[900,60,"waiting"];Hba=[500,99,"waiting"];Fba=[300,60,"waiting"];Gba=[400,99,"waiting"];Ji=[300,101,"done"];var dj=!1;window.yt=window.yt||{};g.n("yt.setConfig",g.pe,void 0);g.n("yt.pushConfigArray",qe,void 0);g.n("yt.getConfig",g.B,void 0);g.n("yt.config.set",g.pe,void 0);g.n("yt.config.pushArray",qe,void 0);g.n("yt.config.get",g.B,void 0);g.n("yt.hasMsg",g.Ih,void 0);g.n("yt.setMsg",Hh,void 0);g.n("yt.setGoogMsg",Jh,void 0);g.n("yt.msgs.has",g.Ih,void 0);g.n("yt.msgs.set",Hh,void 0);g.n("yt.msgs.setGoog",Jh,void 0);g.n("yt.pubsub.publish",g.E,void 0);g.n("yt.pubsub.subscribe",g.D,void 0);
g.n("ytcsi.tick",g.Jg,void 0);g.v(gj,g.Bh);
gj.prototype.enable=function(){window.onload=Cba;window.onunload=Dba;window.onerror=Iaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",ri),window.addEventListener("spfhistory",si),window.addEventListener("spfrequest",xi),window.addEventListener("spfpartprocess",Bi),window.addEventListener("spfpartdone",Ci),window.addEventListener("spfprocess",Di),window.addEventListener("spfdone",Ki),window.addEventListener("spferror",Li),window.addEventListener("spfreload",
Mi),window.addEventListener("spfjsbeforeunload",hj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Jba),this.subscribe("dispose",Kba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
gj.prototype.init=function(){gj.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.B("PAGEFRAME_JS")){var b=g.B("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
a=g.B("JS_COMMON_MODULE");var d=g.B("JS_PAGE_MODULES");d||(d=[a]);a=g.B("JS_DELAY_LOAD",0);0<a?(g.Be(this.D),this.D=g.ze(function(){b&&g.Ke(b,c);window.spf.script.require(d)},a)):(b&&g.Ke(b,c),window.spf.script.require(d));
g.n("yt.abuse.botguardInitialized",Me,void 0);g.n("yt.abuse.invokeBotguard",g.Ne,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",Te,void 0);g.n("yt.player.exports.navigate",g.Qh,void 0);g.n("yt.util.activity.init",g.Zf,void 0);g.n("yt.util.activity.getTimeSinceActive",g.$f,void 0);g.n("yt.util.activity.setTimestamp",Yf,void 0);li(g.q("ytplayer.config"));g.q("ytspf.enabled")&&Aba();Yg();gba();gh(!0);g.Ig(!1);g.B("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.ue("service_worker_enabled")?aca():Zba())};
gj.prototype.dispose=function(){g.Be(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.Ce(fi);if(a=g.hi())a.removeEventListener("onReady",gi),a.removeEventListener("onStateChange",gi);gh(!1);(a=aj())&&g.wf(a);gj.M.dispose.call(this)};
gj.prototype.disable=function(){gj.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",ri),window.removeEventListener("spfhistory",si),window.removeEventListener("spfrequest",xi),window.removeEventListener("spfpartprocess",Bi),window.removeEventListener("spfpartdone",Ci),window.removeEventListener("spfprocess",Di),window.removeEventListener("spfdone",Ki),window.removeEventListener("spferror",Li),window.removeEventListener("spfreload",Mi),window.removeEventListener("spfjsbeforeunload",
hj));window.onload=null;window.onunload=null;window.onerror=null};
g.Fh(new gj);})(_yt_www);


}
/*
     FILE ARCHIVED ON 01:18:38 Nov 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:26:31 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 192.068
  exclusion.robots: 0.079
  exclusion.robots.policy: 0.07
  cdx.remote: 0.056
  esindex: 0.01
  LoadShardBlock: 138.218 (3)
  PetaboxLoader3.datanode: 151.647 (4)
  load_resource: 47.009
  PetaboxLoader3.resolve: 30.153
*/