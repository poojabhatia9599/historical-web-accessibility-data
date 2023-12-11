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

(function(g){var window=this;'use strict';var YUa=function(a,b){return g.Ne(a,b)},ZUa=function(a,b){b=b instanceof g.Of?b:g.Wf(b,/^data:image\//i.test(b));
a.src=g.Pf(b)},P6=function(a){g.fl(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ra()).toString(36));
return a},Q6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.kl(a.u,b,c)},$Ua=function(a){if(a===g.ap)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},aVa=function(a){if(a instanceof g.Zo)return a;
if("function"==typeof a.Mg)return a.Mg(!1);if(g.Ma(a)){var b=0,c=new g.Zo;c.next=function(){for(;;){if(b>=a.length)return g.b2;if(b in a)return g.$o(a[b++]);b++}};
var d=c.next;c.Fj=function(){return g.bp(d.call(c))};
return c}throw Error("Not implemented");},bVa=function(a,b,c){if(g.Ma(a))try{g.qc(a,b,c)}catch(e){$Ua(e)}else for(a=aVa(a);;){var d=void 0;
try{d=a.Fj()}catch(e){if(e===g.ap)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){$Ua(e)}}},cVa=function(a,b){var c=[];
bVa(b,function(d){try{var e=g.hs.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.lfa(e)&&c.push(d)},a);
return c},dVa=function(a,b){cVa(a,b).forEach(function(c){g.hs.prototype.remove.call(this,c)},a)},eVa=function(a){if(a.xa){if(a.xa.locationOverrideToken)return{locationOverrideToken:a.xa.locationOverrideToken};
if(null!=a.xa.latitudeE7&&null!=a.xa.longitudeE7)return{latitudeE7:a.xa.latitudeE7,longitudeE7:a.xa.longitudeE7}}return null},fVa=function(a,b){g.Ub(a,b)||a.push(b)},R6=function(a){var b=0,c;
for(c in a)b++;return b},gVa=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},S6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return gVa(a)},hVa=function(a,b,c,d){var e=new g.Ok(null,void 0);
a&&g.Pk(e,a);b&&g.Qk(e,b);c&&g.Rk(e,c);d&&(e.K=d);return e},T6=function(a,b){g.mv[a]=!0;
var c=g.kv();c&&c.publish.apply(c,arguments);g.mv[a]=!1},U6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Qr;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",iVa(this,a.capabilities||""),jVa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},iVa=function(a,b){a.capabilities.clear();
g.Ap(b.split(","),g.Qa(YUa,kVa)).forEach(function(c){a.capabilities.add(c)})},jVa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},V6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},W6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},lVa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},mVa=function(a){return new V6(a)},nVa=function(a){return Array.isArray(a)?g.nn(a,mVa):[]},X6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},Y6=function(a){return Array.isArray(a)?"["+g.nn(a,X6).join(",")+"]":"null"},Z6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},oVa=function(a){return g.nn(a,function(b){return{key:b.id,
name:b.name}})},$6=function(a,b){return g.Rb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},a7=function(a,b){return g.Rb(a,function(c){return W6(c,b)})},pVa=function(){var a=(0,g.ny)();
a&&dVa(a,a.i.Mg(!0))},b7=function(){var a=g.qy("yt-remote-connected-devices")||[];
g.nc(a);return a},qVa=function(a){if(g.Vb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.nn(a,function(d,e){return 0==e?d:d.substring(c.length)})},rVa=function(a){g.py("yt-remote-connected-devices",a,86400)},d7=function(){if(c7)return c7;
var a=g.qy("yt-remote-device-id");a||(a=Z6(),g.py("yt-remote-device-id",a,31536E3));for(var b=b7(),c=1,d=a;g.Ub(b,d);)c++,d=a+"#"+c;return c7=d},e7=function(){var a=b7(),b=d7();
g.Ub(a,b);g.sy()&&g.pc(a,b);a=qVa(a);if(g.Vb(a))try{g.Cia("remote_sid")}catch(c){}else try{g.nu("remote_sid",a.join(","),-1)}catch(c){}},sVa=function(){return g.qy("yt-remote-session-browser-channel")},tVa=function(){return g.qy("yt-remote-local-screens")||[]},uVa=function(){g.py("yt-remote-lounge-token-expiration",!0,86400)},vVa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.nn(tVa(),function(d){return d.loungeToken}),c=g.nn(a,function(d){return d.loungeToken});
g.on(c,function(d){return!g.Ub(b,d)})&&uVa();
g.py("yt-remote-local-screens",a,31536E3)},wVa=function(a,b){g.py("yt-remote-session-browser-channel",a);
g.py("yt-remote-session-screen-id",b);a=b7();b=d7();g.Ub(a,b)||a.push(b);rVa(a);e7()},f7=function(a){a||(g.ry("yt-remote-session-screen-id"),g.ry("yt-remote-session-video-id"));
e7();a=b7();g.Yb(a,d7());rVa(a)},xVa=function(){if(!g7){var a=g.qs();
a&&(g7=new g.es(a))}},yVa=function(){xVa();
return g7?!!g7.get("yt-remote-use-staging-server"):!1},h7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},zVa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},AVa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},i7=function(a){a.length?BVa(a.shift(),function(){i7(a)}):j7()},CVa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},BVa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.ik(d,g.Vr(a));(document.head||document.documentElement).appendChild(d)},DVa=function(){var a=h7(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20211201000250/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20211201000250/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},j7=function(){var a=AVa();
a&&a(!1,"No cast extension found")},k7=function(){if(EVa){var a=2,b=AVa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;BVa("//web.archive.org/web/20211201000250/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",j7,c)}},FVa=function(){k7();
var a=DVa();a.push("//web.archive.org/web/20211201000250/https://www.gstatic.com/eureka/clank/cast_sender.js");i7(a)},HVa=function(){k7();
var a=DVa();a.push.apply(a,g.v(GVa.map(CVa)));a.push("//web.archive.org/web/20211201000250/https://www.gstatic.com/eureka/clank/cast_sender.js");i7(a)},l7=function(a,b,c){g.H.call(this);
this.I=null!=c?(0,g.E)(a,c):a;this.Yf=b;this.D=(0,g.E)(this.OQ,this);this.i=!1;this.u=0;this.B=this.Mb=null;this.C=[]},m7=function(a,b,c){g.H.call(this);
this.C=null!=c?a.bind(c):a;this.Yf=b;this.B=null;this.i=!1;this.u=0;this.Mb=null},n7=function(a){a.Mb=g.Wh(function(){a.Mb=null;
a.i&&!a.u&&(a.i=!1,n7(a))},a.Yf);
var b=a.B;a.B=null;a.C.apply(null,b)},o7=function(){},p7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},r7=function(a){q7.dispatchEvent(new IVa(q7,a))},IVa=function(a,b){g.se.call(this,"statevent",a);
this.stat=b},s7=function(a,b,c,d){this.i=a;
this.B=b;this.S=c;this.K=d||1;this.u=45E3;this.C=new g.ll(this);this.I=new g.Vh;this.I.setInterval(250)},KVa=function(a,b,c){a.Ut=1;
a.jn=P6(b.clone());a.Dq=c;a.D=!0;JVa(a,null)},t7=function(a,b,c,d,e){a.Ut=1;
a.jn=P6(b.clone());a.Dq=null;a.D=c;e&&(a.VN=!1);JVa(a,d)},JVa=function(a,b){a.Ht=Date.now();
u7(a);a.Oo=a.jn.clone();Q6(a.Oo,"t",a.K);a.FB=0;a.Of=a.i.BD(a.i.xx()?b:null);0<a.sC&&(a.TA=new m7((0,g.E)(a.ZO,a,a.Of),a.sC));a.C.Ra(a.Of,"readystatechange",a.PQ);b=a.hp?g.Ue(a.hp):{};a.Dq?(a.DB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Of.send(a.Oo,a.DB,a.Dq,b)):(a.DB="GET",a.VN&&!g.Wg&&(b.Connection="close"),a.Of.send(a.Oo,a.DB,null,b));a.i.Gj(1)},MVa=function(a,b){var c=a.FB,d=b.indexOf("\n",c);
if(-1==d)return v7;c=Number(b.substring(c,d));if(isNaN(c))return LVa;d+=1;if(d+c>b.length)return v7;b=b.substr(d,c);a.FB=d+c;return b},OVa=function(a,b){a.Ht=Date.now();
u7(a);var c=b?window.location.hostname:"";a.Oo=a.jn.clone();g.fl(a.Oo,"DOMAIN",c);g.fl(a.Oo,"t",a.K);try{a.Tj=new ActiveXObject("htmlfile")}catch(m){w7(a);a.Xm=7;r7(22);x7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in y7)f=y7[f];else if(f in NVa)f=y7[f]=NVa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
y7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.kg(g.Gf("b/12014412"),d);a.Tj.open();a.Tj.write(g.gg(c));a.Tj.close();a.Tj.parentWindow.m=(0,g.E)(a.JW,a);a.Tj.parentWindow.d=(0,g.E)(a.gN,a,!0);a.Tj.parentWindow.rpcClose=(0,g.E)(a.gN,a,!1);c=a.Tj.createElement("DIV");a.Tj.parentWindow.document.body.appendChild(c);d=g.Vf(a.Oo.toString());d=g.Bg(g.Pf(d));d=g.kg(g.Gf("b/12014412"),'<iframe src="'+d+'"></iframe>');g.mg(c,d);a.i.Gj(1)},u7=function(a){a.rH=Date.now()+
a.u;
PVa(a,a.u)},PVa=function(a,b){if(null!=a.ou)throw Error("WatchDog timer not null");
a.ou=p7((0,g.E)(a.QW,a),b)},z7=function(a){a.ou&&(g.C.clearTimeout(a.ou),a.ou=null)},x7=function(a){a.i.uf()||a.zp||a.i.ly(a)},w7=function(a){z7(a);
g.pe(a.TA);a.TA=null;a.I.stop();g.nl(a.C);if(a.Of){var b=a.Of;a.Of=null;b.abort();b.dispose()}a.Tj&&(a.Tj=null)},A7=function(a,b){try{a.i.ZM(a,b),a.i.Gj(4)}catch(c){}},RVa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;QVa(a,b,function(h){h?c(!0):g.C.setTimeout(function(){RVa(a,b,c,d,f)},f)})}},QVa=function(a,b,c){var d=new Image;
d.onload=function(){try{B7(d),c(!0)}catch(e){}};
d.onerror=function(){try{B7(d),c(!1)}catch(e){}};
d.onabort=function(){try{B7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{B7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
ZUa(d,a)},B7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},SVa=function(a){this.i=a;
this.u=new o7},TVa=function(a){var b=C7(a.i,a.Wu,"/mail/images/cleardot.gif");
P6(b);RVa(b.toString(),5E3,(0,g.E)(a.DR,a),3,2E3);a.Gj(1)},E7=function(a){var b=a.i.X;
if(null!=b)r7(5),b?(r7(11),D7(a.i,a,!1)):(r7(12),D7(a.i,a,!0));else if(a.yh=new s7(a,void 0,void 0,void 0),a.yh.hp=a.tC,b=a.i,b=C7(b,b.xx()?a.Mu:null,a.uC),r7(5),!g.Hc||g.yc(10))Q6(b,"TYPE","xmlhttp"),t7(a.yh,b,!1,a.Mu,!1);else{Q6(b,"TYPE","html");var c=a.yh;a=!!a.Mu;c.Ut=3;c.jn=P6(b.clone());OVa(c,a)}},F7=function(a,b,c){this.i=1;
this.u=[];this.C=[];this.D=new o7;this.S=a||null;this.X=null!=b?b:null;this.I=c||!1},UVa=function(a,b){this.i=a;
this.map=b;this.context=null},VVa=function(a,b,c,d){g.se.call(this,"timingevent",a);
this.size=b;this.lx=d},WVa=function(a){g.se.call(this,"serverreachability",a)},ZVa=function(a){XVa(a);
if(3==a.i){var b=a.zw++,c=a.Zy.clone();g.fl(c,"SID",a.B);g.fl(c,"RID",b);g.fl(c,"TYPE","terminate");G7(a,c);b=new s7(a,a.B,b,void 0);b.Ut=2;b.jn=P6(c.clone());ZUa(new Image,b.jn.toString());b.Ht=Date.now();u7(b)}YVa(a)},$Va=function(a){a.dS(1,0);
a.Zy=C7(a,null,a.vC);H7(a)},XVa=function(a){a.vn&&(a.vn.abort(),a.vn=null);
a.Le&&(a.Le.cancel(),a.Le=null);a.Ml&&(g.C.clearTimeout(a.Ml),a.Ml=null);I7(a);a.Wg&&(a.Wg.cancel(),a.Wg=null);a.Hn&&(g.C.clearTimeout(a.Hn),a.Hn=null)},aWa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new UVa(a.HT++,b));2!=a.i&&3!=a.i||H7(a)},bWa=function(a){var b=0;
a.Le&&b++;a.Wg&&b++;return b},H7=function(a){a.Wg||a.Hn||(a.Hn=p7((0,g.E)(a.eN,a),0),a.Cs=0)},dWa=function(a,b){if(1==a.i){if(!b){a.zw=Math.floor(1E5*Math.random());
b=a.zw++;var c=new s7(a,"",b,void 0);c.hp=a.fk;var d=J7(a),e=a.Zy.clone();g.fl(e,"RID",b);g.fl(e,"CVER","1");G7(a,e);KVa(c,e,d);a.Wg=c;a.i=2}}else 3==a.i&&(b?cWa(a,b):0==a.u.length||a.Wg||cWa(a))},cWa=function(a,b){if(b)if(6<a.Ap){a.u=a.C.concat(a.u);
a.C.length=0;var c=a.zw-1;b=J7(a)}else c=b.S,b=b.Dq;else c=a.zw++,b=J7(a);var d=a.Zy.clone();g.fl(d,"SID",a.B);g.fl(d,"RID",c);g.fl(d,"AID",a.Xs);G7(a,d);c=new s7(a,a.B,c,a.Cs+1);c.hp=a.fk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Wg=c;KVa(c,d,b)},G7=function(a,b){a.Pf&&(a=a.Pf.wK())&&g.Ae(a,function(c,d){g.fl(b,d,c)})},J7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Ap&&0<b){var d=a.u[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={gr:e.gr},f++){e.gr=a.u[f].i;var h=a.u[f].map;e.gr=6>=a.Ap?f:e.gr-d;try{g.Ae(h,function(l){return function(m,n){c.push("req"+l.gr+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.gr+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.u.splice(0,b));
return c.join("&")},eWa=function(a){a.Le||a.Ml||(a.K=1,a.Ml=p7((0,g.E)(a.dN,a),0),a.Xr=0)},K7=function(a){if(a.Le||a.Ml||3<=a.Xr)return!1;
a.K++;a.Ml=p7((0,g.E)(a.dN,a),fWa(a,a.Xr));a.Xr++;return!0},D7=function(a,b,c){a.BB=c;
a.gk=b.zl;a.I||$Va(a)},I7=function(a){null!=a.Ip&&(g.C.clearTimeout(a.Ip),a.Ip=null)},fWa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},L7=function(a,b){if(2==b||9==b){var c=null;
a.Pf&&(c=null);var d=(0,g.E)(a.RX,a);c||(c=new g.Ok("//web.archive.org/web/20211201000250/https://www.google.com/images/cleardot.gif"),P6(c));QVa(c.toString(),1E4,d)}else r7(2);gWa(a,b)},gWa=function(a,b){a.i=0;
a.Pf&&a.Pf.JJ(b);YVa(a);XVa(a)},YVa=function(a){a.i=0;
a.gk=-1;if(a.Pf)if(0==a.C.length&&0==a.u.length)a.Pf.oD();else{g.ac(a.C);var b=g.ac(a.u);a.C.length=0;a.u.length=0;a.Pf.oD(b)}},C7=function(a,b,c){var d=g.gl(c);
if(""!=d.i)b&&g.Qk(d,b+"."+d.i),g.Rk(d,d.B);else{var e=window.location;d=hVa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Cv&&g.Ae(a.Cv,function(f,h){g.fl(d,h,f)});
g.fl(d,"VER",a.Ap);G7(a,d);return d},hWa=function(){},iWa=function(){this.i=[];
this.u=[]},jWa=function(a,b){this.action=a;
this.params=b||{}},M7=function(a,b){g.H.call(this);
this.i=new g.L(this.yW,0,this);g.I(this,this.i);this.Yf=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.E)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.E)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},N7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.xa=a;this.I=b;this.B=new g.ds;this.u=new M7(this.uX,this);this.i=null;this.Z=!1;this.D=null;this.X="";this.S=this.C=0;this.K=[];this.Aa=c;this.oa=d;this.Ba=e},kWa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.BB,sessionId:a.i.B,arrayId:a.i.Xs}},lWa=function(a,b){a.S=b||0;
a.u.stop();O7(a);a.i&&(3==a.i.getState()&&dWa(a.i),ZVa(a.i));a.S=0},P7=function(a){return!!a.i&&3==a.i.getState()},O7=function(a){if(a.i){var b=a.oa(),c=a.i.fk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.fk=c}},Q7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.Gi(4,a))||"";b&&(this.port=":"+b);this.domain=g.Hi(a)||"";a=g.wb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.vb(a,"10.0")&&(this.u=!1))},R7=function(a,b){var c=a.i;
a.u&&(c="https://"+a.domain+a.port+a.i);return g.Si(c+b,{})},S7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Qa(a.C,d,!0),onError:g.Qa(a.B,e),onTimeout:g.Qa(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Pt(b,a)},pWa=function(){var a=mWa;
nWa();T7.push(a);oWa()},U7=function(a,b){nWa();
var c=qWa(a,String(b));g.Vb(T7)?rWa(c):(oWa(),g.qc(T7,function(d){d(c)}))},nWa=function(){T7||(T7=g.Ia("yt.mdx.remote.debug.handlers_")||[],g.Ha("yt.mdx.remote.debug.handlers_",T7,void 0))},rWa=function(a){var b=(V7+1)%50;
V7=b;W7[b]=a;X7||(X7=49==b)},oWa=function(){var a=T7;
if(W7[0]){var b=X7?V7:-1;do{b=(b+1)%50;var c=W7[b];g.qc(a,function(d){d(c)})}while(b!=V7);
W7=Array(50);V7=-1;X7=!1}},qWa=function(a,b){var c=(Date.now()-sWa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},Y7=function(a){g.R.call(this);
this.I=a;this.screens=[]},tWa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},uWa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Ap(a.screens,function(f){return!!$6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=tWa(a,b[d])||c;return c},vWa=function(a,b){var c=a.screens.length;
a.screens=g.Ap(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},Z7=function(a,b,c,d,e){g.R.call(this);
this.B=a;this.K=b;this.C=c;this.I=d;this.D=e;this.u=0;this.i=null;this.Mb=NaN},a8=function(a){Y7.call(this,"LocalScreenService");
this.u=a;this.i=NaN;$7(this);this.info("Initializing with "+Y6(this.screens))},wWa=function(a){if(a.screens.length){var b=g.nn(a.screens,function(d){return d.id}),c=R7(a.u,"/pairing/get_lounge_token_batch");
S7(a.u,c,{screen_ids:b.join(",")},(0,g.E)(a.CS,a),(0,g.E)(a.BS,a))}},$7=function(a){if(g.P("deprecate_pair_servlet_enabled"))return uWa(a,[]);
var b=nVa(tVa());b=g.Ap(b,function(c){return!c.uuid});
return uWa(a,b)},b8=function(a,b){vVa(g.nn(a.screens,lVa));
b&&uVa()},d8=function(a,b){g.R.call(this);
this.I=b;b=(b=g.qy("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.Ub(b,h)}this.i=c;this.D=a;this.B=this.C=NaN;this.u=null;c8("Initialized with "+g.xi(this.i))},e8=function(a,b,c){var d=R7(a.D,"/pairing/get_screen_availability");
S7(a.D,d,{lounge_token:b.token},(0,g.E)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.E)(function(){c(!1)},a))},f8=function(a,b){a:if(R6(b)!=R6(a.i))var c=!1;
else{c=g.Le(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(c8("Updated online screens: "+g.xi(a.i)),a.i=b,a.ea("screenChange"));xWa(a)},g8=function(a){isNaN(a.B)||g.Lt(a.B);
a.B=g.Jt((0,g.E)(a.kG,a),0<a.C&&a.C<g.Ra()?2E4:1E4)},c8=function(a){U7("OnlineScreenService",a)},yWa=function(a){var b={};
g.qc(a.I(),function(c){c.token?b[c.token]=c.id:this.me("Requesting availability of screen w/o lounge token.")});
return b},xWa=function(a){a=g.Le(g.Ce(a.i,function(b){return b}));
g.nc(a);a.length?g.py("yt-remote-online-screen-ids",a.join(","),60):g.ry("yt-remote-online-screen-ids")},h8=function(a,b){b=void 0===b?!1:b;
Y7.call(this,"ScreenService");this.C=a;this.K=b;this.i=this.u=null;this.B=[];this.D={};zWa(this)},BWa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Kh(),l=c?a7(h,c):null;c&&(a.K||l)||(l=a7(h,b));if(l){l.uuid=b;var m=i8(a,l);e8(a.i,m,function(n){e(n?m:null)})}else c?AWa(a,c,(0,g.E)(function(n){var p=i8(this,new V6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));e8(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},CWa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},DWa=function(a,b,c){e8(a.i,b,c)},AWa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Pt(R7(a.C,"/pairing/get_lounge_token_batch"),e)},EWa=function(a){a.screens=a.u.Kh();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Y6(a.screens))},zWa=function(a){j8(a);
a.u=new a8(a.C);a.u.subscribe("screenChange",(0,g.E)(a.MS,a));EWa(a);a.K||(a.B=nVa(g.qy("yt-remote-automatic-screen-cache")||[]));j8(a);a.info("Initializing automatic screens: "+Y6(a.B));a.i=new d8(a.C,(0,g.E)(a.Kh,a,!0));a.i.subscribe("screenChange",(0,g.E)(function(){this.ea("onlineScreenChange")},a))},i8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=a7(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||FWa(a));j8(a);a.D[b.uuid]=b.id;g.py("yt-remote-device-id-map",a.D,31536E3);return b},FWa=function(a){a=g.Ap(a.B,function(b){return"shortLived"!=b.idType});
g.py("yt-remote-automatic-screen-cache",g.nn(a,lVa))},j8=function(a){a.D=g.qy("yt-remote-device-id-map")||{}},k8=function(a,b,c){g.R.call(this);
this.Ba=c;this.B=a;this.i=b;this.C=null},l8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},GWa=function(a,b){a.C&&(a.C.token=b,i8(a.B,a.C));
a.ea("sessionScreen",a.C)},m8=function(a,b){U7(a.Ba,b)},n8=function(a,b,c){k8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.oa=(0,g.E)(this.UQ,this);this.Aa=(0,g.E)(this.UW,this);this.Z=g.Jt(function(){HWa(d,null)},12E4);
this.K=this.D=this.I=this.S=0;this.xa=!1;this.X="unknown"},o8=function(a,b){g.Lt(a.K);
a.K=0;0==b?IWa(a):a.K=g.Jt(function(){IWa(a)},b)},IWa=function(a){JWa(a,"getLoungeToken");
g.Lt(a.D);a.D=g.Jt(function(){KWa(a,null)},3E4)},JWa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.xi(void 0));
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ja,(0,g.E)(function(){m8(this,"Failed to send message: "+b+".")},a)):m8(a,"Sending yt message without session: "+g.xi(c))},p8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.JK(b,function(c){l8(a,c)},function(){return a.Bg()},5)):a.Bg(Error("Waiting for session status timed out."))},MWa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new V6(b);LWa(a,d,function(e){e?(a.xa=!0,i8(a.B,d),l8(a,d),a.X="unknown",o8(a,c)):(g.rt(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Bg())},5)},HWa=function(a,b){g.Lt(a.Z);
a.Z=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?MWa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.rt(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),p8(a,b.screenId))):(g.rt(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),p8(a,b.screenId)):p8(a,b.screenId):a.Bg(Error("Waiting for session status timed out."))},KWa=function(a,b){g.Lt(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.X=c,o8(a,3E4)):(GWa(a,b.loungeToken),a.xa=!1,a.X="unknown",o8(a,b.loungeTokenRefreshIntervalMs))},LWa=function(a,b,c,d){g.Lt(a.I);
a.I=0;DWa(a.B,b,function(e){e||0>d?c(e):a.I=g.Jt(function(){LWa(a,b,c,d-1)},300)})},NWa=function(a){g.Lt(a.S);
a.S=0;g.Lt(a.I);a.I=0;g.Lt(a.Z);a.Z=0;g.Lt(a.D);a.D=0;g.Lt(a.K);a.K=0},q8=function(a,b,c,d){k8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.S=null;this.Aa="";this.La=c;this.Ka=null;this.Z=g.Ja;this.X=NaN;this.Ja=(0,g.E)(this.VQ,this);this.D=g.Ja;this.K=this.I=0;this.oa=!1;this.xa="unknown"},r8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},OWa=function(a){a.D=a.B.uI(a.Aa,a.i.label,a.i.friendlyName,r8(a),function(b,c){a.D=g.Ja;
a.oa=!0;l8(a,b);"shortLived"==b.idType&&0<c&&s8(a,c)},function(b){a.D=g.Ja;
a.Bg(b)})},PWa=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.La;yVa()&&(b.env_useStageMdx=1);return g.Qi(b)},t8=function(a){return new Promise(function(b){a.Aa=Z6();
if(a.Ka){var c=new chrome.cast.DialLaunchResponse(!0,PWa(a));b(c);OWa(a)}else a.Z=function(){g.Lt(a.X);a.Z=function(){};
a.X=NaN;var d=new chrome.cast.DialLaunchResponse(!0,PWa(a));b(d);OWa(a)},a.X=g.Jt(function(){a.Z()},100)})},RWa=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new V6(b);return(new Promise(function(e){QWa(a,d,function(f){f?(a.oa=!0,i8(a.B,d),l8(a,d),s8(a,c)):g.rt(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):t8(a)})},SWa=function(a,b){var c=a.S.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){BWa(a.B,c,b,d,function(f){f&&f.token&&l8(a,f);e(f)},function(f){m8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):t8(a)})},QWa=function(a,b,c,d){g.Lt(a.I);
a.I=0;DWa(a.B,b,function(e){e||0>d?c(e):a.I=g.Jt(function(){QWa(a,b,c,d-1)},300)})},s8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
r8(a)&&(g.Lt(a.K),a.K=0,0==b?TWa(a):a.K=g.Jt(function(){TWa(a)},b))},TWa=function(a){r8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.xa=c,s8(a,3E4)):(a.oa=!1,a.xa="unknown",GWa(a,b.loungeToken),s8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.xa="noLoungeTokenResponse";s8(a,3E4)})},UWa=function(a){g.Lt(a.I);
a.I=0;g.Lt(a.K);a.K=0;a.D();a.D=function(){};
g.Lt(a.X)},u8=function(a,b){k8.call(this,a,b,"ManualSession");
this.u=g.Jt((0,g.E)(this.Ys,this,null),150)},v8=function(a,b){g.R.call(this);
this.config_=b;this.u=a;this.S=b.appId||"233637DE";this.C=b.theme||"cl";this.X=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.i=null;this.K=!1;this.B=[];this.D=(0,g.E)(this.LV,this)},VWa=function(a,b){return b?g.Rb(a.B,function(c){return W6(b,c.label)},a):null},w8=function(a){U7("Controller",a)},mWa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},x8=function(a){return a.K||!!a.B.length||!!a.i},y8=function(a,b,c){b!=a.i&&(g.pe(a.i),(a.i=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.i):a.ea("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.E)(a.cN,a,b)),b.subscribe("sessionFailed",function(){return WWa(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.Ys(null)):a.ea("yt-remote-cast2-session-change",null))},WWa=function(a,b){a.i==b&&a.ea("yt-remote-cast2-session-failed")},XWa=function(a){var b=a.u.tI(),c=a.i&&a.i.i;
a=g.nn(b,function(d){c&&W6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=VWa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},bXa=function(a,b,c,d){d.disableCastApi?z8("Cannot initialize because disabled by Mdx config."):YWa()?ZWa(b,d)&&(A8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?$Wa(a,c):(window.__onGCastApiAvailable=function(e,f){e?$Wa(a,c):(B8("Failed to load cast API: "+f),C8(!1),A8(!1),g.ry("yt-remote-cast-available"),g.ry("yt-remote-cast-receiver"),
aXa(),c(!1))},d.loadCastApiSetupScript?g.ty("https://web.archive.org/web/20211201000250/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=h7()&&FVa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?j7():89<=h7()?HVa():(k7(),i7(GVa.map(CVa))))):z8("Cannot initialize because not running Chrome")},aXa=function(){z8("dispose");
var a=D8();a&&a.dispose();g.Ha("yt.mdx.remote.cloudview.instance_",null,void 0);cXa(!1);g.pv(E8);E8.length=0},F8=function(){return!!g.qy("yt-remote-cast-installed")},dXa=function(){var a=g.qy("yt-remote-cast-receiver");
return a?a.friendlyName:null},eXa=function(){z8("clearCurrentReceiver");
g.ry("yt-remote-cast-receiver")},fXa=function(){return F8()?D8()?D8().getCastSession():(B8("getCastSelector: Cast is not initialized."),null):(B8("getCastSelector: Cast API is not installed!"),null)},H8=function(){F8()?D8()?G8()?(z8("Requesting cast selector."),D8().requestSession()):(z8("Wait for cast API to be ready to request the session."),E8.push(g.ov("yt-remote-cast2-api-ready",H8))):B8("requestCastSelector: Cast is not initialized."):B8("requestCastSelector: Cast API is not installed!")},I8=
function(a,b){G8()?D8().setConnectedScreenStatus(a,b):B8("setConnectedScreenStatus called before ready.")},YWa=function(){var a=0<=g.wb().search(/ (CrMo|Chrome|CriOS)\//);
return g.Cj||a},gXa=function(a,b){D8().init(a,b)},ZWa=function(a,b){var c=!1;
D8()||(a=new v8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.py("yt-remote-cast-available",d);T6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){z8("onReceiverSelected: "+d.friendlyName);
g.py("yt-remote-cast-receiver",d);T6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){z8("onReceiverResumed: "+d.friendlyName);
g.py("yt-remote-cast-receiver",d);T6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){z8("onSessionChange: "+X6(d));
d||g.ry("yt-remote-cast-receiver");T6("yt-remote-cast2-session-change",d)}),g.Ha("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
z8("cloudview.createSingleton_: "+c);return c},D8=function(){return g.Ia("yt.mdx.remote.cloudview.instance_")},$Wa=function(a,b){C8(!0);
A8(!1);gXa(a,function(c){c?(cXa(!0),g.qv("yt-remote-cast2-api-ready")):(B8("Failed to initialize cast API."),C8(!1),g.ry("yt-remote-cast-available"),g.ry("yt-remote-cast-receiver"),aXa());b(c)})},z8=function(a){U7("cloudview",a)},B8=function(a){U7("cloudview",a)},C8=function(a){z8("setCastInstalled_ "+a);
g.py("yt-remote-cast-installed",a)},G8=function(){return!!g.Ia("yt.mdx.remote.cloudview.apiReady_")},cXa=function(a){z8("setApiReady_ "+a);
g.Ha("yt.mdx.remote.cloudview.apiReady_",a,void 0)},A8=function(a){g.Ha("yt.mdx.remote.cloudview.initializing_",a,void 0)},J8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.K=0;this.trackData=null;this.hasNext=this.Nk=!1;this.S=this.D=this.i=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},K8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Nk=!1;a.hasNext=!1;a.K=0;a.I=g.Ra();a.C=0;a.i=0;a.D=0;a.S=0;a.B=NaN;a.u=!1},L8=function(a){return a.Hc()?(g.Ra()-a.I)/1E3:0},M8=function(a,b){a.K=b;
a.I=g.Ra()},N8=function(a){switch(a.playerState){case 1:case 1081:return(g.Ra()-a.I)/1E3+a.K;
case -1E3:return 0}return a.K},O8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&K8(a)},P8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Ve(a.trackData);b.hasPrevious=a.Nk;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.i;b.duration=a.D;b.loadedTime=a.S;b.liveIngestionTime=a.B;return b},R8=function(a,b){g.R.call(this);
this.B=0;this.C=a;this.I=[];this.D=new iWa;this.u=this.i=null;this.X=(0,g.E)(this.tU,this);this.K=(0,g.E)(this.Iw,this);this.S=(0,g.E)(this.sU,this);this.Z=(0,g.E)(this.AU,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.zG,this),hXa(this))):c=3;0!=c&&(b?this.zG(c):g.Jt((0,g.E)(function(){this.zG(c)},this),0));
(a=fXa())&&Q8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Z)},S8=function(a){return new J8(a.C.getPlayerContextData())},hXa=function(a){g.qc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Qa(this.JV,b),this))},a)},iXa=function(a){g.qc(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},T8=function(a){return 1==a.getState()},U8=function(a,b){var c=a.D;
50>c.i.length+c.u.length&&a.D.u.push(b)},W8=function(a,b,c){var d=S8(a);
M8(d,c);-1E3!=d.playerState&&(d.playerState=b);V8(a,d)},X8=function(a,b,c){a.C.sendMessage(b,c)},V8=function(a,b){iXa(a);
a.C.setPlayerContextData(P8(b));hXa(a)},Q8=function(a,b){a.u&&(a.u.removeUpdateListener(a.X),a.u.removeMediaListener(a.K),a.Iw(null));
a.u=b;a.u&&(U7("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.X),a.u.addMediaListener(a.K),a.u.media.length&&a.Iw(a.u.media[0]))},jXa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=S8(a);b.contentId!=d.videoId&&U7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;M8(d,a.i.getEstimatedTime());V8(a,d)}else U7("CP","No cast media video. Ignoring state update.")},Y8=function(a,b,c){return(0,g.E)(function(d){this.me("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.me("Retrying "+b+" using MDx browser channel."),X8(this,b,c))},a)},Z8=function(a,b,c,d){d=void 0===d?!1:d;
g.R.call(this);this.D=NaN;this.xa=!1;this.S=this.K=this.Z=this.oa=NaN;this.X=[];this.C=this.I=this.B=this.qc=this.i=null;this.Ja=a;this.Ba=d;this.X.push(g.Su(window,"beforeunload",(0,g.E)(this.xS,this)));this.u=[];this.qc=new J8;this.Ka=b.id;this.Aa=b.idType;this.i=kXa(this,c);this.i.subscribe("handlerOpened",this.xU,this);this.i.subscribe("handlerClosed",this.uU,this);this.i.subscribe("handlerError",this.vU,this);this.i.subscribe("handlerMessage",this.wU,this);this.i.fB(b.token);this.subscribe("remoteQueueChange",
function(){var e=this.qc.videoId;g.sy()&&g.py("yt-remote-session-video-id",e)},this)},lXa=function(a){return g.Rb(a.u,function(b){return"LOUNGE_SCREEN"==b.type})},$8=function(a){U7("conn",a)},kXa=function(a,b){return new N7(R7(a.Ja,"/bc"),b,!1,function(){return a.yI()},"shortLived"==a.Aa)},a9=function(a,b){a.ea("proxyStateChange",b)},mXa=function(a){a.D=g.Jt((0,g.E)(function(){$8("Connecting timeout");
this.ys(1)},a),2E4)},b9=function(a){g.Lt(a.D);
a.D=NaN},c9=function(a){g.Lt(a.oa);
a.oa=NaN},nXa=function(a){d9(a);
a.Z=g.Jt((0,g.E)(function(){e9(this,"getNowPlaying")},a),2E4)},d9=function(a){g.Lt(a.Z);
a.Z=NaN},pXa=function(a,b){var c=null;
if(b){var d=lXa(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ha("yt.mdx.remote.remoteClient_",c,void 0);b&&(b9(a),c9(a));c=P7(a.i)&&isNaN(a.D);b==c?b&&(a9(a,1),e9(a,"getSubtitlesTrack")):b?(a.IK()&&a.qc.reset(),a9(a,1),e9(a,"getNowPlaying"),oXa(a)):a.ys(1)},qXa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.qc.videoId&&(g.Qe(b.params)?a.qc.trackData=null:a.qc.trackData=b.params,a.ea("remotePlayerChange"))},rXa=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.qc.listId=b.params.listId||a.qc.listId;O8(a.qc,d,e);a.ea("remoteQueueChange",c)},tXa=function(a,b){b.params=b.params||{};
rXa(a,b,"NOW_PLAYING_MAY_CHANGE");sXa(a,b);a.ea("autoplayDismissed")},sXa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
M8(a.qc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.qc.playerState&&(c=-1E3);a.qc.playerState=c;c=Number(b.params.loadedTime);a.qc.S=isNaN(c)?0:c;a.qc.Pj(Number(b.params.duration));c=a.qc;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.qc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.qc.playerState?nXa(a):d9(a);a.ea("remotePlayerChange")},uXa=function(a,b){if(-1E3!=a.qc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.qc.playerState=c;b=parseInt(b.params.currentTime,10);M8(a.qc,isNaN(b)?0:b);a.ea("remotePlayerChange")}},vXa=function(a,b){var c="true"==b.params.muted;
a.qc.volume=parseInt(b.params.volume,10);a.qc.muted=c;a.ea("remotePlayerChange")},wXa=function(a,b){a.I=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},xXa=function(a,b){var c="true"==b.params.hasNext;
a.qc.Nk="true"==b.params.hasPrevious;a.qc.hasNext=c;a.ea("previousNextChange")},oXa=function(a){g.Lt(a.S);
a.S=g.Jt((0,g.E)(a.ys,a,1),864E5)},e9=function(a,b,c){c?$8("Sending: action="+b+", params="+g.xi(c)):$8("Sending: action="+b);
a.i.sendMessage(b,c)},f9=function(a){Y7.call(this,"ScreenServiceProxy");
this.Ue=a;this.i=[];this.i.push(this.Ue.$_s("screenChange",(0,g.E)(this.ZQ,this)));this.i.push(this.Ue.$_s("onlineScreenChange",(0,g.E)(this.pV,this)))},BXa=function(a,b){xVa();
if(!g7||!g7.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;pVa();e7();g9||(g9=new Q7(b?b.loungeApiHost:void 0),yVa()&&(g9.i="/api/loungedev"));h9||(h9=g.Ia("yt.mdx.remote.deferredProxies_")||[],g.Ha("yt.mdx.remote.deferredProxies_",h9,void 0));yXa();var c=i9();if(!c){var d=new h8(g9,b?b.disableAutomaticScreenCache||!1:!1);g.Ha("yt.mdx.remote.screenService_",d,void 0);c=i9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ha("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);bXa(a,d,function(f){f?j9()&&I8(j9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){T6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ia("yt.mdx.remote.initialized_")&&(g.Ha("yt.mdx.remote.initialized_",!0,void 0),k9("Initializing: "+
g.xi(b)),l9.push(g.ov("yt-remote-cast2-api-ready",function(){T6("yt-remote-api-ready")})),l9.push(g.ov("yt-remote-cast2-availability-change",function(){T6("yt-remote-receiver-availability-change")})),l9.push(g.ov("yt-remote-cast2-receiver-selected",function(){m9(null);
T6("yt-remote-auto-connect","cast-selector-receiver")})),l9.push(g.ov("yt-remote-cast2-receiver-resumed",function(){T6("yt-remote-receiver-resumed","cast-selector-receiver")})),l9.push(g.ov("yt-remote-cast2-session-change",zXa)),l9.push(g.ov("yt-remote-connection-change",function(f){f?I8(j9(),"YouTube TV"):n9()||(I8(null,null),eXa())})),l9.push(g.ov("yt-remote-cast2-session-failed",function(){T6("yt-remote-connection-failed")})),a=o9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.P("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),k9(" -- with channel params: "+g.xi(a)),a?(g.py("yt-remote-session-app",a.app),g.py("yt-remote-session-name",a.name)):(g.ry("yt-remote-session-app"),g.ry("yt-remote-session-name")),g.Ha("yt.mdx.remote.channelParams_",a,void 0),c.start(),j9()||AXa())}},CXa=function(){var a=i9().Ue.$_gos();
var b=p9();b&&q9()&&($6(a,b)||a.push(b));return oVa(a)},r9=function(){var a=DXa();
!a&&F8()&&dXa()&&(a={key:"cast-selector-receiver",name:dXa()});return a},DXa=function(){var a=CXa(),b=p9();
b||(b=n9());return g.Rb(a,function(c){return b&&W6(b,c.key)?!0:!1})},p9=function(){var a=j9();
if(!a)return null;var b=i9().Kh();return a7(b,a)},zXa=function(a){k9("remote.onCastSessionChange_: "+X6(a));
if(a){var b=p9();if(b&&b.id==a.id){if(I8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))s9&&(s9.token=a),(b=q9())&&b.fB(a)}else b&&t9(),u9(a,1)}else q9()&&t9()},t9=function(){G8()?D8().stopSession():B8("stopSession called before API ready.");
var a=q9();a&&(a.disconnect(1),v9(null))},w9=function(){var a=q9();
return!!a&&3!=a.getProxyState()},k9=function(a){U7("remote",a)},i9=function(){if(!x9){var a=g.Ia("yt.mdx.remote.screenService_");
x9=a?new f9(a):null}return x9},j9=function(){return g.Ia("yt.mdx.remote.currentScreenId_")},EXa=function(a){g.Ha("yt.mdx.remote.currentScreenId_",a,void 0)},FXa=function(){return g.Ia("yt.mdx.remote.connectData_")},m9=function(a){g.Ha("yt.mdx.remote.connectData_",a,void 0)},q9=function(){return g.Ia("yt.mdx.remote.connection_")},v9=function(a){var b=q9();
m9(null);a||EXa("");g.Ha("yt.mdx.remote.connection_",a,void 0);h9&&(g.qc(h9,function(c){c(a)}),h9.length=0);
b&&!a?T6("yt-remote-connection-change",!1):!b&&a&&T6("yt-remote-connection-change",!0)},n9=function(){var a=g.sy();
if(!a)return null;var b=i9();if(!b)return null;b=b.Kh();return a7(b,a)},u9=function(a,b){j9();
p9()&&p9();if(y9)s9=a;else{EXa(a.id);var c=g.Ia("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new Z8(g9,a,o9(),c);a.connect(b,FXa());a.subscribe("beforeDisconnect",function(d){T6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){q9()&&(q9(),v9(null))});
a.subscribe("browserChannelAuthError",function(){var d=p9();d&&"shortLived"==d.idType&&(G8()?D8().handleBrowserChannelAuthError():B8("refreshLoungeToken called before API ready."))});
v9(a)}},AXa=function(){var a=n9();
a?(k9("Resume connection to: "+X6(a)),u9(a,0)):(f7(),eXa(),k9("Skipping connecting because no session screen found."))},yXa=function(){var a=o9();
if(g.Qe(a)){a=d7();var b=g.qy("yt-remote-session-name")||"",c=g.qy("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ha("yt.mdx.remote.channelParams_",a,void 0)}},o9=function(){return g.Ia("yt.mdx.remote.channelParams_")||{}},z9=function(a,b,c){g.H.call(this);
var d=this;this.u=a;this.J=b;this.Tb=c;this.events=new g.JC(this);this.Z=this.events.T(this.J,"onVolumeChange",function(e){GXa(d,e)});
this.D=!1;this.I=new g.tJ(64);this.i=new g.L(this.gO,500,this);this.B=new g.L(this.hO,1E3,this);this.S=new l7(this.jY,0,this);this.C={};this.X=new g.L(this.PO,1E3,this);this.K=new m7(this.seekTo,1E3,this);this.oa=g.Ja;g.I(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.aV);this.events.T(b,"captionschanged",this.qU);this.events.T(b,"captionssettingschanged",this.nO);this.events.T(b,"videoplayerreset",this.yA);this.events.T(b,"mdxautoplaycancel",function(){d.Tb.fK()});
a=this.Tb;a.isDisposed();a.subscribe("proxyStateChange",this.YM,this);a.subscribe("remotePlayerChange",this.Nw,this);a.subscribe("remoteQueueChange",this.yA,this);a.subscribe("previousNextChange",this.VM,this);a.subscribe("nowAutoplaying",this.PM,this);a.subscribe("autoplayDismissed",this.rM,this);g.I(this,this.i);g.I(this,this.B);g.I(this,this.S);g.I(this,this.X);g.I(this,this.K);this.nO();this.yA();this.Nw()},GXa=function(a,b){if(A9(a)){a.Tb.unsubscribe("remotePlayerChange",a.Nw,a);
var c=Math.round(b.volume);b=!!b.muted;var d=S8(a.Tb);if(c!==d.volume||b!==d.muted)a.Tb.setVolume(c,b),a.X.start();a.Tb.subscribe("remotePlayerChange",a.Nw,a)}},HXa=function(a){a.Xb(0);
a.i.stop();a.Ub(new g.tJ(64))},B9=function(a,b){if(A9(a)&&!a.D){var c=null;
b&&(c={style:a.J.getSubtitlesUserSettings()},g.Xe(c,b));a.Tb.xI(a.J.getVideoData(1).videoId,c);a.C=S8(a.Tb).trackData}},C9=function(a,b){var c=a.J.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.J.getVideoData(1);a.Tb.playVideo(c.videoId,b,d,e,c.playerParams,c.Za,eVa(c));a.Ub(new g.tJ(1))},IXa=function(a,b){if(b){var c=a.J.getOption("captions","tracklist",{gL:1});
c&&c.length?(a.J.setOption("captions","track",b),a.D=!1):(a.J.loadModule("captions"),a.D=!0)}else a.J.setOption("captions","track",{})},A9=function(a){return S8(a.Tb).videoId===a.J.getVideoData(1).videoId},D9=function(){g.W.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-popup-title",va:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",va:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",U:[{G:"button",Ha:["ytp-button","ytp-mdx-privacy-popup-cancel"],va:"Cancel"},{G:"button",Ha:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],va:"Confirm"}]}]}]});this.i=new g.ZK(this,250);this.cancelButton=this.Fa("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Fa("ytp-mdx-privacy-popup-confirm");g.I(this,this.i);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},E9=function(a){g.W.call(this,{G:"div",
L:"ytp-remote",U:[{G:"div",L:"ytp-remote-display-status",U:[{G:"div",L:"ytp-remote-display-status-icon",U:[g.Mva()]},{G:"div",L:"ytp-remote-display-status-text",va:"{{statustext}}"}]}]});this.api=a;this.i=new g.ZK(this,250);g.I(this,this.i);this.T(a,"presentingplayerstatechange",this.onStateChange);JXa(this,a.zb())},JXa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.T(b,128)?g.AH("Error on $RECEIVER_NAME",c):b.Hc()||g.T(b,4)?g.AH("Playing on $RECEIVER_NAME",c):g.AH("Connected to $RECEIVER_NAME",c);a.Pa("statustext",b);a.i.show()}else a.i.hide()},F9=function(a,b){g.xP.call(this,"Play on",0,a,b);
this.J=a;this.Lo={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},G9=function(a){g.FM.call(this,a);
this.Vk={key:Z6(),name:"This computer"};this.ji=null;this.subscriptions=[];this.YF=this.Tb=null;this.Lo=[this.Vk];this.zn=this.Vk;this.Cd=new g.tJ(64);this.FL=0;this.yf=-1;this.Vw=!1;this.Tw=this.Ct=null;if(!g.tE(this.player.V())&&!g.uE(this.player.V())){a=this.player;var b=g.iM(a);b&&(b=b.Pn())&&(b=new F9(a,b),g.I(this,b));b=new E9(a);g.I(this,b);g.sM(a,b.element,4);this.Ct=new D9;g.I(this,this.Ct);g.sM(a,this.Ct.element,4);this.Vw=!!n9()}},H9=function(a){a.Tw&&(a.player.removeEventListener("presentingplayerstatechange",
a.Tw),a.Tw=null)},KXa=function(a,b,c){a.Cd=c;
a.player.ea("presentingplayerstatechange",new g.jH(c,b))},I9=function(a,b){if(b.key!==a.zn.key)if(b.key===a.Vk.key)t9();
else{var c;(c=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.O("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.Vw||!a.Ct);(c?0:g.JE(a.player.V())||g.ME(a.player.V()))&&LXa(a);a.zn=b;if(!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.uE(a.player.V())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.zM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Za,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=eVa(c))&&(a.locationInfo=c)}k9("Connecting to: "+g.xi(b));"cast-selector-receiver"==b.key?(m9(a||null),b=a||null,G8()?D8().setLaunchParams(b):B8("setLaunchParams called before ready.")):!a&&w9()&&
j9()==b.key?T6("yt-remote-connection-change",!0):(t9(),m9(a||null),a=i9().Kh(),(b=a7(a,b.key))&&u9(b,1))}}},LXa=function(a){a.player.zb().Hc()?a.player.pauseVideo():(a.Tw=function(b){!a.Vw&&g.lH(b,8)&&(a.player.pauseVideo(),H9(a))},a.player.addEventListener("presentingplayerstatechange",a.Tw));
a.Ct&&a.Ct.Bd();q9()||(y9=!0)},NVa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},y7={"'":"\\'"},kVa={EZ:"atp",iaa:"ska",R9:"que",G7:"mus",haa:"sus",G3:"dsp",o$:"seq",j7:"mic",z2:"dpa",SZ:"cds",E7:"mlm",u2:"dsdtr"};U6.prototype.equals=function(a){return a?this.id==a.id:!1};
var g7,c7="",EVa=zVa("loadCastFramework")||zVa("loadCastApplicationFramework"),GVa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ta(l7,g.H);g.k=l7.prototype;g.k.NQ=function(a){this.C=arguments;this.i=!1;this.Mb?this.B=g.Ra()+this.Yf:this.Mb=g.Wh(this.D,this.Yf)};
g.k.stop=function(){this.Mb&&(g.C.clearTimeout(this.Mb),this.Mb=null);this.B=null;this.i=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.i&&(this.i=!1,this.I.apply(null,this.C)))};
g.k.ya=function(){this.stop();l7.le.ya.call(this)};
g.k.OQ=function(){this.Mb&&(g.C.clearTimeout(this.Mb),this.Mb=null);this.B?(this.Mb=g.Wh(this.D,this.B-g.Ra()),this.B=null):this.u?this.i=!0:(this.i=!1,this.I.apply(null,this.C))};g.w(m7,g.H);g.k=m7.prototype;g.k.sI=function(a){this.B=arguments;this.Mb||this.u?this.i=!0:n7(this)};
g.k.stop=function(){this.Mb&&(g.C.clearTimeout(this.Mb),this.Mb=null,this.i=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.i||this.Mb||(this.i=!1,n7(this))};
g.k.ya=function(){g.H.prototype.ya.call(this);this.stop()};o7.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
o7.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};var q7=new g.pf;g.w(IVa,g.se);g.k=s7.prototype;g.k.hp=null;g.k.Om=!1;g.k.ou=null;g.k.rH=null;g.k.Ht=null;g.k.Ut=null;g.k.jn=null;g.k.Oo=null;g.k.Dq=null;g.k.Of=null;g.k.FB=0;g.k.Tj=null;g.k.DB=null;g.k.Xm=null;g.k.Lu=-1;g.k.VN=!0;g.k.zp=!1;g.k.sC=0;g.k.TA=null;var LVa={},v7={};g.k=s7.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.PQ=function(a){a=a.target;var b=this.TA;b&&3==g.ej(a)?b.sI():this.ZO(a)};
g.k.ZO=function(a){try{if(a==this.Of)a:{var b=g.ej(this.Of),c=this.Of.u,d=this.Of.getStatus();if(g.Hc&&!g.yc(10)||g.Wg&&!g.xc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.jj(this.Of))break a;this.zp||4!=b||7==c||(8==c||0>=d?this.i.Gj(3):this.i.Gj(2));z7(this);var e=this.Of.getStatus();this.Lu=e;var f=g.jj(this.Of);if(this.Om=200==e){4==b&&w7(this);if(this.D){for(a=!0;!this.zp&&this.FB<f.length;){var h=MVa(this,f);if(h==v7){4==b&&(this.Xm=4,r7(15),a=!1);break}else if(h==LVa){this.Xm=4;r7(16);a=!1;
break}else A7(this,h)}4==b&&0==f.length&&(this.Xm=1,r7(17),a=!1);this.Om=this.Om&&a;a||(w7(this),x7(this))}else A7(this,f);this.Om&&!this.zp&&(4==b?this.i.ly(this):(this.Om=!1,u7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Xm=3,r7(13)):(this.Xm=0,r7(14)),w7(this),x7(this)}}catch(l){this.Of&&g.jj(this.Of)}finally{}};
g.k.JW=function(a){p7((0,g.E)(this.IW,this,a),0)};
g.k.IW=function(a){this.zp||(z7(this),A7(this,a),u7(this))};
g.k.gN=function(a){p7((0,g.E)(this.HW,this,a),0)};
g.k.HW=function(a){this.zp||(w7(this),this.Om=a,this.i.ly(this),this.i.Gj(4))};
g.k.cancel=function(){this.zp=!0;w7(this)};
g.k.QW=function(){this.ou=null;var a=Date.now();0<=a-this.rH?(2!=this.Ut&&this.i.Gj(3),w7(this),this.Xm=2,r7(18),x7(this)):PVa(this,this.rH-a)};
g.k.getLastError=function(){return this.Xm};g.k=SVa.prototype;g.k.tC=null;g.k.yh=null;g.k.UA=!1;g.k.iO=null;g.k.Yy=null;g.k.UE=null;g.k.uC=null;g.k.ai=null;g.k.zl=-1;g.k.Mu=null;g.k.Wu=null;g.k.connect=function(a){this.uC=a;a=C7(this.i,null,this.uC);r7(3);this.iO=Date.now();var b=this.i.S;null!=b?(this.Mu=b[0],(this.Wu=b[1])?(this.ai=1,TVa(this)):(this.ai=2,E7(this))):(Q6(a,"MODE","init"),this.yh=new s7(this,void 0,void 0,void 0),this.yh.hp=this.tC,t7(this.yh,a,!1,null,!0),this.ai=0)};
g.k.DR=function(a){if(a)this.ai=2,E7(this);else{r7(4);var b=this.i;b.gk=b.vn.zl;L7(b,9)}a&&this.Gj(2)};
g.k.BD=function(a){return this.i.BD(a)};
g.k.abort=function(){this.yh&&(this.yh.cancel(),this.yh=null);this.zl=-1};
g.k.uf=function(){return!1};
g.k.ZM=function(a,b){this.zl=a.Lu;if(0==this.ai)if(b){try{var c=this.u.parse(b)}catch(d){a=this.i;a.gk=this.zl;L7(a,2);return}this.Mu=c[0];this.Wu=c[1]}else a=this.i,a.gk=this.zl,L7(a,2);else if(2==this.ai)if(this.UA)r7(7),this.UE=Date.now();else if("11111"==b){if(r7(6),this.UA=!0,this.Yy=Date.now(),a=this.Yy-this.iO,!g.Hc||g.yc(10)||500>a)this.zl=200,this.yh.cancel(),r7(12),D7(this.i,this,!0)}else r7(8),this.Yy=this.UE=Date.now(),this.UA=!1};
g.k.ly=function(){this.zl=this.yh.Lu;if(this.yh.Om)0==this.ai?this.Wu?(this.ai=1,TVa(this)):(this.ai=2,E7(this)):2==this.ai&&((!g.Hc||g.yc(10)?!this.UA:200>this.UE-this.Yy)?(r7(11),D7(this.i,this,!1)):(r7(12),D7(this.i,this,!0)));else{0==this.ai?r7(9):2==this.ai&&r7(10);var a=this.i;this.yh.getLastError();a.gk=this.zl;L7(a,2)}};
g.k.xx=function(){return this.i.xx()};
g.k.isActive=function(){return this.i.isActive()};
g.k.Gj=function(a){this.i.Gj(a)};g.k=F7.prototype;g.k.fk=null;g.k.Cv=null;g.k.Wg=null;g.k.Le=null;g.k.vC=null;g.k.Zy=null;g.k.tJ=null;g.k.oy=null;g.k.zw=0;g.k.HT=0;g.k.Pf=null;g.k.Hn=null;g.k.Ml=null;g.k.Ip=null;g.k.vn=null;g.k.BB=null;g.k.Xs=-1;g.k.EL=-1;g.k.gk=-1;g.k.Cs=0;g.k.Xr=0;g.k.Ap=8;g.Ta(VVa,g.se);g.Ta(WVa,g.se);g.k=F7.prototype;g.k.connect=function(a,b,c,d,e){r7(0);this.vC=b;this.Cv=c||{};d&&void 0!==e&&(this.Cv.OSID=d,this.Cv.OAID=e);this.I?(p7((0,g.E)(this.PJ,this,a),100),$Va(this)):this.PJ(a)};
g.k.PJ=function(a){this.vn=new SVa(this);this.vn.tC=this.fk;this.vn.u=this.D;this.vn.connect(a)};
g.k.uf=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.eN=function(a){this.Hn=null;dWa(this,a)};
g.k.dN=function(){this.Ml=null;this.Le=new s7(this,this.B,"rpc",this.K);this.Le.hp=this.fk;this.Le.sC=0;var a=this.tJ.clone();g.fl(a,"RID","rpc");g.fl(a,"SID",this.B);g.fl(a,"CI",this.BB?"0":"1");g.fl(a,"AID",this.Xs);G7(this,a);if(!g.Hc||g.yc(10))g.fl(a,"TYPE","xmlhttp"),t7(this.Le,a,!0,this.oy,!1);else{g.fl(a,"TYPE","html");var b=this.Le,c=!!this.oy;b.Ut=3;b.jn=P6(a.clone());OVa(b,c)}};
g.k.ZM=function(a,b){if(0!=this.i&&(this.Le==a||this.Wg==a))if(this.gk=a.Lu,this.Wg==a&&3==this.i)if(7<this.Ap){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Ml){if(this.Le)if(this.Le.Ht+3E3<this.Wg.Ht)I7(this),this.Le.cancel(),this.Le=null;else break a;K7(this);r7(19)}}else this.EL=a[1],0<this.EL-this.Xs&&37500>a[2]&&this.BB&&0==this.Xr&&!this.Ip&&(this.Ip=p7((0,g.E)(this.nU,this),6E3));else L7(this,11)}else null!=b&&L7(this,11);else if(this.Le==
a&&I7(this),!g.gb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.Xs=c[0],c=c[1],2==this.i?"c"==c[0]?(this.B=c[1],this.oy=c[2],c=c[3],null!=c?this.Ap=c:this.Ap=6,this.i=3,this.Pf&&this.Pf.LJ(),this.tJ=C7(this,this.xx()?this.oy:null,this.vC),eWa(this)):"stop"==c[0]&&L7(this,7):3==this.i&&("stop"==c[0]?L7(this,7):"noop"!=c[0]&&this.Pf&&this.Pf.KJ(c),this.Xr=0)};
g.k.nU=function(){null!=this.Ip&&(this.Ip=null,this.Le.cancel(),this.Le=null,K7(this),r7(20))};
g.k.ly=function(a){if(this.Le==a){I7(this);this.Le=null;var b=2}else if(this.Wg==a)this.Wg=null,b=1;else return;this.gk=a.Lu;if(0!=this.i)if(a.Om)if(1==b){b=Date.now()-a.Ht;var c=q7;c.dispatchEvent(new VVa(c,a.Dq?a.Dq.length:0,b,this.Cs));H7(this);this.C.length=0}else eWa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.gk)){if(d=1==b)this.Wg||this.Hn||1==this.i||2<=this.Cs?d=!1:(this.Hn=p7((0,g.E)(this.eN,this,a),fWa(this,this.Cs)),this.Cs++,d=!0);d=!(d||2==b&&K7(this))}if(d)switch(c){case 1:L7(this,
5);break;case 4:L7(this,10);break;case 3:L7(this,6);break;case 7:L7(this,12);break;default:L7(this,2)}}};
g.k.dS=function(a){if(!g.Ub(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.RX=function(a){a?r7(2):(r7(1),gWa(this,8))};
g.k.BD=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Zi;a.S=!1;return a};
g.k.isActive=function(){return!!this.Pf&&this.Pf.isActive(this)};
g.k.Gj=function(a){var b=q7;b.dispatchEvent(new WVa(b,a))};
g.k.xx=function(){return!(!g.Hc||g.yc(10))};
g.k=hWa.prototype;g.k.LJ=function(){};
g.k.KJ=function(){};
g.k.JJ=function(){};
g.k.oD=function(){};
g.k.wK=function(){return{}};
g.k.isActive=function(){return!0};g.k=iWa.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.u.length};
g.k.clear=function(){this.i=[];this.u=[]};
g.k.contains=function(a){return g.Ub(this.i,a)||g.Ub(this.u,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.ePa)(b,a);0<=c?(g.Xb(b,c),b=!0):b=!1;return b||g.Yb(this.u,a)};
g.k.Bi=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Ta(M7,g.H);g.k=M7.prototype;g.k.yW=function(){this.Yf=Math.min(3E5,2*this.Yf);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.Yf+15E3*Math.random();g.Cr(this.i,a);this.u=Date.now()+a};
g.k.stop=function(){this.i.stop();this.u=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Yf=5E3};g.Ta(N7,hWa);g.k=N7.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.gg=function(a){return this.B.gg(a)};
g.k.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.k.dispose=function(){this.Z||(this.Z=!0,g.pe(this.B),lWa(this),g.pe(this.u),this.u=null,this.oa=function(){return""})};
g.k.isDisposed=function(){return this.Z};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.X="";this.u.stop();this.D=a||null;this.C=b||0;a=this.xa+"/test";b=this.xa+"/bind";var d=new F7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Aa),e=this.i;e&&(e.Pf=null);d.Pf=this;this.i=d;O7(this);if(this.i){d=g.O("ID_TOKEN");var f=this.i.fk||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.fk=f}e?(3!=e.getState()&&0==bWa(e)||e.getState(),this.i.connect(a,b,this.I,e.B,e.Xs)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Xe(a,b);this.u.isActive()||2==(this.i?this.i.getState():0)?this.K.push(a):P7(this)&&(O7(this),aWa(this.i,a))};
g.k.LJ=function(){this.u.reset();this.D=null;this.C=0;if(this.K.length){var a=this.K;this.K=[];for(var b=0,c=a.length;b<c;++b)aWa(this.i,a[b])}this.ea("handlerOpened")};
g.k.JJ=function(a){var b=2==a&&401==this.i.gk;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.k.oD=function(a){if(!this.u.isActive())this.ea("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.K.push(d)}};
g.k.wK=function(){var a={v:2};this.X&&(a.gsessionid=this.X);0!=this.C&&(a.ui=""+this.C);0!=this.S&&(a.ui=""+this.S);this.D&&g.Xe(a,this.D);return a};
g.k.KJ=function(a){"S"==a[0]?this.X=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),ZVa(this.i)):this.ea("handlerMessage",new jWa(a[0],a[1]))};
g.k.fB=function(a){(this.I.loungeIdToken=a)||this.u.stop();if(this.Ba&&this.i){var b=this.i.fk||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.fk=b}};
g.k.uX=function(){this.u.isActive();0==bWa(this.i)&&this.connect(this.D,this.C)};Q7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Q7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
Q7.prototype.D=function(a){a(Error("request timed out"))};var sWa=Date.now(),T7=null,W7=Array(50),V7=-1,X7=!1;g.Ta(Y7,g.R);Y7.prototype.Kh=function(){return this.screens};
Y7.prototype.contains=function(a){return!!$6(this.screens,a)};
Y7.prototype.get=function(a){return a?a7(this.screens,a):null};
Y7.prototype.info=function(a){U7(this.I,a)};g.w(Z7,g.R);g.k=Z7.prototype;g.k.start=function(){!this.i&&isNaN(this.Mb)&&this.qN()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Mb)||(g.Lt(this.Mb),this.Mb=NaN)};
g.k.ya=function(){this.stop();g.R.prototype.ya.call(this)};
g.k.qN=function(){this.Mb=NaN;this.i=g.Pt(R7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.E)(this.RQ,this),onError:(0,g.E)(this.QQ,this),onTimeout:(0,g.E)(this.SQ,this)})};
g.k.RQ=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new V6(a),b)};
g.k.QQ=function(a){this.i=null;a.status&&404==a.status?this.u>=MXa.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=MXa[this.u],this.Mb=g.Jt((0,g.E)(this.qN,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.k.SQ=function(){this.i=null;this.ea("pairingFailed",Error("Server not responding"))};
var MXa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ta(a8,Y7);g.k=a8.prototype;g.k.start=function(){$7(this)&&this.ea("screenChange");!g.qy("yt-remote-lounge-token-expiration")&&wWa(this);g.Lt(this.i);this.i=g.Jt((0,g.E)(this.start,this),1E4)};
g.k.add=function(a,b){$7(this);tWa(this,a);b8(this,!1);this.ea("screenChange");b(a);a.token||wWa(this)};
g.k.remove=function(a,b){var c=$7(this);vWa(this,a)&&(b8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.k.zB=function(a,b,c,d){var e=$7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,b8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.k.ya=function(){g.Lt(this.i);a8.le.ya.call(this)};
g.k.CS=function(a){$7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}b8(this,!b);b&&U7(this.I,"Missed "+b+" lounge tokens.")};
g.k.BS=function(a){U7(this.I,"Requesting lounge tokens failed: "+a)};g.w(d8,g.R);g.k=d8.prototype;g.k.start=function(){var a=parseInt(g.qy("yt-remote-fast-check-period")||"0",10);(this.C=g.Ra()-144E5<a?0:a)?g8(this):(this.C=g.Ra()+3E5,g.py("yt-remote-fast-check-period",this.C),this.kG())};
g.k.isEmpty=function(){return g.Qe(this.i)};
g.k.update=function(){c8("Updating availability on schedule.");var a=this.I(),b=g.Ce(this.i,function(c,d){return c&&!!a7(a,d)},this);
f8(this,b)};
g.k.ya=function(){g.Lt(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.R.prototype.ya.call(this)};
g.k.kG=function(){g.Lt(this.B);this.B=NaN;this.u&&this.u.abort();var a=yWa(this);if(R6(a)){var b=R7(this.D,"/pairing/get_screen_availability");this.u=S7(this.D,b,{lounge_token:g.Le(a).join(",")},(0,g.E)(this.eW,this,a),(0,g.E)(this.dW,this))}else f8(this,{}),g8(this)};
g.k.eW=function(a,b){this.u=null;var c=g.Le(yWa(this));if(g.oc(c,g.Le(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;f8(this,c);g8(this)}else this.me("Changing Screen set during request."),this.kG()};
g.k.dW=function(a){this.me("Screen availability failed: "+a);this.u=null;g8(this)};
g.k.me=function(a){U7("OnlineScreenService",a)};g.Ta(h8,Y7);g.k=h8.prototype;g.k.start=function(){this.u.start();this.i.start();this.screens.length&&(this.ea("screenChange"),this.i.isEmpty()||this.ea("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.i.update()};
g.k.zB=function(a,b,c,d){this.u.contains(a)?this.u.zB(a,b,c,d):(a="Updating name of unknown screen: "+a.name,U7(this.I,a),d(Error(a)))};
g.k.Kh=function(a){return a?this.screens:g.$b(this.screens,g.Ap(this.B,function(b){return!this.contains(b)},this))};
g.k.tI=function(){return g.Ap(this.Kh(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.uI=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new Z7(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.pe(l);e(i8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.pe(l);f(m)});
l.start();return(0,g.E)(l.stop,l)};
g.k.TQ=function(a,b,c,d){g.Pt(R7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.E)(function(e,f){e=new V6(f.screen||{});if(!e.name||CWa(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);CWa(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(i8(this,e))},this),
onError:(0,g.E)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.E)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ya=function(){g.pe(this.u);g.pe(this.i);h8.le.ya.call(this)};
g.k.MS=function(){EWa(this);this.ea("screenChange");this.i.update()};
h8.prototype.dispose=h8.prototype.dispose;g.Ta(k8,g.R);g.k=k8.prototype;g.k.getScreen=function(){return this.C};
g.k.Bg=function(a){this.isDisposed()||(a&&(m8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.k.info=function(a){U7(this.Ba,a)};
g.k.vI=function(){return null};
g.k.yG=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.E)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.E)(function(){m8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ya=function(){this.yG("");k8.le.ya.call(this)};g.w(n8,k8);g.k=n8.prototype;g.k.xG=function(a){if(this.u){if(this.u==a)return;m8(this,"Overriding cast session with new session object");NWa(this);this.xa=!1;this.X="unknown";this.u.removeUpdateListener(this.oa);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.oa);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);JWa(this,"getMdxSessionStatus")};
g.k.Ys=function(a){this.info("launchWithParams no-op for Cast: "+g.xi(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.E)(function(){this.Bg()},this),(0,g.E)(function(){this.Bg(Error("Failed to stop receiver app."))},this)):this.Bg(Error("Stopping cast device without session."))};
g.k.yG=function(){};
g.k.ya=function(){this.info("disposeInternal");NWa(this);this.u&&(this.u.removeUpdateListener(this.oa),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;k8.prototype.ya.call(this)};
g.k.UW=function(a,b){if(!this.isDisposed())if(b)if(b=S6(b),g.Na(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.xi(b)),a){case "mdxSessionStatus":HWa(this,b);break;case "loungeToken":KWa(this,b);break;default:m8(this,"Unknown youtube message: "+a)}else m8(this,"Unable to parse message.");else m8(this,"No data in message.")};
g.k.JK=function(a,b,c,d){g.Lt(this.S);this.S=0;BWa(this.B,this.i.label,a,this.i.friendlyName,(0,g.E)(function(e){e?b(e):0<=d?(m8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.S=g.Jt((0,g.E)(this.JK,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.vI=function(){return this.u};
g.k.UQ=function(a){this.isDisposed()||a||(m8(this,"Cast session died."),this.Bg())};g.w(q8,k8);g.k=q8.prototype;g.k.xG=function(a){this.u=a;this.u.addUpdateListener(this.Ja)};
g.k.Ys=function(a){this.Ka=a;this.Z()};
g.k.stop=function(){UWa(this);this.u?this.u.stop((0,g.E)(this.Bg,this,null),(0,g.E)(this.Bg,this,"Failed to stop DIAL device.")):this.Bg()};
g.k.ya=function(){UWa(this);this.u&&this.u.removeUpdateListener(this.Ja);this.u=null;k8.prototype.ya.call(this)};
g.k.VQ=function(a){this.isDisposed()||a||(m8(this,"DIAL session died."),this.D(),this.D=g.Ja,this.Bg())};g.w(u8,k8);u8.prototype.stop=function(){this.Bg()};
u8.prototype.xG=function(){};
u8.prototype.Ys=function(){g.Lt(this.u);this.u=NaN;var a=a7(this.B.Kh(),this.i.label);a?l8(this,a):this.Bg(Error("No such screen"))};
u8.prototype.ya=function(){g.Lt(this.u);this.u=NaN;k8.prototype.ya.call(this)};g.w(v8,g.R);g.k=v8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.S,[chrome.cast.Capability.AUDIO_OUT]);this.X||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.E)(this.OV,this);c=new chrome.cast.ApiConfig(c,(0,g.E)(this.aN,this),e,d,a);c.customDialLaunchCallback=(0,g.E)(this.IU,this);
chrome.cast.initialize(c,(0,g.E)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),pWa(),this.u.subscribe("onlineScreenChange",(0,g.E)(this.wI,this)),this.B=XWa(this),chrome.cast.setCustomReceivers(this.B,g.Ja,(0,g.E)(function(f){this.me("Failed to set initial custom receivers: "+g.xi(f))},this)),this.ea("yt-remote-cast2-availability-change",x8(this)),b(!0))},this),(0,g.E)(function(f){this.me("Failed to initialize API: "+g.xi(f));
b(!1)},this))};
g.k.zX=function(a,b){w8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)w8("Unsetting old screen status: "+this.i.i.friendlyName),y8(this,null)}if(a&&b){if(!this.i){c=a7(this.u.Kh(),a);if(!c){w8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){w8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=VWa(this,c);a||(w8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,g.Ja,(0,g.E)(function(d){this.me("Failed to set initial custom receivers: "+g.xi(d))},this)));
w8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);y8(this,new u8(this.u,a),!0)}this.i.yG(b)}else w8("setConnectedScreenStatus: no screen.")};
g.k.AX=function(a){this.isDisposed()?this.me("Setting connection data on disposed cast v2"):this.i?this.i.Ys(a):this.me("Setting connection data without a session")};
g.k.XQ=function(){this.isDisposed()?this.me("Stopping session on disposed cast v2"):this.i?(this.i.stop(),y8(this,null)):w8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.E)(this.aN,this),(0,g.E)(this.hW,this))};
g.k.ya=function(){this.u.unsubscribe("onlineScreenChange",(0,g.E)(this.wI,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=mWa,b=g.Ia("yt.mdx.remote.debug.handlers_");g.Yb(b||[],a);g.pe(this.i);g.R.prototype.ya.call(this)};
g.k.me=function(a){U7("Controller",a)};
g.k.cN=function(a,b){this.i==a&&(b||y8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.k.LV=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),w8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)w8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{w8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.ea("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:y8(this,
new u8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:y8(this,new q8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:y8(this,new n8(this.u,a,this.config_));break;default:this.me("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.me("Stopping receiver w/o session: "+a.friendlyName)}else this.me("onReceiverAction_ called without receiver.")};
g.k.IU=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.me("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.me("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return w8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.me('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);y8(this,new q8(this.u,b,this.C,this.config_))}b=this.i;b.S=a;b.S.appState==chrome.cast.DialAppState.RUNNING?(a=b.S.extraData||{},c=a.screenId||null,r8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=RWa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.S.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.rt(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=SWa(b,c)):a=SWa(b,c)):a=t8(b);return a};
g.k.aN=function(a){var b=this;if(!this.isDisposed()&&!this.I){w8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)w8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),y8(this,new n8(this.u,c,this.config_),!0);else{this.me("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=a7(this.u.Kh(),
d.label);e&&W6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(w8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.pe(this.i),this.i=new n8(this.u,c,this.config_),this.i.subscribe("sessionScreen",(0,g.E)(this.cN,this,this.i)),this.i.subscribe("sessionFailed",function(){return WWa(b,b.i)}),this.i.Ys(null));
this.i.xG(a)}}};
g.k.WQ=function(){return this.i?this.i.vI():null};
g.k.hW=function(a){this.isDisposed()||(this.me("Failed to estabilish a session: "+g.xi(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&y8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.k.OV=function(a){w8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=x8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;x8(this)!=b&&this.ea("yt-remote-cast2-availability-change",x8(this))}};
g.k.wI=function(){this.isDisposed()||(this.B=XWa(this),w8("Updating custom receivers: "+g.xi(this.B)),chrome.cast.setCustomReceivers(this.B,g.Ja,(0,g.E)(function(){this.me("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",x8(this)))};
v8.prototype.setLaunchParams=v8.prototype.AX;v8.prototype.setConnectedScreenStatus=v8.prototype.zX;v8.prototype.stopSession=v8.prototype.XQ;v8.prototype.getCastSession=v8.prototype.WQ;v8.prototype.requestSession=v8.prototype.requestSession;v8.prototype.init=v8.prototype.init;v8.prototype.dispose=v8.prototype.dispose;var E8=[];g.k=J8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";K8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Nk=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.i=a.seekableEnd,this.D=a.duration,this.S=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Hc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Pj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+L8(this):this.D};
g.k.clone=function(){return new J8(P8(this))};g.w(R8,g.R);g.k=R8.prototype;g.k.getState=function(){return this.B};
g.k.play=function(){T8(this)?(this.i?this.i.play(null,g.Ja,Y8(this,"play")):X8(this,"play"),W8(this,1,N8(S8(this))),this.ea("remotePlayerChange")):U8(this,this.play)};
g.k.pause=function(){T8(this)?(this.i?this.i.pause(null,g.Ja,Y8(this,"pause")):X8(this,"pause"),W8(this,2,N8(S8(this))),this.ea("remotePlayerChange")):U8(this,this.pause)};
g.k.seekTo=function(a){if(T8(this)){if(this.i){var b=S8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Hc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ja,Y8(this,"seekTo",{newTime:a}))}else X8(this,"seekTo",{newTime:a});W8(this,3,a);this.ea("remotePlayerChange")}else U8(this,g.Qa(this.seekTo,a))};
g.k.stop=function(){if(T8(this)){this.i?this.i.stop(null,g.Ja,Y8(this,"stopVideo")):X8(this,"stopVideo");var a=S8(this);a.index=-1;a.videoId="";K8(a);V8(this,a);this.ea("remotePlayerChange")}else U8(this,this.stop)};
g.k.setVolume=function(a,b){if(T8(this)){var c=S8(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.E)(function(){U7("CP","set receiver volume: "+d)},this),(0,g.E)(function(){this.me("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.E)(function(){U7("CP","set receiver muted: "+b)},this),(0,g.E)(function(){this.me("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);X8(this,"setVolume",e)}c.muted=b;c.volume=a;V8(this,c)}else U8(this,g.Qa(this.setVolume,a,b))};
g.k.xI=function(a,b){if(T8(this)){var c=S8(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.xi(b.style),g.Xe(a,c.trackData));X8(this,"setSubtitlesTrack",a);V8(this,c)}else U8(this,g.Qa(this.xI,a,b))};
g.k.setAudioTrack=function(a,b){T8(this)?(b=b.getLanguageInfo().getId(),X8(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=S8(this),a.audioTrackId=b,V8(this,a)):U8(this,g.Qa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=S8(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);O8(l,a,c||0);void 0!==b&&(M8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.xi(h));X8(this,"setPlaylist",m);d||V8(this,l)};
g.k.MA=function(a,b){if(T8(this)){if(a&&b){var c=S8(this);O8(c,a,b);V8(this,c)}X8(this,"previous")}else U8(this,g.Qa(this.MA,a,b))};
g.k.nextVideo=function(a,b){if(T8(this)){if(a&&b){var c=S8(this);O8(c,a,b);V8(this,c)}X8(this,"next")}else U8(this,g.Qa(this.nextVideo,a,b))};
g.k.ds=function(){if(T8(this)){X8(this,"clearPlaylist");var a=S8(this);a.reset();V8(this,a);this.ea("remotePlayerChange")}else U8(this,this.ds)};
g.k.fK=function(){T8(this)?X8(this,"dismissAutoplay"):U8(this,this.fK)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.R.prototype.dispose.call(this)};
g.k.ya=function(){iXa(this);this.C=null;this.D.clear();Q8(this,null);g.R.prototype.ya.call(this)};
g.k.zG=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.i.length&&(b.i=b.u,b.i.reverse(),b.u=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.JV=function(a,b){this.ea(a,b)};
g.k.tU=function(a){if(!a)this.Iw(null),Q8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=S8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)U7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,V8(this,b)}};
g.k.Iw=function(a){U7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.S);if(this.i=a)this.i.addUpdateListener(this.S),jXa(this),this.ea("remotePlayerChange")};
g.k.sU=function(a){a?(jXa(this),this.ea("remotePlayerChange")):this.Iw(null)};
g.k.VG=function(){X8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.AU=function(){var a=fXa();a&&Q8(this,a)};
g.k.me=function(a){U7("CP",a)};g.w(Z8,g.R);g.k=Z8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ba&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.qc.listId=c);this.qc.videoId=d;this.qc.index=l||0;this.qc.state=3;M8(this.qc,
n);this.C="UNSUPPORTED";c=this.Ba?"setInitialState":"setPlaylist";$8("Connecting with "+c+" and params: "+g.xi(m));this.i.connect({method:c,params:g.xi(m)},a,sVa())}else $8("Connecting without params"),this.i.connect({},a,sVa());mXa(this)};
g.k.fB=function(a){this.i.fB(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ha("yt.mdx.remote.remoteClient_",null,void 0),this.ea("beforeDispose"),a9(this,3));g.R.prototype.dispose.call(this)};
g.k.ya=function(){b9(this);d9(this);c9(this);g.Lt(this.K);this.K=NaN;g.Lt(this.S);this.S=NaN;this.B=null;g.Tu(this.X);this.X.length=0;this.i.dispose();g.R.prototype.ya.call(this);this.C=this.I=this.u=this.qc=this.i=null};
g.k.xS=function(){this.ys(2)};
g.k.xU=function(){$8("Channel opened");this.xa&&(this.xa=!1,c9(this),this.oa=g.Jt((0,g.E)(function(){$8("Timing out waiting for a screen.");this.ys(1)},this),15E3));
wVa(kWa(this.i),this.Ka)};
g.k.uU=function(){$8("Channel closed");isNaN(this.D)?f7(!0):f7();this.dispose()};
g.k.vU=function(a,b){f7();isNaN(this.Sv())?(b&&"shortLived"==this.Aa&&this.ea("browserChannelAuthError",a),$8("Channel error: "+a+" without reconnection"),this.dispose()):(this.xa=!0,$8("Channel error: "+a+" with reconnection in "+this.Sv()+" ms"),a9(this,2))};
g.k.pL=function(a){if(!this.u||0===this.u.length)return!1;for(var b=g.q(this.u),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.wU=function(a){a.params?$8("Received: action="+a.action+", params="+g.xi(a.params)):$8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=S6(a.params.devices);this.u=g.nn(a,function(c){return new U6(c)});
a=!!g.Rb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
pXa(this,a);a=this.pL("mlm");this.ea("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.Zb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
pXa(this,!1);break;case "remoteConnected":var b=new U6(S6(a.params.device));g.Rb(this.u,function(c){return c.equals(b)})||fVa(this.u,b);
break;case "remoteDisconnected":b=new U6(S6(a.params.device));g.Zb(this.u,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":rXa(this,a,"QUEUE_MODIFIED");break;case "nowPlaying":tXa(this,a);break;case "onStateChange":sXa(this,a);break;case "onAdStateChange":uXa(this,a);break;case "onVolumeChanged":vXa(this,a);break;case "onSubtitlesTrackChanged":qXa(this,a);break;case "nowAutoplaying":wXa(this,a);break;case "autoplayDismissed":this.ea("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.ea("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.ea("autoplayModeChange",this.C);"DISABLED"==this.C&&this.ea("autoplayDismissed");break;case "onHasPreviousNextChanged":xXa(this,a);break;case "requestAssistedSignIn":this.ea("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.ea("loopModeChange",a.params.loopMode);break;default:$8("Unrecognized action: "+a.action)}};
g.k.oX=function(){if(this.B){var a=this.B;this.B=null;this.qc.videoId!=a&&e9(this,"getNowPlaying")}};
g.k.uS=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Sv())?P7(this.i)&&isNaN(this.D)&&(a=1):a=2);return a};
g.k.ys=function(a){$8("Disconnecting with "+a);g.Ha("yt.mdx.remote.remoteClient_",null,void 0);b9(this);this.ea("beforeDisconnect",a);1==a&&f7();lWa(this.i,a);this.dispose()};
g.k.sS=function(){var a=this.qc;this.B&&(a=this.qc.clone(),O8(a,this.B,a.index));return P8(a)};
g.k.BX=function(a){var b=new J8(a);b.videoId&&b.videoId!=this.qc.videoId&&(this.B=b.videoId,g.Lt(this.K),this.K=g.Jt((0,g.E)(this.oX,this),5E3));var c=[];this.qc.listId==b.listId&&this.qc.videoId==b.videoId&&this.qc.index==b.index||c.push("remoteQueueChange");this.qc.playerState==b.playerState&&this.qc.volume==b.volume&&this.qc.muted==b.muted&&N8(this.qc)==N8(b)&&g.xi(this.qc.trackData)==g.xi(b.trackData)||c.push("remotePlayerChange");this.qc.reset(a);g.qc(c,function(d){this.ea(d)},this)};
g.k.IK=function(){var a=this.i.I.id,b=g.Rb(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Sv=function(){var a=this.i;return a.u.isActive()?a.u.u-Date.now():NaN};
g.k.pS=function(){return this.C||"UNSUPPORTED"};
g.k.qS=function(){return this.I||""};
g.k.YQ=function(){if(!isNaN(this.Sv())){var a=this.i.u;g.Dr(a.i);a.start()}};
g.k.yX=function(a,b){e9(this,a,b);oXa(this)};
g.k.yI=function(){var a=g.ou("SID","")||"",b=g.ou("SAPISID","")||"",c=g.ou("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Cc(g.db(a),2);b=g.Cc(g.db(b),2);c=g.Cc(g.db(c),2);return g.Cc(g.db(a+","+b+","+c),2)};
Z8.prototype.subscribe=Z8.prototype.subscribe;Z8.prototype.unsubscribeByKey=Z8.prototype.gg;Z8.prototype.getProxyState=Z8.prototype.uS;Z8.prototype.disconnect=Z8.prototype.ys;Z8.prototype.getPlayerContextData=Z8.prototype.sS;Z8.prototype.setPlayerContextData=Z8.prototype.BX;Z8.prototype.getOtherConnectedRemoteId=Z8.prototype.IK;Z8.prototype.getReconnectTimeout=Z8.prototype.Sv;Z8.prototype.getAutoplayMode=Z8.prototype.pS;Z8.prototype.getAutoplayVideoId=Z8.prototype.qS;Z8.prototype.reconnect=Z8.prototype.YQ;
Z8.prototype.sendMessage=Z8.prototype.yX;Z8.prototype.getXsrfToken=Z8.prototype.yI;Z8.prototype.isCapabilitySupportedOnConnectedDevices=Z8.prototype.pL;g.w(f9,Y7);g.k=f9.prototype;g.k.Kh=function(a){return this.Ue.$_gs(a)};
g.k.contains=function(a){return!!this.Ue.$_c(a)};
g.k.get=function(a){return this.Ue.$_g(a)};
g.k.start=function(){this.Ue.$_st()};
g.k.add=function(a,b,c){this.Ue.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Ue.$_r(a,b,c)};
g.k.zB=function(a,b,c,d){this.Ue.$_un(a,b,c,d)};
g.k.ya=function(){for(var a=0,b=this.i.length;a<b;++a)this.Ue.$_ubk(this.i[a]);this.i.length=0;this.Ue=null;Y7.prototype.ya.call(this)};
g.k.ZQ=function(){this.ea("screenChange")};
g.k.pV=function(){this.ea("onlineScreenChange")};
h8.prototype.$_st=h8.prototype.start;h8.prototype.$_gspc=h8.prototype.TQ;h8.prototype.$_gsppc=h8.prototype.uI;h8.prototype.$_c=h8.prototype.contains;h8.prototype.$_g=h8.prototype.get;h8.prototype.$_a=h8.prototype.add;h8.prototype.$_un=h8.prototype.zB;h8.prototype.$_r=h8.prototype.remove;h8.prototype.$_gs=h8.prototype.Kh;h8.prototype.$_gos=h8.prototype.tI;h8.prototype.$_s=h8.prototype.subscribe;h8.prototype.$_ubk=h8.prototype.gg;var s9=null,y9=!1,g9=null,h9=null,x9=null,l9=[];g.w(z9,g.H);g.k=z9.prototype;g.k.ya=function(){g.H.prototype.ya.call(this);this.i.stop();this.B.stop();this.S.stop();this.oa();var a=this.Tb;a.unsubscribe("proxyStateChange",this.YM,this);a.unsubscribe("remotePlayerChange",this.Nw,this);a.unsubscribe("remoteQueueChange",this.yA,this);a.unsubscribe("previousNextChange",this.VM,this);a.unsubscribe("nowAutoplaying",this.PM,this);a.unsubscribe("autoplayDismissed",this.rM,this);this.Tb=this.u=null};
g.k.xj=function(a){var b=g.Aa.apply(1,arguments);if(2!=this.Tb.B)if(A9(this)){var c=a;if(!S8(this.Tb).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":S8(this.Tb).Hc()?this.Tb.pause():this.Tb.play();break;case "control_play":this.Tb.play();break;case "control_pause":this.Tb.pause();break;case "control_seek":this.K.sI(b[0],b[1]);break;case "control_subtitles_set_track":B9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.J.getCurrentTime();C9(this,0===b?void 0:b);break;case "control_seek":C9(this,b[0]);break;case "control_subtitles_set_track":B9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.qU=function(a){this.S.NQ(a)};
g.k.jY=function(a){this.xj("control_subtitles_set_track",g.Qe(a)?null:a)};
g.k.nO=function(){var a=this.J.getOption("captions","track");g.Qe(a)||B9(this,a)};
g.k.Xb=function(a){this.u.Xb(a,this.J.getVideoData().lengthSeconds)};
g.k.aV=function(){g.Qe(this.C)||IXa(this,this.C);this.D=!1};
g.k.YM=function(a,b){this.B.stop();2===b&&this.hO()};
g.k.Nw=function(){if(A9(this)){this.i.stop();var a=S8(this.Tb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.yf=1;break;case 1082:case 1083:this.u.yf=0;break;default:this.u.yf=-1}switch(a.playerState){case 1081:case 1:this.Ub(new g.tJ(8));this.gO();break;case 1085:case 3:this.Ub(new g.tJ(9));break;case 1083:case 0:this.Ub(new g.tJ(2));this.K.stop();this.Xb(this.J.getVideoData().lengthSeconds);break;case 1084:this.Ub(new g.tJ(4));break;case 2:this.Ub(new g.tJ(4));this.Xb(N8(a));
break;case -1:this.Ub(new g.tJ(64));break;case -1E3:this.Ub(new g.tJ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=S8(this.Tb).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,IXa(this,a));a=S8(this.Tb);-1===a.volume||Math.round(this.J.getVolume())===a.volume&&this.J.isMuted()===a.muted||this.X.isActive()||this.PO()}else HXa(this)};
g.k.VM=function(){this.J.ea("mdxpreviousnextchange")};
g.k.yA=function(){A9(this)||HXa(this)};
g.k.PM=function(a){isNaN(a)||this.J.ea("mdxnowautoplaying",a)};
g.k.rM=function(){this.J.ea("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){A9(this)&&this.Tb.setAudioTrack(this.J.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===S8(this.Tb).playerState?C9(this,a):b&&this.Tb.seekTo(a)};
g.k.PO=function(){var a=this;if(A9(this)){var b=S8(this.Tb);this.events.wc(this.Z);b.muted?this.J.mute():this.J.unMute();this.J.setVolume(b.volume);this.Z=this.events.T(this.J,"onVolumeChange",function(c){GXa(a,c)})}};
g.k.gO=function(){this.i.stop();if(!this.Tb.isDisposed()){var a=S8(this.Tb);a.Hc()&&this.Ub(new g.tJ(8));this.Xb(N8(a));this.i.start()}};
g.k.hO=function(){this.B.stop();this.i.stop();var a=this.Tb.C.getReconnectTimeout();2==this.Tb.B&&!isNaN(a)&&this.B.start()};
g.k.Ub=function(a){this.B.stop();var b=this.I;if(!g.yJ(b,a)){var c=g.T(a,2);c!==g.T(this.I,2)&&this.J.Mt(c);this.I=a;KXa(this.u,b,a)}};g.w(D9,g.W);D9.prototype.Bd=function(){this.i.show()};
D9.prototype.Eb=function(){this.i.hide()};
D9.prototype.u=function(){T6("mdx-privacy-popup-cancel");this.Eb()};
D9.prototype.B=function(){T6("mdx-privacy-popup-confirm");this.Eb()};g.w(E9,g.W);E9.prototype.onStateChange=function(a){JXa(this,a.state)};g.w(F9,g.xP);F9.prototype.D=function(){var a=this.J.getOption("remote","receivers");a&&1<a.length&&!this.J.getOption("remote","quickCast")?(this.Lo=g.rc(a,this.i,this),g.yP(this,g.nn(a,this.i)),a=this.J.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Zh(a),this.enable(!0)):this.enable(!1)};
F9.prototype.i=function(a){return a.key};
F9.prototype.rj=function(a){return"cast-selector-receiver"===a?"Cast...":this.Lo[a].name};
F9.prototype.Cf=function(a){g.xP.prototype.Cf.call(this,a);this.J.setOption("remote","currentReceiver",this.Lo[a]);this.Ab.Eb()};g.w(G9,g.FM);g.k=G9.prototype;
g.k.create=function(){var a=this.player.V(),b=g.rE(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};BXa(b,a);this.subscriptions.push(g.ov("yt-remote-before-disconnect",this.pU,this));this.subscriptions.push(g.ov("yt-remote-connection-change",this.PV,this));this.subscriptions.push(g.ov("yt-remote-receiver-availability-change",this.XM,
this));this.subscriptions.push(g.ov("yt-remote-auto-connect",this.NV,this));this.subscriptions.push(g.ov("yt-remote-receiver-resumed",this.MV,this));this.subscriptions.push(g.ov("mdx-privacy-popup-confirm",this.dX,this));this.subscriptions.push(g.ov("mdx-privacy-popup-cancel",this.cX,this));this.XM()};
g.k.load=function(){this.player.cancelPlayback();g.FM.prototype.load.call(this);this.ji=new z9(this,this.player,this.Tb);var a=(a=FXa())?a.currentTime:0;var b=w9()?new R8(q9(),void 0):null;0==a&&b&&(a=N8(S8(b)));0!==a&&this.Xb(a);KXa(this,this.Cd,this.Cd);this.player.fl(6)};
g.k.unload=function(){this.player.ea("mdxautoplaycanceled");this.zn=this.Vk;(0,g.qe)(this.ji,this.Tb);this.Tb=this.ji=null;g.FM.prototype.unload.call(this);this.player.fl(5);H9(this)};
g.k.ya=function(){g.pv(this.subscriptions);g.FM.prototype.ya.call(this)};
g.k.Wk=function(a){var b=g.Aa.apply(1,arguments);this.loaded&&this.ji.xj.apply(this.ji,[a].concat(g.v(b)))};
g.k.getAdState=function(){return this.yf};
g.k.Nk=function(){return this.Tb?S8(this.Tb).Nk:!1};
g.k.hasNext=function(){return this.Tb?S8(this.Tb).hasNext:!1};
g.k.Xb=function(a,b){this.FL=a||0;this.player.ea("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.FL};
g.k.getProgressState=function(){var a=S8(this.Tb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().N("web_player_mdx_allow_seeking_change_killswitch")?this.player.vf():!a.isAdPlaying()&&this.player.vf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+L8(a):a.B,isAtLiveHead:1>=(a.u?a.i+L8(a):a.i)-this.getCurrentTime(),loaded:a.S,seekableEnd:a.u?a.i+L8(a):a.i,seekableStart:0<
a.C?a.C+L8(a):a.C}};
g.k.nextVideo=function(){this.Tb&&this.Tb.nextVideo()};
g.k.MA=function(){this.Tb&&this.Tb.MA()};
g.k.pU=function(a){1===a&&(this.YF=this.Tb?S8(this.Tb):null)};
g.k.PV=function(){var a=w9()?new R8(q9(),void 0):null;if(a){var b=this.zn;this.loaded&&this.unload();this.Tb=a;this.YF=null;b.key!==this.Vk.key&&(this.zn=b,this.load())}else(0,g.pe)(this.Tb),this.Tb=null,this.loaded&&(this.unload(),(a=this.YF)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,N8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.XM=function(){var a=[this.Vk],b=a.concat,c=CXa();F8()&&g.qy("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Lo=b.call(a,c);a=r9()||this.Vk;I9(this,a);this.player.Oa("onMdxReceiversChange")};
g.k.NV=function(){var a=r9();I9(this,a)};
g.k.MV=function(){this.zn=r9()};
g.k.dX=function(){this.Vw=!0;H9(this);y9=!1;s9&&u9(s9,1);s9=null};
g.k.cX=function(){this.Vw=!1;H9(this);I9(this,this.Vk);this.zn=this.Vk;y9=!1;s9=null;this.player.playVideo()};
g.k.mf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Lo;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?H8():I9(this,b)),this.loaded?this.zn:this.Vk;case "quickCast":return 2===this.Lo.length&&"cast-selector-receiver"===this.Lo[1].key?(b&&H8(),!0):!1}};
g.k.VG=function(){this.Tb.VG()};
g.k.Ui=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.EM("remote",G9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:02:50 Dec 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:15:10 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 77.317
  exclusion.robots: 0.072
  exclusion.robots.policy: 0.062
  cdx.remote: 0.068
  esindex: 0.011
  LoadShardBlock: 33.863 (3)
  PetaboxLoader3.datanode: 938.729 (5)
  load_resource: 1053.178 (2)
  PetaboxLoader3.resolve: 134.042 (2)
*/