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

var _yt_www={};(function(g){var window=this;var ca,aaa,ia,ha,ja,ma,oa,daa,eaa,Ja,naa,ub,vb,Bb,Eb,Jb,qaa,raa,paa,saa,Hc,Oc,Qc,Sc,Rc,Tc,taa,uaa,Wc,Vc,Yc,Zc,bd,vaa,waa,cd,xaa,zaa,nd,qd,rd,pd,vd,Aaa,yd,Gd,Fd,Caa,Jd,Kd,Ld,Nd,Daa,Od,Pd,Ud,Eaa,Vd,ae,de,Faa,ie,ne,ge,ee,Haa,le,je,ke,pe,Gaa,oe,ye,Iaa,Ce,Ee,Fe,Kaa,Ke,Le,Me,Laa,Te,Ue,Xe,Maa,Ze,$e,jf,sf,zf,Paa,Cf,Qaa,Raa,Saa,Lf,Jf,If,Of,Qf,Rf,Sf,Tf,Uf,Nf,Xf,Vf,ig,jg,kg,lg,tg,ug,$aa,Eg,Sg,aba,$g,Zg,bba,qh,cba,xh,Gh,Hh,Ih,Jh,Lh,Kh,fba,gba,Mh,Nh,Qh,Rh,Yh,Xh,bi,ci,di,jba,gi,ki,nba,Th,ai,ji,oi,qba,rba,ii,si,
mi,Sh,$h,li,ti,Oh,ei,Ph,lba,wi,yi,Di,Ei,Hi,Gi,Ji,Fi,Ki,ui,xi,xba,Li,Ni,Mi,yba,Ti,Ui,Si,zba,Aba,Bba,Zi,Cba,Dba,Eba,Fba,Gba,Hba,Jba,Kba,hj,jj,lj,pj,Lba,qj,sj,Mba,Nba,tj,uj,zj,Dj,Ej,Fj,Jj,Kj,Lj,Tba,Uba,Aj,Cj,yj,Sba,Bj,Oj,Pj,Vba,Qj,Rj,Sj,Wba,Xba,Tj,Uj,Vj,Wj,Yba,Zba,$ba,aca,bca,dca,fca,eca,cca,bk,ck,dk,ea,da,baa,Aa,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(){ca=function(){};
da.Symbol||(da.Symbol=aaa)};
aaa=function(a){return"jscomp_symbol_"+(a||"")+baa++};
ia=function(){ca();var a=da.Symbol.iterator;a||(a=da.Symbol.iterator=da.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ea(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(this)}});
ia=function(){}};
ha=function(a){var b=0;return ja(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
ja=function(a){ia();a={next:a};a[da.Symbol.iterator]=function(){return this};
return a};
g.ka=function(a){ia();var b=a[window.Symbol.iterator];return b?b.call(a):ha(a)};
g.la=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};
ma=function(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ea(c,d,{configurable:!0,writable:!0,value:f})}};
oa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.pa=function(a){return void 0!==a};
g.qa=function(a){return"string"==typeof a};
g.ra=function(a){return"number"==typeof a};
g.n=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.pa(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.q=function(a,b){for(var c=a.split("."),d=b||g.m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d};
g.sa=function(){};
g.ta=function(a){a.Ac=void 0;a.getInstance=function(){return a.Ac?a.Ac:a.Ac=new a}};
g.ua=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.va=function(a){return"array"==g.ua(a)};
g.wa=function(a){var b=g.ua(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.xa=function(a){return"function"==g.ua(a)};
g.ya=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ba=function(a){return a[Aa]||(a[Aa]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.t=daa:g.t=eaa;return g.t.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oW=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
g.Ca=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ca);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Da=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Ea=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Fa=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Ga=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ha=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Ka=function(a,b){for(var c=0,d=(0,g.Ia)(String(a)).split("."),e=(0,g.Ia)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",p=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];p=/(\d*)(\D*)(.*)/.exec(p)||["","","",""];if(0==l[0].length&&0==p[0].length)break;c=Ja(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==p[1].length?0:(0,window.parseInt)(p[1],10))||Ja(0==l[2].length,0==p[2].length)||Ja(l[2],p[2]);l=l[3];p=p[3]}while(0==c)}return c};
Ja=function(a,b){return a<b?-1:a>b?1:0};
g.La=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.Na=function(a,b,c){b=g.Ma(a,b,c);return 0>b?null:g.qa(a)?a.charAt(b):a[b]};
g.Ma=function(a,b,c){for(var d=a.length,e=g.qa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Pa=function(a,b){return 0<=(0,g.Oa)(a,b)};
g.Qa=function(a){return 0==a.length};
g.Sa=function(a,b){var c=(0,g.Oa)(a,b),d;(d=0<=c)&&g.Ra(a,c);return d};
g.Ra=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Ta=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Ua=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.wa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Va=function(a,b){this.x=g.pa(a)?a:0;this.y=g.pa(b)?b:0};
g.Wa=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Xa=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
g.Ya=function(a,b){return a&&b?b instanceof g.Xa?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1};
g.Za=function(a,b){this.width=a;this.height=b};
g.$a=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.ab=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return a.left=c,a.top=e,a.width=d-c,a.height=f-e,!0}return!1};
g.bb=function(a){return new g.Za(a.width,a.height)};
g.cb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.db=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.eb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.fb=function(a,b){for(var c=g.wa(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],g.pa(a));c++);return a};
g.gb=function(a,b){return null!==a&&b in a};
g.hb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.ib=function(a){for(var b in a)return!1;return!0};
g.jb=function(a,b){b in a&&delete a[b]};
g.kb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.lb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.nb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.ob=function(a){g.ob[" "](a);return a};
g.pb=function(a,b){try{return g.ob(a[b]),!0}catch(c){}return!1};
naa=function(a,b){var c=maa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
g.qb=function(a){try{return!!a&&null!=a.location.href&&g.pb(a,"foo")}catch(b){return!1}};
g.rb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.tb=function(a,b,c){a.addEventListener?a.addEventListener(b,c,sb?void 0:!1):a.attachEvent&&a.attachEvent("on"+b,c)};
ub=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,sb?void 0:!1):a.detachEvent&&a.detachEvent("on"+b,c)};
vb=function(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")};
g.xb=function(a){return-1!=g.wb.indexOf(a)};
g.yb=function(){return g.xb("Trident")||g.xb("MSIE")};
g.Ab=function(){return g.xb("Safari")&&!(g.zb()||g.xb("Coast")||g.xb("Opera")||g.xb("Edge")||g.xb("Silk")||g.xb("Android"))};
g.zb=function(){return(g.xb("Chrome")||g.xb("CriOS"))&&!g.xb("Edge")};
Bb=function(){return g.xb("iPhone")&&!g.xb("iPod")&&!g.xb("iPad")};
g.Db=function(){return Bb()||g.xb("iPad")||g.xb("iPod")};
Eb=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.Gb=function(a){return naa(a,function(){return 0<=g.Ka(g.Fb,a)})};
g.Ib=function(a){return Number(g.Hb)>=a};
Jb=function(a){return(a=a.exec(g.wb))?a[1]:""};
g.Lb=function(){this.C="";this.F=g.Kb};
g.Mb=function(a){var b=new g.Lb;b.C=a;return b};
g.Ob=function(){this.C="";this.F=Nb};
g.Qb=function(a){if(a instanceof g.Ob&&a.constructor===g.Ob&&a.F===Nb)return a.C;g.ua(a);return"type_error:SafeUrl"};
g.Tb=function(a){if(a instanceof g.Ob)return a;a=a.pe?a.xd():String(a);g.Rb.test(a)||(a="about:invalid#zClosurez");return g.Sb(a)};
g.Sb=function(a){var b=new g.Ob;b.C=a;return b};
g.Vb=function(){this.C="";this.F=g.Ub};
g.Wb=function(a){var b=new g.Vb;b.C=a;return b};
g.Yb=function(){this.C="";this.D=g.Xb;this.F=null};
g.Zb=function(a,b){var c=new g.Yb;c.C=a;c.F=b;return c};
g.$b=function(a,b){var c=b instanceof g.Ob?b:g.Tb(b);a.href=g.Qb(c)};
g.ac=function(a,b){var c=b instanceof g.Ob?b:g.Tb(b);a.href=g.Qb(c)};
g.bc=function(a,b){return g.Zb(b,null)};
g.x=function(a){return g.qa(a)?window.document.getElementById(a):a};
g.cc=function(a){var b=window.document;return g.qa(a)?b.getElementById(a):a};
g.ec=function(a,b){g.cb(b,function(b,d){b&&b.pe&&(b=b.xd());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:dc.hasOwnProperty(d)?a.setAttribute(dc[d],b):g.Da(d,"aria-")||g.Da(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.gc=function(a){return g.fc(a||window)};
g.fc=function(a){a=a.document;a=g.hc(a)?a.documentElement:a.body;return new g.Za(a.clientWidth,a.clientHeight)};
g.jc=function(a){var b=g.ic(a);a=a.parentWindow||a.defaultView;return g.y&&g.Gb("10")&&a.pageYOffset!=b.scrollTop?new g.Va(b.scrollLeft,b.scrollTop):new g.Va(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
g.ic=function(a){return a.scrollingElement?a.scrollingElement:!g.kc&&g.hc(a)?a.documentElement:a.body||a.documentElement};
g.mc=function(a,b,c){return g.lc(window.document,arguments)};
g.lc=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ha(d.name),'"');if(d.type){c.push(' type="',g.Ha(d.type),'"');var e={};g.nb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.qa(d)?c.className=d:g.va(d)?c.className=d.join(" "):g.ec(c,d));2<b.length&&g.nc(a,c,b,2);return c};
g.nc=function(a,b,c,d){function e(c){c&&b.appendChild(g.qa(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.wa(f)||g.ya(f)&&0<f.nodeType?e(f):(0,g.z)(paa(f)?g.Ta(f):f,e)}};
g.oc=function(a){return window.document.createElement(String(a))};
g.hc=function(a){return"CSS1Compat"==a.compatMode};
g.pc=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.qc=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b)};
g.rc=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};
qaa=function(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null};
raa=function(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a};
g.sc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.ya(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.xa(a))return"function"==typeof a.item}return!1};
g.tc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.uc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.vc=function(a,b){a.style.height=g.uc(b,!0)};
g.wc=function(a,b){a.style.width=g.uc(b,!0)};
g.xc=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.yc=function(a){return a?(0,window.decodeURI)(a):a};
g.Ac=function(a,b){return b.match(g.zc)[a]||null};
g.Bc=function(a){return g.yc(g.Ac(3,a))};
g.Cc=function(a){a=a.match(g.zc);return g.xc(null,null,null,null,a[5],a[6],a[7])};
g.Dc=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.Ec=function(a,b,c){if(g.va(b))for(var d=0;d<b.length;d++)g.Ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Fa(b)))};
g.Fc=function(a){var b=[],c;for(c in a)g.Ec(c,a[c],b);return b.join("&")};
g.Gc=function(a,b){var c=g.Fc(b);return g.Dc(a,c)};
saa=function(a,b){this.C=a;this.F=b};
Hc=function(a,b,c){this.url=a;this.Eg=b;this.jq=!!c;this.depth=g.ra(void 0)?void 0:null};
g.Ic=function(a){var b=a||g.m,c=[],d=null;do{var e=b;if(g.qb(e)){var f=e.location.href;d=e.document&&e.document.referrer||null}else f=d,d=null;c.push(new Hc(f||"",e));try{b=e.parent}catch(k){b=null}}while(b&&e!=b);b=0;for(e=c.length-1;b<=e;++b)c[b].depth=e-b;e=a||g.m;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(b=1;b<c.length;++b)a=c[b],a.url||(a.url=e.location.ancestorOrigins[b-1]||"",a.jq=!0);return c};
g.Jc=function(a,b){g.m.google_image_requests||(g.m.google_image_requests=[]);var c=g.m.document.createElement("img");if(b){var d=function(a){b(a);ub(c,"load",d);ub(c,"error",d)};
g.tb(c,"load",d);g.tb(c,"error",d)}c.src=a;g.m.google_image_requests.push(c)};
g.Nc=function(){if(g.Kc&&!g.qb(Lc)){var a="."+g.Mc.domain;try{for(;2<a.split(".").length&&!g.qb(Lc);)g.Mc.domain=a=a.substr(a.indexOf(".")+1),Lc=window.parent}catch(b){}g.qb(Lc)||(Lc=window)}return Lc};
Oc=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};
g.Pc=function(a,b,c,d,e){this.K=c||4E3;this.D=a||"&";this.O=b||",$";this.G=g.pa(d)?d:"trn";this.W=e||null;this.H=!1;this.F={};this.J=0;this.C=[]};
Qc=function(a,b){var c={};c[a]=b;return[c]};
Sc=function(a,b,c,d,e){var f=[];g.rb(a,function(a,l){var k=Rc(a,b,c,d,e);k&&f.push(l+"="+k)});
return f.join(b)};
Rc=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],k=0;k<a.length;k++)f.push(Rc(a[k],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(Sc(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};
Tc=function(a,b,c,d){a.C.push(b);a.F[b]=Qc(c,d)};
taa=function(a){if(!a.G)return a.K;var b=1,c;for(c in a.F)b=c.length>b?c.length:b;return a.K-a.G.length-b-a.D.length-1};
g.Uc=function(a,b,c,d,e){if(Math.random()<(d||a.C))try{if(c instanceof g.Pc)var f=c;else f=new g.Pc,g.rb(c,function(a,b){var c=f,d=c.J++,e=Qc(b,a);c.C.push(d);c.F[d]=e});
var k=f.getUrl(a.G,a.F,a.D+b+"&","");k&&("undefined"===typeof e?g.Jc(k):g.Jc(k,e))}catch(l){}};
uaa=function(a,b){var c=Vc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};
Wc=function(a,b){this.events=[];this.F=b||g.m;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.google_measure_js_timing);a:{try{var d=(this.F||g.m).top.location.hash;if(d){var e=d.match(/\bdeid=([\d,]+)/);var f=e&&e[1]||"";break a}}catch(k){}f=""}f=f.indexOf&&0<=f.indexOf("1337");this.C=(this.C=null!=c?c:Math.random()<a)||f;c=this.F.performance;this.D=!!(c&&c.mark&&c.clearMarks&&f)};
Vc=function(){var a=g.m.performance;return a&&a.now?a.now():(0,g.Xc)()};
Yc=function(a,b,c,d){this.G=a;this.K=b;this.F=c;this.H=this.D;this.C=void 0===d?null:d};
g.ad=function(a){return new Zc(g.$c(a),a.fileName,a.lineNumber)};
g.$c=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};
Zc=function(a,b,c){Oc.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};
bd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
vaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=r=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],l=e[3],p=e[4],r,w,c=0;80>c;c++)40>c?20>c?(r=l^d&(f^l),w=1518500249):(r=d^f^l,w=1859775393):60>c?(r=d&f|l&(d|f),w=2400959708):(r=d^f^l,w=3395469782),r=((a<<5|a>>>27)&4294967295)+r+p+w+b[c]&4294967295,p=l,l=f,f=(d<<30|d>>>2)&4294967295,d=a,a=r;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+l&4294967295;e[4]=e[4]+p&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==r)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[r++]=a[d++],w++,64==r)for(r=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>r?c(l,56-r):c(l,64-(r-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var p=24;0<=p;p-=8)a[d++]=e[k]>>p&255;return a}
for(var e=[],f=[],k=[],l=[128],p=1;64>p;++p)l[p]=0;var r,w;a();return{reset:a,update:c,digest:d,ow:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
waa=function(a,b,c){var d=[],e=[];if(1==(g.va(c)?2:1))return e=[b,a],(0,g.z)(d,function(a){e.push(a)}),cd(e.join(" "));
var f=[],k=[];(0,g.z)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Qa(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.z)(d,function(a){e.push(a)});
a=cd(e.join(" "));a=[c,a];g.Qa(k)||a.push(k.join(""));return a.join("_")};
cd=function(a){var b=vaa();b.update(a);return b.ow().toLowerCase()};
g.dd=function(a){this.C=a||{cookie:""}};
g.ed=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Ia)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
xaa=function(){var a=[],b=bd(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.dd(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.dd(window.document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(g.m.location.href);return d&&b&&c?[c,waa(bd(d),b,a||null)].join(" "):null}return null};
g.fd=function(){this.Ec=this.Ec;this.Lb=this.Lb};
g.id=function(a,b){g.gd(a,g.u(g.hd,b))};
g.gd=function(a,b){a.Ec?g.pa(void 0)?b.call(void 0):b():(a.Lb||(a.Lb=[]),a.Lb.push(g.pa(void 0)?(0,g.t)(b,void 0):b))};
g.hd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.jd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1;this.Ss=!0};
g.kd=function(a,b){g.jd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.K=!1;this.xc=null;a&&this.init(a,b)};
g.md=function(a){return!(!a||!a[ld])};
zaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.kh=e;this.key=++yaa;this.xg=this.Xh=!1};
nd=function(a){a.xg=!0;a.listener=null;a.C=null;a.src=null;a.kh=null};
g.od=function(a){this.src=a;this.listeners={};this.C=0};
qd=function(a,b,c,d,e,f){var k=b.toString();b=a.listeners[k];b||(b=a.listeners[k]=[],a.C++);var l=pd(b,c,e,f);-1<l?(a=b[l],d||(a.Xh=!1)):(a=new zaa(c,a.src,k,!!e,f),a.Xh=d,b.push(a));return a};
rd=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Sa(a.listeners[c],b);d&&(nd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
pd=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.xg&&f.listener==b&&f.capture==!!c&&f.kh==d)return e}return-1};
g.td=function(a,b,c,d,e){if(d&&d.once)return g.sd(a,b,c,d,e);if(g.va(b)){for(var f=0;f<b.length;f++)g.td(a,b[f],c,d,e);return null}c=g.ud(c);return g.md(a)?a.R(b,c,g.ya(d)?!!d.capture:!!d,e):vd(a,b,c,!1,d,e)};
vd=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.ya(e)?!!e.capture:!!e,l=g.wd(a);l||(a[xd]=l=new g.od(a));c=qd(l,b,c,d,k,f);if(c.C)return c;d=Aaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)Baa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(yd(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");zd++;return c};
Aaa=function(){var a=Caa,b=Ad?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.sd=function(a,b,c,d,e){if(g.va(b)){for(var f=0;f<b.length;f++)g.sd(a,b[f],c,d,e);return null}c=g.ud(c);return g.md(a)?a.Me(b,c,g.ya(d)?!!d.capture:!!d,e):vd(a,b,c,!0,d,e)};
g.Bd=function(a,b,c,d,e){if(g.va(b))for(var f=0;f<b.length;f++)g.Bd(a,b[f],c,d,e);else d=g.ya(d)?!!d.capture:!!d,c=g.ud(c),g.md(a)?a.Wa(b,c,d,e):a&&(a=g.wd(a))&&(b=a.mf(b,c,d,e))&&g.Dd(b)};
g.Dd=function(a){if(g.ra(a)||!a||a.xg)return!1;var b=a.src;if(g.md(b))return rd(b.wd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(yd(c),d);zd--;(c=g.wd(b))?(rd(c,a),0==c.C&&(c.src=null,b[xd]=null)):nd(a);return!0};
yd=function(a){return a in Ed?Ed[a]:Ed[a]="on"+a};
Gd=function(a,b,c,d){var e=!0;if(a=g.wd(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.xg&&(f=Fd(f,d),e=e&&!1!==f)}return e};
Fd=function(a,b){var c=a.listener,d=a.kh||a.src;a.Xh&&g.Dd(a);return c.call(d,b)};
Caa=function(a,b){if(a.xg)return!0;if(!Ad){var c=b||g.q("window.event"),d=new g.kd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(p){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var k=a.type,l=c.length-1;!d.F&&0<=l;l--)d.currentTarget=c[l],f=Gd(c[l],k,!0,d),e=e&&f;for(l=0;!d.F&&l<c.length;l++)d.currentTarget=c[l],f=Gd(c[l],k,!1,d),e=e&&f}return e}return Fd(a,new g.kd(b,
this))};
g.wd=function(a){a=a[xd];return a instanceof g.od?a:null};
g.ud=function(a){if(g.xa(a))return a;a[Hd]||(a[Hd]=function(b){return a.handleEvent(b)});
return a[Hd]};
g.Id=function(){g.fd.call(this);this.wd=new g.od(this);this.Av=this;this.dm=null};
Jd=function(a,b,c,d){b=a.wd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.xg&&k.capture==c){var l=k.listener,p=k.kh||k.src;k.Xh&&rd(a.wd,k);e=!1!==l.call(p,d)&&e}}return e&&0!=d.Ss};
Kd=function(a,b,c){this.H=c;this.D=a;this.G=b;this.F=0;this.C=null};
Ld=function(a,b){a.G(b);a.F<a.H&&(a.F++,b.next=a.C,a.C=b)};
g.Md=function(a){return function(){return a}};
Nd=function(a){g.m.setTimeout(function(){throw a;},0)};
Daa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.xb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.yb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.pa(c.next)){c=c.next;var a=c.Rn;c.Rn=null;a()}};
return function(a){d.next={Rn:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
Od=function(){this.F=this.C=null};
Pd=function(){this.next=this.scope=this.lc=null};
Ud=function(a,b){Qd||Eaa();Rd||(Qd(),Rd=!0);var c=Sd,d=Td.get();d.set(a,b);c.F?c.F.next=d:c.C=d;c.F=d};
Eaa=function(){if(-1!=String(g.m.Promise).indexOf("[native code]")){var a=g.m.Promise.resolve(void 0);Qd=function(){a.then(Vd)}}else Qd=function(){var a=Vd;
!g.xa(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.xb("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(Wd||(Wd=Daa()),Wd(a)):g.m.setImmediate(a)}};
Vd=function(){for(var a;a=Sd.remove();){try{a.lc.call(a.scope)}catch(b){Nd(b)}Ld(Td,a)}Rd=!1};
g.Xd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.Yd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.$d=function(a,b){this.C=0;this.O=void 0;this.G=this.F=this.D=null;this.H=this.K=!1;if(a!=g.sa)try{var c=this;a.call(b,function(a){g.Zd(c,2,a)},function(a){g.Zd(c,3,a)})}catch(d){g.Zd(this,3,d)}};
ae=function(){this.next=this.context=this.F=this.D=this.C=null;this.G=!1};
de=function(a,b,c){var d=be.get();d.D=a;d.F=b;d.context=c;return d};
Faa=function(a,b,c){ee(a,b,c,null)||Ud(g.u(b,a))};
g.fe=function(a){return new g.$d(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],Faa(p,g.u(f,l),k);
else b(e)})};
g.he=function(a,b){return ge(a,null,b,void 0)};
ie=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.G||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?ie(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):je(c),ke(c,e,3,b)))}a.D=null}else g.Zd(a,3,b)};
ne=function(a,b){a.F||2!=a.C&&3!=a.C||le(a);a.G?a.G.next=b:a.F=b;a.G=b};
ge=function(a,b,c,d){var e=de(null,null,null);e.C=new g.$d(function(a,k){e.D=b?function(c){try{var e=b.call(d,c);a(e)}catch(r){k(r)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.pa(e)&&b instanceof oe?k(b):a(e)}catch(r){k(r)}}:k});
e.C.D=a;ne(a,e);return e.C};
g.Zd=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,ee(c,a.W,a.N,a)||(a.O=c,a.C=b,a.D=null,le(a),3!=b||c instanceof oe||Gaa(a,c)))};
ee=function(a,b,c,d){if(a instanceof g.$d)return ne(a,de(b||g.sa,c||null,d)),!0;if(g.Yd(a))return a.then(b,c,d),!0;if(g.ya(a))try{var e=a.then;if(g.xa(e))return Haa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Haa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(p){f(p)}};
le=function(a){a.K||(a.K=!0,Ud(a.J,a))};
je=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
ke=function(a,b,c,d){if(3==c&&b.F&&!b.G)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,pe(b,c,d);else try{b.G?b.D.call(b.context):pe(b,c,d)}catch(e){qe.call(null,e)}Ld(be,b)};
pe=function(a,b,c){2==b?a.D.call(a.context,c):a.F&&a.F.call(a.context,c)};
Gaa=function(a,b){a.H=!0;Ud(function(){a.H&&qe.call(null,b)})};
oe=function(a){g.Ca.call(this,a)};
g.re=function(a,b,c){if(g.xa(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.se=function(a){g.m.clearTimeout(a)};
g.te=function(a,b,c){g.fd.call(this);this.C=a;this.D=b||0;this.F=c;this.wc=(0,g.t)(this.Ok,this)};
g.ue=function(a){var b=g.q("window.location.href");if(g.qa(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.ve=function(a){if(a.classList)return a.classList;a=a.className;return g.qa(a)&&a.match(/\S+/g)||[]};
g.A=function(a,b){return a.classList?a.classList.contains(b):g.Pa(g.ve(a),b)};
g.we=function(){};
ye=function(a){if(a instanceof g.we)return a;if("function"==typeof a.cd)return a.cd(!1);if(g.wa(a)){var b=0,c=new g.we;c.next=function(){for(;;){if(b>=a.length)throw g.xe;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.ze=function(a,b,c){if(g.wa(a))try{(0,g.z)(a,b,c)}catch(d){if(d!==g.xe)throw d;}else{a=ye(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.xe)throw d;}}};
Iaa=function(a){if(g.wa(a))return g.Ta(a);a=ye(a);var b=[];g.ze(a,function(a){b.push(a)});
return b};
g.Ae=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};
g.Be=function(a){a=String(a);if(g.Ae(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};
g.De=function(a){return(new Ce(void 0)).Ij(a)};
Ce=function(a){this.C=a};
Ee=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.va(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Ee(a,a.C?a.C.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Fe(d,c),c.push(":"),Ee(a,a.C?a.C.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Fe(b,
c);break;case "number":c.push((0,window.isFinite)(b)&&!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Fe=function(a,b){b.push('"',a.replace(Jaa,function(a){var b=Ge[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ge[a]=b);return b}),'"')};
g.He=function(a){g.fd.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.K=!!a};
g.Ie=function(a,b,c,d){if(b=a.F[b]){var e=a.C;if(b=g.Na(b,function(a){return e[a+1]==c&&e[a+2]==d}))return a.qd(b)}return!1};
Kaa=function(a,b,c){Ud(function(){a.apply(b,c)})};
g.Je=function(a){this.C=a};
Ke=function(a){this.C=a};
Le=function(a){this.data=a};
Me=function(a){return!g.pa(a)||a instanceof Le?a:new Le(a)};
g.Ne=function(a){this.C=a};
g.Oe=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.Xc)()||!!b&&b>(0,g.Xc)()};
g.Pe=function(a){this.C=a};
Laa=function(){};
g.Qe=function(){};
g.Re=function(a){this.C=a};
g.Se=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Te=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.C=a};
Ue=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.We=function(a){Ue(g.Ve,arguments)};
g.B=function(a,b){return a in g.Ve?g.Ve[a]:b};
Xe=function(a,b){var c=g.B(a,void 0);c?c.push(b):g.We(a,[b])};
g.Ye=function(a,b,c,d,e){var f=g.q("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.B("ERRORS",[]),f.push([a,b,c,d,e]),g.We("ERRORS",f))};
Maa=function(a,b,c,d,e){var f=!1,k=g.Ve.EXPERIMENT_FLAGS;if((k=k?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else for(var k=window.document.getElementsByTagName("script"),l=0,p=k.length;l<p;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}f&&(e||(g.qa(a)||(window.ErrorEvent&&a instanceof window.ErrorEvent&&(d=a.colno),a="Unknown error",b="Unknown file",c=0),e=Error(),e.message=a,e.fileName=b,e.lineNumber=c,(0,window.isNaN)(d)||(e.columnNumber=d)),g.Ye(e))};
Ze=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Ye(b)}}:a};
$e=function(a){return g.B("EXPERIMENT_FLAGS",{})[a]};
g.af=function(a){return!!$e(a)};
g.bf=function(a){a=$e(a);return Number(a||0)};
g.D=function(a,b){return a?a.dataset?a.dataset[g.cf(b)]:a.getAttribute("data-"+b):null};
g.cf=function(a){return df[a]||(df[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.ef=function(a){window.clearInterval(a)};
g.ff=function(a){window.clearTimeout(a)};
g.gf=function(a,b){g.xa(a)&&(a=Ze(a));return window.setInterval(a,b)};
g.hf=function(a,b){g.xa(a)&&(a=Ze(a));return window.setTimeout(a,b)};
g.E=function(a,b,c){var d=jf();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){kf[e]&&b.apply(c||window,d)};
try{lf[a]?k():g.hf(k,0)}catch(l){g.Ye(l)}},c);
kf[e]=!0;mf[a]||(mf[a]=[]);mf[a].push(e);return e}return 0};
g.nf=function(a){var b=jf();b&&(g.ra(a)?a=[a]:g.qa(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.z)(a,function(a){b.unsubscribeByKey(a);delete kf[a]}))};
jf=function(){return g.q("ytPubsubPubsubInstance")};
g.F=function(a,b){var c=jf();return c?c.publish.apply(c,arguments):!1};
g.of=function(a,b){lf[a]=!0;var c=jf(),c=c?c.publish.apply(c,arguments):!1;lf[a]=!1;return c};
g.pf=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Naa,""),b=b.replace(Oaa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.qf=function(a,b){var c=g.pf(a);window.spf.script.load(a,c,b)};
sf=function(){return null!=g.rf};
g.tf=function(){return g.rf?g.rf.invoke():null};
g.uf=function(){return!!g.q("yt.scheduler.instance")};
g.vf=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.hf(a,c||0)};
g.wf=function(a,b){return g.vf(a,1,b)};
g.xf=function(a){if(!(0,window.isNaN)(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.ff(a)}};
g.yf=function(a){for(var b=0,c=a.length;b<c;b++)g.xf(a[b])};
zf=function(){return(0,window.parseInt)(g.B("DCLKSTAT",0),10)};
g.Af=function(a){return a&&"status"in a?a.status:-1};
Paa=function(){if(!Bf)return null;var a=Bf();return"open"in a?a:null};
Cf=function(a){switch(g.Af(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.Df=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Ga(e[0]||""),e=g.Ga(e[1]||"");f in b?g.va(b[f])?g.Ua(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.Ef=function(a,b,c){var d=a.split("#",2);a=d[0];var d=1<d.length?"#"+d[1]:"",e=a.split("?",2);a=e[0];var e=g.Df(e[1]||""),f;for(f in b)if(c||!g.gb(e,f))e[f]=b[f];return g.Gc(a,e)+d};
g.Ff=function(a,b){return g.Ef(a,b||{},!0)};
Qaa=function(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=g.Ac(1,a),e=g.Bc(a);d&&e?(d=c,c=a.match(g.zc),d=d.match(g.zc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.Bc(c)==e&&(Number(g.Ac(4,c))||null)==(Number(g.Ac(4,a))||null):!0;for(var f in Gf){if((e=d=g.B(Gf[f]))&&!(e=c)){var k=a,e=f,l=g.B("CORS_HEADER_WHITELIST")||{};e=(k=g.Bc(k))?(l=l[k])?g.Pa(l,e):!1:!0}e&&(b[f]=d)}return b};
Raa=function(a,b){var c=g.B("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Fw&&(!g.Bc(a)||b.withCredentials||g.Bc(a)==window.document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.ka&&b.ka[c])};
g.G=function(a,b){var c=b.format||"JSON";b.uB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var d=g.B("XSRF_FIELD_NAME",void 0),e=g.B("XSRF_TOKEN",void 0),f=b.Ba;f&&(f[d]&&delete f[d],a=g.Ff(a,f));var f=b.postBody||"",k=b.ka;Raa(a,b)&&(k||(k={}),k[d]=e);k&&g.qa(f)&&(d=g.Df(f),g.nb(d,k),f=b.qs&&"JSON"==b.qs?JSON.stringify(d):g.Fc(d));d=f||k&&!g.ib(k);!Hf&&d&&"POST"!=b.method&&(Hf=!0,g.Ye(Error("AJAX request with postData should use POST")));
var l=!1,p,r=If(a,function(a){if(!l){l=!0;p&&g.ff(p);var d=Cf(a),e=null;if(d||400<=a.status&&500>a.status)e=Saa(c,a,b.rb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||g.m;d?b.Z&&b.Z.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.cb&&b.cb.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.mc&&0<b.timeout&&(p=g.hf(function(){l||(l=!0,r.abort(),g.ff(p),b.mc.call(b.context||g.m,r))},b.timeout));
return r};
Saa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Jf(b):null)d={},(0,g.z)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.Kf(a)})}c&&Lf(d);
return d};
Lf=function(a){if(g.ya(a))for(var b in a)"html_content"==b||g.Ea(b,"_html")?a[b]=g.bc(g.Mb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Lf(a[b])};
Jf=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Kf=function(a){var b="";(0,g.z)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Mf=function(a,b){b.method="POST";b.ka||(b.ka={});return g.G(a,b)};
If=function(a,b,c,d,e,f,k){function l(){4==(p&&"readyState"in p?p.readyState:0)&&b&&Ze(b)(p)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var p=Paa();if(!p)return null;"onloadend"in p?p.addEventListener("loadend",l,!1):p.onreadystatechange=l;p.open(c,a,!0);f&&(p.responseType=f);k&&(p.withCredentials=!0);c="POST"==c;if(e=Qaa(a,e))for(var r in e)p.setRequestHeader(r,e[r]),"content-type"==r.toLowerCase()&&(c=!1);c&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded");p.send(d);return p};
g.Pf=function(){var a=Nf("html5_serverside_pagead_id_sets_cookie","EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE")?"//web.archive.org/web/20170701000622/https://googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//web.archive.org/web/20170701000622/https://googleads.g.doubleclick.net/pagead/id",b=g.lb(Taa);return new g.$d(function(c,d){b.Z=function(a){Cf(a)?c(a):d(new Of("Request failed, status="+a.status,"net.badstatus",a))};
b.onError=function(a){d(new Of("Unknown request error","net.unknown",a))};
b.mc=function(a){d(new Of("Request timed out","net.timeout",a))};
g.G(a,b)})};
Of=function(a,b,c){g.Ca.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"};
Qf=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
Rf=function(a){var b=new Qf;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
Sf=function(a){var b=new Qf;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
Tf=function(a){g.Ca.call(this,a.message||a.description||a.name)};
Uf=function(){g.Ca.call(this,"Biscotti ID is missing from server")};
Nf=function(a,b){return!!g.fb(window,"settings","experiments","flags",a)||!!g.B(b,!1)||g.af(a)};
g.Yf=function(a){a=a.responseText;if(!g.Da(a,")]}'"))throw new Uf;a=JSON.parse(a.substr(4));if(Nf("html5_serverside_ignore_biscotti_id_on_retry","EXP_HTML5_SERVERSIDE_IGNORE_BISCOTTI_ID_ON_RETRY")&&1<(a.type||1))throw new Uf;a=a.id;Vf(a);g.Wf=Sf(a);Xf(18E5,2);return a};
g.Zf=function(a,b){var c=new Tf(b);Vf("");g.Wf=Rf(c);0<a&&Xf(12E4,a-1);throw c;};
Xf=function(a,b){g.hf(function(){g.he(g.Pf().then(g.Yf,function(a){return g.Zf(b,a)}),g.sa)},a)};
Vf=function(a){g.n("yt.ads.biscotti.lastId_",a,void 0)};
g.$f=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Uaa+"VisibilityState";if(b in a)return a[b]};
g.bg=function(a){var b=a.__yt_uid_key;b||(b=ag(),a.__yt_uid_key=b);return b};
g.cg=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Vaa||(this[b]=a[b]);this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.C=a.pageX;this.F=a.pageY}};
g.eg=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.hb(dg,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.H=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.eg(a,b,c,d);if(e)return e;var e=++fg.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.cg(d);if(!g.tc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.cg(b);
b.currentTarget=a;return c.call(a,b)};
k=Ze(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);dg[e]=[a,b,c,k,d];return e};
g.I=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.z)(a,function(a){if(a in dg){var b=dg[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete dg[a]}}))};
g.gg=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.hg=function(a){for(var b in dg)dg[b][0]==a&&g.I(b)};
ig=function(a){g.fd.call(this);this.C=[];this.F=a||this};
jg=function(a,b,c,d){d=Ze((0,g.t)(d,a.F));d={target:b,name:c,Be:d};b.addEventListener(c,d.Be,void 0);a.C.push(d)};
kg=function(a){for(;a.C.length;){var b=a.C.pop();b.target.removeEventListener(b.name,b.Be)}};
lg=function(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||g.lb(Waa);this.assets=a.assets||{};this.attrs=a.attrs||g.lb(Xaa);this.params=a.params||g.lb(Yaa);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.mg=function(a){a instanceof lg||(a=new lg(a));return a};
g.og=function(){this.C=this.minor=this.major=0;this.F="";var a=g.q("window.navigator.plugins"),b=g.q("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=(0,window.parseInt)(d[0],10)||0;d=(0,window.parseInt)(d[1],10)||0;e=0;if("r"==a.charAt(0)||
"d"==a.charAt(0))e=(0,window.parseInt)(a.substr(1),10)||0;a=[c,d,e]}else a=[0,0,0];this.F=b;b=a;this.major=b[0];this.minor=b[1];this.C=b[2];if(0>=this.major){if(g.ng)try{var k=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(w){k=null}else{var l=window.document.body;var p=window.document.createElement("object");p.setAttribute("type","application/x-shockwave-flash");k=l.appendChild(p)}if(k&&"GetVariable"in k)try{var r=k.GetVariable("$version")}catch(w){r=""}l&&p&&l.removeChild(p);(k=
r||"")?(k=k.split(" ")[1].split(","),k=[(0,window.parseInt)(k[0],10)||0,(0,window.parseInt)(k[1],10)||0,(0,window.parseInt)(k[2],10)||0]):k=[0,0,0];this.major=k[0];this.minor=k[1];this.C=k[2]}};
g.pg=function(a){return-1<a.F.indexOf("Gnash")&&-1==a.F.indexOf("AVM2")||9==a.major&&1==a.minor||9==a.major&&0==a.minor&&1==a.C?!1:9<=a.major};
g.qg=function(a){return-1<window.navigator.userAgent.indexOf("Sony/COM2")&&!a.isSupported(9,1,58)?!1:!0};
g.sg=function(a){return a in g.rg};
tg=function(a){Ue(g.rg,arguments)};
ug=function(a){Ue(g.rg,arguments)};
g.vg=function(a,b,c){if(b){a=g.qa(a)?g.cc(a):a;var d=g.lb(c.attrs);d.tabindex=0;var e=g.lb(c.params);e.flashvars=g.Fc(c.args);if(g.ng){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=window.document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(var k in e)d=window.document.createElement("param"),d.setAttribute("name",k),d.setAttribute("value",e[k]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=window.document.createElement("embed");b.setAttribute("name",
d.id);for(var l in d)b.setAttribute(l,d[l]);for(var p in e)b.setAttribute(p,e[p])}e=window.document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}};
g.yg=function(a,b,c,d,e){b=void 0===b?"ERROR":b;e=void 0===e?!1:e;c={name:c||g.B("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=wg)){d=a.stacktrace;var f=a.columnNumber;a=g.ue(a);d=d||a.stack;e=a.lineNumber.toString();(0,window.isNaN)(e)||(0,window.isNaN)(f)||(e=e+":"+f);if(!(xg[a.message]||0<=d.indexOf("/YouTubeCenter.js")||0<=d.indexOf("/mytube.js"))){f=a.fileName;b=
{Ba:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":c.name},ka:{url:g.B("PAGE_NAME",window.location.href),file:f},method:"POST"};c.version&&(b["client.version"]=c.version);d&&(b.ka.stack=d);for(var k in c)b.ka["client."+k]=c[k];if(k=g.B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ka[l]=k[l];g.G("/error_204",b);xg[a.message]=!0;wg++}}};
g.zg=function(a,b,c,d,e){this.D=a;this.H=b;this.G=c;this.F=d;this.C=e};
g.Ag=function(a){return new g.zg(a)};
g.Bg=function(a){var b={};void 0!==a.D?b.trackingParams=a.D:(b.veType=a.H,null!=a.G&&(b.veCounter=a.G),null!=a.F&&(b.elementIndex=a.F));void 0!==a.C&&(b.dataElement=g.Bg(a.C));return b};
g.Hg=function(a,b){Cg[a.endpoint]=b;if(a.bi){var c=a.bi;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Dg[a.bi.token]=d;c=Eg(a.endpoint,a.bi.token)}else c=Eg(a.endpoint);c.push(a.Rb);d=g.bf("web_logging_max_batch")||20;c.length>=d?g.Fg():g.Gg()};
g.Fg=function(){g.ff(g.Ig);if(!g.ib(g.Jg)){for(var a in g.Jg){var b=g.Kg[a];if(!b){var c=Cg[a];if(!c)continue;b=new c;g.Kg[a]=b}var c=void 0,d=a,e=b,f=Zaa[d],k=Lg[d]||{};Lg[d]=k;b=Math.round((0,g.Mg)());for(c in g.Jg[d]){var l=g.Ng(e);l[f]=Eg(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;l.requestTimeMs=b;var p=Dg[c];if(p)a:{var r=l,w=c;if(p.videoId)var C="VIDEO";else if(p.playlistId)C="PLAYLIST";else break a;r.credentialTransferTokenTargetId=p;r.context=
r.context||{};r.context.user=r.context.user||{};r.context.user.credentialTransferTokens=[{token:w,scope:C}]}delete Dg[c];g.Og(e,d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.Jg[a]}g.ib(g.Jg)||g.Gg()}};
$aa=function(){var a=[],b;for(b in g.Jg){var c=Lg[b]||{};Lg[b]=c;for(var d in g.Jg[b]){var e=Eg(b,d);c.storedEventsCount=c.storedEventsCount||0;c.storedEventsCount+=e.length}}d=Math.round((0,g.Mg)());for(b in Lg)c=Lg[b],b in Pg?c.eventType=Pg[b]:c.eventType="UNKNOWN_TYPE",e=Qg[b],c.metricIntervalMs=e?d-e:d-g.Rg,a.push(c),Qg[b]=d,delete Lg[b];return a};
g.Gg=function(){g.ff(g.Ig);g.Ig=g.hf(g.Fg,g.B("LOGGING_BATCH_TIMEOUT",1E4))};
Eg=function(a,b){b||(b="");g.Jg[a]=g.Jg[a]||{};g.Jg[a][b]=g.Jg[a][b]||[];return g.Jg[a][b]};
g.Tg=function(){if(null==g.q("_lact",window)){var a=(0,window.parseInt)(g.B("LACT"),10),a=(0,window.isFinite)(a)?(0,g.Xc)()-Math.max(a,0):-1;g.n("_lact",a,window);g.n("_fact",a,window);-1==a&&Sg();g.H(window.document,"keydown",Sg);g.H(window.document,"keyup",Sg);g.H(window.document,"mousedown",Sg);g.H(window.document,"mouseup",Sg);g.E("page-mouse",Sg);g.E("page-scroll",Sg);g.E("page-resize",Sg)}};
Sg=function(){null==g.q("_lact",window)&&(g.Tg(),g.q("_lact",window));var a=(0,g.Xc)();g.n("_lact",a,window);-1==g.q("_fact",window)&&g.n("_fact",a,window);g.F("USER_ACTIVE")};
g.Ug=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.Xc)()-a,0)};
g.Wg=function(a,b,c,d){var e=g.Vg,f={};f.eventTimeMs=Math.round(c||(0,g.Mg)());f[a]=b;f.context={lastActivityMs:String(c?-1:g.Ug())};a=g.af("web_system_health_gel2")&&"systemHealthCaptured"==a?"log_event2":"log_event";g.Hg({endpoint:a,Rb:f,bi:d},e)};
aba=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.Vg=function(a){this.C=a||{apiaryHost:g.B("APIARY_HOST",void 0),mW:g.B("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!g.B("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:g.B("GAPI_HINT_PARAMS",void 0),innertubeApiKey:g.B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.B("INNERTUBE_API_VERSION",void 0),wB:g.B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),yB:g.B("INNERTUBE_CONTEXT_HL",void 0),xB:g.B("INNERTUBE_CONTEXT_GL",void 0),
xhrApiaryHost:g.B("XHR_APIARY_HOST",void 0)||"",zB:g.B("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
g.Ng=function(a){a=a.C;a={client:{hl:a.yB,gl:a.xB,clientName:a.wB,clientVersion:a.innertubeContextClientVersion}};g.B("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.B("DELEGATED_SESSION_ID")});return{context:a}};
g.Og=function(a,b,c,d){!g.B("VISITOR_DATA")&&.01>Math.random()&&g.Ye(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.B("VISITOR_DATA","")},ka:c,qs:"JSON",mc:d.mc,Z:function(a,b){d.Z&&d.Z(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=xaa();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=g.B("SESSION_INDEX",0));var k="",l=a.C.zB;l&&(k=l);f&&!k&&(e.headers["x-origin"]=window.location.origin);g.Mf(""+k+aba(a.C.innertubeApiVersion,b,c)+"?alt=json&key="+a.C.innertubeApiKey,e)};
g.Xg=function(a,b){g.Wg(a,b,void 0,void 0)};
g.Yg=function(){g.af("log_web_meta")&&$aa().forEach(function(a){g.Xg("delayedEventMetricCaptured",a)})};
$g=function(a,b){var c=Object.keys(a).join("");Zg("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Wg("latencyActionInfo",a))};
Zg=function(a){ah[a]=ah[a]||{count:0};var b=ah[a];b.count++;b.time=(0,g.Mg)();bh||(bh=g.vf(bba,0,5E3));return 10<b.count?(11==b.count&&g.yg(Error("CSI data exceeded logging limit with key: "+a)),!0):!1};
bba=function(){var a=(0,g.Mg)(),b;for(b in ah)6E4<a-ah[b].time&&delete ah[b];bh=0};
g.eh=function(a){if(!g.ch&&!g.dh||!window.JSON)return null;try{var b=g.ch.get(a)}catch(c){}if(!g.qa(b))try{b=g.dh.get(a)}catch(c){}if(!g.qa(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.fh=function(){return g.eh("yt-interaction-logging-parent")};
g.gh=function(){var a=g.B("client-screen-nonce",void 0);a||(a=g.B("EVENT_ID",void 0));return a};
g.ih=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.Xc)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(hh)for(a=1,b=0;b<hh.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^hh.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&
63));return a.join("")};
g.mh=function(a){var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Ug()>b)&&"visible"==g.$f()){b=-1;g.jh&&(b=Math.round((0,g.Mg)()-g.jh));var c=String;var d=g.q("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.Xc)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.kh,index:String(lh),lastEventDeltaMs:String(b),trigger:a};g.Xg("foregroundHeartbeat",a);g.n("_fact",-1,window);lh++;g.jh=(0,g.Mg)()}};
g.nh=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.K=d?Ze(d):null;this.H=e?Ze(e):null;this.G=[];this.C=this.F=0};
g.oh=function(a){g.xf(a.F);a.F=g.wf((0,g.t)(a.init,a))};
g.rh=function(a){a.name in ph&&qh(a.name);ph[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.z)(a.deps,function(b){if(!(b in ph))throw Error("Module "+b+" required by "+a.name);ph[b].reqs.push(a.name)});
a.enable()};
qh=function(a){if(a in ph){var b=ph[a];(0,g.z)(b.reqs,function(a){qh(a)});
try{b.disable()}catch(c){}delete ph[a]}};
g.th=function(a,b,c,d){g.sh.set(""+a,b,c,"/",void 0===d?"youtube.com":d)};
g.uh=function(a,b,c){a&&(c&&(c=g.wb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.mc("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.sc(a).body.appendChild(a)):g.B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?If(a,b):cba(a,b))};
cba=function(a,b){var c=new window.Image,d=""+dba++;vh[d]=c;c.onload=c.onerror=function(){b&&vh[d]&&b();delete vh[d]};
c.src=a};
g.wh=function(a,b){a=a||"";var c=a.match(eba);window.spf.style.load(a,c?c[1]:"",b)};
xh=function(a){if(a){a=a.itct||a.ved;var b=g.q("yt.logging.screen.storeParentElement");a&&b&&b(g.Ag(a))}};
g.yh=function(a,b,c){var d=g.B("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Bc(window.location.href);e&&d.push(e);e=g.Bc(a);if(g.Pa(d,e)||!e&&g.Da(a,"/"))if(g.af("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.$b(d,a),a=d.href),a&&(a=g.Cc(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.gh();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.La(a).toString(36),d=b?g.Fc(b):"",g.th(a,d,c||5),xh(b))):(c="ST-"+g.La(a).toString(36),a=b?g.Fc(b):
"",g.th(c,a,5),xh(b))}};
g.zh=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.ac(d.location,g.Gc(a,b)+c)};
g.Ah=function(a,b){b&&g.yh(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.zh(a)};
g.Bh=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.B("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.yh(a,b);if(c)return!1;g.Ah(a);return!0};
g.Ch=function(a,b){this.version=a;this.args=b};
g.Dh=function(a,b){this.topic=a;this.di=b};
g.Fh=function(a,b){var c=g.Eh();c&&c.publish.call(c,a.toString(),a,b)};
g.Eh=function(){return g.q("ytPubsub2Pubsub2Instance")};
Gh=function(){var a=g.B("TIMING_TICK_EXPIRATION");a||(a={},g.We("TIMING_TICK_EXPIRATION",a));return a};
Hh=function(){var a=Gh(),b;for(b in a)g.xf(a[b]);g.We("TIMING_TICK_EXPIRATION",{})};
Ih=function(a,b){g.Ch.call(this,1,arguments)};
Jh=function(a,b){g.Ch.call(this,1,arguments)};
Lh=function(a){this.C=a||window;this.W=this.D=0;if(this.C.performance&&this.C.performance.timing&&this.C.performance.getEntriesByType){a=g.gc(this.C);this.J=new g.$a(0,0,a.width,a.height);var b;a=[];for(var c=this.C.document.getElementsByTagName("*"),d=0,e=c.length;d<e;d++){var f=c[d];if("IMG"==f.tagName||"IFRAME"==f.tagName)if(b=Kh(this,f,f.src)){if("IFRAME"==f.tagName){try{var k=(new Lh(f.contentWindow)).D}catch(l){k=0}0<k&&(b.timing=k)}a.push(b)}(b=this.C.getComputedStyle(f)["background-image"])&&
(b=Lh.C.exec(b))&&1<b.length&&(b=Kh(this,f,b[1]))&&a.push(b)}this.F=a;this.H=this.C.performance.getEntriesByType("resource");this.O=this.C.performance.getEntriesByType("mark");k={};a=0;for(c=this.H.length;a<c;a++)d=this.H[a],k[d.name]=d.responseEnd;a=0;for(c=this.O.length;a<c;a++)d=this.O[a],"mark_iframe_loaded: "==d.name.slice(0,20)&&(k[d.name.slice(20)]=d.startTime);a=0;for(c=this.F.length;a<c;a++)d=this.F[a],d.timing||(d.timing=k[d.url]||0);this.K=fba(this);this.G=gba(this);f=k=0;if(this.G.length)for(c=
a=0,d=this.G.length;c<d;c++)e=this.G[c],f=e.timing-f,0<f&&1>a&&(k+=(1-a)*f),f=e.timing,a=e.progress;this.D=Math.round(k||this.K);this.W=f}};
Kh=function(a,b,c){return c&&b.getBoundingClientRect&&(b=b.getBoundingClientRect(),b=new g.$a(b.left,b.top,b.width,b.height),g.ab(b,a.J))?new Mh(b,c):null};
fba=function(a){var b=a.C,c=b.performance.timing.navigationStart;if("msFirstPaint"in b.performance.timing)var d=b.performance.timing.C-c;else if("chrome"in b&&"loadTimes"in b.chrome){var e=b.chrome.loadTimes(),f=e.firstPaintTime;if(0<f){var k=e.startLoadTime;"requestTime"in e&&(k=e.requestTime);f>=k&&(d=1E3*(f-k))}}if(void 0===d||0>d||12E4<d){d=b.performance.timing.responseStart-c;for(var l={},b=b.document.getElementsByTagName("head")[0].children,c=0,e=b.length;c<e;c++)f=b[c],"SCRIPT"==f.tagName&&
f.src&&!f.async?l[f.src]=!0:"LINK"==f.tagName&&"stylesheet"==f.rel&&f.href&&(l[f.href]=!0);a.H.some(function(a){if(!l[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===d||a>d)d=a})}return Math.max(d,0)||0};
gba=function(a){var b={0:0},c=0;var d=a.K;for(var e=0,f=a.F.length;e<f;e++){var k=a.F[e],l=d;k.timing>d&&(l=k.timing);b[l]||(b[l]=0);k=g.bb(k.region).Zf();b[l]+=k;c+=k}e=g.bb(a.J).Zf();0<e&&(e=.1*Math.max(e-c,0),d in b||(b[d]=0),b[d]+=e,c+=e);a=[];if(c){for(var p in b)d=new Nh((0,window.parseFloat)(p),b[p]),a.push(d);a.sort(function(a,b){return a.timing-b.timing});
e=b=0;for(f=a.length;e<f;e++)d=a[e],b+=d.Zf,d.progress=b/c}return a};
Mh=function(a,b){this.region=a;this.url=b};
Nh=function(a,b){this.Zf=b;this.timing=a};
Qh=function(a){Oh(a);hba();Ph(!1,a);a||(g.B("TIMING_ACTION")&&g.We("PREVIOUS_ACTION",g.B("TIMING_ACTION")),g.We("TIMING_ACTION",""))};
g.Vh=function(a,b,c){b||"_"==a[0]||Rh(a,c);var d=Sh(c),e=b||(0,g.Mg)();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;var e=Gh(),f=e[a];f&&(g.xf(f),e[a]=0);Th(a,b,c)||g.Uh(!1,c);return d[a]};
Rh=function(a,b){Wh.mark&&(g.Da(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Wh.mark(a))};
Yh=function(a,b){Xh("yt_sts",a,void 0);g.Vh("_start",b,void 0)};
Xh=function(a,b,c){$h(c)[a]=b;ai(a,b,c)};
bi=function(a){var b=$h(void 0);return a in b};
ci=function(a){var b=Sh(a);if(b.aft)return b.aft;a=g.B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
di=function(a){g.Vh("nreqs",a.requestStart,void 0);g.Vh("nress",a.responseStart,void 0);g.Vh("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.Vh("nrs",a.redirectStart,void 0),g.Vh("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.Vh("ndnss",a.domainLookupStart,void 0),g.Vh("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.Vh("ntcps",a.connectStart,void 0),g.Vh("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.Vh("nstcps",a.secureConnectionStart,void 0),g.Vh("ntcpe",a.connectEnd,void 0))};
g.Uh=function(a,b){if(!ei(b)){var c=g.B((b||"")+"TIMING_ACTION",void 0),d=Sh(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=ci(b)))if(g.af("tighter_critical_section")&&!fi&&(g.Fh(iba,new Ih(Math.round(c-d._start),b)),fi=!0),a||b)gi(b);else{var c=!0,e=g.B("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&gi(b)}}};
jba=function(){switch(g.$f()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
gi=function(a){Hh();if(!g.af("csi_on_gel")){var b=Sh(a),c=$h(a),d=b._start,e;for(e in b)if(g.Da(e,"_")&&g.va(b[e])){var f=e.slice(1);if(f in kba){var k=(0,g.hi)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.q("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))ii(k,f),Qh(a)}else{var l=g.B("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.B((a||"")+"TIMING_ACTION",void 0)};var p=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var r=window.location.protocol+g.q("ytplayer.config.assets.js");(r=Wh.getEntriesByName?Wh.getEntriesByName(r)[0]:null)?c.h5jse=Math.round(c.h5jse-r.responseEnd):delete c.h5jse}b.aft=ci(a);lba(a)&&"youtube"==l&&(Xh("yt_lt","hot_bg",a),l=
b.vc,r=b.pbs,delete b.aft,c.aft=Math.round(r-l));for(var w in c)"_"!=w.charAt(0)&&(k[w]=c[w]);b.ps=(0,g.Mg)();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,w.push(e+"."+l));k.rt=w.join(",");(b=g.q("ytdebug.logTiming"))&&b(k,c);ii(k,f,a);g.Fh(mba,new Jh(c.aft+(p||0),a))}}};
ki=function(a){if(!ei(void 0)){if(!g.af("send_empty_timing")){var b=g.B("CSI_SERVICE_NAME","youtube");if(!g.B("TIMING_ACTION",void 0)||!b)return}g.Vh("aa",void 0,void 0);Xh("ap",1,void 0);Xh("yt_fss",a,void 0);!g.af("enable_csi_abandonment_info")||bi("yt_lt")||ji();gi(void 0)}};
nba=function(){if("cold"==$h().yt_lt){var a=Sh(),b=li(),c;for(c in a)g.Da(c,"_")||"tick_"+c in b||Th(c,a[c]);a=$h();for(c in a)"info_"+c in b||ai(c,a[c])}};
Th=function(a,b,c){li(c)["tick_"+a]=b;c||b||(0,g.Mg)();return g.af("csi_on_gel")?(c=mi(c),"_start"==a?Zg("baseline_"+c)||g.Wg("latencyActionBaselined",{clientActionNonce:c},b):Zg("tick_"+a+"_"+c)||g.Wg("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
ai=function(a,b,c){li(c)["info_"+a]=b;if(g.af("csi_on_gel"))if(a in ni){var d={};a=ni[a].split(".");g.Pa(oba,a)&&(b=!!b);for(var e=d,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];d[a[a.length-1]]=b;b=mi(c);$g(d,b)}else g.Pa(pba,a)||g.Ye(Error("Unknown label "+a+" logged with GEL CSI."))};
ji=function(){var a=g.B("TIMING_INFO",{});for(b in a)Xh(b,a[b]);Xh("is_nav",1);(a=g.gh())&&Xh("csn",a);(a=g.B("PREVIOUS_ACTION",void 0))&&Xh("pa",a);var b=$h();b.p=g.B("CLIENT_PROTOCOL")||"unknown";b.t=g.B("CLIENT_TRANSPORT")||"unknown";window.navigator&&window.navigator.sendBeacon&&Xh("ba",1);Xh("yt_vis",jba());if("cold"==b.yt_lt){a=Wh.timing||{};g.af("cold_load_nav_start_web")&&a.navigationStart&&(g.Vh("srt",a.responseStart),1!=b.prerender&&Yh("n",a.navigationStart));a:if(a.msFirstPaint)b=Math.max(0,
a.msFirstPaint);else{if(b=window.chrome)if(b=b.loadTimes,g.xa(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity),c=window.Infinity===c?0:a.navigationStart-c;b=Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0);break a}b=0}0<b&&g.Vh("fpt",b);di(a);Wh.getEntriesByType&&qba();a=g.B("SPEEDINDEX_FOR_ACTIONS",void 0);b=g.B("TIMING_ACTION",void 0);a&&-1<a.indexOf(b)&&(a=(0,g.Mg)(),b=new Lh,c=(0,g.Mg)(),0<b.D&&(Xh("si",b.D),g.Vh("vsc",oi(b.W)),g.Vh("sics",a),g.Vh("sice",
c)));a=[];if(window.document.querySelector&&Wh&&Wh.getEntriesByName)for(var d in pi)b=pi[d],rba(d,b)&&a.push(b);a.length&&Xh("rc",a.join(","))}g.af("csi_on_gel")&&(d={},d.actionType=sba[g.B("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=mi(),$g(d,a))};
oi=function(a){return Math.round(Wh.timing.navigationStart+a)};
qba=function(){var a=window.location.protocol,b=Wh.getEntriesByType("resource"),c=g.Na(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170701000622/https://fonts.googleapis.com/css?family=")}),b=(0,g.qi)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170701000622/https://fonts.gstatic.com/s/")}),b=(0,g.ri)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0});
c&&0<c.startTime&&0<c.responseEnd&&(g.Vh("wfcs",oi(c.startTime)),g.Vh("wfce",oi(c.responseEnd)));b&&0<b.startTime&&0<b.responseEnd&&(g.Vh("wffs",oi(b.startTime)),g.Vh("wffe",oi(b.responseEnd)))};
rba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=Wh.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.Vh("rsf_"+b,d+Math.round(c.fetchStart)),g.Vh("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(bi("rc")||Xh("rc",""),0===c.transferSize))?!0:!1:!1};
ii=function(a,b,c){if(g.af("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.n("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||g.uh(a,void 0)}catch(f){g.uh(a,void 0)}else g.uh(a);Ph(!0,c)};
si=function(a){g.n("ytglobal.timingready_",a,void 0)};
mi=function(a){var b=ti(a).nonce;b||(b=g.ih(),ti(a).nonce=b);return b};
Sh=function(a){return ti(a).tick};
$h=function(a){return ti(a).info};
li=function(a){a=ti(a);"gel"in a||(a.gel={});return a.gel};
ti=function(a){return g.q("ytcsi."+(a||"")+"data_")||Oh(a)};
Oh=function(a){var b={tick:{},info:{}};g.n("ytcsi."+(a||"")+"data_",b,void 0);return b};
ei=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
Ph=function(a,b){g.n("yt.timing."+(b||"")+"pingSent_",a,void 0)};
lba=function(a){var b=Sh(a),c=b.pbr,d=b.vc,b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==$h(a).yt_pvis};
wi=function(a,b){g.fd.call(this);this.J=this.G=a;this.ea=b;this.O=!1;this.api={};this.ib=this.Y=null;this.ia=new g.He;g.id(this,this.ia);this.D={};this.W=this.jb=this.F=this.Eb=this.C=null;this.na=!1;this.N=this.K=this.H=this.ma=null;this.qb={};this.Cc=["onReady"];this.Aa=new ig(this);g.id(this,this.Aa);this.Dd=null;this.dc=window.NaN;this.ab={};ui(this);this.Xd("onDetailedError",(0,g.t)(this.BG,this));this.Xd("onTabOrderChange",(0,g.t)(this.Vv,this));this.Xd("onTabAnnounce",(0,g.t)(this.Cn,this));
this.Xd("WATCH_LATER_VIDEO_ADDED",(0,g.t)(this.FG,this));this.Xd("WATCH_LATER_VIDEO_REMOVED",(0,g.t)(this.GG,this));g.vi||(this.Xd("onMouseWheelCapture",(0,g.t)(this.nG,this)),this.Xd("onMouseWheelRelease",(0,g.t)(this.oG,this)));this.Xd("onAdAnnounce",(0,g.t)(this.Cn,this));this.V=new ig(this);g.id(this,this.V);this.Pc=!1;this.tb=null};
yi=function(a,b){a.Eb=b;a.C=b.clone();a.F=a.C.attrs.id||a.F;"video-player"==a.F&&(a.F=a.ea,a.C.attrs.id=a.ea);a.J.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F);a.C.args.enablejsapi="1";a.C.args.playerapiid=a.ea;a.jb||(a.jb=xi(a,a.C.args.jsapicallback||"onYouTubePlayerReady"));a.C.args.jsapicallback=null;var c=a.C.attrs.width;c&&g.wc(a.J,Number(c)||c);(c=a.C.attrs.height)&&g.vc(a.J,Number(c)||c)};
Di=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Ei=function(a){var b=a.C&&a.C.args;if(b&&b.fflags){var c=b.el,b=b.fflags;if(("detailpage"==c||"profilepage"==c)&&0<=b.indexOf("web_player_disable_flash_watch=true")||"embedded"==c&&0<=b.indexOf("web_player_disable_flash_embed=true"))return!1}g.pa(a.C.disable.flash)||(c=a.C.disable,b=g.og.getInstance().isSupported(a.C.minVersion),c.flash=!b);return!a.C.disable.flash};
Hi=function(a,b){var c=a.C,d=c&&c.args&&c.args.fflags;!d||0>d.indexOf("web_player_flash_fallback_killswitch=true")||b&&(5!=(tba[b.errorCode]||5)||-1==uba.indexOf(b.errorCode))||!Ei(a)||((d=Fi(a))&&d.stopVideo&&d.stopVideo(),d&&d.getUpdatedConfigurationData&&(c=d.getUpdatedConfigurationData(),c=g.mg(c)),c.args.autoplay=1,c.args.html5_unavailable="1",yi(a,c),Gi(a,"flash"))};
Gi=function(a,b){if(!a.nb()){if(!b){var c;if(!(c=!a.C.html5&&Ei(a))){if(!g.pa(a.C.disable.html5)){c=!0;void 0!=a.C.args.deviceHasDisplay&&(c=a.C.args.deviceHasDisplay);if(2.2==Ii)var d=!0;else{a:{var e=c;c=g.q("yt.player.utils.videoElement_");c||(c=g.oc("VIDEO"),g.n("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?vba:wba,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(k){d="html5.missingapi"}}d=!d}d&&(d=Ji(a)||a.C.assets.js);a.C.disable.html5=
!d;d||(a.C.args.html5_unavailable="1")}c=!!a.C.disable.html5}b=c?Ei(a)?"flash":"unsupported":"html5"}("flash"==b?a.AM:a.BM).call(a)}};
Ji=function(a){var b=!0,c=Fi(a);c&&a.C&&(a=a.C,b=g.D(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
Fi=function(a){var b=g.x(a.F);!b&&a.J&&a.J.querySelector&&(b=a.J.querySelector("#"+a.F));return b};
Ki=function(a,b,c){var d=b[c];return function(){try{return a.Dd=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Dd=e,g.Ye(e,"WARNING"))}}};
ui=function(a){a.O=!1;if(a.ib)for(var b in a.D)a.ib(b,a.D[b]);for(var c in a.ab)g.ff((0,window.parseInt)(c,10));a.ab={};a.Y=null;a.ib=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=(0,g.t)(a.Xd,a);a.api.removeEventListener=(0,g.t)(a.dL,a);a.api.destroy=(0,g.t)(a.dispose,a);a.api.getLastError=(0,g.t)(a.ux,a);a.api.getPlayerType=(0,g.t)(a.Nx,a);a.api.getCurrentVideoConfig=(0,g.t)(a.Ww,a);a.api.loadNewVideoConfig=(0,g.t)(a.cn,a);a.api.isReady=(0,g.t)(a.PM,a)};
xi=function(a,b){var c=b;if("string"==typeof b){if(a.qb[b])return a.qb[b];c=function(){var a=g.q(b);a&&a.apply(g.m,arguments)};
a.qb[b]=c}return c?c:null};
xba=function(a,b){var c="ytPlayer"+b+a.ea;a.D[b]=c;g.m[c]=function(c){var d=g.hf(function(){a.nb()||(a.ia.oa(b,c),g.jb(a.ab,String(d)))},0);
g.kb(a.ab,String(d),!0)};
return c};
Li=function(a){return(a=Fi(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null};
Ni=function(a){g.Vh("dcp");a.cancel();ui(a);a.W=null;a.C&&(a.C.loaded=!1);var b=Fi(a);"html5"==Li(a)?Ji(a)||!Mi(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null):b&&b.destroy&&b.destroy();g.pc(a.G);kg(a.Aa);a.K=null;a.N=null};
Mi=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.Qi=function(a,b){a=g.qa(a)?g.cc(a):a;b=g.mg(b);var c=g.Oi+"_"+g.Ba(a),d=g.Pi[c];if(d)return d.cn(b),d.api;d=new wi(a,c);g.Pi[c]=d;g.F("player-added",d.api);g.gd(d,g.u(yba,d));g.hf(function(){d.cn(b)},0);
return d.api};
yba=function(a){g.Pi[a.getId()]=null};
g.Ri=function(a){a=g.x(a);if(!a)return null;var b=g.Oi+"_"+g.Ba(a),c=g.Pi[b];c||(c=new wi(a,b),g.Pi[b]=c);return c.api};
Ti=function(a,b){var c={};c.key=a;c.value=b;return Si().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
Ui=function(a){return Si().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
Si=function(){return Vi?window.Promise.resolve(Vi):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))Vi=b,a(Vi);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),Si()};
c.onupgradeneeded=zba})};
zba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Aba=function(){Wi.stop()};
Bba=function(){g.Vh("vpr")};
Zi=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.bg(c);if(e in Xi)return!0;if(e in Yi)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Yi[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Yi[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Xi[d[c]]=!0;return!0};
Cba=function(a){for(var b=g.gc(),b=new g.$a(0,0,b.width,b.height),c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Zi(a[d].tB,b)&&c<f&&(c=f)}return c};
Dba=function(a){var b=$i;return new g.$d(function(c,d){var e={tB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){$i!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},aj.push(a))})};
Eba=function(a){Wi.start();Xh("vpil",++bj);a=a.time;cj<a&&(cj=a,g.Vh("lim",a))};
Fba=function(){g.Vh("vptl",cj);g.Vh("vpl",cj)};
Gba=function(){dj.forEach(function(a){a.cancel()});
cj=bj=dj.length=0;Xi={};Yi={};aj.forEach(function(a){a.slt=void 0});
aj.length=0};
Hba=function(){$i++;var a=g.gc(),b=new g.$a(0,0,a.width,a.height);Xh("vps",a.width+"."+a.height);g.Vh("vpc");var a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]"),c=a.length,d=[],e=!0;Wi.start();for(var f=0;f<c;f++){var k=a[f];if(Zi(k,b)){var l=Dba(k);l.then(Eba);d.push(l);dj.push(l);k.loadTime||(e=!1)}}e&&Xh("yt_eil",1);Xh("vpni",d.length);g.Vh("vpcc");b=g.fe(d).then(Cba);g.he(b,Bba);b.then(Aba);dj.push(b);return b};
g.ej=function(a,b){g.uh("/gen_204?"+a,b)};
Jba=function(a){if(null==a)return[];var b=[];Iba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
return b};
g.fj=function(){return g.A(g.x("page-container"),"remote-connected")};
Kba=function(){g.n("yt.abuse.botguardInitialized",sf,void 0);g.n("yt.abuse.invokeBotguard",g.tf,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",zf,void 0);g.n("yt.player.exports.navigate",g.Bh,void 0);g.n("yt.util.activity.init",g.Tg,void 0);g.n("yt.util.activity.getTimeSinceActive",g.Ug,void 0);g.n("yt.util.activity.setTimestamp",gj,void 0);var a=g.q("ytplayer.config");hj(a);g.q("ytspf.enabled")&&(ij=g.gf(jj,5E3),(a=g.kj())?(a.addEventListener("onReady",jj),a.addEventListener("onStateChange",jj)):
lj("unable to init PP monitor"))};
hj=function(a){for(var b in g.Pi){var c=g.Pi[b];c&&c.cancel()}if(a=a||null){b=g.kj();var d=!0,c=g.mj;g.mj=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(nj="",g.Qi("player-api",a)):b.playVideo();a=g.mg(a);a.loaded=!0}jj();g.n("ytplayer.config",a,void 0)};
g.kj=function(){return g.Ri("player-api")};
jj=function(){var a=g.kj();if(a){var b=g.x("player");b=!b||g.A(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.B("PAGE_NAME"),e=g.fj();!c||d||e||(lj("PP playing off watch (paused)"),a.pauseVideo());b&&d?lj("PP off-screen on watch"):b||d||lj("PP !off-screen off watch")}};
lj=function(a){var b=g.B("PAGE_NAME");b&&(b=[b,nj,g.q("_spf_state.nav-counter")],a+="("+b.join(",")+")",g.n("yt.www.persistentplayer.issue",a,void 0),g.Ye(Error(a),"WARNING"))};
pj=function(){g.Vh("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.Vh("cpt")},0)}):window.document.hidden?g.Vh("cpt"):(0,window.setTimeout)(function(){g.Vh("cpt")},0);
Lba();g.B("CSI_VIEWPORT")&&(oj=Hba(),oj.then(function(a){g.Vh("vpl",a);oj=null},function(){}))};
Lba=function(){qj("init");var a=g.B("PAGE_NAME",void 0);a&&qj("init-"+a)};
qj=function(a){g.uf()?rj.push(g.wf(g.u(g.of,a),0)):g.F(a)};
sj=function(){g.yf(rj);rj.length=0;Gba();oj&&(oj.cancel(),oj=null);var a=g.B("PAGE_NAME",void 0);a&&g.of("dispose-"+a);g.of("dispose")};
Mba=function(){pj()};
Nba=function(){g.B("TIMING_REPORT_ON_UNLOAD")&&g.Uh(!0);ki("u");g.mh("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");g.Yg();g.Fg();sj();g.of("pageunload")};
tj=function(){gj()};
uj=function(a){a=a.detail.url;window.yt_spf_loaded_history=!0;gj();var b=g.fh();if(b&&a){var c=g.Bg(b.visualElement),b={csn:b.clientScreenNonce};"trackingParams"in c?b.itct=c.trackingParams:(b.veType=c.veType,b.veCounter=c.veCounter);g.yh(a,b)}};
zj=function(){vj=1;wj=xj=0;g.B("TIMING_REPORT_ON_UNLOAD")&&g.Uh(!0);g.af("warm_load_nav_start_web")?(ki("n"),Qh(),si(!1),g.We("TIMING_AFT_KEYS",[]),Xh("yt_lt","warm"),g.We("TIMING_ACTION",""),g.We("TIMING_WAIT",[]),Hh()):(ki("n"),Qh());Yh("n");Rh("nr");yj(Oba);g.of("navigate")};
Dj=function(a){a=a.detail.part||a.detail.partial;g.Vh("nc"+xj);++xj;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.Vh("bc");else{var b=1==vj;vj=2;b?(yj(Pba),Aj()):yj(Qba);if(b=a&&a.data&&a.data.swfcfg)Bj(a.timing,b.args),Cj(b)}};
Ej=function(){g.Vh("np"+wj);++wj};
Fj=function(a){a=a.detail.response;var b=1==vj;vj=3;b&&(yj(Rba),Aj());if(b=a.data&&a.data.swfcfg)Bj(a.timing,b.args),Cj(b)};
Jj=function(a){g.Vh("nd");a=a.detail.response;g.Gj=a.cacheKey;a=a.timing;var b=window._spf_state;g.Hj.navigationCount=b&&b["nav-counter"]||0;g.af("warm_load_nav_start_web")?g.Vh("srt",a.responseStart):(Yh("ne",a.responseStart),Xh("srt",Math.max(0,a.responseStart-a.navigationStart)));Xh("yt_lt",a.spfCached?"hot":"warm");Xh("yt_pft",+!!a.spfPrefetched);g.Vh("pfs",a.fetchStart);g.Vh("pfrs",a.responseStart);"redirectStart"in a&&di(a);yj(Ij);window.document.getElementById("content").style.height="";pj();
vj=0};
Kj=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Ye(a)};
Lj=function(a){g.ej(g.Fc({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Tba=function(){Sba();window.yt_spf_loaded_history=!1};
Uba=function(){};
Aj=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");sj();var a=g.B("PREVIOUS_ACTION"),b;for(b in g.Ve)delete g.Ve[b];g.We("PREVIOUS_ACTION",a);g.We("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.n("ytplayer.config",null,void 0);if((b=g.kj())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())nj=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),nj="recovered"):nj="missing2"}else nj="missing";jj()};
Cj=function(a){"cfg"in Sh(void 0)||g.Vh("cfg");hj(a)};
yj=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.xf(Mj);Mj=g.wf(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.ff(Nj);Nj=g.hf(function(){b.className=e},c)},0)};
Sba=function(){var a=Ij[0]+50;g.ff(Nj);Nj=g.hf(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
Bj=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Jba(b));g.B("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"removeNonCacheableVideoVars",cached:c,prefetched:d,deleted:e.join("")},g.ej(g.Fc(c)))};
Oj=function(){var a=String($e("service_worker_scope")||"");return window.navigator.serviceWorker.getRegistration(a)};
Pj=function(a){return Oj().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Vba=function(){var a={type:"notifications_check_registration",data:g.B("ID_TOKEN")};return Pj(a)};
Qj=function(){var a={type:"notifications_register",data:g.B("ID_TOKEN")};Pj(a)};
Rj=function(){return Oj().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})};
Sj=function(){return window.Notification.requestPermission().then(function(a){var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return Rj().then(function(){Ti("NotificationsDisabled",!1);Qj();return window.Promise.resolve(!0)});
"denied"==a&&Qj();return window.Promise.resolve(!1)})};
Wba=function(){Ti("HideTicker",(0,g.Xc)());window.document.body.classList.remove("sitewide-ticker-visible")};
Xba=function(){return Ui("HideTicker").then(function(a){return(0,g.Xc)()>a+2592E6})};
Tj=function(){return g.af("service_worker_push_home_only")?"HomePromptCount":"PromptCount"};
Uj=function(){var a=Tj();return Ui(a).then(function(b){return Ti(a,b+1)}).then(function(){if(g.af("service_worker_push_home_only"))return Ti("HomePromptTime",(0,g.Xc)())})};
Vj=function(){var a=window.document.getElementById("ticker");return a&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.D(a,"trigger-condition")?a:null};
Wj=function(){var a=Vj();return a?a.querySelector(".yt-uix-button-alert-info"):null};
Yba=function(a){return-1==a?window.Promise.resolve(!0):Ui(Tj()).then(function(a){a||(a=0);return window.Promise.resolve(a<g.bf("service_worker_push_prompt_cap"))})};
Zba=function(){var a=g.bf("service_worker_push_prompt_delay_ms");return a?Ui("HomePromptTime").then(function(b){return window.Promise.resolve((0,g.Xc)()-a>(b||0))}):window.Promise.resolve(!0)};
$ba=function(){return g.B("LOGGED_IN",void 0)?g.af("service_worker_push_ticker_enabled")?Xba().then(function(a){if(!a)return window.Promise.resolve();a=Vj();if(!a)return window.Promise.resolve();var b=Wj();if(!b)return window.Promise.resolve();var c=Vj(),c=c?c.querySelector(".yt-uix-button-close"):null;if(!c)return window.Promise.resolve();g.H(b,"click",Sj);g.H(c,"click",Wba);window.document.body.classList.add("sitewide-ticker-visible");a.classList.add("show");return Uj()}):(Uj(),Sj()):window.Promise.resolve()};
aca=function(){if(!g.B("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0))return window.Promise.resolve(!1);var a=g.bf("service_worker_push_prompt_cap");return window.Promise.all([Yba(a),Zba()]).then(function(a){var b=g.ka(a);a=b.next().value;b=b.next().value;return a&&b})};
bca=function(a){return g.Xj&&!Yj&&!Zj&&!ak&&window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification&&window.Promise&&a&&a.pushManager?"default"!=window.Notification.permission?Rj().then(Vba):aca().then(function(a){if(a)return $ba()}):window.Promise.resolve()};
dca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(cca)})};
fca=function(){var a="/sw.js",b=g.B("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=bk(a);g.af("service_worker_push_enabled")&&a.then(eca).then(bca)};
eca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
cca=function(a){a&&bk("/sw.js?0",a.scope)};
bk=function(a,b){var c=b||String($e("service_worker_scope")||"")||"/";return window.navigator.serviceWorker.register(a,{scope:c})};
ck=function(){g.nh.call(this,"www/base");this.D=0};
dk=function(a){(a=a.detail.name)&&qh(a)};
g.aa=[];ea="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;baa=0;
ma("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
var gca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},hca="undefined"!=typeof window.Reflect&&window.Reflect.construct||function(a,b,c){void 0===c&&(c=a);
c=gca(c.prototype||Object.prototype);return Function.prototype.apply.call(a,c,b)||c};
ma("Reflect.construct",function(a){return a||hca});
ma("Promise",function(a){function b(a){this.C=0;this.D=void 0;this.F=[];var b=this.H();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.K()})};
var e=da.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.K=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(r){this.H(r)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.K(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(p){this.G(p);return}"function"==typeof b?this.ma(b,a):this.K(a)};
b.prototype.G=function(a){this.O(2,a)};
b.prototype.K=function(a){this.O(1,a)};
b.prototype.O=function(a,b){if(0!=this.C)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.C);this.C=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.F){for(var a=this.F,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.F=null}};
var f=new c;b.prototype.V=function(a){var b=this.H();a.Yh(b.resolve,b.reject)};
b.prototype.ma=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(r){c.reject(r)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(fa){f(fa)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.Yh(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Yh=function(a,b){function c(){switch(d.C){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?f.F(c):this.F.push(function(){f.F(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.ka(a),f=e.next();!f.done;f=e.next())d(f.value).Yh(b,c)})};
b.all=function(a){var c=g.ka(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Yh(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
ma("WeakMap",function(a){function b(a){this.pb=(f+=Math.random()+1).toString();if(a){ca();ia();a=g.ka(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){oa(a,e)||ea(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(r){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!oa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.pb]=b;return this};
b.prototype.get=function(a){return oa(a,e)?a[e][this.pb]:void 0};
b.prototype.has=function(a){return oa(a,e)&&oa(a[e],this.pb)};
b.prototype["delete"]=function(a){return oa(a,e)&&oa(a[e],this.pb)?delete a[e][this.pb]:!1};
return b});
ma("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return ja(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&oa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,kc:l}}return{id:c,list:d,index:-1,kc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.ka(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.ka([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(C){return!1}}())return a;
ca();ia();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.kc?c.kc.value=b:(c.kc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.kc),this.F.previous.next=c.kc,this.F.previous=c.kc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.kc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.kc.previous.next=a.kc.next,a.kc.next.previous=a.kc.previous,a.kc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).kc};
e.prototype.get=function(a){return(a=d(this,a).kc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
ma("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.ka(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.ka([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
ca();ia();b.prototype.add=function(a){this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ma("Array.from",function(a){return a?a:function(a,c,d){ia();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else for(var f=a.length,k=0;k<f;k++)b.push(c.call(d,a[k]));return b}});
g.ek=g.ek||{};g.m=this;Aa="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.Xc=Date.now||function(){return+new Date};g.Mc=window.document;g.J=window;g.v(g.Ca,Error);g.Ca.prototype.name="CustomError";var gaa,haa,iaa,jaa,kaa,laa,faa;g.Ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.fk=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.Oa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(g.qa(a))return g.qa(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.ica=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;
0>c&&(c=Math.max(0,a.length+c));if(g.qa(a))return g.qa(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.qa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.qi=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.qa(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var p=k[l];
b.call(c,p,l,a)&&(e[f++]=p)}return e};
g.hi=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.qa(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.ri=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.z)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.gk=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.qa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.hk=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.qa(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};g.h=g.Va.prototype;g.h.clone=function(){return new g.Va(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Va&&g.Wa(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.Xa.prototype;g.h.getHeight=function(){return this.bottom-this.top};
g.h.clone=function(){return new g.Xa(this.top,this.right,this.bottom,this.left)};
g.h.contains=function(a){return g.Ya(this,a)};
g.h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};g.h=g.Za.prototype;g.h.clone=function(){return new g.Za(this.width,this.height)};
g.h.Zf=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Zf()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.h=g.$a.prototype;g.h.clone=function(){return new g.$a(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Va?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.ob[" "]=g.sa;var sb=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.m.addEventListener("test",null,b)}catch(c){}return a}();var ik=!1,jk="";
(function(){if(window.navigator.plugins&&window.navigator.plugins.length){var a=window.navigator.plugins["Shockwave Flash"];if(a&&(ik=!0,a.description)){jk=vb(a.description);return}if(window.navigator.plugins["Shockwave Flash 2.0"]){ik=!0;jk="2.0.0.11";return}}if(window.navigator.mimeTypes&&window.navigator.mimeTypes.length&&(a=window.navigator.mimeTypes["application/x-shockwave-flash"],ik=!(!a||!a.enabledPlugin))){jk=vb(a.enabledPlugin.description);return}try{var b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");ik=
!0;jk=vb(b.GetVariable("$version"));return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");ik=!0;jk="6.0.21";return}catch(c){}try{b=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),ik=!0,jk=vb(b.GetVariable("$version"))}catch(c){}})();
g.jca=ik;g.kca=jk;a:{var kk=g.m.navigator;if(kk){var lk=kk.userAgent;if(lk){g.wb=lk;break a}}g.wb=""};var mca,Zj,ak,nca,sk,maa,wk;g.mk=g.xb("Opera");g.y=g.yb();g.nk=g.xb("Edge");g.ok=g.nk||g.y;g.pk=g.xb("Gecko")&&!(-1!=g.wb.toLowerCase().indexOf("webkit")&&!g.xb("Edge"))&&!(g.xb("Trident")||g.xb("MSIE"))&&!g.xb("Edge");g.kc=-1!=g.wb.toLowerCase().indexOf("webkit")&&!g.xb("Edge");g.qk=g.xb("Macintosh");g.rk=g.xb("Windows");g.lca=g.xb("Linux")||g.xb("CrOS");mca=g.xb("Android");Zj=Bb();ak=g.xb("iPad");nca=g.xb("iPod");
a:{var tk="",uk=function(){var a=g.wb;if(g.pk)return/rv\:([^\);]+)(\)|;)/.exec(a);if(g.nk)return/Edge\/([\d\.]+)/.exec(a);if(g.y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.kc)return/WebKit\/(\S+)/.exec(a);if(g.mk)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
uk&&(tk=uk?uk[1]:"");if(g.y){var vk=Eb();if(null!=vk&&vk>(0,window.parseFloat)(tk)){sk=String(vk);break a}}sk=tk}g.Fb=sk;maa={};var xk=g.m.document;wk=xk&&g.y?Eb()||("CSS1Compat"==xk.compatMode?(0,window.parseInt)(g.Fb,10):5):void 0;g.Hb=wk;(function(){if(g.rk){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(g.wb))?a[1]:"0"}return g.qk?(a=/10[_.][0-9_.]+/,(a=a.exec(g.wb))?a[0].replace(/_/g,"."):"10"):mca?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(g.wb))?a[1]:""):Zj||ak||nca?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(g.wb))?a[1].replace(/_/g,"."):""):""})();var Yj;g.vi=g.xb("Firefox");g.yk=Bb()||g.xb("iPod");g.zk=g.xb("iPad");Yj=g.xb("Android")&&!(g.zb()||g.xb("Firefox")||g.xb("Opera")||g.xb("Silk"));g.Xj=g.zb();g.Ak=g.Ab()&&!g.Db();g.oca=function(){if(g.vi)return Jb(/Firefox\/([0-9.]+)/);if(g.y||g.nk||g.mk)return g.Fb;if(g.Xj)return g.Db()?Jb(/CriOS\/([0-9.]+)/):Jb(/Chrome\/([0-9.]+)/);if(g.Ak&&!g.Db())return Jb(/Version\/([0-9.]+)/);if(g.yk||g.zk){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(g.wb);if(a)return a[1]+"."+a[2]}else if(Yj)return(a=Jb(/Android\s+([0-9.]+)/))?a:Jb(/Version\/([0-9.]+)/);return""}();var oaa;oaa=!g.y||g.Ib(9);g.pca=!g.pk&&!g.y||g.y&&g.Ib(9)||g.pk&&g.Gb("1.9.1");g.Bk=g.y&&!g.Gb("9");g.qca=g.y||g.mk||g.kc;g.Lb.prototype.pe=!0;g.Lb.prototype.xd=function(){return this.C};
g.Lb.prototype.toString=function(){return"Const{"+this.C+"}"};
g.Kb={};g.Mb("");g.rca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.sca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Ck=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");var Nb;g.Ob.prototype.pe=!0;g.Ob.prototype.xd=function(){return this.C};
g.Ob.prototype.wl=!0;g.Ob.prototype.He=g.ba(1);g.Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;Nb={};g.Sb("about:blank");g.Vb.prototype.pe=!0;g.Ub={};g.Vb.prototype.xd=function(){return this.C};
g.Dk=g.Wb("");g.Ek=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.tca=RegExp("\\b(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Yb.prototype.wl=!0;g.Yb.prototype.He=g.ba(0);g.Yb.prototype.pe=!0;g.Yb.prototype.xd=function(){return this.C};
g.Xb={};g.Zb("<!DOCTYPE html>",0);g.Fk=g.Zb("",0);g.Gk=g.Zb("<br>",0);var dc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.Hk=g.pk?"MozUserSelect":g.kc||g.nk?"WebkitUserSelect":null;g.zc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Lc;g.uca=Object.prototype.hasOwnProperty;g.Kc=!!window.google_async_iframe_id;Lc=g.Kc&&window.parent||window;g.Pc.prototype.getUrl=function(a,b,c,d){a=a+"//"+b+c;var e=taa(this)-c.length-d.length;if(0>e)return"";this.C.sort(function(a,b){return a-b});
c=null;b="";for(var f=0;f<this.C.length;f++)for(var k=this.C[f],l=this.F[k],p=0;p<l.length;p++){if(!e){c=null==c?k:c;break}var r=Sc(l[p],this.D,this.O);if(r){r=b+r;if(e>=r.length){e-=r.length;a+=r;b=this.D;break}else this.H&&(b=e,r[b-1]==this.D&&--b,a+=r.substr(0,b),b=this.D,e=0);c=null==c?k:c}}f="";this.G&&null!=c&&(f=b+this.G+"="+(this.W||c));return a+f+d};Wc.prototype.disable=function(){this.events!=this.F.google_js_reporting_queue&&(this.events.length=0,this.D&&(0,g.z)(this.events,this.G,this));this.C=!1};
Wc.prototype.G=function(a){if(a&&this.D){var b=this.F.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};
Wc.prototype.start=function(a,b){if(!this.C)return null;var c=new uaa(a,b);this.D&&this.F.performance.mark("goog_"+c.uniqueId+"_start");return c};
Wc.prototype.end=function(a){this.C&&g.ra(a.value)&&(a.duration=Vc()-a.value,this.D&&this.F.performance.mark("goog_"+a.uniqueId+"_end"),this.C&&this.events.push(a))};Yc.prototype.D=function(a,b,c,d,e){e=e||this.K;try{var f=new g.Pc;f.H=!0;Tc(f,1,"context",a);b.error&&b.meta&&b.id||(b=g.ad(b));b.msg&&Tc(f,2,"msg",b.msg.substring(0,512));b.file&&Tc(f,3,"file",b.file);0<b.line&&Tc(f,4,"line",b.line);var k=b.meta||{};if(d)try{d(k)}catch(Y){}b=[k];f.C.push(5);f.F[5]=b;var l=g.Ic(),p=new Hc(g.m.location.href,g.m,!1),r=l.length-1;for(b=r;0<=b;--b){var w=l[b];if(w.url&&!w.jq){p=w;break}}var w=null,C=l.length&&l[r].url;0!=p.depth&&C&&(w=l[r]);var K=new saa(p,w);K.F&&Tc(f,
6,"top",K.F.url||"");Tc(f,7,"url",K.C.url||"");g.Uc(this.G,e,f,c)}catch(Y){try{g.Uc(this.G,e,{context:"ecmserr",rctx:a,msg:g.$c(Y),url:K.C.url},c)}catch(V){}}return this.F};
g.la(Zc,Oc);var Kk,Lk;Kk=g.Nc();Lk=new Wc(1,Kk);g.Ik=new function(){var a=void 0===a?g.J:a;this.G="http:"===a.location.protocol?"http:":"https:";this.F="pagead2.googlesyndication.com";this.D="/pagead/gen_204?id=";this.C=.01};
g.Jk=new Yc(g.Ik,"jserror",!0,Lk);"complete"==Kk.document.readyState?Kk.google_measure_js_timing||Lk.disable():Lk.C&&g.tb(Kk,"load",function(){Kk.google_measure_js_timing||Lk.disable()});var Mk;Mk={};g.Nk=(Mk[8]="google_prev_ad_formats_by_region",Mk[9]="google_prev_ad_slotnames_by_region",Mk);g.Ok=(new Date).getTime();g.h=g.dd.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.pa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.Xc)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Ia)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.pa(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Fc=g.ba(2);g.h.Jb=g.ba(3);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Ab=g.ba(7);g.h.ee=g.ba(8);g.h.clear=function(){for(var a=g.ed(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.sh=new g.dd("undefined"==typeof window.document?null:window.document);g.sh.F=3950;g.fd.prototype.Ec=!1;g.fd.prototype.nb=function(){return this.Ec};
g.fd.prototype.dispose=function(){this.Ec||(this.Ec=!0,this.X())};
g.fd.prototype.X=function(){if(this.Lb)for(;this.Lb.length;)this.Lb.shift()()};g.jd.prototype.stopPropagation=function(){this.F=!0};
g.jd.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Ss=!1};var Ad,wca;g.vca=!g.y||g.Ib(9);Ad=!g.y||g.Ib(9);wca=g.y&&!g.Gb("9");!g.kc||g.Gb("528");g.pk&&g.Gb("1.9b")||g.y&&g.Gb("8")||g.mk&&g.Gb("9.5")||g.kc&&g.Gb("528");g.pk&&!g.Gb("8")||g.y&&g.Gb("9");var Baa=function(){if(!g.m.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.m.addEventListener("test",null,b);g.m.removeEventListener("test",null,b);return a}();g.Pk=g.y?"focusin":"DOMFocusIn";g.Qk=g.y?"focusout":"DOMFocusOut";g.Rk=g.kc?"webkitTransitionEnd":g.mk?"otransitionend":"transitionend";g.v(g.kd,g.jd);
g.kd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.pk&&(g.pb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.K=g.qk?a.metaKey:a.ctrlKey;this.state=a.state;this.xc=a;a.defaultPrevented&&this.preventDefault()};
g.kd.prototype.stopPropagation=function(){g.kd.M.stopPropagation.call(this);this.xc.stopPropagation?this.xc.stopPropagation():this.xc.cancelBubble=!0};
g.kd.prototype.preventDefault=function(){g.kd.M.preventDefault.call(this);var a=this.xc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,wca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ld="closure_listenable_"+(1E6*Math.random()|0),yaa=0;g.h=g.od.prototype;g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=pd(e,b,c,d);return-1<b?(nd(e[b]),g.Ra(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,nd(d[e]);delete this.listeners[c];this.C--}return b};
g.h.hg=g.ba(10);g.h.mf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=pd(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.pa(a),d=c?a.toString():"",e=g.pa(b);return g.db(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var xd="closure_lm_"+(1E6*Math.random()|0),Ed={},zd=0,Hd="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.Id,g.fd);g.Id.prototype[ld]=!0;g.h=g.Id.prototype;g.h.Ci=function(){return this.dm};
g.h.Dh=g.ba(11);g.h.addEventListener=function(a,b,c,d){g.td(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Bd(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Ci();if(b){var c=[];for(var d=1;b;b=b.Ci())c.push(b),++d}b=this.Av;d=a.type||a;if(g.qa(a))a=new g.jd(a,b);else if(a instanceof g.jd)a.target=a.target||b;else{var e=a;a=new g.jd(d,b);g.nb(a,e)}var e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=Jd(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=Jd(k,d,!0,a)&&e,a.F||(e=Jd(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=Jd(k,d,!1,a)&&e;return e};
g.h.X=function(){g.Id.M.X.call(this);this.removeAllListeners();this.dm=null};
g.h.R=function(a,b,c,d){return qd(this.wd,String(a),b,!1,c,d)};
g.h.Me=function(a,b,c,d){return qd(this.wd,String(a),b,!0,c,d)};
g.h.Wa=function(a,b,c,d){return this.wd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.wd?this.wd.removeAll(a):0};
g.h.hg=g.ba(9);g.h.mf=function(a,b,c,d){return this.wd.mf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.wd.hasListener(g.pa(a)?String(a):void 0,b)};Kd.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};g.Sk=g.Md(null);var Wd;var Td=new Kd(function(){return new Pd},function(a){a.reset()},100);
Od.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
Pd.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
Pd.prototype.reset=function(){this.next=this.scope=this.lc=null};var Qd,Rd=!1,Sd=new Od;ae.prototype.reset=function(){this.context=this.F=this.D=this.C=null;this.G=!1};
var be=new Kd(function(){return new ae},function(a){a.reset()},100);
g.$d.prototype.then=function(a,b,c){return ge(this,g.xa(a)?a:null,g.xa(b)?b:null,c)};
g.Xd(g.$d);g.$d.prototype.cancel=function(a){0==this.C&&Ud(function(){var b=new oe(a);ie(this,b)},this)};
g.$d.prototype.W=function(a){this.C=0;g.Zd(this,2,a)};
g.$d.prototype.N=function(a){this.C=0;g.Zd(this,3,a)};
g.$d.prototype.J=function(){for(var a;a=je(this);)ke(this,a,this.C,this.O);this.K=!1};
var qe=Nd;g.v(oe,g.Ca);oe.prototype.name="cancel";g.v(g.te,g.fd);g.h=g.te.prototype;g.h.pb=0;g.h.X=function(){g.te.M.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.pb=g.re(this.wc,g.pa(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.se(this.pb);this.pb=0};
g.h.isActive=function(){return 0!=this.pb};
g.h.Ok=function(){this.pb=0;this.C&&this.C.call(this.F)};g.xe="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.we.prototype.next=function(){throw g.xe;};
g.we.prototype.cd=function(){return this};Ce.prototype.Ij=function(a){var b=[];Ee(this,a,b);return b.join("")};
var Ge={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jaa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;g.v(g.He,g.fd);g.h=g.He.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.qd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.sa):(c&&g.Sa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a){var b=this.F[a];if(b){for(var c=Array(arguments.length-1),d=1,e=arguments.length;d<e;d++)c[d-1]=arguments[d];if(this.K)for(d=0;d<b.length;d++){var f=b[d];Kaa(this.C[f+1],this.C[f+2],c)}else{this.G++;try{for(d=0,e=b.length;d<e;d++)f=b[d],this.C[f+1].apply(this.C[f+2],c)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;f=this.D.pop();)this.qd(f)}}return 0!=d}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.z)(b,this.qd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Ab=g.ba(6);g.h.X=function(){g.He.M.X.call(this);this.clear();this.D.length=0};g.Je.prototype.set=function(a,b){g.pa(b)?this.C.set(a,g.De(b)):this.C.remove(a)};
g.Je.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return g.Be(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Je.prototype.remove=function(a){this.C.remove(a)};g.v(Ke,g.Je);Ke.prototype.set=function(a,b){Ke.M.set.call(this,a,Me(b))};
Ke.prototype.F=function(a){a=Ke.M.get.call(this,a);if(!g.pa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ke.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.pa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.Ne,Ke);g.Ne.prototype.set=function(a,b,c){if(b=Me(b)){if(c){if(c<(0,g.Xc)()){g.Ne.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.Xc)()}g.Ne.M.set.call(this,a,b)};
g.Ne.prototype.F=function(a,b){var c=g.Ne.M.F.call(this,a);if(c)if(!b&&g.Oe(c))g.Ne.prototype.remove.call(this,a);else return c};g.v(g.Pe,g.Ne);g.v(g.Qe,Laa);g.Qe.prototype.Ab=g.ba(5);g.Qe.prototype.clear=function(){var a=Iaa(this.cd(!0)),b=this;(0,g.z)(a,function(a){b.remove(a)})};g.v(g.Re,g.Qe);g.h=g.Re.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.qa(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Ab=g.ba(4);g.h.cd=function(a){var b=0,c=this.C,d=new g.we;d.next=function(){if(b>=c.length)throw g.xe;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.qa(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.Se,g.Re);g.v(Te,g.Re);g.ng="Microsoft Internet Explorer"==window.navigator.appName;g.Mg=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};g.Ve=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.n("yt.config_",g.Ve,void 0);var df={};var xca=g.q("ytPubsubPubsubInstance")||new g.He;g.He.prototype.subscribe=g.He.prototype.subscribe;g.He.prototype.unsubscribeByKey=g.He.prototype.qd;g.He.prototype.publish=g.He.prototype.oa;g.He.prototype.clear=g.He.prototype.clear;g.n("ytPubsubPubsubInstance",xca,void 0);var kf=g.q("ytPubsubPubsubSubscribedKeys")||{};g.n("ytPubsubPubsubSubscribedKeys",kf,void 0);var mf=g.q("ytPubsubPubsubTopicToKeys")||{};g.n("ytPubsubPubsubTopicToKeys",mf,void 0);var lf=g.q("ytPubsubPubsubIsSynchronous")||{};
g.n("ytPubsubPubsubIsSynchronous",lf,void 0);var Naa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Oaa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.rf=null;(0,g.Xc)();var Bf=g.pa(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.pa(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var Gf,Hf;Gf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};Hf=!1;g.Tk=Jf;g.la(Of,g.Ca);Qf.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.Yd(a)?a:Sf(a)):2===this.F&&b?(a=b.call(c,this.C),g.Yd(a)?a:Rf(a)):this};
Qf.prototype.getValue=function(){return this.C};
g.Xd(Qf);var Taa;g.la(Tf,g.Ca);Tf.prototype.name="BiscottiError";g.la(Uf,g.Ca);Uf.prototype.name="BiscottiMissingError";Taa={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0};g.Wf=null;var yca=0,Uaa=g.kc?"webkit":g.pk?"moz":g.y?"ms":g.mk?"o":"",ag=g.q("ytDomDomGetNextId")||function(){return++yca};
g.n("ytDomDomGetNextId",ag,void 0);var Vaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.cg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.cg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.cg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var dg=g.q("ytEventsEventsListeners")||{};g.n("ytEventsEventsListeners",dg,void 0);var fg=g.q("ytEventsEventsCounter")||{count:0};g.n("ytEventsEventsCounter",fg,void 0);g.la(ig,g.fd);ig.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.Be);break}};
ig.prototype.X=function(){kg(this);g.fd.prototype.X.call(this)};var Waa={enablejsapi:1},Xaa={},Yaa={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};lg.prototype.clone=function(){var a=new lg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.ua(c)?a[b]=g.lb(c):a[b]=c}return a};g.ta(g.og);g.og.prototype.getVersion=function(){return[this.major,this.minor,this.C]};
g.og.prototype.isSupported=function(a,b,c){a="string"==typeof a?a.split("."):[a,b,c];a[0]=(0,window.parseInt)(a[0],10)||0;a[1]=(0,window.parseInt)(a[1],10)||0;a[2]=(0,window.parseInt)(a[2],10)||0;return this.major>a[0]||this.major==a[0]&&this.minor>a[1]||this.major==a[0]&&this.minor==a[1]&&this.C>=a[2]};g.rg=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.n("yt.msgs_",g.rg,void 0);var wg=0,xg={};var Zaa,Pg,Cg;Zaa={log_event:"events",log_event2:"events",log_interaction:"interactions"};Pg=Object.create(null);Pg.log_event="GENERIC_EVENT_LOGGING";Pg.log_event2="GENERIC_EVENT_LOGGING";Pg.log_interaction="INTERACTION_LOGGING";g.Kg={};Cg={};g.Ig=0;g.Jg=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.n("ytLoggingTransportLogPayloadsQueue_",g.Jg,void 0);var Dg=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.n("ytLoggingTransportTokensToCttTargetIds_",Dg,void 0);
var Lg=g.q("ytLoggingTransportDispatchedStats_")||{};g.n("ytLoggingTransportDispatchedStats_",Lg,void 0);var Qg=g.q("ytLoggingTransportCapturedTime_")||{};g.n("ytytLoggingTransportCapturedTime_",Qg,void 0);var gj=Sg;var ah=g.q("ytLoggingLatencyUsageStats_")||{};g.n("ytLoggingLatencyUsageStats_",ah,void 0);var bh=0;var Uk,Vk;Uk=new g.Se;g.dh=Uk.isAvailable()?new g.Pe(Uk):null;Vk=new Te;g.ch=Vk.isAvailable()?new g.Pe(Vk):null;var hh=(0,g.Xc)().toString();var lh;lh=0;g.jh=0;g.h=g.nh.prototype;g.h.pL=function(){this.Zi()||this.init()};
g.h.enable=function(){this.C=1;(0,g.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.pL,this),this.subscribe("dispose-"+a,this.dispose,this),g.B("PAGE_NAME")==a&&g.oh(this))},this)};
g.h.init=function(){g.xf(this.F);this.C=2;this.K&&this.K()};
g.h.Zi=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.xf(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Ye(a)}};
g.h.subscribe=function(a,b,c){a=g.E(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.nf(this.G);this.G=[]};var ph=g.q("yt.modules.registry_")||{};g.n("yt.modules.registry_",ph,void 0);var vh={},dba=0;var eba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var zca=g.q("yt.abuse.botguardInitialized")||sf;g.n("yt.abuse.botguardInitialized",zca,void 0);var Aca=g.q("yt.abuse.invokeBotguard")||g.tf;g.n("yt.abuse.invokeBotguard",Aca,void 0);var Bca=g.q("yt.abuse.dclkstatus.checkDclkStatus")||zf;g.n("yt.abuse.dclkstatus.checkDclkStatus",Bca,void 0);var Cca=g.q("yt.player.exports.navigate")||g.Bh;g.n("yt.player.exports.navigate",Cca,void 0);var Dca=g.q("yt.util.activity.init")||g.Tg;g.n("yt.util.activity.init",Dca,void 0);
var Eca=g.q("yt.util.activity.getTimeSinceActive")||g.Ug;g.n("yt.util.activity.getTimeSinceActive",Eca,void 0);var Fca=g.q("yt.util.activity.setTimestamp")||gj;g.n("yt.util.activity.setTimestamp",Fca,void 0);var Wk={},tba=(Wk["api.invalidparam"]=2,Wk.auth=150,Wk["drm.auth"]=150,Wk["heartbeat.net"]=150,Wk["heartbeat.servererror"]=150,Wk["heartbeat.stop"]=150,Wk["html5.unsupportedads"]=5,Wk["fmt.noneavailable"]=5,Wk["fmt.decode"]=5,Wk["fmt.unplayable"]=5,Wk["html5.missingapi"]=5,Wk["html5.unsupportedlive"]=5,Wk["drm.unavailable"]=5,Wk);var Xk={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Ii;var Yk=g.wb,Yk=Yk.toLowerCase();if(-1!=Yk.indexOf("android")){var Zk=Yk.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Zk)Ii=(0,window.parseFloat)(Zk[1]);else{var $k=Yk.match("("+g.eb(Xk).join("|")+")");Ii=$k?Xk[$k[0]]:0}}else Ii=void 0;var vba=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],wba=['audio/mp4; codecs="mp4a.40.2"'];g.Ch.prototype.Ij=function(){return{version:this.version,args:this.args}};g.Dh.prototype.toString=function(){return this.topic};var Gca=g.q("ytPubsub2Pubsub2Instance")||new g.He;g.He.prototype.subscribe=g.He.prototype.subscribe;g.He.prototype.unsubscribeByKey=g.He.prototype.qd;g.He.prototype.publish=g.He.prototype.oa;g.He.prototype.clear=g.He.prototype.clear;g.n("ytPubsub2Pubsub2Instance",Gca,void 0);g.al=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.n("ytPubsub2Pubsub2SubscribedKeys",g.al,void 0);g.bl=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.n("ytPubsub2Pubsub2TopicToKeys",g.bl,void 0);
g.cl=g.q("ytPubsub2Pubsub2IsAsync")||{};g.n("ytPubsub2Pubsub2IsAsync",g.cl,void 0);g.n("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.la(Ih,g.Ch);g.la(Jh,g.Ch);var iba=new g.Dh("aft-recorded",Ih),mba=new g.Dh("timing-sent",Jh);var Wh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};Mh.prototype.toString=function(){return this.region.toString()+": "+this.timing+" => "+this.url};
Nh.prototype.toString=function(){return["progress",this.progress,"timing",this.timing,"area",this.Zf].join(": ")};
Lh.F=.1;Lh.C=/url\(["']?(http[^'"\)]+)['"]?\)/i;Lh.D="mark_iframe_loaded: ";Lh.G=20;var kba={vc:!0},pi={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'script[name="mobile_polymer/mobile_polymer"]':"mpj",
'link[rel="import"][name="mobile_polymer"]':"mph",'script[name="player-plasma-phone/base"]':"mpppj",'script[name="player-plasma-tablet/base"]':"mpptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mppc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",
'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},ni={ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",plid:"videoId",fmt:"playerInfo.itag",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",st:"serverTimeMs",yt_vis:"isVisible"},pba="ap c cver ei srt yt_fss yt_li GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid ad_allowed ad_docid ba cmt ncnp nr p pa paused pc prerender psc rc start vpil vpni vps yt_abt yt_ad_an yt_eil yt_fn yt_fs yt_pft yt_pl yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
sba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH",
"watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS","video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS"},oba=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],fi=!1,hba=(0,g.t)(Wh.clearResourceTimings||Wh.webkitClearResourceTimings||Wh.mozClearResourceTimings||Wh.msClearResourceTimings||Wh.oClearResourceTimings||
g.sa,Wh);g.v(wi,g.fd);var uba=["fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g.h=wi.prototype;g.h.getId=function(){return this.ea};
g.h.cn=function(a,b){this.nb()||(yi(this,a),Gi(this,b),this.O&&Di(this))};
g.h.Ww=function(){return this.Eb};
g.h.BM=function(){if(!this.na){var a=Ji(this);if(a&&"html5"==Li(this))this.W="html5",this.O||this.wg();else if(Ni(this),this.W="html5",a&&this.H)this.G.appendChild(this.H),this.wg();else{this.C.loaded=!0;var b=!1;this.ma=(0,g.t)(function(){b=!0;var a=this.G,d=this.C.clone();g.q("yt.player.Application.create")(a,d);this.wg()},this);
this.na=!0;a?this.ma():(g.qf(this.C.assets.js,this.ma),g.wh(this.C.assets.css),Mi(this)&&!b&&g.n("yt.player.Application.create",null,void 0))}}};
g.h.AM=function(){var a=this.C.clone();if(!this.K){var b=Fi(this);b&&(this.K=g.oc("SPAN"),this.K.tabIndex=0,jg(this.Aa,this.K,"focus",this.kr),this.N=g.oc("SPAN"),this.N.tabIndex=0,jg(this.Aa,this.N,"focus",this.kr),g.qc(this.K,b),g.rc(this.N,b))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";"flash"==Li(this)?(this.W="flash",this.O||this.wg()):(Ni(this),this.W="flash",this.C.loaded=!0,b=g.og.getInstance(),b=g.pg(b)||!g.qg(b)?a.url:a.urlV9As2,window!=window.top&&window.document.referrer&&
(a.args.framer=window.document.referrer.substring(0,128)),g.vg(this.G,b,a),this.wg())};
g.h.kr=function(){Fi(this).focus()};
g.h.wg=function(){if(!this.nb()){var a=Fi(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.na=!1,a.isNotServable&&a.isNotServable(this.C.args.video_id))Hi(this);else{ui(this);this.O=!0;a=Fi(this);a.addEventListener&&(this.Y=Ki(this,a,"addEventListener"));a.removeEventListener&&(this.ib=Ki(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=Ki(this,a,d))}for(var e in this.D)this.Y(e,
this.D[e]);Di(this);this.jb&&this.jb(this.api);this.ia.oa("onReady",this.api)}else this.dc=g.hf((0,g.t)(this.wg,this),50)}};
g.h.PM=function(){return this.O};
g.h.Xd=function(a,b){if(!this.nb()){var c=xi(this,b);if(c){if(!g.Pa(this.Cc,a)&&!this.D[a]){var d=xba(this,a);this.Y&&this.Y(a,d)}this.ia.subscribe(a,c);"onReady"==a&&this.O&&g.hf(g.u(c,this.api),0)}}};
g.h.dL=function(a,b){if(!this.nb()){var c=xi(this,b);c&&g.Ie(this.ia,a,c)}};
g.h.Vv=function(a){a=a?raa:qaa;for(var b=a(window.document.activeElement);b&&(1!=b.nodeType||b==this.K||b==this.N||(b.focus(),b!=window.document.activeElement));)b=a(b)};
g.h.Cn=function(a){g.F("a11y-announce",a)};
g.h.BG=function(a){Hi(this,a)};
g.h.FG=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.h.GG=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.nG=function(){this.Pc||(g.Xj?(this.tb=g.jc(window.document),jg(this.V,window,"scroll",this.aJ),jg(this.V,this.G,"touchmove",this.vI)):(jg(this.V,this.G,"mousewheel",this.Dr),jg(this.V,this.G,"wheel",this.Dr)),this.Pc=!0)};
g.h.oG=function(){kg(this.V);this.Pc=!1};
g.h.Dr=function(a){g.gg(a)};
g.h.aJ=function(){window.scrollTo(this.tb.x,this.tb.y)};
g.h.vI=function(a){a.preventDefault()};
g.h.Nx=function(){return this.W||Li(this)};
g.h.ux=function(){return this.Dd};
g.h.cancel=function(){if(this.ma){var a=this.ma,b=g.pf(this.C.assets.js);window.spf.script.ignore(b,a)}g.ff(this.dc);this.na=!1};
g.h.X=function(){Ni(this);if(this.H&&this.C&&this.H.destroy)try{this.H.destroy()}catch(b){g.Ye(b)}this.qb=null;for(var a in this.D)g.m[this.D[a]]=null;this.Eb=this.C=this.api=null;delete this.G;delete this.J;wi.M.X.call(this)};g.Pi={};g.Oi="player_uid_"+(1E9*Math.random()>>>0);var Vi=null;g.dl=window.performance&&window.performance.memory;g.Hj={};var bj=0,cj=0,dj=[],aj=[],$i=0,Xi={},Yi={},Wi=new g.te(Fba,1E3);var Iba=["server_prefetched_vast","vmap"];var ij,nj;g.mj=null;nj="";var oj=null,rj=[];var vj,Nj,Mj,xj,wj,Oba,Rba,Pba,Qba,Ij;xj=0;wj=0;Oba=[900,60,"waiting"];Rba=[500,99,"waiting"];Pba=[300,60,"waiting"];Qba=[400,99,"waiting"];Ij=[300,101,"done"];window.yt=window.yt||{};g.n("yt.setConfig",g.We,void 0);g.n("yt.pushConfigArray",Xe,void 0);g.n("yt.getConfig",g.B,void 0);g.n("yt.config.set",g.We,void 0);g.n("yt.config.pushArray",Xe,void 0);g.n("yt.config.get",g.B,void 0);g.n("yt.hasMsg",g.sg,void 0);g.n("yt.setMsg",tg,void 0);g.n("yt.setGoogMsg",ug,void 0);g.n("yt.msgs.has",g.sg,void 0);g.n("yt.msgs.set",tg,void 0);g.n("yt.msgs.setGoog",ug,void 0);g.n("yt.pubsub.publish",g.F,void 0);g.n("yt.pubsub.subscribe",g.E,void 0);
g.n("ytcsi.tick",g.Vh,void 0);g.v(ck,g.nh);
ck.prototype.enable=function(){window.onload=Mba;window.onunload=Nba;window.onerror=Maa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",tj),window.addEventListener("spfhistory",uj),window.addEventListener("spfrequest",zj),window.addEventListener("spfpartprocess",Dj),window.addEventListener("spfpartdone",Ej),window.addEventListener("spfprocess",Fj),window.addEventListener("spfdone",Jj),window.addEventListener("spferror",Kj),window.addEventListener("spfreload",
Lj),window.addEventListener("spfjsbeforeunload",dk)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Tba),this.subscribe("dispose",Uba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
ck.prototype.init=function(){ck.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.B("PAGEFRAME_JS")){var b=g.B("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
var a=g.B("JS_COMMON_MODULE"),d=g.B("JS_PAGE_MODULES");d||(d=[a]);a=g.B("JS_DELAY_LOAD",0);0<a?(g.ff(this.D),this.D=g.hf(function(){b&&g.qf(b,c);window.spf.script.require(d)},a)):(b&&g.qf(b,c),window.spf.script.require(d));
Kba();ji();nba();si(!0);g.Uh(!1);g.B("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&"https:"==window.location.protocol&&(g.af("service_worker_enabled")?fca():dca())};
ck.prototype.dispose=function(){g.ff(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.ef(ij);if(a=g.kj())a.removeEventListener("onReady",jj),a.removeEventListener("onStateChange",jj);si(!1);(a=Wj())&&g.hg(a);ck.M.dispose.call(this)};
ck.prototype.disable=function(){ck.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",tj),window.removeEventListener("spfhistory",uj),window.removeEventListener("spfrequest",zj),window.removeEventListener("spfpartprocess",Dj),window.removeEventListener("spfpartdone",Ej),window.removeEventListener("spfprocess",Fj),window.removeEventListener("spfdone",Jj),window.removeEventListener("spferror",Kj),window.removeEventListener("spfreload",Lj),window.removeEventListener("spfjsbeforeunload",
dk));window.onload=null;window.onunload=null;window.onerror=null};
g.rh(new ck);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:06:22 Jul 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:26:20 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 87.893
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.07
  cdx.remote: 0.066
  esindex: 0.009
  LoadShardBlock: 30.956 (3)
  PetaboxLoader3.datanode: 33.504 (4)
  load_resource: 38.281
  PetaboxLoader3.resolve: 31.375
*/