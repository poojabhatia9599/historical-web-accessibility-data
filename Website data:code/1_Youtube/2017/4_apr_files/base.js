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

var _yt_www={};(function(g){var window=this;var da,aaa,ha,ga,caa,ja,eaa,faa,za,gaa,haa,Aa,iaa,jaa,Ba,Ca,Da,La,Ma,maa,lb,sb,vaa,Ab,Bb,zb,waa,Rb,Sb,Wb,Baa,Xb,gc,hc,Daa,jc,kc,mc,nc,oc,Ac,Eaa,Ec,Jc,Kc,Qc,Faa,Rc,Uc,Sc,Zc,Xc,pd,Kaa,Naa,Laa,rd,td,Raa,ud,yd,Saa,zd,Taa,Uaa,Dd,Bd,Gd,Vaa,Td,he,Yaa,ie,Fe,He,Zaa,Me,Qe,Ke,Ie,aba,Pe,Ne,Oe,Se,$aa,bba,Ye,$e,Xe,cba,Ze,fba,gba,eba,hba,zf,Gf,Ff,iba,Jf,Kf,Uf,fg,wg,vg,oba,pba,xg,yg,Dg,Fg,Ng,qba,rba,sba,Tg,Rg,Qg,tba,eh,vba,yba,kh,xba,wba,hh,lh,ih,jh,zba,th,sh,Aba,yh,zh,Ah,Cba,Eba,Dba,Bba,Bh,Ch,Dh,Gh,Fba,Kh,Qh,Ph,
Lh,Sh,Vh,Zh,$h,Wh,Xh,Kba,Lba,ci,bi,ei,Oh,Ih,Hh,Jh,fi,Th,di,Uh,hi,Oba,Jba,ki,mi,ni,oi,ri,qi,ti,pi,ui,ii,li,Uba,vi,xi,wi,$ba,Zba,Yba,Bi,Xba,Vba,Wba,aca,bca,Pi,cca,Qi,Ti,dca,eca,fca,Ui,Wi,Yi,aj,bj,gj,kj,lj,mj,qj,rj,sj,lca,mca,hj,jj,fj,kca,ij,vj,wj,fa,ea,baa,xa,daa;g.ca=function(a){return function(){return g.ba[a].apply(this,arguments)}};
da=function(){da=function(){};
ea.Symbol||(ea.Symbol=aaa)};
aaa=function(a){return"jscomp_symbol_"+(a||"")+baa++};
ha=function(){da();var a=ea.Symbol.iterator;a||(a=ea.Symbol.iterator=ea.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&fa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ga(this)}});
ha=function(){}};
ga=function(a){var b=0;return caa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
caa=function(a){ha();a={next:a};a[ea.Symbol.iterator]=function(){return this};
return a};
g.ia=function(a){ha();var b=a[window.Symbol.iterator];return b?b.call(a):ga(a)};
ja=function(a,b){if(b){for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var h=d[e];h in c||(c[h]={});c=c[h]}d=d[d.length-1];e=c[d];h=b(e);h!=e&&null!=h&&fa(c,d,{configurable:!0,writable:!0,value:h})}};
g.ka=function(a){return void 0!==a};
g.p=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ka(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.r=function(a,b){for(var c=a.split("."),d=b||g.m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d};
g.la=function(){};
g.ma=function(a){a.Jc=void 0;a.getInstance=function(){return a.Jc?a.Jc:a.Jc=new a}};
g.na=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.oa=function(a){return"array"==g.na(a)};
g.qa=function(a){var b=g.na(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.ra=function(a){return"string"==typeof a};
g.sa=function(a){return"number"==typeof a};
g.ta=function(a){return"function"==g.na(a)};
g.va=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.ya=function(a){return a[xa]||(a[xa]=++daa)};
eaa=function(a,b,c){return a.call.apply(a.bind,arguments)};
faa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.t=eaa:g.t=faa;return g.t.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.k3=function(a,c,h){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
za=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
gaa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=q=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],h=e[2],l=e[3],n=e[4],q,w,c=0;80>c;c++)40>c?20>c?(q=l^d&(h^l),w=1518500249):(q=d^h^l,w=1859775393):60>c?(q=d&h|l&(d|h),w=2400959708):(q=d^h^l,w=3395469782),q=((a<<5|a>>>27)&4294967295)+q+n+w+b[c]&4294967295,n=l,l=h,h=(d<<30|d>>>2)&4294967295,d=a,a=q;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+h&4294967295;
e[3]=e[3]+l&4294967295;e[4]=e[4]+n&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==q)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(h[q++]=a[d++],w++,64==q)for(q=0,b(h);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>q?c(l,56-q):c(l,64-(q-56));for(var k=63;56<=k;k--)h[k]=d&255,d>>>=8;b(h);for(k=d=0;5>k;k++)for(var n=24;0<=n;n-=8)a[d++]=e[k]>>n&255;return a}
for(var e=[],h=[],k=[],l=[128],n=1;64>n;++n)l[n]=0;var q,w;a();return{reset:a,update:c,digest:d,EA:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
haa=function(){};
Aa=function(a,b,c){return a[b]=a[b]||c};
iaa=function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1};
jaa=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b};
Ba=function(){var a;if((a=Object.create)&&kaa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a};
Ca=function(a,b,c){this.H=c;this.D=a;this.G=b;this.F=0;this.C=null};
Da=function(a,b){a.G(b);a.F<a.H&&(a.F++,b.next=a.C,a.C=b)};
g.Ea=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ea);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Fa=function(a){return function(){return a}};
g.Ga=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};
g.Ha=function(a){a=String(a);if(g.Ga(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};
g.Ia=function(a){return eval("("+a+")")};
g.Ka=function(a,b){return(new g.Ja(b)).xc(a)};
g.Ja=function(a){this.C=a};
La=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.oa(b)){var d=b;b=d.length;c.push("[");for(var e="",h=0;h<b;h++)c.push(e),e=d[h],La(a,a.C?a.C.call(d,String(h),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");h="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(h),Ma(d,c),c.push(":"),La(a,a.C?a.C.call(b,d,e):e,c),h=","));c.push("}");return}}switch(typeof b){case "string":Ma(b,
c);break;case "number":c.push((0,window.isFinite)(b)&&!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
Ma=function(a,b){b.push('"',a.replace(laa,function(a){var b=Na[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Na[a]=b);return b}),'"')};
g.Oa=function(a,b){this.width=a;this.height=b};
g.Pa=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Qa=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Ra=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.Sa=function(a,b){return null!==a&&b in a};
g.Ta=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.Ua=function(a){for(var b in a)return!1;return!0};
g.Va=function(a,b){b in a&&delete a[b]};
g.Wa=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.Xa=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.Za=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var h=0;h<Ya.length;h++)c=Ya[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.$a=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.ab=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.bb=function(a){g.bb[" "](a);return a};
g.cb=function(a,b){try{return g.bb(a[b]),!0}catch(c){}return!1};
g.db=function(a,b,c){return Object.prototype.hasOwnProperty.call(a,b)?a[b]:a[b]=c(b)};
maa=function(){};
g.eb=function(a,b){return 0==a.lastIndexOf(b,0)};
g.fb=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.gb=function(a){return(0,window.encodeURIComponent)(String(a))};
g.hb=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.ib=function(a){if(!naa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(oaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(paa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(raa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(saa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(taa,"&#0;"));return a};
g.jb=function(a,b){return-1!=a.indexOf(b)};
g.mb=function(a,b){for(var c=0,d=(0,g.kb)(String(a)).split("."),e=(0,g.kb)(String(b)).split("."),h=Math.max(d.length,e.length),k=0;0==c&&k<h;k++){var l=d[k]||"",n=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""];if(0==l[0].length&&0==n[0].length)break;c=lb(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==n[1].length?0:(0,window.parseInt)(n[1],10))||lb(0==l[2].length,0==n[2].length)||lb(l[2],n[2]);l=l[3];n=n[3]}while(0==c)}return c};
lb=function(a,b){return a<b?-1:a>b?1:0};
g.nb=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.x=function(a,b){return a?a.dataset?a.dataset[g.ob(b)]:a.getAttribute("data-"+b):null};
g.ob=function(a){return qb[a]||(qb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.rb=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in uaa||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.C=a.pageX;this.F=a.pageY}};
sb=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.tb=function(a,b,c,d){this.F=a;this.G=b;this.D=c;this.C=d};
g.ub=function(a){var b={};void 0!==a.F?b.trackingParams=a.F:(b.veType=a.G,null!=a.D&&(b.veCounter=a.D));void 0!==a.C&&(b.dataElement=g.ub(a.C));return b};
g.vb=function(a){return a&&"status"in a?a.status:-1};
vaa=function(){if(!wb)return null;var a=wb();return"open"in a?a:null};
g.xb=function(a){switch(g.vb(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.yb=function(a,b){this.topic=a;this.Hj=b};
Ab=function(a,b){var c={};c.key=a;c.value=b;zb().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
Bb=function(a){return zb().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})},function(){return window.Promise.reject("Unable to open IndexedDB.")})};
zb=function(){return Cb?window.Promise.resolve(Cb):new window.Promise(function(a,b){var c=window.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))Cb=b,a(Cb);else return window.indexedDB.deleteDatabase("swpushnotificationsdb"),zb()};
c.onupgradeneeded=waa})};
waa=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
g.Db=function(){this.Tc=this.Tc;this.Hb=this.Hb};
g.Gb=function(a,b){g.Eb(a,g.u(g.Fb,b))};
g.Eb=function(a,b){a.Tc?g.ka(void 0)?b.call(void 0):b():(a.Hb||(a.Hb=[]),a.Hb.push(g.ka(void 0)?(0,g.t)(b,void 0):b))};
g.Fb=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Jb=function(a){return!(!a||!a[Ib])};
g.Lb=function(a){return g.jb(g.Kb,a)};
g.Mb=function(a){this.C=a||{cookie:""}};
g.Nb=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,h=0;h<a.length;h++)e=(0,g.kb)(a[h]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.Ob=function(a){this.C=a};
g.Qb=function(a){sb(g.Pb,arguments)};
g.y=function(a,b){return a in g.Pb?g.Pb[a]:b};
Rb=function(a,b){var c=g.y(a,void 0);c?c.push(b):g.Qb(a,[b])};
Sb=function(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||g.Xa(xaa);this.assets=a.assets||{};this.attrs=a.attrs||g.Xa(yaa);this.params=a.params||g.Xa(zaa);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Tb=function(a){a instanceof Sb||(a=new Sb(a));return a};
g.Ub=function(a,b){this.version=a;this.args=b};
Wb=function(){var a=Aaa.href,b;if(Vb.dpo)b=Vb.h;else{b=Vb.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=(0,window.decodeURIComponent)(a[2])}catch(e){}}return b};
Baa=function(a){var b=Aa(Vb,"PQ",[]);Vb.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},h=0;h<c;h++)b[h](e)};
Xb=function(a){return Aa(Aa(Vb,"H",Ba()),a,Ba())};
g.Zb=function(a,b,c){b=g.Yb(a,b,c);return 0>b?null:g.ra(a)?a.charAt(b):a[b]};
g.Yb=function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return h;return-1};
g.ac=function(a,b){return 0<=(0,g.$b)(a,b)};
g.bc=function(a){return 0==a.length};
g.dc=function(a,b){var c=(0,g.$b)(a,b),d;(d=0<=c)&&g.cc(a,c);return d};
g.cc=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.ec=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.fc=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.qa(d)){var e=a.length||0,h=d.length||0;a.length=e+h;for(var k=0;k<h;k++)a[e+k]=d[k]}else a.push(d)}};
gc=function(){this.F=this.C=null};
hc=function(){this.next=this.scope=this.Dc=null};
g.ic=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1;this.Sw=!0};
Daa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Ed=e;this.key=++Caa;this.Gh=this.Dj=!1};
jc=function(a){a.Gh=!0;a.listener=null;a.C=null;a.src=null;a.Ed=null};
kc=function(){return g.Lb("iPhone")&&!g.Lb("iPod")&&!g.Lb("iPad")};
g.lc=function(){return kc()||g.Lb("iPad")||g.Lb("iPod")};
mc=function(a){this.C=a};
nc=function(a){this.data=a};
oc=function(a){return!g.ka(a)||a instanceof nc?a:new nc(a)};
g.qc=function(){this.C="";this.F=g.pc};
g.rc=function(a){var b=new g.qc;b.C=a;return b};
g.sc=function(a,b,c,d,e,h,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);h&&(l+="?"+h);k&&(l+="#"+k);return l};
g.tc=function(a){return a?(0,window.decodeURI)(a):a};
g.vc=function(a,b){return b.match(g.uc)[a]||null};
g.wc=function(a){return g.tc(g.vc(3,a))};
g.xc=function(a){a=a.match(g.uc);return g.sc(null,null,null,null,a[5],a[6],a[7])};
g.yc=function(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")};
g.zc=function(a,b,c){if(g.oa(b))for(var d=0;d<b.length;d++)g.zc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",g.gb(b))};
Ac=function(a,b){for(var c in b)g.zc(c,b[c],a);return a};
g.Bc=function(a){a=Ac([],a);a[0]="";return a.join("")};
g.Cc=function(a,b){return g.yc(Ac([a],b))};
g.Dc=function(a,b,c,d,e){var h=g.r("yt.logging.errors.log");h?h(a,b,c,d,e):(h=g.y("ERRORS",[]),h.push([a,b,c,d,e]),g.Qb("ERRORS",h))};
Eaa=function(a,b,c,d,e){var h=!1,k=g.Pb.EXPERIMENT_FLAGS;if((k=k?k.log_window_onerror_fraction:void 0)&&Math.random()<k)h=!0;else for(var k=window.document.getElementsByTagName("script"),l=0,n=k.length;l<n;l++)if(0<k[l].src.indexOf("/debug-")){h=!0;break}h&&(e||(e=Error(),e.message=a,e.fileName=b,e.lineNumber=c,(0,window.isNaN)(d)||(e.columnNumber=d)),g.Dc(e))};
Ec=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Dc(b)}}:a};
g.Fc=function(a){return g.y("EXPERIMENT_FLAGS",{})[a]};
g.Gc=function(a){return!!g.Fc(a)};
g.Ic=function(a){return a in g.Hc};
Jc=function(a){sb(g.Hc,arguments)};
Kc=function(a){sb(g.Hc,arguments)};
g.Mc=function(a,b,c,d){g.Lc.set(""+a,b,c,"/",void 0===d?"youtube.com":d)};
g.Nc=function(a){a={client:{hl:a.lG,gl:a.kG,clientName:a.jG,clientVersion:a.innertubeContextClientVersion}};g.y("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.y("DELEGATED_SESSION_ID")});return a};
g.Oc=function(){return{apiaryHost:g.y("APIARY_HOST",void 0),Pz:g.y("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!g.y("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:g.y("GAPI_HINT_PARAMS",void 0),innertubeApiKey:g.y("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.y("INNERTUBE_API_VERSION",void 0),jG:g.y("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.y("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),lG:g.y("INNERTUBE_CONTEXT_HL",void 0),kG:g.y("INNERTUBE_CONTEXT_GL",void 0),
bS:g.y("XHR_APIARY_HOST",void 0),mG:g.y("INNERTUBE_HOST_OVERRIDE",void 0)}};
g.Pc=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
Qc=function(a,b){g.Ub.call(this,1,arguments)};
Faa=function(a,b,c){var d=[],e=[];if(1==(g.oa(c)?2:1))return e=[b,a],(0,g.z)(d,function(a){e.push(a)}),Rc(e.join(" "));
var h=[],k=[];(0,g.z)(c,function(a){k.push(a.key);h.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.bc(h)?[c,b,a]:[h.join(":"),c,b,a];(0,g.z)(d,function(a){e.push(a)});
a=Rc(e.join(" "));a=[c,a];g.bc(k)||a.push(k.join(""));return a.join("_")};
Rc=function(a){var b=gaa();b.update(a);return b.EA().toLowerCase()};
Uc=function(a,b,c){b&&0<b.length&&(b=Sc(b),c&&0<c.length&&(b+="___"+Sc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=Aa(Gaa,"_p",Ba()),Aa(b,c,Ba())[a]=(new Date).getTime(),b=Tc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))};
Sc=function(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")};
g.Vc=function(a){if(a.classList)return a.classList;a=a.className;return g.ra(a)&&a.match(/\S+/g)||[]};
g.B=function(a,b){return a.classList?a.classList.contains(b):g.ac(g.Vc(a),b)};
g.Wc=function(a){this.src=a;this.C={};this.F=0};
g.Yc=function(a,b,c,d,e,h){var k=b.toString();b=a.C[k];b||(b=a.C[k]=[],a.F++);var l=Xc(b,c,e,h);-1<l?(a=b[l],d||(a.Dj=!1)):(a=new Daa(c,a.src,k,!!e,h),a.Dj=d,b.push(a));return a};
Zc=function(a,b){var c=b.type;if(!(c in a.C))return!1;var d=g.dc(a.C[c],b);d&&(jc(b),0==a.C[c].length&&(delete a.C[c],a.F--));return d};
Xc=function(a,b,c,d){for(var e=0;e<a.length;++e){var h=a[e];if(!h.Gh&&h.listener==b&&h.capture==!!c&&h.Ed==d)return e}return-1};
g.ad=function(){this.C="";this.F=g.$c};
g.bd=function(a){var b=new g.ad;b.C=a;return b};
g.cd=function(){return g.Lb("Trident")||g.Lb("MSIE")};
g.ed=function(){return g.Lb("Safari")&&!(g.dd()||g.Lb("Coast")||g.Lb("Opera")||g.Lb("Edge")||g.Lb("Silk")||g.Lb("Android"))};
g.dd=function(){return(g.Lb("Chrome")||g.Lb("CriOS"))&&!g.Lb("Edge")};
g.fd=function(a){this.C=a};
g.gd=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.C)()||!!b&&b>(0,g.C)()};
g.hd=function(a){window.clearInterval(a)};
g.id=function(a){window.clearTimeout(a)};
g.jd=function(a,b){g.ta(a)&&(a=Ec(a));return window.setInterval(a,b)};
g.kd=function(a,b){g.ta(a)&&(a=Ec(a));return window.setTimeout(a,b)};
g.ld=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var h=g.hb(e[0]||""),e=g.hb(e[1]||"");h in b?g.oa(b[h])?g.fc(b[h],e):b[h]=[b[h],e]:b[h]=e}}return b};
g.md=function(a,b,c){var d=a.split("#",2);a=d[0];var d=1<d.length?"#"+d[1]:"",e=a.split("?",2);a=e[0];var e=g.ld(e[1]||""),h;for(h in b)if(c||!g.Sa(e,h))e[h]=b[h];return g.Cc(a,e)+d};
g.nd=function(a,b){return g.md(a,b||{},!0)};
g.od=function(){var a=[],b=za(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.Mb(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.Mb(window.document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(g.m.location.href);return d&&b&&c?[c,Faa(za(d),b,a||null)].join(" "):null}return null};
pd=function(a){throw Error("Bad hint"+(a?": "+a:""));};
Kaa=function(a,b,c,d){var e=a.split(";"),h=e.shift(),k=qd[h],l=null;k?l=k(e,b,c,d):pd("no hint processor for: "+h);l||pd("failed to generate load url");b=l;c=b.match(Haa);(d=b.match(Iaa))&&1===d.length&&Jaa.test(b)&&c&&1===c.length||pd("failed sanity: "+a);return l};
Naa=function(a,b,c,d){function e(a){return(0,window.encodeURIComponent)(a).replace(/%2C/g,",")}
a=Laa(a);Maa.test(c)||pd("invalid_callback");b=rd(b);d=d&&d.length?rd(d):null;return[(0,window.encodeURIComponent)(a.xO).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.oq?"/am="+e(a.oq):"",a.Ow?"/rs="+e(a.Ow):"",a.yy?"/t="+e(a.yy):"","/cb=",e(c)].join("")};
Laa=function(a){"/"!==a.charAt(0)&&pd("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))pd("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var h=b[d].split("="),k=(0,window.decodeURIComponent)(h[0]),l=(0,window.decodeURIComponent)(h[1]);2==h.length&&k&&l&&(a[k]=a[k]||l)}b="/"+c.join("/");Oaa.test(b)||pd("invalid_prefix");c=0;for(d=sd.length;c<d;++c)sd[c].test(b)&&
pd("invalid_prefix");c=td(a,"k",!0);d=td(a,"am");e=td(a,"rs");a=td(a,"t");return{xO:b,version:c,oq:d,Ow:e,yy:a}};
rd=function(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Paa.test(e)&&b.push(e)}return b.join(",")};
td=function(a,b,c){a=a[b];!a&&c&&pd("missing: "+b);if(a){if(Qaa.test(a))return a;pd("invalid: "+b)}return null};
Raa=function(){var a=Wb();if(!a)throw Error("Bad hint");return a};
ud=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>iaa.call(b,e)&&c.push(e)}return c};
yd=function(){var a=Vb.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(vd)?a:Vb.nonce=null;var b=Aa(Vb,"us",[]);if(!b||!b.length)return Vb.nonce=null;for(var c=wd.getElementsByTagName(xd),d=0,e=c.length;d<e;++d){var h=c[d];if(h.src&&(a=String(h.nonce||h.getAttribute("nonce")||"")||null)){for(var k=0,l=b.length;k<l&&b[k]!==h.src;++k);if(k!==l&&a&&a===String(a)&&a.match(vd))return Vb.nonce=a}}return null};
Saa=function(a){if("loading"!=wd.readyState)zd(a);else{var b=yd(),c="";null!==b&&(c=' nonce="'+b+'"');wd.write("<"+xd+' src="'+(0,window.encodeURI)(a)+'"'+c+"></"+xd+">")}};
zd=function(a){var b=wd.createElement(xd);b.setAttribute("src",a);a=yd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=wd.getElementsByTagName(xd)[0])?a.parentNode.insertBefore(b,a):(wd.head||wd.body||wd.documentElement).appendChild(b)};
Taa=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<Ad.length;d++){var e=Ad[d][0],h=Ad[d][1];h&&Object.prototype.hasOwnProperty.call(c,e)&&h(c[e],a,b)}};
Uaa=function(a,b,c){Bd(function(){var c;c=b===Wb()?Aa(Cd,"_",Ba()):Ba();c=Aa(Xb(b),"_",c);a(c)},c)};
g.Ed=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Taa(a,c);var d=a?a.split(":"):[],e=c.h||Raa(),h=Aa(Vb,"ah",Ba());if(h["::"]&&d.length){for(var k=[],l=null;l=d.shift();){var n=l.split("."),n=h[l]||h[n[1]&&"ns:"+n[0]||""]||e,q=k.length&&k[k.length-1]||null,w=q;q&&q.hint==n||(w={hint:n,features:[]},k.push(w));w.features.push(l)}var A=k.length;if(1<A){var M=c.callback;M&&(c.callback=function(){0==--A&&M()})}for(;d=k.shift();)Dd(d.features,c,d.hint)}else Dd(d||[],c,e)};
Dd=function(a,b,c){function d(a,b){if(A)return 0;Fd.clearTimeout(w);M.push.apply(M,aa);var d=((Cd||{}).config||{}).update;d?d(h):h&&Aa(Vb,"cu",[]).push(h);if(b){Uc("me0",a,U);try{Uaa(b,c,q)}finally{Uc("me1",a,U)}}return 1}
a=jaa(a)||[];var e=b.callback,h=b.config,k=b.timeout,l=b.ontimeout,n=b.onerror,q=void 0;"function"==typeof n&&(q=n);var w=null,A=!1;if(k&&!l||!k&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var n=Aa(Xb(c),"r",[]).sort(),M=Aa(Xb(c),"L",[]).sort(),U=[].concat(n);0<k&&(w=Fd.setTimeout(function(){A=!0;l()},k));
var aa=ud(a,M);if(aa.length){var aa=ud(a,n),ua=Aa(Vb,"CP",[]),wa=ua.length;ua[wa]=function(a){function b(){var a=ua[wa+1];a&&a()}
function c(b){ua[wa]=null;d(aa,a)&&Baa(function(){e&&e();b()})}
if(!a)return 0;Uc("ml1",aa,U);0<wa&&ua[wa-1]?ua[wa]=function(){c(b)}:c(b)};
if(aa.length){var pb="loaded_"+Vb.I++;Cd[pb]=function(a){ua[wa](a);Cd[pb]=null};
a=Kaa(c,aa,"gapi."+pb,n);n.push.apply(n,aa);Uc("ml0",aa,U);b.sync||Fd.___gapisync?Saa(a):zd(a)}else ua[wa](haa)}else d(aa)&&e&&e()};
Bd=function(a,b){if(Vb.hee&&0<Vb.hel)try{return a()}catch(c){b&&b(c),Vb.hel--,g.Ed("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}};
Gd=function(a){g.m.setTimeout(function(){throw a;},0)};
Vaa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Lb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.cd()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ka(c.next)){c=c.next;var a=c.Iq;c.Iq=null;a()}};
return function(a){d.next={Iq:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
g.Id=function(){this.C="";this.F=Hd};
g.Jd=function(a){if(a instanceof g.Id&&a.constructor===g.Id&&a.F===Hd)return a.C;g.na(a);return"type_error:SafeUrl"};
g.Ld=function(a){if(a instanceof g.Id)return a;a=a.Bg?a.xf():String(a);Waa.test(a)||(a="about:invalid#zClosurez");return g.Kd(a)};
g.Kd=function(a){var b=new g.Id;b.C=a;return b};
g.Md=function(){};
g.Od=function(a){if(a instanceof g.Md)return a;if("function"==typeof a.Ac)return a.Ac(!1);if(g.qa(a)){var b=0,c=new g.Md;c.next=function(){for(;;){if(b>=a.length)throw g.Nd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Pd=function(a,b,c){if(g.qa(a))try{(0,g.z)(a,b,c)}catch(d){if(d!==g.Nd)throw d;}else{a=g.Od(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Nd)throw d;}}};
g.Qd=function(a){if(g.qa(a))return g.ec(a);a=g.Od(a);var b=[];g.Pd(a,function(a){b.push(a)});
return b};
g.Rd=function(a,b){this.x=g.ka(a)?a:0;this.y=g.ka(b)?b:0};
g.Sd=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
Td=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.Wd=function(a){return g.db(Xaa,a,function(){return 0<=g.mb(g.Vd,a)})};
g.Yd=function(a){return Number(g.Xd)>=a};
g.Zd=function(){return!!g.r("yt.scheduler.instance")};
g.$d=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.kd(a,c||0)};
g.ae=function(a,b){return g.$d(a,1,b)};
g.be=function(a){if(!(0,window.isNaN)(a)){var b=g.r("yt.scheduler.instance.cancelJob");b?b(a):g.id(a)}};
g.ce=function(a){for(var b=0,c=a.length;b<c;b++)g.be(a[b])};
he=function(a,b){de||Yaa();ee||(de(),ee=!0);var c=fe,d=ge.get();d.set(a,b);c.F?c.F.next=d:c.C=d;c.F=d};
Yaa=function(){if(-1!=String(g.m.Promise).indexOf("[native code]")){var a=g.m.Promise.resolve(void 0);de=function(){a.then(ie)}}else de=function(){var a=ie;
!g.ta(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.Lb("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(je||(je=Vaa()),je(a)):g.m.setImmediate(a)}};
ie=function(){for(var a;a=fe.remove();){try{a.Dc.call(a.scope)}catch(b){Gd(b)}Da(ge,a)}ee=!1};
g.le=function(){this.C="";this.D=g.ke;this.F=null};
g.me=function(a,b){var c=new g.le;c.C=a;c.F=b;return c};
g.ne=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
g.oe=function(a,b){return a&&b?b instanceof g.ne?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1};
g.pe=function(a){this.C=a};
g.qe=function(){};
g.se=function(){this.C=this.minor=this.major=0;this.F="";var a=g.r("window.navigator.plugins"),b=g.r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,h=c.length;e<h;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=(0,window.parseInt)(d[0],10)||0;d=(0,window.parseInt)(d[1],10)||0;e=0;if("r"==a.charAt(0)||
"d"==a.charAt(0))e=(0,window.parseInt)(a.substr(1),10)||0;a=[c,d,e]}else a=[0,0,0];this.F=b;b=a;this.major=b[0];this.minor=b[1];this.C=b[2];if(0>=this.major){var k,l,n,q;if(g.re)try{k=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(w){k=null}else n=window.document.body,q=window.document.createElement("object"),q.setAttribute("type","application/x-shockwave-flash"),k=n.appendChild(q);if(k&&"GetVariable"in k)try{l=k.GetVariable("$version")}catch(w){l=""}n&&q&&n.removeChild(q);(k=l||
"")?(k=k.split(" ")[1].split(","),k=[(0,window.parseInt)(k[0],10)||0,(0,window.parseInt)(k[1],10)||0,(0,window.parseInt)(k[2],10)||0]):k=[0,0,0];this.major=k[0];this.minor=k[1];this.C=k[2]}};
g.te=function(a){return-1<a.F.indexOf("Gnash")&&-1==a.F.indexOf("AVM2")||9==a.major&&1==a.minor||9==a.major&&0==a.minor&&1==a.C?!1:9<=a.major};
g.ue=function(a){return-1<window.navigator.userAgent.indexOf("Sony/COM2")&&!a.isSupported(9,1,58)?!1:!0};
g.ve=function(a,b){var c;c=b instanceof g.Id?b:g.Ld(b);a.href=g.Jd(c)};
g.we=function(a,b){var c;c=b instanceof g.Id?b:g.Ld(b);a.href=g.Jd(c)};
g.xe=function(a,b){g.ic.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.K=!1;this.Ob=null;a&&this.init(a,b)};
g.ye=function(a,b){return g.me(b,null)};
g.ze=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Ae=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),h=Math.min(a.top+a.height,b.top+b.height);if(e<=h)return a.left=c,a.top=e,a.width=d-c,a.height=h-e,!0}return!1};
g.Ce=function(a){return new g.Oa(a.width,a.height)};
g.Ee=function(a,b){this.C=0;this.M=void 0;this.G=this.F=this.D=null;this.H=this.K=!1;if(a!=g.la)try{var c=this;a.call(b,function(a){g.De(c,2,a)},function(a){g.De(c,3,a)})}catch(d){g.De(this,3,d)}};
Fe=function(){this.next=this.context=this.F=this.D=this.C=null;this.G=!1};
He=function(a,b,c){var d=Ge.get();d.D=a;d.F=b;d.context=c;return d};
Zaa=function(a,b,c){Ie(a,b,c,null)||he(g.u(b,a))};
g.Je=function(a){return new g.Ee(function(b,c){var d=a.length,e=[];if(d)for(var h=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,n;l<a.length;l++)n=a[l],Zaa(n,g.u(h,l),k);
else b(e)})};
g.Le=function(a,b){return Ke(a,null,b,void 0)};
Me=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,h=null,k=c.F;k&&(k.G||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(h=k);e&&(0==c.C&&1==d?Me(c,b):(h?(d=h,d.next==c.G&&(c.G=d),d.next=d.next.next):Ne(c),Oe(c,e,3,b)))}a.D=null}else g.De(a,3,b)};
Qe=function(a,b){a.F||2!=a.C&&3!=a.C||Pe(a);a.G?a.G.next=b:a.F=b;a.G=b};
Ke=function(a,b,c,d){var e=He(null,null,null);e.C=new g.Ee(function(a,k){e.D=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){k(q)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.ka(e)&&b instanceof g.Re?k(b):a(e)}catch(q){k(q)}}:k});
e.C.D=a;Qe(a,e);return e.C};
g.De=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Ie(c,a.W,a.O,a)||(a.M=c,a.C=b,a.D=null,Pe(a),3!=b||c instanceof g.Re||$aa(a,c)))};
Ie=function(a,b,c,d){if(a instanceof g.Ee)return Qe(a,He(b||g.la,c||null,d)),!0;if(g.ab(a))return a.then(b,c,d),!0;if(g.va(a))try{var e=a.then;if(g.ta(e))return aba(a,e,b,c,d),!0}catch(h){return c.call(d,h),!0}return!1};
aba=function(a,b,c,d,e){function h(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,h)}catch(n){h(n)}};
Pe=function(a){a.K||(a.K=!0,he(a.J,a))};
Ne=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Oe=function(a,b,c,d){if(3==c&&b.F&&!b.G)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Se(b,c,d);else try{b.G?b.D.call(b.context):Se(b,c,d)}catch(e){Te.call(null,e)}Da(Ge,b)};
Se=function(a,b,c){2==b?a.D.call(a.context,c):a.F&&a.F.call(a.context,c)};
$aa=function(a,b){a.H=!0;he(function(){a.H&&Te.call(null,b)})};
g.Re=function(a){g.Ea.call(this,a)};
g.Ue=function(a){g.Db.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.K=!!a};
g.Ve=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Zb(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.ef(b)}};
bba=function(a,b,c){he(function(){a.apply(b,c)})};
g.We=function(a){this.C=a};
Ye=function(){return Xe().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})};
$e=function(){var a={type:"notifications_register",data:g.y("ID_TOKEN")};Ze(a)};
Xe=function(){var a=String(g.Fc("service_worker_scope")||"");return window.navigator.serviceWorker.getRegistration(a)};
cba=function(){var a={type:"notifications_check_registration",data:g.y("ID_TOKEN")};Ze(a)};
Ze=function(a){Xe().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
g.af=function(a){var b=g.r("window.location.href");if(g.ra(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c,d,e=!1;try{c=a.lineNumber||a.line||"Not available"}catch(h){c="Not available",e=!0}try{d=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(h){d="Not available",e=!0}return!e&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:c,fileName:d,
stack:a.stack||"Not available"}};
g.D=function(a){return g.ra(a)?window.document.getElementById(a):a};
g.bf=function(a){return g.ra(a)?window.document.getElementById(a):a};
g.df=function(a,b){g.Pa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:cf.hasOwnProperty(d)?a.setAttribute(cf[d],b):g.eb(d,"aria-")||g.eb(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.ff=function(a){return g.ef(a||window)};
g.ef=function(a){a=a.document;a=g.gf(a)?a.documentElement:a.body;return new g.Oa(a.clientWidth,a.clientHeight)};
g.jf=function(a){var b=g.hf(a);a=a.parentWindow||a.defaultView;return g.E&&g.Wd("10")&&a.pageYOffset!=b.scrollTop?new g.Rd(b.scrollLeft,b.scrollTop):new g.Rd(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
g.hf=function(a){return a.scrollingElement?a.scrollingElement:!g.kf&&g.gf(a)?a.documentElement:a.body||a.documentElement};
g.mf=function(a,b,c){return g.lf(window.document,arguments)};
g.lf=function(a,b){var c=String(b[0]),d=b[1];if(!dba&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.ib(d.name),'"');if(d.type){c.push(' type="',g.ib(d.type),'"');var e={};g.Za(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ra(d)?c.className=d:g.oa(d)?c.className=d.join(" "):g.df(c,d));2<b.length&&g.nf(a,c,b,2);return c};
g.nf=function(a,b,c,d){function e(c){c&&b.appendChild(g.ra(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var h=c[d];!g.qa(h)||g.va(h)&&0<h.nodeType?e(h):(0,g.z)(eba(h)?g.ec(h):h,e)}};
g.of=function(a){return window.document.createElement(String(a))};
g.gf=function(a){return"CSS1Compat"==a.compatMode};
g.pf=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.qf=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b)};
g.rf=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};
fba=function(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null};
gba=function(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a};
g.sf=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
eba=function(a){if(a&&"number"==typeof a.length){if(g.va(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.ta(a))return"function"==typeof a.item}return!1};
g.tf=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.uf=function(a,b,c,d,e){if(g.oa(b)){for(var h=0;h<b.length;h++)g.uf(a,b[h],c,d,e);return null}c=g.vf(c);return g.Jb(a)?a.R(b,c,d,e):g.wf(a,b,c,!1,d,e)};
g.wf=function(a,b,c,d,e,h){if(!b)throw Error("Invalid event type");var k=!!e,l=g.xf(a);l||(a[yf]=l=new g.Wc(a));c=g.Yc(l,b,c,d,e,h);if(c.C)return c;d=hba();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,k);else if(a.attachEvent)a.attachEvent(zf(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Af++;return c};
hba=function(){var a=iba,b=Bf?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.Cf=function(a,b,c,d,e){if(g.oa(b))for(var h=0;h<b.length;h++)g.Cf(a,b[h],c,d,e);else c=g.vf(c),g.Jb(a)?a.Ya(b,c,d,e):a&&(a=g.xf(a))&&(b=a.jg(b,c,!!d,e))&&g.Df(b)};
g.Df=function(a){if(g.sa(a)||!a||a.Gh)return!1;var b=a.src;if(g.Jb(b))return Zc(b.Od,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(zf(c),d);Af--;(c=g.xf(b))?(Zc(c,a),0==c.F&&(c.src=null,b[yf]=null)):jc(a);return!0};
zf=function(a){return a in Ef?Ef[a]:Ef[a]="on"+a};
Gf=function(a,b,c,d){var e=!0;if(a=g.xf(a))if(b=a.C[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var h=b[a];h&&h.capture==c&&!h.Gh&&(h=Ff(h,d),e=e&&!1!==h)}return e};
Ff=function(a,b){var c=a.listener,d=a.Ed||a.src;a.Dj&&g.Df(a);return c.call(d,b)};
iba=function(a,b){if(a.Gh)return!0;if(!Bf){var c=b||g.r("window.event"),d=new g.xe(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var h=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(n){h=!0}if(h||void 0==c.returnValue)c.returnValue=!0}c=[];for(h=d.currentTarget;h;h=h.parentNode)c.push(h);for(var h=a.type,k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=Gf(c[k],h,!0,d),e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=Gf(c[k],h,!1,d),e=e&&l}return e}return Ff(a,new g.xe(b,
this))};
g.xf=function(a){a=a[yf];return a instanceof g.Wc?a:null};
g.vf=function(a){if(g.ta(a))return a;a[Hf]||(a[Hf]=function(b){return a.handleEvent(b)});
return a[Hf]};
g.If=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Jf=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.C=a};
g.Of=function(a,b,c){var d=Kf();if(d){var e=d.subscribe(a,function(){var d=arguments,k;k=function(){Lf[e]&&b.apply(c||window,d)};
try{Mf[a]?k():g.kd(k,0)}catch(l){g.Dc(l)}},c);
Lf[e]=!0;Nf[a]||(Nf[a]=[]);Nf[a].push(e);return e}return 0};
g.Pf=function(a){var b=Kf();b&&(g.sa(a)?a=[a]:g.ra(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.z)(a,function(a){b.unsubscribeByKey(a);delete Lf[a]}))};
Kf=function(){return g.r("ytPubsubPubsubInstance")||g.r("yt.pubsub.instance_")};
g.F=function(a,b){var c=Kf();return c?c.publish.apply(c,arguments):!1};
g.Qf=function(a,b){Mf[a]=!0;var c=Kf(),c=c?c.publish.apply(c,arguments):!1;Mf[a]=!1;return c};
g.Sf=function(a,b){var c=g.Rf();c&&c.publish.call(c,a.toString(),a,b)};
g.Rf=function(){return g.r("ytPubsub2Pubsub2Instance")};
g.Tf=function(){g.Db.call(this);this.Od=new g.Wc(this);this.Dz=this;this.Go=null};
Uf=function(a,b,c,d){b=a.Od.C[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,h=0;h<b.length;++h){var k=b[h];if(k&&!k.Gh&&k.capture==c){var l=k.listener,n=k.Ed||k.src;k.Dj&&Zc(a.Od,k);e=!1!==l.call(n,d)&&e}}return e&&0!=d.Sw};
g.Vf=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Xf=function(a,b){a.style.height=g.Vf(b,!0)};
g.Yf=function(a,b){a.style.width=g.Vf(b,!0)};
g.Zf=function(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?(0,g.z)(a.childNodes,function(a){b.appendChild(g.Zf(a))}):b.innerHTML=a.innerHTML;
return b};
g.$f=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=jba+"VisibilityState";if(b in a)return a[b]};
g.bg=function(a){var b=a.__yt_uid_key;b||(b=ag(),a.__yt_uid_key=b);return b};
g.cg=function(a,b,c){if(b){a=g.ra(a)?g.bf(a):a;var d=g.Xa(c.attrs);d.tabindex=0;var e=g.Xa(c.params);e.flashvars=g.Bc(c.args);if(g.re){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=window.document.createElement("object");for(var h in d)b.setAttribute(h,d[h]);for(var k in e)d=window.document.createElement("param"),d.setAttribute("name",k),d.setAttribute("value",e[k]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=window.document.createElement("embed");b.setAttribute("name",
d.id);for(var l in d)b.setAttribute(l,d[l]);for(var n in e)b.setAttribute(n,e[n])}e=window.document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}};
g.ig=function(a,b){dg[a.endpoint]=b;var c;if(a.Gj){c=a.Gj;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);eg[a.Gj.token]=d;c=fg(a.endpoint,a.Gj.token)}else c=fg(a.endpoint);c.push(a.Jb);d=Number(g.Fc("web_logging_max_batch")||0)||20;c.length>=d?g.gg():g.hg()};
g.gg=function(){g.id(g.jg);if(!g.Ua(g.kg)){for(var a in g.kg){var b=g.lg[a];if(!b){var c=dg[a];if(!c)continue;b=new c;g.lg[a]=b}var c=void 0,d=a,e=kba[d];for(c in g.kg[d]){var h=b.C();h[e]=fg(d,c);h.requestTimeMs=Math.round((0,g.mg)());var k=eg[c];if(k)a:{var l,n=h,q=c;if(k.videoId)l="VIDEO";else if(k.playlistId)l="PLAYLIST";else break a;n.credentialTransferTokenTargetId=k;n.context=n.context||{};n.context.user=n.context.user||{};n.context.user.credentialTransferTokens=[{token:q,scope:l}]}delete eg[c];
b.F(d,h,{})}delete g.kg[a]}g.Ua(g.kg)||g.hg()}};
g.hg=function(){g.id(g.jg);g.jg=g.kd(g.gg,g.y("LOGGING_BATCH_TIMEOUT",1E4))};
fg=function(a,b){b||(b="");g.kg[a]=g.kg[a]||{};g.kg[a][b]=g.kg[a][b]||[];return g.kg[a][b]};
g.ng=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.K=d?Ec(d):null;this.H=e?Ec(e):null;this.G=[];this.C=this.F=0};
g.og=function(a){g.be(a.F);a.F=g.ae((0,g.t)(a.init,a))};
g.pg=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(lba,""),b=b.replace(mba,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.qg=function(a,b){var c=g.pg(a);window.spf.script.load(a,c,b)};
g.rg=function(a,b){var c=a.match(nba);window.spf.style.load(a,c?c[1]:"",b)};
g.ug=function(a){if(!g.sg&&!g.tg||!window.JSON)return null;var b;try{b=g.sg.get(a)}catch(c){}if(!g.ra(b))try{b=g.tg.get(a)}catch(c){}if(!g.ra(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
wg=function(a){this.C=a||window;this.W=this.D=0;if(this.C.performance&&this.C.performance.timing&&this.C.performance.getEntriesByType){a=g.ff(this.C);this.J=new g.ze(0,0,a.width,a.height);a=[];for(var b=this.C.document.getElementsByTagName("*"),c=0,d=b.length;c<d;c++){var e=b[c];if("IMG"==e.tagName||"IFRAME"==e.tagName){var h=vg(this,e,e.src);if(h){if("IFRAME"==e.tagName){var k;try{k=(new wg(e.contentWindow)).D}catch(l){k=0}0<k&&(h.timing=k)}a.push(h)}}(h=this.C.getComputedStyle(e)["background-image"])&&
(h=wg.C.exec(h))&&1<h.length&&(h=vg(this,e,h[1]))&&a.push(h)}this.F=a;this.H=this.C.performance.getEntriesByType("resource");this.M=this.C.performance.getEntriesByType("mark");k={};a=0;for(b=this.H.length;a<b;a++)c=this.H[a],k[c.name]=c.responseEnd;a=0;for(b=this.M.length;a<b;a++)c=this.M[a],"mark_iframe_loaded: "==c.name.slice(0,20)&&(k[c.name.slice(20)]=c.startTime);a=0;for(b=this.F.length;a<b;a++)c=this.F[a],c.timing||(c.timing=k[c.url]||0);this.K=oba(this);this.G=pba(this);e=k=0;if(this.G.length)for(b=
a=0,c=this.G.length;b<c;b++)d=this.G[b],e=d.timing-e,0<e&&1>a&&(k+=(1-a)*e),e=d.timing,a=d.progress;this.D=Math.round(k||this.K);this.W=e}};
vg=function(a,b,c){return c&&b.getBoundingClientRect&&(b=b.getBoundingClientRect(),b=new g.ze(b.left,b.top,b.width,b.height),g.Ae(b,a.J))?new xg(b,c):null};
oba=function(a){var b,c=a.C,d=c.performance.timing.navigationStart;if("msFirstPaint"in c.performance.timing)b=c.performance.timing.C-d;else if("chrome"in c&&"loadTimes"in c.chrome){var e=c.chrome.loadTimes(),h=e.firstPaintTime;if(0<h){var k=e.startLoadTime;"requestTime"in e&&(k=e.requestTime);h>=k&&(b=1E3*(h-k))}}if(void 0===b||0>b||12E4<b){b=c.performance.timing.responseStart-d;for(var l={},c=c.document.getElementsByTagName("head")[0].children,d=0,e=c.length;d<e;d++)h=c[d],"SCRIPT"==h.tagName&&h.src&&
!h.async?l[h.src]=!0:"LINK"==h.tagName&&"stylesheet"==h.rel&&h.href&&(l[h.href]=!0);a.H.some(function(a){if(!l[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===b||a>b)b=a})}return Math.max(b,0)||0};
pba=function(a){for(var b={0:0},c=0,d=a.K,e=0,h=a.F.length;e<h;e++){var k=a.F[e],l=d;k.timing>d&&(l=k.timing);b[l]||(b[l]=0);k=g.Ce(k.region).Xg();b[l]+=k;c+=k}e=g.Ce(a.J).Xg();0<e&&(e=.1*Math.max(e-c,0),d in b||(b[d]=0),b[d]+=e,c+=e);d=[];if(c){for(var n in b)a=new yg((0,window.parseFloat)(n),b[n]),d.push(a);d.sort(function(a,b){return a.timing-b.timing});
e=b=0;for(h=d.length;e<h;e++)a=d[e],b+=a.Xg,a.progress=b/c}return d};
xg=function(a,b){this.region=a;this.url=b};
yg=function(a,b){this.Xg=b;this.timing=a};
g.zg=function(){return g.B(g.D("page-container"),"remote-connected")};
g.Ag=function(a,b,c){if(g.ta(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.Bg=function(a){g.m.clearTimeout(a)};
Dg=function(){return null!=g.Cg};
g.Eg=function(){return g.Cg?g.Cg.invoke():null};
Fg=function(){return(0,window.parseInt)(g.y("DCLKSTAT",0),10)};
g.Hg=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Ta(Gg,function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.G=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Hg(a,b,c,d);if(e)return e;var e=++Ig.count+"",h=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document),k;k=h?function(d){d=new g.rb(d);if(!g.tf(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.rb(b);
b.currentTarget=a;return c.call(a,b)};
k=Ec(k);a.addEventListener?("mouseenter"==b&&h?b="mouseover":"mouseleave"==b&&h?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);Gg[e]=[a,b,c,k,d];return e};
g.Jg=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.z)(a,function(a){if(a in Gg){var b=Gg[a],d=b[0],e=b[1],h=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,h,b):d.detachEvent&&d.detachEvent("on"+e,h);delete Gg[a]}}))};
g.Kg=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Lg=function(a){for(var b in Gg)Gg[b][0]==a&&g.Jg(b)};
g.Og=function(a){a.name in Mg&&Ng(a.name);Mg[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.z)(a.deps,function(b){if(!(b in Mg))throw Error("Module "+b+" required by "+a.name);Mg[b].reqs.push(a.name)});
a.enable()};
Ng=function(a){if(a in Mg){var b=Mg[a];(0,g.z)(b.reqs,function(a){Ng(a)});
try{b.disable()}catch(c){}delete Mg[a]}};
qba=function(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=g.vc(1,a),e=g.wc(a);d&&e?(d=c,c=a.match(g.uc),d=d.match(g.uc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.wc(c)==e&&(Number(g.vc(4,c))||null)==(Number(g.vc(4,a))||null):!0;for(var h in Pg){if((e=d=g.y(Pg[h]))&&!(e=c)){var k=a,e=h,l=g.y("CORS_HEADER_WHITELIST")||{};e=(k=g.wc(k))?(l=l[k])?g.ac(l,e):!1:!0}e&&(b[h]=d)}return b};
rba=function(a,b){var c=g.y("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.TA&&(!g.wc(a)||b.withCredentials||g.wc(a)==window.document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.ma&&b.ma[c])};
g.H=function(a,b){var c=b.format||"JSON";b.hG&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var d=g.y("XSRF_FIELD_NAME",void 0),e=g.y("XSRF_TOKEN",void 0),h=b.sa;h&&(h[d]&&delete h[d],a=g.nd(a,h));var k=b.postBody||"",h=b.ma;rba(a,b)&&(h||(h={}),h[d]=e);h&&g.ra(k)&&(d=g.ld(k),g.Za(d,h),k=b.jw&&"JSON"==b.jw?JSON.stringify(d):g.Bc(d));var l=!1,n,q=Qg(a,function(a){if(!l){l=!0;n&&g.id(n);var d=g.xb(a),
e=null;if(d||400<=a.status&&500>a.status)e=sba(c,a,b.Ab);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},h=b.context||g.m;d?b.ea&&b.ea.call(h,a,e):b.onError&&b.onError.call(h,a,e);b.fb&&b.fb.call(h,a,e)}},b.method,k,b.headers,b.responseType,b.withCredentials);
b.qc&&0<b.timeout&&(n=g.kd(function(){l||(l=!0,q.abort(),g.id(n),b.qc.call(b.context||g.m,q))},b.timeout));
return q};
sba=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=g.Ia(a));break;case "XML":if(b=(b=b.responseXML)?Rg(b):null)d={},(0,g.z)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.Sg(a)})}c&&Tg(d);
return d};
Tg=function(a){if(g.va(a))for(var b in a)"html_content"==b||g.fb(b,"_html")?a[b]=g.ye(g.rc("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Tg(a[b])};
Rg=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Sg=function(a){var b="";(0,g.z)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Ug=function(a,b){b.method="POST";b.ma||(b.ma={});return g.H(a,b)};
Qg=function(a,b,c,d,e,h,k){function l(){4==(n&&"readyState"in n?n.readyState:0)&&b&&Ec(b)(n)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var n=vaa();if(!n)return null;"onloadend"in n?n.addEventListener("loadend",l,!1):n.onreadystatechange=l;n.open(c,a,!0);h&&(n.responseType=h);k&&(n.withCredentials=!0);c="POST"==c;if(e=qba(a,e))for(var q in e)n.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");n.send(d);return n};
g.Vg=function(a,b,c){g.Db.call(this);this.C=a;this.D=b||0;this.F=c;this.Gc=(0,g.t)(this.mn,this)};
g.$g=function(a,b,c,d,e){c={name:c||g.y("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||g.y("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=Wg)){e=a.stacktrace;var h=a.columnNumber;a=g.af(a);e=e||a.stack;b=b||"ERROR";d=a.lineNumber.toString();(0,window.isNaN)(d)||(0,window.isNaN)(h)||(d=d+":"+h);if(h=!Xg[a.message])h=e,h=!(0<=h.indexOf("/YouTubeCenter.js")||0<=h.indexOf("/mytube.js"));if(h){h=a.fileName;b={sa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,
1E3),line:d,level:b},ma:{url:g.y("PAGE_NAME",window.location.href),file:h},method:"POST"};e&&(b.ma.stack=e);for(var k in c)b.ma["client."+k]=c[k];if(k=g.y("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ma[l]=k[l];g.H("/error_204",b);Xg[a.message]=!0;Wg++}}};
g.ah=function(a){this.D=a||g.Oc()};
g.bh=function(a,b,c){a&&(c&&(c=g.Kb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.mf("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.sf(a).body.appendChild(a)):g.y("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Qg(a,b):tba(a,b))};
tba=function(a,b){var c=new window.Image,d=""+uba++;ch[d]=c;c.onload=c.onerror=function(){b&&ch[d]&&b();delete ch[d]};
c.src=a};
g.dh=function(a){try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||g.bh(a,void 0)}catch(b){g.bh(a,void 0)}};
g.fh=function(){if(null==g.r("_lact",window)){var a=(0,window.parseInt)(g.y("LACT"),10),a=(0,window.isFinite)(a)?(0,g.C)()-Math.max(a,0):-1;g.p("_lact",a,window);-1==a&&eh();g.G(window.document,"keydown",eh);g.G(window.document,"keyup",eh);g.G(window.document,"mousedown",eh);g.G(window.document,"mouseup",eh);g.Of("page-mouse",eh);g.Of("page-scroll",eh);g.Of("page-resize",eh)}};
eh=function(){null==g.r("_lact",window)&&(g.fh(),g.r("_lact",window));var a=(0,g.C)();g.p("_lact",a,window);g.F("USER_ACTIVE")};
g.gh=function(){var a=g.r("_lact",window);return null==a?-1:Math.max((0,g.C)()-a,0)};
vba=function(){return g.y("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)?-1!=Number(g.Fc("service_worker_push_prompt_cap")||0)?Bb(hh()).then(function(a){a||(a=0);return window.Promise.resolve(a<Number(g.Fc("service_worker_push_prompt_cap")||0))}):window.Promise.resolve(!0):window.Promise.resolve(!1)};
yba=function(){g.y("LOGGED_IN",void 0)&&(g.Gc("service_worker_push_ticker_enabled")?wba().then(function(a){if(a&&(a=ih())){var b=jh();if(b){var c;if(c=(c=ih())?c.querySelector(".yt-uix-button-close"):null)g.G(b,"click",kh),g.G(c,"click",xba),window.document.body.classList.add("sitewide-ticker-visible"),a.classList.add("show"),lh()}}}):(kh(),lh()))};
kh=function(){return window.Notification.requestPermission().then(function(a){var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return Ye().then(function(){Ab("NotificationsDisabled",!1)}).then(function(){$e();
return window.Promise.resolve(!0)});
"denied"==a&&$e();return window.Promise.resolve(!1)})};
xba=function(){Ab("HideTicker",(0,g.C)());window.document.body.classList.remove("sitewide-ticker-visible")};
wba=function(){return Bb("HideTicker").then(function(a){return(0,g.C)()>a+2592E6})};
hh=function(){return g.Gc("service_worker_push_home_only")?"HomePromptCount":"PromptCount"};
lh=function(){var a=hh();Bb(a).then(function(b){Ab(a,b+1)})};
ih=function(){var a=window.document.getElementById("ticker");return a&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.x(a,"trigger-condition")?a:null};
jh=function(){var a=ih();return a?a.querySelector(".yt-uix-button-alert-info"):null};
g.mh=function(a,b,c,d,e){var h={};h.eventTimeMs=Math.round(d||(0,g.mg)());h[a]=b;g.Gc("web_gel_lact")&&(h.context={lastActivityMs:g.gh()});g.ig({endpoint:"log_event",Jb:h,Gj:e},c)};
g.nh=function(a,b){g.bh("/gen_204?"+a,b)};
zba=function(a){g.oh&&!g.ph&&!g.qh&&!g.rh&&window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&a&&a.pushManager&&("default"!=window.Notification.permission?Ye().then(cba):vba().then(function(a){a&&yba()}))};
th=function(a,b){var c=Object.keys(a).join("");sh("info_"+c+"_"+b)||(a.clientActionNonce=b,g.mh("latencyActionInfo",a,g.ah))};
sh=function(a){uh[a]=uh[a]||{count:0};var b=uh[a];b.count++;b.time=(0,g.mg)();vh||(vh=g.$d(Aba,0,5E3));return 10<b.count?(11==b.count&&g.$g(Error("CSI data exceeded logging limit with key: "+a)),!0):!1};
Aba=function(){var a=(0,g.mg)(),b;for(b in uh)6E4<a-uh[b].time&&delete uh[b];vh=0};
g.wh=function(){return g.ug("yt-interaction-logging-parent")};
g.xh=function(){var a=g.y("client-screen-nonce",void 0);a||(a=g.y("EVENT_ID",void 0));return a};
yh=function(a){g.Db.call(this);this.C=[];this.F=a||this};
zh=function(a,b,c,d){d=Ec((0,g.t)(d,a.F));d={target:b,name:c,Wb:d};b.addEventListener(c,d.Wb,void 0);a.C.push(d)};
Ah=function(a){for(;a.C.length;){var b=a.C.pop();b.target.removeEventListener(b.name,b.Wb)}};
Cba=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(Bba)})};
Eba=function(){var a="/sw.js",b=g.y("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=Bh(a);g.Gc("service_worker_push_enabled")&&a.then(Dba).then(zba)};
Dba=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
Bba=function(a){a&&Bh("/sw.js?0",a.scope)};
Bh=function(a,b){var c=b||String(g.Fc("service_worker_scope")||"")||"/";return window.navigator.serviceWorker.register(a,{scope:c})};
g.Eh=function(a,b,c){var d=g.y("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.wc(window.location.href);e&&d.push(e);e=g.wc(a);if(g.ac(d,e)||!e&&g.eb(a,"/"))if(g.Gc("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.ve(d,a),a=d.href),a&&(a=g.xc(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.xh();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(Ch(a,b,c),Dh(b))):(Ch(a,b),Dh(b))}};
Ch=function(a,b,c){a="ST-"+g.nb(a).toString(36);c=c||5;b=b?g.Bc(b):"";g.Mc(a,b,c)};
Dh=function(a){if(a){a=a.itct||a.ved;var b=g.r("yt.logging.screen.storeParentElement");a&&b&&b(new g.tb(a))}};
Gh=function(a,b){Fh.mark&&(g.eb(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Fh.mark(a))};
Fba=function(){if("cold"==Hh().yt_lt){var a=Ih(),b=Jh(),c;for(c in a)g.eb(c,"_")||"tick_"+c in b||Kh(c,a[c]);a=Hh();for(c in a)"info_"+c in b||Lh(c,a[c])}};
g.Nh=function(a,b,c){b||"_"==a[0]||Gh(a,c);var d=Ih(c),e=b||(0,g.mg)();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;Kh(a,b,c)||g.Mh(!1,c);return d[a]};
Kh=function(a,b,c){Jh(c)["tick_"+a]=b;c||b||(0,g.mg)();return g.Gc("csi_on_gel")?(c=Oh(c),"_start"==a?sh("baseline_"+c)||g.mh("latencyActionBaselined",{clientActionNonce:c},g.ah,b):sh("tick_"+a+"_"+c)||g.mh("latencyActionTicked",{tickName:a,clientActionNonce:c},g.ah,b),!0):!1};
Qh=function(a,b){Ph("yt_sts",a,void 0);g.Nh("_start",b,void 0)};
Ph=function(a,b,c){Hh(c)[a]=b;Lh(a,b,c)};
Lh=function(a,b,c){Jh(c)["info_"+a]=b;if(g.Gc("csi_on_gel"))if(a in Rh){var d={};a=Rh[a];g.ac(Gba,a)&&(b=!!b);d[a]=b;b=Oh(c);th(d,b)}else g.ac(Hba,a)||g.Dc(Error("Unknown label "+a+" logged with GEL CSI."))};
Sh=function(a){var b=Hh(void 0);return a in b};
Vh=function(a){Th(a);Iba();Uh(!1,a);a||(g.y("TIMING_ACTION")&&g.Qb("PREVIOUS_ACTION",g.y("TIMING_ACTION")),g.Qb("TIMING_ACTION",""))};
Zh=function(){var a=g.y("TIMING_INFO",{}),b;for(b in a)Ph(b,a[b]);Ph("is_nav",1);(a=g.xh())&&Ph("csn",a);(a=g.y("PREVIOUS_ACTION",void 0))&&Ph("pa",a);b=Hh();b.p=g.y("CLIENT_PROTOCOL")||"unknown";b.t=g.y("CLIENT_TRANSPORT")||"unknown";Fh.now&&Fh.timing?(a=Fh.timing.navigationStart+Fh.now(),a=Math.round((0,g.C)()-a)):a=null;null!=a&&Ph("yt_hrd",a);window.navigator&&window.navigator.sendBeacon&&Ph("ba",1);Ph("yt_vis",Jba());if("cold"==b.yt_lt){a=Fh.timing||{};g.Gc("cold_load_nav_start_web")&&a.navigationStart&&
(g.Nh("srt",a.responseStart),1!=b.prerender&&Qh("n",a.navigationStart));a:if(a.msFirstPaint)b=Math.max(0,a.msFirstPaint);else{if(b=window.chrome)if(b=b.loadTimes,g.ta(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity),c=window.Infinity===c?0:a.navigationStart-c;b=Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0);break a}b=0}0<b&&g.Nh("fpt",b);Wh(a);Fh.getEntriesByType&&Kba();a=g.y("SPEEDINDEX_FOR_ACTIONS",void 0);b=g.y("TIMING_ACTION",void 0);a&&-1<a.indexOf(b)&&
(a=(0,g.mg)(),b=new wg,c=(0,g.mg)(),0<b.D&&(Ph("si",b.D),g.Nh("vsc",Xh(b.W)),g.Nh("sics",a),g.Nh("sice",c)));a=[];if(window.document.querySelector&&Fh&&Fh.getEntriesByName)for(var d in Yh)b=Yh[d],Lba(d,b)&&a.push(b);a.length&&Ph("rc",a.join(","))}g.Gc("csi_on_gel")&&(d={},d.actionType=Mba[g.y("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Oh(),th(d,a))};
$h=function(a){var b=Ih(a);if(b.aft)return b.aft;a=g.y((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
Wh=function(a){g.Nh("nreqs",a.requestStart,void 0);g.Nh("nress",a.responseStart,void 0);g.Nh("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.Nh("nrs",a.redirectStart,void 0),g.Nh("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.Nh("ndnss",a.domainLookupStart,void 0),g.Nh("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.Nh("ntcps",a.connectStart,void 0),g.Nh("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.Nh("nstcps",a.secureConnectionStart,void 0),g.Nh("ntcpe",a.connectEnd,void 0))};
Xh=function(a){return Math.round(Fh.timing.navigationStart+a)};
Kba=function(){var a=window.location.protocol,b=Fh.getEntriesByType("resource"),c=b.filter(function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170401000323/https://fonts.googleapis.com/css?family=")})[0],b=b.filter(function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170401000323/https://fonts.gstatic.com/s/")}).reduce(function(a,b){return b.duration>a.duration?b:a},{duration:0});
c&&0<c.startTime&&0<c.responseEnd&&(g.Nh("wfcs",Xh(c.startTime)),g.Nh("wfce",Xh(c.responseEnd)));b&&0<b.startTime&&0<b.responseEnd&&(g.Nh("wffs",Xh(b.startTime)),g.Nh("wffe",Xh(b.responseEnd)))};
Lba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=Fh.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.Nh("rsf_"+b,d+Math.round(c.fetchStart)),g.Nh("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(Sh("rc")||Ph("rc",""),0===c.transferSize))?!0:!1:!1};
ci=function(a){if(!g.Gc("csi_on_gel")){var b=Ih(a),c=Hh(a),d=b._start,e;for(e in b)if(g.eb(e,"_")&&g.oa(b[e])){var h=e.slice(1);if(h in Nba){var k=(0,g.ai)(b[e],function(a){return Math.round(a-d)});
c["all_"+h]=k.join()}delete b[e]}h=!!c.ap;if(k=g.r("yt.timing.reportbuilder_")){if(k=k(b,c,a))bi(k,h),Vh(a)}else{var l=g.y("CSI_SERVICE_NAME","youtube"),k={v:2,s:l,action:g.y((a||"")+"TIMING_ACTION",void 0)},n=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var q=window.location.protocol+g.r("ytplayer.config.assets.js");(q=Fh.getEntriesByName?Fh.getEntriesByName(q)[0]:null)?c.h5jse=Math.round(c.h5jse-q.responseEnd):delete c.h5jse}b.aft=$h(a);Oba(a)&&"youtube"==l&&(Ph("yt_lt","hot_bg",a),l=b.vc,q=b.pbs,
delete b.aft,c.aft=Math.round(q-l));for(var w in c)"_"!=w.charAt(0)&&(k[w]=c[w]);b.ps=(0,g.mg)();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,w.push(e+"."+l));k.rt=w.join(",");(b=g.r("ytdebug.logTiming"))&&b(k,c);bi(k,h,a);g.Sf(Pba,new Qc(c.aft+(n||0),a))}}};
g.Mh=function(a,b){if(!di(b)){var c=g.y((b||"")+"TIMING_ACTION",void 0),d=Ih(b);if(g.r("yt.timing."+(b||"")+"ready_")&&c&&d._start&&$h(b))if(a||b)ci(b);else{var c=!0,e=g.y("TIMING_WAIT",[]);if(e.length)for(var h=0,k=e.length;h<k;++h)if(!(e[h]in d)){c=!1;break}c&&ci(b)}}};
bi=function(a,b,c){if(g.Gc("debug_csi_data")){var d=g.r("yt.timing.csiData");d||(d=[],g.p("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);window.navigator&&window.navigator.sendBeacon&&b?g.dh(a):g.bh(a);Uh(!0,c)};
ei=function(a){g.p("yt.timing.ready_",a,void 0)};
Oh=function(a){var b=fi(a).nonce;if(!b){var c;a:{if(window.crypto&&window.crypto.getRandomValues)try{var d=Array(16),e=new window.Uint8Array(16);window.crypto.getRandomValues(e);for(b=0;b<d.length;b++)d[b]=e[b];c=d;break a}catch(h){}c=Array(16);for(d=0;16>d;d++){e=(0,g.C)();for(b=0;b<e%23;b++)c[d]=Math.random();c[d]=Math.floor(256*Math.random())}if(gi)for(d=1,e=0;e<gi.length;e++)c[d%16]=c[d%16]^c[(d-1)%16]/4^gi.charCodeAt(e),d++}d=[];for(e=0;e<c.length;e++)d.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(c[e]&
63));b=d.join("");fi(a).nonce=b}return b};
Ih=function(a){return fi(a).tick};
Hh=function(a){return fi(a).info};
Jh=function(a){a=fi(a);"gel"in a||(a.gel={});return a.gel};
fi=function(a){return g.r("ytcsi."+(a||"")+"data_")||Th(a)};
Th=function(a){var b={tick:{},info:{}};g.p("ytcsi."+(a||"")+"data_",b,void 0);return b};
di=function(a){return!!g.r("yt.timing."+(a||"")+"pingSent_")};
Uh=function(a,b){g.p("yt.timing."+(b||"")+"pingSent_",a,void 0)};
hi=function(a){if(!di(void 0)){if(!g.Gc("send_empty_timing")){var b=g.y("CSI_SERVICE_NAME","youtube");if(!g.y("TIMING_ACTION",void 0)||!b)return}g.Nh("aa",void 0,void 0);Ph("ap",1,void 0);Ph("yt_fss",a,void 0);!g.Gc("enable_csi_abandonment_info")||Sh("yt_lt")||Zh();ci(void 0)}};
Oba=function(a){var b=Ih(a),c=b.pbr,d=b.vc,b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Hh(a).yt_pvis};
Jba=function(){switch(g.$f()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
ki=function(a,b){g.Db.call(this);this.M=this.G=a;this.ha=b;this.K=!1;this.api={};this.Za=this.oa=null;this.la=new g.Ue;g.Gb(this,this.la);this.D={};this.W=this.bb=this.F=this.tb=this.C=null;this.na=!1;this.O=this.H=this.J=this.X=null;this.ib={};this.Ub=["onReady"];this.qa=new yh(this);g.Gb(this,this.qa);this.zb=null;this.Gb=window.NaN;this.ua={};ii(this);this.Ge("onDetailedError",(0,g.t)(this.LL,this));this.Ge("onTabOrderChange",(0,g.t)(this.iA,this));this.Ge("onTabAnnounce",(0,g.t)(this.mq,this));
this.Ge("WATCH_LATER_VIDEO_ADDED",(0,g.t)(this.QL,this));this.Ge("WATCH_LATER_VIDEO_REMOVED",(0,g.t)(this.RL,this));g.ji||(this.Ge("onMouseWheelCapture",(0,g.t)(this.vL,this)),this.Ge("onMouseWheelRelease",(0,g.t)(this.wL,this)));this.Ge("onAdAnnounce",(0,g.t)(this.mq,this));this.T=new yh(this);g.Gb(this,this.T);this.qb=!1;this.kb=null};
mi=function(a,b){a.tb=b;a.C=b.clone();a.F=a.C.attrs.id||a.F;"video-player"==a.F&&(a.F=a.ha,a.C.attrs.id=a.ha);a.M.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F);a.C.args.enablejsapi="1";a.C.args.playerapiid=a.ha;a.bb||(a.bb=li(a,a.C.args.jsapicallback||"onYouTubePlayerReady"));a.C.args.jsapicallback=null;var c=a.C.attrs.width;c&&g.Yf(a.M,Number(c)||c);(c=a.C.attrs.height)&&g.Xf(a.M,Number(c)||c)};
ni=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
oi=function(a){if(!g.ka(a.C.disable.flash)){var b=a.C.disable,c;c=g.se.getInstance().isSupported(a.C.minVersion);b.flash=!c}return!a.C.disable.flash};
ri=function(a,b){if((!b||(5!=(Qba[b.errorCode]||5)?0:-1!=Rba.indexOf(b.errorCode)))&&oi(a)){var c=pi(a);c&&c.stopVideo&&c.stopVideo();var d=a.C;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=g.Tb(c));d.args.autoplay=1;d.args.html5_unavailable="1";mi(a,d);qi(a,"flash")}};
qi=function(a,b){if(!a.pb()){if(!b){var c;if(!(c=!a.C.html5&&oi(a))){if(!g.ka(a.C.disable.html5)){var d;c=!0;void 0!=a.C.args.deviceHasDisplay&&(c=a.C.args.deviceHasDisplay);if(2.2==si)d=!0;else{a:{var e=c;c=g.r("yt.player.utils.videoElement_");c||(c=g.of("VIDEO"),g.p("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Sba:Tba,h=0;h<e.length;h++)if(c.canPlayType(e[h])){d=null;break a}d="fmt.noneavailable"}catch(k){d="html5.missingapi"}}d=!d}d&&(d=ti(a)||a.C.assets.js);a.C.disable.html5=
!d;d||(a.C.args.html5_unavailable="1")}c=!!a.C.disable.html5}b=c?oi(a)?"flash":"unsupported":"html5"}("flash"==b?a.ZR:a.aS).call(a)}};
ti=function(a){var b=!0,c=pi(a);c&&a.C&&(a=a.C,b=g.x(c,"version")==a.assets.js);return b&&!!g.r("yt.player.Application.create")};
pi=function(a){var b=g.D(a.F);!b&&a.M&&a.M.querySelector&&(b=a.M.querySelector("#"+a.F));return b};
ui=function(a,b,c){var d=b[c];return function(){try{return a.zb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.zb=e,g.Dc(e,"WARNING"))}}};
ii=function(a){a.K=!1;if(a.Za)for(var b in a.D)a.Za(b,a.D[b]);for(var c in a.ua)g.id((0,window.parseInt)(c,10));a.ua={};a.oa=null;a.Za=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=(0,g.t)(a.Ge,a);a.api.removeEventListener=(0,g.t)(a.pQ,a);a.api.destroy=(0,g.t)(a.dispose,a);a.api.getLastError=(0,g.t)(a.OB,a);a.api.getPlayerType=(0,g.t)(a.hC,a);a.api.getCurrentVideoConfig=(0,g.t)(a.mB,a);a.api.loadNewVideoConfig=(0,g.t)(a.Np,a);a.api.isReady=(0,g.t)(a.nS,a)};
li=function(a,b){var c=b;if("string"==typeof b){if(a.ib[b])return a.ib[b];c=function(){var a=g.r(b);a&&a.apply(g.m,arguments)};
a.ib[b]=c}return c?c:null};
Uba=function(a,b){var c="ytPlayer"+b+a.ha;a.D[b]=c;g.m[c]=function(c){var d=g.kd(function(){a.pb()||(a.la.cb(b,c),g.Va(a.ua,String(d)))},0);
g.Wa(a.ua,String(d),!0)};
return c};
vi=function(a){return(a=pi(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null};
xi=function(a){g.Nh("dcp");a.cancel();ii(a);a.W=null;a.C&&(a.C.loaded=!1);var b=pi(a);"html5"==vi(a)?ti(a)||!wi(a)?a.J=b:(b&&b.destroy&&b.destroy(),a.J=null):b&&b.destroy&&b.destroy();g.pf(a.G);Ah(a.qa);a.H=null;a.O=null};
wi=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
$ba=function(){yi++;var a=g.ff(),b=new g.ze(0,0,a.width,a.height);Ph("vps",a.width+"."+a.height);g.Nh("vpc");var a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]"),c=a.length,d=[],e=!0;Ai.start();for(var h=0;h<c;h++){var k=a[h];if(Bi(k,b)){var l=Vba(k);l.then(Wba);d.push(l);Ci.push(l);k.loadTime||(e=!1)}}e&&Ph("yt_eil",1);Ph("vpni",d.length);g.Nh("vpcc");b=g.Je(d).then(Xba);g.Le(b,Yba);b.then(Zba);Ci.push(b);return b};
Zba=function(){Ai.stop()};
Yba=function(){g.Nh("vpr")};
Bi=function(a,b){for(var c=a,d=window.document.body,e=[];c!=d;){var h=g.bg(c);if(h in Di)return!0;if(h in Ei)return!1;var k=window.getComputedStyle(c);if("none"==k.display||"hidden"==k.visibility)return Ei[h]=!0,!1;k=c.getBoundingClientRect();if(!(b.left<=k.left+k.width&&k.left<=b.left+b.width&&b.top<=k.top+k.height&&k.top<=b.top+b.height))return Ei[h]=!0,!1;e.push(h);c=c.parentElement}for(c=0;c<e.length;c++)Di[e[c]]=!0;return!0};
Xba=function(a){for(var b=g.ff(),b=new g.ze(0,0,b.width,b.height),c=0,d=0,e=a.length;d<e;d++){var h=a[d].time;Bi(a[d].gG,b)&&c<h&&(c=h)}return c};
Vba=function(a){var b=yi;return new g.Ee(function(c,d){var e={gG:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):a.slt=function(){yi!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)}})};
Wba=function(a){Ai.start();Ph("vpil",++Fi);a=a.time;Gi<a&&(Gi=a,g.Nh("lim",a))};
aca=function(){g.Nh("vptl",Gi);g.Nh("vpl",Gi)};
g.Hi=function(a,b){var c,d;b=void 0===b?{}:b;c=void 0===c?"":c;d=void 0===d?window:d;g.we(d.location,g.Cc(a,b)+c)};
g.Ii=function(a,b){b&&g.Eh(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.Hi(a)};
g.Ji=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.y("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Eh(a,b);if(c)return!1;g.Ii(a);return!0};
g.Mi=function(a,b){a=g.ra(a)?g.bf(a):a;b=g.Tb(b);var c=g.Ki+"_"+g.ya(a),d=g.Li[c];if(d)return d.Np(b),d.api;d=new ki(a,c);g.Li[c]=d;g.F("player-added",d.api);g.Eb(d,g.u(bca,d));g.kd(function(){d.Np(b)},0);
return d.api};
bca=function(a){g.Li[a.getId()]=null};
g.Ni=function(a){a=g.D(a);if(!a)return null;var b=g.Ki+"_"+g.ya(a),c=g.Li[b];c||(c=new ki(a,b),g.Li[b]=c);return c.api};
Pi=function(){g.Nh("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.Nh("cpt")},0)}):window.document.hidden?g.Nh("cpt"):(0,window.setTimeout)(function(){g.Nh("cpt")},0);
cca();g.y("CSI_VIEWPORT")&&(Oi=$ba(),Oi.then(function(a){g.Nh("vpl",a);Oi=null},function(){}))};
cca=function(){Qi("init");var a=g.y("PAGE_NAME",void 0);a&&Qi("init-"+a)};
Qi=function(a){g.Zd()?Ri.push(g.ae(g.u(g.Qf,a),0)):g.F(a)};
Ti=function(){g.ce(Ri);Ri.length=0;for(var a=Ci.length,b=0;b<a;b++)Ci[b].cancel();Gi=Fi=Ci.length=0;Di={};Ei={};for(b=0;b<Si.length;b++)Si[b].slt=void 0;Si.length=0;Oi&&(Oi.cancel(),Oi=null);(a=g.y("PAGE_NAME",void 0))&&g.Qf("dispose-"+a);g.Qf("dispose")};
dca=function(){Pi()};
eca=function(){g.y("TIMING_REPORT_ON_UNLOAD")&&g.Mh(!0);hi("u");g.gg();Ti();g.Qf("pageunload")};
fca=function(){g.p("yt.abuse.botguardInitialized",Dg,void 0);g.p("yt.abuse.invokeBotguard",g.Eg,void 0);g.p("yt.abuse.dclkstatus.checkDclkStatus",Fg,void 0);g.p("yt.player.exports.navigate",g.Ji,void 0);g.p("yt.player.embed",g.Mi,void 0);g.p("yt.player.getPlayerByElement",g.Ni,void 0);g.p("yt.util.activity.init",g.fh,void 0);g.p("yt.util.activity.getTimeSinceActive",g.gh,void 0);g.p("yt.util.activity.setTimestamp",eh,void 0);var a=g.r("ytplayer.config");Ui(a);g.r("ytspf.enabled")&&(Vi=g.jd(Wi,5E3),
(a=g.Xi())?(a.addEventListener("onReady",Wi),a.addEventListener("onStateChange",Wi)):Yi("unable to init PP monitor"))};
Ui=function(a){for(var b in g.Li){var c=g.Li[b];c&&c.cancel()}if(a=a||null){b=g.Xi();var d=!0,c=g.Zi;g.Zi=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?($i="",g.Mi("player-api",a)):b.playVideo();a=g.Tb(a);a.loaded=!0}Wi();g.p("ytplayer.config",a,void 0)};
g.Xi=function(){var a=g.r("yt.player.getPlayerByElement");return a?a("player-api"):null};
Wi=function(){var a=g.Xi();if(a){var b;b=g.D("player");b=!b||g.B(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.y("PAGE_NAME"),e=g.zg();!c||d||e||(Yi("PP playing off watch (paused)"),a.pauseVideo());b&&d?Yi("PP off-screen on watch"):b||d||Yi("PP !off-screen off watch")}};
Yi=function(a){var b=g.y("PAGE_NAME");b&&(b=[b,$i,g.r("_spf_state.nav-counter")],a+="("+b.join(",")+")",g.p("yt.www.persistentplayer.issue",a,void 0),g.Dc(Error(a),"WARNING"))};
aj=function(){eh()};
bj=function(a){a=a.detail.url;window.yt_spf_loaded_history=!0;eh();var b=g.wh();if(b&&a){var c=g.ub(b.visualElement),b={csn:b.clientScreenNonce};"trackingParams"in c?b.itct=c.trackingParams:(b.veType=c.veType,b.veCounter=c.veCounter);g.Eh(a,b)}};
gj=function(){cj=1;dj=ej=0;g.y("TIMING_REPORT_ON_UNLOAD")&&g.Mh(!0);g.Gc("warm_load_nav_start_web")?(hi("n"),Vh(),ei(!1),g.Qb("TIMING_AFT_KEYS",[]),Ph("yt_lt","warm"),g.Qb("TIMING_ACTION",""),g.Qb("TIMING_WAIT",[])):(hi("n"),Vh());Qh("n");Gh("nr");fj(gca);g.Qf("navigate")};
kj=function(a){a=a.detail.part||a.detail.partial;g.Nh("nc"+ej);++ej;if(a.data&&a.data.deferDispose)"watch"==a.name&&g.Nh("bc");else{var b=1==cj;cj=2;b?(fj(hca),hj()):fj(ica);if(b=a.data&&a.data.swfcfg)ij(a.timing,b.args),jj(b)}};
lj=function(){g.Nh("np"+dj);++dj};
mj=function(a){a=a.detail.response;var b=1==cj;cj=3;b&&(fj(jca),hj());if(b=a.data&&a.data.swfcfg)ij(a.timing,b.args),jj(b)};
qj=function(a){g.Nh("nd");a=a.detail.response;g.nj=a.cacheKey;a=a.timing;var b=window._spf_state;g.oj.navigationCount=b&&b["nav-counter"]||0;g.Gc("warm_load_nav_start_web")?g.Nh("srt",a.responseStart):(Qh("ne",a.responseStart),Ph("srt",Math.max(0,a.responseStart-a.navigationStart)));Ph("yt_lt",a.spfCached?"hot":"warm");Ph("yt_pft",+!!a.spfPrefetched);g.Nh("pfs",a.fetchStart);g.Nh("pfrs",a.responseStart);"redirectStart"in a&&Wh(a);fj(pj);window.document.getElementById("content").style.height="";Pi();
cj=0};
rj=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Dc(a)};
sj=function(a){g.nh(g.Bc({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
lca=function(){kca();g.Qb("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);window.yt_spf_loaded_history=!1};
mca=function(){};
hj=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Ti();var a=g.y("PREVIOUS_ACTION"),b;for(b in g.Pb)delete g.Pb[b];g.Qb("PREVIOUS_ACTION",a);g.p("ytplayer.config",null,void 0);if((b=g.Xi())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())$i=b,(b=g.D("movie_player"))&&b.stopVideo?(b.stopVideo(),$i="recovered"):$i="missing2"}else $i="missing";Wi()};
jj=function(a){"cfg"in Ih(void 0)||g.Nh("cfg");Ui(a)};
fj=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.be(tj);tj=g.ae(function(){var c=a[0],d=a[1],e=a[2];b.className="";var h=b.style;h.transitionDuration=h.webkitTransitionDuration=c+"ms";h.width=d+"%";g.id(uj);uj=g.kd(function(){b.className=e},c)},0)};
kca=function(){var a=pj[0]+50;g.id(uj);uj=g.kd(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
ij=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&(0,g.z)(nca,function(a){a in b&&(delete b[a],e.push(a))});
g.y("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"removeNonCacheableVideoVars",cached:c,prefetched:d,deleted:e.join("")},g.nh(g.Bc(c)))};
vj=function(){g.ng.call(this,"www/base");this.D=0};
wj=function(a){(a=a.detail.name)&&Ng(a)};
g.ba=[];fa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;baa=0;ja("Promise",function(a){function b(a){this.C=0;this.G=void 0;this.F=[];var b=this.K();try{a(b.resolve,b.reject)}catch(l){b.reject(l)}}
function c(){this.C=null}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.K()})};
var d=ea.setTimeout;c.prototype.D=function(a){d(a,0)};
c.prototype.K=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(n){this.H(n)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.K=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.T),reject:a(this.H)}};
b.prototype.T=function(a){if(a===this)this.H(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.X(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.O(a):this.M(a)}};
b.prototype.O=function(a){var b=void 0;try{b=a.then}catch(l){this.H(l);return}"function"==typeof b?this.oa(b,a):this.M(a)};
b.prototype.H=function(a){this.J(2,a)};
b.prototype.M=function(a){this.J(1,a)};
b.prototype.J=function(a,b){if(0!=this.C)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.C);this.C=a;this.G=b;this.W()};
b.prototype.W=function(){if(null!=this.F){for(var a=this.F,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.F=null}};
var e=new c;b.prototype.X=function(a){var b=this.K();a.D(b.resolve,b.reject)};
b.prototype.oa=function(a,b){var c=this.K();try{a.call(b,c.resolve,c.reject)}catch(n){c.reject(n)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(aa){h(aa)}}:b}
var e,h,k=new b(function(a,b){e=a;h=b});
this.D(d(a,e),d(c,h));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.D=function(a,b){function c(){switch(d.C){case 1:a(d.G);break;case 2:b(d.G);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?e.F(c):this.F.push(function(){e.F(c)})};
b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};
b.reject=function(a){return new b(function(b,c){c(a)})};
b.C=function(a){return new b(function(c,d){for(var e=g.ia(a),h=e.next();!h.done;h=e.next())b.resolve(h.value).D(c,d)})};
b.all=function(a){var c=g.ia(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function h(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,b.resolve(d.value).D(h(k.length-1),e),d=c.next();while(!d.done)})};
b.$jscomp$new$AsyncExecutor=function(){return new c};
return b});
ja("String.prototype.startsWith",function(a){return a?a:function(a,c){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");b=this+"";a+="";for(var e=b.length,h=a.length,k=Math.max(0,Math.min(c|0,b.length)),l=0;l<h&&k<e;)if(b[k++]!=a[l++])return!1;return l>=h}});
g.xj=g.xj||{};g.m=this;xa="closure_uid_"+(1E9*Math.random()>>>0);daa=0;g.C=Date.now||function(){return+new Date};/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Fd=window,wd=window.document,Aaa=Fd.location,kaa=/\[native code\]/,Cd=Aa(Fd,"gapi",{});Ca.prototype.get=function(){var a;0<this.F?(this.F--,a=this.C,this.C=a.next,a.next=null):a=this.D();return a};g.v(g.Ea,Error);g.Ea.prototype.name="CustomError";g.yj=g.Fa(!1);g.zj=g.Fa(!0);g.Aj=g.Fa(null);g.oca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.pca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Bj=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");g.Ja.prototype.xc=function(a){var b=[];La(this,a,b);return b.join("")};
var Na={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},laa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;g.f=g.Oa.prototype;g.f.clone=function(){return new g.Oa(this.width,this.height)};
g.f.Xg=function(){return this.width*this.height};
g.f.aspectRatio=function(){return this.width/this.height};
g.f.isEmpty=function(){return!this.Xg()};
g.f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.scale=function(a,b){var c=g.sa(b)?b:a;this.width*=a;this.height*=c;return this};var Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.bb[" "]=g.la;var oaa,paa,qaa,raa,saa,taa,naa;g.kb=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
oaa=/&/g;paa=/</g;qaa=/>/g;raa=/"/g;saa=/'/g;taa=/\x00/g;naa=/[\x00&<>"']/;g.Cj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
g.qca=2147483648*Math.random()|0;var qb={};var uaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.rb.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.rb.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.rb.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};g.mg=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.re="Microsoft Internet Explorer"==window.navigator.appName;var wb=g.ka(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.ka(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;g.yb.prototype.toString=function(){return this.topic};var Fh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var Cb=null;g.Db.prototype.Tc=!1;g.Db.prototype.pb=function(){return this.Tc};
g.Db.prototype.dispose=function(){this.Tc||(this.Tc=!0,this.aa())};
g.Db.prototype.aa=function(){if(this.Hb)for(;this.Hb.length;)this.Hb.shift()()};var Ib="closure_listenable_"+(1E6*Math.random()|0),Caa=0;a:{var Dj=g.m.navigator;if(Dj){var Ej=Dj.userAgent;if(Ej){g.Kb=Ej;break a}}g.Kb=""};g.f=g.Mb.prototype;g.f.isEnabled=function(){return window.navigator.cookieEnabled};
g.f.set=function(a,b,c,d,e,h){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ka(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";h=h?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.C)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+h};
g.f.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,h;e<d.length;e++){h=(0,g.kb)(d[e]);if(0==h.lastIndexOf(c,0))return h.substr(c.length);if(h==a)return""}return b};
g.f.remove=function(a,b,c){var d=g.ka(this.get(a));this.set(a,"",0,b,c);return d};
g.f.Tb=g.ca(0);g.f.wb=g.ca(1);g.f.isEmpty=function(){return!this.C.cookie};
g.f.yb=g.ca(5);g.f.Me=g.ca(6);g.f.clear=function(){for(var a=g.Nb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Lc=new g.Mb("undefined"==typeof window.document?null:window.document);g.Lc.F=3950;g.Ob.prototype.set=function(a,b){g.ka(b)?this.C.set(a,g.Ka(b)):this.C.remove(a)};
g.Ob.prototype.get=function(a){var b;try{b=this.C.get(a)}catch(c){return}if(null!==b)try{return g.Ha(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Ob.prototype.remove=function(a){this.C.remove(a)};g.Pb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.p("yt.config_",g.Pb,void 0);var xaa={enablejsapi:1},yaa={},zaa={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};Sb.prototype.clone=function(){var a=new Sb,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.na(c)?a[b]=g.Xa(c):a[b]=c}return a};var Qba={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};g.Ub.prototype.xc=function(){return{version:this.version,args:this.args}};var Vb;Vb=Aa(Fd,"___jsl",Ba());Aa(Vb,"I",0);Aa(Vb,"hel",10);g.$b=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(g.ra(a))return g.ra(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.rca=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;
0>c&&(c=Math.max(0,a.length+c));if(g.ra(a))return g.ra(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)};
g.Fj=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],h=0,k=g.ra(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var n=k[l];
b.call(c,n,l,a)&&(e[h++]=n)}return e};
g.ai=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),h=g.ra(a)?a.split(""):a,k=0;k<d;k++)k in h&&(e[k]=b.call(c,h[k],k,a));
return e};
g.Gj=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.z)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Hj=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return!0;
return!1};
g.Ij=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&!b.call(c,e[h],h,a))return!1;
return!0};var ge=new Ca(function(){return new hc},function(a){a.reset()},100);
gc.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
hc.prototype.set=function(a,b){this.Dc=a;this.scope=b;this.next=null};
hc.prototype.reset=function(){this.next=this.scope=this.Dc=null};g.ic.prototype.stopPropagation=function(){this.F=!0};
g.ic.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Sw=!1};g.v(mc,g.Ob);mc.prototype.set=function(a,b){mc.N.set.call(this,a,oc(b))};
mc.prototype.F=function(a){a=mc.N.get.call(this,a);if(!g.ka(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
mc.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ka(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.qc.prototype.Bg=!0;g.qc.prototype.xf=function(){return this.C};
g.qc.prototype.toString=function(){return"Const{"+this.C+"}"};
g.pc={};g.rc("");g.uc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.Hc=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.p("yt.msgs_",g.Hc,void 0);g.v(Qc,g.Ub);var Pba=new g.yb("timing-sent",Qc);var Tc=Aa(Vb,"perf",Ba());Aa(Tc,"g",Ba());var Gaa=Aa(Tc,"i",Ba());Aa(Tc,"r",[]);Ba();Ba();g.f=g.Wc.prototype;g.f.remove=function(a,b,c,d){a=a.toString();if(!(a in this.C))return!1;var e=this.C[a];b=Xc(e,b,c,d);return-1<b?(jc(e[b]),g.cc(e,b),0==e.length&&(delete this.C[a],this.F--),!0):!1};
g.f.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.C)if(!a||c==a){for(var d=this.C[c],e=0;e<d.length;e++)++b,jc(d[e]);delete this.C[c];this.F--}return b};
g.f.kh=g.ca(8);g.f.jg=function(a,b,c,d){a=this.C[a.toString()];var e=-1;a&&(e=Xc(a,b,c,d));return-1<e?a[e]:null};
g.f.hasListener=function(a,b){var c=g.ka(a),d=c?a.toString():"",e=g.ka(b);return g.Qa(this.C,function(a){for(var h=0;h<a.length;++h)if(!(c&&a[h].type!=d||e&&a[h].capture!=b))return!0;return!1})};g.ad.prototype.Bg=!0;g.$c={};g.ad.prototype.xf=function(){return this.C};
g.Jj=g.bd("");g.v(g.fd,mc);g.fd.prototype.set=function(a,b,c){if(b=oc(b)){if(c){if(c<(0,g.C)()){g.fd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.C)()}g.fd.N.set.call(this,a,b)};
g.fd.prototype.F=function(a,b){var c=g.fd.N.F.call(this,a);if(c)if(!b&&g.gd(c))g.fd.prototype.remove.call(this,a);else return c};var gi=(0,g.C)().toString();var qd=Ba(),Ad=[];Ad.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Vb[b]=Aa(Vb,b,[]).concat(c):Aa(Vb,b,c)}if(b=a.u)a=Aa(Vb,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Oaa=/^(\/[a-zA-Z0-9_\-]+)+$/,sd=[/\/amp\//,/\/amp$/,/^\/amp$/],Qaa=/^[a-zA-Z0-9\-_\.,!]+$/,Maa=/^gapi\.loaded_[0-9]+$/,Paa=/^[a-zA-Z0-9,._-]+$/,Jaa=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Iaa=/\/cb=/g,Haa=/\/\//g;qd.m=function(a,b,c,d){(a=a[0])||pd("missing_hint");return"https://apis.google.com"+Naa(a,b,c,d)};
var xd=(0,window.decodeURI)("%73cript"),vd=/^[-+_0-9\/A-Za-z]+={0,2}$/;Cd.load=function(a,b){return Bd(function(){return g.Ed(a,b)})};var je;g.Id.prototype.Bg=!0;g.Id.prototype.xf=function(){return this.C};
g.Id.prototype.Nn=!0;g.Id.prototype.tf=g.ca(10);var Waa=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,Hd={};g.Kd("about:blank");g.Nd="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.Md.prototype.next=function(){throw g.Nd;};
g.Md.prototype.Ac=function(){return this};g.f=g.Rd.prototype;g.f.clone=function(){return new g.Rd(this.x,this.y)};
g.f.equals=function(a){return a instanceof g.Rd&&g.Sd(this,a)};
g.f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.f.translate=function(a,b){a instanceof g.Rd?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.sa(b)&&(this.y+=b));return this};
g.f.scale=function(a,b){var c=g.sa(b)?b:a;this.x*=a;this.y*=c;return this};var Tj,Xaa,Yj;g.Kj=g.Lb("Opera");g.E=g.cd();g.Lj=g.Lb("Edge");g.Mj=g.Lj||g.E;g.Nj=g.Lb("Gecko")&&!(g.jb(g.Kb.toLowerCase(),"webkit")&&!g.Lb("Edge"))&&!(g.Lb("Trident")||g.Lb("MSIE"))&&!g.Lb("Edge");g.kf=g.jb(g.Kb.toLowerCase(),"webkit")&&!g.Lb("Edge");g.kf&&g.Lb("Mobile");g.Oj=g.Lb("Macintosh");g.Sj=g.Lb("Windows");g.sca=g.Lb("Linux")||g.Lb("CrOS");Tj=g.m.navigator||null;Tj&&g.jb(Tj.appVersion||"","X11");g.tca=g.Lb("Android");g.qh=kc();g.rh=g.Lb("iPad");g.uca=g.Lb("iPod");g.lc();var Uj;
a:{var Vj="",Wj=function(){var a=g.Kb;if(g.Nj)return/rv\:([^\);]+)(\)|;)/.exec(a);if(g.Lj)return/Edge\/([\d\.]+)/.exec(a);if(g.E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.kf)return/WebKit\/(\S+)/.exec(a);if(g.Kj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Wj&&(Vj=Wj?Wj[1]:"");if(g.E){var Xj=Td();if(null!=Xj&&Xj>(0,window.parseFloat)(Vj)){Uj=String(Xj);break a}}Uj=Vj}g.Vd=Uj;Xaa={};var Zj=g.m.document;Yj=Zj&&g.E?Td()||("CSS1Compat"==Zj.compatMode?(0,window.parseInt)(g.Vd,10):5):void 0;g.Xd=Yj;var de,ee=!1,fe=new gc;var dba;dba=!g.E||g.Yd(9);g.vca=!g.Nj&&!g.E||g.E&&g.Yd(9)||g.Nj&&g.Wd("1.9.1");g.ak=g.E&&!g.Wd("9");g.wca=g.E||g.Kj||g.kf;g.xca=g.E&&!g.Yd(9);var Bf,zca;g.yca=!g.E||g.Yd(9);Bf=!g.E||g.Yd(9);zca=g.E&&!g.Wd("9");!g.kf||g.Wd("528");g.Nj&&g.Wd("1.9b")||g.E&&g.Wd("8")||g.Kj&&g.Wd("9.5")||g.kf&&g.Wd("528");g.Nj&&!g.Wd("8")||g.E&&g.Wd("9");g.bk=g.E?"focusin":"DOMFocusIn";g.ck=g.E?"focusout":"DOMFocusOut";g.dk=g.kf?"webkitTransitionEnd":g.Kj?"otransitionend":"transitionend";g.le.prototype.Nn=!0;g.le.prototype.tf=g.ca(9);g.le.prototype.Bg=!0;g.le.prototype.xf=function(){return this.C};
g.ke={};g.Aca=g.me("<!DOCTYPE html>",0);g.ek=g.me("",0);g.fk=g.me("<br>",0);g.f=g.ne.prototype;g.f.getWidth=function(){return this.right-this.left};
g.f.getHeight=function(){return this.bottom-this.top};
g.f.clone=function(){return new g.ne(this.top,this.right,this.bottom,this.left)};
g.f.contains=function(a){return g.oe(this,a)};
g.f.expand=function(a,b,c,d){g.va(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};
g.f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.f.translate=function(a,b){a instanceof g.Rd?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,g.sa(b)&&(this.top+=b,this.bottom+=b));return this};
g.f.scale=function(a,b){var c=g.sa(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};g.v(g.pe,g.fd);g.v(g.qe,maa);g.qe.prototype.yb=g.ca(4);g.qe.prototype.clear=function(){var a=g.Qd(this.Ac(!0)),b=this;(0,g.z)(a,function(a){b.remove(a)})};g.ji=g.Lb("Firefox");g.gk=kc()||g.Lb("iPod");g.hk=g.Lb("iPad");g.ph=g.Lb("Android")&&!(g.dd()||g.Lb("Firefox")||g.Lb("Opera")||g.Lb("Silk"));g.oh=g.dd();g.ik=g.ed()&&!g.lc();g.ma(g.se);g.se.prototype.getVersion=function(){return[this.major,this.minor,this.C]};
g.se.prototype.isSupported=function(a,b,c){a="string"==typeof a?a.split("."):[a,b,c];a[0]=(0,window.parseInt)(a[0],10)||0;a[1]=(0,window.parseInt)(a[1],10)||0;a[2]=(0,window.parseInt)(a[2],10)||0;return this.major>a[0]||this.major==a[0]&&this.minor>a[1]||this.major==a[0]&&this.minor==a[1]&&this.C>=a[2]};var si;var jk=g.Kb,jk=jk.toLowerCase();if(g.jb(jk,"android")){var kk=jk.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(kk)si=Number(kk[1]);else{var lk={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},mk=jk.match("("+g.Ra(lk).join("|")+")");si=mk?lk[mk[0]]:0}}else si=void 0;g.Bca=g.Nj||g.kf&&!g.ik||g.Kj||"function"==typeof g.m.btoa;g.v(g.xe,g.ic);
g.xe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Nj&&(g.cb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.K=g.Oj?a.metaKey:a.ctrlKey;this.state=a.state;this.Ob=a;a.defaultPrevented&&this.preventDefault()};
g.xe.prototype.stopPropagation=function(){g.xe.N.stopPropagation.call(this);this.Ob.stopPropagation?this.Ob.stopPropagation():this.Ob.cancelBubble=!0};
g.xe.prototype.preventDefault=function(){g.xe.N.preventDefault.call(this);var a=this.Ob;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,zca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};
g.xe.prototype.D=g.ca(11);g.f=g.ze.prototype;g.f.clone=function(){return new g.ze(this.left,this.top,this.width,this.height)};
g.f.contains=function(a){return a instanceof g.Rd?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.translate=function(a,b){a instanceof g.Rd?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.sa(b)&&(this.top+=b));return this};
g.f.scale=function(a,b){var c=g.sa(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};Fe.prototype.reset=function(){this.context=this.F=this.D=this.C=null;this.G=!1};
var Ge=new Ca(function(){return new Fe},function(a){a.reset()},100);
g.Ee.prototype.then=function(a,b,c){return Ke(this,g.ta(a)?a:null,g.ta(b)?b:null,c)};
g.$a(g.Ee);g.Ee.prototype.cancel=function(a){0==this.C&&he(function(){var b=new g.Re(a);Me(this,b)},this)};
g.Ee.prototype.W=function(a){this.C=0;g.De(this,2,a)};
g.Ee.prototype.O=function(a){this.C=0;g.De(this,3,a)};
g.Ee.prototype.J=function(){for(var a;a=Ne(this);)Oe(this,a,this.C,this.M);this.K=!1};
var Te=Gd;g.v(g.Re,g.Ea);g.Re.prototype.name="cancel";g.v(g.Ue,g.Db);g.f=g.Ue.prototype;g.f.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.f.ef=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.la):(c&&g.dc(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.f.cb=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,h=arguments.length;e<h;e++)d[e-1]=arguments[e];if(this.K)for(e=0;e<c.length;e++){var k=c[e];bba(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,h=c.length;e<h;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.ef(c)}}return 0!=e}return!1};
g.f.clear=function(a){if(a){var b=this.F[a];b&&((0,g.z)(b,this.ef,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.f.yb=g.ca(3);g.f.aa=function(){g.Ue.N.aa.call(this);this.clear();this.D.length=0};g.v(g.We,g.qe);g.f=g.We.prototype;g.f.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.f.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.f.get=function(a){a=this.C.getItem(a);if(!g.ra(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeItem(a)};
g.f.yb=g.ca(2);g.f.Ac=function(a){var b=0,c=this.C,d=new g.Md;d.next=function(){if(b>=c.length)throw g.Nd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.ra(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){this.C.clear()};
g.f.key=function(a){return this.C.key(a)};var nk;var ok=g.Kb,pk=ok.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!pk||2>pk.length)nk=void 0;else{var qk=ok.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);nk=qk&&6==qk.length?Number(qk[5].replace("_",".")):0}0<=nk&&0<=g.Kb.search("Safari")&&g.Kb.search("Version");var cf={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var yf="closure_lm_"+(1E6*Math.random()|0),Ef={},Af=0,Hf="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.If,g.We);g.v(Jf,g.We);var rk=g.r("ytPubsubPubsubInstance")||g.r("yt.pubsub.instance_")||new g.Ue;g.Ue.prototype.subscribe=g.Ue.prototype.subscribe;g.Ue.prototype.unsubscribeByKey=g.Ue.prototype.ef;g.Ue.prototype.publish=g.Ue.prototype.cb;g.Ue.prototype.clear=g.Ue.prototype.clear;g.p("yt.pubsub.instance_",rk,void 0);g.p("ytPubsubPubsubInstance",rk,void 0);var Lf=g.r("ytPubsubPubsubSubscribedKeys")||g.r("yt.pubsub.subscribedKeys_")||{};g.p("yt.pubsub.subscribedKeys_",Lf,void 0);g.p("ytPubsubPubsubSubscribedKeys",Lf,void 0);
var Nf=g.r("ytPubsubPubsubTopicToKeys")||g.r("yt.pubsub.topicToKeys_")||{};g.p("yt.pubsub.topicToKeys_",Nf,void 0);g.p("ytPubsubPubsubTopicToKeys",Nf,void 0);var Mf=g.r("ytPubsubPubsubIsSynchronous")||g.r("yt.pubsub.isSynchronous_")||{};g.p("yt.pubsub.isSynchronous_",Mf,void 0);g.p("ytPubsubPubsubIsSynchronous",Mf,void 0);var Cca=g.r("ytPubsub2Pubsub2Instance")||new g.Ue;g.Ue.prototype.subscribe=g.Ue.prototype.subscribe;g.Ue.prototype.unsubscribeByKey=g.Ue.prototype.ef;g.Ue.prototype.publish=g.Ue.prototype.cb;g.Ue.prototype.clear=g.Ue.prototype.clear;g.p("ytPubsub2Pubsub2Instance",Cca,void 0);g.sk=g.r("ytPubsub2Pubsub2SubscribedKeys")||{};g.p("ytPubsub2Pubsub2SubscribedKeys",g.sk,void 0);g.tk=g.r("ytPubsub2Pubsub2TopicToKeys")||{};g.p("ytPubsub2Pubsub2TopicToKeys",g.tk,void 0);
g.uk=g.r("ytPubsub2Pubsub2IsAsync")||{};g.p("ytPubsub2Pubsub2IsAsync",g.uk,void 0);g.p("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.v(g.Tf,g.Db);g.Tf.prototype[Ib]=!0;g.f=g.Tf.prototype;g.f.ak=function(){return this.Go};
g.f.bj=g.ca(12);g.f.addEventListener=function(a,b,c,d){g.uf(this,a,b,c,d)};
g.f.removeEventListener=function(a,b,c,d){g.Cf(this,a,b,c,d)};
g.f.dispatchEvent=function(a){var b,c=this.ak();if(c){b=[];for(var d=1;c;c=c.ak())b.push(c),++d}c=this.Dz;d=a.type||a;if(g.ra(a))a=new g.ic(a,c);else if(a instanceof g.ic)a.target=a.target||c;else{var e=a;a=new g.ic(d,c);g.Za(a,e)}var e=!0,h;if(b)for(var k=b.length-1;!a.F&&0<=k;k--)h=a.currentTarget=b[k],e=Uf(h,d,!0,a)&&e;a.F||(h=a.currentTarget=c,e=Uf(h,d,!0,a)&&e,a.F||(e=Uf(h,d,!1,a)&&e));if(b)for(k=0;!a.F&&k<b.length;k++)h=a.currentTarget=b[k],e=Uf(h,d,!1,a)&&e;return e};
g.f.aa=function(){g.Tf.N.aa.call(this);this.removeAllListeners();this.Go=null};
g.f.R=function(a,b,c,d){return g.Yc(this.Od,String(a),b,!1,c,d)};
g.f.we=g.ca(13);g.f.Ya=function(a,b,c,d){return this.Od.remove(String(a),b,c,d)};
g.f.removeAllListeners=function(a){return this.Od?this.Od.removeAll(a):0};
g.f.kh=g.ca(7);g.f.jg=function(a,b,c,d){return this.Od.jg(String(a),b,c,d)};
g.f.hasListener=function(a,b){return this.Od.hasListener(g.ka(a)?String(a):void 0,b)};g.vk=g.Nj?"MozUserSelect":g.kf||g.Lj?"WebkitUserSelect":null;var Dca=0,jba=g.kf?"webkit":g.Nj?"moz":g.E?"ms":g.Kj?"o":"",ag=g.r("yt.dom.dom.getNextId")||function(){return++Dca};
g.p("yt.dom.dom.getNextId",ag,void 0);var kba,dg;kba={log_event:"events",log_interaction:"interactions"};g.lg={};dg={};g.jg=0;g.kg=g.r("yt.logging.transport.logPayloadsQueue_")||{};g.p("yt.logging.transport.logPayloadsQueue_",g.kg,void 0);var eg=g.r("yt.logging.transport.tokensToCttTargetIds_")||{};g.p("yt.logging.transport.tokensToCttTargetIds_",eg,void 0);g.f=g.ng.prototype;g.f.CQ=function(){this.Lk()||this.init()};
g.f.enable=function(){this.C=1;(0,g.z)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.CQ,this),this.subscribe("dispose-"+a,this.dispose,this),g.y("PAGE_NAME")==a&&g.og(this))},this)};
g.f.init=function(){g.be(this.F);this.C=2;this.K&&this.K()};
g.f.Lk=function(){return 2==this.C};
g.f.dispose=function(){this.C=3;g.be(this.F);this.H&&this.H()};
g.f.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Dc(a)}};
g.f.subscribe=function(a,b,c){a=g.Of(a,b,c);this.G.push(a);return a};
g.f.clear=function(){g.Pf(this.G);this.G=[]};var lba=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,mba=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;var nba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var wk,xk;wk=new g.If;g.tg=wk.isAvailable()?new g.pe(wk):null;xk=new Jf;g.sg=xk.isAvailable()?new g.pe(xk):null;xg.prototype.toString=function(){return this.region.toString()+": "+this.timing+" => "+this.url};
yg.prototype.toString=function(){return["progress",this.progress,"timing",this.timing,"area",this.Xg].join(": ")};
wg.F=.1;wg.C=/url\(["']?(http[^'"\)]+)['"]?\)/i;wg.D="mark_iframe_loaded: ";wg.G=20;g.Cg=null;var Gg=g.r("ytEventsEventsListeners")||{};g.p("ytEventsEventsListeners",Gg,void 0);var Ig=g.r("ytEventsEventsCounter")||{count:0};g.p("ytEventsEventsCounter",Ig,void 0);var Mg=g.r("yt.modules.registry_")||{};g.p("yt.modules.registry_",Mg,void 0);var Pg;Pg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};g.yk=Rg;var Sba=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Tba=['audio/mp4; codecs="mp4a.40.2"'];g.v(g.Vg,g.Db);g.f=g.Vg.prototype;g.f.Eb=0;g.f.aa=function(){g.Vg.N.aa.call(this);this.stop();delete this.C;delete this.F};
g.f.start=function(a){this.stop();this.Eb=g.Ag(this.Gc,g.ka(a)?a:this.D)};
g.f.stop=function(){this.isActive()&&g.Bg(this.Eb);this.Eb=0};
g.f.isActive=function(){return 0!=this.Eb};
g.f.mn=function(){this.Eb=0;this.C&&this.C.call(this.F)};var Xg={},Wg=0;g.ah.prototype.C=function(){return{context:g.Nc(this.D)}};
g.ah.prototype.F=function(a,b,c){g.y("VISITOR_DATA")||g.Dc(Error("Missing VISITOR_DATA when sending innertube request."));var d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.y("VISITOR_DATA","")},ma:b,jw:"JSON",qc:c.qc,ea:function(a,b){c.ea&&c.ea(b)},
onError:function(a,b){if(c.onError)c.onError(b)},
timeout:c.timeout,withCredentials:!0},e=g.od();e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=g.y("SESSION_INDEX",0));e=this.D.bS;e.startsWith("http")||(e="//"+e);g.Gc("youtubei_for_web")&&(e="");var h=this.D.mG;h&&(e=h);g.Ug(""+e+g.Pc(this.D.innertubeApiVersion,a,b)+"?alt=json&key="+this.D.innertubeApiKey,d)};var ch={},uba=0;var uh=g.r("yt.logging.latency.usageStats_")||{};g.p("yt.logging.latency.usageStats_",uh,void 0);var vh=0;g.v(yh,g.Db);yh.prototype.Ya=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.Wb);break}};
yh.prototype.aa=function(){Ah(this);yh.N.aa.call(this)};g.zk=window.performance&&window.performance.memory;g.oj={};var Nba={vc:!0},Yh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile_polymer/mobile_polymer"]':"mpj",'link[rel="import"][name="mobile_polymer"]':"mph",'script[name="player-plasma-phone/base"]':"mpppj",'script[name="player-plasma-tablet/base"]':"mpptj",
'link[rel="stylesheet"][name="mobile-polymer-player"]':"mppc"},Rh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},Hba="ap c cver ei yt_fss yt_li".split(" "),Mba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS",embed:"LATENCY_ACTION_EMBED",
home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH"},Gba=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Iba=(0,g.t)(Fh.clearResourceTimings||
Fh.webkitClearResourceTimings||Fh.mozClearResourceTimings||Fh.msClearResourceTimings||Fh.oClearResourceTimings||g.la,Fh);g.v(ki,g.Db);var Rba=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g.f=ki.prototype;g.f.getId=function(){return this.ha};
g.f.Np=function(a,b){this.pb()||(mi(this,a),qi(this,b),this.K&&ni(this))};
g.f.mB=function(){return this.tb};
g.f.aS=function(){if(!this.na){var a=ti(this);if(a&&"html5"==vi(this))this.W="html5",this.K||this.Fh();else if(xi(this),this.W="html5",a&&this.J)this.G.appendChild(this.J),this.Fh();else{this.C.loaded=!0;var b=!1;this.X=(0,g.t)(function(){b=!0;var a=this.G,d=this.C.clone();g.r("yt.player.Application.create")(a,d);this.Fh()},this);
this.na=!0;a?this.X():(g.qg(this.C.assets.js,this.X),g.rg(this.C.assets.css),wi(this)&&!b&&g.p("yt.player.Application.create",null,void 0))}}};
g.f.ZR=function(){var a=this.C.clone();if(!this.H){var b=pi(this);b&&(this.H=g.of("SPAN"),this.H.tabIndex=0,zh(this.qa,this.H,"focus",this.cv),this.O=g.of("SPAN"),this.O.tabIndex=0,zh(this.qa,this.O,"focus",this.cv),g.qf(this.H,b),g.rf(this.O,b))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";"flash"==vi(this)?(this.W="flash",this.K||this.Fh()):(xi(this),this.W="flash",this.C.loaded=!0,b=g.se.getInstance(),b=g.te(b)||!g.ue(b)?a.url:a.urlV9As2,window!=window.top&&window.document.referrer&&
(a.args.framer=window.document.referrer.substring(0,128)),g.cg(this.G,b,a),this.Fh())};
g.f.cv=function(){pi(this).focus()};
g.f.Fh=function(){if(!this.pb()){var a=pi(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(h){}if(b)if(this.na=!1,a.isNotServable&&a.isNotServable(this.C.args.video_id))ri(this);else{ii(this);this.K=!0;a=pi(this);a.addEventListener&&(this.oa=ui(this,a,"addEventListener"));a.removeEventListener&&(this.Za=ui(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=ui(this,a,d))}for(var e in this.D)this.oa(e,
this.D[e]);ni(this);this.bb&&this.bb(this.api);this.la.cb("onReady",this.api)}else this.Gb=g.kd((0,g.t)(this.Fh,this),50)}};
g.f.nS=function(){return this.K};
g.f.Ge=function(a,b){if(!this.pb()){var c=li(this,b);if(c){if(!g.ac(this.Ub,a)&&!this.D[a]){var d=Uba(this,a);this.oa&&this.oa(a,d)}this.la.subscribe(a,c);"onReady"==a&&this.K&&g.kd(g.u(c,this.api),0)}}};
g.f.pQ=function(a,b){if(!this.pb()){var c=li(this,b);c&&g.Ve(this.la,a,c)}};
g.f.iA=function(a){a=a?gba:fba;for(var b=a(window.document.activeElement);b&&(1!=b.nodeType||b==this.H||b==this.O||(b.focus(),b!=window.document.activeElement));)b=a(b)};
g.f.mq=function(a){g.F("a11y-announce",a)};
g.f.LL=function(a){ri(this,a)};
g.f.QL=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.f.RL=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.f.vL=function(){this.qb||(g.oh?(this.kb=g.jf(window.document),zh(this.T,window,"scroll",this.nO),zh(this.T,this.G,"touchmove",this.ON)):(zh(this.T,this.G,"mousewheel",this.wv),zh(this.T,this.G,"wheel",this.wv)),this.qb=!0)};
g.f.wL=function(){Ah(this.T);this.qb=!1};
g.f.wv=function(a){g.Kg(a)};
g.f.nO=function(){window.scrollTo(this.kb.x,this.kb.y)};
g.f.ON=function(a){a.preventDefault()};
g.f.hC=function(){return this.W||vi(this)};
g.f.OB=function(){return this.zb};
g.f.cancel=function(){if(this.X){var a=this.X,b=g.pg(this.C.assets.js);window.spf.script.ignore(b,a)}g.id(this.Gb);this.na=!1};
g.f.aa=function(){xi(this);if(this.J&&this.C)try{this.J.destroy()}catch(b){g.Dc(b)}this.ib=null;for(var a in this.D)g.m[this.D[a]]=null;this.tb=this.C=this.api=null;delete this.G;delete this.M;ki.N.aa.call(this)};var Fi=0,Gi=0,Ci=[],Si=[],yi=0,Di={},Ei={},Ai=new g.Vg(aca,1E3);g.Li={};g.Ki="player_uid_"+(1E9*Math.random()>>>0);var Oi=null,Ri=[];var Eca=g.r("yt.abuse.botguardInitialized")||Dg;g.p("yt.abuse.botguardInitialized",Eca,void 0);var Fca=g.r("yt.abuse.invokeBotguard")||g.Eg;g.p("yt.abuse.invokeBotguard",Fca,void 0);var Gca=g.r("yt.abuse.dclkstatus.checkDclkStatus")||Fg;g.p("yt.abuse.dclkstatus.checkDclkStatus",Gca,void 0);var Hca=g.r("yt.player.exports.navigate")||g.Ji;g.p("yt.player.exports.navigate",Hca,void 0);var Ica=g.r("yt.player.embed")||g.Mi;g.p("yt.player.embed",Ica,void 0);var Jca=g.r("yt.player.getPlayerByElement")||g.Ni;
g.p("yt.player.getPlayerByElement",Jca,void 0);var Kca=g.r("yt.util.activity.init")||g.fh;g.p("yt.util.activity.init",Kca,void 0);var Lca=g.r("yt.util.activity.getTimeSinceActive")||g.gh;g.p("yt.util.activity.getTimeSinceActive",Lca,void 0);var Mca=g.r("yt.util.activity.setTimestamp")||eh;g.p("yt.util.activity.setTimestamp",Mca,void 0);var Vi,$i;g.Zi=null;$i="";var cj,uj,tj,ej,dj,nca,gca,jca,hca,ica,pj;ej=0;dj=0;nca=["server_prefetched_vast","vmap"];gca=[900,60,"waiting"];jca=[500,99,"waiting"];hca=[300,60,"waiting"];ica=[400,99,"waiting"];pj=[300,101,"done"];window.yt=window.yt||{};g.p("yt.setConfig",g.Qb,void 0);g.p("yt.pushConfigArray",Rb,void 0);g.p("yt.getConfig",g.y,void 0);g.p("yt.config.set",g.Qb,void 0);g.p("yt.config.pushArray",Rb,void 0);g.p("yt.config.get",g.y,void 0);g.p("yt.hasMsg",g.Ic,void 0);g.p("yt.setMsg",Jc,void 0);g.p("yt.setGoogMsg",Kc,void 0);g.p("yt.msgs.has",g.Ic,void 0);g.p("yt.msgs.set",Jc,void 0);g.p("yt.msgs.setGoog",Kc,void 0);g.p("yt.pubsub.publish",g.F,void 0);g.p("yt.pubsub.subscribe",g.Of,void 0);
g.p("ytcsi.tick",g.Nh,void 0);g.v(vj,g.ng);
vj.prototype.enable=function(){window.onload=dca;window.onunload=eca;window.onerror=Eaa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",aj),window.addEventListener("spfhistory",bj),window.addEventListener("spfrequest",gj),window.addEventListener("spfpartprocess",kj),window.addEventListener("spfpartdone",lj),window.addEventListener("spfprocess",mj),window.addEventListener("spfdone",qj),window.addEventListener("spferror",rj),window.addEventListener("spfreload",
sj),window.addEventListener("spfjsbeforeunload",wj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",lca),this.subscribe("dispose",mca)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
vj.prototype.init=function(){vj.N.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1,b,c;!a&&g.y("PAGEFRAME_JS")?(b=g.y("PAGEFRAME_JS",void 0),c=function(){window.ytPageFrameLoaded=!0;g.r("ytbin.www.pageframe.setup")()}):a&&(a=g.r("yt.www.masthead.loadSearchbox"))&&a();
var a=g.y("JS_COMMON_MODULE"),d=g.y("JS_PAGE_MODULES");d||(d=[a]);a=g.y("JS_DELAY_LOAD",0);0<a?(g.id(this.D),this.D=g.kd(function(){b&&g.qg(b,c);window.spf.script.require(d)},a)):(b&&g.qg(b,c),window.spf.script.require(d));
fca();Zh();Fba();ei(!0);g.Mh(!1);g.y("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&"https:"==window.location.protocol&&(g.Gc("service_worker_enabled")?Eba():Cba())};
vj.prototype.dispose=function(){g.id(this.D);var a=g.r("ytbin.www.pageframe.cancelSetup");a&&a();g.hd(Vi);if(a=g.Xi())a.removeEventListener("onReady",Wi),a.removeEventListener("onStateChange",Wi);ei(!1);(a=jh())&&g.Lg(a);vj.N.dispose.call(this)};
vj.prototype.disable=function(){vj.N.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",aj),window.removeEventListener("spfhistory",bj),window.removeEventListener("spfrequest",gj),window.removeEventListener("spfpartprocess",kj),window.removeEventListener("spfpartdone",lj),window.removeEventListener("spfprocess",mj),window.removeEventListener("spfdone",qj),window.removeEventListener("spferror",rj),window.removeEventListener("spfreload",sj),window.removeEventListener("spfjsbeforeunload",
wj));window.onload=null;window.onunload=null;window.onerror=null};
g.Og(new vj);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:03:23 Apr 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:26:32 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 137.408
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.067
  cdx.remote: 0.06
  esindex: 0.01
  LoadShardBlock: 93.768 (3)
  PetaboxLoader3.datanode: 124.849 (5)
  load_resource: 340.189 (2)
  PetaboxLoader3.resolve: 222.722 (2)
*/