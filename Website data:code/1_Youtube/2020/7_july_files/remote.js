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

(function(g){var window=this;var Txa=function(a,b){return g.Mb(a,b)},Z5=function(a,b,c){a.A.set(b,c)},$5=function(a){Z5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.C)()).toString(36));
return a},a6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.bn(a.A,b,c)},Uxa=function(a,b){var c=[];
g.kk(b,function(d){try{var e=g.co.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.bo(e)&&c.push(d)},a);
return c},Vxa=function(a,b){var c=Uxa(a,b);
(0,g.y)(c,function(d){g.co.prototype.remove.call(this,d)},a)},Wxa=function(a){if(a.Yc){if(a.Yc.locationOverrideToken)return{locationOverrideToken:a.Yc.locationOverrideToken};
if(null!=a.Yc.latitudeE7&&null!=a.Yc.longitudeE7)return{latitudeE7:a.Yc.latitudeE7,longitudeE7:a.Yc.longitudeE7}}return null},Xxa=function(a,b){g.fb(a,b)||a.push(b)},b6=function(a){var b=0,c;
for(c in a)b++;return b},Yxa=function(a,b){var c=b instanceof g.zc?b:g.Ec(b,/^data:image\//i.test(b));
a.src=g.Ac(c)},c6=function(){},Zxa=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},$xa=function(a){if(a.Ud&&"function"==typeof a.Ud)return a.Ud();
if("string"===typeof a)return a.split("");if(g.Ma(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Ib(a)},aya=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ma(a)||"string"===typeof a)(0,g.y)(a,b,void 0);else{if(a.Re&&"function"==typeof a.Re)var c=a.Re();else if(a.Ud&&"function"==typeof a.Ud)c=void 0;else if(g.Ma(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Jb(a);d=$xa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},bya=function(a,b,c,d){var e=new g.Qm(null,void 0);
a&&g.Rm(e,a);b&&g.Sm(e,b);c&&g.Tm(e,c);d&&(e.u=d);return e},d6=function(a,b){g.Po[a]=!0;
var c=g.No();c&&c.publish.apply(c,arguments);g.Po[a]=!1},e6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Nm;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",cya(this,a.capabilities||""),dya(this,a.experiments||""))},cya=function(a,b){a.capabilities.clear();
(0,g.Ae)(b.split(","),g.Ra(Txa,eya)).forEach(function(c){a.capabilities.add(c)})},dya=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},f6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},g6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},fya=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},gya=function(a){return new f6(a)},hya=function(a){return Array.isArray(a)?(0,g.Jc)(a,gya):[]},h6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},i6=function(a){return Array.isArray(a)?"["+(0,g.Jc)(a,h6).join(",")+"]":"null"},j6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|
0;
return("x"==a?b:b&3|8).toString(16)})},iya=function(a){return(0,g.Jc)(a,function(b){return{key:b.id,
name:b.name}})},k6=function(a,b){return g.cb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},l6=function(a,b){return g.cb(a,function(c){return g6(c,b)})},jya=function(){var a=(0,g.Ks)();
a&&Vxa(a,a.o.Ig(!0))},m6=function(){var a=g.Ns("yt-remote-connected-devices")||[];
g.wb(a);return a},kya=function(a){if(g.gb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.Jc)(a,function(d,e){return 0==e?d:d.substring(c.length)})},lya=function(a){g.Ms("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.Ns("yt-remote-device-id");a||(a=j6(),g.Ms("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.fb(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.fb(a,b);g.Ps()&&g.zb(a,b);a=kya(a);if(g.gb(a))try{g.Dq("remote_sid")}catch(c){}else try{g.Bq("remote_sid",a.join(","),-1)}catch(c){}},mya=function(){return g.Ns("yt-remote-session-browser-channel")},nya=function(){return g.Ns("yt-remote-local-screens")||[]},oya=function(){g.Ms("yt-remote-lounge-token-expiration",!0,86400)},pya=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.Jc)(nya(),function(d){return d.loungeToken}),c=(0,g.Jc)(a,function(d){return d.loungeToken});
(0,g.wi)(c,function(d){return!g.fb(b,d)})&&oya();
g.Ms("yt-remote-local-screens",a,31536E3)},qya=function(a,b){g.Ms("yt-remote-session-browser-channel",a);
g.Ms("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.fb(c,d)||c.push(d);lya(c);p6()},q6=function(a){a||(g.Os("yt-remote-session-screen-id"),g.Os("yt-remote-session-video-id"));
p6();a=m6();g.kb(a,o6());lya(a)},rya=function(){if(!r6){var a=g.no();
a&&(r6=new g.Xn(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},sya=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},tya=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},s6=function(a){a.length?uya(a.shift(),function(){s6(a)}):t6()},vya=function(a){return"chrome-extension://"+a+"/cast_sender.js"},uya=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},t6=function(){var a=tya();
a&&a(!1,"No cast extension found")},xya=function(){if(wya){var a=2,b=tya(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;uya("//web.archive.org/web/20200701002914/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",t6,c)}},yya=function(){xya();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);s6(["//web.archive.org/web/20200701002914/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20200701002914/https://www.gstatic.com/eureka/clank/cast_sender.js"])},u6=function(a,b,c){g.z.call(this);
this.F=null!=c?(0,g.x)(a,c):a;this.Nd=b;this.C=(0,g.x)(this.PF,this);this.o=!1;this.u=0;this.A=this.La=null;this.B=[]},v6=function(a,b,c){g.z.call(this);
this.B=null!=c?a.bind(c):a;this.Nd=b;this.A=null;this.o=!1;this.u=0;this.La=null},w6=function(a){a.La=g.Yf(function(){a.La=null;
a.o&&!a.u&&(a.o=!1,w6(a))},a.Nd);
var b=a.A;a.A=null;a.B.apply(null,b)},x6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return Zxa(a)},y6=function(){},z6=function(){},zya=function(){},Bya=function(a){return(a=Aya(a))?new ActiveXObject(a):new XMLHttpRequest},Aya=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},A6=function(a,b,c,d){this.o=a;
this.A=b;this.H=c;this.G=d||1;this.C=45E3;this.B=new g.B1(this);this.u=new g.Xf;this.u.setInterval(250)},Dya=function(a,b,c){a.vl=1;
a.zh=$5(b.clone());a.Fj=c;a.F=!0;Cya(a,null)},B6=function(a,b,c,d,e){a.vl=1;
a.zh=$5(b.clone());a.Fj=null;a.F=c;e&&(a.yC=!1);Cya(a,d)},Cya=function(a,b){a.ql=(0,g.C)();
C6(a);a.wi=a.zh.clone();a6(a.wi,"t",a.G);a.En=0;a.Zc=a.o.ks(a.o.qn()?b:null);0<a.Zs&&(a.Bq=new v6((0,g.x)(a.yD,a,a.Zc),a.Zs));a.B.oa(a.Zc,"readystatechange",a.XN);var c=a.hj?g.Sb(a.hj):{};a.Fj?(a.ir="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Zc.send(a.wi,a.ir,a.Fj,c)):(a.ir="GET",a.yC&&!g.pe&&(c.Connection="close"),a.Zc.send(a.wi,a.ir,null,c));a.o.Jf(1)},Gya=function(a,b,c){for(var d=!0;!a.Oi&&a.En<c.length;){var e=Eya(a,c);
if(e==D6){4==b&&(a.Qh=4,E6(15),d=!1);break}else if(e==Fya){a.Qh=4;E6(16);d=!1;break}else F6(a,e)}4==b&&0==c.length&&(a.Qh=1,E6(17),d=!1);a.Qf=a.Qf&&d;d||(G6(a),H6(a))},Eya=function(a,b){var c=a.En,d=b.indexOf("\n",c);
if(-1==d)return D6;c=Number(b.substring(c,d));if(isNaN(c))return Fya;d+=1;if(d+c>b.length)return D6;var e=b.substr(d,c);a.En=d+c;return e},Iya=function(a,b){a.ql=(0,g.C)();
C6(a);var c=b?window.location.hostname:"";a.wi=a.zh.clone();Z5(a.wi,"DOMAIN",c);Z5(a.wi,"t",a.G);try{a.Uf=new ActiveXObject("htmlfile")}catch(n){G6(a);a.Qh=7;E6(22);H6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in I6)k=I6[l];else if(l in Hya)k=I6[l]=Hya[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
I6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.ad(g.cc("b/12014412"),d+"</body></html>");a.Uf.open();a.Uf.write(g.Wc(c));a.Uf.close();a.Uf.parentWindow.m=(0,g.x)(a.kN,a);a.Uf.parentWindow.d=(0,g.x)(a.FB,a,!0);a.Uf.parentWindow.rpcClose=(0,g.x)(a.FB,a,!1);c=a.Uf.createElement("DIV");a.Uf.parentWindow.document.body.appendChild(c);d=g.Dc(a.wi.toString());d=g.id(g.Ac(d));d=g.ad(g.cc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.bd(c,d);a.o.Jf(1)},C6=function(a){a.Wv=(0,g.C)()+a.C;
Jya(a,a.C)},Jya=function(a,b){if(null!=a.Cl)throw Error("WatchDog timer not null");
a.Cl=J6((0,g.x)(a.sN,a),b)},K6=function(a){a.Cl&&(g.v.clearTimeout(a.Cl),a.Cl=null)},H6=function(a){a.o.By()||a.Oi||a.o.To(a)},G6=function(a){K6(a);
g.Me(a.Bq);a.Bq=null;a.u.stop();g.Jsa(a.B);if(a.Zc){var b=a.Zc;a.Zc=null;b.abort();b.dispose()}a.Uf&&(a.Uf=null)},F6=function(a,b){try{a.o.xB(a,b),a.o.Jf(4)}catch(c){}},Lya=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;Kya(a,b,function(k){k?c(!0):g.v.setTimeout(function(){Lya(a,b,c,d,f)},f)})}},Kya=function(a,b,c){var d=new Image;
d.onload=function(){try{L6(d),c(!0)}catch(e){}};
d.onerror=function(){try{L6(d),c(!1)}catch(e){}};
d.onabort=function(){try{L6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{L6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
Yxa(d,a)},L6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},Mya=function(a){this.o=a;
this.u=new y6},Nya=function(a){var b=M6(a.o,a.Pl,"/mail/images/cleardot.gif");
$5(b);Lya(b.toString(),5E3,(0,g.x)(a.PE,a),3,2E3);a.Jf(1)},O6=function(a){var b=a.o.L;
if(null!=b)E6(5),b?(E6(11),N6(a.o,a,!1)):(E6(12),N6(a.o,a,!0));else if(a.le=new A6(a,void 0,void 0,void 0),a.le.hj=a.Xs,b=a.o,b=M6(b,b.qn()?a.om:null,a.Ys),E6(5),!g.ne||g.Sd(10))a6(b,"TYPE","xmlhttp"),B6(a.le,b,!1,a.om,!1);else{a6(b,"TYPE","html");var c=a.le;a=!!a.om;c.vl=3;c.zh=$5(b.clone());Iya(c,a)}},P6=function(a){g.mf.call(this);
this.headers=new g.Nm;this.V=a||null;this.A=!1;this.T=this.o=null;this.fa=this.L="";this.F=0;this.B="";this.C=this.ba=this.H=this.Z=!1;this.G=0;this.N=null;this.ea="";this.R=this.aa=!1},Oya=function(a){return g.ne&&g.Rd(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},Pya=function(a){return"content-type"==a.toLowerCase()},Rya=function(a,b){a.A=!1;
a.o&&(a.C=!0,a.o.abort(),a.C=!1);a.B=b;a.F=5;Qya(a);Q6(a)},Qya=function(a){a.Z||(a.Z=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},Tya=function(a){if(a.A&&"undefined"!=typeof g.G1)if(a.T[1]&&4==R6(a)&&2==a.getStatus())S6(a,"Local request error detected and ignored");
else if(a.H&&4==R6(a))g.Yf(a.tB,0,a);else if(a.dispatchEvent("readystatechange"),4==R6(a)){S6(a,"Request complete");a.A=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.sd(1,String(a.L));if(!f&&g.v.self&&g.v.self.location){var k=g.v.self.location.protocol;f=k.substr(0,k.length-1)}e=!Sya.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.F=6;try{var l=2<R6(a)?a.o.statusText:""}catch(m){l=""}a.B=l+" ["+a.getStatus()+"]";Qya(a)}}finally{Q6(a)}}},Q6=function(a,b){if(a.o){Uya(a);
var c=a.o,d=a.T[0]?g.Ja:null;a.o=null;a.T=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},Uya=function(a){a.o&&a.R&&(a.o.ontimeout=null);
a.N&&(g.v.clearTimeout(a.N),a.N=null)},R6=function(a){return a.o?a.o.readyState:0},T6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},S6=function(a,b){return b+" ["+a.fa+" "+a.L+" "+a.getStatus()+"]"},U6=function(a,b,c){this.o=1;
this.u=[];this.B=[];this.C=new y6;this.H=a||null;this.L=null!=b?b:null;this.F=c||!1},Vya=function(a,b){this.o=a;
this.map=b;this.context=null},Wya=function(a){g.Oe.call(this,"statevent",a)},Xya=function(a,b){g.Oe.call(this,"timingevent",a);
this.size=b},Yya=function(a){g.Oe.call(this,"serverreachability",a)},aza=function(a){Zya(a);
if(3==a.o){var b=a.Um++,c=a.Fo.clone();Z5(c,"SID",a.A);Z5(c,"RID",b);Z5(c,"TYPE","terminate");V6(a,c);b=new A6(a,a.A,b,void 0);b.vl=2;b.zh=$5(c.clone());Yxa(new Image,b.zh.toString());b.ql=(0,g.C)();C6(b)}$ya(a)},bza=function(a){a.nF(1,0);
a.Fo=M6(a,null,a.Ws);W6(a)},Zya=function(a){a.Ch&&(a.Ch.abort(),a.Ch=null);
a.Cc&&(a.Cc.cancel(),a.Cc=null);a.Jg&&(g.v.clearTimeout(a.Jg),a.Jg=null);X6(a);a.de&&(a.de.cancel(),a.de=null);a.Ih&&(g.v.clearTimeout(a.Ih),a.Ih=null)},cza=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new Vya(a.KJ++,b));2!=a.o&&3!=a.o||W6(a)},W6=function(a){a.de||a.Ih||(a.Ih=J6((0,g.x)(a.EB,a),0),a.jk=0)},eza=function(a,b){if(1==a.o){if(!b){a.Um=Math.floor(1E5*Math.random());
var c=a.Um++,d=new A6(a,"",c,void 0);d.hj=null;var e=Y6(a),f=a.Fo.clone();Z5(f,"RID",c);Z5(f,"CVER","1");V6(a,f);Dya(d,f,e);a.de=d;a.o=2}}else 3==a.o&&(b?dza(a,b):0==a.u.length||a.de||dza(a))},dza=function(a,b){if(b)if(6<a.Pi){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.Um-1;var d=Y6(a)}else c=b.H,d=b.Fj;else c=a.Um++,d=Y6(a);var e=a.Fo.clone();Z5(e,"SID",a.A);Z5(e,"RID",c);Z5(e,"AID",a.Dk);V6(a,e);c=new A6(a,a.A,c,a.jk+1);c.hj=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.de=c;Dya(c,e,d)},V6=function(a,b){if(a.Kd){var c=a.Kd.Xx();
c&&g.Bb(c,function(d,e){Z5(b,e,d)})}},Y6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Pi&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,k=a.u[e].map;f=6>=a.Pi?e:f-d;try{g.Bb(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},fza=function(a){a.Cc||a.Jg||(a.G=1,a.Jg=J6((0,g.x)(a.DB,a),0),a.Xj=0)},Z6=function(a){if(a.Cc||a.Jg||3<=a.Xj)return!1;
a.G++;a.Jg=J6((0,g.x)(a.DB,a),gza(a,a.Xj));a.Xj++;return!0},N6=function(a,b,c){a.fr=c;
a.cg=b.Zg;a.F||bza(a)},X6=function(a){null!=a.Ui&&(g.v.clearTimeout(a.Ui),a.Ui=null)},gza=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},$6=function(a,b){if(2==b||9==b){var c=null;
a.Kd&&(c=null);var d=(0,g.x)(a.JO,a);c||(c=new g.Qm("//web.archive.org/web/20200701002914/https://www.google.com/images/cleardot.gif"),$5(c));Kya(c.toString(),1E4,d)}else E6(2);hza(a,b)},hza=function(a,b){a.o=0;
a.Kd&&a.Kd.lx(b);$ya(a);Zya(a)},$ya=function(a){a.o=0;
a.cg=-1;if(a.Kd)if(0==a.B.length&&0==a.u.length)a.Kd.Ur();else{g.ob(a.B);var b=g.ob(a.u);a.B.length=0;a.u.length=0;a.Kd.Ur(b)}},M6=function(a,b,c){var d=g.Ym(c);
if(""!=d.o)b&&g.Sm(d,b+"."+d.o),g.Tm(d,d.B);else{var e=window.location;d=bya(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.em&&g.Bb(a.em,function(f,k){Z5(d,k,f)});
Z5(d,"VER",a.Pi);V6(a,d);return d},J6=function(a,b){if(!g.Na(a))throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},E6=function(a){a7.dispatchEvent(new Wya(a7,a))},iza=function(){},jza=function(){this.o=[];
this.u=[]},kza=function(a,b){this.action=a;
this.params=b||{}},b7=function(a,b){g.z.call(this);
this.o=new g.H(this.dN,0,this);g.A(this,this.o);this.Nd=5E3;this.u=0;if(g.Na(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Na(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.A=a},c7=function(a,b,c){this.N=a;
this.F=b;this.A=new g.Wn;this.u=new b7(this.lO,this);this.o=null;this.Mb=!1;this.C=null;this.L="";this.H=this.B=0;this.G=[];this.R=c||!1},lza=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.fr,sessionId:a.o.A,arrayId:a.o.Dk}},mza=function(a,b){a.H=b||0;
a.u.stop();a.o&&(3==a.o.o&&eza(a.o),aza(a.o));a.H=0},d7=function(a){return!!a.o&&3==a.o.o},nza=function(a,b){(a.F.loungeIdToken=b)||a.u.stop()},e7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.sd(4,a))||"";b&&(this.port=":"+b);this.domain=g.td(a)||"";a=g.Pc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.wc(a,"10.0")&&(this.u=!1))},f7=function(a,b){var c=a.o;
a.u&&(c="https://"+a.domain+a.port+a.o);return g.Ed(c+b,{})},g7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ra(a.B,d,!0),onError:g.Ra(a.A,e),He:g.Ra(a.C,e)};c&&(a.Db=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.uq(b,a)},rza=function(){var a=oza;
pza();h7.push(a);qza(h7)},i7=function(a,b){pza();
var c=h7,d=sza(a,String(b));g.gb(c)?tza(d):(qza(c),(0,g.y)(c,function(e){e(d)}))},pza=function(){h7||(h7=g.Ia("yt.mdx.remote.debug.handlers_")||[],g.Ga("yt.mdx.remote.debug.handlers_",h7,void 0))},tza=function(a){var b=(j7+1)%50;
j7=b;k7[b]=a;l7||(l7=49==b)},qza=function(a){var b=k7;
if(b[0]){var c=j7,d=l7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.y)(a,function(f){f(e)})}while(d!=c);
k7=Array(50);j7=-1;l7=!1}},sza=function(a,b){var c=((0,g.C)()-uza)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},m7=function(a){g.N.call(this);
this.F=a;this.screens=[]},vza=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0},wza=function(a,b){var c=a.screens.length!=b.length;
a.screens=(0,g.Ae)(a.screens,function(f){return!!k6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=vza(a,b[d])||c;return c},xza=function(a,b){var c=a.screens.length;
a.screens=(0,g.Ae)(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},n7=function(a,b,c,d){g.N.call(this);
this.F=a;this.B=b;this.C=c;this.A=d;this.u=0;this.o=null;this.La=NaN},p7=function(a){m7.call(this,"LocalScreenService");
this.u=a;this.o=NaN;o7(this);this.info("Initializing with "+i6(this.screens))},yza=function(a){if(a.screens.length){var b=(0,g.Jc)(a.screens,function(d){return d.id}),c=f7(a.u,"/pairing/get_lounge_token_batch");
g7(a.u,c,{screen_ids:b.join(",")},(0,g.x)(a.ZF,a),(0,g.x)(a.YF,a))}},o7=function(a){var b=hya(nya());
b=(0,g.Ae)(b,function(c){return!c.uuid});
return wza(a,b)},q7=function(a,b){pya((0,g.Jc)(a.screens,fya));
b&&oya()},s7=function(a,b){g.N.call(this);
this.F=b;var c=g.Ns("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.F(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.fb(c,l)}this.o=d;this.C=a;this.A=this.B=NaN;this.u=null;r7("Initialized with "+g.Mk(this.o))},zza=function(a,b,c){var d=f7(a.C,"/pairing/get_screen_availability");
g7(a.C,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},t7=function(a,b){a:if(b6(b)!=b6(a.o))var c=!1;
else{c=g.Jb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(r7("Updated online screens: "+g.Mk(a.o)),a.o=b,a.S("screenChange"));Aza(a)},u7=function(a){isNaN(a.A)||g.Mo(a.A);
a.A=g.Ko((0,g.x)(a.bv,a),0<a.B&&a.B<(0,g.C)()?2E4:1E4)},r7=function(a){i7("OnlineScreenService",a)},Bza=function(a){var b={};
(0,g.y)(a.F(),function(c){c.token?b[c.token]=c.id:this.pc("Requesting availability of screen w/o lounge token.")});
return b},Aza=function(a){a=g.Jb(g.Cb(a.o,function(b){return b}));
g.wb(a);a.length?g.Ms("yt-remote-online-screen-ids",a.join(","),60):g.Os("yt-remote-online-screen-ids")},v7=function(a){m7.call(this,"ScreenService");
this.C=a;this.o=this.u=null;this.A=[];this.B={};Cza(this)},Eza=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.ze();if(k=(c?l6(k,c):null)||l6(k,b)){k.uuid=b;var l=w7(a,k);zza(a.o,l,function(m){e(m?l:null)})}else c?Dza(a,c,(0,g.x)(function(m){var n=w7(this,new f6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));zza(this.o,n,function(q){e(q?n:null)})},a),f):e(null)},Fza=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},Dza=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Db:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.uq(f7(a.C,"/pairing/get_lounge_token_batch"),e)},Gza=function(a){a.screens=a.u.ze();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+i6(a.screens))},Cza=function(a){x7(a);
a.u=new p7(a.C);a.u.subscribe("screenChange",(0,g.x)(a.hG,a));Gza(a);a.A=hya(g.Ns("yt-remote-automatic-screen-cache")||[]);x7(a);a.info("Initializing automatic screens: "+i6(a.A));a.o=new s7(a.C,(0,g.x)(a.ze,a,!0));a.o.subscribe("screenChange",(0,g.x)(function(){this.S("onlineScreenChange")},a))},w7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=l6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.Ms("yt-remote-automatic-screen-cache",(0,g.Jc)(a.A,fya)));x7(a);a.B[b.uuid]=b.id;g.Ms("yt-remote-device-id-map",a.B,31536E3);return b},x7=function(a){a.B=g.Ns("yt-remote-device-id-map")||{}},y7=function(a,b,c){g.N.call(this);
this.T=c;this.L=a;this.u=b;this.H=null},z7=function(a,b){i7(a.T,b)},A7=function(a,b){y7.call(this,a,b,"CastSession");
this.o=null;this.A=0;this.C=(0,g.x)(this.nP,this);this.B=(0,g.x)(this.AN,this);this.A=g.Ko((0,g.x)(function(){Hza(this,null)},this),12E4)},Iza=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Mk(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ja,(0,g.x)(function(){z7(this,"Failed to send message: getMdxSessionStatus.")},a)):z7(a,"Sending yt message without session: "+g.Mk(b))},Hza=function(a,b){g.Mo(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.getScreen()||a.getScreen().id!=b){var c=(0,g.x)(a.qq,a),d=(0,g.x)(a.Ge,a);a.sy(b,c,d,5)}}else a.Ge(Error("Waiting for session status timed out."))},B7=function(a,b,c){y7.call(this,a,b,"DialSession");
this.A=this.G=null;this.N="";this.V=c;this.B=null;this.F=g.Ja;this.C=NaN;this.R=(0,g.x)(this.qP,this);this.o=g.Ja},Jza=function(a){a.o=a.L.ED(a.N,a.u.label,a.u.friendlyName,(0,g.x)(function(b){this.o=g.Ja;
this.qq(b)},a),(0,g.x)(function(b){this.o=g.Ja;
this.Ge(b)},a))},Kza=function(a){var b={};
b.pairingCode=a.N;b.theme=a.V;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}rya()&&(b.env_useStageMdx=1);return g.Bd(b)},C7=function(a,b){y7.call(this,a,b,"ManualSession");
this.o=g.Ko((0,g.x)(this.Ek,this,null),150)},D7=function(a,b,c,d){g.N.call(this);
this.u=a;this.G=b||"233637DE";this.F=c||"cl";this.H=d||!1;this.o=null;this.C=!1;this.A=[];this.B=(0,g.x)(this.rM,this)},Lza=function(a,b){return b?g.cb(a.A,function(c){return g6(b,c.label)},a):null},E7=function(a){i7("Controller",a)},oza=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},F7=function(a){return a.C||!!a.A.length||!!a.o},G7=function(a,b,c){b!=a.o&&(g.Me(a.o),(a.o=b)?(c?a.S("yt-remote-cast2-receiver-resumed",b.u):a.S("yt-remote-cast2-receiver-selected",
b.u),b.subscribe("sessionScreen",(0,g.x)(a.CB,a,b)),b.getScreen()?a.S("yt-remote-cast2-session-change",b.getScreen()):c&&a.o.Ek(null)):a.S("yt-remote-cast2-session-change",null))},Mza=function(a){var b=a.u.DD(),c=a.o&&a.o.u;
a=(0,g.Jc)(b,function(d){c&&g6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Lza(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Sza=function(a,b,c,d,e,f,k){Nza()?Oza(b,e,f,k)&&(I7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Pza(a,c):(window.__onGCastApiAvailable=function(l,m){l?Pza(a,c):(J7("Failed to load cast API: "+m),K7(!1),I7(!1),g.Os("yt-remote-cast-available"),g.Os("yt-remote-cast-receiver"),Qza(),c(!1))},d?g.Wo("https://web.archive.org/web/20200701002914/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?yya():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?t6():(xya(),s6(Rza.map(vya))))):H7("Cannot initialize because not running Chrome")},Qza=function(){H7("dispose");
var a=L7();a&&a.dispose();g.Ga("yt.mdx.remote.cloudview.instance_",null,void 0);Tza(!1);g.So(M7);M7.length=0},N7=function(){return!!g.Ns("yt-remote-cast-installed")},Uza=function(){var a=g.Ns("yt-remote-cast-receiver");
return a?a.friendlyName:null},Vza=function(){H7("clearCurrentReceiver");
g.Os("yt-remote-cast-receiver")},Wza=function(){return N7()?L7()?L7().getCastSession():(J7("getCastSelector: Cast is not initialized."),null):(J7("getCastSelector: Cast API is not installed!"),null)},P7=function(){N7()?L7()?O7()?(H7("Requesting cast selector."),L7().requestSession()):(H7("Wait for cast API to be ready to request the session."),M7.push(g.Ro("yt-remote-cast2-api-ready",P7))):J7("requestCastSelector: Cast is not initialized."):J7("requestCastSelector: Cast API is not installed!")},Q7=
function(a,b){O7()?L7().setConnectedScreenStatus(a,b):J7("setConnectedScreenStatus called before ready.")},Nza=function(){var a=0<=g.Pc.search(/ (CrMo|Chrome|CriOS)\//);
return g.Fw||a},Xza=function(a,b){L7().init(a,b)},Oza=function(a,b,c,d){var e=!1;
L7()||(a=new D7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.Ms("yt-remote-cast-available",f);d6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){H7("onReceiverSelected: "+f.friendlyName);
g.Ms("yt-remote-cast-receiver",f);d6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){H7("onReceiverResumed: "+f.friendlyName);
g.Ms("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){H7("onSessionChange: "+h6(f));
f||g.Os("yt-remote-cast-receiver");d6("yt-remote-cast2-session-change",f)}),g.Ga("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
H7("cloudview.createSingleton_: "+e);return e},L7=function(){return g.Ia("yt.mdx.remote.cloudview.instance_")},Pza=function(a,b){K7(!0);
I7(!1);Xza(a,function(c){c?(Tza(!0),g.To("yt-remote-cast2-api-ready")):(J7("Failed to initialize cast API."),K7(!1),g.Os("yt-remote-cast-available"),g.Os("yt-remote-cast-receiver"),Qza());b(c)})},H7=function(a){i7("cloudview",a)},J7=function(a){i7("cloudview",a)},K7=function(a){H7("setCastInstalled_ "+a);
g.Ms("yt-remote-cast-installed",a)},O7=function(){return!!g.Ia("yt.mdx.remote.cloudview.apiReady_")},Tza=function(a){H7("setApiReady_ "+a);
g.Ga("yt.mdx.remote.cloudview.apiReady_",a,void 0)},I7=function(a){g.Ga("yt.mdx.remote.cloudview.initializing_",a,void 0)},R7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.F=this.G=0;this.o=null;this.hasNext=this.dg=!1;this.L=this.H=this.u=this.C=0;this.B=NaN;this.A=!1;this.reset(a)},S7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.dg=!1;a.hasNext=!1;a.G=0;a.F=(0,g.C)();a.C=0;a.u=0;a.H=0;a.L=0;a.B=NaN;a.A=!1},T7=function(a){return a.nb()?((0,g.C)()-a.F)/1E3:0},U7=function(a,b){a.G=b;
a.F=(0,g.C)()},V7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.C)()-a.F)/1E3+a.G;
case -1E3:return 0}return a.G},W7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&S7(a)},X7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Tb(a.o);b.hasPrevious=a.dg;b.hasNext=a.hasNext;b.playerTime=a.G;b.playerTimeAt=a.F;b.seekableStart=a.C;b.seekableEnd=a.u;b.duration=a.H;b.loadedTime=a.L;b.liveIngestionTime=a.B;return b},Z7=function(a,b){g.N.call(this);
this.o=0;this.B=a;this.F=[];this.C=new jza;this.A=this.u=null;this.L=(0,g.x)(this.rK,this);this.G=(0,g.x)(this.Vm,this);this.H=(0,g.x)(this.qK,this);this.N=(0,g.x)(this.BK,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Zv,this),Yza(this))):c=3;0!=c&&(b?this.Zv(c):g.Ko((0,g.x)(function(){this.Zv(c)},this),0));
var d=Wza();d&&Y7(this,d);this.subscribe("yt-remote-cast2-session-change",this.N)},$7=function(a){return new R7(a.B.getPlayerContextData())},Yza=function(a){(0,g.y)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.F.push(this.B.subscribe(b,g.Ra(this.oM,b),this))},a)},Zza=function(a){(0,g.y)(a.F,function(b){this.B.unsubscribeByKey(b)},a);
a.F.length=0},a8=function(a,b){var c=a.C;
50>c.o.length+c.u.length&&a.C.u.push(b)},c8=function(a,b,c){var d=$7(a);
U7(d,c);-1E3!=d.playerState&&(d.playerState=b);b8(a,d)},d8=function(a,b,c){a.B.sendMessage(b,c)},b8=function(a,b){Zza(a);
a.B.setPlayerContextData(X7(b));Yza(a)},Y7=function(a,b){a.A&&(a.A.removeUpdateListener(a.L),a.A.removeMediaListener(a.G),a.Vm(null));
a.A=b;a.A&&(i7("CP","Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.L),a.A.addMediaListener(a.G),a.A.media.length&&a.Vm(a.A.media[0]))},$za=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=$7(a);b.contentId!=d.videoId&&i7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;U7(d,a.u.getEstimatedTime());b8(a,d)}else i7("CP","No cast media video. Ignoring state update.")},e8=function(a,b,c){return(0,g.x)(function(d){this.pc("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.pc("Retrying "+b+" using MDx browser channel."),d8(this,b,c))},a)},f8=function(a,b,c){g.N.call(this);
this.C=NaN;this.R=!1;this.H=this.G=this.L=this.N=NaN;this.T=[];this.B=this.F=this.A=this.gb=this.o=null;this.Z=a;this.T.push(g.gp(window,"beforeunload",(0,g.x)(this.RF,this)));this.u=[];this.gb=new R7;this.V=b.id;this.o=aAa(this,c);this.o.subscribe("handlerOpened",this.vK,this);this.o.subscribe("handlerClosed",this.sK,this);this.o.subscribe("handlerError",this.tK,this);this.o.subscribe("handlerMessage",this.uK,this);nza(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.gb.videoId;
g.Ps()&&g.Ms("yt-remote-session-video-id",d)},this)},g8=function(a){i7("conn",a)},aAa=function(a,b){return new c7(f7(a.Z,"/bc"),b)},h8=function(a,b){a.S("proxyStateChange",b)},bAa=function(a){a.C=g.Ko((0,g.x)(function(){g8("Connecting timeout");
this.fk(1)},a),2E4)},i8=function(a){g.Mo(a.C);
a.C=NaN},j8=function(a){g.Mo(a.N);
a.N=NaN},cAa=function(a){k8(a);
a.L=g.Ko((0,g.x)(function(){l8(this,"getNowPlaying")},a),2E4)},k8=function(a){g.Mo(a.L);
a.L=NaN},eAa=function(a,b){b&&(i8(a),j8(a));
b==(d7(a.o)&&isNaN(a.C))?b&&(h8(a,1),l8(a,"getSubtitlesTrack")):b?(a.qy()&&a.gb.reset(),h8(a,1),l8(a,"getNowPlaying"),dAa(a)):a.fk(1)},fAa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.gb.videoId&&(g.Pb(b.params)?a.gb.o=null:a.gb.o=b.params,a.S("remotePlayerChange"))},gAa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.gb.listId=b.params.listId||a.gb.listId;W7(a.gb,c,d);a.S("remoteQueueChange")},iAa=function(a,b){b.params=b.params||{};
gAa(a,b);hAa(a,b);a.S("autoplayDismissed")},hAa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
U7(a.gb,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.gb.playerState&&(c=-1E3);a.gb.playerState=c;c=Number(b.params.loadedTime);a.gb.L=isNaN(c)?0:c;c=Number(b.params.duration);a.gb.H=isNaN(c)?0:c;c=a.gb;var d=Number(b.params.liveIngestionTime);c.B=d;c.A=isNaN(d)?!1:!0;c=a.gb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.gb.playerState?cAa(a):k8(a);a.S("remotePlayerChange")},jAa=function(a,b){if(-1E3!=
a.gb.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.gb.playerState=c;c=parseInt(b.params.currentTime,10);U7(a.gb,isNaN(c)?0:c);a.S("remotePlayerChange")}},kAa=function(a,b){var c="true"==b.params.muted;
a.gb.volume=parseInt(b.params.volume,10);a.gb.muted=c;a.S("remotePlayerChange")},lAa=function(a,b){a.F=b.params.videoId;
a.S("nowAutoplaying",parseInt(b.params.timeout,10))},mAa=function(a,b){var c="true"==b.params.hasNext;
a.gb.dg="true"==b.params.hasPrevious;a.gb.hasNext=c;a.S("previousNextChange")},dAa=function(a){g.Mo(a.H);
a.H=g.Ko((0,g.x)(a.fk,a,1),864E5)},l8=function(a,b,c){c?g8("Sending: action="+b+", params="+g.Mk(c)):g8("Sending: action="+b);
a.o.sendMessage(b,c)},m8=function(a){m7.call(this,"ScreenServiceProxy");
this.Md=a;this.o=[];this.o.push(this.Md.$_s("screenChange",(0,g.x)(this.lP,this)));this.o.push(this.Md.$_s("onlineScreenChange",(0,g.x)(this.SL,this)))},rAa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.K("MDX_CONFIG")||b;jya();p6();n8||(n8=new e7(b?b.loungeApiHost:void 0),rya()&&(n8.o="/api/loungedev"));o8||(o8=g.Ia("yt.mdx.remote.deferredProxies_")||[],g.Ga("yt.mdx.remote.deferredProxies_",o8,void 0));nAa();var c=p8();if(!c){var d=new v7(n8);g.Ga("yt.mdx.remote.screenService_",d,void 0);c=p8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);Sza(a,d,function(m){m?q8()&&Q7(q8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){d6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.Ia("yt.mdx.remote.initialized_")&&(g.Ga("yt.mdx.remote.initialized_",!0,void 0),r8("Initializing: "+g.Mk(b)),s8.push(g.Ro("yt-remote-cast2-availability-change",function(){d6("yt-remote-receiver-availability-change")})),s8.push(g.Ro("yt-remote-cast2-receiver-selected",function(){t8(null);
d6("yt-remote-auto-connect","cast-selector-receiver")})),s8.push(g.Ro("yt-remote-cast2-receiver-resumed",function(){d6("yt-remote-receiver-resumed","cast-selector-receiver")})),s8.push(g.Ro("yt-remote-cast2-session-change",oAa)),s8.push(g.Ro("yt-remote-connection-change",function(m){m?Q7(q8(),"YouTube TV"):u8()||(Q7(null,null),Vza())})),a=v8(),b.isAuto&&(a.id+="#dial"),g.Ao("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),r8(" -- with channel params: "+
g.Mk(a)),pAa(a),c.start(),q8()||qAa())},tAa=function(){var a=sAa();
N7()&&g.Ns("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},sAa=function(){var a=p8().Md.$_gos();
var b=w8();b&&x8()&&(k6(a,b)||a.push(b));return iya(a)},y8=function(){var a=uAa();
!a&&N7()&&Uza()&&(a={key:"cast-selector-receiver",name:Uza()});return a},uAa=function(){var a=sAa(),b=w8();
b||(b=u8());return g.cb(a,function(c){return b&&g6(b,c.key)?!0:!1})},w8=function(){var a=q8();
if(!a)return null;var b=p8().ze();return l6(b,a)},oAa=function(a){r8("remote.onCastSessionChange_: "+h6(a));
if(a){var b=w8();b&&b.id==a.id?Q7(b.id,"YouTube TV"):(b&&z8(),A8(a,1))}else x8()&&z8()},z8=function(){O7()?L7().stopSession():J7("stopSession called before API ready.");
var a=x8();a&&(a.disconnect(1),B8(null))},C8=function(){var a=x8();
return!!a&&3!=a.getProxyState()},r8=function(a){i7("remote",a)},p8=function(){if(!D8){var a=g.Ia("yt.mdx.remote.screenService_");
D8=a?new m8(a):null}return D8},q8=function(){return g.Ia("yt.mdx.remote.currentScreenId_")},vAa=function(a){g.Ga("yt.mdx.remote.currentScreenId_",a,void 0)},wAa=function(){return g.Ia("yt.mdx.remote.connectData_")},t8=function(a){g.Ga("yt.mdx.remote.connectData_",a,void 0)},x8=function(){return g.Ia("yt.mdx.remote.connection_")},B8=function(a){var b=x8();
t8(null);a||vAa("");g.Ga("yt.mdx.remote.connection_",a,void 0);o8&&((0,g.y)(o8,function(c){c(a)}),o8.length=0);
b&&!a?d6("yt-remote-connection-change",!1):!b&&a&&d6("yt-remote-connection-change",!0)},u8=function(){var a=g.Ps();
if(!a)return null;var b=p8();if(!b)return null;b=b.ze();return l6(b,a)},A8=function(a,b){q8();
w8()&&w8();if(E8)F8=a;else{vAa(a.id);var c=new f8(n8,a,v8());c.connect(b,wAa());c.subscribe("beforeDisconnect",function(d){d6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){x8()&&(x8(),B8(null))});
B8(c)}},qAa=function(){var a=u8();
a?(r8("Resume connection to: "+h6(a)),A8(a,0)):(q6(),Vza(),r8("Skipping connecting because no session screen found."))},nAa=function(){var a=v8();
if(g.Pb(a)){a=o6();var b=g.Ns("yt-remote-session-name")||"",c=g.Ns("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ga("yt.mdx.remote.channelParams_",a,void 0)}},v8=function(){return g.Ia("yt.mdx.remote.channelParams_")||{}},pAa=function(a){a?(g.Ms("yt-remote-session-app",a.app),g.Ms("yt-remote-session-name",a.name)):(g.Os("yt-remote-session-app"),g.Os("yt-remote-session-name"));
g.Ga("yt.mdx.remote.channelParams_",a,void 0)},G8=function(a,b,c){g.z.call(this);
var d=this;this.module=a;this.I=b;this.Xa=c;this.events=new g.Rr(this);this.L=this.events.M(this.I,"onVolumeChange",this.cB);this.B=!1;this.suggestion=null;this.C=new g.UC(64);this.o=new g.H(this.JC,500,this);this.u=new g.H(this.KC,1E3,this);this.G=new u6(this.QO,0,this);this.A={};this.H=new g.H(this.oD,1E3,this);this.F=new v6(this.seekTo,1E3,this);this.N=g.Ja;g.A(this,this.events);this.events.M(b,"onCaptionsTrackListChanged",this.rL);this.events.M(b,"captionschanged",this.pK);this.events.M(b,"captionssettingschanged",
this.MC);this.events.M(b,"videoplayerreset",this.rq);this.events.M(b,"mdxautoplaycancel",function(){d.Xa.Hx()});
a=this.Xa;a.ha();a.subscribe("proxyStateChange",this.wB,this);a.subscribe("remotePlayerChange",this.Zm,this);a.subscribe("remoteQueueChange",this.rq,this);a.subscribe("previousNextChange",this.sB,this);a.subscribe("nowAutoplaying",this.oB,this);a.subscribe("autoplayDismissed",this.MA,this);g.A(this,this.o);g.A(this,this.u);g.A(this,this.G);g.A(this,this.H);g.A(this,this.F);this.MC();this.rq();this.Zm()},xAa=function(a){a.ac(0);
a.o.stop();H8(a,new g.UC(64))},J8=function(a,b){if(I8(a)&&!a.B){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.Vb(c,b));a.Xa.BD(a.I.getVideoData(1).videoId,c);a.A=$7(a.Xa).o}},K8=function(a,b){var c=a.I.getPlaylist();
if(c){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.Xa.playVideo(c.videoId,b,d,e,c.playerParams,c.zf,Wxa(c));H8(a,new g.UC(1))},yAa=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{Sy:1});
c&&c.length?(a.I.setOption("captions","track",b),a.B=!1):(a.I.loadModule("captions"),a.B=!0)}else a.I.setOption("captions","track",{})},I8=function(a){return $7(a.Xa).videoId===a.I.getVideoData(1).videoId},H8=function(a,b){a.u.stop();
var c=a.C;if(!g.$C(c,b)){var d=g.S(b,2);d!==g.S(a.C,2)&&g.tT(a.I.app,d);a.C=b;zAa(a.module,c,b)}},L8=function(){g.T.call(this,{D:"div",
J:"ytp-mdx-manual-pairing-popup-dialog",P:{role:"dialog"},K:[{D:"div",J:"ytp-mdx-manual-pairing-popup-dialog-inner-content",K:[{D:"div",J:"ytp-mdx-manual-pairing-popup-title",W:"Connecting to your TV on web using a code will be going away soon"},{D:"div",J:"ytp-mdx-manual-pairing-popup-buttons",K:[{D:"button",Y:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],W:"Learn more"},{D:"button",Y:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],W:"OK"}]}]}]});this.o=new g.LN(this,250);this.learnMoreButton=
this.da("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.da("ytp-mdx-manual-pairing-popup-ok");g.A(this,this.o);this.M(this.learnMoreButton,"click",this.u);this.M(this.okButton,"click",this.A)},M8=function(){g.T.call(this,{D:"div",
J:"ytp-mdx-popup-dialog",P:{role:"dialog"},K:[{D:"div",J:"ytp-mdx-popup-dialog-inner-content",K:[{D:"div",J:"ytp-mdx-popup-title",W:"You're signed out"},{D:"div",J:"ytp-mdx-popup-description",W:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",J:"ytp-mdx-privacy-popup-buttons",K:[{D:"button",Y:["ytp-button","ytp-mdx-privacy-popup-cancel"],W:"Cancel"},{D:"button",Y:["ytp-button","ytp-mdx-privacy-popup-confirm"],
W:"Confirm"}]}]}]});this.o=new g.LN(this,250);this.cancelButton=this.da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.da("ytp-mdx-privacy-popup-confirm");g.A(this,this.o);this.M(this.cancelButton,"click",this.u);this.M(this.confirmButton,"click",this.A)},N8=function(a){g.T.call(this,{D:"div",
J:"ytp-remote",K:[{D:"div",J:"ytp-remote-display-status",K:[{D:"div",J:"ytp-remote-display-status-icon",K:[g.pM()]},{D:"div",J:"ytp-remote-display-status-text",W:"{{statustext}}"}]}]});this.api=a;this.o=new g.LN(this,250);g.A(this,this.o);this.M(a,"presentingplayerstatechange",this.u);AAa(this,g.iM(a))},AAa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
c=g.S(b,128)?g.NL("Error on $RECEIVER_NAME",c):b.nb()||g.S(b,4)?g.NL("Playing on $RECEIVER_NAME",c):g.NL("Connected to $RECEIVER_NAME",c);a.na("statustext",c);a.o.show()}else a.o.hide()},O8=function(a,b){g.fR.call(this,"Play on",0,a,b);
this.I=a;this.vi={};this.M(a,"onMdxReceiversChange",this.B);this.M(a,"presentingplayerstatechange",this.B);this.B()},P8=function(a){g.gC.call(this,a);
this.Ef={key:j6(),name:"This computer"};this.se=null;this.subscriptions=[];this.Ou=this.Xa=null;this.vi=[this.Ef];this.Fh=this.Ef;this.Qb=new g.UC(64);this.jz=0;this.kd=-1;this.Gk=null;this.an=this.yp=!1;this.Ej=this.ll=null;if(!g.Gy(this.player.O())){a=this.player;var b=g.$M(a);b&&(b=b.Mm())&&(b=new O8(a,b),g.A(this,b));b=new N8(a);g.A(this,b);g.vN(a,b.element,4);this.ll=new M8;g.A(this,this.ll);g.vN(a,this.ll.element,4);g.O(this.player.O().experiments,"pair_servlet_deprecation_warning_enabled")&&
(this.Gk=new L8,g.A(this,this.Gk),g.vN(a,this.Gk.element,4));this.an=!!u8();this.yp=!!g.Ns("yt-remote-manual-pairing-warning-shown")}},Q8=function(a){a.Ej&&(a.player.removeEventListener("presentingplayerstatechange",a.Ej),a.Ej=null)},zAa=function(a,b,c){a.Qb=c;
a.player.S("presentingplayerstatechange",new g.eD(c,b))},BAa=function(a,b,c){var d=!1;
1===b?d=!a.an:2===b&&(d=!a.yp);d&&g.gD(c,8)&&(a.player.pauseVideo(),Q8(a))},R8=function(a,b){if(b.key!==a.Fh.key)if(b.key===a.Ef.key)z8();
else{if(a.Gk&&!a.yp&&b!==a.Ef&&"cast-selector-receiver"!==b.key&&g.Py(a.player.O()))CAa(a);else{var c;(c=!g.O(a.player.O().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.K("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.K("SESSION_INDEX")&&!g.K("LOGGED_IN")))||a.an||!a.ll);(c?0:g.Py(a.player.O())||g.Ty(a.player.O()))&&DAa(a)}a.Fh=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&
g.O(a.player.O().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.Ca(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.zf,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=Wxa(c))&&(d.locationInfo=c);c=d}r8("Connecting to: "+g.Mk(b));"cast-selector-receiver"==b.key?(t8(c||null),c=
c||null,O7()?L7().setLaunchParams(c):J7("setLaunchParams called before ready.")):!c&&C8()&&q8()==b.key?d6("yt-remote-connection-change",!0):(z8(),t8(c||null),c=p8().ze(),(c=l6(c,b.key))&&A8(c,1))}},DAa=function(a){g.iM(a.player).nb()?a.player.pauseVideo():(a.Ej=function(b){BAa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.Ej));
a.ll&&a.ll.jc();x8()||(E8=!0)},CAa=function(a){g.iM(a.player).nb()?a.player.pauseVideo():(a.Ej=function(b){BAa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.Ej));
a.Gk&&a.Gk.jc();x8()||(E8=!0)},Hya={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},I6={"'":"\\'"},EAa={},eya={VP:"atp",gT:"ska",QS:"que",eS:"mus",fT:"sus",fR:"dsp",YS:"seq"},r6,n6="",wya=sya("loadCastFramework")||sya("loadCastApplicationFramework"),Rza=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ta(u6,g.z);g.h=u6.prototype;g.h.OF=function(a){this.B=arguments;this.o=!1;this.La?this.A=(0,g.C)()+this.Nd:this.La=g.Yf(this.C,this.Nd)};
g.h.stop=function(){this.La&&(g.v.clearTimeout(this.La),this.La=null);this.A=null;this.o=!1;this.B=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.F.apply(null,this.B)))};
g.h.X=function(){this.stop();u6.tc.X.call(this)};
g.h.PF=function(){this.A?(this.La=g.Yf(this.C,this.A-(0,g.C)()),this.A=null):(this.La=null,this.u?this.o=!0:(this.o=!1,this.F.apply(null,this.B)))};g.t(v6,g.z);g.h=v6.prototype;g.h.xz=function(a){this.A=arguments;this.La||this.u?this.o=!0:w6(this)};
g.h.stop=function(){this.La&&(g.v.clearTimeout(this.La),this.La=null,this.o=!1,this.A=null)};
g.h.pause=function(){this.u++};
g.h.resume=function(){this.u--;this.u||!this.o||this.La||(this.o=!1,w6(this))};
g.h.X=function(){g.z.prototype.X.call(this);this.stop()};y6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
y6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};z6.prototype.o=null;z6.prototype.getOptions=function(){var a;(a=this.o)||(a={},Aya(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var S8;g.Ta(zya,z6);S8=new zya;g.h=A6.prototype;g.h.hj=null;g.h.Qf=!1;g.h.Cl=null;g.h.Wv=null;g.h.ql=null;g.h.vl=null;g.h.zh=null;g.h.wi=null;g.h.Fj=null;g.h.Zc=null;g.h.En=0;g.h.Uf=null;g.h.ir=null;g.h.Qh=null;g.h.pm=-1;g.h.yC=!0;g.h.Oi=!1;g.h.Zs=0;g.h.Bq=null;var Fya={},D6={};g.h=A6.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.XN=function(a){a=a.target;var b=this.Bq;b&&3==R6(a)?b.xz():this.yD(a)};
g.h.yD=function(a){try{if(a==this.Zc)a:{var b=R6(this.Zc),c=this.Zc.F,d=this.Zc.getStatus();if(g.ne&&!g.Sd(10)||g.pe&&!g.Rd("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Ah&&!T6(this.Zc))break a;this.Oi||4!=b||7==c||(8==c||0>=d?this.o.Jf(3):this.o.Jf(2));K6(this);var e=this.Zc.getStatus();this.pm=e;var f=T6(this.Zc);(this.Qf=200==e)?(4==b&&G6(this),this.F?(Gya(this,b,f),g.Ah&&this.Qf&&3==b&&(this.B.oa(this.u,"tick",this.NN),this.u.start())):F6(this,f),this.Qf&&!this.Oi&&(4==b?this.o.To(this):(this.Qf=
!1,C6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Qh=3,E6(13)):(this.Qh=0,E6(14)),G6(this),H6(this))}}catch(k){this.Zc&&T6(this.Zc)}finally{}};
g.h.NN=function(){var a=R6(this.Zc),b=T6(this.Zc);this.En<b.length&&(K6(this),Gya(this,a,b),this.Qf&&4!=a&&C6(this))};
g.h.kN=function(a){J6((0,g.x)(this.jN,this,a),0)};
g.h.jN=function(a){this.Oi||(K6(this),F6(this,a),C6(this))};
g.h.FB=function(a){J6((0,g.x)(this.iN,this,a),0)};
g.h.iN=function(a){this.Oi||(G6(this),this.Qf=a,this.o.To(this),this.o.Jf(4))};
g.h.cancel=function(){this.Oi=!0;G6(this)};
g.h.sN=function(){this.Cl=null;var a=(0,g.C)();0<=a-this.Wv?(2!=this.vl&&this.o.Jf(3),G6(this),this.Qh=2,E6(18),H6(this)):Jya(this,this.Wv-a)};
g.h.getLastError=function(){return this.Qh};g.h=Mya.prototype;g.h.Xs=null;g.h.le=null;g.h.Cq=!1;g.h.Cy=null;g.h.Co=null;g.h.Jt=null;g.h.Ys=null;g.h.Te=null;g.h.Zg=-1;g.h.om=null;g.h.Pl=null;g.h.connect=function(a){this.Ys=a;a=M6(this.o,null,this.Ys);E6(3);this.Cy=(0,g.C)();var b=this.o.H;null!=b?(this.om=b[0],(this.Pl=b[1])?(this.Te=1,Nya(this)):(this.Te=2,O6(this))):(a6(a,"MODE","init"),this.le=new A6(this,void 0,void 0,void 0),this.le.hj=this.Xs,B6(this.le,a,!1,null,!0),this.Te=0)};
g.h.PE=function(a){if(a)this.Te=2,O6(this);else{E6(4);var b=this.o;b.cg=b.Ch.Zg;$6(b,9)}a&&this.Jf(2)};
g.h.ks=function(a){return this.o.ks(a)};
g.h.abort=function(){this.le&&(this.le.cancel(),this.le=null);this.Zg=-1};
g.h.By=function(){return!1};
g.h.xB=function(a,b){this.Zg=a.pm;if(0==this.Te)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.cg=this.Zg;$6(c,2);return}this.om=c[0];this.Pl=c[1]}else c=this.o,c.cg=this.Zg,$6(c,2);else if(2==this.Te)if(this.Cq)E6(7),this.Jt=(0,g.C)();else if("11111"==b){if(E6(6),this.Cq=!0,this.Co=(0,g.C)(),c=this.Co-this.Cy,!g.ne||g.Sd(10)||500>c)this.Zg=200,this.le.cancel(),E6(12),N6(this.o,this,!0)}else E6(8),this.Co=this.Jt=(0,g.C)(),this.Cq=!1};
g.h.To=function(){this.Zg=this.le.pm;if(this.le.Qf)0==this.Te?this.Pl?(this.Te=1,Nya(this)):(this.Te=2,O6(this)):2==this.Te&&((!g.ne||g.Sd(10)?!this.Cq:200>this.Jt-this.Co)?(E6(11),N6(this.o,this,!1)):(E6(12),N6(this.o,this,!0)));else{0==this.Te?E6(9):2==this.Te&&E6(10);var a=this.o;this.le.getLastError();a.cg=this.Zg;$6(a,2)}};
g.h.qn=function(){return this.o.qn()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Jf=function(a){this.o.Jf(a)};g.Ta(P6,g.mf);var Sya=/^https?$/i,FAa=["POST","PUT"];g.h=P6.prototype;
g.h.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.L+"; newUri="+a);b=b?b.toUpperCase():"GET";this.L=a;this.B="";this.F=0;this.fa=b;this.Z=!1;this.A=!0;this.o=this.V?Bya(this.V):Bya(S8);this.T=this.V?this.V.getOptions():S8.getOptions();this.o.onreadystatechange=(0,g.x)(this.tB,this);try{c6(S6(this,"Opening Xhr")),this.ba=!0,this.o.open(b,String(a),!0),this.ba=!1}catch(f){c6(S6(this,"Error opening Xhr: "+f.message));Rya(this,f);return}a=
c||"";var e=this.headers.clone();d&&aya(d,function(f,k){e.set(k,f)});
d=g.cb(e.Re(),Pya);c=g.v.FormData&&a instanceof g.v.FormData;!g.fb(FAa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.o.setRequestHeader(k,f)},this);
this.ea&&(this.o.responseType=this.ea);"withCredentials"in this.o&&this.o.withCredentials!==this.aa&&(this.o.withCredentials=this.aa);try{Uya(this),0<this.G&&(this.R=Oya(this.o),c6(S6(this,"Will abort after "+this.G+"ms if incomplete, xhr2 "+this.R)),this.R?(this.o.timeout=this.G,this.o.ontimeout=(0,g.x)(this.Dy,this)):this.N=g.Yf(this.Dy,this.G,this)),c6(S6(this,"Sending request")),this.H=!0,this.o.send(a),this.H=!1}catch(f){c6(S6(this,"Send error: "+f.message)),Rya(this,f)}};
g.h.Dy=function(){"undefined"!=typeof g.G1&&this.o&&(this.B="Timed out after "+this.G+"ms, aborting",this.F=8,S6(this,this.B),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.o&&this.A&&(S6(this,"Aborting"),this.A=!1,this.C=!0,this.o.abort(),this.C=!1,this.F=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Q6(this))};
g.h.X=function(){this.o&&(this.A&&(this.A=!1,this.C=!0,this.o.abort(),this.C=!1),Q6(this,!0));P6.tc.X.call(this)};
g.h.tB=function(){this.ha()||(this.ba||this.H||this.C?Tya(this):this.qM())};
g.h.qM=function(){Tya(this)};
g.h.isActive=function(){return!!this.o};
g.h.getStatus=function(){try{return 2<R6(this)?this.o.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return"string"===typeof this.B?this.B:String(this.B)};g.h=U6.prototype;g.h.em=null;g.h.de=null;g.h.Cc=null;g.h.Ws=null;g.h.Fo=null;g.h.Yw=null;g.h.So=null;g.h.Um=0;g.h.KJ=0;g.h.Kd=null;g.h.Ih=null;g.h.Jg=null;g.h.Ui=null;g.h.Ch=null;g.h.fr=null;g.h.Dk=-1;g.h.iz=-1;g.h.cg=-1;g.h.jk=0;g.h.Xj=0;g.h.Pi=8;var a7=new g.mf;g.Ta(Wya,g.Oe);g.Ta(Xya,g.Oe);g.Ta(Yya,g.Oe);g.h=U6.prototype;g.h.connect=function(a,b,c,d,e){E6(0);this.Ws=b;this.em=c||{};d&&void 0!==e&&(this.em.OSID=d,this.em.OAID=e);this.F?(J6((0,g.x)(this.tx,this,a),100),bza(this)):this.tx(a)};
g.h.tx=function(a){this.Ch=new Mya(this);this.Ch.Xs=null;this.Ch.u=this.C;this.Ch.connect(a)};
g.h.By=function(){return 0==this.o};
g.h.EB=function(a){this.Ih=null;eza(this,a)};
g.h.DB=function(){this.Jg=null;this.Cc=new A6(this,this.A,"rpc",this.G);this.Cc.hj=null;this.Cc.Zs=0;var a=this.Yw.clone();Z5(a,"RID","rpc");Z5(a,"SID",this.A);Z5(a,"CI",this.fr?"0":"1");Z5(a,"AID",this.Dk);V6(this,a);if(!g.ne||g.Sd(10))Z5(a,"TYPE","xmlhttp"),B6(this.Cc,a,!0,this.So,!1);else{Z5(a,"TYPE","html");var b=this.Cc,c=!!this.So;b.vl=3;b.zh=$5(a.clone());Iya(b,c)}};
g.h.xB=function(a,b){if(0!=this.o&&(this.Cc==a||this.de==a))if(this.cg=a.pm,this.de==a&&3==this.o)if(7<this.Pi){try{var c=this.C.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Jg){if(this.Cc)if(this.Cc.ql+3E3<this.de.ql)X6(this),this.Cc.cancel(),this.Cc=null;else break a;Z6(this);E6(19)}}else this.iz=c[1],0<this.iz-this.Dk&&37500>c[2]&&this.fr&&0==this.Xj&&!this.Ui&&(this.Ui=J6((0,g.x)(this.lK,this),6E3));else $6(this,11)}else b!=EAa.xQ.o&&$6(this,11);else if(this.Cc==
a&&X6(this),!g.kc(b)){c=this.C.parse(b);for(var d=0;d<c.length;d++){var e=c[d];this.Dk=e[0];e=e[1];2==this.o?"c"==e[0]?(this.A=e[1],this.So=e[2],e=e[3],null!=e?this.Pi=e:this.Pi=6,this.o=3,this.Kd&&this.Kd.nx(),this.Yw=M6(this,this.qn()?this.So:null,this.Ws),fza(this)):"stop"==e[0]&&$6(this,7):3==this.o&&("stop"==e[0]?$6(this,7):"noop"!=e[0]&&this.Kd&&this.Kd.mx(e),this.Xj=0)}}};
g.h.lK=function(){null!=this.Ui&&(this.Ui=null,this.Cc.cancel(),this.Cc=null,Z6(this),E6(20))};
g.h.To=function(a){if(this.Cc==a){X6(this);this.Cc=null;var b=2}else if(this.de==a)this.de=null,b=1;else return;this.cg=a.pm;if(0!=this.o)if(a.Qf)1==b?(b=(0,g.C)()-a.ql,a7.dispatchEvent(new Xya(a7,a.Fj?a.Fj.length:0,b,this.jk)),W6(this),this.B.length=0):fza(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.cg)){if(d=1==b)this.de||this.Ih||1==this.o||2<=this.jk?d=!1:(this.Ih=J6((0,g.x)(this.EB,this,a),gza(this,this.jk)),this.jk++,d=!0);d=!(d||2==b&&Z6(this))}if(d)switch(c){case 1:$6(this,
5);break;case 4:$6(this,10);break;case 3:$6(this,6);break;case 7:$6(this,12);break;default:$6(this,2)}}};
g.h.nF=function(a){if(!g.fb(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.JO=function(a){a?E6(2):(E6(1),hza(this,8))};
g.h.ks=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new P6;a.aa=!1;return a};
g.h.isActive=function(){return!!this.Kd&&this.Kd.isActive(this)};
g.h.Jf=function(a){a7.dispatchEvent(new Yya(a7,a))};
g.h.qn=function(){return!(!g.ne||g.Sd(10))};
g.h=iza.prototype;g.h.nx=function(){};
g.h.mx=function(){};
g.h.lx=function(){};
g.h.Ur=function(){};
g.h.Xx=function(){return{}};
g.h.isActive=function(){return!0};g.h=jza.prototype;g.h.isEmpty=function(){return g.gb(this.o)&&g.gb(this.u)};
g.h.clear=function(){this.o=[];this.u=[]};
g.h.contains=function(a){return g.fb(this.o,a)||g.fb(this.u,a)};
g.h.remove=function(a){var b=this.o;var c=(0,g.Osa)(b,a);0<=c?(g.jb(b,c),b=!0):b=!1;return b||g.kb(this.u,a)};
g.h.Ud=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Ta(b7,g.z);g.h=b7.prototype;g.h.dN=function(){this.Nd=Math.min(3E5,2*this.Nd);this.A();this.u&&this.start()};
g.h.start=function(){var a=this.Nd+15E3*Math.random();this.o.fb(a);this.u=(0,g.C)()+a};
g.h.stop=function(){this.o.stop();this.u=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.Nd=5E3};g.Ta(c7,iza);g.h=c7.prototype;g.h.subscribe=function(a,b,c){return this.A.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.A.unsubscribe(a,b,c)};
g.h.mi=function(a){return this.A.ij(a)};
g.h.S=function(a,b){return this.A.S.apply(this.A,arguments)};
g.h.dispose=function(){this.Mb||(this.Mb=!0,g.Me(this.A),mza(this),g.Me(this.u),this.u=null)};
g.h.ha=function(){return this.Mb};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.L="";this.u.stop();this.C=a||null;this.B=b||0;a=this.N+"/test";b=this.N+"/bind";var d=new U6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.R),e=this.o;e&&(e.Kd=null);d.Kd=this;this.o=d;e?this.o.connect(a,b,this.F,e.A,e.Dk):c?this.o.connect(a,b,this.F,c.sessionId,c.arrayId):this.o.connect(a,b,this.F)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.Vb(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.G.push(c):d7(this)&&cza(this.o,c)};
g.h.nx=function(){this.u.reset();this.C=null;this.B=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)cza(this.o,a[b])}this.S("handlerOpened")};
g.h.lx=function(a){var b=2==a&&401==this.o.cg;4==a||b||this.u.start();this.S("handlerError",a)};
g.h.Ur=function(a){if(!this.u.isActive())this.S("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
g.h.Xx=function(){var a={v:2};this.L&&(a.gsessionid=this.L);0!=this.B&&(a.ui=""+this.B);0!=this.H&&(a.ui=""+this.H);this.C&&g.Vb(a,this.C);return a};
g.h.mx=function(a){"S"==a[0]?this.L=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),aza(this.o)):this.S("handlerMessage",new kza(a[0],a[1]))};
g.h.lO=function(){this.u.isActive();var a=this.o,b=0;a.Cc&&b++;a.de&&b++;0==b&&this.connect(this.C,this.B)};e7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
e7.prototype.A=function(a,b){a(Error("Request error: "+b.status))};
e7.prototype.C=function(a){a(Error("request timed out"))};var uza=(0,g.C)(),h7=null,k7=Array(50),j7=-1,l7=!1;g.Ta(m7,g.N);m7.prototype.ze=function(){return this.screens};
m7.prototype.contains=function(a){return!!k6(this.screens,a)};
m7.prototype.get=function(a){return a?l6(this.screens,a):null};
m7.prototype.info=function(a){i7(this.F,a)};g.t(n7,g.N);g.h=n7.prototype;g.h.start=function(){!this.o&&isNaN(this.La)&&this.CD()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.La)||(g.Mo(this.La),this.La=NaN)};
g.h.X=function(){this.stop();g.N.prototype.X.call(this)};
g.h.CD=function(){this.La=NaN;this.o=g.uq(f7(this.F,"/pairing/get_screen"),{method:"POST",Db:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.x)(this.jP,this),onError:(0,g.x)(this.iP,this),He:(0,g.x)(this.kP,this)})};
g.h.jP=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.C;c.name=this.A;this.S("pairingComplete",new f6(c))};
g.h.iP=function(a){this.o=null;a.status&&404==a.status?this.u>=GAa.length?this.S("pairingFailed",Error("DIAL polling timed out")):(a=GAa[this.u],this.La=g.Ko((0,g.x)(this.CD,this),a),this.u++):this.S("pairingFailed",Error("Server error "+a.status))};
g.h.kP=function(){this.o=null;this.S("pairingFailed",Error("Server not responding"))};
var GAa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ta(p7,m7);g.h=p7.prototype;g.h.start=function(){o7(this)&&this.S("screenChange");!g.Ns("yt-remote-lounge-token-expiration")&&yza(this);g.Mo(this.o);this.o=g.Ko((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){o7(this);vza(this,a);q7(this,!1);this.S("screenChange");b(a);a.token||yza(this)};
g.h.remove=function(a,b){var c=o7(this);xza(this,a)&&(q7(this,!1),c=!0);b(a);c&&this.S("screenChange")};
g.h.dr=function(a,b,c,d){var e=o7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,q7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.S("screenChange")};
g.h.X=function(){g.Mo(this.o);p7.tc.X.call(this)};
g.h.ZF=function(a){o7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}q7(this,!b);b&&i7(this.F,"Missed "+b+" lounge tokens.")};
g.h.YF=function(a){i7(this.F,"Requesting lounge tokens failed: "+a)};g.t(s7,g.N);g.h=s7.prototype;g.h.start=function(){var a=parseInt(g.Ns("yt-remote-fast-check-period")||"0",10);(this.B=(0,g.C)()-144E5<a?0:a)?u7(this):(this.B=(0,g.C)()+3E5,g.Ms("yt-remote-fast-check-period",this.B),this.bv())};
g.h.isEmpty=function(){return g.Pb(this.o)};
g.h.update=function(){r7("Updating availability on schedule.");var a=this.F(),b=g.Cb(this.o,function(c,d){return c&&!!l6(a,d)},this);
t7(this,b)};
g.h.X=function(){g.Mo(this.A);this.A=NaN;this.u&&(this.u.abort(),this.u=null);g.N.prototype.X.call(this)};
g.h.bv=function(){g.Mo(this.A);this.A=NaN;this.u&&this.u.abort();var a=Bza(this);if(b6(a)){var b=f7(this.C,"/pairing/get_screen_availability");this.u=g7(this.C,b,{lounge_token:g.Jb(a).join(",")},(0,g.x)(this.MM,this,a),(0,g.x)(this.LM,this))}else t7(this,{}),u7(this)};
g.h.MM=function(a,b){this.u=null;var c=g.Jb(Bza(this));if(g.xb(c,g.Jb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;t7(this,d);u7(this)}else this.pc("Changing Screen set during request."),this.bv()};
g.h.LM=function(a){this.pc("Screen availability failed: "+a);this.u=null;u7(this)};
g.h.pc=function(a){i7("OnlineScreenService",a)};g.Ta(v7,m7);g.h=v7.prototype;g.h.start=function(){this.u.start();this.o.start();this.screens.length&&(this.S("screenChange"),this.o.isEmpty()||this.S("onlineScreenChange"))};
g.h.add=function(a,b,c){this.u.add(a,b,c)};
g.h.remove=function(a,b,c){this.u.remove(a,b,c);this.o.update()};
g.h.dr=function(a,b,c,d){this.u.contains(a)?this.u.dr(a,b,c,d):(a="Updating name of unknown screen: "+a.name,i7(this.F,a),d(Error(a)))};
g.h.ze=function(a){return a?this.screens:g.nb(this.screens,(0,g.Ae)(this.A,function(b){return!this.contains(b)},this))};
g.h.DD=function(){return(0,g.Ae)(this.ze(!0),function(a){return!!this.o.o[a.id]},this)};
g.h.ED=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new n7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.Me(f);d(w7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.Me(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.mP=function(a,b,c,d){g.uq(f7(this.C,"/pairing/get_screen"),{method:"POST",Db:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new f6(f.screen||{});if(!k.name||Fza(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);Fza(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(w7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
He:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.Me(this.u);g.Me(this.o);v7.tc.X.call(this)};
g.h.hG=function(){Gza(this);this.S("screenChange");this.o.update()};
v7.prototype.dispose=v7.prototype.dispose;g.Ta(y7,g.N);g.h=y7.prototype;g.h.getScreen=function(){return this.H};
g.h.qq=function(a){this.H=a;this.S("sessionScreen",this.H)};
g.h.Ge=function(a){this.ha()||(a&&z7(this,""+a),this.H=null,this.S("sessionScreen",null))};
g.h.info=function(a){i7(this.T,a)};
g.h.GD=function(){return null};
g.h.qv=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){z7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.qv("");y7.tc.X.call(this)};g.t(A7,y7);g.h=A7.prototype;g.h.ov=function(a){if(this.o){if(this.o==a)return;z7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.C);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.o=a;this.o.addUpdateListener(this.C);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);Iza(this)};
g.h.Ek=function(a){this.info("launchWithParams no-op for Cast: "+g.Mk(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.x)(function(){this.Ge()},this),(0,g.x)(function(){this.Ge(Error("Failed to stop receiver app."))},this)):this.Ge(Error("Stopping cast device witout session."))};
g.h.qv=function(){};
g.h.X=function(){this.info("disposeInternal");g.Mo(this.A);this.A=0;this.o&&(this.o.removeUpdateListener(this.C),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.o=null;y7.prototype.X.call(this)};
g.h.AN=function(a,b){if(!this.ha())if(b){var c=x6(b);if(g.Oa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Mk(c));switch(d){case "mdxSessionStatus":Hza(this,c.screenId);break;default:z7(this,"Unknown youtube message: "+d)}}else z7(this,"Unable to parse message.")}else z7(this,"No data in message.")};
g.h.sy=function(a,b,c,d){Eza(this.L,this.u.label,a,this.u.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(z7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Ko((0,g.x)(this.sy,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.GD=function(){return this.o};
g.h.nP=function(a){this.ha()||a||(z7(this,"Cast session died."),this.Ge())};g.t(B7,y7);g.h=B7.prototype;g.h.ov=function(a){this.A=a;this.A.addUpdateListener(this.R)};
g.h.Ek=function(a){this.B=a;this.F()};
g.h.stop=function(){this.o();this.o=g.Ja;g.Mo(this.C);this.A?this.A.stop((0,g.x)(this.Ge,this,null),(0,g.x)(this.Ge,this,"Failed to stop DIAL device.")):this.Ge()};
g.h.X=function(){this.o();this.o=g.Ja;g.Mo(this.C);this.A&&this.A.removeUpdateListener(this.R);this.A=null;y7.prototype.X.call(this)};
g.h.qP=function(a){this.ha()||a||(z7(this,"DIAL session died."),this.o(),this.o=g.Ja,this.Ge())};
g.h.ot=function(a){this.N=j6();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,Kza(this));a(b);Jza(this)}else this.F=(0,g.x)(function(){g.Mo(this.C);this.F=g.Ja;this.C=NaN;var c=new chrome.cast.DialLaunchResponse(!0,Kza(this));a(c);Jza(this)},this),this.C=g.Ko((0,g.x)(function(){this.F()},this),100)};
g.h.BG=function(a,b,c){Eza(this.L,this.G.receiver.label,a,this.u.friendlyName,(0,g.x)(function(d){d&&d.token?(this.qq(d),b(new chrome.cast.DialLaunchResponse(!1))):this.ot(b,c)},this),(0,g.x)(function(d){z7(this,"Failed to get DIAL screen: "+d);
this.ot(b,c)},this))};g.t(C7,y7);C7.prototype.stop=function(){this.Ge()};
C7.prototype.ov=function(){};
C7.prototype.Ek=function(){g.Mo(this.o);this.o=NaN;var a=l6(this.L.ze(),this.u.label);a?this.qq(a):this.Ge(Error("No such screen"))};
C7.prototype.X=function(){g.Mo(this.o);this.o=NaN;y7.prototype.X.call(this)};g.t(D7,g.N);g.h=D7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.G);this.H||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.vM,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.AB,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.IK,this);chrome.cast.initialize(c,(0,g.x)(function(){this.ha()||
(chrome.cast.addReceiverActionListener(this.B),rza(),this.u.subscribe("onlineScreenChange",(0,g.x)(this.FD,this)),this.A=Mza(this),chrome.cast.setCustomReceivers(this.A,g.Ja,(0,g.x)(function(k){this.pc("Failed to set initial custom receivers: "+g.Mk(k))},this)),this.S("yt-remote-cast2-availability-change",F7(this)),b(!0))},this),(0,g.x)(function(k){this.pc("Failed to initialize API: "+g.Mk(k));
b(!1)},this))};
g.h.tO=function(a,b){E7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.getScreen();if(!a||c&&c.id!=a)E7("Unsetting old screen status: "+this.o.u.friendlyName),G7(this,null)}if(a&&b){if(!this.o){c=l6(this.u.ze(),a);if(!c){E7("setConnectedScreenStatus: Unknown screen.");return}var d=Lza(this,c);d||(E7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.A.push(d),chrome.cast.setCustomReceivers(this.A,
g.Ja,(0,g.x)(function(e){this.pc("Failed to set initial custom receivers: "+g.Mk(e))},this)));
E7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);G7(this,new C7(this.u,d),!0)}this.o.qv(b)}else E7("setConnectedScreenStatus: no screen.")};
g.h.uO=function(a){this.ha()?this.pc("Setting connection data on disposed cast v2"):this.o?this.o.Ek(a):this.pc("Setting connection data without a session")};
g.h.pP=function(){this.ha()?this.pc("Stopping session on disposed cast v2"):this.o?(this.o.stop(),G7(this,null)):E7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.AB,this),(0,g.x)(this.QM,this))};
g.h.X=function(){this.u.unsubscribe("onlineScreenChange",(0,g.x)(this.FD,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.B);var a=oza,b=g.Ia("yt.mdx.remote.debug.handlers_");g.kb(b||[],a);g.Me(this.o);g.N.prototype.X.call(this)};
g.h.pc=function(a){i7("Controller",a)};
g.h.CB=function(a,b){this.o==a&&(b||G7(this,null),this.S("yt-remote-cast2-session-change",b))};
g.h.rM=function(a,b){if(!this.ha())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),E7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.u.label!=a.label)E7("onReceiverAction_: Stopping active receiver: "+this.o.u.friendlyName),this.o.stop();else{E7("onReceiverAction_: Casting to active receiver.");this.o.getScreen()&&this.S("yt-remote-cast2-session-change",this.o.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:G7(this,
new C7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:G7(this,new B7(this.u,a,this.F));break;case chrome.cast.ReceiverType.CAST:G7(this,new A7(this.u,a));break;default:this.pc("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.u.label==a.label?this.o.stop():this.pc("Stopping receiver w/o session: "+a.friendlyName)}else this.pc("onReceiverAction_ called without receiver.")};
g.h.IK=function(a){if(this.ha())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.pc("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.u:null;if(!c||c.label!=b.label)return this.pc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.getScreen())return E7("Reselecting dial screen."),
this.S("yt-remote-cast2-session-change",this.o.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.pc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);G7(this,new B7(this.u,b,this.F))}b=this.o;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.BG,b,(b.G.extraData||{}).screenId||null)):new Promise((0,g.x)(b.ot,b))};
g.h.AB=function(a){if(!this.ha()){E7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)E7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),G7(this,new A7(this.u,b),!0);else{this.pc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.u,d=l6(this.u.ze(),c.label);d&&g6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(E7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Me(this.o),this.o=new A7(this.u,b),this.o.subscribe("sessionScreen",(0,g.x)(this.CB,this,this.o)),this.o.Ek(null));this.o.ov(a)}}};
g.h.oP=function(){return this.o?this.o.GD():null};
g.h.QM=function(a){this.ha()||(this.pc("Failed to estabilish a session: "+g.Mk(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&G7(this,null))};
g.h.vM=function(a){E7("Receiver availability updated: "+a);if(!this.ha()){var b=F7(this);this.C=a==chrome.cast.ReceiverAvailability.AVAILABLE;F7(this)!=b&&this.S("yt-remote-cast2-availability-change",F7(this))}};
g.h.FD=function(){this.ha()||(this.A=Mza(this),E7("Updating custom receivers: "+g.Mk(this.A)),chrome.cast.setCustomReceivers(this.A,g.Ja,(0,g.x)(function(){this.pc("Failed to set custom receivers.")},this)),this.S("yt-remote-cast2-availability-change",F7(this)))};
D7.prototype.setLaunchParams=D7.prototype.uO;D7.prototype.setConnectedScreenStatus=D7.prototype.tO;D7.prototype.stopSession=D7.prototype.pP;D7.prototype.getCastSession=D7.prototype.oP;D7.prototype.requestSession=D7.prototype.requestSession;D7.prototype.init=D7.prototype.init;D7.prototype.dispose=D7.prototype.dispose;var M7=[];g.h=R7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";S7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.dg=a.hasPrevious,this.hasNext=a.hasNext,this.G=a.playerTime,this.F=a.playerTimeAt,this.C=a.seekableStart,this.u=a.seekableEnd,this.H=a.duration,this.L=a.loadedTime,this.B=a.liveIngestionTime,this.A=!isNaN(this.B))};
g.h.nb=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.getDuration=function(){return this.A?this.H+T7(this):this.H};
g.h.clone=function(){return new R7(X7(this))};g.t(Z7,g.N);g.h=Z7.prototype;g.h.play=function(){1==this.o?(this.u?this.u.play(null,g.Ja,e8(this,"play")):d8(this,"play"),c8(this,1,V7($7(this))),this.S("remotePlayerChange")):a8(this,this.play)};
g.h.pause=function(){1==this.o?(this.u?this.u.pause(null,g.Ja,e8(this,"pause")):d8(this,"pause"),c8(this,2,V7($7(this))),this.S("remotePlayerChange")):a8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.o){if(this.u){var b=$7(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.nb()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Ja,e8(this,"seekTo",{newTime:a}))}else d8(this,"seekTo",{newTime:a});c8(this,3,a);this.S("remotePlayerChange")}else a8(this,g.Ra(this.seekTo,a))};
g.h.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.Ja,e8(this,"stopVideo")):d8(this,"stopVideo");var a=$7(this);a.index=-1;a.videoId="";S7(a);b8(this,a);this.S("remotePlayerChange")}else a8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=$7(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.x)(function(){i7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.pc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.x)(function(){i7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.pc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);d8(this,"setVolume",e)}c.muted=b;c.volume=a;b8(this,c)}else a8(this,g.Ra(this.setVolume,a,b))};
g.h.BD=function(a,b){if(1==this.o){var c=$7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Mk(b.style),g.Vb(d,c.o));d8(this,"setSubtitlesTrack",d);b8(this,c)}else a8(this,g.Ra(this.BD,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();d8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=$7(this);d.audioTrackId=c;b8(this,d)}else a8(this,g.Ra(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=$7(this);c=c||0;var m={videoId:a,currentIndex:c};W7(l,a,c);void 0!==b&&(U7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.Mk(k));d8(this,"setPlaylist",m);d||b8(this,l)};
g.h.yq=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"previous")}else a8(this,g.Ra(this.yq,a,b))};
g.h.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"next")}else a8(this,g.Ra(this.nextVideo,a,b))};
g.h.Hx=function(){1==this.o?d8(this,"dismissAutoplay"):a8(this,this.Hx)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.S("proxyStateChange",a,this.o)}g.N.prototype.dispose.call(this)};
g.h.X=function(){Zza(this);this.B=null;this.C.clear();Y7(this,null);g.N.prototype.X.call(this)};
g.h.Zv=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.S("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)b=a=this.C,g.gb(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.h.oM=function(a,b){this.S(a,b)};
g.h.rK=function(a){if(!a)this.Vm(null),Y7(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=$7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)i7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,b8(this,b)}};
g.h.Vm=function(a){i7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.H);if(this.u=a)this.u.addUpdateListener(this.H),$za(this),this.S("remotePlayerChange")};
g.h.qK=function(a){a?($za(this),this.S("remotePlayerChange")):this.Vm(null)};
g.h.Iv=function(){d8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.BK=function(){var a=Wza();a&&Y7(this,a)};
g.h.pc=function(a){i7("CP",a)};g.t(f8,g.N);g.h=f8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==k&&(l.currentIndex=k);c&&(this.gb.listId=c);this.gb.videoId=d;this.gb.index=k||0;this.gb.state=3;U7(this.gb,m);this.B="UNSUPPORTED";g8("Connecting with setPlaylist and params: "+g.Mk(l));this.o.connect({method:"setPlaylist",
params:g.Mk(l)},a,mya())}else g8("Connecting without params"),this.o.connect({},a,mya());bAa(this)};
g.h.dispose=function(){this.ha()||(this.S("beforeDispose"),h8(this,3));g.N.prototype.dispose.call(this)};
g.h.X=function(){i8(this);k8(this);j8(this);g.Mo(this.G);this.G=NaN;g.Mo(this.H);this.H=NaN;this.A=null;g.hp(this.T);this.T.length=0;this.o.dispose();g.N.prototype.X.call(this);this.B=this.F=this.u=this.gb=this.o=null};
g.h.RF=function(){this.fk(2)};
g.h.vK=function(){g8("Channel opened");this.R&&(this.R=!1,j8(this),this.N=g.Ko((0,g.x)(function(){g8("Timing out waiting for a screen.");this.fk(1)},this),15E3));
qya(lza(this.o),this.V)};
g.h.sK=function(){g8("Channel closed");isNaN(this.C)?q6(!0):q6();this.dispose()};
g.h.tK=function(a){q6();isNaN(this.jm())?(g8("Channel error: "+a+" without reconnection"),this.dispose()):(this.R=!0,g8("Channel error: "+a+" with reconnection in "+this.jm()+" ms"),h8(this,2))};
g.h.uK=function(a){a.params?g8("Received: action="+a.action+", params="+g.Mk(a.params)):g8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=x6(a.params.devices);this.u=(0,g.Jc)(a,function(c){return new e6(c)});
a=!!g.cb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
eAa(this,a);break;case "loungeScreenDisconnected":g.lb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
eAa(this,!1);break;case "remoteConnected":var b=new e6(x6(a.params.device));g.cb(this.u,function(c){return b?c.id==b.id:!1})||Xxa(this.u,b);
break;case "remoteDisconnected":b=new e6(x6(a.params.device));g.lb(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":gAa(this,a);break;case "nowPlaying":iAa(this,a);break;case "onStateChange":hAa(this,a);break;case "onAdStateChange":jAa(this,a);break;case "onVolumeChanged":kAa(this,a);break;case "onSubtitlesTrackChanged":fAa(this,a);break;case "nowAutoplaying":lAa(this,a);break;case "autoplayDismissed":this.S("autoplayDismissed");break;case "autoplayUpNext":this.F=a.params.videoId||null;this.S("autoplayUpNext",this.F);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.S("autoplayModeChange",this.B);"DISABLED"==this.B&&this.S("autoplayDismissed");break;case "onHasPreviousNextChanged":mAa(this,a);break;case "requestAssistedSignIn":this.S("assistedSignInRequested",a.params.authCode);break;default:g8("Unrecognized action: "+a.action)}};
g.h.hO=function(){if(this.A){var a=this.A;this.A=null;this.gb.videoId!=a&&l8(this,"getNowPlaying")}};
g.h.IF=function(){var a=3;this.ha()||(a=0,isNaN(this.jm())?d7(this.o)&&isNaN(this.C)&&(a=1):a=2);return a};
g.h.fk=function(a){g8("Disconnecting with "+a);i8(this);this.S("beforeDisconnect",a);1==a&&q6();mza(this.o,a);this.dispose()};
g.h.GF=function(){var a=this.gb;this.A&&(a=this.gb.clone(),W7(a,this.A,a.index));return X7(a)};
g.h.vO=function(a){var b=new R7(a);b.videoId&&b.videoId!=this.gb.videoId&&(this.A=b.videoId,g.Mo(this.G),this.G=g.Ko((0,g.x)(this.hO,this),5E3));var c=[];this.gb.listId==b.listId&&this.gb.videoId==b.videoId&&this.gb.index==b.index||c.push("remoteQueueChange");this.gb.playerState==b.playerState&&this.gb.volume==b.volume&&this.gb.muted==b.muted&&V7(this.gb)==V7(b)&&g.Mk(this.gb.o)==g.Mk(b.o)||c.push("remotePlayerChange");this.gb.reset(a);(0,g.y)(c,function(d){this.S(d)},this)};
g.h.qy=function(){var a=this.o.F.id,b=g.cb(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.jm=function(){var a=this.o;return a.u.isActive()?a.u.u-(0,g.C)():NaN};
g.h.vF=function(){return this.B||"UNSUPPORTED"};
g.h.wF=function(){return this.F||""};
g.h.hP=function(){if(!isNaN(this.jm())){var a=this.o.u;g.vn(a.o);a.start()}};
g.h.pO=function(a,b){l8(this,a,b);dAa(this)};
f8.prototype.subscribe=f8.prototype.subscribe;f8.prototype.unsubscribeByKey=f8.prototype.mi;f8.prototype.getProxyState=f8.prototype.IF;f8.prototype.disconnect=f8.prototype.fk;f8.prototype.getPlayerContextData=f8.prototype.GF;f8.prototype.setPlayerContextData=f8.prototype.vO;f8.prototype.getOtherConnectedRemoteId=f8.prototype.qy;f8.prototype.getReconnectTimeout=f8.prototype.jm;f8.prototype.getAutoplayMode=f8.prototype.vF;f8.prototype.getAutoplayVideoId=f8.prototype.wF;f8.prototype.reconnect=f8.prototype.hP;
f8.prototype.sendMessage=f8.prototype.pO;g.t(m8,m7);g.h=m8.prototype;g.h.ze=function(a){return this.Md.$_gs(a)};
g.h.contains=function(a){return!!this.Md.$_c(a)};
g.h.get=function(a){return this.Md.$_g(a)};
g.h.start=function(){this.Md.$_st()};
g.h.add=function(a,b,c){this.Md.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Md.$_r(a,b,c)};
g.h.dr=function(a,b,c,d){this.Md.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.o.length;a<b;++a)this.Md.$_ubk(this.o[a]);this.o.length=0;this.Md=null;m7.prototype.X.call(this)};
g.h.lP=function(){this.S("screenChange")};
g.h.SL=function(){this.S("onlineScreenChange")};
v7.prototype.$_st=v7.prototype.start;v7.prototype.$_gspc=v7.prototype.mP;v7.prototype.$_gsppc=v7.prototype.ED;v7.prototype.$_c=v7.prototype.contains;v7.prototype.$_g=v7.prototype.get;v7.prototype.$_a=v7.prototype.add;v7.prototype.$_un=v7.prototype.dr;v7.prototype.$_r=v7.prototype.remove;v7.prototype.$_gs=v7.prototype.ze;v7.prototype.$_gos=v7.prototype.DD;v7.prototype.$_s=v7.prototype.subscribe;v7.prototype.$_ubk=v7.prototype.mi;var F8=null,E8=!1,n8=null,o8=null,D8=null,s8=[];g.t(G8,g.z);g.h=G8.prototype;g.h.X=function(){g.z.prototype.X.call(this);this.o.stop();this.u.stop();this.G.stop();this.N();var a=this.Xa;a.unsubscribe("proxyStateChange",this.wB,this);a.unsubscribe("remotePlayerChange",this.Zm,this);a.unsubscribe("remoteQueueChange",this.rq,this);a.unsubscribe("previousNextChange",this.sB,this);a.unsubscribe("nowAutoplaying",this.oB,this);a.unsubscribe("autoplayDismissed",this.MA,this);this.Xa=this.module=null};
g.h.Sz=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.Xa.o)if(I8(this)){if(!$7(this.Xa).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":$7(this.Xa).nb()?this.Xa.pause():this.Xa.play();break;case "control_play":this.Xa.play();break;case "control_pause":this.Xa.pause();break;case "control_seek":this.F.xz(c[0],c[1]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.I.getCurrentTime();K8(this,0===c?void 0:c);break;case "control_seek":K8(this,c[0]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.h.pK=function(a){this.G.OF(a)};
g.h.QO=function(a){this.Sz("control_subtitles_set_track",g.Pb(a)?null:a)};
g.h.MC=function(){var a=this.I.getOption("captions","track");g.Pb(a)||J8(this,a)};
g.h.ac=function(a){this.module.ac(a,this.I.getVideoData().lengthSeconds)};
g.h.cB=function(a){if(I8(this)){this.Xa.unsubscribe("remotePlayerChange",this.Zm,this);var b=Math.round(a.volume);a=!!a.muted;var c=$7(this.Xa);if(b!==c.volume||a!==c.muted)this.Xa.setVolume(b,a),this.H.start();this.Xa.subscribe("remotePlayerChange",this.Zm,this)}};
g.h.rL=function(){g.Pb(this.A)||yAa(this,this.A);this.B=!1};
g.h.wB=function(a,b){this.u.stop();2===b&&this.KC()};
g.h.Zm=function(){if(I8(this)){this.o.stop();var a=$7(this.Xa);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.module.kd=1;break;case 1082:case 1083:this.module.kd=0;break;default:this.module.kd=-1}switch(a.playerState){case 1081:case 1:H8(this,new g.UC(8));this.JC();break;case 1085:case 3:H8(this,new g.UC(9));break;case 1083:case 0:H8(this,new g.UC(2));this.F.stop();this.ac(this.I.getVideoData().lengthSeconds);break;case 1084:H8(this,new g.UC(4));break;case 2:H8(this,new g.UC(4));
this.ac(V7(a));break;case -1:H8(this,new g.UC(64));break;case -1E3:H8(this,new g.UC(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=$7(this.Xa).o;var b=this.A;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.A=a,yAa(this,a));a=$7(this.Xa);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.H.isActive()||this.oD()}else xAa(this)};
g.h.sB=function(){this.I.S("mdxpreviousnextchange")};
g.h.rq=function(){I8(this)||xAa(this)};
g.h.oB=function(a){isNaN(a)||this.I.S("mdxnowautoplaying",a)};
g.h.MA=function(){this.I.S("mdxautoplaycanceled")};
g.h.setAudioTrack=function(a){I8(this)&&this.Xa.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.h.seekTo=function(a,b){-1===$7(this.Xa).playerState?K8(this,a):b&&this.Xa.seekTo(a)};
g.h.oD=function(){if(I8(this)){var a=$7(this.Xa);this.events.kb(this.L);a.muted?this.I.mute():this.I.unMute();this.I.setVolume(a.volume);this.L=this.events.M(this.I,"onVolumeChange",this.cB)}};
g.h.JC=function(){this.o.stop();if(!this.Xa.ha()){var a=$7(this.Xa);a.nb()&&H8(this,new g.UC(8));this.ac(V7(a));this.o.start()}};
g.h.KC=function(){this.u.stop();this.o.stop();var a=this.Xa.B.getReconnectTimeout();2==this.Xa.o&&!isNaN(a)&&this.u.start()};g.t(L8,g.T);L8.prototype.jc=function(){this.o.show()};
L8.prototype.Sa=function(){this.o.hide()};
L8.prototype.u=function(){g.SN("https://web.archive.org/web/20200701002914/https://support.google.com/youtube/answer/7640706")};
L8.prototype.A=function(){d6("mdx-manual-pairing-popup-ok");this.Sa()};g.t(M8,g.T);M8.prototype.jc=function(){this.o.show()};
M8.prototype.Sa=function(){this.o.hide()};
M8.prototype.u=function(){d6("mdx-privacy-popup-cancel");this.Sa()};
M8.prototype.A=function(){d6("mdx-privacy-popup-confirm");this.Sa()};g.t(N8,g.T);N8.prototype.u=function(a){AAa(this,a.state)};g.t(O8,g.fR);O8.prototype.B=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.vi=g.Ab(a,this.o,this),g.hR(this,(0,g.Jc)(a,this.o)),a=this.I.getOption("remote","currentReceiver"),this.Lb(this.o(a)),this.enable(!0)):this.enable(!1)};
O8.prototype.o=function(a){return a.key};
O8.prototype.Hf=function(a){return"cast-selector-receiver"===a?"Cast...":this.vi[a].name};
O8.prototype.zd=function(a){g.fR.prototype.zd.call(this,a);this.I.setOption("remote","currentReceiver",this.vi[a]);this.Na.Sa()};g.t(P8,g.gC);g.h=P8.prototype;
g.h.create=function(){rAa(g.vy(this.player.O()));this.subscriptions.push(g.Ro("yt-remote-before-disconnect",this.nK,this));this.subscriptions.push(g.Ro("yt-remote-connection-change",this.wM,this));this.subscriptions.push(g.Ro("yt-remote-receiver-availability-change",this.uB,this));this.subscriptions.push(g.Ro("yt-remote-auto-connect",this.uM,this));this.subscriptions.push(g.Ro("yt-remote-receiver-resumed",this.tM,this));this.subscriptions.push(g.Ro("mdx-privacy-popup-confirm",this.RN,this));this.subscriptions.push(g.Ro("mdx-privacy-popup-cancel",
this.QN,this));this.subscriptions.push(g.Ro("mdx-manual-pairing-popup-ok",this.UG,this));this.uB()};
g.h.load=function(){this.player.cancelPlayback();g.gC.prototype.load.call(this);this.se=new G8(this,this.player,this.Xa);var a=(a=wAa())?a.currentTime:0;var b=C8()?new Z7(x8(),void 0):null;0==a&&b&&(a=V7($7(b)));0!==a&&this.ac(a);zAa(this,this.Qb,this.Qb);g.AT(this.player.app,6)};
g.h.unload=function(){this.player.S("mdxautoplaycanceled");this.Fh=this.Ef;g.Ne(this.se,this.Xa);this.Xa=this.se=null;g.gC.prototype.unload.call(this);g.AT(this.player.app,5);Q8(this)};
g.h.X=function(){g.So(this.subscriptions);g.gC.prototype.X.call(this)};
g.h.qg=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.se.Sz.apply(this.se,[a].concat(g.la(c)))};
g.h.getAdState=function(){return this.kd};
g.h.KF=function(){return this.loaded?this.se.suggestion:null};
g.h.dg=function(){return this.Xa?$7(this.Xa).dg:!1};
g.h.hasNext=function(){return this.Xa?$7(this.Xa).hasNext:!1};
g.h.ac=function(a,b){this.jz=a||0;this.player.S("progresssync",a,b)};
g.h.getCurrentTime=function(){return this.jz};
g.h.getProgressState=function(){var a=$7(this.Xa),b=this.player.getVideoData();return{allowSeeking:g.O(this.player.O().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.jd():!a.isAdPlaying()&&this.player.jd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.A?a.B+T7(a):a.B,isAtLiveHead:1>=(a.A?a.u+T7(a):a.u)-this.getCurrentTime(),loaded:a.L,seekableEnd:a.A?a.u+T7(a):a.u,seekableStart:0<a.C?a.C+
T7(a):a.C}};
g.h.nextVideo=function(){this.Xa&&this.Xa.nextVideo()};
g.h.yq=function(){this.Xa&&this.Xa.yq()};
g.h.nK=function(a){1===a&&(this.Ou=this.Xa?$7(this.Xa):null)};
g.h.wM=function(){var a=C8()?new Z7(x8(),void 0):null;if(a){var b=this.Fh;this.loaded&&this.unload();this.Xa=a;this.Ou=null;b.key!==this.Ef.key&&(this.Fh=b,this.load())}else g.Me(this.Xa),this.Xa=null,this.loaded&&(this.unload(),(a=this.Ou)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,V7(a)));this.player.S("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.uB=function(){this.vi=[this.Ef].concat(tAa());var a=y8()||this.Ef;R8(this,a);this.player.sa("onMdxReceiversChange")};
g.h.uM=function(){var a=y8();R8(this,a)};
g.h.tM=function(){this.Fh=y8()};
g.h.RN=function(){this.an=!0;Q8(this);E8=!1;F8&&A8(F8,1);F8=null};
g.h.QN=function(){this.an=!1;Q8(this);R8(this,this.Ef);this.Fh=this.Ef;E8=!1;F8=null;this.player.playVideo()};
g.h.UG=function(){this.yp=!0;Q8(this);g.Ms("yt-remote-manual-pairing-warning-shown",!0,2592E3);E8=!1;F8&&A8(F8,1);F8=null};
g.h.dd=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.vi;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?P7():R8(this,b)),this.loaded?this.Fh:this.Ef;case "quickCast":return 2===this.vi.length&&"cast-selector-receiver"===this.vi[1].key?(b&&P7(),!0):!1}};
g.h.Iv=function(){this.Xa.Iv()};
g.h.Pf=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.BC.remote=P8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:29:14 Jul 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:29 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 167.479
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.061
  cdx.remote: 0.057
  esindex: 0.009
  LoadShardBlock: 130.244 (3)
  PetaboxLoader3.datanode: 99.729 (5)
  PetaboxLoader3.resolve: 342.204 (3)
  load_resource: 333.136 (2)
*/