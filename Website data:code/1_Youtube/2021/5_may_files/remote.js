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

(function(g){var window=this;'use strict';var tKa=function(a,b){return g.Mb(a,b)},uKa=function(a){if(a instanceof g.Xi)return a;
if("function"==typeof a.yg)return a.yg(!1);if(g.Ma(a)){var b=0,c=new g.Xi;c.next=function(){for(;;){if(b>=a.length)throw g.Qm;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");},vKa=function(a,b,c){if(g.Ma(a))try{g.Ab(a,b,c)}catch(d){if(d!==g.Qm)throw d;
}else{a=uKa(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Qm)throw d;}}},J4=function(a,b,c){a.l.set(b,c)},K4=function(a){J4(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Sa()).toString(36));
return a},L4=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.fn(a.l,b,c)},wKa=function(a,b){var c=[];
vKa(b,function(d){try{var e=g.Yn.prototype.l.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Xn(e)&&c.push(d)},a);
return c},xKa=function(a,b){b=wKa(a,b);
g.Ab(b,function(c){g.Yn.prototype.remove.call(this,c)},a)},yKa=function(a){if(a.V){if(a.V.locationOverrideToken)return{locationOverrideToken:a.V.locationOverrideToken};
if(null!=a.V.latitudeE7&&null!=a.V.longitudeE7)return{latitudeE7:a.V.latitudeE7,longitudeE7:a.V.longitudeE7}}return null},zKa=function(a,b){g.gb(a,b)||a.push(b)},M4=function(a){var b=0,c;
for(c in a)b++;return b},AKa=function(a,b){b=b instanceof g.Bc?b:g.Jc(b,/^data:image\//i.test(b));
a.src=g.Cc(b)},BKa=function(a){try{return g.B.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},CKa=function(a){if(a.Hg&&"function"==typeof a.Hg)return a.Hg();
if("string"===typeof a)return a.split("");if(g.Ma(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Jb(a)},DKa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ma(a)||"string"===typeof a)g.Ab(a,b,void 0);else{if(a.Jh&&"function"==typeof a.Jh)var c=a.Jh();else if(a.Hg&&"function"==typeof a.Hg)c=void 0;else if(g.Ma(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Kb(a);d=CKa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},EKa=function(a,b,c,d){var e=new g.Um(null,void 0);
a&&g.Vm(e,a);b&&g.Wm(e,b);c&&g.Xm(e,c);d&&(e.J=d);return e},N4=function(){},O4=function(a,b){g.Sq[a]=!0;
var c=g.Qq();c&&c.publish.apply(c,arguments);g.Sq[a]=!1},P4=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Rm;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",FKa(this,a.capabilities||""),GKa(this,a.experiments||""),
this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"")},FKa=function(a,b){a.capabilities.clear();
g.Ke(b.split(","),g.Qa(tKa,HKa)).forEach(function(c){a.capabilities.add(c)})},GKa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},Q4=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},R4=function(a,b){return!!b&&(a.id==b||a.uuid==b)},IKa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},JKa=function(a){return new Q4(a)},KKa=function(a){return Array.isArray(a)?g.Pc(a,JKa):[]},S4=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},T4=function(a){return Array.isArray(a)?"["+g.Pc(a,S4).join(",")+"]":"null"},U4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},LKa=function(a){return g.Pc(a,function(b){return{key:b.id,
name:b.name}})},V4=function(a,b){return g.db(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},W4=function(a,b){return g.db(a,function(c){return R4(c,b)})},MKa=function(){var a=(0,g.jv)();
a&&xKa(a,a.i.yg(!0))},X4=function(){var a=g.mv("yt-remote-connected-devices")||[];
g.xb(a);return a},NKa=function(a){if(g.ib(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Pc(a,function(d,e){return 0==e?d:d.substring(c.length)})},OKa=function(a){g.lv("yt-remote-connected-devices",a,86400)},Z4=function(){if(Y4)return Y4;
var a=g.mv("yt-remote-device-id");a||(a=U4(),g.lv("yt-remote-device-id",a,31536E3));for(var b=X4(),c=1,d=a;g.gb(b,d);)c++,d=a+"#"+c;return Y4=d},$4=function(){var a=X4(),b=Z4();
g.gb(a,b);g.pv()&&g.zb(a,b);a=NKa(a);if(g.ib(a))try{g.Ho("remote_sid")}catch(c){}else try{g.Fo("remote_sid",a.join(","),-1)}catch(c){}},PKa=function(){return g.mv("yt-remote-session-browser-channel")},QKa=function(){return g.mv("yt-remote-local-screens")||[]},RKa=function(){g.lv("yt-remote-lounge-token-expiration",!0,86400)},SKa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Pc(QKa(),function(d){return d.loungeToken}),c=g.Pc(a,function(d){return d.loungeToken});
g.gh(c,function(d){return!g.gb(b,d)})&&RKa();
g.lv("yt-remote-local-screens",a,31536E3)},TKa=function(a,b){g.lv("yt-remote-session-browser-channel",a);
g.lv("yt-remote-session-screen-id",b);a=X4();b=Z4();g.gb(a,b)||a.push(b);OKa(a);$4()},a5=function(a){a||(g.ov("yt-remote-session-screen-id"),g.ov("yt-remote-session-video-id"));
$4();a=X4();g.lb(a,Z4());OKa(a)},UKa=function(){if(!b5){var a=g.qo();
a&&(b5=new g.Sn(a))}},VKa=function(){UKa();
return b5?!!b5.get("yt-remote-use-staging-server"):!1},c5=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},WKa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},XKa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},d5=function(a){a.length?YKa(a.shift(),function(){d5(a)}):e5()},ZKa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},YKa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Ud(d,g.hg(a));(document.head||document.documentElement).appendChild(d)},$Ka=function(){var a=c5(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20210601003345/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20210601003345/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},e5=function(){var a=XKa();
a&&a(!1,"No cast extension found")},f5=function(){if(aLa){var a=2,b=XKa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;YKa("//web.archive.org/web/20210601003345/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",e5,c)}},bLa=function(){f5();
var a=$Ka();a.push("//web.archive.org/web/20210601003345/https://www.gstatic.com/eureka/clank/cast_sender.js");d5(a)},dLa=function(){f5();
var a=$Ka();a.push.apply(a,g.ma(cLa.map(ZKa)));a.push("//web.archive.org/web/20210601003345/https://www.gstatic.com/eureka/clank/cast_sender.js");d5(a)},g5=function(a,b,c){g.F.call(this);
this.G=null!=c?(0,g.C)(a,c):a;this.Kf=b;this.C=(0,g.C)(this.bM,this);this.i=!1;this.l=0;this.u=this.Hb=null;this.B=[]},h5=function(a,b,c){g.F.call(this);
this.B=null!=c?a.bind(c):a;this.Kf=b;this.u=null;this.i=!1;this.l=0;this.Hb=null},i5=function(a){a.Hb=g.Im(function(){a.Hb=null;
a.i&&!a.l&&(a.i=!1,i5(a))},a.Kf);
var b=a.u;a.u=null;a.B.apply(null,b)},j5=function(a){if(g.B.JSON)try{return g.B.JSON.parse(a)}catch(b){}return BKa(a)},k5=function(){},l5=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.B.setTimeout(function(){a()},b)},n5=function(a){m5.dispatchEvent(new eLa(m5,a))},eLa=function(a,b){g.yl.call(this,"statevent",a);
this.stat=b},o5=function(){},fLa=function(){},hLa=function(a){return(a=gLa(a))?new ActiveXObject(a):new XMLHttpRequest},gLa=function(a){if(!a.l&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.l=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.l},p5=function(a,b,c,d){this.i=a;
this.l=b;this.L=c;this.J=d||1;this.C=45E3;this.B=new g.a0(this);this.u=new g.Hm;this.u.setInterval(250)},jLa=function(a,b,c){a.Tq=1;
a.Ll=K4(b.clone());a.Vo=c;a.G=!0;iLa(a,null)},q5=function(a,b,c,d,e){a.Tq=1;
a.Ll=K4(b.clone());a.Vo=null;a.G=c;e&&(a.kJ=!1);iLa(a,d)},iLa=function(a,b){a.Jq=Date.now();
r5(a);a.Nm=a.Ll.clone();L4(a.Nm,"t",a.J);a.Hu=0;a.Me=a.i.Yz(a.i.fu()?b:null);0<a.Sy&&(a.lx=new h5((0,g.C)(a.gK,a,a.Me),a.Sy));a.B.Pa(a.Me,"readystatechange",a.nS);b=a.pn?g.Tb(a.pn):{};a.Vo?(a.Yx="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Me.send(a.Nm,a.Yx,a.Vo,b)):(a.Yx="GET",a.kJ&&!g.Ae&&(b.Connection="close"),a.Me.send(a.Nm,a.Yx,null,b));a.i.Hi(1)},mLa=function(a,b,c){for(var d=!0;!a.Mn&&a.Hu<c.length;){var e=kLa(a,c);
if(e==s5){4==b&&(a.Gl=4,n5(15),d=!1);break}else if(e==lLa){a.Gl=4;n5(16);d=!1;break}else t5(a,e)}4==b&&0==c.length&&(a.Gl=1,n5(17),d=!1);a.Ui=a.Ui&&d;d||(u5(a),v5(a))},kLa=function(a,b){var c=a.Hu,d=b.indexOf("\n",c);
if(-1==d)return s5;c=Number(b.substring(c,d));if(isNaN(c))return lLa;d+=1;if(d+c>b.length)return s5;b=b.substr(d,c);a.Hu=d+c;return b},oLa=function(a,b){a.Jq=Date.now();
r5(a);var c=b?window.location.hostname:"";a.Nm=a.Ll.clone();J4(a.Nm,"DOMAIN",c);J4(a.Nm,"t",a.J);try{a.Zi=new ActiveXObject("htmlfile")}catch(m){u5(a);a.Gl=7;n5(22);v5(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in w5)f=w5[f];else if(f in nLa)f=w5[f]=nLa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
w5[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.fd(g.dc("b/12014412"),d+"</body></html>");a.Zi.open();a.Zi.write(g.bd(c));a.Zi.close();a.Zi.parentWindow.m=(0,g.C)(a.MR,a);a.Zi.parentWindow.d=(0,g.C)(a.AI,a,!0);a.Zi.parentWindow.rpcClose=(0,g.C)(a.AI,a,!1);c=a.Zi.createElement("DIV");a.Zi.parentWindow.document.body.appendChild(c);d=g.Ic(a.Nm.toString());d=g.nd(g.Cc(d));d=g.fd(g.dc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.gd(c,d);a.i.Hi(1)},r5=function(a){a.mD=Date.now()+
a.C;
pLa(a,a.C)},pLa=function(a,b){if(null!=a.Yq)throw Error("WatchDog timer not null");
a.Yq=l5((0,g.C)(a.UR,a),b)},x5=function(a){a.Yq&&(g.B.clearTimeout(a.Yq),a.Yq=null)},v5=function(a){a.i.fE()||a.Mn||a.i.Tu(a)},u5=function(a){x5(a);
g.Ci(a.lx);a.lx=null;a.u.stop();g.aFa(a.B);if(a.Me){var b=a.Me;a.Me=null;b.abort();b.dispose()}a.Zi&&(a.Zi=null)},t5=function(a,b){try{a.i.tI(a,b),a.i.Hi(4)}catch(c){}},rLa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;qLa(a,b,function(h){h?c(!0):g.B.setTimeout(function(){rLa(a,b,c,d,f)},f)})}},qLa=function(a,b,c){var d=new Image;
d.onload=function(){try{y5(d),c(!0)}catch(e){}};
d.onerror=function(){try{y5(d),c(!1)}catch(e){}};
d.onabort=function(){try{y5(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{y5(d),c(!1)}catch(e){}};
g.B.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
AKa(d,a)},y5=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},z5=function(a){g.Xl.call(this);
this.headers=new g.Rm;this.va=a||null;this.B=!1;this.ma=this.i=null;this.Ga=this.V="";this.G=0;this.u="";this.C=this.Aa=this.L=this.xa=!1;this.J=0;this.X=null;this.Na="";this.Y=this.Da=!1},sLa=function(a){return g.ye&&g.be(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},tLa=function(a){return"content-type"==a.toLowerCase()},vLa=function(a,b){a.B=!1;
a.i&&(a.C=!0,a.i.abort(),a.C=!1);a.u=b;a.G=5;uLa(a);A5(a)},uLa=function(a){a.xa||(a.xa=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},xLa=function(a){if(a.B&&"undefined"!=typeof g.e0)if(a.ma[1]&&4==B5(a)&&2==a.getStatus())C5(a,"Local request error detected and ignored");
else if(a.L&&4==B5(a))g.Im(a.qI,0,a);else if(a.dispatchEvent("readystatechange"),a.ge()){C5(a,"Request complete");a.B=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.wd(1,String(a.V));if(!f&&g.B.self&&g.B.self.location){var h=g.B.self.location.protocol;f=h.substr(0,h.length-1)}e=!wLa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.G=6;try{var l=2<B5(a)?a.i.statusText:""}catch(m){l=""}a.u=l+" ["+a.getStatus()+"]";uLa(a)}}finally{A5(a)}}},A5=function(a,b){if(a.i){yLa(a);
var c=a.i,d=a.ma[0]?g.Ja:null;a.i=null;a.ma=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},yLa=function(a){a.i&&a.Y&&(a.i.ontimeout=null);
a.X&&(g.B.clearTimeout(a.X),a.X=null)},B5=function(a){return a.i?a.i.readyState:0},D5=function(a){try{return a.i?a.i.responseText:""}catch(b){return""}},C5=function(a,b){return b+" ["+a.Ga+" "+a.V+" "+a.getStatus()+"]"},zLa=function(a){this.i=a;
this.l=new k5},ALa=function(a){var b=E5(a.i,a.Pr,"/mail/images/cleardot.gif");
K4(b);rLa(b.toString(),5E3,(0,g.C)(a.TM,a),3,2E3);a.Hi(1)},G5=function(a){var b=a.i.L;
if(null!=b)n5(5),b?(n5(11),F5(a.i,a,!1)):(n5(12),F5(a.i,a,!0));else if(a.Rg=new p5(a,void 0,void 0,void 0),a.Rg.pn=a.Ty,b=a.i,b=E5(b,b.fu()?a.Er:null,a.Uy),n5(5),!g.ye||g.ce(10))L4(b,"TYPE","xmlhttp"),q5(a.Rg,b,!1,a.Er,!1);else{L4(b,"TYPE","html");var c=a.Rg;a=!!a.Er;c.Tq=3;c.Ll=K4(b.clone());oLa(c,a)}},H5=function(a,b,c){this.gb=1;
this.i=[];this.u=[];this.B=new k5;this.J=a||null;this.L=null!=b?b:null;this.C=c||!1},BLa=function(a,b){this.i=a;
this.map=b;this.context=null},CLa=function(a,b,c,d){g.yl.call(this,"timingevent",a);
this.size=b;this.Wt=d},DLa=function(a){g.yl.call(this,"serverreachability",a)},GLa=function(a){ELa(a);
if(3==a.gb){var b=a.vt++,c=a.Gv.clone();J4(c,"SID",a.l);J4(c,"RID",b);J4(c,"TYPE","terminate");I5(a,c);b=new p5(a,a.l,b,void 0);b.Tq=2;b.Ll=K4(c.clone());AKa(new Image,b.Ll.toString());b.Jq=Date.now();r5(b)}FLa(a)},HLa=function(a){a.qN(1,0);
a.Gv=E5(a,null,a.Vy);J5(a)},ELa=function(a){a.Ql&&(a.Ql.abort(),a.Ql=null);
a.me&&(a.me.cancel(),a.me=null);a.Gk&&(g.B.clearTimeout(a.Gk),a.Gk=null);K5(a);a.Fg&&(a.Fg.cancel(),a.Fg=null);a.Xl&&(g.B.clearTimeout(a.Xl),a.Xl=null)},ILa=function(a,b){if(0==a.gb)throw Error("Invalid operation: sending map when state is closed");
a.i.push(new BLa(a.SO++,b));2!=a.gb&&3!=a.gb||J5(a)},JLa=function(a){var b=0;
a.me&&b++;a.Fg&&b++;return b},J5=function(a){a.Fg||a.Xl||(a.Xl=l5((0,g.C)(a.yI,a),0),a.cq=0)},LLa=function(a,b){if(1==a.gb){if(!b){a.vt=Math.floor(1E5*Math.random());
b=a.vt++;var c=new p5(a,"",b,void 0);c.pn=a.xj;var d=L5(a),e=a.Gv.clone();J4(e,"RID",b);J4(e,"CVER","1");I5(a,e);jLa(c,e,d);a.Fg=c;a.gb=2}}else 3==a.gb&&(b?KLa(a,b):0==a.i.length||a.Fg||KLa(a))},KLa=function(a,b){if(b)if(6<a.Nn){a.i=a.u.concat(a.i);
a.u.length=0;var c=a.vt-1;b=L5(a)}else c=b.L,b=b.Vo;else c=a.vt++,b=L5(a);var d=a.Gv.clone();J4(d,"SID",a.l);J4(d,"RID",c);J4(d,"AID",a.wq);I5(a,d);c=new p5(a,a.l,c,a.cq+1);c.pn=a.xj;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Fg=c;jLa(c,d,b)},I5=function(a,b){a.Ff&&(a=a.Ff.dG())&&g.Cb(a,function(c,d){J4(b,d,c)})},L5=function(a){var b=Math.min(a.i.length,1E3),c=["count="+b];
if(6<a.Nn&&0<b){var d=a.i[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={zp:e.zp},f++){e.zp=a.i[f].i;var h=a.i[f].map;e.zp=6>=a.Nn?f:e.zp-d;try{g.Cb(h,function(l){return function(m,n){c.push("req"+l.zp+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.zp+"_type="+encodeURIComponent("_badmap"))}}a.u=a.u.concat(a.i.splice(0,b));
return c.join("&")},MLa=function(a){a.me||a.Gk||(a.G=1,a.Gk=l5((0,g.C)(a.xI,a),0),a.Qp=0)},M5=function(a){if(a.me||a.Gk||3<=a.Qp)return!1;
a.G++;a.Gk=l5((0,g.C)(a.xI,a),NLa(a,a.Qp));a.Qp++;return!0},F5=function(a,b,c){a.Wx=c;
a.yj=b.wk;a.C||HLa(a)},K5=function(a){null!=a.Un&&(g.B.clearTimeout(a.Un),a.Un=null)},NLa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},N5=function(a,b){if(2==b||9==b){var c=null;
a.Ff&&(c=null);var d=(0,g.C)(a.SS,a);c||(c=new g.Um("//web.archive.org/web/20210601003345/https://www.google.com/images/cleardot.gif"),K4(c));qLa(c.toString(),1E4,d)}else n5(2);OLa(a,b)},OLa=function(a,b){a.gb=0;
a.Ff&&a.Ff.vF(b);FLa(a);ELa(a)},FLa=function(a){a.gb=0;
a.yj=-1;if(a.Ff)if(0==a.u.length&&0==a.i.length)a.Ff.Kz();else{g.pb(a.u);var b=g.pb(a.i);a.u.length=0;a.i.length=0;a.Ff.Kz(b)}},E5=function(a,b,c){var d=g.bn(c);
if(""!=d.i)b&&g.Wm(d,b+"."+d.i),g.Xm(d,d.u);else{var e=window.location;d=EKa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.rs&&g.Cb(a.rs,function(f,h){J4(d,h,f)});
J4(d,"VER",a.Nn);I5(a,d);return d},PLa=function(){},QLa=function(){this.i=[];
this.l=[]},RLa=function(a,b){this.action=a;
this.params=b||{}},O5=function(a,b){g.F.call(this);
this.i=new g.J(this.FR,0,this);g.G(this,this.i);this.Kf=5E3;this.l=0;if("function"===typeof a)b&&(a=(0,g.C)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.C)(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a},P5=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.Y=a;this.G=b;this.u=new g.Rn;this.l=new O5(this.yS,this);this.i=null;this.Va=!1;this.C=null;this.V="";this.L=this.B=0;this.J=[];this.ma=c;this.X=d;this.va=e},SLa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.Wx,sessionId:a.i.l,arrayId:a.i.wq}},TLa=function(a,b){a.L=b||0;
a.l.stop();Q5(a);a.i&&(3==a.i.getState()&&LLa(a.i),GLa(a.i));a.L=0},R5=function(a){return!!a.i&&3==a.i.getState()},Q5=function(a){if(a.i){var b=a.X(),c=a.i.xj||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.xj=c}},S5=function(a){this.scheme="https";
this.port=this.domain="";this.i="/api/lounge";this.l=!0;a=a||document.location.href;var b=Number(g.wd(4,a))||"";b&&(this.port=":"+b);this.domain=g.xd(a)||"";a=g.Vc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.zc(a,"10.0")&&(this.l=!1))},T5=function(a,b){var c=a.i;
a.l&&(c=a.scheme+"://"+a.domain+a.port+a.i);return g.Id(c+b,{})},U5=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Qa(a.B,d,!0),onError:g.Qa(a.u,e),onTimeout:g.Qa(a.C,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.wp(b,a)},XLa=function(){var a=ULa;
VLa();V5.push(a);WLa()},W5=function(a,b){VLa();
var c=YLa(a,String(b));g.ib(V5)?ZLa(c):(WLa(),g.Ab(V5,function(d){d(c)}))},VLa=function(){V5||(V5=g.Ia("yt.mdx.remote.debug.handlers_")||[],g.Ha("yt.mdx.remote.debug.handlers_",V5,void 0))},ZLa=function(a){var b=(X5+1)%50;
X5=b;Y5[b]=a;Z5||(Z5=49==b)},WLa=function(){var a=V5;
if(Y5[0]){var b=Z5?X5:-1;do{b=(b+1)%50;var c=Y5[b];g.Ab(a,function(d){d(c)})}while(b!=X5);
Y5=Array(50);X5=-1;Z5=!1}},YLa=function(a,b){var c=(Date.now()-$La)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},$5=function(a){g.P.call(this);
this.G=a;this.screens=[]},aMa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},bMa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Ke(a.screens,function(f){return!!V4(b,f)});
for(var d=0,e=b.length;d<e;d++)c=aMa(a,b[d])||c;return c},cMa=function(a,b){var c=a.screens.length;
a.screens=g.Ke(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},a6=function(a,b,c,d,e){g.P.call(this);
this.u=a;this.J=b;this.B=c;this.G=d;this.C=e;this.l=0;this.i=null;this.Hb=NaN},c6=function(a){$5.call(this,"LocalScreenService");
this.l=a;this.i=NaN;b6(this);this.info("Initializing with "+T4(this.screens))},dMa=function(a){if(a.screens.length){var b=g.Pc(a.screens,function(d){return d.id}),c=T5(a.l,"/pairing/get_lounge_token_batch");
U5(a.l,c,{screen_ids:b.join(",")},(0,g.C)(a.NN,a),(0,g.C)(a.MN,a))}},b6=function(a){if(g.Qo("deprecate_pair_servlet_enabled"))return bMa(a,[]);
var b=KKa(QKa());b=g.Ke(b,function(c){return!c.uuid});
return bMa(a,b)},d6=function(a,b){SKa(g.Pc(a.screens,IKa));
b&&RKa()},f6=function(a,b){g.P.call(this);
this.G=b;b=(b=g.mv("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.G(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.gb(b,h)}this.i=c;this.C=a;this.u=this.B=NaN;this.l=null;e6("Initialized with "+g.yj(this.i))},g6=function(a,b,c){var d=T5(a.C,"/pairing/get_screen_availability");
U5(a.C,d,{lounge_token:b.token},(0,g.C)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.C)(function(){c(!1)},a))},h6=function(a,b){a:if(M4(b)!=M4(a.i))var c=!1;
else{c=g.Kb(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(e6("Updated online screens: "+g.yj(a.i)),a.i=b,a.W("screenChange"));eMa(a)},i6=function(a){isNaN(a.u)||g.rp(a.u);
a.u=g.pp((0,g.C)(a.nC,a),0<a.B&&a.B<g.Sa()?2E4:1E4)},e6=function(a){W5("OnlineScreenService",a)},fMa=function(a){var b={};
g.Ab(a.G(),function(c){c.token?b[c.token]=c.id:this.Pd("Requesting availability of screen w/o lounge token.")});
return b},eMa=function(a){a=g.Kb(g.Db(a.i,function(b){return b}));
g.xb(a);a.length?g.lv("yt-remote-online-screen-ids",a.join(","),60):g.ov("yt-remote-online-screen-ids")},j6=function(a,b){b=void 0===b?!1:b;
$5.call(this,"ScreenService");this.B=a;this.J=b;this.i=this.l=null;this.u=[];this.C={};gMa(this)},iMa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var h=a.gh(),l=c?W4(h,c):null;c&&(a.J||l)||(l=W4(h,b));if(l){l.uuid=b;var m=k6(a,l);g6(a.i,m,function(n){e(n?m:null)})}else c?hMa(a,c,(0,g.C)(function(n){var p=k6(this,new Q4({name:d,
screenId:c,loungeToken:n,dialId:b||""}));g6(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},jMa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},kMa=function(a,b,c){g6(a.i,b,c)},hMa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.wp(T5(a.B,"/pairing/get_lounge_token_batch"),e)},lMa=function(a){a.screens=a.l.gh();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+T4(a.screens))},gMa=function(a){l6(a);
a.l=new c6(a.B);a.l.subscribe("screenChange",(0,g.C)(a.TN,a));lMa(a);a.J||(a.u=KKa(g.mv("yt-remote-automatic-screen-cache")||[]));l6(a);a.info("Initializing automatic screens: "+T4(a.u));a.i=new f6(a.B,(0,g.C)(a.gh,a,!0));a.i.subscribe("screenChange",(0,g.C)(function(){this.W("onlineScreenChange")},a))},k6=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=W4(a.u,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.u.push(b),a.J||mMa(a));l6(a);a.C[b.uuid]=b.id;g.lv("yt-remote-device-id-map",a.C,31536E3);return b},mMa=function(a){a=g.Ke(a.u,function(b){return"shortLived"!=b.idType});
g.lv("yt-remote-automatic-screen-cache",g.Pc(a,IKa))},l6=function(a){a.C=g.mv("yt-remote-device-id-map")||{}},m6=function(a,b,c){g.P.call(this);
this.xa=c;this.u=a;this.i=b;this.B=null},n6=function(a,b){a.B=b;
a.W("sessionScreen",a.B)},nMa=function(a,b){a.B&&(a.B.token=b,k6(a.u,a.B));
a.W("sessionScreen",a.B)},o6=function(a,b){W5(a.xa,b)},p6=function(a,b,c){m6.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.l=null;this.Y=(0,g.C)(this.gM,this);this.va=(0,g.C)(this.XR,this);this.X=g.pp(function(){oMa(d,null)},12E4);
this.J=this.C=this.G=this.L=0;this.ma=!1;this.V="unknown"},q6=function(a,b){g.rp(a.J);
a.J=0;0==b?pMa(a):a.J=g.pp(function(){pMa(a)},b)},pMa=function(a){qMa(a,"getLoungeToken");
g.rp(a.C);a.C=g.pp(function(){rMa(a,null)},3E4)},qMa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.yj(void 0));
var c={};c.type=b;a.l?a.l.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ja,(0,g.C)(function(){o6(this,"Failed to send message: "+b+".")},a)):o6(a,"Sending yt message without session: "+g.yj(c))},r6=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.rG(b,function(c){n6(a,c)},function(){return a.gg()},5)):a.gg(Error("Waiting for session status timed out."))},tMa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new Q4(b);sMa(a,d,function(e){e?(a.ma=!0,k6(a.u,d),n6(a,d),a.V="unknown",q6(a,c)):(g.Vo(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.gg())},5)},oMa=function(a,b){g.rp(a.X);
a.X=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?tMa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.Vo(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),r6(a,b.screenId))):(g.Vo(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),r6(a,b.screenId)):r6(a,b.screenId):a.gg(Error("Waiting for session status timed out."))},rMa=function(a,b){g.rp(a.C);
a.C=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.V=c,q6(a,3E4)):(nMa(a,b.loungeToken),a.ma=!1,a.V="unknown",q6(a,b.loungeTokenRefreshIntervalMs))},sMa=function(a,b,c,d){g.rp(a.G);
a.G=0;kMa(a.u,b,function(e){e||0>d?c(e):a.G=g.pp(function(){sMa(a,b,c,d-1)},300)})},uMa=function(a){g.rp(a.L);
a.L=0;g.rp(a.G);a.G=0;g.rp(a.X);a.X=0;g.rp(a.C);a.C=0;g.rp(a.J);a.J=0},s6=function(a,b,c,d){m6.call(this,a,b,"DialSession");
this.config_=d;this.l=this.L=null;this.va="";this.Da=c;this.Fa=null;this.X=g.Ja;this.V=NaN;this.Aa=(0,g.C)(this.hM,this);this.C=g.Ja;this.J=this.G=0;this.Y=!1;this.ma="unknown"},t6=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.l)?0:b.getDialAppInfo))},vMa=function(a){a.C=a.u.hE(a.va,a.i.label,a.i.friendlyName,t6(a),function(b,c){a.C=g.Ja;
a.Y=!0;n6(a,b);"shortLived"==b.idType&&0<c&&u6(a,c)},function(b){a.C=g.Ja;
a.gg(b)})},wMa=function(a){var b={};
b.pairingCode=a.va;b.theme=a.Da;VKa()&&(b.env_useStageMdx=1);return g.Gd(b)},v6=function(a){return new Promise(function(b){a.va=U4();
if(a.Fa){var c=new chrome.cast.DialLaunchResponse(!0,wMa(a));b(c);vMa(a)}else a.X=function(){g.rp(a.V);a.X=function(){};
a.V=NaN;var d=new chrome.cast.DialLaunchResponse(!0,wMa(a));b(d);vMa(a)},a.V=g.pp(function(){a.X()},100)})},yMa=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new Q4(b);return(new Promise(function(e){xMa(a,d,function(f){f?(a.Y=!0,k6(a.u,d),n6(a,d),u6(a,c)):g.Vo(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):v6(a)})},zMa=function(a,b){var c=a.L.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){iMa(a.u,c,b,d,function(f){f&&f.token&&n6(a,f);e(f)},function(f){o6(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):v6(a)})},xMa=function(a,b,c,d){g.rp(a.G);
a.G=0;kMa(a.u,b,function(e){e||0>d?c(e):a.G=g.pp(function(){xMa(a,b,c,d-1)},300)})},u6=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
t6(a)&&(g.rp(a.J),a.J=0,0==b?AMa(a):a.J=g.pp(function(){AMa(a)},b))},AMa=function(a){t6(a)&&a.l.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ma=c,u6(a,3E4)):(a.Y=!1,a.ma="unknown",nMa(a,b.loungeToken),u6(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ma="noLoungeTokenResponse";u6(a,3E4)})},BMa=function(a){g.rp(a.G);
a.G=0;g.rp(a.J);a.J=0;a.C();a.C=function(){};
g.rp(a.V)},w6=function(a,b){m6.call(this,a,b,"ManualSession");
this.l=g.pp((0,g.C)(this.xq,this,null),150)},x6=function(a,b){g.P.call(this);
this.config_=b;this.l=a;this.J=b.appId||"233637DE";this.B=b.theme||"cl";this.L=b.disableCastApi||!1;this.V=b.forceMirroring||!1;this.i=null;this.G=!1;this.u=[];this.C=(0,g.C)(this.VQ,this)},CMa=function(a,b){return b?g.db(a.u,function(c){return R4(b,c.label)},a):null},y6=function(a){W5("Controller",a)},ULa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},z6=function(a){return a.G||!!a.u.length||!!a.i},A6=function(a,b,c){b!=a.i&&(g.Ci(a.i),(a.i=b)?(c?a.W("yt-remote-cast2-receiver-resumed",
b.i):a.W("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.C)(a.wI,a,b)),b.getScreen()?a.W("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.xq(null)):a.W("yt-remote-cast2-session-change",null))},DMa=function(a){var b=a.l.gE(),c=a.i&&a.i.i;
a=g.Pc(b,function(d){c&&R4(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=CMa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},IMa=function(a,b,c,d){d.disableCastApi?B6("Cannot initialize because disabled by Mdx config."):EMa()?FMa(b,d)&&(C6(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?GMa(a,c):(window.__onGCastApiAvailable=function(e,f){e?GMa(a,c):(D6("Failed to load cast API: "+f),E6(!1),C6(!1),g.ov("yt-remote-cast-available"),g.ov("yt-remote-cast-receiver"),
HMa(),c(!1))},d.loadCastApiSetupScript?g.qv("https://web.archive.org/web/20210601003345/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=c5()&&bLa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?e5():89<=c5()?dLa():(f5(),d5(cLa.map(ZKa))))):B6("Cannot initialize because not running Chrome")},HMa=function(){B6("dispose");
var a=F6();a&&a.dispose();g.Ha("yt.mdx.remote.cloudview.instance_",null,void 0);JMa(!1);g.Vq(G6);G6.length=0},H6=function(){return!!g.mv("yt-remote-cast-installed")},KMa=function(){var a=g.mv("yt-remote-cast-receiver");
return a?a.friendlyName:null},LMa=function(){B6("clearCurrentReceiver");
g.ov("yt-remote-cast-receiver")},MMa=function(){return H6()?F6()?F6().getCastSession():(D6("getCastSelector: Cast is not initialized."),null):(D6("getCastSelector: Cast API is not installed!"),null)},J6=function(){H6()?F6()?I6()?(B6("Requesting cast selector."),F6().requestSession()):(B6("Wait for cast API to be ready to request the session."),G6.push(g.Uq("yt-remote-cast2-api-ready",J6))):D6("requestCastSelector: Cast is not initialized."):D6("requestCastSelector: Cast API is not installed!")},K6=
function(a,b){I6()?F6().setConnectedScreenStatus(a,b):D6("setConnectedScreenStatus called before ready.")},EMa=function(){var a=0<=g.Vc.search(/ (CrMo|Chrome|CriOS)\//);
return g.nB||a},NMa=function(a,b){F6().init(a,b)},FMa=function(a,b){var c=!1;
F6()||(a=new x6(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.lv("yt-remote-cast-available",d);O4("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){B6("onReceiverSelected: "+d.friendlyName);
g.lv("yt-remote-cast-receiver",d);O4("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){B6("onReceiverResumed: "+d.friendlyName);
g.lv("yt-remote-cast-receiver",d);O4("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){B6("onSessionChange: "+S4(d));
d||g.ov("yt-remote-cast-receiver");O4("yt-remote-cast2-session-change",d)}),g.Ha("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
B6("cloudview.createSingleton_: "+c);return c},F6=function(){return g.Ia("yt.mdx.remote.cloudview.instance_")},GMa=function(a,b){E6(!0);
C6(!1);NMa(a,function(c){c?(JMa(!0),g.Wq("yt-remote-cast2-api-ready")):(D6("Failed to initialize cast API."),E6(!1),g.ov("yt-remote-cast-available"),g.ov("yt-remote-cast-receiver"),HMa());b(c)})},B6=function(a){W5("cloudview",a)},D6=function(a){W5("cloudview",a)},E6=function(a){B6("setCastInstalled_ "+a);
g.lv("yt-remote-cast-installed",a)},I6=function(){return!!g.Ia("yt.mdx.remote.cloudview.apiReady_")},JMa=function(a){B6("setApiReady_ "+a);
g.Ha("yt.mdx.remote.cloudview.apiReady_",a,void 0)},C6=function(a){g.Ha("yt.mdx.remote.cloudview.initializing_",a,void 0)},L6=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.G=this.J=0;this.trackData=null;this.hasNext=this.Nj=!1;this.L=this.C=this.i=this.B=0;this.u=NaN;this.l=!1;this.reset(a)},M6=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Nj=!1;a.hasNext=!1;a.J=0;a.G=g.Sa();a.B=0;a.i=0;a.C=0;a.L=0;a.u=NaN;a.l=!1},N6=function(a){return a.wc()?(g.Sa()-a.G)/1E3:0},O6=function(a,b){a.J=b;
a.G=g.Sa()},P6=function(a){switch(a.playerState){case 1:case 1081:return(g.Sa()-a.G)/1E3+a.J;
case -1E3:return 0}return a.J},Q6=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&M6(a)},R6=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Ub(a.trackData);b.hasPrevious=a.Nj;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.G;b.seekableStart=a.B;b.seekableEnd=a.i;b.duration=a.C;b.loadedTime=a.L;b.liveIngestionTime=a.u;return b},T6=function(a,b){g.P.call(this);
this.gb=0;this.u=a;this.C=[];this.B=new QLa;this.l=this.i=null;this.L=(0,g.C)(this.AP,this);this.G=(0,g.C)(this.Bt,this);this.J=(0,g.C)(this.zP,this);this.V=(0,g.C)(this.HP,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.zC,this),OMa(this))):c=3;0!=c&&(b?this.zC(c):g.pp((0,g.C)(function(){this.zC(c)},this),0));
(a=MMa())&&S6(this,a);this.subscribe("yt-remote-cast2-session-change",this.V)},U6=function(a){return new L6(a.u.getPlayerContextData())},OMa=function(a){g.Ab("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.C.push(this.u.subscribe(b,g.Qa(this.SQ,b),this))},a)},PMa=function(a){g.Ab(a.C,function(b){this.u.unsubscribeByKey(b)},a);
a.C.length=0},V6=function(a){return 1==a.getState()},W6=function(a,b){var c=a.B;
50>c.i.length+c.l.length&&a.B.l.push(b)},Y6=function(a,b,c){var d=U6(a);
O6(d,c);-1E3!=d.playerState&&(d.playerState=b);X6(a,d)},Z6=function(a,b,c){a.u.sendMessage(b,c)},X6=function(a,b){PMa(a);
a.u.setPlayerContextData(R6(b));OMa(a)},S6=function(a,b){a.l&&(a.l.removeUpdateListener(a.L),a.l.removeMediaListener(a.G),a.Bt(null));
a.l=b;a.l&&(W5("CP","Setting cast session: "+a.l.sessionId),a.l.addUpdateListener(a.L),a.l.addMediaListener(a.G),a.l.media.length&&a.Bt(a.l.media[0]))},QMa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=U6(a);b.contentId!=d.videoId&&W5("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;O6(d,a.i.getEstimatedTime());X6(a,d)}else W5("CP","No cast media video. Ignoring state update.")},$6=function(a,b,c){return(0,g.C)(function(d){this.Pd("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Pd("Retrying "+b+" using MDx browser channel."),Z6(this,b,c))},a)},a7=function(a,b,c){g.P.call(this);
this.C=NaN;this.ma=!1;this.L=this.J=this.X=this.Y=NaN;this.V=[];this.B=this.G=this.u=this.hc=this.i=null;this.xa=a;this.V.push(g.Vp(window,"beforeunload",(0,g.C)(this.JN,this)));this.l=[];this.hc=new L6;this.Aa=b.id;this.va=b.idType;this.i=RMa(this,c);this.i.subscribe("handlerOpened",this.EP,this);this.i.subscribe("handlerClosed",this.BP,this);this.i.subscribe("handlerError",this.CP,this);this.i.subscribe("handlerMessage",this.DP,this);this.i.Bx(b.token);this.subscribe("remoteQueueChange",function(){var d=
this.hc.videoId;g.pv()&&g.lv("yt-remote-session-video-id",d)},this)},b7=function(a){W5("conn",a)},RMa=function(a,b){return new P5(T5(a.xa,"/bc"),b,!1,function(){return a.lE()},"shortLived"==a.va)},c7=function(a,b){a.W("proxyStateChange",b)},SMa=function(a){a.C=g.pp((0,g.C)(function(){b7("Connecting timeout");
this.Yp(1)},a),2E4)},d7=function(a){g.rp(a.C);
a.C=NaN},e7=function(a){g.rp(a.Y);
a.Y=NaN},TMa=function(a){f7(a);
a.X=g.pp((0,g.C)(function(){g7(this,"getNowPlaying")},a),2E4)},f7=function(a){g.rp(a.X);
a.X=NaN},VMa=function(a,b){b&&(d7(a),e7(a));
var c=R5(a.i)&&isNaN(a.C);b==c?b&&(c7(a,1),g7(a,"getSubtitlesTrack")):b?(a.pG()&&a.hc.reset(),c7(a,1),g7(a,"getNowPlaying"),UMa(a)):a.Yp(1)},WMa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.hc.videoId&&(g.Pb(b.params)?a.hc.trackData=null:a.hc.trackData=b.params,a.W("remotePlayerChange"))},XMa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.hc.listId=b.params.listId||a.hc.listId;Q6(a.hc,c,d);a.W("remoteQueueChange")},ZMa=function(a,b){b.params=b.params||{};
XMa(a,b);YMa(a,b);a.W("autoplayDismissed")},YMa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
O6(a.hc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.hc.playerState&&(c=-1E3);a.hc.playerState=c;c=Number(b.params.loadedTime);a.hc.L=isNaN(c)?0:c;c=Number(b.params.duration);a.hc.C=isNaN(c)?0:c;c=a.hc;var d=Number(b.params.liveIngestionTime);c.u=d;c.l=isNaN(d)?!1:!0;c=a.hc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.B=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.hc.playerState?TMa(a):f7(a);a.W("remotePlayerChange")},$Ma=function(a,b){if(-1E3!=a.hc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.hc.playerState=c;b=parseInt(b.params.currentTime,10);O6(a.hc,isNaN(b)?0:b);a.W("remotePlayerChange")}},aNa=function(a,b){var c="true"==b.params.muted;
a.hc.volume=parseInt(b.params.volume,10);a.hc.muted=c;a.W("remotePlayerChange")},bNa=function(a,b){a.G=b.params.videoId;
a.W("nowAutoplaying",parseInt(b.params.timeout,10))},cNa=function(a,b){var c="true"==b.params.hasNext;
a.hc.Nj="true"==b.params.hasPrevious;a.hc.hasNext=c;a.W("previousNextChange")},UMa=function(a){g.rp(a.L);
a.L=g.pp((0,g.C)(a.Yp,a,1),864E5)},g7=function(a,b,c){c?b7("Sending: action="+b+", params="+g.yj(c)):b7("Sending: action="+b);
a.i.sendMessage(b,c)},h7=function(a){$5.call(this,"ScreenServiceProxy");
this.Jf=a;this.i=[];this.i.push(this.Jf.$_s("screenChange",(0,g.C)(this.lM,this)));this.i.push(this.Jf.$_s("onlineScreenChange",(0,g.C)(this.zQ,this)))},gNa=function(a,b){UKa();
if(!b5||!b5.get("yt-remote-disable-remote-module-for-dev")){b=g.M("MDX_CONFIG")||b;MKa();$4();i7||(i7=new S5(b?b.loungeApiHost:void 0),VKa()&&(i7.i="/api/loungedev"));j7||(j7=g.Ia("yt.mdx.remote.deferredProxies_")||[],g.Ha("yt.mdx.remote.deferredProxies_",j7,void 0));dNa();var c=k7();if(!c){var d=new j6(i7,b?b.disableAutomaticScreenCache||!1:!1);g.Ha("yt.mdx.remote.screenService_",d,void 0);c=k7();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});IMa(a,d,function(f){f?l7()&&K6(l7(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){O4("yt-remote-receiver-availability-change")})},e)}b&&!g.Ia("yt.mdx.remote.initialized_")&&(g.Ha("yt.mdx.remote.initialized_",!0,void 0),m7("Initializing: "+g.yj(b)),n7.push(g.Uq("yt-remote-cast2-availability-change",function(){O4("yt-remote-receiver-availability-change")})),
n7.push(g.Uq("yt-remote-cast2-receiver-selected",function(){o7(null);
O4("yt-remote-auto-connect","cast-selector-receiver")})),n7.push(g.Uq("yt-remote-cast2-receiver-resumed",function(){O4("yt-remote-receiver-resumed","cast-selector-receiver")})),n7.push(g.Uq("yt-remote-cast2-session-change",eNa)),n7.push(g.Uq("yt-remote-connection-change",function(f){f?K6(l7(),"YouTube TV"):p7()||(K6(null,null),LMa())})),a=q7(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.Qo("desktop_enable_autoplay")&&e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=
b.theme)&&(a.theme=b),m7(" -- with channel params: "+g.yj(a)),a?(g.lv("yt-remote-session-app",a.app),g.lv("yt-remote-session-name",a.name)):(g.ov("yt-remote-session-app"),g.ov("yt-remote-session-name")),g.Ha("yt.mdx.remote.channelParams_",a,void 0),c.start(),l7()||fNa())}},hNa=function(){var a=k7().Jf.$_gos();
var b=r7();b&&s7()&&(V4(a,b)||a.push(b));return LKa(a)},t7=function(){var a=iNa();
!a&&H6()&&KMa()&&(a={key:"cast-selector-receiver",name:KMa()});return a},iNa=function(){var a=hNa(),b=r7();
b||(b=p7());return g.db(a,function(c){return b&&R4(b,c.key)?!0:!1})},r7=function(){var a=l7();
if(!a)return null;var b=k7().gh();return W4(b,a)},eNa=function(a){m7("remote.onCastSessionChange_: "+S4(a));
if(a){var b=r7();if(b&&b.id==a.id){if(K6(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))u7&&(u7.token=a),(b=s7())&&b.Bx(a)}else b&&v7(),w7(a,1)}else s7()&&v7()},v7=function(){I6()?F6().stopSession():D6("stopSession called before API ready.");
var a=s7();a&&(a.disconnect(1),x7(null))},y7=function(){var a=s7();
return!!a&&3!=a.getProxyState()},m7=function(a){W5("remote",a)},k7=function(){if(!z7){var a=g.Ia("yt.mdx.remote.screenService_");
z7=a?new h7(a):null}return z7},l7=function(){return g.Ia("yt.mdx.remote.currentScreenId_")},jNa=function(a){g.Ha("yt.mdx.remote.currentScreenId_",a,void 0)},kNa=function(){return g.Ia("yt.mdx.remote.connectData_")},o7=function(a){g.Ha("yt.mdx.remote.connectData_",a,void 0)},s7=function(){return g.Ia("yt.mdx.remote.connection_")},x7=function(a){var b=s7();
o7(null);a||jNa("");g.Ha("yt.mdx.remote.connection_",a,void 0);j7&&(g.Ab(j7,function(c){c(a)}),j7.length=0);
b&&!a?O4("yt-remote-connection-change",!1):!b&&a&&O4("yt-remote-connection-change",!0)},p7=function(){var a=g.pv();
if(!a)return null;var b=k7();if(!b)return null;b=b.gh();return W4(b,a)},w7=function(a,b){l7();
r7()&&r7();A7?u7=a:(jNa(a.id),a=new a7(i7,a,q7()),a.connect(b,kNa()),a.subscribe("beforeDisconnect",function(c){O4("yt-remote-before-disconnect",c)}),a.subscribe("beforeDispose",function(){s7()&&(s7(),x7(null))}),a.subscribe("browserChannelAuthError",function(){var c=r7();
c&&"shortLived"==c.idType&&(I6()?F6().handleBrowserChannelAuthError():D6("refreshLoungeToken called before API ready."))}),x7(a))},fNa=function(){var a=p7();
a?(m7("Resume connection to: "+S4(a)),w7(a,0)):(a5(),LMa(),m7("Skipping connecting because no session screen found."))},dNa=function(){var a=q7();
if(g.Pb(a)){a=Z4();var b=g.mv("yt-remote-session-name")||"",c=g.mv("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ha("yt.mdx.remote.channelParams_",a,void 0)}},q7=function(){return g.Ia("yt.mdx.remote.channelParams_")||{}},B7=function(a,b,c){g.F.call(this);
var d=this;this.l=a;this.I=b;this.Rb=c;this.events=new g.TL(this);this.X=this.events.N(this.I,"onVolumeChange",function(e){lNa(d,e)});
this.C=!1;this.suggestion=null;this.G=new g.TI(64);this.i=new g.J(this.sJ,500,this);this.u=new g.J(this.tJ,1E3,this);this.L=new g5(this.lT,0,this);this.B={};this.V=new g.J(this.ZJ,1E3,this);this.J=new h5(this.seekTo,1E3,this);this.Y=g.Ja;g.G(this,this.events);this.events.N(b,"onCaptionsTrackListChanged",this.kQ);this.events.N(b,"captionschanged",this.xP);this.events.N(b,"captionssettingschanged",this.zJ);this.events.N(b,"videoplayerreset",this.ex);this.events.N(b,"mdxautoplaycancel",function(){d.Rb.OF()});
a=this.Rb;a.Ha();a.subscribe("proxyStateChange",this.sI,this);a.subscribe("remotePlayerChange",this.Gt,this);a.subscribe("remoteQueueChange",this.ex,this);a.subscribe("previousNextChange",this.pI,this);a.subscribe("nowAutoplaying",this.jI,this);a.subscribe("autoplayDismissed",this.KH,this);g.G(this,this.i);g.G(this,this.u);g.G(this,this.L);g.G(this,this.V);g.G(this,this.J);this.zJ();this.ex();this.Gt()},lNa=function(a,b){if(C7(a)){a.Rb.unsubscribe("remotePlayerChange",a.Gt,a);
var c=Math.round(b.volume);b=!!b.muted;var d=U6(a.Rb);if(c!==d.volume||b!==d.muted)a.Rb.setVolume(c,b),a.V.start();a.Rb.subscribe("remotePlayerChange",a.Gt,a)}},mNa=function(a){a.Wb(0);
a.i.stop();a.Nb(new g.TI(64))},D7=function(a,b){if(C7(a)&&!a.C){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.Wb(c,b));a.Rb.kE(a.I.getVideoData(1).videoId,c);a.B=U6(a.Rb).trackData}},E7=function(a,b){var c=a.I.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.Rb.playVideo(c.videoId,b,d,e,c.playerParams,c.Da,yKa(c));a.Nb(new g.TI(1))},nNa=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{KG:1});
c&&c.length?(a.I.setOption("captions","track",b),a.C=!1):(a.I.loadModule("captions"),a.C=!0)}else a.I.setOption("captions","track",{})},C7=function(a){return U6(a.Rb).videoId===a.I.getVideoData(1).videoId},F7=function(){g.V.call(this,{D:"div",
K:"ytp-mdx-manual-pairing-popup-dialog",U:{role:"dialog"},S:[{D:"div",K:"ytp-mdx-manual-pairing-popup-dialog-inner-content",S:[{D:"div",K:"ytp-mdx-manual-pairing-popup-title",oa:"Connecting to your TV on web using a code will be going away soon"},{D:"div",K:"ytp-mdx-manual-pairing-popup-buttons",S:[{D:"button",Ca:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],oa:"Learn more"},{D:"button",Ca:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],oa:"OK"}]}]}]});this.i=new g.xK(this,250);this.learnMoreButton=
this.Ba("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.Ba("ytp-mdx-manual-pairing-popup-ok");g.G(this,this.i);this.N(this.learnMoreButton,"click",this.l);this.N(this.okButton,"click",this.u)},G7=function(){g.V.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",U:{role:"dialog"},S:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",S:[{D:"div",K:"ytp-mdx-popup-title",oa:"You're signed out"},{D:"div",K:"ytp-mdx-popup-description",oa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",K:"ytp-mdx-privacy-popup-buttons",S:[{D:"button",Ca:["ytp-button","ytp-mdx-privacy-popup-cancel"],oa:"Cancel"},{D:"button",Ca:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],oa:"Confirm"}]}]}]});this.i=new g.xK(this,250);this.cancelButton=this.Ba("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Ba("ytp-mdx-privacy-popup-confirm");g.G(this,this.i);this.N(this.cancelButton,"click",this.l);this.N(this.confirmButton,"click",this.u)},H7=function(a){g.V.call(this,{D:"div",
K:"ytp-remote",S:[{D:"div",K:"ytp-remote-display-status",S:[{D:"div",K:"ytp-remote-display-status-icon",S:[g.Qma()]},{D:"div",K:"ytp-remote-display-status-text",oa:"{{statustext}}"}]}]});this.api=a;this.i=new g.xK(this,250);g.G(this,this.i);this.N(a,"presentingplayerstatechange",this.l);oNa(this,a.ub())},oNa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.T(b,128)?g.xH("Error on $RECEIVER_NAME",c):b.wc()||g.T(b,4)?g.xH("Playing on $RECEIVER_NAME",c):g.xH("Connected to $RECEIVER_NAME",c);a.Ra("statustext",b);a.i.show()}else a.i.hide()},I7=function(a,b){g.UO.call(this,"Play on",0,a,b);
this.I=a;this.Lm={};this.N(a,"onMdxReceiversChange",this.C);this.N(a,"presentingplayerstatechange",this.C);this.C()},J7=function(a){g.dM.call(this,a);
this.Ei={key:U4(),name:"This computer"};this.Dh=null;this.subscriptions=[];this.aC=this.Rb=null;this.Lm=[this.Ei];this.Sl=this.Ei;this.ld=new g.TI(64);this.gH=0;this.Ve=-1;this.Bq=null;this.Kt=this.Fw=!1;this.ol=this.Iq=null;if(!g.DD(this.player.T())&&!g.ED(this.player.T())){a=this.player;var b=g.wL(a);b&&(b=b.im())&&(b=new I7(a,b),g.G(this,b));b=new H7(a);g.G(this,b);g.GL(a,b.element,4);this.Iq=new G7;g.G(this,this.Iq);g.GL(a,this.Iq.element,4);g.R(this.player.T().experiments,"pair_servlet_deprecation_warning_enabled")&&
!g.R(this.player.T().experiments,"deprecate_pair_servlet_enabled")&&(this.Bq=new F7,g.G(this,this.Bq),g.GL(a,this.Bq.element,4));this.Kt=!!p7();this.Fw=!!g.mv("yt-remote-manual-pairing-warning-shown")}},K7=function(a){a.ol&&(a.player.removeEventListener("presentingplayerstatechange",a.ol),a.ol=null)},pNa=function(a,b,c){a.ld=c;
a.player.W("presentingplayerstatechange",new g.kH(c,b))},qNa=function(a,b,c){var d=!1;
1===b?d=!a.Kt:2===b&&(d=!a.Fw);d&&g.mH(c,8)&&(a.player.pauseVideo(),K7(a))},L7=function(a,b){if(b.key!==a.Sl.key)if(b.key===a.Ei.key)v7();
else{if(a.Bq&&!a.Fw&&b!==a.Ei&&"cast-selector-receiver"!==b.key&&g.ZD(a.player.T()))rNa(a);else{var c;(c=!g.R(a.player.T().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.M("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.M("SESSION_INDEX")&&!g.M("LOGGED_IN")))||a.Kt||!a.Iq);(c?0:g.ZD(a.player.T())||g.cE(a.player.T()))&&sNa(a)}a.Sl=b;if(!a.player.T().Z("disable_mdx_connection_in_mdx_module_for_music_web")||!g.ED(a.player.T())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&g.R(a.player.T().experiments,"should_clear_video_data_on_player_cued_unstarted"))a=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=f.fb(l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Da,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=yKa(c))&&(a.locationInfo=c)}m7("Connecting to: "+
g.yj(b));"cast-selector-receiver"==b.key?(o7(a||null),b=a||null,I6()?F6().setLaunchParams(b):D6("setLaunchParams called before ready.")):!a&&y7()&&l7()==b.key?O4("yt-remote-connection-change",!0):(v7(),o7(a||null),a=k7().gh(),(b=W4(a,b.key))&&w7(b,1))}}},sNa=function(a){a.player.ub().wc()?a.player.pauseVideo():(a.ol=function(b){qNa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.ol));
a.Iq&&a.Iq.Wc();s7()||(A7=!0)},rNa=function(a){a.player.ub().wc()?a.player.pauseVideo():(a.ol=function(b){qNa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.ol));
a.Bq&&a.Bq.Wc();s7()||(A7=!0)},nLa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},w5={"'":"\\'"},HKa={jU:"atp",P3:"ska",E2:"que",J0:"mus",O3:"sus",cY:"dsp",Y2:"seq",l0:"mic",cX:"dpa",xU:"cds",H0:"mlm"},b5,Y4="",aLa=WKa("loadCastFramework")||WKa("loadCastApplicationFramework"),cLa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ta(g5,g.F);g.k=g5.prototype;g.k.aM=function(a){this.B=arguments;this.i=!1;this.Hb?this.u=g.Sa()+this.Kf:this.Hb=g.Im(this.C,this.Kf)};
g.k.stop=function(){this.Hb&&(g.B.clearTimeout(this.Hb),this.Hb=null);this.u=null;this.i=!1;this.B=[]};
g.k.pause=function(){++this.l};
g.k.resume=function(){this.l&&(--this.l,!this.l&&this.i&&(this.i=!1,this.G.apply(null,this.B)))};
g.k.ra=function(){this.stop();g5.Od.ra.call(this)};
g.k.bM=function(){this.Hb&&(g.B.clearTimeout(this.Hb),this.Hb=null);this.u?(this.Hb=g.Im(this.C,this.u-g.Sa()),this.u=null):this.l?this.i=!0:(this.i=!1,this.G.apply(null,this.B))};g.v(h5,g.F);g.k=h5.prototype;g.k.dE=function(a){this.u=arguments;this.Hb||this.l?this.i=!0:i5(this)};
g.k.stop=function(){this.Hb&&(g.B.clearTimeout(this.Hb),this.Hb=null,this.i=!1,this.u=null)};
g.k.pause=function(){this.l++};
g.k.resume=function(){this.l--;this.l||!this.i||this.Hb||(this.i=!1,i5(this))};
g.k.ra=function(){g.F.prototype.ra.call(this);this.stop()};k5.prototype.stringify=function(a){return g.B.JSON.stringify(a,void 0)};
k5.prototype.parse=function(a){return g.B.JSON.parse(a,void 0)};var m5=new g.Xl;g.v(eLa,g.yl);o5.prototype.i=null;o5.prototype.getOptions=function(){var a;(a=this.i)||(a={},gLa(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var M7;g.Ta(fLa,o5);M7=new fLa;g.k=p5.prototype;g.k.pn=null;g.k.Ui=!1;g.k.Yq=null;g.k.mD=null;g.k.Jq=null;g.k.Tq=null;g.k.Ll=null;g.k.Nm=null;g.k.Vo=null;g.k.Me=null;g.k.Hu=0;g.k.Zi=null;g.k.Yx=null;g.k.Gl=null;g.k.Dr=-1;g.k.kJ=!0;g.k.Mn=!1;g.k.Sy=0;g.k.lx=null;var lLa={},s5={};g.k=p5.prototype;g.k.setTimeout=function(a){this.C=a};
g.k.nS=function(a){a=a.target;var b=this.lx;b&&3==B5(a)?b.dE():this.gK(a)};
g.k.gK=function(a){try{if(a==this.Me)a:{var b=B5(this.Me),c=this.Me.G,d=this.Me.getStatus();if(g.ye&&!g.ce(10)||g.Ae&&!g.be("420+")){if(4>b)break a}else if(3>b||3==b&&!g.mg&&!D5(this.Me))break a;this.Mn||4!=b||7==c||(8==c||0>=d?this.i.Hi(3):this.i.Hi(2));x5(this);var e=this.Me.getStatus();this.Dr=e;var f=D5(this.Me);(this.Ui=200==e)?(4==b&&u5(this),this.G?(mLa(this,b,f),g.mg&&this.Ui&&3==b&&(this.B.Pa(this.u,"tick",this.iS),this.u.start())):t5(this,f),this.Ui&&!this.Mn&&(4==b?this.i.Tu(this):(this.Ui=
!1,r5(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Gl=3,n5(13)):(this.Gl=0,n5(14)),u5(this),v5(this))}}catch(h){this.Me&&D5(this.Me)}finally{}};
g.k.iS=function(){var a=B5(this.Me),b=D5(this.Me);this.Hu<b.length&&(x5(this),mLa(this,a,b),this.Ui&&4!=a&&r5(this))};
g.k.MR=function(a){l5((0,g.C)(this.LR,this,a),0)};
g.k.LR=function(a){this.Mn||(x5(this),t5(this,a),r5(this))};
g.k.AI=function(a){l5((0,g.C)(this.KR,this,a),0)};
g.k.KR=function(a){this.Mn||(u5(this),this.Ui=a,this.i.Tu(this),this.i.Hi(4))};
g.k.cancel=function(){this.Mn=!0;u5(this)};
g.k.UR=function(){this.Yq=null;var a=Date.now();0<=a-this.mD?(2!=this.Tq&&this.i.Hi(3),u5(this),this.Gl=2,n5(18),v5(this)):pLa(this,this.mD-a)};
g.k.getLastError=function(){return this.Gl};g.Ta(z5,g.Xl);var wLa=/^https?$/i,tNa=["POST","PUT"];g.k=z5.prototype;
g.k.send=function(a,b,c,d){if(this.i)throw Error("[goog.net.XhrIo] Object is active with another request="+this.V+"; newUri="+a);b=b?b.toUpperCase():"GET";this.V=a;this.u="";this.G=0;this.Ga=b;this.xa=!1;this.B=!0;this.i=this.va?hLa(this.va):hLa(M7);this.ma=this.va?this.va.getOptions():M7.getOptions();this.i.onreadystatechange=(0,g.C)(this.qI,this);try{N4(C5(this,"Opening Xhr")),this.Aa=!0,this.i.open(b,String(a),!0),this.Aa=!1}catch(f){N4(C5(this,"Error opening Xhr: "+f.message));vLa(this,f);return}a=
c||"";var e=this.headers.clone();d&&DKa(d,function(f,h){e.set(h,f)});
d=g.db(e.Jh(),tLa);c=g.B.FormData&&a instanceof g.B.FormData;!g.gb(tNa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.i.setRequestHeader(h,f)},this);
this.Na&&(this.i.responseType=this.Na);"withCredentials"in this.i&&this.i.withCredentials!==this.Da&&(this.i.withCredentials=this.Da);try{yLa(this),0<this.J&&(this.Y=sLa(this.i),N4(C5(this,"Will abort after "+this.J+"ms if incomplete, xhr2 "+this.Y)),this.Y?(this.i.timeout=this.J,this.i.ontimeout=(0,g.C)(this.eE,this)):this.X=g.Im(this.eE,this.J,this)),N4(C5(this,"Sending request")),this.L=!0,this.i.send(a),this.L=!1}catch(f){N4(C5(this,"Send error: "+f.message)),vLa(this,f)}};
g.k.eE=function(){"undefined"!=typeof g.e0&&this.i&&(this.u="Timed out after "+this.J+"ms, aborting",this.G=8,C5(this,this.u),this.dispatchEvent("timeout"),this.abort(8))};
g.k.abort=function(a){this.i&&this.B&&(C5(this,"Aborting"),this.B=!1,this.C=!0,this.i.abort(),this.C=!1,this.G=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),A5(this))};
g.k.ra=function(){this.i&&(this.B&&(this.B=!1,this.C=!0,this.i.abort(),this.C=!1),A5(this,!0));z5.Od.ra.call(this)};
g.k.qI=function(){this.Ha()||(this.Aa||this.L||this.C?xLa(this):this.UQ())};
g.k.UQ=function(){xLa(this)};
g.k.isActive=function(){return!!this.i};
g.k.ge=function(){return 4==B5(this)};
g.k.getStatus=function(){try{return 2<B5(this)?this.i.status:-1}catch(a){return-1}};
g.k.getResponseHeader=function(a){if(this.i&&this.ge())return a=this.i.getResponseHeader(a),null===a?void 0:a};
g.k.getLastError=function(){return"string"===typeof this.u?this.u:String(this.u)};g.k=zLa.prototype;g.k.Ty=null;g.k.Rg=null;g.k.mx=!1;g.k.uJ=null;g.k.Fv=null;g.k.jB=null;g.k.Uy=null;g.k.gb=null;g.k.wk=-1;g.k.Er=null;g.k.Pr=null;g.k.connect=function(a){this.Uy=a;a=E5(this.i,null,this.Uy);n5(3);this.uJ=Date.now();var b=this.i.J;null!=b?(this.Er=b[0],(this.Pr=b[1])?(this.gb=1,ALa(this)):(this.gb=2,G5(this))):(L4(a,"MODE","init"),this.Rg=new p5(this,void 0,void 0,void 0),this.Rg.pn=this.Ty,q5(this.Rg,a,!1,null,!0),this.gb=0)};
g.k.TM=function(a){if(a)this.gb=2,G5(this);else{n5(4);var b=this.i;b.yj=b.Ql.wk;N5(b,9)}a&&this.Hi(2)};
g.k.Yz=function(a){return this.i.Yz(a)};
g.k.abort=function(){this.Rg&&(this.Rg.cancel(),this.Rg=null);this.wk=-1};
g.k.fE=function(){return!1};
g.k.tI=function(a,b){this.wk=a.Dr;if(0==this.gb)if(b){try{var c=this.l.parse(b)}catch(d){a=this.i;a.yj=this.wk;N5(a,2);return}this.Er=c[0];this.Pr=c[1]}else a=this.i,a.yj=this.wk,N5(a,2);else if(2==this.gb)if(this.mx)n5(7),this.jB=Date.now();else if("11111"==b){if(n5(6),this.mx=!0,this.Fv=Date.now(),a=this.Fv-this.uJ,!g.ye||g.ce(10)||500>a)this.wk=200,this.Rg.cancel(),n5(12),F5(this.i,this,!0)}else n5(8),this.Fv=this.jB=Date.now(),this.mx=!1};
g.k.Tu=function(){this.wk=this.Rg.Dr;if(this.Rg.Ui)0==this.gb?this.Pr?(this.gb=1,ALa(this)):(this.gb=2,G5(this)):2==this.gb&&((!g.ye||g.ce(10)?!this.mx:200>this.jB-this.Fv)?(n5(11),F5(this.i,this,!1)):(n5(12),F5(this.i,this,!0)));else{0==this.gb?n5(9):2==this.gb&&n5(10);var a=this.i;this.Rg.getLastError();a.yj=this.wk;N5(a,2)}};
g.k.fu=function(){return this.i.fu()};
g.k.isActive=function(){return this.i.isActive()};
g.k.Hi=function(a){this.i.Hi(a)};g.k=H5.prototype;g.k.xj=null;g.k.rs=null;g.k.Fg=null;g.k.me=null;g.k.Vy=null;g.k.Gv=null;g.k.jF=null;g.k.Uu=null;g.k.vt=0;g.k.SO=0;g.k.Ff=null;g.k.Xl=null;g.k.Gk=null;g.k.Un=null;g.k.Ql=null;g.k.Wx=null;g.k.wq=-1;g.k.fH=-1;g.k.yj=-1;g.k.cq=0;g.k.Qp=0;g.k.Nn=8;g.Ta(CLa,g.yl);g.Ta(DLa,g.yl);g.k=H5.prototype;g.k.connect=function(a,b,c,d,e){n5(0);this.Vy=b;this.rs=c||{};d&&void 0!==e&&(this.rs.OSID=d,this.rs.OAID=e);this.C?(l5((0,g.C)(this.BF,this,a),100),HLa(this)):this.BF(a)};
g.k.BF=function(a){this.Ql=new zLa(this);this.Ql.Ty=this.xj;this.Ql.l=this.B;this.Ql.connect(a)};
g.k.fE=function(){return 0==this.gb};
g.k.getState=function(){return this.gb};
g.k.yI=function(a){this.Xl=null;LLa(this,a)};
g.k.xI=function(){this.Gk=null;this.me=new p5(this,this.l,"rpc",this.G);this.me.pn=this.xj;this.me.Sy=0;var a=this.jF.clone();J4(a,"RID","rpc");J4(a,"SID",this.l);J4(a,"CI",this.Wx?"0":"1");J4(a,"AID",this.wq);I5(this,a);if(!g.ye||g.ce(10))J4(a,"TYPE","xmlhttp"),q5(this.me,a,!0,this.Uu,!1);else{J4(a,"TYPE","html");var b=this.me,c=!!this.Uu;b.Tq=3;b.Ll=K4(a.clone());oLa(b,c)}};
g.k.tI=function(a,b){if(0!=this.gb&&(this.me==a||this.Fg==a))if(this.yj=a.Dr,this.Fg==a&&3==this.gb)if(7<this.Nn){try{var c=this.B.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Gk){if(this.me)if(this.me.Jq+3E3<this.Fg.Jq)K5(this),this.me.cancel(),this.me=null;else break a;M5(this);n5(19)}}else this.fH=a[1],0<this.fH-this.wq&&37500>a[2]&&this.Wx&&0==this.Qp&&!this.Un&&(this.Un=l5((0,g.C)(this.uP,this),6E3));else N5(this,11)}else null!=b&&N5(this,11);else if(this.me==
a&&K5(this),!g.oc(b))for(a=this.B.parse(b),b=0;b<a.length;b++)c=a[b],this.wq=c[0],c=c[1],2==this.gb?"c"==c[0]?(this.l=c[1],this.Uu=c[2],c=c[3],null!=c?this.Nn=c:this.Nn=6,this.gb=3,this.Ff&&this.Ff.xF(),this.jF=E5(this,this.fu()?this.Uu:null,this.Vy),MLa(this)):"stop"==c[0]&&N5(this,7):3==this.gb&&("stop"==c[0]?N5(this,7):"noop"!=c[0]&&this.Ff&&this.Ff.wF(c),this.Qp=0)};
g.k.uP=function(){null!=this.Un&&(this.Un=null,this.me.cancel(),this.me=null,M5(this),n5(20))};
g.k.Tu=function(a){if(this.me==a){K5(this);this.me=null;var b=2}else if(this.Fg==a)this.Fg=null,b=1;else return;this.yj=a.Dr;if(0!=this.gb)if(a.Ui)if(1==b){b=Date.now()-a.Jq;var c=m5;c.dispatchEvent(new CLa(c,a.Vo?a.Vo.length:0,b,this.cq));J5(this);this.u.length=0}else MLa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.yj)){if(d=1==b)this.Fg||this.Xl||1==this.gb||2<=this.cq?d=!1:(this.Xl=l5((0,g.C)(this.yI,this,a),NLa(this,this.cq)),this.cq++,d=!0);d=!(d||2==b&&M5(this))}if(d)switch(c){case 1:N5(this,
5);break;case 4:N5(this,10);break;case 3:N5(this,6);break;case 7:N5(this,12);break;default:N5(this,2)}}};
g.k.qN=function(a){if(!g.gb(arguments,this.gb))throw Error("Unexpected channel state: "+this.gb);};
g.k.SS=function(a){a?n5(2):(n5(1),OLa(this,8))};
g.k.Yz=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new z5;a.Da=!1;return a};
g.k.isActive=function(){return!!this.Ff&&this.Ff.isActive(this)};
g.k.Hi=function(a){var b=m5;b.dispatchEvent(new DLa(b,a))};
g.k.fu=function(){return!(!g.ye||g.ce(10))};
g.k=PLa.prototype;g.k.xF=function(){};
g.k.wF=function(){};
g.k.vF=function(){};
g.k.Kz=function(){};
g.k.dG=function(){return{}};
g.k.isActive=function(){return!0};g.k=QLa.prototype;g.k.isEmpty=function(){return g.ib(this.i)&&g.ib(this.l)};
g.k.clear=function(){this.i=[];this.l=[]};
g.k.contains=function(a){return g.gb(this.i,a)||g.gb(this.l,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.fFa)(b,a);0<=c?(g.kb(b,c),b=!0):b=!1;return b||g.lb(this.l,a)};
g.k.Hg=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.l.length;for(b=0;b<c;++b)a.push(this.l[b]);return a};g.Ta(O5,g.F);g.k=O5.prototype;g.k.FR=function(){this.Kf=Math.min(3E5,2*this.Kf);this.u();this.l&&this.start()};
g.k.start=function(){var a=this.Kf+15E3*Math.random();g.pn(this.i,a);this.l=g.Sa()+a};
g.k.stop=function(){this.i.stop();this.l=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Kf=5E3};g.Ta(P5,PLa);g.k=P5.prototype;g.k.subscribe=function(a,b,c){return this.u.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.u.unsubscribe(a,b,c)};
g.k.Pf=function(a){return this.u.Pf(a)};
g.k.W=function(a,b){return this.u.W.apply(this.u,arguments)};
g.k.dispose=function(){this.Va||(this.Va=!0,g.Ci(this.u),TLa(this),g.Ci(this.l),this.l=null,this.X=function(){return""})};
g.k.Ha=function(){return this.Va};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.V="";this.l.stop();this.C=a||null;this.B=b||0;a=this.Y+"/test";b=this.Y+"/bind";var d=new H5(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ma),e=this.i;e&&(e.Ff=null);d.Ff=this;this.i=d;Q5(this);if(this.i){d=g.M("ID_TOKEN");var f=this.i.xj||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.xj=f}e?(3!=e.getState()&&0==JLa(e)||e.getState(),this.i.connect(a,b,this.G,e.l,e.wq)):c?this.i.connect(a,
b,this.G,c.sessionId,c.arrayId):this.i.connect(a,b,this.G)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Wb(a,b);this.l.isActive()||2==(this.i?this.i.getState():0)?this.J.push(a):R5(this)&&(Q5(this),ILa(this.i,a))};
g.k.xF=function(){this.l.reset();this.C=null;this.B=0;if(this.J.length){var a=this.J;this.J=[];for(var b=0,c=a.length;b<c;++b)ILa(this.i,a[b])}this.W("handlerOpened")};
g.k.vF=function(a){var b=2==a&&401==this.i.yj;4==a||b||this.l.start();this.W("handlerError",a,b)};
g.k.Kz=function(a){if(!this.l.isActive())this.W("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.J.push(d)}};
g.k.dG=function(){var a={v:2};this.V&&(a.gsessionid=this.V);0!=this.B&&(a.ui=""+this.B);0!=this.L&&(a.ui=""+this.L);this.C&&g.Wb(a,this.C);return a};
g.k.wF=function(a){"S"==a[0]?this.V=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),GLa(this.i)):this.W("handlerMessage",new RLa(a[0],a[1]))};
g.k.Bx=function(a){(this.G.loungeIdToken=a)||this.l.stop();if(this.va&&this.i){var b=this.i.xj||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.xj=b}};
g.k.yS=function(){this.l.isActive();0==JLa(this.i)&&this.connect(this.C,this.B)};S5.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
S5.prototype.u=function(a,b){a(Error("Request error: "+b.status))};
S5.prototype.C=function(a){a(Error("request timed out"))};var $La=Date.now(),V5=null,Y5=Array(50),X5=-1,Z5=!1;g.Ta($5,g.P);$5.prototype.gh=function(){return this.screens};
$5.prototype.contains=function(a){return!!V4(this.screens,a)};
$5.prototype.get=function(a){return a?W4(this.screens,a):null};
$5.prototype.info=function(a){W5(this.G,a)};g.v(a6,g.P);g.k=a6.prototype;g.k.start=function(){!this.i&&isNaN(this.Hb)&&this.II()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Hb)||(g.rp(this.Hb),this.Hb=NaN)};
g.k.ra=function(){this.stop();g.P.prototype.ra.call(this)};
g.k.II=function(){this.Hb=NaN;this.i=g.wp(T5(this.u,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.C)(this.dM,this),onError:(0,g.C)(this.cM,this),onTimeout:(0,g.C)(this.eM,this)})};
g.k.dM=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.B;a.name=this.G;b=-1;this.C&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.W("pairingComplete",new Q4(a),b)};
g.k.cM=function(a){this.i=null;a.status&&404==a.status?this.l>=uNa.length?this.W("pairingFailed",Error("DIAL polling timed out")):(a=uNa[this.l],this.Hb=g.pp((0,g.C)(this.II,this),a),this.l++):this.W("pairingFailed",Error("Server error "+a.status))};
g.k.eM=function(){this.i=null;this.W("pairingFailed",Error("Server not responding"))};
var uNa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ta(c6,$5);g.k=c6.prototype;g.k.start=function(){b6(this)&&this.W("screenChange");!g.mv("yt-remote-lounge-token-expiration")&&dMa(this);g.rp(this.i);this.i=g.pp((0,g.C)(this.start,this),1E4)};
g.k.add=function(a,b){b6(this);aMa(this,a);d6(this,!1);this.W("screenChange");b(a);a.token||dMa(this)};
g.k.remove=function(a,b){var c=b6(this);cMa(this,a)&&(d6(this,!1),c=!0);b(a);c&&this.W("screenChange")};
g.k.Ux=function(a,b,c,d){var e=b6(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,d6(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.W("screenChange")};
g.k.ra=function(){g.rp(this.i);c6.Od.ra.call(this)};
g.k.NN=function(a){b6(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}d6(this,!b);b&&W5(this.G,"Missed "+b+" lounge tokens.")};
g.k.MN=function(a){W5(this.G,"Requesting lounge tokens failed: "+a)};g.v(f6,g.P);g.k=f6.prototype;g.k.start=function(){var a=parseInt(g.mv("yt-remote-fast-check-period")||"0",10);(this.B=g.Sa()-144E5<a?0:a)?i6(this):(this.B=g.Sa()+3E5,g.lv("yt-remote-fast-check-period",this.B),this.nC())};
g.k.isEmpty=function(){return g.Pb(this.i)};
g.k.update=function(){e6("Updating availability on schedule.");var a=this.G(),b=g.Db(this.i,function(c,d){return c&&!!W4(a,d)},this);
h6(this,b)};
g.k.ra=function(){g.rp(this.u);this.u=NaN;this.l&&(this.l.abort(),this.l=null);g.P.prototype.ra.call(this)};
g.k.nC=function(){g.rp(this.u);this.u=NaN;this.l&&this.l.abort();var a=fMa(this);if(M4(a)){var b=T5(this.C,"/pairing/get_screen_availability");this.l=U5(this.C,b,{lounge_token:g.Kb(a).join(",")},(0,g.C)(this.oR,this,a),(0,g.C)(this.nR,this))}else h6(this,{}),i6(this)};
g.k.oR=function(a,b){this.l=null;var c=g.Kb(fMa(this));if(g.yb(c,g.Kb(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;h6(this,c);i6(this)}else this.Pd("Changing Screen set during request."),this.nC()};
g.k.nR=function(a){this.Pd("Screen availability failed: "+a);this.l=null;i6(this)};
g.k.Pd=function(a){W5("OnlineScreenService",a)};g.Ta(j6,$5);g.k=j6.prototype;g.k.start=function(){this.l.start();this.i.start();this.screens.length&&(this.W("screenChange"),this.i.isEmpty()||this.W("onlineScreenChange"))};
g.k.add=function(a,b,c){this.l.add(a,b,c)};
g.k.remove=function(a,b,c){this.l.remove(a,b,c);this.i.update()};
g.k.Ux=function(a,b,c,d){this.l.contains(a)?this.l.Ux(a,b,c,d):(a="Updating name of unknown screen: "+a.name,W5(this.G,a),d(Error(a)))};
g.k.gh=function(a){return a?this.screens:g.ob(this.screens,g.Ke(this.u,function(b){return!this.contains(b)},this))};
g.k.gE=function(){return g.Ke(this.gh(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.hE=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new a6(this.B,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.Ci(l);e(k6(h,m),n)});
l.subscribe("pairingFailed",function(m){g.Ci(l);f(m)});
l.start();return(0,g.C)(l.stop,l)};
g.k.fM=function(a,b,c,d){g.wp(T5(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.C)(function(e,f){e=new Q4(f.screen||{});if(!e.name||jMa(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);jMa(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(k6(this,e))},this),
onError:(0,g.C)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.C)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ra=function(){g.Ci(this.l);g.Ci(this.i);j6.Od.ra.call(this)};
g.k.TN=function(){lMa(this);this.W("screenChange");this.i.update()};
j6.prototype.dispose=j6.prototype.dispose;g.Ta(m6,g.P);g.k=m6.prototype;g.k.getScreen=function(){return this.B};
g.k.gg=function(a){this.Ha()||(a&&o6(this,""+a),this.B=null,this.W("sessionScreen",null))};
g.k.info=function(a){W5(this.xa,a)};
g.k.iE=function(){return null};
g.k.xC=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.C)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.C)(function(){o6(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ra=function(){this.xC("");m6.Od.ra.call(this)};g.v(p6,m6);g.k=p6.prototype;g.k.wC=function(a){if(this.l){if(this.l==a)return;o6(this,"Overriding cast session with new session object");uMa(this);this.ma=!1;this.V="unknown";this.l.removeUpdateListener(this.Y);this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.va)}this.l=a;this.l.addUpdateListener(this.Y);this.l.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.va);qMa(this,"getMdxSessionStatus")};
g.k.xq=function(a){this.info("launchWithParams no-op for Cast: "+g.yj(a))};
g.k.stop=function(){this.l?this.l.stop((0,g.C)(function(){this.gg()},this),(0,g.C)(function(){this.gg(Error("Failed to stop receiver app."))},this)):this.gg(Error("Stopping cast device without session."))};
g.k.xC=function(){};
g.k.ra=function(){this.info("disposeInternal");uMa(this);this.l&&(this.l.removeUpdateListener(this.Y),this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.va));this.l=null;m6.prototype.ra.call(this)};
g.k.XR=function(a,b){if(!this.Ha())if(b)if(b=j5(b),g.Na(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.yj(b)),a){case "mdxSessionStatus":oMa(this,b);break;case "loungeToken":rMa(this,b);break;default:o6(this,"Unknown youtube message: "+a)}else o6(this,"Unable to parse message.");else o6(this,"No data in message.")};
g.k.rG=function(a,b,c,d){g.rp(this.L);this.L=0;iMa(this.u,this.i.label,a,this.i.friendlyName,(0,g.C)(function(e){e?b(e):0<=d?(o6(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.L=g.pp((0,g.C)(this.rG,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.iE=function(){return this.l};
g.k.gM=function(a){this.Ha()||a||(o6(this,"Cast session died."),this.gg())};g.v(s6,m6);g.k=s6.prototype;g.k.wC=function(a){this.l=a;this.l.addUpdateListener(this.Aa)};
g.k.xq=function(a){this.Fa=a;this.X()};
g.k.stop=function(){BMa(this);this.l?this.l.stop((0,g.C)(this.gg,this,null),(0,g.C)(this.gg,this,"Failed to stop DIAL device.")):this.gg()};
g.k.ra=function(){BMa(this);this.l&&this.l.removeUpdateListener(this.Aa);this.l=null;m6.prototype.ra.call(this)};
g.k.hM=function(a){this.Ha()||a||(o6(this,"DIAL session died."),this.C(),this.C=g.Ja,this.gg())};g.v(w6,m6);w6.prototype.stop=function(){this.gg()};
w6.prototype.wC=function(){};
w6.prototype.xq=function(){g.rp(this.l);this.l=NaN;var a=W4(this.u.gh(),this.i.label);a?n6(this,a):this.gg(Error("No such screen"))};
w6.prototype.ra=function(){g.rp(this.l);this.l=NaN;m6.prototype.ra.call(this)};g.v(x6,g.P);g.k=x6.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.J);this.L||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.V?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.C)(this.YQ,this);c=new chrome.cast.ApiConfig(c,(0,g.C)(this.uI,this),e,d,a);c.customDialLaunchCallback=(0,g.C)(this.OP,this);chrome.cast.initialize(c,(0,g.C)(function(){this.Ha()||
(chrome.cast.addReceiverActionListener(this.C),XLa(),this.l.subscribe("onlineScreenChange",(0,g.C)(this.jE,this)),this.u=DMa(this),chrome.cast.setCustomReceivers(this.u,g.Ja,(0,g.C)(function(f){this.Pd("Failed to set initial custom receivers: "+g.yj(f))},this)),this.W("yt-remote-cast2-availability-change",z6(this)),b(!0))},this),(0,g.C)(function(f){this.Pd("Failed to initialize API: "+g.yj(f));
b(!1)},this))};
g.k.DS=function(a,b){y6("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)y6("Unsetting old screen status: "+this.i.i.friendlyName),A6(this,null)}if(a&&b){if(!this.i){c=W4(this.l.gh(),a);if(!c){y6("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){y6("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=CMa(this,c);a||(y6("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.u.push(a),chrome.cast.setCustomReceivers(this.u,g.Ja,(0,g.C)(function(d){this.Pd("Failed to set initial custom receivers: "+g.yj(d))},this)));
y6("setConnectedScreenStatus: new active receiver: "+a.friendlyName);A6(this,new w6(this.l,a),!0)}this.i.xC(b)}else y6("setConnectedScreenStatus: no screen.")};
g.k.ES=function(a){this.Ha()?this.Pd("Setting connection data on disposed cast v2"):this.i?this.i.xq(a):this.Pd("Setting connection data without a session")};
g.k.jM=function(){this.Ha()?this.Pd("Stopping session on disposed cast v2"):this.i?(this.i.stop(),A6(this,null)):y6("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.C)(this.uI,this),(0,g.C)(this.rR,this))};
g.k.ra=function(){this.l.unsubscribe("onlineScreenChange",(0,g.C)(this.jE,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.C);var a=ULa,b=g.Ia("yt.mdx.remote.debug.handlers_");g.lb(b||[],a);g.Ci(this.i);g.P.prototype.ra.call(this)};
g.k.Pd=function(a){W5("Controller",a)};
g.k.wI=function(a,b){this.i==a&&(b||A6(this,null),this.W("yt-remote-cast2-session-change",b))};
g.k.VQ=function(a,b){if(!this.Ha())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),y6("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)y6("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{y6("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.W("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:A6(this,
new w6(this.l,a));break;case chrome.cast.ReceiverType.DIAL:A6(this,new s6(this.l,a,this.B,this.config_));break;case chrome.cast.ReceiverType.CAST:A6(this,new p6(this.l,a,this.config_));break;default:this.Pd("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.Pd("Stopping receiver w/o session: "+a.friendlyName)}else this.Pd("onReceiverAction_ called without receiver.")};
g.k.OP=function(a){if(this.Ha())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Pd("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.Pd("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return y6("Reselecting dial screen."),
this.W("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Pd('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);A6(this,new s6(this.l,b,this.B,this.config_))}b=this.i;b.L=a;b.L.appState==chrome.cast.DialAppState.RUNNING?(a=b.L.extraData||{},c=a.screenId||null,t6(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=yMa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.L.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.Vo(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=zMa(b,c)):a=zMa(b,c)):a=v6(b);return a};
g.k.uI=function(a){if(!this.Ha()){y6("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(b.receiverType==chrome.cast.ReceiverType.CAST)y6("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),A6(this,new p6(this.l,b,this.config_),!0);else{this.Pd("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.i.i,d=W4(this.l.gh(),c.label);d&&R4(d,
b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(y6("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Ci(this.i),this.i=new p6(this.l,b,this.config_),this.i.subscribe("sessionScreen",(0,g.C)(this.wI,this,this.i)),this.i.xq(null));this.i.wC(a)}}};
g.k.iM=function(){return this.i?this.i.iE():null};
g.k.rR=function(a){this.Ha()||(this.Pd("Failed to estabilish a session: "+g.yj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&A6(this,null))};
g.k.YQ=function(a){y6("Receiver availability updated: "+a);if(!this.Ha()){var b=z6(this);this.G=a==chrome.cast.ReceiverAvailability.AVAILABLE;z6(this)!=b&&this.W("yt-remote-cast2-availability-change",z6(this))}};
g.k.jE=function(){this.Ha()||(this.u=DMa(this),y6("Updating custom receivers: "+g.yj(this.u)),chrome.cast.setCustomReceivers(this.u,g.Ja,(0,g.C)(function(){this.Pd("Failed to set custom receivers.")},this)),this.W("yt-remote-cast2-availability-change",z6(this)))};
x6.prototype.setLaunchParams=x6.prototype.ES;x6.prototype.setConnectedScreenStatus=x6.prototype.DS;x6.prototype.stopSession=x6.prototype.jM;x6.prototype.getCastSession=x6.prototype.iM;x6.prototype.requestSession=x6.prototype.requestSession;x6.prototype.init=x6.prototype.init;x6.prototype.dispose=x6.prototype.dispose;var G6=[];g.k=L6.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";M6(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Nj=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.G=a.playerTimeAt,this.B=a.seekableStart,this.i=a.seekableEnd,this.C=a.duration,this.L=a.loadedTime,this.u=a.liveIngestionTime,this.l=
!isNaN(this.u))};
g.k.wc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.getDuration=function(){return this.l?this.C+N6(this):this.C};
g.k.clone=function(){return new L6(R6(this))};g.v(T6,g.P);g.k=T6.prototype;g.k.getState=function(){return this.gb};
g.k.play=function(){V6(this)?(this.i?this.i.play(null,g.Ja,$6(this,"play")):Z6(this,"play"),Y6(this,1,P6(U6(this))),this.W("remotePlayerChange")):W6(this,this.play)};
g.k.pause=function(){V6(this)?(this.i?this.i.pause(null,g.Ja,$6(this,"pause")):Z6(this,"pause"),Y6(this,2,P6(U6(this))),this.W("remotePlayerChange")):W6(this,this.pause)};
g.k.seekTo=function(a){if(V6(this)){if(this.i){var b=U6(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.wc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ja,$6(this,"seekTo",{newTime:a}))}else Z6(this,"seekTo",{newTime:a});Y6(this,3,a);this.W("remotePlayerChange")}else W6(this,g.Qa(this.seekTo,a))};
g.k.stop=function(){if(V6(this)){this.i?this.i.stop(null,g.Ja,$6(this,"stopVideo")):Z6(this,"stopVideo");var a=U6(this);a.index=-1;a.videoId="";M6(a);X6(this,a);this.W("remotePlayerChange")}else W6(this,this.stop)};
g.k.setVolume=function(a,b){if(V6(this)){var c=U6(this);if(this.l){if(c.volume!=a){var d=Math.round(a)/100;this.l.setReceiverVolumeLevel(d,(0,g.C)(function(){W5("CP","set receiver volume: "+d)},this),(0,g.C)(function(){this.Pd("failed to set receiver volume.")},this))}c.muted!=b&&this.l.setReceiverMuted(b,(0,g.C)(function(){W5("CP","set receiver muted: "+b)},this),(0,g.C)(function(){this.Pd("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);Z6(this,"setVolume",e)}c.muted=b;c.volume=a;X6(this,c)}else W6(this,g.Qa(this.setVolume,a,b))};
g.k.kE=function(a,b){if(V6(this)){var c=U6(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.yj(b.style),g.Wb(a,c.trackData));Z6(this,"setSubtitlesTrack",a);X6(this,c)}else W6(this,g.Qa(this.kE,a,b))};
g.k.setAudioTrack=function(a,b){V6(this)?(b=b.getLanguageInfo().getId(),Z6(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=U6(this),a.audioTrackId=b,X6(this,a)):W6(this,g.Qa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){var l=U6(this);c=c||0;var m={videoId:a,currentIndex:c};Q6(l,a,c);void 0!==b&&(O6(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=h&&(m.locationInfo=g.yj(h));Z6(this,"setPlaylist",m);d||X6(this,l)};
g.k.hx=function(a,b){if(V6(this)){if(a&&b){var c=U6(this);Q6(c,a,b);X6(this,c)}Z6(this,"previous")}else W6(this,g.Qa(this.hx,a,b))};
g.k.nextVideo=function(a,b){if(V6(this)){if(a&&b){var c=U6(this);Q6(c,a,b);X6(this,c)}Z6(this,"next")}else W6(this,g.Qa(this.nextVideo,a,b))};
g.k.OF=function(){V6(this)?Z6(this,"dismissAutoplay"):W6(this,this.OF)};
g.k.dispose=function(){if(3!=this.gb){var a=this.gb;this.gb=3;this.W("proxyStateChange",a,this.gb)}g.P.prototype.dispose.call(this)};
g.k.ra=function(){PMa(this);this.u=null;this.B.clear();S6(this,null);g.P.prototype.ra.call(this)};
g.k.zC=function(a){if((a!=this.gb||2==a)&&3!=this.gb&&0!=a){var b=this.gb;this.gb=a;this.W("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,g.ib(b.i)&&(b.i=b.l,b.i.reverse(),b.l=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.SQ=function(a,b){this.W(a,b)};
g.k.AP=function(a){if(!a)this.Bt(null),S6(this,null);else if(this.l.receiver.volume){a=this.l.receiver.volume;var b=U6(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)W5("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,X6(this,b)}};
g.k.Bt=function(a){W5("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.J);if(this.i=a)this.i.addUpdateListener(this.J),QMa(this),this.W("remotePlayerChange")};
g.k.zP=function(a){a?(QMa(this),this.W("remotePlayerChange")):this.Bt(null)};
g.k.QC=function(){Z6(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.HP=function(){var a=MMa();a&&S6(this,a)};
g.k.Pd=function(a){W5("CP",a)};g.v(a7,g.P);g.k=a7.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,h=b.index,l={videoId:d},m=b.currentTime;b=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);b&&(l.locationInfo=b);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==h&&(l.currentIndex=h);c&&(this.hc.listId=c);this.hc.videoId=d;this.hc.index=h||0;this.hc.state=3;O6(this.hc,m);this.B="UNSUPPORTED";b7("Connecting with setPlaylist and params: "+g.yj(l));this.i.connect({method:"setPlaylist",
params:g.yj(l)},a,PKa())}else b7("Connecting without params"),this.i.connect({},a,PKa());SMa(this)};
g.k.Bx=function(a){this.i.Bx(a)};
g.k.dispose=function(){this.Ha()||(this.W("beforeDispose"),c7(this,3));g.P.prototype.dispose.call(this)};
g.k.ra=function(){d7(this);f7(this);e7(this);g.rp(this.J);this.J=NaN;g.rp(this.L);this.L=NaN;this.u=null;g.Wp(this.V);this.V.length=0;this.i.dispose();g.P.prototype.ra.call(this);this.B=this.G=this.l=this.hc=this.i=null};
g.k.JN=function(){this.Yp(2)};
g.k.EP=function(){b7("Channel opened");this.ma&&(this.ma=!1,e7(this),this.Y=g.pp((0,g.C)(function(){b7("Timing out waiting for a screen.");this.Yp(1)},this),15E3));
TKa(SLa(this.i),this.Aa)};
g.k.BP=function(){b7("Channel closed");isNaN(this.C)?a5(!0):a5();this.dispose()};
g.k.CP=function(a,b){a5();isNaN(this.Ks())?(b&&"shortLived"==this.va&&this.W("browserChannelAuthError",a),b7("Channel error: "+a+" without reconnection"),this.dispose()):(this.ma=!0,b7("Channel error: "+a+" with reconnection in "+this.Ks()+" ms"),c7(this,2))};
g.k.DP=function(a){a.params?b7("Received: action="+a.action+", params="+g.yj(a.params)):b7("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=j5(a.params.devices);this.l=g.Pc(a,function(c){return new P4(c)});
a=!!g.db(this.l,function(c){return"LOUNGE_SCREEN"==c.type});
VMa(this,a);break;case "loungeScreenDisconnected":g.nb(this.l,function(c){return"LOUNGE_SCREEN"==c.type});
VMa(this,!1);break;case "remoteConnected":var b=new P4(j5(a.params.device));g.db(this.l,function(c){return b?c.id==b.id:!1})||zKa(this.l,b);
break;case "remoteDisconnected":b=new P4(j5(a.params.device));g.nb(this.l,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":XMa(this,a);break;case "nowPlaying":ZMa(this,a);break;case "onStateChange":YMa(this,a);break;case "onAdStateChange":$Ma(this,a);break;case "onVolumeChanged":aNa(this,a);break;case "onSubtitlesTrackChanged":WMa(this,a);break;case "nowAutoplaying":bNa(this,a);break;case "autoplayDismissed":this.W("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.W("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.W("autoplayModeChange",this.B);"DISABLED"==this.B&&this.W("autoplayDismissed");break;case "onHasPreviousNextChanged":cNa(this,a);break;case "requestAssistedSignIn":this.W("assistedSignInRequested",a.params.authCode);break;default:b7("Unrecognized action: "+a.action)}};
g.k.uS=function(){if(this.u){var a=this.u;this.u=null;this.hc.videoId!=a&&g7(this,"getNowPlaying")}};
g.k.EN=function(){var a=3;this.Ha()||(a=0,isNaN(this.Ks())?R5(this.i)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.Yp=function(a){b7("Disconnecting with "+a);d7(this);this.W("beforeDisconnect",a);1==a&&a5();TLa(this.i,a);this.dispose()};
g.k.CN=function(){var a=this.hc;this.u&&(a=this.hc.clone(),Q6(a,this.u,a.index));return R6(a)};
g.k.GS=function(a){var b=new L6(a);b.videoId&&b.videoId!=this.hc.videoId&&(this.u=b.videoId,g.rp(this.J),this.J=g.pp((0,g.C)(this.uS,this),5E3));var c=[];this.hc.listId==b.listId&&this.hc.videoId==b.videoId&&this.hc.index==b.index||c.push("remoteQueueChange");this.hc.playerState==b.playerState&&this.hc.volume==b.volume&&this.hc.muted==b.muted&&P6(this.hc)==P6(b)&&g.yj(this.hc.trackData)==g.yj(b.trackData)||c.push("remotePlayerChange");this.hc.reset(a);g.Ab(c,function(d){this.W(d)},this)};
g.k.pG=function(){var a=this.i.G.id,b=g.db(this.l,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Ks=function(){var a=this.i;return a.l.isActive()?a.l.l-g.Sa():NaN};
g.k.AN=function(){return this.B||"UNSUPPORTED"};
g.k.BN=function(){return this.G||""};
g.k.kM=function(){if(!isNaN(this.Ks())){var a=this.i.l;g.qn(a.i);a.start()}};
g.k.CS=function(a,b){g7(this,a,b);UMa(this)};
g.k.lE=function(){var a=g.Go("SID","")||"",b=g.Go("SAPISID","")||"",c=g.Go("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.vf(g.Ye(a),2);b=g.vf(g.Ye(b),2);c=g.vf(g.Ye(c),2);return g.vf(g.Ye(a+","+b+","+c),2)};
a7.prototype.subscribe=a7.prototype.subscribe;a7.prototype.unsubscribeByKey=a7.prototype.Pf;a7.prototype.getProxyState=a7.prototype.EN;a7.prototype.disconnect=a7.prototype.Yp;a7.prototype.getPlayerContextData=a7.prototype.CN;a7.prototype.setPlayerContextData=a7.prototype.GS;a7.prototype.getOtherConnectedRemoteId=a7.prototype.pG;a7.prototype.getReconnectTimeout=a7.prototype.Ks;a7.prototype.getAutoplayMode=a7.prototype.AN;a7.prototype.getAutoplayVideoId=a7.prototype.BN;a7.prototype.reconnect=a7.prototype.kM;
a7.prototype.sendMessage=a7.prototype.CS;a7.prototype.getXsrfToken=a7.prototype.lE;g.v(h7,$5);g.k=h7.prototype;g.k.gh=function(a){return this.Jf.$_gs(a)};
g.k.contains=function(a){return!!this.Jf.$_c(a)};
g.k.get=function(a){return this.Jf.$_g(a)};
g.k.start=function(){this.Jf.$_st()};
g.k.add=function(a,b,c){this.Jf.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Jf.$_r(a,b,c)};
g.k.Ux=function(a,b,c,d){this.Jf.$_un(a,b,c,d)};
g.k.ra=function(){for(var a=0,b=this.i.length;a<b;++a)this.Jf.$_ubk(this.i[a]);this.i.length=0;this.Jf=null;$5.prototype.ra.call(this)};
g.k.lM=function(){this.W("screenChange")};
g.k.zQ=function(){this.W("onlineScreenChange")};
j6.prototype.$_st=j6.prototype.start;j6.prototype.$_gspc=j6.prototype.fM;j6.prototype.$_gsppc=j6.prototype.hE;j6.prototype.$_c=j6.prototype.contains;j6.prototype.$_g=j6.prototype.get;j6.prototype.$_a=j6.prototype.add;j6.prototype.$_un=j6.prototype.Ux;j6.prototype.$_r=j6.prototype.remove;j6.prototype.$_gs=j6.prototype.gh;j6.prototype.$_gos=j6.prototype.gE;j6.prototype.$_s=j6.prototype.subscribe;j6.prototype.$_ubk=j6.prototype.Pf;var u7=null,A7=!1,i7=null,j7=null,z7=null,n7=[];g.v(B7,g.F);g.k=B7.prototype;g.k.ra=function(){g.F.prototype.ra.call(this);this.i.stop();this.u.stop();this.L.stop();this.Y();var a=this.Rb;a.unsubscribe("proxyStateChange",this.sI,this);a.unsubscribe("remotePlayerChange",this.Gt,this);a.unsubscribe("remoteQueueChange",this.ex,this);a.unsubscribe("previousNextChange",this.pI,this);a.unsubscribe("nowAutoplaying",this.jI,this);a.unsubscribe("autoplayDismissed",this.KH,this);this.Rb=this.l=null};
g.k.mE=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.Rb.gb)if(C7(this)){if(!U6(this.Rb).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":U6(this.Rb).wc()?this.Rb.pause():this.Rb.play();break;case "control_play":this.Rb.play();break;case "control_pause":this.Rb.pause();break;case "control_seek":this.J.dE(c[0],c[1]);break;case "control_subtitles_set_track":D7(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.I.getCurrentTime();E7(this,0===c?void 0:c);break;case "control_seek":E7(this,c[0]);break;case "control_subtitles_set_track":D7(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.xP=function(a){this.L.aM(a)};
g.k.lT=function(a){this.mE("control_subtitles_set_track",g.Pb(a)?null:a)};
g.k.zJ=function(){var a=this.I.getOption("captions","track");g.Pb(a)||D7(this,a)};
g.k.Wb=function(a){this.l.Wb(a,this.I.getVideoData().lengthSeconds)};
g.k.kQ=function(){g.Pb(this.B)||nNa(this,this.B);this.C=!1};
g.k.sI=function(a,b){this.u.stop();2===b&&this.tJ()};
g.k.Gt=function(){if(C7(this)){this.i.stop();var a=U6(this.Rb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.l.Ve=1;break;case 1082:case 1083:this.l.Ve=0;break;default:this.l.Ve=-1}switch(a.playerState){case 1081:case 1:this.Nb(new g.TI(8));this.sJ();break;case 1085:case 3:this.Nb(new g.TI(9));break;case 1083:case 0:this.Nb(new g.TI(2));this.J.stop();this.Wb(this.I.getVideoData().lengthSeconds);break;case 1084:this.Nb(new g.TI(4));break;case 2:this.Nb(new g.TI(4));this.Wb(P6(a));
break;case -1:this.Nb(new g.TI(64));break;case -1E3:this.Nb(new g.TI(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=U6(this.Rb).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,nNa(this,a));a=U6(this.Rb);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.V.isActive()||this.ZJ()}else mNa(this)};
g.k.pI=function(){this.I.W("mdxpreviousnextchange")};
g.k.ex=function(){C7(this)||mNa(this)};
g.k.jI=function(a){isNaN(a)||this.I.W("mdxnowautoplaying",a)};
g.k.KH=function(){this.I.W("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){C7(this)&&this.Rb.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===U6(this.Rb).playerState?E7(this,a):b&&this.Rb.seekTo(a)};
g.k.ZJ=function(){var a=this;if(C7(this)){var b=U6(this.Rb);this.events.jc(this.X);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.X=this.events.N(this.I,"onVolumeChange",function(c){lNa(a,c)})}};
g.k.sJ=function(){this.i.stop();if(!this.Rb.Ha()){var a=U6(this.Rb);a.wc()&&this.Nb(new g.TI(8));this.Wb(P6(a));this.i.start()}};
g.k.tJ=function(){this.u.stop();this.i.stop();var a=this.Rb.u.getReconnectTimeout();2==this.Rb.gb&&!isNaN(a)&&this.u.start()};
g.k.Nb=function(a){this.u.stop();var b=this.G;if(!g.YI(b,a)){var c=g.T(a,2);c!==g.T(this.G,2)&&this.I.bp(c);this.G=a;pNa(this.l,b,a)}};g.v(F7,g.V);F7.prototype.Wc=function(){this.i.show()};
F7.prototype.Bb=function(){this.i.hide()};
F7.prototype.l=function(){g.AI("https://web.archive.org/web/20210601003345/https://support.google.com/youtube/answer/7640706")};
F7.prototype.u=function(){O4("mdx-manual-pairing-popup-ok");this.Bb()};g.v(G7,g.V);G7.prototype.Wc=function(){this.i.show()};
G7.prototype.Bb=function(){this.i.hide()};
G7.prototype.l=function(){O4("mdx-privacy-popup-cancel");this.Bb()};
G7.prototype.u=function(){O4("mdx-privacy-popup-confirm");this.Bb()};g.v(H7,g.V);H7.prototype.l=function(a){oNa(this,a.state)};g.v(I7,g.UO);I7.prototype.C=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.Lm=g.Bb(a,this.i,this),g.VO(this,g.Pc(a,this.i)),a=this.I.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Bh(a),this.enable(!0)):this.enable(!1)};
I7.prototype.i=function(a){return a.key};
I7.prototype.ni=function(a){return"cast-selector-receiver"===a?"Cast...":this.Lm[a].name};
I7.prototype.cf=function(a){g.UO.prototype.cf.call(this,a);this.I.setOption("remote","currentReceiver",this.Lm[a]);this.yb.Bb()};g.v(J7,g.dM);g.k=J7.prototype;
g.k.create=function(){var a=this.player.T(),b=g.BD(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:g.R(a.experiments,"mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:g.R(a.experiments,"enable_dial_short_lived_lounge_token"),enableCastLoungeToken:g.R(a.experiments,"enable_cast_short_lived_lounge_token")};gNa(b,a);this.subscriptions.push(g.Uq("yt-remote-before-disconnect",this.wP,this));this.subscriptions.push(g.Uq("yt-remote-connection-change",this.ZQ,this));this.subscriptions.push(g.Uq("yt-remote-receiver-availability-change",
this.rI,this));this.subscriptions.push(g.Uq("yt-remote-auto-connect",this.XQ,this));this.subscriptions.push(g.Uq("yt-remote-receiver-resumed",this.WQ,this));this.subscriptions.push(g.Uq("mdx-privacy-popup-confirm",this.lS,this));this.subscriptions.push(g.Uq("mdx-privacy-popup-cancel",this.kS,this));this.subscriptions.push(g.Uq("mdx-manual-pairing-popup-ok",this.FO,this));this.rI()};
g.k.load=function(){this.player.cancelPlayback();g.dM.prototype.load.call(this);this.Dh=new B7(this,this.player,this.Rb);var a=(a=kNa())?a.currentTime:0;var b=y7()?new T6(s7(),void 0):null;0==a&&b&&(a=P6(U6(b)));0!==a&&this.Wb(a);pNa(this,this.ld,this.ld);this.player.hk(6)};
g.k.unload=function(){this.player.W("mdxautoplaycanceled");this.Sl=this.Ei;g.Di(this.Dh,this.Rb);this.Rb=this.Dh=null;g.dM.prototype.unload.call(this);this.player.hk(5);K7(this)};
g.k.ra=function(){g.Vq(this.subscriptions);g.dM.prototype.ra.call(this)};
g.k.Xj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.Dh.mE.apply(this.Dh,[a].concat(g.ma(c)))};
g.k.getAdState=function(){return this.Ve};
g.k.FN=function(){return this.loaded?this.Dh.suggestion:null};
g.k.Nj=function(){return this.Rb?U6(this.Rb).Nj:!1};
g.k.hasNext=function(){return this.Rb?U6(this.Rb).hasNext:!1};
g.k.Wb=function(a,b){this.gH=a||0;this.player.W("progresssync",a,b);this.player.Ma("onVideoProgress",a)};
g.k.getCurrentTime=function(){return this.gH};
g.k.getProgressState=function(){var a=U6(this.Rb),b=this.player.getVideoData();return{allowSeeking:g.R(this.player.T().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.Ue():!a.isAdPlaying()&&this.player.Ue(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.l?a.u+N6(a):a.u,isAtLiveHead:1>=(a.l?a.i+N6(a):a.i)-this.getCurrentTime(),loaded:a.L,seekableEnd:a.l?a.i+N6(a):a.i,seekableStart:0<a.B?a.B+
N6(a):a.B}};
g.k.nextVideo=function(){this.Rb&&this.Rb.nextVideo()};
g.k.hx=function(){this.Rb&&this.Rb.hx()};
g.k.wP=function(a){1===a&&(this.aC=this.Rb?U6(this.Rb):null)};
g.k.ZQ=function(){var a=y7()?new T6(s7(),void 0):null;if(a){var b=this.Sl;this.loaded&&this.unload();this.Rb=a;this.aC=null;b.key!==this.Ei.key&&(this.Sl=b,this.load())}else g.Ci(this.Rb),this.Rb=null,this.loaded&&(this.unload(),(a=this.aC)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,P6(a)));this.player.W("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.rI=function(){var a=[this.Ei],b=a.concat,c=hNa();H6()&&g.mv("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Lm=b.call(a,c);a=t7()||this.Ei;L7(this,a);this.player.Ma("onMdxReceiversChange")};
g.k.XQ=function(){var a=t7();L7(this,a)};
g.k.WQ=function(){this.Sl=t7()};
g.k.lS=function(){this.Kt=!0;K7(this);A7=!1;u7&&w7(u7,1);u7=null};
g.k.kS=function(){this.Kt=!1;K7(this);L7(this,this.Ei);this.Sl=this.Ei;A7=!1;u7=null;this.player.playVideo()};
g.k.FO=function(){this.Fw=!0;K7(this);g.lv("yt-remote-manual-pairing-warning-shown",!0,2592E3);A7=!1;u7&&w7(u7,1);u7=null};
g.k.Oe=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Lm;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?J6():L7(this,b)),this.loaded?this.Sl:this.Ei;case "quickCast":return 2===this.Lm.length&&"cast-selector-receiver"===this.Lm[1].key?(b&&J6(),!0):!1}};
g.k.QC=function(){this.Rb.QC()};
g.k.Yh=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.oM.remote=J7;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:33:45 Jun 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:14:54 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1421.831
  exclusion.robots: 0.102
  exclusion.robots.policy: 0.089
  cdx.remote: 0.082
  esindex: 0.014
  LoadShardBlock: 1210.727 (3)
  PetaboxLoader3.datanode: 1403.69 (5)
  load_resource: 1492.747 (2)
  PetaboxLoader3.resolve: 1292.862 (2)
*/