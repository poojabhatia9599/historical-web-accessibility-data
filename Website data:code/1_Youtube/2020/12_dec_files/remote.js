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

(function(g){var window=this;var AHa=function(a,b){return g.Tb(a,b)},Z5=function(a,b,c){a.C.set(b,c)},$5=function(a){Z5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.A()).toString(36));
return a},a6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Pm(a.C,b,c)},BHa=function(a,b){var c=[];
g.$i(b,function(d){try{var e=g.Dn.prototype.B.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Cn(e)&&c.push(d)},a);
return c},CHa=function(a,b){var c=BHa(a,b);
g.Fb(c,function(d){g.Dn.prototype.remove.call(this,d)},a)},DHa=function(a){if(a.be){if(a.be.locationOverrideToken)return{locationOverrideToken:a.be.locationOverrideToken};
if(null!=a.be.latitudeE7&&null!=a.be.longitudeE7)return{latitudeE7:a.be.latitudeE7,longitudeE7:a.be.longitudeE7}}return null},EHa=function(a,b){g.nb(a,b)||a.push(b)},b6=function(a){var b=0,c;
for(c in a)b++;return b},FHa=function(a,b){var c=b instanceof g.Fc?b:g.Lc(b,/^data:image\//i.test(b));
a.src=g.Gc(c)},c6=function(){},GHa=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},HHa=function(a){if(a.tf&&"function"==typeof a.tf)return a.tf();
if("string"===typeof a)return a.split("");if(g.Ra(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Pb(a)},IHa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ra(a)||"string"===typeof a)g.Fb(a,b,void 0);else{if(a.Ag&&"function"==typeof a.Ag)var c=a.Ag();else if(a.tf&&"function"==typeof a.tf)c=void 0;else if(g.Ra(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Qb(a);d=HHa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},JHa=function(a,b,c,d){var e=new g.Dm(null,void 0);
a&&g.Em(e,a);b&&g.Fm(e,b);c&&g.Gm(e,c);d&&(e.B=d);return e},d6=function(a,b){g.po[a]=!0;
var c=g.no();c&&c.publish.apply(c,arguments);g.po[a]=!1},e6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Am;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",KHa(this,a.capabilities||""),LHa(this,a.experiments||""))},KHa=function(a,b){a.capabilities.clear();
g.Je(b.split(","),g.Va(AHa,MHa)).forEach(function(c){a.capabilities.add(c)})},LHa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},f6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},g6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},NHa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},OHa=function(a){return new f6(a)},PHa=function(a){return Array.isArray(a)?g.Pc(a,OHa):[]},h6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},i6=function(a){return Array.isArray(a)?"["+g.Pc(a,h6).join(",")+"]":"null"},j6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},QHa=function(a){return g.Pc(a,function(b){return{key:b.id,
name:b.name}})},k6=function(a,b){return g.jb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},l6=function(a,b){return g.jb(a,function(c){return g6(c,b)})},RHa=function(){var a=(0,g.qt)();
a&&CHa(a,a.u.Xi(!0))},m6=function(){var a=g.ut("yt-remote-connected-devices")||[];
g.Cb(a);return a},SHa=function(a){if(g.ob(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Pc(a,function(d,e){return 0==e?d:d.substring(c.length)})},THa=function(a){g.tt("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.ut("yt-remote-device-id");a||(a=j6(),g.tt("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.nb(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.nb(a,b);g.wt()&&g.Eb(a,b);a=SHa(a);if(g.ob(a))try{g.bq("remote_sid")}catch(c){}else try{g.$p("remote_sid",a.join(","),-1)}catch(c){}},UHa=function(){return g.ut("yt-remote-session-browser-channel")},VHa=function(){return g.ut("yt-remote-local-screens")||[]},WHa=function(){g.tt("yt-remote-lounge-token-expiration",!0,86400)},XHa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Pc(VHa(),function(d){return d.loungeToken}),c=g.Pc(a,function(d){return d.loungeToken});
g.gh(c,function(d){return!g.nb(b,d)})&&WHa();
g.tt("yt-remote-local-screens",a,31536E3)},YHa=function(a,b){g.tt("yt-remote-session-browser-channel",a);
g.tt("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.nb(c,d)||c.push(d);THa(c);p6()},q6=function(a){a||(g.vt("yt-remote-session-screen-id"),g.vt("yt-remote-session-video-id"));
p6();a=m6();g.rb(a,o6());THa(a)},ZHa=function(){if(!r6){var a=g.Nn();
a&&(r6=new g.xn(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},$Ha=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},aIa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},s6=function(a){a.length?bIa(a.shift(),function(){s6(a)}):t6()},cIa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},bIa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.jd(d,g.jg(a));(document.head||document.documentElement).appendChild(d)},t6=function(){var a=aIa();
a&&a(!1,"No cast extension found")},eIa=function(){if(dIa){var a=2,b=aIa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;bIa("//web.archive.org/web/20201201000552/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",t6,c)}},fIa=function(){eIa();
var a=(a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/))?parseInt(a[1],10):0;var b=[];if(0!=a){var c=a-1;b.push("//web.archive.org/web/20201201000552/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20201201000552/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}b.push("//web.archive.org/web/20201201000552/https://www.gstatic.com/eureka/clank/cast_sender.js");s6(b)},u6=function(a,b,c){g.B.call(this);
this.G=null!=c?(0,g.z)(a,c):a;this.ff=b;this.F=(0,g.z)(this.SI,this);this.u=!1;this.B=0;this.C=this.Va=null;this.D=[]},v6=function(a,b,c){g.B.call(this);
this.D=null!=c?a.bind(c):a;this.ff=b;this.C=null;this.u=!1;this.B=0;this.Va=null},w6=function(a){a.Va=g.ym(function(){a.Va=null;
a.u&&!a.B&&(a.u=!1,w6(a))},a.ff);
var b=a.C;a.C=null;a.D.apply(null,b)},x6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return GHa(a)},y6=function(){},z6=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},B6=function(a){A6.dispatchEvent(new gIa(A6,a))},gIa=function(a){g.ql.call(this,"statevent",a)},C6=function(){},hIa=function(){},jIa=function(a){return(a=iIa(a))?new ActiveXObject(a):new XMLHttpRequest},iIa=function(a){if(!a.B&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.B=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.B},D6=function(a,b,c,d){this.u=a;
this.B=b;this.P=c;this.K=d||1;this.F=45E3;this.D=new g.k1(this);this.C=new g.xm;this.C.setInterval(250)},lIa=function(a,b,c){a.Zn=1;
a.Wj=$5(b.clone());a.km=c;a.G=!0;kIa(a,null)},E6=function(a,b,c,d,e){a.Zn=1;
a.Wj=$5(b.clone());a.km=null;a.G=c;e&&(a.MF=!1);kIa(a,d)},kIa=function(a,b){a.Qn=g.A();
F6(a);a.Lk=a.Wj.clone();a6(a.Lk,"t",a.K);a.Kq=0;a.ge=a.u.Nv(a.u.tq()?b:null);0<a.Fw&&(a.cu=new v6((0,g.z)(a.LG,a,a.ge),a.Fw));a.D.wa(a.ge,"readystatechange",a.bQ);var c=a.Il?g.Zb(a.Il):{};a.km?(a.Ju="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.ge.send(a.Lk,a.Ju,a.km,c)):(a.Ju="GET",a.MF&&!g.ze&&(c.Connection="close"),a.ge.send(a.Lk,a.Ju,null,c));a.u.yh(1)},oIa=function(a,b,c){for(var d=!0;!a.ol&&a.Kq<c.length;){var e=mIa(a,c);
if(e==G6){4==b&&(a.mk=4,B6(15),d=!1);break}else if(e==nIa){a.mk=4;B6(16);d=!1;break}else H6(a,e)}4==b&&0==c.length&&(a.mk=1,B6(17),d=!1);a.Hh=a.Hh&&d;d||(I6(a),J6(a))},mIa=function(a,b){var c=a.Kq,d=b.indexOf("\n",c);
if(-1==d)return G6;c=Number(b.substring(c,d));if(isNaN(c))return nIa;d+=1;if(d+c>b.length)return G6;var e=b.substr(d,c);a.Kq=d+c;return e},qIa=function(a,b){a.Qn=g.A();
F6(a);var c=b?window.location.hostname:"";a.Lk=a.Wj.clone();Z5(a.Lk,"DOMAIN",c);Z5(a.Lk,"t",a.K);try{a.Mh=new ActiveXObject("htmlfile")}catch(n){I6(a);a.mk=7;B6(22);J6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)h=e+"\\x3c";else if(">"==h)h=e+"\\x3e";else{if(h in K6)h=K6[h];else if(h in pIa)h=K6[h]=pIa[h];else{var l=h.charCodeAt(0);if(31<l&&127>l)var m=h;else{if(256>l){if(m="\\x",16>l||256<l)m+="0"}else m="\\u",4096>l&&(m+="0");m+=l.toString(16).toUpperCase()}h=
K6[h]=m}h=e+h}e=h}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.gd(g.jc("b/12014412"),d+"</body></html>");a.Mh.open();a.Mh.write(g.cd(c));a.Mh.close();a.Mh.parentWindow.m=(0,g.z)(a.qP,a);a.Mh.parentWindow.d=(0,g.z)(a.LE,a,!0);a.Mh.parentWindow.rpcClose=(0,g.z)(a.LE,a,!1);c=a.Mh.createElement("DIV");a.Mh.parentWindow.document.body.appendChild(c);d=g.Kc(a.Lk.toString());d=g.nd(g.Gc(d));d=g.gd(g.jc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.hd(c,d);a.u.yh(1)},F6=function(a){a.uz=g.A()+a.F;
rIa(a,a.F)},rIa=function(a,b){if(null!=a.jo)throw Error("WatchDog timer not null");
a.jo=z6((0,g.z)(a.CP,a),b)},L6=function(a){a.jo&&(g.v.clearTimeout(a.jo),a.jo=null)},J6=function(a){a.u.NB()||a.ol||a.u.rs(a)},I6=function(a){L6(a);
g.ag(a.cu);a.cu=null;a.C.stop();g.MBa(a.D);if(a.ge){var b=a.ge;a.ge=null;b.abort();b.dispose()}a.Mh&&(a.Mh=null)},H6=function(a,b){try{a.u.DE(a,b),a.u.yh(4)}catch(c){}},tIa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;sIa(a,b,function(h){h?c(!0):g.v.setTimeout(function(){tIa(a,b,c,d,f)},f)})}},sIa=function(a,b,c){var d=new Image;
d.onload=function(){try{M6(d),c(!0)}catch(e){}};
d.onerror=function(){try{M6(d),c(!1)}catch(e){}};
d.onabort=function(){try{M6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{M6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
FHa(d,a)},M6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},N6=function(a){g.Nl.call(this);
this.headers=new g.Am;this.ba=a||null;this.C=!1;this.Y=this.u=null;this.ra=this.N="";this.G=0;this.D="";this.F=this.ia=this.P=this.ea=!1;this.K=0;this.W=null;this.Aa="";this.X=this.da=!1},uIa=function(a){return g.xe&&g.Yd(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},vIa=function(a){return"content-type"==a.toLowerCase()},xIa=function(a,b){a.C=!1;
a.u&&(a.F=!0,a.u.abort(),a.F=!1);a.D=b;a.G=5;wIa(a);O6(a)},wIa=function(a){a.ea||(a.ea=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},zIa=function(a){if(a.C&&"undefined"!=typeof g.p1)if(a.Y[1]&&4==P6(a)&&2==a.getStatus())Q6(a,"Local request error detected and ignored");
else if(a.P&&4==P6(a))g.ym(a.AE,0,a);else if(a.dispatchEvent("readystatechange"),4==P6(a)){Q6(a,"Request complete");a.C=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.wd(1,String(a.N));if(!f&&g.v.self&&g.v.self.location){var h=g.v.self.location.protocol;f=h.substr(0,h.length-1)}e=!yIa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.G=6;try{var l=2<P6(a)?a.u.statusText:""}catch(m){l=""}a.D=l+" ["+a.getStatus()+"]";wIa(a)}}finally{O6(a)}}},O6=function(a,b){if(a.u){AIa(a);
var c=a.u,d=a.Y[0]?g.Oa:null;a.u=null;a.Y=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},AIa=function(a){a.u&&a.X&&(a.u.ontimeout=null);
a.W&&(g.v.clearTimeout(a.W),a.W=null)},P6=function(a){return a.u?a.u.readyState:0},R6=function(a){try{return a.u?a.u.responseText:""}catch(b){return""}},Q6=function(a,b){return b+" ["+a.ra+" "+a.N+" "+a.getStatus()+"]"},BIa=function(a){this.u=a;
this.B=new y6},CIa=function(a){var b=S6(a.u,a.zo,"/mail/images/cleardot.gif");
$5(b);tIa(b.toString(),5E3,(0,g.z)(a.PH,a),3,2E3);a.yh(1)},U6=function(a){var b=a.u.P;
if(null!=b)B6(5),b?(B6(11),T6(a.u,a,!1)):(B6(12),T6(a.u,a,!0));else if(a.Uf=new D6(a,void 0,void 0,void 0),a.Uf.Il=a.Dw,b=a.u,b=S6(b,b.tq()?a.fp:null,a.Ew),B6(5),!g.xe||g.Zd(10))a6(b,"TYPE","xmlhttp"),E6(a.Uf,b,!1,a.fp,!1);else{a6(b,"TYPE","html");var c=a.Uf;a=!!a.fp;c.Zn=3;c.Wj=$5(b.clone());qIa(c,a)}},V6=function(a,b,c){this.Ha=1;
this.u=[];this.C=[];this.D=new y6;this.K=a||null;this.P=null!=b?b:null;this.F=c||!1},EIa=function(a,b){this.u=a;
this.map=b;this.context=null},FIa=function(a,b,c,d){g.ql.call(this,"timingevent",a);
this.size=b;this.iq=d},GIa=function(a){g.ql.call(this,"serverreachability",a)},JIa=function(a){HIa(a);
if(3==a.Ha){var b=a.Np++,c=a.Mr.clone();Z5(c,"SID",a.B);Z5(c,"RID",b);Z5(c,"TYPE","terminate");W6(a,c);b=new D6(a,a.B,b,void 0);b.Zn=2;b.Wj=$5(c.clone());FHa(new Image,b.Wj.toString());b.Qn=g.A();F6(b)}IIa(a)},KIa=function(a){a.oI(1,0);
a.Mr=S6(a,null,a.Cw);X6(a)},HIa=function(a){a.bk&&(a.bk.abort(),a.bk=null);
a.Cd&&(a.Cd.cancel(),a.Cd=null);a.Zi&&(g.v.clearTimeout(a.Zi),a.Zi=null);Y6(a);a.Jf&&(a.Jf.cancel(),a.Jf=null);a.fk&&(g.v.clearTimeout(a.fk),a.fk=null)},LIa=function(a,b){if(0==a.Ha)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new EIa(a.ZL++,b));2!=a.Ha&&3!=a.Ha||X6(a)},MIa=function(a){var b=0;
a.Cd&&b++;a.Jf&&b++;return b},X6=function(a){a.Jf||a.fk||(a.fk=z6((0,g.z)(a.KE,a),0),a.Vm=0)},OIa=function(a,b){if(1==a.Ha){if(!b){a.Np=Math.floor(1E5*Math.random());
var c=a.Np++,d=new D6(a,"",c,void 0);d.Il=a.an;var e=Z6(a),f=a.Mr.clone();Z5(f,"RID",c);Z5(f,"CVER","1");W6(a,f);lIa(d,f,e);a.Jf=d;a.Ha=2}}else 3==a.Ha&&(b?NIa(a,b):0==a.u.length||a.Jf||NIa(a))},NIa=function(a,b){if(b)if(6<a.pl){a.u=a.C.concat(a.u);
a.C.length=0;var c=a.Np-1;var d=Z6(a)}else c=b.P,d=b.km;else c=a.Np++,d=Z6(a);var e=a.Mr.clone();Z5(e,"SID",a.B);Z5(e,"RID",c);Z5(e,"AID",a.kn);W6(a,e);c=new D6(a,a.B,c,a.Vm+1);c.Il=a.an;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Jf=c;lIa(c,e,d)},W6=function(a,b){if(a.bf){var c=a.bf.pB();
c&&g.Ib(c,function(d,e){Z5(b,e,d)})}},Z6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.pl&&0<b){var d=a.u[0].u;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Cm:e.Cm},f++){e.Cm=a.u[f].u;var h=a.u[f].map;e.Cm=6>=a.pl?f:e.Cm-d;try{g.Ib(h,function(l){return function(m,n){c.push("req"+l.Cm+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Cm+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.u.splice(0,b));
return c.join("&")},PIa=function(a){a.Cd||a.Zi||(a.G=1,a.Zi=z6((0,g.z)(a.JE,a),0),a.Gm=0)},$6=function(a){if(a.Cd||a.Zi||3<=a.Gm)return!1;
a.G++;a.Zi=z6((0,g.z)(a.JE,a),QIa(a,a.Gm));a.Gm++;return!0},T6=function(a,b,c){a.Gu=c;
a.ji=b.mj;a.F||KIa(a)},Y6=function(a){null!=a.vl&&(g.v.clearTimeout(a.vl),a.vl=null)},QIa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},a7=function(a,b){if(2==b||9==b){var c=null;
a.bf&&(c=null);var d=(0,g.z)(a.KQ,a);c||(c=new g.Dm("//web.archive.org/web/20201201000552/https://www.google.com/images/cleardot.gif"),$5(c));sIa(c.toString(),1E4,d)}else B6(2);RIa(a,b)},RIa=function(a,b){a.Ha=0;
a.bf&&a.bf.CA(b);IIa(a);HIa(a)},IIa=function(a){a.Ha=0;
a.ji=-1;if(a.bf)if(0==a.C.length&&0==a.u.length)a.bf.Bv();else{g.ub(a.C);var b=g.ub(a.u);a.C.length=0;a.u.length=0;a.bf.Bv(b)}},S6=function(a,b,c){var d=g.Lm(c);
if(""!=d.u)b&&g.Fm(d,b+"."+d.u),g.Gm(d,d.D);else{var e=window.location;d=JHa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Po&&g.Ib(a.Po,function(f,h){Z5(d,h,f)});
Z5(d,"VER",a.pl);W6(a,d);return d},SIa=function(){},TIa=function(){this.u=[];
this.B=[]},UIa=function(a,b){this.action=a;
this.params=b||{}},b7=function(a,b){g.B.call(this);
this.u=new g.F(this.jP,0,this);g.D(this,this.u);this.ff=5E3;this.B=0;if("function"===typeof a)b&&(a=(0,g.z)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.C=a},c7=function(a,b,c,d){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
this.W=a;this.G=b;this.C=new g.wn;this.B=new b7(this.nQ,this);this.u=null;this.Td=!1;this.F=null;this.N="";this.P=this.D=0;this.K=[];this.Y=c;this.X=d},VIa=function(a){return{firstTestResults:[""],
secondTestResults:!a.u.Gu,sessionId:a.u.B,arrayId:a.u.kn}},WIa=function(a,b){a.P=b||0;
a.B.stop();d7(a);a.u&&(3==a.u.getState()&&OIa(a.u),JIa(a.u));a.P=0},e7=function(a){return!!a.u&&3==a.u.getState()},d7=function(a){if(a.u){var b=a.X(),c=a.u.an||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.u.an=c}},XIa=function(a,b){(a.G.loungeIdToken=b)||a.B.stop()},f7=function(a){this.scheme="https";
this.port=this.domain="";this.u="/api/lounge";this.B=!0;a=a||document.location.href;var b=Number(g.wd(4,a))||"";b&&(this.port=":"+b);this.domain=g.xd(a)||"";a=g.Vc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Dc(a,"10.0")&&(this.B=!1))},g7=function(a,b){var c=a.u;
a.B&&(c=a.scheme+"://"+a.domain+a.port+a.u);return g.Id(c+b,{})},h7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Va(a.D,d,!0),onError:g.Va(a.C,e),ng:g.Va(a.F,e)};c&&(a.fc=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Up(b,a)},aJa=function(){var a=YIa;
ZIa();i7.push(a);$Ia(i7)},j7=function(a,b){ZIa();
var c=i7,d=bJa(a,String(b));g.ob(c)?cJa(d):($Ia(c),g.Fb(c,function(e){e(d)}))},ZIa=function(){i7||(i7=g.Na("yt.mdx.remote.debug.handlers_")||[],g.Ja("yt.mdx.remote.debug.handlers_",i7,void 0))},cJa=function(a){var b=(k7+1)%50;
k7=b;l7[b]=a;m7||(m7=49==b)},$Ia=function(a){var b=l7;
if(b[0]){var c=k7,d=m7?c:-1;do{d=(d+1)%50;var e=b[d];g.Fb(a,function(f){f(e)})}while(d!=c);
l7=Array(50);k7=-1;m7=!1}},bJa=function(a,b){var c=(g.A()-dJa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},n7=function(a){g.O.call(this);
this.G=a;this.screens=[]},eJa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0},fJa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Je(a.screens,function(f){return!!k6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=eJa(a,b[d])||c;return c},gJa=function(a,b){var c=a.screens.length;
a.screens=g.Je(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},o7=function(a,b,c,d){g.O.call(this);
this.G=a;this.F=b;this.C=c;this.D=d;this.B=0;this.u=null;this.Va=NaN},q7=function(a){n7.call(this,"LocalScreenService");
this.B=a;this.u=NaN;p7(this);this.info("Initializing with "+i6(this.screens))},hJa=function(a){if(a.screens.length){var b=g.Pc(a.screens,function(d){return d.id}),c=g7(a.B,"/pairing/get_lounge_token_batch");
h7(a.B,c,{screen_ids:b.join(",")},(0,g.z)(a.bJ,a),(0,g.z)(a.aJ,a))}},p7=function(a){if(g.Zn("deprecate_pair_servlet_enabled"))return fJa(a,[]);
var b=PHa(VHa());b=g.Je(b,function(c){return!c.uuid});
return fJa(a,b)},r7=function(a,b){XHa(g.Pc(a.screens,NHa));
b&&WHa()},t7=function(a,b){g.O.call(this);
this.G=b;var c=g.ut("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.G(),f=0,h=e.length;f<h;++f){var l=e[f].id;d[l]=g.nb(c,l)}this.u=d;this.F=a;this.C=this.D=NaN;this.B=null;s7("Initialized with "+g.Cj(this.u))},iJa=function(a,b,c){var d=g7(a.F,"/pairing/get_screen_availability");
h7(a.F,d,{lounge_token:b.token},(0,g.z)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},u7=function(a,b){a:if(b6(b)!=b6(a.u))var c=!1;
else{c=g.Qb(b);for(var d=0,e=c.length;d<e;++d)if(!a.u[c[d]]){c=!1;break a}c=!0}c||(s7("Updated online screens: "+g.Cj(a.u)),a.u=b,a.V("screenChange"));jJa(a)},v7=function(a){isNaN(a.C)||g.mo(a.C);
a.C=g.ko((0,g.z)(a.uy,a),0<a.D&&a.D<g.A()?2E4:1E4)},s7=function(a){j7("OnlineScreenService",a)},kJa=function(a){var b={};
g.Fb(a.G(),function(c){c.token?b[c.token]=c.id:this.gd("Requesting availability of screen w/o lounge token.")});
return b},jJa=function(a){a=g.Qb(g.Jb(a.u,function(b){return b}));
g.Cb(a);a.length?g.tt("yt-remote-online-screen-ids",a.join(","),60):g.vt("yt-remote-online-screen-ids")},w7=function(a){n7.call(this,"ScreenService");
this.F=a;this.u=this.B=null;this.C=[];this.D={};lJa(this)},nJa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.dg();if(h=(c?l6(h,c):null)||l6(h,b)){h.uuid=b;var l=x7(a,h);iJa(a.u,l,function(m){e(m?l:null)})}else c?mJa(a,c,(0,g.z)(function(m){var n=x7(this,new f6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));iJa(this.u,n,function(p){e(p?n:null)})},a),f):e(null)},oJa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},mJa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={fc:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){var l=h&&h.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Up(g7(a.F,"/pairing/get_lounge_token_batch"),e)},pJa=function(a){a.screens=a.B.dg();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+i6(a.screens))},lJa=function(a){y7(a);
a.B=new q7(a.F);a.B.subscribe("screenChange",(0,g.z)(a.iJ,a));pJa(a);a.C=PHa(g.ut("yt-remote-automatic-screen-cache")||[]);y7(a);a.info("Initializing automatic screens: "+i6(a.C));a.u=new t7(a.F,(0,g.z)(a.dg,a,!0));a.u.subscribe("screenChange",(0,g.z)(function(){this.V("onlineScreenChange")},a))},x7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=l6(a.C,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.C.push(b),g.tt("yt-remote-automatic-screen-cache",g.Pc(a.C,NHa)));y7(a);a.D[b.uuid]=b.id;g.tt("yt-remote-device-id-map",a.D,31536E3);return b},y7=function(a){a.D=g.ut("yt-remote-device-id-map")||{}},z7=function(a,b,c){g.O.call(this);
this.Y=c;this.P=a;this.u=b;this.K=null},A7=function(a,b){j7(a.Y,b)},B7=function(a,b){z7.call(this,a,b,"CastSession");
this.B=null;this.C=0;this.F=(0,g.z)(this.vR,this);this.D=(0,g.z)(this.JP,this);this.C=g.ko((0,g.z)(function(){qJa(this,null)},this),12E4)},rJa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Cj(void 0));
var b={type:"getMdxSessionStatus"};a.B?a.B.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Oa,(0,g.z)(function(){A7(this,"Failed to send message: getMdxSessionStatus.")},a)):A7(a,"Sending yt message without session: "+g.Cj(b))},qJa=function(a,b){g.mo(a.C);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.getScreen()||a.getScreen().id!=b){var c=(0,g.z)(a.Rt,a),d=(0,g.z)(a.lg,a);a.GB(b,c,d,5)}}else a.lg(Error("Waiting for session status timed out."))},C7=function(a,b,c){z7.call(this,a,b,"DialSession");
this.C=this.G=null;this.N="";this.ba=c;this.W=null;this.F=g.Oa;this.D=NaN;this.X=(0,g.z)(this.yR,this);this.B=g.Oa},sJa=function(a){a.B=a.P.TG(a.N,a.u.label,a.u.friendlyName,(0,g.z)(function(b){this.B=g.Oa;
this.Rt(b)},a),(0,g.z)(function(b){this.B=g.Oa;
this.lg(b)},a))},tJa=function(a){var b={};
b.pairingCode=a.N;b.theme=a.ba;ZHa()&&(b.env_useStageMdx=1);return g.Gd(b)},D7=function(a,b){z7.call(this,a,b,"ManualSession");
this.B=g.ko((0,g.z)(this.ln,this,null),150)},E7=function(a,b,c,d){g.O.call(this);
this.B=a;this.K=b||"233637DE";this.G=c||"cl";this.P=d||!1;this.u=null;this.F=!1;this.C=[];this.D=(0,g.z)(this.BO,this)},uJa=function(a,b){return b?g.jb(a.C,function(c){return g6(b,c.label)},a):null},F7=function(a){j7("Controller",a)},YIa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G7=function(a){return a.F||!!a.C.length||!!a.u},H7=function(a,b,c){b!=a.u&&(g.ag(a.u),(a.u=b)?(c?a.V("yt-remote-cast2-receiver-resumed",b.u):a.V("yt-remote-cast2-receiver-selected",
b.u),b.subscribe("sessionScreen",(0,g.z)(a.HE,a,b)),b.getScreen()?a.V("yt-remote-cast2-session-change",b.getScreen()):c&&a.u.ln(null)):a.V("yt-remote-cast2-session-change",null))},vJa=function(a){var b=a.B.SG(),c=a.u&&a.u.u;
a=g.Pc(b,function(d){c&&g6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=uJa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},BJa=function(a,b,c,d,e,f,h,l){l?I7("Cannot initialize because disabled by Mdx config."):wJa()?xJa(b,e,f,h)&&(J7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?yJa(a,c):(window.__onGCastApiAvailable=function(m,n){m?yJa(a,c):(K7("Failed to load cast API: "+n),L7(!1),J7(!1),g.vt("yt-remote-cast-available"),g.vt("yt-remote-cast-receiver"),
zJa(),c(!1))},d?g.wo("https://web.archive.org/web/20201201000552/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?fIa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?t6():(eIa(),s6(AJa.map(cIa))))):I7("Cannot initialize because not running Chrome")},zJa=function(){I7("dispose");
var a=M7();a&&a.dispose();g.Ja("yt.mdx.remote.cloudview.instance_",null,void 0);CJa(!1);g.so(N7);N7.length=0},O7=function(){return!!g.ut("yt-remote-cast-installed")},DJa=function(){var a=g.ut("yt-remote-cast-receiver");
return a?a.friendlyName:null},EJa=function(){I7("clearCurrentReceiver");
g.vt("yt-remote-cast-receiver")},FJa=function(){return O7()?M7()?M7().getCastSession():(K7("getCastSelector: Cast is not initialized."),null):(K7("getCastSelector: Cast API is not installed!"),null)},Q7=function(){O7()?M7()?P7()?(I7("Requesting cast selector."),M7().requestSession()):(I7("Wait for cast API to be ready to request the session."),N7.push(g.ro("yt-remote-cast2-api-ready",Q7))):K7("requestCastSelector: Cast is not initialized."):K7("requestCastSelector: Cast API is not installed!")},R7=
function(a,b){P7()?M7().setConnectedScreenStatus(a,b):K7("setConnectedScreenStatus called before ready.")},wJa=function(){var a=0<=g.Vc.search(/ (CrMo|Chrome|CriOS)\//);
return g.DB||a},GJa=function(a,b){M7().init(a,b)},xJa=function(a,b,c,d){var e=!1;
M7()||(a=new E7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.tt("yt-remote-cast-available",f);d6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){I7("onReceiverSelected: "+f.friendlyName);
g.tt("yt-remote-cast-receiver",f);d6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){I7("onReceiverResumed: "+f.friendlyName);
g.tt("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){I7("onSessionChange: "+h6(f));
f||g.vt("yt-remote-cast-receiver");d6("yt-remote-cast2-session-change",f)}),g.Ja("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
I7("cloudview.createSingleton_: "+e);return e},M7=function(){return g.Na("yt.mdx.remote.cloudview.instance_")},yJa=function(a,b){L7(!0);
J7(!1);GJa(a,function(c){c?(CJa(!0),g.to("yt-remote-cast2-api-ready")):(K7("Failed to initialize cast API."),L7(!1),g.vt("yt-remote-cast-available"),g.vt("yt-remote-cast-receiver"),zJa());b(c)})},I7=function(a){j7("cloudview",a)},K7=function(a){j7("cloudview",a)},L7=function(a){I7("setCastInstalled_ "+a);
g.tt("yt-remote-cast-installed",a)},P7=function(){return!!g.Na("yt.mdx.remote.cloudview.apiReady_")},CJa=function(a){I7("setApiReady_ "+a);
g.Ja("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J7=function(a){g.Ja("yt.mdx.remote.cloudview.initializing_",a,void 0)},S7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.G=this.K=0;this.u=null;this.hasNext=this.li=!1;this.N=this.P=this.B=this.F=0;this.D=NaN;this.C=!1;this.reset(a)},T7=function(a){a.audioTrackId=null;
a.u=null;a.playerState=-1;a.li=!1;a.hasNext=!1;a.K=0;a.G=g.A();a.F=0;a.B=0;a.P=0;a.N=0;a.D=NaN;a.C=!1},U7=function(a){return a.Kb()?(g.A()-a.G)/1E3:0},V7=function(a,b){a.K=b;
a.G=g.A()},W7=function(a){switch(a.playerState){case 1:case 1081:return(g.A()-a.G)/1E3+a.K;
case -1E3:return 0}return a.K},X7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T7(a)},Y7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.$b(a.u);b.hasPrevious=a.li;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.G;b.seekableStart=a.F;b.seekableEnd=a.B;b.duration=a.P;b.loadedTime=a.N;b.liveIngestionTime=a.D;return b},$7=function(a,b){g.O.call(this);
this.Ha=0;this.C=a;this.F=[];this.D=new TIa;this.B=this.u=null;this.P=(0,g.z)(this.PM,this);this.G=(0,g.z)(this.Pp,this);this.K=(0,g.z)(this.OM,this);this.N=(0,g.z)(this.WM,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.xz,this),HJa(this))):c=3;0!=c&&(b?this.xz(c):g.ko((0,g.z)(function(){this.xz(c)},this),0));
var d=FJa();d&&Z7(this,d);this.subscribe("yt-remote-cast2-session-change",this.N)},a8=function(a){return new S7(a.C.getPlayerContextData())},HJa=function(a){g.Fb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.F.push(this.C.subscribe(b,g.Va(this.xO,b),this))},a)},IJa=function(a){g.Fb(a.F,function(b){this.C.unsubscribeByKey(b)},a);
a.F.length=0},b8=function(a){return 1==a.getState()},c8=function(a,b){var c=a.D;
50>c.u.length+c.B.length&&a.D.B.push(b)},e8=function(a,b,c){var d=a8(a);
V7(d,c);-1E3!=d.playerState&&(d.playerState=b);d8(a,d)},f8=function(a,b,c){a.C.sendMessage(b,c)},d8=function(a,b){IJa(a);
a.C.setPlayerContextData(Y7(b));HJa(a)},Z7=function(a,b){a.B&&(a.B.removeUpdateListener(a.P),a.B.removeMediaListener(a.G),a.Pp(null));
a.B=b;a.B&&(j7("CP","Setting cast session: "+a.B.sessionId),a.B.addUpdateListener(a.P),a.B.addMediaListener(a.G),a.B.media.length&&a.Pp(a.B.media[0]))},JJa=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=a8(a);b.contentId!=d.videoId&&j7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V7(d,a.u.getEstimatedTime());d8(a,d)}else j7("CP","No cast media video. Ignoring state update.")},g8=function(a,b,c){return(0,g.z)(function(d){this.gd("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.gd("Retrying "+b+" using MDx browser channel."),f8(this,b,c))},a)},h8=function(a,b,c){g.O.call(this);
this.F=NaN;this.X=!1;this.P=this.K=this.N=this.W=NaN;this.Y=[];this.D=this.G=this.C=this.Eb=this.u=null;this.ea=a;this.Y.push(g.Ho(window,"beforeunload",(0,g.z)(this.UI,this)));this.B=[];this.Eb=new S7;this.ba=b.id;this.u=KJa(this,c);this.u.subscribe("handlerOpened",this.TM,this);this.u.subscribe("handlerClosed",this.QM,this);this.u.subscribe("handlerError",this.RM,this);this.u.subscribe("handlerMessage",this.SM,this);XIa(this.u,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Eb.videoId;
g.wt()&&g.tt("yt-remote-session-video-id",d)},this)},i8=function(a){j7("conn",a)},KJa=function(a,b){return new c7(g7(a.ea,"/bc"),b,!1,function(){return a.OG()})},j8=function(a,b){a.V("proxyStateChange",b)},LJa=function(a){a.F=g.ko((0,g.z)(function(){i8("Connecting timeout");
this.Qm(1)},a),2E4)},k8=function(a){g.mo(a.F);
a.F=NaN},l8=function(a){g.mo(a.W);
a.W=NaN},MJa=function(a){m8(a);
a.N=g.ko((0,g.z)(function(){n8(this,"getNowPlaying")},a),2E4)},m8=function(a){g.mo(a.N);
a.N=NaN},OJa=function(a,b){b&&(k8(a),l8(a));
var c=e7(a.u)&&isNaN(a.F);b==c?b&&(j8(a,1),n8(a,"getSubtitlesTrack")):b?(a.EB()&&a.Eb.reset(),j8(a,1),n8(a,"getNowPlaying"),NJa(a)):a.Qm(1)},PJa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Eb.videoId&&(g.Wb(b.params)?a.Eb.u=null:a.Eb.u=b.params,a.V("remotePlayerChange"))},QJa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Eb.listId=b.params.listId||a.Eb.listId;X7(a.Eb,c,d);a.V("remoteQueueChange")},SJa=function(a,b){b.params=b.params||{};
QJa(a,b);RJa(a,b);a.V("autoplayDismissed")},RJa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V7(a.Eb,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Eb.playerState&&(c=-1E3);a.Eb.playerState=c;c=Number(b.params.loadedTime);a.Eb.N=isNaN(c)?0:c;c=Number(b.params.duration);a.Eb.P=isNaN(c)?0:c;c=a.Eb;var d=Number(b.params.liveIngestionTime);c.D=d;c.C=isNaN(d)?!1:!0;c=a.Eb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.F=isNaN(d)?0:d;c.B=isNaN(e)?0:e;1==a.Eb.playerState?MJa(a):m8(a);a.V("remotePlayerChange")},TJa=function(a,b){if(-1E3!=
a.Eb.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Eb.playerState=c;c=parseInt(b.params.currentTime,10);V7(a.Eb,isNaN(c)?0:c);a.V("remotePlayerChange")}},UJa=function(a,b){var c="true"==b.params.muted;
a.Eb.volume=parseInt(b.params.volume,10);a.Eb.muted=c;a.V("remotePlayerChange")},VJa=function(a,b){a.G=b.params.videoId;
a.V("nowAutoplaying",parseInt(b.params.timeout,10))},WJa=function(a,b){var c="true"==b.params.hasNext;
a.Eb.li="true"==b.params.hasPrevious;a.Eb.hasNext=c;a.V("previousNextChange")},NJa=function(a){g.mo(a.P);
a.P=g.ko((0,g.z)(a.Qm,a,1),864E5)},n8=function(a,b,c){c?i8("Sending: action="+b+", params="+g.Cj(c)):i8("Sending: action="+b);
a.u.sendMessage(b,c)},o8=function(a){n7.call(this,"ScreenServiceProxy");
this.df=a;this.u=[];this.u.push(this.df.$_s("screenChange",(0,g.z)(this.tR,this)));this.u.push(this.df.$_s("onlineScreenChange",(0,g.z)(this.cO,this)))},aKa=function(a,b){b=g.K("MDX_CONFIG")||b;
RHa();p6();p8||(p8=new f7(b?b.loungeApiHost:void 0),ZHa()&&(p8.u="/api/loungedev"));q8||(q8=g.Na("yt.mdx.remote.deferredProxies_")||[],g.Ja("yt.mdx.remote.deferredProxies_",q8,void 0));XJa();var c=r8();if(!c){var d=new w7(p8);g.Ja("yt.mdx.remote.screenService_",d,void 0);c=r8();var e=!1,f=void 0,h=void 0,l=!1,m=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,h=b.theme,l=!!b.disableDial,m=!!b.disableCastApi);BJa(a,d,function(n){n?s8()&&R7(s8(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){d6("yt-remote-receiver-availability-change")})},
e,f,h,l,m)}b&&!g.Na("yt.mdx.remote.initialized_")&&(g.Ja("yt.mdx.remote.initialized_",!0,void 0),t8("Initializing: "+g.Cj(b)),u8.push(g.ro("yt-remote-cast2-availability-change",function(){d6("yt-remote-receiver-availability-change")})),u8.push(g.ro("yt-remote-cast2-receiver-selected",function(){v8(null);
d6("yt-remote-auto-connect","cast-selector-receiver")})),u8.push(g.ro("yt-remote-cast2-receiver-resumed",function(){d6("yt-remote-receiver-resumed","cast-selector-receiver")})),u8.push(g.ro("yt-remote-cast2-session-change",YJa)),u8.push(g.ro("yt-remote-connection-change",function(n){n?R7(s8(),"YouTube TV"):w8()||(R7(null,null),EJa())})),e=x8(),b.isAuto&&(e.id+="#dial"),g.Zn("desktop_enable_autoplay")&&(e.capabilities=["atp"]),e.name=b.device,e.app=b.app,(h=b.theme)&&(e.theme=h),t8(" -- with channel params: "+
g.Cj(e)),ZJa(e),c.start(),s8()||$Ja())},cKa=function(){var a=bKa();
O7()&&g.ut("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},bKa=function(){var a=r8().df.$_gos();
var b=y8();b&&z8()&&(k6(a,b)||a.push(b));return QHa(a)},A8=function(){var a=dKa();
!a&&O7()&&DJa()&&(a={key:"cast-selector-receiver",name:DJa()});return a},dKa=function(){var a=bKa(),b=y8();
b||(b=w8());return g.jb(a,function(c){return b&&g6(b,c.key)?!0:!1})},y8=function(){var a=s8();
if(!a)return null;var b=r8().dg();return l6(b,a)},YJa=function(a){t8("remote.onCastSessionChange_: "+h6(a));
if(a){var b=y8();b&&b.id==a.id?R7(b.id,"YouTube TV"):(b&&B8(),C8(a,1))}else z8()&&B8()},B8=function(){P7()?M7().stopSession():K7("stopSession called before API ready.");
var a=z8();a&&(a.disconnect(1),D8(null))},E8=function(){var a=z8();
return!!a&&3!=a.getProxyState()},t8=function(a){j7("remote",a)},r8=function(){if(!F8){var a=g.Na("yt.mdx.remote.screenService_");
F8=a?new o8(a):null}return F8},s8=function(){return g.Na("yt.mdx.remote.currentScreenId_")},eKa=function(a){g.Ja("yt.mdx.remote.currentScreenId_",a,void 0)},fKa=function(){return g.Na("yt.mdx.remote.connectData_")},v8=function(a){g.Ja("yt.mdx.remote.connectData_",a,void 0)},z8=function(){return g.Na("yt.mdx.remote.connection_")},D8=function(a){var b=z8();
v8(null);a||eKa("");g.Ja("yt.mdx.remote.connection_",a,void 0);q8&&(g.Fb(q8,function(c){c(a)}),q8.length=0);
b&&!a?d6("yt-remote-connection-change",!1):!b&&a&&d6("yt-remote-connection-change",!0)},w8=function(){var a=g.wt();
if(!a)return null;var b=r8();if(!b)return null;b=b.dg();return l6(b,a)},C8=function(a,b){s8();
y8()&&y8();if(G8)H8=a;else{eKa(a.id);var c=new h8(p8,a,x8());c.connect(b,fKa());c.subscribe("beforeDisconnect",function(d){d6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){z8()&&(z8(),D8(null))});
D8(c)}},$Ja=function(){var a=w8();
a?(t8("Resume connection to: "+h6(a)),C8(a,0)):(q6(),EJa(),t8("Skipping connecting because no session screen found."))},XJa=function(){var a=x8();
if(g.Wb(a)){a=o6();var b=g.ut("yt-remote-session-name")||"",c=g.ut("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ja("yt.mdx.remote.channelParams_",a,void 0)}},x8=function(){return g.Na("yt.mdx.remote.channelParams_")||{}},ZJa=function(a){a?(g.tt("yt-remote-session-app",a.app),g.tt("yt-remote-session-name",a.name)):(g.vt("yt-remote-session-app"),g.vt("yt-remote-session-name"));
g.Ja("yt.mdx.remote.channelParams_",a,void 0)},I8=function(a,b,c){g.B.call(this);
var d=this;this.B=a;this.J=b;this.ub=c;this.events=new g.mR(this);this.W=this.events.R(this.J,"onVolumeChange",function(e){gKa(d,e)});
this.F=!1;this.suggestion=null;this.G=new g.CL(64);this.u=new g.F(this.VF,500,this);this.C=new g.F(this.WF,1E3,this);this.P=new u6(this.XQ,0,this);this.D={};this.N=new g.F(this.zG,1E3,this);this.K=new v6(this.seekTo,1E3,this);this.X=g.Oa;g.D(this,this.events);this.events.R(b,"onCaptionsTrackListChanged",this.GN);this.events.R(b,"captionschanged",this.LM);this.events.R(b,"captionssettingschanged",this.ZF);this.events.R(b,"videoplayerreset",this.St);this.events.R(b,"mdxautoplaycancel",function(){d.ub.ZA()});
a=this.ub;a.la();a.subscribe("proxyStateChange",this.CE,this);a.subscribe("remotePlayerChange",this.Up,this);a.subscribe("remoteQueueChange",this.St,this);a.subscribe("previousNextChange",this.zE,this);a.subscribe("nowAutoplaying",this.uE,this);a.subscribe("autoplayDismissed",this.WD,this);g.D(this,this.u);g.D(this,this.C);g.D(this,this.P);g.D(this,this.N);g.D(this,this.K);this.ZF();this.St();this.Up()},gKa=function(a,b){if(J8(a)){a.ub.unsubscribe("remotePlayerChange",a.Up,a);
var c=Math.round(b.volume),d=!!b.muted,e=a8(a.ub);if(c!==e.volume||d!==e.muted)a.ub.setVolume(c,d),a.N.start();a.ub.subscribe("remotePlayerChange",a.Up,a)}},hKa=function(a){a.Ic(0);
a.u.stop();a.Rd(new g.CL(64))},K8=function(a,b){if(J8(a)&&!a.F){var c=null;
b&&(c={style:a.J.getSubtitlesUserSettings()},g.bc(c,b));a.ub.PG(a.J.getVideoData(1).videoId,c);a.D=a8(a.ub).u}},L8=function(a,b){var c=a.J.getPlaylist();
if(c){var d=c.index;var e=c.listId.toString()}c=a.J.getVideoData(1);a.ub.playVideo(c.videoId,b,d,e,c.playerParams,c.Cg,DHa(c));a.Rd(new g.CL(1))},iKa=function(a,b){if(b){var c=a.J.getOption("captions","tracklist",{dC:1});
c&&c.length?(a.J.setOption("captions","track",b),a.F=!1):(a.J.loadModule("captions"),a.F=!0)}else a.J.setOption("captions","track",{})},J8=function(a){return a8(a.ub).videoId===a.J.getVideoData(1).videoId},M8=function(){g.V.call(this,{I:"div",
L:"ytp-mdx-manual-pairing-popup-dialog",U:{role:"dialog"},S:[{I:"div",L:"ytp-mdx-manual-pairing-popup-dialog-inner-content",S:[{I:"div",L:"ytp-mdx-manual-pairing-popup-title",Z:"Connecting to your TV on web using a code will be going away soon"},{I:"div",L:"ytp-mdx-manual-pairing-popup-buttons",S:[{I:"button",ha:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],Z:"Learn more"},{I:"button",ha:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],Z:"OK"}]}]}]});this.u=new g.fO(this,250);this.learnMoreButton=
this.ga("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.ga("ytp-mdx-manual-pairing-popup-ok");g.D(this,this.u);this.R(this.learnMoreButton,"click",this.B);this.R(this.okButton,"click",this.C)},N8=function(){g.V.call(this,{I:"div",
L:"ytp-mdx-popup-dialog",U:{role:"dialog"},S:[{I:"div",L:"ytp-mdx-popup-dialog-inner-content",S:[{I:"div",L:"ytp-mdx-popup-title",Z:"You're signed out"},{I:"div",L:"ytp-mdx-popup-description",Z:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{I:"div",L:"ytp-mdx-privacy-popup-buttons",S:[{I:"button",ha:["ytp-button","ytp-mdx-privacy-popup-cancel"],Z:"Cancel"},{I:"button",ha:["ytp-button","ytp-mdx-privacy-popup-confirm"],
Z:"Confirm"}]}]}]});this.u=new g.fO(this,250);this.cancelButton=this.ga("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.ga("ytp-mdx-privacy-popup-confirm");g.D(this,this.u);this.R(this.cancelButton,"click",this.B);this.R(this.confirmButton,"click",this.C)},O8=function(a){g.V.call(this,{I:"div",
L:"ytp-remote",S:[{I:"div",L:"ytp-remote-display-status",S:[{I:"div",L:"ytp-remote-display-status-icon",S:[g.LN()]},{I:"div",L:"ytp-remote-display-status-text",Z:"{{statustext}}"}]}]});this.api=a;this.u=new g.fO(this,250);g.D(this,this.u);this.R(a,"presentingplayerstatechange",this.B);jKa(this,g.wJ(a))},jKa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
c=g.U(b,128)?g.vK("Error on $RECEIVER_NAME",c):b.Kb()||g.U(b,4)?g.vK("Playing on $RECEIVER_NAME",c):g.vK("Connected to $RECEIVER_NAME",c);a.xa("statustext",c);a.u.show()}else a.u.hide()},P8=function(a,b){g.ZZ.call(this,"Play on",0,a,b);
this.J=a;this.Kk={};this.R(a,"onMdxReceiversChange",this.D);this.R(a,"presentingplayerstatechange",this.D);this.D()},Q8=function(a){g.AS.call(this,a);
this.oh={key:j6(),name:"This computer"};this.Wh=null;this.subscriptions=[];this.fy=this.ub=null;this.Kk=[this.oh];this.dk=this.oh;this.Dc=new g.CL(64);this.zC=0;this.re=-1;this.nn=null;this.Wp=this.Xs=!1;this.jm=this.Ln=null;if(!g.VC(this.player.T())){a=this.player;var b=g.TW(a);b&&(b=b.Fl())&&(b=new P8(a,b),g.D(this,b));b=new O8(a);g.D(this,b);g.uP(a,b.element,4);this.Ln=new N8;g.D(this,this.Ln);g.uP(a,this.Ln.element,4);g.Q(this.player.T().experiments,"pair_servlet_deprecation_warning_enabled")&&
!g.Q(this.player.T().experiments,"deprecate_pair_servlet_enabled")&&(this.nn=new M8,g.D(this,this.nn),g.uP(a,this.nn.element,4));this.Wp=!!w8();this.Xs=!!g.ut("yt-remote-manual-pairing-warning-shown")}},R8=function(a){a.jm&&(a.player.removeEventListener("presentingplayerstatechange",a.jm),a.jm=null)},kKa=function(a,b,c){a.Dc=c;
a.player.V("presentingplayerstatechange",new g.GJ(c,b))},lKa=function(a,b,c){var d=!1;
1===b?d=!a.Wp:2===b&&(d=!a.Xs);d&&g.IJ(c,8)&&(a.player.pauseVideo(),R8(a))},S8=function(a,b){if(b.key!==a.dk.key)if(b.key===a.oh.key)B8();
else{if(a.nn&&!a.Xs&&b!==a.oh&&"cast-selector-receiver"!==b.key&&g.eD(a.player.T()))mKa(a);else{var c;(c=!g.Q(a.player.T().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.K("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.K("SESSION_INDEX")&&!g.K("LOGGED_IN")))||a.Wp||!a.Ln);(c?0:g.eD(a.player.T())||g.iD(a.player.T()))&&nKa(a)}a.dk=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&
g.Q(a.player.T().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.getLength();l++)h[l]=f.Ka(l).videoId}else h=[e];f=a.player.getCurrentTime(1);d={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Cg,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=DHa(c))&&(d.locationInfo=c);c=d}t8("Connecting to: "+g.Cj(b));"cast-selector-receiver"==b.key?(v8(c||null),c=
c||null,P7()?M7().setLaunchParams(c):K7("setLaunchParams called before ready.")):!c&&E8()&&s8()==b.key?d6("yt-remote-connection-change",!0):(B8(),v8(c||null),c=r8().dg(),(c=l6(c,b.key))&&C8(c,1))}},nKa=function(a){g.wJ(a.player).Kb()?a.player.pauseVideo():(a.jm=function(b){lKa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.jm));
a.Ln&&a.Ln.uc();z8()||(G8=!0)},mKa=function(a){g.wJ(a.player).Kb()?a.player.pauseVideo():(a.jm=function(b){lKa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.jm));
a.nn&&a.nn.uc();z8()||(G8=!0)},pIa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},K6={"'":"\\'"},oKa={},MHa={pS:"atp",x1:"ska",s0:"que",BZ:"mus",w1:"sus",VV:"dsp",J0:"seq",gZ:"mic",TU:"dpa"},r6,n6="",dIa=$Ha("loadCastFramework")||$Ha("loadCastApplicationFramework"),AJa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Xa(u6,g.B);g.k=u6.prototype;g.k.RI=function(a){this.D=arguments;this.u=!1;this.Va?this.C=g.A()+this.ff:this.Va=g.ym(this.F,this.ff)};
g.k.stop=function(){this.Va&&(g.v.clearTimeout(this.Va),this.Va=null);this.C=null;this.u=!1;this.D=[]};
g.k.pause=function(){++this.B};
g.k.resume=function(){this.B&&(--this.B,!this.B&&this.u&&(this.u=!1,this.G.apply(null,this.D)))};
g.k.aa=function(){this.stop();u6.qd.aa.call(this)};
g.k.SI=function(){this.C?(this.Va=g.ym(this.F,this.C-g.A()),this.C=null):(this.Va=null,this.B?this.u=!0:(this.u=!1,this.G.apply(null,this.D)))};g.u(v6,g.B);g.k=v6.prototype;g.k.QC=function(a){this.C=arguments;this.Va||this.B?this.u=!0:w6(this)};
g.k.stop=function(){this.Va&&(g.v.clearTimeout(this.Va),this.Va=null,this.u=!1,this.C=null)};
g.k.pause=function(){this.B++};
g.k.resume=function(){this.B--;this.B||!this.u||this.Va||(this.u=!1,w6(this))};
g.k.aa=function(){g.B.prototype.aa.call(this);this.stop()};y6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
y6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};var A6=new g.Nl;g.u(gIa,g.ql);C6.prototype.u=null;C6.prototype.getOptions=function(){var a;(a=this.u)||(a={},iIa(this)&&(a[0]=!0,a[1]=!0),a=this.u=a);return a};var T8;g.Xa(hIa,C6);T8=new hIa;g.k=D6.prototype;g.k.Il=null;g.k.Hh=!1;g.k.jo=null;g.k.uz=null;g.k.Qn=null;g.k.Zn=null;g.k.Wj=null;g.k.Lk=null;g.k.km=null;g.k.ge=null;g.k.Kq=0;g.k.Mh=null;g.k.Ju=null;g.k.mk=null;g.k.gp=-1;g.k.MF=!0;g.k.ol=!1;g.k.Fw=0;g.k.cu=null;var nIa={},G6={};g.k=D6.prototype;g.k.setTimeout=function(a){this.F=a};
g.k.bQ=function(a){a=a.target;var b=this.cu;b&&3==P6(a)?b.QC():this.LG(a)};
g.k.LG=function(a){try{if(a==this.ge)a:{var b=P6(this.ge),c=this.ge.G,d=this.ge.getStatus();if(g.xe&&!g.Zd(10)||g.ze&&!g.Yd("420+")){if(4>b)break a}else if(3>b||3==b&&!g.og&&!R6(this.ge))break a;this.ol||4!=b||7==c||(8==c||0>=d?this.u.yh(3):this.u.yh(2));L6(this);var e=this.ge.getStatus();this.gp=e;var f=R6(this.ge);(this.Hh=200==e)?(4==b&&I6(this),this.G?(oIa(this,b,f),g.og&&this.Hh&&3==b&&(this.D.wa(this.C,"tick",this.WP),this.C.start())):H6(this,f),this.Hh&&!this.ol&&(4==b?this.u.rs(this):(this.Hh=
!1,F6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.mk=3,B6(13)):(this.mk=0,B6(14)),I6(this),J6(this))}}catch(h){this.ge&&R6(this.ge)}finally{}};
g.k.WP=function(){var a=P6(this.ge),b=R6(this.ge);this.Kq<b.length&&(L6(this),oIa(this,a,b),this.Hh&&4!=a&&F6(this))};
g.k.qP=function(a){z6((0,g.z)(this.pP,this,a),0)};
g.k.pP=function(a){this.ol||(L6(this),H6(this,a),F6(this))};
g.k.LE=function(a){z6((0,g.z)(this.oP,this,a),0)};
g.k.oP=function(a){this.ol||(I6(this),this.Hh=a,this.u.rs(this),this.u.yh(4))};
g.k.cancel=function(){this.ol=!0;I6(this)};
g.k.CP=function(){this.jo=null;var a=g.A();0<=a-this.uz?(2!=this.Zn&&this.u.yh(3),I6(this),this.mk=2,B6(18),J6(this)):rIa(this,this.uz-a)};
g.k.getLastError=function(){return this.mk};g.Xa(N6,g.Nl);var yIa=/^https?$/i,pKa=["POST","PUT"];g.k=N6.prototype;
g.k.send=function(a,b,c,d){if(this.u)throw Error("[goog.net.XhrIo] Object is active with another request="+this.N+"; newUri="+a);b=b?b.toUpperCase():"GET";this.N=a;this.D="";this.G=0;this.ra=b;this.ea=!1;this.C=!0;this.u=this.ba?jIa(this.ba):jIa(T8);this.Y=this.ba?this.ba.getOptions():T8.getOptions();this.u.onreadystatechange=(0,g.z)(this.AE,this);try{c6(Q6(this,"Opening Xhr")),this.ia=!0,this.u.open(b,String(a),!0),this.ia=!1}catch(f){c6(Q6(this,"Error opening Xhr: "+f.message));xIa(this,f);return}a=
c||"";var e=this.headers.clone();d&&IHa(d,function(f,h){e.set(h,f)});
d=g.jb(e.Ag(),vIa);c=g.v.FormData&&a instanceof g.v.FormData;!g.nb(pKa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.u.setRequestHeader(h,f)},this);
this.Aa&&(this.u.responseType=this.Aa);"withCredentials"in this.u&&this.u.withCredentials!==this.da&&(this.u.withCredentials=this.da);try{AIa(this),0<this.K&&(this.X=uIa(this.u),c6(Q6(this,"Will abort after "+this.K+"ms if incomplete, xhr2 "+this.X)),this.X?(this.u.timeout=this.K,this.u.ontimeout=(0,g.z)(this.PB,this)):this.W=g.ym(this.PB,this.K,this)),c6(Q6(this,"Sending request")),this.P=!0,this.u.send(a),this.P=!1}catch(f){c6(Q6(this,"Send error: "+f.message)),xIa(this,f)}};
g.k.PB=function(){"undefined"!=typeof g.p1&&this.u&&(this.D="Timed out after "+this.K+"ms, aborting",this.G=8,Q6(this,this.D),this.dispatchEvent("timeout"),this.abort(8))};
g.k.abort=function(a){this.u&&this.C&&(Q6(this,"Aborting"),this.C=!1,this.F=!0,this.u.abort(),this.F=!1,this.G=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),O6(this))};
g.k.aa=function(){this.u&&(this.C&&(this.C=!1,this.F=!0,this.u.abort(),this.F=!1),O6(this,!0));N6.qd.aa.call(this)};
g.k.AE=function(){this.la()||(this.ia||this.P||this.F?zIa(this):this.AO())};
g.k.AO=function(){zIa(this)};
g.k.isActive=function(){return!!this.u};
g.k.getStatus=function(){try{return 2<P6(this)?this.u.status:-1}catch(a){return-1}};
g.k.getLastError=function(){return"string"===typeof this.D?this.D:String(this.D)};g.k=BIa.prototype;g.k.Dw=null;g.k.Uf=null;g.k.du=!1;g.k.OB=null;g.k.Kr=null;g.k.nx=null;g.k.Ew=null;g.k.Ha=null;g.k.mj=-1;g.k.fp=null;g.k.zo=null;g.k.connect=function(a){this.Ew=a;a=S6(this.u,null,this.Ew);B6(3);this.OB=g.A();var b=this.u.K;null!=b?(this.fp=b[0],(this.zo=b[1])?(this.Ha=1,CIa(this)):(this.Ha=2,U6(this))):(a6(a,"MODE","init"),this.Uf=new D6(this,void 0,void 0,void 0),this.Uf.Il=this.Dw,E6(this.Uf,a,!1,null,!0),this.Ha=0)};
g.k.PH=function(a){if(a)this.Ha=2,U6(this);else{B6(4);var b=this.u;b.ji=b.bk.mj;a7(b,9)}a&&this.yh(2)};
g.k.Nv=function(a){return this.u.Nv(a)};
g.k.abort=function(){this.Uf&&(this.Uf.cancel(),this.Uf=null);this.mj=-1};
g.k.NB=function(){return!1};
g.k.DE=function(a,b){this.mj=a.gp;if(0==this.Ha)if(b){try{var c=this.B.parse(b)}catch(d){c=this.u;c.ji=this.mj;a7(c,2);return}this.fp=c[0];this.zo=c[1]}else c=this.u,c.ji=this.mj,a7(c,2);else if(2==this.Ha)if(this.du)B6(7),this.nx=g.A();else if("11111"==b){if(B6(6),this.du=!0,this.Kr=g.A(),c=this.Kr-this.OB,!g.xe||g.Zd(10)||500>c)this.mj=200,this.Uf.cancel(),B6(12),T6(this.u,this,!0)}else B6(8),this.Kr=this.nx=g.A(),this.du=!1};
g.k.rs=function(){this.mj=this.Uf.gp;if(this.Uf.Hh)0==this.Ha?this.zo?(this.Ha=1,CIa(this)):(this.Ha=2,U6(this)):2==this.Ha&&((!g.xe||g.Zd(10)?!this.du:200>this.nx-this.Kr)?(B6(11),T6(this.u,this,!1)):(B6(12),T6(this.u,this,!0)));else{0==this.Ha?B6(9):2==this.Ha&&B6(10);var a=this.u;this.Uf.getLastError();a.ji=this.mj;a7(a,2)}};
g.k.tq=function(){return this.u.tq()};
g.k.isActive=function(){return this.u.isActive()};
g.k.yh=function(a){this.u.yh(a)};g.k=V6.prototype;g.k.an=null;g.k.Po=null;g.k.Jf=null;g.k.Cd=null;g.k.Cw=null;g.k.Mr=null;g.k.rA=null;g.k.qs=null;g.k.Np=0;g.k.ZL=0;g.k.bf=null;g.k.fk=null;g.k.Zi=null;g.k.vl=null;g.k.bk=null;g.k.Gu=null;g.k.kn=-1;g.k.yC=-1;g.k.ji=-1;g.k.Vm=0;g.k.Gm=0;g.k.pl=8;g.Xa(FIa,g.ql);g.Xa(GIa,g.ql);g.k=V6.prototype;g.k.connect=function(a,b,c,d,e){B6(0);this.Cw=b;this.Po=c||{};d&&void 0!==e&&(this.Po.OSID=d,this.Po.OAID=e);this.F?(z6((0,g.z)(this.IA,this,a),100),KIa(this)):this.IA(a)};
g.k.IA=function(a){this.bk=new BIa(this);this.bk.Dw=this.an;this.bk.B=this.D;this.bk.connect(a)};
g.k.NB=function(){return 0==this.Ha};
g.k.getState=function(){return this.Ha};
g.k.KE=function(a){this.fk=null;OIa(this,a)};
g.k.JE=function(){this.Zi=null;this.Cd=new D6(this,this.B,"rpc",this.G);this.Cd.Il=this.an;this.Cd.Fw=0;var a=this.rA.clone();Z5(a,"RID","rpc");Z5(a,"SID",this.B);Z5(a,"CI",this.Gu?"0":"1");Z5(a,"AID",this.kn);W6(this,a);if(!g.xe||g.Zd(10))Z5(a,"TYPE","xmlhttp"),E6(this.Cd,a,!0,this.qs,!1);else{Z5(a,"TYPE","html");var b=this.Cd,c=!!this.qs;b.Zn=3;b.Wj=$5(a.clone());qIa(b,c)}};
g.k.DE=function(a,b){if(0!=this.Ha&&(this.Cd==a||this.Jf==a))if(this.ji=a.gp,this.Jf==a&&3==this.Ha)if(7<this.pl){try{var c=this.D.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Zi){if(this.Cd)if(this.Cd.Qn+3E3<this.Jf.Qn)Y6(this),this.Cd.cancel(),this.Cd=null;else break a;$6(this);B6(19)}}else this.yC=c[1],0<this.yC-this.kn&&37500>c[2]&&this.Gu&&0==this.Gm&&!this.vl&&(this.vl=z6((0,g.z)(this.FM,this),6E3));else a7(this,11)}else b!=oKa.HU.u&&a7(this,11);else if(this.Cd==
a&&Y6(this),!g.rc(b)){c=this.D.parse(b);for(var d=0;d<c.length;d++){var e=c[d];this.kn=e[0];e=e[1];2==this.Ha?"c"==e[0]?(this.B=e[1],this.qs=e[2],e=e[3],null!=e?this.pl=e:this.pl=6,this.Ha=3,this.bf&&this.bf.EA(),this.rA=S6(this,this.tq()?this.qs:null,this.Cw),PIa(this)):"stop"==e[0]&&a7(this,7):3==this.Ha&&("stop"==e[0]?a7(this,7):"noop"!=e[0]&&this.bf&&this.bf.DA(e),this.Gm=0)}}};
g.k.FM=function(){null!=this.vl&&(this.vl=null,this.Cd.cancel(),this.Cd=null,$6(this),B6(20))};
g.k.rs=function(a){if(this.Cd==a){Y6(this);this.Cd=null;var b=2}else if(this.Jf==a)this.Jf=null,b=1;else return;this.ji=a.gp;if(0!=this.Ha)if(a.Hh)1==b?(b=A6,b.dispatchEvent(new FIa(b,a.km?a.km.length:0,g.A()-a.Qn,this.Vm)),X6(this),this.C.length=0):PIa(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.ji)){if(d=1==b)this.Jf||this.fk||1==this.Ha||2<=this.Vm?d=!1:(this.fk=z6((0,g.z)(this.KE,this,a),QIa(this,this.Vm)),this.Vm++,d=!0);d=!(d||2==b&&$6(this))}if(d)switch(c){case 1:a7(this,
5);break;case 4:a7(this,10);break;case 3:a7(this,6);break;case 7:a7(this,12);break;default:a7(this,2)}}};
g.k.oI=function(a){if(!g.nb(arguments,this.Ha))throw Error("Unexpected channel state: "+this.Ha);};
g.k.KQ=function(a){a?B6(2):(B6(1),RIa(this,8))};
g.k.Nv=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new N6;a.da=!1;return a};
g.k.isActive=function(){return!!this.bf&&this.bf.isActive(this)};
g.k.yh=function(a){var b=A6;b.dispatchEvent(new GIa(b,a))};
g.k.tq=function(){return!(!g.xe||g.Zd(10))};
g.k=SIa.prototype;g.k.EA=function(){};
g.k.DA=function(){};
g.k.CA=function(){};
g.k.Bv=function(){};
g.k.pB=function(){return{}};
g.k.isActive=function(){return!0};g.k=TIa.prototype;g.k.isEmpty=function(){return g.ob(this.u)&&g.ob(this.B)};
g.k.clear=function(){this.u=[];this.B=[]};
g.k.contains=function(a){return g.nb(this.u,a)||g.nb(this.B,a)};
g.k.remove=function(a){var b=this.u;var c=(0,g.RBa)(b,a);0<=c?(g.qb(b,c),b=!0):b=!1;return b||g.rb(this.B,a)};
g.k.tf=function(){for(var a=[],b=this.u.length-1;0<=b;--b)a.push(this.u[b]);var c=this.B.length;for(b=0;b<c;++b)a.push(this.B[b]);return a};g.Xa(b7,g.B);g.k=b7.prototype;g.k.jP=function(){this.ff=Math.min(3E5,2*this.ff);this.C();this.B&&this.start()};
g.k.start=function(){var a=this.ff+15E3*Math.random();this.u.Hb(a);this.B=g.A()+a};
g.k.stop=function(){this.u.stop();this.B=0};
g.k.isActive=function(){return this.u.isActive()};
g.k.reset=function(){this.u.stop();this.ff=5E3};g.Xa(c7,SIa);g.k=c7.prototype;g.k.subscribe=function(a,b,c){return this.C.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.C.unsubscribe(a,b,c)};
g.k.Ek=function(a){return this.C.Jl(a)};
g.k.V=function(a,b){return this.C.V.apply(this.C,arguments)};
g.k.dispose=function(){this.Td||(this.Td=!0,g.ag(this.C),WIa(this),g.ag(this.B),this.B=null,this.X=function(){return""})};
g.k.la=function(){return this.Td};
g.k.connect=function(a,b,c){if(!this.u||2!=this.u.getState()){this.N="";this.B.stop();this.F=a||null;this.D=b||0;a=this.W+"/test";b=this.W+"/bind";var d=new V6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Y),e=this.u;e&&(e.bf=null);d.bf=this;this.u=d;d7(this);e?(3!=e.getState()&&0==MIa(e)||e.getState(),this.u.connect(a,b,this.G,e.B,e.kn)):c?this.u.connect(a,b,this.G,c.sessionId,c.arrayId):this.u.connect(a,b,this.G)}};
g.k.sendMessage=function(a,b){var c={_sc:a};b&&g.bc(c,b);this.B.isActive()||2==(this.u?this.u.getState():0)?this.K.push(c):e7(this)&&(d7(this),LIa(this.u,c))};
g.k.EA=function(){this.B.reset();this.F=null;this.D=0;if(this.K.length){var a=this.K;this.K=[];for(var b=0,c=a.length;b<c;++b)LIa(this.u,a[b])}this.V("handlerOpened")};
g.k.CA=function(a){var b=2==a&&401==this.u.ji;4==a||b||this.B.start();this.V("handlerError",a)};
g.k.Bv=function(a){if(!this.B.isActive())this.V("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.K.push(d)}};
g.k.pB=function(){var a={v:2};this.N&&(a.gsessionid=this.N);0!=this.D&&(a.ui=""+this.D);0!=this.P&&(a.ui=""+this.P);this.F&&g.bc(a,this.F);return a};
g.k.DA=function(a){"S"==a[0]?this.N=a[1]:"gracefulReconnect"==a[0]?(this.B.start(),JIa(this.u)):this.V("handlerMessage",new UIa(a[0],a[1]))};
g.k.nQ=function(){this.B.isActive();0==MIa(this.u)&&this.connect(this.F,this.D)};f7.prototype.D=function(a,b,c,d){b?a(d):a({text:c.responseText})};
f7.prototype.C=function(a,b){a(Error("Request error: "+b.status))};
f7.prototype.F=function(a){a(Error("request timed out"))};var dJa=g.A(),i7=null,l7=Array(50),k7=-1,m7=!1;g.Xa(n7,g.O);n7.prototype.dg=function(){return this.screens};
n7.prototype.contains=function(a){return!!k6(this.screens,a)};
n7.prototype.get=function(a){return a?l6(this.screens,a):null};
n7.prototype.info=function(a){j7(this.G,a)};g.u(o7,g.O);g.k=o7.prototype;g.k.start=function(){!this.u&&isNaN(this.Va)&&this.QG()};
g.k.stop=function(){this.u&&(this.u.abort(),this.u=null);isNaN(this.Va)||(g.mo(this.Va),this.Va=NaN)};
g.k.aa=function(){this.stop();g.O.prototype.aa.call(this)};
g.k.QG=function(){this.Va=NaN;this.u=g.Up(g7(this.G,"/pairing/get_screen"),{method:"POST",fc:{pairing_code:this.F},timeout:5E3,onSuccess:(0,g.z)(this.rR,this),onError:(0,g.z)(this.qR,this),ng:(0,g.z)(this.sR,this)})};
g.k.rR=function(a,b){this.u=null;var c=b.screen||{};c.dialId=this.C;c.name=this.D;this.V("pairingComplete",new f6(c))};
g.k.qR=function(a){this.u=null;a.status&&404==a.status?this.B>=qKa.length?this.V("pairingFailed",Error("DIAL polling timed out")):(a=qKa[this.B],this.Va=g.ko((0,g.z)(this.QG,this),a),this.B++):this.V("pairingFailed",Error("Server error "+a.status))};
g.k.sR=function(){this.u=null;this.V("pairingFailed",Error("Server not responding"))};
var qKa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Xa(q7,n7);g.k=q7.prototype;g.k.start=function(){p7(this)&&this.V("screenChange");!g.ut("yt-remote-lounge-token-expiration")&&hJa(this);g.mo(this.u);this.u=g.ko((0,g.z)(this.start,this),1E4)};
g.k.add=function(a,b){p7(this);eJa(this,a);r7(this,!1);this.V("screenChange");b(a);a.token||hJa(this)};
g.k.remove=function(a,b){var c=p7(this);gJa(this,a)&&(r7(this,!1),c=!0);b(a);c&&this.V("screenChange")};
g.k.Eu=function(a,b,c,d){var e=p7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,r7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.V("screenChange")};
g.k.aa=function(){g.mo(this.u);q7.qd.aa.call(this)};
g.k.bJ=function(a){p7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}r7(this,!b);b&&j7(this.G,"Missed "+b+" lounge tokens.")};
g.k.aJ=function(a){j7(this.G,"Requesting lounge tokens failed: "+a)};g.u(t7,g.O);g.k=t7.prototype;g.k.start=function(){var a=parseInt(g.ut("yt-remote-fast-check-period")||"0",10);(this.D=g.A()-144E5<a?0:a)?v7(this):(this.D=g.A()+3E5,g.tt("yt-remote-fast-check-period",this.D),this.uy())};
g.k.isEmpty=function(){return g.Wb(this.u)};
g.k.update=function(){s7("Updating availability on schedule.");var a=this.G(),b=g.Jb(this.u,function(c,d){return c&&!!l6(a,d)},this);
u7(this,b)};
g.k.aa=function(){g.mo(this.C);this.C=NaN;this.B&&(this.B.abort(),this.B=null);g.O.prototype.aa.call(this)};
g.k.uy=function(){g.mo(this.C);this.C=NaN;this.B&&this.B.abort();var a=kJa(this);if(b6(a)){var b=g7(this.F,"/pairing/get_screen_availability");this.B=h7(this.F,b,{lounge_token:g.Qb(a).join(",")},(0,g.z)(this.UO,this,a),(0,g.z)(this.TO,this))}else u7(this,{}),v7(this)};
g.k.UO=function(a,b){this.B=null;var c=g.Qb(kJa(this));if(g.Db(c,g.Qb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;u7(this,d);v7(this)}else this.gd("Changing Screen set during request."),this.uy()};
g.k.TO=function(a){this.gd("Screen availability failed: "+a);this.B=null;v7(this)};
g.k.gd=function(a){j7("OnlineScreenService",a)};g.Xa(w7,n7);g.k=w7.prototype;g.k.start=function(){this.B.start();this.u.start();this.screens.length&&(this.V("screenChange"),this.u.isEmpty()||this.V("onlineScreenChange"))};
g.k.add=function(a,b,c){this.B.add(a,b,c)};
g.k.remove=function(a,b,c){this.B.remove(a,b,c);this.u.update()};
g.k.Eu=function(a,b,c,d){this.B.contains(a)?this.B.Eu(a,b,c,d):(a="Updating name of unknown screen: "+a.name,j7(this.G,a),d(Error(a)))};
g.k.dg=function(a){return a?this.screens:g.tb(this.screens,g.Je(this.C,function(b){return!this.contains(b)},this))};
g.k.SG=function(){return g.Je(this.dg(!0),function(a){return!!this.u.u[a.id]},this)};
g.k.TG=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new o7(this.F,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(h){g.ag(f);d(x7(this,h))},this));
f.subscribe("pairingFailed",function(h){g.ag(f);e(h)});
f.start();return(0,g.z)(f.stop,f)};
g.k.uR=function(a,b,c,d){g.Up(g7(this.F,"/pairing/get_screen"),{method:"POST",fc:{pairing_code:a},timeout:5E3,onSuccess:(0,g.z)(function(e,f){var h=new f6(f.screen||{});if(!h.name||oJa(this,h.name)){a:{var l=h.name;for(var m=2,n=b(l,m);oJa(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}h.name=l}c(x7(this,h))},this),
onError:(0,g.z)(function(e){d(Error("pairing request failed: "+e.status))},this),
ng:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.k.aa=function(){g.ag(this.B);g.ag(this.u);w7.qd.aa.call(this)};
g.k.iJ=function(){pJa(this);this.V("screenChange");this.u.update()};
w7.prototype.dispose=w7.prototype.dispose;g.Xa(z7,g.O);g.k=z7.prototype;g.k.getScreen=function(){return this.K};
g.k.Rt=function(a){this.K=a;this.V("sessionScreen",this.K)};
g.k.lg=function(a){this.la()||(a&&A7(this,""+a),this.K=null,this.V("sessionScreen",null))};
g.k.info=function(a){j7(this.Y,a)};
g.k.VG=function(){return null};
g.k.Fy=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){A7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.aa=function(){this.Fy("");z7.qd.aa.call(this)};g.u(B7,z7);g.k=B7.prototype;g.k.Ey=function(a){if(this.B){if(this.B==a)return;A7(this,"Overriding cast sesison with new session object");this.B.removeUpdateListener(this.F);this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D)}this.B=a;this.B.addUpdateListener(this.F);this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.D);rJa(this)};
g.k.ln=function(a){this.info("launchWithParams no-op for Cast: "+g.Cj(a))};
g.k.stop=function(){this.B?this.B.stop((0,g.z)(function(){this.lg()},this),(0,g.z)(function(){this.lg(Error("Failed to stop receiver app."))},this)):this.lg(Error("Stopping cast device witout session."))};
g.k.Fy=function(){};
g.k.aa=function(){this.info("disposeInternal");g.mo(this.C);this.C=0;this.B&&(this.B.removeUpdateListener(this.F),this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D));this.B=null;z7.prototype.aa.call(this)};
g.k.JP=function(a,b){if(!this.la())if(b){var c=x6(b);if(g.Sa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Cj(c));switch(d){case "mdxSessionStatus":qJa(this,c.screenId);break;default:A7(this,"Unknown youtube message: "+d)}}else A7(this,"Unable to parse message.")}else A7(this,"No data in message.")};
g.k.GB=function(a,b,c,d){nJa(this.P,this.u.label,a,this.u.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(A7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.ko((0,g.z)(this.GB,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.VG=function(){return this.B};
g.k.vR=function(a){this.la()||a||(A7(this,"Cast session died."),this.lg())};g.u(C7,z7);g.k=C7.prototype;g.k.Ey=function(a){this.C=a;this.C.addUpdateListener(this.X)};
g.k.ln=function(a){this.W=a;this.F()};
g.k.stop=function(){this.B();this.B=g.Oa;g.mo(this.D);this.C?this.C.stop((0,g.z)(this.lg,this,null),(0,g.z)(this.lg,this,"Failed to stop DIAL device.")):this.lg()};
g.k.aa=function(){this.B();this.B=g.Oa;g.mo(this.D);this.C&&this.C.removeUpdateListener(this.X);this.C=null;z7.prototype.aa.call(this)};
g.k.yR=function(a){this.la()||a||(A7(this,"DIAL session died."),this.B(),this.B=g.Oa,this.lg())};
g.k.Qw=function(a){this.N=j6();if(this.W){var b=new chrome.cast.DialLaunchResponse(!0,tJa(this));a(b);sJa(this)}else this.F=(0,g.z)(function(){g.mo(this.D);this.F=g.Oa;this.D=NaN;var c=new chrome.cast.DialLaunchResponse(!0,tJa(this));a(c);sJa(this)},this),this.D=g.ko((0,g.z)(function(){this.F()},this),100)};
g.k.zJ=function(a,b,c){nJa(this.P,this.G.receiver.label,a,this.u.friendlyName,(0,g.z)(function(d){d&&d.token?(this.Rt(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Qw(b,c)},this),(0,g.z)(function(d){A7(this,"Failed to get DIAL screen: "+d);
this.Qw(b,c)},this))};g.u(D7,z7);D7.prototype.stop=function(){this.lg()};
D7.prototype.Ey=function(){};
D7.prototype.ln=function(){g.mo(this.B);this.B=NaN;var a=l6(this.P.dg(),this.u.label);a?this.Rt(a):this.lg(Error("No such screen"))};
D7.prototype.aa=function(){g.mo(this.B);this.B=NaN;z7.prototype.aa.call(this)};g.u(E7,g.O);g.k=E7.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.K);this.P||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.z)(this.EO,this);c=new chrome.cast.ApiConfig(c,(0,g.z)(this.FE,this),f,d,e);c.customDialLaunchCallback=(0,g.z)(this.eN,this);chrome.cast.initialize(c,(0,g.z)(function(){this.la()||
(chrome.cast.addReceiverActionListener(this.D),aJa(),this.B.subscribe("onlineScreenChange",(0,g.z)(this.UG,this)),this.C=vJa(this),chrome.cast.setCustomReceivers(this.C,g.Oa,(0,g.z)(function(h){this.gd("Failed to set initial custom receivers: "+g.Cj(h))},this)),this.V("yt-remote-cast2-availability-change",G7(this)),b(!0))},this),(0,g.z)(function(h){this.gd("Failed to initialize API: "+g.Cj(h));
b(!1)},this))};
g.k.sQ=function(a,b){F7("Setting connected screen ID: "+a+" -> "+b);if(this.u){var c=this.u.getScreen();if(!a||c&&c.id!=a)F7("Unsetting old screen status: "+this.u.u.friendlyName),H7(this,null)}if(a&&b){if(!this.u){c=l6(this.B.dg(),a);if(!c){F7("setConnectedScreenStatus: Unknown screen.");return}var d=uJa(this,c);d||(F7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.C.push(d),chrome.cast.setCustomReceivers(this.C,
g.Oa,(0,g.z)(function(e){this.gd("Failed to set initial custom receivers: "+g.Cj(e))},this)));
F7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);H7(this,new D7(this.B,d),!0)}this.u.Fy(b)}else F7("setConnectedScreenStatus: no screen.")};
g.k.tQ=function(a){this.la()?this.gd("Setting connection data on disposed cast v2"):this.u?this.u.ln(a):this.gd("Setting connection data without a session")};
g.k.xR=function(){this.la()?this.gd("Stopping session on disposed cast v2"):this.u?(this.u.stop(),H7(this,null)):F7("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.z)(this.FE,this),(0,g.z)(this.WO,this))};
g.k.aa=function(){this.B.unsubscribe("onlineScreenChange",(0,g.z)(this.UG,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=YIa,b=g.Na("yt.mdx.remote.debug.handlers_");g.rb(b||[],a);g.ag(this.u);g.O.prototype.aa.call(this)};
g.k.gd=function(a){j7("Controller",a)};
g.k.HE=function(a,b){this.u==a&&(b||H7(this,null),this.V("yt-remote-cast2-session-change",b))};
g.k.BO=function(a,b){if(!this.la())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.u)if(this.u.u.label!=a.label)F7("onReceiverAction_: Stopping active receiver: "+this.u.u.friendlyName),this.u.stop();else{F7("onReceiverAction_: Casting to active receiver.");this.u.getScreen()&&this.V("yt-remote-cast2-session-change",this.u.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H7(this,
new D7(this.B,a));break;case chrome.cast.ReceiverType.DIAL:H7(this,new C7(this.B,a,this.G));break;case chrome.cast.ReceiverType.CAST:H7(this,new B7(this.B,a));break;default:this.gd("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.u&&this.u.u.label==a.label?this.u.stop():this.gd("Stopping receiver w/o session: "+a.friendlyName)}else this.gd("onReceiverAction_ called without receiver.")};
g.k.eN=function(a){if(this.la())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.gd("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.u?this.u.u:null;if(!c||c.label!=b.label)return this.gd("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.u.getScreen())return F7("Reselecting dial screen."),
this.V("yt-remote-cast2-session-change",this.u.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.gd('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H7(this,new C7(this.B,b,this.G))}b=this.u;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.z)(b.zJ,b,(b.G.extraData||{}).screenId||null)):new Promise((0,g.z)(b.Qw,b))};
g.k.FE=function(a){if(!this.la()){F7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.u)if(b.receiverType==chrome.cast.ReceiverType.CAST)F7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),H7(this,new B7(this.B,b),!0);else{this.gd("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.u.u,d=l6(this.B.dg(),c.label);d&&g6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(F7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.ag(this.u),this.u=new B7(this.B,b),this.u.subscribe("sessionScreen",(0,g.z)(this.HE,this,this.u)),this.u.ln(null));this.u.Ey(a)}}};
g.k.wR=function(){return this.u?this.u.VG():null};
g.k.WO=function(a){this.la()||(this.gd("Failed to estabilish a session: "+g.Cj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H7(this,null))};
g.k.EO=function(a){F7("Receiver availability updated: "+a);if(!this.la()){var b=G7(this);this.F=a==chrome.cast.ReceiverAvailability.AVAILABLE;G7(this)!=b&&this.V("yt-remote-cast2-availability-change",G7(this))}};
g.k.UG=function(){this.la()||(this.C=vJa(this),F7("Updating custom receivers: "+g.Cj(this.C)),chrome.cast.setCustomReceivers(this.C,g.Oa,(0,g.z)(function(){this.gd("Failed to set custom receivers.")},this)),this.V("yt-remote-cast2-availability-change",G7(this)))};
E7.prototype.setLaunchParams=E7.prototype.tQ;E7.prototype.setConnectedScreenStatus=E7.prototype.sQ;E7.prototype.stopSession=E7.prototype.xR;E7.prototype.getCastSession=E7.prototype.wR;E7.prototype.requestSession=E7.prototype.requestSession;E7.prototype.init=E7.prototype.init;E7.prototype.dispose=E7.prototype.dispose;var N7=[];g.k=S7.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";T7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.u=a.trackData,this.li=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.G=a.playerTimeAt,this.F=a.seekableStart,this.B=a.seekableEnd,this.P=a.duration,this.N=a.loadedTime,this.D=a.liveIngestionTime,this.C=!isNaN(this.D))};
g.k.Kb=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.getDuration=function(){return this.C?this.P+U7(this):this.P};
g.k.clone=function(){return new S7(Y7(this))};g.u($7,g.O);g.k=$7.prototype;g.k.getState=function(){return this.Ha};
g.k.play=function(){b8(this)?(this.u?this.u.play(null,g.Oa,g8(this,"play")):f8(this,"play"),e8(this,1,W7(a8(this))),this.V("remotePlayerChange")):c8(this,this.play)};
g.k.pause=function(){b8(this)?(this.u?this.u.pause(null,g.Oa,g8(this,"pause")):f8(this,"pause"),e8(this,2,W7(a8(this))),this.V("remotePlayerChange")):c8(this,this.pause)};
g.k.seekTo=function(a){if(b8(this)){if(this.u){var b=a8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Kb()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Oa,g8(this,"seekTo",{newTime:a}))}else f8(this,"seekTo",{newTime:a});e8(this,3,a);this.V("remotePlayerChange")}else c8(this,g.Va(this.seekTo,a))};
g.k.stop=function(){if(b8(this)){this.u?this.u.stop(null,g.Oa,g8(this,"stopVideo")):f8(this,"stopVideo");var a=a8(this);a.index=-1;a.videoId="";T7(a);d8(this,a);this.V("remotePlayerChange")}else c8(this,this.stop)};
g.k.setVolume=function(a,b){if(b8(this)){var c=a8(this);if(this.B){if(c.volume!=a){var d=Math.round(a)/100;this.B.setReceiverVolumeLevel(d,(0,g.z)(function(){j7("CP","set receiver volume: "+d)},this),(0,g.z)(function(){this.gd("failed to set receiver volume.")},this))}c.muted!=b&&this.B.setReceiverMuted(b,(0,g.z)(function(){j7("CP","set receiver muted: "+b)},this),(0,g.z)(function(){this.gd("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f8(this,"setVolume",e)}c.muted=b;c.volume=a;d8(this,c)}else c8(this,g.Va(this.setVolume,a,b))};
g.k.PG=function(a,b){if(b8(this)){var c=a8(this),d={videoId:a};b&&(c.u={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Cj(b.style),g.bc(d,c.u));f8(this,"setSubtitlesTrack",d);d8(this,c)}else c8(this,g.Va(this.PG,a,b))};
g.k.setAudioTrack=function(a,b){if(b8(this)){var c=b.getLanguageInfo().getId();f8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=a8(this);d.audioTrackId=c;d8(this,d)}else c8(this,g.Va(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){var l=a8(this);c=c||0;var m={videoId:a,currentIndex:c};X7(l,a,c);void 0!==b&&(V7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=h&&(m.locationInfo=g.Cj(h));f8(this,"setPlaylist",m);d||d8(this,l)};
g.k.Xt=function(a,b){if(b8(this)){if(a&&b){var c=a8(this);X7(c,a,b);d8(this,c)}f8(this,"previous")}else c8(this,g.Va(this.Xt,a,b))};
g.k.nextVideo=function(a,b){if(b8(this)){if(a&&b){var c=a8(this);X7(c,a,b);d8(this,c)}f8(this,"next")}else c8(this,g.Va(this.nextVideo,a,b))};
g.k.ZA=function(){b8(this)?f8(this,"dismissAutoplay"):c8(this,this.ZA)};
g.k.dispose=function(){if(3!=this.Ha){var a=this.Ha;this.Ha=3;this.V("proxyStateChange",a,this.Ha)}g.O.prototype.dispose.call(this)};
g.k.aa=function(){IJa(this);this.C=null;this.D.clear();Z7(this,null);g.O.prototype.aa.call(this)};
g.k.xz=function(a){if((a!=this.Ha||2==a)&&3!=this.Ha&&0!=a){var b=this.Ha;this.Ha=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,g.ob(b.u)&&(b.u=b.B,b.u.reverse(),b.B=[]),a.u.pop().apply(this);else 3==a&&this.dispose()}};
g.k.xO=function(a,b){this.V(a,b)};
g.k.PM=function(a){if(!a)this.Pp(null),Z7(this,null);else if(this.B.receiver.volume){a=this.B.receiver.volume;var b=a8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)j7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d8(this,b)}};
g.k.Pp=function(a){j7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.K);if(this.u=a)this.u.addUpdateListener(this.K),JJa(this),this.V("remotePlayerChange")};
g.k.OM=function(a){a?(JJa(this),this.V("remotePlayerChange")):this.Pp(null)};
g.k.Yy=function(){f8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.WM=function(){var a=FJa();a&&Z7(this,a)};
g.k.gd=function(a){j7("CP",a)};g.u(h8,g.O);g.k=h8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,h=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==h&&(l.currentIndex=h);c&&(this.Eb.listId=c);this.Eb.videoId=d;this.Eb.index=h||0;this.Eb.state=3;V7(this.Eb,m);this.D="UNSUPPORTED";i8("Connecting with setPlaylist and params: "+g.Cj(l));this.u.connect({method:"setPlaylist",
params:g.Cj(l)},a,UHa())}else i8("Connecting without params"),this.u.connect({},a,UHa());LJa(this)};
g.k.dispose=function(){this.la()||(this.V("beforeDispose"),j8(this,3));g.O.prototype.dispose.call(this)};
g.k.aa=function(){k8(this);m8(this);l8(this);g.mo(this.K);this.K=NaN;g.mo(this.P);this.P=NaN;this.C=null;g.Io(this.Y);this.Y.length=0;this.u.dispose();g.O.prototype.aa.call(this);this.D=this.G=this.B=this.Eb=this.u=null};
g.k.UI=function(){this.Qm(2)};
g.k.TM=function(){i8("Channel opened");this.X&&(this.X=!1,l8(this),this.W=g.ko((0,g.z)(function(){i8("Timing out waiting for a screen.");this.Qm(1)},this),15E3));
YHa(VIa(this.u),this.ba)};
g.k.QM=function(){i8("Channel closed");isNaN(this.F)?q6(!0):q6();this.dispose()};
g.k.RM=function(a){q6();isNaN(this.Yo())?(i8("Channel error: "+a+" without reconnection"),this.dispose()):(this.X=!0,i8("Channel error: "+a+" with reconnection in "+this.Yo()+" ms"),j8(this,2))};
g.k.SM=function(a){a.params?i8("Received: action="+a.action+", params="+g.Cj(a.params)):i8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=x6(a.params.devices);this.B=g.Pc(a,function(c){return new e6(c)});
a=!!g.jb(this.B,function(c){return"LOUNGE_SCREEN"==c.type});
OJa(this,a);break;case "loungeScreenDisconnected":g.sb(this.B,function(c){return"LOUNGE_SCREEN"==c.type});
OJa(this,!1);break;case "remoteConnected":var b=new e6(x6(a.params.device));g.jb(this.B,function(c){return b?c.id==b.id:!1})||EHa(this.B,b);
break;case "remoteDisconnected":b=new e6(x6(a.params.device));g.sb(this.B,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":QJa(this,a);break;case "nowPlaying":SJa(this,a);break;case "onStateChange":RJa(this,a);break;case "onAdStateChange":TJa(this,a);break;case "onVolumeChanged":UJa(this,a);break;case "onSubtitlesTrackChanged":PJa(this,a);break;case "nowAutoplaying":VJa(this,a);break;case "autoplayDismissed":this.V("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.V("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.D=
a.params.autoplayMode;this.V("autoplayModeChange",this.D);"DISABLED"==this.D&&this.V("autoplayDismissed");break;case "onHasPreviousNextChanged":WJa(this,a);break;case "requestAssistedSignIn":this.V("assistedSignInRequested",a.params.authCode);break;default:i8("Unrecognized action: "+a.action)}};
g.k.jQ=function(){if(this.C){var a=this.C;this.C=null;this.Eb.videoId!=a&&n8(this,"getNowPlaying")}};
g.k.KI=function(){var a=3;this.la()||(a=0,isNaN(this.Yo())?e7(this.u)&&isNaN(this.F)&&(a=1):a=2);return a};
g.k.Qm=function(a){i8("Disconnecting with "+a);k8(this);this.V("beforeDisconnect",a);1==a&&q6();WIa(this.u,a);this.dispose()};
g.k.II=function(){var a=this.Eb;this.C&&(a=this.Eb.clone(),X7(a,this.C,a.index));return Y7(a)};
g.k.uQ=function(a){var b=new S7(a);b.videoId&&b.videoId!=this.Eb.videoId&&(this.C=b.videoId,g.mo(this.K),this.K=g.ko((0,g.z)(this.jQ,this),5E3));var c=[];this.Eb.listId==b.listId&&this.Eb.videoId==b.videoId&&this.Eb.index==b.index||c.push("remoteQueueChange");this.Eb.playerState==b.playerState&&this.Eb.volume==b.volume&&this.Eb.muted==b.muted&&W7(this.Eb)==W7(b)&&g.Cj(this.Eb.u)==g.Cj(b.u)||c.push("remotePlayerChange");this.Eb.reset(a);g.Fb(c,function(d){this.V(d)},this)};
g.k.EB=function(){var a=this.u.G.id,b=g.jb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Yo=function(){var a=this.u;return a.B.isActive()?a.B.B-g.A():NaN};
g.k.wI=function(){return this.D||"UNSUPPORTED"};
g.k.xI=function(){return this.G||""};
g.k.pR=function(){if(!isNaN(this.Yo())){var a=this.u.B;g.Xm(a.u);a.start()}};
g.k.qQ=function(a,b){n8(this,a,b);NJa(this)};
g.k.OG=function(){var a=g.aq("SID","")||"",b=g.aq("SAPISID","")||"",c=g.aq("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.nf(g.Ue(a),2);b=g.nf(g.Ue(b),2);c=g.nf(g.Ue(c),2);return g.nf(g.Ue(a+","+b+","+c),2)};
h8.prototype.subscribe=h8.prototype.subscribe;h8.prototype.unsubscribeByKey=h8.prototype.Ek;h8.prototype.getProxyState=h8.prototype.KI;h8.prototype.disconnect=h8.prototype.Qm;h8.prototype.getPlayerContextData=h8.prototype.II;h8.prototype.setPlayerContextData=h8.prototype.uQ;h8.prototype.getOtherConnectedRemoteId=h8.prototype.EB;h8.prototype.getReconnectTimeout=h8.prototype.Yo;h8.prototype.getAutoplayMode=h8.prototype.wI;h8.prototype.getAutoplayVideoId=h8.prototype.xI;h8.prototype.reconnect=h8.prototype.pR;
h8.prototype.sendMessage=h8.prototype.qQ;h8.prototype.getXsrfToken=h8.prototype.OG;g.u(o8,n7);g.k=o8.prototype;g.k.dg=function(a){return this.df.$_gs(a)};
g.k.contains=function(a){return!!this.df.$_c(a)};
g.k.get=function(a){return this.df.$_g(a)};
g.k.start=function(){this.df.$_st()};
g.k.add=function(a,b,c){this.df.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.df.$_r(a,b,c)};
g.k.Eu=function(a,b,c,d){this.df.$_un(a,b,c,d)};
g.k.aa=function(){for(var a=0,b=this.u.length;a<b;++a)this.df.$_ubk(this.u[a]);this.u.length=0;this.df=null;n7.prototype.aa.call(this)};
g.k.tR=function(){this.V("screenChange")};
g.k.cO=function(){this.V("onlineScreenChange")};
w7.prototype.$_st=w7.prototype.start;w7.prototype.$_gspc=w7.prototype.uR;w7.prototype.$_gsppc=w7.prototype.TG;w7.prototype.$_c=w7.prototype.contains;w7.prototype.$_g=w7.prototype.get;w7.prototype.$_a=w7.prototype.add;w7.prototype.$_un=w7.prototype.Eu;w7.prototype.$_r=w7.prototype.remove;w7.prototype.$_gs=w7.prototype.dg;w7.prototype.$_gos=w7.prototype.SG;w7.prototype.$_s=w7.prototype.subscribe;w7.prototype.$_ubk=w7.prototype.Ek;var H8=null,G8=!1,p8=null,q8=null,F8=null,u8=[];g.u(I8,g.B);g.k=I8.prototype;g.k.aa=function(){g.B.prototype.aa.call(this);this.u.stop();this.C.stop();this.P.stop();this.X();var a=this.ub;a.unsubscribe("proxyStateChange",this.CE,this);a.unsubscribe("remotePlayerChange",this.Up,this);a.unsubscribe("remoteQueueChange",this.St,this);a.unsubscribe("previousNextChange",this.zE,this);a.unsubscribe("nowAutoplaying",this.uE,this);a.unsubscribe("autoplayDismissed",this.WD,this);this.ub=this.B=null};
g.k.iD=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.ub.Ha)if(J8(this)){if(!a8(this.ub).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":a8(this.ub).Kb()?this.ub.pause():this.ub.play();break;case "control_play":this.ub.play();break;case "control_pause":this.ub.pause();break;case "control_seek":this.K.QC(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.J.getCurrentTime();L8(this,0===c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.LM=function(a){this.P.RI(a)};
g.k.XQ=function(a){this.iD("control_subtitles_set_track",g.Wb(a)?null:a)};
g.k.ZF=function(){var a=this.J.getOption("captions","track");g.Wb(a)||K8(this,a)};
g.k.Ic=function(a){this.B.Ic(a,this.J.getVideoData().lengthSeconds)};
g.k.GN=function(){g.Wb(this.D)||iKa(this,this.D);this.F=!1};
g.k.CE=function(a,b){this.C.stop();2===b&&this.WF()};
g.k.Up=function(){if(J8(this)){this.u.stop();var a=a8(this.ub);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.re=1;break;case 1082:case 1083:this.B.re=0;break;default:this.B.re=-1}switch(a.playerState){case 1081:case 1:this.Rd(new g.CL(8));this.VF();break;case 1085:case 3:this.Rd(new g.CL(9));break;case 1083:case 0:this.Rd(new g.CL(2));this.K.stop();this.Ic(this.J.getVideoData().lengthSeconds);break;case 1084:this.Rd(new g.CL(4));break;case 2:this.Rd(new g.CL(4));this.Ic(W7(a));
break;case -1:this.Rd(new g.CL(64));break;case -1E3:this.Rd(new g.CL(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=a8(this.ub).u;var b=this.D;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.D=a,iKa(this,a));a=a8(this.ub);-1===a.volume||Math.round(this.J.getVolume())===a.volume&&this.J.isMuted()===a.muted||this.N.isActive()||this.zG()}else hKa(this)};
g.k.zE=function(){this.J.V("mdxpreviousnextchange")};
g.k.St=function(){J8(this)||hKa(this)};
g.k.uE=function(a){isNaN(a)||this.J.V("mdxnowautoplaying",a)};
g.k.WD=function(){this.J.V("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){J8(this)&&this.ub.setAudioTrack(this.J.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===a8(this.ub).playerState?L8(this,a):b&&this.ub.seekTo(a)};
g.k.zG=function(){var a=this;if(J8(this)){var b=a8(this.ub);this.events.Fb(this.W);b.muted?this.J.mute():this.J.unMute();this.J.setVolume(b.volume);this.W=this.events.R(this.J,"onVolumeChange",function(c){gKa(a,c)})}};
g.k.VF=function(){this.u.stop();if(!this.ub.la()){var a=a8(this.ub);a.Kb()&&this.Rd(new g.CL(8));this.Ic(W7(a));this.u.start()}};
g.k.WF=function(){this.C.stop();this.u.stop();var a=this.ub.C.getReconnectTimeout();2==this.ub.Ha&&!isNaN(a)&&this.C.start()};
g.k.Rd=function(a){this.C.stop();var b=this.G;if(!g.HL(b,a)){var c=g.U(a,2);c!==g.U(this.G,2)&&g.K0(this.J.app,c);this.G=a;kKa(this.B,b,a)}};g.u(M8,g.V);M8.prototype.uc=function(){this.u.show()};
M8.prototype.gb=function(){this.u.hide()};
M8.prototype.B=function(){g.TK("https://web.archive.org/web/20201201000552/https://support.google.com/youtube/answer/7640706")};
M8.prototype.C=function(){d6("mdx-manual-pairing-popup-ok");this.gb()};g.u(N8,g.V);N8.prototype.uc=function(){this.u.show()};
N8.prototype.gb=function(){this.u.hide()};
N8.prototype.B=function(){d6("mdx-privacy-popup-cancel");this.gb()};
N8.prototype.C=function(){d6("mdx-privacy-popup-confirm");this.gb()};g.u(O8,g.V);O8.prototype.B=function(a){jKa(this,a.state)};g.u(P8,g.ZZ);P8.prototype.D=function(){var a=this.J.getOption("remote","receivers");a&&1<a.length&&!this.J.getOption("remote","quickCast")?(this.Kk=g.Gb(a,this.u,this),g.$Z(this,g.Pc(a,this.u)),a=this.J.getOption("remote","currentReceiver"),this.Bc(this.u(a)),this.enable(!0)):this.enable(!1)};
P8.prototype.u=function(a){return a.key};
P8.prototype.sh=function(a){return"cast-selector-receiver"===a?"Cast...":this.Kk[a].name};
P8.prototype.Ie=function(a){g.ZZ.prototype.Ie.call(this,a);this.J.setOption("remote","currentReceiver",this.Kk[a]);this.Ua.gb()};g.u(Q8,g.AS);g.k=Q8.prototype;
g.k.create=function(){var a=this.player.T(),b=g.LC(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:g.Q(a.experiments,"mdx_load_cast_api_bootstrap_script")};aKa(b,a);this.subscriptions.push(g.ro("yt-remote-before-disconnect",this.JM,this));this.subscriptions.push(g.ro("yt-remote-connection-change",this.FO,this));this.subscriptions.push(g.ro("yt-remote-receiver-availability-change",this.BE,this));this.subscriptions.push(g.ro("yt-remote-auto-connect",this.DO,this));this.subscriptions.push(g.ro("yt-remote-receiver-resumed",
this.CO,this));this.subscriptions.push(g.ro("mdx-privacy-popup-confirm",this.ZP,this));this.subscriptions.push(g.ro("mdx-privacy-popup-cancel",this.YP,this));this.subscriptions.push(g.ro("mdx-manual-pairing-popup-ok",this.OJ,this));this.BE()};
g.k.load=function(){this.player.cancelPlayback();g.AS.prototype.load.call(this);this.Wh=new I8(this,this.player,this.ub);var a=(a=fKa())?a.currentTime:0;var b=E8()?new $7(z8(),void 0):null;0==a&&b&&(a=W7(a8(b)));0!==a&&this.Ic(a);kKa(this,this.Dc,this.Dc);g.S0(this.player.app,6)};
g.k.unload=function(){this.player.V("mdxautoplaycanceled");this.dk=this.oh;g.bg(this.Wh,this.ub);this.ub=this.Wh=null;g.AS.prototype.unload.call(this);g.S0(this.player.app,5);R8(this)};
g.k.aa=function(){g.so(this.subscriptions);g.AS.prototype.aa.call(this)};
g.k.Di=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.Wh.iD.apply(this.Wh,[a].concat(g.la(c)))};
g.k.getAdState=function(){return this.re};
g.k.MI=function(){return this.loaded?this.Wh.suggestion:null};
g.k.li=function(){return this.ub?a8(this.ub).li:!1};
g.k.hasNext=function(){return this.ub?a8(this.ub).hasNext:!1};
g.k.Ic=function(a,b){this.zC=a||0;this.player.V("progresssync",a,b)};
g.k.getCurrentTime=function(){return this.zC};
g.k.getProgressState=function(){var a=a8(this.ub),b=this.player.getVideoData();return{allowSeeking:g.Q(this.player.T().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.pe():!a.isAdPlaying()&&this.player.pe(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.C?a.D+U7(a):a.D,isAtLiveHead:1>=(a.C?a.B+U7(a):a.B)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.C?a.B+U7(a):a.B,seekableStart:0<a.F?a.F+
U7(a):a.F}};
g.k.nextVideo=function(){this.ub&&this.ub.nextVideo()};
g.k.Xt=function(){this.ub&&this.ub.Xt()};
g.k.JM=function(a){1===a&&(this.fy=this.ub?a8(this.ub):null)};
g.k.FO=function(){var a=E8()?new $7(z8(),void 0):null;if(a){var b=this.dk;this.loaded&&this.unload();this.ub=a;this.fy=null;b.key!==this.oh.key&&(this.dk=b,this.load())}else g.ag(this.ub),this.ub=null,this.loaded&&(this.unload(),(a=this.fy)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W7(a)));this.player.V("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.BE=function(){this.Kk=[this.oh].concat(cKa());var a=A8()||this.oh;S8(this,a);this.player.va("onMdxReceiversChange")};
g.k.DO=function(){var a=A8();S8(this,a)};
g.k.CO=function(){this.dk=A8()};
g.k.ZP=function(){this.Wp=!0;R8(this);G8=!1;H8&&C8(H8,1);H8=null};
g.k.YP=function(){this.Wp=!1;R8(this);S8(this,this.oh);this.dk=this.oh;G8=!1;H8=null;this.player.playVideo()};
g.k.OJ=function(){this.Xs=!0;R8(this);g.tt("yt-remote-manual-pairing-warning-shown",!0,2592E3);G8=!1;H8&&C8(H8,1);H8=null};
g.k.ke=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Kk;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q7():S8(this,b)),this.loaded?this.dk:this.oh;case "quickCast":return 2===this.Kk.length&&"cast-selector-receiver"===this.Kk[1].key?(b&&Q7(),!0):!1}};
g.k.Yy=function(){this.ub.Yy()};
g.k.Gh=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.CX.remote=Q8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:05:52 Dec 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:57:58 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2148.47
  exclusion.robots: 0.111
  exclusion.robots.policy: 0.098
  cdx.remote: 0.091
  esindex: 0.016
  LoadShardBlock: 1593.935 (3)
  PetaboxLoader3.datanode: 776.013 (4)
  PetaboxLoader3.resolve: 2736.084 (2)
  load_resource: 1929.139
*/