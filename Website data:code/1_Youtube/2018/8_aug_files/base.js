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

var _yt_www={};(function(g){var window=this;var fa,ka,ja,la,baa,na,oa,pa,daa,eaa,Va,qb,naa,ub,paa,Ac,Lc,raa,Vc,Xc,Yc,$c,Zc,ad,saa,cd,dd,taa,gd,ld,md,pd,uaa,vaa,qd,rd,zd,xaa,Dd,Fd,Gd,Ld,yaa,Od,Wd,Ud,Aaa,Zd,$d,ae,be,Baa,ce,de,he,Caa,je,qe,ye,we,te,Eaa,Be,ze,Ae,Ee,Daa,Faa,Je,Ke,Oe,Gaa,Haa,Iaa,Ve,Xe,Kaa,bf,cf,df,Laa,gf,lf,mf,nf,of,pf,rf,uf,wf,Naa,Ef,Pf,Qaa,Vf,Qf,Yf,Raa,Saa,kg,Taa,lg,mg,Uaa,rg,pg,ng,tg,Ag,Lg,Mg,$aa,Sg,Zaa,dba,jh,ph,qh,eba,wh,zh,Gh,Fh,fba,Kh,Sh,Vh,Zh,bi,di,gba,jba,qi,ri,si,ti,oba,Li,xi,Mi,yi,vi,Ni,zi,kba,Ui,Fi,Gi,Wi,lba,mba,Hi,Ci,
Di,wi,Ei,Zi,Ji,Oi,Ki,tba,Bi,Ti,aj,cj,dj,fj,wba,ej,gj,xba,jj,bj,kj,yba,hj,ij,zba,rj,Aba,Gba,Fba,Eba,yj,Dba,Bba,Cba,Hba,Iba,Kba,Lba,Mj,Hj,Jj,Oj,Mba,Pj,Rj,Nba,Oba,Sj,Tj,Yj,ck,dk,ek,ik,jk,kk,Vba,Wba,Zj,bk,Xj,Uba,ak,ok,qk,nk,rk,pk,Xba,aca,Yba,dca,$ba,Zba,bca,cca,fca,uk,eca,sk,gca,ica,kca,jca,hca,vk,wk,xk,ca,yk,Ca,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
g.ea=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
fa=function(){fa=function(){};
ha.Symbol||(ha.Symbol=aaa)};
ka=function(){fa();var a=ha.Symbol.iterator;a||(a=ha.Symbol.iterator=ha.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(this)}});
ka=function(){}};
ja=function(a){var b=0;return la(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
la=function(a){ka();a={next:a};a[ha.Symbol.iterator]=function(){return this};
return a};
g.ma=function(a){ka();var b=a[window.Symbol.iterator];return b?b.call(a):ja(a)};
baa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
na=function(a,b){if(b){for(var c=ha,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}};
oa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
pa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.qa=function(a){return void 0!==a};
g.sa=function(a){return"string"==typeof a};
g.ta=function(a){return"boolean"==typeof a};
g.ua=function(a){return"number"==typeof a};
g.p=function(a,b,c){a=a.split(".");c=c||g.n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.qa(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.r=function(a,b){for(var c=a.split("."),d=b||g.n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.va=function(){};
g.wa=function(a){a.Ac=void 0;a.getInstance=function(){return a.Ac?a.Ac:a.Ac=new a}};
g.xa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.ya=function(a){return"array"==g.xa(a)};
g.za=function(a){var b=g.xa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Aa=function(a){return"function"==g.xa(a)};
g.Ba=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Da=function(a){return a[Ca]||(a[Ca]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.t=daa:g.t=eaa;return g.t.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.kw=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
g.Ea=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ea);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ga=function(a,b,c){b=g.Fa(a,b,c);return 0>b?null:g.sa(a)?a.charAt(b):a[b]};
g.Fa=function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ia=function(a,b){return 0<=(0,g.Ha)(a,b)};
g.Ja=function(a){return 0==a.length};
g.La=function(a,b){var c=(0,g.Ha)(a,b),d;(d=0<=c)&&g.Ka(a,c);return d};
g.Ka=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Ma=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Na=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.za(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Oa=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Pa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Qa=function(a){return/^[\s\xa0]*$/.test(a)};
g.Ra=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Sa=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ta=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Xa=function(a,b){for(var c=0,d=(0,g.Ua)(String(a)).split("."),e=(0,g.Ua)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Va(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||Va(0==l[2].length,0==m[2].length)||Va(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Va=function(a,b){return a<b?-1:a>b?1:0};
g.Ya=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.$a=function(a){return-1!=g.Za.indexOf(a)};
g.ab=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.bb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.cb=function(a,b){return null!==a&&b in a};
g.db=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.eb=function(a){for(var b in a)return!1;return!0};
g.fb=function(a,b){b in a&&delete a[b]};
g.gb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.hb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};
g.ib=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.lb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<jb.length;f++)c=jb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.mb=function(){return g.$a("Trident")||g.$a("MSIE")};
g.ob=function(){return g.$a("Safari")&&!(g.nb()||g.$a("Coast")||g.$a("Opera")||g.$a("Edge")||g.$a("Silk")||g.$a("Android"))};
g.nb=function(){return(g.$a("Chrome")||g.$a("CriOS"))&&!g.$a("Edge")};
g.pb=function(){return g.$a("Android")&&!(g.nb()||g.$a("Firefox")||g.$a("Opera")||g.$a("Silk"))};
qb=function(){return g.$a("iPhone")&&!g.$a("iPod")&&!g.$a("iPad")};
g.rb=function(){return qb()||g.$a("iPad")||g.$a("iPod")};
g.sb=function(a){g.sb[" "](a);return a};
g.tb=function(a,b){try{return g.sb(a[b]),!0}catch(c){}return!1};
naa=function(a,b){var c=maa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
ub=function(){var a=g.n.document;return a?a.documentMode:void 0};
g.wb=function(a){return naa(a,function(){return 0<=g.Xa(g.vb,a)})};
g.yb=function(a){return Number(g.xb)>=a};
g.Cb=function(){if(!zb){zb={};g.Ab={};Bb={};for(var a=0;65>a;a++)zb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),g.Ab[zb[a]]=a,Bb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(g.Ab["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
g.Db=function(a){this.C=a||{cookie:""}};
g.Eb=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Ua)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Fb=function(a){var b=g.r("window.location.href");if(g.sa(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.n.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.Gb=function(a){return function(){return a}};
g.Hb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Jb=function(){this.C="";this.F=g.Ib};
g.Kb=function(a){var b=new g.Jb;b.C=a;return b};
g.Mb=function(){this.C="";this.F=Lb};
g.Nb=function(a){if(a instanceof g.Mb&&a.constructor===g.Mb&&a.F===Lb)return a.C;g.xa(a);return"type_error:SafeUrl"};
g.Qb=function(a){if(a instanceof g.Mb)return a;a="object"==typeof a&&a.Xd?a.Vc():String(a);Ob.test(a)||(a="about:invalid#zClosurez");return g.Pb(a)};
g.Rb=function(a){if(a instanceof g.Mb)return a;a="object"==typeof a&&a.Xd?a.Vc():String(a);Ob.test(a)||(a="about:invalid#zClosurez");return g.Pb(a)};
g.Pb=function(a){var b=new g.Mb;b.C=a;return b};
g.Tb=function(){this.C="";this.F=g.Sb};
g.Ub=function(a){var b=new g.Tb;b.C=a;return b};
g.Wb=function(){this.C="";this.F=g.Vb};
g.Xb=function(a){var b=new g.Wb;b.C=a;return b};
g.$b=function(){this.C="";this.D=Zb;this.F=null};
g.ac=function(a){if(a instanceof g.$b&&a.constructor===g.$b&&a.D===Zb)return a.C;g.xa(a);return"type_error:SafeHtml"};
g.cc=function(a){if(a instanceof g.$b)return a;var b="object"==typeof a,c=null;b&&a.Nl&&(c=a.wf());a=g.Ta(b&&a.Xd?a.Vc():String(a));return g.bc(a,c)};
g.bc=function(a,b){var c=new g.$b;c.C=a;c.F=b;return c};
g.dc=function(a,b){var c=b instanceof g.Mb?b:g.Rb(b);a.href=g.Nb(c)};
g.ec=function(a,b){var c=b instanceof g.Mb?b:g.Rb(b);a.href=g.Nb(c)};
g.fc=function(a,b){return g.bc(b,null)};
g.gc=function(a,b){this.x=g.qa(a)?a:0;this.y=g.qa(b)?b:0};
g.hc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.ic=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.jc=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.sa(a)?window.document.getElementById(a):a};
g.kc=function(a){var b=window.document;return g.sa(a)?b.getElementById(a):a};
g.mc=function(a,b){g.ab(b,function(b,d){b&&"object"==typeof b&&b.Xd&&(b=b.Vc());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:lc.hasOwnProperty(d)?a.setAttribute(lc[d],b):g.Oa(d,"aria-")||g.Oa(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.oc=function(a){return g.nc(a||window)};
g.nc=function(a){a=a.document;a=g.pc(a)?a.documentElement:a.body;return new g.jc(a.clientWidth,a.clientHeight)};
g.rc=function(a,b,c){return g.qc(window.document,arguments)};
g.qc=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ta(d.name),'"');if(d.type){c.push(' type="',g.Ta(d.type),'"');var e={};g.lb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.sa(d)?c.className=d:g.ya(d)?c.className=d.join(" "):g.mc(c,d));2<b.length&&g.sc(a,c,b,2);return c};
g.sc=function(a,b,c,d){function e(c){c&&b.appendChild(g.sa(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.za(f)||g.Ba(f)&&0<f.nodeType?e(f):(0,g.y)(paa(f)?g.Ma(f):f,e)}};
g.pc=function(a){return"CSS1Compat"==a.compatMode};
g.tc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.uc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.vc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Ba(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Aa(a))return"function"==typeof a.item}return!1};
g.wc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.xc=function(a){try{return!!a&&null!=a.location.href&&g.tb(a,"foo")}catch(b){return!1}};
g.yc=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.zc=function(a){var b=[];g.yc(a,function(a){b.push(a)});
return b};
Ac=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,void 0)};
g.Bc=function(a,b){var c=!1,d=!1;d=void 0===d?!1:d;c=void 0===c?!1:c;g.n.google_image_requests||(g.n.google_image_requests=[]);var e=g.n.document.createElement("img");if(b||c){var f=function(a){b&&b(a);c&&g.La(g.n.google_image_requests,e);e.removeEventListener&&e.removeEventListener("load",f,void 0);e.removeEventListener&&e.removeEventListener("error",f,void 0)};
Ac(e,"load",f);Ac(e,"error",f)}d&&(e.referrerPolicy="no-referrer");e.src=a;g.n.google_image_requests.push(e)};
g.Cc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Dc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Ec=function(a,b){a.style.height=g.Dc(b,!0)};
g.Fc=function(a,b){a.style.width=g.Dc(b,!0)};
g.Gc=function(a){return!!a.google_async_iframe_id};
g.Kc=function(){if(Hc&&!g.xc(Ic)){var a="."+g.Jc.domain;try{for(;2<a.split(".").length&&!g.xc(Ic);)g.Jc.domain=a=a.substr(a.indexOf(".")+1),Ic=window.parent}catch(b){}g.xc(Ic)||(Ic=window)}return Ic};
Lc=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
g.Mc=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.Nc=function(a){return a.match(qaa)};
g.Oc=function(a){return a?(0,window.decodeURI)(a):a};
g.Pc=function(a){return g.Oc(g.Nc(a)[3]||null)};
g.Qc=function(a){a=g.Nc(a);return g.Mc(null,null,null,null,a[5],a[6],a[7])};
g.Rc=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.Sc=function(a,b,c){if(g.ya(b))for(var d=0;d<b.length;d++)g.Sc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ra(b)))};
g.Tc=function(a){var b=[],c;for(c in a)g.Sc(c,a[c],b);return b.join("&")};
g.Uc=function(a,b){var c=g.Tc(b);return g.Rc(a,c)};
g.Wc=function(a){var b=a||g.n,c=[],d=null;do{var e=b;if(g.xc(e)){var f=e.location.href;d=e.document&&e.document.referrer||null}else f=d,d=null;c.push(new Vc(f||"",e));try{b=e.parent}catch(k){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||g.n;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.Gq=!0);return c};
raa=function(a,b){this.C=a;this.F=b};
Vc=function(a,b,c){this.url=a;this.Ng=b;this.Gq=!!c;this.depth=g.ua(void 0)?void 0:null};
Xc=function(){this.D="&";this.G=g.qa(void 0)?void 0:"trn";this.H=!1;this.F={};this.K=0;this.C=[]};
Yc=function(a,b){var c={};c[a]=b;return[c]};
$c=function(a,b,c,d,e){var f=[];g.yc(a,function(a,l){var k=Zc(a,b,c,d,e);k&&f.push(l+"="+k)});
return f.join(b)};
Zc=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],k=0;k<a.length;k++)f.push(Zc(a[k],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)($c(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
ad=function(a,b,c,d){a.C.push(b);a.F[b]=Yc(c,d)};
saa=function(a){if(!a.G)return 4E3;var b=1,c;for(c in a.F)b=c.length>b?c.length:b;return 4E3-a.G.length-b-a.D.length-1};
g.bd=function(a,b,c,d,e){if(Math.random()<(d||a.C))try{if(c instanceof Xc)var f=c;else f=new Xc,g.yc(c,function(a,b){var c=f,d=c.K++,e=Yc(b,a);c.C.push(d);c.F[d]=e});
var k=f.getUrl(a.G,a.F,a.D+b+"&","");k&&("undefined"===typeof e?g.Bc(k,void 0):g.Bc(k,e))}catch(l){}};
cd=function(){var a=g.n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.A)()};
dd=function(){var a=void 0===a?g.n:a;return(a=a.performance)&&a.now?a.now():null};
taa=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
gd=function(){var a=ed;this.events=[];this.F=a||g.n;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.C=fd()||(null!=b?b:1>Math.random())};
g.id=function(a){a&&hd&&fd()&&(hd.clearMarks("goog_"+a.uniqueId+"_start"),hd.clearMarks("goog_"+a.uniqueId+"_end"))};
ld=function(){var a=jd;this.D=g.kd;this.G=this.F;this.C=void 0===a?null:a};
g.od=function(a){return new md(g.nd(a),a.fileName,a.lineNumber)};
g.nd=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
md=function(a,b,c){Lc.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
pd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
uaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=q=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var q=l^d&(f^l);var w=1518500249}else q=d^f^l,w=1859775393;else 60>c?(q=d&f|l&(d|f),w=2400959708):(q=d^f^l,w=3395469782);q=((a<<5|a>>>27)&4294967295)+q+m+w+b[c]&4294967295;m=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=q}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==q)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[q++]=a[d++],w++,64==q)for(q=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>q?c(l,56-q):c(l,64-(q-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,w;a();return{reset:a,update:c,digest:d,Kw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
vaa=function(a,b,c){var d=[],e=[];if(1==(g.ya(c)?2:1))return e=[b,a],(0,g.y)(d,function(a){e.push(a)}),qd(e.join(" "));
var f=[],k=[];(0,g.y)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ja(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.y)(d,function(a){e.push(a)});
a=qd(e.join(" "));a=[c,a];g.Ja(k)||a.push(k.join(""));return a.join("_")};
qd=function(a){var b=uaa();b.update(a);return b.Kw().toLowerCase()};
rd=function(a){var b=pd(String(g.n.location.href)),c=g.n.__OVERRIDE_SID;null==c&&(c=(new g.Db(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.n.__SAPISID:g.n.__APISID,null==b&&(b=(new g.Db(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.n.location.href);return d&&b&&c?[c,vaa(pd(d),b,a||null)].join(" "):null}return null};
g.sd=function(){this.Dc=this.Dc;this.Yb=this.Yb};
g.vd=function(a,b){g.td(a,g.u(g.ud,b))};
g.td=function(a,b){a.Dc?g.qa(void 0)?b.call(void 0):b():(a.Yb||(a.Yb=[]),a.Yb.push(g.qa(void 0)?(0,g.t)(b,void 0):b))};
g.ud=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.wd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Et=!0};
zd=function(a){return g.xd?"webkit"+a:g.yd?"o"+a.toLowerCase():a.toLowerCase()};
g.Ad=function(a,b){g.wd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.mc=null;a&&this.init(a,b)};
g.Cd=function(a){return!(!a||!a[Bd])};
xaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.sh=e;this.key=++waa;this.Eg=this.ni=!1};
Dd=function(a){a.Eg=!0;a.listener=null;a.C=null;a.src=null;a.sh=null};
g.Ed=function(a){this.src=a;this.listeners={};this.C=0};
Fd=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.La(a.listeners[c],b);d&&(Dd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Gd=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Eg&&f.listener==b&&f.capture==!!c&&f.sh==d)return e}return-1};
g.Jd=function(a,b,c,d,e){if(d&&d.once)return g.Id(a,b,c,d,e);if(g.ya(b)){for(var f=0;f<b.length;f++)g.Jd(a,b[f],c,d,e);return null}c=g.Kd(c);return g.Cd(a)?a.O(b,c,g.Ba(d)?!!d.capture:!!d,e):Ld(a,b,c,!1,d,e)};
Ld=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ba(e)?!!e.capture:!!e,l=g.Md(a);l||(a[Nd]=l=new g.Ed(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=yaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)zaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Od(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Pd++;return c};
yaa=function(){var a=Aaa,b=Qd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Id=function(a,b,c,d,e){if(g.ya(b)){for(var f=0;f<b.length;f++)g.Id(a,b[f],c,d,e);return null}c=g.Kd(c);return g.Cd(a)?a.Re(b,c,g.Ba(d)?!!d.capture:!!d,e):Ld(a,b,c,!0,d,e)};
g.Rd=function(a,b,c,d,e){if(g.ya(b))for(var f=0;f<b.length;f++)g.Rd(a,b[f],c,d,e);else d=g.Ba(d)?!!d.capture:!!d,c=g.Kd(c),g.Cd(a)?a.Va(b,c,d,e):a&&(a=g.Md(a))&&(b=a.sf(b,c,d,e))&&g.Sd(b)};
g.Sd=function(a){if(g.ua(a)||!a||a.Eg)return!1;var b=a.src;if(g.Cd(b))return Fd(b.Ad,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Od(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Pd--;(c=g.Md(b))?(Fd(c,a),0==c.C&&(c.src=null,b[Nd]=null)):Dd(a);return!0};
Od=function(a){return a in Td?Td[a]:Td[a]="on"+a};
Wd=function(a,b,c,d){var e=!0;if(a=g.Md(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Eg&&(f=Ud(f,d),e=e&&!1!==f)}return e};
Ud=function(a,b){var c=a.listener,d=a.sh||a.src;a.ni&&g.Sd(a);return c.call(d,b)};
Aaa=function(a,b){if(a.Eg)return!0;if(!Qd){var c=b||g.r("window.event"),d=new g.Ad(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Wd(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Wd(c[k],f,!1,d),e=e&&l}return e}return Ud(a,new g.Ad(b,
this))};
g.Md=function(a){a=a[Nd];return a instanceof g.Ed?a:null};
g.Kd=function(a){if(g.Aa(a))return a;a[Xd]||(a[Xd]=function(b){return a.handleEvent(b)});
return a[Xd]};
g.Yd=function(){g.sd.call(this);this.Ad=new g.Ed(this);this.Sv=this;this.Cm=null};
Zd=function(a,b,c,d){b=a.Ad.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Eg&&k.capture==c){var l=k.listener,m=k.sh||k.src;k.ni&&Fd(a.Ad,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.Et};
$d=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
ae=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
be=function(a){g.n.setTimeout(function(){throw a;},0)};
Baa=function(){var a=g.n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.$a("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.mb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.qa(c.next)){c=c.next;var a=c.jo;c.jo=null;a()}};
return function(a){d.next={jo:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.n.setTimeout(a,0)}};
ce=function(){this.F=this.C=null};
de=function(){this.next=this.scope=this.lc=null};
he=function(a,b){ee||Caa();fe||(ee(),fe=!0);ge.add(a,b)};
Caa=function(){if(g.n.Promise&&g.n.Promise.resolve){var a=g.n.Promise.resolve(void 0);ee=function(){a.then(je)}}else ee=function(){var a=je;
!g.Aa(g.n.setImmediate)||g.n.Window&&g.n.Window.prototype&&!g.$a("Edge")&&g.n.Window.prototype.setImmediate==g.n.setImmediate?(ke||(ke=Baa()),ke(a)):g.n.setImmediate(a)}};
je=function(){for(var a;a=ge.remove();){try{a.lc.call(a.scope)}catch(b){be(b)}ae(le,a)}fe=!1};
g.me=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.ne=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.pe=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.K=!1;if(a!=g.va)try{var c=this;a.call(b,function(a){g.oe(c,2,a)},function(a){g.oe(c,3,a)})}catch(d){g.oe(this,3,d)}};
qe=function(){this.next=this.context=this.onRejected=this.D=this.C=null;this.F=!1};
g.se=function(a,b,c){var d=re.get();d.D=a;d.onRejected=b;d.context=c;return d};
g.ue=function(a,b,c){te(a,b,c,null)||he(g.u(b,a))};
g.ve=function(a){return new g.pe(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],g.ue(m,g.u(f,l),k);
else b(e)})};
g.xe=function(a,b){return we(a,null,b,void 0)};
ye=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.F||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?ye(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):ze(c),Ae(c,e,3,b)))}a.D=null}else g.oe(a,3,b)};
g.Ce=function(a,b){a.F||2!=a.C&&3!=a.C||Be(a);a.G?a.G.next=b:a.F=b;a.G=b};
we=function(a,b,c,d){var e=g.se(null,null,null);e.C=new g.pe(function(a,k){e.D=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){k(q)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!g.qa(e)&&b instanceof g.De?k(b):a(e)}catch(q){k(q)}}:k});
e.C.D=a;g.Ce(a,e);return e.C};
g.oe=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,te(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,Be(a),3!=b||c instanceof g.De||Daa(a,c)))};
te=function(a,b,c,d){if(a instanceof g.pe)return g.Ce(a,g.se(b||g.va,c||null,d)),!0;if(g.ne(a))return a.then(b,c,d),!0;if(g.Ba(a))try{var e=a.then;if(g.Aa(e))return Eaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Eaa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Be=function(a){a.K||(a.K=!0,he(a.J,a))};
ze=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Ae=function(a,b,c,d){if(3==c&&b.onRejected&&!b.F)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Ee(b,c,d);else try{b.F?b.D.call(b.context):Ee(b,c,d)}catch(e){Fe.call(null,e)}ae(re,b)};
Ee=function(a,b,c){2==b?a.D.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Daa=function(a,b){a.H=!0;he(function(){a.H&&Fe.call(null,b)})};
g.De=function(a){g.Ea.call(this,a)};
g.Ge=function(a,b,c){if(g.Aa(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.n.setTimeout(a,b||0)};
g.He=function(a){g.n.clearTimeout(a)};
g.Ie=function(a,b,c){g.sd.call(this);this.C=a;this.D=b||0;this.F=c;this.hc=(0,g.t)(this.wp,this)};
Faa=function(){this.F=-1};
Je=function(){this.F=64;this.C=[];this.K=[];this.R=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
Ke=function(a,b,c){c||(c=0);var d=a.R;if(g.sa(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):(f=c^k^l,
q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.Le=function(a){if(a.classList)return a.classList;a=a.className;return g.sa(a)&&a.match(/\S+/g)||[]};
g.B=function(a,b){return a.classList?a.classList.contains(b):g.Ia(g.Le(a),b)};
g.Me=function(){};
Oe=function(a){if(a instanceof g.Me)return a;if("function"==typeof a.fd)return a.fd(!1);if(g.za(a)){var b=0,c=new g.Me;c.next=function(){for(;;){if(b>=a.length)throw g.Ne;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Pe=function(a,b,c){if(g.za(a))try{(0,g.y)(a,b,c)}catch(d){if(d!==g.Ne)throw d;}else{a=Oe(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Ne)throw d;}}};
Gaa=function(a){if(g.za(a))return g.Ma(a);a=Oe(a);var b=[];g.Pe(a,function(a){b.push(a)});
return b};
g.Re=function(a,b){this.F={};this.C=[];this.Xe=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.Qe(this,a)};
Haa=function(a,b){return a===b};
g.Te=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.Se(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.Se(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.Qe=function(a,b){if(b instanceof g.Re)for(var c=b.Jc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.Se=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.We=function(a){var b=[];Ve(new Iaa,a,b);return b.join("")};
Iaa=function(){};
Ve=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ve(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Xe(d,c),c.push(":"),Ve(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Xe(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Xe=function(a,b){b.push('"',a.replace(Jaa,function(a){var b=Ye[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ye[a]=b);return b}),'"')};
g.Ze=function(a){g.sd.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.K=!!a};
g.$e=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ga(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.vd(b)}};
Kaa=function(a,b,c){he(function(){a.apply(b,c)})};
g.af=function(a){this.C=a};
bf=function(a){this.C=a};
cf=function(a){this.data=a};
df=function(a){return!g.qa(a)||a instanceof cf?a:new cf(a)};
g.ef=function(a){this.C=a};
g.ff=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.A)()||!!b&&b>(0,g.A)()};
Laa=function(){};
gf=function(){};
g.hf=function(a){this.C=a};
g.jf=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
lf=function(a,b){this.F=a;this.C=null;if(g.C&&!g.yb(9)){kf||(kf=new g.Re);this.C=kf.get(a);this.C||(b?this.C=window.document.getElementById(b):(this.C=window.document.createElement("userdata"),this.C.addBehavior("#default#userData"),window.document.body.appendChild(this.C)),kf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
mf=function(a){return"_"+(0,window.encodeURIComponent)(a).replace(/[.!~*'()%]/g,function(a){return Maa[a]})};
nf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
of=function(a){return a.C.XMLDocument.documentElement};
pf=function(a,b){this.F=a;this.C=b+"::"};
g.qf=function(a){var b=new g.jf;return b.isAvailable()?a?new pf(b,a):b:null};
rf=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.tf=function(a){rf(g.sf,arguments)};
uf=function(a,b){var c=g.D(a,void 0);c?c.push(b):g.tf(a,[b])};
g.D=function(a,b){return a in g.sf?g.sf[a]:b};
wf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.vf(b)}}:a};
g.vf=function(a,b,c,d,e){var f=g.r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.D("ERRORS",[]),f.push([a,b,c,d,e]),g.tf("ERRORS",f))};
g.xf=function(a){g.vf(a,"WARNING",void 0,void 0,void 0)};
Naa=function(a,b,c,d,e){var f=!1,k;if((k=(k=g.sf.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.sa(a)?f=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.vf(e))};
g.E=function(a,b){return a?a.dataset?a.dataset[g.yf(b)]:a.getAttribute("data-"+b):null};
g.yf=function(a){return zf[a]||(zf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Af=function(a,b){g.Aa(a)&&(a=wf(a));return window.setTimeout(a,b)};
g.Bf=function(a,b){g.Aa(a)&&(a=wf(a));return window.setInterval(a,b)};
g.Cf=function(a){window.clearTimeout(a)};
g.Df=function(a){window.clearInterval(a)};
g.If=function(a,b,c){var d=Ef();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Ff[e]&&b.apply(c||window,d)};
try{Gf[a]?k():g.Af(k,0)}catch(l){g.vf(l)}},c);
Ff[e]=!0;Hf[a]||(Hf[a]=[]);Hf[a].push(e);return e}return 0};
g.Jf=function(a){var b=Ef();b&&(g.ua(a)?a=[a]:g.sa(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.y)(a,function(a){b.unsubscribeByKey(a);delete Ff[a]}))};
g.F=function(a,b){var c=Ef();return c?c.publish.apply(c,arguments):!1};
g.Kf=function(a,b){Gf[a]=!0;var c=Ef();c=c?c.publish.apply(c,arguments):!1;Gf[a]=!1;return c};
Ef=function(){return g.r("ytPubsubPubsubInstance")};
g.Mf=function(a,b){var c=g.Lf(a);window.spf.script.load(a,c,b)};
g.Nf=function(a){a=g.Lf(a);window.spf.script.unload(a)};
g.Lf=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Oaa,""),b=b.replace(Paa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.Of=function(){this.F=!1;this.C=null};
Pf=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.xf(d)}c&&c(b)};
Qaa=function(){};
g.Rf=function(a,b){return Qf(a,0,b)};
g.Sf=function(a,b){return Qf(a,1,b)};
g.Uf=function(a){for(var b=0,c=a.length;b<c;b++)g.Tf(a[b])};
Vf=function(){};
g.Wf=function(){return!!g.r("yt.scheduler.instance")};
Qf=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Af(a,c||0)};
g.Tf=function(a){if(!(0,window.isNaN)(a)){var b=g.r("yt.scheduler.instance.cancelJob");b?b(a):g.Cf(a)}};
g.Xf=function(){return(0,window.parseInt)(g.D("DCLKSTAT",0),10)};
g.Zf=function(a){return!!Yf(a)};
g.$f=function(a){return Number(Yf(a)||0)};
Yf=function(a){return g.D("EXPERIMENT_FLAGS",{})[a]};
g.bg=function(){return g.ag.Pe()};
g.cg=function(){return g.ag.invoke()};
Raa=function(){if(!dg)return null;var a=dg();return"open"in a?a:null};
g.fg=function(a){switch(g.eg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.eg=function(a){return a&&"status"in a?a.status:-1};
g.gg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Sa(e[0]||"");e=g.Sa(e[1]||"");f in b?g.ya(b[f])?g.Na(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.ig=function(a,b){return g.hg(a,b||{},!0)};
g.hg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.gg(e[1]||"");for(var f in b)if(c||!g.cb(e,f))e[f]=b[f];return g.Uc(a,e)+d};
Saa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.Nc(a)[1]||null,e=g.Pc(a);d&&e?(d=c,c=g.Nc(a),d=g.Nc(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.Pc(c)==e&&(Number(g.Nc(c)[4]||null)||null)==(Number(g.Nc(a)[4]||null)||null):!0;for(var f in jg)(d=g.D(jg[f]))&&(c||kg(a,f))&&(b[f]=d);if(c||kg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b};
kg=function(a,b){var c=g.D("CORS_HEADER_WHITELIST")||{},d=g.Pc(a);return d?(c=c[d])?g.Ia(c,b):!1:!0};
Taa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=lg(a,b);var d=mg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.Cf(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.n;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Ya&&b.Ya.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Or&&0<b.timeout&&(f=g.Af(function(){e||(e=!0,g.Cf(f),b.Or.call(b.context||g.n))},b.timeout))}else g.G(a,b)};
g.G=function(a,b){var c=b.format||"JSON";a=lg(a,b);var d=mg(a,b),e=!1,f,k=ng(a,function(a){if(!e){e=!0;f&&g.Cf(f);var d=g.fg(a),k=null;if(d||400<=a.status&&500>a.status)k=Uaa(c,a,b.nb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.n;d?b.onSuccess&&b.onSuccess.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Ya&&b.Ya.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Oc&&0<b.timeout&&(f=g.Af(function(){e||(e=!0,k.abort(),g.Cf(f),b.Oc.call(b.context||g.n,k))},b.timeout));
return k};
lg=function(a,b){b.zB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.D("XSRF_FIELD_NAME",void 0),d=b.Fa;d&&(d[c]&&delete d[c],a=g.ig(a,d));return a};
mg=function(a,b){var c=g.D("XSRF_FIELD_NAME",void 0),d=g.D("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ha,k=g.D("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.ax||g.Pc(a)&&!b.withCredentials&&g.Pc(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ha&&b.ha[k]||(f||(f={}),f[c]=d);f&&g.sa(e)&&(e=g.gg(e),g.lb(e,f),e=b.Qs&&"JSON"==b.Qs?JSON.stringify(e):g.Tc(e));f=e||f&&!g.eb(f);!og&&f&&"POST"!=b.method&&(og=!0,g.vf(Error("AJAX request with postData should use POST")));
return e};
Uaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?pg(b):null)d={},(0,g.y)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.qg(a)})}c&&rg(d);
return d};
rg=function(a){if(g.Ba(a))for(var b in a)"html_content"==b||g.Pa(b,"_html")?a[b]=g.fc(g.Kb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):rg(a[b])};
pg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.qg=function(a){var b="";(0,g.y)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.sg=function(a,b){b.method="POST";b.ha||(b.ha={});return g.G(a,b)};
ng=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&wf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Raa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof window.FormData));if(e=Saa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
tg=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.ug=function(a){var b=new tg;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.vg=function(a){var b=new tg;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.xg=function(a){var b=a.__yt_uid_key;b||(b=wg(),a.__yt_uid_key=b);return b};
g.yg=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Vaa+"VisibilityState";if(b in a)return a[b]};
g.zg=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Waa||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
Ag=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Bg=function(a){g.qa(a.C)||Ag(a);return a.C};
g.Cg=function(a){g.qa(a.F)||Ag(a);return a.F};
g.Eg=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.db(Dg,function(e){var f=g.ta(e[4])&&e[4]==!!d,k=g.Ba(e[4])&&g.Ba(d)&&g.hb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.H=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Eg(a,b,c,d);if(e)return e;e=++Fg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.zg(d);if(!g.wc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.zg(b);
b.currentTarget=a;return c.call(a,b)};
k=wf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),Gg()||g.ta(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);Dg[e]=[a,b,c,k,d];return e};
g.Hg=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.y)(a,function(a){if(a in Dg){var b=Dg[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Gg()||g.ta(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Dg[a]}}))};
g.Ig=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.H(a,b,function(){g.Hg(e);c.apply(a,arguments)},d)};
g.Jg=function(a){for(var b in Dg)Dg[b][0]==a&&g.Hg(b)};
g.Kg=function(a){this.hc=a;this.C=null;this.D=0;this.K=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.H(window,"mousemove",(0,g.t)(this.W,this));this.N=g.Bf((0,g.t)(this.R,this),25)};
Lg=function(){g.sd.call(this);this.C=[]};
Mg=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.ib(Xaa);this.assets=a.assets||{};this.attrs=a.attrs||g.ib(Yaa);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Ng=function(a){a instanceof Mg||(a=new Mg(a));return a};
g.Qg=function(a,b,c,d,e,f){f=f||{};f.name=c||g.D("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Og||(c=a.stacktrace,d=a.columnNumber,a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params).substr(0,500)),a=g.Fb(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),Pg[a.message]||
0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={Fa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":f.name},ha:{url:g.D("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ha.stack=c);for(var k in f)b.ha["client."+k]=f[k];if(k=g.D("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ha[l]=k[l];g.G(g.D("ECATCHER_REPORT_HOST","")+"/error_204",b);Pg[a.message]=
!0;Og++}};
g.Wg=function(a,b){if(a.wi){var c=a.wi;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Rg[a.wi.token]=d;c=Sg(a.endpoint,a.wi.token)}else c=Sg(a.endpoint);c.push(a.payload);Tg[a.endpoint]=new b;c.length>=(g.$f("web_logging_max_batch")||20)?g.Ug():g.Vg()};
g.Ug=function(){g.Cf(g.Xg);if(!g.eb(g.Yg)){for(var a in g.Yg){var b=Tg[a];b&&(Zaa(a,b),delete g.Yg[a])}g.eb(g.Yg)||g.Vg()}};
$aa=function(){var a=[];for(e in g.Yg){var b=Zg[e]||{};Zg[e]=b;for(var c in g.Yg[e]){var d=Sg(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.$g());for(var f in Zg)b=Zg[f],b.eventType=f in ah?ah[f]:"UNKNOWN_TYPE",c=bh[f],b.metricIntervalMs=c?e-c:e-g.ch,a.push(b),bh[f]=e,delete Zg[f];return a};
g.Vg=function(){g.Cf(g.Xg);g.Xg=g.Af(g.Ug,g.D("LOGGING_BATCH_TIMEOUT",g.dh||1E4))};
Sg=function(a,b){b=void 0===b?"":b;g.Yg[a]=g.Yg[a]||{};g.Yg[a][b]=g.Yg[a][b]||[];return g.Yg[a][b]};
Zaa=function(a,b){var c=aba[a],d=Zg[a]||{};Zg[a]=d;var e=Math.round(g.$g());for(q in g.Yg[a]){var f={context:g.eh(b.C)};f[c]=Sg(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;var k=Rg[q];if(k)a:{var l=q;if(k.videoId)var m="VIDEO";else if(k.playlistId)m="PLAYLIST";else break a;f.credentialTransferTokenTargetId=k;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Rg[q];f.requestTimeMs=
e;if(k=g.D("EVENT_ID",void 0))m=(g.D("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>bba&&(m=1),g.tf("BATCH_CLIENT_COUNTER",m),k={serializedEventId:k,clientCounter:m},f.serializedClientEventId=k,fh&&gh&&g.Zf("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:fh,roundtripMs:gh}),fh=k,gh=0;g.hh(b,a,f,{retry:cba.has(a),onSuccess:dba.bind(this,g.$g())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*q+c)/
(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e};
dba=function(a){gh=Math.round(g.$g()-a)};
g.kh=function(a){var b=void 0===a?{}:a;a=void 0===b.AB?!0:b.AB;b=void 0===b.lJ?!1:b.lJ;if(null==g.r("_lact",window)){var c=(0,window.parseInt)(g.D("LACT"),10);c=(0,window.isFinite)(c)?(0,g.A)()-Math.max(c,0):-1;g.p("_lact",c,window);g.p("_fact",c,window);-1==c&&g.ih();g.H(window.document,"keydown",g.ih);g.H(window.document,"keyup",g.ih);g.H(window.document,"mousedown",g.ih);g.H(window.document,"mouseup",g.ih);a&&(b?g.H(window,"touchmove",function(){jh("touchmove",200)},{passive:!0}):(g.H(window,"resize",
function(){jh("resize",200)}),g.H(window,"scroll",function(){jh("scroll",200)})));
new g.Kg(function(){jh("mouse",100)});
g.H(window.document,"touchstart",g.ih,{passive:!0});g.H(window.document,"touchend",g.ih,{passive:!0})}};
jh=function(a,b){lh[a]||(lh[a]=!0,g.Sf(function(){g.ih();lh[a]=!1},b))};
g.ih=function(){null==g.r("_lact",window)&&g.kh();var a=(0,g.A)();g.p("_lact",a,window);-1==g.r("_fact",window)&&g.p("_fact",a,window);(a=g.r("ytglobal.ytUtilActivityCallback_"))&&a()};
g.mh=function(){var a=g.r("_lact",window);return null==a?-1:Math.max((0,g.A)()-a,0)};
g.oh=function(a,b,c,d){var e=g.nh,f={};f.eventTimeMs=Math.round(c||g.$g());f[a]=b;f.context={lastActivityMs:String(c?-1:g.mh())};g.Wg({endpoint:"log_event",payload:f,wi:d},e)};
g.eh=function(a){a={client:{hl:a.EB,gl:a.DB,clientName:a.CB,clientVersion:a.innertubeContextClientVersion}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.D("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.D("DELEGATED_SESSION_ID")});return a};
ph=function(a,b){var c={"X-Goog-Visitor-Id":g.D("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return c;var d;a?d="Bearer "+g.r("gapi.auth.getToken")().yZ:d=rd([]);d&&(c.Authorization=d,c["X-Goog-AuthUser"]=g.D("SESSION_INDEX",0));return c};
qh=function(a){a=Object.assign({},a);delete a.Authorization;var b=rd();if(b){var c=new Je;c.update(g.D("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();g.za(b);g.Cb();c=Bb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],k=e+1<b.length,l=k?b[e+1]:0,m=e+2<b.length,q=m?b[e+2]:0,w=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[w],c[f],c[l],c[q])}b=d.join("");a.hash=b}return a};
g.sh=function(a,b,c,d){g.rh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.th=function(a,b,c){g.rh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.uh=function(a){var b;(b=g.qf(a))||(a=new lf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.ef(a):null;this.F=window.document.domain||window.location.hostname};
eba=function(a,b,c,d){if(d)return null;d=vh.get("nextId",!0)||1;var e=vh.get("requests",!0)||{};e[d]={method:a,request:b,authState:qh(c),requestTime:Math.round(g.$g())};vh.set("nextId",d+1,86400,!0);vh.set("requests",e,86400,!0);return d};
wh=function(a){var b=vh.get("requests",!0)||{};delete b[a];vh.set("requests",b,86400,!0)};
zh=function(a){var b=vh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.$g())-d.requestTime)){var e=d.authState,f=qh(ph(!1));g.hb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.$g())),g.hh(a,d.method,e,{}));delete b[c]}}vh.set("requests",b,86400,!0)}};
g.nh=function(a){var b=this;this.C=a||{innertubeApiKey:g.D("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.D("INNERTUBE_API_VERSION",void 0),CB:g.D("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),EB:g.D("INNERTUBE_CONTEXT_HL",void 0),DB:g.D("INNERTUBE_CONTEXT_GL",void 0),FB:g.D("INNERTUBE_HOST_OVERRIDE",void 0)||"",GB:!!g.D("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.Rf(function(){zh(b)},5E3)};
g.hh=function(a,b,c,d){!g.D("VISITOR_DATA")&&.01>Math.random()&&g.vf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ha:c,Qs:"JSON",Oc:function(){d.Oc()},
Or:d.Oc,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
Aj:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Nr:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.FB;k&&(f=k);k=a.C.GB||!1;var l=ph(k,f);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=""+f+("/youtubei/"+a.C.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.C.innertubeApiKey,q;if(d.retry&&g.Zf("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(q=eba(b,c,l,k))){var w=e.onSuccess,z=e.Aj;e.onSuccess=function(a,b){wh(q);w(a,b)};
c.Aj=function(a,b){wh(q);z(a,b)}}try{g.Zf("use_fetch_for_op_xhr")?Taa(m,e):g.sg(m,e)}catch(I){if("InvalidAccessError"==I)q&&(wh(q),q=0),g.vf(Error("An extension is blocking network request."),"WARNING");
else throw I;}q&&g.Rf(function(){zh(a)},5E3)};
g.Ah=function(a,b,c){g.oh(a,b,c,void 0)};
g.Bh=function(){g.Zf("log_web_meta")&&$aa().forEach(function(a){g.Ah("delayedEventMetricCaptured",a)})};
g.Ch=function(a){this.C=a};
g.Dh=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.Dh(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.Eh=function(a,b,c){(0,g.y)(b,function(b){g.oh("visualElementHidden",{csn:a,ve:g.Dh(b),eventType:c?16:8})})};
Gh=function(a,b){var c=Object.keys(a).join("");Fh("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Ah("latencyActionInfo",a))};
Fh=function(a){Hh[a]=Hh[a]||{count:0};var b=Hh[a];b.count++;b.time=g.$g();Ih||(Ih=g.Rf(fba,5E3));return 10<b.count?(11==b.count&&g.Qg(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
fba=function(){var a=g.$g(),b;for(b in Hh)6E4<a-Hh[b].time&&delete Hh[b];Ih=0};
Kh=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.A)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Jh)for(a=1,b=0;b<Jh.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Jh.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Ph=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Lh==a)return;Lh=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.mh()>b)&&"visible"==g.yg()){b=-1;g.Mh&&(b=Math.round(g.$g()-g.Mh));var c=String;var d=g.r("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.A)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.Nh,index:String(Oh),lastEventDeltaMs:String(b),trigger:a};g.oh("foregroundHeartbeat",
a);g.p("_fact",-1,window);Oh++;g.Mh=g.$g()}};
g.Qh=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
g.Rh=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
Sh=function(a){return g.D(g.Rh(void 0===a?0:a),void 0)};
g.Th=function(){var a=Sh(0),b;a?b=new g.Ch({veType:a,youtubeData:void 0}):b=null;return b};
g.Uh=function(a){a=void 0===a?0:a;var b=g.D(g.Qh(a));b||0!=a||(b=g.D("EVENT_ID"));return b?b:null};
Vh=function(){var a=g.Th(),b=g.Uh();b&&a&&g.Eh(b,[a],!0)};
g.Wh=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.K=d?wf(d):null;this.H=e?wf(e):null;this.G=[];this.C=this.F=0};
g.Xh=function(a){g.Tf(a.F);a.F=g.Sf((0,g.t)(a.init,a))};
g.$h=function(a){a.name in Yh&&Zh(a.name);Yh[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.y)(a.deps,function(b){if(!(b in Yh))throw Error("Module "+b+" required by "+a.name);Yh[b].reqs.push(a.name)});
a.enable()};
Zh=function(a){if(a in Yh){var b=Yh[a];(0,g.y)(b.reqs,function(a){Zh(a)});
try{b.disable()}catch(c){}delete Yh[a]}};
bi=function(a){rf(g.ai,arguments)};
g.ci=function(a){return a in g.ai};
di=function(a){rf(g.ai,arguments)};
g.ei=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Za,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Nb(g.Qb(a)),"about:invalid#zClosurez"===a?a="":(a=g.ac(g.cc(a)),a=g.Ra(g.We(a))),g.Qa(a)||(a=g.rc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.vc(a).body.appendChild(a))):e?ng(a,b,"POST",e,d):g.D("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?ng(a,b,"GET","",d):gba(a,b))};
gba=function(a,b){var c=new window.Image,d=""+hba++;fi[d]=c;c.onload=c.onerror=function(){b&&fi[d]&&b();delete fi[d]};
c.src=a};
g.gi=function(a,b){a=a||"";var c=a.match(iba);window.spf.style.load(a,c?c[1]:"",b)};
g.hi=function(a,b,c){var d=g.D("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Pc(window.location.href);e&&d.push(e);e=g.Pc(a);if(g.Ia(d,e)||!e&&g.Oa(a,"/"))if(g.Zf("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.dc(d,a),a=d.href),a&&(a=g.Qc(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Uh();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Ya(a).toString(36),b=b?g.Tc(b):"",g.sh(a,b,c||5))):(c="ST-"+g.Ya(a).toString(36),b=b?g.Tc(b):"",
g.sh(c,b,5))}};
g.ii=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.ec(d.location,g.Uc(a,b)+c)};
g.ji=function(a,b){b&&g.hi(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.ii(a)};
g.ki=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.D("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.hi(a,b);if(c)return!1;g.ji(a);return!0};
g.li=function(a,b){this.version=a;this.args=b};
g.mi=function(a,b){this.topic=a;this.C=b};
g.oi=function(a,b){var c=g.ni();c&&c.publish.call(c,a.toString(),a,b)};
g.ni=function(){return g.r("ytPubsub2Pubsub2Instance")};
jba=function(a){if(pi.getEntriesByType){var b=pi.getEntriesByType("paint");if(b=g.Ga(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Aa(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
qi=function(){var a=g.D("TIMING_TICK_EXPIRATION");a||(a={},g.tf("TIMING_TICK_EXPIRATION",a));return a};
ri=function(){var a=qi(),b;for(b in a)g.Tf(a[b]);g.tf("TIMING_TICK_EXPIRATION",{})};
si=function(a,b){g.li.call(this,1,arguments)};
ti=function(a,b){g.li.call(this,1,arguments)};
oba=function(){ui=!1;var a=g.D("TIMING_INFO",{});for(b in a)vi(b,a[b]);vi("is_nav",1);(a=g.Uh())&&vi("csn",a);(a=g.D("PREVIOUS_ACTION",void 0))&&vi("pa",a);var b=wi();b.p=g.D("CLIENT_PROTOCOL")||"unknown";b.t=g.D("CLIENT_TRANSPORT")||"unknown";vi("yt_vis",kba());if("cold"==b.yt_lt){a=pi.timing||{};a.navigationStart&&(xi("srt",a.responseStart),1!=b.prerender&&yi("n",a.navigationStart));b=jba(a);0<b&&xi("fpt",b);zi(a);pi.getEntriesByType&&lba();a=[];if(window.document.querySelector&&pi&&pi.getEntriesByName)for(var c in Ai)b=
Ai[c],mba(c,b)&&a.push(b);a.length&&vi("rc",a.join(","))}Bi(void 0)&&(c={},c.actionType=nba[g.D("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Ci(void 0),Gh(c,a));if("cold"==wi().yt_lt){a=Di();c=Ei();for(var d in a)g.Oa(d,"_")||"tick_"+d in c||Fi(d,a[d]);d=wi();for(var e in d)"info_"+e in c||Gi(e,d[e])}Hi(!0);g.Ii(!1)};
Li=function(a){Ji(a);pba();Ki(!1,a);a||(g.D("TIMING_ACTION")&&g.tf("PREVIOUS_ACTION",g.D("TIMING_ACTION")),g.tf("TIMING_ACTION",""))};
xi=function(a,b,c){b||"_"==a[0]||Mi(a,c);var d=Di(c),e=b||g.$g();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=qi();var f=e[a];f&&(g.Tf(f),e[a]=0);Fi(a,b,c)||g.Ii(!1,c);return d[a]};
Mi=function(a,b){pi.mark&&(g.Oa(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),pi.mark(a))};
yi=function(a,b){vi("yt_sts",a,void 0);xi("_start",b,void 0)};
vi=function(a,b,c){wi(c)[a]=b;Gi(a,b,c)};
Ni=function(a){var b=Di(a);if(b.aft)return b.aft;a=g.D((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
zi=function(a,b){xi("nreqs",a.requestStart,b);xi("nress",a.responseStart,b);xi("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(xi("nrs",a.redirectStart,b),xi("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(xi("ndnss",a.domainLookupStart,b),xi("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(xi("ntcps",a.connectStart,b),xi("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(xi("nstcps",a.secureConnectionStart,
b),xi("ntcpe",a.connectEnd,b))};
g.Ii=function(a,b){if(!Oi(b)){var c=g.D((b||"")+"TIMING_ACTION",void 0),d=Di(b);if(g.r("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Ni(b)))if(Si||(g.oi(qba,new si(Math.round(c-d._start),b)),Si=!0),a||b)Ti(b);else{c=!0;var e=g.D("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Ti(b)}}};
kba=function(){switch(g.yg()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Ui=function(a){if(!Oi(void 0)){var b=g.D("CSI_SERVICE_NAME","youtube");g.D("TIMING_ACTION",void 0)&&b&&(xi("aa",void 0,void 0),vi("ap",1,void 0),vi("yt_fss",a,void 0),Ti(void 0))}};
Fi=function(a,b,c){Ei(c)["tick_"+a]=b;c||b||g.$g();return Bi(c)?(c=Ci(c),"_start"==a?Fh("baseline_"+c)||g.Ah("latencyActionBaselined",{clientActionNonce:c},b):Fh("tick_"+a+"_"+c)||g.Ah("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Gi=function(a,b,c){Ei(c)["info_"+a]=b;if(Bi(c))if(a in Vi){var d=Vi[a];g.Ia(rba,d)&&(b=!!b);a=b;if(Bi(c)){b={};d=d.split(".");for(var e=b,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=a;c=Ci(c);Gh(b,c)}}else g.Ia(sba,a)||g.vf(Error("Unknown label "+a+" logged with GEL CSI."))};
Wi=function(a){return Math.round(pi.timing.navigationStart+a)};
lba=function(){var a=window.location.protocol,b=pi.getEntriesByType("resource");b=(0,g.Xi)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20180801001737/https://fonts.gstatic.com/s/")});
(b=(0,g.Yi)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(xi("wffs",Wi(b.startTime)),xi("wffe",Wi(b.responseEnd)))};
mba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=pi.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,xi("rsf_"+b,d+Math.round(c.fetchStart)),xi("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&("rc"in wi(void 0)||vi("rc",""),0===c.transferSize))?!0:!1:!1};
Hi=function(a){g.p("ytglobal.timingready_",a,void 0)};
Ci=function(a){var b=Zi(a).nonce;b||(b=Kh(),Zi(a).nonce=b);return b};
Di=function(a){return Zi(a).tick};
wi=function(a){return Zi(a).info};
Ei=function(a){a=Zi(a);"gel"in a||(a.gel={});return a.gel};
Zi=function(a){return g.r("ytcsi."+(a||"")+"data_")||Ji(a)};
Ji=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
Oi=function(a){return!!g.r("yt.timing."+(a||"")+"pingSent_")};
Ki=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
tba=function(a){var b=Di(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==wi(a).yt_pvis};
Bi=function(a){return ui||g.Zf("csi_on_gel")||!!Zi(a).useGel};
Ti=function(a){ri();if(!Bi(a)){var b=Di(a),c=wi(a),d=b._start;for(k in b)if(g.Oa(k,"_")&&g.ya(b[k])){var e=k.slice(1);if(e in uba){var f=(0,g.$i)(b[k],function(a){return Math.round(a-d)});
c["all_"+e]=f.join()}delete b[k]}var k=!!c.ap;if(e=g.r("ytglobal.timingReportbuilder_")){if(b=e(b,c,a))aj(b,k),Li(a)}else{var l=g.D("CSI_SERVICE_NAME","youtube");e={v:2,s:l,action:g.D((a||"")+"TIMING_ACTION",void 0)};f=vi.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var m=window.location.protocol+g.r("ytplayer.config.assets.js");(m=pi.getEntriesByName?pi.getEntriesByName(m)[0]:null)?c.h5jse=Math.round(c.h5jse-m.responseEnd):delete c.h5jse}b.aft=Ni(a);tba(a)&&"youtube"==l&&(vi("yt_lt","hot_bg",a),
l=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-l));for(var q in c)"_"!=q.charAt(0)&&(e[q]=c[q]);b.ps=g.$g();c={};q=[];for(var w in b)"_"!=w.charAt(0)&&(l=Math.round(b[w]-d),c[w]=l,q.push(w+"."+l));e.rt=q.join(",");(b=g.r("ytdebug.logTiming"))&&b(e,c);aj(e,k,a);g.oi(vba,new ti(c.aft+(f||0),a))}}};
aj=function(a,b,c){if(g.Zf("debug_csi_data")){var d=g.r("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||g.ei(a,void 0,void 0,void 0,f)}catch(k){g.ei(a,void 0,void 0,void 0,f)}}else g.ei(a);Ki(!0,c)};
cj=function(a,b){g.sd.call(this);this.H=this.na=a;this.N=b;this.K=!1;this.api={};this.aa=this.W=null;this.J=new g.Ze;g.vd(this,this.J);this.D={};this.la=this.ia=this.F=this.kb=this.C=null;this.V=!1;this.G=this.R=null;this.Ra={};this.sb=["onReady"];this.ab=null;this.pb=window.NaN;this.Y={};bj(this);this.Yh("WATCH_LATER_VIDEO_ADDED",this.FG.bind(this));this.Yh("WATCH_LATER_VIDEO_REMOVED",this.GG.bind(this));this.Yh("onAdAnnounce",this.Rv.bind(this));this.xb=new Lg(this);g.vd(this,this.xb)};
dj=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
fj=function(a){var b=!0,c=ej(a);c&&a.C&&(a=a.C,b=g.E(c,"version")==a.assets.js);return b&&!!g.r("yt.player.Application.create")};
wba=function(a){if(!a.ob()&&!a.V){var b=fj(a);if(b&&"html5"==(ej(a)?"html5":null))a.la="html5",a.K||gj(a);else if(hj(a),a.la="html5",b&&a.G)a.na.appendChild(a.G),gj(a);else{a.C.loaded=!0;var c=!1;a.R=function(){c=!0;var b=a.C.clone();g.r("yt.player.Application.create")(a.na,b);gj(a)};
a.V=!0;b?a.R():(g.Mf(a.C.assets.js,a.R),g.gi(a.C.assets.css),ij(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
ej=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
gj=function(a){if(!a.ob()){var b=ej(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||xba(a)):a.pb=g.Af(function(){gj(a)},50)}};
xba=function(a){bj(a);a.K=!0;var b=ej(a);b.addEventListener&&(a.W=jj(a,b,"addEventListener"));b.removeEventListener&&(a.aa=jj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=jj(a,b,e))}for(var f in a.D)a.W(f,a.D[f]);dj(a);a.ia&&a.ia(a.api);a.J.oa("onReady",a.api)};
jj=function(a,b,c){var d=b[c];return function(){try{return a.ab=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ab=e,g.xf(e))}}};
bj=function(a){a.K=!1;if(a.aa)for(var b in a.D)a.aa(b,a.D[b]);for(var c in a.Y)g.Cf((0,window.parseInt)(c,10));a.Y={};a.W=null;a.aa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Yh.bind(a);a.api.removeEventListener=a.bL.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Rx.bind(a);a.api.getPlayerType=a.jy.bind(a);a.api.getCurrentVideoConfig=a.ux.bind(a);a.api.loadNewVideoConfig=a.jm.bind(a);a.api.isReady=a.zC.bind(a)};
kj=function(a,b){var c=b;if("string"==typeof b){if(a.Ra[b])return a.Ra[b];c=function(){var a=g.r(b);a&&a.apply(g.n,arguments)};
a.Ra[b]=c}return c?c:null};
yba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.n[c]=function(c){var d=g.Af(function(){a.ob()||(a.J.oa(b,c),g.fb(a.Y,String(d)))},0);
g.gb(a.Y,String(d),!0)};
return c};
hj=function(a){(0,g.lj)("dcp");a.cancel();bj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=ej(a);b&&(fj(a)||!ij(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.tc(a.na)};
ij=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.oj=function(a,b){a=g.sa(a)?g.kc(a):a;var c=g.mj+"_"+g.Da(a),d=g.nj[c];if(d)return d.jm(b),d.api;d=new cj(a,c);g.nj[c]=d;g.F("player-added",d.api);g.td(d,g.u(zba,d));g.Af(function(){d.jm(b)},0);
return d.api};
zba=function(a){delete g.nj[a.N]};
g.pj=function(a){if(!a)return null;var b=g.mj+"_"+g.Da(a),c=g.nj[b];c||(c=new cj(a,b),g.nj[b]=c);return c.api};
g.qj=function(a){return g.pj(window.document.getElementById(a))};
g.sj=function(a,b){var c={};c.key=a;c.value=b;return rj().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.tj=function(a){return rj().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
rj=function(){return uj?window.Promise.resolve(uj):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))uj=b,a(uj);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),rj()};
c.onupgradeneeded=Aba})};
Aba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Gba=function(){vj++;var a=g.oc(),b=new g.Cc(0,0,a.width,a.height);wj("vph",a.height);wj("vpw",a.width);(0,g.lj)("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;xj.start();for(var f=0;f<c;f++){var k=a[f];if(yj(k,b)){var l=Bba(k);l.then(Cba);d.push(l);zj.push(l);k.loadTime||(e=!1)}}e&&wj("yt_eil",1);(0,g.lj)("vpcc");b=g.ve(d).then(Dba);g.xe(b,Eba);b.then(Fba);zj.push(b);return b};
Fba=function(){xj.stop()};
Eba=function(){(0,g.lj)("vpr")};
yj=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.xg(c);if(e in Aj)return!0;if(e in Bj)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Bj[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Bj[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Aj[d[c]]=!0;return!0};
Dba=function(a){var b=g.oc();b=new g.Cc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;yj(a[d].yB,b)&&c<f&&(c=f)}return c};
Bba=function(a){var b=vj;return new g.pe(function(c,d){var e={yB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){vj!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},Cj.push(a))})};
Cba=function(a){xj.start();a=a.time;Dj<a&&(Dj=a,(0,g.lj)("lim",a))};
Hba=function(){(0,g.lj)("vptl",Dj);(0,g.lj)("vpl",Dj)};
Iba=function(){zj.forEach(function(a){a.cancel()});
Dj=zj.length=0;Aj={};Bj={};Cj.forEach(function(a){a.slt=void 0});
Cj.length=0};
g.Ej=function(a,b){g.ei("/gen_204?"+a,b)};
Kba=function(a){if(null==a)return[];var b=[];Jba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Fj=function(){return g.B(g.x("page-container"),"remote-connected")};
Lba=function(){Gj=g.Bf(Hj,5E3);var a=g.Ij();a?(a.addEventListener("onReady",Hj),a.addEventListener("onStateChange",Hj)):Jj("unable to init PP monitor")};
Mj=function(a){for(var b in g.nj){var c=g.nj[b];c&&c.cancel()}if(a=a||null){b=g.Ij();var d=!0;c=g.Kj;g.Kj=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Lj="",g.oj("player-api",a)):b.playVideo();a=g.Ng(a);a.loaded=!0}Hj();g.p("ytplayer.config",a,void 0)};
g.Ij=function(){return g.qj("player-api")};
Hj=function(){var a=g.Ij();if(a){var b=g.x("player");b=!b||g.B(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.D("PAGE_NAME"),e=g.Fj();!c||d||e||(Jj("PP playing off watch (paused)"),a.pauseVideo());b&&d?Jj("PP off-screen on watch"):b||d||Jj("PP !off-screen off watch")}};
Jj=function(a){var b=g.D("PAGE_NAME");b&&(a+="("+[b,Lj,g.r("_spf_state.nav-counter")].join()+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.vf(Error(a),"WARNING"))};
Oj=function(){(0,g.lj)("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){(0,g.lj)("cpt");g.F("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?((0,g.lj)("cpt"),g.F("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){(0,g.lj)("cpt");
g.F("on_cpt_tick",(new Date).getTime())},0);
Mba();g.D("CSI_VIEWPORT")&&(Nj=Gba(),Nj.then(function(a){(0,g.lj)("vpl",a);Nj=null},function(){}))};
Mba=function(){Pj("init");var a=g.D("PAGE_NAME",void 0);a&&Pj("init-"+a)};
Pj=function(a){g.Wf()?Qj.push(g.Sf(g.u(g.Kf,a),0)):g.F(a)};
Rj=function(){g.Uf(Qj);Qj.length=0;Iba();Nj&&(Nj.cancel(),Nj=null);var a=g.D("PAGE_NAME",void 0);a&&g.Kf("dispose-"+a);g.Kf("dispose")};
Nba=function(){Oj()};
Oba=function(){g.D("TIMING_REPORT_ON_UNLOAD")&&g.Ii(!0);Ui("u");g.Ph("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Vh();g.Bh();g.Ug();Rj();g.Kf("pageunload")};
Sj=function(){g.ih()};
Tj=function(){window.yt_spf_loaded_history=!0;g.ih()};
Yj=function(){Uj=1;Vj=Wj=0;g.D("TIMING_REPORT_ON_UNLOAD")&&g.Ii(!0);g.Zf("warm_load_nav_start_web")?(Ui("n"),Li(),Hi(!1),g.tf("TIMING_AFT_KEYS",[]),vi("yt_lt","warm"),g.tf("TIMING_ACTION",""),g.tf("TIMING_WAIT",[]),ri(),yi("n")):(Ui("n"),Li(),yi("n"));Mi("nr");Xj(Pba);Vh();g.Kf("navigate")};
ck=function(a){a=a.detail.part||a.detail.partial;(0,g.lj)("nc"+Wj);++Wj;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.lj)("bc");else{var b=1==Uj;Uj=2;b?(Xj(Qba),Zj()):Xj(Rba);if(b=a&&a.data&&a.data.swfcfg)ak(a.timing,b.args),bk(b)}};
dk=function(){(0,g.lj)("np"+Vj);++Vj};
ek=function(a){a=a.detail.response;var b=1==Uj;Uj=3;b&&(Xj(Sba),Zj());if(b=a.data&&a.data.swfcfg)ak(a.timing,b.args),bk(b)};
ik=function(a){(0,g.lj)("nd");a=a.detail.response;g.fk=a.cacheKey;a=a.timing;var b=window._spf_state;g.gk.navigationCount=b&&b["nav-counter"]||0;g.Zf("warm_load_nav_start_web")?(0,g.lj)("srt",a.responseStart):(yi("ne",a.responseStart),wj("srt",Math.max(0,a.responseStart-a.navigationStart)));wj("yt_lt",a.spfCached?"hot":"warm");(0,g.lj)("pfs",a.fetchStart);(0,g.lj)("pfrs",a.responseStart);"redirectStart"in a&&Tba(a);Xj(hk);window.document.getElementById("content").style.height="";Oj();Uj=0};
jk=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.vf(a)};
kk=function(a){g.Ej(g.Tc({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Vba=function(){Uba();window.yt_spf_loaded_history=!1};
Wba=function(){};
Zj=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Rj();a=g.D("PREVIOUS_ACTION");for(var b in g.sf)delete g.sf[b];g.tf("PREVIOUS_ACTION",a);g.tf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);if((b=g.Ij())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Lj=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),Lj="recovered"):Lj="missing2"}else Lj="missing";Hj()};
bk=function(a){"cfg"in Di(void 0)||(0,g.lj)("cfg");Mj(a)};
Xj=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Tf(lk);lk=g.Sf(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Cf(mk);mk=g.Af(function(){b.className=e},c)},0)};
Uba=function(){var a=hk[0]+50;g.Cf(mk);mk=g.Af(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
ak=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Kba(b));g.D("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Ej(g.Tc(c)))};
ok=function(){return"granted"!=window.Notification.permission?window.Promise.resolve():nk().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})["catch"](function(){})};
qk=function(){pk({type:"notifications_register",data:g.D("ID_TOKEN")})};
nk=function(){return window.navigator.serviceWorker.getRegistration(String(Yf("service_worker_scope")||""))};
rk=function(a){return!(!a||!a.pushManager)};
pk=function(a){nk().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Xba=function(){if(!g.D("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(Yf("service_worker_push_force_notification_prompt_tag")||"");return a?g.tj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
aca=function(){var a=void 0===a?!1:a;return(window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification?nk().then(rk):window.Promise.resolve(!1)).then(function(b){if(!b)return window.Promise.resolve();b=ok().then(function(){pk({type:"notifications_check_registration",data:g.D("ID_TOKEN")})});
return"default"!=window.Notification.permission?b:b.then(function(){return Yba(a)}).then(function(a){if(a)return Zba(),$ba().then(function(){})})})};
Yba=function(a){return g.D("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.D("LOGGED_IN",void 0)&&(void 0===a?0:a)?Xba().then(function(a){if(a)return!0;a=[bca(),cca()];g.D("LOGGED_IN",void 0)||a.push(dca());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
dca=function(){var a=g.$f("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.tj("WatchCount").then(function(b){return b>=a})};
$ba=function(){var a=arguments;g.Zf("service_worker_push_prompt_modal_enable")&&eca();return window.Notification.requestPermission().then(function(a){sk();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return ok().then(function(){g.sj("NotificationsDisabled",!1);qk();return window.Promise.resolve(!0)});
"denied"==a&&qk();return window.Promise.resolve(!1)})["catch"](function(){sk();
return window.Promise.reject.apply(window.Promise,a instanceof Array?a:baa(g.ma(a)))})};
Zba=function(){g.tj("PromptCount").then(function(a){return g.sj("PromptCount",a+1)}).then(function(){return g.sj("PromptTime",(0,g.A)())}).then(function(){var a=String(Yf("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.tj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.sj("PromptTags",JSON.stringify(c))})})};
bca=function(){return-1==g.$f("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.tj("PromptCount").then(function(a){a||(a=0);return window.Promise.resolve(a<g.$f("service_worker_push_prompt_cap"))})};
cca=function(){var a=g.$f("service_worker_push_prompt_delay_microseconds");return a?g.tj("PromptTime").then(function(b){return window.Promise.resolve((0,g.A)()-a>(b||0))}):window.Promise.resolve(!0)};
fca=function(){tk||sk()};
uk=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
eca=function(){var a=g.x("yt-push-prompt-modal-bg");tk=g.Zf("service_worker_push_prompt_modal_ignore_click");a?uk(a):(a=g.rc("div",{id:"yt-push-prompt-modal-bg"}),uk(a),window.document.body.appendChild(a),g.Ig(window.document,"click",fca))};
sk=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.uc(a)};
gca=function(a){return rk(a)?aca():window.Promise.resolve()};
ica=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(hca)})};
kca=function(){var a="/sw.js",b=g.D("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=vk(a);g.Zf("service_worker_push_enabled")&&a.then(jca).then(gca)};
jca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
hca=function(a){a&&vk("/sw.js?0",a.scope)};
vk=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(Yf("service_worker_scope")||"")||"/"})};
wk=function(){g.Wh.call(this,"www/base");this.D=0};
xk=function(a){(a=a.detail.name)&&Zh(a)};
g.aa=[];ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)yk=Object.setPrototypeOf;else{var zk;a:{var lca={Qv:!0},Ak={};try{Ak.__proto__=lca;zk=Ak.Qv;break a}catch(a){}zk=!1}yk=zk?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var da=yk,ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ha="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,aaa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
na("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=oa(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
var mca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)pa(d,e)&&(a[e]=d[e])}return a};
na("Object.assign",function(a){return a||mca});
na("WeakMap",function(a){function b(a){this.hb=(f+=Math.random()+1).toString();if(a){fa();ka();a=g.ma(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){pa(a,e)||ia(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(q){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!pa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.hb]=b;return this};
b.prototype.get=function(a){return pa(a,e)?a[e][this.hb]:void 0};
b.prototype.has=function(a){return pa(a,e)&&pa(a[e],this.hb)};
b.prototype["delete"]=function(a){return pa(a,e)&&pa(a[e],this.hb)?delete a[e][this.hb]:!1};
return b});
na("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return la(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&pa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,kc:l}}return{id:c,list:d,index:-1,kc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.ma(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.ma([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(z){return!1}}())return a;
fa();ka();var f=new window.WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.kc?c.kc.value=b:(c.kc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.kc),this.F.previous.next=c.kc,this.F.previous=c.kc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.kc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.kc.previous.next=a.kc.next,a.kc.next.previous=a.kc.previous,a.kc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).kc};
e.prototype.get=function(a){return(a=d(this,a).kc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
na("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.ma(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.ma([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
fa();ka();b.prototype.add=function(a){a=0===a?0:a;this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
na("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
na("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==oa(this,a,"includes").indexOf(a,c||0)}});
var nca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
na("Reflect.construct",function(){return nca});
na("Promise",function(a){function b(a){this.F=0;this.D=void 0;this.C=[];var b=this.H();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.K()})};
var e=ha.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.K=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(q){this.H(q)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.K(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(m){this.G(m);return}"function"==typeof b?this.la(b,a):this.K(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.K=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.F)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.F);this.F=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var a=0;a<this.C.length;++a)f.F(this.C[a]);this.C=null}};
var f=new c;b.prototype.V=function(a){var b=this.H();a.oi(b.resolve,b.reject)};
b.prototype.la=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(q){c.reject(q)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(T){f(T)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.oi(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.oi=function(a,b){function c(){switch(d.F){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.F);}}
var d=this;null==this.C?f.F(c):this.C.push(c)};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.ma(a),f=e.next();!f.done;f=e.next())d(f.value).oi(b,c)})};
b.all=function(a){var c=g.ma(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).oi(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
na("Array.from",function(a){return a?a:function(a,c,d){ka();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f){a=f.call(a);for(var k=0;!(f=a.next()).done;)b.push(c.call(d,f.value,k++))}else for(f=a.length,k=0;k<f;k++)b.push(c.call(d,a[k],k));return b}});
na("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!(0,window.isNaN)(a)&&window.Infinity!==a&&-window.Infinity!==a}});
na("Number.parseInt",function(a){return a||window.parseInt});
g.Bk=g.Bk||{};g.n=this;Ca="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.A=Date.now||function(){return+new Date};g.Jc=window.document;g.Ck=window;g.v(g.Ea,Error);g.Ea.prototype.name="CustomError";g.Ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.sa(a))return g.sa(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.oca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.sa(a))return g.sa(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Xi=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.sa(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.$i=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.sa(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Yi=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.y)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Dk=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Gk=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Ua=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.Hk=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var Ik=g.n.navigator;if(Ik){var Jk=Ik.userAgent;if(Jk){g.Za=Jk;break a}}g.Za=""};var jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.sb[" "]=g.va;var Pk,maa,Tk;g.yd=g.$a("Opera");g.C=g.mb();g.Kk=g.$a("Edge");g.Lk=g.Kk||g.C;g.Mk=g.$a("Gecko")&&!(-1!=g.Za.toLowerCase().indexOf("webkit")&&!g.$a("Edge"))&&!(g.$a("Trident")||g.$a("MSIE"))&&!g.$a("Edge");g.xd=-1!=g.Za.toLowerCase().indexOf("webkit")&&!g.$a("Edge");g.Nk=g.$a("Macintosh");g.Ok=g.$a("Windows");g.pca=g.$a("Linux")||g.$a("CrOS");g.qca=g.$a("Android");g.rca=qb();g.sca=g.$a("iPad");g.tca=g.$a("iPod");g.uca=g.rb();
a:{var Qk="",Rk=function(){var a=g.Za;if(g.Mk)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Kk)return/Edge\/([\d\.]+)/.exec(a);if(g.C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.xd)return/WebKit\/(\S+)/.exec(a);if(g.yd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Rk&&(Qk=Rk?Rk[1]:"");if(g.C){var Sk=ub();if(null!=Sk&&Sk>(0,window.parseFloat)(Qk)){Pk=String(Sk);break a}}Pk=Qk}g.vb=Pk;maa={};var Uk=g.n.document;Tk=Uk&&g.C?ub()||("CSS1Compat"==Uk.compatMode?(0,window.parseInt)(g.vb,10):5):void 0;g.xb=Tk;g.Vk=g.$a("Firefox");g.Wk=qb()||g.$a("iPod");g.Xk=g.$a("iPad");g.vca=g.pb();g.Yk=g.nb();g.Zk=g.ob()&&!g.rb();var zb,Bb;zb=null;g.Ab=null;Bb=null;g.$k="function"==typeof window.Uint8Array;g.h=g.Db.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.qa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.A)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Ua)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.qa(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Jc=function(){return g.Eb(this).keys};
g.h.Eb=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Kb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.Pd=g.ba(3);g.h.clear=function(){for(var a=g.Eb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.rh=new g.Db("undefined"==typeof window.document?null:window.document);g.rh.F=3950;g.al=g.Gb(null);var oaa;oaa=!g.C||g.yb(9);g.wca=!g.Mk&&!g.C||g.C&&g.yb(9)||g.Mk&&g.wb("1.9.1");g.bl=g.C&&!g.wb("9");g.xca=g.C||g.yd||g.xd;g.Jb.prototype.Xd=!0;g.Jb.prototype.Vc=function(){return this.C};
g.Jb.prototype.toString=function(){return"Const{"+this.C+"}"};
g.Ib={};g.Kb("");g.yca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.zca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.cl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");g.Mb.prototype.Xd=!0;g.Mb.prototype.Vc=function(){return this.C};
g.Mb.prototype.Nl=!0;g.Mb.prototype.wf=function(){return 1};
var Ob=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Lb={};g.Pb("about:blank");g.Tb.prototype.Xd=!0;g.Sb={};g.Tb.prototype.Vc=function(){return this.C};
g.dl=g.Ub("");g.el=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.fl=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Wb.prototype.Xd=!0;g.Vb={};g.Wb.prototype.Vc=function(){return this.C};
g.gl=g.Xb("");g.$b.prototype.Nl=!0;g.$b.prototype.wf=function(){return this.F};
g.$b.prototype.Xd=!0;g.$b.prototype.Vc=function(){return this.C};
var Zb={};g.bc("<!DOCTYPE html>",0);g.hl=g.bc("",0);g.il=g.bc("<br>",0);g.Aca=g.Hb(function(){var a=window.document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});g.h=g.gc.prototype;g.h.clone=function(){return new g.gc(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.gc&&g.hc(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.gc?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.ua(b)&&(this.y+=b));return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.jc.prototype;g.h.clone=function(){return new g.jc(this.width,this.height)};
g.h.dw=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.dw()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.width*=a;this.height*=c;return this};var lc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Bca;Bca={iP:"allow-forms",jP:"allow-modals",kP:"allow-orientation-lock",lP:"allow-pointer-lock",mP:"allow-popups",nP:"allow-popups-to-escape-sandbox",oP:"allow-presentation",pP:"allow-same-origin",qP:"allow-scripts",rP:"allow-top-navigation",sP:"allow-top-navigation-by-user-activation"};g.Cca=g.Hb(function(){return g.zc(Bca)});g.h=g.Cc.prototype;g.h.clone=function(){return new g.Cc(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.gc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.gc?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.ua(b)&&(this.top+=b));return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.jl=g.Mk?"MozUserSelect":g.xd||g.Kk?"WebkitUserSelect":null;var Hc,Ic;g.Dca=Object.prototype.hasOwnProperty;Hc=g.Gc(window);Ic=Hc&&window.parent||window;var qaa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Eca=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;Xc.prototype.getUrl=function(a,b,c,d){a=a+"//"+b+c;var e=saa(this)-c.length-d.length;if(0>e)return"";this.C.sort(function(a,b){return a-b});
c=null;b="";for(var f=0;f<this.C.length;f++)for(var k=this.C[f],l=this.F[k],m=0;m<l.length;m++){if(!e){c=null==c?k:c;break}var q=$c(l[m],this.D,",$");if(q){q=b+q;if(e>=q.length){e-=q.length;a+=q;b=this.D;break}else this.H&&(b=e,q[b-1]==this.D&&--b,a+=q.substr(0,b),b=this.D,e=0);c=null==c?k:c}}f="";this.G&&null!=c&&(f=b+this.G+"="+c);return a+f+d};var kl=null;var hd=g.n.performance,Fca=!!(hd&&hd.mark&&hd.measure&&hd.clearMarks),fd=g.Hb(function(){var a;if(a=Fca){var b;if(null===kl){kl="";try{a="";try{a=g.n.top.location.hash}catch(c){a=g.n.location.hash}a&&(kl=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=kl;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
gd.prototype.disable=function(){this.C=!1;this.events!=this.F.google_js_reporting_queue&&(fd()&&g.y(this.events,g.id),this.events.length=0)};
gd.prototype.start=function(a,b){if(!this.C)return null;var c=dd()||cd();c=new taa(a,b,c);var d="goog_"+c.uniqueId+"_start";hd&&fd()&&hd.mark(d);return c};
gd.prototype.end=function(a){if(this.C&&g.ua(a.value)){var b=dd()||cd();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";hd&&fd()&&hd.mark(b);this.C&&this.events.push(a)}};ld.prototype.F=function(a,b,c,d,e){e=e||"jserror";try{var f=new Xc;f.H=!0;ad(f,1,"context",a);b.error&&b.meta&&b.id||(b=g.od(b));b.msg&&ad(f,2,"msg",b.msg.substring(0,512));b.file&&ad(f,3,"file",b.file);0<b.line&&ad(f,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(R){}b=[k];f.C.push(5);f.F[5]=b;var l=g.Wc(),m=new Vc(g.n.location.href,g.n,!1);b=null;var q=l.length-1;for(d=q;0<=d;--d){var w=l[d];!b&&Eca.test(w.url)&&(b=w);if(w.url&&!w.Gq){m=w;break}}w=null;var z=l.length&&l[q].url;0!=m.depth&&
z&&(w=l[q]);var I=new raa(m,w);I.F&&ad(f,6,"top",I.F.url||"");ad(f,7,"url",I.C.url||"");g.bd(this.D,e,f,c)}catch(R){try{g.bd(this.D,e,{context:"ecmserr",rctx:a,msg:g.nd(R),url:I&&I.C.url},c)}catch(V){}}return!0};
g.ea(md,Lc);var ed,jd;ed=g.Kc();jd=new gd;g.kd=new function(){var a=void 0===a?g.Ck:a;this.G="http:"===a.location.protocol?"http:":"https:";this.F="pagead2.googlesyndication.com";this.D="/pagead/gen_204?id=";this.C=.01};
g.ll=new ld;"complete"==ed.document.readyState?ed.google_measure_js_timing||jd.disable():jd.C&&Ac(ed,"load",function(){ed.google_measure_js_timing||jd.disable()});var ml;ml={};g.nl=(ml[8]="google_prev_ad_formats_by_region",ml[9]="google_prev_ad_slotnames_by_region",ml);g.ol=(new Date).getTime();g.sd.prototype.Dc=!1;g.sd.prototype.ob=function(){return this.Dc};
g.sd.prototype.dispose=function(){this.Dc||(this.Dc=!0,this.X())};
g.sd.prototype.X=function(){if(this.Yb)for(;this.Yb.length;)this.Yb.shift()()};g.wd.prototype.stopPropagation=function(){this.F=!0};
g.wd.prototype.preventDefault=function(){this.Et=!1};var Qd,Hca,zaa;g.Gca=!g.C||g.yb(9);Qd=!g.C||g.yb(9);Hca=g.C&&!g.wb("9");zaa=function(){if(!g.n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.n.addEventListener("test",g.va,b);g.n.removeEventListener("test",g.va,b);return a}();g.pl=zd("TransitionEnd");
g.ql={TP:"click",vW:"rightclick",BQ:"dblclick",Tg:"mousedown",Ug:"mouseup",lU:"mouseover",kU:"mouseout",jU:"mousemove",hU:"mouseenter",iU:"mouseleave",Sg:"mousecancel",EW:"selectionchange",FW:"selectstart",pZ:"wheel",lS:"keypress",kS:"keydown",mS:"keyup",MP:"blur",qR:"focus",CQ:"deactivate",rR:"focusin",sR:"focusout",QP:"change",oW:"reset",DW:"select",gX:"submit",YR:"input",VV:"propertychange",ZQ:"dragstart",UQ:"drag",WQ:"dragenter",YQ:"dragover",XQ:"dragleave",DROP:"drop",VQ:"dragend",rX:"touchstart",
qX:"touchmove",pX:"touchend",oX:"touchcancel",LP:"beforeunload",oQ:"consolemessage",rQ:"contextmenu",GQ:"devicechange",HQ:"devicemotion",IQ:"deviceorientation",LQ:"DOMContentLoaded",ERROR:"error",MR:"help",LOAD:"load",NT:"losecapture",PU:"orientationchange",aW:"readystatechange",qW:"resize",yW:"scroll",EY:"unload",OP:"canplay",PP:"canplaythrough",aR:"durationchange",dR:"emptied",ENDED:"ended",HT:"loadeddata",IT:"loadedmetadata",PAUSE:"pause",PLAY:"play",PLAYING:"playing",YV:"ratechange",AW:"seeked",
BW:"seeking",cX:"stalled",iX:"suspend",mX:"timeupdate",PY:"volumechange",QY:"waiting",ZW:"sourceopen",YW:"sourceended",XW:"sourceclosed",JO:"abort",UPDATE:"update",IY:"updatestart",GY:"updateend",KR:"hashchange",WU:"pagehide",XU:"pageshow",RV:"popstate",uQ:"copy",fV:"paste",yQ:"cut",FP:"beforecopy",GP:"beforecut",JP:"beforepaste",OU:"online",JU:"offline",MESSAGE:"message",nQ:"connect",aS:"install",KO:"activate",oR:"fetch",uR:"foreignfetch",bU:"messageerror",dX:"statechange",HY:"updatefound",tQ:"controllerchange",
wP:zd("AnimationStart"),uP:zd("AnimationEnd"),vP:zd("AnimationIteration"),sX:g.pl,JV:"pointerdown",PV:"pointerup",IV:"pointercancel",MV:"pointermove",OV:"pointerover",NV:"pointerout",KV:"pointerenter",LV:"pointerleave",DR:"gotpointercapture",OT:"lostpointercapture",mU:"MSGestureChange",nU:"MSGestureEnd",oU:"MSGestureHold",pU:"MSGestureStart",qU:"MSGestureTap",rU:"MSGotPointerCapture",sU:"MSInertiaStart",tU:"MSLostPointerCapture",uU:"MSPointerCancel",vU:"MSPointerDown",wU:"MSPointerEnter",xU:"MSPointerHover",
yU:"MSPointerLeave",zU:"MSPointerMove",AU:"MSPointerOut",BU:"MSPointerOver",CU:"MSPointerUp",TEXT:"text",lX:g.C?"textinput":"textInput",kQ:"compositionstart",lQ:"compositionupdate",jQ:"compositionend",HP:"beforeinput",gR:"exit",FT:"loadabort",GT:"loadcommit",JT:"loadredirect",KT:"loadstart",LT:"loadstop",rW:"responsive",VW:"sizechanged",FY:"unresponsive",LY:"visibilitychange",fX:"storage",RQ:"DOMSubtreeModified",MQ:"DOMNodeInserted",OQ:"DOMNodeRemoved",QQ:"DOMNodeRemovedFromDocument",NQ:"DOMNodeInsertedIntoDocument",
JQ:"DOMAttrModified",KQ:"DOMCharacterDataModified",KP:"beforeprint",hP:"afterprint",IP:"beforeinstallprompt",AP:"appinstalled"};g.v(g.Ad,g.wd);var Ica={2:"touch",3:"pen",4:"mouse"};
g.Ad.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Mk&&(g.tb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Nk?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.sa(a.pointerType)?a.pointerType:Ica[a.pointerType]||"";this.state=a.state;this.mc=a;a.defaultPrevented&&
this.preventDefault()};
g.Ad.prototype.stopPropagation=function(){g.Ad.M.stopPropagation.call(this);this.mc.stopPropagation?this.mc.stopPropagation():this.mc.cancelBubble=!0};
g.Ad.prototype.preventDefault=function(){g.Ad.M.preventDefault.call(this);var a=this.mc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Hca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Bd="closure_listenable_"+(1E6*Math.random()|0),waa=0;g.h=g.Ed.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Gd(a,b,d,e);-1<k?(b=a[k],c||(b.ni=!1)):(b=new xaa(b,this.src,f,!!d,e),b.ni=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Gd(e,b,c,d);return-1<b?(Dd(e[b]),g.Ka(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Dd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.mg=g.ba(5);g.h.sf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Gd(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.qa(a),d=c?a.toString():"",e=g.qa(b);return g.bb(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Nd="closure_lm_"+(1E6*Math.random()|0),Td={},Pd=0,Xd="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.Yd,g.sd);g.Yd.prototype[Bd]=!0;g.h=g.Yd.prototype;g.h.Oi=function(){return this.Cm};
g.h.Jh=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.Jd(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Rd(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Oi();if(b){var c=[];for(var d=1;b;b=b.Oi())c.push(b),++d}b=this.Sv;d=a.type||a;if(g.sa(a))a=new g.wd(a,b);else if(a instanceof g.wd)a.target=a.target||b;else{var e=a;a=new g.wd(d,b);g.lb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=Zd(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=Zd(k,d,!0,a)&&e,a.F||(e=Zd(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=Zd(k,d,!1,a)&&e;return e};
g.h.X=function(){g.Yd.M.X.call(this);this.removeAllListeners();this.Cm=null};
g.h.O=function(a,b,c,d){return this.Ad.add(String(a),b,!1,c,d)};
g.h.Re=function(a,b,c,d){return this.Ad.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.Ad.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.Ad?this.Ad.removeAll(a):0};
g.h.mg=g.ba(4);g.h.sf=function(a,b,c,d){return this.Ad.sf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.Ad.hasListener(g.qa(a)?String(a):void 0,b)};$d.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var ke;var le=new $d(function(){return new de},function(a){a.reset()});
ce.prototype.add=function(a,b){var c=le.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
ce.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
de.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
de.prototype.reset=function(){this.next=this.scope=this.lc=null};var ee,fe=!1,ge=new ce;qe.prototype.reset=function(){this.context=this.onRejected=this.D=this.C=null;this.F=!1};
var re=new $d(function(){return new qe},function(a){a.reset()});
g.pe.prototype.then=function(a,b,c){return we(this,g.Aa(a)?a:null,g.Aa(b)?b:null,c)};
g.me(g.pe);g.pe.prototype.cancel=function(a){0==this.C&&he(function(){var b=new g.De(a);ye(this,b)},this)};
g.pe.prototype.W=function(a){this.C=0;g.oe(this,2,a)};
g.pe.prototype.N=function(a){this.C=0;g.oe(this,3,a)};
g.pe.prototype.J=function(){for(var a;a=ze(this);)Ae(this,a,this.C,this.R);this.K=!1};
var Fe=be;g.v(g.De,g.Ea);g.De.prototype.name="cancel";g.v(g.Ie,g.sd);g.h=g.Ie.prototype;g.h.hb=0;g.h.X=function(){g.Ie.M.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.hb=g.Ge(this.hc,g.qa(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.He(this.hb);this.hb=0};
g.h.nf=g.ba(7);g.h.isActive=function(){return 0!=this.hb};
g.h.wp=function(){this.hb=0;this.C&&this.C.call(this.F)};g.v(Je,Faa);Je.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Je.prototype.update=function(a,b){if(null!=a){g.qa(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.K,f=this.D;d<b;){if(0==f)for(;d<=c;)Ke(this,a,d),d+=this.F;if(g.sa(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){Ke(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){Ke(this,e);f=0;break}}this.D=f;this.H+=b}};
Je.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.K[c]=b&255,b/=256;Ke(this,this.K);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.Ne="StopIteration"in g.n?g.n.StopIteration:{message:"StopIteration",stack:""};g.Me.prototype.next=function(){throw g.Ne;};
g.Me.prototype.fd=function(){return this};g.h=g.Re.prototype;g.h.Kb=function(){return this.D};
g.h.Eb=g.ba(0);g.h.Jc=function(){g.Te(this);return this.C.concat()};
g.h.Pd=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Kb())return!1;var c=b||Haa;g.Te(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Xe=this.D=this.C.length=0};
g.h.remove=function(a){return g.Se(this.F,a)?(delete this.F[a],this.D--,this.Xe++,this.C.length>2*this.D&&g.Te(this),!0):!1};
g.h.get=function(a,b){return g.Se(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.Se(this.F,a)||(this.D++,this.C.push(a),this.Xe++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.Jc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.Re(this)};
g.h.fd=function(a){g.Te(this);var b=0,c=this.Xe,d=this,e=new g.Me;e.next=function(){if(c!=d.Xe)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Ne;var e=d.C[b++];return a?e:d.F[e]};
return e};var Ye={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.Ze,g.sd);g.h=g.Ze.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.vd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.va):(c&&g.La(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.K)for(e=0;e<c.length;e++){var k=c[e];Kaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.vd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.y)(b,this.vd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Kb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Kb(b);return a};
g.h.X=function(){g.Ze.M.X.call(this);this.clear();this.D.length=0};g.af.prototype.set=function(a,b){g.qa(b)?this.C.set(a,g.We(b)):this.C.remove(a)};
g.af.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.af.prototype.remove=function(a){this.C.remove(a)};g.v(bf,g.af);bf.prototype.set=function(a,b){bf.M.set.call(this,a,df(b))};
bf.prototype.F=function(a){a=bf.M.get.call(this,a);if(!g.qa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
bf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.qa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.ef,bf);g.ef.prototype.set=function(a,b,c){if(b=df(b)){if(c){if(c<(0,g.A)()){g.ef.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.A)()}g.ef.M.set.call(this,a,b)};
g.ef.prototype.F=function(a,b){var c=g.ef.M.F.call(this,a);if(c)if(!b&&g.ff(c))g.ef.prototype.remove.call(this,a);else return c};g.v(gf,Laa);gf.prototype.Kb=function(){var a=0;g.Pe(this.fd(!0),function(){a++});
return a};
gf.prototype.clear=function(){var a=Gaa(this.fd(!0)),b=this;(0,g.y)(a,function(a){b.remove(a)})};g.v(g.hf,gf);g.h=g.hf.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Kb=function(){return this.C.length};
g.h.fd=function(a){var b=0,c=this.C,d=new g.Me;d.next=function(){if(b>=c.length)throw g.Ne;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.jf,g.hf);g.v(lf,gf);var Maa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},kf=null;g.h=lf.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(mf(a),b);nf(this)};
g.h.get=function(a){a=this.C.getAttribute(mf(a));if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(mf(a));nf(this)};
g.h.Kb=function(){return of(this).attributes.length};
g.h.fd=function(a){var b=0,c=of(this).attributes,d=new g.Me;d.next=function(){if(b>=c.length)throw g.Ne;var d=c[b++];if(a)return(0,window.decodeURIComponent)(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){for(var a=of(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);nf(this)};g.v(pf,gf);pf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
pf.prototype.get=function(a){return this.F.get(this.C+a)};
pf.prototype.remove=function(a){this.F.remove(this.C+a)};
pf.prototype.fd=function(a){var b=this.F.fd(!0),c=this,d=new g.Me;d.next=function(){for(var d=b.next();d.substr(0,c.C.length)!=c.C;)d=b.next();return a?d.substr(c.C.length):c.F.get(d)};
return d};g.$g=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.rl="Microsoft Internet Explorer"==window.navigator.appName;g.sf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.sf,void 0);var zf={};var Jca=g.r("ytPubsubPubsubInstance")||new g.Ze;g.Ze.prototype.subscribe=g.Ze.prototype.subscribe;g.Ze.prototype.unsubscribeByKey=g.Ze.prototype.vd;g.Ze.prototype.publish=g.Ze.prototype.oa;g.Ze.prototype.clear=g.Ze.prototype.clear;g.p("ytPubsubPubsubInstance",Jca,void 0);var Ff=g.r("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",Ff,void 0);var Hf=g.r("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",Hf,void 0);var Gf=g.r("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",Gf,void 0);var Oaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Paa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Of.prototype.initialize=function(a,b,c,d){b?(this.F=!0,g.Mf(b,function(){this.F=!1;window.botguard?Pf(this,c,d):(g.Nf(b),g.vf(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this))):a&&(eval(a),window.botguard?Pf(this,c,d):g.vf(Error("Unable to load Botguard from JS"),"WARNING"))};
g.Of.prototype.Pe=function(){return null!==this.C};
g.Of.prototype.invoke=function(){return this.C?this.C.invoke():null};
g.Of.prototype.dispose=function(){this.C=null};g.ea(Vf,Qaa);Vf.prototype.start=function(){var a=g.r("yt.scheduler.instance.start");a&&a()};
Vf.prototype.pause=function(){var a=g.r("yt.scheduler.instance.pause");a&&a()};
g.wa(Vf);Vf.getInstance();g.ag=new g.Of;(0,g.A)();var dg=g.qa(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.qa(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var jg,og;jg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};og=!1;g.sl=pg;tg.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.ne(a)?a:g.vg(a)):2===this.F&&b?(a=b.call(c,this.C),g.ne(a)?a:g.ug(a)):this};
tg.prototype.getValue=function(){return this.C};
g.me(tg);var Kca=0,Vaa=g.xd?"webkit":g.Mk?"moz":g.C?"ms":g.yd?"o":"",wg=g.r("ytDomDomGetNextId")||function(){return++Kca};
g.p("ytDomDomGetNextId",wg,void 0);var Waa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.zg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.zg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.zg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Dg=g.r("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",Dg,void 0);var Fg=g.r("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",Fg,void 0);var Gg=g.Hb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.v(g.Kg,g.sd);g.Kg.prototype.W=function(a){this.C=new g.gc(g.Bg(a),g.Cg(a))};
g.Kg.prototype.R=function(){if(this.C){var a=g.$g();if(0!=this.D){var b=g.ic(this.K,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.hc();this.G=b}this.D=a;this.K=this.C;this.H=(this.H+1)%4}};
g.Kg.prototype.X=function(){g.Df(this.N);g.Hg(this.J)};g.ea(Lg,g.sd);Lg.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.ne);break}};
Lg.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.ne)}g.sd.prototype.X.call(this)};var Xaa={enablejsapi:1},Yaa={};Mg.prototype.clone=function(){var a=new Mg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.xa(c)?a[b]=g.ib(c):a[b]=c}return a};var Pg={},Og=0;var bba,fh,gh,aba,ah,cba,Tg;bba=Math.pow(2,16)-1;fh=null;gh=0;aba={log_event:"events",log_interaction:"interactions"};ah=Object.create(null);ah.log_event="GENERIC_EVENT_LOGGING";ah.log_interaction="INTERACTION_LOGGING";cba=new window.Set(["log_event"]);Tg={};g.Xg=0;g.Yg=g.r("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.Yg,void 0);var Rg=g.r("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",Rg,void 0);
var Zg=g.r("ytLoggingTransportDispatchedStats_")||{};g.p("ytLoggingTransportDispatchedStats_",Zg,void 0);var bh=g.r("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",bh,void 0);var lh={};g.uh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.A)()+1E3*c);return}catch(f){}var e="";if(d)try{e=(0,window.escape)(g.We(b))}catch(f){return}else e=(0,window.escape)(b);g.sh(a,e,c,this.F)};
g.uh.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.rh.get(""+a,void 0))&&(c=(0,window.unescape)(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.uh.prototype.remove=function(a){this.C&&this.C.remove(a);g.th(a,"/",this.F)};var vh=new g.uh("yt.innertube");var Hh=g.r("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",Hh,void 0);var Ih=0;var Jh=(0,g.A)().toString();var Oh,Lh;g.Nh=Kh();Oh=0;g.Mh=null;Lh=null;g.p("yt.logging.screen.getRootVeType",Sh,void 0);g.p("yt.logging.screen.getCurrentCsn",g.Uh,void 0);g.h=g.Wh.prototype;g.h.pL=function(){this.Pe()||this.init()};
g.h.enable=function(){this.C=1;(0,g.y)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.pL,this),this.subscribe("dispose-"+a,this.dispose,this),g.D("PAGE_NAME")==a&&g.Xh(this))},this)};
g.h.init=function(){g.Tf(this.F);this.C=2;this.K&&this.K()};
g.h.Pe=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Tf(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.vf(a)}};
g.h.subscribe=function(a,b,c){a=g.If(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.Jf(this.G);this.G=[]};var Yh=g.r("yt.modules.registry_")||{};g.p("yt.modules.registry_",Yh,void 0);g.ai=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.ai,void 0);var fi={},hba=0;var iba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.mi.prototype.toString=function(){return this.topic};var Lca=g.r("ytPubsub2Pubsub2Instance")||new g.Ze;g.Ze.prototype.subscribe=g.Ze.prototype.subscribe;g.Ze.prototype.unsubscribeByKey=g.Ze.prototype.vd;g.Ze.prototype.publish=g.Ze.prototype.oa;g.Ze.prototype.clear=g.Ze.prototype.clear;g.p("ytPubsub2Pubsub2Instance",Lca,void 0);g.tl=g.r("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.tl,void 0);g.ul=g.r("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.ul,void 0);
g.vl=g.r("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.vl,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var pi=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.ea(si,g.li);g.ea(ti,g.li);var qba=new g.mi("aft-recorded",si),vba=new g.mi("timing-sent",ti);var uba,Ai,wl,Vi,sba,nba,rba,Si,ui,pba,wj,Tba;uba={vc:!0};
Ai={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};wl={};
Vi=(wl.ad_allowed="adTypesAllowed",wl.ad_at="adType",wl.ad_cpn="adClientPlaybackNonce",wl.ad_docid="adVideoId",wl.yt_ad_an="adNetworks",wl.p="httpProtocol",wl.t="transportProtocol",wl.cpn="clientPlaybackNonce",wl.csn="clientScreenNonce",wl.docid="videoId",wl.is_nav="isNavigation",wl.yt_lt="loadType",wl.yt_ad="isMonetized",wl.nr="webInfo.navigationReason",wl.ncnp="webInfo.nonPreloadedNodeCount",wl.paused="playerInfo.isPausedOnLoad",wl.fmt="playerInfo.itag",wl.yt_pl="watchInfo.isPlaylist",wl.yt_ad_pr=
"prerollAllowed",wl.yt_red="isRedSubscriber",wl.st="serverTimeMs",wl.vph="viewportHeight",wl.vpw="viewportWidth",wl.yt_vis="isVisible",wl);sba="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
nba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",
wn_comments:"LATENCY_ACTION_LOAD_COMMENTS","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"};rba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" ");
Si=!1;ui=!1;pba=(0,g.t)(pi.clearResourceTimings||pi.webkitClearResourceTimings||pi.mozClearResourceTimings||pi.msClearResourceTimings||pi.oClearResourceTimings||g.va,pi);wj=vi;Tba=zi;g.lj=xi;g.ea(cj,g.sd);g.h=cj.prototype;
g.h.jm=function(a){this.ob()||(this.kb=a=g.Ng(a),this.C=a.clone(),this.F=this.C.attrs.id||this.F,"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N),this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F),this.C.args.enablejsapi="1",this.C.args.playerapiid=this.N,this.ia||(this.ia=kj(this,this.C.args.jsapicallback||"onYouTubePlayerReady")),this.C.args.jsapicallback=null,(a=this.C.attrs.width)&&g.Fc(this.H,Number(a)||a),(a=this.C.attrs.height)&&g.Ec(this.H,Number(a)||a),wba(this),
this.K&&dj(this))};
g.h.ux=function(){return this.kb};
g.h.zC=function(){return this.K};
g.h.Yh=function(a,b){var c=this,d=kj(this,b);if(d){if(!g.Ia(this.sb,a)&&!this.D[a]){var e=yba(this,a);this.W&&this.W(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.K&&g.Af(function(){d(c.api)},0)}};
g.h.bL=function(a,b){if(!this.ob()){var c=kj(this,b);c&&g.$e(this.J,a,c)}};
g.h.Rv=function(a){g.F("a11y-announce",a)};
g.h.FG=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.h.GG=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.jy=function(){return this.la||(ej(this)?"html5":null)};
g.h.Rx=function(){return this.ab};
g.h.cancel=function(){if(this.R){var a=this.R,b=g.Lf(this.C.assets.js);window.spf.script.ignore(b,a)}g.Cf(this.pb);this.V=!1};
g.h.X=function(){hj(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.vf(b)}this.Ra=null;for(var a in this.D)g.n[this.D[a]]=null;this.kb=this.C=this.api=null;delete this.na;delete this.H;g.sd.prototype.X.call(this)};g.nj={};g.mj="player_uid_"+(1E9*Math.random()>>>0);var uj=null;g.xl=window.performance&&window.performance.memory;g.gk={};var Dj=0,zj=[],Cj=[],vj=0,Aj={},Bj={},xj=new g.Ie(Hba,1E3);var Jba=["server_prefetched_vast","vmap"];var Gj,Lj;g.Kj=null;Lj="";var Nj=null,Qj=[];var Uj,mk,lk,Wj,Vj,Pba,Sba,Qba,Rba,hk;Wj=0;Vj=0;Pba=[900,60,"waiting"];Sba=[500,99,"waiting"];Qba=[300,60,"waiting"];Rba=[400,99,"waiting"];hk=[300,101,"done"];var tk=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.tf,void 0);g.p("yt.pushConfigArray",uf,void 0);g.p("yt.getConfig",g.D,void 0);g.p("yt.config.set",g.tf,void 0);g.p("yt.config.pushArray",uf,void 0);g.p("yt.config.get",g.D,void 0);g.p("yt.hasMsg",g.ci,void 0);g.p("yt.setMsg",bi,void 0);g.p("yt.setGoogMsg",di,void 0);g.p("yt.msgs.has",g.ci,void 0);g.p("yt.msgs.set",bi,void 0);g.p("yt.msgs.setGoog",di,void 0);g.p("yt.pubsub.publish",g.F,void 0);g.p("yt.pubsub.subscribe",g.If,void 0);
g.p("ytcsi.tick",g.lj,void 0);g.v(wk,g.Wh);
wk.prototype.enable=function(){window.onload=Nba;window.onunload=Oba;window.onerror=Naa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Sj),window.addEventListener("spfhistory",Tj),window.addEventListener("spfrequest",Yj),window.addEventListener("spfpartprocess",ck),window.addEventListener("spfpartdone",dk),window.addEventListener("spfprocess",ek),window.addEventListener("spfdone",ik),window.addEventListener("spferror",jk),window.addEventListener("spfreload",
kk),window.addEventListener("spfjsbeforeunload",xk)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Vba),this.subscribe("dispose",Wba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
wk.prototype.init=function(){wk.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.D("PAGEFRAME_JS")){var b=g.D("PAGEFRAME_JS",void 0);var c=function(){var a=g.r("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.r("yt.www.masthead.loadSearchbox"))&&a();
a=g.D("JS_COMMON_MODULE");var d=g.D("JS_PAGE_MODULES");d||(d=[a]);a=g.D("JS_DELAY_LOAD",0);0<a?(g.Cf(this.D),this.D=g.Af(function(){b&&g.Mf(b,c);window.spf.script.require(d)},a)):(b&&g.Mf(b,c),window.spf.script.require(d));
g.p("yt.abuse.player.botguardInitialized",g.bg,void 0);g.p("yt.abuse.player.invokeBotguard",g.cg,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",g.Xf,void 0);g.p("yt.player.exports.navigate",g.ki,void 0);g.p("yt.util.activity.init",g.kh,void 0);g.p("yt.util.activity.getTimeSinceActive",g.mh,void 0);g.p("yt.util.activity.setTimestamp",g.ih,void 0);Mj(g.r("ytplayer.config"));g.r("ytspf.enabled")&&Lba();oba();g.D("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.Zf("service_worker_enabled")?kca():ica())};
wk.prototype.dispose=function(){g.Cf(this.D);var a=g.r("ytbin.www.pageframe.cancelSetup");a&&a();g.Df(Gj);if(a=g.Ij())a.removeEventListener("onReady",Hj),a.removeEventListener("onStateChange",Hj);Hi(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.E(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.Jg(a);wk.M.dispose.call(this)};
wk.prototype.disable=function(){wk.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Sj),window.removeEventListener("spfhistory",Tj),window.removeEventListener("spfrequest",Yj),window.removeEventListener("spfpartprocess",ck),window.removeEventListener("spfpartdone",dk),window.removeEventListener("spfprocess",ek),window.removeEventListener("spfdone",ik),window.removeEventListener("spferror",jk),window.removeEventListener("spfreload",kk),window.removeEventListener("spfjsbeforeunload",
xk));window.onload=null;window.onunload=null;window.onerror=null};
g.$h(new wk);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:17:37 Aug 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:36:24 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 94.697
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.058
  cdx.remote: 0.052
  esindex: 0.008
  LoadShardBlock: 71.405 (3)
  PetaboxLoader3.datanode: 67.495 (4)
  load_resource: 66.47
  PetaboxLoader3.resolve: 36.213
*/