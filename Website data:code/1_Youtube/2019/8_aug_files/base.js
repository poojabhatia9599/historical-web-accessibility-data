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

var _yt_www={};(function(g){var window=this;var ca,aaa,ja,ka,la,na,ma,pa,qa,ra,xa,eaa,faa,Cb,Wb,pc,kaa,tc,Ac,Ec,Fc,Gc,Oc,Pc,maa,oaa,Ld,paa,qaa,Md,Nd,saa,Vd,Xd,Yd,be,taa,ee,le,ke,vaa,oe,pe,qe,re,xaa,te,ue,ye,yaa,ze,Ge,Ie,zaa,Ne,Re,Le,Je,Baa,Qe,Oe,Pe,Te,Aaa,Caa,Ze,$e,df,Daa,Eaa,Faa,kf,mf,Haa,rf,sf,tf,Iaa,wf,Af,Bf,Cf,Df,Ef,Gf,Kaa,Kf,Nf,Of,Qf,Laa,Yf,jg,Oaa,qg,lg,Paa,sg,Qaa,Raa,Saa,Taa,Vaa,Jg,Waa,Kg,Lg,Xaa,Rg,Pg,Mg,Tg,$g,mh,nh,aba,zh,$aa,eba,Lh,Rh,Sh,fba,Yh,Zh,hi,gi,gba,li,si,ti,ui,yi,Ci,Fi,Hi,Ii,hba,kba,Ri,Ti,Qi,Si,Zi,$i,bj,lba,aj,cj,mba,fj,Yi,
gj,nba,dj,ej,oba,qj,pba,qba,vj,wj,xj,yj,vba,Qj,Cj,Rj,Dj,Aj,Lj,Vj,Ej,rba,Zj,Kj,ak,sba,tba,Mj,Hj,Ij,Bj,Uj,Jj,ck,Oj,Wj,Pj,Aba,Gj,Yj,Cba,Jba,Iba,Hba,ik,Gba,Eba,Fba,Kba,Lba,Mba,Nba,wk,sk,uk,yk,Oba,zk,Ck,Pba,Qba,Dk,Ek,Jk,Nk,Ok,Pk,Tk,Uk,Vk,Xba,Yba,Kk,Mk,Ik,Wba,Lk,Zk,al,Yk,bl,$k,Zba,cca,$ba,fca,bca,aca,dca,eca,hca,el,gca,cl,ica,kca,mca,lca,jca,fl,gl,hl,ea,il,caa,ya,Ja,daa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
g.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
aaa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
g.n=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.T=b.prototype};
ja=function(a,b){if(b){for(var c=ha,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}};
ka=function(){ka=function(){};
ha.Symbol||(ha.Symbol=baa)};
la=function(a,b){this.C=a;ia(this,"description",{configurable:!0,writable:!0,value:b})};
na=function(){ka();var a=ha.Symbol.iterator;a||(a=ha.Symbol.iterator=ha.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ma(ca(this))}});
na=function(){}};
ma=function(a){na();a={next:a};a[ha.Symbol.iterator]=function(){return this};
return a};
pa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
qa=function(a,b){na();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
ra=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.sa=function(a){return void 0!==a};
g.ua=function(a){return"string"==typeof a};
g.va=function(a){return"boolean"==typeof a};
g.wa=function(a){return"number"==typeof a};
g.r=function(a,b,c){a=a.split(".");c=c||g.p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.sa(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.za=function(a){if(a&&a!=g.p)return xa(a.document);null===ya&&(ya=xa(g.p.document));return ya};
xa=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&caa.test(a)?a:""};
g.u=function(a,b){for(var c=a.split("."),d=b||g.p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.Aa=function(){};
g.Ba=function(a){a.Ac=void 0;a.getInstance=function(){return a.Ac?a.Ac:a.Ac=new a}};
g.Ca=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Da=function(a){return"array"==g.Ca(a)};
g.Ea=function(a){var b=g.Ca(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Fa=function(a){return"function"==g.Ca(a)};
g.Ia=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ka=function(a){return a[Ja]||(a[Ja]=++daa)};
eaa=function(a,b,c){return a.call.apply(a.bind,arguments)};
faa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.v=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.v=eaa:g.v=faa;return g.v.apply(null,arguments)};
g.w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.x=function(a,b){function c(){}
c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.su=function(d,e,f){for(var k=Array(arguments.length-2),l=2;l<arguments.length;l++)k[l-2]=arguments[l];b.prototype[e].apply(d,k)}};
g.La=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.La);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Na=function(a,b,c){b=g.Ma(a,b,c);return 0>b?null:g.ua(a)?a.charAt(b):a[b]};
g.Ma=function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Pa=function(a,b){return 0<=(0,g.Oa)(a,b)};
g.Qa=function(a){return 0==a.length};
g.Sa=function(a,b){var c=(0,g.Oa)(a,b),d;(d=0<=c)&&g.Ra(a,c);return d};
g.Ra=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Ta=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Ua=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Va=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Wa=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Xa=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Ya=function(a,b){return null!==a&&b in a};
g.Za=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.$a=function(a){for(var b in a)return!1;return!0};
g.ab=function(a,b){b in a&&delete a[b]};
g.bb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.cb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};
g.db=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.eb=function(a){var b=g.Ca(a);if("object"==b||"array"==b){if(g.Fa(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.eb(a[c]);return b}return a};
g.gb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fb.length;f++)c=fb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.jb=function(a,b){this.C=a===hb&&b||"";this.F=ib};
g.kb=function(a){return a instanceof g.jb&&a.constructor===g.jb&&a.F===ib?a.C:"type_error:Const"};
g.lb=function(a){return new g.jb(hb,a)};
g.nb=function(){this.F="";this.D=mb};
g.ob=function(a){if(a instanceof g.nb&&a.constructor===g.nb&&a.D===mb)return a.F;g.Ca(a);return"type_error:TrustedResourceUrl"};
g.qb=function(a){return g.pb(g.kb(a))};
g.pb=function(a){var b=new g.nb;b.F=a;return b};
g.rb=function(a,b){return 0==a.lastIndexOf(b,0)};
g.sb=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.tb=function(a){return/^[\s\xa0]*$/.test(a)};
g.Ab=function(a,b){if(b)a=a.replace(ub,"&amp;").replace(vb,"&lt;").replace(wb,"&gt;").replace(xb,"&quot;").replace(yb,"&#39;").replace(zb,"&#0;");else{if(!gaa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ub,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(vb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(wb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(xb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(yb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(zb,"&#0;"))}return a};
g.Db=function(a,b){for(var c=0,d=(0,g.Bb)(String(a)).split("."),e=(0,g.Bb)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Cb(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||Cb(0==l[2].length,0==m[2].length)||Cb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Cb=function(a,b){return a<b?-1:a>b?1:0};
g.Fb=function(){this.F="";this.D=Eb};
g.Hb=function(a){return g.Gb(a).toString()};
g.Gb=function(a){if(a instanceof g.Fb&&a.constructor===g.Fb&&a.D===Eb)return a.F;g.Ca(a);return"type_error:SafeUrl"};
g.Jb=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(haa);b=b&&iaa.test(b[1]);return g.Ib(b?a:"about:invalid#zClosurez")};
g.Lb=function(a){if(a instanceof g.Fb)return a;a="object"==typeof a&&a.Qd?a.Vc():String(a);Kb.test(a)||(a="about:invalid#zClosurez");return g.Ib(a)};
g.Mb=function(a,b){if(a instanceof g.Fb)return a;a="object"==typeof a&&a.Qd?a.Vc():String(a);if(b&&/^data:/i.test(a)){var c=g.Jb(a);if(c.Vc()==a)return c}Kb.test(a)||(a="about:invalid#zClosurez");return g.Ib(a)};
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
g.bc=function(a){if(a instanceof g.ac&&a.constructor===g.ac&&a.G===$b)return a.F;g.Ca(a);return"type_error:SafeHtml"};
g.ec=function(a){if(a instanceof g.ac)return a;var b="object"==typeof a,c=null;b&&a.ll&&(c=a.C());return g.dc(g.Ab(b&&a.Qd?a.Vc():String(a)),c)};
g.dc=function(a,b){return g.fc(a,b)};
g.fc=function(a,b){var c=new g.ac;c.F=a;c.D=b;return c};
g.gc=function(a,b){var c=b instanceof g.Fb?b:g.Mb(b);a.href=g.Gb(c)};
g.hc=function(a,b){a.src=g.ob(b).toString()};
g.ic=function(a,b){var c=b instanceof g.Fb?b:g.Mb(b);a.href=g.Gb(c)};
g.jc=function(a){return encodeURIComponent(String(a))};
g.kc=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.lc=function(a){return a=g.Ab(a,void 0)};
g.nc=function(a,b,c){a=g.sa(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return(0,g.mc)("0",Math.max(0,b-c))+a};
g.oc=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
pc=function(){return g.Ub("iPhone")&&!g.Ub("iPod")&&!g.Ub("iPad")};
g.qc=function(){return pc()||g.Ub("iPad")||g.Ub("iPod")};
g.rc=function(a){g.rc[" "](a);return a};
g.sc=function(a,b){try{return g.rc(a[b]),!0}catch(c){}return!1};
kaa=function(a,b){var c=jaa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
tc=function(){var a=g.p.document;return a?a.documentMode:void 0};
g.vc=function(a){return kaa(a,function(){return 0<=g.Db(g.uc,a)})};
g.xc=function(a){return Number(g.wc)>=a};
Ac=function(a,b){g.Ea(a);!1===b||void 0===b?b=0:!0===b&&(b=3);g.yc();for(var c=zc[b],d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,q=m?a[e+2]:0,t=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[t],c[f],c[l]||"",c[q]||"")}return d.join("")};
g.yc=function(){if(!g.Bc){g.Bc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));zc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===g.Bc[f]&&(g.Bc[f]=e)}}}};
g.Cc=function(a){this.C=0;this.F=a};
g.Dc=function(){};
Ec=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Da(c))for(var d=0;d<c.length;d++)c[d]&&c[d].ad();else c&&c.ad()}};
Fc=function(a,b){return g.wa(b)&&(isNaN(b)||Infinity===b||-Infinity===b)?String(b):b};
Gc=function(a){if(g.Da(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Gc(d):d)}return b}if(g.Hc&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Gc(d):d);return b};
g.Ic=function(a){this.C=a||{cookie:""}};
g.Jc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Bb)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Lc=function(a){var b=g.u("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(g.ua(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.p.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(b=a.constructor&&
a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:g.Kc(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})};
g.Kc=function(a){if(Mc[a])return Mc[a];a=String(a);if(!Mc[a]){var b=/function\s+([^\(]+)/m.exec(a);Mc[a]=b?b[1]:"[Anonymous]"}return Mc[a]};
g.Nc=function(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31};
g.Rc=function(a,b,c){g.wa(a)?(this.date=Oc(a,b||0,c||1),Pc(this,c||1)):g.Ia(a)?(this.date=Oc(a.getFullYear(),a.getMonth(),a.getDate()),Pc(this,a.getDate())):(this.date=new Date((0,g.Qc)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Pc(this,a))};
Oc=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
Pc=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}};
g.Sc=function(a,b){this.x=g.sa(a)?a:0;this.y=g.sa(b)?b:0};
g.Tc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Uc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.Vc=function(a,b){this.width=a;this.height=b};
g.z=function(a){return g.ua(a)?document.getElementById(a):a};
g.Wc=function(a){var b=document;return g.ua(a)?b.getElementById(a):a};
g.Yc=function(a,b){g.Wa(b,function(c,d){c&&"object"==typeof c&&c.Qd&&(c=c.Vc());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Xc.hasOwnProperty(d)?a.setAttribute(Xc[d],c):g.rb(d,"aria-")||g.rb(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.$c=function(a){return g.Zc(a||window)};
g.Zc=function(a){a=a.document;a=g.ad(a)?a.documentElement:a.body;return new g.Vc(a.clientWidth,a.clientHeight)};
g.cd=function(a,b,c){return g.bd(document,arguments)};
g.bd=function(a,b){var c=String(b[0]),d=b[1];if(!laa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.lc(d.name),'"');if(d.type){c.push(' type="',g.lc(d.type),'"');var e={};g.gb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ua(d)?c.className=d:g.Da(d)?c.className=d.join(" "):g.Yc(c,d));2<b.length&&g.dd(a,c,b,2);return c};
g.dd=function(a,b,c,d){function e(k){k&&b.appendChild(g.ua(k)?a.createTextNode(k):k)}
for(;d<c.length;d++){var f=c[d];!g.Ea(f)||g.Ia(f)&&0<f.nodeType?e(f):(0,g.A)(maa(f)?g.Ta(f):f,e)}};
g.ed=function(a){return document.createElement(String(a))};
g.ad=function(a){return"CSS1Compat"==a.compatMode};
g.fd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.gd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.hd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
maa=function(a){if(a&&"number"==typeof a.length){if(g.Ia(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Fa(a))return"function"==typeof a.item}return!1};
g.id=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.jd=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.kd=function(a){return a?decodeURI(a):a};
g.md=function(a,b){return b.match(g.ld)[a]||null};
g.nd=function(a){return g.kd(g.md(3,a))};
g.od=function(a){a=a.match(g.ld);return g.jd(null,null,null,null,a[5],a[6],a[7])};
g.pd=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.qd=function(a,b){return b?a?a+"&"+b:b:a};
g.rd=function(a,b){if(!b)return a;var c=g.pd(a);c[1]=g.qd(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.sd=function(a,b,c){if(g.Da(b))for(var d=0;d<b.length;d++)g.sd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.jc(b)))};
g.td=function(a){var b=[],c;for(c in a)g.sd(c,a[c],b);return b.join("&")};
g.vd=function(a,b){var c=g.td(b);return g.rd(a,c)};
g.wd=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.yd=function(a,b){var c=a.search(g.xd),d=g.wd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.kc(a.substr(d,e-d))};
g.zd=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.Ad=function(a){var b=[];g.zd(a,function(c){b.push(c)});
return b};
oaa=function(){var a=g.ed("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};(0,g.A)(naa(),function(d){b.call(a,d)&&(c[d]=!0)});
return c};
g.Bd=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Cd=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Ed=function(a,b){a.style.width=g.Cd(b,!0)};
g.Fd=function(a,b){return typeof a===b};
g.Hd=function(){var a=void 0===a?g.Gd:a;try{return a.history.length}catch(b){return 0}};
g.Id=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Hd();a.u_java=!!g.Gd.navigator&&!g.Fd(g.Gd.navigator.javaEnabled,"unknown")&&!!g.Gd.navigator.javaEnabled&&g.Gd.navigator.javaEnabled();g.Gd.screen&&(a.u_h=g.Gd.screen.height,a.u_w=g.Gd.screen.width,a.u_ah=g.Gd.screen.availHeight,a.u_aw=g.Gd.screen.availWidth,a.u_cd=g.Gd.screen.colorDepth);g.Gd.navigator&&g.Gd.navigator.plugins&&(a.u_nplug=g.Gd.navigator.plugins.length);g.Gd.navigator&&g.Gd.navigator.mimeTypes&&(a.u_nmime=g.Gd.navigator.mimeTypes.length)};
g.Jd=function(a,b){try{return(void 0===b?0:b)?(new g.Vc(a.innerWidth,a.innerHeight)).round():g.$c(a).round()}catch(c){return new g.Vc(-12245933,-12245933)}};
g.Kd=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var f=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,k]};
Ld=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
paa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=q=0}
function b(y){for(var B=k,H=0;64>H;H+=4)B[H/4]=y[H]<<24|y[H+1]<<16|y[H+2]<<8|y[H+3];for(H=16;80>H;H++)y=B[H-3]^B[H-8]^B[H-14]^B[H-16],B[H]=(y<<1|y>>>31)&4294967295;y=e[0];var Q=e[1],U=e[2],ta=e[3],Ga=e[4];for(H=0;80>H;H++){if(40>H)if(20>H){var Ha=ta^Q&(U^ta);var ud=1518500249}else Ha=Q^U^ta,ud=1859775393;else 60>H?(Ha=Q&U|ta&(Q|U),ud=2400959708):(Ha=Q^U^ta,ud=3395469782);Ha=((y<<5|y>>>27)&4294967295)+Ha+Ga+ud+B[H]&4294967295;Ga=ta;ta=U;U=(Q<<30|Q>>>2)&4294967295;Q=y;y=Ha}e[0]=e[0]+y&4294967295;e[1]=
e[1]+Q&4294967295;e[2]=e[2]+U&4294967295;e[3]=e[3]+ta&4294967295;e[4]=e[4]+Ga&4294967295}
function c(y,B){if("string"===typeof y){y=unescape(encodeURIComponent(y));for(var H=[],Q=0,U=y.length;Q<U;++Q)H.push(y.charCodeAt(Q));y=H}B||(B=y.length);H=0;if(0==q)for(;H+64<B;)b(y.slice(H,H+64)),H+=64,t+=64;for(;H<B;)if(f[q++]=y[H++],t++,64==q)for(q=0,b(f);H+64<B;)b(y.slice(H,H+64)),H+=64,t+=64}
function d(){var y=[],B=8*t;56>q?c(l,56-q):c(l,64-(q-56));for(var H=63;56<=H;H--)f[H]=B&255,B>>>=8;b(f);for(H=B=0;5>H;H++)for(var Q=24;0<=Q;Q-=8)y[B++]=e[H]>>Q&255;return y}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,t;a();return{reset:a,update:c,digest:d,Ou:function(){for(var y=d(),B="",H=0;H<y.length;H++)B+="0123456789ABCDEF".charAt(Math.floor(y[H]/16))+"0123456789ABCDEF".charAt(y[H]%16);return B}}};
qaa=function(a,b,c){var d=[],e=[];if(1==(g.Da(c)?2:1))return e=[b,a],(0,g.A)(d,function(l){e.push(l)}),Md(e.join(" "));
var f=[],k=[];(0,g.A)(c,function(l){k.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Qa(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.A)(d,function(l){e.push(l)});
a=Md(e.join(" "));a=[c,a];g.Qa(k)||a.push(k.join(""));return a.join("_")};
Md=function(a){var b=paa();b.update(a);return b.Ou().toLowerCase()};
Nd=function(a){var b=Ld(String(g.p.location.href)),c=g.p.__OVERRIDE_SID;null==c&&(c=(new g.Ic(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.p.__SAPISID:g.p.__APISID,null==b&&(b=(new g.Ic(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.p.location.href);return d&&b&&c?[c,qaa(Ld(d),b,a||null)].join(" "):null}return null};
g.C=function(){this.Sc=this.Sc;this.Ff=this.Ff};
g.Qd=function(a,b){g.Od(a,g.w(g.Pd,b))};
g.Od=function(a,b){a.Sc?g.sa(void 0)?b.call(void 0):b():(a.Ff||(a.Ff=[]),a.Ff.push(g.sa(void 0)?(0,g.v)(b,void 0):b))};
g.Pd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Rd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Sr=!0};
g.Sd=function(a,b){g.Rd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.xc=null;a&&this.init(a,b)};
g.Ud=function(a){return!(!a||!a[Td])};
saa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.kh=e;this.key=++raa;this.wg=this.Yh=!1};
Vd=function(a){a.wg=!0;a.listener=null;a.C=null;a.src=null;a.kh=null};
g.Wd=function(a){this.src=a;this.listeners={};this.C=0};
Xd=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Sa(a.listeners[c],b);d&&(Vd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Yd=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.wg&&f.listener==b&&f.capture==!!c&&f.kh==d)return e}return-1};
g.$d=function(a,b,c,d,e){if(d&&d.once)return g.Zd(a,b,c,d,e);if(g.Da(b)){for(var f=0;f<b.length;f++)g.$d(a,b[f],c,d,e);return null}c=g.ae(c);return g.Ud(a)?a.O(b,c,g.Ia(d)?!!d.capture:!!d,e):be(a,b,c,!1,d,e)};
be=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ia(e)?!!e.capture:!!e,l=g.ce(a);l||(a[de]=l=new g.Wd(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=taa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)uaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ee(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");fe++;return c};
taa=function(){var a=vaa,b=ge?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Zd=function(a,b,c,d,e){if(g.Da(b)){for(var f=0;f<b.length;f++)g.Zd(a,b[f],c,d,e);return null}c=g.ae(c);return g.Ud(a)?a.Ge(b,c,g.Ia(d)?!!d.capture:!!d,e):be(a,b,c,!0,d,e)};
g.he=function(a,b,c,d,e){if(g.Da(b))for(var f=0;f<b.length;f++)g.he(a,b[f],c,d,e);else d=g.Ia(d)?!!d.capture:!!d,c=g.ae(c),g.Ud(a)?a.Va(b,c,d,e):a&&(a=g.ce(a))&&(b=a.ef(b,c,d,e))&&g.ie(b)};
g.ie=function(a){if(g.wa(a)||!a||a.wg)return!1;var b=a.src;if(g.Ud(b))return Xd(b.vd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ee(c),d):b.addListener&&b.removeListener&&b.removeListener(d);fe--;(c=g.ce(b))?(Xd(c,a),0==c.C&&(c.src=null,b[de]=null)):Vd(a);return!0};
ee=function(a){return a in je?je[a]:je[a]="on"+a};
le=function(a,b,c,d){var e=!0;if(a=g.ce(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.wg&&(f=ke(f,d),e=e&&!1!==f)}return e};
ke=function(a,b){var c=a.listener,d=a.kh||a.src;a.Yh&&g.ie(a);return c.call(d,b)};
vaa=function(a,b){if(a.wg)return!0;if(!ge){var c=b||g.u("window.event"),d=new g.Sd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=le(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=le(c[k],f,!1,d),e=e&&l}return e}return ke(a,new g.Sd(b,
this))};
g.ce=function(a){a=a[de];return a instanceof g.Wd?a:null};
g.ae=function(a){if(g.Fa(a))return a;a[me]||(a[me]=function(b){return a.handleEvent(b)});
return a[me]};
g.ne=function(){g.C.call(this);this.vd=new g.Wd(this);this.Xt=this;this.bm=null};
oe=function(a,b,c,d){b=a.vd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.wg&&k.capture==c){var l=k.listener,m=k.kh||k.src;k.Yh&&Xd(a.vd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.Sr};
pe=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
qe=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
re=function(a){g.p.setTimeout(function(){throw a;},0)};
xaa=function(){var a=g.p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Ub("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";g.hc(e,g.qb(waa));document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(g.bc(g.se));e.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.v)(function(m){if(("*"==
l||m.origin==l)&&m.data==k)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&!g.Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.sa(c.next)){c=c.next;var e=c.zn;c.zn=null;e()}};
return function(e){d.next={zn:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){g.p.setTimeout(e,0)}};
te=function(){this.F=this.C=null};
ue=function(){this.next=this.scope=this.kc=null};
ye=function(a,b){ve||yaa();we||(ve(),we=!0);xe.add(a,b)};
yaa=function(){if(g.p.Promise&&g.p.Promise.resolve){var a=g.p.Promise.resolve(void 0);ve=function(){a.then(ze)}}else ve=function(){var b=ze;
!g.Fa(g.p.setImmediate)||g.p.Window&&g.p.Window.prototype&&!g.Ub("Edge")&&g.p.Window.prototype.setImmediate==g.p.setImmediate?(Ae||(Ae=xaa()),Ae(b)):g.p.setImmediate(b)}};
ze=function(){for(var a;a=xe.remove();){try{a.kc.call(a.scope)}catch(b){re(b)}qe(Be,a)}we=!1};
g.Ce=function(a){a.prototype.$goog_Thenable=!0};
g.De=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Fe=function(a,b){this.C=0;this.M=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.Aa)try{var c=this;a.call(b,function(d){g.Ee(c,2,d)},function(d){g.Ee(c,3,d)})}catch(d){g.Ee(this,3,d)}};
Ge=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
Ie=function(a,b,c){var d=He.get();d.F=a;d.onRejected=b;d.context=c;return d};
zaa=function(a,b,c){Je(a,b,c,null)||ye(g.w(b,a))};
g.Ke=function(a){return new g.Fe(function(b,c){var d=a.length,e=[];if(d)for(var f=function(q,t){d--;e[q]=t;0==d&&b(e)},k=function(q){c(q)},l=0,m;l<a.length;l++)m=a[l],zaa(m,g.w(f,l),k);
else b(e)})};
g.Me=function(a,b){return Le(a,null,b,void 0)};
Ne=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Ne(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Oe(c),Pe(c,e,3,b)))}a.D=null}else g.Ee(a,3,b)};
Re=function(a,b){a.F||2!=a.C&&3!=a.C||Qe(a);a.G?a.G.next=b:a.F=b;a.G=b};
Le=function(a,b,c,d){var e=Ie(null,null,null);e.C=new g.Fe(function(f,k){e.F=b?function(l){try{var m=b.call(d,l);f(m)}catch(q){k(q)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);!g.sa(m)&&l instanceof g.Se?k(l):f(m)}catch(q){k(q)}}:k});
e.C.D=a;Re(a,e);return e.C};
g.Ee=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Je(c,a.Y,a.N,a)||(a.M=c,a.C=b,a.D=null,Qe(a),3!=b||c instanceof g.Se||Aaa(a,c)))};
Je=function(a,b,c,d){if(a instanceof g.Fe)return Re(a,Ie(b||g.Aa,c||null,d)),!0;if(g.De(a))return a.then(b,c,d),!0;if(g.Ia(a))try{var e=a.then;if(g.Fa(e))return Baa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Baa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function k(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Qe=function(a){a.L||(a.L=!0,ye(a.J,a))};
Oe=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Pe=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Te(b,c,d);else try{b.D?b.F.call(b.context):Te(b,c,d)}catch(e){Ue.call(null,e)}qe(He,b)};
Te=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Aaa=function(a,b){a.H=!0;ye(function(){a.H&&Ue.call(null,b)})};
g.Se=function(a){g.La.call(this,a)};
g.Ve=function(a,b,c){if(g.Fa(a))c&&(a=(0,g.v)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.v)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.p.setTimeout(a,b||0)};
g.We=function(a){g.p.clearTimeout(a)};
g.Xe=function(a,b,c){g.C.call(this);this.C=a;this.D=b||0;this.F=c;this.Yb=(0,g.v)(this.uo,this)};
Caa=function(){this.F=-1};
Ze=function(){this.F=64;this.C=[];this.L=[];this.M=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
$e=function(a,b,c){c||(c=0);var d=a.M;if(g.ua(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):(f=c^k^l,
q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.af=function(a){if(a.classList)return a.classList;a=a.className;return g.ua(a)&&a.match(/\S+/g)||[]};
g.D=function(a,b){return a.classList?a.classList.contains(b):g.Pa(g.af(a),b)};
g.bf=function(){};
df=function(a){if(a instanceof g.bf)return a;if("function"==typeof a.cd)return a.cd(!1);if(g.Ea(a)){var b=0,c=new g.bf;c.next=function(){for(;;){if(b>=a.length)throw g.cf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.ef=function(a,b,c){if(g.Ea(a))try{(0,g.A)(a,b,c)}catch(d){if(d!==g.cf)throw d;}else{a=df(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.cf)throw d;}}};
Daa=function(a){if(g.Ea(a))return g.Ta(a);a=df(a);var b=[];g.ef(a,function(c){b.push(c)});
return b};
g.gf=function(a,b){this.F={};this.C=[];this.Oe=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.ff(this,a)};
Eaa=function(a,b){return a===b};
g.jf=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.hf(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.hf(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.ff=function(a,b){if(b instanceof g.gf)for(var c=b.Hc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.hf=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.lf=function(a){var b=[];kf(new Faa,a,b);return b.join("")};
Faa=function(){};
kf=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.Da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),kf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),mf(d,c),c.push(":"),kf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":mf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
mf=function(a,b){b.push('"',a.replace(Gaa,function(c){var d=nf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),nf[c]=d);return d}),'"')};
g.of=function(a){g.C.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.pf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Na(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.rd(b)}};
Haa=function(a,b,c){ye(function(){a.apply(b,c)})};
g.qf=function(a){this.C=a};
rf=function(a){this.C=a};
sf=function(a){this.data=a};
tf=function(a){return!g.sa(a)||a instanceof sf?a:new sf(a)};
g.uf=function(a){this.C=a};
g.vf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Qc)()||!!b&&b>(0,g.Qc)()};
Iaa=function(){};
wf=function(){};
g.xf=function(a){this.C=a};
g.yf=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Af=function(a,b){this.F=a;this.C=null;if(g.E&&!g.xc(9)){zf||(zf=new g.gf);this.C=zf.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),zf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
Bf=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Jaa[b]})};
Cf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
Df=function(a){return a.C.XMLDocument.documentElement};
Ef=function(a,b){this.F=a;this.C=b+"::"};
g.Ff=function(a){var b=new g.yf;return b.isAvailable()?a?new Ef(b,a):b:null};
Gf=function(){this.C=[];this.F=-1};
Kaa=function(a){-1==a.F&&(a.F=(0,g.Hf)(a.C,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.F};
g.If=function(){var a=new Gf;g.p.SVGElement&&g.p.document.createElementNS&&a.set(0);var b=oaa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.p.crypto&&g.p.crypto.subtle&&a.set(3);g.p.TextDecoder&&g.p.TextEncoder&&a.set(4);return Kaa(a)};
g.Jf=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
Kf=function(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])};
g.Mf=function(a){Kf(g.Lf,arguments)};
Nf=function(a,b){var c=g.F(a,void 0);c?c.push(b):g.Mf(a,[b])};
g.F=function(a,b){return a in g.Lf?g.Lf[a]:b};
Of=function(a){var b=g.Lf.EXPERIMENT_FLAGS;return b?b[a]:void 0};
Qf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Pf(b)}}:a};
g.Pf=function(a,b,c,d,e){var f=g.u("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.F("ERRORS",[]),f.push([a,b,c,d,e]),g.Mf("ERRORS",f))};
g.Rf=function(a){g.Pf(a,"WARNING",void 0,void 0,void 0)};
Laa=function(a,b,c,d,e){var f=!1,k=Of("log_window_onerror_fraction");if(k&&Math.random()<k)f=!0;else{k=document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:(g.ua(a)?k=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,k=a.message,b=a.filename,c=a.lineno,d=a.colno):(k="Unknown error",b="Unknown file",c=0),a=Error(k),a.name="UnhandledWindowError",e=a,e.message=k,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=
d),f?g.Pf(e):g.Rf(e))};
g.G=function(a,b){return a?a.dataset?a.dataset[g.Sf(b)]:a.getAttribute("data-"+b):null};
g.Sf=function(a){return Tf[a]||(Tf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
g.Uf=function(a,b){g.Fa(a)&&(a=Qf(a));return window.setTimeout(a,b)};
g.Vf=function(a,b){g.Fa(a)&&(a=Qf(a));return window.setInterval(a,b)};
g.Wf=function(a){window.clearTimeout(a)};
g.Xf=function(a){window.clearInterval(a)};
g.bg=function(a,b,c){var d=Yf();if(d){var e=d.subscribe(a,function(){var f=arguments;var k=function(){Zf[e]&&b.apply(c||window,f)};
try{$f[a]?k():g.Uf(k,0)}catch(l){g.Pf(l)}},c);
Zf[e]=!0;ag[a]||(ag[a]=[]);ag[a].push(e);return e}return 0};
g.cg=function(a){var b=Yf();b&&(g.wa(a)?a=[a]:g.ua(a)&&(a=[parseInt(a,10)]),(0,g.A)(a,function(c){b.unsubscribeByKey(c);delete Zf[c]}))};
g.I=function(a,b){var c=Yf();return c?c.publish.apply(c,arguments):!1};
g.dg=function(a,b){$f[a]=!0;var c=Yf();c=c?c.publish.apply(c,arguments):!1;$f[a]=!1;return c};
Yf=function(){return g.u("ytPubsubPubsubInstance")};
g.gg=function(a,b){var c=g.fg(a);spf.script.load(a,c,b)};
g.hg=function(a){a=g.fg(a);spf.script.unload(a)};
g.fg=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Maa,""),b=b.replace(Naa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.ig=function(){this.F=!1;this.C=null};
jg=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.Rf(d)}c&&c(b)};
g.kg=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
Oaa=function(){};
g.mg=function(a,b){return lg(a,0,b)};
g.ng=function(a,b){return lg(a,1,b)};
g.pg=function(a){for(var b=0,c=a.length;b<c;b++)g.og(a[b])};
qg=function(){};
g.rg=function(){return!!g.u("yt.scheduler.instance")};
lg=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.Uf(a,c||0)};
g.og=function(a){if(!isNaN(a)){var b=g.u("yt.scheduler.instance.cancelJob");b?b(a):g.Wf(a)}};
Paa=function(){return parseInt(g.F("DCLKSTAT",0),10)};
g.tg=function(a){return!!sg(a)};
g.ug=function(a,b){var c=sg(a);return void 0===c&&void 0!==b?b:Number(c||0)};
sg=function(a){return g.F("EXPERIMENT_FLAGS",{})[a]};
Qaa=function(){return g.vg.Rd()};
Raa=function(a){a=void 0===a?{}:a;return g.kg(g.vg,a)};
g.wg=function(a){var b=[];g.Wa(a,function(c,d){var e=g.jc(d),f;g.Da(c)?f=c:f=[c];(0,g.A)(f,function(k){""==k?b.push(e):b.push(e+"="+g.jc(k))})});
return b.join("&")};
g.xg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=g.kc(e[0]||""),k=g.kc(e[1]||"");f in b?g.Da(b[f])?g.Ua(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(m){var l=Error("Error decoding URL component");l.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?g.Rf(l):g.Pf(l)}}return b};
g.zg=function(a,b){return g.yg(a,b||{},!0)};
g.yg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.xg(e[1]||"");for(var f in b)if(c||!g.Ya(e,f))e[f]=b[f];return g.vd(a,e)+d};
g.Dg=function(a){var b=g.Ag;a=void 0===a?g.u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.Bg(b),g.Cg(b));b.ca_type="image";a&&(b.bid=a);return b};
g.Bg=function(a){var b={};b.dt=g.Eg;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Id(b);return b};
g.Cg=function(a){var b=g.Kd(a.C),c=g.Jd(a.C.top),d={};return d.bc=g.If(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Jf(a.F),d.wgl=!!g.Gd.WebGLRenderingContext,d};
Saa=function(){if(!Fg)return null;var a=Fg();return"open"in a?a:null};
g.Hg=function(a){switch(g.Gg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Gg=function(a){return a&&"status"in a?a.status:-1};
Taa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.md(1,a),e=g.nd(a);d&&e?(d=c,c=a.match(g.ld),d=d.match(g.ld),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.nd(c)==e&&(Number(g.md(4,c))||null)==(Number(g.md(4,a))||null):!0;d=g.tg("web_ajax_ignore_global_headers_if_set");for(var f in Ig)e=g.F(Ig[f]),!e||!c&&!Jg(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Jg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(g.tg("pass_biscotti_id_in_header_ajax")||
g.tg("pass_biscotti_id_in_header_ajax_tv"))&&(c||Jg(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=g.wg(g.Dg(void 0)));return b};
Vaa=function(a){var b=window.location.search,c=g.nd(a),d=g.kd(g.md(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.xg(b),f={};(0,g.A)(Uaa,function(k){e[k]&&(f[k]=e[k])});
return g.yg(a,f||{},!1)};
Jg=function(a,b){var c=g.F("CORS_HEADER_WHITELIST")||{},d=g.nd(a);return d?(c=c[d])?g.Pa(c,b):!1:!0};
Waa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Kg(a,b);var d=Lg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&g.Wf(f);var l=k.ok,m=function(q){q=q||{};var t=b.context||g.p;l?b.onSuccess&&b.onSuccess.call(t,q,k):b.onError&&b.onError.call(t,q,k);b.Xa&&b.Xa.call(t,q,k)};
"JSON"==(b.format||"JSON")&&(l||400<=k.status&&500>k.status)?k.json().then(m,function(){m(null)}):m(null)}});
b.Dq&&0<b.timeout&&(f=g.Uf(function(){e||(e=!0,g.Wf(f),b.Dq.call(b.context||g.p))},b.timeout))}else g.J(a,b)};
g.J=function(a,b){var c=b.format||"JSON";a=Kg(a,b);var d=Lg(a,b),e=!1,f,k=Mg(a,function(l){if(!e){e=!0;f&&g.Wf(f);var m=g.Hg(l),q=null,t=400<=l.status&&500>l.status,y=500<=l.status&&600>l.status;if(m||t||y)q=Xaa(c,l,b.lb);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};t=b.context||g.p;m?b.onSuccess&&b.onSuccess.call(t,l,q):b.onError&&b.onError.call(t,l,q);b.Xa&&b.Xa.call(t,l,q)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Nc&&0<b.timeout&&(f=g.Uf(function(){e||(e=!0,k.abort(),g.Wf(f),b.Nc.call(b.context||g.p,k))},b.timeout));
return k};
Kg=function(a,b){b.yy&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.F("XSRF_FIELD_NAME",void 0),d=b.Ra;d&&(d[c]&&delete d[c],a=g.zg(a,d));return a};
Lg=function(a,b){var c=g.F("XSRF_FIELD_NAME",void 0),d=g.F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.F("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.jv||g.nd(a)&&!b.withCredentials&&g.nd(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&g.ua(e)&&(e=g.xg(e),g.gb(e,f),e=b.Fr&&"JSON"==b.Fr?JSON.stringify(e):g.td(e));f=e||f&&!g.$a(f);!Ng&&f&&"POST"!=b.method&&(Ng=!0,g.Pf(Error("AJAX request with postData should use POST")));
return e};
Xaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Pg(b):null)d={},(0,g.A)(b.getElementsByTagName("*"),function(e){d[e.tagName]=g.Qg(e)})}c&&Rg(d);
return d};
Rg=function(a){if(g.Ia(a))for(var b in a)"html_content"==b||g.sb(b,"_html")?a[b]=g.fc(a[b],null):Rg(a[b])};
Pg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Qg=function(a){var b="";(0,g.A)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.Sg=function(a,b){b.method="POST";b.ia||(b.ia={});return g.J(a,b)};
Mg=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Qf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Saa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.tg("debug_forward_web_query_parameters")&&(a=Vaa(a));m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Taa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m};
Tg=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.Ug=function(a){var b=new Tg;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.Vg=function(a){var b=new Tg;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.Xg=function(a){var b=a.__yt_uid_key;b||(b=Wg(),a.__yt_uid_key=b);return b};
g.Yg=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Yaa+"VisibilityState";if(b in a)return a[b]};
g.Zg=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Zaa||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY};
$g=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.ah=function(a){g.sa(a.C)||$g(a);return a.C};
g.bh=function(a){g.sa(a.F)||$g(a);return a.F};
g.dh=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Za(ch,function(e){var f=g.va(e[4])&&e[4]==!!d,k=g.Ia(e[4])&&g.Ia(d)&&g.cb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.K=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.dh(a,b,c,d);if(e)return e;e=++eh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(l){l=new g.Zg(l);if(!g.id(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new g.Zg(l);
l.currentTarget=a;return c.call(a,l)};
k=Qf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),fh()||g.va(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);ch[e]=[a,b,c,k,d];return e};
g.ih=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.A)(a,function(b){if(b in ch){var c=ch[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?fh()||g.va(c)?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ch[b]}}))};
g.jh=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.K(a,b,function(){g.ih(e);c.apply(a,arguments)},d)};
g.kh=function(a){for(var b in ch)ch[b][0]==a&&g.ih(b)};
g.lh=function(a){this.Yb=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.K(window,"mousemove",(0,g.v)(this.Y,this));this.N=g.Vf((0,g.v)(this.M,this),25)};
mh=function(){g.C.call(this);this.C=[]};
nh=function(a){a=a||{};var b={enablejsapi:1},c={};this.url=a.url||"";this.args=a.args||g.db(b);this.assets=a.assets||{};this.attrs=a.attrs||g.db(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.oh=function(a){a instanceof nh||(a=new nh(a));return a};
g.rh=function(a,b,c,d,e,f){f=f||{};f.name=c||g.F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=ph||(g.tg("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+
e.stack),c=c.join("\n"),window.console.log(c,e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=g.Lc(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&g.Fa(window.yterr)&&window.yterr(a),qh[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Ra:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},ia:{url:g.F("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.ia.stack=e);for(var k in f)b.ia["client."+k]=f[k];if(k=g.F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ia[l]=k[l];g.J(g.F("ECATCHER_REPORT_HOST","")+"/error_204",b);qh[a.message]=!0;ph++}};
g.xh=function(){g.Wf(g.sh);g.Wf(g.th);g.th=0;if(!g.$a(g.uh)){for(var a in g.uh){var b=vh[a];b&&($aa(a,b),delete g.uh[a])}g.$a(g.uh)||g.wh()}};
aba=function(){var a=[];for(e in g.uh){var b=yh[e]||{};yh[e]=b;for(var c in g.uh[e]){var d=zh(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.Ah());for(var f in yh)b=yh[f],b.eventType=f in Bh?Bh[f]:"UNKNOWN_TYPE",c=Ch[f],b.metricIntervalMs=c?e-c:e-g.Dh,a.push(b),Ch[f]=e,delete yh[f];return a};
g.wh=function(){g.tg("web_gel_timeout_cap")&&!g.th&&(g.th=g.Uf(g.xh,6E4));g.Wf(g.sh);var a=g.ug("web_gel_debounce_ms",1E4);g.sh=g.Uf(g.xh,g.F("LOGGING_BATCH_TIMEOUT",g.Eh||a))};
zh=function(a,b){b=void 0===b?"":b;g.uh[a]=g.uh[a]||{};g.uh[a][b]=g.uh[a][b]||[];return g.uh[a][b]};
$aa=function(a,b){var c=bba[a],d=yh[a]||{};yh[a]=d;var e=Math.round(g.Ah());for(q in g.uh[a]){var f=g.eb({context:g.Fh(b.C)});f[c]=zh(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;var k=Gh[q];if(k)a:{var l=q;if(k.videoId)var m="VIDEO";else if(k.playlistId)m="PLAYLIST";else break a;f.credentialTransferTokenTargetId=k;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Gh[q];f.requestTimeMs=
e;if(k=g.F("EVENT_ID",void 0))m=(g.F("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>cba&&(m=1),g.Mf("BATCH_CLIENT_COUNTER",m),k={serializedEventId:k,clientCounter:m},f.serializedClientEventId=k,Hh&&Ih&&g.tg("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Hh,roundtripMs:Ih}),Hh=k,Ih=0;g.Jh(b,a,f,{retry:dba.has(a),onSuccess:(0,g.v)(eba,this,g.Ah())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*
q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e};
eba=function(a){Ih=Math.round(g.Ah()-a)};
g.Mh=function(a){var b=void 0===a?{}:a;a=void 0===b.zy?!0:b.zy;b=void 0===b.hG?!1:b.hG;if(null==g.u("_lact",window)){var c=parseInt(g.F("LACT"),10);c=isFinite(c)?(0,g.Qc)()-Math.max(c,0):-1;g.r("_lact",c,window);g.r("_fact",c,window);-1==c&&g.Kh();g.K(document,"keydown",g.Kh);g.K(document,"keyup",g.Kh);g.K(document,"mousedown",g.Kh);g.K(document,"mouseup",g.Kh);a&&(b?g.K(window,"touchmove",function(){Lh("touchmove",200)},{passive:!0}):(g.K(window,"resize",function(){Lh("resize",200)}),g.K(window,
"scroll",function(){Lh("scroll",200)})));
new g.lh(function(){Lh("mouse",100)});
g.K(document,"touchstart",g.Kh,{passive:!0});g.K(document,"touchend",g.Kh,{passive:!0})}};
Lh=function(a,b){Nh[a]||(Nh[a]=!0,g.ng(function(){g.Kh();Nh[a]=!1},b))};
g.Kh=function(){null==g.u("_lact",window)&&g.Mh();var a=(0,g.Qc)();g.r("_lact",a,window);-1==g.u("_fact",window)&&g.r("_fact",a,window);(a=g.u("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Oh=function(){var a=g.u("_lact",window);return null==a?-1:Math.max((0,g.Qc)()-a,0)};
g.Qh=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||g.Ah());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.Oh())};g.tg("log_sequence_info_on_gel_web")&&d.Ke&&(a=e.context,b=d.Ke,Ph[b]=b in Ph?Ph[b]+1:0,a.sequence={index:Ph[b],groupKey:b},d.bv&&delete Ph[d.Ke]);(d=d.Vf)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Gh[d.token]=a,d=zh("log_event",d.token)):d=zh("log_event");d.push(e);c&&(vh.log_event=new c);d.length>=(g.ug("web_logging_max_batch")||
100)?g.xh():g.wh()};
g.Fh=function(a){a={client:{hl:a.Hy,gl:a.Gy,clientName:a.Ey,clientVersion:a.Fy,configInfo:a.Dy}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.F("DELEGATED_SESSION_ID")&&!g.tg("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.F("DELEGATED_SESSION_ID")});return a};
Rh=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.zR||g.F("AUTHORIZATION"))||(a?b="Bearer "+g.u("gapi.auth.getToken")().xR:b=Nd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.F("SESSION_INDEX",0),g.tg("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.F("DELEGATED_SESSION_ID")));return d};
Sh=function(a){a=Object.assign({},a);delete a.Authorization;var b=Nd();if(b){var c=new Ze;c.update(g.F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Ac(c.digest(),3)}return a};
g.Uh=function(a,b,c,d){g.Th.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Vh=function(a,b,c){g.Th.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.Wh=function(a){var b;(b=g.Ff(a))||(a=new Af(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.uf(a):null;this.F=document.domain||window.location.hostname};
fba=function(a,b,c,d){if(d)return null;d=Xh.get("nextId",!0)||1;var e=Xh.get("requests",!0)||{};e[d]={method:a,request:b,authState:Sh(c),requestTime:Math.round(g.Ah())};Xh.set("nextId",d+1,86400,!0);Xh.set("requests",e,86400,!0);return d};
Yh=function(a){var b=Xh.get("requests",!0)||{};delete b[a];Xh.set("requests",b,86400,!0)};
Zh=function(a){var b=Xh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.Ah())-d.requestTime)){var e=d.authState,f=Sh(Rh(!1));g.cb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.Ah())),g.Jh(a,d.method,e,{}));delete b[c]}}Xh.set("requests",b,86400,!0)}};
g.$h=function(a){var b=this;this.C=a||{By:g.F("INNERTUBE_API_KEY",void 0),Cy:g.F("INNERTUBE_API_VERSION",void 0),Dy:g.F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ey:g.F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Fy:g.F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Hy:g.F("INNERTUBE_CONTEXT_HL",void 0),Gy:g.F("INNERTUBE_CONTEXT_GL",void 0),Iy:g.F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Jy:!!g.F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.mg(function(){Zh(b)},5E3)};
g.Jh=function(a,b,c,d){!g.F("VISITOR_DATA")&&.01>Math.random()&&g.Pf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,Fr:"JSON",Nc:function(){d.Nc()},
Dq:d.Nc,onSuccess:function(B,H){if(d.onSuccess)d.onSuccess(H)},
lj:function(B){if(d.onSuccess)d.onSuccess(B)},
onError:function(B,H){if(d.onError)d.onError(H)},
Cq:function(B){if(d.onError)d.onError(B)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.Iy;k&&(f=k);k=a.C.Jy||!1;var l=Rh(k,f,d);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=g.zg(""+f+("/youtubei/"+a.C.Cy+"/"+b),{alt:"json",key:a.C.By}),q;if(d.retry&&g.tg("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(q=fba(b,c,l,k))){var t=e.onSuccess,y=e.lj;e.onSuccess=function(B,H){Yh(q);t(B,H)};
c.lj=function(B,H){Yh(q);y(B,H)}}try{g.tg("use_fetch_for_op_xhr")?Waa(m,e):g.Sg(m,e)}catch(B){if("InvalidAccessError"==B)q&&(Yh(q),q=0),g.Pf(Error("An extension is blocking network request."),"WARNING");
else throw B;}q&&g.mg(function(){Zh(a)},5E3)};
g.ai=function(a,b,c){c=void 0===c?{}:c;var d=g.$h;g.F("ytLoggingEventsDefaultDisabled",!1)&&g.$h==g.$h&&(d=null);g.Qh(a,b,d,c)};
g.bi=function(){g.tg("log_web_meta")&&aba().forEach(function(a){g.ai("delayedEventMetricCaptured",a)})};
g.ci=function(a){this.C=a};
g.di=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.di(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.ei=function(a,b,c){Nf("INTERACTIONS_LOGGER_QUEUE",{LR:a,payload:b,options:c})};
g.fi=function(a,b,c){(0,g.A)(b,function(d){var e=c;e=void 0===e?!1:e;d={csn:a,ve:g.di(d),eventType:e?16:8};e={Vf:void 0,Ke:a,bv:e};"UNDEFINED_CSN"==a?g.ei("visualElementHidden",d,e):g.Qh("visualElementHidden",d,g.$h,e)})};
hi=function(a,b){var c=Object.keys(a).join("");gi("info_"+c+"_"+b)||(a.clientActionNonce=b,g.ai("latencyActionInfo",a))};
gi=function(a){ii[a]=ii[a]||{count:0};var b=ii[a];b.count++;b.time=g.Ah();ji||(ji=g.mg(gba,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;g.rh(c,b)}return!0}return!1};
gba=function(){var a=g.Ah(),b;for(b in ii)6E4<a-ii[b].time&&delete ii[b];ji=0};
li=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Qc)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ki)for(a=1,b=0;b<ki.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ki.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.qi=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(mi==a)return;mi=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Oh()>b)&&"visible"==g.Yg()){b=-1;g.ni&&(b=Math.round(g.Ah()-g.ni));var c=String;var d=g.u("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Qc)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:oi,index:String(pi),lastEventDeltaMs:String(b),trigger:a};g.Qh("foregroundHeartbeat",
a,g.$h);g.r("_fact",-1,window);pi++;g.ni=g.Ah()}};
g.ri=function(a){a&&g.Qh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:oi,clientScreenNonce:a},g.$h)};
si=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
ti=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
ui=function(a){return g.F(ti(void 0===a?0:a),void 0)};
g.vi=function(){var a=ui(0),b;a?b=new g.ci({veType:a,youtubeData:void 0}):b=null;return b};
g.wi=function(a){a=void 0===a?0:a;var b=g.F(si(a));b||0!=a||(g.tg("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=g.F("EVENT_ID"));return b?b:null};
g.xi=function(a,b,c){c=void 0===c?0:c;if(a!==g.F(si(c))||b!==g.F(ti(c)))g.Mf(si(c),a),g.Mf(ti(c),b),0==c&&(b=function(){setTimeout(function(){g.ri(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
yi=function(){var a=g.vi(),b=g.wi();b&&a&&g.fi(b,[a],!0)};
g.zi=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Qf(d):null;this.H=e?Qf(e):null;this.G=[];this.C=this.F=0};
g.Ai=function(a){g.og(a.F);a.F=g.ng((0,g.v)(a.init,a))};
g.Di=function(a){a.name in Bi&&Ci(a.name);Bi[a.name]={reqs:[],disable:(0,g.v)(a.disable,a)};(0,g.A)(a.deps,function(b){if(!(b in Bi))throw Error("Module "+b+" required by "+a.name);Bi[b].reqs.push(a.name)});
a.enable()};
Ci=function(a){if(a in Bi){var b=Bi[a];(0,g.A)(b.reqs,function(c){Ci(c)});
try{b.disable()}catch(c){}delete Bi[a]}};
Fi=function(a){Kf(g.Ei,arguments)};
g.Gi=function(a){return a in g.Ei};
Hi=function(a){Kf(g.Ei,arguments)};
g.Ni=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Tb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Hb(g.Lb(a)),"about:invalid#zClosurez"===a?a="":(a=g.cc(g.ec(a)),a=g.jc(g.lf(a))),g.tb(a)||(a=g.cd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.hd(a).body.appendChild(a))):e?Mg(a,b,"POST",e,d):g.F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Mg(a,b,"GET","",d):(Of("web_use_beacon_api_for_ad_click_server_pings")&&-1!=g.kd(g.md(5,a)).indexOf("/aclk")&&
"1"===g.yd(a,"ae")&&"1"===g.yd(a,"act")?Ii(a)?(b&&b(),d=!0):d=!1:d=!1,d||hba(a,b)))};
Ii=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
hba=function(a,b){var c=new Image,d=""+iba++;Oi[d]=c;c.onload=c.onerror=function(){b&&Oi[d]&&b();delete Oi[d]};
c.src=a};
g.Pi=function(a,b){a=a||"";var c=a.match(jba);spf.style.load(a,c?c[1]:"",b)};
kba=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Qi(a)||c.some(function(e){return!Qi(e)}))throw Error("Only objects may be merged.");
c=g.da(c);for(d=c.next();!d.done;d=c.next())Ri(a,d.value)};
Ri=function(a,b){for(var c in b)if(Qi(b[c])){if(c in a&&!Qi(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ri(a[c],b[c])}else if(Si(b[c])){if(c in a&&!Si(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ti(a[c],b[c])}else a[c]=b[c];return a};
Ti=function(a,b){for(var c=g.da(b),d=c.next();!d.done;d=c.next())d=d.value,Qi(d)?a.push(Ri({},d)):Si(d)?a.push(Ti([],d)):a.push(d);return a};
Qi=function(a){return"object"===typeof a&&!Array.isArray(a)};
Si=function(a){return"object"===typeof a&&Array.isArray(a)};
g.Ui=function(a,b,c){var d=void 0===d?!0:d;var e=g.F("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=g.nd(window.location.href);f&&e.push(f);f=g.nd(a);if(g.Pa(e,f)||!f&&g.rb(a,"/"))if(g.tg("autoescape_tempdata_url")&&(e=document.createElement("a"),g.gc(e,a),a=e.href),a&&(a=g.od(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&(b.itct||b.ved)&&(b.csn=b.csn||g.wi()),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+g.oc(a).toString(36),b=b?g.td(b):"",g.Uh(d,b,c||5))):(c="ST-"+g.oc(a).toString(36),b=b?g.td(b):"",g.Uh(c,
b,5))};
g.Vi=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.ic(d.location,g.vd(a,b)+c)};
g.Wi=function(a,b){b&&g.Ui(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.Vi(a)};
g.Xi=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.F("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Ui(a,b);if(c)return!1;g.Wi(a);return!0};
Zi=function(a,b){g.C.call(this);this.H=this.oa=a;this.N=b;this.L=!1;this.api={};this.aa=this.Y=null;this.J=new g.of;g.Qd(this,this.J);this.D={};this.la=this.ha=this.F=this.ob=this.C=null;this.V=!1;this.G=this.M=null;this.Oa={};this.ub=["onReady"];this.eb=null;this.qb=NaN;this.X={};Yi(this);this.Sh("WATCH_LATER_VIDEO_ADDED",this.ID.bind(this));this.Sh("WATCH_LATER_VIDEO_REMOVED",this.JD.bind(this));this.Sh("onAdAnnounce",this.Wt.bind(this));this.xb=new mh(this);g.Qd(this,this.xb)};
$i=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
bj=function(a){var b=!0,c=aj(a);c&&a.C&&(a=a.C,b=g.G(c,"version")==a.assets.js);return b&&!!g.u("yt.player.Application.create")};
lba=function(a){if(!a.nb()&&!a.V){var b=bj(a);if(b&&"html5"==(aj(a)?"html5":null))a.la="html5",a.L||cj(a);else if(dj(a),a.la="html5",b&&a.G)a.oa.appendChild(a.G),cj(a);else{a.C.loaded=!0;var c=!1;a.M=function(){c=!0;var d=a.C.clone();g.u("yt.player.Application.create")(a.oa,d);cj(a)};
a.V=!0;b?a.M():(g.gg(a.C.assets.js,a.M),g.Pi(a.C.assets.css),ej(a)&&!c&&g.r("yt.player.Application.create",null,void 0))}}};
aj=function(a){var b=g.z(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
cj=function(a){if(!a.nb()){var b=aj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||mba(a)):a.qb=g.Uf(function(){cj(a)},50)}};
mba=function(a){Yi(a);a.L=!0;var b=aj(a);b.addEventListener&&(a.Y=fj(a,b,"addEventListener"));b.removeEventListener&&(a.aa=fj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=fj(a,b,e))}for(var f in a.D)a.Y(f,a.D[f]);$i(a);a.ha&&a.ha(a.api);a.J.na("onReady",a.api)};
fj=function(a,b,c){var d=b[c];return function(){try{return a.eb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.eb=e,g.Rf(e))}}};
Yi=function(a){a.L=!1;if(a.aa)for(var b in a.D)a.aa(b,a.D[b]);for(var c in a.X)g.Wf(parseInt(c,10));a.X={};a.Y=null;a.aa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Sh.bind(a);a.api.removeEventListener=a.pG.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Hv.bind(a);a.api.getPlayerType=a.Nv.bind(a);a.api.getCurrentVideoConfig=a.Dv.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Dz.bind(a)};
gj=function(a,b){var c=b;if("string"==typeof b){if(a.Oa[b])return a.Oa[b];c=function(){var d=g.u(b);d&&d.apply(g.p,arguments)};
a.Oa[b]=c}return c?c:null};
nba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.p[c]=function(d){var e=g.Uf(function(){a.nb()||(a.J.na(b,d),g.ab(a.X,String(e)))},0);
g.bb(a.X,String(e),!0)};
return c};
dj=function(a){a.cancel();Yi(a);a.la=null;a.C&&(a.C.loaded=!1);var b=aj(a);b&&(bj(a)||!ej(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.fd(a.oa)};
ej=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.jj=function(a,b){a=g.ua(a)?g.Wc(a):a;var c=g.hj+"_"+g.Ka(a),d=g.ij[c];if(d)return d.loadNewVideoConfig(b),d.api;d=new Zi(a,c);g.ij[c]=d;g.I("player-added",d.api);g.Od(d,g.w(oba,d));g.Uf(function(){d.loadNewVideoConfig(b)},0);
return d.api};
oba=function(a){delete g.ij[a.getId()]};
g.kj=function(a){if(!a)return null;var b=g.hj+"_"+g.Ka(a),c=g.ij[b];c||(c=new Zi(a,b),g.ij[b]=c);return c.api};
g.lj=function(a){return g.kj(document.getElementById(a))};
g.mj=function(a,b){this.version=a;this.args=b};
g.nj=function(a,b){this.topic=a;this.C=b};
g.pj=function(a,b){var c=g.oj();c&&c.publish.call(c,a.toString(),a,b)};
g.oj=function(){return g.u("ytPubsub2Pubsub2Instance")};
g.rj=function(a,b){var c={};c.key=a;c.value=b;return qj().then(function(d){return new Promise(function(e,f){try{var k=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);k.onsuccess=e;k.onerror=f}catch(l){f(l)}})})};
g.sj=function(a){return qj().then(function(b){return new Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var f=e.result;c(f?f.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})},function(){return null})};
qj=function(){return tj?Promise.resolve(tj):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))tj=d,a(tj);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),qj()};
c.onupgradeneeded=pba})};
pba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
qba=function(a){if(uj.getEntriesByType){var b=uj.getEntriesByType("paint");if(b=g.Na(b,function(d){return"first-paint"==d.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Fa(b)){b=b();var c=1E3*Math.min(b.requestTime||Infinity,b.startLoadTime||Infinity);c=Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
vj=function(){var a=g.F("TIMING_TICK_EXPIRATION");a||(a={},g.Mf("TIMING_TICK_EXPIRATION",a));return a};
wj=function(){var a=vj(),b;for(b in a)g.og(a[b]);g.Mf("TIMING_TICK_EXPIRATION",{})};
xj=function(a,b){g.mj.call(this,1,arguments)};
yj=function(a,b){g.mj.call(this,1,arguments)};
vba=function(){zj=!1;var a=g.F("TIMING_INFO",{});for(b in a)Aj(b,a[b]);Aj("is_nav",1);(a=g.wi())&&Aj("csn",a);(a=g.F("PREVIOUS_ACTION",void 0))&&Aj("pa",a);var b=Bj();b.p=g.F("CLIENT_PROTOCOL")||"unknown";b.t=g.F("CLIENT_TRANSPORT")||"unknown";Aj("yt_vis",rba());if("cold"==b.yt_lt){a=uj.timing||{};a.navigationStart&&(Cj("srt",a.responseStart),1!=b.prerender&&Dj("n",a.navigationStart));b=qba(a);0<b&&Cj("fpt",b);Ej(a);uj.getEntriesByType&&sba();a=[];if(document.querySelector&&uj&&uj.getEntriesByName)for(var c in Fj)b=
Fj[c],tba(c,b)&&a.push(b);a.length&&Aj("rc",a.join(","))}Gj(void 0)&&(c={},c.actionType=uba[g.F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Hj(void 0),hi(c,a));if("cold"==Bj().yt_lt){a=Ij();c=Jj();for(var d in a)g.rb(d,"_")||"tick_"+d in c||Kj(d,a[d]);d=Bj();for(var e in d)"info_"+e in c||Lj(e,d[e])}Mj(!0);g.Nj(!1)};
Qj=function(){Oj(void 0);wba();Pj(!1,void 0);g.F("TIMING_ACTION")&&g.Mf("PREVIOUS_ACTION",g.F("TIMING_ACTION"));g.Mf("TIMING_ACTION","")};
Cj=function(a,b,c){b||"_"==a[0]||Rj(a,c);var d=Ij(c),e=b||g.Ah();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=vj();var f=e[a];f&&(g.og(f),e[a]=0);Kj(a,b,c)||g.Nj(!1,c);return d[a]};
Rj=function(a,b){uj.mark&&(g.rb(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),uj.mark(a))};
Dj=function(a,b){Aj("yt_sts",a,void 0);Cj("_start",b,void 0)};
Aj=function(a,b,c){Bj(c)[a]=b;Gj(c)&&Lj(a,b,c)};
Lj=function(a,b,c){Jj(c)["info_"+a]=b;if(a in Sj){var d=Sj[a];g.Pa(xba,d)&&(b=!!b);a in Tj&&(b=Tj[a]+b.toUpperCase());a={};d=d.split(".");for(var e=a,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=b;Gj(c)&&(kba(Uj(c),a),b=Hj(c),hi(a,b))}else g.Pa(yba,a)||(b=Error("Unknown label logged with GEL CSI"),b.params=a,g.Rf(b))};
Vj=function(a){var b=Ij(a);if(b.aft)return b.aft;a=g.F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
Ej=function(a,b){Cj("nreqs",a.requestStart,b);Cj("nress",a.responseStart,b);Cj("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(Cj("nrs",a.redirectStart,b),Cj("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(Cj("ndnss",a.domainLookupStart,b),Cj("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(Cj("ntcps",a.connectStart,b),Cj("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(Cj("nstcps",a.secureConnectionStart,
b),Cj("ntcpe",a.connectEnd,b))};
g.Nj=function(a,b){if(!Wj(b)){var c=g.F((b||"")+"TIMING_ACTION",void 0),d=Ij(b);if(g.u("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Vj(b)))if(Xj||(g.pj(zba,new xj(Math.round(c-d._start),b)),Xj=!0),a||b)Yj(b);else{c=!0;var e=g.F("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Yj(b)}}};
rba=function(){switch(g.Yg()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Zj=function(a){if(!Wj(void 0)){var b=g.F("CSI_SERVICE_NAME","youtube");g.F("TIMING_ACTION",void 0)&&b&&(Cj("aa",void 0,void 0),Aj("ap",1,void 0),Aj("yt_fss",a,void 0),Yj(void 0))}};
Kj=function(a,b,c){Jj(c)["tick_"+a]=b;c||b||g.Ah();return Gj(c)?(c=Hj(c),"_start"==a?gi("baseline_"+c)||g.ai("latencyActionBaselined",{clientActionNonce:c},{timestamp:b}):gi("tick_"+a+"_"+c)||g.ai("latencyActionTicked",{tickName:a,clientActionNonce:c},{timestamp:b}),!0):!1};
ak=function(a){return Math.round(uj.timing.navigationStart+a)};
sba=function(){var a=window.location.protocol,b=uj.getEntriesByType("resource");b=(0,g.bk)(b,function(c){return 0==c.name.indexOf(a+"//web.archive.org/web/20190731235957/https://fonts.gstatic.com/s/")});
(b=(0,g.Hf)(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Cj("wffs",ak(b.startTime)),Cj("wffe",ak(b.responseEnd)))};
tba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);g.za()&&c.setAttribute("nonce",g.za());return d?(c=uj.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,Cj("rsf_"+b,d+Math.round(c.fetchStart)),Cj("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(d=Bj(void 0),e=Uj(void 0),"rc"in d||"rc"in e||Aj("rc",""),
0===c.transferSize))?!0:!1:!1};
Mj=function(a){g.r("ytglobal.timingready_",a,void 0)};
Hj=function(a){var b=ck(a).nonce;b||(b=li(),ck(a).nonce=b);return b};
Ij=function(a){return ck(a).tick};
Bj=function(a){return ck(a).info};
Uj=function(a){a=ck(a);"gelInfo"in a||(a.gelInfo={});return a.gelInfo};
Jj=function(a){a=ck(a);"gel"in a||(a.gel={});return a.gel};
ck=function(a){return g.u("ytcsi."+(a||"")+"data_")||Oj(a)};
Oj=function(a){var b={tick:{},info:{}};g.r("ytcsi."+(a||"")+"data_",b,void 0);return b};
Wj=function(a){return!!g.u("yt.timing."+(a||"")+"pingSent_")};
Pj=function(a,b){g.r("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Aba=function(a){var b=Ij(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Bj(a).yt_pvis};
Gj=function(a){return zj||g.tg("csi_on_gel")||!!ck(a).useGel};
Yj=function(a){wj();if(!Gj(a)){var b=Ij(a),c=Bj(a),d=b._start;for(k in b)if(g.rb(k,"_")&&g.Da(b[k])){var e=k.slice(1);if(e in Bba){var f=(0,g.dk)(b[k],function(t){return Math.round(t-d)});
c["all_"+e]=f.join()}delete b[k]}f=g.F("CSI_SERVICE_NAME","youtube");var k={v:2,s:f,action:g.F((a||"")+"TIMING_ACTION",void 0)};e=Aj.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var l=window.location.protocol+g.u("ytplayer.config.assets.js");(l=uj.getEntriesByName?uj.getEntriesByName(l)[0]:null)?c.h5jse=Math.round(c.h5jse-l.responseEnd):delete c.h5jse}b.aft=Vj(a);Aba(a)&&"youtube"==f&&(Aj("yt_lt","hot_bg",a),f=b.vc,l=b.pbs,delete b.aft,c.aft=Math.round(l-f));for(var m in c)"_"!=m.charAt(0)&&(k[m]=
c[m]);b.ps=g.Ah();m={};f=[];for(var q in b)"_"!=q.charAt(0)&&(l=Math.round(b[q]-d),m[q]=l,f.push(q+"."+l));k.rt=f.join(",");(b=g.u("ytdebug.logTiming"))&&b(k,m);Cba(k,!!c.ap,a);g.pj(Dba,new yj(m.aft+(e||0),a))}};
Cba=function(a,b,c){if(g.tg("debug_csi_data")){var d=g.u("yt.timing.csiData");d||(d=[],g.r("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;Ii(a,f)||g.Ni(a,void 0,void 0,void 0,f)}else g.Ni(a);Pj(!0,c)};
Jba=function(){ek++;var a=g.$c(),b=new g.Bd(0,0,a.width,a.height);fk("vph",a.height);fk("vpw",a.width);(0,g.gk)("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;hk.start();for(var f=0;f<c;f++){var k=a[f];if(ik(k,b)){var l=Eba(k);l.then(Fba);d.push(l);jk.push(l);k.loadTime||(e=!1)}}e&&fk("yt_eil",1);(0,g.gk)("vpcc");b=g.Ke(d).then(Gba);g.Me(b,Hba);b.then(Iba);jk.push(b);return b};
Iba=function(){hk.stop()};
Hba=function(){(0,g.gk)("vpr")};
ik=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.Xg(c);if(e in kk)return!0;if(e in lk)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return lk[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return lk[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)kk[d[c]]=!0;return!0};
Gba=function(a){var b=g.$c();b=new g.Bd(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;ik(a[d].xy,b)&&c<f&&(c=f)}return c};
Eba=function(a){var b=ek;return new g.Fe(function(c,d){var e={xy:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){ek!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},mk.push(a))})};
Fba=function(a){hk.start();a=a.time;nk<a&&(nk=a,(0,g.gk)("lim",a))};
Kba=function(){(0,g.gk)("vptl",nk);(0,g.gk)("vpl",nk)};
Lba=function(){jk.forEach(function(a){a.cancel()});
nk=jk.length=0;kk={};lk={};mk.forEach(function(a){a.slt=void 0});
mk.length=0};
g.ok=function(a,b){g.Ni("/gen_204?"+a,b)};
Mba=function(a){if(null==a)return[];var b=[];g.tg("ima_prevent_mpu_queries_on_cached_playback")&&0>pk.indexOf("ad3_module")&&pk.push("ad3_module");pk.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.qk=function(){return g.D(g.z("page-container"),"remote-connected")};
Nba=function(){rk=g.Vf(sk,5E3);var a=g.tk();a?(a.addEventListener("onReady",sk),a.addEventListener("onStateChange",sk)):uk("unable to init PP monitor")};
wk=function(a){for(var b in g.ij){var c=g.ij[b];c&&c.cancel()}if(a=a||null)vk="",g.jj("player-api",a),a=g.oh(a),a.loaded=!0;sk();g.r("ytplayer.config",a,void 0)};
g.tk=function(){return g.lj("player-api")};
sk=function(){var a=g.tk();if(a){var b=g.z("player");b=!b||g.D(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.F("PAGE_NAME"),e=g.qk();!c||d||e||(uk("PP playing off watch (paused)"),a.pauseVideo());b&&d?uk("PP off-screen on watch"):b||d||uk("PP !off-screen off watch")}};
uk=function(a){var b=g.F("PAGE_NAME");b&&(Error(a).params=[b,vk,g.u("_spf_state.nav-counter")],g.r("yt.www.persistentplayer.issue",a,void 0),g.Pf(Error(a),"WARNING"))};
yk=function(){(0,g.gk)("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){(0,g.gk)("cpt");g.I("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?((0,g.gk)("cpt"),g.I("on_cpt_tick",(new Date).getTime())):setTimeout(function(){(0,g.gk)("cpt");
g.I("on_cpt_tick",(new Date).getTime())},0);
Oba();g.F("CSI_VIEWPORT")&&(xk=Jba(),xk.then(function(a){(0,g.gk)("vpl",a);xk=null},function(){}))};
Oba=function(){zk("init");var a=g.F("PAGE_NAME",void 0);a&&zk("init-"+a)};
zk=function(a){g.rg()?Ak.push(g.ng(g.w(g.dg,a),0)):g.I(a)};
Ck=function(){g.pg(Ak);Ak.length=0;Lba();xk&&(xk.cancel(),xk=null);var a=g.F("PAGE_NAME",void 0);a&&g.dg("dispose-"+a);g.dg("dispose")};
Pba=function(){yk()};
Qba=function(){g.F("TIMING_REPORT_ON_UNLOAD")&&g.Nj(!0);Zj("u");g.qi("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");yi();g.bi();g.xh();Ck();g.dg("pageunload")};
Dk=function(){g.Kh()};
Ek=function(){window.yt_spf_loaded_history=!0;g.Kh()};
Jk=function(){Fk=1;Gk=Hk=0;g.F("TIMING_REPORT_ON_UNLOAD")&&g.Nj(!0);g.tg("warm_load_nav_start_web")?(Zj("n"),Qj(),Mj(!1),g.Mf("TIMING_AFT_KEYS",[]),Aj("yt_lt","warm"),g.Mf("TIMING_ACTION",""),g.Mf("TIMING_WAIT",[]),wj(),Dj("n")):(Zj("n"),Qj(),Dj("n"));Rj("nr");Ik(Rba);yi();g.dg("navigate")};
Nk=function(a){a=a.detail.part||a.detail.partial;(0,g.gk)("nc"+Hk);++Hk;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.gk)("bc");else{var b=1==Fk;Fk=2;b?(Ik(Sba),Kk()):Ik(Tba);if(b=a&&a.data&&a.data.swfcfg)Lk(a.timing,b.args),Mk(b)}};
Ok=function(){(0,g.gk)("np"+Gk);++Gk};
Pk=function(a){a=a.detail.response;var b=1==Fk;Fk=3;b&&(Ik(Uba),Kk());if(b=a.data&&a.data.swfcfg)Lk(a.timing,b.args),Mk(b)};
Tk=function(a){(0,g.gk)("nd");a=a.detail.response;g.Qk=a.cacheKey;a=a.timing;var b=window._spf_state;g.Rk.navigationCount=b&&b["nav-counter"]||0;g.tg("warm_load_nav_start_web")?(0,g.gk)("srt",a.responseStart):(Dj("ne",a.responseStart),fk("srt",Math.max(0,a.responseStart-a.navigationStart)));fk("yt_lt",a.spfCached?"hot":"warm");(0,g.gk)("pfs",a.fetchStart);(0,g.gk)("pfrs",a.responseStart);"redirectStart"in a&&Vba(a);Ik(Sk);document.getElementById("content").style.height="";yk();Fk=0};
Uk=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Pf(a)};
Vk=function(a){g.ok(g.td({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Xba=function(){Wba();window.yt_spf_loaded_history=!1};
Yba=function(){};
Kk=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Ck();a=g.F("PREVIOUS_ACTION");for(var b in g.Lf)delete g.Lf[b];g.Mf("PREVIOUS_ACTION",a);g.Mf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.r("ytplayer.config",null,void 0);(b=g.tk())&&b.stopVideo?(b.stopVideo(),b.getLastError()&&((b=document.getElementById("movie_player"))&&b.stopVideo?(b.stopVideo(),vk="recovered"):vk="missing2")):vk="missing";sk()};
Mk=function(a){"cfg"in Ij(void 0)||(0,g.gk)("cfg");wk(a)};
Ik=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.og(Wk);Wk=g.ng(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Wf(Xk);Xk=g.Uf(function(){b.className=e},c)},0)};
Wba=function(){var a=Sk[0]+50;g.Wf(Xk);Xk=g.Uf(function(){var b=document.getElementById("progress");b&&b.parentNode.removeChild(b)},a)};
Lk=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Mba(b));g.F("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.ok(g.td(c)))};
Zk=function(){return"granted"!=Notification.permission?Promise.resolve():Yk().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
al=function(){$k({type:"notifications_register",data:g.F("ID_TOKEN")})};
Yk=function(){return navigator.serviceWorker.getRegistration(String(sg("service_worker_scope")||""))};
bl=function(a){return!(!a||!a.pushManager)};
$k=function(a){Yk().then(function(b){if(!b||!b.active)return Promise.reject();b.active.postMessage(a);return Promise.resolve()})};
Zba=function(){if(!g.F("LOGGED_IN",void 0))return Promise.resolve(!1);var a=String(sg("service_worker_push_force_notification_prompt_tag")||"");return a?g.sj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
cca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?Yk().then(bl):Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=Zk().then(function(){$k({type:"notifications_check_registration",data:g.F("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return $ba(a)}).then(function(c){if(c)return aca(),bca().then(function(){})})})};
$ba=function(a){return g.F("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.F("LOGGED_IN",void 0)&&(void 0===a?0:a)?Zba().then(function(b){if(b)return!0;b=[dca(),eca()];g.F("LOGGED_IN",void 0)||b.push(fca());return Promise.all(b).then(function(c){return c.every(function(d){return d})})}):Promise.resolve(!1)};
fca=function(){var a=g.ug("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.sj("WatchCount").then(function(b){return b>=a})};
bca=function(){var a=arguments;g.tg("service_worker_push_prompt_modal_enable")&&gca();return Notification.requestPermission().then(function(b){cl();var c=document.getElementById("ticker");c&&(c.className=c.classList.remove("show"));if("granted"==b)return Zk().then(function(){g.rj("NotificationsDisabled",!1);al();return Promise.resolve(!0)});
"denied"==b&&al();return Promise.resolve(!1)})["catch"](function(){cl();
return Promise.reject.apply(Promise,a instanceof Array?a:aaa(g.da(a)))})};
aca=function(){g.sj("PromptCount").then(function(a){return g.rj("PromptCount",a+1)}).then(function(){return g.rj("PromptTime",(0,g.Qc)())}).then(function(){var a=String(sg("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.sj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.rj("PromptTags",JSON.stringify(c))})})};
dca=function(){return-1==g.ug("service_worker_push_prompt_cap")?Promise.resolve(!0):g.sj("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.ug("service_worker_push_prompt_cap"))})};
eca=function(){var a=g.ug("service_worker_push_prompt_delay_microseconds");return a?g.sj("PromptTime").then(function(b){return Promise.resolve((0,g.Qc)()-a>(b||0))}):Promise.resolve(!0)};
hca=function(){dl||cl()};
el=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
gca=function(){var a=g.z("yt-push-prompt-modal-bg");dl=g.tg("service_worker_push_prompt_modal_ignore_click");a?el(a):(a=g.cd("div",{id:"yt-push-prompt-modal-bg"}),el(a),document.body.appendChild(a),g.jh(document,"click",hca))};
cl=function(){var a=g.z("yt-push-prompt-modal-bg");a&&g.gd(a)};
ica=function(a){return bl(a)?cca():Promise.resolve()};
kca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(jca)})};
mca=function(){var a="/sw.js",b=g.F("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=fl(a);g.tg("service_worker_push_enabled")&&a.then(lca).then(ica)};
lca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
jca=function(a){a&&fl("/sw.js?0",a.scope)};
fl=function(a,b){return navigator.serviceWorker.register(a,{scope:b||String(sg("service_worker_scope")||"")||"/"})};
gl=function(){g.zi.call(this,"www/base");this.D=0};
hl=function(a){(a=a.detail.name)&&Ci(a)};
g.aa=[];ea="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)il=Object.setPrototypeOf;else{var jl;a:{var nca={a:!0},kl={};try{kl.__proto__=nca;jl=kl.a;break a}catch(a){}jl=!1}il=jl?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var fa=il,ha="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ja("Promise",function(a){function b(k){this.F=0;this.D=void 0;this.C=[];var l=this.H();try{k(l.resolve,l.reject)}catch(m){l.reject(m)}}
function c(){this.C=null}
function d(k){return k instanceof b?k:new b(function(l){l(k)})}
if(a)return a;c.prototype.F=function(k){if(null==this.C){this.C=[];var l=this;this.D(function(){l.H()})}this.C.push(k)};
var e=ha.setTimeout;c.prototype.D=function(k){e(k,0)};
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
var f=new c;b.prototype.V=function(k){var l=this.H();k.Zh(l.resolve,l.reject)};
b.prototype.la=function(k,l){var m=this.H();try{k.call(l,m.resolve,m.reject)}catch(q){m.reject(q)}};
b.prototype.then=function(k,l){function m(B,H){return"function"==typeof B?function(Q){try{q(B(Q))}catch(U){t(U)}}:H}
var q,t,y=new b(function(B,H){q=B;t=H});
this.Zh(m(k,q),m(l,t));return y};
b.prototype["catch"]=function(k){return this.then(void 0,k)};
b.prototype.Zh=function(k,l){function m(){switch(q.F){case 1:k(q.D);break;case 2:l(q.D);break;default:throw Error("Unexpected state: "+q.F);}}
var q=this;null==this.C?f.F(m):this.C.push(m)};
b.resolve=d;b.reject=function(k){return new b(function(l,m){m(k)})};
b.race=function(k){return new b(function(l,m){for(var q=g.da(k),t=q.next();!t.done;t=q.next())d(t.value).Zh(l,m)})};
b.all=function(k){var l=g.da(k),m=l.next();return m.done?d([]):new b(function(q,t){function y(Q){return function(U){B[Q]=U;H--;0==H&&q(B)}}
var B=[],H=0;do B.push(void 0),H++,d(m.value).Zh(y(B.length-1),t),m=l.next();while(!m.done)})};
return b});
ja("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
la.prototype.toString=function(){return this.C};
var baa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new la("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
ja("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ja("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&k<e;)if(d[k++]!=b[l++])return!1;return l>=f}});
ja("String.prototype.repeat",function(a){return a?a:function(b){var c=pa(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
ja("Array.prototype.keys",function(a){return a?a:function(){return qa(this,function(b){return b})}});
ja("Array.prototype.values",function(a){return a?a:function(){return qa(this,function(b,c){return c})}});
var oca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
ja("Object.assign",function(a){return a||oca});
ja("WeakMap",function(a){function b(m){this.mb=(l+=Math.random()+1).toString();if(m){m=g.da(m);for(var q;!(q=m.next()).done;)q=q.value,this.set(q[0],q[1])}}
function c(){}
function d(m){var q=typeof m;return"object"===q&&null!==m||"function"===q}
function e(m){if(!ra(m,k)){var q=new c;ia(m,k,{value:q})}}
function f(m){var q=Object[m];q&&(Object[m]=function(t){if(t instanceof c)return t;e(t);return q(t)})}
if(function(){if(!a||!Object.seal)return!1;try{var m=Object.seal({}),q=Object.seal({}),t=new a([[m,2],[q,3]]);if(2!=t.get(m)||3!=t.get(q))return!1;t["delete"](m);t.set(q,4);return!t.has(m)&&4==t.get(q)}catch(y){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var l=0;b.prototype.set=function(m,q){if(!d(m))throw Error("Invalid WeakMap key");e(m);if(!ra(m,k))throw Error("WeakMap key fail: "+m);m[k][this.mb]=q;return this};
b.prototype.get=function(m){return d(m)&&ra(m,k)?m[k][this.mb]:void 0};
b.prototype.has=function(m){return d(m)&&ra(m,k)&&ra(m[k],this.mb)};
b.prototype["delete"]=function(m){return d(m)&&ra(m,k)&&ra(m[k],this.mb)?delete m[k][this.mb]:!1};
return b});
ja("Map",function(a){function b(){var l={};return l.previous=l.next=l.head=l}
function c(l,m){var q=l.F;return ma(function(){if(q){for(;q.head!=l.F;)q=q.previous;for(;q.next!=q.head;)return q=q.next,{done:!1,value:m(q)};q=null}return{done:!0,value:void 0}})}
function d(l,m){var q=m&&typeof m;"object"==q||"function"==q?f.has(m)?q=f.get(m):(q=""+ ++k,f.set(m,q)):q="p_"+m;var t=l.C[q];if(t&&ra(l.C,q))for(var y=0;y<t.length;y++){var B=t[y];if(m!==m&&B.key!==B.key||m===B.key)return{id:q,list:t,index:y,jc:B}}return{id:q,list:t,index:-1,jc:void 0}}
function e(l){this.C={};this.F=b();this.size=0;if(l){l=g.da(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var l=Object.seal({x:4}),m=new a(g.da([[l,"s"]]));if("s"!=m.get(l)||1!=m.size||m.get({x:4})||m.set({x:4},"t")!=m||2!=m.size)return!1;var q=m.entries(),t=q.next();if(t.done||t.value[0]!=l||"s"!=t.value[1])return!1;t=q.next();return t.done||4!=t.value[0].x||"t"!=t.value[1]||!q.next().done?!1:!0}catch(y){return!1}}())return a;
na();var f=new WeakMap;e.prototype.set=function(l,m){l=0===l?0:l;var q=d(this,l);q.list||(q.list=this.C[q.id]=[]);q.jc?q.jc.value=m:(q.jc={next:this.F,previous:this.F.previous,head:this.F,key:l,value:m},q.list.push(q.jc),this.F.previous.next=q.jc,this.F.previous=q.jc,this.size++);return this};
e.prototype["delete"]=function(l){l=d(this,l);return l.jc&&l.list?(l.list.splice(l.index,1),l.list.length||delete this.C[l.id],l.jc.previous.next=l.jc.next,l.jc.next.previous=l.jc.previous,l.jc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(l){return!!d(this,l).jc};
e.prototype.get=function(l){return(l=d(this,l).jc)&&l.value};
e.prototype.entries=function(){return c(this,function(l){return[l.key,l.value]})};
e.prototype.keys=function(){return c(this,function(l){return l.key})};
e.prototype.values=function(){return c(this,function(l){return l.value})};
e.prototype.forEach=function(l,m){for(var q=this.entries(),t;!(t=q.next()).done;)t=t.value,l.call(m,t[1],t[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var k=0;return e});
ja("Set",function(a){function b(c){this.C=new Map;if(c){c=g.da(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(g.da([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
na();b.prototype.add=function(c){c=0===c?0:c;this.C.set(c,c);this.size=this.C.size;return this};
b.prototype["delete"]=function(c){c=this.C["delete"](c);this.size=this.C.size;return c};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(c){return this.C.has(c)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.C.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ja("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==pa(this,b,"includes").indexOf(b,c||0)}});
var pca=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ea(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ja("Reflect.construct",function(){return pca});
ja("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var k=0;!(f=b.next()).done;)e.push(c.call(d,f.value,k++))}else for(f=b.length,k=0;k<f;k++)e.push(c.call(d,b[k],k));return e}});
ja("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push([d,b[d]]);return c}});
ja("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push(b[d]);return c}});
g.ll=g.ll||{};g.p=this||self;caa=/^[\w+/_-]+[=]{0,2}$/;ya=null;Ja="closure_uid_"+(1E9*Math.random()>>>0);daa=0;g.Qc=Date.now||function(){return+new Date};g.ml=document;g.Gd=window;g.x(g.La,Error);g.La.prototype.name="CustomError";g.Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.ua(a))return g.ua(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.qca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.ua(a))return g.ua(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.bk=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.ua(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.dk=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.ua(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Hf=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.v)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.A)(a,function(f,k){e=b.call(d,e,f,k,a)});
return e};
g.nl=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.ol=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ua(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var fb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.jb.prototype.Qd=!0;g.jb.prototype.Vc=function(){return this.C};
g.jb.prototype.toString=function(){return"Const{"+this.C+"}"};
var ib={},hb={},waa=g.lb("");g.rca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.sca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.pl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.nb.prototype.Qd=!0;g.nb.prototype.Vc=function(){return this.F.toString()};
g.nb.prototype.ll=!0;g.nb.prototype.C=function(){return 1};
var mb={};var ub,vb,wb,xb,yb,zb,gaa;g.Bb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
ub=/&/g;vb=/</g;wb=/>/g;xb=/"/g;yb=/'/g;zb=/\x00/g;gaa=/[\x00&<>"']/;g.Fb.prototype.Qd=!0;g.Fb.prototype.Vc=function(){return this.F.toString()};
g.Fb.prototype.ll=!0;g.Fb.prototype.C=function(){return 1};
var iaa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,haa=/^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,Kb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Eb={};g.Ib("about:blank");g.Ob.prototype.Qd=!0;g.Nb={};g.Ob.prototype.Vc=function(){return this.C};
g.ql=g.Pb("");g.rl=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.sl=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Rb.prototype.Qd=!0;g.Qb={};g.Rb.prototype.Vc=function(){return this.C};
g.tca=g.Sb("");a:{var tl=g.p.navigator;if(tl){var ul=tl.userAgent;if(ul){g.Tb=ul;break a}}g.Tb=""};g.ac.prototype.ll=!0;g.ac.prototype.C=function(){return this.D};
g.ac.prototype.Qd=!0;g.ac.prototype.Vc=function(){return this.F.toString()};
var $b={};g.fc("<!DOCTYPE html>",0);g.se=g.fc("",0);g.vl=g.fc("<br>",0);g.uca=g.Va(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.bc(g.se);return!b.parentElement});g.mc=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.rc[" "]=g.Aa;var Dl,jaa,Hl;g.wl=g.Ub("Opera");g.E=g.Vb();g.xl=g.Ub("Edge");g.yl=g.xl||g.E;g.zl=g.Ub("Gecko")&&!(-1!=g.Tb.toLowerCase().indexOf("webkit")&&!g.Ub("Edge"))&&!(g.Ub("Trident")||g.Ub("MSIE"))&&!g.Ub("Edge");g.Al=-1!=g.Tb.toLowerCase().indexOf("webkit")&&!g.Ub("Edge");g.Bl=g.Ub("Macintosh");g.Cl=g.Ub("Windows");g.vca=g.Ub("Linux")||g.Ub("CrOS");g.wca=g.Ub("Android");g.xca=pc();g.yca=g.Ub("iPad");g.zca=g.Ub("iPod");g.Aca=g.qc();
a:{var El="",Fl=function(){var a=g.Tb;if(g.zl)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.xl)return/Edge\/([\d\.]+)/.exec(a);if(g.E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Al)return/WebKit\/(\S+)/.exec(a);if(g.wl)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Fl&&(El=Fl?Fl[1]:"");if(g.E){var Gl=tc();if(null!=Gl&&Gl>parseFloat(El)){Dl=String(Gl);break a}}Dl=El}g.uc=Dl;jaa={};Hl=g.p.document&&g.E?tc():void 0;g.wc=Hl;g.Il=Wb();g.Jl=pc()||g.Ub("iPod");g.Kl=g.Ub("iPad");g.Bca=g.Zb();g.Ll=g.Xb();g.Ml=g.Yb()&&!g.qc();var zc;zc={};g.Bc=null;g.Cc.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.Cc.prototype[Symbol.iterator]=function(){return this});g.Hc="function"==typeof Uint8Array;g.Dc.prototype.ad=function(){Ec(this);return this.ec};
g.Dc.prototype.F=g.Hc?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return Ac(this)};
try{return JSON.stringify(this.ec&&this.ad(),Fc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.ad(),Fc)};
g.Dc.prototype.toString=function(){Ec(this);return this.ec.toString()};
g.Dc.prototype.clone=function(){return new this.constructor(Gc(this.ad()))};g.h=g.Ic.prototype;g.h.isEnabled=function(){return navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.sa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Qc)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Bb)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.sa(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Hc=function(){return g.Jc(this).keys};
g.h.Ib=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Lb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.Kd=g.ba(3);g.h.clear=function(){for(var a=g.Jc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Th=new g.Ic("undefined"==typeof document?null:document);var Mc={};g.Nl={Ga:["BC","AD"],Ka:["Before Christ","Anno Domini"],La:"JFMAMJJASOND".split(""),Ma:"JFMAMJJASOND".split(""),va:"January February March April May June July August September October November December".split(" "),ra:"January February March April May June July August September October November December".split(" "),wa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ba:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Da:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Ja:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Aa:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Ca:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Pa:"SMTWTFS".split(""),Na:"SMTWTFS".split(""),Ia:["Q1","Q2","Q3","Q4"],Ha:["1st quarter","2nd quarter","3rd quarter","4th quarter"],za:["AM","PM"],qa:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],xa:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Fa:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],sa:6,Ea:[5,6],ua:5};
g.Ol=g.Nl;g.Ol=g.Nl;g.h=g.Rc.prototype;g.h.Be=g.Ol.sa;g.h.Vg=g.Ol.ua;g.h.clone=function(){var a=new g.Rc(this.date);a.Be=this.Be;a.Vg=this.Vg;return a};
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
g.h.ge=function(a){return[this.getFullYear(),g.nc(this.getMonth()+1,2),g.nc(this.getDate(),2)].join(a?"-":"")+""};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){return this.ge()};
g.h.valueOf=function(){return this.date.valueOf()};var laa;laa=!g.E||g.xc(9);g.Cca=!g.zl&&!g.E||g.E&&g.xc(9)||g.zl&&g.vc("1.9.1");g.Pl=g.E&&!g.vc("9");g.Dca=g.E||g.wl||g.Al;g.h=g.Sc.prototype;g.h.clone=function(){return new g.Sc(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Sc&&g.Tc(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.Vc.prototype;g.h.clone=function(){return new g.Vc(this.width,this.height)};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!(this.width*this.height)};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Xc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.ld=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.xd=/#|$/;var Eca={pK:"allow-forms",qK:"allow-modals",rK:"allow-orientation-lock",sK:"allow-pointer-lock",tK:"allow-popups",uK:"allow-popups-to-escape-sandbox",vK:"allow-presentation",wK:"allow-same-origin",xK:"allow-scripts",yK:"allow-top-navigation",zK:"allow-top-navigation-by-user-activation"},naa=g.Va(function(){return g.Ad(Eca)});g.h=g.Bd.prototype;g.h.clone=function(){return new g.Bd(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Sc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.Ql=g.zl?"MozUserSelect":g.Al||g.xl?"WebkitUserSelect":null;g.Rl=!!window.google_async_iframe_id;g.Sl=g.Rl&&window.parent||window;g.Eg=(new Date).getTime();g.C.prototype.Sc=!1;g.C.prototype.nb=function(){return this.Sc};
g.C.prototype.dispose=function(){this.Sc||(this.Sc=!0,this.W())};
g.C.prototype.W=function(){if(this.Ff)for(;this.Ff.length;)this.Ff.shift()()};g.Rd.prototype.stopPropagation=function(){this.F=!0};
g.Rd.prototype.preventDefault=function(){this.Sr=!1};var ge,Gca,uaa;g.Fca=!g.E||g.xc(9);ge=!g.E||g.xc(9);Gca=g.E&&!g.vc("9");uaa=function(){if(!g.p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.p.addEventListener("test",g.Aa,b),g.p.removeEventListener("test",g.Aa,b)}catch(c){}return a}();g.Tl=g.Al?"webkitTransitionEnd":g.wl?"otransitionend":"transitionend";g.x(g.Sd,g.Rd);var Hca={2:"touch",3:"pen",4:"mouse"};
g.Sd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.zl&&(g.sc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Bl?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.ua(a.pointerType)?a.pointerType:Hca[a.pointerType]||"";this.state=a.state;this.xc=
a;a.defaultPrevented&&this.preventDefault()};
g.Sd.prototype.stopPropagation=function(){g.Sd.T.stopPropagation.call(this);this.xc.stopPropagation?this.xc.stopPropagation():this.xc.cancelBubble=!0};
g.Sd.prototype.preventDefault=function(){g.Sd.T.preventDefault.call(this);var a=this.xc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Gca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Td="closure_listenable_"+(1E6*Math.random()|0),raa=0;g.h=g.Wd.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Yd(a,b,d,e);-1<k?(b=a[k],c||(b.Yh=!1)):(b=new saa(b,this.src,f,!!d,e),b.Yh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Yd(e,b,c,d);return-1<b?(Vd(e[b]),g.Ra(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Vd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.dg=g.ba(5);g.h.ef=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Yd(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.sa(a),d=c?a.toString():"",e=g.sa(b);return g.Xa(this.listeners,function(f){for(var k=0;k<f.length;++k)if(!(c&&f[k].type!=d||e&&f[k].capture!=b))return!0;return!1})};var de="closure_lm_"+(1E6*Math.random()|0),je={},fe=0,me="__closure_events_fn_"+(1E9*Math.random()>>>0);g.x(g.ne,g.C);g.ne.prototype[Td]=!0;g.h=g.ne.prototype;g.h.Ci=function(){return this.bm};
g.h.Ch=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.$d(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.he(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Ci();if(b){var c=[];for(var d=1;b;b=b.Ci())c.push(b),++d}b=this.Xt;d=a.type||a;if(g.ua(a))a=new g.Rd(a,b);else if(a instanceof g.Rd)a.target=a.target||b;else{var e=a;a=new g.Rd(d,b);g.gb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=oe(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=oe(k,d,!0,a)&&e,a.F||(e=oe(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=oe(k,d,!1,a)&&e;return e};
g.h.W=function(){g.ne.T.W.call(this);this.removeAllListeners();this.bm=null};
g.h.O=function(a,b,c,d){return this.vd.add(String(a),b,!1,c,d)};
g.h.Ge=function(a,b,c,d){return this.vd.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.vd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.vd?this.vd.removeAll(a):0};
g.h.dg=g.ba(4);g.h.ef=function(a,b,c,d){return this.vd.ef(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.vd.hasListener(g.sa(a)?String(a):void 0,b)};pe.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var Ae;var Be=new pe(function(){return new ue},function(a){a.reset()});
te.prototype.add=function(a,b){var c=Be.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
te.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
ue.prototype.set=function(a,b){this.kc=a;this.scope=b;this.next=null};
ue.prototype.reset=function(){this.next=this.scope=this.kc=null};var ve,we=!1,xe=new te;Ge.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var He=new pe(function(){return new Ge},function(a){a.reset()});
g.Fe.prototype.then=function(a,b,c){return Le(this,g.Fa(a)?a:null,g.Fa(b)?b:null,c)};
g.Ce(g.Fe);g.Fe.prototype.cancel=function(a){0==this.C&&ye(function(){var b=new g.Se(a);Ne(this,b)},this)};
g.Fe.prototype.Y=function(a){this.C=0;g.Ee(this,2,a)};
g.Fe.prototype.N=function(a){this.C=0;g.Ee(this,3,a)};
g.Fe.prototype.J=function(){for(var a;a=Oe(this);)Pe(this,a,this.C,this.M);this.L=!1};
var Ue=re;g.x(g.Se,g.La);g.Se.prototype.name="cancel";g.x(g.Xe,g.C);g.h=g.Xe.prototype;g.h.mb=0;g.h.W=function(){g.Xe.T.W.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.mb=g.Ve(this.Yb,g.sa(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.We(this.mb);this.mb=0};
g.h.af=g.ba(7);g.h.isActive=function(){return 0!=this.mb};
g.h.uo=function(){this.mb=0;this.C&&this.C.call(this.F)};g.x(Ze,Caa);Ze.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Ze.prototype.update=function(a,b){if(null!=a){g.sa(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)$e(this,a,d),d+=this.F;if(g.ua(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){$e(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){$e(this,e);f=0;break}}this.D=f;this.H+=b}};
Ze.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;$e(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.cf="StopIteration"in g.p?g.p.StopIteration:{message:"StopIteration",stack:""};g.bf.prototype.next=function(){throw g.cf;};
g.bf.prototype.cd=function(){return this};g.h=g.gf.prototype;g.h.Lb=function(){return this.D};
g.h.Ib=g.ba(0);g.h.Hc=function(){g.jf(this);return this.C.concat()};
g.h.Kd=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Lb())return!1;var c=b||Eaa;g.jf(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Oe=this.D=this.C.length=0};
g.h.remove=function(a){return g.hf(this.F,a)?(delete this.F[a],this.D--,this.Oe++,this.C.length>2*this.D&&g.jf(this),!0):!1};
g.h.get=function(a,b){return g.hf(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.hf(this.F,a)||(this.D++,this.C.push(a),this.Oe++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.Hc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.gf(this)};
g.h.cd=function(a){g.jf(this);var b=0,c=this.Oe,d=this,e=new g.bf;e.next=function(){if(c!=d.Oe)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.cf;var f=d.C[b++];return a?f:d.F[f]};
return e};var nf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Gaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.x(g.of,g.C);g.h=g.of.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.rd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.Aa):(c&&g.Sa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.na=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Haa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.rd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.A)(b,this.rd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Lb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Lb(b);return a};
g.h.W=function(){g.of.T.W.call(this);this.clear();this.D.length=0};g.qf.prototype.set=function(a,b){g.sa(b)?this.C.set(a,g.lf(b)):this.C.remove(a)};
g.qf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.qf.prototype.remove=function(a){this.C.remove(a)};g.x(rf,g.qf);rf.prototype.set=function(a,b){rf.T.set.call(this,a,tf(b))};
rf.prototype.F=function(a){a=rf.T.get.call(this,a);if(!g.sa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
rf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.sa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.x(g.uf,rf);g.uf.prototype.set=function(a,b,c){if(b=tf(b)){if(c){if(c<(0,g.Qc)()){g.uf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Qc)()}g.uf.T.set.call(this,a,b)};
g.uf.prototype.F=function(a,b){var c=g.uf.T.F.call(this,a);if(c)if(!b&&g.vf(c))g.uf.prototype.remove.call(this,a);else return c};g.x(wf,Iaa);wf.prototype.Lb=function(){var a=0;g.ef(this.cd(!0),function(){a++});
return a};
wf.prototype.clear=function(){var a=Daa(this.cd(!0)),b=this;(0,g.A)(a,function(c){b.remove(c)})};g.x(g.xf,wf);g.h=g.xf.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.ua(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Lb=function(){return this.C.length};
g.h.cd=function(a){var b=0,c=this.C,d=new g.bf;d.next=function(){if(b>=c.length)throw g.cf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!g.ua(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.x(g.yf,g.xf);g.x(Af,wf);var Jaa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},zf=null;g.h=Af.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(Bf(a),b);Cf(this)};
g.h.get=function(a){a=this.C.getAttribute(Bf(a));if(!g.ua(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(Bf(a));Cf(this)};
g.h.Lb=function(){return Df(this).attributes.length};
g.h.cd=function(a){var b=0,c=Df(this).attributes,d=new g.bf;d.next=function(){if(b>=c.length)throw g.cf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!g.ua(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){for(var a=Df(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Cf(this)};g.x(Ef,wf);Ef.prototype.set=function(a,b){this.F.set(this.C+a,b)};
Ef.prototype.get=function(a){return this.F.get(this.C+a)};
Ef.prototype.remove=function(a){this.F.remove(this.C+a)};
Ef.prototype.cd=function(a){var b=this.F.cd(!0),c=this,d=new g.bf;d.next=function(){for(var e=b.next();e.substr(0,c.C.length)!=c.C;)e=b.next();return a?e.substr(c.C.length):c.F.get(e)};
return d};Gf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
Gf.prototype.get=function(a){return!!this.C[a]};/*
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
g.Lf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.r("yt.config_",g.Lf,void 0);var Tf={};var Ica=g.u("ytPubsubPubsubInstance")||new g.of;g.of.prototype.subscribe=g.of.prototype.subscribe;g.of.prototype.unsubscribeByKey=g.of.prototype.rd;g.of.prototype.publish=g.of.prototype.na;g.of.prototype.clear=g.of.prototype.clear;g.r("ytPubsubPubsubInstance",Ica,void 0);var Zf=g.u("ytPubsubPubsubSubscribedKeys")||{};g.r("ytPubsubPubsubSubscribedKeys",Zf,void 0);var ag=g.u("ytPubsubPubsubTopicToKeys")||{};g.r("ytPubsubPubsubTopicToKeys",ag,void 0);var $f=g.u("ytPubsubPubsubIsSynchronous")||{};
g.r("ytPubsubPubsubIsSynchronous",$f,void 0);var Maa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Naa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.ig.prototype.initialize=function(a,b,c,d){var e=this;b?(this.F=!0,g.gg(b,function(){e.F=!1;if(window.botguard)jg(e,c,d);else{g.hg(b);var f=Error("Unable to load Botguard");f.params="from "+b;g.Rf(f)}})):a&&(eval(a),window.botguard?jg(this,c,d):g.Rf(Error("Unable to load Botguard from JS")))};
g.ig.prototype.Rd=function(){return!!this.C};
g.ig.prototype.dispose=function(){this.C=null};g.n(qg,Oaa);qg.prototype.start=function(){var a=g.u("yt.scheduler.instance.start");a&&a()};
qg.prototype.pause=function(){var a=g.u("yt.scheduler.instance.pause");a&&a()};
g.Ba(qg);qg.getInstance();g.Ah=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Ul="Microsoft Internet Explorer"==navigator.appName;g.vg=new g.ig;g.Ag=new function(){var a=window.document;this.C=window;this.F=a};
g.r("yt.ads_.signals_.getAdSignalsString",function(a){return g.wg(g.Dg(a))},void 0);(0,g.Qc)();var Fg=g.sa(XMLHttpRequest)?function(){return new XMLHttpRequest}:g.sa(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Ig,Uaa,Ng;Ig={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Uaa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Ng=!1;g.Vl=Pg;Tg.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.De(a)?a:g.Vg(a)):2===this.F&&b?(a=b.call(c,this.C),g.De(a)?a:g.Ug(a)):this};
Tg.prototype.getValue=function(){return this.C};
g.Ce(Tg);var Jca=0,Yaa=g.Al?"webkit":g.zl?"moz":g.E?"ms":g.wl?"o":"",Wg=g.u("ytDomDomGetNextId")||function(){return++Jca};
g.r("ytDomDomGetNextId",Wg,void 0);var Zaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Zg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Zg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Zg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ch=g.u("ytEventsEventsListeners")||{};g.r("ytEventsEventsListeners",ch,void 0);var eh=g.u("ytEventsEventsCounter")||{count:0};g.r("ytEventsEventsCounter",eh,void 0);var fh=g.Va(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.x(g.lh,g.C);g.lh.prototype.Y=function(a){this.C=new g.Sc(g.ah(a),g.bh(a))};
g.lh.prototype.M=function(){if(this.C){var a=g.Ah();if(0!=this.D){var b=g.Uc(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.Yb();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.lh.prototype.W=function(){g.Xf(this.N);g.ih(this.J)};g.n(mh,g.C);mh.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
mh.prototype.W=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.callback)}g.C.prototype.W.call(this)};nh.prototype.clone=function(){var a=new nh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.Ca(c)?a[b]=g.db(c):a[b]=c}return a};var qh={},ph=0;var cba,Hh,Ih,bba,Bh,dba,vh;cba=Math.pow(2,16)-1;Hh=null;Ih=0;bba={log_event:"events",log_interaction:"interactions"};Bh=Object.create(null);Bh.log_event="GENERIC_EVENT_LOGGING";Bh.log_interaction="INTERACTION_LOGGING";dba=new Set(["log_event"]);vh={};g.sh=0;g.th=0;g.uh=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.r("ytLoggingTransportLogPayloadsQueue_",g.uh,void 0);var Gh=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};g.r("ytLoggingTransportTokensToCttTargetIds_",Gh,void 0);
var yh=g.u("ytLoggingTransportDispatchedStats_")||{};g.r("ytLoggingTransportDispatchedStats_",yh,void 0);var Ch=g.u("ytLoggingTransportCapturedTime_")||{};g.r("ytytLoggingTransportCapturedTime_",Ch,void 0);var Nh={};var Ph=g.u("ytLoggingGelSequenceIdObj_")||{};g.r("ytLoggingGelSequenceIdObj_",Ph,void 0);g.Wh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.Qc)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.lf(b))}catch(f){return}else e=escape(b);g.Uh(a,e,c,this.F)};
g.Wh.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Th.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.Wh.prototype.remove=function(a){this.C&&this.C.remove(a);g.Vh(a,"/",this.F)};var Xh=new g.Wh("yt.innertube");g.ci.prototype.toString=function(){return JSON.stringify(g.di(this))};var ii=g.u("ytLoggingLatencyUsageStats_")||{};g.r("ytLoggingLatencyUsageStats_",ii,void 0);var ji=0;var ki=(0,g.Qc)().toString();var oi=g.u("ytLoggingTimeDocumentNonce_")||li(),pi,mi;g.r("ytLoggingTimeDocumentNonce_",oi,void 0);pi=0;g.ni=null;mi=null;g.r("yt_logging_screen.getRootVeType",ui,void 0);g.r("yt_logging_screen.getCurrentCsn",g.wi,void 0);g.r("yt_logging_screen.setCurrentScreen",g.xi,void 0);g.h=g.zi.prototype;g.h.BG=function(){this.Rd()||this.init()};
g.h.enable=function(){this.C=1;(0,g.A)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.BG,this),this.subscribe("dispose-"+a,this.dispose,this),g.F("PAGE_NAME")==a&&g.Ai(this))},this)};
g.h.init=function(){g.og(this.F);this.C=2;this.L&&this.L()};
g.h.Rd=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.og(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Pf(a)}};
g.h.subscribe=function(a,b,c){a=g.bg(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.cg(this.G);this.G=[]};var Bi=g.u("yt.modules.registry_")||{};g.r("yt.modules.registry_",Bi,void 0);g.Ei=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.r("yt.msgs_",g.Ei,void 0);var Oi={},iba=0;var jba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.n(Zi,g.C);g.h=Zi.prototype;g.h.getId=function(){return this.N};
g.h.loadNewVideoConfig=function(a){if(!this.nb()){this.ob=a=g.oh(a);this.C=a.clone();this.F=this.C.attrs.id||this.F;"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N);this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F);this.C.args.enablejsapi="1";this.C.args.playerapiid=this.N;this.ha||(this.ha=gj(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Ed(this.H,Number(a)||a);if(a=this.C.attrs.height)this.H.style.height=
g.Cd(Number(a)||a,!0);lba(this);this.L&&$i(this)}};
g.h.Dv=function(){return this.ob};
g.h.Dz=function(){return this.L};
g.h.Sh=function(a,b){var c=this,d=gj(this,b);if(d){if(!g.Pa(this.ub,a)&&!this.D[a]){var e=nba(this,a);this.Y&&this.Y(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.L&&g.Uf(function(){d(c.api)},0)}};
g.h.pG=function(a,b){if(!this.nb()){var c=gj(this,b);c&&g.pf(this.J,a,c)}};
g.h.Wt=function(a){g.I("a11y-announce",a)};
g.h.ID=function(a){g.I("WATCH_LATER_VIDEO_ADDED",a)};
g.h.JD=function(a){g.I("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Nv=function(){return this.la||(aj(this)?"html5":null)};
g.h.Hv=function(){return this.eb};
g.h.cancel=function(){if(this.M){var a=this.M,b=g.fg(this.C.assets.js);spf.script.ignore(b,a)}g.Wf(this.qb);this.V=!1};
g.h.W=function(){dj(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Pf(b)}this.Oa=null;for(var a in this.D)g.p[this.D[a]]=null;this.ob=this.C=this.api=null;delete this.oa;delete this.H;g.C.prototype.W.call(this)};g.ij={};g.hj="player_uid_"+(1E9*Math.random()>>>0);g.nj.prototype.toString=function(){return this.topic};var Kca=g.u("ytPubsub2Pubsub2Instance")||new g.of;g.of.prototype.subscribe=g.of.prototype.subscribe;g.of.prototype.unsubscribeByKey=g.of.prototype.rd;g.of.prototype.publish=g.of.prototype.na;g.of.prototype.clear=g.of.prototype.clear;g.r("ytPubsub2Pubsub2Instance",Kca,void 0);g.Wl=g.u("ytPubsub2Pubsub2SubscribedKeys")||{};g.r("ytPubsub2Pubsub2SubscribedKeys",g.Wl,void 0);g.Xl=g.u("ytPubsub2Pubsub2TopicToKeys")||{};g.r("ytPubsub2Pubsub2TopicToKeys",g.Xl,void 0);
g.Yl=g.u("ytPubsub2Pubsub2IsAsync")||{};g.r("ytPubsub2Pubsub2IsAsync",g.Yl,void 0);g.r("ytPubsub2Pubsub2SkipSubKey",null,void 0);var tj=null;g.Zl=window.performance&&window.performance.memory;g.Rk={};var uj=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.n(xj,g.mj);g.n(yj,g.mj);var zba=new g.nj("aft-recorded",xj),Dba=new g.nj("timing-sent",yj);var Bba,Fj,$l,Sj,yba,uba,xba,am,Tj,Xj,zj,wba,fk,Vba;Bba={vc:!0};
Fj={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_sel_auto_svg_home_v2"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",
'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};$l={};
Sj=($l.ad_allowed="adTypesAllowed",$l.yt_abt="adBreakType",$l.ad_cpn="adClientPlaybackNonce",$l.ad_docid="adVideoId",$l.yt_ad_an="adNetworks",$l.ad_at="adType",$l.browse_id="browseId",$l.p="httpProtocol",$l.t="transportProtocol",$l.cpn="clientPlaybackNonce",$l.cseg="creatorInfo.creatorSegment",$l.csn="clientScreenNonce",$l.docid="videoId",$l.GetHome_rid="getHomeRequestId",$l.is_continuation="isContinuation",$l.is_nav="isNavigation",$l.b_p="kabukiInfo.browseParams",$l.is_prefetch="kabukiInfo.isPrefetch",
$l.is_secondary_nav="kabukiInfo.isSecondaryNav",$l.prev_browse_id="kabukiInfo.prevBrowseId",$l.query_source="kabukiInfo.querySource",$l.voz_type="kabukiInfo.vozType",$l.yt_lt="loadType",$l.mver="creatorInfo.measurementVersion",$l.yt_ad="isMonetized",$l.nr="webInfo.navigationReason",$l.ncnp="webInfo.nonPreloadedNodeCount",$l.prt="playbackRequiresTap",$l.pis="playerInfo.playerInitializedState",$l.paused="playerInfo.isPausedOnLoad",$l.yt_pt="playerType",$l.fmt="playerInfo.itag",$l.yt_pl="watchInfo.isPlaylist",
$l.yt_pre="playerInfo.preloadType",$l.yt_ad_pr="prerollAllowed",$l.pa="previousAction",$l.yt_red="isRedSubscriber",$l.st="serverTimeMs",$l.aq="tvInfo.appQuality",$l.br_trs="tvInfo.bedrockTriggerState",$l.label="tvInfo.label",$l.is_mdx="tvInfo.isMdx",$l.preloaded="tvInfo.isPreloaded",$l.query="unpluggedInfo.query",$l.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",$l.yt_vst="videoStreamType",$l.vph="viewportHeight",$l.vpw="viewportWidth",$l.yt_vis="isVisible",$l);yba="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
uba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
"channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",chips:"LATENCY_ACTION_CHIPS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",search_ui:"LATENCY_ACTION_SEARCH_UI",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",
"watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS",ww_rqs:"LATENCY_ACTION_WHO_IS_WATCHING","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
"video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC","video.monetization":"LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION"};xba="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" ");am={};
Tj=(am.mver="MEASUREMENT_VERSION_",am.pis="PLAYER_INITIALIZED_STATE_",am.yt_pt="LATENCY_PLAYER_",am.pa="LATENCY_ACTION_",am.yt_vst="VIDEO_STREAM_TYPE_",am);Xj=!1;zj=!1;wba=(0,g.v)(uj.clearResourceTimings||uj.webkitClearResourceTimings||uj.mozClearResourceTimings||uj.msClearResourceTimings||uj.oClearResourceTimings||g.Aa,uj);fk=Aj;Vba=Ej;g.gk=Cj;var nk=0,jk=[],mk=[],ek=0,kk={},lk={},hk=new g.Xe(Kba,1E3);var pk=["server_prefetched_vast","vmap"];var rk,vk="";var xk=null,Ak=[];var Fk,Xk,Wk,Hk,Gk,Rba,Uba,Sba,Tba,Sk;Hk=0;Gk=0;Rba=[900,60,"waiting"];Uba=[500,99,"waiting"];Sba=[300,60,"waiting"];Tba=[400,99,"waiting"];Sk=[300,101,"done"];var dl=!1;window.yt=window.yt||{};g.r("yt.setConfig",g.Mf,void 0);g.r("yt.pushConfigArray",Nf,void 0);g.r("yt.getConfig",g.F,void 0);g.r("yt.config.set",g.Mf,void 0);g.r("yt.config.pushArray",Nf,void 0);g.r("yt.config.get",g.F,void 0);g.r("yt.hasMsg",g.Gi,void 0);g.r("yt.setMsg",Fi,void 0);g.r("yt.setGoogMsg",Hi,void 0);g.r("yt.msgs.has",g.Gi,void 0);g.r("yt.msgs.set",Fi,void 0);g.r("yt.msgs.setGoog",Hi,void 0);g.r("yt.pubsub.publish",g.I,void 0);g.r("yt.pubsub.subscribe",g.bg,void 0);
g.r("ytcsi.tick",g.gk,void 0);g.x(gl,g.zi);
gl.prototype.enable=function(){window.onload=Pba;window.onunload=Qba;window.onerror=Laa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Dk),window.addEventListener("spfhistory",Ek),window.addEventListener("spfrequest",Jk),window.addEventListener("spfpartprocess",Nk),window.addEventListener("spfpartdone",Ok),window.addEventListener("spfprocess",Pk),window.addEventListener("spfdone",Tk),window.addEventListener("spferror",Uk),window.addEventListener("spfreload",
Vk),window.addEventListener("spfjsbeforeunload",hl)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",Xba),this.subscribe("dispose",Yba)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
gl.prototype.init=function(){gl.T.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.F("PAGEFRAME_JS")){var b=g.F("PAGEFRAME_JS",void 0);var c=function(){var e=g.u("ytbin.www.pageframe.setup");e&&(window.ytPageFrameLoaded=!0,e())}}else a&&(a=g.u("yt.www.masthead.loadSearchbox"))&&a();
a=g.F("JS_COMMON_MODULE");var d=g.F("JS_PAGE_MODULES");d||(d=[a]);a=g.F("JS_DELAY_LOAD",0);0<a?(g.Wf(this.D),this.D=g.Uf(function(){b&&g.gg(b,c);spf.script.require(d)},a)):(b&&g.gg(b,c),spf.script.require(d));
g.r("yt.abuse.player.botguardInitialized",Qaa,void 0);g.r("yt.abuse.player.invokeBotguard",Raa,void 0);g.r("yt.abuse.dclkstatus.checkDclkStatus",Paa,void 0);g.r("yt.player.exports.navigate",g.Xi,void 0);g.r("yt.util.activity.init",g.Mh,void 0);g.r("yt.util.activity.getTimeSinceActive",g.Oh,void 0);g.r("yt.util.activity.setTimestamp",g.Kh,void 0);wk(g.u("ytplayer.config"));g.u("ytspf.enabled")&&Nba();vba();g.F("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.tg("service_worker_enabled")?mca():kca())};
gl.prototype.dispose=function(){g.Wf(this.D);var a=g.u("ytbin.www.pageframe.cancelSetup");a&&a();g.Xf(rk);if(a=g.tk())a.removeEventListener("onReady",sk),a.removeEventListener("onStateChange",sk);Mj(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.G(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.kh(a);gl.T.dispose.call(this)};
gl.prototype.disable=function(){gl.T.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Dk),window.removeEventListener("spfhistory",Ek),window.removeEventListener("spfrequest",Jk),window.removeEventListener("spfpartprocess",Nk),window.removeEventListener("spfpartdone",Ok),window.removeEventListener("spfprocess",Pk),window.removeEventListener("spfdone",Tk),window.removeEventListener("spferror",Uk),window.removeEventListener("spfreload",Vk),window.removeEventListener("spfjsbeforeunload",
hl));window.onload=null;window.onunload=null;window.onerror=null};
g.Di(new gl);})(_yt_www);


}
/*
     FILE ARCHIVED ON 23:59:57 Jul 31, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:44:39 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 148.969
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.058
  cdx.remote: 0.051
  esindex: 0.007
  LoadShardBlock: 67.936 (3)
  PetaboxLoader3.datanode: 119.847 (5)
  load_resource: 568.554 (2)
  PetaboxLoader3.resolve: 467.219 (2)
*/