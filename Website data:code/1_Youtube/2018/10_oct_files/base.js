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

var _yt_www={};(function(g){var window=this;var ha,la,ka,na,baa,pa,qa,ra,daa,eaa,Xa,rb,naa,vb,Eb,Hb,Ib,Jb,paa,Dc,Ec,Oc,raa,Yc,$c,ad,cd,bd,dd,saa,gd,hd,taa,kd,qd,rd,ud,uaa,vaa,vd,wd,Dd,xaa,Id,Kd,Ld,Pd,yaa,Td,$d,Zd,Aaa,ce,de,ee,fe,Baa,ge,he,le,Caa,me,te,ve,Daa,Ae,Fe,ye,we,Faa,Ee,Ce,De,He,Eaa,Gaa,Me,Ne,Re,Haa,Iaa,Jaa,Xe,Ze,Laa,df,ef,ff,Maa,jf,nf,of,pf,qf,rf,tf,wf,yf,Oaa,Gf,Rf,Raa,Xf,Sf,Saa,Zf,Taa,Uaa,Vaa,Waa,Yaa,jg,Zaa,kg,lg,$aa,qg,og,mg,sg,zg,Jg,Kg,fba,Rg,eba,jba,ih,hh,oh,ph,kba,vh,wh,Dh,Ch,lba,Hh,Oh,Ph,Qh,Uh,Yh,ai,ci,mba,pba,pi,qi,ri,si,uba,
Ni,wi,Oi,xi,ui,Pi,yi,qba,Ti,Ei,Fi,Wi,rba,sba,Gi,Bi,Ci,vi,Di,Zi,Li,Qi,Mi,zba,Ai,Si,aj,cj,dj,fj,Cba,ej,gj,Dba,jj,bj,kj,Eba,hj,ij,Fba,rj,Gba,Mba,Lba,Kba,yj,Jba,Hba,Iba,Nba,Oba,Pba,Qba,Nj,Ij,Kj,Pj,Rba,Qj,Sj,Sba,Tba,Tj,Uj,Zj,dk,ek,fk,jk,kk,lk,$ba,aca,ak,ck,Yj,Zba,bk,pk,rk,ok,sk,qk,bca,fca,cca,ica,eca,dca,gca,hca,kca,vk,jca,tk,lca,nca,pca,oca,mca,wk,xk,zk,da,Ak,Ea,caa;g.ca=function(a){return function(){return g.aa[a].apply(this,arguments)}};
g.fa=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ea)ea(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
ha=function(){ha=function(){};
ia.Symbol||(ia.Symbol=aaa)};
la=function(){ha();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(this)}});
la=function(){}};
ka=function(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
na=function(a){la();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a};
g.oa=function(a){la();var b=a[window.Symbol.iterator];return b?b.call(a):ka(a)};
baa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
pa=function(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var h=d[e];h in c||(c[h]={});c=c[h]}d=d[d.length-1];e=c[d];h=b(e);h!=e&&null!=h&&ja(c,d,{configurable:!0,writable:!0,value:h})}};
qa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
ra=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.sa=function(a){return void 0!==a};
g.ta=function(a){return"string"==typeof a};
g.ua=function(a){return"boolean"==typeof a};
g.va=function(a){return"number"==typeof a};
g.p=function(a,b,c){a=a.split(".");c=c||g.n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.sa(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.q=function(a,b){for(var c=a.split("."),d=b||g.n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.wa=function(){};
g.xa=function(a){a.zc=void 0;a.getInstance=function(){return a.zc?a.zc:a.zc=new a}};
g.za=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Aa=function(a){return"array"==g.za(a)};
g.Ba=function(a){var b=g.za(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Ca=function(a){return"function"==g.za(a)};
g.Da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Fa=function(a){return a[Ea]||(a[Ea]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.t=daa:g.t=eaa;return g.t.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.cw=function(a,c,h){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
g.Ga=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ga);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ia=function(a,b,c){b=g.Ha(a,b,c);return 0>b?null:g.ta(a)?a.charAt(b):a[b]};
g.Ha=function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return h;return-1};
g.Ka=function(a,b){return 0<=(0,g.Ja)(a,b)};
g.La=function(a){return 0==a.length};
g.Na=function(a,b){var c=(0,g.Ja)(a,b),d;(d=0<=c)&&g.Ma(a,c);return d};
g.Ma=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Oa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Pa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ba(d)){var e=a.length||0,h=d.length||0;a.length=e+h;for(var k=0;k<h;k++)a[e+k]=d[k]}else a.push(d)}};
g.Qa=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Ra=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Sa=function(a){return/^[\s\xa0]*$/.test(a)};
g.Ta=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Ua=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Va=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Ya=function(a,b){for(var c=0,d=(0,g.Wa)(String(a)).split("."),e=(0,g.Wa)(String(b)).split("."),h=Math.max(d.length,e.length),k=0;0==c&&k<h;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Xa(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||Xa(0==l[2].length,0==m[2].length)||Xa(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Xa=function(a,b){return a<b?-1:a>b?1:0};
g.Za=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.ab=function(a){return-1!=g.$a.indexOf(a)};
g.bb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.cb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.db=function(a,b){return null!==a&&b in a};
g.eb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.fb=function(a){for(var b in a)return!1;return!0};
g.gb=function(a,b){b in a&&delete a[b]};
g.ib=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.jb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};
g.kb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.mb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var h=0;h<lb.length;h++)c=lb[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.nb=function(){return g.ab("Trident")||g.ab("MSIE")};
g.pb=function(){return g.ab("Safari")&&!(g.ob()||g.ab("Coast")||g.ab("Opera")||g.ab("Edge")||g.ab("Silk")||g.ab("Android"))};
g.ob=function(){return(g.ab("Chrome")||g.ab("CriOS"))&&!g.ab("Edge")};
g.qb=function(){return g.ab("Android")&&!(g.ob()||g.ab("Firefox")||g.ab("Opera")||g.ab("Silk"))};
rb=function(){return g.ab("iPhone")&&!g.ab("iPod")&&!g.ab("iPad")};
g.sb=function(){return rb()||g.ab("iPad")||g.ab("iPod")};
g.tb=function(a){g.tb[" "](a);return a};
g.ub=function(a,b){try{return g.tb(a[b]),!0}catch(c){}return!1};
naa=function(a,b){var c=maa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
vb=function(){var a=g.n.document;return a?a.documentMode:void 0};
g.yb=function(a){return naa(a,function(){return 0<=g.Ya(g.xb,a)})};
g.Ab=function(a){return Number(g.zb)>=a};
Eb=function(a,b){g.Ba(a);g.Bb();for(var c=b?Cb:Db,d=[],e=0;e<a.length;e+=3){var h=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,r=m?a[e+2]:0,w=h>>2;h=(h&3)<<4|l>>4;l=(l&15)<<2|r>>6;r&=63;m||(r=64,k||(l=64));d.push(c[w],c[h],c[l],c[r])}return d.join("")};
g.Bb=function(){if(!Db){Db={};g.Fb={};Cb={};for(var a=0;65>a;a++)Db[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),g.Fb[Db[a]]=a,Cb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(g.Fb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
g.Gb=function(){};
Hb=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Aa(c))for(var d=0;d<c.length;d++)c[d]&&c[d].Ae();else c&&c.Ae()}};
Ib=function(a,b){return g.va(b)&&((0,window.isNaN)(b)||window.Infinity===b||-window.Infinity===b)?String(b):b};
Jb=function(a){if(g.Aa(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Jb(d):d)}return b}if(g.Kb&&a instanceof window.Uint8Array)return new window.Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Jb(d):d);return b};
g.Lb=function(a){this.C=a||{cookie:""}};
g.Mb=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,h=0;h<a.length;h++)e=(0,g.Wa)(a[h]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Nb=function(a){var b=g.q("window.location.href");if(g.ta(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.n.$googDebugFname||b}catch(h){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.Ob=function(a){return function(){return a}};
g.Pb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Rb=function(){this.C="";this.F=Qb};
g.Sb=function(a){if(a instanceof g.Rb&&a.constructor===g.Rb&&a.F===Qb)return a.C;g.za(a);return"type_error:SafeUrl"};
g.Vb=function(a){if(a instanceof g.Rb)return a;a="object"==typeof a&&a.Ud?a.fd():String(a);Tb.test(a)||(a="about:invalid#zClosurez");return g.Ub(a)};
g.Wb=function(a){if(a instanceof g.Rb)return a;a="object"==typeof a&&a.Ud?a.fd():String(a);Tb.test(a)||(a="about:invalid#zClosurez");return g.Ub(a)};
g.Ub=function(a){var b=new g.Rb;b.C=a;return b};
g.Yb=function(){this.C="";this.F=g.Xb};
g.Zb=function(a){var b=new g.Yb;b.C=a;return b};
g.ac=function(){this.C="";this.F=g.$b};
g.bc=function(a){var b=new g.ac;b.C=a;return b};
g.dc=function(){this.C="";this.D=cc;this.F=null};
g.ec=function(a){if(a instanceof g.dc&&a.constructor===g.dc&&a.D===cc)return a.C;g.za(a);return"type_error:SafeHtml"};
g.gc=function(a){if(a instanceof g.dc)return a;var b="object"==typeof a,c=null;b&&a.Jl&&(c=a.vf());a=g.Va(b&&a.Ud?a.fd():String(a));return g.fc(a,c)};
g.fc=function(a,b){var c=new g.dc;c.C=a;c.F=b;return c};
g.hc=function(a,b){var c=b instanceof g.Rb?b:g.Wb(b);a.href=g.Sb(c)};
g.ic=function(a,b){var c=b instanceof g.Rb?b:g.Wb(b);a.href=g.Sb(c)};
g.jc=function(a,b){this.x=g.sa(a)?a:0;this.y=g.sa(b)?b:0};
g.kc=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.lc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.mc=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.ta(a)?window.document.getElementById(a):a};
g.nc=function(a){var b=window.document;return g.ta(a)?b.getElementById(a):a};
g.pc=function(a,b){g.bb(b,function(b,d){b&&"object"==typeof b&&b.Ud&&(b=b.fd());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:oc.hasOwnProperty(d)?a.setAttribute(oc[d],b):g.Qa(d,"aria-")||g.Qa(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.rc=function(a){return g.qc(a||window)};
g.qc=function(a){a=a.document;a=g.sc(a)?a.documentElement:a.body;return new g.mc(a.clientWidth,a.clientHeight)};
g.uc=function(a,b,c){return g.tc(window.document,arguments)};
g.tc=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Va(d.name),'"');if(d.type){c.push(' type="',g.Va(d.type),'"');var e={};g.mb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ta(d)?c.className=d:g.Aa(d)?c.className=d.join(" "):g.pc(c,d));2<b.length&&g.vc(a,c,b,2);return c};
g.vc=function(a,b,c,d){function e(c){c&&b.appendChild(g.ta(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var h=c[d];!g.Ba(h)||g.Da(h)&&0<h.nodeType?e(h):(0,g.y)(paa(h)?g.Oa(h):h,e)}};
g.sc=function(a){return"CSS1Compat"==a.compatMode};
g.wc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.xc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.yc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Ca(a))return"function"==typeof a.item}return!1};
g.zc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.Ac=function(a){try{return!!a&&null!=a.location.href&&g.ub(a,"foo")}catch(b){return!1}};
g.Bc=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.Cc=function(a){var b=[];g.Bc(a,function(a){b.push(a)});
return b};
Dc=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};
Ec=function(a,b){var c=!1,d=!1;d=void 0===d?!1:d;c=void 0===c?!1:c;g.n.google_image_requests||(g.n.google_image_requests=[]);var e=g.n.document.createElement("img");if(b||c){var h=function(a){b&&b(a);c&&g.Na(g.n.google_image_requests,e);e.removeEventListener&&e.removeEventListener("load",h,!1);e.removeEventListener&&e.removeEventListener("error",h,!1)};
Dc(e,"load",h);Dc(e,"error",h)}d&&(e.referrerPolicy="no-referrer");e.src=a;g.n.google_image_requests.push(e)};
g.Fc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Gc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Hc=function(a,b){a.style.height=g.Gc(b,!0)};
g.Ic=function(a,b){a.style.width=g.Gc(b,!0)};
g.Jc=function(a){return!!a.google_async_iframe_id};
g.Nc=function(){if(Kc&&!g.Ac(Lc)){var a="."+g.Mc.domain;try{for(;2<a.split(".").length&&!g.Ac(Lc);)g.Mc.domain=a=a.substr(a.indexOf(".")+1),Lc=window.parent}catch(b){}g.Ac(Lc)||(Lc=window)}return Lc};
Oc=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
g.Pc=function(a,b,c,d,e,h,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);h&&(l+="?"+h);k&&(l+="#"+k);return l};
g.Qc=function(a){return a.match(qaa)};
g.Rc=function(a){return a?(0,window.decodeURI)(a):a};
g.Sc=function(a){return g.Rc(g.Qc(a)[3]||null)};
g.Tc=function(a){a=g.Qc(a);return g.Pc(null,null,null,null,a[5],a[6],a[7])};
g.Uc=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.Vc=function(a,b,c){if(g.Aa(b))for(var d=0;d<b.length;d++)g.Vc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ta(b)))};
g.Wc=function(a){var b=[],c;for(c in a)g.Vc(c,a[c],b);return b.join("&")};
g.Xc=function(a,b){var c=g.Wc(b);return g.Uc(a,c)};
g.Zc=function(a){var b=a||g.n,c=[],d=null;do{var e=b;if(g.Ac(e)){var h=e.location.href;d=e.document&&e.document.referrer||null}else h=d,d=null;c.push(new Yc(h||"",e));try{b=e.parent}catch(k){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||g.n;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.Bq=!0);return c};
raa=function(a,b){this.C=a;this.F=b};
Yc=function(a,b,c){this.url=a;this.Mg=b;this.Bq=!!c;this.depth=g.va(void 0)?void 0:null};
$c=function(){this.D="&";this.G=g.sa(void 0)?void 0:"trn";this.H=!1;this.F={};this.K=0;this.C=[]};
ad=function(a,b){var c={};c[a]=b;return[c]};
cd=function(a,b,c,d,e){var h=[];g.Bc(a,function(a,l){var k=bd(a,b,c,d,e);k&&h.push(l+"="+k)});
return h.join(b)};
bd=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var h=[],k=0;k<a.length;k++)h.push(bd(a[k],b,c,d+1,e));return h.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(cd(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
dd=function(a,b,c,d){a.C.push(b);a.F[b]=ad(c,d)};
saa=function(a){if(!a.G)return 4E3;var b=1,c;for(c in a.F)b=c.length>b?c.length:b;return 4E3-a.G.length-b-a.D.length-1};
g.ed=function(a,b,c,d,e){if(Math.random()<(d||a.C))try{if(c instanceof $c)var h=c;else h=new $c,g.Bc(c,function(a,b){var c=h,d=c.K++,e=ad(b,a);c.C.push(d);c.F[d]=e});
var k=h.getUrl(a.G,a.F,a.D+b+"&","");k&&("undefined"===typeof e?Ec(k,void 0):Ec(k,e))}catch(l){}};
gd=function(){var a=g.n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.fd)()};
hd=function(){var a=void 0===a?g.n:a;return(a=a.performance)&&a.now?a.now():null};
taa=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
kd=function(){var a=id;this.events=[];this.F=a||g.n;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.C=jd()||(null!=b?b:1>Math.random())};
g.md=function(a){a&&ld&&jd()&&(ld.clearMarks("goog_"+a.uniqueId+"_start"),ld.clearMarks("goog_"+a.uniqueId+"_end"))};
qd=function(){var a=nd;this.D=g.od;this.G=this.F;this.C=void 0===a?null:a};
g.td=function(a){return new rd(g.sd(a),a.fileName,a.lineNumber)};
g.sd=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
rd=function(a,b,c){Oc.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
ud=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
uaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=r=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],h=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var r=l^d&(h^l);var w=1518500249}else r=d^h^l,w=1859775393;else 60>c?(r=d&h|l&(d|h),w=2400959708):(r=d^h^l,w=3395469782);r=((a<<5|a>>>27)&4294967295)+r+m+w+b[c]&4294967295;m=l;l=h;h=(d<<30|d>>>2)&4294967295;d=a;a=r}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+h&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==r)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(h[r++]=a[d++],w++,64==r)for(r=0,b(h);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>r?c(l,56-r):c(l,64-(r-56));for(var k=63;56<=k;k--)h[k]=d&255,d>>>=8;b(h);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],h=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var r,w;a();return{reset:a,update:c,digest:d,Ew:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
vaa=function(a,b,c){var d=[],e=[];if(1==(g.Aa(c)?2:1))return e=[b,a],(0,g.y)(d,function(a){e.push(a)}),vd(e.join(" "));
var h=[],k=[];(0,g.y)(c,function(a){k.push(a.key);h.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.La(h)?[c,b,a]:[h.join(":"),c,b,a];(0,g.y)(d,function(a){e.push(a)});
a=vd(e.join(" "));a=[c,a];g.La(k)||a.push(k.join(""));return a.join("_")};
vd=function(a){var b=uaa();b.update(a);return b.Ew().toLowerCase()};
wd=function(a){var b=ud(String(g.n.location.href)),c=g.n.__OVERRIDE_SID;null==c&&(c=(new g.Lb(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.n.__SAPISID:g.n.__APISID,null==b&&(b=(new g.Lb(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.n.location.href);return d&&b&&c?[c,vaa(ud(d),b,a||null)].join(" "):null}return null};
g.A=function(){this.Cc=this.Cc;this.Yb=this.Yb};
g.zd=function(a,b){g.xd(a,g.u(g.yd,b))};
g.xd=function(a,b){a.Cc?g.sa(void 0)?b.call(void 0):b():(a.Yb||(a.Yb=[]),a.Yb.push(g.sa(void 0)?(0,g.t)(b,void 0):b))};
g.yd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Ad=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.zt=!0};
Dd=function(a){return g.Bd?"webkit"+a:g.Cd?"o"+a.toLowerCase():a.toLowerCase()};
g.Ed=function(a,b){g.Ad.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.lc=null;a&&this.init(a,b)};
g.Hd=function(a){return!(!a||!a[Fd])};
xaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.qh=e;this.key=++waa;this.Dg=this.li=!1};
Id=function(a){a.Dg=!0;a.listener=null;a.C=null;a.src=null;a.qh=null};
g.Jd=function(a){this.src=a;this.listeners={};this.C=0};
Kd=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Na(a.listeners[c],b);d&&(Id(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Ld=function(a,b,c,d){for(var e=0;e<a.length;++e){var h=a[e];if(!h.Dg&&h.listener==b&&h.capture==!!c&&h.qh==d)return e}return-1};
g.Nd=function(a,b,c,d,e){if(d&&d.once)return g.Md(a,b,c,d,e);if(g.Aa(b)){for(var h=0;h<b.length;h++)g.Nd(a,b[h],c,d,e);return null}c=g.Od(c);return g.Hd(a)?a.O(b,c,g.Da(d)?!!d.capture:!!d,e):Pd(a,b,c,!1,d,e)};
Pd=function(a,b,c,d,e,h){if(!b)throw Error("Invalid event type");var k=g.Da(e)?!!e.capture:!!e,l=g.Rd(a);l||(a[Sd]=l=new g.Jd(a));c=l.add(b,c,d,k,h);if(c.C)return c;d=yaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)zaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Td(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ud++;return c};
yaa=function(){var a=Aaa,b=Vd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Md=function(a,b,c,d,e){if(g.Aa(b)){for(var h=0;h<b.length;h++)g.Md(a,b[h],c,d,e);return null}c=g.Od(c);return g.Hd(a)?a.Qe(b,c,g.Da(d)?!!d.capture:!!d,e):Pd(a,b,c,!0,d,e)};
g.Wd=function(a,b,c,d,e){if(g.Aa(b))for(var h=0;h<b.length;h++)g.Wd(a,b[h],c,d,e);else d=g.Da(d)?!!d.capture:!!d,c=g.Od(c),g.Hd(a)?a.Va(b,c,d,e):a&&(a=g.Rd(a))&&(b=a.rf(b,c,d,e))&&g.Xd(b)};
g.Xd=function(a){if(g.va(a)||!a||a.Dg)return!1;var b=a.src;if(g.Hd(b))return Kd(b.xd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Td(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ud--;(c=g.Rd(b))?(Kd(c,a),0==c.C&&(c.src=null,b[Sd]=null)):Id(a);return!0};
Td=function(a){return a in Yd?Yd[a]:Yd[a]="on"+a};
$d=function(a,b,c,d){var e=!0;if(a=g.Rd(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var h=b[a];h&&h.capture==c&&!h.Dg&&(h=Zd(h,d),e=e&&!1!==h)}return e};
Zd=function(a,b){var c=a.listener,d=a.qh||a.src;a.li&&g.Xd(a);return c.call(d,b)};
Aaa=function(a,b){if(a.Dg)return!0;if(!Vd){var c=b||g.q("window.event"),d=new g.Ed(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var h=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){h=!0}if(h||void 0==c.returnValue)c.returnValue=!0}c=[];for(h=d.currentTarget;h;h=h.parentNode)c.push(h);h=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=$d(c[k],h,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=$d(c[k],h,!1,d),e=e&&l}return e}return Zd(a,new g.Ed(b,
this))};
g.Rd=function(a){a=a[Sd];return a instanceof g.Jd?a:null};
g.Od=function(a){if(g.Ca(a))return a;a[ae]||(a[ae]=function(b){return a.handleEvent(b)});
return a[ae]};
g.be=function(){g.A.call(this);this.xd=new g.Jd(this);this.Nv=this;this.ym=null};
ce=function(a,b,c,d){b=a.xd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,h=0;h<b.length;++h){var k=b[h];if(k&&!k.Dg&&k.capture==c){var l=k.listener,m=k.qh||k.src;k.li&&Kd(a.xd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.zt};
de=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
ee=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
fe=function(a){g.n.setTimeout(function(){throw a;},0)};
Baa=function(){var a=g.n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.ab("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.nb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.sa(c.next)){c=c.next;var a=c.Zn;c.Zn=null;a()}};
return function(a){d.next={Zn:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.n.setTimeout(a,0)}};
ge=function(){this.F=this.C=null};
he=function(){this.next=this.scope=this.kc=null};
le=function(a,b){ie||Caa();je||(ie(),je=!0);ke.add(a,b)};
Caa=function(){if(g.n.Promise&&g.n.Promise.resolve){var a=g.n.Promise.resolve(void 0);ie=function(){a.then(me)}}else ie=function(){var a=me;
!g.Ca(g.n.setImmediate)||g.n.Window&&g.n.Window.prototype&&!g.ab("Edge")&&g.n.Window.prototype.setImmediate==g.n.setImmediate?(ne||(ne=Baa()),ne(a)):g.n.setImmediate(a)}};
me=function(){for(var a;a=ke.remove();){try{a.kc.call(a.scope)}catch(b){fe(b)}ee(oe,a)}je=!1};
g.pe=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.qe=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.se=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.K=!1;if(a!=g.wa)try{var c=this;a.call(b,function(a){g.re(c,2,a)},function(a){g.re(c,3,a)})}catch(d){g.re(this,3,d)}};
te=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
ve=function(a,b,c){var d=ue.get();d.F=a;d.onRejected=b;d.context=c;return d};
Daa=function(a,b,c){we(a,b,c,null)||le(g.u(b,a))};
g.xe=function(a){return new g.se(function(b,c){var d=a.length,e=[];if(d)for(var h=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],Daa(m,g.u(h,l),k);
else b(e)})};
g.ze=function(a,b){return ye(a,null,b,void 0)};
Ae=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,h=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(h=k);e&&(0==c.C&&1==d?Ae(c,b):(h?(d=h,d.next==c.G&&(c.G=d),d.next=d.next.next):Ce(c),De(c,e,3,b)))}a.D=null}else g.re(a,3,b)};
Fe=function(a,b){a.F||2!=a.C&&3!=a.C||Ee(a);a.G?a.G.next=b:a.F=b;a.G=b};
ye=function(a,b,c,d){var e=ve(null,null,null);e.C=new g.se(function(a,k){e.F=b?function(c){try{var e=b.call(d,c);a(e)}catch(r){k(r)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!g.sa(e)&&b instanceof g.Ge?k(b):a(e)}catch(r){k(r)}}:k});
e.C.D=a;Fe(a,e);return e.C};
g.re=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,we(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,Ee(a),3!=b||c instanceof g.Ge||Eaa(a,c)))};
we=function(a,b,c,d){if(a instanceof g.se)return Fe(a,ve(b||g.wa,c||null,d)),!0;if(g.qe(a))return a.then(b,c,d),!0;if(g.Da(a))try{var e=a.then;if(g.Ca(e))return Faa(a,e,b,c,d),!0}catch(h){return c.call(d,h),!0}return!1};
Faa=function(a,b,c,d,e){function h(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,h)}catch(m){h(m)}};
Ee=function(a){a.K||(a.K=!0,le(a.J,a))};
Ce=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
De=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,He(b,c,d);else try{b.D?b.F.call(b.context):He(b,c,d)}catch(e){Ie.call(null,e)}ee(ue,b)};
He=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Eaa=function(a,b){a.H=!0;le(function(){a.H&&Ie.call(null,b)})};
g.Ge=function(a){g.Ga.call(this,a)};
g.Je=function(a,b,c){if(g.Ca(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.n.setTimeout(a,b||0)};
g.Ke=function(a){g.n.clearTimeout(a)};
g.Le=function(a,b,c){g.A.call(this);this.C=a;this.D=b||0;this.F=c;this.Zb=(0,g.t)(this.np,this)};
Gaa=function(){this.F=-1};
Me=function(){this.F=64;this.C=[];this.K=[];this.R=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
Ne=function(a,b,c){c||(c=0);var d=a.R;if(g.ta(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var h=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(h<<1|h>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){h=l^c&(k^l);var r=1518500249}else h=c^k^l,r=1859775393;else 60>e?(h=c&k|l&(c|k),r=2400959708):(h=c^k^l,
r=3395469782);h=(b<<5|b>>>27)+h+m+r+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=h}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.Oe=function(a){if(a.classList)return a.classList;a=a.className;return g.ta(a)&&a.match(/\S+/g)||[]};
g.B=function(a,b){return a.classList?a.classList.contains(b):g.Ka(g.Oe(a),b)};
g.Pe=function(){};
Re=function(a){if(a instanceof g.Pe)return a;if("function"==typeof a.cd)return a.cd(!1);if(g.Ba(a)){var b=0,c=new g.Pe;c.next=function(){for(;;){if(b>=a.length)throw g.Qe;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Se=function(a,b,c){if(g.Ba(a))try{(0,g.y)(a,b,c)}catch(d){if(d!==g.Qe)throw d;}else{a=Re(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Qe)throw d;}}};
Haa=function(a){if(g.Ba(a))return g.Oa(a);a=Re(a);var b=[];g.Se(a,function(a){b.push(a)});
return b};
g.Ue=function(a,b){this.F={};this.C=[];this.We=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.Te(this,a)};
Iaa=function(a,b){return a===b};
g.We=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.Ve(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.Ve(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.Te=function(a,b){if(b instanceof g.Ue)for(var c=b.Hc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.Ve=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.Ye=function(a){var b=[];Xe(new Jaa,a,b);return b.join("")};
Jaa=function(){};
Xe=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",h=0;h<b;h++)c.push(e),Xe(a,d[h],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=b[d],"function"!=typeof h&&(c.push(e),Ze(d,c),c.push(":"),Xe(a,h,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ze(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Ze=function(a,b){b.push('"',a.replace(Kaa,function(a){var b=$e[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),$e[a]=b);return b}),'"')};
g.af=function(a){g.A.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.K=!!a};
g.bf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ia(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.sd(b)}};
Laa=function(a,b,c){le(function(){a.apply(b,c)})};
g.cf=function(a){this.C=a};
df=function(a){this.C=a};
ef=function(a){this.data=a};
ff=function(a){return!g.sa(a)||a instanceof ef?a:new ef(a)};
g.gf=function(a){this.C=a};
g.hf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.fd)()||!!b&&b>(0,g.fd)()};
Maa=function(){};
jf=function(){};
g.kf=function(a){this.C=a};
g.lf=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
nf=function(a,b){this.F=a;this.C=null;if(g.C&&!g.Ab(9)){mf||(mf=new g.Ue);this.C=mf.get(a);this.C||(b?this.C=window.document.getElementById(b):(this.C=window.document.createElement("userdata"),this.C.addBehavior("#default#userData"),window.document.body.appendChild(this.C)),mf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
of=function(a){return"_"+(0,window.encodeURIComponent)(a).replace(/[.!~*'()%]/g,function(a){return Naa[a]})};
pf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
qf=function(a){return a.C.XMLDocument.documentElement};
rf=function(a,b){this.F=a;this.C=b+"::"};
g.sf=function(a){var b=new g.lf;return b.isAvailable()?a?new rf(b,a):b:null};
tf=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.vf=function(a){tf(g.uf,arguments)};
wf=function(a,b){var c=g.D(a,void 0);c?c.push(b):g.vf(a,[b])};
g.D=function(a,b){return a in g.uf?g.uf[a]:b};
yf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.xf(b)}}:a};
g.xf=function(a,b,c,d,e){var h=g.q("yt.logging.errors.log");h?h(a,b,c,d,e):(h=g.D("ERRORS",[]),h.push([a,b,c,d,e]),g.vf("ERRORS",h))};
g.zf=function(a){g.xf(a,"WARNING",void 0,void 0,void 0)};
Oaa=function(a,b,c,d,e){var h=!1,k;if((k=(k=g.uf.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)h=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){h=!0;break}}h&&(e||(g.ta(a)?h=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),a=Error(h),a.name="UnhandledWindowError",e=a,e.message=h,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.xf(e))};
g.E=function(a,b){return a?a.dataset?a.dataset[g.Af(b)]:a.getAttribute("data-"+b):null};
g.Af=function(a){return Bf[a]||(Bf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Cf=function(a,b){g.Ca(a)&&(a=yf(a));return window.setTimeout(a,b)};
g.Df=function(a,b){g.Ca(a)&&(a=yf(a));return window.setInterval(a,b)};
g.Ef=function(a){window.clearTimeout(a)};
g.Ff=function(a){window.clearInterval(a)};
g.Kf=function(a,b,c){var d=Gf();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){Hf[e]&&b.apply(c||window,d)};
try{If[a]?k():g.Cf(k,0)}catch(l){g.xf(l)}},c);
Hf[e]=!0;Jf[a]||(Jf[a]=[]);Jf[a].push(e);return e}return 0};
g.Lf=function(a){var b=Gf();b&&(g.va(a)?a=[a]:g.ta(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.y)(a,function(a){b.unsubscribeByKey(a);delete Hf[a]}))};
g.F=function(a,b){var c=Gf();return c?c.publish.apply(c,arguments):!1};
g.Mf=function(a,b){If[a]=!0;var c=Gf();c=c?c.publish.apply(c,arguments):!1;If[a]=!1;return c};
Gf=function(){return g.q("ytPubsubPubsubInstance")};
g.Of=function(a,b){var c=g.Nf(a);window.spf.script.load(a,c,b)};
g.Pf=function(a){a=g.Nf(a);window.spf.script.unload(a)};
g.Nf=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Paa,""),b=b.replace(Qaa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.Qf=function(){this.F=!1;this.C=null};
Rf=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.zf(d)}c&&c(b)};
Raa=function(){};
g.Tf=function(a,b){return Sf(a,0,b)};
g.Uf=function(a,b){return Sf(a,1,b)};
g.Wf=function(a){for(var b=0,c=a.length;b<c;b++)g.Vf(a[b])};
Xf=function(){};
g.Yf=function(){return!!g.q("yt.scheduler.instance")};
Sf=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.Cf(a,c||0)};
g.Vf=function(a){if(!(0,window.isNaN)(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.Ef(a)}};
Saa=function(){return(0,window.parseInt)(g.D("DCLKSTAT",0),10)};
g.$f=function(a){return!!Zf(a)};
g.ag=function(a){return Number(Zf(a)||0)};
Zf=function(a){return g.D("EXPERIMENT_FLAGS",{})[a]};
Taa=function(){return g.bg.Oe()};
Uaa=function(){return g.bg.invoke()};
Vaa=function(){if(!cg)return null;var a=cg();return"open"in a?a:null};
g.eg=function(a){switch(g.dg(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.dg=function(a){return a&&"status"in a?a.status:-1};
g.fg=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var h=g.Ua(e[0]||"");e=g.Ua(e[1]||"");h in b?g.Aa(b[h])?g.Pa(b[h],e):b[h]=[b[h],e]:b[h]=e}}return b};
g.hg=function(a,b){return g.gg(a,b||{},!0)};
g.gg=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.fg(e[1]||"");for(var h in b)if(c||!g.db(e,h))e[h]=b[h];return g.Xc(a,e)+d};
Waa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.Qc(a)[1]||null,e=g.Sc(a);d&&e?(d=c,c=g.Qc(a),d=g.Qc(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.Sc(c)==e&&(Number(g.Qc(c)[4]||null)||null)==(Number(g.Qc(a)[4]||null)||null):!0;d=g.$f("web_ajax_ignore_global_headers_if_set");for(var h in ig)e=g.D(ig[h]),!e||!c&&!jg(a,h)||d&&void 0!==b[h]||(b[h]=e);if(c||jg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b};
Yaa=function(a){var b=g.fg(window.location.search),c={};(0,g.y)(Xaa,function(a){b[a]&&(c[a]=b[a])});
return g.gg(a,c||{},!1)};
jg=function(a,b){var c=g.D("CORS_HEADER_WHITELIST")||{},d=g.Sc(a);return d?(c=c[d])?g.Ka(c,b):!1:!0};
Zaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=kg(a,b);var d=lg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,h;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;h&&g.Ef(h);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.n;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Ya&&b.Ya.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Jr&&0<b.timeout&&(h=g.Cf(function(){e||(e=!0,g.Ef(h),b.Jr.call(b.context||g.n))},b.timeout))}else g.G(a,b)};
g.G=function(a,b){var c=b.format||"JSON";a=kg(a,b);var d=lg(a,b),e=!1,h,k=mg(a,function(a){if(!e){e=!0;h&&g.Ef(h);var d=g.eg(a),k=null,l=400<=a.status&&500>a.status,z=500<=a.status&&600>a.status;if(d||l||z)k=$aa(c,a,b.nb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};l=b.context||g.n;d?b.onSuccess&&b.onSuccess.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Ya&&b.Ya.call(l,a,k)}},b.method,d,b.headers,
b.responseType,b.withCredentials);
b.Mc&&0<b.timeout&&(h=g.Cf(function(){e||(e=!0,k.abort(),g.Ef(h),b.Mc.call(b.context||g.n,k))},b.timeout));
return k};
kg=function(a,b){b.uB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.D("XSRF_FIELD_NAME",void 0),d=b.Fa;d&&(d[c]&&delete d[c],a=g.hg(a,d));return a};
lg=function(a,b){var c=g.D("XSRF_FIELD_NAME",void 0),d=g.D("XSRF_TOKEN",void 0),e=b.postBody||"",h=b.ia,k=g.D("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Uw||g.Sc(a)&&!b.withCredentials&&g.Sc(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(h||(h={}),h[c]=d);h&&g.ta(e)&&(e=g.fg(e),g.mb(e,h),e=b.Ls&&"JSON"==b.Ls?JSON.stringify(e):g.Wc(e));h=e||h&&!g.fb(h);!ng&&h&&"POST"!=b.method&&(ng=!0,g.xf(Error("AJAX request with postData should use POST")));
return e};
$aa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?og(b):null)d={},(0,g.y)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.pg(a)})}c&&qg(d);
return d};
qg=function(a){if(g.Da(a))for(var b in a)"html_content"==b||g.Ra(b,"_html")?a[b]=g.fc(a[b],null):qg(a[b])};
og=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.pg=function(a){var b="";(0,g.y)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.rg=function(a,b){b.method="POST";b.ia||(b.ia={});return g.G(a,b)};
mg=function(a,b,c,d,e,h,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&yf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Vaa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.$f("debug_forward_web_query_parameters")&&(a=Yaa(a));m.open(c,a,!0);h&&(m.responseType=h);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof window.FormData));if(e=Waa(a,e))for(var r in e)m.setRequestHeader(r,e[r]),"content-type"==r.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
m.send(d);return m};
sg=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.tg=function(a){var b=new sg;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.ug=function(a){var b=new sg;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.wg=function(a){var b=a.__yt_uid_key;b||(b=vg(),a.__yt_uid_key=b);return b};
g.xg=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=aba+"VisibilityState";if(b in a)return a[b]};
g.yg=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in bba||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
zg=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Ag=function(a){g.sa(a.C)||zg(a);return a.C};
g.Bg=function(a){g.sa(a.F)||zg(a);return a.F};
g.Dg=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.eb(Cg,function(e){var h=g.ua(e[4])&&e[4]==!!d,k=g.Da(e[4])&&g.Da(d)&&g.jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(h||k)})};
g.H=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Dg(a,b,c,d);if(e)return e;e=++Eg.count+"";var h=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=h?function(d){d=new g.yg(d);if(!g.zc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.yg(b);
b.currentTarget=a;return c.call(a,b)};
k=yf(k);a.addEventListener?("mouseenter"==b&&h?b="mouseover":"mouseleave"==b&&h?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),Fg()||g.ua(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);Cg[e]=[a,b,c,k,d];return e};
g.J=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.y)(a,function(a){if(a in Cg){var b=Cg[a],d=b[0],e=b[1],h=b[3];b=b[4];d.removeEventListener?Fg()||g.ua(b)?d.removeEventListener(e,h,b):d.removeEventListener(e,h,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,h);delete Cg[a]}}))};
g.Gg=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.H(a,b,function(){g.J(e);c.apply(a,arguments)},d)};
g.Hg=function(a){for(var b in Cg)Cg[b][0]==a&&g.J(b)};
g.Ig=function(a){this.Zb=a;this.C=null;this.D=0;this.K=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.H(window,"mousemove",(0,g.t)(this.W,this));this.N=g.Df((0,g.t)(this.R,this),25)};
Jg=function(){g.A.call(this);this.C=[]};
Kg=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.kb(cba);this.assets=a.assets||{};this.attrs=a.attrs||g.kb(dba);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Lg=function(a){a instanceof Kg||(a=new Kg(a));return a};
g.Pg=function(a,b,c,d,e,h){h=h||{};h.name=c||g.D("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=d||g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Ng||(c=a.stacktrace,d=a.columnNumber,a.hasOwnProperty("params")&&(h.params=JSON.stringify(a.params).substr(0,500)),a=g.Nb(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),Og[a.message]||
0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={Fa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":h.name},ia:{url:g.D("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};h.version&&(b["client.version"]=h.version);c&&(b.ia.stack=c);for(var k in h)b.ia["client."+k]=h[k];if(k=g.D("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ia[l]=k[l];g.G(g.D("ECATCHER_REPORT_HOST","")+"/error_204",b);Og[a.message]=
!0;Ng++}};
g.Vg=function(a,b){if(a.si){var c=a.si;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Qg[a.si.token]=d;c=Rg(a.endpoint,a.si.token)}else c=Rg(a.endpoint);c.push(a.payload);Sg[a.endpoint]=new b;c.length>=(g.ag("web_logging_max_batch")||20)?g.Tg():g.Ug()};
g.Tg=function(){g.Ef(g.Wg);if(!g.fb(g.Xg)){for(var a in g.Xg){var b=Sg[a];b&&(eba(a,b),delete g.Xg[a])}g.fb(g.Xg)||g.Ug()}};
fba=function(){var a=[];for(e in g.Xg){var b=Yg[e]||{};Yg[e]=b;for(var c in g.Xg[e]){var d=Rg(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.Zg());for(var h in Yg)b=Yg[h],b.eventType=h in $g?$g[h]:"UNKNOWN_TYPE",c=ah[h],b.metricIntervalMs=c?e-c:e-g.bh,a.push(b),ah[h]=e,delete Yg[h];return a};
g.Ug=function(){g.Ef(g.Wg);g.Wg=g.Cf(g.Tg,g.D("LOGGING_BATCH_TIMEOUT",g.ch||1E4))};
Rg=function(a,b){b=void 0===b?"":b;g.Xg[a]=g.Xg[a]||{};g.Xg[a][b]=g.Xg[a][b]||[];return g.Xg[a][b]};
eba=function(a,b){var c=gba[a],d=Yg[a]||{};Yg[a]=d;var e=Math.round(g.Zg());for(r in g.Xg[a]){var h={context:g.dh(b.C)};h[c]=Rg(a,r);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=h[c].length;var k=Qg[r];if(k)a:{var l=r;if(k.videoId)var m="VIDEO";else if(k.playlistId)m="PLAYLIST";else break a;h.credentialTransferTokenTargetId=k;h.context=h.context||{};h.context.user=h.context.user||{};h.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Qg[r];h.requestTimeMs=
e;if(k=g.D("EVENT_ID",void 0))m=(g.D("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>hba&&(m=1),g.vf("BATCH_CLIENT_COUNTER",m),k={serializedEventId:k,clientCounter:m},h.serializedClientEventId=k,eh&&fh&&g.$f("log_gel_rtt_web")&&(h.previousBatchInfo={serializedClientEventId:eh,roundtripMs:fh}),eh=k,fh=0;g.gh(b,a,h,{retry:iba.has(a),onSuccess:jba.bind(this,g.Zg())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var r=d.diffCount||0;d.averageTimeBetweenDispatchesMs=r?(d.averageTimeBetweenDispatchesMs*r+c)/
(r+1):c;d.diffCount=r+1}d.previousDispatchMs=e};
jba=function(a){fh=Math.round(g.Zg()-a)};
g.jh=function(a){var b=void 0===a?{}:a;a=void 0===b.vB?!0:b.vB;b=void 0===b.hJ?!1:b.hJ;if(null==g.q("_lact",window)){var c=(0,window.parseInt)(g.D("LACT"),10);c=(0,window.isFinite)(c)?(0,g.fd)()-Math.max(c,0):-1;g.p("_lact",c,window);g.p("_fact",c,window);-1==c&&hh();g.H(window.document,"keydown",hh);g.H(window.document,"keyup",hh);g.H(window.document,"mousedown",hh);g.H(window.document,"mouseup",hh);a&&(b?g.H(window,"touchmove",function(){ih("touchmove",200)},{passive:!0}):(g.H(window,"resize",function(){ih("resize",
200)}),g.H(window,"scroll",function(){ih("scroll",200)})));
new g.Ig(function(){ih("mouse",100)});
g.H(window.document,"touchstart",hh,{passive:!0});g.H(window.document,"touchend",hh,{passive:!0})}};
ih=function(a,b){kh[a]||(kh[a]=!0,g.Uf(function(){hh();kh[a]=!1},b))};
hh=function(){null==g.q("_lact",window)&&g.jh();var a=(0,g.fd)();g.p("_lact",a,window);-1==g.q("_fact",window)&&g.p("_fact",a,window);(a=g.q("ytglobal.ytUtilActivityCallback_"))&&a()};
g.lh=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.fd)()-a,0)};
g.nh=function(a,b,c,d){var e=g.mh,h={};h.eventTimeMs=Math.round(c||g.Zg());h[a]=b;h.context={lastActivityMs:String(c?-1:g.lh())};g.Vg({endpoint:"log_event",payload:h,si:d},e)};
g.dh=function(a){a={client:{hl:a.zB,gl:a.yB,clientName:a.xB,clientVersion:a.innertubeContextClientVersion}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.D("DELEGATED_SESSION_ID")&&!g.$f("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.D("DELEGATED_SESSION_ID")});return a};
oh=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.D("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.mZ||g.D("AUTHORIZATION"))||(a?b="Bearer "+g.q("gapi.auth.getToken")().lZ:b=wd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.D("SESSION_INDEX",0),g.$f("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.D("DELEGATED_SESSION_ID")));return d};
ph=function(a){a=Object.assign({},a);delete a.Authorization;var b=wd();if(b){var c=new Me;c.update(g.D("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Eb(c.digest(),!0)}return a};
g.rh=function(a,b,c,d){g.qh.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.sh=function(a,b,c){g.qh.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.th=function(a){var b;(b=g.sf(a))||(a=new nf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.gf(a):null;this.F=window.document.domain||window.location.hostname};
kba=function(a,b,c,d){if(d)return null;d=uh.get("nextId",!0)||1;var e=uh.get("requests",!0)||{};e[d]={method:a,request:b,authState:ph(c),requestTime:Math.round(g.Zg())};uh.set("nextId",d+1,86400,!0);uh.set("requests",e,86400,!0);return d};
vh=function(a){var b=uh.get("requests",!0)||{};delete b[a];uh.set("requests",b,86400,!0)};
wh=function(a){var b=uh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.Zg())-d.requestTime)){var e=d.authState,h=ph(oh(!1));g.jb(e,h)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.Zg())),g.gh(a,d.method,e,{}));delete b[c]}}uh.set("requests",b,86400,!0)}};
g.mh=function(a){var b=this;this.C=a||{innertubeApiKey:g.D("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.D("INNERTUBE_API_VERSION",void 0),xB:g.D("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),zB:g.D("INNERTUBE_CONTEXT_HL",void 0),yB:g.D("INNERTUBE_CONTEXT_GL",void 0),AB:g.D("INNERTUBE_HOST_OVERRIDE",void 0)||"",BB:!!g.D("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.Tf(function(){wh(b)},5E3)};
g.gh=function(a,b,c,d){!g.D("VISITOR_DATA")&&.01>Math.random()&&g.xf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,Ls:"JSON",Mc:function(){d.Mc()},
Jr:d.Mc,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
yj:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Ir:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},h="",k=a.C.AB;k&&(h=k);k=a.C.BB||!1;var l=oh(k,h,d);Object.assign(e.headers,l);e.headers.Authorization&&!h&&(e.headers["x-origin"]=window.location.origin);var m=""+h+("/youtubei/"+a.C.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.C.innertubeApiKey,r;if(d.retry&&g.$f("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=h&&(r=kba(b,c,l,k))){var w=e.onSuccess,z=e.yj;e.onSuccess=function(a,b){vh(r);w(a,b)};
c.yj=function(a,b){vh(r);z(a,b)}}try{g.$f("use_fetch_for_op_xhr")?Zaa(m,e):g.rg(m,e)}catch(I){if("InvalidAccessError"==I)r&&(vh(r),r=0),g.xf(Error("An extension is blocking network request."),"WARNING");
else throw I;}r&&g.Tf(function(){wh(a)},5E3)};
g.xh=function(a,b,c){g.nh(a,b,c,void 0)};
g.yh=function(){g.$f("log_web_meta")&&fba().forEach(function(a){g.xh("delayedEventMetricCaptured",a)})};
g.zh=function(a){this.C=a};
g.Ah=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.Ah(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.Bh=function(a,b,c){(0,g.y)(b,function(b){g.nh("visualElementHidden",{csn:a,ve:g.Ah(b),eventType:c?16:8})})};
Dh=function(a,b){var c=Object.keys(a).join("");Ch("info_"+c+"_"+b)||(a.clientActionNonce=b,g.xh("latencyActionInfo",a))};
Ch=function(a){Eh[a]=Eh[a]||{count:0};var b=Eh[a];b.count++;b.time=g.Zg();Fh||(Fh=g.Tf(lba,5E3));return 10<b.count?(11==b.count&&g.Pg(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
lba=function(){var a=g.Zg(),b;for(b in Eh)6E4<a-Eh[b].time&&delete Eh[b];Fh=0};
Hh=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.fd)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Gh)for(a=1,b=0;b<Gh.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Gh.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Mh=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Ih==a)return;Ih=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.lh()>b)&&"visible"==g.xg()){b=-1;g.Jh&&(b=Math.round(g.Zg()-g.Jh));var c=String;var d=g.q("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.fd)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:Kh,index:String(Lh),lastEventDeltaMs:String(b),trigger:a};g.nh("foregroundHeartbeat",
a);g.p("_fact",-1,window);Lh++;g.Jh=g.Zg()}};
g.Nh=function(a){a&&g.nh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Kh,clientScreenNonce:a})};
Oh=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
Ph=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
Qh=function(a){return g.D(Ph(void 0===a?0:a),void 0)};
g.Rh=function(){var a=Qh(0),b;a?b=new g.zh({veType:a,youtubeData:void 0}):b=null;return b};
g.Sh=function(a){a=void 0===a?0:a;var b=g.D(Oh(a));b||0!=a||(b=g.D("EVENT_ID"));return b?b:null};
g.Th=function(a,b,c){c=void 0===c?0:c;if(a!==g.D(Oh(c))||b!==g.D(Ph(c)))g.vf(Oh(c),a),g.vf(Ph(c),b),0==c&&(b=function(){(0,window.setTimeout)(function(){g.Nh(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
Uh=function(){var a=g.Rh(),b=g.Sh();b&&a&&g.Bh(b,[a],!0)};
g.Vh=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.K=d?yf(d):null;this.H=e?yf(e):null;this.G=[];this.C=this.F=0};
g.Wh=function(a){g.Vf(a.F);a.F=g.Uf((0,g.t)(a.init,a))};
g.Zh=function(a){a.name in Xh&&Yh(a.name);Xh[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.y)(a.deps,function(b){if(!(b in Xh))throw Error("Module "+b+" required by "+a.name);Xh[b].reqs.push(a.name)});
a.enable()};
Yh=function(a){if(a in Xh){var b=Xh[a];(0,g.y)(b.reqs,function(a){Yh(a)});
try{b.disable()}catch(c){}delete Xh[a]}};
ai=function(a){tf(g.$h,arguments)};
g.bi=function(a){return a in g.$h};
ci=function(a){tf(g.$h,arguments)};
g.di=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.$a,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Sb(g.Vb(a)),"about:invalid#zClosurez"===a?a="":(a=g.ec(g.gc(a)),a=g.Ta(g.Ye(a))),g.Sa(a)||(a=g.uc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.yc(a).body.appendChild(a))):e?mg(a,b,"POST",e,d):g.D("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?mg(a,b,"GET","",d):mba(a,b))};
mba=function(a,b){var c=new window.Image,d=""+nba++;ei[d]=c;c.onload=c.onerror=function(){b&&ei[d]&&b();delete ei[d]};
c.src=a};
g.fi=function(a,b){a=a||"";var c=a.match(oba);window.spf.style.load(a,c?c[1]:"",b)};
g.gi=function(a,b,c){var d=g.D("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Sc(window.location.href);e&&d.push(e);e=g.Sc(a);if(g.Ka(d,e)||!e&&g.Qa(a,"/"))if(g.$f("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.hc(d,a),a=d.href),a&&(a=g.Tc(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Sh();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Za(a).toString(36),b=b?g.Wc(b):"",g.rh(a,b,c||5))):(c="ST-"+g.Za(a).toString(36),b=b?g.Wc(b):"",
g.rh(c,b,5))}};
g.hi=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.ic(d.location,g.Xc(a,b)+c)};
g.ii=function(a,b){b&&g.gi(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.hi(a)};
g.ji=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.D("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.gi(a,b);if(c)return!1;g.ii(a);return!0};
g.ki=function(a,b){this.version=a;this.args=b};
g.li=function(a,b){this.topic=a;this.C=b};
g.ni=function(a,b){var c=g.mi();c&&c.publish.call(c,a.toString(),a,b)};
g.mi=function(){return g.q("ytPubsub2Pubsub2Instance")};
pba=function(a){if(oi.getEntriesByType){var b=oi.getEntriesByType("paint");if(b=g.Ia(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Ca(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
pi=function(){var a=g.D("TIMING_TICK_EXPIRATION");a||(a={},g.vf("TIMING_TICK_EXPIRATION",a));return a};
qi=function(){var a=pi(),b;for(b in a)g.Vf(a[b]);g.vf("TIMING_TICK_EXPIRATION",{})};
ri=function(a,b){g.ki.call(this,1,arguments)};
si=function(a,b){g.ki.call(this,1,arguments)};
uba=function(){ti=!1;var a=g.D("TIMING_INFO",{});for(b in a)ui(b,a[b]);ui("is_nav",1);(a=g.Sh())&&ui("csn",a);(a=g.D("PREVIOUS_ACTION",void 0))&&ui("pa",a);var b=vi();b.p=g.D("CLIENT_PROTOCOL")||"unknown";b.t=g.D("CLIENT_TRANSPORT")||"unknown";ui("yt_vis",qba());if("cold"==b.yt_lt){a=oi.timing||{};a.navigationStart&&(wi("srt",a.responseStart),1!=b.prerender&&xi("n",a.navigationStart));b=pba(a);0<b&&wi("fpt",b);yi(a);oi.getEntriesByType&&rba();a=[];if(window.document.querySelector&&oi&&oi.getEntriesByName)for(var c in zi)b=
zi[c],sba(c,b)&&a.push(b);a.length&&ui("rc",a.join(","))}Ai(void 0)&&(c={},c.actionType=tba[g.D("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Bi(void 0),Dh(c,a));if("cold"==vi().yt_lt){a=Ci();c=Di();for(var d in a)g.Qa(d,"_")||"tick_"+d in c||Ei(d,a[d]);d=vi();for(var e in d)"info_"+e in c||Fi(e,d[e])}Gi(!0);g.Ki(!1)};
Ni=function(a){Li(a);vba();Mi(!1,a);a||(g.D("TIMING_ACTION")&&g.vf("PREVIOUS_ACTION",g.D("TIMING_ACTION")),g.vf("TIMING_ACTION",""))};
wi=function(a,b,c){b||"_"==a[0]||Oi(a,c);var d=Ci(c),e=b||g.Zg();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=pi();var h=e[a];h&&(g.Vf(h),e[a]=0);Ei(a,b,c)||g.Ki(!1,c);return d[a]};
Oi=function(a,b){oi.mark&&(g.Qa(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),oi.mark(a))};
xi=function(a,b){ui("yt_sts",a,void 0);wi("_start",b,void 0)};
ui=function(a,b,c){vi(c)[a]=b;Fi(a,b,c)};
Pi=function(a){var b=Ci(a);if(b.aft)return b.aft;a=g.D((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
yi=function(a,b){wi("nreqs",a.requestStart,b);wi("nress",a.responseStart,b);wi("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(wi("nrs",a.redirectStart,b),wi("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(wi("ndnss",a.domainLookupStart,b),wi("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(wi("ntcps",a.connectStart,b),wi("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(wi("nstcps",a.secureConnectionStart,
b),wi("ntcpe",a.connectEnd,b))};
g.Ki=function(a,b){if(!Qi(b)){var c=g.D((b||"")+"TIMING_ACTION",void 0),d=Ci(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Pi(b)))if(Ri||(g.ni(wba,new ri(Math.round(c-d._start),b)),Ri=!0),a||b)Si(b);else{c=!0;var e=g.D("TIMING_WAIT",[]);if(e.length)for(var h=0,k=e.length;h<k;++h)if(!(e[h]in d)){c=!1;break}c&&Si(b)}}};
qba=function(){switch(g.xg()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Ti=function(a){if(!Qi(void 0)){var b=g.D("CSI_SERVICE_NAME","youtube");g.D("TIMING_ACTION",void 0)&&b&&(wi("aa",void 0,void 0),ui("ap",1,void 0),ui("yt_fss",a,void 0),Si(void 0))}};
Ei=function(a,b,c){Di(c)["tick_"+a]=b;c||b||g.Zg();return Ai(c)?(c=Bi(c),"_start"==a?Ch("baseline_"+c)||g.xh("latencyActionBaselined",{clientActionNonce:c},b):Ch("tick_"+a+"_"+c)||g.xh("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Fi=function(a,b,c){Di(c)["info_"+a]=b;if(Ai(c))if(a in Ui){var d=Ui[a];g.Ka(xba,d)&&(b=!!b);a in Vi&&(b=Vi[a]+b.toUpperCase());if(Ai(c)){a={};d=d.split(".");for(var e=a,h=0;h<d.length-1;h++)e[d[h]]=e[d[h]]||{},e=e[d[h]];e[d[d.length-1]]=b;c=Bi(c);Dh(a,c)}}else g.Ka(yba,a)||g.xf(Error("Unknown label "+a+" logged with GEL CSI."))};
Wi=function(a){return Math.round(oi.timing.navigationStart+a)};
rba=function(){var a=window.location.protocol,b=oi.getEntriesByType("resource");b=(0,g.Xi)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20181001000107/https://fonts.gstatic.com/s/")});
(b=(0,g.Yi)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(wi("wffs",Wi(b.startTime)),wi("wffe",Wi(b.responseEnd)))};
sba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=oi.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,wi("rsf_"+b,d+Math.round(c.fetchStart)),wi("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&("rc"in vi(void 0)||ui("rc",""),0===c.transferSize))?!0:!1:!1};
Gi=function(a){g.p("ytglobal.timingready_",a,void 0)};
Bi=function(a){var b=Zi(a).nonce;b||(b=Hh(),Zi(a).nonce=b);return b};
Ci=function(a){return Zi(a).tick};
vi=function(a){return Zi(a).info};
Di=function(a){a=Zi(a);"gel"in a||(a.gel={});return a.gel};
Zi=function(a){return g.q("ytcsi."+(a||"")+"data_")||Li(a)};
Li=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
Qi=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
Mi=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
zba=function(a){var b=Ci(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==vi(a).yt_pvis};
Ai=function(a){return ti||g.$f("csi_on_gel")||!!Zi(a).useGel};
Si=function(a){qi();if(!Ai(a)){var b=Ci(a),c=vi(a),d=b._start;for(k in b)if(g.Qa(k,"_")&&g.Aa(b[k])){var e=k.slice(1);if(e in Aba){var h=(0,g.$i)(b[k],function(a){return Math.round(a-d)});
c["all_"+e]=h.join()}delete b[k]}var k=!!c.ap;if(e=g.q("ytglobal.timingReportbuilder_")){if(b=e(b,c,a))aj(b,k),Ni(a)}else{var l=g.D("CSI_SERVICE_NAME","youtube");e={v:2,s:l,action:g.D((a||"")+"TIMING_ACTION",void 0)};h=ui.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var m=window.location.protocol+g.q("ytplayer.config.assets.js");(m=oi.getEntriesByName?oi.getEntriesByName(m)[0]:null)?c.h5jse=Math.round(c.h5jse-m.responseEnd):delete c.h5jse}b.aft=Pi(a);zba(a)&&"youtube"==l&&(ui("yt_lt","hot_bg",a),
l=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-l));for(var r in c)"_"!=r.charAt(0)&&(e[r]=c[r]);b.ps=g.Zg();c={};r=[];for(var w in b)"_"!=w.charAt(0)&&(l=Math.round(b[w]-d),c[w]=l,r.push(w+"."+l));e.rt=r.join(",");(b=g.q("ytdebug.logTiming"))&&b(e,c);aj(e,k,a);g.ni(Bba,new si(c.aft+(h||0),a))}}};
aj=function(a,b,c){if(g.$f("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var h=void 0===h?"":h;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,h)||g.di(a,void 0,void 0,void 0,h)}catch(k){g.di(a,void 0,void 0,void 0,h)}}else g.di(a);Mi(!0,c)};
cj=function(a,b){g.A.call(this);this.H=this.na=a;this.N=b;this.K=!1;this.api={};this.Z=this.W=null;this.J=new g.af;g.zd(this,this.J);this.D={};this.la=this.ha=this.F=this.kb=this.C=null;this.V=!1;this.G=this.R=null;this.Qa={};this.sb=["onReady"];this.ab=null;this.ob=window.NaN;this.Y={};bj(this);this.Wh("WATCH_LATER_VIDEO_ADDED",this.AG.bind(this));this.Wh("WATCH_LATER_VIDEO_REMOVED",this.BG.bind(this));this.Wh("onAdAnnounce",this.Mv.bind(this));this.xb=new Jg(this);g.zd(this,this.xb)};
dj=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
fj=function(a){var b=!0,c=ej(a);c&&a.C&&(a=a.C,b=g.E(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
Cba=function(a){if(!a.pb()&&!a.V){var b=fj(a);if(b&&"html5"==(ej(a)?"html5":null))a.la="html5",a.K||gj(a);else if(hj(a),a.la="html5",b&&a.G)a.na.appendChild(a.G),gj(a);else{a.C.loaded=!0;var c=!1;a.R=function(){c=!0;var b=a.C.clone();g.q("yt.player.Application.create")(a.na,b);gj(a)};
a.V=!0;b?a.R():(g.Of(a.C.assets.js,a.R),g.fi(a.C.assets.css),ij(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
ej=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
gj=function(a){if(!a.pb()){var b=ej(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||Dba(a)):a.ob=g.Cf(function(){gj(a)},50)}};
Dba=function(a){bj(a);a.K=!0;var b=ej(a);b.addEventListener&&(a.W=jj(a,b,"addEventListener"));b.removeEventListener&&(a.Z=jj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=jj(a,b,e))}for(var h in a.D)a.W(h,a.D[h]);dj(a);a.ha&&a.ha(a.api);a.J.oa("onReady",a.api)};
jj=function(a,b,c){var d=b[c];return function(){try{return a.ab=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ab=e,g.zf(e))}}};
bj=function(a){a.K=!1;if(a.Z)for(var b in a.D)a.Z(b,a.D[b]);for(var c in a.Y)g.Ef((0,window.parseInt)(c,10));a.Y={};a.W=null;a.Z=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Wh.bind(a);a.api.removeEventListener=a.VK.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Lx.bind(a);a.api.getPlayerType=a.ey.bind(a);a.api.getCurrentVideoConfig=a.nx.bind(a);a.api.loadNewVideoConfig=a.em.bind(a);a.api.isReady=a.uC.bind(a)};
kj=function(a,b){var c=b;if("string"==typeof b){if(a.Qa[b])return a.Qa[b];c=function(){var a=g.q(b);a&&a.apply(g.n,arguments)};
a.Qa[b]=c}return c?c:null};
Eba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.n[c]=function(c){var d=g.Cf(function(){a.pb()||(a.J.oa(b,c),g.gb(a.Y,String(d)))},0);
g.ib(a.Y,String(d),!0)};
return c};
hj=function(a){(0,g.lj)("dcp");a.cancel();bj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=ej(a);b&&(fj(a)||!ij(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.wc(a.na)};
ij=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.oj=function(a,b){a=g.ta(a)?g.nc(a):a;var c=g.mj+"_"+g.Fa(a),d=g.nj[c];if(d)return d.em(b),d.api;d=new cj(a,c);g.nj[c]=d;g.F("player-added",d.api);g.xd(d,g.u(Fba,d));g.Cf(function(){d.em(b)},0);
return d.api};
Fba=function(a){delete g.nj[a.N]};
g.pj=function(a){if(!a)return null;var b=g.mj+"_"+g.Fa(a),c=g.nj[b];c||(c=new cj(a,b),g.nj[b]=c);return c.api};
g.qj=function(a){return g.pj(window.document.getElementById(a))};
g.sj=function(a,b){var c={};c.key=a;c.value=b;return rj().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.tj=function(a){return rj().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
rj=function(){return uj?window.Promise.resolve(uj):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))uj=b,a(uj);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),rj()};
c.onupgradeneeded=Gba})};
Gba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Mba=function(){vj++;var a=g.rc(),b=new g.Fc(0,0,a.width,a.height);wj("vph",a.height);wj("vpw",a.width);(0,g.lj)("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;xj.start();for(var h=0;h<c;h++){var k=a[h];if(yj(k,b)){var l=Hba(k);l.then(Iba);d.push(l);zj.push(l);k.loadTime||(e=!1)}}e&&wj("yt_eil",1);(0,g.lj)("vpcc");b=g.xe(d).then(Jba);g.ze(b,Kba);b.then(Lba);zj.push(b);return b};
Lba=function(){xj.stop()};
Kba=function(){(0,g.lj)("vpr")};
yj=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.wg(c);if(e in Aj)return!0;if(e in Bj)return!1;var h=window.getComputedStyle(c);if("none"==h.display||"hidden"==h.visibility)return Bj[e]=!0,!1;h=c.getBoundingClientRect();if(!(b.left<=h.left+h.width&&h.left<=b.left+b.width&&b.top<=h.top+h.height&&h.top<=b.top+b.height))return Bj[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Aj[d[c]]=!0;return!0};
Jba=function(a){var b=g.rc();b=new g.Fc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var h=a[d].time;yj(a[d].tB,b)&&c<h&&(c=h)}return c};
Hba=function(a){var b=vj;return new g.se(function(c,d){var e={tB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){vj!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},Cj.push(a))})};
Iba=function(a){xj.start();a=a.time;Dj<a&&(Dj=a,(0,g.lj)("lim",a))};
Nba=function(){(0,g.lj)("vptl",Dj);(0,g.lj)("vpl",Dj)};
Oba=function(){zj.forEach(function(a){a.cancel()});
Dj=zj.length=0;Aj={};Bj={};Cj.forEach(function(a){a.slt=void 0});
Cj.length=0};
g.Ej=function(a,b){g.di("/gen_204?"+a,b)};
Pba=function(a){if(null==a)return[];var b=[];g.$f("ima_prevent_mpu_queries_on_cached_playback")&&0>Fj.indexOf("ad3_module")&&Fj.push("ad3_module");Fj.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Gj=function(){return g.B(g.x("page-container"),"remote-connected")};
Qba=function(){Hj=g.Df(Ij,5E3);var a=g.Jj();a?(a.addEventListener("onReady",Ij),a.addEventListener("onStateChange",Ij)):Kj("unable to init PP monitor")};
Nj=function(a){for(var b in g.nj){var c=g.nj[b];c&&c.cancel()}if(a=a||null){b=g.Jj();var d=!0;c=g.Lj;g.Lj=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Mj="",g.oj("player-api",a)):b.playVideo();a=g.Lg(a);a.loaded=!0}Ij();g.p("ytplayer.config",a,void 0)};
g.Jj=function(){return g.qj("player-api")};
Ij=function(){var a=g.Jj();if(a){var b=g.x("player");b=!b||g.B(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.D("PAGE_NAME"),e=g.Gj();!c||d||e||(Kj("PP playing off watch (paused)"),a.pauseVideo());b&&d?Kj("PP off-screen on watch"):b||d||Kj("PP !off-screen off watch")}};
Kj=function(a){var b=g.D("PAGE_NAME");b&&(a+="("+[b,Mj,g.q("_spf_state.nav-counter")].join()+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.xf(Error(a),"WARNING"))};
Pj=function(){(0,g.lj)("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){(0,g.lj)("cpt");g.F("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?((0,g.lj)("cpt"),g.F("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){(0,g.lj)("cpt");
g.F("on_cpt_tick",(new Date).getTime())},0);
Rba();g.D("CSI_VIEWPORT")&&(Oj=Mba(),Oj.then(function(a){(0,g.lj)("vpl",a);Oj=null},function(){}))};
Rba=function(){Qj("init");var a=g.D("PAGE_NAME",void 0);a&&Qj("init-"+a)};
Qj=function(a){g.Yf()?Rj.push(g.Uf(g.u(g.Mf,a),0)):g.F(a)};
Sj=function(){g.Wf(Rj);Rj.length=0;Oba();Oj&&(Oj.cancel(),Oj=null);var a=g.D("PAGE_NAME",void 0);a&&g.Mf("dispose-"+a);g.Mf("dispose")};
Sba=function(){Pj()};
Tba=function(){g.D("TIMING_REPORT_ON_UNLOAD")&&g.Ki(!0);Ti("u");g.Mh("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Uh();g.yh();g.Tg();Sj();g.Mf("pageunload")};
Tj=function(){hh()};
Uj=function(){window.yt_spf_loaded_history=!0;hh()};
Zj=function(){Vj=1;Wj=Xj=0;g.D("TIMING_REPORT_ON_UNLOAD")&&g.Ki(!0);g.$f("warm_load_nav_start_web")?(Ti("n"),Ni(),Gi(!1),g.vf("TIMING_AFT_KEYS",[]),ui("yt_lt","warm"),g.vf("TIMING_ACTION",""),g.vf("TIMING_WAIT",[]),qi(),xi("n")):(Ti("n"),Ni(),xi("n"));Oi("nr");Yj(Uba);Uh();g.Mf("navigate")};
dk=function(a){a=a.detail.part||a.detail.partial;(0,g.lj)("nc"+Xj);++Xj;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.lj)("bc");else{var b=1==Vj;Vj=2;b?(Yj(Vba),ak()):Yj(Wba);if(b=a&&a.data&&a.data.swfcfg)bk(a.timing,b.args),ck(b)}};
ek=function(){(0,g.lj)("np"+Wj);++Wj};
fk=function(a){a=a.detail.response;var b=1==Vj;Vj=3;b&&(Yj(Xba),ak());if(b=a.data&&a.data.swfcfg)bk(a.timing,b.args),ck(b)};
jk=function(a){(0,g.lj)("nd");a=a.detail.response;g.gk=a.cacheKey;a=a.timing;var b=window._spf_state;g.hk.navigationCount=b&&b["nav-counter"]||0;g.$f("warm_load_nav_start_web")?(0,g.lj)("srt",a.responseStart):(xi("ne",a.responseStart),wj("srt",Math.max(0,a.responseStart-a.navigationStart)));wj("yt_lt",a.spfCached?"hot":"warm");(0,g.lj)("pfs",a.fetchStart);(0,g.lj)("pfrs",a.responseStart);"redirectStart"in a&&Yba(a);Yj(ik);window.document.getElementById("content").style.height="";Pj();Vj=0};
kk=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.xf(a)};
lk=function(a){g.Ej(g.Wc({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
$ba=function(){Zba();window.yt_spf_loaded_history=!1};
aca=function(){};
ak=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Sj();a=g.D("PREVIOUS_ACTION");for(var b in g.uf)delete g.uf[b];g.vf("PREVIOUS_ACTION",a);g.vf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);if((b=g.Jj())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Mj=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),Mj="recovered"):Mj="missing2"}else Mj="missing";Ij()};
ck=function(a){"cfg"in Ci(void 0)||(0,g.lj)("cfg");Nj(a)};
Yj=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Vf(mk);mk=g.Uf(function(){var c=a[0],d=a[1],e=a[2];b.className="";var h=b.style;h.transitionDuration=h.webkitTransitionDuration=c+"ms";h.width=d+"%";g.Ef(nk);nk=g.Cf(function(){b.className=e},c)},0)};
Zba=function(){var a=ik[0]+50;g.Ef(nk);nk=g.Cf(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
bk=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Pba(b));g.D("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Ej(g.Wc(c)))};
pk=function(){return"granted"!=window.Notification.permission?window.Promise.resolve():ok().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})["catch"](function(){})};
rk=function(){qk({type:"notifications_register",data:g.D("ID_TOKEN")})};
ok=function(){return window.navigator.serviceWorker.getRegistration(String(Zf("service_worker_scope")||""))};
sk=function(a){return!(!a||!a.pushManager)};
qk=function(a){ok().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
bca=function(){if(!g.D("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(Zf("service_worker_push_force_notification_prompt_tag")||"");return a?g.tj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
fca=function(){var a=void 0===a?!1:a;return(window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification?ok().then(sk):window.Promise.resolve(!1)).then(function(b){if(!b)return window.Promise.resolve();b=pk().then(function(){qk({type:"notifications_check_registration",data:g.D("ID_TOKEN")})});
return"default"!=window.Notification.permission?b:b.then(function(){return cca(a)}).then(function(a){if(a)return dca(),eca().then(function(){})})})};
cca=function(a){return g.D("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.D("LOGGED_IN",void 0)&&(void 0===a?0:a)?bca().then(function(a){if(a)return!0;a=[gca(),hca()];g.D("LOGGED_IN",void 0)||a.push(ica());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
ica=function(){var a=g.ag("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.tj("WatchCount").then(function(b){return b>=a})};
eca=function(){var a=arguments;g.$f("service_worker_push_prompt_modal_enable")&&jca();return window.Notification.requestPermission().then(function(a){tk();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return pk().then(function(){g.sj("NotificationsDisabled",!1);rk();return window.Promise.resolve(!0)});
"denied"==a&&rk();return window.Promise.resolve(!1)})["catch"](function(){tk();
return window.Promise.reject.apply(window.Promise,a instanceof Array?a:baa(g.oa(a)))})};
dca=function(){g.tj("PromptCount").then(function(a){return g.sj("PromptCount",a+1)}).then(function(){return g.sj("PromptTime",(0,g.fd)())}).then(function(){var a=String(Zf("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.tj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.sj("PromptTags",JSON.stringify(c))})})};
gca=function(){return-1==g.ag("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.tj("PromptCount").then(function(a){a||(a=0);return window.Promise.resolve(a<g.ag("service_worker_push_prompt_cap"))})};
hca=function(){var a=g.ag("service_worker_push_prompt_delay_microseconds");return a?g.tj("PromptTime").then(function(b){return window.Promise.resolve((0,g.fd)()-a>(b||0))}):window.Promise.resolve(!0)};
kca=function(){uk||tk()};
vk=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
jca=function(){var a=g.x("yt-push-prompt-modal-bg");uk=g.$f("service_worker_push_prompt_modal_ignore_click");a?vk(a):(a=g.uc("div",{id:"yt-push-prompt-modal-bg"}),vk(a),window.document.body.appendChild(a),g.Gg(window.document,"click",kca))};
tk=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.xc(a)};
lca=function(a){return sk(a)?fca():window.Promise.resolve()};
nca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(mca)})};
pca=function(){var a="/sw.js",b=g.D("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=wk(a);g.$f("service_worker_push_enabled")&&a.then(oca).then(lca)};
oca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
mca=function(a){a&&wk("/sw.js?0",a.scope)};
wk=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(Zf("service_worker_scope")||"")||"/"})};
xk=function(){g.Vh.call(this,"www/base");this.D=0};
zk=function(a){(a=a.detail.name)&&Yh(a)};
g.aa=[];da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)Ak=Object.setPrototypeOf;else{var Bk;a:{var qca={Lv:!0},Ck={};try{Ck.__proto__=qca;Bk=Ck.Lv;break a}catch(a){}Bk=!1}Ak=Bk?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ea=Ak,ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,aaa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
pa("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=qa(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),h=a.length;0<h&&0<e;)if(b[--e]!=a[--h])return!1;return 0>=h}});
var rca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
pa("Object.assign",function(a){return a||rca});
pa("WeakMap",function(a){function b(a){this.hb=(h+=Math.random()+1).toString();if(a){ha();la();a=g.oa(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){ra(a,e)||ja(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(r){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var h=0;b.prototype.set=function(a,b){c(a);if(!ra(a,e))throw Error("WeakMap key fail: "+a);a[e][this.hb]=b;return this};
b.prototype.get=function(a){return ra(a,e)?a[e][this.hb]:void 0};
b.prototype.has=function(a){return ra(a,e)&&ra(a[e],this.hb)};
b.prototype["delete"]=function(a){return ra(a,e)&&ra(a[e],this.hb)?delete a[e][this.hb]:!1};
return b});
pa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return na(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?h.has(b)?c=h.get(b):(c=""+ ++k,h.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&ra(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,jc:l}}return{id:c,list:d,index:-1,jc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.oa(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.oa([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(z){return!1}}())return a;
ha();la();var h=new window.WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.jc?c.jc.value=b:(c.jc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.jc),this.F.previous.next=c.jc,this.F.previous=c.jc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.jc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.jc.previous.next=a.jc.next,a.jc.next.previous=a.jc.previous,a.jc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).jc};
e.prototype.get=function(a){return(a=d(this,a).jc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
pa("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.oa(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.oa([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),h=e.next();if(h.done||h.value[0]!=b||h.value[1]!=b)return!1;h=e.next();return h.done||h.value[0]==b||4!=h.value[0].x||h.value[1]!=h.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
ha();la();b.prototype.add=function(a){a=0===a?0:a;this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
pa("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
pa("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==qa(this,a,"includes").indexOf(a,c||0)}});
var sca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=da(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
pa("Reflect.construct",function(){return sca});
pa("Promise",function(a){function b(a){this.F=0;this.D=void 0;this.C=[];var b=this.H();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.K()})};
var e=ia.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.K=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(r){this.H(r)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.K(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(m){this.G(m);return}"function"==typeof b?this.la(b,a):this.K(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.K=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.F)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.F);this.F=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var a=0;a<this.C.length;++a)h.F(this.C[a]);this.C=null}};
var h=new c;b.prototype.V=function(a){var b=this.H();a.mi(b.resolve,b.reject)};
b.prototype.la=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(r){c.reject(r)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(T){h(T)}}:b}
var e,h,k=new b(function(a,b){e=a;h=b});
this.mi(d(a,e),d(c,h));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.mi=function(a,b){function c(){switch(d.F){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.F);}}
var d=this;null==this.C?h.F(c):this.C.push(c)};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.oa(a),h=e.next();!h.done;h=e.next())d(h.value).mi(b,c)})};
b.all=function(a){var c=g.oa(a),e=c.next();return e.done?d([]):new b(function(a,b){function h(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).mi(h(k.length-1),b),e=c.next();while(!e.done)})};
return b});
pa("Array.from",function(a){return a?a:function(a,c,d){la();c=null!=c?c:function(a){return a};
var b=[],h=a[window.Symbol.iterator];if("function"==typeof h){a=h.call(a);for(var k=0;!(h=a.next()).done;)b.push(c.call(d,h.value,k++))}else for(h=a.length,k=0;k<h;k++)b.push(c.call(d,a[k],k));return b}});
pa("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!(0,window.isNaN)(a)&&window.Infinity!==a&&-window.Infinity!==a}});
pa("Number.parseInt",function(a){return a||window.parseInt});
g.Dk=g.Dk||{};g.n=this;Ea="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.fd=Date.now||function(){return+new Date};g.Mc=window.document;g.Ek=window;g.v(g.Ga,Error);g.Ga.prototype.name="CustomError";g.Ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.ta(a))return g.ta(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.tca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.ta(a))return g.ta(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)};
g.Xi=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],h=0,k=g.ta(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[h++]=m)}return e};
g.$i=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),h=g.ta(a)?a.split(""):a,k=0;k<d;k++)k in h&&(e[k]=b.call(c,h[k],k,a));
return e};
g.Yi=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.y)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Fk=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return!0;
return!1};
g.Gk=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&!b.call(c,e[h],h,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Wa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.Hk=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var Ik=g.n.navigator;if(Ik){var Jk=Ik.userAgent;if(Jk){g.$a=Jk;break a}}g.$a=""};var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.tb[" "]=g.wa;var Pk,maa,Tk;g.Cd=g.ab("Opera");g.C=g.nb();g.Kk=g.ab("Edge");g.Lk=g.Kk||g.C;g.Mk=g.ab("Gecko")&&!(-1!=g.$a.toLowerCase().indexOf("webkit")&&!g.ab("Edge"))&&!(g.ab("Trident")||g.ab("MSIE"))&&!g.ab("Edge");g.Bd=-1!=g.$a.toLowerCase().indexOf("webkit")&&!g.ab("Edge");g.Nk=g.ab("Macintosh");g.Ok=g.ab("Windows");g.uca=g.ab("Linux")||g.ab("CrOS");g.vca=g.ab("Android");g.wca=rb();g.xca=g.ab("iPad");g.yca=g.ab("iPod");g.zca=g.sb();
a:{var Qk="",Rk=function(){var a=g.$a;if(g.Mk)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Kk)return/Edge\/([\d\.]+)/.exec(a);if(g.C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Bd)return/WebKit\/(\S+)/.exec(a);if(g.Cd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Rk&&(Qk=Rk?Rk[1]:"");if(g.C){var Sk=vb();if(null!=Sk&&Sk>(0,window.parseFloat)(Qk)){Pk=String(Sk);break a}}Pk=Qk}g.xb=Pk;maa={};var Uk=g.n.document;Tk=Uk&&g.C?vb()||("CSS1Compat"==Uk.compatMode?(0,window.parseInt)(g.xb,10):5):void 0;g.zb=Tk;g.Vk=g.ab("Firefox");g.Wk=rb()||g.ab("iPod");g.Xk=g.ab("iPad");g.Aca=g.qb();g.Yk=g.ob();g.Zk=g.pb()&&!g.sb();var Db,Cb;Db=null;g.Fb=null;Cb=null;g.Kb="function"==typeof window.Uint8Array;g.Gb.prototype.Ae=function(){Hb(this);return this.Vb};
g.Gb.prototype.W=g.Kb?function(){var a=window.Uint8Array.prototype.toJSON;window.Uint8Array.prototype.toJSON=function(){return Eb(this)};
try{return JSON.stringify(this.Vb&&this.Ae(),Ib)}finally{window.Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.Vb&&this.Ae(),Ib)};
g.Gb.prototype.toString=function(){Hb(this);return this.Vb.toString()};
g.Gb.prototype.clone=function(){return new this.constructor(Jb(this.Ae()))};g.f=g.Lb.prototype;g.f.isEnabled=function(){return window.navigator.cookieEnabled};
g.f.set=function(a,b,c,d,e,h){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.sa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";h=h?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.fd)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+h};
g.f.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,h;e<d.length;e++){h=(0,g.Wa)(d[e]);if(0==h.lastIndexOf(c,0))return h.substr(c.length);if(h==a)return""}return b};
g.f.remove=function(a,b,c){var d=g.sa(this.get(a));this.set(a,"",0,b,c);return d};
g.f.Hc=function(){return g.Mb(this).keys};
g.f.Eb=g.ca(1);g.f.isEmpty=function(){return!this.C.cookie};
g.f.Kb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.f.Md=g.ca(3);g.f.clear=function(){for(var a=g.Mb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.qh=new g.Lb("undefined"==typeof window.document?null:window.document);g.qh.F=3950;g.$k=g.Ob(null);var oaa;oaa=!g.C||g.Ab(9);g.Bca=!g.Mk&&!g.C||g.C&&g.Ab(9)||g.Mk&&g.yb("1.9.1");g.al=g.C&&!g.yb("9");g.Cca=g.C||g.Cd||g.Bd;g.Dca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Eca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.bl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.Rb.prototype.Ud=!0;g.Rb.prototype.fd=function(){return this.C};
g.Rb.prototype.Jl=!0;g.Rb.prototype.vf=function(){return 1};
var Tb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Qb={};g.Ub("about:blank");g.Yb.prototype.Ud=!0;g.Xb={};g.Yb.prototype.fd=function(){return this.C};
g.cl=g.Zb("");g.dl=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.el=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.ac.prototype.Ud=!0;g.$b={};g.ac.prototype.fd=function(){return this.C};
g.fl=g.bc("");g.dc.prototype.Jl=!0;g.dc.prototype.vf=function(){return this.F};
g.dc.prototype.Ud=!0;g.dc.prototype.fd=function(){return this.C};
var cc={};g.fc("<!DOCTYPE html>",0);g.gl=g.fc("",0);g.hl=g.fc("<br>",0);g.Fca=g.Pb(function(){var a=window.document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});g.f=g.jc.prototype;g.f.clone=function(){return new g.jc(this.x,this.y)};
g.f.equals=function(a){return a instanceof g.jc&&g.kc(this,a)};
g.f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.f.translate=function(a,b){a instanceof g.jc?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.va(b)&&(this.y+=b));return this};
g.f.scale=function(a,b){var c=g.va(b)?b:a;this.x*=a;this.y*=c;return this};g.f=g.mc.prototype;g.f.clone=function(){return new g.mc(this.width,this.height)};
g.f.Yv=function(){return this.width*this.height};
g.f.aspectRatio=function(){return this.width/this.height};
g.f.isEmpty=function(){return!this.Yv()};
g.f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.scale=function(a,b){var c=g.va(b)?b:a;this.width*=a;this.height*=c;return this};var oc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Gca;Gca={ZO:"allow-forms",aP:"allow-modals",bP:"allow-orientation-lock",cP:"allow-pointer-lock",dP:"allow-popups",eP:"allow-popups-to-escape-sandbox",fP:"allow-presentation",gP:"allow-same-origin",hP:"allow-scripts",iP:"allow-top-navigation",jP:"allow-top-navigation-by-user-activation"};g.Hca=g.Pb(function(){return g.Cc(Gca)});g.f=g.Fc.prototype;g.f.clone=function(){return new g.Fc(this.left,this.top,this.width,this.height)};
g.f.contains=function(a){return a instanceof g.jc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.translate=function(a,b){a instanceof g.jc?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.va(b)&&(this.top+=b));return this};
g.f.scale=function(a,b){var c=g.va(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.il=g.Mk?"MozUserSelect":g.Bd||g.Kk?"WebkitUserSelect":null;var Kc=g.Jc(window),Lc=Kc&&window.parent||window;var qaa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Ica=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;$c.prototype.getUrl=function(a,b,c,d){a=a+"//"+b+c;var e=saa(this)-c.length-d.length;if(0>e)return"";this.C.sort(function(a,b){return a-b});
c=null;b="";for(var h=0;h<this.C.length;h++)for(var k=this.C[h],l=this.F[k],m=0;m<l.length;m++){if(!e){c=null==c?k:c;break}var r=cd(l[m],this.D,",$");if(r){r=b+r;if(e>=r.length){e-=r.length;a+=r;b=this.D;break}else this.H&&(b=e,r[b-1]==this.D&&--b,a+=r.substr(0,b),b=this.D,e=0);c=null==c?k:c}}h="";this.G&&null!=c&&(h=b+this.G+"="+c);return a+h+d};var jl=null;var ld=g.n.performance,Jca=!!(ld&&ld.mark&&ld.measure&&ld.clearMarks),jd=g.Pb(function(){var a;if(a=Jca){var b;if(null===jl){jl="";try{a="";try{a=g.n.top.location.hash}catch(c){a=g.n.location.hash}a&&(jl=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=jl;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
kd.prototype.disable=function(){this.C=!1;this.events!=this.F.google_js_reporting_queue&&(jd()&&g.y(this.events,g.md),this.events.length=0)};
kd.prototype.start=function(a,b){if(!this.C)return null;var c=hd()||gd();c=new taa(a,b,c);var d="goog_"+c.uniqueId+"_start";ld&&jd()&&ld.mark(d);return c};
kd.prototype.end=function(a){if(this.C&&g.va(a.value)){var b=hd()||gd();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";ld&&jd()&&ld.mark(b);this.C&&this.events.push(a)}};qd.prototype.F=function(a,b,c,d,e){e=e||"jserror";try{var h=new $c;h.H=!0;dd(h,1,"context",a);b.error&&b.meta&&b.id||(b=g.td(b));b.msg&&dd(h,2,"msg",b.msg.substring(0,512));b.file&&dd(h,3,"file",b.file);0<b.line&&dd(h,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(R){}b=[k];h.C.push(5);h.F[5]=b;var l=g.Zc(),m=new Yc(g.n.location.href,g.n,!1);b=null;var r=l.length-1;for(d=r;0<=d;--d){var w=l[d];!b&&Ica.test(w.url)&&(b=w);if(w.url&&!w.Bq){m=w;break}}w=null;var z=l.length&&l[r].url;0!=m.depth&&
z&&(w=l[r]);var I=new raa(m,w);I.F&&dd(h,6,"top",I.F.url||"");dd(h,7,"url",I.C.url||"");g.ed(this.D,e,h,c)}catch(R){try{g.ed(this.D,e,{context:"ecmserr",rctx:a,msg:g.sd(R),url:I&&I.C.url},c)}catch(ba){}}return!0};
g.fa(rd,Oc);var id,nd;id=g.Nc();nd=new kd;g.od=new function(){var a=void 0===a?g.Ek:a;this.G="http:"===a.location.protocol?"http:":"https:";this.F="pagead2.googlesyndication.com";this.D="/pagead/gen_204?id=";this.C=.01};
g.kl=new qd;"complete"==id.document.readyState?id.google_measure_js_timing||nd.disable():nd.C&&Dc(id,"load",function(){id.google_measure_js_timing||nd.disable()});var ll;ll={};g.ml=(ll[8]="google_prev_ad_formats_by_region",ll[9]="google_prev_ad_slotnames_by_region",ll);g.nl=(new Date).getTime();g.A.prototype.Cc=!1;g.A.prototype.pb=function(){return this.Cc};
g.A.prototype.dispose=function(){this.Cc||(this.Cc=!0,this.X())};
g.A.prototype.X=function(){if(this.Yb)for(;this.Yb.length;)this.Yb.shift()()};g.Ad.prototype.stopPropagation=function(){this.F=!0};
g.Ad.prototype.preventDefault=function(){this.zt=!1};var Vd,Lca,zaa;g.Kca=!g.C||g.Ab(9);Vd=!g.C||g.Ab(9);Lca=g.C&&!g.yb("9");zaa=function(){if(!g.n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.n.addEventListener("test",g.wa,b),g.n.removeEventListener("test",g.wa,b)}catch(c){}return a}();g.ol=Dd("TransitionEnd");
g.pl={KP:"click",jW:"rightclick",sQ:"dblclick",Sg:"mousedown",Tg:"mouseup",cU:"mouseover",bU:"mouseout",aU:"mousemove",XT:"mouseenter",ZT:"mouseleave",Rg:"mousecancel",rW:"selectionchange",sW:"selectstart",cZ:"wheel",cS:"keypress",bS:"keydown",dS:"keyup",DP:"blur",iR:"focus",tQ:"deactivate",jR:"focusin",kR:"focusout",HP:"change",cW:"reset",qW:"select",UW:"submit",OR:"input",JV:"propertychange",RQ:"dragstart",LQ:"drag",NQ:"dragenter",QQ:"dragover",OQ:"dragleave",DROP:"drop",MQ:"dragend",fX:"touchstart",
eX:"touchmove",dX:"touchend",cX:"touchcancel",CP:"beforeunload",fQ:"consolemessage",iQ:"contextmenu",xQ:"devicechange",yQ:"devicemotion",zQ:"deviceorientation",DQ:"DOMContentLoaded",ERROR:"error",DR:"help",LOAD:"load",CT:"losecapture",GU:"orientationchange",OV:"readystatechange",eW:"resize",mW:"scroll",rY:"unload",FP:"canplay",GP:"canplaythrough",SQ:"durationchange",VQ:"emptied",ENDED:"ended",xT:"loadeddata",yT:"loadedmetadata",PAUSE:"pause",PLAY:"play",PLAYING:"playing",MV:"ratechange",oW:"seeked",
pW:"seeking",QW:"stalled",WW:"suspend",aX:"timeupdate",CY:"volumechange",DY:"waiting",NW:"sourceopen",MW:"sourceended",LW:"sourceclosed",CO:"abort",UPDATE:"update",vY:"updatestart",tY:"updateend",AR:"hashchange",KU:"pagehide",LU:"pageshow",FV:"popstate",lQ:"copy",TU:"paste",pQ:"cut",wP:"beforecopy",xP:"beforecut",AP:"beforepaste",FU:"online",AU:"offline",MESSAGE:"message",eQ:"connect",QR:"install",DO:"activate",gR:"fetch",mR:"foreignfetch",PT:"messageerror",RW:"statechange",uY:"updatefound",kQ:"controllerchange",
nP:Dd("AnimationStart"),lP:Dd("AnimationEnd"),mP:Dd("AnimationIteration"),gX:g.ol,wV:"pointerdown",CV:"pointerup",vV:"pointercancel",zV:"pointermove",BV:"pointerover",AV:"pointerout",xV:"pointerenter",yV:"pointerleave",uR:"gotpointercapture",ET:"lostpointercapture",dU:"MSGestureChange",eU:"MSGestureEnd",fU:"MSGestureHold",gU:"MSGestureStart",hU:"MSGestureTap",iU:"MSGotPointerCapture",jU:"MSInertiaStart",kU:"MSLostPointerCapture",lU:"MSPointerCancel",mU:"MSPointerDown",nU:"MSPointerEnter",oU:"MSPointerHover",
pU:"MSPointerLeave",qU:"MSPointerMove",rU:"MSPointerOut",sU:"MSPointerOver",tU:"MSPointerUp",TEXT:"text",ZW:g.C?"textinput":"textInput",bQ:"compositionstart",cQ:"compositionupdate",aQ:"compositionend",yP:"beforeinput",YQ:"exit",vT:"loadabort",wT:"loadcommit",zT:"loadredirect",AT:"loadstart",BT:"loadstop",fW:"responsive",JW:"sizechanged",sY:"unresponsive",yY:"visibilitychange",TW:"storage",IQ:"DOMSubtreeModified",EQ:"DOMNodeInserted",GQ:"DOMNodeRemoved",HQ:"DOMNodeRemovedFromDocument",FQ:"DOMNodeInsertedIntoDocument",
BQ:"DOMAttrModified",CQ:"DOMCharacterDataModified",BP:"beforeprint",YO:"afterprint",zP:"beforeinstallprompt",rP:"appinstalled"};g.v(g.Ed,g.Ad);var Mca={2:"touch",3:"pen",4:"mouse"};
g.Ed.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Mk&&(g.ub(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Nk?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.ta(a.pointerType)?a.pointerType:Mca[a.pointerType]||"";this.state=a.state;this.lc=a;a.defaultPrevented&&
this.preventDefault()};
g.Ed.prototype.stopPropagation=function(){g.Ed.M.stopPropagation.call(this);this.lc.stopPropagation?this.lc.stopPropagation():this.lc.cancelBubble=!0};
g.Ed.prototype.preventDefault=function(){g.Ed.M.preventDefault.call(this);var a=this.lc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Lca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Fd="closure_listenable_"+(1E6*Math.random()|0),waa=0;g.f=g.Jd.prototype;g.f.add=function(a,b,c,d,e){var h=a.toString();a=this.listeners[h];a||(a=this.listeners[h]=[],this.C++);var k=Ld(a,b,d,e);-1<k?(b=a[k],c||(b.li=!1)):(b=new xaa(b,this.src,h,!!d,e),b.li=c,a.push(b));return b};
g.f.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ld(e,b,c,d);return-1<b?(Id(e[b]),g.Ma(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.f.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Id(d[e]);delete this.listeners[c];this.C--}return b};
g.f.lg=g.ca(5);g.f.rf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Ld(a,b,c,d));return-1<e?a[e]:null};
g.f.hasListener=function(a,b){var c=g.sa(a),d=c?a.toString():"",e=g.sa(b);return g.cb(this.listeners,function(a){for(var h=0;h<a.length;++h)if(!(c&&a[h].type!=d||e&&a[h].capture!=b))return!0;return!1})};var Sd="closure_lm_"+(1E6*Math.random()|0),Yd={},Ud=0,ae="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.be,g.A);g.be.prototype[Fd]=!0;g.f=g.be.prototype;g.f.Mi=function(){return this.ym};
g.f.Ih=g.ca(6);g.f.addEventListener=function(a,b,c,d){g.Nd(this,a,b,c,d)};
g.f.removeEventListener=function(a,b,c,d){g.Wd(this,a,b,c,d)};
g.f.dispatchEvent=function(a){var b=this.Mi();if(b){var c=[];for(var d=1;b;b=b.Mi())c.push(b),++d}b=this.Nv;d=a.type||a;if(g.ta(a))a=new g.Ad(a,b);else if(a instanceof g.Ad)a.target=a.target||b;else{var e=a;a=new g.Ad(d,b);g.mb(a,e)}e=!0;if(c)for(var h=c.length-1;!a.F&&0<=h;h--){var k=a.currentTarget=c[h];e=ce(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=ce(k,d,!0,a)&&e,a.F||(e=ce(k,d,!1,a)&&e));if(c)for(h=0;!a.F&&h<c.length;h++)k=a.currentTarget=c[h],e=ce(k,d,!1,a)&&e;return e};
g.f.X=function(){g.be.M.X.call(this);this.removeAllListeners();this.ym=null};
g.f.O=function(a,b,c,d){return this.xd.add(String(a),b,!1,c,d)};
g.f.Qe=function(a,b,c,d){return this.xd.add(String(a),b,!0,c,d)};
g.f.Va=function(a,b,c,d){return this.xd.remove(String(a),b,c,d)};
g.f.removeAllListeners=function(a){return this.xd?this.xd.removeAll(a):0};
g.f.lg=g.ca(4);g.f.rf=function(a,b,c,d){return this.xd.rf(String(a),b,c,d)};
g.f.hasListener=function(a,b){return this.xd.hasListener(g.sa(a)?String(a):void 0,b)};de.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var ne;var oe=new de(function(){return new he},function(a){a.reset()});
ge.prototype.add=function(a,b){var c=oe.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
ge.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
he.prototype.set=function(a,b){this.kc=a;this.scope=b;this.next=null};
he.prototype.reset=function(){this.next=this.scope=this.kc=null};var ie,je=!1,ke=new ge;te.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var ue=new de(function(){return new te},function(a){a.reset()});
g.se.prototype.then=function(a,b,c){return ye(this,g.Ca(a)?a:null,g.Ca(b)?b:null,c)};
g.pe(g.se);g.se.prototype.cancel=function(a){0==this.C&&le(function(){var b=new g.Ge(a);Ae(this,b)},this)};
g.se.prototype.W=function(a){this.C=0;g.re(this,2,a)};
g.se.prototype.N=function(a){this.C=0;g.re(this,3,a)};
g.se.prototype.J=function(){for(var a;a=Ce(this);)De(this,a,this.C,this.R);this.K=!1};
var Ie=fe;g.v(g.Ge,g.Ga);g.Ge.prototype.name="cancel";g.v(g.Le,g.A);g.f=g.Le.prototype;g.f.hb=0;g.f.X=function(){g.Le.M.X.call(this);this.stop();delete this.C;delete this.F};
g.f.start=function(a){this.stop();this.hb=g.Je(this.Zb,g.sa(a)?a:this.D)};
g.f.stop=function(){this.isActive()&&g.Ke(this.hb);this.hb=0};
g.f.mf=g.ca(7);g.f.isActive=function(){return 0!=this.hb};
g.f.np=function(){this.hb=0;this.C&&this.C.call(this.F)};g.v(Me,Gaa);Me.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Me.prototype.update=function(a,b){if(null!=a){g.sa(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.K,h=this.D;d<b;){if(0==h)for(;d<=c;)Ne(this,a,d),d+=this.F;if(g.ta(a))for(;d<b;){if(e[h]=a.charCodeAt(d),++h,++d,h==this.F){Ne(this,e);h=0;break}}else for(;d<b;)if(e[h]=a[d],++h,++d,h==this.F){Ne(this,e);h=0;break}}this.D=h;this.H+=b}};
Me.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.K[c]=b&255,b/=256;Ne(this,this.K);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.Qe="StopIteration"in g.n?g.n.StopIteration:{message:"StopIteration",stack:""};g.Pe.prototype.next=function(){throw g.Qe;};
g.Pe.prototype.cd=function(){return this};g.f=g.Ue.prototype;g.f.Kb=function(){return this.D};
g.f.Eb=g.ca(0);g.f.Hc=function(){g.We(this);return this.C.concat()};
g.f.Md=g.ca(2);g.f.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Kb())return!1;var c=b||Iaa;g.We(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.f.isEmpty=function(){return 0==this.D};
g.f.clear=function(){this.F={};this.We=this.D=this.C.length=0};
g.f.remove=function(a){return g.Ve(this.F,a)?(delete this.F[a],this.D--,this.We++,this.C.length>2*this.D&&g.We(this),!0):!1};
g.f.get=function(a,b){return g.Ve(this.F,a)?this.F[a]:b};
g.f.set=function(a,b){g.Ve(this.F,a)||(this.D++,this.C.push(a),this.We++);this.F[a]=b};
g.f.forEach=function(a,b){for(var c=this.Hc(),d=0;d<c.length;d++){var e=c[d],h=this.get(e);a.call(b,h,e,this)}};
g.f.clone=function(){return new g.Ue(this)};
g.f.cd=function(a){g.We(this);var b=0,c=this.We,d=this,e=new g.Pe;e.next=function(){if(c!=d.We)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Qe;var e=d.C[b++];return a?e:d.F[e]};
return e};var $e={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Kaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.af,g.A);g.f=g.af.prototype;g.f.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.f.sd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.wa):(c&&g.Na(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.f.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,h=arguments.length;e<h;e++)d[e-1]=arguments[e];if(this.K)for(e=0;e<c.length;e++){var k=c[e];Laa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,h=c.length;e<h;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.sd(c)}}return 0!=e}return!1};
g.f.clear=function(a){if(a){var b=this.F[a];b&&((0,g.y)(b,this.sd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.f.Kb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Kb(b);return a};
g.f.X=function(){g.af.M.X.call(this);this.clear();this.D.length=0};g.cf.prototype.set=function(a,b){g.sa(b)?this.C.set(a,g.Ye(b)):this.C.remove(a)};
g.cf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.cf.prototype.remove=function(a){this.C.remove(a)};g.v(df,g.cf);df.prototype.set=function(a,b){df.M.set.call(this,a,ff(b))};
df.prototype.F=function(a){a=df.M.get.call(this,a);if(!g.sa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
df.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.sa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.gf,df);g.gf.prototype.set=function(a,b,c){if(b=ff(b)){if(c){if(c<(0,g.fd)()){g.gf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.fd)()}g.gf.M.set.call(this,a,b)};
g.gf.prototype.F=function(a,b){var c=g.gf.M.F.call(this,a);if(c)if(!b&&g.hf(c))g.gf.prototype.remove.call(this,a);else return c};g.v(jf,Maa);jf.prototype.Kb=function(){var a=0;g.Se(this.cd(!0),function(){a++});
return a};
jf.prototype.clear=function(){var a=Haa(this.cd(!0)),b=this;(0,g.y)(a,function(a){b.remove(a)})};g.v(g.kf,jf);g.f=g.kf.prototype;g.f.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.f.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.f.get=function(a){a=this.C.getItem(a);if(!g.ta(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeItem(a)};
g.f.Kb=function(){return this.C.length};
g.f.cd=function(a){var b=0,c=this.C,d=new g.Pe;d.next=function(){if(b>=c.length)throw g.Qe;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.ta(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){this.C.clear()};
g.f.key=function(a){return this.C.key(a)};g.v(g.lf,g.kf);g.v(nf,jf);var Naa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},mf=null;g.f=nf.prototype;g.f.isAvailable=function(){return!!this.C};
g.f.set=function(a,b){this.C.setAttribute(of(a),b);pf(this)};
g.f.get=function(a){a=this.C.getAttribute(of(a));if(!g.ta(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeAttribute(of(a));pf(this)};
g.f.Kb=function(){return qf(this).attributes.length};
g.f.cd=function(a){var b=0,c=qf(this).attributes,d=new g.Pe;d.next=function(){if(b>=c.length)throw g.Qe;var d=c[b++];if(a)return(0,window.decodeURIComponent)(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!g.ta(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){for(var a=qf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);pf(this)};g.v(rf,jf);rf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
rf.prototype.get=function(a){return this.F.get(this.C+a)};
rf.prototype.remove=function(a){this.F.remove(this.C+a)};
rf.prototype.cd=function(a){var b=this.F.cd(!0),c=this,d=new g.Pe;d.next=function(){for(var d=b.next();d.substr(0,c.C.length)!=c.C;)d=b.next();return a?d.substr(c.C.length):c.F.get(d)};
return d};g.Zg=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.ql="Microsoft Internet Explorer"==window.navigator.appName;g.uf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.uf,void 0);var Bf={};var Nca=g.q("ytPubsubPubsubInstance")||new g.af;g.af.prototype.subscribe=g.af.prototype.subscribe;g.af.prototype.unsubscribeByKey=g.af.prototype.sd;g.af.prototype.publish=g.af.prototype.oa;g.af.prototype.clear=g.af.prototype.clear;g.p("ytPubsubPubsubInstance",Nca,void 0);var Hf=g.q("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",Hf,void 0);var Jf=g.q("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",Jf,void 0);var If=g.q("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",If,void 0);var Paa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Qaa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.Qf.prototype.initialize=function(a,b,c,d){b?(this.F=!0,g.Of(b,function(){this.F=!1;window.botguard?Rf(this,c,d):(g.Pf(b),g.xf(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this))):a&&(eval(a),window.botguard?Rf(this,c,d):g.xf(Error("Unable to load Botguard from JS"),"WARNING"))};
g.Qf.prototype.Oe=function(){return null!==this.C};
g.Qf.prototype.invoke=function(){return this.C?this.C.invoke():null};
g.Qf.prototype.dispose=function(){this.C=null};g.fa(Xf,Raa);Xf.prototype.start=function(){var a=g.q("yt.scheduler.instance.start");a&&a()};
Xf.prototype.pause=function(){var a=g.q("yt.scheduler.instance.pause");a&&a()};
g.xa(Xf);Xf.getInstance();g.bg=new g.Qf;(0,g.fd)();var cg=g.sa(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.sa(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var ig,Xaa,ng;ig={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Xaa="app debugcss debugjs expflag forced_experiments absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
ng=!1;g.rl=og;sg.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.qe(a)?a:g.ug(a)):2===this.F&&b?(a=b.call(c,this.C),g.qe(a)?a:g.tg(a)):this};
sg.prototype.getValue=function(){return this.C};
g.pe(sg);var Oca=0,aba=g.Bd?"webkit":g.Mk?"moz":g.C?"ms":g.Cd?"o":"",vg=g.q("ytDomDomGetNextId")||function(){return++Oca};
g.p("ytDomDomGetNextId",vg,void 0);var bba={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.yg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.yg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.yg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Cg=g.q("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",Cg,void 0);var Eg=g.q("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",Eg,void 0);var Fg=g.Pb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.v(g.Ig,g.A);g.Ig.prototype.W=function(a){this.C=new g.jc(g.Ag(a),g.Bg(a))};
g.Ig.prototype.R=function(){if(this.C){var a=g.Zg();if(0!=this.D){var b=g.lc(this.K,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.Zb();this.G=b}this.D=a;this.K=this.C;this.H=(this.H+1)%4}};
g.Ig.prototype.X=function(){g.Ff(this.N);g.J(this.J)};g.fa(Jg,g.A);Jg.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.je);break}};
Jg.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.je)}g.A.prototype.X.call(this)};var cba={enablejsapi:1},dba={};Kg.prototype.clone=function(){var a=new Kg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.za(c)?a[b]=g.kb(c):a[b]=c}return a};var Og={},Ng=0;var hba,eh,fh,gba,$g,iba,Sg;hba=Math.pow(2,16)-1;eh=null;fh=0;gba={log_event:"events",log_interaction:"interactions"};$g=Object.create(null);$g.log_event="GENERIC_EVENT_LOGGING";$g.log_interaction="INTERACTION_LOGGING";iba=new window.Set(["log_event"]);Sg={};g.Wg=0;g.Xg=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.Xg,void 0);var Qg=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",Qg,void 0);
var Yg=g.q("ytLoggingTransportDispatchedStats_")||{};g.p("ytLoggingTransportDispatchedStats_",Yg,void 0);var ah=g.q("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",ah,void 0);var kh={};g.th.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.fd)()+1E3*c);return}catch(h){}var e="";if(d)try{e=(0,window.escape)(g.Ye(b))}catch(h){return}else e=(0,window.escape)(b);g.rh(a,e,c,this.F)};
g.th.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.qh.get(""+a,void 0))&&(c=(0,window.unescape)(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.th.prototype.remove=function(a){this.C&&this.C.remove(a);g.sh(a,"/",this.F)};var uh=new g.th("yt.innertube");var Eh=g.q("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",Eh,void 0);var Fh=0;var Gh=(0,g.fd)().toString();var Kh,Lh,Ih;Kh=Hh();Lh=0;g.Jh=null;Ih=null;g.p("yt.logging.screen.getRootVeType",Qh,void 0);g.p("yt.logging.screen.getCurrentCsn",g.Sh,void 0);g.p("yt.logging.screen.setCurrentScreen",g.Th,void 0);g.f=g.Vh.prototype;g.f.jL=function(){this.Oe()||this.init()};
g.f.enable=function(){this.C=1;(0,g.y)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.jL,this),this.subscribe("dispose-"+a,this.dispose,this),g.D("PAGE_NAME")==a&&g.Wh(this))},this)};
g.f.init=function(){g.Vf(this.F);this.C=2;this.K&&this.K()};
g.f.Oe=function(){return 2==this.C};
g.f.dispose=function(){this.C=3;g.Vf(this.F);this.H&&this.H()};
g.f.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.xf(a)}};
g.f.subscribe=function(a,b,c){a=g.Kf(a,b,c);this.G.push(a);return a};
g.f.clear=function(){g.Lf(this.G);this.G=[]};var Xh=g.q("yt.modules.registry_")||{};g.p("yt.modules.registry_",Xh,void 0);g.$h=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.$h,void 0);var ei={},nba=0;var oba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.li.prototype.toString=function(){return this.topic};var Pca=g.q("ytPubsub2Pubsub2Instance")||new g.af;g.af.prototype.subscribe=g.af.prototype.subscribe;g.af.prototype.unsubscribeByKey=g.af.prototype.sd;g.af.prototype.publish=g.af.prototype.oa;g.af.prototype.clear=g.af.prototype.clear;g.p("ytPubsub2Pubsub2Instance",Pca,void 0);g.sl=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.sl,void 0);g.tl=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.tl,void 0);
g.ul=g.q("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.ul,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var oi=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.fa(ri,g.ki);g.fa(si,g.ki);var wba=new g.li("aft-recorded",ri),Bba=new g.li("timing-sent",si);var Aba,zi,vl,Ui,yba,tba,xba,wl,Vi,Ri,ti,vba,wj,Yba;Aba={vc:!0};
zi={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};vl={};
Ui=(vl.ad_allowed="adTypesAllowed",vl.yt_abt="adBreakType",vl.ad_cpn="adClientPlaybackNonce",vl.ad_docid="adVideoId",vl.yt_ad_an="adNetworks",vl.ad_at="adType",vl.browse_id="browseId",vl.p="httpProtocol",vl.t="transportProtocol",vl.cpn="clientPlaybackNonce",vl.csn="clientScreenNonce",vl.docid="videoId",vl.is_nav="isNavigation",vl.b_p="kabukiInfo.browseParams",vl.is_prefetch="kabukiInfo.isPrefetch",vl.is_secondary_nav="kabukiInfo.isSecondaryNav",vl.prev_browse_id="kabukiInfo.prevBrowseId",vl.query_source=
"kabukiInfo.querySource",vl.voz_type="kabukiInfo.vozType",vl.yt_lt="loadType",vl.yt_ad="isMonetized",vl.nr="webInfo.navigationReason",vl.ncnp="webInfo.nonPreloadedNodeCount",vl.paused="playerInfo.isPausedOnLoad",vl.fmt="playerInfo.itag",vl.yt_pl="watchInfo.isPlaylist",vl.yt_ad_pr="prerollAllowed",vl.yt_red="isRedSubscriber",vl.st="serverTimeMs",vl.aq="tvInfo.appQuality",vl.br_trs="tvInfo.bedrockTriggerState",vl.label="tvInfo.label",vl.is_mdx="tvInfo.isMdx",vl.preloaded="tvInfo.isPreloaded",vl.query=
"unpluggedInfo.query",vl.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",vl.yt_vst="videoStreamType",vl.vph="viewportHeight",vl.vpw="viewportWidth",vl.yt_vis="isVisible",vl);yba="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
tba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",
wn_comments:"LATENCY_ACTION_LOAD_COMMENTS","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"};xba="isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" ");
wl={};Vi=(wl.yt_vst="VIDEO_STREAM_TYPE_",wl);Ri=!1;ti=!1;vba=(0,g.t)(oi.clearResourceTimings||oi.webkitClearResourceTimings||oi.mozClearResourceTimings||oi.msClearResourceTimings||oi.oClearResourceTimings||g.wa,oi);wj=ui;Yba=yi;g.lj=wi;g.fa(cj,g.A);g.f=cj.prototype;
g.f.em=function(a){this.pb()||(this.kb=a=g.Lg(a),this.C=a.clone(),this.F=this.C.attrs.id||this.F,"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N),this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F),this.C.args.enablejsapi="1",this.C.args.playerapiid=this.N,this.ha||(this.ha=kj(this,this.C.args.jsapicallback||"onYouTubePlayerReady")),this.C.args.jsapicallback=null,(a=this.C.attrs.width)&&g.Ic(this.H,Number(a)||a),(a=this.C.attrs.height)&&g.Hc(this.H,Number(a)||a),Cba(this),
this.K&&dj(this))};
g.f.nx=function(){return this.kb};
g.f.uC=function(){return this.K};
g.f.Wh=function(a,b){var c=this,d=kj(this,b);if(d){if(!g.Ka(this.sb,a)&&!this.D[a]){var e=Eba(this,a);this.W&&this.W(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.K&&g.Cf(function(){d(c.api)},0)}};
g.f.VK=function(a,b){if(!this.pb()){var c=kj(this,b);c&&g.bf(this.J,a,c)}};
g.f.Mv=function(a){g.F("a11y-announce",a)};
g.f.AG=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.f.BG=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.f.ey=function(){return this.la||(ej(this)?"html5":null)};
g.f.Lx=function(){return this.ab};
g.f.cancel=function(){if(this.R){var a=this.R,b=g.Nf(this.C.assets.js);window.spf.script.ignore(b,a)}g.Ef(this.ob);this.V=!1};
g.f.X=function(){hj(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.xf(b)}this.Qa=null;for(var a in this.D)g.n[this.D[a]]=null;this.kb=this.C=this.api=null;delete this.na;delete this.H;g.A.prototype.X.call(this)};g.nj={};g.mj="player_uid_"+(1E9*Math.random()>>>0);var uj=null;g.xl=window.performance&&window.performance.memory;g.hk={};var Dj=0,zj=[],Cj=[],vj=0,Aj={},Bj={},xj=new g.Le(Nba,1E3);var Fj=["server_prefetched_vast","vmap"];var Hj,Mj;g.Lj=null;Mj="";var Oj=null,Rj=[];var Vj,nk,mk,Xj,Wj,Uba,Xba,Vba,Wba,ik;Xj=0;Wj=0;Uba=[900,60,"waiting"];Xba=[500,99,"waiting"];Vba=[300,60,"waiting"];Wba=[400,99,"waiting"];ik=[300,101,"done"];var uk=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.vf,void 0);g.p("yt.pushConfigArray",wf,void 0);g.p("yt.getConfig",g.D,void 0);g.p("yt.config.set",g.vf,void 0);g.p("yt.config.pushArray",wf,void 0);g.p("yt.config.get",g.D,void 0);g.p("yt.hasMsg",g.bi,void 0);g.p("yt.setMsg",ai,void 0);g.p("yt.setGoogMsg",ci,void 0);g.p("yt.msgs.has",g.bi,void 0);g.p("yt.msgs.set",ai,void 0);g.p("yt.msgs.setGoog",ci,void 0);g.p("yt.pubsub.publish",g.F,void 0);g.p("yt.pubsub.subscribe",g.Kf,void 0);
g.p("ytcsi.tick",g.lj,void 0);g.v(xk,g.Vh);
xk.prototype.enable=function(){window.onload=Sba;window.onunload=Tba;window.onerror=Oaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Tj),window.addEventListener("spfhistory",Uj),window.addEventListener("spfrequest",Zj),window.addEventListener("spfpartprocess",dk),window.addEventListener("spfpartdone",ek),window.addEventListener("spfprocess",fk),window.addEventListener("spfdone",jk),window.addEventListener("spferror",kk),window.addEventListener("spfreload",
lk),window.addEventListener("spfjsbeforeunload",zk)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",$ba),this.subscribe("dispose",aca)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
xk.prototype.init=function(){xk.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.D("PAGEFRAME_JS")){var b=g.D("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
a=g.D("JS_COMMON_MODULE");var d=g.D("JS_PAGE_MODULES");d||(d=[a]);a=g.D("JS_DELAY_LOAD",0);0<a?(g.Ef(this.D),this.D=g.Cf(function(){b&&g.Of(b,c);window.spf.script.require(d)},a)):(b&&g.Of(b,c),window.spf.script.require(d));
g.p("yt.abuse.player.botguardInitialized",Taa,void 0);g.p("yt.abuse.player.invokeBotguard",Uaa,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",Saa,void 0);g.p("yt.player.exports.navigate",g.ji,void 0);g.p("yt.util.activity.init",g.jh,void 0);g.p("yt.util.activity.getTimeSinceActive",g.lh,void 0);g.p("yt.util.activity.setTimestamp",hh,void 0);Nj(g.q("ytplayer.config"));g.q("ytspf.enabled")&&Qba();uba();g.D("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.$f("service_worker_enabled")?pca():nca())};
xk.prototype.dispose=function(){g.Ef(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.Ff(Hj);if(a=g.Jj())a.removeEventListener("onReady",Ij),a.removeEventListener("onStateChange",Ij);Gi(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.E(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.Hg(a);xk.M.dispose.call(this)};
xk.prototype.disable=function(){xk.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Tj),window.removeEventListener("spfhistory",Uj),window.removeEventListener("spfrequest",Zj),window.removeEventListener("spfpartprocess",dk),window.removeEventListener("spfpartdone",ek),window.removeEventListener("spfprocess",fk),window.removeEventListener("spfdone",jk),window.removeEventListener("spferror",kk),window.removeEventListener("spfreload",lk),window.removeEventListener("spfjsbeforeunload",
zk));window.onload=null;window.onunload=null;window.onerror=null};
g.Zh(new xk);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:01:07 Oct 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:36:21 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 107.641
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.07
  cdx.remote: 0.062
  esindex: 0.01
  LoadShardBlock: 69.352 (3)
  PetaboxLoader3.datanode: 82.215 (5)
  load_resource: 272.636 (2)
  PetaboxLoader3.resolve: 184.506 (2)
*/