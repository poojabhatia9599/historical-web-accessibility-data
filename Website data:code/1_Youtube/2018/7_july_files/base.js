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

var _yt_www={};(function(g){var window=this;var fa,ka,ja,la,baa,na,oa,pa,daa,eaa,Va,qb,naa,ub,paa,Ac,Bc,Mc,raa,Wc,Yc,Zc,ad,$c,bd,saa,dd,ed,taa,hd,md,nd,qd,uaa,vaa,rd,sd,Ad,xaa,Ed,Gd,Hd,Md,yaa,Pd,Xd,Wd,Aaa,$d,ae,be,ce,Baa,de,ee,je,Caa,ke,re,ze,xe,ue,Eaa,Ce,Ae,Be,Fe,Daa,Faa,Ke,Le,Pe,Gaa,Haa,Iaa,We,Ye,Kaa,cf,df,ef,Laa,hf,mf,nf,of,pf,qf,sf,vf,xf,Naa,Ff,Qf,Qaa,Wf,Rf,Zf,Raa,Saa,lg,Taa,mg,ng,Uaa,sg,qg,og,ug,Bg,Mg,Ng,bba,Tg,ih,oh,ph,cba,vh,yh,Fh,Eh,dba,Jh,Rh,Uh,Yh,ai,ci,eba,hba,pi,qi,ri,si,mba,Ki,wi,Li,xi,ui,Mi,yi,iba,Ti,Ei,Fi,Vi,jba,kba,Gi,Bi,Ci,
vi,Di,Yi,Ii,Ni,Ji,rba,Ai,Si,$i,bj,cj,ej,uba,dj,fj,vba,ij,aj,jj,wba,gj,hj,xba,qj,yba,Eba,Dba,Cba,xj,Bba,zba,Aba,Fba,Gba,Iba,Jba,Lj,Gj,Ij,Nj,Kba,Oj,Qj,Lba,Mba,Rj,Sj,Xj,bk,ck,dk,hk,ik,jk,Tba,Uba,Yj,ak,Wj,Sba,Zj,nk,pk,mk,qk,ok,Vba,Zba,Wba,bca,Yba,Xba,$ba,aca,dca,tk,cca,rk,eca,gca,ica,hca,fca,uk,vk,wk,ca,xk,Ca,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
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
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.lw=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
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
g.Qb=function(a){if(a instanceof g.Mb)return a;a=a.Xd?a.Vc():String(a);Ob.test(a)||(a="about:invalid#zClosurez");return g.Pb(a)};
g.Rb=function(a){if(a instanceof g.Mb)return a;a=a.Xd?a.Vc():String(a);Ob.test(a)||(a="about:invalid#zClosurez");return g.Pb(a)};
g.Pb=function(a){var b=new g.Mb;b.C=a;return b};
g.Tb=function(){this.C="";this.F=g.Sb};
g.Ub=function(a){var b=new g.Tb;b.C=a;return b};
g.Wb=function(){this.C="";this.F=g.Vb};
g.Xb=function(a){var b=new g.Wb;b.C=a;return b};
g.$b=function(){this.C="";this.D=Zb;this.F=null};
g.ac=function(a){if(a instanceof g.$b&&a.constructor===g.$b&&a.D===Zb)return a.C;g.xa(a);return"type_error:SafeHtml"};
g.cc=function(a){if(a instanceof g.$b)return a;var b=null;a.Nl&&(b=a.vf());a=g.Ta(a.Xd?a.Vc():String(a));return g.bc(a,b)};
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
g.mc=function(a,b){g.ab(b,function(b,d){b&&b.Xd&&(b=b.Vc());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:lc.hasOwnProperty(d)?a.setAttribute(lc[d],b):g.Oa(d,"aria-")||g.Oa(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.oc=function(a){return g.nc(a||window)};
g.nc=function(a){a=a.document;a=g.pc(a)?a.documentElement:a.body;return new g.jc(a.clientWidth,a.clientHeight)};
g.rc=function(a,b,c){return g.qc(window.document,arguments)};
g.qc=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ta(d.name),'"');if(d.type){c.push(' type="',g.Ta(d.type),'"');var e={};g.lb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.sa(d)?c.className=d:g.ya(d)?c.className=d.join(" "):g.mc(c,d));2<b.length&&g.sc(a,c,b,2);return c};
g.sc=function(a,b,c,d){function e(c){c&&b.appendChild(g.sa(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.za(f)||g.Ba(f)&&0<f.nodeType?e(f):(0,g.z)(paa(f)?g.Ma(f):f,e)}};
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
Ac=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)};
Bc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)};
g.Cc=function(a,b){var c=!1,d=!1;d=void 0===d?!1:d;c=void 0===c?!1:c;g.n.google_image_requests||(g.n.google_image_requests=[]);var e=g.n.document.createElement("img");if(b||c){var f=function(a){b&&b(a);c&&g.La(g.n.google_image_requests,e);Bc(e,"load",f);Bc(e,"error",f)};
Ac(e,"load",f);Ac(e,"error",f)}d&&(e.referrerPolicy="no-referrer");e.src=a;g.n.google_image_requests.push(e)};
g.Dc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Ec=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Fc=function(a,b){a.style.height=g.Ec(b,!0)};
g.Gc=function(a,b){a.style.width=g.Ec(b,!0)};
g.Hc=function(a){return!!a.google_async_iframe_id};
g.Lc=function(){if(Ic&&!g.xc(Jc)){var a="."+g.Kc.domain;try{for(;2<a.split(".").length&&!g.xc(Jc);)g.Kc.domain=a=a.substr(a.indexOf(".")+1),Jc=window.parent}catch(b){}g.xc(Jc)||(Jc=window)}return Jc};
Mc=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
g.Nc=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.Oc=function(a){return a.match(qaa)};
g.Pc=function(a){return a?(0,window.decodeURI)(a):a};
g.Qc=function(a){return g.Pc(g.Oc(a)[3]||null)};
g.Rc=function(a){a=g.Oc(a);return g.Nc(null,null,null,null,a[5],a[6],a[7])};
g.Sc=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.Tc=function(a,b,c){if(g.ya(b))for(var d=0;d<b.length;d++)g.Tc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ra(b)))};
g.Uc=function(a){var b=[],c;for(c in a)g.Tc(c,a[c],b);return b.join("&")};
g.Vc=function(a,b){var c=g.Uc(b);return g.Sc(a,c)};
g.Xc=function(a){var b=a||g.n,c=[],d=null;do{var e=b;if(g.xc(e)){var f=e.location.href;d=e.document&&e.document.referrer||null}else f=d,d=null;c.push(new Wc(f||"",e));try{b=e.parent}catch(k){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||g.n;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.Gq=!0);return c};
raa=function(a,b){this.C=a;this.F=b};
Wc=function(a,b,c){this.url=a;this.Mg=b;this.Gq=!!c;this.depth=g.ua(void 0)?void 0:null};
Yc=function(){this.D="&";this.G=g.qa(void 0)?void 0:"trn";this.H=!1;this.F={};this.K=0;this.C=[]};
Zc=function(a,b){var c={};c[a]=b;return[c]};
ad=function(a,b,c,d,e){var f=[];g.yc(a,function(a,l){var k=$c(a,b,c,d,e);k&&f.push(l+"="+k)});
return f.join(b)};
$c=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],k=0;k<a.length;k++)f.push($c(a[k],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(ad(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
bd=function(a,b,c,d){a.C.push(b);a.F[b]=Zc(c,d)};
saa=function(a){if(!a.G)return 4E3;var b=1,c;for(c in a.F)b=c.length>b?c.length:b;return 4E3-a.G.length-b-a.D.length-1};
g.cd=function(a,b,c,d,e){if(Math.random()<(d||a.C))try{if(c instanceof Yc)var f=c;else f=new Yc,g.yc(c,function(a,b){var c=f,d=c.K++,e=Zc(b,a);c.C.push(d);c.F[d]=e});
var k=f.getUrl(a.G,a.F,a.D+b+"&","");k&&("undefined"===typeof e?g.Cc(k,void 0):g.Cc(k,e))}catch(l){}};
dd=function(){var a=g.n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.A)()};
ed=function(){var a=void 0===a?g.n:a;return(a=a.performance)&&a.now?a.now():null};
taa=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
hd=function(){var a=fd;this.events=[];this.F=a||g.n;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.C=gd()||(null!=b?b:1>Math.random())};
g.jd=function(a){a&&id&&gd()&&(id.clearMarks("goog_"+a.uniqueId+"_start"),id.clearMarks("goog_"+a.uniqueId+"_end"))};
md=function(){var a=kd;this.D=g.ld;this.G=this.F;this.C=void 0===a?null:a};
g.pd=function(a){return new nd(g.od(a),a.fileName,a.lineNumber)};
g.od=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
nd=function(a,b,c){Mc.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
qd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
uaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=q=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var q=l^d&(f^l);var w=1518500249}else q=d^f^l,w=1859775393;else 60>c?(q=d&f|l&(d|f),w=2400959708):(q=d^f^l,w=3395469782);q=((a<<5|a>>>27)&4294967295)+q+m+w+b[c]&4294967295;m=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=q}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==q)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[q++]=a[d++],w++,64==q)for(q=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>q?c(l,56-q):c(l,64-(q-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,w;a();return{reset:a,update:c,digest:d,Lw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
vaa=function(a,b,c){var d=[],e=[];if(1==(g.ya(c)?2:1))return e=[b,a],(0,g.z)(d,function(a){e.push(a)}),rd(e.join(" "));
var f=[],k=[];(0,g.z)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ja(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.z)(d,function(a){e.push(a)});
a=rd(e.join(" "));a=[c,a];g.Ja(k)||a.push(k.join(""));return a.join("_")};
rd=function(a){var b=uaa();b.update(a);return b.Lw().toLowerCase()};
sd=function(a){var b=qd(String(g.n.location.href)),c=g.n.__OVERRIDE_SID;null==c&&(c=(new g.Db(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.n.__SAPISID:g.n.__APISID,null==b&&(b=(new g.Db(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.n.location.href);return d&&b&&c?[c,vaa(qd(d),b,a||null)].join(" "):null}return null};
g.td=function(){this.Dc=this.Dc;this.Yb=this.Yb};
g.wd=function(a,b){g.ud(a,g.u(g.vd,b))};
g.ud=function(a,b){a.Dc?g.qa(void 0)?b.call(void 0):b():(a.Yb||(a.Yb=[]),a.Yb.push(g.qa(void 0)?(0,g.t)(b,void 0):b))};
g.vd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.xd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.Et=!0};
Ad=function(a){return g.yd?"webkit"+a:g.zd?"o"+a.toLowerCase():a.toLowerCase()};
g.Bd=function(a,b){g.xd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.mc=null;a&&this.init(a,b)};
g.Dd=function(a){return!(!a||!a[Cd])};
xaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.qh=e;this.key=++waa;this.Dg=this.mi=!1};
Ed=function(a){a.Dg=!0;a.listener=null;a.C=null;a.src=null;a.qh=null};
g.Fd=function(a){this.src=a;this.listeners={};this.C=0};
Gd=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.La(a.listeners[c],b);d&&(Ed(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Hd=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Dg&&f.listener==b&&f.capture==!!c&&f.qh==d)return e}return-1};
g.Kd=function(a,b,c,d,e){if(d&&d.once)return g.Jd(a,b,c,d,e);if(g.ya(b)){for(var f=0;f<b.length;f++)g.Kd(a,b[f],c,d,e);return null}c=g.Ld(c);return g.Dd(a)?a.O(b,c,g.Ba(d)?!!d.capture:!!d,e):Md(a,b,c,!1,d,e)};
Md=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ba(e)?!!e.capture:!!e,l=g.Nd(a);l||(a[Od]=l=new g.Fd(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=yaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)zaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Pd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Qd++;return c};
yaa=function(){var a=Aaa,b=Rd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Jd=function(a,b,c,d,e){if(g.ya(b)){for(var f=0;f<b.length;f++)g.Jd(a,b[f],c,d,e);return null}c=g.Ld(c);return g.Dd(a)?a.Qe(b,c,g.Ba(d)?!!d.capture:!!d,e):Md(a,b,c,!0,d,e)};
g.Sd=function(a,b,c,d,e){if(g.ya(b))for(var f=0;f<b.length;f++)g.Sd(a,b[f],c,d,e);else d=g.Ba(d)?!!d.capture:!!d,c=g.Ld(c),g.Dd(a)?a.Va(b,c,d,e):a&&(a=g.Nd(a))&&(b=a.rf(b,c,d,e))&&g.Td(b)};
g.Td=function(a){if(g.ua(a)||!a||a.Dg)return!1;var b=a.src;if(g.Dd(b))return Gd(b.Ad,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Pd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Qd--;(c=g.Nd(b))?(Gd(c,a),0==c.C&&(c.src=null,b[Od]=null)):Ed(a);return!0};
Pd=function(a){return a in Vd?Vd[a]:Vd[a]="on"+a};
Xd=function(a,b,c,d){var e=!0;if(a=g.Nd(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Dg&&(f=Wd(f,d),e=e&&!1!==f)}return e};
Wd=function(a,b){var c=a.listener,d=a.qh||a.src;a.mi&&g.Td(a);return c.call(d,b)};
Aaa=function(a,b){if(a.Dg)return!0;if(!Rd){var c=b||g.r("window.event"),d=new g.Bd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Xd(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Xd(c[k],f,!1,d),e=e&&l}return e}return Wd(a,new g.Bd(b,
this))};
g.Nd=function(a){a=a[Od];return a instanceof g.Fd?a:null};
g.Ld=function(a){if(g.Aa(a))return a;a[Yd]||(a[Yd]=function(b){return a.handleEvent(b)});
return a[Yd]};
g.Zd=function(){g.td.call(this);this.Ad=new g.Fd(this);this.Sv=this;this.Cm=null};
$d=function(a,b,c,d){b=a.Ad.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Dg&&k.capture==c){var l=k.listener,m=k.qh||k.src;k.mi&&Gd(a.Ad,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.Et};
ae=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
be=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
ce=function(a){g.n.setTimeout(function(){throw a;},0)};
Baa=function(){var a=g.n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.$a("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.mb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.qa(c.next)){c=c.next;var a=c.jo;c.jo=null;a()}};
return function(a){d.next={jo:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.n.setTimeout(a,0)}};
de=function(){this.F=this.C=null};
ee=function(){this.next=this.scope=this.lc=null};
je=function(a,b){fe||Caa();ge||(fe(),ge=!0);he.add(a,b)};
Caa=function(){if(g.n.Promise&&g.n.Promise.resolve){var a=g.n.Promise.resolve(void 0);fe=function(){a.then(ke)}}else fe=function(){var a=ke;
!g.Aa(g.n.setImmediate)||g.n.Window&&g.n.Window.prototype&&!g.$a("Edge")&&g.n.Window.prototype.setImmediate==g.n.setImmediate?(le||(le=Baa()),le(a)):g.n.setImmediate(a)}};
ke=function(){for(var a;a=he.remove();){try{a.lc.call(a.scope)}catch(b){ce(b)}be(me,a)}ge=!1};
g.ne=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.oe=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.qe=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.K=!1;if(a!=g.va)try{var c=this;a.call(b,function(a){g.pe(c,2,a)},function(a){g.pe(c,3,a)})}catch(d){g.pe(this,3,d)}};
re=function(){this.next=this.context=this.onRejected=this.D=this.C=null;this.F=!1};
g.te=function(a,b,c){var d=se.get();d.D=a;d.onRejected=b;d.context=c;return d};
g.ve=function(a,b,c){ue(a,b,c,null)||je(g.u(b,a))};
g.we=function(a){return new g.qe(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],g.ve(m,g.u(f,l),k);
else b(e)})};
g.ye=function(a,b){return xe(a,null,b,void 0)};
ze=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.F||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?ze(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Ae(c),Be(c,e,3,b)))}a.D=null}else g.pe(a,3,b)};
g.De=function(a,b){a.F||2!=a.C&&3!=a.C||Ce(a);a.G?a.G.next=b:a.F=b;a.G=b};
xe=function(a,b,c,d){var e=g.te(null,null,null);e.C=new g.qe(function(a,k){e.D=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){k(q)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!g.qa(e)&&b instanceof g.Ee?k(b):a(e)}catch(q){k(q)}}:k});
e.C.D=a;g.De(a,e);return e.C};
g.pe=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,ue(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,Ce(a),3!=b||c instanceof g.Ee||Daa(a,c)))};
ue=function(a,b,c,d){if(a instanceof g.qe)return g.De(a,g.te(b||g.va,c||null,d)),!0;if(g.oe(a))return a.then(b,c,d),!0;if(g.Ba(a))try{var e=a.then;if(g.Aa(e))return Eaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Eaa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Ce=function(a){a.K||(a.K=!0,je(a.J,a))};
Ae=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Be=function(a,b,c,d){if(3==c&&b.onRejected&&!b.F)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Fe(b,c,d);else try{b.F?b.D.call(b.context):Fe(b,c,d)}catch(e){Ge.call(null,e)}be(se,b)};
Fe=function(a,b,c){2==b?a.D.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Daa=function(a,b){a.H=!0;je(function(){a.H&&Ge.call(null,b)})};
g.Ee=function(a){g.Ea.call(this,a)};
g.He=function(a,b,c){if(g.Aa(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.n.setTimeout(a,b||0)};
g.Ie=function(a){g.n.clearTimeout(a)};
g.Je=function(a,b,c){g.td.call(this);this.C=a;this.D=b||0;this.F=c;this.hc=(0,g.t)(this.wp,this)};
Faa=function(){this.F=-1};
Ke=function(){this.F=64;this.C=[];this.K=[];this.R=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
Le=function(a,b,c){c||(c=0);var d=a.R;if(g.sa(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):(f=c^k^l,
q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.Me=function(a){if(a.classList)return a.classList;a=a.className;return g.sa(a)&&a.match(/\S+/g)||[]};
g.B=function(a,b){return a.classList?a.classList.contains(b):g.Ia(g.Me(a),b)};
g.Ne=function(){};
Pe=function(a){if(a instanceof g.Ne)return a;if("function"==typeof a.fd)return a.fd(!1);if(g.za(a)){var b=0,c=new g.Ne;c.next=function(){for(;;){if(b>=a.length)throw g.Oe;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Qe=function(a,b,c){if(g.za(a))try{(0,g.z)(a,b,c)}catch(d){if(d!==g.Oe)throw d;}else{a=Pe(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Oe)throw d;}}};
Gaa=function(a){if(g.za(a))return g.Ma(a);a=Pe(a);var b=[];g.Qe(a,function(a){b.push(a)});
return b};
g.Se=function(a,b){this.F={};this.C=[];this.We=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.Re(this,a)};
Haa=function(a,b){return a===b};
g.Ve=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.Te(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.Te(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.Re=function(a,b){if(b instanceof g.Se)for(var c=b.Jc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.Te=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.Xe=function(a){var b=[];We(new Iaa,a,b);return b.join("")};
Iaa=function(){};
We=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.ya(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),We(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ye(d,c),c.push(":"),We(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ye(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Ye=function(a,b){b.push('"',a.replace(Jaa,function(a){var b=Ze[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ze[a]=b);return b}),'"')};
g.$e=function(a){g.td.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.K=!!a};
g.af=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ga(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.vd(b)}};
Kaa=function(a,b,c){je(function(){a.apply(b,c)})};
g.bf=function(a){this.C=a};
cf=function(a){this.C=a};
df=function(a){this.data=a};
ef=function(a){return!g.qa(a)||a instanceof df?a:new df(a)};
g.ff=function(a){this.C=a};
g.gf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.A)()||!!b&&b>(0,g.A)()};
Laa=function(){};
hf=function(){};
g.jf=function(a){this.C=a};
g.kf=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
mf=function(a,b){this.F=a;this.C=null;if(g.C&&!g.yb(9)){lf||(lf=new g.Se);this.C=lf.get(a);this.C||(b?this.C=window.document.getElementById(b):(this.C=window.document.createElement("userdata"),this.C.addBehavior("#default#userData"),window.document.body.appendChild(this.C)),lf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
nf=function(a){return"_"+(0,window.encodeURIComponent)(a).replace(/[.!~*'()%]/g,function(a){return Maa[a]})};
of=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
pf=function(a){return a.C.XMLDocument.documentElement};
qf=function(a,b){this.F=a;this.C=b+"::"};
g.rf=function(a){var b=new g.kf;return b.isAvailable()?a?new qf(b,a):b:null};
sf=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.uf=function(a){sf(g.tf,arguments)};
vf=function(a,b){var c=g.D(a,void 0);c?c.push(b):g.uf(a,[b])};
g.D=function(a,b){return a in g.tf?g.tf[a]:b};
xf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.wf(b)}}:a};
g.wf=function(a,b,c,d,e){var f=g.r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.D("ERRORS",[]),f.push([a,b,c,d,e]),g.uf("ERRORS",f))};
g.yf=function(a){g.wf(a,"WARNING",void 0,void 0,void 0)};
Naa=function(a,b,c,d,e){var f=!1,k;if((k=(k=g.tf.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.sa(a)?f=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.wf(e))};
g.E=function(a,b){return a?a.dataset?a.dataset[g.zf(b)]:a.getAttribute("data-"+b):null};
g.zf=function(a){return Af[a]||(Af[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Bf=function(a,b){g.Aa(a)&&(a=xf(a));return window.setTimeout(a,b)};
g.Cf=function(a,b){g.Aa(a)&&(a=xf(a));return window.setInterval(a,b)};
g.Df=function(a){window.clearTimeout(a)};
g.Ef=function(a){window.clearInterval(a)};
g.Jf=function(a,b,c){var d=Ff();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Gf[e]&&b.apply(c||window,d)};
try{Hf[a]?k():g.Bf(k,0)}catch(l){g.wf(l)}},c);
Gf[e]=!0;If[a]||(If[a]=[]);If[a].push(e);return e}return 0};
g.Kf=function(a){var b=Ff();b&&(g.ua(a)?a=[a]:g.sa(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.z)(a,function(a){b.unsubscribeByKey(a);delete Gf[a]}))};
g.F=function(a,b){var c=Ff();return c?c.publish.apply(c,arguments):!1};
g.Lf=function(a,b){Hf[a]=!0;var c=Ff();c=c?c.publish.apply(c,arguments):!1;Hf[a]=!1;return c};
Ff=function(){return g.r("ytPubsubPubsubInstance")};
g.Nf=function(a,b){var c=g.Mf(a);window.spf.script.load(a,c,b)};
g.Of=function(a){a=g.Mf(a);window.spf.script.unload(a)};
g.Mf=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Oaa,""),b=b.replace(Paa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.Pf=function(){this.F=!1;this.C=null};
Qf=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.yf(d)}c&&c(b)};
Qaa=function(){};
g.Sf=function(a,b){return Rf(a,0,b)};
g.Tf=function(a,b){return Rf(a,1,b)};
g.Vf=function(a){for(var b=0,c=a.length;b<c;b++)g.Uf(a[b])};
Wf=function(){};
g.Xf=function(){return!!g.r("yt.scheduler.instance")};
Rf=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Bf(a,c||0)};
g.Uf=function(a){if(!(0,window.isNaN)(a)){var b=g.r("yt.scheduler.instance.cancelJob");b?b(a):g.Df(a)}};
g.Yf=function(){return(0,window.parseInt)(g.D("DCLKSTAT",0),10)};
g.$f=function(a){return!!Zf(a)};
g.ag=function(a){return Number(Zf(a)||0)};
Zf=function(a){return g.D("EXPERIMENT_FLAGS",{})[a]};
g.cg=function(){return g.bg.If()};
g.dg=function(){return g.bg.invoke()};
Raa=function(){if(!eg)return null;var a=eg();return"open"in a?a:null};
g.gg=function(a){switch(g.fg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.fg=function(a){return a&&"status"in a?a.status:-1};
g.hg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Sa(e[0]||"");e=g.Sa(e[1]||"");f in b?g.ya(b[f])?g.Na(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.jg=function(a,b){return g.ig(a,b||{},!0)};
g.ig=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.hg(e[1]||"");for(var f in b)if(c||!g.cb(e,f))e[f]=b[f];return g.Vc(a,e)+d};
Saa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.Oc(a)[1]||null,e=g.Qc(a);d&&e?(d=c,c=g.Oc(a),d=g.Oc(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.Qc(c)==e&&(Number(g.Oc(c)[4]||null)||null)==(Number(g.Oc(a)[4]||null)||null):!0;for(var f in kg)(d=g.D(kg[f]))&&(c||lg(a,f))&&(b[f]=d);if(c||lg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b};
lg=function(a,b){var c=g.D("CORS_HEADER_WHITELIST")||{},d=g.Qc(a);return d?(c=c[d])?g.Ia(c,b):!1:!0};
Taa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=mg(a,b);var d=ng(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.Df(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.n;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Ya&&b.Ya.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Or&&0<b.timeout&&(f=g.Bf(function(){e||(e=!0,g.Df(f),b.Or.call(b.context||g.n))},b.timeout))}else g.G(a,b)};
g.G=function(a,b){var c=b.format||"JSON";a=mg(a,b);var d=ng(a,b),e=!1,f,k=og(a,function(a){if(!e){e=!0;f&&g.Df(f);var d=g.gg(a),k=null;if(d||400<=a.status&&500>a.status)k=Uaa(c,a,b.nb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.n;d?b.onSuccess&&b.onSuccess.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Ya&&b.Ya.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Oc&&0<b.timeout&&(f=g.Bf(function(){e||(e=!0,k.abort(),g.Df(f),b.Oc.call(b.context||g.n,k))},b.timeout));
return k};
mg=function(a,b){b.AB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.D("XSRF_FIELD_NAME",void 0),d=b.za;d&&(d[c]&&delete d[c],a=g.jg(a,d));return a};
ng=function(a,b){var c=g.D("XSRF_FIELD_NAME",void 0),d=g.D("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ha,k=g.D("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.bx||g.Qc(a)&&!b.withCredentials&&g.Qc(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ha&&b.ha[k]||(f||(f={}),f[c]=d);f&&g.sa(e)&&(e=g.hg(e),g.lb(e,f),e=b.Qs&&"JSON"==b.Qs?JSON.stringify(e):g.Uc(e));f=e||f&&!g.eb(f);!pg&&f&&"POST"!=b.method&&(pg=!0,g.wf(Error("AJAX request with postData should use POST")));
return e};
Uaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?qg(b):null)d={},(0,g.z)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.rg(a)})}c&&sg(d);
return d};
sg=function(a){if(g.Ba(a))for(var b in a)"html_content"==b||g.Pa(b,"_html")?a[b]=g.fc(g.Kb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):sg(a[b])};
qg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.rg=function(a){var b="";(0,g.z)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.tg=function(a,b){b.method="POST";b.ha||(b.ha={});return g.G(a,b)};
og=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&xf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Raa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof window.FormData));if(e=Saa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
ug=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.vg=function(a){var b=new ug;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.wg=function(a){var b=new ug;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.yg=function(a){var b=a.__yt_uid_key;b||(b=xg(),a.__yt_uid_key=b);return b};
g.zg=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Vaa+"VisibilityState";if(b in a)return a[b]};
g.Ag=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Waa||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
Bg=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Cg=function(a){g.qa(a.C)||Bg(a);return a.C};
g.Dg=function(a){g.qa(a.F)||Bg(a);return a.F};
g.Fg=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.db(Eg,function(e){var f=g.ta(e[4])&&e[4]==!!d,k=g.Ba(e[4])&&g.Ba(d)&&g.hb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.H=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Fg(a,b,c,d);if(e)return e;e=++Gg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.Ag(d);if(!g.wc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.Ag(b);
b.currentTarget=a;return c.call(a,b)};
k=xf(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),Hg()||g.ta(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);Eg[e]=[a,b,c,k,d];return e};
g.Ig=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.z)(a,function(a){if(a in Eg){var b=Eg[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Hg()||g.ta(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Eg[a]}}))};
g.Jg=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.H(a,b,function(){g.Ig(e);c.apply(a,arguments)},d)};
g.Kg=function(a){for(var b in Eg)Eg[b][0]==a&&g.Ig(b)};
g.Lg=function(a){this.hc=a;this.C=null;this.D=0;this.K=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.H(window,"mousemove",(0,g.t)(this.W,this));this.N=g.Cf((0,g.t)(this.R,this),25)};
Mg=function(){g.td.call(this);this.C=[]};
Ng=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.ib(Xaa);this.assets=a.assets||{};this.attrs=a.attrs||g.ib(Yaa);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Og=function(a){a instanceof Ng||(a=new Ng(a));return a};
g.Rg=function(a,b,c,d,e,f){f=f||{};f.name=c||g.D("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Pg||(c=a.stacktrace,d=a.columnNumber,a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params)),a=g.Fb(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),Qg[a.message]||0<=c.indexOf("/YouTubeCenter.js")||
0<=c.indexOf("/mytube.js")))){b={za:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":f.name},ha:{url:g.D("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ha.stack=c);for(var k in f)b.ha["client."+k]=f[k];if(k=g.D("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ha[l]=k[l];g.G(g.D("ECATCHER_REPORT_HOST","")+"/error_204",b);Qg[a.message]=!0;Pg++}};
g.Xg=function(a,b){if(a.wi){var c=a.wi;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Sg[a.wi.token]=d;c=Tg(a.endpoint,a.wi.token)}else c=Tg(a.endpoint);c.push(a.payload);Ug[a.endpoint]=new b;c.length>=(g.ag("web_logging_max_batch")||20)?g.Vg():g.Wg()};
g.Vg=function(){g.Df(g.Yg);if(!g.eb(g.Zg)){for(var a in g.Zg){var b=Ug[a];if(b){var c=void 0,d=a,e=b,f=Zaa[d],k=$g[d]||{};$g[d]=k;b=Math.round(g.ah());for(c in g.Zg[d]){var l={context:g.bh(e.C)};l[f]=Tg(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;var m=Sg[c];if(m)a:{var q=l,w=c;if(m.videoId)var y="VIDEO";else if(m.playlistId)y="PLAYLIST";else break a;q.credentialTransferTokenTargetId=m;q.context=q.context||{};q.context.user=q.context.user||{};q.context.user.credentialTransferTokens=
[{token:w,scope:y}]}delete Sg[c];m=l;m.requestTimeMs=b;if(y=g.D("EVENT_ID",void 0))q=(g.D("BATCH_CLIENT_COUNTER",void 0)||0)+1,q>$aa&&(q=1),g.uf("BATCH_CLIENT_COUNTER",q),m.serializedClientEventId={serializedEventId:y,clientCounter:q};g.ch(e,d,l,{retry:aba.has(d)})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.Zg[a]}}g.eb(g.Zg)||g.Wg()}};
bba=function(){var a=[];for(e in g.Zg){var b=$g[e]||{};$g[e]=b;for(var c in g.Zg[e]){var d=Tg(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.ah());for(var f in $g)b=$g[f],b.eventType=f in dh?dh[f]:"UNKNOWN_TYPE",c=eh[f],b.metricIntervalMs=c?e-c:e-g.fh,a.push(b),eh[f]=e,delete $g[f];return a};
g.Wg=function(){g.Df(g.Yg);g.Yg=g.Bf(g.Vg,g.D("LOGGING_BATCH_TIMEOUT",g.gh||1E4))};
Tg=function(a,b){b=void 0===b?"":b;g.Zg[a]=g.Zg[a]||{};g.Zg[a][b]=g.Zg[a][b]||[];return g.Zg[a][b]};
g.jh=function(a){var b=void 0===a?{}:a;a=void 0===b.BB?!0:b.BB;b=void 0===b.mJ?!1:b.mJ;if(null==g.r("_lact",window)){var c=(0,window.parseInt)(g.D("LACT"),10);c=(0,window.isFinite)(c)?(0,g.A)()-Math.max(c,0):-1;g.p("_lact",c,window);g.p("_fact",c,window);-1==c&&g.hh();g.H(window.document,"keydown",g.hh);g.H(window.document,"keyup",g.hh);g.H(window.document,"mousedown",g.hh);g.H(window.document,"mouseup",g.hh);a&&(b?g.H(window,"touchmove",function(){ih("touchmove",200)},{passive:!0}):(g.H(window,"resize",
function(){ih("resize",200)}),g.H(window,"scroll",function(){ih("scroll",200)})));
new g.Lg(function(){ih("mouse",100)});
g.H(window.document,"touchstart",g.hh,{passive:!0});g.H(window.document,"touchend",g.hh,{passive:!0})}};
ih=function(a,b){kh[a]||(kh[a]=!0,g.Tf(function(){g.hh();kh[a]=!1},b))};
g.hh=function(){null==g.r("_lact",window)&&g.jh();var a=(0,g.A)();g.p("_lact",a,window);-1==g.r("_fact",window)&&g.p("_fact",a,window);(a=g.r("ytglobal.ytUtilActivityCallback_"))&&a()};
g.lh=function(){var a=g.r("_lact",window);return null==a?-1:Math.max((0,g.A)()-a,0)};
g.nh=function(a,b,c,d){var e=g.mh,f={};f.eventTimeMs=Math.round(c||g.ah());f[a]=b;f.context={lastActivityMs:String(c?-1:g.lh())};g.Xg({endpoint:"log_event",payload:f,wi:d},e)};
g.bh=function(a){a={client:{hl:a.FB,gl:a.EB,clientName:a.DB,clientVersion:a.innertubeContextClientVersion}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.D("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.D("DELEGATED_SESSION_ID")});return a};
oh=function(a,b){var c={"X-Goog-Visitor-Id":g.D("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return c;var d;a?d="Bearer "+g.r("gapi.auth.getToken")().yZ:d=sd([]);d&&(c.Authorization=d,c["X-Goog-AuthUser"]=g.D("SESSION_INDEX",0));return c};
ph=function(a){a=Object.assign({},a);delete a.Authorization;var b=sd();if(b){var c=new Ke;c.update(g.D("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();g.za(b);g.Cb();c=Bb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],k=e+1<b.length,l=k?b[e+1]:0,m=e+2<b.length,q=m?b[e+2]:0,w=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[w],c[f],c[l],c[q])}b=d.join("");a.hash=b}return a};
g.rh=function(a,b,c,d){g.qh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.sh=function(a,b,c){g.qh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.th=function(a){var b;(b=g.rf(a))||(a=new mf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.ff(a):null;this.F=window.document.domain||window.location.hostname};
cba=function(a,b,c,d){if(d)return null;d=uh.get("nextId",!0)||1;var e=uh.get("requests",!0)||{};e[d]={method:a,request:b,authState:ph(c),requestTime:Math.round(g.ah())};uh.set("nextId",d+1,86400,!0);uh.set("requests",e,86400,!0);return d};
vh=function(a){var b=uh.get("requests",!0)||{};delete b[a];uh.set("requests",b,86400,!0)};
yh=function(a){var b=uh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.ah())-d.requestTime)){var e=d.authState,f=ph(oh(!1));g.hb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.ah())),g.ch(a,d.method,e,{}));delete b[c]}}uh.set("requests",b,86400,!0)}};
g.mh=function(a){var b=this;this.C=a||{innertubeApiKey:g.D("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.D("INNERTUBE_API_VERSION",void 0),DB:g.D("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),FB:g.D("INNERTUBE_CONTEXT_HL",void 0),EB:g.D("INNERTUBE_CONTEXT_GL",void 0),GB:g.D("INNERTUBE_HOST_OVERRIDE",void 0)||"",HB:!!g.D("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.Sf(function(){yh(b)},5E3)};
g.ch=function(a,b,c,d){!g.D("VISITOR_DATA")&&.01>Math.random()&&g.wf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ha:c,Qs:"JSON",Oc:function(){d.Oc()},
Or:d.Oc,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
Aj:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Nr:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.GB;k&&(f=k);k=a.C.HB||!1;var l=oh(k,f);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=""+f+("/youtubei/"+a.C.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.C.innertubeApiKey,q;if(d.retry&&g.$f("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(q=cba(b,c,l,k))){var w=e.onSuccess,y=e.Aj;e.onSuccess=function(a,b){vh(q);w(a,b)};
c.Aj=function(a,b){vh(q);y(a,b)}}try{g.$f("use_fetch_for_op_xhr")?Taa(m,e):g.tg(m,e)}catch(I){if("InvalidAccessError"==I)q&&(vh(q),q=0),g.wf(Error("An extension is blocking network request."),"WARNING");
else throw I;}q&&g.Sf(function(){yh(a)},5E3)};
g.zh=function(a,b,c){g.nh(a,b,c,void 0)};
g.Ah=function(){g.$f("log_web_meta")&&bba().forEach(function(a){g.zh("delayedEventMetricCaptured",a)})};
g.Bh=function(a){this.C=a};
g.Ch=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.Ch(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.Dh=function(a,b,c){(0,g.z)(b,function(b){g.nh("visualElementHidden",{csn:a,ve:g.Ch(b),eventType:c?16:8})})};
Fh=function(a,b){var c=Object.keys(a).join("");Eh("info_"+c+"_"+b)||(a.clientActionNonce=b,g.zh("latencyActionInfo",a))};
Eh=function(a){Gh[a]=Gh[a]||{count:0};var b=Gh[a];b.count++;b.time=g.ah();Hh||(Hh=g.Sf(dba,5E3));return 10<b.count?(11==b.count&&g.Rg(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
dba=function(){var a=g.ah(),b;for(b in Gh)6E4<a-Gh[b].time&&delete Gh[b];Hh=0};
Jh=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.A)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ih)for(a=1,b=0;b<Ih.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ih.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Oh=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Kh==a)return;Kh=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.lh()>b)&&"visible"==g.zg()){b=-1;g.Lh&&(b=Math.round(g.ah()-g.Lh));var c=String;var d=g.r("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.A)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.Mh,index:String(Nh),lastEventDeltaMs:String(b),trigger:a};g.nh("foregroundHeartbeat",
a);g.p("_fact",-1,window);Nh++;g.Lh=g.ah()}};
g.Ph=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
g.Qh=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
Rh=function(a){return g.D(g.Qh(void 0===a?0:a),void 0)};
g.Sh=function(){var a=Rh(0),b;a?b=new g.Bh({veType:a,youtubeData:void 0}):b=null;return b};
g.Th=function(a){a=void 0===a?0:a;var b=g.D(g.Ph(a));b||0!=a||(b=g.D("EVENT_ID"));return b?b:null};
Uh=function(){var a=g.Sh(),b=g.Th();b&&a&&g.Dh(b,[a],!0)};
g.Vh=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.K=d?xf(d):null;this.H=e?xf(e):null;this.G=[];this.C=this.F=0};
g.Wh=function(a){g.Uf(a.F);a.F=g.Tf((0,g.t)(a.init,a))};
g.Zh=function(a){a.name in Xh&&Yh(a.name);Xh[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.z)(a.deps,function(b){if(!(b in Xh))throw Error("Module "+b+" required by "+a.name);Xh[b].reqs.push(a.name)});
a.enable()};
Yh=function(a){if(a in Xh){var b=Xh[a];(0,g.z)(b.reqs,function(a){Yh(a)});
try{b.disable()}catch(c){}delete Xh[a]}};
ai=function(a){sf(g.$h,arguments)};
g.bi=function(a){return a in g.$h};
ci=function(a){sf(g.$h,arguments)};
g.di=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Za,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Nb(g.Qb(a)),"about:invalid#zClosurez"===a?a="":(a=g.ac(g.cc(a)),a=g.Ra(g.Xe(a))),g.Qa(a)||(a=g.rc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.vc(a).body.appendChild(a))):e?og(a,b,"POST",e,d):g.D("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?og(a,b,"GET","",d):eba(a,b))};
eba=function(a,b){var c=new window.Image,d=""+fba++;ei[d]=c;c.onload=c.onerror=function(){b&&ei[d]&&b();delete ei[d]};
c.src=a};
g.fi=function(a,b){a=a||"";var c=a.match(gba);window.spf.style.load(a,c?c[1]:"",b)};
g.gi=function(a,b,c){var d=g.D("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Qc(window.location.href);e&&d.push(e);e=g.Qc(a);if(g.Ia(d,e)||!e&&g.Oa(a,"/"))if(g.$f("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.dc(d,a),a=d.href),a&&(a=g.Rc(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Th();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Ya(a).toString(36),b=b?g.Uc(b):"",g.rh(a,b,c||5))):(c="ST-"+g.Ya(a).toString(36),b=b?g.Uc(b):"",
g.rh(c,b,5))}};
g.hi=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.ec(d.location,g.Vc(a,b)+c)};
g.ii=function(a,b){b&&g.gi(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.hi(a)};
g.ji=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.D("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.gi(a,b);if(c)return!1;g.ii(a);return!0};
g.ki=function(a,b){this.version=a;this.args=b};
g.li=function(a,b){this.topic=a;this.C=b};
g.ni=function(a,b){var c=g.mi();c&&c.publish.call(c,a.toString(),a,b)};
g.mi=function(){return g.r("ytPubsub2Pubsub2Instance")};
hba=function(a){if(oi.getEntriesByType){var b=oi.getEntriesByType("paint");if(b=g.Ga(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Aa(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
pi=function(){var a=g.D("TIMING_TICK_EXPIRATION");a||(a={},g.uf("TIMING_TICK_EXPIRATION",a));return a};
qi=function(){var a=pi(),b;for(b in a)g.Uf(a[b]);g.uf("TIMING_TICK_EXPIRATION",{})};
ri=function(a,b){g.ki.call(this,1,arguments)};
si=function(a,b){g.ki.call(this,1,arguments)};
mba=function(){ti=!1;var a=g.D("TIMING_INFO",{});for(b in a)ui(b,a[b]);ui("is_nav",1);(a=g.Th())&&ui("csn",a);(a=g.D("PREVIOUS_ACTION",void 0))&&ui("pa",a);var b=vi();b.p=g.D("CLIENT_PROTOCOL")||"unknown";b.t=g.D("CLIENT_TRANSPORT")||"unknown";ui("yt_vis",iba());if("cold"==b.yt_lt){a=oi.timing||{};a.navigationStart&&(wi("srt",a.responseStart),1!=b.prerender&&xi("n",a.navigationStart));b=hba(a);0<b&&wi("fpt",b);yi(a);oi.getEntriesByType&&jba();a=[];if(window.document.querySelector&&oi&&oi.getEntriesByName)for(var c in zi)b=
zi[c],kba(c,b)&&a.push(b);a.length&&ui("rc",a.join(","))}Ai(void 0)&&(c={},c.actionType=lba[g.D("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Bi(void 0),Fh(c,a));if("cold"==vi().yt_lt){a=Ci();c=Di();for(var d in a)g.Oa(d,"_")||"tick_"+d in c||Ei(d,a[d]);d=vi();for(var e in d)"info_"+e in c||Fi(e,d[e])}Gi(!0);g.Hi(!1)};
Ki=function(a){Ii(a);nba();Ji(!1,a);a||(g.D("TIMING_ACTION")&&g.uf("PREVIOUS_ACTION",g.D("TIMING_ACTION")),g.uf("TIMING_ACTION",""))};
wi=function(a,b,c){b||"_"==a[0]||Li(a,c);var d=Ci(c),e=b||g.ah();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=pi();var f=e[a];f&&(g.Uf(f),e[a]=0);Ei(a,b,c)||g.Hi(!1,c);return d[a]};
Li=function(a,b){oi.mark&&(g.Oa(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),oi.mark(a))};
xi=function(a,b){ui("yt_sts",a,void 0);wi("_start",b,void 0)};
ui=function(a,b,c){vi(c)[a]=b;Fi(a,b,c)};
Mi=function(a){var b=Ci(a);if(b.aft)return b.aft;a=g.D((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
yi=function(a,b){wi("nreqs",a.requestStart,b);wi("nress",a.responseStart,b);wi("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(wi("nrs",a.redirectStart,b),wi("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(wi("ndnss",a.domainLookupStart,b),wi("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(wi("ntcps",a.connectStart,b),wi("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(wi("nstcps",a.secureConnectionStart,
b),wi("ntcpe",a.connectEnd,b))};
g.Hi=function(a,b){if(!Ni(b)){var c=g.D((b||"")+"TIMING_ACTION",void 0),d=Ci(b);if(g.r("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Mi(b)))if(Oi||(g.ni(oba,new ri(Math.round(c-d._start),b)),Oi=!0),a||b)Si(b);else{c=!0;var e=g.D("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Si(b)}}};
iba=function(){switch(g.zg()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Ti=function(a){if(!Ni(void 0)){var b=g.D("CSI_SERVICE_NAME","youtube");g.D("TIMING_ACTION",void 0)&&b&&(wi("aa",void 0,void 0),ui("ap",1,void 0),ui("yt_fss",a,void 0),Si(void 0))}};
Ei=function(a,b,c){Di(c)["tick_"+a]=b;c||b||g.ah();return Ai(c)?(c=Bi(c),"_start"==a?Eh("baseline_"+c)||g.zh("latencyActionBaselined",{clientActionNonce:c},b):Eh("tick_"+a+"_"+c)||g.zh("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Fi=function(a,b,c){Di(c)["info_"+a]=b;if(Ai(c))if(a in Ui){var d=Ui[a];g.Ia(pba,d)&&(b=!!b);a=b;if(Ai(c)){b={};d=d.split(".");for(var e=b,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=a;c=Bi(c);Fh(b,c)}}else g.Ia(qba,a)||g.wf(Error("Unknown label "+a+" logged with GEL CSI."))};
Vi=function(a){return Math.round(oi.timing.navigationStart+a)};
jba=function(){var a=window.location.protocol,b=oi.getEntriesByType("resource");b=(0,g.Wi)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20180701010203/https://fonts.gstatic.com/s/")});
(b=(0,g.Xi)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(wi("wffs",Vi(b.startTime)),wi("wffe",Vi(b.responseEnd)))};
kba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=oi.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,wi("rsf_"+b,d+Math.round(c.fetchStart)),wi("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&("rc"in vi(void 0)||ui("rc",""),0===c.transferSize))?!0:!1:!1};
Gi=function(a){g.p("ytglobal.timingready_",a,void 0)};
Bi=function(a){var b=Yi(a).nonce;b||(b=Jh(),Yi(a).nonce=b);return b};
Ci=function(a){return Yi(a).tick};
vi=function(a){return Yi(a).info};
Di=function(a){a=Yi(a);"gel"in a||(a.gel={});return a.gel};
Yi=function(a){return g.r("ytcsi."+(a||"")+"data_")||Ii(a)};
Ii=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
Ni=function(a){return!!g.r("yt.timing."+(a||"")+"pingSent_")};
Ji=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
rba=function(a){var b=Ci(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==vi(a).yt_pvis};
Ai=function(a){return ti||g.$f("csi_on_gel")||!!Yi(a).useGel};
Si=function(a){qi();if(!Ai(a)){var b=Ci(a),c=vi(a),d=b._start;for(k in b)if(g.Oa(k,"_")&&g.ya(b[k])){var e=k.slice(1);if(e in sba){var f=(0,g.Zi)(b[k],function(a){return Math.round(a-d)});
c["all_"+e]=f.join()}delete b[k]}var k=!!c.ap;if(e=g.r("ytglobal.timingReportbuilder_")){if(b=e(b,c,a))$i(b,k),Ki(a)}else{var l=g.D("CSI_SERVICE_NAME","youtube");e={v:2,s:l,action:g.D((a||"")+"TIMING_ACTION",void 0)};f=ui.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var m=window.location.protocol+g.r("ytplayer.config.assets.js");(m=oi.getEntriesByName?oi.getEntriesByName(m)[0]:null)?c.h5jse=Math.round(c.h5jse-m.responseEnd):delete c.h5jse}b.aft=Mi(a);rba(a)&&"youtube"==l&&(ui("yt_lt","hot_bg",a),
l=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-l));for(var q in c)"_"!=q.charAt(0)&&(e[q]=c[q]);b.ps=g.ah();c={};q=[];for(var w in b)"_"!=w.charAt(0)&&(l=Math.round(b[w]-d),c[w]=l,q.push(w+"."+l));e.rt=q.join(",");(b=g.r("ytdebug.logTiming"))&&b(e,c);$i(e,k,a);g.ni(tba,new si(c.aft+(f||0),a))}}};
$i=function(a,b,c){if(g.$f("debug_csi_data")){var d=g.r("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||g.di(a,void 0,void 0,void 0,f)}catch(k){g.di(a,void 0,void 0,void 0,f)}}else g.di(a);Ji(!0,c)};
bj=function(a,b){g.td.call(this);this.H=this.na=a;this.N=b;this.K=!1;this.api={};this.aa=this.W=null;this.J=new g.$e;g.wd(this,this.J);this.D={};this.la=this.ia=this.F=this.kb=this.C=null;this.V=!1;this.G=this.R=null;this.Sa={};this.sb=["onReady"];this.ab=null;this.pb=window.NaN;this.Y={};aj(this);this.Xh("WATCH_LATER_VIDEO_ADDED",this.GG.bind(this));this.Xh("WATCH_LATER_VIDEO_REMOVED",this.HG.bind(this));this.Xh("onAdAnnounce",this.Rv.bind(this));this.xb=new Mg(this);g.wd(this,this.xb)};
cj=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
ej=function(a){var b=!0,c=dj(a);c&&a.C&&(a=a.C,b=g.E(c,"version")==a.assets.js);return b&&!!g.r("yt.player.Application.create")};
uba=function(a){if(!a.ob()&&!a.V){var b=ej(a);if(b&&"html5"==(dj(a)?"html5":null))a.la="html5",a.K||fj(a);else if(gj(a),a.la="html5",b&&a.G)a.na.appendChild(a.G),fj(a);else{a.C.loaded=!0;var c=!1;a.R=function(){c=!0;var b=a.C.clone();g.r("yt.player.Application.create")(a.na,b);fj(a)};
a.V=!0;b?a.R():(g.Nf(a.C.assets.js,a.R),g.fi(a.C.assets.css),hj(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
dj=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
fj=function(a){if(!a.ob()){var b=dj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||vba(a)):a.pb=g.Bf(function(){fj(a)},50)}};
vba=function(a){aj(a);a.K=!0;var b=dj(a);b.addEventListener&&(a.W=ij(a,b,"addEventListener"));b.removeEventListener&&(a.aa=ij(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=ij(a,b,e))}for(var f in a.D)a.W(f,a.D[f]);cj(a);a.ia&&a.ia(a.api);a.J.oa("onReady",a.api)};
ij=function(a,b,c){var d=b[c];return function(){try{return a.ab=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ab=e,g.yf(e))}}};
aj=function(a){a.K=!1;if(a.aa)for(var b in a.D)a.aa(b,a.D[b]);for(var c in a.Y)g.Df((0,window.parseInt)(c,10));a.Y={};a.W=null;a.aa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Xh.bind(a);a.api.removeEventListener=a.cL.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Sx.bind(a);a.api.getPlayerType=a.ky.bind(a);a.api.getCurrentVideoConfig=a.vx.bind(a);a.api.loadNewVideoConfig=a.jm.bind(a);a.api.isReady=a.AC.bind(a)};
jj=function(a,b){var c=b;if("string"==typeof b){if(a.Sa[b])return a.Sa[b];c=function(){var a=g.r(b);a&&a.apply(g.n,arguments)};
a.Sa[b]=c}return c?c:null};
wba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.n[c]=function(c){var d=g.Bf(function(){a.ob()||(a.J.oa(b,c),g.fb(a.Y,String(d)))},0);
g.gb(a.Y,String(d),!0)};
return c};
gj=function(a){(0,g.kj)("dcp");a.cancel();aj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=dj(a);b&&(ej(a)||!hj(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.tc(a.na)};
hj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.nj=function(a,b){a=g.sa(a)?g.kc(a):a;var c=g.lj+"_"+g.Da(a),d=g.mj[c];if(d)return d.jm(b),d.api;d=new bj(a,c);g.mj[c]=d;g.F("player-added",d.api);g.ud(d,g.u(xba,d));g.Bf(function(){d.jm(b)},0);
return d.api};
xba=function(a){delete g.mj[a.N]};
g.oj=function(a){if(!a)return null;var b=g.lj+"_"+g.Da(a),c=g.mj[b];c||(c=new bj(a,b),g.mj[b]=c);return c.api};
g.pj=function(a){return g.oj(window.document.getElementById(a))};
g.rj=function(a,b){var c={};c.key=a;c.value=b;return qj().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.sj=function(a){return qj().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
qj=function(){return tj?window.Promise.resolve(tj):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))tj=b,a(tj);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),qj()};
c.onupgradeneeded=yba})};
yba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Eba=function(){uj++;var a=g.oc(),b=new g.Dc(0,0,a.width,a.height);vj("vph",a.height);vj("vpw",a.width);(0,g.kj)("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;wj.start();for(var f=0;f<c;f++){var k=a[f];if(xj(k,b)){var l=zba(k);l.then(Aba);d.push(l);yj.push(l);k.loadTime||(e=!1)}}e&&vj("yt_eil",1);(0,g.kj)("vpcc");b=g.we(d).then(Bba);g.ye(b,Cba);b.then(Dba);yj.push(b);return b};
Dba=function(){wj.stop()};
Cba=function(){(0,g.kj)("vpr")};
xj=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.yg(c);if(e in zj)return!0;if(e in Aj)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Aj[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Aj[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)zj[d[c]]=!0;return!0};
Bba=function(a){var b=g.oc();b=new g.Dc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;xj(a[d].zB,b)&&c<f&&(c=f)}return c};
zba=function(a){var b=uj;return new g.qe(function(c,d){var e={zB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){uj!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},Bj.push(a))})};
Aba=function(a){wj.start();a=a.time;Cj<a&&(Cj=a,(0,g.kj)("lim",a))};
Fba=function(){(0,g.kj)("vptl",Cj);(0,g.kj)("vpl",Cj)};
Gba=function(){yj.forEach(function(a){a.cancel()});
Cj=yj.length=0;zj={};Aj={};Bj.forEach(function(a){a.slt=void 0});
Bj.length=0};
g.Dj=function(a,b){g.di("/gen_204?"+a,b)};
Iba=function(a){if(null==a)return[];var b=[];Hba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Ej=function(){return g.B(g.x("page-container"),"remote-connected")};
Jba=function(){Fj=g.Cf(Gj,5E3);var a=g.Hj();a?(a.addEventListener("onReady",Gj),a.addEventListener("onStateChange",Gj)):Ij("unable to init PP monitor")};
Lj=function(a){for(var b in g.mj){var c=g.mj[b];c&&c.cancel()}if(a=a||null){b=g.Hj();var d=!0;c=g.Jj;g.Jj=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Kj="",g.nj("player-api",a)):b.playVideo();a=g.Og(a);a.loaded=!0}Gj();g.p("ytplayer.config",a,void 0)};
g.Hj=function(){return g.pj("player-api")};
Gj=function(){var a=g.Hj();if(a){var b=g.x("player");b=!b||g.B(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.D("PAGE_NAME"),e=g.Ej();!c||d||e||(Ij("PP playing off watch (paused)"),a.pauseVideo());b&&d?Ij("PP off-screen on watch"):b||d||Ij("PP !off-screen off watch")}};
Ij=function(a){var b=g.D("PAGE_NAME");b&&(a+="("+[b,Kj,g.r("_spf_state.nav-counter")].join()+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.wf(Error(a),"WARNING"))};
Nj=function(){(0,g.kj)("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){(0,g.kj)("cpt");g.F("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?((0,g.kj)("cpt"),g.F("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){(0,g.kj)("cpt");
g.F("on_cpt_tick",(new Date).getTime())},0);
Kba();g.D("CSI_VIEWPORT")&&(Mj=Eba(),Mj.then(function(a){(0,g.kj)("vpl",a);Mj=null},function(){}))};
Kba=function(){Oj("init");var a=g.D("PAGE_NAME",void 0);a&&Oj("init-"+a)};
Oj=function(a){g.Xf()?Pj.push(g.Tf(g.u(g.Lf,a),0)):g.F(a)};
Qj=function(){g.Vf(Pj);Pj.length=0;Gba();Mj&&(Mj.cancel(),Mj=null);var a=g.D("PAGE_NAME",void 0);a&&g.Lf("dispose-"+a);g.Lf("dispose")};
Lba=function(){Nj()};
Mba=function(){g.D("TIMING_REPORT_ON_UNLOAD")&&g.Hi(!0);Ti("u");g.Oh("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Uh();g.Ah();g.Vg();Qj();g.Lf("pageunload")};
Rj=function(){g.hh()};
Sj=function(){window.yt_spf_loaded_history=!0;g.hh()};
Xj=function(){Tj=1;Uj=Vj=0;g.D("TIMING_REPORT_ON_UNLOAD")&&g.Hi(!0);g.$f("warm_load_nav_start_web")?(Ti("n"),Ki(),Gi(!1),g.uf("TIMING_AFT_KEYS",[]),ui("yt_lt","warm"),g.uf("TIMING_ACTION",""),g.uf("TIMING_WAIT",[]),qi(),xi("n")):(Ti("n"),Ki(),xi("n"));Li("nr");Wj(Nba);Uh();g.Lf("navigate")};
bk=function(a){a=a.detail.part||a.detail.partial;(0,g.kj)("nc"+Vj);++Vj;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.kj)("bc");else{var b=1==Tj;Tj=2;b?(Wj(Oba),Yj()):Wj(Pba);if(b=a&&a.data&&a.data.swfcfg)Zj(a.timing,b.args),ak(b)}};
ck=function(){(0,g.kj)("np"+Uj);++Uj};
dk=function(a){a=a.detail.response;var b=1==Tj;Tj=3;b&&(Wj(Qba),Yj());if(b=a.data&&a.data.swfcfg)Zj(a.timing,b.args),ak(b)};
hk=function(a){(0,g.kj)("nd");a=a.detail.response;g.ek=a.cacheKey;a=a.timing;var b=window._spf_state;g.fk.navigationCount=b&&b["nav-counter"]||0;g.$f("warm_load_nav_start_web")?(0,g.kj)("srt",a.responseStart):(xi("ne",a.responseStart),vj("srt",Math.max(0,a.responseStart-a.navigationStart)));vj("yt_lt",a.spfCached?"hot":"warm");(0,g.kj)("pfs",a.fetchStart);(0,g.kj)("pfrs",a.responseStart);"redirectStart"in a&&Rba(a);Wj(gk);window.document.getElementById("content").style.height="";Nj();Tj=0};
ik=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.wf(a)};
jk=function(a){g.Dj(g.Uc({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Tba=function(){Sba();window.yt_spf_loaded_history=!1};
Uba=function(){};
Yj=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Qj();a=g.D("PREVIOUS_ACTION");for(var b in g.tf)delete g.tf[b];g.uf("PREVIOUS_ACTION",a);g.uf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);if((b=g.Hj())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Kj=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),Kj="recovered"):Kj="missing2"}else Kj="missing";Gj()};
ak=function(a){"cfg"in Ci(void 0)||(0,g.kj)("cfg");Lj(a)};
Wj=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Uf(kk);kk=g.Tf(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Df(lk);lk=g.Bf(function(){b.className=e},c)},0)};
Sba=function(){var a=gk[0]+50;g.Df(lk);lk=g.Bf(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
Zj=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Iba(b));g.D("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Dj(g.Uc(c)))};
nk=function(){return"granted"!=window.Notification.permission?window.Promise.resolve():mk().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})["catch"](function(){})};
pk=function(){ok({type:"notifications_register",data:g.D("ID_TOKEN")})};
mk=function(){return window.navigator.serviceWorker.getRegistration(String(Zf("service_worker_scope")||""))};
qk=function(a){return!(!a||!a.pushManager)};
ok=function(a){mk().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Vba=function(){if(!g.D("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(Zf("service_worker_push_force_notification_prompt_tag")||"");return a?g.sj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
Zba=function(){var a=void 0===a?!1:a;return(window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification?mk().then(qk):window.Promise.resolve(!1)).then(function(b){if(!b)return window.Promise.resolve();b=nk().then(function(){ok({type:"notifications_check_registration",data:g.D("ID_TOKEN")})});
return"default"!=window.Notification.permission?b:b.then(function(){return Wba(a)}).then(function(a){if(a)return Xba(),Yba().then(function(){})})})};
Wba=function(a){return g.D("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.D("LOGGED_IN",void 0)&&(void 0===a?0:a)?Vba().then(function(a){if(a)return!0;a=[$ba(),aca()];g.D("LOGGED_IN",void 0)||a.push(bca());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
bca=function(){var a=g.ag("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.sj("WatchCount").then(function(b){return b>=a})};
Yba=function(){var a=arguments;g.$f("service_worker_push_prompt_modal_enable")&&cca();return window.Notification.requestPermission().then(function(a){rk();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return nk().then(function(){g.rj("NotificationsDisabled",!1);pk();return window.Promise.resolve(!0)});
"denied"==a&&pk();return window.Promise.resolve(!1)})["catch"](function(){rk();
return window.Promise.reject.apply(window.Promise,a instanceof Array?a:baa(g.ma(a)))})};
Xba=function(){g.sj("PromptCount").then(function(a){return g.rj("PromptCount",a+1)}).then(function(){return g.rj("PromptTime",(0,g.A)())}).then(function(){var a=String(Zf("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.sj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.rj("PromptTags",JSON.stringify(c))})})};
$ba=function(){return-1==g.ag("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.sj("PromptCount").then(function(a){a||(a=0);return window.Promise.resolve(a<g.ag("service_worker_push_prompt_cap"))})};
aca=function(){var a=g.ag("service_worker_push_prompt_delay_microseconds");return a?g.sj("PromptTime").then(function(b){return window.Promise.resolve((0,g.A)()-a>(b||0))}):window.Promise.resolve(!0)};
dca=function(){sk||rk()};
tk=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
cca=function(){var a=g.x("yt-push-prompt-modal-bg");sk=g.$f("service_worker_push_prompt_modal_ignore_click");a?tk(a):(a=g.rc("div",{id:"yt-push-prompt-modal-bg"}),tk(a),window.document.body.appendChild(a),g.Jg(window.document,"click",dca))};
rk=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.uc(a)};
eca=function(a){return qk(a)?Zba():window.Promise.resolve()};
gca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(fca)})};
ica=function(){var a="/sw.js",b=g.D("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=uk(a);g.$f("service_worker_push_enabled")&&a.then(hca).then(eca)};
hca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
fca=function(a){a&&uk("/sw.js?0",a.scope)};
uk=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(Zf("service_worker_scope")||"")||"/"})};
vk=function(){g.Vh.call(this,"www/base");this.D=0};
wk=function(a){(a=a.detail.name)&&Yh(a)};
g.aa=[];ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)xk=Object.setPrototypeOf;else{var yk;a:{var jca={Qv:!0},zk={};try{zk.__proto__=jca;yk=zk.Qv;break a}catch(a){}yk=!1}xk=yk?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var da=xk,ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ha="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,aaa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
na("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=oa(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
var kca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)pa(d,e)&&(a[e]=d[e])}return a};
na("Object.assign",function(a){return a||kca});
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
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.ma([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(y){return!1}}())return a;
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
var lca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
na("Reflect.construct",function(){return lca});
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
var f=new c;b.prototype.V=function(a){var b=this.H();a.ni(b.resolve,b.reject)};
b.prototype.la=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(q){c.reject(q)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(T){f(T)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.ni(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.ni=function(a,b){function c(){switch(d.F){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.F);}}
var d=this;null==this.C?f.F(c):this.C.push(c)};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.ma(a),f=e.next();!f.done;f=e.next())d(f.value).ni(b,c)})};
b.all=function(a){var c=g.ma(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).ni(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
na("Array.from",function(a){return a?a:function(a,c,d){ka();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f){a=f.call(a);for(var k=0;!(f=a.next()).done;)b.push(c.call(d,f.value,k++))}else for(f=a.length,k=0;k<f;k++)b.push(c.call(d,a[k],k));return b}});
na("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!(0,window.isNaN)(a)&&window.Infinity!==a&&-window.Infinity!==a}});
na("Number.parseInt",function(a){return a||window.parseInt});
g.Ak=g.Ak||{};g.n=this;Ca="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.A=Date.now||function(){return+new Date};g.Kc=window.document;g.Bk=window;g.v(g.Ea,Error);g.Ea.prototype.name="CustomError";g.Ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.sa(a))return g.sa(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.mca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.sa(a))return g.sa(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Wi=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.sa(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.Zi=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.sa(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Xi=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.z)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Ck=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Dk=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.sa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Ua=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.Gk=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var Hk=g.n.navigator;if(Hk){var Ik=Hk.userAgent;if(Ik){g.Za=Ik;break a}}g.Za=""};var jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.sb[" "]=g.va;var Ok,maa,Sk;g.zd=g.$a("Opera");g.C=g.mb();g.Jk=g.$a("Edge");g.Kk=g.Jk||g.C;g.Lk=g.$a("Gecko")&&!(-1!=g.Za.toLowerCase().indexOf("webkit")&&!g.$a("Edge"))&&!(g.$a("Trident")||g.$a("MSIE"))&&!g.$a("Edge");g.yd=-1!=g.Za.toLowerCase().indexOf("webkit")&&!g.$a("Edge");g.Mk=g.$a("Macintosh");g.Nk=g.$a("Windows");g.nca=g.$a("Linux")||g.$a("CrOS");g.oca=g.$a("Android");g.pca=qb();g.qca=g.$a("iPad");g.rca=g.$a("iPod");g.sca=g.rb();
a:{var Pk="",Qk=function(){var a=g.Za;if(g.Lk)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Jk)return/Edge\/([\d\.]+)/.exec(a);if(g.C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.yd)return/WebKit\/(\S+)/.exec(a);if(g.zd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Qk&&(Pk=Qk?Qk[1]:"");if(g.C){var Rk=ub();if(null!=Rk&&Rk>(0,window.parseFloat)(Pk)){Ok=String(Rk);break a}}Ok=Pk}g.vb=Ok;maa={};var Tk=g.n.document;Sk=Tk&&g.C?ub()||("CSS1Compat"==Tk.compatMode?(0,window.parseInt)(g.vb,10):5):void 0;g.xb=Sk;g.Uk=g.$a("Firefox");g.Vk=qb()||g.$a("iPod");g.Wk=g.$a("iPad");g.tca=g.pb();g.Xk=g.nb();g.Yk=g.ob()&&!g.rb();var zb,Bb;zb=null;g.Ab=null;Bb=null;g.Zk="function"==typeof window.Uint8Array;g.h=g.Db.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.qa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.A)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Ua)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.qa(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Jc=function(){return g.Eb(this).keys};
g.h.Eb=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Kb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.Pd=g.ba(3);g.h.clear=function(){for(var a=g.Eb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.qh=new g.Db("undefined"==typeof window.document?null:window.document);g.qh.F=3950;g.$k=g.Gb(null);var oaa;oaa=!g.C||g.yb(9);g.uca=!g.Lk&&!g.C||g.C&&g.yb(9)||g.Lk&&g.wb("1.9.1");g.al=g.C&&!g.wb("9");g.vca=g.C||g.zd||g.yd;g.Jb.prototype.Xd=!0;g.Jb.prototype.Vc=function(){return this.C};
g.Jb.prototype.toString=function(){return"Const{"+this.C+"}"};
g.Ib={};g.Kb("");g.wca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.xca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.bl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");g.Mb.prototype.Xd=!0;g.Mb.prototype.Vc=function(){return this.C};
g.Mb.prototype.Nl=!0;g.Mb.prototype.vf=function(){return 1};
var Ob=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Lb={};g.Pb("about:blank");g.Tb.prototype.Xd=!0;g.Sb={};g.Tb.prototype.Vc=function(){return this.C};
g.cl=g.Ub("");g.dl=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.yca=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Wb.prototype.Xd=!0;g.Vb={};g.Wb.prototype.Vc=function(){return this.C};
g.el=g.Xb("");g.$b.prototype.Nl=!0;g.$b.prototype.vf=function(){return this.F};
g.$b.prototype.Xd=!0;g.$b.prototype.Vc=function(){return this.C};
var Zb={};g.bc("<!DOCTYPE html>",0);g.fl=g.bc("",0);g.gl=g.bc("<br>",0);g.h=g.gc.prototype;g.h.clone=function(){return new g.gc(this.x,this.y)};
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
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.width*=a;this.height*=c;return this};var lc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var zca;zca={iP:"allow-forms",jP:"allow-modals",kP:"allow-orientation-lock",lP:"allow-pointer-lock",mP:"allow-popups",nP:"allow-popups-to-escape-sandbox",oP:"allow-presentation",pP:"allow-same-origin",qP:"allow-scripts",rP:"allow-top-navigation",sP:"allow-top-navigation-by-user-activation"};g.Aca=g.Hb(function(){return g.zc(zca)});g.h=g.Dc.prototype;g.h.clone=function(){return new g.Dc(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.gc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.gc?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.ua(b)&&(this.top+=b));return this};
g.h.scale=function(a,b){var c=g.ua(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.hl=g.Lk?"MozUserSelect":g.yd||g.Jk?"WebkitUserSelect":null;var Ic,Jc;g.Bca=Object.prototype.hasOwnProperty;Ic=g.Hc(window);Jc=Ic&&window.parent||window;var qaa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Cca=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;Yc.prototype.getUrl=function(a,b,c,d){a=a+"//"+b+c;var e=saa(this)-c.length-d.length;if(0>e)return"";this.C.sort(function(a,b){return a-b});
c=null;b="";for(var f=0;f<this.C.length;f++)for(var k=this.C[f],l=this.F[k],m=0;m<l.length;m++){if(!e){c=null==c?k:c;break}var q=ad(l[m],this.D,",$");if(q){q=b+q;if(e>=q.length){e-=q.length;a+=q;b=this.D;break}else this.H&&(b=e,q[b-1]==this.D&&--b,a+=q.substr(0,b),b=this.D,e=0);c=null==c?k:c}}f="";this.G&&null!=c&&(f=b+this.G+"="+c);return a+f+d};var il=null;var id=g.n.performance,Dca=!!(id&&id.mark&&id.measure&&id.clearMarks),gd=g.Hb(function(){var a;if(a=Dca){var b;if(null===il){il="";try{a="";try{a=g.n.top.location.hash}catch(c){a=g.n.location.hash}a&&(il=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=il;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
hd.prototype.disable=function(){this.C=!1;this.events!=this.F.google_js_reporting_queue&&(gd()&&g.z(this.events,g.jd),this.events.length=0)};
hd.prototype.start=function(a,b){if(!this.C)return null;var c=ed()||dd();c=new taa(a,b,c);var d="goog_"+c.uniqueId+"_start";id&&gd()&&id.mark(d);return c};
hd.prototype.end=function(a){if(this.C&&g.ua(a.value)){var b=ed()||dd();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";id&&gd()&&id.mark(b);this.C&&this.events.push(a)}};md.prototype.F=function(a,b,c,d,e){e=e||"jserror";try{var f=new Yc;f.H=!0;bd(f,1,"context",a);b.error&&b.meta&&b.id||(b=g.pd(b));b.msg&&bd(f,2,"msg",b.msg.substring(0,512));b.file&&bd(f,3,"file",b.file);0<b.line&&bd(f,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(R){}b=[k];f.C.push(5);f.F[5]=b;var l=g.Xc(),m=new Wc(g.n.location.href,g.n,!1);b=null;var q=l.length-1;for(d=q;0<=d;--d){var w=l[d];!b&&Cca.test(w.url)&&(b=w);if(w.url&&!w.Gq){m=w;break}}w=null;var y=l.length&&l[q].url;0!=m.depth&&
y&&(w=l[q]);var I=new raa(m,w);I.F&&bd(f,6,"top",I.F.url||"");bd(f,7,"url",I.C.url||"");g.cd(this.D,e,f,c)}catch(R){try{g.cd(this.D,e,{context:"ecmserr",rctx:a,msg:g.od(R),url:I&&I.C.url},c)}catch(V){}}return!0};
g.ea(nd,Mc);var fd,kd;fd=g.Lc();kd=new hd;g.ld=new function(){var a=void 0===a?g.Bk:a;this.G="http:"===a.location.protocol?"http:":"https:";this.F="pagead2.googlesyndication.com";this.D="/pagead/gen_204?id=";this.C=.01};
g.jl=new md;"complete"==fd.document.readyState?fd.google_measure_js_timing||kd.disable():kd.C&&Ac(fd,"load",function(){fd.google_measure_js_timing||kd.disable()});var kl;kl={};g.ll=(kl[8]="google_prev_ad_formats_by_region",kl[9]="google_prev_ad_slotnames_by_region",kl);g.ml=(new Date).getTime();g.td.prototype.Dc=!1;g.td.prototype.ob=function(){return this.Dc};
g.td.prototype.dispose=function(){this.Dc||(this.Dc=!0,this.X())};
g.td.prototype.X=function(){if(this.Yb)for(;this.Yb.length;)this.Yb.shift()()};g.xd.prototype.stopPropagation=function(){this.F=!0};
g.xd.prototype.preventDefault=function(){this.Et=!1};var Rd,Fca,zaa;g.Eca=!g.C||g.yb(9);Rd=!g.C||g.yb(9);Fca=g.C&&!g.wb("9");zaa=function(){if(!g.n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.n.addEventListener("test",g.va,b);g.n.removeEventListener("test",g.va,b);return a}();g.nl=Ad("TransitionEnd");
g.ol={TP:"click",vW:"rightclick",BQ:"dblclick",Sg:"mousedown",Tg:"mouseup",lU:"mouseover",kU:"mouseout",jU:"mousemove",hU:"mouseenter",iU:"mouseleave",Rg:"mousecancel",EW:"selectionchange",FW:"selectstart",pZ:"wheel",lS:"keypress",kS:"keydown",mS:"keyup",MP:"blur",qR:"focus",CQ:"deactivate",rR:"focusin",sR:"focusout",QP:"change",oW:"reset",DW:"select",gX:"submit",YR:"input",VV:"propertychange",ZQ:"dragstart",UQ:"drag",WQ:"dragenter",YQ:"dragover",XQ:"dragleave",DROP:"drop",VQ:"dragend",rX:"touchstart",
qX:"touchmove",pX:"touchend",oX:"touchcancel",LP:"beforeunload",oQ:"consolemessage",rQ:"contextmenu",GQ:"devicechange",HQ:"devicemotion",IQ:"deviceorientation",LQ:"DOMContentLoaded",ERROR:"error",MR:"help",LOAD:"load",NT:"losecapture",PU:"orientationchange",aW:"readystatechange",qW:"resize",yW:"scroll",EY:"unload",OP:"canplay",PP:"canplaythrough",aR:"durationchange",dR:"emptied",ENDED:"ended",HT:"loadeddata",IT:"loadedmetadata",PAUSE:"pause",PLAY:"play",PLAYING:"playing",YV:"ratechange",AW:"seeked",
BW:"seeking",cX:"stalled",iX:"suspend",mX:"timeupdate",PY:"volumechange",QY:"waiting",ZW:"sourceopen",YW:"sourceended",XW:"sourceclosed",KO:"abort",UPDATE:"update",IY:"updatestart",GY:"updateend",KR:"hashchange",WU:"pagehide",XU:"pageshow",RV:"popstate",uQ:"copy",fV:"paste",yQ:"cut",FP:"beforecopy",GP:"beforecut",JP:"beforepaste",OU:"online",JU:"offline",MESSAGE:"message",nQ:"connect",aS:"install",LO:"activate",oR:"fetch",uR:"foreignfetch",bU:"messageerror",dX:"statechange",HY:"updatefound",tQ:"controllerchange",
wP:Ad("AnimationStart"),uP:Ad("AnimationEnd"),vP:Ad("AnimationIteration"),sX:g.nl,JV:"pointerdown",PV:"pointerup",IV:"pointercancel",MV:"pointermove",OV:"pointerover",NV:"pointerout",KV:"pointerenter",LV:"pointerleave",DR:"gotpointercapture",OT:"lostpointercapture",mU:"MSGestureChange",nU:"MSGestureEnd",oU:"MSGestureHold",pU:"MSGestureStart",qU:"MSGestureTap",rU:"MSGotPointerCapture",sU:"MSInertiaStart",tU:"MSLostPointerCapture",uU:"MSPointerCancel",vU:"MSPointerDown",wU:"MSPointerEnter",xU:"MSPointerHover",
yU:"MSPointerLeave",zU:"MSPointerMove",AU:"MSPointerOut",BU:"MSPointerOver",CU:"MSPointerUp",TEXT:"text",lX:g.C?"textinput":"textInput",kQ:"compositionstart",lQ:"compositionupdate",jQ:"compositionend",HP:"beforeinput",gR:"exit",FT:"loadabort",GT:"loadcommit",JT:"loadredirect",KT:"loadstart",LT:"loadstop",rW:"responsive",VW:"sizechanged",FY:"unresponsive",LY:"visibilitychange",fX:"storage",RQ:"DOMSubtreeModified",MQ:"DOMNodeInserted",OQ:"DOMNodeRemoved",QQ:"DOMNodeRemovedFromDocument",NQ:"DOMNodeInsertedIntoDocument",
JQ:"DOMAttrModified",KQ:"DOMCharacterDataModified",KP:"beforeprint",hP:"afterprint",IP:"beforeinstallprompt",AP:"appinstalled"};g.v(g.Bd,g.xd);var Gca={2:"touch",3:"pen",4:"mouse"};
g.Bd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Lk&&(g.tb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Mk?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.sa(a.pointerType)?a.pointerType:Gca[a.pointerType]||"";this.state=a.state;this.mc=a;a.defaultPrevented&&
this.preventDefault()};
g.Bd.prototype.stopPropagation=function(){g.Bd.M.stopPropagation.call(this);this.mc.stopPropagation?this.mc.stopPropagation():this.mc.cancelBubble=!0};
g.Bd.prototype.preventDefault=function(){g.Bd.M.preventDefault.call(this);var a=this.mc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Fca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Cd="closure_listenable_"+(1E6*Math.random()|0),waa=0;g.h=g.Fd.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Hd(a,b,d,e);-1<k?(b=a[k],c||(b.mi=!1)):(b=new xaa(b,this.src,f,!!d,e),b.mi=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Hd(e,b,c,d);return-1<b?(Ed(e[b]),g.Ka(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Ed(d[e]);delete this.listeners[c];this.C--}return b};
g.h.lg=g.ba(5);g.h.rf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Hd(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.qa(a),d=c?a.toString():"",e=g.qa(b);return g.bb(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Od="closure_lm_"+(1E6*Math.random()|0),Vd={},Qd=0,Yd="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.Zd,g.td);g.Zd.prototype[Cd]=!0;g.h=g.Zd.prototype;g.h.Oi=function(){return this.Cm};
g.h.Ih=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.Kd(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Sd(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Oi();if(b){var c=[];for(var d=1;b;b=b.Oi())c.push(b),++d}b=this.Sv;d=a.type||a;if(g.sa(a))a=new g.xd(a,b);else if(a instanceof g.xd)a.target=a.target||b;else{var e=a;a=new g.xd(d,b);g.lb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=$d(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=$d(k,d,!0,a)&&e,a.F||(e=$d(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=$d(k,d,!1,a)&&e;return e};
g.h.X=function(){g.Zd.M.X.call(this);this.removeAllListeners();this.Cm=null};
g.h.O=function(a,b,c,d){return this.Ad.add(String(a),b,!1,c,d)};
g.h.Qe=function(a,b,c,d){return this.Ad.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.Ad.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.Ad?this.Ad.removeAll(a):0};
g.h.lg=g.ba(4);g.h.rf=function(a,b,c,d){return this.Ad.rf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.Ad.hasListener(g.qa(a)?String(a):void 0,b)};ae.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var le;var me=new ae(function(){return new ee},function(a){a.reset()});
de.prototype.add=function(a,b){var c=me.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
de.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
ee.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
ee.prototype.reset=function(){this.next=this.scope=this.lc=null};var fe,ge=!1,he=new de;re.prototype.reset=function(){this.context=this.onRejected=this.D=this.C=null;this.F=!1};
var se=new ae(function(){return new re},function(a){a.reset()});
g.qe.prototype.then=function(a,b,c){return xe(this,g.Aa(a)?a:null,g.Aa(b)?b:null,c)};
g.ne(g.qe);g.qe.prototype.cancel=function(a){0==this.C&&je(function(){var b=new g.Ee(a);ze(this,b)},this)};
g.qe.prototype.W=function(a){this.C=0;g.pe(this,2,a)};
g.qe.prototype.N=function(a){this.C=0;g.pe(this,3,a)};
g.qe.prototype.J=function(){for(var a;a=Ae(this);)Be(this,a,this.C,this.R);this.K=!1};
var Ge=ce;g.v(g.Ee,g.Ea);g.Ee.prototype.name="cancel";g.v(g.Je,g.td);g.h=g.Je.prototype;g.h.hb=0;g.h.X=function(){g.Je.M.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.hb=g.He(this.hc,g.qa(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Ie(this.hb);this.hb=0};
g.h.mf=g.ba(7);g.h.isActive=function(){return 0!=this.hb};
g.h.wp=function(){this.hb=0;this.C&&this.C.call(this.F)};g.v(Ke,Faa);Ke.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Ke.prototype.update=function(a,b){if(null!=a){g.qa(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.K,f=this.D;d<b;){if(0==f)for(;d<=c;)Le(this,a,d),d+=this.F;if(g.sa(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){Le(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){Le(this,e);f=0;break}}this.D=f;this.H+=b}};
Ke.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.K[c]=b&255,b/=256;Le(this,this.K);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.Oe="StopIteration"in g.n?g.n.StopIteration:{message:"StopIteration",stack:""};g.Ne.prototype.next=function(){throw g.Oe;};
g.Ne.prototype.fd=function(){return this};g.h=g.Se.prototype;g.h.Kb=function(){return this.D};
g.h.Eb=g.ba(0);g.h.Jc=function(){g.Ve(this);return this.C.concat()};
g.h.Pd=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Kb())return!1;var c=b||Haa;g.Ve(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.We=this.D=this.C.length=0};
g.h.remove=function(a){return g.Te(this.F,a)?(delete this.F[a],this.D--,this.We++,this.C.length>2*this.D&&g.Ve(this),!0):!1};
g.h.get=function(a,b){return g.Te(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.Te(this.F,a)||(this.D++,this.C.push(a),this.We++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.Jc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.Se(this)};
g.h.fd=function(a){g.Ve(this);var b=0,c=this.We,d=this,e=new g.Ne;e.next=function(){if(c!=d.We)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Oe;var e=d.C[b++];return a?e:d.F[e]};
return e};var Ze={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.$e,g.td);g.h=g.$e.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.vd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.va):(c&&g.La(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.K)for(e=0;e<c.length;e++){var k=c[e];Kaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.vd(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.z)(b,this.vd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Kb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Kb(b);return a};
g.h.X=function(){g.$e.M.X.call(this);this.clear();this.D.length=0};g.bf.prototype.set=function(a,b){g.qa(b)?this.C.set(a,g.Xe(b)):this.C.remove(a)};
g.bf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.bf.prototype.remove=function(a){this.C.remove(a)};g.v(cf,g.bf);cf.prototype.set=function(a,b){cf.M.set.call(this,a,ef(b))};
cf.prototype.F=function(a){a=cf.M.get.call(this,a);if(!g.qa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
cf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.qa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.ff,cf);g.ff.prototype.set=function(a,b,c){if(b=ef(b)){if(c){if(c<(0,g.A)()){g.ff.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.A)()}g.ff.M.set.call(this,a,b)};
g.ff.prototype.F=function(a,b){var c=g.ff.M.F.call(this,a);if(c)if(!b&&g.gf(c))g.ff.prototype.remove.call(this,a);else return c};g.v(hf,Laa);hf.prototype.Kb=function(){var a=0;g.Qe(this.fd(!0),function(){a++});
return a};
hf.prototype.clear=function(){var a=Gaa(this.fd(!0)),b=this;(0,g.z)(a,function(a){b.remove(a)})};g.v(g.jf,hf);g.h=g.jf.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Kb=function(){return this.C.length};
g.h.fd=function(a){var b=0,c=this.C,d=new g.Ne;d.next=function(){if(b>=c.length)throw g.Oe;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.kf,g.jf);g.v(mf,hf);var Maa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},lf=null;g.h=mf.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(nf(a),b);of(this)};
g.h.get=function(a){a=this.C.getAttribute(nf(a));if(!g.sa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(nf(a));of(this)};
g.h.Kb=function(){return pf(this).attributes.length};
g.h.fd=function(a){var b=0,c=pf(this).attributes,d=new g.Ne;d.next=function(){if(b>=c.length)throw g.Oe;var d=c[b++];if(a)return(0,window.decodeURIComponent)(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!g.sa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){for(var a=pf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);of(this)};g.v(qf,hf);qf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
qf.prototype.get=function(a){return this.F.get(this.C+a)};
qf.prototype.remove=function(a){this.F.remove(this.C+a)};
qf.prototype.fd=function(a){var b=this.F.fd(!0),c=this,d=new g.Ne;d.next=function(){for(var d=b.next();d.substr(0,c.C.length)!=c.C;)d=b.next();return a?d.substr(c.C.length):c.F.get(d)};
return d};g.ah=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.pl="Microsoft Internet Explorer"==window.navigator.appName;g.tf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.tf,void 0);var Af={};var Hca=g.r("ytPubsubPubsubInstance")||new g.$e;g.$e.prototype.subscribe=g.$e.prototype.subscribe;g.$e.prototype.unsubscribeByKey=g.$e.prototype.vd;g.$e.prototype.publish=g.$e.prototype.oa;g.$e.prototype.clear=g.$e.prototype.clear;g.p("ytPubsubPubsubInstance",Hca,void 0);var Gf=g.r("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",Gf,void 0);var If=g.r("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",If,void 0);var Hf=g.r("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",Hf,void 0);var Oaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Paa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Pf.prototype.initialize=function(a,b,c,d){b?(this.F=!0,g.Nf(b,function(){this.F=!1;window.botguard?Qf(this,c,d):(g.Of(b),g.wf(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this))):a&&(eval(a),window.botguard?Qf(this,c,d):g.wf(Error("Unable to load Botguard from JS"),"WARNING"))};
g.Pf.prototype.If=function(){return null!==this.C};
g.Pf.prototype.invoke=function(){return this.C?this.C.invoke():null};
g.Pf.prototype.dispose=function(){this.C=null};g.ea(Wf,Qaa);Wf.prototype.start=function(){var a=g.r("yt.scheduler.instance.start");a&&a()};
Wf.prototype.pause=function(){var a=g.r("yt.scheduler.instance.pause");a&&a()};
g.wa(Wf);Wf.getInstance();g.bg=new g.Pf;(0,g.A)();var eg=g.qa(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.qa(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var kg,pg;kg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};pg=!1;g.ql=qg;ug.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.oe(a)?a:g.wg(a)):2===this.F&&b?(a=b.call(c,this.C),g.oe(a)?a:g.vg(a)):this};
ug.prototype.getValue=function(){return this.C};
g.ne(ug);var Ica=0,Vaa=g.yd?"webkit":g.Lk?"moz":g.C?"ms":g.zd?"o":"",xg=g.r("ytDomDomGetNextId")||function(){return++Ica};
g.p("ytDomDomGetNextId",xg,void 0);var Waa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Ag.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Ag.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Ag.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Eg=g.r("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",Eg,void 0);var Gg=g.r("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",Gg,void 0);var Hg=g.Hb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.v(g.Lg,g.td);g.Lg.prototype.W=function(a){this.C=new g.gc(g.Cg(a),g.Dg(a))};
g.Lg.prototype.R=function(){if(this.C){var a=g.ah();if(0!=this.D){var b=g.ic(this.K,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.hc();this.G=b}this.D=a;this.K=this.C;this.H=(this.H+1)%4}};
g.Lg.prototype.X=function(){g.Ef(this.N);g.Ig(this.J)};g.ea(Mg,g.td);Mg.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.ne);break}};
Mg.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.ne)}g.td.prototype.X.call(this)};var Xaa={enablejsapi:1},Yaa={};Ng.prototype.clone=function(){var a=new Ng,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.xa(c)?a[b]=g.ib(c):a[b]=c}return a};var Qg={},Pg=0;var $aa,Zaa,dh,aba,Ug;$aa=Math.pow(2,16)-1;Zaa={log_event:"events",log_interaction:"interactions"};dh=Object.create(null);dh.log_event="GENERIC_EVENT_LOGGING";dh.log_interaction="INTERACTION_LOGGING";aba=new window.Set(["log_event"]);Ug={};g.Yg=0;g.Zg=g.r("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.Zg,void 0);var Sg=g.r("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",Sg,void 0);
var $g=g.r("ytLoggingTransportDispatchedStats_")||{};g.p("ytLoggingTransportDispatchedStats_",$g,void 0);var eh=g.r("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",eh,void 0);var kh={};g.th.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.A)()+1E3*c);return}catch(f){}var e="";if(d)try{e=(0,window.escape)(g.Xe(b))}catch(f){return}else e=(0,window.escape)(b);g.rh(a,e,c,this.F)};
g.th.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.qh.get(""+a,void 0))&&(c=(0,window.unescape)(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.th.prototype.remove=function(a){this.C&&this.C.remove(a);g.sh(a,"/",this.F)};var uh=new g.th("yt.innertube");var Gh=g.r("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",Gh,void 0);var Hh=0;var Ih=(0,g.A)().toString();var Nh,Kh;g.Mh=Jh();Nh=0;g.Lh=null;Kh=null;g.p("yt.logging.screen.getRootVeType",Rh,void 0);g.p("yt.logging.screen.getCurrentCsn",g.Th,void 0);g.h=g.Vh.prototype;g.h.qL=function(){this.If()||this.init()};
g.h.enable=function(){this.C=1;(0,g.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.qL,this),this.subscribe("dispose-"+a,this.dispose,this),g.D("PAGE_NAME")==a&&g.Wh(this))},this)};
g.h.init=function(){g.Uf(this.F);this.C=2;this.K&&this.K()};
g.h.If=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.Uf(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.wf(a)}};
g.h.subscribe=function(a,b,c){a=g.Jf(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.Kf(this.G);this.G=[]};var Xh=g.r("yt.modules.registry_")||{};g.p("yt.modules.registry_",Xh,void 0);g.$h=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.$h,void 0);var ei={},fba=0;var gba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.li.prototype.toString=function(){return this.topic};var Jca=g.r("ytPubsub2Pubsub2Instance")||new g.$e;g.$e.prototype.subscribe=g.$e.prototype.subscribe;g.$e.prototype.unsubscribeByKey=g.$e.prototype.vd;g.$e.prototype.publish=g.$e.prototype.oa;g.$e.prototype.clear=g.$e.prototype.clear;g.p("ytPubsub2Pubsub2Instance",Jca,void 0);g.rl=g.r("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.rl,void 0);g.sl=g.r("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.sl,void 0);
g.tl=g.r("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.tl,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var oi=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.ea(ri,g.ki);g.ea(si,g.ki);var oba=new g.li("aft-recorded",ri),tba=new g.li("timing-sent",si);var sba,zi,ul,Ui,qba,lba,pba,Oi,ti,nba,vj,Rba;sba={vc:!0};
zi={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};ul={};
Ui=(ul.ad_allowed="adTypesAllowed",ul.ad_at="adType",ul.ad_cpn="adClientPlaybackNonce",ul.ad_docid="adVideoId",ul.yt_ad_an="adNetworks",ul.p="httpProtocol",ul.t="transportProtocol",ul.cpn="clientPlaybackNonce",ul.csn="clientScreenNonce",ul.docid="videoId",ul.is_nav="isNavigation",ul.yt_lt="loadType",ul.yt_ad="isMonetized",ul.nr="webInfo.navigationReason",ul.ncnp="webInfo.nonPreloadedNodeCount",ul.paused="playerInfo.isPausedOnLoad",ul.fmt="playerInfo.itag",ul.yt_pl="watchInfo.isPlaylist",ul.yt_ad_pr=
"prerollAllowed",ul.yt_red="isRedSubscriber",ul.st="serverTimeMs",ul.vph="viewportHeight",ul.vpw="viewportWidth",ul.yt_vis="isVisible",ul);qba="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
lba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",
wn_comments:"LATENCY_ACTION_LOAD_COMMENTS","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"};pba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" ");
Oi=!1;ti=!1;nba=(0,g.t)(oi.clearResourceTimings||oi.webkitClearResourceTimings||oi.mozClearResourceTimings||oi.msClearResourceTimings||oi.oClearResourceTimings||g.va,oi);vj=ui;Rba=yi;g.kj=wi;g.ea(bj,g.td);g.h=bj.prototype;
g.h.jm=function(a){this.ob()||(this.kb=a=g.Og(a),this.C=a.clone(),this.F=this.C.attrs.id||this.F,"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N),this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F),this.C.args.enablejsapi="1",this.C.args.playerapiid=this.N,this.ia||(this.ia=jj(this,this.C.args.jsapicallback||"onYouTubePlayerReady")),this.C.args.jsapicallback=null,(a=this.C.attrs.width)&&g.Gc(this.H,Number(a)||a),(a=this.C.attrs.height)&&g.Fc(this.H,Number(a)||a),uba(this),
this.K&&cj(this))};
g.h.vx=function(){return this.kb};
g.h.AC=function(){return this.K};
g.h.Xh=function(a,b){var c=this,d=jj(this,b);if(d){if(!g.Ia(this.sb,a)&&!this.D[a]){var e=wba(this,a);this.W&&this.W(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.K&&g.Bf(function(){d(c.api)},0)}};
g.h.cL=function(a,b){if(!this.ob()){var c=jj(this,b);c&&g.af(this.J,a,c)}};
g.h.Rv=function(a){g.F("a11y-announce",a)};
g.h.GG=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.h.HG=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.ky=function(){return this.la||(dj(this)?"html5":null)};
g.h.Sx=function(){return this.ab};
g.h.cancel=function(){if(this.R){var a=this.R,b=g.Mf(this.C.assets.js);window.spf.script.ignore(b,a)}g.Df(this.pb);this.V=!1};
g.h.X=function(){gj(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.wf(b)}this.Sa=null;for(var a in this.D)g.n[this.D[a]]=null;this.kb=this.C=this.api=null;delete this.na;delete this.H;g.td.prototype.X.call(this)};g.mj={};g.lj="player_uid_"+(1E9*Math.random()>>>0);var tj=null;g.vl=window.performance&&window.performance.memory;g.fk={};var Cj=0,yj=[],Bj=[],uj=0,zj={},Aj={},wj=new g.Je(Fba,1E3);var Hba=["server_prefetched_vast","vmap"];var Fj,Kj;g.Jj=null;Kj="";var Mj=null,Pj=[];var Tj,lk,kk,Vj,Uj,Nba,Qba,Oba,Pba,gk;Vj=0;Uj=0;Nba=[900,60,"waiting"];Qba=[500,99,"waiting"];Oba=[300,60,"waiting"];Pba=[400,99,"waiting"];gk=[300,101,"done"];var sk=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.uf,void 0);g.p("yt.pushConfigArray",vf,void 0);g.p("yt.getConfig",g.D,void 0);g.p("yt.config.set",g.uf,void 0);g.p("yt.config.pushArray",vf,void 0);g.p("yt.config.get",g.D,void 0);g.p("yt.hasMsg",g.bi,void 0);g.p("yt.setMsg",ai,void 0);g.p("yt.setGoogMsg",ci,void 0);g.p("yt.msgs.has",g.bi,void 0);g.p("yt.msgs.set",ai,void 0);g.p("yt.msgs.setGoog",ci,void 0);g.p("yt.pubsub.publish",g.F,void 0);g.p("yt.pubsub.subscribe",g.Jf,void 0);
g.p("ytcsi.tick",g.kj,void 0);g.v(vk,g.Vh);
vk.prototype.enable=function(){window.onload=Lba;window.onunload=Mba;window.onerror=Naa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Rj),window.addEventListener("spfhistory",Sj),window.addEventListener("spfrequest",Xj),window.addEventListener("spfpartprocess",bk),window.addEventListener("spfpartdone",ck),window.addEventListener("spfprocess",dk),window.addEventListener("spfdone",hk),window.addEventListener("spferror",ik),window.addEventListener("spfreload",
jk),window.addEventListener("spfjsbeforeunload",wk)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Tba),this.subscribe("dispose",Uba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
vk.prototype.init=function(){vk.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.D("PAGEFRAME_JS")){var b=g.D("PAGEFRAME_JS",void 0);var c=function(){var a=g.r("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.r("yt.www.masthead.loadSearchbox"))&&a();
a=g.D("JS_COMMON_MODULE");var d=g.D("JS_PAGE_MODULES");d||(d=[a]);a=g.D("JS_DELAY_LOAD",0);0<a?(g.Df(this.D),this.D=g.Bf(function(){b&&g.Nf(b,c);window.spf.script.require(d)},a)):(b&&g.Nf(b,c),window.spf.script.require(d));
g.p("yt.abuse.player.botguardInitialized",g.cg,void 0);g.p("yt.abuse.player.invokeBotguard",g.dg,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",g.Yf,void 0);g.p("yt.player.exports.navigate",g.ji,void 0);g.p("yt.util.activity.init",g.jh,void 0);g.p("yt.util.activity.getTimeSinceActive",g.lh,void 0);g.p("yt.util.activity.setTimestamp",g.hh,void 0);Lj(g.r("ytplayer.config"));g.r("ytspf.enabled")&&Jba();mba();g.D("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.$f("service_worker_enabled")?ica():gca())};
vk.prototype.dispose=function(){g.Df(this.D);var a=g.r("ytbin.www.pageframe.cancelSetup");a&&a();g.Ef(Fj);if(a=g.Hj())a.removeEventListener("onReady",Gj),a.removeEventListener("onStateChange",Gj);Gi(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.E(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.Kg(a);vk.M.dispose.call(this)};
vk.prototype.disable=function(){vk.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Rj),window.removeEventListener("spfhistory",Sj),window.removeEventListener("spfrequest",Xj),window.removeEventListener("spfpartprocess",bk),window.removeEventListener("spfpartdone",ck),window.removeEventListener("spfprocess",dk),window.removeEventListener("spfdone",hk),window.removeEventListener("spferror",ik),window.removeEventListener("spfreload",jk),window.removeEventListener("spfjsbeforeunload",
wk));window.onload=null;window.onunload=null;window.onerror=null};
g.Zh(new vk);})(_yt_www);


}
/*
     FILE ARCHIVED ON 01:02:03 Jul 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:36:14 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 236.001
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.057
  cdx.remote: 0.055
  esindex: 0.008
  LoadShardBlock: 188.099 (3)
  PetaboxLoader3.datanode: 205.051 (4)
  load_resource: 170.257
  PetaboxLoader3.resolve: 121.244
*/