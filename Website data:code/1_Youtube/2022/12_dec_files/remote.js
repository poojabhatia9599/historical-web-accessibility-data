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

(function(g){var window=this;'use strict';var Ngb=function(a){return a},Ogb=function(a){return a},Pgb=function(a,b,c){g.ig(a);
var d=g.pg(a,c);b=g.Fg(g.bda(d,b,!0));d!==b&&g.qg(a,c,b);return b},Qgb=function(a,b){this.u=a>>>0;
this.j=b>>>0},Sgb=function(a){if(!a)return Rgb||(Rgb=new Qgb(0,0));
if(!/^\d+$/.test(a))return null;g.Ada(a);return new Qgb(g.Xg,g.Yg)},Tgb=function(a,b,c){null!=c&&("string"===typeof c&&Sgb(c),g.rh(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Xg=b,g.Yg=c,g.ph(a,g.Xg),g.ph(a,g.Yg)):(c=Sgb(c),a=a.j,b=c.j,g.ph(a,c.u),g.ph(a,b)))},Ugb=function(a,b,c){b=g.kda(b,c);
null!=b&&(g.rh(a,c,0),a.j.j.push(b?1:0))},Vgb=function(a,b,c,d,e){b=g.Gg(b,d,c);
null!=b&&(c=g.Oda(a,c),e(b,a),g.Pda(a,c))},Xgb=function(a){g.J.call(this,a,-1,Wgb)},Ygb=function(a){g.J.call(this,a)},Zgb=function(a){g.J.call(this,a)},$gb=function(a){g.J.call(this,a)},ahb=function(a){g.J.call(this,a)},Z7=function(a){g.Hj(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ta()).toString(36));
return a},$7=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.gga(a.u,b,c)},bhb=function(a){if(a instanceof g.wm)return a;
if("function"==typeof a.wj)return a.wj(!1);if(g.Ka(a)){var b=0,c=new g.wm;c.next=function(){for(;;){if(b>=a.length)return g.G2;if(b in a)return g.xm(a[b++]);b++}};
return c}throw Error("Not implemented");},chb=function(a,b,c){if(g.Ka(a))g.Jb(a,b,c);
else for(a=bhb(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},dhb=function(a,b){var c=[];
chb(b,function(d){try{var e=g.Po.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Oka(e)&&c.push(d)},a);
return c},ehb=function(a,b){dhb(a,b).forEach(function(c){g.Po.prototype.remove.call(this,c)},a)},fhb=function(a){if(a.oa){if(a.oa.locationOverrideToken)return{locationOverrideToken:a.oa.locationOverrideToken};
if(null!=a.oa.latitudeE7&&null!=a.oa.longitudeE7)return{latitudeE7:a.oa.latitudeE7,longitudeE7:a.oa.longitudeE7}}return null},ghb=function(a,b){g.pb(a,b)||a.push(b)},hhb=function(a){var b=0,c;
for(c in a)b++;return b},ihb=function(a,b){return g.$c(a,b)},jhb=function(a){try{return g.Ca.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},a8=function(a){if(g.Ca.JSON)try{return g.Ca.JSON.parse(a)}catch(b){}return jhb(a)},khb=function(a,b,c,d){var e=new g.zj(null);
a&&g.Aj(e,a);b&&g.Bj(e,b);c&&g.Cj(e,c);d&&(e.B=d);return e},b8=function(a,b){g.ry[a]=!0;
var c=g.py();c&&c.publish.apply(c,arguments);g.ry[a]=!1},c8=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.compatibleSenderThemes=new Set;this.experiments=new Set;this.theme="u";new g.wo;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=
a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",lhb(this,a.capabilities||""),mhb(this,a.compatibleSenderThemes||""),nhb(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=
a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},lhb=function(a,b){a.capabilities.clear();
g.Bm(b.split(","),g.Ra(ihb,ohb)).forEach(function(c){a.capabilities.add(c)})},mhb=function(a,b){a.compatibleSenderThemes.clear();
g.Bm(b.split(","),g.Ra(ihb,phb)).forEach(function(c){a.compatibleSenderThemes.add(c)})},nhb=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},d8=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},e8=function(a,b){return!!b&&(a.id==b||a.uuid==b)},qhb=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},rhb=function(a){return new d8(a)},shb=function(a){return Array.isArray(a)?g.Qg(a,rhb):[]},f8=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},thb=function(a){return Array.isArray(a)?"["+g.Qg(a,f8).join(",")+"]":"null"},uhb=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},vhb=function(a){return g.Qg(a,function(b){return{key:b.id,
name:b.name}})},whb=function(a,b){return g.kb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},g8=function(a,b){return g.kb(a,function(c){return e8(c,b)})},xhb=function(){var a=(0,g.MA)();
a&&ehb(a,a.j.wj(!0))},h8=function(){var a=g.PA("yt-remote-connected-devices")||[];
g.Gb(a);return a},yhb=function(a){if(g.qb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Qg(a,function(d,e){return 0==e?d:d.substring(c.length)})},zhb=function(a){g.OA("yt-remote-connected-devices",a,86400)},i8=function(){if(Ahb)return Ahb;
var a=g.PA("yt-remote-device-id");a||(a=uhb(),g.OA("yt-remote-device-id",a,31536E3));for(var b=h8(),c=1,d=a;g.pb(b,d);)c++,d=a+"#"+c;return Ahb=d},Bhb=function(){var a=h8(),b=i8();
g.RA()&&g.Ib(a,b);a=yhb(a);if(g.qb(a))try{g.kv("remote_sid")}catch(c){}else try{g.iv("remote_sid",a.join(","),-1)}catch(c){}},Chb=function(){return g.PA("yt-remote-session-browser-channel")},Dhb=function(){return g.PA("yt-remote-local-screens")||[]},Ehb=function(){g.OA("yt-remote-lounge-token-expiration",!0,86400)},Fhb=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Qg(Dhb(),function(d){return d.loungeToken}),c=g.Qg(a,function(d){return d.loungeToken});
g.Pk(c,function(d){return!g.pb(b,d)})&&Ehb();
g.OA("yt-remote-local-screens",a,31536E3)},j8=function(a){a||(g.QA("yt-remote-session-screen-id"),g.QA("yt-remote-session-video-id"));
Bhb();a=h8();g.sb(a,i8());zhb(a)},Ghb=function(){if(!k8){var a=g.Yo();
a&&(k8=new g.Mo(a))}},Hhb=function(){Ghb();
return k8?!!k8.get("yt-remote-use-staging-server"):!1},Ihb=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},Jhb=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},Khb=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},l8=function(a){a.length?Lhb(a.shift(),function(){l8(a)}):Mhb()},Nhb=function(a){return"chrome-extension://"+a+"/cast_sender.js"},Lhb=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Zi(d,g.Vd(a));(document.head||document.documentElement).appendChild(d)},Ohb=function(){var a=Ihb(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20221201000032/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20221201000032/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},Mhb=function(){var a=Khb();
a&&a(!1,"No cast extension found")},Qhb=function(){if(Phb){var a=2,b=Khb(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Lhb("//web.archive.org/web/20221201000032/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Mhb,c)}},Rhb=function(){Qhb();
var a=Ohb();a.push("//web.archive.org/web/20221201000032/https://www.gstatic.com/eureka/clank/cast_sender.js");l8(a)},Thb=function(){Qhb();
var a=Ohb();a.push.apply(a,g.u(Shb.map(Nhb)));a.push("//web.archive.org/web/20221201000032/https://www.gstatic.com/eureka/clank/cast_sender.js");l8(a)},Uhb=function(){this.j=m8();
this.j.Vm("/client_streamz/youtube/living_room/mdx/channel/opened",{Cg:3,Bg:"channel_type"})},Vhb=function(a,b){a.j.Am("/client_streamz/youtube/living_room/mdx/channel/opened",b)},Whb=function(){this.j=m8();
this.j.Vm("/client_streamz/youtube/living_room/mdx/channel/closed",{Cg:3,Bg:"channel_type"})},Xhb=function(a,b){a.j.Am("/client_streamz/youtube/living_room/mdx/channel/closed",b)},Yhb=function(){this.j=m8();
this.j.Vm("/client_streamz/youtube/living_room/mdx/channel/message_received",{Cg:3,Bg:"channel_type"})},Zhb=function(a,b){a.j.Am("/client_streamz/youtube/living_room/mdx/channel/message_received",b)},$hb=function(){this.j=m8();
this.j.Vm("/client_streamz/youtube/living_room/mdx/channel/error",{Cg:3,Bg:"channel_type"})},aib=function(a,b){a.j.Am("/client_streamz/youtube/living_room/mdx/channel/error",b)},bib=function(){this.j=m8();
this.j.Vm("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},cib=function(){this.j=m8();
this.j.Vm("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},n8=function(a,b,c){g.C.call(this);
this.I=null!=c?(0,g.Qa)(a,c):a;this.Nh=b;this.D=(0,g.Qa)(this.oW,this);this.j=!1;this.u=0;this.B=this.zc=null;this.C=[]},o8=function(a,b,c){g.C.call(this);
this.C=null!=c?a.bind(c):a;this.Nh=b;this.B=null;this.j=!1;this.u=0;this.zc=null},dib=function(a){a.zc=g.Af(function(){a.zc=null;
a.j&&!a.u&&(a.j=!1,dib(a))},a.Nh);
var b=a.B;a.B=null;a.C.apply(null,b)},p8=function(){},eib=function(){g.fb.call(this,"p")},fib=function(){g.fb.call(this,"o")},hib=function(){return gib=gib||new g.Bd},iib=function(a){g.fb.call(this,"serverreachability",a)},q8=function(a){var b=hib();
b.dispatchEvent(new iib(b,a))},jib=function(a){g.fb.call(this,"statevent",a)},r8=function(a){var b=hib();
b.dispatchEvent(new jib(b,a))},kib=function(a,b,c,d){g.fb.call(this,"timingevent",a);
this.size=b;this.xx=d},s8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.Ca.setTimeout(function(){a()},b)},lib=function(){},t8=function(a,b,c,d){this.D=a;
this.C=b;this.Ec=c;this.xc=d||1;this.ib=new g.Mj(this);this.yb=45E3;a=g.GH?125:void 0;this.kb=new g.zf(a);this.Ma=null;this.B=!1;this.T=this.Xa=this.J=this.Oa=this.ya=this.Nb=this.Z=null;this.oa=[];this.j=null;this.ea=0;this.I=this.Aa=null;this.Tb=-1;this.Ka=!1;this.rb=0;this.Wa=null;this.wc=this.Sa=this.Wb=this.Ba=!1;this.u=new mib},mib=function(){this.B=null;
this.j="";this.u=!1},oib=function(a,b,c){a.Oa=1;
a.J=Z7(b.clone());a.T=c;a.Ba=!0;nib(a,null)},nib=function(a,b){a.ya=Date.now();
u8(a);a.Xa=a.J.clone();$7(a.Xa,"t",a.xc);a.ea=0;var c=a.D.Oa;a.u=new mib;a.j=pib(a.D,c?b:null,!a.T);0<a.rb&&(a.Wa=new o8((0,g.Qa)(a.DN,a,a.j),a.rb));a.ib.Qa(a.j,"readystatechange",a.rW);b=a.Ma?g.hd(a.Ma):{};a.T?(a.Aa||(a.Aa="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Xa,a.Aa,a.T,b)):(a.Aa="GET",a.j.send(a.Xa,a.Aa,null,b));q8(1)},qib=function(a){return a.j?"GET"==a.Aa&&2!=a.Oa&&a.D.ke:!1},uib=function(a,b,c){for(var d=!0,e;!a.Ka&&a.ea<c.length;)if(e=rib(a,c),e==v8){4==
b&&(a.I=4,r8(14),d=!1);
break}else if(e==sib){a.I=4;r8(15);d=!1;break}else tib(a,e);qib(a)&&e!=v8&&e!=sib&&(a.u.j="",a.ea=0);4!=b||0!=c.length||a.u.u||(a.I=1,r8(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.wc&&(a.wc=!0,a.D.EK(a)):(w8(a),x8(a))},rib=function(a,b){var c=a.ea,d=b.indexOf("\n",c);
if(-1==d)return v8;c=Number(b.substring(c,d));if(isNaN(c))return sib;d+=1;if(d+c>b.length)return v8;b=b.slice(d,d+c);a.ea=d+c;return b},u8=function(a){a.Nb=Date.now()+a.yb;
vib(a,a.yb)},vib=function(a,b){if(null!=a.Z)throw Error("WatchDog timer not null");
a.Z=s8((0,g.Qa)(a.pW,a),b)},y8=function(a){a.Z&&(g.Ca.clearTimeout(a.Z),a.Z=null)},x8=function(a){a.D.og()||a.Ka||wib(a.D,a)},w8=function(a){y8(a);
g.ab(a.Wa);a.Wa=null;a.kb.stop();a.ib.dg();if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},tib=function(a,b){try{var c=a.D;
if(0!=c.Ng&&(c.j==a||xib(c.u,a)))if(!a.Sa&&xib(c.u,a)&&3==c.Ng){try{var d=c.Le.j.parse(b)}catch(z){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.T){if(c.j)if(c.j.ya+3E3<a.ya)z8(c),A8(c);else break a;yib(c);r8(18)}}else c.Hd=e[1],0<c.Hd-c.Sa&&37500>e[2]&&c.kb&&0==c.oa&&!c.ea&&(c.ea=s8((0,g.Qa)(c.sW,c),6E3));if(1>=zib(c.u)&&c.Yc){try{c.Yc()}catch(z){}c.Yc=void 0}}else B8(c,11)}else if((a.Sa||c.j==a)&&z8(c),!g.Rb(b))for(e=c.Le.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Sa=f[0];
f=f[1];if(2==c.Ng)if("c"==f[0]){c.C=f[1];c.wc=f[2];var h=f[3];null!=h&&(c.EN=h);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Xa=1.5*l);d=c;var m=a.iJ();if(m){var n=g.Bi(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.Ub(n,"spdy")||g.Ub(n,"quic")||g.Ub(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(Aib(p,p.u),p.u=null))}if(d.Ba){var q=g.Bi(m,"X-HTTP-Session-Id");q&&(d.Qd=q,g.Hj(d.Ma,d.Ba,q))}}c.Ng=3;c.D&&c.D.KN();c.td&&(c.pd=Date.now()-a.ya);d=c;var r=a;d.ud=Bib(d,d.Oa?d.wc:null,d.xc);if(r.Sa){Cib(d.u,
r);var w=r,y=d.Xa;y&&w.setTimeout(y);w.Z&&(y8(w),u8(w));d.j=r}else Dib(d);0<c.B.length&&C8(c)}else"stop"!=f[0]&&"close"!=f[0]||B8(c,7);else 3==c.Ng&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?B8(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.JN(f),c.oa=0)}q8(4)}catch(z){}},Eib=function(a,b){this.j=a;
this.map=b;this.context=null},Fib=function(a){this.D=a||10;
g.Ca.PerformanceNavigationTiming?(a=g.Ca.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.Ca.chrome&&g.Ca.chrome.loadTimes&&g.Ca.chrome.loadTimes()&&g.Ca.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},Gib=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},zib=function(a){return a.u?1:a.j?a.j.size:0},xib=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},Aib=
function(a,b){a.j?a.j.add(b):a.u=b},Cib=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},Hib=function(a){if(null!=a.u)return a.B.concat(a.u.oa);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.t(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.oa);return b}return g.yb(a.B)},Iib=function(a,b){var c=new lib;
if(g.Ca.Image){var d=new Image;d.onload=g.Ra(D8,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Ra(D8,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Ra(D8,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Ra(D8,c,d,"TestLoadImage: timeout",!1,b);g.Ca.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},D8=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},Jib=function(){this.j=new p8},Kib=function(a,b,c){var d=c||"";
try{g.yj(a,function(e,f){var h=e;g.Ma(e)&&(h=g.Vh(e));b.push(d+f+"="+encodeURIComponent(h))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},E8=function(a,b,c){return c&&c.F_?c.F_[a]||b:b},Lib=function(a){this.B=[];
this.wc=this.ud=this.Ma=this.xc=this.j=this.Qd=this.Ba=this.Ka=this.J=this.Nb=this.Z=null;this.Ye=this.Wa=0;this.We=E8("failFast",!1,a);this.kb=this.ea=this.T=this.I=this.D=null;this.Ec=!0;this.Hd=this.Sa=-1;this.Wb=this.oa=this.ya=0;this.Ve=E8("baseRetryDelayMs",5E3,a);this.Gf=E8("retryDelaySeedMs",1E4,a);this.Xe=E8("forwardChannelMaxRetries",2,a);this.Gd=E8("forwardChannelRequestTimeoutMs",2E4,a);this.je=a&&a.E8a||void 0;this.ke=a&&a.C8a||!1;this.Xa=void 0;this.Oa=a&&a.O4||!1;this.C="";this.u=new Fib(a&&
a.z6a);this.Le=new Jib;this.yb=a&&a.N6a||!1;this.rb=a&&a.F6a||!1;this.yb&&this.rb&&(this.rb=!1);this.Wf=a&&a.t6a||!1;a&&a.P6a&&(this.Ec=!1);this.td=!this.yb&&this.Ec&&a&&a.D6a||!1;this.Yc=void 0;this.pd=0;this.ib=!1;this.Tb=this.Aa=null},A8=function(a){a.j&&(Mib(a),a.j.cancel(),a.j=null)},Nib=function(a){A8(a);
a.T&&(g.Ca.clearTimeout(a.T),a.T=null);z8(a);a.u.cancel();a.I&&("number"===typeof a.I&&g.Ca.clearTimeout(a.I),a.I=null)},C8=function(a){Gib(a.u)||a.I||(a.I=!0,g.qf(a.GN,a),a.ya=0)},Pib=function(a,b){if(zib(a.u)>=a.u.C-(a.I?1:0))return!1;
if(a.I)return a.B=b.oa.concat(a.B),!0;if(1==a.Ng||2==a.Ng||a.ya>=(a.We?0:a.Xe))return!1;a.I=s8((0,g.Qa)(a.GN,a,b),Oib(a,a.ya));a.ya++;return!0},Rib=function(a,b){var c;
b?c=b.Ec:c=a.Wa++;var d=a.Ma.clone();g.Hj(d,"SID",a.C);g.Hj(d,"RID",c);g.Hj(d,"AID",a.Sa);F8(a,d);a.J&&a.Z&&g.Lj(d,a.J,a.Z);c=new t8(a,a.C,c,a.ya+1);null===a.J&&(c.Ma=a.Z);b&&(a.B=b.oa.concat(a.B));b=Qib(a,c,1E3);c.setTimeout(Math.round(.5*a.Gd)+Math.round(.5*a.Gd*Math.random()));Aib(a.u,c);oib(c,d,b)},F8=function(a,b){a.Ka&&g.Qc(a.Ka,function(c,d){g.Hj(b,d,c)});
a.D&&g.yj({},function(c,d){g.Hj(b,d,c)})},Qib=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Qa)(a.D.tW,a.D,a):null;a:for(var e=a.B,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].j,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{Kib(p,h,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=h.join("&");break a}}a=a.B.splice(0,c);b.oa=a;return d},Dib=function(a){a.j||a.T||(a.Wb=1,g.qf(a.FN,a),a.oa=0)},yib=function(a){if(a.j||a.T||3<=a.oa)return!1;
a.Wb++;a.T=s8((0,g.Qa)(a.FN,a),Oib(a,a.oa));a.oa++;return!0},Mib=function(a){null!=a.Aa&&(g.Ca.clearTimeout(a.Aa),a.Aa=null)},Sib=function(a){a.j=new t8(a,a.C,"rpc",a.Wb);
null===a.J&&(a.j.Ma=a.Z);a.j.rb=0;var b=a.ud.clone();g.Hj(b,"RID","rpc");g.Hj(b,"SID",a.C);g.Hj(b,"CI",a.kb?"0":"1");g.Hj(b,"AID",a.Sa);g.Hj(b,"TYPE","xmlhttp");F8(a,b);a.J&&a.Z&&g.Lj(b,a.J,a.Z);a.Xa&&a.j.setTimeout(a.Xa);var c=a.j;a=a.wc;c.Oa=1;c.J=Z7(b.clone());c.T=null;c.Ba=!0;nib(c,a)},z8=function(a){null!=a.ea&&(g.Ca.clearTimeout(a.ea),a.ea=null)},wib=function(a,b){var c=null;
if(a.j==b){z8(a);Mib(a);a.j=null;var d=2}else if(xib(a.u,b))c=b.oa,Cib(a.u,b),d=1;else return;if(0!=a.Ng)if(b.B)if(1==d){c=b.T?b.T.length:0;b=Date.now()-b.ya;var e=a.ya;d=hib();d.dispatchEvent(new kib(d,c,b,e));C8(a)}else Dib(a);else{var f=b.Tb;e=b.getLastError();if(3==e||0==e&&0<f||!(1==d&&Pib(a,b)||2==d&&yib(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:B8(a,5);break;case 4:B8(a,10);break;case 3:B8(a,6);break;default:B8(a,2)}}},Oib=function(a,b){var c=a.Ve+Math.floor(Math.random()*
a.Gf);
a.isActive()||(c*=2);return c*b},B8=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Qa)(a.U4,a);c||(c=new g.zj("//web.archive.org/web/20221201000032/https://www.google.com/images/cleardot.gif"),g.Ca.location&&"http"==g.Ca.location.protocol||g.Aj(c,"https"),Z7(c));Iib(c.toString(),d)}else r8(2);a.Ng=0;a.D&&a.D.IN(b);Tib(a);Nib(a)},Tib=function(a){a.Ng=0;
a.Tb=[];if(a.D){var b=Hib(a.u);if(0!=b.length||0!=a.B.length)g.zb(a.Tb,b),g.zb(a.Tb,a.B),a.u.B.length=0,g.yb(a.B),a.B.length=0;a.D.HN()}},Uib=function(a){if(0==a.Ng)return a.Tb;
var b=[];g.zb(b,Hib(a.u));g.zb(b,a.B);return b},Bib=function(a,b,c){var d=g.Ij(c);
""!=d.j?(b&&g.Bj(d,b+"."+d.j),g.Cj(d,d.C)):(d=g.Ca.location,d=khb(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.Ba;c=a.Qd;b&&c&&g.Hj(d,b,c);g.Hj(d,"VER",a.EN);F8(a,d);return d},pib=function(a,b,c){if(b&&!a.Oa)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.ke&&!a.je?new g.ni(new g.uj({mU:!0})):new g.ni(a.je);b.J=a.Oa;return b},Vib=function(){},Wib=function(){if(g.Re&&!g.Lc(10))throw Error("Environmental error: no available transport.");
},H8=function(a,b){g.Bd.call(this);
this.j=new Lib(b);this.I=a;this.u=b&&b.k0||null;a=b&&b.j0||null;b&&b.y6a&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.Z=a;a=b&&b.w7a||null;b&&b.SR&&(a?a["X-WebChannel-Content-Type"]=b.SR:a={"X-WebChannel-Content-Type":b.SR});b&&b.IP&&(a?a["X-WebChannel-Client-Profile"]=b.IP:a={"X-WebChannel-Client-Profile":b.IP});this.j.Nb=a;(a=b&&b.u7a)&&!g.Rb(a)&&(this.j.J=a);this.J=b&&b.O4||!1;this.D=b&&b.g8a||!1;(b=b&&b.B_)&&!g.Rb(b)&&(this.j.Ba=b,g.Zc(this.u,b)&&g.ed(this.u,
b));this.C=new G8(this)},Xib=function(a){eib.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.Wc(b))?g.fd(b,this.metadataKey):b:this.data=a},Yib=function(a){fib.call(this);
this.status=1;this.errorCode=a},G8=function(a){this.j=a},Zib=function(a,b){this.u=a;
this.j=b},$ib=function(a){return Uib(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?jhb(b):b);return b})},I8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.Ca.setTimeout(function(){a()},b)},K8=function(a){J8.dispatchEvent(new ajb(J8,a))},ajb=function(a){g.fb.call(this,"statevent",a)},L8=function(a,b,c,d){this.j=a;
this.C=b;this.J=c;this.I=d||1;this.u=45E3;this.B=new g.Mj(this);this.D=new g.zf;this.D.setInterval(250)},cjb=function(a,b,c){a.hv=1;
a.Rp=Z7(b.clone());a.ws=c;a.Ba=!0;bjb(a,null)},djb=function(a,b,c,d,e){a.hv=1;
a.Rp=Z7(b.clone());a.ws=null;a.Ba=c;e&&(a.UT=!1);bjb(a,d)},bjb=function(a,b){a.fv=Date.now();
M8(a);a.Tp=a.Rp.clone();$7(a.Tp,"t",a.I);a.bC=0;a.Yh=a.j.zG(a.j.zy()?b:null);0<a.xG&&(a.ZB=new o8((0,g.Qa)(a.LN,a,a.Yh),a.xG));a.B.Qa(a.Yh,"readystatechange",a.vW);b=a.us?g.hd(a.us):{};a.ws?(a.aC="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Yh.send(a.Tp,a.aC,a.ws,b)):(a.aC="GET",a.UT&&!g.Mc&&(b.Connection="close"),a.Yh.send(a.Tp,a.aC,null,b));a.j.Ul(1)},gjb=function(a,b){var c=a.bC,d=b.indexOf("\n",c);
if(-1==d)return ejb;c=Number(b.substring(c,d));if(isNaN(c))return fjb;d+=1;if(d+c>b.length)return ejb;b=b.slice(d,d+c);a.bC=d+c;return b},ijb=function(a,b){a.fv=Date.now();
M8(a);var c=b?window.location.hostname:"";a.Tp=a.Rp.clone();g.Hj(a.Tp,"DOMAIN",c);g.Hj(a.Tp,"t",a.I);try{a.pm=new ActiveXObject("htmlfile")}catch(m){N8(a);a.Sp=7;K8(22);O8(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in P8)f=P8[f];else if(f in hjb)f=P8[f]=hjb[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
P8[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.je(g.Sd("b/12014412"),d);a.pm.open();a.pm.write(g.ge(c));a.pm.close();a.pm.parentWindow.m=(0,g.Qa)(a.A3,a);a.pm.parentWindow.d=(0,g.Qa)(a.ZS,a,!0);a.pm.parentWindow.rpcClose=(0,g.Qa)(a.ZS,a,!1);c=a.pm.createElement("DIV");a.pm.parentWindow.document.body.appendChild(c);d=g.Zd(a.Tp.toString());d=g.De(g.Xd(d));d=g.je(g.Sd("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Vba(c,d);a.j.Ul(1)},M8=function(a){a.yG=
Date.now()+a.u;
jjb(a,a.u)},jjb=function(a,b){if(null!=a.ov)throw Error("WatchDog timer not null");
a.ov=I8((0,g.Qa)(a.uW,a),b)},kjb=function(a){a.ov&&(g.Ca.clearTimeout(a.ov),a.ov=null)},O8=function(a){a.j.og()||a.rs||a.j.cC(a)},N8=function(a){kjb(a);
g.ab(a.ZB);a.ZB=null;a.D.stop();a.B.dg();if(a.Yh){var b=a.Yh;a.Yh=null;b.abort();b.dispose()}a.pm&&(a.pm=null)},ljb=function(a,b){try{a.j.MN(a,b),a.j.Ul(4)}catch(c){}},njb=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;mjb(a,b,function(h){h?c(!0):g.Ca.setTimeout(function(){njb(a,b,c,d,f)},f)})}},mjb=function(a,b,c){var d=new Image;
d.onload=function(){try{Q8(d),c(!0)}catch(e){}};
d.onerror=function(){try{Q8(d),c(!1)}catch(e){}};
d.onabort=function(){try{Q8(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Q8(d),c(!1)}catch(e){}};
g.Ca.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},Q8=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},ojb=function(a){this.j=a;
this.u=new p8},pjb=function(a){var b=R8(a.j,a.Uy,"/mail/images/cleardot.gif");
Z7(b);njb(b.toString(),5E3,(0,g.Qa)(a.WY,a),3,2E3);a.Ul(1)},qjb=function(a){var b=a.j.Z;
if(null!=b)K8(5),b?(K8(11),S8(a.j,a,!1)):(K8(12),S8(a.j,a,!0));else if(a.Ki=new L8(a),a.Ki.us=a.AG,b=a.j,b=R8(b,b.zy()?a.yy:null,a.BG),K8(5),!g.Re||g.Lc(10))$7(b,"TYPE","xmlhttp"),djb(a.Ki,b,!1,a.yy,!1);else{$7(b,"TYPE","html");var c=a.Ki;a=!!a.yy;c.hv=3;c.Rp=Z7(b.clone());ijb(c,a)}},rjb=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new p8;this.T=a||null;this.Z=null!=b?b:null;this.J=c||!1},sjb=function(a,b){this.j=a;
this.map=b;this.context=null},tjb=function(a,b,c,d){g.fb.call(this,"timingevent",a);
this.size=b;this.xx=d},ujb=function(a){g.fb.call(this,"serverreachability",a)},wjb=function(a){a.wW(1,0);
a.dC=R8(a,null,a.CG);vjb(a)},xjb=function(a){a.iq&&(a.iq.abort(),a.iq=null);
a.Vf&&(a.Vf.cancel(),a.Vf=null);a.Bo&&(g.Ca.clearTimeout(a.Bo),a.Bo=null);T8(a);a.Ti&&(a.Ti.cancel(),a.Ti=null);a.Up&&(g.Ca.clearTimeout(a.Up),a.Up=null)},yjb=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new sjb(a.xW++,b));2!=a.j&&3!=a.j||vjb(a)},zjb=function(a){var b=0;
a.Vf&&b++;a.Ti&&b++;return b},vjb=function(a){a.Ti||a.Up||(a.Up=I8((0,g.Qa)(a.QN,a),0),a.tv=0)},Cjb=function(a,b){if(1==a.j){if(!b){a.By=Math.floor(1E5*Math.random());
b=a.By++;var c=new L8(a,"",b);c.us=a.ym;var d=Ajb(a),e=a.dC.clone();g.Hj(e,"RID",b);g.Hj(e,"CVER","1");U8(a,e);cjb(c,e,d);a.Ti=c;a.j=2}}else 3==a.j&&(b?Bjb(a,b):0==a.u.length||a.Ti||Bjb(a))},Bjb=function(a,b){if(b)if(6<a.xs){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.By-1;b=Ajb(a)}else c=b.J,b=b.ws;else c=a.By++,b=Ajb(a);var d=a.dC.clone();g.Hj(d,"SID",a.C);g.Hj(d,"RID",c);g.Hj(d,"AID",a.uv);U8(a,d);c=new L8(a,a.C,c,a.tv+1);c.us=a.ym;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Ti=c;cjb(c,d,b)},U8=function(a,b){a.Eh&&(a=a.Eh.UN())&&g.Qc(a,function(c,d){g.Hj(b,d,c)})},Ajb=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.xs&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Ou:e.Ou},f++){e.Ou=a.u[f].j;var h=a.u[f].map;e.Ou=6>=a.xs?f:e.Ou-d;try{g.Qc(h,function(l){return function(m,n){c.push("req"+l.Ou+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Ou+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},Djb=function(a){a.Vf||a.Bo||(a.I=1,a.Bo=I8((0,g.Qa)(a.PN,a),0),a.qv=0)},Fjb=function(a){if(a.Vf||a.Bo||3<=a.qv)return!1;
a.I++;a.Bo=I8((0,g.Qa)(a.PN,a),Ejb(a,a.qv));a.qv++;return!0},S8=function(a,b,c){a.NF=c;
a.zm=b.Ao;a.J||wjb(a)},T8=function(a){null!=a.ys&&(g.Ca.clearTimeout(a.ys),a.ys=null)},Ejb=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},V8=function(a,b){if(2==b||9==b){var c=null;
a.Eh&&(c=null);var d=(0,g.Qa)(a.T4,a);c||(c=new g.zj("//web.archive.org/web/20221201000032/https://www.google.com/images/cleardot.gif"),Z7(c));mjb(c.toString(),1E4,d)}else K8(2);Gjb(a,b)},Gjb=function(a,b){a.j=0;
a.Eh&&a.Eh.RN(b);Hjb(a);xjb(a)},Hjb=function(a){a.j=0;
a.zm=-1;if(a.Eh)if(0==a.B.length&&0==a.u.length)a.Eh.DG();else{var b=g.yb(a.B),c=g.yb(a.u);a.B.length=0;a.u.length=0;a.Eh.DG(b,c)}},R8=function(a,b,c){var d=g.Ij(c);
if(""!=d.j)b&&g.Bj(d,b+"."+d.j),g.Cj(d,d.C);else{var e=window.location;d=khb(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Ay&&g.Qc(a.Ay,function(f,h){g.Hj(d,h,f)});
g.Hj(d,"VER",a.xs);U8(a,d);return d},Ijb=function(){},Jjb=function(){this.j=[];
this.u=[]},Kjb=function(a){g.fb.call(this,"channelMessage");
this.message=a},Ljb=function(a){g.fb.call(this,"channelError");
this.error=a},Mjb=function(a,b){this.action=a;
this.params=b||{}},W8=function(a,b){g.C.call(this);
this.j=new g.fo(this.s3,0,this);g.E(this,this.j);this.Nh=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Qa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Qa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},Njb=function(){},m8=function(){if(!X8){X8=new g.Df(new Njb);
var a=g.Bu("client_streamz_web_flush_count",-1);-1!==a&&(X8.C=a)}return X8},Ojb=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ya=a;this.J=b;this.B=new g.Lo;this.u=new W8(this.s4,this);this.j=null;this.ea=!1;this.I=null;this.Z="";this.T=this.D=0;this.C=[];this.Oa=c;this.oa=d;this.Sa=e;this.Ma=new Uhb;this.Aa=new Whb;this.Ka=new Yhb;this.Ba=new $hb;this.Wa=new bib;this.Xa=new cib},Pjb=function(a){if(a.j){var b=a.oa(),c=a.j.ym||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.ym=c}},Y8=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.ci(4,a))||"";b&&(this.port=":"+b);this.domain=g.di(a)||"";a=g.jc();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.ic(a,"10.0")&&(this.u=!1))},Z8=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.ji(c+b,{})},Qjb=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ra(a.C,d,!0),onError:g.Ra(a.B,e),onTimeout:g.Ra(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.$u(b,a)},Rjb=function(a,b){g.Bd.call(this);
var c=this;this.Zc=a();this.Zc.subscribe("handlerOpened",this.DW,this);this.Zc.subscribe("handlerClosed",this.zW,this);this.Zc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Zc.subscribe("handlerMessage",this.BW,this);this.j=b},Sjb=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new Wib:e;var f=void 0===f?new g.Lo:f;this.pathPrefix=a;this.j=b;this.ya=c;this.D=f;this.T=null;this.Z=this.J=0;this.channel=null;this.I=0;this.B=new W8(function(){d.B.isActive();var h;0===(null==(h=d.channel)?void 0:zib((new Zib(h,h.j)).j.u))&&d.connect(d.T,d.J)});
this.C={};this.u={};this.ea=!1;this.logger=null;this.oa=[];this.Gg=void 0;this.Ma=new Uhb;this.Aa=new Whb;this.Ka=new Yhb;this.Ba=new $hb},Tjb=function(a){g.sd(a.channel,"m",function(){a.I=3;
a.B.reset();a.T=null;a.J=0;for(var b=g.t(a.oa),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.oa=[];a.ma("webChannelOpened");Vhb(a.Ma,"WEB_CHANNEL")});
g.sd(a.channel,"n",function(){a.I=0;a.B.isActive()||a.ma("webChannelClosed");var b,c=null==(b=a.channel)?void 0:$ib(new Zib(b,b.j));c&&(a.oa=[].concat(g.u(c)));Xhb(a.Aa,"WEB_CHANNEL")});
g.sd(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.ma("webChannelMessage",new Mjb(c[0],c[1]));a.Gg=b.statusCode;Zhb(a.Ka,"WEB_CHANNEL")});
g.sd(a.channel,"o",function(){401===a.Gg||a.B.start();a.ma("webChannelError");aib(a.Ba,"WEB_CHANNEL")})},Ujb=function(a){var b=a.ya();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},Vjb=function(a){g.Bd.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.GW,this);this.j.subscribe("webChannelClosed",this.EW,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.FW,this)},Wjb=function(a,b,c,d,e){function f(){return new Ojb(Z8(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.Au("enable_mdx_web_channel_desktop")?new Vjb(function(){return new Sjb(Z8(a,"/wc"),b,c)}):new Rjb(f,e)},$jb=function(){var a=Xjb;
Yjb();$8.push(a);Zjb()},a9=function(a,b){Yjb();
var c=akb(a,String(b));g.qb($8)?bkb(c):(Zjb(),g.Jb($8,function(d){d(c)}))},b9=function(a){a9("CP",a)},Yjb=function(){$8||($8=g.Fa("yt.mdx.remote.debug.handlers_")||[],g.Da("yt.mdx.remote.debug.handlers_",$8))},bkb=function(a){var b=(c9+1)%50;
c9=b;d9[b]=a;e9||(e9=49==b)},Zjb=function(){var a=$8;
if(d9[0]){var b=e9?c9:-1;do{b=(b+1)%50;var c=d9[b];g.Jb(a,function(d){d(c)})}while(b!=c9);
d9=Array(50);c9=-1;e9=!1}},akb=function(a,b){var c=(Date.now()-ckb)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},f9=function(a){g.Zz.call(this);
this.I=a;this.screens=[]},dkb=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},ekb=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Bm(a.screens,function(f){return!!whb(b,f)});
for(var d=0,e=b.length;d<e;d++)c=dkb(a,b[d])||c;return c},fkb=function(a,b){var c=a.screens.length;
a.screens=g.Bm(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},gkb=function(a,b,c,d,e){g.Zz.call(this);
this.B=a;this.J=b;this.C=c;this.I=d;this.D=e;this.u=0;this.j=null;this.zc=NaN},h9=function(a){f9.call(this,"LocalScreenService");
this.u=a;this.j=NaN;g9(this);this.info("Initializing with "+thb(this.screens))},hkb=function(a){if(a.screens.length){var b=g.Qg(a.screens,function(d){return d.id}),c=Z8(a.u,"/pairing/get_lounge_token_batch");
Qjb(a.u,c,{screen_ids:b.join(",")},(0,g.Qa)(a.d_,a),(0,g.Qa)(a.c_,a))}},g9=function(a){if(g.Au("deprecate_pair_servlet_enabled"))return ekb(a,[]);
var b=shb(Dhb());b=g.Bm(b,function(c){return!c.uuid});
return ekb(a,b)},i9=function(a,b){Fhb(g.Qg(a.screens,qhb));
b&&Ehb()},jkb=function(a,b){g.Zz.call(this);
this.I=b;b=(b=g.PA("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=d.length,f=0;f<e;++f){var h=d[f].id;c[h]=g.pb(b,h)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;ikb("Initialized with "+g.Vh(this.j))},kkb=function(a,b,c){var d=Z8(a.D,"/pairing/get_screen_availability");
Qjb(a.D,d,{lounge_token:b.token},(0,g.Qa)(function(e){e=e.screens||[];for(var f=e.length,h=0;h<f;++h)if(e[h].loungeToken==b.token){c("online"==e[h].status);return}c(!1)},a),(0,g.Qa)(function(){c(!1)},a))},mkb=function(a,b){a:if(hhb(b)!=hhb(a.j))var c=!1;
else{c=g.Yc(b);for(var d=c.length,e=0;e<d;++e)if(!a.j[c[e]]){c=!1;break a}c=!0}c||(ikb("Updated online screens: "+g.Vh(a.j)),a.j=b,a.ma("screenChange"));lkb(a)},j9=function(a){isNaN(a.B)||g.Xu(a.B);
a.B=g.Vu((0,g.Qa)(a.DL,a),0<a.C&&a.C<g.Ta()?2E4:1E4)},ikb=function(a){a9("OnlineScreenService",a)},nkb=function(a){var b={};
g.Jb(a.I(),function(c){c.token?b[c.token]=c.id:this.xf("Requesting availability of screen w/o lounge token.")});
return b},lkb=function(a){a=g.Yc(g.Rc(a.j,function(b){return b}));
g.Gb(a);a.length?g.OA("yt-remote-online-screen-ids",a.join(","),60):g.QA("yt-remote-online-screen-ids")},k9=function(a,b){b=void 0===b?!1:b;
f9.call(this,"ScreenService");this.C=a;this.J=b;this.j=this.u=null;this.B=[];this.D={};okb(this)},qkb=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Cj(),l=c?g8(h,c):null;c&&(a.J||l)||(l=g8(h,b));if(l){l.uuid=b;var m=l9(a,l);kkb(a.j,m,function(n){e(n?m:null)})}else c?pkb(a,c,(0,g.Qa)(function(n){var p=l9(this,new d8({name:d,
screenId:c,loungeToken:n,dialId:b||""}));kkb(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},rkb=function(a,b){for(var c=a.screens.length,d=0;d<c;++d)if(a.screens[d].name==b)return a.screens[d];
return null},skb=function(a,b,c){kkb(a.j,b,c)},pkb=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.$u(Z8(a.C,"/pairing/get_lounge_token_batch"),e)},tkb=function(a){a.screens=a.u.Cj();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=a.screens.length;for(d=0;d<b;++d){var e=a.screens[d];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+thb(a.screens))},okb=function(a){ukb(a);
a.u=new h9(a.C);a.u.subscribe("screenChange",(0,g.Qa)(a.m_,a));tkb(a);a.J||(a.B=shb(g.PA("yt-remote-automatic-screen-cache")||[]));ukb(a);a.info("Initializing automatic screens: "+thb(a.B));a.j=new jkb(a.C,(0,g.Qa)(a.Cj,a,!0));a.j.subscribe("screenChange",(0,g.Qa)(function(){this.ma("onlineScreenChange")},a))},l9=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=g8(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.J||vkb(a));ukb(a);a.D[b.uuid]=b.id;g.OA("yt-remote-device-id-map",a.D,31536E3);return b},vkb=function(a){a=g.Bm(a.B,function(b){return"shortLived"!=b.idType});
g.OA("yt-remote-automatic-screen-cache",g.Qg(a,qhb))},ukb=function(a){a.D=g.PA("yt-remote-device-id-map")||{}},m9=function(a,b,c){g.Zz.call(this);
this.Ba=c;this.B=a;this.j=b;this.C=null},n9=function(a,b){a.C=b;
a.ma("sessionScreen",a.C)},wkb=function(a,b){a.C&&(a.C.token=b,l9(a.B,a.C));
a.ma("sessionScreen",a.C)},o9=function(a,b){a9(a.Ba,b)},p9=function(a,b,c){m9.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.oa=(0,g.Qa)(this.LW,this);this.Aa=(0,g.Qa)(this.K3,this);this.ea=g.Vu(function(){xkb(d,null)},12E4);
this.J=this.D=this.I=this.T=0;this.ya=!1;this.Z="unknown"},zkb=function(a,b){g.Xu(a.J);
a.J=0;0==b?ykb(a):a.J=g.Vu(function(){ykb(a)},b)},ykb=function(a){Akb(a,"getLoungeToken");
g.Xu(a.D);a.D=g.Vu(function(){Bkb(a,null)},3E4)},Akb=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Vh());
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Qa)(function(){o9(this,"Failed to send message: "+b+".")},a)):o9(a,"Sending yt message without session: "+g.Vh(c))},Ckb=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.FQ(b,function(c){n9(a,c)},function(){return a.zi()},5)):a.zi(Error("Waiting for session status timed out."))},Ekb=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new d8(b);Dkb(a,d,function(e){e?(a.ya=!0,l9(a.B,d),n9(a,d),a.Z="unknown",zkb(a,c)):(g.Fu(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.zi())},5)},xkb=function(a,b){g.Xu(a.ea);
a.ea=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?Ekb(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.Fu(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),Ckb(a,b.screenId))):(g.Fu(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),Ckb(a,b.screenId)):Ckb(a,b.screenId):a.zi(Error("Waiting for session status timed out."))},Bkb=function(a,b){g.Xu(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.Z=c,zkb(a,3E4)):(wkb(a,b.loungeToken),a.ya=!1,a.Z="unknown",zkb(a,b.loungeTokenRefreshIntervalMs))},Dkb=function(a,b,c,d){g.Xu(a.I);
a.I=0;skb(a.B,b,function(e){e||0>d?c(e):a.I=g.Vu(function(){Dkb(a,b,c,d-1)},300)})},Fkb=function(a){g.Xu(a.T);
a.T=0;g.Xu(a.I);a.I=0;g.Xu(a.ea);a.ea=0;g.Xu(a.D);a.D=0;g.Xu(a.J);a.J=0},q9=function(a,b,c,d){m9.call(this,a,b,"DialSession");
this.config_=d;this.u=this.T=null;this.Aa="";this.Oa=c;this.Ma=null;this.ea=function(){};
this.Z=NaN;this.Ka=(0,g.Qa)(this.MW,this);this.D=function(){};
this.J=this.I=0;this.oa=!1;this.ya="unknown"},r9=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},Gkb=function(a){a.D=a.B.WN(a.Aa,a.j.label,a.j.friendlyName,r9(a),function(b,c){a.D=function(){};
a.oa=!0;n9(a,b);"shortLived"==b.idType&&0<c&&s9(a,c)},function(b){a.D=function(){};
a.zi(b)})},Hkb=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.Oa;Hhb()&&(b.env_useStageMdx=1);return g.hi(b)},Ikb=function(a){return new Promise(function(b){a.Aa=uhb();
if(a.Ma){var c=new chrome.cast.DialLaunchResponse(!0,Hkb(a));b(c);Gkb(a)}else a.ea=function(){g.Xu(a.Z);a.ea=function(){};
a.Z=NaN;var d=new chrome.cast.DialLaunchResponse(!0,Hkb(a));b(d);Gkb(a)},a.Z=g.Vu(function(){a.ea()},100)})},Kkb=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new d8(b);return(new Promise(function(e){Jkb(a,d,function(f){f?(a.oa=!0,l9(a.B,d),n9(a,d),s9(a,c)):g.Fu(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):Ikb(a)})},Lkb=function(a,b){var c=a.T.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){qkb(a.B,c,b,d,function(f){f&&f.token&&n9(a,f);e(f)},function(f){o9(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):Ikb(a)})},Jkb=function(a,b,c,d){g.Xu(a.I);
a.I=0;skb(a.B,b,function(e){e||0>d?c(e):a.I=g.Vu(function(){Jkb(a,b,c,d-1)},300)})},s9=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
r9(a)&&(g.Xu(a.J),a.J=0,0==b?Mkb(a):a.J=g.Vu(function(){Mkb(a)},b))},Mkb=function(a){r9(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ya=c,s9(a,3E4)):(a.oa=!1,a.ya="unknown",wkb(a,b.loungeToken),s9(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ya="noLoungeTokenResponse";s9(a,3E4)})},Nkb=function(a){g.Xu(a.I);
a.I=0;g.Xu(a.J);a.J=0;a.D();a.D=function(){};
g.Xu(a.Z)},t9=function(a,b){m9.call(this,a,b,"ManualSession");
this.u=g.Vu((0,g.Qa)(this.Xw,this,null),150)},u9=function(a,b){g.Zz.call(this);
this.config_=b;this.u=a;this.T=b.appId||"233637DE";this.C=b.theme||"cl";this.Z=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.j=null;this.J=!1;this.B=[];this.D=(0,g.Qa)(this.B2,this)},Okb=function(a,b){return b?g.kb(a.B,function(c){return e8(b,c.label)},a):null},v9=function(a){a9("Controller",a)},Xjb=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},w9=function(a){return a.J||!!a.B.length||!!a.j},x9=function(a,b,c){b!=a.j&&(g.ab(a.j),(a.j=b)?(c?a.ma("yt-remote-cast2-receiver-resumed",
b.j):a.ma("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Qa)(a.XS,a,b)),b.subscribe("sessionFailed",function(){return Pkb(a,b)}),b.getScreen()?a.ma("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Xw(null)):a.ma("yt-remote-cast2-session-change",null))},Pkb=function(a,b){a.j==b&&a.ma("yt-remote-cast2-session-failed")},Qkb=function(a){var b=a.u.VN(),c=a.j&&a.j.j;
a=g.Qg(b,function(d){c&&e8(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Okb(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Xkb=function(a,b,c,d){d.disableCastApi?y9("Cannot initialize because disabled by Mdx config."):Rkb()?Skb(b,d)&&(Tkb(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Ukb(a,c):(window.__onGCastApiAvailable=function(e,f){e?Ukb(a,c):(z9("Failed to load cast API: "+f),Vkb(!1),Tkb(!1),g.QA("yt-remote-cast-available"),g.QA("yt-remote-cast-receiver"),
Wkb(),c(!1))},d.loadCastApiSetupScript?g.SA("https://web.archive.org/web/20221201000032/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=Ihb()&&Rhb():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?Mhb():89<=Ihb()?Thb():(Qhb(),l8(Shb.map(Nhb))))):y9("Cannot initialize because not running Chrome")},Wkb=function(){y9("dispose");
var a=A9();a&&a.dispose();g.Da("yt.mdx.remote.cloudview.instance_",null);Ykb(!1);g.uy(Zkb);Zkb.length=0},B9=function(){return!!g.PA("yt-remote-cast-installed")},$kb=function(){var a=g.PA("yt-remote-cast-receiver");
return a?a.friendlyName:null},alb=function(){y9("clearCurrentReceiver");
g.QA("yt-remote-cast-receiver")},blb=function(){return B9()?A9()?A9().getCastSession():(z9("getCastSelector: Cast is not initialized."),null):(z9("getCastSelector: Cast API is not installed!"),null)},clb=function(){B9()?A9()?C9()?(y9("Requesting cast selector."),A9().requestSession()):(y9("Wait for cast API to be ready to request the session."),Zkb.push(g.ty("yt-remote-cast2-api-ready",clb))):z9("requestCastSelector: Cast is not initialized."):z9("requestCastSelector: Cast API is not installed!")},
D9=function(a,b){C9()?A9().setConnectedScreenStatus(a,b):z9("setConnectedScreenStatus called before ready.")},Rkb=function(){var a=0<=g.jc().search(/ (CrMo|Chrome|CriOS)\//);
return g.lF||a},dlb=function(a,b){A9().init(a,b)},Skb=function(a,b){var c=!1;
A9()||(a=new u9(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.OA("yt-remote-cast-available",d);b8("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){y9("onReceiverSelected: "+d.friendlyName);
g.OA("yt-remote-cast-receiver",d);b8("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){y9("onReceiverResumed: "+d.friendlyName);
g.OA("yt-remote-cast-receiver",d);b8("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){y9("onSessionChange: "+f8(d));
d||g.QA("yt-remote-cast-receiver");b8("yt-remote-cast2-session-change",d)}),g.Da("yt.mdx.remote.cloudview.instance_",a),c=!0);
y9("cloudview.createSingleton_: "+c);return c},A9=function(){return g.Fa("yt.mdx.remote.cloudview.instance_")},Ukb=function(a,b){Vkb(!0);
Tkb(!1);dlb(a,function(c){c?(Ykb(!0),g.vy("yt-remote-cast2-api-ready")):(z9("Failed to initialize cast API."),Vkb(!1),g.QA("yt-remote-cast-available"),g.QA("yt-remote-cast-receiver"),Wkb());b(c)})},y9=function(a){a9("cloudview",a)},z9=function(a){a9("cloudview",a)},Vkb=function(a){y9("setCastInstalled_ "+a);
g.OA("yt-remote-cast-installed",a)},C9=function(){return!!g.Fa("yt.mdx.remote.cloudview.apiReady_")},Ykb=function(a){y9("setApiReady_ "+a);
g.Da("yt.mdx.remote.cloudview.apiReady_",a)},Tkb=function(a){g.Da("yt.mdx.remote.cloudview.initializing_",a)},E9=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.Cn=!1;this.T=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},elb=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Cn=!1;a.hasNext=!1;a.J=0;a.I=g.Ta();a.C=0;a.j=0;a.D=0;a.T=0;a.B=NaN;a.u=!1},F9=function(a){return a.Rc()?(g.Ta()-a.I)/1E3:0},G9=function(a,b){a.J=b;
a.I=g.Ta()},H9=function(a){switch(a.playerState){case 1:case 1081:return(g.Ta()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},I9=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&elb(a)},flb=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.id(a.trackData);b.hasPrevious=a.Cn;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.T;b.liveIngestionTime=a.B;return b},K9=function(a,b){g.Zz.call(this);
this.B=0;this.C=a;this.I=[];this.D=new Jjb;this.u=this.j=null;this.Z=(0,g.Qa)(this.f1,this);this.J=(0,g.Qa)(this.EA,this);this.T=(0,g.Qa)(this.e1,this);this.ea=(0,g.Qa)(this.g1,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.XL,this),glb(this))):c=3;0!=c&&(b?this.XL(c):g.Vu((0,g.Qa)(function(){this.XL(c)},this),0));
(a=blb())&&J9(this,a);this.subscribe("yt-remote-cast2-session-change",this.ea)},L9=function(a){return new E9(a.C.getPlayerContextData())},glb=function(a){g.Jb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Ra(this.z2,b),this))},a)},hlb=function(a){g.Jb(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},M9=function(a){return 1==a.getState()},N9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.u.push(b)},ilb=function(a,b,c){var d=L9(a);
G9(d,c);-1E3!=d.playerState&&(d.playerState=b);O9(a,d)},P9=function(a,b,c){a.C.sendMessage(b,c)},O9=function(a,b){hlb(a);
a.C.setPlayerContextData(flb(b));glb(a)},J9=function(a,b){a.u&&(a.u.removeUpdateListener(a.Z),a.u.removeMediaListener(a.J),a.EA(null));
a.u=b;a.u&&(b9("Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.Z),a.u.addMediaListener(a.J),a.u.media.length&&a.EA(a.u.media[0]))},jlb=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=L9(a);b.contentId!=d.videoId&&b9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;G9(d,a.j.getEstimatedTime());O9(a,d)}else b9("No cast media video. Ignoring state update.")},Q9=function(a,b,c){return(0,g.Qa)(function(d){this.xf("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.xf("Retrying "+b+" using MDx browser channel."),P9(this,b,c))},a)},T9=function(a,b,c,d){d=void 0===d?!1:d;
g.Zz.call(this);var e=this;this.I=NaN;this.Aa=!1;this.Z=this.T=this.oa=this.ya=NaN;this.ea=[];this.D=this.J=this.C=this.j=this.u=null;this.Ma=a;this.Ka=d;this.ea.push(g.$x(window,"beforeunload",function(){e.ww(2)}));
this.B=[];this.j=new E9;this.Oa=b.id;this.Ba=b.idType;this.u=Wjb(this.Ma,c,this.aO,"shortLived"==this.Ba,this.Oa);this.u.Qa("channelOpened",function(){klb(e)});
this.u.Qa("channelClosed",function(){R9("Channel closed");isNaN(e.I)?j8(!0):j8();e.dispose()});
this.u.Qa("channelError",function(f){j8();isNaN(e.Nz())?(1==f&&"shortLived"==e.Ba&&e.ma("browserChannelAuthError",f),R9("Channel error: "+f+" without reconnection"),e.dispose()):(e.Aa=!0,R9("Channel error: "+f+" with reconnection in "+e.Nz()+" ms"),S9(e,2))});
this.u.Qa("channelMessage",function(f){llb(e,f)});
this.u.Hp(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.RA()&&g.OA("yt-remote-session-video-id",f)})},mlb=function(a){return g.kb(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},R9=function(a){a9("conn",a)},S9=function(a,b){a.ma("proxyStateChange",b)},nlb=function(a){a.I=g.Vu(function(){R9("Connecting timeout");
a.ww(1)},2E4)},olb=function(a){g.Xu(a.I);
a.I=NaN},plb=function(a){g.Xu(a.ya);
a.ya=NaN},rlb=function(a){qlb(a);
a.oa=g.Vu(function(){U9(a,"getNowPlaying")},2E4)},qlb=function(a){g.Xu(a.oa);
a.oa=NaN},klb=function(a){R9("Channel opened");
a.Aa&&(a.Aa=!1,plb(a),a.ya=g.Vu(function(){R9("Timing out waiting for a screen.");a.ww(1)},15E3))},tlb=function(a,b){var c=null;
if(b){var d=mlb(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Da("yt.mdx.remote.remoteClient_",c);b&&(olb(a),plb(a));c=a.u.Ow()&&isNaN(a.I);b==c?b&&(S9(a,1),U9(a,"getSubtitlesTrack")):b?(a.DQ()&&a.j.reset(),S9(a,1),U9(a,"getNowPlaying"),slb(a)):a.ww(1)},ulb=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.dd(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.ma("remotePlayerChange"))},vlb=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;I9(a.j,d,e);a.ma("remoteQueueChange",c)},xlb=function(a,b){b.params=b.params||{};
vlb(a,b,"NOW_PLAYING_MAY_CHANGE");wlb(a,b);a.ma("autoplayDismissed")},wlb=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
G9(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.T=isNaN(c)?0:c;a.j.Tj(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?rlb(a):qlb(a);a.ma("remotePlayerChange")},ylb=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);G9(a.j,isNaN(b)?0:b);a.ma("remotePlayerChange")}},zlb=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.ma("remotePlayerChange")},Alb=function(a,b){a.J=b.params.videoId;
a.ma("nowAutoplaying",parseInt(b.params.timeout,10))},Blb=function(a,b){a.J=b.params.videoId||null;
a.ma("autoplayUpNext",a.J)},Clb=function(a,b){a.D=b.params.autoplayMode;
a.ma("autoplayModeChange",a.D);"DISABLED"==a.D&&a.ma("autoplayDismissed")},Dlb=function(a,b){var c="true"==b.params.hasNext;
a.j.Cn="true"==b.params.hasPrevious;a.j.hasNext=c;a.ma("previousNextChange")},llb=function(a,b){b=b.message;
b.params?R9("Received: action="+b.action+", params="+g.Vh(b.params)):R9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=a8(b.params.devices);a.B=g.Qg(b,function(d){return new c8(d)});
b=!!g.kb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
tlb(a,b);b=a.qR("mlm");a.ma("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.ub(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
tlb(a,!1);break;case "remoteConnected":var c=new c8(a8(b.params.device));g.kb(a.B,function(d){return d.equals(c)})||ghb(a.B,c);
break;case "remoteDisconnected":c=new c8(a8(b.params.device));g.ub(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":vlb(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":xlb(a,b);break;case "onStateChange":wlb(a,b);break;case "onAdStateChange":ylb(a,b);break;case "onVolumeChanged":zlb(a,b);break;case "onSubtitlesTrackChanged":ulb(a,b);break;case "nowAutoplaying":Alb(a,b);break;case "autoplayDismissed":a.ma("autoplayDismissed");break;case "autoplayUpNext":Blb(a,b);break;case "onAutoplayModeChanged":Clb(a,b);break;case "onHasPreviousNextChanged":Dlb(a,b);
break;case "requestAssistedSignIn":a.ma("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.ma("loopModeChange",b.params.loopMode);break;default:R9("Unrecognized action: "+b.action)}},slb=function(a){g.Xu(a.Z);
a.Z=g.Vu(function(){a.ww(1)},864E5)},U9=function(a,b,c){c?R9("Sending: action="+b+", params="+g.Vh(c)):R9("Sending: action="+b);
a.u.sendMessage(b,c)},Elb=function(a){f9.call(this,"ScreenServiceProxy");
this.jg=a;this.j=[];this.j.push(this.jg.$_s("screenChange",(0,g.Qa)(this.QW,this)));this.j.push(this.jg.$_s("onlineScreenChange",(0,g.Qa)(this.Z1,this)))},Jlb=function(a,b){Ghb();
if(!k8||!k8.get("yt-remote-disable-remote-module-for-dev")){b=g.M("MDX_CONFIG")||b;xhb();Bhb();V9||(V9=new Y8(b?b.loungeApiHost:void 0),Hhb()&&(V9.j="/api/loungedev"));W9||(W9=g.Fa("yt.mdx.remote.deferredProxies_")||[],g.Da("yt.mdx.remote.deferredProxies_",W9));Flb();var c=X9();if(!c){var d=new k9(V9,b?b.disableAutomaticScreenCache||!1:!1);g.Da("yt.mdx.remote.screenService_",d);c=X9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Da("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);Xkb(a,d,function(f){f?Y9()&&D9(Y9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){b8("yt-remote-receiver-availability-change")})},e)}b&&!g.Fa("yt.mdx.remote.initialized_")&&(g.Da("yt.mdx.remote.initialized_",!0),Z9("Initializing: "+g.Vh(b)),
$9.push(g.ty("yt-remote-cast2-api-ready",function(){b8("yt-remote-api-ready")})),$9.push(g.ty("yt-remote-cast2-availability-change",function(){b8("yt-remote-receiver-availability-change")})),$9.push(g.ty("yt-remote-cast2-receiver-selected",function(){a$(null);
b8("yt-remote-auto-connect","cast-selector-receiver")})),$9.push(g.ty("yt-remote-cast2-receiver-resumed",function(){b8("yt-remote-receiver-resumed","cast-selector-receiver")})),$9.push(g.ty("yt-remote-cast2-session-change",Glb)),$9.push(g.ty("yt-remote-connection-change",function(f){f?D9(Y9(),"YouTube TV"):b$()||(D9(null,null),alb())})),$9.push(g.ty("yt-remote-cast2-session-failed",function(){b8("yt-remote-connection-failed")})),a=Hlb(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.Au("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),Z9(" -- with channel params: "+g.Vh(a)),a?(g.OA("yt-remote-session-app",a.app),g.OA("yt-remote-session-name",a.name)):(g.QA("yt-remote-session-app"),g.QA("yt-remote-session-name")),g.Da("yt.mdx.remote.channelParams_",a),c.start(),Y9()||Ilb())}},Klb=function(){var a=X9().jg.$_gos();
var b=c$();b&&d$()&&(whb(a,b)||a.push(b));return vhb(a)},Mlb=function(){var a=Llb();
!a&&B9()&&$kb()&&(a={key:"cast-selector-receiver",name:$kb()});return a},Llb=function(){var a=Klb(),b=c$();
b||(b=b$());return g.kb(a,function(c){return b&&e8(b,c.key)?!0:!1})},c$=function(){var a=Y9();
if(!a)return null;var b=X9().Cj();return g8(b,a)},Glb=function(a){Z9("remote.onCastSessionChange_: "+f8(a));
if(a){var b=c$();if(b&&b.id==a.id){if(D9(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))e$&&(e$.token=a),(b=d$())&&b.Hp(a)}else b&&f$(),g$(a,1)}else d$()&&f$()},f$=function(){C9()?A9().stopSession():z9("stopSession called before API ready.");
var a=d$();a&&(a.disconnect(1),Nlb(null))},Olb=function(){var a=d$();
return!!a&&3!=a.getProxyState()},Z9=function(a){a9("remote",a)},X9=function(){if(!Plb){var a=g.Fa("yt.mdx.remote.screenService_");
Plb=a?new Elb(a):null}return Plb},Y9=function(){return g.Fa("yt.mdx.remote.currentScreenId_")},Qlb=function(a){g.Da("yt.mdx.remote.currentScreenId_",a)},Rlb=function(){return g.Fa("yt.mdx.remote.connectData_")},a$=function(a){g.Da("yt.mdx.remote.connectData_",a)},d$=function(){return g.Fa("yt.mdx.remote.connection_")},Nlb=function(a){var b=d$();
a$(null);a||Qlb("");g.Da("yt.mdx.remote.connection_",a);W9&&(g.Jb(W9,function(c){c(a)}),W9.length=0);
b&&!a?b8("yt-remote-connection-change",!1):!b&&a&&b8("yt-remote-connection-change",!0)},b$=function(){var a=g.RA();
if(!a)return null;var b=X9();if(!b)return null;b=b.Cj();return g8(b,a)},g$=function(a,b){Y9();
c$()&&c$();if(h$)e$=a;else{Qlb(a.id);var c=g.Fa("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new T9(V9,a,Hlb(),c);a.connect(b,Rlb());a.subscribe("beforeDisconnect",function(d){b8("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){d$()&&(d$(),Nlb(null))});
a.subscribe("browserChannelAuthError",function(){var d=c$();d&&"shortLived"==d.idType&&(C9()?A9().handleBrowserChannelAuthError():z9("refreshLoungeToken called before API ready."))});
Nlb(a)}},Ilb=function(){var a=b$();
a?(Z9("Resume connection to: "+f8(a)),g$(a,0)):(j8(),alb(),Z9("Skipping connecting because no session screen found."))},Flb=function(){var a=Hlb();
if(g.dd(a)){a=i8();var b=g.PA("yt-remote-session-name")||"",c=g.PA("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Da("yt.mdx.remote.channelParams_",a)}},Hlb=function(){return g.Fa("yt.mdx.remote.channelParams_")||{}},Ulb=function(a,b,c){g.C.call(this);
var d=this;this.module=a;this.G=b;this.uc=c;this.events=new g.iF(this);this.Z=this.events.S(this.G,"onVolumeChange",function(e){Slb(d,e)});
this.C=!1;this.D=new g.pL(64);this.j=new g.fo(this.jU,500,this);this.u=new g.fo(this.kU,1E3,this);this.J=new n8(this.p5,0,this);this.B={};this.T=new g.fo(this.XU,1E3,this);this.I=new o8(this.seekTo,1E3,this);g.E(this,this.events);this.events.S(b,"onCaptionsTrackListChanged",this.K1);this.events.S(b,"captionschanged",this.b1);this.events.S(b,"captionssettingschanged",this.sU);this.events.S(b,"videoplayerreset",this.HE);this.events.S(b,"mdxautoplaycancel",function(){d.uc.WP()});
b.N("enable_mdx_video_play_directly")&&this.events.S(b,"videodatachange",function(){Tlb(d.module)||i$(d)||j$(d,0)});
a=this.uc;a.isDisposed();a.subscribe("proxyStateChange",this.US,this);a.subscribe("remotePlayerChange",this.JA,this);a.subscribe("remoteQueueChange",this.HE,this);a.subscribe("previousNextChange",this.QS,this);a.subscribe("nowAutoplaying",this.KS,this);a.subscribe("autoplayDismissed",this.nS,this);g.E(this,this.j);g.E(this,this.u);g.E(this,this.J);g.E(this,this.T);g.E(this,this.I);this.sU();this.HE();this.JA()},Slb=function(a,b){if(i$(a)){a.uc.unsubscribe("remotePlayerChange",a.JA,a);
var c=Math.round(b.volume);b=!!b.muted;var d=L9(a.uc);if(c!==d.volume||b!==d.muted)a.uc.setVolume(c,b),a.T.start();a.uc.subscribe("remotePlayerChange",a.JA,a)}},Vlb=function(a){a.kc(0);
a.j.stop();a.ac(new g.pL(64))},Wlb=function(a,b){if(i$(a)&&!a.C){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.jd(c,b));a.uc.ZN(a.G.getVideoData(1).videoId,c);a.B=L9(a.uc).trackData}},j$=function(a,b){var c=a.G.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.uc.playVideo(c.videoId,b,d,e,c.playerParams,c.ya,fhb(c));a.ac(new g.pL(1))},Xlb=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{hR:1});
c&&c.length?(a.G.setOption("captions","track",b),a.C=!1):(a.G.loadModule("captions"),a.C=!0)}else a.G.setOption("captions","track",{})},i$=function(a){return L9(a.uc).videoId===a.G.getVideoData(1).videoId},k$=function(){g.V.call(this,{F:"div",
K:"ytp-mdx-popup-dialog",X:{role:"dialog"},W:[{F:"div",K:"ytp-mdx-popup-dialog-inner-content",W:[{F:"div",K:"ytp-mdx-popup-title",qa:"You're signed out"},{F:"div",K:"ytp-mdx-popup-description",qa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{F:"div",K:"ytp-mdx-privacy-popup-buttons",W:[{F:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-cancel"],qa:"Cancel"},{F:"button",Ga:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],qa:"Confirm"}]}]}]});this.j=new g.mN(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.E(this,this.j);this.S(this.cancelButton,"click",this.u);this.S(this.confirmButton,"click",this.B)},l$=function(a){g.V.call(this,{F:"div",
K:"ytp-remote",W:[{F:"div",K:"ytp-remote-display-status",W:[{F:"div",K:"ytp-remote-display-status-icon",W:[g.$Ga()]},{F:"div",K:"ytp-remote-display-status-text",qa:"{{statustext}}"}]}]});this.api=a;this.j=new g.mN(this,250);g.E(this,this.j);this.S(a,"presentingplayerstatechange",this.onStateChange);this.Bc(a.Eb())},m$=function(a,b){g.gT.call(this,"Play on",1,a,b);
this.G=a;this.Lr={};this.S(a,"onMdxReceiversChange",this.u);this.S(a,"presentingplayerstatechange",this.u);this.u()},Ylb=function(a){g.VP.call(this,a);
this.Mn={key:uhb(),name:"This computer"};this.xk=null;this.subscriptions=[];this.mL=this.uc=null;this.Lr=[this.Mn];this.mq=this.Mn;this.Ld=new g.pL(64);this.CR=0;this.Xg=-1;this.TA=!1;this.RA=this.sx=null;if(!g.lH(this.player.V())&&!g.mH(this.player.V())){a=this.player;var b=g.FO(a);b&&(b=b.Jl())&&(b=new m$(a,b),g.E(this,b));b=new l$(a);g.E(this,b);g.mP(a,b.element,4);this.sx=new k$;g.E(this,this.sx);g.mP(a,this.sx.element,4);this.TA=!!b$()}},n$=function(a){a.RA&&(a.player.removeEventListener("presentingplayerstatechange",
a.RA),a.RA=null)},Zlb=function(a,b,c){a.Ld=c;
a.player.ma("presentingplayerstatechange",new g.IK(c,b))},o$=function(a,b){if(b.key!==a.mq.key)if(b.key===a.Mn.key)f$();
else if(Tlb(a)&&$lb(a),a.mq=b,!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.mH(a.player.V())){var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(!c&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))d=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.QP(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:c,
videoId:e,playerParams:d.playerParams,clickTrackingParams:d.ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(d=fhb(d))&&(a.locationInfo=d);d=a}Z9("Connecting to: "+g.Vh(b));"cast-selector-receiver"==b.key?(a$(d||null),b=d||null,C9()?A9().setLaunchParams(b):z9("setLaunchParams called before ready.")):!d&&Olb()&&Y9()==b.key?b8("yt-remote-connection-change",!0):(f$(),a$(d||null),d=X9().Cj(),(b=g8(d,b.key))&&g$(b,1))}},Tlb=function(a){var b;
(b=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(b=((b=g.M("PLAYER_CONFIG"))&&b.args&&void 0!==b.args.authuser?!0:!(!g.M("SESSION_INDEX")&&!g.M("LOGGED_IN")))||a.TA||!a.sx);return b?!1:g.CH(a.player.V())||g.FH(a.player.V())},$lb=function(a){a.player.Eb().Rc()?a.player.pauseVideo():(a.RA=function(b){!a.TA&&g.KK(b,8)&&(a.player.pauseVideo(),n$(a))},a.player.addEventListener("presentingplayerstatechange",a.RA));
a.sx&&a.sx.Lc();d$()||(h$=!0)};
g.pq.prototype.Cq=g.ba(1,function(){return g.pg(this,6)});
g.Zg.prototype.gC=g.ba(0,function(){var a=g.ch(this);return 4294967296*g.ch(this)+(a>>>0)});
var Rgb,amb=g.Bh(function(a,b,c){if(1!==a.u)return!1;g.H(b,c,g.dh(a.j));return!0},g.Ch),bmb=g.Bh(function(a,b,c,d){if(1!==a.u)return!1;
g.Eg(b,c,d,g.dh(a.j));return!0},g.Ch),cmb=g.Bh(function(a,b,c){if(0!==a.u)return!1;
g.H(b,c,g.ah(a.j));return!0},g.Dh),dmb=g.Bh(function(a,b,c,d){if(0!==a.u)return!1;
g.Eg(b,c,d,g.ah(a.j));return!0},g.Dh),emb=g.Bh(function(a,b,c,d){if(0!==a.u)return!1;
g.Eg(b,c,d,g.bh(a.j));return!0},g.Eh),fmb=g.Bh(function(a,b,c){if(1!==a.u)return!1;
g.H(b,c,a.j.gC());return!0},function(a,b,c){Tgb(a,c,g.pg(b,c))}),gmb=g.Bh(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.tg(b,c,0,!1,g.Xf(b.He));if(2==a.u){c=g.Zg.prototype.gC;var d=g.bh(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.gC());return!0},function(a,b,c){b=g.yg(b,c,Ngb);
if(null!=b)for(var d=0;d<b.length;d++)Tgb(a,c,b[d])}),hmb=g.Bh(function(a,b,c){if(0!==a.u)return!1;
g.H(b,c,g.eh(a.j));return!0},Ugb),imb=g.Bh(function(a,b,c,d){if(0!==a.u)return!1;
g.Eg(b,c,d,g.eh(a.j));return!0},Ugb),jmb=g.Bh(function(a,b,c){if(2!==a.u)return!1;
a=g.lh(a);g.Cg(b,c,a);return!0},function(a,b,c){b=g.yg(b,c,Ogb,!1);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.th(a,c,g.Pca(e))}}),kmb=g.Bh(function(a,b,c,d){if(2!==a.u)return!1;
g.Eg(b,c,d,g.lh(a));return!0},g.jea),lmb=g.Bh(function(a,b,c,d,e){if(2!==a.u)return!1;
g.ih(a,Pgb(b,d,c),e);return!0},Vgb),mmb=g.Bh(function(a,b,c,d,e,f){if(2!==a.u)return!1;
(f=g.Dg(b,f))&&f!==c&&g.H(b,f,void 0,!1);b=Pgb(b,d,c);g.ih(a,b,e);return!0},Vgb),Wgb=[1];
g.v(Xgb,g.J);g.v(Ygb,g.J);var nmb=[Xgb,1,g.B2,[Ygb,1,amb,2,cmb]];g.v(Zgb,g.J);g.v($gb,g.J);g.v(ahb,g.J);
var omb=[1,2],pmb=[g.Fh,1,g.A2,5,fmb,2,lmb,[Zgb,1,mmb,[$gb,1,g.A2,2,g.A2,3,hmb],omb,2,mmb,[ahb,1,g.A2,2,g.A2,3,g.W2a,4,hmb],omb],3,jmb,6,gmb,4,g.B2,[g.Gh,1,g.B2,[g.Hh,1,kmb,g.Kh,2,emb,g.Kh,3,imb,g.Kh],2,lmb,[g.Ih,1,dmb,g.Jh,2,bmb,g.Jh,3,mmb,nmb,g.Jh]]],hjb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},P8={"'":"\\'"},ohb={Mda:"atp",PTa:"ska",gQa:"que",sHa:"mus",OTa:"sus",Tua:"dsp",ERa:"seq",GGa:"mic",Jna:"dpa",Oea:"cds",hHa:"mlm",
Ena:"dsdtr",uIa:"ntb"},phb={rY:"u",CLASSIC:"cl",SX:"k",PV:"i",AV:"cr",ZX:"m",LV:"g",UO:"up"};c8.prototype.equals=function(a){return a?this.id==a.id:!1};
var k8,Ahb="",Phb=Jhb("loadCastFramework")||Jhb("loadCastApplicationFramework"),Shb=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.Ua(n8,g.C);g.k=n8.prototype;g.k.nW=function(a){this.C=arguments;this.j=!1;this.zc?this.B=g.Ta()+this.Nh:this.zc=g.Af(this.D,this.Nh)};
g.k.stop=function(){this.zc&&(g.Ca.clearTimeout(this.zc),this.zc=null);this.B=null;this.j=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.I.apply(null,this.C)))};
g.k.ra=function(){this.stop();n8.hf.ra.call(this)};
g.k.oW=function(){this.zc&&(g.Ca.clearTimeout(this.zc),this.zc=null);this.B?(this.zc=g.Af(this.D,this.B-g.Ta()),this.B=null):this.u?this.j=!0:(this.j=!1,this.I.apply(null,this.C))};g.v(o8,g.C);g.k=o8.prototype;g.k.wG=function(a){this.B=arguments;this.zc||this.u?this.j=!0:dib(this)};
g.k.stop=function(){this.zc&&(g.Ca.clearTimeout(this.zc),this.zc=null,this.j=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.j||this.zc||(this.j=!1,dib(this))};
g.k.ra=function(){g.C.prototype.ra.call(this);this.stop()};p8.prototype.stringify=function(a){return g.Ca.JSON.stringify(a,void 0)};
p8.prototype.parse=function(a){return g.Ca.JSON.parse(a,void 0)};g.Ua(eib,g.fb);g.Ua(fib,g.fb);var gib=null;g.Ua(iib,g.fb);g.Ua(jib,g.fb);g.Ua(kib,g.fb);lib.prototype.info=function(){};
lib.prototype.warning=function(){};var sib={},v8={};g.k=t8.prototype;g.k.setTimeout=function(a){this.yb=a};
g.k.rW=function(a){a=a.target;var b=this.Wa;b&&3==g.wi(a)?b.wG():this.DN(a)};
g.k.DN=function(a){try{if(a==this.j)a:{var b=g.wi(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b)&&(3!=b||g.GH||this.j&&(this.u.u||g.yi(this.j)||g.Ai(this.j)))){this.Ka||4!=b||7==c||(8==c||0>=d?q8(3):q8(2));y8(this);var e=this.j.getStatus();this.Tb=e;b:if(qib(this)){var f=g.Ai(this.j);a="";var h=f.length,l=4==g.wi(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){w8(this);x8(this);var m="";break b}this.u.B=new g.Ca.TextDecoder}for(c=0;c<h;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&
c==h-1});f.splice(0,h);this.u.j+=a;this.ea=0;m=this.u.j}else m=g.yi(this.j);if(this.B=200==e){if(this.Wb&&!this.Sa){b:{if(this.j){var n=g.Bi(this.j,"X-HTTP-Initial-Response");if(n&&!g.Rb(n)){var p=n;break b}}p=null}if(e=p)this.Sa=!0,tib(this,e);else{this.B=!1;this.I=3;r8(12);w8(this);x8(this);break a}}this.Ba?(uib(this,b,m),g.GH&&this.B&&3==b&&(this.ib.Qa(this.kb,"tick",this.qW),this.kb.start())):tib(this,m);4==b&&w8(this);this.B&&!this.Ka&&(4==b?wib(this.D,this):(this.B=!1,u8(this)))}else g.Xea(this.j),
400==e&&0<m.indexOf("Unknown SID")?(this.I=3,r8(12)):(this.I=0,r8(13)),w8(this),x8(this)}}}catch(q){}finally{}};
g.k.qW=function(){if(this.j){var a=g.wi(this.j),b=g.yi(this.j);this.ea<b.length&&(y8(this),uib(this,a,b),this.B&&4!=a&&u8(this))}};
g.k.cancel=function(){this.Ka=!0;w8(this)};
g.k.pW=function(){this.Z=null;var a=Date.now();0<=a-this.Nb?(2!=this.Oa&&(q8(3),r8(17)),w8(this),this.I=2,x8(this)):vib(this,this.Nb-a)};
g.k.getLastError=function(){return this.I};
g.k.iJ=function(){return this.j};Fib.prototype.cancel=function(){this.B=Hib(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.t(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.k=Lib.prototype;g.k.EN=8;g.k.Ng=1;g.k.connect=function(a,b,c,d){r8(0);this.xc=a;this.Ka=b||{};c&&void 0!==d&&(this.Ka.OSID=c,this.Ka.OAID=d);this.kb=this.Ec;this.Ma=Bib(this,null,this.xc);C8(this)};
g.k.disconnect=function(){Nib(this);if(3==this.Ng){var a=this.Wa++,b=this.Ma.clone();g.Hj(b,"SID",this.C);g.Hj(b,"RID",a);g.Hj(b,"TYPE","terminate");F8(this,b);a=new t8(this,this.C,a);a.Oa=2;a.J=Z7(b.clone());b=!1;g.Ca.navigator&&g.Ca.navigator.sendBeacon&&(b=g.Ca.navigator.sendBeacon(a.J.toString(),""));!b&&g.Ca.Image&&((new Image).src=a.J,b=!0);b||(a.j=pib(a.D,null),a.j.send(a.J));a.ya=Date.now();u8(a)}Tib(this)};
g.k.og=function(){return 0==this.Ng};
g.k.getState=function(){return this.Ng};
g.k.GN=function(a){if(this.I)if(this.I=null,1==this.Ng){if(!a){this.Wa=Math.floor(1E5*Math.random());a=this.Wa++;var b=new t8(this,"",a),c=this.Z;this.Nb&&(c?(c=g.hd(c),g.jd(c,this.Nb)):c=this.Nb);null!==this.J||this.rb||(b.Ma=c,c=null);var d;if(this.yb)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=Qib(this,b,d);e=this.Ma.clone();g.Hj(e,"RID",a);g.Hj(e,"CVER",22);this.Ba&&g.Hj(e,"X-HTTP-Session-Id",this.Ba);F8(this,e);c&&(this.rb?d="headers="+g.ze(g.hga(c))+"&"+d:this.J&&g.Lj(e,this.J,c));Aib(this.u,b);this.Wf&&g.Hj(e,"TYPE","init");this.yb?(g.Hj(e,"$req",d),g.Hj(e,"SID","null"),b.Wb=!0,oib(b,e,null)):oib(b,e,d);this.Ng=2}}else 3==this.Ng&&(a?Rib(this,a):0==this.B.length||Gib(this.u)||Rib(this))};
g.k.FN=function(){this.T=null;Sib(this);if(this.td&&!(this.ib||null==this.j||0>=this.pd)){var a=2*this.pd;this.Aa=s8((0,g.Qa)(this.Z0,this),a)}};
g.k.Z0=function(){this.Aa&&(this.Aa=null,this.kb=!1,this.ib=!0,r8(10),A8(this),Sib(this))};
g.k.EK=function(a){this.j==a&&this.td&&!this.ib&&(Mib(this),this.ib=!0,r8(11))};
g.k.sW=function(){null!=this.ea&&(this.ea=null,A8(this),yib(this),r8(19))};
g.k.U4=function(a){a?r8(2):r8(1)};
g.k.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.k=Vib.prototype;g.k.KN=function(){};
g.k.JN=function(){};
g.k.IN=function(){};
g.k.HN=function(){};
g.k.isActive=function(){return!0};
g.k.tW=function(){};g.Ua(H8,g.Bd);H8.prototype.open=function(){this.j.D=this.C;this.J&&(this.j.Oa=!0);this.j.connect(this.I,this.u||void 0)};
H8.prototype.close=function(){this.j.disconnect()};
H8.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.Vh(a),a=c);b.B.push(new Eib(b.Ye++,a));3==b.Ng&&C8(b)};
H8.prototype.ra=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;H8.hf.ra.call(this)};
g.Ua(Xib,eib);g.Ua(Yib,fib);g.Ua(G8,Vib);G8.prototype.KN=function(){this.j.dispatchEvent("m")};
G8.prototype.JN=function(a){this.j.dispatchEvent(new Xib(a))};
G8.prototype.IN=function(a){this.j.dispatchEvent(new Yib(a))};
G8.prototype.HN=function(){this.j.dispatchEvent("n")};var J8=new g.Bd;g.v(ajb,g.fb);g.k=L8.prototype;g.k.us=null;g.k.zo=!1;g.k.ov=null;g.k.yG=null;g.k.fv=null;g.k.hv=null;g.k.Rp=null;g.k.Tp=null;g.k.ws=null;g.k.Yh=null;g.k.bC=0;g.k.pm=null;g.k.aC=null;g.k.Sp=null;g.k.wy=-1;g.k.UT=!0;g.k.rs=!1;g.k.xG=0;g.k.ZB=null;var fjb={},ejb={};g.k=L8.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.vW=function(a){a=a.target;var b=this.ZB;b&&3==g.wi(a)?b.wG():this.LN(a)};
g.k.LN=function(a){try{if(a==this.Yh)a:{var b=g.wi(this.Yh),c=this.Yh.u,d=this.Yh.getStatus();if(g.Re&&!g.Lc(10)||g.Mc&&!g.Kc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.yi(this.Yh))break a;this.rs||4!=b||7==c||(8==c||0>=d?this.j.Ul(3):this.j.Ul(2));kjb(this);var e=this.Yh.getStatus();this.wy=e;var f=g.yi(this.Yh);if(this.zo=200==e){4==b&&N8(this);if(this.Ba){for(a=!0;!this.rs&&this.bC<f.length;){var h=gjb(this,f);if(h==ejb){4==b&&(this.Sp=4,K8(15),a=!1);break}else if(h==fjb){this.Sp=4;K8(16);a=
!1;break}else ljb(this,h)}4==b&&0==f.length&&(this.Sp=1,K8(17),a=!1);this.zo=this.zo&&a;a||(N8(this),O8(this))}else ljb(this,f);this.zo&&!this.rs&&(4==b?this.j.cC(this):(this.zo=!1,M8(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Sp=3,K8(13)):(this.Sp=0,K8(14)),N8(this),O8(this)}}catch(l){}finally{}};
g.k.A3=function(a){I8((0,g.Qa)(this.z3,this,a),0)};
g.k.z3=function(a){this.rs||(kjb(this),ljb(this,a),M8(this))};
g.k.ZS=function(a){I8((0,g.Qa)(this.y3,this,a),0)};
g.k.y3=function(a){this.rs||(N8(this),this.zo=a,this.j.cC(this),this.j.Ul(4))};
g.k.cancel=function(){this.rs=!0;N8(this)};
g.k.uW=function(){this.ov=null;var a=Date.now();0<=a-this.yG?(2!=this.hv&&this.j.Ul(3),N8(this),this.Sp=2,K8(18),O8(this)):jjb(this,this.yG-a)};
g.k.getLastError=function(){return this.Sp};g.k=ojb.prototype;g.k.AG=null;g.k.Ki=null;g.k.dF=!1;g.k.lU=null;g.k.dD=null;g.k.XJ=null;g.k.BG=null;g.k.rk=null;g.k.Ao=-1;g.k.yy=null;g.k.Uy=null;g.k.connect=function(a){this.BG=a;a=R8(this.j,null,this.BG);K8(3);this.lU=Date.now();var b=this.j.T;null!=b?(this.yy=b[0],(this.Uy=b[1])?(this.rk=1,pjb(this)):(this.rk=2,qjb(this))):($7(a,"MODE","init"),this.Ki=new L8(this),this.Ki.us=this.AG,djb(this.Ki,a,!1,null,!0),this.rk=0)};
g.k.WY=function(a){if(a)this.rk=2,qjb(this);else{K8(4);var b=this.j;b.zm=b.iq.Ao;V8(b,9)}a&&this.Ul(2)};
g.k.zG=function(a){return this.j.zG(a)};
g.k.abort=function(){this.Ki&&(this.Ki.cancel(),this.Ki=null);this.Ao=-1};
g.k.og=function(){return!1};
g.k.MN=function(a,b){this.Ao=a.wy;if(0==this.rk)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.zm=this.Ao;V8(a,2);return}this.yy=c[0];this.Uy=c[1]}else a=this.j,a.zm=this.Ao,V8(a,2);else if(2==this.rk)if(this.dF)K8(7),this.XJ=Date.now();else if("11111"==b){if(K8(6),this.dF=!0,this.dD=Date.now(),a=this.dD-this.lU,!g.Re||g.Lc(10)||500>a)this.Ao=200,this.Ki.cancel(),K8(12),S8(this.j,this,!0)}else K8(8),this.dD=this.XJ=Date.now(),this.dF=!1};
g.k.cC=function(){this.Ao=this.Ki.wy;if(this.Ki.zo)0==this.rk?this.Uy?(this.rk=1,pjb(this)):(this.rk=2,qjb(this)):2==this.rk&&((!g.Re||g.Lc(10)?!this.dF:200>this.XJ-this.dD)?(K8(11),S8(this.j,this,!1)):(K8(12),S8(this.j,this,!0)));else{0==this.rk?K8(9):2==this.rk&&K8(10);var a=this.j;this.Ki.getLastError();a.zm=this.Ao;V8(a,2)}};
g.k.zy=function(){return this.j.zy()};
g.k.isActive=function(){return this.j.isActive()};
g.k.Ul=function(a){this.j.Ul(a)};g.k=rjb.prototype;g.k.ym=null;g.k.Ay=null;g.k.Ti=null;g.k.Vf=null;g.k.CG=null;g.k.dC=null;g.k.NN=null;g.k.eC=null;g.k.By=0;g.k.xW=0;g.k.Eh=null;g.k.Up=null;g.k.Bo=null;g.k.ys=null;g.k.iq=null;g.k.NF=null;g.k.uv=-1;g.k.ON=-1;g.k.zm=-1;g.k.tv=0;g.k.qv=0;g.k.xs=8;g.Ua(tjb,g.fb);g.Ua(ujb,g.fb);g.k=rjb.prototype;g.k.connect=function(a,b,c,d,e){K8(0);this.CG=b;this.Ay=c||{};d&&void 0!==e&&(this.Ay.OSID=d,this.Ay.OAID=e);this.J?(I8((0,g.Qa)(this.JP,this,a),100),wjb(this)):this.JP(a)};
g.k.disconnect=function(){xjb(this);if(3==this.j){var a=this.By++,b=this.dC.clone();g.Hj(b,"SID",this.C);g.Hj(b,"RID",a);g.Hj(b,"TYPE","terminate");U8(this,b);a=new L8(this,this.C,a);a.hv=2;a.Rp=Z7(b.clone());(new Image).src=a.Rp.toString();a.fv=Date.now();M8(a)}Hjb(this)};
g.k.JP=function(a){this.iq=new ojb(this);this.iq.AG=this.ym;this.iq.u=this.D;this.iq.connect(a)};
g.k.og=function(){return 0==this.j};
g.k.getState=function(){return this.j};
g.k.QN=function(a){this.Up=null;Cjb(this,a)};
g.k.PN=function(){this.Bo=null;this.Vf=new L8(this,this.C,"rpc",this.I);this.Vf.us=this.ym;this.Vf.xG=0;var a=this.NN.clone();g.Hj(a,"RID","rpc");g.Hj(a,"SID",this.C);g.Hj(a,"CI",this.NF?"0":"1");g.Hj(a,"AID",this.uv);U8(this,a);if(!g.Re||g.Lc(10))g.Hj(a,"TYPE","xmlhttp"),djb(this.Vf,a,!0,this.eC,!1);else{g.Hj(a,"TYPE","html");var b=this.Vf,c=!!this.eC;b.hv=3;b.Rp=Z7(a.clone());ijb(b,c)}};
g.k.MN=function(a,b){if(0!=this.j&&(this.Vf==a||this.Ti==a))if(this.zm=a.wy,this.Ti==a&&3==this.j)if(7<this.xs){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Bo){if(this.Vf)if(this.Vf.fv+3E3<this.Ti.fv)T8(this),this.Vf.cancel(),this.Vf=null;else break a;Fjb(this);K8(19)}}else this.ON=a[1],0<this.ON-this.uv&&37500>a[2]&&this.NF&&0==this.qv&&!this.ys&&(this.ys=I8((0,g.Qa)(this.yW,this),6E3));else V8(this,11)}else null!=b&&V8(this,11);else if(this.Vf==
a&&T8(this),!g.Rb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.uv=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.eC=c[2],c=c[3],null!=c?this.xs=c:this.xs=6,this.j=3,this.Eh&&this.Eh.TN(),this.NN=R8(this,this.zy()?this.eC:null,this.CG),Djb(this)):"stop"==c[0]&&V8(this,7):3==this.j&&("stop"==c[0]?V8(this,7):"noop"!=c[0]&&this.Eh&&this.Eh.SN(c),this.qv=0)};
g.k.yW=function(){null!=this.ys&&(this.ys=null,this.Vf.cancel(),this.Vf=null,Fjb(this),K8(20))};
g.k.cC=function(a){if(this.Vf==a){T8(this);this.Vf=null;var b=2}else if(this.Ti==a)this.Ti=null,b=1;else return;this.zm=a.wy;if(0!=this.j)if(a.zo)if(1==b){b=Date.now()-a.fv;var c=J8;c.dispatchEvent(new tjb(c,a.ws?a.ws.length:0,b,this.tv));vjb(this);this.B.length=0}else Djb(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.zm)){if(d=1==b)this.Ti||this.Up||1==this.j||2<=this.tv?d=!1:(this.Up=I8((0,g.Qa)(this.QN,this,a),Ejb(this,this.tv)),this.tv++,d=!0);d=!(d||2==b&&Fjb(this))}if(d)switch(c){case 1:V8(this,
5);break;case 4:V8(this,10);break;case 3:V8(this,6);break;case 7:V8(this,12);break;default:V8(this,2)}}};
g.k.wW=function(a){if(!g.pb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.k.T4=function(a){a?K8(2):(K8(1),Gjb(this,8))};
g.k.zG=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.ni;a.J=!1;return a};
g.k.isActive=function(){return!!this.Eh&&this.Eh.isActive(this)};
g.k.Ul=function(a){var b=J8;b.dispatchEvent(new ujb(b,a))};
g.k.zy=function(){return!(!g.Re||g.Lc(10))};
g.k=Ijb.prototype;g.k.TN=function(){};
g.k.SN=function(){};
g.k.RN=function(){};
g.k.DG=function(){};
g.k.UN=function(){return{}};
g.k.isActive=function(){return!0};g.k=Jjb.prototype;g.k.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.k.clear=function(){this.j=[];this.u=[]};
g.k.contains=function(a){return g.pb(this.j,a)||g.pb(this.u,a)};
g.k.remove=function(a){var b=this.j;var c=(0,g.B2a)(b,a);0<=c?(g.rb(b,c),b=!0):b=!1;return b||g.sb(this.u,a)};
g.k.Hk=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.v(Kjb,g.fb);g.v(Ljb,g.fb);g.Ua(W8,g.C);g.k=W8.prototype;g.k.s3=function(){this.Nh=Math.min(3E5,2*this.Nh);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.Nh+15E3*Math.random();g.go(this.j,a);this.u=Date.now()+a};
g.k.stop=function(){this.j.stop();this.u=0};
g.k.isActive=function(){return this.j.isActive()};
g.k.reset=function(){this.j.stop();this.Nh=5E3};Njb.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.Au("enable_client_streamz_web")){a=g.t(a);for(var c=a.next();!c.done;c=a.next())c=g.rea(c.value),c={serializedIncrementBatch:g.Gf(g.Ah(c,pmb))},g.jz("streamzIncremented",c,{sendIsolatedPayload:b})}};var X8;g.Ua(Ojb,Ijb);g.k=Ojb.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.dh=function(a){return this.B.dh(a)};
g.k.ma=function(a,b){return this.B.ma.apply(this.B,arguments)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.ab(this.B),this.disconnect(),g.ab(this.u),this.u=null,this.oa=function(){return""})};
g.k.isDisposed=function(){return this.ea};
g.k.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.Z="";this.u.stop();this.I=a||null;this.D=b||0;a=this.ya+"/test";b=this.ya+"/bind";var d=new rjb(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Oa),e=this.j;e&&(e.Eh=null);d.Eh=this;this.j=d;Pjb(this);if(this.j){d=g.M("ID_TOKEN");var f=this.j.ym||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.ym=f}e?(3!=e.getState()&&0==zjb(e)||e.getState(),this.j.connect(a,b,this.J,e.C,e.uv)):c?this.j.connect(a,
b,this.J,c.sessionId,c.arrayId):this.j.connect(a,b,this.J)}};
g.k.disconnect=function(a){this.T=a||0;this.u.stop();Pjb(this);this.j&&(3==this.j.getState()&&Cjb(this.j),this.j.disconnect());this.T=0};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.jd(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Ow()&&(Pjb(this),yjb(this.j,a))};
g.k.TN=function(){this.u.reset();this.I=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)yjb(this.j,a[b])}this.ma("handlerOpened");Vhb(this.Ma,"BROWSER_CHANNEL")};
g.k.RN=function(a){var b=2==a&&401==this.j.zm;4==a||b||this.u.start();this.ma("handlerError",a,b);aib(this.Ba,"BROWSER_CHANNEL")};
g.k.DG=function(a,b){if(!this.u.isActive())this.ma("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}Xhb(this.Aa,"BROWSER_CHANNEL");a&&this.Wa.j.GG("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Xa.j.GG("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.UN=function(){var a={v:2};this.Z&&(a.gsessionid=this.Z);0!=this.D&&(a.ui=""+this.D);0!=this.T&&(a.ui=""+this.T);this.I&&g.jd(a,this.I);return a};
g.k.SN=function(a){"S"==a[0]?this.Z=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.ma("handlerMessage",new Mjb(a[0],a[1]));Zhb(this.Ka,"BROWSER_CHANNEL")};
g.k.Ow=function(){return!!this.j&&3==this.j.getState()};
g.k.Hp=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Sa&&this.j){var b=this.j.ym||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.ym=b}};
g.k.Cq=function(){return this.J.id};
g.k.Mq=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.k.nu=function(){var a=this.u;g.ho(a.j);a.start()};
g.k.s4=function(){this.u.isActive();0==zjb(this.j)&&this.connect(this.I,this.D)};Y8.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Y8.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
Y8.prototype.D=function(a){a(Error("request timed out"))};g.v(Rjb,g.Bd);g.k=Rjb.prototype;g.k.connect=function(a,b,c){this.Zc.connect(a,b,c)};
g.k.disconnect=function(a){this.Zc.disconnect(a)};
g.k.nu=function(){this.Zc.nu()};
g.k.Cq=function(){return this.Zc.Cq()};
g.k.Mq=function(){return this.Zc.Mq()};
g.k.Ow=function(){return this.Zc.Ow()};
g.k.DW=function(){this.dispatchEvent("channelOpened");var a=this.Zc,b=this.j;g.OA("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.NF,sessionId:a.j.C,arrayId:a.j.uv});g.OA("yt-remote-session-screen-id",b);a=h8();b=i8();g.pb(a,b)||a.push(b);zhb(a);Bhb()};
g.k.zW=function(){this.dispatchEvent("channelClosed")};
g.k.BW=function(a){this.dispatchEvent(new Kjb(a))};
g.k.onError=function(a){this.dispatchEvent(new Ljb(a?1:0))};
g.k.sendMessage=function(a,b){this.Zc.sendMessage(a,b)};
g.k.Hp=function(a){this.Zc.Hp(a)};
g.k.dispose=function(){this.Zc.dispose()};g.k=Sjb.prototype;
g.k.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.I&&(this.B.stop(),this.T=a,this.J=b,Ujb(this),(a=g.M("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.f0&&(this.u.mdxVersion=""+this.j.f0),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.J?this.u.ui=""+this.J:delete this.u.ui,
Object.assign(this.u,this.T),this.channel=new H8(this.pathPrefix,{B_:"gsessionid",j0:this.C,k0:this.u}),this.channel.open(),this.I=2,Tjb(this))};
g.k.disconnect=function(a){this.Z=void 0===a?0:a;this.B.stop();Ujb(this);this.channel&&(0!==this.Z?this.u.ui=""+this.Z:delete this.u.ui,this.channel.close());this.Z=0};
g.k.Mq=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.k.nu=function(){var a=this.B;g.ho(a.j);a.start()};
g.k.sendMessage=function(a,b){this.channel&&(Ujb(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.k.Hp=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.k.Cq=function(){return this.j?this.j.id:""};
g.k.ma=function(a){return this.D.ma.apply(this.D,[a].concat(g.u(g.xa.apply(1,arguments))))};
g.k.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.k.dh=function(a){return this.D.dh(a)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.ab(this.D),this.disconnect(),g.ab(this.B),this.ya=function(){return""})};
g.k.isDisposed=function(){return this.ea};g.v(Vjb,g.Bd);g.k=Vjb.prototype;g.k.connect=function(a,b){this.j.connect(a,b)};
g.k.disconnect=function(a){this.j.disconnect(a)};
g.k.nu=function(){this.j.nu()};
g.k.Cq=function(){return this.j.Cq()};
g.k.Mq=function(){return this.j.Mq()};
g.k.Ow=function(){return 3===this.j.I};
g.k.GW=function(){this.dispatchEvent("channelOpened")};
g.k.EW=function(){this.dispatchEvent("channelClosed")};
g.k.FW=function(a){this.dispatchEvent(new Kjb(a))};
g.k.onError=function(){this.dispatchEvent(new Ljb(401===this.j.Gg?1:0))};
g.k.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.k.Hp=function(a){this.j.Hp(a)};
g.k.dispose=function(){this.j.dispose()};var ckb=Date.now(),$8=null,d9=Array(50),c9=-1,e9=!1;g.Ua(f9,g.Zz);f9.prototype.Cj=function(){return this.screens};
f9.prototype.contains=function(a){return!!whb(this.screens,a)};
f9.prototype.get=function(a){return a?g8(this.screens,a):null};
f9.prototype.info=function(a){a9(this.I,a)};g.v(gkb,g.Zz);g.k=gkb.prototype;g.k.start=function(){!this.j&&isNaN(this.zc)&&this.mT()};
g.k.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.zc)||(g.Xu(this.zc),this.zc=NaN)};
g.k.ra=function(){this.stop();g.Zz.prototype.ra.call(this)};
g.k.mT=function(){this.zc=NaN;this.j=g.$u(Z8(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Qa)(this.IW,this),onError:(0,g.Qa)(this.HW,this),onTimeout:(0,g.Qa)(this.JW,this)})};
g.k.IW=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ma("pairingComplete",new d8(a),b)};
g.k.HW=function(a){this.j=null;a.status&&404==a.status?this.u>=qmb.length?this.ma("pairingFailed",Error("DIAL polling timed out")):(a=qmb[this.u],this.zc=g.Vu((0,g.Qa)(this.mT,this),a),this.u++):this.ma("pairingFailed",Error("Server error "+a.status))};
g.k.JW=function(){this.j=null;this.ma("pairingFailed",Error("Server not responding"))};
var qmb=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ua(h9,f9);g.k=h9.prototype;g.k.start=function(){g9(this)&&this.ma("screenChange");!g.PA("yt-remote-lounge-token-expiration")&&hkb(this);g.Xu(this.j);this.j=g.Vu((0,g.Qa)(this.start,this),1E4)};
g.k.add=function(a,b){g9(this);dkb(this,a);i9(this,!1);this.ma("screenChange");b(a);a.token||hkb(this)};
g.k.remove=function(a,b){var c=g9(this);fkb(this,a)&&(i9(this,!1),c=!0);b(a);c&&this.ma("screenChange")};
g.k.MF=function(a,b,c,d){var e=g9(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,i9(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ma("screenChange")};
g.k.ra=function(){g.Xu(this.j);h9.hf.ra.call(this)};
g.k.d_=function(a){g9(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}i9(this,!b);b&&a9(this.I,"Missed "+b+" lounge tokens.")};
g.k.c_=function(a){a9(this.I,"Requesting lounge tokens failed: "+a)};g.v(jkb,g.Zz);g.k=jkb.prototype;g.k.start=function(){var a=parseInt(g.PA("yt-remote-fast-check-period")||"0",10);(this.C=g.Ta()-144E5<a?0:a)?j9(this):(this.C=g.Ta()+3E5,g.OA("yt-remote-fast-check-period",this.C),this.DL())};
g.k.isEmpty=function(){return g.dd(this.j)};
g.k.update=function(){ikb("Updating availability on schedule.");var a=this.I(),b=g.Rc(this.j,function(c,d){return c&&!!g8(a,d)},this);
mkb(this,b)};
g.k.ra=function(){g.Xu(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.Zz.prototype.ra.call(this)};
g.k.DL=function(){g.Xu(this.B);this.B=NaN;this.u&&this.u.abort();var a=nkb(this);if(hhb(a)){var b=Z8(this.D,"/pairing/get_screen_availability");this.u=Qjb(this.D,b,{lounge_token:g.Yc(a).join(",")},(0,g.Qa)(this.T2,this,a),(0,g.Qa)(this.S2,this))}else mkb(this,{}),j9(this)};
g.k.T2=function(a,b){this.u=null;var c=g.Yc(nkb(this));if(g.Hb(c,g.Yc(a))){b=b.screens||[];c={};for(var d=b.length,e=0;e<d;++e)c[a[b[e].loungeToken]]="online"==b[e].status;mkb(this,c);j9(this)}else this.xf("Changing Screen set during request."),this.DL()};
g.k.S2=function(a){this.xf("Screen availability failed: "+a);this.u=null;j9(this)};
g.k.xf=function(a){a9("OnlineScreenService",a)};g.Ua(k9,f9);g.k=k9.prototype;g.k.start=function(){this.u.start();this.j.start();this.screens.length&&(this.ma("screenChange"),this.j.isEmpty()||this.ma("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.k.MF=function(a,b,c,d){this.u.contains(a)?this.u.MF(a,b,c,d):(a="Updating name of unknown screen: "+a.name,a9(this.I,a),d(Error(a)))};
g.k.Cj=function(a){return a?this.screens:g.vb(this.screens,g.Bm(this.B,function(b){return!this.contains(b)},this))};
g.k.VN=function(){return g.Bm(this.Cj(!0),function(a){return!!this.j.j[a.id]},this)};
g.k.WN=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new gkb(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.ab(l);e(l9(h,m),n)});
l.subscribe("pairingFailed",function(m){g.ab(l);f(m)});
l.start();return(0,g.Qa)(l.stop,l)};
g.k.KW=function(a,b,c,d){g.$u(Z8(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Qa)(function(e,f){e=new d8(f.screen||{});if(!e.name||rkb(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);rkb(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(l9(this,e))},this),
onError:(0,g.Qa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Qa)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ra=function(){g.ab(this.u);g.ab(this.j);k9.hf.ra.call(this)};
g.k.m_=function(){tkb(this);this.ma("screenChange");this.j.update()};
k9.prototype.dispose=k9.prototype.dispose;g.Ua(m9,g.Zz);g.k=m9.prototype;g.k.getScreen=function(){return this.C};
g.k.zi=function(a){this.isDisposed()||(a&&(o9(this,""+a),this.ma("sessionFailed")),this.C=null,this.ma("sessionScreen",null))};
g.k.info=function(a){a9(this.Ba,a)};
g.k.XN=function(){return null};
g.k.VL=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Qa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Qa)(function(){o9(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ra=function(){this.VL("");m9.hf.ra.call(this)};g.v(p9,m9);g.k=p9.prototype;g.k.UL=function(a){if(this.u){if(this.u==a)return;o9(this,"Overriding cast session with new session object");Fkb(this);this.ya=!1;this.Z="unknown";this.u.removeUpdateListener(this.oa);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.oa);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);Akb(this,"getMdxSessionStatus")};
g.k.Xw=function(a){this.info("launchWithParams no-op for Cast: "+g.Vh(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.Qa)(function(){this.zi()},this),(0,g.Qa)(function(){this.zi(Error("Failed to stop receiver app."))},this)):this.zi(Error("Stopping cast device without session."))};
g.k.VL=function(){};
g.k.ra=function(){this.info("disposeInternal");Fkb(this);this.u&&(this.u.removeUpdateListener(this.oa),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;m9.prototype.ra.call(this)};
g.k.K3=function(a,b){if(!this.isDisposed())if(b)if(b=a8(b),g.Ma(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Vh(b)),a){case "mdxSessionStatus":xkb(this,b);break;case "loungeToken":Bkb(this,b);break;default:o9(this,"Unknown youtube message: "+a)}else o9(this,"Unable to parse message.");else o9(this,"No data in message.")};
g.k.FQ=function(a,b,c,d){g.Xu(this.T);this.T=0;qkb(this.B,this.j.label,a,this.j.friendlyName,(0,g.Qa)(function(e){e?b(e):0<=d?(o9(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.T=g.Vu((0,g.Qa)(this.FQ,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.XN=function(){return this.u};
g.k.LW=function(a){this.isDisposed()||a||(o9(this,"Cast session died."),this.zi())};g.v(q9,m9);g.k=q9.prototype;g.k.UL=function(a){this.u=a;this.u.addUpdateListener(this.Ka)};
g.k.Xw=function(a){this.Ma=a;this.ea()};
g.k.stop=function(){Nkb(this);this.u?this.u.stop((0,g.Qa)(this.zi,this,null),(0,g.Qa)(this.zi,this,"Failed to stop DIAL device.")):this.zi()};
g.k.ra=function(){Nkb(this);this.u&&this.u.removeUpdateListener(this.Ka);this.u=null;m9.prototype.ra.call(this)};
g.k.MW=function(a){this.isDisposed()||a||(o9(this,"DIAL session died."),this.D(),this.D=function(){},this.zi())};g.v(t9,m9);t9.prototype.stop=function(){this.zi()};
t9.prototype.UL=function(){};
t9.prototype.Xw=function(){g.Xu(this.u);this.u=NaN;var a=g8(this.B.Cj(),this.j.label);a?n9(this,a):this.zi(Error("No such screen"))};
t9.prototype.ra=function(){g.Xu(this.u);this.u=NaN;m9.prototype.ra.call(this)};g.v(u9,g.Zz);g.k=u9.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.T,[chrome.cast.Capability.AUDIO_OUT]);this.Z||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Qa)(this.E2,this);c=new chrome.cast.ApiConfig(c,(0,g.Qa)(this.VS,this),e,d,a);c.customDialLaunchCallback=(0,g.Qa)(this.s1,this);
chrome.cast.initialize(c,(0,g.Qa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),$jb(),this.u.subscribe("onlineScreenChange",(0,g.Qa)(this.YN,this)),this.B=Qkb(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Qa)(function(f){this.xf("Failed to set initial custom receivers: "+g.Vh(f))},this)),this.ma("yt-remote-cast2-availability-change",w9(this)),b(!0))},this),(0,g.Qa)(function(f){this.xf("Failed to initialize API: "+g.Vh(f));
b(!1)},this))};
g.k.x4=function(a,b){v9("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)v9("Unsetting old screen status: "+this.j.j.friendlyName),x9(this,null)}if(a&&b){if(!this.j){c=g8(this.u.Cj(),a);if(!c){v9("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){v9("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=Okb(this,c);a||(v9("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Qa)(function(d){this.xf("Failed to set initial custom receivers: "+g.Vh(d))},this)));
v9("setConnectedScreenStatus: new active receiver: "+a.friendlyName);x9(this,new t9(this.u,a),!0)}this.j.VL(b)}else v9("setConnectedScreenStatus: no screen.")};
g.k.y4=function(a){this.isDisposed()?this.xf("Setting connection data on disposed cast v2"):this.j?this.j.Xw(a):this.xf("Setting connection data without a session")};
g.k.OW=function(){this.isDisposed()?this.xf("Stopping session on disposed cast v2"):this.j?(this.j.stop(),x9(this,null)):v9("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Qa)(this.VS,this),(0,g.Qa)(this.W2,this))};
g.k.ra=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Qa)(this.YN,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=Xjb,b=g.Fa("yt.mdx.remote.debug.handlers_");g.sb(b||[],a);g.ab(this.j);g.Zz.prototype.ra.call(this)};
g.k.xf=function(a){a9("Controller",a)};
g.k.XS=function(a,b){this.j==a&&(b||x9(this,null),this.ma("yt-remote-cast2-session-change",b))};
g.k.B2=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),v9("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)v9("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{v9("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.ma("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:x9(this,
new t9(this.u,a));break;case chrome.cast.ReceiverType.DIAL:x9(this,new q9(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:x9(this,new p9(this.u,a,this.config_));break;default:this.xf("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.xf("Stopping receiver w/o session: "+a.friendlyName)}else this.xf("onReceiverAction_ called without receiver.")};
g.k.s1=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.xf("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.xf("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return v9("Reselecting dial screen."),
this.ma("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.xf('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);x9(this,new q9(this.u,b,this.C,this.config_))}b=this.j;b.T=a;b.T.appState==chrome.cast.DialAppState.RUNNING?(a=b.T.extraData||{},c=a.screenId||null,r9(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=Kkb(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.T.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.Fu(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=Lkb(b,c)):a=Lkb(b,c)):a=Ikb(b);return a};
g.k.VS=function(a){var b=this;if(!this.isDisposed()&&!this.I){v9("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)v9("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),x9(this,new p9(this.u,c,this.config_),!0);else{this.xf("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=g8(this.u.Cj(),
d.label);e&&e8(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(v9("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.ab(this.j),this.j=new p9(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Qa)(this.XS,this,this.j)),this.j.subscribe("sessionFailed",function(){return Pkb(b,b.j)}),this.j.Xw(null));
this.j.UL(a)}}};
g.k.NW=function(){return this.j?this.j.XN():null};
g.k.W2=function(a){this.isDisposed()||(this.xf("Failed to estabilish a session: "+g.Vh(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&x9(this,null),this.ma("yt-remote-cast2-session-failed"))};
g.k.E2=function(a){v9("Receiver availability updated: "+a);if(!this.isDisposed()){var b=w9(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;w9(this)!=b&&this.ma("yt-remote-cast2-availability-change",w9(this))}};
g.k.YN=function(){this.isDisposed()||(this.B=Qkb(this),v9("Updating custom receivers: "+g.Vh(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Qa)(function(){this.xf("Failed to set custom receivers.")},this)),this.ma("yt-remote-cast2-availability-change",w9(this)))};
u9.prototype.setLaunchParams=u9.prototype.y4;u9.prototype.setConnectedScreenStatus=u9.prototype.x4;u9.prototype.stopSession=u9.prototype.OW;u9.prototype.getCastSession=u9.prototype.NW;u9.prototype.requestSession=u9.prototype.requestSession;u9.prototype.init=u9.prototype.init;u9.prototype.dispose=u9.prototype.dispose;var Zkb=[];g.k=E9.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";elb(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Cn=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.T=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Rc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Tj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+F9(this):this.D};
g.k.clone=function(){return new E9(flb(this))};g.v(K9,g.Zz);g.k=K9.prototype;g.k.getState=function(){return this.B};
g.k.Mq=function(){return this.C.getReconnectTimeout()};
g.k.nu=function(){this.C.reconnect()};
g.k.play=function(){M9(this)?(this.j?this.j.play(null,g.Fd,Q9(this,"play")):P9(this,"play"),ilb(this,1,H9(L9(this))),this.ma("remotePlayerChange")):N9(this,this.play)};
g.k.pause=function(){M9(this)?(this.j?this.j.pause(null,g.Fd,Q9(this,"pause")):P9(this,"pause"),ilb(this,2,H9(L9(this))),this.ma("remotePlayerChange")):N9(this,this.pause)};
g.k.seekTo=function(a){if(M9(this)){if(this.j){var b=L9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Rc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.Fd,Q9(this,"seekTo",{newTime:a}))}else P9(this,"seekTo",{newTime:a});ilb(this,3,a);this.ma("remotePlayerChange")}else N9(this,g.Ra(this.seekTo,a))};
g.k.stop=function(){if(M9(this)){this.j?this.j.stop(null,g.Fd,Q9(this,"stopVideo")):P9(this,"stopVideo");var a=L9(this);a.index=-1;a.videoId="";elb(a);O9(this,a);this.ma("remotePlayerChange")}else N9(this,this.stop)};
g.k.setVolume=function(a,b){if(M9(this)){var c=L9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Qa)(function(){b9("set receiver volume: "+d)},this),(0,g.Qa)(function(){this.xf("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Qa)(function(){b9("set receiver muted: "+b)},this),(0,g.Qa)(function(){this.xf("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);P9(this,"setVolume",e)}c.muted=b;c.volume=a;O9(this,c)}else N9(this,g.Ra(this.setVolume,a,b))};
g.k.ZN=function(a,b){if(M9(this)){var c=L9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Vh(b.style),g.jd(a,c.trackData));P9(this,"setSubtitlesTrack",a);O9(this,c)}else N9(this,g.Ra(this.ZN,a,b))};
g.k.setAudioTrack=function(a,b){M9(this)?(b=b.getLanguageInfo().getId(),P9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=L9(this),a.audioTrackId=b,O9(this,a)):N9(this,g.Ra(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=L9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);I9(l,a,c||0);void 0!==b&&(G9(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.Vh(h));P9(this,"setPlaylist",m);d||O9(this,l)};
g.k.WE=function(a,b){if(M9(this)){if(a&&b){var c=L9(this);I9(c,a,b);O9(this,c)}P9(this,"previous")}else N9(this,g.Ra(this.WE,a,b))};
g.k.nextVideo=function(a,b){if(M9(this)){if(a&&b){var c=L9(this);I9(c,a,b);O9(this,c)}P9(this,"next")}else N9(this,g.Ra(this.nextVideo,a,b))};
g.k.Zv=function(){if(M9(this)){P9(this,"clearPlaylist");var a=L9(this);a.reset();O9(this,a);this.ma("remotePlayerChange")}else N9(this,this.Zv)};
g.k.WP=function(){M9(this)?P9(this,"dismissAutoplay"):N9(this,this.WP)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ma("proxyStateChange",a,this.B)}g.Zz.prototype.dispose.call(this)};
g.k.ra=function(){hlb(this);this.C=null;this.D.clear();J9(this,null);g.Zz.prototype.ra.call(this)};
g.k.XL=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ma("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.k.z2=function(a,b){this.ma(a,b)};
g.k.f1=function(a){if(!a)this.EA(null),J9(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=L9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)b9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,O9(this,b)}};
g.k.EA=function(a){b9("Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.T);if(this.j=a)this.j.addUpdateListener(this.T),jlb(this),this.ma("remotePlayerChange")};
g.k.e1=function(a){a?(jlb(this),this.ma("remotePlayerChange")):this.EA(null)};
g.k.yM=function(){P9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.g1=function(){var a=blb();a&&J9(this,a)};
g.k.xf=function(a){a9("CP",a)};g.v(T9,g.Zz);g.k=T9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ka&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;G9(this.j,
n);this.D="UNSUPPORTED";c=this.Ka?"setInitialState":"setPlaylist";R9("Connecting with "+c+" and params: "+g.Vh(m));this.u.connect({method:c,params:g.Vh(m)},a,Chb())}else R9("Connecting without params"),this.u.connect({},a,Chb());nlb(this)};
g.k.Hp=function(a){this.u.Hp(a)};
g.k.dispose=function(){this.isDisposed()||(g.Da("yt.mdx.remote.remoteClient_",null),this.ma("beforeDispose"),S9(this,3));g.Zz.prototype.dispose.call(this)};
g.k.ra=function(){olb(this);qlb(this);plb(this);g.Xu(this.T);this.T=NaN;g.Xu(this.Z);this.Z=NaN;this.C=null;g.ay(this.ea);this.ea.length=0;this.u.dispose();g.Zz.prototype.ra.call(this);this.D=this.J=this.B=this.j=this.u=null};
g.k.qR=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.t(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.UZ=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Nz())?this.u.Ow()&&isNaN(this.I)&&(a=1):a=2);return a};
g.k.ww=function(a){R9("Disconnecting with "+a);g.Da("yt.mdx.remote.remoteClient_",null);olb(this);this.ma("beforeDisconnect",a);1==a&&j8();this.u.disconnect(a);this.dispose()};
g.k.SZ=function(){var a=this.j;this.C&&(a=this.j.clone(),I9(a,this.C,a.index));return flb(a)};
g.k.z4=function(a){var b=this,c=new E9(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.Xu(this.T),this.T=g.Vu(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&U9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&H9(this.j)==H9(c)&&g.Vh(this.j.trackData)==g.Vh(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.Jb(d,function(e){this.ma(e)},this)};
g.k.DQ=function(){var a=this.u.Cq(),b=g.kb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Nz=function(){return this.u.Mq()};
g.k.NZ=function(){return this.D||"UNSUPPORTED"};
g.k.OZ=function(){return this.J||""};
g.k.PW=function(){!isNaN(this.Nz())&&this.u.nu()};
g.k.v4=function(a,b){U9(this,a,b);slb(this)};
g.k.aO=function(){var a=g.jv("SID","")||"",b=g.jv("SAPISID","")||"",c=g.jv("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Gf(g.Ff(a),2);b=g.Gf(g.Ff(b),2);c=g.Gf(g.Ff(c),2);return g.Gf(g.Ff(a+","+b+","+c),2)};
T9.prototype.subscribe=T9.prototype.subscribe;T9.prototype.unsubscribeByKey=T9.prototype.dh;T9.prototype.getProxyState=T9.prototype.UZ;T9.prototype.disconnect=T9.prototype.ww;T9.prototype.getPlayerContextData=T9.prototype.SZ;T9.prototype.setPlayerContextData=T9.prototype.z4;T9.prototype.getOtherConnectedRemoteId=T9.prototype.DQ;T9.prototype.getReconnectTimeout=T9.prototype.Nz;T9.prototype.getAutoplayMode=T9.prototype.NZ;T9.prototype.getAutoplayVideoId=T9.prototype.OZ;T9.prototype.reconnect=T9.prototype.PW;
T9.prototype.sendMessage=T9.prototype.v4;T9.prototype.getXsrfToken=T9.prototype.aO;T9.prototype.isCapabilitySupportedOnConnectedDevices=T9.prototype.qR;g.v(Elb,f9);g.k=Elb.prototype;g.k.Cj=function(a){return this.jg.$_gs(a)};
g.k.contains=function(a){return!!this.jg.$_c(a)};
g.k.get=function(a){return this.jg.$_g(a)};
g.k.start=function(){this.jg.$_st()};
g.k.add=function(a,b,c){this.jg.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.jg.$_r(a,b,c)};
g.k.MF=function(a,b,c,d){this.jg.$_un(a,b,c,d)};
g.k.ra=function(){for(var a=0,b=this.j.length;a<b;++a)this.jg.$_ubk(this.j[a]);this.j.length=0;this.jg=null;f9.prototype.ra.call(this)};
g.k.QW=function(){this.ma("screenChange")};
g.k.Z1=function(){this.ma("onlineScreenChange")};
k9.prototype.$_st=k9.prototype.start;k9.prototype.$_gspc=k9.prototype.KW;k9.prototype.$_gsppc=k9.prototype.WN;k9.prototype.$_c=k9.prototype.contains;k9.prototype.$_g=k9.prototype.get;k9.prototype.$_a=k9.prototype.add;k9.prototype.$_un=k9.prototype.MF;k9.prototype.$_r=k9.prototype.remove;k9.prototype.$_gs=k9.prototype.Cj;k9.prototype.$_gos=k9.prototype.VN;k9.prototype.$_s=k9.prototype.subscribe;k9.prototype.$_ubk=k9.prototype.dh;var e$=null,h$=!1,V9=null,W9=null,Plb=null,$9=[];g.v(Ulb,g.C);g.k=Ulb.prototype;g.k.ra=function(){g.C.prototype.ra.call(this);this.j.stop();this.u.stop();this.J.stop();var a=this.uc;a.unsubscribe("proxyStateChange",this.US,this);a.unsubscribe("remotePlayerChange",this.JA,this);a.unsubscribe("remoteQueueChange",this.HE,this);a.unsubscribe("previousNextChange",this.QS,this);a.unsubscribe("nowAutoplaying",this.KS,this);a.unsubscribe("autoplayDismissed",this.nS,this);this.uc=this.module=null};
g.k.Ej=function(a){var b=g.xa.apply(1,arguments);if(2!=this.uc.B)if(i$(this)){if(!L9(this.uc).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":L9(this.uc).Rc()?this.uc.pause():this.uc.play();break;case "control_play":this.uc.play();break;case "control_pause":this.uc.pause();break;case "control_seek":this.I.wG(b[0],b[1]);break;case "control_subtitles_set_track":Wlb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();j$(this,0===b?void 0:b);break;case "control_seek":j$(this,b[0]);break;case "control_subtitles_set_track":Wlb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.b1=function(a){this.J.nW(a)};
g.k.p5=function(a){this.Ej("control_subtitles_set_track",g.dd(a)?null:a)};
g.k.sU=function(){var a=this.G.getOption("captions","track");g.dd(a)||Wlb(this,a)};
g.k.kc=function(a){this.module.kc(a,this.G.getVideoData().lengthSeconds)};
g.k.K1=function(){g.dd(this.B)||Xlb(this,this.B);this.C=!1};
g.k.US=function(a,b){this.u.stop();2===b&&this.kU()};
g.k.JA=function(){if(i$(this)){this.j.stop();var a=L9(this.uc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.module.Xg=1;break;case 1082:case 1083:this.module.Xg=0;break;default:this.module.Xg=-1}switch(a.playerState){case 1081:case 1:this.ac(new g.pL(8));this.jU();break;case 1085:case 3:this.ac(new g.pL(9));break;case 1083:case 0:this.ac(new g.pL(2));this.I.stop();this.kc(this.G.getVideoData().lengthSeconds);break;case 1084:this.ac(new g.pL(4));break;case 2:this.ac(new g.pL(4));
this.kc(H9(a));break;case -1:this.ac(new g.pL(64));break;case -1E3:this.ac(new g.pL(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",ZC:2}))}a=L9(this.uc).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,Xlb(this,a));a=L9(this.uc);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.T.isActive()||this.XU()}else Vlb(this)};
g.k.QS=function(){this.G.ma("mdxpreviousnextchange")};
g.k.HE=function(){i$(this)||Vlb(this)};
g.k.KS=function(a){isNaN(a)||this.G.ma("mdxnowautoplaying",a)};
g.k.nS=function(){this.G.ma("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){i$(this)&&this.uc.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===L9(this.uc).playerState?j$(this,a):b&&this.uc.seekTo(a)};
g.k.XU=function(){var a=this;if(i$(this)){var b=L9(this.uc);this.events.Ac(this.Z);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.Z=this.events.S(this.G,"onVolumeChange",function(c){Slb(a,c)})}};
g.k.jU=function(){this.j.stop();if(!this.uc.isDisposed()){var a=L9(this.uc);a.Rc()&&this.ac(new g.pL(8));this.kc(H9(a));this.j.start()}};
g.k.kU=function(){this.u.stop();this.j.stop();var a=this.uc.Mq();2==this.uc.B&&!isNaN(a)&&this.u.start()};
g.k.ac=function(a){this.u.stop();var b=this.D;if(!g.uL(b,a)){var c=g.U(a,2);c!==g.U(this.D,2)&&this.G.Dx(c);this.D=a;Zlb(this.module,b,a)}};g.v(k$,g.V);k$.prototype.Lc=function(){this.j.show()};
k$.prototype.wb=function(){this.j.hide()};
k$.prototype.u=function(){b8("mdx-privacy-popup-cancel");this.wb()};
k$.prototype.B=function(){b8("mdx-privacy-popup-confirm");this.wb()};g.v(l$,g.V);l$.prototype.onStateChange=function(a){this.Bc(a.state)};
l$.prototype.Bc=function(a){if(3===this.api.getPresentingPlayerType()){var b={RECEIVER_NAME:this.api.getOption("remote","currentReceiver").name};a=g.U(a,128)?g.YK("Error on $RECEIVER_NAME",b):a.Rc()||g.vL(a)?g.YK("Playing on $RECEIVER_NAME",b):g.YK("Connected to $RECEIVER_NAME",b);this.updateValue("statustext",a);this.j.show()}else this.j.hide()};g.v(m$,g.gT);m$.prototype.u=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.Lr=g.Mb(a,this.j,this),g.hT(this,g.Qg(a,this.j)),a=this.G.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.Li(a),this.enable(!0)):this.enable(!1)};
m$.prototype.j=function(a){return a.key};
m$.prototype.wk=function(a){return"cast-selector-receiver"===a?"Cast...":this.Lr[a].name};
m$.prototype.yg=function(a){g.gT.prototype.yg.call(this,a);this.G.setOption("remote","currentReceiver",this.Lr[a]);this.ob.wb()};g.v(Ylb,g.VP);g.k=Ylb.prototype;
g.k.create=function(){var a=this.player.V(),b=g.jH(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};Jlb(b,a);this.subscriptions.push(g.ty("yt-remote-before-disconnect",this.Y0,this));this.subscriptions.push(g.ty("yt-remote-connection-change",this.F2,this));this.subscriptions.push(g.ty("yt-remote-receiver-availability-change",this.SS,
this));this.subscriptions.push(g.ty("yt-remote-auto-connect",this.D2,this));this.subscriptions.push(g.ty("yt-remote-receiver-resumed",this.C2,this));this.subscriptions.push(g.ty("mdx-privacy-popup-confirm",this.X3,this));this.subscriptions.push(g.ty("mdx-privacy-popup-cancel",this.W3,this));this.SS()};
g.k.load=function(){this.player.cancelPlayback();g.VP.prototype.load.call(this);this.xk=new Ulb(this,this.player,this.uc);var a=(a=Rlb())?a.currentTime:0;var b=Olb()?new K9(d$(),void 0):null;0==a&&b&&(a=H9(L9(b)));0!==a&&this.kc(a);Zlb(this,this.Ld,this.Ld);this.player.Un(6)};
g.k.unload=function(){this.player.ma("mdxautoplaycanceled");this.mq=this.Mn;g.db(this.xk,this.uc);this.uc=this.xk=null;g.VP.prototype.unload.call(this);this.player.Un(5);n$(this)};
g.k.ra=function(){g.uy(this.subscriptions);g.VP.prototype.ra.call(this)};
g.k.On=function(a){var b=g.xa.apply(1,arguments);this.loaded&&this.xk.Ej.apply(this.xk,[a].concat(g.u(b)))};
g.k.getAdState=function(){return this.Xg};
g.k.Cn=function(){return this.uc?L9(this.uc).Cn:!1};
g.k.hasNext=function(){return this.uc?L9(this.uc).hasNext:!1};
g.k.kc=function(a,b){this.CR=a||0;this.player.ma("progresssync",a,b);this.player.Pa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.CR};
g.k.getProgressState=function(){var a=L9(this.uc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:!a.isAdPlaying()&&this.player.Wg(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+F9(a):a.B,isAtLiveHead:1>=(a.u?a.j+F9(a):a.j)-this.getCurrentTime(),loaded:a.T,seekableEnd:a.u?a.j+F9(a):a.j,seekableStart:0<a.C?a.C+F9(a):a.C,offset:0}};
g.k.nextVideo=function(){this.uc&&this.uc.nextVideo()};
g.k.WE=function(){this.uc&&this.uc.WE()};
g.k.Y0=function(a){1===a&&(this.mL=this.uc?L9(this.uc):null)};
g.k.F2=function(){var a=Olb()?new K9(d$(),void 0):null;if(a){var b=this.mq;this.loaded&&this.unload();this.uc=a;this.mL=null;b.key!==this.Mn.key&&(this.mq=b,this.load())}else g.ab(this.uc),this.uc=null,this.loaded&&(this.unload(),(a=this.mL)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,H9(a)));this.player.ma("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.SS=function(){var a=[this.Mn],b=a.concat,c=Klb();B9()&&g.PA("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Lr=b.call(a,c);a=Mlb()||this.Mn;o$(this,a);this.player.Pa("onMdxReceiversChange")};
g.k.D2=function(){var a=Mlb();o$(this,a)};
g.k.C2=function(){this.mq=Mlb()};
g.k.X3=function(){this.TA=!0;n$(this);h$=!1;e$&&g$(e$,1);e$=null};
g.k.W3=function(){this.TA=!1;n$(this);o$(this,this.Mn);this.mq=this.Mn;h$=!1;e$=null;this.player.playVideo()};
g.k.Tg=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Lr;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?clb():o$(this,b)),this.loaded?this.mq:this.Mn;case "quickCast":return 2===this.Lr.length&&"cast-selector-receiver"===this.Lr[1].key?(b&&clb(),!0):!1}};
g.k.yM=function(){this.uc.yM()};
g.k.Uj=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.UP("remote",Ylb);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:00:32 Dec 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:43:49 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 67.293
  exclusion.robots: 0.12
  exclusion.robots.policy: 0.107
  cdx.remote: 0.078
  esindex: 0.011
  LoadShardBlock: 33.806 (3)
  PetaboxLoader3.datanode: 57.167 (5)
  load_resource: 115.829 (2)
  PetaboxLoader3.resolve: 72.906 (2)
*/