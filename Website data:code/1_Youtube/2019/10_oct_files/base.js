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

var _yt_www={};(function(g){var window=this;var ca,ka,la,ma,pa,oa,qa,sa,ta,xa,daa,eaa,Bb,Wb,Xb,pc,jaa,tc,Ac,Ec,Fc,Gc,Oc,Pc,laa,naa,Od,oaa,paa,Pd,Qd,raa,Yd,$d,ae,ee,saa,he,oe,ne,uaa,re,se,te,ue,waa,we,xe,Be,xaa,Ce,Je,Le,Re,Ve,Pe,Me,zaa,Ue,Se,Te,Xe,yaa,Aaa,cf,df,hf,Baa,Caa,Daa,of,qf,Faa,vf,wf,xf,Gaa,Af,Ef,Ff,Gf,Hf,If,Kf,Iaa,Of,Rf,Sf,Uf,Jaa,bg,ng,Maa,ug,pg,Naa,zg,wg,Oaa,Paa,Ig,Qaa,Raa,Taa,Og,Uaa,Qg,Rg,Vaa,Wg,Ug,Sg,Yg,eh,rh,sh,Zaa,Eh,Yaa,cba,Rh,dba,Xh,Yh,eba,di,ei,hba,mi,ti,fba,zi,yi,iba,Di,Ni,Oi,Pi,Ti,Xi,$i,bj,jba,dj,kba,ij,hj,kj,gj,jj,sj,qj,
tj,wj,rj,uj,xj,nba,Aj,pj,Bj,oba,yj,zj,vj,pba,Hj,qba,rba,Mj,Nj,Oj,Pj,sba,tba,Tj,Uj,Qj,Wj,Sj,Rj,Xj,Vj,Yj,ak,ck,fk,bk,gk,Aba,nk,pk,jk,ok,hk,qk,kk,wba,sk,uk,vk,xba,yba,Kba,Jba,Iba,zk,Hba,Fba,Gba,Lba,Mba,Nba,Oba,Ok,Kk,Mk,Qk,Pba,Rk,Tk,Qba,Rba,Uk,Vk,$k,cl,dl,el,il,jl,kl,Xba,Yba,al,Zk,Wba,bl,ol,ql,nl,rl,pl,Zba,cca,$ba,fca,bca,aca,dca,eca,hca,ul,gca,sl,ica,kca,mca,lca,jca,vl,wl,xl,fa,yl,baa,ya,Ja,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
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
sa=function(a,b){pa();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ua=function(a){return void 0!==a};
g.va=function(a){return"string"==typeof a};
g.wa=function(a){return"number"==typeof a};
g.r=function(a,b,c){a=a.split(".");c=c||g.p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
g.za=function(a){if(a&&a!=g.p)return xa(a.document);null===ya&&(ya=xa(g.p.document));return ya};
xa=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&baa.test(a)?a:""};
g.u=function(a,b){for(var c=a.split("."),d=b||g.p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.Aa=function(){};
g.Ba=function(a){a.Bc=void 0;a.getInstance=function(){return a.Bc?a.Bc:a.Bc=new a}};
g.Ca=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Da=function(a){return"array"==g.Ca(a)};
g.Ga=function(a){var b=g.Ca(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Ha=function(a){return"function"==g.Ca(a)};
g.Ia=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ka=function(a){return a[Ja]||(a[Ja]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.v=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.v=daa:g.v=eaa;return g.v.apply(null,arguments)};
g.w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.x=function(a,b){function c(){}
c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.tu=function(d,e,f){for(var k=Array(arguments.length-2),l=2;l<arguments.length;l++)k[l-2]=arguments[l];b.prototype[e].apply(d,k)}};
g.La=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.La);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Oa=function(a,b){this.C=a===Ma&&b||"";this.F=Na};
g.Pa=function(a){return a instanceof g.Oa&&a.constructor===g.Oa&&a.F===Na?a.C:"type_error:Const"};
g.Qa=function(a){return new g.Oa(Ma,a)};
g.Sa=function(a,b,c){b=g.Ra(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
g.Ra=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ua=function(a,b){return 0<=(0,g.Ta)(a,b)};
g.Va=function(a){return 0==a.length};
g.Xa=function(a,b){var c=(0,g.Ta)(a,b),d;(d=0<=c)&&g.Wa(a,c);return d};
g.Wa=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Ya=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Za=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ga(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.$a=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.ab=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.bb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.cb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.db=function(a){for(var b in a)return!1;return!0};
g.eb=function(a,b){b in a&&delete a[b]};
g.fb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.gb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.hb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.ib=function(a){var b=g.Ca(a);if("object"==b||"array"==b){if(g.Ha(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.ib(a[c]);return b}return a};
g.kb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<jb.length;f++)c=jb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.nb=function(a,b,c){this.F=a===g.lb&&b||"";this.D=a===g.lb&&c||null;this.G=mb};
g.ob=function(a){if(a instanceof g.nb&&a.constructor===g.nb&&a.G===mb)return a.F;g.Ca(a);return"type_error:TrustedResourceUrl"};
g.pb=function(a){return new g.nb(g.lb,g.Pa(a),null)};
g.qb=function(a,b){return 0==a.lastIndexOf(b,0)};
g.rb=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.sb=function(a){return/^[\s\xa0]*$/.test(a)};
g.zb=function(a,b){if(b)a=a.replace(tb,"&amp;").replace(ub,"&lt;").replace(vb,"&gt;").replace(wb,"&quot;").replace(xb,"&#39;").replace(yb,"&#0;");else{if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(tb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ub,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(vb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(wb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(xb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(yb,"&#0;"))}return a};
g.Cb=function(a,b){for(var c=0,d=(0,g.Ab)(String(a)).split("."),e=(0,g.Ab)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Bb(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||Bb(0==l[2].length,0==m[2].length)||Bb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Bb=function(a,b){return a<b?-1:a>b?1:0};
g.Fb=function(a,b){this.F=a===Db&&b||"";this.D=Eb};
g.Hb=function(a){return g.Gb(a).toString()};
g.Gb=function(a){if(a instanceof g.Fb&&a.constructor===g.Fb&&a.D===Eb)return a.F;g.Ca(a);return"type_error:SafeUrl"};
g.Jb=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(gaa);b=b&&haa.test(b[1]);return g.Ib(b?a:"about:invalid#zClosurez")};
g.Lb=function(a){if(a instanceof g.Fb)return a;a="object"==typeof a&&a.Qd?a.Vc():String(a);Kb.test(a)||(a="about:invalid#zClosurez");return g.Ib(a)};
g.Mb=function(a,b){if(a instanceof g.Fb)return a;a="object"==typeof a&&a.Qd?a.Vc():String(a);if(b&&/^data:/i.test(a)){var c=g.Jb(a);if(c.Vc()==a)return c}Kb.test(a)||(a="about:invalid#zClosurez");return g.Ib(a)};
g.Ib=function(a){return new g.Fb(Db,a)};
g.Ob=function(){this.C="";this.F=g.Nb};
g.Pb=function(a){var b=new g.Ob;b.C=a;return b};
g.Rb=function(){this.C="";this.F=g.Qb};
g.Sb=function(a){var b=new g.Rb;b.C=a;return b};
g.Ub=function(a){return-1!=g.Tb.indexOf(a)};
g.Vb=function(){return g.Ub("Trident")||g.Ub("MSIE")};
Wb=function(){return g.Ub("Firefox")||g.Ub("FxiOS")};
g.Yb=function(){return g.Ub("Safari")&&!(Xb()||g.Ub("Coast")||g.Ub("Opera")||g.Ub("Edge")||g.Ub("Edg/")||g.Ub("OPR")||Wb()||g.Ub("Silk")||g.Ub("Android"))};
Xb=function(){return(g.Ub("Chrome")||g.Ub("CriOS"))&&!g.Ub("Edge")};
g.Zb=function(){return g.Ub("Android")&&!(Xb()||Wb()||g.Ub("Opera")||g.Ub("Silk"))};
g.ac=function(){this.F="";this.G=$b;this.D=null};
g.cc=function(a){return g.bc(a).toString()};
g.bc=function(a){if(a instanceof g.ac&&a.constructor===g.ac&&a.G===$b)return a.F;g.Ca(a);return"type_error:SafeHtml"};
g.ec=function(a){if(a instanceof g.ac)return a;var b="object"==typeof a,c=null;b&&a.ol&&(c=a.C());return g.dc(g.zb(b&&a.Qd?a.Vc():String(a)),c)};
g.dc=function(a,b){return g.fc(a,b)};
g.fc=function(a,b){var c=new g.ac;c.F=a;c.D=b;return c};
g.gc=function(a,b){var c=b instanceof g.Fb?b:g.Mb(b);a.href=g.Gb(c)};
g.hc=function(a,b){a.src=b.D?b.D:g.ob(b).toString()};
g.ic=function(a,b){var c=b instanceof g.Fb?b:g.Mb(b);a.href=g.Gb(c)};
g.jc=function(a){return encodeURIComponent(String(a))};
g.kc=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.lc=function(a){return a=g.zb(a,void 0)};
g.nc=function(a,b,c){a=void 0!==c?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return(0,g.mc)("0",Math.max(0,b-c))+a};
g.oc=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
pc=function(){return g.Ub("iPhone")&&!g.Ub("iPod")&&!g.Ub("iPad")};
g.qc=function(){return pc()||g.Ub("iPad")||g.Ub("iPod")};
g.rc=function(a){g.rc[" "](a);return a};
g.sc=function(a,b){try{return g.rc(a[b]),!0}catch(c){}return!1};
jaa=function(a,b){var c=iaa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
tc=function(){var a=g.p.document;return a?a.documentMode:void 0};
g.vc=function(a){return jaa(a,function(){return 0<=g.Cb(g.uc,a)})};
g.xc=function(a){return Number(g.wc)>=a};
Ac=function(a,b){g.Ga(a);void 0===b&&(b=0);g.yc();for(var c=zc[b],d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,q=m?a[e+2]:0,t=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[t],c[f],c[l]||"",c[q]||"")}return d.join("")};
g.yc=function(){if(!g.Bc){g.Bc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));zc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===g.Bc[f]&&(g.Bc[f]=e)}}}};
g.Cc=function(a){this.C=0;this.F=a};
g.Dc=function(){};
Ec=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Da(c))for(var d=0;d<c.length;d++)c[d]&&c[d].bd();else c&&c.bd()}};
Fc=function(a,b){return g.wa(b)&&(isNaN(b)||Infinity===b||-Infinity===b)?String(b):b};
Gc=function(a){if(g.Da(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Gc(d):d)}return b}if(g.Hc&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Gc(d):d);return b};
g.Ic=function(a){this.C=a||{cookie:""}};
g.Jc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Ab)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Lc=function(a){var b=g.u("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.p.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==
b&&(b=a.constructor&&a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:g.Kc(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})};
g.Kc=function(a){if(Mc[a])return Mc[a];a=String(a);if(!Mc[a]){var b=/function\s+([^\(]+)/m.exec(a);Mc[a]=b?b[1]:"[Anonymous]"}return Mc[a]};
g.Nc=function(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31};
g.Rc=function(a,b,c){"number"===typeof a?(this.date=Oc(a,b||0,c||1),Pc(this,c||1)):g.Ia(a)?(this.date=Oc(a.getFullYear(),a.getMonth(),a.getDate()),Pc(this,a.getDate())):(this.date=new Date((0,g.Qc)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Pc(this,a))};
Oc=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
Pc=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}};
g.Sc=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
g.Tc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Uc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.Vc=function(a,b){this.width=a;this.height=b};
g.z=function(a){return g.Wc(document,a)};
g.Wc=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.Xc=function(a){return g.Wc(document,a)};
g.Zc=function(a,b){g.ab(b,function(c,d){c&&"object"==typeof c&&c.Qd&&(c=c.Vc());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Yc.hasOwnProperty(d)?a.setAttribute(Yc[d],c):g.qb(d,"aria-")||g.qb(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.ad=function(a){return g.$c(a||window)};
g.$c=function(a){a=a.document;a=g.bd(a)?a.documentElement:a.body;return new g.Vc(a.clientWidth,a.clientHeight)};
g.dd=function(a,b,c){return g.cd(document,arguments)};
g.cd=function(a,b){var c=String(b[0]),d=b[1];if(!kaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.lc(d.name),'"');if(d.type){c.push(' type="',g.lc(d.type),'"');var e={};g.kb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=g.ed(a,c);d&&("string"===typeof d?c.className=d:g.Da(d)?c.className=d.join(" "):g.Zc(c,d));2<b.length&&g.fd(a,c,b,2);return c};
g.fd=function(a,b,c,d){function e(k){k&&b.appendChild("string"===typeof k?a.createTextNode(k):k)}
for(;d<c.length;d++){var f=c[d];!g.Ga(f)||g.Ia(f)&&0<f.nodeType?e(f):(0,g.A)(laa(f)?g.Ya(f):f,e)}};
g.gd=function(a){return g.ed(document,a)};
g.ed=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.bd=function(a){return"CSS1Compat"==a.compatMode};
g.hd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.id=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.jd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
laa=function(a){if(a&&"number"==typeof a.length){if(g.Ia(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Ha(a))return"function"==typeof a.item}return!1};
g.kd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.ld=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.md=function(a){return a?decodeURI(a):a};
g.od=function(a,b){return b.match(g.nd)[a]||null};
g.pd=function(a){return g.md(g.od(3,a))};
g.qd=function(a){a=a.match(g.nd);return g.ld(null,null,null,null,a[5],a[6],a[7])};
g.rd=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.sd=function(a,b){return b?a?a+"&"+b:b:a};
g.ud=function(a,b){if(!b)return a;var c=g.rd(a);c[1]=g.sd(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.vd=function(a,b,c){if(g.Da(b))for(var d=0;d<b.length;d++)g.vd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.jc(b)))};
g.wd=function(a){var b=[],c;for(c in a)g.vd(c,a[c],b);return b.join("&")};
g.xd=function(a,b){var c=g.wd(b);return g.ud(a,c)};
g.yd=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.Ad=function(a,b){var c=a.search(g.zd),d=g.yd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.kc(a.substr(d,e-d))};
g.Bd=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.Cd=function(a){var b=[];g.Bd(a,function(c){b.push(c)});
return b};
naa=function(){var a=g.gd("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};(0,g.A)(maa(),function(d){b.call(a,d)&&(c[d]=!0)});
return c};
g.Dd=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Ed=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Gd=function(a,b){a.style.width=g.Ed(b,!0)};
g.Hd=function(){this.C=function(){return!1}};
g.Id=function(a,b){return typeof a===b};
g.Kd=function(){var a=void 0===a?g.Jd:a;try{return a.history.length}catch(b){return 0}};
g.Ld=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Kd();a.u_java=!!g.Jd.navigator&&!g.Id(g.Jd.navigator.javaEnabled,"unknown")&&!!g.Jd.navigator.javaEnabled&&g.Jd.navigator.javaEnabled();g.Jd.screen&&(a.u_h=g.Jd.screen.height,a.u_w=g.Jd.screen.width,a.u_ah=g.Jd.screen.availHeight,a.u_aw=g.Jd.screen.availWidth,a.u_cd=g.Jd.screen.colorDepth);g.Jd.navigator&&g.Jd.navigator.plugins&&(a.u_nplug=g.Jd.navigator.plugins.length);g.Jd.navigator&&g.Jd.navigator.mimeTypes&&(a.u_nmime=g.Jd.navigator.mimeTypes.length)};
g.Md=function(a,b){try{return(void 0===b?0:b)?(new g.Vc(a.innerWidth,a.innerHeight)).round():g.ad(a).round()}catch(c){return new g.Vc(-12245933,-12245933)}};
g.Nd=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var f=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,k]};
Od=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
oaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=q=0}
function b(y){for(var B=k,H=0;64>H;H+=4)B[H/4]=y[H]<<24|y[H+1]<<16|y[H+2]<<8|y[H+3];for(H=16;80>H;H++)y=B[H-3]^B[H-8]^B[H-14]^B[H-16],B[H]=(y<<1|y>>>31)&4294967295;y=e[0];var O=e[1],U=e[2],ra=e[3],Ea=e[4];for(H=0;80>H;H++){if(40>H)if(20>H){var Fa=ra^O&(U^ra);var td=1518500249}else Fa=O^U^ra,td=1859775393;else 60>H?(Fa=O&U|ra&(O|U),td=2400959708):(Fa=O^U^ra,td=3395469782);Fa=((y<<5|y>>>27)&4294967295)+Fa+Ea+td+B[H]&4294967295;Ea=ra;ra=U;U=(O<<30|O>>>2)&4294967295;O=y;y=Fa}e[0]=e[0]+y&4294967295;e[1]=
e[1]+O&4294967295;e[2]=e[2]+U&4294967295;e[3]=e[3]+ra&4294967295;e[4]=e[4]+Ea&4294967295}
function c(y,B){if("string"===typeof y){y=unescape(encodeURIComponent(y));for(var H=[],O=0,U=y.length;O<U;++O)H.push(y.charCodeAt(O));y=H}B||(B=y.length);H=0;if(0==q)for(;H+64<B;)b(y.slice(H,H+64)),H+=64,t+=64;for(;H<B;)if(f[q++]=y[H++],t++,64==q)for(q=0,b(f);H+64<B;)b(y.slice(H,H+64)),H+=64,t+=64}
function d(){var y=[],B=8*t;56>q?c(l,56-q):c(l,64-(q-56));for(var H=63;56<=H;H--)f[H]=B&255,B>>>=8;b(f);for(H=B=0;5>H;H++)for(var O=24;0<=O;O-=8)y[B++]=e[H]>>O&255;return y}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,t;a();return{reset:a,update:c,digest:d,Ou:function(){for(var y=d(),B="",H=0;H<y.length;H++)B+="0123456789ABCDEF".charAt(Math.floor(y[H]/16))+"0123456789ABCDEF".charAt(y[H]%16);return B}}};
paa=function(a,b,c){var d=[],e=[];if(1==(g.Da(c)?2:1))return e=[b,a],(0,g.A)(d,function(l){e.push(l)}),Pd(e.join(" "));
var f=[],k=[];(0,g.A)(c,function(l){k.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Va(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.A)(d,function(l){e.push(l)});
a=Pd(e.join(" "));a=[c,a];g.Va(k)||a.push(k.join(""));return a.join("_")};
Pd=function(a){var b=oaa();b.update(a);return b.Ou().toLowerCase()};
Qd=function(a){var b=Od(String(g.p.location.href)),c=g.p.__OVERRIDE_SID;null==c&&(c=(new g.Ic(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.p.__SAPISID:g.p.__APISID,null==b&&(b=(new g.Ic(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.p.location.href);return d&&b&&c?[c,paa(Od(d),b,a||null)].join(" "):null}return null};
g.C=function(){this.Sc=this.Sc;this.Gf=this.Gf};
g.Td=function(a,b){g.Rd(a,g.w(g.Sd,b))};
g.Rd=function(a,b){a.Sc?b():(a.Gf||(a.Gf=[]),a.Gf.push(b))};
g.Sd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Ud=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Tr=!0};
g.Vd=function(a,b){g.Ud.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.yc=null;a&&this.init(a,b)};
g.Xd=function(a){return!(!a||!a[Wd])};
raa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.nh=e;this.key=++qaa;this.zg=this.ai=!1};
Yd=function(a){a.zg=!0;a.listener=null;a.C=null;a.src=null;a.nh=null};
g.Zd=function(a){this.src=a;this.listeners={};this.C=0};
$d=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Xa(a.listeners[c],b);d&&(Yd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
ae=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.zg&&f.listener==b&&f.capture==!!c&&f.nh==d)return e}return-1};
g.ce=function(a,b,c,d,e){if(d&&d.once)return g.be(a,b,c,d,e);if(g.Da(b)){for(var f=0;f<b.length;f++)g.ce(a,b[f],c,d,e);return null}c=g.de(c);return g.Xd(a)?a.O(b,c,g.Ia(d)?!!d.capture:!!d,e):ee(a,b,c,!1,d,e)};
ee=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ia(e)?!!e.capture:!!e,l=g.fe(a);l||(a[ge]=l=new g.Zd(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=saa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)taa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(he(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ie++;return c};
saa=function(){var a=uaa,b=je?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.be=function(a,b,c,d,e){if(g.Da(b)){for(var f=0;f<b.length;f++)g.be(a,b[f],c,d,e);return null}c=g.de(c);return g.Xd(a)?a.He(b,c,g.Ia(d)?!!d.capture:!!d,e):ee(a,b,c,!0,d,e)};
g.ke=function(a,b,c,d,e){if(g.Da(b))for(var f=0;f<b.length;f++)g.ke(a,b[f],c,d,e);else d=g.Ia(d)?!!d.capture:!!d,c=g.de(c),g.Xd(a)?a.Va(b,c,d,e):a&&(a=g.fe(a))&&(b=a.ff(b,c,d,e))&&g.le(b)};
g.le=function(a){if("number"===typeof a||!a||a.zg)return!1;var b=a.src;if(g.Xd(b))return $d(b.wd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(he(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ie--;(c=g.fe(b))?($d(c,a),0==c.C&&(c.src=null,b[ge]=null)):Yd(a);return!0};
he=function(a){return a in me?me[a]:me[a]="on"+a};
oe=function(a,b,c,d){var e=!0;if(a=g.fe(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.zg&&(f=ne(f,d),e=e&&!1!==f)}return e};
ne=function(a,b){var c=a.listener,d=a.nh||a.src;a.ai&&g.le(a);return c.call(d,b)};
uaa=function(a,b){if(a.zg)return!0;if(!je){var c=b||g.u("window.event"),d=new g.Vd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=oe(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=oe(c[k],f,!1,d),e=e&&l}return e}return ne(a,new g.Vd(b,
this))};
g.fe=function(a){a=a[ge];return a instanceof g.Zd?a:null};
g.de=function(a){if(g.Ha(a))return a;a[pe]||(a[pe]=function(b){return a.handleEvent(b)});
return a[pe]};
g.qe=function(){g.C.call(this);this.wd=new g.Zd(this);this.Yt=this;this.cm=null};
re=function(a,b,c,d){b=a.wd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.zg&&k.capture==c){var l=k.listener,m=k.nh||k.src;k.ai&&$d(a.wd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.Tr};
se=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
te=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
ue=function(a){g.p.setTimeout(function(){throw a;},0)};
waa=function(){var a=g.p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Ub("Presto")&&(a=function(){var e=g.gd("IFRAME");e.style.display="none";g.hc(e,g.pb(vaa));document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(g.bc(g.ve));e.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.v)(function(m){if(("*"==l||m.origin==
l)&&m.data==k)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&!g.Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.An;c.An=null;e()}};
return function(e){d.next={An:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in g.gd("SCRIPT")?function(e){var f=g.gd("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){g.p.setTimeout(e,0)}};
we=function(){this.F=this.C=null};
xe=function(){this.next=this.scope=this.lc=null};
Be=function(a,b){ye||xaa();ze||(ye(),ze=!0);Ae.add(a,b)};
xaa=function(){if(g.p.Promise&&g.p.Promise.resolve){var a=g.p.Promise.resolve(void 0);ye=function(){a.then(Ce)}}else ye=function(){var b=Ce;
!g.Ha(g.p.setImmediate)||g.p.Window&&g.p.Window.prototype&&!g.Ub("Edge")&&g.p.Window.prototype.setImmediate==g.p.setImmediate?(De||(De=waa()),De(b)):g.p.setImmediate(b)}};
Ce=function(){for(var a;a=Ae.remove();){try{a.lc.call(a.scope)}catch(b){ue(b)}te(Ee,a)}ze=!1};
g.Fe=function(a){a.prototype.$goog_Thenable=!0};
g.Ge=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Ie=function(a,b){this.C=0;this.M=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.Aa)try{var c=this;a.call(b,function(d){g.He(c,2,d)},function(d){g.He(c,3,d)})}catch(d){g.He(this,3,d)}};
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
Me=function(a,b,c,d){if(a instanceof g.Ie)return Ve(a,Le(b||g.Aa,c||null,d)),!0;if(g.Ge(a))return a.then(b,c,d),!0;if(g.Ia(a))try{var e=a.then;if(g.Ha(e))return zaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
zaa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function k(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Ue=function(a){a.L||(a.L=!0,Be(a.J,a))};
Se=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Te=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Xe(b,c,d);else try{b.D?b.F.call(b.context):Xe(b,c,d)}catch(e){Ze.call(null,e)}te(Ke,b)};
Xe=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
yaa=function(a,b){a.H=!0;Be(function(){a.H&&Ze.call(null,b)})};
g.We=function(a){g.La.call(this,a)};
g.$e=function(a,b,c){if(g.Ha(a))c&&(a=(0,g.v)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.v)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.p.setTimeout(a,b||0)};
g.af=function(a){g.p.clearTimeout(a)};
g.bf=function(a,b,c){g.C.call(this);this.C=a;this.D=b||0;this.F=c;this.Qb=(0,g.v)(this.vo,this)};
Aaa=function(){this.F=-1};
cf=function(){this.F=64;this.C=[];this.L=[];this.M=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
df=function(a,b,c){c||(c=0);var d=a.M;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):
(f=c^k^l,q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.ef=function(a){if(a.classList)return a.classList;a=a.className;return"string"===typeof a&&a.match(/\S+/g)||[]};
g.D=function(a,b){return a.classList?a.classList.contains(b):g.Ua(g.ef(a),b)};
g.ff=function(){};
hf=function(a){if(a instanceof g.ff)return a;if("function"==typeof a.dd)return a.dd(!1);if(g.Ga(a)){var b=0,c=new g.ff;c.next=function(){for(;;){if(b>=a.length)throw g.gf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.jf=function(a,b,c){if(g.Ga(a))try{(0,g.A)(a,b,c)}catch(d){if(d!==g.gf)throw d;}else{a=hf(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.gf)throw d;}}};
Baa=function(a){if(g.Ga(a))return g.Ya(a);a=hf(a);var b=[];g.jf(a,function(c){b.push(c)});
return b};
g.lf=function(a,b){this.F={};this.C=[];this.Pe=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.kf(this,a)};
Caa=function(a,b){return a===b};
g.nf=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.mf(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.mf(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.kf=function(a,b){if(b instanceof g.lf)for(var c=b.Ic(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.mf=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.pf=function(a){var b=[];of(new Daa,a,b);return b.join("")};
Daa=function(){};
of=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.Da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),of(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),qf(d,c),c.push(":"),of(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":qf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
qf=function(a,b){b.push('"',a.replace(Eaa,function(c){var d=rf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),rf[c]=d);return d}),'"')};
g.sf=function(a){g.C.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.tf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Sa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.sd(b)}};
Faa=function(a,b,c){Be(function(){a.apply(b,c)})};
g.uf=function(a){this.C=a};
vf=function(a){this.C=a};
wf=function(a){this.data=a};
xf=function(a){return void 0===a||a instanceof wf?a:new wf(a)};
g.yf=function(a){this.C=a};
g.zf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Qc)()||!!b&&b>(0,g.Qc)()};
Gaa=function(){};
Af=function(){};
g.Bf=function(a){this.C=a};
g.Cf=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Ef=function(a,b){this.F=a;this.C=null;if(g.E&&!g.xc(9)){Df||(Df=new g.lf);this.C=Df.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),Df.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
Ff=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Haa[b]})};
Gf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
Hf=function(a){return a.C.XMLDocument.documentElement};
If=function(a,b){this.F=a;this.C=b+"::"};
g.Jf=function(a){var b=new g.Cf;return b.isAvailable()?a?new If(b,a):b:null};
Kf=function(){this.C=[];this.F=-1};
Iaa=function(a){-1==a.F&&(a.F=(0,g.Lf)(a.C,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.F};
g.Mf=function(){var a=new Kf;g.p.SVGElement&&g.p.document.createElementNS&&a.set(0);var b=naa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.p.crypto&&g.p.crypto.subtle&&a.set(3);g.p.TextDecoder&&g.p.TextEncoder&&a.set(4);return Iaa(a)};
g.Nf=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
Of=function(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])};
g.Qf=function(a){Of(g.Pf,arguments)};
Rf=function(a,b){var c=g.F(a,void 0);c?c.push(b):g.Qf(a,[b])};
g.F=function(a,b){return a in g.Pf?g.Pf[a]:b};
Sf=function(a){var b=g.Pf.EXPERIMENT_FLAGS;return b?b[a]:void 0};
Uf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Tf(b)}}:a};
g.Tf=function(a,b,c,d,e){var f=g.u("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.F("ERRORS",[]),f.push([a,b,c,d,e]),g.Qf("ERRORS",f))};
g.Vf=function(a){g.Tf(a,"WARNING",void 0,void 0,void 0)};
Jaa=function(a,b,c,d,e){var f=!1,k=Sf("log_window_onerror_fraction");if(k&&Math.random()<k)f=!0;else{k=document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:(g.va(a)?k=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,k=a.message,b=a.filename,c=a.lineno,d=a.colno):(k="Unknown error",b="Unknown file",c=0),a=Error(k),a.name="UnhandledWindowError",e=a,e.message=k,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=
d),f?g.Tf(e):g.Vf(e))};
g.G=function(a,b){return a?a.dataset?a.dataset[g.Wf(b)]:a.getAttribute("data-"+b):null};
g.Wf=function(a){return Xf[a]||(Xf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
g.Yf=function(a,b){g.Ha(a)&&(a=Uf(a));return window.setTimeout(a,b)};
g.Zf=function(a,b){g.Ha(a)&&(a=Uf(a));return window.setInterval(a,b)};
g.$f=function(a){window.clearTimeout(a)};
g.ag=function(a){window.clearInterval(a)};
g.gg=function(a,b,c){var d=bg();if(d){var e=d.subscribe(a,function(){var f=arguments;var k=function(){cg[e]&&b.apply(c||window,f)};
try{dg[a]?k():g.Yf(k,0)}catch(l){g.Tf(l)}},c);
cg[e]=!0;eg[a]||(eg[a]=[]);eg[a].push(e);return e}return 0};
g.hg=function(a){var b=bg();b&&(g.wa(a)?a=[a]:g.va(a)&&(a=[parseInt(a,10)]),(0,g.A)(a,function(c){b.unsubscribeByKey(c);delete cg[c]}))};
g.I=function(a,b){var c=bg();return c?c.publish.apply(c,arguments):!1};
g.ig=function(a,b){dg[a]=!0;var c=bg();c=c?c.publish.apply(c,arguments):!1;dg[a]=!1;return c};
bg=function(){return g.u("ytPubsubPubsubInstance")};
g.kg=function(a,b){var c=g.jg(a);spf.script.load(a,c,b)};
g.lg=function(a){a=g.jg(a);spf.script.unload(a)};
g.jg=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Kaa,""),b=b.replace(Laa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.mg=function(){this.F=!1;this.C=null};
ng=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.Vf(d)}c&&c(b)};
g.og=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
Maa=function(){};
g.qg=function(a,b){return pg(a,0,b)};
g.rg=function(a,b){return pg(a,1,b)};
g.tg=function(a){for(var b=0,c=a.length;b<c;b++)g.sg(a[b])};
ug=function(){};
g.vg=function(){return!!g.u("yt.scheduler.instance")};
pg=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.Yf(a,c||0)};
g.sg=function(a){if(!isNaN(a)){var b=g.u("yt.scheduler.instance.cancelJob");b?b(a):g.$f(a)}};
Naa=function(){return parseInt(g.F("DCLKSTAT",0),10)};
g.xg=function(a){a=wg(a);return g.va(a)&&"false"===a?!1:!!a};
g.yg=function(a,b){var c=wg(a);return void 0===c&&void 0!==b?b:Number(c||0)};
zg=function(a){a=wg(a);return void 0!==a?String(a):""};
wg=function(a){var b=g.F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.F("EXPERIMENT_FLAGS",{})[a]};
Oaa=function(){return g.Ag.Rd()};
Paa=function(a){a=void 0===a?{}:a;return g.og(g.Ag,a)};
g.Bg=function(a){var b=[];g.ab(a,function(c,d){var e=g.jc(d),f;g.Da(c)?f=c:f=[c];(0,g.A)(f,function(k){""==k?b.push(e):b.push(e+"="+g.jc(k))})});
return b.join("&")};
g.Cg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=g.kc(e[0]||""),k=g.kc(e[1]||"");f in b?g.Da(b[f])?g.Za(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(m){var l=Error("Error decoding URL component");l.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?g.Vf(l):g.Tf(l)}}return b};
g.Eg=function(a,b){return g.Dg(a,b||{},!0)};
g.Dg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Cg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return g.xd(a,e)+d};
Ig=function(a){var b=g.Fg;a=void 0===a?g.u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.Gg(b),g.Hg(b));b.ca_type="image";a&&(b.bid=a);return b};
g.Gg=function(a){var b={};b.dt=g.Jg;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Ld(b);return b};
g.Hg=function(a){var b=g.Nd(a.C),c=g.Md(a.C.top),d={};return d.bc=g.Mf(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Nf(a.F),d.wgl=!!g.Jd.WebGLRenderingContext,d};
Qaa=function(){if(!Kg)return null;var a=Kg();return"open"in a?a:null};
g.Mg=function(a){switch(g.Lg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Lg=function(a){return a&&"status"in a?a.status:-1};
Raa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.od(1,a),e=g.pd(a);d&&e?(d=c,c=a.match(g.nd),d=d.match(g.nd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.pd(c)==e&&(Number(g.od(4,c))||null)==(Number(g.od(4,a))||null):!0;d=g.xg("web_ajax_ignore_global_headers_if_set");for(var f in Ng)e=g.F(Ng[f]),!e||!c&&!Og(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Og(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(g.xg("pass_biscotti_id_in_header_ajax")||
g.xg("pass_biscotti_id_in_header_ajax_tv"))&&(c||Og(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=g.Bg(Ig(void 0)));return b};
Taa=function(a){var b=window.location.search,c=g.pd(a),d=g.md(g.od(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.Cg(b),f={};(0,g.A)(Saa,function(k){e[k]&&(f[k]=e[k])});
return g.Dg(a,f||{},!1)};
Og=function(a,b){var c=g.F("CORS_HEADER_WHITELIST")||{},d=g.pd(a);return d?(c=c[d])?g.Ua(c,b):!1:!0};
Uaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Qg(a,b);var d=Rg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&g.$f(f);var l=k.ok,m=function(q){q=q||{};var t=b.context||g.p;l?b.onSuccess&&b.onSuccess.call(t,q,k):b.onError&&b.onError.call(t,q,k);b.Xa&&b.Xa.call(t,q,k)};
"JSON"==(b.format||"JSON")&&(l||400<=k.status&&500>k.status)?k.json().then(m,function(){m(null)}):m(null)}});
b.Eq&&0<b.timeout&&(f=g.Yf(function(){e||(e=!0,g.$f(f),b.Eq.call(b.context||g.p))},b.timeout))}else g.J(a,b)};
g.J=function(a,b){var c=b.format||"JSON";a=Qg(a,b);var d=Rg(a,b),e=!1,f,k=Sg(a,function(l){if(!e){e=!0;f&&g.$f(f);var m=g.Mg(l),q=null,t=400<=l.status&&500>l.status,y=500<=l.status&&600>l.status;if(m||t||y)q=Vaa(c,l,b.lb);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};t=b.context||g.p;m?b.onSuccess&&b.onSuccess.call(t,l,q):b.onError&&b.onError.call(t,l,q);b.Xa&&b.Xa.call(t,l,q)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Oc&&0<b.timeout&&(f=g.Yf(function(){e||(e=!0,k.abort(),g.$f(f),b.Oc.call(b.context||g.p,k))},b.timeout));
return k};
Qg=function(a,b){b.xR&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.F("XSRF_FIELD_NAME",void 0),d=b.Ra;d&&(d[c]&&delete d[c],a=g.Eg(a,d));return a};
Rg=function(a,b){var c=g.F("XSRF_FIELD_NAME",void 0),d=g.F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.F("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.jv||g.pd(a)&&!b.withCredentials&&g.pd(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&g.va(e)&&(e=g.Cg(e),g.kb(e,f),e=b.Gr&&"JSON"==b.Gr?JSON.stringify(e):g.wd(e));f=e||f&&!g.db(f);!Tg&&f&&"POST"!=b.method&&(Tg=!0,g.Tf(Error("AJAX request with postData should use POST")));
return e};
Vaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ug(b):null)d={},(0,g.A)(b.getElementsByTagName("*"),function(e){d[e.tagName]=g.Vg(e)})}c&&Wg(d);
return d};
Wg=function(a){if(g.Ia(a))for(var b in a)"html_content"==b||g.rb(b,"_html")?a[b]=g.fc(a[b],null):Wg(a[b])};
Ug=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Vg=function(a){var b="";(0,g.A)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.Xg=function(a,b){b.method="POST";b.ia||(b.ia={});return g.J(a,b)};
Sg=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Uf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Qaa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.xg("debug_forward_web_query_parameters")&&(a=Taa(a));m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Raa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m};
Yg=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.Zg=function(a){var b=new Yg;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.$g=function(a){var b=new Yg;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.bh=function(a){var b=a.__yt_uid_key;b||(b=ah(),a.__yt_uid_key=b);return b};
g.ch=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Waa+"VisibilityState";if(b in a)return a[b]};
g.dh=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Xaa||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY};
eh=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.fh=function(a){g.ua(a.C)||eh(a);return a.C};
g.gh=function(a){g.ua(a.F)||eh(a);return a.F};
g.kh=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.cb(hh,function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,k=g.Ia(e[4])&&g.Ia(d)&&g.gb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.K=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.kh(a,b,c,d);if(e)return e;e=++lh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(l){l=new g.dh(l);if(!g.kd(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new g.dh(l);
l.currentTarget=a;return c.call(a,l)};
k=Uf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),mh()||"boolean"==typeof d?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);hh[e]=[a,b,c,k,d];return e};
g.nh=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.A)(a,function(b){if(b in hh){var c=hh[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?mh()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete hh[b]}}))};
g.oh=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.K(a,b,function(){g.nh(e);c.apply(a,arguments)},d)};
g.ph=function(a){for(var b in hh)hh[b][0]==a&&g.nh(b)};
g.qh=function(a){this.Qb=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.K(window,"mousemove",(0,g.v)(this.Y,this));this.N=g.Zf((0,g.v)(this.M,this),25)};
rh=function(){g.C.call(this);this.C=[]};
sh=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.hb(b);this.assets=a.assets||{};this.attrs=a.attrs||g.hb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.th=function(a){a instanceof sh||(a=new sh(a));return a};
g.wh=function(a,b,c,d,e,f){f=f||{};f.name=c||g.F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=uh||(g.xg("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+
e.stack),c=c.join("\n"),window.console.log(c,e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=g.Lc(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&g.Ha(window.yterr)&&window.yterr(a),vh[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Ra:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},ia:{url:g.F("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.ia.stack=e);for(var k in f)b.ia["client."+k]=f[k];if(k=g.F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ia[l]=k[l];g.J(g.F("ECATCHER_REPORT_HOST","")+"/error_204",b);vh[a.message]=!0;uh++}};
g.Ch=function(){g.$f(g.xh);g.$f(g.yh);g.yh=0;if(!g.db(g.zh)){for(var a in g.zh){var b=Ah[a];b&&(Yaa(a,b),delete g.zh[a])}g.db(g.zh)||g.Bh()}};
Zaa=function(){var a=[];for(e in g.zh){var b=Dh[e]||{};Dh[e]=b;for(var c in g.zh[e]){var d=Eh(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round((0,g.Fh)());for(var f in Dh)b=Dh[f],b.eventType=f in Gh?Gh[f]:"UNKNOWN_TYPE",c=Ih[f],b.metricIntervalMs=c?e-c:e-g.Jh,a.push(b),Ih[f]=e,delete Dh[f];return a};
g.Bh=function(){g.xg("web_gel_timeout_cap")&&!g.yh&&(g.yh=g.Yf(g.Ch,6E4));g.$f(g.xh);var a=g.yg("web_gel_debounce_ms",1E4);g.xh=g.Yf(g.Ch,g.F("LOGGING_BATCH_TIMEOUT",g.Kh||a))};
Eh=function(a,b){b=void 0===b?"":b;g.zh[a]=g.zh[a]||{};g.zh[a][b]=g.zh[a][b]||[];return g.zh[a][b]};
Yaa=function(a,b){var c=$aa[a],d=Dh[a]||{};Dh[a]=d;var e=Math.round((0,g.Fh)());for(q in g.zh[a]){var f=g.ib({context:g.Lh(b.C)});f[c]=Eh(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;var k=Mh[q];if(k)a:{var l=q;if(k.videoId)var m="VIDEO";else if(k.playlistId)m="PLAYLIST";else break a;f.credentialTransferTokenTargetId=k;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Mh[q];f.requestTimeMs=
e;if(k=g.F("EVENT_ID",void 0))m=(g.F("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>aba&&(m=1),g.Qf("BATCH_CLIENT_COUNTER",m),k={serializedEventId:k,clientCounter:m},f.serializedClientEventId=k,Nh&&Oh&&g.xg("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Nh,roundtripMs:Oh}),Nh=k,Oh=0;g.Ph(b,a,f,{retry:bba.has(a),onSuccess:(0,g.v)(cba,this,(0,g.Fh)())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*
q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e};
cba=function(a){Oh=Math.round((0,g.Fh)()-a)};
g.Sh=function(a){var b=void 0===a?{}:a;a=void 0===b.wy?!0:b.wy;var c=void 0===b.cG?!1:b.cG,d=void 0===b.fH?!1:b.fH;null==g.u("_lact",window)&&(b=parseInt(g.F("LACT"),10),b=isFinite(b)?(0,g.Qc)()-Math.max(b,0):-1,g.r("_lact",b,window),g.r("_fact",b,window),-1==b&&g.Qh(),g.K(document,"keydown",function(e){return g.Qh(d,e)}),g.K(document,"keyup",function(e){return g.Qh(d,e)}),g.K(document,"mousedown",function(e){return g.Qh(d,e)}),g.K(document,"mouseup",function(e){return g.Qh(d,e)}),a&&(c?g.K(window,
"touchmove",function(e){Rh("touchmove",200,d,e)},{passive:!0}):(g.K(window,"resize",function(e){Rh("resize",200,d,e)}),g.K(window,"scroll",function(e){Rh("scroll",200,d,e)}))),new g.qh(function(){Rh("mouse",100)}),g.K(document,"touchstart",function(e){return g.Qh(d,e)},{passive:!0}),g.K(document,"touchend",function(e){return g.Qh(d,e)},{passive:!0}))};
Rh=function(a,b,c,d){Th[a]||(Th[a]=!0,g.rg(function(){g.Qh(c,d);Th[a]=!1},b))};
g.Qh=function(a,b){if(!dba(a,b)){null==g.u("_lact",window)&&g.Sh();var c=(0,g.Qc)();g.r("_lact",c,window);-1==g.u("_fact",window)&&g.r("_fact",c,window);(c=g.u("ytglobal.ytUtilActivityCallback_"))&&c()}};
dba=function(a,b){return a&&b&&b.path?!!g.Sa(b.path,function(c){return"YTM-CUSTOM-CONTROL"==c.tagName}):!1};
g.Uh=function(){var a=g.u("_lact",window);return null==a?-1:Math.max((0,g.Qc)()-a,0)};
g.Wh=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.Fh)());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.Uh())};g.xg("log_sequence_info_on_gel_web")&&d.Le&&(a=e.context,b=d.Le,Vh[b]=b in Vh?Vh[b]+1:0,a.sequence={index:Vh[b],groupKey:b},d.bv&&delete Vh[d.Le]);(d=d.Zf)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Mh[d.token]=a,d=Eh("log_event",d.token)):d=Eh("log_event");d.push(e);c&&(Ah.log_event=new c);d.length>=
(g.yg("web_logging_max_batch")||100)?g.Ch():g.Bh()};
g.Lh=function(a){a={client:{hl:a.By,gl:a.Ay,clientName:a.zy,clientVersion:a.innertubeContextClientVersion,configInfo:a.yy}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.F("DELEGATED_SESSION_ID")&&!g.xg("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.F("DELEGATED_SESSION_ID")});return a};
Xh=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.rR||g.F("AUTHORIZATION"))||(a?b="Bearer "+g.u("gapi.auth.getToken")().pR:b=Qd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.F("SESSION_INDEX",0),g.xg("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.F("DELEGATED_SESSION_ID")));return d};
Yh=function(a){a=Object.assign({},a);delete a.Authorization;var b=Qd();if(b){var c=new cf;c.update(g.F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Ac(c.digest(),3)}return a};
g.$h=function(a,b,c,d){g.Zh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.ai=function(a,b,c){g.Zh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.bi=function(a){var b;(b=g.Jf(a))||(a=new Ef(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.yf(a):null;this.F=document.domain||window.location.hostname};
eba=function(a,b,c,d){if(d)return null;d=ci.get("nextId",!0)||1;var e=ci.get("requests",!0)||{};e[d]={method:a,request:b,authState:Yh(c),requestTime:Math.round((0,g.Fh)())};ci.set("nextId",d+1,86400,!0);ci.set("requests",e,86400,!0);return d};
di=function(a){var b=ci.get("requests",!0)||{};delete b[a];ci.set("requests",b,86400,!0)};
ei=function(a){var b=ci.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round((0,g.Fh)())-d.requestTime)){var e=d.authState,f=Yh(Xh(!1));g.gb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round((0,g.Fh)())),g.Ph(a,d.method,e,{}));delete b[c]}}ci.set("requests",b,86400,!0)}};
g.fi=function(a){var b=this;this.C=a||{innertubeApiKey:g.F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.F("INNERTUBE_API_VERSION",void 0),yy:g.F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),zy:g.F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),By:g.F("INNERTUBE_CONTEXT_HL",void 0),Ay:g.F("INNERTUBE_CONTEXT_GL",void 0),Cy:g.F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Dy:!!g.F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.qg(function(){ei(b)},
5E3)};
g.Ph=function(a,b,c,d){!g.F("VISITOR_DATA")&&.01>Math.random()&&g.Tf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,Gr:"JSON",Oc:function(){d.Oc()},
Eq:d.Oc,onSuccess:function(B,H){if(d.onSuccess)d.onSuccess(H)},
nj:function(B){if(d.onSuccess)d.onSuccess(B)},
onError:function(B,H){if(d.onError)d.onError(H)},
Dq:function(B){if(d.onError)d.onError(B)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.Cy;k&&(f=k);k=a.C.Dy||!1;var l=Xh(k,f,d);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=g.Eg(""+f+("/youtubei/"+a.C.innertubeApiVersion+"/"+b),{alt:"json",key:a.C.innertubeApiKey}),q;if(d.retry&&g.xg("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(q=eba(b,c,l,k))){var t=e.onSuccess,y=e.nj;e.onSuccess=function(B,H){di(q);t(B,H)};
c.nj=function(B,H){di(q);y(B,H)}}try{g.xg("use_fetch_for_op_xhr")?Uaa(m,e):g.Xg(m,e)}catch(B){if("InvalidAccessError"==B)q&&(di(q),q=0),g.Tf(Error("An extension is blocking network request."),"WARNING");
else throw B;}q&&g.qg(function(){ei(a)},5E3)};
g.gi=function(a,b,c){c=void 0===c?{}:c;var d=g.fi;g.F("ytLoggingEventsDefaultDisabled",!1)&&g.fi==g.fi&&(d=null);g.Wh(a,b,d,c)};
g.hi=function(){g.xg("log_web_meta")&&Zaa().forEach(function(a){g.gi("delayedEventMetricCaptured",a)})};
g.ii=function(a){this.C=a};
g.ji=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.ji(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.ki=function(a,b){this.version=a;this.args=b};
g.li=function(a,b){this.topic=a;this.C=b};
g.ni=function(a,b){var c=mi();c&&c.publish.call(c,a.toString(),a,b)};
g.ri=function(a,b,c){var d=mi();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,k){var l=g.u("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(oi[e])try{if(k&&a instanceof g.li&&a!=f)try{var m=a.C,q=k;if(!q.args||!q.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.Pe){var t=new m;m.Pe=t.version}var y=m.Pe}catch(B){}if(!y||q.version!=y)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=Reflect.construct(m,
g.Ya(q.args))}catch(B){throw B.message="yt.pubsub2.Data.deserialize(): "+B.message,B;}}catch(B){throw B.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+B.message,B;}b.call(c||window,k)}catch(B){g.Tf(B)}},pi[a.toString()]?g.vg()?g.rg(l):g.Yf(l,0):l())});
oi[e]=!0;qi[a.toString()]||(qi[a.toString()]=[]);qi[a.toString()].push(e);return e};
hba=function(){var a=fba,b=g.ri(gba,function(c){a.apply(void 0,arguments);g.si(b)},void 0);
return b};
g.si=function(a){var b=mi();b&&(g.wa(a)&&(a=[a]),(0,g.A)(a,function(c){b.unsubscribeByKey(c);delete oi[c]}))};
mi=function(){return g.u("ytPubsub2Pubsub2Instance")};
ti=function(a){g.ki.call(this,1,arguments);this.csn=a};
g.wi=function(a,b,c){ui.push({SF:a,payload:b,options:c});vi||(vi=hba())};
fba=function(a){if(ui){for(var b=g.da(ui),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,g.Wh(c.SF,c.payload,null,c.options));ui.length=0}vi=0};
g.xi=function(a,b,c){(0,g.A)(b,function(d){var e=c;e=void 0===e?!1:e;d={csn:a,ve:g.ji(d),eventType:e?16:8};e={Zf:void 0,Le:a,bv:e};"UNDEFINED_CSN"==a?g.wi("visualElementHidden",d,e):g.Wh("visualElementHidden",d,g.fi,e)})};
zi=function(a,b){var c=Object.keys(a).join("");yi("info_"+c+"_"+b)||(a.clientActionNonce=b,g.gi("latencyActionInfo",a))};
yi=function(a){Ai[a]=Ai[a]||{count:0};var b=Ai[a];b.count++;b.time=(0,g.Fh)();Bi||(Bi=g.qg(iba,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;g.wh(c,b)}return!0}return!1};
iba=function(){var a=(0,g.Fh)(),b;for(b in Ai)6E4<a-Ai[b].time&&delete Ai[b];Bi=0};
Di=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Qc)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ci)for(a=1,b=0;b<Ci.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ci.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Ii=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Ei==a)return;Ei=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Uh()>b)&&"visible"==g.ch()){b=-1;g.Fi&&(b=Math.round((0,g.Fh)()-g.Fi));var c=String;var d=g.u("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Qc)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:Gi,index:String(Hi),lastEventDeltaMs:String(b),trigger:a};g.Wh("foregroundHeartbeat",
a,g.fi);g.r("_fact",-1,window);Hi++;g.Fi=(0,g.Fh)()}};
g.Ji=function(a){a&&g.Wh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Gi,clientScreenNonce:a},g.fi)};
Ni=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
Oi=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
Pi=function(a){return g.F(Oi(void 0===a?0:a),void 0)};
g.Qi=function(){var a=Pi(0),b;a?b=new g.ii({veType:a,youtubeData:void 0}):b=null;return b};
g.Ri=function(a){a=void 0===a?0:a;var b=g.F(Ni(a));b||0!=a||(g.xg("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=g.F("EVENT_ID"));return b?b:null};
g.Si=function(a,b,c){c=void 0===c?0:c;if(a!==g.F(Ni(c))||b!==g.F(Oi(c)))g.Qf(Ni(c),a),g.Qf(Oi(c),b),0==c&&(b=function(){setTimeout(function(){g.Ji(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
Ti=function(){var a=g.Qi(),b=g.Ri();b&&a&&g.xi(b,[a],!0)};
g.Ui=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Uf(d):null;this.H=e?Uf(e):null;this.G=[];this.C=this.F=0};
g.Vi=function(a){g.sg(a.F);a.F=g.rg((0,g.v)(a.init,a))};
g.Yi=function(a){a.name in Wi&&Xi(a.name);Wi[a.name]={reqs:[],disable:(0,g.v)(a.disable,a)};(0,g.A)(a.deps,function(b){if(!(b in Wi))throw Error("Module "+b+" required by "+a.name);Wi[b].reqs.push(a.name)});
a.enable()};
Xi=function(a){if(a in Wi){var b=Wi[a];(0,g.A)(b.reqs,function(c){Xi(c)});
try{b.disable()}catch(c){}delete Wi[a]}};
$i=function(a){Of(g.Zi,arguments)};
g.aj=function(a){return a in g.Zi};
bj=function(a){Of(g.Zi,arguments)};
g.cj=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Tb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Hb(g.Lb(a)),"about:invalid#zClosurez"===a?a="":(a=g.cc(g.ec(a)),a=g.jc(g.pf(a))),g.sb(a)||(a=g.dd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.jd(a).body.appendChild(a))):e?Sg(a,b,"POST",e,d):g.F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Sg(a,b,"GET","",d):jba(a,b)||kba(a,b))};
jba=function(a,b){if(!Sf("web_use_beacon_api_for_ad_click_server_pings"))return!1;var c=g.md(g.od(5,a));return c&&-1!=c.indexOf("/aclk")&&"1"===g.Ad(a,"ae")&&"1"===g.Ad(a,"act")?dj(a)?(b&&b(),!0):!1:!1};
dj=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
kba=function(a,b){var c=new Image,d=""+lba++;ej[d]=c;c.onload=c.onerror=function(){b&&ej[d]&&b();delete ej[d]};
c.src=a};
g.fj=function(a,b){a=a||"";var c=a.match(mba);spf.style.load(a,c?c[1]:"",b)};
ij=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!gj(a)||c.some(function(e){return!gj(e)}))throw Error("Only objects may be merged.");
c=g.da(c);for(d=c.next();!d.done;d=c.next())hj(a,d.value);return a};
hj=function(a,b){for(var c in b)if(gj(b[c])){if(c in a&&!gj(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});hj(a[c],b[c])}else if(jj(b[c])){if(c in a&&!jj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);kj(a[c],b[c])}else a[c]=b[c];return a};
kj=function(a,b){for(var c=g.da(b),d=c.next();!d.done;d=c.next())d=d.value,gj(d)?a.push(hj({},d)):jj(d)?a.push(kj([],d)):a.push(d);return a};
gj=function(a){return"object"===typeof a&&!Array.isArray(a)};
jj=function(a){return"object"===typeof a&&Array.isArray(a)};
g.lj=function(a,b,c){var d=void 0===d?!0:d;var e=g.F("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=g.pd(window.location.href);f&&e.push(f);f=g.pd(a);if(g.Ua(e,f)||!f&&g.qb(a,"/"))if(g.xg("autoescape_tempdata_url")&&(e=document.createElement("a"),g.gc(e,a),a=e.href),a&&(a=g.qd(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&(b.itct||b.ved)&&(b.csn=b.csn||g.Ri()),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+g.oc(a).toString(36),b=b?g.wd(b):"",g.$h(d,b,c||5))):(c="ST-"+g.oc(a).toString(36),b=b?g.wd(b):"",g.$h(c,
b,5))};
g.mj=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.ic(d.location,g.xd(a,b)+c)};
g.nj=function(a,b){b&&g.lj(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.mj(a)};
g.oj=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.F("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.lj(a,b);if(c)return!1;g.nj(a);return!0};
sj=function(a,b,c,d){g.C.call(this);var e=this;this.H=this.ab=a;this.ha=b;this.M=!1;this.api={};this.oa=this.N=null;this.Y=new g.sf;g.Td(this,this.Y);this.D={};this.la=this.Ka=this.F=this.sb=this.C=null;this.V=!1;this.G=this.J=null;this.mb={};this.Td=["onReady"];this.qb=null;this.wb=NaN;this.X={};this.L=d;pj(this);this.Uh("WATCH_LATER_VIDEO_ADDED",this.BD.bind(this));this.Uh("WATCH_LATER_VIDEO_REMOVED",this.CD.bind(this));this.Uh("onAdAnnounce",this.Xt.bind(this));this.Nb=new rh(this);g.Td(this,this.Nb);
this.aa=0;c?this.aa=g.Yf(function(){e.loadNewVideoConfig(c)},0):d&&(qj(this),rj(this))};
qj=function(a){var b;a.L?b=a.L.rootElementId:b=a.C.attrs.id;a.F=b||a.F;"video-player"==a.F&&(a.F=a.ha,a.C.attrs.id=a.ha);a.H.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F)};
tj=function(a){a.C&&!a.C.loaded&&(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
wj=function(a){var b=!0,c=uj(a);c&&a.C&&(a=vj(a),b=g.G(c,"version")==a);return b&&!!g.u("yt.player.Application.create")};
rj=function(a){if(!a.ob()&&!a.V){var b=wj(a);if(b&&"html5"==(uj(a)?"html5":null))a.la="html5",a.M||xj(a);else if(yj(a),a.la="html5",b&&a.G)a.ab.appendChild(a.G),xj(a);else{a.C&&(a.C.loaded=!0);var c=!1;a.J=function(){c=!0;var d=g.u("yt.player.Application.create"),e=a.C?a.C.clone():void 0;d(a.ab,e,a.L);xj(a)};
a.V=!0;b?a.J():(g.kg(vj(a),a.J),g.fj(a.L?a.L.cssUrl:a.C.assets.css),zj(a)&&!c&&g.r("yt.player.Application.create",null,void 0))}}};
uj=function(a){var b=g.z(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
xj=function(a){if(!a.ob()){var b=uj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&a.C&&b.isNotServable(a.C.args.video_id)||nba(a)):a.wb=g.Yf(function(){xj(a)},50)}};
nba=function(a){pj(a);a.M=!0;var b=uj(a);b.addEventListener&&(a.N=Aj(a,b,"addEventListener"));b.removeEventListener&&(a.oa=Aj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Aj(a,b,e))}for(var f in a.D)a.N(f,a.D[f]);tj(a);a.Ka&&a.Ka(a.api);a.Y.na("onReady",a.api)};
Aj=function(a,b,c){var d=b[c];return function(){try{return a.qb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.qb=e,g.Vf(e))}}};
pj=function(a){a.M=!1;if(a.oa)for(var b in a.D)a.oa(b,a.D[b]);for(var c in a.X)g.$f(parseInt(c,10));a.X={};a.N=null;a.oa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Uh.bind(a);a.api.removeEventListener=a.jG.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Hv.bind(a);a.api.getPlayerType=a.Nv.bind(a);a.api.getCurrentVideoConfig=a.Dv.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.xz.bind(a)};
Bj=function(a,b){var c=b;if("string"==typeof b){if(a.mb[b])return a.mb[b];c=function(){var d=g.u(b);d&&d.apply(g.p,arguments)};
a.mb[b]=c}return c?c:null};
oba=function(a,b){var c="ytPlayer"+b+a.ha;a.D[b]=c;g.p[c]=function(d){var e=g.Yf(function(){a.ob()||(a.Y.na(b,d),g.eb(a.X,String(e)))},0);
g.fb(a.X,String(e),!0)};
return c};
yj=function(a){a.cancel();pj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=uj(a);b&&(wj(a)||!zj(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.hd(a.ab)};
zj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
vj=function(a){return a.L?a.L.jsUrl:a.C.assets.js};
g.Ej=function(a,b){var c=void 0===c?!0:c;a=g.va(a)?g.Xc(a):a;var d=g.Cj+"_"+g.Ka(a),e=g.Dj[d];if(e&&c)return e.loadNewVideoConfig(b),e.api;e=new sj(a,d,b,void 0);g.Dj[d]=e;g.I("player-added",e.api);g.Rd(e,g.w(pba,e));return e.api};
pba=function(a){delete g.Dj[a.getId()]};
g.Fj=function(a){if(!a)return null;var b=g.Cj+"_"+g.Ka(a),c=g.Dj[b];c||(c=new sj(a,b),g.Dj[b]=c);return c.api};
g.Gj=function(a){return g.Fj(document.getElementById(a))};
g.Ij=function(a,b){var c={};c.key=a;c.value=b;return Hj().then(function(d){return new Promise(function(e,f){try{var k=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);k.onsuccess=function(){e()};
k.onerror=function(){f()}}catch(l){f(l)}})})};
g.Jj=function(a){return Hj().then(function(b){return new Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var f=e.result;c(f?f.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})},function(){return null})};
Hj=function(){return Kj?Promise.resolve(Kj):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Kj=d,a(Kj);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Hj()};
c.onupgradeneeded=qba})};
qba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
rba=function(a){if(Lj.getEntriesByType){var b=Lj.getEntriesByType("paint");if(b=g.Sa(b,function(d){return"first-paint"==d.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Ha(b)){b=b();var c=1E3*Math.min(b.requestTime||Infinity,b.startLoadTime||Infinity);c=Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
Mj=function(){var a=g.F("TIMING_TICK_EXPIRATION");a||(a={},g.Qf("TIMING_TICK_EXPIRATION",a));return a};
Nj=function(){var a=Mj(),b;for(b in a)g.sg(a[b]);g.Qf("TIMING_TICK_EXPIRATION",{})};
Oj=function(a,b){g.ki.call(this,1,arguments)};
Pj=function(a,b){g.ki.call(this,1,arguments)};
sba=function(a,b,c){if(g.xg("debug_csi_data")){var d=g.u("yt.timing.csiData");d||(d=[],g.r("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)a.hasOwnProperty(e)&&(d+="&"+e+"="+a[e]);a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;dj(a,f)||g.cj(a,void 0,void 0,void 0,f)}else g.cj(a);Qj(!0,c)};
tba=function(a){var b=Rj(a),c=b.pbr,d=b.vc;b=b.pbs;return!!(c&&d&&b&&c<d&&d<b&&Sj(a).yt_pvis)};
Tj=function(a){g.r("ytglobal.timingready_",a,void 0)};
Uj=function(a){return!!g.u("yt.timing."+(a||"")+"pingSent_")};
Qj=function(a,b){g.r("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Wj=function(a){return g.u("ytcsi."+(a||"")+"data_")||Vj(a)};
Sj=function(a){a=Wj(a);a.info||(a.info={});return a.info};
Rj=function(a){a=Wj(a);a.tick||(a.tick={});return a.tick};
Xj=function(a){var b=Wj(a).nonce;b||(b=Di(),Wj(a).nonce=b);return b};
Vj=function(a){var b={tick:{},info:{}};g.r("ytcsi."+(a||"")+"data_",b,void 0);return b};
Yj=function(a){a=Error.call(this,a);this.message=a.message;"stack"in a&&(this.stack=a.stack)};
ak=function(a){return Zj||g.xg("csi_on_gel")||!!Wj(a).useGel};
ck=function(a,b,c){var d=bk(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||(0,g.Fh)();return ak(c)?(c=Xj(c),"_start"===a?yi("baseline_"+c)||g.gi("latencyActionBaselined",{clientActionNonce:c},{timestamp:b}):yi("tick_"+a+"_"+c)||g.gi("latencyActionTicked",{tickName:a,clientActionNonce:c},{timestamp:b}),!0):!1};
fk=function(a,b,c){c=bk(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a in dk){c=dk[a];g.Ua(uba,c)&&(b=!!b);a in ek&&"string"===typeof b&&(b=ek[a]+b.toUpperCase());a=c.split(".");d=c={};for(var e=0;e<a.length-1;e++){var f=a[e];d[f]={};d=d[f]}d[a[a.length-1]]=b;return ij({},c)}g.Ua(vba,a)||(b=new Yj("Unknown label logged with GEL CSI"),b.params=a,g.Vf(b))};
bk=function(a){a=Wj(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel};
gk=function(a){a=bk(a);"gelInfos"in a||(a.gelInfos={});return a.gelInfos};
Aba=function(){Zj=!1;var a=g.F("TIMING_INFO",{});for(b in a)hk(b,a[b]);hk("is_nav",1);(a=g.Ri())&&hk("csn",a);(a=g.F("PREVIOUS_ACTION",void 0))&&hk("pa",a);var b=Sj();b.p=g.F("CLIENT_PROTOCOL")||"unknown";b.t=g.F("CLIENT_TRANSPORT")||"unknown";hk("yt_vis",wba());if("cold"==b.yt_lt){a=Lj.timing||{};a.navigationStart&&(g.ik("srt",a.responseStart),1!=b.prerender&&jk("n",a.navigationStart));b=rba(a);0<b&&g.ik("fpt",b);kk(a);Lj.getEntriesByType&&xba();a=[];if(document.querySelector&&Lj&&Lj.getEntriesByName)for(var c in lk)b=
lk[c],yba(c,b)&&a.push(b);a.length&&hk("rc",a.join(","))}ak(void 0)&&(c={actionType:zba[g.F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"},a=Xj(void 0),zi(c,a));c=Sj();b=Rj();if("cold"===c.yt_lt){a=bk();var d=a.gelTicks?a.gelTicks:a.gelTicks={};a=a.gelInfos?a.gelInfos:a.gelInfos={};if(ak()){for(var e in b)g.qb(e,"_")||"tick_"+e in d||ck(e,b[e]);e=gk();b=Xj();d={};for(var f in c)if(!("info_"+f in a)){var k=fk(f,c[f]);k&&(ij(e,k),ij(d,k))}zi(d,b)}}Tj(!0);g.mk(!1)};
nk=function(){Vj(void 0);Bba();Qj(!1,void 0);g.F("TIMING_ACTION")&&g.Qf("PREVIOUS_ACTION",g.F("TIMING_ACTION"));g.Qf("TIMING_ACTION","")};
g.ik=function(a,b,c){var d=Rj(c);if(g.xg("use_first_tick")&&ok(a,c))return d[a];b||"_"==a[0]||pk(a,c);var e=b||(0,g.Fh)();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=Mj();var f=e[a];f&&(g.sg(f),e[a]=0);ck(a,b,c)||g.mk(!1,c);return d[a]};
pk=function(a,b){Lj.mark&&(g.qb(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Lj.mark(a))};
jk=function(a,b){hk("yt_sts",a,void 0);g.ik("_start",b,void 0)};
ok=function(a,b){var c=Rj(b);return a in c};
hk=function(a,b,c){Sj(c)[a]=b;ak(c)&&(a=fk(a,b,c))&&ak(c)&&(ij(gk(c),a),c=Xj(c),zi(a,c))};
qk=function(a){var b=Rj(a);if(b.aft)return b.aft;a=g.F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
kk=function(a){g.ik("nreqs",a.requestStart,void 0);g.ik("nress",a.responseStart,void 0);g.ik("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.ik("nrs",a.redirectStart,void 0),g.ik("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.ik("ndnss",a.domainLookupStart,void 0),g.ik("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.ik("ntcps",a.connectStart,void 0),g.ik("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.ik("nstcps",a.secureConnectionStart,void 0),g.ik("ntcpe",a.connectEnd,void 0))};
g.mk=function(a,b){if(!Uj(b)){var c=g.F((b||"")+"TIMING_ACTION",void 0),d=Rj(b);if(g.u("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=qk(b)))if(rk||(g.ni(Cba,new Oj(Math.round(c-d._start),b)),rk=!0),a||b)sk(b);else{c=!0;var e=g.F("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&sk(b)}}};
wba=function(){switch(g.ch()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
sk=function(a){Nj();if(!ak(a)){var b=Rj(a),c=Sj(a),d=b._start;for(k in b)if(g.qb(k,"_")&&g.Da(b[k])){var e=k.slice(1);if(e in Dba){var f=(0,g.tk)(b[k],function(t){return Math.round(t-d)});
c["all_"+e]=f.join()}delete b[k]}f=g.F("CSI_SERVICE_NAME","youtube");var k={v:2,s:f,action:g.F((a||"")+"TIMING_ACTION",void 0)};e=hk.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var l=window.location.protocol+g.u("ytplayer.config.assets.js");(l=Lj.getEntriesByName?Lj.getEntriesByName(l)[0]:null)?c.h5jse=Math.round(c.h5jse-l.responseEnd):delete c.h5jse}b.aft=qk(a);tba(a)&&"youtube"==f&&(hk("yt_lt","hot_bg",a),f=b.vc,l=b.pbs,delete b.aft,c.aft=Math.round(l-f));for(var m in c)"_"!=m.charAt(0)&&(k[m]=
c[m]);b.ps=(0,g.Fh)();m={};f=[];for(var q in b)"_"!=q.charAt(0)&&(l=Math.round(b[q]-d),m[q]=l,f.push(q+"."+l));k.rt=f.join(",");(b=g.u("ytdebug.logTiming"))&&b(k,m);sba(k,!!c.ap,a);g.ni(Eba,new Pj(m.aft+(e||0),a))}};
uk=function(a){if(!ak(void 0)&&!Uj(void 0)){var b=g.F("CSI_SERVICE_NAME","youtube");g.F("TIMING_ACTION",void 0)&&b&&(g.ik("aa",void 0,void 0),hk("ap",1,void 0),hk("yt_fss",a,void 0),sk(void 0))}};
vk=function(a){return Math.round(Lj.timing.navigationStart+a)};
xba=function(){var a=window.location.protocol,b=Lj.getEntriesByType("resource");b=(0,g.wk)(b,function(c){return 0==c.name.indexOf(a+"//web.archive.org/web/20191001000120/https://fonts.gstatic.com/s/")});
(b=(0,g.Lf)(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.ik("wffs",vk(b.startTime)),g.ik("wffe",vk(b.responseEnd)))};
yba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);g.za()&&c.setAttribute("nonce",g.za());return d?(c=Lj.getEntriesByName(d))&&c[0]&&(c=c[0],d=Lj.timing.navigationStart,g.ik("rsf_"+b,d+Math.round(c.fetchStart)),g.ik("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(d=Sj(void 0),e=gk(void 0),"rc"in d||"rc"in e||hk("rc",""),0===c.transferSize))?
!0:!1:!1};
Kba=function(){xk++;var a=g.ad(),b=new g.Dd(0,0,a.width,a.height);hk("vph",a.height);hk("vpw",a.width);g.ik("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;yk.start();for(var f=0;f<c;f++){var k=a[f];if(zk(k,b)){var l=Fba(k);l.then(Gba);d.push(l);Ak.push(l);k.loadTime||(e=!1)}}e&&hk("yt_eil",1);g.ik("vpcc");b=g.Oe(d).then(Hba);g.Qe(b,Iba);b.then(Jba);Ak.push(b);return b};
Jba=function(){yk.stop()};
Iba=function(){g.ik("vpr")};
zk=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.bh(c);if(e in Bk)return!0;if(e in Ck)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Ck[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Ck[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Bk[d[c]]=!0;return!0};
Hba=function(a){var b=g.ad();b=new g.Dd(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;zk(a[d].vy,b)&&c<f&&(c=f)}return c};
Fba=function(a){var b=xk;return new g.Ie(function(c,d){var e={vy:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){xk!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},Ek.push(a))})};
Gba=function(a){yk.start();a=a.time;Fk<a&&(Fk=a,g.ik("lim",a))};
Lba=function(){g.ik("vptl",Fk);g.ik("vpl",Fk)};
Mba=function(){Ak.forEach(function(a){a.cancel()});
Fk=Ak.length=0;Bk={};Ck={};Ek.forEach(function(a){a.slt=void 0});
Ek.length=0};
g.Gk=function(a,b){g.cj("/gen_204?"+a,b)};
Nba=function(a){if(null==a)return[];var b=[];g.xg("ima_prevent_mpu_queries_on_cached_playback")&&0>Hk.indexOf("ad3_module")&&Hk.push("ad3_module");Hk.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Ik=function(){return g.D(g.z("page-container"),"remote-connected")};
Oba=function(){Jk=g.Zf(Kk,5E3);var a=g.Lk();a?(a.addEventListener("onReady",Kk),a.addEventListener("onStateChange",Kk)):Mk("unable to init PP monitor")};
Ok=function(a){for(var b in g.Dj){var c=g.Dj[b];c&&c.cancel()}if(a=a||null)Nk="",g.Ej("player-api",a),a=g.th(a),a.loaded=!0;Kk();g.r("ytplayer.config",a,void 0)};
g.Lk=function(){return g.Gj("player-api")};
Kk=function(){var a=g.Lk();if(a){var b=g.z("player");b=!b||g.D(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.F("PAGE_NAME"),e=g.Ik();!c||d||e||(Mk("PP playing off watch (paused)"),a.pauseVideo());b&&d?Mk("PP off-screen on watch"):b||d||Mk("PP !off-screen off watch")}};
Mk=function(a){var b=g.F("PAGE_NAME");b&&(Error(a).params=[b,Nk,g.u("_spf_state.nav-counter")],g.r("yt.www.persistentplayer.issue",a,void 0),g.Tf(Error(a),"WARNING"))};
Qk=function(){g.ik("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){g.ik("cpt");g.I("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(g.ik("cpt"),g.I("on_cpt_tick",(new Date).getTime())):setTimeout(function(){g.ik("cpt");
g.I("on_cpt_tick",(new Date).getTime())},0);
Pba();g.F("CSI_VIEWPORT")&&(Pk=Kba(),Pk.then(function(a){g.ik("vpl",a);Pk=null},function(){}))};
Pba=function(){Rk("init");var a=g.F("PAGE_NAME",void 0);a&&Rk("init-"+a)};
Rk=function(a){g.vg()?Sk.push(g.rg(g.w(g.ig,a),0)):g.I(a)};
Tk=function(){g.tg(Sk);Sk.length=0;Mba();Pk&&(Pk.cancel(),Pk=null);var a=g.F("PAGE_NAME",void 0);a&&g.ig("dispose-"+a);g.ig("dispose")};
Qba=function(){Qk()};
Rba=function(){g.F("TIMING_REPORT_ON_UNLOAD")&&g.mk(!0);uk("u");g.Ii("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Ti();g.hi();g.Ch();Tk();g.ig("pageunload")};
Uk=function(){g.Qh()};
Vk=function(){window.yt_spf_loaded_history=!0;g.Qh()};
$k=function(){Wk=1;Xk=Yk=0;g.F("TIMING_REPORT_ON_UNLOAD")&&g.mk(!0);g.xg("warm_load_nav_start_web")?(uk("n"),nk(),Tj(!1),g.Qf("TIMING_AFT_KEYS",[]),hk("yt_lt","warm"),g.Qf("TIMING_ACTION",""),g.Qf("TIMING_WAIT",[]),Nj(),jk("n")):(uk("n"),nk(),jk("n"));pk("nr");Zk(Sba);Ti();g.ig("navigate")};
cl=function(a){a=a.detail.part||a.detail.partial;g.ik("nc"+Yk);++Yk;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.ik("bc");else{var b=1==Wk;Wk=2;b?(Zk(Tba),al()):Zk(Uba);if(b=a&&a.data&&a.data.swfcfg)bl(a.timing,b.args),ok("cfg")||g.ik("cfg"),Ok(b)}};
dl=function(){g.ik("np"+Xk);++Xk};
el=function(a){a=a.detail.response;var b=1==Wk;Wk=3;b&&(Zk(Vba),al());if(b=a.data&&a.data.swfcfg)bl(a.timing,b.args),ok("cfg")||g.ik("cfg"),Ok(b)};
il=function(a){g.ik("nd");a=a.detail.response;g.fl=a.cacheKey;a=a.timing;var b=window._spf_state;g.gl.navigationCount=b&&b["nav-counter"]||0;g.xg("warm_load_nav_start_web")?g.ik("srt",a.responseStart):(jk("ne",a.responseStart),hk("srt",Math.max(0,a.responseStart-a.navigationStart)));hk("yt_lt",a.spfCached?"hot":"warm");g.ik("pfs",a.fetchStart);g.ik("pfrs",a.responseStart);"redirectStart"in a&&kk(a);Zk(hl);document.getElementById("content").style.height="";Qk();Wk=0};
jl=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Tf(a)};
kl=function(a){g.Gk(g.wd({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Xba=function(){Wba();window.yt_spf_loaded_history=!1};
Yba=function(){};
al=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Tk();a=g.F("PREVIOUS_ACTION");for(var b in g.Pf)delete g.Pf[b];g.Qf("PREVIOUS_ACTION",a);g.Qf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.r("ytplayer.config",null,void 0);(b=g.Lk())&&b.stopVideo?(b.stopVideo(),b.getLastError()&&((b=document.getElementById("movie_player"))&&b.stopVideo?(b.stopVideo(),Nk="recovered"):Nk="missing2")):Nk="missing";Kk()};
Zk=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.sg(ll);ll=g.rg(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.$f(ml);ml=g.Yf(function(){b.className=e},c)},0)};
Wba=function(){var a=hl[0]+50;g.$f(ml);ml=g.Yf(function(){var b=document.getElementById("progress");b&&b.parentNode.removeChild(b)},a)};
bl=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Nba(b));g.F("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Gk(g.wd(c)))};
ol=function(){return"granted"!=Notification.permission?Promise.resolve():nl().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
ql=function(){pl({type:"notifications_register",data:g.F("ID_TOKEN")})};
nl=function(){return navigator.serviceWorker.getRegistration(zg("service_worker_scope"))};
rl=function(a){return!(!a||!a.pushManager)};
pl=function(a){nl().then(function(b){if(!b||!b.active)return Promise.reject();b.active.postMessage(a);return Promise.resolve()})};
Zba=function(){if(!g.F("LOGGED_IN",void 0))return Promise.resolve(!1);var a=zg("service_worker_push_force_notification_prompt_tag");return a?g.Jj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
cca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?nl().then(rl):Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=ol().then(function(){pl({type:"notifications_check_registration",data:g.F("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return $ba(a)}).then(function(c){if(c)return aca(),bca().then(function(){})})})};
$ba=function(a){return g.F("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.F("LOGGED_IN",void 0)&&(void 0===a?0:a)?Zba().then(function(b){if(b)return!0;b=[dca(),eca()];g.F("LOGGED_IN",void 0)||b.push(fca());return Promise.all(b).then(function(c){return c.every(function(d){return d})})}):Promise.resolve(!1)};
fca=function(){var a=g.yg("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.Jj("WatchCount").then(function(b){return b>=a})};
bca=function(){var a=arguments;g.xg("service_worker_push_prompt_modal_enable")&&gca();return Notification.requestPermission().then(function(b){sl();var c=document.getElementById("ticker");c&&(c.className=c.classList.remove("show"));if("granted"==b)return ol().then(function(){g.Ij("NotificationsDisabled",!1);ql();return Promise.resolve(!0)});
"denied"==b&&ql();return Promise.resolve(!1)})["catch"](function(){sl();
return Promise.reject.apply(Promise,g.ea(a))})};
aca=function(){g.Jj("PromptCount").then(function(a){return g.Ij("PromptCount",a+1)}).then(function(){return g.Ij("PromptTime",(0,g.Qc)())}).then(function(){var a=zg("service_worker_push_force_notification_prompt_tag");
if(a)return g.Jj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.Ij("PromptTags",JSON.stringify(c))})})};
dca=function(){return-1==g.yg("service_worker_push_prompt_cap")?Promise.resolve(!0):g.Jj("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.yg("service_worker_push_prompt_cap"))})};
eca=function(){var a=g.yg("service_worker_push_prompt_delay_microseconds");return a?g.Jj("PromptTime").then(function(b){return Promise.resolve((0,g.Qc)()-a>(b||0))}):Promise.resolve(!0)};
hca=function(){tl||sl()};
ul=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
gca=function(){var a=g.z("yt-push-prompt-modal-bg");tl=g.xg("service_worker_push_prompt_modal_ignore_click");a?ul(a):(a=g.dd("div",{id:"yt-push-prompt-modal-bg"}),ul(a),document.body.appendChild(a),g.oh(document,"click",hca))};
sl=function(){var a=g.z("yt-push-prompt-modal-bg");a&&g.id(a)};
ica=function(a){return rl(a)?cca():Promise.resolve()};
kca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(jca)})};
mca=function(){var a="/sw.js",b=g.F("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=vl(a);g.xg("service_worker_push_enabled")&&a.then(lca).then(ica)};
lca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
jca=function(a){a&&vl("/sw.js?0",a.scope)};
vl=function(a,b){return navigator.serviceWorker.register(a,{scope:b||zg("service_worker_scope")||"/"})};
wl=function(){g.Ui.call(this,"www/base");this.D=0};
xl=function(a){(a=a.detail.name)&&Xi(a)};
g.aa=[];fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)yl=Object.setPrototypeOf;else{var zl;a:{var nca={a:!0},Al={};try{Al.__proto__=nca;zl=Al.a;break a}catch(a){}zl=!1}yl=zl?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ha=yl,ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
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
var f=new c;b.prototype.V=function(k){var l=this.H();k.bi(l.resolve,l.reject)};
b.prototype.la=function(k,l){var m=this.H();try{k.call(l,m.resolve,m.reject)}catch(q){m.reject(q)}};
b.prototype.then=function(k,l){function m(B,H){return"function"==typeof B?function(O){try{q(B(O))}catch(U){t(U)}}:H}
var q,t,y=new b(function(B,H){q=B;t=H});
this.bi(m(k,q),m(l,t));return y};
b.prototype["catch"]=function(k){return this.then(void 0,k)};
b.prototype.bi=function(k,l){function m(){switch(q.F){case 1:k(q.D);break;case 2:l(q.D);break;default:throw Error("Unexpected state: "+q.F);}}
var q=this;null==this.C?f.F(m):this.C.push(m)};
b.resolve=d;b.reject=function(k){return new b(function(l,m){m(k)})};
b.race=function(k){return new b(function(l,m){for(var q=g.da(k),t=q.next();!t.done;t=q.next())d(t.value).bi(l,m)})};
b.all=function(k){var l=g.da(k),m=l.next();return m.done?d([]):new b(function(q,t){function y(O){return function(U){B[O]=U;H--;0==H&&q(B)}}
var B=[],H=0;do B.push(void 0),H++,d(m.value).bi(y(B.length-1),t),m=l.next();while(!m.done)})};
return b});
ka("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
ma.prototype.toString=function(){return this.C};
var aaa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
ka("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ka("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&k<e;)if(d[k++]!=b[l++])return!1;return l>=f}});
ka("String.prototype.repeat",function(a){return a?a:function(b){var c=qa(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
ka("Array.prototype.keys",function(a){return a?a:function(){return sa(this,function(b){return b})}});
ka("Array.prototype.values",function(a){return a?a:function(){return sa(this,function(b,c){return c})}});
var oca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||oca});
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
var pca=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ka("Reflect.construct",function(){return pca});
ka("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var k=0;!(f=b.next()).done;)e.push(c.call(d,f.value,k++))}else for(f=b.length,k=0;k<f;k++)e.push(c.call(d,b[k],k));return e}});
ka("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push([d,b[d]]);return c}});
ka("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push(b[d]);return c}});
g.Bl=g.Bl||{};g.p=this||self;baa=/^[\w+/_-]+[=]{0,2}$/;ya=null;Ja="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Qc=Date.now||function(){return+new Date};g.Cl=document;g.Jd=window;g.x(g.La,Error);g.La.prototype.name="CustomError";g.Oa.prototype.Qd=!0;g.Oa.prototype.Vc=function(){return this.C};
var Na={},Ma={},vaa=g.Qa("");g.Ta=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.qca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.wk=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k="string"===typeof a?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.tk=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Lf=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.v)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.A)(a,function(f,k){e=b.call(d,e,f,k,a)});
return e};
g.Dl=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.El=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.rca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.sca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Fl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");var mb;g.nb.prototype.Qd=!0;g.nb.prototype.Vc=function(){return this.F.toString()};
g.nb.prototype.ol=!0;g.nb.prototype.C=function(){return 1};
mb={};g.lb={};var tb,ub,vb,wb,xb,yb,faa;g.Ab=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
tb=/&/g;ub=/</g;vb=/>/g;wb=/"/g;xb=/'/g;yb=/\x00/g;faa=/[\x00&<>"']/;g.Fb.prototype.Qd=!0;g.Fb.prototype.Vc=function(){return this.F.toString()};
g.Fb.prototype.ol=!0;g.Fb.prototype.C=function(){return 1};
var haa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,gaa=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,Kb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Eb={};g.Ib("about:blank");var Db={};g.Ob.prototype.Qd=!0;g.Nb={};g.Ob.prototype.Vc=function(){return this.C};
g.Gl=g.Pb("");g.Hl=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.Il=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Rb.prototype.Qd=!0;g.Qb={};g.Rb.prototype.Vc=function(){return this.C};
g.tca=g.Sb("");a:{var Jl=g.p.navigator;if(Jl){var Kl=Jl.userAgent;if(Kl){g.Tb=Kl;break a}}g.Tb=""};g.ac.prototype.ol=!0;g.ac.prototype.C=function(){return this.D};
g.ac.prototype.Qd=!0;g.ac.prototype.Vc=function(){return this.F.toString()};
var $b={};g.fc("<!DOCTYPE html>",0);g.ve=g.fc("",0);g.Ll=g.fc("<br>",0);g.uca=g.$a(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.bc(g.ve);return!b.parentElement});g.mc=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.rc[" "]=g.Aa;var Tl,iaa,Xl;g.Ml=g.Ub("Opera");g.E=g.Vb();g.Nl=g.Ub("Edge");g.Ol=g.Nl||g.E;g.Pl=g.Ub("Gecko")&&!(-1!=g.Tb.toLowerCase().indexOf("webkit")&&!g.Ub("Edge"))&&!(g.Ub("Trident")||g.Ub("MSIE"))&&!g.Ub("Edge");g.Ql=-1!=g.Tb.toLowerCase().indexOf("webkit")&&!g.Ub("Edge");g.Rl=g.Ub("Macintosh");g.Sl=g.Ub("Windows");g.vca=g.Ub("Linux")||g.Ub("CrOS");g.wca=g.Ub("Android");g.xca=pc();g.yca=g.Ub("iPad");g.zca=g.Ub("iPod");g.Aca=g.qc();
a:{var Ul="",Vl=function(){var a=g.Tb;if(g.Pl)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Nl)return/Edge\/([\d\.]+)/.exec(a);if(g.E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Ql)return/WebKit\/(\S+)/.exec(a);if(g.Ml)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Vl&&(Ul=Vl?Vl[1]:"");if(g.E){var Wl=tc();if(null!=Wl&&Wl>parseFloat(Ul)){Tl=String(Wl);break a}}Tl=Ul}g.uc=Tl;iaa={};Xl=g.p.document&&g.E?tc():void 0;g.wc=Xl;g.Yl=Wb();g.Zl=pc()||g.Ub("iPod");g.$l=g.Ub("iPad");g.Bca=g.Zb();g.am=Xb();g.bm=g.Yb()&&!g.qc();var zc;zc={};g.Bc=null;g.Cc.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.Cc.prototype[Symbol.iterator]=function(){return this});g.Hc="function"==typeof Uint8Array;g.Dc.prototype.bd=function(){Ec(this);return this.ec};
g.Dc.prototype.F=g.Hc?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return Ac(this)};
try{return JSON.stringify(this.ec&&this.bd(),Fc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.bd(),Fc)};
g.Dc.prototype.toString=function(){Ec(this);return this.ec.toString()};
g.Dc.prototype.clone=function(){return new this.constructor(Gc(this.bd()))};g.h=g.Ic.prototype;g.h.isEnabled=function(){return navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if("object"===typeof c){var k=c.F;f=c.secure;e=c.domain;d=c.path;c=c.C}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===c&&(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Qc)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f+(null!=k?";samesite="+k:"")};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Ab)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",0,b,c);return d};
g.h.Ic=function(){return g.Jc(this).keys};
g.h.Ib=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Lb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.Kd=g.ba(3);g.h.clear=function(){for(var a=g.Jc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Zh=new g.Ic("undefined"==typeof document?null:document);var Mc={};g.cm={Ga:["BC","AD"],La:["Before Christ","Anno Domini"],Ma:"JFMAMJJASOND".split(""),Na:"JFMAMJJASOND".split(""),va:"January February March April May June July August September October November December".split(" "),ra:"January February March April May June July August September October November December".split(" "),wa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ba:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Da:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Ja:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Aa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Ca:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Pa:"SMTWTFS".split(""),Oa:"SMTWTFS".split(""),Ia:["Q1","Q2","Q3","Q4"],Ha:["1st quarter","2nd quarter","3rd quarter","4th quarter"],za:["AM","PM"],qa:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],xa:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Fa:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],sa:6,Ea:[5,6],ua:5};
g.dm=g.cm;g.dm=g.cm;g.h=g.Rc.prototype;g.h.De=g.dm.sa;g.h.Xg=g.dm.ua;g.h.clone=function(){var a=new g.Rc(this.date);a.De=this.De;a.Xg=this.Xg;return a};
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
g.h.add=function(a){if(a.C||a.months){var b=this.getMonth()+a.months+12*a.C,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);var d=Math.min(g.Nc(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),Pc(this,a.getDate()))};
g.h.je=function(a){return[this.getFullYear(),g.nc(this.getMonth()+1,2),g.nc(this.getDate(),2)].join(a?"-":"")+""};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){return this.je()};
g.h.valueOf=function(){return this.date.valueOf()};var kaa;kaa=!g.E||g.xc(9);g.Cca=!g.Pl&&!g.E||g.E&&g.xc(9)||g.Pl&&g.vc("1.9.1");g.em=g.E&&!g.vc("9");g.Dca=g.E||g.Ml||g.Ql;g.h=g.Sc.prototype;g.h.clone=function(){return new g.Sc(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Sc&&g.Tc(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.Vc.prototype;g.h.clone=function(){return new g.Vc(this.width,this.height)};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!(this.width*this.height)};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Yc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.nd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.zd=/#|$/;var Eca={kK:"allow-forms",lK:"allow-modals",mK:"allow-orientation-lock",nK:"allow-pointer-lock",oK:"allow-popups",pK:"allow-popups-to-escape-sandbox",qK:"allow-presentation",rK:"allow-same-origin",sK:"allow-scripts",tK:"allow-top-navigation",uK:"allow-top-navigation-by-user-activation"},maa=g.$a(function(){return g.Cd(Eca)});g.h=g.Dd.prototype;g.h.clone=function(){return new g.Dd(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Sc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.fm=g.Pl?"MozUserSelect":g.Ql||g.Nl?"WebkitUserSelect":null;g.Ba(g.Hd);g.gm=!!window.google_async_iframe_id;g.hm=g.gm&&window.parent||window;g.pb(g.Qa("//web.archive.org/web/20191001000120/https://fonts.googleapis.com/css"));g.Jg=(new Date).getTime();g.C.prototype.Sc=!1;g.C.prototype.ob=function(){return this.Sc};
g.C.prototype.dispose=function(){this.Sc||(this.Sc=!0,this.W())};
g.C.prototype.W=function(){if(this.Gf)for(;this.Gf.length;)this.Gf.shift()()};g.Ud.prototype.stopPropagation=function(){this.F=!0};
g.Ud.prototype.preventDefault=function(){this.Tr=!1};var je,Gca,taa;g.Fca=!g.E||g.xc(9);je=!g.E||g.xc(9);Gca=g.E&&!g.vc("9");taa=function(){if(!g.p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.p.addEventListener("test",g.Aa,b),g.p.removeEventListener("test",g.Aa,b)}catch(c){}return a}();g.im=g.Ql?"webkitTransitionEnd":g.Ml?"otransitionend":"transitionend";g.x(g.Vd,g.Ud);var Hca={2:"touch",3:"pen",4:"mouse"};
g.Vd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Pl&&(g.sc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Rl?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Hca[a.pointerType]||"";this.state=
a.state;this.yc=a;a.defaultPrevented&&this.preventDefault()};
g.Vd.prototype.stopPropagation=function(){g.Vd.T.stopPropagation.call(this);this.yc.stopPropagation?this.yc.stopPropagation():this.yc.cancelBubble=!0};
g.Vd.prototype.preventDefault=function(){g.Vd.T.preventDefault.call(this);var a=this.yc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Gca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Wd="closure_listenable_"+(1E6*Math.random()|0),qaa=0;g.h=g.Zd.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=ae(a,b,d,e);-1<k?(b=a[k],c||(b.ai=!1)):(b=new raa(b,this.src,f,!!d,e),b.ai=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ae(e,b,c,d);return-1<b?(Yd(e[b]),g.Wa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Yd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.jg=g.ba(5);g.h.ff=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=ae(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return g.bb(this.listeners,function(f){for(var k=0;k<f.length;++k)if(!(c&&f[k].type!=d||e&&f[k].capture!=b))return!0;return!1})};var ge="closure_lm_"+(1E6*Math.random()|0),me={},ie=0,pe="__closure_events_fn_"+(1E9*Math.random()>>>0);g.x(g.qe,g.C);g.qe.prototype[Wd]=!0;g.h=g.qe.prototype;g.h.Ei=function(){return this.cm};
g.h.Fh=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.ce(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.ke(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Ei();if(b){var c=[];for(var d=1;b;b=b.Ei())c.push(b),++d}b=this.Yt;d=a.type||a;if("string"===typeof a)a=new g.Ud(a,b);else if(a instanceof g.Ud)a.target=a.target||b;else{var e=a;a=new g.Ud(d,b);g.kb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=re(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=re(k,d,!0,a)&&e,a.F||(e=re(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=re(k,d,!1,a)&&e;return e};
g.h.W=function(){g.qe.T.W.call(this);this.removeAllListeners();this.cm=null};
g.h.O=function(a,b,c,d){return this.wd.add(String(a),b,!1,c,d)};
g.h.He=function(a,b,c,d){return this.wd.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.wd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.wd?this.wd.removeAll(a):0};
g.h.jg=g.ba(4);g.h.ff=function(a,b,c,d){return this.wd.ff(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.wd.hasListener(void 0!==a?String(a):void 0,b)};se.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var De;var Ee=new se(function(){return new xe},function(a){a.reset()});
we.prototype.add=function(a,b){var c=Ee.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
we.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
xe.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
xe.prototype.reset=function(){this.next=this.scope=this.lc=null};var ye,ze=!1,Ae=new we;Je.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var Ke=new se(function(){return new Je},function(a){a.reset()});
g.Ie.prototype.then=function(a,b,c){return Pe(this,g.Ha(a)?a:null,g.Ha(b)?b:null,c)};
g.Fe(g.Ie);g.Ie.prototype.cancel=function(a){if(0==this.C){var b=new g.We(a);Be(function(){Re(this,b)},this)}};
g.Ie.prototype.Y=function(a){this.C=0;g.He(this,2,a)};
g.Ie.prototype.N=function(a){this.C=0;g.He(this,3,a)};
g.Ie.prototype.J=function(){for(var a;a=Se(this);)Te(this,a,this.C,this.M);this.L=!1};
var Ze=ue;g.x(g.We,g.La);g.We.prototype.name="cancel";g.x(g.bf,g.C);g.h=g.bf.prototype;g.h.nb=0;g.h.W=function(){g.bf.T.W.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.nb=g.$e(this.Qb,void 0!==a?a:this.D)};
g.h.stop=function(){this.isActive()&&g.af(this.nb);this.nb=0};
g.h.bf=g.ba(7);g.h.isActive=function(){return 0!=this.nb};
g.h.vo=function(){this.nb=0;this.C&&this.C.call(this.F)};g.x(cf,Aaa);cf.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
cf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)df(this,a,d),d+=this.F;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){df(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){df(this,e);f=0;break}}this.D=f;this.H+=b}};
cf.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;df(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.gf="StopIteration"in g.p?g.p.StopIteration:{message:"StopIteration",stack:""};g.ff.prototype.next=function(){throw g.gf;};
g.ff.prototype.dd=function(){return this};g.h=g.lf.prototype;g.h.Lb=function(){return this.D};
g.h.Ib=g.ba(0);g.h.Ic=function(){g.nf(this);return this.C.concat()};
g.h.Kd=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Lb())return!1;var c=b||Caa;g.nf(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Pe=this.D=this.C.length=0};
g.h.remove=function(a){return g.mf(this.F,a)?(delete this.F[a],this.D--,this.Pe++,this.C.length>2*this.D&&g.nf(this),!0):!1};
g.h.get=function(a,b){return g.mf(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.mf(this.F,a)||(this.D++,this.C.push(a),this.Pe++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.Ic(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.lf(this)};
g.h.dd=function(a){g.nf(this);var b=0,c=this.Pe,d=this,e=new g.ff;e.next=function(){if(c!=d.Pe)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.gf;var f=d.C[b++];return a?f:d.F[f]};
return e};var rf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Eaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.x(g.sf,g.C);g.h=g.sf.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.sd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.Aa):(c&&g.Xa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.na=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Faa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.sd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.A)(b,this.sd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Lb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Lb(b);return a};
g.h.W=function(){g.sf.T.W.call(this);this.clear();this.D.length=0};g.uf.prototype.set=function(a,b){void 0===b?this.C.remove(a):this.C.set(a,g.pf(b))};
g.uf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.uf.prototype.remove=function(a){this.C.remove(a)};g.x(vf,g.uf);vf.prototype.set=function(a,b){vf.T.set.call(this,a,xf(b))};
vf.prototype.F=function(a){a=vf.T.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
vf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.x(g.yf,vf);g.yf.prototype.set=function(a,b,c){if(b=xf(b)){if(c){if(c<(0,g.Qc)()){g.yf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Qc)()}g.yf.T.set.call(this,a,b)};
g.yf.prototype.F=function(a,b){var c=g.yf.T.F.call(this,a);if(c)if(!b&&g.zf(c))g.yf.prototype.remove.call(this,a);else return c};g.x(Af,Gaa);Af.prototype.Lb=function(){var a=0;g.jf(this.dd(!0),function(){a++});
return a};
Af.prototype.clear=function(){var a=Baa(this.dd(!0)),b=this;(0,g.A)(a,function(c){b.remove(c)})};g.x(g.Bf,Af);g.h=g.Bf.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Lb=function(){return this.C.length};
g.h.dd=function(a){var b=0,c=this.C,d=new g.ff;d.next=function(){if(b>=c.length)throw g.gf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.x(g.Cf,g.Bf);g.x(Ef,Af);var Haa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Df=null;g.h=Ef.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(Ff(a),b);Gf(this)};
g.h.get=function(a){a=this.C.getAttribute(Ff(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(Ff(a));Gf(this)};
g.h.Lb=function(){return Hf(this).attributes.length};
g.h.dd=function(a){var b=0,c=Hf(this).attributes,d=new g.ff;d.next=function(){if(b>=c.length)throw g.gf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){for(var a=Hf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Gf(this)};g.x(If,Af);If.prototype.set=function(a,b){this.F.set(this.C+a,b)};
If.prototype.get=function(a){return this.F.get(this.C+a)};
If.prototype.remove=function(a){this.F.remove(this.C+a)};
If.prototype.dd=function(a){var b=this.F.dd(!0),c=this,d=new g.ff;d.next=function(){for(var e=b.next();e.substr(0,c.C.length)!=c.C;)e=b.next();return a?e.substr(c.C.length):c.F.get(e)};
return d};Kf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
Kf.prototype.get=function(a){return!!this.C[a]};g.Pf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.r("yt.config_",g.Pf,void 0);var Xf={};var Ica=g.u("ytPubsubPubsubInstance")||new g.sf;g.sf.prototype.subscribe=g.sf.prototype.subscribe;g.sf.prototype.unsubscribeByKey=g.sf.prototype.sd;g.sf.prototype.publish=g.sf.prototype.na;g.sf.prototype.clear=g.sf.prototype.clear;g.r("ytPubsubPubsubInstance",Ica,void 0);var cg=g.u("ytPubsubPubsubSubscribedKeys")||{};g.r("ytPubsubPubsubSubscribedKeys",cg,void 0);var eg=g.u("ytPubsubPubsubTopicToKeys")||{};g.r("ytPubsubPubsubTopicToKeys",eg,void 0);var dg=g.u("ytPubsubPubsubIsSynchronous")||{};
g.r("ytPubsubPubsubIsSynchronous",dg,void 0);var Kaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Laa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.mg.prototype.initialize=function(a,b,c,d){var e=this;b?(this.F=!0,g.kg(b,function(){e.F=!1;if(window.botguard)ng(e,c,d);else{g.lg(b);var f=Error("Unable to load Botguard");f.params="from "+b;g.Vf(f)}})):a&&(eval(a),window.botguard?ng(this,c,d):g.Vf(Error("Unable to load Botguard from JS")))};
g.mg.prototype.Rd=function(){return!!this.C};
g.mg.prototype.dispose=function(){this.C=null};g.n(ug,Maa);ug.prototype.start=function(){var a=g.u("yt.scheduler.instance.start");a&&a()};
ug.prototype.pause=function(){var a=g.u("yt.scheduler.instance.pause");a&&a()};
g.Ba(ug);ug.getInstance();var jm;jm=window;g.Fh=jm.ytcsi&&jm.ytcsi.now?jm.ytcsi.now:jm.performance&&jm.performance.timing&&jm.performance.now?function(){return jm.performance.timing.navigationStart+jm.performance.now()}:function(){return(new Date).getTime()};g.Ag=new g.mg;g.Fg=new function(){var a=window.document;this.C=window;this.F=a};
g.r("yt.ads_.signals_.getAdSignalsString",function(a){return g.Bg(Ig(a))},void 0);(0,g.Qc)();var Kg=g.ua(XMLHttpRequest)?function(){return new XMLHttpRequest}:g.ua(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Ng,Saa,Tg;Ng={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Saa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Tg=!1;g.km=Ug;Yg.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.Ge(a)?a:g.$g(a)):2===this.F&&b?(a=b.call(c,this.C),g.Ge(a)?a:g.Zg(a)):this};
Yg.prototype.getValue=function(){return this.C};
g.Fe(Yg);var Jca=0,Waa=g.Ql?"webkit":g.Pl?"moz":g.E?"ms":g.Ml?"o":"",ah=g.u("ytDomDomGetNextId")||function(){return++Jca};
g.r("ytDomDomGetNextId",ah,void 0);var Xaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.dh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.dh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.dh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var hh=g.u("ytEventsEventsListeners")||{};g.r("ytEventsEventsListeners",hh,void 0);var lh=g.u("ytEventsEventsCounter")||{count:0};g.r("ytEventsEventsCounter",lh,void 0);var mh=g.$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.lm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.mm="Microsoft Internet Explorer"==navigator.appName;g.x(g.qh,g.C);g.qh.prototype.Y=function(a){this.C=new g.Sc(g.fh(a),g.gh(a))};
g.qh.prototype.M=function(){if(this.C){var a=g.lm();if(0!=this.D){var b=g.Uc(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.Qb();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.qh.prototype.W=function(){g.ag(this.N);g.nh(this.J)};g.n(rh,g.C);rh.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
rh.prototype.W=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.callback)}g.C.prototype.W.call(this)};sh.prototype.clone=function(){var a=new sh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.Ca(c)?a[b]=g.hb(c):a[b]=c}return a};var vh={},uh=0;var aba,Nh,Oh,$aa,Gh,bba,Ah;aba=Math.pow(2,16)-1;Nh=null;Oh=0;$aa={log_event:"events",log_interaction:"interactions"};Gh=Object.create(null);Gh.log_event="GENERIC_EVENT_LOGGING";Gh.log_interaction="INTERACTION_LOGGING";bba=new Set(["log_event"]);Ah={};g.xh=0;g.yh=0;g.zh=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.r("ytLoggingTransportLogPayloadsQueue_",g.zh,void 0);var Mh=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};g.r("ytLoggingTransportTokensToCttTargetIds_",Mh,void 0);
var Dh=g.u("ytLoggingTransportDispatchedStats_")||{};g.r("ytLoggingTransportDispatchedStats_",Dh,void 0);var Ih=g.u("ytLoggingTransportCapturedTime_")||{};g.r("ytytLoggingTransportCapturedTime_",Ih,void 0);var Th={};var Vh=g.u("ytLoggingGelSequenceIdObj_")||{};g.r("ytLoggingGelSequenceIdObj_",Vh,void 0);g.bi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.Qc)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.pf(b))}catch(f){return}else e=escape(b);g.$h(a,e,c,this.F)};
g.bi.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Zh.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.bi.prototype.remove=function(a){this.C&&this.C.remove(a);g.ai(a,"/",this.F)};var ci=new g.bi("yt.innertube");g.ii.prototype.toString=function(){return JSON.stringify(g.ji(this))};g.li.prototype.toString=function(){return this.topic};var Kca=g.u("ytPubsub2Pubsub2Instance")||new g.sf;g.sf.prototype.subscribe=g.sf.prototype.subscribe;g.sf.prototype.unsubscribeByKey=g.sf.prototype.sd;g.sf.prototype.publish=g.sf.prototype.na;g.sf.prototype.clear=g.sf.prototype.clear;g.r("ytPubsub2Pubsub2Instance",Kca,void 0);var oi=g.u("ytPubsub2Pubsub2SubscribedKeys")||{};g.r("ytPubsub2Pubsub2SubscribedKeys",oi,void 0);var qi=g.u("ytPubsub2Pubsub2TopicToKeys")||{};g.r("ytPubsub2Pubsub2TopicToKeys",qi,void 0);
var pi=g.u("ytPubsub2Pubsub2IsAsync")||{};g.r("ytPubsub2Pubsub2IsAsync",pi,void 0);g.r("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.n(ti,g.ki);var gba=new g.li("screen-created",ti),ui=[],vi=0;var Ai=g.u("ytLoggingLatencyUsageStats_")||{};g.r("ytLoggingLatencyUsageStats_",Ai,void 0);var Bi=0;var Ci=(0,g.Qc)().toString();var Gi=g.u("ytLoggingTimeDocumentNonce_")||Di(),Hi,Ei;g.r("ytLoggingTimeDocumentNonce_",Gi,void 0);Hi=0;g.Fi=null;Ei=null;g.r("yt_logging_screen.getRootVeType",Pi,void 0);g.r("yt_logging_screen.getCurrentCsn",g.Ri,void 0);g.r("yt_logging_screen.setCurrentScreen",g.Si,void 0);g.h=g.Ui.prototype;g.h.vG=function(){this.Rd()||this.init()};
g.h.enable=function(){this.C=1;(0,g.A)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.vG,this),this.subscribe("dispose-"+a,this.dispose,this),g.F("PAGE_NAME")==a&&g.Vi(this))},this)};
g.h.init=function(){g.sg(this.F);this.C=2;this.L&&this.L()};
g.h.Rd=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.sg(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Tf(a)}};
g.h.subscribe=function(a,b,c){a=g.gg(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.hg(this.G);this.G=[]};var Wi=g.u("yt.modules.registry_")||{};g.r("yt.modules.registry_",Wi,void 0);g.Zi=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.r("yt.msgs_",g.Zi,void 0);var ej={},lba=0;var mba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.n(sj,g.C);g.h=sj.prototype;g.h.getId=function(){return this.ha};
g.h.loadNewVideoConfig=function(a){if(!this.ob()){this.aa&&(g.$f(this.aa),this.aa=0);this.sb=a=g.th(a);this.C=a.clone();qj(this);this.Ka||(this.Ka=Bj(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Gd(this.H,Number(a)||a);if(a=this.C.attrs.height)this.H.style.height=g.Ed(Number(a)||a,!0);rj(this);this.M&&tj(this)}};
g.h.Dv=function(){return this.sb};
g.h.xz=function(){return this.M};
g.h.Uh=function(a,b){var c=this,d=Bj(this,b);if(d){if(!g.Ua(this.Td,a)&&!this.D[a]){var e=oba(this,a);this.N&&this.N(a,e)}this.Y.subscribe(a,d);"onReady"==a&&this.M&&g.Yf(function(){d(c.api)},0)}};
g.h.jG=function(a,b){if(!this.ob()){var c=Bj(this,b);c&&g.tf(this.Y,a,c)}};
g.h.Xt=function(a){g.I("a11y-announce",a)};
g.h.BD=function(a){g.I("WATCH_LATER_VIDEO_ADDED",a)};
g.h.CD=function(a){g.I("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Nv=function(){return this.la||(uj(this)?"html5":null)};
g.h.Hv=function(){return this.qb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.jg(vj(this));spf.script.ignore(b,a)}g.$f(this.wb);this.V=!1};
g.h.W=function(){yj(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Tf(b)}this.mb=null;for(var a in this.D)g.p[this.D[a]]=null;this.sb=this.C=this.api=null;delete this.ab;delete this.H;g.C.prototype.W.call(this)};g.Dj={};g.Cj="player_uid_"+(1E9*Math.random()>>>0);var Kj=null;g.nm=window.performance&&window.performance.memory;g.gl={};var om=window,Lj=om.performance||om.mozPerformance||om.msPerformance||om.webkitPerformance||{};g.n(Oj,g.ki);g.n(Pj,g.ki);var Cba=new g.li("aft-recorded",Oj),Eba=new g.li("timing-sent",Pj);g.n(Yj,Error);var Zj=!1,zba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP","artist.analytics":"LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS","artist.events":"LATENCY_ACTION_CREATOR_ARTIST_CONCERTS","artist.presskit":"LATENCY_ACTION_CREATOR_ARTIST_PROFILE",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
"channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",chips:"LATENCY_ACTION_CHIPS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",
search:"LATENCY_ACTION_RESULTS",search_ui:"LATENCY_ACTION_SEARCH_UI",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS",ww_rqs:"LATENCY_ACTION_WHO_IS_WATCHING","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
"video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC","video.monetization":"LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",voice_assistant:"LATENCY_ACTION_VOICE_ASSISTANT"},sm={},dk=(sm.ad_allowed="adTypesAllowed",sm.yt_abt="adBreakType",sm.ad_cpn=
"adClientPlaybackNonce",sm.ad_docid="adVideoId",sm.yt_ad_an="adNetworks",sm.ad_at="adType",sm.browse_id="browseId",sm.p="httpProtocol",sm.t="transportProtocol",sm.cpn="clientPlaybackNonce",sm.cseg="creatorInfo.creatorSegment",sm.csn="clientScreenNonce",sm.docid="videoId",sm.GetHome_rid="getHomeRequestId",sm.is_continuation="isContinuation",sm.is_nav="isNavigation",sm.b_p="kabukiInfo.browseParams",sm.is_prefetch="kabukiInfo.isPrefetch",sm.is_secondary_nav="kabukiInfo.isSecondaryNav",sm.prev_browse_id=
"kabukiInfo.prevBrowseId",sm.query_source="kabukiInfo.querySource",sm.voz_type="kabukiInfo.vozType",sm.yt_lt="loadType",sm.mver="creatorInfo.measurementVersion",sm.yt_ad="isMonetized",sm.nr="webInfo.navigationReason",sm.ncnp="webInfo.nonPreloadedNodeCount",sm.prt="playbackRequiresTap",sm.pis="playerInfo.playerInitializedState",sm.paused="playerInfo.isPausedOnLoad",sm.yt_pt="playerType",sm.fmt="playerInfo.itag",sm.yt_pl="watchInfo.isPlaylist",sm.yt_pre="playerInfo.preloadType",sm.yt_ad_pr="prerollAllowed",
sm.pa="previousAction",sm.yt_red="isRedSubscriber",sm.st="serverTimeMs",sm.aq="tvInfo.appQuality",sm.br_trs="tvInfo.bedrockTriggerState",sm.label="tvInfo.label",sm.is_mdx="tvInfo.isMdx",sm.preloaded="tvInfo.isPreloaded",sm.query="unpluggedInfo.query",sm.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",sm.yt_vst="videoStreamType",sm.vph="viewportHeight",sm.vpw="viewportWidth",sm.yt_vis="isVisible",sm),uba="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
tm={},ek=(tm.mver="MEASUREMENT_VERSION_",tm.pis="PLAYER_INITIALIZED_STATE_",tm.yt_pt="LATENCY_PLAYER_",tm.pa="LATENCY_ACTION_",tm.yt_vst="VIDEO_STREAM_TYPE_",tm),vba="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");var Dba={vc:!0},lk={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_sel_auto_svg_home_v2"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",
'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"},rk=!1,Bba=(0,g.v)(Lj.clearResourceTimings||Lj.webkitClearResourceTimings||Lj.mozClearResourceTimings||Lj.msClearResourceTimings||Lj.oClearResourceTimings||g.Aa,Lj);var Fk=0,Ak=[],Ek=[],xk=0,Bk={},Ck={},yk=new g.bf(Lba,1E3);var Hk=["server_prefetched_vast","vmap"];var Jk,Nk="";var Pk=null,Sk=[];var Wk,ml,ll,Yk,Xk,Sba,Vba,Tba,Uba,hl;Yk=0;Xk=0;Sba=[900,60,"waiting"];Vba=[500,99,"waiting"];Tba=[300,60,"waiting"];Uba=[400,99,"waiting"];hl=[300,101,"done"];var tl=!1;window.yt=window.yt||{};g.r("yt.setConfig",g.Qf,void 0);g.r("yt.pushConfigArray",Rf,void 0);g.r("yt.getConfig",g.F,void 0);g.r("yt.config.set",g.Qf,void 0);g.r("yt.config.pushArray",Rf,void 0);g.r("yt.config.get",g.F,void 0);g.r("yt.hasMsg",g.aj,void 0);g.r("yt.setMsg",$i,void 0);g.r("yt.setGoogMsg",bj,void 0);g.r("yt.msgs.has",g.aj,void 0);g.r("yt.msgs.set",$i,void 0);g.r("yt.msgs.setGoog",bj,void 0);g.r("yt.pubsub.publish",g.I,void 0);g.r("yt.pubsub.subscribe",g.gg,void 0);
g.r("ytcsi.tick",g.ik,void 0);g.x(wl,g.Ui);
wl.prototype.enable=function(){window.onload=Qba;window.onunload=Rba;window.onerror=Jaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Uk),window.addEventListener("spfhistory",Vk),window.addEventListener("spfrequest",$k),window.addEventListener("spfpartprocess",cl),window.addEventListener("spfpartdone",dl),window.addEventListener("spfprocess",el),window.addEventListener("spfdone",il),window.addEventListener("spferror",jl),window.addEventListener("spfreload",
kl),window.addEventListener("spfjsbeforeunload",xl)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",Xba),this.subscribe("dispose",Yba)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
wl.prototype.init=function(){wl.T.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.F("PAGEFRAME_JS")){var b=g.F("PAGEFRAME_JS",void 0);var c=function(){var e=g.u("ytbin.www.pageframe.setup");e&&(window.ytPageFrameLoaded=!0,e())}}else a&&(a=g.u("yt.www.masthead.loadSearchbox"))&&a();
a=g.F("JS_COMMON_MODULE");var d=g.F("JS_PAGE_MODULES");d||(d=[a]);a=g.F("JS_DELAY_LOAD",0);0<a?(g.$f(this.D),this.D=g.Yf(function(){b&&g.kg(b,c);spf.script.require(d)},a)):(b&&g.kg(b,c),spf.script.require(d));
g.r("yt.abuse.player.botguardInitialized",Oaa,void 0);g.r("yt.abuse.player.invokeBotguard",Paa,void 0);g.r("yt.abuse.dclkstatus.checkDclkStatus",Naa,void 0);g.r("yt.player.exports.navigate",g.oj,void 0);g.r("yt.util.activity.init",g.Sh,void 0);g.r("yt.util.activity.getTimeSinceActive",g.Uh,void 0);g.r("yt.util.activity.setTimestamp",g.Qh,void 0);Ok(g.u("ytplayer.config"));g.u("ytspf.enabled")&&Oba();Aba();g.F("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.xg("service_worker_enabled")?mca():kca())};
wl.prototype.dispose=function(){g.$f(this.D);var a=g.u("ytbin.www.pageframe.cancelSetup");a&&a();g.ag(Jk);if(a=g.Lk())a.removeEventListener("onReady",Kk),a.removeEventListener("onStateChange",Kk);Tj(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.G(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.ph(a);wl.T.dispose.call(this)};
wl.prototype.disable=function(){wl.T.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Uk),window.removeEventListener("spfhistory",Vk),window.removeEventListener("spfrequest",$k),window.removeEventListener("spfpartprocess",cl),window.removeEventListener("spfpartdone",dl),window.removeEventListener("spfprocess",el),window.removeEventListener("spfdone",il),window.removeEventListener("spferror",jl),window.removeEventListener("spfreload",kl),window.removeEventListener("spfjsbeforeunload",
xl));window.onload=null;window.onunload=null;window.onerror=null};
g.Yi(new wl);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:01:20 Oct 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:44:43 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 114.279
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.059
  cdx.remote: 0.055
  esindex: 0.009
  LoadShardBlock: 81.574 (3)
  PetaboxLoader3.datanode: 86.879 (5)
  load_resource: 550.887 (2)
  PetaboxLoader3.resolve: 480.57 (2)
*/