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

(function(g){var window=this;'use strict';var Fdb=function(a){return a},Gdb=function(a,b){this.u=a>>>0;
this.j=b>>>0},Idb=function(a){if(!a)return Hdb||(Hdb=new Gdb(0,0));
if(!/^\d+$/.test(a))return null;g.Jba(a);return new Gdb(g.Zd,g.$d)},Jdb=function(a,b,c){null!=c&&("string"===typeof c&&Idb(c),g.xe(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Zd=b,g.$d=c,g.ve(a,g.Zd),g.ve(a,g.$d)):(c=Idb(c),a=a.j,b=c.j,g.ve(a,c.u),g.ve(a,b)))},Kdb=function(a,b,c){b=g.tba(b,c);
null!=b&&(g.xe(a,c,0),a.j.j.push(b?1:0))},Mdb=function(a){g.J.call(this,a,-1,Ldb)},Ndb=function(a){g.J.call(this,a)},Odb=function(a){g.J.call(this,a)},Pdb=function(a){g.J.call(this,a)},Qdb=function(a){g.J.call(this,a)},Z7=function(a){g.Dj(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Qa()).toString(36));
return a},$7=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.mga(a.u,b,c)},Rdb=function(a){if(a instanceof g.qm)return a;
if("function"==typeof a.sj)return a.sj(!1);if(g.Ka(a)){var b=0,c=new g.qm;c.next=function(){for(;;){if(b>=a.length)return g.S2;if(b in a)return g.rm(a[b++]);b++}};
return c}throw Error("Not implemented");},Sdb=function(a,b,c){if(g.Ka(a))g.sc(a,b,c);
else for(a=Rdb(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},Tdb=function(a,b){var c=[];
Sdb(b,function(d){try{var e=g.Io.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Xka(e)&&c.push(d)},a);
return c},Udb=function(a,b){Tdb(a,b).forEach(function(c){g.Io.prototype.remove.call(this,c)},a)},Vdb=function(a){if(a.oa){if(a.oa.locationOverrideToken)return{locationOverrideToken:a.oa.locationOverrideToken};
if(null!=a.oa.latitudeE7&&null!=a.oa.longitudeE7)return{latitudeE7:a.oa.latitudeE7,longitudeE7:a.oa.longitudeE7}}return null},Wdb=function(a,b){g.Tb(a,b)||a.push(b)},Xdb=function(a){var b=0,c;
for(c in a)b++;return b},Ydb=function(a,b){return g.lf(a,b)},Zdb=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},a8=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return Zdb(a)},$db=function(a,b,c,d){var e=new g.vj(null);
a&&g.wj(e,a);b&&g.xj(e,b);c&&g.yj(e,c);d&&(e.B=d);return e},b8=function(a,b){g.Lx[a]=!0;
var c=g.Jx();c&&c.publish.apply(c,arguments);g.Lx[a]=!1},c8=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.ro;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",aeb(this,a.capabilities||""),beb(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},aeb=function(a,b){a.capabilities.clear();
g.vm(b.split(","),g.Pa(Ydb,ceb)).forEach(function(c){a.capabilities.add(c)})},beb=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},d8=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},e8=function(a,b){return!!b&&(a.id==b||a.uuid==b)},deb=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},eeb=function(a){return new d8(a)},feb=function(a){return Array.isArray(a)?g.Sd(a,eeb):[]},f8=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},geb=function(a){return Array.isArray(a)?"["+g.Sd(a,f8).join(",")+"]":"null"},heb=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},ieb=function(a){return g.Sd(a,function(b){return{key:b.id,
name:b.name}})},jeb=function(a,b){return g.Rb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},g8=function(a,b){return g.Rb(a,function(c){return e8(c,b)})},keb=function(){var a=(0,g.Tz)();
a&&Udb(a,a.j.sj(!0))},h8=function(){var a=g.Wz("yt-remote-connected-devices")||[];
g.oc(a);return a},leb=function(a){if(g.Ub(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Sd(a,function(d,e){return 0==e?d:d.substring(c.length)})},meb=function(a){g.Vz("yt-remote-connected-devices",a,86400)},i8=function(){if(neb)return neb;
var a=g.Wz("yt-remote-device-id");a||(a=heb(),g.Vz("yt-remote-device-id",a,31536E3));for(var b=h8(),c=1,d=a;g.Tb(b,d);)c++,d=a+"#"+c;return neb=d},oeb=function(){var a=h8(),b=i8();
g.Yz()&&g.rc(a,b);a=leb(a);if(g.Ub(a))try{g.Uu("remote_sid")}catch(c){}else try{g.Su("remote_sid",a.join(","),-1)}catch(c){}},peb=function(){return g.Wz("yt-remote-session-browser-channel")},qeb=function(){return g.Wz("yt-remote-local-screens")||[]},reb=function(){g.Vz("yt-remote-lounge-token-expiration",!0,86400)},seb=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Sd(qeb(),function(d){return d.loungeToken}),c=g.Sd(a,function(d){return d.loungeToken});
g.Ud(c,function(d){return!g.Tb(b,d)})&&reb();
g.Vz("yt-remote-local-screens",a,31536E3)},j8=function(a){a||(g.Xz("yt-remote-session-screen-id"),g.Xz("yt-remote-session-video-id"));
oeb();a=h8();g.Zb(a,i8());meb(a)},teb=function(){if(!k8){var a=g.Ro();
a&&(k8=new g.Fo(a))}},ueb=function(){teb();
return k8?!!k8.get("yt-remote-use-staging-server"):!1},veb=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},web=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},xeb=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},l8=function(a){a.length?yeb(a.shift(),function(){l8(a)}):zeb()},Aeb=function(a){return"chrome-extension://"+a+"/cast_sender.js"},yeb=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Wi(d,g.Xf(a));(document.head||document.documentElement).appendChild(d)},Beb=function(){var a=veb(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20221101000124/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20221101000124/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},zeb=function(){var a=xeb();
a&&a(!1,"No cast extension found")},Deb=function(){if(Ceb){var a=2,b=xeb(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;yeb("//web.archive.org/web/20221101000124/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",zeb,c)}},Eeb=function(){Deb();
var a=Beb();a.push("//web.archive.org/web/20221101000124/https://www.gstatic.com/eureka/clank/cast_sender.js");l8(a)},Geb=function(){Deb();
var a=Beb();a.push.apply(a,g.u(Feb.map(Aeb)));a.push("//web.archive.org/web/20221101000124/https://www.gstatic.com/eureka/clank/cast_sender.js");l8(a)},Heb=function(){this.j=m8();
this.j.Co("/client_streamz/youtube/living_room/mdx/channel/opened",{hh:3,gh:"channel_type"})},Ieb=function(a,b){a.j.Op("/client_streamz/youtube/living_room/mdx/channel/opened",b)},Jeb=function(){this.j=m8();
this.j.Co("/client_streamz/youtube/living_room/mdx/channel/closed",{hh:3,gh:"channel_type"})},Keb=function(a,b){a.j.Op("/client_streamz/youtube/living_room/mdx/channel/closed",b)},Leb=function(){this.j=m8();
this.j.Co("/client_streamz/youtube/living_room/mdx/channel/message_received",{hh:3,gh:"channel_type"})},Meb=function(a,b){a.j.Op("/client_streamz/youtube/living_room/mdx/channel/message_received",b)},Neb=function(){this.j=m8();
this.j.Co("/client_streamz/youtube/living_room/mdx/channel/error",{hh:3,gh:"channel_type"})},Oeb=function(a,b){a.j.Op("/client_streamz/youtube/living_room/mdx/channel/error",b)},Peb=function(){this.j=m8();
this.j.Co("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},Qeb=function(){this.j=m8();
this.j.Co("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},n8=function(a,b,c){g.K.call(this);
this.I=null!=c?(0,g.Oa)(a,c):a;this.Kh=b;this.D=(0,g.Oa)(this.GV,this);this.j=!1;this.u=0;this.B=this.yc=null;this.C=[]},o8=function(a,b,c){g.K.call(this);
this.C=null!=c?a.bind(c):a;this.Kh=b;this.B=null;this.j=!1;this.u=0;this.yc=null},Reb=function(a){a.yc=g.uh(function(){a.yc=null;
a.j&&!a.u&&(a.j=!1,Reb(a))},a.Kh);
var b=a.B;a.B=null;a.C.apply(null,b)},p8=function(){},Seb=function(){g.Ve.call(this,"p")},Teb=function(){g.Ve.call(this,"o")},Veb=function(){return Ueb=Ueb||new g.Gf},Web=function(a){g.Ve.call(this,"serverreachability",a)},q8=function(a){var b=Veb();
b.dispatchEvent(new Web(b,a))},Xeb=function(a){g.Ve.call(this,"statevent",a)},r8=function(a){var b=Veb();
b.dispatchEvent(new Xeb(b,a))},Yeb=function(a,b,c,d){g.Ve.call(this,"timingevent",a);
this.size=b;this.sx=d},s8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},Zeb=function(){},t8=function(a,b,c,d){this.D=a;
this.C=b;this.Yc=c;this.Bc=d||1;this.ib=new g.Ij(this);this.Cb=45E3;a=g.LG?125:void 0;this.kb=new g.th(a);this.Ma=null;this.B=!1;this.T=this.Xa=this.J=this.Oa=this.ya=this.Pb=this.Z=null;this.oa=[];this.j=null;this.ea=0;this.I=this.Aa=null;this.Ob=-1;this.Ja=!1;this.qb=0;this.Wa=null;this.wc=this.Sa=this.jc=this.Ba=!1;this.u=new $eb},$eb=function(){this.B=null;
this.j="";this.u=!1},bfb=function(a,b,c){a.Oa=1;
a.J=Z7(b.clone());a.T=c;a.Ba=!0;afb(a,null)},afb=function(a,b){a.ya=Date.now();
u8(a);a.Xa=a.J.clone();$7(a.Xa,"t",a.Bc);a.ea=0;var c=a.D.Oa;a.u=new $eb;a.j=cfb(a.D,c?b:null,!a.T);0<a.qb&&(a.Wa=new o8((0,g.Oa)(a.bN,a,a.j),a.qb));a.ib.Pa(a.j,"readystatechange",a.JV);b=a.Ma?g.sf(a.Ma):{};a.T?(a.Aa||(a.Aa="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Xa,a.Aa,a.T,b)):(a.Aa="GET",a.j.send(a.Xa,a.Aa,null,b));q8(1)},dfb=function(a){return a.j?"GET"==a.Aa&&2!=a.Oa&&a.D.Ud:!1},hfb=function(a,b,c){for(var d=!0,e;!a.Ja&&a.ea<c.length;)if(e=efb(a,c),e==v8){4==
b&&(a.I=4,r8(14),d=!1);
break}else if(e==ffb){a.I=4;r8(15);d=!1;break}else gfb(a,e);dfb(a)&&e!=v8&&e!=ffb&&(a.u.j="",a.ea=0);4!=b||0!=c.length||a.u.u||(a.I=1,r8(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.wc&&(a.wc=!0,a.D.gK(a)):(w8(a),x8(a))},efb=function(a,b){var c=a.ea,d=b.indexOf("\n",c);
if(-1==d)return v8;c=Number(b.substring(c,d));if(isNaN(c))return ffb;d+=1;if(d+c>b.length)return v8;b=b.slice(d,d+c);a.ea=d+c;return b},u8=function(a){a.Pb=Date.now()+a.Cb;
ifb(a,a.Cb)},ifb=function(a,b){if(null!=a.Z)throw Error("WatchDog timer not null");
a.Z=s8((0,g.Oa)(a.HV,a),b)},y8=function(a){a.Z&&(g.C.clearTimeout(a.Z),a.Z=null)},x8=function(a){a.D.dg()||a.Ja||jfb(a.D,a)},w8=function(a){y8(a);
g.Se(a.Wa);a.Wa=null;a.kb.stop();a.ib.Wf();if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},gfb=function(a,b){try{var c=a.D;
if(0!=c.Eg&&(c.j==a||kfb(c.u,a)))if(!a.Sa&&kfb(c.u,a)&&3==c.Eg){try{var d=c.Be.j.parse(b)}catch(z){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.T){if(c.j)if(c.j.ya+3E3<a.ya)z8(c),A8(c);else break a;lfb(c);r8(18)}}else c.je=e[1],0<c.je-c.Sa&&37500>e[2]&&c.kb&&0==c.oa&&!c.ea&&(c.ea=s8((0,g.Oa)(c.KV,c),6E3));if(1>=mfb(c.u)&&c.jd){try{c.jd()}catch(z){}c.jd=void 0}}else B8(c,11)}else if((a.Sa||c.j==a)&&z8(c),!g.bb(b))for(e=c.Be.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Sa=f[0];
f=f[1];if(2==c.Eg)if("c"==f[0]){c.C=f[1];c.wc=f[2];var h=f[3];null!=h&&(c.cN=h);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Xa=1.5*l);d=c;var m=a.j;if(m){var n=g.Ai(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.eb(n,"spdy")||g.eb(n,"quic")||g.eb(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(nfb(p,p.u),p.u=null))}if(d.Ba){var q=g.Ai(m,"X-HTTP-Session-Id");q&&(d.Nd=q,g.Dj(d.Ma,d.Ba,q))}}c.Eg=3;c.D&&c.D.iN();c.Oc&&(c.rd=Date.now()-a.ya);d=c;var r=a;d.Ad=ofb(d,d.Oa?d.wc:null,d.Bc);if(r.Sa){pfb(d.u,
r);var w=r,y=d.Xa;y&&w.setTimeout(y);w.Z&&(y8(w),u8(w));d.j=r}else qfb(d);0<c.B.length&&C8(c)}else"stop"!=f[0]&&"close"!=f[0]||B8(c,7);else 3==c.Eg&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?B8(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.hN(f),c.oa=0)}q8(4)}catch(z){}},rfb=function(a,b){this.j=a;
this.map=b;this.context=null},sfb=function(a){this.D=a||10;
g.C.PerformanceNavigationTiming?(a=g.C.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.C.chrome&&g.C.chrome.loadTimes&&g.C.chrome.loadTimes()&&g.C.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},tfb=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},mfb=function(a){return a.u?1:a.j?a.j.size:0},kfb=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},nfb=function(a,
b){a.j?a.j.add(b):a.u=b},pfb=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},ufb=function(a){if(null!=a.u)return a.B.concat(a.u.oa);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.t(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.oa);return b}return g.cc(a.B)},vfb=function(a,b){var c=new Zeb;
if(g.C.Image){var d=new Image;d.onload=g.Pa(D8,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Pa(D8,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Pa(D8,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Pa(D8,c,d,"TestLoadImage: timeout",!1,b);g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},D8=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},wfb=function(){this.j=new p8},xfb=function(a,b,c){var d=c||"";
try{g.uj(a,function(e,f){var h=e;g.La(e)&&(h=g.Th(e));b.push(d+f+"="+encodeURIComponent(h))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},E8=function(a,b,c){return c&&c.PZ?c.PZ[a]||b:b},yfb=function(a){this.B=[];
this.wc=this.Ad=this.Ma=this.Bc=this.j=this.Nd=this.Ba=this.Ja=this.J=this.Pb=this.Z=null;this.cf=this.Wa=0;this.Ue=E8("failFast",!1,a);this.kb=this.ea=this.T=this.I=this.D=null;this.Yc=!0;this.je=this.Sa=-1;this.jc=this.oa=this.ya=0;this.Ie=E8("baseRetryDelayMs",5E3,a);this.Pf=E8("retryDelaySeedMs",1E4,a);this.Ve=E8("forwardChannelMaxRetries",2,a);this.Ed=E8("forwardChannelRequestTimeoutMs",2E4,a);this.Md=a&&a.m7a||void 0;this.Ud=a&&a.k7a||!1;this.Xa=void 0;this.Oa=a&&a.V3||!1;this.C="";this.u=new sfb(a&&
a.U5a);this.Be=new wfb;this.Cb=a&&a.j6a||!1;this.qb=a&&a.a6a||!1;this.Cb&&this.qb&&(this.qb=!1);this.Qf=a&&a.P5a||!1;a&&a.l6a&&(this.Yc=!1);this.Oc=!this.Cb&&this.Yc&&a&&a.Y5a||!1;this.jd=void 0;this.rd=0;this.ib=!1;this.Ob=this.Aa=null},A8=function(a){a.j&&(zfb(a),a.j.cancel(),a.j=null)},Afb=function(a){A8(a);
a.T&&(g.C.clearTimeout(a.T),a.T=null);z8(a);a.u.cancel();a.I&&("number"===typeof a.I&&g.C.clearTimeout(a.I),a.I=null)},C8=function(a){tfb(a.u)||a.I||(a.I=!0,g.kh(a.eN,a),a.ya=0)},Cfb=function(a,b){if(mfb(a.u)>=a.u.C-(a.I?1:0))return!1;
if(a.I)return a.B=b.oa.concat(a.B),!0;if(1==a.Eg||2==a.Eg||a.ya>=(a.Ue?0:a.Ve))return!1;a.I=s8((0,g.Oa)(a.eN,a,b),Bfb(a,a.ya));a.ya++;return!0},Efb=function(a,b){var c;
b?c=b.Yc:c=a.Wa++;var d=a.Ma.clone();g.Dj(d,"SID",a.C);g.Dj(d,"RID",c);g.Dj(d,"AID",a.Sa);F8(a,d);a.J&&a.Z&&g.Hj(d,a.J,a.Z);c=new t8(a,a.C,c,a.ya+1);null===a.J&&(c.Ma=a.Z);b&&(a.B=b.oa.concat(a.B));b=Dfb(a,c,1E3);c.setTimeout(Math.round(.5*a.Ed)+Math.round(.5*a.Ed*Math.random()));nfb(a.u,c);bfb(c,d,b)},F8=function(a,b){a.Ja&&g.cf(a.Ja,function(c,d){g.Dj(b,d,c)});
a.D&&g.uj({},function(c,d){g.Dj(b,d,c)})},Dfb=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Oa)(a.D.LV,a.D,a):null;a:for(var e=a.B,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].j,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{xfb(p,h,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=h.join("&");break a}}a=a.B.splice(0,c);b.oa=a;return d},qfb=function(a){a.j||a.T||(a.jc=1,g.kh(a.dN,a),a.oa=0)},lfb=function(a){if(a.j||a.T||3<=a.oa)return!1;
a.jc++;a.T=s8((0,g.Oa)(a.dN,a),Bfb(a,a.oa));a.oa++;return!0},zfb=function(a){null!=a.Aa&&(g.C.clearTimeout(a.Aa),a.Aa=null)},Ffb=function(a){a.j=new t8(a,a.C,"rpc",a.jc);
null===a.J&&(a.j.Ma=a.Z);a.j.qb=0;var b=a.Ad.clone();g.Dj(b,"RID","rpc");g.Dj(b,"SID",a.C);g.Dj(b,"CI",a.kb?"0":"1");g.Dj(b,"AID",a.Sa);g.Dj(b,"TYPE","xmlhttp");F8(a,b);a.J&&a.Z&&g.Hj(b,a.J,a.Z);a.Xa&&a.j.setTimeout(a.Xa);var c=a.j;a=a.wc;c.Oa=1;c.J=Z7(b.clone());c.T=null;c.Ba=!0;afb(c,a)},z8=function(a){null!=a.ea&&(g.C.clearTimeout(a.ea),a.ea=null)},jfb=function(a,b){var c=null;
if(a.j==b){z8(a);zfb(a);a.j=null;var d=2}else if(kfb(a.u,b))c=b.oa,pfb(a.u,b),d=1;else return;if(0!=a.Eg)if(b.B)if(1==d){c=b.T?b.T.length:0;b=Date.now()-b.ya;var e=a.ya;d=Veb();d.dispatchEvent(new Yeb(d,c,b,e));C8(a)}else qfb(a);else{var f=b.Ob;e=b.getLastError();if(3==e||0==e&&0<f||!(1==d&&Cfb(a,b)||2==d&&lfb(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:B8(a,5);break;case 4:B8(a,10);break;case 3:B8(a,6);break;default:B8(a,2)}}},Bfb=function(a,b){var c=a.Ie+Math.floor(Math.random()*
a.Pf);
a.isActive()||(c*=2);return c*b},B8=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Oa)(a.b4,a);c||(c=new g.vj("//web.archive.org/web/20221101000124/https://www.google.com/images/cleardot.gif"),g.C.location&&"http"==g.C.location.protocol||g.wj(c,"https"),Z7(c));vfb(c.toString(),d)}else r8(2);a.Eg=0;a.D&&a.D.gN(b);Gfb(a);Afb(a)},Gfb=function(a){a.Eg=0;
a.Ob=[];if(a.D){var b=ufb(a.u);if(0!=b.length||0!=a.B.length)g.dc(a.Ob,b),g.dc(a.Ob,a.B),a.u.B.length=0,g.cc(a.B),a.B.length=0;a.D.fN()}},Hfb=function(a){if(0==a.Eg)return a.Ob;
var b=[];g.dc(b,ufb(a.u));g.dc(b,a.B);return b},ofb=function(a,b,c){var d=g.Ej(c);
""!=d.j?(b&&g.xj(d,b+"."+d.j),g.yj(d,d.C)):(d=g.C.location,d=$db(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.Ba;c=a.Nd;b&&c&&g.Dj(d,b,c);g.Dj(d,"VER",a.cN);F8(a,d);return d},cfb=function(a,b,c){if(b&&!a.Oa)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.Ud&&!a.Md?new g.ti(new g.qj({BT:!0})):new g.ti(a.Md);b.J=a.Oa;return b},Ifb=function(){},Jfb=function(){if(g.Fc&&!g.Cc(10))throw Error("Environmental error: no available transport.");
},H8=function(a,b){g.Gf.call(this);
this.j=new yfb(b);this.I=a;this.u=b&&b.r_||null;a=b&&b.q_||null;b&&b.T5a&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.Z=a;a=b&&b.p6a||null;b&&b.kR&&(a?a["X-WebChannel-Content-Type"]=b.kR:a={"X-WebChannel-Content-Type":b.kR});b&&b.dP&&(a?a["X-WebChannel-Client-Profile"]=b.dP:a={"X-WebChannel-Client-Profile":b.dP});this.j.Pb=a;(a=b&&b.n6a)&&!g.bb(a)&&(this.j.J=a);this.J=b&&b.V3||!1;this.D=b&&b.W6a||!1;(b=b&&b.LZ)&&!g.bb(b)&&(this.j.Ba=b,g.kf(this.u,b)&&g.pf(this.u,
b));this.C=new G8(this)},Kfb=function(a){Seb.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.gf(b))?g.qf(b,this.metadataKey):b:this.data=a},Lfb=function(a){Teb.call(this);
this.status=1;this.errorCode=a},G8=function(a){this.j=a},Mfb=function(a,b){this.u=a;
this.j=b},Nfb=function(a){return Hfb(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?Zdb(b):b);return b})},I8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},K8=function(a){J8.dispatchEvent(new Ofb(J8,a))},Ofb=function(a){g.Ve.call(this,"statevent",a)},L8=function(a,b,c,d){this.j=a;
this.C=b;this.J=c;this.I=d||1;this.u=45E3;this.B=new g.Ij(this);this.D=new g.th;this.D.setInterval(250)},Qfb=function(a,b,c){a.Tu=1;
a.Jp=Z7(b.clone());a.gs=c;a.Ba=!0;Pfb(a,null)},Rfb=function(a,b,c,d,e){a.Tu=1;
a.Jp=Z7(b.clone());a.gs=null;a.Ba=c;e&&(a.kT=!1);Pfb(a,d)},Pfb=function(a,b){a.Su=Date.now();
M8(a);a.Lp=a.Jp.clone();$7(a.Lp,"t",a.I);a.TB=0;a.Uh=a.j.bG(a.j.uy()?b:null);0<a.ZF&&(a.RB=new o8((0,g.Oa)(a.jN,a,a.Uh),a.ZF));a.B.Pa(a.Uh,"readystatechange",a.NV);b=a.Zr?g.sf(a.Zr):{};a.gs?(a.SB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Uh.send(a.Lp,a.SB,a.gs,b)):(a.SB="GET",a.kT&&!g.Xe&&(b.Connection="close"),a.Uh.send(a.Lp,a.SB,null,b));a.j.Tl(1)},Ufb=function(a,b){var c=a.TB,d=b.indexOf("\n",c);
if(-1==d)return Sfb;c=Number(b.substring(c,d));if(isNaN(c))return Tfb;d+=1;if(d+c>b.length)return Sfb;b=b.slice(d,d+c);a.TB=d+c;return b},Wfb=function(a,b){a.Su=Date.now();
M8(a);var c=b?window.location.hostname:"";a.Lp=a.Jp.clone();g.Dj(a.Lp,"DOMAIN",c);g.Dj(a.Lp,"t",a.I);try{a.nm=new ActiveXObject("htmlfile")}catch(m){N8(a);a.Kp=7;K8(22);O8(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in P8)f=P8[f];else if(f in Vfb)f=P8[f]=Vfb[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
P8[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.mg(g.Uf("b/12014412"),d);a.nm.open();a.nm.write(g.kg(c));a.nm.close();a.nm.parentWindow.m=(0,g.Oa)(a.E2,a);a.nm.parentWindow.d=(0,g.Oa)(a.qS,a,!0);a.nm.parentWindow.rpcClose=(0,g.Oa)(a.qS,a,!1);c=a.nm.createElement("DIV");a.nm.parentWindow.document.body.appendChild(c);d=g.ag(a.Lp.toString());d=g.Dg(g.Zf(d));d=g.mg(g.Uf("b/12014412"),'<iframe src="'+d+'"></iframe>');g.yda(c,d);a.j.Tl(1)},M8=function(a){a.aG=
Date.now()+a.u;
Xfb(a,a.u)},Xfb=function(a,b){if(null!=a.Uu)throw Error("WatchDog timer not null");
a.Uu=I8((0,g.Oa)(a.MV,a),b)},Yfb=function(a){a.Uu&&(g.C.clearTimeout(a.Uu),a.Uu=null)},O8=function(a){a.j.dg()||a.Yr||a.j.UB(a)},N8=function(a){Yfb(a);
g.Se(a.RB);a.RB=null;a.D.stop();a.B.Wf();if(a.Uh){var b=a.Uh;a.Uh=null;b.abort();b.dispose()}a.nm&&(a.nm=null)},Zfb=function(a,b){try{a.j.kN(a,b),a.j.Tl(4)}catch(c){}},agb=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;$fb(a,b,function(h){h?c(!0):g.C.setTimeout(function(){agb(a,b,c,d,f)},f)})}},$fb=function(a,b,c){var d=new Image;
d.onload=function(){try{Q8(d),c(!0)}catch(e){}};
d.onerror=function(){try{Q8(d),c(!1)}catch(e){}};
d.onabort=function(){try{Q8(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Q8(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},Q8=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},bgb=function(a){this.j=a;
this.u=new p8},cgb=function(a){var b=R8(a.j,a.Qy,"/mail/images/cleardot.gif");
Z7(b);agb(b.toString(),5E3,(0,g.Oa)(a.jY,a),3,2E3);a.Tl(1)},dgb=function(a){var b=a.j.Z;
if(null!=b)K8(5),b?(K8(11),S8(a.j,a,!1)):(K8(12),S8(a.j,a,!0));else if(a.Hi=new L8(a),a.Hi.Zr=a.cG,b=a.j,b=R8(b,b.uy()?a.sy:null,a.dG),K8(5),!g.Fc||g.Cc(10))$7(b,"TYPE","xmlhttp"),Rfb(a.Hi,b,!1,a.sy,!1);else{$7(b,"TYPE","html");var c=a.Hi;a=!!a.sy;c.Tu=3;c.Jp=Z7(b.clone());Wfb(c,a)}},egb=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new p8;this.T=a||null;this.Z=null!=b?b:null;this.J=c||!1},fgb=function(a,b){this.j=a;
this.map=b;this.context=null},ggb=function(a,b,c,d){g.Ve.call(this,"timingevent",a);
this.size=b;this.sx=d},igb=function(a){g.Ve.call(this,"serverreachability",a)},kgb=function(a){a.OV(1,0);
a.VB=R8(a,null,a.eG);jgb(a)},lgb=function(a){a.cq&&(a.cq.abort(),a.cq=null);
a.Of&&(a.Of.cancel(),a.Of=null);a.xo&&(g.C.clearTimeout(a.xo),a.xo=null);T8(a);a.Pi&&(a.Pi.cancel(),a.Pi=null);a.Mp&&(g.C.clearTimeout(a.Mp),a.Mp=null)},mgb=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new fgb(a.PV++,b));2!=a.j&&3!=a.j||jgb(a)},ngb=function(a){var b=0;
a.Of&&b++;a.Pi&&b++;return b},jgb=function(a){a.Pi||a.Mp||(a.Mp=I8((0,g.Oa)(a.oN,a),0),a.Wu=0)},qgb=function(a,b){if(1==a.j){if(!b){a.wy=Math.floor(1E5*Math.random());
b=a.wy++;var c=new L8(a,"",b);c.Zr=a.ym;var d=ogb(a),e=a.VB.clone();g.Dj(e,"RID",b);g.Dj(e,"CVER","1");U8(a,e);Qfb(c,e,d);a.Pi=c;a.j=2}}else 3==a.j&&(b?pgb(a,b):0==a.u.length||a.Pi||pgb(a))},pgb=function(a,b){if(b)if(6<a.hs){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.wy-1;b=ogb(a)}else c=b.J,b=b.gs;else c=a.wy++,b=ogb(a);var d=a.VB.clone();g.Dj(d,"SID",a.C);g.Dj(d,"RID",c);g.Dj(d,"AID",a.Xu);U8(a,d);c=new L8(a,a.C,c,a.Wu+1);c.Zr=a.ym;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Pi=c;Qfb(c,d,b)},U8=function(a,b){a.Eh&&(a=a.Eh.sN())&&g.cf(a,function(c,d){g.Dj(b,d,c)})},ogb=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.hs&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Eu:e.Eu},f++){e.Eu=a.u[f].j;var h=a.u[f].map;e.Eu=6>=a.hs?f:e.Eu-d;try{g.cf(h,function(l){return function(m,n){c.push("req"+l.Eu+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Eu+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},rgb=function(a){a.Of||a.xo||(a.I=1,a.xo=I8((0,g.Oa)(a.nN,a),0),a.Vu=0)},tgb=function(a){if(a.Of||a.xo||3<=a.Vu)return!1;
a.I++;a.xo=I8((0,g.Oa)(a.nN,a),sgb(a,a.Vu));a.Vu++;return!0},S8=function(a,b,c){a.sF=c;
a.zm=b.uo;a.J||kgb(a)},T8=function(a){null!=a.ls&&(g.C.clearTimeout(a.ls),a.ls=null)},sgb=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},V8=function(a,b){if(2==b||9==b){var c=null;
a.Eh&&(c=null);var d=(0,g.Oa)(a.a4,a);c||(c=new g.vj("//web.archive.org/web/20221101000124/https://www.google.com/images/cleardot.gif"),Z7(c));$fb(c.toString(),1E4,d)}else K8(2);ugb(a,b)},ugb=function(a,b){a.j=0;
a.Eh&&a.Eh.pN(b);vgb(a);lgb(a)},vgb=function(a){a.j=0;
a.zm=-1;if(a.Eh)if(0==a.B.length&&0==a.u.length)a.Eh.fG();else{var b=g.cc(a.B),c=g.cc(a.u);a.B.length=0;a.u.length=0;a.Eh.fG(b,c)}},R8=function(a,b,c){var d=g.Ej(c);
if(""!=d.j)b&&g.xj(d,b+"."+d.j),g.yj(d,d.C);else{var e=window.location;d=$db(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.vy&&g.cf(a.vy,function(f,h){g.Dj(d,h,f)});
g.Dj(d,"VER",a.hs);U8(a,d);return d},wgb=function(){},xgb=function(){this.j=[];
this.u=[]},ygb=function(a){g.Ve.call(this,"channelMessage");
this.message=a},zgb=function(a){g.Ve.call(this,"channelError");
this.error=a},Agb=function(a,b){this.action=a;
this.params=b||{}},W8=function(a,b){g.K.call(this);
this.j=new g.Xn(this.u2,0,this);g.M(this,this.j);this.Kh=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Oa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Oa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},Bgb=function(){},m8=function(){if(!X8){X8=new g.wh(new Bgb);
var a=g.ju("client_streamz_web_flush_count",-1);-1!==a&&(X8.C=a)}return X8},Cgb=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ya=a;this.J=b;this.B=new g.Eo;this.u=new W8(this.y3,this);this.j=null;this.ea=!1;this.I=null;this.Z="";this.T=this.D=0;this.C=[];this.Oa=c;this.oa=d;this.Sa=e;this.Ma=new Heb;this.Aa=new Jeb;this.Ja=new Leb;this.Ba=new Neb;this.Wa=new Peb;this.Xa=new Qeb},Dgb=function(a){if(a.j){var b=a.oa(),c=a.j.ym||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.ym=c}},Y8=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.$h(4,a))||"";b&&(this.port=":"+b);this.domain=g.ai(a)||"";a=g.qb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.pb(a,"10.0")&&(this.u=!1))},Z8=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.ni(c+b,{})},Egb=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Pa(a.C,d,!0),onError:g.Pa(a.B,e),onTimeout:g.Pa(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Ju(b,a)},Fgb=function(a,b){g.Gf.call(this);
var c=this;this.Zc=a();this.Zc.subscribe("handlerOpened",this.TV,this);this.Zc.subscribe("handlerClosed",this.RV,this);this.Zc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Zc.subscribe("handlerMessage",this.SV,this);this.j=b},Ggb=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new Jfb:e;var f=void 0===f?new g.Eo:f;this.pathPrefix=a;this.j=b;this.ya=c;this.D=f;this.T=null;this.Z=this.J=0;this.channel=null;this.I=0;this.B=new W8(function(){d.B.isActive();var h;0===(null==(h=d.channel)?void 0:mfb((new Mfb(h,h.j)).j.u))&&d.connect(d.T,d.J)});
this.C={};this.u={};this.ea=!1;this.logger=null;this.oa=[];this.Sg=void 0;this.Ma=new Heb;this.Aa=new Jeb;this.Ja=new Leb;this.Ba=new Neb},Hgb=function(a){g.zf(a.channel,"m",function(){a.I=3;
a.B.reset();a.T=null;a.J=0;for(var b=g.t(a.oa),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.oa=[];a.ma("webChannelOpened");Ieb(a.Ma,"WEB_CHANNEL")});
g.zf(a.channel,"n",function(){a.I=0;a.B.isActive()||a.ma("webChannelClosed");var b,c=null==(b=a.channel)?void 0:Nfb(new Mfb(b,b.j));c&&(a.oa=[].concat(g.u(c)));Keb(a.Aa,"WEB_CHANNEL")});
g.zf(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.ma("webChannelMessage",new Agb(c[0],c[1]));a.Sg=b.statusCode;Meb(a.Ja,"WEB_CHANNEL")});
g.zf(a.channel,"o",function(){401===a.Sg||a.B.start();a.ma("webChannelError");Oeb(a.Ba,"WEB_CHANNEL")})},Igb=function(a){var b=a.ya();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},Jgb=function(a){g.Gf.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.WV,this);this.j.subscribe("webChannelClosed",this.UV,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.VV,this)},Kgb=function(a,b,c,d,e){function f(){return new Cgb(Z8(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.iu("enable_mdx_web_channel_desktop")?new Jgb(function(){return new Ggb(Z8(a,"/wc"),b,c)}):new Fgb(f,e)},Ogb=function(){var a=Lgb;
Mgb();$8.push(a);Ngb()},a9=function(a,b){Mgb();
var c=Pgb(a,String(b));g.Ub($8)?Qgb(c):(Ngb(),g.sc($8,function(d){d(c)}))},b9=function(a){a9("CP",a)},Mgb=function(){$8||($8=g.Ea("yt.mdx.remote.debug.handlers_")||[],g.Da("yt.mdx.remote.debug.handlers_",$8))},Qgb=function(a){var b=(c9+1)%50;
c9=b;d9[b]=a;e9||(e9=49==b)},Ngb=function(){var a=$8;
if(d9[0]){var b=e9?c9:-1;do{b=(b+1)%50;var c=d9[b];g.sc(a,function(d){d(c)})}while(b!=c9);
d9=Array(50);c9=-1;e9=!1}},Pgb=function(a,b){var c=(Date.now()-Rgb)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},f9=function(a){g.jz.call(this);
this.I=a;this.screens=[]},Sgb=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},Tgb=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.vm(a.screens,function(f){return!!jeb(b,f)});
for(var d=0,e=b.length;d<e;d++)c=Sgb(a,b[d])||c;return c},Ugb=function(a,b){var c=a.screens.length;
a.screens=g.vm(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},Vgb=function(a,b,c,d,e){g.jz.call(this);
this.B=a;this.J=b;this.C=c;this.I=d;this.D=e;this.u=0;this.j=null;this.yc=NaN},h9=function(a){f9.call(this,"LocalScreenService");
this.u=a;this.j=NaN;g9(this);this.info("Initializing with "+geb(this.screens))},Wgb=function(a){if(a.screens.length){var b=g.Sd(a.screens,function(d){return d.id}),c=Z8(a.u,"/pairing/get_lounge_token_batch");
Egb(a.u,c,{screen_ids:b.join(",")},(0,g.Oa)(a.oZ,a),(0,g.Oa)(a.nZ,a))}},g9=function(a){if(g.iu("deprecate_pair_servlet_enabled"))return Tgb(a,[]);
var b=feb(qeb());b=g.vm(b,function(c){return!c.uuid});
return Tgb(a,b)},i9=function(a,b){seb(g.Sd(a.screens,deb));
b&&reb()},Ygb=function(a,b){g.jz.call(this);
this.I=b;b=(b=g.Wz("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=d.length,f=0;f<e;++f){var h=d[f].id;c[h]=g.Tb(b,h)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;Xgb("Initialized with "+g.Th(this.j))},Zgb=function(a,b,c){var d=Z8(a.D,"/pairing/get_screen_availability");
Egb(a.D,d,{lounge_token:b.token},(0,g.Oa)(function(e){e=e.screens||[];for(var f=e.length,h=0;h<f;++h)if(e[h].loungeToken==b.token){c("online"==e[h].status);return}c(!1)},a),(0,g.Oa)(function(){c(!1)},a))},ahb=function(a,b){a:if(Xdb(b)!=Xdb(a.j))var c=!1;
else{c=g.jf(b);for(var d=c.length,e=0;e<d;++e)if(!a.j[c[e]]){c=!1;break a}c=!0}c||(Xgb("Updated online screens: "+g.Th(a.j)),a.j=b,a.ma("screenChange"));$gb(a)},j9=function(a){isNaN(a.B)||g.Gu(a.B);
a.B=g.Eu((0,g.Oa)(a.eL,a),0<a.C&&a.C<g.Qa()?2E4:1E4)},Xgb=function(a){a9("OnlineScreenService",a)},bhb=function(a){var b={};
g.sc(a.I(),function(c){c.token?b[c.token]=c.id:this.tf("Requesting availability of screen w/o lounge token.")});
return b},$gb=function(a){a=g.jf(g.df(a.j,function(b){return b}));
g.oc(a);a.length?g.Vz("yt-remote-online-screen-ids",a.join(","),60):g.Xz("yt-remote-online-screen-ids")},k9=function(a,b){b=void 0===b?!1:b;
f9.call(this,"ScreenService");this.C=a;this.J=b;this.j=this.u=null;this.B=[];this.D={};chb(this)},ehb=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.zj(),l=c?g8(h,c):null;c&&(a.J||l)||(l=g8(h,b));if(l){l.uuid=b;var m=l9(a,l);Zgb(a.j,m,function(n){e(n?m:null)})}else c?dhb(a,c,(0,g.Oa)(function(n){var p=l9(this,new d8({name:d,
screenId:c,loungeToken:n,dialId:b||""}));Zgb(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},fhb=function(a,b){for(var c=a.screens.length,d=0;d<c;++d)if(a.screens[d].name==b)return a.screens[d];
return null},ghb=function(a,b,c){Zgb(a.j,b,c)},dhb=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Ju(Z8(a.C,"/pairing/get_lounge_token_batch"),e)},hhb=function(a){a.screens=a.u.zj();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=a.screens.length;for(d=0;d<b;++d){var e=a.screens[d];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+geb(a.screens))},chb=function(a){ihb(a);
a.u=new h9(a.C);a.u.subscribe("screenChange",(0,g.Oa)(a.xZ,a));hhb(a);a.J||(a.B=feb(g.Wz("yt-remote-automatic-screen-cache")||[]));ihb(a);a.info("Initializing automatic screens: "+geb(a.B));a.j=new Ygb(a.C,(0,g.Oa)(a.zj,a,!0));a.j.subscribe("screenChange",(0,g.Oa)(function(){this.ma("onlineScreenChange")},a))},l9=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=g8(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.J||jhb(a));ihb(a);a.D[b.uuid]=b.id;g.Vz("yt-remote-device-id-map",a.D,31536E3);return b},jhb=function(a){a=g.vm(a.B,function(b){return"shortLived"!=b.idType});
g.Vz("yt-remote-automatic-screen-cache",g.Sd(a,deb))},ihb=function(a){a.D=g.Wz("yt-remote-device-id-map")||{}},m9=function(a,b,c){g.jz.call(this);
this.Ba=c;this.B=a;this.j=b;this.C=null},n9=function(a,b){a.C=b;
a.ma("sessionScreen",a.C)},khb=function(a,b){a.C&&(a.C.token=b,l9(a.B,a.C));
a.ma("sessionScreen",a.C)},o9=function(a,b){a9(a.Ba,b)},p9=function(a,b,c){m9.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.oa=(0,g.Oa)(this.bW,this);this.Aa=(0,g.Oa)(this.O2,this);this.ea=g.Eu(function(){lhb(d,null)},12E4);
this.J=this.D=this.I=this.T=0;this.ya=!1;this.Z="unknown"},nhb=function(a,b){g.Gu(a.J);
a.J=0;0==b?mhb(a):a.J=g.Eu(function(){mhb(a)},b)},mhb=function(a){ohb(a,"getLoungeToken");
g.Gu(a.D);a.D=g.Eu(function(){phb(a,null)},3E4)},ohb=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Th());
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Oa)(function(){o9(this,"Failed to send message: "+b+".")},a)):o9(a,"Sending yt message without session: "+g.Th(c))},qhb=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.ZP(b,function(c){n9(a,c)},function(){return a.wi()},5)):a.wi(Error("Waiting for session status timed out."))},shb=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new d8(b);rhb(a,d,function(e){e?(a.ya=!0,l9(a.B,d),n9(a,d),a.Z="unknown",nhb(a,c)):(g.nu(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.wi())},5)},lhb=function(a,b){g.Gu(a.ea);
a.ea=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?shb(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.nu(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),qhb(a,b.screenId))):(g.nu(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),qhb(a,b.screenId)):qhb(a,b.screenId):a.wi(Error("Waiting for session status timed out."))},phb=function(a,b){g.Gu(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.Z=c,nhb(a,3E4)):(khb(a,b.loungeToken),a.ya=!1,a.Z="unknown",nhb(a,b.loungeTokenRefreshIntervalMs))},rhb=function(a,b,c,d){g.Gu(a.I);
a.I=0;ghb(a.B,b,function(e){e||0>d?c(e):a.I=g.Eu(function(){rhb(a,b,c,d-1)},300)})},thb=function(a){g.Gu(a.T);
a.T=0;g.Gu(a.I);a.I=0;g.Gu(a.ea);a.ea=0;g.Gu(a.D);a.D=0;g.Gu(a.J);a.J=0},q9=function(a,b,c,d){m9.call(this,a,b,"DialSession");
this.config_=d;this.u=this.T=null;this.Aa="";this.Oa=c;this.Ma=null;this.ea=function(){};
this.Z=NaN;this.Ja=(0,g.Oa)(this.cW,this);this.D=function(){};
this.J=this.I=0;this.oa=!1;this.ya="unknown"},r9=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},uhb=function(a){a.D=a.B.uN(a.Aa,a.j.label,a.j.friendlyName,r9(a),function(b,c){a.D=function(){};
a.oa=!0;n9(a,b);"shortLived"==b.idType&&0<c&&s9(a,c)},function(b){a.D=function(){};
a.wi(b)})},vhb=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.Oa;ueb()&&(b.env_useStageMdx=1);return g.ei(b)},whb=function(a){return new Promise(function(b){a.Aa=heb();
if(a.Ma){var c=new chrome.cast.DialLaunchResponse(!0,vhb(a));b(c);uhb(a)}else a.ea=function(){g.Gu(a.Z);a.ea=function(){};
a.Z=NaN;var d=new chrome.cast.DialLaunchResponse(!0,vhb(a));b(d);uhb(a)},a.Z=g.Eu(function(){a.ea()},100)})},yhb=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new d8(b);return(new Promise(function(e){xhb(a,d,function(f){f?(a.oa=!0,l9(a.B,d),n9(a,d),s9(a,c)):g.nu(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):whb(a)})},zhb=function(a,b){var c=a.T.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){ehb(a.B,c,b,d,function(f){f&&f.token&&n9(a,f);e(f)},function(f){o9(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):whb(a)})},xhb=function(a,b,c,d){g.Gu(a.I);
a.I=0;ghb(a.B,b,function(e){e||0>d?c(e):a.I=g.Eu(function(){xhb(a,b,c,d-1)},300)})},s9=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
r9(a)&&(g.Gu(a.J),a.J=0,0==b?Ahb(a):a.J=g.Eu(function(){Ahb(a)},b))},Ahb=function(a){r9(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ya=c,s9(a,3E4)):(a.oa=!1,a.ya="unknown",khb(a,b.loungeToken),s9(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ya="noLoungeTokenResponse";s9(a,3E4)})},Bhb=function(a){g.Gu(a.I);
a.I=0;g.Gu(a.J);a.J=0;a.D();a.D=function(){};
g.Gu(a.Z)},t9=function(a,b){m9.call(this,a,b,"ManualSession");
this.u=g.Eu((0,g.Oa)(this.Rw,this,null),150)},u9=function(a,b){g.jz.call(this);
this.config_=b;this.u=a;this.T=b.appId||"233637DE";this.C=b.theme||"cl";this.Z=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.j=null;this.J=!1;this.B=[];this.D=(0,g.Oa)(this.C1,this)},Chb=function(a,b){return b?g.Rb(a.B,function(c){return e8(b,c.label)},a):null},v9=function(a){a9("Controller",a)},Lgb=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},w9=function(a){return a.J||!!a.B.length||!!a.j},x9=function(a,b,c){b!=a.j&&(g.Se(a.j),(a.j=b)?(c?a.ma("yt-remote-cast2-receiver-resumed",
b.j):a.ma("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Oa)(a.oS,a,b)),b.subscribe("sessionFailed",function(){return Dhb(a,b)}),b.getScreen()?a.ma("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Rw(null)):a.ma("yt-remote-cast2-session-change",null))},Dhb=function(a,b){a.j==b&&a.ma("yt-remote-cast2-session-failed")},Ehb=function(a){var b=a.u.tN(),c=a.j&&a.j.j;
a=g.Sd(b,function(d){c&&e8(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Chb(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Lhb=function(a,b,c,d){d.disableCastApi?y9("Cannot initialize because disabled by Mdx config."):Fhb()?Ghb(b,d)&&(Hhb(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Ihb(a,c):(window.__onGCastApiAvailable=function(e,f){e?Ihb(a,c):(z9("Failed to load cast API: "+f),Jhb(!1),Hhb(!1),g.Xz("yt-remote-cast-available"),g.Xz("yt-remote-cast-receiver"),
Khb(),c(!1))},d.loadCastApiSetupScript?g.Zz("https://web.archive.org/web/20221101000124/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=veb()&&Eeb():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?zeb():89<=veb()?Geb():(Deb(),l8(Feb.map(Aeb))))):y9("Cannot initialize because not running Chrome")},Khb=function(){y9("dispose");
var a=A9();a&&a.dispose();g.Da("yt.mdx.remote.cloudview.instance_",null);Mhb(!1);g.Ox(Nhb);Nhb.length=0},B9=function(){return!!g.Wz("yt-remote-cast-installed")},Ohb=function(){var a=g.Wz("yt-remote-cast-receiver");
return a?a.friendlyName:null},Phb=function(){y9("clearCurrentReceiver");
g.Xz("yt-remote-cast-receiver")},Qhb=function(){return B9()?A9()?A9().getCastSession():(z9("getCastSelector: Cast is not initialized."),null):(z9("getCastSelector: Cast API is not installed!"),null)},Rhb=function(){B9()?A9()?C9()?(y9("Requesting cast selector."),A9().requestSession()):(y9("Wait for cast API to be ready to request the session."),Nhb.push(g.Nx("yt-remote-cast2-api-ready",Rhb))):z9("requestCastSelector: Cast is not initialized."):z9("requestCastSelector: Cast API is not installed!")},
D9=function(a,b){C9()?A9().setConnectedScreenStatus(a,b):z9("setConnectedScreenStatus called before ready.")},Fhb=function(){var a=0<=g.qb().search(/ (CrMo|Chrome|CriOS)\//);
return g.pE||a},Shb=function(a,b){A9().init(a,b)},Ghb=function(a,b){var c=!1;
A9()||(a=new u9(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Vz("yt-remote-cast-available",d);b8("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){y9("onReceiverSelected: "+d.friendlyName);
g.Vz("yt-remote-cast-receiver",d);b8("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){y9("onReceiverResumed: "+d.friendlyName);
g.Vz("yt-remote-cast-receiver",d);b8("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){y9("onSessionChange: "+f8(d));
d||g.Xz("yt-remote-cast-receiver");b8("yt-remote-cast2-session-change",d)}),g.Da("yt.mdx.remote.cloudview.instance_",a),c=!0);
y9("cloudview.createSingleton_: "+c);return c},A9=function(){return g.Ea("yt.mdx.remote.cloudview.instance_")},Ihb=function(a,b){Jhb(!0);
Hhb(!1);Shb(a,function(c){c?(Mhb(!0),g.Px("yt-remote-cast2-api-ready")):(z9("Failed to initialize cast API."),Jhb(!1),g.Xz("yt-remote-cast-available"),g.Xz("yt-remote-cast-receiver"),Khb());b(c)})},y9=function(a){a9("cloudview",a)},z9=function(a){a9("cloudview",a)},Jhb=function(a){y9("setCastInstalled_ "+a);
g.Vz("yt-remote-cast-installed",a)},C9=function(){return!!g.Ea("yt.mdx.remote.cloudview.apiReady_")},Mhb=function(a){y9("setApiReady_ "+a);
g.Da("yt.mdx.remote.cloudview.apiReady_",a)},Hhb=function(a){g.Da("yt.mdx.remote.cloudview.initializing_",a)},E9=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.zn=!1;this.T=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},Thb=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.zn=!1;a.hasNext=!1;a.J=0;a.I=g.Qa();a.C=0;a.j=0;a.D=0;a.T=0;a.B=NaN;a.u=!1},F9=function(a){return a.Qc()?(g.Qa()-a.I)/1E3:0},G9=function(a,b){a.J=b;
a.I=g.Qa()},H9=function(a){switch(a.playerState){case 1:case 1081:return(g.Qa()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},I9=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&Thb(a)},Uhb=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.tf(a.trackData);b.hasPrevious=a.zn;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.T;b.liveIngestionTime=a.B;return b},K9=function(a,b){g.jz.call(this);
this.B=0;this.C=a;this.I=[];this.D=new xgb;this.u=this.j=null;this.Z=(0,g.Oa)(this.m0,this);this.J=(0,g.Oa)(this.BA,this);this.T=(0,g.Oa)(this.l0,this);this.ea=(0,g.Oa)(this.n0,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.zL,this),Vhb(this))):c=3;0!=c&&(b?this.zL(c):g.Eu((0,g.Oa)(function(){this.zL(c)},this),0));
(a=Qhb())&&J9(this,a);this.subscribe("yt-remote-cast2-session-change",this.ea)},L9=function(a){return new E9(a.C.getPlayerContextData())},Vhb=function(a){g.sc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Pa(this.A1,b),this))},a)},Whb=function(a){g.sc(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},M9=function(a){return 1==a.getState()},N9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.u.push(b)},Xhb=function(a,b,c){var d=L9(a);
G9(d,c);-1E3!=d.playerState&&(d.playerState=b);O9(a,d)},P9=function(a,b,c){a.C.sendMessage(b,c)},O9=function(a,b){Whb(a);
a.C.setPlayerContextData(Uhb(b));Vhb(a)},J9=function(a,b){a.u&&(a.u.removeUpdateListener(a.Z),a.u.removeMediaListener(a.J),a.BA(null));
a.u=b;a.u&&(b9("Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.Z),a.u.addMediaListener(a.J),a.u.media.length&&a.BA(a.u.media[0]))},Yhb=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=L9(a);b.contentId!=d.videoId&&b9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;G9(d,a.j.getEstimatedTime());O9(a,d)}else b9("No cast media video. Ignoring state update.")},Q9=function(a,b,c){return(0,g.Oa)(function(d){this.tf("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.tf("Retrying "+b+" using MDx browser channel."),P9(this,b,c))},a)},T9=function(a,b,c,d){d=void 0===d?!1:d;
g.jz.call(this);var e=this;this.I=NaN;this.Aa=!1;this.Z=this.T=this.oa=this.ya=NaN;this.ea=[];this.D=this.J=this.C=this.j=this.u=null;this.Ma=a;this.Ja=d;this.ea.push(g.px(window,"beforeunload",function(){e.gw(2)}));
this.B=[];this.j=new E9;this.Oa=b.id;this.Ba=b.idType;this.u=Kgb(this.Ma,c,this.yN,"shortLived"==this.Ba,this.Oa);this.u.Pa("channelOpened",function(){Zhb(e)});
this.u.Pa("channelClosed",function(){R9("Channel closed");isNaN(e.I)?j8(!0):j8();e.dispose()});
this.u.Pa("channelError",function(f){j8();isNaN(e.Kz())?(1==f&&"shortLived"==e.Ba&&e.ma("browserChannelAuthError",f),R9("Channel error: "+f+" without reconnection"),e.dispose()):(e.Aa=!0,R9("Channel error: "+f+" with reconnection in "+e.Kz()+" ms"),S9(e,2))});
this.u.Pa("channelMessage",function(f){$hb(e,f)});
this.u.Ap(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.Yz()&&g.Vz("yt-remote-session-video-id",f)})},aib=function(a){return g.Rb(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},R9=function(a){a9("conn",a)},S9=function(a,b){a.ma("proxyStateChange",b)},bib=function(a){a.I=g.Eu(function(){R9("Connecting timeout");
a.gw(1)},2E4)},cib=function(a){g.Gu(a.I);
a.I=NaN},dib=function(a){g.Gu(a.ya);
a.ya=NaN},fib=function(a){eib(a);
a.oa=g.Eu(function(){U9(a,"getNowPlaying")},2E4)},eib=function(a){g.Gu(a.oa);
a.oa=NaN},Zhb=function(a){R9("Channel opened");
a.Aa&&(a.Aa=!1,dib(a),a.ya=g.Eu(function(){R9("Timing out waiting for a screen.");a.gw(1)},15E3))},hib=function(a,b){var c=null;
if(b){var d=aib(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Da("yt.mdx.remote.remoteClient_",c);b&&(cib(a),dib(a));c=a.u.Jw()&&isNaN(a.I);b==c?b&&(S9(a,1),U9(a,"getSubtitlesTrack")):b?(a.YP()&&a.j.reset(),S9(a,1),U9(a,"getNowPlaying"),gib(a)):a.gw(1)},iib=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.nf(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.ma("remotePlayerChange"))},jib=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;I9(a.j,d,e);a.ma("remoteQueueChange",c)},lib=function(a,b){b.params=b.params||{};
jib(a,b,"NOW_PLAYING_MAY_CHANGE");kib(a,b);a.ma("autoplayDismissed")},kib=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
G9(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.T=isNaN(c)?0:c;a.j.Qj(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?fib(a):eib(a);a.ma("remotePlayerChange")},mib=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);G9(a.j,isNaN(b)?0:b);a.ma("remotePlayerChange")}},nib=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.ma("remotePlayerChange")},oib=function(a,b){a.J=b.params.videoId;
a.ma("nowAutoplaying",parseInt(b.params.timeout,10))},pib=function(a,b){a.J=b.params.videoId||null;
a.ma("autoplayUpNext",a.J)},qib=function(a,b){a.D=b.params.autoplayMode;
a.ma("autoplayModeChange",a.D);"DISABLED"==a.D&&a.ma("autoplayDismissed")},rib=function(a,b){var c="true"==b.params.hasNext;
a.j.zn="true"==b.params.hasPrevious;a.j.hasNext=c;a.ma("previousNextChange")},$hb=function(a,b){b=b.message;
b.params?R9("Received: action="+b.action+", params="+g.Th(b.params)):R9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=a8(b.params.devices);a.B=g.Sd(b,function(d){return new c8(d)});
b=!!g.Rb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
hib(a,b);b=a.KQ("mlm");a.ma("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.ac(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
hib(a,!1);break;case "remoteConnected":var c=new c8(a8(b.params.device));g.Rb(a.B,function(d){return d.equals(c)})||Wdb(a.B,c);
break;case "remoteDisconnected":c=new c8(a8(b.params.device));g.ac(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":jib(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":lib(a,b);break;case "onStateChange":kib(a,b);break;case "onAdStateChange":mib(a,b);break;case "onVolumeChanged":nib(a,b);break;case "onSubtitlesTrackChanged":iib(a,b);break;case "nowAutoplaying":oib(a,b);break;case "autoplayDismissed":a.ma("autoplayDismissed");break;case "autoplayUpNext":pib(a,b);break;case "onAutoplayModeChanged":qib(a,b);break;case "onHasPreviousNextChanged":rib(a,b);
break;case "requestAssistedSignIn":a.ma("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.ma("loopModeChange",b.params.loopMode);break;default:R9("Unrecognized action: "+b.action)}},gib=function(a){g.Gu(a.Z);
a.Z=g.Eu(function(){a.gw(1)},864E5)},U9=function(a,b,c){c?R9("Sending: action="+b+", params="+g.Th(c)):R9("Sending: action="+b);
a.u.sendMessage(b,c)},sib=function(a){f9.call(this,"ScreenServiceProxy");
this.cg=a;this.j=[];this.j.push(this.cg.$_s("screenChange",(0,g.Oa)(this.gW,this)));this.j.push(this.cg.$_s("onlineScreenChange",(0,g.Oa)(this.b1,this)))},xib=function(a,b){teb();
if(!k8||!k8.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;keb();oeb();V9||(V9=new Y8(b?b.loungeApiHost:void 0),ueb()&&(V9.j="/api/loungedev"));W9||(W9=g.Ea("yt.mdx.remote.deferredProxies_")||[],g.Da("yt.mdx.remote.deferredProxies_",W9));tib();var c=X9();if(!c){var d=new k9(V9,b?b.disableAutomaticScreenCache||!1:!1);g.Da("yt.mdx.remote.screenService_",d);c=X9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Da("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);Lhb(a,d,function(f){f?Y9()&&D9(Y9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){b8("yt-remote-receiver-availability-change")})},e)}b&&!g.Ea("yt.mdx.remote.initialized_")&&(g.Da("yt.mdx.remote.initialized_",!0),Z9("Initializing: "+g.Th(b)),
$9.push(g.Nx("yt-remote-cast2-api-ready",function(){b8("yt-remote-api-ready")})),$9.push(g.Nx("yt-remote-cast2-availability-change",function(){b8("yt-remote-receiver-availability-change")})),$9.push(g.Nx("yt-remote-cast2-receiver-selected",function(){a$(null);
b8("yt-remote-auto-connect","cast-selector-receiver")})),$9.push(g.Nx("yt-remote-cast2-receiver-resumed",function(){b8("yt-remote-receiver-resumed","cast-selector-receiver")})),$9.push(g.Nx("yt-remote-cast2-session-change",uib)),$9.push(g.Nx("yt-remote-connection-change",function(f){f?D9(Y9(),"YouTube TV"):b$()||(D9(null,null),Phb())})),$9.push(g.Nx("yt-remote-cast2-session-failed",function(){b8("yt-remote-connection-failed")})),a=vib(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.iu("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),Z9(" -- with channel params: "+g.Th(a)),a?(g.Vz("yt-remote-session-app",a.app),g.Vz("yt-remote-session-name",a.name)):(g.Xz("yt-remote-session-app"),g.Xz("yt-remote-session-name")),g.Da("yt.mdx.remote.channelParams_",a),c.start(),Y9()||wib())}},yib=function(){var a=X9().cg.$_gos();
var b=c$();b&&d$()&&(jeb(a,b)||a.push(b));return ieb(a)},Aib=function(){var a=zib();
!a&&B9()&&Ohb()&&(a={key:"cast-selector-receiver",name:Ohb()});return a},zib=function(){var a=yib(),b=c$();
b||(b=b$());return g.Rb(a,function(c){return b&&e8(b,c.key)?!0:!1})},c$=function(){var a=Y9();
if(!a)return null;var b=X9().zj();return g8(b,a)},uib=function(a){Z9("remote.onCastSessionChange_: "+f8(a));
if(a){var b=c$();if(b&&b.id==a.id){if(D9(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))e$&&(e$.token=a),(b=d$())&&b.Ap(a)}else b&&f$(),g$(a,1)}else d$()&&f$()},f$=function(){C9()?A9().stopSession():z9("stopSession called before API ready.");
var a=d$();a&&(a.disconnect(1),Bib(null))},Cib=function(){var a=d$();
return!!a&&3!=a.getProxyState()},Z9=function(a){a9("remote",a)},X9=function(){if(!Dib){var a=g.Ea("yt.mdx.remote.screenService_");
Dib=a?new sib(a):null}return Dib},Y9=function(){return g.Ea("yt.mdx.remote.currentScreenId_")},Eib=function(a){g.Da("yt.mdx.remote.currentScreenId_",a)},Fib=function(){return g.Ea("yt.mdx.remote.connectData_")},a$=function(a){g.Da("yt.mdx.remote.connectData_",a)},d$=function(){return g.Ea("yt.mdx.remote.connection_")},Bib=function(a){var b=d$();
a$(null);a||Eib("");g.Da("yt.mdx.remote.connection_",a);W9&&(g.sc(W9,function(c){c(a)}),W9.length=0);
b&&!a?b8("yt-remote-connection-change",!1):!b&&a&&b8("yt-remote-connection-change",!0)},b$=function(){var a=g.Yz();
if(!a)return null;var b=X9();if(!b)return null;b=b.zj();return g8(b,a)},g$=function(a,b){Y9();
c$()&&c$();if(h$)e$=a;else{Eib(a.id);var c=g.Ea("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new T9(V9,a,vib(),c);a.connect(b,Fib());a.subscribe("beforeDisconnect",function(d){b8("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){d$()&&(d$(),Bib(null))});
a.subscribe("browserChannelAuthError",function(){var d=c$();d&&"shortLived"==d.idType&&(C9()?A9().handleBrowserChannelAuthError():z9("refreshLoungeToken called before API ready."))});
Bib(a)}},wib=function(){var a=b$();
a?(Z9("Resume connection to: "+f8(a)),g$(a,0)):(j8(),Phb(),Z9("Skipping connecting because no session screen found."))},tib=function(){var a=vib();
if(g.nf(a)){a=i8();var b=g.Wz("yt-remote-session-name")||"",c=g.Wz("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Da("yt.mdx.remote.channelParams_",a)}},vib=function(){return g.Ea("yt.mdx.remote.channelParams_")||{}},Iib=function(a,b,c){g.K.call(this);
var d=this;this.j=a;this.G=b;this.uc=c;this.events=new g.mE(this);this.ea=this.events.S(this.G,"onVolumeChange",function(e){Gib(d,e)});
this.D=!1;this.I=new g.tK(64);this.u=new g.Xn(this.yT,500,this);this.B=new g.Xn(this.zT,1E3,this);this.T=new n8(this.x4,0,this);this.C={};this.Z=new g.Xn(this.pU,1E3,this);this.J=new o8(this.seekTo,1E3,this);g.M(this,this.events);this.events.S(b,"onCaptionsTrackListChanged",this.L0);this.events.S(b,"captionschanged",this.j0);this.events.S(b,"captionssettingschanged",this.HT);this.events.S(b,"videoplayerreset",this.qE);this.events.S(b,"mdxautoplaycancel",function(){d.uc.rP()});
b.N("enable_mdx_video_play_directly")&&this.events.S(b,"videodatachange",function(){Hib(d.j)||i$(d)||j$(d,0)});
a=this.uc;a.isDisposed();a.subscribe("proxyStateChange",this.lS,this);a.subscribe("remotePlayerChange",this.GA,this);a.subscribe("remoteQueueChange",this.qE,this);a.subscribe("previousNextChange",this.iS,this);a.subscribe("nowAutoplaying",this.cS,this);a.subscribe("autoplayDismissed",this.FR,this);g.M(this,this.u);g.M(this,this.B);g.M(this,this.T);g.M(this,this.Z);g.M(this,this.J);this.HT();this.qE();this.GA()},Gib=function(a,b){if(i$(a)){a.uc.unsubscribe("remotePlayerChange",a.GA,a);
var c=Math.round(b.volume);b=!!b.muted;var d=L9(a.uc);if(c!==d.volume||b!==d.muted)a.uc.setVolume(c,b),a.Z.start();a.uc.subscribe("remotePlayerChange",a.GA,a)}},Jib=function(a){a.hc(0);
a.u.stop();a.Yb(new g.tK(64))},Kib=function(a,b){if(i$(a)&&!a.D){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.uf(c,b));a.uc.xN(a.G.getVideoData(1).videoId,c);a.C=L9(a.uc).trackData}},j$=function(a,b){var c=a.G.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.uc.playVideo(c.videoId,b,d,e,c.playerParams,c.ya,Vdb(c));a.Yb(new g.tK(1))},Lib=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{BQ:1});
c&&c.length?(a.G.setOption("captions","track",b),a.D=!1):(a.G.loadModule("captions"),a.D=!0)}else a.G.setOption("captions","track",{})},i$=function(a){return L9(a.uc).videoId===a.G.getVideoData(1).videoId},k$=function(){g.X.call(this,{F:"div",
K:"ytp-mdx-popup-dialog",X:{role:"dialog"},W:[{F:"div",K:"ytp-mdx-popup-dialog-inner-content",W:[{F:"div",K:"ytp-mdx-popup-title",qa:"You're signed out"},{F:"div",K:"ytp-mdx-popup-description",qa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{F:"div",K:"ytp-mdx-privacy-popup-buttons",W:[{F:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-cancel"],qa:"Cancel"},{F:"button",Ga:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],qa:"Confirm"}]}]}]});this.j=new g.kM(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.M(this,this.j);this.S(this.cancelButton,"click",this.u);this.S(this.confirmButton,"click",this.B)},l$=function(a){g.X.call(this,{F:"div",
K:"ytp-remote",W:[{F:"div",K:"ytp-remote-display-status",W:[{F:"div",K:"ytp-remote-display-status-icon",W:[g.MFa()]},{F:"div",K:"ytp-remote-display-status-text",qa:"{{statustext}}"}]}]});this.api=a;this.j=new g.kM(this,250);g.M(this,this.j);this.S(a,"presentingplayerstatechange",this.onStateChange);this.Wc(a.Eb())},m$=function(a,b){g.$R.call(this,"Play on",1,a,b);
this.G=a;this.Fr={};this.S(a,"onMdxReceiversChange",this.u);this.S(a,"presentingplayerstatechange",this.u);this.u()},Mib=function(a){g.NO.call(this,a);
this.Jn={key:heb(),name:"This computer"};this.pk=null;this.subscriptions=[];this.NK=this.uc=null;this.Fr=[this.Jn];this.hq=this.Jn;this.Hd=new g.tK(64);this.UQ=0;this.Rg=-1;this.PA=!1;this.NA=this.kx=null;if(!g.oG(this.player.V())&&!g.pG(this.player.V())){a=this.player;var b=g.YN(a);b&&(b=b.Hl())&&(b=new m$(a,b),g.M(this,b));b=new l$(a);g.M(this,b);g.hO(a,b.element,4);this.kx=new k$;g.M(this,this.kx);g.hO(a,this.kx.element,4);this.PA=!!b$()}},n$=function(a){a.NA&&(a.player.removeEventListener("presentingplayerstatechange",
a.NA),a.NA=null)},Nib=function(a,b,c){a.Hd=c;
a.player.ma("presentingplayerstatechange",new g.MJ(c,b))},o$=function(a,b){if(b.key!==a.hq.key)if(b.key===a.Jn.key)f$();
else if(Hib(a)&&Oib(a),a.hq=b,!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.pG(a.player.V())){var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(!c&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))d=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.IO(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:c,
videoId:e,playerParams:d.playerParams,clickTrackingParams:d.ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(d=Vdb(d))&&(a.locationInfo=d);d=a}Z9("Connecting to: "+g.Th(b));"cast-selector-receiver"==b.key?(a$(d||null),b=d||null,C9()?A9().setLaunchParams(b):z9("setLaunchParams called before ready.")):!d&&Cib()&&Y9()==b.key?b8("yt-remote-connection-change",!0):(f$(),a$(d||null),d=X9().zj(),(b=g8(d,b.key))&&g$(b,1))}},Hib=function(a){var b;
(b=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(b=((b=g.O("PLAYER_CONFIG"))&&b.args&&void 0!==b.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.PA||!a.kx);return b?!1:g.HG(a.player.V())||g.KG(a.player.V())},Oib=function(a){a.player.Eb().Qc()?a.player.pauseVideo():(a.NA=function(b){!a.PA&&g.OJ(b,8)&&(a.player.pauseVideo(),n$(a))},a.player.addEventListener("presentingplayerstatechange",a.NA));
a.kx&&a.kx.Jc();d$()||(h$=!0)};
g.gq.prototype.wq=g.ba(1,function(){return g.kd(this,6)});
g.ae.prototype.YB=g.ba(0,function(){var a=g.ee(this);return 4294967296*g.ee(this)+(a>>>0)});
var Hdb,Pib=g.Je(function(a,b,c){if(1!==a.u)return!1;g.F(b,c,g.fe(a.j));return!0},g.Ke),Qib=g.Je(function(a,b,c,d){if(1!==a.u)return!1;
g.Ad(b,c,d,g.fe(a.j));return!0},g.Ke),Rib=g.Je(function(a,b,c){if(0!==a.u)return!1;
g.F(b,c,g.ce(a.j));return!0},g.Le),Sib=g.Je(function(a,b,c,d){if(0!==a.u)return!1;
g.Ad(b,c,d,g.ce(a.j));return!0},g.Le),Tib=g.Je(function(a,b,c){if(0!==a.u)return!1;
g.F(b,c,g.de(a.j));return!0},g.Me),Uib=g.Je(function(a,b,c,d){if(0!==a.u)return!1;
g.Ad(b,c,d,g.de(a.j));return!0},g.Me),Vib=g.Je(function(a,b,c){if(1!==a.u)return!1;
g.F(b,c,a.j.YB());return!0},function(a,b,c){Jdb(a,c,g.kd(b,c))}),Wib=g.Je(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.nd(b,c,0,!1);if(2==a.u){c=g.ae.prototype.YB;var d=g.de(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.YB());return!0},function(a,b,c){b=g.nd(b,c,0,!1);
if(null!=b)for(var d=0;d<b.length;d++)Jdb(a,c,b[d])}),Xib=g.Je(function(a,b,c){if(0!==a.u)return!1;
g.F(b,c,g.ie(a.j));return!0},Kdb),Yib=g.Je(function(a,b,c,d){if(0!==a.u)return!1;
g.Ad(b,c,d,g.ie(a.j));return!0},Kdb),Zib=g.Je(function(a,b,c){if(2!==a.u)return!1;
a=g.pe(a);g.yd(b,c,a);return!0},function(a,b,c){b=g.pd(b,c,Fdb,!1);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.ye(a,c,g.uaa(e))}}),$ib=g.Je(function(a,b,c,d){if(2!==a.u)return!1;
g.Ad(b,c,d,g.pe(a));return!0},g.rca),ajb=g.Je(function(a,b,c,d,e){if(2!==a.u)return!1;
g.me(a,g.vba(b,d,c),e);return!0},g.sca),Ldb=[1];
g.v(Mdb,g.J);g.v(Ndb,g.J);var bjb=[Mdb,1,g.L2,[Ndb,1,Pib,2,Rib]];g.v(Odb,g.J);g.v(Pdb,g.J);g.v(Qdb,g.J);
var cjb=[1,2],djb=[g.xh,1,g.K2,5,Vib,2,ajb,[Odb,1,g.M2,[Pdb,1,g.K2,2,g.K2,3,Xib],cjb,2,g.M2,[Qdb,1,g.K2,2,g.K2,3,Tib,4,Xib],cjb],3,Zib,6,Wib,4,g.L2,[g.yh,1,g.L2,[g.Hh,1,$ib,g.Kh,2,Uib,g.Kh,3,Yib,g.Kh],2,ajb,[g.Ih,1,Sib,g.Jh,2,Qib,g.Jh,3,g.M2,bjb,g.Jh]]],Vfb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},P8={"'":"\\'"},ceb={Rca:"atp",iTa:"ska",BPa:"que",wGa:"mus",hTa:"sus",Rta:"dsp",ZQa:"seq",LFa:"mic",Mma:"dpa",Oda:"cds",mGa:"mlm",
Gma:"dsdtr",PHa:"ntb"};c8.prototype.equals=function(a){return a?this.id==a.id:!1};
var k8,neb="",Ceb=web("loadCastFramework")||web("loadCastApplicationFramework"),Feb=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ra(n8,g.K);g.k=n8.prototype;g.k.FV=function(a){this.C=arguments;this.j=!1;this.yc?this.B=g.Qa()+this.Kh:this.yc=g.uh(this.D,this.Kh)};
g.k.stop=function(){this.yc&&(g.C.clearTimeout(this.yc),this.yc=null);this.B=null;this.j=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.I.apply(null,this.C)))};
g.k.ra=function(){this.stop();n8.Ye.ra.call(this)};
g.k.GV=function(){this.yc&&(g.C.clearTimeout(this.yc),this.yc=null);this.B?(this.yc=g.uh(this.D,this.B-g.Qa()),this.B=null):this.u?this.j=!0:(this.j=!1,this.I.apply(null,this.C))};g.v(o8,g.K);g.k=o8.prototype;g.k.YF=function(a){this.B=arguments;this.yc||this.u?this.j=!0:Reb(this)};
g.k.stop=function(){this.yc&&(g.C.clearTimeout(this.yc),this.yc=null,this.j=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.j||this.yc||(this.j=!1,Reb(this))};
g.k.ra=function(){g.K.prototype.ra.call(this);this.stop()};p8.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
p8.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};g.Ra(Seb,g.Ve);g.Ra(Teb,g.Ve);var Ueb=null;g.Ra(Web,g.Ve);g.Ra(Xeb,g.Ve);g.Ra(Yeb,g.Ve);Zeb.prototype.info=function(){};
Zeb.prototype.warning=function(){};var ffb={},v8={};g.k=t8.prototype;g.k.setTimeout=function(a){this.Cb=a};
g.k.JV=function(a){a=a.target;var b=this.Wa;b&&3==g.wi(a)?b.YF():this.bN(a)};
g.k.bN=function(a){try{if(a==this.j)a:{var b=g.wi(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b)&&(3!=b||g.LG||this.j&&(this.u.u||g.yi(this.j)||g.zi(this.j)))){this.Ja||4!=b||7==c||(8==c||0>=d?q8(3):q8(2));y8(this);var e=this.j.getStatus();this.Ob=e;b:if(dfb(this)){var f=g.zi(this.j);a="";var h=f.length,l=4==g.wi(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){w8(this);x8(this);var m="";break b}this.u.B=new g.C.TextDecoder}for(c=0;c<h;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&
c==h-1});f.splice(0,h);this.u.j+=a;this.ea=0;m=this.u.j}else m=g.yi(this.j);if(this.B=200==e){if(this.jc&&!this.Sa){b:{if(this.j){var n=g.Ai(this.j,"X-HTTP-Initial-Response");if(n&&!g.bb(n)){var p=n;break b}}p=null}if(e=p)this.Sa=!0,gfb(this,e);else{this.B=!1;this.I=3;r8(12);w8(this);x8(this);break a}}this.Ba?(hfb(this,b,m),g.LG&&this.B&&3==b&&(this.ib.Pa(this.kb,"tick",this.IV),this.kb.start())):gfb(this,m);4==b&&w8(this);this.B&&!this.Ja&&(4==b?jfb(this.D,this):(this.B=!1,u8(this)))}else g.afa(this.j),
400==e&&0<m.indexOf("Unknown SID")?(this.I=3,r8(12)):(this.I=0,r8(13)),w8(this),x8(this)}}}catch(q){}finally{}};
g.k.IV=function(){if(this.j){var a=g.wi(this.j),b=g.yi(this.j);this.ea<b.length&&(y8(this),hfb(this,a,b),this.B&&4!=a&&u8(this))}};
g.k.cancel=function(){this.Ja=!0;w8(this)};
g.k.HV=function(){this.Z=null;var a=Date.now();0<=a-this.Pb?(2!=this.Oa&&(q8(3),r8(17)),w8(this),this.I=2,x8(this)):ifb(this,this.Pb-a)};
g.k.getLastError=function(){return this.I};sfb.prototype.cancel=function(){this.B=ufb(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.t(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.k=yfb.prototype;g.k.cN=8;g.k.Eg=1;g.k.connect=function(a,b,c,d){r8(0);this.Bc=a;this.Ja=b||{};c&&void 0!==d&&(this.Ja.OSID=c,this.Ja.OAID=d);this.kb=this.Yc;this.Ma=ofb(this,null,this.Bc);C8(this)};
g.k.disconnect=function(){Afb(this);if(3==this.Eg){var a=this.Wa++,b=this.Ma.clone();g.Dj(b,"SID",this.C);g.Dj(b,"RID",a);g.Dj(b,"TYPE","terminate");F8(this,b);a=new t8(this,this.C,a);a.Oa=2;a.J=Z7(b.clone());b=!1;g.C.navigator&&g.C.navigator.sendBeacon&&(b=g.C.navigator.sendBeacon(a.J.toString(),""));!b&&g.C.Image&&((new Image).src=a.J,b=!0);b||(a.j=cfb(a.D,null),a.j.send(a.J));a.ya=Date.now();u8(a)}Gfb(this)};
g.k.dg=function(){return 0==this.Eg};
g.k.getState=function(){return this.Eg};
g.k.eN=function(a){if(this.I)if(this.I=null,1==this.Eg){if(!a){this.Wa=Math.floor(1E5*Math.random());a=this.Wa++;var b=new t8(this,"",a),c=this.Z;this.Pb&&(c?(c=g.sf(c),g.uf(c,this.Pb)):c=this.Pb);null!==this.J||this.qb||(b.Ma=c,c=null);var d;if(this.Cb)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=Dfb(this,b,d);e=this.Ma.clone();g.Dj(e,"RID",a);g.Dj(e,"CVER",22);this.Ba&&g.Dj(e,"X-HTTP-Session-Id",this.Ba);F8(this,e);c&&(this.qb?d="headers="+g.Bg(g.nga(c))+"&"+d:this.J&&g.Hj(e,this.J,c));nfb(this.u,b);this.Qf&&g.Dj(e,"TYPE","init");this.Cb?(g.Dj(e,"$req",d),g.Dj(e,"SID","null"),b.jc=!0,bfb(b,e,null)):bfb(b,e,d);this.Eg=2}}else 3==this.Eg&&(a?Efb(this,a):0==this.B.length||tfb(this.u)||Efb(this))};
g.k.dN=function(){this.T=null;Ffb(this);if(this.Oc&&!(this.ib||null==this.j||0>=this.rd)){var a=2*this.rd;this.Aa=s8((0,g.Oa)(this.h0,this),a)}};
g.k.h0=function(){this.Aa&&(this.Aa=null,this.kb=!1,this.ib=!0,r8(10),A8(this),Ffb(this))};
g.k.gK=function(a){this.j==a&&this.Oc&&!this.ib&&(zfb(this),this.ib=!0,r8(11))};
g.k.KV=function(){null!=this.ea&&(this.ea=null,A8(this),lfb(this),r8(19))};
g.k.b4=function(a){a?r8(2):r8(1)};
g.k.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.k=Ifb.prototype;g.k.iN=function(){};
g.k.hN=function(){};
g.k.gN=function(){};
g.k.fN=function(){};
g.k.isActive=function(){return!0};
g.k.LV=function(){};g.Ra(H8,g.Gf);H8.prototype.open=function(){this.j.D=this.C;this.J&&(this.j.Oa=!0);this.j.connect(this.I,this.u||void 0)};
H8.prototype.close=function(){this.j.disconnect()};
H8.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.Th(a),a=c);b.B.push(new rfb(b.cf++,a));3==b.Eg&&C8(b)};
H8.prototype.ra=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;H8.Ye.ra.call(this)};
g.Ra(Kfb,Seb);g.Ra(Lfb,Teb);g.Ra(G8,Ifb);G8.prototype.iN=function(){this.j.dispatchEvent("m")};
G8.prototype.hN=function(a){this.j.dispatchEvent(new Kfb(a))};
G8.prototype.gN=function(a){this.j.dispatchEvent(new Lfb(a))};
G8.prototype.fN=function(){this.j.dispatchEvent("n")};var J8=new g.Gf;g.v(Ofb,g.Ve);g.k=L8.prototype;g.k.Zr=null;g.k.qo=!1;g.k.Uu=null;g.k.aG=null;g.k.Su=null;g.k.Tu=null;g.k.Jp=null;g.k.Lp=null;g.k.gs=null;g.k.Uh=null;g.k.TB=0;g.k.nm=null;g.k.SB=null;g.k.Kp=null;g.k.qy=-1;g.k.kT=!0;g.k.Yr=!1;g.k.ZF=0;g.k.RB=null;var Tfb={},Sfb={};g.k=L8.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.NV=function(a){a=a.target;var b=this.RB;b&&3==g.wi(a)?b.YF():this.jN(a)};
g.k.jN=function(a){try{if(a==this.Uh)a:{var b=g.wi(this.Uh),c=this.Uh.u,d=this.Uh.getStatus();if(g.Fc&&!g.Cc(10)||g.Xe&&!g.Bc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.yi(this.Uh))break a;this.Yr||4!=b||7==c||(8==c||0>=d?this.j.Tl(3):this.j.Tl(2));Yfb(this);var e=this.Uh.getStatus();this.qy=e;var f=g.yi(this.Uh);if(this.qo=200==e){4==b&&N8(this);if(this.Ba){for(a=!0;!this.Yr&&this.TB<f.length;){var h=Ufb(this,f);if(h==Sfb){4==b&&(this.Kp=4,K8(15),a=!1);break}else if(h==Tfb){this.Kp=4;K8(16);a=
!1;break}else Zfb(this,h)}4==b&&0==f.length&&(this.Kp=1,K8(17),a=!1);this.qo=this.qo&&a;a||(N8(this),O8(this))}else Zfb(this,f);this.qo&&!this.Yr&&(4==b?this.j.UB(this):(this.qo=!1,M8(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Kp=3,K8(13)):(this.Kp=0,K8(14)),N8(this),O8(this)}}catch(l){}finally{}};
g.k.E2=function(a){I8((0,g.Oa)(this.D2,this,a),0)};
g.k.D2=function(a){this.Yr||(Yfb(this),Zfb(this,a),M8(this))};
g.k.qS=function(a){I8((0,g.Oa)(this.C2,this,a),0)};
g.k.C2=function(a){this.Yr||(N8(this),this.qo=a,this.j.UB(this),this.j.Tl(4))};
g.k.cancel=function(){this.Yr=!0;N8(this)};
g.k.MV=function(){this.Uu=null;var a=Date.now();0<=a-this.aG?(2!=this.Tu&&this.j.Tl(3),N8(this),this.Kp=2,K8(18),O8(this)):Xfb(this,this.aG-a)};
g.k.getLastError=function(){return this.Kp};g.k=bgb.prototype;g.k.cG=null;g.k.Hi=null;g.k.NE=!1;g.k.AT=null;g.k.SC=null;g.k.xJ=null;g.k.dG=null;g.k.hk=null;g.k.uo=-1;g.k.sy=null;g.k.Qy=null;g.k.connect=function(a){this.dG=a;a=R8(this.j,null,this.dG);K8(3);this.AT=Date.now();var b=this.j.T;null!=b?(this.sy=b[0],(this.Qy=b[1])?(this.hk=1,cgb(this)):(this.hk=2,dgb(this))):($7(a,"MODE","init"),this.Hi=new L8(this),this.Hi.Zr=this.cG,Rfb(this.Hi,a,!1,null,!0),this.hk=0)};
g.k.jY=function(a){if(a)this.hk=2,dgb(this);else{K8(4);var b=this.j;b.zm=b.cq.uo;V8(b,9)}a&&this.Tl(2)};
g.k.bG=function(a){return this.j.bG(a)};
g.k.abort=function(){this.Hi&&(this.Hi.cancel(),this.Hi=null);this.uo=-1};
g.k.dg=function(){return!1};
g.k.kN=function(a,b){this.uo=a.qy;if(0==this.hk)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.zm=this.uo;V8(a,2);return}this.sy=c[0];this.Qy=c[1]}else a=this.j,a.zm=this.uo,V8(a,2);else if(2==this.hk)if(this.NE)K8(7),this.xJ=Date.now();else if("11111"==b){if(K8(6),this.NE=!0,this.SC=Date.now(),a=this.SC-this.AT,!g.Fc||g.Cc(10)||500>a)this.uo=200,this.Hi.cancel(),K8(12),S8(this.j,this,!0)}else K8(8),this.SC=this.xJ=Date.now(),this.NE=!1};
g.k.UB=function(){this.uo=this.Hi.qy;if(this.Hi.qo)0==this.hk?this.Qy?(this.hk=1,cgb(this)):(this.hk=2,dgb(this)):2==this.hk&&((!g.Fc||g.Cc(10)?!this.NE:200>this.xJ-this.SC)?(K8(11),S8(this.j,this,!1)):(K8(12),S8(this.j,this,!0)));else{0==this.hk?K8(9):2==this.hk&&K8(10);var a=this.j;this.Hi.getLastError();a.zm=this.uo;V8(a,2)}};
g.k.uy=function(){return this.j.uy()};
g.k.isActive=function(){return this.j.isActive()};
g.k.Tl=function(a){this.j.Tl(a)};g.k=egb.prototype;g.k.ym=null;g.k.vy=null;g.k.Pi=null;g.k.Of=null;g.k.eG=null;g.k.VB=null;g.k.lN=null;g.k.WB=null;g.k.wy=0;g.k.PV=0;g.k.Eh=null;g.k.Mp=null;g.k.xo=null;g.k.ls=null;g.k.cq=null;g.k.sF=null;g.k.Xu=-1;g.k.mN=-1;g.k.zm=-1;g.k.Wu=0;g.k.Vu=0;g.k.hs=8;g.Ra(ggb,g.Ve);g.Ra(igb,g.Ve);g.k=egb.prototype;g.k.connect=function(a,b,c,d,e){K8(0);this.eG=b;this.vy=c||{};d&&void 0!==e&&(this.vy.OSID=d,this.vy.OAID=e);this.J?(I8((0,g.Oa)(this.eP,this,a),100),kgb(this)):this.eP(a)};
g.k.disconnect=function(){lgb(this);if(3==this.j){var a=this.wy++,b=this.VB.clone();g.Dj(b,"SID",this.C);g.Dj(b,"RID",a);g.Dj(b,"TYPE","terminate");U8(this,b);a=new L8(this,this.C,a);a.Tu=2;a.Jp=Z7(b.clone());(new Image).src=a.Jp.toString();a.Su=Date.now();M8(a)}vgb(this)};
g.k.eP=function(a){this.cq=new bgb(this);this.cq.cG=this.ym;this.cq.u=this.D;this.cq.connect(a)};
g.k.dg=function(){return 0==this.j};
g.k.getState=function(){return this.j};
g.k.oN=function(a){this.Mp=null;qgb(this,a)};
g.k.nN=function(){this.xo=null;this.Of=new L8(this,this.C,"rpc",this.I);this.Of.Zr=this.ym;this.Of.ZF=0;var a=this.lN.clone();g.Dj(a,"RID","rpc");g.Dj(a,"SID",this.C);g.Dj(a,"CI",this.sF?"0":"1");g.Dj(a,"AID",this.Xu);U8(this,a);if(!g.Fc||g.Cc(10))g.Dj(a,"TYPE","xmlhttp"),Rfb(this.Of,a,!0,this.WB,!1);else{g.Dj(a,"TYPE","html");var b=this.Of,c=!!this.WB;b.Tu=3;b.Jp=Z7(a.clone());Wfb(b,c)}};
g.k.kN=function(a,b){if(0!=this.j&&(this.Of==a||this.Pi==a))if(this.zm=a.qy,this.Pi==a&&3==this.j)if(7<this.hs){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.xo){if(this.Of)if(this.Of.Su+3E3<this.Pi.Su)T8(this),this.Of.cancel(),this.Of=null;else break a;tgb(this);K8(19)}}else this.mN=a[1],0<this.mN-this.Xu&&37500>a[2]&&this.sF&&0==this.Vu&&!this.ls&&(this.ls=I8((0,g.Oa)(this.QV,this),6E3));else V8(this,11)}else null!=b&&V8(this,11);else if(this.Of==
a&&T8(this),!g.bb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.Xu=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.WB=c[2],c=c[3],null!=c?this.hs=c:this.hs=6,this.j=3,this.Eh&&this.Eh.rN(),this.lN=R8(this,this.uy()?this.WB:null,this.eG),rgb(this)):"stop"==c[0]&&V8(this,7):3==this.j&&("stop"==c[0]?V8(this,7):"noop"!=c[0]&&this.Eh&&this.Eh.qN(c),this.Vu=0)};
g.k.QV=function(){null!=this.ls&&(this.ls=null,this.Of.cancel(),this.Of=null,tgb(this),K8(20))};
g.k.UB=function(a){if(this.Of==a){T8(this);this.Of=null;var b=2}else if(this.Pi==a)this.Pi=null,b=1;else return;this.zm=a.qy;if(0!=this.j)if(a.qo)if(1==b){b=Date.now()-a.Su;var c=J8;c.dispatchEvent(new ggb(c,a.gs?a.gs.length:0,b,this.Wu));jgb(this);this.B.length=0}else rgb(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.zm)){if(d=1==b)this.Pi||this.Mp||1==this.j||2<=this.Wu?d=!1:(this.Mp=I8((0,g.Oa)(this.oN,this,a),sgb(this,this.Wu)),this.Wu++,d=!0);d=!(d||2==b&&tgb(this))}if(d)switch(c){case 1:V8(this,
5);break;case 4:V8(this,10);break;case 3:V8(this,6);break;case 7:V8(this,12);break;default:V8(this,2)}}};
g.k.OV=function(a){if(!g.Tb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.k.a4=function(a){a?K8(2):(K8(1),ugb(this,8))};
g.k.bG=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.ti;a.J=!1;return a};
g.k.isActive=function(){return!!this.Eh&&this.Eh.isActive(this)};
g.k.Tl=function(a){var b=J8;b.dispatchEvent(new igb(b,a))};
g.k.uy=function(){return!(!g.Fc||g.Cc(10))};
g.k=wgb.prototype;g.k.rN=function(){};
g.k.qN=function(){};
g.k.pN=function(){};
g.k.fG=function(){};
g.k.sN=function(){return{}};
g.k.isActive=function(){return!0};g.k=xgb.prototype;g.k.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.k.clear=function(){this.j=[];this.u=[]};
g.k.contains=function(a){return g.Tb(this.j,a)||g.Tb(this.u,a)};
g.k.remove=function(a){var b=this.j;var c=(0,g.L_a)(b,a);0<=c?(g.Vb(b,c),b=!0):b=!1;return b||g.Zb(this.u,a)};
g.k.Bk=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.v(ygb,g.Ve);g.v(zgb,g.Ve);g.Ra(W8,g.K);g.k=W8.prototype;g.k.u2=function(){this.Kh=Math.min(3E5,2*this.Kh);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.Kh+15E3*Math.random();g.Yn(this.j,a);this.u=Date.now()+a};
g.k.stop=function(){this.j.stop();this.u=0};
g.k.isActive=function(){return this.j.isActive()};
g.k.reset=function(){this.j.stop();this.Kh=5E3};Bgb.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.iu("enable_client_streamz_web")){a=g.t(a);for(var c=a.next();!c.done;c=a.next())c=g.sea(c.value),c={serializedIncrementBatch:g.Dc(g.Ie(c,djb))},g.uy("streamzIncremented",c,{tL:b})}};var X8;g.Ra(Cgb,wgb);g.k=Cgb.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.Wg=function(a){return this.B.Wg(a)};
g.k.ma=function(a,b){return this.B.ma.apply(this.B,arguments)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.Se(this.B),this.disconnect(),g.Se(this.u),this.u=null,this.oa=function(){return""})};
g.k.isDisposed=function(){return this.ea};
g.k.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.Z="";this.u.stop();this.I=a||null;this.D=b||0;a=this.ya+"/test";b=this.ya+"/bind";var d=new egb(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Oa),e=this.j;e&&(e.Eh=null);d.Eh=this;this.j=d;Dgb(this);if(this.j){d=g.O("ID_TOKEN");var f=this.j.ym||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.ym=f}e?(3!=e.getState()&&0==ngb(e)||e.getState(),this.j.connect(a,b,this.J,e.C,e.Xu)):c?this.j.connect(a,
b,this.J,c.sessionId,c.arrayId):this.j.connect(a,b,this.J)}};
g.k.disconnect=function(a){this.T=a||0;this.u.stop();Dgb(this);this.j&&(3==this.j.getState()&&qgb(this.j),this.j.disconnect());this.T=0};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.uf(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Jw()&&(Dgb(this),mgb(this.j,a))};
g.k.rN=function(){this.u.reset();this.I=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)mgb(this.j,a[b])}this.ma("handlerOpened");Ieb(this.Ma,"BROWSER_CHANNEL")};
g.k.pN=function(a){var b=2==a&&401==this.j.zm;4==a||b||this.u.start();this.ma("handlerError",a,b);Oeb(this.Ba,"BROWSER_CHANNEL")};
g.k.fG=function(a,b){if(!this.u.isActive())this.ma("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}Keb(this.Aa,"BROWSER_CHANNEL");a&&this.Wa.j.iG("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Xa.j.iG("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.sN=function(){var a={v:2};this.Z&&(a.gsessionid=this.Z);0!=this.D&&(a.ui=""+this.D);0!=this.T&&(a.ui=""+this.T);this.I&&g.uf(a,this.I);return a};
g.k.qN=function(a){"S"==a[0]?this.Z=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.ma("handlerMessage",new Agb(a[0],a[1]));Meb(this.Ja,"BROWSER_CHANNEL")};
g.k.Jw=function(){return!!this.j&&3==this.j.getState()};
g.k.Ap=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Sa&&this.j){var b=this.j.ym||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.ym=b}};
g.k.wq=function(){return this.J.id};
g.k.Eq=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.k.Vt=function(){var a=this.u;g.Zn(a.j);a.start()};
g.k.y3=function(){this.u.isActive();0==ngb(this.j)&&this.connect(this.I,this.D)};Y8.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Y8.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
Y8.prototype.D=function(a){a(Error("request timed out"))};g.v(Fgb,g.Gf);g.k=Fgb.prototype;g.k.connect=function(a,b,c){this.Zc.connect(a,b,c)};
g.k.disconnect=function(a){this.Zc.disconnect(a)};
g.k.Vt=function(){this.Zc.Vt()};
g.k.wq=function(){return this.Zc.wq()};
g.k.Eq=function(){return this.Zc.Eq()};
g.k.Jw=function(){return this.Zc.Jw()};
g.k.TV=function(){this.dispatchEvent("channelOpened");var a=this.Zc,b=this.j;g.Vz("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.sF,sessionId:a.j.C,arrayId:a.j.Xu});g.Vz("yt-remote-session-screen-id",b);a=h8();b=i8();g.Tb(a,b)||a.push(b);meb(a);oeb()};
g.k.RV=function(){this.dispatchEvent("channelClosed")};
g.k.SV=function(a){this.dispatchEvent(new ygb(a))};
g.k.onError=function(a){this.dispatchEvent(new zgb(a?1:0))};
g.k.sendMessage=function(a,b){this.Zc.sendMessage(a,b)};
g.k.Ap=function(a){this.Zc.Ap(a)};
g.k.dispose=function(){this.Zc.dispose()};g.k=Ggb.prototype;
g.k.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.I&&(this.B.stop(),this.T=a,this.J=b,Igb(this),(a=g.O("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.n_&&(this.u.mdxVersion=""+this.j.n_),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.J?this.u.ui=""+this.J:delete this.u.ui,
Object.assign(this.u,this.T),this.channel=new H8(this.pathPrefix,{LZ:"gsessionid",q_:this.C,r_:this.u}),this.channel.open(),this.I=2,Hgb(this))};
g.k.disconnect=function(a){this.Z=void 0===a?0:a;this.B.stop();Igb(this);this.channel&&(0!==this.Z?this.u.ui=""+this.Z:delete this.u.ui,this.channel.close());this.Z=0};
g.k.Eq=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.k.Vt=function(){var a=this.B;g.Zn(a.j);a.start()};
g.k.sendMessage=function(a,b){this.channel&&(Igb(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.k.Ap=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.k.wq=function(){return this.j?this.j.id:""};
g.k.ma=function(a){return this.D.ma.apply(this.D,[a].concat(g.u(g.ua.apply(1,arguments))))};
g.k.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.k.Wg=function(a){return this.D.Wg(a)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.Se(this.D),this.disconnect(),g.Se(this.B),this.ya=function(){return""})};
g.k.isDisposed=function(){return this.ea};g.v(Jgb,g.Gf);g.k=Jgb.prototype;g.k.connect=function(a,b){this.j.connect(a,b)};
g.k.disconnect=function(a){this.j.disconnect(a)};
g.k.Vt=function(){this.j.Vt()};
g.k.wq=function(){return this.j.wq()};
g.k.Eq=function(){return this.j.Eq()};
g.k.Jw=function(){return 3===this.j.I};
g.k.WV=function(){this.dispatchEvent("channelOpened")};
g.k.UV=function(){this.dispatchEvent("channelClosed")};
g.k.VV=function(a){this.dispatchEvent(new ygb(a))};
g.k.onError=function(){this.dispatchEvent(new zgb(401===this.j.Sg?1:0))};
g.k.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.k.Ap=function(a){this.j.Ap(a)};
g.k.dispose=function(){this.j.dispose()};var Rgb=Date.now(),$8=null,d9=Array(50),c9=-1,e9=!1;g.Ra(f9,g.jz);f9.prototype.zj=function(){return this.screens};
f9.prototype.contains=function(a){return!!jeb(this.screens,a)};
f9.prototype.get=function(a){return a?g8(this.screens,a):null};
f9.prototype.info=function(a){a9(this.I,a)};g.v(Vgb,g.jz);g.k=Vgb.prototype;g.k.start=function(){!this.j&&isNaN(this.yc)&&this.DS()};
g.k.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.yc)||(g.Gu(this.yc),this.yc=NaN)};
g.k.ra=function(){this.stop();g.jz.prototype.ra.call(this)};
g.k.DS=function(){this.yc=NaN;this.j=g.Ju(Z8(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Oa)(this.YV,this),onError:(0,g.Oa)(this.XV,this),onTimeout:(0,g.Oa)(this.ZV,this)})};
g.k.YV=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ma("pairingComplete",new d8(a),b)};
g.k.XV=function(a){this.j=null;a.status&&404==a.status?this.u>=ejb.length?this.ma("pairingFailed",Error("DIAL polling timed out")):(a=ejb[this.u],this.yc=g.Eu((0,g.Oa)(this.DS,this),a),this.u++):this.ma("pairingFailed",Error("Server error "+a.status))};
g.k.ZV=function(){this.j=null;this.ma("pairingFailed",Error("Server not responding"))};
var ejb=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ra(h9,f9);g.k=h9.prototype;g.k.start=function(){g9(this)&&this.ma("screenChange");!g.Wz("yt-remote-lounge-token-expiration")&&Wgb(this);g.Gu(this.j);this.j=g.Eu((0,g.Oa)(this.start,this),1E4)};
g.k.add=function(a,b){g9(this);Sgb(this,a);i9(this,!1);this.ma("screenChange");b(a);a.token||Wgb(this)};
g.k.remove=function(a,b){var c=g9(this);Ugb(this,a)&&(i9(this,!1),c=!0);b(a);c&&this.ma("screenChange")};
g.k.rF=function(a,b,c,d){var e=g9(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,i9(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ma("screenChange")};
g.k.ra=function(){g.Gu(this.j);h9.Ye.ra.call(this)};
g.k.oZ=function(a){g9(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}i9(this,!b);b&&a9(this.I,"Missed "+b+" lounge tokens.")};
g.k.nZ=function(a){a9(this.I,"Requesting lounge tokens failed: "+a)};g.v(Ygb,g.jz);g.k=Ygb.prototype;g.k.start=function(){var a=parseInt(g.Wz("yt-remote-fast-check-period")||"0",10);(this.C=g.Qa()-144E5<a?0:a)?j9(this):(this.C=g.Qa()+3E5,g.Vz("yt-remote-fast-check-period",this.C),this.eL())};
g.k.isEmpty=function(){return g.nf(this.j)};
g.k.update=function(){Xgb("Updating availability on schedule.");var a=this.I(),b=g.df(this.j,function(c,d){return c&&!!g8(a,d)},this);
ahb(this,b)};
g.k.ra=function(){g.Gu(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.jz.prototype.ra.call(this)};
g.k.eL=function(){g.Gu(this.B);this.B=NaN;this.u&&this.u.abort();var a=bhb(this);if(Xdb(a)){var b=Z8(this.D,"/pairing/get_screen_availability");this.u=Egb(this.D,b,{lounge_token:g.jf(a).join(",")},(0,g.Oa)(this.U1,this,a),(0,g.Oa)(this.T1,this))}else ahb(this,{}),j9(this)};
g.k.U1=function(a,b){this.u=null;var c=g.jf(bhb(this));if(g.qc(c,g.jf(a))){b=b.screens||[];c={};for(var d=b.length,e=0;e<d;++e)c[a[b[e].loungeToken]]="online"==b[e].status;ahb(this,c);j9(this)}else this.tf("Changing Screen set during request."),this.eL()};
g.k.T1=function(a){this.tf("Screen availability failed: "+a);this.u=null;j9(this)};
g.k.tf=function(a){a9("OnlineScreenService",a)};g.Ra(k9,f9);g.k=k9.prototype;g.k.start=function(){this.u.start();this.j.start();this.screens.length&&(this.ma("screenChange"),this.j.isEmpty()||this.ma("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.k.rF=function(a,b,c,d){this.u.contains(a)?this.u.rF(a,b,c,d):(a="Updating name of unknown screen: "+a.name,a9(this.I,a),d(Error(a)))};
g.k.zj=function(a){return a?this.screens:g.bc(this.screens,g.vm(this.B,function(b){return!this.contains(b)},this))};
g.k.tN=function(){return g.vm(this.zj(!0),function(a){return!!this.j.j[a.id]},this)};
g.k.uN=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new Vgb(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.Se(l);e(l9(h,m),n)});
l.subscribe("pairingFailed",function(m){g.Se(l);f(m)});
l.start();return(0,g.Oa)(l.stop,l)};
g.k.aW=function(a,b,c,d){g.Ju(Z8(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Oa)(function(e,f){e=new d8(f.screen||{});if(!e.name||fhb(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);fhb(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(l9(this,e))},this),
onError:(0,g.Oa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Oa)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ra=function(){g.Se(this.u);g.Se(this.j);k9.Ye.ra.call(this)};
g.k.xZ=function(){hhb(this);this.ma("screenChange");this.j.update()};
k9.prototype.dispose=k9.prototype.dispose;g.Ra(m9,g.jz);g.k=m9.prototype;g.k.getScreen=function(){return this.C};
g.k.wi=function(a){this.isDisposed()||(a&&(o9(this,""+a),this.ma("sessionFailed")),this.C=null,this.ma("sessionScreen",null))};
g.k.info=function(a){a9(this.Ba,a)};
g.k.vN=function(){return null};
g.k.xL=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Oa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Oa)(function(){o9(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ra=function(){this.xL("");m9.Ye.ra.call(this)};g.v(p9,m9);g.k=p9.prototype;g.k.wL=function(a){if(this.u){if(this.u==a)return;o9(this,"Overriding cast session with new session object");thb(this);this.ya=!1;this.Z="unknown";this.u.removeUpdateListener(this.oa);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.oa);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);ohb(this,"getMdxSessionStatus")};
g.k.Rw=function(a){this.info("launchWithParams no-op for Cast: "+g.Th(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.Oa)(function(){this.wi()},this),(0,g.Oa)(function(){this.wi(Error("Failed to stop receiver app."))},this)):this.wi(Error("Stopping cast device without session."))};
g.k.xL=function(){};
g.k.ra=function(){this.info("disposeInternal");thb(this);this.u&&(this.u.removeUpdateListener(this.oa),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;m9.prototype.ra.call(this)};
g.k.O2=function(a,b){if(!this.isDisposed())if(b)if(b=a8(b),g.La(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Th(b)),a){case "mdxSessionStatus":lhb(this,b);break;case "loungeToken":phb(this,b);break;default:o9(this,"Unknown youtube message: "+a)}else o9(this,"Unable to parse message.");else o9(this,"No data in message.")};
g.k.ZP=function(a,b,c,d){g.Gu(this.T);this.T=0;ehb(this.B,this.j.label,a,this.j.friendlyName,(0,g.Oa)(function(e){e?b(e):0<=d?(o9(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.T=g.Eu((0,g.Oa)(this.ZP,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.vN=function(){return this.u};
g.k.bW=function(a){this.isDisposed()||a||(o9(this,"Cast session died."),this.wi())};g.v(q9,m9);g.k=q9.prototype;g.k.wL=function(a){this.u=a;this.u.addUpdateListener(this.Ja)};
g.k.Rw=function(a){this.Ma=a;this.ea()};
g.k.stop=function(){Bhb(this);this.u?this.u.stop((0,g.Oa)(this.wi,this,null),(0,g.Oa)(this.wi,this,"Failed to stop DIAL device.")):this.wi()};
g.k.ra=function(){Bhb(this);this.u&&this.u.removeUpdateListener(this.Ja);this.u=null;m9.prototype.ra.call(this)};
g.k.cW=function(a){this.isDisposed()||a||(o9(this,"DIAL session died."),this.D(),this.D=function(){},this.wi())};g.v(t9,m9);t9.prototype.stop=function(){this.wi()};
t9.prototype.wL=function(){};
t9.prototype.Rw=function(){g.Gu(this.u);this.u=NaN;var a=g8(this.B.zj(),this.j.label);a?n9(this,a):this.wi(Error("No such screen"))};
t9.prototype.ra=function(){g.Gu(this.u);this.u=NaN;m9.prototype.ra.call(this)};g.v(u9,g.jz);g.k=u9.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.T,[chrome.cast.Capability.AUDIO_OUT]);this.Z||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Oa)(this.F1,this);c=new chrome.cast.ApiConfig(c,(0,g.Oa)(this.mS,this),e,d,a);c.customDialLaunchCallback=(0,g.Oa)(this.w0,this);
chrome.cast.initialize(c,(0,g.Oa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),Ogb(),this.u.subscribe("onlineScreenChange",(0,g.Oa)(this.wN,this)),this.B=Ehb(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(f){this.tf("Failed to set initial custom receivers: "+g.Th(f))},this)),this.ma("yt-remote-cast2-availability-change",w9(this)),b(!0))},this),(0,g.Oa)(function(f){this.tf("Failed to initialize API: "+g.Th(f));
b(!1)},this))};
g.k.D3=function(a,b){v9("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)v9("Unsetting old screen status: "+this.j.j.friendlyName),x9(this,null)}if(a&&b){if(!this.j){c=g8(this.u.zj(),a);if(!c){v9("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){v9("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=Chb(this,c);a||(v9("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(d){this.tf("Failed to set initial custom receivers: "+g.Th(d))},this)));
v9("setConnectedScreenStatus: new active receiver: "+a.friendlyName);x9(this,new t9(this.u,a),!0)}this.j.xL(b)}else v9("setConnectedScreenStatus: no screen.")};
g.k.E3=function(a){this.isDisposed()?this.tf("Setting connection data on disposed cast v2"):this.j?this.j.Rw(a):this.tf("Setting connection data without a session")};
g.k.eW=function(){this.isDisposed()?this.tf("Stopping session on disposed cast v2"):this.j?(this.j.stop(),x9(this,null)):v9("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Oa)(this.mS,this),(0,g.Oa)(this.X1,this))};
g.k.ra=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Oa)(this.wN,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=Lgb,b=g.Ea("yt.mdx.remote.debug.handlers_");g.Zb(b||[],a);g.Se(this.j);g.jz.prototype.ra.call(this)};
g.k.tf=function(a){a9("Controller",a)};
g.k.oS=function(a,b){this.j==a&&(b||x9(this,null),this.ma("yt-remote-cast2-session-change",b))};
g.k.C1=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),v9("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)v9("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{v9("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.ma("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:x9(this,
new t9(this.u,a));break;case chrome.cast.ReceiverType.DIAL:x9(this,new q9(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:x9(this,new p9(this.u,a,this.config_));break;default:this.tf("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.tf("Stopping receiver w/o session: "+a.friendlyName)}else this.tf("onReceiverAction_ called without receiver.")};
g.k.w0=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.tf("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.tf("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return v9("Reselecting dial screen."),
this.ma("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.tf('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);x9(this,new q9(this.u,b,this.C,this.config_))}b=this.j;b.T=a;b.T.appState==chrome.cast.DialAppState.RUNNING?(a=b.T.extraData||{},c=a.screenId||null,r9(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=yhb(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.T.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.nu(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=zhb(b,c)):a=zhb(b,c)):a=whb(b);return a};
g.k.mS=function(a){var b=this;if(!this.isDisposed()&&!this.I){v9("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)v9("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),x9(this,new p9(this.u,c,this.config_),!0);else{this.tf("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=g8(this.u.zj(),
d.label);e&&e8(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(v9("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.Se(this.j),this.j=new p9(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Oa)(this.oS,this,this.j)),this.j.subscribe("sessionFailed",function(){return Dhb(b,b.j)}),this.j.Rw(null));
this.j.wL(a)}}};
g.k.dW=function(){return this.j?this.j.vN():null};
g.k.X1=function(a){this.isDisposed()||(this.tf("Failed to estabilish a session: "+g.Th(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&x9(this,null),this.ma("yt-remote-cast2-session-failed"))};
g.k.F1=function(a){v9("Receiver availability updated: "+a);if(!this.isDisposed()){var b=w9(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;w9(this)!=b&&this.ma("yt-remote-cast2-availability-change",w9(this))}};
g.k.wN=function(){this.isDisposed()||(this.B=Ehb(this),v9("Updating custom receivers: "+g.Th(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(){this.tf("Failed to set custom receivers.")},this)),this.ma("yt-remote-cast2-availability-change",w9(this)))};
u9.prototype.setLaunchParams=u9.prototype.E3;u9.prototype.setConnectedScreenStatus=u9.prototype.D3;u9.prototype.stopSession=u9.prototype.eW;u9.prototype.getCastSession=u9.prototype.dW;u9.prototype.requestSession=u9.prototype.requestSession;u9.prototype.init=u9.prototype.init;u9.prototype.dispose=u9.prototype.dispose;var Nhb=[];g.k=E9.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";Thb(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.zn=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.T=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Qc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Qj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+F9(this):this.D};
g.k.clone=function(){return new E9(Uhb(this))};g.v(K9,g.jz);g.k=K9.prototype;g.k.getState=function(){return this.B};
g.k.Eq=function(){return this.C.getReconnectTimeout()};
g.k.Vt=function(){this.C.reconnect()};
g.k.play=function(){M9(this)?(this.j?this.j.play(null,g.Nf,Q9(this,"play")):P9(this,"play"),Xhb(this,1,H9(L9(this))),this.ma("remotePlayerChange")):N9(this,this.play)};
g.k.pause=function(){M9(this)?(this.j?this.j.pause(null,g.Nf,Q9(this,"pause")):P9(this,"pause"),Xhb(this,2,H9(L9(this))),this.ma("remotePlayerChange")):N9(this,this.pause)};
g.k.seekTo=function(a){if(M9(this)){if(this.j){var b=L9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Qc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.Nf,Q9(this,"seekTo",{newTime:a}))}else P9(this,"seekTo",{newTime:a});Xhb(this,3,a);this.ma("remotePlayerChange")}else N9(this,g.Pa(this.seekTo,a))};
g.k.stop=function(){if(M9(this)){this.j?this.j.stop(null,g.Nf,Q9(this,"stopVideo")):P9(this,"stopVideo");var a=L9(this);a.index=-1;a.videoId="";Thb(a);O9(this,a);this.ma("remotePlayerChange")}else N9(this,this.stop)};
g.k.setVolume=function(a,b){if(M9(this)){var c=L9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Oa)(function(){b9("set receiver volume: "+d)},this),(0,g.Oa)(function(){this.tf("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Oa)(function(){b9("set receiver muted: "+b)},this),(0,g.Oa)(function(){this.tf("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);P9(this,"setVolume",e)}c.muted=b;c.volume=a;O9(this,c)}else N9(this,g.Pa(this.setVolume,a,b))};
g.k.xN=function(a,b){if(M9(this)){var c=L9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Th(b.style),g.uf(a,c.trackData));P9(this,"setSubtitlesTrack",a);O9(this,c)}else N9(this,g.Pa(this.xN,a,b))};
g.k.setAudioTrack=function(a,b){M9(this)?(b=b.getLanguageInfo().getId(),P9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=L9(this),a.audioTrackId=b,O9(this,a)):N9(this,g.Pa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=L9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);I9(l,a,c||0);void 0!==b&&(G9(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.Th(h));P9(this,"setPlaylist",m);d||O9(this,l)};
g.k.FE=function(a,b){if(M9(this)){if(a&&b){var c=L9(this);I9(c,a,b);O9(this,c)}P9(this,"previous")}else N9(this,g.Pa(this.FE,a,b))};
g.k.nextVideo=function(a,b){if(M9(this)){if(a&&b){var c=L9(this);I9(c,a,b);O9(this,c)}P9(this,"next")}else N9(this,g.Pa(this.nextVideo,a,b))};
g.k.Pv=function(){if(M9(this)){P9(this,"clearPlaylist");var a=L9(this);a.reset();O9(this,a);this.ma("remotePlayerChange")}else N9(this,this.Pv)};
g.k.rP=function(){M9(this)?P9(this,"dismissAutoplay"):N9(this,this.rP)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ma("proxyStateChange",a,this.B)}g.jz.prototype.dispose.call(this)};
g.k.ra=function(){Whb(this);this.C=null;this.D.clear();J9(this,null);g.jz.prototype.ra.call(this)};
g.k.zL=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ma("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.k.A1=function(a,b){this.ma(a,b)};
g.k.m0=function(a){if(!a)this.BA(null),J9(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=L9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)b9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,O9(this,b)}};
g.k.BA=function(a){b9("Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.T);if(this.j=a)this.j.addUpdateListener(this.T),Yhb(this),this.ma("remotePlayerChange")};
g.k.l0=function(a){a?(Yhb(this),this.ma("remotePlayerChange")):this.BA(null)};
g.k.WL=function(){P9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.n0=function(){var a=Qhb();a&&J9(this,a)};
g.k.tf=function(a){a9("CP",a)};g.v(T9,g.jz);g.k=T9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ja&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;G9(this.j,
n);this.D="UNSUPPORTED";c=this.Ja?"setInitialState":"setPlaylist";R9("Connecting with "+c+" and params: "+g.Th(m));this.u.connect({method:c,params:g.Th(m)},a,peb())}else R9("Connecting without params"),this.u.connect({},a,peb());bib(this)};
g.k.Ap=function(a){this.u.Ap(a)};
g.k.dispose=function(){this.isDisposed()||(g.Da("yt.mdx.remote.remoteClient_",null),this.ma("beforeDispose"),S9(this,3));g.jz.prototype.dispose.call(this)};
g.k.ra=function(){cib(this);eib(this);dib(this);g.Gu(this.T);this.T=NaN;g.Gu(this.Z);this.Z=NaN;this.C=null;g.qx(this.ea);this.ea.length=0;this.u.dispose();g.jz.prototype.ra.call(this);this.D=this.J=this.B=this.j=this.u=null};
g.k.KQ=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.t(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.fZ=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Kz())?this.u.Jw()&&isNaN(this.I)&&(a=1):a=2);return a};
g.k.gw=function(a){R9("Disconnecting with "+a);g.Da("yt.mdx.remote.remoteClient_",null);cib(this);this.ma("beforeDisconnect",a);1==a&&j8();this.u.disconnect(a);this.dispose()};
g.k.dZ=function(){var a=this.j;this.C&&(a=this.j.clone(),I9(a,this.C,a.index));return Uhb(a)};
g.k.F3=function(a){var b=this,c=new E9(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.Gu(this.T),this.T=g.Eu(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&U9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&H9(this.j)==H9(c)&&g.Th(this.j.trackData)==g.Th(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.sc(d,function(e){this.ma(e)},this)};
g.k.YP=function(){var a=this.u.wq(),b=g.Rb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Kz=function(){return this.u.Eq()};
g.k.aZ=function(){return this.D||"UNSUPPORTED"};
g.k.bZ=function(){return this.J||""};
g.k.fW=function(){!isNaN(this.Kz())&&this.u.Vt()};
g.k.B3=function(a,b){U9(this,a,b);gib(this)};
g.k.yN=function(){var a=g.Tu("SID","")||"",b=g.Tu("SAPISID","")||"",c=g.Tu("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Dc(g.Ya(a),2);b=g.Dc(g.Ya(b),2);c=g.Dc(g.Ya(c),2);return g.Dc(g.Ya(a+","+b+","+c),2)};
T9.prototype.subscribe=T9.prototype.subscribe;T9.prototype.unsubscribeByKey=T9.prototype.Wg;T9.prototype.getProxyState=T9.prototype.fZ;T9.prototype.disconnect=T9.prototype.gw;T9.prototype.getPlayerContextData=T9.prototype.dZ;T9.prototype.setPlayerContextData=T9.prototype.F3;T9.prototype.getOtherConnectedRemoteId=T9.prototype.YP;T9.prototype.getReconnectTimeout=T9.prototype.Kz;T9.prototype.getAutoplayMode=T9.prototype.aZ;T9.prototype.getAutoplayVideoId=T9.prototype.bZ;T9.prototype.reconnect=T9.prototype.fW;
T9.prototype.sendMessage=T9.prototype.B3;T9.prototype.getXsrfToken=T9.prototype.yN;T9.prototype.isCapabilitySupportedOnConnectedDevices=T9.prototype.KQ;g.v(sib,f9);g.k=sib.prototype;g.k.zj=function(a){return this.cg.$_gs(a)};
g.k.contains=function(a){return!!this.cg.$_c(a)};
g.k.get=function(a){return this.cg.$_g(a)};
g.k.start=function(){this.cg.$_st()};
g.k.add=function(a,b,c){this.cg.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.cg.$_r(a,b,c)};
g.k.rF=function(a,b,c,d){this.cg.$_un(a,b,c,d)};
g.k.ra=function(){for(var a=0,b=this.j.length;a<b;++a)this.cg.$_ubk(this.j[a]);this.j.length=0;this.cg=null;f9.prototype.ra.call(this)};
g.k.gW=function(){this.ma("screenChange")};
g.k.b1=function(){this.ma("onlineScreenChange")};
k9.prototype.$_st=k9.prototype.start;k9.prototype.$_gspc=k9.prototype.aW;k9.prototype.$_gsppc=k9.prototype.uN;k9.prototype.$_c=k9.prototype.contains;k9.prototype.$_g=k9.prototype.get;k9.prototype.$_a=k9.prototype.add;k9.prototype.$_un=k9.prototype.rF;k9.prototype.$_r=k9.prototype.remove;k9.prototype.$_gs=k9.prototype.zj;k9.prototype.$_gos=k9.prototype.tN;k9.prototype.$_s=k9.prototype.subscribe;k9.prototype.$_ubk=k9.prototype.Wg;var e$=null,h$=!1,V9=null,W9=null,Dib=null,$9=[];g.v(Iib,g.K);g.k=Iib.prototype;g.k.ra=function(){g.K.prototype.ra.call(this);this.u.stop();this.B.stop();this.T.stop();var a=this.uc;a.unsubscribe("proxyStateChange",this.lS,this);a.unsubscribe("remotePlayerChange",this.GA,this);a.unsubscribe("remoteQueueChange",this.qE,this);a.unsubscribe("previousNextChange",this.iS,this);a.unsubscribe("nowAutoplaying",this.cS,this);a.unsubscribe("autoplayDismissed",this.FR,this);this.uc=this.j=null};
g.k.Ck=function(a){var b=g.ua.apply(1,arguments);if(2!=this.uc.B)if(i$(this)){if(!L9(this.uc).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":L9(this.uc).Qc()?this.uc.pause():this.uc.play();break;case "control_play":this.uc.play();break;case "control_pause":this.uc.pause();break;case "control_seek":this.J.YF(b[0],b[1]);break;case "control_subtitles_set_track":Kib(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();j$(this,0===b?void 0:b);break;case "control_seek":j$(this,b[0]);break;case "control_subtitles_set_track":Kib(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.j0=function(a){this.T.FV(a)};
g.k.x4=function(a){this.Ck("control_subtitles_set_track",g.nf(a)?null:a)};
g.k.HT=function(){var a=this.G.getOption("captions","track");g.nf(a)||Kib(this,a)};
g.k.hc=function(a){this.j.hc(a,this.G.getVideoData().lengthSeconds)};
g.k.L0=function(){g.nf(this.C)||Lib(this,this.C);this.D=!1};
g.k.lS=function(a,b){this.B.stop();2===b&&this.zT()};
g.k.GA=function(){if(i$(this)){this.u.stop();var a=L9(this.uc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.j.Rg=1;break;case 1082:case 1083:this.j.Rg=0;break;default:this.j.Rg=-1}switch(a.playerState){case 1081:case 1:this.Yb(new g.tK(8));this.yT();break;case 1085:case 3:this.Yb(new g.tK(9));break;case 1083:case 0:this.Yb(new g.tK(2));this.J.stop();this.hc(this.G.getVideoData().lengthSeconds);break;case 1084:this.Yb(new g.tK(4));break;case 2:this.Yb(new g.tK(4));this.hc(H9(a));
break;case -1:this.Yb(new g.tK(64));break;case -1E3:this.Yb(new g.tK(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",OC:2}))}a=L9(this.uc).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,Lib(this,a));a=L9(this.uc);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.Z.isActive()||this.pU()}else Jib(this)};
g.k.iS=function(){this.G.ma("mdxpreviousnextchange")};
g.k.qE=function(){i$(this)||Jib(this)};
g.k.cS=function(a){isNaN(a)||this.G.ma("mdxnowautoplaying",a)};
g.k.FR=function(){this.G.ma("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){i$(this)&&this.uc.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===L9(this.uc).playerState?j$(this,a):b&&this.uc.seekTo(a)};
g.k.pU=function(){var a=this;if(i$(this)){var b=L9(this.uc);this.events.zc(this.ea);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.ea=this.events.S(this.G,"onVolumeChange",function(c){Gib(a,c)})}};
g.k.yT=function(){this.u.stop();if(!this.uc.isDisposed()){var a=L9(this.uc);a.Qc()&&this.Yb(new g.tK(8));this.hc(H9(a));this.u.start()}};
g.k.zT=function(){this.B.stop();this.u.stop();var a=this.uc.Eq();2==this.uc.B&&!isNaN(a)&&this.B.start()};
g.k.Yb=function(a){this.B.stop();var b=this.I;if(!g.yK(b,a)){var c=g.U(a,2);c!==g.U(this.I,2)&&this.G.zx(c);this.I=a;Nib(this.j,b,a)}};g.v(k$,g.X);k$.prototype.Jc=function(){this.j.show()};
k$.prototype.wb=function(){this.j.hide()};
k$.prototype.u=function(){b8("mdx-privacy-popup-cancel");this.wb()};
k$.prototype.B=function(){b8("mdx-privacy-popup-confirm");this.wb()};g.v(l$,g.X);l$.prototype.onStateChange=function(a){this.Wc(a.state)};
l$.prototype.Wc=function(a){if(3===this.api.getPresentingPlayerType()){var b={RECEIVER_NAME:this.api.getOption("remote","currentReceiver").name};a=g.U(a,128)?g.bK("Error on $RECEIVER_NAME",b):a.Qc()||g.zK(a)?g.bK("Playing on $RECEIVER_NAME",b):g.bK("Connected to $RECEIVER_NAME",b);this.updateValue("statustext",a);this.j.show()}else this.j.hide()};g.v(m$,g.$R);m$.prototype.u=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.Fr=g.wc(a,this.j,this),g.aS(this,g.Sd(a,this.j)),a=this.G.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.Ii(a),this.enable(!0)):this.enable(!1)};
m$.prototype.j=function(a){return a.key};
m$.prototype.lk=function(a){return"cast-selector-receiver"===a?"Cast...":this.Fr[a].name};
m$.prototype.Xg=function(a){g.$R.prototype.Xg.call(this,a);this.G.setOption("remote","currentReceiver",this.Fr[a]);this.ob.wb()};g.v(Mib,g.NO);g.k=Mib.prototype;
g.k.create=function(){var a=this.player.V(),b=g.mG(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};xib(b,a);this.subscriptions.push(g.Nx("yt-remote-before-disconnect",this.g0,this));this.subscriptions.push(g.Nx("yt-remote-connection-change",this.G1,this));this.subscriptions.push(g.Nx("yt-remote-receiver-availability-change",this.kS,
this));this.subscriptions.push(g.Nx("yt-remote-auto-connect",this.E1,this));this.subscriptions.push(g.Nx("yt-remote-receiver-resumed",this.D1,this));this.subscriptions.push(g.Nx("mdx-privacy-popup-confirm",this.d3,this));this.subscriptions.push(g.Nx("mdx-privacy-popup-cancel",this.b3,this));this.kS()};
g.k.load=function(){this.player.cancelPlayback();g.NO.prototype.load.call(this);this.pk=new Iib(this,this.player,this.uc);var a=(a=Fib())?a.currentTime:0;var b=Cib()?new K9(d$(),void 0):null;0==a&&b&&(a=H9(L9(b)));0!==a&&this.hc(a);Nib(this,this.Hd,this.Hd);this.player.Sn(6)};
g.k.unload=function(){this.player.ma("mdxautoplaycanceled");this.hq=this.Jn;g.Te(this.pk,this.uc);this.uc=this.pk=null;g.NO.prototype.unload.call(this);this.player.Sn(5);n$(this)};
g.k.ra=function(){g.Ox(this.subscriptions);g.NO.prototype.ra.call(this)};
g.k.Ln=function(a){var b=g.ua.apply(1,arguments);this.loaded&&this.pk.Ck.apply(this.pk,[a].concat(g.u(b)))};
g.k.getAdState=function(){return this.Rg};
g.k.zn=function(){return this.uc?L9(this.uc).zn:!1};
g.k.hasNext=function(){return this.uc?L9(this.uc).hasNext:!1};
g.k.hc=function(a,b){this.UQ=a||0;this.player.ma("progresssync",a,b);this.player.Qa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.UQ};
g.k.getProgressState=function(){var a=L9(this.uc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().N("web_player_mdx_allow_seeking_change_killswitch")?this.player.wg():!a.isAdPlaying()&&this.player.wg(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+F9(a):a.B,isAtLiveHead:1>=(a.u?a.j+F9(a):a.j)-this.getCurrentTime(),loaded:a.T,seekableEnd:a.u?a.j+F9(a):a.j,seekableStart:0<
a.C?a.C+F9(a):a.C,offset:0}};
g.k.nextVideo=function(){this.uc&&this.uc.nextVideo()};
g.k.FE=function(){this.uc&&this.uc.FE()};
g.k.g0=function(a){1===a&&(this.NK=this.uc?L9(this.uc):null)};
g.k.G1=function(){var a=Cib()?new K9(d$(),void 0):null;if(a){var b=this.hq;this.loaded&&this.unload();this.uc=a;this.NK=null;b.key!==this.Jn.key&&(this.hq=b,this.load())}else g.Se(this.uc),this.uc=null,this.loaded&&(this.unload(),(a=this.NK)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,H9(a)));this.player.ma("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.kS=function(){var a=[this.Jn],b=a.concat,c=yib();B9()&&g.Wz("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Fr=b.call(a,c);a=Aib()||this.Jn;o$(this,a);this.player.Qa("onMdxReceiversChange")};
g.k.E1=function(){var a=Aib();o$(this,a)};
g.k.D1=function(){this.hq=Aib()};
g.k.d3=function(){this.PA=!0;n$(this);h$=!1;e$&&g$(e$,1);e$=null};
g.k.b3=function(){this.PA=!1;n$(this);o$(this,this.Jn);this.hq=this.Jn;h$=!1;e$=null;this.player.playVideo()};
g.k.Lg=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Fr;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Rhb():o$(this,b)),this.loaded?this.hq:this.Jn;case "quickCast":return 2===this.Fr.length&&"cast-selector-receiver"===this.Fr[1].key?(b&&Rhb(),!0):!1}};
g.k.WL=function(){this.uc.WL()};
g.k.Rj=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.MO("remote",Mib);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:01:24 Nov 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:43:40 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 83.535
  exclusion.robots: 0.128
  exclusion.robots.policy: 0.113
  cdx.remote: 0.092
  esindex: 0.013
  LoadShardBlock: 51.934 (3)
  PetaboxLoader3.datanode: 55.0 (4)
  load_resource: 60.593
  PetaboxLoader3.resolve: 31.452
*/