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

var _yt_www={};(function(g){var window=this;var ca,aaa,ka,la,ma,oa,na,pa,ra,sa,daa,eaa,Cb,Wb,qc,iaa,xc,Bc,Cc,Dc,Lc,Mc,kaa,maa,rd,naa,oaa,sd,td,qaa,Cd,Ed,Fd,Kd,raa,Nd,Ud,Td,taa,Xd,Yd,Zd,$d,vaa,be,ce,ge,waa,he,oe,qe,xaa,ve,ze,te,re,zaa,ye,we,xe,Be,yaa,Aaa,Ge,He,Le,Baa,Caa,Daa,Re,Te,Faa,Ye,Ze,af,Gaa,df,hf,jf,kf,lf,mf,Df,Iaa,Hf,Kf,Lf,Nf,Jaa,Vf,fg,Maa,ng,ig,Naa,pg,Oaa,Paa,Qaa,Raa,Taa,Gg,Uaa,Hg,Ig,Vaa,Ng,Lg,Jg,Pg,Xg,gh,hh,Zaa,vh,Yaa,cba,Hh,Nh,Oh,dba,Uh,Vh,di,ci,eba,hi,oi,pi,qi,ui,yi,Bi,Di,Ei,fba,iba,Ji,Li,Ii,Ki,Ri,Si,Yi,jba,Xi,Zi,kba,bj,Qi,cj,lba,
$i,aj,mba,mj,nba,oba,rj,sj,tj,uj,tba,Mj,yj,Nj,zj,wj,Hj,Rj,Aj,pba,Vj,Gj,Wj,qba,rba,Ij,Dj,Ej,xj,Qj,Fj,Yj,Kj,Sj,Lj,yba,Cj,Uj,Aba,Hba,Gba,Fba,ek,Eba,Cba,Dba,Iba,Jba,Kba,Lba,sk,ok,qk,uk,Mba,vk,xk,Nba,Oba,yk,zk,Ek,Ik,Jk,Kk,Pk,Qk,Rk,Vba,Wba,Fk,Hk,Dk,Uba,Gk,Vk,Xk,Uk,Yk,Wk,Xba,aca,Yba,dca,$ba,Zba,bca,cca,fca,al,eca,Zk,gca,ica,kca,jca,hca,bl,cl,dl,ea,el,Fa,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
g.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
aaa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
g.ha=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.T=b.prototype};
ka=function(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}};
la=function(){la=function(){};
ia.Symbol||(ia.Symbol=baa)};
ma=function(a,b){this.C=a;ja(this,"description",{configurable:!0,writable:!0,value:b})};
oa=function(){la();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return na(ca(this))}});
oa=function(){}};
na=function(a){oa();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a};
pa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
ra=function(a,b){oa();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
sa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ta=function(a){return void 0!==a};
g.ua=function(a){return"string"==typeof a};
g.wa=function(a){return"boolean"==typeof a};
g.xa=function(a){return"number"==typeof a};
g.p=function(a,b,c){a=a.split(".");c=c||g.n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ta(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.r=function(a,b){for(var c=a.split("."),d=b||g.n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.ya=function(){};
g.za=function(a){a.Jc=void 0;a.getInstance=function(){return a.Jc?a.Jc:a.Jc=new a}};
g.Aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Ba=function(a){return"array"==g.Aa(a)};
g.Ca=function(a){var b=g.Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Da=function(a){return"function"==g.Aa(a)};
g.Ea=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ga=function(a){return a[Fa]||(a[Fa]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.t=daa:g.t=eaa;return g.t.apply(null,arguments)};
g.v=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.w=function(a,b){function c(){}
c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.kw=function(d,e,f){for(var k=Array(arguments.length-2),l=2;l<arguments.length;l++)k[l-2]=arguments[l];b.prototype[e].apply(d,k)}};
g.Ha=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ja=function(a,b,c){b=g.Ia(a,b,c);return 0>b?null:g.ua(a)?a.charAt(b):a[b]};
g.Ia=function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ma=function(a,b){return 0<=(0,g.La)(a,b)};
g.Na=function(a){return 0==a.length};
g.Pa=function(a,b){var c=(0,g.La)(a,b),d;(d=0<=c)&&g.Oa(a,c);return d};
g.Oa=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Qa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Sa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Ta=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Ua=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Va=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Wa=function(a,b){return null!==a&&b in a};
g.Xa=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.Ya=function(a){for(var b in a)return!1;return!0};
g.Za=function(a,b){b in a&&delete a[b]};
g.$a=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.ab=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};
g.bb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.cb=function(a){var b=g.Aa(a);if("object"==b||"array"==b){if(g.Da(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.cb(a[c]);return b}return a};
g.eb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<db.length;f++)c=db[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.hb=function(a,b){this.C=a===fb&&b||"";this.F=gb};
g.ib=function(a){return a instanceof g.hb&&a.constructor===g.hb&&a.F===gb?a.C:"type_error:Const"};
g.jb=function(a){return new g.hb(fb,a)};
g.lb=function(){this.F="";this.D=kb};
g.nb=function(a){return g.mb(a).toString()};
g.mb=function(a){if(a instanceof g.lb&&a.constructor===g.lb&&a.D===kb)return a.F;g.Aa(a);return"type_error:TrustedResourceUrl"};
g.pb=function(a){return g.ob(g.ib(a))};
g.ob=function(a){var b=new g.lb;b.F=a;return b};
g.qb=function(a,b){return 0==a.lastIndexOf(b,0)};
g.rb=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.sb=function(a){return/^[\s\xa0]*$/.test(a)};
g.zb=function(a,b){if(b)a=a.replace(tb,"&amp;").replace(ub,"&lt;").replace(vb,"&gt;").replace(wb,"&quot;").replace(xb,"&#39;").replace(yb,"&#0;");else{if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(tb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ub,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(vb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(wb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(xb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(yb,"&#0;"))}return a};
g.Ab=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.Db=function(a,b){for(var c=0,d=(0,g.Bb)(String(a)).split("."),e=(0,g.Bb)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Cb(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||Cb(0==l[2].length,0==m[2].length)||Cb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Cb=function(a,b){return a<b?-1:a>b?1:0};
g.Fb=function(){this.F="";this.D=Eb};
g.Hb=function(a){return g.Gb(a).toString()};
g.Gb=function(a){if(a instanceof g.Fb&&a.constructor===g.Fb&&a.D===Eb)return a.F;g.Aa(a);return"type_error:SafeUrl"};
g.Jb=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(gaa);b=b&&haa.test(b[1]);return g.Ib(b?a:"about:invalid#zClosurez")};
g.Lb=function(a){if(a instanceof g.Fb)return a;a="object"==typeof a&&a.ee?a.ed():String(a);Kb.test(a)||(a="about:invalid#zClosurez");return g.Ib(a)};
g.Mb=function(a,b){if(a instanceof g.Fb)return a;a="object"==typeof a&&a.ee?a.ed():String(a);if(b&&/^data:/i.test(a)){var c=g.Jb(a);if(c.ed()==a)return c}Kb.test(a)||(a="about:invalid#zClosurez");return g.Ib(a)};
g.Ib=function(a){var b=new g.Fb;b.F=a;return b};
g.Ob=function(){this.C="";this.F=g.Nb};
g.Pb=function(a){var b=new g.Ob;b.C=a;return b};
g.Rb=function(){this.C="";this.F=g.Qb};
g.Sb=function(a){var b=new g.Rb;b.C=a;return b};
g.Ub=function(a){return-1!=g.Tb.indexOf(a)};
g.Vb=function(){return g.Ub("Trident")||g.Ub("MSIE")};
Wb=function(){return g.Ub("Firefox")||g.Ub("FxiOS")};
g.Yb=function(){return g.Ub("Safari")&&!(g.Xb()||g.Ub("Coast")||g.Ub("Opera")||g.Ub("Edge")||g.Ub("Edg/")||g.Ub("OPR")||Wb()||g.Ub("Silk")||g.Ub("Android"))};
g.Xb=function(){return(g.Ub("Chrome")||g.Ub("CriOS"))&&!g.Ub("Edge")};
g.Zb=function(){return g.Ub("Android")&&!(g.Xb()||Wb()||g.Ub("Opera")||g.Ub("Silk"))};
g.ac=function(){this.F="";this.G=$b;this.D=null};
g.cc=function(a){return g.bc(a).toString()};
g.bc=function(a){if(a instanceof g.ac&&a.constructor===g.ac&&a.G===$b)return a.F;g.Aa(a);return"type_error:SafeHtml"};
g.ec=function(a){if(a instanceof g.ac)return a;var b="object"==typeof a,c=null;b&&a.km&&(c=a.C());return g.dc(g.zb(b&&a.ee?a.ed():String(a)),c)};
g.dc=function(a,b){return g.fc(a,b)};
g.fc=function(a,b){var c=new g.ac;c.F=a;c.D=b;return c};
g.gc=function(a,b){return g.fc(a,b||null)};
g.hc=function(a,b){var c=b instanceof g.Fb?b:g.Mb(b);a.href=g.Gb(c)};
g.ic=function(a,b){a.src=g.nb(b)};
g.jc=function(a,b){var c=b instanceof g.Fb?b:g.Mb(b);a.href=g.Gb(c)};
g.kc=function(a){return encodeURIComponent(String(a))};
g.lc=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.mc=function(a){return a=g.zb(a,void 0)};
g.oc=function(a,b,c){a=g.ta(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return(0,g.nc)("0",Math.max(0,b-c))+a};
g.pc=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
qc=function(){return g.Ub("iPhone")&&!g.Ub("iPod")&&!g.Ub("iPad")};
g.rc=function(){return qc()||g.Ub("iPad")||g.Ub("iPod")};
g.sc=function(a){g.sc[" "](a);return a};
g.tc=function(a,b){try{return g.sc(a[b]),!0}catch(c){}return!1};
iaa=function(a,b){var c=g.x.GA;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
xc=function(a,b){g.Ca(a);g.uc();for(var c=b?vc:wc,d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,q=m?a[e+2]:0,u=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[u],c[f],c[l],c[q])}return d.join("")};
g.uc=function(){if(!wc){wc={};g.yc={};vc={};for(var a=0;65>a;a++)wc[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),g.yc[wc[a]]=a,vc[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(g.yc["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
g.zc=function(a){this.C=0;this.F=a};
g.Ac=function(){};
Bc=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Ba(c))for(var d=0;d<c.length;d++)c[d]&&c[d].qd();else c&&c.qd()}};
Cc=function(a,b){return g.xa(b)&&(isNaN(b)||Infinity===b||-Infinity===b)?String(b):b};
Dc=function(a){if(g.Ba(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Dc(d):d)}return b}if(g.Ec&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Dc(d):d);return b};
g.Fc=function(a){this.C=a||{cookie:""}};
g.Gc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Bb)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Ic=function(a){var b=g.r("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(g.ua(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.n.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(b=a.constructor&&
a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:g.Hc(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})};
g.Hc=function(a){if(Jc[a])return Jc[a];a=String(a);if(!Jc[a]){var b=/function\s+([^\(]+)/m.exec(a);Jc[a]=b?b[1]:"[Anonymous]"}return Jc[a]};
g.Kc=function(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31};
g.Oc=function(a,b,c){g.xa(a)?(this.date=Lc(a,b||0,c||1),Mc(this,c||1)):g.Ea(a)?(this.date=Lc(a.getFullYear(),a.getMonth(),a.getDate()),Mc(this,a.getDate())):(this.date=new Date((0,g.Nc)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Mc(this,a))};
Lc=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
Mc=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}};
g.Pc=function(a,b){this.x=g.ta(a)?a:0;this.y=g.ta(b)?b:0};
g.Qc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Rc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.Sc=function(a,b){this.width=a;this.height=b};
g.y=function(a){return g.ua(a)?document.getElementById(a):a};
g.Tc=function(a){var b=document;return g.ua(a)?b.getElementById(a):a};
g.Vc=function(a,b){g.Ua(b,function(c,d){c&&"object"==typeof c&&c.ee&&(c=c.ed());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Uc.hasOwnProperty(d)?a.setAttribute(Uc[d],c):g.qb(d,"aria-")||g.qb(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.Xc=function(a){return g.Wc(a||window)};
g.Wc=function(a){a=a.document;a=g.Yc(a)?a.documentElement:a.body;return new g.Sc(a.clientWidth,a.clientHeight)};
g.$c=function(a,b,c){return g.Zc(document,arguments)};
g.Zc=function(a,b){var c=String(b[0]),d=b[1];if(!jaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.mc(d.name),'"');if(d.type){c.push(' type="',g.mc(d.type),'"');var e={};g.eb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ua(d)?c.className=d:g.Ba(d)?c.className=d.join(" "):g.Vc(c,d));2<b.length&&g.ad(a,c,b,2);return c};
g.ad=function(a,b,c,d){function e(k){k&&b.appendChild(g.ua(k)?a.createTextNode(k):k)}
for(;d<c.length;d++){var f=c[d];!g.Ca(f)||g.Ea(f)&&0<f.nodeType?e(f):(0,g.A)(kaa(f)?g.Qa(f):f,e)}};
g.bd=function(a){return document.createElement(String(a))};
g.Yc=function(a){return"CSS1Compat"==a.compatMode};
g.cd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.dd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.ed=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
kaa=function(a){if(a&&"number"==typeof a.length){if(g.Ea(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Da(a))return"function"==typeof a.item}return!1};
g.fd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.gd=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.hd=function(a){var b=[];g.gd(a,function(c){b.push(c)});
return b};
maa=function(){var a=g.bd("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};(0,g.A)(laa(),function(d){b.call(a,d)&&(c[d]=!0)});
return c};
g.id=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.jd=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.kd=function(a,b){a.style.width=g.jd(b,!0)};
g.ld=function(a,b){return typeof a===b};
g.nd=function(){var a=void 0===a?g.md:a;try{return a.history.length}catch(b){return 0}};
g.od=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.nd();a.u_java=!!g.md.navigator&&!g.ld(g.md.navigator.javaEnabled,"unknown")&&!!g.md.navigator.javaEnabled&&g.md.navigator.javaEnabled();g.md.screen&&(a.u_h=g.md.screen.height,a.u_w=g.md.screen.width,a.u_ah=g.md.screen.availHeight,a.u_aw=g.md.screen.availWidth,a.u_cd=g.md.screen.colorDepth);g.md.navigator&&g.md.navigator.plugins&&(a.u_nplug=g.md.navigator.plugins.length);g.md.navigator&&g.md.navigator.mimeTypes&&(a.u_nmime=g.md.navigator.mimeTypes.length)};
g.pd=function(a,b){try{return(void 0===b?0:b)?(new g.Sc(a.innerWidth,a.innerHeight)).round():g.Xc(a).round()}catch(c){return new g.Sc(-12245933,-12245933)}};
g.qd=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var f=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,k]};
rd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
naa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=q=0}
function b(z){for(var B=k,I=0;64>I;I+=4)B[I/4]=z[I]<<24|z[I+1]<<16|z[I+2]<<8|z[I+3];for(I=16;80>I;I++)z=B[I-3]^B[I-8]^B[I-14]^B[I-16],B[I]=(z<<1|z>>>31)&4294967295;z=e[0];var S=e[1],W=e[2],va=e[3],Ra=e[4];for(I=0;80>I;I++){if(40>I)if(20>I){var Ka=va^S&(W^va);var ud=1518500249}else Ka=S^W^va,ud=1859775393;else 60>I?(Ka=S&W|va&(S|W),ud=2400959708):(Ka=S^W^va,ud=3395469782);Ka=((z<<5|z>>>27)&4294967295)+Ka+Ra+ud+B[I]&4294967295;Ra=va;va=W;W=(S<<30|S>>>2)&4294967295;S=z;z=Ka}e[0]=e[0]+z&4294967295;e[1]=
e[1]+S&4294967295;e[2]=e[2]+W&4294967295;e[3]=e[3]+va&4294967295;e[4]=e[4]+Ra&4294967295}
function c(z,B){if("string"===typeof z){z=unescape(encodeURIComponent(z));for(var I=[],S=0,W=z.length;S<W;++S)I.push(z.charCodeAt(S));z=I}B||(B=z.length);I=0;if(0==q)for(;I+64<B;)b(z.slice(I,I+64)),I+=64,u+=64;for(;I<B;)if(f[q++]=z[I++],u++,64==q)for(q=0,b(f);I+64<B;)b(z.slice(I,I+64)),I+=64,u+=64}
function d(){var z=[],B=8*u;56>q?c(l,56-q):c(l,64-(q-56));for(var I=63;56<=I;I--)f[I]=B&255,B>>>=8;b(f);for(I=B=0;5>I;I++)for(var S=24;0<=S;S-=8)z[B++]=e[I]>>S&255;return z}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,u;a();return{reset:a,update:c,digest:d,Kw:function(){for(var z=d(),B="",I=0;I<z.length;I++)B+="0123456789ABCDEF".charAt(Math.floor(z[I]/16))+"0123456789ABCDEF".charAt(z[I]%16);return B}}};
oaa=function(a,b,c){var d=[],e=[];if(1==(g.Ba(c)?2:1))return e=[b,a],(0,g.A)(d,function(l){e.push(l)}),sd(e.join(" "));
var f=[],k=[];(0,g.A)(c,function(l){k.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Na(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.A)(d,function(l){e.push(l)});
a=sd(e.join(" "));a=[c,a];g.Na(k)||a.push(k.join(""));return a.join("_")};
sd=function(a){var b=naa();b.update(a);return b.Kw().toLowerCase()};
td=function(a){var b=rd(String(g.n.location.href)),c=g.n.__OVERRIDE_SID;null==c&&(c=(new g.Fc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.n.__SAPISID:g.n.__APISID,null==b&&(b=(new g.Fc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.n.location.href);return d&&b&&c?[c,oaa(rd(d),b,a||null)].join(" "):null}return null};
g.C=function(){this.bd=this.bd;this.Vf=this.Vf};
g.xd=function(a,b){g.vd(a,g.v(g.wd,b))};
g.vd=function(a,b){a.bd?g.ta(void 0)?b.call(void 0):b():(a.Vf||(a.Vf=[]),a.Vf.push(g.ta(void 0)?(0,g.t)(b,void 0):b))};
g.wd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.yd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Mt=!0};
g.zd=function(a,b){g.yd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.zc=null;a&&this.init(a,b)};
g.Bd=function(a){return!(!a||!a[Ad])};
qaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Nh=e;this.key=++paa;this.Sg=this.Li=!1};
Cd=function(a){a.Sg=!0;a.listener=null;a.C=null;a.src=null;a.Nh=null};
g.Dd=function(a){this.src=a;this.listeners={};this.C=0};
Ed=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Pa(a.listeners[c],b);d&&(Cd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Fd=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sg&&f.listener==b&&f.capture==!!c&&f.Nh==d)return e}return-1};
g.Id=function(a,b,c,d,e){if(d&&d.once)return g.Gd(a,b,c,d,e);if(g.Ba(b)){for(var f=0;f<b.length;f++)g.Id(a,b[f],c,d,e);return null}c=g.Jd(c);return g.Bd(a)?a.M(b,c,g.Ea(d)?!!d.capture:!!d,e):Kd(a,b,c,!1,d,e)};
Kd=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ea(e)?!!e.capture:!!e,l=g.Ld(a);l||(a[Md]=l=new g.Dd(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=raa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)saa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Nd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Od++;return c};
raa=function(){var a=taa,b=Pd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Gd=function(a,b,c,d,e){if(g.Ba(b)){for(var f=0;f<b.length;f++)g.Gd(a,b[f],c,d,e);return null}c=g.Jd(c);return g.Bd(a)?a.Ue(b,c,g.Ea(d)?!!d.capture:!!d,e):Kd(a,b,c,!0,d,e)};
g.Qd=function(a,b,c,d,e){if(g.Ba(b))for(var f=0;f<b.length;f++)g.Qd(a,b[f],c,d,e);else d=g.Ea(d)?!!d.capture:!!d,c=g.Jd(c),g.Bd(a)?a.Wa(b,c,d,e):a&&(a=g.Ld(a))&&(b=a.xf(b,c,d,e))&&g.Rd(b)};
g.Rd=function(a){if(g.xa(a)||!a||a.Sg)return!1;var b=a.src;if(g.Bd(b))return Ed(b.Hd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Nd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Od--;(c=g.Ld(b))?(Ed(c,a),0==c.C&&(c.src=null,b[Md]=null)):Cd(a);return!0};
Nd=function(a){return a in Sd?Sd[a]:Sd[a]="on"+a};
Ud=function(a,b,c,d){var e=!0;if(a=g.Ld(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Sg&&(f=Td(f,d),e=e&&!1!==f)}return e};
Td=function(a,b){var c=a.listener,d=a.Nh||a.src;a.Li&&g.Rd(a);return c.call(d,b)};
taa=function(a,b){if(a.Sg)return!0;if(!Pd){var c=b||g.r("window.event"),d=new g.zd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Ud(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Ud(c[k],f,!1,d),e=e&&l}return e}return Td(a,new g.zd(b,
this))};
g.Ld=function(a){a=a[Md];return a instanceof g.Dd?a:null};
g.Jd=function(a){if(g.Da(a))return a;a[Vd]||(a[Vd]=function(b){return a.handleEvent(b)});
return a[Vd]};
g.Wd=function(){g.C.call(this);this.Hd=new g.Dd(this);this.Tv=this;this.Wm=null};
Xd=function(a,b,c,d){b=a.Hd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Sg&&k.capture==c){var l=k.listener,m=k.Nh||k.src;k.Li&&Ed(a.Hd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.Mt};
Yd=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
Zd=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
$d=function(a){g.n.setTimeout(function(){throw a;},0)};
vaa=function(){var a=g.n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Ub("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";g.ic(e,g.pb(uaa));document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(g.bc(g.ae));e.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.t)(function(m){if(("*"==
l||m.origin==l)&&m.data==k)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&!g.Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ta(c.next)){c=c.next;var e=c.Ko;c.Ko=null;e()}};
return function(e){d.next={Ko:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){g.n.setTimeout(e,0)}};
be=function(){this.F=this.C=null};
ce=function(){this.next=this.scope=this.yc=null};
ge=function(a,b){de||waa();ee||(de(),ee=!0);fe.add(a,b)};
waa=function(){if(g.n.Promise&&g.n.Promise.resolve){var a=g.n.Promise.resolve(void 0);de=function(){a.then(he)}}else de=function(){var b=he;
!g.Da(g.n.setImmediate)||g.n.Window&&g.n.Window.prototype&&!g.Ub("Edge")&&g.n.Window.prototype.setImmediate==g.n.setImmediate?(ie||(ie=vaa()),ie(b)):g.n.setImmediate(b)}};
he=function(){for(var a;a=fe.remove();){try{a.yc.call(a.scope)}catch(b){$d(b)}Zd(je,a)}ee=!1};
g.ke=function(a){a.prototype.$goog_Thenable=!0};
g.le=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.ne=function(a,b){this.C=0;this.N=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.ya)try{var c=this;a.call(b,function(d){g.me(c,2,d)},function(d){g.me(c,3,d)})}catch(d){g.me(this,3,d)}};
oe=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
qe=function(a,b,c){var d=pe.get();d.F=a;d.onRejected=b;d.context=c;return d};
xaa=function(a,b,c){re(a,b,c,null)||ge(g.v(b,a))};
g.se=function(a){return new g.ne(function(b,c){var d=a.length,e=[];if(d)for(var f=function(q,u){d--;e[q]=u;0==d&&b(e)},k=function(q){c(q)},l=0,m;l<a.length;l++)m=a[l],xaa(m,g.v(f,l),k);
else b(e)})};
g.ue=function(a,b){return te(a,null,b,void 0)};
ve=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?ve(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):we(c),xe(c,e,3,b)))}a.D=null}else g.me(a,3,b)};
ze=function(a,b){a.F||2!=a.C&&3!=a.C||ye(a);a.G?a.G.next=b:a.F=b;a.G=b};
te=function(a,b,c,d){var e=qe(null,null,null);e.C=new g.ne(function(f,k){e.F=b?function(l){try{var m=b.call(d,l);f(m)}catch(q){k(q)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);!g.ta(m)&&l instanceof g.Ae?k(l):f(m)}catch(q){k(q)}}:k});
e.C.D=a;ze(a,e);return e.C};
g.me=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,re(c,a.W,a.O,a)||(a.N=c,a.C=b,a.D=null,ye(a),3!=b||c instanceof g.Ae||yaa(a,c)))};
re=function(a,b,c,d){if(a instanceof g.ne)return ze(a,qe(b||g.ya,c||null,d)),!0;if(g.le(a))return a.then(b,c,d),!0;if(g.Ea(a))try{var e=a.then;if(g.Da(e))return zaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
zaa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function k(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
ye=function(a){a.L||(a.L=!0,ge(a.J,a))};
we=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
xe=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Be(b,c,d);else try{b.D?b.F.call(b.context):Be(b,c,d)}catch(e){Ce.call(null,e)}Zd(pe,b)};
Be=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
yaa=function(a,b){a.H=!0;ge(function(){a.H&&Ce.call(null,b)})};
g.Ae=function(a){g.Ha.call(this,a)};
g.De=function(a,b,c){if(g.Da(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.n.setTimeout(a,b||0)};
g.Ee=function(a){g.n.clearTimeout(a)};
g.Fe=function(a,b,c){g.C.call(this);this.C=a;this.D=b||0;this.F=c;this.hc=(0,g.t)(this.Hp,this)};
Aaa=function(){this.F=-1};
Ge=function(){this.F=64;this.C=[];this.L=[];this.N=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
He=function(a,b,c){c||(c=0);var d=a.N;if(g.ua(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):(f=c^k^l,
q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.Ie=function(a){if(a.classList)return a.classList;a=a.className;return g.ua(a)&&a.match(/\S+/g)||[]};
g.D=function(a,b){return a.classList?a.classList.contains(b):g.Ma(g.Ie(a),b)};
g.Je=function(){};
Le=function(a){if(a instanceof g.Je)return a;if("function"==typeof a.ud)return a.ud(!1);if(g.Ca(a)){var b=0,c=new g.Je;c.next=function(){for(;;){if(b>=a.length)throw g.Ke;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Me=function(a,b,c){if(g.Ca(a))try{(0,g.A)(a,b,c)}catch(d){if(d!==g.Ke)throw d;}else{a=Le(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Ke)throw d;}}};
Baa=function(a){if(g.Ca(a))return g.Qa(a);a=Le(a);var b=[];g.Me(a,function(c){b.push(c)});
return b};
g.Oe=function(a,b){this.F={};this.C=[];this.ef=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.Ne(this,a)};
Caa=function(a,b){return a===b};
g.Qe=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.Pe(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.Pe(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.Ne=function(a,b){if(b instanceof g.Oe)for(var c=b.Oc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.Pe=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.Se=function(a){var b=[];Re(new Daa,a,b);return b.join("")};
Daa=function(){};
Re=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.Ba(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Re(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Te(d,c),c.push(":"),Re(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Te(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Te=function(a,b){b.push('"',a.replace(Eaa,function(c){var d=Ue[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Ue[c]=d);return d}),'"')};
g.Ve=function(a){g.C.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.We=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ja(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Dd(b)}};
Faa=function(a,b,c){ge(function(){a.apply(b,c)})};
g.Xe=function(a){this.C=a};
Ye=function(a){this.C=a};
Ze=function(a){this.data=a};
af=function(a){return!g.ta(a)||a instanceof Ze?a:new Ze(a)};
g.bf=function(a){this.C=a};
g.cf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Nc)()||!!b&&b>(0,g.Nc)()};
Gaa=function(){};
df=function(){};
g.ef=function(a){this.C=a};
g.ff=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
hf=function(a,b){this.F=a;this.C=null;if(g.x.ma&&!g.x.Bc(9)){gf||(gf=new g.Oe);this.C=gf.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),gf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
jf=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Haa[b]})};
kf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
lf=function(a){return a.C.XMLDocument.documentElement};
mf=function(a,b){this.F=a;this.C=b+"::"};
g.nf=function(a){var b=new g.ff;return b.isAvailable()?a?new mf(b,a):b:null};
g.of=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.pf=function(a){return a?decodeURI(a):a};
g.rf=function(a,b){return b.match(g.qf)[a]||null};
g.sf=function(a){return g.pf(g.rf(3,a))};
g.tf=function(a){a=a.match(g.qf);return g.of(null,null,null,null,a[5],a[6],a[7])};
g.uf=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.vf=function(a,b){return b?a?a+"&"+b:b:a};
g.wf=function(a,b){if(!b)return a;var c=g.uf(a);c[1]=g.vf(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.xf=function(a,b,c){if(g.Ba(b))for(var d=0;d<b.length;d++)g.xf(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.kc(b)))};
g.yf=function(a){var b=[],c;for(c in a)g.xf(c,a[c],b);return b.join("&")};
g.zf=function(a,b){var c=g.yf(b);return g.wf(a,c)};
g.Af=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.Cf=function(a,b){var c=a.search(g.Bf),d=g.Af(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.lc(a.substr(d,e-d))};
Df=function(){this.C=[];this.F=-1};
Iaa=function(a){-1==a.F&&(a.F=(0,g.Ef)(a.C,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.F};
g.Ff=function(){var a=new Df;g.n.SVGElement&&g.n.document.createElementNS&&a.set(0);var b=maa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.n.crypto&&g.n.crypto.subtle&&a.set(3);g.n.TextDecoder&&g.n.TextEncoder&&a.set(4);return Iaa(a)};
g.Gf=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
Hf=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.Jf=function(a){Hf(g.If,arguments)};
Kf=function(a,b){var c=g.E(a,void 0);c?c.push(b):g.Jf(a,[b])};
g.E=function(a,b){return a in g.If?g.If[a]:b};
Lf=function(a){var b=g.If.EXPERIMENT_FLAGS;return b?b[a]:void 0};
Nf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Mf(b)}}:a};
g.Mf=function(a,b,c,d,e){var f=g.r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.E("ERRORS",[]),f.push([a,b,c,d,e]),g.Jf("ERRORS",f))};
g.Of=function(a){g.Mf(a,"WARNING",void 0,void 0,void 0)};
Jaa=function(a,b,c,d,e){var f=!1,k=Lf("log_window_onerror_fraction");if(k&&Math.random()<k)f=!0;else{k=document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.ua(a)?f=a:ErrorEvent&&a instanceof ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),g.Mf(e))};
g.F=function(a,b){return a?a.dataset?a.dataset[g.Pf(b)]:a.getAttribute("data-"+b):null};
g.Pf=function(a){return Qf[a]||(Qf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
g.Rf=function(a,b){g.Da(a)&&(a=Nf(a));return window.setTimeout(a,b)};
g.Sf=function(a,b){g.Da(a)&&(a=Nf(a));return window.setInterval(a,b)};
g.Tf=function(a){window.clearTimeout(a)};
g.Uf=function(a){window.clearInterval(a)};
g.Zf=function(a,b,c){var d=Vf();if(d){var e=d.subscribe(a,function(){var f=arguments;var k=function(){Wf[e]&&b.apply(c||window,f)};
try{Xf[a]?k():g.Rf(k,0)}catch(l){g.Mf(l)}},c);
Wf[e]=!0;Yf[a]||(Yf[a]=[]);Yf[a].push(e);return e}return 0};
g.$f=function(a){var b=Vf();b&&(g.xa(a)?a=[a]:g.ua(a)&&(a=[parseInt(a,10)]),(0,g.A)(a,function(c){b.unsubscribeByKey(c);delete Wf[c]}))};
g.G=function(a,b){var c=Vf();return c?c.publish.apply(c,arguments):!1};
g.ag=function(a,b){Xf[a]=!0;var c=Vf();c=c?c.publish.apply(c,arguments):!1;Xf[a]=!1;return c};
Vf=function(){return g.r("ytPubsubPubsubInstance")};
g.cg=function(a,b){var c=g.bg(a);spf.script.load(a,c,b)};
g.dg=function(a){a=g.bg(a);spf.script.unload(a)};
g.bg=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Kaa,""),b=b.replace(Laa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.eg=function(){this.F=!1;this.C=null};
fg=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.Of(d)}c&&c(b)};
g.gg=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
Maa=function(){};
g.jg=function(a,b){return ig(a,0,b)};
g.kg=function(a,b){return ig(a,1,b)};
g.mg=function(a){for(var b=0,c=a.length;b<c;b++)g.lg(a[b])};
ng=function(){};
g.og=function(){return!!g.r("yt.scheduler.instance")};
ig=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.Rf(a,c||0)};
g.lg=function(a){if(!isNaN(a)){var b=g.r("yt.scheduler.instance.cancelJob");b?b(a):g.Tf(a)}};
Naa=function(){return parseInt(g.E("DCLKSTAT",0),10)};
g.qg=function(a){return!!pg(a)};
g.rg=function(a,b){var c=pg(a);return void 0===c&&void 0!==b?b:Number(c||0)};
pg=function(a){return g.E("EXPERIMENT_FLAGS",{})[a]};
Oaa=function(){return g.sg.fe()};
Paa=function(a){a=void 0===a?{}:a;return g.gg(g.sg,a)};
g.tg=function(a){var b=[];g.Ua(a,function(c,d){var e=g.kc(d),f;g.Ba(c)?f=c:f=[c];(0,g.A)(f,function(k){""==k?b.push(e):b.push(e+"="+g.kc(k))})});
return b.join("&")};
g.ug=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=g.lc(e[0]||""),k=g.lc(e[1]||"");f in b?g.Ba(b[f])?g.Sa(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(m){var l=Error("Error decoding URL component");l.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?g.Of(l):g.Mf(l)}}return b};
g.wg=function(a,b){return g.vg(a,b||{},!0)};
g.vg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.ug(e[1]||"");for(var f in b)if(c||!g.Wa(e,f))e[f]=b[f];return g.zf(a,e)+d};
g.Ag=function(a){var b=g.xg;a=void 0===a?g.r("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.yg(b),g.zg(b));b.ca_type="image";a&&(b.bid=a);return b};
g.yg=function(a){var b={};b.dt=g.Bg;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.od(b);return b};
g.zg=function(a){var b=g.qd(a.C),c=g.pd(a.C.top),d={};return d.bc=g.Ff(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Gf(a.F),d.wgl=!!g.md.WebGLRenderingContext,d};
Qaa=function(){if(!Cg)return null;var a=Cg();return"open"in a?a:null};
g.Eg=function(a){switch(g.Dg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Dg=function(a){return a&&"status"in a?a.status:-1};
Raa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.rf(1,a),e=g.sf(a);d&&e?(d=c,c=a.match(g.qf),d=d.match(g.qf),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.sf(c)==e&&(Number(g.rf(4,c))||null)==(Number(g.rf(4,a))||null):!0;d=g.qg("web_ajax_ignore_global_headers_if_set");for(var f in Fg)e=g.E(Fg[f]),!e||!c&&!Gg(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Gg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(g.qg("pass_biscotti_id_in_header_ajax")||
g.qg("pass_biscotti_id_in_header_ajax_tv"))&&(c||Gg(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=g.tg(g.Ag()));return b};
Taa=function(a){var b=window.location.search,c=g.sf(a),d=g.pf(g.rf(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.ug(b),f={};(0,g.A)(Saa,function(k){e[k]&&(f[k]=e[k])});
return g.vg(a,f||{},!1)};
Gg=function(a,b){var c=g.E("CORS_HEADER_WHITELIST")||{},d=g.sf(a);return d?(c=c[d])?g.Ma(c,b):!1:!0};
Uaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Hg(a,b);var d=Ig(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&g.Tf(f);var l=k.ok,m=function(q){q=q||{};var u=b.context||g.n;l?b.onSuccess&&b.onSuccess.call(u,q,k):b.onError&&b.onError.call(u,q,k);b.Ya&&b.Ya.call(u,q,k)};
"JSON"==(b.format||"JSON")&&(l||400<=k.status&&500>k.status)?k.json().then(m,function(){m(null)}):m(null)}});
b.Zr&&0<b.timeout&&(f=g.Rf(function(){e||(e=!0,g.Tf(f),b.Zr.call(b.context||g.n))},b.timeout))}else g.H(a,b)};
g.H=function(a,b){var c=b.format||"JSON";a=Hg(a,b);var d=Ig(a,b),e=!1,f,k=Jg(a,function(l){if(!e){e=!0;f&&g.Tf(f);var m=g.Eg(l),q=null,u=400<=l.status&&500>l.status,z=500<=l.status&&600>l.status;if(m||u||z)q=Vaa(c,l,b.pb);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};u=b.context||g.n;m?b.onSuccess&&b.onSuccess.call(u,l,q):b.onError&&b.onError.call(u,l,q);b.Ya&&b.Ya.call(u,l,q)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Uc&&0<b.timeout&&(f=g.Rf(function(){e||(e=!0,k.abort(),g.Tf(f),b.Uc.call(b.context||g.n,k))},b.timeout));
return k};
Hg=function(a,b){b.lA&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.E("XSRF_FIELD_NAME",void 0),d=b.Sa;d&&(d[c]&&delete d[c],a=g.wg(a,d));return a};
Ig=function(a,b){var c=g.E("XSRF_FIELD_NAME",void 0),d=g.E("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ha,k=g.E("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.bx||g.sf(a)&&!b.withCredentials&&g.sf(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ha&&b.ha[k]||(f||(f={}),f[c]=d);f&&g.ua(e)&&(e=g.ug(e),g.eb(e,f),e=b.at&&"JSON"==b.at?JSON.stringify(e):g.yf(e));f=e||f&&!g.Ya(f);!Kg&&f&&"POST"!=b.method&&(Kg=!0,g.Mf(Error("AJAX request with postData should use POST")));
return e};
Vaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Lg(b):null)d={},(0,g.A)(b.getElementsByTagName("*"),function(e){d[e.tagName]=g.Mg(e)})}c&&Ng(d);
return d};
Ng=function(a){if(g.Ea(a))for(var b in a)"html_content"==b||g.rb(b,"_html")?a[b]=g.gc(a[b]):Ng(a[b])};
Lg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Mg=function(a){var b="";(0,g.A)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.Og=function(a,b){b.method="POST";b.ha||(b.ha={});return g.H(a,b)};
Jg=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Nf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Qaa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.qg("debug_forward_web_query_parameters")&&(a=Taa(a));m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Raa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m};
Pg=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.Qg=function(a){var b=new Pg;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.Rg=function(a){var b=new Pg;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.Ug=function(a){var b=a.__yt_uid_key;b||(b=Sg(),a.__yt_uid_key=b);return b};
g.Vg=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Waa+"VisibilityState";if(b in a)return a[b]};
g.Wg=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Xaa||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY};
Xg=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Yg=function(a){g.ta(a.C)||Xg(a);return a.C};
g.Zg=function(a){g.ta(a.F)||Xg(a);return a.F};
g.ah=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Xa($g,function(e){var f=g.wa(e[4])&&e[4]==!!d,k=g.Ea(e[4])&&g.Ea(d)&&g.ab(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.J=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.ah(a,b,c,d);if(e)return e;e=++bh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(l){l=new g.Wg(l);if(!g.fd(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new g.Wg(l);
l.currentTarget=a;return c.call(a,l)};
k=Nf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ch()||g.wa(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);$g[e]=[a,b,c,k,d];return e};
g.K=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.A)(a,function(b){if(b in $g){var c=$g[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ch()||g.wa(c)?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete $g[b]}}))};
g.dh=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.J(a,b,function(){g.K(e);c.apply(a,arguments)},d)};
g.eh=function(a){for(var b in $g)$g[b][0]==a&&g.K(b)};
g.fh=function(a){this.hc=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.J(window,"mousemove",(0,g.t)(this.W,this));this.O=g.Sf((0,g.t)(this.N,this),25)};
gh=function(){g.C.call(this);this.C=[]};
hh=function(a){a=a||{};var b={enablejsapi:1},c={};this.url=a.url||"";this.args=a.args||g.bb(b);this.assets=a.assets||{};this.attrs=a.attrs||g.bb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.ih=function(a){a instanceof hh||(a=new hh(a));return a};
g.lh=function(a,b,c,d,e,f){f=f||{};f.name=c||g.E("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=jh||(g.qg("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+
e.stack),c=c.join("\n"),window.console.log(c,e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=g.Ic(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&g.Da(window.yterr)&&window.yterr(a),kh[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Sa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},ha:{url:g.E("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.ha.stack=e);for(var k in f)b.ha["client."+k]=f[k];if(k=g.E("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ha[l]=k[l];g.H(g.E("ECATCHER_REPORT_HOST","")+"/error_204",b);kh[a.message]=!0;jh++}};
g.th=function(){g.Tf(g.mh);g.Tf(g.ph);g.ph=0;if(!g.Ya(g.qh)){for(var a in g.qh){var b=rh[a];b&&(Yaa(a,b),delete g.qh[a])}g.Ya(g.qh)||g.sh()}};
Zaa=function(){var a=[];for(e in g.qh){var b=uh[e]||{};uh[e]=b;for(var c in g.qh[e]){var d=vh(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.wh());for(var f in uh)b=uh[f],b.eventType=f in xh?xh[f]:"UNKNOWN_TYPE",c=yh[f],b.metricIntervalMs=c?e-c:e-g.zh,a.push(b),yh[f]=e,delete uh[f];return a};
g.sh=function(){g.qg("web_gel_timeout_cap")&&!g.ph&&(g.ph=g.Rf(g.th,3E4));g.Tf(g.mh);var a=g.rg("web_gel_debounce_ms",1E4);g.mh=g.Rf(g.th,g.E("LOGGING_BATCH_TIMEOUT",g.Ah||a))};
vh=function(a,b){b=void 0===b?"":b;g.qh[a]=g.qh[a]||{};g.qh[a][b]=g.qh[a][b]||[];return g.qh[a][b]};
Yaa=function(a,b){var c=$aa[a],d=uh[a]||{};uh[a]=d;var e=Math.round(g.wh());for(q in g.qh[a]){var f=g.cb({context:g.Bh(b.C)});f[c]=vh(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;var k=Ch[q];if(k)a:{var l=q;if(k.videoId)var m="VIDEO";else if(k.playlistId)m="PLAYLIST";else break a;f.credentialTransferTokenTargetId=k;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Ch[q];f.requestTimeMs=
e;if(k=g.E("EVENT_ID",void 0))m=(g.E("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>aba&&(m=1),g.Jf("BATCH_CLIENT_COUNTER",m),k={serializedEventId:k,clientCounter:m},f.serializedClientEventId=k,Dh&&Eh&&g.qg("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Dh,roundtripMs:Eh}),Dh=k,Eh=0;g.Fh(b,a,f,{retry:bba.has(a),onSuccess:(0,g.t)(cba,this,g.wh())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*
q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e};
cba=function(a){Eh=Math.round(g.wh()-a)};
g.Ih=function(a){var b=void 0===a?{}:a;a=void 0===b.mA?!0:b.mA;b=void 0===b.bI?!1:b.bI;if(null==g.r("_lact",window)){var c=parseInt(g.E("LACT"),10);c=isFinite(c)?(0,g.Nc)()-Math.max(c,0):-1;g.p("_lact",c,window);g.p("_fact",c,window);-1==c&&g.Gh();g.J(document,"keydown",g.Gh);g.J(document,"keyup",g.Gh);g.J(document,"mousedown",g.Gh);g.J(document,"mouseup",g.Gh);a&&(b?g.J(window,"touchmove",function(){Hh("touchmove",200)},{passive:!0}):(g.J(window,"resize",function(){Hh("resize",200)}),g.J(window,
"scroll",function(){Hh("scroll",200)})));
new g.fh(function(){Hh("mouse",100)});
g.J(document,"touchstart",g.Gh,{passive:!0});g.J(document,"touchend",g.Gh,{passive:!0})}};
Hh=function(a,b){Jh[a]||(Jh[a]=!0,g.kg(function(){g.Gh();Jh[a]=!1},b))};
g.Gh=function(){null==g.r("_lact",window)&&g.Ih();var a=(0,g.Nc)();g.p("_lact",a,window);-1==g.r("_fact",window)&&g.p("_fact",a,window);(a=g.r("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Kh=function(){var a=g.r("_lact",window);return null==a?-1:Math.max((0,g.Nc)()-a,0)};
g.Mh=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||g.wh());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.Kh())};g.qg("log_sequence_info_on_gel_web")&&d.Ze&&(a=e.context,b=d.Ze,Lh[b]=b in Lh?Lh[b]+1:0,a.sequence={index:Lh[b],groupKey:b},d.Xw&&delete Lh[d.Ze]);(d=d.yg)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Ch[d.token]=a,d=vh("log_event",d.token)):d=vh("log_event");d.push(e);c&&(rh.log_event=new c);d.length>=(g.rg("web_logging_max_batch")||
100)?g.th():g.sh()};
g.Bh=function(a){a={client:{hl:a.uA,gl:a.tA,clientName:a.rA,clientVersion:a.sA,configInfo:a.qA}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.E("DELEGATED_SESSION_ID")&&!g.qg("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.E("DELEGATED_SESSION_ID")});return a};
Nh=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.E("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.jV||g.E("AUTHORIZATION"))||(a?b="Bearer "+g.r("gapi.auth.getToken")().iV:b=td([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.E("SESSION_INDEX",0),g.qg("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.E("DELEGATED_SESSION_ID")));return d};
Oh=function(a){a=Object.assign({},a);delete a.Authorization;var b=td();if(b){var c=new Ge;c.update(g.E("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=xc(c.digest(),!0)}return a};
g.Qh=function(a,b,c,d){g.Ph.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Rh=function(a,b,c){g.Ph.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.Sh=function(a){var b;(b=g.nf(a))||(a=new hf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.bf(a):null;this.F=document.domain||window.location.hostname};
dba=function(a,b,c,d){if(d)return null;d=Th.get("nextId",!0)||1;var e=Th.get("requests",!0)||{};e[d]={method:a,request:b,authState:Oh(c),requestTime:Math.round(g.wh())};Th.set("nextId",d+1,86400,!0);Th.set("requests",e,86400,!0);return d};
Uh=function(a){var b=Th.get("requests",!0)||{};delete b[a];Th.set("requests",b,86400,!0)};
Vh=function(a){var b=Th.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.wh())-d.requestTime)){var e=d.authState,f=Oh(Nh(!1));g.ab(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.wh())),g.Fh(a,d.method,e,{}));delete b[c]}}Th.set("requests",b,86400,!0)}};
g.Wh=function(a){var b=this;this.C=a||{oA:g.E("INNERTUBE_API_KEY",void 0),pA:g.E("INNERTUBE_API_VERSION",void 0),qA:g.E("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),rA:g.E("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),sA:g.E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),uA:g.E("INNERTUBE_CONTEXT_HL",void 0),tA:g.E("INNERTUBE_CONTEXT_GL",void 0),vA:g.E("INNERTUBE_HOST_OVERRIDE",void 0)||"",wA:!!g.E("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.jg(function(){Vh(b)},5E3)};
g.Fh=function(a,b,c,d){!g.E("VISITOR_DATA")&&.01>Math.random()&&g.Mf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ha:c,at:"JSON",Uc:function(){d.Uc()},
Zr:d.Uc,onSuccess:function(B,I){if(d.onSuccess)d.onSuccess(I)},
Pj:function(B){if(d.onSuccess)d.onSuccess(B)},
onError:function(B,I){if(d.onError)d.onError(I)},
Yr:function(B){if(d.onError)d.onError(B)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.vA;k&&(f=k);k=a.C.wA||!1;var l=Nh(k,f,d);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=g.wg(""+f+("/youtubei/"+a.C.pA+"/"+b),{alt:"json",key:a.C.oA}),q;if(d.retry&&g.qg("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(q=dba(b,c,l,k))){var u=e.onSuccess,z=e.Pj;e.onSuccess=function(B,I){Uh(q);u(B,I)};
c.Pj=function(B,I){Uh(q);z(B,I)}}try{g.qg("use_fetch_for_op_xhr")?Uaa(m,e):g.Og(m,e)}catch(B){if("InvalidAccessError"==B)q&&(Uh(q),q=0),g.Mf(Error("An extension is blocking network request."),"WARNING");
else throw B;}q&&g.jg(function(){Vh(a)},5E3)};
g.Xh=function(a,b,c){c=void 0===c?{}:c;var d=g.Wh;g.E("ytLoggingEventsDefaultDisabled",!1)&&g.Wh==g.Wh&&(d=null);g.Mh(a,b,d,c)};
g.Yh=function(){g.qg("log_web_meta")&&Zaa().forEach(function(a){g.Xh("delayedEventMetricCaptured",a)})};
g.Zh=function(a){this.C=a};
g.$h=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.$h(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.ai=function(a,b,c){Kf("INTERACTIONS_LOGGER_QUEUE",{vV:a,payload:b,options:c})};
g.bi=function(a,b,c){(0,g.A)(b,function(d){var e=c;e=void 0===e?!1:e;d={csn:a,ve:g.$h(d),eventType:e?16:8};e={yg:void 0,Ze:a,Xw:e};"UNDEFINED_CSN"==a?g.ai("visualElementHidden",d,e):g.Mh("visualElementHidden",d,g.Wh,e)})};
di=function(a,b){var c=Object.keys(a).join("");ci("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Xh("latencyActionInfo",a))};
ci=function(a){ei[a]=ei[a]||{count:0};var b=ei[a];b.count++;b.time=g.wh();fi||(fi=g.jg(eba,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;g.lh(c,b)}return!0}return!1};
eba=function(){var a=g.wh(),b;for(b in ei)6E4<a-ei[b].time&&delete ei[b];fi=0};
hi=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Nc)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(gi)for(a=1,b=0;b<gi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^gi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.mi=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(ii==a)return;ii=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Kh()>b)&&"visible"==g.Vg()){b=-1;g.ji&&(b=Math.round(g.wh()-g.ji));var c=String;var d=g.r("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Nc)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:ki,index:String(li),lastEventDeltaMs:String(b),trigger:a};g.Mh("foregroundHeartbeat",
a,g.Wh);g.p("_fact",-1,window);li++;g.ji=g.wh()}};
g.ni=function(a){a&&g.Mh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ki,clientScreenNonce:a},g.Wh)};
oi=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
pi=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
qi=function(a){return g.E(pi(void 0===a?0:a),void 0)};
g.ri=function(){var a=qi(0),b;a?b=new g.Zh({veType:a,youtubeData:void 0}):b=null;return b};
g.si=function(a){a=void 0===a?0:a;var b=g.E(oi(a));b||0!=a||(g.qg("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=g.E("EVENT_ID"));return b?b:null};
g.ti=function(a,b,c){c=void 0===c?0:c;if(a!==g.E(oi(c))||b!==g.E(pi(c)))g.Jf(oi(c),a),g.Jf(pi(c),b),0==c&&(b=function(){setTimeout(function(){g.ni(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
ui=function(){var a=g.ri(),b=g.si();b&&a&&g.bi(b,[a],!0)};
g.vi=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Nf(d):null;this.H=e?Nf(e):null;this.G=[];this.C=this.F=0};
g.wi=function(a){g.lg(a.F);a.F=g.kg((0,g.t)(a.init,a))};
g.zi=function(a){a.name in xi&&yi(a.name);xi[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.A)(a.deps,function(b){if(!(b in xi))throw Error("Module "+b+" required by "+a.name);xi[b].reqs.push(a.name)});
a.enable()};
yi=function(a){if(a in xi){var b=xi[a];(0,g.A)(b.reqs,function(c){yi(c)});
try{b.disable()}catch(c){}delete xi[a]}};
Bi=function(a){Hf(g.Ai,arguments)};
g.Ci=function(a){return a in g.Ai};
Di=function(a){Hf(g.Ai,arguments)};
g.Fi=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.x.fd(),c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Hb(g.Lb(a)),"about:invalid#zClosurez"===a?a="":(a=g.cc(g.ec(a)),a=g.kc(g.Se(a))),g.sb(a)||(a=g.$c("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.ed(a).body.appendChild(a))):e?Jg(a,b,"POST",e,d):g.E("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Jg(a,b,"GET","",d):(Lf("web_use_beacon_api_for_ad_click_server_pings")&&-1!=g.pf(g.rf(5,a)).indexOf("/aclk")&&
"1"===g.Cf(a,"ae")&&"1"===g.Cf(a,"act")?Ei(a)?(b&&b(),d=!0):d=!1:d=!1,d||fba(a,b)))};
Ei=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
fba=function(a,b){var c=new Image,d=""+gba++;Gi[d]=c;c.onload=c.onerror=function(){b&&Gi[d]&&b();delete Gi[d]};
c.src=a};
g.Hi=function(a,b){a=a||"";var c=a.match(hba);spf.style.load(a,c?c[1]:"",b)};
iba=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Ii(a)||c.some(function(e){return!Ii(e)}))throw Error("Only objects may be merged.");
c=g.da(c);for(d=c.next();!d.done;d=c.next())Ji(a,d.value)};
Ji=function(a,b){for(var c in b)if(Ii(b[c])){if(c in a&&!Ii(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ji(a[c],b[c])}else if(Ki(b[c])){if(c in a&&!Ki(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Li(a[c],b[c])}else a[c]=b[c];return a};
Li=function(a,b){for(var c=g.da(b),d=c.next();!d.done;d=c.next())d=d.value,Ii(d)?a.push(Ji({},d)):Ki(d)?a.push(Li([],d)):a.push(d);return a};
Ii=function(a){return"object"===typeof a&&!Array.isArray(a)};
Ki=function(a){return"object"===typeof a&&Array.isArray(a)};
g.Mi=function(a,b,c){var d=void 0===d?!0:d;var e=g.E("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=g.sf(window.location.href);f&&e.push(f);f=g.sf(a);if(g.Ma(e,f)||!f&&g.qb(a,"/"))if(g.qg("autoescape_tempdata_url")&&(e=document.createElement("a"),g.hc(e,a),a=e.href),a&&(a=g.tf(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&(b.itct||b.ved)&&(b.csn=b.csn||g.si()),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+g.pc(a).toString(36),b=b?g.yf(b):"",g.Qh(d,b,c||5))):(c="ST-"+g.pc(a).toString(36),b=b?g.yf(b):"",g.Qh(c,
b,5))};
g.Ni=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.jc(d.location,g.zf(a,b)+c)};
g.Oi=function(a,b){b&&g.Mi(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.Ni(a)};
g.Pi=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.E("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Mi(a,b);if(c)return!1;g.Oi(a);return!0};
Ri=function(a,b){g.C.call(this);this.H=this.qa=a;this.O=b;this.L=!1;this.api={};this.aa=this.W=null;this.J=new g.Ve;g.xd(this,this.J);this.D={};this.la=this.ia=this.F=this.ob=this.C=null;this.V=!1;this.G=this.N=null;this.Aa={};this.ub=["onReady"];this.Za=null;this.qb=NaN;this.X={};Qi(this);this.Ei("WATCH_LATER_VIDEO_ADDED",this.AF.bind(this));this.Ei("WATCH_LATER_VIDEO_REMOVED",this.BF.bind(this));this.Ei("onAdAnnounce",this.Rv.bind(this));this.yb=new gh(this);g.xd(this,this.yb)};
Si=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Yi=function(a){var b=!0,c=Xi(a);c&&a.C&&(a=a.C,b=g.F(c,"version")==a.assets.js);return b&&!!g.r("yt.player.Application.create")};
jba=function(a){if(!a.sb()&&!a.V){var b=Yi(a);if(b&&"html5"==(Xi(a)?"html5":null))a.la="html5",a.L||Zi(a);else if($i(a),a.la="html5",b&&a.G)a.qa.appendChild(a.G),Zi(a);else{a.C.loaded=!0;var c=!1;a.N=function(){c=!0;var d=a.C.clone();g.r("yt.player.Application.create")(a.qa,d);Zi(a)};
a.V=!0;b?a.N():(g.cg(a.C.assets.js,a.N),g.Hi(a.C.assets.css),aj(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
Xi=function(a){var b=g.y(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
Zi=function(a){if(!a.sb()){var b=Xi(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||kba(a)):a.qb=g.Rf(function(){Zi(a)},50)}};
kba=function(a){Qi(a);a.L=!0;var b=Xi(a);b.addEventListener&&(a.W=bj(a,b,"addEventListener"));b.removeEventListener&&(a.aa=bj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=bj(a,b,e))}for(var f in a.D)a.W(f,a.D[f]);Si(a);a.ia&&a.ia(a.api);a.J.oa("onReady",a.api)};
bj=function(a,b,c){var d=b[c];return function(){try{return a.Za=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Za=e,g.Of(e))}}};
Qi=function(a){a.L=!1;if(a.aa)for(var b in a.D)a.aa(b,a.D[b]);for(var c in a.X)g.Tf(parseInt(c,10));a.X={};a.W=null;a.aa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Ei.bind(a);a.api.removeEventListener=a.NJ.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.wx.bind(a);a.api.getPlayerType=a.Cx.bind(a);a.api.getCurrentVideoConfig=a.sx.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.uB.bind(a)};
cj=function(a,b){var c=b;if("string"==typeof b){if(a.Aa[b])return a.Aa[b];c=function(){var d=g.r(b);d&&d.apply(g.n,arguments)};
a.Aa[b]=c}return c?c:null};
lba=function(a,b){var c="ytPlayer"+b+a.O;a.D[b]=c;g.n[c]=function(d){var e=g.Rf(function(){a.sb()||(a.J.oa(b,d),g.Za(a.X,String(e)))},0);
g.$a(a.X,String(e),!0)};
return c};
$i=function(a){a.cancel();Qi(a);a.la=null;a.C&&(a.C.loaded=!1);var b=Xi(a);b&&(Yi(a)||!aj(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.cd(a.qa)};
aj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.fj=function(a,b){a=g.ua(a)?g.Tc(a):a;var c=g.dj+"_"+g.Ga(a),d=g.ej[c];if(d)return d.loadNewVideoConfig(b),d.api;d=new Ri(a,c);g.ej[c]=d;g.G("player-added",d.api);g.vd(d,g.v(mba,d));g.Rf(function(){d.loadNewVideoConfig(b)},0);
return d.api};
mba=function(a){delete g.ej[a.getId()]};
g.gj=function(a){if(!a)return null;var b=g.dj+"_"+g.Ga(a),c=g.ej[b];c||(c=new Ri(a,b),g.ej[b]=c);return c.api};
g.hj=function(a){return g.gj(document.getElementById(a))};
g.ij=function(a,b){this.version=a;this.args=b};
g.jj=function(a,b){this.topic=a;this.C=b};
g.lj=function(a,b){var c=g.kj();c&&c.publish.call(c,a.toString(),a,b)};
g.kj=function(){return g.r("ytPubsub2Pubsub2Instance")};
g.nj=function(a,b){var c={};c.key=a;c.value=b;return mj().then(function(d){return new Promise(function(e,f){var k=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);k.onsuccess=e;k.onerror=f})})};
g.oj=function(a){return mj().then(function(b){return new Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var f=e.result;c(f?f.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})},function(){return null})};
mj=function(){return pj?Promise.resolve(pj):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))pj=d,a(pj);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),mj()};
c.onupgradeneeded=nba})};
nba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
oba=function(a){if(qj.getEntriesByType){var b=qj.getEntriesByType("paint");if(b=g.Ja(b,function(d){return"first-paint"==d.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Da(b)){b=b();var c=1E3*Math.min(b.requestTime||Infinity,b.startLoadTime||Infinity);c=Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
rj=function(){var a=g.E("TIMING_TICK_EXPIRATION");a||(a={},g.Jf("TIMING_TICK_EXPIRATION",a));return a};
sj=function(){var a=rj(),b;for(b in a)g.lg(a[b]);g.Jf("TIMING_TICK_EXPIRATION",{})};
tj=function(a,b){g.ij.call(this,1,arguments)};
uj=function(a,b){g.ij.call(this,1,arguments)};
tba=function(){vj=!1;var a=g.E("TIMING_INFO",{});for(b in a)wj(b,a[b]);wj("is_nav",1);(a=g.si())&&wj("csn",a);(a=g.E("PREVIOUS_ACTION",void 0))&&wj("pa",a);var b=xj();b.p=g.E("CLIENT_PROTOCOL")||"unknown";b.t=g.E("CLIENT_TRANSPORT")||"unknown";wj("yt_vis",pba());if("cold"==b.yt_lt){a=qj.timing||{};a.navigationStart&&(yj("srt",a.responseStart),1!=b.prerender&&zj("n",a.navigationStart));b=oba(a);0<b&&yj("fpt",b);Aj(a);qj.getEntriesByType&&qba();a=[];if(document.querySelector&&qj&&qj.getEntriesByName)for(var c in Bj)b=
Bj[c],rba(c,b)&&a.push(b);a.length&&wj("rc",a.join(","))}Cj(void 0)&&(c={},c.actionType=sba[g.E("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Dj(void 0),di(c,a));if("cold"==xj().yt_lt){a=Ej();c=Fj();for(var d in a)g.qb(d,"_")||"tick_"+d in c||Gj(d,a[d]);d=xj();for(var e in d)"info_"+e in c||Hj(e,d[e])}Ij(!0);g.Jj(!1)};
Mj=function(){Kj(void 0);uba();Lj(!1,void 0);g.E("TIMING_ACTION")&&g.Jf("PREVIOUS_ACTION",g.E("TIMING_ACTION"));g.Jf("TIMING_ACTION","")};
yj=function(a,b,c){b||"_"==a[0]||Nj(a,c);var d=Ej(c),e=b||g.wh();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=rj();var f=e[a];f&&(g.lg(f),e[a]=0);Gj(a,b,c)||g.Jj(!1,c);return d[a]};
Nj=function(a,b){qj.mark&&(g.qb(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),qj.mark(a))};
zj=function(a,b){wj("yt_sts",a,void 0);yj("_start",b,void 0)};
wj=function(a,b,c){xj(c)[a]=b;Cj(c)&&Hj(a,b,c)};
Hj=function(a,b,c){Fj(c)["info_"+a]=b;if(a in Oj){var d=Oj[a];g.Ma(vba,d)&&(b=!!b);a in Pj&&(b=Pj[a]+b.toUpperCase());a={};d=d.split(".");for(var e=a,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=b;Cj(c)&&(iba(Qj(c),a),b=Dj(c),di(a,b))}else g.Ma(wba,a)||(b=Error("Unknown label logged with GEL CSI"),b.params=a,g.Of(b))};
Rj=function(a){var b=Ej(a);if(b.aft)return b.aft;a=g.E((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
Aj=function(a,b){yj("nreqs",a.requestStart,b);yj("nress",a.responseStart,b);yj("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(yj("nrs",a.redirectStart,b),yj("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(yj("ndnss",a.domainLookupStart,b),yj("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(yj("ntcps",a.connectStart,b),yj("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(yj("nstcps",a.secureConnectionStart,
b),yj("ntcpe",a.connectEnd,b))};
g.Jj=function(a,b){if(!Sj(b)){var c=g.E((b||"")+"TIMING_ACTION",void 0),d=Ej(b);if(g.r("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Rj(b)))if(Tj||(g.lj(xba,new tj(Math.round(c-d._start),b)),Tj=!0),a||b)Uj(b);else{c=!0;var e=g.E("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Uj(b)}}};
pba=function(){switch(g.Vg()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Vj=function(a){if(!Sj(void 0)){var b=g.E("CSI_SERVICE_NAME","youtube");g.E("TIMING_ACTION",void 0)&&b&&(yj("aa",void 0,void 0),wj("ap",1,void 0),wj("yt_fss",a,void 0),Uj(void 0))}};
Gj=function(a,b,c){Fj(c)["tick_"+a]=b;c||b||g.wh();return Cj(c)?(c=Dj(c),"_start"==a?ci("baseline_"+c)||g.Xh("latencyActionBaselined",{clientActionNonce:c},{timestamp:b}):ci("tick_"+a+"_"+c)||g.Xh("latencyActionTicked",{tickName:a,clientActionNonce:c},{timestamp:b}),!0):!1};
Wj=function(a){return Math.round(qj.timing.navigationStart+a)};
qba=function(){var a=window.location.protocol,b=qj.getEntriesByType("resource");b=(0,g.Xj)(b,function(c){return 0==c.name.indexOf(a+"//web.archive.org/web/20190630235927/https://fonts.gstatic.com/s/")});
(b=(0,g.Ef)(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(yj("wffs",Wj(b.startTime)),yj("wffe",Wj(b.responseEnd)))};
rba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=qj.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,yj("rsf_"+b,d+Math.round(c.fetchStart)),yj("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(d=xj(void 0),e=Qj(void 0),"rc"in d||"rc"in e||wj("rc",""),0===c.transferSize))?!0:!1:!1};
Ij=function(a){g.p("ytglobal.timingready_",a,void 0)};
Dj=function(a){var b=Yj(a).nonce;b||(b=hi(),Yj(a).nonce=b);return b};
Ej=function(a){return Yj(a).tick};
xj=function(a){return Yj(a).info};
Qj=function(a){a=Yj(a);"gelInfo"in a||(a.gelInfo={});return a.gelInfo};
Fj=function(a){a=Yj(a);"gel"in a||(a.gel={});return a.gel};
Yj=function(a){return g.r("ytcsi."+(a||"")+"data_")||Kj(a)};
Kj=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
Sj=function(a){return!!g.r("yt.timing."+(a||"")+"pingSent_")};
Lj=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
yba=function(a){var b=Ej(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==xj(a).yt_pvis};
Cj=function(a){return vj||g.qg("csi_on_gel")||!!Yj(a).useGel};
Uj=function(a){sj();if(!Cj(a)){var b=Ej(a),c=xj(a),d=b._start;for(k in b)if(g.qb(k,"_")&&g.Ba(b[k])){var e=k.slice(1);if(e in zba){var f=(0,g.Zj)(b[k],function(u){return Math.round(u-d)});
c["all_"+e]=f.join()}delete b[k]}f=g.E("CSI_SERVICE_NAME","youtube");var k={v:2,s:f,action:g.E((a||"")+"TIMING_ACTION",void 0)};e=wj.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var l=window.location.protocol+g.r("ytplayer.config.assets.js");(l=qj.getEntriesByName?qj.getEntriesByName(l)[0]:null)?c.h5jse=Math.round(c.h5jse-l.responseEnd):delete c.h5jse}b.aft=Rj(a);yba(a)&&"youtube"==f&&(wj("yt_lt","hot_bg",a),f=b.vc,l=b.pbs,delete b.aft,c.aft=Math.round(l-f));for(var m in c)"_"!=m.charAt(0)&&(k[m]=
c[m]);b.ps=g.wh();m={};f=[];for(var q in b)"_"!=q.charAt(0)&&(l=Math.round(b[q]-d),m[q]=l,f.push(q+"."+l));k.rt=f.join(",");(b=g.r("ytdebug.logTiming"))&&b(k,m);Aba(k,!!c.ap,a);g.lj(Bba,new uj(m.aft+(e||0),a))}};
Aba=function(a,b,c){if(g.qg("debug_csi_data")){var d=g.r("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;Ei(a,f)||g.Fi(a,void 0,void 0,void 0,f)}else g.Fi(a);Lj(!0,c)};
Hba=function(){ak++;var a=g.Xc(),b=new g.id(0,0,a.width,a.height);bk("vph",a.height);bk("vpw",a.width);(0,g.ck)("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;dk.start();for(var f=0;f<c;f++){var k=a[f];if(ek(k,b)){var l=Cba(k);l.then(Dba);d.push(l);fk.push(l);k.loadTime||(e=!1)}}e&&bk("yt_eil",1);(0,g.ck)("vpcc");b=g.se(d).then(Eba);g.ue(b,Fba);b.then(Gba);fk.push(b);return b};
Gba=function(){dk.stop()};
Fba=function(){(0,g.ck)("vpr")};
ek=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.Ug(c);if(e in gk)return!0;if(e in hk)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return hk[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return hk[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)gk[d[c]]=!0;return!0};
Eba=function(a){var b=g.Xc();b=new g.id(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;ek(a[d].kA,b)&&c<f&&(c=f)}return c};
Cba=function(a){var b=ak;return new g.ne(function(c,d){var e={kA:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){ak!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},ik.push(a))})};
Dba=function(a){dk.start();a=a.time;jk<a&&(jk=a,(0,g.ck)("lim",a))};
Iba=function(){(0,g.ck)("vptl",jk);(0,g.ck)("vpl",jk)};
Jba=function(){fk.forEach(function(a){a.cancel()});
jk=fk.length=0;gk={};hk={};ik.forEach(function(a){a.slt=void 0});
ik.length=0};
g.kk=function(a,b){g.Fi("/gen_204?"+a,b)};
Kba=function(a){if(null==a)return[];var b=[];g.qg("ima_prevent_mpu_queries_on_cached_playback")&&0>lk.indexOf("ad3_module")&&lk.push("ad3_module");lk.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.mk=function(){return g.D(g.y("page-container"),"remote-connected")};
Lba=function(){nk=g.Sf(ok,5E3);var a=g.pk();a?(a.addEventListener("onReady",ok),a.addEventListener("onStateChange",ok)):qk("unable to init PP monitor")};
sk=function(a){for(var b in g.ej){var c=g.ej[b];c&&c.cancel()}if(a=a||null)rk="",g.fj("player-api",a),a=g.ih(a),a.loaded=!0;ok();g.p("ytplayer.config",a,void 0)};
g.pk=function(){return g.hj("player-api")};
ok=function(){var a=g.pk();if(a){var b=g.y("player");b=!b||g.D(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.E("PAGE_NAME"),e=g.mk();!c||d||e||(qk("PP playing off watch (paused)"),a.pauseVideo());b&&d?qk("PP off-screen on watch"):b||d||qk("PP !off-screen off watch")}};
qk=function(a){var b=g.E("PAGE_NAME");b&&(Error(a).params=[b,rk,g.r("_spf_state.nav-counter")],g.p("yt.www.persistentplayer.issue",a,void 0),g.Mf(Error(a),"WARNING"))};
uk=function(){(0,g.ck)("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){(0,g.ck)("cpt");g.G("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?((0,g.ck)("cpt"),g.G("on_cpt_tick",(new Date).getTime())):setTimeout(function(){(0,g.ck)("cpt");
g.G("on_cpt_tick",(new Date).getTime())},0);
Mba();g.E("CSI_VIEWPORT")&&(tk=Hba(),tk.then(function(a){(0,g.ck)("vpl",a);tk=null},function(){}))};
Mba=function(){vk("init");var a=g.E("PAGE_NAME",void 0);a&&vk("init-"+a)};
vk=function(a){g.og()?wk.push(g.kg(g.v(g.ag,a),0)):g.G(a)};
xk=function(){g.mg(wk);wk.length=0;Jba();tk&&(tk.cancel(),tk=null);var a=g.E("PAGE_NAME",void 0);a&&g.ag("dispose-"+a);g.ag("dispose")};
Nba=function(){uk()};
Oba=function(){g.E("TIMING_REPORT_ON_UNLOAD")&&g.Jj(!0);Vj("u");g.mi("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");ui();g.Yh();g.th();xk();g.ag("pageunload")};
yk=function(){g.Gh()};
zk=function(){window.yt_spf_loaded_history=!0;g.Gh()};
Ek=function(){Ak=1;Bk=Ck=0;g.E("TIMING_REPORT_ON_UNLOAD")&&g.Jj(!0);g.qg("warm_load_nav_start_web")?(Vj("n"),Mj(),Ij(!1),g.Jf("TIMING_AFT_KEYS",[]),wj("yt_lt","warm"),g.Jf("TIMING_ACTION",""),g.Jf("TIMING_WAIT",[]),sj(),zj("n")):(Vj("n"),Mj(),zj("n"));Nj("nr");Dk(Pba);ui();g.ag("navigate")};
Ik=function(a){a=a.detail.part||a.detail.partial;(0,g.ck)("nc"+Ck);++Ck;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.ck)("bc");else{var b=1==Ak;Ak=2;b?(Dk(Qba),Fk()):Dk(Rba);if(b=a&&a.data&&a.data.swfcfg)Gk(a.timing,b.args),Hk(b)}};
Jk=function(){(0,g.ck)("np"+Bk);++Bk};
Kk=function(a){a=a.detail.response;var b=1==Ak;Ak=3;b&&(Dk(Sba),Fk());if(b=a.data&&a.data.swfcfg)Gk(a.timing,b.args),Hk(b)};
Pk=function(a){(0,g.ck)("nd");a=a.detail.response;g.Mk=a.cacheKey;a=a.timing;var b=window._spf_state;g.Nk.navigationCount=b&&b["nav-counter"]||0;g.qg("warm_load_nav_start_web")?(0,g.ck)("srt",a.responseStart):(zj("ne",a.responseStart),bk("srt",Math.max(0,a.responseStart-a.navigationStart)));bk("yt_lt",a.spfCached?"hot":"warm");(0,g.ck)("pfs",a.fetchStart);(0,g.ck)("pfrs",a.responseStart);"redirectStart"in a&&Tba(a);Dk(Ok);document.getElementById("content").style.height="";uk();Ak=0};
Qk=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Mf(a)};
Rk=function(a){g.kk(g.yf({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Vba=function(){Uba();window.yt_spf_loaded_history=!1};
Wba=function(){};
Fk=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");xk();a=g.E("PREVIOUS_ACTION");for(var b in g.If)delete g.If[b];g.Jf("PREVIOUS_ACTION",a);g.Jf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);(b=g.pk())&&b.stopVideo?(b.stopVideo(),b.getLastError()&&((b=document.getElementById("movie_player"))&&b.stopVideo?(b.stopVideo(),rk="recovered"):rk="missing2")):rk="missing";ok()};
Hk=function(a){"cfg"in Ej(void 0)||(0,g.ck)("cfg");sk(a)};
Dk=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.lg(Sk);Sk=g.kg(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Tf(Tk);Tk=g.Rf(function(){b.className=e},c)},0)};
Uba=function(){var a=Ok[0]+50;g.Tf(Tk);Tk=g.Rf(function(){var b=document.getElementById("progress");b&&b.parentNode.removeChild(b)},a)};
Gk=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Kba(b));g.E("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.kk(g.yf(c)))};
Vk=function(){return"granted"!=Notification.permission?Promise.resolve():Uk().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
Xk=function(){Wk({type:"notifications_register",data:g.E("ID_TOKEN")})};
Uk=function(){return navigator.serviceWorker.getRegistration(String(pg("service_worker_scope")||""))};
Yk=function(a){return!(!a||!a.pushManager)};
Wk=function(a){Uk().then(function(b){if(!b||!b.active)return Promise.reject();b.active.postMessage(a);return Promise.resolve()})};
Xba=function(){if(!g.E("LOGGED_IN",void 0))return Promise.resolve(!1);var a=String(pg("service_worker_push_force_notification_prompt_tag")||"");return a?g.oj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
aca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?Uk().then(Yk):Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=Vk().then(function(){Wk({type:"notifications_check_registration",data:g.E("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return Yba(a)}).then(function(c){if(c)return Zba(),$ba().then(function(){})})})};
Yba=function(a){return g.E("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.E("LOGGED_IN",void 0)&&(void 0===a?0:a)?Xba().then(function(b){if(b)return!0;b=[bca(),cca()];g.E("LOGGED_IN",void 0)||b.push(dca());return Promise.all(b).then(function(c){return c.every(function(d){return d})})}):Promise.resolve(!1)};
dca=function(){var a=g.rg("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.oj("WatchCount").then(function(b){return b>=a})};
$ba=function(){var a=arguments;g.qg("service_worker_push_prompt_modal_enable")&&eca();return Notification.requestPermission().then(function(b){Zk();var c=document.getElementById("ticker");c&&(c.className=c.classList.remove("show"));if("granted"==b)return Vk().then(function(){g.nj("NotificationsDisabled",!1);Xk();return Promise.resolve(!0)});
"denied"==b&&Xk();return Promise.resolve(!1)})["catch"](function(){Zk();
return Promise.reject.apply(Promise,a instanceof Array?a:aaa(g.da(a)))})};
Zba=function(){g.oj("PromptCount").then(function(a){return g.nj("PromptCount",a+1)}).then(function(){return g.nj("PromptTime",(0,g.Nc)())}).then(function(){var a=String(pg("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.oj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.nj("PromptTags",JSON.stringify(c))})})};
bca=function(){return-1==g.rg("service_worker_push_prompt_cap")?Promise.resolve(!0):g.oj("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.rg("service_worker_push_prompt_cap"))})};
cca=function(){var a=g.rg("service_worker_push_prompt_delay_microseconds");return a?g.oj("PromptTime").then(function(b){return Promise.resolve((0,g.Nc)()-a>(b||0))}):Promise.resolve(!0)};
fca=function(){$k||Zk()};
al=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
eca=function(){var a=g.y("yt-push-prompt-modal-bg");$k=g.qg("service_worker_push_prompt_modal_ignore_click");a?al(a):(a=g.$c("div",{id:"yt-push-prompt-modal-bg"}),al(a),document.body.appendChild(a),g.dh(document,"click",fca))};
Zk=function(){var a=g.y("yt-push-prompt-modal-bg");a&&g.dd(a)};
gca=function(a){return Yk(a)?aca():Promise.resolve()};
ica=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(hca)})};
kca=function(){var a="/sw.js",b=g.E("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=bl(a);g.qg("service_worker_push_enabled")&&a.then(jca).then(gca)};
jca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
hca=function(a){a&&bl("/sw.js?0",a.scope)};
bl=function(a,b){return navigator.serviceWorker.register(a,{scope:b||String(pg("service_worker_scope")||"")||"/"})};
cl=function(){g.vi.call(this,"www/base");this.D=0};
dl=function(a){(a=a.detail.name)&&yi(a)};
g.aa=[];ea="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)el=Object.setPrototypeOf;else{var fl;a:{var lca={a:!0},gl={};try{gl.__proto__=lca;fl=gl.a;break a}catch(a){}fl=!1}el=fl?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var fa=el,ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ka("Promise",function(a){function b(k){this.F=0;this.D=void 0;this.C=[];var l=this.H();try{k(l.resolve,l.reject)}catch(m){l.reject(m)}}
function c(){this.C=null}
function d(k){return k instanceof b?k:new b(function(l){l(k)})}
if(a)return a;c.prototype.F=function(k){if(null==this.C){this.C=[];var l=this;this.D(function(){l.H()})}this.C.push(k)};
var e=ia.setTimeout;c.prototype.D=function(k){e(k,0)};
c.prototype.H=function(){for(;this.C&&this.C.length;){var k=this.C;this.C=[];for(var l=0;l<k.length;++l){var m=k[l];k[l]=null;try{m()}catch(q){this.G(q)}}}this.C=null};
c.prototype.G=function(k){this.D(function(){throw k;})};
b.prototype.H=function(){function k(q){return function(u){m||(m=!0,q.call(l,u))}}
var l=this,m=!1;return{resolve:k(this.O),reject:k(this.G)}};
b.prototype.O=function(k){if(k===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof b)this.V(k);else{a:switch(typeof k){case "object":var l=null!=k;break a;case "function":l=!0;break a;default:l=!1}l?this.W(k):this.L(k)}};
b.prototype.W=function(k){var l=void 0;try{l=k.then}catch(m){this.G(m);return}"function"==typeof l?this.la(l,k):this.L(k)};
b.prototype.G=function(k){this.N(2,k)};
b.prototype.L=function(k){this.N(1,k)};
b.prototype.N=function(k,l){if(0!=this.F)throw Error("Cannot settle("+k+", "+l+"): Promise already settled in state"+this.F);this.F=k;this.D=l;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var k=0;k<this.C.length;++k)f.F(this.C[k]);this.C=null}};
var f=new c;b.prototype.V=function(k){var l=this.H();k.Mi(l.resolve,l.reject)};
b.prototype.la=function(k,l){var m=this.H();try{k.call(l,m.resolve,m.reject)}catch(q){m.reject(q)}};
b.prototype.then=function(k,l){function m(B,I){return"function"==typeof B?function(S){try{q(B(S))}catch(W){u(W)}}:I}
var q,u,z=new b(function(B,I){q=B;u=I});
this.Mi(m(k,q),m(l,u));return z};
b.prototype["catch"]=function(k){return this.then(void 0,k)};
b.prototype.Mi=function(k,l){function m(){switch(q.F){case 1:k(q.D);break;case 2:l(q.D);break;default:throw Error("Unexpected state: "+q.F);}}
var q=this;null==this.C?f.F(m):this.C.push(m)};
b.resolve=d;b.reject=function(k){return new b(function(l,m){m(k)})};
b.race=function(k){return new b(function(l,m){for(var q=g.da(k),u=q.next();!u.done;u=q.next())d(u.value).Mi(l,m)})};
b.all=function(k){var l=g.da(k),m=l.next();return m.done?d([]):new b(function(q,u){function z(S){return function(W){B[S]=W;I--;0==I&&q(B)}}
var B=[],I=0;do B.push(void 0),I++,d(m.value).Mi(z(B.length-1),u),m=l.next();while(!m.done)})};
return b});
ka("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
ma.prototype.toString=function(){return this.C};
var baa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
ka("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ka("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&k<e;)if(d[k++]!=b[l++])return!1;return l>=f}});
ka("String.prototype.repeat",function(a){return a?a:function(b){var c=pa(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
ka("Array.prototype.keys",function(a){return a?a:function(){return ra(this,function(b){return b})}});
ka("Array.prototype.values",function(a){return a?a:function(){return ra(this,function(b,c){return c})}});
var mca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||mca});
ka("WeakMap",function(a){function b(l){this.rb=(k+=Math.random()+1).toString();if(l){l=g.da(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){if(!sa(l,f)){var m=new c;ja(l,f,{value:m})}}
function e(l){var m=Object[l];m&&(Object[l]=function(q){if(q instanceof c)return q;d(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),q=new a([[l,2],[m,3]]);if(2!=q.get(l)||3!=q.get(m))return!1;q["delete"](l);q.set(m,4);return!q.has(l)&&4==q.get(m)}catch(u){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var k=0;b.prototype.set=function(l,m){d(l);if(!sa(l,f))throw Error("WeakMap key fail: "+l);l[f][this.rb]=m;return this};
b.prototype.get=function(l){return sa(l,f)?l[f][this.rb]:void 0};
b.prototype.has=function(l){return sa(l,f)&&sa(l[f],this.rb)};
b.prototype["delete"]=function(l){return sa(l,f)&&sa(l[f],this.rb)?delete l[f][this.rb]:!1};
return b});
ka("Map",function(a){function b(){var l={};return l.previous=l.next=l.head=l}
function c(l,m){var q=l.F;return na(function(){if(q){for(;q.head!=l.F;)q=q.previous;for(;q.next!=q.head;)return q=q.next,{done:!1,value:m(q)};q=null}return{done:!0,value:void 0}})}
function d(l,m){var q=m&&typeof m;"object"==q||"function"==q?f.has(m)?q=f.get(m):(q=""+ ++k,f.set(m,q)):q="p_"+m;var u=l.C[q];if(u&&sa(l.C,q))for(var z=0;z<u.length;z++){var B=u[z];if(m!==m&&B.key!==B.key||m===B.key)return{id:q,list:u,index:z,xc:B}}return{id:q,list:u,index:-1,xc:void 0}}
function e(l){this.C={};this.F=b();this.size=0;if(l){l=g.da(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var l=Object.seal({x:4}),m=new a(g.da([[l,"s"]]));if("s"!=m.get(l)||1!=m.size||m.get({x:4})||m.set({x:4},"t")!=m||2!=m.size)return!1;var q=m.entries(),u=q.next();if(u.done||u.value[0]!=l||"s"!=u.value[1])return!1;u=q.next();return u.done||4!=u.value[0].x||"t"!=u.value[1]||!q.next().done?!1:!0}catch(z){return!1}}())return a;
oa();var f=new WeakMap;e.prototype.set=function(l,m){l=0===l?0:l;var q=d(this,l);q.list||(q.list=this.C[q.id]=[]);q.xc?q.xc.value=m:(q.xc={next:this.F,previous:this.F.previous,head:this.F,key:l,value:m},q.list.push(q.xc),this.F.previous.next=q.xc,this.F.previous=q.xc,this.size++);return this};
e.prototype["delete"]=function(l){l=d(this,l);return l.xc&&l.list?(l.list.splice(l.index,1),l.list.length||delete this.C[l.id],l.xc.previous.next=l.xc.next,l.xc.next.previous=l.xc.previous,l.xc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(l){return!!d(this,l).xc};
e.prototype.get=function(l){return(l=d(this,l).xc)&&l.value};
e.prototype.entries=function(){return c(this,function(l){return[l.key,l.value]})};
e.prototype.keys=function(){return c(this,function(l){return l.key})};
e.prototype.values=function(){return c(this,function(l){return l.value})};
e.prototype.forEach=function(l,m){for(var q=this.entries(),u;!(u=q.next()).done;)u=u.value,l.call(m,u[1],u[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var k=0;return e});
ka("Set",function(a){function b(c){this.C=new Map;if(c){c=g.da(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(g.da([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
oa();b.prototype.add=function(c){c=0===c?0:c;this.C.set(c,c);this.size=this.C.size;return this};
b.prototype["delete"]=function(c){c=this.C["delete"](c);this.size=this.C.size;return c};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(c){return this.C.has(c)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.C.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ka("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==pa(this,b,"includes").indexOf(b,c||0)}});
var nca=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ea(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ka("Reflect.construct",function(){return nca});
ka("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var k=0;!(f=b.next()).done;)e.push(c.call(d,f.value,k++))}else for(f=b.length,k=0;k<f;k++)e.push(c.call(d,b[k],k));return e}});
ka("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)sa(b,d)&&c.push([d,b[d]]);return c}});
ka("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)sa(b,d)&&c.push(b[d]);return c}});
g.hl=g.hl||{};g.n=this||self;Fa="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Nc=Date.now||function(){return+new Date};g.il=document;g.md=window;g.w(g.Ha,Error);g.Ha.prototype.name="CustomError";g.La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.ua(a))return g.ua(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.oca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.ua(a))return g.ua(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Xj=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.ua(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.Zj=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.ua(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Ef=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.A)(a,function(f,k){e=b.call(d,e,f,k,a)});
return e};
g.jl=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.kl=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var db="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.hb.prototype.ee=!0;g.hb.prototype.ed=function(){return this.C};
g.hb.prototype.toString=function(){return"Const{"+this.C+"}"};
var gb={},fb={},uaa=g.jb("");g.pca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.qca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.ll=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.lb.prototype.ee=!0;g.lb.prototype.ed=function(){return this.F.toString()};
g.lb.prototype.km=!0;g.lb.prototype.C=function(){return 1};
var kb={};var tb,ub,vb,wb,xb,yb,faa;g.Bb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
tb=/&/g;ub=/</g;vb=/>/g;wb=/"/g;xb=/'/g;yb=/\x00/g;faa=/[\x00&<>"']/;g.Fb.prototype.ee=!0;g.Fb.prototype.ed=function(){return this.F.toString()};
g.Fb.prototype.km=!0;g.Fb.prototype.C=function(){return 1};
var haa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,gaa=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,Kb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Eb={};g.Ib("about:blank");g.Ob.prototype.ee=!0;g.Nb={};g.Ob.prototype.ed=function(){return this.C};
g.ml=g.Pb("");g.nl=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.ol=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Rb.prototype.ee=!0;g.Qb={};g.Rb.prototype.ed=function(){return this.C};
g.pl=g.Sb("");a:{var ql=g.n.navigator;if(ql){var rl=ql.userAgent;if(rl){g.Tb=rl;break a}}g.Tb=""};g.ac.prototype.km=!0;g.ac.prototype.C=function(){return this.D};
g.ac.prototype.ee=!0;g.ac.prototype.ed=function(){return this.F.toString()};
var $b={};g.fc("<!DOCTYPE html>",0);g.ae=g.fc("",0);g.sl=g.fc("<br>",0);g.rca=g.Ta(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.bc(g.ae);return!b.parentElement});g.nc=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.sc[" "]=g.ya;g.x={Hk:!1,Gk:!1,Yn:!1,co:!1,Jk:!1,Kk:!1,wv:!1};g.x.ih=g.x.Hk||g.x.Gk||g.x.Yn||g.x.Jk||g.x.co||g.x.Kk;g.x.fd=function(){return g.Tb};
g.x.Kl=function(){return g.n.navigator||null};
g.x.lV=function(){return g.x.Kl()};
g.x.Qb=g.x.ih?g.x.Kk:g.Ub("Opera");g.x.ma=g.x.ih?g.x.Hk:g.Vb();g.x.mc=g.x.ih?g.x.Gk:g.Ub("Edge");g.x.Lk=g.x.mc||g.x.ma;g.x.Bb=g.x.ih?g.x.Yn:g.Ub("Gecko")&&!(g.Ab(g.Tb,"WebKit")&&!g.Ub("Edge"))&&!(g.Ub("Trident")||g.Ub("MSIE"))&&!g.Ub("Edge");g.x.lb=g.x.ih?g.x.co||g.x.Jk:g.Ab(g.Tb,"WebKit")&&!g.Ub("Edge");g.x.DA=function(){return g.x.lb&&g.Ub("Mobile")};
g.x.iR=g.x.Jk||g.x.DA();g.x.tg=g.x.lb;g.x.Jw=function(){var a=g.x.Kl();return a&&a.platform||""};
g.x.PR=g.x.Jw();g.x.ao=!1;g.x.eo=!1;g.x.Zn=!1;g.x.ho=!1;g.x.hh=!1;g.x.og=!1;g.x.mg=!1;g.x.Ik=!1;g.x.yv=!1;g.x.xv=!1;g.x.Ed=g.x.ao||g.x.eo||g.x.Zn||g.x.ho||g.x.hh||g.x.og||g.x.mg||g.x.Ik;g.x.sd=g.x.Ed?g.x.ao:g.Ub("Macintosh");g.x.vo=g.x.Ed?g.x.eo:g.Ub("Windows");g.x.BA=function(){return g.Ub("Linux")||g.Ub("CrOS")};
g.x.Hv=g.x.Ed?g.x.Zn:g.x.BA();g.x.HA=function(){var a=g.x.Kl();return!!a&&-1!=(a.appVersion||"").indexOf("X11")};
g.x.dV=g.x.Ed?g.x.ho:g.x.HA();g.x.ANDROID=g.x.Ed?g.x.hh:g.Ub("Android");g.x.Ci=g.x.Ed?g.x.og:qc();g.x.Bi=g.x.Ed?g.x.mg:g.Ub("iPad");g.x.Fv=g.x.Ed?g.x.Ik:g.Ub("iPod");g.x.IOS=g.x.Ed?g.x.og||g.x.mg||g.x.Ik:g.rc();g.x.GP=g.x.Ed?g.x.yv:g.Ab(g.Tb,"KaiOS");g.x.dP=g.x.Ed?g.x.xv:g.Ab(g.Tb,"GAFP");g.x.wh=function(){var a="",b=g.x.Kx();b&&(a=b?b[1]:"");return g.x.ma&&(b=g.x.Cp(),null!=b&&b>parseFloat(a))?String(b):a};
g.x.Kx=function(){var a=g.x.fd();if(g.x.Bb)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.x.mc)return/Edge\/([\d\.]+)/.exec(a);if(g.x.ma)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.x.lb)return/WebKit\/(\S+)/.exec(a);if(g.x.Qb)return/(?:Version)[ \/]?(\S+)/.exec(a)};
g.x.Cp=function(){var a=g.n.document;return a?a.documentMode:void 0};
g.x.VERSION=g.x.wh();g.x.compare=function(a,b){return g.Db(a,b)};
g.x.GA={};g.x.fb=function(a){return g.x.wv||iaa(a,function(){return 0<=g.Db(g.x.VERSION,a)})};
g.x.jd=g.x.fb;g.x.Bc=function(a){return Number(g.x.oo)>=a};
g.x.qV=g.x.Bc;var tl;tl=g.n.document&&g.x.ma?g.x.Cp():void 0;g.x.oo=tl;g.x.product={};g.x.product.Xn=!1;g.x.product.og=!1;g.x.product.mg=!1;g.x.product.hh=!1;g.x.product.Wn=!1;g.x.product.bo=!1;g.x.product.qg=g.x.Hk||g.x.Gk||g.x.Kk||g.x.product.Xn||g.x.product.og||g.x.product.mg||g.x.product.hh||g.x.product.Wn||g.x.product.bo;g.x.product.Qb=g.x.Qb;g.x.product.ma=g.x.ma;g.x.product.mc=g.x.mc;g.x.product.Mk=g.x.product.qg?g.x.product.Xn:Wb();g.x.product.AA=function(){return qc()||g.Ub("iPod")};
g.x.product.Ci=g.x.product.qg?g.x.product.og:g.x.product.AA();g.x.product.Bi=g.x.product.qg?g.x.product.mg:g.Ub("iPad");g.x.product.ANDROID=g.x.product.qg?g.x.product.hh:g.Zb();g.x.product.CHROME=g.x.product.qg?g.x.product.Wn:g.Xb();g.x.product.EA=function(){return g.Yb()&&!g.rc()};
g.x.product.tg=g.x.product.qg?g.x.product.bo:g.x.product.EA();var wc,vc;wc=null;g.yc=null;vc=null;g.zc.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.zc.prototype[Symbol.iterator]=function(){return this});g.Ec="function"==typeof Uint8Array;g.Ac.prototype.qd=function(){Bc(this);return this.qc};
g.Ac.prototype.F=g.Ec?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return xc(this)};
try{return JSON.stringify(this.qc&&this.qd(),Cc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.qc&&this.qd(),Cc)};
g.Ac.prototype.toString=function(){Bc(this);return this.qc.toString()};
g.Ac.prototype.clone=function(){return new this.constructor(Dc(this.qd()))};g.h=g.Fc.prototype;g.h.isEnabled=function(){return navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ta(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Nc)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Bb)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.ta(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Oc=function(){return g.Gc(this).keys};
g.h.Mb=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Pb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.Xd=g.ba(3);g.h.clear=function(){for(var a=g.Gc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Ph=new g.Fc("undefined"==typeof document?null:document);var Jc={};g.ul={Ia:["BC","AD"],Ma:["Before Christ","Anno Domini"],Na:"JFMAMJJASOND".split(""),Oa:"JFMAMJJASOND".split(""),wa:"January February March April May June July August September October November December".split(" "),sa:"January February March April May June July August September October November December".split(" "),xa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Da:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Fa:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
La:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ca:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Ea:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Qa:"SMTWTFS".split(""),Pa:"SMTWTFS".split(""),Ka:["Q1","Q2","Q3","Q4"],Ja:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Ba:["AM","PM"],ra:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],za:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Ha:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],ua:6,Ga:[5,6],va:5};
g.vl=g.ul;g.vl=g.ul;g.h=g.Oc.prototype;g.h.Qe=g.vl.ua;g.h.Bh=g.vl.va;g.h.clone=function(){var a=new g.Oc(this.date);a.Qe=this.Qe;a.Bh=this.Bh;return a};
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
g.h.add=function(a){if(a.C||a.months){var b=this.getMonth()+a.months+12*a.C,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);var d=Math.min(g.Kc(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),Mc(this,a.getDate()))};
g.h.ze=function(a){return[this.getFullYear(),g.oc(this.getMonth()+1,2),g.oc(this.getDate(),2)].join(a?"-":"")+""};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){return this.ze()};
g.h.valueOf=function(){return this.date.valueOf()};var jaa;jaa=!g.x.ma||g.x.Bc(9);g.sca=!g.x.Bb&&!g.x.ma||g.x.ma&&g.x.Bc(9)||g.x.Bb&&g.x.fb("1.9.1");g.wl=g.x.ma&&!g.x.fb("9");g.tca=g.x.ma||g.x.Qb||g.x.lb;g.uca=g.x.ma;g.h=g.Pc.prototype;g.h.clone=function(){return new g.Pc(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Pc&&g.Qc(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.Sc.prototype;g.h.clone=function(){return new g.Sc(this.width,this.height)};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!(this.width*this.height)};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Uc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var vca={PN:"allow-forms",QN:"allow-modals",RN:"allow-orientation-lock",SN:"allow-pointer-lock",TN:"allow-popups",UN:"allow-popups-to-escape-sandbox",VN:"allow-presentation",WN:"allow-same-origin",XN:"allow-scripts",YN:"allow-top-navigation",ZN:"allow-top-navigation-by-user-activation"},laa=g.Ta(function(){return g.hd(vca)});g.h=g.id.prototype;g.h.clone=function(){return new g.id(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Pc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.xl=g.x.Bb?"MozUserSelect":g.x.lb||g.x.mc?"WebkitUserSelect":null;g.yl=!!window.google_async_iframe_id;g.zl=g.yl&&window.parent||window;g.Bg=(new Date).getTime();g.C.prototype.bd=!1;g.C.prototype.sb=function(){return this.bd};
g.C.prototype.dispose=function(){this.bd||(this.bd=!0,this.Y())};
g.C.prototype.Y=function(){if(this.Vf)for(;this.Vf.length;)this.Vf.shift()()};g.yd.prototype.stopPropagation=function(){this.F=!0};
g.yd.prototype.preventDefault=function(){this.Mt=!1};var Pd,xca,saa;g.wca=!g.x.ma||g.x.Bc(9);Pd=!g.x.ma||g.x.Bc(9);xca=g.x.ma&&!g.x.fb("9");saa=function(){if(!g.n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.n.addEventListener("test",g.ya,b),g.n.removeEventListener("test",g.ya,b)}catch(c){}return a}();g.Al=g.x.lb?"webkitTransitionEnd":g.x.Qb?"otransitionend":"transitionend";g.w(g.zd,g.yd);var yca={2:"touch",3:"pen",4:"mouse"};
g.zd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.x.Bb&&(g.tc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.x.sd?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.ua(a.pointerType)?a.pointerType:yca[a.pointerType]||"";this.state=a.state;this.zc=
a;a.defaultPrevented&&this.preventDefault()};
g.zd.prototype.stopPropagation=function(){g.zd.T.stopPropagation.call(this);this.zc.stopPropagation?this.zc.stopPropagation():this.zc.cancelBubble=!0};
g.zd.prototype.preventDefault=function(){g.zd.T.preventDefault.call(this);var a=this.zc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,xca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ad="closure_listenable_"+(1E6*Math.random()|0),paa=0;g.h=g.Dd.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Fd(a,b,d,e);-1<k?(b=a[k],c||(b.Li=!1)):(b=new qaa(b,this.src,f,!!d,e),b.Li=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Fd(e,b,c,d);return-1<b?(Cd(e[b]),g.Oa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Cd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.Gg=g.ba(5);g.h.xf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Fd(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.ta(a),d=c?a.toString():"",e=g.ta(b);return g.Va(this.listeners,function(f){for(var k=0;k<f.length;++k)if(!(c&&f[k].type!=d||e&&f[k].capture!=b))return!0;return!1})};var Md="closure_lm_"+(1E6*Math.random()|0),Sd={},Od=0,Vd="__closure_events_fn_"+(1E9*Math.random()>>>0);g.w(g.Wd,g.C);g.Wd.prototype[Ad]=!0;g.h=g.Wd.prototype;g.h.gj=function(){return this.Wm};
g.h.gi=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.Id(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Qd(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.gj();if(b){var c=[];for(var d=1;b;b=b.gj())c.push(b),++d}b=this.Tv;d=a.type||a;if(g.ua(a))a=new g.yd(a,b);else if(a instanceof g.yd)a.target=a.target||b;else{var e=a;a=new g.yd(d,b);g.eb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=Xd(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=Xd(k,d,!0,a)&&e,a.F||(e=Xd(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=Xd(k,d,!1,a)&&e;return e};
g.h.Y=function(){g.Wd.T.Y.call(this);this.removeAllListeners();this.Wm=null};
g.h.M=function(a,b,c,d){return this.Hd.add(String(a),b,!1,c,d)};
g.h.Ue=function(a,b,c,d){return this.Hd.add(String(a),b,!0,c,d)};
g.h.Wa=function(a,b,c,d){return this.Hd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.Hd?this.Hd.removeAll(a):0};
g.h.Gg=g.ba(4);g.h.xf=function(a,b,c,d){return this.Hd.xf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.Hd.hasListener(g.ta(a)?String(a):void 0,b)};Yd.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var ie;var je=new Yd(function(){return new ce},function(a){a.reset()});
be.prototype.add=function(a,b){var c=je.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
be.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
ce.prototype.set=function(a,b){this.yc=a;this.scope=b;this.next=null};
ce.prototype.reset=function(){this.next=this.scope=this.yc=null};var de,ee=!1,fe=new be;oe.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var pe=new Yd(function(){return new oe},function(a){a.reset()});
g.ne.prototype.then=function(a,b,c){return te(this,g.Da(a)?a:null,g.Da(b)?b:null,c)};
g.ke(g.ne);g.ne.prototype.cancel=function(a){0==this.C&&ge(function(){var b=new g.Ae(a);ve(this,b)},this)};
g.ne.prototype.W=function(a){this.C=0;g.me(this,2,a)};
g.ne.prototype.O=function(a){this.C=0;g.me(this,3,a)};
g.ne.prototype.J=function(){for(var a;a=we(this);)xe(this,a,this.C,this.N);this.L=!1};
var Ce=$d;g.w(g.Ae,g.Ha);g.Ae.prototype.name="cancel";g.w(g.Fe,g.C);g.h=g.Fe.prototype;g.h.rb=0;g.h.Y=function(){g.Fe.T.Y.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.rb=g.De(this.hc,g.ta(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Ee(this.rb);this.rb=0};
g.h.uf=g.ba(7);g.h.isActive=function(){return 0!=this.rb};
g.h.Hp=function(){this.rb=0;this.C&&this.C.call(this.F)};g.w(Ge,Aaa);Ge.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Ge.prototype.update=function(a,b){if(null!=a){g.ta(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)He(this,a,d),d+=this.F;if(g.ua(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){He(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){He(this,e);f=0;break}}this.D=f;this.H+=b}};
Ge.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;He(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.Ke="StopIteration"in g.n?g.n.StopIteration:{message:"StopIteration",stack:""};g.Je.prototype.next=function(){throw g.Ke;};
g.Je.prototype.ud=function(){return this};g.h=g.Oe.prototype;g.h.Pb=function(){return this.D};
g.h.Mb=g.ba(0);g.h.Oc=function(){g.Qe(this);return this.C.concat()};
g.h.Xd=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Pb())return!1;var c=b||Caa;g.Qe(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.ef=this.D=this.C.length=0};
g.h.remove=function(a){return g.Pe(this.F,a)?(delete this.F[a],this.D--,this.ef++,this.C.length>2*this.D&&g.Qe(this),!0):!1};
g.h.get=function(a,b){return g.Pe(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.Pe(this.F,a)||(this.D++,this.C.push(a),this.ef++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.Oc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.Oe(this)};
g.h.ud=function(a){g.Qe(this);var b=0,c=this.ef,d=this,e=new g.Je;e.next=function(){if(c!=d.ef)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Ke;var f=d.C[b++];return a?f:d.F[f]};
return e};var Ue={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Eaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.w(g.Ve,g.C);g.h=g.Ve.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.Dd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.ya):(c&&g.Pa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Faa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.Dd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.A)(b,this.Dd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Pb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Pb(b);return a};
g.h.Y=function(){g.Ve.T.Y.call(this);this.clear();this.D.length=0};g.Xe.prototype.set=function(a,b){g.ta(b)?this.C.set(a,g.Se(b)):this.C.remove(a)};
g.Xe.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Xe.prototype.remove=function(a){this.C.remove(a)};g.w(Ye,g.Xe);Ye.prototype.set=function(a,b){Ye.T.set.call(this,a,af(b))};
Ye.prototype.F=function(a){a=Ye.T.get.call(this,a);if(!g.ta(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ye.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ta(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.w(g.bf,Ye);g.bf.prototype.set=function(a,b,c){if(b=af(b)){if(c){if(c<(0,g.Nc)()){g.bf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Nc)()}g.bf.T.set.call(this,a,b)};
g.bf.prototype.F=function(a,b){var c=g.bf.T.F.call(this,a);if(c)if(!b&&g.cf(c))g.bf.prototype.remove.call(this,a);else return c};g.w(df,Gaa);df.prototype.Pb=function(){var a=0;g.Me(this.ud(!0),function(){a++});
return a};
df.prototype.clear=function(){var a=Baa(this.ud(!0)),b=this;(0,g.A)(a,function(c){b.remove(c)})};g.w(g.ef,df);g.h=g.ef.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.ua(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Pb=function(){return this.C.length};
g.h.ud=function(a){var b=0,c=this.C,d=new g.Je;d.next=function(){if(b>=c.length)throw g.Ke;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!g.ua(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.w(g.ff,g.ef);g.w(hf,df);var Haa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},gf=null;g.h=hf.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(jf(a),b);kf(this)};
g.h.get=function(a){a=this.C.getAttribute(jf(a));if(!g.ua(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(jf(a));kf(this)};
g.h.Pb=function(){return lf(this).attributes.length};
g.h.ud=function(a){var b=0,c=lf(this).attributes,d=new g.Je;d.next=function(){if(b>=c.length)throw g.Ke;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!g.ua(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){for(var a=lf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);kf(this)};g.w(mf,df);mf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
mf.prototype.get=function(a){return this.F.get(this.C+a)};
mf.prototype.remove=function(a){this.F.remove(this.C+a)};
mf.prototype.ud=function(a){var b=this.F.ud(!0),c=this,d=new g.Je;d.next=function(){for(var e=b.next();e.substr(0,c.C.length)!=c.C;)e=b.next();return a?e.substr(c.C.length):c.F.get(e)};
return d};g.qf=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.Bf=/#|$/;Df.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
Df.prototype.get=function(a){return!!this.C[a]};/*
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
g.wh=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Bl="Microsoft Internet Explorer"==navigator.appName;g.If=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.If,void 0);var Qf={};var zca=g.r("ytPubsubPubsubInstance")||new g.Ve;g.Ve.prototype.subscribe=g.Ve.prototype.subscribe;g.Ve.prototype.unsubscribeByKey=g.Ve.prototype.Dd;g.Ve.prototype.publish=g.Ve.prototype.oa;g.Ve.prototype.clear=g.Ve.prototype.clear;g.p("ytPubsubPubsubInstance",zca,void 0);var Wf=g.r("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",Wf,void 0);var Yf=g.r("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",Yf,void 0);var Xf=g.r("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",Xf,void 0);var Kaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Laa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.eg.prototype.initialize=function(a,b,c,d){var e=this;b?(this.F=!0,g.cg(b,function(){e.F=!1;if(window.botguard)fg(e,c,d);else{g.dg(b);var f=Error("Unable to load Botguard");f.params="from "+b;g.Of(f)}})):a&&(eval(a),window.botguard?fg(this,c,d):g.Of(Error("Unable to load Botguard from JS")))};
g.eg.prototype.fe=function(){return!!this.C};
g.eg.prototype.dispose=function(){this.C=null};g.ha(ng,Maa);ng.prototype.start=function(){var a=g.r("yt.scheduler.instance.start");a&&a()};
ng.prototype.pause=function(){var a=g.r("yt.scheduler.instance.pause");a&&a()};
g.za(ng);ng.getInstance();g.sg=new g.eg;g.xg=new function(){var a=window.document;this.C=window;this.F=a};
g.p("yt.ads_.signals_.getAdSignalsString",function(){return g.tg(g.Ag())},void 0);(0,g.Nc)();var Cg=g.ta(XMLHttpRequest)?function(){return new XMLHttpRequest}:g.ta(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Fg,Saa,Kg;Fg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Saa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Kg=!1;g.Cl=Lg;Pg.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.le(a)?a:g.Rg(a)):2===this.F&&b?(a=b.call(c,this.C),g.le(a)?a:g.Qg(a)):this};
Pg.prototype.getValue=function(){return this.C};
g.ke(Pg);var Aca=0,Waa=g.x.lb?"webkit":g.x.Bb?"moz":g.x.ma?"ms":g.x.Qb?"o":"",Sg=g.r("ytDomDomGetNextId")||function(){return++Aca};
g.p("ytDomDomGetNextId",Sg,void 0);var Xaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Wg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Wg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Wg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var $g=g.r("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",$g,void 0);var bh=g.r("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",bh,void 0);var ch=g.Ta(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.w(g.fh,g.C);g.fh.prototype.W=function(a){this.C=new g.Pc(g.Yg(a),g.Zg(a))};
g.fh.prototype.N=function(){if(this.C){var a=g.wh();if(0!=this.D){var b=g.Rc(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.hc();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.fh.prototype.Y=function(){g.Uf(this.O);g.K(this.J)};g.ha(gh,g.C);gh.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
gh.prototype.Y=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.callback)}g.C.prototype.Y.call(this)};hh.prototype.clone=function(){var a=new hh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.Aa(c)?a[b]=g.bb(c):a[b]=c}return a};var kh={},jh=0;var aba,Dh,Eh,$aa,xh,bba,rh;aba=Math.pow(2,16)-1;Dh=null;Eh=0;$aa={log_event:"events",log_interaction:"interactions"};xh=Object.create(null);xh.log_event="GENERIC_EVENT_LOGGING";xh.log_interaction="INTERACTION_LOGGING";bba=new Set(["log_event"]);rh={};g.mh=0;g.ph=0;g.qh=g.r("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.qh,void 0);var Ch=g.r("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",Ch,void 0);
var uh=g.r("ytLoggingTransportDispatchedStats_")||{};g.p("ytLoggingTransportDispatchedStats_",uh,void 0);var yh=g.r("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",yh,void 0);var Jh={};var Lh=g.r("ytLoggingGelSequenceIdObj_")||{};g.p("ytLoggingGelSequenceIdObj_",Lh,void 0);g.Sh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.Nc)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.Se(b))}catch(f){return}else e=escape(b);g.Qh(a,e,c,this.F)};
g.Sh.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Ph.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.Sh.prototype.remove=function(a){this.C&&this.C.remove(a);g.Rh(a,"/",this.F)};var Th=new g.Sh("yt.innertube");g.Zh.prototype.toString=function(){return JSON.stringify(g.$h(this))};var ei=g.r("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",ei,void 0);var fi=0;var gi=(0,g.Nc)().toString();var ki=g.r("ytLoggingTimeDocumentNonce_")||hi(),li,ii;g.p("ytLoggingTimeDocumentNonce_",ki,void 0);li=0;g.ji=null;ii=null;g.p("yt_logging_screen.getRootVeType",qi,void 0);g.p("yt_logging_screen.getCurrentCsn",g.si,void 0);g.p("yt_logging_screen.setCurrentScreen",g.ti,void 0);g.h=g.vi.prototype;g.h.aK=function(){this.fe()||this.init()};
g.h.enable=function(){this.C=1;(0,g.A)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.aK,this),this.subscribe("dispose-"+a,this.dispose,this),g.E("PAGE_NAME")==a&&g.wi(this))},this)};
g.h.init=function(){g.lg(this.F);this.C=2;this.L&&this.L()};
g.h.fe=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.lg(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Mf(a)}};
g.h.subscribe=function(a,b,c){a=g.Zf(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.$f(this.G);this.G=[]};var xi=g.r("yt.modules.registry_")||{};g.p("yt.modules.registry_",xi,void 0);g.Ai=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.Ai,void 0);var Gi={},gba=0;var hba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.ha(Ri,g.C);g.h=Ri.prototype;g.h.getId=function(){return this.O};
g.h.loadNewVideoConfig=function(a){if(!this.sb()){this.ob=a=g.ih(a);this.C=a.clone();this.F=this.C.attrs.id||this.F;"video-player"==this.F&&(this.F=this.O,this.C.attrs.id=this.O);this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F);this.C.args.enablejsapi="1";this.C.args.playerapiid=this.O;this.ia||(this.ia=cj(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.kd(this.H,Number(a)||a);if(a=this.C.attrs.height)this.H.style.height=
g.jd(Number(a)||a,!0);jba(this);this.L&&Si(this)}};
g.h.sx=function(){return this.ob};
g.h.uB=function(){return this.L};
g.h.Ei=function(a,b){var c=this,d=cj(this,b);if(d){if(!g.Ma(this.ub,a)&&!this.D[a]){var e=lba(this,a);this.W&&this.W(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.L&&g.Rf(function(){d(c.api)},0)}};
g.h.NJ=function(a,b){if(!this.sb()){var c=cj(this,b);c&&g.We(this.J,a,c)}};
g.h.Rv=function(a){g.G("a11y-announce",a)};
g.h.AF=function(a){g.G("WATCH_LATER_VIDEO_ADDED",a)};
g.h.BF=function(a){g.G("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Cx=function(){return this.la||(Xi(this)?"html5":null)};
g.h.wx=function(){return this.Za};
g.h.cancel=function(){if(this.N){var a=this.N,b=g.bg(this.C.assets.js);spf.script.ignore(b,a)}g.Tf(this.qb);this.V=!1};
g.h.Y=function(){$i(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Mf(b)}this.Aa=null;for(var a in this.D)g.n[this.D[a]]=null;this.ob=this.C=this.api=null;delete this.qa;delete this.H;g.C.prototype.Y.call(this)};g.ej={};g.dj="player_uid_"+(1E9*Math.random()>>>0);g.jj.prototype.toString=function(){return this.topic};var Bca=g.r("ytPubsub2Pubsub2Instance")||new g.Ve;g.Ve.prototype.subscribe=g.Ve.prototype.subscribe;g.Ve.prototype.unsubscribeByKey=g.Ve.prototype.Dd;g.Ve.prototype.publish=g.Ve.prototype.oa;g.Ve.prototype.clear=g.Ve.prototype.clear;g.p("ytPubsub2Pubsub2Instance",Bca,void 0);g.Dl=g.r("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.Dl,void 0);g.El=g.r("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.El,void 0);
g.Fl=g.r("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.Fl,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var pj=null;g.Gl=window.performance&&window.performance.memory;g.Nk={};var qj=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.ha(tj,g.ij);g.ha(uj,g.ij);var xba=new g.jj("aft-recorded",tj),Bba=new g.jj("timing-sent",uj);var zba,Bj,Hl,Oj,wba,sba,vba,Il,Pj,Tj,vj,uba,bk,Tba;zba={vc:!0};
Bj={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_sel_auto_svg_home_v2"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",
'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Hl={};
Oj=(Hl.ad_allowed="adTypesAllowed",Hl.yt_abt="adBreakType",Hl.ad_cpn="adClientPlaybackNonce",Hl.ad_docid="adVideoId",Hl.yt_ad_an="adNetworks",Hl.ad_at="adType",Hl.browse_id="browseId",Hl.p="httpProtocol",Hl.t="transportProtocol",Hl.cpn="clientPlaybackNonce",Hl.csn="clientScreenNonce",Hl.docid="videoId",Hl.is_continuation="isContinuation",Hl.is_nav="isNavigation",Hl.b_p="kabukiInfo.browseParams",Hl.is_prefetch="kabukiInfo.isPrefetch",Hl.is_secondary_nav="kabukiInfo.isSecondaryNav",Hl.prev_browse_id=
"kabukiInfo.prevBrowseId",Hl.query_source="kabukiInfo.querySource",Hl.voz_type="kabukiInfo.vozType",Hl.yt_lt="loadType",Hl.yt_ad="isMonetized",Hl.nr="webInfo.navigationReason",Hl.ncnp="webInfo.nonPreloadedNodeCount",Hl.prt="playbackRequiresTap",Hl.pis="playerInfo.playerInitializedState",Hl.paused="playerInfo.isPausedOnLoad",Hl.yt_pt="playerType",Hl.fmt="playerInfo.itag",Hl.yt_pl="watchInfo.isPlaylist",Hl.yt_pre="playerInfo.preloadType",Hl.yt_ad_pr="prerollAllowed",Hl.pa="previousAction",Hl.yt_red=
"isRedSubscriber",Hl.st="serverTimeMs",Hl.aq="tvInfo.appQuality",Hl.br_trs="tvInfo.bedrockTriggerState",Hl.label="tvInfo.label",Hl.is_mdx="tvInfo.isMdx",Hl.preloaded="tvInfo.isPreloaded",Hl.query="unpluggedInfo.query",Hl.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Hl.yt_vst="videoStreamType",Hl.vph="viewportHeight",Hl.vpw="viewportWidth",Hl.yt_vis="isVisible",Hl);wba="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts mver cseg".split(" ");
sba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
"channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",chips:"LATENCY_ACTION_CHIPS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",search_ui:"LATENCY_ACTION_SEARCH_UI",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",
"watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
"video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC","video.monetization":"LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION"};vba="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" ");Il={};
Pj=(Il.pa="LATENCY_ACTION_",Il.yt_pt="LATENCY_PLAYER_",Il.yt_vst="VIDEO_STREAM_TYPE_",Il.pis="PLAYER_INITIALIZED_STATE_",Il);Tj=!1;vj=!1;uba=(0,g.t)(qj.clearResourceTimings||qj.webkitClearResourceTimings||qj.mozClearResourceTimings||qj.msClearResourceTimings||qj.oClearResourceTimings||g.ya,qj);bk=wj;Tba=Aj;g.ck=yj;var jk=0,fk=[],ik=[],ak=0,gk={},hk={},dk=new g.Fe(Iba,1E3);var lk=["server_prefetched_vast","vmap"];var nk,rk="";var tk=null,wk=[];var Ak,Tk,Sk,Ck,Bk,Pba,Sba,Qba,Rba,Ok;Ck=0;Bk=0;Pba=[900,60,"waiting"];Sba=[500,99,"waiting"];Qba=[300,60,"waiting"];Rba=[400,99,"waiting"];Ok=[300,101,"done"];var $k=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.Jf,void 0);g.p("yt.pushConfigArray",Kf,void 0);g.p("yt.getConfig",g.E,void 0);g.p("yt.config.set",g.Jf,void 0);g.p("yt.config.pushArray",Kf,void 0);g.p("yt.config.get",g.E,void 0);g.p("yt.hasMsg",g.Ci,void 0);g.p("yt.setMsg",Bi,void 0);g.p("yt.setGoogMsg",Di,void 0);g.p("yt.msgs.has",g.Ci,void 0);g.p("yt.msgs.set",Bi,void 0);g.p("yt.msgs.setGoog",Di,void 0);g.p("yt.pubsub.publish",g.G,void 0);g.p("yt.pubsub.subscribe",g.Zf,void 0);
g.p("ytcsi.tick",g.ck,void 0);g.w(cl,g.vi);
cl.prototype.enable=function(){window.onload=Nba;window.onunload=Oba;window.onerror=Jaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",yk),window.addEventListener("spfhistory",zk),window.addEventListener("spfrequest",Ek),window.addEventListener("spfpartprocess",Ik),window.addEventListener("spfpartdone",Jk),window.addEventListener("spfprocess",Kk),window.addEventListener("spfdone",Pk),window.addEventListener("spferror",Qk),window.addEventListener("spfreload",
Rk),window.addEventListener("spfjsbeforeunload",dl)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",Vba),this.subscribe("dispose",Wba)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
cl.prototype.init=function(){cl.T.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.E("PAGEFRAME_JS")){var b=g.E("PAGEFRAME_JS",void 0);var c=function(){var e=g.r("ytbin.www.pageframe.setup");e&&(window.ytPageFrameLoaded=!0,e())}}else a&&(a=g.r("yt.www.masthead.loadSearchbox"))&&a();
a=g.E("JS_COMMON_MODULE");var d=g.E("JS_PAGE_MODULES");d||(d=[a]);a=g.E("JS_DELAY_LOAD",0);0<a?(g.Tf(this.D),this.D=g.Rf(function(){b&&g.cg(b,c);spf.script.require(d)},a)):(b&&g.cg(b,c),spf.script.require(d));
g.p("yt.abuse.player.botguardInitialized",Oaa,void 0);g.p("yt.abuse.player.invokeBotguard",Paa,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",Naa,void 0);g.p("yt.player.exports.navigate",g.Pi,void 0);g.p("yt.util.activity.init",g.Ih,void 0);g.p("yt.util.activity.getTimeSinceActive",g.Kh,void 0);g.p("yt.util.activity.setTimestamp",g.Gh,void 0);sk(g.r("ytplayer.config"));g.r("ytspf.enabled")&&Lba();tba();g.E("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.qg("service_worker_enabled")?kca():ica())};
cl.prototype.dispose=function(){g.Tf(this.D);var a=g.r("ytbin.www.pageframe.cancelSetup");a&&a();g.Uf(nk);if(a=g.pk())a.removeEventListener("onReady",ok),a.removeEventListener("onStateChange",ok);Ij(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.F(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.eh(a);cl.T.dispose.call(this)};
cl.prototype.disable=function(){cl.T.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",yk),window.removeEventListener("spfhistory",zk),window.removeEventListener("spfrequest",Ek),window.removeEventListener("spfpartprocess",Ik),window.removeEventListener("spfpartdone",Jk),window.removeEventListener("spfprocess",Kk),window.removeEventListener("spfdone",Pk),window.removeEventListener("spferror",Qk),window.removeEventListener("spfreload",Rk),window.removeEventListener("spfjsbeforeunload",
dl));window.onload=null;window.onunload=null;window.onerror=null};
g.zi(new cl);})(_yt_www);


}
/*
     FILE ARCHIVED ON 23:59:27 Jun 30, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:44:41 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 315.415
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.06
  cdx.remote: 0.058
  esindex: 0.008
  LoadShardBlock: 226.341 (3)
  PetaboxLoader3.datanode: 152.036 (5)
  PetaboxLoader3.resolve: 182.46 (4)
  load_resource: 173.262 (2)
*/