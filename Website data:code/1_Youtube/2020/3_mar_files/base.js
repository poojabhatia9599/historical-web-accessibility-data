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

var _yt_www={};(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ca,aaa,ka,la,ma,na,qa,sa,ta,ua,eaa,faa,eb,ub,vb,mc,kaa,qc,xc,laa,vc,Cc,Dc,Ec,Jc,Kc,naa,paa,Jd,qaa,raa,Kd,Ld,Md,saa,uaa,Xd,Zd,$d,de,vaa,ge,ne,me,xaa,qe,re,se,te,zaa,ve,we,Ae,Aaa,Be,Ie,Ke,Qe,Ue,Oe,Le,Caa,Te,Re,Se,We,Baa,Daa,af,bf,gf,Eaa,Faa,Gaa,nf,pf,Iaa,uf,vf,xf,Jaa,Af,Ff,Gf,Hf,If,Jf,Nf,Qf,Rf,Sf,Maa,Uf,Naa,$f,ng,kg,og,wg,Qaa,Raa,Taa,Cg,Uaa,Dg,Eg,Vaa,Jg,Hg,Fg,Pg,Waa,Yg,Tg,Xaa,Yaa,Zaa,ah,hh,uh,vh,cba,Fh,bba,gba,Th,ai,bi,ci,hba,ii,ji,qi,xi,yi,zi,Bi,iba,lba,Hi,Ri,jba,Wi,$i,cj,ej,mba,gj,nba,lj,kj,nj,
jj,mj,vj,tj,wj,zj,uj,xj,Aj,qba,Dj,sj,Ej,rba,Bj,Cj,yj,sba,Kj,tba,uba,vba,Pj,Qj,Sj,Tj,Uj,Vj,Xj,Yj,Rj,Zj,Wj,bk,ck,ek,dk,fk,gk,ik,jk,lk,ok,kk,pk,rk,qk,sk,Dba,uk,zk,Ak,vk,Aba,Bk,Ck,Bba,Cba,Kba,Jba,Iba,Hk,Hba,Fba,Gba,Lba,Mba,Nba,Oba,Tk,Rk,Vk,Pba,Wk,Yk,Qba,Rba,Zk,$k,el,hl,il,jl,nl,ol,pl,Xba,Yba,fl,dl,Wba,gl,tl,vl,sl,Zba,wl,ul,$ba,dca,aca,gca,cca,bca,eca,fca,ica,zl,hca,xl,jca,lca,nca,mca,kca,Al,Bl,Cl,fa,Dl,caa,va,Fa,daa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
g.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
g.ea=function(a){if(!(a instanceof Array)){a=g.da(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
g.n=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype};
aaa=function(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};
ka=function(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}};
la=function(){la=function(){};
ia.Symbol||(ia.Symbol=baa)};
ma=function(a,b){this.C=a;ja(this,"description",{configurable:!0,writable:!0,value:b})};
g.pa=function(){la();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return na(ca(this))}});
g.pa=function(){}};
na=function(a){g.pa();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a};
qa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
sa=function(a,b){g.pa();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.r=function(a,b,c){a=a.split(".");c=c||g.p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
g.wa=function(a){if(a&&a!=g.p)return ua(a.document);null===va&&(va=ua(g.p.document));return va};
ua=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&caa.test(a)?a:""};
g.u=function(a,b){for(var c=a.split("."),d=b||g.p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.xa=function(){};
g.ya=function(a){a.Dc=void 0;a.getInstance=function(){return a.Dc?a.Dc:a.Dc=new a}};
g.za=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Ba=function(a){return"array"==g.za(a)};
g.Ca=function(a){var b=g.za(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Da=function(a){return"function"==g.za(a)};
g.Ea=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ga=function(a){return Object.prototype.hasOwnProperty.call(a,Fa)&&a[Fa]||(a[Fa]=++daa)};
eaa=function(a,b,c){return a.call.apply(a.bind,arguments)};
faa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.v=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.v=eaa:g.v=faa;return g.v.apply(null,arguments)};
g.w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.x=function(a,b){function c(){}
c.prototype=b.prototype;a.V=b.prototype;a.prototype=new c;a.prototype.constructor=a};
g.Ia=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ia);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ka=function(a,b,c){b=g.Ja(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
g.Ja=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ma=function(a,b){return 0<=(0,g.La)(a,b)};
g.Na=function(a){return 0==a.length};
g.Pa=function(a,b){var c=(0,g.La)(a,b),d;(d=0<=c)&&g.Oa(a,c);return d};
g.Oa=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Qa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Ra=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Sa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Ta=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Ua=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Va=function(a){return/^[\s\xa0]*$/.test(a)};
g.bb=function(a,b){if(b)a=a.replace(Wa,"&amp;").replace(Xa,"&lt;").replace(Ya,"&gt;").replace(Za,"&quot;").replace($a,"&#39;").replace(ab,"&#0;");else{if(!gaa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Wa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Xa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ya,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Za,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace($a,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ab,"&#0;"))}return a};
g.cb=function(a,b){return-1!=a.indexOf(b)};
g.fb=function(a,b){for(var c=0,d=(0,g.db)(String(a)).split("."),e=(0,g.db)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=eb(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||eb(0==l[2].length,0==m[2].length)||eb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
eb=function(a,b){return a<b?-1:a>b?1:0};
g.hb=function(a){return g.cb(g.gb,a)};
g.ib=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.jb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.kb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.lb=function(a){for(var b in a)return!1;return!0};
g.mb=function(a,b){b in a&&delete a[b]};
g.nb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.ob=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.pb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.qb=function(a){var b=g.za(a);if("object"==b||"array"==b){if(g.Da(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.qb(a[c]);return b}return a};
g.sb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<rb.length;f++)c=rb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.tb=function(){return g.hb("Trident")||g.hb("MSIE")};
ub=function(){return g.hb("Firefox")||g.hb("FxiOS")};
g.wb=function(){return g.hb("Safari")&&!(vb()||g.hb("Coast")||g.hb("Opera")||g.hb("Edge")||g.hb("Edg/")||g.hb("OPR")||ub()||g.hb("Silk")||g.hb("Android"))};
vb=function(){return(g.hb("Chrome")||g.hb("CriOS"))&&!g.hb("Edge")};
g.xb=function(){return g.hb("Android")&&!(vb()||ub()||g.hb("Opera")||g.hb("Silk"))};
g.Ab=function(a,b){this.C=a===yb&&b||"";this.F=zb};
g.Bb=function(a){return a instanceof g.Ab&&a.constructor===g.Ab&&a.F===zb?a.C:"type_error:Const"};
g.Cb=function(a){return new g.Ab(yb,a)};
g.Fb=function(a,b){this.F=a===g.Db&&b||"";this.D=Eb};
g.Gb=function(a){if(a instanceof g.Fb&&a.constructor===g.Fb&&a.D===Eb)return a.F;g.za(a);return"type_error:TrustedResourceUrl"};
g.Hb=function(a){return new g.Fb(g.Db,g.Bb(a))};
g.Kb=function(a,b){this.F=a===Ib&&b||"";this.D=Jb};
g.Lb=function(a){if(a instanceof g.Kb&&a.constructor===g.Kb&&a.D===Jb)return a.F;g.za(a);return"type_error:SafeUrl"};
g.Nb=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(haa);b=b&&iaa.test(b[1]);return g.Mb(b?a:"about:invalid#zClosurez")};
g.Pb=function(a){if(a instanceof g.Kb)return a;a="object"==typeof a&&a.Md?a.Uc():String(a);Ob.test(a)||(a="about:invalid#zClosurez");return g.Mb(a)};
g.Qb=function(a,b){if(a instanceof g.Kb)return a;a="object"==typeof a&&a.Md?a.Uc():String(a);if(b&&/^data:/i.test(a)){var c=g.Nb(a);if(c.Uc()==a)return c}Ob.test(a)||(a="about:invalid#zClosurez");return g.Mb(a)};
g.Mb=function(a){return new g.Kb(Ib,a)};
g.Sb=function(){this.C="";this.F=g.Rb};
g.Tb=function(a){var b=new g.Sb;b.C=a;return b};
g.Vb=function(){this.C="";this.F=g.Ub};
g.Wb=function(a){var b=new g.Vb;b.C=a;return b};
g.Yb=function(){this.F="";this.G=Xb;this.D=null};
g.$b=function(a){return g.Zb(a).toString()};
g.Zb=function(a){if(a instanceof g.Yb&&a.constructor===g.Yb&&a.G===Xb)return a.F;g.za(a);return"type_error:SafeHtml"};
g.bc=function(a){if(a instanceof g.Yb)return a;var b="object"==typeof a,c=null;b&&a.Sk&&(c=a.C());return g.ac(g.bb(b&&a.Md?a.Uc():String(a)),c)};
g.ac=function(a,b){return g.cc(a,b)};
g.cc=function(a,b){var c=new g.Yb;c.F=a;c.D=b;return c};
g.dc=function(a,b){var c=b instanceof g.Kb?b:g.Qb(b);a.href=g.Lb(c)};
g.ec=function(a,b){a.src=g.Gb(b).toString()};
g.fc=function(a,b){var c=b instanceof g.Kb?b:g.Qb(b);a.href=g.Lb(c)};
g.gc=function(a){return encodeURIComponent(String(a))};
g.hc=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.ic=function(a){return a=g.bb(a,void 0)};
g.kc=function(a,b,c){a=void 0!==c?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return(0,g.jc)("0",Math.max(0,b-c))+a};
g.lc=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
mc=function(){return g.hb("iPhone")&&!g.hb("iPod")&&!g.hb("iPad")};
g.nc=function(){return mc()||g.hb("iPad")||g.hb("iPod")};
g.oc=function(a){g.oc[" "](a);return a};
g.pc=function(a,b){try{return g.oc(a[b]),!0}catch(c){}return!1};
kaa=function(a,b){var c=jaa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
qc=function(){var a=g.p.document;return a?a.documentMode:void 0};
g.sc=function(a){return kaa(a,function(){return 0<=g.fb(g.rc,a)})};
g.uc=function(a){return Number(g.tc)>=a};
xc=function(a,b){g.Ca(a);void 0===b&&(b=0);vc();for(var c=wc[b],d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,q=m?a[e+2]:0,t=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[t],c[f],c[l]||"",c[q]||"")}return d.join("")};
laa=function(){var a=65.25;a%3?a=Math.floor(a):g.cb("=.","k")&&(a=g.cb("=.","1")?a-2:a-1);var b=new Uint8Array(a),c=0;g.yc("BPr83OIQ0ehMqbAUQWSaFHZOJeRvvXddR5EONgwwQcHR6FRe6G43LgD36pJq1IuGN10mmMv-V7IKSIZludF9G1k",function(d){b[c++]=d});
return b.subarray(0,c)};
g.yc=function(a,b){function c(m){for(;d<a.length;){var q=a.charAt(d++),t=zc[q];if(null!=t)return t;if(!g.Va(q))throw Error("Unknown base64 encoding at char: "+q);}return m}
vc();for(var d=0;;){var e=c(-1),f=c(0),k=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=k&&(b(f<<4&240|k>>2),64!=l&&b(k<<6&192|l))}};
vc=function(){if(!zc){zc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));wc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===zc[f]&&(zc[f]=e)}}}};
g.Ac=function(a){this.C=0;this.F=a};
g.Bc=function(){};
Cc=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Ba(c))for(var d=0;d<c.length;d++)c[d]&&c[d].Zc();else c&&c.Zc()}};
Dc=function(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};
Ec=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Ec(d):d)}return b}if(g.Fc&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Ec(d):d);return b};
g.Gc=function(a){this.C=a||{cookie:""}};
g.Hc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.db)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Ic=function(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31};
g.Mc=function(a,b,c){"number"===typeof a?(this.date=Jc(a,b||0,c||1),Kc(this,c||1)):g.Ea(a)?(this.date=Jc(a.getFullYear(),a.getMonth(),a.getDate()),Kc(this,a.getDate())):(this.date=new Date((0,g.Lc)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Kc(this,a))};
Jc=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
Kc=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}};
g.Nc=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
g.Oc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Pc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.Qc=function(a,b){this.width=a;this.height=b};
g.z=function(a){return g.Rc(document,a)};
g.Rc=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.Sc=function(a){return g.Rc(document,a)};
g.Uc=function(a,b){g.ib(b,function(c,d){c&&"object"==typeof c&&c.Md&&(c=c.Uc());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Tc.hasOwnProperty(d)?a.setAttribute(Tc[d],c):g.Ta(d,"aria-")||g.Ta(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.Wc=function(a){return g.Vc(a||window)};
g.Vc=function(a){a=a.document;a=g.Xc(a)?a.documentElement:a.body;return new g.Qc(a.clientWidth,a.clientHeight)};
g.Zc=function(a,b,c){return g.Yc(document,arguments)};
g.Yc=function(a,b){var c=String(b[0]),d=b[1];if(!maa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.ic(d.name),'"');if(d.type){c.push(' type="',g.ic(d.type),'"');var e={};g.sb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=g.$c(a,c);d&&("string"===typeof d?c.className=d:Array.isArray(d)?c.className=d.join(" "):g.Uc(c,d));2<b.length&&g.ad(a,c,b,2);return c};
g.ad=function(a,b,c,d){function e(k){k&&b.appendChild("string"===typeof k?a.createTextNode(k):k)}
for(;d<c.length;d++){var f=c[d];!g.Ca(f)||g.Ea(f)&&0<f.nodeType?e(f):(0,g.B)(naa(f)?g.Qa(f):f,e)}};
g.bd=function(a){return g.$c(document,a)};
g.$c=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.Xc=function(a){return"CSS1Compat"==a.compatMode};
g.cd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.dd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.ed=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
naa=function(a){if(a&&"number"==typeof a.length){if(g.Ea(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Da(a))return"function"==typeof a.item}return!1};
g.fd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.gd=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.hd=function(a){return a?decodeURI(a):a};
g.jd=function(a,b){return b.match(g.id)[a]||null};
g.kd=function(a){return g.hd(g.jd(3,a))};
g.ld=function(a){a=a.match(g.id);return g.gd(null,null,null,null,a[5],a[6],a[7])};
g.md=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.nd=function(a,b){return b?a?a+"&"+b:b:a};
g.od=function(a,b){if(!b)return a;var c=g.md(a);c[1]=g.nd(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.pd=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)g.pd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.gc(b)))};
g.qd=function(a){var b=[],c;for(c in a)g.pd(c,a[c],b);return b.join("&")};
g.rd=function(a,b){var c=g.qd(b);return g.od(a,c)};
g.sd=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.vd=function(a,b){var c=a.search(g.td),d=g.sd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.hc(a.substr(d,e-d))};
g.wd=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.xd=function(a){var b=[];g.wd(a,function(c){b.push(c)});
return b};
paa=function(){var a=g.bd("IFRAME"),b={};(0,g.B)(oaa(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
g.yd=function(){this.C=function(a){return void 0===a?!1:a};
this.F=function(a){return void 0===a?0:a}};
g.zd=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Ad=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Bd=function(a,b){a.style.width=g.Ad(b,!0)};
g.Cd=function(a,b){return typeof a===b};
g.Fd=function(){var a=void 0===a?g.Dd:a;try{return a.history.length}catch(b){return 0}};
g.Gd=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Fd();a.u_java=!!g.Dd.navigator&&!g.Cd(g.Dd.navigator.javaEnabled,"unknown")&&!!g.Dd.navigator.javaEnabled&&g.Dd.navigator.javaEnabled();g.Dd.screen&&(a.u_h=g.Dd.screen.height,a.u_w=g.Dd.screen.width,a.u_ah=g.Dd.screen.availHeight,a.u_aw=g.Dd.screen.availWidth,a.u_cd=g.Dd.screen.colorDepth);g.Dd.navigator&&g.Dd.navigator.plugins&&(a.u_nplug=g.Dd.navigator.plugins.length);g.Dd.navigator&&g.Dd.navigator.mimeTypes&&(a.u_nmime=g.Dd.navigator.mimeTypes.length)};
g.Hd=function(a,b){try{return(void 0===b?0:b)?(new g.Qc(a.innerWidth,a.innerHeight)).round():g.Wc(a).round()}catch(c){return new g.Qc(-12245933,-12245933)}};
g.Id=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var f=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,k]};
Jd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
qaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=q=0}
function b(y){for(var A=k,G=0;64>G;G+=4)A[G/4]=y[G]<<24|y[G+1]<<16|y[G+2]<<8|y[G+3];for(G=16;80>G;G++)y=A[G-3]^A[G-8]^A[G-14]^A[G-16],A[G]=(y<<1|y>>>31)&4294967295;y=e[0];var O=e[1],T=e[2],ra=e[3],Aa=e[4];for(G=0;80>G;G++){if(40>G)if(20>G){var Ha=ra^O&(T^ra);var ud=1518500249}else Ha=O^T^ra,ud=1859775393;else 60>G?(Ha=O&T|ra&(O|T),ud=2400959708):(Ha=O^T^ra,ud=3395469782);Ha=((y<<5|y>>>27)&4294967295)+Ha+Aa+ud+A[G]&4294967295;Aa=ra;ra=T;T=(O<<30|O>>>2)&4294967295;O=y;y=Ha}e[0]=e[0]+y&4294967295;e[1]=
e[1]+O&4294967295;e[2]=e[2]+T&4294967295;e[3]=e[3]+ra&4294967295;e[4]=e[4]+Aa&4294967295}
function c(y,A){if("string"===typeof y){y=unescape(encodeURIComponent(y));for(var G=[],O=0,T=y.length;O<T;++O)G.push(y.charCodeAt(O));y=G}A||(A=y.length);G=0;if(0==q)for(;G+64<A;)b(y.slice(G,G+64)),G+=64,t+=64;for(;G<A;)if(f[q++]=y[G++],t++,64==q)for(q=0,b(f);G+64<A;)b(y.slice(G,G+64)),G+=64,t+=64}
function d(){var y=[],A=8*t;56>q?c(l,56-q):c(l,64-(q-56));for(var G=63;56<=G;G--)f[G]=A&255,A>>>=8;b(f);for(G=A=0;5>G;G++)for(var O=24;0<=O;O-=8)y[A++]=e[G]>>O&255;return y}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,t;a();return{reset:a,update:c,digest:d,tu:function(){for(var y=d(),A="",G=0;G<y.length;G++)A+="0123456789ABCDEF".charAt(Math.floor(y[G]/16))+"0123456789ABCDEF".charAt(y[G]%16);return A}}};
raa=function(a,b,c){var d=[],e=[];if(1==(g.Ba(c)?2:1))return e=[b,a],(0,g.B)(d,function(l){e.push(l)}),Kd(e.join(" "));
var f=[],k=[];(0,g.B)(c,function(l){k.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Na(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.B)(d,function(l){e.push(l)});
a=Kd(e.join(" "));a=[c,a];g.Na(k)||a.push(k.join(""));return a.join("_")};
Kd=function(a){var b=qaa();b.update(a);return b.tu().toLowerCase()};
Ld=function(a){var b=Jd(String(g.p.location.href)),c;(c=g.p.__SAPISID||g.p.__APISID||g.p.__OVERRIDE_SID)?c=!0:(c=new g.Gc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.p.__SAPISID:g.p.__APISID,c||(c=new g.Gc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(g.p.location.href);return d&&c&&b?[b,raa(Jd(d),c,a||null)].join(" "):
null}return null};
Md=function(){this.C=[];this.F=-1};
saa=function(a){-1==a.F&&(a.F=(0,g.Nd)(a.C,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.F};
g.Od=function(){var a=new Md;g.p.SVGElement&&g.p.document.createElementNS&&a.set(0);var b=paa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.p.crypto&&g.p.crypto.subtle&&a.set(3);g.p.TextDecoder&&g.p.TextEncoder&&a.set(4);return saa(a)};
g.Pd=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
g.C=function(){this.Rc=this.Rc;this.wf=this.wf};
g.Sd=function(a,b){g.Qd(a,g.w(g.Rd,b))};
g.Qd=function(a,b){a.Rc?b():(a.wf||(a.wf=[]),a.wf.push(b))};
g.Rd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Td=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1};
g.Ud=function(a,b){g.Td.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.zc=null;a&&this.init(a,b)};
g.Wd=function(a){return!(!a||!a[Vd])};
uaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Zg=e;this.key=++taa;this.kg=this.Ph=!1};
Xd=function(a){a.kg=!0;a.listener=null;a.C=null;a.src=null;a.Zg=null};
g.Yd=function(a){this.src=a;this.listeners={};this.C=0};
Zd=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Pa(a.listeners[c],b);d&&(Xd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
$d=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.kg&&f.listener==b&&f.capture==!!c&&f.Zg==d)return e}return-1};
g.be=function(a,b,c,d,e){if(d&&d.once)return g.ae(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.be(a,b[f],c,d,e);return null}c=g.ce(c);return g.Wd(a)?a.O(b,c,g.Ea(d)?!!d.capture:!!d,e):de(a,b,c,!1,d,e)};
de=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ea(e)?!!e.capture:!!e,l=g.ee(a);l||(a[fe]=l=new g.Yd(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=vaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)waa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ge(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");he++;return c};
vaa=function(){var a=xaa,b=ie?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.ae=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.ae(a,b[f],c,d,e);return null}c=g.ce(c);return g.Wd(a)?a.Be(b,c,g.Ea(d)?!!d.capture:!!d,e):de(a,b,c,!0,d,e)};
g.je=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)g.je(a,b[f],c,d,e);else d=g.Ea(d)?!!d.capture:!!d,c=g.ce(c),g.Wd(a)?a.Va(b,c,d,e):a&&(a=g.ee(a))&&(b=a.We(b,c,d,e))&&g.ke(b)};
g.ke=function(a){if("number"===typeof a||!a||a.kg)return!1;var b=a.src;if(g.Wd(b))return Zd(b.vd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ge(c),d):b.addListener&&b.removeListener&&b.removeListener(d);he--;(c=g.ee(b))?(Zd(c,a),0==c.C&&(c.src=null,b[fe]=null)):Xd(a);return!0};
ge=function(a){return a in le?le[a]:le[a]="on"+a};
ne=function(a,b,c,d){var e=!0;if(a=g.ee(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.kg&&(f=me(f,d),e=e&&!1!==f)}return e};
me=function(a,b){var c=a.listener,d=a.Zg||a.src;a.Ph&&g.ke(a);return c.call(d,b)};
xaa=function(a,b){if(a.kg)return!0;if(!ie){var c=b||g.u("window.event"),d=new g.Ud(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=ne(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=ne(c[k],f,!1,d),e=e&&l}return e}return me(a,new g.Ud(b,
this))};
g.ee=function(a){a=a[fe];return a instanceof g.Yd?a:null};
g.ce=function(a){if(g.Da(a))return a;a[oe]||(a[oe]=function(b){return a.handleEvent(b)});
return a[oe]};
g.pe=function(){g.C.call(this);this.vd=new g.Yd(this);this.Et=this;this.Pl=null};
qe=function(a,b,c,d){b=a.vd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.kg&&k.capture==c){var l=k.listener,m=k.Zg||k.src;k.Ph&&Zd(a.vd,k);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
re=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
se=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
te=function(a){g.p.setTimeout(function(){throw a;},0)};
zaa=function(){var a=g.p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.hb("Presto")&&(a=function(){var e=g.bd("IFRAME");e.style.display="none";g.ec(e,g.Hb(yaa));document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(g.Zb(g.ue));e.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.v)(function(m){if(("*"==l||m.origin==
l)&&m.data==k)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&!g.tb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.mn;c.mn=null;e()}};
return function(e){d.next={mn:e};d=d.next;b.port2.postMessage(0)}}return function(e){g.p.setTimeout(e,0)}};
ve=function(){this.F=this.C=null};
we=function(){this.next=this.scope=this.mc=null};
Ae=function(a,b){xe||Aaa();ye||(xe(),ye=!0);ze.add(a,b)};
Aaa=function(){if(g.p.Promise&&g.p.Promise.resolve){var a=g.p.Promise.resolve(void 0);xe=function(){a.then(Be)}}else xe=function(){var b=Be;
!g.Da(g.p.setImmediate)||g.p.Window&&g.p.Window.prototype&&!g.hb("Edge")&&g.p.Window.prototype.setImmediate==g.p.setImmediate?(Ce||(Ce=zaa()),Ce(b)):g.p.setImmediate(b)}};
Be=function(){for(var a;a=ze.remove();){try{a.mc.call(a.scope)}catch(b){te(b)}se(De,a)}ye=!1};
g.Ee=function(a){a.prototype.$goog_Thenable=!0};
g.Fe=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.He=function(a,b){this.C=0;this.M=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.xa)try{var c=this;a.call(b,function(d){g.Ge(c,2,d)},function(d){g.Ge(c,3,d)})}catch(d){g.Ge(this,3,d)}};
Ie=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
Ke=function(a,b,c){var d=Je.get();d.F=a;d.onRejected=b;d.context=c;return d};
g.Me=function(a,b,c){Le(a,b,c,null)||Ae(g.w(b,a))};
g.Ne=function(a){return new g.He(function(b,c){var d=a.length,e=[];if(d)for(var f=function(q,t){d--;e[q]=t;0==d&&b(e)},k=function(q){c(q)},l=0,m;l<a.length;l++)m=a[l],g.Me(m,g.w(f,l),k);
else b(e)})};
g.Pe=function(a,b){return Oe(a,null,b,void 0)};
Qe=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Qe(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Re(c),Se(c,e,3,b)))}a.D=null}else g.Ge(a,3,b)};
Ue=function(a,b){a.F||2!=a.C&&3!=a.C||Te(a);a.G?a.G.next=b:a.F=b;a.G=b};
Oe=function(a,b,c,d){var e=Ke(null,null,null);e.C=new g.He(function(f,k){e.F=b?function(l){try{var m=b.call(d,l);f(m)}catch(q){k(q)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof g.Ve?k(l):f(m)}catch(q){k(q)}}:k});
e.C.D=a;Ue(a,e);return e.C};
g.Ge=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Le(c,a.Y,a.N,a)||(a.M=c,a.C=b,a.D=null,Te(a),3!=b||c instanceof g.Ve||Baa(a,c)))};
Le=function(a,b,c,d){if(a instanceof g.He)return Ue(a,Ke(b||g.xa,c||null,d)),!0;if(g.Fe(a))return a.then(b,c,d),!0;if(g.Ea(a))try{var e=a.then;if(g.Da(e))return Caa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Caa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function k(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Te=function(a){a.L||(a.L=!0,Ae(a.J,a))};
Re=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Se=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,We(b,c,d);else try{b.D?b.F.call(b.context):We(b,c,d)}catch(e){Xe.call(null,e)}se(Je,b)};
We=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Baa=function(a,b){a.H=!0;Ae(function(){a.H&&Xe.call(null,b)})};
g.Ve=function(a){g.Ia.call(this,a)};
g.Ye=function(a,b,c){if(g.Da(a))c&&(a=(0,g.v)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.v)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.p.setTimeout(a,b||0)};
g.Ze=function(a){g.p.clearTimeout(a)};
g.$e=function(a,b,c){g.C.call(this);this.C=a;this.D=b||0;this.F=c;this.Pb=(0,g.v)(this.yk,this)};
Daa=function(){this.F=-1};
af=function(){this.F=64;this.C=[];this.L=[];this.M=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
bf=function(a,b,c){c||(c=0);var d=a.M;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):
(f=c^k^l,q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.cf=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
g.df=function(a){return a.classList?a.classList:g.cf(a).match(/\S+/g)||[]};
g.D=function(a,b){return a.classList?a.classList.contains(b):g.Ma(g.df(a),b)};
g.ef=function(){};
gf=function(a){if(a instanceof g.ef)return a;if("function"==typeof a.bd)return a.bd(!1);if(g.Ca(a)){var b=0,c=new g.ef;c.next=function(){for(;;){if(b>=a.length)throw g.ff;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.hf=function(a,b,c){if(g.Ca(a))try{(0,g.B)(a,b,c)}catch(d){if(d!==g.ff)throw d;}else{a=gf(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.ff)throw d;}}};
Eaa=function(a){if(g.Ca(a))return g.Qa(a);a=gf(a);var b=[];g.hf(a,function(c){b.push(c)});
return b};
g.kf=function(a,b){this.F={};this.C=[];this.Je=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.jf(this,a)};
Faa=function(a,b){return a===b};
g.mf=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.lf(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.lf(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.jf=function(a,b){if(b instanceof g.kf)for(var c=b.yc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.lf=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.of=function(a){var b=[];nf(new Gaa,a,b);return b.join("")};
Gaa=function(){};
nf=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),nf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),pf(d,c),c.push(":"),nf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":pf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
pf=function(a,b){b.push('"',a.replace(Haa,function(c){var d=qf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),qf[c]=d);return d}),'"')};
g.rf=function(a){g.C.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.sf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ka(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.qd(b)}};
Iaa=function(a,b,c){Ae(function(){a.apply(b,c)})};
g.tf=function(a){this.C=a};
uf=function(a){this.C=a};
vf=function(a){this.data=a};
xf=function(a){return void 0===a||a instanceof vf?a:new vf(a)};
g.yf=function(a){this.C=a};
g.zf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Lc)()||!!b&&b>(0,g.Lc)()};
Jaa=function(){};
Af=function(){};
g.Bf=function(a){this.C=a};
g.Cf=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Ff=function(a,b){this.F=a;this.C=null;if(g.Df&&!g.uc(9)){Ef||(Ef=new g.kf);this.C=Ef.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),Ef.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
Gf=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Kaa[b]})};
Hf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
If=function(a){return a.C.XMLDocument.documentElement};
Jf=function(a,b){this.F=a;this.C=b+"::"};
g.Kf=function(a){var b=new g.Cf;return b.isAvailable()?a?new Jf(b,a):b:null};
g.E=function(a,b){return a?a.dataset?a.dataset[g.Lf(b)]:a.getAttribute("data-"+b):null};
g.Lf=function(a){return Mf[a]||(Mf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
Nf=function(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])};
g.Pf=function(a){Nf(g.Of,arguments)};
Qf=function(a,b){var c=g.F(a,void 0);c?c.push(b):g.Pf(a,[b])};
g.F=function(a,b){return a in g.Of?g.Of[a]:b};
Rf=function(){return g.F("ERRORS",[])};
Sf=function(a){var b=g.Of.EXPERIMENT_FLAGS;return b?b[a]:void 0};
Maa=function(a){Laa.forEach(function(b){return b(a)})};
Uf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Tf(b),Maa(b)}}:a};
g.Tf=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=Rf(),b.push([a,"ERROR",void 0,void 0,void 0]),g.Pf("ERRORS",b))};
g.Vf=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Rf(),b.push([a,"WARNING",void 0,void 0,void 0]),g.Pf("ERRORS",b))};
Naa=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,k=Sf("log_window_onerror_fraction");if(k&&Math.random()<k)f=!0;else{k=document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?k=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,k=a.message,b=a.filename,c=a.lineno,d=a.colno):(k="Unknown error",b="Unknown file",c=0),a=Error(k),a.name="UnhandledWindowError",e=a,e.message=k,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?g.Tf(e):g.Vf(e))};
g.Wf=function(a,b){g.Da(a)&&(a=Uf(a));return window.setTimeout(a,b)};
g.Xf=function(a,b){g.Da(a)&&(a=Uf(a));return window.setInterval(a,b)};
g.Yf=function(a){window.clearTimeout(a)};
g.Zf=function(a){window.clearInterval(a)};
g.eg=function(a,b,c){var d=$f();if(d){var e=d.subscribe(a,function(){var f=arguments;var k=function(){ag[e]&&b.apply(c||window,f)};
try{bg[a]?k():g.Wf(k,0)}catch(l){g.Tf(l)}},c);
ag[e]=!0;cg[a]||(cg[a]=[]);cg[a].push(e);return e}return 0};
g.fg=function(a){var b=$f();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete ag[c]}))};
g.H=function(a,b){var c=$f();return c?c.publish.apply(c,arguments):!1};
g.gg=function(a,b){bg[a]=!0;var c=$f();c=c?c.publish.apply(c,arguments):!1;bg[a]=!1;return c};
$f=function(){return g.u("ytPubsubPubsubInstance")};
g.ig=function(a,b){var c=g.hg(a);spf.script.load(a,c,b)};
g.jg=function(a){a=g.hg(a);spf.script.unload(a)};
g.hg=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Oaa,""),b=b.replace(Paa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.lg=function(a){a=kg(a);return"string"===typeof a&&"false"===a?!1:!!a};
g.mg=function(a,b){var c=kg(a);return void 0===c&&void 0!==b?b:Number(c||0)};
ng=function(a){a=kg(a);return void 0!==a?String(a):""};
kg=function(a){var b=g.F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.F("EXPERIMENT_FLAGS",{})[a]};
og=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=g.hc(e[0]||""),k=g.hc(e[1]||"");f in b?g.Ba(b[f])?g.Ra(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(m){if("q"!=e[0]){var l=Error("Error decoding URL component");l.params={key:e[0],value:e[1]};g.Tf(l)}}}return b};
g.pg=function(a){var b=[];g.ib(a,function(c,d){var e=g.gc(d),f;g.Ba(c)?f=c:f=[c];(0,g.B)(f,function(k){""==k?b.push(e):b.push(e+"="+g.gc(k))})});
return b.join("&")};
g.qg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return og(a)};
g.sg=function(a,b){return g.rg(a,b||{},!0)};
g.rg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.qg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return g.rd(a,e)+d};
wg=function(a){var b=g.tg;a=void 0===a?g.u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.ug(b),g.vg(b));b.ca_type="image";a&&(b.bid=a);return b};
g.ug=function(a){var b={};b.dt=g.xg;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Gd(b);return b};
g.vg=function(a){var b=g.Id(a.C),c=g.Hd(a.C.top),d={};return d.bc=g.Od(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Pd(a.F),d.wgl=!!g.Dd.WebGLRenderingContext,d};
Qaa=function(){if(!yg)return null;var a=yg();return"open"in a?a:null};
g.Ag=function(a){switch(g.zg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.zg=function(a){return a&&"status"in a?a.status:-1};
Raa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.jd(1,a),e=g.kd(a);d&&e?(d=c,c=a.match(g.id),d=d.match(g.id),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.kd(c)==e&&(Number(g.jd(4,c))||null)==(Number(g.jd(4,a))||null):!0;d=g.lg("web_ajax_ignore_global_headers_if_set");for(var f in Bg)e=g.F(Bg[f]),!e||!c&&!Cg(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Cg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Cg(a,"X-YouTube-Time-Zone"))&&
(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Cg(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=g.pg(wg(void 0));return b};
Taa=function(a){var b=window.location.search,c=g.kd(a),d=g.hd(g.jd(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.qg(b),f={};(0,g.B)(Saa,function(k){e[k]&&(f[k]=e[k])});
return g.rg(a,f||{},!1)};
Cg=function(a,b){var c=g.F("CORS_HEADER_WHITELIST")||{},d=g.kd(a);return d?(c=c[d])?g.Ma(c,b):!1:!0};
Uaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Dg(a,b);var d=Eg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&g.Yf(f);var l=k.ok,m=function(q){q=q||{};var t=b.context||g.p;l?b.onSuccess&&b.onSuccess.call(t,q,k):b.onError&&b.onError.call(t,q,k);b.Xa&&b.Xa.call(t,q,k)};
"JSON"==(b.format||"JSON")&&(l||400<=k.status&&500>k.status)?k.json().then(m,function(){m(null)}):m(null)}});
b.iq&&0<b.timeout&&(f=g.Wf(function(){e||(e=!0,g.Yf(f),b.iq.call(b.context||g.p))},b.timeout))}else g.I(a,b)};
g.I=function(a,b){var c=b.format||"JSON";a=Dg(a,b);var d=Eg(a,b),e=!1,f,k=Fg(a,function(l){if(!e){e=!0;f&&g.Yf(f);var m=g.Ag(l),q=null,t=400<=l.status&&500>l.status,y=500<=l.status&&600>l.status;if(m||t||y)q=Vaa(c,l,b.ob);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};t=b.context||g.p;m?b.onSuccess&&b.onSuccess.call(t,l,q):b.onError&&b.onError.call(t,l,q);b.Xa&&b.Xa.call(t,l,q)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Oc&&0<b.timeout&&(f=g.Wf(function(){e||(e=!0,k.abort(),g.Yf(f),b.Oc.call(b.context||g.p,k))},b.timeout));
return k};
Dg=function(a,b){b.bR&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.F("XSRF_FIELD_NAME",void 0),d=b.Ta;d&&(d[c]&&delete d[c],a=g.sg(a,d));return a};
Eg=function(a,b){var c=g.F("XSRF_FIELD_NAME",void 0),d=g.F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.F("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Ku||g.kd(a)&&!b.withCredentials&&g.kd(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=g.qg(e),g.sb(e,f),e=b.gr&&"JSON"==b.gr?JSON.stringify(e):g.qd(e));f=e||f&&!g.lb(f);!Gg&&f&&"POST"!=b.method&&(Gg=!0,g.Tf(Error("AJAX request with postData should use POST")));
return e};
Vaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Hg(b):null)d={},(0,g.B)(b.getElementsByTagName("*"),function(e){d[e.tagName]=g.Ig(e)})}c&&Jg(d);
return d};
Jg=function(a){if(g.Ea(a))for(var b in a)"html_content"==b||g.Ua(b,"_html")?a[b]=g.cc(a[b],null):Jg(a[b])};
Hg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Ig=function(a){var b="";(0,g.B)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.Kg=function(a,b){b.method="POST";b.ia||(b.ia={});return g.I(a,b)};
Fg=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Uf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Qaa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.lg("debug_forward_web_query_parameters")&&(a=Taa(a));m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Raa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m};
g.Lg=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(g.ea(c))};
g.Mg=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,!1,void 0):(b=Rf(),b.push([a,"ERROR",void 0,void 0,!1,void 0]),g.Pf("ERRORS",b))};
g.Ng=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,!1,void 0):(b=Rf(),b.push([a,"WARNING",void 0,void 0,!1,void 0]),g.Pf("ERRORS",b))};
g.Og=function(){this.F=!1;this.C=null};
Pg=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.Ng(d)}c&&c(b)};
g.Sg=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
Waa=function(){};
g.Ug=function(a,b){return Tg(a,0,b)};
g.Vg=function(a,b){return Tg(a,1,b)};
g.Xg=function(a){for(var b=0,c=a.length;b<c;b++)g.Wg(a[b])};
Yg=function(){};
g.Zg=function(){return!!g.u("yt.scheduler.instance")};
Tg=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.Wf(a,c||0)};
g.Wg=function(a){if(!isNaN(a)){var b=g.u("yt.scheduler.instance.cancelJob");b?b(a):g.Yf(a)}};
Xaa=function(){return parseInt(g.F("DCLKSTAT",0),10)};
Yaa=function(){return g.$g.Nd()};
Zaa=function(a){a=void 0===a?{}:a;return g.Sg(g.$g,a)};
ah=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.bh=function(a){var b=new ah;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.ch=function(a){var b=new ah;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.eh=function(a){var b=a.__yt_uid_key;b||(b=dh(),a.__yt_uid_key=b);return b};
g.fh=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=$aa+"VisibilityState";if(b in a)return a[b]};
g.gh=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in aba||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}}catch(e){}};
hh=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.ih=function(a){void 0===a.C&&hh(a);return a.C};
g.jh=function(a){void 0===a.F&&hh(a);return a.F};
g.nh=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.kb(mh,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,k=g.Ea(e[4])&&g.Ea(d)&&g.ob(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.J=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.nh(a,b,c,d);if(e)return e;e=++oh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(l){l=new g.gh(l);if(!g.fd(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new g.gh(l);
l.currentTarget=a;return c.call(a,l)};
k=Uf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ph()||"boolean"===typeof d?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);mh[e]=[a,b,c,k,d];return e};
g.qh=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.B)(a,function(b){if(b in mh){var c=mh[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ph()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mh[b]}}))};
g.rh=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.J(a,b,function(){g.qh(e);c.apply(a,arguments)},d)};
g.sh=function(a){for(var b in mh)mh[b][0]==a&&g.qh(b)};
g.th=function(a){this.Pb=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.J(window,"mousemove",(0,g.v)(this.Y,this));this.N=g.Xf((0,g.v)(this.M,this),25)};
uh=function(){g.C.call(this);this.C=[]};
vh=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.pb(b);this.assets=a.assets||{};this.attrs=a.attrs||g.pb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.wh=function(a){a instanceof vh||(a=new vh(a));return a};
g.Dh=function(){g.Yf(g.xh);g.Yf(g.yh);g.yh=0;if(!g.lb(g.zh)){for(var a in g.zh){var b=Ah[a];b&&b.isReady()&&(bba(a,b),delete g.zh[a],Bh=!1)}g.lb(g.zh)||g.Ch()}};
cba=function(){var a=[];for(e in g.zh){var b=Eh[e]||{};Eh[e]=b;for(var c in g.zh[e]){var d=Fh(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round((0,g.Gh)());for(var f in Eh)b=Eh[f],b.eventType=f in Hh?Hh[f]:"UNKNOWN_TYPE",c=Ih[f],b.metricIntervalMs=c?e-c:e-g.Jh,a.push(b),Ih[f]=e,delete Eh[f];return a};
g.Ch=function(){g.lg("web_gel_timeout_cap")&&!g.yh&&(g.yh=g.Wf(g.Dh,6E4));g.Yf(g.xh);var a=g.mg("web_gel_debounce_ms",1E4);a=g.F("LOGGING_BATCH_TIMEOUT",g.Kh||a);g.lg("shorten_initial_gel_batch_timeout")&&Bh&&(a=dba);g.xh=g.Wf(g.Dh,a)};
Fh=function(a,b){b=void 0===b?"":b;g.zh[a]=g.zh[a]||{};g.zh[a][b]=g.zh[a][b]||[];return g.zh[a][b]};
bba=function(a,b){var c=eba[a],d=Eh[a]||{};Eh[a]=d;var e=Math.round((0,g.Gh)());for(q in g.zh[a]){var f=g.qb({context:g.Lh(b.C||g.Mh())});f[c]=Fh(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;var k=Nh[q];if(k)a:{var l=q;if(k.videoId)var m="VIDEO";else if(k.playlistId)m="PLAYLIST";else break a;f.credentialTransferTokenTargetId=k;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Nh[q];
f.requestTimeMs=e;g.lg("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(k=g.F("EVENT_ID",void 0))m=g.F("BATCH_CLIENT_COUNTER",void 0)||0,!m&&g.lg("web_client_counter_random_seed")&&(m=Math.floor(Math.random()*Oh/2)),m++,m>Oh&&(m=1),g.Pf("BATCH_CLIENT_COUNTER",m),k={serializedEventId:k,clientCounter:m},f.serializedClientEventId=k,Ph&&Qh&&g.lg("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Ph,roundtripMs:Qh}),Ph=k,Qh=0;g.Rh(b,a,f,{retry:fba.has(a),onSuccess:(0,g.v)(gba,
this,(0,g.Gh)())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e};
gba=function(a){Qh=Math.round((0,g.Gh)()-a)};
g.Uh=function(a){var b=void 0===a?{}:a;a=void 0===b.cy?!0:b.cy;b=void 0===b.KF?!1:b.KF;if(null==g.u("_lact",window)){var c=parseInt(g.F("LACT"),10);c=isFinite(c)?(0,g.Lc)()-Math.max(c,0):-1;g.r("_lact",c,window);g.r("_fact",c,window);-1==c&&g.Sh();g.J(document,"keydown",g.Sh);g.J(document,"keyup",g.Sh);g.J(document,"mousedown",g.Sh);g.J(document,"mouseup",g.Sh);a&&(b?g.J(window,"touchmove",function(){Th("touchmove",200)},{passive:!0}):(g.J(window,"resize",function(){Th("resize",200)}),g.J(window,
"scroll",function(){Th("scroll",200)})));
new g.th(function(){Th("mouse",100)});
g.J(document,"touchstart",g.Sh,{passive:!0});g.J(document,"touchend",g.Sh,{passive:!0})}};
Th=function(a,b){Vh[a]||(Vh[a]=!0,g.Vg(function(){g.Sh();Vh[a]=!1},b))};
g.Sh=function(){null==g.u("_lact",window)&&g.Uh();var a=(0,g.Lc)();g.r("_lact",a,window);-1==g.u("_fact",window)&&g.r("_fact",a,window);(a=g.u("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Wh=function(){var a=g.u("_lact",window);return null==a?-1:Math.max((0,g.Lc)()-a,0)};
g.$h=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.Gh)());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.Wh())};g.lg("log_sequence_info_on_gel_web")&&d.Fe&&(a=e.context,b=d.Fe,Xh[b]=b in Xh?Xh[b]+1:0,a.sequence={index:Xh[b],groupKey:b},d.Gu&&delete Xh[d.Fe]);(d=d.Of)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Nh[d.token]=a,d=Fh("log_event",d.token)):d=Fh("log_event");d.push(e);c&&(Ah.log_event=new c);c=g.mg("web_logging_max_batch")||
100;e=(0,g.Gh)();d.length>=c?g.Dh():e-g.Yh>=g.Zh&&(g.Ch(),g.Yh=e)};
ai=function(){return"INNERTUBE_API_KEY"in g.Of&&"INNERTUBE_API_VERSION"in g.Of};
g.Mh=function(){return{innertubeApiKey:g.F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.F("INNERTUBE_API_VERSION",void 0),ey:g.F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),fy:g.F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),hy:g.F("INNERTUBE_CONTEXT_HL",void 0),gy:g.F("INNERTUBE_CONTEXT_GL",void 0),iy:g.F("INNERTUBE_HOST_OVERRIDE",void 0)||"",jy:!!g.F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}};
g.Lh=function(a){a={client:{hl:a.hy,gl:a.gy,clientName:a.fy,clientVersion:a.innertubeContextClientVersion,configInfo:a.ey}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=g.F("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=g.F("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=g.F("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request=
{internalExperimentFlags:b});g.F("DELEGATED_SESSION_ID")&&!g.lg("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.F("DELEGATED_SESSION_ID")});return a};
bi=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.VQ||g.F("AUTHORIZATION"))||(a?b="Bearer "+g.u("gapi.auth.getToken")().TQ:b=Ld([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.F("SESSION_INDEX",0),g.lg("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.F("DELEGATED_SESSION_ID")));return d};
ci=function(a){a=Object.assign({},a);delete a.Authorization;var b=Ld();if(b){var c=new af;c.update(g.F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=xc(c.digest(),3)}return a};
g.ei=function(a,b,c,d){g.di.set(""+a,b,{xl:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})};
g.fi=function(a,b,c){g.di.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.gi=function(a){var b;(b=g.Kf(a))||(a=new Ff(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.yf(a):null;this.F=document.domain||window.location.hostname};
hba=function(a,b,c,d){if(d)return null;d=hi.get("nextId",!0)||1;var e=hi.get("requests",!0)||{};e[d]={method:a,request:b,authState:ci(c),requestTime:Math.round((0,g.Gh)())};hi.set("nextId",d+1,86400,!0);hi.set("requests",e,86400,!0);return d};
ii=function(a){var b=hi.get("requests",!0)||{};delete b[a];hi.set("requests",b,86400,!0)};
ji=function(a){var b=hi.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round((0,g.Gh)())-d.requestTime)){var e=d.authState,f=ci(bi(!1));g.ob(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round((0,g.Gh)())),g.Rh(a,d.method,e,{}));delete b[c]}}hi.set("requests",b,86400,!0)}};
g.ki=function(a){var b=this;this.C=null;a?this.C=a:g.lg("delay_gel_until_config_ready")?ai()&&(this.C=g.Mh()):this.C=g.Mh();g.Ug(function(){ji(b)},5E3)};
g.Rh=function(a,b,c,d){!g.F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&g.Vf(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,gr:"JSON",Oc:function(){d.Oc()},
iq:d.Oc,onSuccess:function(A,G){if(d.onSuccess)d.onSuccess(G)},
aj:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,G){if(d.onError)d.onError(G)},
hq:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.iy;k&&(f=k);k=a.C.jy||!1;var l=bi(k,f,d);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=g.sg(""+f+("/youtubei/"+a.C.innertubeApiVersion+"/"+b),{alt:"json",key:a.C.innertubeApiKey}),q;if(d.retry&&g.lg("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(q=hba(b,c,l,k))){var t=e.onSuccess,y=e.aj;e.onSuccess=function(A,G){ii(q);t(A,G)};
c.aj=function(A,G){ii(q);y(A,G)}}try{g.lg("use_fetch_for_op_xhr")?Uaa(m,e):g.Kg(m,e)}catch(A){if("InvalidAccessError"==A)q&&(ii(q),q=0),g.Vf(Error("An extension is blocking network request."));
else throw A;}q&&g.Ug(function(){ji(a)},5E3)};
g.li=function(a,b,c){c=void 0===c?{}:c;var d=g.ki;g.F("ytLoggingEventsDefaultDisabled",!1)&&g.ki==g.ki&&(d=null);g.$h(a,b,d,c)};
g.mi=function(){g.lg("log_web_meta")&&cba().forEach(function(a){g.li("delayedEventMetricCaptured",a)})};
g.ni=function(a){this.C=a};
g.oi=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.oi(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
qi=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Lc)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(pi)for(a=1,b=0;b<pi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^pi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.vi=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(ri==a)return;ri=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Wh()>b)&&"visible"==g.fh()){b=-1;g.si&&(b=Math.round((0,g.Gh)()-g.si));var c=String;var d=g.u("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Lc)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:ti,index:String(ui),lastEventDeltaMs:String(b),trigger:a};g.$h("foregroundHeartbeat",
a,g.ki);g.r("_fact",-1,window);ui++;g.si=(0,g.Gh)()}};
g.wi=function(a){a&&g.$h("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ti,clientScreenNonce:a},g.ki)};
xi=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
yi=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
zi=function(a){return g.F(yi(void 0===a?0:a),void 0)};
g.Ai=function(){var a=zi(0),b;a?b=new g.ni({veType:a,youtubeData:void 0}):b=null;return b};
Bi=function(){var a=g.F("csn-to-ctt-auth-info");a||(a={},g.Pf("csn-to-ctt-auth-info",a));return a};
g.Ci=function(a){a=void 0===a?0:a;var b=g.F(xi(a));if(!b&&!g.F("USE_CSN_FALLBACK",!0))return null;b||0!=a||(g.lg("kevlar_client_side_screens")||g.lg("c3_client_side_screens")?b="UNDEFINED_CSN":b=g.F("EVENT_ID"));return b?b:null};
iba=function(a,b,c){var d=Bi();(c=g.Ci(c))&&delete d[c];b&&(d[a]=b)};
g.Di=function(a){return Bi()[a]};
g.Ei=function(a,b,c,d){c=void 0===c?0:c;if(a!==g.F(xi(c))||b!==g.F(yi(c)))iba(a,d,c),g.Pf(xi(c),a),g.Pf(yi(c),b),0==c&&(b=function(){setTimeout(function(){g.wi(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
g.Fi=function(a,b){this.version=a;this.args=b};
g.Gi=function(a,b){this.topic=a;this.C=b};
g.Ii=function(a,b){var c=Hi();c&&c.publish.call(c,a.toString(),a,b)};
g.Pi=function(a,b,c){var d=Hi();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,k){var l=g.u("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(Ji[e])try{if(k&&a instanceof g.Gi&&a!=f)try{var m=a.C,q=k;if(!q.args||!q.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.Je){var t=new m;m.Je=t.version}var y=m.Je}catch(A){}if(!y||q.version!=y)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=Reflect.construct(m,
g.Qa(q.args))}catch(A){throw A.message="yt.pubsub2.Data.deserialize(): "+A.message,A;}}catch(A){throw A.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+A.message,A;}b.call(c||window,k)}catch(A){g.Tf(A)}},Ki[a.toString()]?g.Zg()?g.Vg(l):g.Wf(l,0):l())});
Ji[e]=!0;Oi[a.toString()]||(Oi[a.toString()]=[]);Oi[a.toString()].push(e);return e};
lba=function(){var a=jba,b=g.Pi(kba,function(c){a.apply(void 0,arguments);g.Qi(b)},void 0);
return b};
g.Qi=function(a){var b=Hi();b&&("number"===typeof a&&(a=[a]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete Ji[c]}))};
Hi=function(){return g.u("ytPubsub2Pubsub2Instance")};
Ri=function(a){g.Fi.call(this,1,arguments);this.csn=a};
g.Ui=function(a,b,c){Si.push({AF:a,payload:b,options:c});Ti||(Ti=lba())};
jba=function(a){if(Si){for(var b=g.da(Si),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,g.$h(c.AF,c.payload,null,c.options));Si.length=0}Ti=0};
g.Vi=function(a,b,c){(0,g.B)(b,function(d){var e=c;e=void 0===e?!1:e;d={csn:a,ve:g.oi(d),eventType:e?16:8};e={Of:g.Di(a),Fe:a,Gu:e};"UNDEFINED_CSN"==a?g.Ui("visualElementHidden",d,e):g.$h("visualElementHidden",d,g.ki,e)})};
Wi=function(){var a=g.Ai(),b=g.Ci();b&&a&&g.Vi(b,[a],!0)};
g.Xi=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Uf(d):null;this.H=e?Uf(e):null;this.G=[];this.C=this.F=0};
g.Yi=function(a){g.Wg(a.F);a.F=g.Vg((0,g.v)(a.init,a))};
g.aj=function(a){a.name in Zi&&$i(a.name);Zi[a.name]={reqs:[],disable:(0,g.v)(a.disable,a)};(0,g.B)(a.deps,function(b){if(!(b in Zi))throw Error("Module "+b+" required by "+a.name);Zi[b].reqs.push(a.name)});
a.enable()};
$i=function(a){if(a in Zi){var b=Zi[a];(0,g.B)(b.reqs,function(c){$i(c)});
try{b.disable()}catch(c){}delete Zi[a]}};
cj=function(a){Nf(g.bj,arguments)};
g.dj=function(a){return a in g.bj};
ej=function(a){Nf(g.bj,arguments)};
g.fj=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.gb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Lb(g.Pb(a)),"about:invalid#zClosurez"===a?a="":(a=g.$b(g.bc(a)),a=g.gc(g.of(a))),g.Va(a)||(a=g.Zc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.ed(a).body.appendChild(a))):e?Fg(a,b,"POST",e,d):g.F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Fg(a,b,"GET","",d):mba(a,b)||nba(a,b))};
mba=function(a,b){if(!Sf("web_use_beacon_api_for_ad_click_server_pings"))return!1;var c=g.hd(g.jd(5,a));return c&&-1!=c.indexOf("/aclk")&&"1"===g.vd(a,"ae")&&"1"===g.vd(a,"act")?gj(a)?(b&&b(),!0):!1:!1};
gj=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
nba=function(a,b){var c=new Image,d=""+oba++;hj[d]=c;c.onload=c.onerror=function(){b&&hj[d]&&b();delete hj[d]};
c.src=a};
g.ij=function(a,b){a=a||"";var c=a.match(pba);spf.style.load(a,c?c[1]:"",b)};
lj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!jj(a)||c.some(function(e){return!jj(e)}))throw Error("Only objects may be merged.");
c=g.da(c);for(d=c.next();!d.done;d=c.next())kj(a,d.value);return a};
kj=function(a,b){for(var c in b)if(jj(b[c])){if(c in a&&!jj(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});kj(a[c],b[c])}else if(mj(b[c])){if(c in a&&!mj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);nj(a[c],b[c])}else a[c]=b[c];return a};
nj=function(a,b){for(var c=g.da(b),d=c.next();!d.done;d=c.next())d=d.value,jj(d)?a.push(kj({},d)):mj(d)?a.push(nj([],d)):a.push(d);return a};
jj=function(a){return"object"===typeof a&&!Array.isArray(a)};
mj=function(a){return"object"===typeof a&&Array.isArray(a)};
g.oj=function(a,b,c){var d=void 0===d?!0:d;var e=g.F("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=g.kd(window.location.href);f&&e.push(f);f=g.kd(a);if(g.Ma(e,f)||!f&&g.Ta(a,"/"))if(g.lg("autoescape_tempdata_url")&&(e=document.createElement("a"),g.dc(e,a),a=e.href),a&&(a=g.ld(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.Ci()},b)),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+g.lc(a).toString(36),b=b?g.qd(b):"",g.ei(d,b,c||5))):(c=b,b="ST-"+g.lc(a).toString(36),
c=c?g.qd(c):"",g.ei(b,c,5))};
g.pj=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.fc(d.location,g.rd(a,b)+c)};
g.qj=function(a,b){b&&g.oj(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.pj(a)};
g.rj=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.F("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.oj(a,b);if(c)return!1;g.qj(a);return!0};
vj=function(a,b,c,d){g.C.call(this);var e=this;this.L=this.Ya=a;this.ha=b;this.M=!1;this.api={};this.na=this.N=null;this.Y=new g.rf;g.Sd(this,this.Y);this.G={};this.la=this.qa=this.F=this.nb=this.C=null;this.T=!1;this.H=this.J=null;this.ib={};this.Pd=["onReady"];this.kb=null;this.sb=NaN;this.W={};this.D=d;sj(this);this.Jh("WATCH_LATER_VIDEO_ADDED",this.gD.bind(this));this.Jh("WATCH_LATER_VIDEO_REMOVED",this.hD.bind(this));this.Jh("onAdAnnounce",this.Dt.bind(this));this.Hb=new uh(this);g.Sd(this,this.Hb);
this.aa=0;c?this.aa=g.Wf(function(){e.loadNewVideoConfig(c)},0):d&&(tj(this),uj(this))};
tj=function(a){var b;a.D?b=a.D.rootElementId:b=a.C.attrs.id;a.F=b||a.F;"video-player"==a.F&&(a.F=a.ha,a.C.attrs.id=a.ha);a.L.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F)};
wj=function(a){a.C&&!a.C.loaded&&(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
zj=function(a){var b=!0,c=xj(a);c&&a.C&&(a=yj(a),b=g.E(c,"version")===a);return b&&!!g.u("yt.player.Application.create")};
uj=function(a){if(!a.qb()&&!a.T){var b=zj(a);if(b&&"html5"==(xj(a)?"html5":null))a.la="html5",a.M||Aj(a);else if(Bj(a),a.la="html5",b&&a.H)a.Ya.appendChild(a.H),Aj(a);else{a.C&&(a.C.loaded=!0);var c=!1;a.J=function(){c=!0;if(a.D)var d=a.D.serializedExperimentFlags;else a.C&&a.C.args&&(d=a.C.args.fflags);d="true"==og(d||"").player_bootstrap_method?g.u("yt.player.Application.createAlternate")||g.u("yt.player.Application.create"):g.u("yt.player.Application.create");var e=a.C?a.C.clone():void 0;d(a.Ya,
e,a.D);Aj(a)};
a.T=!0;b?a.J():(g.ig(yj(a),a.J),g.ij(a.D?a.D.cssUrl:a.C.assets.css),Cj(a)&&!c&&g.r("yt.player.Application.create",null,void 0))}}};
xj=function(a){var b=g.z(a.F);!b&&a.L&&a.L.querySelector&&(b=a.L.querySelector("#"+a.F));return b};
Aj=function(a){if(!a.qb()){var b=xj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.T=!1,b.isNotServable&&a.C&&b.isNotServable(a.C.args.video_id)||qba(a)):a.sb=g.Wf(function(){Aj(a)},50)}};
qba=function(a){sj(a);a.M=!0;var b=xj(a);b.addEventListener&&(a.N=Dj(a,b,"addEventListener"));b.removeEventListener&&(a.na=Dj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Dj(a,b,e))}for(var f in a.G)a.N(f,a.G[f]);wj(a);a.qa&&a.qa(a.api);a.Y.oa("onReady",a.api)};
Dj=function(a,b,c){var d=b[c];return function(){try{return a.kb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.kb=e,g.Vf(e))}}};
sj=function(a){a.M=!1;if(a.na)for(var b in a.G)a.na(b,a.G[b]);for(var c in a.W)g.Yf(parseInt(c,10));a.W={};a.N=null;a.na=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Jh.bind(a);a.api.removeEventListener=a.QF.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.ev.bind(a);a.api.getPlayerType=a.qv.bind(a);a.api.getCurrentVideoConfig=a.Yu.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.cz.bind(a)};
Ej=function(a,b){var c=b;if("string"==typeof b){if(a.ib[b])return a.ib[b];c=function(){var d=g.u(b);d&&d.apply(g.p,arguments)};
a.ib[b]=c}return c?c:null};
rba=function(a,b){var c="ytPlayer"+b+a.ha;a.G[b]=c;g.p[c]=function(d){var e=g.Wf(function(){a.qb()||(a.Y.oa(b,d),g.mb(a.W,String(e)))},0);
g.nb(a.W,String(e),!0)};
return c};
Bj=function(a){a.cancel();sj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=xj(a);b&&(zj(a)||!Cj(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null));g.cd(a.Ya)};
Cj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
yj=function(a){return a.D?a.D.jsUrl:a.C.assets.js};
g.Hj=function(a,b){var c=void 0===c?!0:c;a="string"===typeof a?g.Sc(a):a;var d=g.Fj+"_"+g.Ga(a),e=g.Gj[d];if(e&&c)return b&&b.args&&b.args.fflags&&b.args.fflags.includes("web_player_remove_playerproxy=true")?e.api.loadVideoByPlayerVars(b.args||null):e.loadNewVideoConfig(b),e.api;e=new vj(a,d,b,void 0);g.Gj[d]=e;g.H("player-added",e.api);g.Qd(e,g.w(sba,e));return e.api};
sba=function(a){delete g.Gj[a.getId()]};
g.Ij=function(a){if(!a)return null;var b=g.Fj+"_"+g.Ga(a),c=g.Gj[b];c||(c=new vj(a,b),g.Gj[b]=c);return c.api};
g.Jj=function(a){return g.Ij(document.getElementById(a))};
g.Lj=function(a,b){var c={};c.key=a;c.value=b;return Kj().then(function(d){return new Promise(function(e,f){try{var k=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);k.onsuccess=function(){e()};
k.onerror=function(){f()}}catch(l){f(l)}})})};
g.Mj=function(a){var b=new g.Lg("Error accessing DB");return Kj().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=function(){var k=f.result;d(k?k.value:null)};
f.onerror=function(){b.params={key:a,source:"onerror"};e(b)}}catch(k){b.params={key:a,
thrownError:String(k)},e(b)}})},function(){return null})};
Kj=function(){return Nj?Promise.resolve(Nj):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Nj=d,a(Nj);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Kj()};
c.onupgradeneeded=tba})};
tba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
uba=function(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}};
vba=function(a){if(Oj.getEntriesByType){var b=Oj.getEntriesByType("paint");if(b=g.Ka(b,function(c){return"first-paint"==c.name}))return Math.round(a.navigationStart+b.startTime)}return a.C?Math.max(0,a.C):0};
Pj=function(a,b){g.Fi.call(this,1,arguments)};
Qj=function(a,b){g.Fi.call(this,1,arguments)};
Sj=function(a){var b=Rj(a);if(b.aft)return b.aft;a=g.F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
Tj=function(a){g.r("ytglobal.timingready_",a,void 0)};
Uj=function(a){return!!g.u("yt.timing."+(a||"")+"pingSent_")};
Vj=function(a,b){g.r("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Xj=function(a){return g.u("ytcsi."+(a||"")+"data_")||Wj(a)};
Yj=function(a){a=Xj(a);a.info||(a.info={});return a.info};
Rj=function(a){a=Xj(a);a.tick||(a.tick={});return a.tick};
Zj=function(a){var b=Xj(a).nonce;b||(b=qi(),Xj(a).nonce=b);return b};
Wj=function(a){var b={tick:{},info:{}};g.r("ytcsi."+(a||"")+"data_",b,void 0);return b};
bk=function(a){var b=Rj(a||""),c=Sj(a);c&&!ak&&(g.Ii(wba,new Pj(Math.round(c-b._start),a)),ak=!0)};
ck=function(){var a=g.u("ytcsi.debug");a||(a=[],g.r("ytcsi.debug",a,void 0),g.r("ytcsi.reference",{},void 0));return a};
ek=function(a){a=a||"";var b=dk();if(b[a])return b[a];var c=ck(),d={timerName:a,info:{},tick:{}};c.push(d);return b[a]=d};
dk=function(){var a=g.u("ytcsi.reference");if(a)return a;ck();return g.u("ytcsi.reference")};
fk=function(){this.C=0};
gk=function(){fk.C||(fk.C=new fk);return fk.C};
ik=function(a,b){hk[b]=hk[b]||{count:0};var c=hk[b];c.count++;c.time=(0,g.Gh)();a.C||(a.C=g.Ug(function(){var d=(0,g.Gh)(),e;for(e in hk)hk[e]&&6E4<d-hk[e].time&&delete hk[e];a&&(a.C=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new g.Lg("CSI data exceeded logging limit with key",b),0===b.indexOf("info")?g.Ng(c):g.Mg(c)),!0):!1};
jk=function(a){return!!g.F("FORCE_CSI_ON_GEL",!1)||g.lg("csi_on_gel")||!!Xj(a).useGel};
lk=function(a,b,c){var d=kk(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||(0,g.Gh)();return jk(c)?(ek(c||"").tick[a]=b||(0,g.Gh)(),d=Zj(c),"_start"===a?(a=gk(),ik(a,"baseline_"+d)||g.li("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):gk().tick(a,d,b),bk(c),!0):!1};
ok=function(a,b,c){c=kk(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a in mk){c=mk[a];g.Ma(xba,c)&&(b=!!b);a in nk&&"string"===typeof b&&(b=nk[a]+b.toUpperCase());a=c.split(".");d=c={};for(var e=0;e<a.length-1;e++){var f=a[e];d[f]={};d=d[f]}d[a[a.length-1]]=b;return lj({},c)}g.Ma(yba,a)||g.Ng(new g.Lg("Unknown label logged with GEL CSI",a))};
kk=function(a){a=Xj(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel};
pk=function(a){a=kk(a);"gelInfos"in a||(a.gelInfos={});return a.gelInfos};
rk=function(a,b,c){null!==b&&(Yj(c)[a]=b,jk(c)?(a=ok(a,b,c))&&qk(a,c):ek(c||"").info[a]=b)};
qk=function(a,b){if(jk(b)){var c=ek(b||"");lj(c.info,a);lj(pk(b),a);c=Zj(b);gk().info(a,c)}};
sk=function(){Wj(void 0);zba();Vj(!1,void 0);g.F("TIMING_ACTION")&&g.Pf("PREVIOUS_ACTION",g.F("TIMING_ACTION"));g.Pf("TIMING_ACTION","")};
Dba=function(){var a=g.F("TIMING_ACTION",void 0),b=g.F("TIMING_AFT_KEYS");ek("").info.actionType=a;b&&g.Pf("TIMING_AFT_KEYS",b);g.Pf("TIMING_ACTION",a);a=g.F("TIMING_INFO",{});for(var c in a)rk(c,a[c]);rk("is_nav",1);(c=g.Ci())&&rk("csn",c);(c=g.F("PREVIOUS_ACTION",void 0))&&!jk()&&rk("pa",c);c=Yj();a=g.F("CLIENT_PROTOCOL");b=g.F("CLIENT_TRANSPORT");a&&rk("p",a);b&&rk("t",b);rk("yt_vis",Aba());if("cold"==c.yt_lt){rk("yt_lt","cold");a=Oj.timing;a.navigationStart&&(g.tk("srt",a.responseStart),1!=c.prerender&&
uk("n",a.navigationStart));c=vba(a);0<c&&g.tk("fpt",c);vk(a);Oj.getEntriesByType&&Bba();c=[];if(document.querySelector&&Oj&&Oj.getEntriesByName)for(var d in wk)a=wk[d],Cba(d,a)&&c.push(a);c.length&&rk("rc",c.join(","))}jk(void 0)&&(d={actionType:xk[g.F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:xk[g.F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"},c=Zj(void 0),gk().info(d,c));d=Yj();a=Rj();if("cold"===d.yt_lt&&(c=kk(),b=c.gelTicks?c.gelTicks:c.gelTicks={},c=c.gelInfos?
c.gelInfos:c.gelInfos={},jk())){for(var e in a)"tick_"+e in b||lk(e,a[e]);e=pk();a=Zj();b={};for(var f in d)if(!("info_"+f in c)){var k=ok(f,d[f]);k&&(lj(e,k),lj(b,k))}gk().info(b,a)}Tj(!0);g.yk(!1)};
g.tk=function(a,b,c){var d=Rj(c);if(g.lg("use_first_tick")&&zk(a,c))return d[a];if(!b&&"_"!=a[0]){var e=a;Oj.mark&&(g.Ta(e,"mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Oj.mark(e))}e=b||(0,g.Gh)();d[a]=e;lk(a,b,c)||(g.yk(!1,c),ek(c||"").tick[a]=b||(0,g.Gh)());return d[a]};
uk=function(a,b){rk("yt_sts",a,void 0);g.tk("_start",b,void 0)};
zk=function(a,b){var c=Rj(b);return a in c};
Ak=function(a,b){if(null!==b)if(Yj(void 0)[a]=b,jk(void 0)){var c=ok(a,b,void 0);c&&qk(c,void 0)}else ek("").info[a]=b};
vk=function(a){g.tk("nreqs",a.requestStart,void 0);g.tk("nress",a.responseStart,void 0);g.tk("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.tk("nrs",a.redirectStart,void 0),g.tk("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.tk("ndnss",a.domainLookupStart,void 0),g.tk("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.tk("ntcps",a.connectStart,void 0),g.tk("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.tk("nstcps",a.secureConnectionStart,void 0),g.tk("ntcpe",a.connectEnd,void 0))};
g.yk=function(a,b){if(!Uj(b)){var c=g.F((b||"")+"TIMING_ACTION",void 0),d=Rj(b);if(g.u("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&Sj(b))if(bk(b),a||b)Bk(b);else{c=!0;var e=g.F("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Bk(b)}}};
Aba=function(){switch(g.fh()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Bk=function(a){if(!jk(a)){var b=Rj(a),c=Yj(a),d=b._start,e=g.F("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:g.F((a||"")+"TIMING_ACTION",void 0)},k=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var l=window.location.protocol+g.u("ytplayer.config.assets.js");(l=Oj.getEntriesByName?Oj.getEntriesByName(l)[0]:void 0)?c.h5jse=Math.round(c.h5jse-l.responseEnd):delete c.h5jse}b.aft=Sj(a);var m=Rj(a);l=m.pbr;var q=m.vc;m=m.pbs;l&&q&&m&&l<q&&q<m&&Yj(a).yt_pvis&&"youtube"==e&&(rk("yt_lt","hot_bg",a),e=b.vc,
l=b.pbs,delete b.aft,c.aft=Math.round(l-e));for(var t in c)"_"!=t.charAt(0)&&(f[t]=c[t]);b.ps=(0,g.Gh)();t={};e=[];for(var y in b)"_"!=y.charAt(0)&&(l=Math.round(b[y]-d),t[y]=l,e.push(y+"."+l));f.rt=e.join(",");(b=g.u("ytdebug.logTiming"))&&b(f,t);c=!!c.ap;g.lg("debug_csi_data")&&(b=g.u("yt.timing.csiData"),b||(b=[],g.r("yt.timing.csiData",b,void 0)),b.push({page:location.href,time:new Date,args:f}));b="";for(var A in f)f.hasOwnProperty(A)&&(b+="&"+A+"="+f[A]);f="/csi_204?"+b.substring(1);if(window.navigator&&
window.navigator.sendBeacon&&c){var G=void 0===G?"":G;gj(f,G)||g.fj(f,void 0,void 0,void 0,G)}else g.fj(f);Vj(!0,a);g.Ii(Eba,new Qj(t.aft+(k||0),a))}};
Ck=function(a){if(!jk(void 0)&&!Uj(void 0)){var b=g.F("CSI_SERVICE_NAME","youtube");g.F("TIMING_ACTION",void 0)&&b&&(g.tk("aa",void 0,void 0),rk("ap",1,void 0),rk("yt_fss",a,void 0),Bk(void 0))}};
Bba=function(){var a=window.location.protocol,b=Oj.getEntriesByType("resource");b=(0,g.Dk)(b,function(c){return 0==c.name.indexOf(a+"//web.archive.org/web/20200301000313/https://fonts.gstatic.com/s/")});
(b=(0,g.Nd)(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.tk("wffs",Math.round(Oj.timing.navigationStart+b.startTime)),g.tk("wffe",Math.round(Oj.timing.navigationStart+b.responseEnd)))};
Cba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);g.wa()&&c.setAttribute("nonce",g.wa());return d?(c=Oj.getEntriesByName(d))&&c[0]&&(c=c[0],d=Oj.timing.navigationStart,g.tk("rsf_"+b,d+Math.round(c.fetchStart)),g.tk("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(d=Yj(void 0),e=pk(void 0),"rc"in d||"rc"in e||rk("rc",""),0===c.transferSize))?
!0:!1:!1};
Kba=function(){Ek++;var a=g.Wc(),b=new g.zd(0,0,a.width,a.height);Ak("vph",a.height);Ak("vpw",a.width);g.tk("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[];Gk.start();for(var e=0;e<c;e++){var f=a[e];Hk(f,b)&&(f=Fba(f),f.then(Gba),d.push(f),Ik.push(f))}g.tk("vpcc");b=g.Ne(d).then(Hba);g.Pe(b,Iba);b.then(Jba);Ik.push(b);return b};
Jba=function(){Gk.stop()};
Iba=function(){g.tk("vpr")};
Hk=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.eh(c);if(e in Jk)return!0;if(e in Kk)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Kk[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Kk[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Jk[d[c]]=!0;return!0};
Hba=function(a){var b=g.Wc();b=new g.zd(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Hk(a[d].by,b)&&c<f&&(c=f)}return c};
Fba=function(a){var b=Ek;return new g.He(function(c,d){var e={by:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){Ek!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},Lk.push(a))})};
Gba=function(a){Gk.start();a=a.time;Mk<a&&(Mk=a,g.tk("lim",a))};
Lba=function(){g.tk("vptl",Mk);g.tk("vpl",Mk)};
Mba=function(){Ik.forEach(function(a){a.cancel()});
Mk=Ik.length=0;Jk={};Kk={};Lk.forEach(function(a){a.slt=void 0});
Lk.length=0};
g.Nk=function(a,b){g.fj("/gen_204?"+a,b)};
Nba=function(a){if(null==a)return[];var b=[];g.lg("ima_prevent_mpu_queries_on_cached_playback")&&0>Ok.indexOf("ad3_module")&&Ok.push("ad3_module");Ok.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Pk=function(){return g.D(g.z("page-container"),"remote-connected")};
Oba=function(){Qk=g.Xf(Rk,5E3);var a=g.Sk();a&&(a.addEventListener("onReady",Rk),a.addEventListener("onStateChange",Rk))};
Tk=function(a){for(var b in g.Gj){var c=g.Gj[b];c&&c.cancel()}if(a=a||null)g.Hj("player-api",a),a=g.wh(a),a.loaded=!0;Rk();g.r("ytplayer.config",a,void 0)};
g.Sk=function(){return g.Jj("player-api")};
Rk=function(){var a=g.Sk();if(a){var b=1==(a&&a.isReady()?a.getPlayerState():void 0),c="watch"==g.F("PAGE_NAME"),d=g.Pk();!b||c||d||a.pauseVideo()}};
Vk=function(){g.tk("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){g.tk("cpt");g.H("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(g.tk("cpt"),g.H("on_cpt_tick",(new Date).getTime())):setTimeout(function(){g.tk("cpt");
g.H("on_cpt_tick",(new Date).getTime())},0);
Pba();g.F("CSI_VIEWPORT")&&(Uk=Kba(),Uk.then(function(a){g.tk("vpl",a);Uk=null},function(){}))};
Pba=function(){Wk("init");var a=g.F("PAGE_NAME",void 0);a&&Wk("init-"+a)};
Wk=function(a){g.Zg()?Xk.push(g.Vg(g.w(g.gg,a),0)):g.H(a)};
Yk=function(){g.Xg(Xk);Xk.length=0;Mba();Uk&&(Uk.cancel(),Uk=null);var a=g.F("PAGE_NAME",void 0);a&&g.gg("dispose-"+a);g.gg("dispose")};
Qba=function(){Vk()};
Rba=function(){g.F("TIMING_REPORT_ON_UNLOAD")&&g.yk(!0);Ck("u");g.vi("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Wi();g.mi();g.Dh();Yk();g.gg("pageunload")};
Zk=function(){g.Sh()};
$k=function(){window.yt_spf_loaded_history=!0;g.Sh()};
el=function(){al=1;bl=cl=0;g.F("TIMING_REPORT_ON_UNLOAD")&&g.yk(!0);if(g.lg("warm_load_nav_start_web")){var a=dk();a[""]&&delete a[""];var b={timerName:"",info:{},tick:{}};ck().push(b);a[""]=b;Ck("n");sk();Tj(!1);g.Pf("TIMING_AFT_KEYS",[]);rk("yt_lt","warm");g.Pf("TIMING_ACTION","");g.Pf("TIMING_WAIT",[]);delete g.F("TIMING_INFO",{}).yt_lt;uk("n")}else Ck("n"),sk(),uk("n");a="nr";Oj.mark&&(g.Ta(a,"mark_")||(a="mark_"+a),Oj.mark(a));dl(Sba);Wi();g.gg("navigate")};
hl=function(a){a=a.detail.part||a.detail.partial;g.tk("nc"+cl);++cl;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.tk("bc");else{var b=1==al;al=2;b?(dl(Tba),fl()):dl(Uba);if(b=a&&a.data&&a.data.swfcfg)gl(a.timing,b.args),zk("cfg")||g.tk("cfg"),Tk(b)}};
il=function(){g.tk("np"+bl);++bl};
jl=function(a){a=a.detail.response;var b=1==al;al=3;b&&(dl(Vba),fl());if(b=a.data&&a.data.swfcfg)gl(a.timing,b.args),zk("cfg")||g.tk("cfg"),Tk(b)};
nl=function(a){g.tk("nd");a=a.detail.response;g.kl=a.cacheKey;a=a.timing;var b=window._spf_state;g.ll.navigationCount=b&&b["nav-counter"]||0;g.lg("warm_load_nav_start_web")?g.tk("srt",a.responseStart):(uk("ne",a.responseStart),Ak("srt",Math.max(0,a.responseStart-a.navigationStart)));Ak("yt_lt",a.spfCached?"hot":"warm");g.tk("pfs",a.fetchStart);g.tk("pfrs",a.responseStart);"redirectStart"in a&&vk(a);dl(ml);document.getElementById("content").style.height="";Vk();al=0};
ol=function(a){var b=a.detail.url,c=a.detail.err;c&&(a=a.detail.xhr,a&&!a.responseText||a&&a.responseText&&a.responseText.startsWith("<")||(c.params=b,g.Vf(c)))};
pl=function(a){g.Nk(g.qd({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Xba=function(){Wba();window.yt_spf_loaded_history=!1};
Yba=function(){};
fl=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Yk();a=g.F("PREVIOUS_ACTION");for(var b in g.Of)delete g.Of[b];g.Pf("PREVIOUS_ACTION",a);g.Pf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.r("ytplayer.config",null,void 0);(b=g.Sk())&&b.stopVideo&&(b.stopVideo(),b.getLastError()&&(b=document.getElementById("movie_player"))&&b.stopVideo&&b.stopVideo());Rk()};
dl=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.Wg(ql);ql=g.Vg(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Yf(rl);rl=g.Wf(function(){b.className=e},c)},0)};
Wba=function(){var a=ml[0]+50;g.Yf(rl);rl=g.Wf(function(){var b=document.getElementById("progress");b&&b.parentNode.removeChild(b)},a)};
gl=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Nba(b));g.F("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Nk(g.qd(c)))};
tl=function(){return"granted"!=Notification.permission?Promise.resolve():sl().then(function(a){return a?a.pushManager.getSubscription().then(function(b){if(b)return Promise.resolve();b={userVisibleOnly:!0};g.lg("service_worker_subscribe_with_vapid_key")&&(b.applicationServerKey=laa());return a.pushManager.subscribe(b).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
vl=function(){ul({type:"notifications_register",data:g.F("ID_TOKEN")})};
sl=function(){var a=ng("service_worker_scope");try{return navigator.serviceWorker.getRegistration(a)}catch(b){return Promise.reject(b)}};
Zba=function(){return sl().then(wl)["catch"](function(){return!1})};
wl=function(a){return!(!a||!a.pushManager)};
ul=function(a){return sl().then(function(b){if(!b||!b.active)return Promise.reject("serviceworker.postMessage");b.active.postMessage(a);return Promise.resolve()})};
$ba=function(){if(!g.F("LOGGED_IN",void 0))return Promise.resolve(!1);var a=ng("service_worker_push_force_notification_prompt_tag");return a?g.Mj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
dca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?Zba():Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=tl().then(function(){return ul({type:"notifications_check_registration",data:g.F("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return aca(a)}).then(function(c){if(c)return bca(),cca().then(function(){})})["catch"](function(){})})};
aca=function(a){return g.F("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.F("LOGGED_IN",void 0)&&(void 0===a?0:a)?$ba().then(function(b){if(b)return!0;b=[eca(),fca()];g.F("LOGGED_IN",void 0)||b.push(gca());return Promise.all(b).then(function(c){return c.every(function(d){return d})})}):Promise.resolve(!1)};
gca=function(){var a=g.mg("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.Mj("WatchCount").then(function(b){return b>=a})};
cca=function(){var a=arguments;g.lg("service_worker_push_prompt_modal_enable")&&hca();return Notification.requestPermission().then(function(b){xl();var c=document.getElementById("ticker");c&&(c.className=c.classList.remove("show"));if("granted"==b)return tl().then(function(){g.Lj("NotificationsDisabled",!1);vl();return Promise.resolve(!0)});
"denied"==b&&vl();return Promise.resolve(!1)})["catch"](function(){xl();
return Promise.reject.apply(Promise,g.ea(a))})};
bca=function(){g.Mj("PromptCount").then(function(a){return g.Lj("PromptCount",a+1)}).then(function(){return g.Lj("PromptTime",(0,g.Lc)())}).then(function(){var a=ng("service_worker_push_force_notification_prompt_tag");
if(a)return g.Mj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.Lj("PromptTags",JSON.stringify(c))})})};
eca=function(){return-1==g.mg("service_worker_push_prompt_cap")?Promise.resolve(!0):g.Mj("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.mg("service_worker_push_prompt_cap"))})};
fca=function(){var a=g.mg("service_worker_push_prompt_delay_microseconds");return a?g.Mj("PromptTime").then(function(b){return Promise.resolve((0,g.Lc)()-a>(b||0))}):Promise.resolve(!0)};
ica=function(){yl||xl()};
zl=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
hca=function(){var a=g.z("yt-push-prompt-modal-bg");yl=g.lg("service_worker_push_prompt_modal_ignore_click");a?zl(a):(a=g.Zc("div",{id:"yt-push-prompt-modal-bg"}),zl(a),document.body.appendChild(a),g.rh(document,"click",ica))};
xl=function(){var a=g.z("yt-push-prompt-modal-bg");a&&g.dd(a)};
jca=function(a){return wl(a)?dca():Promise.resolve()};
lca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(kca)})};
nca=function(){var a="/sw.js",b=g.F("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);try{var c=Al(a)["catch"](function(){return new Promise(function(){})});
g.lg("service_worker_push_enabled")&&c.then(mca).then(jca)}catch(d){if("SecurityError"!=d.name)throw d;}};
mca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
kca=function(a){a&&Al("/sw.js?0",a.scope)};
Al=function(a,b){return navigator.serviceWorker.register(a,{scope:b||ng("service_worker_scope")||"/"})};
Bl=function(){g.Xi.call(this,"www/base");this.D=0};
Cl=function(a){(a=a.detail.name)&&$i(a)};
g.aa=[];fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)Dl=Object.setPrototypeOf;else{var El;a:{var oca={a:!0},Fl={};try{Fl.__proto__=oca;El=Fl.a;break a}catch(a){}El=!1}Dl=El?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=Dl,ia=aaa(this),ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ka("Promise",function(a){function b(k){this.F=0;this.D=void 0;this.C=[];var l=this.H();try{k(l.resolve,l.reject)}catch(m){l.reject(m)}}
function c(){this.C=null}
function d(k){return k instanceof b?k:new b(function(l){l(k)})}
if(a)return a;c.prototype.F=function(k){if(null==this.C){this.C=[];var l=this;this.D(function(){l.H()})}this.C.push(k)};
var e=ia.setTimeout;c.prototype.D=function(k){e(k,0)};
c.prototype.H=function(){for(;this.C&&this.C.length;){var k=this.C;this.C=[];for(var l=0;l<k.length;++l){var m=k[l];k[l]=null;try{m()}catch(q){this.G(q)}}}this.C=null};
c.prototype.G=function(k){this.D(function(){throw k;})};
b.prototype.H=function(){function k(q){return function(t){m||(m=!0,q.call(l,t))}}
var l=this,m=!1;return{resolve:k(this.N),reject:k(this.G)}};
b.prototype.N=function(k){if(k===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof b)this.T(k);else{a:switch(typeof k){case "object":var l=null!=k;break a;case "function":l=!0;break a;default:l=!1}l?this.Y(k):this.L(k)}};
b.prototype.Y=function(k){var l=void 0;try{l=k.then}catch(m){this.G(m);return}"function"==typeof l?this.la(l,k):this.L(k)};
b.prototype.G=function(k){this.M(2,k)};
b.prototype.L=function(k){this.M(1,k)};
b.prototype.M=function(k,l){if(0!=this.F)throw Error("Cannot settle("+k+", "+l+"): Promise already settled in state"+this.F);this.F=k;this.D=l;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var k=0;k<this.C.length;++k)f.F(this.C[k]);this.C=null}};
var f=new c;b.prototype.T=function(k){var l=this.H();k.Qh(l.resolve,l.reject)};
b.prototype.la=function(k,l){var m=this.H();try{k.call(l,m.resolve,m.reject)}catch(q){m.reject(q)}};
b.prototype.then=function(k,l){function m(A,G){return"function"==typeof A?function(O){try{q(A(O))}catch(T){t(T)}}:G}
var q,t,y=new b(function(A,G){q=A;t=G});
this.Qh(m(k,q),m(l,t));return y};
b.prototype["catch"]=function(k){return this.then(void 0,k)};
b.prototype.Qh=function(k,l){function m(){switch(q.F){case 1:k(q.D);break;case 2:l(q.D);break;default:throw Error("Unexpected state: "+q.F);}}
var q=this;null==this.C?f.F(m):this.C.push(m)};
b.resolve=d;b.reject=function(k){return new b(function(l,m){m(k)})};
b.race=function(k){return new b(function(l,m){for(var q=g.da(k),t=q.next();!t.done;t=q.next())d(t.value).Qh(l,m)})};
b.all=function(k){var l=g.da(k),m=l.next();return m.done?d([]):new b(function(q,t){function y(O){return function(T){A[O]=T;G--;0==G&&q(A)}}
var A=[],G=0;do A.push(void 0),G++,d(m.value).Qh(y(A.length-1),t),m=l.next();while(!m.done)})};
return b});
ma.prototype.toString=function(){return this.C};
var baa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
ka("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ka("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&k<e;)if(d[k++]!=b[l++])return!1;return l>=f}});
ka("String.prototype.repeat",function(a){return a?a:function(b){var c=qa(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
ka("Array.prototype.keys",function(a){return a?a:function(){return sa(this,function(b){return b})}});
ka("Array.prototype.values",function(a){return a?a:function(){return sa(this,function(b,c){return c})}});
var pca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||pca});
ka("WeakMap",function(a){function b(m){this.pb=(l+=Math.random()+1).toString();if(m){m=g.da(m);for(var q;!(q=m.next()).done;)q=q.value,this.set(q[0],q[1])}}
function c(){}
function d(m){var q=typeof m;return"object"===q&&null!==m||"function"===q}
function e(m){if(!ta(m,k)){var q=new c;ja(m,k,{value:q})}}
function f(m){var q=Object[m];q&&(Object[m]=function(t){if(t instanceof c)return t;e(t);return q(t)})}
if(function(){if(!a||!Object.seal)return!1;try{var m=Object.seal({}),q=Object.seal({}),t=new a([[m,2],[q,3]]);if(2!=t.get(m)||3!=t.get(q))return!1;t["delete"](m);t.set(q,4);return!t.has(m)&&4==t.get(q)}catch(y){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var l=0;b.prototype.set=function(m,q){if(!d(m))throw Error("Invalid WeakMap key");e(m);if(!ta(m,k))throw Error("WeakMap key fail: "+m);m[k][this.pb]=q;return this};
b.prototype.get=function(m){return d(m)&&ta(m,k)?m[k][this.pb]:void 0};
b.prototype.has=function(m){return d(m)&&ta(m,k)&&ta(m[k],this.pb)};
b.prototype["delete"]=function(m){return d(m)&&ta(m,k)&&ta(m[k],this.pb)?delete m[k][this.pb]:!1};
return b});
ka("Map",function(a){function b(){var l={};return l.previous=l.next=l.head=l}
function c(l,m){var q=l.F;return na(function(){if(q){for(;q.head!=l.F;)q=q.previous;for(;q.next!=q.head;)return q=q.next,{done:!1,value:m(q)};q=null}return{done:!0,value:void 0}})}
function d(l,m){var q=m&&typeof m;"object"==q||"function"==q?f.has(m)?q=f.get(m):(q=""+ ++k,f.set(m,q)):q="p_"+m;var t=l.C[q];if(t&&ta(l.C,q))for(var y=0;y<t.length;y++){var A=t[y];if(m!==m&&A.key!==A.key||m===A.key)return{id:q,list:t,index:y,lc:A}}return{id:q,list:t,index:-1,lc:void 0}}
function e(l){this.C={};this.F=b();this.size=0;if(l){l=g.da(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var l=Object.seal({x:4}),m=new a(g.da([[l,"s"]]));if("s"!=m.get(l)||1!=m.size||m.get({x:4})||m.set({x:4},"t")!=m||2!=m.size)return!1;var q=m.entries(),t=q.next();if(t.done||t.value[0]!=l||"s"!=t.value[1])return!1;t=q.next();return t.done||4!=t.value[0].x||"t"!=t.value[1]||!q.next().done?!1:!0}catch(y){return!1}}())return a;
g.pa();var f=new WeakMap;e.prototype.set=function(l,m){l=0===l?0:l;var q=d(this,l);q.list||(q.list=this.C[q.id]=[]);q.lc?q.lc.value=m:(q.lc={next:this.F,previous:this.F.previous,head:this.F,key:l,value:m},q.list.push(q.lc),this.F.previous.next=q.lc,this.F.previous=q.lc,this.size++);return this};
e.prototype["delete"]=function(l){l=d(this,l);return l.lc&&l.list?(l.list.splice(l.index,1),l.list.length||delete this.C[l.id],l.lc.previous.next=l.lc.next,l.lc.next.previous=l.lc.previous,l.lc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(l){return!!d(this,l).lc};
e.prototype.get=function(l){return(l=d(this,l).lc)&&l.value};
e.prototype.entries=function(){return c(this,function(l){return[l.key,l.value]})};
e.prototype.keys=function(){return c(this,function(l){return l.key})};
e.prototype.values=function(){return c(this,function(l){return l.value})};
e.prototype.forEach=function(l,m){for(var q=this.entries(),t;!(t=q.next()).done;)t=t.value,l.call(m,t[1],t[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var k=0;return e});
ka("Set",function(a){function b(c){this.C=new Map;if(c){c=g.da(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(g.da([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
g.pa();b.prototype.add=function(c){c=0===c?0:c;this.C.set(c,c);this.size=this.C.size;return this};
b.prototype["delete"]=function(c){c=this.C["delete"](c);this.size=this.C.size;return c};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(c){return this.C.has(c)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.C.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ka("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
ka("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var k=d[f];if(k===b||Object.is(k,b))return!0}return!1}});
ka("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==qa(this,b,"includes").indexOf(b,c||0)}});
var qca=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ka("Reflect.construct",function(){return qca});
ka("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var k=0;!(f=b.next()).done;)e.push(c.call(d,f.value,k++))}else for(f=b.length,k=0;k<f;k++)e.push(c.call(d,b[k],k));return e}});
ka("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push([d,b[d]]);return c}});
ka("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
ka("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
ka("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
ka("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push(b[d]);return c}});
g.Gl=g.Gl||{};g.p=this||self;caa=/^[\w+/_-]+[=]{0,2}$/;va=null;Fa="closure_uid_"+(1E9*Math.random()>>>0);daa=0;g.Lc=Date.now||function(){return+new Date};g.x(g.Ia,Error);g.Ia.prototype.name="CustomError";g.La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.rca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Dk=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k="string"===typeof a?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.Hl=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Nd=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.v)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.B)(a,function(f,k){e=b.call(d,e,f,k,a)});
return e};
g.Il=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Jl=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};g.sca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.tca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Kl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");var Wa,Xa,Ya,Za,$a,ab,gaa;g.db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
Wa=/&/g;Xa=/</g;Ya=/>/g;Za=/"/g;$a=/'/g;ab=/\x00/g;gaa=/[\x00&<>"']/;a:{var Ll=g.p.navigator;if(Ll){var Ml=Ll.userAgent;if(Ml){g.gb=Ml;break a}}g.gb=""};var rb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.Ab.prototype.Md=!0;g.Ab.prototype.Uc=function(){return this.C};
var zb={},yb={},yaa=g.Cb("");var Eb;g.Fb.prototype.Md=!0;g.Fb.prototype.Uc=function(){return this.F.toString()};
g.Fb.prototype.Sk=!0;g.Fb.prototype.C=function(){return 1};
Eb={};g.Db={};g.Kb.prototype.Md=!0;g.Kb.prototype.Uc=function(){return this.F.toString()};
g.Kb.prototype.Sk=!0;g.Kb.prototype.C=function(){return 1};
var iaa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,haa=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,Ob=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Jb={},Ib={};g.Sb.prototype.Md=!0;g.Rb={};g.Sb.prototype.Uc=function(){return this.C};
g.Nl=g.Tb("");g.Ol=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.Pl=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Vb.prototype.Md=!0;g.Ub={};g.Vb.prototype.Uc=function(){return this.C};
g.uca=g.Wb("");g.Yb.prototype.Sk=!0;g.Yb.prototype.C=function(){return this.D};
g.Yb.prototype.Md=!0;g.Yb.prototype.Uc=function(){return this.F.toString()};
var Xb={};g.cc("<!DOCTYPE html>",0);g.ue=g.cc("",0);g.Ql=g.cc("<br>",0);g.vca=g.Sa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.Zb(g.ue);return!b.parentElement});g.jc=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.oc[" "]=g.xa;var Yl,jaa,bm;g.Rl=g.hb("Opera");g.Df=g.tb();g.Sl=g.hb("Edge");g.Tl=g.Sl||g.Df;g.Ul=g.hb("Gecko")&&!(g.cb(g.gb.toLowerCase(),"webkit")&&!g.hb("Edge"))&&!(g.hb("Trident")||g.hb("MSIE"))&&!g.hb("Edge");g.Vl=g.cb(g.gb.toLowerCase(),"webkit")&&!g.hb("Edge");g.Wl=g.hb("Macintosh");g.Xl=g.hb("Windows");g.wca=g.hb("Linux")||g.hb("CrOS");g.xca=g.hb("Android");g.yca=mc();g.zca=g.hb("iPad");g.Aca=g.hb("iPod");g.Bca=g.nc();
a:{var Zl="",$l=function(){var a=g.gb;if(g.Ul)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Sl)return/Edge\/([\d\.]+)/.exec(a);if(g.Df)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Vl)return/WebKit\/(\S+)/.exec(a);if(g.Rl)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
$l&&(Zl=$l?$l[1]:"");if(g.Df){var am=qc();if(null!=am&&am>parseFloat(Zl)){Yl=String(am);break a}}Yl=Zl}g.rc=Yl;jaa={};bm=g.p.document&&g.Df?qc():void 0;g.tc=bm;g.cm=ub();g.dm=mc()||g.hb("iPod");g.em=g.hb("iPad");g.Cca=g.xb();g.fm=vb();g.gm=g.wb()&&!g.nc();var wc={},zc=null;g.Ac.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.Ac.prototype[Symbol.iterator]=function(){return this});g.Fc="function"==typeof Uint8Array;g.Bc.prototype.Zc=function(){Cc(this);return this.ec};
g.Bc.prototype.F=g.Fc?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return xc(this)};
try{return JSON.stringify(this.ec&&this.Zc(),Dc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.Zc(),Dc)};
g.Bc.prototype.toString=function(){Cc(this);return this.ec.toString()};
g.Bc.prototype.clone=function(){return new this.constructor(Ec(this.Zc()))};g.hm=document;g.Dd=window;g.h=g.Gc.prototype;g.h.isEnabled=function(){return navigator.cookieEnabled};
g.h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.kR;d=c.secure||!1;var f=c.domain||void 0;var k=c.path||void 0;var l=c.xl}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===l&&(l=-1);c=f?";domain="+f:"";k=k?";path="+k:"";d=d?";secure":"";l=0>l?"":0==l?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Lc)()+1E3*l)).toUTCString();this.C.cookie=a+"="+b+c+k+l+d+(null!=e?";samesite="+
e:"")};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.db)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{xl:0,path:b,domain:c});return d};
g.h.yc=function(){return g.Hc(this).keys};
g.h.Db=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Gb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.ud=g.ba(3);g.h.clear=function(){for(var a=g.Hc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.di=new g.Gc("undefined"==typeof document?null:document);g.im={Ha:["BC","AD"],La:["Before Christ","Anno Domini"],Ma:"JFMAMJJASOND".split(""),Na:"JFMAMJJASOND".split(""),wa:"January February March April May June July August September October November December".split(" "),sa:"January February March April May June July August September October November December".split(" "),xa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ca:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ea:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Ka:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ba:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Da:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Pa:"SMTWTFS".split(""),Oa:"SMTWTFS".split(""),Ja:["Q1","Q2","Q3","Q4"],Ia:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Aa:["AM","PM"],ra:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],za:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Ga:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],ua:6,Fa:[5,6],va:5};
g.jm=g.im;g.jm=g.im;g.h=g.Mc.prototype;g.h.xe=g.jm.ua;g.h.Mg=g.jm.va;g.h.clone=function(){var a=new g.Mc(this.date);a.xe=this.xe;a.Mg=this.Mg;return a};
g.h.getFullYear=function(){return this.date.getFullYear()};
g.h.getYear=function(){return this.getFullYear()};
g.h.getMonth=function(){return this.date.getMonth()};
g.h.getDate=function(){return this.date.getDate()};
g.h.getTime=function(){return this.date.getTime()};
g.h.getDay=function(){return this.date.getDay()};
g.h.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.h.getUTCMonth=function(){return this.date.getUTCMonth()};
g.h.getUTCDate=function(){return this.date.getUTCDate()};
g.h.getUTCDay=function(){return this.date.getDay()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.h.setFullYear=function(a){this.date.setFullYear(a)};
g.h.setYear=function(a){this.setFullYear(a)};
g.h.setMonth=function(a){this.date.setMonth(a)};
g.h.setDate=function(a){this.date.setDate(a)};
g.h.setTime=function(a){this.date.setTime(a)};
g.h.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
g.h.setUTCMonth=function(a){this.date.setUTCMonth(a)};
g.h.setUTCDate=function(a){this.date.setUTCDate(a)};
g.h.add=function(a){if(a.C||a.months){var b=this.getMonth()+a.months+12*a.C,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);var d=Math.min(g.Ic(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),Kc(this,a.getDate()))};
g.h.ce=function(a){return[this.getFullYear(),g.kc(this.getMonth()+1,2),g.kc(this.getDate(),2)].join(a?"-":"")+""};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){return this.ce()};
g.h.valueOf=function(){return this.date.valueOf()};var maa;maa=!g.Df||g.uc(9);g.Dca=!g.Ul&&!g.Df||g.Df&&g.uc(9)||g.Ul&&g.sc("1.9.1");g.km=g.Df&&!g.sc("9");g.Eca=g.Df||g.Rl||g.Vl;g.h=g.Nc.prototype;g.h.clone=function(){return new g.Nc(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Nc&&g.Oc(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.Qc.prototype;g.h.clone=function(){return new g.Qc(this.width,this.height)};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!(this.width*this.height)};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Tc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.id=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.td=/#|$/;var Fca={JJ:"allow-forms",KJ:"allow-modals",LJ:"allow-orientation-lock",MJ:"allow-pointer-lock",NJ:"allow-popups",OJ:"allow-popups-to-escape-sandbox",PJ:"allow-presentation",QJ:"allow-same-origin",RJ:"allow-scripts",SJ:"allow-top-navigation",TJ:"allow-top-navigation-by-user-activation"},oaa=g.Sa(function(){return g.xd(Fca)});g.ya(g.yd);g.h=g.zd.prototype;g.h.clone=function(){return new g.zd(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Nc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.lm=g.Ul?"MozUserSelect":g.Vl||g.Sl?"WebkitUserSelect":null;g.mm=!!window.google_async_iframe_id;g.nm=g.mm&&window.parent||window;g.Hb(g.Cb("//web.archive.org/web/20200301000313/https://fonts.googleapis.com/css"));g.xg=(new Date).getTime();Md.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
Md.prototype.get=function(a){return!!this.C[a]};g.C.prototype.Rc=!1;g.C.prototype.qb=function(){return this.Rc};
g.C.prototype.dispose=function(){this.Rc||(this.Rc=!0,this.X())};
g.C.prototype.X=function(){if(this.wf)for(;this.wf.length;)this.wf.shift()()};g.Td.prototype.stopPropagation=function(){this.F=!0};
g.Td.prototype.preventDefault=function(){this.defaultPrevented=!0};var ie,Hca,waa;g.Gca=!g.Df||g.uc(9);ie=!g.Df||g.uc(9);Hca=g.Df&&!g.sc("9");waa=function(){if(!g.p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.p.addEventListener("test",g.xa,b),g.p.removeEventListener("test",g.xa,b)}catch(c){}return a}();g.om=g.Vl?"webkitTransitionEnd":g.Rl?"otransitionend":"transitionend";g.x(g.Ud,g.Td);var Ica={2:"touch",3:"pen",4:"mouse"};
g.Ud.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Ul&&(g.pc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Wl?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ica[a.pointerType]||"";this.state=
a.state;this.zc=a;a.defaultPrevented&&this.preventDefault()};
g.Ud.prototype.stopPropagation=function(){g.Ud.V.stopPropagation.call(this);this.zc.stopPropagation?this.zc.stopPropagation():this.zc.cancelBubble=!0};
g.Ud.prototype.preventDefault=function(){g.Ud.V.preventDefault.call(this);var a=this.zc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Hca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Vd="closure_listenable_"+(1E6*Math.random()|0),taa=0;g.h=g.Yd.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=$d(a,b,d,e);-1<k?(b=a[k],c||(b.Ph=!1)):(b=new uaa(b,this.src,f,!!d,e),b.Ph=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=$d(e,b,c,d);return-1<b?(Xd(e[b]),g.Oa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Xd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.Vf=g.ba(5);g.h.We=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=$d(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return g.jb(this.listeners,function(f){for(var k=0;k<f.length;++k)if(!(c&&f[k].type!=d||e&&f[k].capture!=b))return!0;return!1})};var fe="closure_lm_"+(1E6*Math.random()|0),le={},he=0,oe="__closure_events_fn_"+(1E9*Math.random()>>>0);g.x(g.pe,g.C);g.pe.prototype[Vd]=!0;g.h=g.pe.prototype;g.h.ni=function(){return this.Pl};
g.h.sh=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.be(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.je(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.ni();if(b){var c=[];for(var d=1;b;b=b.ni())c.push(b),++d}b=this.Et;d=a.type||a;if("string"===typeof a)a=new g.Td(a,b);else if(a instanceof g.Td)a.target=a.target||b;else{var e=a;a=new g.Td(d,b);g.sb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=qe(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=qe(k,d,!0,a)&&e,a.F||(e=qe(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=qe(k,d,!1,a)&&e;return e};
g.h.X=function(){g.pe.V.X.call(this);this.removeAllListeners();this.Pl=null};
g.h.O=function(a,b,c,d){return this.vd.add(String(a),b,!1,c,d)};
g.h.Be=function(a,b,c,d){return this.vd.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.vd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.vd?this.vd.removeAll(a):0};
g.h.Vf=g.ba(4);g.h.We=function(a,b,c,d){return this.vd.We(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.vd.hasListener(void 0!==a?String(a):void 0,b)};re.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var Ce;var De=new re(function(){return new we},function(a){a.reset()});
ve.prototype.add=function(a,b){var c=De.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
ve.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
we.prototype.set=function(a,b){this.mc=a;this.scope=b;this.next=null};
we.prototype.reset=function(){this.next=this.scope=this.mc=null};var xe,ye=!1,ze=new ve;Ie.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var Je=new re(function(){return new Ie},function(a){a.reset()});
g.He.prototype.then=function(a,b,c){return Oe(this,g.Da(a)?a:null,g.Da(b)?b:null,c)};
g.Ee(g.He);g.He.prototype.cancel=function(a){if(0==this.C){var b=new g.Ve(a);Ae(function(){Qe(this,b)},this)}};
g.He.prototype.Y=function(a){this.C=0;g.Ge(this,2,a)};
g.He.prototype.N=function(a){this.C=0;g.Ge(this,3,a)};
g.He.prototype.J=function(){for(var a;a=Re(this);)Se(this,a,this.C,this.M);this.L=!1};
var Xe=te;g.x(g.Ve,g.Ia);g.Ve.prototype.name="cancel";g.x(g.$e,g.C);g.h=g.$e.prototype;g.h.pb=0;g.h.X=function(){g.$e.V.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.pb=g.Ye(this.Pb,void 0!==a?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Ze(this.pb);this.pb=0};
g.h.isActive=function(){return 0!=this.pb};
g.h.yk=function(){this.pb=0;this.C&&this.C.call(this.F)};g.x(af,Daa);af.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
af.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)bf(this,a,d),d+=this.F;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){bf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){bf(this,e);f=0;break}}this.D=f;this.H+=b}};
af.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;bf(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.ff="StopIteration"in g.p?g.p.StopIteration:{message:"StopIteration",stack:""};g.ef.prototype.next=function(){throw g.ff;};
g.ef.prototype.bd=function(){return this};g.h=g.kf.prototype;g.h.Gb=function(){return this.D};
g.h.Db=g.ba(0);g.h.yc=function(){g.mf(this);return this.C.concat()};
g.h.ud=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Gb())return!1;var c=b||Faa;g.mf(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Je=this.D=this.C.length=0};
g.h.remove=function(a){return g.lf(this.F,a)?(delete this.F[a],this.D--,this.Je++,this.C.length>2*this.D&&g.mf(this),!0):!1};
g.h.get=function(a,b){return g.lf(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.lf(this.F,a)||(this.D++,this.C.push(a),this.Je++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.yc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.kf(this)};
g.h.bd=function(a){g.mf(this);var b=0,c=this.Je,d=this,e=new g.ef;e.next=function(){if(c!=d.Je)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.ff;var f=d.C[b++];return a?f:d.F[f]};
return e};var qf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Haa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.x(g.rf,g.C);g.h=g.rf.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.qd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.xa):(c&&g.Pa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Iaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.qd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.B)(b,this.qd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Gb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Gb(b);return a};
g.h.X=function(){g.rf.V.X.call(this);this.clear();this.D.length=0};g.tf.prototype.set=function(a,b){void 0===b?this.C.remove(a):this.C.set(a,g.of(b))};
g.tf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.tf.prototype.remove=function(a){this.C.remove(a)};g.x(uf,g.tf);uf.prototype.set=function(a,b){uf.V.set.call(this,a,xf(b))};
uf.prototype.F=function(a){a=uf.V.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
uf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.x(g.yf,uf);g.yf.prototype.set=function(a,b,c){if(b=xf(b)){if(c){if(c<(0,g.Lc)()){g.yf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Lc)()}g.yf.V.set.call(this,a,b)};
g.yf.prototype.F=function(a,b){var c=g.yf.V.F.call(this,a);if(c)if(!b&&g.zf(c))g.yf.prototype.remove.call(this,a);else return c};g.x(Af,Jaa);Af.prototype.Gb=function(){var a=0;g.hf(this.bd(!0),function(){a++});
return a};
Af.prototype.clear=function(){var a=Eaa(this.bd(!0)),b=this;(0,g.B)(a,function(c){b.remove(c)})};g.x(g.Bf,Af);g.h=g.Bf.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Gb=function(){return this.C.length};
g.h.bd=function(a){var b=0,c=this.C,d=new g.ef;d.next=function(){if(b>=c.length)throw g.ff;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.x(g.Cf,g.Bf);g.x(Ff,Af);var Kaa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ef=null;g.h=Ff.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(Gf(a),b);Hf(this)};
g.h.get=function(a){a=this.C.getAttribute(Gf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(Gf(a));Hf(this)};
g.h.Gb=function(){return If(this).attributes.length};
g.h.bd=function(a){var b=0,c=If(this).attributes,d=new g.ef;d.next=function(){if(b>=c.length)throw g.ff;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){for(var a=If(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Hf(this)};g.x(Jf,Af);Jf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
Jf.prototype.get=function(a){return this.F.get(this.C+a)};
Jf.prototype.remove=function(a){this.F.remove(this.C+a)};
Jf.prototype.bd=function(a){var b=this.F.bd(!0),c=this,d=new g.ef;d.next=function(){for(var e=b.next();e.substr(0,c.C.length)!=c.C;)e=b.next();return a?e.substr(c.C.length):c.F.get(e)};
return d};var Mf={};g.Of=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.r("yt.config_",g.Of,void 0);var Laa=[];var Jca=g.u("ytPubsubPubsubInstance")||new g.rf;g.rf.prototype.subscribe=g.rf.prototype.subscribe;g.rf.prototype.unsubscribeByKey=g.rf.prototype.qd;g.rf.prototype.publish=g.rf.prototype.oa;g.rf.prototype.clear=g.rf.prototype.clear;g.r("ytPubsubPubsubInstance",Jca,void 0);var ag=g.u("ytPubsubPubsubSubscribedKeys")||{};g.r("ytPubsubPubsubSubscribedKeys",ag,void 0);var cg=g.u("ytPubsubPubsubTopicToKeys")||{};g.r("ytPubsubPubsubTopicToKeys",cg,void 0);var bg=g.u("ytPubsubPubsubIsSynchronous")||{};
g.r("ytPubsubPubsubIsSynchronous",bg,void 0);var Oaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Paa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.tg=new function(){var a=window.document;this.C=window;this.F=a};
g.r("yt.ads_.signals_.getAdSignalsString",function(a){return g.pg(wg(a))},void 0);(0,g.Lc)();var yg=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Bg,Saa,Gg;Bg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Saa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Gg=!1;g.pm=Hg;g.n(g.Lg,Error);g.qm=new Set;g.Og.prototype.initialize=function(a,b,c,d){var e=this;b?(this.F=!0,g.ig(b,function(){e.F=!1;window.botguard?Pg(e,c,d):(g.jg(b),g.Ng(new g.Lg("Unable to load Botguard","from "+b)))})):a&&(eval(a),window.botguard?Pg(this,c,d):g.Ng(Error("Unable to load Botguard from JS")))};
g.Og.prototype.Nd=function(){return!!this.C};
g.Og.prototype.dispose=function(){this.C=null};g.n(Yg,Waa);Yg.prototype.start=function(){var a=g.u("yt.scheduler.instance.start");a&&a()};
Yg.prototype.pause=function(){var a=g.u("yt.scheduler.instance.pause");a&&a()};
g.ya(Yg);Yg.getInstance();var rm;rm=window;g.Gh=rm.ytcsi&&rm.ytcsi.now?rm.ytcsi.now:rm.performance&&rm.performance.timing&&rm.performance.now?function(){return rm.performance.timing.navigationStart+rm.performance.now()}:function(){return(new Date).getTime()};g.$g=new g.Og;ah.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.Fe(a)?a:g.ch(a)):2===this.F&&b?(a=b.call(c,this.C),g.Fe(a)?a:g.bh(a)):this};
ah.prototype.getValue=function(){return this.C};
g.Ee(ah);var Kca=0,$aa=g.Vl?"webkit":g.Ul?"moz":g.Df?"ms":g.Rl?"o":"",dh=g.u("ytDomDomGetNextId")||function(){return++Kca};
g.r("ytDomDomGetNextId",dh,void 0);var aba={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.gh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.gh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.gh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mh=g.u("ytEventsEventsListeners")||{};g.r("ytEventsEventsListeners",mh,void 0);var oh=g.u("ytEventsEventsCounter")||{count:0};g.r("ytEventsEventsCounter",oh,void 0);var ph=g.Sa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.sm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.tm="Microsoft Internet Explorer"==navigator.appName;g.x(g.th,g.C);g.th.prototype.Y=function(a){this.C=new g.Nc(g.ih(a),g.jh(a))};
g.th.prototype.M=function(){if(this.C){var a=g.sm();if(0!=this.D){var b=g.Pc(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.Pb();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.th.prototype.X=function(){g.Zf(this.N);g.qh(this.J)};g.n(uh,g.C);uh.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
uh.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.callback)}g.C.prototype.X.call(this)};vh.prototype.clone=function(){var a=new vh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.za(c)?a[b]=g.pb(c):a[b]=c}return a};var dba,Oh,Ph,Qh,eba,Hh,fba,Ah,Bh;dba=g.mg("initial_gel_batch_timeout",1E3);Oh=Math.pow(2,16)-1;g.Zh=10;Ph=null;Qh=0;eba={log_event:"events",log_interaction:"interactions"};Hh=Object.create(null);Hh.log_event="GENERIC_EVENT_LOGGING";Hh.log_interaction="INTERACTION_LOGGING";fba=new Set(["log_event"]);Ah={};g.xh=0;g.yh=0;g.Yh=0;Bh=!0;g.zh=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.r("ytLoggingTransportLogPayloadsQueue_",g.zh,void 0);var Nh=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};
g.r("ytLoggingTransportTokensToCttTargetIds_",Nh,void 0);var Eh=g.u("ytLoggingTransportDispatchedStats_")||{};g.r("ytLoggingTransportDispatchedStats_",Eh,void 0);var Ih=g.u("ytLoggingTransportCapturedTime_")||{};g.r("ytytLoggingTransportCapturedTime_",Ih,void 0);var Vh={};var Xh=g.u("ytLoggingGelSequenceIdObj_")||{};g.r("ytLoggingGelSequenceIdObj_",Xh,void 0);g.gi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.Lc)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.of(b))}catch(f){return}else e=escape(b);g.ei(a,e,c,this.F)};
g.gi.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.di.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.gi.prototype.remove=function(a){this.C&&this.C.remove(a);g.fi(a,"/",this.F)};var hi=new g.gi("yt.innertube");g.ki.prototype.isReady=function(){!this.C&&ai()&&(this.C=g.Mh());return!!this.C};g.ni.prototype.toString=function(){return JSON.stringify(g.oi(this))};var pi=(0,g.Lc)().toString();var ti=g.u("ytLoggingTimeDocumentNonce_")||qi(),ui,ri;g.r("ytLoggingTimeDocumentNonce_",ti,void 0);ui=0;g.si=null;ri=null;g.r("yt_logging_screen.getRootVeType",zi,void 0);g.r("yt_logging_screen.getCurrentCsn",g.Ci,void 0);g.r("yt_logging_screen.getCttAuthInfo",g.Di,void 0);g.r("yt_logging_screen.setCurrentScreen",g.Ei,void 0);g.Gi.prototype.toString=function(){return this.topic};var Lca=g.u("ytPubsub2Pubsub2Instance")||new g.rf;g.rf.prototype.subscribe=g.rf.prototype.subscribe;g.rf.prototype.unsubscribeByKey=g.rf.prototype.qd;g.rf.prototype.publish=g.rf.prototype.oa;g.rf.prototype.clear=g.rf.prototype.clear;g.r("ytPubsub2Pubsub2Instance",Lca,void 0);var Ji=g.u("ytPubsub2Pubsub2SubscribedKeys")||{};g.r("ytPubsub2Pubsub2SubscribedKeys",Ji,void 0);var Oi=g.u("ytPubsub2Pubsub2TopicToKeys")||{};g.r("ytPubsub2Pubsub2TopicToKeys",Oi,void 0);
var Ki=g.u("ytPubsub2Pubsub2IsAsync")||{};g.r("ytPubsub2Pubsub2IsAsync",Ki,void 0);g.r("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.n(Ri,g.Fi);var kba=new g.Gi("screen-created",Ri),Si=[],Ti=0;g.h=g.Xi.prototype;g.h.cG=function(){this.Nd()||this.init()};
g.h.enable=function(){this.C=1;(0,g.B)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.cG,this),this.subscribe("dispose-"+a,this.dispose,this),g.F("PAGE_NAME")==a&&g.Yi(this))},this)};
g.h.init=function(){g.Wg(this.F);this.C=2;this.L&&this.L()};
g.h.Nd=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Wg(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Tf(a)}};
g.h.subscribe=function(a,b,c){a=g.eg(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.fg(this.G);this.G=[]};var Zi=g.u("yt.modules.registry_")||{};g.r("yt.modules.registry_",Zi,void 0);g.bj=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.r("yt.msgs_",g.bj,void 0);var hj={},oba=0;var pba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.n(vj,g.C);g.h=vj.prototype;g.h.getId=function(){return this.ha};
g.h.loadNewVideoConfig=function(a){if(!this.qb()){this.aa&&(g.Yf(this.aa),this.aa=0);this.nb=a=g.wh(a);this.C=a.clone();tj(this);this.qa||(this.qa=Ej(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Bd(this.L,Number(a)||a);if(a=this.C.attrs.height)this.L.style.height=g.Ad(Number(a)||a,!0);uj(this);this.M&&wj(this)}};
g.h.Yu=function(){return this.nb};
g.h.cz=function(){return this.M};
g.h.Jh=function(a,b){var c=this,d=Ej(this,b);if(d){if(!g.Ma(this.Pd,a)&&!this.G[a]){var e=rba(this,a);this.N&&this.N(a,e)}this.Y.subscribe(a,d);"onReady"==a&&this.M&&g.Wf(function(){d(c.api)},0)}};
g.h.QF=function(a,b){if(!this.qb()){var c=Ej(this,b);c&&g.sf(this.Y,a,c)}};
g.h.Dt=function(a){g.H("a11y-announce",a)};
g.h.gD=function(a){g.H("WATCH_LATER_VIDEO_ADDED",a)};
g.h.hD=function(a){g.H("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.qv=function(){return this.la||(xj(this)?"html5":null)};
g.h.ev=function(){return this.kb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.hg(yj(this));spf.script.ignore(b,a)}g.Yf(this.sb);this.T=!1};
g.h.X=function(){Bj(this);if(this.H&&this.C&&this.H.destroy)try{this.H.destroy()}catch(b){g.Tf(b)}this.ib=null;for(var a in this.G)g.p[this.G[a]]=null;this.nb=this.C=this.api=null;delete this.Ya;delete this.L;g.C.prototype.X.call(this)};g.Gj={};g.Fj="player_uid_"+(1E9*Math.random()>>>0);var Nj=null;g.xm=window.performance&&window.performance.memory;g.ll={};var ym=window,Oj=ym.performance||ym.mozPerformance||ym.msPerformance||ym.webkitPerformance||new uba;g.n(Pj,g.Fi);g.n(Qj,g.Fi);var wba=new g.Gi("aft-recorded",Pj),Eba=new g.Gi("timing-sent",Qj);var ak=!1;var hk=g.u("ytLoggingLatencyUsageStats_")||{};g.r("ytLoggingLatencyUsageStats_",hk,void 0);fk.prototype.tick=function(a,b,c){ik(this,"tick_"+a+"_"+b)||g.li("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
fk.prototype.info=function(a,b){var c=Object.keys(a).join("");ik(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,g.li("latencyActionInfo",a))};var zm={},xk=(zm.ad_to_ad="LATENCY_ACTION_AD_TO_AD",zm.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",zm.app_startup="LATENCY_ACTION_APP_STARTUP",zm["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",zm["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",zm["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",zm.browse="LATENCY_ACTION_BROWSE",zm.channels="LATENCY_ACTION_CHANNELS",zm.channel="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",zm["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
zm["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",zm["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",zm["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",zm["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",zm["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",zm.chips="LATENCY_ACTION_CHIPS",zm["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",zm["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
zm.embed="LATENCY_ACTION_EMBED",zm.home="LATENCY_ACTION_HOME",zm.library="LATENCY_ACTION_LIBRARY",zm.live="LATENCY_ACTION_LIVE",zm.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",zm.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",zm.prebuffer="LATENCY_ACTION_PREBUFFER",zm.prefetch="LATENCY_ACTION_PREFETCH",zm.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",zm.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",zm.results="LATENCY_ACTION_RESULTS",zm.search_ui="LATENCY_ACTION_SEARCH_UI",
zm.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",zm.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",zm.settings="LATENCY_ACTION_SETTINGS",zm.tenx="LATENCY_ACTION_TENX",zm.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",zm.watch="LATENCY_ACTION_WATCH",zm.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",zm["watch,watch7"]="LATENCY_ACTION_WATCH",zm["watch,watch7_html5"]="LATENCY_ACTION_WATCH",zm["watch,watch7ad"]="LATENCY_ACTION_WATCH",zm["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",zm.wn_comments=
"LATENCY_ACTION_LOAD_COMMENTS",zm.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",zm["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",zm["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",zm["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",zm["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",zm["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",zm["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",zm["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
zm.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",zm.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",zm),Am={},mk=(Am.ad_allowed="adTypesAllowed",Am.yt_abt="adBreakType",Am.ad_cpn="adClientPlaybackNonce",Am.ad_docid="adVideoId",Am.yt_ad_an="adNetworks",Am.ad_at="adType",Am.browse_id="browseId",Am.p="httpProtocol",Am.t="transportProtocol",Am.cpn="clientPlaybackNonce",Am.cseg="creatorInfo.creatorSegment",Am.csn="clientScreenNonce",Am.docid="videoId",Am.GetHome_rid="getHomeRequestId",
Am.GetSearch_rid="getSearchRequestId",Am.GetPlayer_rid="getPlayerRequestId",Am.GetWatchNext_rid="getWatchNextRequestId",Am.GetBrowse_rid="getBrowseRequestId",Am.is_continuation="isContinuation",Am.is_nav="isNavigation",Am.b_p="kabukiInfo.browseParams",Am.is_prefetch="kabukiInfo.isPrefetch",Am.is_secondary_nav="kabukiInfo.isSecondaryNav",Am.prev_browse_id="kabukiInfo.prevBrowseId",Am.query_source="kabukiInfo.querySource",Am.voz_type="kabukiInfo.vozType",Am.yt_lt="loadType",Am.mver="creatorInfo.measurementVersion",
Am.yt_ad="isMonetized",Am.nr="webInfo.navigationReason",Am.nrsu="navigationRequestedSameUrl",Am.ncnp="webInfo.nonPreloadedNodeCount",Am.prt="playbackRequiresTap",Am.plt="playerInfo.playbackType",Am.pis="playerInfo.playerInitializedState",Am.paused="playerInfo.isPausedOnLoad",Am.yt_pt="playerType",Am.fmt="playerInfo.itag",Am.yt_pl="watchInfo.isPlaylist",Am.yt_pre="playerInfo.preloadType",Am.yt_ad_pr="prerollAllowed",Am.pa="previousAction",Am.yt_red="isRedSubscriber",Am.rce="mwebInfo.responseContentEncoding",
Am.scrh="screenHeight",Am.scrw="screenWidth",Am.st="serverTimeMs",Am.aq="tvInfo.appQuality",Am.br_trs="tvInfo.bedrockTriggerState",Am.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Am.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Am.label="tvInfo.label",Am.is_mdx="tvInfo.isMdx",Am.preloaded="tvInfo.isPreloaded",Am.upg_player_vis="playerInfo.visibilityState",Am.query="unpluggedInfo.query",Am.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Am.yt_vst="videoStreamType",Am.vph="viewportHeight",
Am.vpw="viewportWidth",Am.yt_vis="isVisible",Am.rcl="mwebInfo.responseContentLength",Am.GetSettings_rid="mwebInfo.getSettingsRequestId",Am.GetTrending_rid="mwebInfo.getTrendingRequestId",Am.GetMusicSearchSuggestions_rid="musicInfo.getMusicSearchSuggestionsRequestId",Am),xba="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Bm={},nk=(Bm.mver="MEASUREMENT_VERSION_",Bm.pis="PLAYER_INITIALIZED_STATE_",Bm.yt_pt="LATENCY_PLAYER_",Bm.pa="LATENCY_ACTION_",Bm.yt_vst="VIDEO_STREAM_TYPE_",Bm),yba="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");if(g.lg("overwrite_polyfill_on_logging_lib_loaded")){var Cm=window;Cm.ytcsi&&(Cm.ytcsi.info=rk)};var wk={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},zba=(0,g.v)(Oj.clearResourceTimings||
Oj.webkitClearResourceTimings||Oj.mozClearResourceTimings||Oj.msClearResourceTimings||Oj.oClearResourceTimings||g.xa,Oj);var Mk=0,Ik=[],Lk=[],Ek=0,Jk={},Kk={},Gk=new g.$e(Lba,1E3);var Ok=["server_prefetched_vast","vmap"];var Qk;var Uk=null,Xk=[];var al,rl,ql,cl,bl,Sba,Vba,Tba,Uba,ml;cl=0;bl=0;Sba=[900,60,"waiting"];Vba=[500,99,"waiting"];Tba=[300,60,"waiting"];Uba=[400,99,"waiting"];ml=[300,101,"done"];var yl=!1;window.yt=window.yt||{};g.r("yt.setConfig",g.Pf,void 0);g.r("yt.pushConfigArray",Qf,void 0);g.r("yt.getConfig",g.F,void 0);g.r("yt.config.set",g.Pf,void 0);g.r("yt.config.pushArray",Qf,void 0);g.r("yt.config.get",g.F,void 0);g.r("yt.hasMsg",g.dj,void 0);g.r("yt.setMsg",cj,void 0);g.r("yt.setGoogMsg",ej,void 0);g.r("yt.msgs.has",g.dj,void 0);g.r("yt.msgs.set",cj,void 0);g.r("yt.msgs.setGoog",ej,void 0);g.r("yt.pubsub.publish",g.H,void 0);g.r("yt.pubsub.subscribe",g.eg,void 0);
g.r("ytcsi.tick",g.tk,void 0);g.x(Bl,g.Xi);
Bl.prototype.enable=function(){window.onload=Qba;window.onunload=Rba;window.onerror=Naa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Zk),window.addEventListener("spfhistory",$k),window.addEventListener("spfrequest",el),window.addEventListener("spfpartprocess",hl),window.addEventListener("spfpartdone",il),window.addEventListener("spfprocess",jl),window.addEventListener("spfdone",nl),window.addEventListener("spferror",ol),window.addEventListener("spfreload",
pl),window.addEventListener("spfjsbeforeunload",Cl)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",Xba),this.subscribe("dispose",Yba)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Bl.prototype.init=function(){Bl.V.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.F("PAGEFRAME_JS")){var b=g.F("PAGEFRAME_JS",void 0);var c=function(){var e=g.u("ytbin.www.pageframe.setup");e&&(window.ytPageFrameLoaded=!0,e())}}else a&&(a=g.u("yt.www.masthead.loadSearchbox"))&&a();
a=g.F("JS_COMMON_MODULE");var d=g.F("JS_PAGE_MODULES");d||(d=[a]);a=g.F("JS_DELAY_LOAD",0);0<a?(g.Yf(this.D),this.D=g.Wf(function(){b&&g.ig(b,c);spf.script.require(d)},a)):(b&&g.ig(b,c),spf.script.require(d));
g.r("yt.abuse.player.botguardInitialized",Yaa,void 0);g.r("yt.abuse.player.invokeBotguard",Zaa,void 0);g.r("yt.abuse.dclkstatus.checkDclkStatus",Xaa,void 0);g.r("yt.player.exports.navigate",g.rj,void 0);g.r("yt.util.activity.init",g.Uh,void 0);g.r("yt.util.activity.getTimeSinceActive",g.Wh,void 0);g.r("yt.util.activity.setTimestamp",g.Sh,void 0);Tk(g.u("ytplayer.config"));g.u("ytspf.enabled")&&Oba();Dba();g.F("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.lg("service_worker_enabled")?nca():lca())};
Bl.prototype.dispose=function(){g.Yf(this.D);var a=g.u("ytbin.www.pageframe.cancelSetup");a&&a();g.Zf(Qk);if(a=g.Sk())a.removeEventListener("onReady",Rk),a.removeEventListener("onStateChange",Rk);Tj(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.E(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.sh(a);Bl.V.dispose.call(this)};
Bl.prototype.disable=function(){Bl.V.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Zk),window.removeEventListener("spfhistory",$k),window.removeEventListener("spfrequest",el),window.removeEventListener("spfpartprocess",hl),window.removeEventListener("spfpartdone",il),window.removeEventListener("spfprocess",jl),window.removeEventListener("spfdone",nl),window.removeEventListener("spferror",ol),window.removeEventListener("spfreload",pl),window.removeEventListener("spfjsbeforeunload",
Cl));window.onload=null;window.onunload=null;window.onerror=null};
g.aj(new Bl);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:03:13 Mar 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:56:32 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 120.337
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.058
  cdx.remote: 0.056
  esindex: 0.01
  LoadShardBlock: 73.522 (3)
  PetaboxLoader3.datanode: 52.138 (4)
  load_resource: 53.948
  PetaboxLoader3.resolve: 40.01
*/