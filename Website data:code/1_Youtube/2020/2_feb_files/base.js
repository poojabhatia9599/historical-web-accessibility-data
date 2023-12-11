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
var ca,aaa,ka,la,ma,na,qa,sa,ta,ua,eaa,faa,yb,Sb,Tb,lc,kaa,pc,wc,Ac,Bc,Cc,Hc,Ic,maa,oaa,Hd,paa,qaa,Id,Jd,saa,Rd,Td,Ud,Yd,taa,ae,he,ge,vaa,ke,le,me,ne,xaa,pe,qe,ue,yaa,ve,Ce,Ee,Ke,Oe,Ie,Fe,Aaa,Ne,Le,Me,Qe,zaa,Ze,Baa,Caa,ef,Daa,Eaa,jf,kf,Faa,lf,nf,Haa,sf,tf,uf,Iaa,yf,Df,Ef,Ff,Gf,Hf,Jf,Mf,Nf,Of,Laa,Qf,Maa,Yf,jg,Paa,qg,lg,Qaa,vg,sg,Raa,Saa,Eg,Taa,Uaa,Waa,Kg,Xaa,Lg,Mg,Yaa,Tg,Pg,Ng,Vg,bh,oh,ph,bba,Bh,aba,gba,Oh,Wh,Xh,Yh,hba,di,ei,li,si,ti,ui,wi,iba,lba,Ci,Ji,jba,Ri,Vi,Yi,$i,mba,bj,nba,gj,fj,ij,ej,hj,qj,
oj,rj,uj,pj,sj,vj,qba,yj,nj,zj,rba,wj,xj,tj,sba,Fj,tba,uba,Kj,Lj,Nj,Oj,Pj,Qj,Sj,Tj,Mj,Uj,Rj,Wj,Xj,Zj,Yj,ak,bk,dk,ek,gk,jk,fk,kk,mk,lk,nk,Cba,pk,uk,vk,qk,zba,wk,xk,Aba,Bba,Jba,Iba,Hba,Bk,Gba,Eba,Fba,Kba,Lba,Mba,Nba,Ok,Mk,Qk,Oba,Rk,Tk,Pba,Qba,Uk,Vk,$k,cl,dl,el,il,jl,kl,Wba,Xba,al,Zk,Vba,bl,ol,ql,nl,Yba,rl,pl,Zba,cca,$ba,fca,bca,aca,dca,eca,hca,ul,gca,sl,ica,kca,mca,lca,jca,vl,wl,xl,fa,yl,caa,va,Fa,daa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
g.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
g.ea=function(a){if(!(a instanceof Array)){a=g.da(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
g.n=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype};
aaa=function(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis};
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
g.Ha=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ja=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.La=function(a,b,c){b=g.Ka(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
g.Ka=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Na=function(a,b){return 0<=(0,g.Ma)(a,b)};
g.Oa=function(a){return 0==a.length};
g.Qa=function(a,b){var c=(0,g.Ma)(a,b),d;(d=0<=c)&&g.Pa(a,c);return d};
g.Pa=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Ra=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Sa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Ta=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Ua=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Va=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.Wa=function(a){for(var b in a)return!1;return!0};
g.Xa=function(a,b){b in a&&delete a[b]};
g.Ya=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.Za=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.$a=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.ab=function(a){var b=g.za(a);if("object"==b||"array"==b){if(g.Da(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.ab(a[c]);return b}return a};
g.cb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<bb.length;f++)c=bb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.fb=function(a,b){this.C=a===db&&b||"";this.F=eb};
g.gb=function(a){return a instanceof g.fb&&a.constructor===g.fb&&a.F===eb?a.C:"type_error:Const"};
g.hb=function(a){return new g.fb(db,a)};
g.kb=function(a,b){this.F=a===g.ib&&b||"";this.D=jb};
g.lb=function(a){if(a instanceof g.kb&&a.constructor===g.kb&&a.D===jb)return a.F;g.za(a);return"type_error:TrustedResourceUrl"};
g.mb=function(a){return new g.kb(g.ib,g.gb(a))};
g.nb=function(a,b){return 0==a.lastIndexOf(b,0)};
g.ob=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.pb=function(a){return/^[\s\xa0]*$/.test(a)};
g.wb=function(a,b){if(b)a=a.replace(qb,"&amp;").replace(rb,"&lt;").replace(sb,"&gt;").replace(tb,"&quot;").replace(ub,"&#39;").replace(vb,"&#0;");else{if(!gaa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(rb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(tb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ub,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(vb,"&#0;"))}return a};
g.zb=function(a,b){for(var c=0,d=(0,g.xb)(String(a)).split("."),e=(0,g.xb)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=yb(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||yb(0==l[2].length,0==m[2].length)||yb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
yb=function(a,b){return a<b?-1:a>b?1:0};
g.Cb=function(a,b){this.F=a===Ab&&b||"";this.D=Bb};
g.Db=function(a){if(a instanceof g.Cb&&a.constructor===g.Cb&&a.D===Bb)return a.F;g.za(a);return"type_error:SafeUrl"};
g.Fb=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(haa);b=b&&iaa.test(b[1]);return g.Eb(b?a:"about:invalid#zClosurez")};
g.Hb=function(a){if(a instanceof g.Cb)return a;a="object"==typeof a&&a.Md?a.Uc():String(a);Gb.test(a)||(a="about:invalid#zClosurez");return g.Eb(a)};
g.Ib=function(a,b){if(a instanceof g.Cb)return a;a="object"==typeof a&&a.Md?a.Uc():String(a);if(b&&/^data:/i.test(a)){var c=g.Fb(a);if(c.Uc()==a)return c}Gb.test(a)||(a="about:invalid#zClosurez");return g.Eb(a)};
g.Eb=function(a){return new g.Cb(Ab,a)};
g.Kb=function(){this.C="";this.F=g.Jb};
g.Lb=function(a){var b=new g.Kb;b.C=a;return b};
g.Nb=function(){this.C="";this.F=g.Mb};
g.Ob=function(a){var b=new g.Nb;b.C=a;return b};
g.Qb=function(a){return-1!=g.Pb.indexOf(a)};
g.Rb=function(){return g.Qb("Trident")||g.Qb("MSIE")};
Sb=function(){return g.Qb("Firefox")||g.Qb("FxiOS")};
g.Ub=function(){return g.Qb("Safari")&&!(Tb()||g.Qb("Coast")||g.Qb("Opera")||g.Qb("Edge")||g.Qb("Edg/")||g.Qb("OPR")||Sb()||g.Qb("Silk")||g.Qb("Android"))};
Tb=function(){return(g.Qb("Chrome")||g.Qb("CriOS"))&&!g.Qb("Edge")};
g.Vb=function(){return g.Qb("Android")&&!(Tb()||Sb()||g.Qb("Opera")||g.Qb("Silk"))};
g.Xb=function(){this.F="";this.G=Wb;this.D=null};
g.Zb=function(a){return g.Yb(a).toString()};
g.Yb=function(a){if(a instanceof g.Xb&&a.constructor===g.Xb&&a.G===Wb)return a.F;g.za(a);return"type_error:SafeHtml"};
g.ac=function(a){if(a instanceof g.Xb)return a;var b="object"==typeof a,c=null;b&&a.Rk&&(c=a.C());return g.$b(g.wb(b&&a.Md?a.Uc():String(a)),c)};
g.$b=function(a,b){return g.bc(a,b)};
g.bc=function(a,b){var c=new g.Xb;c.F=a;c.D=b;return c};
g.cc=function(a,b){var c=b instanceof g.Cb?b:g.Ib(b);a.href=g.Db(c)};
g.dc=function(a,b){a.src=g.lb(b).toString()};
g.ec=function(a,b){var c=b instanceof g.Cb?b:g.Ib(b);a.href=g.Db(c)};
g.fc=function(a){return encodeURIComponent(String(a))};
g.gc=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.hc=function(a){return a=g.wb(a,void 0)};
g.jc=function(a,b,c){a=void 0!==c?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return(0,g.ic)("0",Math.max(0,b-c))+a};
g.kc=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
lc=function(){return g.Qb("iPhone")&&!g.Qb("iPod")&&!g.Qb("iPad")};
g.mc=function(){return lc()||g.Qb("iPad")||g.Qb("iPod")};
g.nc=function(a){g.nc[" "](a);return a};
g.oc=function(a,b){try{return g.nc(a[b]),!0}catch(c){}return!1};
kaa=function(a,b){var c=jaa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
pc=function(){var a=g.p.document;return a?a.documentMode:void 0};
g.rc=function(a){return kaa(a,function(){return 0<=g.zb(g.qc,a)})};
g.tc=function(a){return Number(g.sc)>=a};
wc=function(a,b){g.Ca(a);void 0===b&&(b=0);g.uc();for(var c=vc[b],d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,q=m?a[e+2]:0,t=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[t],c[f],c[l]||"",c[q]||"")}return d.join("")};
g.uc=function(){if(!g.xc){g.xc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));vc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===g.xc[f]&&(g.xc[f]=e)}}}};
g.yc=function(a){this.C=0;this.F=a};
g.zc=function(){};
Ac=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Ba(c))for(var d=0;d<c.length;d++)c[d]&&c[d].Zc();else c&&c.Zc()}};
Bc=function(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};
Cc=function(a){if(g.Ba(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Cc(d):d)}return b}if(g.Dc&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Cc(d):d);return b};
g.Ec=function(a){this.C=a||{cookie:""}};
g.Fc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.xb)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Gc=function(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31};
g.Kc=function(a,b,c){"number"===typeof a?(this.date=Hc(a,b||0,c||1),Ic(this,c||1)):g.Ea(a)?(this.date=Hc(a.getFullYear(),a.getMonth(),a.getDate()),Ic(this,a.getDate())):(this.date=new Date((0,g.Jc)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Ic(this,a))};
Hc=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
Ic=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}};
g.Lc=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
g.Mc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Nc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.Oc=function(a,b){this.width=a;this.height=b};
g.z=function(a){return g.Pc(document,a)};
g.Pc=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.Qc=function(a){return g.Pc(document,a)};
g.Sc=function(a,b){g.Ta(b,function(c,d){c&&"object"==typeof c&&c.Md&&(c=c.Uc());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Rc.hasOwnProperty(d)?a.setAttribute(Rc[d],c):g.nb(d,"aria-")||g.nb(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.Uc=function(a){return g.Tc(a||window)};
g.Tc=function(a){a=a.document;a=g.Vc(a)?a.documentElement:a.body;return new g.Oc(a.clientWidth,a.clientHeight)};
g.Xc=function(a,b,c){return g.Wc(document,arguments)};
g.Wc=function(a,b){var c=String(b[0]),d=b[1];if(!laa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.hc(d.name),'"');if(d.type){c.push(' type="',g.hc(d.type),'"');var e={};g.cb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=g.Yc(a,c);d&&("string"===typeof d?c.className=d:g.Ba(d)?c.className=d.join(" "):g.Sc(c,d));2<b.length&&g.Zc(a,c,b,2);return c};
g.Zc=function(a,b,c,d){function e(k){k&&b.appendChild("string"===typeof k?a.createTextNode(k):k)}
for(;d<c.length;d++){var f=c[d];!g.Ca(f)||g.Ea(f)&&0<f.nodeType?e(f):(0,g.B)(maa(f)?g.Ra(f):f,e)}};
g.$c=function(a){return g.Yc(document,a)};
g.Yc=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.Vc=function(a){return"CSS1Compat"==a.compatMode};
g.ad=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.bd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.cd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
maa=function(a){if(a&&"number"==typeof a.length){if(g.Ea(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Da(a))return"function"==typeof a.item}return!1};
g.dd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.ed=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.fd=function(a){return a?decodeURI(a):a};
g.hd=function(a,b){return b.match(g.gd)[a]||null};
g.id=function(a){return g.fd(g.hd(3,a))};
g.jd=function(a){a=a.match(g.gd);return g.ed(null,null,null,null,a[5],a[6],a[7])};
g.kd=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.ld=function(a,b){return b?a?a+"&"+b:b:a};
g.md=function(a,b){if(!b)return a;var c=g.kd(a);c[1]=g.ld(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.nd=function(a,b,c){if(g.Ba(b))for(var d=0;d<b.length;d++)g.nd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.fc(b)))};
g.od=function(a){var b=[],c;for(c in a)g.nd(c,a[c],b);return b.join("&")};
g.pd=function(a,b){var c=g.od(b);return g.md(a,c)};
g.qd=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.sd=function(a,b){var c=a.search(g.rd),d=g.qd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.gc(a.substr(d,e-d))};
g.td=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.ud=function(a){var b=[];g.td(a,function(c){b.push(c)});
return b};
oaa=function(){var a=g.$c("IFRAME"),b={};(0,g.B)(naa(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
g.wd=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.xd=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.yd=function(a,b){a.style.width=g.xd(b,!0)};
g.zd=function(){this.C=function(){return!1}};
g.Ad=function(a,b){return typeof a===b};
g.Cd=function(){var a=void 0===a?g.Bd:a;try{return a.history.length}catch(b){return 0}};
g.Dd=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Cd();a.u_java=!!g.Bd.navigator&&!g.Ad(g.Bd.navigator.javaEnabled,"unknown")&&!!g.Bd.navigator.javaEnabled&&g.Bd.navigator.javaEnabled();g.Bd.screen&&(a.u_h=g.Bd.screen.height,a.u_w=g.Bd.screen.width,a.u_ah=g.Bd.screen.availHeight,a.u_aw=g.Bd.screen.availWidth,a.u_cd=g.Bd.screen.colorDepth);g.Bd.navigator&&g.Bd.navigator.plugins&&(a.u_nplug=g.Bd.navigator.plugins.length);g.Bd.navigator&&g.Bd.navigator.mimeTypes&&(a.u_nmime=g.Bd.navigator.mimeTypes.length)};
g.Fd=function(a,b){try{return(void 0===b?0:b)?(new g.Oc(a.innerWidth,a.innerHeight)).round():g.Uc(a).round()}catch(c){return new g.Oc(-12245933,-12245933)}};
g.Gd=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var f=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,k]};
Hd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
paa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=q=0}
function b(y){for(var A=k,G=0;64>G;G+=4)A[G/4]=y[G]<<24|y[G+1]<<16|y[G+2]<<8|y[G+3];for(G=16;80>G;G++)y=A[G-3]^A[G-8]^A[G-14]^A[G-16],A[G]=(y<<1|y>>>31)&4294967295;y=e[0];var O=e[1],T=e[2],ra=e[3],Aa=e[4];for(G=0;80>G;G++){if(40>G)if(20>G){var Ia=ra^O&(T^ra);var vd=1518500249}else Ia=O^T^ra,vd=1859775393;else 60>G?(Ia=O&T|ra&(O|T),vd=2400959708):(Ia=O^T^ra,vd=3395469782);Ia=((y<<5|y>>>27)&4294967295)+Ia+Aa+vd+A[G]&4294967295;Aa=ra;ra=T;T=(O<<30|O>>>2)&4294967295;O=y;y=Ia}e[0]=e[0]+y&4294967295;e[1]=
e[1]+O&4294967295;e[2]=e[2]+T&4294967295;e[3]=e[3]+ra&4294967295;e[4]=e[4]+Aa&4294967295}
function c(y,A){if("string"===typeof y){y=unescape(encodeURIComponent(y));for(var G=[],O=0,T=y.length;O<T;++O)G.push(y.charCodeAt(O));y=G}A||(A=y.length);G=0;if(0==q)for(;G+64<A;)b(y.slice(G,G+64)),G+=64,t+=64;for(;G<A;)if(f[q++]=y[G++],t++,64==q)for(q=0,b(f);G+64<A;)b(y.slice(G,G+64)),G+=64,t+=64}
function d(){var y=[],A=8*t;56>q?c(l,56-q):c(l,64-(q-56));for(var G=63;56<=G;G--)f[G]=A&255,A>>>=8;b(f);for(G=A=0;5>G;G++)for(var O=24;0<=O;O-=8)y[A++]=e[G]>>O&255;return y}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,t;a();return{reset:a,update:c,digest:d,su:function(){for(var y=d(),A="",G=0;G<y.length;G++)A+="0123456789ABCDEF".charAt(Math.floor(y[G]/16))+"0123456789ABCDEF".charAt(y[G]%16);return A}}};
qaa=function(a,b,c){var d=[],e=[];if(1==(g.Ba(c)?2:1))return e=[b,a],(0,g.B)(d,function(l){e.push(l)}),Id(e.join(" "));
var f=[],k=[];(0,g.B)(c,function(l){k.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Oa(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.B)(d,function(l){e.push(l)});
a=Id(e.join(" "));a=[c,a];g.Oa(k)||a.push(k.join(""));return a.join("_")};
Id=function(a){var b=paa();b.update(a);return b.su().toLowerCase()};
Jd=function(a){var b=Hd(String(g.p.location.href)),c;(c=g.p.__SAPISID||g.p.__APISID||g.p.__OVERRIDE_SID)?c=!0:(c=new g.Ec(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.p.__SAPISID:g.p.__APISID,c||(c=new g.Ec(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(g.p.location.href);return d&&c&&b?[b,qaa(Hd(d),c,a||null)].join(" "):
null}return null};
g.C=function(){this.Rc=this.Rc;this.wf=this.wf};
g.Md=function(a,b){g.Kd(a,g.w(g.Ld,b))};
g.Kd=function(a,b){a.Rc?b():(a.wf||(a.wf=[]),a.wf.push(b))};
g.Ld=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Nd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1};
g.Od=function(a,b){g.Nd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.zc=null;a&&this.init(a,b)};
g.Qd=function(a){return!(!a||!a[Pd])};
saa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Zg=e;this.key=++raa;this.kg=this.Ph=!1};
Rd=function(a){a.kg=!0;a.listener=null;a.C=null;a.src=null;a.Zg=null};
g.Sd=function(a){this.src=a;this.listeners={};this.C=0};
Td=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Qa(a.listeners[c],b);d&&(Rd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Ud=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.kg&&f.listener==b&&f.capture==!!c&&f.Zg==d)return e}return-1};
g.Wd=function(a,b,c,d,e){if(d&&d.once)return g.Vd(a,b,c,d,e);if(g.Ba(b)){for(var f=0;f<b.length;f++)g.Wd(a,b[f],c,d,e);return null}c=g.Xd(c);return g.Qd(a)?a.O(b,c,g.Ea(d)?!!d.capture:!!d,e):Yd(a,b,c,!1,d,e)};
Yd=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ea(e)?!!e.capture:!!e,l=g.Zd(a);l||(a[$d]=l=new g.Sd(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=taa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)uaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ae(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");be++;return c};
taa=function(){var a=vaa,b=ce?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Vd=function(a,b,c,d,e){if(g.Ba(b)){for(var f=0;f<b.length;f++)g.Vd(a,b[f],c,d,e);return null}c=g.Xd(c);return g.Qd(a)?a.Be(b,c,g.Ea(d)?!!d.capture:!!d,e):Yd(a,b,c,!0,d,e)};
g.de=function(a,b,c,d,e){if(g.Ba(b))for(var f=0;f<b.length;f++)g.de(a,b[f],c,d,e);else d=g.Ea(d)?!!d.capture:!!d,c=g.Xd(c),g.Qd(a)?a.Va(b,c,d,e):a&&(a=g.Zd(a))&&(b=a.We(b,c,d,e))&&g.ee(b)};
g.ee=function(a){if("number"===typeof a||!a||a.kg)return!1;var b=a.src;if(g.Qd(b))return Td(b.vd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ae(c),d):b.addListener&&b.removeListener&&b.removeListener(d);be--;(c=g.Zd(b))?(Td(c,a),0==c.C&&(c.src=null,b[$d]=null)):Rd(a);return!0};
ae=function(a){return a in fe?fe[a]:fe[a]="on"+a};
he=function(a,b,c,d){var e=!0;if(a=g.Zd(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.kg&&(f=ge(f,d),e=e&&!1!==f)}return e};
ge=function(a,b){var c=a.listener,d=a.Zg||a.src;a.Ph&&g.ee(a);return c.call(d,b)};
vaa=function(a,b){if(a.kg)return!0;if(!ce){var c=b||g.u("window.event"),d=new g.Od(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=he(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=he(c[k],f,!1,d),e=e&&l}return e}return ge(a,new g.Od(b,
this))};
g.Zd=function(a){a=a[$d];return a instanceof g.Sd?a:null};
g.Xd=function(a){if(g.Da(a))return a;a[ie]||(a[ie]=function(b){return a.handleEvent(b)});
return a[ie]};
g.je=function(){g.C.call(this);this.vd=new g.Sd(this);this.Dt=this;this.Ol=null};
ke=function(a,b,c,d){b=a.vd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.kg&&k.capture==c){var l=k.listener,m=k.Zg||k.src;k.Ph&&Td(a.vd,k);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
le=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
me=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
ne=function(a){g.p.setTimeout(function(){throw a;},0)};
xaa=function(){var a=g.p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Qb("Presto")&&(a=function(){var e=g.$c("IFRAME");e.style.display="none";g.dc(e,g.mb(waa));document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(g.Yb(g.oe));e.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.v)(function(m){if(("*"==l||m.origin==
l)&&m.data==k)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&!g.Rb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.jn;c.jn=null;e()}};
return function(e){d.next={jn:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in g.$c("SCRIPT")?function(e){var f=g.$c("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){g.p.setTimeout(e,0)}};
pe=function(){this.F=this.C=null};
qe=function(){this.next=this.scope=this.mc=null};
ue=function(a,b){re||yaa();se||(re(),se=!0);te.add(a,b)};
yaa=function(){if(g.p.Promise&&g.p.Promise.resolve){var a=g.p.Promise.resolve(void 0);re=function(){a.then(ve)}}else re=function(){var b=ve;
!g.Da(g.p.setImmediate)||g.p.Window&&g.p.Window.prototype&&!g.Qb("Edge")&&g.p.Window.prototype.setImmediate==g.p.setImmediate?(we||(we=xaa()),we(b)):g.p.setImmediate(b)}};
ve=function(){for(var a;a=te.remove();){try{a.mc.call(a.scope)}catch(b){ne(b)}me(xe,a)}se=!1};
g.ye=function(a){a.prototype.$goog_Thenable=!0};
g.ze=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Be=function(a,b){this.C=0;this.N=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.xa)try{var c=this;a.call(b,function(d){g.Ae(c,2,d)},function(d){g.Ae(c,3,d)})}catch(d){g.Ae(this,3,d)}};
Ce=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
Ee=function(a,b,c){var d=De.get();d.F=a;d.onRejected=b;d.context=c;return d};
g.Ge=function(a,b,c){Fe(a,b,c,null)||ue(g.w(b,a))};
g.He=function(a){return new g.Be(function(b,c){var d=a.length,e=[];if(d)for(var f=function(q,t){d--;e[q]=t;0==d&&b(e)},k=function(q){c(q)},l=0,m;l<a.length;l++)m=a[l],g.Ge(m,g.w(f,l),k);
else b(e)})};
g.Je=function(a,b){return Ie(a,null,b,void 0)};
Ke=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Ke(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Le(c),Me(c,e,3,b)))}a.D=null}else g.Ae(a,3,b)};
Oe=function(a,b){a.F||2!=a.C&&3!=a.C||Ne(a);a.G?a.G.next=b:a.F=b;a.G=b};
Ie=function(a,b,c,d){var e=Ee(null,null,null);e.C=new g.Be(function(f,k){e.F=b?function(l){try{var m=b.call(d,l);f(m)}catch(q){k(q)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof g.Pe?k(l):f(m)}catch(q){k(q)}}:k});
e.C.D=a;Oe(a,e);return e.C};
g.Ae=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Fe(c,a.Y,a.M,a)||(a.N=c,a.C=b,a.D=null,Ne(a),3!=b||c instanceof g.Pe||zaa(a,c)))};
Fe=function(a,b,c,d){if(a instanceof g.Be)return Oe(a,Ee(b||g.xa,c||null,d)),!0;if(g.ze(a))return a.then(b,c,d),!0;if(g.Ea(a))try{var e=a.then;if(g.Da(e))return Aaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Aaa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function k(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Ne=function(a){a.L||(a.L=!0,ue(a.J,a))};
Le=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Me=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Qe(b,c,d);else try{b.D?b.F.call(b.context):Qe(b,c,d)}catch(e){Re.call(null,e)}me(De,b)};
Qe=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
zaa=function(a,b){a.H=!0;ue(function(){a.H&&Re.call(null,b)})};
g.Pe=function(a){g.Ha.call(this,a)};
g.Se=function(a,b,c){if(g.Da(a))c&&(a=(0,g.v)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.v)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.p.setTimeout(a,b||0)};
g.Te=function(a){g.p.clearTimeout(a)};
g.Ue=function(a,b,c){g.C.call(this);this.C=a;this.D=b||0;this.F=c;this.Pb=(0,g.v)(this.xk,this)};
g.Ve=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
g.We=function(a){return a.classList?a.classList:g.Ve(a).match(/\S+/g)||[]};
g.D=function(a,b){return a.classList?a.classList.contains(b):g.Na(g.We(a),b)};
g.Xe=function(){};
Ze=function(a){if(a instanceof g.Xe)return a;if("function"==typeof a.bd)return a.bd(!1);if(g.Ca(a)){var b=0,c=new g.Xe;c.next=function(){for(;;){if(b>=a.length)throw g.Ye;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.$e=function(a,b,c){if(g.Ca(a))try{(0,g.B)(a,b,c)}catch(d){if(d!==g.Ye)throw d;}else{a=Ze(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Ye)throw d;}}};
Baa=function(a){if(g.Ca(a))return g.Ra(a);a=Ze(a);var b=[];g.$e(a,function(c){b.push(c)});
return b};
g.bf=function(a,b){this.F={};this.C=[];this.Je=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.af(this,a)};
Caa=function(a,b){return a===b};
g.df=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.cf(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.cf(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.af=function(a,b){if(b instanceof g.bf)for(var c=b.yc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.cf=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
ef=function(){this.C=[];this.F=-1};
Daa=function(a){-1==a.F&&(a.F=(0,g.ff)(a.C,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.F};
g.gf=function(){var a=new ef;g.p.SVGElement&&g.p.document.createElementNS&&a.set(0);var b=oaa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.p.crypto&&g.p.crypto.subtle&&a.set(3);g.p.TextDecoder&&g.p.TextEncoder&&a.set(4);return Daa(a)};
g.hf=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
Eaa=function(){this.F=-1};
jf=function(){this.F=64;this.C=[];this.L=[];this.N=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
kf=function(a,b,c){c||(c=0);var d=a.N;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):
(f=c^k^l,q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.mf=function(a){var b=[];lf(new Faa,a,b);return b.join("")};
Faa=function(){};
lf=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.Ba(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),lf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),nf(d,c),c.push(":"),lf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":nf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
nf=function(a,b){b.push('"',a.replace(Gaa,function(c){var d=of[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),of[c]=d);return d}),'"')};
g.pf=function(a){g.C.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.qf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.La(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.qd(b)}};
Haa=function(a,b,c){ue(function(){a.apply(b,c)})};
g.rf=function(a){this.C=a};
sf=function(a){this.C=a};
tf=function(a){this.data=a};
uf=function(a){return void 0===a||a instanceof tf?a:new tf(a)};
g.vf=function(a){this.C=a};
g.xf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Jc)()||!!b&&b>(0,g.Jc)()};
Iaa=function(){};
yf=function(){};
g.zf=function(a){this.C=a};
g.Af=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Df=function(a,b){this.F=a;this.C=null;if(g.Bf&&!g.tc(9)){Cf||(Cf=new g.bf);this.C=Cf.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),Cf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
Ef=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Jaa[b]})};
Ff=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
Gf=function(a){return a.C.XMLDocument.documentElement};
Hf=function(a,b){this.F=a;this.C=b+"::"};
g.If=function(a){var b=new g.Af;return b.isAvailable()?a?new Hf(b,a):b:null};
Jf=function(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])};
g.Lf=function(a){Jf(g.Kf,arguments)};
Mf=function(a,b){var c=g.E(a,void 0);c?c.push(b):g.Lf(a,[b])};
g.E=function(a,b){return a in g.Kf?g.Kf[a]:b};
Nf=function(){return g.E("ERRORS",[])};
Of=function(a){var b=g.Kf.EXPERIMENT_FLAGS;return b?b[a]:void 0};
Laa=function(a){Kaa.forEach(function(b){return b(a)})};
Qf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Pf(b),Laa(b)}}:a};
g.Pf=function(a,b,c,d){var e=g.u("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=Nf(),e.push([a,"ERROR",b,c,d]),g.Lf("ERRORS",e))};
g.Rf=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=Nf(),b.push([a,"WARNING",void 0,void 0,void 0]),g.Lf("ERRORS",b))};
Maa=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,k=Of("log_window_onerror_fraction");if(k&&Math.random()<k)f=!0;else{k=document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?k=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,k=a.message,b=a.filename,c=a.lineno,d=a.colno):(k="Unknown error",b="Unknown file",c=0),a=Error(k),a.name="UnhandledWindowError",e=a,e.message=k,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?g.Pf(e):g.Rf(e))};
g.F=function(a,b){return a?a.dataset?a.dataset[g.Sf(b)]:a.getAttribute("data-"+b):null};
g.Sf=function(a){return Tf[a]||(Tf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
g.Uf=function(a,b){g.Da(a)&&(a=Qf(a));return window.setTimeout(a,b)};
g.Vf=function(a,b){g.Da(a)&&(a=Qf(a));return window.setInterval(a,b)};
g.Wf=function(a){window.clearTimeout(a)};
g.Xf=function(a){window.clearInterval(a)};
g.bg=function(a,b,c){var d=Yf();if(d){var e=d.subscribe(a,function(){var f=arguments;var k=function(){Zf[e]&&b.apply(c||window,f)};
try{$f[a]?k():g.Uf(k,0)}catch(l){g.Pf(l)}},c);
Zf[e]=!0;ag[a]||(ag[a]=[]);ag[a].push(e);return e}return 0};
g.cg=function(a){var b=Yf();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete Zf[c]}))};
g.H=function(a,b){var c=Yf();return c?c.publish.apply(c,arguments):!1};
g.dg=function(a,b){$f[a]=!0;var c=Yf();c=c?c.publish.apply(c,arguments):!1;$f[a]=!1;return c};
Yf=function(){return g.u("ytPubsubPubsubInstance")};
g.gg=function(a,b){var c=g.eg(a);spf.script.load(a,c,b)};
g.hg=function(a){a=g.eg(a);spf.script.unload(a)};
g.eg=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Naa,""),b=b.replace(Oaa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.ig=function(){this.F=!1;this.C=null};
jg=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.Rf(d)}c&&c(b)};
g.kg=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
Paa=function(){};
g.mg=function(a,b){return lg(a,0,b)};
g.ng=function(a,b){return lg(a,1,b)};
g.pg=function(a){for(var b=0,c=a.length;b<c;b++)g.og(a[b])};
qg=function(){};
g.rg=function(){return!!g.u("yt.scheduler.instance")};
lg=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.Uf(a,c||0)};
g.og=function(a){if(!isNaN(a)){var b=g.u("yt.scheduler.instance.cancelJob");b?b(a):g.Wf(a)}};
Qaa=function(){return parseInt(g.E("DCLKSTAT",0),10)};
g.tg=function(a){a=sg(a);return"string"===typeof a&&"false"===a?!1:!!a};
g.ug=function(a,b){var c=sg(a);return void 0===c&&void 0!==b?b:Number(c||0)};
vg=function(a){a=sg(a);return void 0!==a?String(a):""};
sg=function(a){var b=g.E("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.E("EXPERIMENT_FLAGS",{})[a]};
Raa=function(){return g.wg.Nd()};
Saa=function(a){a=void 0===a?{}:a;return g.kg(g.wg,a)};
g.xg=function(a){var b=[];g.Ta(a,function(c,d){var e=g.fc(d),f;g.Ba(c)?f=c:f=[c];(0,g.B)(f,function(k){""==k?b.push(e):b.push(e+"="+g.fc(k))})});
return b.join("&")};
g.yg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=g.gc(e[0]||""),k=g.gc(e[1]||"");f in b?g.Ba(b[f])?g.Sa(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(m){if("q"!=e[0]){var l=Error("Error decoding URL component");l.params={key:e[0],value:e[1]};g.Pf(l)}}}return b};
g.Ag=function(a,b){return g.zg(a,b||{},!0)};
g.zg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.yg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return g.pd(a,e)+d};
Eg=function(a){var b=g.Bg;a=void 0===a?g.u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.Cg(b),g.Dg(b));b.ca_type="image";a&&(b.bid=a);return b};
g.Cg=function(a){var b={};b.dt=g.Fg;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Dd(b);return b};
g.Dg=function(a){var b=g.Gd(a.C),c=g.Fd(a.C.top),d={};return d.bc=g.gf(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.hf(a.F),d.wgl=!!g.Bd.WebGLRenderingContext,d};
Taa=function(){if(!Gg)return null;var a=Gg();return"open"in a?a:null};
g.Ig=function(a){switch(g.Hg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Hg=function(a){return a&&"status"in a?a.status:-1};
Uaa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.hd(1,a),e=g.id(a);d&&e?(d=c,c=a.match(g.gd),d=d.match(g.gd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.id(c)==e&&(Number(g.hd(4,c))||null)==(Number(g.hd(4,a))||null):!0;d=g.tg("web_ajax_ignore_global_headers_if_set");for(var f in Jg)e=g.E(Jg[f]),!e||!c&&!Kg(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Kg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Kg(a,"X-YouTube-Time-Zone"))&&
(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Kg(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=g.xg(Eg(void 0));return b};
Waa=function(a){var b=window.location.search,c=g.id(a),d=g.fd(g.hd(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.yg(b),f={};(0,g.B)(Vaa,function(k){e[k]&&(f[k]=e[k])});
return g.zg(a,f||{},!1)};
Kg=function(a,b){var c=g.E("CORS_HEADER_WHITELIST")||{},d=g.id(a);return d?(c=c[d])?g.Na(c,b):!1:!0};
Xaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Lg(a,b);var d=Mg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&g.Wf(f);var l=k.ok,m=function(q){q=q||{};var t=b.context||g.p;l?b.onSuccess&&b.onSuccess.call(t,q,k):b.onError&&b.onError.call(t,q,k);b.Xa&&b.Xa.call(t,q,k)};
"JSON"==(b.format||"JSON")&&(l||400<=k.status&&500>k.status)?k.json().then(m,function(){m(null)}):m(null)}});
b.hq&&0<b.timeout&&(f=g.Uf(function(){e||(e=!0,g.Wf(f),b.hq.call(b.context||g.p))},b.timeout))}else g.I(a,b)};
g.I=function(a,b){var c=b.format||"JSON";a=Lg(a,b);var d=Mg(a,b),e=!1,f,k=Ng(a,function(l){if(!e){e=!0;f&&g.Wf(f);var m=g.Ig(l),q=null,t=400<=l.status&&500>l.status,y=500<=l.status&&600>l.status;if(m||t||y)q=Yaa(c,l,b.nb);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};t=b.context||g.p;m?b.onSuccess&&b.onSuccess.call(t,l,q):b.onError&&b.onError.call(t,l,q);b.Xa&&b.Xa.call(t,l,q)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Oc&&0<b.timeout&&(f=g.Uf(function(){e||(e=!0,k.abort(),g.Wf(f),b.Oc.call(b.context||g.p,k))},b.timeout));
return k};
Lg=function(a,b){b.bR&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.E("XSRF_FIELD_NAME",void 0),d=b.Ta;d&&(d[c]&&delete d[c],a=g.Ag(a,d));return a};
Mg=function(a,b){var c=g.E("XSRF_FIELD_NAME",void 0),d=g.E("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.E("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Ju||g.id(a)&&!b.withCredentials&&g.id(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=g.yg(e),g.cb(e,f),e=b.er&&"JSON"==b.er?JSON.stringify(e):g.od(e));f=e||f&&!g.Wa(f);!Og&&f&&"POST"!=b.method&&(Og=!0,g.Pf(Error("AJAX request with postData should use POST")));
return e};
Yaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Pg(b):null)d={},(0,g.B)(b.getElementsByTagName("*"),function(e){d[e.tagName]=g.Sg(e)})}c&&Tg(d);
return d};
Tg=function(a){if(g.Ea(a))for(var b in a)"html_content"==b||g.ob(b,"_html")?a[b]=g.bc(a[b],null):Tg(a[b])};
Pg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Sg=function(a){var b="";(0,g.B)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.Ug=function(a,b){b.method="POST";b.ia||(b.ia={});return g.I(a,b)};
Ng=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Qf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Taa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.tg("debug_forward_web_query_parameters")&&(a=Waa(a));m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Uaa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m};
Vg=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.Wg=function(a){var b=new Vg;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.Xg=function(a){var b=new Vg;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.Zg=function(a){var b=a.__yt_uid_key;b||(b=Yg(),a.__yt_uid_key=b);return b};
g.$g=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Zaa+"VisibilityState";if(b in a)return a[b]};
g.ah=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in $aa||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}}catch(e){}};
bh=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.ch=function(a){void 0===a.C&&bh(a);return a.C};
g.dh=function(a){void 0===a.F&&bh(a);return a.F};
g.fh=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Va(eh,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,k=g.Ea(e[4])&&g.Ea(d)&&g.Za(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.J=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.fh(a,b,c,d);if(e)return e;e=++gh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(l){l=new g.ah(l);if(!g.dd(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new g.ah(l);
l.currentTarget=a;return c.call(a,l)};
k=Qf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),hh()||"boolean"===typeof d?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);eh[e]=[a,b,c,k,d];return e};
g.ih=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.B)(a,function(b){if(b in eh){var c=eh[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?hh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eh[b]}}))};
g.lh=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.J(a,b,function(){g.ih(e);c.apply(a,arguments)},d)};
g.mh=function(a){for(var b in eh)eh[b][0]==a&&g.ih(b)};
g.nh=function(a){this.Pb=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.J(window,"mousemove",(0,g.v)(this.Y,this));this.M=g.Vf((0,g.v)(this.N,this),25)};
oh=function(){g.C.call(this);this.C=[]};
ph=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.$a(b);this.assets=a.assets||{};this.attrs=a.attrs||g.$a(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.qh=function(a){a instanceof ph||(a=new ph(a));return a};
g.rh=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(g.ea(c))};
g.sh=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0,void 0):(b=Nf(),b.push([a,"WARNING",void 0,void 0,void 0,void 0]),g.Lf("ERRORS",b))};
g.zh=function(){g.Wf(g.th);g.Wf(g.uh);g.uh=0;if(!g.Wa(g.vh)){for(var a in g.vh){var b=wh[a];b&&b.isReady()&&(aba(a,b),delete g.vh[a],xh=!1)}g.Wa(g.vh)||g.yh()}};
bba=function(){var a=[];for(e in g.vh){var b=Ah[e]||{};Ah[e]=b;for(var c in g.vh[e]){var d=Bh(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round((0,g.Ch)());for(var f in Ah)b=Ah[f],b.eventType=f in Dh?Dh[f]:"UNKNOWN_TYPE",c=Eh[f],b.metricIntervalMs=c?e-c:e-g.Fh,a.push(b),Eh[f]=e,delete Ah[f];return a};
g.yh=function(){g.tg("web_gel_timeout_cap")&&!g.uh&&(g.uh=g.Uf(g.zh,6E4));g.Wf(g.th);var a=g.ug("web_gel_debounce_ms",1E4);a=g.E("LOGGING_BATCH_TIMEOUT",g.Gh||a);g.tg("shorten_initial_gel_batch_timeout")&&xh&&(a=cba);g.th=g.Uf(g.zh,a)};
Bh=function(a,b){b=void 0===b?"":b;g.vh[a]=g.vh[a]||{};g.vh[a][b]=g.vh[a][b]||[];return g.vh[a][b]};
aba=function(a,b){var c=dba[a],d=Ah[a]||{};Ah[a]=d;var e=Math.round((0,g.Ch)());for(q in g.vh[a]){var f=g.ab({context:g.Hh(b.C||g.Ih())});f[c]=Bh(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;var k=Jh[q];if(k)a:{var l=q;if(k.videoId)var m="VIDEO";else if(k.playlistId)m="PLAYLIST";else break a;f.credentialTransferTokenTargetId=k;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Jh[q];
f.requestTimeMs=e;g.tg("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(k=g.E("EVENT_ID",void 0))m=(g.E("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>eba&&(m=1),g.Lf("BATCH_CLIENT_COUNTER",m),k={serializedEventId:k,clientCounter:m},f.serializedClientEventId=k,Kh&&Lh&&g.tg("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Kh,roundtripMs:Lh}),Kh=k,Lh=0;g.Mh(b,a,f,{retry:fba.has(a),onSuccess:(0,g.v)(gba,this,(0,g.Ch)())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;
var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e};
gba=function(a){Lh=Math.round((0,g.Ch)()-a)};
g.Ph=function(a){var b=void 0===a?{}:a;a=void 0===b.by?!0:b.by;b=void 0===b.JF?!1:b.JF;if(null==g.u("_lact",window)){var c=parseInt(g.E("LACT"),10);c=isFinite(c)?(0,g.Jc)()-Math.max(c,0):-1;g.r("_lact",c,window);g.r("_fact",c,window);-1==c&&g.Nh();g.J(document,"keydown",g.Nh);g.J(document,"keyup",g.Nh);g.J(document,"mousedown",g.Nh);g.J(document,"mouseup",g.Nh);a&&(b?g.J(window,"touchmove",function(){Oh("touchmove",200)},{passive:!0}):(g.J(window,"resize",function(){Oh("resize",200)}),g.J(window,
"scroll",function(){Oh("scroll",200)})));
new g.nh(function(){Oh("mouse",100)});
g.J(document,"touchstart",g.Nh,{passive:!0});g.J(document,"touchend",g.Nh,{passive:!0})}};
Oh=function(a,b){Qh[a]||(Qh[a]=!0,g.ng(function(){g.Nh();Qh[a]=!1},b))};
g.Nh=function(){null==g.u("_lact",window)&&g.Ph();var a=(0,g.Jc)();g.r("_lact",a,window);-1==g.u("_fact",window)&&g.r("_fact",a,window);(a=g.u("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Rh=function(){var a=g.u("_lact",window);return null==a?-1:Math.max((0,g.Jc)()-a,0)};
g.Vh=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.Ch)());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.Rh())};g.tg("log_sequence_info_on_gel_web")&&d.Fe&&(a=e.context,b=d.Fe,Sh[b]=b in Sh?Sh[b]+1:0,a.sequence={index:Sh[b],groupKey:b},d.Fu&&delete Sh[d.Fe]);(d=d.Of)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Jh[d.token]=a,d=Bh("log_event",d.token)):d=Bh("log_event");d.push(e);c&&(wh.log_event=new c);c=g.ug("web_logging_max_batch")||
100;e=(0,g.Ch)();d.length>=c?g.zh():e-g.Th>=g.Uh&&(g.yh(),g.Th=e)};
Wh=function(){return"INNERTUBE_API_KEY"in g.Kf&&"INNERTUBE_API_VERSION"in g.Kf};
g.Ih=function(){return{innertubeApiKey:g.E("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.E("INNERTUBE_API_VERSION",void 0),dy:g.E("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ey:g.E("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),gy:g.E("INNERTUBE_CONTEXT_HL",void 0),fy:g.E("INNERTUBE_CONTEXT_GL",void 0),hy:g.E("INNERTUBE_HOST_OVERRIDE",void 0)||"",iy:!!g.E("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}};
g.Hh=function(a){a={client:{hl:a.gy,gl:a.fy,clientName:a.ey,clientVersion:a.innertubeContextClientVersion,configInfo:a.dy}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=g.E("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=g.E("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=g.E("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request=
{internalExperimentFlags:b});g.E("DELEGATED_SESSION_ID")&&!g.tg("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.E("DELEGATED_SESSION_ID")});return a};
Xh=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.E("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.VQ||g.E("AUTHORIZATION"))||(a?b="Bearer "+g.u("gapi.auth.getToken")().TQ:b=Jd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.E("SESSION_INDEX",0),g.tg("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.E("DELEGATED_SESSION_ID")));return d};
Yh=function(a){a=Object.assign({},a);delete a.Authorization;var b=Jd();if(b){var c=new jf;c.update(g.E("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=wc(c.digest(),3)}return a};
g.$h=function(a,b,c,d){g.Zh.set(""+a,b,{wl:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})};
g.ai=function(a,b,c){g.Zh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.bi=function(a){var b;(b=g.If(a))||(a=new Df(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.vf(a):null;this.F=document.domain||window.location.hostname};
hba=function(a,b,c,d){if(d)return null;d=ci.get("nextId",!0)||1;var e=ci.get("requests",!0)||{};e[d]={method:a,request:b,authState:Yh(c),requestTime:Math.round((0,g.Ch)())};ci.set("nextId",d+1,86400,!0);ci.set("requests",e,86400,!0);return d};
di=function(a){var b=ci.get("requests",!0)||{};delete b[a];ci.set("requests",b,86400,!0)};
ei=function(a){var b=ci.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round((0,g.Ch)())-d.requestTime)){var e=d.authState,f=Yh(Xh(!1));g.Za(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round((0,g.Ch)())),g.Mh(a,d.method,e,{}));delete b[c]}}ci.set("requests",b,86400,!0)}};
g.fi=function(a){var b=this;this.C=null;a?this.C=a:g.tg("delay_gel_until_config_ready")?Wh()&&(this.C=g.Ih()):this.C=g.Ih();g.mg(function(){ei(b)},5E3)};
g.Mh=function(a,b,c,d){!g.E("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&g.Rf(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,er:"JSON",Oc:function(){d.Oc()},
hq:d.Oc,onSuccess:function(A,G){if(d.onSuccess)d.onSuccess(G)},
Zi:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,G){if(d.onError)d.onError(G)},
gq:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.hy;k&&(f=k);k=a.C.iy||!1;var l=Xh(k,f,d);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=g.Ag(""+f+("/youtubei/"+a.C.innertubeApiVersion+"/"+b),{alt:"json",key:a.C.innertubeApiKey}),q;if(d.retry&&g.tg("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(q=hba(b,c,l,k))){var t=e.onSuccess,y=e.Zi;e.onSuccess=function(A,G){di(q);t(A,G)};
c.Zi=function(A,G){di(q);y(A,G)}}try{g.tg("use_fetch_for_op_xhr")?Xaa(m,e):g.Ug(m,e)}catch(A){if("InvalidAccessError"==A)q&&(di(q),q=0),g.Rf(Error("An extension is blocking network request."));
else throw A;}q&&g.mg(function(){ei(a)},5E3)};
g.gi=function(a,b,c){c=void 0===c?{}:c;var d=g.fi;g.E("ytLoggingEventsDefaultDisabled",!1)&&g.fi==g.fi&&(d=null);g.Vh(a,b,d,c)};
g.hi=function(){g.tg("log_web_meta")&&bba().forEach(function(a){g.gi("delayedEventMetricCaptured",a)})};
g.ii=function(a){this.C=a};
g.ji=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.ji(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
li=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Jc)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ki)for(a=1,b=0;b<ki.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ki.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.qi=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(mi==a)return;mi=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Rh()>b)&&"visible"==g.$g()){b=-1;g.ni&&(b=Math.round((0,g.Ch)()-g.ni));var c=String;var d=g.u("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Jc)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:oi,index:String(pi),lastEventDeltaMs:String(b),trigger:a};g.Vh("foregroundHeartbeat",
a,g.fi);g.r("_fact",-1,window);pi++;g.ni=(0,g.Ch)()}};
g.ri=function(a){a&&g.Vh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:oi,clientScreenNonce:a},g.fi)};
si=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
ti=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
ui=function(a){return g.E(ti(void 0===a?0:a),void 0)};
g.vi=function(){var a=ui(0),b;a?b=new g.ii({veType:a,youtubeData:void 0}):b=null;return b};
wi=function(){var a=g.E("csn-to-ctt-auth-info");a||(a={},g.Lf("csn-to-ctt-auth-info",a));return a};
g.xi=function(a){a=void 0===a?0:a;var b=g.E(si(a));b||0!=a||(g.tg("kevlar_client_side_screens")||g.tg("c3_client_side_screens")?b="UNDEFINED_CSN":b=g.E("EVENT_ID"));return b?b:null};
iba=function(a,b,c){var d=wi();(c=g.xi(c))&&delete d[c];b&&(d[a]=b)};
g.yi=function(a){return wi()[a]};
g.zi=function(a,b,c,d){c=void 0===c?0:c;if(a!==g.E(si(c))||b!==g.E(ti(c)))iba(a,d,c),g.Lf(si(c),a),g.Lf(ti(c),b),0==c&&(b=function(){setTimeout(function(){g.ri(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
g.Ai=function(a,b){this.version=a;this.args=b};
g.Bi=function(a,b){this.topic=a;this.C=b};
g.Di=function(a,b){var c=Ci();c&&c.publish.call(c,a.toString(),a,b)};
g.Hi=function(a,b,c){var d=Ci();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,k){var l=g.u("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(Ei[e])try{if(k&&a instanceof g.Bi&&a!=f)try{var m=a.C,q=k;if(!q.args||!q.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.Je){var t=new m;m.Je=t.version}var y=m.Je}catch(A){}if(!y||q.version!=y)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=Reflect.construct(m,
g.Ra(q.args))}catch(A){throw A.message="yt.pubsub2.Data.deserialize(): "+A.message,A;}}catch(A){throw A.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+A.message,A;}b.call(c||window,k)}catch(A){g.Pf(A)}},Fi[a.toString()]?g.rg()?g.ng(l):g.Uf(l,0):l())});
Ei[e]=!0;Gi[a.toString()]||(Gi[a.toString()]=[]);Gi[a.toString()].push(e);return e};
lba=function(){var a=jba,b=g.Hi(kba,function(c){a.apply(void 0,arguments);g.Ii(b)},void 0);
return b};
g.Ii=function(a){var b=Ci();b&&("number"===typeof a&&(a=[a]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete Ei[c]}))};
Ci=function(){return g.u("ytPubsub2Pubsub2Instance")};
Ji=function(a){g.Ai.call(this,1,arguments);this.csn=a};
g.Pi=function(a,b,c){Ni.push({zF:a,payload:b,options:c});Oi||(Oi=lba())};
jba=function(a){if(Ni){for(var b=g.da(Ni),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,g.Vh(c.zF,c.payload,null,c.options));Ni.length=0}Oi=0};
g.Qi=function(a,b,c){(0,g.B)(b,function(d){var e=c;e=void 0===e?!1:e;d={csn:a,ve:g.ji(d),eventType:e?16:8};e={Of:g.yi(a),Fe:a,Fu:e};"UNDEFINED_CSN"==a?g.Pi("visualElementHidden",d,e):g.Vh("visualElementHidden",d,g.fi,e)})};
Ri=function(){var a=g.vi(),b=g.xi();b&&a&&g.Qi(b,[a],!0)};
g.Si=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Qf(d):null;this.H=e?Qf(e):null;this.G=[];this.C=this.F=0};
g.Ti=function(a){g.og(a.F);a.F=g.ng((0,g.v)(a.init,a))};
g.Wi=function(a){a.name in Ui&&Vi(a.name);Ui[a.name]={reqs:[],disable:(0,g.v)(a.disable,a)};(0,g.B)(a.deps,function(b){if(!(b in Ui))throw Error("Module "+b+" required by "+a.name);Ui[b].reqs.push(a.name)});
a.enable()};
Vi=function(a){if(a in Ui){var b=Ui[a];(0,g.B)(b.reqs,function(c){Vi(c)});
try{b.disable()}catch(c){}delete Ui[a]}};
Yi=function(a){Jf(g.Xi,arguments)};
g.Zi=function(a){return a in g.Xi};
$i=function(a){Jf(g.Xi,arguments)};
g.aj=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Pb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Db(g.Hb(a)),"about:invalid#zClosurez"===a?a="":(a=g.Zb(g.ac(a)),a=g.fc(g.mf(a))),g.pb(a)||(a=g.Xc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.cd(a).body.appendChild(a))):e?Ng(a,b,"POST",e,d):g.E("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ng(a,b,"GET","",d):mba(a,b)||nba(a,b))};
mba=function(a,b){if(!Of("web_use_beacon_api_for_ad_click_server_pings"))return!1;var c=g.fd(g.hd(5,a));return c&&-1!=c.indexOf("/aclk")&&"1"===g.sd(a,"ae")&&"1"===g.sd(a,"act")?bj(a)?(b&&b(),!0):!1:!1};
bj=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
nba=function(a,b){var c=new Image,d=""+oba++;cj[d]=c;c.onload=c.onerror=function(){b&&cj[d]&&b();delete cj[d]};
c.src=a};
g.dj=function(a,b){a=a||"";var c=a.match(pba);spf.style.load(a,c?c[1]:"",b)};
gj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!ej(a)||c.some(function(e){return!ej(e)}))throw Error("Only objects may be merged.");
c=g.da(c);for(d=c.next();!d.done;d=c.next())fj(a,d.value);return a};
fj=function(a,b){for(var c in b)if(ej(b[c])){if(c in a&&!ej(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});fj(a[c],b[c])}else if(hj(b[c])){if(c in a&&!hj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);ij(a[c],b[c])}else a[c]=b[c];return a};
ij=function(a,b){for(var c=g.da(b),d=c.next();!d.done;d=c.next())d=d.value,ej(d)?a.push(fj({},d)):hj(d)?a.push(ij([],d)):a.push(d);return a};
ej=function(a){return"object"===typeof a&&!Array.isArray(a)};
hj=function(a){return"object"===typeof a&&Array.isArray(a)};
g.jj=function(a,b,c){var d=void 0===d?!0:d;var e=g.E("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=g.id(window.location.href);f&&e.push(f);f=g.id(a);if(g.Na(e,f)||!f&&g.nb(a,"/"))if(g.tg("autoescape_tempdata_url")&&(e=document.createElement("a"),g.cc(e,a),a=e.href),a&&(a=g.jd(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.xi()},b)),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+g.kc(a).toString(36),b=b?g.od(b):"",g.$h(d,b,c||5))):(c=b,b="ST-"+g.kc(a).toString(36),
c=c?g.od(c):"",g.$h(b,c,5))};
g.kj=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.ec(d.location,g.pd(a,b)+c)};
g.lj=function(a,b){b&&g.jj(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.kj(a)};
g.mj=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.E("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.jj(a,b);if(c)return!1;g.lj(a);return!0};
qj=function(a,b,c,d){g.C.call(this);var e=this;this.H=this.Za=a;this.ha=b;this.N=!1;this.api={};this.na=this.M=null;this.Y=new g.pf;g.Md(this,this.Y);this.D={};this.la=this.za=this.F=this.ob=this.C=null;this.T=!1;this.G=this.J=null;this.jb={};this.Pd=["onReady"];this.mb=null;this.sb=NaN;this.X={};this.L=d;nj(this);this.Jh("WATCH_LATER_VIDEO_ADDED",this.fD.bind(this));this.Jh("WATCH_LATER_VIDEO_REMOVED",this.gD.bind(this));this.Jh("onAdAnnounce",this.Ct.bind(this));this.Hb=new oh(this);g.Md(this,this.Hb);
this.aa=0;c?this.aa=g.Uf(function(){e.loadNewVideoConfig(c)},0):d&&(oj(this),pj(this))};
oj=function(a){var b;a.L?b=a.L.rootElementId:b=a.C.attrs.id;a.F=b||a.F;"video-player"==a.F&&(a.F=a.ha,a.C.attrs.id=a.ha);a.H.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F)};
rj=function(a){a.C&&!a.C.loaded&&(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
uj=function(a){var b=!0,c=sj(a);c&&a.C&&(a=tj(a),b=g.F(c,"version")===a);return b&&!!g.u("yt.player.Application.create")};
pj=function(a){if(!a.qb()&&!a.T){var b=uj(a);if(b&&"html5"==(sj(a)?"html5":null))a.la="html5",a.N||vj(a);else if(wj(a),a.la="html5",b&&a.G)a.Za.appendChild(a.G),vj(a);else{a.C&&(a.C.loaded=!0);var c=!1;a.J=function(){c=!0;var d=g.u("yt.player.Application.create"),e=a.C?a.C.clone():void 0;d(a.Za,e,a.L);vj(a)};
a.T=!0;b?a.J():(g.gg(tj(a),a.J),g.dj(a.L?a.L.cssUrl:a.C.assets.css),xj(a)&&!c&&g.r("yt.player.Application.create",null,void 0))}}};
sj=function(a){var b=g.z(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
vj=function(a){if(!a.qb()){var b=sj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.T=!1,b.isNotServable&&a.C&&b.isNotServable(a.C.args.video_id)||qba(a)):a.sb=g.Uf(function(){vj(a)},50)}};
qba=function(a){nj(a);a.N=!0;var b=sj(a);b.addEventListener&&(a.M=yj(a,b,"addEventListener"));b.removeEventListener&&(a.na=yj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=yj(a,b,e))}for(var f in a.D)a.M(f,a.D[f]);rj(a);a.za&&a.za(a.api);a.Y.oa("onReady",a.api)};
yj=function(a,b,c){var d=b[c];return function(){try{return a.mb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.mb=e,g.Rf(e))}}};
nj=function(a){a.N=!1;if(a.na)for(var b in a.D)a.na(b,a.D[b]);for(var c in a.X)g.Wf(parseInt(c,10));a.X={};a.M=null;a.na=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Jh.bind(a);a.api.removeEventListener=a.PF.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.bv.bind(a);a.api.getPlayerType=a.ov.bind(a);a.api.getCurrentVideoConfig=a.Xu.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.bz.bind(a)};
zj=function(a,b){var c=b;if("string"==typeof b){if(a.jb[b])return a.jb[b];c=function(){var d=g.u(b);d&&d.apply(g.p,arguments)};
a.jb[b]=c}return c?c:null};
rba=function(a,b){var c="ytPlayer"+b+a.ha;a.D[b]=c;g.p[c]=function(d){var e=g.Uf(function(){a.qb()||(a.Y.oa(b,d),g.Xa(a.X,String(e)))},0);
g.Ya(a.X,String(e),!0)};
return c};
wj=function(a){a.cancel();nj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=sj(a);b&&(uj(a)||!xj(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.ad(a.Za)};
xj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
tj=function(a){return a.L?a.L.jsUrl:a.C.assets.js};
g.Cj=function(a,b){var c=void 0===c?!0:c;a="string"===typeof a?g.Qc(a):a;var d=g.Aj+"_"+g.Ga(a),e=g.Bj[d];if(e&&c)return b&&b.args&&b.args.fflags&&b.args.fflags.includes("web_player_remove_playerproxy=true")?e.api.loadVideoByPlayerVars(b.args||null):e.loadNewVideoConfig(b),e.api;e=new qj(a,d,b,void 0);g.Bj[d]=e;g.H("player-added",e.api);g.Kd(e,g.w(sba,e));return e.api};
sba=function(a){delete g.Bj[a.getId()]};
g.Dj=function(a){if(!a)return null;var b=g.Aj+"_"+g.Ga(a),c=g.Bj[b];c||(c=new qj(a,b),g.Bj[b]=c);return c.api};
g.Ej=function(a){return g.Dj(document.getElementById(a))};
g.Gj=function(a,b){var c={};c.key=a;c.value=b;return Fj().then(function(d){return new Promise(function(e,f){try{var k=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);k.onsuccess=function(){e()};
k.onerror=function(){f()}}catch(l){f(l)}})})};
g.Hj=function(a){var b=new g.rh("Error accessing DB");return Fj().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=function(){var k=f.result;d(k?k.value:null)};
f.onerror=function(){b.params={key:a,source:"onerror"};e(b)}}catch(k){b.params={key:a,
thrownError:String(k)},e(b)}})},function(){return null})};
Fj=function(){return Ij?Promise.resolve(Ij):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Ij=d,a(Ij);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Fj()};
c.onupgradeneeded=tba})};
tba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
uba=function(a){if(Jj.getEntriesByType){var b=Jj.getEntriesByType("paint");if(b=g.La(b,function(c){return"first-paint"==c.name}))return Math.round(a.navigationStart+b.startTime)}return a.msFirstPaint?Math.max(0,a.msFirstPaint):0};
Kj=function(a,b){g.Ai.call(this,1,arguments)};
Lj=function(a,b){g.Ai.call(this,1,arguments)};
Nj=function(a){var b=Mj(a);if(b.aft)return b.aft;a=g.E((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
Oj=function(a){g.r("ytglobal.timingready_",a,void 0)};
Pj=function(a){return!!g.u("yt.timing."+(a||"")+"pingSent_")};
Qj=function(a,b){g.r("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Sj=function(a){return g.u("ytcsi."+(a||"")+"data_")||Rj(a)};
Tj=function(a){a=Sj(a);a.info||(a.info={});return a.info};
Mj=function(a){a=Sj(a);a.tick||(a.tick={});return a.tick};
Uj=function(a){var b=Sj(a).nonce;b||(b=li(),Sj(a).nonce=b);return b};
Rj=function(a){var b={tick:{},info:{}};g.r("ytcsi."+(a||"")+"data_",b,void 0);return b};
Wj=function(a){var b=Mj(a||""),c=Nj(a);c&&!Vj&&(g.Di(vba,new Kj(Math.round(c-b._start),a)),Vj=!0)};
Xj=function(){var a=g.u("ytcsi.debug");a||(a=[],g.r("ytcsi.debug",a,void 0),g.r("ytcsi.reference",{},void 0));return a};
Zj=function(a){a=a||"";var b=Yj();if(b[a])return b[a];var c=Xj(),d={timerName:a,info:{},tick:{}};c.push(d);return b[a]=d};
Yj=function(){var a=g.u("ytcsi.reference");if(a)return a;Xj();return g.u("ytcsi.reference")};
ak=function(){this.C=0};
bk=function(){ak.C||(ak.C=new ak);return ak.C};
dk=function(a,b){ck[b]=ck[b]||{count:0};var c=ck[b];c.count++;c.time=(0,g.Ch)();a.C||(a.C=g.mg(a.F,5E3));if(5<c.count){if(6===c.count&&1>1E5*Math.random())if(c=new g.rh("CSI data exceeded logging limit with key"),c.params={key:b},0===b.indexOf("info"))g.sh(c);else{var d=g.u("yt.logging.errors.log");d?d(c,"ERROR",void 0,void 0,void 0,void 0):(d=Nf(),d.push([c,"ERROR",void 0,void 0,void 0,void 0]),g.Lf("ERRORS",d))}return!0}return!1};
ek=function(a){return!!g.E("FORCE_CSI_ON_GEL",!1)||g.tg("csi_on_gel")||!!Sj(a).useGel};
gk=function(a,b,c){var d=fk(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||(0,g.Ch)();return ek(c)?(Zj(c||"").tick[a]=b||(0,g.Ch)(),d=Uj(c),"_start"===a?(a=bk(),dk(a,"baseline_"+d)||g.gi("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):bk().tick(a,d,b),Wj(c),!0):!1};
jk=function(a,b,c){c=fk(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a in hk){c=hk[a];g.Na(wba,c)&&(b=!!b);a in ik&&"string"===typeof b&&(b=ik[a]+b.toUpperCase());a=c.split(".");d=c={};for(var e=0;e<a.length-1;e++){var f=a[e];d[f]={};d=d[f]}d[a[a.length-1]]=b;return gj({},c)}g.Na(xba,a)||(b=new g.rh("Unknown label logged with GEL CSI"),b.params={label:a},g.Rf(b))};
fk=function(a){a=Sj(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel};
kk=function(a){a=fk(a);"gelInfos"in a||(a.gelInfos={});return a.gelInfos};
mk=function(a,b,c){null!==b&&(Tj(c)[a]=b,ek(c)?(a=jk(a,b,c))&&lk(a,c):Zj(c||"").info[a]=b)};
lk=function(a,b){if(ek(b)){var c=Zj(b||"");gj(c.info,a);gj(kk(b),a);c=Uj(b);bk().info(a,c)}};
nk=function(){Rj(void 0);yba();Qj(!1,void 0);g.E("TIMING_ACTION")&&g.Lf("PREVIOUS_ACTION",g.E("TIMING_ACTION"));g.Lf("TIMING_ACTION","")};
Cba=function(){var a=g.E("TIMING_ACTION",void 0),b=g.E("TIMING_AFT_KEYS");Zj("").info.actionType=a;b&&g.Lf("TIMING_AFT_KEYS",b);g.Lf("TIMING_ACTION",a);a=g.E("TIMING_INFO",{});for(var c in a)mk(c,a[c]);mk("is_nav",1);(c=g.xi())&&mk("csn",c);(c=g.E("PREVIOUS_ACTION",void 0))&&!ek()&&mk("pa",c);c=Tj();a=g.E("CLIENT_PROTOCOL");b=g.E("CLIENT_TRANSPORT");a&&mk("p",a);b&&mk("t",b);mk("yt_vis",zba());if("cold"==c.yt_lt){mk("yt_lt","cold");a=Jj.timing||{};a.navigationStart&&(g.ok("srt",a.responseStart),1!=
c.prerender&&pk("n",a.navigationStart));c=uba(a);0<c&&g.ok("fpt",c);qk(a);Jj.getEntriesByType&&Aba();c=[];if(document.querySelector&&Jj&&Jj.getEntriesByName)for(var d in rk)a=rk[d],Bba(d,a)&&c.push(a);c.length&&mk("rc",c.join(","))}ek(void 0)&&(d={actionType:sk[g.E("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:sk[g.E("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"},c=Uj(void 0),bk().info(d,c));d=Tj();a=Mj();if("cold"===d.yt_lt&&(c=fk(),b=c.gelTicks?c.gelTicks:c.gelTicks={},
c=c.gelInfos?c.gelInfos:c.gelInfos={},ek())){for(var e in a)"tick_"+e in b||gk(e,a[e]);e=kk();a=Uj();b={};for(var f in d)if(!("info_"+f in c)){var k=jk(f,d[f]);k&&(gj(e,k),gj(b,k))}bk().info(b,a)}Oj(!0);g.tk(!1)};
g.ok=function(a,b,c){var d=Mj(c);if(g.tg("use_first_tick")&&uk(a,c))return d[a];if(!b&&"_"!=a[0]){var e=a;Jj.mark&&(g.nb(e,"mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Jj.mark(e))}e=b||(0,g.Ch)();d[a]=e;gk(a,b,c)||(g.tk(!1,c),Zj(c||"").tick[a]=b||(0,g.Ch)());return d[a]};
pk=function(a,b){mk("yt_sts",a,void 0);g.ok("_start",b,void 0)};
uk=function(a,b){var c=Mj(b);return a in c};
vk=function(a,b){if(null!==b)if(Tj(void 0)[a]=b,ek(void 0)){var c=jk(a,b,void 0);c&&lk(c,void 0)}else Zj("").info[a]=b};
qk=function(a){g.ok("nreqs",a.requestStart,void 0);g.ok("nress",a.responseStart,void 0);g.ok("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.ok("nrs",a.redirectStart,void 0),g.ok("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.ok("ndnss",a.domainLookupStart,void 0),g.ok("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.ok("ntcps",a.connectStart,void 0),g.ok("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.ok("nstcps",a.secureConnectionStart,void 0),g.ok("ntcpe",a.connectEnd,void 0))};
g.tk=function(a,b){if(!Pj(b)){var c=g.E((b||"")+"TIMING_ACTION",void 0),d=Mj(b);if(g.u("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&Nj(b))if(Wj(b),a||b)wk(b);else{c=!0;var e=g.E("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&wk(b)}}};
zba=function(){switch(g.$g()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
wk=function(a){if(!ek(a)){var b=Mj(a),c=Tj(a),d=b._start,e=g.E("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:g.E((a||"")+"TIMING_ACTION",void 0)},k=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var l=window.location.protocol+g.u("ytplayer.config.assets.js");(l=Jj.getEntriesByName?Jj.getEntriesByName(l)[0]:null)?c.h5jse=Math.round(c.h5jse-l.responseEnd):delete c.h5jse}b.aft=Nj(a);var m=Mj(a);l=m.pbr;var q=m.vc;m=m.pbs;l&&q&&m&&l<q&&q<m&&Tj(a).yt_pvis&&"youtube"==e&&(mk("yt_lt","hot_bg",a),e=b.vc,
l=b.pbs,delete b.aft,c.aft=Math.round(l-e));for(var t in c)"_"!=t.charAt(0)&&(f[t]=c[t]);b.ps=(0,g.Ch)();t={};e=[];for(var y in b)"_"!=y.charAt(0)&&(l=Math.round(b[y]-d),t[y]=l,e.push(y+"."+l));f.rt=e.join(",");(b=g.u("ytdebug.logTiming"))&&b(f,t);c=!!c.ap;g.tg("debug_csi_data")&&(b=g.u("yt.timing.csiData"),b||(b=[],g.r("yt.timing.csiData",b,void 0)),b.push({page:location.href,time:new Date,args:f}));b="";for(var A in f)f.hasOwnProperty(A)&&(b+="&"+A+"="+f[A]);f="/csi_204?"+b.substring(1);if(window.navigator&&
window.navigator.sendBeacon&&c){var G=void 0===G?"":G;bj(f,G)||g.aj(f,void 0,void 0,void 0,G)}else g.aj(f);Qj(!0,a);g.Di(Dba,new Lj(t.aft+(k||0),a))}};
xk=function(a){if(!ek(void 0)&&!Pj(void 0)){var b=g.E("CSI_SERVICE_NAME","youtube");g.E("TIMING_ACTION",void 0)&&b&&(g.ok("aa",void 0,void 0),mk("ap",1,void 0),mk("yt_fss",a,void 0),wk(void 0))}};
Aba=function(){var a=window.location.protocol,b=Jj.getEntriesByType("resource");b=(0,g.yk)(b,function(c){return 0==c.name.indexOf(a+"//web.archive.org/web/20200201002605/https://fonts.gstatic.com/s/")});
(b=(0,g.ff)(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.ok("wffs",Math.round((Jj.timing||{}).navigationStart+b.startTime)),g.ok("wffe",Math.round((Jj.timing||{}).navigationStart+b.responseEnd)))};
Bba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);g.wa()&&c.setAttribute("nonce",g.wa());return d?(c=Jj.getEntriesByName(d))&&c[0]&&(c=c[0],d=Jj.timing.navigationStart,g.ok("rsf_"+b,d+Math.round(c.fetchStart)),g.ok("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(d=Tj(void 0),e=kk(void 0),"rc"in d||"rc"in e||mk("rc",""),0===c.transferSize))?
!0:!1:!1};
Jba=function(){zk++;var a=g.Uc(),b=new g.wd(0,0,a.width,a.height);vk("vph",a.height);vk("vpw",a.width);g.ok("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[];Ak.start();for(var e=0;e<c;e++){var f=a[e];Bk(f,b)&&(f=Eba(f),f.then(Fba),d.push(f),Ck.push(f))}g.ok("vpcc");b=g.He(d).then(Gba);g.Je(b,Hba);b.then(Iba);Ck.push(b);return b};
Iba=function(){Ak.stop()};
Hba=function(){g.ok("vpr")};
Bk=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.Zg(c);if(e in Ek)return!0;if(e in Fk)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Fk[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Fk[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Ek[d[c]]=!0;return!0};
Gba=function(a){var b=g.Uc();b=new g.wd(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Bk(a[d].ay,b)&&c<f&&(c=f)}return c};
Eba=function(a){var b=zk;return new g.Be(function(c,d){var e={ay:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){zk!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},Gk.push(a))})};
Fba=function(a){Ak.start();a=a.time;Hk<a&&(Hk=a,g.ok("lim",a))};
Kba=function(){g.ok("vptl",Hk);g.ok("vpl",Hk)};
Lba=function(){Ck.forEach(function(a){a.cancel()});
Hk=Ck.length=0;Ek={};Fk={};Gk.forEach(function(a){a.slt=void 0});
Gk.length=0};
g.Ik=function(a,b){g.aj("/gen_204?"+a,b)};
Mba=function(a){if(null==a)return[];var b=[];g.tg("ima_prevent_mpu_queries_on_cached_playback")&&0>Jk.indexOf("ad3_module")&&Jk.push("ad3_module");Jk.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Kk=function(){return g.D(g.z("page-container"),"remote-connected")};
Nba=function(){Lk=g.Vf(Mk,5E3);var a=g.Nk();a&&(a.addEventListener("onReady",Mk),a.addEventListener("onStateChange",Mk))};
Ok=function(a){for(var b in g.Bj){var c=g.Bj[b];c&&c.cancel()}if(a=a||null)g.Cj("player-api",a),a=g.qh(a),a.loaded=!0;Mk();g.r("ytplayer.config",a,void 0)};
g.Nk=function(){return g.Ej("player-api")};
Mk=function(){var a=g.Nk();if(a){var b=1==(a&&a.isReady()?a.getPlayerState():void 0),c="watch"==g.E("PAGE_NAME"),d=g.Kk();!b||c||d||a.pauseVideo()}};
Qk=function(){g.ok("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){g.ok("cpt");g.H("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(g.ok("cpt"),g.H("on_cpt_tick",(new Date).getTime())):setTimeout(function(){g.ok("cpt");
g.H("on_cpt_tick",(new Date).getTime())},0);
Oba();g.E("CSI_VIEWPORT")&&(Pk=Jba(),Pk.then(function(a){g.ok("vpl",a);Pk=null},function(){}))};
Oba=function(){Rk("init");var a=g.E("PAGE_NAME",void 0);a&&Rk("init-"+a)};
Rk=function(a){g.rg()?Sk.push(g.ng(g.w(g.dg,a),0)):g.H(a)};
Tk=function(){g.pg(Sk);Sk.length=0;Lba();Pk&&(Pk.cancel(),Pk=null);var a=g.E("PAGE_NAME",void 0);a&&g.dg("dispose-"+a);g.dg("dispose")};
Pba=function(){Qk()};
Qba=function(){g.E("TIMING_REPORT_ON_UNLOAD")&&g.tk(!0);xk("u");g.qi("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Ri();g.hi();g.zh();Tk();g.dg("pageunload")};
Uk=function(){g.Nh()};
Vk=function(){window.yt_spf_loaded_history=!0;g.Nh()};
$k=function(){Wk=1;Xk=Yk=0;g.E("TIMING_REPORT_ON_UNLOAD")&&g.tk(!0);if(g.tg("warm_load_nav_start_web")){var a=Yj();a[""]&&delete a[""];var b={timerName:"",info:{},tick:{}};Xj().push(b);a[""]=b;xk("n");nk();Oj(!1);g.Lf("TIMING_AFT_KEYS",[]);mk("yt_lt","warm");g.Lf("TIMING_ACTION","");g.Lf("TIMING_WAIT",[]);delete g.E("TIMING_INFO",{}).yt_lt;pk("n")}else xk("n"),nk(),pk("n");a="nr";Jj.mark&&(g.nb(a,"mark_")||(a="mark_"+a),Jj.mark(a));Zk(Rba);Ri();g.dg("navigate")};
cl=function(a){a=a.detail.part||a.detail.partial;g.ok("nc"+Yk);++Yk;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.ok("bc");else{var b=1==Wk;Wk=2;b?(Zk(Sba),al()):Zk(Tba);if(b=a&&a.data&&a.data.swfcfg)bl(a.timing,b.args),uk("cfg")||g.ok("cfg"),Ok(b)}};
dl=function(){g.ok("np"+Xk);++Xk};
el=function(a){a=a.detail.response;var b=1==Wk;Wk=3;b&&(Zk(Uba),al());if(b=a.data&&a.data.swfcfg)bl(a.timing,b.args),uk("cfg")||g.ok("cfg"),Ok(b)};
il=function(a){g.ok("nd");a=a.detail.response;g.fl=a.cacheKey;a=a.timing;var b=window._spf_state;g.gl.navigationCount=b&&b["nav-counter"]||0;g.tg("warm_load_nav_start_web")?g.ok("srt",a.responseStart):(pk("ne",a.responseStart),vk("srt",Math.max(0,a.responseStart-a.navigationStart)));vk("yt_lt",a.spfCached?"hot":"warm");g.ok("pfs",a.fetchStart);g.ok("pfrs",a.responseStart);"redirectStart"in a&&qk(a);Zk(hl);document.getElementById("content").style.height="";Qk();Wk=0};
jl=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Pf(a)};
kl=function(a){g.Ik(g.od({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Wba=function(){Vba();window.yt_spf_loaded_history=!1};
Xba=function(){};
al=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Tk();a=g.E("PREVIOUS_ACTION");for(var b in g.Kf)delete g.Kf[b];g.Lf("PREVIOUS_ACTION",a);g.Lf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.r("ytplayer.config",null,void 0);(b=g.Nk())&&b.stopVideo&&(b.stopVideo(),b.getLastError()&&(b=document.getElementById("movie_player"))&&b.stopVideo&&b.stopVideo());Mk()};
Zk=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.og(ll);ll=g.ng(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Wf(ml);ml=g.Uf(function(){b.className=e},c)},0)};
Vba=function(){var a=hl[0]+50;g.Wf(ml);ml=g.Uf(function(){var b=document.getElementById("progress");b&&b.parentNode.removeChild(b)},a)};
bl=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Mba(b));g.E("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Ik(g.od(c)))};
ol=function(){return"granted"!=Notification.permission?Promise.resolve():nl().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
ql=function(){pl({type:"notifications_register",data:g.E("ID_TOKEN")})};
nl=function(){var a=vg("service_worker_scope");try{return navigator.serviceWorker.getRegistration(a)}catch(b){return Promise.reject(b)}};
Yba=function(){return nl().then(rl)["catch"](function(){return!1})};
rl=function(a){return!(!a||!a.pushManager)};
pl=function(a){nl().then(function(b){if(!b||!b.active)return Promise.reject("serviceworker.postMessage");b.active.postMessage(a);return Promise.resolve()})};
Zba=function(){if(!g.E("LOGGED_IN",void 0))return Promise.resolve(!1);var a=vg("service_worker_push_force_notification_prompt_tag");return a?g.Hj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
cca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?Yba():Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=ol().then(function(){pl({type:"notifications_check_registration",data:g.E("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return $ba(a)}).then(function(c){if(c)return aca(),bca().then(function(){})})})};
$ba=function(a){return g.E("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.E("LOGGED_IN",void 0)&&(void 0===a?0:a)?Zba().then(function(b){if(b)return!0;b=[dca(),eca()];g.E("LOGGED_IN",void 0)||b.push(fca());return Promise.all(b).then(function(c){return c.every(function(d){return d})})}):Promise.resolve(!1)};
fca=function(){var a=g.ug("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.Hj("WatchCount").then(function(b){return b>=a})};
bca=function(){var a=arguments;g.tg("service_worker_push_prompt_modal_enable")&&gca();return Notification.requestPermission().then(function(b){sl();var c=document.getElementById("ticker");c&&(c.className=c.classList.remove("show"));if("granted"==b)return ol().then(function(){g.Gj("NotificationsDisabled",!1);ql();return Promise.resolve(!0)});
"denied"==b&&ql();return Promise.resolve(!1)})["catch"](function(){sl();
return Promise.reject.apply(Promise,g.ea(a))})};
aca=function(){g.Hj("PromptCount").then(function(a){return g.Gj("PromptCount",a+1)}).then(function(){return g.Gj("PromptTime",(0,g.Jc)())}).then(function(){var a=vg("service_worker_push_force_notification_prompt_tag");
if(a)return g.Hj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.Gj("PromptTags",JSON.stringify(c))})})};
dca=function(){return-1==g.ug("service_worker_push_prompt_cap")?Promise.resolve(!0):g.Hj("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.ug("service_worker_push_prompt_cap"))})};
eca=function(){var a=g.ug("service_worker_push_prompt_delay_microseconds");return a?g.Hj("PromptTime").then(function(b){return Promise.resolve((0,g.Jc)()-a>(b||0))}):Promise.resolve(!0)};
hca=function(){tl||sl()};
ul=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
gca=function(){var a=g.z("yt-push-prompt-modal-bg");tl=g.tg("service_worker_push_prompt_modal_ignore_click");a?ul(a):(a=g.Xc("div",{id:"yt-push-prompt-modal-bg"}),ul(a),document.body.appendChild(a),g.lh(document,"click",hca))};
sl=function(){var a=g.z("yt-push-prompt-modal-bg");a&&g.bd(a)};
ica=function(a){return rl(a)?cca():Promise.resolve()};
kca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(jca)})};
mca=function(){var a="/sw.js",b=g.E("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);try{var c=vl(a)["catch"](function(){return new Promise(function(){})});
g.tg("service_worker_push_enabled")&&c.then(lca).then(ica)}catch(d){if("SecurityError"!=d.name)throw d;}};
lca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
jca=function(a){a&&vl("/sw.js?0",a.scope)};
vl=function(a,b){return navigator.serviceWorker.register(a,{scope:b||vg("service_worker_scope")||"/"})};
wl=function(){g.Si.call(this,"www/base");this.D=0};
xl=function(a){(a=a.detail.name)&&Vi(a)};
g.aa=[];fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)yl=Object.setPrototypeOf;else{var zl;a:{var nca={a:!0},Al={};try{Al.__proto__=nca;zl=Al.a;break a}catch(a){}zl=!1}yl=zl?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=yl,ia=aaa(this),ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ka("Promise",function(a){function b(k){this.F=0;this.D=void 0;this.C=[];var l=this.H();try{k(l.resolve,l.reject)}catch(m){l.reject(m)}}
function c(){this.C=null}
function d(k){return k instanceof b?k:new b(function(l){l(k)})}
if(a)return a;c.prototype.F=function(k){if(null==this.C){this.C=[];var l=this;this.D(function(){l.H()})}this.C.push(k)};
var e=ia.setTimeout;c.prototype.D=function(k){e(k,0)};
c.prototype.H=function(){for(;this.C&&this.C.length;){var k=this.C;this.C=[];for(var l=0;l<k.length;++l){var m=k[l];k[l]=null;try{m()}catch(q){this.G(q)}}}this.C=null};
c.prototype.G=function(k){this.D(function(){throw k;})};
b.prototype.H=function(){function k(q){return function(t){m||(m=!0,q.call(l,t))}}
var l=this,m=!1;return{resolve:k(this.M),reject:k(this.G)}};
b.prototype.M=function(k){if(k===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof b)this.T(k);else{a:switch(typeof k){case "object":var l=null!=k;break a;case "function":l=!0;break a;default:l=!1}l?this.Y(k):this.L(k)}};
b.prototype.Y=function(k){var l=void 0;try{l=k.then}catch(m){this.G(m);return}"function"==typeof l?this.la(l,k):this.L(k)};
b.prototype.G=function(k){this.N(2,k)};
b.prototype.L=function(k){this.N(1,k)};
b.prototype.N=function(k,l){if(0!=this.F)throw Error("Cannot settle("+k+", "+l+"): Promise already settled in state"+this.F);this.F=k;this.D=l;this.J()};
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
ka("globalThis",function(a){return a||ia});
ka("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ka("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&k<e;)if(d[k++]!=b[l++])return!1;return l>=f}});
ka("String.prototype.repeat",function(a){return a?a:function(b){var c=qa(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
ka("Array.prototype.keys",function(a){return a?a:function(){return sa(this,function(b){return b})}});
ka("Array.prototype.values",function(a){return a?a:function(){return sa(this,function(b,c){return c})}});
var oca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||oca});
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
var pca=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ka("Reflect.construct",function(){return pca});
ka("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var k=0;!(f=b.next()).done;)e.push(c.call(d,f.value,k++))}else for(f=b.length,k=0;k<f;k++)e.push(c.call(d,b[k],k));return e}});
ka("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push([d,b[d]]);return c}});
ka("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
ka("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
ka("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
ka("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push(b[d]);return c}});
g.Bl=g.Bl||{};g.p=this||self;caa=/^[\w+/_-]+[=]{0,2}$/;va=null;Fa="closure_uid_"+(1E9*Math.random()>>>0);daa=0;g.Jc=Date.now||function(){return+new Date};g.x(g.Ha,Error);g.Ha.prototype.name="CustomError";g.Ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.qca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.yk=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k="string"===typeof a?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.Cl=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.ff=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.v)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.B)(a,function(f,k){e=b.call(d,e,f,k,a)});
return e};
g.Dl=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.El=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.fb.prototype.Md=!0;g.fb.prototype.Uc=function(){return this.C};
var eb={},db={},waa=g.hb("");g.rca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.sca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Fl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");var jb;g.kb.prototype.Md=!0;g.kb.prototype.Uc=function(){return this.F.toString()};
g.kb.prototype.Rk=!0;g.kb.prototype.C=function(){return 1};
jb={};g.ib={};var qb,rb,sb,tb,ub,vb,gaa;g.xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
qb=/&/g;rb=/</g;sb=/>/g;tb=/"/g;ub=/'/g;vb=/\x00/g;gaa=/[\x00&<>"']/;g.Cb.prototype.Md=!0;g.Cb.prototype.Uc=function(){return this.F.toString()};
g.Cb.prototype.Rk=!0;g.Cb.prototype.C=function(){return 1};
var iaa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,haa=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,Gb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Bb={},Ab={};g.Kb.prototype.Md=!0;g.Jb={};g.Kb.prototype.Uc=function(){return this.C};
g.Gl=g.Lb("");g.Hl=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.Il=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Nb.prototype.Md=!0;g.Mb={};g.Nb.prototype.Uc=function(){return this.C};
g.tca=g.Ob("");a:{var Jl=g.p.navigator;if(Jl){var Kl=Jl.userAgent;if(Kl){g.Pb=Kl;break a}}g.Pb=""};g.Xb.prototype.Rk=!0;g.Xb.prototype.C=function(){return this.D};
g.Xb.prototype.Md=!0;g.Xb.prototype.Uc=function(){return this.F.toString()};
var Wb={};g.bc("<!DOCTYPE html>",0);g.oe=g.bc("",0);g.Ll=g.bc("<br>",0);g.uca=g.Ja(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.Yb(g.oe);return!b.parentElement});g.ic=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.nc[" "]=g.xa;var Tl,jaa,Xl;g.Ml=g.Qb("Opera");g.Bf=g.Rb();g.Nl=g.Qb("Edge");g.Ol=g.Nl||g.Bf;g.Pl=g.Qb("Gecko")&&!(-1!=g.Pb.toLowerCase().indexOf("webkit")&&!g.Qb("Edge"))&&!(g.Qb("Trident")||g.Qb("MSIE"))&&!g.Qb("Edge");g.Ql=-1!=g.Pb.toLowerCase().indexOf("webkit")&&!g.Qb("Edge");g.Rl=g.Qb("Macintosh");g.Sl=g.Qb("Windows");g.vca=g.Qb("Linux")||g.Qb("CrOS");g.wca=g.Qb("Android");g.xca=lc();g.yca=g.Qb("iPad");g.zca=g.Qb("iPod");g.Aca=g.mc();
a:{var Ul="",Vl=function(){var a=g.Pb;if(g.Pl)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Nl)return/Edge\/([\d\.]+)/.exec(a);if(g.Bf)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Ql)return/WebKit\/(\S+)/.exec(a);if(g.Ml)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Vl&&(Ul=Vl?Vl[1]:"");if(g.Bf){var Wl=pc();if(null!=Wl&&Wl>parseFloat(Ul)){Tl=String(Wl);break a}}Tl=Ul}g.qc=Tl;jaa={};Xl=g.p.document&&g.Bf?pc():void 0;g.sc=Xl;g.Yl=Sb();g.Zl=lc()||g.Qb("iPod");g.$l=g.Qb("iPad");g.Bca=g.Vb();g.am=Tb();g.bm=g.Ub()&&!g.mc();var vc;vc={};g.xc=null;g.yc.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.yc.prototype[Symbol.iterator]=function(){return this});g.Dc="function"==typeof Uint8Array;g.zc.prototype.Zc=function(){Ac(this);return this.ec};
g.zc.prototype.F=g.Dc?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return wc(this)};
try{return JSON.stringify(this.ec&&this.Zc(),Bc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.Zc(),Bc)};
g.zc.prototype.toString=function(){Ac(this);return this.ec.toString()};
g.zc.prototype.clone=function(){return new this.constructor(Cc(this.Zc()))};g.cm=document;g.Bd=window;g.h=g.Ec.prototype;g.h.isEnabled=function(){return navigator.cookieEnabled};
g.h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.kR;d=c.secure||!1;var f=c.domain||void 0;var k=c.path||void 0;var l=c.wl}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===l&&(l=-1);c=f?";domain="+f:"";k=k?";path="+k:"";d=d?";secure":"";l=0>l?"":0==l?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Jc)()+1E3*l)).toUTCString();this.C.cookie=a+"="+b+c+k+l+d+(null!=e?";samesite="+
e:"")};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.xb)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{wl:0,path:b,domain:c});return d};
g.h.yc=function(){return g.Fc(this).keys};
g.h.Db=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Gb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.ud=g.ba(3);g.h.clear=function(){for(var a=g.Fc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Zh=new g.Ec("undefined"==typeof document?null:document);g.dm={Ha:["BC","AD"],La:["Before Christ","Anno Domini"],Ma:"JFMAMJJASOND".split(""),Na:"JFMAMJJASOND".split(""),va:"January February March April May June July August September October November December".split(" "),ra:"January February March April May June July August September October November December".split(" "),wa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ca:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ea:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Ka:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ba:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Da:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Pa:"SMTWTFS".split(""),Oa:"SMTWTFS".split(""),Ja:["Q1","Q2","Q3","Q4"],Ia:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Aa:["AM","PM"],qa:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],xa:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Ga:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],sa:6,Fa:[5,6],ua:5};
g.em=g.dm;g.em=g.dm;g.h=g.Kc.prototype;g.h.xe=g.em.sa;g.h.Mg=g.em.ua;g.h.clone=function(){var a=new g.Kc(this.date);a.xe=this.xe;a.Mg=this.Mg;return a};
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
g.h.add=function(a){if(a.C||a.months){var b=this.getMonth()+a.months+12*a.C,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);var d=Math.min(g.Gc(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),Ic(this,a.getDate()))};
g.h.ce=function(a){return[this.getFullYear(),g.jc(this.getMonth()+1,2),g.jc(this.getDate(),2)].join(a?"-":"")+""};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){return this.ce()};
g.h.valueOf=function(){return this.date.valueOf()};var laa;laa=!g.Bf||g.tc(9);g.Cca=!g.Pl&&!g.Bf||g.Bf&&g.tc(9)||g.Pl&&g.rc("1.9.1");g.fm=g.Bf&&!g.rc("9");g.Dca=g.Bf||g.Ml||g.Ql;g.h=g.Lc.prototype;g.h.clone=function(){return new g.Lc(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Lc&&g.Mc(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.Oc.prototype;g.h.clone=function(){return new g.Oc(this.width,this.height)};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!(this.width*this.height)};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Rc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.gd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.rd=/#|$/;var Eca={IJ:"allow-forms",JJ:"allow-modals",KJ:"allow-orientation-lock",LJ:"allow-pointer-lock",MJ:"allow-popups",NJ:"allow-popups-to-escape-sandbox",OJ:"allow-presentation",PJ:"allow-same-origin",QJ:"allow-scripts",RJ:"allow-top-navigation",SJ:"allow-top-navigation-by-user-activation"},naa=g.Ja(function(){return g.ud(Eca)});g.h=g.wd.prototype;g.h.clone=function(){return new g.wd(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Lc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.gm=g.Pl?"MozUserSelect":g.Ql||g.Nl?"WebkitUserSelect":null;g.ya(g.zd);g.hm=!!window.google_async_iframe_id;g.im=g.hm&&window.parent||window;g.mb(g.hb("//web.archive.org/web/20200201002605/https://fonts.googleapis.com/css"));g.Fg=(new Date).getTime();g.C.prototype.Rc=!1;g.C.prototype.qb=function(){return this.Rc};
g.C.prototype.dispose=function(){this.Rc||(this.Rc=!0,this.W())};
g.C.prototype.W=function(){if(this.wf)for(;this.wf.length;)this.wf.shift()()};g.Nd.prototype.stopPropagation=function(){this.F=!0};
g.Nd.prototype.preventDefault=function(){this.defaultPrevented=!0};var ce,Gca,uaa;g.Fca=!g.Bf||g.tc(9);ce=!g.Bf||g.tc(9);Gca=g.Bf&&!g.rc("9");uaa=function(){if(!g.p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.p.addEventListener("test",g.xa,b),g.p.removeEventListener("test",g.xa,b)}catch(c){}return a}();g.jm=g.Ql?"webkitTransitionEnd":g.Ml?"otransitionend":"transitionend";g.x(g.Od,g.Nd);var Hca={2:"touch",3:"pen",4:"mouse"};
g.Od.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Pl&&(g.oc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Rl?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Hca[a.pointerType]||"";this.state=
a.state;this.zc=a;a.defaultPrevented&&this.preventDefault()};
g.Od.prototype.stopPropagation=function(){g.Od.V.stopPropagation.call(this);this.zc.stopPropagation?this.zc.stopPropagation():this.zc.cancelBubble=!0};
g.Od.prototype.preventDefault=function(){g.Od.V.preventDefault.call(this);var a=this.zc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Gca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Pd="closure_listenable_"+(1E6*Math.random()|0),raa=0;g.h=g.Sd.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Ud(a,b,d,e);-1<k?(b=a[k],c||(b.Ph=!1)):(b=new saa(b,this.src,f,!!d,e),b.Ph=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ud(e,b,c,d);return-1<b?(Rd(e[b]),g.Pa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Rd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.Vf=g.ba(5);g.h.We=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Ud(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return g.Ua(this.listeners,function(f){for(var k=0;k<f.length;++k)if(!(c&&f[k].type!=d||e&&f[k].capture!=b))return!0;return!1})};var $d="closure_lm_"+(1E6*Math.random()|0),fe={},be=0,ie="__closure_events_fn_"+(1E9*Math.random()>>>0);g.x(g.je,g.C);g.je.prototype[Pd]=!0;g.h=g.je.prototype;g.h.ni=function(){return this.Ol};
g.h.sh=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.Wd(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.de(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.ni();if(b){var c=[];for(var d=1;b;b=b.ni())c.push(b),++d}b=this.Dt;d=a.type||a;if("string"===typeof a)a=new g.Nd(a,b);else if(a instanceof g.Nd)a.target=a.target||b;else{var e=a;a=new g.Nd(d,b);g.cb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=ke(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=ke(k,d,!0,a)&&e,a.F||(e=ke(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=ke(k,d,!1,a)&&e;return e};
g.h.W=function(){g.je.V.W.call(this);this.removeAllListeners();this.Ol=null};
g.h.O=function(a,b,c,d){return this.vd.add(String(a),b,!1,c,d)};
g.h.Be=function(a,b,c,d){return this.vd.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.vd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.vd?this.vd.removeAll(a):0};
g.h.Vf=g.ba(4);g.h.We=function(a,b,c,d){return this.vd.We(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.vd.hasListener(void 0!==a?String(a):void 0,b)};le.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var we;var xe=new le(function(){return new qe},function(a){a.reset()});
pe.prototype.add=function(a,b){var c=xe.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
pe.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
qe.prototype.set=function(a,b){this.mc=a;this.scope=b;this.next=null};
qe.prototype.reset=function(){this.next=this.scope=this.mc=null};var re,se=!1,te=new pe;Ce.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var De=new le(function(){return new Ce},function(a){a.reset()});
g.Be.prototype.then=function(a,b,c){return Ie(this,g.Da(a)?a:null,g.Da(b)?b:null,c)};
g.ye(g.Be);g.Be.prototype.cancel=function(a){if(0==this.C){var b=new g.Pe(a);ue(function(){Ke(this,b)},this)}};
g.Be.prototype.Y=function(a){this.C=0;g.Ae(this,2,a)};
g.Be.prototype.M=function(a){this.C=0;g.Ae(this,3,a)};
g.Be.prototype.J=function(){for(var a;a=Le(this);)Me(this,a,this.C,this.N);this.L=!1};
var Re=ne;g.x(g.Pe,g.Ha);g.Pe.prototype.name="cancel";g.x(g.Ue,g.C);g.h=g.Ue.prototype;g.h.pb=0;g.h.W=function(){g.Ue.V.W.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.pb=g.Se(this.Pb,void 0!==a?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Te(this.pb);this.pb=0};
g.h.isActive=function(){return 0!=this.pb};
g.h.xk=function(){this.pb=0;this.C&&this.C.call(this.F)};g.Ye="StopIteration"in g.p?g.p.StopIteration:{message:"StopIteration",stack:""};g.Xe.prototype.next=function(){throw g.Ye;};
g.Xe.prototype.bd=function(){return this};g.h=g.bf.prototype;g.h.Gb=function(){return this.D};
g.h.Db=g.ba(0);g.h.yc=function(){g.df(this);return this.C.concat()};
g.h.ud=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Gb())return!1;var c=b||Caa;g.df(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Je=this.D=this.C.length=0};
g.h.remove=function(a){return g.cf(this.F,a)?(delete this.F[a],this.D--,this.Je++,this.C.length>2*this.D&&g.df(this),!0):!1};
g.h.get=function(a,b){return g.cf(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.cf(this.F,a)||(this.D++,this.C.push(a),this.Je++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.yc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.bf(this)};
g.h.bd=function(a){g.df(this);var b=0,c=this.Je,d=this,e=new g.Xe;e.next=function(){if(c!=d.Je)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Ye;var f=d.C[b++];return a?f:d.F[f]};
return e};ef.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
ef.prototype.get=function(a){return!!this.C[a]};g.x(jf,Eaa);jf.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
jf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)kf(this,a,d),d+=this.F;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){kf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){kf(this,e);f=0;break}}this.D=f;this.H+=b}};
jf.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;kf(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};var of={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Gaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.x(g.pf,g.C);g.h=g.pf.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.qd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.xa):(c&&g.Qa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Haa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.qd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.B)(b,this.qd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Gb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Gb(b);return a};
g.h.W=function(){g.pf.V.W.call(this);this.clear();this.D.length=0};g.rf.prototype.set=function(a,b){void 0===b?this.C.remove(a):this.C.set(a,g.mf(b))};
g.rf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.rf.prototype.remove=function(a){this.C.remove(a)};g.x(sf,g.rf);sf.prototype.set=function(a,b){sf.V.set.call(this,a,uf(b))};
sf.prototype.F=function(a){a=sf.V.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
sf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.x(g.vf,sf);g.vf.prototype.set=function(a,b,c){if(b=uf(b)){if(c){if(c<(0,g.Jc)()){g.vf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Jc)()}g.vf.V.set.call(this,a,b)};
g.vf.prototype.F=function(a,b){var c=g.vf.V.F.call(this,a);if(c)if(!b&&g.xf(c))g.vf.prototype.remove.call(this,a);else return c};g.x(yf,Iaa);yf.prototype.Gb=function(){var a=0;g.$e(this.bd(!0),function(){a++});
return a};
yf.prototype.clear=function(){var a=Baa(this.bd(!0)),b=this;(0,g.B)(a,function(c){b.remove(c)})};g.x(g.zf,yf);g.h=g.zf.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Gb=function(){return this.C.length};
g.h.bd=function(a){var b=0,c=this.C,d=new g.Xe;d.next=function(){if(b>=c.length)throw g.Ye;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.x(g.Af,g.zf);g.x(Df,yf);var Jaa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Cf=null;g.h=Df.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(Ef(a),b);Ff(this)};
g.h.get=function(a){a=this.C.getAttribute(Ef(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(Ef(a));Ff(this)};
g.h.Gb=function(){return Gf(this).attributes.length};
g.h.bd=function(a){var b=0,c=Gf(this).attributes,d=new g.Xe;d.next=function(){if(b>=c.length)throw g.Ye;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){for(var a=Gf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ff(this)};g.x(Hf,yf);Hf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
Hf.prototype.get=function(a){return this.F.get(this.C+a)};
Hf.prototype.remove=function(a){this.F.remove(this.C+a)};
Hf.prototype.bd=function(a){var b=this.F.bd(!0),c=this,d=new g.Xe;d.next=function(){for(var e=b.next();e.substr(0,c.C.length)!=c.C;)e=b.next();return a?e.substr(c.C.length):c.F.get(e)};
return d};g.Kf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.r("yt.config_",g.Kf,void 0);var Kaa=[];var Tf={};var Ica=g.u("ytPubsubPubsubInstance")||new g.pf;g.pf.prototype.subscribe=g.pf.prototype.subscribe;g.pf.prototype.unsubscribeByKey=g.pf.prototype.qd;g.pf.prototype.publish=g.pf.prototype.oa;g.pf.prototype.clear=g.pf.prototype.clear;g.r("ytPubsubPubsubInstance",Ica,void 0);var Zf=g.u("ytPubsubPubsubSubscribedKeys")||{};g.r("ytPubsubPubsubSubscribedKeys",Zf,void 0);var ag=g.u("ytPubsubPubsubTopicToKeys")||{};g.r("ytPubsubPubsubTopicToKeys",ag,void 0);var $f=g.u("ytPubsubPubsubIsSynchronous")||{};
g.r("ytPubsubPubsubIsSynchronous",$f,void 0);var Naa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Oaa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.ig.prototype.initialize=function(a,b,c,d){var e=this;b?(this.F=!0,g.gg(b,function(){e.F=!1;if(window.botguard)jg(e,c,d);else{g.hg(b);var f=Error("Unable to load Botguard");f.params="from "+b;g.Rf(f)}})):a&&(eval(a),window.botguard?jg(this,c,d):g.Rf(Error("Unable to load Botguard from JS")))};
g.ig.prototype.Nd=function(){return!!this.C};
g.ig.prototype.dispose=function(){this.C=null};g.n(qg,Paa);qg.prototype.start=function(){var a=g.u("yt.scheduler.instance.start");a&&a()};
qg.prototype.pause=function(){var a=g.u("yt.scheduler.instance.pause");a&&a()};
g.ya(qg);qg.getInstance();var km;km=window;g.Ch=km.ytcsi&&km.ytcsi.now?km.ytcsi.now:km.performance&&km.performance.timing&&km.performance.now?function(){return km.performance.timing.navigationStart+km.performance.now()}:function(){return(new Date).getTime()};g.wg=new g.ig;g.Bg=new function(){var a=window.document;this.C=window;this.F=a};
g.r("yt.ads_.signals_.getAdSignalsString",function(a){return g.xg(Eg(a))},void 0);(0,g.Jc)();var Gg=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Jg,Vaa,Og;Jg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Vaa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Og=!1;g.lm=Pg;Vg.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.ze(a)?a:g.Xg(a)):2===this.F&&b?(a=b.call(c,this.C),g.ze(a)?a:g.Wg(a)):this};
Vg.prototype.getValue=function(){return this.C};
g.ye(Vg);var Jca=0,Zaa=g.Ql?"webkit":g.Pl?"moz":g.Bf?"ms":g.Ml?"o":"",Yg=g.u("ytDomDomGetNextId")||function(){return++Jca};
g.r("ytDomDomGetNextId",Yg,void 0);var $aa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.ah.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.ah.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.ah.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eh=g.u("ytEventsEventsListeners")||{};g.r("ytEventsEventsListeners",eh,void 0);var gh=g.u("ytEventsEventsCounter")||{count:0};g.r("ytEventsEventsCounter",gh,void 0);var hh=g.Ja(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.mm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.nm="Microsoft Internet Explorer"==navigator.appName;g.x(g.nh,g.C);g.nh.prototype.Y=function(a){this.C=new g.Lc(g.ch(a),g.dh(a))};
g.nh.prototype.N=function(){if(this.C){var a=g.mm();if(0!=this.D){var b=g.Nc(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.Pb();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.nh.prototype.W=function(){g.Xf(this.M);g.ih(this.J)};g.n(oh,g.C);oh.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
oh.prototype.W=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.callback)}g.C.prototype.W.call(this)};ph.prototype.clone=function(){var a=new ph,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.za(c)?a[b]=g.$a(c):a[b]=c}return a};g.n(g.rh,Error);g.om=new Set;var cba,eba,Kh,Lh,dba,Dh,fba,wh,xh;cba=g.ug("initial_gel_batch_timeout",1E3);eba=Math.pow(2,16)-1;g.Uh=10;Kh=null;Lh=0;dba={log_event:"events",log_interaction:"interactions"};Dh=Object.create(null);Dh.log_event="GENERIC_EVENT_LOGGING";Dh.log_interaction="INTERACTION_LOGGING";fba=new Set(["log_event"]);wh={};g.th=0;g.uh=0;g.Th=0;xh=!0;g.vh=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.r("ytLoggingTransportLogPayloadsQueue_",g.vh,void 0);var Jh=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};
g.r("ytLoggingTransportTokensToCttTargetIds_",Jh,void 0);var Ah=g.u("ytLoggingTransportDispatchedStats_")||{};g.r("ytLoggingTransportDispatchedStats_",Ah,void 0);var Eh=g.u("ytLoggingTransportCapturedTime_")||{};g.r("ytytLoggingTransportCapturedTime_",Eh,void 0);var Qh={};var Sh=g.u("ytLoggingGelSequenceIdObj_")||{};g.r("ytLoggingGelSequenceIdObj_",Sh,void 0);g.bi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.Jc)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.mf(b))}catch(f){return}else e=escape(b);g.$h(a,e,c,this.F)};
g.bi.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Zh.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.bi.prototype.remove=function(a){this.C&&this.C.remove(a);g.ai(a,"/",this.F)};var ci=new g.bi("yt.innertube");g.fi.prototype.isReady=function(){!this.C&&Wh()&&(this.C=g.Ih());return!!this.C};g.ii.prototype.toString=function(){return JSON.stringify(g.ji(this))};var ki=(0,g.Jc)().toString();var oi=g.u("ytLoggingTimeDocumentNonce_")||li(),pi,mi;g.r("ytLoggingTimeDocumentNonce_",oi,void 0);pi=0;g.ni=null;mi=null;g.r("yt_logging_screen.getRootVeType",ui,void 0);g.r("yt_logging_screen.getCurrentCsn",g.xi,void 0);g.r("yt_logging_screen.getCttAuthInfo",g.yi,void 0);g.r("yt_logging_screen.setCurrentScreen",g.zi,void 0);g.Bi.prototype.toString=function(){return this.topic};var Kca=g.u("ytPubsub2Pubsub2Instance")||new g.pf;g.pf.prototype.subscribe=g.pf.prototype.subscribe;g.pf.prototype.unsubscribeByKey=g.pf.prototype.qd;g.pf.prototype.publish=g.pf.prototype.oa;g.pf.prototype.clear=g.pf.prototype.clear;g.r("ytPubsub2Pubsub2Instance",Kca,void 0);var Ei=g.u("ytPubsub2Pubsub2SubscribedKeys")||{};g.r("ytPubsub2Pubsub2SubscribedKeys",Ei,void 0);var Gi=g.u("ytPubsub2Pubsub2TopicToKeys")||{};g.r("ytPubsub2Pubsub2TopicToKeys",Gi,void 0);
var Fi=g.u("ytPubsub2Pubsub2IsAsync")||{};g.r("ytPubsub2Pubsub2IsAsync",Fi,void 0);g.r("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.n(Ji,g.Ai);var kba=new g.Bi("screen-created",Ji),Ni=[],Oi=0;g.h=g.Si.prototype;g.h.bG=function(){this.Nd()||this.init()};
g.h.enable=function(){this.C=1;(0,g.B)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.bG,this),this.subscribe("dispose-"+a,this.dispose,this),g.E("PAGE_NAME")==a&&g.Ti(this))},this)};
g.h.init=function(){g.og(this.F);this.C=2;this.L&&this.L()};
g.h.Nd=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.og(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Pf(a)}};
g.h.subscribe=function(a,b,c){a=g.bg(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.cg(this.G);this.G=[]};var Ui=g.u("yt.modules.registry_")||{};g.r("yt.modules.registry_",Ui,void 0);g.Xi=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.r("yt.msgs_",g.Xi,void 0);var cj={},oba=0;var pba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.n(qj,g.C);g.h=qj.prototype;g.h.getId=function(){return this.ha};
g.h.loadNewVideoConfig=function(a){if(!this.qb()){this.aa&&(g.Wf(this.aa),this.aa=0);this.ob=a=g.qh(a);this.C=a.clone();oj(this);this.za||(this.za=zj(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.yd(this.H,Number(a)||a);if(a=this.C.attrs.height)this.H.style.height=g.xd(Number(a)||a,!0);pj(this);this.N&&rj(this)}};
g.h.Xu=function(){return this.ob};
g.h.bz=function(){return this.N};
g.h.Jh=function(a,b){var c=this,d=zj(this,b);if(d){if(!g.Na(this.Pd,a)&&!this.D[a]){var e=rba(this,a);this.M&&this.M(a,e)}this.Y.subscribe(a,d);"onReady"==a&&this.N&&g.Uf(function(){d(c.api)},0)}};
g.h.PF=function(a,b){if(!this.qb()){var c=zj(this,b);c&&g.qf(this.Y,a,c)}};
g.h.Ct=function(a){g.H("a11y-announce",a)};
g.h.fD=function(a){g.H("WATCH_LATER_VIDEO_ADDED",a)};
g.h.gD=function(a){g.H("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.ov=function(){return this.la||(sj(this)?"html5":null)};
g.h.bv=function(){return this.mb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.eg(tj(this));spf.script.ignore(b,a)}g.Wf(this.sb);this.T=!1};
g.h.W=function(){wj(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Pf(b)}this.jb=null;for(var a in this.D)g.p[this.D[a]]=null;this.ob=this.C=this.api=null;delete this.Za;delete this.H;g.C.prototype.W.call(this)};g.Bj={};g.Aj="player_uid_"+(1E9*Math.random()>>>0);var Ij=null;g.pm=window.performance&&window.performance.memory;g.gl={};var qm=window,Jj=qm.performance||qm.mozPerformance||qm.msPerformance||qm.webkitPerformance||{};g.n(Kj,g.Ai);g.n(Lj,g.Ai);var vba=new g.Bi("aft-recorded",Kj),Dba=new g.Bi("timing-sent",Lj);var Vj=!1;var ck=g.u("ytLoggingLatencyUsageStats_")||{};g.r("ytLoggingLatencyUsageStats_",ck,void 0);ak.prototype.tick=function(a,b,c){dk(this,"tick_"+a+"_"+b)||g.gi("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
ak.prototype.info=function(a,b){var c=Object.keys(a).join("");dk(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,g.gi("latencyActionInfo",a))};
ak.prototype.F=function(){var a=(0,g.Ch)(),b;for(b in ck)ck[b]&&6E4<a-ck[b].time&&delete ck[b];this&&(this.C=0)};var rm={},sk=(rm.ad_to_ad="LATENCY_ACTION_AD_TO_AD",rm.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",rm.app_startup="LATENCY_ACTION_APP_STARTUP",rm["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",rm["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",rm["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",rm.browse="LATENCY_ACTION_BROWSE",rm.channels="LATENCY_ACTION_CHANNELS",rm.channel="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",rm["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
rm["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",rm["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",rm["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",rm["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",rm["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",rm.chips="LATENCY_ACTION_CHIPS",rm["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",rm["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
rm.embed="LATENCY_ACTION_EMBED",rm.home="LATENCY_ACTION_HOME",rm.library="LATENCY_ACTION_LIBRARY",rm.live="LATENCY_ACTION_LIVE",rm.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",rm.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",rm.prebuffer="LATENCY_ACTION_PREBUFFER",rm.prefetch="LATENCY_ACTION_PREFETCH",rm.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",rm.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",rm.results="LATENCY_ACTION_RESULTS",rm.search="LATENCY_ACTION_RESULTS",
rm.search_ui="LATENCY_ACTION_SEARCH_UI",rm.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",rm.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",rm.settings="LATENCY_ACTION_SETTINGS",rm.tenx="LATENCY_ACTION_TENX",rm.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",rm.watch="LATENCY_ACTION_WATCH",rm.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",rm["watch,watch7"]="LATENCY_ACTION_WATCH",rm["watch,watch7_html5"]="LATENCY_ACTION_WATCH",rm["watch,watch7ad"]="LATENCY_ACTION_WATCH",rm["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",rm.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",rm.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",rm["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",rm["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",rm["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",rm["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",rm["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",rm["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
rm["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",rm.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",rm.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",rm),vm={},hk=(vm.ad_allowed="adTypesAllowed",vm.yt_abt="adBreakType",vm.ad_cpn="adClientPlaybackNonce",vm.ad_docid="adVideoId",vm.yt_ad_an="adNetworks",vm.ad_at="adType",vm.browse_id="browseId",vm.p="httpProtocol",vm.t="transportProtocol",vm.cpn="clientPlaybackNonce",vm.cseg="creatorInfo.creatorSegment",
vm.csn="clientScreenNonce",vm.docid="videoId",vm.GetHome_rid="getHomeRequestId",vm.GetSearch_rid="getSearchRequestId",vm.GetPlayer_rid="getPlayerRequestId",vm.GetWatchNext_rid="getWatchNextRequestId",vm.GetBrowse_rid="getBrowseRequestId",vm.is_continuation="isContinuation",vm.is_nav="isNavigation",vm.b_p="kabukiInfo.browseParams",vm.is_prefetch="kabukiInfo.isPrefetch",vm.is_secondary_nav="kabukiInfo.isSecondaryNav",vm.prev_browse_id="kabukiInfo.prevBrowseId",vm.query_source="kabukiInfo.querySource",
vm.voz_type="kabukiInfo.vozType",vm.yt_lt="loadType",vm.mver="creatorInfo.measurementVersion",vm.yt_ad="isMonetized",vm.nr="webInfo.navigationReason",vm.nrsu="navigationRequestedSameUrl",vm.ncnp="webInfo.nonPreloadedNodeCount",vm.prt="playbackRequiresTap",vm.plt="playerInfo.playbackType",vm.pis="playerInfo.playerInitializedState",vm.paused="playerInfo.isPausedOnLoad",vm.yt_pt="playerType",vm.fmt="playerInfo.itag",vm.yt_pl="watchInfo.isPlaylist",vm.yt_pre="playerInfo.preloadType",vm.yt_ad_pr="prerollAllowed",
vm.pa="previousAction",vm.yt_red="isRedSubscriber",vm.rce="mwebInfo.responseContentEncoding",vm.scrh="screenHeight",vm.scrw="screenWidth",vm.st="serverTimeMs",vm.aq="tvInfo.appQuality",vm.br_trs="tvInfo.bedrockTriggerState",vm.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",vm.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",vm.label="tvInfo.label",vm.is_mdx="tvInfo.isMdx",vm.preloaded="tvInfo.isPreloaded",vm.upg_player_vis="playerInfo.visibilityState",vm.query="unpluggedInfo.query",vm.upg_chip_ids_string=
"unpluggedInfo.upgChipIdsString",vm.yt_vst="videoStreamType",vm.vph="viewportHeight",vm.vpw="viewportWidth",vm.yt_vis="isVisible",vm.rcl="mwebInfo.responseContentLength",vm.GetSettings_rid="mwebInfo.getSettingsRequestId",vm.GetTrending_rid="mwebInfo.getTrendingRequestId",vm),wba="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
wm={},ik=(wm.mver="MEASUREMENT_VERSION_",wm.pis="PLAYER_INITIALIZED_STATE_",wm.yt_pt="LATENCY_PLAYER_",wm.pa="LATENCY_ACTION_",wm.yt_vst="VIDEO_STREAM_TYPE_",wm),xba="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");var rk={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},yba=(0,g.v)(Jj.clearResourceTimings||
Jj.webkitClearResourceTimings||Jj.mozClearResourceTimings||Jj.msClearResourceTimings||Jj.oClearResourceTimings||g.xa,Jj);var Hk=0,Ck=[],Gk=[],zk=0,Ek={},Fk={},Ak=new g.Ue(Kba,1E3);var Jk=["server_prefetched_vast","vmap"];var Lk;var Pk=null,Sk=[];var Wk,ml,ll,Yk,Xk,Rba,Uba,Sba,Tba,hl;Yk=0;Xk=0;Rba=[900,60,"waiting"];Uba=[500,99,"waiting"];Sba=[300,60,"waiting"];Tba=[400,99,"waiting"];hl=[300,101,"done"];var tl=!1;window.yt=window.yt||{};g.r("yt.setConfig",g.Lf,void 0);g.r("yt.pushConfigArray",Mf,void 0);g.r("yt.getConfig",g.E,void 0);g.r("yt.config.set",g.Lf,void 0);g.r("yt.config.pushArray",Mf,void 0);g.r("yt.config.get",g.E,void 0);g.r("yt.hasMsg",g.Zi,void 0);g.r("yt.setMsg",Yi,void 0);g.r("yt.setGoogMsg",$i,void 0);g.r("yt.msgs.has",g.Zi,void 0);g.r("yt.msgs.set",Yi,void 0);g.r("yt.msgs.setGoog",$i,void 0);g.r("yt.pubsub.publish",g.H,void 0);g.r("yt.pubsub.subscribe",g.bg,void 0);
g.r("ytcsi.tick",g.ok,void 0);g.x(wl,g.Si);
wl.prototype.enable=function(){window.onload=Pba;window.onunload=Qba;window.onerror=Maa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Uk),window.addEventListener("spfhistory",Vk),window.addEventListener("spfrequest",$k),window.addEventListener("spfpartprocess",cl),window.addEventListener("spfpartdone",dl),window.addEventListener("spfprocess",el),window.addEventListener("spfdone",il),window.addEventListener("spferror",jl),window.addEventListener("spfreload",
kl),window.addEventListener("spfjsbeforeunload",xl)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",Wba),this.subscribe("dispose",Xba)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
wl.prototype.init=function(){wl.V.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.E("PAGEFRAME_JS")){var b=g.E("PAGEFRAME_JS",void 0);var c=function(){var e=g.u("ytbin.www.pageframe.setup");e&&(window.ytPageFrameLoaded=!0,e())}}else a&&(a=g.u("yt.www.masthead.loadSearchbox"))&&a();
a=g.E("JS_COMMON_MODULE");var d=g.E("JS_PAGE_MODULES");d||(d=[a]);a=g.E("JS_DELAY_LOAD",0);0<a?(g.Wf(this.D),this.D=g.Uf(function(){b&&g.gg(b,c);spf.script.require(d)},a)):(b&&g.gg(b,c),spf.script.require(d));
g.r("yt.abuse.player.botguardInitialized",Raa,void 0);g.r("yt.abuse.player.invokeBotguard",Saa,void 0);g.r("yt.abuse.dclkstatus.checkDclkStatus",Qaa,void 0);g.r("yt.player.exports.navigate",g.mj,void 0);g.r("yt.util.activity.init",g.Ph,void 0);g.r("yt.util.activity.getTimeSinceActive",g.Rh,void 0);g.r("yt.util.activity.setTimestamp",g.Nh,void 0);Ok(g.u("ytplayer.config"));g.u("ytspf.enabled")&&Nba();Cba();g.E("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.tg("service_worker_enabled")?mca():kca())};
wl.prototype.dispose=function(){g.Wf(this.D);var a=g.u("ytbin.www.pageframe.cancelSetup");a&&a();g.Xf(Lk);if(a=g.Nk())a.removeEventListener("onReady",Mk),a.removeEventListener("onStateChange",Mk);Oj(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.F(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.mh(a);wl.V.dispose.call(this)};
wl.prototype.disable=function(){wl.V.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Uk),window.removeEventListener("spfhistory",Vk),window.removeEventListener("spfrequest",$k),window.removeEventListener("spfpartprocess",cl),window.removeEventListener("spfpartdone",dl),window.removeEventListener("spfprocess",el),window.removeEventListener("spfdone",il),window.removeEventListener("spferror",jl),window.removeEventListener("spfreload",kl),window.removeEventListener("spfjsbeforeunload",
xl));window.onload=null;window.onunload=null;window.onerror=null};
g.Wi(new wl);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:26:05 Feb 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:56:45 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 157.443
  exclusion.robots: 0.062
  exclusion.robots.policy: 0.054
  cdx.remote: 0.05
  esindex: 0.008
  LoadShardBlock: 111.358 (3)
  PetaboxLoader3.datanode: 146.77 (4)
  PetaboxLoader3.resolve: 120.733 (3)
  load_resource: 160.362
*/