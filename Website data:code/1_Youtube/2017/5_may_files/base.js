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

var _yt_www={};(function(g){var window=this;var ca,aaa,ga,fa,caa,ia,eaa,faa,za,gaa,Aa,haa,iaa,Ba,Da,laa,Ea,maa,Ma,uaa,Ya,vaa,cb,ab,db,Aaa,Daa,Baa,fb,hb,Haa,ib,mb,Iaa,nb,Jaa,Kaa,rb,pb,Rb,Maa,Vb,Oaa,cc,gc,ec,Paa,mc,tc,sc,Qaa,wc,xc,yc,Ac,Raa,Bc,Cc,Hc,Saa,Ic,Oc,Qc,Taa,Vc,Zc,Tc,Rc,Vaa,Yc,Wc,Xc,ad,Uaa,Zaa,$aa,Yaa,Xd,aba,be,de,ee,cba,oe,pe,qe,dba,ye,Ke,Ne,Qe,eba,We,af,lf,sf,Df,Lf,Mf,mba,nba,oba,pba,Yf,Wf,Vf,hg,pg,yg,xg,rba,Jg,sba,Qg,Rg,Wg,Xg,Yg,ch,eh,dh,vba,wba,fh,gh,jh,kh,sh,rh,vh,wh,xh,yba,Ah,Eh,Cba,mh,uh,Dh,Ih,Fba,Gba,Ch,Kh,Gh,lh,th,Fh,Lh,hh,zh,
ih,Aba,Ph,Rh,Sh,Th,Wh,Vh,Yh,Uh,Zh,Nh,Qh,Mba,$h,bi,ai,Nba,Tba,Sba,Rba,ii,Qba,Oba,Pba,Uba,Vba,ui,wi,yi,Ci,Wba,Di,Gi,Xba,Yba,Hi,Ii,Ni,Ri,Si,Ti,Xi,Yi,Zi,dca,eca,Oi,Qi,Mi,cca,Pi,cj,dj,bj,gca,gj,ij,fj,hca,hj,ica,lca,mj,kca,jca,jj,nj,kj,lj,mca,oca,qca,pca,nca,sj,tj,uj,ea,da,baa,va,daa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(){ca=function(){};
da.Symbol||(da.Symbol=aaa)};
aaa=function(a){return"jscomp_symbol_"+(a||"")+baa++};
ga=function(){ca();var a=da.Symbol.iterator;a||(a=da.Symbol.iterator=da.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ea(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});
ga=function(){}};
fa=function(a){var b=0;return caa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
caa=function(a){ga();a={next:a};a[da.Symbol.iterator]=function(){return this};
return a};
g.ha=function(a){ga();var b=a[window.Symbol.iterator];return b?b.call(a):fa(a)};
ia=function(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ea(c,d,{configurable:!0,writable:!0,value:f})}};
g.ja=function(a){return void 0!==a};
g.n=function(a,b,c){a=a.split(".");c=c||g.m;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&g.ja(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};
g.r=function(a,b){for(var c=a.split("."),d=b||g.m,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d};
g.la=function(){};
g.ma=function(a){a.uc=void 0;a.getInstance=function(){return a.uc?a.uc:a.uc=new a}};
g.oa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.pa=function(a){return"array"==g.oa(a)};
g.qa=function(a){var b=g.oa(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.ra=function(a){return"string"==typeof a};
g.sa=function(a){return"number"==typeof a};
g.ta=function(a){return"function"==g.oa(a)};
g.ua=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.xa=function(a){return a[va]||(a[va]=++daa)};
eaa=function(a,b,c){return a.call.apply(a.bind,arguments)};
faa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};
g.t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.t=eaa:g.t=faa;return g.t.apply(null,arguments)};
g.u=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};
g.ya=function(a,b){g.n(a,b,void 0)};
g.v=function(a,b){function c(){}
c.prototype=b.prototype;a.M=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.KU=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};
za=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
gaa=function(){};
Aa=function(a,b,c){return a[b]=a[b]||c};
haa=function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1};
iaa=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b};
Ba=function(){var a;if((a=Object.create)&&jaa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a};
Da=function(){var a=kaa.href;if(Ca.dpo)var b=Ca.h;else{b=Ca.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=(0,window.decodeURIComponent)(a[2])}catch(e){}}return b};
laa=function(a){var b=Aa(Ca,"PQ",[]);Ca.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)};
Ea=function(a){return Aa(Aa(Ca,"H",Ba()),a,Ba())};
maa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=q=0}
function b(a){for(var b=k,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],l=e[3],p=e[4],q,w,c=0;80>c;c++)40>c?20>c?(q=l^d&(f^l),w=1518500249):(q=d^f^l,w=1859775393):60>c?(q=d&f|l&(d|f),w=2400959708):(q=d^f^l,w=3395469782),q=((a<<5|a>>>27)&4294967295)+q+p+w+b[c]&4294967295,p=l,l=f,f=(d<<30|d>>>2)&4294967295,d=a,a=q;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+l&4294967295;e[4]=e[4]+p&4294967295}
function c(a,c){if("string"===typeof a){a=(0,window.unescape)((0,window.encodeURIComponent)(a));for(var d=[],e=0,k=a.length;e<k;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==q)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[q++]=a[d++],w++,64==q)for(q=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>q?c(l,56-q):c(l,64-(q-56));for(var k=63;56<=k;k--)f[k]=d&255,d>>>=8;b(f);for(k=d=0;5>k;k++)for(var p=24;0<=p;p-=8)a[d++]=e[k]>>p&255;return a}
for(var e=[],f=[],k=[],l=[128],p=1;64>p;++p)l[p]=0;var q,w;a();return{reset:a,update:c,digest:d,Ju:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}};
g.Fa=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Fa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ga=function(a,b){return 0==a.lastIndexOf(b,0)};
g.Ha=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.Ia=function(a){return(0,window.encodeURIComponent)(String(a))};
g.Ja=function(a){return(0,window.decodeURIComponent)(a.replace(/\+/g," "))};
g.Ka=function(a){if(!naa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(oaa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(paa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qaa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(raa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(saa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(taa,"&#0;"));return a};
g.Na=function(a,b){for(var c=0,d=(0,g.La)(String(a)).split("."),e=(0,g.La)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",p=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];p=/(\d*)(\D*)(.*)/.exec(p)||["","","",""];if(0==l[0].length&&0==p[0].length)break;c=Ma(0==l[1].length?0:(0,window.parseInt)(l[1],10),0==p[1].length?0:(0,window.parseInt)(p[1],10))||Ma(0==l[2].length,0==p[2].length)||Ma(l[2],p[2]);l=l[3];p=p[3]}while(0==c)}return c};
Ma=function(a,b){return a<b?-1:a>b?1:0};
g.Oa=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.Qa=function(a,b,c){b=g.Pa(a,b,c);return 0>b?null:g.ra(a)?a.charAt(b):a[b]};
g.Pa=function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Sa=function(a,b){return 0<=(0,g.Ra)(a,b)};
g.Ta=function(a){return 0==a.length};
g.Va=function(a,b){var c=(0,g.Ra)(a,b),d;(d=0<=c)&&g.Ua(a,c);return d};
g.Ua=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Wa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Xa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
uaa=function(a,b,c){var d=[],e=[];if(1==(g.pa(c)?2:1))return e=[b,a],(0,g.x)(d,function(a){e.push(a)}),Ya(e.join(" "));
var f=[],k=[];(0,g.x)(c,function(a){k.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Ta(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.x)(d,function(a){e.push(a)});
a=Ya(e.join(" "));a=[c,a];g.Ta(k)||a.push(k.join(""));return a.join("_")};
Ya=function(a){var b=maa();b.update(a);return b.Ju().toLowerCase()};
g.Za=function(a){this.C=a||{cookie:""}};
g.$a=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.La)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
vaa=function(){var a=[],b=za(String(g.m.location.href)),c=g.m.__OVERRIDE_SID;null==c&&(c=(new g.Za(window.document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.m.__SAPISID:g.m.__APISID,null==b&&(b=(new g.Za(window.document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(g.m.location.href);return d&&b&&c?[c,uaa(za(d),b,a||null)].join(" "):null}return null};
cb=function(a,b,c){b&&0<b.length&&(b=ab(b),c&&0<c.length&&(b+="___"+ab(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=Aa(waa,"_p",Ba()),Aa(b,c,Ba())[a]=(new Date).getTime(),b=bb.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))};
ab=function(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")};
db=function(a){throw Error("Bad hint"+(a?": "+a:""));};
Aaa=function(a,b,c,d){var e=a.split(";"),f=e.shift(),k=eb[f],l=null;k?l=k(e,b,c,d):db("no hint processor for: "+f);l||db("failed to generate load url");b=l;c=b.match(xaa);(d=b.match(yaa))&&1===d.length&&zaa.test(b)&&c&&1===c.length||db("failed sanity: "+a);return l};
Daa=function(a,b,c,d){function e(a){return(0,window.encodeURIComponent)(a).replace(/%2C/g,",")}
a=Baa(a);Caa.test(c)||db("invalid_callback");b=fb(b);d=d&&d.length?fb(d):null;return[(0,window.encodeURIComponent)(a.yH).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.jm?"/am="+e(a.jm):"",a.er?"/rs="+e(a.er):"",a.Ts?"/t="+e(a.Ts):"","/cb=",e(c)].join("")};
Baa=function(a){"/"!==a.charAt(0)&&db("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))db("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),k=(0,window.decodeURIComponent)(f[0]),l=(0,window.decodeURIComponent)(f[1]);2==f.length&&k&&l&&(a[k]=a[k]||l)}b="/"+c.join("/");Eaa.test(b)||db("invalid_prefix");c=0;for(d=gb.length;c<d;++c)gb[c].test(b)&&
db("invalid_prefix");c=hb(a,"k",!0);d=hb(a,"am");e=hb(a,"rs");a=hb(a,"t");return{yH:b,version:c,jm:d,er:e,Ts:a}};
fb=function(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Faa.test(e)&&b.push(e)}return b.join(",")};
hb=function(a,b,c){a=a[b];!a&&c&&db("missing: "+b);if(a){if(Gaa.test(a))return a;db("invalid: "+b)}return null};
Haa=function(){var a=Da();if(!a)throw Error("Bad hint");return a};
ib=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>haa.call(b,e)&&c.push(e)}return c};
mb=function(){var a=Ca.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(jb)?a:Ca.nonce=null;var b=Aa(Ca,"us",[]);if(!b||!b.length)return Ca.nonce=null;for(var c=kb.getElementsByTagName(lb),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var k=0,l=b.length;k<l&&b[k]!==f.src;++k);if(k!==l&&a&&a===String(a)&&a.match(jb))return Ca.nonce=a}}return null};
Iaa=function(a){if("loading"!=kb.readyState)nb(a);else{var b=mb(),c="";null!==b&&(c=' nonce="'+b+'"');kb.write("<"+lb+' src="'+(0,window.encodeURI)(a)+'"'+c+"></"+lb+">")}};
nb=function(a){var b=kb.createElement(lb);b.setAttribute("src",a);a=mb();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=kb.getElementsByTagName(lb)[0])?a.parentNode.insertBefore(b,a):(kb.head||kb.body||kb.documentElement).appendChild(b)};
Jaa=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<ob.length;d++){var e=ob[d][0],f=ob[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}};
Kaa=function(a,b,c){pb(function(){var c=b===Da()?Aa(qb,"_",Ba()):Ba();c=Aa(Ea(b),"_",c);a(c)},c)};
g.sb=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Jaa(a,c);var d=a?a.split(":"):[],e=c.h||Haa(),f=Aa(Ca,"ah",Ba());if(f["::"]&&d.length){for(var k=[],l=null;l=d.shift();){var p=l.split("."),p=f[l]||f[p[1]&&"ns:"+p[0]||""]||e,q=k.length&&k[k.length-1]||null,w=q;q&&q.hint==p||(w={hint:p,features:[]},k.push(w));w.features.push(l)}var B=k.length;if(1<B){var M=c.callback;M&&(c.callback=function(){0==--B&&M()})}for(;d=k.shift();)rb(d.features,c,d.hint)}else rb(d||[],c,e)};
rb=function(a,b,c){function d(a,b){if(B)return 0;tb.clearTimeout(w);M.push.apply(M,T);var d=((qb||{}).config||{}).update;d?d(f):f&&Aa(Ca,"cu",[]).push(f);if(b){cb("me0",a,R);try{Kaa(b,c,q)}finally{cb("me1",a,R)}}return 1}
a=iaa(a)||[];var e=b.callback,f=b.config,k=b.timeout,l=b.ontimeout,p=b.onerror,q=void 0;"function"==typeof p&&(q=p);var w=null,B=!1;if(k&&!l||!k&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var p=Aa(Ea(c),"r",[]).sort(),M=Aa(Ea(c),"L",[]).sort(),R=[].concat(p);0<k&&(w=tb.setTimeout(function(){B=!0;l()},k));
var T=ib(a,M);if(T.length){var T=ib(a,p),na=Aa(Ca,"CP",[]),wa=na.length;na[wa]=function(a){function b(){var a=na[wa+1];a&&a()}
function c(b){na[wa]=null;d(T,a)&&laa(function(){e&&e();b()})}
if(!a)return 0;cb("ml1",T,R);0<wa&&na[wa-1]?na[wa]=function(){c(b)}:c(b)};
if(T.length){var zb="loaded_"+Ca.I++;qb[zb]=function(a){na[wa](a);qb[zb]=null};
a=Aaa(c,T,"gapi."+zb,p);p.push.apply(p,T);cb("ml0",T,R);b.sync||tb.___gapisync?Iaa(a):nb(a)}else na[wa](gaa)}else d(T)&&e&&e()};
pb=function(a,b){if(Ca.hee&&0<Ca.hel)try{return a()}catch(c){b&&b(c),Ca.hel--,g.sb("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}};
g.vb=function(){this.ec=this.ec;this.Fb=this.Fb};
g.yb=function(a,b){g.wb(a,g.u(g.xb,b))};
g.wb=function(a,b){a.ec?g.ja(void 0)?b.call(void 0):b():(a.Fb||(a.Fb=[]),a.Fb.push(g.ja(void 0)?(0,g.t)(b,void 0):b))};
g.xb=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Ab=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1;this.ir=!0};
g.Cb=function(a){return-1!=g.Bb.indexOf(a)};
g.Db=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Eb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Fb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.Gb=function(a,b){return null!==a&&b in a};
g.Hb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.Ib=function(a){for(var b in a)return!1;return!0};
g.Jb=function(a,b){b in a&&delete a[b]};
g.Kb=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.Lb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.Nb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Mb.length;f++)c=Mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.Ob=function(){return g.Cb("Trident")||g.Cb("MSIE")};
g.Qb=function(){return g.Cb("Safari")&&!(g.Pb()||g.Cb("Coast")||g.Cb("Opera")||g.Cb("Edge")||g.Cb("Silk")||g.Cb("Android"))};
g.Pb=function(){return(g.Cb("Chrome")||g.Cb("CriOS"))&&!g.Cb("Edge")};
Rb=function(){return g.Cb("iPhone")&&!g.Cb("iPod")&&!g.Cb("iPad")};
g.Sb=function(){return Rb()||g.Cb("iPad")||g.Cb("iPod")};
g.Tb=function(a){g.Tb[" "](a);return a};
g.Ub=function(a,b){try{return g.Tb(a[b]),!0}catch(c){}return!1};
Maa=function(a,b){var c=Laa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Vb=function(){var a=g.m.document;return a?a.documentMode:void 0};
g.Xb=function(a){return Maa(a,function(){return 0<=g.Na(g.Wb,a)})};
g.Zb=function(a){return Number(g.Yb)>=a};
g.$b=function(a,b){g.Ab.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.K=!1;this.mc=null;a&&this.init(a,b)};
g.bc=function(a){return!(!a||!a[ac])};
Oaa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.zg=e;this.key=++Naa;this.Qf=this.jh=!1};
cc=function(a){a.Qf=!0;a.listener=null;a.C=null;a.src=null;a.zg=null};
g.dc=function(a){this.src=a;this.C={};this.F=0};
g.fc=function(a,b,c,d,e,f){var k=b.toString();b=a.C[k];b||(b=a.C[k]=[],a.F++);var l=ec(b,c,e,f);-1<l?(a=b[l],d||(a.jh=!1)):(a=new Oaa(c,a.src,k,!!e,f),a.jh=d,b.push(a));return a};
gc=function(a,b){var c=b.type;if(!(c in a.C))return!1;var d=g.Va(a.C[c],b);d&&(cc(b),0==a.C[c].length&&(delete a.C[c],a.F--));return d};
ec=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Qf&&f.listener==b&&f.capture==!!c&&f.zg==d)return e}return-1};
g.hc=function(a,b,c,d,e){if(g.pa(b)){for(var f=0;f<b.length;f++)g.hc(a,b[f],c,d,e);return null}c=g.ic(c);return g.bc(a)?a.R(b,c,d,e):g.jc(a,b,c,!1,d,e)};
g.jc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=!!e,l=g.kc(a);l||(a[lc]=l=new g.dc(a));c=g.fc(l,b,c,d,e,f);if(c.C)return c;d=Paa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,k);else if(a.attachEvent)a.attachEvent(mc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");nc++;return c};
Paa=function(){var a=Qaa,b=oc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.pc=function(a,b,c,d,e){if(g.pa(b))for(var f=0;f<b.length;f++)g.pc(a,b[f],c,d,e);else c=g.ic(c),g.bc(a)?a.Va(b,c,d,e):a&&(a=g.kc(a))&&(b=a.Qe(b,c,!!d,e))&&g.qc(b)};
g.qc=function(a){if(g.sa(a)||!a||a.Qf)return!1;var b=a.src;if(g.bc(b))return gc(b.kd,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(mc(c),d);nc--;(c=g.kc(b))?(gc(c,a),0==c.F&&(c.src=null,b[lc]=null)):cc(a);return!0};
mc=function(a){return a in rc?rc[a]:rc[a]="on"+a};
tc=function(a,b,c,d){var e=!0;if(a=g.kc(a))if(b=a.C[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.Qf&&(f=sc(f,d),e=e&&!1!==f)}return e};
sc=function(a,b){var c=a.listener,d=a.zg||a.src;a.jh&&g.qc(a);return c.call(d,b)};
Qaa=function(a,b){if(a.Qf)return!0;if(!oc){var c=b||g.r("window.event");var d=new g.$b(c,this);var e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(p){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=tc(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=tc(c[k],f,!1,d),e=e&&l}return e}return sc(a,
new g.$b(b,this))};
g.kc=function(a){a=a[lc];return a instanceof g.dc?a:null};
g.ic=function(a){if(g.ta(a))return a;a[uc]||(a[uc]=function(b){return a.handleEvent(b)});
return a[uc]};
g.vc=function(){g.vb.call(this);this.kd=new g.dc(this);this.Rt=this;this.Kk=null};
wc=function(a,b,c,d){b=a.kd.C[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.Qf&&k.capture==c){var l=k.listener,p=k.zg||k.src;k.jh&&gc(a.kd,k);e=!1!==l.call(p,d)&&e}}return e&&0!=d.ir};
xc=function(a,b,c){this.H=c;this.D=a;this.G=b;this.F=0;this.C=null};
yc=function(a,b){a.G(b);a.F<a.H&&(a.F++,b.next=a.C,a.C=b)};
g.zc=function(a){return function(){return a}};
Ac=function(a){g.m.setTimeout(function(){throw a;},0)};
Raa=function(){var a=g.m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Cb("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=(0,g.t)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!g.Ob()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(g.ja(c.next)){c=c.next;var a=c.Am;c.Am=null;a()}};
return function(a){d.next={Am:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
window.document.documentElement.appendChild(b)}:function(a){g.m.setTimeout(a,0)}};
Bc=function(){this.F=this.C=null};
Cc=function(){this.next=this.scope=this.kc=null};
Hc=function(a,b){Dc||Saa();Ec||(Dc(),Ec=!0);var c=Fc,d=Gc.get();d.set(a,b);c.F?c.F.next=d:c.C=d;c.F=d};
Saa=function(){if(-1!=String(g.m.Promise).indexOf("[native code]")){var a=g.m.Promise.resolve(void 0);Dc=function(){a.then(Ic)}}else Dc=function(){var a=Ic;
!g.ta(g.m.setImmediate)||g.m.Window&&g.m.Window.prototype&&!g.Cb("Edge")&&g.m.Window.prototype.setImmediate==g.m.setImmediate?(Jc||(Jc=Raa()),Jc(a)):g.m.setImmediate(a)}};
Ic=function(){for(var a;a=Fc.remove();){try{a.kc.call(a.scope)}catch(b){Ac(b)}yc(Gc,a)}Ec=!1};
g.Kc=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};
g.Lc=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Nc=function(a,b){this.C=0;this.N=void 0;this.G=this.F=this.D=null;this.H=this.K=!1;if(a!=g.la)try{var c=this;a.call(b,function(a){g.Mc(c,2,a)},function(a){g.Mc(c,3,a)})}catch(d){g.Mc(this,3,d)}};
Oc=function(){this.next=this.context=this.F=this.D=this.C=null;this.G=!1};
Qc=function(a,b,c){var d=Pc.get();d.D=a;d.F=b;d.context=c;return d};
Taa=function(a,b,c){Rc(a,b,c,null)||Hc(g.u(b,a))};
g.Sc=function(a){return new g.Nc(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},k=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],Taa(p,g.u(f,l),k);
else b(e)})};
g.Uc=function(a,b){return Tc(a,null,b,void 0)};
Vc=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.G||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Vc(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Wc(c),Xc(c,e,3,b)))}a.D=null}else g.Mc(a,3,b)};
Zc=function(a,b){a.F||2!=a.C&&3!=a.C||Yc(a);a.G?a.G.next=b:a.F=b;a.G=b};
Tc=function(a,b,c,d){var e=Qc(null,null,null);e.C=new g.Nc(function(a,k){e.D=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){k(q)}}:a;
e.F=c?function(b){try{var e=c.call(d,b);!g.ja(e)&&b instanceof g.$c?k(b):a(e)}catch(q){k(q)}}:k});
e.C.D=a;Zc(a,e);return e.C};
g.Mc=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Rc(c,a.W,a.O,a)||(a.N=c,a.C=b,a.D=null,Yc(a),3!=b||c instanceof g.$c||Uaa(a,c)))};
Rc=function(a,b,c,d){if(a instanceof g.Nc)return Zc(a,Qc(b||g.la,c||null,d)),!0;if(g.Lc(a))return a.then(b,c,d),!0;if(g.ua(a))try{var e=a.then;if(g.ta(e))return Vaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Vaa=function(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}
function k(a){l||(l=!0,c.call(e,a))}
var l=!1;try{b.call(a,k,f)}catch(p){f(p)}};
Yc=function(a){a.K||(a.K=!0,Hc(a.J,a))};
Wc=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Xc=function(a,b,c,d){if(3==c&&b.F&&!b.G)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,ad(b,c,d);else try{b.G?b.D.call(b.context):ad(b,c,d)}catch(e){bd.call(null,e)}yc(Pc,b)};
ad=function(a,b,c){2==b?a.D.call(a.context,c):a.F&&a.F.call(a.context,c)};
Uaa=function(a,b){a.H=!0;Hc(function(){a.H&&bd.call(null,b)})};
g.$c=function(a){g.Fa.call(this,a)};
g.cd=function(a,b,c){if(g.ta(a))c&&(a=(0,g.t)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.t)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.m.setTimeout(a,b||0)};
g.dd=function(a){g.m.clearTimeout(a)};
g.ed=function(a,b,c){g.vb.call(this);this.C=a;this.D=b||0;this.F=c;this.Fc=(0,g.t)(this.Bn,this)};
g.fd=function(a){var b=g.r("window.location.href");if(g.ra(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.m.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}};
g.gd=function(a){if(a.classList)return a.classList;a=a.className;return g.ra(a)&&a.match(/\S+/g)||[]};
g.y=function(a,b){return a.classList?a.classList.contains(b):g.Sa(g.gd(a),b)};
g.id=function(){this.C="";this.F=g.hd};
g.jd=function(a){var b=new g.id;b.C=a;return b};
g.ld=function(){this.C="";this.F=g.kd};
g.md=function(a){var b=new g.ld;b.C=a;return b};
g.od=function(){this.C="";this.F=nd};
g.pd=function(a){if(a instanceof g.od&&a.constructor===g.od&&a.F===nd)return a.C;g.oa(a);return"type_error:SafeUrl"};
g.rd=function(a){if(a instanceof g.od)return a;a=a.re?a.Pd():String(a);Waa.test(a)||(a="about:invalid#zClosurez");return g.qd(a)};
g.qd=function(a){var b=new g.od;b.C=a;return b};
g.td=function(){this.C="";this.D=g.sd;this.F=null};
g.ud=function(a,b){var c=new g.td;c.C=a;c.F=b;return c};
g.vd=function(a,b){var c=b instanceof g.od?b:g.rd(b);a.href=g.pd(c)};
g.xd=function(a,b){var c=b instanceof g.od?b:g.rd(b);a.href=g.pd(c)};
g.yd=function(a,b){return g.ud(b,null)};
g.zd=function(a,b){this.x=g.ja(a)?a:0;this.y=g.ja(b)?b:0};
g.Ad=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.Bd=function(a,b){this.width=a;this.height=b};
g.z=function(a){return g.ra(a)?window.document.getElementById(a):a};
g.Cd=function(a){var b=window.document;return g.ra(a)?b.getElementById(a):a};
g.Ed=function(a,b){g.Db(b,function(b,d){b&&b.re&&(b=b.Pd());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Dd.hasOwnProperty(d)?a.setAttribute(Dd[d],b):g.Ga(d,"aria-")||g.Ga(d,"data-")?a.setAttribute(d,b):a[d]=b})};
g.Hd=function(a){return g.Fd(a||window)};
g.Fd=function(a){a=a.document;a=g.Id(a)?a.documentElement:a.body;return new g.Bd(a.clientWidth,a.clientHeight)};
g.Kd=function(a){var b=g.Jd(a);a=a.parentWindow||a.defaultView;return g.A&&g.Xb("10")&&a.pageYOffset!=b.scrollTop?new g.zd(b.scrollLeft,b.scrollTop):new g.zd(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
g.Jd=function(a){return a.scrollingElement?a.scrollingElement:!g.Ld&&g.Id(a)?a.documentElement:a.body||a.documentElement};
g.Nd=function(a,b,c){return g.Md(window.document,arguments)};
g.Md=function(a,b){var c=String(b[0]),d=b[1];if(!Xaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.Ka(d.name),'"');if(d.type){c.push(' type="',g.Ka(d.type),'"');var e={};g.Nb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(g.ra(d)?c.className=d:g.pa(d)?c.className=d.join(" "):g.Ed(c,d));2<b.length&&g.Od(a,c,b,2);return c};
g.Od=function(a,b,c,d){function e(c){c&&b.appendChild(g.ra(c)?a.createTextNode(c):c)}
for(;d<c.length;d++){var f=c[d];!g.qa(f)||g.ua(f)&&0<f.nodeType?e(f):(0,g.x)(Yaa(f)?g.Wa(f):f,e)}};
g.Pd=function(a){return window.document.createElement(String(a))};
g.Id=function(a){return"CSS1Compat"==a.compatMode};
g.Qd=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.Rd=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b)};
g.Sd=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};
Zaa=function(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null};
$aa=function(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a};
g.Td=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
Yaa=function(a){if(a&&"number"==typeof a.length){if(g.ua(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.ta(a))return"function"==typeof a.item}return!1};
g.Ud=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.Vd=function(){};
Xd=function(a){if(a instanceof g.Vd)return a;if("function"==typeof a.Xc)return a.Xc(!1);if(g.qa(a)){var b=0,c=new g.Vd;c.next=function(){for(;;){if(b>=a.length)throw g.Wd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.Yd=function(a,b,c){if(g.qa(a))try{(0,g.x)(a,b,c)}catch(d){if(d!==g.Wd)throw d;}else{a=Xd(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Wd)throw d;}}};
aba=function(a){if(g.qa(a))return g.Wa(a);a=Xd(a);var b=[];g.Yd(a,function(a){b.push(a)});
return b};
g.Zd=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};
g.$d=function(a){a=String(a);if(g.Zd(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};
g.ce=function(a){return(new be(void 0)).Mi(a)};
be=function(a){this.C=a};
de=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(g.pa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],de(a,a.C?a.C.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),ee(d,c),c.push(":"),de(a,a.C?a.C.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":ee(b,
c);break;case "number":c.push((0,window.isFinite)(b)&&!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
ee=function(a,b){b.push('"',a.replace(bba,function(a){var b=fe[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),fe[a]=b);return b}),'"')};
g.ge=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
g.he=function(a,b){return a&&b?b instanceof g.ge?b.left>=a.left&&b.right<=a.right&&b.top>=a.top&&b.bottom<=a.bottom:b.x>=a.left&&b.x<=a.right&&b.y>=a.top&&b.y<=a.bottom:!1};
g.ie=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.je=function(a,b){var c=Math.max(a.left,b.left),d=Math.min(a.left+a.width,b.left+b.width);if(c<=d){var e=Math.max(a.top,b.top),f=Math.min(a.top+a.height,b.top+b.height);if(e<=f)return a.left=c,a.top=e,a.width=d-c,a.height=f-e,!0}return!1};
g.ke=function(a){return new g.Bd(a.width,a.height)};
g.le=function(a){g.vb.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.K=!!a};
g.me=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Qa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.be(b)}};
cba=function(a,b,c){Hc(function(){a.apply(b,c)})};
g.ne=function(a){this.C=a};
oe=function(a){this.C=a};
pe=function(a){this.data=a};
qe=function(a){return!g.ja(a)||a instanceof pe?a:new pe(a)};
g.re=function(a){this.C=a};
g.te=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.se)()||!!b&&b>(0,g.se)()};
g.ue=function(a){this.C=a};
dba=function(){};
g.ve=function(){};
g.we=function(a){this.C=a};
g.xe=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
ye=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.C=a};
g.ze=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Ae=function(a,b){a.style.height=g.ze(b,!0)};
g.Be=function(a,b){a.style.width=g.ze(b,!0)};
g.Ce=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.De=function(a){return a?(0,window.decodeURI)(a):a};
g.Fe=function(a,b){return b.match(g.Ee)[a]||null};
g.Ge=function(a){return g.De(g.Fe(3,a))};
g.He=function(a){a=a.match(g.Ee);return g.Ce(null,null,null,null,a[5],a[6],a[7])};
g.Ie=function(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")};
g.Je=function(a,b,c){if(g.pa(b))for(var d=0;d<b.length;d++)g.Je(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",g.Ia(b))};
Ke=function(a,b){for(var c in b)g.Je(c,b[c],a);return a};
g.Le=function(a){a=Ke([],a);a[0]="";return a.join("")};
g.Me=function(a,b){return g.Ie(Ke([a],b))};
Ne=function(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}};
g.Pe=function(a){Ne(g.Oe,arguments)};
g.C=function(a,b){return a in g.Oe?g.Oe[a]:b};
Qe=function(a,b){var c=g.C(a,void 0);c?c.push(b):g.Pe(a,[b])};
g.Re=function(a){return g.C("EXPERIMENT_FLAGS",{})[a]};
g.Se=function(a){return!!g.Re(a)};
g.D=function(a,b){return a?a.dataset?a.dataset[g.Te(b)]:a.getAttribute("data-"+b):null};
g.Te=function(a){return Ue[a]||(Ue[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))};
g.Ve=function(a,b,c,d,e){var f=g.r("yt.logging.errors.log");f?f(a,b,c,d,e):(f=g.C("ERRORS",[]),f.push([a,b,c,d,e]),g.Pe("ERRORS",f))};
eba=function(a,b,c,d,e){var f=!1,k=g.Oe.EXPERIMENT_FLAGS;if((k=k?k.log_window_onerror_fraction:void 0)&&Math.random()<k)f=!0;else for(var k=window.document.getElementsByTagName("script"),l=0,p=k.length;l<p;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}f&&(e||(e=Error(),e.message=a,e.fileName=b,e.lineNumber=c,(0,window.isNaN)(d)||(e.columnNumber=d)),g.Ve(e))};
We=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Ve(b)}}:a};
g.Xe=function(a){window.clearInterval(a)};
g.Ye=function(a){window.clearTimeout(a)};
g.Ze=function(a,b){g.ta(a)&&(a=We(a));return window.setInterval(a,b)};
g.$e=function(a,b){g.ta(a)&&(a=We(a));return window.setTimeout(a,b)};
g.E=function(a,b,c){var d=af();if(d){var e=d.subscribe(a,function(){var d=arguments;var k=function(){bf[e]&&b.apply(c||window,d)};
try{cf[a]?k():g.$e(k,0)}catch(l){g.Ve(l)}},c);
bf[e]=!0;df[a]||(df[a]=[]);df[a].push(e);return e}return 0};
g.ef=function(a){var b=af();b&&(g.sa(a)?a=[a]:g.ra(a)&&(a=[(0,window.parseInt)(a,10)]),(0,g.x)(a,function(a){b.unsubscribeByKey(a);delete bf[a]}))};
af=function(){return g.r("ytPubsubPubsubInstance")};
g.F=function(a,b){var c=af();return c?c.publish.apply(c,arguments):!1};
g.gf=function(a,b){cf[a]=!0;var c=af(),c=c?c.publish.apply(c,arguments):!1;cf[a]=!1;return c};
g.hf=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(fba,""),b=b.replace(gba,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.jf=function(a,b){var c=g.hf(a);window.spf.script.load(a,c,b)};
lf=function(){return null!=g.kf};
g.mf=function(){return g.kf?g.kf.invoke():null};
g.nf=function(){return!!g.r("yt.scheduler.instance")};
g.of=function(a,b,c){(0,window.isNaN)(c)&&(c=void 0);var d=g.r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),window.NaN):g.$e(a,c||0)};
g.pf=function(a,b){return g.of(a,1,b)};
g.qf=function(a){if(!(0,window.isNaN)(a)){var b=g.r("yt.scheduler.instance.cancelJob");b?b(a):g.Ye(a)}};
g.rf=function(a){for(var b=0,c=a.length;b<c;b++)g.qf(a[b])};
sf=function(){return(0,window.parseInt)(g.C("DCLKSTAT",0),10)};
g.tf=function(a){var b=a.cloneNode(!1);"TR"==b.tagName||"SELECT"==b.tagName?(0,g.x)(a.childNodes,function(a){b.appendChild(g.tf(a))}):b.innerHTML=a.innerHTML;
return b};
g.uf=function(){var a=window.document;if("visibilityState"in a)return a.visibilityState;var b=hba+"VisibilityState";if(b in a)return a[b]};
g.wf=function(a){var b=a.__yt_uid_key;b||(b=vf(),a.__yt_uid_key=b);return b};
g.xf=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in iba||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=
b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.C=a.pageX;this.F=a.pageY}};
g.zf=function(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in window.document?"mouseleave"!=b||"onmouseenter"in window.document?"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Hb(yf,function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})};
g.G=function(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.zf(a,b,c,d);if(e)return e;var e=++Af.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in window.document);var k=f?function(d){d=new g.xf(d);if(!g.Ud(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new g.xf(b);
b.currentTarget=a;return c.call(a,b)};
k=We(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in window.document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,k,d)):a.attachEvent("on"+b,k);yf[e]=[a,b,c,k,d];return e};
g.H=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.x)(a,function(a){if(a in yf){var b=yf[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete yf[a]}}))};
g.Bf=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Cf=function(a){for(var b in yf)yf[b][0]==a&&g.H(b)};
Df=function(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||g.Lb(jba);this.assets=a.assets||{};this.attrs=a.attrs||g.Lb(kba);this.params=a.params||g.Lb(lba);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.Ef=function(a){a instanceof Df||(a=new Df(a));return a};
g.Gf=function(){this.C=this.minor=this.major=0;this.F="";var a=g.r("window.navigator.plugins"),b=g.r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=(0,window.parseInt)(d[0],10)||0;d=(0,window.parseInt)(d[1],10)||0;e=0;if("r"==a.charAt(0)||
"d"==a.charAt(0))e=(0,window.parseInt)(a.substr(1),10)||0;a=[c,d,e]}else a=[0,0,0];this.F=b;b=a;this.major=b[0];this.minor=b[1];this.C=b[2];if(0>=this.major){if(g.Ff)try{var k=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(w){k=null}else{var l=window.document.body;var p=window.document.createElement("object");p.setAttribute("type","application/x-shockwave-flash");k=l.appendChild(p)}if(k&&"GetVariable"in k)try{var q=k.GetVariable("$version")}catch(w){q=""}l&&p&&l.removeChild(p);(k=
q||"")?(k=k.split(" ")[1].split(","),k=[(0,window.parseInt)(k[0],10)||0,(0,window.parseInt)(k[1],10)||0,(0,window.parseInt)(k[2],10)||0]):k=[0,0,0];this.major=k[0];this.minor=k[1];this.C=k[2]}};
g.Hf=function(a){return-1<a.F.indexOf("Gnash")&&-1==a.F.indexOf("AVM2")||9==a.major&&1==a.minor||9==a.major&&0==a.minor&&1==a.C?!1:9<=a.major};
g.If=function(a){return-1<window.navigator.userAgent.indexOf("Sony/COM2")&&!a.isSupported(9,1,58)?!1:!0};
g.Kf=function(a){return a in g.Jf};
Lf=function(a){Ne(g.Jf,arguments)};
Mf=function(a){Ne(g.Jf,arguments)};
g.Nf=function(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=g.Ja(e[0]||""),e=g.Ja(e[1]||"");f in b?g.pa(b[f])?g.Xa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b};
g.Of=function(a,b,c){var d=a.split("#",2);a=d[0];var d=1<d.length?"#"+d[1]:"",e=a.split("?",2);a=e[0];var e=g.Nf(e[1]||""),f;for(f in b)if(c||!g.Gb(e,f))e[f]=b[f];return g.Me(a,e)+d};
g.Pf=function(a,b){return g.Of(a,b||{},!0)};
g.Qf=function(a,b,c){if(b){a=g.ra(a)?g.Cd(a):a;var d=g.Lb(c.attrs);d.tabindex=0;var e=g.Lb(c.params);e.flashvars=g.Le(c.args);if(g.Ff){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=window.document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(var k in e)d=window.document.createElement("param"),d.setAttribute("name",k),d.setAttribute("value",e[k]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=window.document.createElement("embed");b.setAttribute("name",
d.id);for(var l in d)b.setAttribute(l,d[l]);for(var p in e)b.setAttribute(p,e[p])}e=window.document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}};
g.Rf=function(a){return a&&"status"in a?a.status:-1};
mba=function(){if(!Sf)return null;var a=Sf();return"open"in a?a:null};
g.Tf=function(a){switch(g.Rf(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
nba=function(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=g.Fe(1,a),e=g.Ge(a);d&&e?(d=c,c=a.match(g.Ee),d=d.match(g.Ee),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.Ge(c)==e&&(Number(g.Fe(4,c))||null)==(Number(g.Fe(4,a))||null):!0;for(var f in Uf){if((e=d=g.C(Uf[f]))&&!(e=c)){var k=a,e=f,l=g.C("CORS_HEADER_WHITELIST")||{};e=(k=g.Ge(k))?(l=l[k])?g.Sa(l,e):!1:!0}e&&(b[f]=d)}return b};
oba=function(a,b){var c=g.C("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Xu&&(!g.Ge(a)||b.withCredentials||g.Ge(a)==window.document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.ka&&b.ka[c])};
g.I=function(a,b){var c=b.format||"JSON";b.Vz&&(a=window.document.location.protocol+"//"+window.document.location.hostname+(window.document.location.port?":"+window.document.location.port:"")+a);var d=g.C("XSRF_FIELD_NAME",void 0),e=g.C("XSRF_TOKEN",void 0),f=b.Aa;f&&(f[d]&&delete f[d],a=g.Pf(a,f));var k=b.postBody||"",f=b.ka;oba(a,b)&&(f||(f={}),f[d]=e);f&&g.ra(k)&&(d=g.Nf(k),g.Nb(d,f),k=b.Cq&&"JSON"==b.Cq?JSON.stringify(d):g.Le(d));var l=!1,p,q=Vf(a,function(a){if(!l){l=!0;p&&g.Ye(p);var d=g.Tf(a),
e=null;if(d||400<=a.status&&500>a.status)e=pba(c,a,b.rb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==(0,window.parseInt)(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||g.m;d?b.Z&&b.Z.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.bb&&b.bb.call(f,a,e)}},b.method,k,b.headers,b.responseType,b.withCredentials);
b.Xb&&0<b.timeout&&(p=g.$e(function(){l||(l=!0,q.abort(),g.Ye(p),b.Xb.call(b.context||g.m,q))},b.timeout));
return q};
pba=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Wf(b):null)d={},(0,g.x)(b.getElementsByTagName("*"),function(a){d[a.tagName]=g.Xf(a)})}c&&Yf(d);
return d};
Yf=function(a){if(g.ua(a))for(var b in a)"html_content"==b||g.Ha(b,"_html")?a[b]=g.yd(g.jd("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Yf(a[b])};
Wf=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Xf=function(a){var b="";(0,g.x)(a.childNodes,function(a){b+=a.nodeValue});
return b};
g.Zf=function(a,b){b.method="POST";b.ka||(b.ka={});return g.I(a,b)};
Vf=function(a,b,c,d,e,f,k){function l(){4==(p&&"readyState"in p?p.readyState:0)&&b&&We(b)(p)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var p=mba();if(!p)return null;"onloadend"in p?p.addEventListener("loadend",l,!1):p.onreadystatechange=l;p.open(c,a,!0);f&&(p.responseType=f);k&&(p.withCredentials=!0);c="POST"==c;if(e=nba(a,e))for(var q in e)p.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&p.setRequestHeader("Content-Type","application/x-www-form-urlencoded");p.send(d);return p};
g.bg=function(a,b,c,d,e){c={name:c||g.C("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=$f)){d=a.stacktrace;var f=a.columnNumber;a=g.fd(a);d=d||a.stack;e=a.lineNumber.toString();(0,window.isNaN)(e)||(0,window.isNaN)(f)||(e=e+":"+f);if(!(ag[a.message]||0<=d.indexOf("/YouTubeCenter.js")||0<=d.indexOf("/mytube.js"))){f=a.fileName;b={Aa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b||
"ERROR"},ka:{url:g.C("PAGE_NAME",window.location.href),file:f},method:"POST"};d&&(b.ka.stack=d);for(var k in c)b.ka["client."+k]=c[k];if(k=g.C("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var l in k)b.ka[l]=k[l];g.I("/error_204",b);ag[a.message]=!0;$f++}}};
g.cg=function(a,b,c,d){this.F=a;this.G=b;this.D=c;this.C=d};
g.dg=function(a){return new g.cg(a)};
g.eg=function(a){var b={};void 0!==a.F?b.trackingParams=a.F:(b.veType=a.G,null!=a.D&&(b.veCounter=a.D));void 0!==a.C&&(b.dataElement=g.eg(a.C));return b};
g.kg=function(a,b){fg[a.endpoint]=b;if(a.mh){var c=a.mh;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);gg[a.mh.token]=d;c=hg(a.endpoint,a.mh.token)}else c=hg(a.endpoint);c.push(a.Nb);d=Number(g.Re("web_logging_max_batch")||0)||20;c.length>=d?g.ig():g.jg()};
g.ig=function(){g.Ye(g.lg);if(!g.Ib(g.mg)){for(var a in g.mg){var b=g.ng[a];if(!b){var c=fg[a];if(!c)continue;b=new c;g.ng[a]=b}var c=void 0,d=a,e=qba[d];for(c in g.mg[d]){var f=b.C();f[e]=hg(d,c);f.requestTimeMs=Math.round((0,g.og)());var k=gg[c];if(k)a:{var l=f,p=c;if(k.videoId)var q="VIDEO";else if(k.playlistId)q="PLAYLIST";else break a;l.credentialTransferTokenTargetId=k;l.context=l.context||{};l.context.user=l.context.user||{};l.context.user.credentialTransferTokens=[{token:p,scope:q}]}delete gg[c];
b.F(d,f,{})}delete g.mg[a]}g.Ib(g.mg)||g.jg()}};
g.jg=function(){g.Ye(g.lg);g.lg=g.$e(g.ig,g.C("LOGGING_BATCH_TIMEOUT",1E4))};
hg=function(a,b){b||(b="");g.mg[a]=g.mg[a]||{};g.mg[a][b]=g.mg[a][b]||[];return g.mg[a][b]};
g.qg=function(){if(null==g.r("_lact",window)){var a=(0,window.parseInt)(g.C("LACT"),10),a=(0,window.isFinite)(a)?(0,g.se)()-Math.max(a,0):-1;g.n("_lact",a,window);g.n("_fact",a,window);-1==a&&pg();g.G(window.document,"keydown",pg);g.G(window.document,"keyup",pg);g.G(window.document,"mousedown",pg);g.G(window.document,"mouseup",pg);g.E("page-mouse",pg);g.E("page-scroll",pg);g.E("page-resize",pg)}};
pg=function(){null==g.r("_lact",window)&&(g.qg(),g.r("_lact",window));var a=(0,g.se)();g.n("_lact",a,window);-1==g.r("_fact",window)&&g.n("_fact",a,window);g.F("USER_ACTIVE")};
g.rg=function(){var a=g.r("_lact",window);return null==a?-1:Math.max((0,g.se)()-a,0)};
g.sg=function(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||(0,g.og)());f[a]=b;f.context={lastActivityMs:String(g.rg())};g.kg({endpoint:"log_event",Nb:f,mh:e},c)};
g.tg=function(a){a={client:{hl:a.Zz,gl:a.Yz,clientName:a.Xz,clientVersion:a.innertubeContextClientVersion}};g.C("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:g.C("DELEGATED_SESSION_ID")});return a};
g.ug=function(){return{apiaryHost:g.C("APIARY_HOST",void 0),cu:g.C("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!g.C("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:g.C("GAPI_HINT_PARAMS",void 0),innertubeApiKey:g.C("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.C("INNERTUBE_API_VERSION",void 0),Xz:g.C("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.C("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Zz:g.C("INNERTUBE_CONTEXT_HL",void 0),Yz:g.C("INNERTUBE_CONTEXT_GL",void 0),
xhrApiaryHost:g.C("XHR_APIARY_HOST",void 0)||"",aA:g.C("INNERTUBE_HOST_OVERRIDE",void 0)||""}};
g.vg=function(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b};
g.wg=function(a){this.D=a||g.ug()};
yg=function(a,b){var c=Object.keys(a).join("");xg("info_"+c+"_"+b)||(a.clientActionNonce=b,g.sg("latencyActionInfo",a,g.wg))};
xg=function(a){zg[a]=zg[a]||{count:0};var b=zg[a];b.count++;b.time=(0,g.og)();Ag||(Ag=g.of(rba,0,5E3));return 10<b.count?(11==b.count&&g.bg(Error("CSI data exceeded logging limit with key: "+a)),!0):!1};
rba=function(){var a=(0,g.og)(),b;for(b in zg)6E4<a-zg[b].time&&delete zg[b];Ag=0};
g.Dg=function(a){if(!g.Bg&&!g.Cg||!window.JSON)return null;try{var b=g.Bg.get(a)}catch(c){}if(!g.ra(b))try{b=g.Cg.get(a)}catch(c){}if(!g.ra(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b};
g.Eg=function(){return g.Dg("yt-interaction-logging-parent")};
g.Fg=function(){var a=g.C("client-screen-nonce",void 0);a||(a=g.C("EVENT_ID",void 0));return a};
g.Gg=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.K=d?We(d):null;this.H=e?We(e):null;this.G=[];this.C=this.F=0};
g.Hg=function(a){g.qf(a.F);a.F=g.pf((0,g.t)(a.init,a))};
g.Kg=function(a){a.name in Ig&&Jg(a.name);Ig[a.name]={reqs:[],disable:(0,g.t)(a.disable,a)};(0,g.x)(a.deps,function(b){if(!(b in Ig))throw Error("Module "+b+" required by "+a.name);Ig[b].reqs.push(a.name)});
a.enable()};
Jg=function(a){if(a in Ig){var b=Ig[a];(0,g.x)(b.reqs,function(a){Jg(a)});
try{b.disable()}catch(c){}delete Ig[a]}};
g.Mg=function(a,b,c,d){g.Lg.set(""+a,b,c,"/",void 0===d?"youtube.com":d)};
g.Ng=function(a,b,c){a&&(c&&(c=g.Bb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Nd("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),g.Td(a).body.appendChild(a)):g.C("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Vf(a,b):sba(a,b))};
sba=function(a,b){var c=new window.Image,d=""+tba++;Og[d]=c;c.onload=c.onerror=function(){b&&Og[d]&&b();delete Og[d]};
c.src=a};
g.Pg=function(a,b){var c=a.match(uba);window.spf.style.load(a,c?c[1]:"",b)};
g.Sg=function(a,b,c){var d=g.C("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.Ge(window.location.href);e&&d.push(e);e=g.Ge(a);if(g.Sa(d,e)||!e&&g.Ga(a,"/"))if(g.Se("autoescape_tempdata_url")&&(d=window.document.createElement("a"),g.vd(d,a),a=d.href),a&&(a=g.He(a),d=a.indexOf("#"),a=0>d?a:a.substr(0,d))){if(b.itct||b.ved)b.csn=b.csn||g.Fg();c?(c=(0,window.parseInt)(c,10),(0,window.isFinite)(c)&&0<c&&(Qg(a,b,c),Rg(b))):(Qg(a,b),Rg(b))}};
Qg=function(a,b,c){a="ST-"+g.Oa(a).toString(36);c=c||5;b=b?g.Le(b):"";g.Mg(a,b,c)};
Rg=function(a){if(a){a=a.itct||a.ved;var b=g.r("yt.logging.screen.storeParentElement");a&&b&&b(g.dg(a))}};
g.Tg=function(a,b){b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.xd(d.location,g.Me(a,b)+c)};
g.Ug=function(a,b){b&&g.Sg(a,b);(window.ytspf||{}).enabled?window.spf.navigate(a):g.Tg(a)};
g.Vg=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.C("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.Sg(a,b);if(c)return!1;g.Ug(a);return!0};
Wg=function(a){g.vb.call(this);this.C=[];this.F=a||this};
Xg=function(a,b,c,d){d=We((0,g.t)(d,a.F));d={target:b,name:c,ge:d};b.addEventListener(c,d.ge,void 0);a.C.push(d)};
Yg=function(a){for(;a.C.length;){var b=a.C.pop();b.target.removeEventListener(b.name,b.ge)}};
g.Zg=function(a,b){this.version=a;this.args=b};
g.$g=function(a,b){this.topic=a;this.nh=b};
g.bh=function(a,b){var c=g.ah();c&&c.publish.call(c,a.toString(),a,b)};
g.ah=function(){return g.r("ytPubsub2Pubsub2Instance")};
ch=function(a,b){g.Zg.call(this,1,arguments)};
eh=function(a){this.C=a||window;this.W=this.D=0;if(this.C.performance&&this.C.performance.timing&&this.C.performance.getEntriesByType){a=g.Hd(this.C);this.J=new g.ie(0,0,a.width,a.height);for(var b,c=[],d=this.C.document.getElementsByTagName("*"),e=0,f=d.length;e<f;e++){a=d[e];if("IMG"==a.tagName||"IFRAME"==a.tagName)if(b=dh(this,a,a.src)){if("IFRAME"==a.tagName){try{var k=(new eh(a.contentWindow)).D}catch(l){k=0}0<k&&(b.timing=k)}c.push(b)}(b=this.C.getComputedStyle(a)["background-image"])&&(b=eh.C.exec(b))&&
1<b.length&&(b=dh(this,a,b[1]))&&c.push(b)}this.F=c;this.H=this.C.performance.getEntriesByType("resource");this.N=this.C.performance.getEntriesByType("mark");k={};a=0;for(c=this.H.length;a<c;a++)d=this.H[a],k[d.name]=d.responseEnd;a=0;for(c=this.N.length;a<c;a++)d=this.N[a],"mark_iframe_loaded: "==d.name.slice(0,20)&&(k[d.name.slice(20)]=d.startTime);a=0;for(c=this.F.length;a<c;a++)d=this.F[a],d.timing||(d.timing=k[d.url]||0);this.K=vba(this);this.G=wba(this);f=k=0;if(this.G.length)for(c=a=0,d=this.G.length;c<
d;c++)e=this.G[c],f=e.timing-f,0<f&&1>a&&(k+=(1-a)*f),f=e.timing,a=e.progress;this.D=Math.round(k||this.K);this.W=f}};
dh=function(a,b,c){return c&&b.getBoundingClientRect&&(b=b.getBoundingClientRect(),b=new g.ie(b.left,b.top,b.width,b.height),g.je(b,a.J))?new fh(b,c):null};
vba=function(a){var b=a.C,c=b.performance.timing.navigationStart;if("msFirstPaint"in b.performance.timing)var d=b.performance.timing.C-c;else if("chrome"in b&&"loadTimes"in b.chrome){var e=b.chrome.loadTimes(),f=e.firstPaintTime;if(0<f){var k=e.startLoadTime;"requestTime"in e&&(k=e.requestTime);f>=k&&(d=1E3*(f-k))}}if(void 0===d||0>d||12E4<d){d=b.performance.timing.responseStart-c;for(var l={},b=b.document.getElementsByTagName("head")[0].children,c=0,e=b.length;c<e;c++)f=b[c],"SCRIPT"==f.tagName&&
f.src&&!f.async?l[f.src]=!0:"LINK"==f.tagName&&"stylesheet"==f.rel&&f.href&&(l[f.href]=!0);a.H.some(function(a){if(!l[a.name]||"script"!=a.initiatorType&&"link"!=a.initiatorType)return!0;a=a.responseEnd;if(void 0===d||a>d)d=a})}return Math.max(d,0)||0};
wba=function(a){var b={0:0},c=0,d=a.K;var e=0;for(var f=a.F.length;e<f;e++){var k=a.F[e],l=d;k.timing>d&&(l=k.timing);b[l]||(b[l]=0);k=g.ke(k.region).Af();b[l]+=k;c+=k}e=g.ke(a.J).Af();0<e&&(e=.1*Math.max(e-c,0),d in b||(b[d]=0),b[d]+=e,c+=e);d=[];if(c){for(var p in b)e=(0,window.parseFloat)(p),a=new gh(e,b[p]),d.push(a);d.sort(function(a,b){return a.timing-b.timing});
e=b=0;for(f=d.length;e<f;e++)a=d[e],b+=a.Af,a.progress=b/c}return d};
fh=function(a,b){this.region=a;this.url=b};
gh=function(a,b){this.Af=b;this.timing=a};
jh=function(a){hh(a);xba();ih(!1,a);a||(g.C("TIMING_ACTION")&&g.Pe("PREVIOUS_ACTION",g.C("TIMING_ACTION")),g.Pe("TIMING_ACTION",""))};
g.ph=function(a,b,c){b||"_"==a[0]||kh(a,c);var d=lh(c),e=b||(0,g.og)();d[a]&&(d["_"+a]=d["_"+a]||[d[a]],d["_"+a].push(e));d[a]=e;mh(a,b,c)||g.nh(!1,c);return d[a]};
kh=function(a,b){qh.mark&&(g.Ga(a,"mark_")||(a="mark_"+a),b&&(a+=" ("+b+")"),qh.mark(a))};
sh=function(a,b){rh("yt_sts",a,void 0);g.ph("_start",b,void 0)};
rh=function(a,b,c){th(c)[a]=b;uh(a,b,c)};
vh=function(a){var b=th(void 0);return a in b};
wh=function(a){var b=lh(a);if(b.aft)return b.aft;a=g.C((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return window.NaN};
xh=function(a){g.ph("nreqs",a.requestStart,void 0);g.ph("nress",a.responseStart,void 0);g.ph("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.ph("nrs",a.redirectStart,void 0),g.ph("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.ph("ndnss",a.domainLookupStart,void 0),g.ph("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.ph("ntcps",a.connectStart,void 0),g.ph("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=a.navigationStart&&0<a.connectEnd-
a.secureConnectionStart&&(g.ph("nstcps",a.secureConnectionStart,void 0),g.ph("ntcpe",a.connectEnd,void 0))};
g.nh=function(a,b){if(!zh(b)){var c=g.C((b||"")+"TIMING_ACTION",void 0),d=lh(b);if(g.r("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&wh(b))if(a||b)Ah(b);else{var c=!0,e=g.C("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Ah(b)}}};
yba=function(){switch(g.uf()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Ah=function(a){if(!g.Se("csi_on_gel")){var b=lh(a),c=th(a),d=b._start,e;for(e in b)if(g.Ga(e,"_")&&g.pa(b[e])){var f=e.slice(1);if(f in zba){var k=(0,g.Bh)(b[e],function(a){return Math.round(a-d)});
c["all_"+f]=k.join()}delete b[e]}f=!!c.ap;if(k=g.r("ytglobal.timingReportbuilder_")){if(k=k(b,c,a))Ch(k,f),jh(a)}else{var l=g.C("CSI_SERVICE_NAME","youtube");k={v:2,s:l,action:g.C((a||"")+"TIMING_ACTION",void 0)};var p=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var q=window.location.protocol+g.r("ytplayer.config.assets.js");(q=qh.getEntriesByName?qh.getEntriesByName(q)[0]:null)?c.h5jse=Math.round(c.h5jse-q.responseEnd):delete c.h5jse}b.aft=wh(a);Aba(a)&&"youtube"==l&&(rh("yt_lt","hot_bg",a),l=
b.vc,q=b.pbs,delete b.aft,c.aft=Math.round(q-l));for(var w in c)"_"!=w.charAt(0)&&(k[w]=c[w]);b.ps=(0,g.og)();c={};w=[];for(e in b)"_"!=e.charAt(0)&&(l=Math.round(b[e]-d),c[e]=l,w.push(e+"."+l));k.rt=w.join(",");(b=g.r("ytdebug.logTiming"))&&b(k,c);Ch(k,f,a);g.bh(Bba,new ch(c.aft+(p||0),a))}}};
Eh=function(a){if(!zh(void 0)){if(!g.Se("send_empty_timing")){var b=g.C("CSI_SERVICE_NAME","youtube");if(!g.C("TIMING_ACTION",void 0)||!b)return}g.ph("aa",void 0,void 0);rh("ap",1,void 0);rh("yt_fss",a,void 0);!g.Se("enable_csi_abandonment_info")||vh("yt_lt")||Dh();Ah(void 0)}};
Cba=function(){if("cold"==th().yt_lt){var a=lh(),b=Fh(),c;for(c in a)g.Ga(c,"_")||"tick_"+c in b||mh(c,a[c]);a=th();for(c in a)"info_"+c in b||uh(c,a[c])}};
mh=function(a,b,c){Fh(c)["tick_"+a]=b;c||b||(0,g.og)();return g.Se("csi_on_gel")?(c=Gh(c),"_start"==a?xg("baseline_"+c)||g.sg("latencyActionBaselined",{clientActionNonce:c},g.wg,b):xg("tick_"+a+"_"+c)||g.sg("latencyActionTicked",{tickName:a,clientActionNonce:c},g.wg,b),!0):!1};
uh=function(a,b,c){Fh(c)["info_"+a]=b;if(g.Se("csi_on_gel"))if(a in Hh){var d={};a=Hh[a].split(".");g.Sa(Dba,a)&&(b=!!b);for(var e=d,f=0;f<a.length-1;f++)e[a[f]]=e[a[f]]||{},e=e[a[f]];d[a[a.length-1]]=b;b=Gh(c);yg(d,b)}else g.Sa(Eba,a)||g.Ve(Error("Unknown label "+a+" logged with GEL CSI."))};
Dh=function(){var a=g.C("TIMING_INFO",{});for(b in a)rh(b,a[b]);rh("is_nav",1);(a=g.Fg())&&rh("csn",a);(a=g.C("PREVIOUS_ACTION",void 0))&&rh("pa",a);var b=th();b.p=g.C("CLIENT_PROTOCOL")||"unknown";b.t=g.C("CLIENT_TRANSPORT")||"unknown";qh.now&&qh.timing?(a=qh.timing.navigationStart+qh.now(),a=Math.round((0,g.se)()-a)):a=null;null!=a&&rh("yt_hrd",a);window.navigator&&window.navigator.sendBeacon&&rh("ba",1);rh("yt_vis",yba());if("cold"==b.yt_lt){a=qh.timing||{};g.Se("cold_load_nav_start_web")&&a.navigationStart&&
(g.ph("srt",a.responseStart),1!=b.prerender&&sh("n",a.navigationStart));a:if(a.msFirstPaint)b=Math.max(0,a.msFirstPaint);else{if(b=window.chrome)if(b=b.loadTimes,g.ta(b)){b=b();var c=1E3*Math.min(b.requestTime||window.Infinity,b.startLoadTime||window.Infinity),c=window.Infinity===c?0:a.navigationStart-c;b=Math.max(0,Math.round(1E3*b.firstPaintTime+c)||0);break a}b=0}0<b&&g.ph("fpt",b);xh(a);qh.getEntriesByType&&Fba();a=g.C("SPEEDINDEX_FOR_ACTIONS",void 0);b=g.C("TIMING_ACTION",void 0);a&&-1<a.indexOf(b)&&
(a=(0,g.og)(),b=new eh,c=(0,g.og)(),0<b.D&&(rh("si",b.D),g.ph("vsc",Ih(b.W)),g.ph("sics",a),g.ph("sice",c)));a=[];if(window.document.querySelector&&qh&&qh.getEntriesByName)for(var d in Jh)b=Jh[d],Gba(d,b)&&a.push(b);a.length&&rh("rc",a.join(","))}g.Se("csi_on_gel")&&(d={},d.actionType=Hba[g.C("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",a=Gh(),yg(d,a))};
Ih=function(a){return Math.round(qh.timing.navigationStart+a)};
Fba=function(){var a=window.location.protocol,b=qh.getEntriesByType("resource"),c=b.filter(function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170501000444/https://fonts.googleapis.com/css?family=")})[0],b=b.filter(function(b){return 0==b.name.indexOf(a+"//web.archive.org/web/20170501000444/https://fonts.gstatic.com/s/")}).reduce(function(a,b){return b.duration>a.duration?b:a},{duration:0});
c&&0<c.startTime&&0<c.responseEnd&&(g.ph("wfcs",Ih(c.startTime)),g.ph("wfce",Ih(c.responseEnd)));b&&0<b.startTime&&0<b.responseEnd&&(g.ph("wffs",Ih(b.startTime)),g.ph("wffe",Ih(b.responseEnd)))};
Gba=function(a,b){var c=window.document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);return d?(c=qh.getEntriesByName(d))&&c[0]&&(c=c[0],d=window.performance.timing.navigationStart,g.ph("rsf_"+b,d+Math.round(c.fetchStart)),g.ph("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(vh("rc")||rh("rc",""),0===c.transferSize))?!0:!1:!1};
Ch=function(a,b,c){if(g.Se("debug_csi_data")){var d=g.r("yt.timing.csiData");d||(d=[],g.n("yt.timing.csiData",d,void 0));d.push({page:window.location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||g.Ng(a,void 0)}catch(f){g.Ng(a,void 0)}else g.Ng(a);ih(!0,c)};
Kh=function(a){g.n("ytglobal.timingready_",a,void 0)};
Gh=function(a){var b=Lh(a).nonce;if(!b){a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new window.Uint8Array(16);window.crypto.getRandomValues(d);for(b=0;b<c.length;b++)c[b]=d[b];var e=c;break a}catch(f){}e=Array(16);for(c=0;16>c;c++){d=(0,g.se)();for(b=0;b<d%23;b++)e[c]=Math.random();e[c]=Math.floor(256*Math.random())}if(Mh)for(c=1,d=0;d<Mh.length;d++)e[c%16]=e[c%16]^e[(c-1)%16]/4^Mh.charCodeAt(d),c++}c=[];for(d=0;d<e.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(e[d]&
63));b=c.join("");Lh(a).nonce=b}return b};
lh=function(a){return Lh(a).tick};
th=function(a){return Lh(a).info};
Fh=function(a){a=Lh(a);"gel"in a||(a.gel={});return a.gel};
Lh=function(a){return g.r("ytcsi."+(a||"")+"data_")||hh(a)};
hh=function(a){var b={tick:{},info:{}};g.n("ytcsi."+(a||"")+"data_",b,void 0);return b};
zh=function(a){return!!g.r("yt.timing."+(a||"")+"pingSent_")};
ih=function(a,b){g.n("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Aba=function(a){var b=lh(a),c=b.pbr,d=b.vc,b=b.pbs;return c&&d&&b&&c<d&&d<b&&1==th(a).yt_pvis};
Ph=function(a,b){g.vb.call(this);this.N=this.G=a;this.ea=b;this.K=!1;this.api={};this.ib=this.X=null;this.ia=new g.le;g.yb(this,this.ia);this.D={};this.W=this.jb=this.F=this.Db=this.C=null;this.na=!1;this.O=this.H=this.J=this.ma=null;this.mb={};this.Zb=["onReady"];this.za=new Wg(this);g.yb(this,this.za);this.rd=null;this.Pb=window.NaN;this.Za={};Nh(this);this.Jd("onDetailedError",(0,g.t)(this.YE,this));this.Jd("onTabOrderChange",(0,g.t)(this.uu,this));this.Jd("onTabAnnounce",(0,g.t)(this.im,this));
this.Jd("WATCH_LATER_VIDEO_ADDED",(0,g.t)(this.cF,this));this.Jd("WATCH_LATER_VIDEO_REMOVED",(0,g.t)(this.dF,this));g.Oh||(this.Jd("onMouseWheelCapture",(0,g.t)(this.KE,this)),this.Jd("onMouseWheelRelease",(0,g.t)(this.LE,this)));this.Jd("onAdAnnounce",(0,g.t)(this.im,this));this.V=new Wg(this);g.yb(this,this.V);this.Kc=!1;this.qb=null};
Rh=function(a,b){a.Db=b;a.C=b.clone();a.F=a.C.attrs.id||a.F;"video-player"==a.F&&(a.F=a.ea,a.C.attrs.id=a.ea);a.N.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F);a.C.args.enablejsapi="1";a.C.args.playerapiid=a.ea;a.jb||(a.jb=Qh(a,a.C.args.jsapicallback||"onYouTubePlayerReady"));a.C.args.jsapicallback=null;var c=a.C.attrs.width;c&&g.Be(a.N,Number(c)||c);(c=a.C.attrs.height)&&g.Ae(a.N,Number(c)||c)};
Sh=function(a){a.C.loaded||(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
Th=function(a){if(!g.ja(a.C.disable.flash)){var b=a.C.disable;var c=g.Gf.getInstance().isSupported(a.C.minVersion);b.flash=!c}return!a.C.disable.flash};
Wh=function(a,b){var c;(c=!b)||(c=5!=(Iba[b.errorCode]||5)?!1:(c=a.C&&a.C.args&&a.C.args.fflags)&&0<=c.indexOf("web_player_disable_flash_fallback=true")?!1:-1!=Jba.indexOf(b.errorCode));if(c&&Th(a)){(c=Uh(a))&&c.stopVideo&&c.stopVideo();var d=a.C;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=g.Ef(c));d.args.autoplay=1;d.args.html5_unavailable="1";Rh(a,d);Vh(a,"flash")}};
Vh=function(a,b){if(!a.ob()){if(!b){var c;if(!(c=!a.C.html5&&Th(a))){if(!g.ja(a.C.disable.html5)){c=!0;void 0!=a.C.args.deviceHasDisplay&&(c=a.C.args.deviceHasDisplay);if(2.2==Xh)var d=!0;else{a:{var e=c;c=g.r("yt.player.utils.videoElement_");c||(c=g.Pd("VIDEO"),g.ya("yt.player.utils.videoElement_",c));try{if(c.canPlayType)for(var e=e?Kba:Lba,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(k){d="html5.missingapi"}}d=!d}d&&(d=Yh(a)||a.C.assets.js);a.C.disable.html5=
!d;d||(a.C.args.html5_unavailable="1")}c=!!a.C.disable.html5}b=c?Th(a)?"flash":"unsupported":"html5"}("flash"==b?a.JK:a.KK).call(a)}};
Yh=function(a){var b=!0,c=Uh(a);c&&a.C&&(a=a.C,b=g.D(c,"version")==a.assets.js);return b&&!!g.r("yt.player.Application.create")};
Uh=function(a){var b=g.z(a.F);!b&&a.N&&a.N.querySelector&&(b=a.N.querySelector("#"+a.F));return b};
Zh=function(a,b,c){var d=b[c];return function(){try{return a.rd=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.rd=e,g.Ve(e,"WARNING"))}}};
Nh=function(a){a.K=!1;if(a.ib)for(var b in a.D)a.ib(b,a.D[b]);for(var c in a.Za)g.Ye((0,window.parseInt)(c,10));a.Za={};a.X=null;a.ib=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=(0,g.t)(a.Jd,a);a.api.removeEventListener=(0,g.t)(a.pJ,a);a.api.destroy=(0,g.t)(a.dispose,a);a.api.getLastError=(0,g.t)(a.Rv,a);a.api.getPlayerType=(0,g.t)(a.mw,a);a.api.getCurrentVideoConfig=(0,g.t)(a.uv,a);a.api.loadNewVideoConfig=(0,g.t)(a.Nl,a);a.api.isReady=(0,g.t)(a.XK,a)};
Qh=function(a,b){var c=b;if("string"==typeof b){if(a.mb[b])return a.mb[b];c=function(){var a=g.r(b);a&&a.apply(g.m,arguments)};
a.mb[b]=c}return c?c:null};
Mba=function(a,b){var c="ytPlayer"+b+a.ea;a.D[b]=c;g.m[c]=function(c){var d=g.$e(function(){a.ob()||(a.ia.Wa(b,c),g.Jb(a.Za,String(d)))},0);
g.Kb(a.Za,String(d),!0)};
return c};
$h=function(a){return(a=Uh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null};
bi=function(a){g.ph("dcp");a.cancel();Nh(a);a.W=null;a.C&&(a.C.loaded=!1);var b=Uh(a);"html5"==$h(a)?Yh(a)||!ai(a)?a.J=b:(b&&b.destroy&&b.destroy(),a.J=null):b&&b.destroy&&b.destroy();g.Qd(a.G);Yg(a.za);a.H=null;a.O=null};
ai=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
g.ei=function(a,b){a=g.ra(a)?g.Cd(a):a;b=g.Ef(b);var c=g.ci+"_"+g.xa(a),d=g.di[c];if(d)return d.Nl(b),d.api;d=new Ph(a,c);g.di[c]=d;g.F("player-added",d.api);g.wb(d,g.u(Nba,d));g.$e(function(){d.Nl(b)},0);
return d.api};
Nba=function(a){g.di[a.getId()]=null};
g.fi=function(a){a=g.z(a);if(!a)return null;var b=g.ci+"_"+g.xa(a),c=g.di[b];c||(c=new Ph(a,b),g.di[b]=c);return c.api};
Tba=function(){gi++;var a=g.Hd(),b=new g.ie(0,0,a.width,a.height);rh("vps",a.width+"."+a.height);g.ph("vpc");var a=window.document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]"),c=a.length,d=[],e=!0;hi.start();for(var f=0;f<c;f++){var k=a[f];if(ii(k,b)){var l=Oba(k);l.then(Pba);d.push(l);ji.push(l);k.loadTime||(e=!1)}}e&&rh("yt_eil",1);rh("vpni",d.length);g.ph("vpcc");b=g.Sc(d).then(Qba);g.Uc(b,Rba);b.then(Sba);ji.push(b);return b};
Sba=function(){hi.stop()};
Rba=function(){g.ph("vpr")};
ii=function(a,b){for(var c=a,d=window.document.body,e=[];c!=d;){var f=g.wf(c);if(f in ki)return!0;if(f in li)return!1;var k=window.getComputedStyle(c);if("none"==k.display||"hidden"==k.visibility)return li[f]=!0,!1;k=c.getBoundingClientRect();if(!(b.left<=k.left+k.width&&k.left<=b.left+b.width&&b.top<=k.top+k.height&&k.top<=b.top+b.height))return li[f]=!0,!1;e.push(f);c=c.parentElement}for(c=0;c<e.length;c++)ki[e[c]]=!0;return!0};
Qba=function(a){for(var b=g.Hd(),b=new g.ie(0,0,b.width,b.height),c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;ii(a[d].Uz,b)&&c<f&&(c=f)}return c};
Oba=function(a){var b=gi;return new g.Nc(function(c,d){var e={Uz:a,time:0};a.loadTime?(e.time=(0,window.parseInt)(a.loadTime,10),c(e)):a.slt=function(){gi!=b?d():(e.time=(0,window.parseInt)(a.loadTime,10),c(e),a.slt=void 0)}})};
Pba=function(a){hi.start();rh("vpil",++mi);a=a.time;ni<a&&(ni=a,g.ph("lim",a))};
Uba=function(){g.ph("vptl",ni);g.ph("vpl",ni)};
g.ri=function(a,b){g.Ng("/gen_204?"+a,b)};
g.si=function(){return g.y(g.z("page-container"),"remote-connected")};
Vba=function(){g.ya("yt.abuse.botguardInitialized",lf);g.ya("yt.abuse.invokeBotguard",g.mf);g.ya("yt.abuse.dclkstatus.checkDclkStatus",sf);g.ya("yt.player.exports.navigate",g.Vg);g.ya("yt.util.activity.init",g.qg);g.ya("yt.util.activity.getTimeSinceActive",g.rg);g.ya("yt.util.activity.setTimestamp",ti);var a=g.r("ytplayer.config");ui(a);g.r("ytspf.enabled")&&(vi=g.Ze(wi,5E3),(a=g.xi())?(a.addEventListener("onReady",wi),a.addEventListener("onStateChange",wi)):yi("unable to init PP monitor"))};
ui=function(a){for(var b in g.di){var c=g.di[b];c&&c.cancel()}if(a=a||null){b=g.xi();var d=!0,c=g.zi;g.zi=null;b&&b.getVideoData&&c&&(d=b.getVideoData(),d=!!c.fullscreen||d.video_id!=a.args.video_id||d.list!=a.args.list||d.video_id!=c.videoId||d.list!=c.listId);d?(Ai="",g.ei("player-api",a)):b.playVideo();a=g.Ef(a);a.loaded=!0}wi();g.n("ytplayer.config",a,void 0)};
g.xi=function(){return g.fi("player-api")};
wi=function(){var a=g.xi();if(a){var b=g.z("player");b=!b||g.y(b,"off-screen");var c=1==(a&&a.isReady()?a.getPlayerState():void 0),d="watch"==g.C("PAGE_NAME"),e=g.si();!c||d||e||(yi("PP playing off watch (paused)"),a.pauseVideo());b&&d?yi("PP off-screen on watch"):b||d||yi("PP !off-screen off watch")}};
yi=function(a){var b=g.C("PAGE_NAME");b&&(b=[b,Ai,g.r("_spf_state.nav-counter")],a+="("+b.join(",")+")",g.n("yt.www.persistentplayer.issue",a,void 0),g.Ve(Error(a),"WARNING"))};
Ci=function(){g.ph("ol");window.requestAnimationFrame&&!window.document.hidden?window.requestAnimationFrame(function(){(0,window.setTimeout)(function(){g.ph("cpt")},0)}):window.document.hidden?g.ph("cpt"):(0,window.setTimeout)(function(){g.ph("cpt")},0);
Wba();g.C("CSI_VIEWPORT")&&(Bi=Tba(),Bi.then(function(a){g.ph("vpl",a);Bi=null},function(){}))};
Wba=function(){Di("init");var a=g.C("PAGE_NAME",void 0);a&&Di("init-"+a)};
Di=function(a){g.nf()?Ei.push(g.pf(g.u(g.gf,a),0)):g.F(a)};
Gi=function(){g.rf(Ei);Ei.length=0;for(var a=ji.length,b=0;b<a;b++)ji[b].cancel();ni=mi=ji.length=0;ki={};li={};for(b=0;b<Fi.length;b++)Fi[b].slt=void 0;Fi.length=0;Bi&&(Bi.cancel(),Bi=null);(a=g.C("PAGE_NAME",void 0))&&g.gf("dispose-"+a);g.gf("dispose")};
Xba=function(){Ci()};
Yba=function(){g.C("TIMING_REPORT_ON_UNLOAD")&&g.nh(!0);Eh("u");g.ig();Gi();g.gf("pageunload")};
Hi=function(){ti()};
Ii=function(a){a=a.detail.url;window.yt_spf_loaded_history=!0;ti();var b=g.Eg();if(b&&a){var c=g.eg(b.visualElement),b={csn:b.clientScreenNonce};"trackingParams"in c?b.itct=c.trackingParams:(b.veType=c.veType,b.veCounter=c.veCounter);g.Sg(a,b)}};
Ni=function(){Ji=1;Ki=Li=0;g.C("TIMING_REPORT_ON_UNLOAD")&&g.nh(!0);g.Se("warm_load_nav_start_web")?(Eh("n"),jh(),Kh(!1),g.Pe("TIMING_AFT_KEYS",[]),rh("yt_lt","warm"),g.Pe("TIMING_ACTION",""),g.Pe("TIMING_WAIT",[])):(Eh("n"),jh());sh("n");kh("nr");Mi(Zba);g.gf("navigate")};
Ri=function(a){a=a.detail.part||a.detail.partial;g.ph("nc"+Li);++Li;if(a.data&&a.data.deferDispose)"watch"==a.name&&g.ph("bc");else{var b=1==Ji;Ji=2;b?(Mi($ba),Oi()):Mi(aca);if(b=a.data&&a.data.swfcfg)Pi(a.timing,b.args),Qi(b)}};
Si=function(){g.ph("np"+Ki);++Ki};
Ti=function(a){a=a.detail.response;var b=1==Ji;Ji=3;b&&(Mi(bca),Oi());if(b=a.data&&a.data.swfcfg)Pi(a.timing,b.args),Qi(b)};
Xi=function(a){g.ph("nd");a=a.detail.response;g.Ui=a.cacheKey;a=a.timing;var b=window._spf_state;g.Vi.navigationCount=b&&b["nav-counter"]||0;g.Se("warm_load_nav_start_web")?g.ph("srt",a.responseStart):(sh("ne",a.responseStart),rh("srt",Math.max(0,a.responseStart-a.navigationStart)));rh("yt_lt",a.spfCached?"hot":"warm");rh("yt_pft",+!!a.spfPrefetched);g.ph("pfs",a.fetchStart);g.ph("pfrs",a.responseStart);"redirectStart"in a&&xh(a);Mi(Wi);window.document.getElementById("content").style.height="";Ci();
Ji=0};
Yi=function(a){var b=a.detail.url;if(a=a.detail.err)a.message&&(a.message+=" (url: "+b+")"),g.Ve(a)};
Zi=function(a){g.ri(g.Le({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
dca=function(){cca();g.Pe("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);window.yt_spf_loaded_history=!1};
eca=function(){};
Oi=function(){var a=window.document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");Gi();var a=g.C("PREVIOUS_ACTION"),b;for(b in g.Oe)delete g.Oe[b];g.Pe("PREVIOUS_ACTION",a);g.ya("ytplayer.config",null);if((b=g.xi())&&b.stopVideo){if(b.stopVideo(),b=b.getLastError())Ai=b,(b=g.z("movie_player"))&&b.stopVideo?(b.stopVideo(),Ai="recovered"):Ai="missing2"}else Ai="missing";wi()};
Qi=function(a){"cfg"in lh(void 0)||g.ph("cfg");ui(a)};
Mi=function(a){var b=window.document.getElementById("progress");b||(b=window.document.createElement("div"),b.id="progress",b.appendChild(window.document.createElement("dt")),b.appendChild(window.document.createElement("dd")),window.document.body.appendChild(b));g.qf($i);$i=g.pf(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.Ye(aj);aj=g.$e(function(){b.className=e},c)},0)};
cca=function(){var a=Wi[0]+50;g.Ye(aj);aj=g.$e(function(){var a=window.document.getElementById("progress");a&&a.parentNode.removeChild(a)},a)};
Pi=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&(0,g.x)(fca,function(a){a in b&&(delete b[a],e.push(a))});
g.C("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"removeNonCacheableVideoVars",cached:c,prefetched:d,deleted:e.join("")},g.ri(g.Le(c)))};
cj=function(a,b){var c={};c.key=a;c.value=b;bj().then(function(a){return new window.Promise(function(b,d){var e=a.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);e.onsuccess=b;e.onerror=d})})};
dj=function(a){return bj().then(function(b){return new window.Promise(function(c,d){var e=b.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);e.onsuccess=function(){var a=e.result;c(a?a.value:null)};
e.onerror=function(){d('Unable to get key "'+a+'" from object store.')}})},function(){return window.Promise.reject("Unable to open IndexedDB.")})};
bj=function(){return ej?window.Promise.resolve(ej):new window.Promise(function(a,b){var c=window.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var b=c.result;if(b.objectStoreNames.contains("swpushnotificationsstore"))ej=b,a(ej);else return window.indexedDB.deleteDatabase("swpushnotificationsdb"),bj()};
c.onupgradeneeded=gca})};
gca=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
gj=function(){return fj().then(function(a){return a?a.pushManager.getSubscription().then(function(b){return b?window.Promise.resolve():a.pushManager.subscribe({userVisibleOnly:!0}).then(function(){return window.Promise.resolve()},function(){return window.Promise.resolve()})}):window.Promise.resolve()})};
ij=function(){var a={type:"notifications_register",data:g.C("ID_TOKEN")};hj(a)};
fj=function(){var a=String(g.Re("service_worker_scope")||"");return window.navigator.serviceWorker.getRegistration(a)};
hca=function(){var a={type:"notifications_check_registration",data:g.C("ID_TOKEN")};hj(a)};
hj=function(a){fj().then(function(b){if(!b||!b.active)return window.Promise.reject();b.active.postMessage(a);return window.Promise.resolve()})};
ica=function(){return g.C("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)?-1!=Number(g.Re("service_worker_push_prompt_cap")||0)?dj(jj()).then(function(a){a||(a=0);return window.Promise.resolve(a<Number(g.Re("service_worker_push_prompt_cap")||0))}):window.Promise.resolve(!0):window.Promise.resolve(!1)};
lca=function(){g.C("LOGGED_IN",void 0)&&(g.Se("service_worker_push_ticker_enabled")?jca().then(function(a){if(a&&(a=kj())){var b=lj();if(b){var c;if(c=(c=kj())?c.querySelector(".yt-uix-button-close"):null)g.G(b,"click",mj),g.G(c,"click",kca),window.document.body.classList.add("sitewide-ticker-visible"),a.classList.add("show"),nj()}}}):(mj(),nj()))};
mj=function(){return window.Notification.requestPermission().then(function(a){var b=window.document.getElementById("ticker");b&&(b.className=b.classList.remove("show"));if("granted"==a)return gj().then(function(){cj("NotificationsDisabled",!1)}).then(function(){ij();
return window.Promise.resolve(!0)});
"denied"==a&&ij();return window.Promise.resolve(!1)})};
kca=function(){cj("HideTicker",(0,g.se)());window.document.body.classList.remove("sitewide-ticker-visible")};
jca=function(){return dj("HideTicker").then(function(a){return(0,g.se)()>a+2592E6})};
jj=function(){return g.Se("service_worker_push_home_only")?"HomePromptCount":"PromptCount"};
nj=function(){var a=jj();dj(a).then(function(b){cj(a,b+1)})};
kj=function(){var a=window.document.getElementById("ticker");return a&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.D(a,"trigger-condition")?a:null};
lj=function(){var a=kj();return a?a.querySelector(".yt-uix-button-alert-info"):null};
mca=function(a){g.oj&&!g.pj&&!g.qj&&!g.rj&&window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistration&&window.Notification&&window.Promise&&a&&a.pushManager&&("default"!=window.Notification.permission?gj().then(hca):ica().then(function(a){a&&lca()}))};
oca=function(){window.navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(nca)})};
qca=function(){var a="/sw.js",b=g.C("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);a=sj(a);g.Se("service_worker_push_enabled")&&a.then(pca).then(mca)};
pca=function(a){var b=a.installing||a.waiting;return a.active||!b?window.Promise.resolve(a):new window.Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
nca=function(a){a&&sj("/sw.js?0",a.scope)};
sj=function(a,b){var c=b||String(g.Re("service_worker_scope")||"")||"/";return window.navigator.serviceWorker.register(a,{scope:c})};
tj=function(){g.Gg.call(this,"www/base");this.D=0};
uj=function(a){(a=a.detail.name)&&Jg(a)};
g.aa=[];ea="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;baa=0;
ia("String.prototype.startsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");var b=this+"";a+="";for(var e=b.length,f=a.length,k=Math.max(0,Math.min(c|0,b.length)),l=0;l<f&&k<e;)if(b[k++]!=a[l++])return!1;return l>=f}});
ia("Reflect.apply",function(a){if(a)return a;var b=Function.prototype.apply;return function(a,d,e){return b.call(a,d,e)}});
ia("Reflect.construct",function(a){return a?a:function(a,c,d){void 0===d&&(d=a);d=Object.create(d.prototype||Object.prototype);return window.Reflect.apply(a,d,c)||d}});
ia("Promise",function(a){function b(a){this.C=0;this.G=void 0;this.F=[];var b=this.K();try{a(b.resolve,b.reject)}catch(l){b.reject(l)}}
function c(){this.C=null}
if(a)return a;c.prototype.F=function(a){null==this.C&&(this.C=[],this.G());this.C.push(a)};
c.prototype.G=function(){var a=this;this.D(function(){a.K()})};
var d=da.setTimeout;c.prototype.D=function(a){d(a,0)};
c.prototype.K=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(p){this.H(p)}}}this.C=null};
c.prototype.H=function(a){this.D(function(){throw a;})};
b.prototype.K=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}
var b=this,c=!1;return{resolve:a(this.V),reject:a(this.H)}};
b.prototype.V=function(a){if(a===this)this.H(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.ma(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.O(a):this.N(a)}};
b.prototype.O=function(a){var b=void 0;try{b=a.then}catch(l){this.H(l);return}"function"==typeof b?this.X(b,a):this.N(a)};
b.prototype.H=function(a){this.J(2,a)};
b.prototype.N=function(a){this.J(1,a)};
b.prototype.J=function(a,b){if(0!=this.C)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.C);this.C=a;this.G=b;this.W()};
b.prototype.W=function(){if(null!=this.F){for(var a=this.F,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.F=null}};
var e=new c;b.prototype.ma=function(a){var b=this.K();a.D(b.resolve,b.reject)};
b.prototype.X=function(a,b){var c=this.K();try{a.call(b,c.resolve,c.reject)}catch(p){c.reject(p)}};
b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(T){f(T)}}:b}
var e,f,k=new b(function(a,b){e=a;f=b});
this.D(d(a,e),d(c,f));return k};
b.prototype["catch"]=function(a){return this.then(void 0,a)};
b.prototype.D=function(a,b){function c(){switch(d.C){case 1:a(d.G);break;case 2:b(d.G);break;default:throw Error("Unexpected state: "+d.C);}}
var d=this;null==this.F?e.F(c):this.F.push(function(){e.F(c)})};
b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};
b.reject=function(a){return new b(function(b,c){c(a)})};
b.C=function(a){return new b(function(c,d){for(var e=g.ha(a),f=e.next();!f.done;f=e.next())b.resolve(f.value).D(c,d)})};
b.all=function(a){var c=g.ha(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function f(b){return function(c){k[b]=c;l--;0==l&&a(k)}}
var k=[],l=0;do k.push(void 0),l++,b.resolve(d.value).D(f(k.length-1),e),d=c.next();while(!d.done)})};
b.$jscomp$new$AsyncExecutor=function(){return new c};
return b});
g.vj=g.vj||{};g.m=this;va="closure_uid_"+(1E9*Math.random()>>>0);daa=0;g.se=Date.now||function(){return+new Date};/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var tb=window,kb=window.document,kaa=tb.location,jaa=/\[native code\]/,qb=Aa(tb,"gapi",{});var Ca;Ca=Aa(tb,"___jsl",Ba());Aa(Ca,"I",0);Aa(Ca,"hel",10);g.v(g.Fa,Error);g.Fa.prototype.name="CustomError";var oaa,paa,qaa,raa,saa,taa,naa;g.La=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
oaa=/&/g;paa=/</g;qaa=/>/g;raa=/"/g;saa=/'/g;taa=/\x00/g;naa=/[\x00&<>"']/;g.wj=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.Ra=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(g.ra(a))return g.ra(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.rca=Array.prototype.lastIndexOf?function(a,b,c){return Array.prototype.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;
0>c&&(c=Math.max(0,a.length+c));if(g.ra(a))return g.ra(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.xj=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k=g.ra(a)?a.split(""):a,l=0;l<d;l++)if(l in k){var p=k[l];
b.call(c,p,l,a)&&(e[f++]=p)}return e};
g.Bh=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=g.ra(a)?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.yj=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.t)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.x)(a,function(c,k){e=b.call(d,e,c,k,a)});
return e};
g.zj=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Aj=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=g.ra(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};g.h=g.Za.prototype;g.h.isEnabled=function(){return window.navigator.cookieEnabled};
g.h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');g.ja(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.se)()+1E3*c)).toUTCString();this.C.cookie=a+"="+b+e+d+c+f};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.La)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=g.ja(this.get(a));this.set(a,"",0,b,c);return d};
g.h.Ac=g.ba(0);g.h.Jb=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.zb=g.ba(5);g.h.Od=g.ba(6);g.h.clear=function(){for(var a=g.$a(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Lg=new g.Za("undefined"==typeof window.document?null:window.document);g.Lg.F=3950;var bb=Aa(Ca,"perf",Ba());Aa(bb,"g",Ba());var waa=Aa(bb,"i",Ba());Aa(bb,"r",[]);Ba();Ba();var eb=Ba(),ob=[];ob.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Ca[b]=Aa(Ca,b,[]).concat(c):Aa(Ca,b,c)}if(b=a.u)a=Aa(Ca,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Eaa=/^(\/[a-zA-Z0-9_\-]+)+$/,gb=[/\/amp\//,/\/amp$/,/^\/amp$/],Gaa=/^[a-zA-Z0-9\-_\.,!]+$/,Caa=/^gapi\.loaded_[0-9]+$/,Faa=/^[a-zA-Z0-9,._-]+$/,zaa=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,yaa=/\/cb=/g,xaa=/\/\//g;eb.m=function(a,b,c,d){(a=a[0])||db("missing_hint");return"https://apis.google.com"+Daa(a,b,c,d)};
var lb=(0,window.decodeURI)("%73cript"),jb=/^[-+_0-9\/A-Za-z]+={0,2}$/;qb.load=function(a,b){return pb(function(){return g.sb(a,b)})};g.vb.prototype.ec=!1;g.vb.prototype.ob=function(){return this.ec};
g.vb.prototype.dispose=function(){this.ec||(this.ec=!0,this.Y())};
g.vb.prototype.Y=function(){if(this.Fb)for(;this.Fb.length;)this.Fb.shift()()};g.Ab.prototype.stopPropagation=function(){this.F=!0};
g.Ab.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ir=!1};a:{var Bj=g.m.navigator;if(Bj){var Cj=Bj.userAgent;if(Cj){g.Bb=Cj;break a}}g.Bb=""};var Mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.Tb[" "]=g.la;var Jj,Laa,Nj;g.Dj=g.Cb("Opera");g.A=g.Ob();g.Ej=g.Cb("Edge");g.Fj=g.Ej||g.A;g.Gj=g.Cb("Gecko")&&!(-1!=g.Bb.toLowerCase().indexOf("webkit")&&!g.Cb("Edge"))&&!(g.Cb("Trident")||g.Cb("MSIE"))&&!g.Cb("Edge");g.Ld=-1!=g.Bb.toLowerCase().indexOf("webkit")&&!g.Cb("Edge");g.Hj=g.Cb("Macintosh");g.Ij=g.Cb("Windows");g.sca=g.Cb("Linux")||g.Cb("CrOS");g.tca=g.Cb("Android");g.qj=Rb();g.rj=g.Cb("iPad");g.uca=g.Cb("iPod");
a:{var Kj="",Lj=function(){var a=g.Bb;if(g.Gj)return/rv\:([^\);]+)(\)|;)/.exec(a);if(g.Ej)return/Edge\/([\d\.]+)/.exec(a);if(g.A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Ld)return/WebKit\/(\S+)/.exec(a);if(g.Dj)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Lj&&(Kj=Lj?Lj[1]:"");if(g.A){var Mj=Vb();if(null!=Mj&&Mj>(0,window.parseFloat)(Kj)){Jj=String(Mj);break a}}Jj=Kj}g.Wb=Jj;Laa={};var Oj=g.m.document;Nj=Oj&&g.A?Vb()||("CSS1Compat"==Oj.compatMode?(0,window.parseInt)(g.Wb,10):5):void 0;g.Yb=Nj;var oc,wca;g.vca=!g.A||g.Zb(9);oc=!g.A||g.Zb(9);wca=g.A&&!g.Xb("9");!g.Ld||g.Xb("528");g.Gj&&g.Xb("1.9b")||g.A&&g.Xb("8")||g.Dj&&g.Xb("9.5")||g.Ld&&g.Xb("528");g.Gj&&!g.Xb("8")||g.A&&g.Xb("9");g.Pj=g.A?"focusin":"DOMFocusIn";g.Qj=g.A?"focusout":"DOMFocusOut";g.Rj=g.Ld?"webkitTransitionEnd":g.Dj?"otransitionend":"transitionend";g.v(g.$b,g.Ab);
g.$b.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Gj&&(g.Ub(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:
d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.K=g.Hj?a.metaKey:a.ctrlKey;this.state=a.state;this.mc=a;a.defaultPrevented&&this.preventDefault()};
g.$b.prototype.stopPropagation=function(){g.$b.M.stopPropagation.call(this);this.mc.stopPropagation?this.mc.stopPropagation():this.mc.cancelBubble=!0};
g.$b.prototype.preventDefault=function(){g.$b.M.preventDefault.call(this);var a=this.mc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,wca)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ac="closure_listenable_"+(1E6*Math.random()|0),Naa=0;g.h=g.dc.prototype;g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.C))return!1;var e=this.C[a];b=ec(e,b,c,d);return-1<b?(cc(e[b]),g.Ua(e,b),0==e.length&&(delete this.C[a],this.F--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.C)if(!a||c==a){for(var d=this.C[c],e=0;e<d.length;e++)++b,cc(d[e]);delete this.C[c];this.F--}return b};
g.h.Ff=g.ba(8);g.h.Qe=function(a,b,c,d){a=this.C[a.toString()];var e=-1;a&&(e=ec(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=g.ja(a),d=c?a.toString():"",e=g.ja(b);return g.Eb(this.C,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};var lc="closure_lm_"+(1E6*Math.random()|0),rc={},nc=0,uc="__closure_events_fn_"+(1E9*Math.random()>>>0);g.v(g.vc,g.vb);g.vc.prototype[ac]=!0;g.h=g.vc.prototype;g.h.Eh=function(){return this.Kk};
g.h.Mg=g.ba(9);g.h.addEventListener=function(a,b,c,d){g.hc(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.pc(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.Eh();if(b){var c=[];for(var d=1;b;b=b.Eh())c.push(b),++d}b=this.Rt;d=a.type||a;if(g.ra(a))a=new g.Ab(a,b);else if(a instanceof g.Ab)a.target=a.target||b;else{var e=a;a=new g.Ab(d,b);g.Nb(a,e)}var e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=wc(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=wc(k,d,!0,a)&&e,a.F||(e=wc(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=wc(k,d,!1,a)&&e;return e};
g.h.Y=function(){g.vc.M.Y.call(this);this.removeAllListeners();this.Kk=null};
g.h.R=function(a,b,c,d){return g.fc(this.kd,String(a),b,!1,c,d)};
g.h.Wd=g.ba(10);g.h.Va=function(a,b,c,d){return this.kd.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.kd?this.kd.removeAll(a):0};
g.h.Ff=g.ba(7);g.h.Qe=function(a,b,c,d){return this.kd.Qe(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.kd.hasListener(g.ja(a)?String(a):void 0,b)};xc.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};g.Sj=g.zc(null);var Jc;var Gc=new xc(function(){return new Cc},function(a){a.reset()},100);
Bc.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
Cc.prototype.set=function(a,b){this.kc=a;this.scope=b;this.next=null};
Cc.prototype.reset=function(){this.next=this.scope=this.kc=null};var Dc,Ec=!1,Fc=new Bc;Oc.prototype.reset=function(){this.context=this.F=this.D=this.C=null;this.G=!1};
var Pc=new xc(function(){return new Oc},function(a){a.reset()},100);
g.Nc.prototype.then=function(a,b,c){return Tc(this,g.ta(a)?a:null,g.ta(b)?b:null,c)};
g.Kc(g.Nc);g.Nc.prototype.cancel=function(a){0==this.C&&Hc(function(){var b=new g.$c(a);Vc(this,b)},this)};
g.Nc.prototype.W=function(a){this.C=0;g.Mc(this,2,a)};
g.Nc.prototype.O=function(a){this.C=0;g.Mc(this,3,a)};
g.Nc.prototype.J=function(){for(var a;a=Wc(this);)Xc(this,a,this.C,this.N);this.K=!1};
var bd=Ac;g.v(g.$c,g.Fa);g.$c.prototype.name="cancel";g.v(g.ed,g.vb);g.h=g.ed.prototype;g.h.ub=0;g.h.Y=function(){g.ed.M.Y.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.ub=g.cd(this.Fc,g.ja(a)?a:this.D)};
g.h.stop=function(){this.isActive()&&g.dd(this.ub);this.ub=0};
g.h.isActive=function(){return 0!=this.ub};
g.h.Bn=function(){this.ub=0;this.C&&this.C.call(this.F)};g.Oh=g.Cb("Firefox");g.Tj=Rb()||g.Cb("iPod");g.Uj=g.Cb("iPad");g.pj=g.Cb("Android")&&!(g.Pb()||g.Cb("Firefox")||g.Cb("Opera")||g.Cb("Silk"));g.oj=g.Pb();g.Vj=g.Qb()&&!g.Sb();var Xaa;Xaa=!g.A||g.Zb(9);g.xca=!g.Gj&&!g.A||g.A&&g.Zb(9)||g.Gj&&g.Xb("1.9.1");g.Wj=g.A&&!g.Xb("9");g.yca=g.A||g.Dj||g.Ld;g.id.prototype.re=!0;g.id.prototype.Pd=function(){return this.C};
g.id.prototype.toString=function(){return"Const{"+this.C+"}"};
g.hd={};g.jd("");g.ld.prototype.re=!0;g.kd={};g.ld.prototype.Pd=function(){return this.C};
g.Xj=g.md("");g.zca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Aca=RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Yj=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");g.od.prototype.re=!0;g.od.prototype.Pd=function(){return this.C};
g.od.prototype.ck=!0;g.od.prototype.ne=g.ba(12);var Waa=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,nd={};g.qd("about:blank");g.td.prototype.ck=!0;g.td.prototype.ne=g.ba(11);g.td.prototype.re=!0;g.td.prototype.Pd=function(){return this.C};
g.sd={};g.Bca=g.ud("<!DOCTYPE html>",0);g.Zj=g.ud("",0);g.ak=g.ud("<br>",0);g.h=g.zd.prototype;g.h.clone=function(){return new g.zd(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.zd&&g.Ad(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.h.translate=function(a,b){a instanceof g.zd?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),g.sa(b)&&(this.y+=b));return this};
g.h.scale=function(a,b){var c=g.sa(b)?b:a;this.x*=a;this.y*=c;return this};g.h=g.Bd.prototype;g.h.clone=function(){return new g.Bd(this.width,this.height)};
g.h.Af=function(){return this.width*this.height};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!this.Af()};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.scale=function(a,b){var c=g.sa(b)?b:a;this.width*=a;this.height*=c;return this};var Dd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.Wd="StopIteration"in g.m?g.m.StopIteration:{message:"StopIteration",stack:""};g.Vd.prototype.next=function(){throw g.Wd;};
g.Vd.prototype.Xc=function(){return this};be.prototype.Mi=function(a){var b=[];de(this,a,b);return b.join("")};
var fe={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},bba=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;g.h=g.ge.prototype;g.h.getWidth=function(){return this.right-this.left};
g.h.getHeight=function(){return this.bottom-this.top};
g.h.clone=function(){return new g.ge(this.top,this.right,this.bottom,this.left)};
g.h.contains=function(a){return g.he(this,a)};
g.h.expand=function(a,b,c,d){g.ua(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};
g.h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.h.translate=function(a,b){a instanceof g.zd?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,g.sa(b)&&(this.top+=b,this.bottom+=b));return this};
g.h.scale=function(a,b){var c=g.sa(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};g.h=g.ie.prototype;g.h.clone=function(){return new g.ie(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.zd?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.h.translate=function(a,b){a instanceof g.zd?(this.left+=a.x,this.top+=a.y):(this.left+=a,g.sa(b)&&(this.top+=b));return this};
g.h.scale=function(a,b){var c=g.sa(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};g.v(g.le,g.vb);g.h=g.le.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.be=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.la):(c&&g.Va(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.Wa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.K)for(e=0;e<c.length;e++){var k=c[e];cba(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;k=this.D.pop();)this.be(k)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.x)(b,this.be,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.zb=g.ba(4);g.h.Y=function(){g.le.M.Y.call(this);this.clear();this.D.length=0};g.ne.prototype.set=function(a,b){g.ja(b)?this.C.set(a,g.ce(b)):this.C.remove(a)};
g.ne.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return g.$d(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.ne.prototype.remove=function(a){this.C.remove(a)};g.v(oe,g.ne);oe.prototype.set=function(a,b){oe.M.set.call(this,a,qe(b))};
oe.prototype.F=function(a){a=oe.M.get.call(this,a);if(!g.ja(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
oe.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,!g.ja(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.v(g.re,oe);g.re.prototype.set=function(a,b,c){if(b=qe(b)){if(c){if(c<(0,g.se)()){g.re.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.se)()}g.re.M.set.call(this,a,b)};
g.re.prototype.F=function(a,b){var c=g.re.M.F.call(this,a);if(c)if(!b&&g.te(c))g.re.prototype.remove.call(this,a);else return c};g.v(g.ue,g.re);g.v(g.ve,dba);g.ve.prototype.zb=g.ba(3);g.ve.prototype.clear=function(){var a=aba(this.Xc(!0)),b=this;(0,g.x)(a,function(a){b.remove(a)})};g.v(g.we,g.ve);g.h=g.we.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if(!g.ra(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.zb=g.ba(2);g.h.Xc=function(a){var b=0,c=this.C,d=new g.Vd;d.next=function(){if(b>=c.length)throw g.Wd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!g.ra(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.v(g.xe,g.we);g.v(ye,g.we);g.bk=g.Gj?"MozUserSelect":g.Ld||g.Ej?"WebkitUserSelect":null;g.Ee=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.og=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.Ff="Microsoft Internet Explorer"==window.navigator.appName;g.Oe=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.n("yt.config_",g.Oe,void 0);var Ue={};var Cca=g.r("ytPubsubPubsubInstance")||new g.le;g.le.prototype.subscribe=g.le.prototype.subscribe;g.le.prototype.unsubscribeByKey=g.le.prototype.be;g.le.prototype.publish=g.le.prototype.Wa;g.le.prototype.clear=g.le.prototype.clear;g.n("ytPubsubPubsubInstance",Cca,void 0);var bf=g.r("ytPubsubPubsubSubscribedKeys")||{};g.n("ytPubsubPubsubSubscribedKeys",bf,void 0);var df=g.r("ytPubsubPubsubTopicToKeys")||{};g.n("ytPubsubPubsubTopicToKeys",df,void 0);var cf=g.r("ytPubsubPubsubIsSynchronous")||{};
g.n("ytPubsubPubsubIsSynchronous",cf,void 0);var fba=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,gba=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;g.kf=null;(0,g.se)();var Dca=0,hba=g.Ld?"webkit":g.Gj?"moz":g.A?"ms":g.Dj?"o":"",vf=g.r("ytDomDomGetNextId")||function(){return++Dca};
g.n("ytDomDomGetNextId",vf,void 0);var iba={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.xf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.xf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.xf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var yf=g.r("ytEventsEventsListeners")||{};g.n("ytEventsEventsListeners",yf,void 0);var Af=g.r("ytEventsEventsCounter")||{count:0};g.n("ytEventsEventsCounter",Af,void 0);var jba={enablejsapi:1},kba={},lba={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};Df.prototype.clone=function(){var a=new Df,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.oa(c)?a[b]=g.Lb(c):a[b]=c}return a};g.ma(g.Gf);g.Gf.prototype.getVersion=function(){return[this.major,this.minor,this.C]};
g.Gf.prototype.isSupported=function(a,b,c){a="string"==typeof a?a.split("."):[a,b,c];a[0]=(0,window.parseInt)(a[0],10)||0;a[1]=(0,window.parseInt)(a[1],10)||0;a[2]=(0,window.parseInt)(a[2],10)||0;return this.major>a[0]||this.major==a[0]&&this.minor>a[1]||this.major==a[0]&&this.minor==a[1]&&this.C>=a[2]};g.Jf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.n("yt.msgs_",g.Jf,void 0);var Sf=g.ja(window.XMLHttpRequest)?function(){return new window.XMLHttpRequest}:g.ja(window.ActiveXObject)?function(){return new window.ActiveXObject("Microsoft.XMLHTTP")}:null;var Uf;Uf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};g.ck=Wf;var ag={},$f=0;var qba,fg;qba={log_event:"events",log_interaction:"interactions"};g.ng={};fg={};g.lg=0;g.mg=g.r("ytLoggingTransportLogPayloadsQueue_")||{};g.n("ytLoggingTransportLogPayloadsQueue_",g.mg,void 0);var gg=g.r("ytLoggingTransportTokensToCttTargetIds_")||{};g.n("ytLoggingTransportTokensToCttTargetIds_",gg,void 0);var ti=pg;g.wg.prototype.C=function(){return{context:g.tg(this.D)}};
g.wg.prototype.F=function(a,b,c){g.C("VISITOR_DATA")||g.Ve(Error("Missing VISITOR_DATA when sending innertube request."));var d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":g.C("VISITOR_DATA","")},ka:b,Cq:"JSON",Xb:c.Xb,Z:function(a,b){c.Z&&c.Z(b)},
onError:function(a,b){if(c.onError)c.onError(b)},
timeout:c.timeout,withCredentials:!0},e=vaa();e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=g.C("SESSION_INDEX",0));var f=this.D.xhrApiaryHost;f&&!f.startsWith("http")&&(f="//"+f);if(g.Se("youtubei_for_web")||g.Se("unplugged_web_same_op_domain"))f="";var k=this.D.aA;k&&(f=k);e&&!f&&(d.headers["x-origin"]=window.location.origin);g.Zf(""+f+g.vg(this.D.innertubeApiVersion,a,b)+"?alt=json&key="+this.D.innertubeApiKey,d)};var zg=g.r("ytLoggingLatencyUsageStats_")||{};g.n("ytLoggingLatencyUsageStats_",zg,void 0);var Ag=0;var dk,ek;dk=new g.xe;g.Cg=dk.isAvailable()?new g.ue(dk):null;ek=new ye;g.Bg=ek.isAvailable()?new g.ue(ek):null;g.h=g.Gg.prototype;g.h.CJ=function(){this.ai()||this.init()};
g.h.enable=function(){this.C=1;(0,g.x)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.CJ,this),this.subscribe("dispose-"+a,this.dispose,this),g.C("PAGE_NAME")==a&&g.Hg(this))},this)};
g.h.init=function(){g.qf(this.F);this.C=2;this.K&&this.K()};
g.h.ai=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.qf(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Ve(a)}};
g.h.subscribe=function(a,b,c){a=g.E(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.ef(this.G);this.G=[]};var Ig=g.r("yt.modules.registry_")||{};g.n("yt.modules.registry_",Ig,void 0);var Og={},tba=0;var uba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Eca=g.r("yt.abuse.botguardInitialized")||lf;g.n("yt.abuse.botguardInitialized",Eca,void 0);var Fca=g.r("yt.abuse.invokeBotguard")||g.mf;g.n("yt.abuse.invokeBotguard",Fca,void 0);var Gca=g.r("yt.abuse.dclkstatus.checkDclkStatus")||sf;g.n("yt.abuse.dclkstatus.checkDclkStatus",Gca,void 0);var Hca=g.r("yt.player.exports.navigate")||g.Vg;g.n("yt.player.exports.navigate",Hca,void 0);var Ica=g.r("yt.util.activity.init")||g.qg;g.n("yt.util.activity.init",Ica,void 0);
var Jca=g.r("yt.util.activity.getTimeSinceActive")||g.rg;g.n("yt.util.activity.getTimeSinceActive",Jca,void 0);var Kca=g.r("yt.util.activity.setTimestamp")||ti;g.n("yt.util.activity.setTimestamp",Kca,void 0);var fk={},Iba=(fk["api.invalidparam"]=2,fk.auth=150,fk["drm.auth"]=150,fk["heartbeat.net"]=150,fk["heartbeat.servererror"]=150,fk["heartbeat.stop"]=150,fk["html5.unsupportedads"]=5,fk["fmt.noneavailable"]=5,fk["fmt.decode"]=5,fk["fmt.unplayable"]=5,fk["html5.missingapi"]=5,fk["html5.unsupportedlive"]=5,fk["drm.unavailable"]=5,fk);var Xh;var gk=g.Bb,gk=gk.toLowerCase();if(-1!=gk.indexOf("android")){var hk=gk.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(hk)Xh=Number(hk[1]);else{var ik={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},jk=gk.match("("+g.Fb(ik).join("|")+")");Xh=jk?ik[jk[0]]:0}}else Xh=void 0;var Kba=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Lba=['audio/mp4; codecs="mp4a.40.2"'];var kk;var lk=g.Bb,mk=lk.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!mk||2>mk.length)kk=void 0;else{var nk=lk.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);kk=nk&&6==nk.length?Number(nk[5].replace("_",".")):0}0<=kk&&0<=g.Bb.search("Safari")&&g.Bb.search("Version");g.v(Wg,g.vb);Wg.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.ge);break}};
Wg.prototype.Y=function(){Yg(this);Wg.M.Y.call(this)};g.Zg.prototype.Mi=function(){return{version:this.version,args:this.args}};g.$g.prototype.toString=function(){return this.topic};var Lca=g.r("ytPubsub2Pubsub2Instance")||new g.le;g.le.prototype.subscribe=g.le.prototype.subscribe;g.le.prototype.unsubscribeByKey=g.le.prototype.be;g.le.prototype.publish=g.le.prototype.Wa;g.le.prototype.clear=g.le.prototype.clear;g.n("ytPubsub2Pubsub2Instance",Lca,void 0);g.ok=g.r("ytPubsub2Pubsub2SubscribedKeys")||{};g.n("ytPubsub2Pubsub2SubscribedKeys",g.ok,void 0);g.pk=g.r("ytPubsub2Pubsub2TopicToKeys")||{};g.n("ytPubsub2Pubsub2TopicToKeys",g.pk,void 0);
g.qk=g.r("ytPubsub2Pubsub2IsAsync")||{};g.n("ytPubsub2Pubsub2IsAsync",g.qk,void 0);g.n("ytPubsub2Pubsub2SkipSubKey",null,void 0);var qh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};g.v(ch,g.Zg);var Bba=new g.$g("timing-sent",ch);fh.prototype.toString=function(){return this.region.toString()+": "+this.timing+" => "+this.url};
gh.prototype.toString=function(){return["progress",this.progress,"timing",this.timing,"area",this.Af].join(": ")};
eh.F=.1;eh.C=/url\(["']?(http[^'"\)]+)['"]?\)/i;eh.D="mark_iframe_loaded: ";eh.G=20;var Mh=(0,g.se)().toString();var zba={vc:!0},Jh={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile_polymer/mobile_polymer"]':"mpj",'link[rel="import"][name="mobile_polymer"]':"mph",'script[name="player-plasma-phone/base"]':"mpppj",'script[name="player-plasma-tablet/base"]':"mpptj",
'link[rel="stylesheet"][name="mobile-polymer-player"]':"mppc","#player_css":"mbpc","#player_js":"mbpj"},Hh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId",fmt:"playerInfo.itag"},Eba="ap c cver ei yt_fss yt_li".split(" "),Hba={ad_to_ad:"LATENCY_ACTION_AD_TO_AD",ad_to_video:"LATENCY_ACTION_AD_TO_VIDEO",browse:"LATENCY_ACTION_BROWSE",
channels:"LATENCY_ACTION_CHANNELS",embed:"LATENCY_ACTION_EMBED",home:"LATENCY_ACTION_HOME",library:"LATENCY_ACTION_LIBRARY",live:"LATENCY_ACTION_LIVE",results:"LATENCY_ACTION_RESULTS",search:"LATENCY_ACTION_RESULTS",video_to_ad:"LATENCY_ACTION_VIDEO_TO_AD",watch:"LATENCY_ACTION_WATCH","watch,watch7":"LATENCY_ACTION_WATCH","watch,watch7_html5":"LATENCY_ACTION_WATCH","watch,watch7ad":"LATENCY_ACTION_WATCH","watch,watch7ad_html5":"LATENCY_ACTION_WATCH"},Dba=["isNavigation","isMonetized","prerollAllowed",
"isRedSubscriber","isVisible"],xba=(0,g.t)(qh.clearResourceTimings||qh.webkitClearResourceTimings||qh.mozClearResourceTimings||qh.msClearResourceTimings||qh.oClearResourceTimings||g.la,qh);g.v(Ph,g.vb);var Jba=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g.h=Ph.prototype;g.h.getId=function(){return this.ea};
g.h.Nl=function(a,b){this.ob()||(Rh(this,a),Vh(this,b),this.K&&Sh(this))};
g.h.uv=function(){return this.Db};
g.h.KK=function(){if(!this.na){var a=Yh(this);if(a&&"html5"==$h(this))this.W="html5",this.K||this.Pf();else if(bi(this),this.W="html5",a&&this.J)this.G.appendChild(this.J),this.Pf();else{this.C.loaded=!0;var b=!1;this.ma=(0,g.t)(function(){b=!0;var a=this.G,d=this.C.clone();g.r("yt.player.Application.create")(a,d);this.Pf()},this);
this.na=!0;a?this.ma():(g.jf(this.C.assets.js,this.ma),g.Pg(this.C.assets.css),ai(this)&&!b&&g.n("yt.player.Application.create",null,void 0))}}};
g.h.JK=function(){var a=this.C.clone();if(!this.H){var b=Uh(this);b&&(this.H=g.Pd("SPAN"),this.H.tabIndex=0,Xg(this.za,this.H,"focus",this.Ip),this.O=g.Pd("SPAN"),this.O.tabIndex=0,Xg(this.za,this.O,"focus",this.Ip),g.Rd(this.H,b),g.Sd(this.O,b))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";"flash"==$h(this)?(this.W="flash",this.K||this.Pf()):(bi(this),this.W="flash",this.C.loaded=!0,b=g.Gf.getInstance(),b=g.Hf(b)||!g.If(b)?a.url:a.urlV9As2,window!=window.top&&window.document.referrer&&
(a.args.framer=window.document.referrer.substring(0,128)),g.Qf(this.G,b,a),this.Pf())};
g.h.Ip=function(){Uh(this).focus()};
g.h.Pf=function(){if(!this.ob()){var a=Uh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.na=!1,a.isNotServable&&a.isNotServable(this.C.args.video_id))Wh(this);else{Nh(this);this.K=!0;a=Uh(this);a.addEventListener&&(this.X=Zh(this,a,"addEventListener"));a.removeEventListener&&(this.ib=Zh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.api[d]||(this.api[d]=Zh(this,a,d))}for(var e in this.D)this.X(e,
this.D[e]);Sh(this);this.jb&&this.jb(this.api);this.ia.Wa("onReady",this.api)}else this.Pb=g.$e((0,g.t)(this.Pf,this),50)}};
g.h.XK=function(){return this.K};
g.h.Jd=function(a,b){if(!this.ob()){var c=Qh(this,b);if(c){if(!g.Sa(this.Zb,a)&&!this.D[a]){var d=Mba(this,a);this.X&&this.X(a,d)}this.ia.subscribe(a,c);"onReady"==a&&this.K&&g.$e(g.u(c,this.api),0)}}};
g.h.pJ=function(a,b){if(!this.ob()){var c=Qh(this,b);c&&g.me(this.ia,a,c)}};
g.h.uu=function(a){a=a?$aa:Zaa;for(var b=a(window.document.activeElement);b&&(1!=b.nodeType||b==this.H||b==this.O||(b.focus(),b!=window.document.activeElement));)b=a(b)};
g.h.im=function(a){g.F("a11y-announce",a)};
g.h.YE=function(a){Wh(this,a)};
g.h.cF=function(a){g.F("WATCH_LATER_VIDEO_ADDED",a)};
g.h.dF=function(a){g.F("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.KE=function(){this.Kc||(g.oj?(this.qb=g.Kd(window.document),Xg(this.V,window,"scroll",this.oH),Xg(this.V,this.G,"touchmove",this.PG)):(Xg(this.V,this.G,"mousewheel",this.Wp),Xg(this.V,this.G,"wheel",this.Wp)),this.Kc=!0)};
g.h.LE=function(){Yg(this.V);this.Kc=!1};
g.h.Wp=function(a){g.Bf(a)};
g.h.oH=function(){window.scrollTo(this.qb.x,this.qb.y)};
g.h.PG=function(a){a.preventDefault()};
g.h.mw=function(){return this.W||$h(this)};
g.h.Rv=function(){return this.rd};
g.h.cancel=function(){if(this.ma){var a=this.ma,b=g.hf(this.C.assets.js);window.spf.script.ignore(b,a)}g.Ye(this.Pb);this.na=!1};
g.h.Y=function(){bi(this);if(this.J&&this.C)try{this.J.destroy()}catch(b){g.Ve(b)}this.mb=null;for(var a in this.D)g.m[this.D[a]]=null;this.Db=this.C=this.api=null;delete this.G;delete this.N;Ph.M.Y.call(this)};g.di={};g.ci="player_uid_"+(1E9*Math.random()>>>0);g.rk=window.performance&&window.performance.memory;g.Vi={};var mi=0,ni=0,ji=[],Fi=[],gi=0,ki={},li={},hi=new g.ed(Uba,1E3);var vi,Ai;g.zi=null;Ai="";var Bi=null,Ei=[];var Ji,aj,$i,Li,Ki,fca,Zba,bca,$ba,aca,Wi;Li=0;Ki=0;fca=["server_prefetched_vast","vmap"];Zba=[900,60,"waiting"];bca=[500,99,"waiting"];$ba=[300,60,"waiting"];aca=[400,99,"waiting"];Wi=[300,101,"done"];var ej=null;window.yt=window.yt||{};g.n("yt.setConfig",g.Pe,void 0);g.n("yt.pushConfigArray",Qe,void 0);g.n("yt.getConfig",g.C,void 0);g.n("yt.config.set",g.Pe,void 0);g.n("yt.config.pushArray",Qe,void 0);g.n("yt.config.get",g.C,void 0);g.n("yt.hasMsg",g.Kf,void 0);g.n("yt.setMsg",Lf,void 0);g.n("yt.setGoogMsg",Mf,void 0);g.n("yt.msgs.has",g.Kf,void 0);g.n("yt.msgs.set",Lf,void 0);g.n("yt.msgs.setGoog",Mf,void 0);g.n("yt.pubsub.publish",g.F,void 0);g.n("yt.pubsub.subscribe",g.E,void 0);
g.n("ytcsi.tick",g.ph,void 0);g.v(tj,g.Gg);
tj.prototype.enable=function(){window.onload=Xba;window.onunload=Yba;window.onerror=eba;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",Hi),window.addEventListener("spfhistory",Ii),window.addEventListener("spfrequest",Ni),window.addEventListener("spfpartprocess",Ri),window.addEventListener("spfpartdone",Si),window.addEventListener("spfprocess",Ti),window.addEventListener("spfdone",Xi),window.addEventListener("spferror",Yi),window.addEventListener("spfreload",
Zi),window.addEventListener("spfjsbeforeunload",uj)),a.config=a.config||{},window.ytdepmap?window.spf.script.ready("spf",function(){a.enabled=window.spf.init(a.config)}):a.enabled=window.spf.init(a.config),this.subscribe("init",dca),this.subscribe("dispose",eca)):window.spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
tj.prototype.init=function(){tj.M.init.call(this);(window.ytspf||{}).enabled||window.spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.C("PAGEFRAME_JS")){var b=g.C("PAGEFRAME_JS",void 0);var c=function(){window.ytPageFrameLoaded=!0;g.r("ytbin.www.pageframe.setup")()}}else a&&(a=g.r("yt.www.masthead.loadSearchbox"))&&a();
var a=g.C("JS_COMMON_MODULE"),d=g.C("JS_PAGE_MODULES");d||(d=[a]);a=g.C("JS_DELAY_LOAD",0);0<a?(g.Ye(this.D),this.D=g.$e(function(){b&&g.jf(b,c);window.spf.script.require(d)},a)):(b&&g.jf(b,c),window.spf.script.require(d));
Vba();Dh();Cba();Kh(!0);g.nh(!1);g.C("SERVICE_WORKER_KILLSWITCH",void 0)||window.navigator.serviceWorker&&window.navigator.serviceWorker.getRegistrations&&"https:"==window.location.protocol&&(g.Se("service_worker_enabled")?qca():oca())};
tj.prototype.dispose=function(){g.Ye(this.D);var a=g.r("ytbin.www.pageframe.cancelSetup");a&&a();g.Xe(vi);if(a=g.xi())a.removeEventListener("onReady",wi),a.removeEventListener("onStateChange",wi);Kh(!1);(a=lj())&&g.Cf(a);tj.M.dispose.call(this)};
tj.prototype.disable=function(){tj.M.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",Hi),window.removeEventListener("spfhistory",Ii),window.removeEventListener("spfrequest",Ni),window.removeEventListener("spfpartprocess",Ri),window.removeEventListener("spfpartdone",Si),window.removeEventListener("spfprocess",Ti),window.removeEventListener("spfdone",Xi),window.removeEventListener("spferror",Yi),window.removeEventListener("spfreload",Zi),window.removeEventListener("spfjsbeforeunload",
uj));window.onload=null;window.onunload=null;window.onerror=null};
g.Kg(new tj);})(_yt_www);


}
/*
     FILE ARCHIVED ON 00:04:44 May 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:26:37 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 104.924
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.065
  cdx.remote: 0.059
  esindex: 0.01
  LoadShardBlock: 31.956 (3)
  PetaboxLoader3.datanode: 145.066 (5)
  load_resource: 239.056 (2)
  PetaboxLoader3.resolve: 101.471 (2)
*/