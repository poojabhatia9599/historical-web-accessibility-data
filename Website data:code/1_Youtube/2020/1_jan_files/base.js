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

var _yt_www={};(function(g){var window=this;var ca,ka,la,ma,oa,qa,sa,ta,ua,daa,eaa,yb,Sb,Tb,lc,jaa,pc,wc,Ac,Bc,Cc,Kc,Lc,laa,naa,Kd,oaa,Ld,paa,Md,Nd,Pd,Qd,raa,Yd,$d,ae,ee,saa,he,oe,ne,uaa,re,se,te,ue,waa,we,xe,Be,xaa,Ce,Je,Le,Re,Ve,Pe,Me,zaa,Ue,Se,Te,Xe,yaa,Aaa,bf,cf,hf,Baa,Caa,Daa,of,qf,Faa,wf,xf,yf,Gaa,Bf,Ff,Gf,Hf,If,Jf,Lf,Iaa,Pf,Sf,Tf,Kaa,Vf,Laa,cg,og,Oaa,vg,qg,Paa,Ag,xg,Qaa,Raa,Jg,Saa,Taa,Vaa,Rg,Waa,Sg,Tg,Xaa,Yg,Wg,Ug,$g,gh,th,uh,wh,aba,Ih,$aa,eba,Vh,ci,di,ei,fba,ki,li,iba,ti,Ai,gba,Gi,Fi,jba,Ni,Ui,Vi,Wi,$i,dj,gj,ij,kba,kj,lba,pj,oj,rj,
nj,qj,zj,xj,Aj,Dj,yj,Bj,Ej,oba,Hj,wj,Ij,pba,Fj,Gj,Cj,qba,Oj,rba,sba,Tj,Uj,tba,Xj,uba,Zj,ak,Vj,ck,Yj,Wj,dk,bk,fk,gk,ik,hk,jk,lk,ok,kk,pk,rk,qk,sk,Cba,uk,zk,Ak,vk,zba,Bk,Ek,Aba,Bba,Kba,Jba,Iba,Ik,Hba,Fba,Gba,Lba,Mba,Nba,Oba,Uk,Sk,Wk,Pba,Xk,Zk,Qba,Rba,$k,al,fl,il,jl,kl,ol,pl,ql,Xba,Yba,gl,el,Wba,hl,ul,wl,tl,Zba,xl,vl,$ba,dca,aca,gca,cca,bca,eca,fca,ica,Al,hca,yl,jca,lca,nca,mca,kca,Bl,Cl,Dl,fa,El,baa,va,Fa,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
g.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
g.ea=function(a){if(!(a instanceof Array)){a=g.da(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
g.n=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.T=b.prototype};
ka=function(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}};
la=function(){la=function(){};
ia.Symbol||(ia.Symbol=aaa)};
ma=function(a,b){this.C=a;ja(this,"description",{configurable:!0,writable:!0,value:b})};
g.pa=function(){la();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return oa(ca(this))}});
g.pa=function(){}};
oa=function(a){g.pa();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a};
qa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
sa=function(a,b){g.pa();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.r=function(a,b,c){a=a.split(".");c=c||g.p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
g.wa=function(a){if(a&&a!=g.p)return ua(a.document);null===va&&(va=ua(g.p.document));return va};
ua=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&baa.test(a)?a:""};
g.u=function(a,b){for(var c=a.split("."),d=b||g.p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.xa=function(){};
g.ya=function(a){a.Cc=void 0;a.getInstance=function(){return a.Cc?a.Cc:a.Cc=new a}};
g.za=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Ba=function(a){return"array"==g.za(a)};
g.Ca=function(a){var b=g.za(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Da=function(a){return"function"==g.za(a)};
g.Ea=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ha=function(a){return a[Fa]||(a[Fa]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.v=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.v=daa:g.v=eaa;return g.v.apply(null,arguments)};
g.w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.x=function(a,b){function c(){}
c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.su=function(d,e,f){for(var k=Array(arguments.length-2),l=2;l<arguments.length;l++)k[l-2]=arguments[l];b.prototype[e].apply(d,k)}};
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
g.wb=function(a,b){if(b)a=a.replace(qb,"&amp;").replace(rb,"&lt;").replace(sb,"&gt;").replace(tb,"&quot;").replace(ub,"&#39;").replace(vb,"&#0;");else{if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(rb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(tb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ub,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(vb,"&#0;"))}return a};
g.zb=function(a,b){for(var c=0,d=(0,g.xb)(String(a)).split("."),e=(0,g.xb)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=yb(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||yb(0==l[2].length,0==m[2].length)||yb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
yb=function(a,b){return a<b?-1:a>b?1:0};
g.Cb=function(a,b){this.F=a===Ab&&b||"";this.D=Bb};
g.Db=function(a){if(a instanceof g.Cb&&a.constructor===g.Cb&&a.D===Bb)return a.F;g.za(a);return"type_error:SafeUrl"};
g.Fb=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(gaa);b=b&&haa.test(b[1]);return g.Eb(b?a:"about:invalid#zClosurez")};
g.Hb=function(a){if(a instanceof g.Cb)return a;a="object"==typeof a&&a.Qd?a.Wc():String(a);Gb.test(a)||(a="about:invalid#zClosurez");return g.Eb(a)};
g.Ib=function(a,b){if(a instanceof g.Cb)return a;a="object"==typeof a&&a.Qd?a.Wc():String(a);if(b&&/^data:/i.test(a)){var c=g.Fb(a);if(c.Wc()==a)return c}Gb.test(a)||(a="about:invalid#zClosurez");return g.Eb(a)};
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
g.ac=function(a){if(a instanceof g.Xb)return a;var b="object"==typeof a,c=null;b&&a.jl&&(c=a.C());return g.$b(g.wb(b&&a.Qd?a.Wc():String(a)),c)};
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
jaa=function(a,b){var c=iaa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
pc=function(){var a=g.p.document;return a?a.documentMode:void 0};
g.rc=function(a){return jaa(a,function(){return 0<=g.zb(g.qc,a)})};
g.tc=function(a){return Number(g.sc)>=a};
wc=function(a,b){g.Ca(a);void 0===b&&(b=0);g.uc();for(var c=vc[b],d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,q=m?a[e+2]:0,t=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[t],c[f],c[l]||"",c[q]||"")}return d.join("")};
g.uc=function(){if(!g.xc){g.xc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));vc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===g.xc[f]&&(g.xc[f]=e)}}}};
g.yc=function(a){this.C=0;this.F=a};
g.zc=function(){};
Ac=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Ba(c))for(var d=0;d<c.length;d++)c[d]&&c[d].cd();else c&&c.cd()}};
Bc=function(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};
Cc=function(a){if(g.Ba(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Cc(d):d)}return b}if(g.Dc&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Cc(d):d);return b};
g.Fc=function(a){var b=g.u("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.p.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==
b&&(b=a.constructor&&a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:g.Ec(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})};
g.Ec=function(a){if(Gc[a])return Gc[a];a=String(a);if(!Gc[a]){var b=/function\s+([^\(]+)/m.exec(a);Gc[a]=b?b[1]:"[Anonymous]"}return Gc[a]};
g.Hc=function(a){this.C=a||{cookie:""}};
g.Ic=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.xb)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Jc=function(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31};
g.Nc=function(a,b,c){"number"===typeof a?(this.date=Kc(a,b||0,c||1),Lc(this,c||1)):g.Ea(a)?(this.date=Kc(a.getFullYear(),a.getMonth(),a.getDate()),Lc(this,a.getDate())):(this.date=new Date((0,g.Mc)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Lc(this,a))};
Kc=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
Lc=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}};
g.Oc=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
g.Pc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Qc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.Rc=function(a,b){this.width=a;this.height=b};
g.z=function(a){return g.Sc(document,a)};
g.Sc=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.Tc=function(a){return g.Sc(document,a)};
g.Vc=function(a,b){g.Ta(b,function(c,d){c&&"object"==typeof c&&c.Qd&&(c=c.Wc());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Uc.hasOwnProperty(d)?a.setAttribute(Uc[d],c):g.nb(d,"aria-")||g.nb(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.Xc=function(a){return g.Wc(a||window)};
g.Wc=function(a){a=a.document;a=g.Yc(a)?a.documentElement:a.body;return new g.Rc(a.clientWidth,a.clientHeight)};
g.$c=function(a,b,c){return g.Zc(document,arguments)};
g.Zc=function(a,b){var c=String(b[0]),d=b[1];if(!kaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.hc(d.name),'"');if(d.type){c.push(' type="',g.hc(d.type),'"');var e={};g.cb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=g.ad(a,c);d&&("string"===typeof d?c.className=d:g.Ba(d)?c.className=d.join(" "):g.Vc(c,d));2<b.length&&g.bd(a,c,b,2);return c};
g.bd=function(a,b,c,d){function e(k){k&&b.appendChild("string"===typeof k?a.createTextNode(k):k)}
for(;d<c.length;d++){var f=c[d];!g.Ca(f)||g.Ea(f)&&0<f.nodeType?e(f):(0,g.A)(laa(f)?g.Qa(f):f,e)}};
g.cd=function(a){return g.ad(document,a)};
g.ad=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.Yc=function(a){return"CSS1Compat"==a.compatMode};
g.dd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.ed=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.fd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
laa=function(a){if(a&&"number"==typeof a.length){if(g.Ea(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Da(a))return"function"==typeof a.item}return!1};
g.gd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.hd=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.id=function(a){return a?decodeURI(a):a};
g.kd=function(a,b){return b.match(g.jd)[a]||null};
g.ld=function(a){return g.id(g.kd(3,a))};
g.md=function(a){a=a.match(g.jd);return g.hd(null,null,null,null,a[5],a[6],a[7])};
g.nd=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.od=function(a,b){return b?a?a+"&"+b:b:a};
g.pd=function(a,b){if(!b)return a;var c=g.nd(a);c[1]=g.od(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.qd=function(a,b,c){if(g.Ba(b))for(var d=0;d<b.length;d++)g.qd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.fc(b)))};
g.rd=function(a){var b=[],c;for(c in a)g.qd(c,a[c],b);return b.join("&")};
g.sd=function(a,b){var c=g.rd(b);return g.pd(a,c)};
g.ud=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.wd=function(a,b){var c=a.search(g.vd),d=g.ud(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.gc(a.substr(d,e-d))};
g.xd=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.yd=function(a){var b=[];g.xd(a,function(c){b.push(c)});
return b};
naa=function(){var a=g.cd("IFRAME"),b={};(0,g.A)(maa(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
g.zd=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Ad=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Bd=function(a,b){a.style.width=g.Ad(b,!0)};
g.Cd=function(){this.C=function(){return!1}};
g.Dd=function(a,b){return typeof a===b};
g.Gd=function(){var a=void 0===a?g.Ed:a;try{return a.history.length}catch(b){return 0}};
g.Hd=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Gd();a.u_java=!!g.Ed.navigator&&!g.Dd(g.Ed.navigator.javaEnabled,"unknown")&&!!g.Ed.navigator.javaEnabled&&g.Ed.navigator.javaEnabled();g.Ed.screen&&(a.u_h=g.Ed.screen.height,a.u_w=g.Ed.screen.width,a.u_ah=g.Ed.screen.availHeight,a.u_aw=g.Ed.screen.availWidth,a.u_cd=g.Ed.screen.colorDepth);g.Ed.navigator&&g.Ed.navigator.plugins&&(a.u_nplug=g.Ed.navigator.plugins.length);g.Ed.navigator&&g.Ed.navigator.mimeTypes&&(a.u_nmime=g.Ed.navigator.mimeTypes.length)};
g.Id=function(a,b){try{return(void 0===b?0:b)?(new g.Rc(a.innerWidth,a.innerHeight)).round():g.Xc(a).round()}catch(c){return new g.Rc(-12245933,-12245933)}};
g.Jd=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var f=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,k]};
Kd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
oaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=q=0}
function b(y){for(var B=k,H=0;64>H;H+=4)B[H/4]=y[H]<<24|y[H+1]<<16|y[H+2]<<8|y[H+3];for(H=16;80>H;H++)y=B[H-3]^B[H-8]^B[H-14]^B[H-16],B[H]=(y<<1|y>>>31)&4294967295;y=e[0];var P=e[1],S=e[2],ra=e[3],Aa=e[4];for(H=0;80>H;H++){if(40>H)if(20>H){var Ga=ra^P&(S^ra);var td=1518500249}else Ga=P^S^ra,td=1859775393;else 60>H?(Ga=P&S|ra&(P|S),td=2400959708):(Ga=P^S^ra,td=3395469782);Ga=((y<<5|y>>>27)&4294967295)+Ga+Aa+td+B[H]&4294967295;Aa=ra;ra=S;S=(P<<30|P>>>2)&4294967295;P=y;y=Ga}e[0]=e[0]+y&4294967295;e[1]=
e[1]+P&4294967295;e[2]=e[2]+S&4294967295;e[3]=e[3]+ra&4294967295;e[4]=e[4]+Aa&4294967295}
function c(y,B){if("string"===typeof y){y=unescape(encodeURIComponent(y));for(var H=[],P=0,S=y.length;P<S;++P)H.push(y.charCodeAt(P));y=H}B||(B=y.length);H=0;if(0==q)for(;H+64<B;)b(y.slice(H,H+64)),H+=64,t+=64;for(;H<B;)if(f[q++]=y[H++],t++,64==q)for(q=0,b(f);H+64<B;)b(y.slice(H,H+64)),H+=64,t+=64}
function d(){var y=[],B=8*t;56>q?c(l,56-q):c(l,64-(q-56));for(var H=63;56<=H;H--)f[H]=B&255,B>>>=8;b(f);for(H=B=0;5>H;H++)for(var P=24;0<=P;P-=8)y[B++]=e[H]>>P&255;return y}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,t;a();return{reset:a,update:c,digest:d,Nu:function(){for(var y=d(),B="",H=0;H<y.length;H++)B+="0123456789ABCDEF".charAt(Math.floor(y[H]/16))+"0123456789ABCDEF".charAt(y[H]%16);return B}}};
Ld=function(a,b,c){var d=String(g.p.location.href);return d&&a&&b?[b,paa(Kd(d),a,c||null)].join(" "):null};
paa=function(a,b,c){var d=[],e=[];if(1==(g.Ba(c)?2:1))return e=[b,a],(0,g.A)(d,function(l){e.push(l)}),Md(e.join(" "));
var f=[],k=[];(0,g.A)(c,function(l){k.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Na(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.A)(d,function(l){e.push(l)});
a=Md(e.join(" "));a=[c,a];g.Na(k)||a.push(k.join(""));return a.join("_")};
Md=function(a){var b=oaa();b.update(a);return b.Nu().toLowerCase()};
Nd=function(){var a=Kd(String(g.p.location.href)),b=(a=0==a.indexOf("https:")||0==a.indexOf("chrome-extension:"))?g.p.__SAPISID:g.p.__APISID;if(!b){var c=new g.Hc(document);(b=c.get(a?"SAPISID":"APISID"))||(b=c.get("__Secure-3PAPISID"))}return b};
Pd=function(){var a=!!Od.ENABLE_FPA_3P_COOKIES_MOD,b=!!Od.ENABLE_FPA_3P_COOKIES_REFACTORED_IS_LOGGED_IN_MOD;a&&b?(a=g.p.__SAPISID||g.p.__APISID||g.p.__OVERRIDE_SID)?a=!0:(a=new g.Hc(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("SID"),a=!!a):a?(a=Nd(),a||(a=new g.Hc(document),a=g.p.__OVERRIDE_SID||a.get("SID")),a=!!a):(a=g.p.__OVERRIDE_SID,null==a&&(a=(new g.Hc(document)).get("SID")),a=!!a);return a};
Qd=function(a){var b=!!Od.ENABLE_FPA_3P_COOKIES_MOD,c=!!Od.ENABLE_FPA_3P_COOKIES_REFACTORED_IS_LOGGED_IN_MOD;if(b&&c)a:{b=Kd(String(g.p.location.href));if(Pd()&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.p.__SAPISID:g.p.__APISID,c||(c=new g.Hc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){a=Ld(c,b?"SAPISIDHASH":"APISIDHASH",a);break a}a=null}else if(b)(b=Nd())?(c=Kd(String(g.p.location.href)),a=Ld(b,0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")?
"SAPISIDHASH":"APISIDHASH",a)):a=null;else a:{b=Kd(String(g.p.location.href));if(Pd()&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.p.__SAPISID:g.p.__APISID,null==c&&(c=(new g.Hc(document)).get(b?"SAPISID":"APISID")),c)){a=Ld(c,b?"SAPISIDHASH":"APISIDHASH",a);break a}a=null}return a};
g.C=function(){this.Tc=this.Tc;this.Gf=this.Gf};
g.Td=function(a,b){g.Rd(a,g.w(g.Sd,b))};
g.Rd=function(a,b){a.Tc?b():(a.Gf||(a.Gf=[]),a.Gf.push(b))};
g.Sd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Ud=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Rr=!0};
g.Vd=function(a,b){g.Ud.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.zc=null;a&&this.init(a,b)};
g.Xd=function(a){return!(!a||!a[Wd])};
raa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.mh=e;this.key=++qaa;this.yg=this.Zh=!1};
Yd=function(a){a.yg=!0;a.listener=null;a.C=null;a.src=null;a.mh=null};
g.Zd=function(a){this.src=a;this.listeners={};this.C=0};
$d=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Pa(a.listeners[c],b);d&&(Yd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
ae=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.yg&&f.listener==b&&f.capture==!!c&&f.mh==d)return e}return-1};
g.ce=function(a,b,c,d,e){if(d&&d.once)return g.be(a,b,c,d,e);if(g.Ba(b)){for(var f=0;f<b.length;f++)g.ce(a,b[f],c,d,e);return null}c=g.de(c);return g.Xd(a)?a.O(b,c,g.Ea(d)?!!d.capture:!!d,e):ee(a,b,c,!1,d,e)};
ee=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ea(e)?!!e.capture:!!e,l=g.fe(a);l||(a[ge]=l=new g.Zd(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=saa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)taa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(he(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ie++;return c};
saa=function(){var a=uaa,b=je?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.be=function(a,b,c,d,e){if(g.Ba(b)){for(var f=0;f<b.length;f++)g.be(a,b[f],c,d,e);return null}c=g.de(c);return g.Xd(a)?a.He(b,c,g.Ea(d)?!!d.capture:!!d,e):ee(a,b,c,!0,d,e)};
g.ke=function(a,b,c,d,e){if(g.Ba(b))for(var f=0;f<b.length;f++)g.ke(a,b[f],c,d,e);else d=g.Ea(d)?!!d.capture:!!d,c=g.de(c),g.Xd(a)?a.Va(b,c,d,e):a&&(a=g.fe(a))&&(b=a.ff(b,c,d,e))&&g.le(b)};
g.le=function(a){if("number"===typeof a||!a||a.yg)return!1;var b=a.src;if(g.Xd(b))return $d(b.yd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(he(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ie--;(c=g.fe(b))?($d(c,a),0==c.C&&(c.src=null,b[ge]=null)):Yd(a);return!0};
he=function(a){return a in me?me[a]:me[a]="on"+a};
oe=function(a,b,c,d){var e=!0;if(a=g.fe(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.yg&&(f=ne(f,d),e=e&&!1!==f)}return e};
ne=function(a,b){var c=a.listener,d=a.mh||a.src;a.Zh&&g.le(a);return c.call(d,b)};
uaa=function(a,b){if(a.yg)return!0;if(!je){var c=b||g.u("window.event"),d=new g.Vd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=oe(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=oe(c[k],f,!1,d),e=e&&l}return e}return ne(a,new g.Vd(b,
this))};
g.fe=function(a){a=a[ge];return a instanceof g.Zd?a:null};
g.de=function(a){if(g.Da(a))return a;a[pe]||(a[pe]=function(b){return a.handleEvent(b)});
return a[pe]};
g.qe=function(){g.C.call(this);this.yd=new g.Zd(this);this.Xt=this;this.bm=null};
re=function(a,b,c,d){b=a.yd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.yg&&k.capture==c){var l=k.listener,m=k.mh||k.src;k.Zh&&$d(a.yd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.Rr};
se=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
te=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
ue=function(a){g.p.setTimeout(function(){throw a;},0)};
waa=function(){var a=g.p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Qb("Presto")&&(a=function(){var e=g.cd("IFRAME");e.style.display="none";g.dc(e,g.mb(vaa));document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(g.Yb(g.ve));e.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.v)(function(m){if(("*"==l||m.origin==
l)&&m.data==k)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&!g.Rb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.zn;c.zn=null;e()}};
return function(e){d.next={zn:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in g.cd("SCRIPT")?function(e){var f=g.cd("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){g.p.setTimeout(e,0)}};
we=function(){this.F=this.C=null};
xe=function(){this.next=this.scope=this.lc=null};
Be=function(a,b){ye||xaa();ze||(ye(),ze=!0);Ae.add(a,b)};
xaa=function(){if(g.p.Promise&&g.p.Promise.resolve){var a=g.p.Promise.resolve(void 0);ye=function(){a.then(Ce)}}else ye=function(){var b=Ce;
!g.Da(g.p.setImmediate)||g.p.Window&&g.p.Window.prototype&&!g.Qb("Edge")&&g.p.Window.prototype.setImmediate==g.p.setImmediate?(De||(De=waa()),De(b)):g.p.setImmediate(b)}};
Ce=function(){for(var a;a=Ae.remove();){try{a.lc.call(a.scope)}catch(b){ue(b)}te(Ee,a)}ze=!1};
g.Fe=function(a){a.prototype.$goog_Thenable=!0};
g.Ge=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Ie=function(a,b){this.C=0;this.M=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.xa)try{var c=this;a.call(b,function(d){g.He(c,2,d)},function(d){g.He(c,3,d)})}catch(d){g.He(this,3,d)}};
Je=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
Le=function(a,b,c){var d=Ke.get();d.F=a;d.onRejected=b;d.context=c;return d};
g.Ne=function(a,b,c){Me(a,b,c,null)||Be(g.w(b,a))};
g.Oe=function(a){return new g.Ie(function(b,c){var d=a.length,e=[];if(d)for(var f=function(q,t){d--;e[q]=t;0==d&&b(e)},k=function(q){c(q)},l=0,m;l<a.length;l++)m=a[l],g.Ne(m,g.w(f,l),k);
else b(e)})};
g.Qe=function(a,b){return Pe(a,null,b,void 0)};
Re=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Re(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Se(c),Te(c,e,3,b)))}a.D=null}else g.He(a,3,b)};
Ve=function(a,b){a.F||2!=a.C&&3!=a.C||Ue(a);a.G?a.G.next=b:a.F=b;a.G=b};
Pe=function(a,b,c,d){var e=Le(null,null,null);e.C=new g.Ie(function(f,k){e.F=b?function(l){try{var m=b.call(d,l);f(m)}catch(q){k(q)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof g.We?k(l):f(m)}catch(q){k(q)}}:k});
e.C.D=a;Ve(a,e);return e.C};
g.He=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Me(c,a.Y,a.N,a)||(a.M=c,a.C=b,a.D=null,Ue(a),3!=b||c instanceof g.We||yaa(a,c)))};
Me=function(a,b,c,d){if(a instanceof g.Ie)return Ve(a,Le(b||g.xa,c||null,d)),!0;if(g.Ge(a))return a.then(b,c,d),!0;if(g.Ea(a))try{var e=a.then;if(g.Da(e))return zaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
zaa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function k(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Ue=function(a){a.L||(a.L=!0,Be(a.J,a))};
Se=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Te=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Xe(b,c,d);else try{b.D?b.F.call(b.context):Xe(b,c,d)}catch(e){Ye.call(null,e)}te(Ke,b)};
Xe=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
yaa=function(a,b){a.H=!0;Be(function(){a.H&&Ye.call(null,b)})};
g.We=function(a){g.Ia.call(this,a)};
g.Ze=function(a,b,c){if(g.Da(a))c&&(a=(0,g.v)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.v)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.p.setTimeout(a,b||0)};
g.$e=function(a){g.p.clearTimeout(a)};
g.af=function(a,b,c){g.C.call(this);this.C=a;this.D=b||0;this.F=c;this.Qb=(0,g.v)(this.uo,this)};
Aaa=function(){this.F=-1};
bf=function(){this.F=64;this.C=[];this.L=[];this.M=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
cf=function(a,b,c){c||(c=0);var d=a.M;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):
(f=c^k^l,q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.df=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
g.ef=function(a){return a.classList?a.classList:g.df(a).match(/\S+/g)||[]};
g.D=function(a,b){return a.classList?a.classList.contains(b):g.Ma(g.ef(a),b)};
g.ff=function(){};
hf=function(a){if(a instanceof g.ff)return a;if("function"==typeof a.ed)return a.ed(!1);if(g.Ca(a)){var b=0,c=new g.ff;c.next=function(){for(;;){if(b>=a.length)throw g.gf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.jf=function(a,b,c){if(g.Ca(a))try{(0,g.A)(a,b,c)}catch(d){if(d!==g.gf)throw d;}else{a=hf(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.gf)throw d;}}};
Baa=function(a){if(g.Ca(a))return g.Qa(a);a=hf(a);var b=[];g.jf(a,function(c){b.push(c)});
return b};
g.lf=function(a,b){this.F={};this.C=[];this.Pe=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.kf(this,a)};
Caa=function(a,b){return a===b};
g.nf=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.mf(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.mf(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.kf=function(a,b){if(b instanceof g.lf)for(var c=b.yc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.mf=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.pf=function(a){var b=[];of(new Daa,a,b);return b.join("")};
Daa=function(){};
of=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.Ba(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),of(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),qf(d,c),c.push(":"),of(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":qf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
qf=function(a,b){b.push('"',a.replace(Eaa,function(c){var d=rf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),rf[c]=d);return d}),'"')};
g.sf=function(a){g.C.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.tf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ka(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ud(b)}};
Faa=function(a,b,c){Be(function(){a.apply(b,c)})};
g.uf=function(a){this.C=a};
wf=function(a){this.C=a};
xf=function(a){this.data=a};
yf=function(a){return void 0===a||a instanceof xf?a:new xf(a)};
g.zf=function(a){this.C=a};
g.Af=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Mc)()||!!b&&b>(0,g.Mc)()};
Gaa=function(){};
Bf=function(){};
g.Cf=function(a){this.C=a};
g.Df=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Ff=function(a,b){this.F=a;this.C=null;if(g.E&&!g.tc(9)){Ef||(Ef=new g.lf);this.C=Ef.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),Ef.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
Gf=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Haa[b]})};
Hf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
If=function(a){return a.C.XMLDocument.documentElement};
Jf=function(a,b){this.F=a;this.C=b+"::"};
g.Kf=function(a){var b=new g.Df;return b.isAvailable()?a?new Jf(b,a):b:null};
Lf=function(){this.C=[];this.F=-1};
Iaa=function(a){-1==a.F&&(a.F=(0,g.Mf)(a.C,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.F};
g.Nf=function(){var a=new Lf;g.p.SVGElement&&g.p.document.createElementNS&&a.set(0);var b=naa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.p.crypto&&g.p.crypto.subtle&&a.set(3);g.p.TextDecoder&&g.p.TextEncoder&&a.set(4);return Iaa(a)};
g.Of=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
Pf=function(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])};
g.Rf=function(a){Pf(g.Qf,arguments)};
Sf=function(a,b){var c=g.F(a,void 0);c?c.push(b):g.Rf(a,[b])};
g.F=function(a,b){return a in g.Qf?g.Qf[a]:b};
Tf=function(a){var b=g.Qf.EXPERIMENT_FLAGS;return b?b[a]:void 0};
Kaa=function(a){Jaa.forEach(function(b){return b(a)})};
Vf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Uf(b),Kaa(b)}}:a};
g.Uf=function(a,b,c,d,e){var f=g.u("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.F("ERRORS",[]),f.push([a,b,c,d,e]),g.Rf("ERRORS",f))};
g.Wf=function(a){g.Uf(a,"WARNING",void 0,void 0,void 0)};
Laa=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,k=Tf("log_window_onerror_fraction");if(k&&Math.random()<k)f=!0;else{k=document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?k=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,k=a.message,b=a.filename,c=a.lineno,d=a.colno):(k="Unknown error",b="Unknown file",c=0),a=Error(k),a.name="UnhandledWindowError",e=a,e.message=k,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?g.Uf(e):g.Wf(e))};
g.G=function(a,b){return a?a.dataset?a.dataset[g.Xf(b)]:a.getAttribute("data-"+b):null};
g.Xf=function(a){return Yf[a]||(Yf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
g.Zf=function(a,b){g.Da(a)&&(a=Vf(a));return window.setTimeout(a,b)};
g.$f=function(a,b){g.Da(a)&&(a=Vf(a));return window.setInterval(a,b)};
g.ag=function(a){window.clearTimeout(a)};
g.bg=function(a){window.clearInterval(a)};
g.hg=function(a,b,c){var d=cg();if(d){var e=d.subscribe(a,function(){var f=arguments;var k=function(){dg[e]&&b.apply(c||window,f)};
try{fg[a]?k():g.Zf(k,0)}catch(l){g.Uf(l)}},c);
dg[e]=!0;gg[a]||(gg[a]=[]);gg[a].push(e);return e}return 0};
g.ig=function(a){var b=cg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),(0,g.A)(a,function(c){b.unsubscribeByKey(c);delete dg[c]}))};
g.I=function(a,b){var c=cg();return c?c.publish.apply(c,arguments):!1};
g.jg=function(a,b){fg[a]=!0;var c=cg();c=c?c.publish.apply(c,arguments):!1;fg[a]=!1;return c};
cg=function(){return g.u("ytPubsubPubsubInstance")};
g.lg=function(a,b){var c=g.kg(a);spf.script.load(a,c,b)};
g.mg=function(a){a=g.kg(a);spf.script.unload(a)};
g.kg=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Maa,""),b=b.replace(Naa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.ng=function(){this.F=!1;this.C=null};
og=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.Wf(d)}c&&c(b)};
g.pg=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
Oaa=function(){};
g.rg=function(a,b){return qg(a,0,b)};
g.sg=function(a,b){return qg(a,1,b)};
g.ug=function(a){for(var b=0,c=a.length;b<c;b++)g.tg(a[b])};
vg=function(){};
g.wg=function(){return!!g.u("yt.scheduler.instance")};
qg=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.Zf(a,c||0)};
g.tg=function(a){if(!isNaN(a)){var b=g.u("yt.scheduler.instance.cancelJob");b?b(a):g.ag(a)}};
Paa=function(){return parseInt(g.F("DCLKSTAT",0),10)};
g.yg=function(a){a=xg(a);return"string"===typeof a&&"false"===a?!1:!!a};
g.zg=function(a,b){var c=xg(a);return void 0===c&&void 0!==b?b:Number(c||0)};
Ag=function(a){a=xg(a);return void 0!==a?String(a):""};
xg=function(a){var b=g.F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.F("EXPERIMENT_FLAGS",{})[a]};
Qaa=function(){return g.Bg.Rd()};
Raa=function(a){a=void 0===a?{}:a;return g.pg(g.Bg,a)};
g.Cg=function(a){var b=[];g.Ta(a,function(c,d){var e=g.fc(d),f;g.Ba(c)?f=c:f=[c];(0,g.A)(f,function(k){""==k?b.push(e):b.push(e+"="+g.fc(k))})});
return b.join("&")};
g.Dg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=g.gc(e[0]||""),k=g.gc(e[1]||"");f in b?g.Ba(b[f])?g.Ra(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(m){var l=Error("Error decoding URL component");l.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?g.Wf(l):g.Uf(l)}}return b};
g.Fg=function(a,b){return g.Eg(a,b||{},!0)};
g.Eg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Dg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return g.sd(a,e)+d};
Jg=function(a){var b=g.Gg;a=void 0===a?g.u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.Hg(b),g.Ig(b));b.ca_type="image";a&&(b.bid=a);return b};
g.Hg=function(a){var b={};b.dt=g.Kg;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Hd(b);return b};
g.Ig=function(a){var b=g.Jd(a.C),c=g.Id(a.C.top),d={};return d.bc=g.Nf(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Of(a.F),d.wgl=!!g.Ed.WebGLRenderingContext,d};
Saa=function(){if(!Lg)return null;var a=Lg();return"open"in a?a:null};
g.Ng=function(a){switch(g.Mg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Mg=function(a){return a&&"status"in a?a.status:-1};
Taa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.kd(1,a),e=g.ld(a);d&&e?(d=c,c=a.match(g.jd),d=d.match(g.jd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.ld(c)==e&&(Number(g.kd(4,c))||null)==(Number(g.kd(4,a))||null):!0;d=g.yg("web_ajax_ignore_global_headers_if_set");for(var f in Og)e=g.F(Og[f]),!e||!c&&!Rg(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Rg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Rg(a,"X-YouTube-Time-Zone"))&&
(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Rg(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=g.Cg(Jg(void 0));return b};
Vaa=function(a){var b=window.location.search,c=g.ld(a),d=g.id(g.kd(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.Dg(b),f={};(0,g.A)(Uaa,function(k){e[k]&&(f[k]=e[k])});
return g.Eg(a,f||{},!1)};
Rg=function(a,b){var c=g.F("CORS_HEADER_WHITELIST")||{},d=g.ld(a);return d?(c=c[d])?g.Ma(c,b):!1:!0};
Waa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Sg(a,b);var d=Tg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&g.ag(f);var l=k.ok,m=function(q){q=q||{};var t=b.context||g.p;l?b.onSuccess&&b.onSuccess.call(t,q,k):b.onError&&b.onError.call(t,q,k);b.Xa&&b.Xa.call(t,q,k)};
"JSON"==(b.format||"JSON")&&(l||400<=k.status&&500>k.status)?k.json().then(m,function(){m(null)}):m(null)}});
b.Bq&&0<b.timeout&&(f=g.Zf(function(){e||(e=!0,g.ag(f),b.Bq.call(b.context||g.p))},b.timeout))}else g.J(a,b)};
g.J=function(a,b){var c=b.format||"JSON";a=Sg(a,b);var d=Tg(a,b),e=!1,f,k=Ug(a,function(l){if(!e){e=!0;f&&g.ag(f);var m=g.Ng(l),q=null,t=400<=l.status&&500>l.status,y=500<=l.status&&600>l.status;if(m||t||y)q=Xaa(c,l,b.lb);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};t=b.context||g.p;m?b.onSuccess&&b.onSuccess.call(t,l,q):b.onError&&b.onError.call(t,l,q);b.Xa&&b.Xa.call(t,l,q)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Pc&&0<b.timeout&&(f=g.Zf(function(){e||(e=!0,k.abort(),g.ag(f),b.Pc.call(b.context||g.p,k))},b.timeout));
return k};
Sg=function(a,b){b.uR&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.F("XSRF_FIELD_NAME",void 0),d=b.Ta;d&&(d[c]&&delete d[c],a=g.Fg(a,d));return a};
Tg=function(a,b){var c=g.F("XSRF_FIELD_NAME",void 0),d=g.F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.F("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.hv||g.ld(a)&&!b.withCredentials&&g.ld(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=g.Dg(e),g.cb(e,f),e=b.Er&&"JSON"==b.Er?JSON.stringify(e):g.rd(e));f=e||f&&!g.Wa(f);!Vg&&f&&"POST"!=b.method&&(Vg=!0,g.Uf(Error("AJAX request with postData should use POST")));
return e};
Xaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Wg(b):null)d={},(0,g.A)(b.getElementsByTagName("*"),function(e){d[e.tagName]=g.Xg(e)})}c&&Yg(d);
return d};
Yg=function(a){if(g.Ea(a))for(var b in a)"html_content"==b||g.ob(b,"_html")?a[b]=g.bc(a[b],null):Yg(a[b])};
Wg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Xg=function(a){var b="";(0,g.A)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.Zg=function(a,b){b.method="POST";b.ia||(b.ia={});return g.J(a,b)};
Ug=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Vf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Saa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.yg("debug_forward_web_query_parameters")&&(a=Vaa(a));m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Taa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m};
$g=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.ah=function(a){var b=new $g;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.bh=function(a){var b=new $g;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.dh=function(a){var b=a.__yt_uid_key;b||(b=ch(),a.__yt_uid_key=b);return b};
g.eh=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Yaa+"VisibilityState";if(b in a)return a[b]};
g.fh=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Zaa||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}}catch(e){}};
gh=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.hh=function(a){void 0===a.C&&gh(a);return a.C};
g.ih=function(a){void 0===a.F&&gh(a);return a.F};
g.mh=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Va(jh,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,k=g.Ea(e[4])&&g.Ea(d)&&g.Za(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.K=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.mh(a,b,c,d);if(e)return e;e=++nh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(l){l=new g.fh(l);if(!g.gd(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new g.fh(l);
l.currentTarget=a;return c.call(a,l)};
k=Vf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),oh()||"boolean"===typeof d?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);jh[e]=[a,b,c,k,d];return e};
g.ph=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.A)(a,function(b){if(b in jh){var c=jh[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?oh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete jh[b]}}))};
g.qh=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.K(a,b,function(){g.ph(e);c.apply(a,arguments)},d)};
g.rh=function(a){for(var b in jh)jh[b][0]==a&&g.ph(b)};
g.sh=function(a){this.Qb=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.K(window,"mousemove",(0,g.v)(this.Y,this));this.N=g.$f((0,g.v)(this.M,this),25)};
th=function(){g.C.call(this);this.C=[]};
uh=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.$a(b);this.assets=a.assets||{};this.attrs=a.attrs||g.$a(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.vh=function(a){a instanceof uh||(a=new uh(a));return a};
wh=function(a){a=Error.call(this,a);this.message=a.message;"stack"in a&&(this.stack=a.stack)};
g.zh=function(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||g.F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;d=window&&window.yterr||!1;if(a&&d&&!(5<=xh)){g.yg("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),
window.console.log(d,a));d=a.C;e=a.columnNumber;if(a.hasOwnProperty("params"))if(f=a.params,"object"===typeof a.params){var k=0;for(q in f)if(f[q]){var l="params."+q,m=String(JSON.stringify(f[q])).substr(0,500);c[l]=m;k+=l.length+m.length;if(500<k)break}}else c.params=String(JSON.stringify(f)).substr(0,500);a=g.Fc(a);(d=d||a.stack)||(d="Not available");var q=a.lineNumber.toString();isNaN(q)||!e||isNaN(e)||(q=q+":"+e);window.yterr&&g.Da(window.yterr)&&window.yterr(a);if(!(yh.has(a.message)||0<=d.indexOf("/YouTubeCenter.js")||
0<=d.indexOf("/mytube.js"))){q={Ta:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:q,level:b,"client.name":c.name},ia:{url:g.F("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(q["client.version"]=c.version);if(q.ia){d&&(q.ia.stack=d);b=g.da(Object.keys(c));for(d=b.next();!d.done;d=b.next())d=d.value,q.ia["client."+d]=c[d];if(c=g.F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(b=g.da(Object.keys(c)),d=b.next();!d.done;d=b.next())d=d.value,
q.ia[d]=c[d]}g.J(g.F("ECATCHER_REPORT_HOST","")+"/error_204",q);yh.add(a.message);xh++}}};
g.Ah=function(a,b,c,d,e,f){g.zh(a,void 0===b?"ERROR":b,c,d,void 0===e?!1:e,f)};
g.Gh=function(){g.ag(g.Bh);g.ag(g.Ch);g.Ch=0;if(!g.Wa(g.Dh)){for(var a in g.Dh){var b=Eh[a];b&&b.isReady()&&($aa(a,b),delete g.Dh[a])}g.Wa(g.Dh)||g.Fh()}};
aba=function(){var a=[];for(e in g.Dh){var b=Hh[e]||{};Hh[e]=b;for(var c in g.Dh[e]){var d=Ih(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round((0,g.Jh)());for(var f in Hh)b=Hh[f],b.eventType=f in Kh?Kh[f]:"UNKNOWN_TYPE",c=Lh[f],b.metricIntervalMs=c?e-c:e-g.Mh,a.push(b),Lh[f]=e,delete Hh[f];return a};
g.Fh=function(){g.yg("web_gel_timeout_cap")&&!g.Ch&&(g.Ch=g.Zf(g.Gh,6E4));g.ag(g.Bh);var a=g.zg("web_gel_debounce_ms",1E4);g.Bh=g.Zf(g.Gh,g.F("LOGGING_BATCH_TIMEOUT",g.Nh||a))};
Ih=function(a,b){b=void 0===b?"":b;g.Dh[a]=g.Dh[a]||{};g.Dh[a][b]=g.Dh[a][b]||[];return g.Dh[a][b]};
$aa=function(a,b){var c=bba[a],d=Hh[a]||{};Hh[a]=d;var e=Math.round((0,g.Jh)());for(q in g.Dh[a]){var f=g.ab({context:g.Oh(b.C||g.Ph())});f[c]=Ih(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;var k=Qh[q];if(k)a:{var l=q;if(k.videoId)var m="VIDEO";else if(k.playlistId)m="PLAYLIST";else break a;f.credentialTransferTokenTargetId=k;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Qh[q];
f.requestTimeMs=e;g.yg("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(k=g.F("EVENT_ID",void 0))m=(g.F("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>cba&&(m=1),g.Rf("BATCH_CLIENT_COUNTER",m),k={serializedEventId:k,clientCounter:m},f.serializedClientEventId=k,Rh&&Sh&&g.yg("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Rh,roundtripMs:Sh}),Rh=k,Sh=0;g.Th(b,a,f,{retry:dba.has(a),onSuccess:(0,g.v)(eba,this,(0,g.Jh)())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;
var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e};
eba=function(a){Sh=Math.round((0,g.Jh)()-a)};
g.Wh=function(a){var b=void 0===a?{}:a;a=void 0===b.vy?!0:b.vy;b=void 0===b.cG?!1:b.cG;if(null==g.u("_lact",window)){var c=parseInt(g.F("LACT"),10);c=isFinite(c)?(0,g.Mc)()-Math.max(c,0):-1;g.r("_lact",c,window);g.r("_fact",c,window);-1==c&&g.Uh();g.K(document,"keydown",g.Uh);g.K(document,"keyup",g.Uh);g.K(document,"mousedown",g.Uh);g.K(document,"mouseup",g.Uh);a&&(b?g.K(window,"touchmove",function(){Vh("touchmove",200)},{passive:!0}):(g.K(window,"resize",function(){Vh("resize",200)}),g.K(window,
"scroll",function(){Vh("scroll",200)})));
new g.sh(function(){Vh("mouse",100)});
g.K(document,"touchstart",g.Uh,{passive:!0});g.K(document,"touchend",g.Uh,{passive:!0})}};
Vh=function(a,b){Xh[a]||(Xh[a]=!0,g.sg(function(){g.Uh();Xh[a]=!1},b))};
g.Uh=function(){null==g.u("_lact",window)&&g.Wh();var a=(0,g.Mc)();g.r("_lact",a,window);-1==g.u("_fact",window)&&g.r("_fact",a,window);(a=g.u("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Yh=function(){var a=g.u("_lact",window);return null==a?-1:Math.max((0,g.Mc)()-a,0)};
g.bi=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.Jh)());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.Yh())};g.yg("log_sequence_info_on_gel_web")&&d.Le&&(a=e.context,b=d.Le,Zh[b]=b in Zh?Zh[b]+1:0,a.sequence={index:Zh[b],groupKey:b},d.av&&delete Zh[d.Le]);(d=d.Yf)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Qh[d.token]=a,d=Ih("log_event",d.token)):d=Ih("log_event");d.push(e);c&&(Eh.log_event=new c);c=g.zg("web_logging_max_batch")||
100;e=(0,g.Jh)();d.length>=c?g.Gh():e-g.$h>=g.ai&&(g.Fh(),g.$h=e)};
ci=function(){return"INNERTUBE_API_KEY"in g.Qf&&"INNERTUBE_API_VERSION"in g.Qf};
g.Ph=function(){return{innertubeApiKey:g.F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.F("INNERTUBE_API_VERSION",void 0),xy:g.F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),yy:g.F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ay:g.F("INNERTUBE_CONTEXT_HL",void 0),zy:g.F("INNERTUBE_CONTEXT_GL",void 0),By:g.F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Cy:!!g.F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}};
g.Oh=function(a){a={client:{hl:a.Ay,gl:a.zy,clientName:a.yy,clientVersion:a.innertubeContextClientVersion,configInfo:a.xy}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=g.F("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=g.F("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=g.F("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request=
{internalExperimentFlags:b});g.F("DELEGATED_SESSION_ID")&&!g.yg("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.F("DELEGATED_SESSION_ID")});return a};
di=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.oR||g.F("AUTHORIZATION"))||(a?b="Bearer "+g.u("gapi.auth.getToken")().mR:b=Qd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.F("SESSION_INDEX",0),g.yg("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.F("DELEGATED_SESSION_ID")));return d};
ei=function(a){a=Object.assign({},a);delete a.Authorization;var b=Qd();if(b){var c=new bf;c.update(g.F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=wc(c.digest(),3)}return a};
g.gi=function(a,b,c,d){g.fi.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.hi=function(a,b,c){g.fi.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.ii=function(a){var b;(b=g.Kf(a))||(a=new Ff(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.zf(a):null;this.F=document.domain||window.location.hostname};
fba=function(a,b,c,d){if(d)return null;d=ji.get("nextId",!0)||1;var e=ji.get("requests",!0)||{};e[d]={method:a,request:b,authState:ei(c),requestTime:Math.round((0,g.Jh)())};ji.set("nextId",d+1,86400,!0);ji.set("requests",e,86400,!0);return d};
ki=function(a){var b=ji.get("requests",!0)||{};delete b[a];ji.set("requests",b,86400,!0)};
li=function(a){var b=ji.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round((0,g.Jh)())-d.requestTime)){var e=d.authState,f=ei(di(!1));g.Za(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round((0,g.Jh)())),g.Th(a,d.method,e,{}));delete b[c]}}ji.set("requests",b,86400,!0)}};
g.mi=function(a){var b=this;this.C=null;a?this.C=a:g.yg("delay_gel_until_config_ready")?ci()&&(this.C=g.Ph()):this.C=g.Ph();g.rg(function(){li(b)},5E3)};
g.Th=function(a,b,c,d){!g.F("VISITOR_DATA")&&.01>Math.random()&&g.Uf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,Er:"JSON",Pc:function(){d.Pc()},
Bq:d.Pc,onSuccess:function(B,H){if(d.onSuccess)d.onSuccess(H)},
kj:function(B){if(d.onSuccess)d.onSuccess(B)},
onError:function(B,H){if(d.onError)d.onError(H)},
Aq:function(B){if(d.onError)d.onError(B)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.By;k&&(f=k);k=a.C.Cy||!1;var l=di(k,f,d);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=g.Fg(""+f+("/youtubei/"+a.C.innertubeApiVersion+"/"+b),{alt:"json",key:a.C.innertubeApiKey}),q;if(d.retry&&g.yg("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(q=fba(b,c,l,k))){var t=e.onSuccess,y=e.kj;e.onSuccess=function(B,H){ki(q);t(B,H)};
c.kj=function(B,H){ki(q);y(B,H)}}try{g.yg("use_fetch_for_op_xhr")?Waa(m,e):g.Zg(m,e)}catch(B){if("InvalidAccessError"==B)q&&(ki(q),q=0),g.Uf(Error("An extension is blocking network request."),"WARNING");
else throw B;}q&&g.rg(function(){li(a)},5E3)};
g.ni=function(a,b,c){c=void 0===c?{}:c;var d=g.mi;g.F("ytLoggingEventsDefaultDisabled",!1)&&g.mi==g.mi&&(d=null);g.bi(a,b,d,c)};
g.oi=function(){g.yg("log_web_meta")&&aba().forEach(function(a){g.ni("delayedEventMetricCaptured",a)})};
g.pi=function(a){this.C=a};
g.qi=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.qi(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.ri=function(a,b){this.version=a;this.args=b};
g.si=function(a,b){this.topic=a;this.C=b};
g.ui=function(a,b){var c=ti();c&&c.publish.call(c,a.toString(),a,b)};
g.yi=function(a,b,c){var d=ti();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,k){var l=g.u("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(vi[e])try{if(k&&a instanceof g.si&&a!=f)try{var m=a.C,q=k;if(!q.args||!q.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.Pe){var t=new m;m.Pe=t.version}var y=m.Pe}catch(B){}if(!y||q.version!=y)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=Reflect.construct(m,
g.Qa(q.args))}catch(B){throw B.message="yt.pubsub2.Data.deserialize(): "+B.message,B;}}catch(B){throw B.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+B.message,B;}b.call(c||window,k)}catch(B){g.Uf(B)}},wi[a.toString()]?g.wg()?g.sg(l):g.Zf(l,0):l())});
vi[e]=!0;xi[a.toString()]||(xi[a.toString()]=[]);xi[a.toString()].push(e);return e};
iba=function(){var a=gba,b=g.yi(hba,function(c){a.apply(void 0,arguments);g.zi(b)},void 0);
return b};
g.zi=function(a){var b=ti();b&&("number"===typeof a&&(a=[a]),(0,g.A)(a,function(c){b.unsubscribeByKey(c);delete vi[c]}))};
ti=function(){return g.u("ytPubsub2Pubsub2Instance")};
Ai=function(a){g.ri.call(this,1,arguments);this.csn=a};
g.Di=function(a,b,c){Bi.push({SF:a,payload:b,options:c});Ci||(Ci=iba())};
gba=function(a){if(Bi){for(var b=g.da(Bi),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,g.bi(c.SF,c.payload,null,c.options));Bi.length=0}Ci=0};
g.Ei=function(a,b,c){(0,g.A)(b,function(d){var e=c;e=void 0===e?!1:e;d={csn:a,ve:g.qi(d),eventType:e?16:8};e={Yf:void 0,Le:a,av:e};"UNDEFINED_CSN"==a?g.Di("visualElementHidden",d,e):g.bi("visualElementHidden",d,g.mi,e)})};
Gi=function(a,b){var c=Object.keys(a).join("");Fi("info_"+c+"_"+b)||(a.clientActionNonce=b,g.ni("latencyActionInfo",a))};
Fi=function(a){Hi[a]=Hi[a]||{count:0};var b=Hi[a];b.count++;b.time=(0,g.Jh)();Li||(Li=g.rg(jba,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;g.Ah(c,b)}return!0}return!1};
jba=function(){var a=(0,g.Jh)(),b;for(b in Hi)6E4<a-Hi[b].time&&delete Hi[b];Li=0};
Ni=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Mc)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Mi)for(a=1,b=0;b<Mi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Mi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Si=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Oi==a)return;Oi=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Yh()>b)&&"visible"==g.eh()){b=-1;g.Pi&&(b=Math.round((0,g.Jh)()-g.Pi));var c=String;var d=g.u("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Mc)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:Qi,index:String(Ri),lastEventDeltaMs:String(b),trigger:a};g.bi("foregroundHeartbeat",
a,g.mi);g.r("_fact",-1,window);Ri++;g.Pi=(0,g.Jh)()}};
g.Ti=function(a){a&&g.bi("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Qi,clientScreenNonce:a},g.mi)};
Ui=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
Vi=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
Wi=function(a){return g.F(Vi(void 0===a?0:a),void 0)};
g.Xi=function(){var a=Wi(0),b;a?b=new g.pi({veType:a,youtubeData:void 0}):b=null;return b};
g.Yi=function(a){a=void 0===a?0:a;var b=g.F(Ui(a));b||0!=a||(g.yg("kevlar_client_side_screens")||g.yg("c3_client_side_screens")?b="UNDEFINED_CSN":b=g.F("EVENT_ID"));return b?b:null};
g.Zi=function(a,b,c){c=void 0===c?0:c;if(a!==g.F(Ui(c))||b!==g.F(Vi(c)))g.Rf(Ui(c),a),g.Rf(Vi(c),b),0==c&&(b=function(){setTimeout(function(){g.Ti(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
$i=function(){var a=g.Xi(),b=g.Yi();b&&a&&g.Ei(b,[a],!0)};
g.aj=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Vf(d):null;this.H=e?Vf(e):null;this.G=[];this.C=this.F=0};
g.bj=function(a){g.tg(a.F);a.F=g.sg((0,g.v)(a.init,a))};
g.ej=function(a){a.name in cj&&dj(a.name);cj[a.name]={reqs:[],disable:(0,g.v)(a.disable,a)};(0,g.A)(a.deps,function(b){if(!(b in cj))throw Error("Module "+b+" required by "+a.name);cj[b].reqs.push(a.name)});
a.enable()};
dj=function(a){if(a in cj){var b=cj[a];(0,g.A)(b.reqs,function(c){dj(c)});
try{b.disable()}catch(c){}delete cj[a]}};
gj=function(a){Pf(g.fj,arguments)};
g.hj=function(a){return a in g.fj};
ij=function(a){Pf(g.fj,arguments)};
g.jj=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Pb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Db(g.Hb(a)),"about:invalid#zClosurez"===a?a="":(a=g.Zb(g.ac(a)),a=g.fc(g.pf(a))),g.pb(a)||(a=g.$c("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.fd(a).body.appendChild(a))):e?Ug(a,b,"POST",e,d):g.F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ug(a,b,"GET","",d):kba(a,b)||lba(a,b))};
kba=function(a,b){if(!Tf("web_use_beacon_api_for_ad_click_server_pings"))return!1;var c=g.id(g.kd(5,a));return c&&-1!=c.indexOf("/aclk")&&"1"===g.wd(a,"ae")&&"1"===g.wd(a,"act")?kj(a)?(b&&b(),!0):!1:!1};
kj=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
lba=function(a,b){var c=new Image,d=""+mba++;lj[d]=c;c.onload=c.onerror=function(){b&&lj[d]&&b();delete lj[d]};
c.src=a};
g.mj=function(a,b){a=a||"";var c=a.match(nba);spf.style.load(a,c?c[1]:"",b)};
pj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!nj(a)||c.some(function(e){return!nj(e)}))throw Error("Only objects may be merged.");
c=g.da(c);for(d=c.next();!d.done;d=c.next())oj(a,d.value);return a};
oj=function(a,b){for(var c in b)if(nj(b[c])){if(c in a&&!nj(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});oj(a[c],b[c])}else if(qj(b[c])){if(c in a&&!qj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);rj(a[c],b[c])}else a[c]=b[c];return a};
rj=function(a,b){for(var c=g.da(b),d=c.next();!d.done;d=c.next())d=d.value,nj(d)?a.push(oj({},d)):qj(d)?a.push(rj([],d)):a.push(d);return a};
nj=function(a){return"object"===typeof a&&!Array.isArray(a)};
qj=function(a){return"object"===typeof a&&Array.isArray(a)};
g.sj=function(a,b,c){var d=void 0===d?!0:d;var e=g.F("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=g.ld(window.location.href);f&&e.push(f);f=g.ld(a);if(g.Ma(e,f)||!f&&g.nb(a,"/"))if(g.yg("autoescape_tempdata_url")&&(e=document.createElement("a"),g.cc(e,a),a=e.href),a&&(a=g.md(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.Yi()},b)),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+g.kc(a).toString(36),b=b?g.rd(b):"",g.gi(d,b,c||5))):(c=b,b="ST-"+g.kc(a).toString(36),
c=c?g.rd(c):"",g.gi(b,c,5))};
g.tj=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.ec(d.location,g.sd(a,b)+c)};
g.uj=function(a,b){b&&g.sj(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.tj(a)};
g.vj=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.F("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.sj(a,b);if(c)return!1;g.uj(a);return!0};
zj=function(a,b,c,d){g.C.call(this);var e=this;this.H=this.ab=a;this.ha=b;this.M=!1;this.api={};this.oa=this.N=null;this.Y=new g.sf;g.Td(this,this.Y);this.D={};this.la=this.Ka=this.F=this.sb=this.C=null;this.V=!1;this.G=this.J=null;this.mb={};this.Td=["onReady"];this.qb=null;this.wb=NaN;this.X={};this.L=d;wj(this);this.Th("WATCH_LATER_VIDEO_ADDED",this.BD.bind(this));this.Th("WATCH_LATER_VIDEO_REMOVED",this.CD.bind(this));this.Th("onAdAnnounce",this.Wt.bind(this));this.Nb=new th(this);g.Td(this,this.Nb);
this.aa=0;c?this.aa=g.Zf(function(){e.loadNewVideoConfig(c)},0):d&&(xj(this),yj(this))};
xj=function(a){var b;a.L?b=a.L.rootElementId:b=a.C.attrs.id;a.F=b||a.F;"video-player"==a.F&&(a.F=a.ha,a.C.attrs.id=a.ha);a.H.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F)};
Aj=function(a){a.C&&!a.C.loaded&&(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Dj=function(a){var b=!0,c=Bj(a);c&&a.C&&(a=Cj(a),b=g.G(c,"version")==a);return b&&!!g.u("yt.player.Application.create")};
yj=function(a){if(!a.ob()&&!a.V){var b=Dj(a);if(b&&"html5"==(Bj(a)?"html5":null))a.la="html5",a.M||Ej(a);else if(Fj(a),a.la="html5",b&&a.G)a.ab.appendChild(a.G),Ej(a);else{a.C&&(a.C.loaded=!0);var c=!1;a.J=function(){c=!0;var d=g.u("yt.player.Application.create"),e=a.C?a.C.clone():void 0;d(a.ab,e,a.L);Ej(a)};
a.V=!0;b?a.J():(g.lg(Cj(a),a.J),g.mj(a.L?a.L.cssUrl:a.C.assets.css),Gj(a)&&!c&&g.r("yt.player.Application.create",null,void 0))}}};
Bj=function(a){var b=g.z(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
Ej=function(a){if(!a.ob()){var b=Bj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&a.C&&b.isNotServable(a.C.args.video_id)||oba(a)):a.wb=g.Zf(function(){Ej(a)},50)}};
oba=function(a){wj(a);a.M=!0;var b=Bj(a);b.addEventListener&&(a.N=Hj(a,b,"addEventListener"));b.removeEventListener&&(a.oa=Hj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Hj(a,b,e))}for(var f in a.D)a.N(f,a.D[f]);Aj(a);a.Ka&&a.Ka(a.api);a.Y.na("onReady",a.api)};
Hj=function(a,b,c){var d=b[c];return function(){try{return a.qb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.qb=e,g.Wf(e))}}};
wj=function(a){a.M=!1;if(a.oa)for(var b in a.D)a.oa(b,a.D[b]);for(var c in a.X)g.ag(parseInt(c,10));a.X={};a.N=null;a.oa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Th.bind(a);a.api.removeEventListener=a.iG.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Gv.bind(a);a.api.getPlayerType=a.Mv.bind(a);a.api.getCurrentVideoConfig=a.Cv.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.xz.bind(a)};
Ij=function(a,b){var c=b;if("string"==typeof b){if(a.mb[b])return a.mb[b];c=function(){var d=g.u(b);d&&d.apply(g.p,arguments)};
a.mb[b]=c}return c?c:null};
pba=function(a,b){var c="ytPlayer"+b+a.ha;a.D[b]=c;g.p[c]=function(d){var e=g.Zf(function(){a.ob()||(a.Y.na(b,d),g.Xa(a.X,String(e)))},0);
g.Ya(a.X,String(e),!0)};
return c};
Fj=function(a){a.cancel();wj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=Bj(a);b&&(Dj(a)||!Gj(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.dd(a.ab)};
Gj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
Cj=function(a){return a.L?a.L.jsUrl:a.C.assets.js};
g.Lj=function(a,b){var c=void 0===c?!0:c;a="string"===typeof a?g.Tc(a):a;var d=g.Jj+"_"+g.Ha(a),e=g.Kj[d];if(e&&c)return e.loadNewVideoConfig(b),e.api;e=new zj(a,d,b,void 0);g.Kj[d]=e;g.I("player-added",e.api);g.Rd(e,g.w(qba,e));return e.api};
qba=function(a){delete g.Kj[a.getId()]};
g.Mj=function(a){if(!a)return null;var b=g.Jj+"_"+g.Ha(a),c=g.Kj[b];c||(c=new zj(a,b),g.Kj[b]=c);return c.api};
g.Nj=function(a){return g.Mj(document.getElementById(a))};
g.Pj=function(a,b){var c={};c.key=a;c.value=b;return Oj().then(function(d){return new Promise(function(e,f){try{var k=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);k.onsuccess=function(){e()};
k.onerror=function(){f()}}catch(l){f(l)}})})};
g.Qj=function(a){return Oj().then(function(b){return new Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var f=e.result;c(f?f.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})},function(){return null})};
Oj=function(){return Rj?Promise.resolve(Rj):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Rj=d,a(Rj);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Oj()};
c.onupgradeneeded=rba})};
rba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
sba=function(a){if(Sj.getEntriesByType){var b=Sj.getEntriesByType("paint");if(b=g.Ka(b,function(d){return"first-paint"==d.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Da(b)){b=b();var c=1E3*Math.min(b.requestTime||Infinity,b.startLoadTime||Infinity);c=Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
Tj=function(a,b){g.ri.call(this,1,arguments)};
Uj=function(a,b){g.ri.call(this,1,arguments)};
tba=function(a,b,c){if(g.yg("debug_csi_data")){var d=g.u("yt.timing.csiData");d||(d=[],g.r("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)a.hasOwnProperty(e)&&(d+="&"+e+"="+a[e]);a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;kj(a,f)||g.jj(a,void 0,void 0,void 0,f)}else g.jj(a);Vj(!0,c)};
Xj=function(a){var b=Wj(a);if(b.aft)return b.aft;a=g.F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
uba=function(a){var b=Wj(a),c=b.pbr,d=b.vc;b=b.pbs;return!!(c&&d&&b&&c<d&&d<b&&Yj(a).yt_pvis)};
Zj=function(a){g.r("ytglobal.timingready_",a,void 0)};
ak=function(a){return!!g.u("yt.timing."+(a||"")+"pingSent_")};
Vj=function(a,b){g.r("yt.timing."+(b||"")+"pingSent_",a,void 0)};
ck=function(a){return g.u("ytcsi."+(a||"")+"data_")||bk(a)};
Yj=function(a){a=ck(a);a.info||(a.info={});return a.info};
Wj=function(a){a=ck(a);a.tick||(a.tick={});return a.tick};
dk=function(a){var b=ck(a).nonce;b||(b=Ni(),ck(a).nonce=b);return b};
bk=function(a){var b={tick:{},info:{}};g.r("ytcsi."+(a||"")+"data_",b,void 0);return b};
fk=function(a){var b=Wj(a||""),c=Xj(a);c&&!ek&&(g.ui(vba,new Tj(Math.round(c-b._start),a)),ek=!0)};
gk=function(){var a=g.u("ytcsi.debug");a||(a=[],g.r("ytcsi.debug",a,void 0),g.r("ytcsi.reference",{},void 0));return a};
ik=function(a){a=a||"";var b=hk();if(b[a])return b[a];var c=gk(),d={timerName:a,info:{},tick:{}};c.push(d);return b[a]=d};
hk=function(){var a=g.u("ytcsi.reference");if(a)return a;gk();return g.u("ytcsi.reference")};
jk=function(a){return!!g.F("FORCE_CSI_ON_GEL",!1)||g.yg("csi_on_gel")||!!ck(a).useGel};
lk=function(a,b,c){var d=kk(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||(0,g.Jh)();return jk(c)?(ik(c||"").tick[a]=b,d=dk(c),"_start"===a?Fi("baseline_"+d)||g.ni("latencyActionBaselined",{clientActionNonce:d},{timestamp:b}):Fi("tick_"+a+"_"+d)||g.ni("latencyActionTicked",{tickName:a,clientActionNonce:d},{timestamp:b}),fk(c),!0):!1};
ok=function(a,b,c){c=kk(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a in mk){c=mk[a];g.Ma(wba,c)&&(b=!!b);a in nk&&"string"===typeof b&&(b=nk[a]+b.toUpperCase());a=c.split(".");d=c={};for(var e=0;e<a.length-1;e++){var f=a[e];d[f]={};d=d[f]}d[a[a.length-1]]=b;return pj({},c)}g.Ma(xba,a)||(b=new wh("Unknown label logged with GEL CSI"),b.params={label:a},g.Wf(b))};
kk=function(a){a=ck(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel};
pk=function(a){a=kk(a);"gelInfos"in a||(a.gelInfos={});return a.gelInfos};
rk=function(a,b,c){null!==b&&(Yj(c)[a]=b,jk(c)?(a=ok(a,b,c))&&qk(a,c):ik(c||"").info[a]=b)};
qk=function(a,b){if(jk(b)){var c=ik(b||"");pj(c.info,a);pj(pk(b),a);c=dk(b);Gi(a,c)}};
sk=function(){bk(void 0);yba();Vj(!1,void 0);g.F("TIMING_ACTION")&&g.Rf("PREVIOUS_ACTION",g.F("TIMING_ACTION"));g.Rf("TIMING_ACTION","")};
Cba=function(){var a=g.F("TIMING_ACTION",void 0),b=g.F("TIMING_AFT_KEYS");ik("").info.actionType=a;b&&g.Rf("TIMING_AFT_KEYS",b);g.Rf("TIMING_ACTION",a);a=g.F("TIMING_INFO",{});for(var c in a)rk(c,a[c]);rk("is_nav",1);(c=g.Yi())&&rk("csn",c);(c=g.F("PREVIOUS_ACTION",void 0))&&!jk()&&rk("pa",c);a=Yj();a.p=g.F("CLIENT_PROTOCOL")||"unknown";a.t=g.F("CLIENT_TRANSPORT")||"unknown";rk("yt_vis",zba());if("cold"==a.yt_lt){rk("yt_lt","cold");c=Sj.timing||{};c.navigationStart&&(g.tk("srt",c.responseStart),1!=
a.prerender&&uk("n",c.navigationStart));a=sba(c);0<a&&g.tk("fpt",a);vk(c);Sj.getEntriesByType&&Aba();c=[];if(document.querySelector&&Sj&&Sj.getEntriesByName)for(var d in wk)a=wk[d],Bba(d,a)&&c.push(a);c.length&&rk("rc",c.join(","))}jk(void 0)&&(d={actionType:xk[g.F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:xk[g.F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"},c=dk(void 0),Gi(d,c));d=Yj();a=Wj();if("cold"===d.yt_lt&&(c=kk(),b=c.gelTicks?c.gelTicks:c.gelTicks={},c=c.gelInfos?
c.gelInfos:c.gelInfos={},jk())){for(var e in a)g.nb(e,"_")||"tick_"+e in b||lk(e,a[e]);e=pk();a=dk();b={};for(var f in d)if(!("info_"+f in c)){var k=ok(f,d[f]);k&&(pj(e,k),pj(b,k))}Gi(b,a)}Zj(!0);g.yk(!1)};
g.tk=function(a,b,c){var d=Wj(c);if(g.yg("use_first_tick")&&zk(a,c))return d[a];if(!b&&"_"!=a[0]){var e=a;Sj.mark&&(g.nb(e,"mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Sj.mark(e))}e=b||(0,g.Jh)();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;lk(a,b,c)||(g.yk(!1,c),ik(c||"").tick[a]=b);return d[a]};
uk=function(a,b){rk("yt_sts",a,void 0);g.tk("_start",b,void 0)};
zk=function(a,b){var c=Wj(b);return a in c};
Ak=function(a,b){if(null!==b)if(Yj(void 0)[a]=b,jk(void 0)){var c=ok(a,b,void 0);c&&qk(c,void 0)}else ik("").info[a]=b};
vk=function(a){g.tk("nreqs",a.requestStart,void 0);g.tk("nress",a.responseStart,void 0);g.tk("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.tk("nrs",a.redirectStart,void 0),g.tk("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.tk("ndnss",a.domainLookupStart,void 0),g.tk("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.tk("ntcps",a.connectStart,void 0),g.tk("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.tk("nstcps",a.secureConnectionStart,void 0),g.tk("ntcpe",a.connectEnd,void 0))};
g.yk=function(a,b){if(!ak(b)){var c=g.F((b||"")+"TIMING_ACTION",void 0),d=Wj(b);if(g.u("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&Xj(b))if(fk(b),a||b)Bk(b);else{c=!0;var e=g.F("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Bk(b)}}};
zba=function(){switch(g.eh()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Bk=function(a){if(!jk(a)){var b=Wj(a),c=Yj(a),d=b._start;for(k in b)if(g.nb(k,"_")&&g.Ba(b[k])){var e=k.slice(1);if(e in Dba){var f=(0,g.Ck)(b[k],function(t){return Math.round(t-d)});
c["all_"+e]=f.join()}delete b[k]}f=g.F("CSI_SERVICE_NAME","youtube");var k={v:2,s:f,action:g.F((a||"")+"TIMING_ACTION",void 0)};e=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var l=window.location.protocol+g.u("ytplayer.config.assets.js");(l=Sj.getEntriesByName?Sj.getEntriesByName(l)[0]:null)?c.h5jse=Math.round(c.h5jse-l.responseEnd):delete c.h5jse}b.aft=Xj(a);uba(a)&&"youtube"==f&&(rk("yt_lt","hot_bg",a),f=b.vc,l=b.pbs,delete b.aft,c.aft=Math.round(l-f));for(var m in c)"_"!=m.charAt(0)&&(k[m]=
c[m]);b.ps=(0,g.Jh)();m={};f=[];for(var q in b)"_"!=q.charAt(0)&&(l=Math.round(b[q]-d),m[q]=l,f.push(q+"."+l));k.rt=f.join(",");(b=g.u("ytdebug.logTiming"))&&b(k,m);tba(k,!!c.ap,a);g.ui(Eba,new Uj(m.aft+(e||0),a))}};
Ek=function(a){if(!jk(void 0)&&!ak(void 0)){var b=g.F("CSI_SERVICE_NAME","youtube");g.F("TIMING_ACTION",void 0)&&b&&(g.tk("aa",void 0,void 0),rk("ap",1,void 0),rk("yt_fss",a,void 0),Bk(void 0))}};
Aba=function(){var a=window.location.protocol,b=Sj.getEntriesByType("resource");b=(0,g.Fk)(b,function(c){return 0==c.name.indexOf(a+"//web.archive.org/web/20200101002945/https://fonts.gstatic.com/s/")});
(b=(0,g.Mf)(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.tk("wffs",Math.round((Sj.timing||{}).navigationStart+b.startTime)),g.tk("wffe",Math.round((Sj.timing||{}).navigationStart+b.responseEnd)))};
Bba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);g.wa()&&c.setAttribute("nonce",g.wa());return d?(c=Sj.getEntriesByName(d))&&c[0]&&(c=c[0],d=Sj.timing.navigationStart,g.tk("rsf_"+b,d+Math.round(c.fetchStart)),g.tk("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(d=Yj(void 0),e=pk(void 0),"rc"in d||"rc"in e||rk("rc",""),0===c.transferSize))?
!0:!1:!1};
Kba=function(){Gk++;var a=g.Xc(),b=new g.zd(0,0,a.width,a.height);Ak("vph",a.height);Ak("vpw",a.width);g.tk("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[];Hk.start();for(var e=0;e<c;e++){var f=a[e];Ik(f,b)&&(f=Fba(f),f.then(Gba),d.push(f),Jk.push(f))}g.tk("vpcc");b=g.Oe(d).then(Hba);g.Qe(b,Iba);b.then(Jba);Jk.push(b);return b};
Jba=function(){Hk.stop()};
Iba=function(){g.tk("vpr")};
Ik=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.dh(c);if(e in Kk)return!0;if(e in Lk)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Lk[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Lk[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Kk[d[c]]=!0;return!0};
Hba=function(a){var b=g.Xc();b=new g.zd(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Ik(a[d].uy,b)&&c<f&&(c=f)}return c};
Fba=function(a){var b=Gk;return new g.Ie(function(c,d){var e={uy:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){Gk!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},Mk.push(a))})};
Gba=function(a){Hk.start();a=a.time;Nk<a&&(Nk=a,g.tk("lim",a))};
Lba=function(){g.tk("vptl",Nk);g.tk("vpl",Nk)};
Mba=function(){Jk.forEach(function(a){a.cancel()});
Nk=Jk.length=0;Kk={};Lk={};Mk.forEach(function(a){a.slt=void 0});
Mk.length=0};
g.Ok=function(a,b){g.jj("/gen_204?"+a,b)};
Nba=function(a){if(null==a)return[];var b=[];g.yg("ima_prevent_mpu_queries_on_cached_playback")&&0>Pk.indexOf("ad3_module")&&Pk.push("ad3_module");Pk.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Qk=function(){return g.D(g.z("page-container"),"remote-connected")};
Oba=function(){Rk=g.$f(Sk,5E3);var a=g.Tk();a&&(a.addEventListener("onReady",Sk),a.addEventListener("onStateChange",Sk))};
Uk=function(a){for(var b in g.Kj){var c=g.Kj[b];c&&c.cancel()}if(a=a||null)g.Lj("player-api",a),a=g.vh(a),a.loaded=!0;Sk();g.r("ytplayer.config",a,void 0)};
g.Tk=function(){return g.Nj("player-api")};
Sk=function(){var a=g.Tk();if(a){var b=1==(a&&a.isReady()?a.getPlayerState():void 0),c="watch"==g.F("PAGE_NAME"),d=g.Qk();!b||c||d||a.pauseVideo()}};
Wk=function(){g.tk("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){g.tk("cpt");g.I("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(g.tk("cpt"),g.I("on_cpt_tick",(new Date).getTime())):setTimeout(function(){g.tk("cpt");
g.I("on_cpt_tick",(new Date).getTime())},0);
Pba();g.F("CSI_VIEWPORT")&&(Vk=Kba(),Vk.then(function(a){g.tk("vpl",a);Vk=null},function(){}))};
Pba=function(){Xk("init");var a=g.F("PAGE_NAME",void 0);a&&Xk("init-"+a)};
Xk=function(a){g.wg()?Yk.push(g.sg(g.w(g.jg,a),0)):g.I(a)};
Zk=function(){g.ug(Yk);Yk.length=0;Mba();Vk&&(Vk.cancel(),Vk=null);var a=g.F("PAGE_NAME",void 0);a&&g.jg("dispose-"+a);g.jg("dispose")};
Qba=function(){Wk()};
Rba=function(){g.F("TIMING_REPORT_ON_UNLOAD")&&g.yk(!0);Ek("u");g.Si("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");$i();g.oi();g.Gh();Zk();g.jg("pageunload")};
$k=function(){g.Uh()};
al=function(){window.yt_spf_loaded_history=!0;g.Uh()};
fl=function(){bl=1;cl=dl=0;g.F("TIMING_REPORT_ON_UNLOAD")&&g.yk(!0);if(g.yg("warm_load_nav_start_web")){var a=hk();a[""]&&delete a[""];var b={timerName:"",info:{},tick:{}};gk().push(b);a[""]=b;Ek("n");sk();Zj(!1);g.Rf("TIMING_AFT_KEYS",[]);rk("yt_lt","warm");g.Rf("TIMING_ACTION","");g.Rf("TIMING_WAIT",[]);delete g.F("TIMING_INFO",{}).yt_lt;uk("n")}else Ek("n"),sk(),uk("n");a="nr";Sj.mark&&(g.nb(a,"mark_")||(a="mark_"+a),Sj.mark(a));el(Sba);$i();g.jg("navigate")};
il=function(a){a=a.detail.part||a.detail.partial;g.tk("nc"+dl);++dl;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.tk("bc");else{var b=1==bl;bl=2;b?(el(Tba),gl()):el(Uba);if(b=a&&a.data&&a.data.swfcfg)hl(a.timing,b.args),zk("cfg")||g.tk("cfg"),Uk(b)}};
jl=function(){g.tk("np"+cl);++cl};
kl=function(a){a=a.detail.response;var b=1==bl;bl=3;b&&(el(Vba),gl());if(b=a.data&&a.data.swfcfg)hl(a.timing,b.args),zk("cfg")||g.tk("cfg"),Uk(b)};
ol=function(a){g.tk("nd");a=a.detail.response;g.ll=a.cacheKey;a=a.timing;var b=window._spf_state;g.ml.navigationCount=b&&b["nav-counter"]||0;g.yg("warm_load_nav_start_web")?g.tk("srt",a.responseStart):(uk("ne",a.responseStart),Ak("srt",Math.max(0,a.responseStart-a.navigationStart)));Ak("yt_lt",a.spfCached?"hot":"warm");g.tk("pfs",a.fetchStart);g.tk("pfrs",a.responseStart);"redirectStart"in a&&vk(a);el(nl);document.getElementById("content").style.height="";Wk();bl=0};
pl=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Uf(a)};
ql=function(a){g.Ok(g.rd({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Xba=function(){Wba();window.yt_spf_loaded_history=!1};
Yba=function(){};
gl=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Zk();a=g.F("PREVIOUS_ACTION");for(var b in g.Qf)delete g.Qf[b];g.Rf("PREVIOUS_ACTION",a);g.Rf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.r("ytplayer.config",null,void 0);(b=g.Tk())&&b.stopVideo&&(b.stopVideo(),b.getLastError()&&(b=document.getElementById("movie_player"))&&b.stopVideo&&b.stopVideo());Sk()};
el=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.tg(rl);rl=g.sg(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.ag(sl);sl=g.Zf(function(){b.className=e},c)},0)};
Wba=function(){var a=nl[0]+50;g.ag(sl);sl=g.Zf(function(){var b=document.getElementById("progress");b&&b.parentNode.removeChild(b)},a)};
hl=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Nba(b));g.F("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Ok(g.rd(c)))};
ul=function(){return"granted"!=Notification.permission?Promise.resolve():tl().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
wl=function(){vl({type:"notifications_register",data:g.F("ID_TOKEN")})};
tl=function(){var a=Ag("service_worker_scope");try{return navigator.serviceWorker.getRegistration(a)}catch(b){return Promise.reject(b)}};
Zba=function(){return tl().then(xl)["catch"](function(){return!1})};
xl=function(a){return!(!a||!a.pushManager)};
vl=function(a){tl().then(function(b){if(!b||!b.active)return Promise.reject("serviceworker.postMessage");b.active.postMessage(a);return Promise.resolve()})};
$ba=function(){if(!g.F("LOGGED_IN",void 0))return Promise.resolve(!1);var a=Ag("service_worker_push_force_notification_prompt_tag");return a?g.Qj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
dca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?Zba():Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=ul().then(function(){vl({type:"notifications_check_registration",data:g.F("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return aca(a)}).then(function(c){if(c)return bca(),cca().then(function(){})})})};
aca=function(a){return g.F("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.F("LOGGED_IN",void 0)&&(void 0===a?0:a)?$ba().then(function(b){if(b)return!0;b=[eca(),fca()];g.F("LOGGED_IN",void 0)||b.push(gca());return Promise.all(b).then(function(c){return c.every(function(d){return d})})}):Promise.resolve(!1)};
gca=function(){var a=g.zg("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.Qj("WatchCount").then(function(b){return b>=a})};
cca=function(){var a=arguments;g.yg("service_worker_push_prompt_modal_enable")&&hca();return Notification.requestPermission().then(function(b){yl();var c=document.getElementById("ticker");c&&(c.className=c.classList.remove("show"));if("granted"==b)return ul().then(function(){g.Pj("NotificationsDisabled",!1);wl();return Promise.resolve(!0)});
"denied"==b&&wl();return Promise.resolve(!1)})["catch"](function(){yl();
return Promise.reject.apply(Promise,g.ea(a))})};
bca=function(){g.Qj("PromptCount").then(function(a){return g.Pj("PromptCount",a+1)}).then(function(){return g.Pj("PromptTime",(0,g.Mc)())}).then(function(){var a=Ag("service_worker_push_force_notification_prompt_tag");
if(a)return g.Qj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.Pj("PromptTags",JSON.stringify(c))})})};
eca=function(){return-1==g.zg("service_worker_push_prompt_cap")?Promise.resolve(!0):g.Qj("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.zg("service_worker_push_prompt_cap"))})};
fca=function(){var a=g.zg("service_worker_push_prompt_delay_microseconds");return a?g.Qj("PromptTime").then(function(b){return Promise.resolve((0,g.Mc)()-a>(b||0))}):Promise.resolve(!0)};
ica=function(){zl||yl()};
Al=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
hca=function(){var a=g.z("yt-push-prompt-modal-bg");zl=g.yg("service_worker_push_prompt_modal_ignore_click");a?Al(a):(a=g.$c("div",{id:"yt-push-prompt-modal-bg"}),Al(a),document.body.appendChild(a),g.qh(document,"click",ica))};
yl=function(){var a=g.z("yt-push-prompt-modal-bg");a&&g.ed(a)};
jca=function(a){return xl(a)?dca():Promise.resolve()};
lca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(kca)})};
nca=function(){var a="/sw.js",b=g.F("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);try{var c=Bl(a)["catch"](function(){return new Promise(function(){})});
g.yg("service_worker_push_enabled")&&c.then(mca).then(jca)}catch(d){if("SecurityError"!=d.name)throw d;}};
mca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
kca=function(a){a&&Bl("/sw.js?0",a.scope)};
Bl=function(a,b){return navigator.serviceWorker.register(a,{scope:b||Ag("service_worker_scope")||"/"})};
Cl=function(){g.aj.call(this,"www/base");this.D=0};
Dl=function(a){(a=a.detail.name)&&dj(a)};
g.aa=[];fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)El=Object.setPrototypeOf;else{var Fl;a:{var oca={a:!0},Gl={};try{Gl.__proto__=oca;Fl=Gl.a;break a}catch(a){}Fl=!1}El=Fl?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ha=El,ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ka("Promise",function(a){function b(k){this.F=0;this.D=void 0;this.C=[];var l=this.H();try{k(l.resolve,l.reject)}catch(m){l.reject(m)}}
function c(){this.C=null}
function d(k){return k instanceof b?k:new b(function(l){l(k)})}
if(a)return a;c.prototype.F=function(k){if(null==this.C){this.C=[];var l=this;this.D(function(){l.H()})}this.C.push(k)};
var e=ia.setTimeout;c.prototype.D=function(k){e(k,0)};
c.prototype.H=function(){for(;this.C&&this.C.length;){var k=this.C;this.C=[];for(var l=0;l<k.length;++l){var m=k[l];k[l]=null;try{m()}catch(q){this.G(q)}}}this.C=null};
c.prototype.G=function(k){this.D(function(){throw k;})};
b.prototype.H=function(){function k(q){return function(t){m||(m=!0,q.call(l,t))}}
var l=this,m=!1;return{resolve:k(this.N),reject:k(this.G)}};
b.prototype.N=function(k){if(k===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof b)this.V(k);else{a:switch(typeof k){case "object":var l=null!=k;break a;case "function":l=!0;break a;default:l=!1}l?this.Y(k):this.L(k)}};
b.prototype.Y=function(k){var l=void 0;try{l=k.then}catch(m){this.G(m);return}"function"==typeof l?this.la(l,k):this.L(k)};
b.prototype.G=function(k){this.M(2,k)};
b.prototype.L=function(k){this.M(1,k)};
b.prototype.M=function(k,l){if(0!=this.F)throw Error("Cannot settle("+k+", "+l+"): Promise already settled in state"+this.F);this.F=k;this.D=l;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var k=0;k<this.C.length;++k)f.F(this.C[k]);this.C=null}};
var f=new c;b.prototype.V=function(k){var l=this.H();k.ai(l.resolve,l.reject)};
b.prototype.la=function(k,l){var m=this.H();try{k.call(l,m.resolve,m.reject)}catch(q){m.reject(q)}};
b.prototype.then=function(k,l){function m(B,H){return"function"==typeof B?function(P){try{q(B(P))}catch(S){t(S)}}:H}
var q,t,y=new b(function(B,H){q=B;t=H});
this.ai(m(k,q),m(l,t));return y};
b.prototype["catch"]=function(k){return this.then(void 0,k)};
b.prototype.ai=function(k,l){function m(){switch(q.F){case 1:k(q.D);break;case 2:l(q.D);break;default:throw Error("Unexpected state: "+q.F);}}
var q=this;null==this.C?f.F(m):this.C.push(m)};
b.resolve=d;b.reject=function(k){return new b(function(l,m){m(k)})};
b.race=function(k){return new b(function(l,m){for(var q=g.da(k),t=q.next();!t.done;t=q.next())d(t.value).ai(l,m)})};
b.all=function(k){var l=g.da(k),m=l.next();return m.done?d([]):new b(function(q,t){function y(P){return function(S){B[P]=S;H--;0==H&&q(B)}}
var B=[],H=0;do B.push(void 0),H++,d(m.value).ai(y(B.length-1),t),m=l.next();while(!m.done)})};
return b});
ma.prototype.toString=function(){return this.C};
var aaa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
ka("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ka("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&k<e;)if(d[k++]!=b[l++])return!1;return l>=f}});
ka("String.prototype.repeat",function(a){return a?a:function(b){var c=qa(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
ka("Array.prototype.keys",function(a){return a?a:function(){return sa(this,function(b){return b})}});
ka("Array.prototype.values",function(a){return a?a:function(){return sa(this,function(b,c){return c})}});
var pca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||pca});
ka("WeakMap",function(a){function b(m){this.nb=(l+=Math.random()+1).toString();if(m){m=g.da(m);for(var q;!(q=m.next()).done;)q=q.value,this.set(q[0],q[1])}}
function c(){}
function d(m){var q=typeof m;return"object"===q&&null!==m||"function"===q}
function e(m){if(!ta(m,k)){var q=new c;ja(m,k,{value:q})}}
function f(m){var q=Object[m];q&&(Object[m]=function(t){if(t instanceof c)return t;e(t);return q(t)})}
if(function(){if(!a||!Object.seal)return!1;try{var m=Object.seal({}),q=Object.seal({}),t=new a([[m,2],[q,3]]);if(2!=t.get(m)||3!=t.get(q))return!1;t["delete"](m);t.set(q,4);return!t.has(m)&&4==t.get(q)}catch(y){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var l=0;b.prototype.set=function(m,q){if(!d(m))throw Error("Invalid WeakMap key");e(m);if(!ta(m,k))throw Error("WeakMap key fail: "+m);m[k][this.nb]=q;return this};
b.prototype.get=function(m){return d(m)&&ta(m,k)?m[k][this.nb]:void 0};
b.prototype.has=function(m){return d(m)&&ta(m,k)&&ta(m[k],this.nb)};
b.prototype["delete"]=function(m){return d(m)&&ta(m,k)&&ta(m[k],this.nb)?delete m[k][this.nb]:!1};
return b});
ka("Map",function(a){function b(){var l={};return l.previous=l.next=l.head=l}
function c(l,m){var q=l.F;return oa(function(){if(q){for(;q.head!=l.F;)q=q.previous;for(;q.next!=q.head;)return q=q.next,{done:!1,value:m(q)};q=null}return{done:!0,value:void 0}})}
function d(l,m){var q=m&&typeof m;"object"==q||"function"==q?f.has(m)?q=f.get(m):(q=""+ ++k,f.set(m,q)):q="p_"+m;var t=l.C[q];if(t&&ta(l.C,q))for(var y=0;y<t.length;y++){var B=t[y];if(m!==m&&B.key!==B.key||m===B.key)return{id:q,list:t,index:y,kc:B}}return{id:q,list:t,index:-1,kc:void 0}}
function e(l){this.C={};this.F=b();this.size=0;if(l){l=g.da(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var l=Object.seal({x:4}),m=new a(g.da([[l,"s"]]));if("s"!=m.get(l)||1!=m.size||m.get({x:4})||m.set({x:4},"t")!=m||2!=m.size)return!1;var q=m.entries(),t=q.next();if(t.done||t.value[0]!=l||"s"!=t.value[1])return!1;t=q.next();return t.done||4!=t.value[0].x||"t"!=t.value[1]||!q.next().done?!1:!0}catch(y){return!1}}())return a;
g.pa();var f=new WeakMap;e.prototype.set=function(l,m){l=0===l?0:l;var q=d(this,l);q.list||(q.list=this.C[q.id]=[]);q.kc?q.kc.value=m:(q.kc={next:this.F,previous:this.F.previous,head:this.F,key:l,value:m},q.list.push(q.kc),this.F.previous.next=q.kc,this.F.previous=q.kc,this.size++);return this};
e.prototype["delete"]=function(l){l=d(this,l);return l.kc&&l.list?(l.list.splice(l.index,1),l.list.length||delete this.C[l.id],l.kc.previous.next=l.kc.next,l.kc.next.previous=l.kc.previous,l.kc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(l){return!!d(this,l).kc};
e.prototype.get=function(l){return(l=d(this,l).kc)&&l.value};
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
g.Hl=g.Hl||{};g.p=this||self;baa=/^[\w+/_-]+[=]{0,2}$/;va=null;Fa="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Mc=Date.now||function(){return+new Date};g.x(g.Ia,Error);g.Ia.prototype.name="CustomError";g.La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.rca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Fk=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k="string"===typeof a?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.Ck=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Mf=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.v)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.A)(a,function(f,k){e=b.call(d,e,f,k,a)});
return e};
g.Il=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Jl=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.fb.prototype.Qd=!0;g.fb.prototype.Wc=function(){return this.C};
var eb={},db={},vaa=g.hb("");g.sca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.tca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Kl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");var jb;g.kb.prototype.Qd=!0;g.kb.prototype.Wc=function(){return this.F.toString()};
g.kb.prototype.jl=!0;g.kb.prototype.C=function(){return 1};
jb={};g.ib={};var qb,rb,sb,tb,ub,vb,faa;g.xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
qb=/&/g;rb=/</g;sb=/>/g;tb=/"/g;ub=/'/g;vb=/\x00/g;faa=/[\x00&<>"']/;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Cb.prototype.Qd=!0;g.Cb.prototype.Wc=function(){return this.F.toString()};
g.Cb.prototype.jl=!0;g.Cb.prototype.C=function(){return 1};
var haa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,gaa=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,Gb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Bb={},Ab={};g.Kb.prototype.Qd=!0;g.Jb={};g.Kb.prototype.Wc=function(){return this.C};
g.Ll=g.Lb("");g.Ml=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.Nl=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Nb.prototype.Qd=!0;g.Mb={};g.Nb.prototype.Wc=function(){return this.C};
g.uca=g.Ob("");a:{var Ol=g.p.navigator;if(Ol){var Pl=Ol.userAgent;if(Pl){g.Pb=Pl;break a}}g.Pb=""};g.Xb.prototype.jl=!0;g.Xb.prototype.C=function(){return this.D};
g.Xb.prototype.Qd=!0;g.Xb.prototype.Wc=function(){return this.F.toString()};
var Wb={};g.bc("<!DOCTYPE html>",0);g.ve=g.bc("",0);g.Ql=g.bc("<br>",0);g.vca=g.Sa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.Yb(g.ve);return!b.parentElement});g.ic=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.nc[" "]=g.xa;var Yl,iaa,bm;g.Rl=g.Qb("Opera");g.E=g.Rb();g.Sl=g.Qb("Edge");g.Tl=g.Sl||g.E;g.Ul=g.Qb("Gecko")&&!(-1!=g.Pb.toLowerCase().indexOf("webkit")&&!g.Qb("Edge"))&&!(g.Qb("Trident")||g.Qb("MSIE"))&&!g.Qb("Edge");g.Vl=-1!=g.Pb.toLowerCase().indexOf("webkit")&&!g.Qb("Edge");g.Wl=g.Qb("Macintosh");g.Xl=g.Qb("Windows");g.wca=g.Qb("Linux")||g.Qb("CrOS");g.xca=g.Qb("Android");g.yca=lc();g.zca=g.Qb("iPad");g.Aca=g.Qb("iPod");g.Bca=g.mc();
a:{var Zl="",$l=function(){var a=g.Pb;if(g.Ul)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Sl)return/Edge\/([\d\.]+)/.exec(a);if(g.E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Vl)return/WebKit\/(\S+)/.exec(a);if(g.Rl)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
$l&&(Zl=$l?$l[1]:"");if(g.E){var am=pc();if(null!=am&&am>parseFloat(Zl)){Yl=String(am);break a}}Yl=Zl}g.qc=Yl;iaa={};bm=g.p.document&&g.E?pc():void 0;g.sc=bm;g.cm=Sb();g.dm=lc()||g.Qb("iPod");g.em=g.Qb("iPad");g.Cca=g.Vb();g.fm=Tb();g.gm=g.Ub()&&!g.mc();var vc;vc={};g.xc=null;g.yc.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.yc.prototype[Symbol.iterator]=function(){return this});g.Dc="function"==typeof Uint8Array;g.zc.prototype.cd=function(){Ac(this);return this.ec};
g.zc.prototype.F=g.Dc?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return wc(this)};
try{return JSON.stringify(this.ec&&this.cd(),Bc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.cd(),Bc)};
g.zc.prototype.toString=function(){Ac(this);return this.ec.toString()};
g.zc.prototype.clone=function(){return new this.constructor(Cc(this.cd()))};g.hm=document;g.Ed=window;var Gc={};g.h=g.Hc.prototype;g.h.isEnabled=function(){return navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if("object"===typeof c){var k=c.F;f=c.secure;e=c.domain;d=c.path;c=c.C}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===c&&(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Mc)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f+(null!=k?";samesite="+k:"")};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.xb)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",0,b,c);return d};
g.h.yc=function(){return g.Ic(this).keys};
g.h.Db=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Gb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.xd=g.ba(3);g.h.clear=function(){for(var a=g.Ic(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.fi=new g.Hc("undefined"==typeof document?null:document);g.im={Ga:["BC","AD"],La:["Before Christ","Anno Domini"],Ma:"JFMAMJJASOND".split(""),Na:"JFMAMJJASOND".split(""),va:"January February March April May June July August September October November December".split(" "),ra:"January February March April May June July August September October November December".split(" "),wa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ba:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Da:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Ja:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Aa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Ca:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Pa:"SMTWTFS".split(""),Oa:"SMTWTFS".split(""),Ia:["Q1","Q2","Q3","Q4"],Ha:["1st quarter","2nd quarter","3rd quarter","4th quarter"],za:["AM","PM"],qa:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],xa:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Fa:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],sa:6,Ea:[5,6],ua:5};
g.jm=g.im;g.jm=g.im;g.h=g.Nc.prototype;g.h.De=g.jm.sa;g.h.Wg=g.jm.ua;g.h.clone=function(){var a=new g.Nc(this.date);a.De=this.De;a.Wg=this.Wg;return a};
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
g.h.add=function(a){if(a.C||a.months){var b=this.getMonth()+a.months+12*a.C,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);var d=Math.min(g.Jc(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),Lc(this,a.getDate()))};
g.h.je=function(a){return[this.getFullYear(),g.jc(this.getMonth()+1,2),g.jc(this.getDate(),2)].join(a?"-":"")+""};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){return this.je()};
g.h.valueOf=function(){return this.date.valueOf()};var kaa;kaa=!g.E||g.tc(9);g.Dca=!g.Ul&&!g.E||g.E&&g.tc(9)||g.Ul&&g.rc("1.9.1");g.km=g.E&&!g.rc("9");g.Eca=g.E||g.Rl||g.Vl;g.h=g.Oc.prototype;g.h.clone=function(){return new g.Oc(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Oc&&g.Pc(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.Rc.prototype;g.h.clone=function(){return new g.Rc(this.width,this.height)};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!(this.width*this.height)};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Uc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.jd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.vd=/#|$/;var Fca={iK:"allow-forms",jK:"allow-modals",kK:"allow-orientation-lock",lK:"allow-pointer-lock",mK:"allow-popups",nK:"allow-popups-to-escape-sandbox",oK:"allow-presentation",pK:"allow-same-origin",qK:"allow-scripts",rK:"allow-top-navigation",sK:"allow-top-navigation-by-user-activation"},maa=g.Sa(function(){return g.yd(Fca)});g.h=g.zd.prototype;g.h.clone=function(){return new g.zd(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Oc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.lm=g.Ul?"MozUserSelect":g.Vl||g.Sl?"WebkitUserSelect":null;g.ya(g.Cd);g.mm=!!window.google_async_iframe_id;g.nm=g.mm&&window.parent||window;g.mb(g.hb("//web.archive.org/web/20200101002945/https://fonts.googleapis.com/css"));g.Kg=(new Date).getTime();var Od={};g.C.prototype.Tc=!1;g.C.prototype.ob=function(){return this.Tc};
g.C.prototype.dispose=function(){this.Tc||(this.Tc=!0,this.W())};
g.C.prototype.W=function(){if(this.Gf)for(;this.Gf.length;)this.Gf.shift()()};g.Ud.prototype.stopPropagation=function(){this.F=!0};
g.Ud.prototype.preventDefault=function(){this.Rr=!1};var je,Hca,taa;g.Gca=!g.E||g.tc(9);je=!g.E||g.tc(9);Hca=g.E&&!g.rc("9");taa=function(){if(!g.p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.p.addEventListener("test",g.xa,b),g.p.removeEventListener("test",g.xa,b)}catch(c){}return a}();g.rm=g.Vl?"webkitTransitionEnd":g.Rl?"otransitionend":"transitionend";g.x(g.Vd,g.Ud);var Ica={2:"touch",3:"pen",4:"mouse"};
g.Vd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Ul&&(g.oc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Wl?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ica[a.pointerType]||"";this.state=
a.state;this.zc=a;a.defaultPrevented&&this.preventDefault()};
g.Vd.prototype.stopPropagation=function(){g.Vd.T.stopPropagation.call(this);this.zc.stopPropagation?this.zc.stopPropagation():this.zc.cancelBubble=!0};
g.Vd.prototype.preventDefault=function(){g.Vd.T.preventDefault.call(this);var a=this.zc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Hca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Wd="closure_listenable_"+(1E6*Math.random()|0),qaa=0;g.h=g.Zd.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=ae(a,b,d,e);-1<k?(b=a[k],c||(b.Zh=!1)):(b=new raa(b,this.src,f,!!d,e),b.Zh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ae(e,b,c,d);return-1<b?(Yd(e[b]),g.Oa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Yd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.hg=g.ba(5);g.h.ff=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=ae(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return g.Ua(this.listeners,function(f){for(var k=0;k<f.length;++k)if(!(c&&f[k].type!=d||e&&f[k].capture!=b))return!0;return!1})};var ge="closure_lm_"+(1E6*Math.random()|0),me={},ie=0,pe="__closure_events_fn_"+(1E9*Math.random()>>>0);g.x(g.qe,g.C);g.qe.prototype[Wd]=!0;g.h=g.qe.prototype;g.h.Ci=function(){return this.bm};
g.h.Eh=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.ce(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.ke(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Ci();if(b){var c=[];for(var d=1;b;b=b.Ci())c.push(b),++d}b=this.Xt;d=a.type||a;if("string"===typeof a)a=new g.Ud(a,b);else if(a instanceof g.Ud)a.target=a.target||b;else{var e=a;a=new g.Ud(d,b);g.cb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=re(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=re(k,d,!0,a)&&e,a.F||(e=re(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=re(k,d,!1,a)&&e;return e};
g.h.W=function(){g.qe.T.W.call(this);this.removeAllListeners();this.bm=null};
g.h.O=function(a,b,c,d){return this.yd.add(String(a),b,!1,c,d)};
g.h.He=function(a,b,c,d){return this.yd.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.yd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.yd?this.yd.removeAll(a):0};
g.h.hg=g.ba(4);g.h.ff=function(a,b,c,d){return this.yd.ff(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.yd.hasListener(void 0!==a?String(a):void 0,b)};se.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var De;var Ee=new se(function(){return new xe},function(a){a.reset()});
we.prototype.add=function(a,b){var c=Ee.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
we.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
xe.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
xe.prototype.reset=function(){this.next=this.scope=this.lc=null};var ye,ze=!1,Ae=new we;Je.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var Ke=new se(function(){return new Je},function(a){a.reset()});
g.Ie.prototype.then=function(a,b,c){return Pe(this,g.Da(a)?a:null,g.Da(b)?b:null,c)};
g.Fe(g.Ie);g.Ie.prototype.cancel=function(a){if(0==this.C){var b=new g.We(a);Be(function(){Re(this,b)},this)}};
g.Ie.prototype.Y=function(a){this.C=0;g.He(this,2,a)};
g.Ie.prototype.N=function(a){this.C=0;g.He(this,3,a)};
g.Ie.prototype.J=function(){for(var a;a=Se(this);)Te(this,a,this.C,this.M);this.L=!1};
var Ye=ue;g.x(g.We,g.Ia);g.We.prototype.name="cancel";g.x(g.af,g.C);g.h=g.af.prototype;g.h.nb=0;g.h.W=function(){g.af.T.W.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.nb=g.Ze(this.Qb,void 0!==a?a:this.D)};
g.h.stop=function(){this.isActive()&&g.$e(this.nb);this.nb=0};
g.h.bf=g.ba(7);g.h.isActive=function(){return 0!=this.nb};
g.h.uo=function(){this.nb=0;this.C&&this.C.call(this.F)};g.x(bf,Aaa);bf.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
bf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)cf(this,a,d),d+=this.F;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){cf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){cf(this,e);f=0;break}}this.D=f;this.H+=b}};
bf.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;cf(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.gf="StopIteration"in g.p?g.p.StopIteration:{message:"StopIteration",stack:""};g.ff.prototype.next=function(){throw g.gf;};
g.ff.prototype.ed=function(){return this};g.h=g.lf.prototype;g.h.Gb=function(){return this.D};
g.h.Db=g.ba(0);g.h.yc=function(){g.nf(this);return this.C.concat()};
g.h.xd=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Gb())return!1;var c=b||Caa;g.nf(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Pe=this.D=this.C.length=0};
g.h.remove=function(a){return g.mf(this.F,a)?(delete this.F[a],this.D--,this.Pe++,this.C.length>2*this.D&&g.nf(this),!0):!1};
g.h.get=function(a,b){return g.mf(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.mf(this.F,a)||(this.D++,this.C.push(a),this.Pe++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.yc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.lf(this)};
g.h.ed=function(a){g.nf(this);var b=0,c=this.Pe,d=this,e=new g.ff;e.next=function(){if(c!=d.Pe)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.gf;var f=d.C[b++];return a?f:d.F[f]};
return e};var rf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Eaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.x(g.sf,g.C);g.h=g.sf.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.ud=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.xa):(c&&g.Pa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.na=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Faa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.ud(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.A)(b,this.ud,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Gb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Gb(b);return a};
g.h.W=function(){g.sf.T.W.call(this);this.clear();this.D.length=0};g.uf.prototype.set=function(a,b){void 0===b?this.C.remove(a):this.C.set(a,g.pf(b))};
g.uf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.uf.prototype.remove=function(a){this.C.remove(a)};g.x(wf,g.uf);wf.prototype.set=function(a,b){wf.T.set.call(this,a,yf(b))};
wf.prototype.F=function(a){a=wf.T.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
wf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.x(g.zf,wf);g.zf.prototype.set=function(a,b,c){if(b=yf(b)){if(c){if(c<(0,g.Mc)()){g.zf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Mc)()}g.zf.T.set.call(this,a,b)};
g.zf.prototype.F=function(a,b){var c=g.zf.T.F.call(this,a);if(c)if(!b&&g.Af(c))g.zf.prototype.remove.call(this,a);else return c};g.x(Bf,Gaa);Bf.prototype.Gb=function(){var a=0;g.jf(this.ed(!0),function(){a++});
return a};
Bf.prototype.clear=function(){var a=Baa(this.ed(!0)),b=this;(0,g.A)(a,function(c){b.remove(c)})};g.x(g.Cf,Bf);g.h=g.Cf.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Gb=function(){return this.C.length};
g.h.ed=function(a){var b=0,c=this.C,d=new g.ff;d.next=function(){if(b>=c.length)throw g.gf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.x(g.Df,g.Cf);g.x(Ff,Bf);var Haa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ef=null;g.h=Ff.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(Gf(a),b);Hf(this)};
g.h.get=function(a){a=this.C.getAttribute(Gf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(Gf(a));Hf(this)};
g.h.Gb=function(){return If(this).attributes.length};
g.h.ed=function(a){var b=0,c=If(this).attributes,d=new g.ff;d.next=function(){if(b>=c.length)throw g.gf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){for(var a=If(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Hf(this)};g.x(Jf,Bf);Jf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
Jf.prototype.get=function(a){return this.F.get(this.C+a)};
Jf.prototype.remove=function(a){this.F.remove(this.C+a)};
Jf.prototype.ed=function(a){var b=this.F.ed(!0),c=this,d=new g.ff;d.next=function(){for(var e=b.next();e.substr(0,c.C.length)!=c.C;)e=b.next();return a?e.substr(c.C.length):c.F.get(e)};
return d};Lf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
Lf.prototype.get=function(a){return!!this.C[a]};g.Qf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.r("yt.config_",g.Qf,void 0);var Jaa=[];var Yf={};var Jca=g.u("ytPubsubPubsubInstance")||new g.sf;g.sf.prototype.subscribe=g.sf.prototype.subscribe;g.sf.prototype.unsubscribeByKey=g.sf.prototype.ud;g.sf.prototype.publish=g.sf.prototype.na;g.sf.prototype.clear=g.sf.prototype.clear;g.r("ytPubsubPubsubInstance",Jca,void 0);var dg=g.u("ytPubsubPubsubSubscribedKeys")||{};g.r("ytPubsubPubsubSubscribedKeys",dg,void 0);var gg=g.u("ytPubsubPubsubTopicToKeys")||{};g.r("ytPubsubPubsubTopicToKeys",gg,void 0);var fg=g.u("ytPubsubPubsubIsSynchronous")||{};
g.r("ytPubsubPubsubIsSynchronous",fg,void 0);var Maa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Naa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.ng.prototype.initialize=function(a,b,c,d){var e=this;b?(this.F=!0,g.lg(b,function(){e.F=!1;if(window.botguard)og(e,c,d);else{g.mg(b);var f=Error("Unable to load Botguard");f.params="from "+b;g.Wf(f)}})):a&&(eval(a),window.botguard?og(this,c,d):g.Wf(Error("Unable to load Botguard from JS")))};
g.ng.prototype.Rd=function(){return!!this.C};
g.ng.prototype.dispose=function(){this.C=null};g.n(vg,Oaa);vg.prototype.start=function(){var a=g.u("yt.scheduler.instance.start");a&&a()};
vg.prototype.pause=function(){var a=g.u("yt.scheduler.instance.pause");a&&a()};
g.ya(vg);vg.getInstance();var sm;sm=window;g.Jh=sm.ytcsi&&sm.ytcsi.now?sm.ytcsi.now:sm.performance&&sm.performance.timing&&sm.performance.now?function(){return sm.performance.timing.navigationStart+sm.performance.now()}:function(){return(new Date).getTime()};g.Bg=new g.ng;g.Gg=new function(){var a=window.document;this.C=window;this.F=a};
g.r("yt.ads_.signals_.getAdSignalsString",function(a){return g.Cg(Jg(a))},void 0);(0,g.Mc)();var Lg=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Og,Uaa,Vg;Og={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Uaa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Vg=!1;g.tm=Wg;$g.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.Ge(a)?a:g.bh(a)):2===this.F&&b?(a=b.call(c,this.C),g.Ge(a)?a:g.ah(a)):this};
$g.prototype.getValue=function(){return this.C};
g.Fe($g);var Kca=0,Yaa=g.Vl?"webkit":g.Ul?"moz":g.E?"ms":g.Rl?"o":"",ch=g.u("ytDomDomGetNextId")||function(){return++Kca};
g.r("ytDomDomGetNextId",ch,void 0);var Zaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.fh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.fh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.fh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var jh=g.u("ytEventsEventsListeners")||{};g.r("ytEventsEventsListeners",jh,void 0);var nh=g.u("ytEventsEventsCounter")||{count:0};g.r("ytEventsEventsCounter",nh,void 0);var oh=g.Sa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.um=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.vm="Microsoft Internet Explorer"==navigator.appName;g.x(g.sh,g.C);g.sh.prototype.Y=function(a){this.C=new g.Oc(g.hh(a),g.ih(a))};
g.sh.prototype.M=function(){if(this.C){var a=g.um();if(0!=this.D){var b=g.Qc(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.Qb();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.sh.prototype.W=function(){g.bg(this.N);g.ph(this.J)};g.n(th,g.C);th.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
th.prototype.W=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.callback)}g.C.prototype.W.call(this)};uh.prototype.clone=function(){var a=new uh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.za(c)?a[b]=g.$a(c):a[b]=c}return a};g.n(wh,Error);var yh=new Set,xh=0;var cba,Rh,Sh,bba,Kh,dba,Eh;cba=Math.pow(2,16)-1;g.ai=10;Rh=null;Sh=0;bba={log_event:"events",log_interaction:"interactions"};Kh=Object.create(null);Kh.log_event="GENERIC_EVENT_LOGGING";Kh.log_interaction="INTERACTION_LOGGING";dba=new Set(["log_event"]);Eh={};g.Bh=0;g.Ch=0;g.$h=0;g.Dh=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.r("ytLoggingTransportLogPayloadsQueue_",g.Dh,void 0);var Qh=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};g.r("ytLoggingTransportTokensToCttTargetIds_",Qh,void 0);
var Hh=g.u("ytLoggingTransportDispatchedStats_")||{};g.r("ytLoggingTransportDispatchedStats_",Hh,void 0);var Lh=g.u("ytLoggingTransportCapturedTime_")||{};g.r("ytytLoggingTransportCapturedTime_",Lh,void 0);var Xh={};var Zh=g.u("ytLoggingGelSequenceIdObj_")||{};g.r("ytLoggingGelSequenceIdObj_",Zh,void 0);g.ii.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.Mc)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.pf(b))}catch(f){return}else e=escape(b);g.gi(a,e,c,this.F)};
g.ii.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.fi.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.ii.prototype.remove=function(a){this.C&&this.C.remove(a);g.hi(a,"/",this.F)};var ji=new g.ii("yt.innertube");g.mi.prototype.isReady=function(){!this.C&&ci()&&(this.C=g.Ph());return!!this.C};g.pi.prototype.toString=function(){return JSON.stringify(g.qi(this))};g.si.prototype.toString=function(){return this.topic};var Lca=g.u("ytPubsub2Pubsub2Instance")||new g.sf;g.sf.prototype.subscribe=g.sf.prototype.subscribe;g.sf.prototype.unsubscribeByKey=g.sf.prototype.ud;g.sf.prototype.publish=g.sf.prototype.na;g.sf.prototype.clear=g.sf.prototype.clear;g.r("ytPubsub2Pubsub2Instance",Lca,void 0);var vi=g.u("ytPubsub2Pubsub2SubscribedKeys")||{};g.r("ytPubsub2Pubsub2SubscribedKeys",vi,void 0);var xi=g.u("ytPubsub2Pubsub2TopicToKeys")||{};g.r("ytPubsub2Pubsub2TopicToKeys",xi,void 0);
var wi=g.u("ytPubsub2Pubsub2IsAsync")||{};g.r("ytPubsub2Pubsub2IsAsync",wi,void 0);g.r("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.n(Ai,g.ri);var hba=new g.si("screen-created",Ai),Bi=[],Ci=0;var Hi=g.u("ytLoggingLatencyUsageStats_")||{};g.r("ytLoggingLatencyUsageStats_",Hi,void 0);var Li=0;var Mi=(0,g.Mc)().toString();var Qi=g.u("ytLoggingTimeDocumentNonce_")||Ni(),Ri,Oi;g.r("ytLoggingTimeDocumentNonce_",Qi,void 0);Ri=0;g.Pi=null;Oi=null;g.r("yt_logging_screen.getRootVeType",Wi,void 0);g.r("yt_logging_screen.getCurrentCsn",g.Yi,void 0);g.r("yt_logging_screen.setCurrentScreen",g.Zi,void 0);g.h=g.aj.prototype;g.h.uG=function(){this.Rd()||this.init()};
g.h.enable=function(){this.C=1;(0,g.A)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.uG,this),this.subscribe("dispose-"+a,this.dispose,this),g.F("PAGE_NAME")==a&&g.bj(this))},this)};
g.h.init=function(){g.tg(this.F);this.C=2;this.L&&this.L()};
g.h.Rd=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.tg(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Uf(a)}};
g.h.subscribe=function(a,b,c){a=g.hg(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.ig(this.G);this.G=[]};var cj=g.u("yt.modules.registry_")||{};g.r("yt.modules.registry_",cj,void 0);g.fj=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.r("yt.msgs_",g.fj,void 0);var lj={},mba=0;var nba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.n(zj,g.C);g.h=zj.prototype;g.h.getId=function(){return this.ha};
g.h.loadNewVideoConfig=function(a){if(!this.ob()){this.aa&&(g.ag(this.aa),this.aa=0);this.sb=a=g.vh(a);this.C=a.clone();xj(this);this.Ka||(this.Ka=Ij(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Bd(this.H,Number(a)||a);if(a=this.C.attrs.height)this.H.style.height=g.Ad(Number(a)||a,!0);yj(this);this.M&&Aj(this)}};
g.h.Cv=function(){return this.sb};
g.h.xz=function(){return this.M};
g.h.Th=function(a,b){var c=this,d=Ij(this,b);if(d){if(!g.Ma(this.Td,a)&&!this.D[a]){var e=pba(this,a);this.N&&this.N(a,e)}this.Y.subscribe(a,d);"onReady"==a&&this.M&&g.Zf(function(){d(c.api)},0)}};
g.h.iG=function(a,b){if(!this.ob()){var c=Ij(this,b);c&&g.tf(this.Y,a,c)}};
g.h.Wt=function(a){g.I("a11y-announce",a)};
g.h.BD=function(a){g.I("WATCH_LATER_VIDEO_ADDED",a)};
g.h.CD=function(a){g.I("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Mv=function(){return this.la||(Bj(this)?"html5":null)};
g.h.Gv=function(){return this.qb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.kg(Cj(this));spf.script.ignore(b,a)}g.ag(this.wb);this.V=!1};
g.h.W=function(){Fj(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Uf(b)}this.mb=null;for(var a in this.D)g.p[this.D[a]]=null;this.sb=this.C=this.api=null;delete this.ab;delete this.H;g.C.prototype.W.call(this)};g.Kj={};g.Jj="player_uid_"+(1E9*Math.random()>>>0);var Rj=null;g.wm=window.performance&&window.performance.memory;g.ml={};var xm=window,Sj=xm.performance||xm.mozPerformance||xm.msPerformance||xm.webkitPerformance||{};g.n(Tj,g.ri);g.n(Uj,g.ri);var vba=new g.si("aft-recorded",Tj),Eba=new g.si("timing-sent",Uj);var ek=!1;var ym={},xk=(ym.ad_to_ad="LATENCY_ACTION_AD_TO_AD",ym.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",ym.app_startup="LATENCY_ACTION_APP_STARTUP",ym["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",ym["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",ym["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",ym.browse="LATENCY_ACTION_BROWSE",ym.channels="LATENCY_ACTION_CHANNELS",ym.channel="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",ym["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
ym["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",ym["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",ym["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",ym["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",ym["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",ym.chips="LATENCY_ACTION_CHIPS",ym["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",ym["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
ym.embed="LATENCY_ACTION_EMBED",ym.home="LATENCY_ACTION_HOME",ym.library="LATENCY_ACTION_LIBRARY",ym.live="LATENCY_ACTION_LIVE",ym.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",ym.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",ym.prebuffer="LATENCY_ACTION_PREBUFFER",ym.prefetch="LATENCY_ACTION_PREFETCH",ym.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",ym.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",ym.results="LATENCY_ACTION_RESULTS",ym.search="LATENCY_ACTION_RESULTS",
ym.search_ui="LATENCY_ACTION_SEARCH_UI",ym.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",ym.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",ym.settings="LATENCY_ACTION_SETTINGS",ym.tenx="LATENCY_ACTION_TENX",ym.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",ym.watch="LATENCY_ACTION_WATCH",ym.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",ym["watch,watch7"]="LATENCY_ACTION_WATCH",ym["watch,watch7_html5"]="LATENCY_ACTION_WATCH",ym["watch,watch7ad"]="LATENCY_ACTION_WATCH",ym["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",ym.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",ym.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",ym["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",ym["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",ym["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",ym["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",ym["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",ym["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
ym["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",ym.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",ym),zm={},mk=(zm.ad_allowed="adTypesAllowed",zm.yt_abt="adBreakType",zm.ad_cpn="adClientPlaybackNonce",zm.ad_docid="adVideoId",zm.yt_ad_an="adNetworks",zm.ad_at="adType",zm.browse_id="browseId",zm.p="httpProtocol",zm.t="transportProtocol",zm.cpn="clientPlaybackNonce",zm.cseg="creatorInfo.creatorSegment",zm.csn="clientScreenNonce",zm.docid="videoId",zm.GetHome_rid="getHomeRequestId",
zm.is_continuation="isContinuation",zm.is_nav="isNavigation",zm.b_p="kabukiInfo.browseParams",zm.is_prefetch="kabukiInfo.isPrefetch",zm.is_secondary_nav="kabukiInfo.isSecondaryNav",zm.prev_browse_id="kabukiInfo.prevBrowseId",zm.query_source="kabukiInfo.querySource",zm.voz_type="kabukiInfo.vozType",zm.yt_lt="loadType",zm.mver="creatorInfo.measurementVersion",zm.yt_ad="isMonetized",zm.nr="webInfo.navigationReason",zm.ncnp="webInfo.nonPreloadedNodeCount",zm.prt="playbackRequiresTap",zm.plt="playerInfo.playbackType",
zm.pis="playerInfo.playerInitializedState",zm.paused="playerInfo.isPausedOnLoad",zm.yt_pt="playerType",zm.fmt="playerInfo.itag",zm.yt_pl="watchInfo.isPlaylist",zm.yt_pre="playerInfo.preloadType",zm.yt_ad_pr="prerollAllowed",zm.pa="previousAction",zm.yt_red="isRedSubscriber",zm.rce="mwebInfo.responseContentEncoding",zm.st="serverTimeMs",zm.aq="tvInfo.appQuality",zm.br_trs="tvInfo.bedrockTriggerState",zm.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",zm.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",
zm.label="tvInfo.label",zm.is_mdx="tvInfo.isMdx",zm.preloaded="tvInfo.isPreloaded",zm.upg_player_vis="playerInfo.visibilityState",zm.query="unpluggedInfo.query",zm.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",zm.yt_vst="videoStreamType",zm.vph="viewportHeight",zm.vpw="viewportWidth",zm.yt_vis="isVisible",zm.rcl="mwebInfo.responseContentLength",zm.GetSettings_rid="mwebInfo.getSettingsRequestId",zm.GetTrending_rid="mwebInfo.getTrendingRequestId",zm),wba="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Am={},nk=(Am.mver="MEASUREMENT_VERSION_",Am.pis="PLAYER_INITIALIZED_STATE_",Am.yt_pt="LATENCY_PLAYER_",Am.pa="LATENCY_ACTION_",Am.yt_vst="VIDEO_STREAM_TYPE_",Am),xba="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");var Dba={vc:!0},wk={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},
yba=(0,g.v)(Sj.clearResourceTimings||Sj.webkitClearResourceTimings||Sj.mozClearResourceTimings||Sj.msClearResourceTimings||Sj.oClearResourceTimings||g.xa,Sj);var Nk=0,Jk=[],Mk=[],Gk=0,Kk={},Lk={},Hk=new g.af(Lba,1E3);var Pk=["server_prefetched_vast","vmap"];var Rk;var Vk=null,Yk=[];var bl,sl,rl,dl,cl,Sba,Vba,Tba,Uba,nl;dl=0;cl=0;Sba=[900,60,"waiting"];Vba=[500,99,"waiting"];Tba=[300,60,"waiting"];Uba=[400,99,"waiting"];nl=[300,101,"done"];var zl=!1;window.yt=window.yt||{};g.r("yt.setConfig",g.Rf,void 0);g.r("yt.pushConfigArray",Sf,void 0);g.r("yt.getConfig",g.F,void 0);g.r("yt.config.set",g.Rf,void 0);g.r("yt.config.pushArray",Sf,void 0);g.r("yt.config.get",g.F,void 0);g.r("yt.hasMsg",g.hj,void 0);g.r("yt.setMsg",gj,void 0);g.r("yt.setGoogMsg",ij,void 0);g.r("yt.msgs.has",g.hj,void 0);g.r("yt.msgs.set",gj,void 0);g.r("yt.msgs.setGoog",ij,void 0);g.r("yt.pubsub.publish",g.I,void 0);g.r("yt.pubsub.subscribe",g.hg,void 0);
g.r("ytcsi.tick",g.tk,void 0);g.x(Cl,g.aj);
Cl.prototype.enable=function(){window.onload=Qba;window.onunload=Rba;window.onerror=Laa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",$k),window.addEventListener("spfhistory",al),window.addEventListener("spfrequest",fl),window.addEventListener("spfpartprocess",il),window.addEventListener("spfpartdone",jl),window.addEventListener("spfprocess",kl),window.addEventListener("spfdone",ol),window.addEventListener("spferror",pl),window.addEventListener("spfreload",
ql),window.addEventListener("spfjsbeforeunload",Dl)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",Xba),this.subscribe("dispose",Yba)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Cl.prototype.init=function(){Cl.T.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.F("PAGEFRAME_JS")){var b=g.F("PAGEFRAME_JS",void 0);var c=function(){var e=g.u("ytbin.www.pageframe.setup");e&&(window.ytPageFrameLoaded=!0,e())}}else a&&(a=g.u("yt.www.masthead.loadSearchbox"))&&a();
a=g.F("JS_COMMON_MODULE");var d=g.F("JS_PAGE_MODULES");d||(d=[a]);a=g.F("JS_DELAY_LOAD",0);0<a?(g.ag(this.D),this.D=g.Zf(function(){b&&g.lg(b,c);spf.script.require(d)},a)):(b&&g.lg(b,c),spf.script.require(d));
g.r("yt.abuse.player.botguardInitialized",Qaa,void 0);g.r("yt.abuse.player.invokeBotguard",Raa,void 0);g.r("yt.abuse.dclkstatus.checkDclkStatus",Paa,void 0);g.r("yt.player.exports.navigate",g.vj,void 0);g.r("yt.util.activity.init",g.Wh,void 0);g.r("yt.util.activity.getTimeSinceActive",g.Yh,void 0);g.r("yt.util.activity.setTimestamp",g.Uh,void 0);Uk(g.u("ytplayer.config"));g.u("ytspf.enabled")&&Oba();Cba();g.F("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.yg("service_worker_enabled")?nca():lca())};
Cl.prototype.dispose=function(){g.ag(this.D);var a=g.u("ytbin.www.pageframe.cancelSetup");a&&a();g.bg(Rk);if(a=g.Tk())a.removeEventListener("onReady",Sk),a.removeEventListener("onStateChange",Sk);Zj(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.G(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.rh(a);Cl.T.dispose.call(this)};
Cl.prototype.disable=function(){Cl.T.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",$k),window.removeEventListener("spfhistory",al),window.removeEventListener("spfrequest",fl),window.removeEventListener("spfpartprocess",il),window.removeEventListener("spfpartdone",jl),window.removeEventListener("spfprocess",kl),window.removeEventListener("spfdone",ol),window.removeEventListener("spferror",pl),window.removeEventListener("spfreload",ql),window.removeEventListener("spfjsbeforeunload",
Dl));window.onload=null;window.onunload=null;window.onerror=null};
g.ej(new Cl);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:29:45 Jan 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:56:38 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 453.281
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.07
  cdx.remote: 0.06
  esindex: 0.011
  LoadShardBlock: 82.155 (3)
  PetaboxLoader3.datanode: 193.033 (5)
  load_resource: 368.358 (2)
  PetaboxLoader3.resolve: 180.619 (2)
*/