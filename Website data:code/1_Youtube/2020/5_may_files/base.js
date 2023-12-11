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
var ca,aaa,da,ha,ia,pa,ra,sa,ta,ua,eaa,faa,gaa,haa,zb,Tb,Ub,Bc,maa,Fc,naa,Kc,Rc,Sc,Tc,ad,bd,paa,raa,Pd,saa,taa,Qd,Sd,uaa,waa,$d,be,ce,ge,xaa,je,qe,pe,zaa,te,ue,ve,we,Baa,ye,ze,De,Caa,Ee,Le,Te,Re,Oe,Eaa,We,Ue,Ve,Ze,Daa,Faa,df,ef,kf,Gaa,Haa,Iaa,qf,sf,Kaa,xf,zf,Af,Laa,Df,If,Jf,Kf,Lf,Mf,Of,Rf,Sf,Wf,Tf,Oaa,ag,Paa,gg,vg,Uaa,Taa,Ng,Xaa,ah,aba,qh,lh,vh,Fh,Ih,Ph,bba,cba,eba,Vh,fba,Wh,Xh,gba,bi,$h,Yh,hba,di,ei,fi,gi,iba,ni,oi,vi,yi,jba,kba,lba,Bi,Ei,Fi,Ii,Ni,Oi,Pi,Ri,mba,pba,$i,gj,nba,lj,tj,wj,yj,qba,Aj,rba,
Fj,Ej,Hj,Dj,Gj,Pj,Nj,Qj,Tj,Oj,Rj,Uj,uba,Xj,Mj,Yj,vba,Vj,Wj,Sj,wba,ek,xba,ik,jk,yba,lk,ok,pk,nk,qk,rk,sk,uk,vk,kk,wk,tk,yk,Aba,zk,Bk,Ak,Ck,Dk,Fk,Gk,Ik,Lk,Hk,Mk,Nk,Qk,Pk,Tk,Uk,Iba,Zk,Vk,Wk,Fba,$k,Gba,Hba,Oba,Nba,Mba,dl,Lba,Jba,Kba,Pba,Qba,Rba,Sba,pl,nl,rl,Tba,sl,ul,Uba,Vba,vl,wl,Bl,Fl,Gl,Hl,Ll,Ml,Nl,aca,bca,Cl,El,Al,$ba,Dl,Rl,Tl,Ql,cca,Ul,Sl,dca,hca,eca,kca,gca,fca,ica,jca,mca,Xl,lca,Vl,nca,pca,rca,qca,oca,Yl,Zl,$l,fa,ea,caa,va,Fa,daa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
aaa=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};
da=function(){da=function(){};
ea.Symbol||(ea.Symbol=baa)};
ha=function(a,b){this.C=a;fa(this,"description",{configurable:!0,writable:!0,value:b})};
g.ja=function(){da();var a=ea.Symbol.iterator;a||(a=ea.Symbol.iterator=ea.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&fa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(ca(this))}});
g.ja=function(){}};
ia=function(a){g.ja();a={next:a};a[ea.Symbol.iterator]=function(){return this};
return a};
g.ka=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
g.la=function(a){if(!(a instanceof Array)){a=g.ka(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
g.n=function(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype};
pa=function(a,b){if(b){for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&fa(c,d,{configurable:!0,writable:!0,value:f})}};
ra=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
sa=function(a,b){g.ja();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.t=function(a,b,c){a=a.split(".");c=c||g.q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
g.wa=function(a){if(a&&a!=g.q)return ua(a.document);null===va&&(va=ua(g.q.document));return va};
ua=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&caa.test(a)?a:""};
g.u=function(a,b){for(var c=a.split("."),d=b||g.q,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.xa=function(){};
g.ya=function(a){a.Cc=void 0;a.getInstance=function(){return a.Cc?a.Cc:a.Cc=new a}};
g.za=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Aa=function(a){return"array"==g.za(a)};
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
gaa=function(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;var d=b?c.index:a.length;try{return{Vt:a.slice(0,d)+"&act=1"+a.slice(d),Tu:decodeURIComponent(c[1])}}catch(f){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;d="";if(b){var e=a.indexOf("&adurl=");0<e&&(c=a.slice(0,e),d=a.slice(e))}return{Vt:c+"&act=1"+d,Tu:c+"&dct=1"+d}}return null};
g.Ha=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
haa=function(a){var b=a.url,c=a.pR;this.H=!!a.tH;this.F=gaa(b,c);a=/[?&]dsh=1(&|$)/.test(b);this.D=!a&&/[?&]ae=1(&|$)/.test(b);this.G=!a&&/[?&]ae=2(&|$)/.test(b);this.C=/[?&]adurl=([^&]*)/.exec(b)};
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
g.wb=function(a,b){if(b)a=a.replace(qb,"&amp;").replace(rb,"&lt;").replace(sb,"&gt;").replace(tb,"&quot;").replace(ub,"&#39;").replace(vb,"&#0;");else{if(!iaa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(rb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(tb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ub,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(vb,"&#0;"))}return a};
g.xb=function(a,b){return-1!=a.indexOf(b)};
g.Ab=function(a,b){for(var c=0,d=(0,g.yb)(String(a)).split("."),e=(0,g.yb)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=zb(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||zb(0==l[2].length,0==m[2].length)||zb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
zb=function(a,b){return a<b?-1:a>b?1:0};
g.Db=function(a,b){this.F=a===Bb&&b||"";this.D=Cb};
g.Eb=function(a){if(a instanceof g.Db&&a.constructor===g.Db&&a.D===Cb)return a.F;g.za(a);return"type_error:SafeUrl"};
g.Gb=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(jaa);b=b&&kaa.test(b[1]);return g.Fb(b?a:"about:invalid#zClosurez")};
g.Ib=function(a){if(a instanceof g.Db)return a;a="object"==typeof a&&a.Ld?a.Tc():String(a);Hb.test(a)||(a="about:invalid#zClosurez");return g.Fb(a)};
g.Jb=function(a,b){if(a instanceof g.Db)return a;a="object"==typeof a&&a.Ld?a.Tc():String(a);if(b&&/^data:/i.test(a)){var c=g.Gb(a);if(c.Tc()==a)return c}Hb.test(a)||(a="about:invalid#zClosurez");return g.Fb(a)};
g.Fb=function(a){return new g.Db(Bb,a)};
g.Lb=function(){this.C="";this.F=g.Kb};
g.Mb=function(a){var b=new g.Lb;b.C=a;return b};
g.Ob=function(){this.C="";this.F=g.Nb};
g.Pb=function(a){var b=new g.Ob;b.C=a;return b};
g.Rb=function(a){return g.xb(g.Qb,a)};
g.Sb=function(){return g.Rb("Trident")||g.Rb("MSIE")};
Tb=function(){return g.Rb("Firefox")||g.Rb("FxiOS")};
g.Vb=function(){return g.Rb("Safari")&&!(Ub()||g.Rb("Coast")||g.Rb("Opera")||g.Rb("Edge")||g.Rb("Edg/")||g.Rb("OPR")||Tb()||g.Rb("Silk")||g.Rb("Android"))};
Ub=function(){return(g.Rb("Chrome")||g.Rb("CriOS"))&&!g.Rb("Edge")};
g.Wb=function(){return g.Rb("Android")&&!(Ub()||Tb()||g.Rb("Opera")||g.Rb("Silk"))};
g.Yb=function(){this.F="";this.G=Xb;this.D=null};
g.$b=function(a){return g.Zb(a).toString()};
g.Zb=function(a){if(a instanceof g.Yb&&a.constructor===g.Yb&&a.G===Xb)return a.F;g.za(a);return"type_error:SafeHtml"};
g.bc=function(a){if(a instanceof g.Yb)return a;var b="object"==typeof a,c=null;b&&a.Tk&&(c=a.C());return g.ac(g.wb(b&&a.Ld?a.Tc():String(a)),c)};
g.ac=function(a,b){return g.cc(a,b)};
g.cc=function(a,b){var c=new g.Yb;c.F=a;c.D=b;return c};
g.dc=function(a,b){var c=b instanceof g.Db?b:g.Jb(b);a.href=g.Eb(c)};
g.ec=function(a,b){a.src=g.lb(b).toString()};
g.fc=function(a,b){var c=b instanceof g.Db?b:g.Jb(b);a.href=g.Eb(c)};
g.gc=function(a){return encodeURIComponent(String(a))};
g.hc=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.ic=function(a){return a=g.wb(a,void 0)};
g.kc=function(a,b,c){a=void 0!==c?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return(0,g.jc)("0",Math.max(0,b-c))+a};
g.lc=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.mc=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.nc=function(a){return a?decodeURI(a):a};
g.pc=function(a,b){return b.match(g.oc)[a]||null};
g.qc=function(a){return g.nc(g.pc(3,a))};
g.rc=function(a){a=a.match(g.oc);return g.mc(null,null,null,null,a[5],a[6],a[7])};
g.sc=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.tc=function(a,b){return b?a?a+"&"+b:b:a};
g.uc=function(a,b){if(!b)return a;var c=g.sc(a);c[1]=g.tc(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.vc=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)g.vc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.gc(b)))};
g.wc=function(a){var b=[],c;for(c in a)g.vc(c,a[c],b);return b.join("&")};
g.xc=function(a,b){var c=g.wc(b);return g.uc(a,c)};
g.yc=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.Ac=function(a,b){var c=a.search(g.zc),d=g.yc(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.hc(a.substr(d,e-d))};
Bc=function(){return g.Rb("iPhone")&&!g.Rb("iPod")&&!g.Rb("iPad")};
g.Cc=function(){return Bc()||g.Rb("iPad")||g.Rb("iPod")};
g.Dc=function(a){g.Dc[" "](a);return a};
g.Ec=function(a,b){try{return g.Dc(a[b]),!0}catch(c){}return!1};
maa=function(a,b){var c=laa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Fc=function(){var a=g.q.document;return a?a.documentMode:void 0};
g.Hc=function(a){return maa(a,function(){return 0<=g.Ab(g.Gc,a)})};
g.Jc=function(a){return Number(g.Ic)>=a};
g.Mc=function(a,b){g.Ca(a);void 0===b&&(b=0);Kc();for(var c=Lc[b],d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,p=m?a[e+2]:0,r=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|p>>6;p&=63;m||(p=64,k||(l=64));d.push(c[r],c[f],c[l]||"",c[p]||"")}return d.join("")};
naa=function(){var a=65.25;a%3?a=Math.floor(a):g.xb("=.","k")&&(a=g.xb("=.","1")?a-2:a-1);var b=new Uint8Array(a),c=0;g.Nc("BPr83OIQ0ehMqbAUQWSaFHZOJeRvvXddR5EONgwwQcHR6FRe6G43LgD36pJq1IuGN10mmMv-V7IKSIZludF9G1k",function(d){b[c++]=d});
return b.subarray(0,c)};
g.Nc=function(a,b){function c(m){for(;d<a.length;){var p=a.charAt(d++),r=Oc[p];if(null!=r)return r;if(!g.pb(p))throw Error("Unknown base64 encoding at char: "+p);}return m}
Kc();for(var d=0;;){var e=c(-1),f=c(0),k=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=k&&(b(f<<4&240|k>>2),64!=l&&b(k<<6&192|l))}};
Kc=function(){if(!Oc){Oc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Lc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Oc[f]&&(Oc[f]=e)}}}};
g.Pc=function(a){this.C=0;this.F=a};
g.Qc=function(){};
Rc=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Aa(c))for(var d=0;d<c.length;d++)c[d]&&c[d].Yc();else c&&c.Yc()}};
Sc=function(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};
Tc=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Tc(d):d)}return b}if(g.Uc&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Tc(d):d);return b};
g.Wc=function(a){var b=g.u("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.q.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==
b&&(b=a.constructor&&a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:g.Vc(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})};
g.Vc=function(a){if(Xc[a])return Xc[a];a=String(a);if(!Xc[a]){var b=/function\s+([^\(]+)/m.exec(a);Xc[a]=b?b[1]:"[Anonymous]"}return Xc[a]};
g.Yc=function(a){this.C=a||{cookie:""}};
g.Zc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.yb)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.$c=function(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31};
g.dd=function(a,b,c){"number"===typeof a?(this.date=ad(a,b||0,c||1),bd(this,c||1)):g.Ea(a)?(this.date=ad(a.getFullYear(),a.getMonth(),a.getDate()),bd(this,a.getDate())):(this.date=new Date((0,g.cd)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),bd(this,a))};
ad=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
bd=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}};
g.ed=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
g.fd=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.gd=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.hd=function(a,b){this.width=a;this.height=b};
g.A=function(a){return g.id(document,a)};
g.id=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.jd=function(a){return g.id(document,a)};
g.ld=function(a,b){g.Ta(b,function(c,d){c&&"object"==typeof c&&c.Ld&&(c=c.Tc());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:kd.hasOwnProperty(d)?a.setAttribute(kd[d],c):g.nb(d,"aria-")||g.nb(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.nd=function(a){return g.md(a||window)};
g.md=function(a){a=a.document;a=g.od(a)?a.documentElement:a.body;return new g.hd(a.clientWidth,a.clientHeight)};
g.rd=function(a,b,c){return g.qd(document,arguments)};
g.qd=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.ic(d.name),'"');if(d.type){c.push(' type="',g.ic(d.type),'"');var e={};g.cb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=g.sd(a,c);d&&("string"===typeof d?c.className=d:Array.isArray(d)?c.className=d.join(" "):g.ld(c,d));2<b.length&&g.td(a,c,b,2);return c};
g.td=function(a,b,c,d){function e(k){k&&b.appendChild("string"===typeof k?a.createTextNode(k):k)}
for(;d<c.length;d++){var f=c[d];!g.Ca(f)||g.Ea(f)&&0<f.nodeType?e(f):(0,g.B)(paa(f)?g.Qa(f):f,e)}};
g.ud=function(a){return g.sd(document,a)};
g.sd=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.od=function(a){return"CSS1Compat"==a.compatMode};
g.vd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.wd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.xd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Ea(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Da(a))return"function"==typeof a.item}return!1};
g.yd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.Ad=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.Bd=function(a){var b=[];g.Ad(a,function(c){b.push(c)});
return b};
raa=function(){var a=g.ud("IFRAME"),b={};(0,g.B)(qaa(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
g.C=function(){this.Qc=this.Qc;this.xf=this.xf};
g.Ed=function(a,b){g.Cd(a,g.w(g.Dd,b))};
g.Cd=function(a,b){a.Qc?b():(a.xf||(a.xf=[]),a.xf.push(b))};
g.Dd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Fd=function(){this.C=function(a){return void 0===a?!1:a};
this.F=function(a){return void 0===a?0:a}};
g.Gd=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Hd=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Id=function(a,b){a.style.width=g.Hd(b,!0)};
g.Jd=function(a,b){return typeof a===b};
g.Ld=function(){var a=void 0===a?g.Kd:a;try{return a.history.length}catch(b){return 0}};
g.Md=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Ld();a.u_java=!!g.Kd.navigator&&!g.Jd(g.Kd.navigator.javaEnabled,"unknown")&&!!g.Kd.navigator.javaEnabled&&g.Kd.navigator.javaEnabled();g.Kd.screen&&(a.u_h=g.Kd.screen.height,a.u_w=g.Kd.screen.width,a.u_ah=g.Kd.screen.availHeight,a.u_aw=g.Kd.screen.availWidth,a.u_cd=g.Kd.screen.colorDepth);g.Kd.navigator&&g.Kd.navigator.plugins&&(a.u_nplug=g.Kd.navigator.plugins.length);g.Kd.navigator&&g.Kd.navigator.mimeTypes&&(a.u_nmime=g.Kd.navigator.mimeTypes.length)};
g.Nd=function(a,b){try{return(void 0===b?0:b)?(new g.hd(a.innerWidth,a.innerHeight)).round():g.nd(a).round()}catch(c){return new g.hd(-12245933,-12245933)}};
g.Od=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var f=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,k]};
Pd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");
if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
saa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;r=p=0}
function b(y){for(var z=k,D=0;64>D;D+=4)z[D/4]=y[D]<<24|y[D+1]<<16|y[D+2]<<8|y[D+3];for(D=16;80>D;D++)y=z[D-3]^z[D-8]^z[D-14]^z[D-16],z[D]=(y<<1|y>>>31)&4294967295;y=e[0];var O=e[1],T=e[2],qa=e[3],Ba=e[4];for(D=0;80>D;D++){if(40>D)if(20>D){var Ia=qa^O&(T^qa);var zd=1518500249}else Ia=O^T^qa,zd=1859775393;else 60>D?(Ia=O&T|qa&(O|T),zd=2400959708):(Ia=O^T^qa,zd=3395469782);Ia=((y<<5|y>>>27)&4294967295)+Ia+Ba+zd+z[D]&4294967295;Ba=qa;qa=T;T=(O<<30|O>>>2)&4294967295;O=y;y=Ia}e[0]=e[0]+y&4294967295;e[1]=
e[1]+O&4294967295;e[2]=e[2]+T&4294967295;e[3]=e[3]+qa&4294967295;e[4]=e[4]+Ba&4294967295}
function c(y,z){if("string"===typeof y){y=unescape(encodeURIComponent(y));for(var D=[],O=0,T=y.length;O<T;++O)D.push(y.charCodeAt(O));y=D}z||(z=y.length);D=0;if(0==p)for(;D+64<z;)b(y.slice(D,D+64)),D+=64,r+=64;for(;D<z;)if(f[p++]=y[D++],r++,64==p)for(p=0,b(f);D+64<z;)b(y.slice(D,D+64)),D+=64,r+=64}
function d(){var y=[],z=8*r;56>p?c(l,56-p):c(l,64-(p-56));for(var D=63;56<=D;D--)f[D]=z&255,z>>>=8;b(f);for(D=z=0;5>D;D++)for(var O=24;0<=O;O-=8)y[z++]=e[D]>>O&255;return y}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var p,r;a();return{reset:a,update:c,digest:d,Au:function(){for(var y=d(),z="",D=0;D<y.length;D++)z+="0123456789ABCDEF".charAt(Math.floor(y[D]/16))+"0123456789ABCDEF".charAt(y[D]%16);return z}}};
taa=function(a,b,c){var d=[],e=[];if(1==(g.Aa(c)?2:1))return e=[b,a],(0,g.B)(d,function(l){e.push(l)}),Qd(e.join(" "));
var f=[],k=[];(0,g.B)(c,function(l){k.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Na(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.B)(d,function(l){e.push(l)});
a=Qd(e.join(" "));a=[c,a];g.Na(k)||a.push(k.join(""));return a.join("_")};
Qd=function(a){var b=saa();b.update(a);return b.Au().toLowerCase()};
g.Rd=function(a){var b=Pd(String(g.q.location.href)),c;(c=g.q.__SAPISID||g.q.__APISID||g.q.__OVERRIDE_SID)?c=!0:(c=new g.Yc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.q.__SAPISID:g.q.__APISID,c||(c=new g.Yc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(g.q.location.href);return d&&c&&b?[b,taa(Pd(d),c,a||
null)].join(" "):null}return null};
Sd=function(){this.C=[];this.F=-1};
uaa=function(a){-1==a.F&&(a.F=(0,g.Td)(a.C,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.F};
g.Ud=function(){var a=new Sd;g.q.SVGElement&&g.q.document.createElementNS&&a.set(0);var b=raa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.q.crypto&&g.q.crypto.subtle&&a.set(3);g.q.TextDecoder&&g.q.TextEncoder&&a.set(4);return uaa(a)};
g.Vd=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
g.Wd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1};
g.Xd=function(a,b){g.Wd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.yc=null;a&&this.init(a,b)};
g.Zd=function(a){return!(!a||!a[Yd])};
waa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.bh=e;this.key=++vaa;this.mg=this.Rh=!1};
$d=function(a){a.mg=!0;a.listener=null;a.C=null;a.src=null;a.bh=null};
g.ae=function(a){this.src=a;this.listeners={};this.C=0};
be=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Pa(a.listeners[c],b);d&&($d(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
ce=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.mg&&f.listener==b&&f.capture==!!c&&f.bh==d)return e}return-1};
g.ee=function(a,b,c,d,e){if(d&&d.once)return g.de(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.ee(a,b[f],c,d,e);return null}c=g.fe(c);return g.Zd(a)?a.O(b,c,g.Ea(d)?!!d.capture:!!d,e):ge(a,b,c,!1,d,e)};
ge=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ea(e)?!!e.capture:!!e,l=g.he(a);l||(a[ie]=l=new g.ae(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=xaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)yaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(je(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ke++;return c};
xaa=function(){var a=zaa,b=le?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.de=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.de(a,b[f],c,d,e);return null}c=g.fe(c);return g.Zd(a)?a.Ae(b,c,g.Ea(d)?!!d.capture:!!d,e):ge(a,b,c,!0,d,e)};
g.me=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)g.me(a,b[f],c,d,e);else d=g.Ea(d)?!!d.capture:!!d,c=g.fe(c),g.Zd(a)?a.Va(b,c,d,e):a&&(a=g.he(a))&&(b=a.We(b,c,d,e))&&g.ne(b)};
g.ne=function(a){if("number"===typeof a||!a||a.mg)return!1;var b=a.src;if(g.Zd(b))return be(b.ud,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(je(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ke--;(c=g.he(b))?(be(c,a),0==c.C&&(c.src=null,b[ie]=null)):$d(a);return!0};
je=function(a){return a in oe?oe[a]:oe[a]="on"+a};
qe=function(a,b,c,d){var e=!0;if(a=g.he(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.mg&&(f=pe(f,d),e=e&&!1!==f)}return e};
pe=function(a,b){var c=a.listener,d=a.bh||a.src;a.Rh&&g.ne(a);return c.call(d,b)};
zaa=function(a,b){if(a.mg)return!0;if(!le){var c=b||g.u("window.event"),d=new g.Xd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=qe(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=qe(c[k],f,!1,d),e=e&&l}return e}return pe(a,new g.Xd(b,
this))};
g.he=function(a){a=a[ie];return a instanceof g.ae?a:null};
g.fe=function(a){if(g.Da(a))return a;a[re]||(a[re]=function(b){return a.handleEvent(b)});
return a[re]};
g.se=function(){g.C.call(this);this.ud=new g.ae(this);this.Jt=this;this.Ql=null};
te=function(a,b,c,d){b=a.ud.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.mg&&k.capture==c){var l=k.listener,m=k.bh||k.src;k.Rh&&be(a.ud,k);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
ue=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
ve=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
we=function(a){g.q.setTimeout(function(){throw a;},0)};
Baa=function(){var a=g.q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Rb("Presto")&&(a=function(){var e=g.ud("IFRAME");e.style.display="none";g.ec(e,g.mb(Aaa));document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(g.Zb(g.xe));e.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.v)(function(m){if(("*"==l||m.origin==
l)&&m.data==k)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&!g.Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.nn;c.nn=null;e()}};
return function(e){d.next={nn:e};d=d.next;b.port2.postMessage(0)}}return function(e){g.q.setTimeout(e,0)}};
ye=function(){this.F=this.C=null};
ze=function(){this.next=this.scope=this.lc=null};
De=function(a,b){Ae||Caa();Be||(Ae(),Be=!0);Ce.add(a,b)};
Caa=function(){if(g.q.Promise&&g.q.Promise.resolve){var a=g.q.Promise.resolve(void 0);Ae=function(){a.then(Ee)}}else Ae=function(){var b=Ee;
!g.Da(g.q.setImmediate)||g.q.Window&&g.q.Window.prototype&&!g.Rb("Edge")&&g.q.Window.prototype.setImmediate==g.q.setImmediate?(Fe||(Fe=Baa()),Fe(b)):g.q.setImmediate(b)}};
Ee=function(){for(var a;a=Ce.remove();){try{a.lc.call(a.scope)}catch(b){we(b)}ve(Ge,a)}Be=!1};
g.He=function(a){a.prototype.$goog_Thenable=!0};
g.Ie=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Ke=function(a,b){this.C=0;this.M=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.xa)try{var c=this;a.call(b,function(d){g.Je(c,2,d)},function(d){g.Je(c,3,d)})}catch(d){g.Je(this,3,d)}};
Le=function(){this.next=this.context=this.onRejected=this.D=this.C=null;this.F=!1};
g.Ne=function(a,b,c){var d=Me.get();d.D=a;d.onRejected=b;d.context=c;return d};
g.Pe=function(a,b,c){Oe(a,b,c,null)||De(g.w(b,a))};
g.Qe=function(a){return new g.Ke(function(b,c){var d=a.length,e=[];if(d)for(var f=function(p,r){d--;e[p]=r;0==d&&b(e)},k=function(p){c(p)},l=0,m;l<a.length;l++)m=a[l],g.Pe(m,g.w(f,l),k);
else b(e)})};
g.Se=function(a,b){return Re(a,null,b,void 0)};
Te=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.F||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Te(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Ue(c),Ve(c,e,3,b)))}a.D=null}else g.Je(a,3,b)};
g.Xe=function(a,b){a.F||2!=a.C&&3!=a.C||We(a);a.G?a.G.next=b:a.F=b;a.G=b};
Re=function(a,b,c,d){var e=g.Ne(null,null,null);e.C=new g.Ke(function(f,k){e.D=b?function(l){try{var m=b.call(d,l);f(m)}catch(p){k(p)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof g.Ye?k(l):f(m)}catch(p){k(p)}}:k});
e.C.D=a;g.Xe(a,e);return e.C};
g.Je=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Oe(c,a.Y,a.N,a)||(a.M=c,a.C=b,a.D=null,We(a),3!=b||c instanceof g.Ye||Daa(a,c)))};
Oe=function(a,b,c,d){if(a instanceof g.Ke)return g.Xe(a,g.Ne(b||g.xa,c||null,d)),!0;if(g.Ie(a))return a.then(b,c,d),!0;if(g.Ea(a))try{var e=a.then;if(g.Da(e))return Eaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Eaa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function k(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
We=function(a){a.L||(a.L=!0,De(a.J,a))};
Ue=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Ve=function(a,b,c,d){if(3==c&&b.onRejected&&!b.F)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Ze(b,c,d);else try{b.F?b.D.call(b.context):Ze(b,c,d)}catch(e){$e.call(null,e)}ve(Me,b)};
Ze=function(a,b,c){2==b?a.D.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Daa=function(a,b){a.H=!0;De(function(){a.H&&$e.call(null,b)})};
g.Ye=function(a){g.Ha.call(this,a)};
g.af=function(a,b,c){if(g.Da(a))c&&(a=(0,g.v)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.v)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.q.setTimeout(a,b||0)};
g.bf=function(a){g.q.clearTimeout(a)};
g.cf=function(a,b,c){g.C.call(this);this.C=a;this.D=b||0;this.F=c;this.Pb=(0,g.v)(this.zk,this)};
Faa=function(){this.F=-1};
df=function(){this.F=64;this.C=[];this.L=[];this.M=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
ef=function(a,b,c){c||(c=0);var d=a.M;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var p=1518500249}else f=c^k^l,p=1859775393;else 60>e?(f=c&k|l&(c|k),p=2400959708):
(f=c^k^l,p=3395469782);f=(b<<5|b>>>27)+f+m+p+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.ff=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
g.gf=function(a){return a.classList?a.classList:g.ff(a).match(/\S+/g)||[]};
g.E=function(a,b){return a.classList?a.classList.contains(b):g.Ma(g.gf(a),b)};
g.hf=function(){};
kf=function(a){if(a instanceof g.hf)return a;if("function"==typeof a.ad)return a.ad(!1);if(g.Ca(a)){var b=0,c=new g.hf;c.next=function(){for(;;){if(b>=a.length)throw g.jf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.lf=function(a,b,c){if(g.Ca(a))try{(0,g.B)(a,b,c)}catch(d){if(d!==g.jf)throw d;}else{a=kf(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.jf)throw d;}}};
Gaa=function(a){if(g.Ca(a))return g.Qa(a);a=kf(a);var b=[];g.lf(a,function(c){b.push(c)});
return b};
g.nf=function(a,b){this.F={};this.C=[];this.Ie=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.mf(this,a)};
Haa=function(a,b){return a===b};
g.pf=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.of(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.of(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.mf=function(a,b){if(b instanceof g.nf)for(var c=b.xc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.of=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.rf=function(a){var b=[];qf(new Iaa,a,b);return b.join("")};
Iaa=function(){};
qf=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),qf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),sf(d,c),c.push(":"),qf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":sf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
sf=function(a,b){b.push('"',a.replace(Jaa,function(c){var d=tf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),tf[c]=d);return d}),'"')};
g.uf=function(a){g.C.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.vf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ka(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.od(b)}};
Kaa=function(a,b,c){De(function(){a.apply(b,c)})};
g.wf=function(a){this.C=a};
xf=function(a){this.C=a};
zf=function(a){this.data=a};
Af=function(a){return void 0===a||a instanceof zf?a:new zf(a)};
g.Bf=function(a){this.C=a};
g.Cf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.cd)()||!!b&&b>(0,g.cd)()};
Laa=function(){};
Df=function(){};
g.Ef=function(a){this.C=a};
g.Ff=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
If=function(a,b){this.F=a;this.C=null;if(g.Gf&&!g.Jc(9)){Hf||(Hf=new g.nf);this.C=Hf.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),Hf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
Jf=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Maa[b]})};
Kf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
Lf=function(a){return a.C.XMLDocument.documentElement};
Mf=function(a,b){this.F=a;this.C=b+"::"};
g.Nf=function(a){var b=new g.Ff;return b.isAvailable()?a?new Mf(b,a):b:null};
Of=function(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])};
g.Qf=function(a){Of(g.Pf,arguments)};
Rf=function(a,b){var c=g.F(a,void 0);c?c.push(b):g.Qf(a,[b])};
g.F=function(a,b){return a in g.Pf?g.Pf[a]:b};
Sf=function(a){var b=g.Pf.EXPERIMENT_FLAGS;return b?b[a]:void 0};
g.Uf=function(a){a=Tf(a);return"string"===typeof a&&"false"===a?!1:!!a};
g.Vf=function(a,b){var c=Tf(a);return void 0===c&&void 0!==b?b:Number(c||0)};
Wf=function(a){a=Tf(a);return void 0!==a?String(a):""};
Tf=function(a){var b=g.F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.F("EXPERIMENT_FLAGS",{})[a]};
g.Xf=function(){var a=[],b=g.F("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=g.F("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a};
g.G=function(a,b){return a?a.dataset?a.dataset[g.Yf(b)]:a.getAttribute("data-"+b):null};
g.Yf=function(a){return Zf[a]||(Zf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
Oaa=function(a){Naa.forEach(function(b){return b(a)})};
ag=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.$f(b),Oaa(b)}}:a};
g.$f=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=g.F("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),g.Qf("ERRORS",b))};
g.bg=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=g.F("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),g.Qf("ERRORS",b))};
Paa=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,k=Sf("log_window_onerror_fraction");if(k&&Math.random()<k)f=!0;else{k=document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?k=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,k=a.message,b=a.filename,c=a.lineno,d=a.colno):(k="Unknown error",b="Unknown file",c=0),a=Error(k),a.name="UnhandledWindowError",e=a,e.message=k,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?g.$f(e):g.bg(e))};
g.cg=function(a,b){g.Da(a)&&(a=ag(a));return window.setTimeout(a,b)};
g.dg=function(a,b){g.Da(a)&&(a=ag(a));return window.setInterval(a,b)};
g.eg=function(a){window.clearTimeout(a)};
g.fg=function(a){window.clearInterval(a)};
g.kg=function(a,b,c){var d=gg();if(d){var e=d.subscribe(a,function(){var f=arguments;var k=function(){hg[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{ig[a]?k():g.cg(k,0)}catch(l){g.$f(l)}},c);
hg[e]=!0;jg[a]||(jg[a]=[]);jg[a].push(e);return e}return 0};
g.lg=function(a){var b=gg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete hg[c]}))};
g.H=function(a,b){var c=gg();return c?c.publish.apply(c,arguments):!1};
g.mg=function(a,b){ig[a]=!0;var c=gg();c=c?c.publish.apply(c,arguments):!1;ig[a]=!1;return c};
gg=function(){return g.u("ytPubsubPubsubInstance")};
g.qg=function(a,b){var c=g.pg(a);spf.script.load(a,c,b)};
g.rg=function(a){a=g.pg(a);spf.script.unload(a)};
g.pg=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Qaa,""),b=b.replace(Raa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.zg=function(){g.eg(g.sg);g.eg(g.tg);g.tg=0;ug&&ug.isReady()?(vg(g.wg),"log_event"in xg&&vg(Object.entries(xg.log_event)),g.wg.clear(),delete xg.log_event):g.yg()};
g.yg=function(){g.Uf("web_gel_timeout_cap")&&!g.tg&&(g.tg=g.cg(g.zg,6E4));g.eg(g.sg);var a=g.Vf("web_gel_debounce_ms",1E4);a=g.F("LOGGING_BATCH_TIMEOUT",g.Ag||a);g.Uf("shorten_initial_gel_batch_timeout")&&Bg&&(a=Saa);g.sg=g.cg(g.zg,a)};
vg=function(a){var b=ug,c=Math.round((0,g.Cg)());a=g.ka(a);for(var d=a.next();!d.done;d=a.next()){var e=g.ka(d.value);d=e.next().value;var f=e.next().value;e=g.ab(g.Dg(b));e.events=f;(f=Eg[d])&&Taa(e,d,f);delete Eg[d];Uaa(e,c);g.Fg(b,"log_event",e,{retry:!0,onSuccess:function(){Gg=Math.round((0,g.Cg)()-c)}});
Bg=!1}};
Uaa=function(a,b){a.requestTimeMs=String(b);g.Uf("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=g.F("EVENT_ID",void 0);if(c){var d=g.F("BATCH_CLIENT_COUNTER",void 0)||0;!d&&g.Uf("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Hg/2));d++;d>Hg&&(d=1);g.Qf("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Ig&&Gg&&g.Uf("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Ig,roundtripMs:String(Gg)});
Ig=c;Gg=0}};
Taa=function(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]};
g.Ug=function(){if(g.Uf("use_typescript_transport"))g.zg();else if(g.eg(g.Jg),g.eg(g.Kg),g.Kg=0,!g.Wa(g.Lg)){for(var a in g.Lg){var b=Mg[a];if(b&&b.isReady()){var c=void 0,d=a,e=Vaa[d],f=Math.round((0,g.Cg)());for(c in g.Lg[d]){var k=g.ab(g.Dg(b));k[e]=Ng(d,c);var l=Og[c];if(l)a:{var m=k,p=c;if(l.videoId)var r="VIDEO";else if(l.playlistId)r="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=
[{token:p,scope:r}]}delete Og[c];l=k;l.requestTimeMs=f;g.Uf("unsplit_gel_payloads_in_logs")&&(l.unsplitGelPayloadsInLogs=!0);if(r=g.F("EVENT_ID",void 0))m=g.F("BATCH_CLIENT_COUNTER",void 0)||0,!m&&g.Uf("web_client_counter_random_seed")&&(m=Math.floor(Math.random()*Pg/2)),m++,m>Pg&&(m=1),g.Qf("BATCH_CLIENT_COUNTER",m),r={serializedEventId:r,clientCounter:m},l.serializedClientEventId=r,Qg&&Rg&&g.Uf("log_gel_rtt_web")&&(l.previousBatchInfo={serializedClientEventId:Qg,roundtripMs:Rg}),Qg=r,Rg=0;g.Fg(b,
d,k,{retry:Waa.has(d),onSuccess:g.w(Xaa,(0,g.Cg)())})}delete g.Lg[a];Sg=!1}}g.Wa(g.Lg)||g.Tg()}};
g.Tg=function(){g.Uf("web_gel_timeout_cap")&&!g.Kg&&(g.Kg=g.cg(g.Ug,6E4));g.eg(g.Jg);var a=g.Vf("web_gel_debounce_ms",1E4);a=g.F("LOGGING_BATCH_TIMEOUT",g.Vg||a);g.Uf("shorten_initial_gel_batch_timeout")&&Sg&&(a=Yaa);g.Jg=g.cg(g.Ug,a)};
Ng=function(a,b){b=void 0===b?"":b;g.Lg[a]=g.Lg[a]||{};g.Lg[a][b]=g.Lg[a][b]||[];return g.Lg[a][b]};
Xaa=function(a){Rg=Math.round((0,g.Cg)()-a)};
g.Yg=function(a){var b=a.__yt_uid_key;b||(b=Xg(),a.__yt_uid_key=b);return b};
g.Zg=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Zaa+"VisibilityState";if(b in a)return a[b]};
g.$g=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in $aa||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}}catch(e){}};
ah=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.bh=function(a){void 0===a.C&&ah(a);return a.C};
g.ch=function(a){void 0===a.F&&ah(a);return a.F};
g.eh=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Va(dh,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,k=g.Ea(e[4])&&g.Ea(d)&&g.Za(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.I=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.eh(a,b,c,d);if(e)return e;e=++fh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(l){l=new g.$g(l);if(!g.yd(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new g.$g(l);
l.currentTarget=a;return c.call(a,l)};
k=ag(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),gh()||"boolean"===typeof d?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);dh[e]=[a,b,c,k,d];return e};
g.hh=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.B)(a,function(b){if(b in dh){var c=dh[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?gh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete dh[b]}}))};
g.ih=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.I(a,b,function(){g.hh(e);c.apply(a,arguments)},d)};
g.jh=function(a){for(var b in dh)dh[b][0]==a&&g.hh(b)};
g.kh=function(a){this.Pb=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.I(window,"mousemove",(0,g.v)(this.Y,this));this.N=g.dg((0,g.v)(this.M,this),25)};
aba=function(){};
g.mh=function(a,b){return lh(a,0,b)};
g.nh=function(a,b){return lh(a,1,b)};
g.ph=function(a){for(var b=0,c=a.length;b<c;b++)g.oh(a[b])};
qh=function(){};
g.rh=function(){return!!g.u("yt.scheduler.instance")};
lh=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.cg(a,c||0)};
g.oh=function(a){if(!isNaN(a)){var b=g.u("yt.scheduler.instance.cancelJob");b?b(a):g.eg(a)}};
g.wh=function(a){var b=void 0===a?{}:a;a=void 0===b.ly?!0:b.ly;b=void 0===b.UF?!1:b.UF;if(null==g.u("_lact",window)){var c=parseInt(g.F("LACT"),10);c=isFinite(c)?(0,g.cd)()-Math.max(c,0):-1;g.t("_lact",c,window);g.t("_fact",c,window);-1==c&&g.sh();g.I(document,"keydown",g.sh);g.I(document,"keyup",g.sh);g.I(document,"mousedown",g.sh);g.I(document,"mouseup",g.sh);a&&(b?g.I(window,"touchmove",function(){vh("touchmove",200)},{passive:!0}):(g.I(window,"resize",function(){vh("resize",200)}),g.I(window,
"scroll",function(){vh("scroll",200)})));
new g.kh(function(){vh("mouse",100)});
g.I(document,"touchstart",g.sh,{passive:!0});g.I(document,"touchend",g.sh,{passive:!0})}};
vh=function(a,b){xh[a]||(xh[a]=!0,g.nh(function(){g.sh();xh[a]=!1},b))};
g.sh=function(){null==g.u("_lact",window)&&g.wh();var a=(0,g.cd)();g.t("_lact",a,window);-1==g.u("_fact",window)&&g.t("_fact",a,window);(a=g.u("ytglobal.ytUtilActivityCallback_"))&&a()};
g.yh=function(){var a=g.u("_lact",window);return null==a?-1:Math.max((0,g.cd)()-a,0)};
g.Eh=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.Cg)());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.yh())};g.Uf("log_sequence_info_on_gel_web")&&d.Ee&&(a=e.context,b=d.Ee,zh[b]=b in zh?zh[b]+1:0,a.sequence={index:zh[b],groupKey:b},d.Nu&&delete zh[d.Ee]);d=d.Qf;g.Uf("use_typescript_transport")?(a="",d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Eg[d.token]=a,a=d.token),d=g.wg.get(a)||[],g.wg.set(a,d),d.push(e),
c&&(ug=new c),c=g.Vf("web_logging_max_batch")||100,e=(0,g.Cg)(),d.length>=c?g.zg():e-g.Ah>=g.Bh&&(g.yg(),g.Ah=e)):(d?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Og[d.token]=a,d=Ng("log_event",d.token)):d=Ng("log_event"),d.push(e),c&&(Mg.log_event=new c),c=g.Vf("web_logging_max_batch")||100,e=(0,g.Cg)(),d.length>=c?g.Ug():e-g.Ch>=g.Dh&&(g.Tg(),g.Ch=e))};
Fh=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=g.hc(e[0]||""),k=g.hc(e[1]||"");f in b?g.Aa(b[f])?g.Ra(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(m){if("q"!=e[0]){var l=Error("Error decoding URL component");l.params={key:e[0],value:e[1]};g.$f(l)}}}return b};
g.Gh=function(a){var b=[];g.Ta(a,function(c,d){var e=g.gc(d),f;g.Aa(c)?f=c:f=[c];(0,g.B)(f,function(k){""==k?b.push(e):b.push(e+"="+g.gc(k))})});
return b.join("&")};
g.Hh=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return Fh(a)};
g.Jh=function(a,b){return Ih(a,b||{},!0)};
g.Kh=function(a,b){return Ih(a,b||{},!1)};
Ih=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Hh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return g.xc(a,e)+d};
g.Lh=function(a){if(!b)var b=window.location.href;var c=g.pc(1,a),d=g.qc(a);c&&d?(a=a.match(g.oc),b=b.match(g.oc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.qc(b)==d&&(Number(g.pc(4,b))||null)==(Number(g.pc(4,a))||null):!0;return a};
Ph=function(a){var b=g.Mh;a=void 0===a?g.u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.Nh(b),g.Oh(b));b.ca_type="image";a&&(b.bid=a);return b};
g.Nh=function(a){var b={};b.dt=g.Qh;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Md(b);return b};
g.Oh=function(a){var b=g.Od(a.C),c=g.Nd(a.C.top),d={};return d.bc=g.Ud(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Vd(a.F),d.wgl=!!g.Kd.WebGLRenderingContext,d};
bba=function(){if(!Rh)return null;var a=Rh();return"open"in a?a:null};
g.Th=function(a){switch(g.Sh(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Sh=function(a){return a&&"status"in a?a.status:-1};
cba=function(a,b){b=void 0===b?{}:b;var c=g.Lh(a),d=g.Uf("web_ajax_ignore_global_headers_if_set"),e;for(e in Uh){var f=g.F(Uh[e]);!f||!c&&!Vh(a,e)||d&&void 0!==b[e]||(b[e]=f)}if(c||Vh(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Vh(a,"X-YouTube-Time-Zone"))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||Vh(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=g.Gh(Ph(void 0));
return b};
eba=function(a){var b=window.location.search,c=g.qc(a),d=g.nc(g.pc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.Hh(b),f={};(0,g.B)(dba,function(k){e[k]&&(f[k]=e[k])});
return g.Kh(a,f)};
Vh=function(a,b){var c=g.F("CORS_HEADER_WHITELIST")||{},d=g.qc(a);return d?(c=c[d])?g.Ma(c,b):!1:!0};
fba=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Wh(a,b);var d=Xh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&g.eg(f);var l=k.ok,m=function(p){p=p||{};var r=b.context||g.q;l?b.onSuccess&&b.onSuccess.call(r,p,k):b.onError&&b.onError.call(r,p,k);b.Xa&&b.Xa.call(r,p,k)};
"JSON"==(b.format||"JSON")&&(l||400<=k.status&&500>k.status)?k.json().then(m,function(){m(null)}):m(null)}});
b.oq&&0<b.timeout&&(f=g.cg(function(){e||(e=!0,g.eg(f),b.oq.call(b.context||g.q))},b.timeout))}else g.J(a,b)};
g.J=function(a,b){var c=b.format||"JSON";a=Wh(a,b);var d=Xh(a,b),e=!1,f,k=Yh(a,function(l){if(!e){e=!0;f&&g.eg(f);var m=g.Th(l),p=null,r=400<=l.status&&500>l.status,y=500<=l.status&&600>l.status;if(m||r||y)p=gba(c,l,b.ob);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(p&&p.return_code,10);break a;case "RAW":m=!0;break a}m=!!p}p=p||{};r=b.context||g.q;m?b.onSuccess&&b.onSuccess.call(r,l,p):b.onError&&b.onError.call(r,l,p);b.Xa&&b.Xa.call(r,l,p)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Nc&&0<b.timeout&&(f=g.cg(function(){e||(e=!0,k.abort(),g.eg(f),b.Nc.call(b.context||g.q,k))},b.timeout));
return k};
Wh=function(a,b){b.oR&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.F("XSRF_FIELD_NAME",void 0),d=b.Ta;d&&(d[c]&&delete d[c],a=g.Jh(a,d));return a};
Xh=function(a,b){var c=g.F("XSRF_FIELD_NAME",void 0),d=g.F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.F("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Ru||g.qc(a)&&!b.withCredentials&&g.qc(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=g.Hh(e),g.cb(e,f),e=b.pr&&"JSON"==b.pr?JSON.stringify(e):g.wc(e));f=e||f&&!g.Wa(f);!Zh&&f&&"POST"!=b.method&&(Zh=!0,g.$f(Error("AJAX request with postData should use POST")));
return e};
gba=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?$h(b):null)d={},(0,g.B)(b.getElementsByTagName("*"),function(e){d[e.tagName]=g.ai(e)})}c&&bi(d);
return d};
bi=function(a){if(g.Ea(a))for(var b in a)"html_content"==b||g.ob(b,"_html")?a[b]=g.cc(a[b],null):bi(a[b])};
$h=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.ai=function(a){var b="";(0,g.B)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.ci=function(a,b){b.method="POST";b.ia||(b.ia={});return g.J(a,b)};
Yh=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&ag(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=bba();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.Uf("debug_forward_web_query_parameters")&&(a=eba(a));m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=cba(a,e))for(var p in e)m.setRequestHeader(p,e[p]),"content-type"==p.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m};
hba=function(){for(var a={},b=g.ka(Object.entries(g.Hh(g.F("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=g.ka(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a};
di=function(){return"INNERTUBE_API_KEY"in g.Pf&&"INNERTUBE_API_VERSION"in g.Pf};
ei=function(){return{innertubeApiKey:g.F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.F("INNERTUBE_API_VERSION",void 0),ny:g.F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),oy:g.F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),qy:g.F("INNERTUBE_CONTEXT_HL",void 0),py:g.F("INNERTUBE_CONTEXT_GL",void 0),ry:g.F("INNERTUBE_HOST_OVERRIDE",void 0)||"",sy:!!g.F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}};
fi=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.hR||g.F("AUTHORIZATION"))||(a?b="Bearer "+g.u("gapi.auth.getToken")().fR:b=g.Rd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.F("SESSION_INDEX",0),g.Uf("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.F("DELEGATED_SESSION_ID")));return d};
gi=function(a){a=Object.assign({},a);delete a.Authorization;var b=g.Rd();if(b){var c=new df;c.update(g.F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=g.Mc(c.digest(),3)}return a};
g.ii=function(a,b,c,d,e){g.hi.set(""+a,b,{yl:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})};
g.ji=function(a,b){return g.hi.get(""+a,b)};
g.ki=function(a,b,c){g.hi.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.li=function(a){var b;(b=g.Nf(a))||(a=new If(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.Bf(a):null;this.F=document.domain||window.location.hostname};
iba=function(a,b,c,d){if(d)return null;d=mi.get("nextId",!0)||1;var e=mi.get("requests",!0)||{};e[d]={method:a,request:b,authState:gi(c),requestTime:Math.round((0,g.Cg)())};mi.set("nextId",d+1,86400,!0);mi.set("requests",e,86400,!0);return d};
ni=function(a){var b=mi.get("requests",!0)||{};delete b[a];mi.set("requests",b,86400,!0)};
oi=function(a){var b=mi.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round((0,g.Cg)())-d.requestTime)){var e=d.authState,f=gi(fi(!1));g.Za(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round((0,g.Cg)())),g.Fg(a,d.method,e,{}));delete b[c]}}mi.set("requests",b,86400,!0)}};
g.pi=function(a){var b=this;this.C=null;a?this.C=a:di()&&(this.C=ei());g.mh(function(){oi(b)},5E3)};
g.Dg=function(a){a=a.C||ei();a={client:{hl:a.qy,gl:a.py,clientName:a.oy,clientVersion:a.innertubeContextClientVersion,configInfo:a.ny}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=g.F("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=g.Xf();0<b.length&&(a.request={internalExperimentFlags:b});g.F("DELEGATED_SESSION_ID")&&!g.Uf("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.F("DELEGATED_SESSION_ID")});g.Uf("enable_device_forwarding_from_xhr_client")&&
(a.client=Object.assign(a.client,hba()));return{context:a}};
g.Fg=function(a,b,c,d){!g.F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&g.bg(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,pr:"JSON",Nc:function(){d.Nc()},
oq:d.Nc,onSuccess:function(z,D){if(d.onSuccess)d.onSuccess(D)},
bj:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,D){if(d.onError)d.onError(D)},
mq:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.ry;k&&(f=k);k=a.C.sy||!1;var l=fi(k,f,d);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=g.Jh(""+f+("/youtubei/"+a.C.innertubeApiVersion+"/"+b),{alt:"json",key:a.C.innertubeApiKey}),p;if(d.retry&&g.Uf("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(p=iba(b,c,l,k))){var r=e.onSuccess,y=e.bj;e.onSuccess=function(z,D){ni(p);r(z,D)};
c.bj=function(z,D){ni(p);y(z,D)}}try{g.Uf("use_fetch_for_op_xhr")?fba(m,e):g.ci(m,e)}catch(z){if("InvalidAccessError"==z)p&&(ni(p),p=0),g.bg(Error("An extension is blocking network request."));
else throw z;}p&&g.mh(function(){oi(a)},5E3)};
g.qi=function(a,b,c){c=void 0===c?{}:c;var d=g.pi;g.F("ytLoggingEventsDefaultDisabled",!1)&&g.pi==g.pi&&(d=null);g.Eh(a,b,d,c)};
g.ri=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(g.la(c))};
g.ti=function(a){g.si(a,"WARNING")};
g.si=function(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||g.F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;d=window&&window.yterr||!1;if(a&&d&&!(5<=ui)&&(g.Uf("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),
window.console.log(d,a)),0!==a.C)){d=a.F;e=a.columnNumber;if(a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){f=a.args[l];var m="params."+l;k+=m.length;if(f)if(Array.isArray(f))for(var p=c,r=0;r<f.length&&!(f[r]&&(k+=vi(r,f[r],m,p),500<k));r++);else if("object"===typeof f)for(p in p=void 0,r=c,f){if(f[p]&&(k+=vi(p,f[p],m,r),500<k))break}else c[m]=String(JSON.stringify(f)).substring(0,500),k+=c[m].length;else c[m]=String(JSON.stringify(f)).substring(0,500),k+=c[m].length;if(500<=k)break}else if(a.hasOwnProperty("params"))if(f=
a.params,"object"===typeof a.params)for(l in m=0,f){if(f[l]&&(k="params."+l,p=String(JSON.stringify(f[l])).substr(0,500),c[k]=p,m+=k.length+p.length,500<m))break}else c.params=String(JSON.stringify(f)).substr(0,500);a=g.Wc(a);(d=d||a.stack)||(d="Not available");f={stackTrace:d};a.fileName&&(f.filename=a.fileName);l=a.lineNumber.toString();isNaN(l)||!e||isNaN(e)||(f.lineNumber=Number(l),f.columnNumber=Number(e),l=l+":"+e);window.yterr&&g.Da(window.yterr)&&(a.params=c,window.yterr(a));if(!(wi.has(a.message)||
0<=d.indexOf("/YouTubeCenter.js")||0<=d.indexOf("/mytube.js"))){if(g.Uf("kevlar_gel_error_routing")){m=b;e={level:"ERROR_LEVEL_UNKNOWN",message:a.message};"ERROR"===m?e.level="ERROR_LEVEL_ERROR":"WARNING"===m&&(e.level="ERROR_LEVEL_WARNNING");f={isObfuscated:!0,browserStackInfo:f};m={pageUrl:window.location.href,kvPairs:[]};k=g.ka(Object.keys(c));for(p=k.next();!p.done;p=k.next())p=p.value,m.kvPairs.push({key:"client."+p,value:String(c[p])});g.qi("clientError",{errorMetadata:m,stackTrace:f,logMessage:e});
g.Ug()}b={Ta:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:l,level:b,"client.name":c.name},ia:{url:g.F("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(b["client.version"]=c.version);if(b.ia){d&&(b.ia.stack=d);d=g.ka(Object.keys(c));for(e=d.next();!e.done;e=d.next())e=e.value,b.ia["client."+e]=c[e];if(c=g.F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=g.ka(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,b.ia[e]=c[e]}g.J(g.F("ECATCHER_REPORT_HOST",
"")+"/error_204",b);wi.add(a.message);ui++}}};
vi=function(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length};
g.xi=function(){this.F=!1;this.C=null};
yi=function(a,b,c,d){if(d)try{a.C=new window.botguard.bg(b,c?function(){return c(b)}:g.xa)}catch(e){g.ti(e)}else{try{a.C=new window.botguard.bg(b)}catch(e){g.ti(e)}c&&c(b)}};
g.zi=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
jba=function(){return parseInt(g.F("DCLKSTAT",0),10)};
kba=function(){return g.Ai.Md()};
lba=function(a){a=void 0===a?{}:a;return g.zi(g.Ai,a)};
Bi=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.Ci=function(a){var b=new Bi;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.Di=function(a){var b=new Bi;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
Ei=function(){g.C.call(this);this.C=[]};
Fi=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.$a(b);this.assets=a.assets||{};this.attrs=a.attrs||g.$a(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Gi=function(a){a instanceof Fi||(a=new Fi(a));return a};
Ii=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.cd)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Hi)for(a=1,b=0;b<Hi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Hi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Ki=function(a){a&&g.Eh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ji,clientScreenNonce:a},g.pi)};
g.Li=function(a){this.C=a};
g.Mi=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,void 0!==a.C.veCounter&&(b.veCounter=a.C.veCounter),void 0!==a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.Mi(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
Ni=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
Oi=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
Pi=function(a){return g.F(Oi(void 0===a?0:a),void 0)};
g.Qi=function(){var a=Pi(0),b;a?b=new g.Li({veType:a,youtubeData:void 0}):b=null;return b};
Ri=function(){var a=g.F("csn-to-ctt-auth-info");a||(a={},g.Qf("csn-to-ctt-auth-info",a));return a};
g.Si=function(a){a=void 0===a?0:a;var b=g.F(Ni(a));if(!b&&!g.F("USE_CSN_FALLBACK",!0))return null;b||0!=a||(g.Uf("kevlar_client_side_screens")||g.Uf("c3_client_side_screens")?b="UNDEFINED_CSN":b=g.F("EVENT_ID"));return b?b:null};
mba=function(a,b,c){var d=Ri();(c=g.Si(c))&&delete d[c];b&&(d[a]=b)};
g.Ti=function(a){return Ri()[a]};
g.Ui=function(a,b,c,d){c=void 0===c?0:c;if(a!==g.F(Ni(c))||b!==g.F(Oi(c)))if(mba(a,d,c),g.Qf(Ni(c),a),g.Qf(Oi(c),b),0==c||g.Uf("web_screen_associated_all_layers"))b=function(){setTimeout(function(){g.Ki(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()};
g.Yi=function(a,b){this.version=a;this.args=b};
g.Zi=function(a,b){this.topic=a;this.C=b};
g.aj=function(a,b){var c=$i();c&&c.publish.call(c,a.toString(),a,b)};
g.ej=function(a,b,c){var d=$i();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,k){var l=g.u("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(bj[e])try{if(k&&a instanceof g.Zi&&a!=f)try{var m=a.C,p=k;if(!p.args||!p.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.Ie){var r=new m;m.Ie=r.version}var y=m.Ie}catch(z){}if(!y||p.version!=y)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=Reflect.construct(m,
g.Qa(p.args))}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+z.message,z;}b.call(c||window,k)}catch(z){g.$f(z)}},cj[a.toString()]?g.rh()?g.nh(l):g.cg(l,0):l())});
bj[e]=!0;dj[a.toString()]||(dj[a.toString()]=[]);dj[a.toString()].push(e);return e};
pba=function(){var a=nba,b=g.ej(oba,function(c){a.apply(void 0,arguments);g.fj(b)},void 0);
return b};
g.fj=function(a){var b=$i();b&&("number"===typeof a&&(a=[a]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete bj[c]}))};
$i=function(){return g.u("ytPubsub2Pubsub2Instance")};
gj=function(a){g.Yi.call(this,1,arguments);this.csn=a};
g.jj=function(a,b,c){hj.push({payloadName:a,payload:b,options:c});ij||(ij=pba())};
nba=function(a){if(hj){for(var b=g.ka(hj),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,g.Eh(c.payloadName,c.payload,null,c.options));hj.length=0}ij=0};
g.kj=function(a,b,c){var d=g.Uf("use_default_events_client")?void 0:g.pi;(0,g.B)(b,function(e){var f=c;f=void 0===f?!1:f;e={csn:a,ve:g.Mi(e),eventType:f?16:8};f={Qf:g.Ti(a),Ee:a,Nu:f};"UNDEFINED_CSN"==a?g.jj("visualElementHidden",e,f):d?g.Eh("visualElementHidden",e,d,f):g.qi("visualElementHidden",e,f)})};
lj=function(){var a=g.Qi(),b=g.Si();b&&a&&g.kj(b,[a],!0)};
g.pj=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(mj==a)return;mj=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.yh()>b)&&"visible"==g.Zg()){b=-1;g.nj&&(b=Math.round((0,g.Cg)()-g.nj));var c=String;var d=g.u("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.cd)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:Ji,index:String(oj),lastEventDeltaMs:String(b),trigger:a};g.Eh("foregroundHeartbeat",
a,g.pi);g.t("_fact",-1,window);oj++;g.nj=(0,g.Cg)()}};
g.qj=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?ag(d):null;this.H=e?ag(e):null;this.G=[];this.C=this.F=0};
g.rj=function(a){g.oh(a.F);a.F=g.nh((0,g.v)(a.init,a))};
g.uj=function(a){a.name in sj&&tj(a.name);sj[a.name]={reqs:[],disable:(0,g.v)(a.disable,a)};(0,g.B)(a.deps,function(b){if(!(b in sj))throw Error("Module "+b+" required by "+a.name);sj[b].reqs.push(a.name)});
a.enable()};
tj=function(a){if(a in sj){var b=sj[a];(0,g.B)(b.reqs,function(c){tj(c)});
try{b.disable()}catch(c){}delete sj[a]}};
wj=function(a){Of(g.vj,arguments)};
g.xj=function(a){return a in g.vj};
yj=function(a){Of(g.vj,arguments)};
g.zj=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Qb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Eb(g.Ib(a)),"about:invalid#zClosurez"===a?a="":(a=g.$b(g.bc(a)),a=g.gc(g.rf(a))),g.pb(a)||(a=g.rd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.xd(a).body.appendChild(a))):e?Yh(a,b,"POST",e,d):g.F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Yh(a,b,"GET","",d):qba(a,b)||rba(a,b))};
qba=function(a,b){if(!Sf("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(Sf("use_sonic_js_library_for_v4_support")){a:{try{var c=new haa({url:a,tH:!0});if(c.H?c.D&&c.C&&c.C[1]||c.G:c.F){var d=g.nc(g.pc(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==g.Ac(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=g.nc(g.pc(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==g.Ac(a,"ae")||"1"!==g.Ac(a,"act"))return!1;return Aj(a)?(b&&b(),!0):!1};
Aj=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
rba=function(a,b){var c=new Image,d=""+sba++;Bj[d]=c;c.onload=c.onerror=function(){b&&Bj[d]&&b();delete Bj[d]};
c.src=a};
g.Cj=function(a,b){a=a||"";var c=a.match(tba);spf.style.load(a,c?c[1]:"",b)};
Fj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Dj(a)||c.some(function(e){return!Dj(e)}))throw Error("Only objects may be merged.");
c=g.ka(c);for(d=c.next();!d.done;d=c.next())Ej(a,d.value);return a};
Ej=function(a,b){for(var c in b)if(Dj(b[c])){if(c in a&&!Dj(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ej(a[c],b[c])}else if(Gj(b[c])){if(c in a&&!Gj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Hj(a[c],b[c])}else a[c]=b[c];return a};
Hj=function(a,b){for(var c=g.ka(b),d=c.next();!d.done;d=c.next())d=d.value,Dj(d)?a.push(Ej({},d)):Gj(d)?a.push(Hj([],d)):a.push(d);return a};
Dj=function(a){return"object"===typeof a&&!Array.isArray(a)};
Gj=function(a){return"object"===typeof a&&Array.isArray(a)};
g.Ij=function(a,b,c){var d=void 0===d?!0:d;var e=g.F("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=g.qc(window.location.href);f&&e.push(f);f=g.qc(a);if(g.Ma(e,f)||!f&&g.nb(a,"/"))if(g.Uf("autoescape_tempdata_url")&&(e=document.createElement("a"),g.dc(e,a),a=e.href),a&&(a=g.rc(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.Si()},b)),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+g.lc(a).toString(36),b=b?g.wc(b):"",g.ii(d,b,c||5))):(c=b,b="ST-"+g.lc(a).toString(36),
c=c?g.wc(c):"",g.ii(b,c,5))};
g.Jj=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.fc(d.location,g.xc(a,b)+c)};
g.Kj=function(a,b){b&&g.Ij(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.Jj(a)};
g.Lj=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.F("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Ij(a,b);if(c)return!1;g.Kj(a);return!0};
Pj=function(a,b,c,d){g.C.call(this);var e=this;this.L=this.Ya=a;this.ha=b;this.M=!1;this.api={};this.na=this.N=null;this.Y=new g.uf;g.Ed(this,this.Y);this.G={};this.la=this.qa=this.F=this.nb=this.C=null;this.T=!1;this.H=this.J=null;this.ib={};this.Od=["onReady"];this.kb=null;this.sb=NaN;this.W={};this.D=d;Mj(this);this.Lh("WATCH_LATER_VIDEO_ADDED",this.rD.bind(this));this.Lh("WATCH_LATER_VIDEO_REMOVED",this.sD.bind(this));this.Lh("onAdAnnounce",this.It.bind(this));this.Hb=new Ei(this);g.Ed(this,this.Hb);
this.aa=0;c?this.aa=g.cg(function(){e.loadNewVideoConfig(c)},0):d&&(Nj(this),Oj(this))};
Nj=function(a){var b;a.D?b=a.D.rootElementId:b=a.C.attrs.id;a.F=b||a.F;"video-player"==a.F&&(a.F=a.ha,a.C.attrs.id=a.ha);a.L.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F)};
Qj=function(a){a.C&&!a.C.loaded&&(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Tj=function(a){var b=!0,c=Rj(a);c&&a.C&&(a=Sj(a),b=g.G(c,"version")===a);return b&&!!g.u("yt.player.Application.create")};
Oj=function(a){if(!a.pb()&&!a.T){var b=Tj(a);if(b&&"html5"==(Rj(a)?"html5":null))a.la="html5",a.M||Uj(a);else if(Vj(a),a.la="html5",b&&a.H)a.Ya.appendChild(a.H),Uj(a);else{a.C&&(a.C.loaded=!0);var c=!1;a.J=function(){c=!0;if(a.D)var d=a.D.serializedExperimentFlags;else a.C&&a.C.args&&(d=a.C.args.fflags);d="true"==Fh(d||"").player_bootstrap_method?g.u("yt.player.Application.createAlternate")||g.u("yt.player.Application.create"):g.u("yt.player.Application.create");var e=a.C?a.C.clone():void 0;d(a.Ya,
e,a.D);Uj(a)};
a.T=!0;b?a.J():(g.qg(Sj(a),a.J),(b=a.D?a.D.cssUrl:a.C.assets.css)&&g.Cj(b),Wj(a)&&!c&&g.t("yt.player.Application.create",null,void 0))}}};
Rj=function(a){var b=g.A(a.F);!b&&a.L&&a.L.querySelector&&(b=a.L.querySelector("#"+a.F));return b};
Uj=function(a){if(!a.pb()){var b=Rj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.T=!1,b.isNotServable&&a.C&&b.isNotServable(a.C.args.video_id)||uba(a)):a.sb=g.cg(function(){Uj(a)},50)}};
uba=function(a){Mj(a);a.M=!0;var b=Rj(a);b.addEventListener&&(a.N=Xj(a,b,"addEventListener"));b.removeEventListener&&(a.na=Xj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Xj(a,b,e))}for(var f in a.G)a.N(f,a.G[f]);Qj(a);a.qa&&a.qa(a.api);a.Y.oa("onReady",a.api)};
Xj=function(a,b,c){var d=b[c];return function(){try{return a.kb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.kb=e,g.bg(e))}}};
Mj=function(a){a.M=!1;if(a.na)for(var b in a.G)a.na(b,a.G[b]);for(var c in a.W)g.eg(parseInt(c,10));a.W={};a.N=null;a.na=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Lh.bind(a);a.api.removeEventListener=a.aG.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.vv.bind(a);a.api.getPlayerType=a.Bv.bind(a);a.api.getCurrentVideoConfig=a.ov.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.mz.bind(a)};
Yj=function(a,b){var c=b;if("string"==typeof b){if(a.ib[b])return a.ib[b];c=function(){var d=g.u(b);d&&d.apply(g.q,arguments)};
a.ib[b]=c}return c?c:null};
vba=function(a,b){var c="ytPlayer"+b+a.ha;a.G[b]=c;g.q[c]=function(d){var e=g.cg(function(){a.pb()||(a.Y.oa(b,d),g.Xa(a.W,String(e)))},0);
g.Ya(a.W,String(e),!0)};
return c};
Vj=function(a){a.cancel();Mj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=Rj(a);b&&(Tj(a)||!Wj(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null));g.vd(a.Ya)};
Wj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
Sj=function(a){return a.D?a.D.jsUrl:a.C.assets.js};
g.bk=function(a,b){var c=void 0===c?!0:c;a="string"===typeof a?g.jd(a):a;var d=g.Zj+"_"+g.Ga(a),e=g.ak[d];if(e&&c)return b&&b.args&&b.args.fflags&&b.args.fflags.includes("web_player_remove_playerproxy=true")?e.api.loadVideoByPlayerVars(b.args||null):e.loadNewVideoConfig(b),e.api;e=new Pj(a,d,b,void 0);g.ak[d]=e;g.H("player-added",e.api);g.Cd(e,g.w(wba,e));return e.api};
wba=function(a){delete g.ak[a.getId()]};
g.ck=function(a){if(!a)return null;var b=g.Zj+"_"+g.Ga(a),c=g.ak[b];c||(c=new Pj(a,b),g.ak[b]=c);return c.api};
g.dk=function(a){return g.ck(document.getElementById(a))};
g.fk=function(a,b){var c={};c.key=a;c.value=b;return ek().then(function(d){return new Promise(function(e,f){try{var k=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);k.onsuccess=function(){e()};
k.onerror=function(){f()}}catch(l){f(l)}})})};
g.gk=function(a){var b=new g.ri("Error accessing DB");return ek().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=function(){var k=f.result;d(k?k.value:null)};
f.onerror=function(){b.params={key:a,source:"onerror"};e(b)}}catch(k){b.params={key:a,
thrownError:String(k)},e(b)}})},function(){return null})};
ek=function(){return hk?Promise.resolve(hk):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))hk=d,a(hk);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),ek()};
c.onupgradeneeded=xba})};
xba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
ik=function(a,b){g.Yi.call(this,1,arguments)};
jk=function(a,b){g.Yi.call(this,1,arguments)};
yba=function(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}};
lk=function(a){var b=kk(a);if(b.aft)return b.aft;a=g.F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
ok=function(){var a;if(g.Uf("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===mk||void 0===mk?void 0:mk.getEntriesByType)||void 0===a?void 0:a.call(mk,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=nk(e.requestStart),e.responseEnd=nk(e.responseEnd),e.redirectStart=nk(e.redirectStart),e.redirectEnd=nk(e.redirectEnd),e.domainLookupEnd=nk(e.domainLookupEnd),e.connectStart=nk(e.connectStart),
e.connectEnd=nk(e.connectEnd),e.responseStart=nk(e.responseStart),e.secureConnectionStart=nk(e.secureConnectionStart),e.domainLookupStart=nk(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=mk.timing}else a=mk.timing;return a};
pk=function(){return g.Uf("csi_use_time_origin")&&mk.timeOrigin?Math.floor(mk.timeOrigin):mk.timing.navigationStart};
nk=function(a){return Math.round(pk()+a)};
qk=function(a){g.t("ytglobal.timingready_",a,void 0)};
rk=function(a){return!!g.u("yt.timing."+(a||"")+"pingSent_")};
sk=function(a,b){g.t("yt.timing."+(b||"")+"pingSent_",a,void 0)};
uk=function(a){return g.u("ytcsi."+(a||"")+"data_")||tk(a)};
vk=function(a){a=uk(a);a.info||(a.info={});return a.info};
kk=function(a){a=uk(a);a.tick||(a.tick={});return a.tick};
wk=function(a){var b=uk(a).nonce;b||(b=Ii(),uk(a).nonce=b);return b};
tk=function(a){var b={tick:{},info:{}};g.t("ytcsi."+(a||"")+"data_",b,void 0);return b};
yk=function(a){var b=kk(a||""),c=lk(a);c&&!xk&&(g.aj(zba,new ik(Math.round(c-b._start),a)),xk=!0)};
Aba=function(){if(mk.getEntriesByType){var a=mk.getEntriesByType("paint");if(a=g.Ka(a,function(b){return"first-paint"===b.name}))return nk(a.startTime)}a=mk.timing;
return a.oz?Math.max(0,a.oz):0};
zk=function(){var a=g.u("ytcsi.debug");a||(a=[],g.t("ytcsi.debug",a,void 0),g.t("ytcsi.reference",{},void 0));return a};
Bk=function(a){a=a||"";var b=Ak();if(b[a])return b[a];var c=zk(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d};
Ak=function(){var a=g.u("ytcsi.reference");if(a)return a;zk();return g.u("ytcsi.reference")};
Ck=function(){this.C=0};
Dk=function(){Ck.C||(Ck.C=new Ck);return Ck.C};
Fk=function(a,b){Ek[b]=Ek[b]||{count:0};var c=Ek[b];c.count++;c.time=(0,g.Cg)();a.C||(a.C=g.mh(function(){var d=(0,g.Cg)(),e;for(e in Ek)Ek[e]&&6E4<d-Ek[e].time&&delete Ek[e];a&&(a.C=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new g.ri("CSI data exceeded logging limit with key",b),0===b.indexOf("info")?g.ti(c):g.si(c)),!0):!1};
Gk=function(a){return!!g.F("FORCE_CSI_ON_GEL",!1)||g.Uf("csi_on_gel")||!!uk(a).useGel};
Ik=function(a,b,c){var d=Hk(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||(0,g.Cg)();return Gk(c)?(Bk(c||"").tick[a]=b||(0,g.Cg)(),d=wk(c),"_start"===a?(a=Dk(),Fk(a,"baseline_"+d)||g.qi("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):Dk().tick(a,d,b),yk(c),!0):!1};
Lk=function(a,b,c){c=Hk(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a in Jk){if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}c=Jk[a];g.Ma(Bba,c)&&(b=!!b);a in Kk&&"string"===typeof b&&(b=Kk[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},k=0;k<b.length-1;k++){var l=b[k];f[l]={};f=f[l]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Fj({},d)}g.Ma(Cba,a)||g.ti(new g.ri("Unknown label logged with GEL CSI",a))};
Hk=function(a){a=uk(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel};
Mk=function(a){a=Hk(a);"gelInfos"in a||(a.gelInfos={});return a.gelInfos};
Nk=function(a,b,c){null!==b&&(vk(c)[a]=b,Gk(c)?(a=Lk(a,b,c))&&Gk(c)&&(b=Bk(c||""),Fj(b.info,a),Fj(Mk(c),a),c=wk(c),Dk().info(a,c)):Bk(c||"").info[a]=b)};
g.Sk=function(a,b,c){var d=kk(c);if(g.Uf("use_first_tick")&&Pk(a,c))return d[a];b||"_"===a[0]||Qk(a,c);var e=b||(0,g.Cg)();d[a]=e;Ik(a,b,c)||(g.Rk(!1,c),Bk(c||"").tick[a]=b||(0,g.Cg)());return d[a]};
Qk=function(a,b){mk.mark&&(g.nb(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),mk.mark(a))};
Pk=function(a,b){var c=kk(b);return a in c};
g.Rk=function(a,b){if(!rk(b)){var c=g.F((b||"")+"TIMING_ACTION",void 0),d=kk(b);if(g.u("ytglobal.timing"+(b||"")+"ready_")&&c&&Pk("_start")&&lk(b))if(yk(b),a||b)Tk(b);else{c=!0;var e=g.F("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Tk(b)}}};
Tk=function(a){if(!Gk(a)){var b=kk(a),c=vk(a),d=b._start,e=g.F("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:g.F((a||"")+"TIMING_ACTION",void 0)},k=c.srt;void 0!==b.srt&&delete c.srt;b.aft=lk(a);var l=kk(a),m=l.pbr,p=l.vc;l=l.pbs;m&&p&&l&&m<p&&p<l&&vk(a).yt_pvis&&"youtube"===e&&(Nk("yt_lt","hot_bg",a),e=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-e));for(var r in c)"_"!==r.charAt(0)&&(f[r]=c[r]);b.ps=(0,g.Cg)();r={};e=[];for(var y in b)"_"!==y.charAt(0)&&(m=Math.round(b[y]-d),r[y]=m,e.push(y+"."+
m));f.rt=e.join(",");b=!!c.ap;g.Uf("debug_csi_data")&&(c=g.u("yt.timing.csiData"),c||(c=[],g.t("yt.timing.csiData",c,void 0)),c.push({page:location.href,time:new Date,args:f}));c="";for(var z in f)f.hasOwnProperty(z)&&(c+="&"+z+"="+f[z]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var D=void 0===D?"":D;Aj(f,D)||g.zj(f,void 0,void 0,void 0,D)}else g.zj(f);sk(!0,a);g.aj(Dba,new jk(r.aft+(Number(k)||0),a))}};
Uk=function(){tk(void 0);Eba();sk(!1,void 0);g.F("TIMING_ACTION")&&g.Qf("PREVIOUS_ACTION",g.F("TIMING_ACTION"));g.Qf("TIMING_ACTION","")};
Iba=function(){var a=g.F("TIMING_ACTION",void 0),b=g.F("TIMING_AFT_KEYS");Bk("").info.actionType=a;b&&g.Qf("TIMING_AFT_KEYS",b);g.Qf("TIMING_ACTION",a);a=g.F("TIMING_INFO",{});for(var c in a)Nk(c,a[c]);Nk("is_nav",1);(c=g.Si())&&Nk("csn",c);(c=g.F("PREVIOUS_ACTION",void 0))&&!Gk()&&Nk("pa",c);c=vk();a=g.F("CLIENT_PROTOCOL");b=g.F("CLIENT_TRANSPORT");a&&Nk("p",a);b&&Nk("t",b);Nk("yt_vis",Fba());if("cold"==c.yt_lt){Nk("yt_lt","cold");a=ok();if(b=pk())g.Sk("srt",a.responseStart),1!=c.prerender&&Vk("n",
b);c=Aba();0<c&&g.Sk("fpt",c);Wk();mk.getEntriesByType&&Gba();c=[];if(document.querySelector&&mk&&mk.getEntriesByName)for(var d in Xk)a=Xk[d],Hba(d,a)&&c.push(a);c.length&&Nk("rc",c.join(","))}Gk(void 0)&&(d={actionType:Yk[g.F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:Yk[g.F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"},c=wk(void 0),Dk().info(d,c));d=vk();a=kk();if("cold"===d.yt_lt&&(c=Hk(),b=c.gelTicks?c.gelTicks:c.gelTicks={},c=c.gelInfos?c.gelInfos:c.gelInfos={},
Gk())){for(var e in a)"tick_"+e in b||Ik(e,a[e]);e=Mk();a=wk();b={};for(var f in d)if(!("info_"+f in c)){var k=Lk(f,d[f]);k&&(Fj(e,k),Fj(b,k))}Dk().info(b,a)}qk(!0);g.Rk(!1)};
Zk=function(a,b,c){return g.Sk(a,b,c)};
Vk=function(a,b){Nk("yt_sts",a,void 0);g.Sk("_start",b,void 0)};
Wk=function(){var a=ok();a.isPerformanceNavigationTiming&&Nk("pnt",1,void 0);g.Sk("nreqs",a.requestStart,void 0);g.Sk("nress",a.responseStart,void 0);g.Sk("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.Sk("nrs",a.redirectStart,void 0),g.Sk("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.Sk("ndnss",a.domainLookupStart,void 0),g.Sk("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.Sk("ntcps",a.connectStart,void 0),g.Sk("ntcpe",a.connectEnd,
void 0));a.secureConnectionStart>=pk()&&0<a.connectEnd-a.secureConnectionStart&&(g.Sk("nstcps",a.secureConnectionStart,void 0),g.Sk("ntcpe",a.connectEnd,void 0))};
Fba=function(){switch(g.Zg()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
$k=function(a){if(!Gk(void 0)&&!rk(void 0)){var b=g.F("CSI_SERVICE_NAME","youtube");g.F("TIMING_ACTION",void 0)&&b&&(g.Sk("aa",void 0,void 0),Nk("ap",1,void 0),Nk("yt_fss",a,void 0),Tk(void 0))}};
Gba=function(){var a=window.location.protocol,b=mk.getEntriesByType("resource");b=(0,g.al)(b,function(c){return 0==c.name.indexOf(a+"//web.archive.org/web/20200501000036/https://fonts.gstatic.com/s/")});
(b=(0,g.Td)(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.Sk("wffs",nk(b.startTime)),g.Sk("wffe",nk(b.responseEnd)))};
Hba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);g.wa()&&c.setAttribute("nonce",g.wa());return d?(c=mk.getEntriesByName(d))&&c[0]&&(c=c[0],d=pk(),g.Sk("rsf_"+b,d+Math.round(c.fetchStart)),g.Sk("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(d=vk(void 0),e=Mk(void 0),"rc"in d||"rc"in e||Nk("rc",""),0===c.transferSize))?!0:!1:!1};
Oba=function(){bl++;var a=g.nd(),b=new g.Gd(0,0,a.width,a.height);Nk("vph",a.height,void 0);Nk("vpw",a.width,void 0);g.Sk("vpc",void 0,void 0);a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[];cl.start();for(var e=0;e<c;e++){var f=a[e];dl(f,b)&&(f=Jba(f),f.then(Kba),d.push(f),el.push(f))}g.Sk("vpcc",void 0,void 0);b=g.Qe(d).then(Lba);g.Se(b,Mba);b.then(Nba);el.push(b);return b};
Nba=function(){cl.stop()};
Mba=function(){g.Sk("vpr",void 0,void 0)};
dl=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.Yg(c);if(e in fl)return!0;if(e in gl)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return gl[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return gl[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)fl[d[c]]=!0;return!0};
Lba=function(a){var b=g.nd();b=new g.Gd(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;dl(a[d].ky,b)&&c<f&&(c=f)}return c};
Jba=function(a){var b=bl;return new g.Ke(function(c,d){var e={ky:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){bl!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},hl.push(a))})};
Kba=function(a){cl.start();a=a.time;il<a&&(il=a,g.Sk("lim",a,void 0))};
Pba=function(){g.Sk("vptl",il,void 0);g.Sk("vpl",il,void 0)};
Qba=function(){el.forEach(function(a){a.cancel()});
il=el.length=0;fl={};gl={};hl.forEach(function(a){a.slt=void 0});
hl.length=0};
g.jl=function(a,b){g.zj("/gen_204?"+a,b)};
Rba=function(a){if(null==a)return[];var b=[];g.Uf("ima_prevent_mpu_queries_on_cached_playback")&&0>kl.indexOf("ad3_module")&&kl.push("ad3_module");kl.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.ll=function(){return g.E(g.A("page-container"),"remote-connected")};
Sba=function(){ml=g.dg(nl,5E3);var a=g.ol();a&&(a.addEventListener("onReady",nl),a.addEventListener("onStateChange",nl))};
pl=function(a){for(var b in g.ak){var c=g.ak[b];c&&c.cancel()}if(a=a||null)g.bk("player-api",a),a=g.Gi(a),a.loaded=!0;nl();g.t("ytplayer.config",a,void 0)};
g.ol=function(){return g.dk("player-api")};
nl=function(){var a=g.ol();if(a){var b=1==(a&&a.isReady()?a.getPlayerState():void 0),c="watch"==g.F("PAGE_NAME"),d=g.ll();!b||c||d||a.pauseVideo()}};
rl=function(){g.Sk("ol",void 0,void 0);window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){g.Sk("cpt",void 0,void 0);g.H("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(g.Sk("cpt",void 0,void 0),g.H("on_cpt_tick",(new Date).getTime())):setTimeout(function(){g.Sk("cpt",void 0,void 0);
g.H("on_cpt_tick",(new Date).getTime())},0);
Tba();g.F("CSI_VIEWPORT")&&(ql=Oba(),ql.then(function(a){g.Sk("vpl",a,void 0);ql=null},function(){}))};
Tba=function(){sl("init");var a=g.F("PAGE_NAME",void 0);a&&sl("init-"+a)};
sl=function(a){g.rh()?tl.push(g.nh(g.w(g.mg,a),0)):g.H(a)};
ul=function(){g.ph(tl);tl.length=0;Qba();ql&&(ql.cancel(),ql=null);var a=g.F("PAGE_NAME",void 0);a&&g.mg("dispose-"+a);g.mg("dispose")};
Uba=function(){rl()};
Vba=function(){g.F("TIMING_REPORT_ON_UNLOAD")&&g.Rk(!0,void 0);$k("u");g.pj("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");lj();g.Ug();ul();g.mg("pageunload")};
vl=function(){g.sh()};
wl=function(){window.yt_spf_loaded_history=!0;g.sh()};
Bl=function(){xl=1;yl=zl=0;g.F("TIMING_REPORT_ON_UNLOAD")&&g.Rk(!0,void 0);if(g.Uf("warm_load_nav_start_web")){var a=Ak();a[""]&&delete a[""];var b={timerName:"",info:{},tick:{},span:{}};zk().push(b);a[""]=b;$k("n");Uk();qk(!1);g.Qf("TIMING_AFT_KEYS",[]);Nk("yt_lt","warm");g.Qf("TIMING_ACTION","");g.Qf("TIMING_WAIT",[]);delete g.F("TIMING_INFO",{}).yt_lt;Vk("n")}else $k("n"),Uk(),Vk("n");Qk("nr",void 0);Al(Wba);lj();g.mg("navigate")};
Fl=function(a){a=a.detail.part||a.detail.partial;g.Sk("nc"+zl,void 0,void 0);++zl;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.Sk("bc",void 0,void 0);else{var b=1==xl;xl=2;b?(Al(Xba),Cl()):Al(Yba);if(b=a&&a.data&&a.data.swfcfg)Dl(a.timing,b.args),El(b)}};
Gl=function(){g.Sk("np"+yl,void 0,void 0);++yl};
Hl=function(a){a=a.detail.response;var b=1==xl;xl=3;b&&(Al(Zba),Cl());if(b=a.data&&a.data.swfcfg)Dl(a.timing,b.args),El(b)};
Ll=function(a){g.Sk("nd",void 0,void 0);a=a.detail.response;g.Il=a.cacheKey;a=a.timing;var b=window._spf_state;g.Jl.navigationCount=b&&b["nav-counter"]||0;g.Uf("warm_load_nav_start_web")?g.Sk("srt",a.responseStart,void 0):(Vk("ne",a.responseStart),b=ok().responseStart,Nk("srt",Math.max(0,b-pk()),void 0));Nk("yt_lt",a.spfCached?"hot":"warm",void 0);g.Sk("pfs",a.fetchStart,void 0);g.Sk("pfrs",a.responseStart,void 0);"redirectStart"in a&&Wk();Al(Kl);document.getElementById("content").style.height="";
rl();xl=0};
Ml=function(a){var b=a.detail.url,c=a.detail.err;c&&(a=a.detail.xhr,a&&!a.responseText||a&&a.responseText&&a.responseText.startsWith("<")||(c.params=b,g.bg(c)))};
Nl=function(a){g.jl(g.wc({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
aca=function(){$ba();window.yt_spf_loaded_history=!1};
bca=function(){};
Cl=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");ul();a=g.F("PREVIOUS_ACTION");for(var b in g.Pf)delete g.Pf[b];g.Qf("PREVIOUS_ACTION",a);g.Qf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.t("ytplayer.config",null,void 0);(b=g.ol())&&b.stopVideo&&(b.stopVideo(),b.getLastError()&&(b=document.getElementById("movie_player"))&&b.stopVideo&&b.stopVideo());nl()};
El=function(a){Pk("cfg",void 0)||g.Sk("cfg",void 0,void 0);pl(a)};
Al=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.oh(Ol);Ol=g.nh(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.eg(Pl);Pl=g.cg(function(){b.className=e},c)},0)};
$ba=function(){var a=Kl[0]+50;g.eg(Pl);Pl=g.cg(function(){var b=document.getElementById("progress");b&&b.parentNode.removeChild(b)},a)};
Dl=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Rba(b));g.F("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.jl(g.wc(c)))};
Rl=function(){return"granted"!=Notification.permission?Promise.resolve():Ql().then(function(a){return a?a.pushManager.getSubscription().then(function(b){if(b)return Promise.resolve();b={userVisibleOnly:!0,applicationServerKey:naa()};return a.pushManager.subscribe(b).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
Tl=function(){Sl({type:"notifications_register",data:g.F("ID_TOKEN")})};
Ql=function(){var a=Wf("service_worker_scope");try{return navigator.serviceWorker.getRegistration(a)}catch(b){return Promise.reject(b)}};
cca=function(){return Ql().then(Ul)["catch"](function(){return!1})};
Ul=function(a){return!(!a||!a.pushManager)};
Sl=function(a){return Ql().then(function(b){if(!b||!b.active)return Promise.reject("serviceworker.postMessage");b.active.postMessage(a);return Promise.resolve()})};
dca=function(){if(!g.F("LOGGED_IN",void 0))return Promise.resolve(!1);var a=Wf("service_worker_push_force_notification_prompt_tag");return a?g.gk("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
hca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?cca():Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=Rl().then(function(){return Sl({type:"notifications_check_registration",data:g.F("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return eca(a)}).then(function(c){if(c)return fca(),gca().then(function(){})})["catch"](function(){})})};
eca=function(a){return g.F("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.F("LOGGED_IN",void 0)&&(void 0===a?0:a)?dca().then(function(b){if(b)return!0;b=[ica(),jca()];g.F("LOGGED_IN",void 0)||b.push(kca());return Promise.all(b).then(function(c){return c.every(function(d){return d})})}):Promise.resolve(!1)};
kca=function(){var a=g.Vf("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.gk("WatchCount").then(function(b){return b>=a})};
gca=function(){var a=arguments;g.Uf("service_worker_push_prompt_modal_enable")&&lca();return Notification.requestPermission().then(function(b){Vl();var c=document.getElementById("ticker");c&&(c.className=c.classList.remove("show"));if("granted"==b)return Rl().then(function(){g.fk("NotificationsDisabled",!1);Tl();return Promise.resolve(!0)});
"denied"==b&&Tl();return Promise.resolve(!1)})["catch"](function(){Vl();
return Promise.reject.apply(Promise,g.la(a))})};
fca=function(){g.gk("PromptCount").then(function(a){return g.fk("PromptCount",a+1)}).then(function(){return g.fk("PromptTime",(0,g.cd)())}).then(function(){var a=Wf("service_worker_push_force_notification_prompt_tag");
if(a)return g.gk("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.fk("PromptTags",JSON.stringify(c))})})};
ica=function(){return-1==g.Vf("service_worker_push_prompt_cap")?Promise.resolve(!0):g.gk("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.Vf("service_worker_push_prompt_cap"))})};
jca=function(){var a=g.Vf("service_worker_push_prompt_delay_microseconds");return a?g.gk("PromptTime").then(function(b){return Promise.resolve((0,g.cd)()-a>(b||0))}):Promise.resolve(!0)};
mca=function(){Wl||Vl()};
Xl=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
lca=function(){var a=g.A("yt-push-prompt-modal-bg");Wl=g.Uf("service_worker_push_prompt_modal_ignore_click");a?Xl(a):(a=g.rd("div",{id:"yt-push-prompt-modal-bg"}),Xl(a),document.body.appendChild(a),g.ih(document,"click",mca))};
Vl=function(){var a=g.A("yt-push-prompt-modal-bg");a&&g.wd(a)};
nca=function(a){return Ul(a)?hca():Promise.resolve()};
pca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(oca)})};
rca=function(){var a="/sw.js",b=g.F("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);try{var c=Yl(a)["catch"](function(){return new Promise(function(){})});
g.Uf("service_worker_push_enabled")&&c.then(qca).then(nca)}catch(d){if("SecurityError"!=d.name)throw d;}};
qca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
oca=function(a){a&&Yl("/sw.js?0",a.scope)};
Yl=function(a,b){return navigator.serviceWorker.register(a,{scope:b||Wf("service_worker_scope")||"/"})};
Zl=function(){g.qj.call(this,"www/base");this.D=0};
$l=function(a){(a=a.detail.name)&&tj(a)};
g.aa=[];fa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ea=aaa(this);ha.prototype.toString=function(){return this.C};
var baa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ha("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}(),ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},am;
if("function"==typeof Object.setPrototypeOf)am=Object.setPrototypeOf;else{var bm;a:{var sca={a:!0},cm={};try{cm.__proto__=sca;bm=cm.a;break a}catch(a){}bm=!1}am=bm?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=am;
pa("Promise",function(a){function b(k){this.F=0;this.D=void 0;this.C=[];var l=this.H();try{k(l.resolve,l.reject)}catch(m){l.reject(m)}}
function c(){this.C=null}
function d(k){return k instanceof b?k:new b(function(l){l(k)})}
if(a)return a;c.prototype.F=function(k){if(null==this.C){this.C=[];var l=this;this.D(function(){l.H()})}this.C.push(k)};
var e=ea.setTimeout;c.prototype.D=function(k){e(k,0)};
c.prototype.H=function(){for(;this.C&&this.C.length;){var k=this.C;this.C=[];for(var l=0;l<k.length;++l){var m=k[l];k[l]=null;try{m()}catch(p){this.G(p)}}}this.C=null};
c.prototype.G=function(k){this.D(function(){throw k;})};
b.prototype.H=function(){function k(p){return function(r){m||(m=!0,p.call(l,r))}}
var l=this,m=!1;return{resolve:k(this.N),reject:k(this.G)}};
b.prototype.N=function(k){if(k===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof b)this.T(k);else{a:switch(typeof k){case "object":var l=null!=k;break a;case "function":l=!0;break a;default:l=!1}l?this.Y(k):this.L(k)}};
b.prototype.Y=function(k){var l=void 0;try{l=k.then}catch(m){this.G(m);return}"function"==typeof l?this.la(l,k):this.L(k)};
b.prototype.G=function(k){this.M(2,k)};
b.prototype.L=function(k){this.M(1,k)};
b.prototype.M=function(k,l){if(0!=this.F)throw Error("Cannot settle("+k+", "+l+"): Promise already settled in state"+this.F);this.F=k;this.D=l;this.J()};
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
b.race=function(k){return new b(function(l,m){for(var p=g.ka(k),r=p.next();!r.done;r=p.next())d(r.value).Sh(l,m)})};
b.all=function(k){var l=g.ka(k),m=l.next();return m.done?d([]):new b(function(p,r){function y(O){return function(T){z[O]=T;D--;0==D&&p(z)}}
var z=[],D=0;do z.push(void 0),D++,d(m.value).Sh(y(z.length-1),r),m=l.next();while(!m.done)})};
return b});
pa("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ra(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
pa("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ra(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&k<e;)if(d[k++]!=b[l++])return!1;return l>=f}});
pa("String.prototype.repeat",function(a){return a?a:function(b){var c=ra(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
pa("Array.prototype.keys",function(a){return a?a:function(){return sa(this,function(b){return b})}});
pa("Array.prototype.values",function(a){return a?a:function(){return sa(this,function(b,c){return c})}});
var tca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
pa("Object.assign",function(a){return a||tca});
pa("WeakMap",function(a){function b(m){this.rb=(l+=Math.random()+1).toString();if(m){m=g.ka(m);for(var p;!(p=m.next()).done;)p=p.value,this.set(p[0],p[1])}}
function c(){}
function d(m){var p=typeof m;return"object"===p&&null!==m||"function"===p}
function e(m){if(!ta(m,k)){var p=new c;fa(m,k,{value:p})}}
function f(m){var p=Object[m];p&&(Object[m]=function(r){if(r instanceof c)return r;e(r);return p(r)})}
if(function(){if(!a||!Object.seal)return!1;try{var m=Object.seal({}),p=Object.seal({}),r=new a([[m,2],[p,3]]);if(2!=r.get(m)||3!=r.get(p))return!1;r["delete"](m);r.set(p,4);return!r.has(m)&&4==r.get(p)}catch(y){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var l=0;b.prototype.set=function(m,p){if(!d(m))throw Error("Invalid WeakMap key");e(m);if(!ta(m,k))throw Error("WeakMap key fail: "+m);m[k][this.rb]=p;return this};
b.prototype.get=function(m){return d(m)&&ta(m,k)?m[k][this.rb]:void 0};
b.prototype.has=function(m){return d(m)&&ta(m,k)&&ta(m[k],this.rb)};
b.prototype["delete"]=function(m){return d(m)&&ta(m,k)&&ta(m[k],this.rb)?delete m[k][this.rb]:!1};
return b});
pa("Map",function(a){function b(){var l={};return l.previous=l.next=l.head=l}
function c(l,m){var p=l.F;return ia(function(){if(p){for(;p.head!=l.F;)p=p.previous;for(;p.next!=p.head;)return p=p.next,{done:!1,value:m(p)};p=null}return{done:!0,value:void 0}})}
function d(l,m){var p=m&&typeof m;"object"==p||"function"==p?f.has(m)?p=f.get(m):(p=""+ ++k,f.set(m,p)):p="p_"+m;var r=l.C[p];if(r&&ta(l.C,p))for(var y=0;y<r.length;y++){var z=r[y];if(m!==m&&z.key!==z.key||m===z.key)return{id:p,list:r,index:y,kc:z}}return{id:p,list:r,index:-1,kc:void 0}}
function e(l){this.C={};this.F=b();this.size=0;if(l){l=g.ka(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var l=Object.seal({x:4}),m=new a(g.ka([[l,"s"]]));if("s"!=m.get(l)||1!=m.size||m.get({x:4})||m.set({x:4},"t")!=m||2!=m.size)return!1;var p=m.entries(),r=p.next();if(r.done||r.value[0]!=l||"s"!=r.value[1])return!1;r=p.next();return r.done||4!=r.value[0].x||"t"!=r.value[1]||!p.next().done?!1:!0}catch(y){return!1}}())return a;
g.ja();var f=new WeakMap;e.prototype.set=function(l,m){l=0===l?0:l;var p=d(this,l);p.list||(p.list=this.C[p.id]=[]);p.kc?p.kc.value=m:(p.kc={next:this.F,previous:this.F.previous,head:this.F,key:l,value:m},p.list.push(p.kc),this.F.previous.next=p.kc,this.F.previous=p.kc,this.size++);return this};
e.prototype["delete"]=function(l){l=d(this,l);return l.kc&&l.list?(l.list.splice(l.index,1),l.list.length||delete this.C[l.id],l.kc.previous.next=l.kc.next,l.kc.next.previous=l.kc.previous,l.kc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(l){return!!d(this,l).kc};
e.prototype.get=function(l){return(l=d(this,l).kc)&&l.value};
e.prototype.entries=function(){return c(this,function(l){return[l.key,l.value]})};
e.prototype.keys=function(){return c(this,function(l){return l.key})};
e.prototype.values=function(){return c(this,function(l){return l.value})};
e.prototype.forEach=function(l,m){for(var p=this.entries(),r;!(r=p.next()).done;)r=r.value,l.call(m,r[1],r[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var k=0;return e});
pa("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push([d,b[d]]);return c}});
pa("Set",function(a){function b(c){this.C=new Map;if(c){c=g.ka(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(g.ka([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
g.ja();b.prototype.add=function(c){c=0===c?0:c;this.C.set(c,c);this.size=this.C.size;return this};
b.prototype["delete"]=function(c){c=this.C["delete"](c);this.size=this.C.size;return c};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(c){return this.C.has(c)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.C.forEach(function(f){return c.call(d,f,f,e)})};
return b});
pa("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
pa("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var k=d[f];if(k===b||Object.is(k,b))return!0}return!1}});
pa("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ra(this,b,"includes").indexOf(b,c||0)}});
var uca=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
pa("Reflect.construct",function(){return uca});
pa("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var k=0;!(f=b.next()).done;)e.push(c.call(d,f.value,k++))}else for(f=b.length,k=0;k<f;k++)e.push(c.call(d,b[k],k));return e}});
pa("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
pa("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
pa("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
pa("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push(b[d]);return c}});
g.dm=g.dm||{};g.q=this||self;caa=/^[\w+/_-]+[=]{0,2}$/;va=null;Fa="closure_uid_"+(1E9*Math.random()>>>0);daa=0;g.cd=Date.now||function(){return+new Date};g.x(g.Ha,Error);g.Ha.prototype.name="CustomError";g.La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.vca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.al=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k="string"===typeof a?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.em=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Td=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.v)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.B)(a,function(f,k){e=b.call(d,e,f,k,a)});
return e};
g.fm=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.gm=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};g.wca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.xca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.hm=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.fb.prototype.Ld=!0;g.fb.prototype.Tc=function(){return this.C};
var eb={},db={},Aaa=g.hb("");var jb;g.kb.prototype.Ld=!0;g.kb.prototype.Tc=function(){return this.F.toString()};
g.kb.prototype.Tk=!0;g.kb.prototype.C=function(){return 1};
jb={};g.ib={};var qb,rb,sb,tb,ub,vb,iaa;g.yb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
qb=/&/g;rb=/</g;sb=/>/g;tb=/"/g;ub=/'/g;vb=/\x00/g;iaa=/[\x00&<>"']/;g.Db.prototype.Ld=!0;g.Db.prototype.Tc=function(){return this.F.toString()};
g.Db.prototype.Tk=!0;g.Db.prototype.C=function(){return 1};
var kaa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,jaa=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Hb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Cb={},Bb={};g.Lb.prototype.Ld=!0;g.Kb={};g.Lb.prototype.Tc=function(){return this.C};
g.im=g.Mb("");g.jm=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.km=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Ob.prototype.Ld=!0;g.Nb={};g.Ob.prototype.Tc=function(){return this.C};
g.yca=g.Pb("");a:{var lm=g.q.navigator;if(lm){var mm=lm.userAgent;if(mm){g.Qb=mm;break a}}g.Qb=""};g.Yb.prototype.Tk=!0;g.Yb.prototype.C=function(){return this.D};
g.Yb.prototype.Ld=!0;g.Yb.prototype.Tc=function(){return this.F.toString()};
var Xb={};g.cc("<!DOCTYPE html>",0);g.xe=g.cc("",0);g.nm=g.cc("<br>",0);g.zca=g.Sa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.Zb(g.xe);return!b.parentElement});g.jc=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.oc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.zc=/#|$/;g.Dc[" "]=g.xa;var vm,laa,zm;g.om=g.Rb("Opera");g.Gf=g.Sb();g.pm=g.Rb("Edge");g.qm=g.pm||g.Gf;g.rm=g.Rb("Gecko")&&!(g.xb(g.Qb.toLowerCase(),"webkit")&&!g.Rb("Edge"))&&!(g.Rb("Trident")||g.Rb("MSIE"))&&!g.Rb("Edge");g.sm=g.xb(g.Qb.toLowerCase(),"webkit")&&!g.Rb("Edge");g.tm=g.Rb("Macintosh");g.um=g.Rb("Windows");g.Aca=g.Rb("Linux")||g.Rb("CrOS");g.Bca=g.Rb("Android");g.Cca=Bc();g.Dca=g.Rb("iPad");g.Eca=g.Rb("iPod");g.Fca=g.Cc();
a:{var wm="",xm=function(){var a=g.Qb;if(g.rm)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.pm)return/Edge\/([\d\.]+)/.exec(a);if(g.Gf)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.sm)return/WebKit\/(\S+)/.exec(a);if(g.om)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
xm&&(wm=xm?xm[1]:"");if(g.Gf){var ym=Fc();if(null!=ym&&ym>parseFloat(wm)){vm=String(ym);break a}}vm=wm}g.Gc=vm;laa={};if(g.q.document&&g.Gf){var Am=Fc();zm=Am?Am:parseInt(g.Gc,10)||void 0}else zm=void 0;g.Ic=zm;g.Bm=Tb();g.Cm=Bc()||g.Rb("iPod");g.Dm=g.Rb("iPad");g.Gca=g.Wb();g.Hm=Ub();g.Im=g.Vb()&&!g.Cc();var Lc={},Oc=null;g.Pc.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.Pc.prototype[Symbol.iterator]=function(){return this});g.Uc="function"==typeof Uint8Array;g.Qc.prototype.Yc=function(){Rc(this);return this.ec};
g.Qc.prototype.F=g.Uc?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return g.Mc(this)};
try{return JSON.stringify(this.ec&&this.Yc(),Sc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.Yc(),Sc)};
g.Qc.prototype.toString=function(){Rc(this);return this.ec.toString()};
g.Qc.prototype.clone=function(){return new this.constructor(Tc(this.Yc()))};g.Jm=document;g.Kd=window;var Xc={};g.h=g.Yc.prototype;g.h.isEnabled=function(){return navigator.cookieEnabled};
g.h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.zR;d=c.secure||!1;var f=c.domain||void 0;var k=c.path||void 0;var l=c.yl}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===l&&(l=-1);c=f?";domain="+f:"";k=k?";path="+k:"";d=d?";secure":"";l=0>l?"":0==l?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.cd)()+1E3*l)).toUTCString();this.C.cookie=a+"="+b+c+k+l+d+(null!=e?";samesite="+
e:"")};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.yb)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{yl:0,path:b,domain:c});return d};
g.h.xc=function(){return g.Zc(this).keys};
g.h.Eb=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Db=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.sd=g.ba(3);g.h.clear=function(){for(var a=g.Zc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.hi=new g.Yc("undefined"==typeof document?null:document);g.Km={Ha:["BC","AD"],La:["Before Christ","Anno Domini"],Ma:"JFMAMJJASOND".split(""),Na:"JFMAMJJASOND".split(""),wa:"January February March April May June July August September October November December".split(" "),sa:"January February March April May June July August September October November December".split(" "),xa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ca:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ea:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Ka:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ba:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Da:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Pa:"SMTWTFS".split(""),Oa:"SMTWTFS".split(""),Ja:["Q1","Q2","Q3","Q4"],Ia:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Aa:["AM","PM"],ra:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],za:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Ga:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],ua:6,Fa:[5,6],va:5};
g.Lm=g.Km;g.Lm=g.Km;g.h=g.dd.prototype;g.h.we=g.Lm.ua;g.h.Og=g.Lm.va;g.h.clone=function(){var a=new g.dd(this.date);a.we=this.we;a.Og=this.Og;return a};
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
g.h.add=function(a){if(a.C||a.months){var b=this.getMonth()+a.months+12*a.C,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);var d=Math.min(g.$c(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),bd(this,a.getDate()))};
g.h.be=function(a){return[this.getFullYear(),g.kc(this.getMonth()+1,2),g.kc(this.getDate(),2)].join(a?"-":"")+""};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){return this.be()};
g.h.valueOf=function(){return this.date.valueOf()};var oaa;oaa=!g.Gf||g.Jc(9);g.Hca=!g.rm&&!g.Gf||g.Gf&&g.Jc(9)||g.rm&&g.Hc("1.9.1");g.Mm=g.Gf&&!g.Hc("9");g.Ica=g.Gf||g.om||g.sm;g.h=g.ed.prototype;g.h.clone=function(){return new g.ed(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.ed&&g.fd(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.hd.prototype;g.h.clone=function(){return new g.hd(this.width,this.height)};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!(this.width*this.height)};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var kd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Jca={VJ:"allow-forms",WJ:"allow-modals",XJ:"allow-orientation-lock",YJ:"allow-pointer-lock",ZJ:"allow-popups",aK:"allow-popups-to-escape-sandbox",bK:"allow-presentation",cK:"allow-same-origin",dK:"allow-scripts",eK:"allow-top-navigation",fK:"allow-top-navigation-by-user-activation"},qaa=g.Sa(function(){return g.Bd(Jca)});g.C.prototype.Qc=!1;g.C.prototype.pb=function(){return this.Qc};
g.C.prototype.dispose=function(){this.Qc||(this.Qc=!0,this.X())};
g.C.prototype.X=function(){if(this.xf)for(;this.xf.length;)this.xf.shift()()};/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
g.ya(g.Fd);g.h=g.Gd.prototype;g.h.clone=function(){return new g.Gd(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.ed?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.Nm=g.rm?"MozUserSelect":g.sm||g.pm?"WebkitUserSelect":null;g.Om=!!window.google_async_iframe_id;g.Pm=g.Om&&window.parent||window;g.mb(g.hb("//web.archive.org/web/20200501000036/https://fonts.googleapis.com/css"));g.Qh=(new Date).getTime();Sd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
Sd.prototype.get=function(a){return!!this.C[a]};g.Wd.prototype.stopPropagation=function(){this.F=!0};
g.Wd.prototype.preventDefault=function(){this.defaultPrevented=!0};var le,Lca,yaa;g.Kca=!g.Gf||g.Jc(9);le=!g.Gf||g.Jc(9);Lca=g.Gf&&!g.Hc("9");yaa=function(){if(!g.q.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.q.addEventListener("test",g.xa,b),g.q.removeEventListener("test",g.xa,b)}catch(c){}return a}();g.Qm=g.sm?"webkitTransitionEnd":g.om?"otransitionend":"transitionend";g.x(g.Xd,g.Wd);var Mca={2:"touch",3:"pen",4:"mouse"};
g.Xd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.rm&&(g.Ec(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.tm?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Mca[a.pointerType]||"";this.state=
a.state;this.yc=a;a.defaultPrevented&&this.preventDefault()};
g.Xd.prototype.stopPropagation=function(){g.Xd.V.stopPropagation.call(this);this.yc.stopPropagation?this.yc.stopPropagation():this.yc.cancelBubble=!0};
g.Xd.prototype.preventDefault=function(){g.Xd.V.preventDefault.call(this);var a=this.yc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Lca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Yd="closure_listenable_"+(1E6*Math.random()|0),vaa=0;g.h=g.ae.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=ce(a,b,d,e);-1<k?(b=a[k],c||(b.Rh=!1)):(b=new waa(b,this.src,f,!!d,e),b.Rh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ce(e,b,c,d);return-1<b?($d(e[b]),g.Oa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,$d(d[e]);delete this.listeners[c];this.C--}return b};
g.h.Xf=g.ba(5);g.h.We=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=ce(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return g.Ua(this.listeners,function(f){for(var k=0;k<f.length;++k)if(!(c&&f[k].type!=d||e&&f[k].capture!=b))return!0;return!1})};var ie="closure_lm_"+(1E6*Math.random()|0),oe={},ke=0,re="__closure_events_fn_"+(1E9*Math.random()>>>0);g.x(g.se,g.C);g.se.prototype[Yd]=!0;g.h=g.se.prototype;g.h.ri=function(){return this.Ql};
g.h.vh=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.ee(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.me(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.ri();if(b){var c=[];for(var d=1;b;b=b.ri())c.push(b),++d}b=this.Jt;d=a.type||a;if("string"===typeof a)a=new g.Wd(a,b);else if(a instanceof g.Wd)a.target=a.target||b;else{var e=a;a=new g.Wd(d,b);g.cb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=te(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=te(k,d,!0,a)&&e,a.F||(e=te(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=te(k,d,!1,a)&&e;return e};
g.h.X=function(){g.se.V.X.call(this);this.removeAllListeners();this.Ql=null};
g.h.O=function(a,b,c,d){return this.ud.add(String(a),b,!1,c,d)};
g.h.Ae=function(a,b,c,d){return this.ud.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.ud.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.ud?this.ud.removeAll(a):0};
g.h.Xf=g.ba(4);g.h.We=function(a,b,c,d){return this.ud.We(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.ud.hasListener(void 0!==a?String(a):void 0,b)};ue.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var Fe;var Ge=new ue(function(){return new ze},function(a){a.reset()});
ye.prototype.add=function(a,b){var c=Ge.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
ye.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
ze.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
ze.prototype.reset=function(){this.next=this.scope=this.lc=null};var Ae,Be=!1,Ce=new ye;Le.prototype.reset=function(){this.context=this.onRejected=this.D=this.C=null;this.F=!1};
var Me=new ue(function(){return new Le},function(a){a.reset()});
g.Ke.prototype.then=function(a,b,c){return Re(this,g.Da(a)?a:null,g.Da(b)?b:null,c)};
g.He(g.Ke);g.Ke.prototype.cancel=function(a){if(0==this.C){var b=new g.Ye(a);De(function(){Te(this,b)},this)}};
g.Ke.prototype.Y=function(a){this.C=0;g.Je(this,2,a)};
g.Ke.prototype.N=function(a){this.C=0;g.Je(this,3,a)};
g.Ke.prototype.J=function(){for(var a;a=Ue(this);)Ve(this,a,this.C,this.M);this.L=!1};
var $e=we;g.x(g.Ye,g.Ha);g.Ye.prototype.name="cancel";g.x(g.cf,g.C);g.h=g.cf.prototype;g.h.rb=0;g.h.X=function(){g.cf.V.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.rb=g.af(this.Pb,void 0!==a?a:this.D)};
g.h.stop=function(){this.isActive()&&g.bf(this.rb);this.rb=0};
g.h.isActive=function(){return 0!=this.rb};
g.h.zk=function(){this.rb=0;this.C&&this.C.call(this.F)};g.x(df,Faa);df.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
df.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)ef(this,a,d),d+=this.F;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){ef(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){ef(this,e);f=0;break}}this.D=f;this.H+=b}};
df.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;ef(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.jf="StopIteration"in g.q?g.q.StopIteration:{message:"StopIteration",stack:""};g.hf.prototype.next=function(){throw g.jf;};
g.hf.prototype.ad=function(){return this};g.h=g.nf.prototype;g.h.Db=function(){return this.D};
g.h.Eb=g.ba(0);g.h.xc=function(){g.pf(this);return this.C.concat()};
g.h.sd=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Db())return!1;var c=b||Haa;g.pf(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Ie=this.D=this.C.length=0};
g.h.remove=function(a){return g.of(this.F,a)?(delete this.F[a],this.D--,this.Ie++,this.C.length>2*this.D&&g.pf(this),!0):!1};
g.h.get=function(a,b){return g.of(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.of(this.F,a)||(this.D++,this.C.push(a),this.Ie++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.xc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.nf(this)};
g.h.ad=function(a){g.pf(this);var b=0,c=this.Ie,d=this,e=new g.hf;e.next=function(){if(c!=d.Ie)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.jf;var f=d.C[b++];return a?f:d.F[f]};
return e};var tf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.x(g.uf,g.C);g.h=g.uf.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.od=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.xa):(c&&g.Pa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Kaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.od(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.B)(b,this.od,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Db=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Db(b);return a};
g.h.X=function(){g.uf.V.X.call(this);this.clear();this.D.length=0};g.wf.prototype.set=function(a,b){void 0===b?this.C.remove(a):this.C.set(a,g.rf(b))};
g.wf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.wf.prototype.remove=function(a){this.C.remove(a)};g.x(xf,g.wf);xf.prototype.set=function(a,b){xf.V.set.call(this,a,Af(b))};
xf.prototype.F=function(a){a=xf.V.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
xf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.x(g.Bf,xf);g.Bf.prototype.set=function(a,b,c){if(b=Af(b)){if(c){if(c<(0,g.cd)()){g.Bf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.cd)()}g.Bf.V.set.call(this,a,b)};
g.Bf.prototype.F=function(a,b){var c=g.Bf.V.F.call(this,a);if(c)if(!b&&g.Cf(c))g.Bf.prototype.remove.call(this,a);else return c};g.x(Df,Laa);Df.prototype.Db=function(){var a=0;g.lf(this.ad(!0),function(){a++});
return a};
Df.prototype.clear=function(){var a=Gaa(this.ad(!0)),b=this;(0,g.B)(a,function(c){b.remove(c)})};g.x(g.Ef,Df);g.h=g.Ef.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Db=function(){return this.C.length};
g.h.ad=function(a){var b=0,c=this.C,d=new g.hf;d.next=function(){if(b>=c.length)throw g.jf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.x(g.Ff,g.Ef);g.x(If,Df);var Maa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Hf=null;g.h=If.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(Jf(a),b);Kf(this)};
g.h.get=function(a){a=this.C.getAttribute(Jf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(Jf(a));Kf(this)};
g.h.Db=function(){return Lf(this).attributes.length};
g.h.ad=function(a){var b=0,c=Lf(this).attributes,d=new g.hf;d.next=function(){if(b>=c.length)throw g.jf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){for(var a=Lf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Kf(this)};g.x(Mf,Df);Mf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
Mf.prototype.get=function(a){return this.F.get(this.C+a)};
Mf.prototype.remove=function(a){this.F.remove(this.C+a)};
Mf.prototype.ad=function(a){var b=this.F.ad(!0),c=this,d=new g.hf;d.next=function(){for(var e=b.next();e.substr(0,c.C.length)!=c.C;)e=b.next();return a?e.substr(c.C.length):c.F.get(e)};
return d};g.Pf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.t("yt.config_",g.Pf,void 0);var Zf={};var Naa=[];var Nca=g.u("ytPubsubPubsubInstance")||new g.uf;g.uf.prototype.subscribe=g.uf.prototype.subscribe;g.uf.prototype.unsubscribeByKey=g.uf.prototype.od;g.uf.prototype.publish=g.uf.prototype.oa;g.uf.prototype.clear=g.uf.prototype.clear;g.t("ytPubsubPubsubInstance",Nca,void 0);var hg=g.u("ytPubsubPubsubSubscribedKeys")||{};g.t("ytPubsubPubsubSubscribedKeys",hg,void 0);var jg=g.u("ytPubsubPubsubTopicToKeys")||{};g.t("ytPubsubPubsubTopicToKeys",jg,void 0);var ig=g.u("ytPubsubPubsubIsSynchronous")||{};
g.t("ytPubsubPubsubIsSynchronous",ig,void 0);var Qaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Raa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;var Rm;Rm=window;g.Cg=Rm.ytcsi&&Rm.ytcsi.now?Rm.ytcsi.now:Rm.performance&&Rm.performance.timing&&Rm.performance.now&&Rm.performance.timing.navigationStart?function(){return Rm.performance.timing.navigationStart+Rm.performance.now()}:function(){return(new Date).getTime()};var Saa,Hg,Ig,Gg,ug,Bg,xg;Saa=g.Vf("initial_gel_batch_timeout",1E3);Hg=Math.pow(2,16)-1;g.Bh=10;Ig=null;Gg=0;ug=void 0;g.sg=0;g.tg=0;g.Ah=0;Bg=!0;xg=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.t("ytLoggingTransportLogPayloadsQueue_",xg,void 0);g.wg=g.u("ytLoggingTransportGELQueue_")||new Map;g.t("ytLoggingTransportGELQueue_",g.wg,void 0);var Eg=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};g.t("ytLoggingTransportTokensToCttTargetIds_",Eg,void 0);var Yaa,Pg,Qg,Rg,Vaa,Waa,Mg,Sg;Yaa=g.Vf("initial_gel_batch_timeout",1E3);Pg=Math.pow(2,16)-1;g.Dh=10;Qg=null;Rg=0;Vaa={log_event:"events",log_interaction:"interactions"};Waa=new Set(["log_event"]);Mg={};g.Jg=0;g.Kg=0;g.Ch=0;Sg=!0;g.Lg=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.t("ytLoggingTransportLogPayloadsQueue_",g.Lg,void 0);var Og=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};g.t("ytLoggingTransportTokensToCttTargetIds_",Og,void 0);var Oca=0,Zaa=g.sm?"webkit":g.rm?"moz":g.Gf?"ms":g.om?"o":"",Xg=g.u("ytDomDomGetNextId")||function(){return++Oca};
g.t("ytDomDomGetNextId",Xg,void 0);var $aa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.$g.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.$g.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.$g.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var dh=g.u("ytEventsEventsListeners")||{};g.t("ytEventsEventsListeners",dh,void 0);var fh=g.u("ytEventsEventsCounter")||{count:0};g.t("ytEventsEventsCounter",fh,void 0);var gh=g.Sa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.Sm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Tm="Microsoft Internet Explorer"==navigator.appName;g.x(g.kh,g.C);g.kh.prototype.Y=function(a){this.C=new g.ed(g.bh(a),g.ch(a))};
g.kh.prototype.M=function(){if(this.C){var a=g.Sm();if(0!=this.D){var b=g.gd(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.Pb();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.kh.prototype.X=function(){g.fg(this.N);g.hh(this.J)};g.n(qh,aba);qh.prototype.start=function(){var a=g.u("yt.scheduler.instance.start");a&&a()};
qh.prototype.pause=function(){var a=g.u("yt.scheduler.instance.pause");a&&a()};
g.ya(qh);qh.getInstance();var xh={};var zh=g.u("ytLoggingGelSequenceIdObj_")||{};g.t("ytLoggingGelSequenceIdObj_",zh,void 0);g.Mh=new function(){var a=window.document;this.C=window;this.F=a};
g.t("yt.ads_.signals_.getAdSignalsString",function(a){return g.Gh(Ph(a))},void 0);(0,g.cd)();var Rh=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Uh,dba,Zh;Uh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};dba="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Zh=!1;g.Um=$h;g.li.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.cd)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.rf(b))}catch(f){return}else e=escape(b);g.ii(a,e,c,this.F)};
g.li.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.ji(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.li.prototype.remove=function(a){this.C&&this.C.remove(a);g.ki(a,"/",this.F)};var mi=new g.li("yt.innertube");g.pi.prototype.isReady=function(){!this.C&&di()&&(this.C=ei());return!!this.C};g.n(g.ri,Error);var wi=new Set,ui=0;g.xi.prototype.initialize=function(a,b,c,d,e,f){var k=this;f=void 0===f?!1:f;b?(this.F=!0,g.qg(b,function(){k.F=!1;window.botguard?yi(k,c,d,f):(g.rg(b),g.ti(new g.ri("Unable to load Botguard","from "+b)))})):a&&(eval(a),window.botguard?yi(this,c,d,f):g.ti(Error("Unable to load Botguard from JS")))};
g.xi.prototype.Md=function(){return!!this.C};
g.xi.prototype.dispose=function(){this.C=null};g.Ai=new g.xi;Bi.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.Ie(a)?a:g.Di(a)):2===this.F&&b?(a=b.call(c,this.C),g.Ie(a)?a:g.Ci(a)):this};
Bi.prototype.getValue=function(){return this.C};
g.He(Bi);g.n(Ei,g.C);Ei.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
Ei.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.callback)}g.C.prototype.X.call(this)};Fi.prototype.clone=function(){var a=new Fi,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.za(c)?a[b]=g.$a(c):a[b]=c}return a};var Hi=(0,g.cd)().toString();var Ji=g.u("ytLoggingDocDocumentNonce_")||Ii();g.t("ytLoggingDocDocumentNonce_",Ji,void 0);g.Li.prototype.toString=function(){return JSON.stringify(g.Mi(this))};g.t("yt_logging_screen.getRootVeType",Pi,void 0);g.t("yt_logging_screen.getCurrentCsn",g.Si,void 0);g.t("yt_logging_screen.getCttAuthInfo",g.Ti,void 0);g.t("yt_logging_screen.setCurrentScreen",g.Ui,void 0);g.Zi.prototype.toString=function(){return this.topic};var Pca=g.u("ytPubsub2Pubsub2Instance")||new g.uf;g.uf.prototype.subscribe=g.uf.prototype.subscribe;g.uf.prototype.unsubscribeByKey=g.uf.prototype.od;g.uf.prototype.publish=g.uf.prototype.oa;g.uf.prototype.clear=g.uf.prototype.clear;g.t("ytPubsub2Pubsub2Instance",Pca,void 0);var bj=g.u("ytPubsub2Pubsub2SubscribedKeys")||{};g.t("ytPubsub2Pubsub2SubscribedKeys",bj,void 0);var dj=g.u("ytPubsub2Pubsub2TopicToKeys")||{};g.t("ytPubsub2Pubsub2TopicToKeys",dj,void 0);
var cj=g.u("ytPubsub2Pubsub2IsAsync")||{};g.t("ytPubsub2Pubsub2IsAsync",cj,void 0);g.t("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.n(gj,g.Yi);var oba=new g.Zi("screen-created",gj),hj=[],ij=0;var oj,mj;oj=0;g.nj=null;mj=null;g.h=g.qj.prototype;g.h.mG=function(){this.Md()||this.init()};
g.h.enable=function(){this.C=1;(0,g.B)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.mG,this),this.subscribe("dispose-"+a,this.dispose,this),g.F("PAGE_NAME")==a&&g.rj(this))},this)};
g.h.init=function(){g.oh(this.F);this.C=2;this.L&&this.L()};
g.h.Md=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.oh(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.$f(a)}};
g.h.subscribe=function(a,b,c){a=g.kg(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.lg(this.G);this.G=[]};var sj=g.u("yt.modules.registry_")||{};g.t("yt.modules.registry_",sj,void 0);g.vj=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.t("yt.msgs_",g.vj,void 0);var Bj={},sba=0;var tba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.n(Pj,g.C);g.h=Pj.prototype;g.h.getId=function(){return this.ha};
g.h.loadNewVideoConfig=function(a){if(!this.pb()){this.aa&&(g.eg(this.aa),this.aa=0);this.nb=a=g.Gi(a);this.C=a.clone();Nj(this);this.qa||(this.qa=Yj(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Id(this.L,Number(a)||a);if(a=this.C.attrs.height)this.L.style.height=g.Hd(Number(a)||a,!0);Oj(this);this.M&&Qj(this)}};
g.h.ov=function(){return this.nb};
g.h.mz=function(){return this.M};
g.h.Lh=function(a,b){var c=this,d=Yj(this,b);if(d){if(!g.Ma(this.Od,a)&&!this.G[a]){var e=vba(this,a);this.N&&this.N(a,e)}this.Y.subscribe(a,d);"onReady"==a&&this.M&&g.cg(function(){d(c.api)},0)}};
g.h.aG=function(a,b){if(!this.pb()){var c=Yj(this,b);c&&g.vf(this.Y,a,c)}};
g.h.It=function(a){g.H("a11y-announce",a)};
g.h.rD=function(a){g.H("WATCH_LATER_VIDEO_ADDED",a)};
g.h.sD=function(a){g.H("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Bv=function(){return this.la||(Rj(this)?"html5":null)};
g.h.vv=function(){return this.kb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.pg(Sj(this));spf.script.ignore(b,a)}g.eg(this.sb);this.T=!1};
g.h.X=function(){Vj(this);if(this.H&&this.C&&this.H.destroy)try{this.H.destroy()}catch(b){g.$f(b)}this.ib=null;for(var a in this.G)g.q[this.G[a]]=null;this.nb=this.C=this.api=null;delete this.Ya;delete this.L;g.C.prototype.X.call(this)};g.ak={};g.Zj="player_uid_"+(1E9*Math.random()>>>0);var hk=null;g.Vm=window.performance&&window.performance.memory;g.Jl={};g.n(ik,g.Yi);g.n(jk,g.Yi);var zba=new g.Zi("aft-recorded",ik),Dba=new g.Zi("timing-sent",jk);var Wm=window,mk=Wm.performance||Wm.mozPerformance||Wm.msPerformance||Wm.webkitPerformance||new yba;var xk=!1;var Ek=g.u("ytLoggingLatencyUsageStats_")||{};g.t("ytLoggingLatencyUsageStats_",Ek,void 0);Ck.prototype.tick=function(a,b,c){Fk(this,"tick_"+a+"_"+b)||g.qi("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Ck.prototype.info=function(a,b){var c=Object.keys(a).join("");Fk(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,g.qi("latencyActionInfo",a))};
Ck.prototype.span=function(a,b){var c=Object.keys(a).join("");Fk(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,g.qi("latencyActionSpan",a))};var Xm={},Yk=(Xm.ad_to_ad="LATENCY_ACTION_AD_TO_AD",Xm.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",Xm.app_startup="LATENCY_ACTION_APP_STARTUP",Xm["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",Xm["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",Xm["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",Xm.browse="LATENCY_ACTION_BROWSE",Xm.channels="LATENCY_ACTION_CHANNELS",Xm.channel="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",Xm["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
Xm["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",Xm["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",Xm["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",Xm["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",Xm["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",Xm["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",Xm.chips="LATENCY_ACTION_CHIPS",Xm["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
Xm["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",Xm.embed="LATENCY_ACTION_EMBED",Xm.home="LATENCY_ACTION_HOME",Xm.library="LATENCY_ACTION_LIBRARY",Xm.live="LATENCY_ACTION_LIVE",Xm.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",Xm.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",Xm.prebuffer="LATENCY_ACTION_PREBUFFER",Xm.prefetch="LATENCY_ACTION_PREFETCH",Xm.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",Xm.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",
Xm.results="LATENCY_ACTION_RESULTS",Xm.search_ui="LATENCY_ACTION_SEARCH_UI",Xm.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",Xm.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",Xm.settings="LATENCY_ACTION_SETTINGS",Xm.tenx="LATENCY_ACTION_TENX",Xm.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",Xm.watch="LATENCY_ACTION_WATCH",Xm.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",Xm["watch,watch7"]="LATENCY_ACTION_WATCH",Xm["watch,watch7_html5"]="LATENCY_ACTION_WATCH",Xm["watch,watch7ad"]="LATENCY_ACTION_WATCH",
Xm["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",Xm.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",Xm.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",Xm["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",Xm["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",Xm["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",Xm["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",Xm["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",Xm["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
Xm["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",Xm.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",Xm.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",Xm),Ym={},Jk=(Ym.ad_allowed="adTypesAllowed",Ym.yt_abt="adBreakType",Ym.ad_cpn="adClientPlaybackNonce",Ym.ad_docid="adVideoId",Ym.yt_ad_an="adNetworks",Ym.ad_at="adType",Ym.browse_id="browseId",Ym.p="httpProtocol",Ym.t="transportProtocol",Ym.cpn="clientPlaybackNonce",Ym.ccs="creatorInfo.creatorCanaryState",
Ym.cseg="creatorInfo.creatorSegment",Ym.csn="clientScreenNonce",Ym.docid="videoId",Ym.GetHome_rid="requestIds",Ym.GetSearch_rid="requestIds",Ym.GetPlayer_rid="requestIds",Ym.GetWatchNext_rid="requestIds",Ym.GetBrowse_rid="requestIds",Ym.GetLibrary_rid="requestIds",Ym.is_continuation="isContinuation",Ym.is_nav="isNavigation",Ym.b_p="kabukiInfo.browseParams",Ym.is_prefetch="kabukiInfo.isPrefetch",Ym.is_secondary_nav="kabukiInfo.isSecondaryNav",Ym.prev_browse_id="kabukiInfo.prevBrowseId",Ym.query_source=
"kabukiInfo.querySource",Ym.voz_type="kabukiInfo.vozType",Ym.yt_lt="loadType",Ym.mver="creatorInfo.measurementVersion",Ym.yt_ad="isMonetized",Ym.nr="webInfo.navigationReason",Ym.nrsu="navigationRequestedSameUrl",Ym.ncnp="webInfo.nonPreloadedNodeCount",Ym.pnt="performanceNavigationTiming",Ym.prt="playbackRequiresTap",Ym.plt="playerInfo.playbackType",Ym.pis="playerInfo.playerInitializedState",Ym.paused="playerInfo.isPausedOnLoad",Ym.yt_pt="playerType",Ym.fmt="playerInfo.itag",Ym.yt_pl="watchInfo.isPlaylist",
Ym.yt_pre="playerInfo.preloadType",Ym.yt_ad_pr="prerollAllowed",Ym.pa="previousAction",Ym.yt_red="isRedSubscriber",Ym.rce="mwebInfo.responseContentEncoding",Ym.scrh="screenHeight",Ym.scrw="screenWidth",Ym.st="serverTimeMs",Ym.aq="tvInfo.appQuality",Ym.br_trs="tvInfo.bedrockTriggerState",Ym.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Ym.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Ym.label="tvInfo.label",Ym.is_mdx="tvInfo.isMdx",Ym.preloaded="tvInfo.isPreloaded",Ym.upg_player_vis=
"playerInfo.visibilityState",Ym.query="unpluggedInfo.query",Ym.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Ym.yt_vst="videoStreamType",Ym.vph="viewportHeight",Ym.vpw="viewportWidth",Ym.yt_vis="isVisible",Ym.rcl="mwebInfo.responseContentLength",Ym.GetSettings_rid="requestIds",Ym.GetTrending_rid="requestIds",Ym.GetMusicSearchSuggestions_rid="requestIds",Ym.REQUEST_ID="requestIds",Ym),Bba="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Zm={},Kk=(Zm.ccs="CANARY_STATE_",Zm.mver="MEASUREMENT_VERSION_",Zm.pis="PLAYER_INITIALIZED_STATE_",Zm.yt_pt="LATENCY_PLAYER_",Zm.pa="LATENCY_ACTION_",Zm.yt_vst="VIDEO_STREAM_TYPE_",Zm),Cba="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");if(g.Uf("overwrite_polyfill_on_logging_lib_loaded")){var $m=window;$m.ytcsi&&($m.ytcsi.info=Nk)};var Xk={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},Eba=(0,g.v)(mk.clearResourceTimings||
mk.webkitClearResourceTimings||mk.mozClearResourceTimings||mk.msClearResourceTimings||mk.oClearResourceTimings||g.xa,mk),an=window;g.Uf("csi_on_gel")&&an.ytcsi&&(an.ytcsi.tick=Zk);var il=0,el=[],hl=[],bl=0,fl={},gl={},cl=new g.cf(Pba,1E3);var kl=["server_prefetched_vast","vmap"];var ml;var ql=null,tl=[];var xl,Pl,Ol,zl,yl,Wba,Zba,Xba,Yba,Kl;zl=0;yl=0;Wba=[900,60,"waiting"];Zba=[500,99,"waiting"];Xba=[300,60,"waiting"];Yba=[400,99,"waiting"];Kl=[300,101,"done"];var Wl=!1;window.yt=window.yt||{};g.t("yt.setConfig",g.Qf,void 0);g.t("yt.pushConfigArray",Rf,void 0);g.t("yt.getConfig",g.F,void 0);g.t("yt.config.set",g.Qf,void 0);g.t("yt.config.pushArray",Rf,void 0);g.t("yt.config.get",g.F,void 0);g.t("yt.hasMsg",g.xj,void 0);g.t("yt.setMsg",wj,void 0);g.t("yt.setGoogMsg",yj,void 0);g.t("yt.msgs.has",g.xj,void 0);g.t("yt.msgs.set",wj,void 0);g.t("yt.msgs.setGoog",yj,void 0);g.t("yt.pubsub.publish",g.H,void 0);g.t("yt.pubsub.subscribe",g.kg,void 0);g.t("ytcsi.tick",Zk,void 0);
g.x(Zl,g.qj);
Zl.prototype.enable=function(){window.onload=Uba;window.onunload=Vba;window.onerror=Paa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",vl),window.addEventListener("spfhistory",wl),window.addEventListener("spfrequest",Bl),window.addEventListener("spfpartprocess",Fl),window.addEventListener("spfpartdone",Gl),window.addEventListener("spfprocess",Hl),window.addEventListener("spfdone",Ll),window.addEventListener("spferror",Ml),window.addEventListener("spfreload",Nl),
window.addEventListener("spfjsbeforeunload",$l)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",aca),this.subscribe("dispose",bca)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Zl.prototype.init=function(){Zl.V.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.F("PAGEFRAME_JS")){var b=g.F("PAGEFRAME_JS",void 0);var c=function(){var e=g.u("ytbin.www.pageframe.setup");e&&(window.ytPageFrameLoaded=!0,e())}}else a&&(a=g.u("yt.www.masthead.loadSearchbox"))&&a();
a=g.F("JS_COMMON_MODULE");var d=g.F("JS_PAGE_MODULES");d||(d=[a]);a=g.F("JS_DELAY_LOAD",0);0<a?(g.eg(this.D),this.D=g.cg(function(){b&&g.qg(b,c);spf.script.require(d)},a)):(b&&g.qg(b,c),spf.script.require(d));
g.t("yt.abuse.player.botguardInitialized",kba,void 0);g.t("yt.abuse.player.invokeBotguard",lba,void 0);g.t("yt.abuse.dclkstatus.checkDclkStatus",jba,void 0);g.t("yt.player.exports.navigate",g.Lj,void 0);g.t("yt.util.activity.init",g.wh,void 0);g.t("yt.util.activity.getTimeSinceActive",g.yh,void 0);g.t("yt.util.activity.setTimestamp",g.sh,void 0);pl(g.u("ytplayer.config"));g.u("ytspf.enabled")&&Sba();Iba();g.F("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.Uf("service_worker_enabled")?rca():pca())};
Zl.prototype.dispose=function(){g.eg(this.D);var a=g.u("ytbin.www.pageframe.cancelSetup");a&&a();g.fg(ml);if(a=g.ol())a.removeEventListener("onReady",nl),a.removeEventListener("onStateChange",nl);qk(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.G(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.jh(a);Zl.V.dispose.call(this)};
Zl.prototype.disable=function(){Zl.V.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",vl),window.removeEventListener("spfhistory",wl),window.removeEventListener("spfrequest",Bl),window.removeEventListener("spfpartprocess",Fl),window.removeEventListener("spfpartdone",Gl),window.removeEventListener("spfprocess",Hl),window.removeEventListener("spfdone",Ll),window.removeEventListener("spferror",Ml),window.removeEventListener("spfreload",Nl),window.removeEventListener("spfjsbeforeunload",
$l));window.onload=null;window.onunload=null;window.onerror=null};
g.uj(new Zl);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:00:36 May 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:56:39 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 651.464
  exclusion.robots: 0.086
  exclusion.robots.policy: 0.076
  cdx.remote: 0.059
  esindex: 0.009
  LoadShardBlock: 564.471 (3)
  PetaboxLoader3.datanode: 597.989 (5)
  load_resource: 240.403 (2)
  PetaboxLoader3.resolve: 126.996 (2)
*/