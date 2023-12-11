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

var _yt_www={};(function(g){var window=this;var ca,aaa,na,oa,qa,pa,ra,sa,daa,eaa,Za,qb,ub,maa,Bb,Gb,Hb,Ib,oaa,qaa,Fc,Gc,Uc,raa,jd,ld,md,od,nd,pd,saa,sd,td,taa,wd,Bd,Cd,Hd,uaa,vaa,Id,Jd,xaa,Sd,Ud,Vd,Zd,yaa,ce,je,ie,Aaa,me,ne,oe,pe,Baa,qe,re,ve,Caa,we,De,Fe,Daa,Ke,Oe,Ie,Ge,Faa,Ne,Le,Me,Qe,Eaa,Gaa,Ve,We,$e,Haa,Iaa,Jaa,ff,hf,Laa,nf,of,pf,Maa,sf,wf,xf,yf,zf,Bf,Df,Oaa,Hf,Kf,Lf,Nf,Paa,Vf,eg,Saa,lg,gg,Taa,ng,Uaa,Vaa,Waa,Xaa,Zaa,Eg,$aa,Fg,Gg,aba,Mg,Kg,Hg,Og,Vg,eh,fh,gba,rh,fba,kba,Dh,Ih,Jh,lba,Ph,Qh,Yh,Xh,mba,bi,ii,ji,ki,oi,si,vi,xi,yi,nba,Ki,Li,Ni,
qba,Mi,Oi,rba,Ri,Ji,Si,sba,Pi,Qi,tba,bj,uba,vba,gj,hj,ij,jj,Aba,Bj,nj,Cj,oj,lj,Dj,pj,wba,Hj,vj,wj,Kj,xba,yba,xj,sj,tj,mj,uj,Mj,zj,Ej,Aj,Fba,rj,Gj,Hba,Oba,Nba,Mba,Sj,Lba,Jba,Kba,Pba,Qba,Rba,Sba,hk,ck,ek,jk,Tba,kk,mk,Uba,Vba,nk,ok,uk,yk,zk,Ak,Ek,Fk,Gk,bca,cca,vk,xk,tk,aca,wk,Kk,Mk,Jk,Nk,Lk,dca,hca,eca,kca,gca,fca,ica,jca,mca,Qk,lca,Ok,nca,pca,rca,qca,oca,Rk,Sk,Tk,ea,Uk,Ea,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
g.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
aaa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
g.ha=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
na=function(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var h=d[e];h in c||(c[h]={});c=c[h]}d=d[d.length-1];e=c[d];h=b(e);h!=e&&null!=h&&ka(c,d,{configurable:!0,writable:!0,value:h})}};
oa=function(){oa=function(){};
ja.Symbol||(ja.Symbol=baa)};
qa=function(){oa();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(ca(this))}});
qa=function(){}};
pa=function(a){qa();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a};
ra=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
sa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ta=function(a){return void 0!==a};
g.ua=function(a){return"string"==typeof a};
g.va=function(a){return"boolean"==typeof a};
g.wa=function(a){return"number"==typeof a};
g.n=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ta(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.q=function(a,b){for(var c=a.split("."),d=b||g.m,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.xa=function(){};
g.ya=function(a){a.Ic=void 0;a.getInstance=function(){return a.Ic?a.Ic:a.Ic=new a}};
g.za=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Aa=function(a){return"array"==g.za(a)};
g.Ba=function(a){var b=g.za(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Ca=function(a){return"function"==g.za(a)};
g.Da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Fa=function(a){return a[Ea]||(a[Ea]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.r=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.r=daa:g.r=eaa;return g.r.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.qw=function(a,c,h){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
g.Ga=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ga);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ia=function(a,b,c){b=g.Ha(a,b,c);return 0>b?null:g.ua(a)?a.charAt(b):a[b]};
g.Ha=function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return h;return-1};
g.Ka=function(a,b){return 0<=(0,g.Ja)(a,b)};
g.La=function(a){return 0==a.length};
g.Oa=function(a,b){var c=(0,g.Ja)(a,b),d;(d=0<=c)&&g.Na(a,c);return d};
g.Na=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Pa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Qa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ba(d)){var e=a.length||0,h=d.length||0;a.length=e+h;for(var k=0;k<h;k++)a[e+k]=d[k]}else a.push(d)}};
g.Ra=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Sa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Ta=function(a){return/^[\s\xa0]*$/.test(a)};
g.Ua=function(a){return encodeURIComponent(String(a))};
g.Va=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.Wa=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Xa=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.$a=function(a,b){for(var c=0,d=(0,g.Ya)(String(a)).split("."),e=(0,g.Ya)(String(b)).split("."),h=Math.max(d.length,e.length),k=0;0==c&&k<h;k++){var l=d[k]||"",p=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];p=/(\d*)(\D*)(.*)/.exec(p)||["","","",""];if(0==l[0].length&&0==p[0].length)break;c=Za(0==l[1].length?0:parseInt(l[1],10),0==p[1].length?0:parseInt(p[1],10))||Za(0==l[2].length,0==p[2].length)||Za(l[2],p[2]);l=l[3];p=p[3]}while(0==c)}return c};
Za=function(a,b){return a<b?-1:a>b?1:0};
g.ab=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.cb=function(a){return-1!=g.bb.indexOf(a)};
g.db=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.eb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.fb=function(a,b){return null!==a&&b in a};
g.gb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.hb=function(a){for(var b in a)return!1;return!0};
g.ib=function(a,b){b in a&&delete a[b]};
g.jb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.kb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};
g.lb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.mb=function(a){var b=g.za(a);if("object"==b||"array"==b){if(g.Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.mb(a[c]);return b}return a};
g.ob=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var h=0;h<nb.length;h++)c=nb[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.pb=function(){return g.cb("Trident")||g.cb("MSIE")};
qb=function(){return g.cb("Firefox")||g.cb("FxiOS")};
g.sb=function(){return g.cb("Safari")&&!(g.rb()||g.cb("Coast")||g.cb("Opera")||g.cb("Edge")||qb()||g.cb("Silk")||g.cb("Android"))};
g.rb=function(){return(g.cb("Chrome")||g.cb("CriOS"))&&!g.cb("Edge")};
g.tb=function(){return g.cb("Android")&&!(g.rb()||qb()||g.cb("Opera")||g.cb("Silk"))};
ub=function(){return g.cb("iPhone")&&!g.cb("iPod")&&!g.cb("iPad")};
g.vb=function(){return ub()||g.cb("iPad")||g.cb("iPod")};
g.wb=function(a){g.wb[" "](a);return a};
g.xb=function(a,b){try{return g.wb(a[b]),!0}catch(c){}return!1};
maa=function(a,b){var c=g.w.YB;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Bb=function(a,b){g.Ba(a);g.yb();for(var c=b?zb:Ab,d=[],e=0;e<a.length;e+=3){var h=a[e],k=e+1<a.length,l=k?a[e+1]:0,p=e+2<a.length,t=p?a[e+2]:0,y=h>>2;h=(h&3)<<4|l>>4;l=(l&15)<<2|t>>6;t&=63;p||(t=64,k||(l=64));d.push(c[y],c[h],c[l],c[t])}return d.join("")};
g.yb=function(){if(!Ab){Ab={};g.Cb={};zb={};for(var a=0;65>a;a++)Ab[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),g.Cb[Ab[a]]=a,zb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(g.Cb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
g.Db=function(a){this.C=0;this.F=a};
g.Fb=function(){};
Gb=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Aa(c))for(var d=0;d<c.length;d++)c[d]&&c[d].od();else c&&c.od()}};
Hb=function(a,b){return g.wa(b)&&(isNaN(b)||Infinity===b||-Infinity===b)?String(b):b};
Ib=function(a){if(g.Aa(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Ib(d):d)}return b}if(g.Jb&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Ib(d):d);return b};
g.Lb=function(a){this.C=a||{cookie:""}};
g.Mb=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,h=0;h<a.length;h++)e=(0,g.Ya)(a[h]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Ob=function(a){var b=g.q("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(g.ua(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(h){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(b=a.constructor&&
a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:g.Nb(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})};
g.Nb=function(a){if(Pb[a])return Pb[a];a=String(a);if(!Pb[a]){var b=/function\s+([^\(]+)/m.exec(a);Pb[a]=b?b[1]:"[Anonymous]"}return Pb[a]};
g.Qb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Sb=function(){this.C="";this.F=Rb};
g.Tb=function(a){if(a instanceof g.Sb&&a.constructor===g.Sb&&a.F===Rb)return a.C;g.za(a);return"type_error:SafeUrl"};
g.Wb=function(a){if(a instanceof g.Sb)return a;a="object"==typeof a&&a.ee?a.vd():String(a);Ub.test(a)||(a="about:invalid#zClosurez");return g.Vb(a)};
g.Xb=function(a){if(a instanceof g.Sb)return a;a="object"==typeof a&&a.ee?a.vd():String(a);Ub.test(a)||(a="about:invalid#zClosurez");return g.Vb(a)};
g.Vb=function(a){var b=new g.Sb;b.C=a;return b};
g.Zb=function(){this.C="";this.F=g.Yb};
g.$b=function(a){var b=new g.Zb;b.C=a;return b};
g.bc=function(){this.C="";this.F=g.ac};
g.cc=function(a){var b=new g.bc;b.C=a;return b};
g.ec=function(){this.C="";this.D=dc;this.F=null};
g.fc=function(a){if(a instanceof g.ec&&a.constructor===g.ec&&a.D===dc)return a.C;g.za(a);return"type_error:SafeHtml"};
g.hc=function(a){if(a instanceof g.ec)return a;var b="object"==typeof a,c=null;b&&a.em&&(c=a.Bf());a=g.Wa(b&&a.ee?a.vd():String(a));return g.gc(a,c)};
g.gc=function(a,b){var c=new g.ec;c.C=a;c.F=b;return c};
g.ic=function(a,b){var c=b instanceof g.Sb?b:g.Xb(b);a.href=g.Tb(c)};
g.jc=function(a,b){var c=b instanceof g.Sb?b:g.Xb(b);a.href=g.Tb(c)};
g.kc=function(a,b){this.x=g.ta(a)?a:0;this.y=g.ta(b)?b:0};
g.lc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.mc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.nc=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.ua(a)?document.getElementById(a):a};
g.oc=function(a){var b=document;return g.ua(a)?b.getElementById(a):a};
g.qc=function(a,b){g.db(b,function(b,d){b&&"object"==typeof b&&b.ee&&(b=b.vd());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:pc.hasOwnProperty(d)?a.setAttribute(pc[d],b):g.Ra(d,"aria-")||g.Ra(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.sc=function(a){return g.rc(a||window)};
g.rc=function(a){a=a.document;a=g.tc(a)?a.documentElement:a.body;return new g.nc(a.clientWidth,a.clientHeight)};
g.vc=function(a,b,c){return g.uc(document,arguments)};
g.uc=function(a,b){var c=String(b[0]),d=b[1];if(!naa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Wa(d.name),'"');if(d.type){c.push(' type="',g.Wa(d.type),'"');var e={};g.ob(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ua(d)?c.className=d:g.Aa(d)?c.className=d.join(" "):g.qc(c,d));2<b.length&&g.wc(a,c,b,2);return c};
g.wc=function(a,b,c,d){function e(c){c&&b.appendChild(g.ua(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var h=c[d];!g.Ba(h)||g.Da(h)&&0<h.nodeType?e(h):(0,g.z)(oaa(h)?g.Pa(h):h,e)}};
g.xc=function(a){return document.createElement(String(a))};
g.tc=function(a){return"CSS1Compat"==a.compatMode};
g.yc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.zc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.Ac=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
oaa=function(a){if(a&&"number"==typeof a.length){if(g.Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Ca(a))return"function"==typeof a.item}return!1};
g.Bc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.Cc=function(a){try{return!!a&&null!=a.location.href&&g.xb(a,"foo")}catch(b){return!1}};
g.Dc=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.Ec=function(a){var b=[];g.Dc(a,function(a){b.push(a)});
return b};
qaa=function(){var a=g.xc("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};(0,g.z)(paa(),function(d){b.call(a,d)&&(c[d]=!0)});
return c};
Fc=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};
Gc=function(a,b){g.m.google_image_requests||(g.m.google_image_requests=[]);var c=g.m.document.createElement("img");if(b){var d=function(a){b&&b(a);c.removeEventListener&&c.removeEventListener("load",d,!1);c.removeEventListener&&c.removeEventListener("error",d,!1)};
Fc(c,"load",d);Fc(c,"error",d)}c.src=a;g.m.google_image_requests.push(c)};
g.Hc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Ic=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Jc=function(a,b){a.style.width=g.Ic(b,!0)};
g.Kc=function(a,b){return typeof a===b};
g.Mc=function(){var a=void 0===a?g.Lc:a;try{return a.history.length}catch(b){return 0}};
g.Nc=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Mc();a.u_java=!!g.Lc.navigator&&!g.Kc(g.Lc.navigator.javaEnabled,"unknown")&&!!g.Lc.navigator.javaEnabled&&g.Lc.navigator.javaEnabled();g.Lc.screen&&(a.u_h=g.Lc.screen.height,a.u_w=g.Lc.screen.width,a.u_ah=g.Lc.screen.availHeight,a.u_aw=g.Lc.screen.availWidth,a.u_cd=g.Lc.screen.colorDepth);g.Lc.navigator&&g.Lc.navigator.plugins&&(a.u_nplug=g.Lc.navigator.plugins.length);g.Lc.navigator&&g.Lc.navigator.mimeTypes&&(a.u_nmime=g.Lc.navigator.mimeTypes.length)};
g.Oc=function(a){return!!a.google_async_iframe_id};
g.Sc=function(){if(Pc&&!g.Cc(Qc)){var a="."+g.Rc.domain;try{for(;2<a.split(".").length&&!g.Cc(Qc);)g.Rc.domain=a=a.substr(a.indexOf(".")+1),Qc=window.parent}catch(b){}g.Cc(Qc)||(Qc=window)}return Qc};
g.Tc=function(a,b){try{return(void 0===b?0:b)?(new g.nc(a.innerWidth,a.innerHeight)).round():g.sc(a).round()}catch(c){return new g.nc(-12245933,-12245933)}};
Uc=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
g.Vc=function(a,b,c,d,e,h,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);h&&(l+="?"+h);k&&(l+="#"+k);return l};
g.Wc=function(a){return a?decodeURI(a):a};
g.Yc=function(a,b){return b.match(g.Xc)[a]||null};
g.Zc=function(a){return g.Wc(g.Yc(3,a))};
g.$c=function(a){a=a.match(g.Xc);return g.Vc(null,null,null,null,a[5],a[6],a[7])};
g.ad=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.bd=function(a,b){return b?a?a+"&"+b:b:a};
g.cd=function(a,b){if(!b)return a;var c=g.ad(a);c[1]=g.bd(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.dd=function(a,b,c){if(g.Aa(b))for(var d=0;d<b.length;d++)g.dd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ua(b)))};
g.ed=function(a){var b=[],c;for(c in a)g.dd(c,a[c],b);return b.join("&")};
g.fd=function(a,b){var c=g.ed(b);return g.cd(a,c)};
g.gd=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var h=a.charCodeAt(b-1);if(38==h||63==h)if(h=a.charCodeAt(b+e),!h||61==h||38==h||35==h)return b;b+=e+1}return-1};
g.id=function(a,b){var c=a.search(g.hd),d=g.gd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.Va(a.substr(d,e-d))};
g.kd=function(a){var b=a||g.m,c=[],d=null;do{var e=b;if(g.Cc(e)){var h=e.location.href;d=e.document&&e.document.referrer||null}else h=d,d=null;c.push(new jd(h||"",e));try{b=e.parent}catch(k){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||g.m;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.er=!0);return c};
raa=function(a,b){this.C=a;this.F=b};
jd=function(a,b,c){this.url=a;this.Zg=b;this.er=!!c;this.depth=g.wa(void 0)?void 0:null};
ld=function(){this.D="&";this.G=g.ta(void 0)?void 0:"trn";this.H=!1;this.F={};this.L=0;this.C=[]};
md=function(a,b){var c={};c[a]=b;return[c]};
od=function(a,b,c,d,e){var h=[];g.Dc(a,function(a,l){var k=nd(a,b,c,d,e);k&&h.push(l+"="+k)});
return h.join(b)};
nd=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var h=[],k=0;k<a.length;k++)h.push(nd(a[k],b,c,d+1,e));return h.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(od(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};
pd=function(a,b,c,d){a.C.push(b);a.F[b]=md(c,d)};
saa=function(a){if(!a.G)return 4E3;var b=1,c;for(c in a.F)b=c.length>b?c.length:b;return 4E3-a.G.length-b-a.D.length-1};
g.qd=function(a,b,c,d,e){if(Math.random()<(d||.01))try{if(c instanceof ld)var h=c;else h=new ld,g.Dc(c,function(a,b){var c=h,d=c.L++,e=md(b,a);c.C.push(d);c.F[d]=e});
var k=h.getUrl(a.C,"pagead2.googlesyndication.com","/pagead/gen_204?id="+b+"&","");k&&("undefined"===typeof e?Gc(k,null):Gc(k,void 0===e?null:e))}catch(l){}};
sd=function(){var a=g.m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.rd)()};
td=function(){var a=void 0===a?g.m:a;return(a=a.performance)&&a.now?a.now():null};
taa=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
wd=function(){var a=ud;this.events=[];this.F=a||g.m;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.C=vd()||(null!=b?b:1>Math.random())};
g.yd=function(a){a&&xd&&vd()&&(xd.clearMarks("goog_"+a.uniqueId+"_start"),xd.clearMarks("goog_"+a.uniqueId+"_end"))};
Bd=function(){var a=zd;this.D=g.Ad;this.G=this.F;this.C=void 0===a?null:a};
g.Fd=function(a){return new Cd(g.Ed(a),a.fileName,a.lineNumber)};
g.Ed=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
Cd=function(a,b,c){Uc.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
g.Gd=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var h=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,h,k]};
Hd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
uaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;y=t=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],h=e[2],l=e[3],p=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var t=l^d&(h^l);var y=1518500249}else t=d^h^l,y=1859775393;else 60>c?(t=d&h|l&(d|h),y=2400959708):(t=d^h^l,y=3395469782);t=((a<<5|a>>>27)&4294967295)+t+p+y+b[c]&4294967295;p=l;l=h;h=(d<<30|d>>>2)&4294967295;d=a;a=t}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+h&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+p&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==t)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64;for(;d<c;)if(h[t++]=a[d++],y++,64==t)for(t=0,b(h);d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64}
function d(){var a=[],d=8*y;56>t?c(l,56-t):c(l,64-(t-56));for(var k=63;56<=k;k--)h[k]=d&255,d>>>=8;b(h);for(k=d=0;5>k;k++)for(var p=24;0<=p;p-=8)a[d++]=e[k]>>p&255;return a}
for(var e=[],h=[],k=[],l=[128],p=1;64>p;++p)l[p]=0;var t,y;a();return{reset:a,update:c,digest:d,Qw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
vaa=function(a,b,c){var d=[],e=[];if(1==(g.Aa(c)?2:1))return e=[b,a],(0,g.z)(d,function(a){e.push(a)}),Id(e.join(" "));
var h=[],k=[];(0,g.z)(c,function(a){k.push(a.key);h.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.La(h)?[c,b,a]:[h.join(":"),c,b,a];(0,g.z)(d,function(a){e.push(a)});
a=Id(e.join(" "));a=[c,a];g.La(k)||a.push(k.join(""));return a.join("_")};
Id=function(a){var b=uaa();b.update(a);return b.Qw().toLowerCase()};
Jd=function(a){var b=Hd(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.Lb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.Lb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.m.location.href);return d&&b&&c?[c,vaa(Hd(d),b,a||null)].join(" "):null}return null};
g.A=function(){this.Zc=this.Zc;this.Vf=this.Vf};
g.Md=function(a,b){g.Kd(a,g.u(g.Ld,b))};
g.Kd=function(a,b){a.Zc?g.ta(void 0)?b.call(void 0):b():(a.Vf||(a.Vf=[]),a.Vf.push(g.ta(void 0)?(0,g.r)(b,void 0):b))};
g.Ld=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Od=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Vt=!0};
g.Pd=function(a,b){g.Od.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.zc=null;a&&this.init(a,b)};
g.Rd=function(a){return!(!a||!a[Qd])};
xaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Ih=e;this.key=++waa;this.Rg=this.Fi=!1};
Sd=function(a){a.Rg=!0;a.listener=null;a.C=null;a.src=null;a.Ih=null};
g.Td=function(a){this.src=a;this.listeners={};this.C=0};
Ud=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Oa(a.listeners[c],b);d&&(Sd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Vd=function(a,b,c,d){for(var e=0;e<a.length;++e){var h=a[e];if(!h.Rg&&h.listener==b&&h.capture==!!c&&h.Ih==d)return e}return-1};
g.Xd=function(a,b,c,d,e){if(d&&d.once)return g.Wd(a,b,c,d,e);if(g.Aa(b)){for(var h=0;h<b.length;h++)g.Xd(a,b[h],c,d,e);return null}c=g.Yd(c);return g.Rd(a)?a.O(b,c,g.Da(d)?!!d.capture:!!d,e):Zd(a,b,c,!1,d,e)};
Zd=function(a,b,c,d,e,h){if(!b)throw Error("Invalid event type");var k=g.Da(e)?!!e.capture:!!e,l=g.$d(a);l||(a[be]=l=new g.Td(a));c=l.add(b,c,d,k,h);if(c.C)return c;d=yaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)zaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ce(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");de++;return c};
yaa=function(){var a=Aaa,b=ee?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Wd=function(a,b,c,d,e){if(g.Aa(b)){for(var h=0;h<b.length;h++)g.Wd(a,b[h],c,d,e);return null}c=g.Yd(c);return g.Rd(a)?a.Ye(b,c,g.Da(d)?!!d.capture:!!d,e):Zd(a,b,c,!0,d,e)};
g.fe=function(a,b,c,d,e){if(g.Aa(b))for(var h=0;h<b.length;h++)g.fe(a,b[h],c,d,e);else d=g.Da(d)?!!d.capture:!!d,c=g.Yd(c),g.Rd(a)?a.Wa(b,c,d,e):a&&(a=g.$d(a))&&(b=a.xf(b,c,d,e))&&g.ge(b)};
g.ge=function(a){if(g.wa(a)||!a||a.Rg)return!1;var b=a.src;if(g.Rd(b))return Ud(b.Jd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ce(c),d):b.addListener&&b.removeListener&&b.removeListener(d);de--;(c=g.$d(b))?(Ud(c,a),0==c.C&&(c.src=null,b[be]=null)):Sd(a);return!0};
ce=function(a){return a in he?he[a]:he[a]="on"+a};
je=function(a,b,c,d){var e=!0;if(a=g.$d(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var h=b[a];h&&h.capture==c&&!h.Rg&&(h=ie(h,d),e=e&&!1!==h)}return e};
ie=function(a,b){var c=a.listener,d=a.Ih||a.src;a.Fi&&g.ge(a);return c.call(d,b)};
Aaa=function(a,b){if(a.Rg)return!0;if(!ee){var c=b||g.q("window.event"),d=new g.Pd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var h=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(p){h=!0}if(h||void 0==c.returnValue)c.returnValue=!0}c=[];for(h=d.currentTarget;h;h=h.parentNode)c.push(h);h=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=je(c[k],h,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=je(c[k],h,!1,d),e=e&&l}return e}return ie(a,new g.Pd(b,
this))};
g.$d=function(a){a=a[be];return a instanceof g.Td?a:null};
g.Yd=function(a){if(g.Ca(a))return a;a[ke]||(a[ke]=function(b){return a.handleEvent(b)});
return a[ke]};
g.le=function(){g.A.call(this);this.Jd=new g.Td(this);this.Zv=this;this.Rm=null};
me=function(a,b,c,d){b=a.Jd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,h=0;h<b.length;++h){var k=b[h];if(k&&!k.Rg&&k.capture==c){var l=k.listener,p=k.Ih||k.src;k.Fi&&Ud(a.Jd,k);e=!1!==l.call(p,d)&&e}}return e&&0!=d.Vt};
ne=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
oe=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
pe=function(a){g.m.setTimeout(function(){throw a;},0)};
Baa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.cb("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.r)(function(a){if(("*"==d||a.origin==
d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.pb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ta(c.next)){c=c.next;var a=c.Ho;c.Ho=null;a()}};
return function(a){d.next={Ho:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
qe=function(){this.F=this.C=null};
re=function(){this.next=this.scope=this.yc=null};
ve=function(a,b){se||Caa();te||(se(),te=!0);ue.add(a,b)};
Caa=function(){if(g.m.Promise&&g.m.Promise.resolve){var a=g.m.Promise.resolve(void 0);se=function(){a.then(we)}}else se=function(){var a=we;
!g.Ca(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.cb("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(xe||(xe=Baa()),xe(a)):g.m.setImmediate(a)}};
we=function(){for(var a;a=ue.remove();){try{a.yc.call(a.scope)}catch(b){pe(b)}oe(ye,a)}te=!1};
g.ze=function(a){a.prototype.$goog_Thenable=!0};
g.Ae=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Ce=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.xa)try{var c=this;a.call(b,function(a){g.Be(c,2,a)},function(a){g.Be(c,3,a)})}catch(d){g.Be(this,3,d)}};
De=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
Fe=function(a,b,c){var d=Ee.get();d.F=a;d.onRejected=b;d.context=c;return d};
Daa=function(a,b,c){Ge(a,b,c,null)||ve(g.u(b,a))};
g.He=function(a){return new g.Ce(function(b,c){var d=a.length,e=[];if(d)for(var h=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],Daa(p,g.u(h,l),k);
else b(e)})};
g.Je=function(a,b){return Ie(a,null,b,void 0)};
Ke=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,h=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(h=k);e&&(0==c.C&&1==d?Ke(c,b):(h?(d=h,d.next==c.G&&(c.G=d),d.next=d.next.next):Le(c),Me(c,e,3,b)))}a.D=null}else g.Be(a,3,b)};
Oe=function(a,b){a.F||2!=a.C&&3!=a.C||Ne(a);a.G?a.G.next=b:a.F=b;a.G=b};
Ie=function(a,b,c,d){var e=Fe(null,null,null);e.C=new g.Ce(function(a,k){e.F=b?function(c){try{var e=b.call(d,c);a(e)}catch(t){k(t)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!g.ta(e)&&b instanceof g.Pe?k(b):a(e)}catch(t){k(t)}}:k});
e.C.D=a;Oe(a,e);return e.C};
g.Be=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Ge(c,a.X,a.N,a)||(a.R=c,a.C=b,a.D=null,Ne(a),3!=b||c instanceof g.Pe||Eaa(a,c)))};
Ge=function(a,b,c,d){if(a instanceof g.Ce)return Oe(a,Fe(b||g.xa,c||null,d)),!0;if(g.Ae(a))return a.then(b,c,d),!0;if(g.Da(a))try{var e=a.then;if(g.Ca(e))return Faa(a,e,b,c,d),!0}catch(h){return c.call(d,h),!0}return!1};
Faa=function(a,b,c,d,e){function h(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,h)}catch(p){h(p)}};
Ne=function(a){a.L||(a.L=!0,ve(a.J,a))};
Le=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Me=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Qe(b,c,d);else try{b.D?b.F.call(b.context):Qe(b,c,d)}catch(e){Re.call(null,e)}oe(Ee,b)};
Qe=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Eaa=function(a,b){a.H=!0;ve(function(){a.H&&Re.call(null,b)})};
g.Pe=function(a){g.Ga.call(this,a)};
g.Se=function(a,b,c){if(g.Ca(a))c&&(a=(0,g.r)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.r)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.Te=function(a){g.m.clearTimeout(a)};
g.Ue=function(a,b,c){g.A.call(this);this.C=a;this.D=b||0;this.F=c;this.jc=(0,g.r)(this.Pp,this)};
Gaa=function(){this.F=-1};
Ve=function(){this.F=64;this.C=[];this.L=[];this.R=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
We=function(a,b,c){c||(c=0);var d=a.R;if(g.ua(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var h=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(h<<1|h>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],p=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){h=l^c&(k^l);var t=1518500249}else h=c^k^l,t=1859775393;else 60>e?(h=c&k|l&(c|k),t=2400959708):(h=c^k^l,
t=3395469782);h=(b<<5|b>>>27)+h+p+t+d[e]&4294967295;p=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=h}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+p&4294967295};
g.Xe=function(a){if(a.classList)return a.classList;a=a.className;return g.ua(a)&&a.match(/\S+/g)||[]};
g.B=function(a,b){return a.classList?a.classList.contains(b):g.Ka(g.Xe(a),b)};
g.Ye=function(){};
$e=function(a){if(a instanceof g.Ye)return a;if("function"==typeof a.sd)return a.sd(!1);if(g.Ba(a)){var b=0,c=new g.Ye;c.next=function(){for(;;){if(b>=a.length)throw g.Ze;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.af=function(a,b,c){if(g.Ba(a))try{(0,g.z)(a,b,c)}catch(d){if(d!==g.Ze)throw d;}else{a=$e(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Ze)throw d;}}};
Haa=function(a){if(g.Ba(a))return g.Pa(a);a=$e(a);var b=[];g.af(a,function(a){b.push(a)});
return b};
g.cf=function(a,b){this.F={};this.C=[];this.ef=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.bf(this,a)};
Iaa=function(a,b){return a===b};
g.ef=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.df(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.df(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.bf=function(a,b){if(b instanceof g.cf)for(var c=b.Oc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.df=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.gf=function(a){var b=[];ff(new Jaa,a,b);return b.join("")};
Jaa=function(){};
ff=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",h=0;h<b;h++)c.push(e),ff(a,d[h],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=b[d],"function"!=typeof h&&(c.push(e),hf(d,c),c.push(":"),ff(a,h,c),e=","));c.push("}");return}}switch(typeof b){case "string":hf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
hf=function(a,b){b.push('"',a.replace(Kaa,function(a){var b=jf[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),jf[a]=b);return b}),'"')};
g.kf=function(a){g.A.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.lf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ia(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.Dd(b)}};
Laa=function(a,b,c){ve(function(){a.apply(b,c)})};
g.mf=function(a){this.C=a};
nf=function(a){this.C=a};
of=function(a){this.data=a};
pf=function(a){return!g.ta(a)||a instanceof of?a:new of(a)};
g.qf=function(a){this.C=a};
g.rf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.rd)()||!!b&&b>(0,g.rd)()};
Maa=function(){};
sf=function(){};
g.tf=function(a){this.C=a};
g.uf=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
wf=function(a,b){this.F=a;this.C=null;if(g.w.ma&&!g.w.Bc(9)){vf||(vf=new g.cf);this.C=vf.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),vf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
xf=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Naa[a]})};
yf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
zf=function(a){return a.C.XMLDocument.documentElement};
Bf=function(a,b){this.F=a;this.C=b+"::"};
g.Cf=function(a){var b=new g.uf;return b.isAvailable()?a?new Bf(b,a):b:null};
Df=function(){this.C=[];this.F=-1};
Oaa=function(a){-1==a.F&&(a.F=(0,g.Ef)(a.C,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.F};
g.Ff=function(){var a=new Df;g.m.SVGElement&&g.m.document.createElementNS&&a.set(0);var b=qaa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.m.crypto&&g.m.crypto.subtle&&a.set(3);return Oaa(a)};
g.Gf=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
Hf=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.Jf=function(a){Hf(g.If,arguments)};
Kf=function(a,b){var c=g.C(a,void 0);c?c.push(b):g.Jf(a,[b])};
g.C=function(a,b){return a in g.If?g.If[a]:b};
Lf=function(a){var b=g.If.EXPERIMENT_FLAGS;return b?b[a]:void 0};
Nf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Mf(b)}}:a};
g.Mf=function(a,b,c,d,e){var h=g.q("yt.logging.errors.log");h?h(a,b,c,d,e):(h=g.C("ERRORS",[]),h.push([a,b,c,d,e]),g.Jf("ERRORS",h))};
g.Of=function(a){g.Mf(a,"WARNING",void 0,void 0,void 0)};
Paa=function(a,b,c,d,e){var h=!1,k=Lf("log_window_onerror_fraction");if(k&&Math.random()<k)h=!0;else{k=document.getElementsByTagName("script");for(var l=0,p=k.length;l<p;l++)if(0<k[l].src.indexOf("/debug-")){h=!0;break}}h&&(e||(g.ua(a)?h=a:ErrorEvent&&a instanceof ErrorEvent?(h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),a=Error(h),a.name="UnhandledWindowError",e=a,e.message=h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),g.Mf(e))};
g.D=function(a,b){return a?a.dataset?a.dataset[g.Pf(b)]:a.getAttribute("data-"+b):null};
g.Pf=function(a){return Qf[a]||(Qf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Rf=function(a,b){g.Ca(a)&&(a=Nf(a));return window.setTimeout(a,b)};
g.Sf=function(a,b){g.Ca(a)&&(a=Nf(a));return window.setInterval(a,b)};
g.Tf=function(a){window.clearTimeout(a)};
g.Uf=function(a){window.clearInterval(a)};
g.E=function(a,b,c){var d=Vf();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Wf[e]&&b.apply(c||window,d)};
try{Xf[a]?k():g.Rf(k,0)}catch(l){g.Mf(l)}},c);
Wf[e]=!0;Yf[a]||(Yf[a]=[]);Yf[a].push(e);return e}return 0};
g.Zf=function(a){var b=Vf();b&&(g.wa(a)?a=[a]:g.ua(a)&&(a=[parseInt(a,10)]),(0,g.z)(a,function(a){b.unsubscribeByKey(a);delete Wf[a]}))};
g.F=function(a,b){var c=Vf();return c?c.publish.apply(c,arguments):!1};
g.$f=function(a,b){Xf[a]=!0;var c=Vf();c=c?c.publish.apply(c,arguments):!1;Xf[a]=!1;return c};
Vf=function(){return g.q("ytPubsubPubsubInstance")};
g.bg=function(a,b){var c=g.ag(a);spf.script.load(a,c,b)};
g.cg=function(a){a=g.ag(a);spf.script.unload(a)};
g.ag=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Qaa,""),b=b.replace(Raa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.dg=function(){this.F=!1;this.C=null};
eg=function(a,b,c){try{a.C=new botguard.bg(b)}catch(d){g.Of(d)}c&&c(b)};
g.fg=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
Saa=function(){};
g.hg=function(a,b){return gg(a,0,b)};
g.ig=function(a,b){return gg(a,1,b)};
g.kg=function(a){for(var b=0,c=a.length;b<c;b++)g.jg(a[b])};
lg=function(){};
g.mg=function(){return!!g.q("yt.scheduler.instance")};
gg=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.Rf(a,c||0)};
g.jg=function(a){if(!isNaN(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.Tf(a)}};
Taa=function(){return parseInt(g.C("DCLKSTAT",0),10)};
g.og=function(a){return!!ng(a)};
g.pg=function(a){return Number(ng(a)||0)};
ng=function(a){return g.C("EXPERIMENT_FLAGS",{})[a]};
Uaa=function(){return g.qg.fe()};
Vaa=function(a){a=void 0===a?{}:a;return g.fg(g.qg,a)};
g.ug=function(a){var b=g.rg;a=void 0===a?g.q("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.sg(b),g.tg(b));b.ca_type="image";a&&(b.bid=a);return b};
g.sg=function(a){var b={};b.dt=g.vg;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Nc(b);return b};
g.tg=function(a){var b=g.Gd(a.C),c=g.Tc(a.C.top),d={};return d.bc=g.Ff(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Gf(a.F),d.wgl=!!g.Lc.WebGLRenderingContext,d};
Waa=function(){if(!wg)return null;var a=wg();return"open"in a?a:null};
g.yg=function(a){switch(g.xg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.xg=function(a){return a&&"status"in a?a.status:-1};
g.zg=function(a){var b=[];g.db(a,function(a,d){var c=g.Ua(d),h;g.Aa(a)?h=a:h=[a];(0,g.z)(h,function(a){""==a?b.push(c):b.push(c+"="+g.Ua(a))})});
return b.join("&")};
g.Ag=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var h=g.Va(e[0]||"");e=g.Va(e[1]||"");h in b?g.Aa(b[h])?g.Qa(b[h],e):b[h]=[b[h],e]:b[h]=e}}return b};
g.Cg=function(a,b){return g.Bg(a,b||{},!0)};
g.Bg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Ag(e[1]||"");for(var h in b)if(c||!g.fb(e,h))e[h]=b[h];return g.fd(a,e)+d};
Xaa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.Yc(1,a),e=g.Zc(a);d&&e?(d=c,c=a.match(g.Xc),d=d.match(g.Xc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.Zc(c)==e&&(Number(g.Yc(4,c))||null)==(Number(g.Yc(4,a))||null):!0;d=g.og("web_ajax_ignore_global_headers_if_set");for(var h in Dg)e=g.C(Dg[h]),!e||!c&&!Eg(a,h)||d&&void 0!==b[h]||(b[h]=e);if(c||Eg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();g.og("pass_biscotti_id_in_header_ajax")&&
(c||Eg(a,"X-YouTube-Ad-Signals"))&&(h=g.ug(void 0),b["X-YouTube-Ad-Signals"]=g.zg(h));return b};
Zaa=function(a){var b=window.location.search,c=g.Zc(a),d=g.Wc(g.Yc(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.Ag(b),h={};(0,g.z)(Yaa,function(a){e[a]&&(h[a]=e[a])});
return g.Bg(a,h||{},!1)};
Eg=function(a,b){var c=g.C("CORS_HEADER_WHITELIST")||{},d=g.Zc(a);return d?(c=c[d])?g.Ka(c,b):!1:!0};
$aa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Fg(a,b);var d=Gg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,h;fetch(a,c).then(function(a){if(!e){e=!0;h&&g.Tf(h);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.m;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Za&&b.Za.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.rs&&0<b.timeout&&(h=g.Rf(function(){e||(e=!0,g.Tf(h),b.rs.call(b.context||g.m))},b.timeout))}else g.G(a,b)};
g.G=function(a,b){var c=b.format||"JSON";a=Fg(a,b);var d=Gg(a,b),e=!1,h,k=Hg(a,function(a){if(!e){e=!0;h&&g.Tf(h);var d=g.yg(a),k=null,l=400<=a.status&&500>a.status,H=500<=a.status&&600>a.status;if(d||l||H)k=aba(c,a,b.qb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};l=b.context||g.m;d?b.onSuccess&&b.onSuccess.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Za&&b.Za.call(l,a,k)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Uc&&0<b.timeout&&(h=g.Rf(function(){e||(e=!0,k.abort(),g.Tf(h),b.Uc.call(b.context||g.m,k))},b.timeout));
return k};
Fg=function(a,b){b.EB&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.C("XSRF_FIELD_NAME",void 0),d=b.Qa;d&&(d[c]&&delete d[c],a=g.Cg(a,d));return a};
Gg=function(a,b){var c=g.C("XSRF_FIELD_NAME",void 0),d=g.C("XSRF_TOKEN",void 0),e=b.postBody||"",h=b.ia,k=g.C("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.gx||g.Zc(a)&&!b.withCredentials&&g.Zc(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(h||(h={}),h[c]=d);h&&g.ua(e)&&(e=g.Ag(e),g.ob(e,h),e=b.qt&&"JSON"==b.qt?JSON.stringify(e):g.ed(e));h=e||h&&!g.hb(h);!Jg&&h&&"POST"!=b.method&&(Jg=!0,g.Mf(Error("AJAX request with postData should use POST")));
return e};
aba=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Kg(b):null)d={},(0,g.z)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.Lg(a)})}c&&Mg(d);
return d};
Mg=function(a){if(g.Da(a))for(var b in a)"html_content"==b||g.Sa(b,"_html")?a[b]=g.gc(a[b],null):Mg(a[b])};
Kg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Lg=function(a){var b="";(0,g.z)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Ng=function(a,b){b.method="POST";b.ia||(b.ia={});return g.G(a,b)};
Hg=function(a,b,c,d,e,h,k){function l(){4==(p&&"readyState"in p?p.readyState:0)&&b&&Nf(b)(p)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var p=Waa();if(!p)return null;"onloadend"in p?p.addEventListener("loadend",l,!1):p.onreadystatechange=l;g.og("debug_forward_web_query_parameters")&&(a=Zaa(a));p.open(c,a,!0);h&&(p.responseType=h);k&&(p.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Xaa(a,e))for(var t in e)p.setRequestHeader(t,e[t]),"content-type"==t.toLowerCase()&&(c=!1);c&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded");p.send(d);
return p};
Og=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.Pg=function(a){var b=new Og;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.Qg=function(a){var b=new Og;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.Sg=function(a){var b=a.__yt_uid_key;b||(b=Rg(),a.__yt_uid_key=b);return b};
g.Tg=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=bba+"VisibilityState";if(b in a)return a[b]};
g.Ug=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in cba||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
Vg=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Wg=function(a){g.ta(a.C)||Vg(a);return a.C};
g.Xg=function(a){g.ta(a.F)||Vg(a);return a.F};
g.Zg=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.gb(Yg,function(e){var h=g.va(e[4])&&e[4]==!!d,k=g.Da(e[4])&&g.Da(d)&&g.kb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(h||k)})};
g.I=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Zg(a,b,c,d);if(e)return e;e=++$g.count+"";var h=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=h?function(d){d=new g.Ug(d);if(!g.Bc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.Ug(b);
b.currentTarget=a;return c.call(a,b)};
k=Nf(k);a.addEventListener?("mouseenter"==b&&h?b="mouseover":"mouseleave"==b&&h?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ah()||g.va(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);Yg[e]=[a,b,c,k,d];return e};
g.K=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.z)(a,function(a){if(a in Yg){var b=Yg[a],d=b[0],e=b[1],h=b[3];b=b[4];d.removeEventListener?ah()||g.va(b)?d.removeEventListener(e,h,b):d.removeEventListener(e,h,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,h);delete Yg[a]}}))};
g.bh=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.I(a,b,function(){g.K(e);c.apply(a,arguments)},d)};
g.ch=function(a){for(var b in Yg)Yg[b][0]==a&&g.K(b)};
g.dh=function(a){this.jc=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.I(window,"mousemove",(0,g.r)(this.X,this));this.N=g.Sf((0,g.r)(this.R,this),25)};
eh=function(){g.A.call(this);this.C=[]};
fh=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.lb(dba);this.assets=a.assets||{};this.attrs=a.attrs||g.lb(eba);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.gh=function(a){a instanceof fh||(a=new fh(a));return a};
g.jh=function(a,b,c,d,e,h){h=h||{};h.name=c||g.C("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=d||g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=hh||(e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),h.params=d.substr(0,500)),a=g.Ob(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&g.Ca(window.yterr)&&
window.yterr(a),ih[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Qa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":h.name},ia:{url:g.C("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};h.version&&(b["client.version"]=h.version);e&&(b.ia.stack=e);for(var k in h)b.ia["client."+k]=h[k];if(k=g.C("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ia[l]=k[l];g.G(g.C("ECATCHER_REPORT_HOST","")+
"/error_204",b);ih[a.message]=!0;hh++}};
g.ph=function(){g.Tf(g.kh);g.Tf(g.lh);g.lh=0;if(!g.hb(g.mh)){for(var a in g.mh){var b=nh[a];b&&(fba(a,b),delete g.mh[a])}g.hb(g.mh)||g.oh()}};
gba=function(){var a=[];for(e in g.mh){var b=qh[e]||{};qh[e]=b;for(var c in g.mh[e]){var d=rh(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.sh());for(var h in qh)b=qh[h],b.eventType=h in th?th[h]:"UNKNOWN_TYPE",c=uh[h],b.metricIntervalMs=c?e-c:e-g.vh,a.push(b),uh[h]=e,delete qh[h];return a};
g.oh=function(){g.og("web_gel_timeout_cap")&&!g.lh&&(g.lh=g.Rf(g.ph,3E4));g.Tf(g.kh);g.kh=g.Rf(g.ph,g.C("LOGGING_BATCH_TIMEOUT",g.wh||1E4))};
rh=function(a,b){b=void 0===b?"":b;g.mh[a]=g.mh[a]||{};g.mh[a][b]=g.mh[a][b]||[];return g.mh[a][b]};
fba=function(a,b){var c=hba[a],d=qh[a]||{};qh[a]=d;var e=Math.round(g.sh());for(t in g.mh[a]){var h=g.mb({context:g.xh(b.C)});h[c]=rh(a,t);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=h[c].length;var k=yh[t];if(k)a:{var l=t;if(k.videoId)var p="VIDEO";else if(k.playlistId)p="PLAYLIST";else break a;h.credentialTransferTokenTargetId=k;h.context=h.context||{};h.context.user=h.context.user||{};h.context.user.credentialTransferTokens=[{token:l,scope:p}]}delete yh[t];h.requestTimeMs=
e;if(k=g.C("EVENT_ID",void 0))p=(g.C("BATCH_CLIENT_COUNTER",void 0)||0)+1,p>iba&&(p=1),g.Jf("BATCH_CLIENT_COUNTER",p),k={serializedEventId:k,clientCounter:p},h.serializedClientEventId=k,zh&&Ah&&g.og("log_gel_rtt_web")&&(h.previousBatchInfo={serializedClientEventId:zh,roundtripMs:Ah}),zh=k,Ah=0;g.Bh(b,a,h,{retry:jba.has(a),onSuccess:(0,g.r)(kba,this,g.sh())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var t=d.diffCount||0;d.averageTimeBetweenDispatchesMs=t?(d.averageTimeBetweenDispatchesMs*
t+c)/(t+1):c;d.diffCount=t+1}d.previousDispatchMs=e};
kba=function(a){Ah=Math.round(g.sh()-a)};
g.Eh=function(a){var b=void 0===a?{}:a;a=void 0===b.FB?!0:b.FB;b=void 0===b.zJ?!1:b.zJ;if(null==g.q("_lact",window)){var c=parseInt(g.C("LACT"),10);c=isFinite(c)?(0,g.rd)()-Math.max(c,0):-1;g.n("_lact",c,window);g.n("_fact",c,window);-1==c&&g.Ch();g.I(document,"keydown",g.Ch);g.I(document,"keyup",g.Ch);g.I(document,"mousedown",g.Ch);g.I(document,"mouseup",g.Ch);a&&(b?g.I(window,"touchmove",function(){Dh("touchmove",200)},{passive:!0}):(g.I(window,"resize",function(){Dh("resize",200)}),g.I(window,
"scroll",function(){Dh("scroll",200)})));
new g.dh(function(){Dh("mouse",100)});
g.I(document,"touchstart",g.Ch,{passive:!0});g.I(document,"touchend",g.Ch,{passive:!0})}};
Dh=function(a,b){Fh[a]||(Fh[a]=!0,g.ig(function(){g.Ch();Fh[a]=!1},b))};
g.Ch=function(){null==g.q("_lact",window)&&g.Eh();var a=(0,g.rd)();g.n("_lact",a,window);-1==g.q("_fact",window)&&g.n("_fact",a,window);(a=g.q("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Gh=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.rd)()-a,0)};
g.Hh=function(a,b,c,d,e){var h={};h.eventTimeMs=Math.round(d||g.sh());h[a]=b;h.context={lastActivityMs:String(d?-1:g.Gh())};e?(a={},e.videoId?a.videoId=e.videoId:e.playlistId&&(a.playlistId=e.playlistId),yh[e.token]=a,e=rh("log_event",e.token)):e=rh("log_event");e.push(h);c&&(nh.log_event=new c);e.length>=(g.pg("web_logging_max_batch")||20)?g.ph():g.oh()};
g.xh=function(a){a={client:{hl:a.MB,gl:a.LB,clientName:a.JB,clientVersion:a.KB}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.C("DELEGATED_SESSION_ID")&&!g.og("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.C("DELEGATED_SESSION_ID")});return a};
Ih=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.C("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.OW||g.C("AUTHORIZATION"))||(a?b="Bearer "+g.q("gapi.auth.getToken")().NW:b=Jd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.C("SESSION_INDEX",0),g.og("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.C("DELEGATED_SESSION_ID")));return d};
Jh=function(a){a=Object.assign({},a);delete a.Authorization;var b=Jd();if(b){var c=new Ve;c.update(g.C("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Bb(c.digest(),!0)}return a};
g.Lh=function(a,b,c,d){g.Kh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Mh=function(a,b,c){g.Kh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.Nh=function(a){var b;(b=g.Cf(a))||(a=new wf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.qf(a):null;this.F=document.domain||window.location.hostname};
lba=function(a,b,c,d){if(d)return null;d=Oh.get("nextId",!0)||1;var e=Oh.get("requests",!0)||{};e[d]={method:a,request:b,authState:Jh(c),requestTime:Math.round(g.sh())};Oh.set("nextId",d+1,86400,!0);Oh.set("requests",e,86400,!0);return d};
Ph=function(a){var b=Oh.get("requests",!0)||{};delete b[a];Oh.set("requests",b,86400,!0)};
Qh=function(a){var b=Oh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.sh())-d.requestTime)){var e=d.authState,h=Jh(Ih(!1));g.kb(e,h)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.sh())),g.Bh(a,d.method,e,{}));delete b[c]}}Oh.set("requests",b,86400,!0)}};
g.Rh=function(a){var b=this;this.C=a||{HB:g.C("INNERTUBE_API_KEY",void 0),IB:g.C("INNERTUBE_API_VERSION",void 0),JB:g.C("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),KB:g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),MB:g.C("INNERTUBE_CONTEXT_HL",void 0),LB:g.C("INNERTUBE_CONTEXT_GL",void 0),NB:g.C("INNERTUBE_HOST_OVERRIDE",void 0)||"",OB:!!g.C("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.hg(function(){Qh(b)},5E3)};
g.Bh=function(a,b,c,d){!g.C("VISITOR_DATA")&&.01>Math.random()&&g.Mf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,qt:"JSON",Uc:function(){d.Uc()},
rs:d.Uc,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
Nj:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
qs:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},h="",k=a.C.NB;k&&(h=k);k=a.C.OB||!1;var l=Ih(k,h,d);Object.assign(e.headers,l);e.headers.Authorization&&!h&&(e.headers["x-origin"]=window.location.origin);var p=""+h+("/youtubei/"+a.C.IB+"/"+b)+"?alt=json&key="+a.C.HB,t;if(d.retry&&g.og("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=h&&(t=lba(b,c,l,k))){var y=e.onSuccess,H=e.Nj;e.onSuccess=function(a,b){Ph(t);y(a,b)};
c.Nj=function(a,b){Ph(t);H(a,b)}}try{g.og("use_fetch_for_op_xhr")?$aa(p,e):g.Ng(p,e)}catch(J){if("InvalidAccessError"==J)t&&(Ph(t),t=0),g.Mf(Error("An extension is blocking network request."),"WARNING");
else throw J;}t&&g.hg(function(){Qh(a)},5E3)};
g.Sh=function(a,b,c){var d=g.Rh;g.C("ytLoggingEventsDefaultDisabled",!1)&&g.Rh==g.Rh&&(d=null);g.Hh(a,b,d,c,void 0)};
g.Th=function(){g.og("log_web_meta")&&gba().forEach(function(a){g.Sh("delayedEventMetricCaptured",a)})};
g.Uh=function(a){this.C=a};
g.Vh=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.Vh(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.Wh=function(a,b,c){(0,g.z)(b,function(b){g.Hh("visualElementHidden",{csn:a,ve:g.Vh(b),eventType:c?16:8},g.Rh,void 0,void 0)})};
Yh=function(a,b){var c=Object.keys(a).join("");Xh("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Sh("latencyActionInfo",a))};
Xh=function(a){Zh[a]=Zh[a]||{count:0};var b=Zh[a];b.count++;b.time=g.sh();$h||($h=g.hg(mba,5E3));if(10<b.count){if(11==b.count){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;g.jh(c,b)}return!0}return!1};
mba=function(){var a=g.sh(),b;for(b in Zh)6E4<a-Zh[b].time&&delete Zh[b];$h=0};
bi=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.rd)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ai)for(a=1,b=0;b<ai.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ai.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.gi=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(ci==a)return;ci=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Gh()>b)&&"visible"==g.Tg()){b=-1;g.di&&(b=Math.round(g.sh()-g.di));var c=String;var d=g.q("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.rd)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:ei,index:String(fi),lastEventDeltaMs:String(b),trigger:a};g.Hh("foregroundHeartbeat",
a,g.Rh);g.n("_fact",-1,window);fi++;g.di=g.sh()}};
g.hi=function(a){a&&g.Hh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ei,clientScreenNonce:a},g.Rh)};
ii=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
ji=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
ki=function(a){return g.C(ji(void 0===a?0:a),void 0)};
g.li=function(){var a=ki(0),b;a?b=new g.Uh({veType:a,youtubeData:void 0}):b=null;return b};
g.mi=function(a){a=void 0===a?0:a;var b=g.C(ii(a));b||0!=a||(b=g.C("EVENT_ID"));return b?b:null};
g.ni=function(a,b,c){c=void 0===c?0:c;if(a!==g.C(ii(c))||b!==g.C(ji(c)))g.Jf(ii(c),a),g.Jf(ji(c),b),0==c&&(b=function(){setTimeout(function(){g.hi(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
oi=function(){var a=g.li(),b=g.mi();b&&a&&g.Wh(b,[a],!0)};
g.pi=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Nf(d):null;this.H=e?Nf(e):null;this.G=[];this.C=this.F=0};
g.qi=function(a){g.jg(a.F);a.F=g.ig((0,g.r)(a.init,a))};
g.ti=function(a){a.name in ri&&si(a.name);ri[a.name]={reqs:[],disable:(0,g.r)(a.disable,a)};(0,g.z)(a.deps,function(b){if(!(b in ri))throw Error("Module "+b+" required by "+a.name);ri[b].reqs.push(a.name)});
a.enable()};
si=function(a){if(a in ri){var b=ri[a];(0,g.z)(b.reqs,function(a){si(a)});
try{b.disable()}catch(c){}delete ri[a]}};
vi=function(a){Hf(g.ui,arguments)};
g.wi=function(a){return a in g.ui};
xi=function(a){Hf(g.ui,arguments)};
g.zi=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.w.cd(),c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Tb(g.Wb(a)),"about:invalid#zClosurez"===a?a="":(a=g.fc(g.hc(a)),a=g.Ua(g.gf(a))),g.Ta(a)||(a=g.vc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.Ac(a).body.appendChild(a))):e?Hg(a,b,"POST",e,d):g.C("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Hg(a,b,"GET","",d):(Lf("web_use_beacon_api_for_ad_click_server_pings")&&-1!=g.Wc(g.Yc(5,a)).indexOf("/aclk")&&
"1"===g.id(a,"ae")&&"1"===g.id(a,"act")?yi(a)?(b&&b(),d=!0):d=!1:d=!1,d||nba(a,b)))};
yi=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
nba=function(a,b){var c=new Image,d=""+oba++;Ai[d]=c;c.onload=c.onerror=function(){b&&Ai[d]&&b();delete Ai[d]};
c.src=a};
g.Bi=function(a,b){a=a||"";var c=a.match(pba);spf.style.load(a,c?c[1]:"",b)};
g.Ci=function(a,b,c){var d=g.C("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Zc(window.location.href);e&&d.push(e);e=g.Zc(a);if(g.Ka(d,e)||!e&&g.Ra(a,"/"))if(g.og("autoescape_tempdata_url")&&(d=document.createElement("a"),g.ic(d,a),a=d.href),a&&(a=g.$c(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.mi();c?(c=parseInt(c,10),isFinite(c)&&0<c&&(a="ST-"+g.ab(a).toString(36),b=b?g.ed(b):"",g.Lh(a,b,c||5))):(c="ST-"+g.ab(a).toString(36),b=b?g.ed(b):"",g.Lh(c,b,5))}};
g.Di=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.jc(d.location,g.fd(a,b)+c)};
g.Hi=function(a,b){b&&g.Ci(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.Di(a)};
g.Ii=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.C("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Ci(a,b);if(c)return!1;g.Hi(a);return!0};
Ki=function(a,b){g.A.call(this);this.H=this.oa=a;this.N=b;this.L=!1;this.api={};this.Z=this.X=null;this.J=new g.kf;g.Md(this,this.J);this.D={};this.la=this.ha=this.F=this.nb=this.C=null;this.V=!1;this.G=this.R=null;this.ra={};this.wb=["onReady"];this.Ya=null;this.rb=NaN;this.W={};Ji(this);this.yi("WATCH_LATER_VIDEO_ADDED",this.TG.bind(this));this.yi("WATCH_LATER_VIDEO_REMOVED",this.UG.bind(this));this.yi("onAdAnnounce",this.Yv.bind(this));this.yb=new eh(this);g.Md(this,this.yb)};
Li=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Ni=function(a){var b=!0,c=Mi(a);c&&a.C&&(a=a.C,b=g.D(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
qba=function(a){if(!a.sb()&&!a.V){var b=Ni(a);if(b&&"html5"==(Mi(a)?"html5":null))a.la="html5",a.L||Oi(a);else if(Pi(a),a.la="html5",b&&a.G)a.oa.appendChild(a.G),Oi(a);else{a.C.loaded=!0;var c=!1;a.R=function(){c=!0;var b=a.C.clone();g.q("yt.player.Application.create")(a.oa,b);Oi(a)};
a.V=!0;b?a.R():(g.bg(a.C.assets.js,a.R),g.Bi(a.C.assets.css),Qi(a)&&!c&&g.n("yt.player.Application.create",null,void 0))}}};
Mi=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
Oi=function(a){if(!a.sb()){var b=Mi(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||rba(a)):a.rb=g.Rf(function(){Oi(a)},50)}};
rba=function(a){Ji(a);a.L=!0;var b=Mi(a);b.addEventListener&&(a.X=Ri(a,b,"addEventListener"));b.removeEventListener&&(a.Z=Ri(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Ri(a,b,e))}for(var h in a.D)a.X(h,a.D[h]);Li(a);a.ha&&a.ha(a.api);a.J.qa("onReady",a.api)};
Ri=function(a,b,c){var d=b[c];return function(){try{return a.Ya=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Ya=e,g.Of(e))}}};
Ji=function(a){a.L=!1;if(a.Z)for(var b in a.D)a.Z(b,a.D[b]);for(var c in a.W)g.Tf(parseInt(c,10));a.W={};a.X=null;a.Z=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.yi.bind(a);a.api.removeEventListener=a.oL.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Xx.bind(a);a.api.getPlayerType=a.qy.bind(a);a.api.getCurrentVideoConfig=a.Ax.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.MC.bind(a)};
Si=function(a,b){var c=b;if("string"==typeof b){if(a.ra[b])return a.ra[b];c=function(){var a=g.q(b);a&&a.apply(g.m,arguments)};
a.ra[b]=c}return c?c:null};
sba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.m[c]=function(c){var d=g.Rf(function(){a.sb()||(a.J.qa(b,c),g.ib(a.W,String(d)))},0);
g.jb(a.W,String(d),!0)};
return c};
Pi=function(a){a.cancel();Ji(a);a.la=null;a.C&&(a.C.loaded=!1);var b=Mi(a);b&&(Ni(a)||!Qi(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.yc(a.oa)};
Qi=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.Vi=function(a,b){a=g.ua(a)?g.oc(a):a;var c=g.Ti+"_"+g.Fa(a),d=g.Ui[c];if(d)return d.loadNewVideoConfig(b),d.api;d=new Ki(a,c);g.Ui[c]=d;g.F("player-added",d.api);g.Kd(d,g.u(tba,d));g.Rf(function(){d.loadNewVideoConfig(b)},0);
return d.api};
tba=function(a){delete g.Ui[a.N]};
g.Wi=function(a){if(!a)return null;var b=g.Ti+"_"+g.Fa(a),c=g.Ui[b];c||(c=new Ki(a,b),g.Ui[b]=c);return c.api};
g.Xi=function(a){return g.Wi(document.getElementById(a))};
g.Yi=function(a,b){this.version=a;this.args=b};
g.Zi=function(a,b){this.topic=a;this.C=b};
g.aj=function(a,b){var c=g.$i();c&&c.publish.call(c,a.toString(),a,b)};
g.$i=function(){return g.q("ytPubsub2Pubsub2Instance")};
g.cj=function(a,b){var c={};c.key=a;c.value=b;return bj().then(function(a){return new Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.dj=function(a){return bj().then(function(b){return new Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return Promise.reject("Unable to open IndexedDB.")})};
bj=function(){return ej?Promise.resolve(ej):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))ej=b,a(ej);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),bj()};
c.onupgradeneeded=uba})};
uba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
vba=function(a){if(fj.getEntriesByType){var b=fj.getEntriesByType("paint");if(b=g.Ia(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Ca(b)){b=b();var c=1E3*Math.min(b.requestTime||Infinity,b.startLoadTime||Infinity);c=Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
gj=function(){var a=g.C("TIMING_TICK_EXPIRATION");a||(a={},g.Jf("TIMING_TICK_EXPIRATION",a));return a};
hj=function(){var a=gj(),b;for(b in a)g.jg(a[b]);g.Jf("TIMING_TICK_EXPIRATION",{})};
ij=function(a,b){g.Yi.call(this,1,arguments)};
jj=function(a,b){g.Yi.call(this,1,arguments)};
Aba=function(){kj=!1;var a=g.C("TIMING_INFO",{});for(b in a)lj(b,a[b]);lj("is_nav",1);(a=g.mi())&&lj("csn",a);(a=g.C("PREVIOUS_ACTION",void 0))&&lj("pa",a);var b=mj();b.p=g.C("CLIENT_PROTOCOL")||"unknown";b.t=g.C("CLIENT_TRANSPORT")||"unknown";lj("yt_vis",wba());if("cold"==b.yt_lt){a=fj.timing||{};a.navigationStart&&(nj("srt",a.responseStart),1!=b.prerender&&oj("n",a.navigationStart));b=vba(a);0<b&&nj("fpt",b);pj(a);fj.getEntriesByType&&xba();a=[];if(document.querySelector&&fj&&fj.getEntriesByName)for(var c in qj)b=
qj[c],yba(c,b)&&a.push(b);a.length&&lj("rc",a.join(","))}rj(void 0)&&(c={},c.actionType=zba[g.C("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=sj(void 0),Yh(c,a));if("cold"==mj().yt_lt){a=tj();c=uj();for(var d in a)g.Ra(d,"_")||"tick_"+d in c||vj(d,a[d]);d=mj();for(var e in d)"info_"+e in c||wj(e,d[e])}xj(!0);g.yj(!1)};
Bj=function(){zj(void 0);Bba();Aj(!1,void 0);g.C("TIMING_ACTION")&&g.Jf("PREVIOUS_ACTION",g.C("TIMING_ACTION"));g.Jf("TIMING_ACTION","")};
nj=function(a,b,c){b||"_"==a[0]||Cj(a,c);var d=tj(c),e=b||g.sh();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=gj();var h=e[a];h&&(g.jg(h),e[a]=0);vj(a,b,c)||g.yj(!1,c);return d[a]};
Cj=function(a,b){fj.mark&&(g.Ra(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),fj.mark(a))};
oj=function(a,b){lj("yt_sts",a,void 0);nj("_start",b,void 0)};
lj=function(a,b,c){mj(c)[a]=b;wj(a,b,c)};
Dj=function(a){var b=tj(a);if(b.aft)return b.aft;a=g.C((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
pj=function(a,b){nj("nreqs",a.requestStart,b);nj("nress",a.responseStart,b);nj("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(nj("nrs",a.redirectStart,b),nj("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(nj("ndnss",a.domainLookupStart,b),nj("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(nj("ntcps",a.connectStart,b),nj("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(nj("nstcps",a.secureConnectionStart,
b),nj("ntcpe",a.connectEnd,b))};
g.yj=function(a,b){if(!Ej(b)){var c=g.C((b||"")+"TIMING_ACTION",void 0),d=tj(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Dj(b)))if(Fj||(g.aj(Cba,new ij(Math.round(c-d._start),b)),Fj=!0),a||b)Gj(b);else{c=!0;var e=g.C("TIMING_WAIT",[]);if(e.length)for(var h=0,k=e.length;h<k;++h)if(!(e[h]in d)){c=!1;break}c&&Gj(b)}}};
wba=function(){switch(g.Tg()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Hj=function(a){if(!Ej(void 0)){var b=g.C("CSI_SERVICE_NAME","youtube");g.C("TIMING_ACTION",void 0)&&b&&(nj("aa",void 0,void 0),lj("ap",1,void 0),lj("yt_fss",a,void 0),Gj(void 0))}};
vj=function(a,b,c){uj(c)["tick_"+a]=b;c||b||g.sh();return rj(c)?(c=sj(c),"_start"==a?Xh("baseline_"+c)||g.Sh("latencyActionBaselined",{clientActionNonce:c},b):Xh("tick_"+a+"_"+c)||g.Sh("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
wj=function(a,b,c){uj(c)["info_"+a]=b;if(rj(c))if(a in Ij){var d=Ij[a];g.Ka(Dba,d)&&(b=!!b);a in Jj&&(b=Jj[a]+b.toUpperCase());if(rj(c)){a={};d=d.split(".");for(var e=a,h=0;h<d.length-1;h++)e[d[h]]=e[d[h]]||{},e=e[d[h]];e[d[d.length-1]]=b;c=sj(c);Yh(a,c)}}else g.Ka(Eba,a)||g.Mf(Error("Unknown label "+a+" logged with GEL CSI."))};
Kj=function(a){return Math.round(fj.timing.navigationStart+a)};
xba=function(){var a=window.location.protocol,b=fj.getEntriesByType("resource");b=(0,g.Lj)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20190201000036/https://fonts.gstatic.com/s/")});
(b=(0,g.Ef)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(nj("wffs",Kj(b.startTime)),nj("wffe",Kj(b.responseEnd)))};
yba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=fj.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,nj("rsf_"+b,d+Math.round(c.fetchStart)),nj("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&("rc"in mj(void 0)||lj("rc",""),0===c.transferSize))?!0:!1:!1};
xj=function(a){g.n("ytglobal.timingready_",a,void 0)};
sj=function(a){var b=Mj(a).nonce;b||(b=bi(),Mj(a).nonce=b);return b};
tj=function(a){return Mj(a).tick};
mj=function(a){return Mj(a).info};
uj=function(a){a=Mj(a);"gel"in a||(a.gel={});return a.gel};
Mj=function(a){return g.q("ytcsi."+(a||"")+"data_")||zj(a)};
zj=function(a){var b={tick:{},info:{}};g.n("ytcsi."+(a||"")+"data_",b,void 0);return b};
Ej=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
Aj=function(a,b){g.n("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Fba=function(a){var b=tj(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==mj(a).yt_pvis};
rj=function(a){return kj||g.og("csi_on_gel")||!!Mj(a).useGel};
Gj=function(a){hj();if(!rj(a)){var b=tj(a),c=mj(a),d=b._start;for(k in b)if(g.Ra(k,"_")&&g.Aa(b[k])){var e=k.slice(1);if(e in Gba){var h=(0,g.Nj)(b[k],function(a){return Math.round(a-d)});
c["all_"+e]=h.join()}delete b[k]}h=g.C("CSI_SERVICE_NAME","youtube");var k={v:2,s:h,action:g.C((a||"")+"TIMING_ACTION",void 0)};e=lj.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var l=window.location.protocol+g.q("ytplayer.config.assets.js");(l=fj.getEntriesByName?fj.getEntriesByName(l)[0]:null)?c.h5jse=Math.round(c.h5jse-l.responseEnd):delete c.h5jse}b.aft=Dj(a);Fba(a)&&"youtube"==h&&(lj("yt_lt","hot_bg",a),h=b.vc,l=b.pbs,delete b.aft,c.aft=Math.round(l-h));for(var p in c)"_"!=p.charAt(0)&&(k[p]=
c[p]);b.ps=g.sh();p={};h=[];for(var t in b)"_"!=t.charAt(0)&&(l=Math.round(b[t]-d),p[t]=l,h.push(t+"."+l));k.rt=h.join(",");(b=g.q("ytdebug.logTiming"))&&b(k,p);Hba(k,!!c.ap,a);g.aj(Iba,new jj(p.aft+(e||0),a))}};
Hba=function(a,b,c){if(g.og("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.n("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var h=void 0===h?"":h;yi(a,h)||g.zi(a,void 0,void 0,void 0,h)}else g.zi(a);Aj(!0,c)};
Oba=function(){Oj++;var a=g.sc(),b=new g.Hc(0,0,a.width,a.height);Pj("vph",a.height);Pj("vpw",a.width);(0,g.Qj)("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;Rj.start();for(var h=0;h<c;h++){var k=a[h];if(Sj(k,b)){var l=Jba(k);l.then(Kba);d.push(l);Tj.push(l);k.loadTime||(e=!1)}}e&&Pj("yt_eil",1);(0,g.Qj)("vpcc");b=g.He(d).then(Lba);g.Je(b,Mba);b.then(Nba);Tj.push(b);return b};
Nba=function(){Rj.stop()};
Mba=function(){(0,g.Qj)("vpr")};
Sj=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.Sg(c);if(e in Uj)return!0;if(e in Vj)return!1;var h=window.getComputedStyle(c);if("none"==h.display||"hidden"==h.visibility)return Vj[e]=!0,!1;h=c.getBoundingClientRect();if(!(b.left<=h.left+h.width&&h.left<=b.left+b.width&&b.top<=h.top+h.height&&h.top<=b.top+b.height))return Vj[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Uj[d[c]]=!0;return!0};
Lba=function(a){var b=g.sc();b=new g.Hc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var h=a[d].time;Sj(a[d].DB,b)&&c<h&&(c=h)}return c};
Jba=function(a){var b=Oj;return new g.Ce(function(c,d){var e={DB:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){Oj!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},Wj.push(a))})};
Kba=function(a){Rj.start();a=a.time;Xj<a&&(Xj=a,(0,g.Qj)("lim",a))};
Pba=function(){(0,g.Qj)("vptl",Xj);(0,g.Qj)("vpl",Xj)};
Qba=function(){Tj.forEach(function(a){a.cancel()});
Xj=Tj.length=0;Uj={};Vj={};Wj.forEach(function(a){a.slt=void 0});
Wj.length=0};
g.Yj=function(a,b){g.zi("/gen_204?"+a,b)};
Rba=function(a){if(null==a)return[];var b=[];g.og("ima_prevent_mpu_queries_on_cached_playback")&&0>Zj.indexOf("ad3_module")&&Zj.push("ad3_module");Zj.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.ak=function(){return g.B(g.x("page-container"),"remote-connected")};
Sba=function(){bk=g.Sf(ck,5E3);var a=g.dk();a?(a.addEventListener("onReady",ck),a.addEventListener("onStateChange",ck)):ek("unable to init PP monitor")};
hk=function(a){for(var b in g.Ui){var c=g.Ui[b];c&&c.cancel()}if(a=a||null){b=g.dk();var d=!0;c=g.fk;g.fk=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(gk="",g.Vi("player-api",a)):b.playVideo();a=g.gh(a);a.loaded=!0}ck();g.n("ytplayer.config",a,void 0)};
g.dk=function(){return g.Xi("player-api")};
ck=function(){var a=g.dk();if(a){var b=g.x("player");b=!b||g.B(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.C("PAGE_NAME"),e=g.ak();!c||d||e||(ek("PP playing off watch (paused)"),a.pauseVideo());b&&d?ek("PP off-screen on watch"):b||d||ek("PP !off-screen off watch")}};
ek=function(a){var b=g.C("PAGE_NAME");b&&(Error(a).params=[b,gk,g.q("_spf_state.nav-counter")],g.n("yt.www.persistentplayer.issue",a,void 0),g.Mf(Error(a),"WARNING"))};
jk=function(){(0,g.Qj)("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){(0,g.Qj)("cpt");g.F("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?((0,g.Qj)("cpt"),g.F("on_cpt_tick",(new Date).getTime())):setTimeout(function(){(0,g.Qj)("cpt");
g.F("on_cpt_tick",(new Date).getTime())},0);
Tba();g.C("CSI_VIEWPORT")&&(ik=Oba(),ik.then(function(a){(0,g.Qj)("vpl",a);ik=null},function(){}))};
Tba=function(){kk("init");var a=g.C("PAGE_NAME",void 0);a&&kk("init-"+a)};
kk=function(a){g.mg()?lk.push(g.ig(g.u(g.$f,a),0)):g.F(a)};
mk=function(){g.kg(lk);lk.length=0;Qba();ik&&(ik.cancel(),ik=null);var a=g.C("PAGE_NAME",void 0);a&&g.$f("dispose-"+a);g.$f("dispose")};
Uba=function(){jk()};
Vba=function(){g.C("TIMING_REPORT_ON_UNLOAD")&&g.yj(!0);Hj("u");g.gi("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");oi();g.Th();g.ph();mk();g.$f("pageunload")};
nk=function(){g.Ch()};
ok=function(){window.yt_spf_loaded_history=!0;g.Ch()};
uk=function(){pk=1;qk=sk=0;g.C("TIMING_REPORT_ON_UNLOAD")&&g.yj(!0);g.og("warm_load_nav_start_web")?(Hj("n"),Bj(),xj(!1),g.Jf("TIMING_AFT_KEYS",[]),lj("yt_lt","warm"),g.Jf("TIMING_ACTION",""),g.Jf("TIMING_WAIT",[]),hj(),oj("n")):(Hj("n"),Bj(),oj("n"));Cj("nr");tk(Wba);oi();g.$f("navigate")};
yk=function(a){a=a.detail.part||a.detail.partial;(0,g.Qj)("nc"+sk);++sk;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.Qj)("bc");else{var b=1==pk;pk=2;b?(tk(Xba),vk()):tk(Yba);if(b=a&&a.data&&a.data.swfcfg)wk(a.timing,b.args),xk(b)}};
zk=function(){(0,g.Qj)("np"+qk);++qk};
Ak=function(a){a=a.detail.response;var b=1==pk;pk=3;b&&(tk(Zba),vk());if(b=a.data&&a.data.swfcfg)wk(a.timing,b.args),xk(b)};
Ek=function(a){(0,g.Qj)("nd");a=a.detail.response;g.Bk=a.cacheKey;a=a.timing;var b=window._spf_state;g.Ck.navigationCount=b&&b["nav-counter"]||0;g.og("warm_load_nav_start_web")?(0,g.Qj)("srt",a.responseStart):(oj("ne",a.responseStart),Pj("srt",Math.max(0,a.responseStart-a.navigationStart)));Pj("yt_lt",a.spfCached?"hot":"warm");(0,g.Qj)("pfs",a.fetchStart);(0,g.Qj)("pfrs",a.responseStart);"redirectStart"in a&&$ba(a);tk(Dk);document.getElementById("content").style.height="";jk();pk=0};
Fk=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Mf(a)};
Gk=function(a){g.Yj(g.ed({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
bca=function(){aca();window.yt_spf_loaded_history=!1};
cca=function(){};
vk=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");mk();a=g.C("PREVIOUS_ACTION");for(var b in g.If)delete g.If[b];g.Jf("PREVIOUS_ACTION",a);g.Jf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.n("ytplayer.config",null,void 0);(b=g.dk())&&b.stopVideo?(b.stopVideo(),b.getLastError()&&((b=document.getElementById("movie_player"))&&b.stopVideo?(b.stopVideo(),gk="recovered"):gk="missing2")):gk="missing";ck()};
xk=function(a){"cfg"in tj(void 0)||(0,g.Qj)("cfg");hk(a)};
tk=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.jg(Hk);Hk=g.ig(function(){var c=a[0],d=a[1],e=a[2];b.className="";var h=b.style;h.transitionDuration=h.webkitTransitionDuration=c+"ms";h.width=d+"%";g.Tf(Ik);Ik=g.Rf(function(){b.className=e},c)},0)};
aca=function(){var a=Dk[0]+50;g.Tf(Ik);Ik=g.Rf(function(){var a=document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
wk=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Rba(b));g.C("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Yj(g.ed(c)))};
Kk=function(){return"granted"!=Notification.permission?Promise.resolve():Jk().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
Mk=function(){Lk({type:"notifications_register",data:g.C("ID_TOKEN")})};
Jk=function(){return navigator.serviceWorker.getRegistration(String(ng("service_worker_scope")||""))};
Nk=function(a){return!(!a||!a.pushManager)};
Lk=function(a){Jk().then(function(b){if(!b||!b.active)return Promise.reject();b.active.postMessage(a);return Promise.resolve()})};
dca=function(){if(!g.C("LOGGED_IN",void 0))return Promise.resolve(!1);var a=String(ng("service_worker_push_force_notification_prompt_tag")||"");return a?g.dj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
hca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?Jk().then(Nk):Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=Kk().then(function(){Lk({type:"notifications_check_registration",data:g.C("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return eca(a)}).then(function(a){if(a)return fca(),gca().then(function(){})})})};
eca=function(a){return g.C("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.C("LOGGED_IN",void 0)&&(void 0===a?0:a)?dca().then(function(a){if(a)return!0;a=[ica(),jca()];g.C("LOGGED_IN",void 0)||a.push(kca());return Promise.all(a).then(function(a){return a.every(function(a){return a})})}):Promise.resolve(!1)};
kca=function(){var a=g.pg("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.dj("WatchCount").then(function(b){return b>=a})};
gca=function(){var a=arguments;g.og("service_worker_push_prompt_modal_enable")&&lca();return Notification.requestPermission().then(function(a){Ok();var b=document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return Kk().then(function(){g.cj("NotificationsDisabled",!1);Mk();return Promise.resolve(!0)});
"denied"==a&&Mk();return Promise.resolve(!1)})["catch"](function(){Ok();
return Promise.reject.apply(Promise,a instanceof Array?a:aaa(g.da(a)))})};
fca=function(){g.dj("PromptCount").then(function(a){return g.cj("PromptCount",a+1)}).then(function(){return g.cj("PromptTime",(0,g.rd)())}).then(function(){var a=String(ng("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.dj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.cj("PromptTags",JSON.stringify(c))})})};
ica=function(){return-1==g.pg("service_worker_push_prompt_cap")?Promise.resolve(!0):g.dj("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.pg("service_worker_push_prompt_cap"))})};
jca=function(){var a=g.pg("service_worker_push_prompt_delay_microseconds");return a?g.dj("PromptTime").then(function(b){return Promise.resolve((0,g.rd)()-a>(b||0))}):Promise.resolve(!0)};
mca=function(){Pk||Ok()};
Qk=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
lca=function(){var a=g.x("yt-push-prompt-modal-bg");Pk=g.og("service_worker_push_prompt_modal_ignore_click");a?Qk(a):(a=g.vc("div",{id:"yt-push-prompt-modal-bg"}),Qk(a),document.body.appendChild(a),g.bh(document,"click",mca))};
Ok=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.zc(a)};
nca=function(a){return Nk(a)?hca():Promise.resolve()};
pca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(oca)})};
rca=function(){var a="/sw.js",b=g.C("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=Rk(a);g.og("service_worker_push_enabled")&&a.then(qca).then(nca)};
qca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
oca=function(a){a&&Rk("/sw.js?0",a.scope)};
Rk=function(a,b){return navigator.serviceWorker.register(a,{scope:b||String(ng("service_worker_scope")||"")||"/"})};
Sk=function(){g.pi.call(this,"www/base");this.D=0};
Tk=function(a){(a=a.detail.name)&&si(a)};
g.aa=[];ea="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)Uk=Object.setPrototypeOf;else{var Vk;a:{var sca={Xv:!0},Wk={};try{Wk.__proto__=sca;Vk=Wk.Xv;break a}catch(a){}Vk=!1}Uk=Vk?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var fa=Uk,ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
na("Promise",function(a){function b(a){this.F=0;this.D=void 0;this.C=[];var b=this.H();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){if(null==this.C){this.C=[];var b=this;this.D(function(){b.H()})}this.C.push(a)};
var e=ja.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.H=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(t){this.G(t)}}}this.C=null};
c.prototype.G=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.X(a):this.L(a)}};
b.prototype.X=function(a){var b=void 0;try{b=a.then}catch(p){this.G(p);return}"function"==typeof b?this.la(b,a):this.L(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.L=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.F)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.F);this.F=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var a=0;a<this.C.length;++a)h.F(this.C[a]);this.C=null}};
var h=new c;b.prototype.V=function(a){var b=this.H();a.Gi(b.resolve,b.reject)};
b.prototype.la=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(t){c.reject(t)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(ma){h(ma)}}:b}
var e,h,k=new b(function(a,b){e=a;h=b});
this.Gi(d(a,e),d(c,h));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Gi=function(a,b){function c(){switch(d.F){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.F);}}
var d=this;null==this.C?h.F(c):this.C.push(c)};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.da(a),h=e.next();!h.done;h=e.next())d(h.value).Gi(b,c)})};
b.all=function(a){var c=g.da(a),e=c.next();return e.done?d([]):new b(function(a,b){function h(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Gi(h(k.length-1),b),e=c.next();while(!e.done)})};
return b});
var baa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
na("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=ra(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),h=a.length;0<h&&0<e;)if(b[--e]!=a[--h])return!1;return 0>=h}});
na("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=ra(this,a,"startsWith");a+="";for(var e=b.length,h=a.length,k=Math.max(0,Math.min(c|0,b.length)),l=0;l<h&&k<e;)if(b[k++]!=a[l++])return!1;return l>=h}});
var tca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
na("Object.assign",function(a){return a||tca});
na("WeakMap",function(a){function b(a){this.jb=(k+=Math.random()+1).toString();if(a){a=g.da(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){sa(a,h)||ka(a,h,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(y){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var k=0;b.prototype.set=function(a,b){d(a);if(!sa(a,h))throw Error("WeakMap key fail: "+a);a[h][this.jb]=b;return this};
b.prototype.get=function(a){return sa(a,h)?a[h][this.jb]:void 0};
b.prototype.has=function(a){return sa(a,h)&&sa(a[h],this.jb)};
b.prototype["delete"]=function(a){return sa(a,h)&&sa(a[h],this.jb)?delete a[h][this.jb]:!1};
return b});
na("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return pa(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?h.has(b)?c=h.get(b):(c=""+ ++k,h.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&sa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,xc:l}}return{id:c,list:d,index:-1,xc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.da(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.da([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(H){return!1}}())return a;
qa();var h=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.xc?c.xc.value=b:(c.xc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.xc),this.F.previous.next=c.xc,this.F.previous=c.xc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.xc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.xc.previous.next=a.xc.next,a.xc.next.previous=a.xc.previous,a.xc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).xc};
e.prototype.get=function(a){return(a=d(this,a).xc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var k=0;return e});
na("Set",function(a){function b(a){this.C=new Map;if(a){a=g.da(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.da([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),h=e.next();if(h.done||h.value[0]!=b||h.value[1]!=b)return!1;h=e.next();return h.done||h.value[0]==b||4!=h.value[0].x||h.value[1]!=h.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
qa();b.prototype.add=function(a){a=0===a?0:a;this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
na("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
na("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==ra(this,a,"includes").indexOf(a,c||0)}});
var uca=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ea(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
na("Reflect.construct",function(){return uca});
na("Array.from",function(a){return a?a:function(a,c,d){c=null!=c?c:function(a){return a};
var b=[],h="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if("function"==typeof h){a=h.call(a);for(var k=0;!(h=a.next()).done;)b.push(c.call(d,h.value,k++))}else for(h=a.length,k=0;k<h;k++)b.push(c.call(d,a[k],k));return b}});
na("Object.entries",function(a){return a?a:function(a){var b=[],d;for(d in a)sa(a,d)&&b.push([d,a[d]]);return b}});
g.Xk=g.Xk||{};g.m=this;Ea="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.rd=Date.now||function(){return+new Date};g.Rc=document;g.Lc=window;g.v(g.Ga,Error);g.Ga.prototype.name="CustomError";g.Ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.ua(a))return g.ua(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.vca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.ua(a))return g.ua(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)};
g.Lj=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],h=0,k=g.ua(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var p=k[l];
b.call(c,p,l,a)&&(e[h++]=p)}return e};
g.Nj=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),h=g.ua(a)?a.split(""):a,k=0;k<d;k++)k in h&&(e[k]=b.call(c,h[k],k,a));
return e};
g.Ef=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.r)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.z)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Yk=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return!0;
return!1};
g.Zk=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&!b.call(c,e[h],h,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Ya=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.$k=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var al=g.m.navigator;if(al){var bl=al.userAgent;if(bl){g.bb=bl;break a}}g.bb=""};var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.wb[" "]=g.xa;g.w={Gk:!1,Fk:!1,Un:!1,Yn:!1,Ik:!1,Jk:!1,Fv:!1};g.w.hh=g.w.Gk||g.w.Fk||g.w.Un||g.w.Ik||g.w.Yn||g.w.Jk;g.w.cd=function(){return g.bb};
g.w.Gl=function(){return g.m.navigator||null};
g.w.QW=function(){return g.w.Gl()};
g.w.Rb=g.w.hh?g.w.Jk:g.cb("Opera");g.w.ma=g.w.hh?g.w.Gk:g.pb();g.w.qc=g.w.hh?g.w.Fk:g.cb("Edge");g.w.Kk=g.w.qc||g.w.ma;g.w.Bb=g.w.hh?g.w.Un:g.cb("Gecko")&&!(g.Xa(g.bb,"WebKit")&&!g.cb("Edge"))&&!(g.cb("Trident")||g.cb("MSIE"))&&!g.cb("Edge");g.w.mb=g.w.hh?g.w.Yn||g.w.Ik:g.Xa(g.bb,"WebKit")&&!g.cb("Edge");g.w.VB=function(){return g.w.mb&&g.cb("Mobile")};
g.w.KS=g.w.Ik||g.w.VB();g.w.qg=g.w.mb;g.w.Pw=function(){var a=g.w.Gl();return a&&a.platform||""};
g.w.tT=g.w.Pw();g.w.Wn=!1;g.w.Zn=!1;g.w.Vn=!1;g.w.ao=!1;g.w.gh=!1;g.w.mg=!1;g.w.lg=!1;g.w.Hk=!1;g.w.Hv=!1;g.w.Gv=!1;g.w.Ed=g.w.Wn||g.w.Zn||g.w.Vn||g.w.ao||g.w.gh||g.w.mg||g.w.lg||g.w.Hk;g.w.rd=g.w.Ed?g.w.Wn:g.cb("Macintosh");g.w.qo=g.w.Ed?g.w.Zn:g.cb("Windows");g.w.TB=function(){return g.cb("Linux")||g.cb("CrOS")};
g.w.Ov=g.w.Ed?g.w.Vn:g.w.TB();g.w.ZB=function(){var a=g.w.Gl();return!!a&&-1!=(a.appVersion||"").indexOf("X11")};
g.w.IW=g.w.Ed?g.w.ao:g.w.ZB();g.w.ANDROID=g.w.Ed?g.w.gh:g.cb("Android");g.w.wi=g.w.Ed?g.w.mg:ub();g.w.ti=g.w.Ed?g.w.lg:g.cb("iPad");g.w.Mv=g.w.Ed?g.w.Hk:g.cb("iPod");g.w.IOS=g.w.Ed?g.w.mg||g.w.lg||g.w.Hk:g.vb();g.w.hR=g.w.Ed?g.w.Hv:g.Xa(g.bb,"KaiOS");g.w.EQ=g.w.Ed?g.w.Gv:g.Xa(g.bb,"GAFP");g.w.sh=function(){var a="",b=g.w.Wy();b&&(a=b?b[1]:"");return g.w.ma&&(b=g.w.Ep(),null!=b&&b>parseFloat(a))?String(b):a};
g.w.Wy=function(){var a=g.w.cd();if(g.w.Bb)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.w.qc)return/Edge\/([\d\.]+)/.exec(a);if(g.w.ma)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.w.mb)return/WebKit\/(\S+)/.exec(a);if(g.w.Rb)return/(?:Version)[ \/]?(\S+)/.exec(a)};
g.w.Ep=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.w.VERSION=g.w.sh();g.w.compare=function(a,b){return g.$a(a,b)};
g.w.YB={};g.w.cb=function(a){return g.w.Fv||maa(a,function(){return 0<=g.$a(g.w.VERSION,a)})};
g.w.ed=g.w.cb;g.w.Bc=function(a){return Number(g.w.co)>=a};
g.w.YW=g.w.Bc;var cl;var dl=g.m.document;cl=dl&&g.w.ma?g.w.Ep()||("CSS1Compat"==dl.compatMode?parseInt(g.w.VERSION,10):5):void 0;g.w.co=cl;g.w.product={};g.w.product.Tn=!1;g.w.product.mg=!1;g.w.product.lg=!1;g.w.product.gh=!1;g.w.product.Sn=!1;g.w.product.Xn=!1;g.w.product.og=g.w.Gk||g.w.Fk||g.w.Jk||g.w.product.Tn||g.w.product.mg||g.w.product.lg||g.w.product.gh||g.w.product.Sn||g.w.product.Xn;g.w.product.Rb=g.w.Rb;g.w.product.ma=g.w.ma;g.w.product.qc=g.w.qc;g.w.product.Lk=g.w.product.og?g.w.product.Tn:qb();g.w.product.SB=function(){return ub()||g.cb("iPod")};
g.w.product.wi=g.w.product.og?g.w.product.mg:g.w.product.SB();g.w.product.ti=g.w.product.og?g.w.product.lg:g.cb("iPad");g.w.product.ANDROID=g.w.product.og?g.w.product.gh:g.tb();g.w.product.CHROME=g.w.product.og?g.w.product.Sn:g.rb();g.w.product.WB=function(){return g.sb()&&!g.vb()};
g.w.product.qg=g.w.product.og?g.w.product.Xn:g.w.product.WB();var Ab,zb;Ab=null;g.Cb=null;zb=null;g.Db.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.Db.prototype[Symbol.iterator]=function(){return this});g.Jb="function"==typeof Uint8Array;g.Fb.prototype.od=function(){Gb(this);return this.ec};
g.Fb.prototype.G=g.Jb?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return Bb(this)};
try{return JSON.stringify(this.ec&&this.od(),Hb)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.od(),Hb)};
g.Fb.prototype.toString=function(){Gb(this);return this.ec.toString()};
g.Fb.prototype.clone=function(){return new this.constructor(Ib(this.od()))};g.f=g.Lb.prototype;g.f.isEnabled=function(){return navigator.cookieEnabled};
g.f.set=function(a,b,c,d,e,h){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ta(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";h=h?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.rd)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+h};
g.f.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,h;e<d.length;e++){h=(0,g.Ya)(d[e]);if(0==h.lastIndexOf(c,0))return h.substr(c.length);if(h==a)return""}return b};
g.f.remove=function(a,b,c){var d=g.ta(this.get(a));this.set(a,"",0,b,c);return d};
g.f.Oc=function(){return g.Mb(this).keys};
g.f.Jb=g.ba(1);g.f.isEmpty=function(){return!this.C.cookie};
g.f.Pb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.f.Wd=g.ba(3);g.f.clear=function(){for(var a=g.Mb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Kh=new g.Lb("undefined"==typeof document?null:document);var Pb={};var naa;naa=!g.w.ma||g.w.Bc(9);g.wca=!g.w.Bb&&!g.w.ma||g.w.ma&&g.w.Bc(9)||g.w.Bb&&g.w.cb("1.9.1");g.el=g.w.ma&&!g.w.cb("9");g.xca=g.w.ma||g.w.Rb||g.w.mb;g.yca=g.w.ma;g.zca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Aca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.fl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.Sb.prototype.ee=!0;g.Sb.prototype.vd=function(){return this.C};
g.Sb.prototype.em=!0;g.Sb.prototype.Bf=function(){return 1};
var Ub=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Rb={};g.Vb("about:blank");g.Zb.prototype.ee=!0;g.Yb={};g.Zb.prototype.vd=function(){return this.C};
g.gl=g.$b("");g.hl=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.il=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.bc.prototype.ee=!0;g.ac={};g.bc.prototype.vd=function(){return this.C};
g.jl=g.cc("");g.ec.prototype.em=!0;g.ec.prototype.Bf=function(){return this.F};
g.ec.prototype.ee=!0;g.ec.prototype.vd=function(){return this.C};
var dc={};g.gc("<!DOCTYPE html>",0);g.kl=g.gc("",0);g.ll=g.gc("<br>",0);g.Bca=g.Qb(function(){var a=document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});g.f=g.kc.prototype;g.f.clone=function(){return new g.kc(this.x,this.y)};
g.f.equals=function(a){return a instanceof g.kc&&g.lc(this,a)};
g.f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.f.translate=function(a,b){a instanceof g.kc?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.wa(b)&&(this.y+=b));return this};
g.f.scale=function(a,b){var c=g.wa(b)?b:a;this.x*=a;this.y*=c;return this};g.f=g.nc.prototype;g.f.clone=function(){return new g.nc(this.width,this.height)};
g.f.aspectRatio=function(){return this.width/this.height};
g.f.isEmpty=function(){return!(this.width*this.height)};
g.f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.scale=function(a,b){var c=g.wa(b)?b:a;this.width*=a;this.height*=c;return this};var pc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Cca={nP:"allow-forms",oP:"allow-modals",pP:"allow-orientation-lock",qP:"allow-pointer-lock",rP:"allow-popups",sP:"allow-popups-to-escape-sandbox",tP:"allow-presentation",uP:"allow-same-origin",vP:"allow-scripts",wP:"allow-top-navigation",xP:"allow-top-navigation-by-user-activation"},paa=g.Qb(function(){return g.Ec(Cca)});g.f=g.Hc.prototype;g.f.clone=function(){return new g.Hc(this.left,this.top,this.width,this.height)};
g.f.contains=function(a){return a instanceof g.kc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.translate=function(a,b){a instanceof g.kc?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.wa(b)&&(this.top+=b));return this};
g.f.scale=function(a,b){var c=g.wa(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.ml=g.w.Bb?"MozUserSelect":g.w.mb||g.w.qc?"WebkitUserSelect":null;var Pc=g.Oc(window),Qc=Pc&&window.parent||window;g.Xc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.hd=/#|$/;var Dca=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;ld.prototype.getUrl=function(a,b,c,d){a=a+"//"+b+c;var e=saa(this)-c.length-d.length;if(0>e)return"";this.C.sort(function(a,b){return a-b});
c=null;b="";for(var h=0;h<this.C.length;h++)for(var k=this.C[h],l=this.F[k],p=0;p<l.length;p++){if(!e){c=null==c?k:c;break}var t=od(l[p],this.D,",$");if(t){t=b+t;if(e>=t.length){e-=t.length;a+=t;b=this.D;break}else this.H&&(b=e,t[b-1]==this.D&&--b,a+=t.substr(0,b),b=this.D,e=0);c=null==c?k:c}}h="";this.G&&null!=c&&(h=b+this.G+"="+c);return a+h+d};var nl=null;var xd=g.m.performance,Eca=!!(xd&&xd.mark&&xd.measure&&xd.clearMarks),vd=g.Qb(function(){var a;if(a=Eca){var b;if(null===nl){nl="";try{a="";try{a=g.m.top.location.hash}catch(c){a=g.m.location.hash}a&&(nl=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=nl;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
wd.prototype.disable=function(){this.C=!1;this.events!=this.F.google_js_reporting_queue&&(vd()&&g.z(this.events,g.yd),this.events.length=0)};
wd.prototype.start=function(a,b){if(!this.C)return null;var c=td()||sd();c=new taa(a,b,c);var d="goog_"+c.uniqueId+"_start";xd&&vd()&&xd.mark(d);return c};
wd.prototype.end=function(a){if(this.C&&g.wa(a.value)){var b=td()||sd();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";xd&&vd()&&xd.mark(b);this.C&&this.events.push(a)}};Bd.prototype.F=function(a,b,c,d,e){e=e||"jserror";try{var h=new ld;h.H=!0;pd(h,1,"context",a);b.error&&b.meta&&b.id||(b=g.Fd(b));b.msg&&pd(h,2,"msg",b.msg.substring(0,512));b.file&&pd(h,3,"file",b.file);0<b.line&&pd(h,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(T){}b=[k];h.C.push(5);h.F[5]=b;var l=g.kd(),p=new jd(g.m.location.href,g.m,!1);b=null;var t=l.length-1;for(d=t;0<=d;--d){var y=l[d];!b&&Dca.test(y.url)&&(b=y);if(y.url&&!y.er){p=y;break}}y=null;var H=l.length&&l[t].url;0!=p.depth&&
H&&(y=l[t]);var J=new raa(p,y);J.F&&pd(h,6,"top",J.F.url||"");pd(h,7,"url",J.C.url||"");g.qd(this.D,e,h,c)}catch(T){try{g.qd(this.D,e,{context:"ecmserr",rctx:a,msg:g.Ed(T),url:J&&J.C.url},c)}catch(ia){}}return!0};
g.ha(Cd,Uc);var ud,zd;ud=g.Sc();zd=new wd;g.Ad=new function(){var a=void 0===a?g.Lc:a;this.C="http:"===a.location.protocol?"http:":"https:"};
g.ol=new Bd;"complete"==ud.document.readyState?ud.google_measure_js_timing||zd.disable():zd.C&&Fc(ud,"load",function(){ud.google_measure_js_timing||zd.disable()});var pl;pl={};g.ql=(pl[8]="google_prev_ad_formats_by_region",pl[9]="google_prev_ad_slotnames_by_region",pl);g.vg=(new Date).getTime();g.A.prototype.Zc=!1;g.A.prototype.sb=function(){return this.Zc};
g.A.prototype.dispose=function(){this.Zc||(this.Zc=!0,this.Y())};
g.A.prototype.Y=function(){if(this.Vf)for(;this.Vf.length;)this.Vf.shift()()};g.Od.prototype.stopPropagation=function(){this.F=!0};
g.Od.prototype.preventDefault=function(){this.Vt=!1};var ee,Gca,zaa;g.Fca=!g.w.ma||g.w.Bc(9);ee=!g.w.ma||g.w.Bc(9);Gca=g.w.ma&&!g.w.cb("9");zaa=function(){if(!g.m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.m.addEventListener("test",g.xa,b),g.m.removeEventListener("test",g.xa,b)}catch(c){}return a}();g.rl=g.w.mb?"webkitTransitionEnd":g.w.Rb?"otransitionend":"transitionend";g.v(g.Pd,g.Od);var Hca={2:"touch",3:"pen",4:"mouse"};
g.Pd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.w.Bb&&(g.xb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.w.rd?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.ua(a.pointerType)?a.pointerType:Hca[a.pointerType]||"";this.state=a.state;this.zc=
a;a.defaultPrevented&&this.preventDefault()};
g.Pd.prototype.stopPropagation=function(){g.Pd.M.stopPropagation.call(this);this.zc.stopPropagation?this.zc.stopPropagation():this.zc.cancelBubble=!0};
g.Pd.prototype.preventDefault=function(){g.Pd.M.preventDefault.call(this);var a=this.zc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Gca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Qd="closure_listenable_"+(1E6*Math.random()|0),waa=0;g.f=g.Td.prototype;g.f.add=function(a,b,c,d,e){var h=a.toString();a=this.listeners[h];a||(a=this.listeners[h]=[],this.C++);var k=Vd(a,b,d,e);-1<k?(b=a[k],c||(b.Fi=!1)):(b=new xaa(b,this.src,h,!!d,e),b.Fi=c,a.push(b));return b};
g.f.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Vd(e,b,c,d);return-1<b?(Sd(e[b]),g.Na(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.f.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Sd(d[e]);delete this.listeners[c];this.C--}return b};
g.f.Dg=g.ba(5);g.f.xf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Vd(a,b,c,d));return-1<e?a[e]:null};
g.f.hasListener=function(a,b){var c=g.ta(a),d=c?a.toString():"",e=g.ta(b);return g.eb(this.listeners,function(a){for(var h=0;h<a.length;++h)if(!(c&&a[h].type!=d||e&&a[h].capture!=b))return!0;return!1})};var be="closure_lm_"+(1E6*Math.random()|0),he={},de=0,ke="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.le,g.A);g.le.prototype[Qd]=!0;g.f=g.le.prototype;g.f.bj=function(){return this.Rm};
g.f.Xh=g.ba(6);g.f.addEventListener=function(a,b,c,d){g.Xd(this,a,b,c,d)};
g.f.removeEventListener=function(a,b,c,d){g.fe(this,a,b,c,d)};
g.f.dispatchEvent=function(a){var b=this.bj();if(b){var c=[];for(var d=1;b;b=b.bj())c.push(b),++d}b=this.Zv;d=a.type||a;if(g.ua(a))a=new g.Od(a,b);else if(a instanceof g.Od)a.target=a.target||b;else{var e=a;a=new g.Od(d,b);g.ob(a,e)}e=!0;if(c)for(var h=c.length-1;!a.F&&0<=h;h--){var k=a.currentTarget=c[h];e=me(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=me(k,d,!0,a)&&e,a.F||(e=me(k,d,!1,a)&&e));if(c)for(h=0;!a.F&&h<c.length;h++)k=a.currentTarget=c[h],e=me(k,d,!1,a)&&e;return e};
g.f.Y=function(){g.le.M.Y.call(this);this.removeAllListeners();this.Rm=null};
g.f.O=function(a,b,c,d){return this.Jd.add(String(a),b,!1,c,d)};
g.f.Ye=function(a,b,c,d){return this.Jd.add(String(a),b,!0,c,d)};
g.f.Wa=function(a,b,c,d){return this.Jd.remove(String(a),b,c,d)};
g.f.removeAllListeners=function(a){return this.Jd?this.Jd.removeAll(a):0};
g.f.Dg=g.ba(4);g.f.xf=function(a,b,c,d){return this.Jd.xf(String(a),b,c,d)};
g.f.hasListener=function(a,b){return this.Jd.hasListener(g.ta(a)?String(a):void 0,b)};ne.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var xe;var ye=new ne(function(){return new re},function(a){a.reset()});
qe.prototype.add=function(a,b){var c=ye.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
qe.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
re.prototype.set=function(a,b){this.yc=a;this.scope=b;this.next=null};
re.prototype.reset=function(){this.next=this.scope=this.yc=null};var se,te=!1,ue=new qe;De.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var Ee=new ne(function(){return new De},function(a){a.reset()});
g.Ce.prototype.then=function(a,b,c){return Ie(this,g.Ca(a)?a:null,g.Ca(b)?b:null,c)};
g.ze(g.Ce);g.Ce.prototype.cancel=function(a){0==this.C&&ve(function(){var b=new g.Pe(a);Ke(this,b)},this)};
g.Ce.prototype.X=function(a){this.C=0;g.Be(this,2,a)};
g.Ce.prototype.N=function(a){this.C=0;g.Be(this,3,a)};
g.Ce.prototype.J=function(){for(var a;a=Le(this);)Me(this,a,this.C,this.R);this.L=!1};
var Re=pe;g.v(g.Pe,g.Ga);g.Pe.prototype.name="cancel";g.v(g.Ue,g.A);g.f=g.Ue.prototype;g.f.jb=0;g.f.Y=function(){g.Ue.M.Y.call(this);this.stop();delete this.C;delete this.F};
g.f.start=function(a){this.stop();this.jb=g.Se(this.jc,g.ta(a)?a:this.D)};
g.f.stop=function(){this.isActive()&&g.Te(this.jb);this.jb=0};
g.f.vf=g.ba(7);g.f.isActive=function(){return 0!=this.jb};
g.f.Pp=function(){this.jb=0;this.C&&this.C.call(this.F)};g.v(Ve,Gaa);Ve.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Ve.prototype.update=function(a,b){if(null!=a){g.ta(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.L,h=this.D;d<b;){if(0==h)for(;d<=c;)We(this,a,d),d+=this.F;if(g.ua(a))for(;d<b;){if(e[h]=a.charCodeAt(d),++h,++d,h==this.F){We(this,e);h=0;break}}else for(;d<b;)if(e[h]=a[d],++h,++d,h==this.F){We(this,e);h=0;break}}this.D=h;this.H+=b}};
Ve.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;We(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.Ze="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.Ye.prototype.next=function(){throw g.Ze;};
g.Ye.prototype.sd=function(){return this};g.f=g.cf.prototype;g.f.Pb=function(){return this.D};
g.f.Jb=g.ba(0);g.f.Oc=function(){g.ef(this);return this.C.concat()};
g.f.Wd=g.ba(2);g.f.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Pb())return!1;var c=b||Iaa;g.ef(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.f.isEmpty=function(){return 0==this.D};
g.f.clear=function(){this.F={};this.ef=this.D=this.C.length=0};
g.f.remove=function(a){return g.df(this.F,a)?(delete this.F[a],this.D--,this.ef++,this.C.length>2*this.D&&g.ef(this),!0):!1};
g.f.get=function(a,b){return g.df(this.F,a)?this.F[a]:b};
g.f.set=function(a,b){g.df(this.F,a)||(this.D++,this.C.push(a),this.ef++);this.F[a]=b};
g.f.forEach=function(a,b){for(var c=this.Oc(),d=0;d<c.length;d++){var e=c[d],h=this.get(e);a.call(b,h,e,this)}};
g.f.clone=function(){return new g.cf(this)};
g.f.sd=function(a){g.ef(this);var b=0,c=this.ef,d=this,e=new g.Ye;e.next=function(){if(c!=d.ef)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Ze;var e=d.C[b++];return a?e:d.F[e]};
return e};var jf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Kaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.kf,g.A);g.f=g.kf.prototype;g.f.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.f.Dd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.xa):(c&&g.Oa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.f.qa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,h=arguments.length;e<h;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Laa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,h=c.length;e<h;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.Dd(c)}}return 0!=e}return!1};
g.f.clear=function(a){if(a){var b=this.F[a];b&&((0,g.z)(b,this.Dd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.f.Pb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Pb(b);return a};
g.f.Y=function(){g.kf.M.Y.call(this);this.clear();this.D.length=0};g.mf.prototype.set=function(a,b){g.ta(b)?this.C.set(a,g.gf(b)):this.C.remove(a)};
g.mf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.mf.prototype.remove=function(a){this.C.remove(a)};g.v(nf,g.mf);nf.prototype.set=function(a,b){nf.M.set.call(this,a,pf(b))};
nf.prototype.F=function(a){a=nf.M.get.call(this,a);if(!g.ta(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
nf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ta(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.qf,nf);g.qf.prototype.set=function(a,b,c){if(b=pf(b)){if(c){if(c<(0,g.rd)()){g.qf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.rd)()}g.qf.M.set.call(this,a,b)};
g.qf.prototype.F=function(a,b){var c=g.qf.M.F.call(this,a);if(c)if(!b&&g.rf(c))g.qf.prototype.remove.call(this,a);else return c};g.v(sf,Maa);sf.prototype.Pb=function(){var a=0;g.af(this.sd(!0),function(){a++});
return a};
sf.prototype.clear=function(){var a=Haa(this.sd(!0)),b=this;(0,g.z)(a,function(a){b.remove(a)})};g.v(g.tf,sf);g.f=g.tf.prototype;g.f.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.f.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.f.get=function(a){a=this.C.getItem(a);if(!g.ua(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeItem(a)};
g.f.Pb=function(){return this.C.length};
g.f.sd=function(a){var b=0,c=this.C,d=new g.Ye;d.next=function(){if(b>=c.length)throw g.Ze;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.ua(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){this.C.clear()};
g.f.key=function(a){return this.C.key(a)};g.v(g.uf,g.tf);g.v(wf,sf);var Naa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},vf=null;g.f=wf.prototype;g.f.isAvailable=function(){return!!this.C};
g.f.set=function(a,b){this.C.setAttribute(xf(a),b);yf(this)};
g.f.get=function(a){a=this.C.getAttribute(xf(a));if(!g.ua(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeAttribute(xf(a));yf(this)};
g.f.Pb=function(){return zf(this).attributes.length};
g.f.sd=function(a){var b=0,c=zf(this).attributes,d=new g.Ye;d.next=function(){if(b>=c.length)throw g.Ze;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!g.ua(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){for(var a=zf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);yf(this)};g.v(Bf,sf);Bf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
Bf.prototype.get=function(a){return this.F.get(this.C+a)};
Bf.prototype.remove=function(a){this.F.remove(this.C+a)};
Bf.prototype.sd=function(a){var b=this.F.sd(!0),c=this,d=new g.Ye;d.next=function(){for(var d=b.next();d.substr(0,c.C.length)!=c.C;)d=b.next();return a?d.substr(c.C.length):c.F.get(d)};
return d};Df.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
Df.prototype.get=function(a){return!!this.C[a]};g.sh=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.sl="Microsoft Internet Explorer"==navigator.appName;g.If=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.n("yt.config_",g.If,void 0);var Qf={};var Ica=g.q("ytPubsubPubsubInstance")||new g.kf;g.kf.prototype.subscribe=g.kf.prototype.subscribe;g.kf.prototype.unsubscribeByKey=g.kf.prototype.Dd;g.kf.prototype.publish=g.kf.prototype.qa;g.kf.prototype.clear=g.kf.prototype.clear;g.n("ytPubsubPubsubInstance",Ica,void 0);var Wf=g.q("ytPubsubPubsubSubscribedKeys")||{};g.n("ytPubsubPubsubSubscribedKeys",Wf,void 0);var Yf=g.q("ytPubsubPubsubTopicToKeys")||{};g.n("ytPubsubPubsubTopicToKeys",Yf,void 0);var Xf=g.q("ytPubsubPubsubIsSynchronous")||{};
g.n("ytPubsubPubsubIsSynchronous",Xf,void 0);var Qaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Raa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.dg.prototype.initialize=function(a,b,c,d){var e=this;b?(this.F=!0,g.bg(b,function(){e.F=!1;if(window.botguard)eg(e,c,d);else{g.cg(b);var a=Error("Unable to load Botguard");a.params="from "+b;g.Of(a)}})):a&&(eval(a),window.botguard?eg(this,c,d):g.Of(Error("Unable to load Botguard from JS")))};
g.dg.prototype.fe=function(){return!!this.C};
g.dg.prototype.dispose=function(){this.C=null};g.ha(lg,Saa);lg.prototype.start=function(){var a=g.q("yt.scheduler.instance.start");a&&a()};
lg.prototype.pause=function(){var a=g.q("yt.scheduler.instance.pause");a&&a()};
g.ya(lg);lg.getInstance();g.qg=new g.dg;g.rg=new function(){var a=window.document;this.C=window;this.F=a};(0,g.rd)();var wg=g.ta(XMLHttpRequest)?function(){return new XMLHttpRequest}:g.ta(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Dg,Yaa,Jg;Dg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Yaa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Jg=!1;g.tl=Kg;Og.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.Ae(a)?a:g.Qg(a)):2===this.F&&b?(a=b.call(c,this.C),g.Ae(a)?a:g.Pg(a)):this};
Og.prototype.getValue=function(){return this.C};
g.ze(Og);var Jca=0,bba=g.w.mb?"webkit":g.w.Bb?"moz":g.w.ma?"ms":g.w.Rb?"o":"",Rg=g.q("ytDomDomGetNextId")||function(){return++Jca};
g.n("ytDomDomGetNextId",Rg,void 0);var cba={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Ug.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Ug.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Ug.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Yg=g.q("ytEventsEventsListeners")||{};g.n("ytEventsEventsListeners",Yg,void 0);var $g=g.q("ytEventsEventsCounter")||{count:0};g.n("ytEventsEventsCounter",$g,void 0);var ah=g.Qb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.v(g.dh,g.A);g.dh.prototype.X=function(a){this.C=new g.kc(g.Wg(a),g.Xg(a))};
g.dh.prototype.R=function(){if(this.C){var a=g.sh();if(0!=this.D){var b=g.mc(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.jc();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.dh.prototype.Y=function(){g.Uf(this.N);g.K(this.J)};g.ha(eh,g.A);eh.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.ze);break}};
eh.prototype.Y=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.ze)}g.A.prototype.Y.call(this)};var dba={enablejsapi:1},eba={};fh.prototype.clone=function(){var a=new fh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.za(c)?a[b]=g.lb(c):a[b]=c}return a};var ih={},hh=0;var iba,zh,Ah,hba,th,jba,nh;iba=Math.pow(2,16)-1;zh=null;Ah=0;hba={log_event:"events",log_interaction:"interactions"};th=Object.create(null);th.log_event="GENERIC_EVENT_LOGGING";th.log_interaction="INTERACTION_LOGGING";jba=new Set(["log_event"]);nh={};g.kh=0;g.lh=0;g.mh=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.n("ytLoggingTransportLogPayloadsQueue_",g.mh,void 0);var yh=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.n("ytLoggingTransportTokensToCttTargetIds_",yh,void 0);
var qh=g.q("ytLoggingTransportDispatchedStats_")||{};g.n("ytLoggingTransportDispatchedStats_",qh,void 0);var uh=g.q("ytLoggingTransportCapturedTime_")||{};g.n("ytytLoggingTransportCapturedTime_",uh,void 0);var Fh={};g.Nh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.rd)()+1E3*c);return}catch(h){}var e="";if(d)try{e=escape(g.gf(b))}catch(h){return}else e=escape(b);g.Lh(a,e,c,this.F)};
g.Nh.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Kh.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.Nh.prototype.remove=function(a){this.C&&this.C.remove(a);g.Mh(a,"/",this.F)};var Oh=new g.Nh("yt.innertube");g.Uh.prototype.toString=function(){return JSON.stringify(g.Vh(this))};var Zh=g.q("ytLoggingLatencyUsageStats_")||{};g.n("ytLoggingLatencyUsageStats_",Zh,void 0);var $h=0;var ai=(0,g.rd)().toString();var ei=g.q("ytLoggingTimeDocumentNonce_")||bi(),fi,ci;g.n("ytLoggingTimeDocumentNonce_",ei,void 0);fi=0;g.di=null;ci=null;g.n("yt_logging_screen.getRootVeType",ki,void 0);g.n("yt_logging_screen.getCurrentCsn",g.mi,void 0);g.n("yt_logging_screen.setCurrentScreen",g.ni,void 0);g.f=g.pi.prototype;g.f.BL=function(){this.fe()||this.init()};
g.f.enable=function(){this.C=1;(0,g.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.BL,this),this.subscribe("dispose-"+a,this.dispose,this),g.C("PAGE_NAME")==a&&g.qi(this))},this)};
g.f.init=function(){g.jg(this.F);this.C=2;this.L&&this.L()};
g.f.fe=function(){return 2==this.C};
g.f.dispose=function(){this.C=3;g.jg(this.F);this.H&&this.H()};
g.f.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Mf(a)}};
g.f.subscribe=function(a,b,c){a=g.E(a,b,c);this.G.push(a);return a};
g.f.clear=function(){g.Zf(this.G);this.G=[]};var ri=g.q("yt.modules.registry_")||{};g.n("yt.modules.registry_",ri,void 0);g.ui=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.n("yt.msgs_",g.ui,void 0);var Ai={},oba=0;var pba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.ha(Ki,g.A);g.f=Ki.prototype;
g.f.loadNewVideoConfig=function(a){if(!this.sb()){this.nb=a=g.gh(a);this.C=a.clone();this.F=this.C.attrs.id||this.F;"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N);this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F);this.C.args.enablejsapi="1";this.C.args.playerapiid=this.N;this.ha||(this.ha=Si(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Jc(this.H,Number(a)||a);if(a=this.C.attrs.height)this.H.style.height=g.Ic(Number(a)||
a,!0);qba(this);this.L&&Li(this)}};
g.f.Ax=function(){return this.nb};
g.f.MC=function(){return this.L};
g.f.yi=function(a,b){var c=this,d=Si(this,b);if(d){if(!g.Ka(this.wb,a)&&!this.D[a]){var e=sba(this,a);this.X&&this.X(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.L&&g.Rf(function(){d(c.api)},0)}};
g.f.oL=function(a,b){if(!this.sb()){var c=Si(this,b);c&&g.lf(this.J,a,c)}};
g.f.Yv=function(a){g.F("a11y-announce",a)};
g.f.TG=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.f.UG=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.f.qy=function(){return this.la||(Mi(this)?"html5":null)};
g.f.Xx=function(){return this.Ya};
g.f.cancel=function(){if(this.R){var a=this.R,b=g.ag(this.C.assets.js);spf.script.ignore(b,a)}g.Tf(this.rb);this.V=!1};
g.f.Y=function(){Pi(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Mf(b)}this.ra=null;for(var a in this.D)g.m[this.D[a]]=null;this.nb=this.C=this.api=null;delete this.oa;delete this.H;g.A.prototype.Y.call(this)};g.Ui={};g.Ti="player_uid_"+(1E9*Math.random()>>>0);g.Zi.prototype.toString=function(){return this.topic};var Kca=g.q("ytPubsub2Pubsub2Instance")||new g.kf;g.kf.prototype.subscribe=g.kf.prototype.subscribe;g.kf.prototype.unsubscribeByKey=g.kf.prototype.Dd;g.kf.prototype.publish=g.kf.prototype.qa;g.kf.prototype.clear=g.kf.prototype.clear;g.n("ytPubsub2Pubsub2Instance",Kca,void 0);g.ul=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.n("ytPubsub2Pubsub2SubscribedKeys",g.ul,void 0);g.vl=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.n("ytPubsub2Pubsub2TopicToKeys",g.vl,void 0);
g.wl=g.q("ytPubsub2Pubsub2IsAsync")||{};g.n("ytPubsub2Pubsub2IsAsync",g.wl,void 0);g.n("ytPubsub2Pubsub2SkipSubKey",null,void 0);var ej=null;g.xl=window.performance&&window.performance.memory;g.Ck={};var fj=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.ha(ij,g.Yi);g.ha(jj,g.Yi);var Cba=new g.Zi("aft-recorded",ij),Iba=new g.Zi("timing-sent",jj);var Gba,qj,yl,Ij,Eba,zba,Dba,zl,Jj,Fj,kj,Bba,Pj,$ba;Gba={vc:!0};
qj={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_sel_auto_svg_home_v2"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",
'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",
'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};yl={};
Ij=(yl.ad_allowed="adTypesAllowed",yl.yt_abt="adBreakType",yl.ad_cpn="adClientPlaybackNonce",yl.ad_docid="adVideoId",yl.yt_ad_an="adNetworks",yl.ad_at="adType",yl.browse_id="browseId",yl.p="httpProtocol",yl.t="transportProtocol",yl.cpn="clientPlaybackNonce",yl.csn="clientScreenNonce",yl.docid="videoId",yl.is_continuation="isContinuation",yl.is_nav="isNavigation",yl.b_p="kabukiInfo.browseParams",yl.is_prefetch="kabukiInfo.isPrefetch",yl.is_secondary_nav="kabukiInfo.isSecondaryNav",yl.prev_browse_id=
"kabukiInfo.prevBrowseId",yl.query_source="kabukiInfo.querySource",yl.voz_type="kabukiInfo.vozType",yl.yt_lt="loadType",yl.yt_ad="isMonetized",yl.nr="webInfo.navigationReason",yl.ncnp="webInfo.nonPreloadedNodeCount",yl.paused="playerInfo.isPausedOnLoad",yl.yt_pt="playerType",yl.fmt="playerInfo.itag",yl.yt_pl="watchInfo.isPlaylist",yl.yt_ad_pr="prerollAllowed",yl.pa="previousAction",yl.yt_red="isRedSubscriber",yl.st="serverTimeMs",yl.aq="tvInfo.appQuality",yl.br_trs="tvInfo.bedrockTriggerState",yl.label=
"tvInfo.label",yl.is_mdx="tvInfo.isMdx",yl.preloaded="tvInfo.isPreloaded",yl.query="unpluggedInfo.query",yl.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",yl.yt_vst="videoStreamType",yl.vph="viewportHeight",yl.vpw="viewportWidth",yl.yt_vis="isVisible",yl);Eba="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
zba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
"channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",chips:"LATENCY_ACTION_CHIPS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",search_ui:"LATENCY_ACTION_SEARCH_UI",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",
"watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
"video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"};Dba="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" ");zl={};Jj=(zl.pa="LATENCY_ACTION_",zl.yt_pt="LATENCY_PLAYER_",zl.yt_vst="VIDEO_STREAM_TYPE_",zl);Fj=!1;kj=!1;
Bba=(0,g.r)(fj.clearResourceTimings||fj.webkitClearResourceTimings||fj.mozClearResourceTimings||fj.msClearResourceTimings||fj.oClearResourceTimings||g.xa,fj);Pj=lj;$ba=pj;g.Qj=nj;var Xj=0,Tj=[],Wj=[],Oj=0,Uj={},Vj={},Rj=new g.Ue(Pba,1E3);var Zj=["server_prefetched_vast","vmap"];var bk,gk;g.fk=null;gk="";var ik=null,lk=[];var pk,Ik,Hk,sk,qk,Wba,Zba,Xba,Yba,Dk;sk=0;qk=0;Wba=[900,60,"waiting"];Zba=[500,99,"waiting"];Xba=[300,60,"waiting"];Yba=[400,99,"waiting"];Dk=[300,101,"done"];var Pk=!1;window.yt=window.yt||{};g.n("yt.setConfig",g.Jf,void 0);g.n("yt.pushConfigArray",Kf,void 0);g.n("yt.getConfig",g.C,void 0);g.n("yt.config.set",g.Jf,void 0);g.n("yt.config.pushArray",Kf,void 0);g.n("yt.config.get",g.C,void 0);g.n("yt.hasMsg",g.wi,void 0);g.n("yt.setMsg",vi,void 0);g.n("yt.setGoogMsg",xi,void 0);g.n("yt.msgs.has",g.wi,void 0);g.n("yt.msgs.set",vi,void 0);g.n("yt.msgs.setGoog",xi,void 0);g.n("yt.pubsub.publish",g.F,void 0);g.n("yt.pubsub.subscribe",g.E,void 0);
g.n("ytcsi.tick",g.Qj,void 0);g.v(Sk,g.pi);
Sk.prototype.enable=function(){window.onload=Uba;window.onunload=Vba;window.onerror=Paa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",nk),window.addEventListener("spfhistory",ok),window.addEventListener("spfrequest",uk),window.addEventListener("spfpartprocess",yk),window.addEventListener("spfpartdone",zk),window.addEventListener("spfprocess",Ak),window.addEventListener("spfdone",Ek),window.addEventListener("spferror",Fk),window.addEventListener("spfreload",
Gk),window.addEventListener("spfjsbeforeunload",Tk)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",bca),this.subscribe("dispose",cca)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Sk.prototype.init=function(){Sk.M.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.C("PAGEFRAME_JS")){var b=g.C("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
a=g.C("JS_COMMON_MODULE");var d=g.C("JS_PAGE_MODULES");d||(d=[a]);a=g.C("JS_DELAY_LOAD",0);0<a?(g.Tf(this.D),this.D=g.Rf(function(){b&&g.bg(b,c);spf.script.require(d)},a)):(b&&g.bg(b,c),spf.script.require(d));
g.n("yt.abuse.player.botguardInitialized",Uaa,void 0);g.n("yt.abuse.player.invokeBotguard",Vaa,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",Taa,void 0);g.n("yt.player.exports.navigate",g.Ii,void 0);g.n("yt.util.activity.init",g.Eh,void 0);g.n("yt.util.activity.getTimeSinceActive",g.Gh,void 0);g.n("yt.util.activity.setTimestamp",g.Ch,void 0);hk(g.q("ytplayer.config"));g.q("ytspf.enabled")&&Sba();Aba();g.C("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.og("service_worker_enabled")?rca():pca())};
Sk.prototype.dispose=function(){g.Tf(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.Uf(bk);if(a=g.dk())a.removeEventListener("onReady",ck),a.removeEventListener("onStateChange",ck);xj(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.D(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.ch(a);Sk.M.dispose.call(this)};
Sk.prototype.disable=function(){Sk.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",nk),window.removeEventListener("spfhistory",ok),window.removeEventListener("spfrequest",uk),window.removeEventListener("spfpartprocess",yk),window.removeEventListener("spfpartdone",zk),window.removeEventListener("spfprocess",Ak),window.removeEventListener("spfdone",Ek),window.removeEventListener("spferror",Fk),window.removeEventListener("spfreload",Gk),window.removeEventListener("spfjsbeforeunload",
Tk));window.onload=null;window.onunload=null;window.onerror=null};
g.ti(new Sk);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:00:36 Feb 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:43:42 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 275.173
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.057
  cdx.remote: 0.051
  esindex: 0.008
  LoadShardBlock: 126.262 (3)
  PetaboxLoader3.datanode: 64.181 (4)
  load_resource: 609.599
  PetaboxLoader3.resolve: 556.52
*/