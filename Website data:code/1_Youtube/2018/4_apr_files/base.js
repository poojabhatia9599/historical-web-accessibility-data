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

var _yt_www={};(function(g){var window=this;var da,ia,ha,ja,baa,oa,qa,daa,eaa,Wa,qb,naa,ub,paa,uc,qaa,raa,vc,yc,taa,Ic,Kc,Lc,Pc,uaa,Sc,Zc,Yc,waa,bd,cd,dd,ed,xaa,fd,gd,kd,yaa,ld,sd,Ad,yd,vd,Aaa,Dd,Bd,Cd,Gd,zaa,Baa,Pd,Qd,Ud,Caa,Daa,Eaa,$d,be,Gaa,ge,he,ie,Haa,le,pe,re,se,te,ue,Fe,Ie,Ke,Kaa,Me,Ve,Naa,nf,hf,Oaa,Paa,Qaa,xf,yf,Raa,Df,Bf,zf,Ff,Mf,Wf,Xf,Yaa,cg,sg,Zaa,yg,zg,$aa,Fg,Gg,Ng,Mg,aba,Rg,Zg,ch,fh,hh,bba,eba,uh,vh,wh,xh,fba,Jh,Lh,Kh,Nh,Mh,Oh,Ph,Qh,iba,Uh,Dh,Eh,zh,Zh,lba,mba,Fh,Wh,Bh,Ah,Ch,ci,Hh,Rh,Ih,oba,Vh,Th,ei,gi,hi,ji,rba,ii,ki,sba,ni,fi,
oi,tba,li,mi,uba,vi,vba,Bba,Aba,zba,Ci,yba,wba,xba,Cba,Dba,Fba,Gba,Ri,Mi,Oi,Ti,Hba,Ui,Wi,Iba,Jba,Xi,Yi,cj,gj,hj,ij,mj,nj,oj,Qba,Rba,dj,fj,bj,Pba,ej,sj,uj,rj,vj,tj,Sba,Wba,Tba,Zba,Vba,Uba,Xba,Yba,aca,yj,$ba,wj,bca,dca,fca,eca,cca,zj,Aj,Bj,fa,ea,aaa,la,Dj,Ca,caa;g.ca=function(a){return function(){return g.aa[a].apply(this,arguments)}};
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
qa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ra=function(a){return void 0!==a};
g.sa=function(a){return"string"==typeof a};
g.ta=function(a){return"boolean"==typeof a};
g.ua=function(a){return"number"==typeof a};
g.p=function(a,b,c){a=a.split(".");c=c||g.n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ra(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.r=function(a,b){for(var c=a.split("."),d=b||g.n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.va=function(){};
g.wa=function(a){a.Ac=void 0;a.getInstance=function(){return a.Ac?a.Ac:a.Ac=new a}};
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
g.w=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Rv=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
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
g.Sa=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Ta=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ua=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Xa=function(a,b){for(var c=0,d=(0,g.Va)(String(a)).split("."),e=(0,g.Va)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Wa(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||Wa(0==l[2].length,0==m[2].length)||Wa(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Wa=function(a,b){return a<b?-1:a>b?1:0};
g.Ya=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.ab=function(a){return-1!=g.$a.indexOf(a)};
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
g.mb=function(){return g.ab("Trident")||g.ab("MSIE")};
g.ob=function(){return g.ab("Safari")&&!(g.nb()||g.ab("Coast")||g.ab("Opera")||g.ab("Edge")||g.ab("Silk")||g.ab("Android"))};
g.nb=function(){return(g.ab("Chrome")||g.ab("CriOS"))&&!g.ab("Edge")};
g.pb=function(){return g.ab("Android")&&!(g.nb()||g.ab("Firefox")||g.ab("Opera")||g.ab("Silk"))};
qb=function(){return g.ab("iPhone")&&!g.ab("iPod")&&!g.ab("iPad")};
g.rb=function(){return qb()||g.ab("iPad")||g.ab("iPod")};
g.sb=function(a){g.sb[" "](a);return a};
g.tb=function(a,b){try{return g.sb(a[b]),!0}catch(c){}return!1};
naa=function(a,b){var c=maa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
ub=function(){var a=g.n.document;return a?a.documentMode:void 0};
g.wb=function(a){return naa(a,function(){return 0<=g.Xa(g.vb,a)})};
g.yb=function(a){return Number(g.xb)>=a};
g.Ab=function(){this.C="";this.F=g.zb};
g.Bb=function(a){var b=new g.Ab;b.C=a;return b};
g.Db=function(){this.F="";this.D=Cb};
g.Eb=function(a){if(a instanceof g.Db&&a.constructor===g.Db&&a.D===Cb)return a.F;g.xa(a);return"type_error:SafeUrl"};
g.Hb=function(a){if(a instanceof g.Db)return a;a=a.Sd?a.Tc():String(a);Fb.test(a)||(a="about:invalid#zClosurez");return g.Gb(a)};
g.Ib=function(a){if(a instanceof g.Db)return a;a=a.Sd?a.Tc():String(a);Fb.test(a)||(a="about:invalid#zClosurez");return g.Gb(a)};
g.Gb=function(a){var b=new g.Db;b.F=a;return b};
g.Kb=function(){this.C="";this.F=g.Jb};
g.Lb=function(a){var b=new g.Kb;b.C=a;return b};
g.Nb=function(){this.C="";this.F=g.Mb};
g.Ob=function(a){var b=new g.Nb;b.C=a;return b};
g.Qb=function(){this.F="";this.G=Pb;this.D=null};
g.Rb=function(a){if(a instanceof g.Qb&&a.constructor===g.Qb&&a.G===Pb)return a.F;g.xa(a);return"type_error:SafeHtml"};
g.Tb=function(a){if(a instanceof g.Qb)return a;var b=null;a.Cl&&(b=a.C());a=g.Ua(a.Sd?a.Tc():String(a));return g.Sb(a,b)};
g.Sb=function(a,b){var c=new g.Qb;c.F=a;c.D=b;return c};
g.Ub=function(a,b){var c=b instanceof g.Db?b:g.Ib(b);a.href=g.Eb(c)};
g.Vb=function(a,b){var c=b instanceof g.Db?b:g.Ib(b);a.href=g.Eb(c)};
g.Wb=function(a,b){return g.Sb(b,null)};
g.Xb=function(a,b){this.x=g.ra(a)?a:0;this.y=g.ra(b)?b:0};
g.Yb=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Zb=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.$b=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.sa(a)?window.document.getElementById(a):a};
g.ac=function(a){var b=window.document;return g.sa(a)?b.getElementById(a):a};
g.cc=function(a,b){g.bb(b,function(b,d){b&&b.Sd&&(b=b.Tc());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:bc.hasOwnProperty(d)?a.setAttribute(bc[d],b):g.Oa(d,"aria-")||g.Oa(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.ec=function(a){return g.dc(a||window)};
g.dc=function(a){a=a.document;a=g.fc(a)?a.documentElement:a.body;return new g.$b(a.clientWidth,a.clientHeight)};
g.hc=function(a,b,c){return g.gc(window.document,arguments)};
g.gc=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ua(d.name),'"');if(d.type){c.push(' type="',g.Ua(d.type),'"');var e={};g.lb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.sa(d)?c.className=d:g.ya(d)?c.className=d.join(" "):g.cc(c,d));2<b.length&&g.ic(a,c,b,2);return c};
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
qaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;v=q=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var q=l^d&(f^l);var v=1518500249}else q=d^f^l,v=1859775393;else 60>c?(q=d&f|l&(d|f),v=2400959708):(q=d^f^l,v=3395469782);q=((a<<5|a>>>27)&4294967295)+q+m+v+b[c]&4294967295;m=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=q}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==q)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64;for(;d<c;)if(f[q++]=a[d++],v++,64==q)for(q=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64}
function d(){var a=[],d=8*v;56>q?c(l,56-q):c(l,64-(q-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,v;a();return{reset:a,update:c,digest:d,pw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
raa=function(a,b,c){var d=[],e=[];if(1==(g.ya(c)?2:1))return e=[b,a],(0,g.y)(d,function(a){e.push(a)}),vc(e.join(" "));
var f=[],k=[];(0,g.y)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ja(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.y)(d,function(a){e.push(a)});
a=vc(e.join(" "));a=[c,a];g.Ja(k)||a.push(k.join(""));return a.join("_")};
vc=function(a){var b=qaa();b.update(a);return b.pw().toLowerCase()};
g.wc=function(a){this.C=a||{cookie:""}};
g.xc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Va)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
yc=function(a){var b=uc(String(g.n.location.href)),c=g.n.__OVERRIDE_SID;null==c&&(c=(new g.wc(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.n.__SAPISID:g.n.__APISID,null==b&&(b=(new g.wc(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.n.location.href);return d&&b&&c?[c,raa(uc(d),b,a||null)].join(" "):null}return null};
g.zc=function(){this.Gc=this.Gc;this.Vb=this.Vb};
g.Cc=function(a,b){g.Ac(a,g.u(g.Bc,b))};
g.Ac=function(a,b){a.Gc?g.ra(void 0)?b.call(void 0):b():(a.Vb||(a.Vb=[]),a.Vb.push(g.ra(void 0)?(0,g.t)(b,void 0):b))};
g.Bc=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Dc=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.bt=!0};
g.Ec=function(a){var b=g.r("window.location.href");if(g.sa(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.n.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.Fc=function(a,b){g.Dc.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.yc=null;a&&this.init(a,b)};
g.Hc=function(a){return!(!a||!a[Gc])};
taa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.kh=e;this.key=++saa;this.Bg=this.Zh=!1};
Ic=function(a){a.Bg=!0;a.listener=null;a.C=null;a.src=null;a.kh=null};
g.Jc=function(a){this.src=a;this.listeners={};this.C=0};
Kc=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.La(a.listeners[c],b);d&&(Ic(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Lc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Bg&&f.listener==b&&f.capture==!!c&&f.kh==d)return e}return-1};
g.Nc=function(a,b,c,d,e){if(d&&d.once)return g.Mc(a,b,c,d,e);if(g.ya(b)){for(var f=0;f<b.length;f++)g.Nc(a,b[f],c,d,e);return null}c=g.Oc(c);return g.Hc(a)?a.O(b,c,g.Ba(d)?!!d.capture:!!d,e):Pc(a,b,c,!1,d,e)};
Pc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ba(e)?!!e.capture:!!e,l=g.Qc(a);l||(a[Rc]=l=new g.Jc(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=uaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)vaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Sc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Tc++;return c};
uaa=function(){var a=waa,b=Uc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Mc=function(a,b,c,d,e){if(g.ya(b)){for(var f=0;f<b.length;f++)g.Mc(a,b[f],c,d,e);return null}c=g.Oc(c);return g.Hc(a)?a.Qe(b,c,g.Ba(d)?!!d.capture:!!d,e):Pc(a,b,c,!0,d,e)};
g.Vc=function(a,b,c,d,e){if(g.ya(b))for(var f=0;f<b.length;f++)g.Vc(a,b[f],c,d,e);else d=g.Ba(d)?!!d.capture:!!d,c=g.Oc(c),g.Hc(a)?a.Va(b,c,d,e):a&&(a=g.Qc(a))&&(b=a.sf(b,c,d,e))&&g.Wc(b)};
g.Wc=function(a){if(g.ua(a)||!a||a.Bg)return!1;var b=a.src;if(g.Hc(b))return Kc(b.yd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Sc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Tc--;(c=g.Qc(b))?(Kc(c,a),0==c.C&&(c.src=null,b[Rc]=null)):Ic(a);return!0};
Sc=function(a){return a in Xc?Xc[a]:Xc[a]="on"+a};
Zc=function(a,b,c,d){var e=!0;if(a=g.Qc(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Bg&&(f=Yc(f,d),e=e&&!1!==f)}return e};
Yc=function(a,b){var c=a.listener,d=a.kh||a.src;a.Zh&&g.Wc(a);return c.call(d,b)};
waa=function(a,b){if(a.Bg)return!0;if(!Uc){var c=b||g.r("window.event"),d=new g.Fc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Zc(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Zc(c[k],f,!1,d),e=e&&l}return e}return Yc(a,new g.Fc(b,
this))};
g.Qc=function(a){a=a[Rc];return a instanceof g.Jc?a:null};
g.Oc=function(a){if(g.Aa(a))return a;a[$c]||(a[$c]=function(b){return a.handleEvent(b)});
return a[$c]};
g.ad=function(){g.zc.call(this);this.yd=new g.Jc(this);this.Av=this;this.lm=null};
bd=function(a,b,c,d){b=a.yd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Bg&&k.capture==c){var l=k.listener,m=k.kh||k.src;k.Zh&&Kc(a.yd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.bt};
cd=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
dd=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
ed=function(a){g.n.setTimeout(function(){throw a;},0)};
xaa=function(){var a=g.n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.ab("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.mb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ra(c.next)){c=c.next;var a=c.Rn;c.Rn=null;a()}};
return function(a){d.next={Rn:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.n.setTimeout(a,0)}};
fd=function(){this.F=this.C=null};
gd=function(){this.next=this.scope=this.lc=null};
kd=function(a,b){hd||yaa();id||(hd(),id=!0);jd.add(a,b)};
yaa=function(){if(g.n.Promise&&g.n.Promise.resolve){var a=g.n.Promise.resolve(void 0);hd=function(){a.then(ld)}}else hd=function(){var a=ld;
!g.Aa(g.n.setImmediate)||g.n.Window&&g.n.Window.prototype&&!g.ab("Edge")&&g.n.Window.prototype.setImmediate==g.n.setImmediate?(md||(md=xaa()),md(a)):g.n.setImmediate(a)}};
ld=function(){for(var a;a=jd.remove();){try{a.lc.call(a.scope)}catch(b){ed(b)}dd(nd,a)}id=!1};
g.od=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.pd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.rd=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.va)try{var c=this;a.call(b,function(a){g.qd(c,2,a)},function(a){g.qd(c,3,a)})}catch(d){g.qd(this,3,d)}};
sd=function(){this.next=this.context=this.F=this.G=this.C=null;this.D=!1};
g.ud=function(a,b,c){var d=td.get();d.G=a;d.F=b;d.context=c;return d};
g.wd=function(a,b,c){vd(a,b,c,null)||kd(g.u(b,a))};
g.xd=function(a){return new g.rd(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],g.wd(m,g.u(f,l),k);
else b(e)})};
g.zd=function(a,b){return yd(a,null,b,void 0)};
Ad=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Ad(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Bd(c),Cd(c,e,3,b)))}a.D=null}else g.qd(a,3,b)};
g.Ed=function(a,b){a.F||2!=a.C&&3!=a.C||Dd(a);a.G?a.G.next=b:a.F=b;a.G=b};
yd=function(a,b,c,d){var e=g.ud(null,null,null);e.C=new g.rd(function(a,k){e.G=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){k(q)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.ra(e)&&b instanceof g.Fd?k(b):a(e)}catch(q){k(q)}}:k});
e.C.D=a;g.Ed(a,e);return e.C};
g.qd=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,vd(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,Dd(a),3!=b||c instanceof g.Fd||zaa(a,c)))};
vd=function(a,b,c,d){if(a instanceof g.rd)return g.Ed(a,g.ud(b||g.va,c||null,d)),!0;if(g.pd(a))return a.then(b,c,d),!0;if(g.Ba(a))try{var e=a.then;if(g.Aa(e))return Aaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
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
g.Kd=function(a,b,c){g.zc.call(this);this.C=a;this.D=b||0;this.F=c;this.xc=(0,g.t)(this.bp,this)};
g.Od=function(){if(!Ld){Ld={};g.Md={};Nd={};for(var a=0;65>a;a++)Ld[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),g.Md[Ld[a]]=a,Nd[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(g.Md["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
Baa=function(){this.F=-1};
Pd=function(){this.F=64;this.C=[];this.L=[];this.R=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
Qd=function(a,b,c){c||(c=0);var d=a.R;if(g.sa(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):(f=c^k^l,
q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.Rd=function(a){if(a.classList)return a.classList;a=a.className;return g.sa(a)&&a.match(/\S+/g)||[]};
g.A=function(a,b){return a.classList?a.classList.contains(b):g.Ia(g.Rd(a),b)};
g.Sd=function(){};
Ud=function(a){if(a instanceof g.Sd)return a;if("function"==typeof a.ed)return a.ed(!1);if(g.za(a)){var b=0,c=new g.Sd;c.next=function(){for(;;){if(b>=a.length)throw g.Td;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Vd=function(a,b,c){if(g.za(a))try{(0,g.y)(a,b,c)}catch(d){if(d!==g.Td)throw d;}else{a=Ud(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Td)throw d;}}};
Caa=function(a){if(g.za(a))return g.Ma(a);a=Ud(a);var b=[];g.Vd(a,function(a){b.push(a)});
return b};
g.Xd=function(a,b){this.F={};this.C=[];this.Xe=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.Wd(this,a)};
Daa=function(a,b){return a===b};
g.Zd=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.Yd(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.Yd(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.Wd=function(a,b){if(b instanceof g.Xd)for(var c=b.Ic(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.Yd=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ae=function(a){var b=[];$d(new Eaa,a,b);return b.join("")};
Eaa=function(){};
$d=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),$d(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),be(d,c),c.push(":"),$d(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":be(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
be=function(a,b){b.push('"',a.replace(Faa,function(a){var b=ce[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),ce[a]=b);return b}),'"')};
g.de=function(a){g.zc.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.ee=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ga(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.td(b)}};
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
re=function(a){return"_"+(0,window.encodeURIComponent)(a).replace(/[.!~*'()%]/g,function(a){return Iaa[a]})};
se=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
te=function(a){return a.C.XMLDocument.documentElement};
ue=function(a,b){this.F=a;this.C=b+"::"};
g.ve=function(a){var b=new g.ne;return b.isAvailable()?a?new ue(b,a):b:null};
g.we=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.xe=function(a){return a.match(Jaa)};
g.ye=function(a){return a?(0,window.decodeURI)(a):a};
g.ze=function(a){return g.ye(g.xe(a)[3]||null)};
g.Ae=function(a){a=g.xe(a);return g.we(null,null,null,null,a[5],a[6],a[7])};
g.Be=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.Ce=function(a,b,c){if(g.ya(b))for(var d=0;d<b.length;d++)g.Ce(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Sa(b)))};
g.De=function(a){var b=[],c;for(c in a)g.Ce(c,a[c],b);return b.join("&")};
g.Ee=function(a,b){var c=g.De(b);return g.Be(a,c)};
Fe=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.He=function(a){Fe(g.Ge,arguments)};
Ie=function(a,b){var c=g.D(a,void 0);c?c.push(b):g.He(a,[b])};
g.D=function(a,b){return a in g.Ge?g.Ge[a]:b};
Ke=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Je(b)}}:a};
g.Je=function(a,b,c,d,e){var f=g.r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.D("ERRORS",[]),f.push([a,b,c,d,e]),g.He("ERRORS",f))};
g.Le=function(a){g.Je(a,"WARNING",void 0,void 0,void 0)};
Kaa=function(a,b,c,d,e){var f=!1,k;if((k=(k=g.Ge.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.sa(a)?f=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.Je(e))};
g.Ne=function(a){return!!Me(a)};
g.Oe=function(a){return Number(Me(a)||0)};
Me=function(a){return g.D("EXPERIMENT_FLAGS",{})[a]};
g.E=function(a,b){return a?a.dataset?a.dataset[g.Pe(b)]:a.getAttribute("data-"+b):null};
g.Pe=function(a){return Qe[a]||(Qe[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Re=function(a,b){g.Aa(a)&&(a=Ke(a));return window.setTimeout(a,b)};
g.Se=function(a,b){g.Aa(a)&&(a=Ke(a));return window.setInterval(a,b)};
g.Te=function(a){window.clearTimeout(a)};
g.Ue=function(a){window.clearInterval(a)};
g.$e=function(a,b,c){var d=Ve();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Xe[e]&&b.apply(c||window,d)};
try{Ye[a]?k():g.Re(k,0)}catch(l){g.Je(l)}},c);
Xe[e]=!0;Ze[a]||(Ze[a]=[]);Ze[a].push(e);return e}return 0};
g.af=function(a){var b=Ve();b&&(g.ua(a)?a=[a]:g.sa(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.y)(a,function(a){b.unsubscribeByKey(a);delete Xe[a]}))};
g.F=function(a,b){var c=Ve();return c?c.publish.apply(c,arguments):!1};
g.bf=function(a,b){Ye[a]=!0;var c=Ve();c=c?c.publish.apply(c,arguments):!1;Ye[a]=!1;return c};
Ve=function(){return g.r("ytPubsubPubsubInstance")};
g.df=function(a,b){var c=g.cf(a);window.spf.script.load(a,c,b)};
g.cf=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Laa,""),b=b.replace(Maa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.ff=function(){return null!=g.ef};
g.gf=function(){return g.ef?g.ef.invoke():null};
Naa=function(){};
g.jf=function(a,b){return hf(a,0,b)};
g.kf=function(a,b){return hf(a,1,b)};
g.mf=function(a){for(var b=0,c=a.length;b<c;b++)g.lf(a[b])};
nf=function(){};
g.of=function(){return!!g.r("yt.scheduler.instance")};
hf=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Re(a,c||0)};
g.lf=function(a){if(!(0,window.isNaN)(a)){var b=g.r("yt.scheduler.instance.cancelJob");b?b(a):g.Te(a)}};
g.pf=function(){return(0,window.parseInt)(g.D("DCLKSTAT",0),10)};
Oaa=function(){if(!qf)return null;var a=qf();return"open"in a?a:null};
g.sf=function(a){switch(g.rf(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.rf=function(a){return a&&"status"in a?a.status:-1};
g.tf=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Ta(e[0]||"");e=g.Ta(e[1]||"");f in b?g.ya(b[f])?g.Na(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.vf=function(a,b){return g.uf(a,b||{},!0)};
g.uf=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.tf(e[1]||"");for(var f in b)if(c||!g.db(e,f))e[f]=b[f];return g.Ee(a,e)+d};
Paa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.xe(a)[1]||null,e=g.ze(a);d&&e?(d=c,c=g.xe(a),d=g.xe(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.ze(c)==e&&(Number(g.xe(c)[4]||null)||null)==(Number(g.xe(a)[4]||null)||null):!0;for(var f in wf){if((e=d=g.D(wf[f]))&&!(e=c)){e=f;var k=g.D("CORS_HEADER_WHITELIST")||{},l=g.ze(a);e=l?(k=k[l])?g.Ia(k,e):!1:!0}e&&(b[f]=d)}return b};
Qaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=xf(a,b);var d=yf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.Te(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.n;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Ya&&b.Ya.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.xr&&0<b.timeout&&(f=g.Re(function(){e||(e=!0,g.Te(f),b.xr.call(b.context||g.n))},b.timeout))}else g.H(a,b)};
g.H=function(a,b){var c=b.format||"JSON";a=xf(a,b);var d=yf(a,b),e=!1,f,k=zf(a,function(a){if(!e){e=!0;f&&g.Te(f);var d=g.sf(a),k=null;if(d||400<=a.status&&500>a.status)k=Raa(c,a,b.nb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.n;d?b.onSuccess&&b.onSuccess.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Ya&&b.Ya.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.gc&&0<b.timeout&&(f=g.Re(function(){e||(e=!0,k.abort(),g.Te(f),b.gc.call(b.context||g.n,k))},b.timeout));
return k};
xf=function(a,b){b.uB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.D("XSRF_FIELD_NAME",void 0),d=b.sa;d&&(d[c]&&delete d[c],a=g.vf(a,d));return a};
yf=function(a,b){var c=g.D("XSRF_FIELD_NAME",void 0),d=g.D("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ha,k=g.D("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Hw||g.ze(a)&&!b.withCredentials&&g.ze(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ha&&b.ha[k]||(f||(f={}),f[c]=d);f&&g.sa(e)&&(e=g.tf(e),g.lb(e,f),e=b.As&&"JSON"==b.As?JSON.stringify(e):g.De(e));f=e||f&&!g.fb(f);!Af&&f&&"POST"!=b.method&&(Af=!0,g.Je(Error("AJAX request with postData should use POST")));
return e};
Raa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Bf(b):null)d={},(0,g.y)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.Cf(a)})}c&&Df(d);
return d};
Df=function(a){if(g.Ba(a))for(var b in a)"html_content"==b||g.Pa(b,"_html")?a[b]=g.Wb(g.Bb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Df(a[b])};
Bf=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Cf=function(a){var b="";(0,g.y)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Ef=function(a,b){b.method="POST";b.ha||(b.ha={});return g.H(a,b)};
zf=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Ke(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Oaa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof window.FormData));if(e=Paa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
Ff=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.Gf=function(a){var b=new Ff;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.Hf=function(a){var b=new Ff;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.Jf=function(a){var b=a.__yt_uid_key;b||(b=If(),a.__yt_uid_key=b);return b};
g.Kf=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Saa+"VisibilityState";if(b in a)return a[b]};
g.Lf=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Taa||(this[b]=a[b]);this.scale=a.scale;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=
null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
Mf=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Nf=function(a){g.ra(a.C)||Mf(a);return a.C};
g.Of=function(a){g.ra(a.F)||Mf(a);return a.F};
g.Qf=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.eb(Pf,function(e){var f=g.ta(e[4])&&e[4]==!!d,k=g.Ba(e[4])&&g.Ba(d)&&g.ib(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.I=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Qf(a,b,c,d);if(e)return e;e=++Rf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.Lf(d);if(!g.mc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.Lf(b);
b.currentTarget=a;return c.call(a,b)};
k=Ke(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),Sf()||g.ta(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);Pf[e]=[a,b,c,k,d];return e};
g.J=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.y)(a,function(a){if(a in Pf){var b=Pf[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Sf()||g.ta(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Pf[a]}}))};
g.Tf=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.I(a,b,function(){g.J(e);c.apply(a,arguments)},d)};
g.Uf=function(a){for(var b in Pf)Pf[b][0]==a&&g.J(b)};
g.Vf=function(a){this.xc=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.I(window,"mousemove",(0,g.t)(this.W,this));this.N=g.Se((0,g.t)(this.R,this),25)};
Wf=function(){g.zc.call(this);this.C=[]};
Xf=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.jb(Uaa);this.assets=a.assets||{};this.attrs=a.attrs||g.jb(Vaa);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Yf=function(a){a instanceof Xf||(a=new Xf(a));return a};
g.ag=function(a,b,c,d,e,f){f=f||{};f.name=c||g.D("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Zf||(c=a.stacktrace,d=a.columnNumber,a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params)),a=g.Ec(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),$f[a.message]||0<=c.indexOf("/YouTubeCenter.js")||
0<=c.indexOf("/mytube.js")))){b={sa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":f.name},ha:{url:g.D("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ha.stack=c);for(var k in f)b.ha["client."+k]=f[k];if(k=g.D("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ha[l]=k[l];g.H(g.D("ECATCHER_REPORT_HOST","")+"/error_204",b);$f[a.message]=!0;Zf++}};
g.gg=function(a,b){if(a.ki){var c=a.ki;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);bg[a.ki.token]=d;c=cg(a.endpoint,a.ki.token)}else c=cg(a.endpoint);c.push(a.payload);dg[a.endpoint]=new b;c.length>=(g.Oe("web_logging_max_batch")||20)?g.eg():g.fg()};
g.eg=function(){g.Te(g.hg);if(!g.fb(g.ig)){for(var a in g.ig){var b=dg[a];if(b){var c=void 0,d=a,e=b,f=Waa[d],k=jg[d]||{};jg[d]=k;b=Math.round(g.kg());for(c in g.ig[d]){var l=g.lg(e);l[f]=cg(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;var m=bg[c];if(m)a:{var q=l,v=c;if(m.videoId)var z="VIDEO";else if(m.playlistId)z="PLAYLIST";else break a;q.credentialTransferTokenTargetId=m;q.context=q.context||{};q.context.user=q.context.user||{};q.context.user.credentialTransferTokens=
[{token:v,scope:z}]}delete bg[c];m=l;m.requestTimeMs=b;(z=g.D("EVENT_ID",void 0))&&g.Ne("enable_gel_web_client_event_id")&&(q=(g.D("BATCH_CLIENT_COUNTER",void 0)||0)+1,q>Xaa&&(q=1),g.He("BATCH_CLIENT_COUNTER",q),m.serializedClientEventId={serializedEventId:z,clientCounter:q});g.mg(e,d,l,{retry:!0})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.ig[a]}}g.fb(g.ig)||
g.fg()}};
Yaa=function(){var a=[];for(e in g.ig){var b=jg[e]||{};jg[e]=b;for(var c in g.ig[e]){var d=cg(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.kg());for(var f in jg)b=jg[f],b.eventType=f in ng?ng[f]:"UNKNOWN_TYPE",c=og[f],b.metricIntervalMs=c?e-c:e-g.pg,a.push(b),og[f]=e,delete jg[f];return a};
g.fg=function(){g.Te(g.hg);g.hg=g.Re(g.eg,g.D("LOGGING_BATCH_TIMEOUT",g.qg||1E4))};
cg=function(a,b){b=void 0===b?"":b;g.ig[a]=g.ig[a]||{};g.ig[a][b]=g.ig[a][b]||[];return g.ig[a][b]};
g.tg=function(a){var b=void 0===a?{}:a;a=void 0===b.vB?!0:b.vB;b=void 0===b.fJ?!1:b.fJ;if(null==g.r("_lact",window)){var c=(0,window.parseInt)(g.D("LACT"),10);c=(0,window.isFinite)(c)?(0,g.B)()-Math.max(c,0):-1;g.p("_lact",c,window);g.p("_fact",c,window);-1==c&&g.rg();g.I(window.document,"keydown",g.rg);g.I(window.document,"keyup",g.rg);g.I(window.document,"mousedown",g.rg);g.I(window.document,"mouseup",g.rg);a&&(b?g.I(window,"touchmove",function(){sg("touchmove",200)},{passive:!0}):(g.I(window,"resize",
function(){sg("resize",200)}),g.I(window,"scroll",function(){sg("scroll",200)})));
new g.Vf(function(){sg("mouse",100)});
g.I(window.document,"touchstart",g.rg,{passive:!0});g.I(window.document,"touchend",g.rg,{passive:!0})}};
sg=function(a,b){ug[a]||(ug[a]=!0,g.kf(function(){g.rg();ug[a]=!1},b))};
g.rg=function(){null==g.r("_lact",window)&&g.tg();var a=(0,g.B)();g.p("_lact",a,window);-1==g.r("_fact",window)&&g.p("_fact",a,window);(a=g.r("ytglobal.ytUtilActivityCallback_"))&&a()};
g.vg=function(){var a=g.r("_lact",window);return null==a?-1:Math.max((0,g.B)()-a,0)};
g.xg=function(a,b,c,d){var e=g.wg,f={};f.eventTimeMs=Math.round(c||g.kg());f[a]=b;f.context={lastActivityMs:String(c?-1:g.vg())};g.gg({endpoint:"log_event",payload:f,ki:d},e)};
Zaa=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
yg=function(a){var b={"X-Goog-Visitor-Id":g.D("VISITOR_DATA","")},c;a?c="Bearer "+g.r("gapi.auth.getToken")().JV:c=yc([]);c&&(b.Authorization=c,b["X-Goog-AuthUser"]=g.D("SESSION_INDEX",0));return b};
zg=function(a){a=Object.assign({},a);delete a.Authorization;var b=yc();if(b){var c=new Pd;c.update(g.D("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();g.za(b);g.Od();c=Nd;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],k=e+1<b.length,l=k?b[e+1]:0,m=e+2<b.length,q=m?b[e+2]:0,v=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[v],c[f],c[l],c[q])}b=d.join("");a.hash=b}return a};
g.Bg=function(a,b,c,d){g.Ag.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Cg=function(a,b,c){g.Ag.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.Dg=function(a){var b;(b=g.ve(a))||(a=new pe(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.je(a):null;this.F=window.document.domain||window.location.hostname};
$aa=function(a,b,c,d){if(d)return null;d=Eg.get("nextId",!0)||1;var e=Eg.get("requests",!0)||{};e[d]={method:a,request:b,authState:zg(c),requestTime:Math.round(g.kg())};Eg.set("nextId",d+1,86400,!0);Eg.set("requests",e,86400,!0);return d};
Fg=function(a){var b=Eg.get("requests",!0)||{};delete b[a];Eg.set("requests",b,86400,!0)};
Gg=function(a){var b=Eg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.kg())-d.requestTime)){var e=d.authState,f=zg(yg(!1));g.ib(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.kg())),g.mg(a,d.method,e,{}));delete b[c]}}Eg.set("requests",b,86400,!0)}};
g.wg=function(a){var b=this;this.C=a||{innertubeApiKey:g.D("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.D("INNERTUBE_API_VERSION",void 0),xB:g.D("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),zB:g.D("INNERTUBE_CONTEXT_HL",void 0),yB:g.D("INNERTUBE_CONTEXT_GL",void 0),AB:g.D("INNERTUBE_HOST_OVERRIDE",void 0)||"",BB:!!g.D("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.jf(function(){Gg(b)},5E3)};
g.lg=function(a){a=a.C;a={client:{hl:a.zB,gl:a.yB,clientName:a.xB,clientVersion:a.innertubeContextClientVersion}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.D("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.D("DELEGATED_SESSION_ID")});return{context:a}};
g.mg=function(a,b,c,d){!g.D("VISITOR_DATA")&&.01>Math.random()&&g.Je(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ha:c,As:"JSON",gc:function(){d.gc()},
xr:d.gc,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
sj:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
wr:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=a.C.BB||!1,k=yg(f);Object.assign(e.headers,k);var l="",m=a.C.AB;m&&(l=m);e.headers.Authorization&&!l&&(e.headers["x-origin"]=window.location.origin);l=""+l+Zaa(a.C.innertubeApiVersion,b,c)+"?alt=json&key="+a.C.innertubeApiKey;var q;if(d.retry&&g.Ne("retry_web_logging_batches")&&(q=$aa(b,c,k,f))){var v=e.onSuccess,z=e.sj;e.onSuccess=function(a,b){Fg(q);v(a,b)};
c.sj=function(a,b){Fg(q);z(a,b)}}try{g.Ne("use_fetch_for_op_xhr")?Qaa(l,e):g.Ef(l,e)}catch(G){if("InvalidAccessError"==G)q&&(Fg(q),q=0),g.Je(Error("An extension is blocking network request."),"WARNING");
else throw G;}q&&g.jf(function(){Gg(a)},5E3)};
g.Hg=function(a,b,c){g.xg(a,b,c,void 0)};
g.Ig=function(){g.Ne("log_web_meta")&&Yaa().forEach(function(a){g.Hg("delayedEventMetricCaptured",a)})};
g.Jg=function(a){this.C=a};
g.Kg=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.Kg(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.Lg=function(a,b,c){(0,g.y)(b,function(b){g.xg("visualElementHidden",{csn:a,ve:g.Kg(b),eventType:c?16:8})})};
Ng=function(a,b){var c=Object.keys(a).join("");Mg("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Hg("latencyActionInfo",a))};
Mg=function(a){Og[a]=Og[a]||{count:0};var b=Og[a];b.count++;b.time=g.kg();Pg||(Pg=g.jf(aba,5E3));return 10<b.count?(11==b.count&&g.ag(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
aba=function(){var a=g.kg(),b;for(b in Og)6E4<a-Og[b].time&&delete Og[b];Pg=0};
Rg=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.B)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Qg)for(a=1,b=0;b<Qg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Qg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Wg=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Sg==a)return;Sg=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.vg()>b)&&"visible"==g.Kf()){b=-1;g.Tg&&(b=Math.round(g.kg()-g.Tg));var c=String;var d=g.r("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.B)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.Ug,index:String(Vg),lastEventDeltaMs:String(b),trigger:a};g.xg("foregroundHeartbeat",
a);g.p("_fact",-1,window);Vg++;g.Tg=g.kg()}};
g.Xg=function(){var a=g.D("ROOT_VE_TYPE",void 0);return a?new g.Jg({veType:a}):null};
g.Yg=function(){var a=g.D("client-screen-nonce")||g.D("EVENT_ID");return a?a:null};
Zg=function(){var a=g.Xg(),b=g.Yg();b&&a&&g.Lg(b,[a],!0)};
g.$g=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Ke(d):null;this.H=e?Ke(e):null;this.G=[];this.C=this.F=0};
g.ah=function(a){g.lf(a.F);a.F=g.kf((0,g.t)(a.init,a))};
g.dh=function(a){a.name in bh&&ch(a.name);bh[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.y)(a.deps,function(b){if(!(b in bh))throw Error("Module "+b+" required by "+a.name);bh[b].reqs.push(a.name)});
a.enable()};
ch=function(a){if(a in bh){var b=bh[a];(0,g.y)(b.reqs,function(a){ch(a)});
try{b.disable()}catch(c){}delete bh[a]}};
fh=function(a){Fe(g.eh,arguments)};
g.gh=function(a){return a in g.eh};
hh=function(a){Fe(g.eh,arguments)};
g.ih=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.$a,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Eb(g.Hb(a)),"about:invalid#zClosurez"===a?a="":(a=g.Rb(g.Tb(a)),a=g.Sa(g.ae(a))),g.Qa(a)||(a=g.hc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.lc(a).body.appendChild(a))):e?zf(a,b,"POST",e,d):g.D("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?zf(a,b,"GET","",d):bba(a,b))};
bba=function(a,b){var c=new window.Image,d=""+cba++;jh[d]=c;c.onload=c.onerror=function(){b&&jh[d]&&b();delete jh[d]};
c.src=a};
g.kh=function(a,b){a=a||"";var c=a.match(dba);window.spf.style.load(a,c?c[1]:"",b)};
g.lh=function(a,b,c){var d=g.D("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.ze(window.location.href);e&&d.push(e);e=g.ze(a);if(g.Ia(d,e)||!e&&g.Oa(a,"/"))if(g.Ne("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.Ub(d,a),a=d.href),a&&(a=g.Ae(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Yg();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Ya(a).toString(36),b=b?g.De(b):"",g.Bg(a,b,c||5))):(c="ST-"+g.Ya(a).toString(36),b=b?g.De(b):"",
g.Bg(c,b,5))}};
g.mh=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.Vb(d.location,g.Ee(a,b)+c)};
g.nh=function(a,b){b&&g.lh(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.mh(a)};
g.oh=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.D("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.lh(a,b);if(c)return!1;g.nh(a);return!0};
g.ph=function(a,b){this.version=a;this.args=b};
g.qh=function(a,b){this.topic=a;this.C=b};
g.sh=function(a,b){var c=g.rh();c&&c.publish.call(c,a.toString(),a,b)};
g.rh=function(){return g.r("ytPubsub2Pubsub2Instance")};
eba=function(a){if(th.getEntriesByType){var b=th.getEntriesByType("paint");if(b=g.Ga(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Aa(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
uh=function(){var a=g.D("TIMING_TICK_EXPIRATION");a||(a={},g.He("TIMING_TICK_EXPIRATION",a));return a};
vh=function(){var a=uh(),b;for(b in a)g.lf(a[b]);g.He("TIMING_TICK_EXPIRATION",{})};
wh=function(a,b){g.ph.call(this,1,arguments)};
xh=function(a,b){g.ph.call(this,1,arguments)};
fba=function(){yh=!1;zh();if("cold"==Ah().yt_lt){var a=Bh(),b=Ch(),c;for(c in a)g.Oa(c,"_")||"tick_"+c in b||Dh(c,a[c]);a=Ah();for(var d in a)"info_"+d in b||Eh(d,a[d])}Fh(!0);g.Gh(!1)};
Jh=function(a){Hh(a);gba();Ih(!1,a);a||(g.D("TIMING_ACTION")&&g.He("PREVIOUS_ACTION",g.D("TIMING_ACTION")),g.He("TIMING_ACTION",""))};
Lh=function(a,b,c){b||"_"==a[0]||Kh(a,c);var d=Bh(c),e=b||g.kg();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=uh();var f=e[a];f&&(g.lf(f),e[a]=0);Dh(a,b,c)||g.Gh(!1,c);return d[a]};
Kh=function(a,b){th.mark&&(g.Oa(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),th.mark(a))};
Nh=function(a,b){Mh("yt_sts",a,void 0);Lh("_start",b,void 0)};
Mh=function(a,b,c){Ah(c)[a]=b;Eh(a,b,c)};
Oh=function(a){var b=Ah(void 0);return a in b};
Ph=function(a){var b=Bh(a);if(b.aft)return b.aft;a=g.D((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
Qh=function(a,b){Lh("nreqs",a.requestStart,b);Lh("nress",a.responseStart,b);Lh("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(Lh("nrs",a.redirectStart,b),Lh("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(Lh("ndnss",a.domainLookupStart,b),Lh("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(Lh("ntcps",a.connectStart,b),Lh("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(Lh("nstcps",a.secureConnectionStart,
b),Lh("ntcpe",a.connectEnd,b))};
g.Gh=function(a,b){if(!Rh(b)){var c=g.D((b||"")+"TIMING_ACTION",void 0),d=Bh(b);if(g.r("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Ph(b)))if(g.Ne("tighter_critical_section")&&!Sh&&(g.sh(hba,new wh(Math.round(c-d._start),b)),Sh=!0),a||b)Th(b);else{c=!0;var e=g.D("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Th(b)}}};
iba=function(){switch(g.Kf()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Uh=function(a){if(!Rh(void 0)){if(!g.Ne("send_empty_timing")){var b=g.D("CSI_SERVICE_NAME","youtube");if(!g.D("TIMING_ACTION",void 0)||!b)return}Lh("aa",void 0,void 0);Mh("ap",1,void 0);Mh("yt_fss",a,void 0);!g.Ne("enable_csi_abandonment_info")||Oh("yt_lt")||zh();Th(void 0)}};
Dh=function(a,b,c){Ch(c)["tick_"+a]=b;c||b||g.kg();return Vh()?(c=Wh(c),"_start"==a?Mg("baseline_"+c)||g.Hg("latencyActionBaselined",{clientActionNonce:c},b):Mg("tick_"+a+"_"+c)||g.Hg("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Eh=function(a,b,c){Ch(c)["info_"+a]=b;if(Vh())if(a in Xh){var d=Xh[a];g.Ia(jba,d)&&(b=!!b);if(Vh()){a={};d=d.split(".");for(var e=a,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=b;b=Wh(c);Ng(a,b)}}else g.Ia(kba,a)||g.Je(Error("Unknown label "+a+" logged with GEL CSI."))};
zh=function(){var a=g.D("TIMING_INFO",{});for(b in a)Mh(b,a[b]);Mh("is_nav",1);(a=g.Yg())&&Mh("csn",a);(a=g.D("PREVIOUS_ACTION",void 0))&&Mh("pa",a);var b=Ah();b.p=g.D("CLIENT_PROTOCOL")||"unknown";b.t=g.D("CLIENT_TRANSPORT")||"unknown";Mh("yt_vis",iba());if("cold"==b.yt_lt){a=th.timing||{};a.navigationStart&&(Lh("srt",a.responseStart),1!=b.prerender&&Nh("n",a.navigationStart));b=eba(a);0<b&&Lh("fpt",b);Qh(a);th.getEntriesByType&&lba();a=[];if(window.document.querySelector&&th&&th.getEntriesByName)for(var c in Yh)b=
Yh[c],mba(c,b)&&a.push(b);a.length&&Mh("rc",a.join(","))}Vh()&&(c={},c.actionType=nba[g.D("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Wh(void 0),Ng(c,a))};
Zh=function(a){return Math.round(th.timing.navigationStart+a)};
lba=function(){var a=window.location.protocol,b=th.getEntriesByType("resource");b=(0,g.ai)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20180401000034/https://fonts.gstatic.com/s/")});
(b=(0,g.bi)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Lh("wffs",Zh(b.startTime)),Lh("wffe",Zh(b.responseEnd)))};
mba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=th.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,Lh("rsf_"+b,d+Math.round(c.fetchStart)),Lh("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(Oh("rc")||Mh("rc",""),0===c.transferSize))?!0:!1:!1};
Fh=function(a){g.p("ytglobal.timingready_",a,void 0)};
Wh=function(a){var b=ci(a).nonce;b||(b=Rg(),ci(a).nonce=b);return b};
Bh=function(a){return ci(a).tick};
Ah=function(a){return ci(a).info};
Ch=function(a){a=ci(a);"gel"in a||(a.gel={});return a.gel};
ci=function(a){return g.r("ytcsi."+(a||"")+"data_")||Hh(a)};
Hh=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
Rh=function(a){return!!g.r("yt.timing."+(a||"")+"pingSent_")};
Ih=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
oba=function(a){var b=Bh(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Ah(a).yt_pvis};
Vh=function(){return yh||g.Ne("csi_on_gel")};
Th=function(a){vh();if(!Vh()){var b=Bh(a),c=Ah(a),d=b._start;for(k in b)if(g.Oa(k,"_")&&g.ya(b[k])){var e=k.slice(1);if(e in pba){var f=(0,g.di)(b[k],function(a){return Math.round(a-d)});
c["all_"+e]=f.join()}delete b[k]}var k=!!c.ap;if(e=g.r("ytglobal.timingReportbuilder_")){if(b=e(b,c,a))ei(b,k),Jh(a)}else{var l=g.D("CSI_SERVICE_NAME","youtube");e={v:2,s:l,action:g.D((a||"")+"TIMING_ACTION",void 0)};f=Mh.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var m=window.location.protocol+g.r("ytplayer.config.assets.js");(m=th.getEntriesByName?th.getEntriesByName(m)[0]:null)?c.h5jse=Math.round(c.h5jse-m.responseEnd):delete c.h5jse}b.aft=Ph(a);oba(a)&&"youtube"==l&&(Mh("yt_lt","hot_bg",a),
l=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-l));for(var q in c)"_"!=q.charAt(0)&&(e[q]=c[q]);b.ps=g.kg();c={};q=[];for(var v in b)"_"!=v.charAt(0)&&(l=Math.round(b[v]-d),c[v]=l,q.push(v+"."+l));e.rt=q.join(",");(b=g.r("ytdebug.logTiming"))&&b(e,c);ei(e,k,a);g.sh(qba,new xh(c.aft+(f||0),a))}}};
ei=function(a,b,c){if(g.Ne("debug_csi_data")){var d=g.r("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?";g.Ne("redirect_csi_204_to_qoe")&&(a="/api/stats/qoe?",d+="&redirect_csi_204_to_qoe=true");a+=d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||g.ih(a,
void 0,void 0,void 0,f)}catch(k){g.ih(a,void 0,void 0,void 0,f)}}else g.ih(a);Ih(!0,c)};
gi=function(a,b){g.zc.call(this);this.H=this.oa=a;this.N=b;this.L=!1;this.api={};this.aa=this.W=null;this.R=new g.de;g.Cc(this,this.R);this.D={};this.la=this.ia=this.F=this.mb=this.C=null;this.V=!1;this.G=this.J=null;this.Sa={};this.ub=["onReady"];this.cb=null;this.qb=window.NaN;this.Y={};fi(this);this.Rh("WATCH_LATER_VIDEO_ADDED",this.AG.bind(this));this.Rh("WATCH_LATER_VIDEO_REMOVED",this.BG.bind(this));this.Rh("onAdAnnounce",this.zv.bind(this));this.yb=new Wf(this);g.Cc(this,this.yb)};
hi=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
ji=function(a){var b=!0,c=ii(a);c&&a.C&&(a=a.C,b=g.E(c,"version")==a.assets.js);return b&&!!g.r("yt.player.Application.create")};
rba=function(a){if(!a.ob()&&!a.V){var b=ji(a);if(b&&"html5"==(ii(a)?"html5":null))a.la="html5",a.L||ki(a);else if(li(a),a.la="html5",b&&a.G)a.oa.appendChild(a.G),ki(a);else{a.C.loaded=!0;var c=!1;a.J=function(){c=!0;var b=a.C.clone();g.r("yt.player.Application.create")(a.oa,b);ki(a)};
a.V=!0;b?a.J():(g.df(a.C.assets.js,a.J),g.kh(a.C.assets.css),mi(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
ii=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
ki=function(a){if(!a.ob()){var b=ii(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||sba(a)):a.qb=g.Re(function(){ki(a)},50)}};
sba=function(a){fi(a);a.L=!0;var b=ii(a);b.addEventListener&&(a.W=ni(a,b,"addEventListener"));b.removeEventListener&&(a.aa=ni(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=ni(a,b,e))}for(var f in a.D)a.W(f,a.D[f]);hi(a);a.ia&&a.ia(a.api);a.R.na("onReady",a.api)};
ni=function(a,b,c){var d=b[c];return function(){try{return a.cb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.cb=e,g.Le(e))}}};
fi=function(a){a.L=!1;if(a.aa)for(var b in a.D)a.aa(b,a.D[b]);for(var c in a.Y)g.Te((0,window.parseInt)(c,10));a.Y={};a.W=null;a.aa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Rh.bind(a);a.api.removeEventListener=a.RK.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.wx.bind(a);a.api.getPlayerType=a.Ox.bind(a);a.api.getCurrentVideoConfig=a.Yw.bind(a);a.api.loadNewVideoConfig=a.Vl.bind(a);a.api.isReady=a.vC.bind(a)};
oi=function(a,b){var c=b;if("string"==typeof b){if(a.Sa[b])return a.Sa[b];c=function(){var a=g.r(b);a&&a.apply(g.n,arguments)};
a.Sa[b]=c}return c?c:null};
tba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.n[c]=function(c){var d=a.C&&a.C.args&&a.C.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.R.na(b,c);else{var f=g.Re(function(){a.ob()||(a.R.na(b,c),g.gb(a.Y,String(f)))},0);
g.hb(a.Y,String(f),!0)}};
return c};
li=function(a){(0,g.pi)("dcp");a.cancel();fi(a);a.la=null;a.C&&(a.C.loaded=!1);var b=ii(a);b&&(ji(a)||!mi(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.jc(a.oa)};
mi=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.si=function(a,b){a=g.sa(a)?g.ac(a):a;var c=g.qi+"_"+g.Da(a),d=g.ri[c];if(d)return d.Vl(b),d.api;d=new gi(a,c);g.ri[c]=d;g.F("player-added",d.api);g.Ac(d,g.u(uba,d));g.Re(function(){d.Vl(b)},0);
return d.api};
uba=function(a){delete g.ri[a.N]};
g.ti=function(a){if(!a)return null;var b=g.qi+"_"+g.Da(a),c=g.ri[b];c||(c=new gi(a,b),g.ri[b]=c);return c.api};
g.ui=function(a){return g.ti(window.document.getElementById(a))};
g.wi=function(a,b){var c={};c.key=a;c.value=b;return vi().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.xi=function(a){return vi().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
vi=function(){return yi?window.Promise.resolve(yi):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))yi=b,a(yi);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),vi()};
c.onupgradeneeded=vba})};
vba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Bba=function(){zi++;var a=g.ec(),b=new g.pc(0,0,a.width,a.height);Ai("vph",a.height);Ai("vpw",a.width);(0,g.pi)("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;Bi.start();for(var f=0;f<c;f++){var k=a[f];if(Ci(k,b)){var l=wba(k);l.then(xba);d.push(l);Ei.push(l);k.loadTime||(e=!1)}}e&&Ai("yt_eil",1);(0,g.pi)("vpcc");b=g.xd(d).then(yba);g.zd(b,zba);b.then(Aba);Ei.push(b);return b};
Aba=function(){Bi.stop()};
zba=function(){(0,g.pi)("vpr")};
Ci=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.Jf(c);if(e in Fi)return!0;if(e in Gi)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Gi[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Gi[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Fi[d[c]]=!0;return!0};
yba=function(a){var b=g.ec();b=new g.pc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Ci(a[d].tB,b)&&c<f&&(c=f)}return c};
wba=function(a){var b=zi;return new g.rd(function(c,d){var e={tB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){zi!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},Hi.push(a))})};
xba=function(a){Bi.start();a=a.time;Ii<a&&(Ii=a,(0,g.pi)("lim",a))};
Cba=function(){(0,g.pi)("vptl",Ii);(0,g.pi)("vpl",Ii)};
Dba=function(){Ei.forEach(function(a){a.cancel()});
Ii=Ei.length=0;Fi={};Gi={};Hi.forEach(function(a){a.slt=void 0});
Hi.length=0};
g.Ji=function(a,b){g.ih("/gen_204?"+a,b)};
Fba=function(a){if(null==a)return[];var b=[];Eba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Ki=function(){return g.A(g.x("page-container"),"remote-connected")};
Gba=function(){Li=g.Se(Mi,5E3);var a=g.Ni();a?(a.addEventListener("onReady",Mi),a.addEventListener("onStateChange",Mi)):Oi("unable to init PP monitor")};
Ri=function(a){for(var b in g.ri){var c=g.ri[b];c&&c.cancel()}if(a=a||null){b=g.Ni();var d=!0;c=g.Pi;g.Pi=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Qi="",g.si("player-api",a)):b.playVideo();a=g.Yf(a);a.loaded=!0}Mi();g.p("ytplayer.config",a,void 0)};
g.Ni=function(){return g.ui("player-api")};
Mi=function(){var a=g.Ni();if(a){var b=g.x("player");b=!b||g.A(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.D("PAGE_NAME"),e=g.Ki();!c||d||e||(Oi("PP playing off watch (paused)"),a.pauseVideo());b&&d?Oi("PP off-screen on watch"):b||d||Oi("PP !off-screen off watch")}};
Oi=function(a){var b=g.D("PAGE_NAME");b&&(a+="("+[b,Qi,g.r("_spf_state.nav-counter")].join()+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.Je(Error(a),"WARNING"))};
Ti=function(){(0,g.pi)("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){(0,g.pi)("cpt");g.F("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?((0,g.pi)("cpt"),g.F("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){(0,g.pi)("cpt");
g.F("on_cpt_tick",(new Date).getTime())},0);
Hba();g.D("CSI_VIEWPORT")&&(Si=Bba(),Si.then(function(a){(0,g.pi)("vpl",a);Si=null},function(){}))};
Hba=function(){Ui("init");var a=g.D("PAGE_NAME",void 0);a&&Ui("init-"+a)};
Ui=function(a){g.of()?Vi.push(g.kf(g.u(g.bf,a),0)):g.F(a)};
Wi=function(){g.mf(Vi);Vi.length=0;Dba();Si&&(Si.cancel(),Si=null);var a=g.D("PAGE_NAME",void 0);a&&g.bf("dispose-"+a);g.bf("dispose")};
Iba=function(){Ti()};
Jba=function(){g.D("TIMING_REPORT_ON_UNLOAD")&&g.Gh(!0);Uh("u");g.Wg("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Zg();g.Ig();g.eg();Wi();g.bf("pageunload")};
Xi=function(){g.rg()};
Yi=function(){window.yt_spf_loaded_history=!0;g.rg()};
cj=function(){Zi=1;$i=aj=0;g.D("TIMING_REPORT_ON_UNLOAD")&&g.Gh(!0);g.Ne("warm_load_nav_start_web")?(Uh("n"),Jh(),Fh(!1),g.He("TIMING_AFT_KEYS",[]),Mh("yt_lt","warm"),g.He("TIMING_ACTION",""),g.He("TIMING_WAIT",[]),vh(),Nh("n")):(Uh("n"),Jh(),Nh("n"));Kh("nr");bj(Kba);Zg();g.bf("navigate")};
gj=function(a){a=a.detail.part||a.detail.partial;(0,g.pi)("nc"+aj);++aj;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.pi)("bc");else{var b=1==Zi;Zi=2;b?(bj(Lba),dj()):bj(Mba);if(b=a&&a.data&&a.data.swfcfg)ej(a.timing,b.args),fj(b)}};
hj=function(){(0,g.pi)("np"+$i);++$i};
ij=function(a){a=a.detail.response;var b=1==Zi;Zi=3;b&&(bj(Nba),dj());if(b=a.data&&a.data.swfcfg)ej(a.timing,b.args),fj(b)};
mj=function(a){(0,g.pi)("nd");a=a.detail.response;g.jj=a.cacheKey;a=a.timing;var b=window._spf_state;g.kj.navigationCount=b&&b["nav-counter"]||0;g.Ne("warm_load_nav_start_web")?(0,g.pi)("srt",a.responseStart):(Nh("ne",a.responseStart),Ai("srt",Math.max(0,a.responseStart-a.navigationStart)));Ai("yt_lt",a.spfCached?"hot":"warm");(0,g.pi)("pfs",a.fetchStart);(0,g.pi)("pfrs",a.responseStart);"redirectStart"in a&&Oba(a);bj(lj);window.document.getElementById("content").style.height="";Ti();Zi=0};
nj=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Je(a)};
oj=function(a){g.Ji(g.De({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Qba=function(){Pba();window.yt_spf_loaded_history=!1};
Rba=function(){};
dj=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Wi();a=g.D("PREVIOUS_ACTION");for(var b in g.Ge)delete g.Ge[b];g.He("PREVIOUS_ACTION",a);g.He("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);if((b=g.Ni())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Qi=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),Qi="recovered"):Qi="missing2"}else Qi="missing";Mi()};
fj=function(a){"cfg"in Bh(void 0)||(0,g.pi)("cfg");Ri(a)};
bj=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.lf(pj);pj=g.kf(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Te(qj);qj=g.Re(function(){b.className=e},c)},0)};
Pba=function(){var a=lj[0]+50;g.Te(qj);qj=g.Re(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
ej=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Fba(b));g.D("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Ji(g.De(c)))};
sj=function(){return"granted"!=window.Notification.permission?window.Promise.resolve():rj().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})["catch"](function(){})};
uj=function(){tj({type:"notifications_register",data:g.D("ID_TOKEN")})};
rj=function(){return window.navigator.serviceWorker.getRegistration(String(Me("service_worker_scope")||""))};
vj=function(a){return!(!a||!a.pushManager)};
tj=function(a){rj().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Sba=function(){if(!g.D("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(Me("service_worker_push_force_notification_prompt_tag")||"");return a?g.xi("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
Wba=function(){var a=void 0===a?!1:a;return(window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification?rj().then(vj):window.Promise.resolve(!1)).then(function(b){if(!b)return window.Promise.resolve();b=sj().then(function(){tj({type:"notifications_check_registration",data:g.D("ID_TOKEN")})});
return"default"!=window.Notification.permission?b:b.then(function(){return Tba(a)}).then(function(a){if(a)return Uba(),Vba().then(function(){})})})};
Tba=function(a){return g.D("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.D("LOGGED_IN",void 0)&&(void 0===a?0:a)?Sba().then(function(a){if(a)return!0;a=[Xba(),Yba()];g.D("LOGGED_IN",void 0)||a.push(Zba());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
Zba=function(){var a=g.Oe("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.xi("WatchCount").then(function(b){return b>=a})};
Vba=function(){var a=arguments;g.Ne("service_worker_push_prompt_modal_enable")&&$ba();return window.Notification.requestPermission().then(function(a){wj();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return sj().then(function(){g.wi("NotificationsDisabled",!1);uj();return window.Promise.resolve(!0)});
"denied"==a&&uj();return window.Promise.resolve(!1)})["catch"](function(){wj();
return window.Promise.reject.apply(window.Promise,a instanceof Array?a:baa(g.ka(a)))})};
Uba=function(){g.xi("PromptCount").then(function(a){return g.wi("PromptCount",a+1)}).then(function(){return g.wi("PromptTime",(0,g.B)())}).then(function(){var a=String(Me("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.xi("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.wi("PromptTags",JSON.stringify(c))})})};
Xba=function(){return-1==g.Oe("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.xi("PromptCount").then(function(a){a||(a=0);return window.Promise.resolve(a<g.Oe("service_worker_push_prompt_cap"))})};
Yba=function(){var a=g.Oe("service_worker_push_prompt_delay_microseconds");return a?g.xi("PromptTime").then(function(b){return window.Promise.resolve((0,g.B)()-a>(b||0))}):window.Promise.resolve(!0)};
aca=function(){xj||wj()};
yj=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
$ba=function(){var a=g.x("yt-push-prompt-modal-bg");xj=g.Ne("service_worker_push_prompt_modal_ignore_click");a?yj(a):(a=g.hc("div",{id:"yt-push-prompt-modal-bg"}),yj(a),window.document.body.appendChild(a),g.Tf(window.document,"click",aca))};
wj=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.kc(a)};
bca=function(a){return vj(a)?Wba():window.Promise.resolve()};
dca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(cca)})};
fca=function(){var a="/sw.js",b=g.D("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=zj(a);g.Ne("service_worker_push_enabled")&&a.then(eca).then(bca)};
eca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
cca=function(a){a&&zj("/sw.js?0",a.scope)};
zj=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(Me("service_worker_scope")||"")||"/"})};
Aj=function(){g.$g.call(this,"www/base");this.D=0};
Bj=function(a){(a=a.detail.name)&&ch(a)};
g.aa=[];fa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;aaa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)Dj=Object.setPrototypeOf;else{var Ej;a:{var gca={a:!0},Fj={};try{Fj.__proto__=gca;Ej=Fj.a;break a}catch(a){}Ej=!1}Dj=Ej?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=Dj;
oa("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
var hca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)qa(d,e)&&(a[e]=d[e])}return a};
oa("Object.assign",function(a){return a||hca});
var ica=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=la(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
oa("Reflect.construct",function(){return ica});
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
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(m){this.G(m);return}"function"==typeof b?this.la(b,a):this.L(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.L=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.C)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.C);this.C=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.F){for(var a=this.F,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.F=null}};
var f=new c;b.prototype.V=function(a){var b=this.H();a.bi(b.resolve,b.reject)};
b.prototype.la=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(q){c.reject(q)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(W){f(W)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.bi(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.bi=function(a,b){function c(){switch(d.C){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?f.F(c):this.F.push(function(){f.F(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.ka(a),f=e.next();!f.done;f=e.next())d(f.value).bi(b,c)})};
b.all=function(a){var c=g.ka(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).bi(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
oa("WeakMap",function(a){function b(a){this.gb=(f+=Math.random()+1).toString();if(a){da();ia();a=g.ka(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){qa(a,e)||fa(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(q){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!qa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.gb]=b;return this};
b.prototype.get=function(a){return qa(a,e)?a[e][this.gb]:void 0};
b.prototype.has=function(a){return qa(a,e)&&qa(a[e],this.gb)};
b.prototype["delete"]=function(a){return qa(a,e)&&qa(a[e],this.gb)?delete a[e][this.gb]:!1};
return b});
oa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return ja(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&qa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,kc:l}}return{id:c,list:d,index:-1,kc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.ka(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.ka([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(z){return!1}}())return a;
da();ia();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.kc?c.kc.value=b:(c.kc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.kc),this.F.previous.next=c.kc,this.F.previous=c.kc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.kc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.kc.previous.next=a.kc.next,a.kc.next.previous=a.kc.previous,a.kc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).kc};
e.prototype.get=function(a){return(a=d(this,a).kc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
oa("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.ka(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.ka([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
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
oa("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!(0,window.isNaN)(a)&&window.Infinity!==a&&-window.Infinity!==a}});
g.Gj=g.Gj||{};g.n=this;Ca="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.B=Date.now||function(){return+new Date};g.w(g.Ea,Error);g.Ea.prototype.name="CustomError";g.Ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.sa(a))return g.sa(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.jca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.sa(a))return g.sa(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.ai=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.sa(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.di=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.sa(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.bi=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.y)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Hj=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Ij=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Va=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.Jj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var Kj=g.n.navigator;if(Kj){var Lj=Kj.userAgent;if(Lj){g.$a=Lj;break a}}g.$a=""};var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.sb[" "]=g.va;var Tj,maa,Xj;g.Mj=g.ab("Opera");g.C=g.mb();g.Nj=g.ab("Edge");g.Oj=g.Nj||g.C;g.Pj=g.ab("Gecko")&&!(-1!=g.$a.toLowerCase().indexOf("webkit")&&!g.ab("Edge"))&&!(g.ab("Trident")||g.ab("MSIE"))&&!g.ab("Edge");g.Qj=-1!=g.$a.toLowerCase().indexOf("webkit")&&!g.ab("Edge");g.Rj=g.ab("Macintosh");g.Sj=g.ab("Windows");g.kca=g.ab("Linux")||g.ab("CrOS");g.lca=g.ab("Android");g.mca=qb();g.nca=g.ab("iPad");g.oca=g.ab("iPod");g.pca=g.rb();
a:{var Uj="",Vj=function(){var a=g.$a;if(g.Pj)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Nj)return/Edge\/([\d\.]+)/.exec(a);if(g.C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Qj)return/WebKit\/(\S+)/.exec(a);if(g.Mj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Vj&&(Uj=Vj?Vj[1]:"");if(g.C){var Wj=ub();if(null!=Wj&&Wj>(0,window.parseFloat)(Uj)){Tj=String(Wj);break a}}Tj=Uj}g.vb=Tj;maa={};var Yj=g.n.document;Xj=Yj&&g.C?ub()||("CSS1Compat"==Yj.compatMode?(0,window.parseInt)(g.vb,10):5):void 0;g.xb=Xj;var oaa;oaa=!g.C||g.yb(9);g.qca=!g.Pj&&!g.C||g.C&&g.yb(9)||g.Pj&&g.wb("1.9.1");g.Zj=g.C&&!g.wb("9");g.rca=g.C||g.Mj||g.Qj;g.Ab.prototype.Sd=!0;g.Ab.prototype.Tc=function(){return this.C};
g.Ab.prototype.toString=function(){return"Const{"+this.C+"}"};
g.zb={};g.Bb("");g.sca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.tca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.ak=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");g.Db.prototype.Sd=!0;g.Db.prototype.Tc=function(){return this.F};
g.Db.prototype.Cl=!0;g.Db.prototype.C=function(){return 1};
var Fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Cb={};g.Gb("about:blank");g.Kb.prototype.Sd=!0;g.Jb={};g.Kb.prototype.Tc=function(){return this.C};
g.bk=g.Lb("");g.ck=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.uca=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Nb.prototype.Sd=!0;g.Mb={};g.Nb.prototype.Tc=function(){return this.C};
g.vca=g.Ob("");g.Qb.prototype.Cl=!0;g.Qb.prototype.C=function(){return this.D};
g.Qb.prototype.Sd=!0;g.Qb.prototype.Tc=function(){return this.F};
var Pb={};g.Sb("<!DOCTYPE html>",0);g.dk=g.Sb("",0);g.ek=g.Sb("<br>",0);g.h=g.Xb.prototype;g.h.clone=function(){return new g.Xb(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Xb&&g.Yb(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.Xb?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.ua(b)&&(this.y+=b));return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.$b.prototype;g.h.clone=function(){return new g.$b(this.width,this.height)};
g.h.Lv=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Lv()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.width*=a;this.height*=c;return this};var bc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.fk=g.nc(null);g.wca=g.oc(function(){return-1!=g.$a.indexOf("Google Web Preview")||1E-4>Math.random()});g.gk=window.document;g.hk=window;g.h=g.pc.prototype;g.h.clone=function(){return new g.pc(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Xb?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.Xb?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.ua(b)&&(this.top+=b));return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.ik=g.Pj?"MozUserSelect":g.Qj||g.Nj?"WebkitUserSelect":null;g.xca=Object.prototype.hasOwnProperty;g.jk=g.tc(window);g.kk=g.jk&&window.parent||window;g.lk=(new Date).getTime();g.h=g.wc.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ra(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.B)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Va)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.ra(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Ic=function(){return g.xc(this).keys};
g.h.Eb=g.ca(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Kb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.Md=g.ca(3);g.h.clear=function(){for(var a=g.xc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Ag=new g.wc("undefined"==typeof window.document?null:window.document);g.Ag.F=3950;g.zc.prototype.Gc=!1;g.zc.prototype.ob=function(){return this.Gc};
g.zc.prototype.dispose=function(){this.Gc||(this.Gc=!0,this.X())};
g.zc.prototype.X=function(){if(this.Vb)for(;this.Vb.length;)this.Vb.shift()()};g.Dc.prototype.stopPropagation=function(){this.F=!0};
g.Dc.prototype.preventDefault=function(){this.bt=!1};var Uc,zca,vaa;g.yca=!g.C||g.yb(9);Uc=!g.C||g.yb(9);zca=g.C&&!g.wb("9");vaa=function(){if(!g.n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.n.addEventListener("test",g.va,b);g.n.removeEventListener("test",g.va,b);return a}();g.mk=g.Qj?"webkitTransitionEnd":g.Mj?"otransitionend":"transitionend";g.w(g.Fc,g.Dc);var Aca={2:"touch",3:"pen",4:"mouse"};
g.Fc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Pj&&(g.tb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Rj?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.sa(a.pointerType)?a.pointerType:Aca[a.pointerType]||"";this.state=a.state;this.yc=a;a.defaultPrevented&&
this.preventDefault()};
g.Fc.prototype.stopPropagation=function(){g.Fc.M.stopPropagation.call(this);this.yc.stopPropagation?this.yc.stopPropagation():this.yc.cancelBubble=!0};
g.Fc.prototype.preventDefault=function(){g.Fc.M.preventDefault.call(this);var a=this.yc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,zca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Gc="closure_listenable_"+(1E6*Math.random()|0),saa=0;g.h=g.Jc.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Lc(a,b,d,e);-1<k?(b=a[k],c||(b.Zh=!1)):(b=new taa(b,this.src,f,!!d,e),b.Zh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Lc(e,b,c,d);return-1<b?(Ic(e[b]),g.Ka(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Ic(d[e]);delete this.listeners[c];this.C--}return b};
g.h.mg=g.ca(5);g.h.sf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Lc(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.ra(a),d=c?a.toString():"",e=g.ra(b);return g.cb(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Rc="closure_lm_"+(1E6*Math.random()|0),Xc={},Tc=0,$c="__closure_events_fn_"+(1E9*Math.random()>>>0);g.w(g.ad,g.zc);g.ad.prototype[Gc]=!0;g.h=g.ad.prototype;g.h.Fi=function(){return this.lm};
g.h.Ch=g.ca(6);g.h.addEventListener=function(a,b,c,d){g.Nc(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Vc(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Fi();if(b){var c=[];for(var d=1;b;b=b.Fi())c.push(b),++d}b=this.Av;d=a.type||a;if(g.sa(a))a=new g.Dc(a,b);else if(a instanceof g.Dc)a.target=a.target||b;else{var e=a;a=new g.Dc(d,b);g.lb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=bd(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=bd(k,d,!0,a)&&e,a.F||(e=bd(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=bd(k,d,!1,a)&&e;return e};
g.h.X=function(){g.ad.M.X.call(this);this.removeAllListeners();this.lm=null};
g.h.O=function(a,b,c,d){return this.yd.add(String(a),b,!1,c,d)};
g.h.Qe=function(a,b,c,d){return this.yd.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.yd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.yd?this.yd.removeAll(a):0};
g.h.mg=g.ca(4);g.h.sf=function(a,b,c,d){return this.yd.sf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.yd.hasListener(g.ra(a)?String(a):void 0,b)};cd.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var md;var nd=new cd(function(){return new gd},function(a){a.reset()});
fd.prototype.add=function(a,b){var c=nd.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
fd.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
gd.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
gd.prototype.reset=function(){this.next=this.scope=this.lc=null};var hd,id=!1,jd=new fd;sd.prototype.reset=function(){this.context=this.F=this.G=this.C=null;this.D=!1};
var td=new cd(function(){return new sd},function(a){a.reset()});
g.rd.prototype.then=function(a,b,c){return yd(this,g.Aa(a)?a:null,g.Aa(b)?b:null,c)};
g.od(g.rd);g.rd.prototype.cancel=function(a){0==this.C&&kd(function(){var b=new g.Fd(a);Ad(this,b)},this)};
g.rd.prototype.W=function(a){this.C=0;g.qd(this,2,a)};
g.rd.prototype.N=function(a){this.C=0;g.qd(this,3,a)};
g.rd.prototype.J=function(){for(var a;a=Bd(this);)Cd(this,a,this.C,this.R);this.L=!1};
var Hd=ed;g.w(g.Fd,g.Ea);g.Fd.prototype.name="cancel";g.w(g.Kd,g.zc);g.h=g.Kd.prototype;g.h.gb=0;g.h.X=function(){g.Kd.M.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.gb=g.Id(this.xc,g.ra(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Jd(this.gb);this.gb=0};
g.h.Je=g.ca(7);g.h.isActive=function(){return 0!=this.gb};
g.h.bp=function(){this.gb=0;this.C&&this.C.call(this.F)};g.nk=g.ab("Firefox");g.ok=qb()||g.ab("iPod");g.pk=g.ab("iPad");g.Bca=g.pb();g.qk=g.nb();g.rk=g.ob()&&!g.rb();var Ld,Nd;Ld=null;g.Md=null;Nd=null;g.w(Pd,Baa);Pd.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Pd.prototype.update=function(a,b){if(null!=a){g.ra(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)Qd(this,a,d),d+=this.F;if(g.sa(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){Qd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){Qd(this,e);f=0;break}}this.D=f;this.H+=b}};
Pd.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;Qd(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.Td="StopIteration"in g.n?g.n.StopIteration:{message:"StopIteration",stack:""};g.Sd.prototype.next=function(){throw g.Td;};
g.Sd.prototype.ed=function(){return this};g.h=g.Xd.prototype;g.h.Kb=function(){return this.D};
g.h.Eb=g.ca(0);g.h.Ic=function(){g.Zd(this);return this.C.concat()};
g.h.Md=g.ca(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Kb())return!1;var c=b||Daa;g.Zd(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Xe=this.D=this.C.length=0};
g.h.remove=function(a){return g.Yd(this.F,a)?(delete this.F[a],this.D--,this.Xe++,this.C.length>2*this.D&&g.Zd(this),!0):!1};
g.h.get=function(a,b){return g.Yd(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.Yd(this.F,a)||(this.D++,this.C.push(a),this.Xe++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.Ic(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.Xd(this)};
g.h.ed=function(a){g.Zd(this);var b=0,c=this.Xe,d=this,e=new g.Sd;e.next=function(){if(c!=d.Xe)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Td;var e=d.C[b++];return a?e:d.F[e]};
return e};var ce={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Faa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.w(g.de,g.zc);g.h=g.de.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.td=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.va):(c&&g.La(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.na=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Gaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.td(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.y)(b,this.td,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Kb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Kb(b);return a};
g.h.X=function(){g.de.M.X.call(this);this.clear();this.D.length=0};g.fe.prototype.set=function(a,b){g.ra(b)?this.C.set(a,g.ae(b)):this.C.remove(a)};
g.fe.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.fe.prototype.remove=function(a){this.C.remove(a)};g.w(ge,g.fe);ge.prototype.set=function(a,b){ge.M.set.call(this,a,ie(b))};
ge.prototype.F=function(a){a=ge.M.get.call(this,a);if(!g.ra(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ge.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ra(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.w(g.je,ge);g.je.prototype.set=function(a,b,c){if(b=ie(b)){if(c){if(c<(0,g.B)()){g.je.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.B)()}g.je.M.set.call(this,a,b)};
g.je.prototype.F=function(a,b){var c=g.je.M.F.call(this,a);if(c)if(!b&&g.ke(c))g.je.prototype.remove.call(this,a);else return c};g.w(le,Haa);le.prototype.Kb=function(){var a=0;g.Vd(this.ed(!0),function(){a++});
return a};
le.prototype.clear=function(){var a=Caa(this.ed(!0)),b=this;(0,g.y)(a,function(a){b.remove(a)})};g.w(g.me,le);g.h=g.me.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Kb=function(){return this.C.length};
g.h.ed=function(a){var b=0,c=this.C,d=new g.Sd;d.next=function(){if(b>=c.length)throw g.Td;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.w(g.ne,g.me);g.w(pe,le);var Iaa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},oe=null;g.h=pe.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(re(a),b);se(this)};
g.h.get=function(a){a=this.C.getAttribute(re(a));if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(re(a));se(this)};
g.h.Kb=function(){return te(this).attributes.length};
g.h.ed=function(a){var b=0,c=te(this).attributes,d=new g.Sd;d.next=function(){if(b>=c.length)throw g.Td;var d=c[b++];if(a)return(0,window.decodeURIComponent)(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){for(var a=te(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);se(this)};g.w(ue,le);ue.prototype.set=function(a,b){this.F.set(this.C+a,b)};
ue.prototype.get=function(a){return this.F.get(this.C+a)};
ue.prototype.remove=function(a){this.F.remove(this.C+a)};
ue.prototype.ed=function(a){var b=this.F.ed(!0),c=this,d=new g.Sd;d.next=function(){for(var d=b.next();d.substr(0,c.C.length)!=c.C;)d=b.next();return a?d.substr(c.C.length):c.F.get(d)};
return d};var Jaa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.kg=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.sk="Microsoft Internet Explorer"==window.navigator.appName;g.Ge=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.Ge,void 0);var Qe={};var Cca=g.r("ytPubsubPubsubInstance")||new g.de;g.de.prototype.subscribe=g.de.prototype.subscribe;g.de.prototype.unsubscribeByKey=g.de.prototype.td;g.de.prototype.publish=g.de.prototype.na;g.de.prototype.clear=g.de.prototype.clear;g.p("ytPubsubPubsubInstance",Cca,void 0);var Xe=g.r("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",Xe,void 0);var Ze=g.r("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",Ze,void 0);var Ye=g.r("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",Ye,void 0);var Laa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Maa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.ef=null;g.na(nf,Naa);nf.prototype.start=function(){var a=g.r("yt.scheduler.instance.start");a&&a()};
nf.prototype.pause=function(){var a=g.r("yt.scheduler.instance.pause");a&&a()};
g.wa(nf);nf.getInstance();(0,g.B)();var qf=g.ra(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.ra(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var wf,Af;wf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Af=!1;g.tk=Bf;Ff.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.pd(a)?a:g.Hf(a)):2===this.F&&b?(a=b.call(c,this.C),g.pd(a)?a:g.Gf(a)):this};
Ff.prototype.getValue=function(){return this.C};
g.od(Ff);var Dca=0,Saa=g.Qj?"webkit":g.Pj?"moz":g.C?"ms":g.Mj?"o":"",If=g.r("ytDomDomGetNextId")||function(){return++Dca};
g.p("ytDomDomGetNextId",If,void 0);var Taa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Lf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Lf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Lf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Pf=g.r("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",Pf,void 0);var Rf=g.r("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",Rf,void 0);var Sf=g.oc(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.w(g.Vf,g.zc);g.Vf.prototype.W=function(a){this.C=new g.Xb(g.Nf(a),g.Of(a))};
g.Vf.prototype.R=function(){if(this.C){var a=g.kg();if(0!=this.D){var b=g.Zb(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.xc();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.Vf.prototype.X=function(){g.Ue(this.N);g.J(this.J)};g.na(Wf,g.zc);Wf.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.gg);break}};
Wf.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.gg)}g.zc.prototype.X.call(this)};var Uaa={enablejsapi:1},Vaa={};Xf.prototype.clone=function(){var a=new Xf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.xa(c)?a[b]=g.jb(c):a[b]=c}return a};var $f={},Zf=0;var Xaa,Waa,ng,dg;Xaa=Math.pow(2,16)-1;Waa={log_event:"events",log_interaction:"interactions"};ng=Object.create(null);ng.log_event="GENERIC_EVENT_LOGGING";ng.log_interaction="INTERACTION_LOGGING";dg={};g.hg=0;g.ig=g.r("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.ig,void 0);var bg=g.r("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",bg,void 0);var jg=g.r("ytLoggingTransportDispatchedStats_")||{};
g.p("ytLoggingTransportDispatchedStats_",jg,void 0);var og=g.r("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",og,void 0);var ug={};g.Dg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.B)()+1E3*c);return}catch(f){}var e="";if(d)try{e=(0,window.escape)(g.ae(b))}catch(f){return}else e=(0,window.escape)(b);g.Bg(a,e,c,this.F)};
g.Dg.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Ag.get(""+a,void 0))&&(c=(0,window.unescape)(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.Dg.prototype.remove=function(a){this.C&&this.C.remove(a);g.Cg(a,"/",this.F)};var Eg=new g.Dg("yt.innertube");var Og=g.r("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",Og,void 0);var Pg=0;var Qg=(0,g.B)().toString();var Vg,Sg;g.Ug=Rg();Vg=0;g.Tg=null;Sg=null;g.h=g.$g.prototype;g.h.eL=function(){this.ej()||this.init()};
g.h.enable=function(){this.C=1;(0,g.y)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.eL,this),this.subscribe("dispose-"+a,this.dispose,this),g.D("PAGE_NAME")==a&&g.ah(this))},this)};
g.h.init=function(){g.lf(this.F);this.C=2;this.L&&this.L()};
g.h.ej=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.lf(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Je(a)}};
g.h.subscribe=function(a,b,c){a=g.$e(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.af(this.G);this.G=[]};var bh=g.r("yt.modules.registry_")||{};g.p("yt.modules.registry_",bh,void 0);g.eh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.eh,void 0);var jh={},cba=0;var dba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.qh.prototype.toString=function(){return this.topic};var Eca=g.r("ytPubsub2Pubsub2Instance")||new g.de;g.de.prototype.subscribe=g.de.prototype.subscribe;g.de.prototype.unsubscribeByKey=g.de.prototype.td;g.de.prototype.publish=g.de.prototype.na;g.de.prototype.clear=g.de.prototype.clear;g.p("ytPubsub2Pubsub2Instance",Eca,void 0);g.uk=g.r("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.uk,void 0);g.vk=g.r("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.vk,void 0);
g.wk=g.r("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.wk,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var th=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.na(wh,g.ph);g.na(xh,g.ph);var hba=new g.qh("aft-recorded",wh),qba=new g.qh("timing-sent",xh);var pba,Yh,xk,Xh,kba,nba,jba,Sh,yh,gba,Ai,Oba;pba={vc:!0};
Yh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};xk={};
Xh=(xk.ad_allowed="adTypesAllowed",xk.ad_at="adType",xk.ad_cpn="adClientPlaybackNonce",xk.ad_docid="adVideoId",xk.yt_ad_an="adNetworks",xk.p="httpProtocol",xk.t="transportProtocol",xk.cpn="clientPlaybackNonce",xk.csn="clientScreenNonce",xk.docid="videoId",xk.is_nav="isNavigation",xk.yt_lt="loadType",xk.yt_ad="isMonetized",xk.nr="webInfo.navigationReason",xk.ncnp="webInfo.nonPreloadedNodeCount",xk.paused="playerInfo.isPausedOnLoad",xk.fmt="playerInfo.itag",xk.yt_pl="watchInfo.isPlaylist",xk.yt_ad_pr=
"prerollAllowed",xk.yt_red="isRedSubscriber",xk.st="serverTimeMs",xk.vph="viewportHeight",xk.vpw="viewportWidth",xk.yt_vis="isVisible",xk);kba="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
nba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
"video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"};jba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" ");Sh=!1;yh=!1;
gba=(0,g.t)(th.clearResourceTimings||th.webkitClearResourceTimings||th.mozClearResourceTimings||th.msClearResourceTimings||th.oClearResourceTimings||g.va,th);Ai=Mh;Oba=Qh;g.pi=Lh;g.na(gi,g.zc);g.h=gi.prototype;
g.h.Vl=function(a){this.ob()||(this.mb=a=g.Yf(a),this.C=a.clone(),this.F=this.C.attrs.id||this.F,"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N),this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F),this.C.args.enablejsapi="1",this.C.args.playerapiid=this.N,this.ia||(this.ia=oi(this,this.C.args.jsapicallback||"onYouTubePlayerReady")),this.C.args.jsapicallback=null,(a=this.C.attrs.width)&&g.sc(this.H,Number(a)||a),(a=this.C.attrs.height)&&g.rc(this.H,Number(a)||a),rba(this),
this.L&&hi(this))};
g.h.Yw=function(){return this.mb};
g.h.vC=function(){return this.L};
g.h.Rh=function(a,b){var c=this,d=oi(this,b);if(d){if(!g.Ia(this.ub,a)&&!this.D[a]){var e=tba(this,a);this.W&&this.W(a,e)}this.R.subscribe(a,d);"onReady"==a&&this.L&&g.Re(function(){d(c.api)},0)}};
g.h.RK=function(a,b){if(!this.ob()){var c=oi(this,b);c&&g.ee(this.R,a,c)}};
g.h.zv=function(a){g.F("a11y-announce",a)};
g.h.AG=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.h.BG=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Ox=function(){return this.la||(ii(this)?"html5":null)};
g.h.wx=function(){return this.cb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.cf(this.C.assets.js);window.spf.script.ignore(b,a)}g.Te(this.qb);this.V=!1};
g.h.X=function(){li(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Je(b)}this.Sa=null;for(var a in this.D)g.n[this.D[a]]=null;this.mb=this.C=this.api=null;delete this.oa;delete this.H;g.zc.prototype.X.call(this)};g.ri={};g.qi="player_uid_"+(1E9*Math.random()>>>0);var yi=null;g.yk=window.performance&&window.performance.memory;g.kj={};var Ii=0,Ei=[],Hi=[],zi=0,Fi={},Gi={},Bi=new g.Kd(Cba,1E3);var Eba=["server_prefetched_vast","vmap"];var Li,Qi;g.Pi=null;Qi="";var Si=null,Vi=[];var Zi,qj,pj,aj,$i,Kba,Nba,Lba,Mba,lj;aj=0;$i=0;Kba=[900,60,"waiting"];Nba=[500,99,"waiting"];Lba=[300,60,"waiting"];Mba=[400,99,"waiting"];lj=[300,101,"done"];var xj=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.He,void 0);g.p("yt.pushConfigArray",Ie,void 0);g.p("yt.getConfig",g.D,void 0);g.p("yt.config.set",g.He,void 0);g.p("yt.config.pushArray",Ie,void 0);g.p("yt.config.get",g.D,void 0);g.p("yt.hasMsg",g.gh,void 0);g.p("yt.setMsg",fh,void 0);g.p("yt.setGoogMsg",hh,void 0);g.p("yt.msgs.has",g.gh,void 0);g.p("yt.msgs.set",fh,void 0);g.p("yt.msgs.setGoog",hh,void 0);g.p("yt.pubsub.publish",g.F,void 0);g.p("yt.pubsub.subscribe",g.$e,void 0);
g.p("ytcsi.tick",g.pi,void 0);g.w(Aj,g.$g);
Aj.prototype.enable=function(){window.onload=Iba;window.onunload=Jba;window.onerror=Kaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Xi),window.addEventListener("spfhistory",Yi),window.addEventListener("spfrequest",cj),window.addEventListener("spfpartprocess",gj),window.addEventListener("spfpartdone",hj),window.addEventListener("spfprocess",ij),window.addEventListener("spfdone",mj),window.addEventListener("spferror",nj),window.addEventListener("spfreload",
oj),window.addEventListener("spfjsbeforeunload",Bj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Qba),this.subscribe("dispose",Rba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Aj.prototype.init=function(){Aj.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.D("PAGEFRAME_JS")){var b=g.D("PAGEFRAME_JS",void 0);var c=function(){var a=g.r("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.r("yt.www.masthead.loadSearchbox"))&&a();
a=g.D("JS_COMMON_MODULE");var d=g.D("JS_PAGE_MODULES");d||(d=[a]);a=g.D("JS_DELAY_LOAD",0);0<a?(g.Te(this.D),this.D=g.Re(function(){b&&g.df(b,c);window.spf.script.require(d)},a)):(b&&g.df(b,c),window.spf.script.require(d));
g.p("yt.abuse.botguardInitialized",g.ff,void 0);g.p("yt.abuse.invokeBotguard",g.gf,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",g.pf,void 0);g.p("yt.player.exports.navigate",g.oh,void 0);g.p("yt.util.activity.init",g.tg,void 0);g.p("yt.util.activity.getTimeSinceActive",g.vg,void 0);g.p("yt.util.activity.setTimestamp",g.rg,void 0);Ri(g.r("ytplayer.config"));g.r("ytspf.enabled")&&Gba();fba();g.D("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.Ne("service_worker_enabled")?fca():dca())};
Aj.prototype.dispose=function(){g.Te(this.D);var a=g.r("ytbin.www.pageframe.cancelSetup");a&&a();g.Ue(Li);if(a=g.Ni())a.removeEventListener("onReady",Mi),a.removeEventListener("onStateChange",Mi);Fh(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.E(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.Uf(a);Aj.M.dispose.call(this)};
Aj.prototype.disable=function(){Aj.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Xi),window.removeEventListener("spfhistory",Yi),window.removeEventListener("spfrequest",cj),window.removeEventListener("spfpartprocess",gj),window.removeEventListener("spfpartdone",hj),window.removeEventListener("spfprocess",ij),window.removeEventListener("spfdone",mj),window.removeEventListener("spferror",nj),window.removeEventListener("spfreload",oj),window.removeEventListener("spfjsbeforeunload",
Bj));window.onload=null;window.onunload=null;window.onerror=null};
g.dh(new Aj);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:00:34 Apr 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:36:22 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 290.218
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.061
  cdx.remote: 0.057
  esindex: 0.008
  LoadShardBlock: 241.634 (3)
  PetaboxLoader3.datanode: 245.553 (4)
  load_resource: 95.024
  PetaboxLoader3.resolve: 59.15
*/