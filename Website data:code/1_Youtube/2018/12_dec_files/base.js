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

var _yt_www={};(function(g){var window=this;var da,aaa,na,oa,pa,ra,qa,sa,daa,eaa,ab,rb,vb,maa,Cb,Fb,Gb,Hb,oaa,qaa,Bc,Cc,Qc,saa,bd,dd,ed,gd,fd,hd,taa,ld,md,uaa,qd,vd,wd,Ad,vaa,waa,Bd,Cd,Id,yaa,Md,Pd,Qd,Ud,zaa,Xd,de,ce,Baa,ge,he,ie,je,Caa,ke,le,pe,Daa,qe,xe,ze,Eaa,Ee,Ie,Ce,Ae,Gaa,He,Fe,Ge,Ke,Faa,Haa,Pe,Qe,Ue,Iaa,Jaa,Kaa,$e,bf,Maa,gf,hf,jf,Naa,mf,qf,rf,sf,tf,uf,wf,Paa,Af,Df,Ff,Qaa,Nf,Xf,Taa,cg,Yf,Uaa,eg,Vaa,Waa,Xaa,Yaa,$aa,vg,aba,wg,xg,bba,Cg,Ag,yg,Eg,Mg,Wg,Xg,hba,ih,gba,lba,uh,zh,Ah,mba,Gh,Hh,Ph,Oh,nba,Th,$h,ai,bi,fi,ji,mi,oi,oba,xi,yi,Ai,rba,
zi,Bi,sba,Hi,wi,Ii,tba,Ci,Gi,uba,Si,vba,wba,Xi,Yi,Zi,$i,Bba,rj,dj,sj,ej,bj,tj,fj,xba,xj,lj,mj,Aj,yba,zba,nj,ij,jj,cj,kj,Cj,pj,uj,qj,Gba,hj,wj,Iba,Pba,Oba,Nba,Ij,Mba,Kba,Lba,Qba,Rba,Sba,Tba,Xj,Sj,Uj,Zj,Uba,ak,ck,Vba,Wba,dk,ek,jk,nk,ok,qk,uk,vk,wk,cca,dca,kk,mk,ik,bca,lk,Ak,Ck,zk,Dk,Bk,eca,ica,fca,lca,hca,gca,jca,kca,nca,Gk,mca,Ek,oca,qca,sca,rca,pca,Hk,Ik,Jk,fa,Kk,Fa,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
g.ea=function(a){var b="undefined"!=typeof window.Symbol&&window.Symbol.iterator&&a[window.Symbol.iterator];return b?b.call(a):{next:da(a)}};
aaa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
g.ia=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
na=function(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var h=d[e];h in c||(c[h]={});c=c[h]}d=d[d.length-1];e=c[d];h=b(e);h!=e&&null!=h&&ka(c,d,{configurable:!0,writable:!0,value:h})}};
oa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
pa=function(){pa=function(){};
ja.Symbol||(ja.Symbol=baa)};
ra=function(){pa();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return qa(da(this))}});
ra=function(){}};
qa=function(a){ra();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a};
sa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ta=function(a){return void 0!==a};
g.ua=function(a){return"string"==typeof a};
g.va=function(a){return"boolean"==typeof a};
g.wa=function(a){return"number"==typeof a};
g.n=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ta(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.q=function(a,b){for(var c=a.split("."),d=b||g.m,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.xa=function(){};
g.ya=function(a){a.Hc=void 0;a.getInstance=function(){return a.Hc?a.Hc:a.Hc=new a}};
g.Aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Ba=function(a){return"array"==g.Aa(a)};
g.Ca=function(a){var b=g.Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Da=function(a){return"function"==g.Aa(a)};
g.Ea=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ga=function(a){return a[Fa]||(a[Fa]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.r=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.r=daa:g.r=eaa;return g.r.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.xw=function(a,c,h){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
g.Ha=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ja=function(a,b,c){b=g.Ia(a,b,c);return 0>b?null:g.ua(a)?a.charAt(b):a[b]};
g.Ia=function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return h;return-1};
g.La=function(a,b){return 0<=(0,g.Ka)(a,b)};
g.Ma=function(a){return 0==a.length};
g.Oa=function(a,b){var c=(0,g.Ka)(a,b),d;(d=0<=c)&&g.Na(a,c);return d};
g.Na=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Pa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Qa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ca(d)){var e=a.length||0,h=d.length||0;a.length=e+h;for(var k=0;k<h;k++)a[e+k]=d[k]}else a.push(d)}};
g.Ra=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Ta=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Ua=function(a){return/^[\s\xa0]*$/.test(a)};
g.Va=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Wa=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Xa=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Ya=function(a,b){return-1!=a.indexOf(b)};
g.bb=function(a,b){for(var c=0,d=(0,g.$a)(String(a)).split("."),e=(0,g.$a)(String(b)).split("."),h=Math.max(d.length,e.length),k=0;0==c&&k<h;k++){var l=d[k]||"",p=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];p=/(\d*)(\D*)(.*)/.exec(p)||["","","",""];if(0==l[0].length&&0==p[0].length)break;c=ab(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==p[1].length?0:(0,window.parseInt)(p[1],10))||ab(0==l[2].length,0==p[2].length)||ab(l[2],p[2]);l=l[3];p=p[3]}while(0==c)}return c};
ab=function(a,b){return a<b?-1:a>b?1:0};
g.cb=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.eb=function(a){return g.Ya(g.db,a)};
g.fb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.gb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.hb=function(a,b){return null!==a&&b in a};
g.ib=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.jb=function(a){for(var b in a)return!1;return!0};
g.kb=function(a,b){b in a&&delete a[b]};
g.lb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.mb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};
g.nb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.pb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var h=0;h<ob.length;h++)c=ob[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.qb=function(){return g.eb("Trident")||g.eb("MSIE")};
rb=function(){return g.eb("Firefox")||g.eb("FxiOS")};
g.tb=function(){return g.eb("Safari")&&!(g.sb()||g.eb("Coast")||g.eb("Opera")||g.eb("Edge")||rb()||g.eb("Silk")||g.eb("Android"))};
g.sb=function(){return(g.eb("Chrome")||g.eb("CriOS"))&&!g.eb("Edge")};
g.ub=function(){return g.eb("Android")&&!(g.sb()||rb()||g.eb("Opera")||g.eb("Silk"))};
vb=function(){return g.eb("iPhone")&&!g.eb("iPod")&&!g.eb("iPad")};
g.wb=function(){return vb()||g.eb("iPad")||g.eb("iPod")};
g.xb=function(a){g.xb[" "](a);return a};
g.yb=function(a,b){try{return g.xb(a[b]),!0}catch(c){}return!1};
maa=function(a,b){var c=g.w.bC;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Cb=function(a,b){g.Ca(a);g.zb();for(var c=b?Ab:Bb,d=[],e=0;e<a.length;e+=3){var h=a[e],k=e+1<a.length,l=k?a[e+1]:0,p=e+2<a.length,t=p?a[e+2]:0,y=h>>2;h=(h&3)<<4|l>>4;l=(l&15)<<2|t>>6;t&=63;p||(t=64,k||(l=64));d.push(c[y],c[h],c[l],c[t])}return d.join("")};
g.zb=function(){if(!Bb){Bb={};g.Db={};Ab={};for(var a=0;65>a;a++)Bb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),g.Db[Bb[a]]=a,Ab[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(g.Db["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
g.Eb=function(){};
Fb=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Ba(c))for(var d=0;d<c.length;d++)c[d]&&c[d].Rd();else c&&c.Rd()}};
Gb=function(a,b){return g.wa(b)&&((0,window.isNaN)(b)||window.Infinity===b||-window.Infinity===b)?String(b):b};
Hb=function(a){if(g.Ba(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Hb(d):d)}return b}if(g.Ib&&a instanceof window.Uint8Array)return new window.Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Hb(d):d);return b};
g.Jb=function(a){this.C=a||{cookie:""}};
g.Kb=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,h=0;h<a.length;h++)e=(0,g.$a)(a[h]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Lb=function(a){var b=g.q("window.location.href");if(g.ua(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(h){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.Mb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Ob=function(){this.C="";this.F=Nb};
g.Pb=function(a){if(a instanceof g.Ob&&a.constructor===g.Ob&&a.F===Nb)return a.C;g.Aa(a);return"type_error:SafeUrl"};
g.Sb=function(a){if(a instanceof g.Ob)return a;a="object"==typeof a&&a.ge?a.td():String(a);Qb.test(a)||(a="about:invalid#zClosurez");return g.Rb(a)};
g.Tb=function(a){if(a instanceof g.Ob)return a;a="object"==typeof a&&a.ge?a.td():String(a);Qb.test(a)||(a="about:invalid#zClosurez");return g.Rb(a)};
g.Rb=function(a){var b=new g.Ob;b.C=a;return b};
g.Vb=function(){this.C="";this.F=g.Ub};
g.Wb=function(a){var b=new g.Vb;b.C=a;return b};
g.Yb=function(){this.C="";this.F=g.Xb};
g.Zb=function(a){var b=new g.Yb;b.C=a;return b};
g.ac=function(){this.C="";this.D=$b;this.F=null};
g.bc=function(a){if(a instanceof g.ac&&a.constructor===g.ac&&a.D===$b)return a.C;g.Aa(a);return"type_error:SafeHtml"};
g.dc=function(a){if(a instanceof g.ac)return a;var b="object"==typeof a,c=null;b&&a.jm&&(c=a.Ef());a=g.Xa(b&&a.ge?a.td():String(a));return g.cc(a,c)};
g.cc=function(a,b){var c=new g.ac;c.C=a;c.F=b;return c};
g.ec=function(a,b){var c=b instanceof g.Ob?b:g.Tb(b);a.href=g.Pb(c)};
g.fc=function(a,b){var c=b instanceof g.Ob?b:g.Tb(b);a.href=g.Pb(c)};
g.gc=function(a,b){this.x=g.ta(a)?a:0;this.y=g.ta(b)?b:0};
g.hc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.ic=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.jc=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.ua(a)?window.document.getElementById(a):a};
g.kc=function(a){var b=window.document;return g.ua(a)?b.getElementById(a):a};
g.mc=function(a,b){g.fb(b,function(b,d){b&&"object"==typeof b&&b.ge&&(b=b.td());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:lc.hasOwnProperty(d)?a.setAttribute(lc[d],b):g.Ra(d,"aria-")||g.Ra(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.oc=function(a){return g.nc(a||window)};
g.nc=function(a){a=a.document;a=g.pc(a)?a.documentElement:a.body;return new g.jc(a.clientWidth,a.clientHeight)};
g.rc=function(a,b,c){return g.qc(window.document,arguments)};
g.qc=function(a,b){var c=String(b[0]),d=b[1];if(!naa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Xa(d.name),'"');if(d.type){c.push(' type="',g.Xa(d.type),'"');var e={};g.pb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ua(d)?c.className=d:g.Ba(d)?c.className=d.join(" "):g.mc(c,d));2<b.length&&g.sc(a,c,b,2);return c};
g.sc=function(a,b,c,d){function e(c){c&&b.appendChild(g.ua(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var h=c[d];!g.Ca(h)||g.Ea(h)&&0<h.nodeType?e(h):(0,g.z)(oaa(h)?g.Pa(h):h,e)}};
g.tc=function(a){return window.document.createElement(String(a))};
g.pc=function(a){return"CSS1Compat"==a.compatMode};
g.uc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.vc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.wc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
oaa=function(a){if(a&&"number"==typeof a.length){if(g.Ea(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Da(a))return"function"==typeof a.item}return!1};
g.xc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.yc=function(a){try{return!!a&&null!=a.location.href&&g.yb(a,"foo")}catch(b){return!1}};
g.zc=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.Ac=function(a){var b=[];g.zc(a,function(a){b.push(a)});
return b};
qaa=function(){var a=g.tc("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};(0,g.z)(paa(),function(d){b.call(a,d)&&(c[d]=!0)});
return c};
Bc=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};
Cc=function(a,b){var c=!1,d=!1;d=void 0===d?!1:d;c=void 0===c?!1:c;g.m.google_image_requests||(g.m.google_image_requests=[]);var e=g.m.document.createElement("img");if(b||c){var h=function(a){b&&b(a);c&&g.Oa(g.m.google_image_requests,e);e.removeEventListener&&e.removeEventListener("load",h,!1);e.removeEventListener&&e.removeEventListener("error",h,!1)};
Bc(e,"load",h);Bc(e,"error",h)}d&&(e.referrerPolicy="no-referrer");e.src=a;g.m.google_image_requests.push(e)};
g.Dc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Ec=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Fc=function(a,b){a.style.width=g.Ec(b,!0)};
g.Gc=function(a,b){return typeof a===b};
g.Ic=function(){var a=void 0===a?g.Hc:a;try{return a.history.length}catch(b){return 0}};
g.Jc=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Ic();a.u_java=!!g.Hc.navigator&&!g.Gc(g.Hc.navigator.javaEnabled,"unknown")&&!!g.Hc.navigator.javaEnabled&&g.Hc.navigator.javaEnabled();g.Hc.screen&&(a.u_h=g.Hc.screen.height,a.u_w=g.Hc.screen.width,a.u_ah=g.Hc.screen.availHeight,a.u_aw=g.Hc.screen.availWidth,a.u_cd=g.Hc.screen.colorDepth);g.Hc.navigator&&g.Hc.navigator.plugins&&(a.u_nplug=g.Hc.navigator.plugins.length);g.Hc.navigator&&g.Hc.navigator.mimeTypes&&(a.u_nmime=g.Hc.navigator.mimeTypes.length)};
g.Kc=function(a){return!!a.google_async_iframe_id};
g.Oc=function(){if(Lc&&!g.yc(Mc)){var a="."+g.Nc.domain;try{for(;2<a.split(".").length&&!g.yc(Mc);)g.Nc.domain=a=a.substr(a.indexOf(".")+1),Mc=window.parent}catch(b){}g.yc(Mc)||(Mc=window)}return Mc};
g.Pc=function(a,b){try{return(void 0===b?0:b)?(new g.jc(a.innerWidth,a.innerHeight)).round():g.oc(a).round()}catch(c){return new g.jc(-12245933,-12245933)}};
Qc=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
g.Rc=function(a,b,c,d,e,h,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);h&&(l+="?"+h);k&&(l+="#"+k);return l};
g.Sc=function(a){return a.match(raa)};
g.Tc=function(a){return a?(0,window.decodeURI)(a):a};
g.Uc=function(a){return g.Tc(g.Sc(a)[3]||null)};
g.Vc=function(a){a=g.Sc(a);return g.Rc(null,null,null,null,a[5],a[6],a[7])};
g.Wc=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.Xc=function(a,b){return b?a?a+"&"+b:b:a};
g.Yc=function(a,b){if(!b)return a;var c=g.Wc(a);c[1]=g.Xc(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.Zc=function(a,b,c){if(g.Ba(b))for(var d=0;d<b.length;d++)g.Zc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Va(b)))};
g.$c=function(a){var b=[],c;for(c in a)g.Zc(c,a[c],b);return b.join("&")};
g.ad=function(a,b){var c=g.$c(b);return g.Yc(a,c)};
g.cd=function(a){var b=a||g.m,c=[],d=null;do{var e=b;if(g.yc(e)){var h=e.location.href;d=e.document&&e.document.referrer||null}else h=d,d=null;c.push(new bd(h||"",e));try{b=e.parent}catch(k){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||g.m;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.ir=!0);return c};
saa=function(a,b){this.C=a;this.F=b};
bd=function(a,b,c){this.url=a;this.ah=b;this.ir=!!c;this.depth=g.wa(void 0)?void 0:null};
dd=function(){this.D="&";this.G=g.ta(void 0)?void 0:"trn";this.H=!1;this.F={};this.L=0;this.C=[]};
ed=function(a,b){var c={};c[a]=b;return[c]};
gd=function(a,b,c,d,e){var h=[];g.zc(a,function(a,l){var k=fd(a,b,c,d,e);k&&h.push(l+"="+k)});
return h.join(b)};
fd=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var h=[],k=0;k<a.length;k++)h.push(fd(a[k],b,c,d+1,e));return h.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(gd(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
hd=function(a,b,c,d){a.C.push(b);a.F[b]=ed(c,d)};
taa=function(a){if(!a.G)return 4E3;var b=1,c;for(c in a.F)b=c.length>b?c.length:b;return 4E3-a.G.length-b-a.D.length-1};
g.id=function(a,b,c,d,e){if(Math.random()<(d||a.C))try{if(c instanceof dd)var h=c;else h=new dd,g.zc(c,function(a,b){var c=h,d=c.L++,e=ed(b,a);c.C.push(d);c.F[d]=e});
var k=h.getUrl(a.G,a.F,a.D+b+"&","");k&&("undefined"===typeof e?Cc(k,void 0):Cc(k,e))}catch(l){}};
ld=function(){var a=g.m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.jd)()};
md=function(){var a=void 0===a?g.m:a;return(a=a.performance)&&a.now?a.now():null};
uaa=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
qd=function(){var a=nd;this.events=[];this.F=a||g.m;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.C=od()||(null!=b?b:1>Math.random())};
g.sd=function(a){a&&rd&&od()&&(rd.clearMarks("goog_"+a.uniqueId+"_start"),rd.clearMarks("goog_"+a.uniqueId+"_end"))};
vd=function(){var a=td;this.D=g.ud;this.G=this.F;this.C=void 0===a?null:a};
g.yd=function(a){return new wd(g.xd(a),a.fileName,a.lineNumber)};
g.xd=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
wd=function(a,b,c){Qc.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
g.zd=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var h=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,h,k]};
Ad=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
vaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;y=t=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],h=e[2],l=e[3],p=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var t=l^d&(h^l);var y=1518500249}else t=d^h^l,y=1859775393;else 60>c?(t=d&h|l&(d|h),y=2400959708):(t=d^h^l,y=3395469782);t=((a<<5|a>>>27)&4294967295)+t+p+y+b[c]&4294967295;p=l;l=h;h=(d<<30|d>>>2)&4294967295;d=a;a=t}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+h&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+p&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==t)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64;for(;d<c;)if(h[t++]=a[d++],y++,64==t)for(t=0,b(h);d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64}
function d(){var a=[],d=8*y;56>t?c(l,56-t):c(l,64-(t-56));for(var k=63;56<=k;k--)h[k]=d&255,d>>>=8;b(h);for(k=d=0;5>k;k++)for(var p=24;0<=p;p-=8)a[d++]=e[k]>>p&255;return a}
for(var e=[],h=[],k=[],l=[128],p=1;64>p;++p)l[p]=0;var t,y;a();return{reset:a,update:c,digest:d,Vw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
waa=function(a,b,c){var d=[],e=[];if(1==(g.Ba(c)?2:1))return e=[b,a],(0,g.z)(d,function(a){e.push(a)}),Bd(e.join(" "));
var h=[],k=[];(0,g.z)(c,function(a){k.push(a.key);h.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ma(h)?[c,b,a]:[h.join(":"),c,b,a];(0,g.z)(d,function(a){e.push(a)});
a=Bd(e.join(" "));a=[c,a];g.Ma(k)||a.push(k.join(""));return a.join("_")};
Bd=function(a){var b=vaa();b.update(a);return b.Vw().toLowerCase()};
Cd=function(a){var b=Ad(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.Jb(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.Jb(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.m.location.href);return d&&b&&c?[c,waa(Ad(d),b,a||null)].join(" "):null}return null};
g.A=function(){this.Kc=this.Kc;this.jc=this.jc};
g.Gd=function(a,b){g.Ed(a,g.u(g.Fd,b))};
g.Ed=function(a,b){a.Kc?g.ta(void 0)?b.call(void 0):b():(a.jc||(a.jc=[]),a.jc.push(g.ta(void 0)?(0,g.r)(b,void 0):b))};
g.Fd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Hd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Zt=!0};
Id=function(a){return g.w.mb?"webkit"+a:g.w.Sb?"o"+a.toLowerCase():a.toLowerCase()};
g.Jd=function(a,b){g.Hd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.zc=null;a&&this.init(a,b)};
g.Ld=function(a){return!(!a||!a[Kd])};
yaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Kh=e;this.key=++xaa;this.Rg=this.Hi=!1};
Md=function(a){a.Rg=!0;a.listener=null;a.C=null;a.src=null;a.Kh=null};
g.Nd=function(a){this.src=a;this.listeners={};this.C=0};
Pd=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Oa(a.listeners[c],b);d&&(Md(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Qd=function(a,b,c,d){for(var e=0;e<a.length;++e){var h=a[e];if(!h.Rg&&h.listener==b&&h.capture==!!c&&h.Kh==d)return e}return-1};
g.Sd=function(a,b,c,d,e){if(d&&d.once)return g.Rd(a,b,c,d,e);if(g.Ba(b)){for(var h=0;h<b.length;h++)g.Sd(a,b[h],c,d,e);return null}c=g.Td(c);return g.Ld(a)?a.N(b,c,g.Ea(d)?!!d.capture:!!d,e):Ud(a,b,c,!1,d,e)};
Ud=function(a,b,c,d,e,h){if(!b)throw Error("Invalid event type");var k=g.Ea(e)?!!e.capture:!!e,l=g.Vd(a);l||(a[Wd]=l=new g.Nd(a));c=l.add(b,c,d,k,h);if(c.C)return c;d=zaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)Aaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Xd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Yd++;return c};
zaa=function(){var a=Baa,b=Zd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Rd=function(a,b,c,d,e){if(g.Ba(b)){for(var h=0;h<b.length;h++)g.Rd(a,b[h],c,d,e);return null}c=g.Td(c);return g.Ld(a)?a.af(b,c,g.Ea(d)?!!d.capture:!!d,e):Ud(a,b,c,!0,d,e)};
g.$d=function(a,b,c,d,e){if(g.Ba(b))for(var h=0;h<b.length;h++)g.$d(a,b[h],c,d,e);else d=g.Ea(d)?!!d.capture:!!d,c=g.Td(c),g.Ld(a)?a.Xa(b,c,d,e):a&&(a=g.Vd(a))&&(b=a.Af(b,c,d,e))&&g.ae(b)};
g.ae=function(a){if(g.wa(a)||!a||a.Rg)return!1;var b=a.src;if(g.Ld(b))return Pd(b.Fd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Xd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Yd--;(c=g.Vd(b))?(Pd(c,a),0==c.C&&(c.src=null,b[Wd]=null)):Md(a);return!0};
Xd=function(a){return a in be?be[a]:be[a]="on"+a};
de=function(a,b,c,d){var e=!0;if(a=g.Vd(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var h=b[a];h&&h.capture==c&&!h.Rg&&(h=ce(h,d),e=e&&!1!==h)}return e};
ce=function(a,b){var c=a.listener,d=a.Kh||a.src;a.Hi&&g.ae(a);return c.call(d,b)};
Baa=function(a,b){if(a.Rg)return!0;if(!Zd){var c=b||g.q("window.event"),d=new g.Jd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var h=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(p){h=!0}if(h||void 0==c.returnValue)c.returnValue=!0}c=[];for(h=d.currentTarget;h;h=h.parentNode)c.push(h);h=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=de(c[k],h,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=de(c[k],h,!1,d),e=e&&l}return e}return ce(a,new g.Jd(b,
this))};
g.Vd=function(a){a=a[Wd];return a instanceof g.Nd?a:null};
g.Td=function(a){if(g.Da(a))return a;a[ee]||(a[ee]=function(b){return a.handleEvent(b)});
return a[ee]};
g.fe=function(){g.A.call(this);this.Fd=new g.Nd(this);this.dw=this;this.Wm=null};
ge=function(a,b,c,d){b=a.Fd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,h=0;h<b.length;++h){var k=b[h];if(k&&!k.Rg&&k.capture==c){var l=k.listener,p=k.Kh||k.src;k.Hi&&Pd(a.Fd,k);e=!1!==l.call(p,d)&&e}}return e&&0!=d.Zt};
he=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
ie=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
je=function(a){g.m.setTimeout(function(){throw a;},0)};
Caa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.eb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.r)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.qb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ta(c.next)){c=c.next;var a=c.Lo;c.Lo=null;a()}};
return function(a){d.next={Lo:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
ke=function(){this.F=this.C=null};
le=function(){this.next=this.scope=this.yc=null};
pe=function(a,b){me||Daa();ne||(me(),ne=!0);oe.add(a,b)};
Daa=function(){if(g.m.Promise&&g.m.Promise.resolve){var a=g.m.Promise.resolve(void 0);me=function(){a.then(qe)}}else me=function(){var a=qe;
!g.Da(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.eb("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(re||(re=Caa()),re(a)):g.m.setImmediate(a)}};
qe=function(){for(var a;a=oe.remove();){try{a.yc.call(a.scope)}catch(b){je(b)}ie(se,a)}ne=!1};
g.te=function(a){a.prototype.$goog_Thenable=!0};
g.ue=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.we=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.xa)try{var c=this;a.call(b,function(a){g.ve(c,2,a)},function(a){g.ve(c,3,a)})}catch(d){g.ve(this,3,d)}};
xe=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
ze=function(a,b,c){var d=ye.get();d.F=a;d.onRejected=b;d.context=c;return d};
Eaa=function(a,b,c){Ae(a,b,c,null)||pe(g.u(b,a))};
g.Be=function(a){return new g.we(function(b,c){var d=a.length,e=[];if(d)for(var h=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],Eaa(p,g.u(h,l),k);
else b(e)})};
g.De=function(a,b){return Ce(a,null,b,void 0)};
Ee=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,h=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(h=k);e&&(0==c.C&&1==d?Ee(c,b):(h?(d=h,d.next==c.G&&(c.G=d),d.next=d.next.next):Fe(c),Ge(c,e,3,b)))}a.D=null}else g.ve(a,3,b)};
Ie=function(a,b){a.F||2!=a.C&&3!=a.C||He(a);a.G?a.G.next=b:a.F=b;a.G=b};
Ce=function(a,b,c,d){var e=ze(null,null,null);e.C=new g.we(function(a,k){e.F=b?function(c){try{var e=b.call(d,c);a(e)}catch(t){k(t)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!g.ta(e)&&b instanceof g.Je?k(b):a(e)}catch(t){k(t)}}:k});
e.C.D=a;Ie(a,e);return e.C};
g.ve=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Ae(c,a.W,a.O,a)||(a.R=c,a.C=b,a.D=null,He(a),3!=b||c instanceof g.Je||Faa(a,c)))};
Ae=function(a,b,c,d){if(a instanceof g.we)return Ie(a,ze(b||g.xa,c||null,d)),!0;if(g.ue(a))return a.then(b,c,d),!0;if(g.Ea(a))try{var e=a.then;if(g.Da(e))return Gaa(a,e,b,c,d),!0}catch(h){return c.call(d,h),!0}return!1};
Gaa=function(a,b,c,d,e){function h(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,h)}catch(p){h(p)}};
He=function(a){a.L||(a.L=!0,pe(a.J,a))};
Fe=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Ge=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Ke(b,c,d);else try{b.D?b.F.call(b.context):Ke(b,c,d)}catch(e){Le.call(null,e)}ie(ye,b)};
Ke=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Faa=function(a,b){a.H=!0;pe(function(){a.H&&Le.call(null,b)})};
g.Je=function(a){g.Ha.call(this,a)};
g.Me=function(a,b,c){if(g.Da(a))c&&(a=(0,g.r)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.r)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.Ne=function(a){g.m.clearTimeout(a)};
g.Oe=function(a,b,c){g.A.call(this);this.C=a;this.D=b||0;this.F=c;this.kc=(0,g.r)(this.Sp,this)};
Haa=function(){this.F=-1};
Pe=function(){this.F=64;this.C=[];this.L=[];this.R=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
Qe=function(a,b,c){c||(c=0);var d=a.R;if(g.ua(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var h=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(h<<1|h>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],p=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){h=l^c&(k^l);var t=1518500249}else h=c^k^l,t=1859775393;else 60>e?(h=c&k|l&(c|k),t=2400959708):(h=c^k^l,
t=3395469782);h=(b<<5|b>>>27)+h+p+t+d[e]&4294967295;p=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=h}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+p&4294967295};
g.Re=function(a){if(a.classList)return a.classList;a=a.className;return g.ua(a)&&a.match(/\S+/g)||[]};
g.B=function(a,b){return a.classList?a.classList.contains(b):g.La(g.Re(a),b)};
g.Se=function(){};
Ue=function(a){if(a instanceof g.Se)return a;if("function"==typeof a.qd)return a.qd(!1);if(g.Ca(a)){var b=0,c=new g.Se;c.next=function(){for(;;){if(b>=a.length)throw g.Te;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Ve=function(a,b,c){if(g.Ca(a))try{(0,g.z)(a,b,c)}catch(d){if(d!==g.Te)throw d;}else{a=Ue(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Te)throw d;}}};
Iaa=function(a){if(g.Ca(a))return g.Pa(a);a=Ue(a);var b=[];g.Ve(a,function(a){b.push(a)});
return b};
g.Xe=function(a,b){this.F={};this.C=[];this.hf=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.We(this,a)};
Jaa=function(a,b){return a===b};
g.Ze=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.Ye(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.Ye(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.We=function(a,b){if(b instanceof g.Xe)for(var c=b.Pc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.Ye=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.af=function(a){var b=[];$e(new Kaa,a,b);return b.join("")};
Kaa=function(){};
$e=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.Ba(b)){var d=b;b=d.length;c.push("[");for(var e="",h=0;h<b;h++)c.push(e),$e(a,d[h],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=b[d],"function"!=typeof h&&(c.push(e),bf(d,c),c.push(":"),$e(a,h,c),e=","));c.push("}");return}}switch(typeof b){case "string":bf(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
bf=function(a,b){b.push('"',a.replace(Laa,function(a){var b=cf[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),cf[a]=b);return b}),'"')};
g.df=function(a){g.A.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.ef=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ja(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.Bd(b)}};
Maa=function(a,b,c){pe(function(){a.apply(b,c)})};
g.ff=function(a){this.C=a};
gf=function(a){this.C=a};
hf=function(a){this.data=a};
jf=function(a){return!g.ta(a)||a instanceof hf?a:new hf(a)};
g.kf=function(a){this.C=a};
g.lf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.jd)()||!!b&&b>(0,g.jd)()};
Naa=function(){};
mf=function(){};
g.nf=function(a){this.C=a};
g.of=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
qf=function(a,b){this.F=a;this.C=null;if(g.w.ma&&!g.w.Bc(9)){pf||(pf=new g.Xe);this.C=pf.get(a);this.C||(b?this.C=window.document.getElementById(b):(this.C=window.document.createElement("userdata"),this.C.addBehavior("#default#userData"),window.document.body.appendChild(this.C)),pf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
rf=function(a){return"_"+(0,window.encodeURIComponent)(a).replace(/[.!~*'()%]/g,function(a){return Oaa[a]})};
sf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
tf=function(a){return a.C.XMLDocument.documentElement};
uf=function(a,b){this.F=a;this.C=b+"::"};
g.vf=function(a){var b=new g.of;return b.isAvailable()?a?new uf(b,a):b:null};
wf=function(){this.C=[];this.F=-1};
Paa=function(a){-1==a.F&&(a.F=(0,g.xf)(a.C,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.F};
g.yf=function(){var a=new wf;g.m.SVGElement&&g.m.document.createElementNS&&a.set(0);var b=qaa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.m.crypto&&g.m.crypto.subtle&&a.set(3);return Paa(a)};
g.zf=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
Af=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.Cf=function(a){Af(g.Bf,arguments)};
Df=function(a,b){var c=g.C(a,void 0);c?c.push(b):g.Cf(a,[b])};
g.C=function(a,b){return a in g.Bf?g.Bf[a]:b};
Ff=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Ef(b)}}:a};
g.Ef=function(a,b,c,d,e){var h=g.q("yt.logging.errors.log");h?h(a,b,c,d,e):(h=g.C("ERRORS",[]),h.push([a,b,c,d,e]),g.Cf("ERRORS",h))};
g.Gf=function(a){g.Ef(a,"WARNING",void 0,void 0,void 0)};
Qaa=function(a,b,c,d,e){var h=!1,k;if((k=(k=g.Bf.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)h=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,p=k.length;l<p;l++)if(0<k[l].src.indexOf("/debug-")){h=!0;break}}h&&(e||(g.ua(a)?h=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),a=Error(h),a.name="UnhandledWindowError",e=a,e.message=h,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.Ef(e))};
g.D=function(a,b){return a?a.dataset?a.dataset[g.Hf(b)]:a.getAttribute("data-"+b):null};
g.Hf=function(a){return If[a]||(If[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Jf=function(a,b){g.Da(a)&&(a=Ff(a));return window.setTimeout(a,b)};
g.Kf=function(a,b){g.Da(a)&&(a=Ff(a));return window.setInterval(a,b)};
g.Lf=function(a){window.clearTimeout(a)};
g.Mf=function(a){window.clearInterval(a)};
g.E=function(a,b,c){var d=Nf();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Of[e]&&b.apply(c||window,d)};
try{Pf[a]?k():g.Jf(k,0)}catch(l){g.Ef(l)}},c);
Of[e]=!0;Qf[a]||(Qf[a]=[]);Qf[a].push(e);return e}return 0};
g.Rf=function(a){var b=Nf();b&&(g.wa(a)?a=[a]:g.ua(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.z)(a,function(a){b.unsubscribeByKey(a);delete Of[a]}))};
g.F=function(a,b){var c=Nf();return c?c.publish.apply(c,arguments):!1};
g.Sf=function(a,b){Pf[a]=!0;var c=Nf();c=c?c.publish.apply(c,arguments):!1;Pf[a]=!1;return c};
Nf=function(){return g.q("ytPubsubPubsubInstance")};
g.Uf=function(a,b){var c=g.Tf(a);window.spf.script.load(a,c,b)};
g.Vf=function(a){a=g.Tf(a);window.spf.script.unload(a)};
g.Tf=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Raa,""),b=b.replace(Saa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.Wf=function(){this.F=!1;this.C=null};
Xf=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.Gf(d)}c&&c(b)};
Taa=function(){};
g.Zf=function(a,b){return Yf(a,0,b)};
g.$f=function(a,b){return Yf(a,1,b)};
g.bg=function(a){for(var b=0,c=a.length;b<c;b++)g.ag(a[b])};
cg=function(){};
g.dg=function(){return!!g.q("yt.scheduler.instance")};
Yf=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Jf(a,c||0)};
g.ag=function(a){if(!(0,window.isNaN)(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.Lf(a)}};
Uaa=function(){return(0,window.parseInt)(g.C("DCLKSTAT",0),10)};
g.fg=function(a){return!!eg(a)};
g.gg=function(a){return Number(eg(a)||0)};
eg=function(a){return g.C("EXPERIMENT_FLAGS",{})[a]};
Vaa=function(){return g.hg.He()};
Waa=function(a){a=void 0===a?{}:a;return g.hg.invoke(a)};
g.lg=function(a){var b=g.ig;a=void 0===a?g.q("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.jg(b),g.kg(b));b.ca_type="image";a&&(b.bid=a);return b};
g.jg=function(a){var b={};b.dt=g.mg;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Jc(b);return b};
g.kg=function(a){var b=g.zd(a.C),c=g.Pc(a.C.top),d={};return d.bc=g.yf(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.zf(a.F),d.wgl=!!g.Hc.WebGLRenderingContext,d};
Xaa=function(){if(!ng)return null;var a=ng();return"open"in a?a:null};
g.pg=function(a){switch(g.og(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.og=function(a){return a&&"status"in a?a.status:-1};
g.qg=function(a){var b=[];g.fb(a,function(a,d){var c=g.Va(d),h;g.Ba(a)?h=a:h=[a];(0,g.z)(h,function(a){""==a?b.push(c):b.push(c+"="+g.Va(a))})});
return b.join("&")};
g.rg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var h=g.Wa(e[0]||"");e=g.Wa(e[1]||"");h in b?g.Ba(b[h])?g.Qa(b[h],e):b[h]=[b[h],e]:b[h]=e}}return b};
g.tg=function(a,b){return g.sg(a,b||{},!0)};
g.sg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.rg(e[1]||"");for(var h in b)if(c||!g.hb(e,h))e[h]=b[h];return g.ad(a,e)+d};
Yaa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.Sc(a)[1]||null,e=g.Uc(a);d&&e?(d=c,c=g.Sc(a),d=g.Sc(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.Uc(c)==e&&(Number(g.Sc(c)[4]||null)||null)==(Number(g.Sc(a)[4]||null)||null):!0;d=g.fg("web_ajax_ignore_global_headers_if_set");for(var h in ug)e=g.C(ug[h]),!e||!c&&!vg(a,h)||d&&void 0!==b[h]||(b[h]=e);if(c||vg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();g.fg("pass_biscotti_id_in_header_ajax")&&
(c||vg(a,"X-YouTube-Ad-Signals"))&&(h=g.lg(void 0),b["X-YouTube-Ad-Signals"]=g.qg(h));return b};
$aa=function(a){var b=g.rg(window.location.search),c={};(0,g.z)(Zaa,function(a){b[a]&&(c[a]=b[a])});
return g.sg(a,c||{},!1)};
vg=function(a,b){var c=g.C("CORS_HEADER_WHITELIST")||{},d=g.Uc(a);return d?(c=c[d])?g.La(c,b):!1:!0};
aba=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=wg(a,b);var d=xg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,h;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;h&&g.Lf(h);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.m;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Ya&&b.Ya.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.vs&&0<b.timeout&&(h=g.Jf(function(){e||(e=!0,g.Lf(h),b.vs.call(b.context||g.m))},b.timeout))}else g.G(a,b)};
g.G=function(a,b){var c=b.format||"JSON";a=wg(a,b);var d=xg(a,b),e=!1,h,k=yg(a,function(a){if(!e){e=!0;h&&g.Lf(h);var d=g.pg(a),k=null,l=400<=a.status&&500>a.status,H=500<=a.status&&600>a.status;if(d||l||H)k=bba(c,a,b.sb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};l=b.context||g.m;d?b.onSuccess&&b.onSuccess.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Ya&&b.Ya.call(l,a,k)}},b.method,d,b.headers,
b.responseType,b.withCredentials);
b.Uc&&0<b.timeout&&(h=g.Jf(function(){e||(e=!0,k.abort(),g.Lf(h),b.Uc.call(b.context||g.m,k))},b.timeout));
return k};
wg=function(a,b){b.LB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.C("XSRF_FIELD_NAME",void 0),d=b.Qa;d&&(d[c]&&delete d[c],a=g.tg(a,d));return a};
xg=function(a,b){var c=g.C("XSRF_FIELD_NAME",void 0),d=g.C("XSRF_TOKEN",void 0),e=b.postBody||"",h=b.ia,k=g.C("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.lx||g.Uc(a)&&!b.withCredentials&&g.Uc(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(h||(h={}),h[c]=d);h&&g.ua(e)&&(e=g.rg(e),g.pb(e,h),e=b.xt&&"JSON"==b.xt?JSON.stringify(e):g.$c(e));h=e||h&&!g.jb(h);!zg&&h&&"POST"!=b.method&&(zg=!0,g.Ef(Error("AJAX request with postData should use POST")));
return e};
bba=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ag(b):null)d={},(0,g.z)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.Bg(a)})}c&&Cg(d);
return d};
Cg=function(a){if(g.Ea(a))for(var b in a)"html_content"==b||g.Ta(b,"_html")?a[b]=g.cc(a[b],null):Cg(a[b])};
Ag=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Bg=function(a){var b="";(0,g.z)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Dg=function(a,b){b.method="POST";b.ia||(b.ia={});return g.G(a,b)};
yg=function(a,b,c,d,e,h,k){function l(){4==(p&&"readyState"in p?p.readyState:0)&&b&&Ff(b)(p)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var p=Xaa();if(!p)return null;"onloadend"in p?p.addEventListener("loadend",l,!1):p.onreadystatechange=l;g.fg("debug_forward_web_query_parameters")&&(a=$aa(a));p.open(c,a,!0);h&&(p.responseType=h);k&&(p.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof window.FormData));if(e=Yaa(a,e))for(var t in e)p.setRequestHeader(t,e[t]),"content-type"==t.toLowerCase()&&(c=!1);c&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
p.send(d);return p};
Eg=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.Fg=function(a){var b=new Eg;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.Hg=function(a){var b=new Eg;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.Jg=function(a){var b=a.__yt_uid_key;b||(b=Ig(),a.__yt_uid_key=b);return b};
g.Kg=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=cba+"VisibilityState";if(b in a)return a[b]};
g.Lg=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in dba||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
Mg=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Ng=function(a){g.ta(a.C)||Mg(a);return a.C};
g.Og=function(a){g.ta(a.F)||Mg(a);return a.F};
g.Qg=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.ib(Pg,function(e){var h=g.va(e[4])&&e[4]==!!d,k=g.Ea(e[4])&&g.Ea(d)&&g.mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(h||k)})};
g.I=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Qg(a,b,c,d);if(e)return e;e=++Rg.count+"";var h=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=h?function(d){d=new g.Lg(d);if(!g.xc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.Lg(b);
b.currentTarget=a;return c.call(a,b)};
k=Ff(k);a.addEventListener?("mouseenter"==b&&h?b="mouseover":"mouseleave"==b&&h?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),Sg()||g.va(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);Pg[e]=[a,b,c,k,d];return e};
g.K=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.z)(a,function(a){if(a in Pg){var b=Pg[a],d=b[0],e=b[1],h=b[3];b=b[4];d.removeEventListener?Sg()||g.va(b)?d.removeEventListener(e,h,b):d.removeEventListener(e,h,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,h);delete Pg[a]}}))};
g.Tg=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.I(a,b,function(){g.K(e);c.apply(a,arguments)},d)};
g.Ug=function(a){for(var b in Pg)Pg[b][0]==a&&g.K(b)};
g.Vg=function(a){this.kc=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.I(window,"mousemove",(0,g.r)(this.W,this));this.O=g.Kf((0,g.r)(this.R,this),25)};
Wg=function(){g.A.call(this);this.C=[]};
Xg=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.nb(eba);this.assets=a.assets||{};this.attrs=a.attrs||g.nb(fba);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Yg=function(a){a instanceof Xg||(a=new Xg(a));return a};
g.ah=function(a,b,c,d,e,h){h=h||{};h.name=c||g.C("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=d||g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Zg||(c=a.stacktrace,d=a.columnNumber,a.hasOwnProperty("params")&&(h.params=JSON.stringify(a.params).substr(0,500)),a=g.Lb(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),window.yterr&&
g.Da(window.yterr)&&window.yterr(a),$g[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={Qa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":h.name},ia:{url:g.C("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};h.version&&(b["client.version"]=h.version);c&&(b.ia.stack=c);for(var k in h)b.ia["client."+k]=h[k];if(k=g.C("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ia[l]=k[l];g.G(g.C("ECATCHER_REPORT_HOST",
"")+"/error_204",b);$g[a.message]=!0;Zg++}};
g.gh=function(){g.Lf(g.bh);g.Lf(g.ch);g.ch=0;if(!g.jb(g.dh)){for(var a in g.dh){var b=eh[a];b&&(gba(a,b),delete g.dh[a])}g.jb(g.dh)||g.fh()}};
hba=function(){var a=[];for(e in g.dh){var b=hh[e]||{};hh[e]=b;for(var c in g.dh[e]){var d=ih(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.jh());for(var h in hh)b=hh[h],b.eventType=h in kh?kh[h]:"UNKNOWN_TYPE",c=lh[h],b.metricIntervalMs=c?e-c:e-g.mh,a.push(b),lh[h]=e,delete hh[h];return a};
g.fh=function(){g.fg("web_gel_timeout_cap")&&!g.ch&&(g.ch=g.Jf(g.gh,3E4));g.Lf(g.bh);g.bh=g.Jf(g.gh,g.C("LOGGING_BATCH_TIMEOUT",g.nh||1E4))};
ih=function(a,b){b=void 0===b?"":b;g.dh[a]=g.dh[a]||{};g.dh[a][b]=g.dh[a][b]||[];return g.dh[a][b]};
gba=function(a,b){var c=iba[a],d=hh[a]||{};hh[a]=d;var e=Math.round(g.jh());for(t in g.dh[a]){var h={context:g.oh(b.C)};h[c]=ih(a,t);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=h[c].length;var k=ph[t];if(k)a:{var l=t;if(k.videoId)var p="VIDEO";else if(k.playlistId)p="PLAYLIST";else break a;h.credentialTransferTokenTargetId=k;h.context=h.context||{};h.context.user=h.context.user||{};h.context.user.credentialTransferTokens=[{token:l,scope:p}]}delete ph[t];h.requestTimeMs=
e;if(k=g.C("EVENT_ID",void 0))p=(g.C("BATCH_CLIENT_COUNTER",void 0)||0)+1,p>jba&&(p=1),g.Cf("BATCH_CLIENT_COUNTER",p),k={serializedEventId:k,clientCounter:p},h.serializedClientEventId=k,qh&&rh&&g.fg("log_gel_rtt_web")&&(h.previousBatchInfo={serializedClientEventId:qh,roundtripMs:rh}),qh=k,rh=0;g.sh(b,a,h,{retry:kba.has(a),onSuccess:lba.bind(this,g.jh())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var t=d.diffCount||0;d.averageTimeBetweenDispatchesMs=t?(d.averageTimeBetweenDispatchesMs*t+c)/
(t+1):c;d.diffCount=t+1}d.previousDispatchMs=e};
lba=function(a){rh=Math.round(g.jh()-a)};
g.vh=function(a){var b=void 0===a?{}:a;a=void 0===b.C?!0:b.C;b=void 0===b.F?!1:b.F;if(null==g.q("_lact",window)){var c=(0,window.parseInt)(g.C("LACT"),10);c=(0,window.isFinite)(c)?(0,g.jd)()-Math.max(c,0):-1;g.n("_lact",c,window);g.n("_fact",c,window);-1==c&&g.th();g.I(window.document,"keydown",g.th);g.I(window.document,"keyup",g.th);g.I(window.document,"mousedown",g.th);g.I(window.document,"mouseup",g.th);a&&(b?g.I(window,"touchmove",function(){uh("touchmove",200)},{passive:!0}):(g.I(window,"resize",
function(){uh("resize",200)}),g.I(window,"scroll",function(){uh("scroll",200)})));
new g.Vg(function(){uh("mouse",100)});
g.I(window.document,"touchstart",g.th,{passive:!0});g.I(window.document,"touchend",g.th,{passive:!0})}};
uh=function(a,b){wh[a]||(wh[a]=!0,g.$f(function(){g.th();wh[a]=!1},b))};
g.th=function(){null==g.q("_lact",window)&&g.vh();var a=(0,g.jd)();g.n("_lact",a,window);-1==g.q("_fact",window)&&g.n("_fact",a,window);(a=g.q("ytglobal.ytUtilActivityCallback_"))&&a()};
g.xh=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.jd)()-a,0)};
g.yh=function(a,b,c,d,e){var h={};h.eventTimeMs=Math.round(d||g.jh());h[a]=b;h.context={lastActivityMs:String(d?-1:g.xh())};e?(a={},e.videoId?a.videoId=e.videoId:e.playlistId&&(a.playlistId=e.playlistId),ph[e.token]=a,e=ih("log_event",e.token)):e=ih("log_event");e.push(h);c&&(eh.log_event=new c);e.length>=(g.gg("web_logging_max_batch")||20)?g.gh():g.fh()};
g.oh=function(a){a={client:{hl:a.PB,gl:a.OB,clientName:a.NB,clientVersion:a.innertubeContextClientVersion}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.C("DELEGATED_SESSION_ID")&&!g.fg("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.C("DELEGATED_SESSION_ID")});return a};
zh=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.C("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.IZ||g.C("AUTHORIZATION"))||(a?b="Bearer "+g.q("gapi.auth.getToken")().HZ:b=Cd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.C("SESSION_INDEX",0),g.fg("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.C("DELEGATED_SESSION_ID")));return d};
Ah=function(a){a=Object.assign({},a);delete a.Authorization;var b=Cd();if(b){var c=new Pe;c.update(g.C("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Cb(c.digest(),!0)}return a};
g.Ch=function(a,b,c,d){g.Bh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Dh=function(a,b,c){g.Bh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.Eh=function(a){var b;(b=g.vf(a))||(a=new qf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.kf(a):null;this.F=window.document.domain||window.location.hostname};
mba=function(a,b,c,d){if(d)return null;d=Fh.get("nextId",!0)||1;var e=Fh.get("requests",!0)||{};e[d]={method:a,request:b,authState:Ah(c),requestTime:Math.round(g.jh())};Fh.set("nextId",d+1,86400,!0);Fh.set("requests",e,86400,!0);return d};
Gh=function(a){var b=Fh.get("requests",!0)||{};delete b[a];Fh.set("requests",b,86400,!0)};
Hh=function(a){var b=Fh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.jh())-d.requestTime)){var e=d.authState,h=Ah(zh(!1));g.mb(e,h)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.jh())),g.sh(a,d.method,e,{}));delete b[c]}}Fh.set("requests",b,86400,!0)}};
g.Ih=function(a){var b=this;this.C=a||{innertubeApiKey:g.C("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.C("INNERTUBE_API_VERSION",void 0),NB:g.C("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),PB:g.C("INNERTUBE_CONTEXT_HL",void 0),OB:g.C("INNERTUBE_CONTEXT_GL",void 0),QB:g.C("INNERTUBE_HOST_OVERRIDE",void 0)||"",RB:!!g.C("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.Zf(function(){Hh(b)},5E3)};
g.sh=function(a,b,c,d){!g.C("VISITOR_DATA")&&.01>Math.random()&&g.Ef(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,xt:"JSON",Uc:function(){d.Uc()},
vs:d.Uc,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
Pj:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
us:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},h="",k=a.C.QB;k&&(h=k);k=a.C.RB||!1;var l=zh(k,h,d);Object.assign(e.headers,l);e.headers.Authorization&&!h&&(e.headers["x-origin"]=window.location.origin);var p=""+h+("/youtubei/"+a.C.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.C.innertubeApiKey,t;if(d.retry&&g.fg("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=h&&(t=mba(b,c,l,k))){var y=e.onSuccess,H=e.Pj;e.onSuccess=function(a,b){Gh(t);y(a,b)};
c.Pj=function(a,b){Gh(t);H(a,b)}}try{g.fg("use_fetch_for_op_xhr")?aba(p,e):g.Dg(p,e)}catch(J){if("InvalidAccessError"==J)t&&(Gh(t),t=0),g.Ef(Error("An extension is blocking network request."),"WARNING");
else throw J;}t&&g.Zf(function(){Hh(a)},5E3)};
g.Jh=function(a,b,c){var d=g.Ih;g.C("ytLoggingEventsDefaultDisabled",!1)&&g.Ih==g.Ih&&(d=null);g.yh(a,b,d,c,void 0)};
g.Kh=function(){g.fg("log_web_meta")&&hba().forEach(function(a){g.Jh("delayedEventMetricCaptured",a)})};
g.Lh=function(a){this.C=a};
g.Mh=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.Mh(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.Nh=function(a,b,c){(0,g.z)(b,function(b){g.yh("visualElementHidden",{csn:a,ve:g.Mh(b),eventType:c?16:8},g.Ih)})};
Ph=function(a,b){var c=Object.keys(a).join("");Oh("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Jh("latencyActionInfo",a))};
Oh=function(a){Qh[a]=Qh[a]||{count:0};var b=Qh[a];b.count++;b.time=g.jh();Rh||(Rh=g.Zf(nba,5E3));return 10<b.count?(11==b.count&&g.ah(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
nba=function(){var a=g.jh(),b;for(b in Qh)6E4<a-Qh[b].time&&delete Qh[b];Rh=0};
Th=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.jd)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Sh)for(a=1,b=0;b<Sh.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Sh.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Yh=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Uh==a)return;Uh=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.xh()>b)&&"visible"==g.Kg()){b=-1;g.Vh&&(b=Math.round(g.jh()-g.Vh));var c=String;var d=g.q("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.jd)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:Wh,index:String(Xh),lastEventDeltaMs:String(b),trigger:a};g.yh("foregroundHeartbeat",
a,g.Ih);g.n("_fact",-1,window);Xh++;g.Vh=g.jh()}};
g.Zh=function(a){a&&g.yh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Wh,clientScreenNonce:a},g.Ih)};
$h=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
ai=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
bi=function(a){return g.C(ai(void 0===a?0:a),void 0)};
g.ci=function(){var a=bi(0),b;a?b=new g.Lh({veType:a,youtubeData:void 0}):b=null;return b};
g.di=function(a){a=void 0===a?0:a;var b=g.C($h(a));b||0!=a||(b=g.C("EVENT_ID"));return b?b:null};
g.ei=function(a,b,c){c=void 0===c?0:c;if(a!==g.C($h(c))||b!==g.C(ai(c)))g.Cf($h(c),a),g.Cf(ai(c),b),0==c&&(b=function(){(0,window.setTimeout)(function(){g.Zh(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
fi=function(){var a=g.ci(),b=g.di();b&&a&&g.Nh(b,[a],!0)};
g.gi=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Ff(d):null;this.H=e?Ff(e):null;this.G=[];this.C=this.F=0};
g.hi=function(a){g.ag(a.F);a.F=g.$f((0,g.r)(a.init,a))};
g.ki=function(a){a.name in ii&&ji(a.name);ii[a.name]={reqs:[],disable:(0,g.r)(a.disable,a)};(0,g.z)(a.deps,function(b){if(!(b in ii))throw Error("Module "+b+" required by "+a.name);ii[b].reqs.push(a.name)});
a.enable()};
ji=function(a){if(a in ii){var b=ii[a];(0,g.z)(b.reqs,function(a){ji(a)});
try{b.disable()}catch(c){}delete ii[a]}};
mi=function(a){Af(g.li,arguments)};
g.ni=function(a){return a in g.li};
oi=function(a){Af(g.li,arguments)};
g.pi=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.w.Yd(),c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Pb(g.Sb(a)),"about:invalid#zClosurez"===a?a="":(a=g.bc(g.dc(a)),a=g.Va(g.af(a))),g.Ua(a)||(a=g.rc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.wc(a).body.appendChild(a))):e?yg(a,b,"POST",e,d):g.C("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?yg(a,b,"GET","",d):oba(a,b))};
oba=function(a,b){var c=new window.Image,d=""+pba++;qi[d]=c;c.onload=c.onerror=function(){b&&qi[d]&&b();delete qi[d]};
c.src=a};
g.ri=function(a,b){a=a||"";var c=a.match(qba);window.spf.style.load(a,c?c[1]:"",b)};
g.si=function(a,b,c){var d=g.C("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Uc(window.location.href);e&&d.push(e);e=g.Uc(a);if(g.La(d,e)||!e&&g.Ra(a,"/"))if(g.fg("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.ec(d,a),a=d.href),a&&(a=g.Vc(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.di();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.cb(a).toString(36),b=b?g.$c(b):"",g.Ch(a,b,c||5))):(c="ST-"+g.cb(a).toString(36),b=b?g.$c(b):"",
g.Ch(c,b,5))}};
g.ti=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.fc(d.location,g.ad(a,b)+c)};
g.ui=function(a,b){b&&g.si(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.ti(a)};
g.vi=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.C("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.si(a,b);if(c)return!1;g.ui(a);return!0};
xi=function(a,b){g.A.call(this);this.H=this.oa=a;this.O=b;this.L=!1;this.api={};this.Z=this.W=null;this.J=new g.df;g.Gd(this,this.J);this.D={};this.la=this.ha=this.F=this.pb=this.C=null;this.V=!1;this.G=this.R=null;this.Sa={};this.wb=["onReady"];this.eb=null;this.qb=window.NaN;this.X={};wi(this);this.Ai("WATCH_LATER_VIDEO_ADDED",this.VG.bind(this));this.Ai("WATCH_LATER_VIDEO_REMOVED",this.WG.bind(this));this.Ai("onAdAnnounce",this.cw.bind(this));this.Ab=new Wg(this);g.Gd(this,this.Ab)};
yi=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Ai=function(a){var b=!0,c=zi(a);c&&a.C&&(a=a.C,b=g.D(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
rba=function(a){if(!a.rb()&&!a.V){var b=Ai(a);if(b&&"html5"==(zi(a)?"html5":null))a.la="html5",a.L||Bi(a);else if(Ci(a),a.la="html5",b&&a.G)a.oa.appendChild(a.G),Bi(a);else{a.C.loaded=!0;var c=!1;a.R=function(){c=!0;var b=a.C.clone();g.q("yt.player.Application.create")(a.oa,b);Bi(a)};
a.V=!0;b?a.R():(g.Uf(a.C.assets.js,a.R),g.ri(a.C.assets.css),Gi(a)&&!c&&g.n("yt.player.Application.create",null,void 0))}}};
zi=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
Bi=function(a){if(!a.rb()){var b=zi(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||sba(a)):a.qb=g.Jf(function(){Bi(a)},50)}};
sba=function(a){wi(a);a.L=!0;var b=zi(a);b.addEventListener&&(a.W=Hi(a,b,"addEventListener"));b.removeEventListener&&(a.Z=Hi(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Hi(a,b,e))}for(var h in a.D)a.W(h,a.D[h]);yi(a);a.ha&&a.ha(a.api);a.J.qa("onReady",a.api)};
Hi=function(a,b,c){var d=b[c];return function(){try{return a.eb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.eb=e,g.Gf(e))}}};
wi=function(a){a.L=!1;if(a.Z)for(var b in a.D)a.Z(b,a.D[b]);for(var c in a.X)g.Lf((0,window.parseInt)(c,10));a.X={};a.W=null;a.Z=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Ai.bind(a);a.api.removeEventListener=a.pL.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.cy.bind(a);a.api.getPlayerType=a.vy.bind(a);a.api.getCurrentVideoConfig=a.Fx.bind(a);a.api.loadNewVideoConfig=a.Gm.bind(a);a.api.isReady=a.PC.bind(a)};
Ii=function(a,b){var c=b;if("string"==typeof b){if(a.Sa[b])return a.Sa[b];c=function(){var a=g.q(b);a&&a.apply(g.m,arguments)};
a.Sa[b]=c}return c?c:null};
tba=function(a,b){var c="ytPlayer"+b+a.O;a.D[b]=c;g.m[c]=function(c){var d=g.Jf(function(){a.rb()||(a.J.qa(b,c),g.kb(a.X,String(d)))},0);
g.lb(a.X,String(d),!0)};
return c};
Ci=function(a){a.cancel();wi(a);a.la=null;a.C&&(a.C.loaded=!1);var b=zi(a);b&&(Ai(a)||!Gi(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.uc(a.oa)};
Gi=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.Li=function(a,b){a=g.ua(a)?g.kc(a):a;var c=g.Ji+"_"+g.Ga(a),d=g.Ki[c];if(d)return d.Gm(b),d.api;d=new xi(a,c);g.Ki[c]=d;g.F("player-added",d.api);g.Ed(d,g.u(uba,d));g.Jf(function(){d.Gm(b)},0);
return d.api};
uba=function(a){delete g.Ki[a.O]};
g.Mi=function(a){if(!a)return null;var b=g.Ji+"_"+g.Ga(a),c=g.Ki[b];c||(c=new xi(a,b),g.Ki[b]=c);return c.api};
g.Ni=function(a){return g.Mi(window.document.getElementById(a))};
g.Oi=function(a,b){this.version=a;this.args=b};
g.Pi=function(a,b){this.topic=a;this.C=b};
g.Ri=function(a,b){var c=g.Qi();c&&c.publish.call(c,a.toString(),a,b)};
g.Qi=function(){return g.q("ytPubsub2Pubsub2Instance")};
g.Ti=function(a,b){var c={};c.key=a;c.value=b;return Si().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.Ui=function(a){return Si().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
Si=function(){return Vi?window.Promise.resolve(Vi):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))Vi=b,a(Vi);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),Si()};
c.onupgradeneeded=vba})};
vba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
wba=function(a){if(Wi.getEntriesByType){var b=Wi.getEntriesByType("paint");if(b=g.Ja(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Da(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
Xi=function(){var a=g.C("TIMING_TICK_EXPIRATION");a||(a={},g.Cf("TIMING_TICK_EXPIRATION",a));return a};
Yi=function(){var a=Xi(),b;for(b in a)g.ag(a[b]);g.Cf("TIMING_TICK_EXPIRATION",{})};
Zi=function(a,b){g.Oi.call(this,1,arguments)};
$i=function(a,b){g.Oi.call(this,1,arguments)};
Bba=function(){aj=!1;var a=g.C("TIMING_INFO",{});for(b in a)bj(b,a[b]);bj("is_nav",1);(a=g.di())&&bj("csn",a);(a=g.C("PREVIOUS_ACTION",void 0))&&bj("pa",a);var b=cj();b.p=g.C("CLIENT_PROTOCOL")||"unknown";b.t=g.C("CLIENT_TRANSPORT")||"unknown";bj("yt_vis",xba());if("cold"==b.yt_lt){a=Wi.timing||{};a.navigationStart&&(dj("srt",a.responseStart),1!=b.prerender&&ej("n",a.navigationStart));b=wba(a);0<b&&dj("fpt",b);fj(a);Wi.getEntriesByType&&yba();a=[];if(window.document.querySelector&&Wi&&Wi.getEntriesByName)for(var c in gj)b=
gj[c],zba(c,b)&&a.push(b);a.length&&bj("rc",a.join(","))}hj(void 0)&&(c={},c.actionType=Aba[g.C("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=ij(void 0),Ph(c,a));if("cold"==cj().yt_lt){a=jj();c=kj();for(var d in a)g.Ra(d,"_")||"tick_"+d in c||lj(d,a[d]);d=cj();for(var e in d)"info_"+e in c||mj(e,d[e])}nj(!0);g.oj(!1)};
rj=function(){pj(void 0);Cba();qj(!1,void 0);g.C("TIMING_ACTION")&&g.Cf("PREVIOUS_ACTION",g.C("TIMING_ACTION"));g.Cf("TIMING_ACTION","")};
dj=function(a,b,c){b||"_"==a[0]||sj(a,c);var d=jj(c),e=b||g.jh();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=Xi();var h=e[a];h&&(g.ag(h),e[a]=0);lj(a,b,c)||g.oj(!1,c);return d[a]};
sj=function(a,b){Wi.mark&&(g.Ra(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Wi.mark(a))};
ej=function(a,b){bj("yt_sts",a,void 0);dj("_start",b,void 0)};
bj=function(a,b,c){cj(c)[a]=b;mj(a,b,c)};
tj=function(a){var b=jj(a);if(b.aft)return b.aft;a=g.C((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
fj=function(a,b){dj("nreqs",a.requestStart,b);dj("nress",a.responseStart,b);dj("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(dj("nrs",a.redirectStart,b),dj("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(dj("ndnss",a.domainLookupStart,b),dj("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(dj("ntcps",a.connectStart,b),dj("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(dj("nstcps",a.secureConnectionStart,
b),dj("ntcpe",a.connectEnd,b))};
g.oj=function(a,b){if(!uj(b)){var c=g.C((b||"")+"TIMING_ACTION",void 0),d=jj(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=tj(b)))if(vj||(g.Ri(Dba,new Zi(Math.round(c-d._start),b)),vj=!0),a||b)wj(b);else{c=!0;var e=g.C("TIMING_WAIT",[]);if(e.length)for(var h=0,k=e.length;h<k;++h)if(!(e[h]in d)){c=!1;break}c&&wj(b)}}};
xba=function(){switch(g.Kg()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
xj=function(a){if(!uj(void 0)){var b=g.C("CSI_SERVICE_NAME","youtube");g.C("TIMING_ACTION",void 0)&&b&&(dj("aa",void 0,void 0),bj("ap",1,void 0),bj("yt_fss",a,void 0),wj(void 0))}};
lj=function(a,b,c){kj(c)["tick_"+a]=b;c||b||g.jh();return hj(c)?(c=ij(c),"_start"==a?Oh("baseline_"+c)||g.Jh("latencyActionBaselined",{clientActionNonce:c},b):Oh("tick_"+a+"_"+c)||g.Jh("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
mj=function(a,b,c){kj(c)["info_"+a]=b;if(hj(c))if(a in yj){var d=yj[a];g.La(Eba,d)&&(b=!!b);a in zj&&(b=zj[a]+b.toUpperCase());if(hj(c)){a={};d=d.split(".");for(var e=a,h=0;h<d.length-1;h++)e[d[h]]=e[d[h]]||{},e=e[d[h]];e[d[d.length-1]]=b;c=ij(c);Ph(a,c)}}else g.La(Fba,a)||g.Ef(Error("Unknown label "+a+" logged with GEL CSI."))};
Aj=function(a){return Math.round(Wi.timing.navigationStart+a)};
yba=function(){var a=window.location.protocol,b=Wi.getEntriesByType("resource");b=(0,g.Bj)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20181201000827/https://fonts.gstatic.com/s/")});
(b=(0,g.xf)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(dj("wffs",Aj(b.startTime)),dj("wffe",Aj(b.responseEnd)))};
zba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=Wi.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,dj("rsf_"+b,d+Math.round(c.fetchStart)),dj("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&("rc"in cj(void 0)||bj("rc",""),0===c.transferSize))?!0:!1:!1};
nj=function(a){g.n("ytglobal.timingready_",a,void 0)};
ij=function(a){var b=Cj(a).nonce;b||(b=Th(),Cj(a).nonce=b);return b};
jj=function(a){return Cj(a).tick};
cj=function(a){return Cj(a).info};
kj=function(a){a=Cj(a);"gel"in a||(a.gel={});return a.gel};
Cj=function(a){return g.q("ytcsi."+(a||"")+"data_")||pj(a)};
pj=function(a){var b={tick:{},info:{}};g.n("ytcsi."+(a||"")+"data_",b,void 0);return b};
uj=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
qj=function(a,b){g.n("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Gba=function(a){var b=jj(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==cj(a).yt_pvis};
hj=function(a){return aj||g.fg("csi_on_gel")||!!Cj(a).useGel};
wj=function(a){Yi();if(!hj(a)){var b=jj(a),c=cj(a),d=b._start;for(k in b)if(g.Ra(k,"_")&&g.Ba(b[k])){var e=k.slice(1);if(e in Hba){var h=(0,g.Dj)(b[k],function(a){return Math.round(a-d)});
c["all_"+e]=h.join()}delete b[k]}h=g.C("CSI_SERVICE_NAME","youtube");var k={v:2,s:h,action:g.C((a||"")+"TIMING_ACTION",void 0)};e=bj.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var l=window.location.protocol+g.q("ytplayer.config.assets.js");(l=Wi.getEntriesByName?Wi.getEntriesByName(l)[0]:null)?c.h5jse=Math.round(c.h5jse-l.responseEnd):delete c.h5jse}b.aft=tj(a);Gba(a)&&"youtube"==h&&(bj("yt_lt","hot_bg",a),h=b.vc,l=b.pbs,delete b.aft,c.aft=Math.round(l-h));for(var p in c)"_"!=p.charAt(0)&&(k[p]=
c[p]);b.ps=g.jh();p={};h=[];for(var t in b)"_"!=t.charAt(0)&&(l=Math.round(b[t]-d),p[t]=l,h.push(t+"."+l));k.rt=h.join(",");(b=g.q("ytdebug.logTiming"))&&b(k,p);Iba(k,!!c.ap,a);g.Ri(Jba,new $i(p.aft+(e||0),a))}};
Iba=function(a,b,c){if(g.fg("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.n("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var h=void 0===h?"":h;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,h)||g.pi(a,void 0,void 0,void 0,h)}catch(k){g.pi(a,void 0,void 0,void 0,h)}}else g.pi(a);qj(!0,c)};
Pba=function(){Ej++;var a=g.oc(),b=new g.Dc(0,0,a.width,a.height);Fj("vph",a.height);Fj("vpw",a.width);(0,g.Gj)("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;Hj.start();for(var h=0;h<c;h++){var k=a[h];if(Ij(k,b)){var l=Kba(k);l.then(Lba);d.push(l);Jj.push(l);k.loadTime||(e=!1)}}e&&Fj("yt_eil",1);(0,g.Gj)("vpcc");b=g.Be(d).then(Mba);g.De(b,Nba);b.then(Oba);Jj.push(b);return b};
Oba=function(){Hj.stop()};
Nba=function(){(0,g.Gj)("vpr")};
Ij=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.Jg(c);if(e in Kj)return!0;if(e in Lj)return!1;var h=window.getComputedStyle(c);if("none"==h.display||"hidden"==h.visibility)return Lj[e]=!0,!1;h=c.getBoundingClientRect();if(!(b.left<=h.left+h.width&&h.left<=b.left+b.width&&b.top<=h.top+h.height&&h.top<=b.top+b.height))return Lj[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Kj[d[c]]=!0;return!0};
Mba=function(a){var b=g.oc();b=new g.Dc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var h=a[d].time;Ij(a[d].KB,b)&&c<h&&(c=h)}return c};
Kba=function(a){var b=Ej;return new g.we(function(c,d){var e={KB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){Ej!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},Mj.push(a))})};
Lba=function(a){Hj.start();a=a.time;Nj<a&&(Nj=a,(0,g.Gj)("lim",a))};
Qba=function(){(0,g.Gj)("vptl",Nj);(0,g.Gj)("vpl",Nj)};
Rba=function(){Jj.forEach(function(a){a.cancel()});
Nj=Jj.length=0;Kj={};Lj={};Mj.forEach(function(a){a.slt=void 0});
Mj.length=0};
g.Oj=function(a,b){g.pi("/gen_204?"+a,b)};
Sba=function(a){if(null==a)return[];var b=[];g.fg("ima_prevent_mpu_queries_on_cached_playback")&&0>Pj.indexOf("ad3_module")&&Pj.push("ad3_module");Pj.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Qj=function(){return g.B(g.x("page-container"),"remote-connected")};
Tba=function(){Rj=g.Kf(Sj,5E3);var a=g.Tj();a?(a.addEventListener("onReady",Sj),a.addEventListener("onStateChange",Sj)):Uj("unable to init PP monitor")};
Xj=function(a){for(var b in g.Ki){var c=g.Ki[b];c&&c.cancel()}if(a=a||null){b=g.Tj();var d=!0;c=g.Vj;g.Vj=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Wj="",g.Li("player-api",a)):b.playVideo();a=g.Yg(a);a.loaded=!0}Sj();g.n("ytplayer.config",a,void 0)};
g.Tj=function(){return g.Ni("player-api")};
Sj=function(){var a=g.Tj();if(a){var b=g.x("player");b=!b||g.B(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.C("PAGE_NAME"),e=g.Qj();!c||d||e||(Uj("PP playing off watch (paused)"),a.pauseVideo());b&&d?Uj("PP off-screen on watch"):b||d||Uj("PP !off-screen off watch")}};
Uj=function(a){var b=g.C("PAGE_NAME");b&&(a+="("+[b,Wj,g.q("_spf_state.nav-counter")].join()+")",g.n("yt.www.persistentplayer.issue",a,void 0),g.Ef(Error(a),"WARNING"))};
Zj=function(){(0,g.Gj)("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){(0,g.Gj)("cpt");g.F("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?((0,g.Gj)("cpt"),g.F("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){(0,g.Gj)("cpt");
g.F("on_cpt_tick",(new Date).getTime())},0);
Uba();g.C("CSI_VIEWPORT")&&(Yj=Pba(),Yj.then(function(a){(0,g.Gj)("vpl",a);Yj=null},function(){}))};
Uba=function(){ak("init");var a=g.C("PAGE_NAME",void 0);a&&ak("init-"+a)};
ak=function(a){g.dg()?bk.push(g.$f(g.u(g.Sf,a),0)):g.F(a)};
ck=function(){g.bg(bk);bk.length=0;Rba();Yj&&(Yj.cancel(),Yj=null);var a=g.C("PAGE_NAME",void 0);a&&g.Sf("dispose-"+a);g.Sf("dispose")};
Vba=function(){Zj()};
Wba=function(){g.C("TIMING_REPORT_ON_UNLOAD")&&g.oj(!0);xj("u");g.Yh("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");fi();g.Kh();g.gh();ck();g.Sf("pageunload")};
dk=function(){g.th()};
ek=function(){window.yt_spf_loaded_history=!0;g.th()};
jk=function(){fk=1;gk=hk=0;g.C("TIMING_REPORT_ON_UNLOAD")&&g.oj(!0);g.fg("warm_load_nav_start_web")?(xj("n"),rj(),nj(!1),g.Cf("TIMING_AFT_KEYS",[]),bj("yt_lt","warm"),g.Cf("TIMING_ACTION",""),g.Cf("TIMING_WAIT",[]),Yi(),ej("n")):(xj("n"),rj(),ej("n"));sj("nr");ik(Xba);fi();g.Sf("navigate")};
nk=function(a){a=a.detail.part||a.detail.partial;(0,g.Gj)("nc"+hk);++hk;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.Gj)("bc");else{var b=1==fk;fk=2;b?(ik(Yba),kk()):ik(Zba);if(b=a&&a.data&&a.data.swfcfg)lk(a.timing,b.args),mk(b)}};
ok=function(){(0,g.Gj)("np"+gk);++gk};
qk=function(a){a=a.detail.response;var b=1==fk;fk=3;b&&(ik($ba),kk());if(b=a.data&&a.data.swfcfg)lk(a.timing,b.args),mk(b)};
uk=function(a){(0,g.Gj)("nd");a=a.detail.response;g.rk=a.cacheKey;a=a.timing;var b=window._spf_state;g.sk.navigationCount=b&&b["nav-counter"]||0;g.fg("warm_load_nav_start_web")?(0,g.Gj)("srt",a.responseStart):(ej("ne",a.responseStart),Fj("srt",Math.max(0,a.responseStart-a.navigationStart)));Fj("yt_lt",a.spfCached?"hot":"warm");(0,g.Gj)("pfs",a.fetchStart);(0,g.Gj)("pfrs",a.responseStart);"redirectStart"in a&&aca(a);ik(tk);window.document.getElementById("content").style.height="";Zj();fk=0};
vk=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Ef(a)};
wk=function(a){g.Oj(g.$c({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
cca=function(){bca();window.yt_spf_loaded_history=!1};
dca=function(){};
kk=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");ck();a=g.C("PREVIOUS_ACTION");for(var b in g.Bf)delete g.Bf[b];g.Cf("PREVIOUS_ACTION",a);g.Cf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.n("ytplayer.config",null,void 0);if((b=g.Tj())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Wj=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),Wj="recovered"):Wj="missing2"}else Wj="missing";Sj()};
mk=function(a){"cfg"in jj(void 0)||(0,g.Gj)("cfg");Xj(a)};
ik=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.ag(xk);xk=g.$f(function(){var c=a[0],d=a[1],e=a[2];b.className="";var h=b.style;h.transitionDuration=h.webkitTransitionDuration=c+"ms";h.width=d+"%";g.Lf(yk);yk=g.Jf(function(){b.className=e},c)},0)};
bca=function(){var a=tk[0]+50;g.Lf(yk);yk=g.Jf(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
lk=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Sba(b));g.C("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Oj(g.$c(c)))};
Ak=function(){return"granted"!=window.Notification.permission?window.Promise.resolve():zk().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})["catch"](function(){})};
Ck=function(){Bk({type:"notifications_register",data:g.C("ID_TOKEN")})};
zk=function(){return window.navigator.serviceWorker.getRegistration(String(eg("service_worker_scope")||""))};
Dk=function(a){return!(!a||!a.pushManager)};
Bk=function(a){zk().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
eca=function(){if(!g.C("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(eg("service_worker_push_force_notification_prompt_tag")||"");return a?g.Ui("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
ica=function(){var a=void 0===a?!1:a;return(window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification?zk().then(Dk):window.Promise.resolve(!1)).then(function(b){if(!b)return window.Promise.resolve();b=Ak().then(function(){Bk({type:"notifications_check_registration",data:g.C("ID_TOKEN")})});
return"default"!=window.Notification.permission?b:b.then(function(){return fca(a)}).then(function(a){if(a)return gca(),hca().then(function(){})})})};
fca=function(a){return g.C("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.C("LOGGED_IN",void 0)&&(void 0===a?0:a)?eca().then(function(a){if(a)return!0;a=[jca(),kca()];g.C("LOGGED_IN",void 0)||a.push(lca());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
lca=function(){var a=g.gg("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.Ui("WatchCount").then(function(b){return b>=a})};
hca=function(){var a=arguments;g.fg("service_worker_push_prompt_modal_enable")&&mca();return window.Notification.requestPermission().then(function(a){Ek();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return Ak().then(function(){g.Ti("NotificationsDisabled",!1);Ck();return window.Promise.resolve(!0)});
"denied"==a&&Ck();return window.Promise.resolve(!1)})["catch"](function(){Ek();
return window.Promise.reject.apply(window.Promise,a instanceof Array?a:aaa(g.ea(a)))})};
gca=function(){g.Ui("PromptCount").then(function(a){return g.Ti("PromptCount",a+1)}).then(function(){return g.Ti("PromptTime",(0,g.jd)())}).then(function(){var a=String(eg("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.Ui("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.Ti("PromptTags",JSON.stringify(c))})})};
jca=function(){return-1==g.gg("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.Ui("PromptCount").then(function(a){a||(a=0);return window.Promise.resolve(a<g.gg("service_worker_push_prompt_cap"))})};
kca=function(){var a=g.gg("service_worker_push_prompt_delay_microseconds");return a?g.Ui("PromptTime").then(function(b){return window.Promise.resolve((0,g.jd)()-a>(b||0))}):window.Promise.resolve(!0)};
nca=function(){Fk||Ek()};
Gk=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
mca=function(){var a=g.x("yt-push-prompt-modal-bg");Fk=g.fg("service_worker_push_prompt_modal_ignore_click");a?Gk(a):(a=g.rc("div",{id:"yt-push-prompt-modal-bg"}),Gk(a),window.document.body.appendChild(a),g.Tg(window.document,"click",nca))};
Ek=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.vc(a)};
oca=function(a){return Dk(a)?ica():window.Promise.resolve()};
qca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(pca)})};
sca=function(){var a="/sw.js",b=g.C("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=Hk(a);g.fg("service_worker_push_enabled")&&a.then(rca).then(oca)};
rca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
pca=function(a){a&&Hk("/sw.js?0",a.scope)};
Hk=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(eg("service_worker_scope")||"")||"/"})};
Ik=function(){g.gi.call(this,"www/base");this.D=0};
Jk=function(a){(a=a.detail.name)&&ji(a)};
g.aa=[];fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)Kk=Object.setPrototypeOf;else{var Lk;a:{var tca={bw:!0},Mk={};try{Mk.__proto__=tca;Lk=Mk.bw;break a}catch(a){}Lk=!1}Kk=Lk?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ha=Kk,ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,baa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
na("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=oa(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),h=a.length;0<h&&0<e;)if(b[--e]!=a[--h])return!1;return 0>=h}});
var uca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
na("Object.assign",function(a){return a||uca});
na("WeakMap",function(a){function b(a){this.ib=(k+=Math.random()+1).toString();if(a){a=g.ea(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){sa(a,h)||ka(a,h,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(y){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var k=0;b.prototype.set=function(a,b){d(a);if(!sa(a,h))throw Error("WeakMap key fail: "+a);a[h][this.ib]=b;return this};
b.prototype.get=function(a){return sa(a,h)?a[h][this.ib]:void 0};
b.prototype.has=function(a){return sa(a,h)&&sa(a[h],this.ib)};
b.prototype["delete"]=function(a){return sa(a,h)&&sa(a[h],this.ib)?delete a[h][this.ib]:!1};
return b});
na("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return qa(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?h.has(b)?c=h.get(b):(c=""+ ++k,h.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&sa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,xc:l}}return{id:c,list:d,index:-1,xc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.ea(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.ea([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(H){return!1}}())return a;
ra();var h=new window.WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.xc?c.xc.value=b:(c.xc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.xc),this.F.previous.next=c.xc,this.F.previous=c.xc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.xc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.xc.previous.next=a.xc.next,a.xc.next.previous=a.xc.previous,a.xc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).xc};
e.prototype.get=function(a){return(a=d(this,a).xc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
na("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.ea(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.ea([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),h=e.next();if(h.done||h.value[0]!=b||h.value[1]!=b)return!1;h=e.next();return h.done||h.value[0]==b||4!=h.value[0].x||h.value[1]!=h.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
ra();b.prototype.add=function(a){a=0===a?0:a;this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
na("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
na("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==oa(this,a,"includes").indexOf(a,c||0)}});
var vca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
na("Reflect.construct",function(){return vca});
na("Promise",function(a){function b(a){this.F=0;this.D=void 0;this.C=[];var b=this.H();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.L()})};
var e=ja.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.L=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(t){this.H(t)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.O),reject:a(this.G)}};
b.prototype.O=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.L(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(p){this.G(p);return}"function"==typeof b?this.la(b,a):this.L(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.L=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.F)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.F);this.F=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var a=0;a<this.C.length;++a)h.F(this.C[a]);this.C=null}};
var h=new c;b.prototype.V=function(a){var b=this.H();a.Ii(b.resolve,b.reject)};
b.prototype.la=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(t){c.reject(t)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(la){h(la)}}:b}
var e,h,k=new b(function(a,b){e=a;h=b});
this.Ii(d(a,e),d(c,h));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Ii=function(a,b){function c(){switch(d.F){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.F);}}
var d=this;null==this.C?h.F(c):this.C.push(c)};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.ea(a),h=e.next();!h.done;h=e.next())d(h.value).Ii(b,c)})};
b.all=function(a){var c=g.ea(a),e=c.next();return e.done?d([]):new b(function(a,b){function h(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Ii(h(k.length-1),b),e=c.next();while(!e.done)})};
return b});
na("Array.from",function(a){return a?a:function(a,c,d){c=null!=c?c:function(a){return a};
var b=[],h="undefined"!=typeof window.Symbol&&window.Symbol.iterator&&a[window.Symbol.iterator];if("function"==typeof h){a=h.call(a);for(var k=0;!(h=a.next()).done;)b.push(c.call(d,h.value,k++))}else for(h=a.length,k=0;k<h;k++)b.push(c.call(d,a[k],k));return b}});
na("Object.entries",function(a){return a?a:function(a){var b=[],d;for(d in a)sa(a,d)&&b.push([d,a[d]]);return b}});
na("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!(0,window.isNaN)(a)&&window.Infinity!==a&&-window.Infinity!==a}});
na("Number.parseInt",function(a){return a||window.parseInt});
g.Nk=g.Nk||{};g.m=this;Fa="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.jd=Date.now||function(){return+new Date};g.Nc=window.document;g.Hc=window;g.v(g.Ha,Error);g.Ha.prototype.name="CustomError";g.Ka=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.ua(a))return g.ua(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.wca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.ua(a))return g.ua(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)};
g.Bj=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],h=0,k=g.ua(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var p=k[l];
b.call(c,p,l,a)&&(e[h++]=p)}return e};
g.Dj=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),h=g.ua(a)?a.split(""):a,k=0;k<d;k++)k in h&&(e[k]=b.call(c,h[k],k,a));
return e};
g.xf=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.r)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.z)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Ok=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return!0;
return!1};
g.Pk=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&!b.call(c,e[h],h,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.$a=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.Qk=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var Rk=g.m.navigator;if(Rk){var Sk=Rk.userAgent;if(Sk){g.db=Sk;break a}}g.db=""};var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.xb[" "]=g.xa;g.w={Ik:!1,Hk:!1,Yn:!1,co:!1,Kk:!1,Lk:!1,Kv:!1};g.w.jh=g.w.Ik||g.w.Hk||g.w.Yn||g.w.Kk||g.w.co||g.w.Lk;g.w.Yd=function(){return g.db};
g.w.Kl=function(){return g.m.navigator||null};
g.w.KZ=function(){return g.w.Kl()};
g.w.Sb=g.w.jh?g.w.Lk:g.eb("Opera");g.w.ma=g.w.jh?g.w.Ik:g.qb();g.w.qc=g.w.jh?g.w.Hk:g.eb("Edge");g.w.Ok=g.w.qc||g.w.ma;g.w.Bb=g.w.jh?g.w.Yn:g.eb("Gecko")&&!(g.Ya(g.db.toLowerCase(),"webkit")&&!g.eb("Edge"))&&!(g.eb("Trident")||g.eb("MSIE"))&&!g.eb("Edge");g.w.mb=g.w.jh?g.w.co||g.w.Kk:g.Ya(g.db.toLowerCase(),"webkit")&&!g.eb("Edge");g.w.YB=function(){return g.w.mb&&g.eb("Mobile")};
g.w.sU=g.w.Kk||g.w.YB();g.w.tg=g.w.mb;g.w.Uw=function(){var a=g.w.Kl();return a&&a.platform||""};
g.w.wV=g.w.Uw();g.w.ao=!1;g.w.eo=!1;g.w.Zn=!1;g.w.ho=!1;g.w.ih=!1;g.w.og=!1;g.w.mg=!1;g.w.Jk=!1;g.w.Lv=!1;g.w.Vd=g.w.ao||g.w.eo||g.w.Zn||g.w.ho||g.w.ih||g.w.og||g.w.mg||g.w.Jk;g.w.od=g.w.Vd?g.w.ao:g.eb("Macintosh");g.w.vo=g.w.Vd?g.w.eo:g.eb("Windows");g.w.WB=function(){return g.eb("Linux")||g.eb("CrOS")};
g.w.Sv=g.w.Vd?g.w.Zn:g.w.WB();g.w.cC=function(){var a=g.w.Kl();return!!a&&g.Ya(a.appVersion||"","X11")};
g.w.DZ=g.w.Vd?g.w.ho:g.w.cC();g.w.ANDROID=g.w.Vd?g.w.ih:g.eb("Android");g.w.yi=g.w.Vd?g.w.og:vb();g.w.xi=g.w.Vd?g.w.mg:g.eb("iPad");g.w.Qv=g.w.Vd?g.w.Jk:g.eb("iPod");g.w.IOS=g.w.Vd?g.w.og||g.w.mg||g.w.Jk:g.wb();g.w.zS=g.w.Vd?g.w.Lv:g.Ya(g.db.toLowerCase(),"kaios");g.w.vh=function(){var a="",b=g.w.cz();b&&(a=b?b[1]:"");return g.w.ma&&(b=g.w.Ip(),null!=b&&b>(0,window.parseFloat)(a))?String(b):a};
g.w.cz=function(){var a=g.w.Yd();if(g.w.Bb)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.w.qc)return/Edge\/([\d\.]+)/.exec(a);if(g.w.ma)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.w.mb)return/WebKit\/(\S+)/.exec(a);if(g.w.Sb)return/(?:Version)[ \/]?(\S+)/.exec(a)};
g.w.Ip=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.w.VERSION=g.w.vh();g.w.compare=function(a,b){return g.bb(a,b)};
g.w.bC={};g.w.fb=function(a){return g.w.Kv||maa(a,function(){return 0<=g.bb(g.w.VERSION,a)})};
g.w.dd=g.w.fb;g.w.Bc=function(a){return Number(g.w.oo)>=a};
g.w.SZ=g.w.Bc;var Tk;var Uk=g.m.document;Tk=Uk&&g.w.ma?g.w.Ip()||("CSS1Compat"==Uk.compatMode?(0,window.parseInt)(g.w.VERSION,10):5):void 0;g.w.oo=Tk;g.w.product={};g.w.product.Xn=!1;g.w.product.og=!1;g.w.product.mg=!1;g.w.product.ih=!1;g.w.product.Wn=!1;g.w.product.bo=!1;g.w.product.qg=g.w.Ik||g.w.Hk||g.w.Lk||g.w.product.Xn||g.w.product.og||g.w.product.mg||g.w.product.ih||g.w.product.Wn||g.w.product.bo;g.w.product.Sb=g.w.Sb;g.w.product.ma=g.w.ma;g.w.product.qc=g.w.qc;g.w.product.Pk=g.w.product.qg?g.w.product.Xn:rb();g.w.product.VB=function(){return vb()||g.eb("iPod")};
g.w.product.yi=g.w.product.qg?g.w.product.og:g.w.product.VB();g.w.product.xi=g.w.product.qg?g.w.product.mg:g.eb("iPad");g.w.product.ANDROID=g.w.product.qg?g.w.product.ih:g.ub();g.w.product.CHROME=g.w.product.qg?g.w.product.Wn:g.sb();g.w.product.ZB=function(){return g.tb()&&!g.wb()};
g.w.product.tg=g.w.product.qg?g.w.product.bo:g.w.product.ZB();var Bb,Ab;Bb=null;g.Db=null;Ab=null;g.Ib="function"==typeof window.Uint8Array;g.Eb.prototype.Rd=function(){Fb(this);return this.ec};
g.Eb.prototype.G=g.Ib?function(){var a=window.Uint8Array.prototype.toJSON;window.Uint8Array.prototype.toJSON=function(){return Cb(this)};
try{return JSON.stringify(this.ec&&this.Rd(),Gb)}finally{window.Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.Rd(),Gb)};
g.Eb.prototype.toString=function(){Fb(this);return this.ec.toString()};
g.Eb.prototype.clone=function(){return new this.constructor(Hb(this.Rd()))};g.f=g.Jb.prototype;g.f.isEnabled=function(){return window.navigator.cookieEnabled};
g.f.set=function(a,b,c,d,e,h){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ta(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";h=h?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.jd)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+h};
g.f.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,h;e<d.length;e++){h=(0,g.$a)(d[e]);if(0==h.lastIndexOf(c,0))return h.substr(c.length);if(h==a)return""}return b};
g.f.remove=function(a,b,c){var d=g.ta(this.get(a));this.set(a,"",0,b,c);return d};
g.f.Pc=function(){return g.Kb(this).keys};
g.f.Jb=g.ba(1);g.f.isEmpty=function(){return!this.C.cookie};
g.f.Pb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.f.Wd=g.ba(3);g.f.clear=function(){for(var a=g.Kb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Bh=new g.Jb("undefined"==typeof window.document?null:window.document);var naa;naa=!g.w.ma||g.w.Bc(9);g.xca=!g.w.Bb&&!g.w.ma||g.w.ma&&g.w.Bc(9)||g.w.Bb&&g.w.fb("1.9.1");g.Vk=g.w.ma&&!g.w.fb("9");g.yca=g.w.ma||g.w.Sb||g.w.mb;g.zca=g.w.ma;g.Aca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Bca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Wk=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.Ob.prototype.ge=!0;g.Ob.prototype.td=function(){return this.C};
g.Ob.prototype.jm=!0;g.Ob.prototype.Ef=function(){return 1};
var Qb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nb={};g.Rb("about:blank");g.Vb.prototype.ge=!0;g.Ub={};g.Vb.prototype.td=function(){return this.C};
g.Xk=g.Wb("");g.Yk=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.Zk=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Yb.prototype.ge=!0;g.Xb={};g.Yb.prototype.td=function(){return this.C};
g.$k=g.Zb("");g.ac.prototype.jm=!0;g.ac.prototype.Ef=function(){return this.F};
g.ac.prototype.ge=!0;g.ac.prototype.td=function(){return this.C};
var $b={};g.cc("<!DOCTYPE html>",0);g.al=g.cc("",0);g.bl=g.cc("<br>",0);g.Cca=g.Mb(function(){var a=window.document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});g.f=g.gc.prototype;g.f.clone=function(){return new g.gc(this.x,this.y)};
g.f.equals=function(a){return a instanceof g.gc&&g.hc(this,a)};
g.f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.f.translate=function(a,b){a instanceof g.gc?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.wa(b)&&(this.y+=b));return this};
g.f.scale=function(a,b){var c=g.wa(b)?b:a;this.x*=a;this.y*=c;return this};g.f=g.jc.prototype;g.f.clone=function(){return new g.jc(this.width,this.height)};
g.f.tw=function(){return this.width*this.height};
g.f.aspectRatio=function(){return this.width/this.height};
g.f.isEmpty=function(){return!this.tw()};
g.f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.scale=function(a,b){var c=g.wa(b)?b:a;this.width*=a;this.height*=c;return this};var lc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Dca={wP:"allow-forms",xP:"allow-modals",yP:"allow-orientation-lock",zP:"allow-pointer-lock",AP:"allow-popups",BP:"allow-popups-to-escape-sandbox",CP:"allow-presentation",DP:"allow-same-origin",EP:"allow-scripts",FP:"allow-top-navigation",GP:"allow-top-navigation-by-user-activation"},paa=g.Mb(function(){return g.Ac(Dca)});g.f=g.Dc.prototype;g.f.clone=function(){return new g.Dc(this.left,this.top,this.width,this.height)};
g.f.contains=function(a){return a instanceof g.gc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.translate=function(a,b){a instanceof g.gc?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.wa(b)&&(this.top+=b));return this};
g.f.scale=function(a,b){var c=g.wa(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.cl=g.w.Bb?"MozUserSelect":g.w.mb||g.w.qc?"WebkitUserSelect":null;var Lc=g.Kc(window),Mc=Lc&&window.parent||window;var raa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Eca=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;dd.prototype.getUrl=function(a,b,c,d){a=a+"//"+b+c;var e=taa(this)-c.length-d.length;if(0>e)return"";this.C.sort(function(a,b){return a-b});
c=null;b="";for(var h=0;h<this.C.length;h++)for(var k=this.C[h],l=this.F[k],p=0;p<l.length;p++){if(!e){c=null==c?k:c;break}var t=gd(l[p],this.D,",$");if(t){t=b+t;if(e>=t.length){e-=t.length;a+=t;b=this.D;break}else this.H&&(b=e,t[b-1]==this.D&&--b,a+=t.substr(0,b),b=this.D,e=0);c=null==c?k:c}}h="";this.G&&null!=c&&(h=b+this.G+"="+c);return a+h+d};var dl=null;var rd=g.m.performance,Fca=!!(rd&&rd.mark&&rd.measure&&rd.clearMarks),od=g.Mb(function(){var a;if(a=Fca){var b;if(null===dl){dl="";try{a="";try{a=g.m.top.location.hash}catch(c){a=g.m.location.hash}a&&(dl=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=dl;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
qd.prototype.disable=function(){this.C=!1;this.events!=this.F.google_js_reporting_queue&&(od()&&g.z(this.events,g.sd),this.events.length=0)};
qd.prototype.start=function(a,b){if(!this.C)return null;var c=md()||ld();c=new uaa(a,b,c);var d="goog_"+c.uniqueId+"_start";rd&&od()&&rd.mark(d);return c};
qd.prototype.end=function(a){if(this.C&&g.wa(a.value)){var b=md()||ld();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";rd&&od()&&rd.mark(b);this.C&&this.events.push(a)}};vd.prototype.F=function(a,b,c,d,e){e=e||"jserror";try{var h=new dd;h.H=!0;hd(h,1,"context",a);b.error&&b.meta&&b.id||(b=g.yd(b));b.msg&&hd(h,2,"msg",b.msg.substring(0,512));b.file&&hd(h,3,"file",b.file);0<b.line&&hd(h,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(S){}b=[k];h.C.push(5);h.F[5]=b;var l=g.cd(),p=new bd(g.m.location.href,g.m,!1);b=null;var t=l.length-1;for(d=t;0<=d;--d){var y=l[d];!b&&Eca.test(y.url)&&(b=y);if(y.url&&!y.ir){p=y;break}}y=null;var H=l.length&&l[t].url;0!=p.depth&&
H&&(y=l[t]);var J=new saa(p,y);J.F&&hd(h,6,"top",J.F.url||"");hd(h,7,"url",J.C.url||"");g.id(this.D,e,h,c)}catch(S){try{g.id(this.D,e,{context:"ecmserr",rctx:a,msg:g.xd(S),url:J&&J.C.url},c)}catch(ca){}}return!0};
g.ia(wd,Qc);var nd,td;nd=g.Oc();td=new qd;g.ud=new function(){var a=void 0===a?g.Hc:a;this.G="http:"===a.location.protocol?"http:":"https:";this.F="pagead2.googlesyndication.com";this.D="/pagead/gen_204?id=";this.C=.01};
g.el=new vd;"complete"==nd.document.readyState?nd.google_measure_js_timing||td.disable():td.C&&Bc(nd,"load",function(){nd.google_measure_js_timing||td.disable()});var fl;fl={};g.gl=(fl[8]="google_prev_ad_formats_by_region",fl[9]="google_prev_ad_slotnames_by_region",fl);g.mg=(new Date).getTime();g.A.prototype.Kc=!1;g.A.prototype.rb=function(){return this.Kc};
g.A.prototype.dispose=function(){this.Kc||(this.Kc=!0,this.Y())};
g.A.prototype.Y=function(){if(this.jc)for(;this.jc.length;)this.jc.shift()()};g.Hd.prototype.stopPropagation=function(){this.F=!0};
g.Hd.prototype.preventDefault=function(){this.Zt=!1};var Zd,Hca,Aaa;g.Gca=!g.w.ma||g.w.Bc(9);Zd=!g.w.ma||g.w.Bc(9);Hca=g.w.ma&&!g.w.fb("9");Aaa=function(){if(!g.m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.m.addEventListener("test",g.xa,b),g.m.removeEventListener("test",g.xa,b)}catch(c){}return a}();g.hl=Id("TransitionEnd");
g.il={gQ:"click",JW:"rightclick",OQ:"dblclick",lh:"mousedown",mh:"mouseup",CU:"mouseover",BU:"mouseout",AU:"mousemove",yU:"mouseenter",zU:"mouseleave",kh:"mousecancel",RW:"selectionchange",SW:"selectstart",xZ:"wheel",BS:"keypress",AS:"keydown",CS:"keyup",bQ:"blur",FR:"focus",QQ:"deactivate",GR:"focusin",IR:"focusout",eQ:"change",BW:"reset",QW:"select",rX:"submit",lS:"input",iW:"propertychange",nR:"dragstart",iR:"drag",kR:"dragenter",mR:"dragover",lR:"dragleave",DROP:"drop",jR:"dragend",BX:"touchstart",
AX:"touchmove",zX:"touchend",yX:"touchcancel",aQ:"beforeunload",BQ:"consolemessage",EQ:"contextmenu",TQ:"devicechange",UQ:"devicemotion",VQ:"deviceorientation",ZQ:"DOMContentLoaded",ERROR:"error",bS:"help",LOAD:"load",gU:"losecapture",fV:"orientationchange",nW:"readystatechange",EW:"resize",MW:"scroll",NY:"unload",cQ:"canplay",dQ:"canplaythrough",oR:"durationchange",rR:"emptied",ENDED:"ended",bU:"loadeddata",cU:"loadedmetadata",PAUSE:"pause",PLAY:"play",PLAYING:"playing",lW:"ratechange",OW:"seeked",
PW:"seeking",nX:"stalled",tX:"suspend",wX:"timeupdate",XY:"volumechange",YY:"waiting",kX:"sourceopen",jX:"sourceended",iX:"sourceclosed",ZO:"abort",UPDATE:"update",RY:"updatestart",PY:"updateend",ZR:"hashchange",lV:"pagehide",mV:"pageshow",fW:"popstate",HQ:"copy",tV:"paste",LQ:"cut",UP:"beforecopy",VP:"beforecut",YP:"beforepaste",eV:"online",ZU:"offline",MESSAGE:"message",AQ:"connect",mS:"install",aP:"activate",DR:"fetch",KR:"foreignfetch",rU:"messageerror",oX:"statechange",QY:"updatefound",GQ:"controllerchange",
KP:Id("AnimationStart"),IP:Id("AnimationEnd"),JP:Id("AnimationIteration"),CX:g.hl,XV:"pointerdown",dW:"pointerup",WV:"pointercancel",aW:"pointermove",cW:"pointerover",bW:"pointerout",YV:"pointerenter",ZV:"pointerleave",SR:"gotpointercapture",hU:"lostpointercapture",DU:"MSGestureChange",EU:"MSGestureEnd",FU:"MSGestureHold",GU:"MSGestureStart",HU:"MSGestureTap",IU:"MSGotPointerCapture",JU:"MSInertiaStart",KU:"MSLostPointerCapture",LU:"MSPointerCancel",MU:"MSPointerDown",NU:"MSPointerEnter",OU:"MSPointerHover",
PU:"MSPointerLeave",QU:"MSPointerMove",RU:"MSPointerOut",SU:"MSPointerOver",TU:"MSPointerUp",TEXT:"text",vX:g.w.ma?"textinput":"textInput",xQ:"compositionstart",yQ:"compositionupdate",wQ:"compositionend",WP:"beforeinput",uR:"exit",ZT:"loadabort",aU:"loadcommit",dU:"loadredirect",eU:"loadstart",fU:"loadstop",FW:"responsive",gX:"sizechanged",OY:"unresponsive",TY:"visibilitychange",qX:"storage",eR:"DOMSubtreeModified",aR:"DOMNodeInserted",cR:"DOMNodeRemoved",dR:"DOMNodeRemovedFromDocument",bR:"DOMNodeInsertedIntoDocument",
XQ:"DOMAttrModified",YQ:"DOMCharacterDataModified",ZP:"beforeprint",vP:"afterprint",XP:"beforeinstallprompt",OP:"appinstalled"};g.v(g.Jd,g.Hd);var Ica={2:"touch",3:"pen",4:"mouse"};
g.Jd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.w.Bb&&(g.yb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.w.od?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.ua(a.pointerType)?a.pointerType:Ica[a.pointerType]||"";this.state=a.state;this.zc=
a;a.defaultPrevented&&this.preventDefault()};
g.Jd.prototype.stopPropagation=function(){g.Jd.M.stopPropagation.call(this);this.zc.stopPropagation?this.zc.stopPropagation():this.zc.cancelBubble=!0};
g.Jd.prototype.preventDefault=function(){g.Jd.M.preventDefault.call(this);var a=this.zc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Hca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Kd="closure_listenable_"+(1E6*Math.random()|0),xaa=0;g.f=g.Nd.prototype;g.f.add=function(a,b,c,d,e){var h=a.toString();a=this.listeners[h];a||(a=this.listeners[h]=[],this.C++);var k=Qd(a,b,d,e);-1<k?(b=a[k],c||(b.Hi=!1)):(b=new yaa(b,this.src,h,!!d,e),b.Hi=c,a.push(b));return b};
g.f.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Qd(e,b,c,d);return-1<b?(Md(e[b]),g.Na(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.f.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Md(d[e]);delete this.listeners[c];this.C--}return b};
g.f.Eg=g.ba(5);g.f.Af=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Qd(a,b,c,d));return-1<e?a[e]:null};
g.f.hasListener=function(a,b){var c=g.ta(a),d=c?a.toString():"",e=g.ta(b);return g.gb(this.listeners,function(a){for(var h=0;h<a.length;++h)if(!(c&&a[h].type!=d||e&&a[h].capture!=b))return!0;return!1})};var Wd="closure_lm_"+(1E6*Math.random()|0),be={},Yd=0,ee="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.fe,g.A);g.fe.prototype[Kd]=!0;g.f=g.fe.prototype;g.f.dj=function(){return this.Wm};
g.f.Zh=g.ba(6);g.f.addEventListener=function(a,b,c,d){g.Sd(this,a,b,c,d)};
g.f.removeEventListener=function(a,b,c,d){g.$d(this,a,b,c,d)};
g.f.dispatchEvent=function(a){var b=this.dj();if(b){var c=[];for(var d=1;b;b=b.dj())c.push(b),++d}b=this.dw;d=a.type||a;if(g.ua(a))a=new g.Hd(a,b);else if(a instanceof g.Hd)a.target=a.target||b;else{var e=a;a=new g.Hd(d,b);g.pb(a,e)}e=!0;if(c)for(var h=c.length-1;!a.F&&0<=h;h--){var k=a.currentTarget=c[h];e=ge(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=ge(k,d,!0,a)&&e,a.F||(e=ge(k,d,!1,a)&&e));if(c)for(h=0;!a.F&&h<c.length;h++)k=a.currentTarget=c[h],e=ge(k,d,!1,a)&&e;return e};
g.f.Y=function(){g.fe.M.Y.call(this);this.removeAllListeners();this.Wm=null};
g.f.N=function(a,b,c,d){return this.Fd.add(String(a),b,!1,c,d)};
g.f.af=function(a,b,c,d){return this.Fd.add(String(a),b,!0,c,d)};
g.f.Xa=function(a,b,c,d){return this.Fd.remove(String(a),b,c,d)};
g.f.removeAllListeners=function(a){return this.Fd?this.Fd.removeAll(a):0};
g.f.Eg=g.ba(4);g.f.Af=function(a,b,c,d){return this.Fd.Af(String(a),b,c,d)};
g.f.hasListener=function(a,b){return this.Fd.hasListener(g.ta(a)?String(a):void 0,b)};he.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var re;var se=new he(function(){return new le},function(a){a.reset()});
ke.prototype.add=function(a,b){var c=se.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
ke.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
le.prototype.set=function(a,b){this.yc=a;this.scope=b;this.next=null};
le.prototype.reset=function(){this.next=this.scope=this.yc=null};var me,ne=!1,oe=new ke;xe.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var ye=new he(function(){return new xe},function(a){a.reset()});
g.we.prototype.then=function(a,b,c){return Ce(this,g.Da(a)?a:null,g.Da(b)?b:null,c)};
g.te(g.we);g.we.prototype.cancel=function(a){0==this.C&&pe(function(){var b=new g.Je(a);Ee(this,b)},this)};
g.we.prototype.W=function(a){this.C=0;g.ve(this,2,a)};
g.we.prototype.O=function(a){this.C=0;g.ve(this,3,a)};
g.we.prototype.J=function(){for(var a;a=Fe(this);)Ge(this,a,this.C,this.R);this.L=!1};
var Le=je;g.v(g.Je,g.Ha);g.Je.prototype.name="cancel";g.v(g.Oe,g.A);g.f=g.Oe.prototype;g.f.ib=0;g.f.Y=function(){g.Oe.M.Y.call(this);this.stop();delete this.C;delete this.F};
g.f.start=function(a){this.stop();this.ib=g.Me(this.kc,g.ta(a)?a:this.D)};
g.f.stop=function(){this.isActive()&&g.Ne(this.ib);this.ib=0};
g.f.yf=g.ba(7);g.f.isActive=function(){return 0!=this.ib};
g.f.Sp=function(){this.ib=0;this.C&&this.C.call(this.F)};g.v(Pe,Haa);Pe.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Pe.prototype.update=function(a,b){if(null!=a){g.ta(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.L,h=this.D;d<b;){if(0==h)for(;d<=c;)Qe(this,a,d),d+=this.F;if(g.ua(a))for(;d<b;){if(e[h]=a.charCodeAt(d),++h,++d,h==this.F){Qe(this,e);h=0;break}}else for(;d<b;)if(e[h]=a[d],++h,++d,h==this.F){Qe(this,e);h=0;break}}this.D=h;this.H+=b}};
Pe.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;Qe(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.Te="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.Se.prototype.next=function(){throw g.Te;};
g.Se.prototype.qd=function(){return this};g.f=g.Xe.prototype;g.f.Pb=function(){return this.D};
g.f.Jb=g.ba(0);g.f.Pc=function(){g.Ze(this);return this.C.concat()};
g.f.Wd=g.ba(2);g.f.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Pb())return!1;var c=b||Jaa;g.Ze(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.f.isEmpty=function(){return 0==this.D};
g.f.clear=function(){this.F={};this.hf=this.D=this.C.length=0};
g.f.remove=function(a){return g.Ye(this.F,a)?(delete this.F[a],this.D--,this.hf++,this.C.length>2*this.D&&g.Ze(this),!0):!1};
g.f.get=function(a,b){return g.Ye(this.F,a)?this.F[a]:b};
g.f.set=function(a,b){g.Ye(this.F,a)||(this.D++,this.C.push(a),this.hf++);this.F[a]=b};
g.f.forEach=function(a,b){for(var c=this.Pc(),d=0;d<c.length;d++){var e=c[d],h=this.get(e);a.call(b,h,e,this)}};
g.f.clone=function(){return new g.Xe(this)};
g.f.qd=function(a){g.Ze(this);var b=0,c=this.hf,d=this,e=new g.Se;e.next=function(){if(c!=d.hf)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Te;var e=d.C[b++];return a?e:d.F[e]};
return e};var cf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Laa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.df,g.A);g.f=g.df.prototype;g.f.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.f.Bd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.xa):(c&&g.Oa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.f.qa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,h=arguments.length;e<h;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Maa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,h=c.length;e<h;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.Bd(c)}}return 0!=e}return!1};
g.f.clear=function(a){if(a){var b=this.F[a];b&&((0,g.z)(b,this.Bd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.f.Pb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Pb(b);return a};
g.f.Y=function(){g.df.M.Y.call(this);this.clear();this.D.length=0};g.ff.prototype.set=function(a,b){g.ta(b)?this.C.set(a,g.af(b)):this.C.remove(a)};
g.ff.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.ff.prototype.remove=function(a){this.C.remove(a)};g.v(gf,g.ff);gf.prototype.set=function(a,b){gf.M.set.call(this,a,jf(b))};
gf.prototype.F=function(a){a=gf.M.get.call(this,a);if(!g.ta(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
gf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ta(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.kf,gf);g.kf.prototype.set=function(a,b,c){if(b=jf(b)){if(c){if(c<(0,g.jd)()){g.kf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.jd)()}g.kf.M.set.call(this,a,b)};
g.kf.prototype.F=function(a,b){var c=g.kf.M.F.call(this,a);if(c)if(!b&&g.lf(c))g.kf.prototype.remove.call(this,a);else return c};g.v(mf,Naa);mf.prototype.Pb=function(){var a=0;g.Ve(this.qd(!0),function(){a++});
return a};
mf.prototype.clear=function(){var a=Iaa(this.qd(!0)),b=this;(0,g.z)(a,function(a){b.remove(a)})};g.v(g.nf,mf);g.f=g.nf.prototype;g.f.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.f.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.f.get=function(a){a=this.C.getItem(a);if(!g.ua(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeItem(a)};
g.f.Pb=function(){return this.C.length};
g.f.qd=function(a){var b=0,c=this.C,d=new g.Se;d.next=function(){if(b>=c.length)throw g.Te;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.ua(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){this.C.clear()};
g.f.key=function(a){return this.C.key(a)};g.v(g.of,g.nf);g.v(qf,mf);var Oaa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},pf=null;g.f=qf.prototype;g.f.isAvailable=function(){return!!this.C};
g.f.set=function(a,b){this.C.setAttribute(rf(a),b);sf(this)};
g.f.get=function(a){a=this.C.getAttribute(rf(a));if(!g.ua(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeAttribute(rf(a));sf(this)};
g.f.Pb=function(){return tf(this).attributes.length};
g.f.qd=function(a){var b=0,c=tf(this).attributes,d=new g.Se;d.next=function(){if(b>=c.length)throw g.Te;var d=c[b++];if(a)return(0,window.decodeURIComponent)(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!g.ua(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){for(var a=tf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);sf(this)};g.v(uf,mf);uf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
uf.prototype.get=function(a){return this.F.get(this.C+a)};
uf.prototype.remove=function(a){this.F.remove(this.C+a)};
uf.prototype.qd=function(a){var b=this.F.qd(!0),c=this,d=new g.Se;d.next=function(){for(var d=b.next();d.substr(0,c.C.length)!=c.C;)d=b.next();return a?d.substr(c.C.length):c.F.get(d)};
return d};wf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
wf.prototype.get=function(a){return!!this.C[a]};g.jh=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.jl="Microsoft Internet Explorer"==window.navigator.appName;g.Bf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.n("yt.config_",g.Bf,void 0);var If={};var Jca=g.q("ytPubsubPubsubInstance")||new g.df;g.df.prototype.subscribe=g.df.prototype.subscribe;g.df.prototype.unsubscribeByKey=g.df.prototype.Bd;g.df.prototype.publish=g.df.prototype.qa;g.df.prototype.clear=g.df.prototype.clear;g.n("ytPubsubPubsubInstance",Jca,void 0);var Of=g.q("ytPubsubPubsubSubscribedKeys")||{};g.n("ytPubsubPubsubSubscribedKeys",Of,void 0);var Qf=g.q("ytPubsubPubsubTopicToKeys")||{};g.n("ytPubsubPubsubTopicToKeys",Qf,void 0);var Pf=g.q("ytPubsubPubsubIsSynchronous")||{};
g.n("ytPubsubPubsubIsSynchronous",Pf,void 0);var Raa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Saa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Wf.prototype.initialize=function(a,b,c,d){b?(this.F=!0,g.Uf(b,function(){this.F=!1;window.botguard?Xf(this,c,d):(g.Vf(b),g.Ef(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this))):a&&(eval(a),window.botguard?Xf(this,c,d):g.Ef(Error("Unable to load Botguard from JS"),"WARNING"))};
g.Wf.prototype.He=function(){return null!==this.C};
g.Wf.prototype.invoke=function(a){a=void 0===a?{}:a;return this.C?this.C.invoke(void 0,void 0,a):null};
g.Wf.prototype.dispose=function(){this.C=null};g.ia(cg,Taa);cg.prototype.start=function(){var a=g.q("yt.scheduler.instance.start");a&&a()};
cg.prototype.pause=function(){var a=g.q("yt.scheduler.instance.pause");a&&a()};
g.ya(cg);cg.getInstance();g.hg=new g.Wf;g.ig=new function(){var a=window.document;this.C=window;this.F=a};(0,g.jd)();var ng=g.ta(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.ta(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var ug,Zaa,zg;ug={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Zaa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
zg=!1;g.kl=Ag;Eg.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.ue(a)?a:g.Hg(a)):2===this.F&&b?(a=b.call(c,this.C),g.ue(a)?a:g.Fg(a)):this};
Eg.prototype.getValue=function(){return this.C};
g.te(Eg);var Kca=0,cba=g.w.mb?"webkit":g.w.Bb?"moz":g.w.ma?"ms":g.w.Sb?"o":"",Ig=g.q("ytDomDomGetNextId")||function(){return++Kca};
g.n("ytDomDomGetNextId",Ig,void 0);var dba={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Lg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Lg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Lg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Pg=g.q("ytEventsEventsListeners")||{};g.n("ytEventsEventsListeners",Pg,void 0);var Rg=g.q("ytEventsEventsCounter")||{count:0};g.n("ytEventsEventsCounter",Rg,void 0);var Sg=g.Mb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.v(g.Vg,g.A);g.Vg.prototype.W=function(a){this.C=new g.gc(g.Ng(a),g.Og(a))};
g.Vg.prototype.R=function(){if(this.C){var a=g.jh();if(0!=this.D){var b=g.ic(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.kc();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.Vg.prototype.Y=function(){g.Mf(this.O);g.K(this.J)};g.ia(Wg,g.A);Wg.prototype.Xa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.Ae);break}};
Wg.prototype.Y=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.Ae)}g.A.prototype.Y.call(this)};var eba={enablejsapi:1},fba={};Xg.prototype.clone=function(){var a=new Xg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.Aa(c)?a[b]=g.nb(c):a[b]=c}return a};var $g={},Zg=0;var jba,qh,rh,iba,kh,kba,eh;jba=Math.pow(2,16)-1;qh=null;rh=0;iba={log_event:"events",log_interaction:"interactions"};kh=Object.create(null);kh.log_event="GENERIC_EVENT_LOGGING";kh.log_interaction="INTERACTION_LOGGING";kba=new window.Set(["log_event"]);eh={};g.bh=0;g.ch=0;g.dh=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.n("ytLoggingTransportLogPayloadsQueue_",g.dh,void 0);var ph=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.n("ytLoggingTransportTokensToCttTargetIds_",ph,void 0);
var hh=g.q("ytLoggingTransportDispatchedStats_")||{};g.n("ytLoggingTransportDispatchedStats_",hh,void 0);var lh=g.q("ytLoggingTransportCapturedTime_")||{};g.n("ytytLoggingTransportCapturedTime_",lh,void 0);var wh={};g.Eh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.jd)()+1E3*c);return}catch(h){}var e="";if(d)try{e=(0,window.escape)(g.af(b))}catch(h){return}else e=(0,window.escape)(b);g.Ch(a,e,c,this.F)};
g.Eh.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Bh.get(""+a,void 0))&&(c=(0,window.unescape)(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.Eh.prototype.remove=function(a){this.C&&this.C.remove(a);g.Dh(a,"/",this.F)};var Fh=new g.Eh("yt.innertube");var Qh=g.q("ytLoggingLatencyUsageStats_")||{};g.n("ytLoggingLatencyUsageStats_",Qh,void 0);var Rh=0;var Sh=(0,g.jd)().toString();var Wh=g.q("ytLoggingTimeDocumentNonce_")||Th(),Xh,Uh;g.n("ytLoggingTimeDocumentNonce_",Wh,void 0);Xh=0;g.Vh=null;Uh=null;g.n("yt.logging.screen.getRootVeType",bi,void 0);g.n("yt.logging.screen.getCurrentCsn",g.di,void 0);g.n("yt.logging.screen.setCurrentScreen",g.ei,void 0);g.f=g.gi.prototype;g.f.CL=function(){this.He()||this.init()};
g.f.enable=function(){this.C=1;(0,g.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.CL,this),this.subscribe("dispose-"+a,this.dispose,this),g.C("PAGE_NAME")==a&&g.hi(this))},this)};
g.f.init=function(){g.ag(this.F);this.C=2;this.L&&this.L()};
g.f.He=function(){return 2==this.C};
g.f.dispose=function(){this.C=3;g.ag(this.F);this.H&&this.H()};
g.f.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Ef(a)}};
g.f.subscribe=function(a,b,c){a=g.E(a,b,c);this.G.push(a);return a};
g.f.clear=function(){g.Rf(this.G);this.G=[]};var ii=g.q("yt.modules.registry_")||{};g.n("yt.modules.registry_",ii,void 0);g.li=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.n("yt.msgs_",g.li,void 0);var qi={},pba=0;var qba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.ia(xi,g.A);g.f=xi.prototype;
g.f.Gm=function(a){if(!this.rb()){this.pb=a=g.Yg(a);this.C=a.clone();this.F=this.C.attrs.id||this.F;"video-player"==this.F&&(this.F=this.O,this.C.attrs.id=this.O);this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F);this.C.args.enablejsapi="1";this.C.args.playerapiid=this.O;this.ha||(this.ha=Ii(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Fc(this.H,Number(a)||a);if(a=this.C.attrs.height)this.H.style.height=g.Ec(Number(a)||
a,!0);rba(this);this.L&&yi(this)}};
g.f.Fx=function(){return this.pb};
g.f.PC=function(){return this.L};
g.f.Ai=function(a,b){var c=this,d=Ii(this,b);if(d){if(!g.La(this.wb,a)&&!this.D[a]){var e=tba(this,a);this.W&&this.W(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.L&&g.Jf(function(){d(c.api)},0)}};
g.f.pL=function(a,b){if(!this.rb()){var c=Ii(this,b);c&&g.ef(this.J,a,c)}};
g.f.cw=function(a){g.F("a11y-announce",a)};
g.f.VG=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.f.WG=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.f.vy=function(){return this.la||(zi(this)?"html5":null)};
g.f.cy=function(){return this.eb};
g.f.cancel=function(){if(this.R){var a=this.R,b=g.Tf(this.C.assets.js);window.spf.script.ignore(b,a)}g.Lf(this.qb);this.V=!1};
g.f.Y=function(){Ci(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Ef(b)}this.Sa=null;for(var a in this.D)g.m[this.D[a]]=null;this.pb=this.C=this.api=null;delete this.oa;delete this.H;g.A.prototype.Y.call(this)};g.Ki={};g.Ji="player_uid_"+(1E9*Math.random()>>>0);g.Pi.prototype.toString=function(){return this.topic};var Lca=g.q("ytPubsub2Pubsub2Instance")||new g.df;g.df.prototype.subscribe=g.df.prototype.subscribe;g.df.prototype.unsubscribeByKey=g.df.prototype.Bd;g.df.prototype.publish=g.df.prototype.qa;g.df.prototype.clear=g.df.prototype.clear;g.n("ytPubsub2Pubsub2Instance",Lca,void 0);g.ll=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.n("ytPubsub2Pubsub2SubscribedKeys",g.ll,void 0);g.ml=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.n("ytPubsub2Pubsub2TopicToKeys",g.ml,void 0);
g.nl=g.q("ytPubsub2Pubsub2IsAsync")||{};g.n("ytPubsub2Pubsub2IsAsync",g.nl,void 0);g.n("ytPubsub2Pubsub2SkipSubKey",null,void 0);var Vi=null;g.ol=window.performance&&window.performance.memory;g.sk={};var Wi=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.ia(Zi,g.Oi);g.ia($i,g.Oi);var Dba=new g.Pi("aft-recorded",Zi),Jba=new g.Pi("timing-sent",$i);var Hba,gj,pl,yj,Fba,Aba,Eba,ql,zj,vj,aj,Cba,Fj,aca;Hba={vc:!0};
gj={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};pl={};
yj=(pl.ad_allowed="adTypesAllowed",pl.yt_abt="adBreakType",pl.ad_cpn="adClientPlaybackNonce",pl.ad_docid="adVideoId",pl.yt_ad_an="adNetworks",pl.ad_at="adType",pl.browse_id="browseId",pl.p="httpProtocol",pl.t="transportProtocol",pl.cpn="clientPlaybackNonce",pl.csn="clientScreenNonce",pl.docid="videoId",pl.is_continuation="isContinuation",pl.is_nav="isNavigation",pl.b_p="kabukiInfo.browseParams",pl.is_prefetch="kabukiInfo.isPrefetch",pl.is_secondary_nav="kabukiInfo.isSecondaryNav",pl.prev_browse_id=
"kabukiInfo.prevBrowseId",pl.query_source="kabukiInfo.querySource",pl.voz_type="kabukiInfo.vozType",pl.yt_lt="loadType",pl.yt_ad="isMonetized",pl.nr="webInfo.navigationReason",pl.ncnp="webInfo.nonPreloadedNodeCount",pl.paused="playerInfo.isPausedOnLoad",pl.fmt="playerInfo.itag",pl.yt_pl="watchInfo.isPlaylist",pl.yt_ad_pr="prerollAllowed",pl.yt_red="isRedSubscriber",pl.st="serverTimeMs",pl.aq="tvInfo.appQuality",pl.br_trs="tvInfo.bedrockTriggerState",pl.label="tvInfo.label",pl.is_mdx="tvInfo.isMdx",
pl.preloaded="tvInfo.isPreloaded",pl.query="unpluggedInfo.query",pl.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",pl.yt_vst="videoStreamType",pl.vph="viewportHeight",pl.vpw="viewportWidth",pl.yt_vis="isVisible",pl);Fba="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
Aba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
"channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",chips:"LATENCY_ACTION_CHIPS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH",
"watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"};
Eba="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" ");ql={};zj=(ql.yt_vst="VIDEO_STREAM_TYPE_",ql);vj=!1;aj=!1;Cba=(0,g.r)(Wi.clearResourceTimings||Wi.webkitClearResourceTimings||Wi.mozClearResourceTimings||Wi.msClearResourceTimings||Wi.oClearResourceTimings||g.xa,Wi);Fj=bj;aca=fj;g.Gj=dj;var Nj=0,Jj=[],Mj=[],Ej=0,Kj={},Lj={},Hj=new g.Oe(Qba,1E3);var Pj=["server_prefetched_vast","vmap"];var Rj,Wj;g.Vj=null;Wj="";var Yj=null,bk=[];var fk,yk,xk,hk,gk,Xba,$ba,Yba,Zba,tk;hk=0;gk=0;Xba=[900,60,"waiting"];$ba=[500,99,"waiting"];Yba=[300,60,"waiting"];Zba=[400,99,"waiting"];tk=[300,101,"done"];var Fk=!1;window.yt=window.yt||{};g.n("yt.setConfig",g.Cf,void 0);g.n("yt.pushConfigArray",Df,void 0);g.n("yt.getConfig",g.C,void 0);g.n("yt.config.set",g.Cf,void 0);g.n("yt.config.pushArray",Df,void 0);g.n("yt.config.get",g.C,void 0);g.n("yt.hasMsg",g.ni,void 0);g.n("yt.setMsg",mi,void 0);g.n("yt.setGoogMsg",oi,void 0);g.n("yt.msgs.has",g.ni,void 0);g.n("yt.msgs.set",mi,void 0);g.n("yt.msgs.setGoog",oi,void 0);g.n("yt.pubsub.publish",g.F,void 0);g.n("yt.pubsub.subscribe",g.E,void 0);
g.n("ytcsi.tick",g.Gj,void 0);g.v(Ik,g.gi);
Ik.prototype.enable=function(){window.onload=Vba;window.onunload=Wba;window.onerror=Qaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",dk),window.addEventListener("spfhistory",ek),window.addEventListener("spfrequest",jk),window.addEventListener("spfpartprocess",nk),window.addEventListener("spfpartdone",ok),window.addEventListener("spfprocess",qk),window.addEventListener("spfdone",uk),window.addEventListener("spferror",vk),window.addEventListener("spfreload",
wk),window.addEventListener("spfjsbeforeunload",Jk)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",cca),this.subscribe("dispose",dca)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Ik.prototype.init=function(){Ik.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.C("PAGEFRAME_JS")){var b=g.C("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
a=g.C("JS_COMMON_MODULE");var d=g.C("JS_PAGE_MODULES");d||(d=[a]);a=g.C("JS_DELAY_LOAD",0);0<a?(g.Lf(this.D),this.D=g.Jf(function(){b&&g.Uf(b,c);window.spf.script.require(d)},a)):(b&&g.Uf(b,c),window.spf.script.require(d));
g.n("yt.abuse.player.botguardInitialized",Vaa,void 0);g.n("yt.abuse.player.invokeBotguard",Waa,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",Uaa,void 0);g.n("yt.player.exports.navigate",g.vi,void 0);g.n("yt.util.activity.init",g.vh,void 0);g.n("yt.util.activity.getTimeSinceActive",g.xh,void 0);g.n("yt.util.activity.setTimestamp",g.th,void 0);Xj(g.q("ytplayer.config"));g.q("ytspf.enabled")&&Tba();Bba();g.C("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.fg("service_worker_enabled")?sca():qca())};
Ik.prototype.dispose=function(){g.Lf(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.Mf(Rj);if(a=g.Tj())a.removeEventListener("onReady",Sj),a.removeEventListener("onStateChange",Sj);nj(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.D(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.Ug(a);Ik.M.dispose.call(this)};
Ik.prototype.disable=function(){Ik.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",dk),window.removeEventListener("spfhistory",ek),window.removeEventListener("spfrequest",jk),window.removeEventListener("spfpartprocess",nk),window.removeEventListener("spfpartdone",ok),window.removeEventListener("spfprocess",qk),window.removeEventListener("spfdone",uk),window.removeEventListener("spferror",vk),window.removeEventListener("spfreload",wk),window.removeEventListener("spfjsbeforeunload",
Jk));window.onload=null;window.onunload=null;window.onerror=null};
g.ki(new Ik);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:08:27 Dec 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:36:36 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 154.048
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.06
  cdx.remote: 0.061
  esindex: 0.01
  LoadShardBlock: 46.352 (3)
  PetaboxLoader3.datanode: 81.059 (5)
  load_resource: 186.986 (2)
  PetaboxLoader3.resolve: 86.274 (2)
*/