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

(function(g){var window=this;'use strict';var BRa=function(a,b){return g.ec(a,b)},CRa=function(a,b){b=b instanceof g.mf?b:g.sf(b,/^data:image\//i.test(b));
a.src=g.nf(b)},N6=function(a){g.Sj(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Qa()).toString(36));
return a},O6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Xj(a.u,b,c)},DRa=function(a){if(a instanceof g.eo)return a;
if("function"==typeof a.Lg)return a.Lg(!1);if(g.La(a)){var b=0,c=new g.eo;c.uj=function(){for(;;){if(b>=a.length)throw g.Uq;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");},ERa=function(a,b,c){if(g.La(a))try{g.Ob(a,b,c)}catch(d){if(d!==g.Uq)throw d;
}else{a=DRa(a);try{for(;;)b.call(c,a.uj(),void 0,a)}catch(d){if(d!==g.Uq)throw d;}}},FRa=function(a,b){var c=[];
ERa(b,function(d){try{var e=g.ur.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.tr(e)&&c.push(d)},a);
return c},GRa=function(a,b){FRa(a,b).forEach(function(c){g.ur.prototype.remove.call(this,c)},a)},HRa=function(a){if(a.ma){if(a.ma.locationOverrideToken)return{locationOverrideToken:a.ma.locationOverrideToken};
if(null!=a.ma.latitudeE7&&null!=a.ma.longitudeE7)return{latitudeE7:a.ma.latitudeE7,longitudeE7:a.ma.longitudeE7}}return null},IRa=function(a,b){g.ub(a,b)||a.push(b)},P6=function(a){var b=0,c;
for(c in a)b++;return b},JRa=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Q6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return JRa(a)},KRa=function(a,b,c,d){var e=new g.Kj(null,void 0);
a&&g.Lj(e,a);b&&g.Mj(e,b);c&&g.Nj(e,c);d&&(e.K=d);return e},R6=function(a,b){g.bv[a]=!0;
var c=g.$u();c&&c.publish.apply(c,arguments);g.bv[a]=!1},S6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Vq;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",LRa(this,a.capabilities||""),MRa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},LRa=function(a,b){a.capabilities.clear();
g.Do(b.split(","),g.Pa(BRa,NRa)).forEach(function(c){a.capabilities.add(c)})},MRa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},T6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},U6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},ORa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},PRa=function(a){return new T6(a)},QRa=function(a){return Array.isArray(a)?g.lm(a,PRa):[]},V6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},W6=function(a){return Array.isArray(a)?"["+g.lm(a,V6).join(",")+"]":"null"},X6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},RRa=function(a){return g.lm(a,function(b){return{key:b.id,
name:b.name}})},Y6=function(a,b){return g.rb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},Z6=function(a,b){return g.rb(a,function(c){return U6(c,b)})},SRa=function(){var a=(0,g.Oz)();
a&&GRa(a,a.i.Lg(!0))},$6=function(){var a=g.Rz("yt-remote-connected-devices")||[];
g.Lb(a);return a},TRa=function(a){if(g.wb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.lm(a,function(d,e){return 0==e?d:d.substring(c.length)})},URa=function(a){g.Qz("yt-remote-connected-devices",a,86400)},b7=function(){if(a7)return a7;
var a=g.Rz("yt-remote-device-id");a||(a=X6(),g.Qz("yt-remote-device-id",a,31536E3));for(var b=$6(),c=1,d=a;g.ub(b,d);)c++,d=a+"#"+c;return a7=d},c7=function(){var a=$6(),b=b7();
g.ub(a,b);g.Tz()&&g.Nb(a,b);a=TRa(a);if(g.wb(a))try{g.Lt("remote_sid")}catch(c){}else try{g.Jt("remote_sid",a.join(","),-1)}catch(c){}},VRa=function(){return g.Rz("yt-remote-session-browser-channel")},WRa=function(){return g.Rz("yt-remote-local-screens")||[]},XRa=function(){g.Qz("yt-remote-lounge-token-expiration",!0,86400)},YRa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.lm(WRa(),function(d){return d.loungeToken}),c=g.lm(a,function(d){return d.loungeToken});
g.mm(c,function(d){return!g.ub(b,d)})&&XRa();
g.Qz("yt-remote-local-screens",a,31536E3)},ZRa=function(a,b){g.Qz("yt-remote-session-browser-channel",a);
g.Qz("yt-remote-session-screen-id",b);a=$6();b=b7();g.ub(a,b)||a.push(b);URa(a);c7()},d7=function(a){a||(g.Sz("yt-remote-session-screen-id"),g.Sz("yt-remote-session-video-id"));
c7();a=$6();g.zb(a,b7());URa(a)},$Ra=function(){if(!e7){var a=g.Er();
a&&(e7=new g.or(a))}},aSa=function(){$Ra();
return e7?!!e7.get("yt-remote-use-staging-server"):!1},f7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},bSa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},cSa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},g7=function(a){a.length?dSa(a.shift(),function(){g7(a)}):h7()},eSa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},dSa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Nk(d,g.cr(a));(document.head||document.documentElement).appendChild(d)},fSa=function(){var a=f7(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20211001013923/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20211001013923/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},h7=function(){var a=cSa();
a&&a(!1,"No cast extension found")},i7=function(){if(gSa){var a=2,b=cSa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;dSa("//web.archive.org/web/20211001013923/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",h7,c)}},hSa=function(){i7();
var a=fSa();a.push("//web.archive.org/web/20211001013923/https://www.gstatic.com/eureka/clank/cast_sender.js");g7(a)},jSa=function(){i7();
var a=fSa();a.push.apply(a,g.v(iSa.map(eSa)));a.push("//web.archive.org/web/20211001013923/https://www.gstatic.com/eureka/clank/cast_sender.js");g7(a)},j7=function(a,b,c){g.I.call(this);
this.J=null!=c?(0,g.D)(a,c):a;this.Tf=b;this.D=(0,g.D)(this.hQ,this);this.i=!1;this.u=0;this.B=this.Lb=null;this.C=[]},k7=function(a,b,c){g.I.call(this);
this.C=null!=c?a.bind(c):a;this.Tf=b;this.B=null;this.i=!1;this.u=0;this.Lb=null},l7=function(a){a.Lb=g.sh(function(){a.Lb=null;
a.i&&!a.u&&(a.i=!1,l7(a))},a.Tf);
var b=a.B;a.B=null;a.C.apply(null,b)},m7=function(){},n7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},p7=function(a){o7.dispatchEvent(new kSa(o7,a))},kSa=function(a,b){g.re.call(this,"statevent",a);
this.stat=b},q7=function(a,b,c,d){this.i=a;
this.B=b;this.S=c;this.K=d||1;this.u=45E3;this.C=new g.Yj(this);this.J=new g.rh;this.J.setInterval(250)},mSa=function(a,b,c){a.wt=1;
a.Pm=N6(b.clone());a.qq=c;a.D=!0;lSa(a,null)},r7=function(a,b,c,d,e){a.wt=1;
a.Pm=N6(b.clone());a.qq=null;a.D=c;e&&(a.BN=!1);lSa(a,d)},lSa=function(a,b){a.Us=Date.now();
s7(a);a.uo=a.Pm.clone();O6(a.uo,"t",a.K);a.nB=0;a.Lf=a.i.cD(a.i.hx()?b:null);0<a.bC&&(a.AA=new k7((0,g.D)(a.DO,a,a.Lf),a.bC));a.C.Qa(a.Lf,"readystatechange",a.iQ);b=a.Ro?g.mc(a.Ro):{};a.qq?(a.kB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Lf.send(a.uo,a.kB,a.qq,b)):(a.kB="GET",a.BN&&!g.ug&&(b.Connection="close"),a.Lf.send(a.uo,a.kB,null,b));a.i.vj(1)},oSa=function(a,b){var c=a.nB,d=b.indexOf("\n",c);
if(-1==d)return t7;c=Number(b.substring(c,d));if(isNaN(c))return nSa;d+=1;if(d+c>b.length)return t7;b=b.substr(d,c);a.nB=d+c;return b},qSa=function(a,b){a.Us=Date.now();
s7(a);var c=b?window.location.hostname:"";a.uo=a.Pm.clone();g.Sj(a.uo,"DOMAIN",c);g.Sj(a.uo,"t",a.K);try{a.Lj=new ActiveXObject("htmlfile")}catch(m){u7(a);a.Jm=7;p7(22);v7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in w7)f=w7[f];else if(f in pSa)f=w7[f]=pSa[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
w7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Jf(g.cf("b/12014412"),d);a.Lj.open();a.Lj.write(g.Ff(c));a.Lj.close();a.Lj.parentWindow.m=(0,g.D)(a.dW,a);a.Lj.parentWindow.d=(0,g.D)(a.LM,a,!0);a.Lj.parentWindow.rpcClose=(0,g.D)(a.LM,a,!1);c=a.Lj.createElement("DIV");a.Lj.parentWindow.document.body.appendChild(c);d=g.rf(a.uo.toString());d=g.ag(g.nf(d));d=g.Jf(g.cf("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Lf(c,d);a.i.vj(1)},s7=function(a){a.SG=Date.now()+
a.u;
rSa(a,a.u)},rSa=function(a,b){if(null!=a.It)throw Error("WatchDog timer not null");
a.It=n7((0,g.D)(a.kW,a),b)},x7=function(a){a.It&&(g.C.clearTimeout(a.It),a.It=null)},v7=function(a){a.i.rf()||a.jp||a.i.Px(a)},u7=function(a){x7(a);
g.oe(a.AA);a.AA=null;a.J.stop();g.ak(a.C);if(a.Lf){var b=a.Lf;a.Lf=null;b.abort();b.dispose()}a.Lj&&(a.Lj=null)},y7=function(a,b){try{a.i.EM(a,b),a.i.vj(4)}catch(c){}},tSa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;sSa(a,b,function(h){h?c(!0):g.C.setTimeout(function(){tSa(a,b,c,d,f)},f)})}},sSa=function(a,b,c){var d=new Image;
d.onload=function(){try{z7(d),c(!0)}catch(e){}};
d.onerror=function(){try{z7(d),c(!1)}catch(e){}};
d.onabort=function(){try{z7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{z7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
CRa(d,a)},z7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},uSa=function(a){this.i=a;
this.u=new m7},vSa=function(a){var b=A7(a.i,a.Mu,"/mail/images/cleardot.gif");
N6(b);tSa(b.toString(),5E3,(0,g.D)(a.ZQ,a),3,2E3);a.vj(1)},C7=function(a){var b=a.i.Z;
if(null!=b)p7(5),b?(p7(11),B7(a.i,a,!1)):(p7(12),B7(a.i,a,!0));else if(a.nh=new q7(a,void 0,void 0,void 0),a.nh.Ro=a.cC,b=a.i,b=A7(b,b.hx()?a.nu:null,a.dC),p7(5),!g.Kc||g.Ec(10))O6(b,"TYPE","xmlhttp"),r7(a.nh,b,!1,a.nu,!1);else{O6(b,"TYPE","html");var c=a.nh;a=!!a.nu;c.wt=3;c.Pm=N6(b.clone());qSa(c,a)}},D7=function(a,b,c){this.i=1;
this.u=[];this.C=[];this.D=new m7;this.S=a||null;this.Z=null!=b?b:null;this.J=c||!1},wSa=function(a,b){this.i=a;
this.map=b;this.context=null},xSa=function(a,b,c,d){g.re.call(this,"timingevent",a);
this.size=b;this.Xw=d},ySa=function(a){g.re.call(this,"serverreachability",a)},BSa=function(a){zSa(a);
if(3==a.i){var b=a.nw++,c=a.Iy.clone();g.Sj(c,"SID",a.B);g.Sj(c,"RID",b);g.Sj(c,"TYPE","terminate");E7(a,c);b=new q7(a,a.B,b,void 0);b.wt=2;b.Pm=N6(c.clone());CRa(new Image,b.Pm.toString());b.Us=Date.now();s7(b)}ASa(a)},CSa=function(a){a.zR(1,0);
a.Iy=A7(a,null,a.eC);F7(a)},zSa=function(a){a.Tm&&(a.Tm.abort(),a.Tm=null);
a.Ge&&(a.Ge.cancel(),a.Ge=null);a.Bl&&(g.C.clearTimeout(a.Bl),a.Bl=null);G7(a);a.Vg&&(a.Vg.cancel(),a.Vg=null);a.hn&&(g.C.clearTimeout(a.hn),a.hn=null)},DSa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new wSa(a.fT++,b));2!=a.i&&3!=a.i||F7(a)},ESa=function(a){var b=0;
a.Ge&&b++;a.Vg&&b++;return b},F7=function(a){a.Vg||a.hn||(a.hn=n7((0,g.D)(a.JM,a),0),a.Or=0)},GSa=function(a,b){if(1==a.i){if(!b){a.nw=Math.floor(1E5*Math.random());
b=a.nw++;var c=new q7(a,"",b,void 0);c.Ro=a.Xj;var d=H7(a),e=a.Iy.clone();g.Sj(e,"RID",b);g.Sj(e,"CVER","1");E7(a,e);mSa(c,e,d);a.Vg=c;a.i=2}}else 3==a.i&&(b?FSa(a,b):0==a.u.length||a.Vg||FSa(a))},FSa=function(a,b){if(b)if(6<a.kp){a.u=a.C.concat(a.u);
a.C.length=0;var c=a.nw-1;b=H7(a)}else c=b.S,b=b.qq;else c=a.nw++,b=H7(a);var d=a.Iy.clone();g.Sj(d,"SID",a.B);g.Sj(d,"RID",c);g.Sj(d,"AID",a.zs);E7(a,d);c=new q7(a,a.B,c,a.Or+1);c.Ro=a.Xj;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Vg=c;mSa(c,d,b)},E7=function(a,b){a.Mf&&(a=a.Mf.ZJ())&&g.Tb(a,function(c,d){g.Sj(b,d,c)})},H7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.kp&&0<b){var d=a.u[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Sq:e.Sq},f++){e.Sq=a.u[f].i;var h=a.u[f].map;e.Sq=6>=a.kp?f:e.Sq-d;try{g.Tb(h,function(l){return function(m,n){c.push("req"+l.Sq+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Sq+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.u.splice(0,b));
return c.join("&")},HSa=function(a){a.Ge||a.Bl||(a.K=1,a.Bl=n7((0,g.D)(a.IM,a),0),a.yr=0)},I7=function(a){if(a.Ge||a.Bl||3<=a.yr)return!1;
a.K++;a.Bl=n7((0,g.D)(a.IM,a),ISa(a,a.yr));a.yr++;return!0},B7=function(a,b,c){a.iB=c;
a.Yj=b.fl;a.J||CSa(a)},G7=function(a){null!=a.vp&&(g.C.clearTimeout(a.vp),a.vp=null)},ISa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},J7=function(a,b){if(2==b||9==b){var c=null;
a.Mf&&(c=null);var d=(0,g.D)(a.lX,a);c||(c=new g.Kj("//web.archive.org/web/20211001013923/https://www.google.com/images/cleardot.gif"),N6(c));sSa(c.toString(),1E4,d)}else p7(2);JSa(a,b)},JSa=function(a,b){a.i=0;
a.Mf&&a.Mf.nJ(b);ASa(a);zSa(a)},ASa=function(a){a.i=0;
a.Yj=-1;if(a.Mf)if(0==a.C.length&&0==a.u.length)a.Mf.PC();else{g.Db(a.C);var b=g.Db(a.u);a.C.length=0;a.u.length=0;a.Mf.PC(b)}},A7=function(a,b,c){var d=g.Tj(c);
if(""!=d.i)b&&g.Mj(d,b+"."+d.i),g.Nj(d,d.B);else{var e=window.location;d=KRa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.uv&&g.Tb(a.uv,function(f,h){g.Sj(d,h,f)});
g.Sj(d,"VER",a.kp);E7(a,d);return d},KSa=function(){},LSa=function(){this.i=[];
this.u=[]},MSa=function(a,b){this.action=a;
this.params=b||{}},K7=function(a,b){g.I.call(this);
this.i=new g.M(this.UV,0,this);g.J(this,this.i);this.Tf=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.D)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.D)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},L7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ya=a;this.J=b;this.B=new g.nr;this.u=new K7(this.PW,this);this.i=null;this.Y=!1;this.D=null;this.Z="";this.S=this.C=0;this.K=[];this.Aa=c;this.ma=d;this.Da=e},NSa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.iB,sessionId:a.i.B,arrayId:a.i.zs}},OSa=function(a,b){a.S=b||0;
a.u.stop();M7(a);a.i&&(3==a.i.getState()&&GSa(a.i),BSa(a.i));a.S=0},N7=function(a){return!!a.i&&3==a.i.getState()},M7=function(a){if(a.i){var b=a.ma(),c=a.i.Xj||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.Xj=c}},O7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.di(4,a))||"";b&&(this.port=":"+b);this.domain=g.ei(a)||"";a=g.Qb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.nb(a,"10.0")&&(this.u=!1))},P7=function(a,b){var c=a.i;
a.u&&(c="https://"+a.domain+a.port+a.i);return g.pi(c+b,{})},Q7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Pa(a.C,d,!0),onError:g.Pa(a.B,e),onTimeout:g.Pa(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.xt(b,a)},SSa=function(){var a=PSa;
QSa();R7.push(a);RSa()},S7=function(a,b){QSa();
var c=TSa(a,String(b));g.wb(R7)?USa(c):(RSa(),g.Ob(R7,function(d){d(c)}))},QSa=function(){R7||(R7=g.Ga("yt.mdx.remote.debug.handlers_")||[],g.Fa("yt.mdx.remote.debug.handlers_",R7,void 0))},USa=function(a){var b=(T7+1)%50;
T7=b;U7[b]=a;V7||(V7=49==b)},RSa=function(){var a=R7;
if(U7[0]){var b=V7?T7:-1;do{b=(b+1)%50;var c=U7[b];g.Ob(a,function(d){d(c)})}while(b!=T7);
U7=Array(50);T7=-1;V7=!1}},TSa=function(a,b){var c=(Date.now()-VSa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},W7=function(a){g.R.call(this);
this.J=a;this.screens=[]},WSa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},XSa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Do(a.screens,function(f){return!!Y6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=WSa(a,b[d])||c;return c},YSa=function(a,b){var c=a.screens.length;
a.screens=g.Do(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},X7=function(a,b,c,d,e){g.R.call(this);
this.B=a;this.K=b;this.C=c;this.J=d;this.D=e;this.u=0;this.i=null;this.Lb=NaN},Z7=function(a){W7.call(this,"LocalScreenService");
this.u=a;this.i=NaN;Y7(this);this.info("Initializing with "+W6(this.screens))},ZSa=function(a){if(a.screens.length){var b=g.lm(a.screens,function(d){return d.id}),c=P7(a.u,"/pairing/get_lounge_token_batch");
Q7(a.u,c,{screen_ids:b.join(",")},(0,g.D)(a.VR,a),(0,g.D)(a.UR,a))}},Y7=function(a){if(g.vs("deprecate_pair_servlet_enabled"))return XSa(a,[]);
var b=QRa(WRa());b=g.Do(b,function(c){return!c.uuid});
return XSa(a,b)},$7=function(a,b){YRa(g.lm(a.screens,ORa));
b&&XRa()},b8=function(a,b){g.R.call(this);
this.J=b;b=(b=g.Rz("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.J(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.ub(b,h)}this.i=c;this.D=a;this.B=this.C=NaN;this.u=null;a8("Initialized with "+g.Vh(this.i))},c8=function(a,b,c){var d=P7(a.D,"/pairing/get_screen_availability");
Q7(a.D,d,{lounge_token:b.token},(0,g.D)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.D)(function(){c(!1)},a))},d8=function(a,b){a:if(P6(b)!=P6(a.i))var c=!1;
else{c=g.cc(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(a8("Updated online screens: "+g.Vh(a.i)),a.i=b,a.ea("screenChange"));$Sa(a)},e8=function(a){isNaN(a.B)||g.rt(a.B);
a.B=g.pt((0,g.D)(a.IF,a),0<a.C&&a.C<g.Qa()?2E4:1E4)},a8=function(a){S7("OnlineScreenService",a)},aTa=function(a){var b={};
g.Ob(a.J(),function(c){c.token?b[c.token]=c.id:this.le("Requesting availability of screen w/o lounge token.")});
return b},$Sa=function(a){a=g.cc(g.Ub(a.i,function(b){return b}));
g.Lb(a);a.length?g.Qz("yt-remote-online-screen-ids",a.join(","),60):g.Sz("yt-remote-online-screen-ids")},f8=function(a,b){b=void 0===b?!1:b;
W7.call(this,"ScreenService");this.C=a;this.K=b;this.i=this.u=null;this.B=[];this.D={};bTa(this)},dTa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Gh(),l=c?Z6(h,c):null;c&&(a.K||l)||(l=Z6(h,b));if(l){l.uuid=b;var m=g8(a,l);c8(a.i,m,function(n){e(n?m:null)})}else c?cTa(a,c,(0,g.D)(function(n){var p=g8(this,new T6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));c8(this.i,p,function(q){e(q?p:null)})},a),f):e(null)},eTa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},fTa=function(a,b,c){c8(a.i,b,c)},cTa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.xt(P7(a.C,"/pairing/get_lounge_token_batch"),e)},gTa=function(a){a.screens=a.u.Gh();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+W6(a.screens))},bTa=function(a){h8(a);
a.u=new Z7(a.C);a.u.subscribe("screenChange",(0,g.D)(a.eS,a));gTa(a);a.K||(a.B=QRa(g.Rz("yt-remote-automatic-screen-cache")||[]));h8(a);a.info("Initializing automatic screens: "+W6(a.B));a.i=new b8(a.C,(0,g.D)(a.Gh,a,!0));a.i.subscribe("screenChange",(0,g.D)(function(){this.ea("onlineScreenChange")},a))},g8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=Z6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||hTa(a));h8(a);a.D[b.uuid]=b.id;g.Qz("yt-remote-device-id-map",a.D,31536E3);return b},hTa=function(a){a=g.Do(a.B,function(b){return"shortLived"!=b.idType});
g.Qz("yt-remote-automatic-screen-cache",g.lm(a,ORa))},h8=function(a){a.D=g.Rz("yt-remote-device-id-map")||{}},i8=function(a,b,c){g.R.call(this);
this.Da=c;this.B=a;this.i=b;this.C=null},j8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},iTa=function(a,b){a.C&&(a.C.token=b,g8(a.B,a.C));
a.ea("sessionScreen",a.C)},k8=function(a,b){S7(a.Da,b)},l8=function(a,b,c){i8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.ma=(0,g.D)(this.nQ,this);this.Aa=(0,g.D)(this.oW,this);this.Y=g.pt(function(){jTa(d,null)},12E4);
this.K=this.D=this.J=this.S=0;this.ya=!1;this.Z="unknown"},m8=function(a,b){g.rt(a.K);
a.K=0;0==b?kTa(a):a.K=g.pt(function(){kTa(a)},b)},kTa=function(a){lTa(a,"getLoungeToken");
g.rt(a.D);a.D=g.pt(function(){mTa(a,null)},3E4)},lTa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Vh(void 0));
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ha,(0,g.D)(function(){k8(this,"Failed to send message: "+b+".")},a)):k8(a,"Sending yt message without session: "+g.Vh(c))},n8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.nK(b,function(c){j8(a,c)},function(){return a.zg()},5)):a.zg(Error("Waiting for session status timed out."))},oTa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new T6(b);nTa(a,d,function(e){e?(a.ya=!0,g8(a.B,d),j8(a,d),a.Z="unknown",m8(a,c)):(g.zs(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.zg())},5)},jTa=function(a,b){g.rt(a.Y);
a.Y=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?oTa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.zs(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),n8(a,b.screenId))):(g.zs(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),n8(a,b.screenId)):n8(a,b.screenId):a.zg(Error("Waiting for session status timed out."))},mTa=function(a,b){g.rt(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.Z=c,m8(a,3E4)):(iTa(a,b.loungeToken),a.ya=!1,a.Z="unknown",m8(a,b.loungeTokenRefreshIntervalMs))},nTa=function(a,b,c,d){g.rt(a.J);
a.J=0;fTa(a.B,b,function(e){e||0>d?c(e):a.J=g.pt(function(){nTa(a,b,c,d-1)},300)})},pTa=function(a){g.rt(a.S);
a.S=0;g.rt(a.J);a.J=0;g.rt(a.Y);a.Y=0;g.rt(a.D);a.D=0;g.rt(a.K);a.K=0},o8=function(a,b,c,d){i8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.S=null;this.Aa="";this.La=c;this.Ja=null;this.Y=g.Ha;this.Z=NaN;this.Ka=(0,g.D)(this.oQ,this);this.D=g.Ha;this.K=this.J=0;this.ma=!1;this.ya="unknown"},p8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},qTa=function(a){a.D=a.B.TH(a.Aa,a.i.label,a.i.friendlyName,p8(a),function(b,c){a.D=g.Ha;
a.ma=!0;j8(a,b);"shortLived"==b.idType&&0<c&&q8(a,c)},function(b){a.D=g.Ha;
a.zg(b)})},rTa=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.La;aSa()&&(b.env_useStageMdx=1);return g.ni(b)},r8=function(a){return new Promise(function(b){a.Aa=X6();
if(a.Ja){var c=new chrome.cast.DialLaunchResponse(!0,rTa(a));b(c);qTa(a)}else a.Y=function(){g.rt(a.Z);a.Y=function(){};
a.Z=NaN;var d=new chrome.cast.DialLaunchResponse(!0,rTa(a));b(d);qTa(a)},a.Z=g.pt(function(){a.Y()},100)})},tTa=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new T6(b);return(new Promise(function(e){sTa(a,d,function(f){f?(a.ma=!0,g8(a.B,d),j8(a,d),q8(a,c)):g.zs(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):r8(a)})},uTa=function(a,b){var c=a.S.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){dTa(a.B,c,b,d,function(f){f&&f.token&&j8(a,f);e(f)},function(f){k8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):r8(a)})},sTa=function(a,b,c,d){g.rt(a.J);
a.J=0;fTa(a.B,b,function(e){e||0>d?c(e):a.J=g.pt(function(){sTa(a,b,c,d-1)},300)})},q8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
p8(a)&&(g.rt(a.K),a.K=0,0==b?vTa(a):a.K=g.pt(function(){vTa(a)},b))},vTa=function(a){p8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ya=c,q8(a,3E4)):(a.ma=!1,a.ya="unknown",iTa(a,b.loungeToken),q8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ya="noLoungeTokenResponse";q8(a,3E4)})},wTa=function(a){g.rt(a.J);
a.J=0;g.rt(a.K);a.K=0;a.D();a.D=function(){};
g.rt(a.Z)},s8=function(a,b){i8.call(this,a,b,"ManualSession");
this.u=g.pt((0,g.D)(this.As,this,null),150)},t8=function(a,b){g.R.call(this);
this.config_=b;this.u=a;this.S=b.appId||"233637DE";this.C=b.theme||"cl";this.Z=b.disableCastApi||!1;this.J=b.forceMirroring||!1;this.i=null;this.K=!1;this.B=[];this.D=(0,g.D)(this.hV,this)},xTa=function(a,b){return b?g.rb(a.B,function(c){return U6(b,c.label)},a):null},u8=function(a){S7("Controller",a)},PSa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},v8=function(a){return a.K||!!a.B.length||!!a.i},w8=function(a,b,c){b!=a.i&&(g.oe(a.i),(a.i=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.i):a.ea("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.D)(a.HM,a,b)),b.subscribe("sessionFailed",function(){return yTa(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.As(null)):a.ea("yt-remote-cast2-session-change",null))},yTa=function(a,b){a.i==b&&a.ea("yt-remote-cast2-session-failed")},zTa=function(a){var b=a.u.SH(),c=a.i&&a.i.i;
a=g.lm(b,function(d){c&&U6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=xTa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},ETa=function(a,b,c,d){d.disableCastApi?x8("Cannot initialize because disabled by Mdx config."):ATa()?BTa(b,d)&&(y8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?CTa(a,c):(window.__onGCastApiAvailable=function(e,f){e?CTa(a,c):(z8("Failed to load cast API: "+f),A8(!1),y8(!1),g.Sz("yt-remote-cast-available"),g.Sz("yt-remote-cast-receiver"),
DTa(),c(!1))},d.loadCastApiSetupScript?g.Uz("https://web.archive.org/web/20211001013923/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=f7()&&hSa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?h7():89<=f7()?jSa():(i7(),g7(iSa.map(eSa))))):x8("Cannot initialize because not running Chrome")},DTa=function(){x8("dispose");
var a=B8();a&&a.dispose();g.Fa("yt.mdx.remote.cloudview.instance_",null,void 0);FTa(!1);g.ev(C8);C8.length=0},D8=function(){return!!g.Rz("yt-remote-cast-installed")},GTa=function(){var a=g.Rz("yt-remote-cast-receiver");
return a?a.friendlyName:null},HTa=function(){x8("clearCurrentReceiver");
g.Sz("yt-remote-cast-receiver")},ITa=function(){return D8()?B8()?B8().getCastSession():(z8("getCastSelector: Cast is not initialized."),null):(z8("getCastSelector: Cast API is not installed!"),null)},F8=function(){D8()?B8()?E8()?(x8("Requesting cast selector."),B8().requestSession()):(x8("Wait for cast API to be ready to request the session."),C8.push(g.dv("yt-remote-cast2-api-ready",F8))):z8("requestCastSelector: Cast is not initialized."):z8("requestCastSelector: Cast API is not installed!")},G8=
function(a,b){E8()?B8().setConnectedScreenStatus(a,b):z8("setConnectedScreenStatus called before ready.")},ATa=function(){var a=0<=g.Qb.search(/ (CrMo|Chrome|CriOS)\//);
return g.Si||a},JTa=function(a,b){B8().init(a,b)},BTa=function(a,b){var c=!1;
B8()||(a=new t8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Qz("yt-remote-cast-available",d);R6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){x8("onReceiverSelected: "+d.friendlyName);
g.Qz("yt-remote-cast-receiver",d);R6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){x8("onReceiverResumed: "+d.friendlyName);
g.Qz("yt-remote-cast-receiver",d);R6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){x8("onSessionChange: "+V6(d));
d||g.Sz("yt-remote-cast-receiver");R6("yt-remote-cast2-session-change",d)}),g.Fa("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
x8("cloudview.createSingleton_: "+c);return c},B8=function(){return g.Ga("yt.mdx.remote.cloudview.instance_")},CTa=function(a,b){A8(!0);
y8(!1);JTa(a,function(c){c?(FTa(!0),g.fv("yt-remote-cast2-api-ready")):(z8("Failed to initialize cast API."),A8(!1),g.Sz("yt-remote-cast-available"),g.Sz("yt-remote-cast-receiver"),DTa());b(c)})},x8=function(a){S7("cloudview",a)},z8=function(a){S7("cloudview",a)},A8=function(a){x8("setCastInstalled_ "+a);
g.Qz("yt-remote-cast-installed",a)},E8=function(){return!!g.Ga("yt.mdx.remote.cloudview.apiReady_")},FTa=function(a){x8("setApiReady_ "+a);
g.Fa("yt.mdx.remote.cloudview.apiReady_",a,void 0)},y8=function(a){g.Fa("yt.mdx.remote.cloudview.initializing_",a,void 0)},H8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.J=this.K=0;this.trackData=null;this.hasNext=this.Ck=!1;this.S=this.D=this.i=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},I8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Ck=!1;a.hasNext=!1;a.K=0;a.J=g.Qa();a.C=0;a.i=0;a.D=0;a.S=0;a.B=NaN;a.u=!1},J8=function(a){return a.Ac()?(g.Qa()-a.J)/1E3:0},K8=function(a,b){a.K=b;
a.J=g.Qa()},L8=function(a){switch(a.playerState){case 1:case 1081:return(g.Qa()-a.J)/1E3+a.K;
case -1E3:return 0}return a.K},M8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&I8(a)},N8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.nc(a.trackData);b.hasPrevious=a.Ck;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.J;b.seekableStart=a.C;b.seekableEnd=a.i;b.duration=a.D;b.loadedTime=a.S;b.liveIngestionTime=a.B;return b},P8=function(a,b){g.R.call(this);
this.B=0;this.C=a;this.J=[];this.D=new LSa;this.u=this.i=null;this.Z=(0,g.D)(this.OT,this);this.K=(0,g.D)(this.yw,this);this.S=(0,g.D)(this.NT,this);this.Y=(0,g.D)(this.VT,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.ZF,this),KTa(this))):c=3;0!=c&&(b?this.ZF(c):g.pt((0,g.D)(function(){this.ZF(c)},this),0));
(a=ITa())&&O8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Y)},Q8=function(a){return new H8(a.C.getPlayerContextData())},KTa=function(a){g.Ob("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.J.push(this.C.subscribe(b,g.Pa(this.fV,b),this))},a)},LTa=function(a){g.Ob(a.J,function(b){this.C.unsubscribeByKey(b)},a);
a.J.length=0},R8=function(a){return 1==a.getState()},S8=function(a,b){var c=a.D;
50>c.i.length+c.u.length&&a.D.u.push(b)},U8=function(a,b,c){var d=Q8(a);
K8(d,c);-1E3!=d.playerState&&(d.playerState=b);T8(a,d)},V8=function(a,b,c){a.C.sendMessage(b,c)},T8=function(a,b){LTa(a);
a.C.setPlayerContextData(N8(b));KTa(a)},O8=function(a,b){a.u&&(a.u.removeUpdateListener(a.Z),a.u.removeMediaListener(a.K),a.yw(null));
a.u=b;a.u&&(S7("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.Z),a.u.addMediaListener(a.K),a.u.media.length&&a.yw(a.u.media[0]))},MTa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=Q8(a);b.contentId!=d.videoId&&S7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;K8(d,a.i.getEstimatedTime());T8(a,d)}else S7("CP","No cast media video. Ignoring state update.")},W8=function(a,b,c){return(0,g.D)(function(d){this.le("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.le("Retrying "+b+" using MDx browser channel."),V8(this,b,c))},a)},X8=function(a,b,c,d){d=void 0===d?!1:d;
g.R.call(this);this.D=NaN;this.ya=!1;this.S=this.K=this.Y=this.ma=NaN;this.Z=[];this.C=this.J=this.B=this.hc=this.i=null;this.Ka=a;this.Da=d;this.Z.push(g.wu(window,"beforeunload",(0,g.D)(this.QR,this)));this.u=[];this.hc=new H8;this.Ja=b.id;this.Aa=b.idType;this.i=NTa(this,c);this.i.subscribe("handlerOpened",this.ST,this);this.i.subscribe("handlerClosed",this.PT,this);this.i.subscribe("handlerError",this.QT,this);this.i.subscribe("handlerMessage",this.RT,this);this.i.NA(b.token);this.subscribe("remoteQueueChange",
function(){var e=this.hc.videoId;g.Tz()&&g.Qz("yt-remote-session-video-id",e)},this)},OTa=function(a){return g.rb(a.u,function(b){return"LOUNGE_SCREEN"==b.type})},Y8=function(a){S7("conn",a)},NTa=function(a,b){return new L7(P7(a.Ka,"/bc"),b,!1,function(){return a.XH()},"shortLived"==a.Aa)},Z8=function(a,b){a.ea("proxyStateChange",b)},PTa=function(a){a.D=g.pt((0,g.D)(function(){Y8("Connecting timeout");
this.Kr(1)},a),2E4)},$8=function(a){g.rt(a.D);
a.D=NaN},a9=function(a){g.rt(a.ma);
a.ma=NaN},QTa=function(a){b9(a);
a.Y=g.pt((0,g.D)(function(){c9(this,"getNowPlaying")},a),2E4)},b9=function(a){g.rt(a.Y);
a.Y=NaN},STa=function(a,b){var c=null;
if(b){var d=OTa(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Fa("yt.mdx.remote.remoteClient_",c,void 0);b&&($8(a),a9(a));c=N7(a.i)&&isNaN(a.D);b==c?b&&(Z8(a,1),c9(a,"getSubtitlesTrack")):b?(a.mK()&&a.hc.reset(),Z8(a,1),c9(a,"getNowPlaying"),RTa(a)):a.Kr(1)},TTa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.hc.videoId&&(g.ic(b.params)?a.hc.trackData=null:a.hc.trackData=b.params,a.ea("remotePlayerChange"))},UTa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.hc.listId=b.params.listId||a.hc.listId;M8(a.hc,c,d);a.ea("remoteQueueChange")},WTa=function(a,b){b.params=b.params||{};
UTa(a,b);VTa(a,b);a.ea("autoplayDismissed")},VTa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
K8(a.hc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.hc.playerState&&(c=-1E3);a.hc.playerState=c;c=Number(b.params.loadedTime);a.hc.S=isNaN(c)?0:c;a.hc.Gj(Number(b.params.duration));c=a.hc;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.hc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.hc.playerState?QTa(a):b9(a);a.ea("remotePlayerChange")},XTa=function(a,b){if(-1E3!=a.hc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.hc.playerState=c;b=parseInt(b.params.currentTime,10);K8(a.hc,isNaN(b)?0:b);a.ea("remotePlayerChange")}},YTa=function(a,b){var c="true"==b.params.muted;
a.hc.volume=parseInt(b.params.volume,10);a.hc.muted=c;a.ea("remotePlayerChange")},ZTa=function(a,b){a.J=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},$Ta=function(a,b){var c="true"==b.params.hasNext;
a.hc.Ck="true"==b.params.hasPrevious;a.hc.hasNext=c;a.ea("previousNextChange")},RTa=function(a){g.rt(a.S);
a.S=g.pt((0,g.D)(a.Kr,a,1),864E5)},c9=function(a,b,c){c?Y8("Sending: action="+b+", params="+g.Vh(c)):Y8("Sending: action="+b);
a.i.sendMessage(b,c)},d9=function(a){W7.call(this,"ScreenServiceProxy");
this.Pe=a;this.i=[];this.i.push(this.Pe.$_s("screenChange",(0,g.D)(this.sQ,this)));this.i.push(this.Pe.$_s("onlineScreenChange",(0,g.D)(this.MU,this)))},dUa=function(a,b){$Ra();
if(!e7||!e7.get("yt-remote-disable-remote-module-for-dev")){b=g.P("MDX_CONFIG")||b;SRa();c7();e9||(e9=new O7(b?b.loungeApiHost:void 0),aSa()&&(e9.i="/api/loungedev"));f9||(f9=g.Ga("yt.mdx.remote.deferredProxies_")||[],g.Fa("yt.mdx.remote.deferredProxies_",f9,void 0));aUa();var c=g9();if(!c){var d=new f8(e9,b?b.disableAutomaticScreenCache||!1:!1);g.Fa("yt.mdx.remote.screenService_",d,void 0);c=g9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Fa("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);ETa(a,d,function(f){f?h9()&&G8(h9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){R6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ga("yt.mdx.remote.initialized_")&&(g.Fa("yt.mdx.remote.initialized_",!0,void 0),i9("Initializing: "+
g.Vh(b)),j9.push(g.dv("yt-remote-cast2-api-ready",function(){R6("yt-remote-api-ready")})),j9.push(g.dv("yt-remote-cast2-availability-change",function(){R6("yt-remote-receiver-availability-change")})),j9.push(g.dv("yt-remote-cast2-receiver-selected",function(){k9(null);
R6("yt-remote-auto-connect","cast-selector-receiver")})),j9.push(g.dv("yt-remote-cast2-receiver-resumed",function(){R6("yt-remote-receiver-resumed","cast-selector-receiver")})),j9.push(g.dv("yt-remote-cast2-session-change",bUa)),j9.push(g.dv("yt-remote-connection-change",function(f){f?G8(h9(),"YouTube TV"):l9()||(G8(null,null),HTa())})),j9.push(g.dv("yt-remote-cast2-session-failed",function(){R6("yt-remote-connection-failed")})),a=m9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.vs("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),i9(" -- with channel params: "+g.Vh(a)),a?(g.Qz("yt-remote-session-app",a.app),g.Qz("yt-remote-session-name",a.name)):(g.Sz("yt-remote-session-app"),g.Sz("yt-remote-session-name")),g.Fa("yt.mdx.remote.channelParams_",a,void 0),c.start(),h9()||cUa())}},eUa=function(){var a=g9().Pe.$_gos();
var b=n9();b&&o9()&&(Y6(a,b)||a.push(b));return RRa(a)},p9=function(){var a=fUa();
!a&&D8()&&GTa()&&(a={key:"cast-selector-receiver",name:GTa()});return a},fUa=function(){var a=eUa(),b=n9();
b||(b=l9());return g.rb(a,function(c){return b&&U6(b,c.key)?!0:!1})},n9=function(){var a=h9();
if(!a)return null;var b=g9().Gh();return Z6(b,a)},bUa=function(a){i9("remote.onCastSessionChange_: "+V6(a));
if(a){var b=n9();if(b&&b.id==a.id){if(G8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))q9&&(q9.token=a),(b=o9())&&b.NA(a)}else b&&r9(),s9(a,1)}else o9()&&r9()},r9=function(){E8()?B8().stopSession():z8("stopSession called before API ready.");
var a=o9();a&&(a.disconnect(1),t9(null))},u9=function(){var a=o9();
return!!a&&3!=a.getProxyState()},i9=function(a){S7("remote",a)},g9=function(){if(!v9){var a=g.Ga("yt.mdx.remote.screenService_");
v9=a?new d9(a):null}return v9},h9=function(){return g.Ga("yt.mdx.remote.currentScreenId_")},gUa=function(a){g.Fa("yt.mdx.remote.currentScreenId_",a,void 0)},hUa=function(){return g.Ga("yt.mdx.remote.connectData_")},k9=function(a){g.Fa("yt.mdx.remote.connectData_",a,void 0)},o9=function(){return g.Ga("yt.mdx.remote.connection_")},t9=function(a){var b=o9();
k9(null);a||gUa("");g.Fa("yt.mdx.remote.connection_",a,void 0);f9&&(g.Ob(f9,function(c){c(a)}),f9.length=0);
b&&!a?R6("yt-remote-connection-change",!1):!b&&a&&R6("yt-remote-connection-change",!0)},l9=function(){var a=g.Tz();
if(!a)return null;var b=g9();if(!b)return null;b=b.Gh();return Z6(b,a)},s9=function(a,b){h9();
n9()&&n9();if(w9)q9=a;else{gUa(a.id);var c=g.Ga("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new X8(e9,a,m9(),c);a.connect(b,hUa());a.subscribe("beforeDisconnect",function(d){R6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){o9()&&(o9(),t9(null))});
a.subscribe("browserChannelAuthError",function(){var d=n9();d&&"shortLived"==d.idType&&(E8()?B8().handleBrowserChannelAuthError():z8("refreshLoungeToken called before API ready."))});
t9(a)}},cUa=function(){var a=l9();
a?(i9("Resume connection to: "+V6(a)),s9(a,0)):(d7(),HTa(),i9("Skipping connecting because no session screen found."))},aUa=function(){var a=m9();
if(g.ic(a)){a=b7();var b=g.Rz("yt-remote-session-name")||"",c=g.Rz("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Fa("yt.mdx.remote.channelParams_",a,void 0)}},m9=function(){return g.Ga("yt.mdx.remote.channelParams_")||{}},x9=function(a,b,c){g.I.call(this);
var d=this;this.u=a;this.I=b;this.Sb=c;this.events=new g.wD(this);this.Y=this.events.T(this.I,"onVolumeChange",function(e){iUa(d,e)});
this.D=!1;this.J=new g.UJ(64);this.i=new g.M(this.MN,500,this);this.B=new g.M(this.NN,1E3,this);this.S=new j7(this.BX,0,this);this.C={};this.Z=new g.M(this.vO,1E3,this);this.K=new k7(this.seekTo,1E3,this);this.ma=g.Ha;g.J(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.xU);this.events.T(b,"captionschanged",this.KT);this.events.T(b,"captionssettingschanged",this.TN);this.events.T(b,"videoplayerreset",this.fA);this.events.T(b,"mdxautoplaycancel",function(){d.Sb.JJ()});
a=this.Sb;a.isDisposed();a.subscribe("proxyStateChange",this.DM,this);a.subscribe("remotePlayerChange",this.Cw,this);a.subscribe("remoteQueueChange",this.fA,this);a.subscribe("previousNextChange",this.AM,this);a.subscribe("nowAutoplaying",this.uM,this);a.subscribe("autoplayDismissed",this.XL,this);g.J(this,this.i);g.J(this,this.B);g.J(this,this.S);g.J(this,this.Z);g.J(this,this.K);this.TN();this.fA();this.Cw()},iUa=function(a,b){if(y9(a)){a.Sb.unsubscribe("remotePlayerChange",a.Cw,a);
var c=Math.round(b.volume);b=!!b.muted;var d=Q8(a.Sb);if(c!==d.volume||b!==d.muted)a.Sb.setVolume(c,b),a.Z.start();a.Sb.subscribe("remotePlayerChange",a.Cw,a)}},jUa=function(a){a.Qb(0);
a.i.stop();a.Tb(new g.UJ(64))},z9=function(a,b){if(y9(a)&&!a.D){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.pc(c,b));a.Sb.WH(a.I.getVideoData(1).videoId,c);a.C=Q8(a.Sb).trackData}},A9=function(a,b){var c=a.I.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.Sb.playVideo(c.videoId,b,d,e,c.playerParams,c.Ya,HRa(c));a.Tb(new g.UJ(1))},kUa=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{LK:1});
c&&c.length?(a.I.setOption("captions","track",b),a.D=!1):(a.I.loadModule("captions"),a.D=!0)}else a.I.setOption("captions","track",{})},y9=function(a){return Q8(a.Sb).videoId===a.I.getVideoData(1).videoId},B9=function(){g.U.call(this,{G:"div",
L:"ytp-mdx-manual-pairing-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-manual-pairing-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-manual-pairing-popup-title",va:"Connecting to your TV on web using a code will be going away soon"},{G:"div",L:"ytp-mdx-manual-pairing-popup-buttons",U:[{G:"button",Ga:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],va:"Learn more"},{G:"button",Ga:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],va:"OK"}]}]}]});this.i=new g.zL(this,250);this.learnMoreButton=
this.Fa("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.Fa("ytp-mdx-manual-pairing-popup-ok");g.J(this,this.i);this.T(this.learnMoreButton,"click",this.u);this.T(this.okButton,"click",this.B)},C9=function(){g.U.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-popup-title",va:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",va:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",U:[{G:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-cancel"],va:"Cancel"},{G:"button",Ga:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],va:"Confirm"}]}]}]});this.i=new g.zL(this,250);this.cancelButton=this.Fa("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Fa("ytp-mdx-privacy-popup-confirm");g.J(this,this.i);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},D9=function(a){g.U.call(this,{G:"div",
L:"ytp-remote",U:[{G:"div",L:"ytp-remote-display-status",U:[{G:"div",L:"ytp-remote-display-status-icon",U:[g.Fsa()]},{G:"div",L:"ytp-remote-display-status-text",va:"{{statustext}}"}]}]});this.api=a;this.i=new g.zL(this,250);g.J(this,this.i);this.T(a,"presentingplayerstatechange",this.onStateChange);lUa(this,a.vb())},lUa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.T(b,128)?g.qI("Error on $RECEIVER_NAME",c):b.Ac()||g.T(b,4)?g.qI("Playing on $RECEIVER_NAME",c):g.qI("Connected to $RECEIVER_NAME",c);a.Ra("statustext",b);a.i.show()}else a.i.hide()},E9=function(a,b){g.NP.call(this,"Play on",0,a,b);
this.I=a;this.oo={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},F9=function(a){g.ZM.call(this,a);
this.sj={key:X6(),name:"This computer"};this.ci=null;this.subscriptions=[];this.wF=this.Sb=null;this.oo=[this.sj];this.Vm=this.sj;this.ud=new g.UJ(64);this.nL=0;this.vf=-1;this.Es=null;this.Kw=this.Gz=!1;this.nq=this.Ps=null;if(!g.fF(this.player.V())&&!g.gF(this.player.V())){a=this.player;var b=g.CM(a);b&&(b=b.An())&&(b=new E9(a,b),g.J(this,b));b=new D9(a);g.J(this,b);g.MM(a,b.element,4);this.Ps=new C9;g.J(this,this.Ps);g.MM(a,this.Ps.element,4);this.player.V().N("pair_servlet_deprecation_warning_enabled")&&
!this.player.V().N("deprecate_pair_servlet_enabled")&&(this.Es=new B9,g.J(this,this.Es),g.MM(a,this.Es.element,4));this.Kw=!!l9();this.Gz=!!g.Rz("yt-remote-manual-pairing-warning-shown")}},G9=function(a){a.nq&&(a.player.removeEventListener("presentingplayerstatechange",a.nq),a.nq=null)},mUa=function(a,b,c){a.ud=c;
a.player.ea("presentingplayerstatechange",new g.cI(c,b))},nUa=function(a,b,c){var d=!1;
1===b?d=!a.Kw:2===b&&(d=!a.Gz);d&&g.eI(c,8)&&(a.player.pauseVideo(),G9(a))},H9=function(a,b){if(b.key!==a.Vm.key)if(b.key===a.sj.key)r9();
else{if(a.Es&&!a.Gz&&b!==a.sj&&"cast-selector-receiver"!==b.key&&g.wF(a.player.V()))oUa(a);else{var c;(c=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.P("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.P("SESSION_INDEX")&&!g.P("LOGGED_IN")))||a.Kw||!a.Ps);(c?0:g.wF(a.player.V())||g.zF(a.player.V()))&&pUa(a)}a.Vm=b;if(!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.gF(a.player.V())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=
c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))a=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.TM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=HRa(c))&&(a.locationInfo=c)}i9("Connecting to: "+
g.Vh(b));"cast-selector-receiver"==b.key?(k9(a||null),b=a||null,E8()?B8().setLaunchParams(b):z8("setLaunchParams called before ready.")):!a&&u9()&&h9()==b.key?R6("yt-remote-connection-change",!0):(r9(),k9(a||null),a=g9().Gh(),(b=Z6(a,b.key))&&s9(b,1))}}},pUa=function(a){a.player.vb().Ac()?a.player.pauseVideo():(a.nq=function(b){nUa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.nq));
a.Ps&&a.Ps.fd();o9()||(w9=!0)},oUa=function(a){a.player.vb().Ac()?a.player.pauseVideo():(a.nq=function(b){nUa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.nq));
a.Es&&a.Es.fd();o9()||(w9=!0)},pSa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},w7={"'":"\\'"},NRa={DY:"atp",j9:"ska",W7:"que",T5:"mus",i9:"sus",j2:"dsp",r8:"seq",w5:"mic",d1:"dpa",SY:"cds",R5:"mlm"},e7,a7="",gSa=bSa("loadCastFramework")||bSa("loadCastApplicationFramework"),iSa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ra(j7,g.I);g.k=j7.prototype;g.k.gQ=function(a){this.C=arguments;this.i=!1;this.Lb?this.B=g.Qa()+this.Tf:this.Lb=g.sh(this.D,this.Tf)};
g.k.stop=function(){this.Lb&&(g.C.clearTimeout(this.Lb),this.Lb=null);this.B=null;this.i=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.i&&(this.i=!1,this.J.apply(null,this.C)))};
g.k.xa=function(){this.stop();j7.ke.xa.call(this)};
g.k.hQ=function(){this.Lb&&(g.C.clearTimeout(this.Lb),this.Lb=null);this.B?(this.Lb=g.sh(this.D,this.B-g.Qa()),this.B=null):this.u?this.i=!0:(this.i=!1,this.J.apply(null,this.C))};g.w(k7,g.I);g.k=k7.prototype;g.k.RH=function(a){this.B=arguments;this.Lb||this.u?this.i=!0:l7(this)};
g.k.stop=function(){this.Lb&&(g.C.clearTimeout(this.Lb),this.Lb=null,this.i=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.i||this.Lb||(this.i=!1,l7(this))};
g.k.xa=function(){g.I.prototype.xa.call(this);this.stop()};m7.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
m7.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};var o7=new g.Oe;g.w(kSa,g.re);g.k=q7.prototype;g.k.Ro=null;g.k.Am=!1;g.k.It=null;g.k.SG=null;g.k.Us=null;g.k.wt=null;g.k.Pm=null;g.k.uo=null;g.k.qq=null;g.k.Lf=null;g.k.nB=0;g.k.Lj=null;g.k.kB=null;g.k.Jm=null;g.k.mu=-1;g.k.BN=!0;g.k.jp=!1;g.k.bC=0;g.k.AA=null;var nSa={},t7={};g.k=q7.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.iQ=function(a){a=a.target;var b=this.AA;b&&3==g.Ci(a)?b.RH():this.DO(a)};
g.k.DO=function(a){try{if(a==this.Lf)a:{var b=g.Ci(this.Lf),c=this.Lf.u,d=this.Lf.getStatus();if(g.Kc&&!g.Ec(10)||g.ug&&!g.Dc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Hi(this.Lf))break a;this.jp||4!=b||7==c||(8==c||0>=d?this.i.vj(3):this.i.vj(2));x7(this);var e=this.Lf.getStatus();this.mu=e;var f=g.Hi(this.Lf);if(this.Am=200==e){4==b&&u7(this);if(this.D){for(a=!0;!this.jp&&this.nB<f.length;){var h=oSa(this,f);if(h==t7){4==b&&(this.Jm=4,p7(15),a=!1);break}else if(h==nSa){this.Jm=4;p7(16);a=!1;
break}else y7(this,h)}4==b&&0==f.length&&(this.Jm=1,p7(17),a=!1);this.Am=this.Am&&a;a||(u7(this),v7(this))}else y7(this,f);this.Am&&!this.jp&&(4==b?this.i.Px(this):(this.Am=!1,s7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Jm=3,p7(13)):(this.Jm=0,p7(14)),u7(this),v7(this)}}catch(l){this.Lf&&g.Hi(this.Lf)}finally{}};
g.k.dW=function(a){n7((0,g.D)(this.cW,this,a),0)};
g.k.cW=function(a){this.jp||(x7(this),y7(this,a),s7(this))};
g.k.LM=function(a){n7((0,g.D)(this.bW,this,a),0)};
g.k.bW=function(a){this.jp||(u7(this),this.Am=a,this.i.Px(this),this.i.vj(4))};
g.k.cancel=function(){this.jp=!0;u7(this)};
g.k.kW=function(){this.It=null;var a=Date.now();0<=a-this.SG?(2!=this.wt&&this.i.vj(3),u7(this),this.Jm=2,p7(18),v7(this)):rSa(this,this.SG-a)};
g.k.getLastError=function(){return this.Jm};g.k=uSa.prototype;g.k.cC=null;g.k.nh=null;g.k.BA=!1;g.k.ON=null;g.k.Hy=null;g.k.uE=null;g.k.dC=null;g.k.Yh=null;g.k.fl=-1;g.k.nu=null;g.k.Mu=null;g.k.connect=function(a){this.dC=a;a=A7(this.i,null,this.dC);p7(3);this.ON=Date.now();var b=this.i.S;null!=b?(this.nu=b[0],(this.Mu=b[1])?(this.Yh=1,vSa(this)):(this.Yh=2,C7(this))):(O6(a,"MODE","init"),this.nh=new q7(this,void 0,void 0,void 0),this.nh.Ro=this.cC,r7(this.nh,a,!1,null,!0),this.Yh=0)};
g.k.ZQ=function(a){if(a)this.Yh=2,C7(this);else{p7(4);var b=this.i;b.Yj=b.Tm.fl;J7(b,9)}a&&this.vj(2)};
g.k.cD=function(a){return this.i.cD(a)};
g.k.abort=function(){this.nh&&(this.nh.cancel(),this.nh=null);this.fl=-1};
g.k.rf=function(){return!1};
g.k.EM=function(a,b){this.fl=a.mu;if(0==this.Yh)if(b){try{var c=this.u.parse(b)}catch(d){a=this.i;a.Yj=this.fl;J7(a,2);return}this.nu=c[0];this.Mu=c[1]}else a=this.i,a.Yj=this.fl,J7(a,2);else if(2==this.Yh)if(this.BA)p7(7),this.uE=Date.now();else if("11111"==b){if(p7(6),this.BA=!0,this.Hy=Date.now(),a=this.Hy-this.ON,!g.Kc||g.Ec(10)||500>a)this.fl=200,this.nh.cancel(),p7(12),B7(this.i,this,!0)}else p7(8),this.Hy=this.uE=Date.now(),this.BA=!1};
g.k.Px=function(){this.fl=this.nh.mu;if(this.nh.Am)0==this.Yh?this.Mu?(this.Yh=1,vSa(this)):(this.Yh=2,C7(this)):2==this.Yh&&((!g.Kc||g.Ec(10)?!this.BA:200>this.uE-this.Hy)?(p7(11),B7(this.i,this,!1)):(p7(12),B7(this.i,this,!0)));else{0==this.Yh?p7(9):2==this.Yh&&p7(10);var a=this.i;this.nh.getLastError();a.Yj=this.fl;J7(a,2)}};
g.k.hx=function(){return this.i.hx()};
g.k.isActive=function(){return this.i.isActive()};
g.k.vj=function(a){this.i.vj(a)};g.k=D7.prototype;g.k.Xj=null;g.k.uv=null;g.k.Vg=null;g.k.Ge=null;g.k.eC=null;g.k.Iy=null;g.k.XI=null;g.k.Qx=null;g.k.nw=0;g.k.fT=0;g.k.Mf=null;g.k.hn=null;g.k.Bl=null;g.k.vp=null;g.k.Tm=null;g.k.iB=null;g.k.zs=-1;g.k.mL=-1;g.k.Yj=-1;g.k.Or=0;g.k.yr=0;g.k.kp=8;g.Ra(xSa,g.re);g.Ra(ySa,g.re);g.k=D7.prototype;g.k.connect=function(a,b,c,d,e){p7(0);this.eC=b;this.uv=c||{};d&&void 0!==e&&(this.uv.OSID=d,this.uv.OAID=e);this.J?(n7((0,g.D)(this.tJ,this,a),100),CSa(this)):this.tJ(a)};
g.k.tJ=function(a){this.Tm=new uSa(this);this.Tm.cC=this.Xj;this.Tm.u=this.D;this.Tm.connect(a)};
g.k.rf=function(){return 0==this.i};
g.k.getState=function(){return this.i};
g.k.JM=function(a){this.hn=null;GSa(this,a)};
g.k.IM=function(){this.Bl=null;this.Ge=new q7(this,this.B,"rpc",this.K);this.Ge.Ro=this.Xj;this.Ge.bC=0;var a=this.XI.clone();g.Sj(a,"RID","rpc");g.Sj(a,"SID",this.B);g.Sj(a,"CI",this.iB?"0":"1");g.Sj(a,"AID",this.zs);E7(this,a);if(!g.Kc||g.Ec(10))g.Sj(a,"TYPE","xmlhttp"),r7(this.Ge,a,!0,this.Qx,!1);else{g.Sj(a,"TYPE","html");var b=this.Ge,c=!!this.Qx;b.wt=3;b.Pm=N6(a.clone());qSa(b,c)}};
g.k.EM=function(a,b){if(0!=this.i&&(this.Ge==a||this.Vg==a))if(this.Yj=a.mu,this.Vg==a&&3==this.i)if(7<this.kp){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Bl){if(this.Ge)if(this.Ge.Us+3E3<this.Vg.Us)G7(this),this.Ge.cancel(),this.Ge=null;else break a;I7(this);p7(19)}}else this.mL=a[1],0<this.mL-this.zs&&37500>a[2]&&this.iB&&0==this.yr&&!this.vp&&(this.vp=n7((0,g.D)(this.HT,this),6E3));else J7(this,11)}else null!=b&&J7(this,11);else if(this.Ge==
a&&G7(this),!g.ab(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.zs=c[0],c=c[1],2==this.i?"c"==c[0]?(this.B=c[1],this.Qx=c[2],c=c[3],null!=c?this.kp=c:this.kp=6,this.i=3,this.Mf&&this.Mf.pJ(),this.XI=A7(this,this.hx()?this.Qx:null,this.eC),HSa(this)):"stop"==c[0]&&J7(this,7):3==this.i&&("stop"==c[0]?J7(this,7):"noop"!=c[0]&&this.Mf&&this.Mf.oJ(c),this.yr=0)};
g.k.HT=function(){null!=this.vp&&(this.vp=null,this.Ge.cancel(),this.Ge=null,I7(this),p7(20))};
g.k.Px=function(a){if(this.Ge==a){G7(this);this.Ge=null;var b=2}else if(this.Vg==a)this.Vg=null,b=1;else return;this.Yj=a.mu;if(0!=this.i)if(a.Am)if(1==b){b=Date.now()-a.Us;var c=o7;c.dispatchEvent(new xSa(c,a.qq?a.qq.length:0,b,this.Or));F7(this);this.C.length=0}else HSa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Yj)){if(d=1==b)this.Vg||this.hn||1==this.i||2<=this.Or?d=!1:(this.hn=n7((0,g.D)(this.JM,this,a),ISa(this,this.Or)),this.Or++,d=!0);d=!(d||2==b&&I7(this))}if(d)switch(c){case 1:J7(this,
5);break;case 4:J7(this,10);break;case 3:J7(this,6);break;case 7:J7(this,12);break;default:J7(this,2)}}};
g.k.zR=function(a){if(!g.ub(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.k.lX=function(a){a?p7(2):(p7(1),JSa(this,8))};
g.k.cD=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.wi;a.S=!1;return a};
g.k.isActive=function(){return!!this.Mf&&this.Mf.isActive(this)};
g.k.vj=function(a){var b=o7;b.dispatchEvent(new ySa(b,a))};
g.k.hx=function(){return!(!g.Kc||g.Ec(10))};
g.k=KSa.prototype;g.k.pJ=function(){};
g.k.oJ=function(){};
g.k.nJ=function(){};
g.k.PC=function(){};
g.k.ZJ=function(){return{}};
g.k.isActive=function(){return!0};g.k=LSa.prototype;g.k.isEmpty=function(){return 0===this.i.length&&0===this.u.length};
g.k.clear=function(){this.i=[];this.u=[]};
g.k.contains=function(a){return g.ub(this.i,a)||g.ub(this.u,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.SLa)(b,a);0<=c?(g.yb(b,c),b=!0):b=!1;return b||g.zb(this.u,a)};
g.k.Ip=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Ra(K7,g.I);g.k=K7.prototype;g.k.UV=function(){this.Tf=Math.min(3E5,2*this.Tf);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.Tf+15E3*Math.random();g.Dq(this.i,a);this.u=Date.now()+a};
g.k.stop=function(){this.i.stop();this.u=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.Tf=5E3};g.Ra(L7,KSa);g.k=L7.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.cg=function(a){return this.B.cg(a)};
g.k.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.k.dispose=function(){this.Y||(this.Y=!0,g.oe(this.B),OSa(this),g.oe(this.u),this.u=null,this.ma=function(){return""})};
g.k.isDisposed=function(){return this.Y};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.Z="";this.u.stop();this.D=a||null;this.C=b||0;a=this.ya+"/test";b=this.ya+"/bind";var d=new D7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Aa),e=this.i;e&&(e.Mf=null);d.Mf=this;this.i=d;M7(this);if(this.i){d=g.P("ID_TOKEN");var f=this.i.Xj||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.Xj=f}e?(3!=e.getState()&&0==ESa(e)||e.getState(),this.i.connect(a,b,this.J,e.B,e.zs)):c?this.i.connect(a,
b,this.J,c.sessionId,c.arrayId):this.i.connect(a,b,this.J)}};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.pc(a,b);this.u.isActive()||2==(this.i?this.i.getState():0)?this.K.push(a):N7(this)&&(M7(this),DSa(this.i,a))};
g.k.pJ=function(){this.u.reset();this.D=null;this.C=0;if(this.K.length){var a=this.K;this.K=[];for(var b=0,c=a.length;b<c;++b)DSa(this.i,a[b])}this.ea("handlerOpened")};
g.k.nJ=function(a){var b=2==a&&401==this.i.Yj;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.k.PC=function(a){if(!this.u.isActive())this.ea("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.K.push(d)}};
g.k.ZJ=function(){var a={v:2};this.Z&&(a.gsessionid=this.Z);0!=this.C&&(a.ui=""+this.C);0!=this.S&&(a.ui=""+this.S);this.D&&g.pc(a,this.D);return a};
g.k.oJ=function(a){"S"==a[0]?this.Z=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),BSa(this.i)):this.ea("handlerMessage",new MSa(a[0],a[1]))};
g.k.NA=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Da&&this.i){var b=this.i.Xj||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.Xj=b}};
g.k.PW=function(){this.u.isActive();0==ESa(this.i)&&this.connect(this.D,this.C)};O7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
O7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
O7.prototype.D=function(a){a(Error("request timed out"))};var VSa=Date.now(),R7=null,U7=Array(50),T7=-1,V7=!1;g.Ra(W7,g.R);W7.prototype.Gh=function(){return this.screens};
W7.prototype.contains=function(a){return!!Y6(this.screens,a)};
W7.prototype.get=function(a){return a?Z6(this.screens,a):null};
W7.prototype.info=function(a){S7(this.J,a)};g.w(X7,g.R);g.k=X7.prototype;g.k.start=function(){!this.i&&isNaN(this.Lb)&&this.WM()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Lb)||(g.rt(this.Lb),this.Lb=NaN)};
g.k.xa=function(){this.stop();g.R.prototype.xa.call(this)};
g.k.WM=function(){this.Lb=NaN;this.i=g.xt(P7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.D)(this.kQ,this),onError:(0,g.D)(this.jQ,this),onTimeout:(0,g.D)(this.lQ,this)})};
g.k.kQ=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.C;a.name=this.J;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new T6(a),b)};
g.k.jQ=function(a){this.i=null;a.status&&404==a.status?this.u>=qUa.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=qUa[this.u],this.Lb=g.pt((0,g.D)(this.WM,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.k.lQ=function(){this.i=null;this.ea("pairingFailed",Error("Server not responding"))};
var qUa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ra(Z7,W7);g.k=Z7.prototype;g.k.start=function(){Y7(this)&&this.ea("screenChange");!g.Rz("yt-remote-lounge-token-expiration")&&ZSa(this);g.rt(this.i);this.i=g.pt((0,g.D)(this.start,this),1E4)};
g.k.add=function(a,b){Y7(this);WSa(this,a);$7(this,!1);this.ea("screenChange");b(a);a.token||ZSa(this)};
g.k.remove=function(a,b){var c=Y7(this);YSa(this,a)&&($7(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.k.gB=function(a,b,c,d){var e=Y7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,$7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.k.xa=function(){g.rt(this.i);Z7.ke.xa.call(this)};
g.k.VR=function(a){Y7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}$7(this,!b);b&&S7(this.J,"Missed "+b+" lounge tokens.")};
g.k.UR=function(a){S7(this.J,"Requesting lounge tokens failed: "+a)};g.w(b8,g.R);g.k=b8.prototype;g.k.start=function(){var a=parseInt(g.Rz("yt-remote-fast-check-period")||"0",10);(this.C=g.Qa()-144E5<a?0:a)?e8(this):(this.C=g.Qa()+3E5,g.Qz("yt-remote-fast-check-period",this.C),this.IF())};
g.k.isEmpty=function(){return g.ic(this.i)};
g.k.update=function(){a8("Updating availability on schedule.");var a=this.J(),b=g.Ub(this.i,function(c,d){return c&&!!Z6(a,d)},this);
d8(this,b)};
g.k.xa=function(){g.rt(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.R.prototype.xa.call(this)};
g.k.IF=function(){g.rt(this.B);this.B=NaN;this.u&&this.u.abort();var a=aTa(this);if(P6(a)){var b=P7(this.D,"/pairing/get_screen_availability");this.u=Q7(this.D,b,{lounge_token:g.cc(a).join(",")},(0,g.D)(this.AV,this,a),(0,g.D)(this.zV,this))}else d8(this,{}),e8(this)};
g.k.AV=function(a,b){this.u=null;var c=g.cc(aTa(this));if(g.Mb(c,g.cc(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;d8(this,c);e8(this)}else this.le("Changing Screen set during request."),this.IF()};
g.k.zV=function(a){this.le("Screen availability failed: "+a);this.u=null;e8(this)};
g.k.le=function(a){S7("OnlineScreenService",a)};g.Ra(f8,W7);g.k=f8.prototype;g.k.start=function(){this.u.start();this.i.start();this.screens.length&&(this.ea("screenChange"),this.i.isEmpty()||this.ea("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.i.update()};
g.k.gB=function(a,b,c,d){this.u.contains(a)?this.u.gB(a,b,c,d):(a="Updating name of unknown screen: "+a.name,S7(this.J,a),d(Error(a)))};
g.k.Gh=function(a){return a?this.screens:g.Cb(this.screens,g.Do(this.B,function(b){return!this.contains(b)},this))};
g.k.SH=function(){return g.Do(this.Gh(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.TH=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new X7(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.oe(l);e(g8(h,m),n)});
l.subscribe("pairingFailed",function(m){g.oe(l);f(m)});
l.start();return(0,g.D)(l.stop,l)};
g.k.mQ=function(a,b,c,d){g.xt(P7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.D)(function(e,f){e=new T6(f.screen||{});if(!e.name||eTa(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);eTa(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(g8(this,e))},this),
onError:(0,g.D)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.D)(function(){d(Error("pairing request timed out."))},this)})};
g.k.xa=function(){g.oe(this.u);g.oe(this.i);f8.ke.xa.call(this)};
g.k.eS=function(){gTa(this);this.ea("screenChange");this.i.update()};
f8.prototype.dispose=f8.prototype.dispose;g.Ra(i8,g.R);g.k=i8.prototype;g.k.getScreen=function(){return this.C};
g.k.zg=function(a){this.isDisposed()||(a&&(k8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.k.info=function(a){S7(this.Da,a)};
g.k.UH=function(){return null};
g.k.XF=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.D)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.D)(function(){k8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.xa=function(){this.XF("");i8.ke.xa.call(this)};g.w(l8,i8);g.k=l8.prototype;g.k.WF=function(a){if(this.u){if(this.u==a)return;k8(this,"Overriding cast session with new session object");pTa(this);this.ya=!1;this.Z="unknown";this.u.removeUpdateListener(this.ma);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.ma);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);lTa(this,"getMdxSessionStatus")};
g.k.As=function(a){this.info("launchWithParams no-op for Cast: "+g.Vh(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.D)(function(){this.zg()},this),(0,g.D)(function(){this.zg(Error("Failed to stop receiver app."))},this)):this.zg(Error("Stopping cast device without session."))};
g.k.XF=function(){};
g.k.xa=function(){this.info("disposeInternal");pTa(this);this.u&&(this.u.removeUpdateListener(this.ma),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;i8.prototype.xa.call(this)};
g.k.oW=function(a,b){if(!this.isDisposed())if(b)if(b=Q6(b),g.Ma(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Vh(b)),a){case "mdxSessionStatus":jTa(this,b);break;case "loungeToken":mTa(this,b);break;default:k8(this,"Unknown youtube message: "+a)}else k8(this,"Unable to parse message.");else k8(this,"No data in message.")};
g.k.nK=function(a,b,c,d){g.rt(this.S);this.S=0;dTa(this.B,this.i.label,a,this.i.friendlyName,(0,g.D)(function(e){e?b(e):0<=d?(k8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.S=g.pt((0,g.D)(this.nK,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.UH=function(){return this.u};
g.k.nQ=function(a){this.isDisposed()||a||(k8(this,"Cast session died."),this.zg())};g.w(o8,i8);g.k=o8.prototype;g.k.WF=function(a){this.u=a;this.u.addUpdateListener(this.Ka)};
g.k.As=function(a){this.Ja=a;this.Y()};
g.k.stop=function(){wTa(this);this.u?this.u.stop((0,g.D)(this.zg,this,null),(0,g.D)(this.zg,this,"Failed to stop DIAL device.")):this.zg()};
g.k.xa=function(){wTa(this);this.u&&this.u.removeUpdateListener(this.Ka);this.u=null;i8.prototype.xa.call(this)};
g.k.oQ=function(a){this.isDisposed()||a||(k8(this,"DIAL session died."),this.D(),this.D=g.Ha,this.zg())};g.w(s8,i8);s8.prototype.stop=function(){this.zg()};
s8.prototype.WF=function(){};
s8.prototype.As=function(){g.rt(this.u);this.u=NaN;var a=Z6(this.B.Gh(),this.i.label);a?j8(this,a):this.zg(Error("No such screen"))};
s8.prototype.xa=function(){g.rt(this.u);this.u=NaN;i8.prototype.xa.call(this)};g.w(t8,g.R);g.k=t8.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.S,[chrome.cast.Capability.AUDIO_OUT]);this.Z||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.J?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.D)(this.kV,this);c=new chrome.cast.ApiConfig(c,(0,g.D)(this.FM,this),e,d,a);c.customDialLaunchCallback=(0,g.D)(this.fU,this);
chrome.cast.initialize(c,(0,g.D)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),SSa(),this.u.subscribe("onlineScreenChange",(0,g.D)(this.VH,this)),this.B=zTa(this),chrome.cast.setCustomReceivers(this.B,g.Ha,(0,g.D)(function(f){this.le("Failed to set initial custom receivers: "+g.Vh(f))},this)),this.ea("yt-remote-cast2-availability-change",v8(this)),b(!0))},this),(0,g.D)(function(f){this.le("Failed to initialize API: "+g.Vh(f));
b(!1)},this))};
g.k.UW=function(a,b){u8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)u8("Unsetting old screen status: "+this.i.i.friendlyName),w8(this,null)}if(a&&b){if(!this.i){c=Z6(this.u.Gh(),a);if(!c){u8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){u8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=xTa(this,c);a||(u8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,g.Ha,(0,g.D)(function(d){this.le("Failed to set initial custom receivers: "+g.Vh(d))},this)));
u8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);w8(this,new s8(this.u,a),!0)}this.i.XF(b)}else u8("setConnectedScreenStatus: no screen.")};
g.k.VW=function(a){this.isDisposed()?this.le("Setting connection data on disposed cast v2"):this.i?this.i.As(a):this.le("Setting connection data without a session")};
g.k.qQ=function(){this.isDisposed()?this.le("Stopping session on disposed cast v2"):this.i?(this.i.stop(),w8(this,null)):u8("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.D)(this.FM,this),(0,g.D)(this.EV,this))};
g.k.xa=function(){this.u.unsubscribe("onlineScreenChange",(0,g.D)(this.VH,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=PSa,b=g.Ga("yt.mdx.remote.debug.handlers_");g.zb(b||[],a);g.oe(this.i);g.R.prototype.xa.call(this)};
g.k.le=function(a){S7("Controller",a)};
g.k.HM=function(a,b){this.i==a&&(b||w8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.k.hV=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),u8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)u8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{u8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.ea("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:w8(this,
new s8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:w8(this,new o8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:w8(this,new l8(this.u,a,this.config_));break;default:this.le("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.le("Stopping receiver w/o session: "+a.friendlyName)}else this.le("onReceiverAction_ called without receiver.")};
g.k.fU=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.le("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.le("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return u8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.le('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);w8(this,new o8(this.u,b,this.C,this.config_))}b=this.i;b.S=a;b.S.appState==chrome.cast.DialAppState.RUNNING?(a=b.S.extraData||{},c=a.screenId||null,p8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=tTa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.S.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.zs(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=uTa(b,c)):a=uTa(b,c)):a=r8(b);return a};
g.k.FM=function(a){var b=this;if(!this.isDisposed()&&!this.J){u8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)u8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),w8(this,new l8(this.u,c,this.config_),!0);else{this.le("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=Z6(this.u.Gh(),
d.label);e&&U6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(u8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.oe(this.i),this.i=new l8(this.u,c,this.config_),this.i.subscribe("sessionScreen",(0,g.D)(this.HM,this,this.i)),this.i.subscribe("sessionFailed",function(){return yTa(b,b.i)}),this.i.As(null));
this.i.WF(a)}}};
g.k.pQ=function(){return this.i?this.i.UH():null};
g.k.EV=function(a){this.isDisposed()||(this.le("Failed to estabilish a session: "+g.Vh(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&w8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.k.kV=function(a){u8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=v8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;v8(this)!=b&&this.ea("yt-remote-cast2-availability-change",v8(this))}};
g.k.VH=function(){this.isDisposed()||(this.B=zTa(this),u8("Updating custom receivers: "+g.Vh(this.B)),chrome.cast.setCustomReceivers(this.B,g.Ha,(0,g.D)(function(){this.le("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",v8(this)))};
t8.prototype.setLaunchParams=t8.prototype.VW;t8.prototype.setConnectedScreenStatus=t8.prototype.UW;t8.prototype.stopSession=t8.prototype.qQ;t8.prototype.getCastSession=t8.prototype.pQ;t8.prototype.requestSession=t8.prototype.requestSession;t8.prototype.init=t8.prototype.init;t8.prototype.dispose=t8.prototype.dispose;var C8=[];g.k=H8.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";I8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Ck=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.J=a.playerTimeAt,this.C=a.seekableStart,this.i=a.seekableEnd,this.D=a.duration,this.S=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Ac=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Gj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+J8(this):this.D};
g.k.clone=function(){return new H8(N8(this))};g.w(P8,g.R);g.k=P8.prototype;g.k.getState=function(){return this.B};
g.k.play=function(){R8(this)?(this.i?this.i.play(null,g.Ha,W8(this,"play")):V8(this,"play"),U8(this,1,L8(Q8(this))),this.ea("remotePlayerChange")):S8(this,this.play)};
g.k.pause=function(){R8(this)?(this.i?this.i.pause(null,g.Ha,W8(this,"pause")):V8(this,"pause"),U8(this,2,L8(Q8(this))),this.ea("remotePlayerChange")):S8(this,this.pause)};
g.k.seekTo=function(a){if(R8(this)){if(this.i){var b=Q8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Ac()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ha,W8(this,"seekTo",{newTime:a}))}else V8(this,"seekTo",{newTime:a});U8(this,3,a);this.ea("remotePlayerChange")}else S8(this,g.Pa(this.seekTo,a))};
g.k.stop=function(){if(R8(this)){this.i?this.i.stop(null,g.Ha,W8(this,"stopVideo")):V8(this,"stopVideo");var a=Q8(this);a.index=-1;a.videoId="";I8(a);T8(this,a);this.ea("remotePlayerChange")}else S8(this,this.stop)};
g.k.setVolume=function(a,b){if(R8(this)){var c=Q8(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.D)(function(){S7("CP","set receiver volume: "+d)},this),(0,g.D)(function(){this.le("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.D)(function(){S7("CP","set receiver muted: "+b)},this),(0,g.D)(function(){this.le("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);V8(this,"setVolume",e)}c.muted=b;c.volume=a;T8(this,c)}else S8(this,g.Pa(this.setVolume,a,b))};
g.k.WH=function(a,b){if(R8(this)){var c=Q8(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Vh(b.style),g.pc(a,c.trackData));V8(this,"setSubtitlesTrack",a);T8(this,c)}else S8(this,g.Pa(this.WH,a,b))};
g.k.setAudioTrack=function(a,b){R8(this)?(b=b.getLanguageInfo().getId(),V8(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=Q8(this),a.audioTrackId=b,T8(this,a)):S8(this,g.Pa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=Q8(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);M8(l,a,c||0);void 0!==b&&(K8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.Vh(h));V8(this,"setPlaylist",m);d||T8(this,l)};
g.k.tA=function(a,b){if(R8(this)){if(a&&b){var c=Q8(this);M8(c,a,b);T8(this,c)}V8(this,"previous")}else S8(this,g.Pa(this.tA,a,b))};
g.k.nextVideo=function(a,b){if(R8(this)){if(a&&b){var c=Q8(this);M8(c,a,b);T8(this,c)}V8(this,"next")}else S8(this,g.Pa(this.nextVideo,a,b))};
g.k.Br=function(){if(R8(this)){V8(this,"clearPlaylist");var a=Q8(this);a.reset();T8(this,a);this.ea("remotePlayerChange")}else S8(this,this.Br)};
g.k.JJ=function(){R8(this)?V8(this,"dismissAutoplay"):S8(this,this.JJ)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.R.prototype.dispose.call(this)};
g.k.xa=function(){LTa(this);this.C=null;this.D.clear();O8(this,null);g.R.prototype.xa.call(this)};
g.k.ZF=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.i.length&&(b.i=b.u,b.i.reverse(),b.u=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.fV=function(a,b){this.ea(a,b)};
g.k.OT=function(a){if(!a)this.yw(null),O8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=Q8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)S7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,T8(this,b)}};
g.k.yw=function(a){S7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.S);if(this.i=a)this.i.addUpdateListener(this.S),MTa(this),this.ea("remotePlayerChange")};
g.k.NT=function(a){a?(MTa(this),this.ea("remotePlayerChange")):this.yw(null)};
g.k.uG=function(){V8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.VT=function(){var a=ITa();a&&O8(this,a)};
g.k.le=function(a){S7("CP",a)};g.w(X8,g.R);g.k=X8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Da&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.hc.listId=c);this.hc.videoId=d;this.hc.index=l||0;this.hc.state=3;K8(this.hc,
n);this.C="UNSUPPORTED";c=this.Da?"setInitialState":"setPlaylist";Y8("Connecting with "+c+" and params: "+g.Vh(m));this.i.connect({method:c,params:g.Vh(m)},a,VRa())}else Y8("Connecting without params"),this.i.connect({},a,VRa());PTa(this)};
g.k.NA=function(a){this.i.NA(a)};
g.k.dispose=function(){this.isDisposed()||(g.Fa("yt.mdx.remote.remoteClient_",null,void 0),this.ea("beforeDispose"),Z8(this,3));g.R.prototype.dispose.call(this)};
g.k.xa=function(){$8(this);b9(this);a9(this);g.rt(this.K);this.K=NaN;g.rt(this.S);this.S=NaN;this.B=null;g.xu(this.Z);this.Z.length=0;this.i.dispose();g.R.prototype.xa.call(this);this.C=this.J=this.u=this.hc=this.i=null};
g.k.QR=function(){this.Kr(2)};
g.k.ST=function(){Y8("Channel opened");this.ya&&(this.ya=!1,a9(this),this.ma=g.pt((0,g.D)(function(){Y8("Timing out waiting for a screen.");this.Kr(1)},this),15E3));
ZRa(NSa(this.i),this.Ja)};
g.k.PT=function(){Y8("Channel closed");isNaN(this.D)?d7(!0):d7();this.dispose()};
g.k.QT=function(a,b){d7();isNaN(this.Lv())?(b&&"shortLived"==this.Aa&&this.ea("browserChannelAuthError",a),Y8("Channel error: "+a+" without reconnection"),this.dispose()):(this.ya=!0,Y8("Channel error: "+a+" with reconnection in "+this.Lv()+" ms"),Z8(this,2))};
g.k.YK=function(a){if(!this.u||0===this.u.length)return!1;for(var b=g.r(this.u),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.RT=function(a){a.params?Y8("Received: action="+a.action+", params="+g.Vh(a.params)):Y8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Q6(a.params.devices);this.u=g.lm(a,function(c){return new S6(c)});
a=!!g.rb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
STa(this,a);a=this.YK("mlm");this.ea("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.Ab(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
STa(this,!1);break;case "remoteConnected":var b=new S6(Q6(a.params.device));g.rb(this.u,function(c){return b?c.id==b.id:!1})||IRa(this.u,b);
break;case "remoteDisconnected":b=new S6(Q6(a.params.device));g.Ab(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":UTa(this,a);break;case "nowPlaying":WTa(this,a);break;case "onStateChange":VTa(this,a);break;case "onAdStateChange":XTa(this,a);break;case "onVolumeChanged":YTa(this,a);break;case "onSubtitlesTrackChanged":TTa(this,a);break;case "nowAutoplaying":ZTa(this,a);break;case "autoplayDismissed":this.ea("autoplayDismissed");break;case "autoplayUpNext":this.J=a.params.videoId||null;this.ea("autoplayUpNext",this.J);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.ea("autoplayModeChange",this.C);"DISABLED"==this.C&&this.ea("autoplayDismissed");break;case "onHasPreviousNextChanged":$Ta(this,a);break;case "requestAssistedSignIn":this.ea("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.ea("loopModeChange",a.params.loopMode);break;default:Y8("Unrecognized action: "+a.action)}};
g.k.JW=function(){if(this.B){var a=this.B;this.B=null;this.hc.videoId!=a&&c9(this,"getNowPlaying")}};
g.k.NR=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Lv())?N7(this.i)&&isNaN(this.D)&&(a=1):a=2);return a};
g.k.Kr=function(a){Y8("Disconnecting with "+a);g.Fa("yt.mdx.remote.remoteClient_",null,void 0);$8(this);this.ea("beforeDisconnect",a);1==a&&d7();OSa(this.i,a);this.dispose()};
g.k.LR=function(){var a=this.hc;this.B&&(a=this.hc.clone(),M8(a,this.B,a.index));return N8(a)};
g.k.WW=function(a){var b=new H8(a);b.videoId&&b.videoId!=this.hc.videoId&&(this.B=b.videoId,g.rt(this.K),this.K=g.pt((0,g.D)(this.JW,this),5E3));var c=[];this.hc.listId==b.listId&&this.hc.videoId==b.videoId&&this.hc.index==b.index||c.push("remoteQueueChange");this.hc.playerState==b.playerState&&this.hc.volume==b.volume&&this.hc.muted==b.muted&&L8(this.hc)==L8(b)&&g.Vh(this.hc.trackData)==g.Vh(b.trackData)||c.push("remotePlayerChange");this.hc.reset(a);g.Ob(c,function(d){this.ea(d)},this)};
g.k.mK=function(){var a=this.i.J.id,b=g.rb(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Lv=function(){var a=this.i;return a.u.isActive()?a.u.u-Date.now():NaN};
g.k.IR=function(){return this.C||"UNSUPPORTED"};
g.k.JR=function(){return this.J||""};
g.k.rQ=function(){if(!isNaN(this.Lv())){var a=this.i.u;g.Eq(a.i);a.start()}};
g.k.TW=function(a,b){c9(this,a,b);RTa(this)};
g.k.XH=function(){var a=g.Kt("SID","")||"",b=g.Kt("SAPISID","")||"",c=g.Kt("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Hc(g.Xa(a),2);b=g.Hc(g.Xa(b),2);c=g.Hc(g.Xa(c),2);return g.Hc(g.Xa(a+","+b+","+c),2)};
X8.prototype.subscribe=X8.prototype.subscribe;X8.prototype.unsubscribeByKey=X8.prototype.cg;X8.prototype.getProxyState=X8.prototype.NR;X8.prototype.disconnect=X8.prototype.Kr;X8.prototype.getPlayerContextData=X8.prototype.LR;X8.prototype.setPlayerContextData=X8.prototype.WW;X8.prototype.getOtherConnectedRemoteId=X8.prototype.mK;X8.prototype.getReconnectTimeout=X8.prototype.Lv;X8.prototype.getAutoplayMode=X8.prototype.IR;X8.prototype.getAutoplayVideoId=X8.prototype.JR;X8.prototype.reconnect=X8.prototype.rQ;
X8.prototype.sendMessage=X8.prototype.TW;X8.prototype.getXsrfToken=X8.prototype.XH;X8.prototype.isCapabilitySupportedOnConnectedDevices=X8.prototype.YK;g.w(d9,W7);g.k=d9.prototype;g.k.Gh=function(a){return this.Pe.$_gs(a)};
g.k.contains=function(a){return!!this.Pe.$_c(a)};
g.k.get=function(a){return this.Pe.$_g(a)};
g.k.start=function(){this.Pe.$_st()};
g.k.add=function(a,b,c){this.Pe.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Pe.$_r(a,b,c)};
g.k.gB=function(a,b,c,d){this.Pe.$_un(a,b,c,d)};
g.k.xa=function(){for(var a=0,b=this.i.length;a<b;++a)this.Pe.$_ubk(this.i[a]);this.i.length=0;this.Pe=null;W7.prototype.xa.call(this)};
g.k.sQ=function(){this.ea("screenChange")};
g.k.MU=function(){this.ea("onlineScreenChange")};
f8.prototype.$_st=f8.prototype.start;f8.prototype.$_gspc=f8.prototype.mQ;f8.prototype.$_gsppc=f8.prototype.TH;f8.prototype.$_c=f8.prototype.contains;f8.prototype.$_g=f8.prototype.get;f8.prototype.$_a=f8.prototype.add;f8.prototype.$_un=f8.prototype.gB;f8.prototype.$_r=f8.prototype.remove;f8.prototype.$_gs=f8.prototype.Gh;f8.prototype.$_gos=f8.prototype.SH;f8.prototype.$_s=f8.prototype.subscribe;f8.prototype.$_ubk=f8.prototype.cg;var q9=null,w9=!1,e9=null,f9=null,v9=null,j9=[];g.w(x9,g.I);g.k=x9.prototype;g.k.xa=function(){g.I.prototype.xa.call(this);this.i.stop();this.B.stop();this.S.stop();this.ma();var a=this.Sb;a.unsubscribe("proxyStateChange",this.DM,this);a.unsubscribe("remotePlayerChange",this.Cw,this);a.unsubscribe("remoteQueueChange",this.fA,this);a.unsubscribe("previousNextChange",this.AM,this);a.unsubscribe("nowAutoplaying",this.uM,this);a.unsubscribe("autoplayDismissed",this.XL,this);this.Sb=this.u=null};
g.k.lj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.Sb.B)if(y9(this)){if(!Q8(this.Sb).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":Q8(this.Sb).Ac()?this.Sb.pause():this.Sb.play();break;case "control_play":this.Sb.play();break;case "control_pause":this.Sb.pause();break;case "control_seek":this.K.RH(c[0],c[1]);break;case "control_subtitles_set_track":z9(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.I.getCurrentTime();A9(this,0===c?void 0:c);break;case "control_seek":A9(this,c[0]);break;case "control_subtitles_set_track":z9(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.KT=function(a){this.S.gQ(a)};
g.k.BX=function(a){this.lj("control_subtitles_set_track",g.ic(a)?null:a)};
g.k.TN=function(){var a=this.I.getOption("captions","track");g.ic(a)||z9(this,a)};
g.k.Qb=function(a){this.u.Qb(a,this.I.getVideoData().lengthSeconds)};
g.k.xU=function(){g.ic(this.C)||kUa(this,this.C);this.D=!1};
g.k.DM=function(a,b){this.B.stop();2===b&&this.NN()};
g.k.Cw=function(){if(y9(this)){this.i.stop();var a=Q8(this.Sb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.vf=1;break;case 1082:case 1083:this.u.vf=0;break;default:this.u.vf=-1}switch(a.playerState){case 1081:case 1:this.Tb(new g.UJ(8));this.MN();break;case 1085:case 3:this.Tb(new g.UJ(9));break;case 1083:case 0:this.Tb(new g.UJ(2));this.K.stop();this.Qb(this.I.getVideoData().lengthSeconds);break;case 1084:this.Tb(new g.UJ(4));break;case 2:this.Tb(new g.UJ(4));this.Qb(L8(a));
break;case -1:this.Tb(new g.UJ(64));break;case -1E3:this.Tb(new g.UJ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=Q8(this.Sb).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,kUa(this,a));a=Q8(this.Sb);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.Z.isActive()||this.vO()}else jUa(this)};
g.k.AM=function(){this.I.ea("mdxpreviousnextchange")};
g.k.fA=function(){y9(this)||jUa(this)};
g.k.uM=function(a){isNaN(a)||this.I.ea("mdxnowautoplaying",a)};
g.k.XL=function(){this.I.ea("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){y9(this)&&this.Sb.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===Q8(this.Sb).playerState?A9(this,a):b&&this.Sb.seekTo(a)};
g.k.vO=function(){var a=this;if(y9(this)){var b=Q8(this.Sb);this.events.jc(this.Y);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.Y=this.events.T(this.I,"onVolumeChange",function(c){iUa(a,c)})}};
g.k.MN=function(){this.i.stop();if(!this.Sb.isDisposed()){var a=Q8(this.Sb);a.Ac()&&this.Tb(new g.UJ(8));this.Qb(L8(a));this.i.start()}};
g.k.NN=function(){this.B.stop();this.i.stop();var a=this.Sb.C.getReconnectTimeout();2==this.Sb.B&&!isNaN(a)&&this.B.start()};
g.k.Tb=function(a){this.B.stop();var b=this.J;if(!g.ZJ(b,a)){var c=g.T(a,2);c!==g.T(this.J,2)&&this.I.Zs(c);this.J=a;mUa(this.u,b,a)}};g.w(B9,g.U);B9.prototype.fd=function(){this.i.show()};
B9.prototype.Db=function(){this.i.hide()};
B9.prototype.u=function(){g.BJ("https://web.archive.org/web/20211001013923/https://support.google.com/youtube/answer/7640706")};
B9.prototype.B=function(){R6("mdx-manual-pairing-popup-ok");this.Db()};g.w(C9,g.U);C9.prototype.fd=function(){this.i.show()};
C9.prototype.Db=function(){this.i.hide()};
C9.prototype.u=function(){R6("mdx-privacy-popup-cancel");this.Db()};
C9.prototype.B=function(){R6("mdx-privacy-popup-confirm");this.Db()};g.w(D9,g.U);D9.prototype.onStateChange=function(a){lUa(this,a.state)};g.w(E9,g.NP);E9.prototype.D=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.oo=g.Pb(a,this.i,this),g.OP(this,g.lm(a,this.i)),a=this.I.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Xh(a),this.enable(!0)):this.enable(!1)};
E9.prototype.i=function(a){return a.key};
E9.prototype.bj=function(a){return"cast-selector-receiver"===a?"Cast...":this.oo[a].name};
E9.prototype.Bf=function(a){g.NP.prototype.Bf.call(this,a);this.I.setOption("remote","currentReceiver",this.oo[a]);this.Bb.Db()};g.w(F9,g.ZM);g.k=F9.prototype;
g.k.create=function(){var a=this.player.V(),b=g.dF(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};dUa(b,a);this.subscriptions.push(g.dv("yt-remote-before-disconnect",this.JT,this));this.subscriptions.push(g.dv("yt-remote-connection-change",this.lV,this));this.subscriptions.push(g.dv("yt-remote-receiver-availability-change",this.CM,
this));this.subscriptions.push(g.dv("yt-remote-auto-connect",this.jV,this));this.subscriptions.push(g.dv("yt-remote-receiver-resumed",this.iV,this));this.subscriptions.push(g.dv("mdx-privacy-popup-confirm",this.xW,this));this.subscriptions.push(g.dv("mdx-privacy-popup-cancel",this.wW,this));this.subscriptions.push(g.dv("mdx-manual-pairing-popup-ok",this.OS,this));this.CM()};
g.k.load=function(){this.player.cancelPlayback();g.ZM.prototype.load.call(this);this.ci=new x9(this,this.player,this.Sb);var a=(a=hUa())?a.currentTime:0;var b=u9()?new P8(o9(),void 0):null;0==a&&b&&(a=L8(Q8(b)));0!==a&&this.Qb(a);mUa(this,this.ud,this.ud);this.player.Uk(6)};
g.k.unload=function(){this.player.ea("mdxautoplaycanceled");this.Vm=this.sj;g.pe(this.ci,this.Sb);this.Sb=this.ci=null;g.ZM.prototype.unload.call(this);this.player.Uk(5);G9(this)};
g.k.xa=function(){g.ev(this.subscriptions);g.ZM.prototype.xa.call(this)};
g.k.Lk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.ci.lj.apply(this.ci,[a].concat(g.v(c)))};
g.k.getAdState=function(){return this.vf};
g.k.Ck=function(){return this.Sb?Q8(this.Sb).Ck:!1};
g.k.hasNext=function(){return this.Sb?Q8(this.Sb).hasNext:!1};
g.k.Qb=function(a,b){this.nL=a||0;this.player.ea("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.nL};
g.k.getProgressState=function(){var a=Q8(this.Sb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().N("web_player_mdx_allow_seeking_change_killswitch")?this.player.sf():!a.isAdPlaying()&&this.player.sf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+J8(a):a.B,isAtLiveHead:1>=(a.u?a.i+J8(a):a.i)-this.getCurrentTime(),loaded:a.S,seekableEnd:a.u?a.i+J8(a):a.i,seekableStart:0<
a.C?a.C+J8(a):a.C}};
g.k.nextVideo=function(){this.Sb&&this.Sb.nextVideo()};
g.k.tA=function(){this.Sb&&this.Sb.tA()};
g.k.JT=function(a){1===a&&(this.wF=this.Sb?Q8(this.Sb):null)};
g.k.lV=function(){var a=u9()?new P8(o9(),void 0):null;if(a){var b=this.Vm;this.loaded&&this.unload();this.Sb=a;this.wF=null;b.key!==this.sj.key&&(this.Vm=b,this.load())}else g.oe(this.Sb),this.Sb=null,this.loaded&&(this.unload(),(a=this.wF)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,L8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.CM=function(){var a=[this.sj],b=a.concat,c=eUa();D8()&&g.Rz("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.oo=b.call(a,c);a=p9()||this.sj;H9(this,a);this.player.Oa("onMdxReceiversChange")};
g.k.jV=function(){var a=p9();H9(this,a)};
g.k.iV=function(){this.Vm=p9()};
g.k.xW=function(){this.Kw=!0;G9(this);w9=!1;q9&&s9(q9,1);q9=null};
g.k.wW=function(){this.Kw=!1;G9(this);H9(this,this.sj);this.Vm=this.sj;w9=!1;q9=null;this.player.playVideo()};
g.k.OS=function(){this.Gz=!0;G9(this);g.Qz("yt-remote-manual-pairing-warning-shown",!0,2592E3);w9=!1;q9&&s9(q9,1);q9=null};
g.k.jf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.oo;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?F8():H9(this,b)),this.loaded?this.Vm:this.sj;case "quickCast":return 2===this.oo.length&&"cast-selector-receiver"===this.oo[1].key?(b&&F8(),!0):!1}};
g.k.uG=function(){this.Sb.uG()};
g.k.Ji=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.YM("remote",F9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 01:39:23 Oct 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:15:28 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 174.114
  exclusion.robots: 0.129
  exclusion.robots.policy: 0.115
  cdx.remote: 0.092
  esindex: 0.016
  LoadShardBlock: 120.953 (3)
  PetaboxLoader3.datanode: 39.831 (4)
  PetaboxLoader3.resolve: 87.951 (3)
  load_resource: 85.006
*/