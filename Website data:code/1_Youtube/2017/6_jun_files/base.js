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

var _yt_www={};(function(g){var window=this;var da,aaa,ha,ga,caa,ja,eaa,faa,za,gaa,Aa,haa,iaa,Ba,Da,laa,Ea,maa,Oa,uaa,$a,vaa,eb,cb,fb,Aaa,Daa,Baa,hb,jb,Haa,kb,ob,Iaa,pb,Jaa,Kaa,ub,tb,rb,Tb,Maa,Xb,Oaa,ec,ic,gc,Paa,oc,vc,uc,Qaa,yc,zc,Ac,Cc,Raa,Dc,Ec,Jc,Saa,Kc,Qc,Sc,Taa,Xc,ad,Vc,Tc,Vaa,$c,Yc,Zc,cd,Uaa,Zaa,$aa,Yaa,Zd,aba,ce,fe,ge,cba,qe,re,se,dba,Ae,Oe,Re,eba,Te,bf,lf,sf,Df,Ef,Ff,Gf,Of,Pf,mba,nba,oba,pba,cg,ag,$f,rba,mg,yg,Cg,Dg,Eg,sba,tba,Lg,Kg,uba,Wg,vba,ch,dh,mh,oh,nh,yba,zba,ph,qh,vh,wh,Dh,Ch,Gh,Hh,Jh,Bba,Lh,Ph,Fba,yh,Fh,Oh,Th,Iba,Jba,Nh,Xh,
Rh,xh,Eh,Qh,Yh,th,Kh,uh,Dba,ai,ci,di,ei,hi,gi,ji,fi,ki,Zh,bi,Pba,li,ni,mi,Qba,ti,ui,si,Rba,Sba,Tba,Di,Uba,Vba,Wba,Xba,Yba,Zba,$ba,Mi,Oi,Qi,Ui,aca,Vi,Xi,bca,cca,Yi,Zi,dj,hj,ij,jj,nj,oj,pj,ica,jca,ej,gj,cj,hca,fj,sj,tj,lca,uj,vj,wj,mca,nca,xj,yj,zj,Aj,oca,pca,qca,sca,uca,tca,rca,Fj,Gj,Hj,fa,ea,baa,xa,daa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
g.ca=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]};
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
g.la=function(a){return void 0!==a};
g.ma=function(a){return"string"==typeof a};
g.oa=function(a){return"number"==typeof a};
g.n=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.la(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.q=function(a,b){for(var c=a.split("."),d=b||g.m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d};
g.pa=function(){};
g.qa=function(a){a.Ac=void 0;a.getInstance=function(){return a.Ac?a.Ac:a.Ac=new a}};
g.ra=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.sa=function(a){return"array"==g.ra(a)};
g.ta=function(a){var b=g.ra(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.ua=function(a){return"function"==g.ra(a)};
g.va=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.ya=function(a){return a[xa]||(a[xa]=++daa)};
eaa=function(a,b,c){return a.call.apply(a.bind,arguments)};
faa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.r=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.r=eaa:g.r=faa;return g.r.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.lW=function(a,c,h){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
za=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
gaa=function(){};
Aa=function(a,b,c){return a[b]=a[b]||c};
haa=function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1};
iaa=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b};
Ba=function(){var a;if((a=Object.create)&&jaa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a};
Da=function(){var a=kaa.href;if(Ca.dpo)var b=Ca.h;else{b=Ca.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=(0,window.decodeURIComponent)(a[2])}catch(e){}}return b};
laa=function(a){var b=Aa(Ca,"PQ",[]);Ca.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},h=0;h<c;h++)b[h](e)};
Ea=function(a){return Aa(Aa(Ca,"H",Ba()),a,Ba())};
maa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=t=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],h=e[2],l=e[3],p=e[4],t,w,c=0;80>c;c++)40>c?20>c?(t=l^d&(h^l),w=1518500249):(t=d^h^l,w=1859775393):60>c?(t=d&h|l&(d|h),w=2400959708):(t=d^h^l,w=3395469782),t=((a<<5|a>>>27)&4294967295)+t+p+w+b[c]&4294967295,p=l,l=h,h=(d<<30|d>>>2)&4294967295,d=a,a=t;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+h&4294967295;
e[3]=e[3]+l&4294967295;e[4]=e[4]+p&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==t)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(h[t++]=a[d++],w++,64==t)for(t=0,b(h);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>t?c(l,56-t):c(l,64-(t-56));for(var k=63;56<=k;k--)h[k]=d&255,d>>>=8;b(h);for(k=d=0;5>k;k++)for(var p=24;0<=p;p-=8)a[d++]=e[k]>>p&255;return a}
for(var e=[],h=[],k=[],l=[128],p=1;64>p;++p)l[p]=0;var t,w;a();return{reset:a,update:c,digest:d,mw:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
g.Fa=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Fa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ga=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Ha=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Ia=function(a){return/^[\s\xa0]*$/.test(a)};
g.Ja=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Ka=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.La=function(a){if(!naa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(oaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(paa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(raa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(saa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(taa,"&#0;"));return a};
g.Ma=function(a){return null==a?"":String(a)};
g.Pa=function(a,b){for(var c=0,d=(0,g.Na)(String(a)).split("."),e=(0,g.Na)(String(b)).split("."),h=Math.max(d.length,e.length),k=0;0==c&&k<h;k++){var l=d[k]||"",p=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];p=/(\d*)(\D*)(.*)/.exec(p)||["","","",""];if(0==l[0].length&&0==p[0].length)break;c=Oa(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==p[1].length?0:(0,window.parseInt)(p[1],10))||Oa(0==l[2].length,0==p[2].length)||Oa(l[2],p[2]);l=l[3];p=p[3]}while(0==c)}return c};
Oa=function(a,b){return a<b?-1:a>b?1:0};
g.Qa=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.Sa=function(a,b,c){b=g.Ra(a,b,c);return 0>b?null:g.ma(a)?a.charAt(b):a[b]};
g.Ra=function(a,b,c){for(var d=a.length,e=g.ma(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return h;return-1};
g.Ua=function(a,b){return 0<=(0,g.Ta)(a,b)};
g.Va=function(a){return 0==a.length};
g.Xa=function(a,b){var c=(0,g.Ta)(a,b),d;(d=0<=c)&&g.Wa(a,c);return d};
g.Wa=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Ya=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Za=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.ta(d)){var e=a.length||0,h=d.length||0;a.length=e+h;for(var k=0;k<h;k++)a[e+k]=d[k]}else a.push(d)}};
uaa=function(a,b,c){var d=[],e=[];if(1==(g.sa(c)?2:1))return e=[b,a],(0,g.x)(d,function(a){e.push(a)}),$a(e.join(" "));
var h=[],k=[];(0,g.x)(c,function(a){k.push(a.key);h.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Va(h)?[c,b,a]:[h.join(":"),c,b,a];(0,g.x)(d,function(a){e.push(a)});
a=$a(e.join(" "));a=[c,a];g.Va(k)||a.push(k.join(""));return a.join("_")};
$a=function(a){var b=maa();b.update(a);return b.mw().toLowerCase()};
g.ab=function(a){this.C=a||{cookie:""}};
g.bb=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,h=0;h<a.length;h++)e=(0,g.Na)(a[h]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
vaa=function(){var a=[],b=za(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.ab(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.ab(window.document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(g.m.location.href);return d&&b&&c?[c,uaa(za(d),b,a||null)].join(" "):null}return null};
eb=function(a,b,c){b&&0<b.length&&(b=cb(b),c&&0<c.length&&(b+="___"+cb(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=Aa(waa,"_p",Ba()),Aa(b,c,Ba())[a]=(new Date).getTime(),b=db.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))};
cb=function(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")};
fb=function(a){throw Error("Bad hint"+(a?": "+a:""));};
Aaa=function(a,b,c,d){var e=a.split(";"),h=e.shift(),k=gb[h],l=null;k?l=k(e,b,c,d):fb("no hint processor for: "+h);l||fb("failed to generate load url");b=l;c=b.match(xaa);(d=b.match(yaa))&&1===d.length&&zaa.test(b)&&c&&1===c.length||fb("failed sanity: "+a);return l};
Daa=function(a,b,c,d){function e(a){return(0,window.encodeURIComponent)(a).replace(/%2C/g,",")}
a=Baa(a);Caa.test(c)||fb("invalid_callback");b=hb(b);d=d&&d.length?hb(d):null;return[(0,window.encodeURIComponent)(a.jJ).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.vn?"/am="+e(a.vn):"",a.Ms?"/rs="+e(a.Ms):"",a.Fu?"/t="+e(a.Fu):"","/cb=",e(c)].join("")};
Baa=function(a){"/"!==a.charAt(0)&&fb("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))fb("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var h=b[d].split("="),k=(0,window.decodeURIComponent)(h[0]),l=(0,window.decodeURIComponent)(h[1]);2==h.length&&k&&l&&(a[k]=a[k]||l)}b="/"+c.join("/");Eaa.test(b)||fb("invalid_prefix");c=0;for(d=ib.length;c<d;++c)ib[c].test(b)&&
fb("invalid_prefix");c=jb(a,"k",!0);d=jb(a,"am");e=jb(a,"rs");a=jb(a,"t");return{jJ:b,version:c,vn:d,Ms:e,Fu:a}};
hb=function(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Faa.test(e)&&b.push(e)}return b.join(",")};
jb=function(a,b,c){a=a[b];!a&&c&&fb("missing: "+b);if(a){if(Gaa.test(a))return a;fb("invalid: "+b)}return null};
Haa=function(){var a=Da();if(!a)throw Error("Bad hint");return a};
kb=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>haa.call(b,e)&&c.push(e)}return c};
ob=function(){var a=Ca.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(lb)?a:Ca.nonce=null;var b=Aa(Ca,"us",[]);if(!b||!b.length)return Ca.nonce=null;for(var c=mb.getElementsByTagName(nb),d=0,e=c.length;d<e;++d){var h=c[d];if(h.src&&(a=String(h.nonce||h.getAttribute("nonce")||"")||null)){for(var k=0,l=b.length;k<l&&b[k]!==h.src;++k);if(k!==l&&a&&a===String(a)&&a.match(lb))return Ca.nonce=a}}return null};
Iaa=function(a){if("loading"!=mb.readyState)pb(a);else{var b=ob(),c="";null!==b&&(c=' nonce="'+b+'"');mb.write("<"+nb+' src="'+(0,window.encodeURI)(a)+'"'+c+"></"+nb+">")}};
pb=function(a){var b=mb.createElement(nb);b.setAttribute("src",a);a=ob();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=mb.getElementsByTagName(nb)[0])?a.parentNode.insertBefore(b,a):(mb.head||mb.body||mb.documentElement).appendChild(b)};
Jaa=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<qb.length;d++){var e=qb[d][0],h=qb[d][1];h&&Object.prototype.hasOwnProperty.call(c,e)&&h(c[e],a,b)}};
Kaa=function(a,b,c){rb(function(){var c=b===Da()?Aa(sb,"_",Ba()):Ba();c=Aa(Ea(b),"_",c);a(c)},c)};
ub=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Jaa(a,c);var d=a?a.split(":"):[],e=c.h||Haa(),h=Aa(Ca,"ah",Ba());if(h["::"]&&d.length){for(var k=[],l=null;l=d.shift();){var p=l.split("."),p=h[l]||h[p[1]&&"ns:"+p[0]||""]||e,t=k.length&&k[k.length-1]||null,w=t;t&&t.hint==p||(w={hint:p,features:[]},k.push(w));w.features.push(l)}var E=k.length;if(1<E){var M=c.callback;M&&(c.callback=function(){0==--E&&M()})}for(;d=k.shift();)tb(d.features,c,d.hint)}else tb(d||[],c,e)};
tb=function(a,b,c){function d(a,b){if(E)return 0;vb.clearTimeout(w);M.push.apply(M,X);var d=((sb||{}).config||{}).update;d?d(h):h&&Aa(Ca,"cu",[]).push(h);if(b){eb("me0",a,U);try{Kaa(b,c,t)}finally{eb("me1",a,U)}}return 1}
a=iaa(a)||[];var e=b.callback,h=b.config,k=b.timeout,l=b.ontimeout,p=b.onerror,t=void 0;"function"==typeof p&&(t=p);var w=null,E=!1;if(k&&!l||!k&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var p=Aa(Ea(c),"r",[]).sort(),M=Aa(Ea(c),"L",[]).sort(),U=[].concat(p);0<k&&(w=vb.setTimeout(function(){E=!0;l()},k));
var X=kb(a,M);if(X.length){var X=kb(a,p),ka=Aa(Ca,"CP",[]),wa=ka.length;ka[wa]=function(a){function b(){var a=ka[wa+1];a&&a()}
function c(b){ka[wa]=null;d(X,a)&&laa(function(){e&&e();b()})}
if(!a)return 0;eb("ml1",X,U);0<wa&&ka[wa-1]?ka[wa]=function(){c(b)}:c(b)};
if(X.length){var Jb="loaded_"+Ca.I++;sb[Jb]=function(a){ka[wa](a);sb[Jb]=null};
a=Aaa(c,X,"gapi."+Jb,p);p.push.apply(p,X);eb("ml0",X,U);b.sync||vb.___gapisync?Iaa(a):pb(a)}else ka[wa](gaa)}else d(X)&&e&&e()};
rb=function(a,b){if(Ca.hee&&0<Ca.hel)try{return a()}catch(c){b&&b(c),Ca.hel--,ub("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}};
g.wb=function(){this.jc=this.jc;this.Cb=this.Cb};
g.Ab=function(a,b){g.yb(a,g.u(g.zb,b))};
g.yb=function(a,b){a.jc?g.la(void 0)?b.call(void 0):b():(a.Cb||(a.Cb=[]),a.Cb.push(g.la(void 0)?(0,g.r)(b,void 0):b))};
g.zb=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Bb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1;this.Os=!0};
g.Db=function(a){return-1!=g.Cb.indexOf(a)};
g.Eb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Fb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Gb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.Hb=function(a,b){return null!==a&&b in a};
g.Ib=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.Kb=function(a){for(var b in a)return!1;return!0};
g.Lb=function(a,b){b in a&&delete a[b]};
g.Mb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.Nb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.Pb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var h=0;h<Ob.length;h++)c=Ob[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.Qb=function(){return g.Db("Trident")||g.Db("MSIE")};
g.Sb=function(){return g.Db("Safari")&&!(g.Rb()||g.Db("Coast")||g.Db("Opera")||g.Db("Edge")||g.Db("Silk")||g.Db("Android"))};
g.Rb=function(){return(g.Db("Chrome")||g.Db("CriOS"))&&!g.Db("Edge")};
Tb=function(){return g.Db("iPhone")&&!g.Db("iPod")&&!g.Db("iPad")};
g.Ub=function(){return Tb()||g.Db("iPad")||g.Db("iPod")};
g.Vb=function(a){g.Vb[" "](a);return a};
g.Wb=function(a,b){try{return g.Vb(a[b]),!0}catch(c){}return!1};
Maa=function(a,b){var c=Laa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Xb=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.Zb=function(a){return Maa(a,function(){return 0<=g.Pa(g.Yb,a)})};
g.ac=function(a){return Number(g.$b)>=a};
g.bc=function(a,b){g.Bb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.K=!1;this.xc=null;a&&this.init(a,b)};
g.dc=function(a){return!(!a||!a[cc])};
Oaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.hh=e;this.key=++Naa;this.wg=this.Xh=!1};
ec=function(a){a.wg=!0;a.listener=null;a.C=null;a.src=null;a.hh=null};
g.fc=function(a){this.src=a;this.listeners={};this.C=0};
g.hc=function(a,b,c,d,e,h){var k=b.toString();b=a.listeners[k];b||(b=a.listeners[k]=[],a.C++);var l=gc(b,c,e,h);-1<l?(a=b[l],d||(a.Xh=!1)):(a=new Oaa(c,a.src,k,!!e,h),a.Xh=d,b.push(a));return a};
ic=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Xa(a.listeners[c],b);d&&(ec(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
gc=function(a,b,c,d){for(var e=0;e<a.length;++e){var h=a[e];if(!h.wg&&h.listener==b&&h.capture==!!c&&h.hh==d)return e}return-1};
g.jc=function(a,b,c,d,e){if(g.sa(b)){for(var h=0;h<b.length;h++)g.jc(a,b[h],c,d,e);return null}c=g.kc(c);return g.dc(a)?a.R(b,c,d,e):g.lc(a,b,c,!1,d,e)};
g.lc=function(a,b,c,d,e,h){if(!b)throw Error("Invalid event type");var k=!!e,l=g.mc(a);l||(a[nc]=l=new g.fc(a));c=g.hc(l,b,c,d,e,h);if(c.C)return c;d=Paa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,k);else if(a.attachEvent)a.attachEvent(oc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");pc++;return c};
Paa=function(){var a=Qaa,b=qc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.rc=function(a,b,c,d,e){if(g.sa(b))for(var h=0;h<b.length;h++)g.rc(a,b[h],c,d,e);else c=g.kc(c),g.dc(a)?a.Wa(b,c,d,e):a&&(a=g.mc(a))&&(b=a.kf(b,c,!!d,e))&&g.sc(b)};
g.sc=function(a){if(g.oa(a)||!a||a.wg)return!1;var b=a.src;if(g.dc(b))return ic(b.wd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(oc(c),d);pc--;(c=g.mc(b))?(ic(c,a),0==c.C&&(c.src=null,b[nc]=null)):ec(a);return!0};
oc=function(a){return a in tc?tc[a]:tc[a]="on"+a};
vc=function(a,b,c,d){var e=!0;if(a=g.mc(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var h=b[a];h&&h.capture==c&&!h.wg&&(h=uc(h,d),e=e&&!1!==h)}return e};
uc=function(a,b){var c=a.listener,d=a.hh||a.src;a.Xh&&g.sc(a);return c.call(d,b)};
Qaa=function(a,b){if(a.wg)return!0;if(!qc){var c=b||g.q("window.event"),d=new g.bc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var h=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(p){h=!0}if(h||void 0==c.returnValue)c.returnValue=!0}c=[];for(h=d.currentTarget;h;h=h.parentNode)c.push(h);for(var k=a.type,l=c.length-1;!d.F&&0<=l;l--)d.currentTarget=c[l],h=vc(c[l],k,!0,d),e=e&&h;for(l=0;!d.F&&l<c.length;l++)d.currentTarget=c[l],h=vc(c[l],k,!1,d),e=e&&h}return e}return uc(a,new g.bc(b,
this))};
g.mc=function(a){a=a[nc];return a instanceof g.fc?a:null};
g.kc=function(a){if(g.ua(a))return a;a[wc]||(a[wc]=function(b){return a.handleEvent(b)});
return a[wc]};
g.xc=function(){g.wb.call(this);this.wd=new g.fc(this);this.xv=this;this.Yl=null};
yc=function(a,b,c,d){b=a.wd.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,h=0;h<b.length;++h){var k=b[h];if(k&&!k.wg&&k.capture==c){var l=k.listener,p=k.hh||k.src;k.Xh&&ic(a.wd,k);e=!1!==l.call(p,d)&&e}}return e&&0!=d.Os};
zc=function(a,b,c){this.H=c;this.D=a;this.G=b;this.F=0;this.C=null};
Ac=function(a,b){a.G(b);a.F<a.H&&(a.F++,b.next=a.C,a.C=b)};
g.Bc=function(a){return function(){return a}};
Cc=function(a){g.m.setTimeout(function(){throw a;},0)};
Raa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Db("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=(0,g.r)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.Qb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.la(c.next)){c=c.next;var a=c.Jn;c.Jn=null;a()}};
return function(a){d.next={Jn:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
Dc=function(){this.F=this.C=null};
Ec=function(){this.next=this.scope=this.mc=null};
Jc=function(a,b){Fc||Saa();Gc||(Fc(),Gc=!0);var c=Hc,d=Ic.get();d.set(a,b);c.F?c.F.next=d:c.C=d;c.F=d};
Saa=function(){if(-1!=String(g.m.Promise).indexOf("[native code]")){var a=g.m.Promise.resolve(void 0);Fc=function(){a.then(Kc)}}else Fc=function(){var a=Kc;
!g.ua(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.Db("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(Lc||(Lc=Raa()),Lc(a)):g.m.setImmediate(a)}};
Kc=function(){for(var a;a=Hc.remove();){try{a.mc.call(a.scope)}catch(b){Cc(b)}Ac(Ic,a)}Gc=!1};
g.Mc=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.Nc=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Pc=function(a,b){this.C=0;this.O=void 0;this.G=this.F=this.D=null;this.H=this.K=!1;if(a!=g.pa)try{var c=this;a.call(b,function(a){g.Oc(c,2,a)},function(a){g.Oc(c,3,a)})}catch(d){g.Oc(this,3,d)}};
Qc=function(){this.next=this.context=this.F=this.D=this.C=null;this.G=!1};
Sc=function(a,b,c){var d=Rc.get();d.D=a;d.F=b;d.context=c;return d};
Taa=function(a,b,c){Tc(a,b,c,null)||Jc(g.u(b,a))};
g.Uc=function(a){return new g.Pc(function(b,c){var d=a.length,e=[];if(d)for(var h=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],Taa(p,g.u(h,l),k);
else b(e)})};
g.Wc=function(a,b){return Vc(a,null,b,void 0)};
Xc=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,h=null,k=c.F;k&&(k.G||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(h=k);e&&(0==c.C&&1==d?Xc(c,b):(h?(d=h,d.next==c.G&&(c.G=d),d.next=d.next.next):Yc(c),Zc(c,e,3,b)))}a.D=null}else g.Oc(a,3,b)};
ad=function(a,b){a.F||2!=a.C&&3!=a.C||$c(a);a.G?a.G.next=b:a.F=b;a.G=b};
Vc=function(a,b,c,d){var e=Sc(null,null,null);e.C=new g.Pc(function(a,k){e.D=b?function(c){try{var e=b.call(d,c);a(e)}catch(t){k(t)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.la(e)&&b instanceof g.bd?k(b):a(e)}catch(t){k(t)}}:k});
e.C.D=a;ad(a,e);return e.C};
g.Oc=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Tc(c,a.W,a.N,a)||(a.O=c,a.C=b,a.D=null,$c(a),3!=b||c instanceof g.bd||Uaa(a,c)))};
Tc=function(a,b,c,d){if(a instanceof g.Pc)return ad(a,Sc(b||g.pa,c||null,d)),!0;if(g.Nc(a))return a.then(b,c,d),!0;if(g.va(a))try{var e=a.then;if(g.ua(e))return Vaa(a,e,b,c,d),!0}catch(h){return c.call(d,h),!0}return!1};
Vaa=function(a,b,c,d,e){function h(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,h)}catch(p){h(p)}};
$c=function(a){a.K||(a.K=!0,Jc(a.J,a))};
Yc=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Zc=function(a,b,c,d){if(3==c&&b.F&&!b.G)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,cd(b,c,d);else try{b.G?b.D.call(b.context):cd(b,c,d)}catch(e){dd.call(null,e)}Ac(Rc,b)};
cd=function(a,b,c){2==b?a.D.call(a.context,c):a.F&&a.F.call(a.context,c)};
Uaa=function(a,b){a.H=!0;Jc(function(){a.H&&dd.call(null,b)})};
g.bd=function(a){g.Fa.call(this,a)};
g.ed=function(a,b,c){if(g.ua(a))c&&(a=(0,g.r)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.r)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.fd=function(a){g.m.clearTimeout(a)};
g.gd=function(a,b,c){g.wb.call(this);this.C=a;this.D=b||0;this.F=c;this.wc=(0,g.r)(this.Jk,this)};
g.hd=function(a){var b=g.q("window.location.href");if(g.ma(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(h){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.id=function(a){if(a.classList)return a.classList;a=a.className;return g.ma(a)&&a.match(/\S+/g)||[]};
g.y=function(a,b){return a.classList?a.classList.contains(b):g.Ua(g.id(a),b)};
g.kd=function(){this.C="";this.F=g.jd};
g.ld=function(a){var b=new g.kd;b.C=a;return b};
g.nd=function(){this.C="";this.F=g.md};
g.od=function(a){var b=new g.nd;b.C=a;return b};
g.qd=function(){this.C="";this.F=pd};
g.rd=function(a){if(a instanceof g.qd&&a.constructor===g.qd&&a.F===pd)return a.C;g.ra(a);return"type_error:SafeUrl"};
g.td=function(a){if(a instanceof g.qd)return a;a=a.Je?a.ce():String(a);Waa.test(a)||(a="about:invalid#zClosurez");return g.sd(a)};
g.sd=function(a){var b=new g.qd;b.C=a;return b};
g.vd=function(){this.C="";this.D=g.ud;this.F=null};
g.wd=function(a,b){var c=new g.vd;c.C=a;c.F=b;return c};
g.xd=function(a,b){var c=b instanceof g.qd?b:g.td(b);a.href=g.rd(c)};
g.yd=function(a,b){var c=b instanceof g.qd?b:g.td(b);a.href=g.rd(c)};
g.Ad=function(a,b){return g.wd(b,null)};
g.Bd=function(a,b){this.x=g.la(a)?a:0;this.y=g.la(b)?b:0};
g.Cd=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Dd=function(a,b){this.width=a;this.height=b};
g.z=function(a){return g.ma(a)?window.document.getElementById(a):a};
g.Ed=function(a){var b=window.document;return g.ma(a)?b.getElementById(a):a};
g.Gd=function(a,b){g.Eb(b,function(b,d){b&&b.Je&&(b=b.ce());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Fd.hasOwnProperty(d)?a.setAttribute(Fd[d],b):g.Ga(d,"aria-")||g.Ga(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.Id=function(a){return g.Hd(a||window)};
g.Hd=function(a){a=a.document;a=g.Jd(a)?a.documentElement:a.body;return new g.Dd(a.clientWidth,a.clientHeight)};
g.Ld=function(a){var b=g.Kd(a);a=a.parentWindow||a.defaultView;return g.A&&g.Zb("10")&&a.pageYOffset!=b.scrollTop?new g.Bd(b.scrollLeft,b.scrollTop):new g.Bd(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
g.Kd=function(a){return a.scrollingElement?a.scrollingElement:!g.Md&&g.Jd(a)?a.documentElement:a.body||a.documentElement};
g.Od=function(a,b,c){return g.Nd(window.document,arguments)};
g.Nd=function(a,b){var c=String(b[0]),d=b[1];if(!Xaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.La(d.name),'"');if(d.type){c.push(' type="',g.La(d.type),'"');var e={};g.Pb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ma(d)?c.className=d:g.sa(d)?c.className=d.join(" "):g.Gd(c,d));2<b.length&&g.Qd(a,c,b,2);return c};
g.Qd=function(a,b,c,d){function e(c){c&&b.appendChild(g.ma(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var h=c[d];!g.ta(h)||g.va(h)&&0<h.nodeType?e(h):(0,g.x)(Yaa(h)?g.Ya(h):h,e)}};
g.Rd=function(a){return window.document.createElement(String(a))};
g.Jd=function(a){return"CSS1Compat"==a.compatMode};
g.Sd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.Td=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b)};
g.Ud=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};
Zaa=function(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null};
$aa=function(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a};
g.Vd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
Yaa=function(a){if(a&&"number"==typeof a.length){if(g.va(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.ua(a))return"function"==typeof a.item}return!1};
g.Wd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.Xd=function(){};
Zd=function(a){if(a instanceof g.Xd)return a;if("function"==typeof a.dd)return a.dd(!1);if(g.ta(a)){var b=0,c=new g.Xd;c.next=function(){for(;;){if(b>=a.length)throw g.Yd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.$d=function(a,b,c){if(g.ta(a))try{(0,g.x)(a,b,c)}catch(d){if(d!==g.Yd)throw d;}else{a=Zd(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Yd)throw d;}}};
aba=function(a){if(g.ta(a))return g.Ya(a);a=Zd(a);var b=[];g.$d(a,function(a){b.push(a)});
return b};
g.ae=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};
g.be=function(a){a=String(a);if(g.ae(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};
g.de=function(a){return(new ce(void 0)).Gj(a)};
ce=function(a){this.C=a};
fe=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.sa(b)){var d=b;b=d.length;c.push("[");for(var e="",h=0;h<b;h++)c.push(e),e=d[h],fe(a,a.C?a.C.call(d,String(h),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");h="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(h),ge(d,c),c.push(":"),fe(a,a.C?a.C.call(b,d,e):e,c),h=","));c.push("}");return}}switch(typeof b){case "string":ge(b,
c);break;case "number":c.push((0,window.isFinite)(b)&&!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
ge=function(a,b){b.push('"',a.replace(bba,function(a){var b=he[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),he[a]=b);return b}),'"')};
g.ie=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
g.je=function(a,b){return a&&b?b instanceof g.ie?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1};
g.ke=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.le=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),h=Math.min(a.top+a.height,b.top+b.height);if(e<=h)return a.left=c,a.top=e,a.width=d-c,a.height=h-e,!0}return!1};
g.me=function(a){return new g.Dd(a.width,a.height)};
g.ne=function(a){g.wb.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.K=!!a};
g.oe=function(a,b,c,d){if(b=a.F[b]){var e=a.C;if(b=g.Sa(b,function(a){return e[a+1]==c&&e[a+2]==d}))return a.qd(b)}return!1};
cba=function(a,b,c){Jc(function(){a.apply(b,c)})};
g.pe=function(a){this.C=a};
qe=function(a){this.C=a};
re=function(a){this.data=a};
se=function(a){return!g.la(a)||a instanceof re?a:new re(a)};
g.te=function(a){this.C=a};
g.ve=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.ue)()||!!b&&b>(0,g.ue)()};
g.we=function(a){this.C=a};
dba=function(){};
g.xe=function(){};
g.ye=function(a){this.C=a};
g.ze=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
Ae=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.C=a};
g.Be=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Ce=function(a,b){a.style.height=g.Be(b,!0)};
g.De=function(a,b){a.style.width=g.Be(b,!0)};
g.Ee=function(a,b,c,d,e,h,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);h&&(l+="?"+h);k&&(l+="#"+k);return l};
g.Fe=function(a){return a?(0,window.decodeURI)(a):a};
g.He=function(a,b){return b.match(g.Ge)[a]||null};
g.Ie=function(a){return g.Fe(g.He(3,a))};
g.Je=function(a){a=a.match(g.Ge);return g.Ee(null,null,null,null,a[5],a[6],a[7])};
g.Ke=function(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.Le=function(a,b,c){if(g.sa(b))for(var d=0;d<b.length;d++)g.Le(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.Ja(b)))};
g.Me=function(a){var b=[],c;for(c in a)g.Le(c,a[c],b);return b.join("&")};
g.Ne=function(a,b){var c=g.Me(b);return g.Ke(a,c)};
Oe=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.Qe=function(a){Oe(g.Pe,arguments)};
g.B=function(a,b){return a in g.Pe?g.Pe[a]:b};
Re=function(a,b){var c=g.B(a,void 0);c?c.push(b):g.Qe(a,[b])};
g.Se=function(a,b,c,d,e){var h=g.q("yt.logging.errors.log");h?h(a,b,c,d,e):(h=g.B("ERRORS",[]),h.push([a,b,c,d,e]),g.Qe("ERRORS",h))};
eba=function(a,b,c,d,e){var h=!1,k=g.Pe.EXPERIMENT_FLAGS;if((k=k?k.log_window_onerror_fraction:void 0)&&Math.random()<k)h=!0;else for(var k=window.document.getElementsByTagName("script"),l=0,p=k.length;l<p;l++)if(0<k[l].src.indexOf("/debug-")){h=!0;break}h&&(e||(g.ma(a)||(window.ErrorEvent&&a instanceof window.ErrorEvent&&(d=a.colno),a="Unknown error",b="Unknown file",c=0),e=Error(),e.message=a,e.fileName=b,e.lineNumber=c,(0,window.isNaN)(d)||(e.columnNumber=d)),g.Se(e))};
Te=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Se(b)}}:a};
g.Ue=function(a){return g.B("EXPERIMENT_FLAGS",{})[a]};
g.Ve=function(a){return!!g.Ue(a)};
g.C=function(a,b){return a?a.dataset?a.dataset[g.We(b)]:a.getAttribute("data-"+b):null};
g.We=function(a){return Xe[a]||(Xe[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Ye=function(a){window.clearInterval(a)};
g.Ze=function(a){window.clearTimeout(a)};
g.$e=function(a,b){g.ua(a)&&(a=Te(a));return window.setInterval(a,b)};
g.af=function(a,b){g.ua(a)&&(a=Te(a));return window.setTimeout(a,b)};
g.D=function(a,b,c){var d=bf();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){cf[e]&&b.apply(c||window,d)};
try{df[a]?k():g.af(k,0)}catch(l){g.Se(l)}},c);
cf[e]=!0;ef[a]||(ef[a]=[]);ef[a].push(e);return e}return 0};
g.ff=function(a){var b=bf();b&&(g.oa(a)?a=[a]:g.ma(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.x)(a,function(a){b.unsubscribeByKey(a);delete cf[a]}))};
bf=function(){return g.q("ytPubsubPubsubInstance")};
g.F=function(a,b){var c=bf();return c?c.publish.apply(c,arguments):!1};
g.gf=function(a,b){df[a]=!0;var c=bf(),c=c?c.publish.apply(c,arguments):!1;df[a]=!1;return c};
g.hf=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(fba,""),b=b.replace(gba,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.jf=function(a,b){var c=g.hf(a);window.spf.script.load(a,c,b)};
lf=function(){return null!=g.kf};
g.mf=function(){return g.kf?g.kf.invoke():null};
g.nf=function(){return!!g.q("yt.scheduler.instance")};
g.of=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.q("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.af(a,c||0)};
g.pf=function(a,b){return g.of(a,1,b)};
g.qf=function(a){if(!(0,window.isNaN)(a)){var b=g.q("yt.scheduler.instance.cancelJob");b?b(a):g.Ze(a)}};
g.rf=function(a){for(var b=0,c=a.length;b<c;b++)g.qf(a[b])};
sf=function(){return(0,window.parseInt)(g.B("DCLKSTAT",0),10)};
g.tf=function(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?(0,g.x)(a.childNodes,function(a){b.appendChild(g.tf(a))}):b.innerHTML=a.innerHTML;
return b};
g.uf=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=hba+"VisibilityState";if(b in a)return a[b]};
g.wf=function(a){var b=a.__yt_uid_key;b||(b=vf(),a.__yt_uid_key=b);return b};
g.xf=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in iba||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.C=a.pageX;this.F=a.pageY}};
g.zf=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Ib(yf,function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.G=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.zf(a,b,c,d);if(e)return e;var e=++Af.count+"",h=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=h?function(d){d=new g.xf(d);if(!g.Wd(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.xf(b);
b.currentTarget=a;return c.call(a,b)};
k=Te(k);a.addEventListener?("mouseenter"==b&&h?b="mouseover":"mouseleave"==b&&h?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);yf[e]=[a,b,c,k,d];return e};
g.H=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.x)(a,function(a){if(a in yf){var b=yf[a],d=b[0],e=b[1],h=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,h,b):d.detachEvent&&d.detachEvent("on"+e,h);delete yf[a]}}))};
g.Bf=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Cf=function(a){for(var b in yf)yf[b][0]==a&&g.H(b)};
Df=function(a){g.wb.call(this);this.C=[];this.F=a||this};
Ef=function(a,b,c,d){d=Te((0,g.r)(d,a.F));d={target:b,name:c,ze:d};b.addEventListener(c,d.ze,void 0);a.C.push(d)};
Ff=function(a){for(;a.C.length;){var b=a.C.pop();b.target.removeEventListener(b.name,b.ze)}};
Gf=function(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||g.Nb(jba);this.assets=a.assets||{};this.attrs=a.attrs||g.Nb(kba);this.params=a.params||g.Nb(lba);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Hf=function(a){a instanceof Gf||(a=new Gf(a));return a};
g.Jf=function(){this.C=this.minor=this.major=0;this.F="";var a=g.q("window.navigator.plugins"),b=g.q("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,h=c.length;e<h;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=(0,window.parseInt)(d[0],10)||0;d=(0,window.parseInt)(d[1],10)||0;e=0;if("r"==a.charAt(0)||
"d"==a.charAt(0))e=(0,window.parseInt)(a.substr(1),10)||0;a=[c,d,e]}else a=[0,0,0];this.F=b;b=a;this.major=b[0];this.minor=b[1];this.C=b[2];if(0>=this.major){if(g.If)try{var k=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(w){k=null}else{var l=window.document.body;var p=window.document.createElement("object");p.setAttribute("type","application/x-shockwave-flash");k=l.appendChild(p)}if(k&&"GetVariable"in k)try{var t=k.GetVariable("$version")}catch(w){t=""}l&&p&&l.removeChild(p);(k=
t||"")?(k=k.split(" ")[1].split(","),k=[(0,window.parseInt)(k[0],10)||0,(0,window.parseInt)(k[1],10)||0,(0,window.parseInt)(k[2],10)||0]):k=[0,0,0];this.major=k[0];this.minor=k[1];this.C=k[2]}};
g.Kf=function(a){return-1<a.F.indexOf("Gnash")&&-1==a.F.indexOf("AVM2")||9==a.major&&1==a.minor||9==a.major&&0==a.minor&&1==a.C?!1:9<=a.major};
g.Lf=function(a){return-1<window.navigator.userAgent.indexOf("Sony/COM2")&&!a.isSupported(9,1,58)?!1:!0};
g.Nf=function(a){return a in g.Mf};
Of=function(a){Oe(g.Mf,arguments)};
Pf=function(a){Oe(g.Mf,arguments)};
g.Qf=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var h=g.Ka(e[0]||""),e=g.Ka(e[1]||"");h in b?g.sa(b[h])?g.Za(b[h],e):b[h]=[b[h],e]:b[h]=e}}return b};
g.Rf=function(a,b,c){var d=a.split("#",2);a=d[0];var d=1<d.length?"#"+d[1]:"",e=a.split("?",2);a=e[0];var e=g.Qf(e[1]||""),h;for(h in b)if(c||!g.Hb(e,h))e[h]=b[h];return g.Ne(a,e)+d};
g.Sf=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),g.Qf(1<a.length?a[1]:a[0])):{}};
g.Tf=function(a,b){return g.Rf(a,b||{},!0)};
g.Uf=function(a,b,c){if(b){a=g.ma(a)?g.Ed(a):a;var d=g.Nb(c.attrs);d.tabindex=0;var e=g.Nb(c.params);e.flashvars=g.Me(c.args);if(g.If){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=window.document.createElement("object");for(var h in d)b.setAttribute(h,d[h]);for(var k in e)d=window.document.createElement("param"),d.setAttribute("name",k),d.setAttribute("value",e[k]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=window.document.createElement("embed");b.setAttribute("name",
d.id);for(var l in d)b.setAttribute(l,d[l]);for(var p in e)b.setAttribute(p,e[p])}e=window.document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}};
g.Vf=function(a,b){var c=b,c=void 0===c?{}:c;g.ua(c)&&(c={callback:c});c._c&&c._c.jsl&&c._c.jsl.h||g.Pb(c,{_c:{jsl:{h:g.B("GAPI_HINT_PARAMS",void 0)}}});b=c;(b.gapiHintOverride||g.B("GAPI_HINT_OVERRIDE"))&&(c=g.Sf(window.document.location.href).gapi_jsh)&&g.Pb(b,{_c:{jsl:{h:c}}});ub(a,b)};
g.Wf=function(a){return a&&"status"in a?a.status:-1};
mba=function(){if(!Xf)return null;var a=Xf();return"open"in a?a:null};
g.Yf=function(a){switch(g.Wf(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
nba=function(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=g.He(1,a),e=g.Ie(a);d&&e?(d=c,c=a.match(g.Ge),d=d.match(g.Ge),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.Ie(c)==e&&(Number(g.He(4,c))||null)==(Number(g.He(4,a))||null):!0;for(var h in Zf){if((e=d=g.B(Zf[h]))&&!(e=c)){var k=a,e=h,l=g.B("CORS_HEADER_WHITELIST")||{};e=(k=g.Ie(k))?(l=l[k])?g.Ua(l,e):!1:!0}e&&(b[h]=d)}return b};
oba=function(a,b){var c=g.B("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Ew&&(!g.Ie(a)||b.withCredentials||g.Ie(a)==window.document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.ka&&b.ka[c])};
g.I=function(a,b){var c=b.format||"JSON";b.tB&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var d=g.B("XSRF_FIELD_NAME",void 0),e=g.B("XSRF_TOKEN",void 0),h=b.Ba;h&&(h[d]&&delete h[d],a=g.Tf(a,h));var k=b.postBody||"",h=b.ka;oba(a,b)&&(h||(h={}),h[d]=e);h&&g.ma(k)&&(d=g.Qf(k),g.Pb(d,h),k=b.gs&&"JSON"==b.gs?JSON.stringify(d):g.Me(d));var l=!1,p,t=$f(a,function(a){if(!l){l=!0;p&&g.Ze(p);var d=g.Yf(a),
e=null;if(d||400<=a.status&&500>a.status)e=pba(c,a,b.sb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},h=b.context||g.m;d?b.Z&&b.Z.call(h,a,e):b.onError&&b.onError.call(h,a,e);b.bb&&b.bb.call(h,a,e)}},b.method,k,b.headers,b.responseType,b.withCredentials);
b.dc&&0<b.timeout&&(p=g.af(function(){l||(l=!0,t.abort(),g.Ze(p),b.dc.call(b.context||g.m,t))},b.timeout));
return t};
pba=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?ag(b):null)d={},(0,g.x)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.bg(a)})}c&&cg(d);
return d};
cg=function(a){if(g.va(a))for(var b in a)"html_content"==b||g.Ha(b,"_html")?a[b]=g.Ad(g.ld("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):cg(a[b])};
ag=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.bg=function(a){var b="";(0,g.x)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.dg=function(a,b){b.method="POST";b.ka||(b.ka={});return g.I(a,b)};
$f=function(a,b,c,d,e,h,k){function l(){4==(p&&"readyState"in p?p.readyState:0)&&b&&Te(b)(p)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var p=mba();if(!p)return null;"onloadend"in p?p.addEventListener("loadend",l,!1):p.onreadystatechange=l;p.open(c,a,!0);h&&(p.responseType=h);k&&(p.withCredentials=!0);c="POST"==c;if(e=nba(a,e))for(var t in e)p.setRequestHeader(t,e[t]),"content-type"==t.toLowerCase()&&(c=!1);c&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded");p.send(d);return p};
g.gg=function(a,b,c,d,e){b=void 0===b?"ERROR":b;e=void 0===e?!1:e;c={name:c||g.B("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=eg)){d=a.stacktrace;var h=a.columnNumber;a=g.hd(a);d=d||a.stack;e=a.lineNumber.toString();(0,window.isNaN)(e)||(0,window.isNaN)(h)||(e=e+":"+h);if(!(fg[a.message]||0<=d.indexOf("/YouTubeCenter.js")||0<=d.indexOf("/mytube.js"))){h=a.fileName;b=
{Ba:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b},ka:{url:g.B("PAGE_NAME",window.location.href),file:h}};d&&(b.ka.stack=d);for(var k in c)b.ka["client."+k]=c[k];if(k=g.B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ka[l]=k[l];g.I("/error_204",b);fg[a.message]=!0;eg++}}};
g.hg=function(a,b,c,d,e){this.D=a;this.H=b;this.G=c;this.F=d;this.C=e};
g.ig=function(a){return new g.hg(a)};
g.jg=function(a){var b={};void 0!==a.D?b.trackingParams=a.D:(b.veType=a.H,null!=a.G&&(b.veCounter=a.G),null!=a.F&&(b.elementIndex=a.F));void 0!==a.C&&(b.dataElement=g.jg(a.C));return b};
g.pg=function(a,b){kg[a.endpoint]=b;if(a.bi){var c=a.bi;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);lg[a.bi.token]=d;c=mg(a.endpoint,a.bi.token)}else c=mg(a.endpoint);c.push(a.Rb);d=Number(g.Ue("web_logging_max_batch")||0)||20;c.length>=d?g.ng():g.og()};
g.ng=function(){g.Ze(g.qg);if(!g.Kb(g.rg)){for(var a in g.rg){var b=g.sg[a];if(!b){var c=kg[a];if(!c)continue;b=new c;g.sg[a]=b}var c=void 0,d=a,e=b,h=qba[d],k=tg[d]||{};tg[d]=k;b=Math.round((0,g.ug)());for(c in g.rg[d]){var l=e.C();l[h]=mg(d,c);k.dispatchedEventCount=k.dispatchedEventCount||0;k.dispatchedEventCount+=l[h].length;l.requestTimeMs=b;var p=lg[c];if(p)a:{var t=l,w=c;if(p.videoId)var E="VIDEO";else if(p.playlistId)E="PLAYLIST";else break a;t.credentialTransferTokenTargetId=p;t.context=
t.context||{};t.context.user=t.context.user||{};t.context.user.credentialTransferTokens=[{token:w,scope:E}]}delete lg[c];e.F(d,l,{})}c=k;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete g.rg[a]}g.Kb(g.rg)||g.og()}};
rba=function(){var a=[],b;for(b in g.rg){var c=tg[b]||{};tg[b]=c;for(var d in g.rg[b]){var e=mg(b,d);c.storedEventsCount=c.storedEventsCount||0;c.storedEventsCount+=e.length}}d=Math.round((0,g.ug)());for(b in tg)c=tg[b],b in vg?c.eventType=vg[b]:c.eventType="UNKNOWN_TYPE",e=wg[b],c.metricIntervalMs=e?d-e:d-g.xg,a.push(c),wg[b]=d,delete tg[b];return a};
g.og=function(){g.Ze(g.qg);g.qg=g.af(g.ng,g.B("LOGGING_BATCH_TIMEOUT",1E4))};
mg=function(a,b){b||(b="");g.rg[a]=g.rg[a]||{};g.rg[a][b]=g.rg[a][b]||[];return g.rg[a][b]};
g.zg=function(){if(null==g.q("_lact",window)){var a=(0,window.parseInt)(g.B("LACT"),10),a=(0,window.isFinite)(a)?(0,g.ue)()-Math.max(a,0):-1;g.n("_lact",a,window);g.n("_fact",a,window);-1==a&&yg();g.G(window.document,"keydown",yg);g.G(window.document,"keyup",yg);g.G(window.document,"mousedown",yg);g.G(window.document,"mouseup",yg);g.D("page-mouse",yg);g.D("page-scroll",yg);g.D("page-resize",yg)}};
yg=function(){null==g.q("_lact",window)&&(g.zg(),g.q("_lact",window));var a=(0,g.ue)();g.n("_lact",a,window);-1==g.q("_fact",window)&&g.n("_fact",a,window);g.F("USER_ACTIVE")};
g.Ag=function(){var a=g.q("_lact",window);return null==a?-1:Math.max((0,g.ue)()-a,0)};
g.Bg=function(a,b,c,d,e){var h={};h.eventTimeMs=Math.round(d||(0,g.ug)());h[a]=b;h.context={lastActivityMs:String(g.Ag())};g.pg({endpoint:"log_event",Rb:h,bi:e},c)};
Cg=function(a){a={client:{hl:a.xB,gl:a.wB,clientName:a.vB,clientVersion:a.innertubeContextClientVersion}};g.B("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.B("DELEGATED_SESSION_ID")});return a};
Dg=function(){return{apiaryHost:g.B("APIARY_HOST",void 0),Iv:g.B("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!g.B("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:g.B("GAPI_HINT_PARAMS",void 0),innertubeApiKey:g.B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.B("INNERTUBE_API_VERSION",void 0),vB:g.B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),xB:g.B("INNERTUBE_CONTEXT_HL",void 0),wB:g.B("INNERTUBE_CONTEXT_GL",void 0),xhrApiaryHost:g.B("XHR_APIARY_HOST",
void 0)||"",yB:g.B("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
Eg=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.Gg=function(a){this.D=a||Dg();Fg||(Fg=sba(this.D))};
sba=function(a){return(new g.Pc(function(b){try{g.Vf("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){g.Se(c)}})).then(function(){})};
tba=function(a,b,c,d){var e={path:Eg(a.D.innertubeApiVersion,b,c),headers:{"X-Goog-Visitor-Id":g.B("VISITOR_DATA")},method:"POST",body:g.de(c)},h=(0,g.r)(a.G,a);Fg.then(function(){h();g.q("gapi.client.request")(e).execute(d||g.pa)})};
g.Hg=function(a){this.D=a||Dg()};
g.Ig=function(a,b){g.Bg(a,b,g.Ve("enable_youtubei_innertube")?g.Hg:g.Gg,void 0,void 0)};
g.Jg=function(){g.Ve("log_web_meta")&&rba().forEach(function(a){g.Ig("delayedEventMetricCaptured",a)})};
Lg=function(a,b){var c=Object.keys(a).join("");Kg("info_"+c+"_"+b)||(a.clientActionNonce=b,g.Bg("latencyActionInfo",a,g.Hg))};
Kg=function(a){Mg[a]=Mg[a]||{count:0};var b=Mg[a];b.count++;b.time=(0,g.ug)();Ng||(Ng=g.of(uba,0,5E3));return 10<b.count?(11==b.count&&g.gg(Error("CSI data exceeded logging limit with key: "+a)),!0):!1};
uba=function(){var a=(0,g.ug)(),b;for(b in Mg)6E4<a-Mg[b].time&&delete Mg[b];Ng=0};
g.Qg=function(a){if(!g.Og&&!g.Pg||!window.JSON)return null;try{var b=g.Og.get(a)}catch(c){}if(!g.ma(b))try{b=g.Pg.get(a)}catch(c){}if(!g.ma(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.Rg=function(){return g.Qg("yt-interaction-logging-parent")};
g.Sg=function(){var a=g.B("client-screen-nonce",void 0);a||(a=g.B("EVENT_ID",void 0));return a};
g.Tg=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.K=d?Te(d):null;this.H=e?Te(e):null;this.G=[];this.C=this.F=0};
g.Ug=function(a){g.qf(a.F);a.F=g.pf((0,g.r)(a.init,a))};
g.Xg=function(a){a.name in Vg&&Wg(a.name);Vg[a.name]={reqs:[],disable:(0,g.r)(a.disable,a)};(0,g.x)(a.deps,function(b){if(!(b in Vg))throw Error("Module "+b+" required by "+a.name);Vg[b].reqs.push(a.name)});
a.enable()};
Wg=function(a){if(a in Vg){var b=Vg[a];(0,g.x)(b.reqs,function(a){Wg(a)});
try{b.disable()}catch(c){}delete Vg[a]}};
g.Zg=function(a,b,c,d){g.Yg.set(""+a,b,c,"/",void 0===d?"youtube.com":d)};
g.$g=function(a,b,c){a&&(c&&(c=g.Cb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Od("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.Vd(a).body.appendChild(a)):g.B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?$f(a,b):vba(a,b))};
vba=function(a,b){var c=new window.Image,d=""+wba++;ah[d]=c;c.onload=c.onerror=function(){b&&ah[d]&&b();delete ah[d]};
c.src=a};
g.bh=function(a,b){a=a||"";var c=a.match(xba);window.spf.style.load(a,c?c[1]:"",b)};
g.eh=function(a,b,c){var d=g.B("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Ie(window.location.href);e&&d.push(e);e=g.Ie(a);if(g.Ua(d,e)||!e&&g.Ga(a,"/"))if(g.Ve("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.xd(d,a),a=d.href),a&&(a=g.Je(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Sg();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(ch(a,b,c),dh(b))):(ch(a,b),dh(b))}};
ch=function(a,b,c){a="ST-"+g.Qa(a).toString(36);c=c||5;b=b?g.Me(b):"";g.Zg(a,b,c)};
dh=function(a){if(a){a=a.itct||a.ved;var b=g.q("yt.logging.screen.storeParentElement");a&&b&&b(g.ig(a))}};
g.fh=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.yd(d.location,g.Ne(a,b)+c)};
g.gh=function(a,b){b&&g.eh(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.fh(a)};
g.hh=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.B("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.eh(a,b);if(c)return!1;g.gh(a);return!0};
g.ih=function(a,b){this.version=a;this.args=b};
g.jh=function(a,b){this.topic=a;this.di=b};
g.lh=function(a,b){var c=g.kh();c&&c.publish.call(c,a.toString(),a,b)};
g.kh=function(){return g.q("ytPubsub2Pubsub2Instance")};
mh=function(a,b){g.ih.call(this,1,arguments)};
oh=function(a){this.C=a||window;this.W=this.D=0;if(this.C.performance&&this.C.performance.timing&&this.C.performance.getEntriesByType){a=g.Id(this.C);this.J=new g.ke(0,0,a.width,a.height);var b;a=[];for(var c=this.C.document.getElementsByTagName("*"),d=0,e=c.length;d<e;d++){var h=c[d];if("IMG"==h.tagName||"IFRAME"==h.tagName)if(b=nh(this,h,h.src)){if("IFRAME"==h.tagName){try{var k=(new oh(h.contentWindow)).D}catch(l){k=0}0<k&&(b.timing=k)}a.push(b)}(b=this.C.getComputedStyle(h)["background-image"])&&
(b=oh.C.exec(b))&&1<b.length&&(b=nh(this,h,b[1]))&&a.push(b)}this.F=a;this.H=this.C.performance.getEntriesByType("resource");this.O=this.C.performance.getEntriesByType("mark");k={};a=0;for(c=this.H.length;a<c;a++)d=this.H[a],k[d.name]=d.responseEnd;a=0;for(c=this.O.length;a<c;a++)d=this.O[a],"mark_iframe_loaded: "==d.name.slice(0,20)&&(k[d.name.slice(20)]=d.startTime);a=0;for(c=this.F.length;a<c;a++)d=this.F[a],d.timing||(d.timing=k[d.url]||0);this.K=yba(this);this.G=zba(this);h=k=0;if(this.G.length)for(c=
a=0,d=this.G.length;c<d;c++)e=this.G[c],h=e.timing-h,0<h&&1>a&&(k+=(1-a)*h),h=e.timing,a=e.progress;this.D=Math.round(k||this.K);this.W=h}};
nh=function(a,b,c){return c&&b.getBoundingClientRect&&(b=b.getBoundingClientRect(),b=new g.ke(b.left,b.top,b.width,b.height),g.le(b,a.J))?new ph(b,c):null};
yba=function(a){var b=a.C,c=b.performance.timing.navigationStart;if("msFirstPaint"in b.performance.timing)var d=b.performance.timing.C-c;else if("chrome"in b&&"loadTimes"in b.chrome){var e=b.chrome.loadTimes(),h=e.firstPaintTime;if(0<h){var k=e.startLoadTime;"requestTime"in e&&(k=e.requestTime);h>=k&&(d=1E3*(h-k))}}if(void 0===d||0>d||12E4<d){d=b.performance.timing.responseStart-c;for(var l={},b=b.document.getElementsByTagName("head")[0].children,c=0,e=b.length;c<e;c++)h=b[c],"SCRIPT"==h.tagName&&
h.src&&!h.async?l[h.src]=!0:"LINK"==h.tagName&&"stylesheet"==h.rel&&h.href&&(l[h.href]=!0);a.H.some(function(a){if(!l[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===d||a>d)d=a})}return Math.max(d,0)||0};
zba=function(a){var b={0:0},c=0;var d=a.K;for(var e=0,h=a.F.length;e<h;e++){var k=a.F[e],l=d;k.timing>d&&(l=k.timing);b[l]||(b[l]=0);k=g.me(k.region).Yf();b[l]+=k;c+=k}e=g.me(a.J).Yf();0<e&&(e=.1*Math.max(e-c,0),d in b||(b[d]=0),b[d]+=e,c+=e);a=[];if(c){for(var p in b)d=new qh((0,window.parseFloat)(p),b[p]),a.push(d);a.sort(function(a,b){return a.timing-b.timing});
e=b=0;for(h=a.length;e<h;e++)d=a[e],b+=d.Yf,d.progress=b/c}return a};
ph=function(a,b){this.region=a;this.url=b};
qh=function(a,b){this.Yf=b;this.timing=a};
g.sh=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new window.Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.ue)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(rh)for(a=1,b=0;b<rh.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^rh.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&
63));return a.join("")};
vh=function(a){th(a);Aba();uh(!1,a);a||(g.B("TIMING_ACTION")&&g.Qe("PREVIOUS_ACTION",g.B("TIMING_ACTION")),g.Qe("TIMING_ACTION",""))};
g.Ah=function(a,b,c){b||"_"==a[0]||wh(a,c);var d=xh(c),e=b||(0,g.ug)();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;yh(a,b,c)||g.zh(!1,c);return d[a]};
wh=function(a,b){Bh.mark&&(g.Ga(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),Bh.mark(a))};
Dh=function(a,b){Ch("yt_sts",a,void 0);g.Ah("_start",b,void 0)};
Ch=function(a,b,c){Eh(c)[a]=b;Fh(a,b,c)};
Gh=function(a){var b=Eh(void 0);return a in b};
Hh=function(a){var b=xh(a);if(b.aft)return b.aft;a=g.B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
Jh=function(a){g.Ah("nreqs",a.requestStart,void 0);g.Ah("nress",a.responseStart,void 0);g.Ah("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.Ah("nrs",a.redirectStart,void 0),g.Ah("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.Ah("ndnss",a.domainLookupStart,void 0),g.Ah("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.Ah("ntcps",a.connectStart,void 0),g.Ah("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.Ah("nstcps",a.secureConnectionStart,void 0),g.Ah("ntcpe",a.connectEnd,void 0))};
g.zh=function(a,b){if(!Kh(b)){var c=g.B((b||"")+"TIMING_ACTION",void 0),d=xh(b);if(g.q("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&Hh(b))if(a||b)Lh(b);else{var c=!0,e=g.B("TIMING_WAIT",[]);if(e.length)for(var h=0,k=e.length;h<k;++h)if(!(e[h]in d)){c=!1;break}c&&Lh(b)}}};
Bba=function(){switch(g.uf()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Lh=function(a){if(!g.Ve("csi_on_gel")){var b=xh(a),c=Eh(a),d=b._start,e;for(e in b)if(g.Ga(e,"_")&&g.sa(b[e])){var h=e.slice(1);if(h in Cba){var k=(0,g.Mh)(b[e],function(a){return Math.round(a-d)});
c["all_"+h]=k.join()}delete b[e]}h=!!c.ap;if(k=g.q("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))Nh(k,h),vh(a)}else{var l=g.B("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.B((a||"")+"TIMING_ACTION",void 0)};var p=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var t=window.location.protocol+g.q("ytplayer.config.assets.js");(t=Bh.getEntriesByName?Bh.getEntriesByName(t)[0]:null)?c.h5jse=Math.round(c.h5jse-t.responseEnd):delete c.h5jse}b.aft=Hh(a);Dba(a)&&"youtube"==l&&(Ch("yt_lt","hot_bg",a),l=
b.vc,t=b.pbs,delete b.aft,c.aft=Math.round(t-l));for(var w in c)"_"!=w.charAt(0)&&(k[w]=c[w]);b.ps=(0,g.ug)();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,w.push(e+"."+l));k.rt=w.join(",");(b=g.q("ytdebug.logTiming"))&&b(k,c);Nh(k,h,a);g.lh(Eba,new mh(c.aft+(p||0),a))}}};
Ph=function(a){if(!Kh(void 0)){if(!g.Ve("send_empty_timing")){var b=g.B("CSI_SERVICE_NAME","youtube");if(!g.B("TIMING_ACTION",void 0)||!b)return}g.Ah("aa",void 0,void 0);Ch("ap",1,void 0);Ch("yt_fss",a,void 0);!g.Ve("enable_csi_abandonment_info")||Gh("yt_lt")||Oh();Lh(void 0)}};
Fba=function(){if("cold"==Eh().yt_lt){var a=xh(),b=Qh(),c;for(c in a)g.Ga(c,"_")||"tick_"+c in b||yh(c,a[c]);a=Eh();for(c in a)"info_"+c in b||Fh(c,a[c])}};
yh=function(a,b,c){Qh(c)["tick_"+a]=b;c||b||(0,g.ug)();return g.Ve("csi_on_gel")?(c=Rh(c),"_start"==a?Kg("baseline_"+c)||g.Bg("latencyActionBaselined",{clientActionNonce:c},g.Hg,b):Kg("tick_"+a+"_"+c)||g.Bg("latencyActionTicked",{tickName:a,clientActionNonce:c},g.Hg,b),!0):!1};
Fh=function(a,b,c){Qh(c)["info_"+a]=b;if(g.Ve("csi_on_gel"))if(a in Sh){var d={};a=Sh[a].split(".");g.Ua(Gba,a)&&(b=!!b);for(var e=d,h=0;h<a.length-1;h++)e[a[h]]=e[a[h]]||{},e=e[a[h]];d[a[a.length-1]]=b;b=Rh(c);Lg(d,b)}else g.Ua(Hba,a)||g.Se(Error("Unknown label "+a+" logged with GEL CSI."))};
Oh=function(){var a=g.B("TIMING_INFO",{});for(b in a)Ch(b,a[b]);Ch("is_nav",1);(a=g.Sg())&&Ch("csn",a);(a=g.B("PREVIOUS_ACTION",void 0))&&Ch("pa",a);var b=Eh();b.p=g.B("CLIENT_PROTOCOL")||"unknown";b.t=g.B("CLIENT_TRANSPORT")||"unknown";Bh.now&&Bh.timing?(a=Bh.timing.navigationStart+Bh.now(),a=Math.round((0,g.ue)()-a)):a=null;null!=a&&Ch("yt_hrd",a);window.navigator&&window.navigator.sendBeacon&&Ch("ba",1);Ch("yt_vis",Bba());if("cold"==b.yt_lt){a=Bh.timing||{};g.Ve("cold_load_nav_start_web")&&a.navigationStart&&
(g.Ah("srt",a.responseStart),1!=b.prerender&&Dh("n",a.navigationStart));a:if(a.msFirstPaint)b=Math.max(0,a.msFirstPaint);else{if(b=window.chrome)if(b=b.loadTimes,g.ua(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity),c=window.Infinity===c?0:a.navigationStart-c;b=Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0);break a}b=0}0<b&&g.Ah("fpt",b);Jh(a);Bh.getEntriesByType&&Iba();a=g.B("SPEEDINDEX_FOR_ACTIONS",void 0);b=g.B("TIMING_ACTION",void 0);a&&-1<a.indexOf(b)&&
(a=(0,g.ug)(),b=new oh,c=(0,g.ug)(),0<b.D&&(Ch("si",b.D),g.Ah("vsc",Th(b.W)),g.Ah("sics",a),g.Ah("sice",c)));a=[];if(window.document.querySelector&&Bh&&Bh.getEntriesByName)for(var d in Uh)b=Uh[d],Jba(d,b)&&a.push(b);a.length&&Ch("rc",a.join(","))}g.Ve("csi_on_gel")&&(d={},d.actionType=Kba[g.B("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Rh(),Lg(d,a))};
Th=function(a){return Math.round(Bh.timing.navigationStart+a)};
Iba=function(){var a=window.location.protocol,b=Bh.getEntriesByType("resource"),c=g.Sa(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170601000321/https://fonts.googleapis.com/css?family=")}),b=(0,g.Vh)(b,function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170601000321/https://fonts.gstatic.com/s/")}),b=(0,g.Wh)(b,function(a,b){return b.duration>a.duration?b:a},{duration:0});
c&&0<c.startTime&&0<c.responseEnd&&(g.Ah("wfcs",Th(c.startTime)),g.Ah("wfce",Th(c.responseEnd)));b&&0<b.startTime&&0<b.responseEnd&&(g.Ah("wffs",Th(b.startTime)),g.Ah("wffe",Th(b.responseEnd)))};
Jba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=Bh.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.Ah("rsf_"+b,d+Math.round(c.fetchStart)),g.Ah("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(Gh("rc")||Ch("rc",""),0===c.transferSize))?!0:!1:!1};
Nh=function(a,b,c){if(g.Ve("debug_csi_data")){var d=g.q("yt.timing.csiData");d||(d=[],g.n("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||g.$g(a,void 0)}catch(h){g.$g(a,void 0)}else g.$g(a);uh(!0,c)};
Xh=function(a){g.n("ytglobal.timingready_",a,void 0)};
Rh=function(a){var b=Yh(a).nonce;b||(b=g.sh(),Yh(a).nonce=b);return b};
xh=function(a){return Yh(a).tick};
Eh=function(a){return Yh(a).info};
Qh=function(a){a=Yh(a);"gel"in a||(a.gel={});return a.gel};
Yh=function(a){return g.q("ytcsi."+(a||"")+"data_")||th(a)};
th=function(a){var b={tick:{},info:{}};g.n("ytcsi."+(a||"")+"data_",b,void 0);return b};
Kh=function(a){return!!g.q("yt.timing."+(a||"")+"pingSent_")};
uh=function(a,b){g.n("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Dba=function(a){var b=xh(a),c=b.pbr,d=b.vc,b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==Eh(a).yt_pvis};
ai=function(a,b){g.wb.call(this);this.J=this.G=a;this.ea=b;this.O=!1;this.api={};this.gb=this.X=null;this.ia=new g.ne;g.Ab(this,this.ia);this.D={};this.W=this.ib=this.F=this.Ab=this.C=null;this.na=!1;this.N=this.K=this.H=this.ma=null;this.nb={};this.fc=["onReady"];this.ua=new Df(this);g.Ab(this,this.ua);this.Xc=null;this.Tb=window.NaN;this.Ya={};Zh(this);this.Vd("onDetailedError",(0,g.r)(this.AG,this));this.Vd("onTabOrderChange",(0,g.r)(this.Uv,this));this.Vd("onTabAnnounce",(0,g.r)(this.un,this));
this.Vd("WATCH_LATER_VIDEO_ADDED",(0,g.r)(this.EG,this));this.Vd("WATCH_LATER_VIDEO_REMOVED",(0,g.r)(this.FG,this));g.$h||(this.Vd("onMouseWheelCapture",(0,g.r)(this.mG,this)),this.Vd("onMouseWheelRelease",(0,g.r)(this.nG,this)));this.Vd("onAdAnnounce",(0,g.r)(this.un,this));this.V=new Df(this);g.Ab(this,this.V);this.Cc=!1;this.qb=null};
ci=function(a,b){a.Ab=b;a.C=b.clone();a.F=a.C.attrs.id||a.F;"video-player"==a.F&&(a.F=a.ea,a.C.attrs.id=a.ea);a.J.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F);a.C.args.enablejsapi="1";a.C.args.playerapiid=a.ea;a.ib||(a.ib=bi(a,a.C.args.jsapicallback||"onYouTubePlayerReady"));a.C.args.jsapicallback=null;var c=a.C.attrs.width;c&&g.De(a.J,Number(c)||c);(c=a.C.attrs.height)&&g.Ce(a.J,Number(c)||c)};
di=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
ei=function(a){var b=a.C&&a.C.args&&a.C.args.fflags;if(b&&0<=b.indexOf("web_player_disable_flash=true"))return!1;if(!g.la(a.C.disable.flash)){var b=a.C.disable;var c=g.Jf.getInstance().isSupported(a.C.minVersion);b.flash=!c}return!a.C.disable.flash};
hi=function(a,b){var c;(c=!b)||(c=5!=(Lba[b.errorCode]||5)?!1:(c=a.C&&a.C.args&&a.C.args.fflags)&&0<=c.indexOf("web_player_disable_flash_fallback=true")?!1:-1!=Mba.indexOf(b.errorCode));if(c&&ei(a)){(c=fi(a))&&c.stopVideo&&c.stopVideo();var d=a.C;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=g.Hf(c));d.args.autoplay=1;d.args.html5_unavailable="1";ci(a,d);gi(a,"flash")}};
gi=function(a,b){if(!a.ob()){if(!b){var c;if(!(c=!a.C.html5&&ei(a))){if(!g.la(a.C.disable.html5)){c=!0;void 0!=a.C.args.deviceHasDisplay&&(c=a.C.args.deviceHasDisplay);if(2.2==ii)var d=!0;else{a:{var e=c;c=g.q("yt.player.utils.videoElement_");c||(c=g.Rd("VIDEO"),g.n("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Nba:Oba,h=0;h<e.length;h++)if(c.canPlayType(e[h])){d=null;break a}d="fmt.noneavailable"}catch(k){d="html5.missingapi"}}d=!d}d&&(d=ji(a)||a.C.assets.js);a.C.disable.html5=
!d;d||(a.C.args.html5_unavailable="1")}c=!!a.C.disable.html5}b=c?ei(a)?"flash":"unsupported":"html5"}("flash"==b?a.AM:a.BM).call(a)}};
ji=function(a){var b=!0,c=fi(a);c&&a.C&&(a=a.C,b=g.C(c,"version")==a.assets.js);return b&&!!g.q("yt.player.Application.create")};
fi=function(a){var b=g.z(a.F);!b&&a.J&&a.J.querySelector&&(b=a.J.querySelector("#"+a.F));return b};
ki=function(a,b,c){var d=b[c];return function(){try{return a.Xc=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Xc=e,g.Se(e,"WARNING"))}}};
Zh=function(a){a.O=!1;if(a.gb)for(var b in a.D)a.gb(b,a.D[b]);for(var c in a.Ya)g.Ze((0,window.parseInt)(c,10));a.Ya={};a.X=null;a.gb=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=(0,g.r)(a.Vd,a);a.api.removeEventListener=(0,g.r)(a.bL,a);a.api.destroy=(0,g.r)(a.dispose,a);a.api.getLastError=(0,g.r)(a.tx,a);a.api.getPlayerType=(0,g.r)(a.Mx,a);a.api.getCurrentVideoConfig=(0,g.r)(a.Vw,a);a.api.loadNewVideoConfig=(0,g.r)(a.Vm,a);a.api.isReady=(0,g.r)(a.PM,a)};
bi=function(a,b){var c=b;if("string"==typeof b){if(a.nb[b])return a.nb[b];c=function(){var a=g.q(b);a&&a.apply(g.m,arguments)};
a.nb[b]=c}return c?c:null};
Pba=function(a,b){var c="ytPlayer"+b+a.ea;a.D[b]=c;g.m[c]=function(c){var d=g.af(function(){a.ob()||(a.ia.oa(b,c),g.Lb(a.Ya,String(d)))},0);
g.Mb(a.Ya,String(d),!0)};
return c};
li=function(a){return(a=fi(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null};
ni=function(a){g.Ah("dcp");a.cancel();Zh(a);a.W=null;a.C&&(a.C.loaded=!1);var b=fi(a);"html5"==li(a)?ji(a)||!mi(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null):b&&b.destroy&&b.destroy();g.Sd(a.G);Ff(a.ua);a.K=null;a.N=null};
mi=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.qi=function(a,b){a=g.ma(a)?g.Ed(a):a;b=g.Hf(b);var c=g.oi+"_"+g.ya(a),d=g.pi[c];if(d)return d.Vm(b),d.api;d=new ai(a,c);g.pi[c]=d;g.F("player-added",d.api);g.yb(d,g.u(Qba,d));g.af(function(){d.Vm(b)},0);
return d.api};
Qba=function(a){g.pi[a.getId()]=null};
g.ri=function(a){a=g.z(a);if(!a)return null;var b=g.oi+"_"+g.ya(a),c=g.pi[b];c||(c=new ai(a,b),g.pi[b]=c);return c.api};
ti=function(a,b){var c={};c.key=a;c.value=b;si().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
ui=function(a){return si().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})})["catch"](function(){return window.Promise.reject("Unable to open IndexedDB.")})};
si=function(){return vi?window.Promise.resolve(vi):new window.Promise(function(a,b){var c=window.self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))vi=b,a(vi);else return window.self.indexedDB.deleteDatabase("swpushnotificationsdb"),si()};
c.onupgradeneeded=Rba})};
Rba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Sba=function(){wi.stop()};
Tba=function(){g.Ah("vpr")};
Di=function(a,b){for(var c=a,d=[];c!=window.document.body;){var e=g.wf(c);if(e in xi)return!0;if(e in Ci)return!1;var h=window.getComputedStyle(c);if("none"==h.display||"hidden"==h.visibility)return Ci[e]=!0,!1;h=c.getBoundingClientRect();if(!(b.left<=h.left+h.width&&h.left<=b.left+b.width&&b.top<=h.top+h.height&&h.top<=b.top+b.height))return Ci[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)xi[d[c]]=!0;return!0};
Uba=function(a){for(var b=g.Id(),b=new g.ke(0,0,b.width,b.height),c=0,d=0,e=a.length;d<e;d++){var h=a[d].time;Di(a[d].sB,b)&&c<h&&(c=h)}return c};
Vba=function(a){var b=Ei;return new g.Pc(function(c,d){var e={sB:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):(a.slt=function(){Ei!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)},Fi.push(a))})};
Wba=function(a){wi.start();Ch("vpil",++Gi);a=a.time;Hi<a&&(Hi=a,g.Ah("lim",a))};
Xba=function(){g.Ah("vptl",Hi);g.Ah("vpl",Hi)};
Yba=function(){Ii.forEach(function(a){a.cancel()});
Hi=Gi=Ii.length=0;xi={};Ci={};Fi.forEach(function(a){a.slt=void 0});
Fi.length=0};
Zba=function(){Ei++;var a=g.Id(),b=new g.ke(0,0,a.width,a.height);Ch("vps",a.width+"."+a.height);g.Ah("vpc");var a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]"),c=a.length,d=[],e=!0;wi.start();for(var h=0;h<c;h++){var k=a[h];if(Di(k,b)){var l=Vba(k);l.then(Wba);d.push(l);Ii.push(l);k.loadTime||(e=!1)}}e&&Ch("yt_eil",1);Ch("vpni",d.length);g.Ah("vpcc");b=g.Uc(d).then(Uba);g.Wc(b,Tba);b.then(Sba);Ii.push(b);return b};
g.Ji=function(a,b){g.$g("/gen_204?"+a,b)};
g.Ki=function(){return g.y(g.z("page-container"),"remote-connected")};
$ba=function(){g.n("yt.abuse.botguardInitialized",lf,void 0);g.n("yt.abuse.invokeBotguard",g.mf,void 0);g.n("yt.abuse.dclkstatus.checkDclkStatus",sf,void 0);g.n("yt.player.exports.navigate",g.hh,void 0);g.n("yt.util.activity.init",g.zg,void 0);g.n("yt.util.activity.getTimeSinceActive",g.Ag,void 0);g.n("yt.util.activity.setTimestamp",Li,void 0);var a=g.q("ytplayer.config");Mi(a);g.q("ytspf.enabled")&&(Ni=g.$e(Oi,5E3),(a=g.Pi())?(a.addEventListener("onReady",Oi),a.addEventListener("onStateChange",Oi)):
Qi("unable to init PP monitor"))};
Mi=function(a){for(var b in g.pi){var c=g.pi[b];c&&c.cancel()}if(a=a||null){b=g.Pi();var d=!0,c=g.Ri;g.Ri=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Si="",g.qi("player-api",a)):b.playVideo();a=g.Hf(a);a.loaded=!0}Oi();g.n("ytplayer.config",a,void 0)};
g.Pi=function(){return g.ri("player-api")};
Oi=function(){var a=g.Pi();if(a){var b=g.z("player");b=!b||g.y(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.B("PAGE_NAME"),e=g.Ki();!c||d||e||(Qi("PP playing off watch (paused)"),a.pauseVideo());b&&d?Qi("PP off-screen on watch"):b||d||Qi("PP !off-screen off watch")}};
Qi=function(a){var b=g.B("PAGE_NAME");b&&(b=[b,Si,g.q("_spf_state.nav-counter")],a+="("+b.join(",")+")",g.n("yt.www.persistentplayer.issue",a,void 0),g.Se(Error(a),"WARNING"))};
Ui=function(){g.Ah("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.Ah("cpt")},0)}):window.document.hidden?g.Ah("cpt"):(0,window.setTimeout)(function(){g.Ah("cpt")},0);
aca();g.B("CSI_VIEWPORT")&&(Ti=Zba(),Ti.then(function(a){g.Ah("vpl",a);Ti=null},function(){}))};
aca=function(){Vi("init");var a=g.B("PAGE_NAME",void 0);a&&Vi("init-"+a)};
Vi=function(a){g.nf()?Wi.push(g.pf(g.u(g.gf,a),0)):g.F(a)};
Xi=function(){g.rf(Wi);Wi.length=0;Yba();Ti&&(Ti.cancel(),Ti=null);var a=g.B("PAGE_NAME",void 0);a&&g.gf("dispose-"+a);g.gf("dispose")};
bca=function(){Ui()};
cca=function(){g.B("TIMING_REPORT_ON_UNLOAD")&&g.zh(!0);Ph("u");g.Jg();g.ng();Xi();g.gf("pageunload")};
Yi=function(){Li()};
Zi=function(a){a=a.detail.url;window.yt_spf_loaded_history=!0;Li();var b=g.Rg();if(b&&a){var c=g.jg(b.visualElement),b={csn:b.clientScreenNonce};"trackingParams"in c?b.itct=c.trackingParams:(b.veType=c.veType,b.veCounter=c.veCounter);g.eh(a,b)}};
dj=function(){$i=1;aj=bj=0;g.B("TIMING_REPORT_ON_UNLOAD")&&g.zh(!0);g.Ve("warm_load_nav_start_web")?(Ph("n"),vh(),Xh(!1),g.Qe("TIMING_AFT_KEYS",[]),Ch("yt_lt","warm"),g.Qe("TIMING_ACTION",""),g.Qe("TIMING_WAIT",[])):(Ph("n"),vh());Dh("n");wh("nr");cj(dca);g.gf("navigate")};
hj=function(a){a=a.detail.part||a.detail.partial;g.Ah("nc"+bj);++bj;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.Ah("bc");else{var b=1==$i;$i=2;b?(cj(eca),ej()):cj(fca);if(b=a&&a.data&&a.data.swfcfg)fj(a.timing,b.args),gj(b)}};
ij=function(){g.Ah("np"+aj);++aj};
jj=function(a){a=a.detail.response;var b=1==$i;$i=3;b&&(cj(gca),ej());if(b=a.data&&a.data.swfcfg)fj(a.timing,b.args),gj(b)};
nj=function(a){g.Ah("nd");a=a.detail.response;g.kj=a.cacheKey;a=a.timing;var b=window._spf_state;g.lj.navigationCount=b&&b["nav-counter"]||0;g.Ve("warm_load_nav_start_web")?g.Ah("srt",a.responseStart):(Dh("ne",a.responseStart),Ch("srt",Math.max(0,a.responseStart-a.navigationStart)));Ch("yt_lt",a.spfCached?"hot":"warm");Ch("yt_pft",+!!a.spfPrefetched);g.Ah("pfs",a.fetchStart);g.Ah("pfrs",a.responseStart);"redirectStart"in a&&Jh(a);cj(mj);window.document.getElementById("content").style.height="";Ui();
$i=0};
oj=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Se(a)};
pj=function(a){g.Ji(g.Me({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
ica=function(){hca();g.Qe("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);window.yt_spf_loaded_history=!1};
jca=function(){};
ej=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Xi();var a=g.B("PREVIOUS_ACTION"),b;for(b in g.Pe)delete g.Pe[b];g.Qe("PREVIOUS_ACTION",a);g.n("ytplayer.config",null,void 0);if((b=g.Pi())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Si=b,(b=g.z("movie_player"))&&b.stopVideo?(b.stopVideo(),Si="recovered"):Si="missing2"}else Si="missing";Oi()};
gj=function(a){"cfg"in xh(void 0)||g.Ah("cfg");Mi(a)};
cj=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.qf(qj);qj=g.pf(function(){var c=a[0],d=a[1],e=a[2];b.className="";var h=b.style;h.transitionDuration=h.webkitTransitionDuration=c+"ms";h.width=d+"%";g.Ze(rj);rj=g.af(function(){b.className=e},c)},0)};
hca=function(){var a=mj[0]+50;g.Ze(rj);rj=g.af(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
fj=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&(0,g.x)(kca,function(a){a in b&&(delete b[a],e.push(a))});
g.B("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"removeNonCacheableVideoVars",cached:c,prefetched:d,deleted:e.join("")},g.Ji(g.Me(c)))};
sj=function(){var a=String(g.Ue("service_worker_scope")||"");return window.navigator.serviceWorker.getRegistration(a)};
tj=function(a){sj().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
lca=function(){var a={type:"notifications_check_registration",data:g.B("ID_TOKEN")};tj(a)};
uj=function(){var a={type:"notifications_register",data:g.B("ID_TOKEN")};tj(a)};
vj=function(){return sj().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})};
wj=function(){return window.Notification.requestPermission().then(function(a){var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return vj().then(function(){ti("NotificationsDisabled",!1)}).then(function(){uj();
return window.Promise.resolve(!0)});
"denied"==a&&uj();return window.Promise.resolve(!1)})};
mca=function(){ti("HideTicker",(0,g.ue)());window.document.body.classList.remove("sitewide-ticker-visible")};
nca=function(){return ui("HideTicker").then(function(a){return(0,g.ue)()>a+2592E6})};
xj=function(){return g.Ve("service_worker_push_home_only")?"HomePromptCount":"PromptCount"};
yj=function(){var a=xj();ui(a).then(function(b){ti(a,b+1)})};
zj=function(){var a=window.document.getElementById("ticker");return a&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.C(a,"trigger-condition")?a:null};
Aj=function(){var a=zj();return a?a.querySelector(".yt-uix-button-alert-info"):null};
oca=function(){g.B("LOGGED_IN",void 0)&&(g.Ve("service_worker_push_ticker_enabled")?nca().then(function(a){if(a&&(a=zj())){var b=Aj();if(b){var c=zj();if(c=c?c.querySelector(".yt-uix-button-close"):null)g.G(b,"click",wj),g.G(c,"click",mca),window.document.body.classList.add("sitewide-ticker-visible"),a.classList.add("show"),yj()}}}):(wj(),yj()))};
pca=function(){return g.B("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)?-1!=Number(g.Ue("service_worker_push_prompt_cap")||0)?ui(xj()).then(function(a){a||(a=0);return window.Promise.resolve(a<Number(g.Ue("service_worker_push_prompt_cap")||0))}):window.Promise.resolve(!0):window.Promise.resolve(!1)};
qca=function(a){g.Bj&&!g.Cj&&!g.Dj&&!g.Ej&&window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification&&window.Promise&&a&&a.pushManager&&("default"!=window.Notification.permission?vj().then(lca):pca().then(function(a){a&&oca()}))};
sca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(rca)})};
uca=function(){var a="/sw.js",b=g.B("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=Fj(a);g.Ve("service_worker_push_enabled")&&a.then(tca).then(qca)};
tca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
rca=function(a){a&&Fj("/sw.js?0",a.scope)};
Fj=function(a,b){var c=b||String(g.Ue("service_worker_scope")||"")||"/";return window.navigator.serviceWorker.register(a,{scope:c})};
Gj=function(){g.Tg.call(this,"www/base");this.D=0};
Hj=function(a){(a=a.detail.name)&&Wg(a)};
g.aa=[];fa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;baa=0;
ja("String.prototype.startsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");var b=this+"";a+="";for(var e=b.length,h=a.length,k=Math.max(0,Math.min(c|0,b.length)),l=0;l<h&&k<e;)if(b[k++]!=a[l++])return!1;return l>=h}});
ja("Reflect.apply",function(a){if(a)return a;var b=Function.prototype.apply;return function(a,d,e){return b.call(a,d,e)}});
var vca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b};
ja("Reflect.construct",function(a){return a?a:function(a,c,d){void 0===d&&(d=a);d=vca(d.prototype||Object.prototype);return window.Reflect.apply(a,d,c)||d}});
ja("Promise",function(a){function b(a){this.C=0;this.D=void 0;this.F=[];var b=this.H();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}}
function c(){this.C=null}
function d(a){return a instanceof b?a:new b(function(b){b(a)})}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.K()})};
var e=ea.setTimeout;c.prototype.D=function(a){e(a,0)};
c.prototype.K=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(t){this.H(t)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.H=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.N),reject:a(this.G)}};
b.prototype.N=function(a){if(a===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.V(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.W(a):this.K(a)}};
b.prototype.W=function(a){var b=void 0;try{b=a.then}catch(p){this.G(p);return}"function"==typeof b?this.ma(b,a):this.K(a)};
b.prototype.G=function(a){this.O(2,a)};
b.prototype.K=function(a){this.O(1,a)};
b.prototype.O=function(a,b){if(0!=this.C)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.C);this.C=a;this.D=b;this.J()};
b.prototype.J=function(){if(null!=this.F){for(var a=this.F,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.F=null}};
var h=new c;b.prototype.V=function(a){var b=this.H();a.Yh(b.resolve,b.reject)};
b.prototype.ma=function(a,b){var c=this.H();try{a.call(b,c.resolve,c.reject)}catch(t){c.reject(t)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(ka){h(ka)}}:b}
var e,h,k=new b(function(a,b){e=a;h=b});
this.Yh(d(a,e),d(c,h));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.Yh=function(a,b){function c(){switch(d.C){case 1:a(d.D);break;case 2:b(d.D);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?h.F(c):this.F.push(function(){h.F(c)})};
b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};
b.race=function(a){return new b(function(b,c){for(var e=g.ia(a),h=e.next();!h.done;h=e.next())d(h.value).Yh(b,c)})};
b.all=function(a){var c=g.ia(a),e=c.next();return e.done?d([]):new b(function(a,b){function h(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,d(e.value).Yh(h(k.length-1),b),e=c.next();while(!e.done)})};
return b});
g.Ij=g.Ij||{};g.m=this;xa="closure_uid_"+(1E9*Math.random()>>>0);daa=0;g.ue=Date.now||function(){return+new Date};/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var vb=window,mb=window.document,kaa=vb.location,jaa=/\[native code\]/,sb=Aa(vb,"gapi",{});var Ca;Ca=Aa(vb,"___jsl",Ba());Aa(Ca,"I",0);Aa(Ca,"hel",10);g.v(g.Fa,Error);g.Fa.prototype.name="CustomError";var oaa,paa,qaa,raa,saa,taa,naa;g.Na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
oaa=/&/g;paa=/</g;qaa=/>/g;raa=/"/g;saa=/'/g;taa=/\x00/g;naa=/[\x00&<>"']/;g.Jj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.Ta=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(g.ma(a))return g.ma(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.wca=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;
0>c&&(c=Math.max(0,a.length+c));if(g.ma(a))return g.ma(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ma(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)};
g.Vh=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],h=0,k=g.ma(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var p=k[l];
b.call(c,p,l,a)&&(e[h++]=p)}return e};
g.Mh=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),h=g.ma(a)?a.split(""):a,k=0;k<d;k++)k in h&&(e[k]=b.call(c,h[k],k,a));
return e};
g.Wh=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.r)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.x)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.Kj=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ma(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&b.call(c,e[h],h,a))return!0;
return!1};
g.Lj=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ma(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&!b.call(c,e[h],h,a))return!1;
return!0};g.f=g.ab.prototype;g.f.isEnabled=function(){return window.navigator.cookieEnabled};
g.f.set=function(a,b,c,d,e,h){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.la(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";h=h?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.ue)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+h};
g.f.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,h;e<d.length;e++){h=(0,g.Na)(d[e]);if(0==h.lastIndexOf(c,0))return h.substr(c.length);if(h==a)return""}return b};
g.f.remove=function(a,b,c){var d=g.la(this.get(a));this.set(a,"",0,b,c);return d};
g.f.Ec=g.ba(0);g.f.Ib=g.ba(1);g.f.isEmpty=function(){return!this.C.cookie};
g.f.Bb=g.ba(5);g.f.be=g.ba(6);g.f.clear=function(){for(var a=g.bb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Yg=new g.ab("undefined"==typeof window.document?null:window.document);g.Yg.F=3950;var db=Aa(Ca,"perf",Ba());Aa(db,"g",Ba());var waa=Aa(db,"i",Ba());Aa(db,"r",[]);Ba();Ba();var gb=Ba(),qb=[];qb.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Ca[b]=Aa(Ca,b,[]).concat(c):Aa(Ca,b,c)}if(b=a.u)a=Aa(Ca,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Eaa=/^(\/[a-zA-Z0-9_\-]+)+$/,ib=[/\/amp\//,/\/amp$/,/^\/amp$/],Gaa=/^[a-zA-Z0-9\-_\.,!]+$/,Caa=/^gapi\.loaded_[0-9]+$/,Faa=/^[a-zA-Z0-9,._-]+$/,zaa=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,yaa=/\/cb=/g,xaa=/\/\//g;gb.m=function(a,b,c,d){(a=a[0])||fb("missing_hint");return"https://apis.google.com"+Daa(a,b,c,d)};
var nb=(0,window.decodeURI)("%73cript"),lb=/^[-+_0-9\/A-Za-z]+={0,2}$/;sb.load=function(a,b){return rb(function(){return ub(a,b)})};g.wb.prototype.jc=!1;g.wb.prototype.ob=function(){return this.jc};
g.wb.prototype.dispose=function(){this.jc||(this.jc=!0,this.Y())};
g.wb.prototype.Y=function(){if(this.Cb)for(;this.Cb.length;)this.Cb.shift()()};g.Bb.prototype.stopPropagation=function(){this.F=!0};
g.Bb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Os=!1};a:{var Mj=g.m.navigator;if(Mj){var Nj=Mj.userAgent;if(Nj){g.Cb=Nj;break a}}g.Cb=""};var Ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.Vb[" "]=g.pa;var Uj,Laa,Yj;g.Oj=g.Db("Opera");g.A=g.Qb();g.Pj=g.Db("Edge");g.Qj=g.Pj||g.A;g.Rj=g.Db("Gecko")&&!(-1!=g.Cb.toLowerCase().indexOf("webkit")&&!g.Db("Edge"))&&!(g.Db("Trident")||g.Db("MSIE"))&&!g.Db("Edge");g.Md=-1!=g.Cb.toLowerCase().indexOf("webkit")&&!g.Db("Edge");g.Sj=g.Db("Macintosh");g.Tj=g.Db("Windows");g.xca=g.Db("Linux")||g.Db("CrOS");g.yca=g.Db("Android");g.Dj=Tb();g.Ej=g.Db("iPad");g.zca=g.Db("iPod");
a:{var Vj="",Wj=function(){var a=g.Cb;if(g.Rj)return/rv\:([^\);]+)(\)|;)/.exec(a);if(g.Pj)return/Edge\/([\d\.]+)/.exec(a);if(g.A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Md)return/WebKit\/(\S+)/.exec(a);if(g.Oj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Wj&&(Vj=Wj?Wj[1]:"");if(g.A){var Xj=Xb();if(null!=Xj&&Xj>(0,window.parseFloat)(Vj)){Uj=String(Xj);break a}}Uj=Vj}g.Yb=Uj;Laa={};var Zj=g.m.document;Yj=Zj&&g.A?Xb()||("CSS1Compat"==Zj.compatMode?(0,window.parseInt)(g.Yb,10):5):void 0;g.$b=Yj;var qc,Bca;g.Aca=!g.A||g.ac(9);qc=!g.A||g.ac(9);Bca=g.A&&!g.Zb("9");!g.Md||g.Zb("528");g.Rj&&g.Zb("1.9b")||g.A&&g.Zb("8")||g.Oj&&g.Zb("9.5")||g.Md&&g.Zb("528");g.Rj&&!g.Zb("8")||g.A&&g.Zb("9");g.ak=g.A?"focusin":"DOMFocusIn";g.bk=g.A?"focusout":"DOMFocusOut";g.ck=g.Md?"webkitTransitionEnd":g.Oj?"otransitionend":"transitionend";g.v(g.bc,g.Bb);
g.bc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Rj&&(g.Wb(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.K=g.Sj?a.metaKey:a.ctrlKey;this.state=a.state;this.xc=a;a.defaultPrevented&&this.preventDefault()};
g.bc.prototype.stopPropagation=function(){g.bc.M.stopPropagation.call(this);this.xc.stopPropagation?this.xc.stopPropagation():this.xc.cancelBubble=!0};
g.bc.prototype.preventDefault=function(){g.bc.M.preventDefault.call(this);var a=this.xc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Bca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var cc="closure_listenable_"+(1E6*Math.random()|0),Naa=0;g.f=g.fc.prototype;g.f.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=gc(e,b,c,d);return-1<b?(ec(e[b]),g.Wa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.f.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,ec(d[e]);delete this.listeners[c];this.C--}return b};
g.f.gg=g.ba(8);g.f.kf=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=gc(a,b,c,d));return-1<e?a[e]:null};
g.f.hasListener=function(a,b){var c=g.la(a),d=c?a.toString():"",e=g.la(b);return g.Fb(this.listeners,function(a){for(var h=0;h<a.length;++h)if(!(c&&a[h].type!=d||e&&a[h].capture!=b))return!0;return!1})};var nc="closure_lm_"+(1E6*Math.random()|0),tc={},pc=0,wc="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.xc,g.wb);g.xc.prototype[cc]=!0;g.f=g.xc.prototype;g.f.Bi=function(){return this.Yl};
g.f.Ah=g.ba(9);g.f.addEventListener=function(a,b,c,d){g.jc(this,a,b,c,d)};
g.f.removeEventListener=function(a,b,c,d){g.rc(this,a,b,c,d)};
g.f.dispatchEvent=function(a){var b=this.Bi();if(b){var c=[];for(var d=1;b;b=b.Bi())c.push(b),++d}b=this.xv;d=a.type||a;if(g.ma(a))a=new g.Bb(a,b);else if(a instanceof g.Bb)a.target=a.target||b;else{var e=a;a=new g.Bb(d,b);g.Pb(a,e)}var e=!0;if(c)for(var h=c.length-1;!a.F&&0<=h;h--){var k=a.currentTarget=c[h];e=yc(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=yc(k,d,!0,a)&&e,a.F||(e=yc(k,d,!1,a)&&e));if(c)for(h=0;!a.F&&h<c.length;h++)k=a.currentTarget=c[h],e=yc(k,d,!1,a)&&e;return e};
g.f.Y=function(){g.xc.M.Y.call(this);this.removeAllListeners();this.Yl=null};
g.f.R=function(a,b,c,d){return g.hc(this.wd,String(a),b,!1,c,d)};
g.f.oe=g.ba(10);g.f.Wa=function(a,b,c,d){return this.wd.remove(String(a),b,c,d)};
g.f.removeAllListeners=function(a){return this.wd?this.wd.removeAll(a):0};
g.f.gg=g.ba(7);g.f.kf=function(a,b,c,d){return this.wd.kf(String(a),b,c,d)};
g.f.hasListener=function(a,b){return this.wd.hasListener(g.la(a)?String(a):void 0,b)};zc.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};g.dk=g.Bc(null);var Lc;var Ic=new zc(function(){return new Ec},function(a){a.reset()},100);
Dc.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
Ec.prototype.set=function(a,b){this.mc=a;this.scope=b;this.next=null};
Ec.prototype.reset=function(){this.next=this.scope=this.mc=null};var Fc,Gc=!1,Hc=new Dc;Qc.prototype.reset=function(){this.context=this.F=this.D=this.C=null;this.G=!1};
var Rc=new zc(function(){return new Qc},function(a){a.reset()},100);
g.Pc.prototype.then=function(a,b,c){return Vc(this,g.ua(a)?a:null,g.ua(b)?b:null,c)};
g.Mc(g.Pc);g.Pc.prototype.cancel=function(a){0==this.C&&Jc(function(){var b=new g.bd(a);Xc(this,b)},this)};
g.Pc.prototype.W=function(a){this.C=0;g.Oc(this,2,a)};
g.Pc.prototype.N=function(a){this.C=0;g.Oc(this,3,a)};
g.Pc.prototype.J=function(){for(var a;a=Yc(this);)Zc(this,a,this.C,this.O);this.K=!1};
var dd=Cc;g.v(g.bd,g.Fa);g.bd.prototype.name="cancel";g.v(g.gd,g.wb);g.f=g.gd.prototype;g.f.wb=0;g.f.Y=function(){g.gd.M.Y.call(this);this.stop();delete this.C;delete this.F};
g.f.start=function(a){this.stop();this.wb=g.ed(this.wc,g.la(a)?a:this.D)};
g.f.stop=function(){this.isActive()&&g.fd(this.wb);this.wb=0};
g.f.isActive=function(){return 0!=this.wb};
g.f.Jk=function(){this.wb=0;this.C&&this.C.call(this.F)};g.$h=g.Db("Firefox");g.ek=Tb()||g.Db("iPod");g.fk=g.Db("iPad");g.Cj=g.Db("Android")&&!(g.Rb()||g.Db("Firefox")||g.Db("Opera")||g.Db("Silk"));g.Bj=g.Rb();g.gk=g.Sb()&&!g.Ub();var Xaa;Xaa=!g.A||g.ac(9);g.Cca=!g.Rj&&!g.A||g.A&&g.ac(9)||g.Rj&&g.Zb("1.9.1");g.hk=g.A&&!g.Zb("9");g.Dca=g.A||g.Oj||g.Md;g.kd.prototype.Je=!0;g.kd.prototype.ce=function(){return this.C};
g.kd.prototype.toString=function(){return"Const{"+this.C+"}"};
g.jd={};g.ld("");g.nd.prototype.Je=!0;g.md={};g.nd.prototype.ce=function(){return this.C};
g.ik=g.od("");g.Eca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Fca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.jk=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");g.qd.prototype.Je=!0;g.qd.prototype.ce=function(){return this.C};
g.qd.prototype.ll=!0;g.qd.prototype.Fe=g.ba(12);var Waa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,pd={};g.sd("about:blank");g.vd.prototype.ll=!0;g.vd.prototype.Fe=g.ba(11);g.vd.prototype.Je=!0;g.vd.prototype.ce=function(){return this.C};
g.ud={};g.Gca=g.wd("<!DOCTYPE html>",0);g.kk=g.wd("",0);g.lk=g.wd("<br>",0);g.f=g.Bd.prototype;g.f.clone=function(){return new g.Bd(this.x,this.y)};
g.f.equals=function(a){return a instanceof g.Bd&&g.Cd(this,a)};
g.f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.f.translate=function(a,b){a instanceof g.Bd?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.oa(b)&&(this.y+=b));return this};
g.f.scale=function(a,b){var c=g.oa(b)?b:a;this.x*=a;this.y*=c;return this};g.f=g.Dd.prototype;g.f.clone=function(){return new g.Dd(this.width,this.height)};
g.f.Yf=function(){return this.width*this.height};
g.f.aspectRatio=function(){return this.width/this.height};
g.f.isEmpty=function(){return!this.Yf()};
g.f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.scale=function(a,b){var c=g.oa(b)?b:a;this.width*=a;this.height*=c;return this};var Fd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.Yd="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.Xd.prototype.next=function(){throw g.Yd;};
g.Xd.prototype.dd=function(){return this};ce.prototype.Gj=function(a){var b=[];fe(this,a,b);return b.join("")};
var he={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},bba=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;g.f=g.ie.prototype;g.f.getWidth=function(){return this.right-this.left};
g.f.getHeight=function(){return this.bottom-this.top};
g.f.clone=function(){return new g.ie(this.top,this.right,this.bottom,this.left)};
g.f.contains=function(a){return g.je(this,a)};
g.f.expand=function(a,b,c,d){g.va(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};
g.f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.f.translate=function(a,b){a instanceof g.Bd?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,g.oa(b)&&(this.top+=b,this.bottom+=b));return this};
g.f.scale=function(a,b){var c=g.oa(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};g.f=g.ke.prototype;g.f.clone=function(){return new g.ke(this.left,this.top,this.width,this.height)};
g.f.contains=function(a){return a instanceof g.Bd?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.f.translate=function(a,b){a instanceof g.Bd?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.oa(b)&&(this.top+=b));return this};
g.f.scale=function(a,b){var c=g.oa(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.v(g.ne,g.wb);g.f=g.ne.prototype;g.f.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.f.qd=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.pa):(c&&g.Xa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.f.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,h=arguments.length;e<h;e++)d[e-1]=arguments[e];if(this.K)for(e=0;e<c.length;e++){var k=c[e];cba(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,h=c.length;e<h;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;k=this.D.pop();)this.qd(k)}}return 0!=e}return!1};
g.f.clear=function(a){if(a){var b=this.F[a];b&&((0,g.x)(b,this.qd,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.f.Bb=g.ba(4);g.f.Y=function(){g.ne.M.Y.call(this);this.clear();this.D.length=0};g.pe.prototype.set=function(a,b){g.la(b)?this.C.set(a,g.de(b)):this.C.remove(a)};
g.pe.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return g.be(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.pe.prototype.remove=function(a){this.C.remove(a)};g.v(qe,g.pe);qe.prototype.set=function(a,b){qe.M.set.call(this,a,se(b))};
qe.prototype.F=function(a){a=qe.M.get.call(this,a);if(!g.la(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
qe.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.la(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.te,qe);g.te.prototype.set=function(a,b,c){if(b=se(b)){if(c){if(c<(0,g.ue)()){g.te.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.ue)()}g.te.M.set.call(this,a,b)};
g.te.prototype.F=function(a,b){var c=g.te.M.F.call(this,a);if(c)if(!b&&g.ve(c))g.te.prototype.remove.call(this,a);else return c};g.v(g.we,g.te);g.v(g.xe,dba);g.xe.prototype.Bb=g.ba(3);g.xe.prototype.clear=function(){var a=aba(this.dd(!0)),b=this;(0,g.x)(a,function(a){b.remove(a)})};g.v(g.ye,g.xe);g.f=g.ye.prototype;g.f.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.f.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.f.get=function(a){a=this.C.getItem(a);if(!g.ma(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.f.remove=function(a){this.C.removeItem(a)};
g.f.Bb=g.ba(2);g.f.dd=function(a){var b=0,c=this.C,d=new g.Xd;d.next=function(){if(b>=c.length)throw g.Yd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.ma(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.f.clear=function(){this.C.clear()};
g.f.key=function(a){return this.C.key(a)};g.v(g.ze,g.ye);g.v(Ae,g.ye);g.mk=g.Rj?"MozUserSelect":g.Md||g.Pj?"WebkitUserSelect":null;g.Ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.ug=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.If="Microsoft Internet Explorer"==window.navigator.appName;g.Pe=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.n("yt.config_",g.Pe,void 0);var Xe={};var Hca=g.q("ytPubsubPubsubInstance")||new g.ne;g.ne.prototype.subscribe=g.ne.prototype.subscribe;g.ne.prototype.unsubscribeByKey=g.ne.prototype.qd;g.ne.prototype.publish=g.ne.prototype.oa;g.ne.prototype.clear=g.ne.prototype.clear;g.n("ytPubsubPubsubInstance",Hca,void 0);var cf=g.q("ytPubsubPubsubSubscribedKeys")||{};g.n("ytPubsubPubsubSubscribedKeys",cf,void 0);var ef=g.q("ytPubsubPubsubTopicToKeys")||{};g.n("ytPubsubPubsubTopicToKeys",ef,void 0);var df=g.q("ytPubsubPubsubIsSynchronous")||{};
g.n("ytPubsubPubsubIsSynchronous",df,void 0);var fba=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,gba=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.kf=null;(0,g.ue)();var Ica=0,hba=g.Md?"webkit":g.Rj?"moz":g.A?"ms":g.Oj?"o":"",vf=g.q("ytDomDomGetNextId")||function(){return++Ica};
g.n("ytDomDomGetNextId",vf,void 0);var iba={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.xf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.xf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.xf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var yf=g.q("ytEventsEventsListeners")||{};g.n("ytEventsEventsListeners",yf,void 0);var Af=g.q("ytEventsEventsCounter")||{count:0};g.n("ytEventsEventsCounter",Af,void 0);g.ca(Df,g.wb);Df.prototype.Wa=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.ze);break}};
Df.prototype.Y=function(){Ff(this);g.wb.prototype.Y.call(this)};var jba={enablejsapi:1},kba={},lba={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};Gf.prototype.clone=function(){var a=new Gf,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.ra(c)?a[b]=g.Nb(c):a[b]=c}return a};g.qa(g.Jf);g.Jf.prototype.getVersion=function(){return[this.major,this.minor,this.C]};
g.Jf.prototype.isSupported=function(a,b,c){a="string"==typeof a?a.split("."):[a,b,c];a[0]=(0,window.parseInt)(a[0],10)||0;a[1]=(0,window.parseInt)(a[1],10)||0;a[2]=(0,window.parseInt)(a[2],10)||0;return this.major>a[0]||this.major==a[0]&&this.minor>a[1]||this.major==a[0]&&this.minor==a[1]&&this.C>=a[2]};g.Mf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.n("yt.msgs_",g.Mf,void 0);var Xf=g.la(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.la(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var Zf;Zf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};g.nk=ag;var eg=0,fg={};var qba,vg,kg;qba={log_event:"events",log_interaction:"interactions"};vg=Object.create(null);vg.log_event="GENERIC_EVENT_LOGGING";vg.log_interaction="INTERACTION_LOGGING";g.sg={};kg={};g.qg=0;g.rg=g.q("ytLoggingTransportLogPayloadsQueue_")||{};g.n("ytLoggingTransportLogPayloadsQueue_",g.rg,void 0);var lg=g.q("ytLoggingTransportTokensToCttTargetIds_")||{};g.n("ytLoggingTransportTokensToCttTargetIds_",lg,void 0);var tg=g.q("ytLoggingTransportDispatchedStats_")||{};
g.n("ytLoggingTransportDispatchedStats_",tg,void 0);var wg=g.q("ytLoggingTransportCapturedTime_")||{};g.n("ytytLoggingTransportCapturedTime_",wg,void 0);var Li=yg;g.Gg.prototype.G=function(){var a=g.q("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);a("googleapis.config/auth/useFirstPartyAuthV2",!0);var b=this.D.apiaryHost;g.Ia(g.Ma(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.D.Iv;g.Ia(g.Ma(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=g.B("SESSION_INDEX");a("googleapis.config/sessionIndex",b);g.q("gapi.client.setApiKey")(this.D.innertubeApiKey)};
g.Gg.prototype.C=function(){return{context:Cg(this.D)}};
g.Gg.prototype.F=function(a,b,c){var d,e=!1;0<c.timeout&&(d=g.af(function(){e||(e=!0,c.dc&&c.dc())},c.timeout));
tba(this,a,b,function(a){if(!e)if(e=!0,d&&g.Ze(d),a)c.Z&&c.Z(a);else if(c.onError)c.onError()})};
var Fg=null;g.Hg.prototype.C=function(){return{context:Cg(this.D)}};
g.Hg.prototype.F=function(a,b,c){!g.B("VISITOR_DATA")&&.01>Math.random()&&g.Se(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.B("VISITOR_DATA","")},ka:b,gs:"JSON",dc:c.dc,Z:function(a,b){c.Z&&c.Z(b)},
onError:function(a,b){if(c.onError)c.onError(b)},
timeout:c.timeout,withCredentials:!0},e=vaa();e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=g.B("SESSION_INDEX",0));var h=this.D.xhrApiaryHost;h&&!h.startsWith("http")&&(h="//"+h);g.Ve("youtubei_for_web")&&(h="");var k=this.D.yB;k&&(h=k);e&&!h&&(d.headers["x-origin"]=window.location.origin);g.dg(""+h+Eg(this.D.innertubeApiVersion,a,b)+"?alt=json&key="+this.D.innertubeApiKey,d)};var Mg=g.q("ytLoggingLatencyUsageStats_")||{};g.n("ytLoggingLatencyUsageStats_",Mg,void 0);var Ng=0;var ok,pk;ok=new g.ze;g.Pg=ok.isAvailable()?new g.we(ok):null;pk=new Ae;g.Og=pk.isAvailable()?new g.we(pk):null;g.f=g.Tg.prototype;g.f.pL=function(){this.Yi()||this.init()};
g.f.enable=function(){this.C=1;(0,g.x)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.pL,this),this.subscribe("dispose-"+a,this.dispose,this),g.B("PAGE_NAME")==a&&g.Ug(this))},this)};
g.f.init=function(){g.qf(this.F);this.C=2;this.K&&this.K()};
g.f.Yi=function(){return 2==this.C};
g.f.dispose=function(){this.C=3;g.qf(this.F);this.H&&this.H()};
g.f.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Se(a)}};
g.f.subscribe=function(a,b,c){a=g.D(a,b,c);this.G.push(a);return a};
g.f.clear=function(){g.ff(this.G);this.G=[]};var Vg=g.q("yt.modules.registry_")||{};g.n("yt.modules.registry_",Vg,void 0);var ah={},wba=0;var xba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Jca=g.q("yt.abuse.botguardInitialized")||lf;g.n("yt.abuse.botguardInitialized",Jca,void 0);var Kca=g.q("yt.abuse.invokeBotguard")||g.mf;g.n("yt.abuse.invokeBotguard",Kca,void 0);var Lca=g.q("yt.abuse.dclkstatus.checkDclkStatus")||sf;g.n("yt.abuse.dclkstatus.checkDclkStatus",Lca,void 0);var Mca=g.q("yt.player.exports.navigate")||g.hh;g.n("yt.player.exports.navigate",Mca,void 0);var Nca=g.q("yt.util.activity.init")||g.zg;g.n("yt.util.activity.init",Nca,void 0);
var Oca=g.q("yt.util.activity.getTimeSinceActive")||g.Ag;g.n("yt.util.activity.getTimeSinceActive",Oca,void 0);var Pca=g.q("yt.util.activity.setTimestamp")||Li;g.n("yt.util.activity.setTimestamp",Pca,void 0);var qk={},Lba=(qk["api.invalidparam"]=2,qk.auth=150,qk["drm.auth"]=150,qk["heartbeat.net"]=150,qk["heartbeat.servererror"]=150,qk["heartbeat.stop"]=150,qk["html5.unsupportedads"]=5,qk["fmt.noneavailable"]=5,qk["fmt.decode"]=5,qk["fmt.unplayable"]=5,qk["html5.missingapi"]=5,qk["html5.unsupportedlive"]=5,qk["drm.unavailable"]=5,qk);var ii;var rk=g.Cb,rk=rk.toLowerCase();if(-1!=rk.indexOf("android")){var sk=rk.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(sk)ii=Number(sk[1]);else{var tk={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},uk=rk.match("("+g.Gb(tk).join("|")+")");ii=uk?tk[uk[0]]:0}}else ii=void 0;var Nba=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Oba=['audio/mp4; codecs="mp4a.40.2"'];g.ih.prototype.Gj=function(){return{version:this.version,args:this.args}};g.jh.prototype.toString=function(){return this.topic};var Qca=g.q("ytPubsub2Pubsub2Instance")||new g.ne;g.ne.prototype.subscribe=g.ne.prototype.subscribe;g.ne.prototype.unsubscribeByKey=g.ne.prototype.qd;g.ne.prototype.publish=g.ne.prototype.oa;g.ne.prototype.clear=g.ne.prototype.clear;g.n("ytPubsub2Pubsub2Instance",Qca,void 0);g.vk=g.q("ytPubsub2Pubsub2SubscribedKeys")||{};g.n("ytPubsub2Pubsub2SubscribedKeys",g.vk,void 0);g.wk=g.q("ytPubsub2Pubsub2TopicToKeys")||{};g.n("ytPubsub2Pubsub2TopicToKeys",g.wk,void 0);
g.xk=g.q("ytPubsub2Pubsub2IsAsync")||{};g.n("ytPubsub2Pubsub2IsAsync",g.xk,void 0);g.n("ytPubsub2Pubsub2SkipSubKey",null,void 0);var Bh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.v(mh,g.ih);var Eba=new g.jh("timing-sent",mh);ph.prototype.toString=function(){return this.region.toString()+": "+this.timing+" => "+this.url};
qh.prototype.toString=function(){return["progress",this.progress,"timing",this.timing,"area",this.Yf].join(": ")};
oh.F=.1;oh.C=/url\(["']?(http[^'"\)]+)['"]?\)/i;oh.D="mark_iframe_loaded: ";oh.G=20;var rh=(0,g.ue)().toString();var Cba={vc:!0},Uh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'link[rel="import"][name="desktop_polymer_selective_initialization_home"]':"dpsihh",'link[rel="import"][name="desktop_polymer_selective_initialization_watch"]':"dpsiwh",'script[name="mobile_polymer/mobile_polymer"]':"mpj",
'link[rel="import"][name="mobile_polymer"]':"mph",'script[name="player-plasma-phone/base"]':"mpppj",'script[name="player-plasma-tablet/base"]':"mpptj",'link[rel="stylesheet"][name="mobile-polymer-player"]':"mppc","#player_css":"mbpc","#player_js":"mbpj"},Sh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId",fmt:"playerInfo.itag"},
Hba="ap c cver ei yt_fss yt_li GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid ad_allowed ad_cpn ad_docid ba c cmt cver ncnp nr p pa paused pc prerender psc rc srt st start vpil vpni vps yt_abt yt_ad_an yt_eil yt_fn yt_fs yt_hrd yt_li yt_pft yt_pl yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),Kba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",channels:"LATENCY_ACTION_CHANNELS","channel.analytics":"LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
"channel.videos":"LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH","video.analytics":"LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
"video.comments":"LATENCY_ACTION_CREATOR_VIDEO_COMMENTS"},Gba=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Aba=(0,g.r)(Bh.clearResourceTimings||Bh.webkitClearResourceTimings||Bh.mozClearResourceTimings||Bh.msClearResourceTimings||Bh.oClearResourceTimings||g.pa,Bh);g.v(ai,g.wb);var Mba=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g.f=ai.prototype;g.f.getId=function(){return this.ea};
g.f.Vm=function(a,b){this.ob()||(ci(this,a),gi(this,b),this.O&&di(this))};
g.f.Vw=function(){return this.Ab};
g.f.BM=function(){if(!this.na){var a=ji(this);if(a&&"html5"==li(this))this.W="html5",this.O||this.vg();else if(ni(this),this.W="html5",a&&this.H)this.G.appendChild(this.H),this.vg();else{this.C.loaded=!0;var b=!1;this.ma=(0,g.r)(function(){b=!0;var a=this.G,d=this.C.clone();g.q("yt.player.Application.create")(a,d);this.vg()},this);
this.na=!0;a?this.ma():(g.jf(this.C.assets.js,this.ma),g.bh(this.C.assets.css),mi(this)&&!b&&g.n("yt.player.Application.create",null,void 0))}}};
g.f.AM=function(){var a=this.C.clone();if(!this.K){var b=fi(this);b&&(this.K=g.Rd("SPAN"),this.K.tabIndex=0,Ef(this.ua,this.K,"focus",this.dr),this.N=g.Rd("SPAN"),this.N.tabIndex=0,Ef(this.ua,this.N,"focus",this.dr),g.Td(this.K,b),g.Ud(this.N,b))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";"flash"==li(this)?(this.W="flash",this.O||this.vg()):(ni(this),this.W="flash",this.C.loaded=!0,b=g.Jf.getInstance(),b=g.Kf(b)||!g.Lf(b)?a.url:a.urlV9As2,window!=window.top&&window.document.referrer&&
(a.args.framer=window.document.referrer.substring(0,128)),g.Uf(this.G,b,a),this.vg())};
g.f.dr=function(){fi(this).focus()};
g.f.vg=function(){if(!this.ob()){var a=fi(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(h){}if(b)if(this.na=!1,a.isNotServable&&a.isNotServable(this.C.args.video_id))hi(this);else{Zh(this);this.O=!0;a=fi(this);a.addEventListener&&(this.X=ki(this,a,"addEventListener"));a.removeEventListener&&(this.gb=ki(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=ki(this,a,d))}for(var e in this.D)this.X(e,
this.D[e]);di(this);this.ib&&this.ib(this.api);this.ia.oa("onReady",this.api)}else this.Tb=g.af((0,g.r)(this.vg,this),50)}};
g.f.PM=function(){return this.O};
g.f.Vd=function(a,b){if(!this.ob()){var c=bi(this,b);if(c){if(!g.Ua(this.fc,a)&&!this.D[a]){var d=Pba(this,a);this.X&&this.X(a,d)}this.ia.subscribe(a,c);"onReady"==a&&this.O&&g.af(g.u(c,this.api),0)}}};
g.f.bL=function(a,b){if(!this.ob()){var c=bi(this,b);c&&g.oe(this.ia,a,c)}};
g.f.Uv=function(a){a=a?$aa:Zaa;for(var b=a(window.document.activeElement);b&&(1!=b.nodeType||b==this.K||b==this.N||(b.focus(),b!=window.document.activeElement));)b=a(b)};
g.f.un=function(a){g.F("a11y-announce",a)};
g.f.AG=function(a){hi(this,a)};
g.f.EG=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.f.FG=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.f.mG=function(){this.Cc||(g.Bj?(this.qb=g.Ld(window.document),Ef(this.V,window,"scroll",this.ZI),Ef(this.V,this.G,"touchmove",this.uI)):(Ef(this.V,this.G,"mousewheel",this.yr),Ef(this.V,this.G,"wheel",this.yr)),this.Cc=!0)};
g.f.nG=function(){Ff(this.V);this.Cc=!1};
g.f.yr=function(a){g.Bf(a)};
g.f.ZI=function(){window.scrollTo(this.qb.x,this.qb.y)};
g.f.uI=function(a){a.preventDefault()};
g.f.Mx=function(){return this.W||li(this)};
g.f.tx=function(){return this.Xc};
g.f.cancel=function(){if(this.ma){var a=this.ma,b=g.hf(this.C.assets.js);window.spf.script.ignore(b,a)}g.Ze(this.Tb);this.na=!1};
g.f.Y=function(){ni(this);if(this.H&&this.C&&this.H.destroy)try{this.H.destroy()}catch(b){g.Se(b)}this.nb=null;for(var a in this.D)g.m[this.D[a]]=null;this.Ab=this.C=this.api=null;delete this.G;delete this.J;ai.M.Y.call(this)};g.pi={};g.oi="player_uid_"+(1E9*Math.random()>>>0);var vi=null;g.yk=window.performance&&window.performance.memory;g.lj={};var Gi=0,Hi=0,Ii=[],Fi=[],Ei=0,xi={},Ci={},wi=new g.gd(Xba,1E3);var Ni,Si;g.Ri=null;Si="";var Ti=null,Wi=[];var $i,rj,qj,bj,aj,kca,dca,gca,eca,fca,mj;bj=0;aj=0;kca=["server_prefetched_vast","vmap"];dca=[900,60,"waiting"];gca=[500,99,"waiting"];eca=[300,60,"waiting"];fca=[400,99,"waiting"];mj=[300,101,"done"];window.yt=window.yt||{};g.n("yt.setConfig",g.Qe,void 0);g.n("yt.pushConfigArray",Re,void 0);g.n("yt.getConfig",g.B,void 0);g.n("yt.config.set",g.Qe,void 0);g.n("yt.config.pushArray",Re,void 0);g.n("yt.config.get",g.B,void 0);g.n("yt.hasMsg",g.Nf,void 0);g.n("yt.setMsg",Of,void 0);g.n("yt.setGoogMsg",Pf,void 0);g.n("yt.msgs.has",g.Nf,void 0);g.n("yt.msgs.set",Of,void 0);g.n("yt.msgs.setGoog",Pf,void 0);g.n("yt.pubsub.publish",g.F,void 0);g.n("yt.pubsub.subscribe",g.D,void 0);
g.n("ytcsi.tick",g.Ah,void 0);g.v(Gj,g.Tg);
Gj.prototype.enable=function(){window.onload=bca;window.onunload=cca;window.onerror=eba;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Yi),window.addEventListener("spfhistory",Zi),window.addEventListener("spfrequest",dj),window.addEventListener("spfpartprocess",hj),window.addEventListener("spfpartdone",ij),window.addEventListener("spfprocess",jj),window.addEventListener("spfdone",nj),window.addEventListener("spferror",oj),window.addEventListener("spfreload",
pj),window.addEventListener("spfjsbeforeunload",Hj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",ica),this.subscribe("dispose",jca)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
Gj.prototype.init=function(){Gj.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.B("PAGEFRAME_JS")){var b=g.B("PAGEFRAME_JS",void 0);var c=function(){var a=g.q("ytbin.www.pageframe.setup");a&&(window.ytPageFrameLoaded=!0,a())}}else a&&(a=g.q("yt.www.masthead.loadSearchbox"))&&a();
var a=g.B("JS_COMMON_MODULE"),d=g.B("JS_PAGE_MODULES");d||(d=[a]);a=g.B("JS_DELAY_LOAD",0);0<a?(g.Ze(this.D),this.D=g.af(function(){b&&g.jf(b,c);window.spf.script.require(d)},a)):(b&&g.jf(b,c),window.spf.script.require(d));
$ba();Oh();Fba();Xh(!0);g.zh(!1);g.B("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&"https:"==window.location.protocol&&(g.Ve("service_worker_enabled")?uca():sca())};
Gj.prototype.dispose=function(){g.Ze(this.D);var a=g.q("ytbin.www.pageframe.cancelSetup");a&&a();g.Ye(Ni);if(a=g.Pi())a.removeEventListener("onReady",Oi),a.removeEventListener("onStateChange",Oi);Xh(!1);(a=Aj())&&g.Cf(a);Gj.M.dispose.call(this)};
Gj.prototype.disable=function(){Gj.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Yi),window.removeEventListener("spfhistory",Zi),window.removeEventListener("spfrequest",dj),window.removeEventListener("spfpartprocess",hj),window.removeEventListener("spfpartdone",ij),window.removeEventListener("spfprocess",jj),window.removeEventListener("spfdone",nj),window.removeEventListener("spferror",oj),window.removeEventListener("spfreload",pj),window.removeEventListener("spfjsbeforeunload",
Hj));window.onload=null;window.onunload=null;window.onerror=null};
g.Xg(new Gj);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:03:21 Jun 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:26:37 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 133.236
  exclusion.robots: 0.121
  exclusion.robots.policy: 0.107
  cdx.remote: 0.084
  esindex: 0.013
  LoadShardBlock: 32.858 (3)
  PetaboxLoader3.datanode: 96.043 (5)
  load_resource: 167.33 (2)
  PetaboxLoader3.resolve: 71.1 (2)
*/