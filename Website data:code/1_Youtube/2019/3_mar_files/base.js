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

var _yt_www={};(function(g){var window=this;var ca,aaa,ma,na,oa,qa,pa,ra,ta,daa,eaa,db,zb,Db,gaa,Kb,Pb,Qb,Rb,kaa,maa,Oc,Pc,cd,naa,td,vd,wd,yd,xd,zd,oaa,Cd,Dd,paa,Hd,Md,Nd,Sd,qaa,raa,Td,Ud,taa,ce,fe,ge,ke,uaa,ne,ue,te,waa,xe,ye,ze,Ae,xaa,Be,Ce,Ge,yaa,He,Oe,Qe,zaa,Ve,Ze,Te,Re,Baa,Ye,We,Xe,af,Aaa,Caa,ff,gf,lf,Daa,Eaa,Faa,rf,tf,Haa,yf,zf,Af,Iaa,Df,Hf,If,Jf,Kf,Lf,Nf,Kaa,Rf,Uf,Vf,Xf,Laa,eg,og,Oaa,vg,qg,Paa,xg,Qaa,Raa,Saa,Taa,Vaa,Qg,Waa,Rg,Sg,Xaa,Xg,Vg,Tg,Zg,fh,ph,qh,aba,Ch,$aa,eba,Oh,Th,Uh,fba,$h,ai,ii,hi,gba,mi,ti,ui,vi,zi,Di,Gi,Ii,Ji,hba,Vi,Wi,
Yi,kba,Xi,Zi,lba,bj,Ui,cj,mba,$i,aj,nba,mj,oba,pba,rj,sj,tj,uj,uba,Mj,yj,Nj,zj,wj,Oj,Aj,qba,Sj,Gj,Hj,Vj,rba,sba,Ij,Dj,Ej,xj,Fj,Xj,Kj,Pj,Lj,zba,Cj,Rj,Bba,Iba,Hba,Gba,dk,Fba,Dba,Eba,Jba,Kba,Lba,Mba,sk,nk,pk,uk,Nba,vk,yk,Oba,Pba,zk,Ak,Fk,Jk,Kk,Lk,Pk,Qk,Rk,Wba,Xba,Gk,Ik,Ek,Vba,Hk,Vk,Xk,Uk,Yk,Wk,Yba,bca,Zba,eca,aca,$ba,cca,dca,gca,al,fca,Zk,hca,jca,lca,kca,ica,bl,dl,el,fa,fl,Fa,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
g.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
aaa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
g.ia=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
ma=function(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var h=d[e];h in c||(c[h]={});c=c[h]}d=d[d.length-1];e=c[d];h=b(e);h!=e&&null!=h&&la(c,d,{configurable:!0,writable:!0,value:h})}};
na=function(){na=function(){};
ja.Symbol||(ja.Symbol=baa)};
oa=function(a,b){this.C=a;la(this,"description",{configurable:!0,writable:!0,value:b})};
qa=function(){na();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&la(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(ca(this))}});
qa=function(){}};
pa=function(a){qa();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a};
ra=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ua=function(a){return void 0!==a};
g.va=function(a){return"string"==typeof a};
g.wa=function(a){return"boolean"==typeof a};
g.xa=function(a){return"number"==typeof a};
g.n=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ua(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.q=function(a,b){for(var c=a.split("."),d=b||g.m,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
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
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.r=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.r=daa:g.r=eaa;return g.r.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.vw=function(a,c,h){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
g.Ha=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ka=function(a,b,c){b=g.Ia(a,b,c);return 0>b?null:g.va(a)?a.charAt(b):a[b]};
g.Ia=function(a,b,c){for(var d=a.length,e=g.va(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return h;return-1};
g.Ma=function(a,b){return 0<=(0,g.La)(a,b)};
g.Na=function(a){return 0==a.length};
g.Pa=function(a,b){var c=(0,g.La)(a,b),d;(d=0<=c)&&g.Oa(a,c);return d};
g.Oa=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Qa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Ra=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ca(d)){var e=a.length||0,h=d.length||0;a.length=e+h;for(var k=0;k<h;k++)a[e+k]=d[k]}else a.push(d)}};
g.Sa=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Ta=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Ua=function(a){return/^[\s\xa0]*$/.test(a)};
g.ab=function(a,b){if(b)a=a.replace(Va,"&amp;").replace(Wa,"&lt;").replace(Xa,"&gt;").replace(Ya,"&quot;").replace(Za,"&#39;").replace($a,"&#0;");else{if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Va,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Wa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Xa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ya,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Za,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace($a,"&#0;"))}return a};
g.bb=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.eb=function(a,b){for(var c=0,d=(0,g.cb)(String(a)).split("."),e=(0,g.cb)(String(b)).split("."),h=Math.max(d.length,e.length),k=0;0==c&&k<h;k++){var l=d[k]||"",p=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];p=/(\d*)(\D*)(.*)/.exec(p)||["","","",""];if(0==l[0].length&&0==p[0].length)break;c=db(0==l[1].length?0:parseInt(l[1],10),0==p[1].length?0:parseInt(p[1],10))||db(0==l[2].length,0==p[2].length)||db(l[2],p[2]);l=l[3];p=p[3]}while(0==c)}return c};
db=function(a,b){return a<b?-1:a>b?1:0};
g.fb=function(a){return encodeURIComponent(String(a))};
g.gb=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.hb=function(a){return a=g.ab(a,void 0)};
g.ib=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.kb=function(a){return-1!=g.jb.indexOf(a)};
g.lb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.mb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.nb=function(a,b){return null!==a&&b in a};
g.ob=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.pb=function(a){for(var b in a)return!1;return!0};
g.qb=function(a,b){b in a&&delete a[b]};
g.rb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.sb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};
g.tb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.ub=function(a){var b=g.Aa(a);if("object"==b||"array"==b){if(g.Da(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.ub(a[c]);return b}return a};
g.wb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var h=0;h<vb.length;h++)c=vb[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.yb=function(){return g.kb("Trident")||g.kb("MSIE")};
zb=function(){return g.kb("Firefox")||g.kb("FxiOS")};
g.Bb=function(){return g.kb("Safari")&&!(g.Ab()||g.kb("Coast")||g.kb("Opera")||g.kb("Edge")||zb()||g.kb("Silk")||g.kb("Android"))};
g.Ab=function(){return(g.kb("Chrome")||g.kb("CriOS"))&&!g.kb("Edge")};
g.Cb=function(){return g.kb("Android")&&!(g.Ab()||zb()||g.kb("Opera")||g.kb("Silk"))};
Db=function(){return g.kb("iPhone")&&!g.kb("iPod")&&!g.kb("iPad")};
g.Eb=function(){return Db()||g.kb("iPad")||g.kb("iPod")};
g.Fb=function(a){g.Fb[" "](a);return a};
g.Gb=function(a,b){try{return g.Fb(a[b]),!0}catch(c){}return!1};
gaa=function(a,b){var c=g.w.bC;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Kb=function(a,b){g.Ca(a);g.Hb();for(var c=b?Ib:Jb,d=[],e=0;e<a.length;e+=3){var h=a[e],k=e+1<a.length,l=k?a[e+1]:0,p=e+2<a.length,t=p?a[e+2]:0,y=h>>2;h=(h&3)<<4|l>>4;l=(l&15)<<2|t>>6;t&=63;p||(t=64,k||(l=64));d.push(c[y],c[h],c[l],c[t])}return d.join("")};
g.Hb=function(){if(!Jb){Jb={};g.Mb={};Ib={};for(var a=0;65>a;a++)Jb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),g.Mb[Jb[a]]=a,Ib[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(g.Mb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
g.Nb=function(a){this.C=0;this.F=a};
g.Ob=function(){};
Pb=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Ba(c))for(var d=0;d<c.length;d++)c[d]&&c[d].qd();else c&&c.qd()}};
Qb=function(a,b){return g.xa(b)&&(isNaN(b)||Infinity===b||-Infinity===b)?String(b):b};
Rb=function(a){if(g.Ba(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Rb(d):d)}return b}if(g.Sb&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Rb(d):d);return b};
g.Tb=function(a){this.C=a||{cookie:""}};
g.Ub=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,h=0;h<a.length;h++)e=(0,g.cb)(a[h]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Wb=function(a){var b=g.q("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(g.va(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(h){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(b=a.constructor&&
a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:g.Vb(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})};
g.Vb=function(a){if(Xb[a])return Xb[a];a=String(a);if(!Xb[a]){var b=/function\s+([^\(]+)/m.exec(a);Xb[a]=b?b[1]:"[Anonymous]"}return Xb[a]};
g.Yb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.$b=function(){this.F="";this.D=Zb};
g.ac=function(a){if(a instanceof g.$b&&a.constructor===g.$b&&a.D===Zb)return a.F;g.Aa(a);return"type_error:SafeUrl"};
g.cc=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(haa);b=b&&iaa.test(b[1]);return g.bc(b?a:"about:invalid#zClosurez")};
g.ec=function(a){if(a instanceof g.$b)return a;a="object"==typeof a&&a.ee?a.cd():String(a);dc.test(a)||(a="about:invalid#zClosurez");return g.bc(a)};
g.fc=function(a,b){if(a instanceof g.$b)return a;a="object"==typeof a&&a.ee?a.cd():String(a);if(b&&/^data:/i.test(a)){var c=g.cc(a);if(c.cd()==a)return c}dc.test(a)||(a="about:invalid#zClosurez");return g.bc(a)};
g.bc=function(a){var b=new g.$b;b.F=a;return b};
g.hc=function(){this.C="";this.F=g.gc};
g.ic=function(a){var b=new g.hc;b.C=a;return b};
g.kc=function(){this.C="";this.F=g.jc};
g.lc=function(a){var b=new g.kc;b.C=a;return b};
g.nc=function(){this.F="";this.G=mc;this.D=null};
g.oc=function(a){if(a instanceof g.nc&&a.constructor===g.nc&&a.G===mc)return a.F;g.Aa(a);return"type_error:SafeHtml"};
g.qc=function(a){if(a instanceof g.nc)return a;var b="object"==typeof a,c=null;b&&a.em&&(c=a.C());a=g.ab(b&&a.ee?a.cd():String(a));return g.pc(a,c)};
g.pc=function(a,b){var c=new g.nc;c.F=a;c.D=b;return c};
g.rc=function(a,b){var c=b instanceof g.$b?b:g.fc(b);a.href=g.ac(c)};
g.sc=function(a,b){var c=b instanceof g.$b?b:g.fc(b);a.href=g.ac(c)};
g.tc=function(a,b){this.x=g.ua(a)?a:0;this.y=g.ua(b)?b:0};
g.uc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.vc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.wc=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.va(a)?document.getElementById(a):a};
g.xc=function(a){var b=document;return g.va(a)?b.getElementById(a):a};
g.zc=function(a,b){g.lb(b,function(b,d){b&&"object"==typeof b&&b.ee&&(b=b.cd());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:yc.hasOwnProperty(d)?a.setAttribute(yc[d],b):g.Sa(d,"aria-")||g.Sa(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.Bc=function(a){return g.Ac(a||window)};
g.Ac=function(a){a=a.document;a=g.Cc(a)?a.documentElement:a.body;return new g.wc(a.clientWidth,a.clientHeight)};
g.Ec=function(a,b,c){return g.Dc(document,arguments)};
g.Dc=function(a,b){var c=String(b[0]),d=b[1];if(!jaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.hb(d.name),'"');if(d.type){c.push(' type="',g.hb(d.type),'"');var e={};g.wb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.va(d)?c.className=d:g.Ba(d)?c.className=d.join(" "):g.zc(c,d));2<b.length&&g.Fc(a,c,b,2);return c};
g.Fc=function(a,b,c,d){function e(c){c&&b.appendChild(g.va(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var h=c[d];!g.Ca(h)||g.Ea(h)&&0<h.nodeType?e(h):(0,g.z)(kaa(h)?g.Qa(h):h,e)}};
g.Gc=function(a){return document.createElement(String(a))};
g.Cc=function(a){return"CSS1Compat"==a.compatMode};
g.Hc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.Ic=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.Jc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
kaa=function(a){if(a&&"number"==typeof a.length){if(g.Ea(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Da(a))return"function"==typeof a.item}return!1};
g.Kc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.Lc=function(a){try{return!!a&&null!=a.location.href&&g.Gb(a,"foo")}catch(b){return!1}};
g.Mc=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.Nc=function(a){var b=[];g.Mc(a,function(a){b.push(a)});
return b};
maa=function(){var a=g.Gc("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};(0,g.z)(laa(),function(d){b.call(a,d)&&(c[d]=!0)});
return c};
Oc=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};
Pc=function(a,b){g.m.google_image_requests||(g.m.google_image_requests=[]);var c=g.m.document.createElement("img");if(b){var d=function(a){b&&b(a);c.removeEventListener&&c.removeEventListener("load",d,!1);c.removeEventListener&&c.removeEventListener("error",d,!1)};
Oc(c,"load",d);Oc(c,"error",d)}c.src=a;g.m.google_image_requests.push(c)};
g.Qc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Rc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Sc=function(a,b){a.style.width=g.Rc(b,!0)};
g.Tc=function(a,b){return typeof a===b};
g.Vc=function(){var a=void 0===a?g.Uc:a;try{return a.history.length}catch(b){return 0}};
g.Wc=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Vc();a.u_java=!!g.Uc.navigator&&!g.Tc(g.Uc.navigator.javaEnabled,"unknown")&&!!g.Uc.navigator.javaEnabled&&g.Uc.navigator.javaEnabled();g.Uc.screen&&(a.u_h=g.Uc.screen.height,a.u_w=g.Uc.screen.width,a.u_ah=g.Uc.screen.availHeight,a.u_aw=g.Uc.screen.availWidth,a.u_cd=g.Uc.screen.colorDepth);g.Uc.navigator&&g.Uc.navigator.plugins&&(a.u_nplug=g.Uc.navigator.plugins.length);g.Uc.navigator&&g.Uc.navigator.mimeTypes&&(a.u_nmime=g.Uc.navigator.mimeTypes.length)};
g.Xc=function(a){return!!a.google_async_iframe_id};
g.ad=function(){if(Yc&&!g.Lc(Zc)){var a="."+g.$c.domain;try{for(;2<a.split(".").length&&!g.Lc(Zc);)g.$c.domain=a=a.substr(a.indexOf(".")+1),Zc=window.parent}catch(b){}g.Lc(Zc)||(Zc=window)}return Zc};
g.bd=function(a,b){try{return(void 0===b?0:b)?(new g.wc(a.innerWidth,a.innerHeight)).round():g.Bc(a).round()}catch(c){return new g.wc(-12245933,-12245933)}};
cd=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
g.dd=function(a,b,c,d,e,h,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);h&&(l+="?"+h);k&&(l+="#"+k);return l};
g.ed=function(a){return a?decodeURI(a):a};
g.gd=function(a,b){return b.match(g.fd)[a]||null};
g.hd=function(a){return g.ed(g.gd(3,a))};
g.id=function(a){a=a.match(g.fd);return g.dd(null,null,null,null,a[5],a[6],a[7])};
g.jd=function(a){var b=a.indexOf("#");return 0>b?a:a.substr(0,b)};
g.kd=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.ld=function(a,b){return b?a?a+"&"+b:b:a};
g.md=function(a,b){if(!b)return a;var c=g.kd(a);c[1]=g.ld(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.nd=function(a,b,c){if(g.Ba(b))for(var d=0;d<b.length;d++)g.nd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.fb(b)))};
g.od=function(a){var b=[],c;for(c in a)g.nd(c,a[c],b);return b.join("&")};
g.pd=function(a,b){var c=g.od(b);return g.md(a,c)};
g.qd=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var h=a.charCodeAt(b-1);if(38==h||63==h)if(h=a.charCodeAt(b+e),!h||61==h||38==h||35==h)return b;b+=e+1}return-1};
g.sd=function(a,b){var c=a.search(g.rd),d=g.qd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.gb(a.substr(d,e-d))};
g.ud=function(a){var b=a||g.m,c=[],d=null;do{var e=b;if(g.Lc(e)){var h=e.location.href;d=e.document&&e.document.referrer||null}else h=d,d=null;c.push(new td(h||"",e));try{b=e.parent}catch(k){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||g.m;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.er=!0);return c};
naa=function(a,b){this.C=a;this.F=b};
td=function(a,b,c){this.url=a;this.Wg=b;this.er=!!c;this.depth=g.xa(void 0)?void 0:null};
vd=function(){this.D="&";this.G=g.ua(void 0)?void 0:"trn";this.H=!1;this.F={};this.L=0;this.C=[]};
wd=function(a,b){var c={};c[a]=b;return[c]};
yd=function(a,b,c,d,e){var h=[];g.Mc(a,function(a,l){var k=xd(a,b,c,d,e);k&&h.push(l+"="+k)});
return h.join(b)};
xd=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var h=[],k=0;k<a.length;k++)h.push(xd(a[k],b,c,d+1,e));return h.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(yd(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};
zd=function(a,b,c,d){a.C.push(b);a.F[b]=wd(c,d)};
oaa=function(a){if(!a.G)return 4E3;var b=1,c;for(c in a.F)b=c.length>b?c.length:b;return 4E3-a.G.length-b-a.D.length-1};
g.Ad=function(a,b,c,d,e){if(Math.random()<(d||.01))try{if(c instanceof vd)var h=c;else h=new vd,g.Mc(c,function(a,b){var c=h,d=c.L++,e=wd(b,a);c.C.push(d);c.F[d]=e});
var k=h.getUrl(a.C,"pagead2.googlesyndication.com","/pagead/gen_204?id="+b+"&","");k&&("undefined"===typeof e?Pc(k,null):Pc(k,void 0===e?null:e))}catch(l){}};
Cd=function(){var a=g.m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.Bd)()};
Dd=function(){var a=void 0===a?g.m:a;return(a=a.performance)&&a.now?a.now():null};
paa=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
Hd=function(){var a=Ed;this.events=[];this.F=a||g.m;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.C=Gd()||(null!=b?b:1>Math.random())};
g.Jd=function(a){a&&Id&&Gd()&&(Id.clearMarks("goog_"+a.uniqueId+"_start"),Id.clearMarks("goog_"+a.uniqueId+"_end"))};
Md=function(){var a=Kd;this.D=g.Ld;this.G=this.F;this.C=void 0===a?null:a};
g.Pd=function(a){return new Nd(g.Od(a),a.fileName,a.lineNumber)};
g.Od=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
Nd=function(a,b,c){cd.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
g.Qd=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var h=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,h,k]};
Sd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
qaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;y=t=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],h=e[2],l=e[3],p=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var t=l^d&(h^l);var y=1518500249}else t=d^h^l,y=1859775393;else 60>c?(t=d&h|l&(d|h),y=2400959708):(t=d^h^l,y=3395469782);t=((a<<5|a>>>27)&4294967295)+t+p+y+b[c]&4294967295;p=l;l=h;h=(d<<30|d>>>2)&4294967295;d=a;a=t}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+h&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+p&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==t)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64;for(;d<c;)if(h[t++]=a[d++],y++,64==t)for(t=0,b(h);d+64<c;)b(a.slice(d,d+64)),d+=64,y+=64}
function d(){var a=[],d=8*y;56>t?c(l,56-t):c(l,64-(t-56));for(var k=63;56<=k;k--)h[k]=d&255,d>>>=8;b(h);for(k=d=0;5>k;k++)for(var p=24;0<=p;p-=8)a[d++]=e[k]>>p&255;return a}
for(var e=[],h=[],k=[],l=[128],p=1;64>p;++p)l[p]=0;var t,y;a();return{reset:a,update:c,digest:d,Tw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
raa=function(a,b,c){var d=[],e=[];if(1==(g.Ba(c)?2:1))return e=[b,a],(0,g.z)(d,function(a){e.push(a)}),Td(e.join(" "));
var h=[],k=[];(0,g.z)(c,function(a){k.push(a.key);h.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Na(h)?[c,b,a]:[h.join(":"),c,b,a];(0,g.z)(d,function(a){e.push(a)});
a=Td(e.join(" "));a=[c,a];g.Na(k)||a.push(k.join(""));return a.join("_")};
Td=function(a){var b=qaa();b.update(a);return b.Tw().toLowerCase()};
Ud=function(a){var b=Sd(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.Tb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.Tb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.m.location.href);return d&&b&&c?[c,raa(Sd(d),b,a||null)].join(" "):null}return null};
g.Vd=function(){this.Zc=this.Zc;this.Rf=this.Rf};
g.Yd=function(a,b){g.Wd(a,g.u(g.Xd,b))};
g.Wd=function(a,b){a.Zc?g.ua(void 0)?b.call(void 0):b():(a.Rf||(a.Rf=[]),a.Rf.push(g.ua(void 0)?(0,g.r)(b,void 0):b))};
g.Xd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Zd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Tt=!0};
g.$d=function(a,b){g.Zd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.zc=null;a&&this.init(a,b)};
g.be=function(a){return!(!a||!a[ae])};
taa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Hh=e;this.key=++saa;this.Og=this.Ei=!1};
ce=function(a){a.Og=!0;a.listener=null;a.C=null;a.src=null;a.Hh=null};
g.de=function(a){this.src=a;this.listeners={};this.C=0};
fe=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Pa(a.listeners[c],b);d&&(ce(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
ge=function(a,b,c,d){for(var e=0;e<a.length;++e){var h=a[e];if(!h.Og&&h.listener==b&&h.capture==!!c&&h.Hh==d)return e}return-1};
g.ie=function(a,b,c,d,e){if(d&&d.once)return g.he(a,b,c,d,e);if(g.Ba(b)){for(var h=0;h<b.length;h++)g.ie(a,b[h],c,d,e);return null}c=g.je(c);return g.be(a)?a.N(b,c,g.Ea(d)?!!d.capture:!!d,e):ke(a,b,c,!1,d,e)};
ke=function(a,b,c,d,e,h){if(!b)throw Error("Invalid event type");var k=g.Ea(e)?!!e.capture:!!e,l=g.le(a);l||(a[me]=l=new g.de(a));c=l.add(b,c,d,k,h);if(c.C)return c;d=uaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)vaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ne(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");oe++;return c};
uaa=function(){var a=waa,b=pe?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.he=function(a,b,c,d,e){if(g.Ba(b)){for(var h=0;h<b.length;h++)g.he(a,b[h],c,d,e);return null}c=g.je(c);return g.be(a)?a.Ve(b,c,g.Ea(d)?!!d.capture:!!d,e):ke(a,b,c,!0,d,e)};
g.qe=function(a,b,c,d,e){if(g.Ba(b))for(var h=0;h<b.length;h++)g.qe(a,b[h],c,d,e);else d=g.Ea(d)?!!d.capture:!!d,c=g.je(c),g.be(a)?a.Wa(b,c,d,e):a&&(a=g.le(a))&&(b=a.uf(b,c,d,e))&&g.re(b)};
g.re=function(a){if(g.xa(a)||!a||a.Og)return!1;var b=a.src;if(g.be(b))return fe(b.Jd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ne(c),d):b.addListener&&b.removeListener&&b.removeListener(d);oe--;(c=g.le(b))?(fe(c,a),0==c.C&&(c.src=null,b[me]=null)):ce(a);return!0};
ne=function(a){return a in se?se[a]:se[a]="on"+a};
ue=function(a,b,c,d){var e=!0;if(a=g.le(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var h=b[a];h&&h.capture==c&&!h.Og&&(h=te(h,d),e=e&&!1!==h)}return e};
te=function(a,b){var c=a.listener,d=a.Hh||a.src;a.Ei&&g.re(a);return c.call(d,b)};
waa=function(a,b){if(a.Og)return!0;if(!pe){var c=b||g.q("window.event"),d=new g.$d(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var h=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(p){h=!0}if(h||void 0==c.returnValue)c.returnValue=!0}c=[];for(h=d.currentTarget;h;h=h.parentNode)c.push(h);h=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=ue(c[k],h,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=ue(c[k],h,!1,d),e=e&&l}return e}return te(a,new g.$d(b,
this))};
g.le=function(a){a=a[me];return a instanceof g.de?a:null};
g.je=function(a){if(g.Da(a))return a;a[ve]||(a[ve]=function(b){return a.handleEvent(b)});
return a[ve]};
g.we=function(){g.Vd.call(this);this.Jd=new g.de(this);this.cw=this;this.Rm=null};
xe=function(a,b,c,d){b=a.Jd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,h=0;h<b.length;++h){var k=b[h];if(k&&!k.Og&&k.capture==c){var l=k.listener,p=k.Hh||k.src;k.Ei&&fe(a.Jd,k);e=!1!==l.call(p,d)&&e}}return e&&0!=d.Tt};
ye=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
ze=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
Ae=function(a){g.m.setTimeout(function(){throw a;},0)};
xaa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.kb("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.r)(function(a){if(("*"==d||a.origin==
d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.yb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ua(c.next)){c=c.next;var a=c.Go;c.Go=null;a()}};
return function(a){d.next={Go:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
Be=function(){this.F=this.C=null};
Ce=function(){this.next=this.scope=this.yc=null};
Ge=function(a,b){De||yaa();Ee||(De(),Ee=!0);Fe.add(a,b)};
yaa=function(){if(g.m.Promise&&g.m.Promise.resolve){var a=g.m.Promise.resolve(void 0);De=function(){a.then(He)}}else De=function(){var a=He;
!g.Da(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.kb("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(Ie||(Ie=xaa()),Ie(a)):g.m.setImmediate(a)}};
He=function(){for(var a;a=Fe.remove();){try{a.yc.call(a.scope)}catch(b){Ae(b)}ze(Je,a)}Ee=!1};
g.Ke=function(a){a.prototype.$goog_Thenable=!0};
g.Le=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Ne=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.ya)try{var c=this;a.call(b,function(a){g.Me(c,2,a)},function(a){g.Me(c,3,a)})}catch(d){g.Me(this,3,d)}};
Oe=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
Qe=function(a,b,c){var d=Pe.get();d.F=a;d.onRejected=b;d.context=c;return d};
zaa=function(a,b,c){Re(a,b,c,null)||Ge(g.u(b,a))};
g.Se=function(a){return new g.Ne(function(b,c){var d=a.length,e=[];if(d)for(var h=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],zaa(p,g.u(h,l),k);
else b(e)})};
g.Ue=function(a,b){return Te(a,null,b,void 0)};
Ve=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,h=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(h=k);e&&(0==c.C&&1==d?Ve(c,b):(h?(d=h,d.next==c.G&&(c.G=d),d.next=d.next.next):We(c),Xe(c,e,3,b)))}a.D=null}else g.Me(a,3,b)};
Ze=function(a,b){a.F||2!=a.C&&3!=a.C||Ye(a);a.G?a.G.next=b:a.F=b;a.G=b};
Te=function(a,b,c,d){var e=Qe(null,null,null);e.C=new g.Ne(function(a,k){e.F=b?function(c){try{var e=b.call(d,c);a(e)}catch(t){k(t)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!g.ua(e)&&b instanceof g.$e?k(b):a(e)}catch(t){k(t)}}:k});
e.C.D=a;Ze(a,e);return e.C};
g.Me=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Re(c,a.X,a.O,a)||(a.R=c,a.C=b,a.D=null,Ye(a),3!=b||c instanceof g.$e||Aaa(a,c)))};
Re=function(a,b,c,d){if(a instanceof g.Ne)return Ze(a,Qe(b||g.ya,c||null,d)),!0;if(g.Le(a))return a.then(b,c,d),!0;if(g.Ea(a))try{var e=a.then;if(g.Da(e))return Baa(a,e,b,c,d),!0}catch(h){return c.call(d,h),!0}return!1};
Baa=function(a,b,c,d,e){function h(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,h)}catch(p){h(p)}};
Ye=function(a){a.L||(a.L=!0,Ge(a.J,a))};
We=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Xe=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,af(b,c,d);else try{b.D?b.F.call(b.context):af(b,c,d)}catch(e){bf.call(null,e)}ze(Pe,b)};
af=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Aaa=function(a,b){a.H=!0;Ge(function(){a.H&&bf.call(null,b)})};
g.$e=function(a){g.Ha.call(this,a)};
g.cf=function(a,b,c){if(g.Da(a))c&&(a=(0,g.r)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.r)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.df=function(a){g.m.clearTimeout(a)};
g.ef=function(a,b,c){g.Vd.call(this);this.C=a;this.D=b||0;this.F=c;this.hc=(0,g.r)(this.Op,this)};
Caa=function(){this.F=-1};
ff=function(){this.F=64;this.C=[];this.L=[];this.R=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
gf=function(a,b,c){c||(c=0);var d=a.R;if(g.va(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var h=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(h<<1|h>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],p=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){h=l^c&(k^l);var t=1518500249}else h=c^k^l,t=1859775393;else 60>e?(h=c&k|l&(c|k),t=2400959708):(h=c^k^l,
t=3395469782);h=(b<<5|b>>>27)+h+p+t+d[e]&4294967295;p=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=h}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+p&4294967295};
g.hf=function(a){if(a.classList)return a.classList;a=a.className;return g.va(a)&&a.match(/\S+/g)||[]};
g.A=function(a,b){return a.classList?a.classList.contains(b):g.Ma(g.hf(a),b)};
g.jf=function(){};
lf=function(a){if(a instanceof g.jf)return a;if("function"==typeof a.td)return a.td(!1);if(g.Ca(a)){var b=0,c=new g.jf;c.next=function(){for(;;){if(b>=a.length)throw g.kf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.mf=function(a,b,c){if(g.Ca(a))try{(0,g.z)(a,b,c)}catch(d){if(d!==g.kf)throw d;}else{a=lf(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.kf)throw d;}}};
Daa=function(a){if(g.Ca(a))return g.Qa(a);a=lf(a);var b=[];g.mf(a,function(a){b.push(a)});
return b};
g.of=function(a,b){this.F={};this.C=[];this.af=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.nf(this,a)};
Eaa=function(a,b){return a===b};
g.qf=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.pf(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.pf(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.nf=function(a,b){if(b instanceof g.of)for(var c=b.Oc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.pf=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.sf=function(a){var b=[];rf(new Faa,a,b);return b.join("")};
Faa=function(){};
rf=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.Ba(b)){var d=b;b=d.length;c.push("[");for(var e="",h=0;h<b;h++)c.push(e),rf(a,d[h],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=b[d],"function"!=typeof h&&(c.push(e),tf(d,c),c.push(":"),rf(a,h,c),e=","));c.push("}");return}}switch(typeof b){case "string":tf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
tf=function(a,b){b.push('"',a.replace(Gaa,function(a){var b=uf[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),uf[a]=b);return b}),'"')};
g.vf=function(a){g.Vd.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.wf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ka(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.Dd(b)}};
Haa=function(a,b,c){Ge(function(){a.apply(b,c)})};
g.xf=function(a){this.C=a};
yf=function(a){this.C=a};
zf=function(a){this.data=a};
Af=function(a){return!g.ua(a)||a instanceof zf?a:new zf(a)};
g.Bf=function(a){this.C=a};
g.Cf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Bd)()||!!b&&b>(0,g.Bd)()};
Iaa=function(){};
Df=function(){};
g.Ef=function(a){this.C=a};
g.Ff=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Hf=function(a,b){this.F=a;this.C=null;if(g.w.ma&&!g.w.Bc(9)){Gf||(Gf=new g.of);this.C=Gf.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),Gf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
If=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Jaa[a]})};
Jf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
Kf=function(a){return a.C.XMLDocument.documentElement};
Lf=function(a,b){this.F=a;this.C=b+"::"};
g.Mf=function(a){var b=new g.Ff;return b.isAvailable()?a?new Lf(b,a):b:null};
Nf=function(){this.C=[];this.F=-1};
Kaa=function(a){-1==a.F&&(a.F=(0,g.Of)(a.C,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.F};
g.Pf=function(){var a=new Nf;g.m.SVGElement&&g.m.document.createElementNS&&a.set(0);var b=maa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.m.crypto&&g.m.crypto.subtle&&a.set(3);return Kaa(a)};
g.Qf=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
Rf=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.Tf=function(a){Rf(g.Sf,arguments)};
Uf=function(a,b){var c=g.B(a,void 0);c?c.push(b):g.Tf(a,[b])};
g.B=function(a,b){return a in g.Sf?g.Sf[a]:b};
Vf=function(a){var b=g.Sf.EXPERIMENT_FLAGS;return b?b[a]:void 0};
Xf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Wf(b)}}:a};
g.Wf=function(a,b,c,d,e){var h=g.q("yt.logging.errors.log");h?h(a,b,c,d,e):(h=g.B("ERRORS",[]),h.push([a,b,c,d,e]),g.Tf("ERRORS",h))};
g.Yf=function(a){g.Wf(a,"WARNING",void 0,void 0,void 0)};
Laa=function(a,b,c,d,e){var h=!1,k=Vf("log_window_onerror_fraction");if(k&&Math.random()<k)h=!0;else{k=document.getElementsByTagName("script");for(var l=0,p=k.length;l<p;l++)if(0<k[l].src.indexOf("/debug-")){h=!0;break}}h&&(e||(g.va(a)?h=a:ErrorEvent&&a instanceof ErrorEvent?(h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),a=Error(h),a.name="UnhandledWindowError",e=a,e.message=h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),g.Wf(e))};
g.C=function(a,b){return a?a.dataset?a.dataset[g.Zf(b)]:a.getAttribute("data-"+b):null};
g.Zf=function(a){return $f[a]||($f[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.ag=function(a,b){g.Da(a)&&(a=Xf(a));return window.setTimeout(a,b)};
g.bg=function(a,b){g.Da(a)&&(a=Xf(a));return window.setInterval(a,b)};
g.cg=function(a){window.clearTimeout(a)};
g.dg=function(a){window.clearInterval(a)};
g.D=function(a,b,c){var d=eg();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){fg[e]&&b.apply(c||window,d)};
try{gg[a]?k():g.ag(k,0)}catch(l){g.Wf(l)}},c);
fg[e]=!0;hg[a]||(hg[a]=[]);hg[a].push(e);return e}return 0};
g.ig=function(a){var b=eg();b&&(g.xa(a)?a=[a]:g.va(a)&&(a=[parseInt(a,10)]),(0,g.z)(a,function(a){b.unsubscribeByKey(a);delete fg[a]}))};
g.E=function(a,b){var c=eg();return c?c.publish.apply(c,arguments):!1};
g.jg=function(a,b){gg[a]=!0;var c=eg();c=c?c.publish.apply(c,arguments):!1;gg[a]=!1;return c};
eg=function(){return g.q("ytPubsubPubsubInstance")};
g.lg=function(a,b){var c=g.kg(a);spf.script.load(a,c,b)};
g.mg=function(a){a=g.kg(a);spf.script.unload(a)};
g.kg=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Maa,""),b=b.replace(Naa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.ng=function(){this.F=!1;this.C=null};
og=function(a,b,c){try{a.C=new botguard.bg(b)}catch(d){g.Yf(d)}c&&c(b)};
g.pg=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
Oaa=function(){};
g.rg=function(a,b){return qg(a,0,b)};
g.sg=function(a,b){return qg(a,1,b)};
g.ug=function(a){for(var b=0,c=a.length;b<c;b++)g.tg(a[b])};
vg=function(){};
g.wg=function(){return!!g.q("yt.scheduler.instance")};
qg=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.ag(a,c||0)};
g.tg=function(a){if(!isNaN(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.cg(a)}};
Paa=function(){return parseInt(g.B("DCLKSTAT",0),10)};
g.yg=function(a){return!!xg(a)};
g.zg=function(a,b){var c=xg(a);return void 0===c&&void 0!==b?b:Number(c||0)};
xg=function(a){return g.B("EXPERIMENT_FLAGS",{})[a]};
Qaa=function(){return g.Ag.fe()};
Raa=function(a){a=void 0===a?{}:a;return g.pg(g.Ag,a)};
g.Bg=function(a){var b=[];g.lb(a,function(a,d){var c=g.fb(d),h;g.Ba(a)?h=a:h=[a];(0,g.z)(h,function(a){""==a?b.push(c):b.push(c+"="+g.fb(a))})});
return b.join("&")};
g.Cg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var h=g.gb(e[0]||""),k=g.gb(e[1]||"");h in b?g.Ba(b[h])?g.Ra(b[h],k):b[h]=[b[h],k]:b[h]=k}catch(p){if(g.yg("catch_invalid_url_components")){var l=Error("Error decoding URL component.");l.params="key: "+e[0]+", value: "+e[1];g.Wf(l)}else throw p;}}return b};
g.Eg=function(a,b){return g.Dg(a,b||{},!0)};
g.Dg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Cg(e[1]||"");for(var h in b)if(c||!g.nb(e,h))e[h]=b[h];return g.pd(a,e)+d};
g.Ig=function(a){var b=g.Fg;a=void 0===a?g.q("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.Gg(b),g.Hg(b));b.ca_type="image";a&&(b.bid=a);return b};
g.Gg=function(a){var b={};b.dt=g.Jg;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Wc(b);return b};
g.Hg=function(a){var b=g.Qd(a.C),c=g.bd(a.C.top),d={};return d.bc=g.Pf(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Qf(a.F),d.wgl=!!g.Uc.WebGLRenderingContext,d};
Saa=function(){if(!Kg)return null;var a=Kg();return"open"in a?a:null};
g.Mg=function(a){switch(g.Lg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Lg=function(a){return a&&"status"in a?a.status:-1};
Taa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.gd(1,a),e=g.hd(a);d&&e?(d=c,c=a.match(g.fd),d=d.match(g.fd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.hd(c)==e&&(Number(g.gd(4,c))||null)==(Number(g.gd(4,a))||null):!0;d=g.yg("web_ajax_ignore_global_headers_if_set");for(var h in Ng)e=g.B(Ng[h]),!e||!c&&!Qg(a,h)||d&&void 0!==b[h]||(b[h]=e);if(c||Qg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();g.yg("pass_biscotti_id_in_header_ajax")&&
(c||Qg(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=g.Bg(g.Ig()));return b};
Vaa=function(a){var b=window.location.search,c=g.hd(a),d=g.ed(g.gd(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.Cg(b),h={};(0,g.z)(Uaa,function(a){e[a]&&(h[a]=e[a])});
return g.Dg(a,h||{},!1)};
Qg=function(a,b){var c=g.B("CORS_HEADER_WHITELIST")||{},d=g.hd(a);return d?(c=c[d])?g.Ma(c,b):!1:!0};
Waa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Rg(a,b);var d=Sg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,h;fetch(a,c).then(function(a){if(!e){e=!0;h&&g.cg(h);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.m;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Za&&b.Za.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.qs&&0<b.timeout&&(h=g.ag(function(){e||(e=!0,g.cg(h),b.qs.call(b.context||g.m))},b.timeout))}else g.F(a,b)};
g.F=function(a,b){var c=b.format||"JSON";a=Rg(a,b);var d=Sg(a,b),e=!1,h,k=Tg(a,function(a){if(!e){e=!0;h&&g.cg(h);var d=g.Mg(a),k=null,l=400<=a.status&&500>a.status,H=500<=a.status&&600>a.status;if(d||l||H)k=Xaa(c,a,b.qb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};l=b.context||g.m;d?b.onSuccess&&b.onSuccess.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Za&&b.Za.call(l,a,k)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Uc&&0<b.timeout&&(h=g.ag(function(){e||(e=!0,k.abort(),g.cg(h),b.Uc.call(b.context||g.m,k))},b.timeout));
return k};
Rg=function(a,b){b.HB&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.B("XSRF_FIELD_NAME",void 0),d=b.Qa;d&&(d[c]&&delete d[c],a=g.Eg(a,d));return a};
Sg=function(a,b){var c=g.B("XSRF_FIELD_NAME",void 0),d=g.B("XSRF_TOKEN",void 0),e=b.postBody||"",h=b.ia,k=g.B("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.jx||g.hd(a)&&!b.withCredentials&&g.hd(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(h||(h={}),h[c]=d);h&&g.va(e)&&(e=g.Cg(e),g.wb(e,h),e=b.nt&&"JSON"==b.nt?JSON.stringify(e):g.od(e));h=e||h&&!g.pb(h);!Ug&&h&&"POST"!=b.method&&(Ug=!0,g.Wf(Error("AJAX request with postData should use POST")));
return e};
Xaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Vg(b):null)d={},(0,g.z)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.Wg(a)})}c&&Xg(d);
return d};
Xg=function(a){if(g.Ea(a))for(var b in a)"html_content"==b||g.Ta(b,"_html")?a[b]=g.pc(a[b],null):Xg(a[b])};
Vg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Wg=function(a){var b="";(0,g.z)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Yg=function(a,b){b.method="POST";b.ia||(b.ia={});return g.F(a,b)};
Tg=function(a,b,c,d,e,h,k){function l(){4==(p&&"readyState"in p?p.readyState:0)&&b&&Xf(b)(p)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var p=Saa();if(!p)return null;"onloadend"in p?p.addEventListener("loadend",l,!1):p.onreadystatechange=l;g.yg("debug_forward_web_query_parameters")&&(a=Vaa(a));p.open(c,a,!0);h&&(p.responseType=h);k&&(p.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Taa(a,e))for(var t in e)p.setRequestHeader(t,e[t]),"content-type"==t.toLowerCase()&&(c=!1);c&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded");p.send(d);
return p};
Zg=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.$g=function(a){var b=new Zg;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.ah=function(a){var b=new Zg;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.ch=function(a){var b=a.__yt_uid_key;b||(b=bh(),a.__yt_uid_key=b);return b};
g.dh=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Yaa+"VisibilityState";if(b in a)return a[b]};
g.eh=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Zaa||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
fh=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.gh=function(a){g.ua(a.C)||fh(a);return a.C};
g.hh=function(a){g.ua(a.F)||fh(a);return a.F};
g.jh=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.ob(ih,function(e){var h=g.wa(e[4])&&e[4]==!!d,k=g.Ea(e[4])&&g.Ea(d)&&g.sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(h||k)})};
g.G=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.jh(a,b,c,d);if(e)return e;e=++kh.count+"";var h=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=h?function(d){d=new g.eh(d);if(!g.Kc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.eh(b);
b.currentTarget=a;return c.call(a,b)};
k=Xf(k);a.addEventListener?("mouseenter"==b&&h?b="mouseover":"mouseleave"==b&&h?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),lh()||g.wa(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);ih[e]=[a,b,c,k,d];return e};
g.I=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.z)(a,function(a){if(a in ih){var b=ih[a],d=b[0],e=b[1],h=b[3];b=b[4];d.removeEventListener?lh()||g.wa(b)?d.removeEventListener(e,h,b):d.removeEventListener(e,h,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,h);delete ih[a]}}))};
g.mh=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.G(a,b,function(){g.I(e);c.apply(a,arguments)},d)};
g.nh=function(a){for(var b in ih)ih[b][0]==a&&g.I(b)};
g.oh=function(a){this.hc=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.G(window,"mousemove",(0,g.r)(this.X,this));this.O=g.bg((0,g.r)(this.R,this),25)};
ph=function(){g.Vd.call(this);this.C=[]};
qh=function(a){a=a||{};var b={enablejsapi:1},c={};this.url=a.url||"";this.args=a.args||g.tb(b);this.assets=a.assets||{};this.attrs=a.attrs||g.tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.rh=function(a){a instanceof qh||(a=new qh(a));return a};
g.uh=function(a,b,c,d,e,h){h=h||{};h.name=c||g.B("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=d||g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=sh||(e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),h.params=d.substr(0,500)),a=g.Wb(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&g.Da(window.yterr)&&
window.yterr(a),th[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Qa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":h.name},ia:{url:g.B("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};h.version&&(b["client.version"]=h.version);e&&(b.ia.stack=e);for(var k in h)b.ia["client."+k]=h[k];if(k=g.B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ia[l]=k[l];g.F(g.B("ECATCHER_REPORT_HOST","")+
"/error_204",b);th[a.message]=!0;sh++}};
g.Ah=function(){g.cg(g.vh);g.cg(g.wh);g.wh=0;if(!g.pb(g.xh)){for(var a in g.xh){var b=yh[a];b&&($aa(a,b),delete g.xh[a])}g.pb(g.xh)||g.zh()}};
aba=function(){var a=[];for(e in g.xh){var b=Bh[e]||{};Bh[e]=b;for(var c in g.xh[e]){var d=Ch(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.Dh());for(var h in Bh)b=Bh[h],b.eventType=h in Eh?Eh[h]:"UNKNOWN_TYPE",c=Fh[h],b.metricIntervalMs=c?e-c:e-g.Gh,a.push(b),Fh[h]=e,delete Bh[h];return a};
g.zh=function(){g.yg("web_gel_timeout_cap")&&!g.wh&&(g.wh=g.ag(g.Ah,3E4));g.cg(g.vh);var a=g.zg("web_gel_debounce_ms",1E4);g.vh=g.ag(g.Ah,g.B("LOGGING_BATCH_TIMEOUT",g.Hh||a))};
Ch=function(a,b){b=void 0===b?"":b;g.xh[a]=g.xh[a]||{};g.xh[a][b]=g.xh[a][b]||[];return g.xh[a][b]};
$aa=function(a,b){var c=bba[a],d=Bh[a]||{};Bh[a]=d;var e=Math.round(g.Dh());for(t in g.xh[a]){var h=g.ub({context:g.Ih(b.C)});h[c]=Ch(a,t);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=h[c].length;var k=Jh[t];if(k)a:{var l=t;if(k.videoId)var p="VIDEO";else if(k.playlistId)p="PLAYLIST";else break a;h.credentialTransferTokenTargetId=k;h.context=h.context||{};h.context.user=h.context.user||{};h.context.user.credentialTransferTokens=[{token:l,scope:p}]}delete Jh[t];h.requestTimeMs=
e;if(k=g.B("EVENT_ID",void 0))p=(g.B("BATCH_CLIENT_COUNTER",void 0)||0)+1,p>cba&&(p=1),g.Tf("BATCH_CLIENT_COUNTER",p),k={serializedEventId:k,clientCounter:p},h.serializedClientEventId=k,Kh&&Lh&&g.yg("log_gel_rtt_web")&&(h.previousBatchInfo={serializedClientEventId:Kh,roundtripMs:Lh}),Kh=k,Lh=0;g.Mh(b,a,h,{retry:dba.has(a),onSuccess:(0,g.r)(eba,this,g.Dh())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var t=d.diffCount||0;d.averageTimeBetweenDispatchesMs=t?(d.averageTimeBetweenDispatchesMs*
t+c)/(t+1):c;d.diffCount=t+1}d.previousDispatchMs=e};
eba=function(a){Lh=Math.round(g.Dh()-a)};
g.Ph=function(a){var b=void 0===a?{}:a;a=void 0===b.IB?!0:b.IB;b=void 0===b.DJ?!1:b.DJ;if(null==g.q("_lact",window)){var c=parseInt(g.B("LACT"),10);c=isFinite(c)?(0,g.Bd)()-Math.max(c,0):-1;g.n("_lact",c,window);g.n("_fact",c,window);-1==c&&g.Nh();g.G(document,"keydown",g.Nh);g.G(document,"keyup",g.Nh);g.G(document,"mousedown",g.Nh);g.G(document,"mouseup",g.Nh);a&&(b?g.G(window,"touchmove",function(){Oh("touchmove",200)},{passive:!0}):(g.G(window,"resize",function(){Oh("resize",200)}),g.G(window,
"scroll",function(){Oh("scroll",200)})));
new g.oh(function(){Oh("mouse",100)});
g.G(document,"touchstart",g.Nh,{passive:!0});g.G(document,"touchend",g.Nh,{passive:!0})}};
Oh=function(a,b){Qh[a]||(Qh[a]=!0,g.sg(function(){g.Nh();Qh[a]=!1},b))};
g.Nh=function(){null==g.q("_lact",window)&&g.Ph();var a=(0,g.Bd)();g.n("_lact",a,window);-1==g.q("_fact",window)&&g.n("_fact",a,window);(a=g.q("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Rh=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.Bd)()-a,0)};
g.Sh=function(a,b,c,d,e){var h={};h.eventTimeMs=Math.round(d||g.Dh());h[a]=b;h.context={lastActivityMs:String(d?-1:g.Rh())};e?(a={},e.videoId?a.videoId=e.videoId:e.playlistId&&(a.playlistId=e.playlistId),Jh[e.token]=a,e=Ch("log_event",e.token)):e=Ch("log_event");e.push(h);c&&(yh.log_event=new c);e.length>=(g.zg("web_logging_max_batch")||20)?g.Ah():g.zh()};
g.Ih=function(a){a={client:{hl:a.PB,gl:a.OB,clientName:a.MB,clientVersion:a.NB}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.B("DELEGATED_SESSION_ID")&&!g.yg("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.B("DELEGATED_SESSION_ID")});return a};
Th=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.B("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.SW||g.B("AUTHORIZATION"))||(a?b="Bearer "+g.q("gapi.auth.getToken")().RW:b=Ud([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.B("SESSION_INDEX",0),g.yg("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.B("DELEGATED_SESSION_ID")));return d};
Uh=function(a){a=Object.assign({},a);delete a.Authorization;var b=Ud();if(b){var c=new ff;c.update(g.B("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Kb(c.digest(),!0)}return a};
g.Wh=function(a,b,c,d){g.Vh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Xh=function(a,b,c){g.Vh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.Yh=function(a){var b;(b=g.Mf(a))||(a=new Hf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.Bf(a):null;this.F=document.domain||window.location.hostname};
fba=function(a,b,c,d){if(d)return null;d=Zh.get("nextId",!0)||1;var e=Zh.get("requests",!0)||{};e[d]={method:a,request:b,authState:Uh(c),requestTime:Math.round(g.Dh())};Zh.set("nextId",d+1,86400,!0);Zh.set("requests",e,86400,!0);return d};
$h=function(a){var b=Zh.get("requests",!0)||{};delete b[a];Zh.set("requests",b,86400,!0)};
ai=function(a){var b=Zh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.Dh())-d.requestTime)){var e=d.authState,h=Uh(Th(!1));g.sb(e,h)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.Dh())),g.Mh(a,d.method,e,{}));delete b[c]}}Zh.set("requests",b,86400,!0)}};
g.bi=function(a){var b=this;this.C=a||{KB:g.B("INNERTUBE_API_KEY",void 0),LB:g.B("INNERTUBE_API_VERSION",void 0),MB:g.B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),NB:g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),PB:g.B("INNERTUBE_CONTEXT_HL",void 0),OB:g.B("INNERTUBE_CONTEXT_GL",void 0),QB:g.B("INNERTUBE_HOST_OVERRIDE",void 0)||"",RB:!!g.B("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.rg(function(){ai(b)},5E3)};
g.Mh=function(a,b,c,d){!g.B("VISITOR_DATA")&&.01>Math.random()&&g.Wf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,nt:"JSON",Uc:function(){d.Uc()},
qs:d.Uc,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
Kj:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
os:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},h="",k=a.C.QB;k&&(h=k);k=a.C.RB||!1;var l=Th(k,h,d);Object.assign(e.headers,l);e.headers.Authorization&&!h&&(e.headers["x-origin"]=window.location.origin);var p=""+h+("/youtubei/"+a.C.LB+"/"+b)+"?alt=json&key="+a.C.KB,t;if(d.retry&&g.yg("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=h&&(t=fba(b,c,l,k))){var y=e.onSuccess,H=e.Kj;e.onSuccess=function(a,b){$h(t);y(a,b)};
c.Kj=function(a,b){$h(t);H(a,b)}}try{g.yg("use_fetch_for_op_xhr")?Waa(p,e):g.Yg(p,e)}catch(J){if("InvalidAccessError"==J)t&&($h(t),t=0),g.Wf(Error("An extension is blocking network request."),"WARNING");
else throw J;}t&&g.rg(function(){ai(a)},5E3)};
g.ci=function(a,b,c){var d=g.bi;g.B("ytLoggingEventsDefaultDisabled",!1)&&g.bi==g.bi&&(d=null);g.Sh(a,b,d,c,void 0)};
g.di=function(){g.yg("log_web_meta")&&aba().forEach(function(a){g.ci("delayedEventMetricCaptured",a)})};
g.ei=function(a){this.C=a};
g.fi=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.fi(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.gi=function(a,b,c){(0,g.z)(b,function(b){g.Sh("visualElementHidden",{csn:a,ve:g.fi(b),eventType:c?16:8},g.bi,void 0,void 0)})};
ii=function(a,b){var c=Object.keys(a).join("");hi("info_"+c+"_"+b)||(a.clientActionNonce=b,g.ci("latencyActionInfo",a))};
hi=function(a){ji[a]=ji[a]||{count:0};var b=ji[a];b.count++;b.time=g.Dh();ki||(ki=g.rg(gba,5E3));if(10<b.count){if(11==b.count){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;g.uh(c,b)}return!0}return!1};
gba=function(){var a=g.Dh(),b;for(b in ji)6E4<a-ji[b].time&&delete ji[b];ki=0};
mi=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Bd)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(li)for(a=1,b=0;b<li.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^li.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.ri=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(ni==a)return;ni=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Rh()>b)&&"visible"==g.dh()){b=-1;g.oi&&(b=Math.round(g.Dh()-g.oi));var c=String;var d=g.q("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Bd)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:pi,index:String(qi),lastEventDeltaMs:String(b),trigger:a};g.Sh("foregroundHeartbeat",
a,g.bi);g.n("_fact",-1,window);qi++;g.oi=g.Dh()}};
g.si=function(a){a&&g.Sh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:pi,clientScreenNonce:a},g.bi)};
ti=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
ui=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
vi=function(a){return g.B(ui(void 0===a?0:a),void 0)};
g.wi=function(){var a=vi(0),b;a?b=new g.ei({veType:a,youtubeData:void 0}):b=null;return b};
g.xi=function(a){a=void 0===a?0:a;var b=g.B(ti(a));b||0!=a||(b=g.B("EVENT_ID"));return b?b:null};
g.yi=function(a,b,c){c=void 0===c?0:c;if(a!==g.B(ti(c))||b!==g.B(ui(c)))g.Tf(ti(c),a),g.Tf(ui(c),b),0==c&&(b=function(){setTimeout(function(){g.si(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
zi=function(){var a=g.wi(),b=g.xi();b&&a&&g.gi(b,[a],!0)};
g.Ai=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Xf(d):null;this.H=e?Xf(e):null;this.G=[];this.C=this.F=0};
g.Bi=function(a){g.tg(a.F);a.F=g.sg((0,g.r)(a.init,a))};
g.Ei=function(a){a.name in Ci&&Di(a.name);Ci[a.name]={reqs:[],disable:(0,g.r)(a.disable,a)};(0,g.z)(a.deps,function(b){if(!(b in Ci))throw Error("Module "+b+" required by "+a.name);Ci[b].reqs.push(a.name)});
a.enable()};
Di=function(a){if(a in Ci){var b=Ci[a];(0,g.z)(b.reqs,function(a){Di(a)});
try{b.disable()}catch(c){}delete Ci[a]}};
Gi=function(a){Rf(g.Fi,arguments)};
g.Hi=function(a){return a in g.Fi};
Ii=function(a){Rf(g.Fi,arguments)};
g.Ki=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.w.dd(),c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.ac(g.ec(a)),"about:invalid#zClosurez"===a?a="":(a=g.oc(g.qc(a)),a=g.fb(g.sf(a))),g.Ua(a)||(a=g.Ec("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.Jc(a).body.appendChild(a))):e?Tg(a,b,"POST",e,d):g.B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Tg(a,b,"GET","",d):(Vf("web_use_beacon_api_for_ad_click_server_pings")&&-1!=g.ed(g.gd(5,a)).indexOf("/aclk")&&
"1"===g.sd(a,"ae")&&"1"===g.sd(a,"act")?Ji(a)?(b&&b(),d=!0):d=!1:d=!1,d||hba(a,b)))};
Ji=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
hba=function(a,b){var c=new Image,d=""+iba++;Li[d]=c;c.onload=c.onerror=function(){b&&Li[d]&&b();delete Li[d]};
c.src=a};
g.Mi=function(a,b){a=a||"";var c=a.match(jba);spf.style.load(a,c?c[1]:"",b)};
g.Qi=function(a,b,c){var d=g.B("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.hd(window.location.href);e&&d.push(e);e=g.hd(a);if(g.Ma(d,e)||!e&&g.Sa(a,"/"))if(g.yg("autoescape_tempdata_url")&&(d=document.createElement("a"),g.rc(d,a),a=d.href),a&&(a=g.id(a),a=g.jd(a))){if(b.itct||b.ved)b.csn=b.csn||g.xi();c?(c=parseInt(c,10),isFinite(c)&&0<c&&(a="ST-"+g.ib(a).toString(36),b=b?g.od(b):"",g.Wh(a,b,c||5))):(c="ST-"+g.ib(a).toString(36),b=b?g.od(b):"",g.Wh(c,b,5))}};
g.Ri=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.sc(d.location,g.pd(a,b)+c)};
g.Si=function(a,b){b&&g.Qi(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.Ri(a)};
g.Ti=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.B("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Qi(a,b);if(c)return!1;g.Si(a);return!0};
Vi=function(a,b){g.Vd.call(this);this.H=this.oa=a;this.O=b;this.L=!1;this.api={};this.Z=this.X=null;this.J=new g.vf;g.Yd(this,this.J);this.D={};this.la=this.ha=this.F=this.nb=this.C=null;this.V=!1;this.G=this.R=null;this.ra={};this.ub=["onReady"];this.Ya=null;this.rb=NaN;this.W={};Ui(this);this.xi("WATCH_LATER_VIDEO_ADDED",this.WG.bind(this));this.xi("WATCH_LATER_VIDEO_REMOVED",this.XG.bind(this));this.xi("onAdAnnounce",this.aw.bind(this));this.yb=new ph(this);g.Yd(this,this.yb)};
Wi=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Yi=function(a){var b=!0,c=Xi(a);c&&a.C&&(a=a.C,b=g.C(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
kba=function(a){if(!a.sb()&&!a.V){var b=Yi(a);if(b&&"html5"==(Xi(a)?"html5":null))a.la="html5",a.L||Zi(a);else if($i(a),a.la="html5",b&&a.G)a.oa.appendChild(a.G),Zi(a);else{a.C.loaded=!0;var c=!1;a.R=function(){c=!0;var b=a.C.clone();g.q("yt.player.Application.create")(a.oa,b);Zi(a)};
a.V=!0;b?a.R():(g.lg(a.C.assets.js,a.R),g.Mi(a.C.assets.css),aj(a)&&!c&&g.n("yt.player.Application.create",null,void 0))}}};
Xi=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
Zi=function(a){if(!a.sb()){var b=Xi(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||lba(a)):a.rb=g.ag(function(){Zi(a)},50)}};
lba=function(a){Ui(a);a.L=!0;var b=Xi(a);b.addEventListener&&(a.X=bj(a,b,"addEventListener"));b.removeEventListener&&(a.Z=bj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=bj(a,b,e))}for(var h in a.D)a.X(h,a.D[h]);Wi(a);a.ha&&a.ha(a.api);a.J.qa("onReady",a.api)};
bj=function(a,b,c){var d=b[c];return function(){try{return a.Ya=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Ya=e,g.Yf(e))}}};
Ui=function(a){a.L=!1;if(a.Z)for(var b in a.D)a.Z(b,a.D[b]);for(var c in a.W)g.cg(parseInt(c,10));a.W={};a.X=null;a.Z=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.xi.bind(a);a.api.removeEventListener=a.sL.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.by.bind(a);a.api.getPlayerType=a.uy.bind(a);a.api.getCurrentVideoConfig=a.Ex.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.PC.bind(a)};
cj=function(a,b){var c=b;if("string"==typeof b){if(a.ra[b])return a.ra[b];c=function(){var a=g.q(b);a&&a.apply(g.m,arguments)};
a.ra[b]=c}return c?c:null};
mba=function(a,b){var c="ytPlayer"+b+a.O;a.D[b]=c;g.m[c]=function(c){var d=g.ag(function(){a.sb()||(a.J.qa(b,c),g.qb(a.W,String(d)))},0);
g.rb(a.W,String(d),!0)};
return c};
$i=function(a){a.cancel();Ui(a);a.la=null;a.C&&(a.C.loaded=!1);var b=Xi(a);b&&(Yi(a)||!aj(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.Hc(a.oa)};
aj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.fj=function(a,b){a=g.va(a)?g.xc(a):a;var c=g.dj+"_"+g.Ga(a),d=g.ej[c];if(d)return d.loadNewVideoConfig(b),d.api;d=new Vi(a,c);g.ej[c]=d;g.E("player-added",d.api);g.Wd(d,g.u(nba,d));g.ag(function(){d.loadNewVideoConfig(b)},0);
return d.api};
nba=function(a){delete g.ej[a.O]};
g.gj=function(a){if(!a)return null;var b=g.dj+"_"+g.Ga(a),c=g.ej[b];c||(c=new Vi(a,b),g.ej[b]=c);return c.api};
g.hj=function(a){return g.gj(document.getElementById(a))};
g.ij=function(a,b){this.version=a;this.args=b};
g.jj=function(a,b){this.topic=a;this.C=b};
g.lj=function(a,b){var c=g.kj();c&&c.publish.call(c,a.toString(),a,b)};
g.kj=function(){return g.q("ytPubsub2Pubsub2Instance")};
g.nj=function(a,b){var c={};c.key=a;c.value=b;return mj().then(function(a){return new Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.oj=function(a){return mj().then(function(b){return new Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return Promise.reject("Unable to open IndexedDB.")})};
mj=function(){return pj?Promise.resolve(pj):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))pj=b,a(pj);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),mj()};
c.onupgradeneeded=oba})};
oba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
pba=function(a){if(qj.getEntriesByType){var b=qj.getEntriesByType("paint");if(b=g.Ka(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Da(b)){b=b();var c=1E3*Math.min(b.requestTime||Infinity,b.startLoadTime||Infinity);c=Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
rj=function(){var a=g.B("TIMING_TICK_EXPIRATION");a||(a={},g.Tf("TIMING_TICK_EXPIRATION",a));return a};
sj=function(){var a=rj(),b;for(b in a)g.tg(a[b]);g.Tf("TIMING_TICK_EXPIRATION",{})};
tj=function(a,b){g.ij.call(this,1,arguments)};
uj=function(a,b){g.ij.call(this,1,arguments)};
uba=function(){vj=!1;var a=g.B("TIMING_INFO",{});for(b in a)wj(b,a[b]);wj("is_nav",1);(a=g.xi())&&wj("csn",a);(a=g.B("PREVIOUS_ACTION",void 0))&&wj("pa",a);var b=xj();b.p=g.B("CLIENT_PROTOCOL")||"unknown";b.t=g.B("CLIENT_TRANSPORT")||"unknown";wj("yt_vis",qba());if("cold"==b.yt_lt){a=qj.timing||{};a.navigationStart&&(yj("srt",a.responseStart),1!=b.prerender&&zj("n",a.navigationStart));b=pba(a);0<b&&yj("fpt",b);Aj(a);qj.getEntriesByType&&rba();a=[];if(document.querySelector&&qj&&qj.getEntriesByName)for(var c in Bj)b=
Bj[c],sba(c,b)&&a.push(b);a.length&&wj("rc",a.join(","))}Cj(void 0)&&(c={},c.actionType=tba[g.B("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Dj(void 0),ii(c,a));if("cold"==xj().yt_lt){a=Ej();c=Fj();for(var d in a)g.Sa(d,"_")||"tick_"+d in c||Gj(d,a[d]);d=xj();for(var e in d)"info_"+e in c||Hj(e,d[e])}Ij(!0);g.Jj(!1)};
Mj=function(){Kj(void 0);vba();Lj(!1,void 0);g.B("TIMING_ACTION")&&g.Tf("PREVIOUS_ACTION",g.B("TIMING_ACTION"));g.Tf("TIMING_ACTION","")};
yj=function(a,b,c){b||"_"==a[0]||Nj(a,c);var d=Ej(c),e=b||g.Dh();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=rj();var h=e[a];h&&(g.tg(h),e[a]=0);Gj(a,b,c)||g.Jj(!1,c);return d[a]};
Nj=function(a,b){qj.mark&&(g.Sa(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),qj.mark(a))};
zj=function(a,b){wj("yt_sts",a,void 0);yj("_start",b,void 0)};
wj=function(a,b,c){xj(c)[a]=b;Hj(a,b,c)};
Oj=function(a){var b=Ej(a);if(b.aft)return b.aft;a=g.B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
Aj=function(a,b){yj("nreqs",a.requestStart,b);yj("nress",a.responseStart,b);yj("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(yj("nrs",a.redirectStart,b),yj("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(yj("ndnss",a.domainLookupStart,b),yj("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(yj("ntcps",a.connectStart,b),yj("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(yj("nstcps",a.secureConnectionStart,
b),yj("ntcpe",a.connectEnd,b))};
g.Jj=function(a,b){if(!Pj(b)){var c=g.B((b||"")+"TIMING_ACTION",void 0),d=Ej(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Oj(b)))if(Qj||(g.lj(wba,new tj(Math.round(c-d._start),b)),Qj=!0),a||b)Rj(b);else{c=!0;var e=g.B("TIMING_WAIT",[]);if(e.length)for(var h=0,k=e.length;h<k;++h)if(!(e[h]in d)){c=!1;break}c&&Rj(b)}}};
qba=function(){switch(g.dh()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Sj=function(a){if(!Pj(void 0)){var b=g.B("CSI_SERVICE_NAME","youtube");g.B("TIMING_ACTION",void 0)&&b&&(yj("aa",void 0,void 0),wj("ap",1,void 0),wj("yt_fss",a,void 0),Rj(void 0))}};
Gj=function(a,b,c){Fj(c)["tick_"+a]=b;c||b||g.Dh();return Cj(c)?(c=Dj(c),"_start"==a?hi("baseline_"+c)||g.ci("latencyActionBaselined",{clientActionNonce:c},b):hi("tick_"+a+"_"+c)||g.ci("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Hj=function(a,b,c){Fj(c)["info_"+a]=b;if(Cj(c))if(a in Tj){var d=Tj[a];g.Ma(xba,d)&&(b=!!b);a in Uj&&(b=Uj[a]+b.toUpperCase());if(Cj(c)){a={};d=d.split(".");for(var e=a,h=0;h<d.length-1;h++)e[d[h]]=e[d[h]]||{},e=e[d[h]];e[d[d.length-1]]=b;c=Dj(c);ii(a,c)}}else g.Ma(yba,a)||g.Wf(Error("Unknown label "+a+" logged with GEL CSI."))};
Vj=function(a){return Math.round(qj.timing.navigationStart+a)};
rba=function(){var a=window.location.protocol,b=qj.getEntriesByType("resource");b=(0,g.Wj)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20190301001015/https://fonts.gstatic.com/s/")});
(b=(0,g.Of)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(yj("wffs",Vj(b.startTime)),yj("wffe",Vj(b.responseEnd)))};
sba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=qj.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,yj("rsf_"+b,d+Math.round(c.fetchStart)),yj("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&("rc"in xj(void 0)||wj("rc",""),0===c.transferSize))?!0:!1:!1};
Ij=function(a){g.n("ytglobal.timingready_",a,void 0)};
Dj=function(a){var b=Xj(a).nonce;b||(b=mi(),Xj(a).nonce=b);return b};
Ej=function(a){return Xj(a).tick};
xj=function(a){return Xj(a).info};
Fj=function(a){a=Xj(a);"gel"in a||(a.gel={});return a.gel};
Xj=function(a){return g.q("ytcsi."+(a||"")+"data_")||Kj(a)};
Kj=function(a){var b={tick:{},info:{}};g.n("ytcsi."+(a||"")+"data_",b,void 0);return b};
Pj=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
Lj=function(a,b){g.n("yt.timing."+(b||"")+"pingSent_",a,void 0)};
zba=function(a){var b=Ej(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==xj(a).yt_pvis};
Cj=function(a){return vj||g.yg("csi_on_gel")||!!Xj(a).useGel};
Rj=function(a){sj();if(!Cj(a)){var b=Ej(a),c=xj(a),d=b._start;for(k in b)if(g.Sa(k,"_")&&g.Ba(b[k])){var e=k.slice(1);if(e in Aba){var h=(0,g.Yj)(b[k],function(a){return Math.round(a-d)});
c["all_"+e]=h.join()}delete b[k]}h=g.B("CSI_SERVICE_NAME","youtube");var k={v:2,s:h,action:g.B((a||"")+"TIMING_ACTION",void 0)};e=wj.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var l=window.location.protocol+g.q("ytplayer.config.assets.js");(l=qj.getEntriesByName?qj.getEntriesByName(l)[0]:null)?c.h5jse=Math.round(c.h5jse-l.responseEnd):delete c.h5jse}b.aft=Oj(a);zba(a)&&"youtube"==h&&(wj("yt_lt","hot_bg",a),h=b.vc,l=b.pbs,delete b.aft,c.aft=Math.round(l-h));for(var p in c)"_"!=p.charAt(0)&&(k[p]=
c[p]);b.ps=g.Dh();p={};h=[];for(var t in b)"_"!=t.charAt(0)&&(l=Math.round(b[t]-d),p[t]=l,h.push(t+"."+l));k.rt=h.join(",");(b=g.q("ytdebug.logTiming"))&&b(k,p);Bba(k,!!c.ap,a);g.lj(Cba,new uj(p.aft+(e||0),a))}};
Bba=function(a,b,c){if(g.yg("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.n("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var h=void 0===h?"":h;Ji(a,h)||g.Ki(a,void 0,void 0,void 0,h)}else g.Ki(a);Lj(!0,c)};
Iba=function(){Zj++;var a=g.Bc(),b=new g.Qc(0,0,a.width,a.height);ak("vph",a.height);ak("vpw",a.width);(0,g.bk)("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;ck.start();for(var h=0;h<c;h++){var k=a[h];if(dk(k,b)){var l=Dba(k);l.then(Eba);d.push(l);ek.push(l);k.loadTime||(e=!1)}}e&&ak("yt_eil",1);(0,g.bk)("vpcc");b=g.Se(d).then(Fba);g.Ue(b,Gba);b.then(Hba);ek.push(b);return b};
Hba=function(){ck.stop()};
Gba=function(){(0,g.bk)("vpr")};
dk=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.ch(c);if(e in fk)return!0;if(e in gk)return!1;var h=window.getComputedStyle(c);if("none"==h.display||"hidden"==h.visibility)return gk[e]=!0,!1;h=c.getBoundingClientRect();if(!(b.left<=h.left+h.width&&h.left<=b.left+b.width&&b.top<=h.top+h.height&&h.top<=b.top+b.height))return gk[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)fk[d[c]]=!0;return!0};
Fba=function(a){var b=g.Bc();b=new g.Qc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var h=a[d].time;dk(a[d].GB,b)&&c<h&&(c=h)}return c};
Dba=function(a){var b=Zj;return new g.Ne(function(c,d){var e={GB:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){Zj!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},hk.push(a))})};
Eba=function(a){ck.start();a=a.time;ik<a&&(ik=a,(0,g.bk)("lim",a))};
Jba=function(){(0,g.bk)("vptl",ik);(0,g.bk)("vpl",ik)};
Kba=function(){ek.forEach(function(a){a.cancel()});
ik=ek.length=0;fk={};gk={};hk.forEach(function(a){a.slt=void 0});
hk.length=0};
g.jk=function(a,b){g.Ki("/gen_204?"+a,b)};
Lba=function(a){if(null==a)return[];var b=[];g.yg("ima_prevent_mpu_queries_on_cached_playback")&&0>kk.indexOf("ad3_module")&&kk.push("ad3_module");kk.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.lk=function(){return g.A(g.x("page-container"),"remote-connected")};
Mba=function(){mk=g.bg(nk,5E3);var a=g.ok();a?(a.addEventListener("onReady",nk),a.addEventListener("onStateChange",nk)):pk("unable to init PP monitor")};
sk=function(a){for(var b in g.ej){var c=g.ej[b];c&&c.cancel()}if(a=a||null){b=g.ok();var d=!0;c=g.qk;g.qk=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(rk="",g.fj("player-api",a)):b.playVideo();a=g.rh(a);a.loaded=!0}nk();g.n("ytplayer.config",a,void 0)};
g.ok=function(){return g.hj("player-api")};
nk=function(){var a=g.ok();if(a){var b=g.x("player");b=!b||g.A(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.B("PAGE_NAME"),e=g.lk();!c||d||e||(pk("PP playing off watch (paused)"),a.pauseVideo());b&&d?pk("PP off-screen on watch"):b||d||pk("PP !off-screen off watch")}};
pk=function(a){var b=g.B("PAGE_NAME");b&&(Error(a).params=[b,rk,g.q("_spf_state.nav-counter")],g.n("yt.www.persistentplayer.issue",a,void 0),g.Wf(Error(a),"WARNING"))};
uk=function(){(0,g.bk)("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){(0,g.bk)("cpt");g.E("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?((0,g.bk)("cpt"),g.E("on_cpt_tick",(new Date).getTime())):setTimeout(function(){(0,g.bk)("cpt");
g.E("on_cpt_tick",(new Date).getTime())},0);
Nba();g.B("CSI_VIEWPORT")&&(tk=Iba(),tk.then(function(a){(0,g.bk)("vpl",a);tk=null},function(){}))};
Nba=function(){vk("init");var a=g.B("PAGE_NAME",void 0);a&&vk("init-"+a)};
vk=function(a){g.wg()?wk.push(g.sg(g.u(g.jg,a),0)):g.E(a)};
yk=function(){g.ug(wk);wk.length=0;Kba();tk&&(tk.cancel(),tk=null);var a=g.B("PAGE_NAME",void 0);a&&g.jg("dispose-"+a);g.jg("dispose")};
Oba=function(){uk()};
Pba=function(){g.B("TIMING_REPORT_ON_UNLOAD")&&g.Jj(!0);Sj("u");g.ri("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");zi();g.di();g.Ah();yk();g.jg("pageunload")};
zk=function(){g.Nh()};
Ak=function(){window.yt_spf_loaded_history=!0;g.Nh()};
Fk=function(){Bk=1;Ck=Dk=0;g.B("TIMING_REPORT_ON_UNLOAD")&&g.Jj(!0);g.yg("warm_load_nav_start_web")?(Sj("n"),Mj(),Ij(!1),g.Tf("TIMING_AFT_KEYS",[]),wj("yt_lt","warm"),g.Tf("TIMING_ACTION",""),g.Tf("TIMING_WAIT",[]),sj(),zj("n")):(Sj("n"),Mj(),zj("n"));Nj("nr");Ek(Qba);zi();g.jg("navigate")};
Jk=function(a){a=a.detail.part||a.detail.partial;(0,g.bk)("nc"+Dk);++Dk;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.bk)("bc");else{var b=1==Bk;Bk=2;b?(Ek(Rba),Gk()):Ek(Sba);if(b=a&&a.data&&a.data.swfcfg)Hk(a.timing,b.args),Ik(b)}};
Kk=function(){(0,g.bk)("np"+Ck);++Ck};
Lk=function(a){a=a.detail.response;var b=1==Bk;Bk=3;b&&(Ek(Tba),Gk());if(b=a.data&&a.data.swfcfg)Hk(a.timing,b.args),Ik(b)};
Pk=function(a){(0,g.bk)("nd");a=a.detail.response;g.Mk=a.cacheKey;a=a.timing;var b=window._spf_state;g.Nk.navigationCount=b&&b["nav-counter"]||0;g.yg("warm_load_nav_start_web")?(0,g.bk)("srt",a.responseStart):(zj("ne",a.responseStart),ak("srt",Math.max(0,a.responseStart-a.navigationStart)));ak("yt_lt",a.spfCached?"hot":"warm");(0,g.bk)("pfs",a.fetchStart);(0,g.bk)("pfrs",a.responseStart);"redirectStart"in a&&Uba(a);Ek(Ok);document.getElementById("content").style.height="";uk();Bk=0};
Qk=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Wf(a)};
Rk=function(a){g.jk(g.od({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Wba=function(){Vba();window.yt_spf_loaded_history=!1};
Xba=function(){};
Gk=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");yk();a=g.B("PREVIOUS_ACTION");for(var b in g.Sf)delete g.Sf[b];g.Tf("PREVIOUS_ACTION",a);g.Tf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.n("ytplayer.config",null,void 0);(b=g.ok())&&b.stopVideo?(b.stopVideo(),b.getLastError()&&((b=document.getElementById("movie_player"))&&b.stopVideo?(b.stopVideo(),rk="recovered"):rk="missing2")):rk="missing";nk()};
Ik=function(a){"cfg"in Ej(void 0)||(0,g.bk)("cfg");sk(a)};
Ek=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.tg(Sk);Sk=g.sg(function(){var c=a[0],d=a[1],e=a[2];b.className="";var h=b.style;h.transitionDuration=h.webkitTransitionDuration=c+"ms";h.width=d+"%";g.cg(Tk);Tk=g.ag(function(){b.className=e},c)},0)};
Vba=function(){var a=Ok[0]+50;g.cg(Tk);Tk=g.ag(function(){var a=document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
Hk=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Lba(b));g.B("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.jk(g.od(c)))};
Vk=function(){return"granted"!=Notification.permission?Promise.resolve():Uk().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
Xk=function(){Wk({type:"notifications_register",data:g.B("ID_TOKEN")})};
Uk=function(){return navigator.serviceWorker.getRegistration(String(xg("service_worker_scope")||""))};
Yk=function(a){return!(!a||!a.pushManager)};
Wk=function(a){Uk().then(function(b){if(!b||!b.active)return Promise.reject();b.active.postMessage(a);return Promise.resolve()})};
Yba=function(){if(!g.B("LOGGED_IN",void 0))return Promise.resolve(!1);var a=String(xg("service_worker_push_force_notification_prompt_tag")||"");return a?g.oj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
bca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?Uk().then(Yk):Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=Vk().then(function(){Wk({type:"notifications_check_registration",data:g.B("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return Zba(a)}).then(function(a){if(a)return $ba(),aca().then(function(){})})})};
Zba=function(a){return g.B("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.B("LOGGED_IN",void 0)&&(void 0===a?0:a)?Yba().then(function(a){if(a)return!0;a=[cca(),dca()];g.B("LOGGED_IN",void 0)||a.push(eca());return Promise.all(a).then(function(a){return a.every(function(a){return a})})}):Promise.resolve(!1)};
eca=function(){var a=g.zg("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.oj("WatchCount").then(function(b){return b>=a})};
aca=function(){var a=arguments;g.yg("service_worker_push_prompt_modal_enable")&&fca();return Notification.requestPermission().then(function(a){Zk();var b=document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return Vk().then(function(){g.nj("NotificationsDisabled",!1);Xk();return Promise.resolve(!0)});
"denied"==a&&Xk();return Promise.resolve(!1)})["catch"](function(){Zk();
return Promise.reject.apply(Promise,a instanceof Array?a:aaa(g.da(a)))})};
$ba=function(){g.oj("PromptCount").then(function(a){return g.nj("PromptCount",a+1)}).then(function(){return g.nj("PromptTime",(0,g.Bd)())}).then(function(){var a=String(xg("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.oj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.nj("PromptTags",JSON.stringify(c))})})};
cca=function(){return-1==g.zg("service_worker_push_prompt_cap")?Promise.resolve(!0):g.oj("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.zg("service_worker_push_prompt_cap"))})};
dca=function(){var a=g.zg("service_worker_push_prompt_delay_microseconds");return a?g.oj("PromptTime").then(function(b){return Promise.resolve((0,g.Bd)()-a>(b||0))}):Promise.resolve(!0)};
gca=function(){$k||Zk()};
al=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
fca=function(){var a=g.x("yt-push-prompt-modal-bg");$k=g.yg("service_worker_push_prompt_modal_ignore_click");a?al(a):(a=g.Ec("div",{id:"yt-push-prompt-modal-bg"}),al(a),document.body.appendChild(a),g.mh(document,"click",gca))};
Zk=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.Ic(a)};
hca=function(a){return Yk(a)?bca():Promise.resolve()};
jca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(ica)})};
lca=function(){var a="/sw.js",b=g.B("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=bl(a);g.yg("service_worker_push_enabled")&&a.then(kca).then(hca)};
kca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
ica=function(a){a&&bl("/sw.js?0",a.scope)};
bl=function(a,b){return navigator.serviceWorker.register(a,{scope:b||String(xg("service_worker_scope")||"")||"/"})};
dl=function(){g.Ai.call(this,"www/base");this.D=0};
el=function(a){(a=a.detail.name)&&Di(a)};
g.aa=[];fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)fl=Object.setPrototypeOf;else{var gl;a:{var mca={Zv:!0},hl={};try{hl.__proto__=mca;gl=hl.Zv;break a}catch(a){}gl=!1}fl=gl?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ha=fl,ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,la="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ma("Promise",function(a){function b(a){this.F=0;this.D=void 0;this.C=[];var b=this.H();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){if(null==this.C){this.C=[];var b=this;this.D(function(){b.H()})}this.C.push(a)};
var e=ja.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.H=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(t){this.G(t)}}}this.C=null};
c.prototype.G=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.O),reject:a(this.G)}};
b.prototype.O=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.X(a):this.L(a)}};
b.prototype.X=function(a){var b=void 0;try{b=a.then}catch(p){this.G(p);return}"function"==typeof b?this.la(b,a):this.L(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.L=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.F)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.F);this.F=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var a=0;a<this.C.length;++a)h.F(this.C[a]);this.C=null}};
var h=new c;b.prototype.V=function(a){var b=this.H();a.Fi(b.resolve,b.reject)};
b.prototype.la=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(t){c.reject(t)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(sa){h(sa)}}:b}
var e,h,k=new b(function(a,b){e=a;h=b});
this.Fi(d(a,e),d(c,h));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Fi=function(a,b){function c(){switch(d.F){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.F);}}
var d=this;null==this.C?h.F(c):this.C.push(c)};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.da(a),h=e.next();!h.done;h=e.next())d(h.value).Fi(b,c)})};
b.all=function(a){var c=g.da(a),e=c.next();return e.done?d([]):new b(function(a,b){function h(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Fi(h(k.length-1),b),e=c.next();while(!e.done)})};
return b});
oa.prototype.toString=function(){return this.C};
var baa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new oa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
ma("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=ra(this,a,"startsWith");a+="";for(var e=b.length,h=a.length,k=Math.max(0,Math.min(c|0,b.length)),l=0;l<h&&k<e;)if(b[k++]!=a[l++])return!1;return l>=h}});
ma("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=ra(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),h=a.length;0<h&&0<e;)if(b[--e]!=a[--h])return!1;return 0>=h}});
var nca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
ma("Object.assign",function(a){return a||nca});
ma("WeakMap",function(a){function b(a){this.jb=(k+=Math.random()+1).toString();if(a){a=g.da(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){ta(a,h)||la(a,h,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(y){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var k=0;b.prototype.set=function(a,b){d(a);if(!ta(a,h))throw Error("WeakMap key fail: "+a);a[h][this.jb]=b;return this};
b.prototype.get=function(a){return ta(a,h)?a[h][this.jb]:void 0};
b.prototype.has=function(a){return ta(a,h)&&ta(a[h],this.jb)};
b.prototype["delete"]=function(a){return ta(a,h)&&ta(a[h],this.jb)?delete a[h][this.jb]:!1};
return b});
ma("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return pa(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?h.has(b)?c=h.get(b):(c=""+ ++k,h.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&ta(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,xc:l}}return{id:c,list:d,index:-1,xc:void 0}}
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
ma("Set",function(a){function b(a){this.C=new Map;if(a){a=g.da(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.da([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),h=e.next();if(h.done||h.value[0]!=b||h.value[1]!=b)return!1;h=e.next();return h.done||h.value[0]==b||4!=h.value[0].x||h.value[1]!=h.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
qa();b.prototype.add=function(a){a=0===a?0:a;this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ma("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
ma("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==ra(this,a,"includes").indexOf(a,c||0)}});
var oca=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
ma("Reflect.construct",function(){return oca});
ma("Array.from",function(a){return a?a:function(a,c,d){c=null!=c?c:function(a){return a};
var b=[],h="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if("function"==typeof h){a=h.call(a);for(var k=0;!(h=a.next()).done;)b.push(c.call(d,h.value,k++))}else for(h=a.length,k=0;k<h;k++)b.push(c.call(d,a[k],k));return b}});
ma("Object.entries",function(a){return a?a:function(a){var b=[],d;for(d in a)ta(a,d)&&b.push([d,a[d]]);return b}});
g.il=g.il||{};g.m=this;Fa="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Bd=Date.now||function(){return+new Date};g.$c=document;g.Uc=window;g.v(g.Ha,Error);g.Ha.prototype.name="CustomError";g.La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.va(a))return g.va(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.pca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.va(a))return g.va(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.va(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)};
g.Wj=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],h=0,k=g.va(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var p=k[l];
b.call(c,p,l,a)&&(e[h++]=p)}return e};
g.Yj=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),h=g.va(a)?a.split(""):a,k=0;k<d;k++)k in h&&(e[k]=b.call(c,h[k],k,a));
return e};
g.Of=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.r)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.z)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.jl=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.va(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return!0;
return!1};
g.kl=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.va(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&!b.call(c,e[h],h,a))return!1;
return!0};var Va,Wa,Xa,Ya,Za,$a,faa;g.cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
Va=/&/g;Wa=/</g;Xa=/>/g;Ya=/"/g;Za=/'/g;$a=/\x00/g;faa=/[\x00&<>"']/;g.ll=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var ml=g.m.navigator;if(ml){var nl=ml.userAgent;if(nl){g.jb=nl;break a}}g.jb=""};var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.Fb[" "]=g.ya;g.w={Dk:!1,Ck:!1,Un:!1,Yn:!1,Fk:!1,Gk:!1,Ev:!1};g.w.bh=g.w.Dk||g.w.Ck||g.w.Un||g.w.Fk||g.w.Yn||g.w.Gk;g.w.dd=function(){return g.jb};
g.w.Gl=function(){return g.m.navigator||null};
g.w.UW=function(){return g.w.Gl()};
g.w.Rb=g.w.bh?g.w.Gk:g.kb("Opera");g.w.ma=g.w.bh?g.w.Dk:g.yb();g.w.mc=g.w.bh?g.w.Ck:g.kb("Edge");g.w.Hk=g.w.mc||g.w.ma;g.w.Bb=g.w.bh?g.w.Un:g.kb("Gecko")&&!(g.bb(g.jb,"WebKit")&&!g.kb("Edge"))&&!(g.kb("Trident")||g.kb("MSIE"))&&!g.kb("Edge");g.w.mb=g.w.bh?g.w.Yn||g.w.Fk:g.bb(g.jb,"WebKit")&&!g.kb("Edge");g.w.YB=function(){return g.w.mb&&g.kb("Mobile")};
g.w.MS=g.w.Fk||g.w.YB();g.w.lg=g.w.mb;g.w.Sw=function(){var a=g.w.Gl();return a&&a.platform||""};
g.w.wT=g.w.Sw();g.w.Wn=!1;g.w.Zn=!1;g.w.Vn=!1;g.w.ao=!1;g.w.ah=!1;g.w.jg=!1;g.w.ig=!1;g.w.Ek=!1;g.w.Gv=!1;g.w.Fv=!1;g.w.Ed=g.w.Wn||g.w.Zn||g.w.Vn||g.w.ao||g.w.ah||g.w.jg||g.w.ig||g.w.Ek;g.w.sd=g.w.Ed?g.w.Wn:g.kb("Macintosh");g.w.qo=g.w.Ed?g.w.Zn:g.kb("Windows");g.w.WB=function(){return g.kb("Linux")||g.kb("CrOS")};
g.w.Pv=g.w.Ed?g.w.Vn:g.w.WB();g.w.cC=function(){var a=g.w.Gl();return!!a&&-1!=(a.appVersion||"").indexOf("X11")};
g.w.MW=g.w.Ed?g.w.ao:g.w.cC();g.w.ANDROID=g.w.Ed?g.w.ah:g.kb("Android");g.w.ti=g.w.Ed?g.w.jg:Db();g.w.si=g.w.Ed?g.w.ig:g.kb("iPad");g.w.Nv=g.w.Ed?g.w.Ek:g.kb("iPod");g.w.IOS=g.w.Ed?g.w.jg||g.w.ig||g.w.Ek:g.Eb();g.w.iR=g.w.Ed?g.w.Gv:g.bb(g.jb,"KaiOS");g.w.FQ=g.w.Ed?g.w.Fv:g.bb(g.jb,"GAFP");g.w.ph=function(){var a="",b=g.w.az();b&&(a=b?b[1]:"");return g.w.ma&&(b=g.w.Dp(),null!=b&&b>parseFloat(a))?String(b):a};
g.w.az=function(){var a=g.w.dd();if(g.w.Bb)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.w.mc)return/Edge\/([\d\.]+)/.exec(a);if(g.w.ma)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.w.mb)return/WebKit\/(\S+)/.exec(a);if(g.w.Rb)return/(?:Version)[ \/]?(\S+)/.exec(a)};
g.w.Dp=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.w.VERSION=g.w.ph();g.w.compare=function(a,b){return g.eb(a,b)};
g.w.bC={};g.w.cb=function(a){return g.w.Ev||gaa(a,function(){return 0<=g.eb(g.w.VERSION,a)})};
g.w.fd=g.w.cb;g.w.Bc=function(a){return Number(g.w.co)>=a};
g.w.ZW=g.w.Bc;var ol;var pl=g.m.document;ol=pl&&g.w.ma?g.w.Dp()||("CSS1Compat"==pl.compatMode?parseInt(g.w.VERSION,10):5):void 0;g.w.co=ol;g.w.product={};g.w.product.Tn=!1;g.w.product.jg=!1;g.w.product.ig=!1;g.w.product.ah=!1;g.w.product.Sn=!1;g.w.product.Xn=!1;g.w.product.kg=g.w.Dk||g.w.Ck||g.w.Gk||g.w.product.Tn||g.w.product.jg||g.w.product.ig||g.w.product.ah||g.w.product.Sn||g.w.product.Xn;g.w.product.Rb=g.w.Rb;g.w.product.ma=g.w.ma;g.w.product.mc=g.w.mc;g.w.product.Ik=g.w.product.kg?g.w.product.Tn:zb();g.w.product.VB=function(){return Db()||g.kb("iPod")};
g.w.product.ti=g.w.product.kg?g.w.product.jg:g.w.product.VB();g.w.product.si=g.w.product.kg?g.w.product.ig:g.kb("iPad");g.w.product.ANDROID=g.w.product.kg?g.w.product.ah:g.Cb();g.w.product.CHROME=g.w.product.kg?g.w.product.Sn:g.Ab();g.w.product.ZB=function(){return g.Bb()&&!g.Eb()};
g.w.product.lg=g.w.product.kg?g.w.product.Xn:g.w.product.ZB();var Jb,Ib;Jb=null;g.Mb=null;Ib=null;g.Nb.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.Nb.prototype[Symbol.iterator]=function(){return this});g.Sb="function"==typeof Uint8Array;g.Ob.prototype.qd=function(){Pb(this);return this.qc};
g.Ob.prototype.D=g.Sb?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return Kb(this)};
try{return JSON.stringify(this.qc&&this.qd(),Qb)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.qc&&this.qd(),Qb)};
g.Ob.prototype.toString=function(){Pb(this);return this.qc.toString()};
g.Ob.prototype.clone=function(){return new this.constructor(Rb(this.qd()))};g.f=g.Tb.prototype;g.f.isEnabled=function(){return navigator.cookieEnabled};
g.f.set=function(a,b,c,d,e,h){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ua(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";h=h?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Bd)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+h};
g.f.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,h;e<d.length;e++){h=(0,g.cb)(d[e]);if(0==h.lastIndexOf(c,0))return h.substr(c.length);if(h==a)return""}return b};
g.f.remove=function(a,b,c){var d=g.ua(this.get(a));this.set(a,"",0,b,c);return d};
g.f.Oc=function(){return g.Ub(this).keys};
g.f.Jb=g.ba(1);g.f.isEmpty=function(){return!this.C.cookie};
g.f.Pb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.f.Wd=g.ba(3);g.f.clear=function(){for(var a=g.Ub(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Vh=new g.Tb("undefined"==typeof document?null:document);var Xb={};var jaa;jaa=!g.w.ma||g.w.Bc(9);g.qca=!g.w.Bb&&!g.w.ma||g.w.ma&&g.w.Bc(9)||g.w.Bb&&g.w.cb("1.9.1");g.ql=g.w.ma&&!g.w.cb("9");g.rca=g.w.ma||g.w.Rb||g.w.mb;g.sca=g.w.ma;g.tca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.uca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.rl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.$b.prototype.ee=!0;g.$b.prototype.cd=function(){return this.F};
g.$b.prototype.em=!0;g.$b.prototype.C=function(){return 1};
var iaa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))$/i,haa=/^data:([^;,]*);base64,[a-z0-9+\/]+=*$/i,dc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Zb={};g.bc("about:blank");g.hc.prototype.ee=!0;g.gc={};g.hc.prototype.cd=function(){return this.C};
g.sl=g.ic("");g.tl=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.ul=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.kc.prototype.ee=!0;g.jc={};g.kc.prototype.cd=function(){return this.C};
g.vl=g.lc("");g.nc.prototype.em=!0;g.nc.prototype.C=function(){return this.D};
g.nc.prototype.ee=!0;g.nc.prototype.cd=function(){return this.F};
var mc={};g.pc("<!DOCTYPE html>",0);g.wl=g.pc("",0);g.xl=g.pc("<br>",0);g.vca=g.Yb(function(){var a=document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});g.f=g.tc.prototype;g.f.clone=function(){return new g.tc(this.x,this.y)};
g.f.equals=function(a){return a instanceof g.tc&&g.uc(this,a)};
g.f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.f.translate=function(a,b){a instanceof g.tc?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.xa(b)&&(this.y+=b));return this};
g.f.scale=function(a,b){var c=g.xa(b)?b:a;this.x*=a;this.y*=c;return this};g.f=g.wc.prototype;g.f.clone=function(){return new g.wc(this.width,this.height)};
g.f.aspectRatio=function(){return this.width/this.height};
g.f.isEmpty=function(){return!(this.width*this.height)};
g.f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.scale=function(a,b){var c=g.xa(b)?b:a;this.width*=a;this.height*=c;return this};var yc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var wca={pP:"allow-forms",qP:"allow-modals",rP:"allow-orientation-lock",sP:"allow-pointer-lock",tP:"allow-popups",uP:"allow-popups-to-escape-sandbox",vP:"allow-presentation",wP:"allow-same-origin",xP:"allow-scripts",yP:"allow-top-navigation",zP:"allow-top-navigation-by-user-activation"},laa=g.Yb(function(){return g.Nc(wca)});g.f=g.Qc.prototype;g.f.clone=function(){return new g.Qc(this.left,this.top,this.width,this.height)};
g.f.contains=function(a){return a instanceof g.tc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.translate=function(a,b){a instanceof g.tc?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.xa(b)&&(this.top+=b));return this};
g.f.scale=function(a,b){var c=g.xa(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.yl=g.w.Bb?"MozUserSelect":g.w.mb||g.w.mc?"WebkitUserSelect":null;var Yc=g.Xc(window),Zc=Yc&&window.parent||window;g.fd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.rd=/#|$/;var xca=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;vd.prototype.getUrl=function(a,b,c,d){a=a+"//"+b+c;var e=oaa(this)-c.length-d.length;if(0>e)return"";this.C.sort(function(a,b){return a-b});
c=null;b="";for(var h=0;h<this.C.length;h++)for(var k=this.C[h],l=this.F[k],p=0;p<l.length;p++){if(!e){c=null==c?k:c;break}var t=yd(l[p],this.D,",$");if(t){t=b+t;if(e>=t.length){e-=t.length;a+=t;b=this.D;break}else this.H&&(b=e,t[b-1]==this.D&&--b,a+=t.substr(0,b),b=this.D,e=0);c=null==c?k:c}}h="";this.G&&null!=c&&(h=b+this.G+"="+c);return a+h+d};var zl=null;var Id=g.m.performance,yca=!!(Id&&Id.mark&&Id.measure&&Id.clearMarks),Gd=g.Yb(function(){var a;if(a=yca){var b;if(null===zl){zl="";try{a="";try{a=g.m.top.location.hash}catch(c){a=g.m.location.hash}a&&(zl=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=zl;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
Hd.prototype.disable=function(){this.C=!1;this.events!=this.F.google_js_reporting_queue&&(Gd()&&g.z(this.events,g.Jd),this.events.length=0)};
Hd.prototype.start=function(a,b){if(!this.C)return null;var c=Dd()||Cd();c=new paa(a,b,c);var d="goog_"+c.uniqueId+"_start";Id&&Gd()&&Id.mark(d);return c};
Hd.prototype.end=function(a){if(this.C&&g.xa(a.value)){var b=Dd()||Cd();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";Id&&Gd()&&Id.mark(b);this.C&&this.events.push(a)}};Md.prototype.F=function(a,b,c,d,e){e=e||"jserror";try{var h=new vd;h.H=!0;zd(h,1,"context",a);b.error&&b.meta&&b.id||(b=g.Pd(b));b.msg&&zd(h,2,"msg",b.msg.substring(0,512));b.file&&zd(h,3,"file",b.file);0<b.line&&zd(h,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(S){}b=[k];h.C.push(5);h.F[5]=b;var l=g.ud(),p=new td(g.m.location.href,g.m,!1);b=null;var t=l.length-1;for(d=t;0<=d;--d){var y=l[d];!b&&xca.test(y.url)&&(b=y);if(y.url&&!y.er){p=y;break}}y=null;var H=l.length&&l[t].url;0!=p.depth&&
H&&(y=l[t]);var J=new naa(p,y);J.F&&zd(h,6,"top",J.F.url||"");zd(h,7,"url",J.C.url||"");g.Ad(this.D,e,h,c)}catch(S){try{g.Ad(this.D,e,{context:"ecmserr",rctx:a,msg:g.Od(S),url:J&&J.C.url},c)}catch(ea){}}return!0};
g.ia(Nd,cd);var Ed,Kd;Ed=g.ad();Kd=new Hd;g.Ld=new function(){var a=void 0===a?g.Uc:a;this.C="http:"===a.location.protocol?"http:":"https:"};
g.Al=new Md;"complete"==Ed.document.readyState?Ed.google_measure_js_timing||Kd.disable():Kd.C&&Oc(Ed,"load",function(){Ed.google_measure_js_timing||Kd.disable()});var Bl;Bl={};g.Cl=(Bl[8]="google_prev_ad_formats_by_region",Bl[9]="google_prev_ad_slotnames_by_region",Bl);g.Jg=(new Date).getTime();g.Vd.prototype.Zc=!1;g.Vd.prototype.sb=function(){return this.Zc};
g.Vd.prototype.dispose=function(){this.Zc||(this.Zc=!0,this.Y())};
g.Vd.prototype.Y=function(){if(this.Rf)for(;this.Rf.length;)this.Rf.shift()()};g.Zd.prototype.stopPropagation=function(){this.F=!0};
g.Zd.prototype.preventDefault=function(){this.Tt=!1};var pe,Aca,vaa;g.zca=!g.w.ma||g.w.Bc(9);pe=!g.w.ma||g.w.Bc(9);Aca=g.w.ma&&!g.w.cb("9");vaa=function(){if(!g.m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.m.addEventListener("test",g.ya,b),g.m.removeEventListener("test",g.ya,b)}catch(c){}return a}();g.Dl=g.w.mb?"webkitTransitionEnd":g.w.Rb?"otransitionend":"transitionend";g.v(g.$d,g.Zd);var Bca={2:"touch",3:"pen",4:"mouse"};
g.$d.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.w.Bb&&(g.Gb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.w.sd?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.va(a.pointerType)?a.pointerType:Bca[a.pointerType]||"";this.state=a.state;this.zc=
a;a.defaultPrevented&&this.preventDefault()};
g.$d.prototype.stopPropagation=function(){g.$d.M.stopPropagation.call(this);this.zc.stopPropagation?this.zc.stopPropagation():this.zc.cancelBubble=!0};
g.$d.prototype.preventDefault=function(){g.$d.M.preventDefault.call(this);var a=this.zc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Aca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ae="closure_listenable_"+(1E6*Math.random()|0),saa=0;g.f=g.de.prototype;g.f.add=function(a,b,c,d,e){var h=a.toString();a=this.listeners[h];a||(a=this.listeners[h]=[],this.C++);var k=ge(a,b,d,e);-1<k?(b=a[k],c||(b.Ei=!1)):(b=new taa(b,this.src,h,!!d,e),b.Ei=c,a.push(b));return b};
g.f.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ge(e,b,c,d);return-1<b?(ce(e[b]),g.Oa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.f.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,ce(d[e]);delete this.listeners[c];this.C--}return b};
g.f.Ag=g.ba(5);g.f.uf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=ge(a,b,c,d));return-1<e?a[e]:null};
g.f.hasListener=function(a,b){var c=g.ua(a),d=c?a.toString():"",e=g.ua(b);return g.mb(this.listeners,function(a){for(var h=0;h<a.length;++h)if(!(c&&a[h].type!=d||e&&a[h].capture!=b))return!0;return!1})};var me="closure_lm_"+(1E6*Math.random()|0),se={},oe=0,ve="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.we,g.Vd);g.we.prototype[ae]=!0;g.f=g.we.prototype;g.f.Zi=function(){return this.Rm};
g.f.Wh=g.ba(6);g.f.addEventListener=function(a,b,c,d){g.ie(this,a,b,c,d)};
g.f.removeEventListener=function(a,b,c,d){g.qe(this,a,b,c,d)};
g.f.dispatchEvent=function(a){var b=this.Zi();if(b){var c=[];for(var d=1;b;b=b.Zi())c.push(b),++d}b=this.cw;d=a.type||a;if(g.va(a))a=new g.Zd(a,b);else if(a instanceof g.Zd)a.target=a.target||b;else{var e=a;a=new g.Zd(d,b);g.wb(a,e)}e=!0;if(c)for(var h=c.length-1;!a.F&&0<=h;h--){var k=a.currentTarget=c[h];e=xe(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=xe(k,d,!0,a)&&e,a.F||(e=xe(k,d,!1,a)&&e));if(c)for(h=0;!a.F&&h<c.length;h++)k=a.currentTarget=c[h],e=xe(k,d,!1,a)&&e;return e};
g.f.Y=function(){g.we.M.Y.call(this);this.removeAllListeners();this.Rm=null};
g.f.N=function(a,b,c,d){return this.Jd.add(String(a),b,!1,c,d)};
g.f.Ve=function(a,b,c,d){return this.Jd.add(String(a),b,!0,c,d)};
g.f.Wa=function(a,b,c,d){return this.Jd.remove(String(a),b,c,d)};
g.f.removeAllListeners=function(a){return this.Jd?this.Jd.removeAll(a):0};
g.f.Ag=g.ba(4);g.f.uf=function(a,b,c,d){return this.Jd.uf(String(a),b,c,d)};
g.f.hasListener=function(a,b){return this.Jd.hasListener(g.ua(a)?String(a):void 0,b)};ye.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var Ie;var Je=new ye(function(){return new Ce},function(a){a.reset()});
Be.prototype.add=function(a,b){var c=Je.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
Be.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
Ce.prototype.set=function(a,b){this.yc=a;this.scope=b;this.next=null};
Ce.prototype.reset=function(){this.next=this.scope=this.yc=null};var De,Ee=!1,Fe=new Be;Oe.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var Pe=new ye(function(){return new Oe},function(a){a.reset()});
g.Ne.prototype.then=function(a,b,c){return Te(this,g.Da(a)?a:null,g.Da(b)?b:null,c)};
g.Ke(g.Ne);g.Ne.prototype.cancel=function(a){0==this.C&&Ge(function(){var b=new g.$e(a);Ve(this,b)},this)};
g.Ne.prototype.X=function(a){this.C=0;g.Me(this,2,a)};
g.Ne.prototype.O=function(a){this.C=0;g.Me(this,3,a)};
g.Ne.prototype.J=function(){for(var a;a=We(this);)Xe(this,a,this.C,this.R);this.L=!1};
var bf=Ae;g.v(g.$e,g.Ha);g.$e.prototype.name="cancel";g.v(g.ef,g.Vd);g.f=g.ef.prototype;g.f.jb=0;g.f.Y=function(){g.ef.M.Y.call(this);this.stop();delete this.C;delete this.F};
g.f.start=function(a){this.stop();this.jb=g.cf(this.hc,g.ua(a)?a:this.D)};
g.f.stop=function(){this.isActive()&&g.df(this.jb);this.jb=0};
g.f.sf=g.ba(7);g.f.isActive=function(){return 0!=this.jb};
g.f.Op=function(){this.jb=0;this.C&&this.C.call(this.F)};g.v(ff,Caa);ff.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
ff.prototype.update=function(a,b){if(null!=a){g.ua(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.L,h=this.D;d<b;){if(0==h)for(;d<=c;)gf(this,a,d),d+=this.F;if(g.va(a))for(;d<b;){if(e[h]=a.charCodeAt(d),++h,++d,h==this.F){gf(this,e);h=0;break}}else for(;d<b;)if(e[h]=a[d],++h,++d,h==this.F){gf(this,e);h=0;break}}this.D=h;this.H+=b}};
ff.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;gf(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.kf="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.jf.prototype.next=function(){throw g.kf;};
g.jf.prototype.td=function(){return this};g.f=g.of.prototype;g.f.Pb=function(){return this.D};
g.f.Jb=g.ba(0);g.f.Oc=function(){g.qf(this);return this.C.concat()};
g.f.Wd=g.ba(2);g.f.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Pb())return!1;var c=b||Eaa;g.qf(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.f.isEmpty=function(){return 0==this.D};
g.f.clear=function(){this.F={};this.af=this.D=this.C.length=0};
g.f.remove=function(a){return g.pf(this.F,a)?(delete this.F[a],this.D--,this.af++,this.C.length>2*this.D&&g.qf(this),!0):!1};
g.f.get=function(a,b){return g.pf(this.F,a)?this.F[a]:b};
g.f.set=function(a,b){g.pf(this.F,a)||(this.D++,this.C.push(a),this.af++);this.F[a]=b};
g.f.forEach=function(a,b){for(var c=this.Oc(),d=0;d<c.length;d++){var e=c[d],h=this.get(e);a.call(b,h,e,this)}};
g.f.clone=function(){return new g.of(this)};
g.f.td=function(a){g.qf(this);var b=0,c=this.af,d=this,e=new g.jf;e.next=function(){if(c!=d.af)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.kf;var e=d.C[b++];return a?e:d.F[e]};
return e};var uf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Gaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.vf,g.Vd);g.f=g.vf.prototype;g.f.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.f.Dd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.ya):(c&&g.Pa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.f.qa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,h=arguments.length;e<h;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Haa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,h=c.length;e<h;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.Dd(c)}}return 0!=e}return!1};
g.f.clear=function(a){if(a){var b=this.F[a];b&&((0,g.z)(b,this.Dd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.f.Pb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Pb(b);return a};
g.f.Y=function(){g.vf.M.Y.call(this);this.clear();this.D.length=0};g.xf.prototype.set=function(a,b){g.ua(b)?this.C.set(a,g.sf(b)):this.C.remove(a)};
g.xf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.xf.prototype.remove=function(a){this.C.remove(a)};g.v(yf,g.xf);yf.prototype.set=function(a,b){yf.M.set.call(this,a,Af(b))};
yf.prototype.F=function(a){a=yf.M.get.call(this,a);if(!g.ua(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
yf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ua(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.Bf,yf);g.Bf.prototype.set=function(a,b,c){if(b=Af(b)){if(c){if(c<(0,g.Bd)()){g.Bf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Bd)()}g.Bf.M.set.call(this,a,b)};
g.Bf.prototype.F=function(a,b){var c=g.Bf.M.F.call(this,a);if(c)if(!b&&g.Cf(c))g.Bf.prototype.remove.call(this,a);else return c};g.v(Df,Iaa);Df.prototype.Pb=function(){var a=0;g.mf(this.td(!0),function(){a++});
return a};
Df.prototype.clear=function(){var a=Daa(this.td(!0)),b=this;(0,g.z)(a,function(a){b.remove(a)})};g.v(g.Ef,Df);g.f=g.Ef.prototype;g.f.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.f.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.f.get=function(a){a=this.C.getItem(a);if(!g.va(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeItem(a)};
g.f.Pb=function(){return this.C.length};
g.f.td=function(a){var b=0,c=this.C,d=new g.jf;d.next=function(){if(b>=c.length)throw g.kf;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.va(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){this.C.clear()};
g.f.key=function(a){return this.C.key(a)};g.v(g.Ff,g.Ef);g.v(Hf,Df);var Jaa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Gf=null;g.f=Hf.prototype;g.f.isAvailable=function(){return!!this.C};
g.f.set=function(a,b){this.C.setAttribute(If(a),b);Jf(this)};
g.f.get=function(a){a=this.C.getAttribute(If(a));if(!g.va(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeAttribute(If(a));Jf(this)};
g.f.Pb=function(){return Kf(this).attributes.length};
g.f.td=function(a){var b=0,c=Kf(this).attributes,d=new g.jf;d.next=function(){if(b>=c.length)throw g.kf;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!g.va(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){for(var a=Kf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Jf(this)};g.v(Lf,Df);Lf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
Lf.prototype.get=function(a){return this.F.get(this.C+a)};
Lf.prototype.remove=function(a){this.F.remove(this.C+a)};
Lf.prototype.td=function(a){var b=this.F.td(!0),c=this,d=new g.jf;d.next=function(){for(var d=b.next();d.substr(0,c.C.length)!=c.C;)d=b.next();return a?d.substr(c.C.length):c.F.get(d)};
return d};Nf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
Nf.prototype.get=function(a){return!!this.C[a]};g.Dh=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.El="Microsoft Internet Explorer"==navigator.appName;g.Sf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.n("yt.config_",g.Sf,void 0);var $f={};var Cca=g.q("ytPubsubPubsubInstance")||new g.vf;g.vf.prototype.subscribe=g.vf.prototype.subscribe;g.vf.prototype.unsubscribeByKey=g.vf.prototype.Dd;g.vf.prototype.publish=g.vf.prototype.qa;g.vf.prototype.clear=g.vf.prototype.clear;g.n("ytPubsubPubsubInstance",Cca,void 0);var fg=g.q("ytPubsubPubsubSubscribedKeys")||{};g.n("ytPubsubPubsubSubscribedKeys",fg,void 0);var hg=g.q("ytPubsubPubsubTopicToKeys")||{};g.n("ytPubsubPubsubTopicToKeys",hg,void 0);var gg=g.q("ytPubsubPubsubIsSynchronous")||{};
g.n("ytPubsubPubsubIsSynchronous",gg,void 0);var Maa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Naa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.ng.prototype.initialize=function(a,b,c,d){var e=this;b?(this.F=!0,g.lg(b,function(){e.F=!1;if(window.botguard)og(e,c,d);else{g.mg(b);var a=Error("Unable to load Botguard");a.params="from "+b;g.Yf(a)}})):a&&(eval(a),window.botguard?og(this,c,d):g.Yf(Error("Unable to load Botguard from JS")))};
g.ng.prototype.fe=function(){return!!this.C};
g.ng.prototype.dispose=function(){this.C=null};g.ia(vg,Oaa);vg.prototype.start=function(){var a=g.q("yt.scheduler.instance.start");a&&a()};
vg.prototype.pause=function(){var a=g.q("yt.scheduler.instance.pause");a&&a()};
g.za(vg);vg.getInstance();g.Ag=new g.ng;g.Fg=new function(){var a=window.document;this.C=window;this.F=a};
g.n("yt.ads.signals.getAdSignalsString",function(){return g.Bg(g.Ig())},void 0);(0,g.Bd)();var Kg=g.ua(XMLHttpRequest)?function(){return new XMLHttpRequest}:g.ua(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Ng,Uaa,Ug;Ng={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Uaa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Ug=!1;g.Fl=Vg;Zg.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.Le(a)?a:g.ah(a)):2===this.F&&b?(a=b.call(c,this.C),g.Le(a)?a:g.$g(a)):this};
Zg.prototype.getValue=function(){return this.C};
g.Ke(Zg);var Dca=0,Yaa=g.w.mb?"webkit":g.w.Bb?"moz":g.w.ma?"ms":g.w.Rb?"o":"",bh=g.q("ytDomDomGetNextId")||function(){return++Dca};
g.n("ytDomDomGetNextId",bh,void 0);var Zaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.eh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.eh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.eh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ih=g.q("ytEventsEventsListeners")||{};g.n("ytEventsEventsListeners",ih,void 0);var kh=g.q("ytEventsEventsCounter")||{count:0};g.n("ytEventsEventsCounter",kh,void 0);var lh=g.Yb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.v(g.oh,g.Vd);g.oh.prototype.X=function(a){this.C=new g.tc(g.gh(a),g.hh(a))};
g.oh.prototype.R=function(){if(this.C){var a=g.Dh();if(0!=this.D){var b=g.vc(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.hc();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.oh.prototype.Y=function(){g.dg(this.O);g.I(this.J)};g.ia(ph,g.Vd);ph.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.xe);break}};
ph.prototype.Y=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.xe)}g.Vd.prototype.Y.call(this)};qh.prototype.clone=function(){var a=new qh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.Aa(c)?a[b]=g.tb(c):a[b]=c}return a};var th={},sh=0;var cba,Kh,Lh,bba,Eh,dba,yh;cba=Math.pow(2,16)-1;Kh=null;Lh=0;bba={log_event:"events",log_interaction:"interactions"};Eh=Object.create(null);Eh.log_event="GENERIC_EVENT_LOGGING";Eh.log_interaction="INTERACTION_LOGGING";dba=new Set(["log_event"]);yh={};g.vh=0;g.wh=0;g.xh=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.n("ytLoggingTransportLogPayloadsQueue_",g.xh,void 0);var Jh=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.n("ytLoggingTransportTokensToCttTargetIds_",Jh,void 0);
var Bh=g.q("ytLoggingTransportDispatchedStats_")||{};g.n("ytLoggingTransportDispatchedStats_",Bh,void 0);var Fh=g.q("ytLoggingTransportCapturedTime_")||{};g.n("ytytLoggingTransportCapturedTime_",Fh,void 0);var Qh={};g.Yh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.Bd)()+1E3*c);return}catch(h){}var e="";if(d)try{e=escape(g.sf(b))}catch(h){return}else e=escape(b);g.Wh(a,e,c,this.F)};
g.Yh.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Vh.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.Yh.prototype.remove=function(a){this.C&&this.C.remove(a);g.Xh(a,"/",this.F)};var Zh=new g.Yh("yt.innertube");g.ei.prototype.toString=function(){return JSON.stringify(g.fi(this))};var ji=g.q("ytLoggingLatencyUsageStats_")||{};g.n("ytLoggingLatencyUsageStats_",ji,void 0);var ki=0;var li=(0,g.Bd)().toString();var pi=g.q("ytLoggingTimeDocumentNonce_")||mi(),qi,ni;g.n("ytLoggingTimeDocumentNonce_",pi,void 0);qi=0;g.oi=null;ni=null;g.n("yt_logging_screen.getRootVeType",vi,void 0);g.n("yt_logging_screen.getCurrentCsn",g.xi,void 0);g.n("yt_logging_screen.setCurrentScreen",g.yi,void 0);g.f=g.Ai.prototype;g.f.GL=function(){this.fe()||this.init()};
g.f.enable=function(){this.C=1;(0,g.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.GL,this),this.subscribe("dispose-"+a,this.dispose,this),g.B("PAGE_NAME")==a&&g.Bi(this))},this)};
g.f.init=function(){g.tg(this.F);this.C=2;this.L&&this.L()};
g.f.fe=function(){return 2==this.C};
g.f.dispose=function(){this.C=3;g.tg(this.F);this.H&&this.H()};
g.f.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Wf(a)}};
g.f.subscribe=function(a,b,c){a=g.D(a,b,c);this.G.push(a);return a};
g.f.clear=function(){g.ig(this.G);this.G=[]};var Ci=g.q("yt.modules.registry_")||{};g.n("yt.modules.registry_",Ci,void 0);g.Fi=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.n("yt.msgs_",g.Fi,void 0);var Li={},iba=0;var jba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.ia(Vi,g.Vd);g.f=Vi.prototype;
g.f.loadNewVideoConfig=function(a){if(!this.sb()){this.nb=a=g.rh(a);this.C=a.clone();this.F=this.C.attrs.id||this.F;"video-player"==this.F&&(this.F=this.O,this.C.attrs.id=this.O);this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F);this.C.args.enablejsapi="1";this.C.args.playerapiid=this.O;this.ha||(this.ha=cj(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Sc(this.H,Number(a)||a);if(a=this.C.attrs.height)this.H.style.height=g.Rc(Number(a)||
a,!0);kba(this);this.L&&Wi(this)}};
g.f.Ex=function(){return this.nb};
g.f.PC=function(){return this.L};
g.f.xi=function(a,b){var c=this,d=cj(this,b);if(d){if(!g.Ma(this.ub,a)&&!this.D[a]){var e=mba(this,a);this.X&&this.X(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.L&&g.ag(function(){d(c.api)},0)}};
g.f.sL=function(a,b){if(!this.sb()){var c=cj(this,b);c&&g.wf(this.J,a,c)}};
g.f.aw=function(a){g.E("a11y-announce",a)};
g.f.WG=function(a){g.E("WATCH_LATER_VIDEO_ADDED",a)};
g.f.XG=function(a){g.E("WATCH_LATER_VIDEO_REMOVED",a)};
g.f.uy=function(){return this.la||(Xi(this)?"html5":null)};
g.f.by=function(){return this.Ya};
g.f.cancel=function(){if(this.R){var a=this.R,b=g.kg(this.C.assets.js);spf.script.ignore(b,a)}g.cg(this.rb);this.V=!1};
g.f.Y=function(){$i(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Wf(b)}this.ra=null;for(var a in this.D)g.m[this.D[a]]=null;this.nb=this.C=this.api=null;delete this.oa;delete this.H;g.Vd.prototype.Y.call(this)};g.ej={};g.dj="player_uid_"+(1E9*Math.random()>>>0);g.jj.prototype.toString=function(){return this.topic};var Eca=g.q("ytPubsub2Pubsub2Instance")||new g.vf;g.vf.prototype.subscribe=g.vf.prototype.subscribe;g.vf.prototype.unsubscribeByKey=g.vf.prototype.Dd;g.vf.prototype.publish=g.vf.prototype.qa;g.vf.prototype.clear=g.vf.prototype.clear;g.n("ytPubsub2Pubsub2Instance",Eca,void 0);g.Gl=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.n("ytPubsub2Pubsub2SubscribedKeys",g.Gl,void 0);g.Hl=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.n("ytPubsub2Pubsub2TopicToKeys",g.Hl,void 0);
g.Il=g.q("ytPubsub2Pubsub2IsAsync")||{};g.n("ytPubsub2Pubsub2IsAsync",g.Il,void 0);g.n("ytPubsub2Pubsub2SkipSubKey",null,void 0);var pj=null;g.Jl=window.performance&&window.performance.memory;g.Nk={};var qj=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.ia(tj,g.ij);g.ia(uj,g.ij);var wba=new g.jj("aft-recorded",tj),Cba=new g.jj("timing-sent",uj);var Aba,Bj,Kl,Tj,yba,tba,xba,Ll,Uj,Qj,vj,vba,ak,Uba;Aba={vc:!0};
Bj={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_sel_auto_svg_home_v2"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",
'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",
'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};Kl={};
Tj=(Kl.ad_allowed="adTypesAllowed",Kl.yt_abt="adBreakType",Kl.ad_cpn="adClientPlaybackNonce",Kl.ad_docid="adVideoId",Kl.yt_ad_an="adNetworks",Kl.ad_at="adType",Kl.browse_id="browseId",Kl.p="httpProtocol",Kl.t="transportProtocol",Kl.cpn="clientPlaybackNonce",Kl.csn="clientScreenNonce",Kl.docid="videoId",Kl.is_continuation="isContinuation",Kl.is_nav="isNavigation",Kl.b_p="kabukiInfo.browseParams",Kl.is_prefetch="kabukiInfo.isPrefetch",Kl.is_secondary_nav="kabukiInfo.isSecondaryNav",Kl.prev_browse_id=
"kabukiInfo.prevBrowseId",Kl.query_source="kabukiInfo.querySource",Kl.voz_type="kabukiInfo.vozType",Kl.yt_lt="loadType",Kl.yt_ad="isMonetized",Kl.nr="webInfo.navigationReason",Kl.ncnp="webInfo.nonPreloadedNodeCount",Kl.paused="playerInfo.isPausedOnLoad",Kl.yt_pt="playerType",Kl.fmt="playerInfo.itag",Kl.yt_pl="watchInfo.isPlaylist",Kl.yt_pre="playerInfo.preloadType",Kl.yt_ad_pr="prerollAllowed",Kl.pa="previousAction",Kl.yt_red="isRedSubscriber",Kl.st="serverTimeMs",Kl.aq="tvInfo.appQuality",Kl.br_trs=
"tvInfo.bedrockTriggerState",Kl.label="tvInfo.label",Kl.is_mdx="tvInfo.isMdx",Kl.preloaded="tvInfo.isPreloaded",Kl.query="unpluggedInfo.query",Kl.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Kl.yt_vst="videoStreamType",Kl.vph="viewportHeight",Kl.vpw="viewportWidth",Kl.yt_vis="isVisible",Kl);yba="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
tba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
"channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",chips:"LATENCY_ACTION_CHIPS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",search_ui:"LATENCY_ACTION_SEARCH_UI",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",
"watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
"video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"};xba="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" ");Ll={};Uj=(Ll.pa="LATENCY_ACTION_",Ll.yt_pt="LATENCY_PLAYER_",Ll.yt_vst="VIDEO_STREAM_TYPE_",Ll);Qj=!1;vj=!1;
vba=(0,g.r)(qj.clearResourceTimings||qj.webkitClearResourceTimings||qj.mozClearResourceTimings||qj.msClearResourceTimings||qj.oClearResourceTimings||g.ya,qj);ak=wj;Uba=Aj;g.bk=yj;var ik=0,ek=[],hk=[],Zj=0,fk={},gk={},ck=new g.ef(Jba,1E3);var kk=["server_prefetched_vast","vmap"];var mk,rk;g.qk=null;rk="";var tk=null,wk=[];var Bk,Tk,Sk,Dk,Ck,Qba,Tba,Rba,Sba,Ok;Dk=0;Ck=0;Qba=[900,60,"waiting"];Tba=[500,99,"waiting"];Rba=[300,60,"waiting"];Sba=[400,99,"waiting"];Ok=[300,101,"done"];var $k=!1;window.yt=window.yt||{};g.n("yt.setConfig",g.Tf,void 0);g.n("yt.pushConfigArray",Uf,void 0);g.n("yt.getConfig",g.B,void 0);g.n("yt.config.set",g.Tf,void 0);g.n("yt.config.pushArray",Uf,void 0);g.n("yt.config.get",g.B,void 0);g.n("yt.hasMsg",g.Hi,void 0);g.n("yt.setMsg",Gi,void 0);g.n("yt.setGoogMsg",Ii,void 0);g.n("yt.msgs.has",g.Hi,void 0);g.n("yt.msgs.set",Gi,void 0);g.n("yt.msgs.setGoog",Ii,void 0);g.n("yt.pubsub.publish",g.E,void 0);g.n("yt.pubsub.subscribe",g.D,void 0);
g.n("ytcsi.tick",g.bk,void 0);g.v(dl,g.Ai);
dl.prototype.enable=function(){window.onload=Oba;window.onunload=Pba;window.onerror=Laa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",zk),window.addEventListener("spfhistory",Ak),window.addEventListener("spfrequest",Fk),window.addEventListener("spfpartprocess",Jk),window.addEventListener("spfpartdone",Kk),window.addEventListener("spfprocess",Lk),window.addEventListener("spfdone",Pk),window.addEventListener("spferror",Qk),window.addEventListener("spfreload",
Rk),window.addEventListener("spfjsbeforeunload",el)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",Wba),this.subscribe("dispose",Xba)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
dl.prototype.init=function(){dl.M.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.B("PAGEFRAME_JS")){var b=g.B("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
a=g.B("JS_COMMON_MODULE");var d=g.B("JS_PAGE_MODULES");d||(d=[a]);a=g.B("JS_DELAY_LOAD",0);0<a?(g.cg(this.D),this.D=g.ag(function(){b&&g.lg(b,c);spf.script.require(d)},a)):(b&&g.lg(b,c),spf.script.require(d));
g.n("yt.abuse.player.botguardInitialized",Qaa,void 0);g.n("yt.abuse.player.invokeBotguard",Raa,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",Paa,void 0);g.n("yt.player.exports.navigate",g.Ti,void 0);g.n("yt.util.activity.init",g.Ph,void 0);g.n("yt.util.activity.getTimeSinceActive",g.Rh,void 0);g.n("yt.util.activity.setTimestamp",g.Nh,void 0);sk(g.q("ytplayer.config"));g.q("ytspf.enabled")&&Mba();uba();g.B("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.yg("service_worker_enabled")?lca():jca())};
dl.prototype.dispose=function(){g.cg(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.dg(mk);if(a=g.ok())a.removeEventListener("onReady",nk),a.removeEventListener("onStateChange",nk);Ij(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.C(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.nh(a);dl.M.dispose.call(this)};
dl.prototype.disable=function(){dl.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",zk),window.removeEventListener("spfhistory",Ak),window.removeEventListener("spfrequest",Fk),window.removeEventListener("spfpartprocess",Jk),window.removeEventListener("spfpartdone",Kk),window.removeEventListener("spfprocess",Lk),window.removeEventListener("spfdone",Pk),window.removeEventListener("spferror",Qk),window.removeEventListener("spfreload",Rk),window.removeEventListener("spfjsbeforeunload",
el));window.onload=null;window.onunload=null;window.onerror=null};
g.Ei(new dl);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:10:15 Mar 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:44:25 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 516.758
  exclusion.robots: 0.097
  exclusion.robots.policy: 0.087
  cdx.remote: 0.065
  esindex: 0.01
  LoadShardBlock: 352.936 (3)
  PetaboxLoader3.datanode: 399.609 (4)
  load_resource: 159.536
  PetaboxLoader3.resolve: 45.609
*/