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

(function(g){var window=this;var XGa=function(a,b){return g.Tb(a,b)},Z5=function(a,b,c){a.C.set(b,c)},$5=function(a){Z5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.A()).toString(36));
return a},a6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.ln(a.C,b,c)},YGa=function(a,b){var c=[];
g.cj(b,function(d){try{var e=g.Yn.prototype.B.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Xn(e)&&c.push(d)},a);
return c},ZGa=function(a,b){var c=YGa(a,b);
g.Gb(c,function(d){g.Yn.prototype.remove.call(this,d)},a)},$Ga=function(a){if(a.Zd){if(a.Zd.locationOverrideToken)return{locationOverrideToken:a.Zd.locationOverrideToken};
if(null!=a.Zd.latitudeE7&&null!=a.Zd.longitudeE7)return{latitudeE7:a.Zd.latitudeE7,longitudeE7:a.Zd.longitudeE7}}return null},aHa=function(a,b){g.nb(a,b)||a.push(b)},b6=function(a){var b=0,c;
for(c in a)b++;return b},bHa=function(a,b){var c=b instanceof g.Fc?b:g.Lc(b,/^data:image\//i.test(b));
a.src=g.Gc(c)},c6=function(){},cHa=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},dHa=function(a){if(a.mf&&"function"==typeof a.mf)return a.mf();
if("string"===typeof a)return a.split("");if(g.Ra(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Pb(a)},eHa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ra(a)||"string"===typeof a)g.Gb(a,b,void 0);else{if(a.xg&&"function"==typeof a.xg)var c=a.xg();else if(a.mf&&"function"==typeof a.mf)c=void 0;else if(g.Ra(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Qb(a);d=dHa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},fHa=function(a,b,c,d){var e=new g.Zm(null,void 0);
a&&g.$m(e,a);b&&g.an(e,b);c&&g.bn(e,c);d&&(e.B=d);return e},d6=function(a,b){g.Lo[a]=!0;
var c=g.Io();c&&c.publish.apply(c,arguments);g.Lo[a]=!1},e6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Wm;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",gHa(this,a.capabilities||""),hHa(this,a.experiments||""))},gHa=function(a,b){a.capabilities.clear();
g.Ke(b.split(","),g.Wa(XGa,iHa)).forEach(function(c){a.capabilities.add(c)})},hHa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},f6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},g6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},jHa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},kHa=function(a){return new f6(a)},lHa=function(a){return Array.isArray(a)?g.Pc(a,kHa):[]},h6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},i6=function(a){return Array.isArray(a)?"["+g.Pc(a,h6).join(",")+"]":"null"},j6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},mHa=function(a){return g.Pc(a,function(b){return{key:b.id,
name:b.name}})},k6=function(a,b){return g.jb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},l6=function(a,b){return g.jb(a,function(c){return g6(c,b)})},nHa=function(){var a=(0,g.Rs)();
a&&ZGa(a,a.u.Pi(!0))},m6=function(){var a=g.Xs("yt-remote-connected-devices")||[];
g.Cb(a);return a},oHa=function(a){if(g.ob(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Pc(a,function(d,e){return 0==e?d:d.substring(c.length)})},pHa=function(a){g.Ws("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.Xs("yt-remote-device-id");a||(a=j6(),g.Ws("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.nb(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.nb(a,b);g.Zs()&&g.Fb(a,b);a=oHa(a);if(g.ob(a))try{g.xq("remote_sid")}catch(c){}else try{g.vq("remote_sid",a.join(","),-1)}catch(c){}},qHa=function(){return g.Xs("yt-remote-session-browser-channel")},rHa=function(){return g.Xs("yt-remote-local-screens")||[]},sHa=function(){g.Ws("yt-remote-lounge-token-expiration",!0,86400)},tHa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Pc(rHa(),function(d){return d.loungeToken}),c=g.Pc(a,function(d){return d.loungeToken});
g.jh(c,function(d){return!g.nb(b,d)})&&sHa();
g.Ws("yt-remote-local-screens",a,31536E3)},uHa=function(a,b){g.Ws("yt-remote-session-browser-channel",a);
g.Ws("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.nb(c,d)||c.push(d);pHa(c);p6()},q6=function(a){a||(g.Ys("yt-remote-session-screen-id"),g.Ys("yt-remote-session-video-id"));
p6();a=m6();g.rb(a,o6());pHa(a)},vHa=function(){if(!r6){var a=g.io();
a&&(r6=new g.Sn(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},wHa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},xHa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},s6=function(a){a.length?yHa(a.shift(),function(){s6(a)}):t6()},zHa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},yHa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.jd(d,g.ng(a));(document.head||document.documentElement).appendChild(d)},t6=function(){var a=xHa();
a&&a(!1,"No cast extension found")},BHa=function(){if(AHa){var a=2,b=xHa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;yHa("//web.archive.org/web/20201101001345/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",t6,c)}},CHa=function(){BHa();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);s6(["//web.archive.org/web/20201101001345/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20201101001345/https://www.gstatic.com/eureka/clank/cast_sender.js"])},u6=function(a,b,c){g.B.call(this);
this.I=null!=c?(0,g.z)(a,c):a;this.Ze=b;this.F=(0,g.z)(this.XI,this);this.u=!1;this.B=0;this.C=this.Ua=null;this.D=[]},v6=function(a,b,c){g.B.call(this);
this.D=null!=c?a.bind(c):a;this.Ze=b;this.C=null;this.u=!1;this.B=0;this.Ua=null},w6=function(a){a.Ua=g.Um(function(){a.Ua=null;
a.u&&!a.B&&(a.u=!1,w6(a))},a.Ze);
var b=a.C;a.C=null;a.D.apply(null,b)},x6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return cHa(a)},y6=function(){},z6=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},B6=function(a){A6.dispatchEvent(new DHa(A6,a))},DHa=function(a){g.Ll.call(this,"statevent",a)},C6=function(){},EHa=function(){},GHa=function(a){return(a=FHa(a))?new ActiveXObject(a):new XMLHttpRequest},FHa=function(a){if(!a.B&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.B=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.B},D6=function(a,b,c,d){this.u=a;
this.B=b;this.N=c;this.K=d||1;this.F=45E3;this.D=new g.V0(this);this.C=new g.Tm;this.C.setInterval(250)},IHa=function(a,b,c){a.Sn=1;
a.Rj=$5(b.clone());a.Xl=c;a.I=!0;HHa(a,null)},E6=function(a,b,c,d,e){a.Sn=1;
a.Rj=$5(b.clone());a.Xl=null;a.I=c;e&&(a.NF=!1);HHa(a,d)},HHa=function(a,b){a.Ln=g.A();
F6(a);a.Gk=a.Rj.clone();a6(a.Gk,"t",a.K);a.Gq=0;a.be=a.u.Lv(a.u.mq()?b:null);0<a.Aw&&(a.Yt=new v6((0,g.z)(a.LG,a,a.be),a.Aw));a.D.ua(a.be,"readystatechange",a.sQ);var c=a.zl?g.Zb(a.zl):{};a.Xl?(a.Eu="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.be.send(a.Gk,a.Eu,a.Xl,c)):(a.Eu="GET",a.NF&&!g.Ae&&(c.Connection="close"),a.be.send(a.Gk,a.Eu,null,c));a.u.xh(1)},LHa=function(a,b,c){for(var d=!0;!a.al&&a.Gq<c.length;){var e=JHa(a,c);
if(e==G6){4==b&&(a.gk=4,B6(15),d=!1);break}else if(e==KHa){a.gk=4;B6(16);d=!1;break}else H6(a,e)}4==b&&0==c.length&&(a.gk=1,B6(17),d=!1);a.Fh=a.Fh&&d;d||(I6(a),J6(a))},JHa=function(a,b){var c=a.Gq,d=b.indexOf("\n",c);
if(-1==d)return G6;c=Number(b.substring(c,d));if(isNaN(c))return KHa;d+=1;if(d+c>b.length)return G6;var e=b.substr(d,c);a.Gq=d+c;return e},OHa=function(a,b){a.Ln=g.A();
F6(a);var c=b?window.location.hostname:"";a.Gk=a.Rj.clone();Z5(a.Gk,"DOMAIN",c);Z5(a.Gk,"t",a.K);try{a.Kh=new ActiveXObject("htmlfile")}catch(n){I6(a);a.gk=7;B6(22);J6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)h=e+"\\x3c";else if(">"==h)h=e+"\\x3e";else{if(h in K6)h=K6[h];else if(h in MHa)h=K6[h]=MHa[h];else{var l=h.charCodeAt(0);if(31<l&&127>l)var m=h;else{if(256>l){if(m="\\x",16>l||256<l)m+="0"}else m="\\u",4096>l&&(m+="0");m+=l.toString(16).toUpperCase()}h=
K6[h]=m}h=e+h}e=h}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.gd(g.kc("b/12014412"),d+"</body></html>");a.Kh.open();a.Kh.write(g.cd(c));a.Kh.close();a.Kh.parentWindow.m=(0,g.z)(a.GP,a);a.Kh.parentWindow.d=(0,g.z)(a.LE,a,!0);a.Kh.parentWindow.rpcClose=(0,g.z)(a.LE,a,!1);c=a.Kh.createElement("DIV");a.Kh.parentWindow.document.body.appendChild(c);d=g.Kc(a.Gk.toString());d=g.nd(g.Gc(d));d=g.gd(g.kc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.hd(c,d);a.u.xh(1)},F6=function(a){a.jz=g.A()+a.F;
PHa(a,a.F)},PHa=function(a,b){if(null!=a.Yn)throw Error("WatchDog timer not null");
a.Yn=z6((0,g.z)(a.SP,a),b)},L6=function(a){a.Yn&&(g.v.clearTimeout(a.Yn),a.Yn=null)},J6=function(a){a.u.MB()||a.al||a.u.ks(a)},I6=function(a){L6(a);
g.eg(a.Yt);a.Yt=null;a.C.stop();g.OAa(a.D);if(a.be){var b=a.be;a.be=null;b.abort();b.dispose()}a.Kh&&(a.Kh=null)},H6=function(a,b){try{a.u.DE(a,b),a.u.xh(4)}catch(c){}},RHa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;QHa(a,b,function(h){h?c(!0):g.v.setTimeout(function(){RHa(a,b,c,d,f)},f)})}},QHa=function(a,b,c){var d=new Image;
d.onload=function(){try{M6(d),c(!0)}catch(e){}};
d.onerror=function(){try{M6(d),c(!1)}catch(e){}};
d.onabort=function(){try{M6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{M6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
bHa(d,a)},M6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},N6=function(a){g.im.call(this);
this.headers=new g.Wm;this.ba=a||null;this.B=!1;this.Z=this.u=null;this.ra=this.P="";this.I=0;this.D="";this.F=this.ha=this.N=this.ea=!1;this.K=0;this.W=null;this.Aa="";this.X=this.da=!1},SHa=function(a){return g.ye&&g.$d(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},THa=function(a){return"content-type"==a.toLowerCase()},VHa=function(a,b){a.B=!1;
a.u&&(a.F=!0,a.u.abort(),a.F=!1);a.D=b;a.I=5;UHa(a);O6(a)},UHa=function(a){a.ea||(a.ea=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},XHa=function(a){if(a.B&&"undefined"!=typeof g.$0)if(a.Z[1]&&4==P6(a)&&2==a.getStatus())Q6(a,"Local request error detected and ignored");
else if(a.N&&4==P6(a))g.Um(a.zE,0,a);else if(a.dispatchEvent("readystatechange"),4==P6(a)){Q6(a,"Request complete");a.B=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.xd(1,String(a.P));if(!f&&g.v.self&&g.v.self.location){var h=g.v.self.location.protocol;f=h.substr(0,h.length-1)}e=!WHa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.I=6;try{var l=2<P6(a)?a.u.statusText:""}catch(m){l=""}a.D=l+" ["+a.getStatus()+"]";UHa(a)}}finally{O6(a)}}},O6=function(a,b){if(a.u){YHa(a);
var c=a.u,d=a.Z[0]?g.Oa:null;a.u=null;a.Z=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},YHa=function(a){a.u&&a.X&&(a.u.ontimeout=null);
a.W&&(g.v.clearTimeout(a.W),a.W=null)},P6=function(a){return a.u?a.u.readyState:0},R6=function(a){try{return a.u?a.u.responseText:""}catch(b){return""}},Q6=function(a,b){return b+" ["+a.ra+" "+a.P+" "+a.getStatus()+"]"},ZHa=function(a){this.u=a;
this.B=new y6},$Ha=function(a){var b=S6(a.u,a.ro,"/mail/images/cleardot.gif");
$5(b);RHa(b.toString(),5E3,(0,g.z)(a.WH,a),3,2E3);a.xh(1)},U6=function(a){var b=a.u.N;
if(null!=b)B6(5),b?(B6(11),T6(a.u,a,!1)):(B6(12),T6(a.u,a,!0));else if(a.Uf=new D6(a,void 0,void 0,void 0),a.Uf.zl=a.yw,b=a.u,b=S6(b,b.mq()?a.Wo:null,a.zw),B6(5),!g.ye||g.ae(10))a6(b,"TYPE","xmlhttp"),E6(a.Uf,b,!1,a.Wo,!1);else{a6(b,"TYPE","html");var c=a.Uf;a=!!a.Wo;c.Sn=3;c.Rj=$5(b.clone());OHa(c,a)}},V6=function(a,b,c){this.Ha=1;
this.u=[];this.C=[];this.D=new y6;this.K=a||null;this.N=null!=b?b:null;this.F=c||!1},aIa=function(a,b){this.u=a;
this.map=b;this.context=null},bIa=function(a,b,c,d){g.Ll.call(this,"timingevent",a);
this.size=b;this.eq=d},cIa=function(a){g.Ll.call(this,"serverreachability",a)},fIa=function(a){dIa(a);
if(3==a.Ha){var b=a.Ip++,c=a.Ir.clone();Z5(c,"SID",a.B);Z5(c,"RID",b);Z5(c,"TYPE","terminate");W6(a,c);b=new D6(a,a.B,b,void 0);b.Sn=2;b.Rj=$5(c.clone());bHa(new Image,b.Rj.toString());b.Ln=g.A();F6(b)}eIa(a)},gIa=function(a){a.sI(1,0);
a.Ir=S6(a,null,a.xw);X6(a)},dIa=function(a){a.Vj&&(a.Vj.abort(),a.Vj=null);
a.xd&&(a.xd.cancel(),a.xd=null);a.Ri&&(g.v.clearTimeout(a.Ri),a.Ri=null);Y6(a);a.Jf&&(a.Jf.cancel(),a.Jf=null);a.Zj&&(g.v.clearTimeout(a.Zj),a.Zj=null)},hIa=function(a,b){if(0==a.Ha)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new aIa(a.nM++,b));2!=a.Ha&&3!=a.Ha||X6(a)},iIa=function(a){var b=0;
a.xd&&b++;a.Jf&&b++;return b},X6=function(a){a.Jf||a.Zj||(a.Zj=z6((0,g.z)(a.KE,a),0),a.Nm=0)},kIa=function(a,b){if(1==a.Ha){if(!b){a.Ip=Math.floor(1E5*Math.random());
var c=a.Ip++,d=new D6(a,"",c,void 0);d.zl=a.Sm;var e=Z6(a),f=a.Ir.clone();Z5(f,"RID",c);Z5(f,"CVER","1");W6(a,f);IHa(d,f,e);a.Jf=d;a.Ha=2}}else 3==a.Ha&&(b?jIa(a,b):0==a.u.length||a.Jf||jIa(a))},jIa=function(a,b){if(b)if(6<a.bl){a.u=a.C.concat(a.u);
a.C.length=0;var c=a.Ip-1;var d=Z6(a)}else c=b.N,d=b.Xl;else c=a.Ip++,d=Z6(a);var e=a.Ir.clone();Z5(e,"SID",a.B);Z5(e,"RID",c);Z5(e,"AID",a.dn);W6(a,e);c=new D6(a,a.B,c,a.Nm+1);c.zl=a.Sm;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Jf=c;IHa(c,e,d)},W6=function(a,b){if(a.Ve){var c=a.Ve.nB();
c&&g.Ib(c,function(d,e){Z5(b,e,d)})}},Z6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.bl&&0<b){var d=a.u[0].u;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={rm:e.rm},f++){e.rm=a.u[f].u;var h=a.u[f].map;e.rm=6>=a.bl?f:e.rm-d;try{g.Ib(h,function(l){return function(m,n){c.push("req"+l.rm+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.rm+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.u.splice(0,b));
return c.join("&")},lIa=function(a){a.xd||a.Ri||(a.I=1,a.Ri=z6((0,g.z)(a.JE,a),0),a.xm=0)},$6=function(a){if(a.xd||a.Ri||3<=a.xm)return!1;
a.I++;a.Ri=z6((0,g.z)(a.JE,a),mIa(a,a.xm));a.xm++;return!0},T6=function(a,b,c){a.Cu=c;
a.fi=b.fj;a.F||gIa(a)},Y6=function(a){null!=a.kl&&(g.v.clearTimeout(a.kl),a.kl=null)},mIa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},a7=function(a,b){if(2==b||9==b){var c=null;
a.Ve&&(c=null);var d=(0,g.z)(a.ZQ,a);c||(c=new g.Zm("//web.archive.org/web/20201101001345/https://www.google.com/images/cleardot.gif"),$5(c));QHa(c.toString(),1E4,d)}else B6(2);nIa(a,b)},nIa=function(a,b){a.Ha=0;
a.Ve&&a.Ve.CA(b);eIa(a);dIa(a)},eIa=function(a){a.Ha=0;
a.fi=-1;if(a.Ve)if(0==a.C.length&&0==a.u.length)a.Ve.zv();else{g.ub(a.C);var b=g.ub(a.u);a.C.length=0;a.u.length=0;a.Ve.zv(b)}},S6=function(a,b,c){var d=g.gn(c);
if(""!=d.u)b&&g.an(d,b+"."+d.u),g.bn(d,d.D);else{var e=window.location;d=fHa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Ko&&g.Ib(a.Ko,function(f,h){Z5(d,h,f)});
Z5(d,"VER",a.bl);W6(a,d);return d},oIa=function(){},pIa=function(){this.u=[];
this.B=[]},qIa=function(a,b){this.action=a;
this.params=b||{}},b7=function(a,b){g.B.call(this);
this.u=new g.H(this.zP,0,this);g.C(this,this.u);this.Ze=5E3;this.B=0;if("function"===typeof a)b&&(a=(0,g.z)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.C=a},c7=function(a,b,c,d){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
this.W=a;this.I=b;this.C=new g.Rn;this.B=new b7(this.EQ,this);this.u=null;this.Od=!1;this.F=null;this.P="";this.N=this.D=0;this.K=[];this.Z=c;this.X=d},rIa=function(a){return{firstTestResults:[""],
secondTestResults:!a.u.Cu,sessionId:a.u.B,arrayId:a.u.dn}},sIa=function(a,b){a.N=b||0;
a.B.stop();d7(a);a.u&&(3==a.u.getState()&&kIa(a.u),fIa(a.u));a.N=0},e7=function(a){return!!a.u&&3==a.u.getState()},d7=function(a){if(a.u){var b=a.X(),c=a.u.Sm||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.u.Sm=c}},tIa=function(a,b){(a.I.loungeIdToken=b)||a.B.stop()},f7=function(a){this.scheme="https";
this.port=this.domain="";this.u="/api/lounge";this.B=!0;a=a||document.location.href;var b=Number(g.xd(4,a))||"";b&&(this.port=":"+b);this.domain=g.yd(a)||"";a=g.Vc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Dc(a,"10.0")&&(this.B=!1))},g7=function(a,b){var c=a.u;
a.B&&(c=a.scheme+"://"+a.domain+a.port+a.u);return g.Ld(c+b,{})},h7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Wa(a.D,d,!0),onError:g.Wa(a.C,e),Pf:g.Wa(a.F,e)};c&&(a.dc=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.oq(b,a)},xIa=function(){var a=uIa;
vIa();i7.push(a);wIa(i7)},j7=function(a,b){vIa();
var c=i7,d=yIa(a,String(b));g.ob(c)?zIa(d):(wIa(c),g.Gb(c,function(e){e(d)}))},vIa=function(){i7||(i7=g.Na("yt.mdx.remote.debug.handlers_")||[],g.Ia("yt.mdx.remote.debug.handlers_",i7,void 0))},zIa=function(a){var b=(k7+1)%50;
k7=b;l7[b]=a;m7||(m7=49==b)},wIa=function(a){var b=l7;
if(b[0]){var c=k7,d=m7?c:-1;do{d=(d+1)%50;var e=b[d];g.Gb(a,function(f){f(e)})}while(d!=c);
l7=Array(50);k7=-1;m7=!1}},yIa=function(a,b){var c=(g.A()-AIa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},n7=function(a){g.P.call(this);
this.I=a;this.screens=[]},BIa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0},CIa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Ke(a.screens,function(f){return!!k6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=BIa(a,b[d])||c;return c},DIa=function(a,b){var c=a.screens.length;
a.screens=g.Ke(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},o7=function(a,b,c,d){g.P.call(this);
this.I=a;this.F=b;this.C=c;this.D=d;this.B=0;this.u=null;this.Ua=NaN},q7=function(a){n7.call(this,"LocalScreenService");
this.B=a;this.u=NaN;p7(this);this.info("Initializing with "+i6(this.screens))},EIa=function(a){if(a.screens.length){var b=g.Pc(a.screens,function(d){return d.id}),c=g7(a.B,"/pairing/get_lounge_token_batch");
h7(a.B,c,{screen_ids:b.join(",")},(0,g.z)(a.gJ,a),(0,g.z)(a.fJ,a))}},p7=function(a){if(g.uo("deprecate_pair_servlet_enabled"))return CIa(a,[]);
var b=lHa(rHa());b=g.Ke(b,function(c){return!c.uuid});
return CIa(a,b)},r7=function(a,b){tHa(g.Pc(a.screens,jHa));
b&&sHa()},t7=function(a,b){g.P.call(this);
this.I=b;var c=g.Xs("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.I(),f=0,h=e.length;f<h;++f){var l=e[f].id;d[l]=g.nb(c,l)}this.u=d;this.F=a;this.C=this.D=NaN;this.B=null;s7("Initialized with "+g.Fj(this.u))},FIa=function(a,b,c){var d=g7(a.F,"/pairing/get_screen_availability");
h7(a.F,d,{lounge_token:b.token},(0,g.z)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},u7=function(a,b){a:if(b6(b)!=b6(a.u))var c=!1;
else{c=g.Qb(b);for(var d=0,e=c.length;d<e;++d)if(!a.u[c[d]]){c=!1;break a}c=!0}c||(s7("Updated online screens: "+g.Fj(a.u)),a.u=b,a.V("screenChange"));GIa(a)},v7=function(a){isNaN(a.C)||g.Ho(a.C);
a.C=g.Fo((0,g.z)(a.ky,a),0<a.D&&a.D<g.A()?2E4:1E4)},s7=function(a){j7("OnlineScreenService",a)},HIa=function(a){var b={};
g.Gb(a.I(),function(c){c.token?b[c.token]=c.id:this.Yc("Requesting availability of screen w/o lounge token.")});
return b},GIa=function(a){a=g.Qb(g.Kb(a.u,function(b){return b}));
g.Cb(a);a.length?g.Ws("yt-remote-online-screen-ids",a.join(","),60):g.Ys("yt-remote-online-screen-ids")},w7=function(a){n7.call(this,"ScreenService");
this.F=a;this.u=this.B=null;this.C=[];this.D={};IIa(this)},KIa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.cg();if(h=(c?l6(h,c):null)||l6(h,b)){h.uuid=b;var l=x7(a,h);FIa(a.u,l,function(m){e(m?l:null)})}else c?JIa(a,c,(0,g.z)(function(m){var n=x7(this,new f6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));FIa(this.u,n,function(p){e(p?n:null)})},a),f):e(null)},LIa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},JIa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={dc:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){var l=h&&h.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.oq(g7(a.F,"/pairing/get_lounge_token_batch"),e)},MIa=function(a){a.screens=a.B.cg();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+i6(a.screens))},IIa=function(a){y7(a);
a.B=new q7(a.F);a.B.subscribe("screenChange",(0,g.z)(a.nJ,a));MIa(a);a.C=lHa(g.Xs("yt-remote-automatic-screen-cache")||[]);y7(a);a.info("Initializing automatic screens: "+i6(a.C));a.u=new t7(a.F,(0,g.z)(a.cg,a,!0));a.u.subscribe("screenChange",(0,g.z)(function(){this.V("onlineScreenChange")},a))},x7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=l6(a.C,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.C.push(b),g.Ws("yt-remote-automatic-screen-cache",g.Pc(a.C,jHa)));y7(a);a.D[b.uuid]=b.id;g.Ws("yt-remote-device-id-map",a.D,31536E3);return b},y7=function(a){a.D=g.Xs("yt-remote-device-id-map")||{}},z7=function(a,b,c){g.P.call(this);
this.Z=c;this.N=a;this.u=b;this.K=null},A7=function(a,b){j7(a.Z,b)},B7=function(a,b){z7.call(this,a,b,"CastSession");
this.B=null;this.C=0;this.F=(0,g.z)(this.KR,this);this.D=(0,g.z)(this.ZP,this);this.C=g.Fo((0,g.z)(function(){NIa(this,null)},this),12E4)},OIa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Fj(void 0));
var b={type:"getMdxSessionStatus"};a.B?a.B.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Oa,(0,g.z)(function(){A7(this,"Failed to send message: getMdxSessionStatus.")},a)):A7(a,"Sending yt message without session: "+g.Fj(b))},NIa=function(a,b){g.Ho(a.C);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.getScreen()||a.getScreen().id!=b){var c=(0,g.z)(a.Ot,a),d=(0,g.z)(a.kg,a);a.FB(b,c,d,5)}}else a.kg(Error("Waiting for session status timed out."))},C7=function(a,b,c){z7.call(this,a,b,"DialSession");
this.C=this.I=null;this.P="";this.ba=c;this.W=null;this.F=g.Oa;this.D=NaN;this.X=(0,g.z)(this.NR,this);this.B=g.Oa},PIa=function(a){a.B=a.N.TG(a.P,a.u.label,a.u.friendlyName,(0,g.z)(function(b){this.B=g.Oa;
this.Ot(b)},a),(0,g.z)(function(b){this.B=g.Oa;
this.kg(b)},a))},QIa=function(a){var b={};
b.pairingCode=a.P;b.theme=a.ba;vHa()&&(b.env_useStageMdx=1);return g.Hd(b)},D7=function(a,b){z7.call(this,a,b,"ManualSession");
this.B=g.Fo((0,g.z)(this.en,this,null),150)},E7=function(a,b,c,d){g.P.call(this);
this.B=a;this.K=b||"233637DE";this.I=c||"cl";this.N=d||!1;this.u=null;this.F=!1;this.C=[];this.D=(0,g.z)(this.QO,this)},RIa=function(a,b){return b?g.jb(a.C,function(c){return g6(b,c.label)},a):null},F7=function(a){j7("Controller",a)},uIa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G7=function(a){return a.F||!!a.C.length||!!a.u},H7=function(a,b,c){b!=a.u&&(g.eg(a.u),(a.u=b)?(c?a.V("yt-remote-cast2-receiver-resumed",b.u):a.V("yt-remote-cast2-receiver-selected",
b.u),b.subscribe("sessionScreen",(0,g.z)(a.HE,a,b)),b.getScreen()?a.V("yt-remote-cast2-session-change",b.getScreen()):c&&a.u.en(null)):a.V("yt-remote-cast2-session-change",null))},SIa=function(a){var b=a.B.SG(),c=a.u&&a.u.u;
a=g.Pc(b,function(d){c&&g6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=RIa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},YIa=function(a,b,c,d,e,f,h){TIa()?UIa(b,e,f,h)&&(J7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?VIa(a,c):(window.__onGCastApiAvailable=function(l,m){l?VIa(a,c):(K7("Failed to load cast API: "+m),L7(!1),J7(!1),g.Ys("yt-remote-cast-available"),g.Ys("yt-remote-cast-receiver"),WIa(),c(!1))},d?g.So("https://web.archive.org/web/20201101001345/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?CHa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?t6():(BHa(),s6(XIa.map(zHa))))):I7("Cannot initialize because not running Chrome")},WIa=function(){I7("dispose");
var a=M7();a&&a.dispose();g.Ia("yt.mdx.remote.cloudview.instance_",null,void 0);ZIa(!1);g.Oo(N7);N7.length=0},O7=function(){return!!g.Xs("yt-remote-cast-installed")},$Ia=function(){var a=g.Xs("yt-remote-cast-receiver");
return a?a.friendlyName:null},aJa=function(){I7("clearCurrentReceiver");
g.Ys("yt-remote-cast-receiver")},bJa=function(){return O7()?M7()?M7().getCastSession():(K7("getCastSelector: Cast is not initialized."),null):(K7("getCastSelector: Cast API is not installed!"),null)},Q7=function(){O7()?M7()?P7()?(I7("Requesting cast selector."),M7().requestSession()):(I7("Wait for cast API to be ready to request the session."),N7.push(g.No("yt-remote-cast2-api-ready",Q7))):K7("requestCastSelector: Cast is not initialized."):K7("requestCastSelector: Cast API is not installed!")},R7=
function(a,b){P7()?M7().setConnectedScreenStatus(a,b):K7("setConnectedScreenStatus called before ready.")},TIa=function(){var a=0<=g.Vc.search(/ (CrMo|Chrome|CriOS)\//);
return g.eB||a},cJa=function(a,b){M7().init(a,b)},UIa=function(a,b,c,d){var e=!1;
M7()||(a=new E7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.Ws("yt-remote-cast-available",f);d6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){I7("onReceiverSelected: "+f.friendlyName);
g.Ws("yt-remote-cast-receiver",f);d6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){I7("onReceiverResumed: "+f.friendlyName);
g.Ws("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){I7("onSessionChange: "+h6(f));
f||g.Ys("yt-remote-cast-receiver");d6("yt-remote-cast2-session-change",f)}),g.Ia("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
I7("cloudview.createSingleton_: "+e);return e},M7=function(){return g.Na("yt.mdx.remote.cloudview.instance_")},VIa=function(a,b){L7(!0);
J7(!1);cJa(a,function(c){c?(ZIa(!0),g.Po("yt-remote-cast2-api-ready")):(K7("Failed to initialize cast API."),L7(!1),g.Ys("yt-remote-cast-available"),g.Ys("yt-remote-cast-receiver"),WIa());b(c)})},I7=function(a){j7("cloudview",a)},K7=function(a){j7("cloudview",a)},L7=function(a){I7("setCastInstalled_ "+a);
g.Ws("yt-remote-cast-installed",a)},P7=function(){return!!g.Na("yt.mdx.remote.cloudview.apiReady_")},ZIa=function(a){I7("setApiReady_ "+a);
g.Ia("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J7=function(a){g.Ia("yt.mdx.remote.cloudview.initializing_",a,void 0)},S7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.K=0;this.u=null;this.hasNext=this.gi=!1;this.P=this.N=this.B=this.F=0;this.D=NaN;this.C=!1;this.reset(a)},T7=function(a){a.audioTrackId=null;
a.u=null;a.playerState=-1;a.gi=!1;a.hasNext=!1;a.K=0;a.I=g.A();a.F=0;a.B=0;a.N=0;a.P=0;a.D=NaN;a.C=!1},U7=function(a){return a.Gb()?(g.A()-a.I)/1E3:0},V7=function(a,b){a.K=b;
a.I=g.A()},W7=function(a){switch(a.playerState){case 1:case 1081:return(g.A()-a.I)/1E3+a.K;
case -1E3:return 0}return a.K},X7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T7(a)},Y7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.$b(a.u);b.hasPrevious=a.gi;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.I;b.seekableStart=a.F;b.seekableEnd=a.B;b.duration=a.N;b.loadedTime=a.P;b.liveIngestionTime=a.D;return b},$7=function(a,b){g.P.call(this);
this.Ha=0;this.C=a;this.F=[];this.D=new pIa;this.B=this.u=null;this.N=(0,g.z)(this.cN,this);this.I=(0,g.z)(this.Kp,this);this.K=(0,g.z)(this.bN,this);this.P=(0,g.z)(this.kN,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.mz,this),dJa(this))):c=3;0!=c&&(b?this.mz(c):g.Fo((0,g.z)(function(){this.mz(c)},this),0));
var d=bJa();d&&Z7(this,d);this.subscribe("yt-remote-cast2-session-change",this.P)},a8=function(a){return new S7(a.C.getPlayerContextData())},dJa=function(a){g.Gb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.F.push(this.C.subscribe(b,g.Wa(this.MO,b),this))},a)},eJa=function(a){g.Gb(a.F,function(b){this.C.unsubscribeByKey(b)},a);
a.F.length=0},b8=function(a){return 1==a.getState()},c8=function(a,b){var c=a.D;
50>c.u.length+c.B.length&&a.D.B.push(b)},e8=function(a,b,c){var d=a8(a);
V7(d,c);-1E3!=d.playerState&&(d.playerState=b);d8(a,d)},f8=function(a,b,c){a.C.sendMessage(b,c)},d8=function(a,b){eJa(a);
a.C.setPlayerContextData(Y7(b));dJa(a)},Z7=function(a,b){a.B&&(a.B.removeUpdateListener(a.N),a.B.removeMediaListener(a.I),a.Kp(null));
a.B=b;a.B&&(j7("CP","Setting cast session: "+a.B.sessionId),a.B.addUpdateListener(a.N),a.B.addMediaListener(a.I),a.B.media.length&&a.Kp(a.B.media[0]))},fJa=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=a8(a);b.contentId!=d.videoId&&j7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V7(d,a.u.getEstimatedTime());d8(a,d)}else j7("CP","No cast media video. Ignoring state update.")},g8=function(a,b,c){return(0,g.z)(function(d){this.Yc("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Yc("Retrying "+b+" using MDx browser channel."),f8(this,b,c))},a)},h8=function(a,b,c){g.P.call(this);
this.F=NaN;this.X=!1;this.N=this.K=this.P=this.W=NaN;this.Z=[];this.D=this.I=this.C=this.Db=this.u=null;this.ea=a;this.Z.push(g.cp(window,"beforeunload",(0,g.z)(this.ZI,this)));this.B=[];this.Db=new S7;this.ba=b.id;this.u=gJa(this,c);this.u.subscribe("handlerOpened",this.gN,this);this.u.subscribe("handlerClosed",this.dN,this);this.u.subscribe("handlerError",this.eN,this);this.u.subscribe("handlerMessage",this.fN,this);tIa(this.u,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Db.videoId;
g.Zs()&&g.Ws("yt-remote-session-video-id",d)},this)},i8=function(a){j7("conn",a)},gJa=function(a,b){return new c7(g7(a.ea,"/bc"),b,!1,function(){return a.OG()})},j8=function(a,b){a.V("proxyStateChange",b)},hJa=function(a){a.F=g.Fo((0,g.z)(function(){i8("Connecting timeout");
this.Im(1)},a),2E4)},k8=function(a){g.Ho(a.F);
a.F=NaN},l8=function(a){g.Ho(a.W);
a.W=NaN},iJa=function(a){m8(a);
a.P=g.Fo((0,g.z)(function(){n8(this,"getNowPlaying")},a),2E4)},m8=function(a){g.Ho(a.P);
a.P=NaN},kJa=function(a,b){b&&(k8(a),l8(a));
var c=e7(a.u)&&isNaN(a.F);b==c?b&&(j8(a,1),n8(a,"getSubtitlesTrack")):b?(a.DB()&&a.Db.reset(),j8(a,1),n8(a,"getNowPlaying"),jJa(a)):a.Im(1)},lJa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Db.videoId&&(g.Wb(b.params)?a.Db.u=null:a.Db.u=b.params,a.V("remotePlayerChange"))},mJa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Db.listId=b.params.listId||a.Db.listId;X7(a.Db,c,d);a.V("remoteQueueChange")},oJa=function(a,b){b.params=b.params||{};
mJa(a,b);nJa(a,b);a.V("autoplayDismissed")},nJa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V7(a.Db,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Db.playerState&&(c=-1E3);a.Db.playerState=c;c=Number(b.params.loadedTime);a.Db.P=isNaN(c)?0:c;c=Number(b.params.duration);a.Db.N=isNaN(c)?0:c;c=a.Db;var d=Number(b.params.liveIngestionTime);c.D=d;c.C=isNaN(d)?!1:!0;c=a.Db;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.F=isNaN(d)?0:d;c.B=isNaN(e)?0:e;1==a.Db.playerState?iJa(a):m8(a);a.V("remotePlayerChange")},pJa=function(a,b){if(-1E3!=
a.Db.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Db.playerState=c;c=parseInt(b.params.currentTime,10);V7(a.Db,isNaN(c)?0:c);a.V("remotePlayerChange")}},qJa=function(a,b){var c="true"==b.params.muted;
a.Db.volume=parseInt(b.params.volume,10);a.Db.muted=c;a.V("remotePlayerChange")},rJa=function(a,b){a.I=b.params.videoId;
a.V("nowAutoplaying",parseInt(b.params.timeout,10))},sJa=function(a,b){var c="true"==b.params.hasNext;
a.Db.gi="true"==b.params.hasPrevious;a.Db.hasNext=c;a.V("previousNextChange")},jJa=function(a){g.Ho(a.N);
a.N=g.Fo((0,g.z)(a.Im,a,1),864E5)},n8=function(a,b,c){c?i8("Sending: action="+b+", params="+g.Fj(c)):i8("Sending: action="+b);
a.u.sendMessage(b,c)},o8=function(a){n7.call(this,"ScreenServiceProxy");
this.Xe=a;this.u=[];this.u.push(this.Xe.$_s("screenChange",(0,g.z)(this.IR,this)));this.u.push(this.Xe.$_s("onlineScreenChange",(0,g.z)(this.sO,this)))},xJa=function(a,b){b=g.L("MDX_CONFIG")||b;
nHa();p6();p8||(p8=new f7(b?b.loungeApiHost:void 0),vHa()&&(p8.u="/api/loungedev"));q8||(q8=g.Na("yt.mdx.remote.deferredProxies_")||[],g.Ia("yt.mdx.remote.deferredProxies_",q8,void 0));tJa();var c=r8();if(!c){var d=new w7(p8);g.Ia("yt.mdx.remote.screenService_",d,void 0);c=r8();var e=!1,f=void 0,h=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,h=b.theme,l=!!b.disableDial);YIa(a,d,function(m){m?s8()&&R7(s8(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){d6("yt-remote-receiver-availability-change")})},
e,f,h,l)}b&&!g.Na("yt.mdx.remote.initialized_")&&(g.Ia("yt.mdx.remote.initialized_",!0,void 0),t8("Initializing: "+g.Fj(b)),u8.push(g.No("yt-remote-cast2-availability-change",function(){d6("yt-remote-receiver-availability-change")})),u8.push(g.No("yt-remote-cast2-receiver-selected",function(){v8(null);
d6("yt-remote-auto-connect","cast-selector-receiver")})),u8.push(g.No("yt-remote-cast2-receiver-resumed",function(){d6("yt-remote-receiver-resumed","cast-selector-receiver")})),u8.push(g.No("yt-remote-cast2-session-change",uJa)),u8.push(g.No("yt-remote-connection-change",function(m){m?R7(s8(),"YouTube TV"):w8()||(R7(null,null),aJa())})),e=x8(),b.isAuto&&(e.id+="#dial"),g.uo("desktop_enable_autoplay")&&(e.capabilities=["atp"]),e.name=b.device,e.app=b.app,(h=b.theme)&&(e.theme=h),t8(" -- with channel params: "+
g.Fj(e)),vJa(e),c.start(),s8()||wJa())},zJa=function(){var a=yJa();
O7()&&g.Xs("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},yJa=function(){var a=r8().Xe.$_gos();
var b=y8();b&&z8()&&(k6(a,b)||a.push(b));return mHa(a)},A8=function(){var a=AJa();
!a&&O7()&&$Ia()&&(a={key:"cast-selector-receiver",name:$Ia()});return a},AJa=function(){var a=yJa(),b=y8();
b||(b=w8());return g.jb(a,function(c){return b&&g6(b,c.key)?!0:!1})},y8=function(){var a=s8();
if(!a)return null;var b=r8().cg();return l6(b,a)},uJa=function(a){t8("remote.onCastSessionChange_: "+h6(a));
if(a){var b=y8();b&&b.id==a.id?R7(b.id,"YouTube TV"):(b&&B8(),C8(a,1))}else z8()&&B8()},B8=function(){P7()?M7().stopSession():K7("stopSession called before API ready.");
var a=z8();a&&(a.disconnect(1),D8(null))},E8=function(){var a=z8();
return!!a&&3!=a.getProxyState()},t8=function(a){j7("remote",a)},r8=function(){if(!F8){var a=g.Na("yt.mdx.remote.screenService_");
F8=a?new o8(a):null}return F8},s8=function(){return g.Na("yt.mdx.remote.currentScreenId_")},BJa=function(a){g.Ia("yt.mdx.remote.currentScreenId_",a,void 0)},CJa=function(){return g.Na("yt.mdx.remote.connectData_")},v8=function(a){g.Ia("yt.mdx.remote.connectData_",a,void 0)},z8=function(){return g.Na("yt.mdx.remote.connection_")},D8=function(a){var b=z8();
v8(null);a||BJa("");g.Ia("yt.mdx.remote.connection_",a,void 0);q8&&(g.Gb(q8,function(c){c(a)}),q8.length=0);
b&&!a?d6("yt-remote-connection-change",!1):!b&&a&&d6("yt-remote-connection-change",!0)},w8=function(){var a=g.Zs();
if(!a)return null;var b=r8();if(!b)return null;b=b.cg();return l6(b,a)},C8=function(a,b){s8();
y8()&&y8();if(G8)H8=a;else{BJa(a.id);var c=new h8(p8,a,x8());c.connect(b,CJa());c.subscribe("beforeDisconnect",function(d){d6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){z8()&&(z8(),D8(null))});
D8(c)}},wJa=function(){var a=w8();
a?(t8("Resume connection to: "+h6(a)),C8(a,0)):(q6(),aJa(),t8("Skipping connecting because no session screen found."))},tJa=function(){var a=x8();
if(g.Wb(a)){a=o6();var b=g.Xs("yt-remote-session-name")||"",c=g.Xs("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ia("yt.mdx.remote.channelParams_",a,void 0)}},x8=function(){return g.Na("yt.mdx.remote.channelParams_")||{}},vJa=function(a){a?(g.Ws("yt-remote-session-app",a.app),g.Ws("yt-remote-session-name",a.name)):(g.Ys("yt-remote-session-app"),g.Ys("yt-remote-session-name"));
g.Ia("yt.mdx.remote.channelParams_",a,void 0)},I8=function(a,b,c){g.B.call(this);
var d=this;this.B=a;this.J=b;this.tb=c;this.events=new g.Wr(this);this.W=this.events.R(this.J,"onVolumeChange",this.jE);this.F=!1;this.suggestion=null;this.I=new g.bL(64);this.u=new g.H(this.WF,500,this);this.C=new g.H(this.XF,1E3,this);this.N=new u6(this.mR,0,this);this.D={};this.P=new g.H(this.zG,1E3,this);this.K=new v6(this.seekTo,1E3,this);this.X=g.Oa;g.C(this,this.events);this.events.R(b,"onCaptionsTrackListChanged",this.VN);this.events.R(b,"captionschanged",this.ZM);this.events.R(b,"captionssettingschanged",
this.aG);this.events.R(b,"videoplayerreset",this.Pt);this.events.R(b,"mdxautoplaycancel",function(){d.tb.VA()});
a=this.tb;a.la();a.subscribe("proxyStateChange",this.CE,this);a.subscribe("remotePlayerChange",this.Pp,this);a.subscribe("remoteQueueChange",this.Pt,this);a.subscribe("previousNextChange",this.yE,this);a.subscribe("nowAutoplaying",this.tE,this);a.subscribe("autoplayDismissed",this.UD,this);g.C(this,this.u);g.C(this,this.C);g.C(this,this.N);g.C(this,this.P);g.C(this,this.K);this.aG();this.Pt();this.Pp()},DJa=function(a){a.Gc(0);
a.u.stop();a.Md(new g.bL(64))},K8=function(a,b){if(J8(a)&&!a.F){var c=null;
b&&(c={style:a.J.getSubtitlesUserSettings()},g.bc(c,b));a.tb.PG(a.J.getVideoData(1).videoId,c);a.D=a8(a.tb).u}},L8=function(a,b){var c=a.J.getPlaylist();
if(c){var d=c.index;var e=c.listId.toString()}c=a.J.getVideoData(1);a.tb.playVideo(c.videoId,b,d,e,c.playerParams,c.Ag,$Ga(c));a.Md(new g.bL(1))},EJa=function(a,b){if(b){var c=a.J.getOption("captions","tracklist",{dC:1});
c&&c.length?(a.J.setOption("captions","track",b),a.F=!1):(a.J.loadModule("captions"),a.F=!0)}else a.J.setOption("captions","track",{})},J8=function(a){return a8(a.tb).videoId===a.J.getVideoData(1).videoId},M8=function(){g.V.call(this,{G:"div",
L:"ytp-mdx-manual-pairing-popup-dialog",U:{role:"dialog"},S:[{G:"div",L:"ytp-mdx-manual-pairing-popup-dialog-inner-content",S:[{G:"div",L:"ytp-mdx-manual-pairing-popup-title",Y:"Connecting to your TV on web using a code will be going away soon"},{G:"div",L:"ytp-mdx-manual-pairing-popup-buttons",S:[{G:"button",ia:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],Y:"Learn more"},{G:"button",ia:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],Y:"OK"}]}]}]});this.u=new g.PN(this,250);this.learnMoreButton=
this.ga("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.ga("ytp-mdx-manual-pairing-popup-ok");g.C(this,this.u);this.R(this.learnMoreButton,"click",this.B);this.R(this.okButton,"click",this.C)},N8=function(){g.V.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",U:{role:"dialog"},S:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",S:[{G:"div",L:"ytp-mdx-popup-title",Y:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",Y:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",S:[{G:"button",ia:["ytp-button","ytp-mdx-privacy-popup-cancel"],Y:"Cancel"},{G:"button",ia:["ytp-button","ytp-mdx-privacy-popup-confirm"],
Y:"Confirm"}]}]}]});this.u=new g.PN(this,250);this.cancelButton=this.ga("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.ga("ytp-mdx-privacy-popup-confirm");g.C(this,this.u);this.R(this.cancelButton,"click",this.B);this.R(this.confirmButton,"click",this.C)},O8=function(a){g.V.call(this,{G:"div",
L:"ytp-remote",S:[{G:"div",L:"ytp-remote-display-status",S:[{G:"div",L:"ytp-remote-display-status-icon",S:[g.iN()]},{G:"div",L:"ytp-remote-display-status-text",Y:"{{statustext}}"}]}]});this.api=a;this.u=new g.PN(this,250);g.C(this,this.u);this.R(a,"presentingplayerstatechange",this.B);FJa(this,g.lI(a))},FJa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
c=g.T(b,128)?g.jJ("Error on $RECEIVER_NAME",c):b.Gb()||g.T(b,4)?g.jJ("Playing on $RECEIVER_NAME",c):g.jJ("Connected to $RECEIVER_NAME",c);a.wa("statustext",c);a.u.show()}else a.u.hide()},P8=function(a,b){g.LZ.call(this,"Play on",0,a,b);
this.J=a;this.Fk={};this.R(a,"onMdxReceiversChange",this.D);this.R(a,"presentingplayerstatechange",this.D);this.D()},Q8=function(a){g.pS.call(this,a);
this.oh={key:j6(),name:"This computer"};this.Sh=null;this.subscriptions=[];this.Ux=this.tb=null;this.Fk=[this.oh];this.Xj=this.oh;this.Bc=new g.bL(64);this.xC=0;this.ke=-1;this.gn=null;this.Rp=this.Us=!1;this.Wl=this.Gn=null;if(!g.aC(this.player.T())){a=this.player;var b=g.JW(a);b&&(b=b.wl())&&(b=new P8(a,b),g.C(this,b));b=new O8(a);g.C(this,b);g.oP(a,b.element,4);this.Gn=new N8;g.C(this,this.Gn);g.oP(a,this.Gn.element,4);g.R(this.player.T().experiments,"pair_servlet_deprecation_warning_enabled")&&
!g.R(this.player.T().experiments,"deprecate_pair_servlet_enabled")&&(this.gn=new M8,g.C(this,this.gn),g.oP(a,this.gn.element,4));this.Rp=!!w8();this.Us=!!g.Xs("yt-remote-manual-pairing-warning-shown")}},R8=function(a){a.Wl&&(a.player.removeEventListener("presentingplayerstatechange",a.Wl),a.Wl=null)},GJa=function(a,b,c){a.Bc=c;
a.player.V("presentingplayerstatechange",new g.vI(c,b))},HJa=function(a,b,c){var d=!1;
1===b?d=!a.Rp:2===b&&(d=!a.Us);d&&g.xI(c,8)&&(a.player.pauseVideo(),R8(a))},S8=function(a,b){if(b.key!==a.Xj.key)if(b.key===a.oh.key)B8();
else{if(a.gn&&!a.Us&&b!==a.oh&&"cast-selector-receiver"!==b.key&&g.kC(a.player.T()))IJa(a);else{var c;(c=!g.R(a.player.T().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.L("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.L("SESSION_INDEX")&&!g.L("LOGGED_IN")))||a.Rp||!a.Gn);(c?0:g.kC(a.player.T())||g.oC(a.player.T()))&&JJa(a)}a.Xj=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&
g.R(a.player.T().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.getLength();l++)h[l]=f.Ka(l).videoId}else h=[e];f=a.player.getCurrentTime(1);d={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ag,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=$Ga(c))&&(d.locationInfo=c);c=d}t8("Connecting to: "+g.Fj(b));"cast-selector-receiver"==b.key?(v8(c||null),c=
c||null,P7()?M7().setLaunchParams(c):K7("setLaunchParams called before ready.")):!c&&E8()&&s8()==b.key?d6("yt-remote-connection-change",!0):(B8(),v8(c||null),c=r8().cg(),(c=l6(c,b.key))&&C8(c,1))}},JJa=function(a){g.lI(a.player).Gb()?a.player.pauseVideo():(a.Wl=function(b){HJa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.Wl));
a.Gn&&a.Gn.tc();z8()||(G8=!0)},IJa=function(a){g.lI(a.player).Gb()?a.player.pauseVideo():(a.Wl=function(b){HJa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.Wl));
a.gn&&a.gn.tc();z8()||(G8=!0)},MHa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},K6={"'":"\\'"},KJa={},iHa={oS:"atp",qV:"ska",aV:"que",qU:"mus",pV:"sus",pT:"dsp",hV:"seq"},r6,n6="",AHa=wHa("loadCastFramework")||wHa("loadCastApplicationFramework"),XIa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ya(u6,g.B);g.k=u6.prototype;g.k.WI=function(a){this.D=arguments;this.u=!1;this.Ua?this.C=g.A()+this.Ze:this.Ua=g.Um(this.F,this.Ze)};
g.k.stop=function(){this.Ua&&(g.v.clearTimeout(this.Ua),this.Ua=null);this.C=null;this.u=!1;this.D=[]};
g.k.pause=function(){++this.B};
g.k.resume=function(){this.B&&(--this.B,!this.B&&this.u&&(this.u=!1,this.I.apply(null,this.D)))};
g.k.aa=function(){this.stop();u6.jd.aa.call(this)};
g.k.XI=function(){this.C?(this.Ua=g.Um(this.F,this.C-g.A()),this.C=null):(this.Ua=null,this.B?this.u=!0:(this.u=!1,this.I.apply(null,this.D)))};g.u(v6,g.B);g.k=v6.prototype;g.k.OC=function(a){this.C=arguments;this.Ua||this.B?this.u=!0:w6(this)};
g.k.stop=function(){this.Ua&&(g.v.clearTimeout(this.Ua),this.Ua=null,this.u=!1,this.C=null)};
g.k.pause=function(){this.B++};
g.k.resume=function(){this.B--;this.B||!this.u||this.Ua||(this.u=!1,w6(this))};
g.k.aa=function(){g.B.prototype.aa.call(this);this.stop()};y6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
y6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};var A6=new g.im;g.u(DHa,g.Ll);C6.prototype.u=null;C6.prototype.getOptions=function(){var a;(a=this.u)||(a={},FHa(this)&&(a[0]=!0,a[1]=!0),a=this.u=a);return a};var T8;g.Ya(EHa,C6);T8=new EHa;g.k=D6.prototype;g.k.zl=null;g.k.Fh=!1;g.k.Yn=null;g.k.jz=null;g.k.Ln=null;g.k.Sn=null;g.k.Rj=null;g.k.Gk=null;g.k.Xl=null;g.k.be=null;g.k.Gq=0;g.k.Kh=null;g.k.Eu=null;g.k.gk=null;g.k.Xo=-1;g.k.NF=!0;g.k.al=!1;g.k.Aw=0;g.k.Yt=null;var KHa={},G6={};g.k=D6.prototype;g.k.setTimeout=function(a){this.F=a};
g.k.sQ=function(a){a=a.target;var b=this.Yt;b&&3==P6(a)?b.OC():this.LG(a)};
g.k.LG=function(a){try{if(a==this.be)a:{var b=P6(this.be),c=this.be.I,d=this.be.getStatus();if(g.ye&&!g.ae(10)||g.Ae&&!g.$d("420+")){if(4>b)break a}else if(3>b||3==b&&!g.rg&&!R6(this.be))break a;this.al||4!=b||7==c||(8==c||0>=d?this.u.xh(3):this.u.xh(2));L6(this);var e=this.be.getStatus();this.Xo=e;var f=R6(this.be);(this.Fh=200==e)?(4==b&&I6(this),this.I?(LHa(this,b,f),g.rg&&this.Fh&&3==b&&(this.D.ua(this.C,"tick",this.mQ),this.C.start())):H6(this,f),this.Fh&&!this.al&&(4==b?this.u.ks(this):(this.Fh=
!1,F6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.gk=3,B6(13)):(this.gk=0,B6(14)),I6(this),J6(this))}}catch(h){this.be&&R6(this.be)}finally{}};
g.k.mQ=function(){var a=P6(this.be),b=R6(this.be);this.Gq<b.length&&(L6(this),LHa(this,a,b),this.Fh&&4!=a&&F6(this))};
g.k.GP=function(a){z6((0,g.z)(this.FP,this,a),0)};
g.k.FP=function(a){this.al||(L6(this),H6(this,a),F6(this))};
g.k.LE=function(a){z6((0,g.z)(this.EP,this,a),0)};
g.k.EP=function(a){this.al||(I6(this),this.Fh=a,this.u.ks(this),this.u.xh(4))};
g.k.cancel=function(){this.al=!0;I6(this)};
g.k.SP=function(){this.Yn=null;var a=g.A();0<=a-this.jz?(2!=this.Sn&&this.u.xh(3),I6(this),this.gk=2,B6(18),J6(this)):PHa(this,this.jz-a)};
g.k.getLastError=function(){return this.gk};g.Ya(N6,g.im);var WHa=/^https?$/i,LJa=["POST","PUT"];g.k=N6.prototype;
g.k.send=function(a,b,c,d){if(this.u)throw Error("[goog.net.XhrIo] Object is active with another request="+this.P+"; newUri="+a);b=b?b.toUpperCase():"GET";this.P=a;this.D="";this.I=0;this.ra=b;this.ea=!1;this.B=!0;this.u=this.ba?GHa(this.ba):GHa(T8);this.Z=this.ba?this.ba.getOptions():T8.getOptions();this.u.onreadystatechange=(0,g.z)(this.zE,this);try{c6(Q6(this,"Opening Xhr")),this.ha=!0,this.u.open(b,String(a),!0),this.ha=!1}catch(f){c6(Q6(this,"Error opening Xhr: "+f.message));VHa(this,f);return}a=
c||"";var e=this.headers.clone();d&&eHa(d,function(f,h){e.set(h,f)});
d=g.jb(e.xg(),THa);c=g.v.FormData&&a instanceof g.v.FormData;!g.nb(LJa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.u.setRequestHeader(h,f)},this);
this.Aa&&(this.u.responseType=this.Aa);"withCredentials"in this.u&&this.u.withCredentials!==this.da&&(this.u.withCredentials=this.da);try{YHa(this),0<this.K&&(this.X=SHa(this.u),c6(Q6(this,"Will abort after "+this.K+"ms if incomplete, xhr2 "+this.X)),this.X?(this.u.timeout=this.K,this.u.ontimeout=(0,g.z)(this.OB,this)):this.W=g.Um(this.OB,this.K,this)),c6(Q6(this,"Sending request")),this.N=!0,this.u.send(a),this.N=!1}catch(f){c6(Q6(this,"Send error: "+f.message)),VHa(this,f)}};
g.k.OB=function(){"undefined"!=typeof g.$0&&this.u&&(this.D="Timed out after "+this.K+"ms, aborting",this.I=8,Q6(this,this.D),this.dispatchEvent("timeout"),this.abort(8))};
g.k.abort=function(a){this.u&&this.B&&(Q6(this,"Aborting"),this.B=!1,this.F=!0,this.u.abort(),this.F=!1,this.I=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),O6(this))};
g.k.aa=function(){this.u&&(this.B&&(this.B=!1,this.F=!0,this.u.abort(),this.F=!1),O6(this,!0));N6.jd.aa.call(this)};
g.k.zE=function(){this.la()||(this.ha||this.N||this.F?XHa(this):this.PO())};
g.k.PO=function(){XHa(this)};
g.k.isActive=function(){return!!this.u};
g.k.getStatus=function(){try{return 2<P6(this)?this.u.status:-1}catch(a){return-1}};
g.k.getLastError=function(){return"string"===typeof this.D?this.D:String(this.D)};g.k=ZHa.prototype;g.k.yw=null;g.k.Uf=null;g.k.Zt=!1;g.k.NB=null;g.k.Gr=null;g.k.dx=null;g.k.zw=null;g.k.Ha=null;g.k.fj=-1;g.k.Wo=null;g.k.ro=null;g.k.connect=function(a){this.zw=a;a=S6(this.u,null,this.zw);B6(3);this.NB=g.A();var b=this.u.K;null!=b?(this.Wo=b[0],(this.ro=b[1])?(this.Ha=1,$Ha(this)):(this.Ha=2,U6(this))):(a6(a,"MODE","init"),this.Uf=new D6(this,void 0,void 0,void 0),this.Uf.zl=this.yw,E6(this.Uf,a,!1,null,!0),this.Ha=0)};
g.k.WH=function(a){if(a)this.Ha=2,U6(this);else{B6(4);var b=this.u;b.fi=b.Vj.fj;a7(b,9)}a&&this.xh(2)};
g.k.Lv=function(a){return this.u.Lv(a)};
g.k.abort=function(){this.Uf&&(this.Uf.cancel(),this.Uf=null);this.fj=-1};
g.k.MB=function(){return!1};
g.k.DE=function(a,b){this.fj=a.Xo;if(0==this.Ha)if(b){try{var c=this.B.parse(b)}catch(d){c=this.u;c.fi=this.fj;a7(c,2);return}this.Wo=c[0];this.ro=c[1]}else c=this.u,c.fi=this.fj,a7(c,2);else if(2==this.Ha)if(this.Zt)B6(7),this.dx=g.A();else if("11111"==b){if(B6(6),this.Zt=!0,this.Gr=g.A(),c=this.Gr-this.NB,!g.ye||g.ae(10)||500>c)this.fj=200,this.Uf.cancel(),B6(12),T6(this.u,this,!0)}else B6(8),this.Gr=this.dx=g.A(),this.Zt=!1};
g.k.ks=function(){this.fj=this.Uf.Xo;if(this.Uf.Fh)0==this.Ha?this.ro?(this.Ha=1,$Ha(this)):(this.Ha=2,U6(this)):2==this.Ha&&((!g.ye||g.ae(10)?!this.Zt:200>this.dx-this.Gr)?(B6(11),T6(this.u,this,!1)):(B6(12),T6(this.u,this,!0)));else{0==this.Ha?B6(9):2==this.Ha&&B6(10);var a=this.u;this.Uf.getLastError();a.fi=this.fj;a7(a,2)}};
g.k.mq=function(){return this.u.mq()};
g.k.isActive=function(){return this.u.isActive()};
g.k.xh=function(a){this.u.xh(a)};g.k=V6.prototype;g.k.Sm=null;g.k.Ko=null;g.k.Jf=null;g.k.xd=null;g.k.xw=null;g.k.Ir=null;g.k.sA=null;g.k.hs=null;g.k.Ip=0;g.k.nM=0;g.k.Ve=null;g.k.Zj=null;g.k.Ri=null;g.k.kl=null;g.k.Vj=null;g.k.Cu=null;g.k.dn=-1;g.k.wC=-1;g.k.fi=-1;g.k.Nm=0;g.k.xm=0;g.k.bl=8;g.Ya(bIa,g.Ll);g.Ya(cIa,g.Ll);g.k=V6.prototype;g.k.connect=function(a,b,c,d,e){B6(0);this.xw=b;this.Ko=c||{};d&&void 0!==e&&(this.Ko.OSID=d,this.Ko.OAID=e);this.F?(z6((0,g.z)(this.IA,this,a),100),gIa(this)):this.IA(a)};
g.k.IA=function(a){this.Vj=new ZHa(this);this.Vj.yw=this.Sm;this.Vj.B=this.D;this.Vj.connect(a)};
g.k.MB=function(){return 0==this.Ha};
g.k.getState=function(){return this.Ha};
g.k.KE=function(a){this.Zj=null;kIa(this,a)};
g.k.JE=function(){this.Ri=null;this.xd=new D6(this,this.B,"rpc",this.I);this.xd.zl=this.Sm;this.xd.Aw=0;var a=this.sA.clone();Z5(a,"RID","rpc");Z5(a,"SID",this.B);Z5(a,"CI",this.Cu?"0":"1");Z5(a,"AID",this.dn);W6(this,a);if(!g.ye||g.ae(10))Z5(a,"TYPE","xmlhttp"),E6(this.xd,a,!0,this.hs,!1);else{Z5(a,"TYPE","html");var b=this.xd,c=!!this.hs;b.Sn=3;b.Rj=$5(a.clone());OHa(b,c)}};
g.k.DE=function(a,b){if(0!=this.Ha&&(this.xd==a||this.Jf==a))if(this.fi=a.Xo,this.Jf==a&&3==this.Ha)if(7<this.bl){try{var c=this.D.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Ri){if(this.xd)if(this.xd.Ln+3E3<this.Jf.Ln)Y6(this),this.xd.cancel(),this.xd=null;else break a;$6(this);B6(19)}}else this.wC=c[1],0<this.wC-this.dn&&37500>c[2]&&this.Cu&&0==this.xm&&!this.kl&&(this.kl=z6((0,g.z)(this.TM,this),6E3));else a7(this,11)}else b!=KJa.MS.u&&a7(this,11);else if(this.xd==
a&&Y6(this),!g.rc(b)){c=this.D.parse(b);for(var d=0;d<c.length;d++){var e=c[d];this.dn=e[0];e=e[1];2==this.Ha?"c"==e[0]?(this.B=e[1],this.hs=e[2],e=e[3],null!=e?this.bl=e:this.bl=6,this.Ha=3,this.Ve&&this.Ve.EA(),this.sA=S6(this,this.mq()?this.hs:null,this.xw),lIa(this)):"stop"==e[0]&&a7(this,7):3==this.Ha&&("stop"==e[0]?a7(this,7):"noop"!=e[0]&&this.Ve&&this.Ve.DA(e),this.xm=0)}}};
g.k.TM=function(){null!=this.kl&&(this.kl=null,this.xd.cancel(),this.xd=null,$6(this),B6(20))};
g.k.ks=function(a){if(this.xd==a){Y6(this);this.xd=null;var b=2}else if(this.Jf==a)this.Jf=null,b=1;else return;this.fi=a.Xo;if(0!=this.Ha)if(a.Fh)1==b?(b=A6,b.dispatchEvent(new bIa(b,a.Xl?a.Xl.length:0,g.A()-a.Ln,this.Nm)),X6(this),this.C.length=0):lIa(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.fi)){if(d=1==b)this.Jf||this.Zj||1==this.Ha||2<=this.Nm?d=!1:(this.Zj=z6((0,g.z)(this.KE,this,a),mIa(this,this.Nm)),this.Nm++,d=!0);d=!(d||2==b&&$6(this))}if(d)switch(c){case 1:a7(this,
5);break;case 4:a7(this,10);break;case 3:a7(this,6);break;case 7:a7(this,12);break;default:a7(this,2)}}};
g.k.sI=function(a){if(!g.nb(arguments,this.Ha))throw Error("Unexpected channel state: "+this.Ha);};
g.k.ZQ=function(a){a?B6(2):(B6(1),nIa(this,8))};
g.k.Lv=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new N6;a.da=!1;return a};
g.k.isActive=function(){return!!this.Ve&&this.Ve.isActive(this)};
g.k.xh=function(a){var b=A6;b.dispatchEvent(new cIa(b,a))};
g.k.mq=function(){return!(!g.ye||g.ae(10))};
g.k=oIa.prototype;g.k.EA=function(){};
g.k.DA=function(){};
g.k.CA=function(){};
g.k.zv=function(){};
g.k.nB=function(){return{}};
g.k.isActive=function(){return!0};g.k=pIa.prototype;g.k.isEmpty=function(){return g.ob(this.u)&&g.ob(this.B)};
g.k.clear=function(){this.u=[];this.B=[]};
g.k.contains=function(a){return g.nb(this.u,a)||g.nb(this.B,a)};
g.k.remove=function(a){var b=this.u;var c=(0,g.TAa)(b,a);0<=c?(g.qb(b,c),b=!0):b=!1;return b||g.rb(this.B,a)};
g.k.mf=function(){for(var a=[],b=this.u.length-1;0<=b;--b)a.push(this.u[b]);var c=this.B.length;for(b=0;b<c;++b)a.push(this.B[b]);return a};g.Ya(b7,g.B);g.k=b7.prototype;g.k.zP=function(){this.Ze=Math.min(3E5,2*this.Ze);this.C();this.B&&this.start()};
g.k.start=function(){var a=this.Ze+15E3*Math.random();this.u.xb(a);this.B=g.A()+a};
g.k.stop=function(){this.u.stop();this.B=0};
g.k.isActive=function(){return this.u.isActive()};
g.k.reset=function(){this.u.stop();this.Ze=5E3};g.Ya(c7,oIa);g.k=c7.prototype;g.k.subscribe=function(a,b,c){return this.C.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.C.unsubscribe(a,b,c)};
g.k.yk=function(a){return this.C.Al(a)};
g.k.V=function(a,b){return this.C.V.apply(this.C,arguments)};
g.k.dispose=function(){this.Od||(this.Od=!0,g.eg(this.C),sIa(this),g.eg(this.B),this.B=null,this.X=function(){return""})};
g.k.la=function(){return this.Od};
g.k.connect=function(a,b,c){if(!this.u||2!=this.u.getState()){this.P="";this.B.stop();this.F=a||null;this.D=b||0;a=this.W+"/test";b=this.W+"/bind";var d=new V6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Z),e=this.u;e&&(e.Ve=null);d.Ve=this;this.u=d;d7(this);e?(3!=e.getState()&&0==iIa(e)||e.getState(),this.u.connect(a,b,this.I,e.B,e.dn)):c?this.u.connect(a,b,this.I,c.sessionId,c.arrayId):this.u.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){var c={_sc:a};b&&g.bc(c,b);this.B.isActive()||2==(this.u?this.u.getState():0)?this.K.push(c):e7(this)&&(d7(this),hIa(this.u,c))};
g.k.EA=function(){this.B.reset();this.F=null;this.D=0;if(this.K.length){var a=this.K;this.K=[];for(var b=0,c=a.length;b<c;++b)hIa(this.u,a[b])}this.V("handlerOpened")};
g.k.CA=function(a){var b=2==a&&401==this.u.fi;4==a||b||this.B.start();this.V("handlerError",a)};
g.k.zv=function(a){if(!this.B.isActive())this.V("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.K.push(d)}};
g.k.nB=function(){var a={v:2};this.P&&(a.gsessionid=this.P);0!=this.D&&(a.ui=""+this.D);0!=this.N&&(a.ui=""+this.N);this.F&&g.bc(a,this.F);return a};
g.k.DA=function(a){"S"==a[0]?this.P=a[1]:"gracefulReconnect"==a[0]?(this.B.start(),fIa(this.u)):this.V("handlerMessage",new qIa(a[0],a[1]))};
g.k.EQ=function(){this.B.isActive();0==iIa(this.u)&&this.connect(this.F,this.D)};f7.prototype.D=function(a,b,c,d){b?a(d):a({text:c.responseText})};
f7.prototype.C=function(a,b){a(Error("Request error: "+b.status))};
f7.prototype.F=function(a){a(Error("request timed out"))};var AIa=g.A(),i7=null,l7=Array(50),k7=-1,m7=!1;g.Ya(n7,g.P);n7.prototype.cg=function(){return this.screens};
n7.prototype.contains=function(a){return!!k6(this.screens,a)};
n7.prototype.get=function(a){return a?l6(this.screens,a):null};
n7.prototype.info=function(a){j7(this.I,a)};g.u(o7,g.P);g.k=o7.prototype;g.k.start=function(){!this.u&&isNaN(this.Ua)&&this.QG()};
g.k.stop=function(){this.u&&(this.u.abort(),this.u=null);isNaN(this.Ua)||(g.Ho(this.Ua),this.Ua=NaN)};
g.k.aa=function(){this.stop();g.P.prototype.aa.call(this)};
g.k.QG=function(){this.Ua=NaN;this.u=g.oq(g7(this.I,"/pairing/get_screen"),{method:"POST",dc:{pairing_code:this.F},timeout:5E3,onSuccess:(0,g.z)(this.GR,this),onError:(0,g.z)(this.FR,this),Pf:(0,g.z)(this.HR,this)})};
g.k.GR=function(a,b){this.u=null;var c=b.screen||{};c.dialId=this.C;c.name=this.D;this.V("pairingComplete",new f6(c))};
g.k.FR=function(a){this.u=null;a.status&&404==a.status?this.B>=MJa.length?this.V("pairingFailed",Error("DIAL polling timed out")):(a=MJa[this.B],this.Ua=g.Fo((0,g.z)(this.QG,this),a),this.B++):this.V("pairingFailed",Error("Server error "+a.status))};
g.k.HR=function(){this.u=null;this.V("pairingFailed",Error("Server not responding"))};
var MJa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ya(q7,n7);g.k=q7.prototype;g.k.start=function(){p7(this)&&this.V("screenChange");!g.Xs("yt-remote-lounge-token-expiration")&&EIa(this);g.Ho(this.u);this.u=g.Fo((0,g.z)(this.start,this),1E4)};
g.k.add=function(a,b){p7(this);BIa(this,a);r7(this,!1);this.V("screenChange");b(a);a.token||EIa(this)};
g.k.remove=function(a,b){var c=p7(this);DIa(this,a)&&(r7(this,!1),c=!0);b(a);c&&this.V("screenChange")};
g.k.Au=function(a,b,c,d){var e=p7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,r7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.V("screenChange")};
g.k.aa=function(){g.Ho(this.u);q7.jd.aa.call(this)};
g.k.gJ=function(a){p7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}r7(this,!b);b&&j7(this.I,"Missed "+b+" lounge tokens.")};
g.k.fJ=function(a){j7(this.I,"Requesting lounge tokens failed: "+a)};g.u(t7,g.P);g.k=t7.prototype;g.k.start=function(){var a=parseInt(g.Xs("yt-remote-fast-check-period")||"0",10);(this.D=g.A()-144E5<a?0:a)?v7(this):(this.D=g.A()+3E5,g.Ws("yt-remote-fast-check-period",this.D),this.ky())};
g.k.isEmpty=function(){return g.Wb(this.u)};
g.k.update=function(){s7("Updating availability on schedule.");var a=this.I(),b=g.Kb(this.u,function(c,d){return c&&!!l6(a,d)},this);
u7(this,b)};
g.k.aa=function(){g.Ho(this.C);this.C=NaN;this.B&&(this.B.abort(),this.B=null);g.P.prototype.aa.call(this)};
g.k.ky=function(){g.Ho(this.C);this.C=NaN;this.B&&this.B.abort();var a=HIa(this);if(b6(a)){var b=g7(this.F,"/pairing/get_screen_availability");this.B=h7(this.F,b,{lounge_token:g.Qb(a).join(",")},(0,g.z)(this.kP,this,a),(0,g.z)(this.jP,this))}else u7(this,{}),v7(this)};
g.k.kP=function(a,b){this.B=null;var c=g.Qb(HIa(this));if(g.Eb(c,g.Qb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;u7(this,d);v7(this)}else this.Yc("Changing Screen set during request."),this.ky()};
g.k.jP=function(a){this.Yc("Screen availability failed: "+a);this.B=null;v7(this)};
g.k.Yc=function(a){j7("OnlineScreenService",a)};g.Ya(w7,n7);g.k=w7.prototype;g.k.start=function(){this.B.start();this.u.start();this.screens.length&&(this.V("screenChange"),this.u.isEmpty()||this.V("onlineScreenChange"))};
g.k.add=function(a,b,c){this.B.add(a,b,c)};
g.k.remove=function(a,b,c){this.B.remove(a,b,c);this.u.update()};
g.k.Au=function(a,b,c,d){this.B.contains(a)?this.B.Au(a,b,c,d):(a="Updating name of unknown screen: "+a.name,j7(this.I,a),d(Error(a)))};
g.k.cg=function(a){return a?this.screens:g.tb(this.screens,g.Ke(this.C,function(b){return!this.contains(b)},this))};
g.k.SG=function(){return g.Ke(this.cg(!0),function(a){return!!this.u.u[a.id]},this)};
g.k.TG=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new o7(this.F,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(h){g.eg(f);d(x7(this,h))},this));
f.subscribe("pairingFailed",function(h){g.eg(f);e(h)});
f.start();return(0,g.z)(f.stop,f)};
g.k.JR=function(a,b,c,d){g.oq(g7(this.F,"/pairing/get_screen"),{method:"POST",dc:{pairing_code:a},timeout:5E3,onSuccess:(0,g.z)(function(e,f){var h=new f6(f.screen||{});if(!h.name||LIa(this,h.name)){a:{var l=h.name;for(var m=2,n=b(l,m);LIa(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}h.name=l}c(x7(this,h))},this),
onError:(0,g.z)(function(e){d(Error("pairing request failed: "+e.status))},this),
Pf:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.k.aa=function(){g.eg(this.B);g.eg(this.u);w7.jd.aa.call(this)};
g.k.nJ=function(){MIa(this);this.V("screenChange");this.u.update()};
w7.prototype.dispose=w7.prototype.dispose;g.Ya(z7,g.P);g.k=z7.prototype;g.k.getScreen=function(){return this.K};
g.k.Ot=function(a){this.K=a;this.V("sessionScreen",this.K)};
g.k.kg=function(a){this.la()||(a&&A7(this,""+a),this.K=null,this.V("sessionScreen",null))};
g.k.info=function(a){j7(this.Z,a)};
g.k.VG=function(){return null};
g.k.uy=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){A7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.aa=function(){this.uy("");z7.jd.aa.call(this)};g.u(B7,z7);g.k=B7.prototype;g.k.ty=function(a){if(this.B){if(this.B==a)return;A7(this,"Overriding cast sesison with new session object");this.B.removeUpdateListener(this.F);this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D)}this.B=a;this.B.addUpdateListener(this.F);this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.D);OIa(this)};
g.k.en=function(a){this.info("launchWithParams no-op for Cast: "+g.Fj(a))};
g.k.stop=function(){this.B?this.B.stop((0,g.z)(function(){this.kg()},this),(0,g.z)(function(){this.kg(Error("Failed to stop receiver app."))},this)):this.kg(Error("Stopping cast device witout session."))};
g.k.uy=function(){};
g.k.aa=function(){this.info("disposeInternal");g.Ho(this.C);this.C=0;this.B&&(this.B.removeUpdateListener(this.F),this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D));this.B=null;z7.prototype.aa.call(this)};
g.k.ZP=function(a,b){if(!this.la())if(b){var c=x6(b);if(g.Sa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Fj(c));switch(d){case "mdxSessionStatus":NIa(this,c.screenId);break;default:A7(this,"Unknown youtube message: "+d)}}else A7(this,"Unable to parse message.")}else A7(this,"No data in message.")};
g.k.FB=function(a,b,c,d){KIa(this.N,this.u.label,a,this.u.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(A7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Fo((0,g.z)(this.FB,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.VG=function(){return this.B};
g.k.KR=function(a){this.la()||a||(A7(this,"Cast session died."),this.kg())};g.u(C7,z7);g.k=C7.prototype;g.k.ty=function(a){this.C=a;this.C.addUpdateListener(this.X)};
g.k.en=function(a){this.W=a;this.F()};
g.k.stop=function(){this.B();this.B=g.Oa;g.Ho(this.D);this.C?this.C.stop((0,g.z)(this.kg,this,null),(0,g.z)(this.kg,this,"Failed to stop DIAL device.")):this.kg()};
g.k.aa=function(){this.B();this.B=g.Oa;g.Ho(this.D);this.C&&this.C.removeUpdateListener(this.X);this.C=null;z7.prototype.aa.call(this)};
g.k.NR=function(a){this.la()||a||(A7(this,"DIAL session died."),this.B(),this.B=g.Oa,this.kg())};
g.k.Kw=function(a){this.P=j6();if(this.W){var b=new chrome.cast.DialLaunchResponse(!0,QIa(this));a(b);PIa(this)}else this.F=(0,g.z)(function(){g.Ho(this.D);this.F=g.Oa;this.D=NaN;var c=new chrome.cast.DialLaunchResponse(!0,QIa(this));a(c);PIa(this)},this),this.D=g.Fo((0,g.z)(function(){this.F()},this),100)};
g.k.EJ=function(a,b,c){KIa(this.N,this.I.receiver.label,a,this.u.friendlyName,(0,g.z)(function(d){d&&d.token?(this.Ot(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Kw(b,c)},this),(0,g.z)(function(d){A7(this,"Failed to get DIAL screen: "+d);
this.Kw(b,c)},this))};g.u(D7,z7);D7.prototype.stop=function(){this.kg()};
D7.prototype.ty=function(){};
D7.prototype.en=function(){g.Ho(this.B);this.B=NaN;var a=l6(this.N.cg(),this.u.label);a?this.Ot(a):this.kg(Error("No such screen"))};
D7.prototype.aa=function(){g.Ho(this.B);this.B=NaN;z7.prototype.aa.call(this)};g.u(E7,g.P);g.k=E7.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.K);this.N||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.z)(this.UO,this);c=new chrome.cast.ApiConfig(c,(0,g.z)(this.FE,this),f,d,e);c.customDialLaunchCallback=(0,g.z)(this.sN,this);chrome.cast.initialize(c,(0,g.z)(function(){this.la()||
(chrome.cast.addReceiverActionListener(this.D),xIa(),this.B.subscribe("onlineScreenChange",(0,g.z)(this.UG,this)),this.C=SIa(this),chrome.cast.setCustomReceivers(this.C,g.Oa,(0,g.z)(function(h){this.Yc("Failed to set initial custom receivers: "+g.Fj(h))},this)),this.V("yt-remote-cast2-availability-change",G7(this)),b(!0))},this),(0,g.z)(function(h){this.Yc("Failed to initialize API: "+g.Fj(h));
b(!1)},this))};
g.k.LQ=function(a,b){F7("Setting connected screen ID: "+a+" -> "+b);if(this.u){var c=this.u.getScreen();if(!a||c&&c.id!=a)F7("Unsetting old screen status: "+this.u.u.friendlyName),H7(this,null)}if(a&&b){if(!this.u){c=l6(this.B.cg(),a);if(!c){F7("setConnectedScreenStatus: Unknown screen.");return}var d=RIa(this,c);d||(F7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.C.push(d),chrome.cast.setCustomReceivers(this.C,
g.Oa,(0,g.z)(function(e){this.Yc("Failed to set initial custom receivers: "+g.Fj(e))},this)));
F7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);H7(this,new D7(this.B,d),!0)}this.u.uy(b)}else F7("setConnectedScreenStatus: no screen.")};
g.k.MQ=function(a){this.la()?this.Yc("Setting connection data on disposed cast v2"):this.u?this.u.en(a):this.Yc("Setting connection data without a session")};
g.k.MR=function(){this.la()?this.Yc("Stopping session on disposed cast v2"):this.u?(this.u.stop(),H7(this,null)):F7("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.z)(this.FE,this),(0,g.z)(this.mP,this))};
g.k.aa=function(){this.B.unsubscribe("onlineScreenChange",(0,g.z)(this.UG,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=uIa,b=g.Na("yt.mdx.remote.debug.handlers_");g.rb(b||[],a);g.eg(this.u);g.P.prototype.aa.call(this)};
g.k.Yc=function(a){j7("Controller",a)};
g.k.HE=function(a,b){this.u==a&&(b||H7(this,null),this.V("yt-remote-cast2-session-change",b))};
g.k.QO=function(a,b){if(!this.la())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.u)if(this.u.u.label!=a.label)F7("onReceiverAction_: Stopping active receiver: "+this.u.u.friendlyName),this.u.stop();else{F7("onReceiverAction_: Casting to active receiver.");this.u.getScreen()&&this.V("yt-remote-cast2-session-change",this.u.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H7(this,
new D7(this.B,a));break;case chrome.cast.ReceiverType.DIAL:H7(this,new C7(this.B,a,this.I));break;case chrome.cast.ReceiverType.CAST:H7(this,new B7(this.B,a));break;default:this.Yc("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.u&&this.u.u.label==a.label?this.u.stop():this.Yc("Stopping receiver w/o session: "+a.friendlyName)}else this.Yc("onReceiverAction_ called without receiver.")};
g.k.sN=function(a){if(this.la())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Yc("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.u?this.u.u:null;if(!c||c.label!=b.label)return this.Yc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.u.getScreen())return F7("Reselecting dial screen."),
this.V("yt-remote-cast2-session-change",this.u.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Yc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H7(this,new C7(this.B,b,this.I))}b=this.u;b.I=a;return b.I.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.z)(b.EJ,b,(b.I.extraData||{}).screenId||null)):new Promise((0,g.z)(b.Kw,b))};
g.k.FE=function(a){if(!this.la()){F7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.u)if(b.receiverType==chrome.cast.ReceiverType.CAST)F7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),H7(this,new B7(this.B,b),!0);else{this.Yc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.u.u,d=l6(this.B.cg(),c.label);d&&g6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(F7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.eg(this.u),this.u=new B7(this.B,b),this.u.subscribe("sessionScreen",(0,g.z)(this.HE,this,this.u)),this.u.en(null));this.u.ty(a)}}};
g.k.LR=function(){return this.u?this.u.VG():null};
g.k.mP=function(a){this.la()||(this.Yc("Failed to estabilish a session: "+g.Fj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H7(this,null))};
g.k.UO=function(a){F7("Receiver availability updated: "+a);if(!this.la()){var b=G7(this);this.F=a==chrome.cast.ReceiverAvailability.AVAILABLE;G7(this)!=b&&this.V("yt-remote-cast2-availability-change",G7(this))}};
g.k.UG=function(){this.la()||(this.C=SIa(this),F7("Updating custom receivers: "+g.Fj(this.C)),chrome.cast.setCustomReceivers(this.C,g.Oa,(0,g.z)(function(){this.Yc("Failed to set custom receivers.")},this)),this.V("yt-remote-cast2-availability-change",G7(this)))};
E7.prototype.setLaunchParams=E7.prototype.MQ;E7.prototype.setConnectedScreenStatus=E7.prototype.LQ;E7.prototype.stopSession=E7.prototype.MR;E7.prototype.getCastSession=E7.prototype.LR;E7.prototype.requestSession=E7.prototype.requestSession;E7.prototype.init=E7.prototype.init;E7.prototype.dispose=E7.prototype.dispose;var N7=[];g.k=S7.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";T7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.u=a.trackData,this.gi=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.I=a.playerTimeAt,this.F=a.seekableStart,this.B=a.seekableEnd,this.N=a.duration,this.P=a.loadedTime,this.D=a.liveIngestionTime,this.C=!isNaN(this.D))};
g.k.Gb=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.getDuration=function(){return this.C?this.N+U7(this):this.N};
g.k.clone=function(){return new S7(Y7(this))};g.u($7,g.P);g.k=$7.prototype;g.k.getState=function(){return this.Ha};
g.k.play=function(){b8(this)?(this.u?this.u.play(null,g.Oa,g8(this,"play")):f8(this,"play"),e8(this,1,W7(a8(this))),this.V("remotePlayerChange")):c8(this,this.play)};
g.k.pause=function(){b8(this)?(this.u?this.u.pause(null,g.Oa,g8(this,"pause")):f8(this,"pause"),e8(this,2,W7(a8(this))),this.V("remotePlayerChange")):c8(this,this.pause)};
g.k.seekTo=function(a){if(b8(this)){if(this.u){var b=a8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Gb()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Oa,g8(this,"seekTo",{newTime:a}))}else f8(this,"seekTo",{newTime:a});e8(this,3,a);this.V("remotePlayerChange")}else c8(this,g.Wa(this.seekTo,a))};
g.k.stop=function(){if(b8(this)){this.u?this.u.stop(null,g.Oa,g8(this,"stopVideo")):f8(this,"stopVideo");var a=a8(this);a.index=-1;a.videoId="";T7(a);d8(this,a);this.V("remotePlayerChange")}else c8(this,this.stop)};
g.k.setVolume=function(a,b){if(b8(this)){var c=a8(this);if(this.B){if(c.volume!=a){var d=Math.round(a)/100;this.B.setReceiverVolumeLevel(d,(0,g.z)(function(){j7("CP","set receiver volume: "+d)},this),(0,g.z)(function(){this.Yc("failed to set receiver volume.")},this))}c.muted!=b&&this.B.setReceiverMuted(b,(0,g.z)(function(){j7("CP","set receiver muted: "+b)},this),(0,g.z)(function(){this.Yc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f8(this,"setVolume",e)}c.muted=b;c.volume=a;d8(this,c)}else c8(this,g.Wa(this.setVolume,a,b))};
g.k.PG=function(a,b){if(b8(this)){var c=a8(this),d={videoId:a};b&&(c.u={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Fj(b.style),g.bc(d,c.u));f8(this,"setSubtitlesTrack",d);d8(this,c)}else c8(this,g.Wa(this.PG,a,b))};
g.k.setAudioTrack=function(a,b){if(b8(this)){var c=b.getLanguageInfo().getId();f8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=a8(this);d.audioTrackId=c;d8(this,d)}else c8(this,g.Wa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){var l=a8(this);c=c||0;var m={videoId:a,currentIndex:c};X7(l,a,c);void 0!==b&&(V7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=h&&(m.locationInfo=g.Fj(h));f8(this,"setPlaylist",m);d||d8(this,l)};
g.k.Ut=function(a,b){if(b8(this)){if(a&&b){var c=a8(this);X7(c,a,b);d8(this,c)}f8(this,"previous")}else c8(this,g.Wa(this.Ut,a,b))};
g.k.nextVideo=function(a,b){if(b8(this)){if(a&&b){var c=a8(this);X7(c,a,b);d8(this,c)}f8(this,"next")}else c8(this,g.Wa(this.nextVideo,a,b))};
g.k.VA=function(){b8(this)?f8(this,"dismissAutoplay"):c8(this,this.VA)};
g.k.dispose=function(){if(3!=this.Ha){var a=this.Ha;this.Ha=3;this.V("proxyStateChange",a,this.Ha)}g.P.prototype.dispose.call(this)};
g.k.aa=function(){eJa(this);this.C=null;this.D.clear();Z7(this,null);g.P.prototype.aa.call(this)};
g.k.mz=function(a){if((a!=this.Ha||2==a)&&3!=this.Ha&&0!=a){var b=this.Ha;this.Ha=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,g.ob(b.u)&&(b.u=b.B,b.u.reverse(),b.B=[]),a.u.pop().apply(this);else 3==a&&this.dispose()}};
g.k.MO=function(a,b){this.V(a,b)};
g.k.cN=function(a){if(!a)this.Kp(null),Z7(this,null);else if(this.B.receiver.volume){a=this.B.receiver.volume;var b=a8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)j7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d8(this,b)}};
g.k.Kp=function(a){j7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.K);if(this.u=a)this.u.addUpdateListener(this.K),fJa(this),this.V("remotePlayerChange")};
g.k.bN=function(a){a?(fJa(this),this.V("remotePlayerChange")):this.Kp(null)};
g.k.Ny=function(){f8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.kN=function(){var a=bJa();a&&Z7(this,a)};
g.k.Yc=function(a){j7("CP",a)};g.u(h8,g.P);g.k=h8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,h=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==h&&(l.currentIndex=h);c&&(this.Db.listId=c);this.Db.videoId=d;this.Db.index=h||0;this.Db.state=3;V7(this.Db,m);this.D="UNSUPPORTED";i8("Connecting with setPlaylist and params: "+g.Fj(l));this.u.connect({method:"setPlaylist",
params:g.Fj(l)},a,qHa())}else i8("Connecting without params"),this.u.connect({},a,qHa());hJa(this)};
g.k.dispose=function(){this.la()||(this.V("beforeDispose"),j8(this,3));g.P.prototype.dispose.call(this)};
g.k.aa=function(){k8(this);m8(this);l8(this);g.Ho(this.K);this.K=NaN;g.Ho(this.N);this.N=NaN;this.C=null;g.dp(this.Z);this.Z.length=0;this.u.dispose();g.P.prototype.aa.call(this);this.D=this.I=this.B=this.Db=this.u=null};
g.k.ZI=function(){this.Im(2)};
g.k.gN=function(){i8("Channel opened");this.X&&(this.X=!1,l8(this),this.W=g.Fo((0,g.z)(function(){i8("Timing out waiting for a screen.");this.Im(1)},this),15E3));
uHa(rIa(this.u),this.ba)};
g.k.dN=function(){i8("Channel closed");isNaN(this.F)?q6(!0):q6();this.dispose()};
g.k.eN=function(a){q6();isNaN(this.So())?(i8("Channel error: "+a+" without reconnection"),this.dispose()):(this.X=!0,i8("Channel error: "+a+" with reconnection in "+this.So()+" ms"),j8(this,2))};
g.k.fN=function(a){a.params?i8("Received: action="+a.action+", params="+g.Fj(a.params)):i8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=x6(a.params.devices);this.B=g.Pc(a,function(c){return new e6(c)});
a=!!g.jb(this.B,function(c){return"LOUNGE_SCREEN"==c.type});
kJa(this,a);break;case "loungeScreenDisconnected":g.sb(this.B,function(c){return"LOUNGE_SCREEN"==c.type});
kJa(this,!1);break;case "remoteConnected":var b=new e6(x6(a.params.device));g.jb(this.B,function(c){return b?c.id==b.id:!1})||aHa(this.B,b);
break;case "remoteDisconnected":b=new e6(x6(a.params.device));g.sb(this.B,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":mJa(this,a);break;case "nowPlaying":oJa(this,a);break;case "onStateChange":nJa(this,a);break;case "onAdStateChange":pJa(this,a);break;case "onVolumeChanged":qJa(this,a);break;case "onSubtitlesTrackChanged":lJa(this,a);break;case "nowAutoplaying":rJa(this,a);break;case "autoplayDismissed":this.V("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.V("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.D=
a.params.autoplayMode;this.V("autoplayModeChange",this.D);"DISABLED"==this.D&&this.V("autoplayDismissed");break;case "onHasPreviousNextChanged":sJa(this,a);break;case "requestAssistedSignIn":this.V("assistedSignInRequested",a.params.authCode);break;default:i8("Unrecognized action: "+a.action)}};
g.k.AQ=function(){if(this.C){var a=this.C;this.C=null;this.Db.videoId!=a&&n8(this,"getNowPlaying")}};
g.k.QI=function(){var a=3;this.la()||(a=0,isNaN(this.So())?e7(this.u)&&isNaN(this.F)&&(a=1):a=2);return a};
g.k.Im=function(a){i8("Disconnecting with "+a);k8(this);this.V("beforeDisconnect",a);1==a&&q6();sIa(this.u,a);this.dispose()};
g.k.NI=function(){var a=this.Db;this.C&&(a=this.Db.clone(),X7(a,this.C,a.index));return Y7(a)};
g.k.NQ=function(a){var b=new S7(a);b.videoId&&b.videoId!=this.Db.videoId&&(this.C=b.videoId,g.Ho(this.K),this.K=g.Fo((0,g.z)(this.AQ,this),5E3));var c=[];this.Db.listId==b.listId&&this.Db.videoId==b.videoId&&this.Db.index==b.index||c.push("remoteQueueChange");this.Db.playerState==b.playerState&&this.Db.volume==b.volume&&this.Db.muted==b.muted&&W7(this.Db)==W7(b)&&g.Fj(this.Db.u)==g.Fj(b.u)||c.push("remotePlayerChange");this.Db.reset(a);g.Gb(c,function(d){this.V(d)},this)};
g.k.DB=function(){var a=this.u.I.id,b=g.jb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.So=function(){var a=this.u;return a.B.isActive()?a.B.B-g.A():NaN};
g.k.BI=function(){return this.D||"UNSUPPORTED"};
g.k.CI=function(){return this.I||""};
g.k.ER=function(){if(!isNaN(this.So())){var a=this.u.B;g.tn(a.u);a.start()}};
g.k.JQ=function(a,b){n8(this,a,b);jJa(this)};
g.k.OG=function(){var a=g.wq("SID","")||"",b=g.wq("SAPISID","")||"",c=g.wq("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.qf(g.Ve(a),2);b=g.qf(g.Ve(b),2);c=g.qf(g.Ve(c),2);return g.qf(g.Ve(a+","+b+","+c),2)};
h8.prototype.subscribe=h8.prototype.subscribe;h8.prototype.unsubscribeByKey=h8.prototype.yk;h8.prototype.getProxyState=h8.prototype.QI;h8.prototype.disconnect=h8.prototype.Im;h8.prototype.getPlayerContextData=h8.prototype.NI;h8.prototype.setPlayerContextData=h8.prototype.NQ;h8.prototype.getOtherConnectedRemoteId=h8.prototype.DB;h8.prototype.getReconnectTimeout=h8.prototype.So;h8.prototype.getAutoplayMode=h8.prototype.BI;h8.prototype.getAutoplayVideoId=h8.prototype.CI;h8.prototype.reconnect=h8.prototype.ER;
h8.prototype.sendMessage=h8.prototype.JQ;h8.prototype.getXsrfToken=h8.prototype.OG;g.u(o8,n7);g.k=o8.prototype;g.k.cg=function(a){return this.Xe.$_gs(a)};
g.k.contains=function(a){return!!this.Xe.$_c(a)};
g.k.get=function(a){return this.Xe.$_g(a)};
g.k.start=function(){this.Xe.$_st()};
g.k.add=function(a,b,c){this.Xe.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Xe.$_r(a,b,c)};
g.k.Au=function(a,b,c,d){this.Xe.$_un(a,b,c,d)};
g.k.aa=function(){for(var a=0,b=this.u.length;a<b;++a)this.Xe.$_ubk(this.u[a]);this.u.length=0;this.Xe=null;n7.prototype.aa.call(this)};
g.k.IR=function(){this.V("screenChange")};
g.k.sO=function(){this.V("onlineScreenChange")};
w7.prototype.$_st=w7.prototype.start;w7.prototype.$_gspc=w7.prototype.JR;w7.prototype.$_gsppc=w7.prototype.TG;w7.prototype.$_c=w7.prototype.contains;w7.prototype.$_g=w7.prototype.get;w7.prototype.$_a=w7.prototype.add;w7.prototype.$_un=w7.prototype.Au;w7.prototype.$_r=w7.prototype.remove;w7.prototype.$_gs=w7.prototype.cg;w7.prototype.$_gos=w7.prototype.SG;w7.prototype.$_s=w7.prototype.subscribe;w7.prototype.$_ubk=w7.prototype.yk;var H8=null,G8=!1,p8=null,q8=null,F8=null,u8=[];g.u(I8,g.B);g.k=I8.prototype;g.k.aa=function(){g.B.prototype.aa.call(this);this.u.stop();this.C.stop();this.N.stop();this.X();var a=this.tb;a.unsubscribe("proxyStateChange",this.CE,this);a.unsubscribe("remotePlayerChange",this.Pp,this);a.unsubscribe("remoteQueueChange",this.Pt,this);a.unsubscribe("previousNextChange",this.yE,this);a.unsubscribe("nowAutoplaying",this.tE,this);a.unsubscribe("autoplayDismissed",this.UD,this);this.tb=this.B=null};
g.k.gD=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.tb.Ha)if(J8(this)){if(!a8(this.tb).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":a8(this.tb).Gb()?this.tb.pause():this.tb.play();break;case "control_play":this.tb.play();break;case "control_pause":this.tb.pause();break;case "control_seek":this.K.OC(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.J.getCurrentTime();L8(this,0===c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.ZM=function(a){this.N.WI(a)};
g.k.mR=function(a){this.gD("control_subtitles_set_track",g.Wb(a)?null:a)};
g.k.aG=function(){var a=this.J.getOption("captions","track");g.Wb(a)||K8(this,a)};
g.k.Gc=function(a){this.B.Gc(a,this.J.getVideoData().lengthSeconds)};
g.k.jE=function(a){if(J8(this)){this.tb.unsubscribe("remotePlayerChange",this.Pp,this);var b=Math.round(a.volume);a=!!a.muted;var c=a8(this.tb);if(b!==c.volume||a!==c.muted)this.tb.setVolume(b,a),this.P.start();this.tb.subscribe("remotePlayerChange",this.Pp,this)}};
g.k.VN=function(){g.Wb(this.D)||EJa(this,this.D);this.F=!1};
g.k.CE=function(a,b){this.C.stop();2===b&&this.XF()};
g.k.Pp=function(){if(J8(this)){this.u.stop();var a=a8(this.tb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.ke=1;break;case 1082:case 1083:this.B.ke=0;break;default:this.B.ke=-1}switch(a.playerState){case 1081:case 1:this.Md(new g.bL(8));this.WF();break;case 1085:case 3:this.Md(new g.bL(9));break;case 1083:case 0:this.Md(new g.bL(2));this.K.stop();this.Gc(this.J.getVideoData().lengthSeconds);break;case 1084:this.Md(new g.bL(4));break;case 2:this.Md(new g.bL(4));this.Gc(W7(a));
break;case -1:this.Md(new g.bL(64));break;case -1E3:this.Md(new g.bL(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=a8(this.tb).u;var b=this.D;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.D=a,EJa(this,a));a=a8(this.tb);-1===a.volume||Math.round(this.J.getVolume())===a.volume&&this.J.isMuted()===a.muted||this.P.isActive()||this.zG()}else DJa(this)};
g.k.yE=function(){this.J.V("mdxpreviousnextchange")};
g.k.Pt=function(){J8(this)||DJa(this)};
g.k.tE=function(a){isNaN(a)||this.J.V("mdxnowautoplaying",a)};
g.k.UD=function(){this.J.V("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){J8(this)&&this.tb.setAudioTrack(this.J.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===a8(this.tb).playerState?L8(this,a):b&&this.tb.seekTo(a)};
g.k.zG=function(){if(J8(this)){var a=a8(this.tb);this.events.Eb(this.W);a.muted?this.J.mute():this.J.unMute();this.J.setVolume(a.volume);this.W=this.events.R(this.J,"onVolumeChange",this.jE)}};
g.k.WF=function(){this.u.stop();if(!this.tb.la()){var a=a8(this.tb);a.Gb()&&this.Md(new g.bL(8));this.Gc(W7(a));this.u.start()}};
g.k.XF=function(){this.C.stop();this.u.stop();var a=this.tb.C.getReconnectTimeout();2==this.tb.Ha&&!isNaN(a)&&this.C.start()};
g.k.Md=function(a){this.C.stop();var b=this.I;if(!g.gL(b,a)){var c=g.T(a,2);c!==g.T(this.I,2)&&g.t0(this.J.app,c);this.I=a;GJa(this.B,b,a)}};g.u(M8,g.V);M8.prototype.tc=function(){this.u.show()};
M8.prototype.fb=function(){this.u.hide()};
M8.prototype.B=function(){g.sK("https://web.archive.org/web/20201101001345/https://support.google.com/youtube/answer/7640706")};
M8.prototype.C=function(){d6("mdx-manual-pairing-popup-ok");this.fb()};g.u(N8,g.V);N8.prototype.tc=function(){this.u.show()};
N8.prototype.fb=function(){this.u.hide()};
N8.prototype.B=function(){d6("mdx-privacy-popup-cancel");this.fb()};
N8.prototype.C=function(){d6("mdx-privacy-popup-confirm");this.fb()};g.u(O8,g.V);O8.prototype.B=function(a){FJa(this,a.state)};g.u(P8,g.LZ);P8.prototype.D=function(){var a=this.J.getOption("remote","receivers");a&&1<a.length&&!this.J.getOption("remote","quickCast")?(this.Fk=g.Hb(a,this.u,this),g.MZ(this,g.Pc(a,this.u)),a=this.J.getOption("remote","currentReceiver"),this.zc(this.u(a)),this.enable(!0)):this.enable(!1)};
P8.prototype.u=function(a){return a.key};
P8.prototype.rh=function(a){return"cast-selector-receiver"===a?"Cast...":this.Fk[a].name};
P8.prototype.Be=function(a){g.LZ.prototype.Be.call(this,a);this.J.setOption("remote","currentReceiver",this.Fk[a]);this.Ta.fb()};g.u(Q8,g.pS);g.k=Q8.prototype;
g.k.create=function(){var a=this.player.T(),b=g.RB(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:g.R(a.experiments,"mdx_load_cast_api_bootstrap_script")};xJa(b,a);this.subscriptions.push(g.No("yt-remote-before-disconnect",this.XM,this));this.subscriptions.push(g.No("yt-remote-connection-change",this.VO,this));this.subscriptions.push(g.No("yt-remote-receiver-availability-change",this.AE,this));this.subscriptions.push(g.No("yt-remote-auto-connect",this.TO,this));this.subscriptions.push(g.No("yt-remote-receiver-resumed",
this.SO,this));this.subscriptions.push(g.No("mdx-privacy-popup-confirm",this.qQ,this));this.subscriptions.push(g.No("mdx-privacy-popup-cancel",this.pQ,this));this.subscriptions.push(g.No("mdx-manual-pairing-popup-ok",this.SJ,this));this.AE()};
g.k.load=function(){this.player.cancelPlayback();g.pS.prototype.load.call(this);this.Sh=new I8(this,this.player,this.tb);var a=(a=CJa())?a.currentTime:0;var b=E8()?new $7(z8(),void 0):null;0==a&&b&&(a=W7(a8(b)));0!==a&&this.Gc(a);GJa(this,this.Bc,this.Bc);g.B0(this.player.app,6)};
g.k.unload=function(){this.player.V("mdxautoplaycanceled");this.Xj=this.oh;g.fg(this.Sh,this.tb);this.tb=this.Sh=null;g.pS.prototype.unload.call(this);g.B0(this.player.app,5);R8(this)};
g.k.aa=function(){g.Oo(this.subscriptions);g.pS.prototype.aa.call(this)};
g.k.wi=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.Sh.gD.apply(this.Sh,[a].concat(g.la(c)))};
g.k.getAdState=function(){return this.ke};
g.k.SI=function(){return this.loaded?this.Sh.suggestion:null};
g.k.gi=function(){return this.tb?a8(this.tb).gi:!1};
g.k.hasNext=function(){return this.tb?a8(this.tb).hasNext:!1};
g.k.Gc=function(a,b){this.xC=a||0;this.player.V("progresssync",a,b)};
g.k.getCurrentTime=function(){return this.xC};
g.k.getProgressState=function(){var a=a8(this.tb),b=this.player.getVideoData();return{allowSeeking:g.R(this.player.T().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.je():!a.isAdPlaying()&&this.player.je(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.C?a.D+U7(a):a.D,isAtLiveHead:1>=(a.C?a.B+U7(a):a.B)-this.getCurrentTime(),loaded:a.P,seekableEnd:a.C?a.B+U7(a):a.B,seekableStart:0<a.F?a.F+
U7(a):a.F}};
g.k.nextVideo=function(){this.tb&&this.tb.nextVideo()};
g.k.Ut=function(){this.tb&&this.tb.Ut()};
g.k.XM=function(a){1===a&&(this.Ux=this.tb?a8(this.tb):null)};
g.k.VO=function(){var a=E8()?new $7(z8(),void 0):null;if(a){var b=this.Xj;this.loaded&&this.unload();this.tb=a;this.Ux=null;b.key!==this.oh.key&&(this.Xj=b,this.load())}else g.eg(this.tb),this.tb=null,this.loaded&&(this.unload(),(a=this.Ux)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W7(a)));this.player.V("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.AE=function(){this.Fk=[this.oh].concat(zJa());var a=A8()||this.oh;S8(this,a);this.player.va("onMdxReceiversChange")};
g.k.TO=function(){var a=A8();S8(this,a)};
g.k.SO=function(){this.Xj=A8()};
g.k.qQ=function(){this.Rp=!0;R8(this);G8=!1;H8&&C8(H8,1);H8=null};
g.k.pQ=function(){this.Rp=!1;R8(this);S8(this,this.oh);this.Xj=this.oh;G8=!1;H8=null;this.player.playVideo()};
g.k.SJ=function(){this.Us=!0;R8(this);g.Ws("yt-remote-manual-pairing-warning-shown",!0,2592E3);G8=!1;H8&&C8(H8,1);H8=null};
g.k.ee=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Fk;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q7():S8(this,b)),this.loaded?this.Xj:this.oh;case "quickCast":return 2===this.Fk.length&&"cast-selector-receiver"===this.Fk[1].key?(b&&Q7(),!0):!1}};
g.k.Ny=function(){this.tb.Ny()};
g.k.Eh=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.qX.remote=Q8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:13:45 Nov 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:47 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 809.034
  exclusion.robots: 0.102
  exclusion.robots.policy: 0.091
  cdx.remote: 0.066
  esindex: 0.01
  LoadShardBlock: 403.38 (3)
  PetaboxLoader3.datanode: 423.551 (5)
  load_resource: 118.991 (2)
  PetaboxLoader3.resolve: 91.719 (2)
*/