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

(function(g){var window=this;'use strict';var EKa=function(a,b){return g.Lb(a,b)},FKa=function(a){if(a instanceof g.Yi)return a;
if("function"==typeof a.ph)return a.ph(!1);if(g.La(a)){var b=0,c=new g.Yi;c.next=function(){for(;;){if(b>=a.length)throw g.Gn;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");},GKa=function(a,b,c){if(g.La(a))try{g.zb(a,b,c)}catch(d){if(d!==g.Gn)throw d;
}else{a=FKa(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.Gn)throw d;}}},b5=function(a,b,c){a.l.set(b,c)},c5=function(a){b5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Sa()).toString(36));
return a},d5=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.$m(a.l,b,c)},HKa=function(a,b){var c=[];
GKa(b,function(d){try{var e=g.Wn.prototype.l.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Vn(e)&&c.push(d)},a);
return c},IKa=function(a,b){b=HKa(a,b);
g.zb(b,function(c){g.Wn.prototype.remove.call(this,c)},a)},JKa=function(a){if(a.V){if(a.V.locationOverrideToken)return{locationOverrideToken:a.V.locationOverrideToken};
if(null!=a.V.latitudeE7&&null!=a.V.longitudeE7)return{latitudeE7:a.V.latitudeE7,longitudeE7:a.V.longitudeE7}}return null},KKa=function(a,b){g.fb(a,b)||a.push(b)},e5=function(a){var b=0,c;
for(c in a)b++;return b},LKa=function(a,b){b=b instanceof g.Bc?b:g.Ic(b,/^data:image\//i.test(b));
a.src=g.Cc(b)},MKa=function(a){try{return g.A.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},NKa=function(a){if(a.zg&&"function"==typeof a.zg)return a.zg();
if("string"===typeof a)return a.split("");if(g.La(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Ib(a)},OKa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.La(a)||"string"===typeof a)g.zb(a,b,void 0);else{if(a.Ch&&"function"==typeof a.Ch)var c=a.Ch();else if(a.zg&&"function"==typeof a.zg)c=void 0;else if(g.La(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Jb(a);d=NKa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},PKa=function(a,b,c,d){var e=new g.Om(null,void 0);
a&&g.Pm(e,a);b&&g.Qm(e,b);c&&g.Rm(e,c);d&&(e.J=d);return e},f5=function(){},g5=function(a,b){g.Qq[a]=!0;
var c=g.Oq();c&&c.publish.apply(c,arguments);g.Qq[a]=!1},h5=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Lm;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",QKa(this,a.capabilities||""),RKa(this,a.experiments||""))},QKa=function(a,b){a.capabilities.clear();
g.Je(b.split(","),g.Pa(EKa,SKa)).forEach(function(c){a.capabilities.add(c)})},RKa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},i5=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},j5=function(a,b){return!!b&&(a.id==b||a.uuid==b)},TKa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},UKa=function(a){return new i5(a)},VKa=function(a){return Array.isArray(a)?g.Mc(a,UKa):[]},k5=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},l5=function(a){return Array.isArray(a)?"["+g.Mc(a,k5).join(",")+"]":"null"},m5=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},WKa=function(a){return g.Mc(a,function(b){return{key:b.id,
name:b.name}})},n5=function(a,b){return g.bb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},o5=function(a,b){return g.bb(a,function(c){return j5(c,b)})},XKa=function(){var a=(0,g.nv)();
a&&IKa(a,a.i.ph(!0))},p5=function(){var a=g.qv("yt-remote-connected-devices")||[];
g.wb(a);return a},YKa=function(a){if(g.gb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Mc(a,function(d,e){return 0==e?d:d.substring(c.length)})},ZKa=function(a){g.pv("yt-remote-connected-devices",a,86400)},r5=function(){if(q5)return q5;
var a=g.qv("yt-remote-device-id");a||(a=m5(),g.pv("yt-remote-device-id",a,31536E3));for(var b=p5(),c=1,d=a;g.fb(b,d);)c++,d=a+"#"+c;return q5=d},s5=function(){var a=p5(),b=r5();
g.fb(a,b);g.uv()&&g.yb(a,b);a=YKa(a);if(g.gb(a))try{g.Fo("remote_sid")}catch(c){}else try{g.Do("remote_sid",a.join(","),-1)}catch(c){}},$Ka=function(){return g.qv("yt-remote-session-browser-channel")},aLa=function(){return g.qv("yt-remote-local-screens")||[]},bLa=function(){g.pv("yt-remote-lounge-token-expiration",!0,86400)},cLa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Mc(aLa(),function(d){return d.loungeToken}),c=g.Mc(a,function(d){return d.loungeToken});
g.hh(c,function(d){return!g.fb(b,d)})&&bLa();
g.pv("yt-remote-local-screens",a,31536E3)},dLa=function(a,b){g.pv("yt-remote-session-browser-channel",a);
g.pv("yt-remote-session-screen-id",b);a=p5();b=r5();g.fb(a,b)||a.push(b);ZKa(a);s5()},t5=function(a){a||(g.tv("yt-remote-session-screen-id"),g.tv("yt-remote-session-video-id"));
s5();a=p5();g.kb(a,r5());ZKa(a)},eLa=function(){if(!u5){var a=g.oo();
a&&(u5=new g.Qn(a))}},fLa=function(){eLa();
return u5?!!u5.get("yt-remote-use-staging-server"):!1},v5=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},gLa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},hLa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},w5=function(a){a.length?iLa(a.shift(),function(){w5(a)}):x5()},jLa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},iLa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.id(d,g.hg(a));(document.head||document.documentElement).appendChild(d)},kLa=function(){var a=v5(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20210501020656/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20210501020656/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},x5=function(){var a=hLa();
a&&a(!1,"No cast extension found")},y5=function(){if(lLa){var a=2,b=hLa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;iLa("//web.archive.org/web/20210501020656/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",x5,c)}},mLa=function(){y5();
var a=kLa();a.push("//web.archive.org/web/20210501020656/https://www.gstatic.com/eureka/clank/cast_sender.js");w5(a)},oLa=function(){y5();
var a=kLa();a.push.apply(a,g.la(nLa.map(jLa)));a.push("//web.archive.org/web/20210501020656/https://www.gstatic.com/eureka/clank/cast_sender.js");w5(a)},z5=function(a,b,c){g.F.call(this);
this.G=null!=c?(0,g.C)(a,c):a;this.Ef=b;this.C=(0,g.C)(this.LL,this);this.i=!1;this.l=0;this.u=this.yb=null;this.B=[]},A5=function(a,b,c){g.F.call(this);
this.B=null!=c?a.bind(c):a;this.Ef=b;this.u=null;this.i=!1;this.l=0;this.yb=null},B5=function(a){a.yb=g.Jm(function(){a.yb=null;
a.i&&!a.l&&(a.i=!1,B5(a))},a.Ef);
var b=a.u;a.u=null;a.B.apply(null,b)},C5=function(a){if(g.A.JSON)try{return g.A.JSON.parse(a)}catch(b){}return MKa(a)},D5=function(){},E5=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.A.setTimeout(function(){a()},b)},G5=function(a){F5.dispatchEvent(new pLa(F5,a))},pLa=function(a,b){g.Fl.call(this,"statevent",a);
this.stat=b},H5=function(){},qLa=function(){},sLa=function(a){return(a=rLa(a))?new ActiveXObject(a):new XMLHttpRequest},rLa=function(a){if(!a.l&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.l=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.l},I5=function(a,b,c,d){this.i=a;
this.l=b;this.L=c;this.J=d||1;this.C=45E3;this.B=new g.q0(this);this.u=new g.Im;this.u.setInterval(250)},uLa=function(a,b,c){a.Lq=1;
a.Cl=c5(b.clone());a.Mo=c;a.G=!0;tLa(a,null)},J5=function(a,b,c,d,e){a.Lq=1;
a.Cl=c5(b.clone());a.Mo=null;a.G=c;e&&(a.TI=!1);tLa(a,d)},tLa=function(a,b){a.Cq=Date.now();
K5(a);a.Gm=a.Cl.clone();d5(a.Gm,"t",a.J);a.ju=0;a.Ge=a.i.Jz(a.i.Kt()?b:null);0<a.Iy&&(a.Vw=new A5((0,g.C)(a.JJ,a,a.Ge),a.Iy));a.B.Pa(a.Ge,"readystatechange",a.XR);b=a.Wm?g.Sb(a.Wm):{};a.Mo?(a.Lx="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Ge.send(a.Gm,a.Lx,a.Mo,b)):(a.Lx="GET",a.TI&&!g.ze&&(b.Connection="close"),a.Ge.send(a.Gm,a.Lx,null,b));a.i.Hi(1)},xLa=function(a,b,c){for(var d=!0;!a.En&&a.ju<c.length;){var e=vLa(a,c);
if(e==L5){4==b&&(a.xl=4,G5(15),d=!1);break}else if(e==wLa){a.xl=4;G5(16);d=!1;break}else M5(a,e)}4==b&&0==c.length&&(a.xl=1,G5(17),d=!1);a.Si=a.Si&&d;d||(N5(a),O5(a))},vLa=function(a,b){var c=a.ju,d=b.indexOf("\n",c);
if(-1==d)return L5;c=Number(b.substring(c,d));if(isNaN(c))return wLa;d+=1;if(d+c>b.length)return L5;b=b.substr(d,c);a.ju=d+c;return b},zLa=function(a,b){a.Cq=Date.now();
K5(a);var c=b?window.location.hostname:"";a.Gm=a.Cl.clone();b5(a.Gm,"DOMAIN",c);b5(a.Gm,"t",a.J);try{a.Wi=new ActiveXObject("htmlfile")}catch(m){N5(a);a.xl=7;G5(22);O5(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in P5)f=P5[f];else if(f in yLa)f=P5[f]=yLa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
P5[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.ed(g.dc("b/12014412"),d+"</body></html>");a.Wi.open();a.Wi.write(g.ad(c));a.Wi.close();a.Wi.parentWindow.m=(0,g.C)(a.vR,a);a.Wi.parentWindow.d=(0,g.C)(a.hI,a,!0);a.Wi.parentWindow.rpcClose=(0,g.C)(a.hI,a,!1);c=a.Wi.createElement("DIV");a.Wi.parentWindow.document.body.appendChild(c);d=g.Hc(a.Gm.toString());d=g.pd(g.Cc(d));d=g.ed(g.dc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.fd(c,d);a.i.Hi(1)},K5=function(a){a.RC=Date.now()+
a.C;
ALa(a,a.C)},ALa=function(a,b){if(null!=a.Qq)throw Error("WatchDog timer not null");
a.Qq=E5((0,g.C)(a.DR,a),b)},Q5=function(a){a.Qq&&(g.A.clearTimeout(a.Qq),a.Qq=null)},O5=function(a){a.i.RD()||a.En||a.i.Cu(a)},N5=function(a){Q5(a);
g.Di(a.Vw);a.Vw=null;a.u.stop();g.nFa(a.B);if(a.Ge){var b=a.Ge;a.Ge=null;b.abort();b.dispose()}a.Wi&&(a.Wi=null)},M5=function(a,b){try{a.i.aI(a,b),a.i.Hi(4)}catch(c){}},CLa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;BLa(a,b,function(h){h?c(!0):g.A.setTimeout(function(){CLa(a,b,c,d,f)},f)})}},BLa=function(a,b,c){var d=new Image;
d.onload=function(){try{R5(d),c(!0)}catch(e){}};
d.onerror=function(){try{R5(d),c(!1)}catch(e){}};
d.onabort=function(){try{R5(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{R5(d),c(!1)}catch(e){}};
g.A.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
LKa(d,a)},R5=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},S5=function(a){g.Zl.call(this);
this.headers=new g.Lm;this.ra=a||null;this.B=!1;this.ma=this.i=null;this.Fa=this.V="";this.G=0;this.u="";this.C=this.Ba=this.L=this.xa=!1;this.J=0;this.X=null;this.La="";this.Y=this.Ea=!1},DLa=function(a){return g.xe&&g.ae(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},ELa=function(a){return"content-type"==a.toLowerCase()},GLa=function(a,b){a.B=!1;
a.i&&(a.C=!0,a.i.abort(),a.C=!1);a.u=b;a.G=5;FLa(a);T5(a)},FLa=function(a){a.xa||(a.xa=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},ILa=function(a){if(a.B&&"undefined"!=typeof g.u0)if(a.ma[1]&&4==U5(a)&&2==a.getStatus())V5(a,"Local request error detected and ignored");
else if(a.L&&4==U5(a))g.Jm(a.XH,0,a);else if(a.dispatchEvent("readystatechange"),a.isComplete()){V5(a,"Request complete");a.B=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.zd(1,String(a.V));if(!f&&g.A.self&&g.A.self.location){var h=g.A.self.location.protocol;f=h.substr(0,h.length-1)}e=!HLa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.G=6;try{var l=2<U5(a)?a.i.statusText:""}catch(m){l=""}a.u=l+" ["+a.getStatus()+"]";FLa(a)}}finally{T5(a)}}},T5=function(a,b){if(a.i){JLa(a);
var c=a.i,d=a.ma[0]?g.Ia:null;a.i=null;a.ma=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},JLa=function(a){a.i&&a.Y&&(a.i.ontimeout=null);
a.X&&(g.A.clearTimeout(a.X),a.X=null)},U5=function(a){return a.i?a.i.readyState:0},W5=function(a){try{return a.i?a.i.responseText:""}catch(b){return""}},V5=function(a,b){return b+" ["+a.Fa+" "+a.V+" "+a.getStatus()+"]"},KLa=function(a){this.i=a;
this.l=new D5},LLa=function(a){var b=X5(a.i,a.Gr,"/mail/images/cleardot.gif");
c5(b);CLa(b.toString(),5E3,(0,g.C)(a.EM,a),3,2E3);a.Hi(1)},Z5=function(a){var b=a.i.L;
if(null!=b)G5(5),b?(G5(11),Y5(a.i,a,!1)):(G5(12),Y5(a.i,a,!0));else if(a.Lg=new I5(a,void 0,void 0,void 0),a.Lg.Wm=a.Jy,b=a.i,b=X5(b,b.Kt()?a.vr:null,a.Ky),G5(5),!g.xe||g.be(10))d5(b,"TYPE","xmlhttp"),J5(a.Lg,b,!1,a.vr,!1);else{d5(b,"TYPE","html");var c=a.Lg;a=!!a.vr;c.Lq=3;c.Cl=c5(b.clone());zLa(c,a)}},$5=function(a,b,c){this.eb=1;
this.i=[];this.u=[];this.B=new D5;this.J=a||null;this.L=null!=b?b:null;this.C=c||!1},MLa=function(a,b){this.i=a;
this.map=b;this.context=null},NLa=function(a,b,c,d){g.Fl.call(this,"timingevent",a);
this.size=b;this.Dt=d},OLa=function(a){g.Fl.call(this,"serverreachability",a)},RLa=function(a){PLa(a);
if(3==a.eb){var b=a.Us++,c=a.fv.clone();b5(c,"SID",a.l);b5(c,"RID",b);b5(c,"TYPE","terminate");a6(a,c);b=new I5(a,a.l,b,void 0);b.Lq=2;b.Cl=c5(c.clone());LKa(new Image,b.Cl.toString());b.Cq=Date.now();K5(b)}QLa(a)},SLa=function(a){a.aN(1,0);
a.fv=X5(a,null,a.Ly);b6(a)},PLa=function(a){a.Hl&&(a.Hl.abort(),a.Hl=null);
a.Ud&&(a.Ud.cancel(),a.Ud=null);a.wk&&(g.A.clearTimeout(a.wk),a.wk=null);c6(a);a.xg&&(a.xg.cancel(),a.xg=null);a.Pl&&(g.A.clearTimeout(a.Pl),a.Pl=null)},TLa=function(a,b){if(0==a.eb)throw Error("Invalid operation: sending map when state is closed");
a.i.push(new MLa(a.zO++,b));2!=a.eb&&3!=a.eb||b6(a)},ULa=function(a){var b=0;
a.Ud&&b++;a.xg&&b++;return b},b6=function(a){a.xg||a.Pl||(a.Pl=E5((0,g.C)(a.fI,a),0),a.Tp=0)},WLa=function(a,b){if(1==a.eb){if(!b){a.Us=Math.floor(1E5*Math.random());
b=a.Us++;var c=new I5(a,"",b,void 0);c.Wm=a.qj;var d=d6(a),e=a.fv.clone();b5(e,"RID",b);b5(e,"CVER","1");a6(a,e);uLa(c,e,d);a.xg=c;a.eb=2}}else 3==a.eb&&(b?VLa(a,b):0==a.i.length||a.xg||VLa(a))},VLa=function(a,b){if(b)if(6<a.Fn){a.i=a.u.concat(a.i);
a.u.length=0;var c=a.Us-1;b=d6(a)}else c=b.L,b=b.Mo;else c=a.Us++,b=d6(a);var d=a.fv.clone();b5(d,"SID",a.l);b5(d,"RID",c);b5(d,"AID",a.mq);a6(a,d);c=new I5(a,a.l,c,a.Tp+1);c.Wm=a.qj;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.xg=c;uLa(c,d,b)},a6=function(a,b){a.xf&&(a=a.xf.MF())&&g.Bb(a,function(c,d){b5(b,d,c)})},d6=function(a){var b=Math.min(a.i.length,1E3),c=["count="+b];
if(6<a.Fn&&0<b){var d=a.i[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={lp:e.lp},f++){e.lp=a.i[f].i;var h=a.i[f].map;e.lp=6>=a.Fn?f:e.lp-d;try{g.Bb(h,function(l){return function(m,n){c.push("req"+l.lp+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.lp+"_type="+encodeURIComponent("_badmap"))}}a.u=a.u.concat(a.i.splice(0,b));
return c.join("&")},XLa=function(a){a.Ud||a.wk||(a.G=1,a.wk=E5((0,g.C)(a.eI,a),0),a.Ip=0)},e6=function(a){if(a.Ud||a.wk||3<=a.Ip)return!1;
a.G++;a.wk=E5((0,g.C)(a.eI,a),YLa(a,a.Ip));a.Ip++;return!0},Y5=function(a,b,c){a.Jx=c;
a.rj=b.gk;a.C||SLa(a)},c6=function(a){null!=a.Mn&&(g.A.clearTimeout(a.Mn),a.Mn=null)},YLa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},f6=function(a,b){if(2==b||9==b){var c=null;
a.xf&&(c=null);var d=(0,g.C)(a.AS,a);c||(c=new g.Om("//web.archive.org/web/20210501020656/https://www.google.com/images/cleardot.gif"),c5(c));BLa(c.toString(),1E4,d)}else G5(2);ZLa(a,b)},ZLa=function(a,b){a.eb=0;
a.xf&&a.xf.dF(b);QLa(a);PLa(a)},QLa=function(a){a.eb=0;
a.rj=-1;if(a.xf)if(0==a.u.length&&0==a.i.length)a.xf.vz();else{g.ob(a.u);var b=g.ob(a.i);a.u.length=0;a.i.length=0;a.xf.vz(b)}},X5=function(a,b,c){var d=g.Wm(c);
if(""!=d.i)b&&g.Qm(d,b+"."+d.i),g.Rm(d,d.u);else{var e=window.location;d=PKa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Vr&&g.Bb(a.Vr,function(f,h){b5(d,h,f)});
b5(d,"VER",a.Fn);a6(a,d);return d},$La=function(){},aMa=function(){this.i=[];
this.l=[]},bMa=function(a,b){this.action=a;
this.params=b||{}},g6=function(a,b){g.F.call(this);
this.i=new g.I(this.nR,0,this);g.G(this,this.i);this.Ef=5E3;this.l=0;if("function"===typeof a)b&&(a=(0,g.C)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.C)(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a},h6=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ma=a;this.G=b;this.u=new g.Pn;this.l=new g6(this.hS,this);this.i=null;this.X=!1;this.C=null;this.V="";this.L=this.B=0;this.J=[];this.ra=c;this.Y=d;this.xa=e},cMa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.Jx,sessionId:a.i.l,arrayId:a.i.mq}},dMa=function(a,b){a.L=b||0;
a.l.stop();i6(a);a.i&&(3==a.i.getState()&&WLa(a.i),RLa(a.i));a.L=0},j6=function(a){return!!a.i&&3==a.i.getState()},i6=function(a){if(a.i){var b=a.Y(),c=a.i.qj||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.qj=c}},k6=function(a){this.port=this.domain="";
this.i="/api/lounge";this.l=!0;a=a||document.location.href;var b=Number(g.zd(4,a))||"";b&&(this.port=":"+b);this.domain=g.Ad(a)||"";a=g.Uc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.zc(a,"10.0")&&(this.l=!1))},l6=function(a,b){var c=a.i;
a.l&&(c="https://"+a.domain+a.port+a.i);return g.Nd(c+b,{})},m6=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Pa(a.B,d,!0),onError:g.Pa(a.u,e),onTimeout:g.Pa(a.C,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.up(b,a)},hMa=function(){var a=eMa;
fMa();n6.push(a);gMa()},o6=function(a,b){fMa();
var c=iMa(a,String(b));g.gb(n6)?jMa(c):(gMa(),g.zb(n6,function(d){d(c)}))},fMa=function(){n6||(n6=g.Ha("yt.mdx.remote.debug.handlers_")||[],g.Ga("yt.mdx.remote.debug.handlers_",n6,void 0))},jMa=function(a){var b=(p6+1)%50;
p6=b;q6[b]=a;r6||(r6=49==b)},gMa=function(){var a=n6;
if(q6[0]){var b=r6?p6:-1;do{b=(b+1)%50;var c=q6[b];g.zb(a,function(d){d(c)})}while(b!=p6);
q6=Array(50);p6=-1;r6=!1}},iMa=function(a,b){var c=(Date.now()-kMa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},s6=function(a){g.O.call(this);
this.G=a;this.screens=[]},lMa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},mMa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Je(a.screens,function(f){return!!n5(b,f)});
for(var d=0,e=b.length;d<e;d++)c=lMa(a,b[d])||c;return c},nMa=function(a,b){var c=a.screens.length;
a.screens=g.Je(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},t6=function(a,b,c,d,e){g.O.call(this);
this.u=a;this.J=b;this.B=c;this.G=d;this.C=e;this.l=0;this.i=null;this.yb=NaN},v6=function(a){s6.call(this,"LocalScreenService");
this.l=a;this.i=NaN;u6(this);this.info("Initializing with "+l5(this.screens))},oMa=function(a){if(a.screens.length){var b=g.Mc(a.screens,function(d){return d.id}),c=l6(a.l,"/pairing/get_lounge_token_batch");
m6(a.l,c,{screen_ids:b.join(",")},(0,g.C)(a.xN,a),(0,g.C)(a.wN,a))}},u6=function(a){if(g.Oo("deprecate_pair_servlet_enabled"))return mMa(a,[]);
var b=VKa(aLa());b=g.Je(b,function(c){return!c.uuid});
return mMa(a,b)},w6=function(a,b){cLa(g.Mc(a.screens,TKa));
b&&bLa()},y6=function(a,b){g.O.call(this);
this.G=b;b=(b=g.qv("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.G(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.fb(b,h)}this.i=c;this.C=a;this.u=this.B=NaN;this.l=null;x6("Initialized with "+g.Aj(this.i))},z6=function(a,b,c){var d=l6(a.C,"/pairing/get_screen_availability");
m6(a.C,d,{lounge_token:b.token},(0,g.C)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.C)(function(){c(!1)},a))},A6=function(a,b){a:if(e5(b)!=e5(a.i))var c=!1;
else{c=g.Jb(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(x6("Updated online screens: "+g.Aj(a.i)),a.i=b,a.W("screenChange"));pMa(a)},B6=function(a){isNaN(a.u)||g.pp(a.u);
a.u=g.np((0,g.C)(a.RB,a),0<a.B&&a.B<g.Sa()?2E4:1E4)},x6=function(a){o6("OnlineScreenService",a)},qMa=function(a){var b={};
g.zb(a.G(),function(c){c.token?b[c.token]=c.id:this.Gd("Requesting availability of screen w/o lounge token.")});
return b},pMa=function(a){a=g.Jb(g.Cb(a.i,function(b){return b}));
g.wb(a);a.length?g.pv("yt-remote-online-screen-ids",a.join(","),60):g.tv("yt-remote-online-screen-ids")},C6=function(a,b){b=void 0===b?!1:b;
s6.call(this,"ScreenService");this.B=a;this.J=b;this.i=this.l=null;this.u=[];this.C={};rMa(this)},tMa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var h=a.Xg(),l=c?o5(h,c):null;c&&(a.J||l)||(l=o5(h,b));if(l){l.uuid=b;var m=D6(a,l);z6(a.i,m,function(n){e(n?m:null)})}else c?sMa(a,c,(0,g.C)(function(n){var p=D6(this,new i5({name:d,
screenId:c,loungeToken:n,dialId:b||""}));z6(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},uMa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},vMa=function(a,b,c){z6(a.i,b,c)},sMa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.up(l6(a.B,"/pairing/get_lounge_token_batch"),e)},wMa=function(a){a.screens=a.l.Xg();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+l5(a.screens))},rMa=function(a){E6(a);
a.l=new v6(a.B);a.l.subscribe("screenChange",(0,g.C)(a.DN,a));wMa(a);a.J||(a.u=VKa(g.qv("yt-remote-automatic-screen-cache")||[]));E6(a);a.info("Initializing automatic screens: "+l5(a.u));a.i=new y6(a.B,(0,g.C)(a.Xg,a,!0));a.i.subscribe("screenChange",(0,g.C)(function(){this.W("onlineScreenChange")},a))},D6=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=o5(a.u,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.u.push(b),a.J||xMa(a));E6(a);a.C[b.uuid]=b.id;g.pv("yt-remote-device-id-map",a.C,31536E3);return b},xMa=function(a){a=g.Je(a.u,function(b){return"shortLived"!=b.idType});
g.pv("yt-remote-automatic-screen-cache",g.Mc(a,TKa))},E6=function(a){a.C=g.qv("yt-remote-device-id-map")||{}},F6=function(a,b,c){g.O.call(this);
this.xa=c;this.u=a;this.i=b;this.B=null},G6=function(a,b){a.B=b;
a.W("sessionScreen",a.B)},yMa=function(a,b){a.B&&(a.B.token=b,D6(a.u,a.B));
a.W("sessionScreen",a.B)},H6=function(a,b){o6(a.xa,b)},I6=function(a,b,c){F6.call(this,a,b,"CastSession");
var d=this;this.Ba=c;this.l=null;this.Y=(0,g.C)(this.QL,this);this.ra=(0,g.C)(this.HR,this);this.X=g.np(function(){zMa(d,null)},12E4);
this.J=this.C=this.G=this.L=0;this.ma=!1;this.V="unknown"},J6=function(a,b){g.pp(a.J);
a.J=0;0==b?AMa(a):a.J=g.np(function(){AMa(a)},b)},AMa=function(a){BMa(a,"getLoungeToken");
g.pp(a.C);a.C=g.np(function(){CMa(a,null)},3E4)},BMa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Aj(void 0));
var c={};c.type=b;a.l?a.l.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ia,(0,g.C)(function(){H6(this,"Failed to send message: "+b+".")},a)):H6(a,"Sending yt message without session: "+g.Aj(c))},K6=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.bG(b,function(c){G6(a,c)},function(){return a.ag()},5)):a.ag(Error("Waiting for session status timed out."))},EMa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new i5(b);DMa(a,d,function(e){e?(a.ma=!0,D6(a.u,d),G6(a,d),a.V="unknown",J6(a,c)):(g.To(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.ag())},5)},zMa=function(a,b){g.pp(a.X);
a.X=0;b?a.Ba.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?EMa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.To(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),K6(a,b.screenId))):(g.To(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),
K6(a,b.screenId)):K6(a,b.screenId):a.ag(Error("Waiting for session status timed out."))},CMa=function(a,b){g.pp(a.C);
a.C=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.V=c,J6(a,3E4)):(yMa(a,b.loungeToken),a.ma=!1,a.V="unknown",J6(a,b.loungeTokenRefreshIntervalMs))},DMa=function(a,b,c,d){g.pp(a.G);
a.G=0;vMa(a.u,b,function(e){e||0>d?c(e):a.G=g.np(function(){DMa(a,b,c,d-1)},300)})},FMa=function(a){g.pp(a.L);
a.L=0;g.pp(a.G);a.G=0;g.pp(a.X);a.X=0;g.pp(a.C);a.C=0;g.pp(a.J);a.J=0},L6=function(a,b,c,d){F6.call(this,a,b,"DialSession");
this.Ea=d;this.l=this.L=null;this.ra="";this.Fa=c;this.Ca=null;this.X=g.Ia;this.V=NaN;this.Ba=(0,g.C)(this.RL,this);this.C=g.Ia;this.J=this.G=0;this.Y=!1;this.ma="unknown"},M6=function(a){var b;
return!!(a.Ea.enableDialLoungeToken&&(null==(b=a.l)?0:b.getDialAppInfo))},GMa=function(a){a.C=a.u.TD(a.ra,a.i.label,a.i.friendlyName,M6(a),function(b,c){a.C=g.Ia;
a.Y=!0;G6(a,b);"shortLived"==b.idType&&0<c&&N6(a,c)},function(b){a.C=g.Ia;
a.ag(b)})},HMa=function(a){var b={};
b.pairingCode=a.ra;b.theme=a.Fa;fLa()&&(b.env_useStageMdx=1);return g.Jd(b)},O6=function(a){return new Promise(function(b){a.ra=m5();
if(a.Ca){var c=new chrome.cast.DialLaunchResponse(!0,HMa(a));b(c);GMa(a)}else a.X=function(){g.pp(a.V);a.X=function(){};
a.V=NaN;var d=new chrome.cast.DialLaunchResponse(!0,HMa(a));b(d);GMa(a)},a.V=g.np(function(){a.X()},100)})},JMa=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new i5(b);return(new Promise(function(e){IMa(a,d,function(f){f?(a.Y=!0,D6(a.u,d),G6(a,d),N6(a,c)):g.To(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):O6(a)})},KMa=function(a,b){var c=a.L.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){tMa(a.u,c,b,d,function(f){f&&f.token&&G6(a,f);e(f)},function(f){H6(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):O6(a)})},IMa=function(a,b,c,d){g.pp(a.G);
a.G=0;vMa(a.u,b,function(e){e||0>d?c(e):a.G=g.np(function(){IMa(a,b,c,d-1)},300)})},N6=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
M6(a)&&(g.pp(a.J),a.J=0,0==b?LMa(a):a.J=g.np(function(){LMa(a)},b))},LMa=function(a){M6(a)&&a.l.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ma=c,N6(a,3E4)):(a.Y=!1,a.ma="unknown",yMa(a,b.loungeToken),N6(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ma="noLoungeTokenResponse";N6(a,3E4)})},MMa=function(a){g.pp(a.G);
a.G=0;g.pp(a.J);a.J=0;a.C();a.C=function(){};
g.pp(a.V)},P6=function(a,b){F6.call(this,a,b,"ManualSession");
this.l=g.np((0,g.C)(this.nq,this,null),150)},Q6=function(a,b){g.O.call(this);
this.B=b;this.l=a;this.L=b.appId||"233637DE";this.C=b.theme||"cl";this.V=b.disableCastApi||!1;this.i=null;this.J=!1;this.u=[];this.G=(0,g.C)(this.DQ,this)},NMa=function(a,b){return b?g.bb(a.u,function(c){return j5(b,c.label)},a):null},R6=function(a){o6("Controller",a)},eMa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},S6=function(a){return a.J||!!a.u.length||!!a.i},T6=function(a,b,c){b!=a.i&&(g.Di(a.i),(a.i=b)?(c?a.W("yt-remote-cast2-receiver-resumed",
b.i):a.W("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.C)(a.dI,a,b)),b.getScreen()?a.W("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.nq(null)):a.W("yt-remote-cast2-session-change",null))},OMa=function(a){var b=a.l.SD(),c=a.i&&a.i.i;
a=g.Mc(b,function(d){c&&j5(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=NMa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},TMa=function(a,b,c,d){d.disableCastApi?U6("Cannot initialize because disabled by Mdx config."):PMa()?QMa(b,d)&&(V6(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?RMa(a,c):(window.__onGCastApiAvailable=function(e,f){e?RMa(a,c):(W6("Failed to load cast API: "+f),X6(!1),V6(!1),g.tv("yt-remote-cast-available"),g.tv("yt-remote-cast-receiver"),
SMa(),c(!1))},d.loadCastApiSetupScript?g.vv("https://web.archive.org/web/20210501020656/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=v5()&&mLa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?x5():89<=v5()?oLa():(y5(),w5(nLa.map(jLa))))):U6("Cannot initialize because not running Chrome")},SMa=function(){U6("dispose");
var a=Y6();a&&a.dispose();g.Ga("yt.mdx.remote.cloudview.instance_",null,void 0);UMa(!1);g.Tq(Z6);Z6.length=0},$6=function(){return!!g.qv("yt-remote-cast-installed")},VMa=function(){var a=g.qv("yt-remote-cast-receiver");
return a?a.friendlyName:null},WMa=function(){U6("clearCurrentReceiver");
g.tv("yt-remote-cast-receiver")},XMa=function(){return $6()?Y6()?Y6().getCastSession():(W6("getCastSelector: Cast is not initialized."),null):(W6("getCastSelector: Cast API is not installed!"),null)},b7=function(){$6()?Y6()?a7()?(U6("Requesting cast selector."),Y6().requestSession()):(U6("Wait for cast API to be ready to request the session."),Z6.push(g.Sq("yt-remote-cast2-api-ready",b7))):W6("requestCastSelector: Cast is not initialized."):W6("requestCastSelector: Cast API is not installed!")},c7=
function(a,b){a7()?Y6().setConnectedScreenStatus(a,b):W6("setConnectedScreenStatus called before ready.")},PMa=function(){var a=0<=g.Uc.search(/ (CrMo|Chrome|CriOS)\//);
return g.rB||a},YMa=function(a,b){Y6().init(a,b)},QMa=function(a,b){var c=!1;
Y6()||(a=new Q6(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.pv("yt-remote-cast-available",d);g5("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){U6("onReceiverSelected: "+d.friendlyName);
g.pv("yt-remote-cast-receiver",d);g5("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){U6("onReceiverResumed: "+d.friendlyName);
g.pv("yt-remote-cast-receiver",d);g5("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){U6("onSessionChange: "+k5(d));
d||g.tv("yt-remote-cast-receiver");g5("yt-remote-cast2-session-change",d)}),g.Ga("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
U6("cloudview.createSingleton_: "+c);return c},Y6=function(){return g.Ha("yt.mdx.remote.cloudview.instance_")},RMa=function(a,b){X6(!0);
V6(!1);YMa(a,function(c){c?(UMa(!0),g.Uq("yt-remote-cast2-api-ready")):(W6("Failed to initialize cast API."),X6(!1),g.tv("yt-remote-cast-available"),g.tv("yt-remote-cast-receiver"),SMa());b(c)})},U6=function(a){o6("cloudview",a)},W6=function(a){o6("cloudview",a)},X6=function(a){U6("setCastInstalled_ "+a);
g.pv("yt-remote-cast-installed",a)},a7=function(){return!!g.Ha("yt.mdx.remote.cloudview.apiReady_")},UMa=function(a){U6("setApiReady_ "+a);
g.Ga("yt.mdx.remote.cloudview.apiReady_",a,void 0)},V6=function(a){g.Ga("yt.mdx.remote.cloudview.initializing_",a,void 0)},d7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.G=this.J=0;this.trackData=null;this.hasNext=this.Fj=!1;this.L=this.C=this.i=this.B=0;this.u=NaN;this.l=!1;this.reset(a)},e7=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Fj=!1;a.hasNext=!1;a.J=0;a.G=g.Sa();a.B=0;a.i=0;a.C=0;a.L=0;a.u=NaN;a.l=!1},f7=function(a){return a.lc()?(g.Sa()-a.G)/1E3:0},g7=function(a,b){a.J=b;
a.G=g.Sa()},h7=function(a){switch(a.playerState){case 1:case 1081:return(g.Sa()-a.G)/1E3+a.J;
case -1E3:return 0}return a.J},i7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&e7(a)},j7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Tb(a.trackData);b.hasPrevious=a.Fj;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.G;b.seekableStart=a.B;b.seekableEnd=a.i;b.duration=a.C;b.loadedTime=a.L;b.liveIngestionTime=a.u;return b},l7=function(a,b){g.O.call(this);
this.eb=0;this.u=a;this.C=[];this.B=new aMa;this.l=this.i=null;this.L=(0,g.C)(this.hP,this);this.G=(0,g.C)(this.Xs,this);this.J=(0,g.C)(this.gP,this);this.V=(0,g.C)(this.oP,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.dC,this),ZMa(this))):c=3;0!=c&&(b?this.dC(c):g.np((0,g.C)(function(){this.dC(c)},this),0));
(a=XMa())&&k7(this,a);this.subscribe("yt-remote-cast2-session-change",this.V)},m7=function(a){return new d7(a.u.getPlayerContextData())},ZMa=function(a){g.zb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.C.push(this.u.subscribe(b,g.Pa(this.AQ,b),this))},a)},$Ma=function(a){g.zb(a.C,function(b){this.u.unsubscribeByKey(b)},a);
a.C.length=0},n7=function(a){return 1==a.getState()},o7=function(a,b){var c=a.B;
50>c.i.length+c.l.length&&a.B.l.push(b)},q7=function(a,b,c){var d=m7(a);
g7(d,c);-1E3!=d.playerState&&(d.playerState=b);p7(a,d)},r7=function(a,b,c){a.u.sendMessage(b,c)},p7=function(a,b){$Ma(a);
a.u.setPlayerContextData(j7(b));ZMa(a)},k7=function(a,b){a.l&&(a.l.removeUpdateListener(a.L),a.l.removeMediaListener(a.G),a.Xs(null));
a.l=b;a.l&&(o6("CP","Setting cast session: "+a.l.sessionId),a.l.addUpdateListener(a.L),a.l.addMediaListener(a.G),a.l.media.length&&a.Xs(a.l.media[0]))},aNa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=m7(a);b.contentId!=d.videoId&&o6("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;g7(d,a.i.getEstimatedTime());p7(a,d)}else o6("CP","No cast media video. Ignoring state update.")},s7=function(a,b,c){return(0,g.C)(function(d){this.Gd("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Gd("Retrying "+b+" using MDx browser channel."),r7(this,b,c))},a)},t7=function(a,b,c){g.O.call(this);
this.C=NaN;this.ma=!1;this.L=this.J=this.X=this.Y=NaN;this.V=[];this.B=this.G=this.u=this.ac=this.i=null;this.xa=a;this.V.push(g.Tp(window,"beforeunload",(0,g.C)(this.tN,this)));this.l=[];this.ac=new d7;this.Ba=b.id;this.ra=b.idType;this.i=bNa(this,c);this.i.subscribe("handlerOpened",this.lP,this);this.i.subscribe("handlerClosed",this.iP,this);this.i.subscribe("handlerError",this.jP,this);this.i.subscribe("handlerMessage",this.kP,this);this.i.jx(b.token);this.subscribe("remoteQueueChange",function(){var d=
this.ac.videoId;g.uv()&&g.pv("yt-remote-session-video-id",d)},this)},u7=function(a){o6("conn",a)},bNa=function(a,b){return new h6(l6(a.xa,"/bc"),b,!1,function(){return a.XD()},"shortLived"==a.ra)},v7=function(a,b){a.W("proxyStateChange",b)},cNa=function(a){a.C=g.np((0,g.C)(function(){u7("Connecting timeout");
this.Pp(1)},a),2E4)},w7=function(a){g.pp(a.C);
a.C=NaN},x7=function(a){g.pp(a.Y);
a.Y=NaN},dNa=function(a){y7(a);
a.X=g.np((0,g.C)(function(){z7(this,"getNowPlaying")},a),2E4)},y7=function(a){g.pp(a.X);
a.X=NaN},fNa=function(a,b){b&&(w7(a),x7(a));
var c=j6(a.i)&&isNaN(a.C);b==c?b&&(v7(a,1),z7(a,"getSubtitlesTrack")):b?(a.aG()&&a.ac.reset(),v7(a,1),z7(a,"getNowPlaying"),eNa(a)):a.Pp(1)},gNa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.ac.videoId&&(g.Ob(b.params)?a.ac.trackData=null:a.ac.trackData=b.params,a.W("remotePlayerChange"))},hNa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.ac.listId=b.params.listId||a.ac.listId;i7(a.ac,c,d);a.W("remoteQueueChange")},jNa=function(a,b){b.params=b.params||{};
hNa(a,b);iNa(a,b);a.W("autoplayDismissed")},iNa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
g7(a.ac,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.ac.playerState&&(c=-1E3);a.ac.playerState=c;c=Number(b.params.loadedTime);a.ac.L=isNaN(c)?0:c;c=Number(b.params.duration);a.ac.C=isNaN(c)?0:c;c=a.ac;var d=Number(b.params.liveIngestionTime);c.u=d;c.l=isNaN(d)?!1:!0;c=a.ac;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.B=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.ac.playerState?dNa(a):y7(a);a.W("remotePlayerChange")},kNa=function(a,b){if(-1E3!=a.ac.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.ac.playerState=c;b=parseInt(b.params.currentTime,10);g7(a.ac,isNaN(b)?0:b);a.W("remotePlayerChange")}},lNa=function(a,b){var c="true"==b.params.muted;
a.ac.volume=parseInt(b.params.volume,10);a.ac.muted=c;a.W("remotePlayerChange")},mNa=function(a,b){a.G=b.params.videoId;
a.W("nowAutoplaying",parseInt(b.params.timeout,10))},nNa=function(a,b){var c="true"==b.params.hasNext;
a.ac.Fj="true"==b.params.hasPrevious;a.ac.hasNext=c;a.W("previousNextChange")},eNa=function(a){g.pp(a.L);
a.L=g.np((0,g.C)(a.Pp,a,1),864E5)},z7=function(a,b,c){c?u7("Sending: action="+b+", params="+g.Aj(c)):u7("Sending: action="+b);
a.i.sendMessage(b,c)},A7=function(a){s6.call(this,"ScreenServiceProxy");
this.Df=a;this.i=[];this.i.push(this.Df.$_s("screenChange",(0,g.C)(this.VL,this)));this.i.push(this.Df.$_s("onlineScreenChange",(0,g.C)(this.hQ,this)))},rNa=function(a,b){eLa();
if(!u5||!u5.get("yt-remote-disable-remote-module-for-dev")){b=g.M("MDX_CONFIG")||b;XKa();s5();B7||(B7=new k6(b?b.loungeApiHost:void 0),fLa()&&(B7.i="/api/loungedev"));C7||(C7=g.Ha("yt.mdx.remote.deferredProxies_")||[],g.Ga("yt.mdx.remote.deferredProxies_",C7,void 0));oNa();var c=D7();if(!c){var d=new C6(B7,b?b.disableAutomaticScreenCache||!1:!1);g.Ga("yt.mdx.remote.screenService_",d,void 0);c=D7();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken});TMa(a,d,function(f){f?E7()&&c7(E7(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g5("yt-remote-receiver-availability-change")})},e)}b&&!g.Ha("yt.mdx.remote.initialized_")&&(g.Ga("yt.mdx.remote.initialized_",!0,void 0),F7("Initializing: "+g.Aj(b)),G7.push(g.Sq("yt-remote-cast2-availability-change",function(){g5("yt-remote-receiver-availability-change")})),G7.push(g.Sq("yt-remote-cast2-receiver-selected",
function(){H7(null);
g5("yt-remote-auto-connect","cast-selector-receiver")})),G7.push(g.Sq("yt-remote-cast2-receiver-resumed",function(){g5("yt-remote-receiver-resumed","cast-selector-receiver")})),G7.push(g.Sq("yt-remote-cast2-session-change",pNa)),G7.push(g.Sq("yt-remote-connection-change",function(f){f?c7(E7(),"YouTube TV"):I7()||(c7(null,null),WMa())})),a=J7(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.Oo("desktop_enable_autoplay")&&e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=
b.theme)&&(a.theme=b),F7(" -- with channel params: "+g.Aj(a)),a?(g.pv("yt-remote-session-app",a.app),g.pv("yt-remote-session-name",a.name)):(g.tv("yt-remote-session-app"),g.tv("yt-remote-session-name")),g.Ga("yt.mdx.remote.channelParams_",a,void 0),c.start(),E7()||qNa())}},sNa=function(){var a=D7().Df.$_gos();
var b=K7();b&&L7()&&(n5(a,b)||a.push(b));return WKa(a)},M7=function(){var a=tNa();
!a&&$6()&&VMa()&&(a={key:"cast-selector-receiver",name:VMa()});return a},tNa=function(){var a=sNa(),b=K7();
b||(b=I7());return g.bb(a,function(c){return b&&j5(b,c.key)?!0:!1})},K7=function(){var a=E7();
if(!a)return null;var b=D7().Xg();return o5(b,a)},pNa=function(a){F7("remote.onCastSessionChange_: "+k5(a));
if(a){var b=K7();if(b&&b.id==a.id){if(c7(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))N7&&(N7.token=a),(b=L7())&&b.jx(a)}else b&&O7(),P7(a,1)}else L7()&&O7()},O7=function(){a7()?Y6().stopSession():W6("stopSession called before API ready.");
var a=L7();a&&(a.disconnect(1),Q7(null))},R7=function(){var a=L7();
return!!a&&3!=a.getProxyState()},F7=function(a){o6("remote",a)},D7=function(){if(!S7){var a=g.Ha("yt.mdx.remote.screenService_");
S7=a?new A7(a):null}return S7},E7=function(){return g.Ha("yt.mdx.remote.currentScreenId_")},uNa=function(a){g.Ga("yt.mdx.remote.currentScreenId_",a,void 0)},vNa=function(){return g.Ha("yt.mdx.remote.connectData_")},H7=function(a){g.Ga("yt.mdx.remote.connectData_",a,void 0)},L7=function(){return g.Ha("yt.mdx.remote.connection_")},Q7=function(a){var b=L7();
H7(null);a||uNa("");g.Ga("yt.mdx.remote.connection_",a,void 0);C7&&(g.zb(C7,function(c){c(a)}),C7.length=0);
b&&!a?g5("yt-remote-connection-change",!1):!b&&a&&g5("yt-remote-connection-change",!0)},I7=function(){var a=g.uv();
if(!a)return null;var b=D7();if(!b)return null;b=b.Xg();return o5(b,a)},P7=function(a,b){E7();
K7()&&K7();T7?N7=a:(uNa(a.id),a=new t7(B7,a,J7()),a.connect(b,vNa()),a.subscribe("beforeDisconnect",function(c){g5("yt-remote-before-disconnect",c)}),a.subscribe("beforeDispose",function(){L7()&&(L7(),Q7(null))}),a.subscribe("browserChannelAuthError",function(){var c=K7();
c&&"shortLived"==c.idType&&(a7()?Y6().handleBrowserChannelAuthError():W6("refreshLoungeToken called before API ready."))}),Q7(a))},qNa=function(){var a=I7();
a?(F7("Resume connection to: "+k5(a)),P7(a,0)):(t5(),WMa(),F7("Skipping connecting because no session screen found."))},oNa=function(){var a=J7();
if(g.Ob(a)){a=r5();var b=g.qv("yt-remote-session-name")||"",c=g.qv("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ga("yt.mdx.remote.channelParams_",a,void 0)}},J7=function(){return g.Ha("yt.mdx.remote.channelParams_")||{}},U7=function(a,b,c){g.F.call(this);
var d=this;this.l=a;this.I=b;this.Ob=c;this.events=new g.vM(this);this.X=this.events.N(this.I,"onVolumeChange",function(e){wNa(d,e)});
this.C=!1;this.suggestion=null;this.G=new g.yJ(64);this.i=new g.I(this.bJ,500,this);this.u=new g.I(this.cJ,1E3,this);this.L=new z5(this.SS,0,this);this.B={};this.V=new g.I(this.CJ,1E3,this);this.J=new A5(this.seekTo,1E3,this);this.Y=g.Ia;g.G(this,this.events);this.events.N(b,"onCaptionsTrackListChanged",this.RP);this.events.N(b,"captionschanged",this.eP);this.events.N(b,"captionssettingschanged",this.hJ);this.events.N(b,"videoplayerreset",this.Nw);this.events.N(b,"mdxautoplaycancel",function(){d.Ob.wF()});
a=this.Ob;a.Ga();a.subscribe("proxyStateChange",this.ZH,this);a.subscribe("remotePlayerChange",this.jt,this);a.subscribe("remoteQueueChange",this.Nw,this);a.subscribe("previousNextChange",this.WH,this);a.subscribe("nowAutoplaying",this.QH,this);a.subscribe("autoplayDismissed",this.qH,this);g.G(this,this.i);g.G(this,this.u);g.G(this,this.L);g.G(this,this.V);g.G(this,this.J);this.hJ();this.Nw();this.jt()},wNa=function(a,b){if(V7(a)){a.Ob.unsubscribe("remotePlayerChange",a.jt,a);
var c=Math.round(b.volume);b=!!b.muted;var d=m7(a.Ob);if(c!==d.volume||b!==d.muted)a.Ob.setVolume(c,b),a.V.start();a.Ob.subscribe("remotePlayerChange",a.jt,a)}},xNa=function(a){a.Sb(0);
a.i.stop();a.Hb(new g.yJ(64))},W7=function(a,b){if(V7(a)&&!a.C){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.Vb(c,b));a.Ob.WD(a.I.getVideoData(1).videoId,c);a.B=m7(a.Ob).trackData}},X7=function(a,b){var c=a.I.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.Ob.playVideo(c.videoId,b,d,e,c.playerParams,c.Ba,JKa(c));a.Hb(new g.yJ(1))},yNa=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{rG:1});
c&&c.length?(a.I.setOption("captions","track",b),a.C=!1):(a.I.loadModule("captions"),a.C=!0)}else a.I.setOption("captions","track",{})},V7=function(a){return m7(a.Ob).videoId===a.I.getVideoData(1).videoId},Y7=function(){g.V.call(this,{D:"div",
K:"ytp-mdx-manual-pairing-popup-dialog",U:{role:"dialog"},S:[{D:"div",K:"ytp-mdx-manual-pairing-popup-dialog-inner-content",S:[{D:"div",K:"ytp-mdx-manual-pairing-popup-title",oa:"Connecting to your TV on web using a code will be going away soon"},{D:"div",K:"ytp-mdx-manual-pairing-popup-buttons",S:[{D:"button",Da:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],oa:"Learn more"},{D:"button",Da:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],oa:"OK"}]}]}]});this.i=new g.dL(this,250);this.learnMoreButton=
this.Aa("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.Aa("ytp-mdx-manual-pairing-popup-ok");g.G(this,this.i);this.N(this.learnMoreButton,"click",this.l);this.N(this.okButton,"click",this.u)},Z7=function(){g.V.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",U:{role:"dialog"},S:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",S:[{D:"div",K:"ytp-mdx-popup-title",oa:"You're signed out"},{D:"div",K:"ytp-mdx-popup-description",oa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",K:"ytp-mdx-privacy-popup-buttons",S:[{D:"button",Da:["ytp-button","ytp-mdx-privacy-popup-cancel"],oa:"Cancel"},{D:"button",Da:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],oa:"Confirm"}]}]}]});this.i=new g.dL(this,250);this.cancelButton=this.Aa("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Aa("ytp-mdx-privacy-popup-confirm");g.G(this,this.i);this.N(this.cancelButton,"click",this.l);this.N(this.confirmButton,"click",this.u)},$7=function(a){g.V.call(this,{D:"div",
K:"ytp-remote",S:[{D:"div",K:"ytp-remote-display-status",S:[{D:"div",K:"ytp-remote-display-status-icon",S:[g.hna()]},{D:"div",K:"ytp-remote-display-status-text",oa:"{{statustext}}"}]}]});this.api=a;this.i=new g.dL(this,250);g.G(this,this.i);this.N(a,"presentingplayerstatechange",this.l);zNa(this,a.sb())},zNa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.U(b,128)?g.aI("Error on $RECEIVER_NAME",c):b.lc()||g.U(b,4)?g.aI("Playing on $RECEIVER_NAME",c):g.aI("Connected to $RECEIVER_NAME",c);a.Qa("statustext",b);a.i.show()}else a.i.hide()},a8=function(a,b){g.oP.call(this,"Play on",0,a,b);
this.I=a;this.Dm={};this.N(a,"onMdxReceiversChange",this.C);this.N(a,"presentingplayerstatechange",this.C);this.C()},b8=function(a){g.DM.call(this,a);
this.Ei={key:m5(),name:"This computer"};this.qh=null;this.subscriptions=[];this.GB=this.Ob=null;this.Dm=[this.Ei];this.Jl=this.Ei;this.Xc=new g.yJ(64);this.MG=0;this.Oe=-1;this.rq=null;this.qt=this.jw=!1;this.Xk=this.Aq=null;if(!g.ID(this.player.T())&&!g.JD(this.player.T())){a=this.player;var b=g.iM(a);b&&(b=b.Zl())&&(b=new a8(a,b),g.G(this,b));b=new $7(a);g.G(this,b);g.sM(a,b.element,4);this.Aq=new Z7;g.G(this,this.Aq);g.sM(a,this.Aq.element,4);g.S(this.player.T().experiments,"pair_servlet_deprecation_warning_enabled")&&
!g.S(this.player.T().experiments,"deprecate_pair_servlet_enabled")&&(this.rq=new Y7,g.G(this,this.rq),g.sM(a,this.rq.element,4));this.qt=!!I7();this.jw=!!g.qv("yt-remote-manual-pairing-warning-shown")}},c8=function(a){a.Xk&&(a.player.removeEventListener("presentingplayerstatechange",a.Xk),a.Xk=null)},ANa=function(a,b,c){a.Xc=c;
a.player.W("presentingplayerstatechange",new g.NH(c,b))},BNa=function(a,b,c){var d=!1;
1===b?d=!a.qt:2===b&&(d=!a.jw);d&&g.PH(c,8)&&(a.player.pauseVideo(),c8(a))},d8=function(a,b){if(b.key!==a.Jl.key)if(b.key===a.Ei.key)O7();
else{if(a.rq&&!a.jw&&b!==a.Ei&&"cast-selector-receiver"!==b.key&&g.dE(a.player.T()))CNa(a);else{var c;(c=!g.S(a.player.T().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.M("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.M("SESSION_INDEX")&&!g.M("LOGGED_IN")))||a.qt||!a.Aq);(c?0:g.dE(a.player.T())||g.hE(a.player.T()))&&DNa(a)}a.Jl=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&
g.S(a.player.T().experiments,"should_clear_video_data_on_player_cued_unstarted"))a=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=f.bb(l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ba,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=JKa(c))&&(a.locationInfo=c)}F7("Connecting to: "+g.Aj(b));"cast-selector-receiver"==b.key?(H7(a||null),b=a||null,
a7()?Y6().setLaunchParams(b):W6("setLaunchParams called before ready.")):!a&&R7()&&E7()==b.key?g5("yt-remote-connection-change",!0):(O7(),H7(a||null),a=D7().Xg(),(b=o5(a,b.key))&&P7(b,1))}},DNa=function(a){a.player.sb().lc()?a.player.pauseVideo():(a.Xk=function(b){BNa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.Xk));
a.Aq&&a.Aq.Oc();L7()||(T7=!0)},CNa=function(a){a.player.sb().lc()?a.player.pauseVideo():(a.Xk=function(b){BNa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.Xk));
a.rq&&a.rq.Oc();L7()||(T7=!0)},yLa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},P5={"'":"\\'"},ENa={},SKa={QT:"atp",D3:"ska",v2:"que",B0:"mus",C3:"sus",LX:"dsp",O2:"seq",b0:"mic",MW:"dpa",gU:"cds",z0:"mlm"},u5,q5="",lLa=gLa("loadCastFramework")||gLa("loadCastApplicationFramework"),nLa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ta(z5,g.F);g.k=z5.prototype;g.k.wg=function(a){this.B=arguments;this.i=!1;this.yb?this.u=g.Sa()+this.Ef:this.yb=g.Jm(this.C,this.Ef)};
g.k.stop=function(){this.yb&&(g.A.clearTimeout(this.yb),this.yb=null);this.u=null;this.i=!1;this.B=[]};
g.k.pause=function(){++this.l};
g.k.resume=function(){this.l&&(--this.l,!this.l&&this.i&&(this.i=!1,this.G.apply(null,this.B)))};
g.k.va=function(){this.stop();z5.Fd.va.call(this)};
g.k.LL=function(){this.yb&&(g.A.clearTimeout(this.yb),this.yb=null);this.u?(this.yb=g.Jm(this.C,this.u-g.Sa()),this.u=null):this.l?this.i=!0:(this.i=!1,this.G.apply(null,this.B))};g.v(A5,g.F);g.k=A5.prototype;g.k.wg=function(a){this.u=arguments;this.yb||this.l?this.i=!0:B5(this)};
g.k.stop=function(){this.yb&&(g.A.clearTimeout(this.yb),this.yb=null,this.i=!1,this.u=null)};
g.k.pause=function(){this.l++};
g.k.resume=function(){this.l--;this.l||!this.i||this.yb||(this.i=!1,B5(this))};
g.k.va=function(){g.F.prototype.va.call(this);this.stop()};D5.prototype.stringify=function(a){return g.A.JSON.stringify(a,void 0)};
D5.prototype.parse=function(a){return g.A.JSON.parse(a,void 0)};var F5=new g.Zl;g.v(pLa,g.Fl);H5.prototype.i=null;H5.prototype.getOptions=function(){var a;(a=this.i)||(a={},rLa(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var e8;g.Ta(qLa,H5);e8=new qLa;g.k=I5.prototype;g.k.Wm=null;g.k.Si=!1;g.k.Qq=null;g.k.RC=null;g.k.Cq=null;g.k.Lq=null;g.k.Cl=null;g.k.Gm=null;g.k.Mo=null;g.k.Ge=null;g.k.ju=0;g.k.Wi=null;g.k.Lx=null;g.k.xl=null;g.k.rr=-1;g.k.TI=!0;g.k.En=!1;g.k.Iy=0;g.k.Vw=null;var wLa={},L5={};g.k=I5.prototype;g.k.setTimeout=function(a){this.C=a};
g.k.XR=function(a){a=a.target;var b=this.Vw;b&&3==U5(a)?b.wg():this.JJ(a)};
g.k.JJ=function(a){try{if(a==this.Ge)a:{var b=U5(this.Ge),c=this.Ge.G,d=this.Ge.getStatus();if(g.xe&&!g.be(10)||g.ze&&!g.ae("420+")){if(4>b)break a}else if(3>b||3==b&&!g.mg&&!W5(this.Ge))break a;this.En||4!=b||7==c||(8==c||0>=d?this.i.Hi(3):this.i.Hi(2));Q5(this);var e=this.Ge.getStatus();this.rr=e;var f=W5(this.Ge);(this.Si=200==e)?(4==b&&N5(this),this.G?(xLa(this,b,f),g.mg&&this.Si&&3==b&&(this.B.Pa(this.u,"tick",this.SR),this.u.start())):M5(this,f),this.Si&&!this.En&&(4==b?this.i.Cu(this):(this.Si=
!1,K5(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.xl=3,G5(13)):(this.xl=0,G5(14)),N5(this),O5(this))}}catch(h){this.Ge&&W5(this.Ge)}finally{}};
g.k.SR=function(){var a=U5(this.Ge),b=W5(this.Ge);this.ju<b.length&&(Q5(this),xLa(this,a,b),this.Si&&4!=a&&K5(this))};
g.k.vR=function(a){E5((0,g.C)(this.uR,this,a),0)};
g.k.uR=function(a){this.En||(Q5(this),M5(this,a),K5(this))};
g.k.hI=function(a){E5((0,g.C)(this.tR,this,a),0)};
g.k.tR=function(a){this.En||(N5(this),this.Si=a,this.i.Cu(this),this.i.Hi(4))};
g.k.cancel=function(){this.En=!0;N5(this)};
g.k.DR=function(){this.Qq=null;var a=Date.now();0<=a-this.RC?(2!=this.Lq&&this.i.Hi(3),N5(this),this.xl=2,G5(18),O5(this)):ALa(this,this.RC-a)};
g.k.getLastError=function(){return this.xl};g.Ta(S5,g.Zl);var HLa=/^https?$/i,FNa=["POST","PUT"];g.k=S5.prototype;
g.k.send=function(a,b,c,d){if(this.i)throw Error("[goog.net.XhrIo] Object is active with another request="+this.V+"; newUri="+a);b=b?b.toUpperCase():"GET";this.V=a;this.u="";this.G=0;this.Fa=b;this.xa=!1;this.B=!0;this.i=this.ra?sLa(this.ra):sLa(e8);this.ma=this.ra?this.ra.getOptions():e8.getOptions();this.i.onreadystatechange=(0,g.C)(this.XH,this);try{f5(V5(this,"Opening Xhr")),this.Ba=!0,this.i.open(b,String(a),!0),this.Ba=!1}catch(f){f5(V5(this,"Error opening Xhr: "+f.message));GLa(this,f);return}a=
c||"";var e=this.headers.clone();d&&OKa(d,function(f,h){e.set(h,f)});
d=g.bb(e.Ch(),ELa);c=g.A.FormData&&a instanceof g.A.FormData;!g.fb(FNa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.i.setRequestHeader(h,f)},this);
this.La&&(this.i.responseType=this.La);"withCredentials"in this.i&&this.i.withCredentials!==this.Ea&&(this.i.withCredentials=this.Ea);try{JLa(this),0<this.J&&(this.Y=DLa(this.i),f5(V5(this,"Will abort after "+this.J+"ms if incomplete, xhr2 "+this.Y)),this.Y?(this.i.timeout=this.J,this.i.ontimeout=(0,g.C)(this.QD,this)):this.X=g.Jm(this.QD,this.J,this)),f5(V5(this,"Sending request")),this.L=!0,this.i.send(a),this.L=!1}catch(f){f5(V5(this,"Send error: "+f.message)),GLa(this,f)}};
g.k.QD=function(){"undefined"!=typeof g.u0&&this.i&&(this.u="Timed out after "+this.J+"ms, aborting",this.G=8,V5(this,this.u),this.dispatchEvent("timeout"),this.abort(8))};
g.k.abort=function(a){this.i&&this.B&&(V5(this,"Aborting"),this.B=!1,this.C=!0,this.i.abort(),this.C=!1,this.G=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),T5(this))};
g.k.va=function(){this.i&&(this.B&&(this.B=!1,this.C=!0,this.i.abort(),this.C=!1),T5(this,!0));S5.Fd.va.call(this)};
g.k.XH=function(){this.Ga()||(this.Ba||this.L||this.C?ILa(this):this.CQ())};
g.k.CQ=function(){ILa(this)};
g.k.isActive=function(){return!!this.i};
g.k.isComplete=function(){return 4==U5(this)};
g.k.getStatus=function(){try{return 2<U5(this)?this.i.status:-1}catch(a){return-1}};
g.k.getResponseHeader=function(a){if(this.i&&this.isComplete())return a=this.i.getResponseHeader(a),null===a?void 0:a};
g.k.getLastError=function(){return"string"===typeof this.u?this.u:String(this.u)};g.k=KLa.prototype;g.k.Jy=null;g.k.Lg=null;g.k.Ww=!1;g.k.dJ=null;g.k.ev=null;g.k.VA=null;g.k.Ky=null;g.k.eb=null;g.k.gk=-1;g.k.vr=null;g.k.Gr=null;g.k.connect=function(a){this.Ky=a;a=X5(this.i,null,this.Ky);G5(3);this.dJ=Date.now();var b=this.i.J;null!=b?(this.vr=b[0],(this.Gr=b[1])?(this.eb=1,LLa(this)):(this.eb=2,Z5(this))):(d5(a,"MODE","init"),this.Lg=new I5(this,void 0,void 0,void 0),this.Lg.Wm=this.Jy,J5(this.Lg,a,!1,null,!0),this.eb=0)};
g.k.EM=function(a){if(a)this.eb=2,Z5(this);else{G5(4);var b=this.i;b.rj=b.Hl.gk;f6(b,9)}a&&this.Hi(2)};
g.k.Jz=function(a){return this.i.Jz(a)};
g.k.abort=function(){this.Lg&&(this.Lg.cancel(),this.Lg=null);this.gk=-1};
g.k.RD=function(){return!1};
g.k.aI=function(a,b){this.gk=a.rr;if(0==this.eb)if(b){try{var c=this.l.parse(b)}catch(d){a=this.i;a.rj=this.gk;f6(a,2);return}this.vr=c[0];this.Gr=c[1]}else a=this.i,a.rj=this.gk,f6(a,2);else if(2==this.eb)if(this.Ww)G5(7),this.VA=Date.now();else if("11111"==b){if(G5(6),this.Ww=!0,this.ev=Date.now(),a=this.ev-this.dJ,!g.xe||g.be(10)||500>a)this.gk=200,this.Lg.cancel(),G5(12),Y5(this.i,this,!0)}else G5(8),this.ev=this.VA=Date.now(),this.Ww=!1};
g.k.Cu=function(){this.gk=this.Lg.rr;if(this.Lg.Si)0==this.eb?this.Gr?(this.eb=1,LLa(this)):(this.eb=2,Z5(this)):2==this.eb&&((!g.xe||g.be(10)?!this.Ww:200>this.VA-this.ev)?(G5(11),Y5(this.i,this,!1)):(G5(12),Y5(this.i,this,!0)));else{0==this.eb?G5(9):2==this.eb&&G5(10);var a=this.i;this.Lg.getLastError();a.rj=this.gk;f6(a,2)}};
g.k.Kt=function(){return this.i.Kt()};
g.k.isActive=function(){return this.i.isActive()};
g.k.Hi=function(a){this.i.Hi(a)};g.k=$5.prototype;g.k.qj=null;g.k.Vr=null;g.k.xg=null;g.k.Ud=null;g.k.Ly=null;g.k.fv=null;g.k.SE=null;g.k.Du=null;g.k.Us=0;g.k.zO=0;g.k.xf=null;g.k.Pl=null;g.k.wk=null;g.k.Mn=null;g.k.Hl=null;g.k.Jx=null;g.k.mq=-1;g.k.LG=-1;g.k.rj=-1;g.k.Tp=0;g.k.Ip=0;g.k.Fn=8;g.Ta(NLa,g.Fl);g.Ta(OLa,g.Fl);g.k=$5.prototype;g.k.connect=function(a,b,c,d,e){G5(0);this.Ly=b;this.Vr=c||{};d&&void 0!==e&&(this.Vr.OSID=d,this.Vr.OAID=e);this.C?(E5((0,g.C)(this.jF,this,a),100),SLa(this)):this.jF(a)};
g.k.jF=function(a){this.Hl=new KLa(this);this.Hl.Jy=this.qj;this.Hl.l=this.B;this.Hl.connect(a)};
g.k.RD=function(){return 0==this.eb};
g.k.getState=function(){return this.eb};
g.k.fI=function(a){this.Pl=null;WLa(this,a)};
g.k.eI=function(){this.wk=null;this.Ud=new I5(this,this.l,"rpc",this.G);this.Ud.Wm=this.qj;this.Ud.Iy=0;var a=this.SE.clone();b5(a,"RID","rpc");b5(a,"SID",this.l);b5(a,"CI",this.Jx?"0":"1");b5(a,"AID",this.mq);a6(this,a);if(!g.xe||g.be(10))b5(a,"TYPE","xmlhttp"),J5(this.Ud,a,!0,this.Du,!1);else{b5(a,"TYPE","html");var b=this.Ud,c=!!this.Du;b.Lq=3;b.Cl=c5(a.clone());zLa(b,c)}};
g.k.aI=function(a,b){if(0!=this.eb&&(this.Ud==a||this.xg==a))if(this.rj=a.rr,this.xg==a&&3==this.eb)if(7<this.Fn){try{var c=this.B.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.wk){if(this.Ud)if(this.Ud.Cq+3E3<this.xg.Cq)c6(this),this.Ud.cancel(),this.Ud=null;else break a;e6(this);G5(19)}}else this.LG=a[1],0<this.LG-this.mq&&37500>a[2]&&this.Jx&&0==this.Ip&&!this.Mn&&(this.Mn=E5((0,g.C)(this.bP,this),6E3));else f6(this,11)}else b!=ENa.zW.i&&f6(this,11);else if(this.Ud==
a&&c6(this),!g.oc(b))for(a=this.B.parse(b),b=0;b<a.length;b++)c=a[b],this.mq=c[0],c=c[1],2==this.eb?"c"==c[0]?(this.l=c[1],this.Du=c[2],c=c[3],null!=c?this.Fn=c:this.Fn=6,this.eb=3,this.xf&&this.xf.fF(),this.SE=X5(this,this.Kt()?this.Du:null,this.Ly),XLa(this)):"stop"==c[0]&&f6(this,7):3==this.eb&&("stop"==c[0]?f6(this,7):"noop"!=c[0]&&this.xf&&this.xf.eF(c),this.Ip=0)};
g.k.bP=function(){null!=this.Mn&&(this.Mn=null,this.Ud.cancel(),this.Ud=null,e6(this),G5(20))};
g.k.Cu=function(a){if(this.Ud==a){c6(this);this.Ud=null;var b=2}else if(this.xg==a)this.xg=null,b=1;else return;this.rj=a.rr;if(0!=this.eb)if(a.Si)1==b?(b=F5,b.dispatchEvent(new NLa(b,a.Mo?a.Mo.length:0,Date.now()-a.Cq,this.Tp)),b6(this),this.u.length=0):XLa(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.rj)){if(d=1==b)this.xg||this.Pl||1==this.eb||2<=this.Tp?d=!1:(this.Pl=E5((0,g.C)(this.fI,this,a),YLa(this,this.Tp)),this.Tp++,d=!0);d=!(d||2==b&&e6(this))}if(d)switch(c){case 1:f6(this,
5);break;case 4:f6(this,10);break;case 3:f6(this,6);break;case 7:f6(this,12);break;default:f6(this,2)}}};
g.k.aN=function(a){if(!g.fb(arguments,this.eb))throw Error("Unexpected channel state: "+this.eb);};
g.k.AS=function(a){a?G5(2):(G5(1),ZLa(this,8))};
g.k.Jz=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new S5;a.Ea=!1;return a};
g.k.isActive=function(){return!!this.xf&&this.xf.isActive(this)};
g.k.Hi=function(a){var b=F5;b.dispatchEvent(new OLa(b,a))};
g.k.Kt=function(){return!(!g.xe||g.be(10))};
g.k=$La.prototype;g.k.fF=function(){};
g.k.eF=function(){};
g.k.dF=function(){};
g.k.vz=function(){};
g.k.MF=function(){return{}};
g.k.isActive=function(){return!0};g.k=aMa.prototype;g.k.isEmpty=function(){return g.gb(this.i)&&g.gb(this.l)};
g.k.clear=function(){this.i=[];this.l=[]};
g.k.contains=function(a){return g.fb(this.i,a)||g.fb(this.l,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.sFa)(b,a);0<=c?(g.jb(b,c),b=!0):b=!1;return b||g.kb(this.l,a)};
g.k.zg=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.l.length;for(b=0;b<c;++b)a.push(this.l[b]);return a};g.Ta(g6,g.F);g.k=g6.prototype;g.k.nR=function(){this.Ef=Math.min(3E5,2*this.Ef);this.u();this.l&&this.start()};
g.k.start=function(){var a=this.Ef+15E3*Math.random();g.jn(this.i,a);this.l=g.Sa()+a};
g.k.stop=function(){this.i.stop();this.l=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Ef=5E3};g.Ta(h6,$La);g.k=h6.prototype;g.k.subscribe=function(a,b,c){return this.u.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.u.unsubscribe(a,b,c)};
g.k.Mf=function(a){return this.u.Mf(a)};
g.k.W=function(a,b){return this.u.W.apply(this.u,arguments)};
g.k.dispose=function(){this.X||(this.X=!0,g.Di(this.u),dMa(this),g.Di(this.l),this.l=null,this.Y=function(){return""})};
g.k.Ga=function(){return this.X};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.V="";this.l.stop();this.C=a||null;this.B=b||0;a=this.ma+"/test";b=this.ma+"/bind";var d=new $5(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ra),e=this.i;e&&(e.xf=null);d.xf=this;this.i=d;i6(this);if(this.i){d=g.M("ID_TOKEN");var f=this.i.qj||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.qj=f}e?(3!=e.getState()&&0==ULa(e)||e.getState(),this.i.connect(a,b,this.G,e.l,e.mq)):c?this.i.connect(a,
b,this.G,c.sessionId,c.arrayId):this.i.connect(a,b,this.G)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Vb(a,b);this.l.isActive()||2==(this.i?this.i.getState():0)?this.J.push(a):j6(this)&&(i6(this),TLa(this.i,a))};
g.k.fF=function(){this.l.reset();this.C=null;this.B=0;if(this.J.length){var a=this.J;this.J=[];for(var b=0,c=a.length;b<c;++b)TLa(this.i,a[b])}this.W("handlerOpened")};
g.k.dF=function(a){var b=2==a&&401==this.i.rj;4==a||b||this.l.start();this.W("handlerError",a,b)};
g.k.vz=function(a){if(!this.l.isActive())this.W("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.J.push(d)}};
g.k.MF=function(){var a={v:2};this.V&&(a.gsessionid=this.V);0!=this.B&&(a.ui=""+this.B);0!=this.L&&(a.ui=""+this.L);this.C&&g.Vb(a,this.C);return a};
g.k.eF=function(a){"S"==a[0]?this.V=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),RLa(this.i)):this.W("handlerMessage",new bMa(a[0],a[1]))};
g.k.jx=function(a){(this.G.loungeIdToken=a)||this.l.stop();if(this.xa&&this.i){var b=this.i.qj||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.qj=b}};
g.k.hS=function(){this.l.isActive();0==ULa(this.i)&&this.connect(this.C,this.B)};k6.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
k6.prototype.u=function(a,b){a(Error("Request error: "+b.status))};
k6.prototype.C=function(a){a(Error("request timed out"))};var kMa=Date.now(),n6=null,q6=Array(50),p6=-1,r6=!1;g.Ta(s6,g.O);s6.prototype.Xg=function(){return this.screens};
s6.prototype.contains=function(a){return!!n5(this.screens,a)};
s6.prototype.get=function(a){return a?o5(this.screens,a):null};
s6.prototype.info=function(a){o6(this.G,a)};g.v(t6,g.O);g.k=t6.prototype;g.k.start=function(){!this.i&&isNaN(this.yb)&&this.oI()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.yb)||(g.pp(this.yb),this.yb=NaN)};
g.k.va=function(){this.stop();g.O.prototype.va.call(this)};
g.k.oI=function(){this.yb=NaN;this.i=g.up(l6(this.u,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.C)(this.NL,this),onError:(0,g.C)(this.ML,this),onTimeout:(0,g.C)(this.OL,this)})};
g.k.NL=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.B;a.name=this.G;b=-1;this.C&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.W("pairingComplete",new i5(a),b)};
g.k.ML=function(a){this.i=null;a.status&&404==a.status?this.l>=GNa.length?this.W("pairingFailed",Error("DIAL polling timed out")):(a=GNa[this.l],this.yb=g.np((0,g.C)(this.oI,this),a),this.l++):this.W("pairingFailed",Error("Server error "+a.status))};
g.k.OL=function(){this.i=null;this.W("pairingFailed",Error("Server not responding"))};
var GNa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ta(v6,s6);g.k=v6.prototype;g.k.start=function(){u6(this)&&this.W("screenChange");!g.qv("yt-remote-lounge-token-expiration")&&oMa(this);g.pp(this.i);this.i=g.np((0,g.C)(this.start,this),1E4)};
g.k.add=function(a,b){u6(this);lMa(this,a);w6(this,!1);this.W("screenChange");b(a);a.token||oMa(this)};
g.k.remove=function(a,b){var c=u6(this);nMa(this,a)&&(w6(this,!1),c=!0);b(a);c&&this.W("screenChange")};
g.k.Hx=function(a,b,c,d){var e=u6(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,w6(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.W("screenChange")};
g.k.va=function(){g.pp(this.i);v6.Fd.va.call(this)};
g.k.xN=function(a){u6(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}w6(this,!b);b&&o6(this.G,"Missed "+b+" lounge tokens.")};
g.k.wN=function(a){o6(this.G,"Requesting lounge tokens failed: "+a)};g.v(y6,g.O);g.k=y6.prototype;g.k.start=function(){var a=parseInt(g.qv("yt-remote-fast-check-period")||"0",10);(this.B=g.Sa()-144E5<a?0:a)?B6(this):(this.B=g.Sa()+3E5,g.pv("yt-remote-fast-check-period",this.B),this.RB())};
g.k.isEmpty=function(){return g.Ob(this.i)};
g.k.update=function(){x6("Updating availability on schedule.");var a=this.G(),b=g.Cb(this.i,function(c,d){return c&&!!o5(a,d)},this);
A6(this,b)};
g.k.va=function(){g.pp(this.u);this.u=NaN;this.l&&(this.l.abort(),this.l=null);g.O.prototype.va.call(this)};
g.k.RB=function(){g.pp(this.u);this.u=NaN;this.l&&this.l.abort();var a=qMa(this);if(e5(a)){var b=l6(this.C,"/pairing/get_screen_availability");this.l=m6(this.C,b,{lounge_token:g.Jb(a).join(",")},(0,g.C)(this.WQ,this,a),(0,g.C)(this.VQ,this))}else A6(this,{}),B6(this)};
g.k.WQ=function(a,b){this.l=null;var c=g.Jb(qMa(this));if(g.xb(c,g.Jb(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;A6(this,c);B6(this)}else this.Gd("Changing Screen set during request."),this.RB()};
g.k.VQ=function(a){this.Gd("Screen availability failed: "+a);this.l=null;B6(this)};
g.k.Gd=function(a){o6("OnlineScreenService",a)};g.Ta(C6,s6);g.k=C6.prototype;g.k.start=function(){this.l.start();this.i.start();this.screens.length&&(this.W("screenChange"),this.i.isEmpty()||this.W("onlineScreenChange"))};
g.k.add=function(a,b,c){this.l.add(a,b,c)};
g.k.remove=function(a,b,c){this.l.remove(a,b,c);this.i.update()};
g.k.Hx=function(a,b,c,d){this.l.contains(a)?this.l.Hx(a,b,c,d):(a="Updating name of unknown screen: "+a.name,o6(this.G,a),d(Error(a)))};
g.k.Xg=function(a){return a?this.screens:g.nb(this.screens,g.Je(this.u,function(b){return!this.contains(b)},this))};
g.k.SD=function(){return g.Je(this.Xg(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.TD=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new t6(this.B,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.Di(l);e(D6(h,m),n)});
l.subscribe("pairingFailed",function(m){g.Di(l);f(m)});
l.start();return(0,g.C)(l.stop,l)};
g.k.PL=function(a,b,c,d){g.up(l6(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.C)(function(e,f){e=new i5(f.screen||{});if(!e.name||uMa(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);uMa(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(D6(this,e))},this),
onError:(0,g.C)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.C)(function(){d(Error("pairing request timed out."))},this)})};
g.k.va=function(){g.Di(this.l);g.Di(this.i);C6.Fd.va.call(this)};
g.k.DN=function(){wMa(this);this.W("screenChange");this.i.update()};
C6.prototype.dispose=C6.prototype.dispose;g.Ta(F6,g.O);g.k=F6.prototype;g.k.getScreen=function(){return this.B};
g.k.ag=function(a){this.Ga()||(a&&H6(this,""+a),this.B=null,this.W("sessionScreen",null))};
g.k.info=function(a){o6(this.xa,a)};
g.k.UD=function(){return null};
g.k.bC=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.C)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.C)(function(){H6(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.va=function(){this.bC("");F6.Fd.va.call(this)};g.v(I6,F6);g.k=I6.prototype;g.k.aC=function(a){if(this.l){if(this.l==a)return;H6(this,"Overriding cast session with new session object");FMa(this);this.ma=!1;this.V="unknown";this.l.removeUpdateListener(this.Y);this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ra)}this.l=a;this.l.addUpdateListener(this.Y);this.l.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.ra);BMa(this,"getMdxSessionStatus")};
g.k.nq=function(a){this.info("launchWithParams no-op for Cast: "+g.Aj(a))};
g.k.stop=function(){this.l?this.l.stop((0,g.C)(function(){this.ag()},this),(0,g.C)(function(){this.ag(Error("Failed to stop receiver app."))},this)):this.ag(Error("Stopping cast device without session."))};
g.k.bC=function(){};
g.k.va=function(){this.info("disposeInternal");FMa(this);this.l&&(this.l.removeUpdateListener(this.Y),this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ra));this.l=null;F6.prototype.va.call(this)};
g.k.HR=function(a,b){if(!this.Ga())if(b)if(b=C5(b),g.Ma(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Aj(b)),a){case "mdxSessionStatus":zMa(this,b);break;case "loungeToken":CMa(this,b);break;default:H6(this,"Unknown youtube message: "+a)}else H6(this,"Unable to parse message.");else H6(this,"No data in message.")};
g.k.bG=function(a,b,c,d){g.pp(this.L);this.L=0;tMa(this.u,this.i.label,a,this.i.friendlyName,(0,g.C)(function(e){e?b(e):0<=d?(H6(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.L=g.np((0,g.C)(this.bG,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.UD=function(){return this.l};
g.k.QL=function(a){this.Ga()||a||(H6(this,"Cast session died."),this.ag())};g.v(L6,F6);g.k=L6.prototype;g.k.aC=function(a){this.l=a;this.l.addUpdateListener(this.Ba)};
g.k.nq=function(a){this.Ca=a;this.X()};
g.k.stop=function(){MMa(this);this.l?this.l.stop((0,g.C)(this.ag,this,null),(0,g.C)(this.ag,this,"Failed to stop DIAL device.")):this.ag()};
g.k.va=function(){MMa(this);this.l&&this.l.removeUpdateListener(this.Ba);this.l=null;F6.prototype.va.call(this)};
g.k.RL=function(a){this.Ga()||a||(H6(this,"DIAL session died."),this.C(),this.C=g.Ia,this.ag())};g.v(P6,F6);P6.prototype.stop=function(){this.ag()};
P6.prototype.aC=function(){};
P6.prototype.nq=function(){g.pp(this.l);this.l=NaN;var a=o5(this.u.Xg(),this.i.label);a?G6(this,a):this.ag(Error("No such screen"))};
P6.prototype.va=function(){g.pp(this.l);this.l=NaN;F6.prototype.va.call(this)};g.v(Q6,g.O);g.k=Q6.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.L);this.V||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.C)(this.GQ,this);c=new chrome.cast.ApiConfig(c,(0,g.C)(this.bI,this),e,d,a);c.customDialLaunchCallback=(0,g.C)(this.vP,this);chrome.cast.initialize(c,(0,g.C)(function(){this.Ga()||
(chrome.cast.addReceiverActionListener(this.G),hMa(),this.l.subscribe("onlineScreenChange",(0,g.C)(this.VD,this)),this.u=OMa(this),chrome.cast.setCustomReceivers(this.u,g.Ia,(0,g.C)(function(f){this.Gd("Failed to set initial custom receivers: "+g.Aj(f))},this)),this.W("yt-remote-cast2-availability-change",S6(this)),b(!0))},this),(0,g.C)(function(f){this.Gd("Failed to initialize API: "+g.Aj(f));
b(!1)},this))};
g.k.mS=function(a,b){R6("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)R6("Unsetting old screen status: "+this.i.i.friendlyName),T6(this,null)}if(a&&b){if(!this.i){c=o5(this.l.Xg(),a);if(!c){R6("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){R6("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=NMa(this,c);a||(R6("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.u.push(a),chrome.cast.setCustomReceivers(this.u,g.Ia,(0,g.C)(function(d){this.Gd("Failed to set initial custom receivers: "+g.Aj(d))},this)));
R6("setConnectedScreenStatus: new active receiver: "+a.friendlyName);T6(this,new P6(this.l,a),!0)}this.i.bC(b)}else R6("setConnectedScreenStatus: no screen.")};
g.k.nS=function(a){this.Ga()?this.Gd("Setting connection data on disposed cast v2"):this.i?this.i.nq(a):this.Gd("Setting connection data without a session")};
g.k.TL=function(){this.Ga()?this.Gd("Stopping session on disposed cast v2"):this.i?(this.i.stop(),T6(this,null)):R6("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.C)(this.bI,this),(0,g.C)(this.ZQ,this))};
g.k.va=function(){this.l.unsubscribe("onlineScreenChange",(0,g.C)(this.VD,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.G);var a=eMa,b=g.Ha("yt.mdx.remote.debug.handlers_");g.kb(b||[],a);g.Di(this.i);g.O.prototype.va.call(this)};
g.k.Gd=function(a){o6("Controller",a)};
g.k.dI=function(a,b){this.i==a&&(b||T6(this,null),this.W("yt-remote-cast2-session-change",b))};
g.k.DQ=function(a,b){if(!this.Ga())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),R6("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)R6("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{R6("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.W("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:T6(this,
new P6(this.l,a));break;case chrome.cast.ReceiverType.DIAL:T6(this,new L6(this.l,a,this.C,this.B));break;case chrome.cast.ReceiverType.CAST:T6(this,new I6(this.l,a,this.B));break;default:this.Gd("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.Gd("Stopping receiver w/o session: "+a.friendlyName)}else this.Gd("onReceiverAction_ called without receiver.")};
g.k.vP=function(a){if(this.Ga())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Gd("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.Gd("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return R6("Reselecting dial screen."),
this.W("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Gd('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);T6(this,new L6(this.l,b,this.C,this.B))}b=this.i;b.L=a;b.L.appState==chrome.cast.DialAppState.RUNNING?(a=b.L.extraData||{},c=a.screenId||null,M6(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=JMa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.L.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.To(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=KMa(b,c)):a=KMa(b,c)):a=O6(b);return a};
g.k.bI=function(a){if(!this.Ga()){R6("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(b.receiverType==chrome.cast.ReceiverType.CAST)R6("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),T6(this,new I6(this.l,b,this.B),!0);else{this.Gd("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.i.i,d=o5(this.l.Xg(),c.label);d&&j5(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(R6("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Di(this.i),this.i=new I6(this.l,b,this.B),this.i.subscribe("sessionScreen",(0,g.C)(this.dI,this,this.i)),this.i.nq(null));this.i.aC(a)}}};
g.k.SL=function(){return this.i?this.i.UD():null};
g.k.ZQ=function(a){this.Ga()||(this.Gd("Failed to estabilish a session: "+g.Aj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&T6(this,null))};
g.k.GQ=function(a){R6("Receiver availability updated: "+a);if(!this.Ga()){var b=S6(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;S6(this)!=b&&this.W("yt-remote-cast2-availability-change",S6(this))}};
g.k.VD=function(){this.Ga()||(this.u=OMa(this),R6("Updating custom receivers: "+g.Aj(this.u)),chrome.cast.setCustomReceivers(this.u,g.Ia,(0,g.C)(function(){this.Gd("Failed to set custom receivers.")},this)),this.W("yt-remote-cast2-availability-change",S6(this)))};
Q6.prototype.setLaunchParams=Q6.prototype.nS;Q6.prototype.setConnectedScreenStatus=Q6.prototype.mS;Q6.prototype.stopSession=Q6.prototype.TL;Q6.prototype.getCastSession=Q6.prototype.SL;Q6.prototype.requestSession=Q6.prototype.requestSession;Q6.prototype.init=Q6.prototype.init;Q6.prototype.dispose=Q6.prototype.dispose;var Z6=[];g.k=d7.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";e7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Fj=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.G=a.playerTimeAt,this.B=a.seekableStart,this.i=a.seekableEnd,this.C=a.duration,this.L=a.loadedTime,this.u=a.liveIngestionTime,this.l=
!isNaN(this.u))};
g.k.lc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.getDuration=function(){return this.l?this.C+f7(this):this.C};
g.k.clone=function(){return new d7(j7(this))};g.v(l7,g.O);g.k=l7.prototype;g.k.getState=function(){return this.eb};
g.k.play=function(){n7(this)?(this.i?this.i.play(null,g.Ia,s7(this,"play")):r7(this,"play"),q7(this,1,h7(m7(this))),this.W("remotePlayerChange")):o7(this,this.play)};
g.k.pause=function(){n7(this)?(this.i?this.i.pause(null,g.Ia,s7(this,"pause")):r7(this,"pause"),q7(this,2,h7(m7(this))),this.W("remotePlayerChange")):o7(this,this.pause)};
g.k.seekTo=function(a){if(n7(this)){if(this.i){var b=m7(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.lc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ia,s7(this,"seekTo",{newTime:a}))}else r7(this,"seekTo",{newTime:a});q7(this,3,a);this.W("remotePlayerChange")}else o7(this,g.Pa(this.seekTo,a))};
g.k.stop=function(){if(n7(this)){this.i?this.i.stop(null,g.Ia,s7(this,"stopVideo")):r7(this,"stopVideo");var a=m7(this);a.index=-1;a.videoId="";e7(a);p7(this,a);this.W("remotePlayerChange")}else o7(this,this.stop)};
g.k.setVolume=function(a,b){if(n7(this)){var c=m7(this);if(this.l){if(c.volume!=a){var d=Math.round(a)/100;this.l.setReceiverVolumeLevel(d,(0,g.C)(function(){o6("CP","set receiver volume: "+d)},this),(0,g.C)(function(){this.Gd("failed to set receiver volume.")},this))}c.muted!=b&&this.l.setReceiverMuted(b,(0,g.C)(function(){o6("CP","set receiver muted: "+b)},this),(0,g.C)(function(){this.Gd("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);r7(this,"setVolume",e)}c.muted=b;c.volume=a;p7(this,c)}else o7(this,g.Pa(this.setVolume,a,b))};
g.k.WD=function(a,b){if(n7(this)){var c=m7(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Aj(b.style),g.Vb(a,c.trackData));r7(this,"setSubtitlesTrack",a);p7(this,c)}else o7(this,g.Pa(this.WD,a,b))};
g.k.setAudioTrack=function(a,b){n7(this)?(b=b.getLanguageInfo().getId(),r7(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=m7(this),a.audioTrackId=b,p7(this,a)):o7(this,g.Pa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){var l=m7(this);c=c||0;var m={videoId:a,currentIndex:c};i7(l,a,c);void 0!==b&&(g7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=h&&(m.locationInfo=g.Aj(h));r7(this,"setPlaylist",m);d||p7(this,l)};
g.k.Rw=function(a,b){if(n7(this)){if(a&&b){var c=m7(this);i7(c,a,b);p7(this,c)}r7(this,"previous")}else o7(this,g.Pa(this.Rw,a,b))};
g.k.nextVideo=function(a,b){if(n7(this)){if(a&&b){var c=m7(this);i7(c,a,b);p7(this,c)}r7(this,"next")}else o7(this,g.Pa(this.nextVideo,a,b))};
g.k.wF=function(){n7(this)?r7(this,"dismissAutoplay"):o7(this,this.wF)};
g.k.dispose=function(){if(3!=this.eb){var a=this.eb;this.eb=3;this.W("proxyStateChange",a,this.eb)}g.O.prototype.dispose.call(this)};
g.k.va=function(){$Ma(this);this.u=null;this.B.clear();k7(this,null);g.O.prototype.va.call(this)};
g.k.dC=function(a){if((a!=this.eb||2==a)&&3!=this.eb&&0!=a){var b=this.eb;this.eb=a;this.W("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,g.gb(b.i)&&(b.i=b.l,b.i.reverse(),b.l=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.AQ=function(a,b){this.W(a,b)};
g.k.hP=function(a){if(!a)this.Xs(null),k7(this,null);else if(this.l.receiver.volume){a=this.l.receiver.volume;var b=m7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)o6("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,p7(this,b)}};
g.k.Xs=function(a){o6("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.J);if(this.i=a)this.i.addUpdateListener(this.J),aNa(this),this.W("remotePlayerChange")};
g.k.gP=function(a){a?(aNa(this),this.W("remotePlayerChange")):this.Xs(null)};
g.k.vC=function(){r7(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.oP=function(){var a=XMa();a&&k7(this,a)};
g.k.Gd=function(a){o6("CP",a)};g.v(t7,g.O);g.k=t7.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,h=b.index,l={videoId:d},m=b.currentTime;b=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);b&&(l.locationInfo=b);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==h&&(l.currentIndex=h);c&&(this.ac.listId=c);this.ac.videoId=d;this.ac.index=h||0;this.ac.state=3;g7(this.ac,m);this.B="UNSUPPORTED";u7("Connecting with setPlaylist and params: "+g.Aj(l));this.i.connect({method:"setPlaylist",
params:g.Aj(l)},a,$Ka())}else u7("Connecting without params"),this.i.connect({},a,$Ka());cNa(this)};
g.k.jx=function(a){this.i.jx(a)};
g.k.dispose=function(){this.Ga()||(this.W("beforeDispose"),v7(this,3));g.O.prototype.dispose.call(this)};
g.k.va=function(){w7(this);y7(this);x7(this);g.pp(this.J);this.J=NaN;g.pp(this.L);this.L=NaN;this.u=null;g.Up(this.V);this.V.length=0;this.i.dispose();g.O.prototype.va.call(this);this.B=this.G=this.l=this.ac=this.i=null};
g.k.tN=function(){this.Pp(2)};
g.k.lP=function(){u7("Channel opened");this.ma&&(this.ma=!1,x7(this),this.Y=g.np((0,g.C)(function(){u7("Timing out waiting for a screen.");this.Pp(1)},this),15E3));
dLa(cMa(this.i),this.Ba)};
g.k.iP=function(){u7("Channel closed");isNaN(this.C)?t5(!0):t5();this.dispose()};
g.k.jP=function(a,b){t5();isNaN(this.ys())?(b&&"shortLived"==this.ra&&this.W("browserChannelAuthError",a),u7("Channel error: "+a+" without reconnection"),this.dispose()):(this.ma=!0,u7("Channel error: "+a+" with reconnection in "+this.ys()+" ms"),v7(this,2))};
g.k.kP=function(a){a.params?u7("Received: action="+a.action+", params="+g.Aj(a.params)):u7("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=C5(a.params.devices);this.l=g.Mc(a,function(c){return new h5(c)});
a=!!g.bb(this.l,function(c){return"LOUNGE_SCREEN"==c.type});
fNa(this,a);break;case "loungeScreenDisconnected":g.lb(this.l,function(c){return"LOUNGE_SCREEN"==c.type});
fNa(this,!1);break;case "remoteConnected":var b=new h5(C5(a.params.device));g.bb(this.l,function(c){return b?c.id==b.id:!1})||KKa(this.l,b);
break;case "remoteDisconnected":b=new h5(C5(a.params.device));g.lb(this.l,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":hNa(this,a);break;case "nowPlaying":jNa(this,a);break;case "onStateChange":iNa(this,a);break;case "onAdStateChange":kNa(this,a);break;case "onVolumeChanged":lNa(this,a);break;case "onSubtitlesTrackChanged":gNa(this,a);break;case "nowAutoplaying":mNa(this,a);break;case "autoplayDismissed":this.W("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.W("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.W("autoplayModeChange",this.B);"DISABLED"==this.B&&this.W("autoplayDismissed");break;case "onHasPreviousNextChanged":nNa(this,a);break;case "requestAssistedSignIn":this.W("assistedSignInRequested",a.params.authCode);break;default:u7("Unrecognized action: "+a.action)}};
g.k.dS=function(){if(this.u){var a=this.u;this.u=null;this.ac.videoId!=a&&z7(this,"getNowPlaying")}};
g.k.oN=function(){var a=3;this.Ga()||(a=0,isNaN(this.ys())?j6(this.i)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.Pp=function(a){u7("Disconnecting with "+a);w7(this);this.W("beforeDisconnect",a);1==a&&t5();dMa(this.i,a);this.dispose()};
g.k.mN=function(){var a=this.ac;this.u&&(a=this.ac.clone(),i7(a,this.u,a.index));return j7(a)};
g.k.oS=function(a){var b=new d7(a);b.videoId&&b.videoId!=this.ac.videoId&&(this.u=b.videoId,g.pp(this.J),this.J=g.np((0,g.C)(this.dS,this),5E3));var c=[];this.ac.listId==b.listId&&this.ac.videoId==b.videoId&&this.ac.index==b.index||c.push("remoteQueueChange");this.ac.playerState==b.playerState&&this.ac.volume==b.volume&&this.ac.muted==b.muted&&h7(this.ac)==h7(b)&&g.Aj(this.ac.trackData)==g.Aj(b.trackData)||c.push("remotePlayerChange");this.ac.reset(a);g.zb(c,function(d){this.W(d)},this)};
g.k.aG=function(){var a=this.i.G.id,b=g.bb(this.l,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.ys=function(){var a=this.i;return a.l.isActive()?a.l.l-g.Sa():NaN};
g.k.kN=function(){return this.B||"UNSUPPORTED"};
g.k.lN=function(){return this.G||""};
g.k.UL=function(){if(!isNaN(this.ys())){var a=this.i.l;a.i.wg();a.start()}};
g.k.lS=function(a,b){z7(this,a,b);eNa(this)};
g.k.XD=function(){var a=g.Eo("SID","")||"",b=g.Eo("SAPISID","")||"",c=g.Eo("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.tf(g.Xe(a),2);b=g.tf(g.Xe(b),2);c=g.tf(g.Xe(c),2);return g.tf(g.Xe(a+","+b+","+c),2)};
t7.prototype.subscribe=t7.prototype.subscribe;t7.prototype.unsubscribeByKey=t7.prototype.Mf;t7.prototype.getProxyState=t7.prototype.oN;t7.prototype.disconnect=t7.prototype.Pp;t7.prototype.getPlayerContextData=t7.prototype.mN;t7.prototype.setPlayerContextData=t7.prototype.oS;t7.prototype.getOtherConnectedRemoteId=t7.prototype.aG;t7.prototype.getReconnectTimeout=t7.prototype.ys;t7.prototype.getAutoplayMode=t7.prototype.kN;t7.prototype.getAutoplayVideoId=t7.prototype.lN;t7.prototype.reconnect=t7.prototype.UL;
t7.prototype.sendMessage=t7.prototype.lS;t7.prototype.getXsrfToken=t7.prototype.XD;g.v(A7,s6);g.k=A7.prototype;g.k.Xg=function(a){return this.Df.$_gs(a)};
g.k.contains=function(a){return!!this.Df.$_c(a)};
g.k.get=function(a){return this.Df.$_g(a)};
g.k.start=function(){this.Df.$_st()};
g.k.add=function(a,b,c){this.Df.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Df.$_r(a,b,c)};
g.k.Hx=function(a,b,c,d){this.Df.$_un(a,b,c,d)};
g.k.va=function(){for(var a=0,b=this.i.length;a<b;++a)this.Df.$_ubk(this.i[a]);this.i.length=0;this.Df=null;s6.prototype.va.call(this)};
g.k.VL=function(){this.W("screenChange")};
g.k.hQ=function(){this.W("onlineScreenChange")};
C6.prototype.$_st=C6.prototype.start;C6.prototype.$_gspc=C6.prototype.PL;C6.prototype.$_gsppc=C6.prototype.TD;C6.prototype.$_c=C6.prototype.contains;C6.prototype.$_g=C6.prototype.get;C6.prototype.$_a=C6.prototype.add;C6.prototype.$_un=C6.prototype.Hx;C6.prototype.$_r=C6.prototype.remove;C6.prototype.$_gs=C6.prototype.Xg;C6.prototype.$_gos=C6.prototype.SD;C6.prototype.$_s=C6.prototype.subscribe;C6.prototype.$_ubk=C6.prototype.Mf;var N7=null,T7=!1,B7=null,C7=null,S7=null,G7=[];g.v(U7,g.F);g.k=U7.prototype;g.k.va=function(){g.F.prototype.va.call(this);this.i.stop();this.u.stop();this.L.stop();this.Y();var a=this.Ob;a.unsubscribe("proxyStateChange",this.ZH,this);a.unsubscribe("remotePlayerChange",this.jt,this);a.unsubscribe("remoteQueueChange",this.Nw,this);a.unsubscribe("previousNextChange",this.WH,this);a.unsubscribe("nowAutoplaying",this.QH,this);a.unsubscribe("autoplayDismissed",this.qH,this);this.Ob=this.l=null};
g.k.YD=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.Ob.eb)if(V7(this)){if(!m7(this.Ob).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":m7(this.Ob).lc()?this.Ob.pause():this.Ob.play();break;case "control_play":this.Ob.play();break;case "control_pause":this.Ob.pause();break;case "control_seek":this.J.wg(c[0],c[1]);break;case "control_subtitles_set_track":W7(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.I.getCurrentTime();X7(this,0===c?void 0:c);break;case "control_seek":X7(this,c[0]);break;case "control_subtitles_set_track":W7(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.eP=function(a){this.L.wg(a)};
g.k.SS=function(a){this.YD("control_subtitles_set_track",g.Ob(a)?null:a)};
g.k.hJ=function(){var a=this.I.getOption("captions","track");g.Ob(a)||W7(this,a)};
g.k.Sb=function(a){this.l.Sb(a,this.I.getVideoData().lengthSeconds)};
g.k.RP=function(){g.Ob(this.B)||yNa(this,this.B);this.C=!1};
g.k.ZH=function(a,b){this.u.stop();2===b&&this.cJ()};
g.k.jt=function(){if(V7(this)){this.i.stop();var a=m7(this.Ob);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.l.Oe=1;break;case 1082:case 1083:this.l.Oe=0;break;default:this.l.Oe=-1}switch(a.playerState){case 1081:case 1:this.Hb(new g.yJ(8));this.bJ();break;case 1085:case 3:this.Hb(new g.yJ(9));break;case 1083:case 0:this.Hb(new g.yJ(2));this.J.stop();this.Sb(this.I.getVideoData().lengthSeconds);break;case 1084:this.Hb(new g.yJ(4));break;case 2:this.Hb(new g.yJ(4));this.Sb(h7(a));
break;case -1:this.Hb(new g.yJ(64));break;case -1E3:this.Hb(new g.yJ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=m7(this.Ob).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,yNa(this,a));a=m7(this.Ob);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.V.isActive()||this.CJ()}else xNa(this)};
g.k.WH=function(){this.I.W("mdxpreviousnextchange")};
g.k.Nw=function(){V7(this)||xNa(this)};
g.k.QH=function(a){isNaN(a)||this.I.W("mdxnowautoplaying",a)};
g.k.qH=function(){this.I.W("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){V7(this)&&this.Ob.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===m7(this.Ob).playerState?X7(this,a):b&&this.Ob.seekTo(a)};
g.k.CJ=function(){var a=this;if(V7(this)){var b=m7(this.Ob);this.events.dc(this.X);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.X=this.events.N(this.I,"onVolumeChange",function(c){wNa(a,c)})}};
g.k.bJ=function(){this.i.stop();if(!this.Ob.Ga()){var a=m7(this.Ob);a.lc()&&this.Hb(new g.yJ(8));this.Sb(h7(a));this.i.start()}};
g.k.cJ=function(){this.u.stop();this.i.stop();var a=this.Ob.u.getReconnectTimeout();2==this.Ob.eb&&!isNaN(a)&&this.u.start()};
g.k.Hb=function(a){this.u.stop();var b=this.G;if(!g.DJ(b,a)){var c=g.U(a,2);c!==g.U(this.G,2)&&this.I.Qo(c);this.G=a;ANa(this.l,b,a)}};g.v(Y7,g.V);Y7.prototype.Oc=function(){this.i.show()};
Y7.prototype.Ab=function(){this.i.hide()};
Y7.prototype.l=function(){g.eJ("https://web.archive.org/web/20210501020656/https://support.google.com/youtube/answer/7640706")};
Y7.prototype.u=function(){g5("mdx-manual-pairing-popup-ok");this.Ab()};g.v(Z7,g.V);Z7.prototype.Oc=function(){this.i.show()};
Z7.prototype.Ab=function(){this.i.hide()};
Z7.prototype.l=function(){g5("mdx-privacy-popup-cancel");this.Ab()};
Z7.prototype.u=function(){g5("mdx-privacy-popup-confirm");this.Ab()};g.v($7,g.V);$7.prototype.l=function(a){zNa(this,a.state)};g.v(a8,g.oP);a8.prototype.C=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.Dm=g.Ab(a,this.i,this),g.pP(this,g.Mc(a,this.i)),a=this.I.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.lh(a),this.enable(!0)):this.enable(!1)};
a8.prototype.i=function(a){return a.key};
a8.prototype.ji=function(a){return"cast-selector-receiver"===a?"Cast...":this.Dm[a].name};
a8.prototype.Xe=function(a){g.oP.prototype.Xe.call(this,a);this.I.setOption("remote","currentReceiver",this.Dm[a]);this.wb.Ab()};g.v(b8,g.DM);g.k=b8.prototype;
g.k.create=function(){var a=this.player.T(),b=g.GD(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:g.S(a.experiments,"mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:g.S(a.experiments,"enable_dial_short_lived_lounge_token"),enableCastLoungeToken:g.S(a.experiments,"enable_cast_short_lived_lounge_token")};rNa(b,a);this.subscriptions.push(g.Sq("yt-remote-before-disconnect",this.dP,this));this.subscriptions.push(g.Sq("yt-remote-connection-change",this.HQ,this));this.subscriptions.push(g.Sq("yt-remote-receiver-availability-change",
this.YH,this));this.subscriptions.push(g.Sq("yt-remote-auto-connect",this.FQ,this));this.subscriptions.push(g.Sq("yt-remote-receiver-resumed",this.EQ,this));this.subscriptions.push(g.Sq("mdx-privacy-popup-confirm",this.VR,this));this.subscriptions.push(g.Sq("mdx-privacy-popup-cancel",this.UR,this));this.subscriptions.push(g.Sq("mdx-manual-pairing-popup-ok",this.nO,this));this.YH()};
g.k.load=function(){this.player.cancelPlayback();g.DM.prototype.load.call(this);this.qh=new U7(this,this.player,this.Ob);var a=(a=vNa())?a.currentTime:0;var b=R7()?new l7(L7(),void 0):null;0==a&&b&&(a=h7(m7(b)));0!==a&&this.Sb(a);ANa(this,this.Xc,this.Xc);this.player.Vj(6)};
g.k.unload=function(){this.player.W("mdxautoplaycanceled");this.Jl=this.Ei;g.Ei(this.qh,this.Ob);this.Ob=this.qh=null;g.DM.prototype.unload.call(this);this.player.Vj(5);c8(this)};
g.k.va=function(){g.Tq(this.subscriptions);g.DM.prototype.va.call(this)};
g.k.Qj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.qh.YD.apply(this.qh,[a].concat(g.la(c)))};
g.k.getAdState=function(){return this.Oe};
g.k.pN=function(){return this.loaded?this.qh.suggestion:null};
g.k.Fj=function(){return this.Ob?m7(this.Ob).Fj:!1};
g.k.hasNext=function(){return this.Ob?m7(this.Ob).hasNext:!1};
g.k.Sb=function(a,b){this.MG=a||0;this.player.W("progresssync",a,b)};
g.k.getCurrentTime=function(){return this.MG};
g.k.getProgressState=function(){var a=m7(this.Ob),b=this.player.getVideoData();return{allowSeeking:g.S(this.player.T().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.Ne():!a.isAdPlaying()&&this.player.Ne(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.l?a.u+f7(a):a.u,isAtLiveHead:1>=(a.l?a.i+f7(a):a.i)-this.getCurrentTime(),loaded:a.L,seekableEnd:a.l?a.i+f7(a):a.i,seekableStart:0<a.B?a.B+
f7(a):a.B}};
g.k.nextVideo=function(){this.Ob&&this.Ob.nextVideo()};
g.k.Rw=function(){this.Ob&&this.Ob.Rw()};
g.k.dP=function(a){1===a&&(this.GB=this.Ob?m7(this.Ob):null)};
g.k.HQ=function(){var a=R7()?new l7(L7(),void 0):null;if(a){var b=this.Jl;this.loaded&&this.unload();this.Ob=a;this.GB=null;b.key!==this.Ei.key&&(this.Jl=b,this.load())}else g.Di(this.Ob),this.Ob=null,this.loaded&&(this.unload(),(a=this.GB)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,h7(a)));this.player.W("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.YH=function(){var a=[this.Ei],b=a.concat,c=sNa();$6()&&g.qv("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Dm=b.call(a,c);a=M7()||this.Ei;d8(this,a);this.player.Ma("onMdxReceiversChange")};
g.k.FQ=function(){var a=M7();d8(this,a)};
g.k.EQ=function(){this.Jl=M7()};
g.k.VR=function(){this.qt=!0;c8(this);T7=!1;N7&&P7(N7,1);N7=null};
g.k.UR=function(){this.qt=!1;c8(this);d8(this,this.Ei);this.Jl=this.Ei;T7=!1;N7=null;this.player.playVideo()};
g.k.nO=function(){this.jw=!0;c8(this);g.pv("yt-remote-manual-pairing-warning-shown",!0,2592E3);T7=!1;N7&&P7(N7,1);N7=null};
g.k.Ie=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Dm;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?b7():d8(this,b)),this.loaded?this.Jl:this.Ei;case "quickCast":return 2===this.Dm.length&&"cast-selector-receiver"===this.Dm[1].key?(b&&b7(),!0):!1}};
g.k.vC=function(){this.Ob.vC()};
g.k.Vh=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.JM.remote=b8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 02:06:56 May 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:15:33 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 99.413
  exclusion.robots: 0.154
  exclusion.robots.policy: 0.14
  cdx.remote: 0.1
  esindex: 0.016
  LoadShardBlock: 41.949 (3)
  PetaboxLoader3.datanode: 87.065 (5)
  load_resource: 245.492 (2)
  PetaboxLoader3.resolve: 194.501 (2)
*/