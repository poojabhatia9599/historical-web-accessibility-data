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
var ca,aaa,fa,ha,ma,na,qa,ra,daa,eaa,faa,ub,Ob,Pb,wc,kaa,Ac,laa,Fc,Mc,Nc,Oc,Wc,Xc,naa,paa,Kd,qaa,raa,Ld,Nd,saa,uaa,Vd,Xd,Yd,be,vaa,ee,le,ke,xaa,oe,pe,qe,re,yaa,se,te,xe,zaa,ye,Fe,Ne,Le,Ie,Baa,Qe,Oe,Pe,Te,Aaa,Caa,Ye,Ze,$e,bf,Daa,Eaa,Faa,kf,mf,Haa,rf,sf,tf,Iaa,wf,Df,Ef,Ff,Gf,Hf,Jf,Mf,Nf,Rf,Of,Laa,Wf,bg,qg,Qaa,Gg,Bg,Jg,Qg,Taa,Saa,jh,mh,vh,Uaa,Vaa,Xaa,Bh,Yaa,Ch,Dh,Zaa,Ih,Gh,Eh,$aa,Kh,Lh,Mh,aba,Th,Uh,ai,di,bba,cba,dba,gi,ji,ki,ni,si,ti,ui,wi,eba,hba,Ci,Ji,fba,Oi,Zi,bj,dj,iba,fj,jba,kj,jj,mj,ij,lj,uj,sj,
vj,yj,tj,wj,zj,mba,Cj,rj,Dj,nba,Aj,Bj,xj,oba,Jj,pba,Nj,Oj,qba,Qj,Tj,Uj,Sj,Vj,Wj,Xj,Zj,ak,Pj,bk,Yj,dk,sba,ek,gk,fk,hk,ik,kk,lk,nk,qk,mk,rk,sk,zba,vk,tk,Ck,Bk,Ak,wba,Dk,Ek,yba,wk,xba,Gba,Fba,Eba,Jk,Dba,Bba,Cba,Hba,Iba,Jba,Kba,Vk,Tk,Xk,Lba,Yk,$k,Mba,Nba,al,bl,gl,jl,kl,ll,pl,ql,rl,Tba,Uba,hl,fl,Sba,il,vl,xl,ul,Vba,yl,wl,Wba,$ba,Xba,cca,Zba,Yba,aca,bca,eca,Bl,dca,zl,fca,hca,jca,ica,gca,Cl,kca,Dl,El,ea,da,baa,sa,Aa,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
aaa=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};
fa=function(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ea(c,d,{configurable:!0,writable:!0,value:f})}};
ha=function(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a};
g.ia=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
g.ja=function(a){if(!(a instanceof Array)){a=g.ia(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
g.n=function(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype};
ma=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
na=function(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
qa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.t=function(a,b,c){a=a.split(".");c=c||g.q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
g.ta=function(a){if(a&&a!=g.q)return ra(a.document);null===sa&&(sa=ra(g.q.document));return sa};
ra=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&baa.test(a)?a:""};
g.u=function(a,b){for(var c=a.split("."),d=b||g.q,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.ua=function(){};
g.va=function(a){a.Dc=void 0;a.getInstance=function(){return a.Dc?a.Dc:a.Dc=new a}};
g.wa=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"};
g.xa=function(a){var b=g.wa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.ya=function(a){return"function"==g.wa(a)};
g.za=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ba=function(a){return Object.prototype.hasOwnProperty.call(a,Aa)&&a[Aa]||(a[Aa]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.v=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.v=daa:g.v=eaa;return g.v.apply(null,arguments)};
g.w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.x=function(a,b){function c(){}
c.prototype=b.prototype;a.V=b.prototype;a.prototype=new c;a.prototype.constructor=a};
g.Da=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Da);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
faa=function(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.D=!b&&/[?&]ae=1(&|$)/.test(a);this.G=!b&&/[?&]ae=2(&|$)/.test(a);if((this.C=/[?&]adurl=([^&]*)/.exec(a))&&this.C[1]){try{var c=decodeURIComponent(this.C[1])}catch(d){c=null}this.F=c}};
g.Fa=function(a,b,c){b=g.Ea(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
g.Ea=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ha=function(a,b){return 0<=(0,g.Ga)(a,b)};
g.Ja=function(a){return 0==a.length};
g.La=function(a,b){var c=(0,g.Ga)(a,b),d;(d=0<=c)&&g.Ka(a,c);return d};
g.Ka=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Ma=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Na=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.xa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Oa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Pa=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Qa=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Ra=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.Sa=function(a){for(var b in a)return!1;return!0};
g.Ta=function(a,b){b in a&&delete a[b]};
g.Ua=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.Va=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.Wa=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.Xa=function(a){var b=g.wa(a);if("object"==b||"array"==b){if(g.ya(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.Xa(a[c]);return b}return a};
g.Za=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ya.length;f++)c=Ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.bb=function(a,b){this.C=a===$a&&b||"";this.F=ab};
g.cb=function(a){return a instanceof g.bb&&a.constructor===g.bb&&a.F===ab?a.C:"type_error:Const"};
g.db=function(a){return new g.bb($a,a)};
g.gb=function(a,b){this.F=a===g.eb&&b||"";this.D=g.fb};
g.hb=function(a){return new g.gb(g.eb,g.cb(a))};
g.ib=function(a,b){return 0==a.lastIndexOf(b,0)};
g.jb=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.kb=function(a){return/^[\s\xa0]*$/.test(a)};
g.rb=function(a,b){if(b)a=a.replace(lb,"&amp;").replace(mb,"&lt;").replace(nb,"&gt;").replace(ob,"&quot;").replace(pb,"&#39;").replace(qb,"&#0;");else{if(!gaa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(lb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(mb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(nb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ob,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(pb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(qb,"&#0;"))}return a};
g.sb=function(a,b){return-1!=a.indexOf(b)};
g.vb=function(a,b){for(var c=0,d=(0,g.tb)(String(a)).split("."),e=(0,g.tb)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=ub(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||ub(0==l[2].length,0==m[2].length)||ub(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
ub=function(a,b){return a<b?-1:a>b?1:0};
g.yb=function(a,b){this.F=a===wb&&b||"";this.D=xb};
g.zb=function(a){if(a instanceof g.yb&&a.constructor===g.yb&&a.D===xb)return a.F;g.wa(a);return"type_error:SafeUrl"};
g.Bb=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(haa);b=b&&iaa.test(b[1]);return g.Ab(b?a:"about:invalid#zClosurez")};
g.Db=function(a){if(a instanceof g.yb)return a;a="object"==typeof a&&a.Md?a.Tc():String(a);Cb.test(a)||(a="about:invalid#zClosurez");return g.Ab(a)};
g.Eb=function(a,b){if(a instanceof g.yb)return a;a="object"==typeof a&&a.Md?a.Tc():String(a);if(b&&/^data:/i.test(a)){var c=g.Bb(a);if(c.Tc()==a)return c}Cb.test(a)||(a="about:invalid#zClosurez");return g.Ab(a)};
g.Ab=function(a){return new g.yb(wb,a)};
g.Gb=function(){this.C="";this.F=g.Fb};
g.Hb=function(a){var b=new g.Gb;b.C=a;return b};
g.Jb=function(){this.C="";this.F=g.Ib};
g.Kb=function(a){var b=new g.Jb;b.C=a;return b};
g.Mb=function(a){return g.sb(g.Lb,a)};
g.Nb=function(){return g.Mb("Trident")||g.Mb("MSIE")};
Ob=function(){return g.Mb("Firefox")||g.Mb("FxiOS")};
g.Qb=function(){return g.Mb("Safari")&&!(Pb()||g.Mb("Coast")||g.Mb("Opera")||g.Mb("Edge")||g.Mb("Edg/")||g.Mb("OPR")||Ob()||g.Mb("Silk")||g.Mb("Android"))};
Pb=function(){return(g.Mb("Chrome")||g.Mb("CriOS"))&&!g.Mb("Edge")};
g.Rb=function(){return g.Mb("Android")&&!(Pb()||Ob()||g.Mb("Opera")||g.Mb("Silk"))};
g.Tb=function(){this.F="";this.G=Sb;this.D=null};
g.Vb=function(a){return g.Ub(a).toString()};
g.Ub=function(a){if(a instanceof g.Tb&&a.constructor===g.Tb&&a.G===Sb)return a.F;g.wa(a);return"type_error:SafeHtml"};
g.Xb=function(a){if(a instanceof g.Tb)return a;var b="object"==typeof a,c=null;b&&a.Vk&&(c=a.C());return g.Wb(g.rb(b&&a.Md?a.Tc():String(a)),c)};
g.Wb=function(a,b){return g.Yb(a,b)};
g.Yb=function(a,b){var c=new g.Tb;c.F=a;c.D=b;return c};
g.Zb=function(a,b){g.cb(a);g.cb(a);return g.Yb(b,null)};
g.$b=function(a,b){var c=b instanceof g.yb?b:g.Eb(b);a.href=g.zb(c)};
g.ac=function(a,b){var c=b instanceof g.yb?b:g.Eb(b);a.href=g.zb(c)};
g.bc=function(a){return encodeURIComponent(String(a))};
g.cc=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.dc=function(a){return a=g.rb(a,void 0)};
g.fc=function(a,b,c){a=void 0!==c?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return(0,g.ec)("0",Math.max(0,b-c))+a};
g.gc=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.hc=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.ic=function(a){return a?decodeURI(a):a};
g.kc=function(a,b){return b.match(g.jc)[a]||null};
g.lc=function(a){return g.ic(g.kc(3,a))};
g.mc=function(a){a=a.match(g.jc);return g.hc(null,null,null,null,a[5],a[6],a[7])};
g.nc=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.oc=function(a,b){return b?a?a+"&"+b:b:a};
g.pc=function(a,b){if(!b)return a;var c=g.nc(a);c[1]=g.oc(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.qc=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)g.qc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.bc(b)))};
g.rc=function(a){var b=[],c;for(c in a)g.qc(c,a[c],b);return b.join("&")};
g.sc=function(a,b){var c=g.rc(b);return g.pc(a,c)};
g.tc=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.vc=function(a,b){var c=a.search(g.uc),d=g.tc(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.cc(a.substr(d,e-d))};
wc=function(){return g.Mb("iPhone")&&!g.Mb("iPod")&&!g.Mb("iPad")};
g.xc=function(){return wc()||g.Mb("iPad")||g.Mb("iPod")};
g.yc=function(a){g.yc[" "](a);return a};
g.zc=function(a,b){try{return g.yc(a[b]),!0}catch(c){}return!1};
kaa=function(a,b){var c=jaa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Ac=function(){var a=g.q.document;return a?a.documentMode:void 0};
g.Cc=function(a){return kaa(a,function(){return 0<=g.vb(g.Bc,a)})};
g.Ec=function(a){return Number(g.Dc)>=a};
g.Hc=function(a,b){g.xa(a);void 0===b&&(b=0);Fc();for(var c=Gc[b],d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,p=m?a[e+2]:0,r=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|p>>6;p&=63;m||(p=64,k||(l=64));d.push(c[r],c[f],c[l]||"",c[p]||"")}return d.join("")};
laa=function(){var a=65.25;a%3?a=Math.floor(a):g.sb("=.","k")&&(a=g.sb("=.","1")?a-2:a-1);var b=new Uint8Array(a),c=0;g.Ic("BPr83OIQ0ehMqbAUQWSaFHZOJeRvvXddR5EONgwwQcHR6FRe6G43LgD36pJq1IuGN10mmMv-V7IKSIZludF9G1k",function(d){b[c++]=d});
return b.subarray(0,c)};
g.Ic=function(a,b){function c(m){for(;d<a.length;){var p=a.charAt(d++),r=Jc[p];if(null!=r)return r;if(!g.kb(p))throw Error("Unknown base64 encoding at char: "+p);}return m}
Fc();for(var d=0;;){var e=c(-1),f=c(0),k=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=k&&(b(f<<4&240|k>>2),64!=l&&b(k<<6&192|l))}};
Fc=function(){if(!Jc){Jc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Gc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Jc[f]&&(Jc[f]=e)}}}};
g.Kc=function(a){this.C=0;this.F=a};
g.Lc=function(){};
Mc=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].Yc();else c&&c.Yc()}};
Nc=function(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};
Oc=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Oc(d):d)}return b}if(g.Pc&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Oc(d):d);return b};
g.Rc=function(a){var b=g.u("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.q.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==
b&&(b=a.constructor&&a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:g.Qc(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})};
g.Qc=function(a){if(Sc[a])return Sc[a];a=String(a);if(!Sc[a]){var b=/function\s+([^\(]+)/m.exec(a);Sc[a]=b?b[1]:"[Anonymous]"}return Sc[a]};
g.Tc=function(a){this.C=a||{cookie:""}};
g.Uc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.tb)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Vc=function(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31};
g.Zc=function(a,b,c){"number"===typeof a?(this.date=Wc(a,b||0,c||1),Xc(this,c||1)):g.za(a)?(this.date=Wc(a.getFullYear(),a.getMonth(),a.getDate()),Xc(this,a.getDate())):(this.date=new Date((0,g.Yc)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Xc(this,a))};
Wc=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
Xc=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}};
g.$c=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
g.ad=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.bd=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.cd=function(a,b){this.width=a;this.height=b};
g.A=function(a){return g.dd(document,a)};
g.dd=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.ed=function(a){return g.dd(document,a)};
g.gd=function(a,b){g.Pa(b,function(c,d){c&&"object"==typeof c&&c.Md&&(c=c.Tc());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:fd.hasOwnProperty(d)?a.setAttribute(fd[d],c):g.ib(d,"aria-")||g.ib(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.id=function(a){return g.hd(a||window)};
g.hd=function(a){a=a.document;a=g.jd(a)?a.documentElement:a.body;return new g.cd(a.clientWidth,a.clientHeight)};
g.ld=function(a,b,c){return g.kd(document,arguments)};
g.kd=function(a,b){var c=String(b[0]),d=b[1];if(!maa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.dc(d.name),'"');if(d.type){c.push(' type="',g.dc(d.type),'"');var e={};g.Za(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=g.md(a,c);d&&("string"===typeof d?c.className=d:Array.isArray(d)?c.className=d.join(" "):g.gd(c,d));2<b.length&&g.nd(a,c,b,2);return c};
g.nd=function(a,b,c,d){function e(k){k&&b.appendChild("string"===typeof k?a.createTextNode(k):k)}
for(;d<c.length;d++){var f=c[d];!g.xa(f)||g.za(f)&&0<f.nodeType?e(f):(0,g.B)(naa(f)?g.Ma(f):f,e)}};
g.od=function(a){return g.md(document,a)};
g.md=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.jd=function(a){return"CSS1Compat"==a.compatMode};
g.qd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.rd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.sd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
naa=function(a){if(a&&"number"==typeof a.length){if(g.za(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.ya(a))return"function"==typeof a.item}return!1};
g.td=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.ud=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.vd=function(a){var b=[];g.ud(a,function(c){b.push(c)});
return b};
paa=function(){var a=g.od("IFRAME"),b={};(0,g.B)(oaa(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
g.wd=function(){this.C=function(a){return void 0===a?!1:a};
this.F=function(a){return void 0===a?0:a}};
g.C=function(){this.Rc=this.Rc;this.wf=this.wf};
g.Ad=function(a,b){g.xd(a,g.w(g.zd,b))};
g.xd=function(a,b){a.Rc?b():(a.wf||(a.wf=[]),a.wf.push(b))};
g.zd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Bd=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Cd=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Dd=function(a,b){a.style.width=g.Cd(b,!0)};
g.Ed=function(a,b){return typeof a===b};
g.Gd=function(){var a=void 0===a?g.Fd:a;try{return a.history.length}catch(b){return 0}};
g.Hd=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Gd();a.u_java=!!g.Fd.navigator&&!g.Ed(g.Fd.navigator.javaEnabled,"unknown")&&!!g.Fd.navigator.javaEnabled&&g.Fd.navigator.javaEnabled();g.Fd.screen&&(a.u_h=g.Fd.screen.height,a.u_w=g.Fd.screen.width,a.u_ah=g.Fd.screen.availHeight,a.u_aw=g.Fd.screen.availWidth,a.u_cd=g.Fd.screen.colorDepth);g.Fd.navigator&&g.Fd.navigator.plugins&&(a.u_nplug=g.Fd.navigator.plugins.length);g.Fd.navigator&&g.Fd.navigator.mimeTypes&&(a.u_nmime=g.Fd.navigator.mimeTypes.length)};
g.Id=function(a,b){try{return(void 0===b?0:b)?(new g.cd(a.innerWidth,a.innerHeight)).round():g.id(a).round()}catch(c){return new g.cd(-12245933,-12245933)}};
g.Jd=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var f=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,k]};
Kd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
qaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;r=p=0}
function b(y){for(var z=k,D=0;64>D;D+=4)z[D/4]=y[D]<<24|y[D+1]<<16|y[D+2]<<8|y[D+3];for(D=16;80>D;D++)y=z[D-3]^z[D-8]^z[D-14]^z[D-16],z[D]=(y<<1|y>>>31)&4294967295;y=e[0];var O=e[1],T=e[2],pa=e[3],Ca=e[4];for(D=0;80>D;D++){if(40>D)if(20>D){var Ia=pa^O&(T^pa);var yd=1518500249}else Ia=O^T^pa,yd=1859775393;else 60>D?(Ia=O&T|pa&(O|T),yd=2400959708):(Ia=O^T^pa,yd=3395469782);Ia=((y<<5|y>>>27)&4294967295)+Ia+Ca+yd+z[D]&4294967295;Ca=pa;pa=T;T=(O<<30|O>>>2)&4294967295;O=y;y=Ia}e[0]=e[0]+y&4294967295;e[1]=
e[1]+O&4294967295;e[2]=e[2]+T&4294967295;e[3]=e[3]+pa&4294967295;e[4]=e[4]+Ca&4294967295}
function c(y,z){if("string"===typeof y){y=unescape(encodeURIComponent(y));for(var D=[],O=0,T=y.length;O<T;++O)D.push(y.charCodeAt(O));y=D}z||(z=y.length);D=0;if(0==p)for(;D+64<z;)b(y.slice(D,D+64)),D+=64,r+=64;for(;D<z;)if(f[p++]=y[D++],r++,64==p)for(p=0,b(f);D+64<z;)b(y.slice(D,D+64)),D+=64,r+=64}
function d(){var y=[],z=8*r;56>p?c(l,56-p):c(l,64-(p-56));for(var D=63;56<=D;D--)f[D]=z&255,z>>>=8;b(f);for(D=z=0;5>D;D++)for(var O=24;0<=O;O-=8)y[z++]=e[D]>>O&255;return y}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var p,r;a();return{reset:a,update:c,digest:d,Hu:function(){for(var y=d(),z="",D=0;D<y.length;D++)z+="0123456789ABCDEF".charAt(Math.floor(y[D]/16))+"0123456789ABCDEF".charAt(y[D]%16);return z}}};
raa=function(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],(0,g.B)(d,function(l){e.push(l)}),Ld(e.join(" "));
var f=[],k=[];(0,g.B)(c,function(l){k.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ja(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.B)(d,function(l){e.push(l)});
a=Ld(e.join(" "));a=[c,a];g.Ja(k)||a.push(k.join(""));return a.join("_")};
Ld=function(a){var b=qaa();b.update(a);return b.Hu().toLowerCase()};
g.Md=function(a){var b=Kd(String(g.q.location.href)),c;(c=g.q.__SAPISID||g.q.__APISID||g.q.__OVERRIDE_SID)?c=!0:(c=new g.Tc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.q.__SAPISID:g.q.__APISID,c||(c=new g.Tc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(g.q.location.href);return d&&c&&b?[b,raa(Kd(d),c,a||
null)].join(" "):null}return null};
Nd=function(){this.C=[];this.F=-1};
saa=function(a){-1==a.F&&(a.F=(0,g.Od)(a.C,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.F};
g.Pd=function(){var a=new Nd;g.q.SVGElement&&g.q.document.createElementNS&&a.set(0);var b=paa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.q.crypto&&g.q.crypto.subtle&&a.set(3);g.q.TextDecoder&&g.q.TextEncoder&&a.set(4);return saa(a)};
g.Qd=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
g.Rd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1};
g.Sd=function(a,b){g.Rd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.zc=null;a&&this.init(a,b)};
g.Ud=function(a){return!(!a||!a[Td])};
uaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.bh=e;this.key=++taa;this.mg=this.Rh=!1};
Vd=function(a){a.mg=!0;a.listener=null;a.C=null;a.src=null;a.bh=null};
g.Wd=function(a){this.src=a;this.listeners={};this.C=0};
Xd=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.La(a.listeners[c],b);d&&(Vd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Yd=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.mg&&f.listener==b&&f.capture==!!c&&f.bh==d)return e}return-1};
g.$d=function(a,b,c,d,e){if(d&&d.once)return g.Zd(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.$d(a,b[f],c,d,e);return null}c=g.ae(c);return g.Ud(a)?a.O(b,c,g.za(d)?!!d.capture:!!d,e):be(a,b,c,!1,d,e)};
be=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.za(e)?!!e.capture:!!e,l=g.ce(a);l||(a[de]=l=new g.Wd(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=vaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)waa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ee(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");fe++;return c};
vaa=function(){var a=xaa,b=ge?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Zd=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.Zd(a,b[f],c,d,e);return null}c=g.ae(c);return g.Ud(a)?a.ye(b,c,g.za(d)?!!d.capture:!!d,e):be(a,b,c,!0,d,e)};
g.he=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)g.he(a,b[f],c,d,e);else d=g.za(d)?!!d.capture:!!d,c=g.ae(c),g.Ud(a)?a.Wa(b,c,d,e):a&&(a=g.ce(a))&&(b=a.Ue(b,c,d,e))&&g.ie(b)};
g.ie=function(a){if("number"===typeof a||!a||a.mg)return!1;var b=a.src;if(g.Ud(b))return Xd(b.vd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ee(c),d):b.addListener&&b.removeListener&&b.removeListener(d);fe--;(c=g.ce(b))?(Xd(c,a),0==c.C&&(c.src=null,b[de]=null)):Vd(a);return!0};
ee=function(a){return a in je?je[a]:je[a]="on"+a};
le=function(a,b,c,d){var e=!0;if(a=g.ce(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.mg&&(f=ke(f,d),e=e&&!1!==f)}return e};
ke=function(a,b){var c=a.listener,d=a.bh||a.src;a.Rh&&g.ie(a);return c.call(d,b)};
xaa=function(a,b){if(a.mg)return!0;if(!ge){var c=b||g.u("window.event"),d=new g.Sd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=le(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=le(c[k],f,!1,d),e=e&&l}return e}return ke(a,new g.Sd(b,
this))};
g.ce=function(a){a=a[de];return a instanceof g.Wd?a:null};
g.ae=function(a){if(g.ya(a))return a;a[me]||(a[me]=function(b){return a.handleEvent(b)});
return a[me]};
g.ne=function(){g.C.call(this);this.vd=new g.Wd(this);this.Rt=this;this.Sl=null};
oe=function(a,b,c,d){b=a.vd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.mg&&k.capture==c){var l=k.listener,m=k.bh||k.src;k.Rh&&Xd(a.vd,k);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
pe=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
qe=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
re=function(a){g.q.setTimeout(function(){throw a;},0)};
yaa=function(){var a=g.q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Mb("Presto")&&(a=function(){var e=g.od("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.v)(function(m){if(("*"==l||m.origin==l)&&m.data==k)this.port1.onmessage()},
this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&!g.Nb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.rn;c.rn=null;e()}};
return function(e){d.next={rn:e};d=d.next;b.port2.postMessage(0)}}return function(e){g.q.setTimeout(e,0)}};
se=function(){this.F=this.C=null};
te=function(){this.next=this.scope=this.qc=null};
xe=function(a,b){ue||zaa();ve||(ue(),ve=!0);we.add(a,b)};
zaa=function(){if(g.q.Promise&&g.q.Promise.resolve){var a=g.q.Promise.resolve(void 0);ue=function(){a.then(ye)}}else ue=function(){var b=ye;
!g.ya(g.q.setImmediate)||g.q.Window&&g.q.Window.prototype&&!g.Mb("Edge")&&g.q.Window.prototype.setImmediate==g.q.setImmediate?(ze||(ze=yaa()),ze(b)):g.q.setImmediate(b)}};
ye=function(){for(var a;a=we.remove();){try{a.qc.call(a.scope)}catch(b){re(b)}qe(Ae,a)}ve=!1};
g.Be=function(a){a.prototype.$goog_Thenable=!0};
g.Ce=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Ee=function(a,b){this.C=0;this.N=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.ua)try{var c=this;a.call(b,function(d){g.De(c,2,d)},function(d){g.De(c,3,d)})}catch(d){g.De(this,3,d)}};
Fe=function(){this.next=this.context=this.onRejected=this.D=this.C=null;this.F=!1};
g.He=function(a,b,c){var d=Ge.get();d.D=a;d.onRejected=b;d.context=c;return d};
g.Je=function(a,b,c){Ie(a,b,c,null)||xe(g.w(b,a))};
g.Ke=function(a){return new g.Ee(function(b,c){var d=a.length,e=[];if(d)for(var f=function(p,r){d--;e[p]=r;0==d&&b(e)},k=function(p){c(p)},l=0,m;l<a.length;l++)m=a[l],g.Je(m,g.w(f,l),k);
else b(e)})};
g.Me=function(a,b){return Le(a,null,b,void 0)};
Ne=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.F||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Ne(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Oe(c),Pe(c,e,3,b)))}a.D=null}else g.De(a,3,b)};
g.Re=function(a,b){a.F||2!=a.C&&3!=a.C||Qe(a);a.G?a.G.next=b:a.F=b;a.G=b};
Le=function(a,b,c,d){var e=g.He(null,null,null);e.C=new g.Ee(function(f,k){e.D=b?function(l){try{var m=b.call(d,l);f(m)}catch(p){k(p)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof g.Se?k(l):f(m)}catch(p){k(p)}}:k});
e.C.D=a;g.Re(a,e);return e.C};
g.De=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Ie(c,a.Y,a.M,a)||(a.N=c,a.C=b,a.D=null,Qe(a),3!=b||c instanceof g.Se||Aaa(a,c)))};
Ie=function(a,b,c,d){if(a instanceof g.Ee)return g.Re(a,g.He(b||g.ua,c||null,d)),!0;if(g.Ce(a))return a.then(b,c,d),!0;if(g.za(a))try{var e=a.then;if(g.ya(e))return Baa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Baa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function k(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Qe=function(a){a.L||(a.L=!0,xe(a.J,a))};
Oe=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Pe=function(a,b,c,d){if(3==c&&b.onRejected&&!b.F)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Te(b,c,d);else try{b.F?b.D.call(b.context):Te(b,c,d)}catch(e){Ue.call(null,e)}qe(Ge,b)};
Te=function(a,b,c){2==b?a.D.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Aaa=function(a,b){a.H=!0;xe(function(){a.H&&Ue.call(null,b)})};
g.Se=function(a){g.Da.call(this,a)};
g.Ve=function(a,b,c){if(g.ya(a))c&&(a=(0,g.v)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.v)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.q.setTimeout(a,b||0)};
g.We=function(a){g.q.clearTimeout(a)};
g.Xe=function(a,b,c){g.C.call(this);this.C=a;this.D=b||0;this.F=c;this.Qb=(0,g.v)(this.Ak,this)};
Caa=function(){this.F=-1};
Ye=function(){this.F=64;this.C=[];this.L=[];this.N=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
Ze=function(a,b,c){c||(c=0);var d=a.N;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var p=1518500249}else f=c^k^l,p=1859775393;else 60>e?(f=c&k|l&(c|k),p=2400959708):
(f=c^k^l,p=3395469782);f=(b<<5|b>>>27)+f+m+p+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
$e=function(){};
bf=function(a){if(a instanceof $e)return a;if("function"==typeof a.ad)return a.ad(!1);if(g.xa(a)){var b=0,c=new $e;c.next=function(){for(;;){if(b>=a.length)throw af;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.cf=function(a,b,c){if(g.xa(a))try{(0,g.B)(a,b,c)}catch(d){if(d!==af)throw d;}else{a=bf(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==af)throw d;}}};
Daa=function(a){if(g.xa(a))return g.Ma(a);a=bf(a);var b=[];g.cf(a,function(c){b.push(c)});
return b};
g.ef=function(a,b){this.qa={};this.C=[];this.Ge=this.F=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.df(this,a)};
Eaa=function(a,b){return a===b};
g.gf=function(a){if(a.F!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.ff(a.qa,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.F!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.ff(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.df=function(a,b){if(b instanceof g.ef)for(var c=b.yc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.ff=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.hf=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
g.jf=function(a){return a.classList?a.classList:g.hf(a).match(/\S+/g)||[]};
g.E=function(a,b){return a.classList?a.classList.contains(b):g.Ha(g.jf(a),b)};
g.lf=function(a){var b=[];kf(new Faa,a,b);return b.join("")};
Faa=function(){};
kf=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),kf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),mf(d,c),c.push(":"),kf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":mf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
mf=function(a,b){b.push('"',a.replace(Gaa,function(c){var d=nf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),nf[c]=d);return d}),'"')};
g.of=function(a){g.C.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.pf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Fa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.od(b)}};
Haa=function(a,b,c){xe(function(){a.apply(b,c)})};
g.qf=function(a){this.C=a};
rf=function(a){this.C=a};
sf=function(a){this.data=a};
tf=function(a){return void 0===a||a instanceof sf?a:new sf(a)};
g.uf=function(a){this.C=a};
g.vf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Yc)()||!!b&&b>(0,g.Yc)()};
Iaa=function(){};
wf=function(){};
g.zf=function(a){this.C=a};
g.Af=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Df=function(a,b){this.F=a;this.C=null;if(g.Bf&&!g.Ec(9)){Cf||(Cf=new g.ef);this.C=Cf.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),Cf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
Ef=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Jaa[b]})};
Ff=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
Gf=function(a){return a.C.XMLDocument.documentElement};
Hf=function(a,b){this.F=a;this.C=b+"::"};
g.If=function(a){var b=new g.Af;return b.isAvailable()?a?new Hf(b,a):b:null};
Jf=function(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])};
g.Lf=function(a){Jf(g.Kf,arguments)};
Mf=function(a,b){var c=g.F(a,void 0);c?c.push(b):g.Lf(a,[b])};
g.F=function(a,b){return a in g.Kf?g.Kf[a]:b};
Nf=function(a){var b=g.Kf.EXPERIMENT_FLAGS;return b?b[a]:void 0};
g.Pf=function(a){a=Of(a);return"string"===typeof a&&"false"===a?!1:!!a};
g.Qf=function(a,b){var c=Of(a);return void 0===c&&void 0!==b?b:Number(c||0)};
Rf=function(a){a=Of(a);return void 0!==a?String(a):""};
Of=function(a){var b=g.F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.F("EXPERIMENT_FLAGS",{})[a]};
g.Sf=function(){var a=[],b=g.F("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=g.F("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a};
g.G=function(a,b){return a?a.dataset?a.dataset[g.Tf(b)]:a.getAttribute("data-"+b):null};
g.Tf=function(a){return Uf[a]||(Uf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
Laa=function(a){Kaa.forEach(function(b){return b(a)})};
Wf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Vf(b),Laa(b)}}:a};
g.Vf=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=g.F("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),g.Lf("ERRORS",b))};
g.Xf=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=g.F("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),g.Lf("ERRORS",b))};
g.Yf=function(a,b){g.ya(a)&&(a=Wf(a));return window.setTimeout(a,b)};
g.Zf=function(a,b){g.ya(a)&&(a=Wf(a));return window.setInterval(a,b)};
g.$f=function(a){window.clearTimeout(a)};
g.ag=function(a){window.clearInterval(a)};
g.fg=function(a,b,c){var d=bg();if(d){var e=d.subscribe(a,function(){var f=arguments;var k=function(){cg[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{dg[a]?k():g.Yf(k,0)}catch(l){g.Vf(l)}},c);
cg[e]=!0;eg[a]||(eg[a]=[]);eg[a].push(e);return e}return 0};
g.gg=function(a){var b=bg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete cg[c]}))};
g.H=function(a,b){var c=bg();return c?c.publish.apply(c,arguments):!1};
g.hg=function(a,b){dg[a]=!0;var c=bg();c=c?c.publish.apply(c,arguments):!1;dg[a]=!1;return c};
bg=function(){return g.u("ytPubsubPubsubInstance")};
g.jg=function(a,b){var c=g.ig(a);spf.script.load(a,c,b)};
g.kg=function(a){a=g.ig(a);spf.script.unload(a)};
g.ig=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Maa,""),b=b.replace(Naa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.ng=function(a){var b=a.__yt_uid_key;b||(b=mg(),a.__yt_uid_key=b);return b};
g.og=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Oaa+"VisibilityState";if(b in a)return a[b]};
g.pg=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Paa||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}}catch(e){}};
qg=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.rg=function(a){void 0===a.C&&qg(a);return a.C};
g.sg=function(a){void 0===a.F&&qg(a);return a.F};
g.ug=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Ra(tg,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,k=g.za(e[4])&&g.za(d)&&g.Va(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.I=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.ug(a,b,c,d);if(e)return e;e=++vg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(l){l=new g.pg(l);if(!g.td(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new g.pg(l);
l.currentTarget=a;return c.call(a,l)};
k=Wf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),wg()||"boolean"===typeof d?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);tg[e]=[a,b,c,k,d];return e};
g.xg=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.B)(a,function(b){if(b in tg){var c=tg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?wg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete tg[b]}}))};
g.yg=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.I(a,b,function(){g.xg(e);c.apply(a,arguments)},d)};
g.zg=function(a){for(var b in tg)tg[b][0]==a&&g.xg(b)};
g.Ag=function(a){this.Qb=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.I(window,"mousemove",(0,g.v)(this.Y,this));this.M=g.Zf((0,g.v)(this.N,this),25)};
Qaa=function(){};
g.Cg=function(a,b){return Bg(a,0,b)};
g.Dg=function(a,b){return Bg(a,1,b)};
g.Fg=function(a){for(var b=0,c=a.length;b<c;b++)g.Eg(a[b])};
Gg=function(){};
g.Hg=function(){return!!g.u("yt.scheduler.instance")};
Bg=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.Yf(a,c||0)};
g.Eg=function(a){if(!isNaN(a)){var b=g.u("yt.scheduler.instance.cancelJob");b?b(a):g.$f(a)}};
g.Kg=function(a){var b=void 0===a?{}:a;a=void 0===b.ry?!0:b.ry;b=void 0===b.aG?!1:b.aG;if(null==g.u("_lact",window)){var c=parseInt(g.F("LACT"),10);c=isFinite(c)?(0,g.Yc)()-Math.max(c,0):-1;g.t("_lact",c,window);g.t("_fact",c,window);-1==c&&g.Ig();g.I(document,"keydown",g.Ig);g.I(document,"keyup",g.Ig);g.I(document,"mousedown",g.Ig);g.I(document,"mouseup",g.Ig);a&&(b?g.I(window,"touchmove",function(){Jg("touchmove",200)},{passive:!0}):(g.I(window,"resize",function(){Jg("resize",200)}),g.I(window,
"scroll",function(){Jg("scroll",200)})));
new g.Ag(function(){Jg("mouse",100)});
g.I(document,"touchstart",g.Ig,{passive:!0});g.I(document,"touchend",g.Ig,{passive:!0})}};
Jg=function(a,b){Lg[a]||(Lg[a]=!0,g.Dg(function(){g.Ig();Lg[a]=!1},b))};
g.Ig=function(){null==g.u("_lact",window)&&g.Kg();var a=(0,g.Yc)();g.t("_lact",a,window);-1==g.u("_fact",window)&&g.t("_fact",a,window);(a=g.u("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Mg=function(){var a=g.u("_lact",window);return null==a?-1:Math.max((0,g.Yc)()-a,0)};
g.Ug=function(){g.$f(g.Ng);g.$f(g.Og);g.Og=0;Pg&&Pg.isReady()?(Qg(g.Rg),"log_event"in Sg&&Qg(Object.entries(Sg.log_event)),g.Rg.clear(),delete Sg.log_event):g.Tg()};
g.Tg=function(){g.Pf("web_gel_timeout_cap")&&!g.Og&&(g.Og=g.Yf(g.Ug,6E4));g.$f(g.Ng);var a=g.Qf("web_gel_debounce_ms",1E4);a=g.F("LOGGING_BATCH_TIMEOUT",g.Wg||a);g.Pf("shorten_initial_gel_batch_timeout")&&Xg&&(a=Raa);g.Ng=g.Yf(g.Ug,a)};
Qg=function(a){var b=Pg,c=Math.round((0,g.Yg)());a=g.ia(a);for(var d=a.next();!d.done;d=a.next()){var e=g.ia(d.value);d=e.next().value;var f=e.next().value;e=g.Xa({context:g.Zg(b.C||g.$g())});e.events=f;(f=ah[d])&&Saa(e,d,f);delete ah[d];Taa(e,c);g.bh(b,"log_event",e,{retry:!0,onSuccess:function(){ch=Math.round((0,g.Yg)()-c)}});
Xg=!1}};
Taa=function(a,b){a.requestTimeMs=String(b);g.Pf("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=g.F("EVENT_ID",void 0);if(c){var d=g.F("BATCH_CLIENT_COUNTER",void 0)||0;!d&&g.Pf("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*dh/2));d++;d>dh&&(d=1);g.Lf("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;eh&&ch&&g.Pf("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:eh,roundtripMs:String(ch)});
eh=c;ch=0}};
Saa=function(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]};
g.ih=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.Yg)());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.Mg())};g.Pf("log_sequence_info_on_gel_web")&&d.Ce&&(a=e.context,b=d.Ce,fh[b]=b in fh?fh[b]+1:0,a.sequence={index:fh[b],groupKey:b},d.Uu&&delete fh[d.Ce]);d=d.Qf;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),ah[d.token]=a,a=d.token);d=g.Rg.get(a)||[];g.Rg.set(a,d);d.push(e);c&&(Pg=new c);c=g.Qf("web_logging_max_batch")||
100;e=(0,g.Yg)();d.length>=c?g.Ug():e-g.gh>=g.hh&&(g.Tg(),g.gh=e)};
jh=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=g.cc(e[0]||""),k=g.cc(e[1]||"");f in b?Array.isArray(b[f])?g.Na(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(m){if("q"!=e[0]){var l=Error("Error decoding URL component");l.params={key:e[0],value:e[1]};g.Vf(l)}}}return b};
g.kh=function(a){var b=[];g.Pa(a,function(c,d){var e=g.bc(d),f;Array.isArray(c)?f=c:f=[c];(0,g.B)(f,function(k){""==k?b.push(e):b.push(e+"="+g.bc(k))})});
return b.join("&")};
g.lh=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return jh(a)};
g.nh=function(a,b){return mh(a,b||{},!0)};
g.oh=function(a,b){return mh(a,b||{},!1)};
mh=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.lh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return g.sc(a,e)+d};
g.ph=function(a){if(!b)var b=window.location.href;var c=g.kc(1,a),d=g.lc(a);c&&d?(a=a.match(g.jc),b=b.match(g.jc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.lc(b)==d&&(Number(g.kc(4,b))||null)==(Number(g.kc(4,a))||null):!0;return a};
vh=function(a){var b=g.sh;a=void 0===a?g.u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.th(b),g.uh(b));b.ca_type="image";a&&(b.bid=a);return b};
g.th=function(a){var b={};b.dt=g.wh;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Hd(b);return b};
g.uh=function(a){var b=g.Jd(a.C),c=g.Id(a.C.top),d={};return d.bc=g.Pd(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Qd(a.F),d.wgl=!!g.Fd.WebGLRenderingContext,d};
Uaa=function(){if(!xh)return null;var a=xh();return"open"in a?a:null};
g.zh=function(a){switch(g.yh(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.yh=function(a){return a&&"status"in a?a.status:-1};
Vaa=function(a,b){b=void 0===b?{}:b;var c=g.ph(a),d=g.Pf("web_ajax_ignore_global_headers_if_set"),e;for(e in Ah){var f=g.F(Ah[e]);!f||!c&&!Bh(a,e)||d&&void 0!==b[e]||(b[e]=f)}if(c||Bh(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Bh(a,"X-YouTube-Time-Zone"))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||Bh(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=g.kh(vh(void 0));
return b};
Xaa=function(a){var b=window.location.search,c=g.lc(a),d=g.ic(g.kc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.lh(b),f={};(0,g.B)(Waa,function(k){e[k]&&(f[k]=e[k])});
return g.oh(a,f)};
Bh=function(a,b){var c=g.F("CORS_HEADER_WHITELIST")||{},d=g.lc(a);return d?(c=c[d])?g.Ha(c,b):!1:!0};
Yaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ch(a,b);var d=Dh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&g.$f(f);var l=k.ok,m=function(p){p=p||{};var r=b.context||g.q;l?b.onSuccess&&b.onSuccess.call(r,p,k):b.onError&&b.onError.call(r,p,k);b.Ya&&b.Ya.call(r,p,k)};
"JSON"==(b.format||"JSON")&&(l||400<=k.status&&500>k.status)?k.json().then(m,function(){m(null)}):m(null)}});
b.yq&&0<b.timeout&&(f=g.Yf(function(){e||(e=!0,g.$f(f),b.yq.call(b.context||g.q))},b.timeout))}else g.J(a,b)};
g.J=function(a,b){var c=b.format||"JSON";a=Ch(a,b);var d=Dh(a,b),e=!1,f=Eh(a,function(m){if(!e){e=!0;l&&g.$f(l);var p=g.zh(m),r=null,y=400<=m.status&&500>m.status,z=500<=m.status&&600>m.status;if(p||y||z)r=Zaa(c,m,b.pb);if(p)a:if(m&&204==m.status)p=!0;else{switch(c){case "XML":p=0==parseInt(r&&r.return_code,10);break a;case "RAW":p=!0;break a}p=!!r}r=r||{};y=b.context||g.q;p?b.onSuccess&&b.onSuccess.call(y,m,r):b.onError&&b.onError.call(y,m,r);b.Ya&&b.Ya.call(y,m,r)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.Oc&&0<b.timeout){var k=b.Oc;var l=g.Yf(function(){e||(e=!0,f.abort(),g.$f(l),k.call(b.context||g.q,f))},b.timeout)}return f};
Ch=function(a,b){b.sR&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.F("XSRF_FIELD_NAME",void 0),d=b.Ua;d&&(d[c]&&delete d[c],a=g.nh(a,d));return a};
Dh=function(a,b){var c=g.F("XSRF_FIELD_NAME",void 0),d=g.F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.F("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Yu||g.lc(a)&&!b.withCredentials&&g.lc(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=g.lh(e),g.Za(e,f),e=b.Ar&&"JSON"==b.Ar?JSON.stringify(e):g.rc(e));f=e||f&&!g.Sa(f);!Fh&&f&&"POST"!=b.method&&(Fh=!0,g.Vf(Error("AJAX request with postData should use POST")));
return e};
Zaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Gh(b):null)d={},(0,g.B)(b.getElementsByTagName("*"),function(e){d[e.tagName]=g.Hh(e)})}c&&Ih(d);
return d};
Ih=function(a){if(g.za(a))for(var b in a)"html_content"==b||g.jb(b,"_html")?a[b]=g.Zb(g.db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Ih(a[b])};
Gh=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Hh=function(a){var b="";(0,g.B)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.Jh=function(a,b){b.method="POST";b.ia||(b.ia={});return g.J(a,b)};
Eh=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Wf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Uaa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.Pf("debug_forward_web_query_parameters")&&(a=Xaa(a));m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Vaa(a,e))for(var p in e)m.setRequestHeader(p,e[p]),"content-type"==p.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m};
$aa=function(){for(var a={},b=g.ia(Object.entries(g.lh(g.F("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=g.ia(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a};
Kh=function(){return"INNERTUBE_API_KEY"in g.Kf&&"INNERTUBE_API_VERSION"in g.Kf};
g.$g=function(){return{innertubeApiKey:g.F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.F("INNERTUBE_API_VERSION",void 0),ty:g.F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),uy:g.F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),wy:g.F("INNERTUBE_CONTEXT_HL",void 0),vy:g.F("INNERTUBE_CONTEXT_GL",void 0),xy:g.F("INNERTUBE_HOST_OVERRIDE",void 0)||"",yy:!!g.F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}};
g.Zg=function(a){a={client:{hl:a.wy,gl:a.vy,clientName:a.uy,clientVersion:a.innertubeContextClientVersion,configInfo:a.ty}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=g.F("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=g.Sf();0<b.length&&(a.request={internalExperimentFlags:b});g.F("DELEGATED_SESSION_ID")&&!g.Pf("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.F("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,$aa());return a};
Lh=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.lR||g.F("AUTHORIZATION"))||(a?b="Bearer "+g.u("gapi.auth.getToken")().jR:b=g.Md([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.F("SESSION_INDEX",0),g.Pf("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.F("DELEGATED_SESSION_ID")));return d};
Mh=function(a){a=Object.assign({},a);delete a.Authorization;var b=g.Md();if(b){var c=new Ye;c.update(g.F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=g.Hc(c.digest(),3)}return a};
g.Oh=function(a,b,c,d,e){g.Nh.set(""+a,b,{Al:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})};
g.Ph=function(a,b){return g.Nh.get(""+a,b)};
g.Qh=function(a,b,c){g.Nh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.Rh=function(a){var b;(b=g.If(a))||(a=new Df(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.uf(a):null;this.F=document.domain||window.location.hostname};
aba=function(a,b,c,d){if(d)return null;d=Sh.get("nextId",!0)||1;var e=Sh.get("requests",!0)||{};e[d]={method:a,request:b,authState:Mh(c),requestTime:Math.round((0,g.Yg)())};Sh.set("nextId",d+1,86400,!0);Sh.set("requests",e,86400,!0);return d};
Th=function(a){var b=Sh.get("requests",!0)||{};delete b[a];Sh.set("requests",b,86400,!0)};
Uh=function(a){var b=Sh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round((0,g.Yg)())-d.requestTime)){var e=d.authState,f=Mh(Lh(!1));g.Va(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round((0,g.Yg)())),g.bh(a,d.method,e,{}));delete b[c]}}Sh.set("requests",b,86400,!0)}};
g.Vh=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(g.ja(c))};
g.Wh=function(a){var b=this;this.C=null;a?this.C=a:Kh()&&(this.C=g.$g());g.Cg(function(){Uh(b)},5E3)};
g.bh=function(a,b,c,d){!g.F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&g.Xf(new g.Vh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw b=new g.Vh("innertube xhrclient not ready",b,c,d),g.Vf(b),b.C=0,b;var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,Ar:"JSON",Oc:function(){d.Oc()},
yq:d.Oc,onSuccess:function(z,D){if(d.onSuccess)d.onSuccess(D)},
cj:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,D){if(d.onError)d.onError(D)},
xq:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.xy;k&&(f=k);k=a.C.yy||!1;var l=Lh(k,f,d);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=g.nh(""+f+("/youtubei/"+a.C.innertubeApiVersion+"/"+b),{alt:"json",key:a.C.innertubeApiKey}),p;if(d.retry&&g.Pf("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(p=aba(b,c,l,k))){var r=e.onSuccess,y=e.cj;e.onSuccess=function(z,D){Th(p);r(z,D)};
c.cj=function(z,D){Th(p);y(z,D)}}try{g.Pf("use_fetch_for_op_xhr")?Yaa(m,e):g.Jh(m,e)}catch(z){if("InvalidAccessError"==z.name)p&&(Th(p),p=0),g.Xf(Error("An extension is blocking network request."));
else throw z;}p&&g.Cg(function(){Uh(a)},5E3)};
g.Xh=function(a,b,c){c=void 0===c?{}:c;var d=g.Wh;g.F("ytLoggingEventsDefaultDisabled",!1)&&g.Wh==g.Wh&&(d=null);g.ih(a,b,d,c)};
g.Zh=function(a){g.Yh(a,"WARNING")};
g.Yh=function(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||g.F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var k=void 0===k?!1:k;if(a&&(g.Pf("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,
a)),(window&&window.yterr||k)&&!(5<=$h)&&0!==a.C)){var l=g.Rc(a);k=l.message||"Unknown Error";d=l.name||"UnknownError";e=l.lineNumber||"Not available";f=l.fileName||"Not available";l=l.stack||a.F||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var m=0,p=0;p<a.args.length;p++){var r=a.args[p],y="params."+p;m+=y.length;if(r)if(Array.isArray(r))for(var z=c,D=0;D<r.length&&!(r[D]&&(m+=ai(D,r[D],y,z),500<m));D++);else if("object"===typeof r)for(z in z=void 0,D=c,r){if(r[z]&&(m+=
ai(z,r[z],y,D),500<m))break}else c[y]=String(JSON.stringify(r)).substring(0,500),m+=c[y].length;else c[y]=String(JSON.stringify(r)).substring(0,500),m+=c[y].length;if(500<=m)break}else if(a.hasOwnProperty("params")&&a.params)if(r=a.params,"object"===typeof a.params)for(p in y=0,r){if(r[p]&&(m="params."+p,z=String(JSON.stringify(r[p])).substr(0,500),c[m]=z,y+=m.length+z.length,500<y))break}else c.params=String(JSON.stringify(r)).substr(0,500);c={message:k,name:d,lineNumber:e,fileName:f,stack:l,params:c};
a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);window.yterr&&g.ya(window.yterr)&&window.yterr(c);if(!(bi.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){if(g.Pf("kevlar_gel_error_routing")){k=b;d={stackTrace:c.stack};c.fileName&&(d.filename=c.fileName);a=c.lineNumber.split(":");0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(d.lineNumber=Number(a[0]),d.columnNumber=Number(a[1])):
d.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:c.message};"ERROR"===k?a.level="ERROR_LEVEL_ERROR":"WARNING"===k&&(a.level="ERROR_LEVEL_WARNNING");k={isObfuscated:!0,browserStackInfo:d};d={pageUrl:window.location.href,kvPairs:[]};if(e=c.params)for(f=g.ia(Object.keys(e)),l=f.next();!l.done;l=f.next())l=l.value,d.kvPairs.push({key:"client."+l,value:String(e[l])});g.Xh("clientError",{errorMetadata:d,stackTrace:k,logMessage:a});g.Ug()}a=c.params||{};b={Ua:{a:"logerror",t:"jserror",type:c.name,
msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},ia:{url:g.F("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.ia){c.stack&&(b.ia.stack=c.stack);k=g.ia(Object.keys(a));for(d=k.next();!d.done;d=k.next())d=d.value,b.ia["client."+d]=a[d];if(a=g.F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(k=g.ia(Object.keys(a)),d=k.next();!d.done;d=k.next())d=d.value,b.ia[d]=a[d];a=g.F("SERVER_NAME",void 0);k=g.F("SERVER_VERSION",
void 0);a&&k&&(b.ia["server.name"]=a,b.ia["server.version"]=k)}g.J(g.F("ECATCHER_REPORT_HOST","")+"/error_204",b);bi.add(c.message);$h++}}};
ai=function(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length};
g.ci=function(){this.F=!1;this.C=null};
di=function(a,b,c,d){if(d)try{a.C=new window.botguard.bg(b,c?function(){return c(b)}:g.ua)}catch(e){g.Zh(e)}else{try{a.C=new window.botguard.bg(b)}catch(e){g.Zh(e)}c&&c(b)}};
g.ei=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
bba=function(){return parseInt(g.F("DCLKSTAT",0),10)};
cba=function(){return g.fi.Nd()};
dba=function(a){a=void 0===a?{}:a;return g.ei(g.fi,a)};
gi=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.hi=function(a){var b=new gi;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.ii=function(a){var b=new gi;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
ji=function(){g.C.call(this);this.C=[]};
ki=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.Wa(b);this.assets=a.assets||{};this.attrs=a.attrs||g.Wa(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.li=function(a){a instanceof ki||(a=new ki(a));return a};
ni=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Yc)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(mi)for(a=1,b=0;b<mi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^mi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.pi=function(a){a&&g.ih("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:oi,clientScreenNonce:a},g.Wh)};
g.qi=function(a){this.C=a};
g.ri=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,void 0!==a.C.veCounter&&(b.veCounter=a.C.veCounter),void 0!==a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.ri(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
si=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
ti=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
ui=function(a){return g.F(ti(void 0===a?0:a),void 0)};
g.vi=function(){var a=ui(0),b;a?b=new g.qi({veType:a,youtubeData:void 0}):b=null;return b};
wi=function(){var a=g.F("csn-to-ctt-auth-info");a||(a={},g.Lf("csn-to-ctt-auth-info",a));return a};
g.xi=function(a){a=void 0===a?0:a;var b=g.F(si(a));if(!b&&!g.F("USE_CSN_FALLBACK",!0))return null;b||0!=a||(g.Pf("kevlar_client_side_screens")||g.Pf("c3_client_side_screens")?b="UNDEFINED_CSN":b=g.F("EVENT_ID"));return b?b:null};
eba=function(a,b,c){var d=wi();(c=g.xi(c))&&delete d[c];b&&(d[a]=b)};
g.yi=function(a){return wi()[a]};
g.zi=function(a,b,c,d){c=void 0===c?0:c;if(a!==g.F(si(c))||b!==g.F(ti(c)))if(eba(a,d,c),g.Lf(si(c),a),g.Lf(ti(c),b),0==c||g.Pf("web_screen_associated_all_layers"))b=function(){setTimeout(function(){g.pi(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()};
g.Ai=function(a,b){this.version=a;this.args=b};
g.Bi=function(a,b){this.topic=a;this.C=b};
g.Di=function(a,b){var c=Ci();c&&c.publish.call(c,a.toString(),a,b)};
g.Hi=function(a,b,c){var d=Ci();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,k){var l=g.u("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(Ei[e])try{if(k&&a instanceof g.Bi&&a!=f)try{var m=a.C,p=k;if(!p.args||!p.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.Ge){var r=new m;m.Ge=r.version}var y=m.Ge}catch(z){}if(!y||p.version!=y)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=Reflect.construct(m,
g.Ma(p.args))}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+z.message,z;}b.call(c||window,k)}catch(z){g.Vf(z)}},Fi[a.toString()]?g.Hg()?g.Dg(l):g.Yf(l,0):l())});
Ei[e]=!0;Gi[a.toString()]||(Gi[a.toString()]=[]);Gi[a.toString()].push(e);return e};
hba=function(){var a=fba,b=g.Hi(gba,function(c){a.apply(void 0,arguments);g.Ii(b)},void 0);
return b};
g.Ii=function(a){var b=Ci();b&&("number"===typeof a&&(a=[a]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete Ei[c]}))};
Ci=function(){return g.u("ytPubsub2Pubsub2Instance")};
Ji=function(a){g.Ai.call(this,1,arguments);this.csn=a};
g.Mi=function(a,b,c){Ki.push({payloadName:a,payload:b,options:c});Li||(Li=hba())};
fba=function(a){if(Ki){for(var b=g.ia(Ki),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,g.ih(c.payloadName,c.payload,null,c.options));Ki.length=0}Li=0};
g.Ni=function(a,b,c){var d=g.Pf("use_default_events_client")?void 0:g.Wh;(0,g.B)(b,function(e){var f=c;f=void 0===f?!1:f;e={csn:a,ve:g.ri(e),eventType:f?16:8};f={Qf:g.yi(a),Ce:a,Uu:f};"UNDEFINED_CSN"==a?g.Mi("visualElementHidden",e,f):d?g.ih("visualElementHidden",e,d,f):g.Xh("visualElementHidden",e,f)})};
Oi=function(){var a=g.vi(),b=g.xi();b&&a&&g.Ni(b,[a],!0)};
g.Si=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Pi==a)return;Pi=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Mg()>b)&&"visible"==g.og()){b=-1;g.Qi&&(b=Math.round((0,g.Yg)()-g.Qi));var c=String;var d=g.u("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Yc)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:oi,index:String(Ri),lastEventDeltaMs:String(b),trigger:a};g.ih("foregroundHeartbeat",
a,g.Wh);g.t("_fact",-1,window);Ri++;g.Qi=(0,g.Yg)()}};
g.Ti=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Wf(d):null;this.H=e?Wf(e):null;this.G=[];this.C=this.F=0};
g.Xi=function(a){g.Eg(a.F);a.F=g.Dg((0,g.v)(a.init,a))};
g.$i=function(a){a.name in Yi&&Zi(a.name);Yi[a.name]={reqs:[],disable:(0,g.v)(a.disable,a)};(0,g.B)(a.deps,function(b){if(!(b in Yi))throw Error("Module "+b+" required by "+a.name);Yi[b].reqs.push(a.name)});
a.enable()};
Zi=function(a){if(a in Yi){var b=Yi[a];(0,g.B)(b.reqs,function(c){Zi(c)});
try{b.disable()}catch(c){}delete Yi[a]}};
bj=function(a){Jf(g.aj,arguments)};
g.cj=function(a){return a in g.aj};
dj=function(a){Jf(g.aj,arguments)};
g.ej=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Lb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.zb(g.Db(a)),"about:invalid#zClosurez"===a?a="":(a=g.Vb(g.Xb(a)),a=g.bc(g.lf(a))),g.kb(a)||(a=g.ld("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.sd(a).body.appendChild(a))):e?Eh(a,b,"POST",e,d):g.F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Eh(a,b,"GET","",d):iba(a,b)||jba(a,b))};
iba=function(a,b){if(!Nf("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(Nf("use_sonic_js_library_for_v4_support")){a:{try{var c=new faa({url:a});if(c.D&&c.F||c.G){var d=g.ic(g.kc(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==g.vc(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=g.ic(g.kc(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==g.vc(a,"ae")||"1"!==g.vc(a,"act"))return!1;return fj(a)?(b&&b(),!0):!1};
fj=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
jba=function(a,b){var c=new Image,d=""+kba++;gj[d]=c;c.onload=c.onerror=function(){b&&gj[d]&&b();delete gj[d]};
c.src=a};
g.hj=function(a,b){a=a||"";var c=a.match(lba);spf.style.load(a,c?c[1]:"",b)};
kj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!ij(a)||c.some(function(e){return!ij(e)}))throw Error("Only objects may be merged.");
c=g.ia(c);for(d=c.next();!d.done;d=c.next())jj(a,d.value);return a};
jj=function(a,b){for(var c in b)if(ij(b[c])){if(c in a&&!ij(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});jj(a[c],b[c])}else if(lj(b[c])){if(c in a&&!lj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);mj(a[c],b[c])}else a[c]=b[c];return a};
mj=function(a,b){for(var c=g.ia(b),d=c.next();!d.done;d=c.next())d=d.value,ij(d)?a.push(jj({},d)):lj(d)?a.push(mj([],d)):a.push(d);return a};
ij=function(a){return"object"===typeof a&&!Array.isArray(a)};
lj=function(a){return"object"===typeof a&&Array.isArray(a)};
g.nj=function(a,b,c){var d=void 0===d?!0:d;var e=g.F("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=g.lc(window.location.href);f&&e.push(f);f=g.lc(a);if(g.Ha(e,f)||!f&&g.ib(a,"/"))if(g.Pf("autoescape_tempdata_url")&&(e=document.createElement("a"),g.$b(e,a),a=e.href),a&&(a=g.mc(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.xi()},b)),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+g.gc(a).toString(36),b=b?g.rc(b):"",g.Oh(d,b,c||5))):(c=b,b="ST-"+g.gc(a).toString(36),
c=c?g.rc(c):"",g.Oh(b,c,5))};
g.oj=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.ac(d.location,g.sc(a,b)+c)};
g.pj=function(a,b){b&&g.nj(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.oj(a)};
g.qj=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.F("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.nj(a,b);if(c)return!1;g.pj(a);return!0};
uj=function(a,b,c,d){g.C.call(this);var e=this;this.L=this.Za=a;this.ha=b;this.N=!1;this.api={};this.na=this.M=null;this.Y=new g.of;g.Ad(this,this.Y);this.G={};this.la=this.ra=this.F=this.ob=this.C=null;this.T=!1;this.H=this.J=null;this.jb={};this.Pd=["onReady"];this.lb=null;this.tb=NaN;this.W={};this.D=d;rj(this);this.Lh("WATCH_LATER_VIDEO_ADDED",this.xD.bind(this));this.Lh("WATCH_LATER_VIDEO_REMOVED",this.yD.bind(this));this.Lh("onAdAnnounce",this.Qt.bind(this));this.Ib=new ji(this);g.Ad(this,this.Ib);
this.aa=0;c?this.aa=g.Yf(function(){e.loadNewVideoConfig(c)},0):d&&(sj(this),tj(this))};
sj=function(a){var b;a.D?b=a.D.rootElementId:b=a.C.attrs.id;a.F=b||a.F;"video-player"==a.F&&(a.F=a.ha,a.C.attrs.id=a.ha);a.L.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F)};
vj=function(a){a.C&&!a.C.loaded&&(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
yj=function(a){var b=!0,c=wj(a);c&&a.C&&(a=xj(a),b=g.G(c,"version")===a);return b&&!!g.u("yt.player.Application.create")};
tj=function(a){if(!a.qb()&&!a.T){var b=yj(a);if(b&&"html5"==(wj(a)?"html5":null))a.la="html5",a.N||zj(a);else if(Aj(a),a.la="html5",b&&a.H)a.Za.appendChild(a.H),zj(a);else{a.C&&(a.C.loaded=!0);var c=!1;a.J=function(){c=!0;if(a.D)var d=a.D.serializedExperimentFlags;else a.C&&a.C.args&&(d=a.C.args.fflags);d="true"==jh(d||"").player_bootstrap_method?g.u("yt.player.Application.createAlternate")||g.u("yt.player.Application.create"):g.u("yt.player.Application.create");var e=a.C?a.C.clone():void 0;d(a.Za,
e,a.D);zj(a)};
a.T=!0;b?a.J():(g.jg(xj(a),a.J),(b=a.D?a.D.cssUrl:a.C.assets.css)&&g.hj(b),Bj(a)&&!c&&g.t("yt.player.Application.create",null,void 0))}}};
wj=function(a){var b=g.A(a.F);!b&&a.L&&a.L.querySelector&&(b=a.L.querySelector("#"+a.F));return b};
zj=function(a){if(!a.qb()){var b=wj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.T=!1,b.isNotServable&&a.C&&b.isNotServable(a.C.args.video_id)||mba(a)):a.tb=g.Yf(function(){zj(a)},50)}};
mba=function(a){rj(a);a.N=!0;var b=wj(a);b.addEventListener&&(a.M=Cj(a,b,"addEventListener"));b.removeEventListener&&(a.na=Cj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Cj(a,b,e))}for(var f in a.G)a.M(f,a.G[f]);vj(a);a.ra&&a.ra(a.api);a.Y.oa("onReady",a.api)};
Cj=function(a,b,c){var d=b[c];return function(){try{return a.lb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.lb=e,g.Xf(e))}}};
rj=function(a){a.N=!1;if(a.na)for(var b in a.G)a.na(b,a.G[b]);for(var c in a.W)g.$f(parseInt(c,10));a.W={};a.M=null;a.na=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Lh.bind(a);a.api.removeEventListener=a.gG.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Av.bind(a);a.api.getPlayerType=a.Gv.bind(a);a.api.getCurrentVideoConfig=a.wv.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.uz.bind(a)};
Dj=function(a,b){var c=b;if("string"==typeof b){if(a.jb[b])return a.jb[b];c=function(){var d=g.u(b);d&&d.apply(g.q,arguments)};
a.jb[b]=c}return c?c:null};
nba=function(a,b){var c="ytPlayer"+b+a.ha;a.G[b]=c;g.q[c]=function(d){var e=g.Yf(function(){a.qb()||(a.Y.oa(b,d),g.Ta(a.W,String(e)))},0);
g.Ua(a.W,String(e),!0)};
return c};
Aj=function(a){a.cancel();rj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=wj(a);b&&(yj(a)||!Bj(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null));g.qd(a.Za)};
Bj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
xj=function(a){return a.D?a.D.jsUrl:a.C.assets.js};
g.Gj=function(a,b){var c=void 0===c?!0:c;a="string"===typeof a?g.ed(a):a;var d=g.Ej+"_"+g.Ba(a),e=g.Fj[d];if(e&&c)return b&&b.args&&b.args.fflags&&b.args.fflags.includes("web_player_remove_playerproxy=true")?e.api.loadVideoByPlayerVars(b.args||null):e.loadNewVideoConfig(b),e.api;e=new uj(a,d,b,void 0);g.Fj[d]=e;g.H("player-added",e.api);g.xd(e,g.w(oba,e));return e.api};
oba=function(a){delete g.Fj[a.getId()]};
g.Hj=function(a){if(!a)return null;var b=g.Ej+"_"+g.Ba(a),c=g.Fj[b];c||(c=new uj(a,b),g.Fj[b]=c);return c.api};
g.Ij=function(a){return g.Hj(document.getElementById(a))};
g.Kj=function(a,b){var c={};c.key=a;c.value=b;return Jj().then(function(d){return new Promise(function(e,f){try{var k=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);k.onsuccess=function(){e()};
k.onerror=function(){f()}}catch(l){f(l)}})})};
g.Lj=function(a){var b=new g.Vh("Error accessing DB");return Jj().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=function(){var k=f.result;d(k?k.value:null)};
f.onerror=function(){b.params={key:a,source:"onerror"};e(b)}}catch(k){b.params={key:a,
thrownError:String(k)},e(b)}})},function(){return null})};
Jj=function(){return Mj?Promise.resolve(Mj):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Mj=d,a(Mj);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Jj()};
c.onupgradeneeded=pba})};
pba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Nj=function(a,b){g.Ai.call(this,1,arguments)};
Oj=function(a,b){g.Ai.call(this,1,arguments)};
qba=function(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}};
Qj=function(a){var b=Pj(a);if(b.aft)return b.aft;a=g.F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
Tj=function(){var a;if(g.Pf("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===Rj||void 0===Rj?void 0:Rj.getEntriesByType)||void 0===a?void 0:a.call(Rj,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=Sj(e.requestStart),e.responseEnd=Sj(e.responseEnd),e.redirectStart=Sj(e.redirectStart),e.redirectEnd=Sj(e.redirectEnd),e.domainLookupEnd=Sj(e.domainLookupEnd),e.connectStart=Sj(e.connectStart),
e.connectEnd=Sj(e.connectEnd),e.responseStart=Sj(e.responseStart),e.secureConnectionStart=Sj(e.secureConnectionStart),e.domainLookupStart=Sj(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Rj.timing}else a=Rj.timing;return a};
Uj=function(){return g.Pf("csi_use_time_origin")&&Rj.timeOrigin?Math.floor(Rj.timeOrigin):Rj.timing.navigationStart};
Sj=function(a){return Math.round(Uj()+a)};
Vj=function(a){g.t("ytglobal.timingready_",a,void 0)};
Wj=function(a){return!!g.u("yt.timing."+(a||"")+"pingSent_")};
Xj=function(a,b){g.t("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Zj=function(a){return g.u("ytcsi."+(a||"")+"data_")||Yj(a)};
ak=function(a){a=Zj(a);a.info||(a.info={});return a.info};
Pj=function(a){a=Zj(a);a.tick||(a.tick={});return a.tick};
bk=function(a){var b=Zj(a).nonce;b||(b=ni(),Zj(a).nonce=b);return b};
Yj=function(a){var b={tick:{},info:{}};g.t("ytcsi."+(a||"")+"data_",b,void 0);return b};
dk=function(a){var b=Pj(a||""),c=Qj(a);c&&!ck&&(g.Di(rba,new Nj(Math.round(c-b._start),a)),ck=!0)};
sba=function(){if(Rj.getEntriesByType){var a=Rj.getEntriesByType("paint");if(a=g.Fa(a,function(b){return"first-paint"===b.name}))return Sj(a.startTime)}a=Rj.timing;
return a.wz?Math.max(0,a.wz):0};
ek=function(){var a=g.u("ytcsi.debug");a||(a=[],g.t("ytcsi.debug",a,void 0),g.t("ytcsi.reference",{},void 0));return a};
gk=function(a){a=a||"";var b=fk();if(b[a])return b[a];var c=ek(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d};
fk=function(){var a=g.u("ytcsi.reference");if(a)return a;ek();return g.u("ytcsi.reference")};
hk=function(){this.C=0};
ik=function(){hk.C||(hk.C=new hk);return hk.C};
kk=function(a,b){jk[b]=jk[b]||{count:0};var c=jk[b];c.count++;c.time=(0,g.Yg)();a.C||(a.C=g.Cg(function(){var d=(0,g.Yg)(),e;for(e in jk)jk[e]&&6E4<d-jk[e].time&&delete jk[e];a&&(a.C=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new g.Vh("CSI data exceeded logging limit with key",b),0===b.indexOf("info")?g.Zh(c):g.Yh(c)),!0):!1};
lk=function(a){return!!g.F("FORCE_CSI_ON_GEL",!1)||g.Pf("csi_on_gel")||!!Zj(a).useGel};
nk=function(a,b,c){var d=mk(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||(0,g.Yg)();return lk(c)?(gk(c||"").tick[a]=b||(0,g.Yg)(),d=bk(c),"_start"===a?(a=ik(),kk(a,"baseline_"+d)||g.Xh("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):ik().tick(a,d,b),dk(c),!0):!1};
qk=function(a,b,c){c=mk(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a in ok){if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}c=ok[a];g.Ha(tba,c)&&(b=!!b);a in pk&&"string"===typeof b&&(b=pk[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},k=0;k<b.length-1;k++){var l=b[k];f[l]={};f=f[l]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return kj({},d)}g.Ha(uba,a)||g.Zh(new g.Vh("Unknown label logged with GEL CSI",a))};
mk=function(a){a=Zj(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel};
rk=function(a){a=mk(a);"gelInfos"in a||(a.gelInfos={});return a.gelInfos};
sk=function(){Yj(void 0);vba();Xj(!1,void 0);g.F("TIMING_ACTION")&&g.Lf("PREVIOUS_ACTION",g.F("TIMING_ACTION"));g.Lf("TIMING_ACTION","")};
zba=function(){var a=g.F("TIMING_ACTION",void 0),b=g.F("TIMING_AFT_KEYS");gk("").info.actionType=a;b&&g.Lf("TIMING_AFT_KEYS",b);g.Lf("TIMING_ACTION",a);a=g.F("TIMING_INFO",{});for(var c in a)a.hasOwnProperty(c)&&tk(c,a[c]);tk("is_nav",1);(c=g.xi())&&tk("csn",c);(c=g.F("PREVIOUS_ACTION",void 0))&&!lk()&&tk("pa",c);c=ak();a=g.F("CLIENT_PROTOCOL");b=g.F("CLIENT_TRANSPORT");a&&tk("p",a);b&&tk("t",b);tk("yt_vis",wba());if("cold"===c.yt_lt){tk("yt_lt","cold");a=Tj();if(b=Uj())g.uk("srt",a.responseStart),
1!==c.prerender&&vk("n",b);c=sba();0<c&&g.uk("fpt",c);wk();Rj&&Rj.getEntriesByType&&xba();c=[];if(document.querySelector&&Rj&&Rj.getEntriesByName)for(var d in xk)xk.hasOwnProperty(d)&&(a=xk[d],yba(d,a)&&c.push(a));c.length&&tk("rc",c.join(","))}lk(void 0)&&(d={actionType:yk[g.F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:yk[g.F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"},c=bk(void 0),ik().info(d,c));d=ak();a=Pj();if("cold"===d.yt_lt&&(c=mk(),b=c.gelTicks?c.gelTicks:
c.gelTicks={},c=c.gelInfos?c.gelInfos:c.gelInfos={},lk())){for(var e in a)"tick_"+e in b||nk(e,a[e]);e=rk();a=bk();b={};for(var f in d)if(!("info_"+f in c)){var k=qk(f,d[f]);k&&(kj(e,k),kj(b,k))}ik().info(b,a)}Vj(!0);g.zk(!1)};
vk=function(a,b){tk("yt_sts",a,void 0);g.uk("_start",b,void 0)};
tk=function(a,b,c){null!==b&&(ak(c)[a]=b,lk(c)?(a=qk(a,b,c))&&lk(c)&&(b=gk(c||""),kj(b.info,a),kj(rk(c),a),c=bk(c),ik().info(a,c)):gk(c||"").info[a]=b)};
g.uk=function(a,b,c){var d=Pj(c);if(g.Pf("use_first_tick")&&Ak(a,c))return d[a];b||"_"===a[0]||Bk(a,c);var e=b||(0,g.Yg)();d[a]=e;nk(a,b,c)||(g.zk(!1,c),gk(c||"").tick[a]=b||(0,g.Yg)());return d[a]};
Ck=function(a,b){if(lk(void 0)){var c=mk(void 0);if(c.gelSpans)c.gelSpans[a]=!0;else{var d={};c.gelSpans=(d[a]=!0,d)}c={spanName:a,spanLengthUsec:String(Math.round(1E3*b))};gk("").span[String(c.spanName)]=c;d=mk(void 0);"gelSpans"in d||(d.gelSpans={});kj(d.gelSpans,c);d=bk(void 0);ik().span(c,d)}};
Bk=function(a,b){Rj.mark&&(g.ib(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Rj.mark(a))};
Ak=function(a,b){var c=Pj(b);return a in c};
g.zk=function(a,b){if(!Wj(b)){var c=g.F((b||"")+"TIMING_ACTION",void 0),d=Pj(b);if(g.u("ytglobal.timing"+(b||"")+"ready_")&&c&&Ak("_start")&&Qj(b))if(dk(b),a||b)Dk(b);else{c=!0;var e=g.F("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Dk(b)}}};
wba=function(){switch(g.og()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}};
Dk=function(a){if(!lk(a)){var b=Pj(a),c=ak(a),d=b._start,e=g.F("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:g.F((a||"")+"TIMING_ACTION",void 0)},k=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Qj(a);var l=Pj(a),m=l.pbr,p=l.vc;l=l.pbs;m&&p&&l&&m<p&&p<l&&ak(a).yt_pvis&&"youtube"===e&&(tk("yt_lt","hot_bg",a),e=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-e));for(var r in c)"_"!==r.charAt(0)&&(f[r]=c[r]);b.ps=(0,g.Yg)();r={};e=[];for(var y in b)"_"!==y.charAt(0)&&(m=Math.round(b[y]-d),r[y]=m,e.push(y+"."+
m));f.rt=e.join(",");b=!!c.ap;g.Pf("debug_csi_data")&&(c=g.u("yt.timing.csiData"),c||(c=[],g.t("yt.timing.csiData",c,void 0)),c.push({page:location.href,time:new Date,args:f}));c="";for(var z in f)f.hasOwnProperty(z)&&(c+="&"+z+"="+f[z]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var D=void 0===D?"":D;fj(f,D)||g.ej(f,void 0,void 0,void 0,D)}else g.ej(f);Xj(!0,a);g.Di(Aba,new Oj(r.aft+(Number(k)||0),a))}};
Ek=function(a){if(!lk(void 0)&&!Wj(void 0)){var b=g.F("CSI_SERVICE_NAME","youtube");g.F("TIMING_ACTION",void 0)&&b&&(g.uk("aa",void 0,void 0),tk("ap",1,void 0),tk("yt_fss",a,void 0),Dk(void 0))}};
yba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"===e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"===e&&(d=c.href);g.ta()&&c.setAttribute("nonce",g.ta());return d?(c=Rj.getEntriesByName(d))&&c[0]&&(c=c[0],d=Uj(),g.uk("rsf_"+b,d+Math.round(c.fetchStart)),g.uk("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(d=ak(void 0),e=rk(void 0),"rc"in d||"rc"in e||tk("rc",""),0===c.transferSize))?!0:!1:!1};
wk=function(){if(!g.Pf("log_deltas_killswitch")){var a,b,c,d;if(Rj&&Rj.timing){Rj.timeOrigin&&Rj.timing.navigationStart&&Ck("startTimeDelta",Math.floor(Rj.timeOrigin)-Rj.timing.navigationStart);var e=null===(d=null===(c=null===(b=null===(a=Rj.getEntriesByType)||void 0===a?void 0:a.call(Rj,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e&&e.responseEnd&&Rj.timing.responseEnd&&Ck("responseEndDelta",Sj(e.responseEnd)-Rj.timing.responseEnd)}}a=Tj();a.isPerformanceNavigationTiming&&
tk("pnt",1,void 0);g.uk("nreqs",a.requestStart,void 0);g.uk("nress",a.responseStart,void 0);g.uk("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.uk("nrs",a.redirectStart,void 0),g.uk("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.uk("ndnss",a.domainLookupStart,void 0),g.uk("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.uk("ntcps",a.connectStart,void 0),g.uk("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=Uj()&&0<a.connectEnd-
a.secureConnectionStart&&(g.uk("nstcps",a.secureConnectionStart,void 0),g.uk("ntcpe",a.connectEnd,void 0))};
xba=function(){var a=window.location.protocol,b=Rj.getEntriesByType("resource");b=(0,g.Fk)(b,function(c){return 0===c.name.indexOf(a+"//web.archive.org/web/20200601015014/https://fonts.gstatic.com/s/")});
(b=(0,g.Od)(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.uk("wffs",Sj(b.startTime)),g.uk("wffe",Sj(b.responseEnd)))};
Gba=function(){Gk++;var a=g.id(),b=new g.Bd(0,0,a.width,a.height);tk("vph",a.height);tk("vpw",a.width);g.uk("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[];Hk.start();for(var e=0;e<c;e++){var f=a[e];Jk(f,b)&&(f=Bba(f),f.then(Cba),d.push(f),Kk.push(f))}g.uk("vpcc");b=g.Ke(d).then(Dba);g.Me(b,Eba);b.then(Fba);Kk.push(b);return b};
Fba=function(){Hk.stop()};
Eba=function(){g.uk("vpr")};
Jk=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.ng(c);if(e in Lk)return!0;if(e in Mk)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Mk[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Mk[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Lk[d[c]]=!0;return!0};
Dba=function(a){var b=g.id();b=new g.Bd(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Jk(a[d].qy,b)&&c<f&&(c=f)}return c};
Bba=function(a){var b=Gk;return new g.Ee(function(c,d){var e={qy:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){Gk!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},Nk.push(a))})};
Cba=function(a){Hk.start();a=a.time;Ok<a&&(Ok=a,g.uk("lim",a))};
Hba=function(){g.uk("vptl",Ok);g.uk("vpl",Ok)};
Iba=function(){Kk.forEach(function(a){a.cancel()});
Ok=Kk.length=0;Lk={};Mk={};Nk.forEach(function(a){a.slt=void 0});
Nk.length=0};
g.Pk=function(a,b){g.ej("/gen_204?"+a,b)};
Jba=function(a){if(null==a)return[];var b=[];g.Pf("ima_prevent_mpu_queries_on_cached_playback")&&0>Qk.indexOf("ad3_module")&&Qk.push("ad3_module");Qk.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Rk=function(){return g.E(g.A("page-container"),"remote-connected")};
Kba=function(){Sk=g.Zf(Tk,5E3);var a=g.Uk();a&&(a.addEventListener("onReady",Tk),a.addEventListener("onStateChange",Tk))};
Vk=function(a){for(var b in g.Fj){var c=g.Fj[b];c&&c.cancel()}if(a=a||null)g.Gj("player-api",a),a=g.li(a),a.loaded=!0;Tk();g.t("ytplayer.config",a,void 0)};
g.Uk=function(){return g.Ij("player-api")};
Tk=function(){var a=g.Uk();if(a){var b=1==(a&&a.isReady()?a.getPlayerState():void 0),c="watch"==g.F("PAGE_NAME"),d=g.Rk();!b||c||d||a.pauseVideo()}};
Xk=function(){g.uk("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){g.uk("cpt");g.H("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(g.uk("cpt"),g.H("on_cpt_tick",(new Date).getTime())):setTimeout(function(){g.uk("cpt");
g.H("on_cpt_tick",(new Date).getTime())},0);
Lba();g.F("CSI_VIEWPORT")&&(Wk=Gba(),Wk.then(function(a){g.uk("vpl",a);Wk=null},function(){}))};
Lba=function(){Yk("init");var a=g.F("PAGE_NAME",void 0);a&&Yk("init-"+a)};
Yk=function(a){g.Hg()?Zk.push(g.Dg(g.w(g.hg,a),0)):g.H(a)};
$k=function(){g.Fg(Zk);Zk.length=0;Iba();Wk&&(Wk.cancel(),Wk=null);var a=g.F("PAGE_NAME",void 0);a&&g.hg("dispose-"+a);g.hg("dispose")};
Mba=function(){Xk()};
Nba=function(){g.F("TIMING_REPORT_ON_UNLOAD")&&g.zk(!0);Ek("u");g.Si("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Oi();g.Ug();$k();g.hg("pageunload")};
al=function(){g.Ig()};
bl=function(){window.yt_spf_loaded_history=!0;g.Ig()};
gl=function(){cl=1;dl=el=0;g.F("TIMING_REPORT_ON_UNLOAD")&&g.zk(!0);if(g.Pf("warm_load_nav_start_web")){var a=fk();a[""]&&delete a[""];var b={timerName:"",info:{},tick:{},span:{}};ek().push(b);a[""]=b;Ek("n");sk();Vj(!1);g.Lf("TIMING_AFT_KEYS",[]);tk("yt_lt","warm");g.Lf("TIMING_ACTION","");g.Lf("TIMING_WAIT",[]);delete g.F("TIMING_INFO",{}).yt_lt;vk("n")}else Ek("n"),sk(),vk("n");Bk("nr");fl(Oba);Oi();g.hg("navigate")};
jl=function(a){a=a.detail.part||a.detail.partial;g.uk("nc"+el);++el;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.uk("bc");else{var b=1==cl;cl=2;b?(fl(Pba),hl()):fl(Qba);if(b=a&&a.data&&a.data.swfcfg)il(a.timing,b.args),Ak("cfg")||g.uk("cfg"),Vk(b)}};
kl=function(){g.uk("np"+dl);++dl};
ll=function(a){a=a.detail.response;var b=1==cl;cl=3;b&&(fl(Rba),hl());if(b=a.data&&a.data.swfcfg)il(a.timing,b.args),Ak("cfg")||g.uk("cfg"),Vk(b)};
pl=function(a){g.uk("nd");a=a.detail.response;g.ml=a.cacheKey;a=a.timing;var b=window._spf_state;g.nl.navigationCount=b&&b["nav-counter"]||0;g.Pf("warm_load_nav_start_web")?g.uk("srt",a.responseStart):(vk("ne",a.responseStart),b=Tj().responseStart,tk("srt",Math.max(0,b-Uj())));tk("yt_lt",a.spfCached?"hot":"warm");g.uk("pfs",a.fetchStart);g.uk("pfrs",a.responseStart);"redirectStart"in a&&wk();fl(ol);document.getElementById("content").style.height="";Xk();cl=0};
ql=function(a){var b=a.detail.url,c=a.detail.err;c&&(a=a.detail.xhr,a&&!a.responseText||a&&a.responseText&&a.responseText.startsWith("<")||(c.params=b,g.Xf(c)))};
rl=function(a){g.Pk(g.rc({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Tba=function(){Sba();window.yt_spf_loaded_history=!1};
Uba=function(){};
hl=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");$k();a=g.F("PREVIOUS_ACTION");for(var b in g.Kf)delete g.Kf[b];g.Lf("PREVIOUS_ACTION",a);g.Lf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.t("ytplayer.config",null,void 0);(b=g.Uk())&&b.stopVideo&&(b.stopVideo(),b.getLastError()&&(b=document.getElementById("movie_player"))&&b.stopVideo&&b.stopVideo());Tk()};
fl=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.Eg(sl);sl=g.Dg(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.$f(tl);tl=g.Yf(function(){b.className=e},c)},0)};
Sba=function(){var a=ol[0]+50;g.$f(tl);tl=g.Yf(function(){var b=document.getElementById("progress");b&&b.parentNode.removeChild(b)},a)};
il=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Jba(b));g.F("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Pk(g.rc(c)))};
vl=function(){return"granted"!=Notification.permission?Promise.resolve():ul().then(function(a){return a?a.pushManager.getSubscription().then(function(b){if(b)return Promise.resolve();b={userVisibleOnly:!0,applicationServerKey:laa()};return a.pushManager.subscribe(b).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
xl=function(){wl({type:"notifications_register",data:g.F("ID_TOKEN")})};
ul=function(){var a=Rf("service_worker_scope");try{return navigator.serviceWorker.getRegistration(a)}catch(b){return Promise.reject(b)}};
Vba=function(){return ul().then(yl)["catch"](function(){return!1})};
yl=function(a){return!(!a||!a.pushManager)};
wl=function(a){return ul().then(function(b){if(!b||!b.active)return Promise.reject(Error("serviceworker.postMessage"));try{return b.active.postMessage(a),Promise.resolve()}catch(c){return Promise.reject(c)}})};
Wba=function(){if(!g.F("LOGGED_IN",void 0))return Promise.resolve(!1);var a=Rf("service_worker_push_force_notification_prompt_tag");return a?g.Lj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
$ba=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?Vba():Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=vl().then(function(){return wl({type:"notifications_check_registration",data:g.F("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return Xba(a)}).then(function(c){if(c)return Yba(),Zba().then(function(){})})["catch"](function(){})})};
Xba=function(a){return g.F("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.F("LOGGED_IN",void 0)&&(void 0===a?0:a)?Wba().then(function(b){if(b)return!0;b=[aca(),bca()];g.F("LOGGED_IN",void 0)||b.push(cca());return Promise.all(b).then(function(c){return c.every(function(d){return d})})}):Promise.resolve(!1)};
cca=function(){var a=g.Qf("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.Lj("WatchCount").then(function(b){return b>=a})};
Zba=function(){var a=arguments;g.Pf("service_worker_push_prompt_modal_enable")&&dca();return Notification.requestPermission().then(function(b){zl();var c=document.getElementById("ticker");c&&(c.className=c.classList.remove("show"));if("granted"==b)return vl().then(function(){g.Kj("NotificationsDisabled",!1);xl();return Promise.resolve(!0)});
"denied"==b&&xl();return Promise.resolve(!1)})["catch"](function(){zl();
return Promise.reject.apply(Promise,g.ja(a))})};
Yba=function(){g.Lj("PromptCount").then(function(a){return g.Kj("PromptCount",a+1)}).then(function(){return g.Kj("PromptTime",(0,g.Yc)())}).then(function(){var a=Rf("service_worker_push_force_notification_prompt_tag");
if(a)return g.Lj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.Kj("PromptTags",JSON.stringify(c))})})};
aca=function(){return-1==g.Qf("service_worker_push_prompt_cap")?Promise.resolve(!0):g.Lj("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.Qf("service_worker_push_prompt_cap"))})};
bca=function(){var a=g.Qf("service_worker_push_prompt_delay_microseconds");return a?g.Lj("PromptTime").then(function(b){return Promise.resolve((0,g.Yc)()-a>(b||0))}):Promise.resolve(!0)};
eca=function(){Al||zl()};
Bl=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
dca=function(){var a=g.A("yt-push-prompt-modal-bg");Al=g.Pf("service_worker_push_prompt_modal_ignore_click");a?Bl(a):(a=g.ld("div",{id:"yt-push-prompt-modal-bg"}),Bl(a),document.body.appendChild(a),g.yg(document,"click",eca))};
zl=function(){var a=g.A("yt-push-prompt-modal-bg");a&&g.rd(a)};
fca=function(a){return yl(a)?$ba():Promise.resolve()};
hca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(gca)})};
jca=function(){var a="/sw.js",b=g.F("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);try{var c=Cl(a)["catch"](function(){return new Promise(function(){})});
g.Pf("service_worker_push_enabled")&&c.then(ica).then(fca)}catch(d){if("SecurityError"!=d.name)throw d;}};
ica=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
gca=function(a){a&&Cl("/sw.js?0",a.scope)};
Cl=function(a,b){return navigator.serviceWorker.register(a,{scope:b||Rf("service_worker_scope")||"/"})};
kca=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,k=Nf("log_window_onerror_fraction");if(k&&Math.random()<k)f=!0;else{k=document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?k=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,k=a.message,b=a.filename,c=a.lineno,d=a.colno):(k="Unknown error",b="Unknown file",c=0),e=new g.Vh(k),e.name="UnhandledWindowError",e.message=k,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?g.Yh(e):g.Zh(e))};
Dl=function(){g.Ti.call(this,"www/base");this.D=0};
El=function(a){(a=a.detail.name)&&Zi(a)};
g.aa=[];ea="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
da=aaa(this);fa("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.C=e;ea(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.C};
var d=0;return b});
fa("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ea(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(ca(this))}})}return a});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},Fl;
if("function"==typeof Object.setPrototypeOf)Fl=Object.setPrototypeOf;else{var Gl;a:{var lca={a:!0},Hl={};try{Hl.__proto__=lca;Gl=Hl.a;break a}catch(a){}Gl=!1}Fl=Gl?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=Fl;
fa("Promise",function(a){function b(k){this.F=0;this.D=void 0;this.C=[];var l=this.H();try{k(l.resolve,l.reject)}catch(m){l.reject(m)}}
function c(){this.C=null}
function d(k){return k instanceof b?k:new b(function(l){l(k)})}
if(a)return a;c.prototype.F=function(k){if(null==this.C){this.C=[];var l=this;this.D(function(){l.H()})}this.C.push(k)};
var e=da.setTimeout;c.prototype.D=function(k){e(k,0)};
c.prototype.H=function(){for(;this.C&&this.C.length;){var k=this.C;this.C=[];for(var l=0;l<k.length;++l){var m=k[l];k[l]=null;try{m()}catch(p){this.G(p)}}}this.C=null};
c.prototype.G=function(k){this.D(function(){throw k;})};
b.prototype.H=function(){function k(p){return function(r){m||(m=!0,p.call(l,r))}}
var l=this,m=!1;return{resolve:k(this.M),reject:k(this.G)}};
b.prototype.M=function(k){if(k===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof b)this.T(k);else{a:switch(typeof k){case "object":var l=null!=k;break a;case "function":l=!0;break a;default:l=!1}l?this.Y(k):this.L(k)}};
b.prototype.Y=function(k){var l=void 0;try{l=k.then}catch(m){this.G(m);return}"function"==typeof l?this.la(l,k):this.L(k)};
b.prototype.G=function(k){this.N(2,k)};
b.prototype.L=function(k){this.N(1,k)};
b.prototype.N=function(k,l){if(0!=this.F)throw Error("Cannot settle("+k+", "+l+"): Promise already settled in state"+this.F);this.F=k;this.D=l;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var k=0;k<this.C.length;++k)f.F(this.C[k]);this.C=null}};
var f=new c;b.prototype.T=function(k){var l=this.H();k.Sh(l.resolve,l.reject)};
b.prototype.la=function(k,l){var m=this.H();try{k.call(l,m.resolve,m.reject)}catch(p){m.reject(p)}};
b.prototype.then=function(k,l){function m(z,D){return"function"==typeof z?function(O){try{p(z(O))}catch(T){r(T)}}:D}
var p,r,y=new b(function(z,D){p=z;r=D});
this.Sh(m(k,p),m(l,r));return y};
b.prototype["catch"]=function(k){return this.then(void 0,k)};
b.prototype.Sh=function(k,l){function m(){switch(p.F){case 1:k(p.D);break;case 2:l(p.D);break;default:throw Error("Unexpected state: "+p.F);}}
var p=this;null==this.C?f.F(m):this.C.push(m)};
b.resolve=d;b.reject=function(k){return new b(function(l,m){m(k)})};
b.race=function(k){return new b(function(l,m){for(var p=g.ia(k),r=p.next();!r.done;r=p.next())d(r.value).Sh(l,m)})};
b.all=function(k){var l=g.ia(k),m=l.next();return m.done?d([]):new b(function(p,r){function y(O){return function(T){z[O]=T;D--;0==D&&p(z)}}
var z=[],D=0;do z.push(void 0),D++,d(m.value).Sh(y(z.length-1),r),m=l.next();while(!m.done)})};
return b});
fa("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
fa("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ma(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&k<e;)if(d[k++]!=b[l++])return!1;return l>=f}});
fa("Array.prototype.keys",function(a){return a?a:function(){return na(this,function(b){return b})}});
fa("Array.prototype.values",function(a){return a?a:function(){return na(this,function(b,c){return c})}});
var mca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)qa(d,e)&&(a[e]=d[e])}return a};
fa("Object.assign",function(a){return a||mca});
fa("WeakMap",function(a){function b(m){this.sb=(l+=Math.random()+1).toString();if(m){m=g.ia(m);for(var p;!(p=m.next()).done;)p=p.value,this.set(p[0],p[1])}}
function c(){}
function d(m){var p=typeof m;return"object"===p&&null!==m||"function"===p}
function e(m){if(!qa(m,k)){var p=new c;ea(m,k,{value:p})}}
function f(m){var p=Object[m];p&&(Object[m]=function(r){if(r instanceof c)return r;e(r);return p(r)})}
if(function(){if(!a||!Object.seal)return!1;try{var m=Object.seal({}),p=Object.seal({}),r=new a([[m,2],[p,3]]);if(2!=r.get(m)||3!=r.get(p))return!1;r["delete"](m);r.set(p,4);return!r.has(m)&&4==r.get(p)}catch(y){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var l=0;b.prototype.set=function(m,p){if(!d(m))throw Error("Invalid WeakMap key");e(m);if(!qa(m,k))throw Error("WeakMap key fail: "+m);m[k][this.sb]=p;return this};
b.prototype.get=function(m){return d(m)&&qa(m,k)?m[k][this.sb]:void 0};
b.prototype.has=function(m){return d(m)&&qa(m,k)&&qa(m[k],this.sb)};
b.prototype["delete"]=function(m){return d(m)&&qa(m,k)&&qa(m[k],this.sb)?delete m[k][this.sb]:!1};
return b});
fa("Map",function(a){function b(){var l={};return l.previous=l.next=l.head=l}
function c(l,m){var p=l.F;return ha(function(){if(p){for(;p.head!=l.F;)p=p.previous;for(;p.next!=p.head;)return p=p.next,{done:!1,value:m(p)};p=null}return{done:!0,value:void 0}})}
function d(l,m){var p=m&&typeof m;"object"==p||"function"==p?f.has(m)?p=f.get(m):(p=""+ ++k,f.set(m,p)):p="p_"+m;var r=l.C[p];if(r&&qa(l.C,p))for(var y=0;y<r.length;y++){var z=r[y];if(m!==m&&z.key!==z.key||m===z.key)return{id:p,list:r,index:y,mc:z}}return{id:p,list:r,index:-1,mc:void 0}}
function e(l){this.C={};this.F=b();this.size=0;if(l){l=g.ia(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var l=Object.seal({x:4}),m=new a(g.ia([[l,"s"]]));if("s"!=m.get(l)||1!=m.size||m.get({x:4})||m.set({x:4},"t")!=m||2!=m.size)return!1;var p=m.entries(),r=p.next();if(r.done||r.value[0]!=l||"s"!=r.value[1])return!1;r=p.next();return r.done||4!=r.value[0].x||"t"!=r.value[1]||!p.next().done?!1:!0}catch(y){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(l,m){l=0===l?0:l;var p=d(this,l);p.list||(p.list=this.C[p.id]=[]);p.mc?p.mc.value=m:(p.mc={next:this.F,previous:this.F.previous,head:this.F,key:l,value:m},p.list.push(p.mc),this.F.previous.next=p.mc,this.F.previous=p.mc,this.size++);return this};
e.prototype["delete"]=function(l){l=d(this,l);return l.mc&&l.list?(l.list.splice(l.index,1),l.list.length||delete this.C[l.id],l.mc.previous.next=l.mc.next,l.mc.next.previous=l.mc.previous,l.mc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(l){return!!d(this,l).mc};
e.prototype.get=function(l){return(l=d(this,l).mc)&&l.value};
e.prototype.entries=function(){return c(this,function(l){return[l.key,l.value]})};
e.prototype.keys=function(){return c(this,function(l){return l.key})};
e.prototype.values=function(){return c(this,function(l){return l.value})};
e.prototype.forEach=function(l,m){for(var p=this.entries(),r;!(r=p.next()).done;)r=r.value,l.call(m,r[1],r[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var k=0;return e});
fa("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)qa(b,d)&&c.push([d,b[d]]);return c}});
fa("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
fa("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var k=d[f];if(k===b||Object.is(k,b))return!0}return!1}});
fa("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ma(this,b,"includes").indexOf(b,c||0)}});
fa("Set",function(a){function b(c){this.qa=new Map;if(c){c=g.ia(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.qa.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(g.ia([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.qa.set(c,c);this.size=this.qa.size;return this};
b.prototype["delete"]=function(c){c=this.qa["delete"](c);this.size=this.qa.size;return c};
b.prototype.clear=function(){this.qa.clear();this.size=0};
b.prototype.has=function(c){return this.qa.has(c)};
b.prototype.entries=function(){return this.qa.entries()};
b.prototype.values=function(){return this.qa.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.qa.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var nca=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
fa("Reflect.construct",function(){return nca});
fa("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var k=0;!(f=b.next()).done;)e.push(c.call(d,f.value,k++))}else for(f=b.length,k=0;k<f;k++)e.push(c.call(d,b[k],k));return e}});
fa("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
fa("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
fa("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
fa("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)qa(b,d)&&c.push(b[d]);return c}});
g.Il=g.Il||{};g.q=this||self;baa=/^[\w+/_-]+[=]{0,2}$/;sa=null;Aa="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Yc=Date.now||function(){return+new Date};g.x(g.Da,Error);g.Da.prototype.name="CustomError";g.Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.oca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Fk=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k="string"===typeof a?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.Jl=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Od=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.v)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.B)(a,function(f,k){e=b.call(d,e,f,k,a)});
return e};
g.Kl=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Ll=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.bb.prototype.Md=!0;g.bb.prototype.Tc=function(){return this.C};
var ab={},$a={};g.pca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.qca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Ml=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.gb.prototype.Md=!0;g.gb.prototype.Tc=function(){return this.F.toString()};
g.gb.prototype.Vk=!0;g.gb.prototype.C=function(){return 1};
g.fb={};g.eb={};var lb,mb,nb,ob,pb,qb,gaa;g.tb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
lb=/&/g;mb=/</g;nb=/>/g;ob=/"/g;pb=/'/g;qb=/\x00/g;gaa=/[\x00&<>"']/;g.yb.prototype.Md=!0;g.yb.prototype.Tc=function(){return this.F.toString()};
g.yb.prototype.Vk=!0;g.yb.prototype.C=function(){return 1};
var iaa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,haa=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Cb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,xb={},wb={};g.Gb.prototype.Md=!0;g.Fb={};g.Gb.prototype.Tc=function(){return this.C};
g.Nl=g.Hb("");g.Ol=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.Pl=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Jb.prototype.Md=!0;g.Ib={};g.Jb.prototype.Tc=function(){return this.C};
g.rca=g.Kb("");a:{var Ql=g.q.navigator;if(Ql){var Rl=Ql.userAgent;if(Rl){g.Lb=Rl;break a}}g.Lb=""};var Sb;g.Tb.prototype.Vk=!0;g.Tb.prototype.C=function(){return this.D};
g.Tb.prototype.Md=!0;g.Tb.prototype.Tc=function(){return this.F.toString()};
Sb={};g.Sl=new g.Tb;g.Sl.F=g.q.trustedTypes&&g.q.trustedTypes.emptyHTML?g.q.trustedTypes.emptyHTML:"";g.Sl.D=0;g.Tl=g.Yb("<br>",0);g.sca=g.Oa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.Ub(g.Sl);return!b.parentElement});g.ec=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.jc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.uc=/#|$/;g.yc[" "]=g.ua;var am,jaa,em;g.Ul=g.Mb("Opera");g.Bf=g.Nb();g.Vl=g.Mb("Edge");g.Wl=g.Vl||g.Bf;g.Xl=g.Mb("Gecko")&&!(g.sb(g.Lb.toLowerCase(),"webkit")&&!g.Mb("Edge"))&&!(g.Mb("Trident")||g.Mb("MSIE"))&&!g.Mb("Edge");g.Yl=g.sb(g.Lb.toLowerCase(),"webkit")&&!g.Mb("Edge");g.Zl=g.Mb("Macintosh");g.$l=g.Mb("Windows");g.tca=g.Mb("Linux")||g.Mb("CrOS");g.uca=g.Mb("Android");g.vca=wc();g.wca=g.Mb("iPad");g.xca=g.Mb("iPod");g.yca=g.xc();
a:{var bm="",cm=function(){var a=g.Lb;if(g.Xl)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Vl)return/Edge\/([\d\.]+)/.exec(a);if(g.Bf)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Yl)return/WebKit\/(\S+)/.exec(a);if(g.Ul)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
cm&&(bm=cm?cm[1]:"");if(g.Bf){var dm=Ac();if(null!=dm&&dm>parseFloat(bm)){am=String(dm);break a}}am=bm}g.Bc=am;jaa={};if(g.q.document&&g.Bf){var fm=Ac();em=fm?fm:parseInt(g.Bc,10)||void 0}else em=void 0;g.Dc=em;g.gm=Ob();g.hm=wc()||g.Mb("iPod");g.im=g.Mb("iPad");g.zca=g.Rb();g.jm=Pb();g.km=g.Qb()&&!g.xc();var Gc={},Jc=null;g.Kc.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.iterator&&(g.Kc.prototype[Symbol.iterator]=function(){return this});g.Pc="function"==typeof Uint8Array;g.Lc.prototype.Yc=function(){Mc(this);return this.jc};
g.Lc.prototype.F=g.Pc?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return g.Hc(this)};
try{return JSON.stringify(this.jc&&this.Yc(),Nc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.jc&&this.Yc(),Nc)};
g.Lc.prototype.toString=function(){Mc(this);return this.jc.toString()};
g.Lc.prototype.clone=function(){return new this.constructor(Oc(this.Yc()))};g.lm=document;g.Fd=window;var Sc={};g.h=g.Tc.prototype;g.h.isEnabled=function(){return navigator.cookieEnabled};
g.h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ER;d=c.secure||!1;var f=c.domain||void 0;var k=c.path||void 0;var l=c.Al}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===l&&(l=-1);c=f?";domain="+f:"";k=k?";path="+k:"";d=d?";secure":"";l=0>l?"":0==l?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Yc)()+1E3*l)).toUTCString();this.C.cookie=a+"="+b+c+k+l+d+(null!=e?";samesite="+
e:"")};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.tb)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Al:0,path:b,domain:c});return d};
g.h.yc=function(){return g.Uc(this).keys};
g.h.Fb=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Eb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.ud=g.ba(3);g.h.clear=function(){for(var a=g.Uc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Nh=new g.Tc("undefined"==typeof document?null:document);g.mm={Ia:["BC","AD"],Ma:["Before Christ","Anno Domini"],Na:"JFMAMJJASOND".split(""),Oa:"JFMAMJJASOND".split(""),xa:"January February March April May June July August September October November December".split(" "),ua:"January February March April May June July August September October November December".split(" "),za:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Da:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Fa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
La:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ca:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Ea:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Qa:"SMTWTFS".split(""),Pa:"SMTWTFS".split(""),Ka:["Q1","Q2","Q3","Q4"],Ja:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Ba:["AM","PM"],sa:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],Aa:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Ha:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],va:6,Ga:[5,6],wa:5};
g.nm=g.mm;g.nm=g.mm;g.h=g.Zc.prototype;g.h.re=g.nm.va;g.h.Og=g.nm.wa;g.h.clone=function(){var a=new g.Zc(this.date);a.re=this.re;a.Og=this.Og;return a};
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
g.h.add=function(a){if(a.C||a.months){var b=this.getMonth()+a.months+12*a.C,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);var d=Math.min(g.Vc(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),Xc(this,a.getDate()))};
g.h.Xe=function(a){return[this.getFullYear(),g.fc(this.getMonth()+1,2),g.fc(this.getDate(),2)].join(a?"-":"")+""};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){return this.Xe()};
g.h.valueOf=function(){return this.date.valueOf()};var maa;maa=!g.Bf||g.Ec(9);g.Aca=!g.Xl&&!g.Bf||g.Bf&&g.Ec(9)||g.Xl&&g.Cc("1.9.1");g.om=g.Bf&&!g.Cc("9");g.Bca=g.Bf||g.Ul||g.Yl;g.h=g.$c.prototype;g.h.clone=function(){return new g.$c(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.$c&&g.ad(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.cd.prototype;g.h.clone=function(){return new g.cd(this.width,this.height)};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!(this.width*this.height)};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var fd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Cca={YJ:"allow-forms",ZJ:"allow-modals",aK:"allow-orientation-lock",bK:"allow-pointer-lock",cK:"allow-popups",dK:"allow-popups-to-escape-sandbox",eK:"allow-presentation",fK:"allow-same-origin",gK:"allow-scripts",hK:"allow-top-navigation",iK:"allow-top-navigation-by-user-activation"},oaa=g.Oa(function(){return g.vd(Cca)});g.va(g.wd);g.C.prototype.Rc=!1;g.C.prototype.qb=function(){return this.Rc};
g.C.prototype.dispose=function(){this.Rc||(this.Rc=!0,this.X())};
g.C.prototype.X=function(){if(this.wf)for(;this.wf.length;)this.wf.shift()()};g.h=g.Bd.prototype;g.h.clone=function(){return new g.Bd(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.$c?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.pm=g.Xl?"MozUserSelect":g.Yl||g.Vl?"WebkitUserSelect":null;g.qm=!!window.google_async_iframe_id;g.rm=g.qm&&window.parent||window;g.hb(g.db("//web.archive.org/web/20200601015014/https://fonts.googleapis.com/css"));g.wh=(new Date).getTime();Nd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
Nd.prototype.get=function(a){return!!this.C[a]};g.Rd.prototype.stopPropagation=function(){this.F=!0};
g.Rd.prototype.preventDefault=function(){this.defaultPrevented=!0};var ge,Eca,waa;g.Dca=!g.Bf||g.Ec(9);ge=!g.Bf||g.Ec(9);Eca=g.Bf&&!g.Cc("9");waa=function(){if(!g.q.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.q.addEventListener("test",g.ua,b),g.q.removeEventListener("test",g.ua,b)}catch(c){}return a}();g.sm=g.Yl?"webkitTransitionEnd":g.Ul?"otransitionend":"transitionend";g.x(g.Sd,g.Rd);var Fca={2:"touch",3:"pen",4:"mouse"};
g.Sd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Xl&&(g.zc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Zl?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Fca[a.pointerType]||"";this.state=
a.state;this.zc=a;a.defaultPrevented&&this.preventDefault()};
g.Sd.prototype.stopPropagation=function(){g.Sd.V.stopPropagation.call(this);this.zc.stopPropagation?this.zc.stopPropagation():this.zc.cancelBubble=!0};
g.Sd.prototype.preventDefault=function(){g.Sd.V.preventDefault.call(this);var a=this.zc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Eca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Td="closure_listenable_"+(1E6*Math.random()|0),taa=0;g.h=g.Wd.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Yd(a,b,d,e);-1<k?(b=a[k],c||(b.Rh=!1)):(b=new uaa(b,this.src,f,!!d,e),b.Rh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Yd(e,b,c,d);return-1<b?(Vd(e[b]),g.Ka(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Vd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.Xf=g.ba(5);g.h.Ue=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Yd(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return g.Qa(this.listeners,function(f){for(var k=0;k<f.length;++k)if(!(c&&f[k].type!=d||e&&f[k].capture!=b))return!0;return!1})};var de="closure_lm_"+(1E6*Math.random()|0),je={},fe=0,me="__closure_events_fn_"+(1E9*Math.random()>>>0);g.x(g.ne,g.C);g.ne.prototype[Td]=!0;g.h=g.ne.prototype;g.h.ri=function(){return this.Sl};
g.h.vh=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.$d(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.he(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.ri();if(b){var c=[];for(var d=1;b;b=b.ri())c.push(b),++d}b=this.Rt;d=a.type||a;if("string"===typeof a)a=new g.Rd(a,b);else if(a instanceof g.Rd)a.target=a.target||b;else{var e=a;a=new g.Rd(d,b);g.Za(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=oe(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=oe(k,d,!0,a)&&e,a.F||(e=oe(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=oe(k,d,!1,a)&&e;return e};
g.h.X=function(){g.ne.V.X.call(this);this.removeAllListeners();this.Sl=null};
g.h.O=function(a,b,c,d){return this.vd.add(String(a),b,!1,c,d)};
g.h.ye=function(a,b,c,d){return this.vd.add(String(a),b,!0,c,d)};
g.h.Wa=function(a,b,c,d){return this.vd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.vd?this.vd.removeAll(a):0};
g.h.Xf=g.ba(4);g.h.Ue=function(a,b,c,d){return this.vd.Ue(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.vd.hasListener(void 0!==a?String(a):void 0,b)};pe.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var ze;var Ae=new pe(function(){return new te},function(a){a.reset()});
se.prototype.add=function(a,b){var c=Ae.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
se.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
te.prototype.set=function(a,b){this.qc=a;this.scope=b;this.next=null};
te.prototype.reset=function(){this.next=this.scope=this.qc=null};var ue,ve=!1,we=new se;Fe.prototype.reset=function(){this.context=this.onRejected=this.D=this.C=null;this.F=!1};
var Ge=new pe(function(){return new Fe},function(a){a.reset()});
g.Ee.prototype.then=function(a,b,c){return Le(this,g.ya(a)?a:null,g.ya(b)?b:null,c)};
g.Be(g.Ee);g.Ee.prototype.cancel=function(a){if(0==this.C){var b=new g.Se(a);xe(function(){Ne(this,b)},this)}};
g.Ee.prototype.Y=function(a){this.C=0;g.De(this,2,a)};
g.Ee.prototype.M=function(a){this.C=0;g.De(this,3,a)};
g.Ee.prototype.J=function(){for(var a;a=Oe(this);)Pe(this,a,this.C,this.N);this.L=!1};
var Ue=re;g.x(g.Se,g.Da);g.Se.prototype.name="cancel";g.x(g.Xe,g.C);g.h=g.Xe.prototype;g.h.sb=0;g.h.X=function(){g.Xe.V.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.sb=g.Ve(this.Qb,void 0!==a?a:this.D)};
g.h.stop=function(){this.isActive()&&g.We(this.sb);this.sb=0};
g.h.isActive=function(){return 0!=this.sb};
g.h.Ak=function(){this.sb=0;this.C&&this.C.call(this.F)};g.x(Ye,Caa);Ye.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Ye.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)Ze(this,a,d),d+=this.F;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){Ze(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){Ze(this,e);f=0;break}}this.D=f;this.H+=b}};
Ye.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;Ze(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};var af="StopIteration"in g.q?g.q.StopIteration:{message:"StopIteration",stack:""};$e.prototype.next=function(){throw af;};
$e.prototype.ad=function(){return this};g.h=g.ef.prototype;g.h.Eb=function(){return this.F};
g.h.Fb=g.ba(0);g.h.yc=function(){g.gf(this);return this.C.concat()};
g.h.ud=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.F!=a.Eb())return!1;var c=b||Eaa;g.gf(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.F};
g.h.clear=function(){this.qa={};this.Ge=this.F=this.C.length=0};
g.h.remove=function(a){return g.ff(this.qa,a)?(delete this.qa[a],this.F--,this.Ge++,this.C.length>2*this.F&&g.gf(this),!0):!1};
g.h.get=function(a,b){return g.ff(this.qa,a)?this.qa[a]:b};
g.h.set=function(a,b){g.ff(this.qa,a)||(this.F++,this.C.push(a),this.Ge++);this.qa[a]=b};
g.h.forEach=function(a,b){for(var c=this.yc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.ef(this)};
g.h.ad=function(a){g.gf(this);var b=0,c=this.Ge,d=this,e=new $e;e.next=function(){if(c!=d.Ge)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw af;var f=d.C[b++];return a?f:d.qa[f]};
return e};var nf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Gaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.x(g.of,g.C);g.h=g.of.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.od=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.ua):(c&&g.La(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Haa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.od(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.B)(b,this.od,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Eb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Eb(b);return a};
g.h.X=function(){g.of.V.X.call(this);this.clear();this.D.length=0};g.qf.prototype.set=function(a,b){void 0===b?this.C.remove(a):this.C.set(a,g.lf(b))};
g.qf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.qf.prototype.remove=function(a){this.C.remove(a)};g.x(rf,g.qf);rf.prototype.set=function(a,b){rf.V.set.call(this,a,tf(b))};
rf.prototype.F=function(a){a=rf.V.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
rf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.x(g.uf,rf);g.uf.prototype.set=function(a,b,c){if(b=tf(b)){if(c){if(c<(0,g.Yc)()){g.uf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Yc)()}g.uf.V.set.call(this,a,b)};
g.uf.prototype.F=function(a,b){var c=g.uf.V.F.call(this,a);if(c)if(!b&&g.vf(c))g.uf.prototype.remove.call(this,a);else return c};g.x(wf,Iaa);wf.prototype.Eb=function(){var a=0;g.cf(this.ad(!0),function(){a++});
return a};
wf.prototype.clear=function(){var a=Daa(this.ad(!0)),b=this;(0,g.B)(a,function(c){b.remove(c)})};g.x(g.zf,wf);g.h=g.zf.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Eb=function(){return this.C.length};
g.h.ad=function(a){var b=0,c=this.C,d=new $e;d.next=function(){if(b>=c.length)throw af;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.x(g.Af,g.zf);g.x(Df,wf);var Jaa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Cf=null;g.h=Df.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(Ef(a),b);Ff(this)};
g.h.get=function(a){a=this.C.getAttribute(Ef(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(Ef(a));Ff(this)};
g.h.Eb=function(){return Gf(this).attributes.length};
g.h.ad=function(a){var b=0,c=Gf(this).attributes,d=new $e;d.next=function(){if(b>=c.length)throw af;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){for(var a=Gf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ff(this)};g.x(Hf,wf);Hf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
Hf.prototype.get=function(a){return this.F.get(this.C+a)};
Hf.prototype.remove=function(a){this.F.remove(this.C+a)};
Hf.prototype.ad=function(a){var b=this.F.ad(!0),c=this,d=new $e;d.next=function(){for(var e=b.next();e.substr(0,c.C.length)!=c.C;)e=b.next();return a?e.substr(c.C.length):c.F.get(e)};
return d};g.Kf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.t("yt.config_",g.Kf,void 0);var Uf={};var Kaa=[];var Gca=g.u("ytPubsubPubsubInstance")||new g.of;g.of.prototype.subscribe=g.of.prototype.subscribe;g.of.prototype.unsubscribeByKey=g.of.prototype.od;g.of.prototype.publish=g.of.prototype.oa;g.of.prototype.clear=g.of.prototype.clear;g.t("ytPubsubPubsubInstance",Gca,void 0);var cg=g.u("ytPubsubPubsubSubscribedKeys")||{};g.t("ytPubsubPubsubSubscribedKeys",cg,void 0);var eg=g.u("ytPubsubPubsubTopicToKeys")||{};g.t("ytPubsubPubsubTopicToKeys",eg,void 0);var dg=g.u("ytPubsubPubsubIsSynchronous")||{};
g.t("ytPubsubPubsubIsSynchronous",dg,void 0);var Maa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Naa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;var Hca=0,Oaa=g.Yl?"webkit":g.Xl?"moz":g.Bf?"ms":g.Ul?"o":"",mg=g.u("ytDomDomGetNextId")||function(){return++Hca};
g.t("ytDomDomGetNextId",mg,void 0);var Paa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.pg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.pg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.pg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var tg=g.u("ytEventsEventsListeners")||{};g.t("ytEventsEventsListeners",tg,void 0);var vg=g.u("ytEventsEventsCounter")||{count:0};g.t("ytEventsEventsCounter",vg,void 0);var wg=g.Oa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.tm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.um="Microsoft Internet Explorer"==navigator.appName;g.x(g.Ag,g.C);g.Ag.prototype.Y=function(a){this.C=new g.$c(g.rg(a),g.sg(a))};
g.Ag.prototype.N=function(){if(this.C){var a=g.tm();if(0!=this.D){var b=g.bd(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.Qb();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.Ag.prototype.X=function(){g.ag(this.M);g.xg(this.J)};g.n(Gg,Qaa);Gg.prototype.start=function(){var a=g.u("yt.scheduler.instance.start");a&&a()};
Gg.prototype.pause=function(){var a=g.u("yt.scheduler.instance.pause");a&&a()};
g.va(Gg);Gg.getInstance();var Lg={};var vm;vm=window;g.Yg=vm.ytcsi&&vm.ytcsi.now?vm.ytcsi.now:vm.performance&&vm.performance.timing&&vm.performance.now&&vm.performance.timing.navigationStart?function(){return vm.performance.timing.navigationStart+vm.performance.now()}:function(){return(new Date).getTime()};var Raa,dh,eh,ch,Pg,Xg,Sg;Raa=g.Qf("initial_gel_batch_timeout",1E3);dh=Math.pow(2,16)-1;g.hh=10;eh=null;ch=0;Pg=void 0;g.Ng=0;g.Og=0;g.gh=0;Xg=!0;Sg=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.t("ytLoggingTransportLogPayloadsQueue_",Sg,void 0);g.Rg=g.u("ytLoggingTransportGELQueue_")||new Map;g.t("ytLoggingTransportGELQueue_",g.Rg,void 0);var ah=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};g.t("ytLoggingTransportTokensToCttTargetIds_",ah,void 0);var fh=g.u("ytLoggingGelSequenceIdObj_")||{};g.t("ytLoggingGelSequenceIdObj_",fh,void 0);g.sh=new function(){var a=window.document;this.C=window;this.F=a};
g.t("yt.ads_.signals_.getAdSignalsString",function(a){return g.kh(vh(a))},void 0);(0,g.Yc)();var xh=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Ah,Waa,Fh;Ah={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Waa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Fh=!1;g.wm=Gh;g.Rh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.Yc)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.lf(b))}catch(f){return}else e=escape(b);g.Oh(a,e,c,this.F)};
g.Rh.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Ph(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.Rh.prototype.remove=function(a){this.C&&this.C.remove(a);g.Qh(a,"/",this.F)};var Sh=new g.Rh("yt.innertube");g.n(g.Vh,Error);g.Wh.prototype.isReady=function(){!this.C&&Kh()&&(this.C=g.$g());return!!this.C};var bi=new Set,$h=0;g.ci.prototype.initialize=function(a,b,c,d,e,f){var k=this;f=void 0===f?!1:f;b?(this.F=!0,g.jg(b,function(){k.F=!1;window.botguard?di(k,c,d,f):(g.kg(b),g.Zh(new g.Vh("Unable to load Botguard","from "+b)))})):a&&(eval(a),window.botguard?di(this,c,d,f):g.Zh(Error("Unable to load Botguard from JS")))};
g.ci.prototype.Nd=function(){return!!this.C};
g.ci.prototype.dispose=function(){this.C=null};g.fi=new g.ci;gi.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.Ce(a)?a:g.ii(a)):2===this.F&&b?(a=b.call(c,this.C),g.Ce(a)?a:g.hi(a)):this};
gi.prototype.getValue=function(){return this.C};
g.Be(gi);g.n(ji,g.C);ji.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
ji.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.callback)}g.C.prototype.X.call(this)};ki.prototype.clone=function(){var a=new ki,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.wa(c)?a[b]=g.Wa(c):a[b]=c}return a};var mi=(0,g.Yc)().toString();var oi=g.u("ytLoggingDocDocumentNonce_")||ni();g.t("ytLoggingDocDocumentNonce_",oi,void 0);g.qi.prototype.toString=function(){return JSON.stringify(g.ri(this))};g.t("yt_logging_screen.getRootVeType",ui,void 0);g.t("yt_logging_screen.getCurrentCsn",g.xi,void 0);g.t("yt_logging_screen.getCttAuthInfo",g.yi,void 0);g.t("yt_logging_screen.setCurrentScreen",g.zi,void 0);g.Bi.prototype.toString=function(){return this.topic};var Ica=g.u("ytPubsub2Pubsub2Instance")||new g.of;g.of.prototype.subscribe=g.of.prototype.subscribe;g.of.prototype.unsubscribeByKey=g.of.prototype.od;g.of.prototype.publish=g.of.prototype.oa;g.of.prototype.clear=g.of.prototype.clear;g.t("ytPubsub2Pubsub2Instance",Ica,void 0);var Ei=g.u("ytPubsub2Pubsub2SubscribedKeys")||{};g.t("ytPubsub2Pubsub2SubscribedKeys",Ei,void 0);var Gi=g.u("ytPubsub2Pubsub2TopicToKeys")||{};g.t("ytPubsub2Pubsub2TopicToKeys",Gi,void 0);
var Fi=g.u("ytPubsub2Pubsub2IsAsync")||{};g.t("ytPubsub2Pubsub2IsAsync",Fi,void 0);g.t("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.n(Ji,g.Ai);var gba=new g.Bi("screen-created",Ji),Ki=[],Li=0;var Ri,Pi;Ri=0;g.Qi=null;Pi=null;g.h=g.Ti.prototype;g.h.rG=function(){this.Nd()||this.init()};
g.h.enable=function(){this.C=1;(0,g.B)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.rG,this),this.subscribe("dispose-"+a,this.dispose,this),g.F("PAGE_NAME")==a&&g.Xi(this))},this)};
g.h.init=function(){g.Eg(this.F);this.C=2;this.L&&this.L()};
g.h.Nd=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Eg(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Vf(a)}};
g.h.subscribe=function(a,b,c){a=g.fg(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.gg(this.G);this.G=[]};var Yi=g.u("yt.modules.registry_")||{};g.t("yt.modules.registry_",Yi,void 0);g.aj=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.t("yt.msgs_",g.aj,void 0);var gj={},kba=0;var lba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.n(uj,g.C);g.h=uj.prototype;g.h.getId=function(){return this.ha};
g.h.loadNewVideoConfig=function(a){if(!this.qb()){this.aa&&(g.$f(this.aa),this.aa=0);this.ob=a=g.li(a);this.C=a.clone();sj(this);this.ra||(this.ra=Dj(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Dd(this.L,Number(a)||a);if(a=this.C.attrs.height)this.L.style.height=g.Cd(Number(a)||a,!0);tj(this);this.N&&vj(this)}};
g.h.wv=function(){return this.ob};
g.h.uz=function(){return this.N};
g.h.Lh=function(a,b){var c=this,d=Dj(this,b);if(d){if(!g.Ha(this.Pd,a)&&!this.G[a]){var e=nba(this,a);this.M&&this.M(a,e)}this.Y.subscribe(a,d);"onReady"==a&&this.N&&g.Yf(function(){d(c.api)},0)}};
g.h.gG=function(a,b){if(!this.qb()){var c=Dj(this,b);c&&g.pf(this.Y,a,c)}};
g.h.Qt=function(a){g.H("a11y-announce",a)};
g.h.xD=function(a){g.H("WATCH_LATER_VIDEO_ADDED",a)};
g.h.yD=function(a){g.H("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Gv=function(){return this.la||(wj(this)?"html5":null)};
g.h.Av=function(){return this.lb};
g.h.cancel=function(){if(this.J){var a=xj(this),b=this.J;a=g.ig(a);spf.script.ignore(a,b)}g.$f(this.tb);this.T=!1};
g.h.X=function(){Aj(this);if(this.H&&this.C&&this.H.destroy)try{this.H.destroy()}catch(b){g.Vf(b)}this.jb=null;for(var a in this.G)g.q[this.G[a]]=null;this.ob=this.C=this.api=null;delete this.Za;delete this.L;g.C.prototype.X.call(this)};g.Fj={};g.Ej="player_uid_"+(1E9*Math.random()>>>0);var Mj=null;g.xm=window.performance&&window.performance.memory;g.nl={};g.n(Nj,g.Ai);g.n(Oj,g.Ai);var rba=new g.Bi("aft-recorded",Nj),Aba=new g.Bi("timing-sent",Oj);var ym=window,Rj=ym.performance||ym.mozPerformance||ym.msPerformance||ym.webkitPerformance||new qba;var ck=!1,xk={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},
vba=(0,g.v)(Rj.clearResourceTimings||Rj.webkitClearResourceTimings||Rj.mozClearResourceTimings||Rj.msClearResourceTimings||Rj.oClearResourceTimings||g.ua,Rj);var jk=g.u("ytLoggingLatencyUsageStats_")||{};g.t("ytLoggingLatencyUsageStats_",jk,void 0);hk.prototype.tick=function(a,b,c){kk(this,"tick_"+a+"_"+b)||g.Xh("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
hk.prototype.info=function(a,b){var c=Object.keys(a).join("");kk(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,g.Xh("latencyActionInfo",c))};
hk.prototype.span=function(a,b){var c=Object.keys(a).join("");kk(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,g.Xh("latencyActionSpan",a))};var zm={},yk=(zm.ad_to_ad="LATENCY_ACTION_AD_TO_AD",zm.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",zm.app_startup="LATENCY_ACTION_APP_STARTUP",zm["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",zm["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",zm["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",zm.browse="LATENCY_ACTION_BROWSE",zm.channels="LATENCY_ACTION_CHANNELS",zm.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",zm["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
zm["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",zm["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",zm["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",zm["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",zm["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",zm["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",zm["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",zm["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
zm["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",zm.chips="LATENCY_ACTION_CHIPS",zm["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",zm["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",zm.embed="LATENCY_ACTION_EMBED",zm.home="LATENCY_ACTION_HOME",zm.library="LATENCY_ACTION_LIBRARY",zm.live="LATENCY_ACTION_LIVE",zm.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",zm.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",zm.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",zm.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",zm["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",zm["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",zm.prebuffer="LATENCY_ACTION_PREBUFFER",zm.prefetch="LATENCY_ACTION_PREFETCH",zm.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",zm.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",zm.results="LATENCY_ACTION_RESULTS",zm.search_ui="LATENCY_ACTION_SEARCH_UI",zm.search_zero_state=
"LATENCY_ACTION_SEARCH_ZERO_STATE",zm.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",zm.settings="LATENCY_ACTION_SETTINGS",zm.tenx="LATENCY_ACTION_TENX",zm.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",zm.watch="LATENCY_ACTION_WATCH",zm.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",zm["watch,watch7"]="LATENCY_ACTION_WATCH",zm["watch,watch7_html5"]="LATENCY_ACTION_WATCH",zm["watch,watch7ad"]="LATENCY_ACTION_WATCH",zm["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",zm.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",
zm.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",zm["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",zm["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",zm["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",zm["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",zm["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",zm["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",zm["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
zm.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",zm.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",zm),Am={},ok=(Am.ad_allowed="adTypesAllowed",Am.yt_abt="adBreakType",Am.ad_cpn="adClientPlaybackNonce",Am.ad_docid="adVideoId",Am.yt_ad_an="adNetworks",Am.ad_at="adType",Am.browse_id="browseId",Am.p="httpProtocol",Am.t="transportProtocol",Am.cpn="clientPlaybackNonce",Am.ccs="creatorInfo.creatorCanaryState",Am.cseg="creatorInfo.creatorSegment",Am.csn="clientScreenNonce",
Am.docid="videoId",Am.GetHome_rid="requestIds",Am.GetSearch_rid="requestIds",Am.GetPlayer_rid="requestIds",Am.GetWatchNext_rid="requestIds",Am.GetBrowse_rid="requestIds",Am.GetLibrary_rid="requestIds",Am.is_continuation="isContinuation",Am.is_nav="isNavigation",Am.b_p="kabukiInfo.browseParams",Am.is_prefetch="kabukiInfo.isPrefetch",Am.is_secondary_nav="kabukiInfo.isSecondaryNav",Am.prev_browse_id="kabukiInfo.prevBrowseId",Am.query_source="kabukiInfo.querySource",Am.voz_type="kabukiInfo.vozType",Am.yt_lt=
"loadType",Am.mver="creatorInfo.measurementVersion",Am.yt_ad="isMonetized",Am.nr="webInfo.navigationReason",Am.nrsu="navigationRequestedSameUrl",Am.ncnp="webInfo.nonPreloadedNodeCount",Am.pnt="performanceNavigationTiming",Am.prt="playbackRequiresTap",Am.plt="playerInfo.playbackType",Am.pis="playerInfo.playerInitializedState",Am.paused="playerInfo.isPausedOnLoad",Am.yt_pt="playerType",Am.fmt="playerInfo.itag",Am.yt_pl="watchInfo.isPlaylist",Am.yt_pre="playerInfo.preloadType",Am.yt_ad_pr="prerollAllowed",
Am.pa="previousAction",Am.yt_red="isRedSubscriber",Am.rce="mwebInfo.responseContentEncoding",Am.scrh="screenHeight",Am.scrw="screenWidth",Am.st="serverTimeMs",Am.aq="tvInfo.appQuality",Am.br_trs="tvInfo.bedrockTriggerState",Am.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Am.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Am.label="tvInfo.label",Am.is_mdx="tvInfo.isMdx",Am.preloaded="tvInfo.isPreloaded",Am.upg_player_vis="playerInfo.visibilityState",Am.query="unpluggedInfo.query",Am.upg_chip_ids_string=
"unpluggedInfo.upgChipIdsString",Am.yt_vst="videoStreamType",Am.vph="viewportHeight",Am.vpw="viewportWidth",Am.yt_vis="isVisible",Am.rcl="mwebInfo.responseContentLength",Am.GetSettings_rid="requestIds",Am.GetTrending_rid="requestIds",Am.GetMusicSearchSuggestions_rid="requestIds",Am.REQUEST_ID="requestIds",Am),tba="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Em={},pk=(Em.ccs="CANARY_STATE_",Em.mver="MEASUREMENT_VERSION_",Em.pis="PLAYER_INITIALIZED_STATE_",Em.yt_pt="LATENCY_PLAYER_",Em.pa="LATENCY_ACTION_",Em.yt_vst="VIDEO_STREAM_TYPE_",Em),uba="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");if(g.Pf("overwrite_polyfill_on_logging_lib_loaded")){var Fm=window;Fm.ytcsi&&(Fm.ytcsi.info=tk,Fm.ytcsi.tick=g.uk)};var Ok=0,Kk=[],Nk=[],Gk=0,Lk={},Mk={},Hk=new g.Xe(Hba,1E3);var Qk=["server_prefetched_vast","vmap"];var Sk;var Wk=null,Zk=[];var cl,tl,sl,el,dl,Oba,Rba,Pba,Qba,ol;el=0;dl=0;Oba=[900,60,"waiting"];Rba=[500,99,"waiting"];Pba=[300,60,"waiting"];Qba=[400,99,"waiting"];ol=[300,101,"done"];var Al=!1;window.yt=window.yt||{};g.t("yt.setConfig",g.Lf,void 0);g.t("yt.pushConfigArray",Mf,void 0);g.t("yt.getConfig",g.F,void 0);g.t("yt.config.set",g.Lf,void 0);g.t("yt.config.pushArray",Mf,void 0);g.t("yt.config.get",g.F,void 0);g.t("yt.hasMsg",g.cj,void 0);g.t("yt.setMsg",bj,void 0);g.t("yt.setGoogMsg",dj,void 0);g.t("yt.msgs.has",g.cj,void 0);g.t("yt.msgs.set",bj,void 0);g.t("yt.msgs.setGoog",dj,void 0);g.t("yt.pubsub.publish",g.H,void 0);g.t("yt.pubsub.subscribe",g.fg,void 0);
g.t("ytcsi.tick",g.uk,void 0);g.x(Dl,g.Ti);
Dl.prototype.enable=function(){window.onload=Mba;window.onunload=Nba;window.onerror=kca;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",al),window.addEventListener("spfhistory",bl),window.addEventListener("spfrequest",gl),window.addEventListener("spfpartprocess",jl),window.addEventListener("spfpartdone",kl),window.addEventListener("spfprocess",ll),window.addEventListener("spfdone",pl),window.addEventListener("spferror",ql),window.addEventListener("spfreload",
rl),window.addEventListener("spfjsbeforeunload",El)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",Tba),this.subscribe("dispose",Uba)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Dl.prototype.init=function(){Dl.V.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.F("PAGEFRAME_JS")){var b=g.F("PAGEFRAME_JS",void 0);var c=function(){var e=g.u("ytbin.www.pageframe.setup");e&&(window.ytPageFrameLoaded=!0,e())}}else a&&(a=g.u("yt.www.masthead.loadSearchbox"))&&a();
a=g.F("JS_COMMON_MODULE");var d=g.F("JS_PAGE_MODULES");d||(d=[a]);a=g.F("JS_DELAY_LOAD",0);0<a?(g.$f(this.D),this.D=g.Yf(function(){b&&g.jg(b,c);spf.script.require(d)},a)):(b&&g.jg(b,c),spf.script.require(d));
g.t("yt.abuse.player.botguardInitialized",cba,void 0);g.t("yt.abuse.player.invokeBotguard",dba,void 0);g.t("yt.abuse.dclkstatus.checkDclkStatus",bba,void 0);g.t("yt.player.exports.navigate",g.qj,void 0);g.t("yt.util.activity.init",g.Kg,void 0);g.t("yt.util.activity.getTimeSinceActive",g.Mg,void 0);g.t("yt.util.activity.setTimestamp",g.Ig,void 0);Vk(g.u("ytplayer.config"));g.u("ytspf.enabled")&&Kba();zba();g.F("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.Pf("service_worker_enabled")?jca():hca())};
Dl.prototype.dispose=function(){g.$f(this.D);var a=g.u("ytbin.www.pageframe.cancelSetup");a&&a();g.ag(Sk);if(a=g.Uk())a.removeEventListener("onReady",Tk),a.removeEventListener("onStateChange",Tk);Vj(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.G(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.zg(a);Dl.V.dispose.call(this)};
Dl.prototype.disable=function(){Dl.V.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",al),window.removeEventListener("spfhistory",bl),window.removeEventListener("spfrequest",gl),window.removeEventListener("spfpartprocess",jl),window.removeEventListener("spfpartdone",kl),window.removeEventListener("spfprocess",ll),window.removeEventListener("spfdone",pl),window.removeEventListener("spferror",ql),window.removeEventListener("spfreload",rl),window.removeEventListener("spfjsbeforeunload",
El));window.onload=null;window.onunload=null;window.onerror=null};
g.$i(new Dl);})(_yt_www);


}
/*
     FILE ARCHIVED ON 01:50:14 Jun 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:56:40 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 166.63
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.059
  cdx.remote: 0.056
  esindex: 0.009
  LoadShardBlock: 96.376 (3)
  PetaboxLoader3.datanode: 140.536 (5)
  PetaboxLoader3.resolve: 165.225 (3)
  load_resource: 273.0 (2)
*/