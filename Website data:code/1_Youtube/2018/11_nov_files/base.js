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

var _yt_www={};(function(g){var window=this;var da,aaa,la,na,oa,qa,pa,ra,daa,eaa,Xa,rb,maa,zb,Cb,Db,Eb,oaa,xc,yc,Ic,qaa,Sc,Uc,Vc,Xc,Wc,Yc,raa,ad,bd,saa,ed,kd,ld,od,taa,uaa,pd,qd,vd,waa,zd,Cd,Dd,Hd,xaa,Ld,Sd,Rd,zaa,Vd,Wd,Xd,Yd,Aaa,Zd,$d,de,Baa,ee,le,ne,Caa,se,xe,qe,oe,Eaa,we,te,ve,ze,Daa,Faa,Ee,Fe,Je,Gaa,Haa,Iaa,Pe,Re,Kaa,We,Xe,Ye,Laa,af,ef,ff,gf,hf,jf,lf,of,qf,Naa,yf,Jf,Qaa,Pf,Kf,Raa,Rf,Saa,Taa,Uaa,Vaa,Xaa,bg,Yaa,cg,dg,Zaa,ig,gg,eg,kg,rg,Bg,Cg,eba,Jg,dba,iba,ah,gh,hh,jba,nh,oh,vh,uh,kba,zh,Gh,Hh,Ih,Mh,Qh,Th,Vh,lba,oba,hi,ii,ji,ki,tba,Fi,oi,
Gi,pi,mi,Hi,qi,pba,Li,wi,xi,Oi,qba,rba,yi,ti,ui,ni,vi,Ri,Di,Ii,Ei,yba,si,Ki,Ti,Vi,Wi,Yi,Bba,Xi,Zi,Cba,bj,Ui,cj,Dba,$i,aj,Eba,jj,Fba,Lba,Kba,Jba,qj,Iba,Gba,Hba,Mba,Nba,Oba,Pba,Fj,Aj,Cj,Hj,Qba,Ij,Kj,Rba,Sba,Lj,Mj,Rj,Vj,Wj,Xj,bk,ck,dk,Zba,$ba,Sj,Uj,Qj,Yba,Tj,hk,jk,gk,kk,ik,aca,eca,bca,hca,dca,cca,fca,gca,jca,nk,ica,lk,kca,mca,oca,nca,lca,ok,pk,qk,fa,sk,Ea,caa;g.ca=function(a){return function(){return g.aa[a].apply(this,arguments)}};
da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
g.ea=function(a){var b="undefined"!=typeof window.Symbol&&window.Symbol.iterator&&a[window.Symbol.iterator];return b?b.call(a):{next:da(a)}};
aaa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
g.ia=function(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
la=function(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var h=d[e];h in c||(c[h]={});c=c[h]}d=d[d.length-1];e=c[d];h=b(e);h!=e&&null!=h&&ka(c,d,{configurable:!0,writable:!0,value:h})}};
na=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
oa=function(){oa=function(){};
ja.Symbol||(ja.Symbol=baa)};
qa=function(){oa();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(da(this))}});
qa=function(){}};
pa=function(a){qa();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a};
ra=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.sa=function(a){return void 0!==a};
g.ta=function(a){return"string"==typeof a};
g.va=function(a){return"boolean"==typeof a};
g.wa=function(a){return"number"==typeof a};
g.p=function(a,b,c){a=a.split(".");c=c||g.n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.sa(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.q=function(a,b){for(var c=a.split("."),d=b||g.n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.xa=function(){};
g.ya=function(a){a.Hc=void 0;a.getInstance=function(){return a.Hc?a.Hc:a.Hc=new a}};
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
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Lw=function(a,c,h){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
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
g.bb=function(a){return-1!=g.$a.indexOf(a)};
g.cb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.db=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.eb=function(a,b){return null!==a&&b in a};
g.fb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.gb=function(a){for(var b in a)return!1;return!0};
g.hb=function(a,b){b in a&&delete a[b]};
g.ib=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.jb=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0};
g.kb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.mb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var h=0;h<lb.length;h++)c=lb[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.nb=function(){return g.bb("Trident")||g.bb("MSIE")};
g.pb=function(){return g.bb("Safari")&&!(g.ob()||g.bb("Coast")||g.bb("Opera")||g.bb("Edge")||g.bb("Silk")||g.bb("Android"))};
g.ob=function(){return(g.bb("Chrome")||g.bb("CriOS"))&&!g.bb("Edge")};
g.qb=function(){return g.bb("Android")&&!(g.ob()||g.bb("Firefox")||g.bb("Opera")||g.bb("Silk"))};
rb=function(){return g.bb("iPhone")&&!g.bb("iPod")&&!g.bb("iPad")};
g.sb=function(){return rb()||g.bb("iPad")||g.bb("iPod")};
g.tb=function(a){g.tb[" "](a);return a};
g.vb=function(a,b){try{return g.tb(a[b]),!0}catch(c){}return!1};
maa=function(a,b){var c=g.w.pC;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
zb=function(a,b){g.Ba(a);g.wb();for(var c=b?xb:yb,d=[],e=0;e<a.length;e+=3){var h=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,r=m?a[e+2]:0,x=h>>2;h=(h&3)<<4|l>>4;l=(l&15)<<2|r>>6;r&=63;m||(r=64,k||(l=64));d.push(c[x],c[h],c[l],c[r])}return d.join("")};
g.wb=function(){if(!yb){yb={};g.Ab={};xb={};for(var a=0;65>a;a++)yb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),g.Ab[yb[a]]=a,xb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(g.Ab["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
g.Bb=function(){};
Cb=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Aa(c))for(var d=0;d<c.length;d++)c[d]&&c[d].Ne();else c&&c.Ne()}};
Db=function(a,b){return g.wa(b)&&((0,window.isNaN)(b)||window.Infinity===b||-window.Infinity===b)?String(b):b};
Eb=function(a){if(g.Aa(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Eb(d):d)}return b}if(g.Fb&&a instanceof window.Uint8Array)return new window.Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Eb(d):d);return b};
g.Gb=function(a){this.C=a||{cookie:""}};
g.Hb=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,h=0;h<a.length;h++)e=(0,g.Wa)(a[h]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Ib=function(a){var b=g.q("window.location.href");if(g.ta(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.n.$googDebugFname||b}catch(h){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.Jb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Lb=function(){this.C="";this.F=Kb};
g.Mb=function(a){if(a instanceof g.Lb&&a.constructor===g.Lb&&a.F===Kb)return a.C;g.za(a);return"type_error:SafeUrl"};
g.Pb=function(a){if(a instanceof g.Lb)return a;a="object"==typeof a&&a.ge?a.ud():String(a);Nb.test(a)||(a="about:invalid#zClosurez");return g.Ob(a)};
g.Qb=function(a){if(a instanceof g.Lb)return a;a="object"==typeof a&&a.ge?a.ud():String(a);Nb.test(a)||(a="about:invalid#zClosurez");return g.Ob(a)};
g.Ob=function(a){var b=new g.Lb;b.C=a;return b};
g.Sb=function(){this.C="";this.F=g.Rb};
g.Tb=function(a){var b=new g.Sb;b.C=a;return b};
g.Vb=function(){this.C="";this.F=g.Ub};
g.Wb=function(a){var b=new g.Vb;b.C=a;return b};
g.Yb=function(){this.C="";this.D=Xb;this.F=null};
g.Zb=function(a){if(a instanceof g.Yb&&a.constructor===g.Yb&&a.D===Xb)return a.C;g.za(a);return"type_error:SafeHtml"};
g.ac=function(a){if(a instanceof g.Yb)return a;var b="object"==typeof a,c=null;b&&a.tm&&(c=a.Gf());a=g.Va(b&&a.ge?a.ud():String(a));return g.$b(a,c)};
g.$b=function(a,b){var c=new g.Yb;c.C=a;c.F=b;return c};
g.bc=function(a,b){var c=b instanceof g.Lb?b:g.Qb(b);a.href=g.Mb(c)};
g.cc=function(a,b){var c=b instanceof g.Lb?b:g.Qb(b);a.href=g.Mb(c)};
g.dc=function(a,b){this.x=g.sa(a)?a:0;this.y=g.sa(b)?b:0};
g.ec=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.fc=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.gc=function(a,b){this.width=a;this.height=b};
g.y=function(a){return g.ta(a)?window.document.getElementById(a):a};
g.hc=function(a){var b=window.document;return g.ta(a)?b.getElementById(a):a};
g.jc=function(a,b){g.cb(b,function(b,d){b&&"object"==typeof b&&b.ge&&(b=b.ud());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:ic.hasOwnProperty(d)?a.setAttribute(ic[d],b):g.Qa(d,"aria-")||g.Qa(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.lc=function(a){return g.kc(a||window)};
g.kc=function(a){a=a.document;a=g.mc(a)?a.documentElement:a.body;return new g.gc(a.clientWidth,a.clientHeight)};
g.oc=function(a,b,c){return g.nc(window.document,arguments)};
g.nc=function(a,b){var c=String(b[0]),d=b[1];if(!naa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Va(d.name),'"');if(d.type){c.push(' type="',g.Va(d.type),'"');var e={};g.mb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ta(d)?c.className=d:g.Aa(d)?c.className=d.join(" "):g.jc(c,d));2<b.length&&g.pc(a,c,b,2);return c};
g.pc=function(a,b,c,d){function e(c){c&&b.appendChild(g.ta(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var h=c[d];!g.Ba(h)||g.Da(h)&&0<h.nodeType?e(h):(0,g.z)(oaa(h)?g.Oa(h):h,e)}};
g.mc=function(a){return"CSS1Compat"==a.compatMode};
g.qc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.rc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.sc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
oaa=function(a){if(a&&"number"==typeof a.length){if(g.Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Ca(a))return"function"==typeof a.item}return!1};
g.tc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.uc=function(a){try{return!!a&&null!=a.location.href&&g.vb(a,"foo")}catch(b){return!1}};
g.vc=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.wc=function(a){var b=[];g.vc(a,function(a){b.push(a)});
return b};
xc=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};
yc=function(a,b){var c=!1,d=!1;d=void 0===d?!1:d;c=void 0===c?!1:c;g.n.google_image_requests||(g.n.google_image_requests=[]);var e=g.n.document.createElement("img");if(b||c){var h=function(a){b&&b(a);c&&g.Na(g.n.google_image_requests,e);e.removeEventListener&&e.removeEventListener("load",h,!1);e.removeEventListener&&e.removeEventListener("error",h,!1)};
xc(e,"load",h);xc(e,"error",h)}d&&(e.referrerPolicy="no-referrer");e.src=a;g.n.google_image_requests.push(e)};
g.zc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Ac=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Bc=function(a,b){a.style.height=g.Ac(b,!0)};
g.Cc=function(a,b){a.style.width=g.Ac(b,!0)};
g.Dc=function(a){return!!a.google_async_iframe_id};
g.Hc=function(){if(Ec&&!g.uc(Fc)){var a="."+g.Gc.domain;try{for(;2<a.split(".").length&&!g.uc(Fc);)g.Gc.domain=a=a.substr(a.indexOf(".")+1),Fc=window.parent}catch(b){}g.uc(Fc)||(Fc=window)}return Fc};
Ic=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
g.Jc=function(a,b,c,d,e,h,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);h&&(l+="?"+h);k&&(l+="#"+k);return l};
g.Kc=function(a){return a.match(paa)};
g.Lc=function(a){return a?(0,window.decodeURI)(a):a};
g.Mc=function(a){return g.Lc(g.Kc(a)[3]||null)};
g.Nc=function(a){a=g.Kc(a);return g.Jc(null,null,null,null,a[5],a[6],a[7])};
g.Oc=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.Pc=function(a,b,c){if(g.Aa(b))for(var d=0;d<b.length;d++)g.Pc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ta(b)))};
g.Qc=function(a){var b=[],c;for(c in a)g.Pc(c,a[c],b);return b.join("&")};
g.Rc=function(a,b){var c=g.Qc(b);return g.Oc(a,c)};
g.Tc=function(a){var b=a||g.n,c=[],d=null;do{var e=b;if(g.uc(e)){var h=e.location.href;d=e.document&&e.document.referrer||null}else h=d,d=null;c.push(new Sc(h||"",e));try{b=e.parent}catch(k){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||g.n;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.Br=!0);return c};
qaa=function(a,b){this.C=a;this.F=b};
Sc=function(a,b,c){this.url=a;this.gh=b;this.Br=!!c;this.depth=g.wa(void 0)?void 0:null};
Uc=function(){this.D="&";this.G=g.sa(void 0)?void 0:"trn";this.H=!1;this.F={};this.K=0;this.C=[]};
Vc=function(a,b){var c={};c[a]=b;return[c]};
Xc=function(a,b,c,d,e){var h=[];g.vc(a,function(a,l){var k=Wc(a,b,c,d,e);k&&h.push(l+"="+k)});
return h.join(b)};
Wc=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var h=[],k=0;k<a.length;k++)h.push(Wc(a[k],b,c,d+1,e));return h.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(Xc(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
Yc=function(a,b,c,d){a.C.push(b);a.F[b]=Vc(c,d)};
raa=function(a){if(!a.G)return 4E3;var b=1,c;for(c in a.F)b=c.length>b?c.length:b;return 4E3-a.G.length-b-a.D.length-1};
g.Zc=function(a,b,c,d,e){if(Math.random()<(d||a.C))try{if(c instanceof Uc)var h=c;else h=new Uc,g.vc(c,function(a,b){var c=h,d=c.K++,e=Vc(b,a);c.C.push(d);c.F[d]=e});
var k=h.getUrl(a.G,a.F,a.D+b+"&","");k&&("undefined"===typeof e?yc(k,void 0):yc(k,e))}catch(l){}};
ad=function(){var a=g.n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,g.$c)()};
bd=function(){var a=void 0===a?g.n:a;return(a=a.performance)&&a.now?a.now():null};
saa=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
ed=function(){var a=cd;this.events=[];this.F=a||g.n;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.C=dd()||(null!=b?b:1>Math.random())};
g.gd=function(a){a&&fd&&dd()&&(fd.clearMarks("goog_"+a.uniqueId+"_start"),fd.clearMarks("goog_"+a.uniqueId+"_end"))};
kd=function(){var a=hd;this.D=g.id;this.G=this.F;this.C=void 0===a?null:a};
g.nd=function(a){return new ld(g.md(a),a.fileName,a.lineNumber)};
g.md=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
ld=function(a,b,c){Ic.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
od=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
taa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;x=r=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],h=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var r=l^d&(h^l);var x=1518500249}else r=d^h^l,x=1859775393;else 60>c?(r=d&h|l&(d|h),x=2400959708):(r=d^h^l,x=3395469782);r=((a<<5|a>>>27)&4294967295)+r+m+x+b[c]&4294967295;m=l;l=h;h=(d<<30|d>>>2)&4294967295;d=a;a=r}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+h&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==r)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,x+=64;for(;d<c;)if(h[r++]=a[d++],x++,64==r)for(r=0,b(h);d+64<c;)b(a.slice(d,d+64)),d+=64,x+=64}
function d(){var a=[],d=8*x;56>r?c(l,56-r):c(l,64-(r-56));for(var k=63;56<=k;k--)h[k]=d&255,d>>>=8;b(h);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],h=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var r,x;a();return{reset:a,update:c,digest:d,jx:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
uaa=function(a,b,c){var d=[],e=[];if(1==(g.Aa(c)?2:1))return e=[b,a],(0,g.z)(d,function(a){e.push(a)}),pd(e.join(" "));
var h=[],k=[];(0,g.z)(c,function(a){k.push(a.key);h.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.La(h)?[c,b,a]:[h.join(":"),c,b,a];(0,g.z)(d,function(a){e.push(a)});
a=pd(e.join(" "));a=[c,a];g.La(k)||a.push(k.join(""));return a.join("_")};
pd=function(a){var b=taa();b.update(a);return b.jx().toLowerCase()};
qd=function(a){var b=od(String(g.n.location.href)),c=g.n.__OVERRIDE_SID;null==c&&(c=(new g.Gb(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.n.__SAPISID:g.n.__APISID,null==b&&(b=(new g.Gb(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.n.location.href);return d&&b&&c?[c,uaa(od(d),b,a||null)].join(" "):null}return null};
g.B=function(){this.Kc=this.Kc;this.jc=this.jc};
g.td=function(a,b){g.rd(a,g.u(g.sd,b))};
g.rd=function(a,b){a.Kc?g.sa(void 0)?b.call(void 0):b():(a.jc||(a.jc=[]),a.jc.push(g.sa(void 0)?(0,g.t)(b,void 0):b))};
g.sd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.ud=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.tu=!0};
vd=function(a){return g.w.nb?"webkit"+a:g.w.Sb?"o"+a.toLowerCase():a.toLowerCase()};
g.wd=function(a,b){g.ud.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.zc=null;a&&this.init(a,b)};
g.yd=function(a){return!(!a||!a[xd])};
waa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Nh=e;this.key=++vaa;this.Ug=this.Li=!1};
zd=function(a){a.Ug=!0;a.listener=null;a.C=null;a.src=null;a.Nh=null};
g.Bd=function(a){this.src=a;this.listeners={};this.C=0};
Cd=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Na(a.listeners[c],b);d&&(zd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Dd=function(a,b,c,d){for(var e=0;e<a.length;++e){var h=a[e];if(!h.Ug&&h.listener==b&&h.capture==!!c&&h.Nh==d)return e}return-1};
g.Fd=function(a,b,c,d,e){if(d&&d.once)return g.Ed(a,b,c,d,e);if(g.Aa(b)){for(var h=0;h<b.length;h++)g.Fd(a,b[h],c,d,e);return null}c=g.Gd(c);return g.yd(a)?a.O(b,c,g.Da(d)?!!d.capture:!!d,e):Hd(a,b,c,!1,d,e)};
Hd=function(a,b,c,d,e,h){if(!b)throw Error("Invalid event type");var k=g.Da(e)?!!e.capture:!!e,l=g.Id(a);l||(a[Jd]=l=new g.Bd(a));c=l.add(b,c,d,k,h);if(c.C)return c;d=xaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)yaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ld(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Md++;return c};
xaa=function(){var a=zaa,b=Nd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Ed=function(a,b,c,d,e){if(g.Aa(b)){for(var h=0;h<b.length;h++)g.Ed(a,b[h],c,d,e);return null}c=g.Gd(c);return g.yd(a)?a.cf(b,c,g.Da(d)?!!d.capture:!!d,e):Hd(a,b,c,!0,d,e)};
g.Od=function(a,b,c,d,e){if(g.Aa(b))for(var h=0;h<b.length;h++)g.Od(a,b[h],c,d,e);else d=g.Da(d)?!!d.capture:!!d,c=g.Gd(c),g.yd(a)?a.Xa(b,c,d,e):a&&(a=g.Id(a))&&(b=a.Cf(b,c,d,e))&&g.Pd(b)};
g.Pd=function(a){if(g.wa(a)||!a||a.Ug)return!1;var b=a.src;if(g.yd(b))return Cd(b.Hd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ld(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Md--;(c=g.Id(b))?(Cd(c,a),0==c.C&&(c.src=null,b[Jd]=null)):zd(a);return!0};
Ld=function(a){return a in Qd?Qd[a]:Qd[a]="on"+a};
Sd=function(a,b,c,d){var e=!0;if(a=g.Id(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var h=b[a];h&&h.capture==c&&!h.Ug&&(h=Rd(h,d),e=e&&!1!==h)}return e};
Rd=function(a,b){var c=a.listener,d=a.Nh||a.src;a.Li&&g.Pd(a);return c.call(d,b)};
zaa=function(a,b){if(a.Ug)return!0;if(!Nd){var c=b||g.q("window.event"),d=new g.wd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var h=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){h=!0}if(h||void 0==c.returnValue)c.returnValue=!0}c=[];for(h=d.currentTarget;h;h=h.parentNode)c.push(h);h=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Sd(c[k],h,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Sd(c[k],h,!1,d),e=e&&l}return e}return Rd(a,new g.wd(b,
this))};
g.Id=function(a){a=a[Jd];return a instanceof g.Bd?a:null};
g.Gd=function(a){if(g.Ca(a))return a;a[Td]||(a[Td]=function(b){return a.handleEvent(b)});
return a[Td]};
g.Ud=function(){g.B.call(this);this.Hd=new g.Bd(this);this.ww=this;this.fn=null};
Vd=function(a,b,c,d){b=a.Hd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,h=0;h<b.length;++h){var k=b[h];if(k&&!k.Ug&&k.capture==c){var l=k.listener,m=k.Nh||k.src;k.Li&&Cd(a.Hd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.tu};
Wd=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
Xd=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
Yd=function(a){g.n.setTimeout(function(){throw a;},0)};
Aaa=function(){var a=g.n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.bb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.nb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.sa(c.next)){c=c.next;var a=c.Vo;c.Vo=null;a()}};
return function(a){d.next={Vo:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.n.setTimeout(a,0)}};
Zd=function(){this.F=this.C=null};
$d=function(){this.next=this.scope=this.yc=null};
de=function(a,b){ae||Baa();be||(ae(),be=!0);ce.add(a,b)};
Baa=function(){if(g.n.Promise&&g.n.Promise.resolve){var a=g.n.Promise.resolve(void 0);ae=function(){a.then(ee)}}else ae=function(){var a=ee;
!g.Ca(g.n.setImmediate)||g.n.Window&&g.n.Window.prototype&&!g.bb("Edge")&&g.n.Window.prototype.setImmediate==g.n.setImmediate?(fe||(fe=Aaa()),fe(a)):g.n.setImmediate(a)}};
ee=function(){for(var a;a=ce.remove();){try{a.yc.call(a.scope)}catch(b){Yd(b)}Xd(ge,a)}be=!1};
g.he=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.ie=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.ke=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.K=!1;if(a!=g.xa)try{var c=this;a.call(b,function(a){g.je(c,2,a)},function(a){g.je(c,3,a)})}catch(d){g.je(this,3,d)}};
le=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
ne=function(a,b,c){var d=me.get();d.F=a;d.onRejected=b;d.context=c;return d};
Caa=function(a,b,c){oe(a,b,c,null)||de(g.u(b,a))};
g.pe=function(a){return new g.ke(function(b,c){var d=a.length,e=[];if(d)for(var h=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],Caa(m,g.u(h,l),k);
else b(e)})};
g.re=function(a,b){return qe(a,null,b,void 0)};
se=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,h=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(h=k);e&&(0==c.C&&1==d?se(c,b):(h?(d=h,d.next==c.G&&(c.G=d),d.next=d.next.next):te(c),ve(c,e,3,b)))}a.D=null}else g.je(a,3,b)};
xe=function(a,b){a.F||2!=a.C&&3!=a.C||we(a);a.G?a.G.next=b:a.F=b;a.G=b};
qe=function(a,b,c,d){var e=ne(null,null,null);e.C=new g.ke(function(a,k){e.F=b?function(c){try{var e=b.call(d,c);a(e)}catch(r){k(r)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!g.sa(e)&&b instanceof g.ye?k(b):a(e)}catch(r){k(r)}}:k});
e.C.D=a;xe(a,e);return e.C};
g.je=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,oe(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,we(a),3!=b||c instanceof g.ye||Daa(a,c)))};
oe=function(a,b,c,d){if(a instanceof g.ke)return xe(a,ne(b||g.xa,c||null,d)),!0;if(g.ie(a))return a.then(b,c,d),!0;if(g.Da(a))try{var e=a.then;if(g.Ca(e))return Eaa(a,e,b,c,d),!0}catch(h){return c.call(d,h),!0}return!1};
Eaa=function(a,b,c,d,e){function h(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,h)}catch(m){h(m)}};
we=function(a){a.K||(a.K=!0,de(a.J,a))};
te=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
ve=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,ze(b,c,d);else try{b.D?b.F.call(b.context):ze(b,c,d)}catch(e){Ae.call(null,e)}Xd(me,b)};
ze=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Daa=function(a,b){a.H=!0;de(function(){a.H&&Ae.call(null,b)})};
g.ye=function(a){g.Ga.call(this,a)};
g.Be=function(a,b,c){if(g.Ca(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.n.setTimeout(a,b||0)};
g.Ce=function(a){g.n.clearTimeout(a)};
g.De=function(a,b,c){g.B.call(this);this.C=a;this.D=b||0;this.F=c;this.kc=(0,g.t)(this.iq,this)};
Faa=function(){this.F=-1};
Ee=function(){this.F=64;this.C=[];this.K=[];this.R=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
Fe=function(a,b,c){c||(c=0);var d=a.R;if(g.ta(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var h=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(h<<1|h>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){h=l^c&(k^l);var r=1518500249}else h=c^k^l,r=1859775393;else 60>e?(h=c&k|l&(c|k),r=2400959708):(h=c^k^l,
r=3395469782);h=(b<<5|b>>>27)+h+m+r+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=h}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.Ge=function(a){if(a.classList)return a.classList;a=a.className;return g.ta(a)&&a.match(/\S+/g)||[]};
g.C=function(a,b){return a.classList?a.classList.contains(b):g.Ka(g.Ge(a),b)};
g.He=function(){};
Je=function(a){if(a instanceof g.He)return a;if("function"==typeof a.rd)return a.rd(!1);if(g.Ba(a)){var b=0,c=new g.He;c.next=function(){for(;;){if(b>=a.length)throw g.Ie;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Ke=function(a,b,c){if(g.Ba(a))try{(0,g.z)(a,b,c)}catch(d){if(d!==g.Ie)throw d;}else{a=Je(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Ie)throw d;}}};
Gaa=function(a){if(g.Ba(a))return g.Oa(a);a=Je(a);var b=[];g.Ke(a,function(a){b.push(a)});
return b};
g.Me=function(a,b){this.F={};this.C=[];this.kf=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.Le(this,a)};
Haa=function(a,b){return a===b};
g.Oe=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.Ne(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.Ne(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.Le=function(a,b){if(b instanceof g.Me)for(var c=b.Pc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.Ne=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.Qe=function(a){var b=[];Pe(new Iaa,a,b);return b.join("")};
Iaa=function(){};
Pe=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",h=0;h<b;h++)c.push(e),Pe(a,d[h],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=b[d],"function"!=typeof h&&(c.push(e),Re(d,c),c.push(":"),Pe(a,h,c),e=","));c.push("}");return}}switch(typeof b){case "string":Re(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Re=function(a,b){b.push('"',a.replace(Jaa,function(a){var b=Se[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Se[a]=b);return b}),'"')};
g.Te=function(a){g.B.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.K=!!a};
g.Ue=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ia(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.Cd(b)}};
Kaa=function(a,b,c){de(function(){a.apply(b,c)})};
g.Ve=function(a){this.C=a};
We=function(a){this.C=a};
Xe=function(a){this.data=a};
Ye=function(a){return!g.sa(a)||a instanceof Xe?a:new Xe(a)};
g.Ze=function(a){this.C=a};
g.$e=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.$c)()||!!b&&b>(0,g.$c)()};
Laa=function(){};
af=function(){};
g.bf=function(a){this.C=a};
g.cf=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
ef=function(a,b){this.F=a;this.C=null;if(g.w.ma&&!g.w.Bc(9)){df||(df=new g.Me);this.C=df.get(a);this.C||(b?this.C=window.document.getElementById(b):(this.C=window.document.createElement("userdata"),this.C.addBehavior("#default#userData"),window.document.body.appendChild(this.C)),df.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
ff=function(a){return"_"+(0,window.encodeURIComponent)(a).replace(/[.!~*'()%]/g,function(a){return Maa[a]})};
gf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
hf=function(a){return a.C.XMLDocument.documentElement};
jf=function(a,b){this.F=a;this.C=b+"::"};
g.kf=function(a){var b=new g.cf;return b.isAvailable()?a?new jf(b,a):b:null};
lf=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.nf=function(a){lf(g.mf,arguments)};
of=function(a,b){var c=g.D(a,void 0);c?c.push(b):g.nf(a,[b])};
g.D=function(a,b){return a in g.mf?g.mf[a]:b};
qf=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.pf(b)}}:a};
g.pf=function(a,b,c,d,e){var h=g.q("yt.logging.errors.log");h?h(a,b,c,d,e):(h=g.D("ERRORS",[]),h.push([a,b,c,d,e]),g.nf("ERRORS",h))};
g.rf=function(a){g.pf(a,"WARNING",void 0,void 0,void 0)};
Naa=function(a,b,c,d,e){var h=!1,k;if((k=(k=g.mf.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)h=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){h=!0;break}}h&&(e||(g.ta(a)?h=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),a=Error(h),a.name="UnhandledWindowError",e=a,e.message=h,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.pf(e))};
g.E=function(a,b){return a?a.dataset?a.dataset[g.sf(b)]:a.getAttribute("data-"+b):null};
g.sf=function(a){return tf[a]||(tf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.uf=function(a,b){g.Ca(a)&&(a=qf(a));return window.setTimeout(a,b)};
g.vf=function(a,b){g.Ca(a)&&(a=qf(a));return window.setInterval(a,b)};
g.wf=function(a){window.clearTimeout(a)};
g.xf=function(a){window.clearInterval(a)};
g.Cf=function(a,b,c){var d=yf();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){zf[e]&&b.apply(c||window,d)};
try{Af[a]?k():g.uf(k,0)}catch(l){g.pf(l)}},c);
zf[e]=!0;Bf[a]||(Bf[a]=[]);Bf[a].push(e);return e}return 0};
g.Df=function(a){var b=yf();b&&(g.wa(a)?a=[a]:g.ta(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.z)(a,function(a){b.unsubscribeByKey(a);delete zf[a]}))};
g.F=function(a,b){var c=yf();return c?c.publish.apply(c,arguments):!1};
g.Ef=function(a,b){Af[a]=!0;var c=yf();c=c?c.publish.apply(c,arguments):!1;Af[a]=!1;return c};
yf=function(){return g.q("ytPubsubPubsubInstance")};
g.Gf=function(a,b){var c=g.Ff(a);window.spf.script.load(a,c,b)};
g.Hf=function(a){a=g.Ff(a);window.spf.script.unload(a)};
g.Ff=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Oaa,""),b=b.replace(Paa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.If=function(){this.F=!1;this.C=null};
Jf=function(a,b,c){try{a.C=new window.botguard.bg(b)}catch(d){g.rf(d)}c&&c(b)};
Qaa=function(){};
g.Lf=function(a,b){return Kf(a,0,b)};
g.Mf=function(a,b){return Kf(a,1,b)};
g.Of=function(a){for(var b=0,c=a.length;b<c;b++)g.Nf(a[b])};
Pf=function(){};
g.Qf=function(){return!!g.q("yt.scheduler.instance")};
Kf=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.uf(a,c||0)};
g.Nf=function(a){if(!(0,window.isNaN)(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.wf(a)}};
Raa=function(){return(0,window.parseInt)(g.D("DCLKSTAT",0),10)};
g.Sf=function(a){return!!Rf(a)};
g.Tf=function(a){return Number(Rf(a)||0)};
Rf=function(a){return g.D("EXPERIMENT_FLAGS",{})[a]};
Saa=function(){return g.Uf.bf()};
Taa=function(a){a=void 0===a?{}:a;return g.Uf.invoke(a)};
Uaa=function(){if(!Vf)return null;var a=Vf();return"open"in a?a:null};
g.Xf=function(a){switch(g.Wf(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Wf=function(a){return a&&"status"in a?a.status:-1};
g.Yf=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var h=g.Ua(e[0]||"");e=g.Ua(e[1]||"");h in b?g.Aa(b[h])?g.Pa(b[h],e):b[h]=[b[h],e]:b[h]=e}}return b};
g.$f=function(a,b){return g.Zf(a,b||{},!0)};
g.Zf=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Yf(e[1]||"");for(var h in b)if(c||!g.eb(e,h))e[h]=b[h];return g.Rc(a,e)+d};
Vaa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.Kc(a)[1]||null,e=g.Mc(a);d&&e?(d=c,c=g.Kc(a),d=g.Kc(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.Mc(c)==e&&(Number(g.Kc(c)[4]||null)||null)==(Number(g.Kc(a)[4]||null)||null):!0;d=g.Sf("web_ajax_ignore_global_headers_if_set");for(var h in ag)e=g.D(ag[h]),!e||!c&&!bg(a,h)||d&&void 0!==b[h]||(b[h]=e);if(c||bg(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b};
Xaa=function(a){var b=g.Yf(window.location.search),c={};(0,g.z)(Waa,function(a){b[a]&&(c[a]=b[a])});
return g.Zf(a,c||{},!1)};
bg=function(a,b){var c=g.D("CORS_HEADER_WHITELIST")||{},d=g.Mc(a);return d?(c=c[d])?g.Ka(c,b):!1:!0};
Yaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=cg(a,b);var d=dg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,h;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;h&&g.wf(h);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.n;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Ya&&b.Ya.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Js&&0<b.timeout&&(h=g.uf(function(){e||(e=!0,g.wf(h),b.Js.call(b.context||g.n))},b.timeout))}else g.G(a,b)};
g.G=function(a,b){var c=b.format||"JSON";a=cg(a,b);var d=dg(a,b),e=!1,h,k=eg(a,function(a){if(!e){e=!0;h&&g.wf(h);var d=g.Xf(a),k=null,l=400<=a.status&&500>a.status,A=500<=a.status&&600>a.status;if(d||l||A)k=Zaa(c,a,b.qb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};l=b.context||g.n;d?b.onSuccess&&b.onSuccess.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Ya&&b.Ya.call(l,a,k)}},b.method,d,b.headers,
b.responseType,b.withCredentials);
b.Uc&&0<b.timeout&&(h=g.uf(function(){e||(e=!0,k.abort(),g.wf(h),b.Uc.call(b.context||g.n,k))},b.timeout));
return k};
cg=function(a,b){b.ZB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.D("XSRF_FIELD_NAME",void 0),d=b.Ga;d&&(d[c]&&delete d[c],a=g.$f(a,d));return a};
dg=function(a,b){var c=g.D("XSRF_FIELD_NAME",void 0),d=g.D("XSRF_TOKEN",void 0),e=b.postBody||"",h=b.ia,k=g.D("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Ax||g.Mc(a)&&!b.withCredentials&&g.Mc(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(h||(h={}),h[c]=d);h&&g.ta(e)&&(e=g.Yf(e),g.mb(e,h),e=b.Mt&&"JSON"==b.Mt?JSON.stringify(e):g.Qc(e));h=e||h&&!g.gb(h);!fg&&h&&"POST"!=b.method&&(fg=!0,g.pf(Error("AJAX request with postData should use POST")));
return e};
Zaa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?gg(b):null)d={},(0,g.z)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.hg(a)})}c&&ig(d);
return d};
ig=function(a){if(g.Da(a))for(var b in a)"html_content"==b||g.Ra(b,"_html")?a[b]=g.$b(a[b],null):ig(a[b])};
gg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.hg=function(a){var b="";(0,g.z)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.jg=function(a,b){b.method="POST";b.ia||(b.ia={});return g.G(a,b)};
eg=function(a,b,c,d,e,h,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&qf(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Uaa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.Sf("debug_forward_web_query_parameters")&&(a=Xaa(a));m.open(c,a,!0);h&&(m.responseType=h);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof window.FormData));if(e=Vaa(a,e))for(var r in e)m.setRequestHeader(r,e[r]),"content-type"==r.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
m.send(d);return m};
kg=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.lg=function(a){var b=new kg;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.mg=function(a){var b=new kg;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.og=function(a){var b=a.__yt_uid_key;b||(b=ng(),a.__yt_uid_key=b);return b};
g.pg=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=$aa+"VisibilityState";if(b in a)return a[b]};
g.qg=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in aba||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
rg=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.sg=function(a){g.sa(a.C)||rg(a);return a.C};
g.tg=function(a){g.sa(a.F)||rg(a);return a.F};
g.vg=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.fb(ug,function(e){var h=g.va(e[4])&&e[4]==!!d,k=g.Da(e[4])&&g.Da(d)&&g.jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(h||k)})};
g.H=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.vg(a,b,c,d);if(e)return e;e=++wg.count+"";var h=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=h?function(d){d=new g.qg(d);if(!g.tc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.qg(b);
b.currentTarget=a;return c.call(a,b)};
k=qf(k);a.addEventListener?("mouseenter"==b&&h?b="mouseover":"mouseleave"==b&&h?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),xg()||g.va(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);ug[e]=[a,b,c,k,d];return e};
g.I=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.z)(a,function(a){if(a in ug){var b=ug[a],d=b[0],e=b[1],h=b[3];b=b[4];d.removeEventListener?xg()||g.va(b)?d.removeEventListener(e,h,b):d.removeEventListener(e,h,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,h);delete ug[a]}}))};
g.yg=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.H(a,b,function(){g.I(e);c.apply(a,arguments)},d)};
g.zg=function(a){for(var b in ug)ug[b][0]==a&&g.I(b)};
g.Ag=function(a){this.kc=a;this.C=null;this.D=0;this.K=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.H(window,"mousemove",(0,g.t)(this.W,this));this.N=g.vf((0,g.t)(this.R,this),25)};
Bg=function(){g.B.call(this);this.C=[]};
Cg=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.kb(bba);this.assets=a.assets||{};this.attrs=a.attrs||g.kb(cba);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Dg=function(a){a instanceof Cg||(a=new Cg(a));return a};
g.Hg=function(a,b,c,d,e,h){h=h||{};h.name=c||g.D("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=d||g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Fg||(c=a.stacktrace,d=a.columnNumber,a.hasOwnProperty("params")&&(h.params=JSON.stringify(a.params).substr(0,500)),a=g.Ib(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),Gg[a.message]||
0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={Ga:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":h.name},ia:{url:g.D("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};h.version&&(b["client.version"]=h.version);c&&(b.ia.stack=c);for(var k in h)b.ia["client."+k]=h[k];if(k=g.D("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ia[l]=k[l];g.G(g.D("ECATCHER_REPORT_HOST","")+"/error_204",b);Gg[a.message]=
!0;Fg++}};
g.Ng=function(a,b){if(a.Qi){var c=a.Qi;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Ig[a.Qi.token]=d;c=Jg(a.endpoint,a.Qi.token)}else c=Jg(a.endpoint);c.push(a.payload);Kg[a.endpoint]=new b;c.length>=(g.Tf("web_logging_max_batch")||20)?g.Lg():g.Mg()};
g.Lg=function(){g.wf(g.Og);if(!g.gb(g.Pg)){for(var a in g.Pg){var b=Kg[a];b&&(dba(a,b),delete g.Pg[a])}g.gb(g.Pg)||g.Mg()}};
eba=function(){var a=[];for(e in g.Pg){var b=Qg[e]||{};Qg[e]=b;for(var c in g.Pg[e]){var d=Jg(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.Rg());for(var h in Qg)b=Qg[h],b.eventType=h in Sg?Sg[h]:"UNKNOWN_TYPE",c=Tg[h],b.metricIntervalMs=c?e-c:e-g.Ug,a.push(b),Tg[h]=e,delete Qg[h];return a};
g.Mg=function(){g.wf(g.Og);g.Og=g.uf(g.Lg,g.D("LOGGING_BATCH_TIMEOUT",g.Vg||1E4))};
Jg=function(a,b){b=void 0===b?"":b;g.Pg[a]=g.Pg[a]||{};g.Pg[a][b]=g.Pg[a][b]||[];return g.Pg[a][b]};
dba=function(a,b){var c=fba[a],d=Qg[a]||{};Qg[a]=d;var e=Math.round(g.Rg());for(r in g.Pg[a]){var h={context:g.Wg(b.C)};h[c]=Jg(a,r);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=h[c].length;var k=Ig[r];if(k)a:{var l=r;if(k.videoId)var m="VIDEO";else if(k.playlistId)m="PLAYLIST";else break a;h.credentialTransferTokenTargetId=k;h.context=h.context||{};h.context.user=h.context.user||{};h.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Ig[r];h.requestTimeMs=
e;if(k=g.D("EVENT_ID",void 0))m=(g.D("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>gba&&(m=1),g.nf("BATCH_CLIENT_COUNTER",m),k={serializedEventId:k,clientCounter:m},h.serializedClientEventId=k,Xg&&Yg&&g.Sf("log_gel_rtt_web")&&(h.previousBatchInfo={serializedClientEventId:Xg,roundtripMs:Yg}),Xg=k,Yg=0;g.Zg(b,a,h,{retry:hba.has(a),onSuccess:iba.bind(this,g.Rg())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var r=d.diffCount||0;d.averageTimeBetweenDispatchesMs=r?(d.averageTimeBetweenDispatchesMs*r+c)/
(r+1):c;d.diffCount=r+1}d.previousDispatchMs=e};
iba=function(a){Yg=Math.round(g.Rg()-a)};
g.bh=function(a){var b=void 0===a?{}:a;a=void 0===b.C?!0:b.C;b=void 0===b.F?!1:b.F;if(null==g.q("_lact",window)){var c=(0,window.parseInt)(g.D("LACT"),10);c=(0,window.isFinite)(c)?(0,g.$c)()-Math.max(c,0):-1;g.p("_lact",c,window);g.p("_fact",c,window);-1==c&&g.$g();g.H(window.document,"keydown",g.$g);g.H(window.document,"keyup",g.$g);g.H(window.document,"mousedown",g.$g);g.H(window.document,"mouseup",g.$g);a&&(b?g.H(window,"touchmove",function(){ah("touchmove",200)},{passive:!0}):(g.H(window,"resize",
function(){ah("resize",200)}),g.H(window,"scroll",function(){ah("scroll",200)})));
new g.Ag(function(){ah("mouse",100)});
g.H(window.document,"touchstart",g.$g,{passive:!0});g.H(window.document,"touchend",g.$g,{passive:!0})}};
ah=function(a,b){ch[a]||(ch[a]=!0,g.Mf(function(){g.$g();ch[a]=!1},b))};
g.$g=function(){null==g.q("_lact",window)&&g.bh();var a=(0,g.$c)();g.p("_lact",a,window);-1==g.q("_fact",window)&&g.p("_fact",a,window);(a=g.q("ytglobal.ytUtilActivityCallback_"))&&a()};
g.dh=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.$c)()-a,0)};
g.fh=function(a,b,c,d){var e=g.eh,h={};h.eventTimeMs=Math.round(c||g.Rg());h[a]=b;h.context={lastActivityMs:String(c?-1:g.dh())};g.Ng({endpoint:"log_event",payload:h,Qi:d},e)};
g.Wg=function(a){a={client:{hl:a.dC,gl:a.cC,clientName:a.bC,clientVersion:a.innertubeContextClientVersion}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.D("DELEGATED_SESSION_ID")&&!g.Sf("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.D("DELEGATED_SESSION_ID")});return a};
gh=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.D("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.ZZ||g.D("AUTHORIZATION"))||(a?b="Bearer "+g.q("gapi.auth.getToken")().YZ:b=qd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.D("SESSION_INDEX",0),g.Sf("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.D("DELEGATED_SESSION_ID")));return d};
hh=function(a){a=Object.assign({},a);delete a.Authorization;var b=qd();if(b){var c=new Ee;c.update(g.D("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=zb(c.digest(),!0)}return a};
g.jh=function(a,b,c,d){g.ih.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.kh=function(a,b,c){g.ih.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.lh=function(a){var b;(b=g.kf(a))||(a=new ef(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.Ze(a):null;this.F=window.document.domain||window.location.hostname};
jba=function(a,b,c,d){if(d)return null;d=mh.get("nextId",!0)||1;var e=mh.get("requests",!0)||{};e[d]={method:a,request:b,authState:hh(c),requestTime:Math.round(g.Rg())};mh.set("nextId",d+1,86400,!0);mh.set("requests",e,86400,!0);return d};
nh=function(a){var b=mh.get("requests",!0)||{};delete b[a];mh.set("requests",b,86400,!0)};
oh=function(a){var b=mh.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.Rg())-d.requestTime)){var e=d.authState,h=hh(gh(!1));g.jb(e,h)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.Rg())),g.Zg(a,d.method,e,{}));delete b[c]}}mh.set("requests",b,86400,!0)}};
g.eh=function(a){var b=this;this.C=a||{innertubeApiKey:g.D("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.D("INNERTUBE_API_VERSION",void 0),bC:g.D("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.D("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),dC:g.D("INNERTUBE_CONTEXT_HL",void 0),cC:g.D("INNERTUBE_CONTEXT_GL",void 0),eC:g.D("INNERTUBE_HOST_OVERRIDE",void 0)||"",fC:!!g.D("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.Lf(function(){oh(b)},5E3)};
g.Zg=function(a,b,c,d){!g.D("VISITOR_DATA")&&.01>Math.random()&&g.pf(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,Mt:"JSON",Uc:function(){d.Uc()},
Js:d.Uc,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
Uj:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Is:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},h="",k=a.C.eC;k&&(h=k);k=a.C.fC||!1;var l=gh(k,h,d);Object.assign(e.headers,l);e.headers.Authorization&&!h&&(e.headers["x-origin"]=window.location.origin);var m=""+h+("/youtubei/"+a.C.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.C.innertubeApiKey,r;if(d.retry&&g.Sf("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=h&&(r=jba(b,c,l,k))){var x=e.onSuccess,A=e.Uj;e.onSuccess=function(a,b){nh(r);x(a,b)};
c.Uj=function(a,b){nh(r);A(a,b)}}try{g.Sf("use_fetch_for_op_xhr")?Yaa(m,e):g.jg(m,e)}catch(J){if("InvalidAccessError"==J)r&&(nh(r),r=0),g.pf(Error("An extension is blocking network request."),"WARNING");
else throw J;}r&&g.Lf(function(){oh(a)},5E3)};
g.ph=function(a,b,c){g.fh(a,b,c,void 0)};
g.qh=function(){g.Sf("log_web_meta")&&eba().forEach(function(a){g.ph("delayedEventMetricCaptured",a)})};
g.rh=function(a){this.C=a};
g.sh=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.sh(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.th=function(a,b,c){(0,g.z)(b,function(b){g.fh("visualElementHidden",{csn:a,ve:g.sh(b),eventType:c?16:8})})};
vh=function(a,b){var c=Object.keys(a).join("");uh("info_"+c+"_"+b)||(a.clientActionNonce=b,g.ph("latencyActionInfo",a))};
uh=function(a){wh[a]=wh[a]||{count:0};var b=wh[a];b.count++;b.time=g.Rg();xh||(xh=g.Lf(kba,5E3));return 10<b.count?(11==b.count&&g.Hg(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
kba=function(){var a=g.Rg(),b;for(b in wh)6E4<a-wh[b].time&&delete wh[b];xh=0};
zh=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.$c)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(yh)for(a=1,b=0;b<yh.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^yh.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.Eh=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Ah==a)return;Ah=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.dh()>b)&&"visible"==g.pg()){b=-1;g.Bh&&(b=Math.round(g.Rg()-g.Bh));var c=String;var d=g.q("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.$c)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:Ch,index:String(Dh),lastEventDeltaMs:String(b),trigger:a};g.fh("foregroundHeartbeat",
a);g.p("_fact",-1,window);Dh++;g.Bh=g.Rg()}};
g.Fh=function(a){a&&g.fh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ch,clientScreenNonce:a})};
Gh=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
Hh=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
Ih=function(a){return g.D(Hh(void 0===a?0:a),void 0)};
g.Jh=function(){var a=Ih(0),b;a?b=new g.rh({veType:a,youtubeData:void 0}):b=null;return b};
g.Kh=function(a){a=void 0===a?0:a;var b=g.D(Gh(a));b||0!=a||(b=g.D("EVENT_ID"));return b?b:null};
g.Lh=function(a,b,c){c=void 0===c?0:c;if(a!==g.D(Gh(c))||b!==g.D(Hh(c)))g.nf(Gh(c),a),g.nf(Hh(c),b),0==c&&(b=function(){(0,window.setTimeout)(function(){g.Fh(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())};
Mh=function(){var a=g.Jh(),b=g.Kh();b&&a&&g.th(b,[a],!0)};
g.Nh=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.K=d?qf(d):null;this.H=e?qf(e):null;this.G=[];this.C=this.F=0};
g.Oh=function(a){g.Nf(a.F);a.F=g.Mf((0,g.t)(a.init,a))};
g.Rh=function(a){a.name in Ph&&Qh(a.name);Ph[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.z)(a.deps,function(b){if(!(b in Ph))throw Error("Module "+b+" required by "+a.name);Ph[b].reqs.push(a.name)});
a.enable()};
Qh=function(a){if(a in Ph){var b=Ph[a];(0,g.z)(b.reqs,function(a){Qh(a)});
try{b.disable()}catch(c){}delete Ph[a]}};
Th=function(a){lf(g.Sh,arguments)};
g.Uh=function(a){return a in g.Sh};
Vh=function(a){lf(g.Sh,arguments)};
g.Wh=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.w.Ce(),c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Mb(g.Pb(a)),"about:invalid#zClosurez"===a?a="":(a=g.Zb(g.ac(a)),a=g.Ta(g.Qe(a))),g.Sa(a)||(a=g.oc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.sc(a).body.appendChild(a))):e?eg(a,b,"POST",e,d):g.D("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?eg(a,b,"GET","",d):lba(a,b))};
lba=function(a,b){var c=new window.Image,d=""+mba++;Xh[d]=c;c.onload=c.onerror=function(){b&&Xh[d]&&b();delete Xh[d]};
c.src=a};
g.Yh=function(a,b){a=a||"";var c=a.match(nba);window.spf.style.load(a,c?c[1]:"",b)};
g.Zh=function(a,b,c){var d=g.D("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Mc(window.location.href);e&&d.push(e);e=g.Mc(a);if(g.Ka(d,e)||!e&&g.Qa(a,"/"))if(g.Sf("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.bc(d,a),a=d.href),a&&(a=g.Nc(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Kh();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Za(a).toString(36),b=b?g.Qc(b):"",g.jh(a,b,c||5))):(c="ST-"+g.Za(a).toString(36),b=b?g.Qc(b):"",
g.jh(c,b,5))}};
g.$h=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.cc(d.location,g.Rc(a,b)+c)};
g.ai=function(a,b){b&&g.Zh(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.$h(a)};
g.bi=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.D("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Zh(a,b);if(c)return!1;g.ai(a);return!0};
g.ci=function(a,b){this.version=a;this.args=b};
g.di=function(a,b){this.topic=a;this.C=b};
g.fi=function(a,b){var c=g.ei();c&&c.publish.call(c,a.toString(),a,b)};
g.ei=function(){return g.q("ytPubsub2Pubsub2Instance")};
oba=function(a){if(gi.getEntriesByType){var b=gi.getEntriesByType("paint");if(b=g.Ia(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.Ca(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
hi=function(){var a=g.D("TIMING_TICK_EXPIRATION");a||(a={},g.nf("TIMING_TICK_EXPIRATION",a));return a};
ii=function(){var a=hi(),b;for(b in a)g.Nf(a[b]);g.nf("TIMING_TICK_EXPIRATION",{})};
ji=function(a,b){g.ci.call(this,1,arguments)};
ki=function(a,b){g.ci.call(this,1,arguments)};
tba=function(){li=!1;var a=g.D("TIMING_INFO",{});for(b in a)mi(b,a[b]);mi("is_nav",1);(a=g.Kh())&&mi("csn",a);(a=g.D("PREVIOUS_ACTION",void 0))&&mi("pa",a);var b=ni();b.p=g.D("CLIENT_PROTOCOL")||"unknown";b.t=g.D("CLIENT_TRANSPORT")||"unknown";mi("yt_vis",pba());if("cold"==b.yt_lt){a=gi.timing||{};a.navigationStart&&(oi("srt",a.responseStart),1!=b.prerender&&pi("n",a.navigationStart));b=oba(a);0<b&&oi("fpt",b);qi(a);gi.getEntriesByType&&qba();a=[];if(window.document.querySelector&&gi&&gi.getEntriesByName)for(var c in ri)b=
ri[c],rba(c,b)&&a.push(b);a.length&&mi("rc",a.join(","))}si(void 0)&&(c={},c.actionType=sba[g.D("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=ti(void 0),vh(c,a));if("cold"==ni().yt_lt){a=ui();c=vi();for(var d in a)g.Qa(d,"_")||"tick_"+d in c||wi(d,a[d]);d=ni();for(var e in d)"info_"+e in c||xi(e,d[e])}yi(!0);g.Ci(!1)};
Fi=function(a){Di(a);uba();Ei(!1,a);a||(g.D("TIMING_ACTION")&&g.nf("PREVIOUS_ACTION",g.D("TIMING_ACTION")),g.nf("TIMING_ACTION",""))};
oi=function(a,b,c){b||"_"==a[0]||Gi(a,c);var d=ui(c),e=b||g.Rg();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=hi();var h=e[a];h&&(g.Nf(h),e[a]=0);wi(a,b,c)||g.Ci(!1,c);return d[a]};
Gi=function(a,b){gi.mark&&(g.Qa(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),gi.mark(a))};
pi=function(a,b){mi("yt_sts",a,void 0);oi("_start",b,void 0)};
mi=function(a,b,c){ni(c)[a]=b;xi(a,b,c)};
Hi=function(a){var b=ui(a);if(b.aft)return b.aft;a=g.D((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
qi=function(a,b){oi("nreqs",a.requestStart,b);oi("nress",a.responseStart,b);oi("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(oi("nrs",a.redirectStart,b),oi("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(oi("ndnss",a.domainLookupStart,b),oi("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(oi("ntcps",a.connectStart,b),oi("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(oi("nstcps",a.secureConnectionStart,
b),oi("ntcpe",a.connectEnd,b))};
g.Ci=function(a,b){if(!Ii(b)){var c=g.D((b||"")+"TIMING_ACTION",void 0),d=ui(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Hi(b)))if(Ji||(g.fi(vba,new ji(Math.round(c-d._start),b)),Ji=!0),a||b)Ki(b);else{c=!0;var e=g.D("TIMING_WAIT",[]);if(e.length)for(var h=0,k=e.length;h<k;++h)if(!(e[h]in d)){c=!1;break}c&&Ki(b)}}};
pba=function(){switch(g.pg()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Li=function(a){if(!Ii(void 0)){var b=g.D("CSI_SERVICE_NAME","youtube");g.D("TIMING_ACTION",void 0)&&b&&(oi("aa",void 0,void 0),mi("ap",1,void 0),mi("yt_fss",a,void 0),Ki(void 0))}};
wi=function(a,b,c){vi(c)["tick_"+a]=b;c||b||g.Rg();return si(c)?(c=ti(c),"_start"==a?uh("baseline_"+c)||g.ph("latencyActionBaselined",{clientActionNonce:c},b):uh("tick_"+a+"_"+c)||g.ph("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
xi=function(a,b,c){vi(c)["info_"+a]=b;if(si(c))if(a in Mi){var d=Mi[a];g.Ka(wba,d)&&(b=!!b);a in Ni&&(b=Ni[a]+b.toUpperCase());if(si(c)){a={};d=d.split(".");for(var e=a,h=0;h<d.length-1;h++)e[d[h]]=e[d[h]]||{},e=e[d[h]];e[d[d.length-1]]=b;c=ti(c);vh(a,c)}}else g.Ka(xba,a)||g.pf(Error("Unknown label "+a+" logged with GEL CSI."))};
Oi=function(a){return Math.round(gi.timing.navigationStart+a)};
qba=function(){var a=window.location.protocol,b=gi.getEntriesByType("resource");b=(0,g.Pi)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20181101000106/https://fonts.gstatic.com/s/")});
(b=(0,g.Qi)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(oi("wffs",Oi(b.startTime)),oi("wffe",Oi(b.responseEnd)))};
rba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=gi.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,oi("rsf_"+b,d+Math.round(c.fetchStart)),oi("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&("rc"in ni(void 0)||mi("rc",""),0===c.transferSize))?!0:!1:!1};
yi=function(a){g.p("ytglobal.timingready_",a,void 0)};
ti=function(a){var b=Ri(a).nonce;b||(b=zh(),Ri(a).nonce=b);return b};
ui=function(a){return Ri(a).tick};
ni=function(a){return Ri(a).info};
vi=function(a){a=Ri(a);"gel"in a||(a.gel={});return a.gel};
Ri=function(a){return g.q("ytcsi."+(a||"")+"data_")||Di(a)};
Di=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
Ii=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
Ei=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
yba=function(a){var b=ui(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==ni(a).yt_pvis};
si=function(a){return li||g.Sf("csi_on_gel")||!!Ri(a).useGel};
Ki=function(a){ii();if(!si(a)){var b=ui(a),c=ni(a),d=b._start;for(k in b)if(g.Qa(k,"_")&&g.Aa(b[k])){var e=k.slice(1);if(e in zba){var h=(0,g.Si)(b[k],function(a){return Math.round(a-d)});
c["all_"+e]=h.join()}delete b[k]}var k=!!c.ap;if(e=g.q("ytglobal.timingReportbuilder_")){if(b=e(b,c,a))Ti(b,k),Fi(a)}else{var l=g.D("CSI_SERVICE_NAME","youtube");e={v:2,s:l,action:g.D((a||"")+"TIMING_ACTION",void 0)};h=mi.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var m=window.location.protocol+g.q("ytplayer.config.assets.js");(m=gi.getEntriesByName?gi.getEntriesByName(m)[0]:null)?c.h5jse=Math.round(c.h5jse-m.responseEnd):delete c.h5jse}b.aft=Hi(a);yba(a)&&"youtube"==l&&(mi("yt_lt","hot_bg",a),
l=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-l));for(var r in c)"_"!=r.charAt(0)&&(e[r]=c[r]);b.ps=g.Rg();c={};r=[];for(var x in b)"_"!=x.charAt(0)&&(l=Math.round(b[x]-d),c[x]=l,r.push(x+"."+l));e.rt=r.join(",");(b=g.q("ytdebug.logTiming"))&&b(e,c);Ti(e,k,a);g.fi(Aba,new ki(c.aft+(h||0),a))}}};
Ti=function(a,b,c){if(g.Sf("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var h=void 0===h?"":h;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,h)||g.Wh(a,void 0,void 0,void 0,h)}catch(k){g.Wh(a,void 0,void 0,void 0,h)}}else g.Wh(a);Ei(!0,c)};
Vi=function(a,b){g.B.call(this);this.H=this.oa=a;this.N=b;this.K=!1;this.api={};this.Z=this.W=null;this.J=new g.Te;g.td(this,this.J);this.D={};this.ka=this.ha=this.F=this.mb=this.C=null;this.V=!1;this.G=this.R=null;this.Ra={};this.wb=["onReady"];this.eb=null;this.rb=window.NaN;this.Y={};Ui(this);this.Ci("WATCH_LATER_VIDEO_ADDED",this.jH.bind(this));this.Ci("WATCH_LATER_VIDEO_REMOVED",this.kH.bind(this));this.Ci("onAdAnnounce",this.vw.bind(this));this.Ab=new Bg(this);g.td(this,this.Ab)};
Wi=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Yi=function(a){var b=!0,c=Xi(a);c&&a.C&&(a=a.C,b=g.E(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
Bba=function(a){if(!a.sb()&&!a.V){var b=Yi(a);if(b&&"html5"==(Xi(a)?"html5":null))a.ka="html5",a.K||Zi(a);else if($i(a),a.ka="html5",b&&a.G)a.oa.appendChild(a.G),Zi(a);else{a.C.loaded=!0;var c=!1;a.R=function(){c=!0;var b=a.C.clone();g.q("yt.player.Application.create")(a.oa,b);Zi(a)};
a.V=!0;b?a.R():(g.Gf(a.C.assets.js,a.R),g.Yh(a.C.assets.css),aj(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
Xi=function(a){var b=g.y(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
Zi=function(a){if(!a.sb()){var b=Xi(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||Cba(a)):a.rb=g.uf(function(){Zi(a)},50)}};
Cba=function(a){Ui(a);a.K=!0;var b=Xi(a);b.addEventListener&&(a.W=bj(a,b,"addEventListener"));b.removeEventListener&&(a.Z=bj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=bj(a,b,e))}for(var h in a.D)a.W(h,a.D[h]);Wi(a);a.ha&&a.ha(a.api);a.J.qa("onReady",a.api)};
bj=function(a,b,c){var d=b[c];return function(){try{return a.eb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.eb=e,g.rf(e))}}};
Ui=function(a){a.K=!1;if(a.Z)for(var b in a.D)a.Z(b,a.D[b]);for(var c in a.Y)g.wf((0,window.parseInt)(c,10));a.Y={};a.W=null;a.Z=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Ci.bind(a);a.api.removeEventListener=a.CL.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.qy.bind(a);a.api.getPlayerType=a.Jy.bind(a);a.api.getCurrentVideoConfig=a.Tx.bind(a);a.api.loadNewVideoConfig=a.Om.bind(a);a.api.isReady=a.dD.bind(a)};
cj=function(a,b){var c=b;if("string"==typeof b){if(a.Ra[b])return a.Ra[b];c=function(){var a=g.q(b);a&&a.apply(g.n,arguments)};
a.Ra[b]=c}return c?c:null};
Dba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.n[c]=function(c){var d=g.uf(function(){a.sb()||(a.J.qa(b,c),g.hb(a.Y,String(d)))},0);
g.ib(a.Y,String(d),!0)};
return c};
$i=function(a){(0,g.dj)("dcp");a.cancel();Ui(a);a.ka=null;a.C&&(a.C.loaded=!1);var b=Xi(a);b&&(Yi(a)||!aj(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.qc(a.oa)};
aj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.gj=function(a,b){a=g.ta(a)?g.hc(a):a;var c=g.ej+"_"+g.Fa(a),d=g.fj[c];if(d)return d.Om(b),d.api;d=new Vi(a,c);g.fj[c]=d;g.F("player-added",d.api);g.rd(d,g.u(Eba,d));g.uf(function(){d.Om(b)},0);
return d.api};
Eba=function(a){delete g.fj[a.N]};
g.hj=function(a){if(!a)return null;var b=g.ej+"_"+g.Fa(a),c=g.fj[b];c||(c=new Vi(a,b),g.fj[b]=c);return c.api};
g.ij=function(a){return g.hj(window.document.getElementById(a))};
g.kj=function(a,b){var c={};c.key=a;c.value=b;return jj().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.lj=function(a){return jj().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
jj=function(){return mj?window.Promise.resolve(mj):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))mj=b,a(mj);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),jj()};
c.onupgradeneeded=Fba})};
Fba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Lba=function(){nj++;var a=g.lc(),b=new g.zc(0,0,a.width,a.height);oj("vph",a.height);oj("vpw",a.width);(0,g.dj)("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;pj.start();for(var h=0;h<c;h++){var k=a[h];if(qj(k,b)){var l=Gba(k);l.then(Hba);d.push(l);rj.push(l);k.loadTime||(e=!1)}}e&&oj("yt_eil",1);(0,g.dj)("vpcc");b=g.pe(d).then(Iba);g.re(b,Jba);b.then(Kba);rj.push(b);return b};
Kba=function(){pj.stop()};
Jba=function(){(0,g.dj)("vpr")};
qj=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.og(c);if(e in sj)return!0;if(e in tj)return!1;var h=window.getComputedStyle(c);if("none"==h.display||"hidden"==h.visibility)return tj[e]=!0,!1;h=c.getBoundingClientRect();if(!(b.left<=h.left+h.width&&h.left<=b.left+b.width&&b.top<=h.top+h.height&&h.top<=b.top+b.height))return tj[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)sj[d[c]]=!0;return!0};
Iba=function(a){var b=g.lc();b=new g.zc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var h=a[d].time;qj(a[d].YB,b)&&c<h&&(c=h)}return c};
Gba=function(a){var b=nj;return new g.ke(function(c,d){var e={YB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){nj!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},uj.push(a))})};
Hba=function(a){pj.start();a=a.time;vj<a&&(vj=a,(0,g.dj)("lim",a))};
Mba=function(){(0,g.dj)("vptl",vj);(0,g.dj)("vpl",vj)};
Nba=function(){rj.forEach(function(a){a.cancel()});
vj=rj.length=0;sj={};tj={};uj.forEach(function(a){a.slt=void 0});
uj.length=0};
g.wj=function(a,b){g.Wh("/gen_204?"+a,b)};
Oba=function(a){if(null==a)return[];var b=[];g.Sf("ima_prevent_mpu_queries_on_cached_playback")&&0>xj.indexOf("ad3_module")&&xj.push("ad3_module");xj.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.yj=function(){return g.C(g.y("page-container"),"remote-connected")};
Pba=function(){zj=g.vf(Aj,5E3);var a=g.Bj();a?(a.addEventListener("onReady",Aj),a.addEventListener("onStateChange",Aj)):Cj("unable to init PP monitor")};
Fj=function(a){for(var b in g.fj){var c=g.fj[b];c&&c.cancel()}if(a=a||null){b=g.Bj();var d=!0;c=g.Dj;g.Dj=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Ej="",g.gj("player-api",a)):b.playVideo();a=g.Dg(a);a.loaded=!0}Aj();g.p("ytplayer.config",a,void 0)};
g.Bj=function(){return g.ij("player-api")};
Aj=function(){var a=g.Bj();if(a){var b=g.y("player");b=!b||g.C(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.D("PAGE_NAME"),e=g.yj();!c||d||e||(Cj("PP playing off watch (paused)"),a.pauseVideo());b&&d?Cj("PP off-screen on watch"):b||d||Cj("PP !off-screen off watch")}};
Cj=function(a){var b=g.D("PAGE_NAME");b&&(a+="("+[b,Ej,g.q("_spf_state.nav-counter")].join()+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.pf(Error(a),"WARNING"))};
Hj=function(){(0,g.dj)("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){(0,g.dj)("cpt");g.F("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?((0,g.dj)("cpt"),g.F("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){(0,g.dj)("cpt");
g.F("on_cpt_tick",(new Date).getTime())},0);
Qba();g.D("CSI_VIEWPORT")&&(Gj=Lba(),Gj.then(function(a){(0,g.dj)("vpl",a);Gj=null},function(){}))};
Qba=function(){Ij("init");var a=g.D("PAGE_NAME",void 0);a&&Ij("init-"+a)};
Ij=function(a){g.Qf()?Jj.push(g.Mf(g.u(g.Ef,a),0)):g.F(a)};
Kj=function(){g.Of(Jj);Jj.length=0;Nba();Gj&&(Gj.cancel(),Gj=null);var a=g.D("PAGE_NAME",void 0);a&&g.Ef("dispose-"+a);g.Ef("dispose")};
Rba=function(){Hj()};
Sba=function(){g.D("TIMING_REPORT_ON_UNLOAD")&&g.Ci(!0);Li("u");g.Eh("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Mh();g.qh();g.Lg();Kj();g.Ef("pageunload")};
Lj=function(){g.$g()};
Mj=function(){window.yt_spf_loaded_history=!0;g.$g()};
Rj=function(){Nj=1;Oj=Pj=0;g.D("TIMING_REPORT_ON_UNLOAD")&&g.Ci(!0);g.Sf("warm_load_nav_start_web")?(Li("n"),Fi(),yi(!1),g.nf("TIMING_AFT_KEYS",[]),mi("yt_lt","warm"),g.nf("TIMING_ACTION",""),g.nf("TIMING_WAIT",[]),ii(),pi("n")):(Li("n"),Fi(),pi("n"));Gi("nr");Qj(Tba);Mh();g.Ef("navigate")};
Vj=function(a){a=a.detail.part||a.detail.partial;(0,g.dj)("nc"+Pj);++Pj;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.dj)("bc");else{var b=1==Nj;Nj=2;b?(Qj(Uba),Sj()):Qj(Vba);if(b=a&&a.data&&a.data.swfcfg)Tj(a.timing,b.args),Uj(b)}};
Wj=function(){(0,g.dj)("np"+Oj);++Oj};
Xj=function(a){a=a.detail.response;var b=1==Nj;Nj=3;b&&(Qj(Wba),Sj());if(b=a.data&&a.data.swfcfg)Tj(a.timing,b.args),Uj(b)};
bk=function(a){(0,g.dj)("nd");a=a.detail.response;g.Yj=a.cacheKey;a=a.timing;var b=window._spf_state;g.Zj.navigationCount=b&&b["nav-counter"]||0;g.Sf("warm_load_nav_start_web")?(0,g.dj)("srt",a.responseStart):(pi("ne",a.responseStart),oj("srt",Math.max(0,a.responseStart-a.navigationStart)));oj("yt_lt",a.spfCached?"hot":"warm");(0,g.dj)("pfs",a.fetchStart);(0,g.dj)("pfrs",a.responseStart);"redirectStart"in a&&Xba(a);Qj(ak);window.document.getElementById("content").style.height="";Hj();Nj=0};
ck=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.pf(a)};
dk=function(a){g.wj(g.Qc({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Zba=function(){Yba();window.yt_spf_loaded_history=!1};
$ba=function(){};
Sj=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Kj();a=g.D("PREVIOUS_ACTION");for(var b in g.mf)delete g.mf[b];g.nf("PREVIOUS_ACTION",a);g.nf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);if((b=g.Bj())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Ej=b,(b=g.y("movie_player"))&&b.stopVideo?(b.stopVideo(),Ej="recovered"):Ej="missing2"}else Ej="missing";Aj()};
Uj=function(a){"cfg"in ui(void 0)||(0,g.dj)("cfg");Fj(a)};
Qj=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.Nf(ek);ek=g.Mf(function(){var c=a[0],d=a[1],e=a[2];b.className="";var h=b.style;h.transitionDuration=h.webkitTransitionDuration=c+"ms";h.width=d+"%";g.wf(fk);fk=g.uf(function(){b.className=e},c)},0)};
Yba=function(){var a=ak[0]+50;g.wf(fk);fk=g.uf(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
Tj=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Oba(b));g.D("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.wj(g.Qc(c)))};
hk=function(){return"granted"!=window.Notification.permission?window.Promise.resolve():gk().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})["catch"](function(){})};
jk=function(){ik({type:"notifications_register",data:g.D("ID_TOKEN")})};
gk=function(){return window.navigator.serviceWorker.getRegistration(String(Rf("service_worker_scope")||""))};
kk=function(a){return!(!a||!a.pushManager)};
ik=function(a){gk().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
aca=function(){if(!g.D("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(Rf("service_worker_push_force_notification_prompt_tag")||"");return a?g.lj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
eca=function(){var a=void 0===a?!1:a;return(window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification?gk().then(kk):window.Promise.resolve(!1)).then(function(b){if(!b)return window.Promise.resolve();b=hk().then(function(){ik({type:"notifications_check_registration",data:g.D("ID_TOKEN")})});
return"default"!=window.Notification.permission?b:b.then(function(){return bca(a)}).then(function(a){if(a)return cca(),dca().then(function(){})})})};
bca=function(a){return g.D("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.D("LOGGED_IN",void 0)&&(void 0===a?0:a)?aca().then(function(a){if(a)return!0;a=[fca(),gca()];g.D("LOGGED_IN",void 0)||a.push(hca());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
hca=function(){var a=g.Tf("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.lj("WatchCount").then(function(b){return b>=a})};
dca=function(){var a=arguments;g.Sf("service_worker_push_prompt_modal_enable")&&ica();return window.Notification.requestPermission().then(function(a){lk();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return hk().then(function(){g.kj("NotificationsDisabled",!1);jk();return window.Promise.resolve(!0)});
"denied"==a&&jk();return window.Promise.resolve(!1)})["catch"](function(){lk();
return window.Promise.reject.apply(window.Promise,a instanceof Array?a:aaa(g.ea(a)))})};
cca=function(){g.lj("PromptCount").then(function(a){return g.kj("PromptCount",a+1)}).then(function(){return g.kj("PromptTime",(0,g.$c)())}).then(function(){var a=String(Rf("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.lj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.kj("PromptTags",JSON.stringify(c))})})};
fca=function(){return-1==g.Tf("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.lj("PromptCount").then(function(a){a||(a=0);return window.Promise.resolve(a<g.Tf("service_worker_push_prompt_cap"))})};
gca=function(){var a=g.Tf("service_worker_push_prompt_delay_microseconds");return a?g.lj("PromptTime").then(function(b){return window.Promise.resolve((0,g.$c)()-a>(b||0))}):window.Promise.resolve(!0)};
jca=function(){mk||lk()};
nk=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
ica=function(){var a=g.y("yt-push-prompt-modal-bg");mk=g.Sf("service_worker_push_prompt_modal_ignore_click");a?nk(a):(a=g.oc("div",{id:"yt-push-prompt-modal-bg"}),nk(a),window.document.body.appendChild(a),g.yg(window.document,"click",jca))};
lk=function(){var a=g.y("yt-push-prompt-modal-bg");a&&g.rc(a)};
kca=function(a){return kk(a)?eca():window.Promise.resolve()};
mca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(lca)})};
oca=function(){var a="/sw.js",b=g.D("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=ok(a);g.Sf("service_worker_push_enabled")&&a.then(nca).then(kca)};
nca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
lca=function(a){a&&ok("/sw.js?0",a.scope)};
ok=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(Rf("service_worker_scope")||"")||"/"})};
pk=function(){g.Nh.call(this,"www/base");this.D=0};
qk=function(a){(a=a.detail.name)&&Qh(a)};
g.aa=[];fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)sk=Object.setPrototypeOf;else{var tk;a:{var pca={uw:!0},uk={};try{uk.__proto__=pca;tk=uk.uw;break a}catch(a){}tk=!1}sk=tk?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ha=sk,ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this,baa=function(){var a=0;
return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
la("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=na(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),h=a.length;0<h&&0<e;)if(b[--e]!=a[--h])return!1;return 0>=h}});
var qca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
la("Object.assign",function(a){return a||qca});
la("WeakMap",function(a){function b(a){this.jb=(k+=Math.random()+1).toString();if(a){a=g.ea(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){ra(a,h)||ka(a,h,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(x){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var k=0;b.prototype.set=function(a,b){d(a);if(!ra(a,h))throw Error("WeakMap key fail: "+a);a[h][this.jb]=b;return this};
b.prototype.get=function(a){return ra(a,h)?a[h][this.jb]:void 0};
b.prototype.has=function(a){return ra(a,h)&&ra(a[h],this.jb)};
b.prototype["delete"]=function(a){return ra(a,h)&&ra(a[h],this.jb)?delete a[h][this.jb]:!1};
return b});
la("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return pa(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?h.has(b)?c=h.get(b):(c=""+ ++k,h.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&ra(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,xc:l}}return{id:c,list:d,index:-1,xc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.ea(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.ea([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(A){return!1}}())return a;
qa();var h=new window.WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.xc?c.xc.value=b:(c.xc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.xc),this.F.previous.next=c.xc,this.F.previous=c.xc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.xc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.xc.previous.next=a.xc.next,a.xc.next.previous=a.xc.previous,a.xc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).xc};
e.prototype.get=function(a){return(a=d(this,a).xc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
la("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.ea(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.ea([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),h=e.next();if(h.done||h.value[0]!=b||h.value[1]!=b)return!1;h=e.next();return h.done||h.value[0]==b||4!=h.value[0].x||h.value[1]!=h.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
qa();b.prototype.add=function(a){a=0===a?0:a;this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
la("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
la("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==na(this,a,"includes").indexOf(a,c||0)}});
var rca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
la("Reflect.construct",function(){return rca});
la("Promise",function(a){function b(a){this.F=0;this.D=void 0;this.C=[];var b=this.H();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.K()})};
var e=ja.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.K=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(r){this.H(r)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.K(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(m){this.G(m);return}"function"==typeof b?this.ka(b,a):this.K(a)};
b.prototype.G=function(a){this.R(2,a)};
b.prototype.K=function(a){this.R(1,a)};
b.prototype.R=function(a,b){if(0!=this.F)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.F);this.F=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var a=0;a<this.C.length;++a)h.F(this.C[a]);this.C=null}};
var h=new c;b.prototype.V=function(a){var b=this.H();a.Mi(b.resolve,b.reject)};
b.prototype.ka=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(r){c.reject(r)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(U){h(U)}}:b}
var e,h,k=new b(function(a,b){e=a;h=b});
this.Mi(d(a,e),d(c,h));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Mi=function(a,b){function c(){switch(d.F){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.F);}}
var d=this;null==this.C?h.F(c):this.C.push(c)};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.ea(a),h=e.next();!h.done;h=e.next())d(h.value).Mi(b,c)})};
b.all=function(a){var c=g.ea(a),e=c.next();return e.done?d([]):new b(function(a,b){function h(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Mi(h(k.length-1),b),e=c.next();while(!e.done)})};
return b});
la("Array.from",function(a){return a?a:function(a,c,d){c=null!=c?c:function(a){return a};
var b=[],h="undefined"!=typeof window.Symbol&&window.Symbol.iterator&&a[window.Symbol.iterator];if("function"==typeof h){a=h.call(a);for(var k=0;!(h=a.next()).done;)b.push(c.call(d,h.value,k++))}else for(h=a.length,k=0;k<h;k++)b.push(c.call(d,a[k],k));return b}});
la("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!(0,window.isNaN)(a)&&window.Infinity!==a&&-window.Infinity!==a}});
la("Number.parseInt",function(a){return a||window.parseInt});
g.vk=g.vk||{};g.n=this;Ea="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.$c=Date.now||function(){return+new Date};g.Gc=window.document;g.wk=window;g.v(g.Ga,Error);g.Ga.prototype.name="CustomError";g.Ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.ta(a))return g.ta(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.sca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.ta(a))return g.ta(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)};
g.Pi=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],h=0,k=g.ta(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[h++]=m)}return e};
g.Si=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),h=g.ta(a)?a.split(""):a,k=0;k<d;k++)k in h&&(e[k]=b.call(c,h[k],k,a));
return e};
g.Qi=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.z)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.xk=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return!0;
return!1};
g.yk=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ta(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&!b.call(c,e[h],h,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Wa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.zk=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var Ak=g.n.navigator;if(Ak){var Bk=Ak.userAgent;if(Bk){g.$a=Bk;break a}}g.$a=""};var lb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.tb[" "]=g.xa;g.w={Pk:!1,Ok:!1,po:!1,uo:!1,Rk:!1,Sk:!1,Yv:!1};g.w.mh=g.w.Pk||g.w.Ok||g.w.po||g.w.Rk||g.w.uo||g.w.Sk;g.w.Ce=function(){return g.$a};
g.w.Rl=function(){return g.n.navigator||null};
g.w.c_=function(){return g.w.Rl()};
g.w.Sb=g.w.mh?g.w.Sk:g.bb("Opera");g.w.ma=g.w.mh?g.w.Pk:g.nb();g.w.qc=g.w.mh?g.w.Ok:g.bb("Edge");g.w.Vk=g.w.qc||g.w.ma;g.w.Bb=g.w.mh?g.w.po:g.bb("Gecko")&&!(-1!=g.$a.toLowerCase().indexOf("webkit")&&!g.bb("Edge"))&&!(g.bb("Trident")||g.bb("MSIE"))&&!g.bb("Edge");g.w.nb=g.w.mh?g.w.uo||g.w.Rk:-1!=g.$a.toLowerCase().indexOf("webkit")&&!g.bb("Edge");g.w.mC=function(){return g.w.nb&&g.bb("Mobile")};
g.w.JU=g.w.Rk||g.w.mC();g.w.vg=g.w.nb;g.w.ix=function(){var a=g.w.Rl();return a&&a.platform||""};
g.w.NV=g.w.ix();g.w.so=!1;g.w.vo=!1;g.w.qo=!1;g.w.wo=!1;g.w.lh=!1;g.w.tg=!1;g.w.qg=!1;g.w.Qk=!1;g.w.Zv=!1;g.w.Wd=g.w.so||g.w.vo||g.w.qo||g.w.wo||g.w.lh||g.w.tg||g.w.qg||g.w.Qk;g.w.qd=g.w.Wd?g.w.so:g.bb("Macintosh");g.w.Eo=g.w.Wd?g.w.vo:g.bb("Windows");g.w.kC=function(){return g.bb("Linux")||g.bb("CrOS")};
g.w.hw=g.w.Wd?g.w.qo:g.w.kC();g.w.qC=function(){var a=g.w.Rl();return!!a&&-1!=(a.appVersion||"").indexOf("X11")};
g.w.UZ=g.w.Wd?g.w.wo:g.w.qC();g.w.ANDROID=g.w.Wd?g.w.lh:g.bb("Android");g.w.Ai=g.w.Wd?g.w.tg:rb();g.w.zi=g.w.Wd?g.w.qg:g.bb("iPad");g.w.ew=g.w.Wd?g.w.Qk:g.bb("iPod");g.w.IOS=g.w.Wd?g.w.tg||g.w.qg||g.w.Qk:g.sb();g.w.RS=g.w.Wd?g.w.Zv:-1!=g.$a.toLowerCase().indexOf("kaios");g.w.yh=function(){var a="",b=g.w.qz();b&&(a=b?b[1]:"");return g.w.ma&&(b=g.w.Vp(),null!=b&&b>(0,window.parseFloat)(a))?String(b):a};
g.w.qz=function(){var a=g.w.Ce();if(g.w.Bb)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.w.qc)return/Edge\/([\d\.]+)/.exec(a);if(g.w.ma)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.w.nb)return/WebKit\/(\S+)/.exec(a);if(g.w.Sb)return/(?:Version)[ \/]?(\S+)/.exec(a)};
g.w.Vp=function(){var a=g.n.document;return a?a.documentMode:void 0};
g.w.VERSION=g.w.yh();g.w.compare=function(a,b){return g.Ya(a,b)};
g.w.pC={};g.w.fb=function(a){return g.w.Yv||maa(a,function(){return 0<=g.Ya(g.w.VERSION,a)})};
g.w.dd=g.w.fb;g.w.Bc=function(a){return Number(g.w.yo)>=a};
g.w.l_=g.w.Bc;var Ck;var Dk=g.n.document;Ck=Dk&&g.w.ma?g.w.Vp()||("CSS1Compat"==Dk.compatMode?(0,window.parseInt)(g.w.VERSION,10):5):void 0;g.w.yo=Ck;g.w.product={};g.w.product.oo=!1;g.w.product.tg=!1;g.w.product.qg=!1;g.w.product.lh=!1;g.w.product.jo=!1;g.w.product.to=!1;g.w.product.ug=g.w.Pk||g.w.Ok||g.w.Sk||g.w.product.oo||g.w.product.tg||g.w.product.qg||g.w.product.lh||g.w.product.jo||g.w.product.to;g.w.product.Sb=g.w.Sb;g.w.product.ma=g.w.ma;g.w.product.qc=g.w.qc;g.w.product.Wk=g.w.product.ug?g.w.product.oo:g.bb("Firefox");g.w.product.jC=function(){return rb()||g.bb("iPod")};
g.w.product.Ai=g.w.product.ug?g.w.product.tg:g.w.product.jC();g.w.product.zi=g.w.product.ug?g.w.product.qg:g.bb("iPad");g.w.product.ANDROID=g.w.product.ug?g.w.product.lh:g.qb();g.w.product.CHROME=g.w.product.ug?g.w.product.jo:g.ob();g.w.product.nC=function(){return g.pb()&&!g.sb()};
g.w.product.vg=g.w.product.ug?g.w.product.to:g.w.product.nC();var yb,xb;yb=null;g.Ab=null;xb=null;g.Fb="function"==typeof window.Uint8Array;g.Bb.prototype.Ne=function(){Cb(this);return this.ec};
g.Bb.prototype.W=g.Fb?function(){var a=window.Uint8Array.prototype.toJSON;window.Uint8Array.prototype.toJSON=function(){return zb(this)};
try{return JSON.stringify(this.ec&&this.Ne(),Db)}finally{window.Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.Ne(),Db)};
g.Bb.prototype.toString=function(){Cb(this);return this.ec.toString()};
g.Bb.prototype.clone=function(){return new this.constructor(Eb(this.Ne()))};g.f=g.Gb.prototype;g.f.isEnabled=function(){return window.navigator.cookieEnabled};
g.f.set=function(a,b,c,d,e,h){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.sa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";h=h?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.$c)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+h};
g.f.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,h;e<d.length;e++){h=(0,g.Wa)(d[e]);if(0==h.lastIndexOf(c,0))return h.substr(c.length);if(h==a)return""}return b};
g.f.remove=function(a,b,c){var d=g.sa(this.get(a));this.set(a,"",0,b,c);return d};
g.f.Pc=function(){return g.Hb(this).keys};
g.f.Jb=g.ca(1);g.f.isEmpty=function(){return!this.C.cookie};
g.f.Pb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.f.Xd=g.ca(3);g.f.clear=function(){for(var a=g.Hb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.ih=new g.Gb("undefined"==typeof window.document?null:window.document);g.ih.F=3950;var naa;naa=!g.w.ma||g.w.Bc(9);g.tca=!g.w.Bb&&!g.w.ma||g.w.ma&&g.w.Bc(9)||g.w.Bb&&g.w.fb("1.9.1");g.Ek=g.w.ma&&!g.w.fb("9");g.uca=g.w.ma||g.w.Sb||g.w.nb;g.vca=g.w.ma;g.wca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.xca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Fk=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.Lb.prototype.ge=!0;g.Lb.prototype.ud=function(){return this.C};
g.Lb.prototype.tm=!0;g.Lb.prototype.Gf=function(){return 1};
var Nb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Kb={};g.Ob("about:blank");g.Sb.prototype.ge=!0;g.Rb={};g.Sb.prototype.ud=function(){return this.C};
g.Gk=g.Tb("");g.Hk=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.Ik=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Vb.prototype.ge=!0;g.Ub={};g.Vb.prototype.ud=function(){return this.C};
g.Jk=g.Wb("");g.Yb.prototype.tm=!0;g.Yb.prototype.Gf=function(){return this.F};
g.Yb.prototype.ge=!0;g.Yb.prototype.ud=function(){return this.C};
var Xb={};g.$b("<!DOCTYPE html>",0);g.Kk=g.$b("",0);g.Lk=g.$b("<br>",0);g.yca=g.Jb(function(){var a=window.document.createElement("div");a.innerHTML="<div><div></div></div>";var b=a.firstChild.firstChild;a.innerHTML="";return!b.parentElement});g.f=g.dc.prototype;g.f.clone=function(){return new g.dc(this.x,this.y)};
g.f.equals=function(a){return a instanceof g.dc&&g.ec(this,a)};
g.f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.f.translate=function(a,b){a instanceof g.dc?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.wa(b)&&(this.y+=b));return this};
g.f.scale=function(a,b){var c=g.wa(b)?b:a;this.x*=a;this.y*=c;return this};g.f=g.gc.prototype;g.f.clone=function(){return new g.gc(this.width,this.height)};
g.f.Hw=function(){return this.width*this.height};
g.f.aspectRatio=function(){return this.width/this.height};
g.f.isEmpty=function(){return!this.Hw()};
g.f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.scale=function(a,b){var c=g.wa(b)?b:a;this.width*=a;this.height*=c;return this};var ic={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var zca;zca={MP:"allow-forms",NP:"allow-modals",OP:"allow-orientation-lock",PP:"allow-pointer-lock",QP:"allow-popups",RP:"allow-popups-to-escape-sandbox",SP:"allow-presentation",TP:"allow-same-origin",UP:"allow-scripts",VP:"allow-top-navigation",WP:"allow-top-navigation-by-user-activation"};g.Aca=g.Jb(function(){return g.wc(zca)});g.f=g.zc.prototype;g.f.clone=function(){return new g.zc(this.left,this.top,this.width,this.height)};
g.f.contains=function(a){return a instanceof g.dc?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.translate=function(a,b){a instanceof g.dc?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.wa(b)&&(this.top+=b));return this};
g.f.scale=function(a,b){var c=g.wa(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.Mk=g.w.Bb?"MozUserSelect":g.w.nb||g.w.qc?"WebkitUserSelect":null;var Ec=g.Dc(window),Fc=Ec&&window.parent||window;var paa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Bca=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;Uc.prototype.getUrl=function(a,b,c,d){a=a+"//"+b+c;var e=raa(this)-c.length-d.length;if(0>e)return"";this.C.sort(function(a,b){return a-b});
c=null;b="";for(var h=0;h<this.C.length;h++)for(var k=this.C[h],l=this.F[k],m=0;m<l.length;m++){if(!e){c=null==c?k:c;break}var r=Xc(l[m],this.D,",$");if(r){r=b+r;if(e>=r.length){e-=r.length;a+=r;b=this.D;break}else this.H&&(b=e,r[b-1]==this.D&&--b,a+=r.substr(0,b),b=this.D,e=0);c=null==c?k:c}}h="";this.G&&null!=c&&(h=b+this.G+"="+c);return a+h+d};var Nk=null;var fd=g.n.performance,Cca=!!(fd&&fd.mark&&fd.measure&&fd.clearMarks),dd=g.Jb(function(){var a;if(a=Cca){var b;if(null===Nk){Nk="";try{a="";try{a=g.n.top.location.hash}catch(c){a=g.n.location.hash}a&&(Nk=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Nk;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
ed.prototype.disable=function(){this.C=!1;this.events!=this.F.google_js_reporting_queue&&(dd()&&g.z(this.events,g.gd),this.events.length=0)};
ed.prototype.start=function(a,b){if(!this.C)return null;var c=bd()||ad();c=new saa(a,b,c);var d="goog_"+c.uniqueId+"_start";fd&&dd()&&fd.mark(d);return c};
ed.prototype.end=function(a){if(this.C&&g.wa(a.value)){var b=bd()||ad();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";fd&&dd()&&fd.mark(b);this.C&&this.events.push(a)}};kd.prototype.F=function(a,b,c,d,e){e=e||"jserror";try{var h=new Uc;h.H=!0;Yc(h,1,"context",a);b.error&&b.meta&&b.id||(b=g.nd(b));b.msg&&Yc(h,2,"msg",b.msg.substring(0,512));b.file&&Yc(h,3,"file",b.file);0<b.line&&Yc(h,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(S){}b=[k];h.C.push(5);h.F[5]=b;var l=g.Tc(),m=new Sc(g.n.location.href,g.n,!1);b=null;var r=l.length-1;for(d=r;0<=d;--d){var x=l[d];!b&&Bca.test(x.url)&&(b=x);if(x.url&&!x.Br){m=x;break}}x=null;var A=l.length&&l[r].url;0!=m.depth&&
A&&(x=l[r]);var J=new qaa(m,x);J.F&&Yc(h,6,"top",J.F.url||"");Yc(h,7,"url",J.C.url||"");g.Zc(this.D,e,h,c)}catch(S){try{g.Zc(this.D,e,{context:"ecmserr",rctx:a,msg:g.md(S),url:J&&J.C.url},c)}catch(ba){}}return!0};
g.ia(ld,Ic);var cd,hd;cd=g.Hc();hd=new ed;g.id=new function(){var a=void 0===a?g.wk:a;this.G="http:"===a.location.protocol?"http:":"https:";this.F="pagead2.googlesyndication.com";this.D="/pagead/gen_204?id=";this.C=.01};
g.Ok=new kd;"complete"==cd.document.readyState?cd.google_measure_js_timing||hd.disable():hd.C&&xc(cd,"load",function(){cd.google_measure_js_timing||hd.disable()});var Pk;Pk={};g.Qk=(Pk[8]="google_prev_ad_formats_by_region",Pk[9]="google_prev_ad_slotnames_by_region",Pk);g.Rk=(new Date).getTime();g.B.prototype.Kc=!1;g.B.prototype.sb=function(){return this.Kc};
g.B.prototype.dispose=function(){this.Kc||(this.Kc=!0,this.X())};
g.B.prototype.X=function(){if(this.jc)for(;this.jc.length;)this.jc.shift()()};g.ud.prototype.stopPropagation=function(){this.F=!0};
g.ud.prototype.preventDefault=function(){this.tu=!1};var Nd,Eca,yaa;g.Dca=!g.w.ma||g.w.Bc(9);Nd=!g.w.ma||g.w.Bc(9);Eca=g.w.ma&&!g.w.fb("9");yaa=function(){if(!g.n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.n.addEventListener("test",g.xa,b),g.n.removeEventListener("test",g.xa,b)}catch(c){}return a}();g.Sk=vd("TransitionEnd");
g.Tk={wQ:"click",aX:"rightclick",fR:"dblclick",oh:"mousedown",ph:"mouseup",TU:"mouseover",SU:"mouseout",RU:"mousemove",PU:"mouseenter",QU:"mouseleave",nh:"mousecancel",iX:"selectionchange",jX:"selectstart",OZ:"wheel",US:"keypress",SS:"keydown",VS:"keyup",rQ:"blur",YR:"focus",gR:"deactivate",ZR:"focusin",aS:"focusout",uQ:"change",TW:"reset",hX:"select",IX:"submit",CS:"input",zW:"propertychange",FR:"dragstart",zR:"drag",CR:"dragenter",ER:"dragover",DR:"dragleave",DROP:"drop",AR:"dragend",SX:"touchstart",
RX:"touchmove",QX:"touchend",PX:"touchcancel",qQ:"beforeunload",SQ:"consolemessage",VQ:"contextmenu",kR:"devicechange",lR:"devicemotion",mR:"deviceorientation",qR:"DOMContentLoaded",ERROR:"error",sS:"help",LOAD:"load",xU:"losecapture",wV:"orientationchange",FW:"readystatechange",VW:"resize",dX:"scroll",eZ:"unload",sQ:"canplay",tQ:"canplaythrough",GR:"durationchange",KR:"emptied",ENDED:"ended",sU:"loadeddata",tU:"loadedmetadata",PAUSE:"pause",PLAY:"play",PLAYING:"playing",DW:"ratechange",fX:"seeked",
gX:"seeking",EX:"stalled",KX:"suspend",NX:"timeupdate",oZ:"volumechange",pZ:"waiting",BX:"sourceopen",AX:"sourceended",zX:"sourceclosed",pP:"abort",UPDATE:"update",iZ:"updatestart",gZ:"updateend",qS:"hashchange",BV:"pagehide",CV:"pageshow",vW:"popstate",YQ:"copy",KV:"paste",cR:"cut",kQ:"beforecopy",lQ:"beforecut",oQ:"beforepaste",vV:"online",qV:"offline",MESSAGE:"message",RQ:"connect",DS:"install",qP:"activate",WR:"fetch",cS:"foreignfetch",IU:"messageerror",FX:"statechange",hZ:"updatefound",XQ:"controllerchange",
aQ:vd("AnimationStart"),YP:vd("AnimationEnd"),ZP:vd("AnimationIteration"),TX:g.Sk,nW:"pointerdown",tW:"pointerup",mW:"pointercancel",qW:"pointermove",sW:"pointerover",rW:"pointerout",oW:"pointerenter",pW:"pointerleave",kS:"gotpointercapture",yU:"lostpointercapture",UU:"MSGestureChange",VU:"MSGestureEnd",WU:"MSGestureHold",XU:"MSGestureStart",YU:"MSGestureTap",ZU:"MSGotPointerCapture",aV:"MSInertiaStart",bV:"MSLostPointerCapture",cV:"MSPointerCancel",dV:"MSPointerDown",eV:"MSPointerEnter",fV:"MSPointerHover",
gV:"MSPointerLeave",hV:"MSPointerMove",iV:"MSPointerOut",jV:"MSPointerOver",kV:"MSPointerUp",TEXT:"text",MX:g.w.ma?"textinput":"textInput",NQ:"compositionstart",OQ:"compositionupdate",MQ:"compositionend",mQ:"beforeinput",NR:"exit",qU:"loadabort",rU:"loadcommit",uU:"loadredirect",vU:"loadstart",wU:"loadstop",WW:"responsive",xX:"sizechanged",fZ:"unresponsive",kZ:"visibilitychange",HX:"storage",vR:"DOMSubtreeModified",rR:"DOMNodeInserted",tR:"DOMNodeRemoved",uR:"DOMNodeRemovedFromDocument",sR:"DOMNodeInsertedIntoDocument",
oR:"DOMAttrModified",pR:"DOMCharacterDataModified",pQ:"beforeprint",LP:"afterprint",nQ:"beforeinstallprompt",eQ:"appinstalled"};g.v(g.wd,g.ud);var Fca={2:"touch",3:"pen",4:"mouse"};
g.wd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.w.Bb&&(g.vb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.w.qd?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.ta(a.pointerType)?a.pointerType:Fca[a.pointerType]||"";this.state=a.state;this.zc=a;a.defaultPrevented&&
this.preventDefault()};
g.wd.prototype.stopPropagation=function(){g.wd.M.stopPropagation.call(this);this.zc.stopPropagation?this.zc.stopPropagation():this.zc.cancelBubble=!0};
g.wd.prototype.preventDefault=function(){g.wd.M.preventDefault.call(this);var a=this.zc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Eca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var xd="closure_listenable_"+(1E6*Math.random()|0),vaa=0;g.f=g.Bd.prototype;g.f.add=function(a,b,c,d,e){var h=a.toString();a=this.listeners[h];a||(a=this.listeners[h]=[],this.C++);var k=Dd(a,b,d,e);-1<k?(b=a[k],c||(b.Li=!1)):(b=new waa(b,this.src,h,!!d,e),b.Li=c,a.push(b));return b};
g.f.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Dd(e,b,c,d);return-1<b?(zd(e[b]),g.Ma(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.f.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,zd(d[e]);delete this.listeners[c];this.C--}return b};
g.f.Gg=g.ca(5);g.f.Cf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Dd(a,b,c,d));return-1<e?a[e]:null};
g.f.hasListener=function(a,b){var c=g.sa(a),d=c?a.toString():"",e=g.sa(b);return g.db(this.listeners,function(a){for(var h=0;h<a.length;++h)if(!(c&&a[h].type!=d||e&&a[h].capture!=b))return!0;return!1})};var Jd="closure_lm_"+(1E6*Math.random()|0),Qd={},Md=0,Td="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.Ud,g.B);g.Ud.prototype[xd]=!0;g.f=g.Ud.prototype;g.f.ij=function(){return this.fn};
g.f.gi=g.ca(6);g.f.addEventListener=function(a,b,c,d){g.Fd(this,a,b,c,d)};
g.f.removeEventListener=function(a,b,c,d){g.Od(this,a,b,c,d)};
g.f.dispatchEvent=function(a){var b=this.ij();if(b){var c=[];for(var d=1;b;b=b.ij())c.push(b),++d}b=this.ww;d=a.type||a;if(g.ta(a))a=new g.ud(a,b);else if(a instanceof g.ud)a.target=a.target||b;else{var e=a;a=new g.ud(d,b);g.mb(a,e)}e=!0;if(c)for(var h=c.length-1;!a.F&&0<=h;h--){var k=a.currentTarget=c[h];e=Vd(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=Vd(k,d,!0,a)&&e,a.F||(e=Vd(k,d,!1,a)&&e));if(c)for(h=0;!a.F&&h<c.length;h++)k=a.currentTarget=c[h],e=Vd(k,d,!1,a)&&e;return e};
g.f.X=function(){g.Ud.M.X.call(this);this.removeAllListeners();this.fn=null};
g.f.O=function(a,b,c,d){return this.Hd.add(String(a),b,!1,c,d)};
g.f.cf=function(a,b,c,d){return this.Hd.add(String(a),b,!0,c,d)};
g.f.Xa=function(a,b,c,d){return this.Hd.remove(String(a),b,c,d)};
g.f.removeAllListeners=function(a){return this.Hd?this.Hd.removeAll(a):0};
g.f.Gg=g.ca(4);g.f.Cf=function(a,b,c,d){return this.Hd.Cf(String(a),b,c,d)};
g.f.hasListener=function(a,b){return this.Hd.hasListener(g.sa(a)?String(a):void 0,b)};Wd.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var fe;var ge=new Wd(function(){return new $d},function(a){a.reset()});
Zd.prototype.add=function(a,b){var c=ge.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
Zd.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
$d.prototype.set=function(a,b){this.yc=a;this.scope=b;this.next=null};
$d.prototype.reset=function(){this.next=this.scope=this.yc=null};var ae,be=!1,ce=new Zd;le.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var me=new Wd(function(){return new le},function(a){a.reset()});
g.ke.prototype.then=function(a,b,c){return qe(this,g.Ca(a)?a:null,g.Ca(b)?b:null,c)};
g.he(g.ke);g.ke.prototype.cancel=function(a){0==this.C&&de(function(){var b=new g.ye(a);se(this,b)},this)};
g.ke.prototype.W=function(a){this.C=0;g.je(this,2,a)};
g.ke.prototype.N=function(a){this.C=0;g.je(this,3,a)};
g.ke.prototype.J=function(){for(var a;a=te(this);)ve(this,a,this.C,this.R);this.K=!1};
var Ae=Yd;g.v(g.ye,g.Ga);g.ye.prototype.name="cancel";g.v(g.De,g.B);g.f=g.De.prototype;g.f.jb=0;g.f.X=function(){g.De.M.X.call(this);this.stop();delete this.C;delete this.F};
g.f.start=function(a){this.stop();this.jb=g.Be(this.kc,g.sa(a)?a:this.D)};
g.f.stop=function(){this.isActive()&&g.Ce(this.jb);this.jb=0};
g.f.Af=g.ca(7);g.f.isActive=function(){return 0!=this.jb};
g.f.iq=function(){this.jb=0;this.C&&this.C.call(this.F)};g.v(Ee,Faa);Ee.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Ee.prototype.update=function(a,b){if(null!=a){g.sa(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.K,h=this.D;d<b;){if(0==h)for(;d<=c;)Fe(this,a,d),d+=this.F;if(g.ta(a))for(;d<b;){if(e[h]=a.charCodeAt(d),++h,++d,h==this.F){Fe(this,e);h=0;break}}else for(;d<b;)if(e[h]=a[d],++h,++d,h==this.F){Fe(this,e);h=0;break}}this.D=h;this.H+=b}};
Ee.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.K[c]=b&255,b/=256;Fe(this,this.K);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.Ie="StopIteration"in g.n?g.n.StopIteration:{message:"StopIteration",stack:""};g.He.prototype.next=function(){throw g.Ie;};
g.He.prototype.rd=function(){return this};g.f=g.Me.prototype;g.f.Pb=function(){return this.D};
g.f.Jb=g.ca(0);g.f.Pc=function(){g.Oe(this);return this.C.concat()};
g.f.Xd=g.ca(2);g.f.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Pb())return!1;var c=b||Haa;g.Oe(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.f.isEmpty=function(){return 0==this.D};
g.f.clear=function(){this.F={};this.kf=this.D=this.C.length=0};
g.f.remove=function(a){return g.Ne(this.F,a)?(delete this.F[a],this.D--,this.kf++,this.C.length>2*this.D&&g.Oe(this),!0):!1};
g.f.get=function(a,b){return g.Ne(this.F,a)?this.F[a]:b};
g.f.set=function(a,b){g.Ne(this.F,a)||(this.D++,this.C.push(a),this.kf++);this.F[a]=b};
g.f.forEach=function(a,b){for(var c=this.Pc(),d=0;d<c.length;d++){var e=c[d],h=this.get(e);a.call(b,h,e,this)}};
g.f.clone=function(){return new g.Me(this)};
g.f.rd=function(a){g.Oe(this);var b=0,c=this.kf,d=this,e=new g.He;e.next=function(){if(c!=d.kf)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Ie;var e=d.C[b++];return a?e:d.F[e]};
return e};var Se={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.v(g.Te,g.B);g.f=g.Te.prototype;g.f.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.f.Cd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.xa):(c&&g.Na(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.f.qa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,h=arguments.length;e<h;e++)d[e-1]=arguments[e];if(this.K)for(e=0;e<c.length;e++){var k=c[e];Kaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,h=c.length;e<h;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.Cd(c)}}return 0!=e}return!1};
g.f.clear=function(a){if(a){var b=this.F[a];b&&((0,g.z)(b,this.Cd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.f.Pb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Pb(b);return a};
g.f.X=function(){g.Te.M.X.call(this);this.clear();this.D.length=0};g.Ve.prototype.set=function(a,b){g.sa(b)?this.C.set(a,g.Qe(b)):this.C.remove(a)};
g.Ve.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Ve.prototype.remove=function(a){this.C.remove(a)};g.v(We,g.Ve);We.prototype.set=function(a,b){We.M.set.call(this,a,Ye(b))};
We.prototype.F=function(a){a=We.M.get.call(this,a);if(!g.sa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
We.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.sa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.Ze,We);g.Ze.prototype.set=function(a,b,c){if(b=Ye(b)){if(c){if(c<(0,g.$c)()){g.Ze.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.$c)()}g.Ze.M.set.call(this,a,b)};
g.Ze.prototype.F=function(a,b){var c=g.Ze.M.F.call(this,a);if(c)if(!b&&g.$e(c))g.Ze.prototype.remove.call(this,a);else return c};g.v(af,Laa);af.prototype.Pb=function(){var a=0;g.Ke(this.rd(!0),function(){a++});
return a};
af.prototype.clear=function(){var a=Gaa(this.rd(!0)),b=this;(0,g.z)(a,function(a){b.remove(a)})};g.v(g.bf,af);g.f=g.bf.prototype;g.f.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.f.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.f.get=function(a){a=this.C.getItem(a);if(!g.ta(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeItem(a)};
g.f.Pb=function(){return this.C.length};
g.f.rd=function(a){var b=0,c=this.C,d=new g.He;d.next=function(){if(b>=c.length)throw g.Ie;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.ta(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){this.C.clear()};
g.f.key=function(a){return this.C.key(a)};g.v(g.cf,g.bf);g.v(ef,af);var Maa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},df=null;g.f=ef.prototype;g.f.isAvailable=function(){return!!this.C};
g.f.set=function(a,b){this.C.setAttribute(ff(a),b);gf(this)};
g.f.get=function(a){a=this.C.getAttribute(ff(a));if(!g.ta(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeAttribute(ff(a));gf(this)};
g.f.Pb=function(){return hf(this).attributes.length};
g.f.rd=function(a){var b=0,c=hf(this).attributes,d=new g.He;d.next=function(){if(b>=c.length)throw g.Ie;var d=c[b++];if(a)return(0,window.decodeURIComponent)(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!g.ta(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){for(var a=hf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);gf(this)};g.v(jf,af);jf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
jf.prototype.get=function(a){return this.F.get(this.C+a)};
jf.prototype.remove=function(a){this.F.remove(this.C+a)};
jf.prototype.rd=function(a){var b=this.F.rd(!0),c=this,d=new g.He;d.next=function(){for(var d=b.next();d.substr(0,c.C.length)!=c.C;)d=b.next();return a?d.substr(c.C.length):c.F.get(d)};
return d};g.Rg=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Uk="Microsoft Internet Explorer"==window.navigator.appName;g.mf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.mf,void 0);var tf={};var Gca=g.q("ytPubsubPubsubInstance")||new g.Te;g.Te.prototype.subscribe=g.Te.prototype.subscribe;g.Te.prototype.unsubscribeByKey=g.Te.prototype.Cd;g.Te.prototype.publish=g.Te.prototype.qa;g.Te.prototype.clear=g.Te.prototype.clear;g.p("ytPubsubPubsubInstance",Gca,void 0);var zf=g.q("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",zf,void 0);var Bf=g.q("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",Bf,void 0);var Af=g.q("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",Af,void 0);var Oaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Paa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.If.prototype.initialize=function(a,b,c,d){b?(this.F=!0,g.Gf(b,function(){this.F=!1;window.botguard?Jf(this,c,d):(g.Hf(b),g.pf(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this))):a&&(eval(a),window.botguard?Jf(this,c,d):g.pf(Error("Unable to load Botguard from JS"),"WARNING"))};
g.If.prototype.bf=function(){return null!==this.C};
g.If.prototype.invoke=function(a){a=void 0===a?{}:a;return this.C?this.C.invoke(void 0,void 0,a):null};
g.If.prototype.dispose=function(){this.C=null};g.ia(Pf,Qaa);Pf.prototype.start=function(){var a=g.q("yt.scheduler.instance.start");a&&a()};
Pf.prototype.pause=function(){var a=g.q("yt.scheduler.instance.pause");a&&a()};
g.ya(Pf);Pf.getInstance();g.Uf=new g.If;(0,g.$c)();var Vf=g.sa(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.sa(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var ag,Waa,fg;ag={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Waa="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
fg=!1;g.Vk=gg;kg.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.ie(a)?a:g.mg(a)):2===this.F&&b?(a=b.call(c,this.C),g.ie(a)?a:g.lg(a)):this};
kg.prototype.getValue=function(){return this.C};
g.he(kg);var Hca=0,$aa=g.w.nb?"webkit":g.w.Bb?"moz":g.w.ma?"ms":g.w.Sb?"o":"",ng=g.q("ytDomDomGetNextId")||function(){return++Hca};
g.p("ytDomDomGetNextId",ng,void 0);var aba={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.qg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.qg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.qg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ug=g.q("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",ug,void 0);var wg=g.q("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",wg,void 0);var xg=g.Jb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.v(g.Ag,g.B);g.Ag.prototype.W=function(a){this.C=new g.dc(g.sg(a),g.tg(a))};
g.Ag.prototype.R=function(){if(this.C){var a=g.Rg();if(0!=this.D){var b=g.fc(this.K,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.kc();this.G=b}this.D=a;this.K=this.C;this.H=(this.H+1)%4}};
g.Ag.prototype.X=function(){g.xf(this.N);g.I(this.J)};g.ia(Bg,g.B);Bg.prototype.Xa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.Ae);break}};
Bg.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.Ae)}g.B.prototype.X.call(this)};var bba={enablejsapi:1},cba={};Cg.prototype.clone=function(){var a=new Cg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.za(c)?a[b]=g.kb(c):a[b]=c}return a};var Gg={},Fg=0;var gba,Xg,Yg,fba,Sg,hba,Kg;gba=Math.pow(2,16)-1;Xg=null;Yg=0;fba={log_event:"events",log_interaction:"interactions"};Sg=Object.create(null);Sg.log_event="GENERIC_EVENT_LOGGING";Sg.log_interaction="INTERACTION_LOGGING";hba=new window.Set(["log_event"]);Kg={};g.Og=0;g.Pg=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.Pg,void 0);var Ig=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",Ig,void 0);
var Qg=g.q("ytLoggingTransportDispatchedStats_")||{};g.p("ytLoggingTransportDispatchedStats_",Qg,void 0);var Tg=g.q("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",Tg,void 0);var ch={};g.lh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.$c)()+1E3*c);return}catch(h){}var e="";if(d)try{e=(0,window.escape)(g.Qe(b))}catch(h){return}else e=(0,window.escape)(b);g.jh(a,e,c,this.F)};
g.lh.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.ih.get(""+a,void 0))&&(c=(0,window.unescape)(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.lh.prototype.remove=function(a){this.C&&this.C.remove(a);g.kh(a,"/",this.F)};var mh=new g.lh("yt.innertube");var wh=g.q("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",wh,void 0);var xh=0;var yh=(0,g.$c)().toString();var Ch=g.q("ytLoggingTimeDocumentNonce_")||zh(),Dh,Ah;g.p("ytLoggingTimeDocumentNonce_",Ch,void 0);Dh=0;g.Bh=null;Ah=null;g.p("yt.logging.screen.getRootVeType",Ih,void 0);g.p("yt.logging.screen.getCurrentCsn",g.Kh,void 0);g.p("yt.logging.screen.setCurrentScreen",g.Lh,void 0);g.f=g.Nh.prototype;g.f.SL=function(){this.bf()||this.init()};
g.f.enable=function(){this.C=1;(0,g.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.SL,this),this.subscribe("dispose-"+a,this.dispose,this),g.D("PAGE_NAME")==a&&g.Oh(this))},this)};
g.f.init=function(){g.Nf(this.F);this.C=2;this.K&&this.K()};
g.f.bf=function(){return 2==this.C};
g.f.dispose=function(){this.C=3;g.Nf(this.F);this.H&&this.H()};
g.f.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.pf(a)}};
g.f.subscribe=function(a,b,c){a=g.Cf(a,b,c);this.G.push(a);return a};
g.f.clear=function(){g.Df(this.G);this.G=[]};var Ph=g.q("yt.modules.registry_")||{};g.p("yt.modules.registry_",Ph,void 0);g.Sh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.Sh,void 0);var Xh={},mba=0;var nba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.di.prototype.toString=function(){return this.topic};var Ica=g.q("ytPubsub2Pubsub2Instance")||new g.Te;g.Te.prototype.subscribe=g.Te.prototype.subscribe;g.Te.prototype.unsubscribeByKey=g.Te.prototype.Cd;g.Te.prototype.publish=g.Te.prototype.qa;g.Te.prototype.clear=g.Te.prototype.clear;g.p("ytPubsub2Pubsub2Instance",Ica,void 0);g.Wk=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.Wk,void 0);g.Xk=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.Xk,void 0);
g.Yk=g.q("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.Yk,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var gi=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.ia(ji,g.ci);g.ia(ki,g.ci);var vba=new g.di("aft-recorded",ji),Aba=new g.di("timing-sent",ki);var zba,ri,Zk,Mi,xba,sba,wba,$k,Ni,Ji,li,uba,oj,Xba;zba={vc:!0};
ri={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};Zk={};
Mi=(Zk.ad_allowed="adTypesAllowed",Zk.yt_abt="adBreakType",Zk.ad_cpn="adClientPlaybackNonce",Zk.ad_docid="adVideoId",Zk.yt_ad_an="adNetworks",Zk.ad_at="adType",Zk.browse_id="browseId",Zk.p="httpProtocol",Zk.t="transportProtocol",Zk.cpn="clientPlaybackNonce",Zk.csn="clientScreenNonce",Zk.docid="videoId",Zk.is_continuation="isContinuation",Zk.is_nav="isNavigation",Zk.b_p="kabukiInfo.browseParams",Zk.is_prefetch="kabukiInfo.isPrefetch",Zk.is_secondary_nav="kabukiInfo.isSecondaryNav",Zk.prev_browse_id=
"kabukiInfo.prevBrowseId",Zk.query_source="kabukiInfo.querySource",Zk.voz_type="kabukiInfo.vozType",Zk.yt_lt="loadType",Zk.yt_ad="isMonetized",Zk.nr="webInfo.navigationReason",Zk.ncnp="webInfo.nonPreloadedNodeCount",Zk.paused="playerInfo.isPausedOnLoad",Zk.fmt="playerInfo.itag",Zk.yt_pl="watchInfo.isPlaylist",Zk.yt_ad_pr="prerollAllowed",Zk.yt_red="isRedSubscriber",Zk.st="serverTimeMs",Zk.aq="tvInfo.appQuality",Zk.br_trs="tvInfo.bedrockTriggerState",Zk.label="tvInfo.label",Zk.is_mdx="tvInfo.isMdx",
Zk.preloaded="tvInfo.isPreloaded",Zk.query="unpluggedInfo.query",Zk.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Zk.yt_vst="videoStreamType",Zk.vph="viewportHeight",Zk.vpw="viewportWidth",Zk.yt_vis="isVisible",Zk);xba="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
sba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",app_startup:"LATENCY_ACTION_APP_STARTUP",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.comments":"LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",
"channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",chips:"LATENCY_ACTION_CHIPS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",prefetch:"LATENCY_ACTION_PREFETCH",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",search_zero_state:"LATENCY_ACTION_SEARCH_ZERO_STATE",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH",
"watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH",wn_comments:"LATENCY_ACTION_LOAD_COMMENTS","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"};
wba="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" ");$k={};Ni=($k.yt_vst="VIDEO_STREAM_TYPE_",$k);Ji=!1;li=!1;uba=(0,g.t)(gi.clearResourceTimings||gi.webkitClearResourceTimings||gi.mozClearResourceTimings||gi.msClearResourceTimings||gi.oClearResourceTimings||g.xa,gi);oj=mi;Xba=qi;g.dj=oi;g.ia(Vi,g.B);g.f=Vi.prototype;
g.f.Om=function(a){this.sb()||(this.mb=a=g.Dg(a),this.C=a.clone(),this.F=this.C.attrs.id||this.F,"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N),this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F),this.C.args.enablejsapi="1",this.C.args.playerapiid=this.N,this.ha||(this.ha=cj(this,this.C.args.jsapicallback||"onYouTubePlayerReady")),this.C.args.jsapicallback=null,(a=this.C.attrs.width)&&g.Cc(this.H,Number(a)||a),(a=this.C.attrs.height)&&g.Bc(this.H,Number(a)||a),Bba(this),
this.K&&Wi(this))};
g.f.Tx=function(){return this.mb};
g.f.dD=function(){return this.K};
g.f.Ci=function(a,b){var c=this,d=cj(this,b);if(d){if(!g.Ka(this.wb,a)&&!this.D[a]){var e=Dba(this,a);this.W&&this.W(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.K&&g.uf(function(){d(c.api)},0)}};
g.f.CL=function(a,b){if(!this.sb()){var c=cj(this,b);c&&g.Ue(this.J,a,c)}};
g.f.vw=function(a){g.F("a11y-announce",a)};
g.f.jH=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.f.kH=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.f.Jy=function(){return this.ka||(Xi(this)?"html5":null)};
g.f.qy=function(){return this.eb};
g.f.cancel=function(){if(this.R){var a=this.R,b=g.Ff(this.C.assets.js);window.spf.script.ignore(b,a)}g.wf(this.rb);this.V=!1};
g.f.X=function(){$i(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.pf(b)}this.Ra=null;for(var a in this.D)g.n[this.D[a]]=null;this.mb=this.C=this.api=null;delete this.oa;delete this.H;g.B.prototype.X.call(this)};g.fj={};g.ej="player_uid_"+(1E9*Math.random()>>>0);var mj=null;g.al=window.performance&&window.performance.memory;g.Zj={};var vj=0,rj=[],uj=[],nj=0,sj={},tj={},pj=new g.De(Mba,1E3);var xj=["server_prefetched_vast","vmap"];var zj,Ej;g.Dj=null;Ej="";var Gj=null,Jj=[];var Nj,fk,ek,Pj,Oj,Tba,Wba,Uba,Vba,ak;Pj=0;Oj=0;Tba=[900,60,"waiting"];Wba=[500,99,"waiting"];Uba=[300,60,"waiting"];Vba=[400,99,"waiting"];ak=[300,101,"done"];var mk=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.nf,void 0);g.p("yt.pushConfigArray",of,void 0);g.p("yt.getConfig",g.D,void 0);g.p("yt.config.set",g.nf,void 0);g.p("yt.config.pushArray",of,void 0);g.p("yt.config.get",g.D,void 0);g.p("yt.hasMsg",g.Uh,void 0);g.p("yt.setMsg",Th,void 0);g.p("yt.setGoogMsg",Vh,void 0);g.p("yt.msgs.has",g.Uh,void 0);g.p("yt.msgs.set",Th,void 0);g.p("yt.msgs.setGoog",Vh,void 0);g.p("yt.pubsub.publish",g.F,void 0);g.p("yt.pubsub.subscribe",g.Cf,void 0);
g.p("ytcsi.tick",g.dj,void 0);g.v(pk,g.Nh);
pk.prototype.enable=function(){window.onload=Rba;window.onunload=Sba;window.onerror=Naa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Lj),window.addEventListener("spfhistory",Mj),window.addEventListener("spfrequest",Rj),window.addEventListener("spfpartprocess",Vj),window.addEventListener("spfpartdone",Wj),window.addEventListener("spfprocess",Xj),window.addEventListener("spfdone",bk),window.addEventListener("spferror",ck),window.addEventListener("spfreload",
dk),window.addEventListener("spfjsbeforeunload",qk)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Zba),this.subscribe("dispose",$ba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
pk.prototype.init=function(){pk.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.D("PAGEFRAME_JS")){var b=g.D("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
a=g.D("JS_COMMON_MODULE");var d=g.D("JS_PAGE_MODULES");d||(d=[a]);a=g.D("JS_DELAY_LOAD",0);0<a?(g.wf(this.D),this.D=g.uf(function(){b&&g.Gf(b,c);window.spf.script.require(d)},a)):(b&&g.Gf(b,c),window.spf.script.require(d));
g.p("yt.abuse.player.botguardInitialized",Saa,void 0);g.p("yt.abuse.player.invokeBotguard",Taa,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",Raa,void 0);g.p("yt.player.exports.navigate",g.bi,void 0);g.p("yt.util.activity.init",g.bh,void 0);g.p("yt.util.activity.getTimeSinceActive",g.dh,void 0);g.p("yt.util.activity.setTimestamp",g.$g,void 0);Fj(g.q("ytplayer.config"));g.q("ytspf.enabled")&&Pba();tba();g.D("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.Sf("service_worker_enabled")?oca():mca())};
pk.prototype.dispose=function(){g.wf(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.xf(zj);if(a=g.Bj())a.removeEventListener("onReady",Aj),a.removeEventListener("onStateChange",Aj);yi(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.E(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.zg(a);pk.M.dispose.call(this)};
pk.prototype.disable=function(){pk.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Lj),window.removeEventListener("spfhistory",Mj),window.removeEventListener("spfrequest",Rj),window.removeEventListener("spfpartprocess",Vj),window.removeEventListener("spfpartdone",Wj),window.removeEventListener("spfprocess",Xj),window.removeEventListener("spfdone",bk),window.removeEventListener("spferror",ck),window.removeEventListener("spfreload",dk),window.removeEventListener("spfjsbeforeunload",
qk));window.onload=null;window.onunload=null;window.onerror=null};
g.Rh(new pk);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:01:06 Nov 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:36:34 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2461.392
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.057
  cdx.remote: 0.055
  esindex: 0.01
  LoadShardBlock: 2368.254 (3)
  PetaboxLoader3.datanode: 2261.779 (5)
  load_resource: 161.314 (2)
  PetaboxLoader3.resolve: 61.409 (2)
*/