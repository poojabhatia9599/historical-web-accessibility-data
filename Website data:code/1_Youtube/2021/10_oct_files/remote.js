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

(function(g){var window=this;'use strict';var DSa=function(a,b){return g.Ce(a,b)},ESa=function(a,b){b=b instanceof g.Cf?b:g.If(b,/^data:image\//i.test(b));
a.src=g.Df(b)},O6=function(a){g.Yj(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Qa()).toString(36));
return a},P6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.dk(a.u,b,c)},FSa=function(a){if(a instanceof g.ko)return a;
if("function"==typeof a.Mg)return a.Mg(!1);if(g.La(a)){var b=0,c=new g.ko;c.wj=function(){for(;;){if(b>=a.length)throw g.br;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");},GSa=function(a,b,c){if(g.La(a))try{g.nc(a,b,c)}catch(d){if(d!==g.br)throw d;
}else{a=FSa(a);try{for(;;)b.call(c,a.wj(),void 0,a)}catch(d){if(d!==g.br)throw d;}}},HSa=function(a,b){var c=[];
GSa(b,function(d){try{var e=g.Cr.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Br(e)&&c.push(d)},a);
return c},ISa=function(a,b){HSa(a,b).forEach(function(c){g.Cr.prototype.remove.call(this,c)},a)},JSa=function(a){if(a.va){if(a.va.locationOverrideToken)return{locationOverrideToken:a.va.locationOverrideToken};
if(null!=a.va.latitudeE7&&null!=a.va.longitudeE7)return{latitudeE7:a.va.latitudeE7,longitudeE7:a.va.longitudeE7}}return null},KSa=function(a,b){g.Sb(a,b)||a.push(b)},Q6=function(a){var b=0,c;
for(c in a)b++;return b},LSa=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},R6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return LSa(a)},MSa=function(a,b,c,d){var e=new g.Qj(null,void 0);
a&&g.Rj(e,a);b&&g.Sj(e,b);c&&g.Tj(e,c);d&&(e.K=d);return e},S6=function(a,b){g.jv[a]=!0;
var c=g.hv();c&&c.publish.apply(c,arguments);g.jv[a]=!1},T6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.cr;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",NSa(this,a.capabilities||""),OSa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},NSa=function(a,b){a.capabilities.clear();
g.Jo(b.split(","),g.Pa(DSa,PSa)).forEach(function(c){a.capabilities.add(c)})},OSa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},U6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},V6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},QSa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},RSa=function(a){return new U6(a)},SSa=function(a){return Array.isArray(a)?g.tm(a,RSa):[]},W6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},X6=function(a){return Array.isArray(a)?"["+g.tm(a,W6).join(",")+"]":"null"},Y6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},TSa=function(a){return g.tm(a,function(b){return{key:b.id,
name:b.name}})},Z6=function(a,b){return g.Nb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},$6=function(a,b){return g.Nb(a,function(c){return V6(c,b)})},USa=function(){var a=(0,g.Ky)();
a&&ISa(a,a.i.Mg(!0))},a7=function(){var a=g.Ny("yt-remote-connected-devices")||[];
g.hc(a);return a},VSa=function(a){if(g.Tb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.tm(a,function(d,e){return 0==e?d:d.substring(c.length)})},WSa=function(a){g.My("yt-remote-connected-devices",a,86400)},c7=function(){if(b7)return b7;
var a=g.Ny("yt-remote-device-id");a||(a=Y6(),g.My("yt-remote-device-id",a,31536E3));for(var b=a7(),c=1,d=a;g.Sb(b,d);)c++,d=a+"#"+c;return b7=d},d7=function(){var a=a7(),b=c7();
g.Sb(a,b);g.Py()&&g.mc(a,b);a=VSa(a);if(g.Tb(a))try{g.Ut("remote_sid")}catch(c){}else try{g.St("remote_sid",a.join(","),-1)}catch(c){}},XSa=function(){return g.Ny("yt-remote-session-browser-channel")},YSa=function(){return g.Ny("yt-remote-local-screens")||[]},ZSa=function(){g.My("yt-remote-lounge-token-expiration",!0,86400)},$Sa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.tm(YSa(),function(d){return d.loungeToken}),c=g.tm(a,function(d){return d.loungeToken});
g.um(c,function(d){return!g.Sb(b,d)})&&ZSa();
g.My("yt-remote-local-screens",a,31536E3)},aTa=function(a,b){g.My("yt-remote-session-browser-channel",a);
g.My("yt-remote-session-screen-id",b);a=a7();b=c7();g.Sb(a,b)||a.push(b);WSa(a);d7()},e7=function(a){a||(g.Oy("yt-remote-session-screen-id"),g.Oy("yt-remote-session-video-id"));
d7();a=a7();g.Wb(a,c7());WSa(a)},bTa=function(){if(!f7){var a=g.Mr();
a&&(f7=new g.wr(a))}},cTa=function(){bTa();
return f7?!!f7.get("yt-remote-use-staging-server"):!1},g7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},dTa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},eTa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},h7=function(a){a.length?fTa(a.shift(),function(){h7(a)}):i7()},gTa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},fTa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Yk(d,g.kr(a));(document.head||document.documentElement).appendChild(d)},hTa=function(){var a=g7(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20211101021234/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20211101021234/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},i7=function(){var a=eTa();
a&&a(!1,"No cast extension found")},j7=function(){if(iTa){var a=2,b=eTa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;fTa("//web.archive.org/web/20211101021234/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",i7,c)}},jTa=function(){j7();
var a=hTa();a.push("//web.archive.org/web/20211101021234/https://www.gstatic.com/eureka/clank/cast_sender.js");h7(a)},lTa=function(){j7();
var a=hTa();a.push.apply(a,g.v(kTa.map(gTa)));a.push("//web.archive.org/web/20211101021234/https://www.gstatic.com/eureka/clank/cast_sender.js");h7(a)},k7=function(a,b,c){g.H.call(this);
this.I=null!=c?(0,g.E)(a,c):a;this.Tf=b;this.D=(0,g.E)(this.uQ,this);this.i=!1;this.u=0;this.B=this.Lb=null;this.C=[]},l7=function(a,b,c){g.H.call(this);
this.C=null!=c?a.bind(c):a;this.Tf=b;this.B=null;this.i=!1;this.u=0;this.Lb=null},m7=function(a){a.Lb=g.Ch(function(){a.Lb=null;
a.i&&!a.u&&(a.i=!1,m7(a))},a.Tf);
var b=a.B;a.B=null;a.C.apply(null,b)},n7=function(){},o7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},q7=function(a){p7.dispatchEvent(new mTa(p7,a))},mTa=function(a,b){g.ke.call(this,"statevent",a);
this.stat=b},r7=function(a,b,c,d){this.i=a;
this.B=b;this.S=c;this.K=d||1;this.u=45E3;this.C=new g.ek(this);this.I=new g.Bh;this.I.setInterval(250)},oTa=function(a,b,c){a.Ht=1;
a.Tm=O6(b.clone());a.yq=c;a.D=!0;nTa(a,null)},s7=function(a,b,c,d,e){a.Ht=1;
a.Tm=O6(b.clone());a.yq=null;a.D=c;e&&(a.KN=!1);nTa(a,d)},nTa=function(a,b){a.qt=Date.now();
t7(a);a.Co=a.Tm.clone();P6(a.Co,"t",a.K);a.xB=0;a.Mf=a.i.pD(a.i.nx()?b:null);0<a.kC&&(a.LA=new l7((0,g.E)(a.OO,a,a.Mf),a.kC));a.C.Ra(a.Mf,"readystatechange",a.vQ);b=a.Wo?g.Ke(a.Wo):{};a.yq?(a.vB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Mf.send(a.Co,a.vB,a.yq,b)):(a.vB="GET",a.KN&&!g.Ig&&(b.Connection="close"),a.Mf.send(a.Co,a.vB,null,b));a.i.xj(1)},qTa=function(a,b){var c=a.xB,d=b.indexOf("\n",c);
if(-1==d)return u7;c=Number(b.substring(c,d));if(isNaN(c))return pTa;d+=1;if(d+c>b.length)return u7;b=b.substr(d,c);a.xB=d+c;return b},sTa=function(a,b){a.qt=Date.now();
t7(a);var c=b?window.location.hostname:"";a.Co=a.Tm.clone();g.Yj(a.Co,"DOMAIN",c);g.Yj(a.Co,"t",a.K);try{a.Nj=new ActiveXObject("htmlfile")}catch(m){v7(a);a.Nm=7;q7(22);w7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in x7)f=x7[f];else if(f in rTa)f=x7[f]=rTa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
x7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Yf(g.uf("b/12014412"),d);a.Nj.open();a.Nj.write(g.Uf(c));a.Nj.close();a.Nj.parentWindow.m=(0,g.E)(a.nW,a);a.Nj.parentWindow.d=(0,g.E)(a.UM,a,!0);a.Nj.parentWindow.rpcClose=(0,g.E)(a.UM,a,!1);c=a.Nj.createElement("DIV");a.Nj.parentWindow.document.body.appendChild(c);d=g.Hf(a.Co.toString());d=g.og(g.Df(d));d=g.Yf(g.uf("b/12014412"),'<iframe src="'+d+'"></iframe>');g.$f(c,d);a.i.xj(1)},t7=function(a){a.eH=Date.now()+
a.u;
tTa(a,a.u)},tTa=function(a,b){if(null!=a.St)throw Error("WatchDog timer not null");
a.St=o7((0,g.E)(a.uW,a),b)},y7=function(a){a.St&&(g.C.clearTimeout(a.St),a.St=null)},w7=function(a){a.i.qf()||a.qp||a.i.Xx(a)},v7=function(a){y7(a);
g.he(a.LA);a.LA=null;a.I.stop();g.gk(a.C);if(a.Mf){var b=a.Mf;a.Mf=null;b.abort();b.dispose()}a.Nj&&(a.Nj=null)},z7=function(a,b){try{a.i.MM(a,b),a.i.xj(4)}catch(c){}},vTa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;uTa(a,b,function(h){h?c(!0):g.C.setTimeout(function(){vTa(a,b,c,d,f)},f)})}},uTa=function(a,b,c){var d=new Image;
d.onload=function(){try{A7(d),c(!0)}catch(e){}};
d.onerror=function(){try{A7(d),c(!1)}catch(e){}};
d.onabort=function(){try{A7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{A7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
ESa(d,a)},A7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},wTa=function(a){this.i=a;
this.u=new n7},xTa=function(a){var b=B7(a.i,a.Pu,"/mail/images/cleardot.gif");
O6(b);vTa(b.toString(),5E3,(0,g.E)(a.mR,a),3,2E3);a.xj(1)},D7=function(a){var b=a.i.X;
if(null!=b)q7(5),b?(q7(11),C7(a.i,a,!1)):(q7(12),C7(a.i,a,!0));else if(a.oh=new r7(a,void 0,void 0,void 0),a.oh.Wo=a.lC,b=a.i,b=B7(b,b.nx()?a.Au:null,a.mC),q7(5),!g.Cc||g.vc(10))P6(b,"TYPE","xmlhttp"),s7(a.oh,b,!1,a.Au,!1);else{P6(b,"TYPE","html");var c=a.oh;a=!!a.Au;c.Ht=3;c.Tm=O6(b.clone());sTa(c,a)}},E7=function(a,b,c){this.i=1;
this.u=[];this.C=[];this.D=new n7;this.S=a||null;this.X=null!=b?b:null;this.I=c||!1},yTa=function(a,b){this.i=a;
this.map=b;this.context=null},zTa=function(a,b,c,d){g.ke.call(this,"timingevent",a);
this.size=b;this.bx=d},ATa=function(a){g.ke.call(this,"serverreachability",a)},DTa=function(a){BTa(a);
if(3==a.i){var b=a.qw++,c=a.Ry.clone();g.Yj(c,"SID",a.B);g.Yj(c,"RID",b);g.Yj(c,"TYPE","terminate");F7(a,c);b=new r7(a,a.B,b,void 0);b.Ht=2;b.Tm=O6(c.clone());ESa(new Image,b.Tm.toString());b.qt=Date.now();t7(b)}CTa(a)},ETa=function(a){a.MR(1,0);
a.Ry=B7(a,null,a.nC);G7(a)},BTa=function(a){a.Xm&&(a.Xm.abort(),a.Xm=null);
a.Je&&(a.Je.cancel(),a.Je=null);a.Dl&&(g.C.clearTimeout(a.Dl),a.Dl=null);H7(a);a.Wg&&(a.Wg.cancel(),a.Wg=null);a.un&&(g.C.clearTimeout(a.un),a.un=null)},FTa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new yTa(a.pT++,b));2!=a.i&&3!=a.i||G7(a)},GTa=function(a){var b=0;
a.Je&&b++;a.Wg&&b++;return b},G7=function(a){a.Wg||a.un||(a.un=o7((0,g.E)(a.SM,a),0),a.gs=0)},ITa=function(a,b){if(1==a.i){if(!b){a.qw=Math.floor(1E5*Math.random());
b=a.qw++;var c=new r7(a,"",b,void 0);c.Wo=a.Yj;var d=I7(a),e=a.Ry.clone();g.Yj(e,"RID",b);g.Yj(e,"CVER","1");F7(a,e);oTa(c,e,d);a.Wg=c;a.i=2}}else 3==a.i&&(b?HTa(a,b):0==a.u.length||a.Wg||HTa(a))},HTa=function(a,b){if(b)if(6<a.rp){a.u=a.C.concat(a.u);
a.C.length=0;var c=a.qw-1;b=I7(a)}else c=b.S,b=b.yq;else c=a.qw++,b=I7(a);var d=a.Ry.clone();g.Yj(d,"SID",a.B);g.Yj(d,"RID",c);g.Yj(d,"AID",a.Ls);F7(a,d);c=new r7(a,a.B,c,a.gs+1);c.Wo=a.Yj;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Wg=c;oTa(c,d,b)},F7=function(a,b){a.Nf&&(a=a.Nf.hK())&&g.se(a,function(c,d){g.Yj(b,d,c)})},I7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.rp&&0<b){var d=a.u[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Yq:e.Yq},f++){e.Yq=a.u[f].i;var h=a.u[f].map;e.Yq=6>=a.rp?f:e.Yq-d;try{g.se(h,function(l){return function(m,n){c.push("req"+l.Yq+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Yq+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.u.splice(0,b));
return c.join("&")},JTa=function(a){a.Je||a.Dl||(a.K=1,a.Dl=o7((0,g.E)(a.RM,a),0),a.Lr=0)},J7=function(a){if(a.Je||a.Dl||3<=a.Lr)return!1;
a.K++;a.Dl=o7((0,g.E)(a.RM,a),KTa(a,a.Lr));a.Lr++;return!0},C7=function(a,b,c){a.tB=c;
a.Zj=b.ql;a.I||ETa(a)},H7=function(a){null!=a.Bp&&(g.C.clearTimeout(a.Bp),a.Bp=null)},KTa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},K7=function(a,b){if(2==b||9==b){var c=null;
a.Nf&&(c=null);var d=(0,g.E)(a.xX,a);c||(c=new g.Qj("//web.archive.org/web/20211101021234/https://www.google.com/images/cleardot.gif"),O6(c));uTa(c.toString(),1E4,d)}else q7(2);LTa(a,b)},LTa=function(a,b){a.i=0;
a.Nf&&a.Nf.vJ(b);CTa(a);BTa(a)},CTa=function(a){a.i=0;
a.Zj=-1;if(a.Nf)if(0==a.C.length&&0==a.u.length)a.Nf.cD();else{g.Zb(a.C);var b=g.Zb(a.u);a.C.length=0;a.u.length=0;a.Nf.cD(b)}},B7=function(a,b,c){var d=g.Zj(c);
if(""!=d.i)b&&g.Sj(d,b+"."+d.i),g.Tj(d,d.B);else{var e=window.location;d=MSa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.xv&&g.se(a.xv,function(f,h){g.Yj(d,h,f)});
g.Yj(d,"VER",a.rp);F7(a,d);return d},MTa=function(){},NTa=function(){this.i=[];
this.u=[]},OTa=function(a,b){this.action=a;
this.params=b||{}},L7=function(a,b){g.H.call(this);
this.i=new g.L(this.eW,0,this);g.I(this,this.i);this.Tf=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.E)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.E)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},M7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.va=a;this.I=b;this.B=new g.vr;this.u=new L7(this.bX,this);this.i=null;this.ma=!1;this.D=null;this.X="";this.S=this.C=0;this.K=[];this.Aa=c;this.Z=d;this.Ba=e},PTa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.tB,sessionId:a.i.B,arrayId:a.i.Ls}},QTa=function(a,b){a.S=b||0;
a.u.stop();N7(a);a.i&&(3==a.i.getState()&&ITa(a.i),DTa(a.i));a.S=0},O7=function(a){return!!a.i&&3==a.i.getState()},N7=function(a){if(a.i){var b=a.Z(),c=a.i.Yj||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.Yj=c}},P7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.ki(4,a))||"";b&&(this.port=":"+b);this.domain=g.li(a)||"";a=g.Bb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.yb(a,"10.0")&&(this.u=!1))},Q7=function(a,b){var c=a.i;
a.u&&(c="https://"+a.domain+a.port+a.i);return g.wi(c+b,{})},R7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Pa(a.C,d,!0),onError:g.Pa(a.B,e),onTimeout:g.Pa(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Ht(b,a)},UTa=function(){var a=RTa;
STa();S7.push(a);TTa()},T7=function(a,b){STa();
var c=VTa(a,String(b));g.Tb(S7)?WTa(c):(TTa(),g.nc(S7,function(d){d(c)}))},STa=function(){S7||(S7=g.Ga("yt.mdx.remote.debug.handlers_")||[],g.Fa("yt.mdx.remote.debug.handlers_",S7,void 0))},WTa=function(a){var b=(U7+1)%50;
U7=b;V7[b]=a;W7||(W7=49==b)},TTa=function(){var a=S7;
if(V7[0]){var b=W7?U7:-1;do{b=(b+1)%50;var c=V7[b];g.nc(a,function(d){d(c)})}while(b!=U7);
V7=Array(50);U7=-1;W7=!1}},VTa=function(a,b){var c=(Date.now()-XTa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},X7=function(a){g.Zx.call(this);
this.I=a;this.screens=[]},YTa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},ZTa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Jo(a.screens,function(f){return!!Z6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=YTa(a,b[d])||c;return c},$Ta=function(a,b){var c=a.screens.length;
a.screens=g.Jo(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},Y7=function(a,b,c,d,e){g.Zx.call(this);
this.B=a;this.K=b;this.C=c;this.I=d;this.D=e;this.u=0;this.i=null;this.Lb=NaN},$7=function(a){X7.call(this,"LocalScreenService");
this.u=a;this.i=NaN;Z7(this);this.info("Initializing with "+X6(this.screens))},aUa=function(a){if(a.screens.length){var b=g.tm(a.screens,function(d){return d.id}),c=Q7(a.u,"/pairing/get_lounge_token_batch");
R7(a.u,c,{screen_ids:b.join(",")},(0,g.E)(a.jS,a),(0,g.E)(a.iS,a))}},Z7=function(a){if(g.P("deprecate_pair_servlet_enabled"))return ZTa(a,[]);
var b=SSa(YSa());b=g.Jo(b,function(c){return!c.uuid});
return ZTa(a,b)},a8=function(a,b){$Sa(g.tm(a.screens,QSa));
b&&ZSa()},c8=function(a,b){g.Zx.call(this);
this.I=b;b=(b=g.Ny("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.Sb(b,h)}this.i=c;this.D=a;this.B=this.C=NaN;this.u=null;b8("Initialized with "+g.bi(this.i))},d8=function(a,b,c){var d=Q7(a.D,"/pairing/get_screen_availability");
R7(a.D,d,{lounge_token:b.token},(0,g.E)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.E)(function(){c(!1)},a))},e8=function(a,b){a:if(Q6(b)!=Q6(a.i))var c=!1;
else{c=g.Ae(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(b8("Updated online screens: "+g.bi(a.i)),a.i=b,a.ea("screenChange"));bUa(a)},f8=function(a){isNaN(a.B)||g.Bt(a.B);
a.B=g.zt((0,g.E)(a.VF,a),0<a.C&&a.C<g.Qa()?2E4:1E4)},b8=function(a){T7("OnlineScreenService",a)},cUa=function(a){var b={};
g.nc(a.I(),function(c){c.token?b[c.token]=c.id:this.le("Requesting availability of screen w/o lounge token.")});
return b},bUa=function(a){a=g.Ae(g.te(a.i,function(b){return b}));
g.hc(a);a.length?g.My("yt-remote-online-screen-ids",a.join(","),60):g.Oy("yt-remote-online-screen-ids")},g8=function(a,b){b=void 0===b?!1:b;
X7.call(this,"ScreenService");this.C=a;this.K=b;this.i=this.u=null;this.B=[];this.D={};dUa(this)},fUa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Hh(),l=c?$6(h,c):null;c&&(a.K||l)||(l=$6(h,b));if(l){l.uuid=b;var m=h8(a,l);d8(a.i,m,function(n){e(n?m:null)})}else c?eUa(a,c,(0,g.E)(function(n){var p=h8(this,new U6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));d8(this.i,p,function(q){e(q?p:null)})},a),f):e(null)},gUa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},hUa=function(a,b,c){d8(a.i,b,c)},eUa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Ht(Q7(a.C,"/pairing/get_lounge_token_batch"),e)},iUa=function(a){a.screens=a.u.Hh();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+X6(a.screens))},dUa=function(a){i8(a);
a.u=new $7(a.C);a.u.subscribe("screenChange",(0,g.E)(a.sS,a));iUa(a);a.K||(a.B=SSa(g.Ny("yt-remote-automatic-screen-cache")||[]));i8(a);a.info("Initializing automatic screens: "+X6(a.B));a.i=new c8(a.C,(0,g.E)(a.Hh,a,!0));a.i.subscribe("screenChange",(0,g.E)(function(){this.ea("onlineScreenChange")},a))},h8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=$6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||jUa(a));i8(a);a.D[b.uuid]=b.id;g.My("yt-remote-device-id-map",a.D,31536E3);return b},jUa=function(a){a=g.Jo(a.B,function(b){return"shortLived"!=b.idType});
g.My("yt-remote-automatic-screen-cache",g.tm(a,QSa))},i8=function(a){a.D=g.Ny("yt-remote-device-id-map")||{}},j8=function(a,b,c){g.Zx.call(this);
this.Ba=c;this.B=a;this.i=b;this.C=null},k8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},kUa=function(a,b){a.C&&(a.C.token=b,h8(a.B,a.C));
a.ea("sessionScreen",a.C)},l8=function(a,b){T7(a.Ba,b)},m8=function(a,b,c){j8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.Z=(0,g.E)(this.AQ,this);this.Aa=(0,g.E)(this.yW,this);this.ma=g.zt(function(){lUa(d,null)},12E4);
this.K=this.D=this.I=this.S=0;this.va=!1;this.X="unknown"},n8=function(a,b){g.Bt(a.K);
a.K=0;0==b?mUa(a):a.K=g.zt(function(){mUa(a)},b)},mUa=function(a){nUa(a,"getLoungeToken");
g.Bt(a.D);a.D=g.zt(function(){oUa(a,null)},3E4)},nUa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.bi(void 0));
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ia,(0,g.E)(function(){l8(this,"Failed to send message: "+b+".")},a)):l8(a,"Sending yt message without session: "+g.bi(c))},o8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.vK(b,function(c){k8(a,c)},function(){return a.zg()},5)):a.zg(Error("Waiting for session status timed out."))},qUa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new U6(b);pUa(a,d,function(e){e?(a.va=!0,h8(a.B,d),k8(a,d),a.X="unknown",n8(a,c)):(g.Is(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.zg())},5)},lUa=function(a,b){g.Bt(a.ma);
a.ma=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?qUa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.Is(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),o8(a,b.screenId))):(g.Is(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),o8(a,b.screenId)):o8(a,b.screenId):a.zg(Error("Waiting for session status timed out."))},oUa=function(a,b){g.Bt(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.X=c,n8(a,3E4)):(kUa(a,b.loungeToken),a.va=!1,a.X="unknown",n8(a,b.loungeTokenRefreshIntervalMs))},pUa=function(a,b,c,d){g.Bt(a.I);
a.I=0;hUa(a.B,b,function(e){e||0>d?c(e):a.I=g.zt(function(){pUa(a,b,c,d-1)},300)})},rUa=function(a){g.Bt(a.S);
a.S=0;g.Bt(a.I);a.I=0;g.Bt(a.ma);a.ma=0;g.Bt(a.D);a.D=0;g.Bt(a.K);a.K=0},p8=function(a,b,c,d){j8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.S=null;this.Aa="";this.Na=c;this.Ka=null;this.ma=g.Ia;this.X=NaN;this.Ia=(0,g.E)(this.BQ,this);this.D=g.Ia;this.K=this.I=0;this.Z=!1;this.va="unknown"},q8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},sUa=function(a){a.D=a.B.gI(a.Aa,a.i.label,a.i.friendlyName,q8(a),function(b,c){a.D=g.Ia;
a.Z=!0;k8(a,b);"shortLived"==b.idType&&0<c&&r8(a,c)},function(b){a.D=g.Ia;
a.zg(b)})},tUa=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.Na;cTa()&&(b.env_useStageMdx=1);return g.ui(b)},s8=function(a){return new Promise(function(b){a.Aa=Y6();
if(a.Ka){var c=new chrome.cast.DialLaunchResponse(!0,tUa(a));b(c);sUa(a)}else a.ma=function(){g.Bt(a.X);a.ma=function(){};
a.X=NaN;var d=new chrome.cast.DialLaunchResponse(!0,tUa(a));b(d);sUa(a)},a.X=g.zt(function(){a.ma()},100)})},vUa=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new U6(b);return(new Promise(function(e){uUa(a,d,function(f){f?(a.Z=!0,h8(a.B,d),k8(a,d),r8(a,c)):g.Is(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):s8(a)})},wUa=function(a,b){var c=a.S.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){fUa(a.B,c,b,d,function(f){f&&f.token&&k8(a,f);e(f)},function(f){l8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):s8(a)})},uUa=function(a,b,c,d){g.Bt(a.I);
a.I=0;hUa(a.B,b,function(e){e||0>d?c(e):a.I=g.zt(function(){uUa(a,b,c,d-1)},300)})},r8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
q8(a)&&(g.Bt(a.K),a.K=0,0==b?xUa(a):a.K=g.zt(function(){xUa(a)},b))},xUa=function(a){q8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.va=c,r8(a,3E4)):(a.Z=!1,a.va="unknown",kUa(a,b.loungeToken),r8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.va="noLoungeTokenResponse";r8(a,3E4)})},yUa=function(a){g.Bt(a.I);
a.I=0;g.Bt(a.K);a.K=0;a.D();a.D=function(){};
g.Bt(a.X)},t8=function(a,b){j8.call(this,a,b,"ManualSession");
this.u=g.zt((0,g.E)(this.Ms,this,null),150)},u8=function(a,b){g.Zx.call(this);
this.config_=b;this.u=a;this.S=b.appId||"233637DE";this.C=b.theme||"cl";this.X=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.i=null;this.K=!1;this.B=[];this.D=(0,g.E)(this.rV,this)},zUa=function(a,b){return b?g.Nb(a.B,function(c){return V6(b,c.label)},a):null},v8=function(a){T7("Controller",a)},RTa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},w8=function(a){return a.K||!!a.B.length||!!a.i},x8=function(a,b,c){b!=a.i&&(g.he(a.i),(a.i=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.i):a.ea("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.E)(a.QM,a,b)),b.subscribe("sessionFailed",function(){return AUa(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.Ms(null)):a.ea("yt-remote-cast2-session-change",null))},AUa=function(a,b){a.i==b&&a.ea("yt-remote-cast2-session-failed")},BUa=function(a){var b=a.u.fI(),c=a.i&&a.i.i;
a=g.tm(b,function(d){c&&V6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=zUa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},GUa=function(a,b,c,d){d.disableCastApi?y8("Cannot initialize because disabled by Mdx config."):CUa()?DUa(b,d)&&(z8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?EUa(a,c):(window.__onGCastApiAvailable=function(e,f){e?EUa(a,c):(A8("Failed to load cast API: "+f),B8(!1),z8(!1),g.Oy("yt-remote-cast-available"),g.Oy("yt-remote-cast-receiver"),
FUa(),c(!1))},d.loadCastApiSetupScript?g.Qy("https://web.archive.org/web/20211101021234/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=g7()&&jTa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?i7():89<=g7()?lTa():(j7(),h7(kTa.map(gTa))))):y8("Cannot initialize because not running Chrome")},FUa=function(){y8("dispose");
var a=C8();a&&a.dispose();g.Fa("yt.mdx.remote.cloudview.instance_",null,void 0);HUa(!1);g.mv(D8);D8.length=0},E8=function(){return!!g.Ny("yt-remote-cast-installed")},IUa=function(){var a=g.Ny("yt-remote-cast-receiver");
return a?a.friendlyName:null},JUa=function(){y8("clearCurrentReceiver");
g.Oy("yt-remote-cast-receiver")},KUa=function(){return E8()?C8()?C8().getCastSession():(A8("getCastSelector: Cast is not initialized."),null):(A8("getCastSelector: Cast API is not installed!"),null)},G8=function(){E8()?C8()?F8()?(y8("Requesting cast selector."),C8().requestSession()):(y8("Wait for cast API to be ready to request the session."),D8.push(g.lv("yt-remote-cast2-api-ready",G8))):A8("requestCastSelector: Cast is not initialized."):A8("requestCastSelector: Cast API is not installed!")},H8=
function(a,b){F8()?C8().setConnectedScreenStatus(a,b):A8("setConnectedScreenStatus called before ready.")},CUa=function(){var a=0<=g.Bb.search(/ (CrMo|Chrome|CriOS)\//);
return g.Zi||a},LUa=function(a,b){C8().init(a,b)},DUa=function(a,b){var c=!1;
C8()||(a=new u8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.My("yt-remote-cast-available",d);S6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){y8("onReceiverSelected: "+d.friendlyName);
g.My("yt-remote-cast-receiver",d);S6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){y8("onReceiverResumed: "+d.friendlyName);
g.My("yt-remote-cast-receiver",d);S6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){y8("onSessionChange: "+W6(d));
d||g.Oy("yt-remote-cast-receiver");S6("yt-remote-cast2-session-change",d)}),g.Fa("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
y8("cloudview.createSingleton_: "+c);return c},C8=function(){return g.Ga("yt.mdx.remote.cloudview.instance_")},EUa=function(a,b){B8(!0);
z8(!1);LUa(a,function(c){c?(HUa(!0),g.nv("yt-remote-cast2-api-ready")):(A8("Failed to initialize cast API."),B8(!1),g.Oy("yt-remote-cast-available"),g.Oy("yt-remote-cast-receiver"),FUa());b(c)})},y8=function(a){T7("cloudview",a)},A8=function(a){T7("cloudview",a)},B8=function(a){y8("setCastInstalled_ "+a);
g.My("yt-remote-cast-installed",a)},F8=function(){return!!g.Ga("yt.mdx.remote.cloudview.apiReady_")},HUa=function(a){y8("setApiReady_ "+a);
g.Fa("yt.mdx.remote.cloudview.apiReady_",a,void 0)},z8=function(a){g.Fa("yt.mdx.remote.cloudview.initializing_",a,void 0)},I8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.K=0;this.trackData=null;this.hasNext=this.Gk=!1;this.S=this.D=this.i=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},J8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Gk=!1;a.hasNext=!1;a.K=0;a.I=g.Qa();a.C=0;a.i=0;a.D=0;a.S=0;a.B=NaN;a.u=!1},K8=function(a){return a.Dc()?(g.Qa()-a.I)/1E3:0},L8=function(a,b){a.K=b;
a.I=g.Qa()},M8=function(a){switch(a.playerState){case 1:case 1081:return(g.Qa()-a.I)/1E3+a.K;
case -1E3:return 0}return a.K},N8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&J8(a)},O8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Le(a.trackData);b.hasPrevious=a.Gk;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.i;b.duration=a.D;b.loadedTime=a.S;b.liveIngestionTime=a.B;return b},Q8=function(a,b){g.Zx.call(this);
this.B=0;this.C=a;this.I=[];this.D=new NTa;this.u=this.i=null;this.X=(0,g.E)(this.aU,this);this.K=(0,g.E)(this.Bw,this);this.S=(0,g.E)(this.ZT,this);this.ma=(0,g.E)(this.hU,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.mG,this),MUa(this))):c=3;0!=c&&(b?this.mG(c):g.zt((0,g.E)(function(){this.mG(c)},this),0));
(a=KUa())&&P8(this,a);this.subscribe("yt-remote-cast2-session-change",this.ma)},R8=function(a){return new I8(a.C.getPlayerContextData())},MUa=function(a){g.nc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Pa(this.pV,b),this))},a)},NUa=function(a){g.nc(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},S8=function(a){return 1==a.getState()},T8=function(a,b){var c=a.D;
50>c.i.length+c.u.length&&a.D.u.push(b)},V8=function(a,b,c){var d=R8(a);
L8(d,c);-1E3!=d.playerState&&(d.playerState=b);U8(a,d)},W8=function(a,b,c){a.C.sendMessage(b,c)},U8=function(a,b){NUa(a);
a.C.setPlayerContextData(O8(b));MUa(a)},P8=function(a,b){a.u&&(a.u.removeUpdateListener(a.X),a.u.removeMediaListener(a.K),a.Bw(null));
a.u=b;a.u&&(T7("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.X),a.u.addMediaListener(a.K),a.u.media.length&&a.Bw(a.u.media[0]))},OUa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=R8(a);b.contentId!=d.videoId&&T7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;L8(d,a.i.getEstimatedTime());U8(a,d)}else T7("CP","No cast media video. Ignoring state update.")},X8=function(a,b,c){return(0,g.E)(function(d){this.le("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.le("Retrying "+b+" using MDx browser channel."),W8(this,b,c))},a)},Y8=function(a,b,c,d){d=void 0===d?!1:d;
g.Zx.call(this);this.D=NaN;this.va=!1;this.S=this.K=this.ma=this.Z=NaN;this.X=[];this.C=this.I=this.B=this.fc=this.i=null;this.Ia=a;this.Ba=d;this.X.push(g.Fu(window,"beforeunload",(0,g.E)(this.eS,this)));this.u=[];this.fc=new I8;this.Ka=b.id;this.Aa=b.idType;this.i=PUa(this,c);this.i.subscribe("handlerOpened",this.eU,this);this.i.subscribe("handlerClosed",this.bU,this);this.i.subscribe("handlerError",this.cU,this);this.i.subscribe("handlerMessage",this.dU,this);this.i.XA(b.token);this.subscribe("remoteQueueChange",
function(){var e=this.fc.videoId;g.Py()&&g.My("yt-remote-session-video-id",e)},this)},QUa=function(a){return g.Nb(a.u,function(b){return"LOUNGE_SCREEN"==b.type})},Z8=function(a){T7("conn",a)},PUa=function(a,b){return new M7(Q7(a.Ia,"/bc"),b,!1,function(){return a.kI()},"shortLived"==a.Aa)},$8=function(a,b){a.ea("proxyStateChange",b)},RUa=function(a){a.D=g.zt((0,g.E)(function(){Z8("Connecting timeout");
this.Xr(1)},a),2E4)},a9=function(a){g.Bt(a.D);
a.D=NaN},b9=function(a){g.Bt(a.Z);
a.Z=NaN},SUa=function(a){c9(a);
a.ma=g.zt((0,g.E)(function(){d9(this,"getNowPlaying")},a),2E4)},c9=function(a){g.Bt(a.ma);
a.ma=NaN},UUa=function(a,b){var c=null;
if(b){var d=QUa(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Fa("yt.mdx.remote.remoteClient_",c,void 0);b&&(a9(a),b9(a));c=O7(a.i)&&isNaN(a.D);b==c?b&&($8(a,1),d9(a,"getSubtitlesTrack")):b?(a.uK()&&a.fc.reset(),$8(a,1),d9(a,"getNowPlaying"),TUa(a)):a.Xr(1)},VUa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.fc.videoId&&(g.Ge(b.params)?a.fc.trackData=null:a.fc.trackData=b.params,a.ea("remotePlayerChange"))},WUa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.fc.listId=b.params.listId||a.fc.listId;N8(a.fc,c,d);a.ea("remoteQueueChange")},YUa=function(a,b){b.params=b.params||{};
WUa(a,b);XUa(a,b);a.ea("autoplayDismissed")},XUa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
L8(a.fc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.fc.playerState&&(c=-1E3);a.fc.playerState=c;c=Number(b.params.loadedTime);a.fc.S=isNaN(c)?0:c;a.fc.Ij(Number(b.params.duration));c=a.fc;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.fc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.fc.playerState?SUa(a):c9(a);a.ea("remotePlayerChange")},ZUa=function(a,b){if(-1E3!=a.fc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.fc.playerState=c;b=parseInt(b.params.currentTime,10);L8(a.fc,isNaN(b)?0:b);a.ea("remotePlayerChange")}},$Ua=function(a,b){var c="true"==b.params.muted;
a.fc.volume=parseInt(b.params.volume,10);a.fc.muted=c;a.ea("remotePlayerChange")},aVa=function(a,b){a.I=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},bVa=function(a,b){var c="true"==b.params.hasNext;
a.fc.Gk="true"==b.params.hasPrevious;a.fc.hasNext=c;a.ea("previousNextChange")},TUa=function(a){g.Bt(a.S);
a.S=g.zt((0,g.E)(a.Xr,a,1),864E5)},d9=function(a,b,c){c?Z8("Sending: action="+b+", params="+g.bi(c)):Z8("Sending: action="+b);
a.i.sendMessage(b,c)},e9=function(a){X7.call(this,"ScreenServiceProxy");
this.Se=a;this.i=[];this.i.push(this.Se.$_s("screenChange",(0,g.E)(this.FQ,this)));this.i.push(this.Se.$_s("onlineScreenChange",(0,g.E)(this.WU,this)))},fVa=function(a,b){bTa();
if(!f7||!f7.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;USa();d7();f9||(f9=new P7(b?b.loungeApiHost:void 0),cTa()&&(f9.i="/api/loungedev"));g9||(g9=g.Ga("yt.mdx.remote.deferredProxies_")||[],g.Fa("yt.mdx.remote.deferredProxies_",g9,void 0));cVa();var c=h9();if(!c){var d=new g8(f9,b?b.disableAutomaticScreenCache||!1:!1);g.Fa("yt.mdx.remote.screenService_",d,void 0);c=h9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Fa("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);GUa(a,d,function(f){f?i9()&&H8(i9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){S6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ga("yt.mdx.remote.initialized_")&&(g.Fa("yt.mdx.remote.initialized_",!0,void 0),j9("Initializing: "+
g.bi(b)),k9.push(g.lv("yt-remote-cast2-api-ready",function(){S6("yt-remote-api-ready")})),k9.push(g.lv("yt-remote-cast2-availability-change",function(){S6("yt-remote-receiver-availability-change")})),k9.push(g.lv("yt-remote-cast2-receiver-selected",function(){l9(null);
S6("yt-remote-auto-connect","cast-selector-receiver")})),k9.push(g.lv("yt-remote-cast2-receiver-resumed",function(){S6("yt-remote-receiver-resumed","cast-selector-receiver")})),k9.push(g.lv("yt-remote-cast2-session-change",dVa)),k9.push(g.lv("yt-remote-connection-change",function(f){f?H8(i9(),"YouTube TV"):m9()||(H8(null,null),JUa())})),k9.push(g.lv("yt-remote-cast2-session-failed",function(){S6("yt-remote-connection-failed")})),a=n9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.P("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),j9(" -- with channel params: "+g.bi(a)),a?(g.My("yt-remote-session-app",a.app),g.My("yt-remote-session-name",a.name)):(g.Oy("yt-remote-session-app"),g.Oy("yt-remote-session-name")),g.Fa("yt.mdx.remote.channelParams_",a,void 0),c.start(),i9()||eVa())}},gVa=function(){var a=h9().Se.$_gos();
var b=o9();b&&p9()&&(Z6(a,b)||a.push(b));return TSa(a)},q9=function(){var a=hVa();
!a&&E8()&&IUa()&&(a={key:"cast-selector-receiver",name:IUa()});return a},hVa=function(){var a=gVa(),b=o9();
b||(b=m9());return g.Nb(a,function(c){return b&&V6(b,c.key)?!0:!1})},o9=function(){var a=i9();
if(!a)return null;var b=h9().Hh();return $6(b,a)},dVa=function(a){j9("remote.onCastSessionChange_: "+W6(a));
if(a){var b=o9();if(b&&b.id==a.id){if(H8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))r9&&(r9.token=a),(b=p9())&&b.XA(a)}else b&&s9(),t9(a,1)}else p9()&&s9()},s9=function(){F8()?C8().stopSession():A8("stopSession called before API ready.");
var a=p9();a&&(a.disconnect(1),u9(null))},v9=function(){var a=p9();
return!!a&&3!=a.getProxyState()},j9=function(a){T7("remote",a)},h9=function(){if(!w9){var a=g.Ga("yt.mdx.remote.screenService_");
w9=a?new e9(a):null}return w9},i9=function(){return g.Ga("yt.mdx.remote.currentScreenId_")},iVa=function(a){g.Fa("yt.mdx.remote.currentScreenId_",a,void 0)},jVa=function(){return g.Ga("yt.mdx.remote.connectData_")},l9=function(a){g.Fa("yt.mdx.remote.connectData_",a,void 0)},p9=function(){return g.Ga("yt.mdx.remote.connection_")},u9=function(a){var b=p9();
l9(null);a||iVa("");g.Fa("yt.mdx.remote.connection_",a,void 0);g9&&(g.nc(g9,function(c){c(a)}),g9.length=0);
b&&!a?S6("yt-remote-connection-change",!1):!b&&a&&S6("yt-remote-connection-change",!0)},m9=function(){var a=g.Py();
if(!a)return null;var b=h9();if(!b)return null;b=b.Hh();return $6(b,a)},t9=function(a,b){i9();
o9()&&o9();if(x9)r9=a;else{iVa(a.id);var c=g.Ga("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new Y8(f9,a,n9(),c);a.connect(b,jVa());a.subscribe("beforeDisconnect",function(d){S6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){p9()&&(p9(),u9(null))});
a.subscribe("browserChannelAuthError",function(){var d=o9();d&&"shortLived"==d.idType&&(F8()?C8().handleBrowserChannelAuthError():A8("refreshLoungeToken called before API ready."))});
u9(a)}},eVa=function(){var a=m9();
a?(j9("Resume connection to: "+W6(a)),t9(a,0)):(e7(),JUa(),j9("Skipping connecting because no session screen found."))},cVa=function(){var a=n9();
if(g.Ge(a)){a=c7();var b=g.Ny("yt-remote-session-name")||"",c=g.Ny("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Fa("yt.mdx.remote.channelParams_",a,void 0)}},n9=function(){return g.Ga("yt.mdx.remote.channelParams_")||{}},y9=function(a,b,c){g.H.call(this);
var d=this;this.u=a;this.J=b;this.Sb=c;this.events=new g.iD(this);this.ma=this.events.T(this.J,"onVolumeChange",function(e){kVa(d,e)});
this.D=!1;this.I=new g.NJ(64);this.i=new g.L(this.WN,500,this);this.B=new g.L(this.XN,1E3,this);this.S=new k7(this.OX,0,this);this.C={};this.X=new g.L(this.FO,1E3,this);this.K=new l7(this.seekTo,1E3,this);this.Z=g.Ia;g.I(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.HU);this.events.T(b,"captionschanged",this.VT);this.events.T(b,"captionssettingschanged",this.dO);this.events.T(b,"videoplayerreset",this.qA);this.events.T(b,"mdxautoplaycancel",function(){d.Sb.RJ()});
a=this.Sb;a.isDisposed();a.subscribe("proxyStateChange",this.LM,this);a.subscribe("remotePlayerChange",this.Fw,this);a.subscribe("remoteQueueChange",this.qA,this);a.subscribe("previousNextChange",this.IM,this);a.subscribe("nowAutoplaying",this.CM,this);a.subscribe("autoplayDismissed",this.fM,this);g.I(this,this.i);g.I(this,this.B);g.I(this,this.S);g.I(this,this.X);g.I(this,this.K);this.dO();this.qA();this.Fw()},kVa=function(a,b){if(z9(a)){a.Sb.unsubscribe("remotePlayerChange",a.Fw,a);
var c=Math.round(b.volume);b=!!b.muted;var d=R8(a.Sb);if(c!==d.volume||b!==d.muted)a.Sb.setVolume(c,b),a.X.start();a.Sb.subscribe("remotePlayerChange",a.Fw,a)}},lVa=function(a){a.Wb(0);
a.i.stop();a.Tb(new g.NJ(64))},A9=function(a,b){if(z9(a)&&!a.D){var c=null;
b&&(c={style:a.J.getSubtitlesUserSettings()},g.Ne(c,b));a.Sb.jI(a.J.getVideoData(1).videoId,c);a.C=R8(a.Sb).trackData}},B9=function(a,b){var c=a.J.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.J.getVideoData(1);a.Sb.playVideo(c.videoId,b,d,e,c.playerParams,c.Za,JSa(c));a.Tb(new g.NJ(1))},mVa=function(a,b){if(b){var c=a.J.getOption("captions","tracklist",{SK:1});
c&&c.length?(a.J.setOption("captions","track",b),a.D=!1):(a.J.loadModule("captions"),a.D=!0)}else a.J.setOption("captions","track",{})},z9=function(a){return R8(a.Sb).videoId===a.J.getVideoData(1).videoId},C9=function(){g.W.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-popup-title",ya:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",ya:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",U:[{G:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-cancel"],ya:"Cancel"},{G:"button",Ga:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],ya:"Confirm"}]}]}]});this.i=new g.sL(this,250);this.cancelButton=this.Fa("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Fa("ytp-mdx-privacy-popup-confirm");g.I(this,this.i);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},D9=function(a){g.W.call(this,{G:"div",
L:"ytp-remote",U:[{G:"div",L:"ytp-remote-display-status",U:[{G:"div",L:"ytp-remote-display-status-icon",U:[g.tta()]},{G:"div",L:"ytp-remote-display-status-text",ya:"{{statustext}}"}]}]});this.api=a;this.i=new g.sL(this,250);g.I(this,this.i);this.T(a,"presentingplayerstatechange",this.onStateChange);nVa(this,a.zb())},nVa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.T(b,128)?g.lI("Error on $RECEIVER_NAME",c):b.Dc()||g.T(b,4)?g.lI("Playing on $RECEIVER_NAME",c):g.lI("Connected to $RECEIVER_NAME",c);a.Sa("statustext",b);a.i.show()}else a.i.hide()},E9=function(a,b){g.MP.call(this,"Play on",0,a,b);
this.J=a;this.zo={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},F9=function(a){g.WM.call(this,a);
this.Nk={key:Y6(),name:"This computer"};this.di=null;this.subscriptions=[];this.JF=this.Sb=null;this.zo=[this.Nk];this.Zm=this.Nk;this.xd=new g.NJ(64);this.vL=0;this.uf=-1;this.Ow=!1;this.Mw=this.gt=null;if(!g.TE(this.player.V())&&!g.UE(this.player.V())){a=this.player;var b=g.zM(a);b&&(b=b.Dn())&&(b=new E9(a,b),g.I(this,b));b=new D9(a);g.I(this,b);g.JM(a,b.element,4);this.gt=new C9;g.I(this,this.gt);g.JM(a,this.gt.element,4);this.Ow=!!m9()}},G9=function(a){a.Mw&&(a.player.removeEventListener("presentingplayerstatechange",
a.Mw),a.Mw=null)},oVa=function(a,b,c){a.xd=c;
a.player.ea("presentingplayerstatechange",new g.VH(c,b))},H9=function(a,b){if(b.key!==a.Zm.key)if(b.key===a.Nk.key)s9();
else{var c;(c=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.O("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.Ow||!a.gt);(c?0:g.jF(a.player.V())||g.mF(a.player.V()))&&pVa(a);a.Zm=b;if(!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.UE(a.player.V())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.QM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Za,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=JSa(c))&&(a.locationInfo=c)}j9("Connecting to: "+g.bi(b));"cast-selector-receiver"==b.key?(l9(a||null),b=a||null,F8()?C8().setLaunchParams(b):A8("setLaunchParams called before ready.")):!a&&v9()&&
i9()==b.key?S6("yt-remote-connection-change",!0):(s9(),l9(a||null),a=h9().Hh(),(b=$6(a,b.key))&&t9(b,1))}}},pVa=function(a){a.player.zb().Dc()?a.player.pauseVideo():(a.Mw=function(b){!a.Ow&&g.XH(b,8)&&(a.player.pauseVideo(),G9(a))},a.player.addEventListener("presentingplayerstatechange",a.Mw));
a.gt&&a.gt.wd();p9()||(x9=!0)},rTa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},x7={"'":"\\'"},PSa={UY:"atp",S9:"ska",E8:"que",z6:"mus",R9:"sus",M2:"dsp",b9:"seq",c6:"mic",E1:"dpa",jZ:"cds",x6:"mlm",C1:"dsdtr"},f7,b7="",iTa=dTa("loadCastFramework")||dTa("loadCastApplicationFramework"),kTa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ra(k7,g.H);g.k=k7.prototype;g.k.tQ=function(a){this.C=arguments;this.i=!1;this.Lb?this.B=g.Qa()+this.Tf:this.Lb=g.Ch(this.D,this.Tf)};
g.k.stop=function(){this.Lb&&(g.C.clearTimeout(this.Lb),this.Lb=null);this.B=null;this.i=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.i&&(this.i=!1,this.I.apply(null,this.C)))};
g.k.xa=function(){this.stop();k7.ke.xa.call(this)};
g.k.uQ=function(){this.Lb&&(g.C.clearTimeout(this.Lb),this.Lb=null);this.B?(this.Lb=g.Ch(this.D,this.B-g.Qa()),this.B=null):this.u?this.i=!0:(this.i=!1,this.I.apply(null,this.C))};g.w(l7,g.H);g.k=l7.prototype;g.k.eI=function(a){this.B=arguments;this.Lb||this.u?this.i=!0:m7(this)};
g.k.stop=function(){this.Lb&&(g.C.clearTimeout(this.Lb),this.Lb=null,this.i=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.i||this.Lb||(this.i=!1,m7(this))};
g.k.xa=function(){g.H.prototype.xa.call(this);this.stop()};n7.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
n7.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};var p7=new g.ef;g.w(mTa,g.ke);g.k=r7.prototype;g.k.Wo=null;g.k.Em=!1;g.k.St=null;g.k.eH=null;g.k.qt=null;g.k.Ht=null;g.k.Tm=null;g.k.Co=null;g.k.yq=null;g.k.Mf=null;g.k.xB=0;g.k.Nj=null;g.k.vB=null;g.k.Nm=null;g.k.yu=-1;g.k.KN=!0;g.k.qp=!1;g.k.kC=0;g.k.LA=null;var pTa={},u7={};g.k=r7.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.vQ=function(a){a=a.target;var b=this.LA;b&&3==g.Ji(a)?b.eI():this.OO(a)};
g.k.OO=function(a){try{if(a==this.Mf)a:{var b=g.Ji(this.Mf),c=this.Mf.u,d=this.Mf.getStatus();if(g.Cc&&!g.vc(10)||g.Ig&&!g.uc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Oi(this.Mf))break a;this.qp||4!=b||7==c||(8==c||0>=d?this.i.xj(3):this.i.xj(2));y7(this);var e=this.Mf.getStatus();this.yu=e;var f=g.Oi(this.Mf);if(this.Em=200==e){4==b&&v7(this);if(this.D){for(a=!0;!this.qp&&this.xB<f.length;){var h=qTa(this,f);if(h==u7){4==b&&(this.Nm=4,q7(15),a=!1);break}else if(h==pTa){this.Nm=4;q7(16);a=!1;
break}else z7(this,h)}4==b&&0==f.length&&(this.Nm=1,q7(17),a=!1);this.Em=this.Em&&a;a||(v7(this),w7(this))}else z7(this,f);this.Em&&!this.qp&&(4==b?this.i.Xx(this):(this.Em=!1,t7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Nm=3,q7(13)):(this.Nm=0,q7(14)),v7(this),w7(this)}}catch(l){this.Mf&&g.Oi(this.Mf)}finally{}};
g.k.nW=function(a){o7((0,g.E)(this.mW,this,a),0)};
g.k.mW=function(a){this.qp||(y7(this),z7(this,a),t7(this))};
g.k.UM=function(a){o7((0,g.E)(this.lW,this,a),0)};
g.k.lW=function(a){this.qp||(v7(this),this.Em=a,this.i.Xx(this),this.i.xj(4))};
g.k.cancel=function(){this.qp=!0;v7(this)};
g.k.uW=function(){this.St=null;var a=Date.now();0<=a-this.eH?(2!=this.Ht&&this.i.xj(3),v7(this),this.Nm=2,q7(18),w7(this)):tTa(this,this.eH-a)};
g.k.getLastError=function(){return this.Nm};g.k=wTa.prototype;g.k.lC=null;g.k.oh=null;g.k.MA=!1;g.k.YN=null;g.k.Qy=null;g.k.HE=null;g.k.mC=null;g.k.Zh=null;g.k.ql=-1;g.k.Au=null;g.k.Pu=null;g.k.connect=function(a){this.mC=a;a=B7(this.i,null,this.mC);q7(3);this.YN=Date.now();var b=this.i.S;null!=b?(this.Au=b[0],(this.Pu=b[1])?(this.Zh=1,xTa(this)):(this.Zh=2,D7(this))):(P6(a,"MODE","init"),this.oh=new r7(this,void 0,void 0,void 0),this.oh.Wo=this.lC,s7(this.oh,a,!1,null,!0),this.Zh=0)};
g.k.mR=function(a){if(a)this.Zh=2,D7(this);else{q7(4);var b=this.i;b.Zj=b.Xm.ql;K7(b,9)}a&&this.xj(2)};
g.k.pD=function(a){return this.i.pD(a)};
g.k.abort=function(){this.oh&&(this.oh.cancel(),this.oh=null);this.ql=-1};
g.k.qf=function(){return!1};
g.k.MM=function(a,b){this.ql=a.yu;if(0==this.Zh)if(b){try{var c=this.u.parse(b)}catch(d){a=this.i;a.Zj=this.ql;K7(a,2);return}this.Au=c[0];this.Pu=c[1]}else a=this.i,a.Zj=this.ql,K7(a,2);else if(2==this.Zh)if(this.MA)q7(7),this.HE=Date.now();else if("11111"==b){if(q7(6),this.MA=!0,this.Qy=Date.now(),a=this.Qy-this.YN,!g.Cc||g.vc(10)||500>a)this.ql=200,this.oh.cancel(),q7(12),C7(this.i,this,!0)}else q7(8),this.Qy=this.HE=Date.now(),this.MA=!1};
g.k.Xx=function(){this.ql=this.oh.yu;if(this.oh.Em)0==this.Zh?this.Pu?(this.Zh=1,xTa(this)):(this.Zh=2,D7(this)):2==this.Zh&&((!g.Cc||g.vc(10)?!this.MA:200>this.HE-this.Qy)?(q7(11),C7(this.i,this,!1)):(q7(12),C7(this.i,this,!0)));else{0==this.Zh?q7(9):2==this.Zh&&q7(10);var a=this.i;this.oh.getLastError();a.Zj=this.ql;K7(a,2)}};
g.k.nx=function(){return this.i.nx()};
g.k.isActive=function(){return this.i.isActive()};
g.k.xj=function(a){this.i.xj(a)};g.k=E7.prototype;g.k.Yj=null;g.k.xv=null;g.k.Wg=null;g.k.Je=null;g.k.nC=null;g.k.Ry=null;g.k.fJ=null;g.k.Yx=null;g.k.qw=0;g.k.pT=0;g.k.Nf=null;g.k.un=null;g.k.Dl=null;g.k.Bp=null;g.k.Xm=null;g.k.tB=null;g.k.Ls=-1;g.k.uL=-1;g.k.Zj=-1;g.k.gs=0;g.k.Lr=0;g.k.rp=8;g.Ra(zTa,g.ke);g.Ra(ATa,g.ke);g.k=E7.prototype;g.k.connect=function(a,b,c,d,e){q7(0);this.nC=b;this.xv=c||{};d&&void 0!==e&&(this.xv.OSID=d,this.xv.OAID=e);this.I?(o7((0,g.E)(this.BJ,this,a),100),ETa(this)):this.BJ(a)};
g.k.BJ=function(a){this.Xm=new wTa(this);this.Xm.lC=this.Yj;this.Xm.u=this.D;this.Xm.connect(a)};
g.k.qf=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.SM=function(a){this.un=null;ITa(this,a)};
g.k.RM=function(){this.Dl=null;this.Je=new r7(this,this.B,"rpc",this.K);this.Je.Wo=this.Yj;this.Je.kC=0;var a=this.fJ.clone();g.Yj(a,"RID","rpc");g.Yj(a,"SID",this.B);g.Yj(a,"CI",this.tB?"0":"1");g.Yj(a,"AID",this.Ls);F7(this,a);if(!g.Cc||g.vc(10))g.Yj(a,"TYPE","xmlhttp"),s7(this.Je,a,!0,this.Yx,!1);else{g.Yj(a,"TYPE","html");var b=this.Je,c=!!this.Yx;b.Ht=3;b.Tm=O6(a.clone());sTa(b,c)}};
g.k.MM=function(a,b){if(0!=this.i&&(this.Je==a||this.Wg==a))if(this.Zj=a.yu,this.Wg==a&&3==this.i)if(7<this.rp){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Dl){if(this.Je)if(this.Je.qt+3E3<this.Wg.qt)H7(this),this.Je.cancel(),this.Je=null;else break a;J7(this);q7(19)}}else this.uL=a[1],0<this.uL-this.Ls&&37500>a[2]&&this.tB&&0==this.Lr&&!this.Bp&&(this.Bp=o7((0,g.E)(this.ST,this),6E3));else K7(this,11)}else null!=b&&K7(this,11);else if(this.Je==
a&&H7(this),!g.lb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.Ls=c[0],c=c[1],2==this.i?"c"==c[0]?(this.B=c[1],this.Yx=c[2],c=c[3],null!=c?this.rp=c:this.rp=6,this.i=3,this.Nf&&this.Nf.xJ(),this.fJ=B7(this,this.nx()?this.Yx:null,this.nC),JTa(this)):"stop"==c[0]&&K7(this,7):3==this.i&&("stop"==c[0]?K7(this,7):"noop"!=c[0]&&this.Nf&&this.Nf.wJ(c),this.Lr=0)};
g.k.ST=function(){null!=this.Bp&&(this.Bp=null,this.Je.cancel(),this.Je=null,J7(this),q7(20))};
g.k.Xx=function(a){if(this.Je==a){H7(this);this.Je=null;var b=2}else if(this.Wg==a)this.Wg=null,b=1;else return;this.Zj=a.yu;if(0!=this.i)if(a.Em)if(1==b){b=Date.now()-a.qt;var c=p7;c.dispatchEvent(new zTa(c,a.yq?a.yq.length:0,b,this.gs));G7(this);this.C.length=0}else JTa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Zj)){if(d=1==b)this.Wg||this.un||1==this.i||2<=this.gs?d=!1:(this.un=o7((0,g.E)(this.SM,this,a),KTa(this,this.gs)),this.gs++,d=!0);d=!(d||2==b&&J7(this))}if(d)switch(c){case 1:K7(this,
5);break;case 4:K7(this,10);break;case 3:K7(this,6);break;case 7:K7(this,12);break;default:K7(this,2)}}};
g.k.MR=function(a){if(!g.Sb(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.xX=function(a){a?q7(2):(q7(1),LTa(this,8))};
g.k.pD=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Di;a.S=!1;return a};
g.k.isActive=function(){return!!this.Nf&&this.Nf.isActive(this)};
g.k.xj=function(a){var b=p7;b.dispatchEvent(new ATa(b,a))};
g.k.nx=function(){return!(!g.Cc||g.vc(10))};
g.k=MTa.prototype;g.k.xJ=function(){};
g.k.wJ=function(){};
g.k.vJ=function(){};
g.k.cD=function(){};
g.k.hK=function(){return{}};
g.k.isActive=function(){return!0};g.k=NTa.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.u.length};
g.k.clear=function(){this.i=[];this.u=[]};
g.k.contains=function(a){return g.Sb(this.i,a)||g.Sb(this.u,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.RMa)(b,a);0<=c?(g.Vb(b,c),b=!0):b=!1;return b||g.Wb(this.u,a)};
g.k.Pp=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Ra(L7,g.H);g.k=L7.prototype;g.k.eW=function(){this.Tf=Math.min(3E5,2*this.Tf);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.Tf+15E3*Math.random();g.Lq(this.i,a);this.u=Date.now()+a};
g.k.stop=function(){this.i.stop();this.u=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Tf=5E3};g.Ra(M7,MTa);g.k=M7.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.cg=function(a){return this.B.cg(a)};
g.k.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.k.dispose=function(){this.ma||(this.ma=!0,g.he(this.B),QTa(this),g.he(this.u),this.u=null,this.Z=function(){return""})};
g.k.isDisposed=function(){return this.ma};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.X="";this.u.stop();this.D=a||null;this.C=b||0;a=this.va+"/test";b=this.va+"/bind";var d=new E7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Aa),e=this.i;e&&(e.Nf=null);d.Nf=this;this.i=d;N7(this);if(this.i){d=g.O("ID_TOKEN");var f=this.i.Yj||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.Yj=f}e?(3!=e.getState()&&0==GTa(e)||e.getState(),this.i.connect(a,b,this.I,e.B,e.Ls)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Ne(a,b);this.u.isActive()||2==(this.i?this.i.getState():0)?this.K.push(a):O7(this)&&(N7(this),FTa(this.i,a))};
g.k.xJ=function(){this.u.reset();this.D=null;this.C=0;if(this.K.length){var a=this.K;this.K=[];for(var b=0,c=a.length;b<c;++b)FTa(this.i,a[b])}this.ea("handlerOpened")};
g.k.vJ=function(a){var b=2==a&&401==this.i.Zj;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.k.cD=function(a){if(!this.u.isActive())this.ea("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.K.push(d)}};
g.k.hK=function(){var a={v:2};this.X&&(a.gsessionid=this.X);0!=this.C&&(a.ui=""+this.C);0!=this.S&&(a.ui=""+this.S);this.D&&g.Ne(a,this.D);return a};
g.k.wJ=function(a){"S"==a[0]?this.X=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),DTa(this.i)):this.ea("handlerMessage",new OTa(a[0],a[1]))};
g.k.XA=function(a){(this.I.loungeIdToken=a)||this.u.stop();if(this.Ba&&this.i){var b=this.i.Yj||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.Yj=b}};
g.k.bX=function(){this.u.isActive();0==GTa(this.i)&&this.connect(this.D,this.C)};P7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
P7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
P7.prototype.D=function(a){a(Error("request timed out"))};var XTa=Date.now(),S7=null,V7=Array(50),U7=-1,W7=!1;g.Ra(X7,g.Zx);X7.prototype.Hh=function(){return this.screens};
X7.prototype.contains=function(a){return!!Z6(this.screens,a)};
X7.prototype.get=function(a){return a?$6(this.screens,a):null};
X7.prototype.info=function(a){T7(this.I,a)};g.w(Y7,g.Zx);g.k=Y7.prototype;g.k.start=function(){!this.i&&isNaN(this.Lb)&&this.eN()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Lb)||(g.Bt(this.Lb),this.Lb=NaN)};
g.k.xa=function(){this.stop();g.Zx.prototype.xa.call(this)};
g.k.eN=function(){this.Lb=NaN;this.i=g.Ht(Q7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.E)(this.xQ,this),onError:(0,g.E)(this.wQ,this),onTimeout:(0,g.E)(this.yQ,this)})};
g.k.xQ=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new U6(a),b)};
g.k.wQ=function(a){this.i=null;a.status&&404==a.status?this.u>=qVa.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=qVa[this.u],this.Lb=g.zt((0,g.E)(this.eN,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.k.yQ=function(){this.i=null;this.ea("pairingFailed",Error("Server not responding"))};
var qVa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ra($7,X7);g.k=$7.prototype;g.k.start=function(){Z7(this)&&this.ea("screenChange");!g.Ny("yt-remote-lounge-token-expiration")&&aUa(this);g.Bt(this.i);this.i=g.zt((0,g.E)(this.start,this),1E4)};
g.k.add=function(a,b){Z7(this);YTa(this,a);a8(this,!1);this.ea("screenChange");b(a);a.token||aUa(this)};
g.k.remove=function(a,b){var c=Z7(this);$Ta(this,a)&&(a8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.k.rB=function(a,b,c,d){var e=Z7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,a8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.k.xa=function(){g.Bt(this.i);$7.ke.xa.call(this)};
g.k.jS=function(a){Z7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}a8(this,!b);b&&T7(this.I,"Missed "+b+" lounge tokens.")};
g.k.iS=function(a){T7(this.I,"Requesting lounge tokens failed: "+a)};g.w(c8,g.Zx);g.k=c8.prototype;g.k.start=function(){var a=parseInt(g.Ny("yt-remote-fast-check-period")||"0",10);(this.C=g.Qa()-144E5<a?0:a)?f8(this):(this.C=g.Qa()+3E5,g.My("yt-remote-fast-check-period",this.C),this.VF())};
g.k.isEmpty=function(){return g.Ge(this.i)};
g.k.update=function(){b8("Updating availability on schedule.");var a=this.I(),b=g.te(this.i,function(c,d){return c&&!!$6(a,d)},this);
e8(this,b)};
g.k.xa=function(){g.Bt(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.Zx.prototype.xa.call(this)};
g.k.VF=function(){g.Bt(this.B);this.B=NaN;this.u&&this.u.abort();var a=cUa(this);if(Q6(a)){var b=Q7(this.D,"/pairing/get_screen_availability");this.u=R7(this.D,b,{lounge_token:g.Ae(a).join(",")},(0,g.E)(this.LV,this,a),(0,g.E)(this.KV,this))}else e8(this,{}),f8(this)};
g.k.LV=function(a,b){this.u=null;var c=g.Ae(cUa(this));if(g.lc(c,g.Ae(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;e8(this,c);f8(this)}else this.le("Changing Screen set during request."),this.VF()};
g.k.KV=function(a){this.le("Screen availability failed: "+a);this.u=null;f8(this)};
g.k.le=function(a){T7("OnlineScreenService",a)};g.Ra(g8,X7);g.k=g8.prototype;g.k.start=function(){this.u.start();this.i.start();this.screens.length&&(this.ea("screenChange"),this.i.isEmpty()||this.ea("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.i.update()};
g.k.rB=function(a,b,c,d){this.u.contains(a)?this.u.rB(a,b,c,d):(a="Updating name of unknown screen: "+a.name,T7(this.I,a),d(Error(a)))};
g.k.Hh=function(a){return a?this.screens:g.Yb(this.screens,g.Jo(this.B,function(b){return!this.contains(b)},this))};
g.k.fI=function(){return g.Jo(this.Hh(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.gI=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new Y7(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.he(l);e(h8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.he(l);f(m)});
l.start();return(0,g.E)(l.stop,l)};
g.k.zQ=function(a,b,c,d){g.Ht(Q7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.E)(function(e,f){e=new U6(f.screen||{});if(!e.name||gUa(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);gUa(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(h8(this,e))},this),
onError:(0,g.E)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.E)(function(){d(Error("pairing request timed out."))},this)})};
g.k.xa=function(){g.he(this.u);g.he(this.i);g8.ke.xa.call(this)};
g.k.sS=function(){iUa(this);this.ea("screenChange");this.i.update()};
g8.prototype.dispose=g8.prototype.dispose;g.Ra(j8,g.Zx);g.k=j8.prototype;g.k.getScreen=function(){return this.C};
g.k.zg=function(a){this.isDisposed()||(a&&(l8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.k.info=function(a){T7(this.Ba,a)};
g.k.hI=function(){return null};
g.k.lG=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.E)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.E)(function(){l8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.xa=function(){this.lG("");j8.ke.xa.call(this)};g.w(m8,j8);g.k=m8.prototype;g.k.kG=function(a){if(this.u){if(this.u==a)return;l8(this,"Overriding cast session with new session object");rUa(this);this.va=!1;this.X="unknown";this.u.removeUpdateListener(this.Z);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.Z);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);nUa(this,"getMdxSessionStatus")};
g.k.Ms=function(a){this.info("launchWithParams no-op for Cast: "+g.bi(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.E)(function(){this.zg()},this),(0,g.E)(function(){this.zg(Error("Failed to stop receiver app."))},this)):this.zg(Error("Stopping cast device without session."))};
g.k.lG=function(){};
g.k.xa=function(){this.info("disposeInternal");rUa(this);this.u&&(this.u.removeUpdateListener(this.Z),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;j8.prototype.xa.call(this)};
g.k.yW=function(a,b){if(!this.isDisposed())if(b)if(b=R6(b),g.Ma(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.bi(b)),a){case "mdxSessionStatus":lUa(this,b);break;case "loungeToken":oUa(this,b);break;default:l8(this,"Unknown youtube message: "+a)}else l8(this,"Unable to parse message.");else l8(this,"No data in message.")};
g.k.vK=function(a,b,c,d){g.Bt(this.S);this.S=0;fUa(this.B,this.i.label,a,this.i.friendlyName,(0,g.E)(function(e){e?b(e):0<=d?(l8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.S=g.zt((0,g.E)(this.vK,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.hI=function(){return this.u};
g.k.AQ=function(a){this.isDisposed()||a||(l8(this,"Cast session died."),this.zg())};g.w(p8,j8);g.k=p8.prototype;g.k.kG=function(a){this.u=a;this.u.addUpdateListener(this.Ia)};
g.k.Ms=function(a){this.Ka=a;this.ma()};
g.k.stop=function(){yUa(this);this.u?this.u.stop((0,g.E)(this.zg,this,null),(0,g.E)(this.zg,this,"Failed to stop DIAL device.")):this.zg()};
g.k.xa=function(){yUa(this);this.u&&this.u.removeUpdateListener(this.Ia);this.u=null;j8.prototype.xa.call(this)};
g.k.BQ=function(a){this.isDisposed()||a||(l8(this,"DIAL session died."),this.D(),this.D=g.Ia,this.zg())};g.w(t8,j8);t8.prototype.stop=function(){this.zg()};
t8.prototype.kG=function(){};
t8.prototype.Ms=function(){g.Bt(this.u);this.u=NaN;var a=$6(this.B.Hh(),this.i.label);a?k8(this,a):this.zg(Error("No such screen"))};
t8.prototype.xa=function(){g.Bt(this.u);this.u=NaN;j8.prototype.xa.call(this)};g.w(u8,g.Zx);g.k=u8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.S,[chrome.cast.Capability.AUDIO_OUT]);this.X||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.E)(this.uV,this);c=new chrome.cast.ApiConfig(c,(0,g.E)(this.OM,this),e,d,a);c.customDialLaunchCallback=(0,g.E)(this.pU,this);
chrome.cast.initialize(c,(0,g.E)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),UTa(),this.u.subscribe("onlineScreenChange",(0,g.E)(this.iI,this)),this.B=BUa(this),chrome.cast.setCustomReceivers(this.B,g.Ia,(0,g.E)(function(f){this.le("Failed to set initial custom receivers: "+g.bi(f))},this)),this.ea("yt-remote-cast2-availability-change",w8(this)),b(!0))},this),(0,g.E)(function(f){this.le("Failed to initialize API: "+g.bi(f));
b(!1)},this))};
g.k.gX=function(a,b){v8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)v8("Unsetting old screen status: "+this.i.i.friendlyName),x8(this,null)}if(a&&b){if(!this.i){c=$6(this.u.Hh(),a);if(!c){v8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){v8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=zUa(this,c);a||(v8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,g.Ia,(0,g.E)(function(d){this.le("Failed to set initial custom receivers: "+g.bi(d))},this)));
v8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);x8(this,new t8(this.u,a),!0)}this.i.lG(b)}else v8("setConnectedScreenStatus: no screen.")};
g.k.hX=function(a){this.isDisposed()?this.le("Setting connection data on disposed cast v2"):this.i?this.i.Ms(a):this.le("Setting connection data without a session")};
g.k.DQ=function(){this.isDisposed()?this.le("Stopping session on disposed cast v2"):this.i?(this.i.stop(),x8(this,null)):v8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.E)(this.OM,this),(0,g.E)(this.OV,this))};
g.k.xa=function(){this.u.unsubscribe("onlineScreenChange",(0,g.E)(this.iI,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=RTa,b=g.Ga("yt.mdx.remote.debug.handlers_");g.Wb(b||[],a);g.he(this.i);g.Zx.prototype.xa.call(this)};
g.k.le=function(a){T7("Controller",a)};
g.k.QM=function(a,b){this.i==a&&(b||x8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.k.rV=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),v8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)v8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{v8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.ea("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:x8(this,
new t8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:x8(this,new p8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:x8(this,new m8(this.u,a,this.config_));break;default:this.le("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.le("Stopping receiver w/o session: "+a.friendlyName)}else this.le("onReceiverAction_ called without receiver.")};
g.k.pU=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.le("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.le("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return v8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.le('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);x8(this,new p8(this.u,b,this.C,this.config_))}b=this.i;b.S=a;b.S.appState==chrome.cast.DialAppState.RUNNING?(a=b.S.extraData||{},c=a.screenId||null,q8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=vUa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.S.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.Is(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=wUa(b,c)):a=wUa(b,c)):a=s8(b);return a};
g.k.OM=function(a){var b=this;if(!this.isDisposed()&&!this.I){v8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)v8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),x8(this,new m8(this.u,c,this.config_),!0);else{this.le("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=$6(this.u.Hh(),
d.label);e&&V6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(v8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.he(this.i),this.i=new m8(this.u,c,this.config_),this.i.subscribe("sessionScreen",(0,g.E)(this.QM,this,this.i)),this.i.subscribe("sessionFailed",function(){return AUa(b,b.i)}),this.i.Ms(null));
this.i.kG(a)}}};
g.k.CQ=function(){return this.i?this.i.hI():null};
g.k.OV=function(a){this.isDisposed()||(this.le("Failed to estabilish a session: "+g.bi(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&x8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.k.uV=function(a){v8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=w8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;w8(this)!=b&&this.ea("yt-remote-cast2-availability-change",w8(this))}};
g.k.iI=function(){this.isDisposed()||(this.B=BUa(this),v8("Updating custom receivers: "+g.bi(this.B)),chrome.cast.setCustomReceivers(this.B,g.Ia,(0,g.E)(function(){this.le("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",w8(this)))};
u8.prototype.setLaunchParams=u8.prototype.hX;u8.prototype.setConnectedScreenStatus=u8.prototype.gX;u8.prototype.stopSession=u8.prototype.DQ;u8.prototype.getCastSession=u8.prototype.CQ;u8.prototype.requestSession=u8.prototype.requestSession;u8.prototype.init=u8.prototype.init;u8.prototype.dispose=u8.prototype.dispose;var D8=[];g.k=I8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";J8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Gk=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.i=a.seekableEnd,this.D=a.duration,this.S=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Dc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Ij=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+K8(this):this.D};
g.k.clone=function(){return new I8(O8(this))};g.w(Q8,g.Zx);g.k=Q8.prototype;g.k.getState=function(){return this.B};
g.k.play=function(){S8(this)?(this.i?this.i.play(null,g.Ia,X8(this,"play")):W8(this,"play"),V8(this,1,M8(R8(this))),this.ea("remotePlayerChange")):T8(this,this.play)};
g.k.pause=function(){S8(this)?(this.i?this.i.pause(null,g.Ia,X8(this,"pause")):W8(this,"pause"),V8(this,2,M8(R8(this))),this.ea("remotePlayerChange")):T8(this,this.pause)};
g.k.seekTo=function(a){if(S8(this)){if(this.i){var b=R8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Dc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ia,X8(this,"seekTo",{newTime:a}))}else W8(this,"seekTo",{newTime:a});V8(this,3,a);this.ea("remotePlayerChange")}else T8(this,g.Pa(this.seekTo,a))};
g.k.stop=function(){if(S8(this)){this.i?this.i.stop(null,g.Ia,X8(this,"stopVideo")):W8(this,"stopVideo");var a=R8(this);a.index=-1;a.videoId="";J8(a);U8(this,a);this.ea("remotePlayerChange")}else T8(this,this.stop)};
g.k.setVolume=function(a,b){if(S8(this)){var c=R8(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.E)(function(){T7("CP","set receiver volume: "+d)},this),(0,g.E)(function(){this.le("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.E)(function(){T7("CP","set receiver muted: "+b)},this),(0,g.E)(function(){this.le("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);W8(this,"setVolume",e)}c.muted=b;c.volume=a;U8(this,c)}else T8(this,g.Pa(this.setVolume,a,b))};
g.k.jI=function(a,b){if(S8(this)){var c=R8(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.bi(b.style),g.Ne(a,c.trackData));W8(this,"setSubtitlesTrack",a);U8(this,c)}else T8(this,g.Pa(this.jI,a,b))};
g.k.setAudioTrack=function(a,b){S8(this)?(b=b.getLanguageInfo().getId(),W8(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=R8(this),a.audioTrackId=b,U8(this,a)):T8(this,g.Pa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=R8(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);N8(l,a,c||0);void 0!==b&&(L8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.bi(h));W8(this,"setPlaylist",m);d||U8(this,l)};
g.k.EA=function(a,b){if(S8(this)){if(a&&b){var c=R8(this);N8(c,a,b);U8(this,c)}W8(this,"previous")}else T8(this,g.Pa(this.EA,a,b))};
g.k.nextVideo=function(a,b){if(S8(this)){if(a&&b){var c=R8(this);N8(c,a,b);U8(this,c)}W8(this,"next")}else T8(this,g.Pa(this.nextVideo,a,b))};
g.k.Or=function(){if(S8(this)){W8(this,"clearPlaylist");var a=R8(this);a.reset();U8(this,a);this.ea("remotePlayerChange")}else T8(this,this.Or)};
g.k.RJ=function(){S8(this)?W8(this,"dismissAutoplay"):T8(this,this.RJ)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.Zx.prototype.dispose.call(this)};
g.k.xa=function(){NUa(this);this.C=null;this.D.clear();P8(this,null);g.Zx.prototype.xa.call(this)};
g.k.mG=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.i.length&&(b.i=b.u,b.i.reverse(),b.u=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.pV=function(a,b){this.ea(a,b)};
g.k.aU=function(a){if(!a)this.Bw(null),P8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=R8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)T7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,U8(this,b)}};
g.k.Bw=function(a){T7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.S);if(this.i=a)this.i.addUpdateListener(this.S),OUa(this),this.ea("remotePlayerChange")};
g.k.ZT=function(a){a?(OUa(this),this.ea("remotePlayerChange")):this.Bw(null)};
g.k.HG=function(){W8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.hU=function(){var a=KUa();a&&P8(this,a)};
g.k.le=function(a){T7("CP",a)};g.w(Y8,g.Zx);g.k=Y8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ba&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.fc.listId=c);this.fc.videoId=d;this.fc.index=l||0;this.fc.state=3;L8(this.fc,
n);this.C="UNSUPPORTED";c=this.Ba?"setInitialState":"setPlaylist";Z8("Connecting with "+c+" and params: "+g.bi(m));this.i.connect({method:c,params:g.bi(m)},a,XSa())}else Z8("Connecting without params"),this.i.connect({},a,XSa());RUa(this)};
g.k.XA=function(a){this.i.XA(a)};
g.k.dispose=function(){this.isDisposed()||(g.Fa("yt.mdx.remote.remoteClient_",null,void 0),this.ea("beforeDispose"),$8(this,3));g.Zx.prototype.dispose.call(this)};
g.k.xa=function(){a9(this);c9(this);b9(this);g.Bt(this.K);this.K=NaN;g.Bt(this.S);this.S=NaN;this.B=null;g.Gu(this.X);this.X.length=0;this.i.dispose();g.Zx.prototype.xa.call(this);this.C=this.I=this.u=this.fc=this.i=null};
g.k.eS=function(){this.Xr(2)};
g.k.eU=function(){Z8("Channel opened");this.va&&(this.va=!1,b9(this),this.Z=g.zt((0,g.E)(function(){Z8("Timing out waiting for a screen.");this.Xr(1)},this),15E3));
aTa(PTa(this.i),this.Ka)};
g.k.bU=function(){Z8("Channel closed");isNaN(this.D)?e7(!0):e7();this.dispose()};
g.k.cU=function(a,b){e7();isNaN(this.Nv())?(b&&"shortLived"==this.Aa&&this.ea("browserChannelAuthError",a),Z8("Channel error: "+a+" without reconnection"),this.dispose()):(this.va=!0,Z8("Channel error: "+a+" with reconnection in "+this.Nv()+" ms"),$8(this,2))};
g.k.fL=function(a){if(!this.u||0===this.u.length)return!1;for(var b=g.r(this.u),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.dU=function(a){a.params?Z8("Received: action="+a.action+", params="+g.bi(a.params)):Z8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=R6(a.params.devices);this.u=g.tm(a,function(c){return new T6(c)});
a=!!g.Nb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
UUa(this,a);a=this.fL("mlm");this.ea("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.Xb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
UUa(this,!1);break;case "remoteConnected":var b=new T6(R6(a.params.device));g.Nb(this.u,function(c){return b?c.id==b.id:!1})||KSa(this.u,b);
break;case "remoteDisconnected":b=new T6(R6(a.params.device));g.Xb(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":WUa(this,a);break;case "nowPlaying":YUa(this,a);break;case "onStateChange":XUa(this,a);break;case "onAdStateChange":ZUa(this,a);break;case "onVolumeChanged":$Ua(this,a);break;case "onSubtitlesTrackChanged":VUa(this,a);break;case "nowAutoplaying":aVa(this,a);break;case "autoplayDismissed":this.ea("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.ea("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.ea("autoplayModeChange",this.C);"DISABLED"==this.C&&this.ea("autoplayDismissed");break;case "onHasPreviousNextChanged":bVa(this,a);break;case "requestAssistedSignIn":this.ea("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.ea("loopModeChange",a.params.loopMode);break;default:Z8("Unrecognized action: "+a.action)}};
g.k.UW=function(){if(this.B){var a=this.B;this.B=null;this.fc.videoId!=a&&d9(this,"getNowPlaying")}};
g.k.aS=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Nv())?O7(this.i)&&isNaN(this.D)&&(a=1):a=2);return a};
g.k.Xr=function(a){Z8("Disconnecting with "+a);g.Fa("yt.mdx.remote.remoteClient_",null,void 0);a9(this);this.ea("beforeDisconnect",a);1==a&&e7();QTa(this.i,a);this.dispose()};
g.k.YR=function(){var a=this.fc;this.B&&(a=this.fc.clone(),N8(a,this.B,a.index));return O8(a)};
g.k.iX=function(a){var b=new I8(a);b.videoId&&b.videoId!=this.fc.videoId&&(this.B=b.videoId,g.Bt(this.K),this.K=g.zt((0,g.E)(this.UW,this),5E3));var c=[];this.fc.listId==b.listId&&this.fc.videoId==b.videoId&&this.fc.index==b.index||c.push("remoteQueueChange");this.fc.playerState==b.playerState&&this.fc.volume==b.volume&&this.fc.muted==b.muted&&M8(this.fc)==M8(b)&&g.bi(this.fc.trackData)==g.bi(b.trackData)||c.push("remotePlayerChange");this.fc.reset(a);g.nc(c,function(d){this.ea(d)},this)};
g.k.uK=function(){var a=this.i.I.id,b=g.Nb(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Nv=function(){var a=this.i;return a.u.isActive()?a.u.u-Date.now():NaN};
g.k.VR=function(){return this.C||"UNSUPPORTED"};
g.k.WR=function(){return this.I||""};
g.k.EQ=function(){if(!isNaN(this.Nv())){var a=this.i.u;g.Mq(a.i);a.start()}};
g.k.fX=function(a,b){d9(this,a,b);TUa(this)};
g.k.kI=function(){var a=g.Tt("SID","")||"",b=g.Tt("SAPISID","")||"",c=g.Tt("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.yc(g.gb(a),2);b=g.yc(g.gb(b),2);c=g.yc(g.gb(c),2);return g.yc(g.gb(a+","+b+","+c),2)};
Y8.prototype.subscribe=Y8.prototype.subscribe;Y8.prototype.unsubscribeByKey=Y8.prototype.cg;Y8.prototype.getProxyState=Y8.prototype.aS;Y8.prototype.disconnect=Y8.prototype.Xr;Y8.prototype.getPlayerContextData=Y8.prototype.YR;Y8.prototype.setPlayerContextData=Y8.prototype.iX;Y8.prototype.getOtherConnectedRemoteId=Y8.prototype.uK;Y8.prototype.getReconnectTimeout=Y8.prototype.Nv;Y8.prototype.getAutoplayMode=Y8.prototype.VR;Y8.prototype.getAutoplayVideoId=Y8.prototype.WR;Y8.prototype.reconnect=Y8.prototype.EQ;
Y8.prototype.sendMessage=Y8.prototype.fX;Y8.prototype.getXsrfToken=Y8.prototype.kI;Y8.prototype.isCapabilitySupportedOnConnectedDevices=Y8.prototype.fL;g.w(e9,X7);g.k=e9.prototype;g.k.Hh=function(a){return this.Se.$_gs(a)};
g.k.contains=function(a){return!!this.Se.$_c(a)};
g.k.get=function(a){return this.Se.$_g(a)};
g.k.start=function(){this.Se.$_st()};
g.k.add=function(a,b,c){this.Se.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Se.$_r(a,b,c)};
g.k.rB=function(a,b,c,d){this.Se.$_un(a,b,c,d)};
g.k.xa=function(){for(var a=0,b=this.i.length;a<b;++a)this.Se.$_ubk(this.i[a]);this.i.length=0;this.Se=null;X7.prototype.xa.call(this)};
g.k.FQ=function(){this.ea("screenChange")};
g.k.WU=function(){this.ea("onlineScreenChange")};
g8.prototype.$_st=g8.prototype.start;g8.prototype.$_gspc=g8.prototype.zQ;g8.prototype.$_gsppc=g8.prototype.gI;g8.prototype.$_c=g8.prototype.contains;g8.prototype.$_g=g8.prototype.get;g8.prototype.$_a=g8.prototype.add;g8.prototype.$_un=g8.prototype.rB;g8.prototype.$_r=g8.prototype.remove;g8.prototype.$_gs=g8.prototype.Hh;g8.prototype.$_gos=g8.prototype.fI;g8.prototype.$_s=g8.prototype.subscribe;g8.prototype.$_ubk=g8.prototype.cg;var r9=null,x9=!1,f9=null,g9=null,w9=null,k9=[];g.w(y9,g.H);g.k=y9.prototype;g.k.xa=function(){g.H.prototype.xa.call(this);this.i.stop();this.B.stop();this.S.stop();this.Z();var a=this.Sb;a.unsubscribe("proxyStateChange",this.LM,this);a.unsubscribe("remotePlayerChange",this.Fw,this);a.unsubscribe("remoteQueueChange",this.qA,this);a.unsubscribe("previousNextChange",this.IM,this);a.unsubscribe("nowAutoplaying",this.CM,this);a.unsubscribe("autoplayDismissed",this.fM,this);this.Sb=this.u=null};
g.k.mj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.Sb.B)if(z9(this)){if(!R8(this.Sb).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":R8(this.Sb).Dc()?this.Sb.pause():this.Sb.play();break;case "control_play":this.Sb.play();break;case "control_pause":this.Sb.pause();break;case "control_seek":this.K.eI(c[0],c[1]);break;case "control_subtitles_set_track":A9(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.J.getCurrentTime();B9(this,0===c?void 0:c);break;case "control_seek":B9(this,c[0]);break;case "control_subtitles_set_track":A9(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.VT=function(a){this.S.tQ(a)};
g.k.OX=function(a){this.mj("control_subtitles_set_track",g.Ge(a)?null:a)};
g.k.dO=function(){var a=this.J.getOption("captions","track");g.Ge(a)||A9(this,a)};
g.k.Wb=function(a){this.u.Wb(a,this.J.getVideoData().lengthSeconds)};
g.k.HU=function(){g.Ge(this.C)||mVa(this,this.C);this.D=!1};
g.k.LM=function(a,b){this.B.stop();2===b&&this.XN()};
g.k.Fw=function(){if(z9(this)){this.i.stop();var a=R8(this.Sb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.uf=1;break;case 1082:case 1083:this.u.uf=0;break;default:this.u.uf=-1}switch(a.playerState){case 1081:case 1:this.Tb(new g.NJ(8));this.WN();break;case 1085:case 3:this.Tb(new g.NJ(9));break;case 1083:case 0:this.Tb(new g.NJ(2));this.K.stop();this.Wb(this.J.getVideoData().lengthSeconds);break;case 1084:this.Tb(new g.NJ(4));break;case 2:this.Tb(new g.NJ(4));this.Wb(M8(a));
break;case -1:this.Tb(new g.NJ(64));break;case -1E3:this.Tb(new g.NJ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=R8(this.Sb).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,mVa(this,a));a=R8(this.Sb);-1===a.volume||Math.round(this.J.getVolume())===a.volume&&this.J.isMuted()===a.muted||this.X.isActive()||this.FO()}else lVa(this)};
g.k.IM=function(){this.J.ea("mdxpreviousnextchange")};
g.k.qA=function(){z9(this)||lVa(this)};
g.k.CM=function(a){isNaN(a)||this.J.ea("mdxnowautoplaying",a)};
g.k.fM=function(){this.J.ea("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){z9(this)&&this.Sb.setAudioTrack(this.J.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===R8(this.Sb).playerState?B9(this,a):b&&this.Sb.seekTo(a)};
g.k.FO=function(){var a=this;if(z9(this)){var b=R8(this.Sb);this.events.hc(this.ma);b.muted?this.J.mute():this.J.unMute();this.J.setVolume(b.volume);this.ma=this.events.T(this.J,"onVolumeChange",function(c){kVa(a,c)})}};
g.k.WN=function(){this.i.stop();if(!this.Sb.isDisposed()){var a=R8(this.Sb);a.Dc()&&this.Tb(new g.NJ(8));this.Wb(M8(a));this.i.start()}};
g.k.XN=function(){this.B.stop();this.i.stop();var a=this.Sb.C.getReconnectTimeout();2==this.Sb.B&&!isNaN(a)&&this.B.start()};
g.k.Tb=function(a){this.B.stop();var b=this.I;if(!g.SJ(b,a)){var c=g.T(a,2);c!==g.T(this.I,2)&&this.J.zt(c);this.I=a;oVa(this.u,b,a)}};g.w(C9,g.W);C9.prototype.wd=function(){this.i.show()};
C9.prototype.Eb=function(){this.i.hide()};
C9.prototype.u=function(){S6("mdx-privacy-popup-cancel");this.Eb()};
C9.prototype.B=function(){S6("mdx-privacy-popup-confirm");this.Eb()};g.w(D9,g.W);D9.prototype.onStateChange=function(a){nVa(this,a.state)};g.w(E9,g.MP);E9.prototype.D=function(){var a=this.J.getOption("remote","receivers");a&&1<a.length&&!this.J.getOption("remote","quickCast")?(this.zo=g.oc(a,this.i,this),g.NP(this,g.tm(a,this.i)),a=this.J.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Yh(a),this.enable(!0)):this.enable(!1)};
E9.prototype.i=function(a){return a.key};
E9.prototype.dj=function(a){return"cast-selector-receiver"===a?"Cast...":this.zo[a].name};
E9.prototype.Bf=function(a){g.MP.prototype.Bf.call(this,a);this.J.setOption("remote","currentReceiver",this.zo[a]);this.Ab.Eb()};g.w(F9,g.WM);g.k=F9.prototype;
g.k.create=function(){var a=this.player.V(),b=g.RE(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};fVa(b,a);this.subscriptions.push(g.lv("yt-remote-before-disconnect",this.UT,this));this.subscriptions.push(g.lv("yt-remote-connection-change",this.vV,this));this.subscriptions.push(g.lv("yt-remote-receiver-availability-change",this.KM,
this));this.subscriptions.push(g.lv("yt-remote-auto-connect",this.tV,this));this.subscriptions.push(g.lv("yt-remote-receiver-resumed",this.sV,this));this.subscriptions.push(g.lv("mdx-privacy-popup-confirm",this.JW,this));this.subscriptions.push(g.lv("mdx-privacy-popup-cancel",this.IW,this));this.KM()};
g.k.load=function(){this.player.cancelPlayback();g.WM.prototype.load.call(this);this.di=new y9(this,this.player,this.Sb);var a=(a=jVa())?a.currentTime:0;var b=v9()?new Q8(p9(),void 0):null;0==a&&b&&(a=M8(R8(b)));0!==a&&this.Wb(a);oVa(this,this.xd,this.xd);this.player.Xk(6)};
g.k.unload=function(){this.player.ea("mdxautoplaycanceled");this.Zm=this.Nk;(0,g.ie)(this.di,this.Sb);this.Sb=this.di=null;g.WM.prototype.unload.call(this);this.player.Xk(5);G9(this)};
g.k.xa=function(){g.mv(this.subscriptions);g.WM.prototype.xa.call(this)};
g.k.Pk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.di.mj.apply(this.di,[a].concat(g.v(c)))};
g.k.getAdState=function(){return this.uf};
g.k.Gk=function(){return this.Sb?R8(this.Sb).Gk:!1};
g.k.hasNext=function(){return this.Sb?R8(this.Sb).hasNext:!1};
g.k.Wb=function(a,b){this.vL=a||0;this.player.ea("progresssync",a,b);this.player.Ma("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.vL};
g.k.getProgressState=function(){var a=R8(this.Sb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().N("web_player_mdx_allow_seeking_change_killswitch")?this.player.rf():!a.isAdPlaying()&&this.player.rf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+K8(a):a.B,isAtLiveHead:1>=(a.u?a.i+K8(a):a.i)-this.getCurrentTime(),loaded:a.S,seekableEnd:a.u?a.i+K8(a):a.i,seekableStart:0<
a.C?a.C+K8(a):a.C}};
g.k.nextVideo=function(){this.Sb&&this.Sb.nextVideo()};
g.k.EA=function(){this.Sb&&this.Sb.EA()};
g.k.UT=function(a){1===a&&(this.JF=this.Sb?R8(this.Sb):null)};
g.k.vV=function(){var a=v9()?new Q8(p9(),void 0):null;if(a){var b=this.Zm;this.loaded&&this.unload();this.Sb=a;this.JF=null;b.key!==this.Nk.key&&(this.Zm=b,this.load())}else(0,g.he)(this.Sb),this.Sb=null,this.loaded&&(this.unload(),(a=this.JF)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,M8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.KM=function(){var a=[this.Nk],b=a.concat,c=gVa();E8()&&g.Ny("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.zo=b.call(a,c);a=q9()||this.Nk;H9(this,a);this.player.Ma("onMdxReceiversChange")};
g.k.tV=function(){var a=q9();H9(this,a)};
g.k.sV=function(){this.Zm=q9()};
g.k.JW=function(){this.Ow=!0;G9(this);x9=!1;r9&&t9(r9,1);r9=null};
g.k.IW=function(){this.Ow=!1;G9(this);H9(this,this.Nk);this.Zm=this.Nk;x9=!1;r9=null;this.player.playVideo()};
g.k.jf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.zo;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?G8():H9(this,b)),this.loaded?this.Zm:this.Nk;case "quickCast":return 2===this.zo.length&&"cast-selector-receiver"===this.zo[1].key?(b&&G8(),!0):!1}};
g.k.HG=function(){this.Sb.HG()};
g.k.Ki=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.VM("remote",F9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 02:12:34 Nov 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:15:14 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 152.21
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.059
  cdx.remote: 0.058
  esindex: 0.027
  LoadShardBlock: 86.962 (3)
  PetaboxLoader3.datanode: 103.781 (4)
  load_resource: 213.065
  PetaboxLoader3.resolve: 190.413
*/