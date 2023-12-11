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

var _yt_www={};(function(g){var window=this;var ca,ha,fa,ia,baa,oa,pa,daa,eaa,Va,pb,naa,tb,paa,Bc,qaa,raa,Cc,Dc,Mc,taa,Qc,Sc,Tc,Xc,uaa,$c,gd,fd,waa,jd,kd,ld,md,xaa,nd,od,sd,yaa,td,Ad,Id,Gd,Dd,Aaa,Ld,Jd,Kd,Od,zaa,Baa,Td,Ud,Yd,Caa,Daa,Eaa,de,fe,Gaa,ke,le,me,Haa,qe,ve,we,xe,ye,ze,Ke,Ne,Pe,Kaa,Re,af,mf,Naa,vf,qf,Oaa,Paa,Qaa,Ff,Gf,Raa,Lf,Jf,Hf,Nf,Uf,dg,eg,Yaa,kg,Ag,Gg,Hg,Zaa,Ng,Og,Vg,Ug,$aa,Zg,gh,kh,nh,ph,aba,dba,Ch,Dh,Eh,Fh,eba,Rh,Th,Sh,Vh,Uh,Wh,Xh,Yh,hba,bi,Lh,Mh,Hh,hi,kba,lba,Nh,di,Jh,Ih,Kh,ki,Ph,Zh,Qh,nba,ci,ai,mi,oi,pi,ri,qba,qi,si,rba,vi,
ni,wi,sba,ti,ui,tba,Di,uba,Aba,zba,yba,Li,xba,vba,wba,Bba,Cba,Eba,Fba,Zi,Ui,Wi,aj,Gba,bj,dj,Hba,Iba,ej,fj,kj,oj,pj,qj,uj,vj,wj,Pba,Qba,lj,nj,jj,Oba,mj,Aj,Cj,zj,Dj,Bj,Rba,Vba,Sba,Yba,Uba,Tba,Wba,Xba,$ba,Hj,Zba,Ej,aca,cca,eca,dca,bca,Ij,Jj,Kj,ea,da,aaa,ka,Lj,Ba,caa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(){ca=function(){};
da.Symbol||(da.Symbol=aaa)};
ha=function(){ca();var a=da.Symbol.iterator;a||(a=da.Symbol.iterator=da.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ea(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});
ha=function(){}};
fa=function(a){var b=0;return ia(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
ia=function(a){ha();a={next:a};a[da.Symbol.iterator]=function(){return this};
return a};
g.ja=function(a){ha();var b=a[window.Symbol.iterator];return b?b.call(a):fa(a)};
g.ma=function(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};
baa=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
oa=function(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ea(c,d,{configurable:!0,writable:!0,value:f})}};
pa=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.qa=function(a){return void 0!==a};
g.ra=function(a){return"string"==typeof a};
g.sa=function(a){return"boolean"==typeof a};
g.ta=function(a){return"number"==typeof a};
g.p=function(a,b,c){a=a.split(".");c=c||g.n;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.qa(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.r=function(a,b){for(var c=a.split("."),d=b||g.n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.ua=function(){};
g.va=function(a){a.Ac=void 0;a.getInstance=function(){return a.Ac?a.Ac:a.Ac=new a}};
g.wa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.xa=function(a){return"array"==g.wa(a)};
g.ya=function(a){var b=g.wa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.za=function(a){return"function"==g.wa(a)};
g.Aa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ca=function(a){return a[Ba]||(a[Ba]=++caa)};
daa=function(a,b,c){return a.call.apply(a.bind,arguments)};
eaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.t=daa:g.t=eaa;return g.t.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.w=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.aw=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];b.prototype[c].apply(a,d)}};
g.Da=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Da);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Fa=function(a,b,c){b=g.Ea(a,b,c);return 0>b?null:g.ra(a)?a.charAt(b):a[b]};
g.Ea=function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ha=function(a,b){return 0<=(0,g.Ga)(a,b)};
g.Ia=function(a){return 0==a.length};
g.Ka=function(a,b){var c=(0,g.Ga)(a,b),d;(d=0<=c)&&g.Ja(a,c);return d};
g.Ja=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.La=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Ma=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.ya(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Na=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Oa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Pa=function(a){return/^[\s\xa0]*$/.test(a)};
g.Qa=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Sa=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ta=function(a){if(!faa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(haa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(iaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jaa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kaa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(laa,"&#0;"));return a};
g.Wa=function(a,b){for(var c=0,d=(0,g.Ua)(String(a)).split("."),e=(0,g.Ua)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=Va(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==m[1].length?0:(0,window.parseInt)(m[1],10))||Va(0==l[2].length,0==m[2].length)||Va(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
Va=function(a,b){return a<b?-1:a>b?1:0};
g.Xa=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.$a=function(a){return-1!=g.Ya.indexOf(a)};
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
g.lb=function(){return g.$a("Trident")||g.$a("MSIE")};
g.nb=function(){return g.$a("Safari")&&!(g.mb()||g.$a("Coast")||g.$a("Opera")||g.$a("Edge")||g.$a("Silk")||g.$a("Android"))};
g.mb=function(){return(g.$a("Chrome")||g.$a("CriOS"))&&!g.$a("Edge")};
g.ob=function(){return g.$a("Android")&&!(g.mb()||g.$a("Firefox")||g.$a("Opera")||g.$a("Silk"))};
pb=function(){return g.$a("iPhone")&&!g.$a("iPod")&&!g.$a("iPad")};
g.qb=function(){return pb()||g.$a("iPad")||g.$a("iPod")};
g.rb=function(a){g.rb[" "](a);return a};
g.sb=function(a,b){try{return g.rb(a[b]),!0}catch(c){}return!1};
naa=function(a,b){var c=maa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
tb=function(){var a=g.n.document;return a?a.documentMode:void 0};
g.vb=function(a){return naa(a,function(){return 0<=g.Wa(g.ub,a)})};
g.xb=function(a){return Number(g.wb)>=a};
g.zb=function(){this.C="";this.F=g.yb};
g.Ab=function(a){var b=new g.zb;b.C=a;return b};
g.Cb=function(){this.F="";this.D=Bb};
g.Db=function(a){if(a instanceof g.Cb&&a.constructor===g.Cb&&a.D===Bb)return a.F;g.wa(a);return"type_error:SafeUrl"};
g.Gb=function(a){if(a instanceof g.Cb)return a;a=a.Ud?a.Tc():String(a);Eb.test(a)||(a="about:invalid#zClosurez");return g.Fb(a)};
g.Hb=function(a){if(a instanceof g.Cb)return a;a=a.Ud?a.Tc():String(a);Eb.test(a)||(a="about:invalid#zClosurez");return g.Fb(a)};
g.Fb=function(a){var b=new g.Cb;b.F=a;return b};
g.Jb=function(){this.C="";this.F=g.Ib};
g.Kb=function(a){var b=new g.Jb;b.C=a;return b};
g.Mb=function(){this.C="";this.F=g.Lb};
g.Nb=function(a){var b=new g.Mb;b.C=a;return b};
g.Pb=function(){this.F="";this.G=Ob;this.D=null};
g.Qb=function(a){if(a instanceof g.Pb&&a.constructor===g.Pb&&a.G===Ob)return a.F;g.wa(a);return"type_error:SafeHtml"};
g.Sb=function(a){if(a instanceof g.Pb)return a;var b=null;a.Kl&&(b=a.C());a=g.Ta(a.Ud?a.Tc():String(a));return g.Rb(a,b)};
g.Rb=function(a,b){var c=new g.Pb;c.F=a;c.D=b;return c};
g.Tb=function(a,b){var c=b instanceof g.Cb?b:g.Hb(b);a.href=g.Db(c)};
g.Ub=function(a,b){var c=b instanceof g.Cb?b:g.Hb(b);a.href=g.Db(c)};
g.Vb=function(a,b){return g.Rb(b,null)};
g.Wb=function(a,b){this.x=g.qa(a)?a:0;this.y=g.qa(b)?b:0};
g.Xb=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Yb=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.Zb=function(a,b){this.width=a;this.height=b};
g.x=function(a){return g.ra(a)?window.document.getElementById(a):a};
g.$b=function(a){var b=window.document;return g.ra(a)?b.getElementById(a):a};
g.bc=function(a,b){g.ab(b,function(b,d){b&&b.Ud&&(b=b.Tc());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:ac.hasOwnProperty(d)?a.setAttribute(ac[d],b):g.Na(d,"aria-")||g.Na(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.dc=function(a){return g.cc(a||window)};
g.cc=function(a){a=a.document;a=g.ec(a)?a.documentElement:a.body;return new g.Zb(a.clientWidth,a.clientHeight)};
g.gc=function(a,b,c){return g.fc(window.document,arguments)};
g.fc=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ta(d.name),'"');if(d.type){c.push(' type="',g.Ta(d.type),'"');var e={};g.kb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ra(d)?c.className=d:g.xa(d)?c.className=d.join(" "):g.bc(c,d));2<b.length&&g.hc(a,c,b,2);return c};
g.hc=function(a,b,c,d){function e(c){c&&b.appendChild(g.ra(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.ya(f)||g.Aa(f)&&0<f.nodeType?e(f):(0,g.z)(paa(f)?g.La(f):f,e)}};
g.ec=function(a){return"CSS1Compat"==a.compatMode};
g.ic=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.jc=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.kc=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Aa(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.za(a))return"function"==typeof a.item}return!1};
g.lc=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.mc=function(a){return function(){return a}};
g.nc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.oc=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.pc=function(a){var b=[];g.oc(a,function(a){b.push(a)});
return b};
g.tc=function(){if(!qc){qc={};g.rc={};sc={};for(var a=0;65>a;a++)qc[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),g.rc[qc[a]]=a,sc[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(g.rc["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};
g.uc=function(a){this.C=a||{cookie:""}};
g.vc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.Ua)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.wc=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.xc=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.yc=function(a,b){a.style.height=g.xc(b,!0)};
g.zc=function(a,b){a.style.width=g.xc(b,!0)};
g.Ac=function(a){return!!a.google_async_iframe_id};
Bc=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
qaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;v=q=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],l=e[3],m=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var q=l^d&(f^l);var v=1518500249}else q=d^f^l,v=1859775393;else 60>c?(q=d&f|l&(d|f),v=2400959708):(q=d^f^l,v=3395469782);q=((a<<5|a>>>27)&4294967295)+q+m+v+b[c]&4294967295;m=l;l=f;f=(d<<30|d>>>2)&4294967295;d=a;a=q}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+l&4294967295;e[4]=e[4]+m&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==q)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64;for(;d<c;)if(f[q++]=a[d++],v++,64==q)for(q=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,v+=64}
function d(){var a=[],d=8*v;56>q?c(l,56-q):c(l,64-(q-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var m=24;0<=m;m-=8)a[d++]=e[k]>>m&255;return a}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,v;a();return{reset:a,update:c,digest:d,Aw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
raa=function(a,b,c){var d=[],e=[];if(1==(g.xa(c)?2:1))return e=[b,a],(0,g.z)(d,function(a){e.push(a)}),Cc(e.join(" "));
var f=[],k=[];(0,g.z)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ia(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.z)(d,function(a){e.push(a)});
a=Cc(e.join(" "));a=[c,a];g.Ia(k)||a.push(k.join(""));return a.join("_")};
Cc=function(a){var b=qaa();b.update(a);return b.Aw().toLowerCase()};
Dc=function(a){var b=Bc(String(g.n.location.href)),c=g.n.__OVERRIDE_SID;null==c&&(c=(new g.uc(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.n.__SAPISID:g.n.__APISID,null==b&&(b=(new g.uc(window.document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(g.n.location.href);return d&&b&&c?[c,raa(Bc(d),b,a||null)].join(" "):null}return null};
g.Ec=function(){this.Gc=this.Gc;this.Vb=this.Vb};
g.Hc=function(a,b){g.Fc(a,g.u(g.Gc,b))};
g.Fc=function(a,b){a.Gc?g.qa(void 0)?b.call(void 0):b():(a.Vb||(a.Vb=[]),a.Vb.push(g.qa(void 0)?(0,g.t)(b,void 0):b))};
g.Gc=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Ic=function(a,b){this.type=a;this.currentTarget=this.target=b;this.F=!1;this.qt=!0};
g.Jc=function(a){var b=g.r("window.location.href");if(g.ra(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.n.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
Mc=function(a){return g.Kc?"webkit"+a:g.Lc?"o"+a.toLowerCase():a.toLowerCase()};
g.Nc=function(a,b){g.Ic.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.yc=null;a&&this.init(a,b)};
g.Pc=function(a){return!(!a||!a[Oc])};
taa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.qh=e;this.key=++saa;this.Eg=this.ni=!1};
Qc=function(a){a.Eg=!0;a.listener=null;a.C=null;a.src=null;a.qh=null};
g.Rc=function(a){this.src=a;this.listeners={};this.C=0};
Sc=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Ka(a.listeners[c],b);d&&(Qc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
Tc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Eg&&f.listener==b&&f.capture==!!c&&f.qh==d)return e}return-1};
g.Vc=function(a,b,c,d,e){if(d&&d.once)return g.Uc(a,b,c,d,e);if(g.xa(b)){for(var f=0;f<b.length;f++)g.Vc(a,b[f],c,d,e);return null}c=g.Wc(c);return g.Pc(a)?a.O(b,c,g.Aa(d)?!!d.capture:!!d,e):Xc(a,b,c,!1,d,e)};
Xc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Aa(e)?!!e.capture:!!e,l=g.Yc(a);l||(a[Zc]=l=new g.Rc(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=uaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)vaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent($c(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ad++;return c};
uaa=function(){var a=waa,b=bd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Uc=function(a,b,c,d,e){if(g.xa(b)){for(var f=0;f<b.length;f++)g.Uc(a,b[f],c,d,e);return null}c=g.Wc(c);return g.Pc(a)?a.Qe(b,c,g.Aa(d)?!!d.capture:!!d,e):Xc(a,b,c,!0,d,e)};
g.cd=function(a,b,c,d,e){if(g.xa(b))for(var f=0;f<b.length;f++)g.cd(a,b[f],c,d,e);else d=g.Aa(d)?!!d.capture:!!d,c=g.Wc(c),g.Pc(a)?a.Va(b,c,d,e):a&&(a=g.Yc(a))&&(b=a.sf(b,c,d,e))&&g.dd(b)};
g.dd=function(a){if(g.ta(a)||!a||a.Eg)return!1;var b=a.src;if(g.Pc(b))return Sc(b.yd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent($c(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ad--;(c=g.Yc(b))?(Sc(c,a),0==c.C&&(c.src=null,b[Zc]=null)):Qc(a);return!0};
$c=function(a){return a in ed?ed[a]:ed[a]="on"+a};
gd=function(a,b,c,d){var e=!0;if(a=g.Yc(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Eg&&(f=fd(f,d),e=e&&!1!==f)}return e};
fd=function(a,b){var c=a.listener,d=a.qh||a.src;a.ni&&g.dd(a);return c.call(d,b)};
waa=function(a,b){if(a.Eg)return!0;if(!bd){var c=b||g.r("window.event"),d=new g.Nc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=gd(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=gd(c[k],f,!1,d),e=e&&l}return e}return fd(a,new g.Nc(b,
this))};
g.Yc=function(a){a=a[Zc];return a instanceof g.Rc?a:null};
g.Wc=function(a){if(g.za(a))return a;a[hd]||(a[hd]=function(b){return a.handleEvent(b)});
return a[hd]};
g.id=function(){g.Ec.call(this);this.yd=new g.Rc(this);this.Jv=this;this.ym=null};
jd=function(a,b,c,d){b=a.yd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Eg&&k.capture==c){var l=k.listener,m=k.qh||k.src;k.ni&&Sc(a.yd,k);e=!1!==l.call(m,d)&&e}}return e&&0!=d.qt};
kd=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
ld=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
md=function(a){g.n.setTimeout(function(){throw a;},0)};
xaa=function(){var a=g.n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.$a("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.lb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.qa(c.next)){c=c.next;var a=c.ao;c.ao=null;a()}};
return function(a){d.next={ao:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.n.setTimeout(a,0)}};
nd=function(){this.F=this.C=null};
od=function(){this.next=this.scope=this.lc=null};
sd=function(a,b){pd||yaa();qd||(pd(),qd=!0);rd.add(a,b)};
yaa=function(){if(g.n.Promise&&g.n.Promise.resolve){var a=g.n.Promise.resolve(void 0);pd=function(){a.then(td)}}else pd=function(){var a=td;
!g.za(g.n.setImmediate)||g.n.Window&&g.n.Window.prototype&&!g.$a("Edge")&&g.n.Window.prototype.setImmediate==g.n.setImmediate?(ud||(ud=xaa()),ud(a)):g.n.setImmediate(a)}};
td=function(){for(var a;a=rd.remove();){try{a.lc.call(a.scope)}catch(b){md(b)}ld(vd,a)}qd=!1};
g.wd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.xd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.zd=function(a,b){this.C=0;this.R=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.ua)try{var c=this;a.call(b,function(a){g.yd(c,2,a)},function(a){g.yd(c,3,a)})}catch(d){g.yd(this,3,d)}};
Ad=function(){this.next=this.context=this.onRejected=this.D=this.C=null;this.F=!1};
g.Cd=function(a,b,c){var d=Bd.get();d.D=a;d.onRejected=b;d.context=c;return d};
g.Ed=function(a,b,c){Dd(a,b,c,null)||sd(g.u(b,a))};
g.Fd=function(a){return new g.zd(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,m;l<a.length;l++)m=a[l],g.Ed(m,g.u(f,l),k);
else b(e)})};
g.Hd=function(a,b){return Gd(a,null,b,void 0)};
Id=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.F||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Id(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Jd(c),Kd(c,e,3,b)))}a.D=null}else g.yd(a,3,b)};
g.Md=function(a,b){a.F||2!=a.C&&3!=a.C||Ld(a);a.G?a.G.next=b:a.F=b;a.G=b};
Gd=function(a,b,c,d){var e=g.Cd(null,null,null);e.C=new g.zd(function(a,k){e.D=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){k(q)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!g.qa(e)&&b instanceof g.Nd?k(b):a(e)}catch(q){k(q)}}:k});
e.C.D=a;g.Md(a,e);return e.C};
g.yd=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Dd(c,a.W,a.N,a)||(a.R=c,a.C=b,a.D=null,Ld(a),3!=b||c instanceof g.Nd||zaa(a,c)))};
Dd=function(a,b,c,d){if(a instanceof g.zd)return g.Md(a,g.Cd(b||g.ua,c||null,d)),!0;if(g.xd(a))return a.then(b,c,d),!0;if(g.Aa(a))try{var e=a.then;if(g.za(e))return Aaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Aaa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
Ld=function(a){a.L||(a.L=!0,sd(a.J,a))};
Jd=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Kd=function(a,b,c,d){if(3==c&&b.onRejected&&!b.F)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Od(b,c,d);else try{b.F?b.D.call(b.context):Od(b,c,d)}catch(e){Pd.call(null,e)}ld(Bd,b)};
Od=function(a,b,c){2==b?a.D.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
zaa=function(a,b){a.H=!0;sd(function(){a.H&&Pd.call(null,b)})};
g.Nd=function(a){g.Da.call(this,a)};
g.Qd=function(a,b,c){if(g.za(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.n.setTimeout(a,b||0)};
g.Rd=function(a){g.n.clearTimeout(a)};
g.Sd=function(a,b,c){g.Ec.call(this);this.C=a;this.D=b||0;this.F=c;this.xc=(0,g.t)(this.np,this)};
Baa=function(){this.F=-1};
Td=function(){this.F=64;this.C=[];this.L=[];this.R=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
Ud=function(a,b,c){c||(c=0);var d=a.R;if(g.ra(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):(f=c^k^l,
q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.Vd=function(a){if(a.classList)return a.classList;a=a.className;return g.ra(a)&&a.match(/\S+/g)||[]};
g.A=function(a,b){return a.classList?a.classList.contains(b):g.Ha(g.Vd(a),b)};
g.Wd=function(){};
Yd=function(a){if(a instanceof g.Wd)return a;if("function"==typeof a.ed)return a.ed(!1);if(g.ya(a)){var b=0,c=new g.Wd;c.next=function(){for(;;){if(b>=a.length)throw g.Xd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Zd=function(a,b,c){if(g.ya(a))try{(0,g.z)(a,b,c)}catch(d){if(d!==g.Xd)throw d;}else{a=Yd(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Xd)throw d;}}};
Caa=function(a){if(g.ya(a))return g.La(a);a=Yd(a);var b=[];g.Zd(a,function(a){b.push(a)});
return b};
g.ae=function(a,b){this.F={};this.C=[];this.Xe=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.$d(this,a)};
Daa=function(a,b){return a===b};
g.ce=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.be(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.be(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.$d=function(a,b){if(b instanceof g.ae)for(var c=b.Ic(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.be=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.ee=function(a){var b=[];de(new Eaa,a,b);return b.join("")};
Eaa=function(){};
de=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.xa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),de(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),fe(d,c),c.push(":"),de(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":fe(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
fe=function(a,b){b.push('"',a.replace(Faa,function(a){var b=ge[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),ge[a]=b);return b}),'"')};
g.he=function(a){g.Ec.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.ie=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Fa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.td(b)}};
Gaa=function(a,b,c){sd(function(){a.apply(b,c)})};
g.je=function(a){this.C=a};
ke=function(a){this.C=a};
le=function(a){this.data=a};
me=function(a){return!g.qa(a)||a instanceof le?a:new le(a)};
g.ne=function(a){this.C=a};
g.pe=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.oe)()||!!b&&b>(0,g.oe)()};
Haa=function(){};
qe=function(){};
g.se=function(a){this.C=a};
g.te=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
ve=function(a,b){this.F=a;this.C=null;if(g.B&&!g.xb(9)){ue||(ue=new g.ae);this.C=ue.get(a);this.C||(b?this.C=window.document.getElementById(b):(this.C=window.document.createElement("userdata"),this.C.addBehavior("#default#userData"),window.document.body.appendChild(this.C)),ue.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
we=function(a){return"_"+(0,window.encodeURIComponent)(a).replace(/[.!~*'()%]/g,function(a){return Iaa[a]})};
xe=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
ye=function(a){return a.C.XMLDocument.documentElement};
ze=function(a,b){this.F=a;this.C=b+"::"};
g.Ae=function(a){var b=new g.te;return b.isAvailable()?a?new ze(b,a):b:null};
g.Be=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.Ce=function(a){return a.match(Jaa)};
g.De=function(a){return a?(0,window.decodeURI)(a):a};
g.Ee=function(a){return g.De(g.Ce(a)[3]||null)};
g.Fe=function(a){a=g.Ce(a);return g.Be(null,null,null,null,a[5],a[6],a[7])};
g.Ge=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.He=function(a,b,c){if(g.xa(b))for(var d=0;d<b.length;d++)g.He(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Qa(b)))};
g.Ie=function(a){var b=[],c;for(c in a)g.He(c,a[c],b);return b.join("&")};
g.Je=function(a,b){var c=g.Ie(b);return g.Ge(a,c)};
Ke=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.Me=function(a){Ke(g.Le,arguments)};
Ne=function(a,b){var c=g.C(a,void 0);c?c.push(b):g.Me(a,[b])};
g.C=function(a,b){return a in g.Le?g.Le[a]:b};
Pe=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Oe(b)}}:a};
g.Oe=function(a,b,c,d,e){var f=g.r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.C("ERRORS",[]),f.push([a,b,c,d,e]),g.Me("ERRORS",f))};
g.Qe=function(a){g.Oe(a,"WARNING",void 0,void 0,void 0)};
Kaa=function(a,b,c,d,e){var f=!1,k;if((k=(k=g.Le.EXPERIMENT_FLAGS)?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else{k=window.document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(e||(g.ra(a)?f=a:window.ErrorEvent&&a instanceof window.ErrorEvent?(f=a.message,b=a.filename,c=a.lineno,d=a.colno):(f="Unknown error",b="Unknown file",c=0),a=Error(f),a.name="UnhandledWindowError",e=a,e.message=f,e.fileName=b,e.lineNumber=c,
(0,window.isNaN)(d)?delete e.columnNumber:e.columnNumber=d),g.Oe(e))};
g.Se=function(a){return!!Re(a)};
g.Te=function(a){return Number(Re(a)||0)};
Re=function(a){return g.C("EXPERIMENT_FLAGS",{})[a]};
g.D=function(a,b){return a?a.dataset?a.dataset[g.Ue(b)]:a.getAttribute("data-"+b):null};
g.Ue=function(a){return Ve[a]||(Ve[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.We=function(a,b){g.za(a)&&(a=Pe(a));return window.setTimeout(a,b)};
g.Xe=function(a,b){g.za(a)&&(a=Pe(a));return window.setInterval(a,b)};
g.Ye=function(a){window.clearTimeout(a)};
g.Ze=function(a){window.clearInterval(a)};
g.ef=function(a,b,c){var d=af();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){bf[e]&&b.apply(c||window,d)};
try{cf[a]?k():g.We(k,0)}catch(l){g.Oe(l)}},c);
bf[e]=!0;df[a]||(df[a]=[]);df[a].push(e);return e}return 0};
g.ff=function(a){var b=af();b&&(g.ta(a)?a=[a]:g.ra(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.z)(a,function(a){b.unsubscribeByKey(a);delete bf[a]}))};
g.E=function(a,b){var c=af();return c?c.publish.apply(c,arguments):!1};
g.gf=function(a,b){cf[a]=!0;var c=af();c=c?c.publish.apply(c,arguments):!1;cf[a]=!1;return c};
af=function(){return g.r("ytPubsubPubsubInstance")};
g.jf=function(a,b){var c=g.hf(a);window.spf.script.load(a,c,b)};
g.kf=function(a){a=g.hf(a);window.spf.script.unload(a)};
g.hf=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Laa,""),b=b.replace(Maa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.lf=function(){this.F=!1;this.C=null};
mf=function(a,b,c){a.C=new window.botguard.bg(b);c&&c(b)};
g.of=function(){return g.nf.Jf()};
g.pf=function(){return g.nf.invoke()};
Naa=function(){};
g.rf=function(a,b){return qf(a,0,b)};
g.sf=function(a,b){return qf(a,1,b)};
g.uf=function(a){for(var b=0,c=a.length;b<c;b++)g.tf(a[b])};
vf=function(){};
g.wf=function(){return!!g.r("yt.scheduler.instance")};
qf=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.We(a,c||0)};
g.tf=function(a){if(!(0,window.isNaN)(a)){var b=g.r("yt.scheduler.instance.cancelJob");b?b(a):g.Ye(a)}};
g.xf=function(){return(0,window.parseInt)(g.C("DCLKSTAT",0),10)};
Oaa=function(){if(!yf)return null;var a=yf();return"open"in a?a:null};
g.Af=function(a){switch(g.zf(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.zf=function(a){return a&&"status"in a?a.status:-1};
g.Bf=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Sa(e[0]||"");e=g.Sa(e[1]||"");f in b?g.xa(b[f])?g.Ma(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.Df=function(a,b){return g.Cf(a,b||{},!0)};
g.Cf=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Bf(e[1]||"");for(var f in b)if(c||!g.cb(e,f))e[f]=b[f];return g.Je(a,e)+d};
Paa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.Ce(a)[1]||null,e=g.Ee(a);d&&e?(d=c,c=g.Ce(a),d=g.Ce(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.Ee(c)==e&&(Number(g.Ce(c)[4]||null)||null)==(Number(g.Ce(a)[4]||null)||null):!0;for(var f in Ef){if((e=d=g.C(Ef[f]))&&!(e=c)){e=f;var k=g.C("CORS_HEADER_WHITELIST")||{},l=g.Ee(a);e=l?(k=k[l])?g.Ha(k,e):!1:!0}e&&(b[f]=d)}return b};
Qaa=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ff(a,b);var d=Gf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;(0,window.fetch)(a,c).then(function(a){if(!e){e=!0;f&&g.Ye(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||g.n;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.Ya&&b.Ya.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.Er&&0<b.timeout&&(f=g.We(function(){e||(e=!0,g.Ye(f),b.Er.call(b.context||g.n))},b.timeout))}else g.F(a,b)};
g.F=function(a,b){var c=b.format||"JSON";a=Ff(a,b);var d=Gf(a,b),e=!1,f,k=Hf(a,function(a){if(!e){e=!0;f&&g.Ye(f);var d=g.Af(a),k=null;if(d||400<=a.status&&500>a.status)k=Raa(c,a,b.nb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(k&&k.return_code,10);break a;case "RAW":d=!0;break a}d=!!k}k=k||{};var l=b.context||g.n;d?b.onSuccess&&b.onSuccess.call(l,a,k):b.onError&&b.onError.call(l,a,k);b.Ya&&b.Ya.call(l,a,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.gc&&0<b.timeout&&(f=g.We(function(){e||(e=!0,k.abort(),g.Ye(f),b.gc.call(b.context||g.n,k))},b.timeout));
return k};
Ff=function(a,b){b.DB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var c=g.C("XSRF_FIELD_NAME",void 0),d=b.sa;d&&(d[c]&&delete d[c],a=g.Df(a,d));return a};
Gf=function(a,b){var c=g.C("XSRF_FIELD_NAME",void 0),d=g.C("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ha,k=g.C("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Qw||g.Ee(a)&&!b.withCredentials&&g.Ee(a)!=window.document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ha&&b.ha[k]||(f||(f={}),f[c]=d);f&&g.ra(e)&&(e=g.Bf(e),g.kb(e,f),e=b.Hs&&"JSON"==b.Hs?JSON.stringify(e):g.Ie(e));f=e||f&&!g.eb(f);!If&&f&&"POST"!=b.method&&(If=!0,g.Oe(Error("AJAX request with postData should use POST")));
return e};
Raa=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Jf(b):null)d={},(0,g.z)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.Kf(a)})}c&&Lf(d);
return d};
Lf=function(a){if(g.Aa(a))for(var b in a)"html_content"==b||g.Oa(b,"_html")?a[b]=g.Vb(g.Ab("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Lf(a[b])};
Jf=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Kf=function(a){var b="";(0,g.z)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Mf=function(a,b){b.method="POST";b.ha||(b.ha={});return g.F(a,b)};
Hf=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&Pe(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Oaa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof window.FormData));if(e=Paa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m};
Nf=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.Of=function(a){var b=new Nf;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.Pf=function(a){var b=new Nf;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
g.Rf=function(a){var b=a.__yt_uid_key;b||(b=Qf(),a.__yt_uid_key=b);return b};
g.Sf=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=Saa+"VisibilityState";if(b in a)return a[b]};
g.Tf=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Taa||(this[b]=a[b]);this.scale=a.scale;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=
null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}};
Uf=function(a){if(window.document.body&&window.document.documentElement){var b=window.document.body.scrollTop+window.document.documentElement.scrollTop;a.C=a.clientX+(window.document.body.scrollLeft+window.document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Vf=function(a){g.qa(a.C)||Uf(a);return a.C};
g.Wf=function(a){g.qa(a.F)||Uf(a);return a.F};
g.Yf=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.db(Xf,function(e){var f=g.sa(e[4])&&e[4]==!!d,k=g.Aa(e[4])&&g.Aa(d)&&g.hb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.H=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Yf(a,b,c,d);if(e)return e;e=++Zf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.Tf(d);if(!g.lc(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.Tf(b);
b.currentTarget=a;return c.call(a,b)};
k=Pe(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),$f()||g.sa(d)?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);Xf[e]=[a,b,c,k,d];return e};
g.I=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.z)(a,function(a){if(a in Xf){var b=Xf[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?$f()||g.sa(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Xf[a]}}))};
g.ag=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.H(a,b,function(){g.I(e);c.apply(a,arguments)},d)};
g.bg=function(a){for(var b in Xf)Xf[b][0]==a&&g.I(b)};
g.cg=function(a){this.xc=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.H(window,"mousemove",(0,g.t)(this.W,this));this.N=g.Xe((0,g.t)(this.R,this),25)};
dg=function(){g.Ec.call(this);this.C=[]};
eg=function(a){a=a||{};this.url=a.url||"";this.args=a.args||g.ib(Uaa);this.assets=a.assets||{};this.attrs=a.attrs||g.ib(Vaa);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.fg=function(a){a instanceof eg||(a=new eg(a));return a};
g.ig=function(a,b,c,d,e,f){f=f||{};f.name=c||g.C("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=gg||(c=a.stacktrace,d=a.columnNumber,a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params)),a=g.Jc(a),c=c||a.stack,e=a.lineNumber.toString(),(0,window.isNaN)(e)||(0,window.isNaN)(d)||(e=e+":"+d),hg[a.message]||0<=c.indexOf("/YouTubeCenter.js")||
0<=c.indexOf("/mytube.js")))){b={sa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":f.name},ha:{url:g.C("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.ha.stack=c);for(var k in f)b.ha["client."+k]=f[k];if(k=g.C("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ha[l]=k[l];g.F(g.C("ECATCHER_REPORT_HOST","")+"/error_204",b);hg[a.message]=!0;gg++}};
g.og=function(a,b){if(a.wi){var c=a.wi;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);jg[a.wi.token]=d;c=kg(a.endpoint,a.wi.token)}else c=kg(a.endpoint);c.push(a.payload);lg[a.endpoint]=new b;c.length>=(g.Te("web_logging_max_batch")||20)?g.mg():g.ng()};
g.mg=function(){g.Ye(g.pg);if(!g.eb(g.qg)){for(var a in g.qg){var b=lg[a];if(b){var c=void 0,d=a,e=b,f=Waa[d],k=rg[d]||{};rg[d]=k;b=Math.round(g.sg());for(c in g.qg[d]){var l=g.tg(e);l[f]=kg(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[f].length;var m=jg[c];if(m)a:{var q=l,v=c;if(m.videoId)var y="VIDEO";else if(m.playlistId)y="PLAYLIST";else break a;q.credentialTransferTokenTargetId=m;q.context=q.context||{};q.context.user=q.context.user||{};q.context.user.credentialTransferTokens=
[{token:v,scope:y}]}delete jg[c];m=l;m.requestTimeMs=b;(y=g.C("EVENT_ID",void 0))&&g.Se("enable_gel_web_client_event_id")&&(q=(g.C("BATCH_CLIENT_COUNTER",void 0)||0)+1,q>Xaa&&(q=1),g.Me("BATCH_CLIENT_COUNTER",q),m.serializedClientEventId={serializedEventId:y,clientCounter:q});g.ug(e,d,l,{retry:!0})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.qg[a]}}g.eb(g.qg)||
g.ng()}};
Yaa=function(){var a=[];for(e in g.qg){var b=rg[e]||{};rg[e]=b;for(var c in g.qg[e]){var d=kg(e,c);b.storedEventsCount=b.storedEventsCount||0;b.storedEventsCount+=d.length}}var e=Math.round(g.sg());for(var f in rg)b=rg[f],b.eventType=f in vg?vg[f]:"UNKNOWN_TYPE",c=wg[f],b.metricIntervalMs=c?e-c:e-g.xg,a.push(b),wg[f]=e,delete rg[f];return a};
g.ng=function(){g.Ye(g.pg);g.pg=g.We(g.mg,g.C("LOGGING_BATCH_TIMEOUT",g.yg||1E4))};
kg=function(a,b){b=void 0===b?"":b;g.qg[a]=g.qg[a]||{};g.qg[a][b]=g.qg[a][b]||[];return g.qg[a][b]};
g.Bg=function(a){var b=void 0===a?{}:a;a=void 0===b.EB?!0:b.EB;b=void 0===b.oJ?!1:b.oJ;if(null==g.r("_lact",window)){var c=(0,window.parseInt)(g.C("LACT"),10);c=(0,window.isFinite)(c)?(0,g.oe)()-Math.max(c,0):-1;g.p("_lact",c,window);g.p("_fact",c,window);-1==c&&g.zg();g.H(window.document,"keydown",g.zg);g.H(window.document,"keyup",g.zg);g.H(window.document,"mousedown",g.zg);g.H(window.document,"mouseup",g.zg);a&&(b?g.H(window,"touchmove",function(){Ag("touchmove",200)},{passive:!0}):(g.H(window,
"resize",function(){Ag("resize",200)}),g.H(window,"scroll",function(){Ag("scroll",200)})));
new g.cg(function(){Ag("mouse",100)});
g.H(window.document,"touchstart",g.zg,{passive:!0});g.H(window.document,"touchend",g.zg,{passive:!0})}};
Ag=function(a,b){Cg[a]||(Cg[a]=!0,g.sf(function(){g.zg();Cg[a]=!1},b))};
g.zg=function(){null==g.r("_lact",window)&&g.Bg();var a=(0,g.oe)();g.p("_lact",a,window);-1==g.r("_fact",window)&&g.p("_fact",a,window);(a=g.r("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Dg=function(){var a=g.r("_lact",window);return null==a?-1:Math.max((0,g.oe)()-a,0)};
g.Fg=function(a,b,c,d){var e=g.Eg,f={};f.eventTimeMs=Math.round(c||g.sg());f[a]=b;f.context={lastActivityMs:String(c?-1:g.Dg())};g.og({endpoint:"log_event",payload:f,wi:d},e)};
Gg=function(a){var b={"X-Goog-Visitor-Id":g.C("VISITOR_DATA","")},c;a?c="Bearer "+g.r("gapi.auth.getToken")().oZ:c=Dc([]);c&&(b.Authorization=c,b["X-Goog-AuthUser"]=g.C("SESSION_INDEX",0));return b};
Hg=function(a){a=Object.assign({},a);delete a.Authorization;var b=Dc();if(b){var c=new Td;c.update(g.C("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();g.ya(b);g.tc();c=sc;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],k=e+1<b.length,l=k?b[e+1]:0,m=e+2<b.length,q=m?b[e+2]:0,v=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[v],c[f],c[l],c[q])}b=d.join("");a.hash=b}return a};
g.Jg=function(a,b,c,d){g.Ig.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)};
g.Kg=function(a,b,c){g.Ig.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.Lg=function(a){var b;(b=g.Ae(a))||(a=new ve(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.ne(a):null;this.F=window.document.domain||window.location.hostname};
Zaa=function(a,b,c,d){if(d)return null;d=Mg.get("nextId",!0)||1;var e=Mg.get("requests",!0)||{};e[d]={method:a,request:b,authState:Hg(c),requestTime:Math.round(g.sg())};Mg.set("nextId",d+1,86400,!0);Mg.set("requests",e,86400,!0);return d};
Ng=function(a){var b=Mg.get("requests",!0)||{};delete b[a];Mg.set("requests",b,86400,!0)};
Og=function(a){var b=Mg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(g.sg())-d.requestTime)){var e=d.authState,f=Hg(Gg(!1));g.hb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(g.sg())),g.ug(a,d.method,e,{}));delete b[c]}}Mg.set("requests",b,86400,!0)}};
g.Eg=function(a){var b=this;this.C=a||{innertubeApiKey:g.C("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.C("INNERTUBE_API_VERSION",void 0),GB:g.C("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),IB:g.C("INNERTUBE_CONTEXT_HL",void 0),HB:g.C("INNERTUBE_CONTEXT_GL",void 0),JB:g.C("INNERTUBE_HOST_OVERRIDE",void 0)||"",KB:!!g.C("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};g.rf(function(){Og(b)},5E3)};
g.tg=function(a){a=a.C;a={client:{hl:a.IB,gl:a.HB,clientName:a.GB,clientVersion:a.innertubeContextClientVersion}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));g.C("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.C("DELEGATED_SESSION_ID")});return{context:a}};
g.ug=function(a,b,c,d){!g.C("VISITOR_DATA")&&.01>Math.random()&&g.Oe(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",ha:c,Hs:"JSON",gc:function(){d.gc()},
Er:d.gc,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
zj:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Dr:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=a.C.KB||!1,k=Gg(f);Object.assign(e.headers,k);var l="",m=a.C.JB;m&&(l=m);e.headers.Authorization&&!l&&(e.headers["x-origin"]=window.location.origin);l=""+l+("/youtubei/"+a.C.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.C.innertubeApiKey;var q;if(d.retry&&g.Se("retry_web_logging_batches")&&(q=Zaa(b,c,k,f))){var v=e.onSuccess,y=e.zj;e.onSuccess=function(a,b){Ng(q);v(a,b)};
c.zj=function(a,b){Ng(q);y(a,b)}}try{g.Se("use_fetch_for_op_xhr")?Qaa(l,e):g.Mf(l,e)}catch(G){if("InvalidAccessError"==G)q&&(Ng(q),q=0),g.Oe(Error("An extension is blocking network request."),"WARNING");
else throw G;}q&&g.rf(function(){Og(a)},5E3)};
g.Pg=function(a,b,c){g.Fg(a,b,c,void 0)};
g.Qg=function(){g.Se("log_web_meta")&&Yaa().forEach(function(a){g.Pg("delayedEventMetricCaptured",a)})};
g.Rg=function(a){this.C=a};
g.Sg=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,null!=a.C.veCounter&&(b.veCounter=a.C.veCounter),null!=a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.Sg(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
g.Tg=function(a,b,c){(0,g.z)(b,function(b){g.Fg("visualElementHidden",{csn:a,ve:g.Sg(b),eventType:c?16:8})})};
Vg=function(a,b){var c=Object.keys(a).join("");Ug("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Pg("latencyActionInfo",a))};
Ug=function(a){Wg[a]=Wg[a]||{count:0};var b=Wg[a];b.count++;b.time=g.sg();Xg||(Xg=g.rf($aa,5E3));return 10<b.count?(11==b.count&&g.ig(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1};
$aa=function(){var a=g.sg(),b;for(b in Wg)6E4<a-Wg[b].time&&delete Wg[b];Xg=0};
Zg=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.oe)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Yg)for(a=1,b=0;b<Yg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Yg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJLKMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.dh=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if($g==a)return;$g=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.Dg()>b)&&"visible"==g.Sf()){b=-1;g.ah&&(b=Math.round(g.sg()-g.ah));var c=String;var d=g.r("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.oe)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:g.bh,index:String(ch),lastEventDeltaMs:String(b),trigger:a};g.Fg("foregroundHeartbeat",
a);g.p("_fact",-1,window);ch++;g.ah=g.sg()}};
g.eh=function(){var a=g.C("ROOT_VE_TYPE",void 0),b;a?b=new g.Rg({veType:a,youtubeData:void 0}):b=null;return b};
g.fh=function(){var a=g.C("client-screen-nonce")||g.C("EVENT_ID");return a?a:null};
gh=function(){var a=g.eh(),b=g.fh();b&&a&&g.Tg(b,[a],!0)};
g.hh=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?Pe(d):null;this.H=e?Pe(e):null;this.G=[];this.C=this.F=0};
g.ih=function(a){g.tf(a.F);a.F=g.sf((0,g.t)(a.init,a))};
g.lh=function(a){a.name in jh&&kh(a.name);jh[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.z)(a.deps,function(b){if(!(b in jh))throw Error("Module "+b+" required by "+a.name);jh[b].reqs.push(a.name)});
a.enable()};
kh=function(a){if(a in jh){var b=jh[a];(0,g.z)(b.reqs,function(a){kh(a)});
try{b.disable()}catch(c){}delete jh[a]}};
nh=function(a){Ke(g.mh,arguments)};
g.oh=function(a){return a in g.mh};
ph=function(a){Ke(g.mh,arguments)};
g.qh=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Ya,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Db(g.Gb(a)),"about:invalid#zClosurez"===a?a="":(a=g.Qb(g.Sb(a)),a=g.Qa(g.ee(a))),g.Pa(a)||(a=g.gc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.kc(a).body.appendChild(a))):e?Hf(a,b,"POST",e,d):g.C("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Hf(a,b,"GET","",d):aba(a,b))};
aba=function(a,b){var c=new window.Image,d=""+bba++;rh[d]=c;c.onload=c.onerror=function(){b&&rh[d]&&b();delete rh[d]};
c.src=a};
g.sh=function(a,b){a=a||"";var c=a.match(cba);window.spf.style.load(a,c?c[1]:"",b)};
g.th=function(a,b,c){var d=g.C("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Ee(window.location.href);e&&d.push(e);e=g.Ee(a);if(g.Ha(d,e)||!e&&g.Na(a,"/"))if(g.Se("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.Tb(d,a),a=d.href),a&&(a=g.Fe(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.fh();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(a="ST-"+g.Xa(a).toString(36),b=b?g.Ie(b):"",g.Jg(a,b,c||5))):(c="ST-"+g.Xa(a).toString(36),b=b?g.Ie(b):"",
g.Jg(c,b,5))}};
g.uh=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.Ub(d.location,g.Je(a,b)+c)};
g.vh=function(a,b){b&&g.th(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.uh(a)};
g.wh=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.C("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.th(a,b);if(c)return!1;g.vh(a);return!0};
g.xh=function(a,b){this.version=a;this.args=b};
g.yh=function(a,b){this.topic=a;this.C=b};
g.Ah=function(a,b){var c=g.zh();c&&c.publish.call(c,a.toString(),a,b)};
g.zh=function(){return g.r("ytPubsub2Pubsub2Instance")};
dba=function(a){if(Bh.getEntriesByType){var b=Bh.getEntriesByType("paint");if(b=g.Fa(b,function(a){return"first-paint"==a.name}))return Math.round(a.navigationStart+b.startTime)}if(a.msFirstPaint)return Math.max(0,a.msFirstPaint);
if(b=window.chrome)if(b=b.loadTimes,g.za(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity);c=window.Infinity===c?0:a.navigationStart-c;return Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0)}return 0};
Ch=function(){var a=g.C("TIMING_TICK_EXPIRATION");a||(a={},g.Me("TIMING_TICK_EXPIRATION",a));return a};
Dh=function(){var a=Ch(),b;for(b in a)g.tf(a[b]);g.Me("TIMING_TICK_EXPIRATION",{})};
Eh=function(a,b){g.xh.call(this,1,arguments)};
Fh=function(a,b){g.xh.call(this,1,arguments)};
eba=function(){Gh=!1;Hh();if("cold"==Ih().yt_lt){var a=Jh(),b=Kh(),c;for(c in a)g.Na(c,"_")||"tick_"+c in b||Lh(c,a[c]);a=Ih();for(var d in a)"info_"+d in b||Mh(d,a[d])}Nh(!0);g.Oh(!1)};
Rh=function(a){Ph(a);fba();Qh(!1,a);a||(g.C("TIMING_ACTION")&&g.Me("PREVIOUS_ACTION",g.C("TIMING_ACTION")),g.Me("TIMING_ACTION",""))};
Th=function(a,b,c){b||"_"==a[0]||Sh(a,c);var d=Jh(c),e=b||g.sg();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;e=Ch();var f=e[a];f&&(g.tf(f),e[a]=0);Lh(a,b,c)||g.Oh(!1,c);return d[a]};
Sh=function(a,b){Bh.mark&&(g.Na(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Bh.mark(a))};
Vh=function(a,b){Uh("yt_sts",a,void 0);Th("_start",b,void 0)};
Uh=function(a,b,c){Ih(c)[a]=b;Mh(a,b,c)};
Wh=function(a){var b=Ih(void 0);return a in b};
Xh=function(a){var b=Jh(a);if(b.aft)return b.aft;a=g.C((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
Yh=function(a,b){Th("nreqs",a.requestStart,b);Th("nress",a.responseStart,b);Th("nrese",a.responseEnd,b);0<a.redirectEnd-a.redirectStart&&(Th("nrs",a.redirectStart,b),Th("nre",a.redirectEnd,b));0<a.domainLookupEnd-a.domainLookupStart&&(Th("ndnss",a.domainLookupStart,b),Th("ndnse",a.domainLookupEnd,b));0<a.connectEnd-a.connectStart&&(Th("ntcps",a.connectStart,b),Th("ntcpe",a.connectEnd,b));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-a.secureConnectionStart&&(Th("nstcps",a.secureConnectionStart,
b),Th("ntcpe",a.connectEnd,b))};
g.Oh=function(a,b){if(!Zh(b)){var c=g.C((b||"")+"TIMING_ACTION",void 0),d=Jh(b);if(g.r("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&(c=Xh(b)))if(g.Se("tighter_critical_section")&&!$h&&(g.Ah(gba,new Eh(Math.round(c-d._start),b)),$h=!0),a||b)ai(b);else{c=!0;var e=g.C("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&ai(b)}}};
hba=function(){switch(g.Sf()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
bi=function(a){if(!Zh(void 0)){if(!g.Se("send_empty_timing")){var b=g.C("CSI_SERVICE_NAME","youtube");if(!g.C("TIMING_ACTION",void 0)||!b)return}Th("aa",void 0,void 0);Uh("ap",1,void 0);Uh("yt_fss",a,void 0);!g.Se("enable_csi_abandonment_info")||Wh("yt_lt")||Hh();ai(void 0)}};
Lh=function(a,b,c){Kh(c)["tick_"+a]=b;c||b||g.sg();return ci()?(c=di(c),"_start"==a?Ug("baseline_"+c)||g.Pg("latencyActionBaselined",{clientActionNonce:c},b):Ug("tick_"+a+"_"+c)||g.Pg("latencyActionTicked",{tickName:a,clientActionNonce:c},b),!0):!1};
Mh=function(a,b,c){Kh(c)["info_"+a]=b;if(ci())if(a in ei){var d=ei[a];g.Ha(iba,d)&&(b=!!b);if(ci()){a={};d=d.split(".");for(var e=a,f=0;f<d.length-1;f++)e[d[f]]=e[d[f]]||{},e=e[d[f]];e[d[d.length-1]]=b;b=di(c);Vg(a,b)}}else g.Ha(jba,a)||g.Oe(Error("Unknown label "+a+" logged with GEL CSI."))};
Hh=function(){var a=g.C("TIMING_INFO",{});for(b in a)Uh(b,a[b]);Uh("is_nav",1);(a=g.fh())&&Uh("csn",a);(a=g.C("PREVIOUS_ACTION",void 0))&&Uh("pa",a);var b=Ih();b.p=g.C("CLIENT_PROTOCOL")||"unknown";b.t=g.C("CLIENT_TRANSPORT")||"unknown";Uh("yt_vis",hba());if("cold"==b.yt_lt){a=Bh.timing||{};a.navigationStart&&(Th("srt",a.responseStart),1!=b.prerender&&Vh("n",a.navigationStart));b=dba(a);0<b&&Th("fpt",b);Yh(a);Bh.getEntriesByType&&kba();a=[];if(window.document.querySelector&&Bh&&Bh.getEntriesByName)for(var c in gi)b=
gi[c],lba(c,b)&&a.push(b);a.length&&Uh("rc",a.join(","))}ci()&&(c={},c.actionType=mba[g.C("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=di(void 0),Vg(c,a))};
hi=function(a){return Math.round(Bh.timing.navigationStart+a)};
kba=function(){var a=window.location.protocol,b=Bh.getEntriesByType("resource");b=(0,g.ii)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20180501000006/https://fonts.gstatic.com/s/")});
(b=(0,g.ji)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Th("wffs",hi(b.startTime)),Th("wffe",hi(b.responseEnd)))};
lba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=Bh.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,Th("rsf_"+b,d+Math.round(c.fetchStart)),Th("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(Wh("rc")||Uh("rc",""),0===c.transferSize))?!0:!1:!1};
Nh=function(a){g.p("ytglobal.timingready_",a,void 0)};
di=function(a){var b=ki(a).nonce;b||(b=Zg(),ki(a).nonce=b);return b};
Jh=function(a){return ki(a).tick};
Ih=function(a){return ki(a).info};
Kh=function(a){a=ki(a);"gel"in a||(a.gel={});return a.gel};
ki=function(a){return g.r("ytcsi."+(a||"")+"data_")||Ph(a)};
Ph=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
Zh=function(a){return!!g.r("yt.timing."+(a||"")+"pingSent_")};
Qh=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
nba=function(a){var b=Jh(a),c=b.pbr,d=b.vc;b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Ih(a).yt_pvis};
ci=function(){return Gh||g.Se("csi_on_gel")};
ai=function(a){Dh();if(!ci()){var b=Jh(a),c=Ih(a),d=b._start;for(k in b)if(g.Na(k,"_")&&g.xa(b[k])){var e=k.slice(1);if(e in oba){var f=(0,g.li)(b[k],function(a){return Math.round(a-d)});
c["all_"+e]=f.join()}delete b[k]}var k=!!c.ap;if(e=g.r("ytglobal.timingReportbuilder_")){if(b=e(b,c,a))mi(b,k),Rh(a)}else{var l=g.C("CSI_SERVICE_NAME","youtube");e={v:2,s:l,action:g.C((a||"")+"TIMING_ACTION",void 0)};f=Uh.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var m=window.location.protocol+g.r("ytplayer.config.assets.js");(m=Bh.getEntriesByName?Bh.getEntriesByName(m)[0]:null)?c.h5jse=Math.round(c.h5jse-m.responseEnd):delete c.h5jse}b.aft=Xh(a);nba(a)&&"youtube"==l&&(Uh("yt_lt","hot_bg",a),
l=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-l));for(var q in c)"_"!=q.charAt(0)&&(e[q]=c[q]);b.ps=g.sg();c={};q=[];for(var v in b)"_"!=v.charAt(0)&&(l=Math.round(b[v]-d),c[v]=l,q.push(v+"."+l));e.rt=q.join(",");(b=g.r("ytdebug.logTiming"))&&b(e,c);mi(e,k,a);g.Ah(pba,new Fh(c.aft+(f||0),a))}}};
mi=function(a,b,c){if(g.Se("debug_csi_data")){var d=g.r("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?";g.Se("redirect_csi_204_to_qoe")&&(a="/api/stats/qoe?",d+="&redirect_csi_204_to_qoe=true");a+=d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||g.qh(a,
void 0,void 0,void 0,f)}catch(k){g.qh(a,void 0,void 0,void 0,f)}}else g.qh(a);Qh(!0,c)};
oi=function(a,b){g.Ec.call(this);this.H=this.oa=a;this.N=b;this.L=!1;this.api={};this.aa=this.W=null;this.R=new g.he;g.Hc(this,this.R);this.D={};this.la=this.ia=this.F=this.mb=this.C=null;this.V=!1;this.G=this.J=null;this.Sa={};this.tb=["onReady"];this.bb=null;this.qb=window.NaN;this.Y={};ni(this);this.Zh("WATCH_LATER_VIDEO_ADDED",this.JG.bind(this));this.Zh("WATCH_LATER_VIDEO_REMOVED",this.KG.bind(this));this.Zh("onAdAnnounce",this.Iv.bind(this));this.yb=new dg(this);g.Hc(this,this.yb)};
pi=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
ri=function(a){var b=!0,c=qi(a);c&&a.C&&(a=a.C,b=g.D(c,"version")==a.assets.js);return b&&!!g.r("yt.player.Application.create")};
qba=function(a){if(!a.ob()&&!a.V){var b=ri(a);if(b&&"html5"==(qi(a)?"html5":null))a.la="html5",a.L||si(a);else if(ti(a),a.la="html5",b&&a.G)a.oa.appendChild(a.G),si(a);else{a.C.loaded=!0;var c=!1;a.J=function(){c=!0;var b=a.C.clone();g.r("yt.player.Application.create")(a.oa,b);si(a)};
a.V=!0;b?a.J():(g.jf(a.C.assets.js,a.J),g.sh(a.C.assets.css),ui(a)&&!c&&g.p("yt.player.Application.create",null,void 0))}}};
qi=function(a){var b=g.x(a.F);!b&&a.H&&a.H.querySelector&&(b=a.H.querySelector("#"+a.F));return b};
si=function(a){if(!a.ob()){var b=qi(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.V=!1,b.isNotServable&&b.isNotServable(a.C.args.video_id)||rba(a)):a.qb=g.We(function(){si(a)},50)}};
rba=function(a){ni(a);a.L=!0;var b=qi(a);b.addEventListener&&(a.W=vi(a,b,"addEventListener"));b.removeEventListener&&(a.aa=vi(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=vi(a,b,e))}for(var f in a.D)a.W(f,a.D[f]);pi(a);a.ia&&a.ia(a.api);a.R.na("onReady",a.api)};
vi=function(a,b,c){var d=b[c];return function(){try{return a.bb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.bb=e,g.Qe(e))}}};
ni=function(a){a.L=!1;if(a.aa)for(var b in a.D)a.aa(b,a.D[b]);for(var c in a.Y)g.Ye((0,window.parseInt)(c,10));a.Y={};a.W=null;a.aa=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Zh.bind(a);a.api.removeEventListener=a.cL.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ex.bind(a);a.api.getPlayerType=a.Wx.bind(a);a.api.getCurrentVideoConfig=a.hx.bind(a);a.api.loadNewVideoConfig=a.gm.bind(a);a.api.isReady=a.EC.bind(a)};
wi=function(a,b){var c=b;if("string"==typeof b){if(a.Sa[b])return a.Sa[b];c=function(){var a=g.r(b);a&&a.apply(g.n,arguments)};
a.Sa[b]=c}return c?c:null};
sba=function(a,b){var c="ytPlayer"+b+a.N;a.D[b]=c;g.n[c]=function(c){var d=a.C&&a.C.args&&a.C.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.R.na(b,c);else{var f=g.We(function(){a.ob()||(a.R.na(b,c),g.fb(a.Y,String(f)))},0);
g.gb(a.Y,String(f),!0)}};
return c};
ti=function(a){(0,g.xi)("dcp");a.cancel();ni(a);a.la=null;a.C&&(a.C.loaded=!1);var b=qi(a);b&&(ri(a)||!ui(a)?a.G=b:(b&&b.destroy&&b.destroy(),a.G=null));g.ic(a.oa)};
ui=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.Ai=function(a,b){a=g.ra(a)?g.$b(a):a;var c=g.yi+"_"+g.Ca(a),d=g.zi[c];if(d)return d.gm(b),d.api;d=new oi(a,c);g.zi[c]=d;g.E("player-added",d.api);g.Fc(d,g.u(tba,d));g.We(function(){d.gm(b)},0);
return d.api};
tba=function(a){delete g.zi[a.N]};
g.Bi=function(a){if(!a)return null;var b=g.yi+"_"+g.Ca(a),c=g.zi[b];c||(c=new oi(a,b),g.zi[b]=c);return c.api};
g.Ci=function(a){return g.Bi(window.document.getElementById(a))};
g.Ei=function(a,b){var c={};c.key=a;c.value=b;return Di().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
g.Fi=function(a){return Di().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
Di=function(){return Gi?window.Promise.resolve(Gi):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))Gi=b,a(Gi);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),Di()};
c.onupgradeneeded=uba})};
uba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Aba=function(){Hi++;var a=g.dc(),b=new g.wc(0,0,a.width,a.height);Ji("vph",a.height);Ji("vpw",a.width);(0,g.xi)("vpc");a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[],e=!0;Ki.start();for(var f=0;f<c;f++){var k=a[f];if(Li(k,b)){var l=vba(k);l.then(wba);d.push(l);Mi.push(l);k.loadTime||(e=!1)}}e&&Ji("yt_eil",1);(0,g.xi)("vpcc");b=g.Fd(d).then(xba);g.Hd(b,yba);b.then(zba);Mi.push(b);return b};
zba=function(){Ki.stop()};
yba=function(){(0,g.xi)("vpr")};
Li=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.Rf(c);if(e in Ni)return!0;if(e in Oi)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Oi[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Oi[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Ni[d[c]]=!0;return!0};
xba=function(a){var b=g.dc();b=new g.wc(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Li(a[d].CB,b)&&c<f&&(c=f)}return c};
vba=function(a){var b=Hi;return new g.zd(function(c,d){var e={CB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){Hi!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},Pi.push(a))})};
wba=function(a){Ki.start();a=a.time;Qi<a&&(Qi=a,(0,g.xi)("lim",a))};
Bba=function(){(0,g.xi)("vptl",Qi);(0,g.xi)("vpl",Qi)};
Cba=function(){Mi.forEach(function(a){a.cancel()});
Qi=Mi.length=0;Ni={};Oi={};Pi.forEach(function(a){a.slt=void 0});
Pi.length=0};
g.Ri=function(a,b){g.qh("/gen_204?"+a,b)};
Eba=function(a){if(null==a)return[];var b=[];Dba.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Si=function(){return g.A(g.x("page-container"),"remote-connected")};
Fba=function(){Ti=g.Xe(Ui,5E3);var a=g.Vi();a?(a.addEventListener("onReady",Ui),a.addEventListener("onStateChange",Ui)):Wi("unable to init PP monitor")};
Zi=function(a){for(var b in g.zi){var c=g.zi[b];c&&c.cancel()}if(a=a||null){b=g.Vi();var d=!0;c=g.Xi;g.Xi=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Yi="",g.Ai("player-api",a)):b.playVideo();a=g.fg(a);a.loaded=!0}Ui();g.p("ytplayer.config",a,void 0)};
g.Vi=function(){return g.Ci("player-api")};
Ui=function(){var a=g.Vi();if(a){var b=g.x("player");b=!b||g.A(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.C("PAGE_NAME"),e=g.Si();!c||d||e||(Wi("PP playing off watch (paused)"),a.pauseVideo());b&&d?Wi("PP off-screen on watch"):b||d||Wi("PP !off-screen off watch")}};
Wi=function(a){var b=g.C("PAGE_NAME");b&&(a+="("+[b,Yi,g.r("_spf_state.nav-counter")].join()+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.Oe(Error(a),"WARNING"))};
aj=function(){(0,g.xi)("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){(0,g.xi)("cpt");g.E("on_cpt_tick",(new Date).getTime())},0)}):window.document.hidden?((0,g.xi)("cpt"),g.E("on_cpt_tick",(new Date).getTime())):(0,window.setTimeout)(function(){(0,g.xi)("cpt");
g.E("on_cpt_tick",(new Date).getTime())},0);
Gba();g.C("CSI_VIEWPORT")&&($i=Aba(),$i.then(function(a){(0,g.xi)("vpl",a);$i=null},function(){}))};
Gba=function(){bj("init");var a=g.C("PAGE_NAME",void 0);a&&bj("init-"+a)};
bj=function(a){g.wf()?cj.push(g.sf(g.u(g.gf,a),0)):g.E(a)};
dj=function(){g.uf(cj);cj.length=0;Cba();$i&&($i.cancel(),$i=null);var a=g.C("PAGE_NAME",void 0);a&&g.gf("dispose-"+a);g.gf("dispose")};
Hba=function(){aj()};
Iba=function(){g.C("TIMING_REPORT_ON_UNLOAD")&&g.Oh(!0);bi("u");g.dh("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");gh();g.Qg();g.mg();dj();g.gf("pageunload")};
ej=function(){g.zg()};
fj=function(){window.yt_spf_loaded_history=!0;g.zg()};
kj=function(){gj=1;hj=ij=0;g.C("TIMING_REPORT_ON_UNLOAD")&&g.Oh(!0);g.Se("warm_load_nav_start_web")?(bi("n"),Rh(),Nh(!1),g.Me("TIMING_AFT_KEYS",[]),Uh("yt_lt","warm"),g.Me("TIMING_ACTION",""),g.Me("TIMING_WAIT",[]),Dh(),Vh("n")):(bi("n"),Rh(),Vh("n"));Sh("nr");jj(Jba);gh();g.gf("navigate")};
oj=function(a){a=a.detail.part||a.detail.partial;(0,g.xi)("nc"+ij);++ij;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&(0,g.xi)("bc");else{var b=1==gj;gj=2;b?(jj(Kba),lj()):jj(Lba);if(b=a&&a.data&&a.data.swfcfg)mj(a.timing,b.args),nj(b)}};
pj=function(){(0,g.xi)("np"+hj);++hj};
qj=function(a){a=a.detail.response;var b=1==gj;gj=3;b&&(jj(Mba),lj());if(b=a.data&&a.data.swfcfg)mj(a.timing,b.args),nj(b)};
uj=function(a){(0,g.xi)("nd");a=a.detail.response;g.rj=a.cacheKey;a=a.timing;var b=window._spf_state;g.sj.navigationCount=b&&b["nav-counter"]||0;g.Se("warm_load_nav_start_web")?(0,g.xi)("srt",a.responseStart):(Vh("ne",a.responseStart),Ji("srt",Math.max(0,a.responseStart-a.navigationStart)));Ji("yt_lt",a.spfCached?"hot":"warm");(0,g.xi)("pfs",a.fetchStart);(0,g.xi)("pfrs",a.responseStart);"redirectStart"in a&&Nba(a);jj(tj);window.document.getElementById("content").style.height="";aj();gj=0};
vj=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Oe(a)};
wj=function(a){g.Ri(g.Ie({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Pba=function(){Oba();window.yt_spf_loaded_history=!1};
Qba=function(){};
lj=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");dj();a=g.C("PREVIOUS_ACTION");for(var b in g.Le)delete g.Le[b];g.Me("PREVIOUS_ACTION",a);g.Me("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.p("ytplayer.config",null,void 0);if((b=g.Vi())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Yi=b,(b=g.x("movie_player"))&&b.stopVideo?(b.stopVideo(),Yi="recovered"):Yi="missing2"}else Yi="missing";Ui()};
nj=function(a){"cfg"in Jh(void 0)||(0,g.xi)("cfg");Zi(a)};
jj=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.tf(xj);xj=g.sf(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Ye(yj);yj=g.We(function(){b.className=e},c)},0)};
Oba=function(){var a=tj[0]+50;g.Ye(yj);yj=g.We(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
mj=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Eba(b));g.C("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Ri(g.Ie(c)))};
Aj=function(){return"granted"!=window.Notification.permission?window.Promise.resolve():zj().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})["catch"](function(){})};
Cj=function(){Bj({type:"notifications_register",data:g.C("ID_TOKEN")})};
zj=function(){return window.navigator.serviceWorker.getRegistration(String(Re("service_worker_scope")||""))};
Dj=function(a){return!(!a||!a.pushManager)};
Bj=function(a){zj().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
Rba=function(){if(!g.C("LOGGED_IN",void 0))return window.Promise.resolve(!1);var a=String(Re("service_worker_push_force_notification_prompt_tag")||"");return a?g.Fi("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):window.Promise.resolve(!1)};
Vba=function(){var a=void 0===a?!1:a;return(window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification?zj().then(Dj):window.Promise.resolve(!1)).then(function(b){if(!b)return window.Promise.resolve();b=Aj().then(function(){Bj({type:"notifications_check_registration",data:g.C("ID_TOKEN")})});
return"default"!=window.Notification.permission?b:b.then(function(){return Sba(a)}).then(function(a){if(a)return Tba(),Uba().then(function(){})})})};
Sba=function(a){return g.C("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.C("LOGGED_IN",void 0)&&(void 0===a?0:a)?Rba().then(function(a){if(a)return!0;a=[Wba(),Xba()];g.C("LOGGED_IN",void 0)||a.push(Yba());return window.Promise.all(a).then(function(a){return a.every(function(a){return a})})}):window.Promise.resolve(!1)};
Yba=function(){var a=g.Te("service_worker_push_logged_out_prompt_watches");return-1==a?window.Promise.resolve(!1):g.Fi("WatchCount").then(function(b){return b>=a})};
Uba=function(){var a=arguments;g.Se("service_worker_push_prompt_modal_enable")&&Zba();return window.Notification.requestPermission().then(function(a){Ej();var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return Aj().then(function(){g.Ei("NotificationsDisabled",!1);Cj();return window.Promise.resolve(!0)});
"denied"==a&&Cj();return window.Promise.resolve(!1)})["catch"](function(){Ej();
return window.Promise.reject.apply(window.Promise,a instanceof Array?a:baa(g.ja(a)))})};
Tba=function(){g.Fi("PromptCount").then(function(a){return g.Ei("PromptCount",a+1)}).then(function(){return g.Ei("PromptTime",(0,g.oe)())}).then(function(){var a=String(Re("service_worker_push_force_notification_prompt_tag")||"");
if(a)return g.Fi("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.Ei("PromptTags",JSON.stringify(c))})})};
Wba=function(){return-1==g.Te("service_worker_push_prompt_cap")?window.Promise.resolve(!0):g.Fi("PromptCount").then(function(a){a||(a=0);return window.Promise.resolve(a<g.Te("service_worker_push_prompt_cap"))})};
Xba=function(){var a=g.Te("service_worker_push_prompt_delay_microseconds");return a?g.Fi("PromptTime").then(function(b){return window.Promise.resolve((0,g.oe)()-a>(b||0))}):window.Promise.resolve(!0)};
$ba=function(){Gj||Ej()};
Hj=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
Zba=function(){var a=g.x("yt-push-prompt-modal-bg");Gj=g.Se("service_worker_push_prompt_modal_ignore_click");a?Hj(a):(a=g.gc("div",{id:"yt-push-prompt-modal-bg"}),Hj(a),window.document.body.appendChild(a),g.ag(window.document,"click",$ba))};
Ej=function(){var a=g.x("yt-push-prompt-modal-bg");a&&g.jc(a)};
aca=function(a){return Dj(a)?Vba():window.Promise.resolve()};
cca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(bca)})};
eca=function(){var a="/sw.js",b=g.C("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=Ij(a);g.Se("service_worker_push_enabled")&&a.then(dca).then(aca)};
dca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
bca=function(a){a&&Ij("/sw.js?0",a.scope)};
Ij=function(a,b){return window.navigator.serviceWorker.register(a,{scope:b||String(Re("service_worker_scope")||"")||"/"})};
Jj=function(){g.hh.call(this,"www/base");this.D=0};
Kj=function(a){(a=a.detail.name)&&kh(a)};
g.aa=[];ea="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;aaa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
if("function"==typeof Object.setPrototypeOf)Lj=Object.setPrototypeOf;else{var Mj;a:{var fca={a:!0},Nj={};try{Nj.__proto__=fca;Mj=Nj.a;break a}catch(a){}Mj=!1}Lj=Mj?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=Lj;
oa("String.prototype.endsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");var b=this+"";a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
var gca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)pa(d,e)&&(a[e]=d[e])}return a};
oa("Object.assign",function(a){return a||gca});
var hca=function(){function a(){function a(){}
window.Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof window.Reflect&&window.Reflect.construct){if(a())return window.Reflect.construct;var b=window.Reflect.construct;return function(a,d,e){a=b(a,d);e&&window.Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
oa("Reflect.construct",function(){return hca});
oa("Promise",function(a){function b(a){this.F=0;this.D=void 0;this.C=[];var b=this.H();try{a(b.resolve,b.reject)}catch(m){b.reject(m)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.L()})};
var e=da.setTimeout;c.prototype.D=function(a){e(a,0)};
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
var f=new c;b.prototype.V=function(a){var b=this.H();a.oi(b.resolve,b.reject)};
b.prototype.la=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(q){c.reject(q)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(S){f(S)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.oi(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.oi=function(a,b){function c(){switch(d.F){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.F);}}
var d=this;null==this.C?f.F(c):this.C.push(c)};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.ja(a),f=e.next();!f.done;f=e.next())d(f.value).oi(b,c)})};
b.all=function(a){var c=g.ja(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).oi(f(k.length-1),b),e=c.next();while(!e.done)})};
return b});
oa("WeakMap",function(a){function b(a){this.gb=(f+=Math.random()+1).toString();if(a){ca();ha();a=g.ja(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){pa(a,e)||ea(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(q){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!pa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.gb]=b;return this};
b.prototype.get=function(a){return pa(a,e)?a[e][this.gb]:void 0};
b.prototype.has=function(a){return pa(a,e)&&pa(a[e],this.gb)};
b.prototype["delete"]=function(a){return pa(a,e)&&pa(a[e],this.gb)?delete a[e][this.gb]:!1};
return b});
oa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.F;return ia(function(){if(c){for(;c.head!=a.F;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++k,f.set(b,c)):c="p_"+b;var d=a.C[c];if(d&&pa(a.C,c))for(var e=0;e<d.length;e++){var l=d[e];if(b!==b&&l.key!==l.key||b===l.key)return{id:c,list:d,index:e,kc:l}}return{id:c,list:d,index:-1,kc:void 0}}
function e(a){this.C={};this.F=b();this.size=0;if(a){a=g.ja(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(g.ja([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(y){return!1}}())return a;
ca();ha();var f=new window.WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.C[c.id]=[]);c.kc?c.kc.value=b:(c.kc={next:this.F,previous:this.F.previous,head:this.F,key:a,value:b},c.list.push(c.kc),this.F.previous.next=c.kc,this.F.previous=c.kc,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.kc&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.C[a.id],a.kc.previous.next=a.kc.next,a.kc.next.previous=a.kc.previous,a.kc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).kc};
e.prototype.get=function(a){return(a=d(this,a).kc)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[window.Symbol.iterator]=e.prototype.entries;var k=0;return e});
oa("Set",function(a){function b(a){this.C=new window.Map;if(a){a=g.ja(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(g.ja([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
ca();ha();b.prototype.add=function(a){this.C.set(a,a);this.size=this.C.size;return this};
b.prototype["delete"]=function(a){a=this.C["delete"](a);this.size=this.C.size;return a};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(a){return this.C.has(a)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[window.Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.C.forEach(function(d){return a.call(b,d,d,c)})};
return b});
oa("Array.from",function(a){return a?a:function(a,c,d){ha();c=null!=c?c:function(a){return a};
var b=[],f=a[window.Symbol.iterator];if("function"==typeof f)for(a=f.call(a);!(f=a.next()).done;)b.push(c.call(d,f.value));else{f=a.length;for(var k=0;k<f;k++)b.push(c.call(d,a[k]))}return b}});
oa("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!(0,window.isNaN)(a)&&window.Infinity!==a&&-window.Infinity!==a}});
oa("Number.parseInt",function(a){return a||window.parseInt});
g.Oj=g.Oj||{};g.n=this;Ba="closure_uid_"+(1E9*Math.random()>>>0);caa=0;g.oe=Date.now||function(){return+new Date};g.w(g.Da,Error);g.Da.prototype.name="CustomError";g.Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(g.ra(a))return g.ra(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.ica=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if(g.ra(a))return g.ra(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.ii=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.ra(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.li=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.ra(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.ji=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.z)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Pj=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Qj=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var gaa,haa,iaa,jaa,kaa,laa,faa;g.Ua=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
gaa=/&/g;haa=/</g;iaa=/>/g;jaa=/"/g;kaa=/'/g;laa=/\x00/g;faa=/[\x00&<>"']/;g.Rj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};a:{var Sj=g.n.navigator;if(Sj){var Tj=Sj.userAgent;if(Tj){g.Ya=Tj;break a}}g.Ya=""};var jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.rb[" "]=g.ua;var Zj,maa,dk;g.Lc=g.$a("Opera");g.B=g.lb();g.Uj=g.$a("Edge");g.Vj=g.Uj||g.B;g.Wj=g.$a("Gecko")&&!(-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.$a("Edge"))&&!(g.$a("Trident")||g.$a("MSIE"))&&!g.$a("Edge");g.Kc=-1!=g.Ya.toLowerCase().indexOf("webkit")&&!g.$a("Edge");g.Xj=g.$a("Macintosh");g.Yj=g.$a("Windows");g.jca=g.$a("Linux")||g.$a("CrOS");g.kca=g.$a("Android");g.lca=pb();g.mca=g.$a("iPad");g.nca=g.$a("iPod");g.oca=g.qb();
a:{var ak="",bk=function(){var a=g.Ya;if(g.Wj)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Uj)return/Edge\/([\d\.]+)/.exec(a);if(g.B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Kc)return/WebKit\/(\S+)/.exec(a);if(g.Lc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
bk&&(ak=bk?bk[1]:"");if(g.B){var ck=tb();if(null!=ck&&ck>(0,window.parseFloat)(ak)){Zj=String(ck);break a}}Zj=ak}g.ub=Zj;maa={};var ek=g.n.document;dk=ek&&g.B?tb()||("CSS1Compat"==ek.compatMode?(0,window.parseInt)(g.ub,10):5):void 0;g.wb=dk;var oaa;oaa=!g.B||g.xb(9);g.pca=!g.Wj&&!g.B||g.B&&g.xb(9)||g.Wj&&g.vb("1.9.1");g.fk=g.B&&!g.vb("9");g.qca=g.B||g.Lc||g.Kc;g.zb.prototype.Ud=!0;g.zb.prototype.Tc=function(){return this.C};
g.zb.prototype.toString=function(){return"Const{"+this.C+"}"};
g.yb={};g.Ab("");g.rca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.sca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.gk=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");g.Cb.prototype.Ud=!0;g.Cb.prototype.Tc=function(){return this.F};
g.Cb.prototype.Kl=!0;g.Cb.prototype.C=function(){return 1};
var Eb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Bb={};g.Fb("about:blank");g.Jb.prototype.Ud=!0;g.Ib={};g.Jb.prototype.Tc=function(){return this.C};
g.hk=g.Kb("");g.ik=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.tca=RegExp("\\b(hsl|hsla|rgb|rgba|matrix|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-0-9a-z.%, ]+\\)","g");g.Mb.prototype.Ud=!0;g.Lb={};g.Mb.prototype.Tc=function(){return this.C};
g.uca=g.Nb("");g.Pb.prototype.Kl=!0;g.Pb.prototype.C=function(){return this.D};
g.Pb.prototype.Ud=!0;g.Pb.prototype.Tc=function(){return this.F};
var Ob={};g.Rb("<!DOCTYPE html>",0);g.jk=g.Rb("",0);g.kk=g.Rb("<br>",0);g.h=g.Wb.prototype;g.h.clone=function(){return new g.Wb(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.Wb&&g.Xb(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.Wb?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.ta(b)&&(this.y+=b));return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.Zb.prototype;g.h.clone=function(){return new g.Zb(this.width,this.height)};
g.h.Uv=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Uv()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.width*=a;this.height*=c;return this};var ac={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.lk=g.mc(null);var wca;g.vca=g.nc(function(){return-1!=g.Ya.indexOf("Google Web Preview")||1E-4>Math.random()});
wca={cP:"allow-forms",dP:"allow-modals",eP:"allow-orientation-lock",fP:"allow-pointer-lock",gP:"allow-popups",hP:"allow-popups-to-escape-sandbox",iP:"allow-presentation",jP:"allow-same-origin",kP:"allow-scripts",lP:"allow-top-navigation",mP:"allow-top-navigation-by-user-activation"};g.xca=g.nc(function(){return g.pc(wca)});g.mk=window.document;g.nk=window;g.ok=g.$a("Firefox");g.pk=pb()||g.$a("iPod");g.qk=g.$a("iPad");g.yca=g.ob();g.rk=g.mb();g.sk=g.nb()&&!g.qb();var qc,sc;qc=null;g.rc=null;sc=null;g.tk="function"==typeof window.Uint8Array;g.h=g.uc.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.qa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.oe)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.Ua)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.qa(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Ic=function(){return g.vc(this).keys};
g.h.Eb=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Kb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.Od=g.ba(3);g.h.clear=function(){for(var a=g.vc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Ig=new g.uc("undefined"==typeof window.document?null:window.document);g.Ig.F=3950;g.h=g.wc.prototype;g.h.clone=function(){return new g.wc(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.Wb?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.Wb?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.ta(b)&&(this.top+=b));return this};
g.h.scale=function(a,b){var c=g.ta(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.uk=g.Wj?"MozUserSelect":g.Kc||g.Uj?"WebkitUserSelect":null;g.zca=Object.prototype.hasOwnProperty;g.vk=g.Ac(window);g.wk=g.vk&&window.parent||window;g.xk=(new Date).getTime();g.Ec.prototype.Gc=!1;g.Ec.prototype.ob=function(){return this.Gc};
g.Ec.prototype.dispose=function(){this.Gc||(this.Gc=!0,this.X())};
g.Ec.prototype.X=function(){if(this.Vb)for(;this.Vb.length;)this.Vb.shift()()};g.Ic.prototype.stopPropagation=function(){this.F=!0};
g.Ic.prototype.preventDefault=function(){this.qt=!1};var bd,Bca,vaa;g.Aca=!g.B||g.xb(9);bd=!g.B||g.xb(9);Bca=g.B&&!g.vb("9");vaa=function(){if(!g.n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.n.addEventListener("test",g.ua,b);g.n.removeEventListener("test",g.ua,b);return a}();g.yk=Mc("TransitionEnd");
g.zk={MP:"click",nW:"rightclick",tQ:"dblclick",Sg:"mousedown",Tg:"mouseup",Xh:"mouseover",Wh:"mouseout",dU:"mousemove",bU:"mouseenter",cU:"mouseleave",Rg:"mousecancel",vW:"selectionchange",wW:"selectstart",fZ:"wheel",fS:"keypress",eS:"keydown",gS:"keyup",FP:"blur",iR:"focus",uQ:"deactivate",jR:"focusin",kR:"focusout",JP:"change",gW:"reset",uW:"select",WW:"submit",QR:"input",MV:"propertychange",RQ:"dragstart",LQ:"drag",NQ:"dragenter",QQ:"dragover",OQ:"dragleave",DROP:"drop",MQ:"dragend",hX:"touchstart",
gX:"touchmove",fX:"touchend",eX:"touchcancel",EP:"beforeunload",hQ:"consolemessage",kQ:"contextmenu",yQ:"devicechange",zQ:"devicemotion",AQ:"deviceorientation",DQ:"DOMContentLoaded",ERROR:"error",ER:"help",LOAD:"load",GT:"losecapture",HU:"orientationchange",RV:"readystatechange",iW:"resize",qW:"scroll",uY:"unload",HP:"canplay",IP:"canplaythrough",SQ:"durationchange",VQ:"emptied",ENDED:"ended",AT:"loadeddata",BT:"loadedmetadata",PAUSE:"pause",PLAY:"play",PLAYING:"playing",PV:"ratechange",sW:"seeked",
tW:"seeking",SW:"stalled",YW:"suspend",cX:"timeupdate",FY:"volumechange",GY:"waiting",QW:"sourceopen",PW:"sourceended",OW:"sourceclosed",GO:"abort",UPDATE:"update",yY:"updatestart",wY:"updateend",CR:"hashchange",NU:"pagehide",OU:"pageshow",IV:"popstate",mQ:"copy",WU:"paste",qQ:"cut",yP:"beforecopy",zP:"beforecut",CP:"beforepaste",GU:"online",BU:"offline",MESSAGE:"message",gQ:"connect",SR:"install",HO:"activate",gR:"fetch",mR:"foreignfetch",ST:"messageerror",TW:"statechange",xY:"updatefound",lQ:"controllerchange",
pP:Mc("AnimationStart"),nP:Mc("AnimationEnd"),oP:Mc("AnimationIteration"),iX:g.yk,zV:"pointerdown",GV:"pointerup",yV:"pointercancel",CV:"pointermove",FV:"pointerover",EV:"pointerout",AV:"pointerenter",BV:"pointerleave",vR:"gotpointercapture",HT:"lostpointercapture",eU:"MSGestureChange",fU:"MSGestureEnd",gU:"MSGestureHold",hU:"MSGestureStart",iU:"MSGestureTap",jU:"MSGotPointerCapture",kU:"MSInertiaStart",lU:"MSLostPointerCapture",mU:"MSPointerCancel",nU:"MSPointerDown",oU:"MSPointerEnter",pU:"MSPointerHover",
qU:"MSPointerLeave",rU:"MSPointerMove",sU:"MSPointerOut",tU:"MSPointerOver",uU:"MSPointerUp",TEXT:"text",bX:g.B?"textinput":"textInput",dQ:"compositionstart",eQ:"compositionupdate",cQ:"compositionend",AP:"beforeinput",YQ:"exit",yT:"loadabort",zT:"loadcommit",CT:"loadredirect",ET:"loadstart",FT:"loadstop",jW:"responsive",MW:"sizechanged",vY:"unresponsive",BY:"visibilitychange",VW:"storage",IQ:"DOMSubtreeModified",EQ:"DOMNodeInserted",GQ:"DOMNodeRemoved",HQ:"DOMNodeRemovedFromDocument",FQ:"DOMNodeInsertedIntoDocument",
BQ:"DOMAttrModified",CQ:"DOMCharacterDataModified",DP:"beforeprint",bP:"afterprint",BP:"beforeinstallprompt",tP:"appinstalled"};g.w(g.Nc,g.Ic);var Cca={2:"touch",3:"pen",4:"mouse"};
g.Nc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Wj&&(g.sb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Xj?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType=g.ra(a.pointerType)?a.pointerType:Cca[a.pointerType]||"";this.state=a.state;this.yc=a;a.defaultPrevented&&
this.preventDefault()};
g.Nc.prototype.stopPropagation=function(){g.Nc.M.stopPropagation.call(this);this.yc.stopPropagation?this.yc.stopPropagation():this.yc.cancelBubble=!0};
g.Nc.prototype.preventDefault=function(){g.Nc.M.preventDefault.call(this);var a=this.yc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Bca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Oc="closure_listenable_"+(1E6*Math.random()|0),saa=0;g.h=g.Rc.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=Tc(a,b,d,e);-1<k?(b=a[k],c||(b.ni=!1)):(b=new taa(b,this.src,f,!!d,e),b.ni=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Tc(e,b,c,d);return-1<b?(Qc(e[b]),g.Ja(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,Qc(d[e]);delete this.listeners[c];this.C--}return b};
g.h.og=g.ba(5);g.h.sf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Tc(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.qa(a),d=c?a.toString():"",e=g.qa(b);return g.bb(this.listeners,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var Zc="closure_lm_"+(1E6*Math.random()|0),ed={},ad=0,hd="__closure_events_fn_"+(1E9*Math.random()>>>0);g.w(g.id,g.Ec);g.id.prototype[Oc]=!0;g.h=g.id.prototype;g.h.Ni=function(){return this.ym};
g.h.Ih=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.Vc(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.cd(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Ni();if(b){var c=[];for(var d=1;b;b=b.Ni())c.push(b),++d}b=this.Jv;d=a.type||a;if(g.ra(a))a=new g.Ic(a,b);else if(a instanceof g.Ic)a.target=a.target||b;else{var e=a;a=new g.Ic(d,b);g.kb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=jd(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=jd(k,d,!0,a)&&e,a.F||(e=jd(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=jd(k,d,!1,a)&&e;return e};
g.h.X=function(){g.id.M.X.call(this);this.removeAllListeners();this.ym=null};
g.h.O=function(a,b,c,d){return this.yd.add(String(a),b,!1,c,d)};
g.h.Qe=function(a,b,c,d){return this.yd.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.yd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.yd?this.yd.removeAll(a):0};
g.h.og=g.ba(4);g.h.sf=function(a,b,c,d){return this.yd.sf(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.yd.hasListener(g.qa(a)?String(a):void 0,b)};kd.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var ud;var vd=new kd(function(){return new od},function(a){a.reset()});
nd.prototype.add=function(a,b){var c=vd.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
nd.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
od.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
od.prototype.reset=function(){this.next=this.scope=this.lc=null};var pd,qd=!1,rd=new nd;Ad.prototype.reset=function(){this.context=this.onRejected=this.D=this.C=null;this.F=!1};
var Bd=new kd(function(){return new Ad},function(a){a.reset()});
g.zd.prototype.then=function(a,b,c){return Gd(this,g.za(a)?a:null,g.za(b)?b:null,c)};
g.wd(g.zd);g.zd.prototype.cancel=function(a){0==this.C&&sd(function(){var b=new g.Nd(a);Id(this,b)},this)};
g.zd.prototype.W=function(a){this.C=0;g.yd(this,2,a)};
g.zd.prototype.N=function(a){this.C=0;g.yd(this,3,a)};
g.zd.prototype.J=function(){for(var a;a=Jd(this);)Kd(this,a,this.C,this.R);this.L=!1};
var Pd=md;g.w(g.Nd,g.Da);g.Nd.prototype.name="cancel";g.w(g.Sd,g.Ec);g.h=g.Sd.prototype;g.h.gb=0;g.h.X=function(){g.Sd.M.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.gb=g.Qd(this.xc,g.qa(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.Rd(this.gb);this.gb=0};
g.h.Je=g.ba(7);g.h.isActive=function(){return 0!=this.gb};
g.h.np=function(){this.gb=0;this.C&&this.C.call(this.F)};g.w(Td,Baa);Td.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
Td.prototype.update=function(a,b){if(null!=a){g.qa(b)||(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)Ud(this,a,d),d+=this.F;if(g.ra(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){Ud(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){Ud(this,e);f=0;break}}this.D=f;this.H+=b}};
Td.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;Ud(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.Xd="StopIteration"in g.n?g.n.StopIteration:{message:"StopIteration",stack:""};g.Wd.prototype.next=function(){throw g.Xd;};
g.Wd.prototype.ed=function(){return this};g.h=g.ae.prototype;g.h.Kb=function(){return this.D};
g.h.Eb=g.ba(0);g.h.Ic=function(){g.ce(this);return this.C.concat()};
g.h.Od=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Kb())return!1;var c=b||Daa;g.ce(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Xe=this.D=this.C.length=0};
g.h.remove=function(a){return g.be(this.F,a)?(delete this.F[a],this.D--,this.Xe++,this.C.length>2*this.D&&g.ce(this),!0):!1};
g.h.get=function(a,b){return g.be(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.be(this.F,a)||(this.D++,this.C.push(a),this.Xe++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.Ic(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.ae(this)};
g.h.ed=function(a){g.ce(this);var b=0,c=this.Xe,d=this,e=new g.Wd;e.next=function(){if(c!=d.Xe)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.Xd;var e=d.C[b++];return a?e:d.F[e]};
return e};var ge={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Faa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.w(g.he,g.Ec);g.h=g.he.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.td=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.ua):(c&&g.Ka(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.na=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Gaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.td(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.z)(b,this.td,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Kb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Kb(b);return a};
g.h.X=function(){g.he.M.X.call(this);this.clear();this.D.length=0};g.je.prototype.set=function(a,b){g.qa(b)?this.C.set(a,g.ee(b)):this.C.remove(a)};
g.je.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.je.prototype.remove=function(a){this.C.remove(a)};g.w(ke,g.je);ke.prototype.set=function(a,b){ke.M.set.call(this,a,me(b))};
ke.prototype.F=function(a){a=ke.M.get.call(this,a);if(!g.qa(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ke.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.qa(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.w(g.ne,ke);g.ne.prototype.set=function(a,b,c){if(b=me(b)){if(c){if(c<(0,g.oe)()){g.ne.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.oe)()}g.ne.M.set.call(this,a,b)};
g.ne.prototype.F=function(a,b){var c=g.ne.M.F.call(this,a);if(c)if(!b&&g.pe(c))g.ne.prototype.remove.call(this,a);else return c};g.w(qe,Haa);qe.prototype.Kb=function(){var a=0;g.Zd(this.ed(!0),function(){a++});
return a};
qe.prototype.clear=function(){var a=Caa(this.ed(!0)),b=this;(0,g.z)(a,function(a){b.remove(a)})};g.w(g.se,qe);g.h=g.se.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.ra(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Kb=function(){return this.C.length};
g.h.ed=function(a){var b=0,c=this.C,d=new g.Wd;d.next=function(){if(b>=c.length)throw g.Xd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.ra(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.w(g.te,g.se);g.w(ve,qe);var Iaa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ue=null;g.h=ve.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(we(a),b);xe(this)};
g.h.get=function(a){a=this.C.getAttribute(we(a));if(!g.ra(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(we(a));xe(this)};
g.h.Kb=function(){return ye(this).attributes.length};
g.h.ed=function(a){var b=0,c=ye(this).attributes,d=new g.Wd;d.next=function(){if(b>=c.length)throw g.Xd;var d=c[b++];if(a)return(0,window.decodeURIComponent)(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!g.ra(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){for(var a=ye(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);xe(this)};g.w(ze,qe);ze.prototype.set=function(a,b){this.F.set(this.C+a,b)};
ze.prototype.get=function(a){return this.F.get(this.C+a)};
ze.prototype.remove=function(a){this.F.remove(this.C+a)};
ze.prototype.ed=function(a){var b=this.F.ed(!0),c=this,d=new g.Wd;d.next=function(){for(var d=b.next();d.substr(0,c.C.length)!=c.C;)d=b.next();return a?d.substr(c.C.length):c.F.get(d)};
return d};var Jaa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.sg=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Ak="Microsoft Internet Explorer"==window.navigator.appName;g.Le=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.Le,void 0);var Ve={};var Dca=g.r("ytPubsubPubsubInstance")||new g.he;g.he.prototype.subscribe=g.he.prototype.subscribe;g.he.prototype.unsubscribeByKey=g.he.prototype.td;g.he.prototype.publish=g.he.prototype.na;g.he.prototype.clear=g.he.prototype.clear;g.p("ytPubsubPubsubInstance",Dca,void 0);var bf=g.r("ytPubsubPubsubSubscribedKeys")||{};g.p("ytPubsubPubsubSubscribedKeys",bf,void 0);var df=g.r("ytPubsubPubsubTopicToKeys")||{};g.p("ytPubsubPubsubTopicToKeys",df,void 0);var cf=g.r("ytPubsubPubsubIsSynchronous")||{};
g.p("ytPubsubPubsubIsSynchronous",cf,void 0);var Laa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Maa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.lf.prototype.initialize=function(a,b,c,d){b?(this.F=!0,g.jf(b,function(){this.F=!1;window.botguard?mf(this,c,d):(g.kf(b),g.Oe(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this))):a&&(eval(a),window.botguard?mf(this,c,d):g.Oe(Error("Unable to load Botguard from JS"),"WARNING"))};
g.lf.prototype.Jf=function(){return null!==this.C};
g.lf.prototype.invoke=function(){return this.C?this.C.invoke():null};
g.lf.prototype.dispose=function(){this.C=null};
g.nf=new g.lf;g.ma(vf,Naa);vf.prototype.start=function(){var a=g.r("yt.scheduler.instance.start");a&&a()};
vf.prototype.pause=function(){var a=g.r("yt.scheduler.instance.pause");a&&a()};
g.va(vf);vf.getInstance();(0,g.oe)();var yf=g.qa(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.qa(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var Ef,If;Ef={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};If=!1;g.Bk=Jf;Nf.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.xd(a)?a:g.Pf(a)):2===this.F&&b?(a=b.call(c,this.C),g.xd(a)?a:g.Of(a)):this};
Nf.prototype.getValue=function(){return this.C};
g.wd(Nf);var Eca=0,Saa=g.Kc?"webkit":g.Wj?"moz":g.B?"ms":g.Lc?"o":"",Qf=g.r("ytDomDomGetNextId")||function(){return++Eca};
g.p("ytDomDomGetNextId",Qf,void 0);var Taa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Tf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Tf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Tf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Xf=g.r("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",Xf,void 0);var Zf=g.r("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",Zf,void 0);var $f=g.nc(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.w(g.cg,g.Ec);g.cg.prototype.W=function(a){this.C=new g.Wb(g.Vf(a),g.Wf(a))};
g.cg.prototype.R=function(){if(this.C){var a=g.sg();if(0!=this.D){var b=g.Yb(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.xc();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.cg.prototype.X=function(){g.Ze(this.N);g.I(this.J)};g.ma(dg,g.Ec);dg.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.hg);break}};
dg.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.hg)}g.Ec.prototype.X.call(this)};var Uaa={enablejsapi:1},Vaa={};eg.prototype.clone=function(){var a=new eg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.wa(c)?a[b]=g.ib(c):a[b]=c}return a};var hg={},gg=0;var Xaa,Waa,vg,lg;Xaa=Math.pow(2,16)-1;Waa={log_event:"events",log_interaction:"interactions"};vg=Object.create(null);vg.log_event="GENERIC_EVENT_LOGGING";vg.log_interaction="INTERACTION_LOGGING";lg={};g.pg=0;g.qg=g.r("ytLoggingTransportLogPayloadsQueue_")||{};g.p("ytLoggingTransportLogPayloadsQueue_",g.qg,void 0);var jg=g.r("ytLoggingTransportTokensToCttTargetIds_")||{};g.p("ytLoggingTransportTokensToCttTargetIds_",jg,void 0);var rg=g.r("ytLoggingTransportDispatchedStats_")||{};
g.p("ytLoggingTransportDispatchedStats_",rg,void 0);var wg=g.r("ytLoggingTransportCapturedTime_")||{};g.p("ytytLoggingTransportCapturedTime_",wg,void 0);var Cg={};g.Lg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.oe)()+1E3*c);return}catch(f){}var e="";if(d)try{e=(0,window.escape)(g.ee(b))}catch(f){return}else e=(0,window.escape)(b);g.Jg(a,e,c,this.F)};
g.Lg.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Ig.get(""+a,void 0))&&(c=(0,window.unescape)(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.Lg.prototype.remove=function(a){this.C&&this.C.remove(a);g.Kg(a,"/",this.F)};var Mg=new g.Lg("yt.innertube");var Wg=g.r("ytLoggingLatencyUsageStats_")||{};g.p("ytLoggingLatencyUsageStats_",Wg,void 0);var Xg=0;var Yg=(0,g.oe)().toString();var ch,$g;g.bh=Zg();ch=0;g.ah=null;$g=null;g.h=g.hh.prototype;g.h.pL=function(){this.Jf()||this.init()};
g.h.enable=function(){this.C=1;(0,g.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.pL,this),this.subscribe("dispose-"+a,this.dispose,this),g.C("PAGE_NAME")==a&&g.ih(this))},this)};
g.h.init=function(){g.tf(this.F);this.C=2;this.L&&this.L()};
g.h.Jf=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.tf(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Oe(a)}};
g.h.subscribe=function(a,b,c){a=g.ef(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.ff(this.G);this.G=[]};var jh=g.r("yt.modules.registry_")||{};g.p("yt.modules.registry_",jh,void 0);g.mh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.mh,void 0);var rh={},bba=0;var cba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.yh.prototype.toString=function(){return this.topic};var Fca=g.r("ytPubsub2Pubsub2Instance")||new g.he;g.he.prototype.subscribe=g.he.prototype.subscribe;g.he.prototype.unsubscribeByKey=g.he.prototype.td;g.he.prototype.publish=g.he.prototype.na;g.he.prototype.clear=g.he.prototype.clear;g.p("ytPubsub2Pubsub2Instance",Fca,void 0);g.Ck=g.r("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.Ck,void 0);g.Dk=g.r("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.Dk,void 0);
g.Ek=g.r("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.Ek,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);var Bh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.ma(Eh,g.xh);g.ma(Fh,g.xh);var gba=new g.yh("aft-recorded",Eh),pba=new g.yh("timing-sent",Fh);var oba,gi,Fk,ei,jba,mba,iba,$h,Gh,fba,Ji,Nba;oba={vc:!0};
gi={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'link[rel="import"][name="desktop_polymer_sel_auto_home"]':"dpsahh",
'link[rel="import"][name="desktop_polymer_sel_auto_watch"]':"dpsawh",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-phone/base"]':"mcppj",'script[name="player-plasma-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mcpc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",
'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};Fk={};
ei=(Fk.ad_allowed="adTypesAllowed",Fk.ad_at="adType",Fk.ad_cpn="adClientPlaybackNonce",Fk.ad_docid="adVideoId",Fk.yt_ad_an="adNetworks",Fk.p="httpProtocol",Fk.t="transportProtocol",Fk.cpn="clientPlaybackNonce",Fk.csn="clientScreenNonce",Fk.docid="videoId",Fk.is_nav="isNavigation",Fk.yt_lt="loadType",Fk.yt_ad="isMonetized",Fk.nr="webInfo.navigationReason",Fk.ncnp="webInfo.nonPreloadedNodeCount",Fk.paused="playerInfo.isPausedOnLoad",Fk.fmt="playerInfo.itag",Fk.yt_pl="watchInfo.isPlaylist",Fk.yt_ad_pr=
"prerollAllowed",Fk.yt_red="isRedSubscriber",Fk.st="serverTimeMs",Fk.vph="viewportHeight",Fk.vpw="viewportWidth",Fk.yt_vis="isVisible",Fk);jba="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" ");
mba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",channel:"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS","channel.copyright":"LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT","channel.monetization":"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION","channel.translations":"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS","channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",prebuffer:"LATENCY_ACTION_PREBUFFER",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",tenx:"LATENCY_ACTION_TENX",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
"video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS","video.edit":"LATENCY_ACTION_CREATOR_VIDEO_EDIT","video.translations":"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS","video.video_editor":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR","video.video_editor_async":"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC"};iba="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" ");$h=!1;Gh=!1;
fba=(0,g.t)(Bh.clearResourceTimings||Bh.webkitClearResourceTimings||Bh.mozClearResourceTimings||Bh.msClearResourceTimings||Bh.oClearResourceTimings||g.ua,Bh);Ji=Uh;Nba=Yh;g.xi=Th;g.ma(oi,g.Ec);g.h=oi.prototype;
g.h.gm=function(a){this.ob()||(this.mb=a=g.fg(a),this.C=a.clone(),this.F=this.C.attrs.id||this.F,"video-player"==this.F&&(this.F=this.N,this.C.attrs.id=this.N),this.H.id==this.F&&(this.F+="-player",this.C.attrs.id=this.F),this.C.args.enablejsapi="1",this.C.args.playerapiid=this.N,this.ia||(this.ia=wi(this,this.C.args.jsapicallback||"onYouTubePlayerReady")),this.C.args.jsapicallback=null,(a=this.C.attrs.width)&&g.zc(this.H,Number(a)||a),(a=this.C.attrs.height)&&g.yc(this.H,Number(a)||a),qba(this),
this.L&&pi(this))};
g.h.hx=function(){return this.mb};
g.h.EC=function(){return this.L};
g.h.Zh=function(a,b){var c=this,d=wi(this,b);if(d){if(!g.Ha(this.tb,a)&&!this.D[a]){var e=sba(this,a);this.W&&this.W(a,e)}this.R.subscribe(a,d);"onReady"==a&&this.L&&g.We(function(){d(c.api)},0)}};
g.h.cL=function(a,b){if(!this.ob()){var c=wi(this,b);c&&g.ie(this.R,a,c)}};
g.h.Iv=function(a){g.E("a11y-announce",a)};
g.h.JG=function(a){g.E("WATCH_LATER_VIDEO_ADDED",a)};
g.h.KG=function(a){g.E("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.Wx=function(){return this.la||(qi(this)?"html5":null)};
g.h.Ex=function(){return this.bb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.hf(this.C.assets.js);window.spf.script.ignore(b,a)}g.Ye(this.qb);this.V=!1};
g.h.X=function(){ti(this);if(this.G&&this.C&&this.G.destroy)try{this.G.destroy()}catch(b){g.Oe(b)}this.Sa=null;for(var a in this.D)g.n[this.D[a]]=null;this.mb=this.C=this.api=null;delete this.oa;delete this.H;g.Ec.prototype.X.call(this)};g.zi={};g.yi="player_uid_"+(1E9*Math.random()>>>0);var Gi=null;g.Gk=window.performance&&window.performance.memory;g.sj={};var Qi=0,Mi=[],Pi=[],Hi=0,Ni={},Oi={},Ki=new g.Sd(Bba,1E3);var Dba=["server_prefetched_vast","vmap"];var Ti,Yi;g.Xi=null;Yi="";var $i=null,cj=[];var gj,yj,xj,ij,hj,Jba,Mba,Kba,Lba,tj;ij=0;hj=0;Jba=[900,60,"waiting"];Mba=[500,99,"waiting"];Kba=[300,60,"waiting"];Lba=[400,99,"waiting"];tj=[300,101,"done"];var Gj=!1;window.yt=window.yt||{};g.p("yt.setConfig",g.Me,void 0);g.p("yt.pushConfigArray",Ne,void 0);g.p("yt.getConfig",g.C,void 0);g.p("yt.config.set",g.Me,void 0);g.p("yt.config.pushArray",Ne,void 0);g.p("yt.config.get",g.C,void 0);g.p("yt.hasMsg",g.oh,void 0);g.p("yt.setMsg",nh,void 0);g.p("yt.setGoogMsg",ph,void 0);g.p("yt.msgs.has",g.oh,void 0);g.p("yt.msgs.set",nh,void 0);g.p("yt.msgs.setGoog",ph,void 0);g.p("yt.pubsub.publish",g.E,void 0);g.p("yt.pubsub.subscribe",g.ef,void 0);
g.p("ytcsi.tick",g.xi,void 0);g.w(Jj,g.hh);
Jj.prototype.enable=function(){window.onload=Hba;window.onunload=Iba;window.onerror=Kaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",ej),window.addEventListener("spfhistory",fj),window.addEventListener("spfrequest",kj),window.addEventListener("spfpartprocess",oj),window.addEventListener("spfpartdone",pj),window.addEventListener("spfprocess",qj),window.addEventListener("spfdone",uj),window.addEventListener("spferror",vj),window.addEventListener("spfreload",
wj),window.addEventListener("spfjsbeforeunload",Kj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",Pba),this.subscribe("dispose",Qba)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Jj.prototype.init=function(){Jj.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.C("PAGEFRAME_JS")){var b=g.C("PAGEFRAME_JS",void 0);var c=function(){var a=g.r("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.r("yt.www.masthead.loadSearchbox"))&&a();
a=g.C("JS_COMMON_MODULE");var d=g.C("JS_PAGE_MODULES");d||(d=[a]);a=g.C("JS_DELAY_LOAD",0);0<a?(g.Ye(this.D),this.D=g.We(function(){b&&g.jf(b,c);window.spf.script.require(d)},a)):(b&&g.jf(b,c),window.spf.script.require(d));
g.p("yt.abuse.botguardInitialized",g.of,void 0);g.p("yt.abuse.invokeBotguard",g.pf,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",g.xf,void 0);g.p("yt.player.exports.navigate",g.wh,void 0);g.p("yt.util.activity.init",g.Bg,void 0);g.p("yt.util.activity.getTimeSinceActive",g.Dg,void 0);g.p("yt.util.activity.setTimestamp",g.zg,void 0);Zi(g.r("ytplayer.config"));g.r("ytspf.enabled")&&Fba();eba();g.C("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.Se("service_worker_enabled")?eca():cca())};
Jj.prototype.dispose=function(){g.Ye(this.D);var a=g.r("ytbin.www.pageframe.cancelSetup");a&&a();g.Ze(Ti);if(a=g.Vi())a.removeEventListener("onReady",Ui),a.removeEventListener("onStateChange",Ui);Nh(!1);(a=(a=(a=window.document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.D(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.bg(a);Jj.M.dispose.call(this)};
Jj.prototype.disable=function(){Jj.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",ej),window.removeEventListener("spfhistory",fj),window.removeEventListener("spfrequest",kj),window.removeEventListener("spfpartprocess",oj),window.removeEventListener("spfpartdone",pj),window.removeEventListener("spfprocess",qj),window.removeEventListener("spfdone",uj),window.removeEventListener("spferror",vj),window.removeEventListener("spfreload",wj),window.removeEventListener("spfjsbeforeunload",
Kj));window.onload=null;window.onunload=null;window.onerror=null};
g.lh(new Jj);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:00:06 May 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:36:38 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 76.115
  exclusion.robots: 0.124
  exclusion.robots.policy: 0.111
  cdx.remote: 0.084
  esindex: 0.017
  LoadShardBlock: 41.038 (3)
  PetaboxLoader3.datanode: 86.209 (5)
  load_resource: 180.768 (2)
  PetaboxLoader3.resolve: 87.764 (2)
*/