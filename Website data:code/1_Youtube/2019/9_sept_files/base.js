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

var _yt_www={};(function(g){var window=this;var ca,ka,la,ma,pa,oa,qa,ra,ta,ya,daa,eaa,Db,Xb,qc,jaa,uc,Bc,Fc,Gc,Hc,Pc,Qc,laa,naa,Nd,oaa,paa,Od,Pd,raa,Xd,Zd,$d,de,saa,ge,ne,me,uaa,qe,re,se,te,waa,ve,we,Ae,xaa,Be,Ie,Ke,yaa,Pe,Te,Ne,Le,Aaa,Se,Qe,Re,Ve,zaa,Baa,af,bf,ff,Caa,Daa,Eaa,mf,of,Gaa,tf,uf,vf,Haa,yf,Cf,Df,Ef,Ff,Gf,If,Jaa,Mf,Pf,Qf,Sf,Kaa,$f,lg,Naa,sg,ng,Oaa,ug,Paa,Qaa,Fg,Raa,Saa,Uaa,Lg,Vaa,Mg,Ng,Waa,Tg,Rg,Og,Vg,bh,oh,ph,$aa,Bh,Zaa,dba,Nh,Th,Uh,eba,$h,ai,hba,ii,pi,fba,vi,ui,iba,zi,Gi,Hi,Ii,Qi,Ui,Xi,Zi,jba,aj,kba,fj,ej,hj,dj,gj,pj,nj,qj,tj,
oj,rj,uj,nba,xj,mj,yj,oba,vj,wj,sj,pba,Ej,qba,rba,Jj,Kj,Lj,Mj,Oj,Pj,Nj,Qj,Sj,Vj,Yj,Tj,Zj,ak,yba,lk,dk,nk,ek,mk,bk,ok,fk,uba,sk,tk,vba,wba,ik,hk,ck,pk,kk,Bba,rk,Dba,Kba,Jba,Iba,Ak,Hba,Fba,Gba,Lba,Mba,Nba,Oba,Pk,Lk,Nk,Rk,Pba,Sk,Uk,Qba,Rba,Vk,Wk,al,dl,el,fl,jl,kl,ll,Yba,Zba,bl,$k,Xba,cl,pl,rl,ol,sl,ql,$ba,dca,aca,gca,cca,bca,eca,fca,ica,vl,hca,tl,jca,lca,nca,mca,kca,wl,xl,yl,fa,zl,baa,za,Ka,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
g.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
g.ea=function(a){if(!(a instanceof Array)){a=g.da(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
g.n=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.T=b.prototype};
ka=function(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}};
la=function(){la=function(){};
ia.Symbol||(ia.Symbol=aaa)};
ma=function(a,b){this.C=a;ja(this,"description",{configurable:!0,writable:!0,value:b})};
pa=function(){la();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return oa(ca(this))}});
pa=function(){}};
oa=function(a){pa();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a};
qa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
ra=function(a,b){pa();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ua=function(a){return void 0!==a};
g.va=function(a){return"string"==typeof a};
g.wa=function(a){return"boolean"==typeof a};
g.xa=function(a){return"number"==typeof a};
g.r=function(a,b,c){a=a.split(".");c=c||g.p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ua(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.Aa=function(a){if(a&&a!=g.p)return ya(a.document);null===za&&(za=ya(g.p.document));return za};
ya=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&baa.test(a)?a:""};
g.u=function(a,b){for(var c=a.split("."),d=b||g.p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.Ba=function(){};
g.Ca=function(a){a.Bc=void 0;a.getInstance=function(){return a.Bc?a.Bc:a.Bc=new a}};
g.Da=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Ea=function(a){return"array"==g.Da(a)};
g.Fa=function(a){var b=g.Da(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Ia=function(a){return"function"==g.Da(a)};
g.Ja=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.La=function(a){return a[Ka]||(a[Ka]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.v=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.v=daa:g.v=eaa;return g.v.apply(null,arguments)};
g.w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.x=function(a,b){function c(){}
c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.su=function(d,e,f){for(var k=Array(arguments.length-2),l=2;l<arguments.length;l++)k[l-2]=arguments[l];b.prototype[e].apply(d,k)}};
g.Ma=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ma);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Oa=function(a,b,c){b=g.Na(a,b,c);return 0>b?null:g.va(a)?a.charAt(b):a[b]};
g.Na=function(a,b,c){for(var d=a.length,e=g.va(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Qa=function(a,b){return 0<=(0,g.Pa)(a,b)};
g.Ra=function(a){return 0==a.length};
g.Ta=function(a,b){var c=(0,g.Pa)(a,b),d;(d=0<=c)&&g.Sa(a,c);return d};
g.Sa=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Ua=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Va=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Wa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Xa=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Ya=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Za=function(a,b){return null!==a&&b in a};
g.$a=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.ab=function(a){for(var b in a)return!1;return!0};
g.bb=function(a,b){b in a&&delete a[b]};
g.cb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.db=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.eb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.fb=function(a){var b=g.Da(a);if("object"==b||"array"==b){if(g.Ia(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.fb(a[c]);return b}return a};
g.hb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<gb.length;f++)c=gb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.kb=function(a,b){this.C=a===ib&&b||"";this.F=jb};
g.lb=function(a){return a instanceof g.kb&&a.constructor===g.kb&&a.F===jb?a.C:"type_error:Const"};
g.mb=function(a){return new g.kb(ib,a)};
g.ob=function(){this.F="";this.D=nb};
g.pb=function(a){if(a instanceof g.ob&&a.constructor===g.ob&&a.D===nb)return a.F;g.Da(a);return"type_error:TrustedResourceUrl"};
g.rb=function(a){return g.qb(g.lb(a))};
g.qb=function(a){var b=new g.ob;b.F=a;return b};
g.sb=function(a,b){return 0==a.lastIndexOf(b,0)};
g.tb=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.ub=function(a){return/^[\s\xa0]*$/.test(a)};
g.Bb=function(a,b){if(b)a=a.replace(vb,"&amp;").replace(wb,"&lt;").replace(xb,"&gt;").replace(yb,"&quot;").replace(zb,"&#39;").replace(Ab,"&#0;");else{if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(vb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(wb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(xb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(yb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(zb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ab,"&#0;"))}return a};
g.Eb=function(a,b){for(var c=0,d=(0,g.Cb)(String(a)).split("."),e=(0,g.Cb)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Db(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||Db(0==l[2].length,0==m[2].length)||Db(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Db=function(a,b){return a<b?-1:a>b?1:0};
g.Gb=function(){this.F="";this.D=Fb};
g.Ib=function(a){return g.Hb(a).toString()};
g.Hb=function(a){if(a instanceof g.Gb&&a.constructor===g.Gb&&a.D===Fb)return a.F;g.Da(a);return"type_error:SafeUrl"};
g.Kb=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(gaa);b=b&&haa.test(b[1]);return g.Jb(b?a:"about:invalid#zClosurez")};
g.Mb=function(a){if(a instanceof g.Gb)return a;a="object"==typeof a&&a.Rd?a.Wc():String(a);Lb.test(a)||(a="about:invalid#zClosurez");return g.Jb(a)};
g.Nb=function(a,b){if(a instanceof g.Gb)return a;a="object"==typeof a&&a.Rd?a.Wc():String(a);if(b&&/^data:/i.test(a)){var c=g.Kb(a);if(c.Wc()==a)return c}Lb.test(a)||(a="about:invalid#zClosurez");return g.Jb(a)};
g.Jb=function(a){var b=new g.Gb;b.F=a;return b};
g.Pb=function(){this.C="";this.F=g.Ob};
g.Qb=function(a){var b=new g.Pb;b.C=a;return b};
g.Sb=function(){this.C="";this.F=g.Rb};
g.Tb=function(a){var b=new g.Sb;b.C=a;return b};
g.Vb=function(a){return-1!=g.Ub.indexOf(a)};
g.Wb=function(){return g.Vb("Trident")||g.Vb("MSIE")};
Xb=function(){return g.Vb("Firefox")||g.Vb("FxiOS")};
g.Zb=function(){return g.Vb("Safari")&&!(g.Yb()||g.Vb("Coast")||g.Vb("Opera")||g.Vb("Edge")||g.Vb("Edg/")||g.Vb("OPR")||Xb()||g.Vb("Silk")||g.Vb("Android"))};
g.Yb=function(){return(g.Vb("Chrome")||g.Vb("CriOS"))&&!g.Vb("Edge")};
g.$b=function(){return g.Vb("Android")&&!(g.Yb()||Xb()||g.Vb("Opera")||g.Vb("Silk"))};
g.bc=function(){this.F="";this.G=ac;this.D=null};
g.dc=function(a){return g.cc(a).toString()};
g.cc=function(a){if(a instanceof g.bc&&a.constructor===g.bc&&a.G===ac)return a.F;g.Da(a);return"type_error:SafeHtml"};
g.fc=function(a){if(a instanceof g.bc)return a;var b="object"==typeof a,c=null;b&&a.ll&&(c=a.C());return g.ec(g.Bb(b&&a.Rd?a.Wc():String(a)),c)};
g.ec=function(a,b){return g.gc(a,b)};
g.gc=function(a,b){var c=new g.bc;c.F=a;c.D=b;return c};
g.hc=function(a,b){var c=b instanceof g.Gb?b:g.Nb(b);a.href=g.Hb(c)};
g.ic=function(a,b){a.src=g.pb(b).toString()};
g.jc=function(a,b){var c=b instanceof g.Gb?b:g.Nb(b);a.href=g.Hb(c)};
g.kc=function(a){return encodeURIComponent(String(a))};
g.lc=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.mc=function(a){return a=g.Bb(a,void 0)};
g.oc=function(a,b,c){a=g.ua(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return(0,g.nc)("0",Math.max(0,b-c))+a};
g.pc=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
qc=function(){return g.Vb("iPhone")&&!g.Vb("iPod")&&!g.Vb("iPad")};
g.rc=function(){return qc()||g.Vb("iPad")||g.Vb("iPod")};
g.sc=function(a){g.sc[" "](a);return a};
g.tc=function(a,b){try{return g.sc(a[b]),!0}catch(c){}return!1};
jaa=function(a,b){var c=iaa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
uc=function(){var a=g.p.document;return a?a.documentMode:void 0};
g.wc=function(a){return jaa(a,function(){return 0<=g.Eb(g.vc,a)})};
g.yc=function(a){return Number(g.xc)>=a};
Bc=function(a,b){g.Fa(a);void 0===b&&(b=0);g.zc();for(var c=Ac[b],d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,q=m?a[e+2]:0,t=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[t],c[f],c[l]||"",c[q]||"")}return d.join("")};
g.zc=function(){if(!g.Cc){g.Cc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ac[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===g.Cc[f]&&(g.Cc[f]=e)}}}};
g.Dc=function(a){this.C=0;this.F=a};
g.Ec=function(){};
Fc=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Ea(c))for(var d=0;d<c.length;d++)c[d]&&c[d].bd();else c&&c.bd()}};
Gc=function(a,b){return g.xa(b)&&(isNaN(b)||Infinity===b||-Infinity===b)?String(b):b};
Hc=function(a){if(g.Ea(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Hc(d):d)}return b}if(g.Ic&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Hc(d):d);return b};
g.Jc=function(a){this.C=a||{cookie:""}};
g.Kc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Cb)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Mc=function(a){var b=g.u("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(g.va(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.p.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(b=a.constructor&&
a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:g.Lc(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})};
g.Lc=function(a){if(Nc[a])return Nc[a];a=String(a);if(!Nc[a]){var b=/function\s+([^\(]+)/m.exec(a);Nc[a]=b?b[1]:"[Anonymous]"}return Nc[a]};
g.Oc=function(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31};
g.Sc=function(a,b,c){g.xa(a)?(this.date=Pc(a,b||0,c||1),Qc(this,c||1)):g.Ja(a)?(this.date=Pc(a.getFullYear(),a.getMonth(),a.getDate()),Qc(this,a.getDate())):(this.date=new Date((0,g.Rc)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Qc(this,a))};
Pc=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
Qc=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}};
g.Tc=function(a,b){this.x=g.ua(a)?a:0;this.y=g.ua(b)?b:0};
g.Uc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Vc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.Wc=function(a,b){this.width=a;this.height=b};
g.z=function(a){return g.va(a)?document.getElementById(a):a};
g.Xc=function(a){var b=document;return g.va(a)?b.getElementById(a):a};
g.Zc=function(a,b){g.Xa(b,function(c,d){c&&"object"==typeof c&&c.Rd&&(c=c.Wc());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Yc.hasOwnProperty(d)?a.setAttribute(Yc[d],c):g.sb(d,"aria-")||g.sb(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.ad=function(a){return g.$c(a||window)};
g.$c=function(a){a=a.document;a=g.bd(a)?a.documentElement:a.body;return new g.Wc(a.clientWidth,a.clientHeight)};
g.dd=function(a,b,c){return g.cd(document,arguments)};
g.cd=function(a,b){var c=String(b[0]),d=b[1];if(!kaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.mc(d.name),'"');if(d.type){c.push(' type="',g.mc(d.type),'"');var e={};g.hb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.va(d)?c.className=d:g.Ea(d)?c.className=d.join(" "):g.Zc(c,d));2<b.length&&g.ed(a,c,b,2);return c};
g.ed=function(a,b,c,d){function e(k){k&&b.appendChild(g.va(k)?a.createTextNode(k):k)}
for(;d<c.length;d++){var f=c[d];!g.Fa(f)||g.Ja(f)&&0<f.nodeType?e(f):(0,g.A)(laa(f)?g.Ua(f):f,e)}};
g.fd=function(a){return document.createElement(String(a))};
g.bd=function(a){return"CSS1Compat"==a.compatMode};
g.gd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.hd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.id=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
laa=function(a){if(a&&"number"==typeof a.length){if(g.Ja(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Ia(a))return"function"==typeof a.item}return!1};
g.jd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.kd=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.ld=function(a){return a?decodeURI(a):a};
g.nd=function(a,b){return b.match(g.md)[a]||null};
g.od=function(a){return g.ld(g.nd(3,a))};
g.pd=function(a){a=a.match(g.md);return g.kd(null,null,null,null,a[5],a[6],a[7])};
g.qd=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.rd=function(a,b){return b?a?a+"&"+b:b:a};
g.sd=function(a,b){if(!b)return a;var c=g.qd(a);c[1]=g.rd(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.ud=function(a,b,c){if(g.Ea(b))for(var d=0;d<b.length;d++)g.ud(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.kc(b)))};
g.vd=function(a){var b=[],c;for(c in a)g.ud(c,a[c],b);return b.join("&")};
g.wd=function(a,b){var c=g.vd(b);return g.sd(a,c)};
g.xd=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.zd=function(a,b){var c=a.search(g.yd),d=g.xd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.lc(a.substr(d,e-d))};
g.Ad=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.Bd=function(a){var b=[];g.Ad(a,function(c){b.push(c)});
return b};
naa=function(){var a=g.fd("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};(0,g.A)(maa(),function(d){b.call(a,d)&&(c[d]=!0)});
return c};
g.Cd=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Ed=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Fd=function(a,b){a.style.width=g.Ed(b,!0)};
g.Gd=function(){this.C=function(){return!1}};
g.Hd=function(a,b){return typeof a===b};
g.Jd=function(){var a=void 0===a?g.Id:a;try{return a.history.length}catch(b){return 0}};
g.Kd=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Jd();a.u_java=!!g.Id.navigator&&!g.Hd(g.Id.navigator.javaEnabled,"unknown")&&!!g.Id.navigator.javaEnabled&&g.Id.navigator.javaEnabled();g.Id.screen&&(a.u_h=g.Id.screen.height,a.u_w=g.Id.screen.width,a.u_ah=g.Id.screen.availHeight,a.u_aw=g.Id.screen.availWidth,a.u_cd=g.Id.screen.colorDepth);g.Id.navigator&&g.Id.navigator.plugins&&(a.u_nplug=g.Id.navigator.plugins.length);g.Id.navigator&&g.Id.navigator.mimeTypes&&(a.u_nmime=g.Id.navigator.mimeTypes.length)};
g.Ld=function(a,b){try{return(void 0===b?0:b)?(new g.Wc(a.innerWidth,a.innerHeight)).round():g.ad(a).round()}catch(c){return new g.Wc(-12245933,-12245933)}};
g.Md=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var f=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,k]};
Nd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
oaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=q=0}
function b(y){for(var B=k,H=0;64>H;H+=4)B[H/4]=y[H]<<24|y[H+1]<<16|y[H+2]<<8|y[H+3];for(H=16;80>H;H++)y=B[H-3]^B[H-8]^B[H-14]^B[H-16],B[H]=(y<<1|y>>>31)&4294967295;y=e[0];var O=e[1],U=e[2],sa=e[3],Ga=e[4];for(H=0;80>H;H++){if(40>H)if(20>H){var Ha=sa^O&(U^sa);var td=1518500249}else Ha=O^U^sa,td=1859775393;else 60>H?(Ha=O&U|sa&(O|U),td=2400959708):(Ha=O^U^sa,td=3395469782);Ha=((y<<5|y>>>27)&4294967295)+Ha+Ga+td+B[H]&4294967295;Ga=sa;sa=U;U=(O<<30|O>>>2)&4294967295;O=y;y=Ha}e[0]=e[0]+y&4294967295;e[1]=
e[1]+O&4294967295;e[2]=e[2]+U&4294967295;e[3]=e[3]+sa&4294967295;e[4]=e[4]+Ga&4294967295}
function c(y,B){if("string"===typeof y){y=unescape(encodeURIComponent(y));for(var H=[],O=0,U=y.length;O<U;++O)H.push(y.charCodeAt(O));y=H}B||(B=y.length);H=0;if(0==q)for(;H+64<B;)b(y.slice(H,H+64)),H+=64,t+=64;for(;H<B;)if(f[q++]=y[H++],t++,64==q)for(q=0,b(f);H+64<B;)b(y.slice(H,H+64)),H+=64,t+=64}
function d(){var y=[],B=8*t;56>q?c(l,56-q):c(l,64-(q-56));for(var H=63;56<=H;H--)f[H]=B&255,B>>>=8;b(f);for(H=B=0;5>H;H++)for(var O=24;0<=O;O-=8)y[B++]=e[H]>>O&255;return y}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,t;a();return{reset:a,update:c,digest:d,Ou:function(){for(var y=d(),B="",H=0;H<y.length;H++)B+="0123456789ABCDEF".charAt(Math.floor(y[H]/16))+"0123456789ABCDEF".charAt(y[H]%16);return B}}};
paa=function(a,b,c){var d=[],e=[];if(1==(g.Ea(c)?2:1))return e=[b,a],(0,g.A)(d,function(l){e.push(l)}),Od(e.join(" "));
var f=[],k=[];(0,g.A)(c,function(l){k.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ra(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.A)(d,function(l){e.push(l)});
a=Od(e.join(" "));a=[c,a];g.Ra(k)||a.push(k.join(""));return a.join("_")};
Od=function(a){var b=oaa();b.update(a);return b.Ou().toLowerCase()};
Pd=function(a){var b=Nd(String(g.p.location.href)),c=g.p.__OVERRIDE_SID;null==c&&(c=(new g.Jc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.p.__SAPISID:g.p.__APISID,null==b&&(b=(new g.Jc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.p.location.href);return d&&b&&c?[c,paa(Nd(d),b,a||null)].join(" "):null}return null};
g.C=function(){this.Tc=this.Tc;this.Gf=this.Gf};
g.Sd=function(a,b){g.Qd(a,g.w(g.Rd,b))};
g.Qd=function(a,b){a.Tc?g.ua(void 0)?b.call(void 0):b():(a.Gf||(a.Gf=[]),a.Gf.push(g.ua(void 0)?(0,g.v)(b,void 0):b))};
g.Rd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Td=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Sr=!0};
g.Ud=function(a,b){g.Td.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.yc=null;a&&this.init(a,b)};
g.Wd=function(a){return!(!a||!a[Vd])};
raa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.lh=e;this.key=++qaa;this.yg=this.Zh=!1};
Xd=function(a){a.yg=!0;a.listener=null;a.C=null;a.src=null;a.lh=null};
g.Yd=function(a){this.src=a;this.listeners={};this.C=0};
Zd=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Ta(a.listeners[c],b);d&&(Xd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
$d=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.yg&&f.listener==b&&f.capture==!!c&&f.lh==d)return e}return-1};
g.be=function(a,b,c,d,e){if(d&&d.once)return g.ae(a,b,c,d,e);if(g.Ea(b)){for(var f=0;f<b.length;f++)g.be(a,b[f],c,d,e);return null}c=g.ce(c);return g.Wd(a)?a.O(b,c,g.Ja(d)?!!d.capture:!!d,e):de(a,b,c,!1,d,e)};
de=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ja(e)?!!e.capture:!!e,l=g.ee(a);l||(a[fe]=l=new g.Yd(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=saa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)taa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ge(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");he++;return c};
saa=function(){var a=uaa,b=ie?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.ae=function(a,b,c,d,e){if(g.Ea(b)){for(var f=0;f<b.length;f++)g.ae(a,b[f],c,d,e);return null}c=g.ce(c);return g.Wd(a)?a.He(b,c,g.Ja(d)?!!d.capture:!!d,e):de(a,b,c,!0,d,e)};
g.je=function(a,b,c,d,e){if(g.Ea(b))for(var f=0;f<b.length;f++)g.je(a,b[f],c,d,e);else d=g.Ja(d)?!!d.capture:!!d,c=g.ce(c),g.Wd(a)?a.Va(b,c,d,e):a&&(a=g.ee(a))&&(b=a.ff(b,c,d,e))&&g.ke(b)};
g.ke=function(a){if(g.xa(a)||!a||a.yg)return!1;var b=a.src;if(g.Wd(b))return Zd(b.wd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ge(c),d):b.addListener&&b.removeListener&&b.removeListener(d);he--;(c=g.ee(b))?(Zd(c,a),0==c.C&&(c.src=null,b[fe]=null)):Xd(a);return!0};
ge=function(a){return a in le?le[a]:le[a]="on"+a};
ne=function(a,b,c,d){var e=!0;if(a=g.ee(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.yg&&(f=me(f,d),e=e&&!1!==f)}return e};
me=function(a,b){var c=a.listener,d=a.lh||a.src;a.Zh&&g.ke(a);return c.call(d,b)};
uaa=function(a,b){if(a.yg)return!0;if(!ie){var c=b||g.u("window.event"),d=new g.Ud(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=ne(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=ne(c[k],f,!1,d),e=e&&l}return e}return me(a,new g.Ud(b,
this))};
g.ee=function(a){a=a[fe];return a instanceof g.Yd?a:null};
g.ce=function(a){if(g.Ia(a))return a;a[oe]||(a[oe]=function(b){return a.handleEvent(b)});
return a[oe]};
g.pe=function(){g.C.call(this);this.wd=new g.Yd(this);this.Xt=this;this.bm=null};
qe=function(a,b,c,d){b=a.wd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.yg&&k.capture==c){var l=k.listener,m=k.lh||k.src;k.Zh&&Zd(a.wd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.Sr};
re=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
se=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
te=function(a){g.p.setTimeout(function(){throw a;},0)};
waa=function(){var a=g.p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Vb("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";g.ic(e,g.rb(vaa));document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(g.cc(g.ue));e.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.v)(function(m){if(("*"==
l||m.origin==l)&&m.data==k)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&!g.Wb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ua(c.next)){c=c.next;var e=c.zn;c.zn=null;e()}};
return function(e){d.next={zn:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){g.p.setTimeout(e,0)}};
ve=function(){this.F=this.C=null};
we=function(){this.next=this.scope=this.lc=null};
Ae=function(a,b){xe||xaa();ye||(xe(),ye=!0);ze.add(a,b)};
xaa=function(){if(g.p.Promise&&g.p.Promise.resolve){var a=g.p.Promise.resolve(void 0);xe=function(){a.then(Be)}}else xe=function(){var b=Be;
!g.Ia(g.p.setImmediate)||g.p.Window&&g.p.Window.prototype&&!g.Vb("Edge")&&g.p.Window.prototype.setImmediate==g.p.setImmediate?(Ce||(Ce=waa()),Ce(b)):g.p.setImmediate(b)}};
Be=function(){for(var a;a=ze.remove();){try{a.lc.call(a.scope)}catch(b){te(b)}se(De,a)}ye=!1};
g.Ee=function(a){a.prototype.$goog_Thenable=!0};
g.Fe=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.He=function(a,b){this.C=0;this.M=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.Ba)try{var c=this;a.call(b,function(d){g.Ge(c,2,d)},function(d){g.Ge(c,3,d)})}catch(d){g.Ge(this,3,d)}};
Ie=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
Ke=function(a,b,c){var d=Je.get();d.F=a;d.onRejected=b;d.context=c;return d};
yaa=function(a,b,c){Le(a,b,c,null)||Ae(g.w(b,a))};
g.Me=function(a){return new g.He(function(b,c){var d=a.length,e=[];if(d)for(var f=function(q,t){d--;e[q]=t;0==d&&b(e)},k=function(q){c(q)},l=0,m;l<a.length;l++)m=a[l],yaa(m,g.w(f,l),k);
else b(e)})};
g.Oe=function(a,b){return Ne(a,null,b,void 0)};
Pe=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Pe(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Qe(c),Re(c,e,3,b)))}a.D=null}else g.Ge(a,3,b)};
Te=function(a,b){a.F||2!=a.C&&3!=a.C||Se(a);a.G?a.G.next=b:a.F=b;a.G=b};
Ne=function(a,b,c,d){var e=Ke(null,null,null);e.C=new g.He(function(f,k){e.F=b?function(l){try{var m=b.call(d,l);f(m)}catch(q){k(q)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);!g.ua(m)&&l instanceof g.Ue?k(l):f(m)}catch(q){k(q)}}:k});
e.C.D=a;Te(a,e);return e.C};
g.Ge=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Le(c,a.Y,a.N,a)||(a.M=c,a.C=b,a.D=null,Se(a),3!=b||c instanceof g.Ue||zaa(a,c)))};
Le=function(a,b,c,d){if(a instanceof g.He)return Te(a,Ke(b||g.Ba,c||null,d)),!0;if(g.Fe(a))return a.then(b,c,d),!0;if(g.Ja(a))try{var e=a.then;if(g.Ia(e))return Aaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Aaa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function k(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Se=function(a){a.L||(a.L=!0,Ae(a.J,a))};
Qe=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Re=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Ve(b,c,d);else try{b.D?b.F.call(b.context):Ve(b,c,d)}catch(e){We.call(null,e)}se(Je,b)};
Ve=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
zaa=function(a,b){a.H=!0;Ae(function(){a.H&&We.call(null,b)})};
g.Ue=function(a){g.Ma.call(this,a)};
g.Xe=function(a,b,c){if(g.Ia(a))c&&(a=(0,g.v)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.v)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.p.setTimeout(a,b||0)};
g.Ye=function(a){g.p.clearTimeout(a)};
g.Ze=function(a,b,c){g.C.call(this);this.C=a;this.D=b||0;this.F=c;this.Yb=(0,g.v)(this.uo,this)};
Baa=function(){this.F=-1};
af=function(){this.F=64;this.C=[];this.L=[];this.M=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
bf=function(a,b,c){c||(c=0);var d=a.M;if(g.va(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):(f=c^k^l,
q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.cf=function(a){if(a.classList)return a.classList;a=a.className;return g.va(a)&&a.match(/\S+/g)||[]};
g.D=function(a,b){return a.classList?a.classList.contains(b):g.Qa(g.cf(a),b)};
g.df=function(){};
ff=function(a){if(a instanceof g.df)return a;if("function"==typeof a.dd)return a.dd(!1);if(g.Fa(a)){var b=0,c=new g.df;c.next=function(){for(;;){if(b>=a.length)throw g.ef;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.gf=function(a,b,c){if(g.Fa(a))try{(0,g.A)(a,b,c)}catch(d){if(d!==g.ef)throw d;}else{a=ff(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.ef)throw d;}}};
Caa=function(a){if(g.Fa(a))return g.Ua(a);a=ff(a);var b=[];g.gf(a,function(c){b.push(c)});
return b};
g.jf=function(a,b){this.F={};this.C=[];this.Pe=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.hf(this,a)};
Daa=function(a,b){return a===b};
g.lf=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.kf(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.kf(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.hf=function(a,b){if(b instanceof g.jf)for(var c=b.Ic(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.kf=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.nf=function(a){var b=[];mf(new Eaa,a,b);return b.join("")};
Eaa=function(){};
mf=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.Ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),mf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),of(d,c),c.push(":"),mf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":of(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
of=function(a,b){b.push('"',a.replace(Faa,function(c){var d=pf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),pf[c]=d);return d}),'"')};
g.qf=function(a){g.C.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.rf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Oa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.sd(b)}};
Gaa=function(a,b,c){Ae(function(){a.apply(b,c)})};
g.sf=function(a){this.C=a};
tf=function(a){this.C=a};
uf=function(a){this.data=a};
vf=function(a){return!g.ua(a)||a instanceof uf?a:new uf(a)};
g.wf=function(a){this.C=a};
g.xf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Rc)()||!!b&&b>(0,g.Rc)()};
Haa=function(){};
yf=function(){};
g.zf=function(a){this.C=a};
g.Af=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Cf=function(a,b){this.F=a;this.C=null;if(g.E&&!g.yc(9)){Bf||(Bf=new g.jf);this.C=Bf.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),Bf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
Df=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Iaa[b]})};
Ef=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
Ff=function(a){return a.C.XMLDocument.documentElement};
Gf=function(a,b){this.F=a;this.C=b+"::"};
g.Hf=function(a){var b=new g.Af;return b.isAvailable()?a?new Gf(b,a):b:null};
If=function(){this.C=[];this.F=-1};
Jaa=function(a){-1==a.F&&(a.F=(0,g.Jf)(a.C,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.F};
g.Kf=function(){var a=new If;g.p.SVGElement&&g.p.document.createElementNS&&a.set(0);var b=naa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.p.crypto&&g.p.crypto.subtle&&a.set(3);g.p.TextDecoder&&g.p.TextEncoder&&a.set(4);return Jaa(a)};
g.Lf=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
Mf=function(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])};
g.Of=function(a){Mf(g.Nf,arguments)};
Pf=function(a,b){var c=g.F(a,void 0);c?c.push(b):g.Of(a,[b])};
g.F=function(a,b){return a in g.Nf?g.Nf[a]:b};
Qf=function(a){var b=g.Nf.EXPERIMENT_FLAGS;return b?b[a]:void 0};
Sf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Rf(b)}}:a};
g.Rf=function(a,b,c,d,e){var f=g.u("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.F("ERRORS",[]),f.push([a,b,c,d,e]),g.Of("ERRORS",f))};
g.Tf=function(a){g.Rf(a,"WARNING",void 0,void 0,void 0)};
Kaa=function(a,b,c,d,e){var f=!1,k=Qf("log_window_onerror_fraction");if(k&&Math.random()<k)f=!0;else{k=document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:(g.va(a)?k=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,k=a.message,b=a.filename,c=a.lineno,d=a.colno):(k="Unknown error",b="Unknown file",c=0),a=Error(k),a.name="UnhandledWindowError",e=a,e.message=k,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=
d),f?g.Rf(e):g.Tf(e))};
g.G=function(a,b){return a?a.dataset?a.dataset[g.Uf(b)]:a.getAttribute("data-"+b):null};
g.Uf=function(a){return Vf[a]||(Vf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
g.Wf=function(a,b){g.Ia(a)&&(a=Sf(a));return window.setTimeout(a,b)};
g.Xf=function(a,b){g.Ia(a)&&(a=Sf(a));return window.setInterval(a,b)};
g.Yf=function(a){window.clearTimeout(a)};
g.Zf=function(a){window.clearInterval(a)};
g.dg=function(a,b,c){var d=$f();if(d){var e=d.subscribe(a,function(){var f=arguments;var k=function(){ag[e]&&b.apply(c||window,f)};
try{bg[a]?k():g.Wf(k,0)}catch(l){g.Rf(l)}},c);
ag[e]=!0;cg[a]||(cg[a]=[]);cg[a].push(e);return e}return 0};
g.eg=function(a){var b=$f();b&&(g.xa(a)?a=[a]:g.va(a)&&(a=[parseInt(a,10)]),(0,g.A)(a,function(c){b.unsubscribeByKey(c);delete ag[c]}))};
g.I=function(a,b){var c=$f();return c?c.publish.apply(c,arguments):!1};
g.fg=function(a,b){bg[a]=!0;var c=$f();c=c?c.publish.apply(c,arguments):!1;bg[a]=!1;return c};
$f=function(){return g.u("ytPubsubPubsubInstance")};
g.ig=function(a,b){var c=g.gg(a);spf.script.load(a,c,b)};
g.jg=function(a){a=g.gg(a);spf.script.unload(a)};
g.gg=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Laa,""),b=b.replace(Maa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.kg=function(){this.F=!1;this.C=null};
lg=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.Tf(d)}c&&c(b)};
g.mg=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
Naa=function(){};
g.og=function(a,b){return ng(a,0,b)};
g.pg=function(a,b){return ng(a,1,b)};
g.rg=function(a){for(var b=0,c=a.length;b<c;b++)g.qg(a[b])};
sg=function(){};
g.tg=function(){return!!g.u("yt.scheduler.instance")};
ng=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.Wf(a,c||0)};
g.qg=function(a){if(!isNaN(a)){var b=g.u("yt.scheduler.instance.cancelJob");b?b(a):g.Yf(a)}};
Oaa=function(){return parseInt(g.F("DCLKSTAT",0),10)};
g.vg=function(a){return!!ug(a)};
g.wg=function(a,b){var c=ug(a);return void 0===c&&void 0!==b?b:Number(c||0)};
ug=function(a){return g.F("EXPERIMENT_FLAGS",{})[a]};
Paa=function(){return g.xg.Sd()};
Qaa=function(a){a=void 0===a?{}:a;return g.mg(g.xg,a)};
g.yg=function(a){var b=[];g.Xa(a,function(c,d){var e=g.kc(d),f;g.Ea(c)?f=c:f=[c];(0,g.A)(f,function(k){""==k?b.push(e):b.push(e+"="+g.kc(k))})});
return b.join("&")};
g.zg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=g.lc(e[0]||""),k=g.lc(e[1]||"");f in b?g.Ea(b[f])?g.Va(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(m){var l=Error("Error decoding URL component");l.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?g.Tf(l):g.Rf(l)}}return b};
g.Bg=function(a,b){return g.Ag(a,b||{},!0)};
g.Ag=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.zg(e[1]||"");for(var f in b)if(c||!g.Za(e,f))e[f]=b[f];return g.wd(a,e)+d};
Fg=function(a){var b=g.Cg;a=void 0===a?g.u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.Dg(b),g.Eg(b));b.ca_type="image";a&&(b.bid=a);return b};
g.Dg=function(a){var b={};b.dt=g.Gg;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Kd(b);return b};
g.Eg=function(a){var b=g.Md(a.C),c=g.Ld(a.C.top),d={};return d.bc=g.Kf(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Lf(a.F),d.wgl=!!g.Id.WebGLRenderingContext,d};
Raa=function(){if(!Hg)return null;var a=Hg();return"open"in a?a:null};
g.Jg=function(a){switch(g.Ig(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Ig=function(a){return a&&"status"in a?a.status:-1};
Saa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.nd(1,a),e=g.od(a);d&&e?(d=c,c=a.match(g.md),d=d.match(g.md),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.od(c)==e&&(Number(g.nd(4,c))||null)==(Number(g.nd(4,a))||null):!0;d=g.vg("web_ajax_ignore_global_headers_if_set");for(var f in Kg)e=g.F(Kg[f]),!e||!c&&!Lg(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Lg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(g.vg("pass_biscotti_id_in_header_ajax")||
g.vg("pass_biscotti_id_in_header_ajax_tv"))&&(c||Lg(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=g.yg(Fg(void 0)));return b};
Uaa=function(a){var b=window.location.search,c=g.od(a),d=g.ld(g.nd(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.zg(b),f={};(0,g.A)(Taa,function(k){e[k]&&(f[k]=e[k])});
return g.Ag(a,f||{},!1)};
Lg=function(a,b){var c=g.F("CORS_HEADER_WHITELIST")||{},d=g.od(a);return d?(c=c[d])?g.Qa(c,b):!1:!0};
Vaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Mg(a,b);var d=Ng(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&g.Yf(f);var l=k.ok,m=function(q){q=q||{};var t=b.context||g.p;l?b.onSuccess&&b.onSuccess.call(t,q,k):b.onError&&b.onError.call(t,q,k);b.Xa&&b.Xa.call(t,q,k)};
"JSON"==(b.format||"JSON")&&(l||400<=k.status&&500>k.status)?k.json().then(m,function(){m(null)}):m(null)}});
b.Dq&&0<b.timeout&&(f=g.Wf(function(){e||(e=!0,g.Yf(f),b.Dq.call(b.context||g.p))},b.timeout))}else g.J(a,b)};
g.J=function(a,b){var c=b.format||"JSON";a=Mg(a,b);var d=Ng(a,b),e=!1,f,k=Og(a,function(l){if(!e){e=!0;f&&g.Yf(f);var m=g.Jg(l),q=null,t=400<=l.status&&500>l.status,y=500<=l.status&&600>l.status;if(m||t||y)q=Waa(c,l,b.lb);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};t=b.context||g.p;m?b.onSuccess&&b.onSuccess.call(t,l,q):b.onError&&b.onError.call(t,l,q);b.Xa&&b.Xa.call(t,l,q)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Oc&&0<b.timeout&&(f=g.Wf(function(){e||(e=!0,k.abort(),g.Yf(f),b.Oc.call(b.context||g.p,k))},b.timeout));
return k};
Mg=function(a,b){b.ER&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.F("XSRF_FIELD_NAME",void 0),d=b.Ra;d&&(d[c]&&delete d[c],a=g.Bg(a,d));return a};
Ng=function(a,b){var c=g.F("XSRF_FIELD_NAME",void 0),d=g.F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.F("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.jv||g.od(a)&&!b.withCredentials&&g.od(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&g.va(e)&&(e=g.zg(e),g.hb(e,f),e=b.Fr&&"JSON"==b.Fr?JSON.stringify(e):g.vd(e));f=e||f&&!g.ab(f);!Pg&&f&&"POST"!=b.method&&(Pg=!0,g.Rf(Error("AJAX request with postData should use POST")));
return e};
Waa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Rg(b):null)d={},(0,g.A)(b.getElementsByTagName("*"),function(e){d[e.tagName]=g.Sg(e)})}c&&Tg(d);
return d};
Tg=function(a){if(g.Ja(a))for(var b in a)"html_content"==b||g.tb(b,"_html")?a[b]=g.gc(a[b],null):Tg(a[b])};
Rg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Sg=function(a){var b="";(0,g.A)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.Ug=function(a,b){b.method="POST";b.ia||(b.ia={});return g.J(a,b)};
Og=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Sf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Raa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.vg("debug_forward_web_query_parameters")&&(a=Uaa(a));m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Saa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m};
Vg=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.Wg=function(a){var b=new Vg;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.Xg=function(a){var b=new Vg;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.Zg=function(a){var b=a.__yt_uid_key;b||(b=Yg(),a.__yt_uid_key=b);return b};
g.$g=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Xaa+"VisibilityState";if(b in a)return a[b]};
g.ah=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Yaa||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY};
bh=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.ch=function(a){g.ua(a.C)||bh(a);return a.C};
g.dh=function(a){g.ua(a.F)||bh(a);return a.F};
g.fh=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.$a(eh,function(e){var f=g.wa(e[4])&&e[4]==!!d,k=g.Ja(e[4])&&g.Ja(d)&&g.db(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.K=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.fh(a,b,c,d);if(e)return e;e=++gh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(l){l=new g.ah(l);if(!g.jd(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new g.ah(l);
l.currentTarget=a;return c.call(a,l)};
k=Sf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),hh()||g.wa(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);eh[e]=[a,b,c,k,d];return e};
g.ih=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.A)(a,function(b){if(b in eh){var c=eh[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?hh()||g.wa(c)?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eh[b]}}))};
g.jh=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.K(a,b,function(){g.ih(e);c.apply(a,arguments)},d)};
g.mh=function(a){for(var b in eh)eh[b][0]==a&&g.ih(b)};
g.nh=function(a){this.Yb=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.K(window,"mousemove",(0,g.v)(this.Y,this));this.N=g.Xf((0,g.v)(this.M,this),25)};
oh=function(){g.C.call(this);this.C=[]};
ph=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.eb(b);this.assets=a.assets||{};this.attrs=a.attrs||g.eb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.qh=function(a){a instanceof ph||(a=new ph(a));return a};
g.th=function(a,b,c,d,e,f){f=f||{};f.name=c||g.F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=rh||(g.vg("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+
e.stack),c=c.join("\n"),window.console.log(c,e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=g.Mc(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&g.Ia(window.yterr)&&window.yterr(a),sh[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Ra:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},ia:{url:g.F("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.ia.stack=e);for(var k in f)b.ia["client."+k]=f[k];if(k=g.F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ia[l]=k[l];g.J(g.F("ECATCHER_REPORT_HOST","")+"/error_204",b);sh[a.message]=!0;rh++}};
g.zh=function(){g.Yf(g.uh);g.Yf(g.vh);g.vh=0;if(!g.ab(g.wh)){for(var a in g.wh){var b=xh[a];b&&(Zaa(a,b),delete g.wh[a])}g.ab(g.wh)||g.yh()}};
$aa=function(){var a=[];for(e in g.wh){var b=Ah[e]||{};Ah[e]=b;for(var c in g.wh[e]){var d=Bh(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round((0,g.Ch)());for(var f in Ah)b=Ah[f],b.eventType=f in Dh?Dh[f]:"UNKNOWN_TYPE",c=Eh[f],b.metricIntervalMs=c?e-c:e-g.Fh,a.push(b),Eh[f]=e,delete Ah[f];return a};
g.yh=function(){g.vg("web_gel_timeout_cap")&&!g.vh&&(g.vh=g.Wf(g.zh,6E4));g.Yf(g.uh);var a=g.wg("web_gel_debounce_ms",1E4);g.uh=g.Wf(g.zh,g.F("LOGGING_BATCH_TIMEOUT",g.Gh||a))};
Bh=function(a,b){b=void 0===b?"":b;g.wh[a]=g.wh[a]||{};g.wh[a][b]=g.wh[a][b]||[];return g.wh[a][b]};
Zaa=function(a,b){var c=aba[a],d=Ah[a]||{};Ah[a]=d;var e=Math.round((0,g.Ch)());for(q in g.wh[a]){var f=g.fb({context:g.Hh(b.C)});f[c]=Bh(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;var k=Ih[q];if(k)a:{var l=q;if(k.videoId)var m="VIDEO";else if(k.playlistId)m="PLAYLIST";else break a;f.credentialTransferTokenTargetId=k;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Ih[q];f.requestTimeMs=
e;if(k=g.F("EVENT_ID",void 0))m=(g.F("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>bba&&(m=1),g.Of("BATCH_CLIENT_COUNTER",m),k={serializedEventId:k,clientCounter:m},f.serializedClientEventId=k,Jh&&Kh&&g.vg("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Jh,roundtripMs:Kh}),Jh=k,Kh=0;g.Lh(b,a,f,{retry:cba.has(a),onSuccess:(0,g.v)(dba,this,(0,g.Ch)())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*
q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e};
dba=function(a){Kh=Math.round((0,g.Ch)()-a)};
g.Oh=function(a){var b=void 0===a?{}:a;a=void 0===b.yy?!0:b.yy;b=void 0===b.hG?!1:b.hG;if(null==g.u("_lact",window)){var c=parseInt(g.F("LACT"),10);c=isFinite(c)?(0,g.Rc)()-Math.max(c,0):-1;g.r("_lact",c,window);g.r("_fact",c,window);-1==c&&g.Mh();g.K(document,"keydown",g.Mh);g.K(document,"keyup",g.Mh);g.K(document,"mousedown",g.Mh);g.K(document,"mouseup",g.Mh);a&&(b?g.K(window,"touchmove",function(){Nh("touchmove",200)},{passive:!0}):(g.K(window,"resize",function(){Nh("resize",200)}),g.K(window,
"scroll",function(){Nh("scroll",200)})));
new g.nh(function(){Nh("mouse",100)});
g.K(document,"touchstart",g.Mh,{passive:!0});g.K(document,"touchend",g.Mh,{passive:!0})}};
Nh=function(a,b){Ph[a]||(Ph[a]=!0,g.pg(function(){g.Mh();Ph[a]=!1},b))};
g.Mh=function(){null==g.u("_lact",window)&&g.Oh();var a=(0,g.Rc)();g.r("_lact",a,window);-1==g.u("_fact",window)&&g.r("_fact",a,window);(a=g.u("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Qh=function(){var a=g.u("_lact",window);return null==a?-1:Math.max((0,g.Rc)()-a,0)};
g.Sh=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.Ch)());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.Qh())};g.vg("log_sequence_info_on_gel_web")&&d.Le&&(a=e.context,b=d.Le,Rh[b]=b in Rh?Rh[b]+1:0,a.sequence={index:Rh[b],groupKey:b},d.bv&&delete Rh[d.Le]);(d=d.Yf)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Ih[d.token]=a,d=Bh("log_event",d.token)):d=Bh("log_event");d.push(e);c&&(xh.log_event=new c);d.length>=
(g.wg("web_logging_max_batch")||100)?g.zh():g.yh()};
g.Hh=function(a){a={client:{hl:a.Gy,gl:a.Fy,clientName:a.Dy,clientVersion:a.Ey,configInfo:a.Cy}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.F("DELEGATED_SESSION_ID")&&!g.vg("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.F("DELEGATED_SESSION_ID")});return a};
Th=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.xR||g.F("AUTHORIZATION"))||(a?b="Bearer "+g.u("gapi.auth.getToken")().vR:b=Pd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.F("SESSION_INDEX",0),g.vg("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.F("DELEGATED_SESSION_ID")));return d};
Uh=function(a){a=Object.assign({},a);delete a.Authorization;var b=Pd();if(b){var c=new af;c.update(g.F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Bc(c.digest(),3)}return a};
g.Wh=function(a,b,c,d){g.Vh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Xh=function(a,b,c){g.Vh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.Yh=function(a){var b;(b=g.Hf(a))||(a=new Cf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.wf(a):null;this.F=document.domain||window.location.hostname};
eba=function(a,b,c,d){if(d)return null;d=Zh.get("nextId",!0)||1;var e=Zh.get("requests",!0)||{};e[d]={method:a,request:b,authState:Uh(c),requestTime:Math.round((0,g.Ch)())};Zh.set("nextId",d+1,86400,!0);Zh.set("requests",e,86400,!0);return d};
$h=function(a){var b=Zh.get("requests",!0)||{};delete b[a];Zh.set("requests",b,86400,!0)};
ai=function(a){var b=Zh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round((0,g.Ch)())-d.requestTime)){var e=d.authState,f=Uh(Th(!1));g.db(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round((0,g.Ch)())),g.Lh(a,d.method,e,{}));delete b[c]}}Zh.set("requests",b,86400,!0)}};
g.bi=function(a){var b=this;this.C=a||{Ay:g.F("INNERTUBE_API_KEY",void 0),By:g.F("INNERTUBE_API_VERSION",void 0),Cy:g.F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Dy:g.F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ey:g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Gy:g.F("INNERTUBE_CONTEXT_HL",void 0),Fy:g.F("INNERTUBE_CONTEXT_GL",void 0),Hy:g.F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Iy:!!g.F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.og(function(){ai(b)},5E3)};
g.Lh=function(a,b,c,d){!g.F("VISITOR_DATA")&&.01>Math.random()&&g.Rf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,Fr:"JSON",Oc:function(){d.Oc()},
Dq:d.Oc,onSuccess:function(B,H){if(d.onSuccess)d.onSuccess(H)},
mj:function(B){if(d.onSuccess)d.onSuccess(B)},
onError:function(B,H){if(d.onError)d.onError(H)},
Cq:function(B){if(d.onError)d.onError(B)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.Hy;k&&(f=k);k=a.C.Iy||!1;var l=Th(k,f,d);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=g.Bg(""+f+("/youtubei/"+a.C.By+"/"+b),{alt:"json",key:a.C.Ay}),q;if(d.retry&&g.vg("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(q=eba(b,c,l,k))){var t=e.onSuccess,y=e.mj;e.onSuccess=function(B,H){$h(q);t(B,H)};
c.mj=function(B,H){$h(q);y(B,H)}}try{g.vg("use_fetch_for_op_xhr")?Vaa(m,e):g.Ug(m,e)}catch(B){if("InvalidAccessError"==B)q&&($h(q),q=0),g.Rf(Error("An extension is blocking network request."),"WARNING");
else throw B;}q&&g.og(function(){ai(a)},5E3)};
g.ci=function(a,b,c){c=void 0===c?{}:c;var d=g.bi;g.F("ytLoggingEventsDefaultDisabled",!1)&&g.bi==g.bi&&(d=null);g.Sh(a,b,d,c)};
g.di=function(){g.vg("log_web_meta")&&$aa().forEach(function(a){g.ci("delayedEventMetricCaptured",a)})};
g.ei=function(a){this.C=a};
g.fi=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.fi(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.gi=function(a,b){this.version=a;this.args=b};
g.hi=function(a,b){this.topic=a;this.C=b};
g.ji=function(a,b){var c=ii();c&&c.publish.call(c,a.toString(),a,b)};
g.ni=function(a,b,c){var d=ii();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,k){var l=g.u("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(ki[e])try{if(k&&a instanceof g.hi&&a!=f)try{var m=a.C,q=k;if(!q.args||!q.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.Pe){var t=new m;m.Pe=t.version}var y=m.Pe}catch(B){}if(!y||q.version!=y)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=Reflect.construct(m,
g.Ua(q.args))}catch(B){throw B.message="yt.pubsub2.Data.deserialize(): "+B.message,B;}}catch(B){throw B.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+B.message,B;}b.call(c||window,k)}catch(B){g.Rf(B)}},li[a.toString()]?g.tg()?g.pg(l):g.Wf(l,0):l())});
ki[e]=!0;mi[a.toString()]||(mi[a.toString()]=[]);mi[a.toString()].push(e);return e};
hba=function(){var a=fba,b=g.ni(gba,function(c){a.apply(void 0,arguments);g.oi(b)},void 0);
return b};
g.oi=function(a){var b=ii();b&&(g.xa(a)&&(a=[a]),(0,g.A)(a,function(c){b.unsubscribeByKey(c);delete ki[c]}))};
ii=function(){return g.u("ytPubsub2Pubsub2Instance")};
pi=function(a){g.gi.call(this,1,arguments);this.csn=a};
g.si=function(a,b,c){qi.push({XF:a,payload:b,options:c});ri||(ri=hba())};
fba=function(a){if(qi){for(var b=g.da(qi),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,g.Sh(c.XF,c.payload,null,c.options));qi.length=0}ri=0};
g.ti=function(a,b,c){(0,g.A)(b,function(d){var e=c;e=void 0===e?!1:e;d={csn:a,ve:g.fi(d),eventType:e?16:8};e={Yf:void 0,Le:a,bv:e};"UNDEFINED_CSN"==a?g.si("visualElementHidden",d,e):g.Sh("visualElementHidden",d,g.bi,e)})};
vi=function(a,b){var c=Object.keys(a).join("");ui("info_"+c+"_"+b)||(a.clientActionNonce=b,g.ci("latencyActionInfo",a))};
ui=function(a){wi[a]=wi[a]||{count:0};var b=wi[a];b.count++;b.time=(0,g.Ch)();xi||(xi=g.og(iba,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;g.th(c,b)}return!0}return!1};
iba=function(){var a=(0,g.Ch)(),b;for(b in wi)6E4<a-wi[b].time&&delete wi[b];xi=0};
zi=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Rc)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(yi)for(a=1,b=0;b<yi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^yi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Ei=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Ai==a)return;Ai=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Qh()>b)&&"visible"==g.$g()){b=-1;g.Bi&&(b=Math.round((0,g.Ch)()-g.Bi));var c=String;var d=g.u("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Rc)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:Ci,index:String(Di),lastEventDeltaMs:String(b),trigger:a};g.Sh("foregroundHeartbeat",
a,g.bi);g.r("_fact",-1,window);Di++;g.Bi=(0,g.Ch)()}};
g.Fi=function(a){a&&g.Sh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ci,clientScreenNonce:a},g.bi)};
Gi=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
Hi=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
Ii=function(a){return g.F(Hi(void 0===a?0:a),void 0)};
g.Ji=function(){var a=Ii(0),b;a?b=new g.ei({veType:a,youtubeData:void 0}):b=null;return b};
g.Ki=function(a){a=void 0===a?0:a;var b=g.F(Gi(a));b||0!=a||(g.vg("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=g.F("EVENT_ID"));return b?b:null};
g.Li=function(a,b,c){c=void 0===c?0:c;if(a!==g.F(Gi(c))||b!==g.F(Hi(c)))g.Of(Gi(c),a),g.Of(Hi(c),b),0==c&&(b=function(){setTimeout(function(){g.Fi(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
Qi=function(){var a=g.Ji(),b=g.Ki();b&&a&&g.ti(b,[a],!0)};
g.Ri=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Sf(d):null;this.H=e?Sf(e):null;this.G=[];this.C=this.F=0};
g.Si=function(a){g.qg(a.F);a.F=g.pg((0,g.v)(a.init,a))};
g.Vi=function(a){a.name in Ti&&Ui(a.name);Ti[a.name]={reqs:[],disable:(0,g.v)(a.disable,a)};(0,g.A)(a.deps,function(b){if(!(b in Ti))throw Error("Module "+b+" required by "+a.name);Ti[b].reqs.push(a.name)});
a.enable()};
Ui=function(a){if(a in Ti){var b=Ti[a];(0,g.A)(b.reqs,function(c){Ui(c)});
try{b.disable()}catch(c){}delete Ti[a]}};
Xi=function(a){Mf(g.Wi,arguments)};
g.Yi=function(a){return a in g.Wi};
Zi=function(a){Mf(g.Wi,arguments)};
g.$i=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Ub,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Ib(g.Mb(a)),"about:invalid#zClosurez"===a?a="":(a=g.dc(g.fc(a)),a=g.kc(g.nf(a))),g.ub(a)||(a=g.dd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.id(a).body.appendChild(a))):e?Og(a,b,"POST",e,d):g.F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Og(a,b,"GET","",d):jba(a,b)||kba(a,b))};
jba=function(a,b){if(!Qf("web_use_beacon_api_for_ad_click_server_pings"))return!1;var c=g.ld(g.nd(5,a));return c&&-1!=c.indexOf("/aclk")&&"1"===g.zd(a,"ae")&&"1"===g.zd(a,"act")?aj(a)?(b&&b(),!0):!1:!1};
aj=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
kba=function(a,b){var c=new Image,d=""+lba++;bj[d]=c;c.onload=c.onerror=function(){b&&bj[d]&&b();delete bj[d]};
c.src=a};
g.cj=function(a,b){a=a||"";var c=a.match(mba);spf.style.load(a,c?c[1]:"",b)};
fj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!dj(a)||c.some(function(e){return!dj(e)}))throw Error("Only objects may be merged.");
c=g.da(c);for(d=c.next();!d.done;d=c.next())ej(a,d.value);return a};
ej=function(a,b){for(var c in b)if(dj(b[c])){if(c in a&&!dj(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ej(a[c],b[c])}else if(gj(b[c])){if(c in a&&!gj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);hj(a[c],b[c])}else a[c]=b[c];return a};
hj=function(a,b){for(var c=g.da(b),d=c.next();!d.done;d=c.next())d=d.value,dj(d)?a.push(ej({},d)):gj(d)?a.push(hj([],d)):a.push(d);return a};
dj=function(a){return"object"===typeof a&&!Array.isArray(a)};
gj=function(a){return"object"===typeof a&&Array.isArray(a)};
g.ij=function(a,b,c){var d=void 0===d?!0:d;var e=g.F("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=g.od(window.location.href);f&&e.push(f);f=g.od(a);if(g.Qa(e,f)||!f&&g.sb(a,"/"))if(g.vg("autoescape_tempdata_url")&&(e=document.createElement("a"),g.hc(e,a),a=e.href),a&&(a=g.pd(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&(b.itct||b.ved)&&(b.csn=b.csn||g.Ki()),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+g.pc(a).toString(36),b=b?g.vd(b):"",g.Wh(d,b,c||5))):(c="ST-"+g.pc(a).toString(36),b=b?g.vd(b):"",g.Wh(c,
b,5))};
g.jj=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.jc(d.location,g.wd(a,b)+c)};
g.kj=function(a,b){b&&g.ij(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.jj(a)};
g.lj=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.F("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.ij(a,b);if(c)return!1;g.kj(a);return!0};
pj=function(a,b,c,d){g.C.call(this);var e=this;this.H=this.ab=a;this.ha=b;this.M=!1;this.api={};this.oa=this.N=null;this.Y=new g.qf;g.Sd(this,this.Y);this.D={};this.la=this.Oa=this.F=this.sb=this.C=null;this.V=!1;this.G=this.J=null;this.mb={};this.Ud=["onReady"];this.qb=null;this.wb=NaN;this.X={};this.L=d;mj(this);this.Th("WATCH_LATER_VIDEO_ADDED",this.HD.bind(this));this.Th("WATCH_LATER_VIDEO_REMOVED",this.ID.bind(this));this.Th("onAdAnnounce",this.Wt.bind(this));this.Nb=new oh(this);g.Sd(this,this.Nb);
this.aa=0;c?this.aa=g.Wf(function(){e.loadNewVideoConfig(c)},0):d&&(nj(this),oj(this))};
nj=function(a){var b;a.L?b=a.L.rootElementId:b=a.C.attrs.id;a.F=b||a.F;"video-player"==a.F&&(a.F=a.ha,a.C.attrs.id=a.ha);a.H.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F)};
qj=function(a){a.C&&!a.C.loaded&&(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
tj=function(a){var b=!0,c=rj(a);c&&a.C&&(a=sj(a),b=g.G(c,"version")==a);return b&&!!g.u("yt.player.Application.create")};
oj=function(a){if(!a.ob()&&!a.V){var b=tj(a);if(b&&"html5"==(rj(a)?"html5":null))a.la="html5",a.M||uj(a);else if(vj(a),a.la="html5",b&&a.G)a.ab.appendChild(a.G),uj(a);else{a.C&&(a.C.loaded=!0);var c=!1;a.J=function(){c=!0;var d=g.u("yt.player.Application.create"),e=a.C?a.C.clone():void 0;d(a.ab,e,a.L);uj(a)};
a.V=!0;b?a.J():(g.ig(sj(a),a.J),g.cj(a.L?a.L.cssUrl:a.C.assets.css),wj(a)&&!c&&g.r("yt.player.Application.create",null,void 0))}}};
rj=function(a){var b=g.z(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
uj=function(a){if(!a.ob()){var b=rj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&a.C&&b.isNotServable(a.C.args.video_id)||nba(a)):a.wb=g.Wf(function(){uj(a)},50)}};
nba=function(a){mj(a);a.M=!0;var b=rj(a);b.addEventListener&&(a.N=xj(a,b,"addEventListener"));b.removeEventListener&&(a.oa=xj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=xj(a,b,e))}for(var f in a.D)a.N(f,a.D[f]);qj(a);a.Oa&&a.Oa(a.api);a.Y.na("onReady",a.api)};
xj=function(a,b,c){var d=b[c];return function(){try{return a.qb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.qb=e,g.Tf(e))}}};
mj=function(a){a.M=!1;if(a.oa)for(var b in a.D)a.oa(b,a.D[b]);for(var c in a.X)g.Yf(parseInt(c,10));a.X={};a.N=null;a.oa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Th.bind(a);a.api.removeEventListener=a.oG.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Hv.bind(a);a.api.getPlayerType=a.Nv.bind(a);a.api.getCurrentVideoConfig=a.Dv.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Cz.bind(a)};
yj=function(a,b){var c=b;if("string"==typeof b){if(a.mb[b])return a.mb[b];c=function(){var d=g.u(b);d&&d.apply(g.p,arguments)};
a.mb[b]=c}return c?c:null};
oba=function(a,b){var c="ytPlayer"+b+a.ha;a.D[b]=c;g.p[c]=function(d){var e=g.Wf(function(){a.ob()||(a.Y.na(b,d),g.bb(a.X,String(e)))},0);
g.cb(a.X,String(e),!0)};
return c};
vj=function(a){a.cancel();mj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=rj(a);b&&(tj(a)||!wj(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.gd(a.ab)};
wj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
sj=function(a){return a.L?a.L.jsUrl:a.C.assets.js};
g.Bj=function(a,b){var c=void 0===c?!0:c;a=g.va(a)?g.Xc(a):a;var d=g.zj+"_"+g.La(a),e=g.Aj[d];if(e&&c)return e.loadNewVideoConfig(b),e.api;e=new pj(a,d,b,void 0);g.Aj[d]=e;g.I("player-added",e.api);g.Qd(e,g.w(pba,e));return e.api};
pba=function(a){delete g.Aj[a.getId()]};
g.Cj=function(a){if(!a)return null;var b=g.zj+"_"+g.La(a),c=g.Aj[b];c||(c=new pj(a,b),g.Aj[b]=c);return c.api};
g.Dj=function(a){return g.Cj(document.getElementById(a))};
g.Fj=function(a,b){var c={};c.key=a;c.value=b;return Ej().then(function(d){return new Promise(function(e,f){try{var k=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);k.onsuccess=function(){e()};
k.onerror=function(){f()}}catch(l){f(l)}})})};
g.Gj=function(a){return Ej().then(function(b){return new Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var f=e.result;c(f?f.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})},function(){return null})};
Ej=function(){return Hj?Promise.resolve(Hj):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Hj=d,a(Hj);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Ej()};
c.onupgradeneeded=qba})};
qba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
rba=function(a){if(Ij.getEntriesByType){var b=Ij.getEntriesByType("paint");if(b=g.Oa(b,function(d){return"first-paint"==d.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Ia(b)){b=b();var c=1E3*Math.min(b.requestTime||Infinity,b.startLoadTime||Infinity);c=Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
Jj=function(){var a=g.F("TIMING_TICK_EXPIRATION");a||(a={},g.Of("TIMING_TICK_EXPIRATION",a));return a};
Kj=function(){var a=Jj(),b;for(b in a)g.qg(a[b]);g.Of("TIMING_TICK_EXPIRATION",{})};
Lj=function(a,b){g.gi.call(this,1,arguments)};
Mj=function(a,b){g.gi.call(this,1,arguments)};
Oj=function(a){return g.u("ytcsi."+(a||"")+"data_")||Nj(a)};
Pj=function(a){var b=Oj(a).nonce;b||(b=zi(),Oj(a).nonce=b);return b};
Nj=function(a){var b={tick:{},info:{}};g.r("ytcsi."+(a||"")+"data_",b,void 0);return b};
Qj=function(a){a=Error.call(this,a);this.message=a.message;"stack"in a&&(this.stack=a.stack)};
Sj=function(a){return Rj||g.vg("csi_on_gel")||!!Oj(a).useGel};
Vj=function(a,b,c){var d=Tj(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||g.Uj();return Sj(c)?(c=Pj(c),"_start"===a?ui("baseline_"+c)||g.ci("latencyActionBaselined",{clientActionNonce:c},{timestamp:b}):ui("tick_"+a+"_"+c)||g.ci("latencyActionTicked",{tickName:a,clientActionNonce:c},{timestamp:b}),!0):!1};
Yj=function(a,b,c){c=Tj(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a in Wj){c=Wj[a];g.Qa(sba,c)&&(b=!!b);a in Xj&&"string"===typeof b&&(b=Xj[a]+b.toUpperCase());a=c.split(".");d=c={};for(var e=0;e<a.length-1;e++){var f=a[e];d[f]={};d=d[f]}d[a[a.length-1]]=b;return fj({},c)}g.Qa(tba,a)||(b=new Qj("Unknown label logged with GEL CSI"),b.params=a,g.Tf(b))};
Tj=function(a){a=Oj(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel};
Zj=function(a){a=Tj(a);"gelInfos"in a||(a.gelInfos={});return a.gelInfos};
ak=function(a,b){if(Sj(b)){fj(Zj(b),a);var c=Pj(b);vi(a,c)}};
yba=function(){Rj=!1;var a=g.F("TIMING_INFO",{});for(b in a)bk(b,a[b]);bk("is_nav",1);(a=g.Ki())&&bk("csn",a);(a=g.F("PREVIOUS_ACTION",void 0))&&bk("pa",a);var b=ck();b.p=g.F("CLIENT_PROTOCOL")||"unknown";b.t=g.F("CLIENT_TRANSPORT")||"unknown";bk("yt_vis",uba());if("cold"==b.yt_lt){a=Ij.timing||{};a.navigationStart&&(dk("srt",a.responseStart),1!=b.prerender&&ek("n",a.navigationStart));b=rba(a);0<b&&dk("fpt",b);fk(a);Ij.getEntriesByType&&vba();a=[];if(document.querySelector&&Ij&&Ij.getEntriesByName)for(var c in gk)b=
gk[c],wba(c,b)&&a.push(b);a.length&&bk("rc",a.join(","))}Sj(void 0)&&(c={},c.actionType=xba[g.F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Pj(void 0),vi(c,a));if("cold"==ck().yt_lt){a=hk();c=Tj();b=c.gelTicks?c.gelTicks:c;for(var d in a)g.sb(d,"_")||"tick_"+d in b||Vj(d,a[d]);d=ck();c=c.gelInfos?c.gelInfos:c;for(var e in d)"info_"+e in c||(a=Yj(e,d[e]))&&ak(a)}ik(!0);g.jk(!1)};
lk=function(){Nj(void 0);zba();kk(!1,void 0);g.F("TIMING_ACTION")&&g.Of("PREVIOUS_ACTION",g.F("TIMING_ACTION"));g.Of("TIMING_ACTION","")};
dk=function(a,b,c){var d=hk(c);if(g.vg("use_first_tick")&&mk(a,c))return d[a];b||"_"==a[0]||nk(a,c);var e=b||g.Uj();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=Jj();var f=e[a];f&&(g.qg(f),e[a]=0);Vj(a,b,c)||g.jk(!1,c);return d[a]};
nk=function(a,b){Ij.mark&&(g.sb(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Ij.mark(a))};
ek=function(a,b){bk("yt_sts",a,void 0);dk("_start",b,void 0)};
mk=function(a,b){var c=hk(b);return a in c};
bk=function(a,b,c){ck(c)[a]=b;Sj(c)&&(a=Yj(a,b,c))&&ak(a,c)};
ok=function(a){var b=hk(a);if(b.aft)return b.aft;a=g.F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
fk=function(a,b){dk("nreqs",a.requestStart,b);dk("nress",a.responseStart,b);dk("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(dk("nrs",a.redirectStart,b),dk("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(dk("ndnss",a.domainLookupStart,b),dk("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(dk("ntcps",a.connectStart,b),dk("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(dk("nstcps",a.secureConnectionStart,
b),dk("ntcpe",a.connectEnd,b))};
g.jk=function(a,b){if(!pk(b)){var c=g.F((b||"")+"TIMING_ACTION",void 0),d=hk(b);if(g.u("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=ok(b)))if(qk||(g.ji(Aba,new Lj(Math.round(c-d._start),b)),qk=!0),a||b)rk(b);else{c=!0;var e=g.F("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&rk(b)}}};
uba=function(){switch(g.$g()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
sk=function(a){if(!Sj(void 0)&&!pk(void 0)){var b=g.F("CSI_SERVICE_NAME","youtube");g.F("TIMING_ACTION",void 0)&&b&&(dk("aa",void 0,void 0),bk("ap",1,void 0),bk("yt_fss",a,void 0),rk(void 0))}};
tk=function(a){return Math.round(Ij.timing.navigationStart+a)};
vba=function(){var a=window.location.protocol,b=Ij.getEntriesByType("resource");b=(0,g.uk)(b,function(c){return 0==c.name.indexOf(a+"//web.archive.org/web/20190901000000/https://fonts.gstatic.com/s/")});
(b=(0,g.Jf)(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(dk("wffs",tk(b.startTime)),dk("wffe",tk(b.responseEnd)))};
wba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);g.Aa()&&c.setAttribute("nonce",g.Aa());return d?(c=Ij.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,dk("rsf_"+b,d+Math.round(c.fetchStart)),dk("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(d=ck(void 0),e=Zj(void 0),"rc"in d||"rc"in e||bk("rc",""),
0===c.transferSize))?!0:!1:!1};
ik=function(a){g.r("ytglobal.timingready_",a,void 0)};
hk=function(a){return Oj(a).tick};
ck=function(a){return Oj(a).info};
pk=function(a){return!!g.u("yt.timing."+(a||"")+"pingSent_")};
kk=function(a,b){g.r("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Bba=function(a){var b=hk(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==ck(a).yt_pvis};
rk=function(a){Kj();if(!Sj(a)){var b=hk(a),c=ck(a),d=b._start;for(k in b)if(g.sb(k,"_")&&g.Ea(b[k])){var e=k.slice(1);if(e in Cba){var f=(0,g.vk)(b[k],function(t){return Math.round(t-d)});
c["all_"+e]=f.join()}delete b[k]}f=g.F("CSI_SERVICE_NAME","youtube");var k={v:2,s:f,action:g.F((a||"")+"TIMING_ACTION",void 0)};e=bk.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var l=window.location.protocol+g.u("ytplayer.config.assets.js");(l=Ij.getEntriesByName?Ij.getEntriesByName(l)[0]:null)?c.h5jse=Math.round(c.h5jse-l.responseEnd):delete c.h5jse}b.aft=ok(a);Bba(a)&&"youtube"==f&&(bk("yt_lt","hot_bg",a),f=b.vc,l=b.pbs,delete b.aft,c.aft=Math.round(l-f));for(var m in c)"_"!=m.charAt(0)&&(k[m]=
c[m]);b.ps=g.Uj();m={};f=[];for(var q in b)"_"!=q.charAt(0)&&(l=Math.round(b[q]-d),m[q]=l,f.push(q+"."+l));k.rt=f.join(",");(b=g.u("ytdebug.logTiming"))&&b(k,m);Dba(k,!!c.ap,a);g.ji(Eba,new Mj(m.aft+(e||0),a))}};
Dba=function(a,b,c){if(g.vg("debug_csi_data")){var d=g.u("yt.timing.csiData");d||(d=[],g.r("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;aj(a,f)||g.$i(a,void 0,void 0,void 0,f)}else g.$i(a);kk(!0,c)};
Kba=function(){wk++;var a=g.ad(),b=new g.Cd(0,0,a.width,a.height);xk("vph",a.height);xk("vpw",a.width);(0,g.yk)("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;zk.start();for(var f=0;f<c;f++){var k=a[f];if(Ak(k,b)){var l=Fba(k);l.then(Gba);d.push(l);Bk.push(l);k.loadTime||(e=!1)}}e&&xk("yt_eil",1);(0,g.yk)("vpcc");b=g.Me(d).then(Hba);g.Oe(b,Iba);b.then(Jba);Bk.push(b);return b};
Jba=function(){zk.stop()};
Iba=function(){(0,g.yk)("vpr")};
Ak=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.Zg(c);if(e in Ck)return!0;if(e in Dk)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Dk[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Dk[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Ck[d[c]]=!0;return!0};
Hba=function(a){var b=g.ad();b=new g.Cd(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Ak(a[d].xy,b)&&c<f&&(c=f)}return c};
Fba=function(a){var b=wk;return new g.He(function(c,d){var e={xy:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){wk!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},Ek.push(a))})};
Gba=function(a){zk.start();a=a.time;Gk<a&&(Gk=a,(0,g.yk)("lim",a))};
Lba=function(){(0,g.yk)("vptl",Gk);(0,g.yk)("vpl",Gk)};
Mba=function(){Bk.forEach(function(a){a.cancel()});
Gk=Bk.length=0;Ck={};Dk={};Ek.forEach(function(a){a.slt=void 0});
Ek.length=0};
g.Hk=function(a,b){g.$i("/gen_204?"+a,b)};
Nba=function(a){if(null==a)return[];var b=[];g.vg("ima_prevent_mpu_queries_on_cached_playback")&&0>Ik.indexOf("ad3_module")&&Ik.push("ad3_module");Ik.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Jk=function(){return g.D(g.z("page-container"),"remote-connected")};
Oba=function(){Kk=g.Xf(Lk,5E3);var a=g.Mk();a?(a.addEventListener("onReady",Lk),a.addEventListener("onStateChange",Lk)):Nk("unable to init PP monitor")};
Pk=function(a){for(var b in g.Aj){var c=g.Aj[b];c&&c.cancel()}if(a=a||null)Ok="",g.Bj("player-api",a),a=g.qh(a),a.loaded=!0;Lk();g.r("ytplayer.config",a,void 0)};
g.Mk=function(){return g.Dj("player-api")};
Lk=function(){var a=g.Mk();if(a){var b=g.z("player");b=!b||g.D(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.F("PAGE_NAME"),e=g.Jk();!c||d||e||(Nk("PP playing off watch (paused)"),a.pauseVideo());b&&d?Nk("PP off-screen on watch"):b||d||Nk("PP !off-screen off watch")}};
Nk=function(a){var b=g.F("PAGE_NAME");b&&(Error(a).params=[b,Ok,g.u("_spf_state.nav-counter")],g.r("yt.www.persistentplayer.issue",a,void 0),g.Rf(Error(a),"WARNING"))};
Rk=function(){(0,g.yk)("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){(0,g.yk)("cpt");g.I("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?((0,g.yk)("cpt"),g.I("on_cpt_tick",(new Date).getTime())):setTimeout(function(){(0,g.yk)("cpt");
g.I("on_cpt_tick",(new Date).getTime())},0);
Pba();g.F("CSI_VIEWPORT")&&(Qk=Kba(),Qk.then(function(a){(0,g.yk)("vpl",a);Qk=null},function(){}))};
Pba=function(){Sk("init");var a=g.F("PAGE_NAME",void 0);a&&Sk("init-"+a)};
Sk=function(a){g.tg()?Tk.push(g.pg(g.w(g.fg,a),0)):g.I(a)};
Uk=function(){g.rg(Tk);Tk.length=0;Mba();Qk&&(Qk.cancel(),Qk=null);var a=g.F("PAGE_NAME",void 0);a&&g.fg("dispose-"+a);g.fg("dispose")};
Qba=function(){Rk()};
Rba=function(){g.F("TIMING_REPORT_ON_UNLOAD")&&g.jk(!0);sk("u");g.Ei("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Qi();g.di();g.zh();Uk();g.fg("pageunload")};
Vk=function(){g.Mh()};
Wk=function(){window.yt_spf_loaded_history=!0;g.Mh()};
al=function(){Xk=1;Yk=Zk=0;g.F("TIMING_REPORT_ON_UNLOAD")&&g.jk(!0);g.vg("warm_load_nav_start_web")?(sk("n"),lk(),ik(!1),g.Of("TIMING_AFT_KEYS",[]),bk("yt_lt","warm"),g.Of("TIMING_ACTION",""),g.Of("TIMING_WAIT",[]),Kj(),ek("n")):(sk("n"),lk(),ek("n"));nk("nr");$k(Sba);Qi();g.fg("navigate")};
dl=function(a){a=a.detail.part||a.detail.partial;(0,g.yk)("nc"+Zk);++Zk;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.yk)("bc");else{var b=1==Xk;Xk=2;b?($k(Tba),bl()):$k(Uba);if(b=a&&a.data&&a.data.swfcfg)cl(a.timing,b.args),mk("cfg")||(0,g.yk)("cfg"),Pk(b)}};
el=function(){(0,g.yk)("np"+Yk);++Yk};
fl=function(a){a=a.detail.response;var b=1==Xk;Xk=3;b&&($k(Vba),bl());if(b=a.data&&a.data.swfcfg)cl(a.timing,b.args),mk("cfg")||(0,g.yk)("cfg"),Pk(b)};
jl=function(a){(0,g.yk)("nd");a=a.detail.response;g.gl=a.cacheKey;a=a.timing;var b=window._spf_state;g.hl.navigationCount=b&&b["nav-counter"]||0;g.vg("warm_load_nav_start_web")?(0,g.yk)("srt",a.responseStart):(ek("ne",a.responseStart),xk("srt",Math.max(0,a.responseStart-a.navigationStart)));xk("yt_lt",a.spfCached?"hot":"warm");(0,g.yk)("pfs",a.fetchStart);(0,g.yk)("pfrs",a.responseStart);"redirectStart"in a&&Wba(a);$k(il);document.getElementById("content").style.height="";Rk();Xk=0};
kl=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Rf(a)};
ll=function(a){g.Hk(g.vd({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Yba=function(){Xba();window.yt_spf_loaded_history=!1};
Zba=function(){};
bl=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Uk();a=g.F("PREVIOUS_ACTION");for(var b in g.Nf)delete g.Nf[b];g.Of("PREVIOUS_ACTION",a);g.Of("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.r("ytplayer.config",null,void 0);(b=g.Mk())&&b.stopVideo?(b.stopVideo(),b.getLastError()&&((b=document.getElementById("movie_player"))&&b.stopVideo?(b.stopVideo(),Ok="recovered"):Ok="missing2")):Ok="missing";Lk()};
$k=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.qg(ml);ml=g.pg(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Yf(nl);nl=g.Wf(function(){b.className=e},c)},0)};
Xba=function(){var a=il[0]+50;g.Yf(nl);nl=g.Wf(function(){var b=document.getElementById("progress");b&&b.parentNode.removeChild(b)},a)};
cl=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Nba(b));g.F("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Hk(g.vd(c)))};
pl=function(){return"granted"!=Notification.permission?Promise.resolve():ol().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
rl=function(){ql({type:"notifications_register",data:g.F("ID_TOKEN")})};
ol=function(){return navigator.serviceWorker.getRegistration(String(ug("service_worker_scope")||""))};
sl=function(a){return!(!a||!a.pushManager)};
ql=function(a){ol().then(function(b){if(!b||!b.active)return Promise.reject();b.active.postMessage(a);return Promise.resolve()})};
$ba=function(){if(!g.F("LOGGED_IN",void 0))return Promise.resolve(!1);var a=String(ug("service_worker_push_force_notification_prompt_tag")||"");return a?g.Gj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
dca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?ol().then(sl):Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=pl().then(function(){ql({type:"notifications_check_registration",data:g.F("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return aca(a)}).then(function(c){if(c)return bca(),cca().then(function(){})})})};
aca=function(a){return g.F("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.F("LOGGED_IN",void 0)&&(void 0===a?0:a)?$ba().then(function(b){if(b)return!0;b=[eca(),fca()];g.F("LOGGED_IN",void 0)||b.push(gca());return Promise.all(b).then(function(c){return c.every(function(d){return d})})}):Promise.resolve(!1)};
gca=function(){var a=g.wg("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.Gj("WatchCount").then(function(b){return b>=a})};
cca=function(){var a=arguments;g.vg("service_worker_push_prompt_modal_enable")&&hca();return Notification.requestPermission().then(function(b){tl();var c=document.getElementById("ticker");c&&(c.className=c.classList.remove("show"));if("granted"==b)return pl().then(function(){g.Fj("NotificationsDisabled",!1);rl();return Promise.resolve(!0)});
"denied"==b&&rl();return Promise.resolve(!1)})["catch"](function(){tl();
return Promise.reject.apply(Promise,g.ea(a))})};
bca=function(){g.Gj("PromptCount").then(function(a){return g.Fj("PromptCount",a+1)}).then(function(){return g.Fj("PromptTime",(0,g.Rc)())}).then(function(){var a=String(ug("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.Gj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.Fj("PromptTags",JSON.stringify(c))})})};
eca=function(){return-1==g.wg("service_worker_push_prompt_cap")?Promise.resolve(!0):g.Gj("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.wg("service_worker_push_prompt_cap"))})};
fca=function(){var a=g.wg("service_worker_push_prompt_delay_microseconds");return a?g.Gj("PromptTime").then(function(b){return Promise.resolve((0,g.Rc)()-a>(b||0))}):Promise.resolve(!0)};
ica=function(){ul||tl()};
vl=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
hca=function(){var a=g.z("yt-push-prompt-modal-bg");ul=g.vg("service_worker_push_prompt_modal_ignore_click");a?vl(a):(a=g.dd("div",{id:"yt-push-prompt-modal-bg"}),vl(a),document.body.appendChild(a),g.jh(document,"click",ica))};
tl=function(){var a=g.z("yt-push-prompt-modal-bg");a&&g.hd(a)};
jca=function(a){return sl(a)?dca():Promise.resolve()};
lca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(kca)})};
nca=function(){var a="/sw.js",b=g.F("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=wl(a);g.vg("service_worker_push_enabled")&&a.then(mca).then(jca)};
mca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
kca=function(a){a&&wl("/sw.js?0",a.scope)};
wl=function(a,b){return navigator.serviceWorker.register(a,{scope:b||String(ug("service_worker_scope")||"")||"/"})};
xl=function(){g.Ri.call(this,"www/base");this.D=0};
yl=function(a){(a=a.detail.name)&&Ui(a)};
g.aa=[];fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)zl=Object.setPrototypeOf;else{var Al;a:{var oca={a:!0},Bl={};try{Bl.__proto__=oca;Al=Bl.a;break a}catch(a){}Al=!1}zl=Al?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ha=zl,ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
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
b.prototype.then=function(k,l){function m(B,H){return"function"==typeof B?function(O){try{q(B(O))}catch(U){t(U)}}:H}
var q,t,y=new b(function(B,H){q=B;t=H});
this.ai(m(k,q),m(l,t));return y};
b.prototype["catch"]=function(k){return this.then(void 0,k)};
b.prototype.ai=function(k,l){function m(){switch(q.F){case 1:k(q.D);break;case 2:l(q.D);break;default:throw Error("Unexpected state: "+q.F);}}
var q=this;null==this.C?f.F(m):this.C.push(m)};
b.resolve=d;b.reject=function(k){return new b(function(l,m){m(k)})};
b.race=function(k){return new b(function(l,m){for(var q=g.da(k),t=q.next();!t.done;t=q.next())d(t.value).ai(l,m)})};
b.all=function(k){var l=g.da(k),m=l.next();return m.done?d([]):new b(function(q,t){function y(O){return function(U){B[O]=U;H--;0==H&&q(B)}}
var B=[],H=0;do B.push(void 0),H++,d(m.value).ai(y(B.length-1),t),m=l.next();while(!m.done)})};
return b});
ka("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
ma.prototype.toString=function(){return this.C};
var aaa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
ka("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ka("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&k<e;)if(d[k++]!=b[l++])return!1;return l>=f}});
ka("String.prototype.repeat",function(a){return a?a:function(b){var c=qa(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
ka("Array.prototype.keys",function(a){return a?a:function(){return ra(this,function(b){return b})}});
ka("Array.prototype.values",function(a){return a?a:function(){return ra(this,function(b,c){return c})}});
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
pa();var f=new WeakMap;e.prototype.set=function(l,m){l=0===l?0:l;var q=d(this,l);q.list||(q.list=this.C[q.id]=[]);q.kc?q.kc.value=m:(q.kc={next:this.F,previous:this.F.previous,head:this.F,key:l,value:m},q.list.push(q.kc),this.F.previous.next=q.kc,this.F.previous=q.kc,this.size++);return this};
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
pa();b.prototype.add=function(c){c=0===c?0:c;this.C.set(c,c);this.size=this.C.size;return this};
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
ka("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push(b[d]);return c}});
g.Cl=g.Cl||{};g.p=this||self;baa=/^[\w+/_-]+[=]{0,2}$/;za=null;Ka="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Rc=Date.now||function(){return+new Date};g.Dl=document;g.Id=window;g.x(g.Ma,Error);g.Ma.prototype.name="CustomError";g.Pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.va(a))return g.va(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.rca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.va(a))return g.va(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.va(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.uk=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.va(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.vk=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.va(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Jf=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.v)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.A)(a,function(f,k){e=b.call(d,e,f,k,a)});
return e};
g.El=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.va(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Fl=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.va(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var gb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.kb.prototype.Rd=!0;g.kb.prototype.Wc=function(){return this.C};
g.kb.prototype.toString=function(){return"Const{"+this.C+"}"};
var jb={},ib={},vaa=g.mb("");g.sca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.tca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Gl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.ob.prototype.Rd=!0;g.ob.prototype.Wc=function(){return this.F.toString()};
g.ob.prototype.ll=!0;g.ob.prototype.C=function(){return 1};
var nb={};var vb,wb,xb,yb,zb,Ab,faa;g.Cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
vb=/&/g;wb=/</g;xb=/>/g;yb=/"/g;zb=/'/g;Ab=/\x00/g;faa=/[\x00&<>"']/;g.Gb.prototype.Rd=!0;g.Gb.prototype.Wc=function(){return this.F.toString()};
g.Gb.prototype.ll=!0;g.Gb.prototype.C=function(){return 1};
var haa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,gaa=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,Lb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Fb={};g.Jb("about:blank");g.Pb.prototype.Rd=!0;g.Ob={};g.Pb.prototype.Wc=function(){return this.C};
g.Hl=g.Qb("");g.Il=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.Jl=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Sb.prototype.Rd=!0;g.Rb={};g.Sb.prototype.Wc=function(){return this.C};
g.uca=g.Tb("");a:{var Kl=g.p.navigator;if(Kl){var Ll=Kl.userAgent;if(Ll){g.Ub=Ll;break a}}g.Ub=""};g.bc.prototype.ll=!0;g.bc.prototype.C=function(){return this.D};
g.bc.prototype.Rd=!0;g.bc.prototype.Wc=function(){return this.F.toString()};
var ac={};g.gc("<!DOCTYPE html>",0);g.ue=g.gc("",0);g.Ml=g.gc("<br>",0);g.vca=g.Wa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.cc(g.ue);return!b.parentElement});g.nc=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.sc[" "]=g.Ba;var Ul,iaa,Yl;g.Nl=g.Vb("Opera");g.E=g.Wb();g.Ol=g.Vb("Edge");g.Pl=g.Ol||g.E;g.Ql=g.Vb("Gecko")&&!(-1!=g.Ub.toLowerCase().indexOf("webkit")&&!g.Vb("Edge"))&&!(g.Vb("Trident")||g.Vb("MSIE"))&&!g.Vb("Edge");g.Rl=-1!=g.Ub.toLowerCase().indexOf("webkit")&&!g.Vb("Edge");g.Sl=g.Vb("Macintosh");g.Tl=g.Vb("Windows");g.wca=g.Vb("Linux")||g.Vb("CrOS");g.xca=g.Vb("Android");g.yca=qc();g.zca=g.Vb("iPad");g.Aca=g.Vb("iPod");g.Bca=g.rc();
a:{var Vl="",Wl=function(){var a=g.Ub;if(g.Ql)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Ol)return/Edge\/([\d\.]+)/.exec(a);if(g.E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Rl)return/WebKit\/(\S+)/.exec(a);if(g.Nl)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Wl&&(Vl=Wl?Wl[1]:"");if(g.E){var Xl=uc();if(null!=Xl&&Xl>parseFloat(Vl)){Ul=String(Xl);break a}}Ul=Vl}g.vc=Ul;iaa={};Yl=g.p.document&&g.E?uc():void 0;g.xc=Yl;g.Zl=Xb();g.$l=qc()||g.Vb("iPod");g.am=g.Vb("iPad");g.Cca=g.$b();g.bm=g.Yb();g.cm=g.Zb()&&!g.rc();var Ac;Ac={};g.Cc=null;g.Dc.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.Dc.prototype[Symbol.iterator]=function(){return this});g.Ic="function"==typeof Uint8Array;g.Ec.prototype.bd=function(){Fc(this);return this.ec};
g.Ec.prototype.F=g.Ic?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return Bc(this)};
try{return JSON.stringify(this.ec&&this.bd(),Gc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.bd(),Gc)};
g.Ec.prototype.toString=function(){Fc(this);return this.ec.toString()};
g.Ec.prototype.clone=function(){return new this.constructor(Hc(this.bd()))};g.h=g.Jc.prototype;g.h.isEnabled=function(){return navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ua(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Rc)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Cb)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.ua(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Ic=function(){return g.Kc(this).keys};
g.h.Ib=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Lb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.Ld=g.ba(3);g.h.clear=function(){for(var a=g.Kc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Vh=new g.Jc("undefined"==typeof document?null:document);var Nc={};g.dm={Ga:["BC","AD"],Ka:["Before Christ","Anno Domini"],La:"JFMAMJJASOND".split(""),Ma:"JFMAMJJASOND".split(""),va:"January February March April May June July August September October November December".split(" "),ra:"January February March April May June July August September October November December".split(" "),wa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ba:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Da:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Ja:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Aa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Ca:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Pa:"SMTWTFS".split(""),Na:"SMTWTFS".split(""),Ia:["Q1","Q2","Q3","Q4"],Ha:["1st quarter","2nd quarter","3rd quarter","4th quarter"],za:["AM","PM"],qa:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],xa:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Fa:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],sa:6,Ea:[5,6],ua:5};
g.em=g.dm;g.em=g.dm;g.h=g.Sc.prototype;g.h.De=g.em.sa;g.h.Vg=g.em.ua;g.h.clone=function(){var a=new g.Sc(this.date);a.De=this.De;a.Vg=this.Vg;return a};
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
g.h.add=function(a){if(a.C||a.months){var b=this.getMonth()+a.months+12*a.C,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);var d=Math.min(g.Oc(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),Qc(this,a.getDate()))};
g.h.je=function(a){return[this.getFullYear(),g.oc(this.getMonth()+1,2),g.oc(this.getDate(),2)].join(a?"-":"")+""};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){return this.je()};
g.h.valueOf=function(){return this.date.valueOf()};var kaa;kaa=!g.E||g.yc(9);g.Dca=!g.Ql&&!g.E||g.E&&g.yc(9)||g.Ql&&g.wc("1.9.1");g.fm=g.E&&!g.wc("9");g.Eca=g.E||g.Nl||g.Rl;g.h=g.Tc.prototype;g.h.clone=function(){return new g.Tc(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Tc&&g.Uc(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.Wc.prototype;g.h.clone=function(){return new g.Wc(this.width,this.height)};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!(this.width*this.height)};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Yc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.md=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.yd=/#|$/;var Fca={oK:"allow-forms",pK:"allow-modals",qK:"allow-orientation-lock",rK:"allow-pointer-lock",sK:"allow-popups",tK:"allow-popups-to-escape-sandbox",uK:"allow-presentation",vK:"allow-same-origin",wK:"allow-scripts",xK:"allow-top-navigation",yK:"allow-top-navigation-by-user-activation"},maa=g.Wa(function(){return g.Bd(Fca)});g.h=g.Cd.prototype;g.h.clone=function(){return new g.Cd(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Tc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.gm=g.Ql?"MozUserSelect":g.Rl||g.Ol?"WebkitUserSelect":null;g.Ca(g.Gd);g.hm=!!window.google_async_iframe_id;g.im=g.hm&&window.parent||window;g.Gg=(new Date).getTime();g.C.prototype.Tc=!1;g.C.prototype.ob=function(){return this.Tc};
g.C.prototype.dispose=function(){this.Tc||(this.Tc=!0,this.W())};
g.C.prototype.W=function(){if(this.Gf)for(;this.Gf.length;)this.Gf.shift()()};g.Td.prototype.stopPropagation=function(){this.F=!0};
g.Td.prototype.preventDefault=function(){this.Sr=!1};var ie,Hca,taa;g.Gca=!g.E||g.yc(9);ie=!g.E||g.yc(9);Hca=g.E&&!g.wc("9");taa=function(){if(!g.p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.p.addEventListener("test",g.Ba,b),g.p.removeEventListener("test",g.Ba,b)}catch(c){}return a}();g.jm=g.Rl?"webkitTransitionEnd":g.Nl?"otransitionend":"transitionend";g.x(g.Ud,g.Td);var Ica={2:"touch",3:"pen",4:"mouse"};
g.Ud.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Ql&&(g.tc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Sl?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.va(a.pointerType)?a.pointerType:Ica[a.pointerType]||"";this.state=a.state;this.yc=
a;a.defaultPrevented&&this.preventDefault()};
g.Ud.prototype.stopPropagation=function(){g.Ud.T.stopPropagation.call(this);this.yc.stopPropagation?this.yc.stopPropagation():this.yc.cancelBubble=!0};
g.Ud.prototype.preventDefault=function(){g.Ud.T.preventDefault.call(this);var a=this.yc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Hca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Vd="closure_listenable_"+(1E6*Math.random()|0),qaa=0;g.h=g.Yd.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=$d(a,b,d,e);-1<k?(b=a[k],c||(b.Zh=!1)):(b=new raa(b,this.src,f,!!d,e),b.Zh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=$d(e,b,c,d);return-1<b?(Xd(e[b]),g.Sa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Xd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.hg=g.ba(5);g.h.ff=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=$d(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.ua(a),d=c?a.toString():"",e=g.ua(b);return g.Ya(this.listeners,function(f){for(var k=0;k<f.length;++k)if(!(c&&f[k].type!=d||e&&f[k].capture!=b))return!0;return!1})};var fe="closure_lm_"+(1E6*Math.random()|0),le={},he=0,oe="__closure_events_fn_"+(1E9*Math.random()>>>0);g.x(g.pe,g.C);g.pe.prototype[Vd]=!0;g.h=g.pe.prototype;g.h.Di=function(){return this.bm};
g.h.Dh=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.be(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.je(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Di();if(b){var c=[];for(var d=1;b;b=b.Di())c.push(b),++d}b=this.Xt;d=a.type||a;if(g.va(a))a=new g.Td(a,b);else if(a instanceof g.Td)a.target=a.target||b;else{var e=a;a=new g.Td(d,b);g.hb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=qe(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=qe(k,d,!0,a)&&e,a.F||(e=qe(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=qe(k,d,!1,a)&&e;return e};
g.h.W=function(){g.pe.T.W.call(this);this.removeAllListeners();this.bm=null};
g.h.O=function(a,b,c,d){return this.wd.add(String(a),b,!1,c,d)};
g.h.He=function(a,b,c,d){return this.wd.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.wd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.wd?this.wd.removeAll(a):0};
g.h.hg=g.ba(4);g.h.ff=function(a,b,c,d){return this.wd.ff(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.wd.hasListener(g.ua(a)?String(a):void 0,b)};re.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var Ce;var De=new re(function(){return new we},function(a){a.reset()});
ve.prototype.add=function(a,b){var c=De.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
ve.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
we.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
we.prototype.reset=function(){this.next=this.scope=this.lc=null};var xe,ye=!1,ze=new ve;Ie.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var Je=new re(function(){return new Ie},function(a){a.reset()});
g.He.prototype.then=function(a,b,c){return Ne(this,g.Ia(a)?a:null,g.Ia(b)?b:null,c)};
g.Ee(g.He);g.He.prototype.cancel=function(a){0==this.C&&Ae(function(){var b=new g.Ue(a);Pe(this,b)},this)};
g.He.prototype.Y=function(a){this.C=0;g.Ge(this,2,a)};
g.He.prototype.N=function(a){this.C=0;g.Ge(this,3,a)};
g.He.prototype.J=function(){for(var a;a=Qe(this);)Re(this,a,this.C,this.M);this.L=!1};
var We=te;g.x(g.Ue,g.Ma);g.Ue.prototype.name="cancel";g.x(g.Ze,g.C);g.h=g.Ze.prototype;g.h.nb=0;g.h.W=function(){g.Ze.T.W.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.nb=g.Xe(this.Yb,g.ua(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Ye(this.nb);this.nb=0};
g.h.bf=g.ba(7);g.h.isActive=function(){return 0!=this.nb};
g.h.uo=function(){this.nb=0;this.C&&this.C.call(this.F)};g.x(af,Baa);af.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
af.prototype.update=function(a,b){if(null!=a){g.ua(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)bf(this,a,d),d+=this.F;if(g.va(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){bf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){bf(this,e);f=0;break}}this.D=f;this.H+=b}};
af.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;bf(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.ef="StopIteration"in g.p?g.p.StopIteration:{message:"StopIteration",stack:""};g.df.prototype.next=function(){throw g.ef;};
g.df.prototype.dd=function(){return this};g.h=g.jf.prototype;g.h.Lb=function(){return this.D};
g.h.Ib=g.ba(0);g.h.Ic=function(){g.lf(this);return this.C.concat()};
g.h.Ld=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Lb())return!1;var c=b||Daa;g.lf(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Pe=this.D=this.C.length=0};
g.h.remove=function(a){return g.kf(this.F,a)?(delete this.F[a],this.D--,this.Pe++,this.C.length>2*this.D&&g.lf(this),!0):!1};
g.h.get=function(a,b){return g.kf(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.kf(this.F,a)||(this.D++,this.C.push(a),this.Pe++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.Ic(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.jf(this)};
g.h.dd=function(a){g.lf(this);var b=0,c=this.Pe,d=this,e=new g.df;e.next=function(){if(c!=d.Pe)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.ef;var f=d.C[b++];return a?f:d.F[f]};
return e};var pf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Faa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.x(g.qf,g.C);g.h=g.qf.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.sd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.Ba):(c&&g.Ta(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.na=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Gaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.sd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.A)(b,this.sd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Lb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Lb(b);return a};
g.h.W=function(){g.qf.T.W.call(this);this.clear();this.D.length=0};g.sf.prototype.set=function(a,b){g.ua(b)?this.C.set(a,g.nf(b)):this.C.remove(a)};
g.sf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.sf.prototype.remove=function(a){this.C.remove(a)};g.x(tf,g.sf);tf.prototype.set=function(a,b){tf.T.set.call(this,a,vf(b))};
tf.prototype.F=function(a){a=tf.T.get.call(this,a);if(!g.ua(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
tf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ua(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.x(g.wf,tf);g.wf.prototype.set=function(a,b,c){if(b=vf(b)){if(c){if(c<(0,g.Rc)()){g.wf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Rc)()}g.wf.T.set.call(this,a,b)};
g.wf.prototype.F=function(a,b){var c=g.wf.T.F.call(this,a);if(c)if(!b&&g.xf(c))g.wf.prototype.remove.call(this,a);else return c};g.x(yf,Haa);yf.prototype.Lb=function(){var a=0;g.gf(this.dd(!0),function(){a++});
return a};
yf.prototype.clear=function(){var a=Caa(this.dd(!0)),b=this;(0,g.A)(a,function(c){b.remove(c)})};g.x(g.zf,yf);g.h=g.zf.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.va(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Lb=function(){return this.C.length};
g.h.dd=function(a){var b=0,c=this.C,d=new g.df;d.next=function(){if(b>=c.length)throw g.ef;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!g.va(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.x(g.Af,g.zf);g.x(Cf,yf);var Iaa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Bf=null;g.h=Cf.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(Df(a),b);Ef(this)};
g.h.get=function(a){a=this.C.getAttribute(Df(a));if(!g.va(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(Df(a));Ef(this)};
g.h.Lb=function(){return Ff(this).attributes.length};
g.h.dd=function(a){var b=0,c=Ff(this).attributes,d=new g.df;d.next=function(){if(b>=c.length)throw g.ef;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!g.va(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){for(var a=Ff(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ef(this)};g.x(Gf,yf);Gf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
Gf.prototype.get=function(a){return this.F.get(this.C+a)};
Gf.prototype.remove=function(a){this.F.remove(this.C+a)};
Gf.prototype.dd=function(a){var b=this.F.dd(!0),c=this,d=new g.df;d.next=function(){for(var e=b.next();e.substr(0,c.C.length)!=c.C;)e=b.next();return a?e.substr(c.C.length):c.F.get(e)};
return d};If.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
If.prototype.get=function(a){return!!this.C[a]};/*
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
g.Nf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.r("yt.config_",g.Nf,void 0);var Vf={};var Jca=g.u("ytPubsubPubsubInstance")||new g.qf;g.qf.prototype.subscribe=g.qf.prototype.subscribe;g.qf.prototype.unsubscribeByKey=g.qf.prototype.sd;g.qf.prototype.publish=g.qf.prototype.na;g.qf.prototype.clear=g.qf.prototype.clear;g.r("ytPubsubPubsubInstance",Jca,void 0);var ag=g.u("ytPubsubPubsubSubscribedKeys")||{};g.r("ytPubsubPubsubSubscribedKeys",ag,void 0);var cg=g.u("ytPubsubPubsubTopicToKeys")||{};g.r("ytPubsubPubsubTopicToKeys",cg,void 0);var bg=g.u("ytPubsubPubsubIsSynchronous")||{};
g.r("ytPubsubPubsubIsSynchronous",bg,void 0);var Laa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Maa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.kg.prototype.initialize=function(a,b,c,d){var e=this;b?(this.F=!0,g.ig(b,function(){e.F=!1;if(window.botguard)lg(e,c,d);else{g.jg(b);var f=Error("Unable to load Botguard");f.params="from "+b;g.Tf(f)}})):a&&(eval(a),window.botguard?lg(this,c,d):g.Tf(Error("Unable to load Botguard from JS")))};
g.kg.prototype.Sd=function(){return!!this.C};
g.kg.prototype.dispose=function(){this.C=null};g.n(sg,Naa);sg.prototype.start=function(){var a=g.u("yt.scheduler.instance.start");a&&a()};
sg.prototype.pause=function(){var a=g.u("yt.scheduler.instance.pause");a&&a()};
g.Ca(sg);sg.getInstance();var km;km=window;g.Ch=km.ytcsi&&km.ytcsi.now?km.ytcsi.now:km.performance&&km.performance.timing&&km.performance.now?function(){return km.performance.timing.navigationStart+km.performance.now()}:function(){return(new Date).getTime()};g.xg=new g.kg;g.Cg=new function(){var a=window.document;this.C=window;this.F=a};
g.r("yt.ads_.signals_.getAdSignalsString",function(a){return g.yg(Fg(a))},void 0);(0,g.Rc)();var Hg=g.ua(XMLHttpRequest)?function(){return new XMLHttpRequest}:g.ua(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Kg,Taa,Pg;Kg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Taa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Pg=!1;g.lm=Rg;Vg.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.Fe(a)?a:g.Xg(a)):2===this.F&&b?(a=b.call(c,this.C),g.Fe(a)?a:g.Wg(a)):this};
Vg.prototype.getValue=function(){return this.C};
g.Ee(Vg);var Kca=0,Xaa=g.Rl?"webkit":g.Ql?"moz":g.E?"ms":g.Nl?"o":"",Yg=g.u("ytDomDomGetNextId")||function(){return++Kca};
g.r("ytDomDomGetNextId",Yg,void 0);var Yaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.ah.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.ah.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.ah.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eh=g.u("ytEventsEventsListeners")||{};g.r("ytEventsEventsListeners",eh,void 0);var gh=g.u("ytEventsEventsCounter")||{count:0};g.r("ytEventsEventsCounter",gh,void 0);var hh=g.Wa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.Uj=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.mm="Microsoft Internet Explorer"==navigator.appName;g.x(g.nh,g.C);g.nh.prototype.Y=function(a){this.C=new g.Tc(g.ch(a),g.dh(a))};
g.nh.prototype.M=function(){if(this.C){var a=g.Uj();if(0!=this.D){var b=g.Vc(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.Yb();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.nh.prototype.W=function(){g.Zf(this.N);g.ih(this.J)};g.n(oh,g.C);oh.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
oh.prototype.W=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.callback)}g.C.prototype.W.call(this)};ph.prototype.clone=function(){var a=new ph,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.Da(c)?a[b]=g.eb(c):a[b]=c}return a};var sh={},rh=0;var bba,Jh,Kh,aba,Dh,cba,xh;bba=Math.pow(2,16)-1;Jh=null;Kh=0;aba={log_event:"events",log_interaction:"interactions"};Dh=Object.create(null);Dh.log_event="GENERIC_EVENT_LOGGING";Dh.log_interaction="INTERACTION_LOGGING";cba=new Set(["log_event"]);xh={};g.uh=0;g.vh=0;g.wh=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.r("ytLoggingTransportLogPayloadsQueue_",g.wh,void 0);var Ih=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};g.r("ytLoggingTransportTokensToCttTargetIds_",Ih,void 0);
var Ah=g.u("ytLoggingTransportDispatchedStats_")||{};g.r("ytLoggingTransportDispatchedStats_",Ah,void 0);var Eh=g.u("ytLoggingTransportCapturedTime_")||{};g.r("ytytLoggingTransportCapturedTime_",Eh,void 0);var Ph={};var Rh=g.u("ytLoggingGelSequenceIdObj_")||{};g.r("ytLoggingGelSequenceIdObj_",Rh,void 0);g.Yh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.Rc)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.nf(b))}catch(f){return}else e=escape(b);g.Wh(a,e,c,this.F)};
g.Yh.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Vh.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.Yh.prototype.remove=function(a){this.C&&this.C.remove(a);g.Xh(a,"/",this.F)};var Zh=new g.Yh("yt.innertube");g.ei.prototype.toString=function(){return JSON.stringify(g.fi(this))};g.hi.prototype.toString=function(){return this.topic};var Lca=g.u("ytPubsub2Pubsub2Instance")||new g.qf;g.qf.prototype.subscribe=g.qf.prototype.subscribe;g.qf.prototype.unsubscribeByKey=g.qf.prototype.sd;g.qf.prototype.publish=g.qf.prototype.na;g.qf.prototype.clear=g.qf.prototype.clear;g.r("ytPubsub2Pubsub2Instance",Lca,void 0);var ki=g.u("ytPubsub2Pubsub2SubscribedKeys")||{};g.r("ytPubsub2Pubsub2SubscribedKeys",ki,void 0);var mi=g.u("ytPubsub2Pubsub2TopicToKeys")||{};g.r("ytPubsub2Pubsub2TopicToKeys",mi,void 0);
var li=g.u("ytPubsub2Pubsub2IsAsync")||{};g.r("ytPubsub2Pubsub2IsAsync",li,void 0);g.r("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.n(pi,g.gi);var gba=new g.hi("screen-created",pi),qi=[],ri=0;var wi=g.u("ytLoggingLatencyUsageStats_")||{};g.r("ytLoggingLatencyUsageStats_",wi,void 0);var xi=0;var yi=(0,g.Rc)().toString();var Ci=g.u("ytLoggingTimeDocumentNonce_")||zi(),Di,Ai;g.r("ytLoggingTimeDocumentNonce_",Ci,void 0);Di=0;g.Bi=null;Ai=null;g.r("yt_logging_screen.getRootVeType",Ii,void 0);g.r("yt_logging_screen.getCurrentCsn",g.Ki,void 0);g.r("yt_logging_screen.setCurrentScreen",g.Li,void 0);g.h=g.Ri.prototype;g.h.AG=function(){this.Sd()||this.init()};
g.h.enable=function(){this.C=1;(0,g.A)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.AG,this),this.subscribe("dispose-"+a,this.dispose,this),g.F("PAGE_NAME")==a&&g.Si(this))},this)};
g.h.init=function(){g.qg(this.F);this.C=2;this.L&&this.L()};
g.h.Sd=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.qg(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Rf(a)}};
g.h.subscribe=function(a,b,c){a=g.dg(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.eg(this.G);this.G=[]};var Ti=g.u("yt.modules.registry_")||{};g.r("yt.modules.registry_",Ti,void 0);g.Wi=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.r("yt.msgs_",g.Wi,void 0);var bj={},lba=0;var mba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.n(pj,g.C);g.h=pj.prototype;g.h.getId=function(){return this.ha};
g.h.loadNewVideoConfig=function(a){if(!this.ob()){this.aa&&(g.Yf(this.aa),this.aa=0);this.sb=a=g.qh(a);this.C=a.clone();nj(this);this.Oa||(this.Oa=yj(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Fd(this.H,Number(a)||a);if(a=this.C.attrs.height)this.H.style.height=g.Ed(Number(a)||a,!0);oj(this);this.M&&qj(this)}};
g.h.Dv=function(){return this.sb};
g.h.Cz=function(){return this.M};
g.h.Th=function(a,b){var c=this,d=yj(this,b);if(d){if(!g.Qa(this.Ud,a)&&!this.D[a]){var e=oba(this,a);this.N&&this.N(a,e)}this.Y.subscribe(a,d);"onReady"==a&&this.M&&g.Wf(function(){d(c.api)},0)}};
g.h.oG=function(a,b){if(!this.ob()){var c=yj(this,b);c&&g.rf(this.Y,a,c)}};
g.h.Wt=function(a){g.I("a11y-announce",a)};
g.h.HD=function(a){g.I("WATCH_LATER_VIDEO_ADDED",a)};
g.h.ID=function(a){g.I("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Nv=function(){return this.la||(rj(this)?"html5":null)};
g.h.Hv=function(){return this.qb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.gg(sj(this));spf.script.ignore(b,a)}g.Yf(this.wb);this.V=!1};
g.h.W=function(){vj(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Rf(b)}this.mb=null;for(var a in this.D)g.p[this.D[a]]=null;this.sb=this.C=this.api=null;delete this.ab;delete this.H;g.C.prototype.W.call(this)};g.Aj={};g.zj="player_uid_"+(1E9*Math.random()>>>0);var Hj=null;g.nm=window.performance&&window.performance.memory;g.hl={};var Ij=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.n(Lj,g.gi);g.n(Mj,g.gi);var Aba=new g.hi("aft-recorded",Lj),Eba=new g.hi("timing-sent",Mj);g.n(Qj,Error);var Rj=!1,rm={},Wj=(rm.ad_allowed="adTypesAllowed",rm.yt_abt="adBreakType",rm.ad_cpn="adClientPlaybackNonce",rm.ad_docid="adVideoId",rm.yt_ad_an="adNetworks",rm.ad_at="adType",rm.browse_id="browseId",rm.p="httpProtocol",rm.t="transportProtocol",rm.cpn="clientPlaybackNonce",rm.cseg="creatorInfo.creatorSegment",rm.csn="clientScreenNonce",rm.docid="videoId",rm.GetHome_rid="getHomeRequestId",rm.is_continuation="isContinuation",rm.is_nav="isNavigation",rm.b_p="kabukiInfo.browseParams",rm.is_prefetch="kabukiInfo.isPrefetch",
rm.is_secondary_nav="kabukiInfo.isSecondaryNav",rm.prev_browse_id="kabukiInfo.prevBrowseId",rm.query_source="kabukiInfo.querySource",rm.voz_type="kabukiInfo.vozType",rm.yt_lt="loadType",rm.mver="creatorInfo.measurementVersion",rm.yt_ad="isMonetized",rm.nr="webInfo.navigationReason",rm.ncnp="webInfo.nonPreloadedNodeCount",rm.prt="playbackRequiresTap",rm.pis="playerInfo.playerInitializedState",rm.paused="playerInfo.isPausedOnLoad",rm.yt_pt="playerType",rm.fmt="playerInfo.itag",rm.yt_pl="watchInfo.isPlaylist",
rm.yt_pre="playerInfo.preloadType",rm.yt_ad_pr="prerollAllowed",rm.pa="previousAction",rm.yt_red="isRedSubscriber",rm.st="serverTimeMs",rm.aq="tvInfo.appQuality",rm.br_trs="tvInfo.bedrockTriggerState",rm.label="tvInfo.label",rm.is_mdx="tvInfo.isMdx",rm.preloaded="tvInfo.isPreloaded",rm.query="unpluggedInfo.query",rm.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",rm.yt_vst="videoStreamType",rm.vph="viewportHeight",rm.vpw="viewportWidth",rm.yt_vis="isVisible",rm),sba="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
sm={},Xj=(sm.mver="MEASUREMENT_VERSION_",sm.pis="PLAYER_INITIALIZED_STATE_",sm.yt_pt="LATENCY_PLAYER_",sm.pa="LATENCY_ACTION_",sm.yt_vst="VIDEO_STREAM_TYPE_",sm),tba="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");var Cba,gk,xba,qk,zba,xk,Wba;Cba={vc:!0};
gk={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_sel_auto_svg_home_v2"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
xba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP","artist.analytics":"LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS","artist.events":"LATENCY_ACTION_CREATOR_ARTIST_CONCERTS","artist.presskit":"LATENCY_ACTION_CREATOR_ARTIST_PROFILE",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
"channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",chips:"LATENCY_ACTION_CHIPS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",
search:"LATENCY_ACTION_RESULTS",search_ui:"LATENCY_ACTION_SEARCH_UI",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS",ww_rqs:"LATENCY_ACTION_WHO_IS_WATCHING","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
"video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC","video.monetization":"LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",voice_assistant:"LATENCY_ACTION_VOICE_ASSISTANT"};qk=!1;
zba=(0,g.v)(Ij.clearResourceTimings||Ij.webkitClearResourceTimings||Ij.mozClearResourceTimings||Ij.msClearResourceTimings||Ij.oClearResourceTimings||g.Ba,Ij);xk=bk;Wba=fk;g.yk=dk;var Gk=0,Bk=[],Ek=[],wk=0,Ck={},Dk={},zk=new g.Ze(Lba,1E3);var Ik=["server_prefetched_vast","vmap"];var Kk,Ok="";var Qk=null,Tk=[];var Xk,nl,ml,Zk,Yk,Sba,Vba,Tba,Uba,il;Zk=0;Yk=0;Sba=[900,60,"waiting"];Vba=[500,99,"waiting"];Tba=[300,60,"waiting"];Uba=[400,99,"waiting"];il=[300,101,"done"];var ul=!1;window.yt=window.yt||{};g.r("yt.setConfig",g.Of,void 0);g.r("yt.pushConfigArray",Pf,void 0);g.r("yt.getConfig",g.F,void 0);g.r("yt.config.set",g.Of,void 0);g.r("yt.config.pushArray",Pf,void 0);g.r("yt.config.get",g.F,void 0);g.r("yt.hasMsg",g.Yi,void 0);g.r("yt.setMsg",Xi,void 0);g.r("yt.setGoogMsg",Zi,void 0);g.r("yt.msgs.has",g.Yi,void 0);g.r("yt.msgs.set",Xi,void 0);g.r("yt.msgs.setGoog",Zi,void 0);g.r("yt.pubsub.publish",g.I,void 0);g.r("yt.pubsub.subscribe",g.dg,void 0);
g.r("ytcsi.tick",g.yk,void 0);g.x(xl,g.Ri);
xl.prototype.enable=function(){window.onload=Qba;window.onunload=Rba;window.onerror=Kaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Vk),window.addEventListener("spfhistory",Wk),window.addEventListener("spfrequest",al),window.addEventListener("spfpartprocess",dl),window.addEventListener("spfpartdone",el),window.addEventListener("spfprocess",fl),window.addEventListener("spfdone",jl),window.addEventListener("spferror",kl),window.addEventListener("spfreload",
ll),window.addEventListener("spfjsbeforeunload",yl)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",Yba),this.subscribe("dispose",Zba)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
xl.prototype.init=function(){xl.T.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.F("PAGEFRAME_JS")){var b=g.F("PAGEFRAME_JS",void 0);var c=function(){var e=g.u("ytbin.www.pageframe.setup");e&&(window.ytPageFrameLoaded=!0,e())}}else a&&(a=g.u("yt.www.masthead.loadSearchbox"))&&a();
a=g.F("JS_COMMON_MODULE");var d=g.F("JS_PAGE_MODULES");d||(d=[a]);a=g.F("JS_DELAY_LOAD",0);0<a?(g.Yf(this.D),this.D=g.Wf(function(){b&&g.ig(b,c);spf.script.require(d)},a)):(b&&g.ig(b,c),spf.script.require(d));
g.r("yt.abuse.player.botguardInitialized",Paa,void 0);g.r("yt.abuse.player.invokeBotguard",Qaa,void 0);g.r("yt.abuse.dclkstatus.checkDclkStatus",Oaa,void 0);g.r("yt.player.exports.navigate",g.lj,void 0);g.r("yt.util.activity.init",g.Oh,void 0);g.r("yt.util.activity.getTimeSinceActive",g.Qh,void 0);g.r("yt.util.activity.setTimestamp",g.Mh,void 0);Pk(g.u("ytplayer.config"));g.u("ytspf.enabled")&&Oba();yba();g.F("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.vg("service_worker_enabled")?nca():lca())};
xl.prototype.dispose=function(){g.Yf(this.D);var a=g.u("ytbin.www.pageframe.cancelSetup");a&&a();g.Zf(Kk);if(a=g.Mk())a.removeEventListener("onReady",Lk),a.removeEventListener("onStateChange",Lk);ik(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.G(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.mh(a);xl.T.dispose.call(this)};
xl.prototype.disable=function(){xl.T.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Vk),window.removeEventListener("spfhistory",Wk),window.removeEventListener("spfrequest",al),window.removeEventListener("spfpartprocess",dl),window.removeEventListener("spfpartdone",el),window.removeEventListener("spfprocess",fl),window.removeEventListener("spfdone",jl),window.removeEventListener("spferror",kl),window.removeEventListener("spfreload",ll),window.removeEventListener("spfjsbeforeunload",
yl));window.onload=null;window.onunload=null;window.onerror=null};
g.Vi(new xl);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:00:00 Sep 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:44:33 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 79.223
  exclusion.robots: 0.097
  exclusion.robots.policy: 0.087
  cdx.remote: 0.059
  esindex: 0.01
  LoadShardBlock: 37.806 (3)
  PetaboxLoader3.datanode: 54.081 (5)
  load_resource: 92.248 (2)
  PetaboxLoader3.resolve: 70.603 (2)
*/