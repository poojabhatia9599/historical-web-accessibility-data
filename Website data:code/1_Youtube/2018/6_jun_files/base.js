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

var _yt_www={};(function(g){var window=this;var fa,ka,ja,la,baa,na,pa,qa,daa,eaa,Wa,qb,naa,ub,paa,yc,zc,Kc,raa,Wc,Yc,Zc,ad,$c,bd,saa,ed,fd,taa,id,nd,od,rd,uaa,vaa,sd,td,Cd,xaa,Hd,Jd,Kd,Od,yaa,Sd,Zd,Yd,Aaa,be,ce,de,ee,Baa,fe,ge,ke,Caa,le,se,Ae,ye,ve,Eaa,De,Be,Ce,Ge,Daa,Faa,Le,Me,Qe,Gaa,Haa,Iaa,We,Ye,Kaa,cf,df,ef,Laa,hf,mf,nf,of,pf,qf,sf,xf,zf,Naa,Hf,Sf,Qaa,Yf,Tf,ag,Raa,Saa,ng,Taa,og,pg,Uaa,ug,sg,qg,wg,Dg,Ng,Og,aba,Ug,jh,ph,qh,bba,xh,yh,Fh,Eh,cba,Jh,Th,Xh,$h,bi,dba,gba,oi,pi,qi,ri,hba,Di,Fi,Ei,Ki,Gi,Li,Mi,Ni,kba,Ri,xi,yi,ti,Wi,nba,oba,zi,Ti,
vi,ui,wi,Zi,Bi,Oi,Ci,qba,Si,Qi,aj,cj,dj,fj,tba,ej,gj,uba,jj,bj,kj,vba,hj,ij,wba,rj,xba,Dba,Cba,Bba,yj,Aba,yba,zba,Eba,Fba,Hba,Iba,Mj,Hj,Jj,Oj,Jba,Pj,Rj,Kba,Lba,Sj,Tj,Yj,ck,dk,ek,ik,jk,kk,Sba,Tba,Zj,bk,Xj,Rba,ak,ok,qk,nk,rk,pk,Uba,Yba,Vba,aca,Xba,Wba,Zba,$ba,cca,uk,bca,sk,dca,fca,hca,gca,eca,vk,yk,zk,ca,Ak,Ca,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
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
pa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
qa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ra=function(a){return void 0!==a};
g.sa=function(a){return"string"==typeof a};
g.ta=function(a){return"boolean"==typeof a};
g.ua=function(a){return"number"==typeof a};
g.p=function(a,b,c){a=a.split(".");c=c||g.n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ra(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.r=function(a,b){for(var c=a.split("."),d=b||g.n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.va=function(){};
g.wa=function(a){a.zc=void 0;a.getInstance=function(){return a.zc?a.zc:a.zc=new a}};
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
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Xv=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
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
g.Ua=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Xa=function(a,b){for(var c=0,d=(0,g.Va)(String(a)).split("."),e=(0,g.Va)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Wa(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||Wa(0==l[2].length,0==m[2].length)||Wa(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Wa=function(a,b){return a<b?-1:a>b?1:0};
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
g.kb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<jb.length;f++)c=jb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
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
g.Eb=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Va)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Fb=function(a){return function(){return a}};
g.Gb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Ib=function(){this.C="";this.F=g.Hb};
g.Jb=function(a){var b=new g.Ib;b.C=a;return b};
g.Lb=function(){this.F="";this.D=Kb};
g.Mb=function(a){if(a instanceof g.Lb&&a.constructor===g.Lb&&a.D===Kb)return a.F;g.xa(a);return"type_error:SafeUrl"};
g.Pb=function(a){if(a instanceof g.Lb)return a;a=a.Ud?a.Tc():String(a);Nb.test(a)||(a="about:invalid#zClosurez");return g.Ob(a)};
g.Qb=function(a){if(a instanceof g.Lb)return a;a=a.Ud?a.Tc():String(a);Nb.test(a)||(a="about:invalid#zClosurez");return g.Ob(a)};
g.Ob=function(a){var b=new g.Lb;b.F=a;return b};
g.Sb=function(){this.C="";this.F=g.Rb};
g.Tb=function(a){var b=new g.Sb;b.C=a;return b};
g.Vb=function(){this.C="";this.F=g.Ub};
g.Wb=function(a){var b=new g.Vb;b.C=a;return b};
g.Yb=function(){this.F="";this.G=Xb;this.D=null};
g.Zb=function(a){if(a instanceof g.Yb&&a.constructor===g.Yb&&a.G===Xb)return a.F;g.xa(a);return"type_error:SafeHtml"};
g.ac=function(a){if(a instanceof g.Yb)return a;var b=null;a.Jl&&(b=a.C());a=g.Ua(a.Ud?a.Tc():String(a));return g.$b(a,b)};
g.$b=function(a,b){var c=new g.Yb;c.F=a;c.D=b;return c};
g.bc=function(a,b){var c=b instanceof g.Lb?b:g.Qb(b);a.href=g.Mb(c)};
g.cc=function(a,b){var c=b instanceof g.Lb?b:g.Qb(b);a.href=g.Mb(c)};
g.dc=function(a,b){return g.$b(b,null)};
g.ec=function(a,b){this.x=g.ra(a)?a:0;this.y=g.ra(b)?b:0};
g.fc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.gc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.hc=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.sa(a)?window.document.getElementById(a):a};
g.ic=function(a){var b=window.document;return g.sa(a)?b.getElementById(a):a};
g.kc=function(a,b){g.ab(b,function(b,d){b&&b.Ud&&(b=b.Tc());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:jc.hasOwnProperty(d)?a.setAttribute(jc[d],b):g.Oa(d,"aria-")||g.Oa(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.mc=function(a){return g.lc(a||window)};
g.lc=function(a){a=a.document;a=g.nc(a)?a.documentElement:a.body;return new g.hc(a.clientWidth,a.clientHeight)};
g.pc=function(a,b,c){return g.oc(window.document,arguments)};
g.oc=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ua(d.name),'"');if(d.type){c.push(' type="',g.Ua(d.type),'"');var e={};g.kb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.sa(d)?c.className=d:g.ya(d)?c.className=d.join(" "):g.kc(c,d));2<b.length&&g.qc(a,c,b,2);return c};
g.qc=function(a,b,c,d){function e(c){c&&b.appendChild(g.sa(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.za(f)||g.Ba(f)&&0<f.nodeType?e(f):(0,g.z)(paa(f)?g.Ma(f):f,e)}};
g.nc=function(a){return"CSS1Compat"==a.compatMode};
g.rc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.sc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.tc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Ba(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Aa(a))return"function"==typeof a.item}return!1};
g.uc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.vc=function(a){try{return!!a&&null!=a.location.href&&g.tb(a,"foo")}catch(b){return!1}};
g.wc=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.xc=function(a){var b=[];g.wc(a,function(a){b.push(a)});
return b};
yc=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)};
zc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)};
g.Ac=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Bc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Cc=function(a,b){a.style.height=g.Bc(b,!0)};
g.Dc=function(a,b){a.style.width=g.Bc(b,!0)};
g.Ec=function(a,b){var c=!1,d=!1;d=void 0===d?!1:d;c=void 0===c?!1:c;g.n.google_image_requests||(g.n.google_image_requests=[]);var e=g.n.document.createElement("img");if(b||c){var f=function(a){b&&b(a);c&&g.La(g.n.google_image_requests,e);zc(e,"load",f);zc(e,"error",f)};
yc(e,"load",f);yc(e,"error",f)}d&&(e.referrerPolicy="no-referrer");e.src=a;g.n.google_image_requests.push(e)};
g.Fc=function(a){return!!a.google_async_iframe_id};
g.Jc=function(){if(Gc&&!g.vc(Hc)){var a="."+g.Ic.domain;try{for(;2<a.split(".").length&&!g.vc(Hc);)g.Ic.domain=a=a.substr(a.indexOf(".")+1),Hc=window.parent}catch(b){}g.vc(Hc)||(Hc=window)}return Hc};
Kc=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
g.Lc=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.Mc=function(a){return a.match(qaa)};
g.Nc=function(a){return a?(0,window.decodeURI)(a):a};
g.Oc=function(a){return g.Nc(g.Mc(a)[3]||null)};
g.Pc=function(a){a=g.Mc(a);return g.Lc(null,null,null,null,a[5],a[6],a[7])};
g.Qc=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.Rc=function(a,b,c){if(g.ya(b))for(var d=0;d<b.length;d++)g.Rc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ra(b)))};
g.Sc=function(a){var b=[],c;for(c in a)g.Rc(c,a[c],b);return b.join("&")};
g.Vc=function(a,b){var c=g.Sc(b);return g.Qc(a,c)};
g.Xc=function(a){var b=a||g.n,c=[],d=null;do{var e=b;if(g.vc(e)){var f=e.location.href;d=e.document&&e.document.referrer||null}else f=d,d=null;c.push(new Wc(f||"",e));try{b=e.parent}catch(k){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||g.n;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.wq=!0);return c};
raa=function(a,b){this.C=a;this.F=b};
Wc=function(a,b,c){this.url=a;this.Kg=b;this.wq=!!c;this.depth=g.ua(void 0)?void 0:null};
Yc=function(){this.D="&";this.G=g.ra(void 0)?void 0:"trn";this.H=!1;this.F={};this.L=0;this.C=[]};
Zc=function(a,b){var c={};c[a]=b;return[c]};
ad=function(a,b,c,d,e){var f=[];g.wc(a,function(a,l){var k=$c(a,b,c,d,e);k&&f.push(l+"="+k)});
return f.join(b)};
$c=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],k=0;k<a.length;k++)f.push($c(a[k],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(ad(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
bd=function(a,b,c,d){a.C.push(b);a.F[b]=Zc(c,d)};
saa=function(a){if(!a.G)return 4E3;var b=1,c;for(c in a.F)b=c.length>b?c.length:b;return 4E3-a.G.length-b-a.D.length-1};
g.cd=function(a,b,c,d,e){if(Math.random()<(d||a.C))try{if(c instanceof Yc)var f=c;else f=new Yc,g.wc(c,function(a,b){var c=f,d=c.L++,e=Zc(b,a);c.C.push(d);c.F[d]=e});
var k=f.getUrl(a.G,a.F,a.D+b+"&","");k&&("undefined"===typeof e?g.Ec(k,void 0):g.Ec(k,e))}catch(l){}};
ed=function(){var a=g.n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.dd)()};
fd=function(){var a=void 0===a?g.n:a;return(a=a.performance)&&a.now?a.now():null};
taa=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
id=function(){var a=gd;this.events=[];this.F=a||g.n;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.C=hd()||(null!=b?b:1>Math.random())};
g.kd=function(a){a&&jd&&hd()&&(jd.clearMarks("goog_"+a.uniqueId+"_start"),jd.clearMarks("goog_"+a.uniqueId+"_end"))};
nd=function(){var a=ld;this.D=g.md;this.G=this.F;this.C=void 0===a?null:a};
g.qd=function(a){return new od(g.pd(a),a.fileName,a.lineNumber)};
g.pd=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
od=function(a,b,c){Kc.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
rd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
uaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=q=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var q=l^d&(f^l);var w=1518500249}else q=d^f^l,w=1859775393;else 60>c?(q=d&f|l&(d|f),w=2400959708):(q=d^f^l,w=3395469782);q=((a<<5|a>>>27)&4294967295)+q+m+w+b[c]&4294967295;m=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=q}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==q)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[q++]=a[d++],w++,64==q)for(q=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>q?c(l,56-q):c(l,64-(q-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,w;a();return{reset:a,update:c,digest:d,xw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
vaa=function(a,b,c){var d=[],e=[];if(1==(g.ya(c)?2:1))return e=[b,a],(0,g.z)(d,function(a){e.push(a)}),sd(e.join(" "));
var f=[],k=[];(0,g.z)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ja(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.z)(d,function(a){e.push(a)});
a=sd(e.join(" "));a=[c,a];g.Ja(k)||a.push(k.join(""));return a.join("_")};
sd=function(a){var b=uaa();b.update(a);return b.xw().toLowerCase()};
td=function(a){var b=rd(String(g.n.location.href)),c=g.n.__OVERRIDE_SID;null==c&&(c=(new g.Db(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.n.__SAPISID:g.n.__APISID,null==b&&(b=(new g.Db(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.n.location.href);return d&&b&&c?[c,vaa(rd(d),b,a||null)].join(" "):null}return null};
g.ud=function(){this.Fc=this.Fc;this.dc=this.dc};
g.xd=function(a,b){g.vd(a,g.u(g.wd,b))};
g.vd=function(a,b){a.Fc?g.ra(void 0)?b.call(void 0):b():(a.dc||(a.dc=[]),a.dc.push(g.ra(void 0)?(0,g.t)(b,void 0):b))};
g.wd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.yd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.kt=!0};
g.zd=function(a){var b=g.r("window.location.href");if(g.sa(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.n.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
Cd=function(a){return g.Ad?"webkit"+a:g.Bd?"o"+a.toLowerCase():a.toLowerCase()};
g.Dd=function(a,b){g.yd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.xc=null;a&&this.init(a,b)};
g.Gd=function(a){return!(!a||!a[Fd])};
xaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.oh=e;this.key=++waa;this.Cg=this.li=!1};
Hd=function(a){a.Cg=!0;a.listener=null;a.C=null;a.src=null;a.oh=null};
g.Id=function(a){this.src=a;this.listeners={};this.C=0};
Jd=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.La(a.listeners[c],b);d&&(Hd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Kd=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Cg&&f.listener==b&&f.capture==!!c&&f.oh==d)return e}return-1};
g.Md=function(a,b,c,d,e){if(d&&d.once)return g.Ld(a,b,c,d,e);if(g.ya(b)){for(var f=0;f<b.length;f++)g.Md(a,b[f],c,d,e);return null}c=g.Nd(c);return g.Gd(a)?a.O(b,c,g.Ba(d)?!!d.capture:!!d,e):Od(a,b,c,!1,d,e)};
Od=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ba(e)?!!e.capture:!!e,l=g.Pd(a);l||(a[Qd]=l=new g.Id(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=yaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)zaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Sd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Td++;return c};
yaa=function(){var a=Aaa,b=Ud?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Ld=function(a,b,c,d,e){if(g.ya(b)){for(var f=0;f<b.length;f++)g.Ld(a,b[f],c,d,e);return null}c=g.Nd(c);return g.Gd(a)?a.Oe(b,c,g.Ba(d)?!!d.capture:!!d,e):Od(a,b,c,!0,d,e)};
g.Vd=function(a,b,c,d,e){if(g.ya(b))for(var f=0;f<b.length;f++)g.Vd(a,b[f],c,d,e);else d=g.Ba(d)?!!d.capture:!!d,c=g.Nd(c),g.Gd(a)?a.Va(b,c,d,e):a&&(a=g.Pd(a))&&(b=a.qf(b,c,d,e))&&g.Wd(b)};
g.Wd=function(a){if(g.ua(a)||!a||a.Cg)return!1;var b=a.src;if(g.Gd(b))return Jd(b.xd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Sd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Td--;(c=g.Pd(b))?(Jd(c,a),0==c.C&&(c.src=null,b[Qd]=null)):Hd(a);return!0};
Sd=function(a){return a in Xd?Xd[a]:Xd[a]="on"+a};
Zd=function(a,b,c,d){var e=!0;if(a=g.Pd(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Cg&&(f=Yd(f,d),e=e&&!1!==f)}return e};
Yd=function(a,b){var c=a.listener,d=a.oh||a.src;a.li&&g.Wd(a);return c.call(d,b)};
Aaa=function(a,b){if(a.Cg)return!0;if(!Ud){var c=b||g.r("window.event"),d=new g.Dd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Zd(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Zd(c[k],f,!1,d),e=e&&l}return e}return Yd(a,new g.Dd(b,
this))};
g.Pd=function(a){a=a[Qd];return a instanceof g.Id?a:null};
g.Nd=function(a){if(g.Aa(a))return a;a[$d]||(a[$d]=function(b){return a.handleEvent(b)});
return a[$d]};
g.ae=function(){g.ud.call(this);this.xd=new g.Id(this);this.Gv=this;this.xm=null};
be=function(a,b,c,d){b=a.xd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Cg&&k.capture==c){var l=k.listener,m=k.oh||k.src;k.li&&Jd(a.xd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.kt};
ce=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
de=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
ee=function(a){g.n.setTimeout(function(){throw a;},0)};
Baa=function(){var a=g.n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.$a("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.mb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ra(c.next)){c=c.next;var a=c.Zn;c.Zn=null;a()}};
return function(a){d.next={Zn:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.n.setTimeout(a,0)}};
fe=function(){this.F=this.C=null};
ge=function(){this.next=this.scope=this.jc=null};
ke=function(a,b){he||Caa();ie||(he(),ie=!0);je.add(a,b)};
Caa=function(){if(g.n.Promise&&g.n.Promise.resolve){var a=g.n.Promise.resolve(void 0);he=function(){a.then(le)}}else he=function(){var a=le;
!g.Aa(g.n.setImmediate)||g.n.Window&&g.n.Window.prototype&&!g.$a("Edge")&&g.n.Window.prototype.setImmediate==g.n.setImmediate?(me||(me=Baa()),me(a)):g.n.setImmediate(a)}};
le=function(){for(var a;a=je.remove();){try{a.jc.call(a.scope)}catch(b){ee(b)}de(ne,a)}ie=!1};
g.oe=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.pe=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.re=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.va)try{var c=this;a.call(b,function(a){g.qe(c,2,a)},function(a){g.qe(c,3,a)})}catch(d){g.qe(this,3,d)}};
se=function(){this.next=this.context=this.onRejected=this.D=this.C=null;this.F=!1};
g.ue=function(a,b,c){var d=te.get();d.D=a;d.onRejected=b;d.context=c;return d};
g.we=function(a,b,c){ve(a,b,c,null)||ke(g.u(b,a))};
g.xe=function(a){return new g.re(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],g.we(m,g.u(f,l),k);
else b(e)})};
g.ze=function(a,b){return ye(a,null,b,void 0)};
Ae=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.F||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Ae(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Be(c),Ce(c,e,3,b)))}a.D=null}else g.qe(a,3,b)};
g.Ee=function(a,b){a.F||2!=a.C&&3!=a.C||De(a);a.G?a.G.next=b:a.F=b;a.G=b};
ye=function(a,b,c,d){var e=g.ue(null,null,null);e.C=new g.re(function(a,k){e.D=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){k(q)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!g.ra(e)&&b instanceof g.Fe?k(b):a(e)}catch(q){k(q)}}:k});
e.C.D=a;g.Ee(a,e);return e.C};
g.qe=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,ve(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,De(a),3!=b||c instanceof g.Fe||Daa(a,c)))};
ve=function(a,b,c,d){if(a instanceof g.re)return g.Ee(a,g.ue(b||g.va,c||null,d)),!0;if(g.pe(a))return a.then(b,c,d),!0;if(g.Ba(a))try{var e=a.then;if(g.Aa(e))return Eaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Eaa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
De=function(a){a.L||(a.L=!0,ke(a.J,a))};
Be=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Ce=function(a,b,c,d){if(3==c&&b.onRejected&&!b.F)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Ge(b,c,d);else try{b.F?b.D.call(b.context):Ge(b,c,d)}catch(e){He.call(null,e)}de(te,b)};
Ge=function(a,b,c){2==b?a.D.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Daa=function(a,b){a.H=!0;ke(function(){a.H&&He.call(null,b)})};
g.Fe=function(a){g.Ea.call(this,a)};
g.Ie=function(a,b,c){if(g.Aa(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.n.setTimeout(a,b||0)};
g.Je=function(a){g.n.clearTimeout(a)};
g.Ke=function(a,b,c){g.ud.call(this);this.C=a;this.D=b||0;this.F=c;this.wc=(0,g.t)(this.mp,this)};
Faa=function(){this.F=-1};
Le=function(){this.F=64;this.C=[];this.L=[];this.R=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
Me=function(a,b,c){c||(c=0);var d=a.R;if(g.sa(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):(f=c^k^l,
q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.Ne=function(a){if(a.classList)return a.classList;a=a.className;return g.sa(a)&&a.match(/\S+/g)||[]};
g.A=function(a,b){return a.classList?a.classList.contains(b):g.Ia(g.Ne(a),b)};
g.Oe=function(){};
Qe=function(a){if(a instanceof g.Oe)return a;if("function"==typeof a.dd)return a.dd(!1);if(g.za(a)){var b=0,c=new g.Oe;c.next=function(){for(;;){if(b>=a.length)throw g.Pe;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Re=function(a,b,c){if(g.za(a))try{(0,g.z)(a,b,c)}catch(d){if(d!==g.Pe)throw d;}else{a=Qe(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Pe)throw d;}}};
Gaa=function(a){if(g.za(a))return g.Ma(a);a=Qe(a);var b=[];g.Re(a,function(a){b.push(a)});
return b};
g.Te=function(a,b){this.F={};this.C=[];this.Ve=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.Se(this,a)};
Haa=function(a,b){return a===b};
g.Ve=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.Ue(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.Ue(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.Se=function(a,b){if(b instanceof g.Te)for(var c=b.Hc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.Ue=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.Xe=function(a){var b=[];We(new Iaa,a,b);return b.join("")};
Iaa=function(){};
We=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),We(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ye(d,c),c.push(":"),We(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ye(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Ye=function(a,b){b.push('"',a.replace(Jaa,function(a){var b=Ze[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ze[a]=b);return b}),'"')};
g.$e=function(a){g.ud.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.af=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ga(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.sd(b)}};
Kaa=function(a,b,c){ke(function(){a.apply(b,c)})};
g.bf=function(a){this.C=a};
cf=function(a){this.C=a};
df=function(a){this.data=a};
ef=function(a){return!g.ra(a)||a instanceof df?a:new df(a)};
g.ff=function(a){this.C=a};
g.gf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.dd)()||!!b&&b>(0,g.dd)()};
Laa=function(){};
hf=function(){};
g.jf=function(a){this.C=a};
g.kf=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
mf=function(a,b){this.F=a;this.C=null;if(g.B&&!g.yb(9)){lf||(lf=new g.Te);this.C=lf.get(a);this.C||(b?this.C=window.document.getElementById(b):(this.C=window.document.createElement("userdata"),this.C.addBehavior("#default#userData"),window.document.body.appendChild(this.C)),lf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
nf=function(a){return"_"+(0,window.encodeURIComponent)(a).replace(/[.!~*'()%]/g,function(a){return Maa[a]})};
of=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
pf=function(a){return a.C.XMLDocument.documentElement};
qf=function(a,b){this.F=a;this.C=b+"::"};
g.rf=function(a){var b=new g.kf;return b.isAvailable()?a?new qf(b,a):b:null};
sf=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.uf=function(a){sf(g.tf,arguments)};
xf=function(a,b){var c=g.C(a,void 0);c?c.push(b):g.uf(a,[b])};
g.C=function(a,b){return a in g.tf?g.tf[a]:b};
zf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.yf(b)}}:a};
g.yf=function(a,b,c,d,e){var f=g.r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.C("ERRORS",[]),f.push([a,b,c,d,e]),g.uf("ERRORS",f))};
g.Af=function(a){g.yf(a,"WARNING",void 0,void 0,void 0)};
Naa=function(a,b,c,d,e){var f=!1,k;if((k=(k=g.tf.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.sa(a)?f=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.yf(e))};
g.D=function(a,b){return a?a.dataset?a.dataset[g.Bf(b)]:a.getAttribute("data-"+b):null};
g.Bf=function(a){return Cf[a]||(Cf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Df=function(a,b){g.Aa(a)&&(a=zf(a));return window.setTimeout(a,b)};
g.Ef=function(a,b){g.Aa(a)&&(a=zf(a));return window.setInterval(a,b)};
g.Ff=function(a){window.clearTimeout(a)};
g.Gf=function(a){window.clearInterval(a)};
g.Lf=function(a,b,c){var d=Hf();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){If[e]&&b.apply(c||window,d)};
try{Jf[a]?k():g.Df(k,0)}catch(l){g.yf(l)}},c);
If[e]=!0;Kf[a]||(Kf[a]=[]);Kf[a].push(e);return e}return 0};
g.Mf=function(a){var b=Hf();b&&(g.ua(a)?a=[a]:g.sa(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.z)(a,function(a){b.unsubscribeByKey(a);delete If[a]}))};
g.E=function(a,b){var c=Hf();return c?c.publish.apply(c,arguments):!1};
g.Nf=function(a,b){Jf[a]=!0;var c=Hf();c=c?c.publish.apply(c,arguments):!1;Jf[a]=!1;return c};
Hf=function(){return g.r("ytPubsubPubsubInstance")};
g.Pf=function(a,b){var c=g.Of(a);window.spf.script.load(a,c,b)};
g.Qf=function(a){a=g.Of(a);window.spf.script.unload(a)};
g.Of=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Oaa,""),b=b.replace(Paa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.Rf=function(){this.F=!1;this.C=null};
Sf=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.Af(d)}c&&c(b)};
Qaa=function(){};
g.Uf=function(a,b){return Tf(a,0,b)};
g.Vf=function(a,b){return Tf(a,1,b)};
g.Xf=function(a){for(var b=0,c=a.length;b<c;b++)g.Wf(a[b])};
Yf=function(){};
g.Zf=function(){return!!g.r("yt.scheduler.instance")};
Tf=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Df(a,c||0)};
g.Wf=function(a){if(!(0,window.isNaN)(a)){var b=g.r("yt.scheduler.instance.cancelJob");b?b(a):g.Ff(a)}};
g.$f=function(){return(0,window.parseInt)(g.C("DCLKSTAT",0),10)};
g.bg=function(a){return!!ag(a)};
g.cg=function(a){return Number(ag(a)||0)};
ag=function(a){return g.C("EXPERIMENT_FLAGS",{})[a]};
g.eg=function(){return g.dg.Gf()};
g.fg=function(){return g.dg.invoke()};
Raa=function(){if(!gg)return null;var a=gg();return"open"in a?a:null};
g.ig=function(a){switch(g.hg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.hg=function(a){return a&&"status"in a?a.status:-1};
g.jg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Sa(e[0]||"");e=g.Sa(e[1]||"");f in b?g.ya(b[f])?g.Na(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.lg=function(a,b){return g.kg(a,b||{},!0)};
g.kg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.jg(e[1]||"");for(var f in b)if(c||!g.cb(e,f))e[f]=b[f];return g.Vc(a,e)+d};
Saa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.Mc(a)[1]||null,e=g.Oc(a);d&&e?(d=c,c=g.Mc(a),d=g.Mc(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.Oc(c)==e&&(Number(g.Mc(c)[4]||null)||null)==(Number(g.Mc(a)[4]||null)||null):!0;for(var f in mg)(d=g.C(mg[f]))&&(c||ng(a,f))&&(b[f]=d);if(c||ng(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b};
ng=function(a,b){var c=g.C("CORS_HEADER_WHITELIST")||{},d=g.Oc(a);return d?(c=c[d])?g.Ia(c,b):!1:!0};
Taa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=og(a,b);var d=pg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.Ff(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.n;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Ya&&b.Ya.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Cr&&0<b.timeout&&(f=g.Df(function(){e||(e=!0,g.Ff(f),b.Cr.call(b.context||g.n))},b.timeout))}else g.F(a,b)};
g.F=function(a,b){var c=b.format||"JSON";a=og(a,b);var d=pg(a,b),e=!1,f,k=qg(a,function(a){if(!e){e=!0;f&&g.Ff(f);var d=g.ig(a),k=null;if(d||400<=a.status&&500>a.status)k=Uaa(c,a,b.nb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.n;d?b.onSuccess&&b.onSuccess.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Ya&&b.Ya.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Mc&&0<b.timeout&&(f=g.Df(function(){e||(e=!0,k.abort(),g.Ff(f),b.Mc.call(b.context||g.n,k))},b.timeout));
return k};
og=function(a,b){b.fB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.C("XSRF_FIELD_NAME",void 0),d=b.za;d&&(d[c]&&delete d[c],a=g.lg(a,d));return a};
pg=function(a,b){var c=g.C("XSRF_FIELD_NAME",void 0),d=g.C("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ha,k=g.C("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Nw||g.Oc(a)&&!b.withCredentials&&g.Oc(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ha&&b.ha[k]||(f||(f={}),f[c]=d);f&&g.sa(e)&&(e=g.jg(e),g.kb(e,f),e=b.Fs&&"JSON"==b.Fs?JSON.stringify(e):g.Sc(e));f=e||f&&!g.eb(f);!rg&&f&&"POST"!=b.method&&(rg=!0,g.yf(Error("AJAX request with postData should use POST")));
return e};
Uaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?sg(b):null)d={},(0,g.z)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.tg(a)})}c&&ug(d);
return d};
ug=function(a){if(g.Ba(a))for(var b in a)"html_content"==b||g.Pa(b,"_html")?a[b]=g.dc(g.Jb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):ug(a[b])};
sg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.tg=function(a){var b="";(0,g.z)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.vg=function(a,b){b.method="POST";b.ha||(b.ha={});return g.F(a,b)};
qg=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&zf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Raa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof window.FormData));if(e=Saa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
wg=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.xg=function(a){var b=new wg;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.yg=function(a){var b=new wg;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.Ag=function(a){var b=a.__yt_uid_key;b||(b=zg(),a.__yt_uid_key=b);return b};
g.Bg=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Vaa+"VisibilityState";if(b in a)return a[b]};
g.Cg=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Waa||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
Dg=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Eg=function(a){g.ra(a.C)||Dg(a);return a.C};
g.Fg=function(a){g.ra(a.F)||Dg(a);return a.F};
g.Hg=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.db(Gg,function(e){var f=g.ta(e[4])&&e[4]==!!d,k=g.Ba(e[4])&&g.Ba(d)&&g.hb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.G=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Hg(a,b,c,d);if(e)return e;e=++Ig.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.Cg(d);if(!g.uc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.Cg(b);
b.currentTarget=a;return c.call(a,b)};
k=zf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),Jg()||g.ta(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);Gg[e]=[a,b,c,k,d];return e};
g.H=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.z)(a,function(a){if(a in Gg){var b=Gg[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Jg()||g.ta(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Gg[a]}}))};
g.Kg=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.G(a,b,function(){g.H(e);c.apply(a,arguments)},d)};
g.Lg=function(a){for(var b in Gg)Gg[b][0]==a&&g.H(b)};
g.Mg=function(a){this.wc=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.G(window,"mousemove",(0,g.t)(this.W,this));this.N=g.Ef((0,g.t)(this.R,this),25)};
Ng=function(){g.ud.call(this);this.C=[]};
Og=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.ib(Xaa);this.assets=a.assets||{};this.attrs=a.attrs||g.ib(Yaa);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Pg=function(a){a instanceof Og||(a=new Og(a));return a};
g.Sg=function(a,b,c,d,e,f){f=f||{};f.name=c||g.C("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Qg||(c=a.stacktrace,d=a.columnNumber,a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params)),a=g.zd(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),Rg[a.message]||0<=c.indexOf("/YouTubeCenter.js")||
0<=c.indexOf("/mytube.js")))){b={za:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":f.name},ha:{url:g.C("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ha.stack=c);for(var k in f)b.ha["client."+k]=f[k];if(k=g.C("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ha[l]=k[l];g.F(g.C("ECATCHER_REPORT_HOST","")+"/error_204",b);Rg[a.message]=!0;Qg++}};
g.Yg=function(a,b){if(a.si){var c=a.si;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Tg[a.si.token]=d;c=Ug(a.endpoint,a.si.token)}else c=Ug(a.endpoint);c.push(a.payload);Vg[a.endpoint]=new b;c.length>=(g.cg("web_logging_max_batch")||20)?g.Wg():g.Xg()};
g.Wg=function(){g.Ff(g.Zg);if(!g.eb(g.$g)){for(var a in g.$g){var b=Vg[a];if(b){var c=void 0,d=a,e=b,f=Zaa[d],k=ah[d]||{};ah[d]=k;b=Math.round(g.bh());for(c in g.$g[d]){var l={context:g.ch(e.C)};l[f]=Ug(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;var m=Tg[c];if(m)a:{var q=l,w=c;if(m.videoId)var y="VIDEO";else if(m.playlistId)y="PLAYLIST";else break a;q.credentialTransferTokenTargetId=m;q.context=q.context||{};q.context.user=q.context.user||{};q.context.user.credentialTransferTokens=
[{token:w,scope:y}]}delete Tg[c];m=l;m.requestTimeMs=b;(y=g.C("EVENT_ID",void 0))&&g.bg("enable_gel_web_client_event_id")&&(q=(g.C("BATCH_CLIENT_COUNTER",void 0)||0)+1,q>$aa&&(q=1),g.uf("BATCH_CLIENT_COUNTER",q),m.serializedClientEventId={serializedEventId:y,clientCounter:q});g.dh(e,d,l,{retry:!0})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.$g[a]}}g.eb(g.$g)||
g.Xg()}};
aba=function(){var a=[];for(e in g.$g){var b=ah[e]||{};ah[e]=b;for(var c in g.$g[e]){var d=Ug(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.bh());for(var f in ah)b=ah[f],b.eventType=f in eh?eh[f]:"UNKNOWN_TYPE",c=fh[f],b.metricIntervalMs=c?e-c:e-g.gh,a.push(b),fh[f]=e,delete ah[f];return a};
g.Xg=function(){g.Ff(g.Zg);g.Zg=g.Df(g.Wg,g.C("LOGGING_BATCH_TIMEOUT",g.hh||1E4))};
Ug=function(a,b){b=void 0===b?"":b;g.$g[a]=g.$g[a]||{};g.$g[a][b]=g.$g[a][b]||[];return g.$g[a][b]};
g.kh=function(a){var b=void 0===a?{}:a;a=void 0===b.gB?!0:b.gB;b=void 0===b.RI?!1:b.RI;if(null==g.r("_lact",window)){var c=(0,window.parseInt)(g.C("LACT"),10);c=(0,window.isFinite)(c)?(0,g.dd)()-Math.max(c,0):-1;g.p("_lact",c,window);g.p("_fact",c,window);-1==c&&g.ih();g.G(window.document,"keydown",g.ih);g.G(window.document,"keyup",g.ih);g.G(window.document,"mousedown",g.ih);g.G(window.document,"mouseup",g.ih);a&&(b?g.G(window,"touchmove",function(){jh("touchmove",200)},{passive:!0}):(g.G(window,
"resize",function(){jh("resize",200)}),g.G(window,"scroll",function(){jh("scroll",200)})));
new g.Mg(function(){jh("mouse",100)});
g.G(window.document,"touchstart",g.ih,{passive:!0});g.G(window.document,"touchend",g.ih,{passive:!0})}};
jh=function(a,b){lh[a]||(lh[a]=!0,g.Vf(function(){g.ih();lh[a]=!1},b))};
g.ih=function(){null==g.r("_lact",window)&&g.kh();var a=(0,g.dd)();g.p("_lact",a,window);-1==g.r("_fact",window)&&g.p("_fact",a,window);(a=g.r("ytglobal.ytUtilActivityCallback_"))&&a()};
g.mh=function(){var a=g.r("_lact",window);return null==a?-1:Math.max((0,g.dd)()-a,0)};
g.oh=function(a,b,c,d){var e=g.nh,f={};f.eventTimeMs=Math.round(c||g.bh());f[a]=b;f.context={lastActivityMs:String(c?-1:g.mh())};g.Yg({endpoint:"log_event",payload:f,si:d},e)};
g.ch=function(a){a={client:{hl:a.kB,gl:a.jB,clientName:a.iB,clientVersion:a.innertubeContextClientVersion}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.C("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.C("DELEGATED_SESSION_ID")});return a};
ph=function(a,b){var c={"X-Goog-Visitor-Id":g.C("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return c;var d;a?d="Bearer "+g.r("gapi.auth.getToken")().ZY:d=td([]);d&&(c.Authorization=d,c["X-Goog-AuthUser"]=g.C("SESSION_INDEX",0));return c};
qh=function(a){a=Object.assign({},a);delete a.Authorization;var b=td();if(b){var c=new Le;c.update(g.C("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();g.za(b);g.Cb();c=Bb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],k=e+1<b.length,l=k?b[e+1]:0,m=e+2<b.length,q=m?b[e+2]:0,w=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[w],c[f],c[l],c[q])}b=d.join("");a.hash=b}return a};
g.th=function(a,b,c,d){g.rh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.uh=function(a,b,c){g.rh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.vh=function(a){var b;(b=g.rf(a))||(a=new mf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.ff(a):null;this.F=window.document.domain||window.location.hostname};
bba=function(a,b,c,d){if(d)return null;d=wh.get("nextId",!0)||1;var e=wh.get("requests",!0)||{};e[d]={method:a,request:b,authState:qh(c),requestTime:Math.round(g.bh())};wh.set("nextId",d+1,86400,!0);wh.set("requests",e,86400,!0);return d};
xh=function(a){var b=wh.get("requests",!0)||{};delete b[a];wh.set("requests",b,86400,!0)};
yh=function(a){var b=wh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.bh())-d.requestTime)){var e=d.authState,f=qh(ph(!1));g.hb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.bh())),g.dh(a,d.method,e,{}));delete b[c]}}wh.set("requests",b,86400,!0)}};
g.nh=function(a){var b=this;this.C=a||{innertubeApiKey:g.C("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.C("INNERTUBE_API_VERSION",void 0),iB:g.C("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),kB:g.C("INNERTUBE_CONTEXT_HL",void 0),jB:g.C("INNERTUBE_CONTEXT_GL",void 0),lB:g.C("INNERTUBE_HOST_OVERRIDE",void 0)||"",mB:!!g.C("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.Uf(function(){yh(b)},5E3)};
g.dh=function(a,b,c,d){!g.C("VISITOR_DATA")&&.01>Math.random()&&g.yf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ha:c,Fs:"JSON",Mc:function(){d.Mc()},
Cr:d.Mc,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
xj:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Br:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.lB;k&&(f=k);k=a.C.mB||!1;var l=ph(k,f);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=""+f+("/youtubei/"+a.C.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.C.innertubeApiKey,q;if(d.retry&&g.bg("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(q=bba(b,c,l,k))){var w=e.onSuccess,y=e.xj;e.onSuccess=function(a,b){xh(q);w(a,b)};
c.xj=function(a,b){xh(q);y(a,b)}}try{g.bg("use_fetch_for_op_xhr")?Taa(m,e):g.vg(m,e)}catch(I){if("InvalidAccessError"==I)q&&(xh(q),q=0),g.yf(Error("An extension is blocking network request."),"WARNING");
else throw I;}q&&g.Uf(function(){yh(a)},5E3)};
g.zh=function(a,b,c){g.oh(a,b,c,void 0)};
g.Ah=function(){g.bg("log_web_meta")&&aba().forEach(function(a){g.zh("delayedEventMetricCaptured",a)})};
g.Bh=function(a){this.C=a};
g.Ch=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.Ch(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.Dh=function(a,b,c){(0,g.z)(b,function(b){g.oh("visualElementHidden",{csn:a,ve:g.Ch(b),eventType:c?16:8})})};
Fh=function(a,b){var c=Object.keys(a).join("");Eh("info_"+c+"_"+b)||(a.clientActionNonce=b,g.zh("latencyActionInfo",a))};
Eh=function(a){Gh[a]=Gh[a]||{count:0};var b=Gh[a];b.count++;b.time=g.bh();Hh||(Hh=g.Uf(cba,5E3));return 10<b.count?(11==b.count&&g.Sg(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
cba=function(){var a=g.bh(),b;for(b in Gh)6E4<a-Gh[b].time&&delete Gh[b];Hh=0};
Jh=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.dd)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ih)for(a=1,b=0;b<Ih.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ih.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Oh=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Kh==a)return;Kh=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.mh()>b)&&"visible"==g.Bg()){b=-1;g.Lh&&(b=Math.round(g.bh()-g.Lh));var c=String;var d=g.r("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.dd)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.Mh,index:String(Nh),lastEventDeltaMs:String(b),trigger:a};g.oh("foregroundHeartbeat",
a);g.p("_fact",-1,window);Nh++;g.Lh=g.bh()}};
g.Ph=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
g.Qh=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
g.Rh=function(){var a=g.C(g.Qh(0),void 0),b;a?b=new g.Bh({veType:a,youtubeData:void 0}):b=null;return b};
g.Sh=function(){var a=void 0===a?0:a;var b=g.C(g.Ph(a));b||0!=a||(b=g.C("EVENT_ID"));return b?b:null};
Th=function(){var a=g.Rh(),b=g.Sh();b&&a&&g.Dh(b,[a],!0)};
g.Uh=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?zf(d):null;this.H=e?zf(e):null;this.G=[];this.C=this.F=0};
g.Vh=function(a){g.Wf(a.F);a.F=g.Vf((0,g.t)(a.init,a))};
g.Yh=function(a){a.name in Wh&&Xh(a.name);Wh[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.z)(a.deps,function(b){if(!(b in Wh))throw Error("Module "+b+" required by "+a.name);Wh[b].reqs.push(a.name)});
a.enable()};
Xh=function(a){if(a in Wh){var b=Wh[a];(0,g.z)(b.reqs,function(a){Xh(a)});
try{b.disable()}catch(c){}delete Wh[a]}};
$h=function(a){sf(g.Zh,arguments)};
g.ai=function(a){return a in g.Zh};
bi=function(a){sf(g.Zh,arguments)};
g.ci=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Za,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Mb(g.Pb(a)),"about:invalid#zClosurez"===a?a="":(a=g.Zb(g.ac(a)),a=g.Ra(g.Xe(a))),g.Qa(a)||(a=g.pc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.tc(a).body.appendChild(a))):e?qg(a,b,"POST",e,d):g.C("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?qg(a,b,"GET","",d):dba(a,b))};
dba=function(a,b){var c=new window.Image,d=""+eba++;di[d]=c;c.onload=c.onerror=function(){b&&di[d]&&b();delete di[d]};
c.src=a};
g.ei=function(a,b){a=a||"";var c=a.match(fba);window.spf.style.load(a,c?c[1]:"",b)};
g.fi=function(a,b,c){var d=g.C("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Oc(window.location.href);e&&d.push(e);e=g.Oc(a);if(g.Ia(d,e)||!e&&g.Oa(a,"/"))if(g.bg("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.bc(d,a),a=d.href),a&&(a=g.Pc(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Sh();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Ya(a).toString(36),b=b?g.Sc(b):"",g.th(a,b,c||5))):(c="ST-"+g.Ya(a).toString(36),b=b?g.Sc(b):"",
g.th(c,b,5))}};
g.gi=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.cc(d.location,g.Vc(a,b)+c)};
g.hi=function(a,b){b&&g.fi(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.gi(a)};
g.ii=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.C("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.fi(a,b);if(c)return!1;g.hi(a);return!0};
g.ji=function(a,b){this.version=a;this.args=b};
g.ki=function(a,b){this.topic=a;this.C=b};
g.mi=function(a,b){var c=g.li();c&&c.publish.call(c,a.toString(),a,b)};
g.li=function(){return g.r("ytPubsub2Pubsub2Instance")};
gba=function(a){if(ni.getEntriesByType){var b=ni.getEntriesByType("paint");if(b=g.Ga(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Aa(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
oi=function(){var a=g.C("TIMING_TICK_EXPIRATION");a||(a={},g.uf("TIMING_TICK_EXPIRATION",a));return a};
pi=function(){var a=oi(),b;for(b in a)g.Wf(a[b]);g.uf("TIMING_TICK_EXPIRATION",{})};
qi=function(a,b){g.ji.call(this,1,arguments)};
ri=function(a,b){g.ji.call(this,1,arguments)};
hba=function(){si=!1;ti();if("cold"==ui().yt_lt){var a=vi(),b=wi(),c;for(c in a)g.Oa(c,"_")||"tick_"+c in b||xi(c,a[c]);a=ui();for(var d in a)"info_"+d in b||yi(d,a[d])}zi(!0);g.Ai(!1)};
Di=function(a){Bi(a);iba();Ci(!1,a);a||(g.C("TIMING_ACTION")&&g.uf("PREVIOUS_ACTION",g.C("TIMING_ACTION")),g.uf("TIMING_ACTION",""))};
Fi=function(a,b,c){b||"_"==a[0]||Ei(a,c);var d=vi(c),e=b||g.bh();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=oi();var f=e[a];f&&(g.Wf(f),e[a]=0);xi(a,b,c)||g.Ai(!1,c);return d[a]};
Ei=function(a,b){ni.mark&&(g.Oa(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),ni.mark(a))};
Ki=function(a,b){Gi("yt_sts",a,void 0);Fi("_start",b,void 0)};
Gi=function(a,b,c){ui(c)[a]=b;yi(a,b,c)};
Li=function(a){var b=ui(void 0);return a in b};
Mi=function(a){var b=vi(a);if(b.aft)return b.aft;a=g.C((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
Ni=function(a,b){Fi("nreqs",a.requestStart,b);Fi("nress",a.responseStart,b);Fi("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(Fi("nrs",a.redirectStart,b),Fi("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(Fi("ndnss",a.domainLookupStart,b),Fi("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(Fi("ntcps",a.connectStart,b),Fi("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(Fi("nstcps",a.secureConnectionStart,
b),Fi("ntcpe",a.connectEnd,b))};
g.Ai=function(a,b){if(!Oi(b)){var c=g.C((b||"")+"TIMING_ACTION",void 0),d=vi(b);if(g.r("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Mi(b)))if(g.bg("tighter_critical_section")&&!Pi&&(g.mi(jba,new qi(Math.round(c-d._start),b)),Pi=!0),a||b)Qi(b);else{c=!0;var e=g.C("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Qi(b)}}};
kba=function(){switch(g.Bg()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Ri=function(a){if(!Oi(void 0)){if(!g.bg("send_empty_timing")){var b=g.C("CSI_SERVICE_NAME","youtube");if(!g.C("TIMING_ACTION",void 0)||!b)return}Fi("aa",void 0,void 0);Gi("ap",1,void 0);Gi("yt_fss",a,void 0);!g.bg("enable_csi_abandonment_info")||Li("yt_lt")||ti();Qi(void 0)}};
xi=function(a,b,c){wi(c)["tick_"+a]=b;c||b||g.bh();return Si()?(c=Ti(c),"_start"==a?Eh("baseline_"+c)||g.zh("latencyActionBaselined",{clientActionNonce:c},b):Eh("tick_"+a+"_"+c)||g.zh("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
yi=function(a,b,c){wi(c)["info_"+a]=b;if(Si())if(a in Ui){var d=Ui[a];g.Ia(lba,d)&&(b=!!b);if(Si()){a={};d=d.split(".");for(var e=a,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=b;b=Ti(c);Fh(a,b)}}else g.Ia(mba,a)||g.yf(Error("Unknown label "+a+" logged with GEL CSI."))};
ti=function(){var a=g.C("TIMING_INFO",{});for(b in a)Gi(b,a[b]);Gi("is_nav",1);(a=g.Sh())&&Gi("csn",a);(a=g.C("PREVIOUS_ACTION",void 0))&&Gi("pa",a);var b=ui();b.p=g.C("CLIENT_PROTOCOL")||"unknown";b.t=g.C("CLIENT_TRANSPORT")||"unknown";Gi("yt_vis",kba());if("cold"==b.yt_lt){a=ni.timing||{};a.navigationStart&&(Fi("srt",a.responseStart),1!=b.prerender&&Ki("n",a.navigationStart));b=gba(a);0<b&&Fi("fpt",b);Ni(a);ni.getEntriesByType&&nba();a=[];if(window.document.querySelector&&ni&&ni.getEntriesByName)for(var c in Vi)b=
Vi[c],oba(c,b)&&a.push(b);a.length&&Gi("rc",a.join(","))}Si()&&(c={},c.actionType=pba[g.C("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Ti(void 0),Fh(c,a))};
Wi=function(a){return Math.round(ni.timing.navigationStart+a)};
nba=function(){var a=window.location.protocol,b=ni.getEntriesByType("resource");b=(0,g.Xi)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20180601001851/https://fonts.gstatic.com/s/")});
(b=(0,g.Yi)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Fi("wffs",Wi(b.startTime)),Fi("wffe",Wi(b.responseEnd)))};
oba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=ni.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,Fi("rsf_"+b,d+Math.round(c.fetchStart)),Fi("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(Li("rc")||Gi("rc",""),0===c.transferSize))?!0:!1:!1};
zi=function(a){g.p("ytglobal.timingready_",a,void 0)};
Ti=function(a){var b=Zi(a).nonce;b||(b=Jh(),Zi(a).nonce=b);return b};
vi=function(a){return Zi(a).tick};
ui=function(a){return Zi(a).info};
wi=function(a){a=Zi(a);"gel"in a||(a.gel={});return a.gel};
Zi=function(a){return g.r("ytcsi."+(a||"")+"data_")||Bi(a)};
Bi=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
Oi=function(a){return!!g.r("yt.timing."+(a||"")+"pingSent_")};
Ci=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
qba=function(a){var b=vi(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==ui(a).yt_pvis};
Si=function(){return si||g.bg("csi_on_gel")};
Qi=function(a){pi();if(!Si()){var b=vi(a),c=ui(a),d=b._start;for(k in b)if(g.Oa(k,"_")&&g.ya(b[k])){var e=k.slice(1);if(e in rba){var f=(0,g.$i)(b[k],function(a){return Math.round(a-d)});
c["all_"+e]=f.join()}delete b[k]}var k=!!c.ap;if(e=g.r("ytglobal.timingReportbuilder_")){if(b=e(b,c,a))aj(b,k),Di(a)}else{var l=g.C("CSI_SERVICE_NAME","youtube");e={v:2,s:l,action:g.C((a||"")+"TIMING_ACTION",void 0)};f=Gi.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var m=window.location.protocol+g.r("ytplayer.config.assets.js");(m=ni.getEntriesByName?ni.getEntriesByName(m)[0]:null)?c.h5jse=Math.round(c.h5jse-m.responseEnd):delete c.h5jse}b.aft=Mi(a);qba(a)&&"youtube"==l&&(Gi("yt_lt","hot_bg",a),
l=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-l));for(var q in c)"_"!=q.charAt(0)&&(e[q]=c[q]);b.ps=g.bh();c={};q=[];for(var w in b)"_"!=w.charAt(0)&&(l=Math.round(b[w]-d),c[w]=l,q.push(w+"."+l));e.rt=q.join(",");(b=g.r("ytdebug.logTiming"))&&b(e,c);aj(e,k,a);g.mi(sba,new ri(c.aft+(f||0),a))}}};
aj=function(a,b,c){if(g.bg("debug_csi_data")){var d=g.r("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||g.ci(a,void 0,void 0,void 0,f)}catch(k){g.ci(a,void 0,void 0,void 0,f)}}else g.ci(a);Ci(!0,c)};
cj=function(a,b){g.ud.call(this);this.H=this.oa=a;this.N=b;this.L=!1;this.api={};this.aa=this.W=null;this.J=new g.$e;g.xd(this,this.J);this.D={};this.la=this.ka=this.F=this.mb=this.C=null;this.V=!1;this.G=this.R=null;this.Sa={};this.tb=["onReady"];this.bb=null;this.qb=window.NaN;this.Y={};bj(this);this.Xh("WATCH_LATER_VIDEO_ADDED",this.lG.bind(this));this.Xh("WATCH_LATER_VIDEO_REMOVED",this.mG.bind(this));this.Xh("onAdAnnounce",this.Fv.bind(this));this.yb=new Ng(this);g.xd(this,this.yb)};
dj=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
fj=function(a){var b=!0,c=ej(a);c&&a.C&&(a=a.C,b=g.D(c,"version")==a.assets.js);return b&&!!g.r("yt.player.Application.create")};
tba=function(a){if(!a.ob()&&!a.V){var b=fj(a);if(b&&"html5"==(ej(a)?"html5":null))a.la="html5",a.L||gj(a);else if(hj(a),a.la="html5",b&&a.G)a.oa.appendChild(a.G),gj(a);else{a.C.loaded=!0;var c=!1;a.R=function(){c=!0;var b=a.C.clone();g.r("yt.player.Application.create")(a.oa,b);gj(a)};
a.V=!0;b?a.R():(g.Pf(a.C.assets.js,a.R),g.ei(a.C.assets.css),ij(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
ej=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
gj=function(a){if(!a.ob()){var b=ej(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||uba(a)):a.qb=g.Df(function(){gj(a)},50)}};
uba=function(a){bj(a);a.L=!0;var b=ej(a);b.addEventListener&&(a.W=jj(a,b,"addEventListener"));b.removeEventListener&&(a.aa=jj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=jj(a,b,e))}for(var f in a.D)a.W(f,a.D[f]);dj(a);a.ka&&a.ka(a.api);a.J.na("onReady",a.api)};
jj=function(a,b,c){var d=b[c];return function(){try{return a.bb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.bb=e,g.Af(e))}}};
bj=function(a){a.L=!1;if(a.aa)for(var b in a.D)a.aa(b,a.D[b]);for(var c in a.Y)g.Ff((0,window.parseInt)(c,10));a.Y={};a.W=null;a.aa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Xh.bind(a);a.api.removeEventListener=a.FK.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Cx.bind(a);a.api.getPlayerType=a.Ux.bind(a);a.api.getCurrentVideoConfig=a.ex.bind(a);a.api.loadNewVideoConfig=a.em.bind(a);a.api.isReady=a.fC.bind(a)};
kj=function(a,b){var c=b;if("string"==typeof b){if(a.Sa[b])return a.Sa[b];c=function(){var a=g.r(b);a&&a.apply(g.n,arguments)};
a.Sa[b]=c}return c?c:null};
vba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.n[c]=function(c){var d=g.Df(function(){a.ob()||(a.J.na(b,c),g.fb(a.Y,String(d)))},0);
g.gb(a.Y,String(d),!0)};
return c};
hj=function(a){(0,g.lj)("dcp");a.cancel();bj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=ej(a);b&&(fj(a)||!ij(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.rc(a.oa)};
ij=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.oj=function(a,b){a=g.sa(a)?g.ic(a):a;var c=g.mj+"_"+g.Da(a),d=g.nj[c];if(d)return d.em(b),d.api;d=new cj(a,c);g.nj[c]=d;g.E("player-added",d.api);g.vd(d,g.u(wba,d));g.Df(function(){d.em(b)},0);
return d.api};
wba=function(a){delete g.nj[a.N]};
g.pj=function(a){if(!a)return null;var b=g.mj+"_"+g.Da(a),c=g.nj[b];c||(c=new cj(a,b),g.nj[b]=c);return c.api};
g.qj=function(a){return g.pj(window.document.getElementById(a))};
g.sj=function(a,b){var c={};c.key=a;c.value=b;return rj().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.tj=function(a){return rj().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
rj=function(){return uj?window.Promise.resolve(uj):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))uj=b,a(uj);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),rj()};
c.onupgradeneeded=xba})};
xba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Dba=function(){vj++;var a=g.mc(),b=new g.Ac(0,0,a.width,a.height);wj("vph",a.height);wj("vpw",a.width);(0,g.lj)("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;xj.start();for(var f=0;f<c;f++){var k=a[f];if(yj(k,b)){var l=yba(k);l.then(zba);d.push(l);zj.push(l);k.loadTime||(e=!1)}}e&&wj("yt_eil",1);(0,g.lj)("vpcc");b=g.xe(d).then(Aba);g.ze(b,Bba);b.then(Cba);zj.push(b);return b};
Cba=function(){xj.stop()};
Bba=function(){(0,g.lj)("vpr")};
yj=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.Ag(c);if(e in Aj)return!0;if(e in Bj)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Bj[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Bj[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Aj[d[c]]=!0;return!0};
Aba=function(a){var b=g.mc();b=new g.Ac(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;yj(a[d].eB,b)&&c<f&&(c=f)}return c};
yba=function(a){var b=vj;return new g.re(function(c,d){var e={eB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){vj!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},Cj.push(a))})};
zba=function(a){xj.start();a=a.time;Dj<a&&(Dj=a,(0,g.lj)("lim",a))};
Eba=function(){(0,g.lj)("vptl",Dj);(0,g.lj)("vpl",Dj)};
Fba=function(){zj.forEach(function(a){a.cancel()});
Dj=zj.length=0;Aj={};Bj={};Cj.forEach(function(a){a.slt=void 0});
Cj.length=0};
g.Ej=function(a,b){g.ci("/gen_204?"+a,b)};
Hba=function(a){if(null==a)return[];var b=[];Gba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Fj=function(){return g.A(g.x("page-container"),"remote-connected")};
Iba=function(){Gj=g.Ef(Hj,5E3);var a=g.Ij();a?(a.addEventListener("onReady",Hj),a.addEventListener("onStateChange",Hj)):Jj("unable to init PP monitor")};
Mj=function(a){for(var b in g.nj){var c=g.nj[b];c&&c.cancel()}if(a=a||null){b=g.Ij();var d=!0;c=g.Kj;g.Kj=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Lj="",g.oj("player-api",a)):b.playVideo();a=g.Pg(a);a.loaded=!0}Hj();g.p("ytplayer.config",a,void 0)};
g.Ij=function(){return g.qj("player-api")};
Hj=function(){var a=g.Ij();if(a){var b=g.x("player");b=!b||g.A(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.C("PAGE_NAME"),e=g.Fj();!c||d||e||(Jj("PP playing off watch (paused)"),a.pauseVideo());b&&d?Jj("PP off-screen on watch"):b||d||Jj("PP !off-screen off watch")}};
Jj=function(a){var b=g.C("PAGE_NAME");b&&(a+="("+[b,Lj,g.r("_spf_state.nav-counter")].join()+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.yf(Error(a),"WARNING"))};
Oj=function(){(0,g.lj)("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){(0,g.lj)("cpt");g.E("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?((0,g.lj)("cpt"),g.E("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){(0,g.lj)("cpt");
g.E("on_cpt_tick",(new Date).getTime())},0);
Jba();g.C("CSI_VIEWPORT")&&(Nj=Dba(),Nj.then(function(a){(0,g.lj)("vpl",a);Nj=null},function(){}))};
Jba=function(){Pj("init");var a=g.C("PAGE_NAME",void 0);a&&Pj("init-"+a)};
Pj=function(a){g.Zf()?Qj.push(g.Vf(g.u(g.Nf,a),0)):g.E(a)};
Rj=function(){g.Xf(Qj);Qj.length=0;Fba();Nj&&(Nj.cancel(),Nj=null);var a=g.C("PAGE_NAME",void 0);a&&g.Nf("dispose-"+a);g.Nf("dispose")};
Kba=function(){Oj()};
Lba=function(){g.C("TIMING_REPORT_ON_UNLOAD")&&g.Ai(!0);Ri("u");g.Oh("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Th();g.Ah();g.Wg();Rj();g.Nf("pageunload")};
Sj=function(){g.ih()};
Tj=function(){window.yt_spf_loaded_history=!0;g.ih()};
Yj=function(){Uj=1;Vj=Wj=0;g.C("TIMING_REPORT_ON_UNLOAD")&&g.Ai(!0);g.bg("warm_load_nav_start_web")?(Ri("n"),Di(),zi(!1),g.uf("TIMING_AFT_KEYS",[]),Gi("yt_lt","warm"),g.uf("TIMING_ACTION",""),g.uf("TIMING_WAIT",[]),pi(),Ki("n")):(Ri("n"),Di(),Ki("n"));Ei("nr");Xj(Mba);Th();g.Nf("navigate")};
ck=function(a){a=a.detail.part||a.detail.partial;(0,g.lj)("nc"+Wj);++Wj;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.lj)("bc");else{var b=1==Uj;Uj=2;b?(Xj(Nba),Zj()):Xj(Oba);if(b=a&&a.data&&a.data.swfcfg)ak(a.timing,b.args),bk(b)}};
dk=function(){(0,g.lj)("np"+Vj);++Vj};
ek=function(a){a=a.detail.response;var b=1==Uj;Uj=3;b&&(Xj(Pba),Zj());if(b=a.data&&a.data.swfcfg)ak(a.timing,b.args),bk(b)};
ik=function(a){(0,g.lj)("nd");a=a.detail.response;g.fk=a.cacheKey;a=a.timing;var b=window._spf_state;g.gk.navigationCount=b&&b["nav-counter"]||0;g.bg("warm_load_nav_start_web")?(0,g.lj)("srt",a.responseStart):(Ki("ne",a.responseStart),wj("srt",Math.max(0,a.responseStart-a.navigationStart)));wj("yt_lt",a.spfCached?"hot":"warm");(0,g.lj)("pfs",a.fetchStart);(0,g.lj)("pfrs",a.responseStart);"redirectStart"in a&&Qba(a);Xj(hk);window.document.getElementById("content").style.height="";Oj();Uj=0};
jk=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.yf(a)};
kk=function(a){g.Ej(g.Sc({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Sba=function(){Rba();window.yt_spf_loaded_history=!1};
Tba=function(){};
Zj=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Rj();a=g.C("PREVIOUS_ACTION");for(var b in g.tf)delete g.tf[b];g.uf("PREVIOUS_ACTION",a);g.uf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);if((b=g.Ij())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Lj=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),Lj="recovered"):Lj="missing2"}else Lj="missing";Hj()};
bk=function(a){"cfg"in vi(void 0)||(0,g.lj)("cfg");Mj(a)};
Xj=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Wf(lk);lk=g.Vf(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Ff(mk);mk=g.Df(function(){b.className=e},c)},0)};
Rba=function(){var a=hk[0]+50;g.Ff(mk);mk=g.Df(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
ak=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Hba(b));g.C("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Ej(g.Sc(c)))};
ok=function(){return"granted"!=window.Notification.permission?window.Promise.resolve():nk().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})["catch"](function(){})};
qk=function(){pk({type:"notifications_register",data:g.C("ID_TOKEN")})};
nk=function(){return window.navigator.serviceWorker.getRegistration(String(ag("service_worker_scope")||""))};
rk=function(a){return!(!a||!a.pushManager)};
pk=function(a){nk().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Uba=function(){if(!g.C("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(ag("service_worker_push_force_notification_prompt_tag")||"");return a?g.tj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
Yba=function(){var a=void 0===a?!1:a;return(window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification?nk().then(rk):window.Promise.resolve(!1)).then(function(b){if(!b)return window.Promise.resolve();b=ok().then(function(){pk({type:"notifications_check_registration",data:g.C("ID_TOKEN")})});
return"default"!=window.Notification.permission?b:b.then(function(){return Vba(a)}).then(function(a){if(a)return Wba(),Xba().then(function(){})})})};
Vba=function(a){return g.C("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.C("LOGGED_IN",void 0)&&(void 0===a?0:a)?Uba().then(function(a){if(a)return!0;a=[Zba(),$ba()];g.C("LOGGED_IN",void 0)||a.push(aca());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
aca=function(){var a=g.cg("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.tj("WatchCount").then(function(b){return b>=a})};
Xba=function(){var a=arguments;g.bg("service_worker_push_prompt_modal_enable")&&bca();return window.Notification.requestPermission().then(function(a){sk();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return ok().then(function(){g.sj("NotificationsDisabled",!1);qk();return window.Promise.resolve(!0)});
"denied"==a&&qk();return window.Promise.resolve(!1)})["catch"](function(){sk();
return window.Promise.reject.apply(window.Promise,a instanceof Array?a:baa(g.ma(a)))})};
Wba=function(){g.tj("PromptCount").then(function(a){return g.sj("PromptCount",a+1)}).then(function(){return g.sj("PromptTime",(0,g.dd)())}).then(function(){var a=String(ag("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.tj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.sj("PromptTags",JSON.stringify(c))})})};
Zba=function(){return-1==g.cg("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.tj("PromptCount").then(function(a){a||(a=0);return window.Promise.resolve(a<g.cg("service_worker_push_prompt_cap"))})};
$ba=function(){var a=g.cg("service_worker_push_prompt_delay_microseconds");return a?g.tj("PromptTime").then(function(b){return window.Promise.resolve((0,g.dd)()-a>(b||0))}):window.Promise.resolve(!0)};
cca=function(){tk||sk()};
uk=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
bca=function(){var a=g.x("yt-push-prompt-modal-bg");tk=g.bg("service_worker_push_prompt_modal_ignore_click");a?uk(a):(a=g.pc("div",{id:"yt-push-prompt-modal-bg"}),uk(a),window.document.body.appendChild(a),g.Kg(window.document,"click",cca))};
sk=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.sc(a)};
dca=function(a){return rk(a)?Yba():window.Promise.resolve()};
fca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(eca)})};
hca=function(){var a="/sw.js",b=g.C("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=vk(a);g.bg("service_worker_push_enabled")&&a.then(gca).then(dca)};
gca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
eca=function(a){a&&vk("/sw.js?0",a.scope)};
vk=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(ag("service_worker_scope")||"")||"/"})};
yk=function(){g.Uh.call(this,"www/base");this.D=0};
zk=function(a){(a=a.detail.name)&&Xh(a)};
g.aa=[];ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)Ak=Object.setPrototypeOf;else{var Bk;a:{var ica={Ev:!0},Ck={};try{Ck.__proto__=ica;Bk=Ck.Ev;break a}catch(a){}Bk=!1}Ak=Bk?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var da=Ak,ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ha="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,aaa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
na("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=pa(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
var jca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)qa(d,e)&&(a[e]=d[e])}return a};
na("Object.assign",function(a){return a||jca});
na("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
na("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==pa(this,a,"includes").indexOf(a,c||0)}});
var kca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
na("Reflect.construct",function(){return kca});
na("Promise",function(a){function b(a){this.F=0;this.D=void 0;this.C=[];var b=this.H();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.L()})};
var e=ha.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.L=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(q){this.H(q)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.L(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(m){this.G(m);return}"function"==typeof b?this.la(b,a):this.L(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.L=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.F)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.F);this.F=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var a=0;a<this.C.length;++a)f.F(this.C[a]);this.C=null}};
var f=new c;b.prototype.V=function(a){var b=this.H();a.mi(b.resolve,b.reject)};
b.prototype.la=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(q){c.reject(q)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(S){f(S)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.mi(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.mi=function(a,b){function c(){switch(d.F){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.F);}}
var d=this;null==this.C?f.F(c):this.C.push(c)};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.ma(a),f=e.next();!f.done;f=e.next())d(f.value).mi(b,c)})};
b.all=function(a){var c=g.ma(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).mi(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
na("WeakMap",function(a){function b(a){this.gb=(f+=Math.random()+1).toString();if(a){fa();ka();a=g.ma(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){qa(a,e)||ia(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(q){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!qa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.gb]=b;return this};
b.prototype.get=function(a){return qa(a,e)?a[e][this.gb]:void 0};
b.prototype.has=function(a){return qa(a,e)&&qa(a[e],this.gb)};
b.prototype["delete"]=function(a){return qa(a,e)&&qa(a[e],this.gb)?delete a[e][this.gb]:!1};
return b});
na("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return la(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&qa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,hc:l}}return{id:c,list:d,index:-1,hc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.ma(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.ma([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(y){return!1}}())return a;
fa();ka();var f=new window.WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.hc?c.hc.value=b:(c.hc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.hc),this.F.previous.next=c.hc,this.F.previous=c.hc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.hc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.hc.previous.next=a.hc.next,a.hc.next.previous=a.hc.previous,a.hc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).hc};
e.prototype.get=function(a){return(a=d(this,a).hc)&&a.value};
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
na("Array.from",function(a){return a?a:function(a,c,d){ka();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
na("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!(0,window.isNaN)(a)&&window.Infinity!==a&&-window.Infinity!==a}});
na("Number.parseInt",function(a){return a||window.parseInt});
g.Dk=g.Dk||{};g.n=this;Ca="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.dd=Date.now||function(){return+new Date};g.Ic=window.document;g.Ek=window;g.v(g.Ea,Error);g.Ea.prototype.name="CustomError";g.Ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.sa(a))return g.sa(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.lca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.sa(a))return g.sa(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Xi=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.sa(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.$i=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.sa(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Yi=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.z)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Fk=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Gk=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Va=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.Hk=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var Ik=g.n.navigator;if(Ik){var Jk=Ik.userAgent;if(Jk){g.Za=Jk;break a}}g.Za=""};var jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.sb[" "]=g.va;var Pk,maa,Tk;g.Bd=g.$a("Opera");g.B=g.mb();g.Kk=g.$a("Edge");g.Lk=g.Kk||g.B;g.Mk=g.$a("Gecko")&&!(-1!=g.Za.toLowerCase().indexOf("webkit")&&!g.$a("Edge"))&&!(g.$a("Trident")||g.$a("MSIE"))&&!g.$a("Edge");g.Ad=-1!=g.Za.toLowerCase().indexOf("webkit")&&!g.$a("Edge");g.Nk=g.$a("Macintosh");g.Ok=g.$a("Windows");g.mca=g.$a("Linux")||g.$a("CrOS");g.nca=g.$a("Android");g.oca=qb();g.pca=g.$a("iPad");g.qca=g.$a("iPod");g.rca=g.rb();
a:{var Qk="",Rk=function(){var a=g.Za;if(g.Mk)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Kk)return/Edge\/([\d\.]+)/.exec(a);if(g.B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Ad)return/WebKit\/(\S+)/.exec(a);if(g.Bd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Rk&&(Qk=Rk?Rk[1]:"");if(g.B){var Sk=ub();if(null!=Sk&&Sk>(0,window.parseFloat)(Qk)){Pk=String(Sk);break a}}Pk=Qk}g.vb=Pk;maa={};var Uk=g.n.document;Tk=Uk&&g.B?ub()||("CSS1Compat"==Uk.compatMode?(0,window.parseInt)(g.vb,10):5):void 0;g.xb=Tk;g.Vk=g.$a("Firefox");g.Wk=qb()||g.$a("iPod");g.Xk=g.$a("iPad");g.sca=g.pb();g.Yk=g.nb();g.Zk=g.ob()&&!g.rb();var zb,Bb;zb=null;g.Ab=null;Bb=null;g.$k="function"==typeof window.Uint8Array;g.h=g.Db.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ra(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.dd)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Va)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.ra(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Hc=function(){return g.Eb(this).keys};
g.h.Eb=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Kb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.Od=g.ba(3);g.h.clear=function(){for(var a=g.Eb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.rh=new g.Db("undefined"==typeof window.document?null:window.document);g.rh.F=3950;g.al=g.Fb(null);var oaa;oaa=!g.B||g.yb(9);g.tca=!g.Mk&&!g.B||g.B&&g.yb(9)||g.Mk&&g.wb("1.9.1");g.bl=g.B&&!g.wb("9");g.uca=g.B||g.Bd||g.Ad;g.Ib.prototype.Ud=!0;g.Ib.prototype.Tc=function(){return this.C};
g.Ib.prototype.toString=function(){return"Const{"+this.C+"}"};
g.Hb={};g.Jb("");g.vca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.wca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.cl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");g.Lb.prototype.Ud=!0;g.Lb.prototype.Tc=function(){return this.F};
g.Lb.prototype.Jl=!0;g.Lb.prototype.C=function(){return 1};
var Nb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Kb={};g.Ob("about:blank");g.Sb.prototype.Ud=!0;g.Rb={};g.Sb.prototype.Tc=function(){return this.C};
g.dl=g.Tb("");g.el=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.xca=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Vb.prototype.Ud=!0;g.Ub={};g.Vb.prototype.Tc=function(){return this.C};
g.yca=g.Wb("");g.Yb.prototype.Jl=!0;g.Yb.prototype.C=function(){return this.D};
g.Yb.prototype.Ud=!0;g.Yb.prototype.Tc=function(){return this.F};
var Xb={};g.$b("<!DOCTYPE html>",0);g.fl=g.$b("",0);g.gl=g.$b("<br>",0);g.h=g.ec.prototype;g.h.clone=function(){return new g.ec(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.ec&&g.fc(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.ec?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.ua(b)&&(this.y+=b));return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.hc.prototype;g.h.clone=function(){return new g.hc(this.width,this.height)};
g.h.Rv=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Rv()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.width*=a;this.height*=c;return this};var jc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var zca;zca={HO:"allow-forms",IO:"allow-modals",JO:"allow-orientation-lock",KO:"allow-pointer-lock",LO:"allow-popups",MO:"allow-popups-to-escape-sandbox",NO:"allow-presentation",OO:"allow-same-origin",PO:"allow-scripts",QO:"allow-top-navigation",RO:"allow-top-navigation-by-user-activation"};g.Aca=g.Gb(function(){return g.xc(zca)});g.h=g.Ac.prototype;g.h.clone=function(){return new g.Ac(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.ec?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.ec?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.ua(b)&&(this.top+=b));return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.hl=g.Mk?"MozUserSelect":g.Ad||g.Kk?"WebkitUserSelect":null;var Gc,Hc;g.Bca=Object.prototype.hasOwnProperty;Gc=g.Fc(window);Hc=Gc&&window.parent||window;var qaa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Cca=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;Yc.prototype.getUrl=function(a,b,c,d){a=a+"//"+b+c;var e=saa(this)-c.length-d.length;if(0>e)return"";this.C.sort(function(a,b){return a-b});
c=null;b="";for(var f=0;f<this.C.length;f++)for(var k=this.C[f],l=this.F[k],m=0;m<l.length;m++){if(!e){c=null==c?k:c;break}var q=ad(l[m],this.D,",$");if(q){q=b+q;if(e>=q.length){e-=q.length;a+=q;b=this.D;break}else this.H&&(b=e,q[b-1]==this.D&&--b,a+=q.substr(0,b),b=this.D,e=0);c=null==c?k:c}}f="";this.G&&null!=c&&(f=b+this.G+"="+c);return a+f+d};var il=null;var jd=g.n.performance,Dca=!!(jd&&jd.mark&&jd.measure&&jd.clearMarks),hd=g.Gb(function(){var a;if(a=Dca){var b;if(null===il){il="";try{a="";try{a=g.n.top.location.hash}catch(c){a=g.n.location.hash}a&&(il=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=il;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
id.prototype.disable=function(){this.C=!1;this.events!=this.F.google_js_reporting_queue&&(hd()&&g.z(this.events,g.kd),this.events.length=0)};
id.prototype.start=function(a,b){if(!this.C)return null;var c=fd()||ed();c=new taa(a,b,c);var d="goog_"+c.uniqueId+"_start";jd&&hd()&&jd.mark(d);return c};
id.prototype.end=function(a){if(this.C&&g.ua(a.value)){var b=fd()||ed();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";jd&&hd()&&jd.mark(b);this.C&&this.events.push(a)}};nd.prototype.F=function(a,b,c,d,e){e=e||"jserror";try{var f=new Yc;f.H=!0;bd(f,1,"context",a);b.error&&b.meta&&b.id||(b=g.qd(b));b.msg&&bd(f,2,"msg",b.msg.substring(0,512));b.file&&bd(f,3,"file",b.file);0<b.line&&bd(f,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(R){}b=[k];f.C.push(5);f.F[5]=b;var l=g.Xc(),m=new Wc(g.n.location.href,g.n,!1);b=null;var q=l.length-1;for(d=q;0<=d;--d){var w=l[d];!b&&Cca.test(w.url)&&(b=w);if(w.url&&!w.wq){m=w;break}}w=null;var y=l.length&&l[q].url;0!=m.depth&&
y&&(w=l[q]);var I=new raa(m,w);I.F&&bd(f,6,"top",I.F.url||"");bd(f,7,"url",I.C.url||"");g.cd(this.D,e,f,c)}catch(R){try{g.cd(this.D,e,{context:"ecmserr",rctx:a,msg:g.pd(R),url:I&&I.C.url},c)}catch(V){}}return!0};
g.ea(od,Kc);var gd,ld;gd=g.Jc();ld=new id;g.md=new function(){var a=void 0===a?g.Ek:a;this.G="http:"===a.location.protocol?"http:":"https:";this.F="pagead2.googlesyndication.com";this.D="/pagead/gen_204?id=";this.C=.01};
g.jl=new nd;"complete"==gd.document.readyState?gd.google_measure_js_timing||ld.disable():ld.C&&yc(gd,"load",function(){gd.google_measure_js_timing||ld.disable()});var kl;kl={};g.ll=(kl[8]="google_prev_ad_formats_by_region",kl[9]="google_prev_ad_slotnames_by_region",kl);g.ml=(new Date).getTime();g.ud.prototype.Fc=!1;g.ud.prototype.ob=function(){return this.Fc};
g.ud.prototype.dispose=function(){this.Fc||(this.Fc=!0,this.X())};
g.ud.prototype.X=function(){if(this.dc)for(;this.dc.length;)this.dc.shift()()};g.yd.prototype.stopPropagation=function(){this.F=!0};
g.yd.prototype.preventDefault=function(){this.kt=!1};var Ud,Fca,zaa;g.Eca=!g.B||g.yb(9);Ud=!g.B||g.yb(9);Fca=g.B&&!g.wb("9");zaa=function(){if(!g.n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.n.addEventListener("test",g.va,b);g.n.removeEventListener("test",g.va,b);return a}();g.nl=Cd("TransitionEnd");
g.ol={sP:"click",VV:"rightclick",aQ:"dblclick",Qg:"mousedown",Rg:"mouseup",Vh:"mouseover",Uh:"mouseout",FT:"mousemove",CT:"mouseenter",ET:"mouseleave",Pg:"mousecancel",dW:"selectionchange",eW:"selectstart",QY:"wheel",KR:"keypress",JR:"keydown",LR:"keyup",lP:"blur",OQ:"focus",bQ:"deactivate",QQ:"focusin",RQ:"focusout",pP:"change",OV:"reset",cW:"select",GW:"submit",uR:"input",tV:"propertychange",xQ:"dragstart",sQ:"drag",uQ:"dragenter",wQ:"dragover",vQ:"dragleave",DROP:"drop",tQ:"dragend",RW:"touchstart",
QW:"touchmove",PW:"touchend",OW:"touchcancel",kP:"beforeunload",NP:"consolemessage",QP:"contextmenu",fQ:"devicechange",gQ:"devicemotion",hQ:"deviceorientation",kQ:"DOMContentLoaded",ERROR:"error",jR:"help",LOAD:"load",lT:"losecapture",nU:"orientationchange",yV:"readystatechange",QV:"resize",YV:"scroll",eY:"unload",nP:"canplay",oP:"canplaythrough",yQ:"durationchange",BQ:"emptied",ENDED:"ended",gT:"loadeddata",hT:"loadedmetadata",PAUSE:"pause",PLAY:"play",PLAYING:"playing",wV:"ratechange",aW:"seeked",
bW:"seeking",BW:"stalled",IW:"suspend",MW:"timeupdate",qY:"volumechange",rY:"waiting",yW:"sourceopen",xW:"sourceended",wW:"sourceclosed",kO:"abort",UPDATE:"update",iY:"updatestart",gY:"updateend",hR:"hashchange",vU:"pagehide",wU:"pageshow",pV:"popstate",TP:"copy",EU:"paste",XP:"cut",eP:"beforecopy",fP:"beforecut",iP:"beforepaste",mU:"online",hU:"offline",MESSAGE:"message",MP:"connect",wR:"install",lO:"activate",MQ:"fetch",TQ:"foreignfetch",wT:"messageerror",DW:"statechange",hY:"updatefound",SP:"controllerchange",
VO:Cd("AnimationStart"),TO:Cd("AnimationEnd"),UO:Cd("AnimationIteration"),SW:g.nl,hV:"pointerdown",nV:"pointerup",gV:"pointercancel",kV:"pointermove",mV:"pointerover",lV:"pointerout",iV:"pointerenter",jV:"pointerleave",bR:"gotpointercapture",mT:"lostpointercapture",GT:"MSGestureChange",HT:"MSGestureEnd",IT:"MSGestureHold",JT:"MSGestureStart",KT:"MSGestureTap",LT:"MSGotPointerCapture",NT:"MSInertiaStart",OT:"MSLostPointerCapture",PT:"MSPointerCancel",QT:"MSPointerDown",RT:"MSPointerEnter",ST:"MSPointerHover",
UT:"MSPointerLeave",VT:"MSPointerMove",XT:"MSPointerOut",ZT:"MSPointerOver",aU:"MSPointerUp",TEXT:"text",LW:g.B?"textinput":"textInput",JP:"compositionstart",KP:"compositionupdate",IP:"compositionend",gP:"beforeinput",EQ:"exit",eT:"loadabort",fT:"loadcommit",iT:"loadredirect",jT:"loadstart",kT:"loadstop",RV:"responsive",uW:"sizechanged",fY:"unresponsive",mY:"visibilitychange",FW:"storage",pQ:"DOMSubtreeModified",lQ:"DOMNodeInserted",nQ:"DOMNodeRemoved",oQ:"DOMNodeRemovedFromDocument",mQ:"DOMNodeInsertedIntoDocument",
iQ:"DOMAttrModified",jQ:"DOMCharacterDataModified",jP:"beforeprint",GO:"afterprint",hP:"beforeinstallprompt",ZO:"appinstalled"};g.v(g.Dd,g.yd);var Gca={2:"touch",3:"pen",4:"mouse"};
g.Dd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Mk&&(g.tb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Nk?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.sa(a.pointerType)?a.pointerType:Gca[a.pointerType]||"";this.state=a.state;this.xc=a;a.defaultPrevented&&
this.preventDefault()};
g.Dd.prototype.stopPropagation=function(){g.Dd.M.stopPropagation.call(this);this.xc.stopPropagation?this.xc.stopPropagation():this.xc.cancelBubble=!0};
g.Dd.prototype.preventDefault=function(){g.Dd.M.preventDefault.call(this);var a=this.xc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Fca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Fd="closure_listenable_"+(1E6*Math.random()|0),waa=0;g.h=g.Id.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Kd(a,b,d,e);-1<k?(b=a[k],c||(b.li=!1)):(b=new xaa(b,this.src,f,!!d,e),b.li=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Kd(e,b,c,d);return-1<b?(Hd(e[b]),g.Ka(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Hd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.lg=g.ba(5);g.h.qf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Kd(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.ra(a),d=c?a.toString():"",e=g.ra(b);return g.bb(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Qd="closure_lm_"+(1E6*Math.random()|0),Xd={},Td=0,$d="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.ae,g.ud);g.ae.prototype[Fd]=!0;g.h=g.ae.prototype;g.h.Li=function(){return this.xm};
g.h.Gh=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.Md(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Vd(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Li();if(b){var c=[];for(var d=1;b;b=b.Li())c.push(b),++d}b=this.Gv;d=a.type||a;if(g.sa(a))a=new g.yd(a,b);else if(a instanceof g.yd)a.target=a.target||b;else{var e=a;a=new g.yd(d,b);g.kb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=be(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=be(k,d,!0,a)&&e,a.F||(e=be(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=be(k,d,!1,a)&&e;return e};
g.h.X=function(){g.ae.M.X.call(this);this.removeAllListeners();this.xm=null};
g.h.O=function(a,b,c,d){return this.xd.add(String(a),b,!1,c,d)};
g.h.Oe=function(a,b,c,d){return this.xd.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.xd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.xd?this.xd.removeAll(a):0};
g.h.lg=g.ba(4);g.h.qf=function(a,b,c,d){return this.xd.qf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.xd.hasListener(g.ra(a)?String(a):void 0,b)};ce.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var me;var ne=new ce(function(){return new ge},function(a){a.reset()});
fe.prototype.add=function(a,b){var c=ne.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
fe.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
ge.prototype.set=function(a,b){this.jc=a;this.scope=b;this.next=null};
ge.prototype.reset=function(){this.next=this.scope=this.jc=null};var he,ie=!1,je=new fe;se.prototype.reset=function(){this.context=this.onRejected=this.D=this.C=null;this.F=!1};
var te=new ce(function(){return new se},function(a){a.reset()});
g.re.prototype.then=function(a,b,c){return ye(this,g.Aa(a)?a:null,g.Aa(b)?b:null,c)};
g.oe(g.re);g.re.prototype.cancel=function(a){0==this.C&&ke(function(){var b=new g.Fe(a);Ae(this,b)},this)};
g.re.prototype.W=function(a){this.C=0;g.qe(this,2,a)};
g.re.prototype.N=function(a){this.C=0;g.qe(this,3,a)};
g.re.prototype.J=function(){for(var a;a=Be(this);)Ce(this,a,this.C,this.R);this.L=!1};
var He=ee;g.v(g.Fe,g.Ea);g.Fe.prototype.name="cancel";g.v(g.Ke,g.ud);g.h=g.Ke.prototype;g.h.gb=0;g.h.X=function(){g.Ke.M.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.gb=g.Ie(this.wc,g.ra(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Je(this.gb);this.gb=0};
g.h.kf=g.ba(7);g.h.isActive=function(){return 0!=this.gb};
g.h.mp=function(){this.gb=0;this.C&&this.C.call(this.F)};g.v(Le,Faa);Le.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Le.prototype.update=function(a,b){if(null!=a){g.ra(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)Me(this,a,d),d+=this.F;if(g.sa(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){Me(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){Me(this,e);f=0;break}}this.D=f;this.H+=b}};
Le.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;Me(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.Pe="StopIteration"in g.n?g.n.StopIteration:{message:"StopIteration",stack:""};g.Oe.prototype.next=function(){throw g.Pe;};
g.Oe.prototype.dd=function(){return this};g.h=g.Te.prototype;g.h.Kb=function(){return this.D};
g.h.Eb=g.ba(0);g.h.Hc=function(){g.Ve(this);return this.C.concat()};
g.h.Od=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Kb())return!1;var c=b||Haa;g.Ve(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Ve=this.D=this.C.length=0};
g.h.remove=function(a){return g.Ue(this.F,a)?(delete this.F[a],this.D--,this.Ve++,this.C.length>2*this.D&&g.Ve(this),!0):!1};
g.h.get=function(a,b){return g.Ue(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.Ue(this.F,a)||(this.D++,this.C.push(a),this.Ve++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.Hc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.Te(this)};
g.h.dd=function(a){g.Ve(this);var b=0,c=this.Ve,d=this,e=new g.Oe;e.next=function(){if(c!=d.Ve)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Pe;var e=d.C[b++];return a?e:d.F[e]};
return e};var Ze={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.$e,g.ud);g.h=g.$e.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.sd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.va):(c&&g.La(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.na=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Kaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.sd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.z)(b,this.sd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Kb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Kb(b);return a};
g.h.X=function(){g.$e.M.X.call(this);this.clear();this.D.length=0};g.bf.prototype.set=function(a,b){g.ra(b)?this.C.set(a,g.Xe(b)):this.C.remove(a)};
g.bf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.bf.prototype.remove=function(a){this.C.remove(a)};g.v(cf,g.bf);cf.prototype.set=function(a,b){cf.M.set.call(this,a,ef(b))};
cf.prototype.F=function(a){a=cf.M.get.call(this,a);if(!g.ra(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
cf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ra(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.ff,cf);g.ff.prototype.set=function(a,b,c){if(b=ef(b)){if(c){if(c<(0,g.dd)()){g.ff.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.dd)()}g.ff.M.set.call(this,a,b)};
g.ff.prototype.F=function(a,b){var c=g.ff.M.F.call(this,a);if(c)if(!b&&g.gf(c))g.ff.prototype.remove.call(this,a);else return c};g.v(hf,Laa);hf.prototype.Kb=function(){var a=0;g.Re(this.dd(!0),function(){a++});
return a};
hf.prototype.clear=function(){var a=Gaa(this.dd(!0)),b=this;(0,g.z)(a,function(a){b.remove(a)})};g.v(g.jf,hf);g.h=g.jf.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Kb=function(){return this.C.length};
g.h.dd=function(a){var b=0,c=this.C,d=new g.Oe;d.next=function(){if(b>=c.length)throw g.Pe;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.kf,g.jf);g.v(mf,hf);var Maa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},lf=null;g.h=mf.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(nf(a),b);of(this)};
g.h.get=function(a){a=this.C.getAttribute(nf(a));if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(nf(a));of(this)};
g.h.Kb=function(){return pf(this).attributes.length};
g.h.dd=function(a){var b=0,c=pf(this).attributes,d=new g.Oe;d.next=function(){if(b>=c.length)throw g.Pe;var d=c[b++];if(a)return(0,window.decodeURIComponent)(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){for(var a=pf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);of(this)};g.v(qf,hf);qf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
qf.prototype.get=function(a){return this.F.get(this.C+a)};
qf.prototype.remove=function(a){this.F.remove(this.C+a)};
qf.prototype.dd=function(a){var b=this.F.dd(!0),c=this,d=new g.Oe;d.next=function(){for(var d=b.next();d.substr(0,c.C.length)!=c.C;)d=b.next();return a?d.substr(c.C.length):c.F.get(d)};
return d};g.bh=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.pl="Microsoft Internet Explorer"==window.navigator.appName;g.tf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.tf,void 0);var Cf={};var Hca=g.r("ytPubsubPubsubInstance")||new g.$e;g.$e.prototype.subscribe=g.$e.prototype.subscribe;g.$e.prototype.unsubscribeByKey=g.$e.prototype.sd;g.$e.prototype.publish=g.$e.prototype.na;g.$e.prototype.clear=g.$e.prototype.clear;g.p("ytPubsubPubsubInstance",Hca,void 0);var If=g.r("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",If,void 0);var Kf=g.r("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",Kf,void 0);var Jf=g.r("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",Jf,void 0);var Oaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Paa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Rf.prototype.initialize=function(a,b,c,d){b?(this.F=!0,g.Pf(b,function(){this.F=!1;window.botguard?Sf(this,c,d):(g.Qf(b),g.yf(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this))):a&&(eval(a),window.botguard?Sf(this,c,d):g.yf(Error("Unable to load Botguard from JS"),"WARNING"))};
g.Rf.prototype.Gf=function(){return null!==this.C};
g.Rf.prototype.invoke=function(){return this.C?this.C.invoke():null};
g.Rf.prototype.dispose=function(){this.C=null};g.ea(Yf,Qaa);Yf.prototype.start=function(){var a=g.r("yt.scheduler.instance.start");a&&a()};
Yf.prototype.pause=function(){var a=g.r("yt.scheduler.instance.pause");a&&a()};
g.wa(Yf);Yf.getInstance();g.dg=new g.Rf;(0,g.dd)();var gg=g.ra(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.ra(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var mg,rg;mg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};rg=!1;g.ql=sg;wg.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.pe(a)?a:g.yg(a)):2===this.F&&b?(a=b.call(c,this.C),g.pe(a)?a:g.xg(a)):this};
wg.prototype.getValue=function(){return this.C};
g.oe(wg);var Ica=0,Vaa=g.Ad?"webkit":g.Mk?"moz":g.B?"ms":g.Bd?"o":"",zg=g.r("ytDomDomGetNextId")||function(){return++Ica};
g.p("ytDomDomGetNextId",zg,void 0);var Waa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Cg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Cg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Cg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Gg=g.r("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",Gg,void 0);var Ig=g.r("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",Ig,void 0);var Jg=g.Gb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.v(g.Mg,g.ud);g.Mg.prototype.W=function(a){this.C=new g.ec(g.Eg(a),g.Fg(a))};
g.Mg.prototype.R=function(){if(this.C){var a=g.bh();if(0!=this.D){var b=g.gc(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.wc();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.Mg.prototype.X=function(){g.Gf(this.N);g.H(this.J)};g.ea(Ng,g.ud);Ng.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.eg);break}};
Ng.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.eg)}g.ud.prototype.X.call(this)};var Xaa={enablejsapi:1},Yaa={};Og.prototype.clone=function(){var a=new Og,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.xa(c)?a[b]=g.ib(c):a[b]=c}return a};var Rg={},Qg=0;var $aa,Zaa,eh,Vg;$aa=Math.pow(2,16)-1;Zaa={log_event:"events",log_interaction:"interactions"};eh=Object.create(null);eh.log_event="GENERIC_EVENT_LOGGING";eh.log_interaction="INTERACTION_LOGGING";Vg={};g.Zg=0;g.$g=g.r("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.$g,void 0);var Tg=g.r("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",Tg,void 0);var ah=g.r("ytLoggingTransportDispatchedStats_")||{};
g.p("ytLoggingTransportDispatchedStats_",ah,void 0);var fh=g.r("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",fh,void 0);var lh={};g.vh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.dd)()+1E3*c);return}catch(f){}var e="";if(d)try{e=(0,window.escape)(g.Xe(b))}catch(f){return}else e=(0,window.escape)(b);g.th(a,e,c,this.F)};
g.vh.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.rh.get(""+a,void 0))&&(c=(0,window.unescape)(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.vh.prototype.remove=function(a){this.C&&this.C.remove(a);g.uh(a,"/",this.F)};var wh=new g.vh("yt.innertube");var Gh=g.r("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",Gh,void 0);var Hh=0;var Ih=(0,g.dd)().toString();var Nh,Kh;g.Mh=Jh();Nh=0;g.Lh=null;Kh=null;g.h=g.Uh.prototype;g.h.TK=function(){this.Gf()||this.init()};
g.h.enable=function(){this.C=1;(0,g.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.TK,this),this.subscribe("dispose-"+a,this.dispose,this),g.C("PAGE_NAME")==a&&g.Vh(this))},this)};
g.h.init=function(){g.Wf(this.F);this.C=2;this.L&&this.L()};
g.h.Gf=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Wf(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.yf(a)}};
g.h.subscribe=function(a,b,c){a=g.Lf(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.Mf(this.G);this.G=[]};var Wh=g.r("yt.modules.registry_")||{};g.p("yt.modules.registry_",Wh,void 0);g.Zh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.Zh,void 0);var di={},eba=0;var fba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.ki.prototype.toString=function(){return this.topic};var Jca=g.r("ytPubsub2Pubsub2Instance")||new g.$e;g.$e.prototype.subscribe=g.$e.prototype.subscribe;g.$e.prototype.unsubscribeByKey=g.$e.prototype.sd;g.$e.prototype.publish=g.$e.prototype.na;g.$e.prototype.clear=g.$e.prototype.clear;g.p("ytPubsub2Pubsub2Instance",Jca,void 0);g.rl=g.r("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.rl,void 0);g.sl=g.r("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.sl,void 0);
g.tl=g.r("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.tl,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var ni=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.ea(qi,g.ji);g.ea(ri,g.ji);var jba=new g.ki("aft-recorded",qi),sba=new g.ki("timing-sent",ri);var rba,Vi,ul,Ui,mba,pba,lba,Pi,si,iba,wj,Qba;rba={vc:!0};
Vi={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};ul={};
Ui=(ul.ad_allowed="adTypesAllowed",ul.ad_at="adType",ul.ad_cpn="adClientPlaybackNonce",ul.ad_docid="adVideoId",ul.yt_ad_an="adNetworks",ul.p="httpProtocol",ul.t="transportProtocol",ul.cpn="clientPlaybackNonce",ul.csn="clientScreenNonce",ul.docid="videoId",ul.is_nav="isNavigation",ul.yt_lt="loadType",ul.yt_ad="isMonetized",ul.nr="webInfo.navigationReason",ul.ncnp="webInfo.nonPreloadedNodeCount",ul.paused="playerInfo.isPausedOnLoad",ul.fmt="playerInfo.itag",ul.yt_pl="watchInfo.isPlaylist",ul.yt_ad_pr=
"prerollAllowed",ul.yt_red="isRedSubscriber",ul.st="serverTimeMs",ul.vph="viewportHeight",ul.vpw="viewportWidth",ul.yt_vis="isVisible",ul);mba="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
pba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
"video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"};lba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" ");Pi=!1;si=!1;
iba=(0,g.t)(ni.clearResourceTimings||ni.webkitClearResourceTimings||ni.mozClearResourceTimings||ni.msClearResourceTimings||ni.oClearResourceTimings||g.va,ni);wj=Gi;Qba=Ni;g.lj=Fi;g.ea(cj,g.ud);g.h=cj.prototype;
g.h.em=function(a){this.ob()||(this.mb=a=g.Pg(a),this.C=a.clone(),this.F=this.C.attrs.id||this.F,"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N),this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F),this.C.args.enablejsapi="1",this.C.args.playerapiid=this.N,this.ka||(this.ka=kj(this,this.C.args.jsapicallback||"onYouTubePlayerReady")),this.C.args.jsapicallback=null,(a=this.C.attrs.width)&&g.Dc(this.H,Number(a)||a),(a=this.C.attrs.height)&&g.Cc(this.H,Number(a)||a),tba(this),
this.L&&dj(this))};
g.h.ex=function(){return this.mb};
g.h.fC=function(){return this.L};
g.h.Xh=function(a,b){var c=this,d=kj(this,b);if(d){if(!g.Ia(this.tb,a)&&!this.D[a]){var e=vba(this,a);this.W&&this.W(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.L&&g.Df(function(){d(c.api)},0)}};
g.h.FK=function(a,b){if(!this.ob()){var c=kj(this,b);c&&g.af(this.J,a,c)}};
g.h.Fv=function(a){g.E("a11y-announce",a)};
g.h.lG=function(a){g.E("WATCH_LATER_VIDEO_ADDED",a)};
g.h.mG=function(a){g.E("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Ux=function(){return this.la||(ej(this)?"html5":null)};
g.h.Cx=function(){return this.bb};
g.h.cancel=function(){if(this.R){var a=this.R,b=g.Of(this.C.assets.js);window.spf.script.ignore(b,a)}g.Ff(this.qb);this.V=!1};
g.h.X=function(){hj(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.yf(b)}this.Sa=null;for(var a in this.D)g.n[this.D[a]]=null;this.mb=this.C=this.api=null;delete this.oa;delete this.H;g.ud.prototype.X.call(this)};g.nj={};g.mj="player_uid_"+(1E9*Math.random()>>>0);var uj=null;g.vl=window.performance&&window.performance.memory;g.gk={};var Dj=0,zj=[],Cj=[],vj=0,Aj={},Bj={},xj=new g.Ke(Eba,1E3);var Gba=["server_prefetched_vast","vmap"];var Gj,Lj;g.Kj=null;Lj="";var Nj=null,Qj=[];var Uj,mk,lk,Wj,Vj,Mba,Pba,Nba,Oba,hk;Wj=0;Vj=0;Mba=[900,60,"waiting"];Pba=[500,99,"waiting"];Nba=[300,60,"waiting"];Oba=[400,99,"waiting"];hk=[300,101,"done"];var tk=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.uf,void 0);g.p("yt.pushConfigArray",xf,void 0);g.p("yt.getConfig",g.C,void 0);g.p("yt.config.set",g.uf,void 0);g.p("yt.config.pushArray",xf,void 0);g.p("yt.config.get",g.C,void 0);g.p("yt.hasMsg",g.ai,void 0);g.p("yt.setMsg",$h,void 0);g.p("yt.setGoogMsg",bi,void 0);g.p("yt.msgs.has",g.ai,void 0);g.p("yt.msgs.set",$h,void 0);g.p("yt.msgs.setGoog",bi,void 0);g.p("yt.pubsub.publish",g.E,void 0);g.p("yt.pubsub.subscribe",g.Lf,void 0);
g.p("ytcsi.tick",g.lj,void 0);g.v(yk,g.Uh);
yk.prototype.enable=function(){window.onload=Kba;window.onunload=Lba;window.onerror=Naa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Sj),window.addEventListener("spfhistory",Tj),window.addEventListener("spfrequest",Yj),window.addEventListener("spfpartprocess",ck),window.addEventListener("spfpartdone",dk),window.addEventListener("spfprocess",ek),window.addEventListener("spfdone",ik),window.addEventListener("spferror",jk),window.addEventListener("spfreload",
kk),window.addEventListener("spfjsbeforeunload",zk)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Sba),this.subscribe("dispose",Tba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
yk.prototype.init=function(){yk.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.C("PAGEFRAME_JS")){var b=g.C("PAGEFRAME_JS",void 0);var c=function(){var a=g.r("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.r("yt.www.masthead.loadSearchbox"))&&a();
a=g.C("JS_COMMON_MODULE");var d=g.C("JS_PAGE_MODULES");d||(d=[a]);a=g.C("JS_DELAY_LOAD",0);0<a?(g.Ff(this.D),this.D=g.Df(function(){b&&g.Pf(b,c);window.spf.script.require(d)},a)):(b&&g.Pf(b,c),window.spf.script.require(d));
g.p("yt.abuse.player.botguardInitialized",g.eg,void 0);g.p("yt.abuse.player.invokeBotguard",g.fg,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",g.$f,void 0);g.p("yt.player.exports.navigate",g.ii,void 0);g.p("yt.util.activity.init",g.kh,void 0);g.p("yt.util.activity.getTimeSinceActive",g.mh,void 0);g.p("yt.util.activity.setTimestamp",g.ih,void 0);Mj(g.r("ytplayer.config"));g.r("ytspf.enabled")&&Iba();hba();g.C("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.bg("service_worker_enabled")?hca():fca())};
yk.prototype.dispose=function(){g.Ff(this.D);var a=g.r("ytbin.www.pageframe.cancelSetup");a&&a();g.Gf(Gj);if(a=g.Ij())a.removeEventListener("onReady",Hj),a.removeEventListener("onStateChange",Hj);zi(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.D(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.Lg(a);yk.M.dispose.call(this)};
yk.prototype.disable=function(){yk.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Sj),window.removeEventListener("spfhistory",Tj),window.removeEventListener("spfrequest",Yj),window.removeEventListener("spfpartprocess",ck),window.removeEventListener("spfpartdone",dk),window.removeEventListener("spfprocess",ek),window.removeEventListener("spfdone",ik),window.removeEventListener("spferror",jk),window.removeEventListener("spfreload",kk),window.removeEventListener("spfjsbeforeunload",
zk));window.onload=null;window.onunload=null;window.onerror=null};
g.Yh(new yk);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:18:51 Jun 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:35:39 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 104.778
  exclusion.robots: 0.092
  exclusion.robots.policy: 0.08
  cdx.remote: 0.068
  esindex: 0.009
  LoadShardBlock: 57.045 (3)
  PetaboxLoader3.datanode: 105.104 (5)
  load_resource: 213.474 (2)
  PetaboxLoader3.resolve: 154.721 (2)
*/