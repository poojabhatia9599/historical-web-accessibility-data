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

(function(g){var window=this;'use strict';var Kbb=function(a){return a},Lbb=function(a,b){this.u=a>>>0;
this.j=b>>>0},Nbb=function(a){if(!a)return Mbb||(Mbb=new Lbb(0,0));
if(!/^\d+$/.test(a))return null;g.Cba(a);return new Lbb(g.ee,g.ie)},Obb=function(a,b,c){null!=c&&("string"===typeof c&&Nbb(c),g.Ee(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.ee=b,g.ie=c,g.Ce(a,g.ee),g.Ce(a,g.ie)):(c=Nbb(c),a=a.j,b=c.j,g.Ce(a,c.u),g.Ce(a,b)))},Pbb=function(a,b,c){b=g.qba(b,c);
null!=b&&(g.Ee(a,c,0),a.j.j.push(b?1:0))},Rbb=function(a){g.J.call(this,a,-1,Qbb)},Sbb=function(a){g.J.call(this,a)},Tbb=function(a){g.J.call(this,a)},Ubb=function(a){g.J.call(this,a)},Vbb=function(a){g.J.call(this,a)},Y7=function(a){g.Pj(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Sa()).toString(36));
return a},Z7=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.fga(a.u,b,c)},Wbb=function(a){if(a instanceof g.wm)return a;
if("function"==typeof a.yj)return a.yj(!1);if(g.Ma(a)){var b=0,c=new g.wm;c.next=function(){for(;;){if(b>=a.length)return g.V2;if(b in a)return g.xm(a[b++]);b++}};
return c}throw Error("Not implemented");},Xbb=function(a,b,c){if(g.Ma(a))g.uc(a,b,c);
else for(a=Wbb(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},Ybb=function(a,b){var c=[];
Xbb(b,function(d){try{var e=g.Mo.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Oka(e)&&c.push(d)},a);
return c},Zbb=function(a,b){Ybb(a,b).forEach(function(c){g.Mo.prototype.remove.call(this,c)},a)},$bb=function(a){if(a.oa){if(a.oa.locationOverrideToken)return{locationOverrideToken:a.oa.locationOverrideToken};
if(null!=a.oa.latitudeE7&&null!=a.oa.longitudeE7)return{latitudeE7:a.oa.latitudeE7,longitudeE7:a.oa.longitudeE7}}return null},acb=function(a,b){g.Xb(a,b)||a.push(b)},bcb=function(a){var b=0,c;
for(c in a)b++;return b},ccb=function(a,b){return g.Af(a,b)},dcb=function(a){try{return g.D.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},$7=function(a){if(g.D.JSON)try{return g.D.JSON.parse(a)}catch(b){}return dcb(a)},ecb=function(a,b,c,d){var e=new g.Fj(null);
a&&g.Gj(e,a);b&&g.Hj(e,b);c&&g.Ij(e,c);d&&(e.J=d);return e},a8=function(a,b){g.Mx[a]=!0;
var c=g.Kx();c&&c.publish.apply(c,arguments);g.Mx[a]=!1},b8=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.vo;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",fcb(this,a.capabilities||""),gcb(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},fcb=function(a,b){a.capabilities.clear();
g.Dm(b.split(","),g.Ra(ccb,hcb)).forEach(function(c){a.capabilities.add(c)})},gcb=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},c8=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},d8=function(a,b){return!!b&&(a.id==b||a.uuid==b)},icb=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},jcb=function(a){return new c8(a)},kcb=function(a){return Array.isArray(a)?g.Uk(a,jcb):[]},e8=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},lcb=function(a){return Array.isArray(a)?"["+g.Uk(a,e8).join(",")+"]":"null"},mcb=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},ncb=function(a){return g.Uk(a,function(b){return{key:b.id,
name:b.name}})},ocb=function(a,b){return g.Vb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},f8=function(a,b){return g.Vb(a,function(c){return d8(c,b)})},pcb=function(){var a=(0,g.Kz)();
a&&Zbb(a,a.j.yj(!0))},g8=function(){var a=g.Nz("yt-remote-connected-devices")||[];
g.rc(a);return a},qcb=function(a){if(g.Zb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Uk(a,function(d,e){return 0==e?d:d.substring(c.length)})},rcb=function(a){g.Mz("yt-remote-connected-devices",a,86400)},h8=function(){if(scb)return scb;
var a=g.Nz("yt-remote-device-id");a||(a=mcb(),g.Mz("yt-remote-device-id",a,31536E3));for(var b=g8(),c=1,d=a;g.Xb(b,d);)c++,d=a+"#"+c;return scb=d},tcb=function(){var a=g8(),b=h8();
g.Pz()&&g.tc(a,b);a=qcb(a);if(g.Zb(a))try{g.Xu("remote_sid")}catch(c){}else try{g.Vu("remote_sid",a.join(","),-1)}catch(c){}},ucb=function(){return g.Nz("yt-remote-session-browser-channel")},vcb=function(){return g.Nz("yt-remote-local-screens")||[]},wcb=function(){g.Mz("yt-remote-lounge-token-expiration",!0,86400)},xcb=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Uk(vcb(),function(d){return d.loungeToken}),c=g.Uk(a,function(d){return d.loungeToken});
g.Zd(c,function(d){return!g.Xb(b,d)})&&wcb();
g.Mz("yt-remote-local-screens",a,31536E3)},i8=function(a){a||(g.Oz("yt-remote-session-screen-id"),g.Oz("yt-remote-session-video-id"));
tcb();a=g8();g.cc(a,h8());rcb(a)},ycb=function(){if(!j8){var a=g.Vo();
a&&(j8=new g.Jo(a))}},zcb=function(){ycb();
return j8?!!j8.get("yt-remote-use-staging-server"):!1},Acb=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},Bcb=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},Ccb=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},k8=function(a){a.length?Dcb(a.shift(),function(){k8(a)}):Ecb()},Fcb=function(a){return"chrome-extension://"+a+"/cast_sender.js"},Dcb=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.fj(d,g.ng(a));(document.head||document.documentElement).appendChild(d)},Gcb=function(){var a=Acb(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20221001000539/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20221001000539/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},Ecb=function(){var a=Ccb();
a&&a(!1,"No cast extension found")},Icb=function(){if(Hcb){var a=2,b=Ccb(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Dcb("//web.archive.org/web/20221001000539/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Ecb,c)}},Jcb=function(){Icb();
var a=Gcb();a.push("//web.archive.org/web/20221001000539/https://www.gstatic.com/eureka/clank/cast_sender.js");k8(a)},Lcb=function(){Icb();
var a=Gcb();a.push.apply(a,g.u(Kcb.map(Fcb)));a.push("//web.archive.org/web/20221001000539/https://www.gstatic.com/eureka/clank/cast_sender.js");k8(a)},Mcb=function(){this.j=l8();
this.j.Fp("/client_streamz/youtube/living_room/mdx/channel/opened",{di:3,ai:"channel_type"})},Ncb=function(a,b){a.j.Qr("/client_streamz/youtube/living_room/mdx/channel/opened",b)},Ocb=function(){this.j=l8();
this.j.Fp("/client_streamz/youtube/living_room/mdx/channel/closed",{di:3,ai:"channel_type"})},Pcb=function(a,b){a.j.Qr("/client_streamz/youtube/living_room/mdx/channel/closed",b)},Qcb=function(){this.j=l8();
this.j.Fp("/client_streamz/youtube/living_room/mdx/channel/message_received",{di:3,ai:"channel_type"})},Rcb=function(a,b){a.j.Qr("/client_streamz/youtube/living_room/mdx/channel/message_received",b)},Scb=function(){this.j=l8();
this.j.Fp("/client_streamz/youtube/living_room/mdx/channel/error",{di:3,ai:"channel_type"})},Tcb=function(a,b){a.j.Qr("/client_streamz/youtube/living_room/mdx/channel/error",b)},Ucb=function(){this.j=l8();
this.j.Fp("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},Vcb=function(){this.j=l8();
this.j.Fp("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},m8=function(a,b,c){g.L.call(this);
this.I=null!=c?(0,g.Qa)(a,c):a;this.Fh=b;this.F=(0,g.Qa)(this.CV,this);this.j=!1;this.u=0;this.B=this.yc=null;this.C=[]},n8=function(a,b,c){g.L.call(this);
this.C=null!=c?a.bind(c):a;this.Fh=b;this.B=null;this.j=!1;this.u=0;this.yc=null},Wcb=function(a){a.yc=g.Sh(function(){a.yc=null;
a.j&&!a.u&&(a.j=!1,Wcb(a))},a.Fh);
var b=a.B;a.B=null;a.C.apply(null,b)},o8=function(){},Xcb=function(){g.bf.call(this,"p")},Ycb=function(){g.bf.call(this,"o")},$cb=function(){return Zcb=Zcb||new g.$f},adb=function(a){g.bf.call(this,"serverreachability",a)},p8=function(a){var b=$cb();
b.dispatchEvent(new adb(b,a))},bdb=function(a,b){g.bf.call(this,"statevent",a);
this.stat=b},q8=function(a){var b=$cb();
b.dispatchEvent(new bdb(b,a))},cdb=function(a,b,c,d){g.bf.call(this,"timingevent",a);
this.size=b;this.nx=d},r8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.D.setTimeout(function(){a()},b)},ddb=function(){},s8=function(a,b,c,d){this.F=a;
this.C=b;this.Dc=c;this.Bc=d||1;this.jb=new g.Uj(this);this.Ab=45E3;a=g.zG?125:void 0;this.ob=new g.Rh(a);this.La=null;this.B=!1;this.S=this.eb=this.J=this.Qa=this.ya=this.Nb=this.Z=null;this.oa=[];this.j=null;this.ea=0;this.I=this.Aa=null;this.Wb=-1;this.Ia=!1;this.tb=0;this.Ya=null;this.Ac=this.Ta=this.kc=this.Ba=!1;this.u=new edb},edb=function(){this.B=null;
this.j="";this.u=!1},gdb=function(a,b,c){a.Qa=1;
a.J=Y7(b.clone());a.S=c;a.Ba=!0;fdb(a,null)},fdb=function(a,b){a.ya=Date.now();
t8(a);a.eb=a.J.clone();Z7(a.eb,"t",a.Bc);a.ea=0;var c=a.F.Qa;a.u=new edb;a.j=hdb(a.F,c?b:null,!a.S);0<a.tb&&(a.Ya=new n8((0,g.Qa)(a.ZM,a,a.j),a.tb));a.jb.Ra(a.j,"readystatechange",a.GV);b=a.La?g.Gf(a.La):{};a.S?(a.Aa||(a.Aa="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.eb,a.Aa,a.S,b)):(a.Aa="GET",a.j.send(a.eb,a.Aa,null,b));p8(1)},idb=function(a){return a.j?"GET"==a.Aa&&2!=a.Qa&&a.F.Qd:!1},mdb=function(a,b,c){for(var d=!0,e;!a.Ia&&a.ea<c.length;)if(e=jdb(a,c),e==u8){4==
b&&(a.I=4,q8(14),d=!1);
break}else if(e==kdb){a.I=4;q8(15);d=!1;break}else ldb(a,e);idb(a)&&e!=u8&&e!=kdb&&(a.u.j="",a.ea=0);4!=b||0!=c.length||a.u.u||(a.I=1,q8(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.Ac&&(a.Ac=!0,a.F.fK(a)):(v8(a),w8(a))},jdb=function(a,b){var c=a.ea,d=b.indexOf("\n",c);
if(-1==d)return u8;c=Number(b.substring(c,d));if(isNaN(c))return kdb;d+=1;if(d+c>b.length)return u8;b=b.slice(d,d+c);a.ea=d+c;return b},t8=function(a){a.Nb=Date.now()+a.Ab;
ndb(a,a.Ab)},ndb=function(a,b){if(null!=a.Z)throw Error("WatchDog timer not null");
a.Z=r8((0,g.Qa)(a.EV,a),b)},x8=function(a){a.Z&&(g.D.clearTimeout(a.Z),a.Z=null)},w8=function(a){a.F.Zf()||a.Ia||odb(a.F,a)},v8=function(a){x8(a);
g.Ze(a.Ya);a.Ya=null;a.ob.stop();g.Vj(a.jb);if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},ldb=function(a,b){try{var c=a.F;
if(0!=c.xg&&(c.j==a||pdb(c.u,a)))if(!a.Ta&&pdb(c.u,a)&&3==c.xg){try{var d=c.ze.j.parse(b)}catch(z){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.S){if(c.j)if(c.j.ya+3E3<a.ya)y8(c),z8(c);else break a;qdb(c);q8(18)}}else c.Cd=e[1],0<c.Cd-c.Ta&&37500>e[2]&&c.ob&&0==c.oa&&!c.ea&&(c.ea=r8((0,g.Qa)(c.HV,c),6E3));if(1>=rdb(c.u)&&c.Qc){try{c.Qc()}catch(z){}c.Qc=void 0}}else A8(c,11)}else if((a.Ta||c.j==a)&&y8(c),!g.eb(b))for(e=c.ze.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Ta=f[0];
f=f[1];if(2==c.xg)if("c"==f[0]){c.C=f[1];c.Ac=f[2];var h=f[3];null!=h&&(c.aN=h);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.eb=1.5*l);d=c;var m=a.j;if(m){var n=g.Ki(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.jb(n,"spdy")||g.jb(n,"quic")||g.jb(n,"h2"))&&(p.C=p.F,p.j=new Set,p.u&&(sdb(p,p.u),p.u=null))}if(d.Ba){var q=g.Ki(m,"X-HTTP-Session-Id");q&&(d.Kd=q,g.Pj(d.La,d.Ba,q))}}c.xg=3;c.F&&c.F.gN();c.md&&(c.td=Date.now()-a.ya);d=c;var r=a;d.zd=tdb(d,d.Qa?d.Ac:null,d.Bc);if(r.Ta){udb(d.u,
r);var w=r,y=d.eb;y&&w.setTimeout(y);w.Z&&(x8(w),t8(w));d.j=r}else vdb(d);0<c.B.length&&B8(c)}else"stop"!=f[0]&&"close"!=f[0]||A8(c,7);else 3==c.xg&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?A8(c,7):c.disconnect():"noop"!=f[0]&&c.F&&c.F.fN(f),c.oa=0)}p8(4)}catch(z){}},wdb=function(a,b){this.j=a;
this.map=b;this.context=null},xdb=function(a){this.F=a||10;
g.D.PerformanceNavigationTiming?(a=g.D.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.D.chrome&&g.D.chrome.loadTimes&&g.D.chrome.loadTimes()&&g.D.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.F:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},ydb=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},rdb=function(a){return a.u?1:a.j?a.j.size:0},pdb=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},sdb=function(a,
b){a.j?a.j.add(b):a.u=b},udb=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},zdb=function(a){if(null!=a.u)return a.B.concat(a.u.oa);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.t(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.oa);return b}return g.fc(a.B)},Adb=function(a,b){var c=new ddb;
if(g.D.Image){var d=new Image;d.onload=g.Ra(C8,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Ra(C8,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Ra(C8,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Ra(C8,c,d,"TestLoadImage: timeout",!1,b);g.D.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},C8=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},Bdb=function(){this.j=new o8},Cdb=function(a,b,c){var d=c||"";
try{g.Ej(a,function(e,f){var h=e;g.Na(e)&&(h=g.ii(e));b.push(d+f+"="+encodeURIComponent(h))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},D8=function(a,b,c){return c&&c.F_?c.F_[a]||b:b},Ddb=function(a){this.B=[];
this.Ac=this.zd=this.La=this.Bc=this.j=this.Kd=this.Ba=this.Ia=this.J=this.Nb=this.Z=null;this.Je=this.Ya=0;this.He=D8("failFast",!1,a);this.ob=this.ea=this.S=this.I=this.F=null;this.Dc=!0;this.Cd=this.Ta=-1;this.kc=this.oa=this.ya=0;this.Ge=D8("baseRetryDelayMs",5E3,a);this.Ue=D8("retryDelaySeedMs",1E4,a);this.Ie=D8("forwardChannelMaxRetries",2,a);this.Bd=D8("forwardChannelRequestTimeoutMs",2E4,a);this.Xd=a&&a.V8a||void 0;this.Qd=a&&a.T8a||!1;this.eb=void 0;this.Qa=a&&a.Y5||!1;this.C="";this.u=new xdb(a&&
a.C7a);this.ze=new Bdb;this.Ab=a&&a.Q7a||!1;this.tb=a&&a.I7a||!1;this.Ab&&this.tb&&(this.tb=!1);this.Of=a&&a.x7a||!1;a&&a.S7a&&(this.Dc=!1);this.md=!this.Ab&&this.Dc&&a&&a.G7a||!1;this.Qc=void 0;this.td=0;this.jb=!1;this.Wb=this.Aa=null},z8=function(a){a.j&&(Edb(a),a.j.cancel(),a.j=null)},Fdb=function(a){z8(a);
a.S&&(g.D.clearTimeout(a.S),a.S=null);y8(a);a.u.cancel();a.I&&("number"===typeof a.I&&g.D.clearTimeout(a.I),a.I=null)},B8=function(a){ydb(a.u)||a.I||(a.I=!0,g.Fh(a.cN,a),a.ya=0)},Hdb=function(a,b){if(rdb(a.u)>=a.u.C-(a.I?1:0))return!1;
if(a.I)return a.B=b.oa.concat(a.B),!0;if(1==a.xg||2==a.xg||a.ya>=(a.He?0:a.Ie))return!1;a.I=r8((0,g.Qa)(a.cN,a,b),Gdb(a,a.ya));a.ya++;return!0},Jdb=function(a,b){var c;
b?c=b.Dc:c=a.Ya++;var d=a.La.clone();g.Pj(d,"SID",a.C);g.Pj(d,"RID",c);g.Pj(d,"AID",a.Ta);E8(a,d);a.J&&a.Z&&g.Tj(d,a.J,a.Z);c=new s8(a,a.C,c,a.ya+1);null===a.J&&(c.La=a.Z);b&&(a.B=b.oa.concat(a.B));b=Idb(a,c,1E3);c.setTimeout(Math.round(.5*a.Bd)+Math.round(.5*a.Bd*Math.random()));sdb(a.u,c);gdb(c,d,b)},E8=function(a,b){a.Ia&&g.pf(a.Ia,function(c,d){g.Pj(b,d,c)});
a.F&&g.Ej({},function(c,d){g.Pj(b,d,c)})},Idb=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.F?(0,g.Qa)(a.F.IV,a.F,a):null;a:for(var e=a.B,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].j,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{Cdb(p,h,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=h.join("&");break a}}a=a.B.splice(0,c);b.oa=a;return d},vdb=function(a){a.j||a.S||(a.kc=1,g.Fh(a.bN,a),a.oa=0)},qdb=function(a){if(a.j||a.S||3<=a.oa)return!1;
a.kc++;a.S=r8((0,g.Qa)(a.bN,a),Gdb(a,a.oa));a.oa++;return!0},Edb=function(a){null!=a.Aa&&(g.D.clearTimeout(a.Aa),a.Aa=null)},Kdb=function(a){a.j=new s8(a,a.C,"rpc",a.kc);
null===a.J&&(a.j.La=a.Z);a.j.tb=0;var b=a.zd.clone();g.Pj(b,"RID","rpc");g.Pj(b,"SID",a.C);g.Pj(b,"CI",a.ob?"0":"1");g.Pj(b,"AID",a.Ta);g.Pj(b,"TYPE","xmlhttp");E8(a,b);a.J&&a.Z&&g.Tj(b,a.J,a.Z);a.eb&&a.j.setTimeout(a.eb);var c=a.j;a=a.Ac;c.Qa=1;c.J=Y7(b.clone());c.S=null;c.Ba=!0;fdb(c,a)},y8=function(a){null!=a.ea&&(g.D.clearTimeout(a.ea),a.ea=null)},odb=function(a,b){var c=null;
if(a.j==b){y8(a);Edb(a);a.j=null;var d=2}else if(pdb(a.u,b))c=b.oa,udb(a.u,b),d=1;else return;if(0!=a.xg)if(b.B)if(1==d){c=b.S?b.S.length:0;b=Date.now()-b.ya;var e=a.ya;d=$cb();d.dispatchEvent(new cdb(d,c,b,e));B8(a)}else vdb(a);else{var f=b.Wb;e=b.getLastError();if(3==e||0==e&&0<f||!(1==d&&Hdb(a,b)||2==d&&qdb(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:A8(a,5);break;case 4:A8(a,10);break;case 3:A8(a,6);break;default:A8(a,2)}}},Gdb=function(a,b){var c=a.Ge+Math.floor(Math.random()*
a.Ue);
a.isActive()||(c*=2);return c*b},A8=function(a,b){if(2==b){var c=null;
a.F&&(c=null);var d=(0,g.Qa)(a.h6,a);c||(c=new g.Fj("//web.archive.org/web/20221001000539/https://www.google.com/images/cleardot.gif"),g.D.location&&"http"==g.D.location.protocol||g.Gj(c,"https"),Y7(c));Adb(c.toString(),d)}else q8(2);a.xg=0;a.F&&a.F.eN(b);Ldb(a);Fdb(a)},Ldb=function(a){a.xg=0;
a.Wb=[];if(a.F){var b=zdb(a.u);if(0!=b.length||0!=a.B.length)g.gc(a.Wb,b),g.gc(a.Wb,a.B),a.u.B.length=0,g.fc(a.B),a.B.length=0;a.F.dN()}},Mdb=function(a){if(0==a.xg)return a.Wb;
var b=[];g.gc(b,zdb(a.u));g.gc(b,a.B);return b},tdb=function(a,b,c){var d=g.Qj(c);
""!=d.j?(b&&g.Hj(d,b+"."+d.j),g.Ij(d,d.B)):(d=g.D.location,d=ecb(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.Ba;c=a.Kd;b&&c&&g.Pj(d,b,c);g.Pj(d,"VER",a.aN);E8(a,d);return d},hdb=function(a,b,c){if(b&&!a.Qa)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.Qd&&!a.Xd?new g.Di(new g.Aj({zT:!0})):new g.Di(a.Xd);b.J=a.Qa;return b},Ndb=function(){},Odb=function(){if(g.Fc&&!g.Cc(10))throw Error("Environmental error: no available transport.");
},G8=function(a,b){g.$f.call(this);
this.j=new Ddb(b);this.I=a;this.u=b&&b.q0||null;a=b&&b.o0||null;b&&b.B7a&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.Z=a;a=b&&b.W7a||null;b&&b.hR&&(a?a["X-WebChannel-Content-Type"]=b.hR:a={"X-WebChannel-Content-Type":b.hR});b&&b.dP&&(a?a["X-WebChannel-Client-Profile"]=b.dP:a={"X-WebChannel-Client-Profile":b.dP});this.j.Nb=a;(a=b&&b.U7a)&&!g.eb(a)&&(this.j.J=a);this.J=b&&b.Y5||!1;this.F=b&&b.F8a||!1;(b=b&&b.w_)&&!g.eb(b)&&(this.j.Ba=b,g.wf(this.u,b)&&g.Df(this.u,
b));this.C=new F8(this)},Pdb=function(a){Xcb.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.tf(b))?g.Ef(b,this.metadataKey):b:this.data=a},Qdb=function(a){Ycb.call(this);
this.status=1;this.errorCode=a},F8=function(a){this.j=a},Rdb=function(a,b){this.u=a;
this.j=b},Sdb=function(a){return Mdb(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.F?dcb(b):b);return b})},H8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.D.setTimeout(function(){a()},b)},J8=function(a){I8.dispatchEvent(new Tdb(I8,a))},Tdb=function(a,b){g.bf.call(this,"statevent",a);
this.stat=b},K8=function(a,b,c,d){this.j=a;
this.C=b;this.J=c;this.I=d||1;this.u=45E3;this.B=new g.Uj(this);this.F=new g.Rh;this.F.setInterval(250)},Vdb=function(a,b,c){a.Tu=1;
a.wp=Y7(b.clone());a.Nr=c;a.Ba=!0;Udb(a,null)},Wdb=function(a,b,c,d,e){a.Tu=1;
a.wp=Y7(b.clone());a.Nr=null;a.Ba=c;e&&(a.jT=!1);Udb(a,d)},Udb=function(a,b){a.Su=Date.now();
L8(a);a.yp=a.wp.clone();Z7(a.yp,"t",a.I);a.LB=0;a.Sh=a.j.cG(a.j.jy()?b:null);0<a.aG&&(a.JB=new n8((0,g.Qa)(a.hN,a,a.Sh),a.aG));a.B.Ra(a.Sh,"readystatechange",a.KV);b=a.Mr?g.Gf(a.Mr):{};a.Nr?(a.KB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Sh.send(a.yp,a.KB,a.Nr,b)):(a.KB="GET",a.jT&&!g.lf&&(b.Connection="close"),a.Sh.send(a.yp,a.KB,null,b));a.j.Kl(1)},Zdb=function(a,b){var c=a.LB,d=b.indexOf("\n",c);
if(-1==d)return Xdb;c=Number(b.substring(c,d));if(isNaN(c))return Ydb;d+=1;if(d+c>b.length)return Xdb;b=b.slice(d,d+c);a.LB=d+c;return b},aeb=function(a,b){a.Su=Date.now();
L8(a);var c=b?window.location.hostname:"";a.yp=a.wp.clone();g.Pj(a.yp,"DOMAIN",c);g.Pj(a.yp,"t",a.I);try{a.Ul=new ActiveXObject("htmlfile")}catch(m){M8(a);a.xp=7;J8(22);N8(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in O8)f=O8[f];else if(f in $db)f=O8[f]=$db[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
O8[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Fg(g.kg("b/12014412"),d);a.Ul.open();a.Ul.write(g.Dg(c));a.Ul.close();a.Ul.parentWindow.m=(0,g.Qa)(a.X3,a);a.Ul.parentWindow.d=(0,g.Qa)(a.oS,a,!0);a.Ul.parentWindow.rpcClose=(0,g.Qa)(a.oS,a,!1);c=a.Ul.createElement("DIV");a.Ul.parentWindow.document.body.appendChild(c);d=g.wg(a.yp.toString());d=g.Xg(g.pg(d));d=g.Fg(g.kg("b/12014412"),'<iframe src="'+d+'"></iframe>');g.sda(c,d);a.j.Kl(1)},L8=function(a){a.bG=
Date.now()+a.u;
beb(a,a.u)},beb=function(a,b){if(null!=a.Uu)throw Error("WatchDog timer not null");
a.Uu=H8((0,g.Qa)(a.JV,a),b)},ceb=function(a){a.Uu&&(g.D.clearTimeout(a.Uu),a.Uu=null)},N8=function(a){a.j.Zf()||a.Lr||a.j.MB(a)},M8=function(a){ceb(a);
g.Ze(a.JB);a.JB=null;a.F.stop();g.Vj(a.B);if(a.Sh){var b=a.Sh;a.Sh=null;b.abort();b.dispose()}a.Ul&&(a.Ul=null)},deb=function(a,b){try{a.j.iN(a,b),a.j.Kl(4)}catch(c){}},feb=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;eeb(a,b,function(h){h?c(!0):g.D.setTimeout(function(){feb(a,b,c,d,f)},f)})}},eeb=function(a,b,c){var d=new Image;
d.onload=function(){try{P8(d),c(!0)}catch(e){}};
d.onerror=function(){try{P8(d),c(!1)}catch(e){}};
d.onabort=function(){try{P8(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{P8(d),c(!1)}catch(e){}};
g.D.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},P8=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},geb=function(a){this.j=a;
this.u=new o8},heb=function(a){var b=Q8(a.j,a.Ky,"/mail/images/cleardot.gif");
Y7(b);feb(b.toString(),5E3,(0,g.Qa)(a.BY,a),3,2E3);a.Kl(1)},ieb=function(a){var b=a.j.Z;
if(null!=b)J8(5),b?(J8(11),R8(a.j,a,!1)):(J8(12),R8(a.j,a,!0));else if(a.Ji=new K8(a),a.Ji.Mr=a.dG,b=a.j,b=Q8(b,b.jy()?a.iy:null,a.eG),J8(5),!g.Fc||g.Cc(10))Z7(b,"TYPE","xmlhttp"),Wdb(a.Ji,b,!1,a.iy,!1);else{Z7(b,"TYPE","html");var c=a.Ji;a=!!a.iy;c.Tu=3;c.wp=Y7(b.clone());aeb(c,a)}},jeb=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.F=new o8;this.S=a||null;this.Z=null!=b?b:null;this.J=c||!1},keb=function(a,b){this.j=a;
this.map=b;this.context=null},leb=function(a,b,c,d){g.bf.call(this,"timingevent",a);
this.size=b;this.nx=d},meb=function(a){g.bf.call(this,"serverreachability",a)},oeb=function(a){a.LV(1,0);
a.NB=Q8(a,null,a.fG);neb(a)},peb=function(a){a.Op&&(a.Op.abort(),a.Op=null);
a.Nf&&(a.Nf.cancel(),a.Nf=null);a.Xn&&(g.D.clearTimeout(a.Xn),a.Xn=null);S8(a);a.Si&&(a.Si.cancel(),a.Si=null);a.zp&&(g.D.clearTimeout(a.zp),a.zp=null)},qeb=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new keb(a.MV++,b));2!=a.j&&3!=a.j||neb(a)},reb=function(a){var b=0;
a.Nf&&b++;a.Si&&b++;return b},neb=function(a){a.Si||a.zp||(a.zp=H8((0,g.Qa)(a.mN,a),0),a.Wu=0)},ueb=function(a,b){if(1==a.j){if(!b){a.oy=Math.floor(1E5*Math.random());
b=a.oy++;var c=new K8(a,"",b);c.Mr=a.Zl;var d=seb(a),e=a.NB.clone();g.Pj(e,"RID",b);g.Pj(e,"CVER","1");T8(a,e);Vdb(c,e,d);a.Si=c;a.j=2}}else 3==a.j&&(b?teb(a,b):0==a.u.length||a.Si||teb(a))},teb=function(a,b){if(b)if(6<a.Or){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.oy-1;b=seb(a)}else c=b.J,b=b.Nr;else c=a.oy++,b=seb(a);var d=a.NB.clone();g.Pj(d,"SID",a.C);g.Pj(d,"RID",c);g.Pj(d,"AID",a.Xu);T8(a,d);c=new K8(a,a.C,c,a.Wu+1);c.Mr=a.Zl;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Si=c;Vdb(c,d,b)},T8=function(a,b){a.Ah&&(a=a.Ah.qN())&&g.pf(a,function(c,d){g.Pj(b,d,c)})},seb=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Or&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Iu:e.Iu},f++){e.Iu=a.u[f].j;var h=a.u[f].map;e.Iu=6>=a.Or?f:e.Iu-d;try{g.pf(h,function(l){return function(m,n){c.push("req"+l.Iu+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Iu+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},veb=function(a){a.Nf||a.Xn||(a.I=1,a.Xn=H8((0,g.Qa)(a.lN,a),0),a.Vu=0)},xeb=function(a){if(a.Nf||a.Xn||3<=a.Vu)return!1;
a.I++;a.Xn=H8((0,g.Qa)(a.lN,a),web(a,a.Vu));a.Vu++;return!0},R8=function(a,b,c){a.vF=c;
a.cm=b.Wn;a.J||oeb(a)},S8=function(a){null!=a.Pr&&(g.D.clearTimeout(a.Pr),a.Pr=null)},web=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},U8=function(a,b){if(2==b||9==b){var c=null;
a.Ah&&(c=null);var d=(0,g.Qa)(a.g6,a);c||(c=new g.Fj("//web.archive.org/web/20221001000539/https://www.google.com/images/cleardot.gif"),Y7(c));eeb(c.toString(),1E4,d)}else J8(2);yeb(a,b)},yeb=function(a,b){a.j=0;
a.Ah&&a.Ah.nN(b);zeb(a);peb(a)},zeb=function(a){a.j=0;
a.cm=-1;if(a.Ah)if(0==a.B.length&&0==a.u.length)a.Ah.gG();else{var b=g.fc(a.B),c=g.fc(a.u);a.B.length=0;a.u.length=0;a.Ah.gG(b,c)}},Q8=function(a,b,c){var d=g.Qj(c);
if(""!=d.j)b&&g.Hj(d,b+"."+d.j),g.Ij(d,d.B);else{var e=window.location;d=ecb(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.ly&&g.pf(a.ly,function(f,h){g.Pj(d,h,f)});
g.Pj(d,"VER",a.Or);T8(a,d);return d},Aeb=function(){},Beb=function(){this.j=[];
this.u=[]},Ceb=function(a){g.bf.call(this,"channelMessage");
this.message=a},Deb=function(a){g.bf.call(this,"channelError");
this.error=a},Eeb=function(a,b){this.action=a;
this.params=b||{}},V8=function(a,b){g.L.call(this);
this.j=new g.eo(this.P3,0,this);g.N(this,this.j);this.Fh=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Qa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Qa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},Feb=function(){},l8=function(){if(!W8){W8=new g.Uh(new Feb);
var a=g.mu("client_streamz_web_flush_count",-1);-1!==a&&(W8.C=a)}return W8},Geb=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ya=a;this.J=b;this.B=new g.Io;this.u=new V8(this.f5,this);this.j=null;this.ea=!1;this.I=null;this.Z="";this.S=this.F=0;this.C=[];this.Qa=c;this.oa=d;this.Ta=e;this.La=new Mcb;this.Aa=new Ocb;this.Ia=new Qcb;this.Ba=new Scb;this.Ya=new Ucb;this.eb=new Vcb},Heb=function(a){if(a.j){var b=a.oa(),c=a.j.Zl||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Zl=c}},X8=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.ri(4,a))||"";b&&(this.port=":"+b);this.domain=g.ti(a)||"";a=g.sb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.qb(a,"10.0")&&(this.u=!1))},Y8=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.zi(c+b,{})},Ieb=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ra(a.C,d,!0),onError:g.Ra(a.B,e),onTimeout:g.Ra(a.F,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Mu(b,a)},Jeb=function(a,b){g.$f.call(this);
var c=this;this.Zc=a();this.Zc.subscribe("handlerOpened",this.QV,this);this.Zc.subscribe("handlerClosed",this.OV,this);this.Zc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Zc.subscribe("handlerMessage",this.PV,this);this.j=b},Keb=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new Odb:e;var f=void 0===f?new g.Io:f;this.pathPrefix=a;this.j=b;this.ya=c;this.F=f;this.S=null;this.Z=this.J=0;this.channel=null;this.I=0;this.B=new V8(function(){d.B.isActive();var h;0===(null==(h=d.channel)?void 0:rdb((new Rdb(h,h.j)).j.u))&&d.connect(d.S,d.J)});
this.C={};this.u={};this.ea=!1;this.logger=null;this.oa=[];this.Og=void 0;this.La=new Mcb;this.Aa=new Ocb;this.Ia=new Qcb;this.Ba=new Scb},Leb=function(a){g.Nf(a.channel,"m",function(){a.I=3;
a.B.reset();a.S=null;a.J=0;for(var b=g.t(a.oa),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.oa=[];a.ma("webChannelOpened");Ncb(a.La,"WEB_CHANNEL")});
g.Nf(a.channel,"n",function(){a.I=0;a.B.isActive()||a.ma("webChannelClosed");var b,c=null==(b=a.channel)?void 0:Sdb(new Rdb(b,b.j));c&&(a.oa=[].concat(g.u(c)));Pcb(a.Aa,"WEB_CHANNEL")});
g.Nf(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.ma("webChannelMessage",new Eeb(c[0],c[1]));a.Og=b.statusCode;Rcb(a.Ia,"WEB_CHANNEL")});
g.Nf(a.channel,"o",function(){401===a.Og||a.B.start();a.ma("webChannelError");Tcb(a.Ba,"WEB_CHANNEL")})},Meb=function(a){var b=a.ya();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},Neb=function(a){g.$f.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.TV,this);this.j.subscribe("webChannelClosed",this.RV,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.SV,this)},Oeb=function(a,b,c,d,e){function f(){return new Geb(Y8(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.lu("enable_mdx_web_channel_desktop")?new Neb(function(){return new Keb(Y8(a,"/wc"),b,c)}):new Jeb(f,e)},Seb=function(){var a=Peb;
Qeb();Z8.push(a);Reb()},$8=function(a,b){Qeb();
var c=Teb(a,String(b));g.Zb(Z8)?Ueb(c):(Reb(),g.uc(Z8,function(d){d(c)}))},a9=function(a){$8("CP",a)},Qeb=function(){Z8||(Z8=g.Ia("yt.mdx.remote.debug.handlers_")||[],g.Ha("yt.mdx.remote.debug.handlers_",Z8))},Ueb=function(a){var b=(b9+1)%50;
b9=b;c9[b]=a;d9||(d9=49==b)},Reb=function(){var a=Z8;
if(c9[0]){var b=d9?b9:-1;do{b=(b+1)%50;var c=c9[b];g.uc(a,function(d){d(c)})}while(b!=b9);
c9=Array(50);b9=-1;d9=!1}},Teb=function(a,b){var c=(Date.now()-Veb)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},e9=function(a){g.bz.call(this);
this.I=a;this.screens=[]},Web=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},Xeb=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Dm(a.screens,function(f){return!!ocb(b,f)});
for(var d=0,e=b.length;d<e;d++)c=Web(a,b[d])||c;return c},Yeb=function(a,b){var c=a.screens.length;
a.screens=g.Dm(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},Zeb=function(a,b,c,d,e){g.bz.call(this);
this.B=a;this.J=b;this.C=c;this.I=d;this.F=e;this.u=0;this.j=null;this.yc=NaN},g9=function(a){e9.call(this,"LocalScreenService");
this.u=a;this.j=NaN;f9(this);this.info("Initializing with "+lcb(this.screens))},$eb=function(a){if(a.screens.length){var b=g.Uk(a.screens,function(d){return d.id}),c=Y8(a.u,"/pairing/get_lounge_token_batch");
Ieb(a.u,c,{screen_ids:b.join(",")},(0,g.Qa)(a.XZ,a),(0,g.Qa)(a.WZ,a))}},f9=function(a){if(g.lu("deprecate_pair_servlet_enabled"))return Xeb(a,[]);
var b=kcb(vcb());b=g.Dm(b,function(c){return!c.uuid});
return Xeb(a,b)},h9=function(a,b){xcb(g.Uk(a.screens,icb));
b&&wcb()},bfb=function(a,b){g.bz.call(this);
this.I=b;b=(b=g.Nz("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=d.length,f=0;f<e;++f){var h=d[f].id;c[h]=g.Xb(b,h)}this.j=c;this.F=a;this.B=this.C=NaN;this.u=null;afb("Initialized with "+g.ii(this.j))},cfb=function(a,b,c){var d=Y8(a.F,"/pairing/get_screen_availability");
Ieb(a.F,d,{lounge_token:b.token},(0,g.Qa)(function(e){e=e.screens||[];for(var f=e.length,h=0;h<f;++h)if(e[h].loungeToken==b.token){c("online"==e[h].status);return}c(!1)},a),(0,g.Qa)(function(){c(!1)},a))},efb=function(a,b){a:if(bcb(b)!=bcb(a.j))var c=!1;
else{c=g.vf(b);for(var d=c.length,e=0;e<d;++e)if(!a.j[c[e]]){c=!1;break a}c=!0}c||(afb("Updated online screens: "+g.ii(a.j)),a.j=b,a.ma("screenChange"));dfb(a)},i9=function(a){isNaN(a.B)||g.Ju(a.B);
a.B=g.Hu((0,g.Qa)(a.bL,a),0<a.C&&a.C<g.Sa()?2E4:1E4)},afb=function(a){$8("OnlineScreenService",a)},ffb=function(a){var b={};
g.uc(a.I(),function(c){c.token?b[c.token]=c.id:this.qf("Requesting availability of screen w/o lounge token.")});
return b},dfb=function(a){a=g.vf(g.qf(a.j,function(b){return b}));
g.rc(a);a.length?g.Mz("yt-remote-online-screen-ids",a.join(","),60):g.Oz("yt-remote-online-screen-ids")},j9=function(a,b){b=void 0===b?!1:b;
e9.call(this,"ScreenService");this.C=a;this.J=b;this.j=this.u=null;this.B=[];this.F={};gfb(this)},ifb=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.F[b]);var h=a.Ej(),l=c?f8(h,c):null;c&&(a.J||l)||(l=f8(h,b));if(l){l.uuid=b;var m=k9(a,l);cfb(a.j,m,function(n){e(n?m:null)})}else c?hfb(a,c,(0,g.Qa)(function(n){var p=k9(this,new c8({name:d,
screenId:c,loungeToken:n,dialId:b||""}));cfb(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},jfb=function(a,b){for(var c=a.screens.length,d=0;d<c;++d)if(a.screens[d].name==b)return a.screens[d];
return null},kfb=function(a,b,c){cfb(a.j,b,c)},hfb=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Mu(Y8(a.C,"/pairing/get_lounge_token_batch"),e)},lfb=function(a){a.screens=a.u.Ej();
var b=a.F,c={},d;for(d in b)c[b[d]]=d;b=a.screens.length;for(d=0;d<b;++d){var e=a.screens[d];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+lcb(a.screens))},gfb=function(a){mfb(a);
a.u=new g9(a.C);a.u.subscribe("screenChange",(0,g.Qa)(a.g_,a));lfb(a);a.J||(a.B=kcb(g.Nz("yt-remote-automatic-screen-cache")||[]));mfb(a);a.info("Initializing automatic screens: "+lcb(a.B));a.j=new bfb(a.C,(0,g.Qa)(a.Ej,a,!0));a.j.subscribe("screenChange",(0,g.Qa)(function(){this.ma("onlineScreenChange")},a))},k9=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=f8(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.J||nfb(a));mfb(a);a.F[b.uuid]=b.id;g.Mz("yt-remote-device-id-map",a.F,31536E3);return b},nfb=function(a){a=g.Dm(a.B,function(b){return"shortLived"!=b.idType});
g.Mz("yt-remote-automatic-screen-cache",g.Uk(a,icb))},mfb=function(a){a.F=g.Nz("yt-remote-device-id-map")||{}},l9=function(a,b,c){g.bz.call(this);
this.Ba=c;this.B=a;this.j=b;this.C=null},m9=function(a,b){a.C=b;
a.ma("sessionScreen",a.C)},ofb=function(a,b){a.C&&(a.C.token=b,k9(a.B,a.C));
a.ma("sessionScreen",a.C)},n9=function(a,b){$8(a.Ba,b)},o9=function(a,b,c){l9.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.oa=(0,g.Qa)(this.YV,this);this.Aa=(0,g.Qa)(this.i4,this);this.ea=g.Hu(function(){pfb(d,null)},12E4);
this.J=this.F=this.I=this.S=0;this.ya=!1;this.Z="unknown"},rfb=function(a,b){g.Ju(a.J);
a.J=0;0==b?qfb(a):a.J=g.Hu(function(){qfb(a)},b)},qfb=function(a){sfb(a,"getLoungeToken");
g.Ju(a.F);a.F=g.Hu(function(){tfb(a,null)},3E4)},sfb=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.ii());
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Qa)(function(){n9(this,"Failed to send message: "+b+".")},a)):n9(a,"Sending yt message without session: "+g.ii(c))},ufb=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.XP(b,function(c){m9(a,c)},function(){return a.zi()},5)):a.zi(Error("Waiting for session status timed out."))},wfb=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new c8(b);vfb(a,d,function(e){e?(a.ya=!0,k9(a.B,d),m9(a,d),a.Z="unknown",rfb(a,c)):(g.qu(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.zi())},5)},pfb=function(a,b){g.Ju(a.ea);
a.ea=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?wfb(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.qu(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),ufb(a,b.screenId))):(g.qu(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),ufb(a,b.screenId)):ufb(a,b.screenId):a.zi(Error("Waiting for session status timed out."))},tfb=function(a,b){g.Ju(a.F);
a.F=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.Z=c,rfb(a,3E4)):(ofb(a,b.loungeToken),a.ya=!1,a.Z="unknown",rfb(a,b.loungeTokenRefreshIntervalMs))},vfb=function(a,b,c,d){g.Ju(a.I);
a.I=0;kfb(a.B,b,function(e){e||0>d?c(e):a.I=g.Hu(function(){vfb(a,b,c,d-1)},300)})},xfb=function(a){g.Ju(a.S);
a.S=0;g.Ju(a.I);a.I=0;g.Ju(a.ea);a.ea=0;g.Ju(a.F);a.F=0;g.Ju(a.J);a.J=0},p9=function(a,b,c,d){l9.call(this,a,b,"DialSession");
this.config_=d;this.u=this.S=null;this.Aa="";this.Qa=c;this.La=null;this.ea=function(){};
this.Z=NaN;this.Ia=(0,g.Qa)(this.ZV,this);this.F=function(){};
this.J=this.I=0;this.oa=!1;this.ya="unknown"},q9=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},yfb=function(a){a.F=a.B.sN(a.Aa,a.j.label,a.j.friendlyName,q9(a),function(b,c){a.F=function(){};
a.oa=!0;m9(a,b);"shortLived"==b.idType&&0<c&&r9(a,c)},function(b){a.F=function(){};
a.zi(b)})},zfb=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.Qa;zcb()&&(b.env_useStageMdx=1);return g.xi(b)},Afb=function(a){return new Promise(function(b){a.Aa=mcb();
if(a.La){var c=new chrome.cast.DialLaunchResponse(!0,zfb(a));b(c);yfb(a)}else a.ea=function(){g.Ju(a.Z);a.ea=function(){};
a.Z=NaN;var d=new chrome.cast.DialLaunchResponse(!0,zfb(a));b(d);yfb(a)},a.Z=g.Hu(function(){a.ea()},100)})},Cfb=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new c8(b);return(new Promise(function(e){Bfb(a,d,function(f){f?(a.oa=!0,k9(a.B,d),m9(a,d),r9(a,c)):g.qu(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):Afb(a)})},Dfb=function(a,b){var c=a.S.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){ifb(a.B,c,b,d,function(f){f&&f.token&&m9(a,f);e(f)},function(f){n9(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):Afb(a)})},Bfb=function(a,b,c,d){g.Ju(a.I);
a.I=0;kfb(a.B,b,function(e){e||0>d?c(e):a.I=g.Hu(function(){Bfb(a,b,c,d-1)},300)})},r9=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
q9(a)&&(g.Ju(a.J),a.J=0,0==b?Efb(a):a.J=g.Hu(function(){Efb(a)},b))},Efb=function(a){q9(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ya=c,r9(a,3E4)):(a.oa=!1,a.ya="unknown",ofb(a,b.loungeToken),r9(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ya="noLoungeTokenResponse";r9(a,3E4)})},Ffb=function(a){g.Ju(a.I);
a.I=0;g.Ju(a.J);a.J=0;a.F();a.F=function(){};
g.Ju(a.Z)},s9=function(a,b){l9.call(this,a,b,"ManualSession");
this.u=g.Hu((0,g.Qa)(this.Ow,this,null),150)},t9=function(a,b){g.bz.call(this);
this.config_=b;this.u=a;this.S=b.appId||"233637DE";this.C=b.theme||"cl";this.Z=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.j=null;this.J=!1;this.B=[];this.F=(0,g.Qa)(this.Y2,this)},Gfb=function(a,b){return b?g.Vb(a.B,function(c){return d8(b,c.label)},a):null},u9=function(a){$8("Controller",a)},Peb=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},v9=function(a){return a.J||!!a.B.length||!!a.j},w9=function(a,b,c){b!=a.j&&(g.Ze(a.j),(a.j=b)?(c?a.ma("yt-remote-cast2-receiver-resumed",
b.j):a.ma("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Qa)(a.mS,a,b)),b.subscribe("sessionFailed",function(){return Hfb(a,b)}),b.getScreen()?a.ma("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Ow(null)):a.ma("yt-remote-cast2-session-change",null))},Hfb=function(a,b){a.j==b&&a.ma("yt-remote-cast2-session-failed")},Ifb=function(a){var b=a.u.rN(),c=a.j&&a.j.j;
a=g.Uk(b,function(d){c&&d8(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Gfb(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Pfb=function(a,b,c,d){d.disableCastApi?x9("Cannot initialize because disabled by Mdx config."):Jfb()?Kfb(b,d)&&(Lfb(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Mfb(a,c):(window.__onGCastApiAvailable=function(e,f){e?Mfb(a,c):(y9("Failed to load cast API: "+f),Nfb(!1),Lfb(!1),g.Oz("yt-remote-cast-available"),g.Oz("yt-remote-cast-receiver"),
Ofb(),c(!1))},d.loadCastApiSetupScript?g.Qz("https://web.archive.org/web/20221001000539/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=Acb()&&Jcb():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?Ecb():89<=Acb()?Lcb():(Icb(),k8(Kcb.map(Fcb))))):x9("Cannot initialize because not running Chrome")},Ofb=function(){x9("dispose");
var a=z9();a&&a.dispose();g.Ha("yt.mdx.remote.cloudview.instance_",null);Qfb(!1);g.Px(Rfb);Rfb.length=0},A9=function(){return!!g.Nz("yt-remote-cast-installed")},Sfb=function(){var a=g.Nz("yt-remote-cast-receiver");
return a?a.friendlyName:null},Tfb=function(){x9("clearCurrentReceiver");
g.Oz("yt-remote-cast-receiver")},Ufb=function(){return A9()?z9()?z9().getCastSession():(y9("getCastSelector: Cast is not initialized."),null):(y9("getCastSelector: Cast API is not installed!"),null)},Vfb=function(){A9()?z9()?B9()?(x9("Requesting cast selector."),z9().requestSession()):(x9("Wait for cast API to be ready to request the session."),Rfb.push(g.Ox("yt-remote-cast2-api-ready",Vfb))):y9("requestCastSelector: Cast is not initialized."):y9("requestCastSelector: Cast API is not installed!")},
C9=function(a,b){B9()?z9().setConnectedScreenStatus(a,b):y9("setConnectedScreenStatus called before ready.")},Jfb=function(){var a=0<=g.sb().search(/ (CrMo|Chrome|CriOS)\//);
return g.eE||a},Wfb=function(a,b){z9().init(a,b)},Kfb=function(a,b){var c=!1;
z9()||(a=new t9(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Mz("yt-remote-cast-available",d);a8("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){x9("onReceiverSelected: "+d.friendlyName);
g.Mz("yt-remote-cast-receiver",d);a8("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){x9("onReceiverResumed: "+d.friendlyName);
g.Mz("yt-remote-cast-receiver",d);a8("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){x9("onSessionChange: "+e8(d));
d||g.Oz("yt-remote-cast-receiver");a8("yt-remote-cast2-session-change",d)}),g.Ha("yt.mdx.remote.cloudview.instance_",a),c=!0);
x9("cloudview.createSingleton_: "+c);return c},z9=function(){return g.Ia("yt.mdx.remote.cloudview.instance_")},Mfb=function(a,b){Nfb(!0);
Lfb(!1);Wfb(a,function(c){c?(Qfb(!0),g.Qx("yt-remote-cast2-api-ready")):(y9("Failed to initialize cast API."),Nfb(!1),g.Oz("yt-remote-cast-available"),g.Oz("yt-remote-cast-receiver"),Ofb());b(c)})},x9=function(a){$8("cloudview",a)},y9=function(a){$8("cloudview",a)},Nfb=function(a){x9("setCastInstalled_ "+a);
g.Mz("yt-remote-cast-installed",a)},B9=function(){return!!g.Ia("yt.mdx.remote.cloudview.apiReady_")},Qfb=function(a){x9("setApiReady_ "+a);
g.Ha("yt.mdx.remote.cloudview.apiReady_",a)},Lfb=function(a){g.Ha("yt.mdx.remote.cloudview.initializing_",a)},D9=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.cn=!1;this.S=this.F=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},Xfb=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.cn=!1;a.hasNext=!1;a.J=0;a.I=g.Sa();a.C=0;a.j=0;a.F=0;a.S=0;a.B=NaN;a.u=!1},E9=function(a){return a.Sc()?(g.Sa()-a.I)/1E3:0},F9=function(a,b){a.J=b;
a.I=g.Sa()},G9=function(a){switch(a.playerState){case 1:case 1081:return(g.Sa()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},H9=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&Xfb(a)},Yfb=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Hf(a.trackData);b.hasPrevious=a.cn;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.F;b.loadedTime=a.S;b.liveIngestionTime=a.B;return b},J9=function(a,b){g.bz.call(this);
this.B=0;this.C=a;this.I=[];this.F=new Beb;this.u=this.j=null;this.Z=(0,g.Qa)(this.E1,this);this.J=(0,g.Qa)(this.rA,this);this.S=(0,g.Qa)(this.D1,this);this.ea=(0,g.Qa)(this.H1,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.vL,this),Zfb(this))):c=3;0!=c&&(b?this.vL(c):g.Hu((0,g.Qa)(function(){this.vL(c)},this),0));
(a=Ufb())&&I9(this,a);this.subscribe("yt-remote-cast2-session-change",this.ea)},K9=function(a){return new D9(a.C.getPlayerContextData())},Zfb=function(a){g.uc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Ra(this.W2,b),this))},a)},$fb=function(a){g.uc(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},L9=function(a){return 1==a.getState()},M9=function(a,b){var c=a.F;
50>c.j.length+c.u.length&&a.F.u.push(b)},agb=function(a,b,c){var d=K9(a);
F9(d,c);-1E3!=d.playerState&&(d.playerState=b);N9(a,d)},O9=function(a,b,c){a.C.sendMessage(b,c)},N9=function(a,b){$fb(a);
a.C.setPlayerContextData(Yfb(b));Zfb(a)},I9=function(a,b){a.u&&(a.u.removeUpdateListener(a.Z),a.u.removeMediaListener(a.J),a.rA(null));
a.u=b;a.u&&(a9("Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.Z),a.u.addMediaListener(a.J),a.u.media.length&&a.rA(a.u.media[0]))},bgb=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=K9(a);b.contentId!=d.videoId&&a9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;F9(d,a.j.getEstimatedTime());N9(a,d)}else a9("No cast media video. Ignoring state update.")},P9=function(a,b,c){return(0,g.Qa)(function(d){this.qf("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.qf("Retrying "+b+" using MDx browser channel."),O9(this,b,c))},a)},S9=function(a,b,c,d){d=void 0===d?!1:d;
g.bz.call(this);var e=this;this.I=NaN;this.Aa=!1;this.Z=this.S=this.oa=this.ya=NaN;this.ea=[];this.F=this.J=this.C=this.j=this.u=null;this.La=a;this.Ia=d;this.ea.push(g.ux(window,"beforeunload",function(){e.dw(2)}));
this.B=[];this.j=new D9;this.Qa=b.id;this.Ba=b.idType;this.u=Oeb(this.La,c,this.wN,"shortLived"==this.Ba,this.Qa);this.u.Ra("channelOpened",function(){cgb(e)});
this.u.Ra("channelClosed",function(){Q9("Channel closed");isNaN(e.I)?i8(!0):i8();e.dispose()});
this.u.Ra("channelError",function(f){i8();isNaN(e.zz())?(1==f&&"shortLived"==e.Ba&&e.ma("browserChannelAuthError",f),Q9("Channel error: "+f+" without reconnection"),e.dispose()):(e.Aa=!0,Q9("Channel error: "+f+" with reconnection in "+e.zz()+" ms"),R9(e,2))});
this.u.Ra("channelMessage",function(f){dgb(e,f)});
this.u.fp(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.Pz()&&g.Mz("yt-remote-session-video-id",f)})},egb=function(a){return g.Vb(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},Q9=function(a){$8("conn",a)},R9=function(a,b){a.ma("proxyStateChange",b)},fgb=function(a){a.I=g.Hu(function(){Q9("Connecting timeout");
a.dw(1)},2E4)},ggb=function(a){g.Ju(a.I);
a.I=NaN},igb=function(a){g.Ju(a.ya);
a.ya=NaN},kgb=function(a){jgb(a);
a.oa=g.Hu(function(){T9(a,"getNowPlaying")},2E4)},jgb=function(a){g.Ju(a.oa);
a.oa=NaN},cgb=function(a){Q9("Channel opened");
a.Aa&&(a.Aa=!1,igb(a),a.ya=g.Hu(function(){Q9("Timing out waiting for a screen.");a.dw(1)},15E3))},mgb=function(a,b){var c=null;
if(b){var d=egb(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ha("yt.mdx.remote.remoteClient_",c);b&&(ggb(a),igb(a));c=a.u.Hw()&&isNaN(a.I);b==c?b&&(R9(a,1),T9(a,"getSubtitlesTrack")):b?(a.WP()&&a.j.reset(),R9(a,1),T9(a,"getNowPlaying"),lgb(a)):a.dw(1)},ngb=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.Cf(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.ma("remotePlayerChange"))},ogb=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;H9(a.j,d,e);a.ma("remoteQueueChange",c)},qgb=function(a,b){b.params=b.params||{};
ogb(a,b,"NOW_PLAYING_MAY_CHANGE");pgb(a,b);a.ma("autoplayDismissed")},pgb=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
F9(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.S=isNaN(c)?0:c;a.j.Rj(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?kgb(a):jgb(a);a.ma("remotePlayerChange")},rgb=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);F9(a.j,isNaN(b)?0:b);a.ma("remotePlayerChange")}},sgb=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.ma("remotePlayerChange")},tgb=function(a,b){a.J=b.params.videoId;
a.ma("nowAutoplaying",parseInt(b.params.timeout,10))},ugb=function(a,b){a.J=b.params.videoId||null;
a.ma("autoplayUpNext",a.J)},vgb=function(a,b){a.F=b.params.autoplayMode;
a.ma("autoplayModeChange",a.F);"DISABLED"==a.F&&a.ma("autoplayDismissed")},wgb=function(a,b){var c="true"==b.params.hasNext;
a.j.cn="true"==b.params.hasPrevious;a.j.hasNext=c;a.ma("previousNextChange")},dgb=function(a,b){b=b.message;
b.params?Q9("Received: action="+b.action+", params="+g.ii(b.params)):Q9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=$7(b.params.devices);a.B=g.Uk(b,function(d){return new b8(d)});
b=!!g.Vb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
mgb(a,b);b=a.HQ("mlm");a.ma("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.dc(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
mgb(a,!1);break;case "remoteConnected":var c=new b8($7(b.params.device));g.Vb(a.B,function(d){return d.equals(c)})||acb(a.B,c);
break;case "remoteDisconnected":c=new b8($7(b.params.device));g.dc(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":ogb(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":qgb(a,b);break;case "onStateChange":pgb(a,b);break;case "onAdStateChange":rgb(a,b);break;case "onVolumeChanged":sgb(a,b);break;case "onSubtitlesTrackChanged":ngb(a,b);break;case "nowAutoplaying":tgb(a,b);break;case "autoplayDismissed":a.ma("autoplayDismissed");break;case "autoplayUpNext":ugb(a,b);break;case "onAutoplayModeChanged":vgb(a,b);break;case "onHasPreviousNextChanged":wgb(a,b);
break;case "requestAssistedSignIn":a.ma("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.ma("loopModeChange",b.params.loopMode);break;default:Q9("Unrecognized action: "+b.action)}},lgb=function(a){g.Ju(a.Z);
a.Z=g.Hu(function(){a.dw(1)},864E5)},T9=function(a,b,c){c?Q9("Sending: action="+b+", params="+g.ii(c)):Q9("Sending: action="+b);
a.u.sendMessage(b,c)},xgb=function(a){e9.call(this,"ScreenServiceProxy");
this.Yf=a;this.j=[];this.j.push(this.Yf.$_s("screenChange",(0,g.Qa)(this.dW,this)));this.j.push(this.Yf.$_s("onlineScreenChange",(0,g.Qa)(this.E2,this)))},Cgb=function(a,b){ycb();
if(!j8||!j8.get("yt-remote-disable-remote-module-for-dev")){b=g.P("MDX_CONFIG")||b;pcb();tcb();U9||(U9=new X8(b?b.loungeApiHost:void 0),zcb()&&(U9.j="/api/loungedev"));V9||(V9=g.Ia("yt.mdx.remote.deferredProxies_")||[],g.Ha("yt.mdx.remote.deferredProxies_",V9));ygb();var c=W9();if(!c){var d=new j9(U9,b?b.disableAutomaticScreenCache||!1:!1);g.Ha("yt.mdx.remote.screenService_",d);c=W9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ha("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);Pfb(a,d,function(f){f?X9()&&C9(X9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){a8("yt-remote-receiver-availability-change")})},e)}b&&!g.Ia("yt.mdx.remote.initialized_")&&(g.Ha("yt.mdx.remote.initialized_",!0),Y9("Initializing: "+g.ii(b)),
Z9.push(g.Ox("yt-remote-cast2-api-ready",function(){a8("yt-remote-api-ready")})),Z9.push(g.Ox("yt-remote-cast2-availability-change",function(){a8("yt-remote-receiver-availability-change")})),Z9.push(g.Ox("yt-remote-cast2-receiver-selected",function(){$9(null);
a8("yt-remote-auto-connect","cast-selector-receiver")})),Z9.push(g.Ox("yt-remote-cast2-receiver-resumed",function(){a8("yt-remote-receiver-resumed","cast-selector-receiver")})),Z9.push(g.Ox("yt-remote-cast2-session-change",zgb)),Z9.push(g.Ox("yt-remote-connection-change",function(f){f?C9(X9(),"YouTube TV"):a$()||(C9(null,null),Tfb())})),Z9.push(g.Ox("yt-remote-cast2-session-failed",function(){a8("yt-remote-connection-failed")})),a=Agb(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.lu("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),Y9(" -- with channel params: "+g.ii(a)),a?(g.Mz("yt-remote-session-app",a.app),g.Mz("yt-remote-session-name",a.name)):(g.Oz("yt-remote-session-app"),g.Oz("yt-remote-session-name")),g.Ha("yt.mdx.remote.channelParams_",a),c.start(),X9()||Bgb())}},Dgb=function(){var a=W9().Yf.$_gos();
var b=b$();b&&c$()&&(ocb(a,b)||a.push(b));return ncb(a)},Fgb=function(){var a=Egb();
!a&&A9()&&Sfb()&&(a={key:"cast-selector-receiver",name:Sfb()});return a},Egb=function(){var a=Dgb(),b=b$();
b||(b=a$());return g.Vb(a,function(c){return b&&d8(b,c.key)?!0:!1})},b$=function(){var a=X9();
if(!a)return null;var b=W9().Ej();return f8(b,a)},zgb=function(a){Y9("remote.onCastSessionChange_: "+e8(a));
if(a){var b=b$();if(b&&b.id==a.id){if(C9(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))d$&&(d$.token=a),(b=c$())&&b.fp(a)}else b&&e$(),f$(a,1)}else c$()&&e$()},e$=function(){B9()?z9().stopSession():y9("stopSession called before API ready.");
var a=c$();a&&(a.disconnect(1),Ggb(null))},Hgb=function(){var a=c$();
return!!a&&3!=a.getProxyState()},Y9=function(a){$8("remote",a)},W9=function(){if(!Igb){var a=g.Ia("yt.mdx.remote.screenService_");
Igb=a?new xgb(a):null}return Igb},X9=function(){return g.Ia("yt.mdx.remote.currentScreenId_")},Jgb=function(a){g.Ha("yt.mdx.remote.currentScreenId_",a)},Kgb=function(){return g.Ia("yt.mdx.remote.connectData_")},$9=function(a){g.Ha("yt.mdx.remote.connectData_",a)},c$=function(){return g.Ia("yt.mdx.remote.connection_")},Ggb=function(a){var b=c$();
$9(null);a||Jgb("");g.Ha("yt.mdx.remote.connection_",a);V9&&(g.uc(V9,function(c){c(a)}),V9.length=0);
b&&!a?a8("yt-remote-connection-change",!1):!b&&a&&a8("yt-remote-connection-change",!0)},a$=function(){var a=g.Pz();
if(!a)return null;var b=W9();if(!b)return null;b=b.Ej();return f8(b,a)},f$=function(a,b){X9();
b$()&&b$();if(g$)d$=a;else{Jgb(a.id);var c=g.Ia("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new S9(U9,a,Agb(),c);a.connect(b,Kgb());a.subscribe("beforeDisconnect",function(d){a8("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){c$()&&(c$(),Ggb(null))});
a.subscribe("browserChannelAuthError",function(){var d=b$();d&&"shortLived"==d.idType&&(B9()?z9().handleBrowserChannelAuthError():y9("refreshLoungeToken called before API ready."))});
Ggb(a)}},Bgb=function(){var a=a$();
a?(Y9("Resume connection to: "+e8(a)),f$(a,0)):(i8(),Tfb(),Y9("Skipping connecting because no session screen found."))},ygb=function(){var a=Agb();
if(g.Cf(a)){a=h8();var b=g.Nz("yt-remote-session-name")||"",c=g.Nz("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ha("yt.mdx.remote.channelParams_",a)}},Agb=function(){return g.Ia("yt.mdx.remote.channelParams_")||{}},Ngb=function(a,b,c){g.L.call(this);
var d=this;this.j=a;this.G=b;this.vc=c;this.events=new g.bE(this);this.ea=this.events.T(this.G,"onVolumeChange",function(e){Lgb(d,e)});
this.F=!1;this.I=new g.hK(64);this.u=new g.eo(this.wT,500,this);this.B=new g.eo(this.xT,1E3,this);this.S=new m8(this.M6,0,this);this.C={};this.Z=new g.eo(this.mU,1E3,this);this.J=new n8(this.seekTo,1E3,this);g.N(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.l2);this.events.T(b,"captionschanged",this.B1);this.events.T(b,"captionssettingschanged",this.FT);this.events.T(b,"videoplayerreset",this.mE);this.events.T(b,"mdxautoplaycancel",function(){d.vc.rP()});
b.N("enable_mdx_video_play_directly")&&this.events.T(b,"videodatachange",function(){Mgb(d.j)||h$(d)||i$(d,0)});
a=this.vc;a.isDisposed();a.subscribe("proxyStateChange",this.jS,this);a.subscribe("remotePlayerChange",this.wA,this);a.subscribe("remoteQueueChange",this.mE,this);a.subscribe("previousNextChange",this.gS,this);a.subscribe("nowAutoplaying",this.aS,this);a.subscribe("autoplayDismissed",this.BR,this);g.N(this,this.u);g.N(this,this.B);g.N(this,this.S);g.N(this,this.Z);g.N(this,this.J);this.FT();this.mE();this.wA()},Lgb=function(a,b){if(h$(a)){a.vc.unsubscribe("remotePlayerChange",a.wA,a);
var c=Math.round(b.volume);b=!!b.muted;var d=K9(a.vc);if(c!==d.volume||b!==d.muted)a.vc.setVolume(c,b),a.Z.start();a.vc.subscribe("remotePlayerChange",a.wA,a)}},Ogb=function(a){a.jc(0);
a.u.stop();a.Zb(new g.hK(64))},Pgb=function(a,b){if(h$(a)&&!a.F){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.If(c,b));a.vc.vN(a.G.getVideoData(1).videoId,c);a.C=K9(a.vc).trackData}},i$=function(a,b){var c=a.G.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.vc.playVideo(c.videoId,b,d,e,c.playerParams,c.La,$bb(c));a.Zb(new g.hK(1))},Qgb=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{yQ:1});
c&&c.length?(a.G.setOption("captions","track",b),a.F=!1):(a.G.loadModule("captions"),a.F=!0)}else a.G.setOption("captions","track",{})},h$=function(a){return K9(a.vc).videoId===a.G.getVideoData(1).videoId},j$=function(){g.X.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",X:{role:"dialog"},W:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",W:[{D:"div",K:"ytp-mdx-popup-title",qa:"You're signed out"},{D:"div",K:"ytp-mdx-popup-description",qa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",K:"ytp-mdx-privacy-popup-buttons",W:[{D:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-cancel"],qa:"Cancel"},{D:"button",Ga:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],qa:"Confirm"}]}]}]});this.j=new g.XL(this,250);this.cancelButton=this.Ca("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Ca("ytp-mdx-privacy-popup-confirm");g.N(this,this.j);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},k$=function(a){g.X.call(this,{D:"div",
K:"ytp-remote",W:[{D:"div",K:"ytp-remote-display-status",W:[{D:"div",K:"ytp-remote-display-status-icon",W:[g.aFa()]},{D:"div",K:"ytp-remote-display-status-text",qa:"{{statustext}}"}]}]});this.api=a;this.j=new g.XL(this,250);g.N(this,this.j);this.T(a,"presentingplayerstatechange",this.onStateChange);this.Xc(a.Fb())},l$=function(a,b){g.HR.call(this,"Play on",1,a,b);
this.G=a;this.er={};this.T(a,"onMdxReceiversChange",this.u);this.T(a,"presentingplayerstatechange",this.u);this.u()},Rgb=function(a){g.vO.call(this,a);
this.Cn={key:mcb(),name:"This computer"};this.xk=null;this.subscriptions=[];this.KK=this.vc=null;this.er=[this.Cn];this.Rp=this.Cn;this.Fd=new g.hK(64);this.SQ=0;this.Ng=-1;this.FA=!1;this.CA=this.hx=null;if(!g.aG(this.player.V())&&!g.bG(this.player.V())){a=this.player;var b=g.HN(a);b&&(b=b.Tm())&&(b=new l$(a,b),g.N(this,b));b=new k$(a);g.N(this,b);g.RN(a,b.element,4);this.hx=new j$;g.N(this,this.hx);g.RN(a,this.hx.element,4);this.FA=!!a$()}},m$=function(a){a.CA&&(a.player.removeEventListener("presentingplayerstatechange",
a.CA),a.CA=null)},Sgb=function(a,b,c){a.Fd=c;
a.player.ma("presentingplayerstatechange",new g.AJ(c,b))},n$=function(a,b){if(b.key!==a.Rp.key)if(b.key===a.Cn.key)e$();
else if(Mgb(a)&&Tgb(a),a.Rp=b,!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.bG(a.player.V())){var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(!c&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))d=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.qO(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:c,
videoId:e,playerParams:d.playerParams,clickTrackingParams:d.La,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(d=$bb(d))&&(a.locationInfo=d);d=a}Y9("Connecting to: "+g.ii(b));"cast-selector-receiver"==b.key?($9(d||null),b=d||null,B9()?z9().setLaunchParams(b):y9("setLaunchParams called before ready.")):!d&&Hgb()&&X9()==b.key?a8("yt-remote-connection-change",!0):(e$(),$9(d||null),d=W9().Ej(),(b=f8(d,b.key))&&f$(b,1))}},Mgb=function(a){var b;
(b=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(b=((b=g.P("PLAYER_CONFIG"))&&b.args&&void 0!==b.args.authuser?!0:!(!g.P("SESSION_INDEX")&&!g.P("LOGGED_IN")))||a.FA||!a.hx);return b?!1:g.tG(a.player.V())||g.wG(a.player.V())},Tgb=function(a){a.player.Fb().Sc()?a.player.pauseVideo():(a.CA=function(b){!a.FA&&g.CJ(b,8)&&(a.player.pauseVideo(),m$(a))},a.player.addEventListener("presentingplayerstatechange",a.CA));
a.hx&&a.hx.Rc();c$()||(g$=!0)};
g.nq.prototype.eq=g.ca(1,function(){return g.vd(this,6)});
g.je.prototype.QB=g.ca(0,function(){var a=g.qe(this);return 4294967296*g.qe(this)+(a>>>0)});
var Mbb,Ugb=g.Ne(function(a,b,c){if(1!==a.u)return!1;g.F(b,c,g.re(a.j));return!0},g.Re),Vgb=g.Ne(function(a,b,c,d){if(1!==a.u)return!1;
g.Ld(b,c,d,g.re(a.j));return!0},g.Re),Wgb=g.Ne(function(a,b,c){if(0!==a.u)return!1;
g.F(b,c,g.le(a.j));return!0},g.Se),Xgb=g.Ne(function(a,b,c,d){if(0!==a.u)return!1;
g.Ld(b,c,d,g.le(a.j));return!0},g.Se),Ygb=g.Ne(function(a,b,c){if(0!==a.u)return!1;
g.F(b,c,g.me(a.j));return!0},g.Te),Zgb=g.Ne(function(a,b,c,d){if(0!==a.u)return!1;
g.Ld(b,c,d,g.me(a.j));return!0},g.Te),$gb=g.Ne(function(a,b,c){if(1!==a.u)return!1;
g.F(b,c,a.j.QB());return!0},function(a,b,c){Obb(a,c,g.vd(b,c))}),ahb=g.Ne(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.yd(b,c,0,!1);if(2==a.u){c=g.je.prototype.QB;var d=g.me(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.QB());return!0},function(a,b,c){b=g.yd(b,c,0,!1);
if(null!=b)for(var d=0;d<b.length;d++)Obb(a,c,b[d])}),bhb=g.Ne(function(a,b,c){if(0!==a.u)return!1;
g.F(b,c,g.se(a.j));return!0},Pbb),chb=g.Ne(function(a,b,c,d){if(0!==a.u)return!1;
g.Ld(b,c,d,g.se(a.j));return!0},Pbb),dhb=g.Ne(function(a,b,c){if(2!==a.u)return!1;
a=g.ye(a);g.Gd(b,c,a);return!0},function(a,b,c){b=g.Ad(b,c,Kbb,!1);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.Fe(a,c,g.uaa(e))}}),ehb=g.Ne(function(a,b,c,d){if(2!==a.u)return!1;
g.Ld(b,c,d,g.ye(a));return!0},g.mca),fhb=g.Ne(function(a,b,c,d,e){if(2!==a.u)return!1;
g.ve(a,g.sba(b,d,c),e);return!0},g.nca),Qbb=[1];
g.v(Rbb,g.J);g.v(Sbb,g.J);var ghb=[Rbb,1,g.O2,[Sbb,1,Ugb,2,Wgb]];g.v(Tbb,g.J);g.v(Ubb,g.J);g.v(Vbb,g.J);
var hhb=[1,2],ihb=[g.Vh,1,g.N2,5,$gb,2,fhb,[Tbb,1,g.P2,[Ubb,1,g.N2,2,g.N2,3,bhb],hhb,2,g.P2,[Vbb,1,g.N2,2,g.N2,3,Ygb,4,bhb],hhb],3,dhb,6,ahb,4,g.O2,[g.Wh,1,g.O2,[g.Xh,1,ehb,g.$h,2,Zgb,g.$h,3,chb,g.$h],2,fhb,[g.Yh,1,Xgb,g.Zh,2,Vgb,g.Zh,3,g.P2,ghb,g.Zh]]],$db={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},O8={"'":"\\'"},hcb={ffa:"atp",VUa:"ska",rRa:"que",sIa:"mus",UUa:"sus",gwa:"dsp",OSa:"seq",HHa:"mic",Yoa:"dpa",dga:"cds",iIa:"mlm",
Soa:"dsdtr",LJa:"ntb"};b8.prototype.equals=function(a){return a?this.id==a.id:!1};
var j8,scb="",Hcb=Bcb("loadCastFramework")||Bcb("loadCastApplicationFramework"),Kcb=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ta(m8,g.L);g.k=m8.prototype;g.k.BV=function(a){this.C=arguments;this.j=!1;this.yc?this.B=g.Sa()+this.Fh:this.yc=g.Sh(this.F,this.Fh)};
g.k.stop=function(){this.yc&&(g.D.clearTimeout(this.yc),this.yc=null);this.B=null;this.j=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.I.apply(null,this.C)))};
g.k.ra=function(){this.stop();m8.Ye.ra.call(this)};
g.k.CV=function(){this.yc&&(g.D.clearTimeout(this.yc),this.yc=null);this.B?(this.yc=g.Sh(this.F,this.B-g.Sa()),this.B=null):this.u?this.j=!0:(this.j=!1,this.I.apply(null,this.C))};g.v(n8,g.L);g.k=n8.prototype;g.k.ZF=function(a){this.B=arguments;this.yc||this.u?this.j=!0:Wcb(this)};
g.k.stop=function(){this.yc&&(g.D.clearTimeout(this.yc),this.yc=null,this.j=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.j||this.yc||(this.j=!1,Wcb(this))};
g.k.ra=function(){g.L.prototype.ra.call(this);this.stop()};o8.prototype.stringify=function(a){return g.D.JSON.stringify(a,void 0)};
o8.prototype.parse=function(a){return g.D.JSON.parse(a,void 0)};g.Ta(Xcb,g.bf);g.Ta(Ycb,g.bf);var Zcb=null;g.Ta(adb,g.bf);g.Ta(bdb,g.bf);g.Ta(cdb,g.bf);ddb.prototype.info=function(){};
ddb.prototype.warning=function(){};var kdb={},u8={};g.k=s8.prototype;g.k.setTimeout=function(a){this.Ab=a};
g.k.GV=function(a){a=a.target;var b=this.Ya;b&&3==g.Gi(a)?b.ZF():this.ZM(a)};
g.k.ZM=function(a){try{if(a==this.j)a:{var b=g.Gi(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b)&&(3!=b||g.zG||this.j&&(this.u.u||g.Ii(this.j)||g.Ji(this.j)))){this.Ia||4!=b||7==c||(8==c||0>=d?p8(3):p8(2));x8(this);var e=this.j.getStatus();this.Wb=e;b:if(idb(this)){var f=g.Ji(this.j);a="";var h=f.length,l=4==g.Gi(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){v8(this);w8(this);var m="";break b}this.u.B=new g.D.TextDecoder}for(c=0;c<h;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&
c==h-1});f.splice(0,h);this.u.j+=a;this.ea=0;m=this.u.j}else m=g.Ii(this.j);if(this.B=200==e){if(this.kc&&!this.Ta){b:{if(this.j){var n=g.Ki(this.j,"X-HTTP-Initial-Response");if(n&&!g.eb(n)){var p=n;break b}}p=null}if(e=p)this.Ta=!0,ldb(this,e);else{this.B=!1;this.I=3;q8(12);v8(this);w8(this);break a}}this.Ba?(mdb(this,b,m),g.zG&&this.B&&3==b&&(this.jb.Ra(this.ob,"tick",this.FV),this.ob.start())):ldb(this,m);4==b&&v8(this);this.B&&!this.Ia&&(4==b?odb(this.F,this):(this.B=!1,t8(this)))}else g.Vea(this.j),
400==e&&0<m.indexOf("Unknown SID")?(this.I=3,q8(12)):(this.I=0,q8(13)),v8(this),w8(this)}}}catch(q){}finally{}};
g.k.FV=function(){if(this.j){var a=g.Gi(this.j),b=g.Ii(this.j);this.ea<b.length&&(x8(this),mdb(this,a,b),this.B&&4!=a&&t8(this))}};
g.k.cancel=function(){this.Ia=!0;v8(this)};
g.k.EV=function(){this.Z=null;var a=Date.now();0<=a-this.Nb?(2!=this.Qa&&(p8(3),q8(17)),v8(this),this.I=2,w8(this)):ndb(this,this.Nb-a)};
g.k.getLastError=function(){return this.I};xdb.prototype.cancel=function(){this.B=zdb(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.t(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.k=Ddb.prototype;g.k.aN=8;g.k.xg=1;g.k.connect=function(a,b,c,d){q8(0);this.Bc=a;this.Ia=b||{};c&&void 0!==d&&(this.Ia.OSID=c,this.Ia.OAID=d);this.ob=this.Dc;this.La=tdb(this,null,this.Bc);B8(this)};
g.k.disconnect=function(){Fdb(this);if(3==this.xg){var a=this.Ya++,b=this.La.clone();g.Pj(b,"SID",this.C);g.Pj(b,"RID",a);g.Pj(b,"TYPE","terminate");E8(this,b);a=new s8(this,this.C,a);a.Qa=2;a.J=Y7(b.clone());b=!1;g.D.navigator&&g.D.navigator.sendBeacon&&(b=g.D.navigator.sendBeacon(a.J.toString(),""));!b&&g.D.Image&&((new Image).src=a.J,b=!0);b||(a.j=hdb(a.F,null),a.j.send(a.J));a.ya=Date.now();t8(a)}Ldb(this)};
g.k.Zf=function(){return 0==this.xg};
g.k.getState=function(){return this.xg};
g.k.cN=function(a){if(this.I)if(this.I=null,1==this.xg){if(!a){this.Ya=Math.floor(1E5*Math.random());a=this.Ya++;var b=new s8(this,"",a),c=this.Z;this.Nb&&(c?(c=g.Gf(c),g.If(c,this.Nb)):c=this.Nb);null!==this.J||this.tb||(b.La=c,c=null);var d;if(this.Ab)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=Idb(this,b,d);e=this.La.clone();g.Pj(e,"RID",a);g.Pj(e,"CVER",22);this.Ba&&g.Pj(e,"X-HTTP-Session-Id",this.Ba);E8(this,e);c&&(this.tb?d="headers="+g.Vg(g.gga(c))+"&"+d:this.J&&g.Tj(e,this.J,c));sdb(this.u,b);this.Of&&g.Pj(e,"TYPE","init");this.Ab?(g.Pj(e,"$req",d),g.Pj(e,"SID","null"),b.kc=!0,gdb(b,e,null)):gdb(b,e,d);this.xg=2}}else 3==this.xg&&(a?Jdb(this,a):0==this.B.length||ydb(this.u)||Jdb(this))};
g.k.bN=function(){this.S=null;Kdb(this);if(this.md&&!(this.jb||null==this.j||0>=this.td)){var a=2*this.td;this.Aa=r8((0,g.Qa)(this.A1,this),a)}};
g.k.A1=function(){this.Aa&&(this.Aa=null,this.ob=!1,this.jb=!0,q8(10),z8(this),Kdb(this))};
g.k.fK=function(a){this.j==a&&this.md&&!this.jb&&(Edb(this),this.jb=!0,q8(11))};
g.k.HV=function(){null!=this.ea&&(this.ea=null,z8(this),qdb(this),q8(19))};
g.k.h6=function(a){a?q8(2):q8(1)};
g.k.isActive=function(){return!!this.F&&this.F.isActive(this)};
g.k=Ndb.prototype;g.k.gN=function(){};
g.k.fN=function(){};
g.k.eN=function(){};
g.k.dN=function(){};
g.k.isActive=function(){return!0};
g.k.IV=function(){};g.Ta(G8,g.$f);G8.prototype.open=function(){this.j.F=this.C;this.J&&(this.j.Qa=!0);this.j.connect(this.I,this.u||void 0)};
G8.prototype.close=function(){this.j.disconnect()};
G8.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.F&&(c={},c.__data__=g.ii(a),a=c);b.B.push(new wdb(b.Je++,a));3==b.xg&&B8(b)};
G8.prototype.ra=function(){this.j.F=null;delete this.C;this.j.disconnect();delete this.j;G8.Ye.ra.call(this)};
g.Ta(Pdb,Xcb);g.Ta(Qdb,Ycb);g.Ta(F8,Ndb);F8.prototype.gN=function(){this.j.dispatchEvent("m")};
F8.prototype.fN=function(a){this.j.dispatchEvent(new Pdb(a))};
F8.prototype.eN=function(a){this.j.dispatchEvent(new Qdb(a))};
F8.prototype.dN=function(){this.j.dispatchEvent("n")};var I8=new g.$f;g.v(Tdb,g.bf);g.k=K8.prototype;g.k.Mr=null;g.k.Vn=!1;g.k.Uu=null;g.k.bG=null;g.k.Su=null;g.k.Tu=null;g.k.wp=null;g.k.yp=null;g.k.Nr=null;g.k.Sh=null;g.k.LB=0;g.k.Ul=null;g.k.KB=null;g.k.xp=null;g.k.gy=-1;g.k.jT=!0;g.k.Lr=!1;g.k.aG=0;g.k.JB=null;var Ydb={},Xdb={};g.k=K8.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.KV=function(a){a=a.target;var b=this.JB;b&&3==g.Gi(a)?b.ZF():this.hN(a)};
g.k.hN=function(a){try{if(a==this.Sh)a:{var b=g.Gi(this.Sh),c=this.Sh.u,d=this.Sh.getStatus();if(g.Fc&&!g.Cc(10)||g.lf&&!g.Bc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Ii(this.Sh))break a;this.Lr||4!=b||7==c||(8==c||0>=d?this.j.Kl(3):this.j.Kl(2));ceb(this);var e=this.Sh.getStatus();this.gy=e;var f=g.Ii(this.Sh);if(this.Vn=200==e){4==b&&M8(this);if(this.Ba){for(a=!0;!this.Lr&&this.LB<f.length;){var h=Zdb(this,f);if(h==Xdb){4==b&&(this.xp=4,J8(15),a=!1);break}else if(h==Ydb){this.xp=4;J8(16);a=
!1;break}else deb(this,h)}4==b&&0==f.length&&(this.xp=1,J8(17),a=!1);this.Vn=this.Vn&&a;a||(M8(this),N8(this))}else deb(this,f);this.Vn&&!this.Lr&&(4==b?this.j.MB(this):(this.Vn=!1,L8(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.xp=3,J8(13)):(this.xp=0,J8(14)),M8(this),N8(this)}}catch(l){}finally{}};
g.k.X3=function(a){H8((0,g.Qa)(this.W3,this,a),0)};
g.k.W3=function(a){this.Lr||(ceb(this),deb(this,a),L8(this))};
g.k.oS=function(a){H8((0,g.Qa)(this.V3,this,a),0)};
g.k.V3=function(a){this.Lr||(M8(this),this.Vn=a,this.j.MB(this),this.j.Kl(4))};
g.k.cancel=function(){this.Lr=!0;M8(this)};
g.k.JV=function(){this.Uu=null;var a=Date.now();0<=a-this.bG?(2!=this.Tu&&this.j.Kl(3),M8(this),this.xp=2,J8(18),N8(this)):beb(this,this.bG-a)};
g.k.getLastError=function(){return this.xp};g.k=geb.prototype;g.k.dG=null;g.k.Ji=null;g.k.IE=!1;g.k.yT=null;g.k.OC=null;g.k.uJ=null;g.k.eG=null;g.k.pk=null;g.k.Wn=-1;g.k.iy=null;g.k.Ky=null;g.k.connect=function(a){this.eG=a;a=Q8(this.j,null,this.eG);J8(3);this.yT=Date.now();var b=this.j.S;null!=b?(this.iy=b[0],(this.Ky=b[1])?(this.pk=1,heb(this)):(this.pk=2,ieb(this))):(Z7(a,"MODE","init"),this.Ji=new K8(this),this.Ji.Mr=this.dG,Wdb(this.Ji,a,!1,null,!0),this.pk=0)};
g.k.BY=function(a){if(a)this.pk=2,ieb(this);else{J8(4);var b=this.j;b.cm=b.Op.Wn;U8(b,9)}a&&this.Kl(2)};
g.k.cG=function(a){return this.j.cG(a)};
g.k.abort=function(){this.Ji&&(this.Ji.cancel(),this.Ji=null);this.Wn=-1};
g.k.Zf=function(){return!1};
g.k.iN=function(a,b){this.Wn=a.gy;if(0==this.pk)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.cm=this.Wn;U8(a,2);return}this.iy=c[0];this.Ky=c[1]}else a=this.j,a.cm=this.Wn,U8(a,2);else if(2==this.pk)if(this.IE)J8(7),this.uJ=Date.now();else if("11111"==b){if(J8(6),this.IE=!0,this.OC=Date.now(),a=this.OC-this.yT,!g.Fc||g.Cc(10)||500>a)this.Wn=200,this.Ji.cancel(),J8(12),R8(this.j,this,!0)}else J8(8),this.OC=this.uJ=Date.now(),this.IE=!1};
g.k.MB=function(){this.Wn=this.Ji.gy;if(this.Ji.Vn)0==this.pk?this.Ky?(this.pk=1,heb(this)):(this.pk=2,ieb(this)):2==this.pk&&((!g.Fc||g.Cc(10)?!this.IE:200>this.uJ-this.OC)?(J8(11),R8(this.j,this,!1)):(J8(12),R8(this.j,this,!0)));else{0==this.pk?J8(9):2==this.pk&&J8(10);var a=this.j;this.Ji.getLastError();a.cm=this.Wn;U8(a,2)}};
g.k.jy=function(){return this.j.jy()};
g.k.isActive=function(){return this.j.isActive()};
g.k.Kl=function(a){this.j.Kl(a)};g.k=jeb.prototype;g.k.Zl=null;g.k.ly=null;g.k.Si=null;g.k.Nf=null;g.k.fG=null;g.k.NB=null;g.k.jN=null;g.k.OB=null;g.k.oy=0;g.k.MV=0;g.k.Ah=null;g.k.zp=null;g.k.Xn=null;g.k.Pr=null;g.k.Op=null;g.k.vF=null;g.k.Xu=-1;g.k.kN=-1;g.k.cm=-1;g.k.Wu=0;g.k.Vu=0;g.k.Or=8;g.Ta(leb,g.bf);g.Ta(meb,g.bf);g.k=jeb.prototype;g.k.connect=function(a,b,c,d,e){J8(0);this.fG=b;this.ly=c||{};d&&void 0!==e&&(this.ly.OSID=d,this.ly.OAID=e);this.J?(H8((0,g.Qa)(this.eP,this,a),100),oeb(this)):this.eP(a)};
g.k.disconnect=function(){peb(this);if(3==this.j){var a=this.oy++,b=this.NB.clone();g.Pj(b,"SID",this.C);g.Pj(b,"RID",a);g.Pj(b,"TYPE","terminate");T8(this,b);a=new K8(this,this.C,a);a.Tu=2;a.wp=Y7(b.clone());(new Image).src=a.wp.toString();a.Su=Date.now();L8(a)}zeb(this)};
g.k.eP=function(a){this.Op=new geb(this);this.Op.dG=this.Zl;this.Op.u=this.F;this.Op.connect(a)};
g.k.Zf=function(){return 0==this.j};
g.k.getState=function(){return this.j};
g.k.mN=function(a){this.zp=null;ueb(this,a)};
g.k.lN=function(){this.Xn=null;this.Nf=new K8(this,this.C,"rpc",this.I);this.Nf.Mr=this.Zl;this.Nf.aG=0;var a=this.jN.clone();g.Pj(a,"RID","rpc");g.Pj(a,"SID",this.C);g.Pj(a,"CI",this.vF?"0":"1");g.Pj(a,"AID",this.Xu);T8(this,a);if(!g.Fc||g.Cc(10))g.Pj(a,"TYPE","xmlhttp"),Wdb(this.Nf,a,!0,this.OB,!1);else{g.Pj(a,"TYPE","html");var b=this.Nf,c=!!this.OB;b.Tu=3;b.wp=Y7(a.clone());aeb(b,c)}};
g.k.iN=function(a,b){if(0!=this.j&&(this.Nf==a||this.Si==a))if(this.cm=a.gy,this.Si==a&&3==this.j)if(7<this.Or){try{var c=this.F.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Xn){if(this.Nf)if(this.Nf.Su+3E3<this.Si.Su)S8(this),this.Nf.cancel(),this.Nf=null;else break a;xeb(this);J8(19)}}else this.kN=a[1],0<this.kN-this.Xu&&37500>a[2]&&this.vF&&0==this.Vu&&!this.Pr&&(this.Pr=H8((0,g.Qa)(this.NV,this),6E3));else U8(this,11)}else null!=b&&U8(this,11);else if(this.Nf==
a&&S8(this),!g.eb(b))for(a=this.F.parse(b),b=0;b<a.length;b++)c=a[b],this.Xu=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.OB=c[2],c=c[3],null!=c?this.Or=c:this.Or=6,this.j=3,this.Ah&&this.Ah.pN(),this.jN=Q8(this,this.jy()?this.OB:null,this.fG),veb(this)):"stop"==c[0]&&U8(this,7):3==this.j&&("stop"==c[0]?U8(this,7):"noop"!=c[0]&&this.Ah&&this.Ah.oN(c),this.Vu=0)};
g.k.NV=function(){null!=this.Pr&&(this.Pr=null,this.Nf.cancel(),this.Nf=null,xeb(this),J8(20))};
g.k.MB=function(a){if(this.Nf==a){S8(this);this.Nf=null;var b=2}else if(this.Si==a)this.Si=null,b=1;else return;this.cm=a.gy;if(0!=this.j)if(a.Vn)if(1==b){b=Date.now()-a.Su;var c=I8;c.dispatchEvent(new leb(c,a.Nr?a.Nr.length:0,b,this.Wu));neb(this);this.B.length=0}else veb(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.cm)){if(d=1==b)this.Si||this.zp||1==this.j||2<=this.Wu?d=!1:(this.zp=H8((0,g.Qa)(this.mN,this,a),web(this,this.Wu)),this.Wu++,d=!0);d=!(d||2==b&&xeb(this))}if(d)switch(c){case 1:U8(this,
5);break;case 4:U8(this,10);break;case 3:U8(this,6);break;case 7:U8(this,12);break;default:U8(this,2)}}};
g.k.LV=function(a){if(!g.Xb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.k.g6=function(a){a?J8(2):(J8(1),yeb(this,8))};
g.k.cG=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Di;a.J=!1;return a};
g.k.isActive=function(){return!!this.Ah&&this.Ah.isActive(this)};
g.k.Kl=function(a){var b=I8;b.dispatchEvent(new meb(b,a))};
g.k.jy=function(){return!(!g.Fc||g.Cc(10))};
g.k=Aeb.prototype;g.k.pN=function(){};
g.k.oN=function(){};
g.k.nN=function(){};
g.k.gG=function(){};
g.k.qN=function(){return{}};
g.k.isActive=function(){return!0};g.k=Beb.prototype;g.k.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.k.clear=function(){this.j=[];this.u=[]};
g.k.contains=function(a){return g.Xb(this.j,a)||g.Xb(this.u,a)};
g.k.remove=function(a){var b=this.j;var c=(0,g.$Ya)(b,a);0<=c?(g.$b(b,c),b=!0):b=!1;return b||g.cc(this.u,a)};
g.k.Gk=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.v(Ceb,g.bf);g.v(Deb,g.bf);g.Ta(V8,g.L);g.k=V8.prototype;g.k.P3=function(){this.Fh=Math.min(3E5,2*this.Fh);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.Fh+15E3*Math.random();g.fo(this.j,a);this.u=Date.now()+a};
g.k.stop=function(){this.j.stop();this.u=0};
g.k.isActive=function(){return this.j.isActive()};
g.k.reset=function(){this.j.stop();this.Fh=5E3};Feb.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.lu("enable_client_streamz_web")){a=g.t(a);for(var c=a.next();!c.done;c=a.next())c=g.mea(c.value),c={serializedIncrementBatch:g.Dc(g.Me(c,ihb))},g.dpa("streamzIncremented",c,{pL:b})}};var W8;g.Ta(Geb,Aeb);g.k=Geb.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.Tg=function(a){return this.B.Tg(a)};
g.k.ma=function(a,b){return this.B.ma.apply(this.B,arguments)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.Ze(this.B),this.disconnect(),g.Ze(this.u),this.u=null,this.oa=function(){return""})};
g.k.isDisposed=function(){return this.ea};
g.k.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.Z="";this.u.stop();this.I=a||null;this.F=b||0;a=this.ya+"/test";b=this.ya+"/bind";var d=new jeb(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Qa),e=this.j;e&&(e.Ah=null);d.Ah=this;this.j=d;Heb(this);if(this.j){d=g.P("ID_TOKEN");var f=this.j.Zl||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Zl=f}e?(3!=e.getState()&&0==reb(e)||e.getState(),this.j.connect(a,b,this.J,e.C,e.Xu)):c?this.j.connect(a,
b,this.J,c.sessionId,c.arrayId):this.j.connect(a,b,this.J)}};
g.k.disconnect=function(a){this.S=a||0;this.u.stop();Heb(this);this.j&&(3==this.j.getState()&&ueb(this.j),this.j.disconnect());this.S=0};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.If(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Hw()&&(Heb(this),qeb(this.j,a))};
g.k.pN=function(){this.u.reset();this.I=null;this.F=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)qeb(this.j,a[b])}this.ma("handlerOpened");Ncb(this.La,"BROWSER_CHANNEL")};
g.k.nN=function(a){var b=2==a&&401==this.j.cm;4==a||b||this.u.start();this.ma("handlerError",a,b);Tcb(this.Ba,"BROWSER_CHANNEL")};
g.k.gG=function(a,b){if(!this.u.isActive())this.ma("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}Pcb(this.Aa,"BROWSER_CHANNEL");a&&this.Ya.j.jG("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.eb.j.jG("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.qN=function(){var a={v:2};this.Z&&(a.gsessionid=this.Z);0!=this.F&&(a.ui=""+this.F);0!=this.S&&(a.ui=""+this.S);this.I&&g.If(a,this.I);return a};
g.k.oN=function(a){"S"==a[0]?this.Z=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.ma("handlerMessage",new Eeb(a[0],a[1]));Rcb(this.Ia,"BROWSER_CHANNEL")};
g.k.Hw=function(){return!!this.j&&3==this.j.getState()};
g.k.fp=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Ta&&this.j){var b=this.j.Zl||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Zl=b}};
g.k.eq=function(){return this.J.id};
g.k.kq=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.k.Vt=function(){var a=this.u;g.go(a.j);a.start()};
g.k.f5=function(){this.u.isActive();0==reb(this.j)&&this.connect(this.I,this.F)};X8.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
X8.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
X8.prototype.F=function(a){a(Error("request timed out"))};g.v(Jeb,g.$f);g.k=Jeb.prototype;g.k.connect=function(a,b,c){this.Zc.connect(a,b,c)};
g.k.disconnect=function(a){this.Zc.disconnect(a)};
g.k.Vt=function(){this.Zc.Vt()};
g.k.eq=function(){return this.Zc.eq()};
g.k.kq=function(){return this.Zc.kq()};
g.k.Hw=function(){return this.Zc.Hw()};
g.k.QV=function(){this.dispatchEvent("channelOpened");var a=this.Zc,b=this.j;g.Mz("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.vF,sessionId:a.j.C,arrayId:a.j.Xu});g.Mz("yt-remote-session-screen-id",b);a=g8();b=h8();g.Xb(a,b)||a.push(b);rcb(a);tcb()};
g.k.OV=function(){this.dispatchEvent("channelClosed")};
g.k.PV=function(a){this.dispatchEvent(new Ceb(a))};
g.k.onError=function(a){this.dispatchEvent(new Deb(a?1:0))};
g.k.sendMessage=function(a,b){this.Zc.sendMessage(a,b)};
g.k.fp=function(a){this.Zc.fp(a)};
g.k.dispose=function(){this.Zc.dispose()};g.k=Keb.prototype;
g.k.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.I&&(this.B.stop(),this.S=a,this.J=b,Meb(this),(a=g.P("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.l0&&(this.u.mdxVersion=""+this.j.l0),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.J?this.u.ui=""+this.J:delete this.u.ui,
Object.assign(this.u,this.S),this.channel=new G8(this.pathPrefix,{w_:"gsessionid",o0:this.C,q0:this.u}),this.channel.open(),this.I=2,Leb(this))};
g.k.disconnect=function(a){this.Z=void 0===a?0:a;this.B.stop();Meb(this);this.channel&&(0!==this.Z?this.u.ui=""+this.Z:delete this.u.ui,this.channel.close());this.Z=0};
g.k.kq=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.k.Vt=function(){var a=this.B;g.go(a.j);a.start()};
g.k.sendMessage=function(a,b){this.channel&&(Meb(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.k.fp=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.k.eq=function(){return this.j?this.j.id:""};
g.k.ma=function(a){return this.F.ma.apply(this.F,[a].concat(g.u(g.Aa.apply(1,arguments))))};
g.k.subscribe=function(a,b,c){return this.F.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.F.unsubscribe(a,b,c)};
g.k.Tg=function(a){return this.F.Tg(a)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.Ze(this.F),this.disconnect(),g.Ze(this.B),this.ya=function(){return""})};
g.k.isDisposed=function(){return this.ea};g.v(Neb,g.$f);g.k=Neb.prototype;g.k.connect=function(a,b){this.j.connect(a,b)};
g.k.disconnect=function(a){this.j.disconnect(a)};
g.k.Vt=function(){this.j.Vt()};
g.k.eq=function(){return this.j.eq()};
g.k.kq=function(){return this.j.kq()};
g.k.Hw=function(){return 3===this.j.I};
g.k.TV=function(){this.dispatchEvent("channelOpened")};
g.k.RV=function(){this.dispatchEvent("channelClosed")};
g.k.SV=function(a){this.dispatchEvent(new Ceb(a))};
g.k.onError=function(){this.dispatchEvent(new Deb(401===this.j.Og?1:0))};
g.k.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.k.fp=function(a){this.j.fp(a)};
g.k.dispose=function(){this.j.dispose()};var Veb=Date.now(),Z8=null,c9=Array(50),b9=-1,d9=!1;g.Ta(e9,g.bz);e9.prototype.Ej=function(){return this.screens};
e9.prototype.contains=function(a){return!!ocb(this.screens,a)};
e9.prototype.get=function(a){return a?f8(this.screens,a):null};
e9.prototype.info=function(a){$8(this.I,a)};g.v(Zeb,g.bz);g.k=Zeb.prototype;g.k.start=function(){!this.j&&isNaN(this.yc)&&this.BS()};
g.k.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.yc)||(g.Ju(this.yc),this.yc=NaN)};
g.k.ra=function(){this.stop();g.bz.prototype.ra.call(this)};
g.k.BS=function(){this.yc=NaN;this.j=g.Mu(Y8(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Qa)(this.VV,this),onError:(0,g.Qa)(this.UV,this),onTimeout:(0,g.Qa)(this.WV,this)})};
g.k.VV=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.F&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ma("pairingComplete",new c8(a),b)};
g.k.UV=function(a){this.j=null;a.status&&404==a.status?this.u>=jhb.length?this.ma("pairingFailed",Error("DIAL polling timed out")):(a=jhb[this.u],this.yc=g.Hu((0,g.Qa)(this.BS,this),a),this.u++):this.ma("pairingFailed",Error("Server error "+a.status))};
g.k.WV=function(){this.j=null;this.ma("pairingFailed",Error("Server not responding"))};
var jhb=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ta(g9,e9);g.k=g9.prototype;g.k.start=function(){f9(this)&&this.ma("screenChange");!g.Nz("yt-remote-lounge-token-expiration")&&$eb(this);g.Ju(this.j);this.j=g.Hu((0,g.Qa)(this.start,this),1E4)};
g.k.add=function(a,b){f9(this);Web(this,a);h9(this,!1);this.ma("screenChange");b(a);a.token||$eb(this)};
g.k.remove=function(a,b){var c=f9(this);Yeb(this,a)&&(h9(this,!1),c=!0);b(a);c&&this.ma("screenChange")};
g.k.uF=function(a,b,c,d){var e=f9(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,h9(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ma("screenChange")};
g.k.ra=function(){g.Ju(this.j);g9.Ye.ra.call(this)};
g.k.XZ=function(a){f9(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}h9(this,!b);b&&$8(this.I,"Missed "+b+" lounge tokens.")};
g.k.WZ=function(a){$8(this.I,"Requesting lounge tokens failed: "+a)};g.v(bfb,g.bz);g.k=bfb.prototype;g.k.start=function(){var a=parseInt(g.Nz("yt-remote-fast-check-period")||"0",10);(this.C=g.Sa()-144E5<a?0:a)?i9(this):(this.C=g.Sa()+3E5,g.Mz("yt-remote-fast-check-period",this.C),this.bL())};
g.k.isEmpty=function(){return g.Cf(this.j)};
g.k.update=function(){afb("Updating availability on schedule.");var a=this.I(),b=g.qf(this.j,function(c,d){return c&&!!f8(a,d)},this);
efb(this,b)};
g.k.ra=function(){g.Ju(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.bz.prototype.ra.call(this)};
g.k.bL=function(){g.Ju(this.B);this.B=NaN;this.u&&this.u.abort();var a=ffb(this);if(bcb(a)){var b=Y8(this.F,"/pairing/get_screen_availability");this.u=Ieb(this.F,b,{lounge_token:g.vf(a).join(",")},(0,g.Qa)(this.v3,this,a),(0,g.Qa)(this.u3,this))}else efb(this,{}),i9(this)};
g.k.v3=function(a,b){this.u=null;var c=g.vf(ffb(this));if(g.sc(c,g.vf(a))){b=b.screens||[];c={};for(var d=b.length,e=0;e<d;++e)c[a[b[e].loungeToken]]="online"==b[e].status;efb(this,c);i9(this)}else this.qf("Changing Screen set during request."),this.bL()};
g.k.u3=function(a){this.qf("Screen availability failed: "+a);this.u=null;i9(this)};
g.k.qf=function(a){$8("OnlineScreenService",a)};g.Ta(j9,e9);g.k=j9.prototype;g.k.start=function(){this.u.start();this.j.start();this.screens.length&&(this.ma("screenChange"),this.j.isEmpty()||this.ma("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.k.uF=function(a,b,c,d){this.u.contains(a)?this.u.uF(a,b,c,d):(a="Updating name of unknown screen: "+a.name,$8(this.I,a),d(Error(a)))};
g.k.Ej=function(a){return a?this.screens:g.ec(this.screens,g.Dm(this.B,function(b){return!this.contains(b)},this))};
g.k.rN=function(){return g.Dm(this.Ej(!0),function(a){return!!this.j.j[a.id]},this)};
g.k.sN=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new Zeb(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.Ze(l);e(k9(h,m),n)});
l.subscribe("pairingFailed",function(m){g.Ze(l);f(m)});
l.start();return(0,g.Qa)(l.stop,l)};
g.k.XV=function(a,b,c,d){g.Mu(Y8(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Qa)(function(e,f){e=new c8(f.screen||{});if(!e.name||jfb(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);jfb(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(k9(this,e))},this),
onError:(0,g.Qa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Qa)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ra=function(){g.Ze(this.u);g.Ze(this.j);j9.Ye.ra.call(this)};
g.k.g_=function(){lfb(this);this.ma("screenChange");this.j.update()};
j9.prototype.dispose=j9.prototype.dispose;g.Ta(l9,g.bz);g.k=l9.prototype;g.k.getScreen=function(){return this.C};
g.k.zi=function(a){this.isDisposed()||(a&&(n9(this,""+a),this.ma("sessionFailed")),this.C=null,this.ma("sessionScreen",null))};
g.k.info=function(a){$8(this.Ba,a)};
g.k.tN=function(){return null};
g.k.tL=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Qa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Qa)(function(){n9(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ra=function(){this.tL("");l9.Ye.ra.call(this)};g.v(o9,l9);g.k=o9.prototype;g.k.sL=function(a){if(this.u){if(this.u==a)return;n9(this,"Overriding cast session with new session object");xfb(this);this.ya=!1;this.Z="unknown";this.u.removeUpdateListener(this.oa);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.oa);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);sfb(this,"getMdxSessionStatus")};
g.k.Ow=function(a){this.info("launchWithParams no-op for Cast: "+g.ii(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.Qa)(function(){this.zi()},this),(0,g.Qa)(function(){this.zi(Error("Failed to stop receiver app."))},this)):this.zi(Error("Stopping cast device without session."))};
g.k.tL=function(){};
g.k.ra=function(){this.info("disposeInternal");xfb(this);this.u&&(this.u.removeUpdateListener(this.oa),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;l9.prototype.ra.call(this)};
g.k.i4=function(a,b){if(!this.isDisposed())if(b)if(b=$7(b),g.Na(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.ii(b)),a){case "mdxSessionStatus":pfb(this,b);break;case "loungeToken":tfb(this,b);break;default:n9(this,"Unknown youtube message: "+a)}else n9(this,"Unable to parse message.");else n9(this,"No data in message.")};
g.k.XP=function(a,b,c,d){g.Ju(this.S);this.S=0;ifb(this.B,this.j.label,a,this.j.friendlyName,(0,g.Qa)(function(e){e?b(e):0<=d?(n9(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.S=g.Hu((0,g.Qa)(this.XP,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.tN=function(){return this.u};
g.k.YV=function(a){this.isDisposed()||a||(n9(this,"Cast session died."),this.zi())};g.v(p9,l9);g.k=p9.prototype;g.k.sL=function(a){this.u=a;this.u.addUpdateListener(this.Ia)};
g.k.Ow=function(a){this.La=a;this.ea()};
g.k.stop=function(){Ffb(this);this.u?this.u.stop((0,g.Qa)(this.zi,this,null),(0,g.Qa)(this.zi,this,"Failed to stop DIAL device.")):this.zi()};
g.k.ra=function(){Ffb(this);this.u&&this.u.removeUpdateListener(this.Ia);this.u=null;l9.prototype.ra.call(this)};
g.k.ZV=function(a){this.isDisposed()||a||(n9(this,"DIAL session died."),this.F(),this.F=function(){},this.zi())};g.v(s9,l9);s9.prototype.stop=function(){this.zi()};
s9.prototype.sL=function(){};
s9.prototype.Ow=function(){g.Ju(this.u);this.u=NaN;var a=f8(this.B.Ej(),this.j.label);a?m9(this,a):this.zi(Error("No such screen"))};
s9.prototype.ra=function(){g.Ju(this.u);this.u=NaN;l9.prototype.ra.call(this)};g.v(t9,g.bz);g.k=t9.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.S,[chrome.cast.Capability.AUDIO_OUT]);this.Z||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Qa)(this.d3,this);c=new chrome.cast.ApiConfig(c,(0,g.Qa)(this.kS,this),e,d,a);c.customDialLaunchCallback=(0,g.Qa)(this.P1,this);
chrome.cast.initialize(c,(0,g.Qa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.F),Seb(),this.u.subscribe("onlineScreenChange",(0,g.Qa)(this.uN,this)),this.B=Ifb(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Qa)(function(f){this.qf("Failed to set initial custom receivers: "+g.ii(f))},this)),this.ma("yt-remote-cast2-availability-change",v9(this)),b(!0))},this),(0,g.Qa)(function(f){this.qf("Failed to initialize API: "+g.ii(f));
b(!1)},this))};
g.k.q5=function(a,b){u9("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)u9("Unsetting old screen status: "+this.j.j.friendlyName),w9(this,null)}if(a&&b){if(!this.j){c=f8(this.u.Ej(),a);if(!c){u9("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){u9("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=Gfb(this,c);a||(u9("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Qa)(function(d){this.qf("Failed to set initial custom receivers: "+g.ii(d))},this)));
u9("setConnectedScreenStatus: new active receiver: "+a.friendlyName);w9(this,new s9(this.u,a),!0)}this.j.tL(b)}else u9("setConnectedScreenStatus: no screen.")};
g.k.r5=function(a){this.isDisposed()?this.qf("Setting connection data on disposed cast v2"):this.j?this.j.Ow(a):this.qf("Setting connection data without a session")};
g.k.bW=function(){this.isDisposed()?this.qf("Stopping session on disposed cast v2"):this.j?(this.j.stop(),w9(this,null)):u9("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Qa)(this.kS,this),(0,g.Qa)(this.y3,this))};
g.k.ra=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Qa)(this.uN,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.F);var a=Peb,b=g.Ia("yt.mdx.remote.debug.handlers_");g.cc(b||[],a);g.Ze(this.j);g.bz.prototype.ra.call(this)};
g.k.qf=function(a){$8("Controller",a)};
g.k.mS=function(a,b){this.j==a&&(b||w9(this,null),this.ma("yt-remote-cast2-session-change",b))};
g.k.Y2=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),u9("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)u9("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{u9("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.ma("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:w9(this,
new s9(this.u,a));break;case chrome.cast.ReceiverType.DIAL:w9(this,new p9(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:w9(this,new o9(this.u,a,this.config_));break;default:this.qf("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.qf("Stopping receiver w/o session: "+a.friendlyName)}else this.qf("onReceiverAction_ called without receiver.")};
g.k.P1=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.qf("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.qf("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return u9("Reselecting dial screen."),
this.ma("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.qf('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);w9(this,new p9(this.u,b,this.C,this.config_))}b=this.j;b.S=a;b.S.appState==chrome.cast.DialAppState.RUNNING?(a=b.S.extraData||{},c=a.screenId||null,q9(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=Cfb(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.S.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.qu(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=Dfb(b,c)):a=Dfb(b,c)):a=Afb(b);return a};
g.k.kS=function(a){var b=this;if(!this.isDisposed()&&!this.I){u9("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)u9("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),w9(this,new o9(this.u,c,this.config_),!0);else{this.qf("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=f8(this.u.Ej(),
d.label);e&&d8(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(u9("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.Ze(this.j),this.j=new o9(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Qa)(this.mS,this,this.j)),this.j.subscribe("sessionFailed",function(){return Hfb(b,b.j)}),this.j.Ow(null));
this.j.sL(a)}}};
g.k.aW=function(){return this.j?this.j.tN():null};
g.k.y3=function(a){this.isDisposed()||(this.qf("Failed to estabilish a session: "+g.ii(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&w9(this,null),this.ma("yt-remote-cast2-session-failed"))};
g.k.d3=function(a){u9("Receiver availability updated: "+a);if(!this.isDisposed()){var b=v9(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;v9(this)!=b&&this.ma("yt-remote-cast2-availability-change",v9(this))}};
g.k.uN=function(){this.isDisposed()||(this.B=Ifb(this),u9("Updating custom receivers: "+g.ii(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Qa)(function(){this.qf("Failed to set custom receivers.")},this)),this.ma("yt-remote-cast2-availability-change",v9(this)))};
t9.prototype.setLaunchParams=t9.prototype.r5;t9.prototype.setConnectedScreenStatus=t9.prototype.q5;t9.prototype.stopSession=t9.prototype.bW;t9.prototype.getCastSession=t9.prototype.aW;t9.prototype.requestSession=t9.prototype.requestSession;t9.prototype.init=t9.prototype.init;t9.prototype.dispose=t9.prototype.dispose;var Rfb=[];g.k=D9.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";Xfb(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.cn=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.F=a.duration,this.S=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Sc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Rj=function(a){this.F=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.F+E9(this):this.F};
g.k.clone=function(){return new D9(Yfb(this))};g.v(J9,g.bz);g.k=J9.prototype;g.k.getState=function(){return this.B};
g.k.kq=function(){return this.C.getReconnectTimeout()};
g.k.Vt=function(){this.C.reconnect()};
g.k.play=function(){L9(this)?(this.j?this.j.play(null,g.dg,P9(this,"play")):O9(this,"play"),agb(this,1,G9(K9(this))),this.ma("remotePlayerChange")):M9(this,this.play)};
g.k.pause=function(){L9(this)?(this.j?this.j.pause(null,g.dg,P9(this,"pause")):O9(this,"pause"),agb(this,2,G9(K9(this))),this.ma("remotePlayerChange")):M9(this,this.pause)};
g.k.seekTo=function(a){if(L9(this)){if(this.j){var b=K9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Sc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.dg,P9(this,"seekTo",{newTime:a}))}else O9(this,"seekTo",{newTime:a});agb(this,3,a);this.ma("remotePlayerChange")}else M9(this,g.Ra(this.seekTo,a))};
g.k.stop=function(){if(L9(this)){this.j?this.j.stop(null,g.dg,P9(this,"stopVideo")):O9(this,"stopVideo");var a=K9(this);a.index=-1;a.videoId="";Xfb(a);N9(this,a);this.ma("remotePlayerChange")}else M9(this,this.stop)};
g.k.setVolume=function(a,b){if(L9(this)){var c=K9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Qa)(function(){a9("set receiver volume: "+d)},this),(0,g.Qa)(function(){this.qf("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Qa)(function(){a9("set receiver muted: "+b)},this),(0,g.Qa)(function(){this.qf("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);O9(this,"setVolume",e)}c.muted=b;c.volume=a;N9(this,c)}else M9(this,g.Ra(this.setVolume,a,b))};
g.k.vN=function(a,b){if(L9(this)){var c=K9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.ii(b.style),g.If(a,c.trackData));O9(this,"setSubtitlesTrack",a);N9(this,c)}else M9(this,g.Ra(this.vN,a,b))};
g.k.setAudioTrack=function(a,b){L9(this)?(b=b.getLanguageInfo().getId(),O9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=K9(this),a.audioTrackId=b,N9(this,a)):M9(this,g.Ra(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=K9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);H9(l,a,c||0);void 0!==b&&(F9(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.ii(h));O9(this,"setPlaylist",m);d||N9(this,l)};
g.k.BE=function(a,b){if(L9(this)){if(a&&b){var c=K9(this);H9(c,a,b);N9(this,c)}O9(this,"previous")}else M9(this,g.Ra(this.BE,a,b))};
g.k.nextVideo=function(a,b){if(L9(this)){if(a&&b){var c=K9(this);H9(c,a,b);N9(this,c)}O9(this,"next")}else M9(this,g.Ra(this.nextVideo,a,b))};
g.k.Pv=function(){if(L9(this)){O9(this,"clearPlaylist");var a=K9(this);a.reset();N9(this,a);this.ma("remotePlayerChange")}else M9(this,this.Pv)};
g.k.rP=function(){L9(this)?O9(this,"dismissAutoplay"):M9(this,this.rP)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ma("proxyStateChange",a,this.B)}g.bz.prototype.dispose.call(this)};
g.k.ra=function(){$fb(this);this.C=null;this.F.clear();I9(this,null);g.bz.prototype.ra.call(this)};
g.k.vL=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ma("proxyStateChange",b,a);if(1==a)for(;!this.F.isEmpty();)b=a=this.F,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.k.W2=function(a,b){this.ma(a,b)};
g.k.E1=function(a){if(!a)this.rA(null),I9(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=K9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)a9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,N9(this,b)}};
g.k.rA=function(a){a9("Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.S);if(this.j=a)this.j.addUpdateListener(this.S),bgb(this),this.ma("remotePlayerChange")};
g.k.D1=function(a){a?(bgb(this),this.ma("remotePlayerChange")):this.rA(null)};
g.k.SL=function(){O9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.H1=function(){var a=Ufb();a&&I9(this,a)};
g.k.qf=function(a){$8("CP",a)};g.v(S9,g.bz);g.k=S9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ia&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;F9(this.j,
n);this.F="UNSUPPORTED";c=this.Ia?"setInitialState":"setPlaylist";Q9("Connecting with "+c+" and params: "+g.ii(m));this.u.connect({method:c,params:g.ii(m)},a,ucb())}else Q9("Connecting without params"),this.u.connect({},a,ucb());fgb(this)};
g.k.fp=function(a){this.u.fp(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ha("yt.mdx.remote.remoteClient_",null),this.ma("beforeDispose"),R9(this,3));g.bz.prototype.dispose.call(this)};
g.k.ra=function(){ggb(this);jgb(this);igb(this);g.Ju(this.S);this.S=NaN;g.Ju(this.Z);this.Z=NaN;this.C=null;g.vx(this.ea);this.ea.length=0;this.u.dispose();g.bz.prototype.ra.call(this);this.F=this.J=this.B=this.j=this.u=null};
g.k.HQ=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.t(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.OZ=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.zz())?this.u.Hw()&&isNaN(this.I)&&(a=1):a=2);return a};
g.k.dw=function(a){Q9("Disconnecting with "+a);g.Ha("yt.mdx.remote.remoteClient_",null);ggb(this);this.ma("beforeDisconnect",a);1==a&&i8();this.u.disconnect(a);this.dispose()};
g.k.MZ=function(){var a=this.j;this.C&&(a=this.j.clone(),H9(a,this.C,a.index));return Yfb(a)};
g.k.s5=function(a){var b=this,c=new D9(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.Ju(this.S),this.S=g.Hu(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&T9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&G9(this.j)==G9(c)&&g.ii(this.j.trackData)==g.ii(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.uc(d,function(e){this.ma(e)},this)};
g.k.WP=function(){var a=this.u.eq(),b=g.Vb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.zz=function(){return this.u.kq()};
g.k.JZ=function(){return this.F||"UNSUPPORTED"};
g.k.KZ=function(){return this.J||""};
g.k.cW=function(){!isNaN(this.zz())&&this.u.Vt()};
g.k.o5=function(a,b){T9(this,a,b);lgb(this)};
g.k.wN=function(){var a=g.Wu("SID","")||"",b=g.Wu("SAPISID","")||"",c=g.Wu("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Dc(g.bb(a),2);b=g.Dc(g.bb(b),2);c=g.Dc(g.bb(c),2);return g.Dc(g.bb(a+","+b+","+c),2)};
S9.prototype.subscribe=S9.prototype.subscribe;S9.prototype.unsubscribeByKey=S9.prototype.Tg;S9.prototype.getProxyState=S9.prototype.OZ;S9.prototype.disconnect=S9.prototype.dw;S9.prototype.getPlayerContextData=S9.prototype.MZ;S9.prototype.setPlayerContextData=S9.prototype.s5;S9.prototype.getOtherConnectedRemoteId=S9.prototype.WP;S9.prototype.getReconnectTimeout=S9.prototype.zz;S9.prototype.getAutoplayMode=S9.prototype.JZ;S9.prototype.getAutoplayVideoId=S9.prototype.KZ;S9.prototype.reconnect=S9.prototype.cW;
S9.prototype.sendMessage=S9.prototype.o5;S9.prototype.getXsrfToken=S9.prototype.wN;S9.prototype.isCapabilitySupportedOnConnectedDevices=S9.prototype.HQ;g.v(xgb,e9);g.k=xgb.prototype;g.k.Ej=function(a){return this.Yf.$_gs(a)};
g.k.contains=function(a){return!!this.Yf.$_c(a)};
g.k.get=function(a){return this.Yf.$_g(a)};
g.k.start=function(){this.Yf.$_st()};
g.k.add=function(a,b,c){this.Yf.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Yf.$_r(a,b,c)};
g.k.uF=function(a,b,c,d){this.Yf.$_un(a,b,c,d)};
g.k.ra=function(){for(var a=0,b=this.j.length;a<b;++a)this.Yf.$_ubk(this.j[a]);this.j.length=0;this.Yf=null;e9.prototype.ra.call(this)};
g.k.dW=function(){this.ma("screenChange")};
g.k.E2=function(){this.ma("onlineScreenChange")};
j9.prototype.$_st=j9.prototype.start;j9.prototype.$_gspc=j9.prototype.XV;j9.prototype.$_gsppc=j9.prototype.sN;j9.prototype.$_c=j9.prototype.contains;j9.prototype.$_g=j9.prototype.get;j9.prototype.$_a=j9.prototype.add;j9.prototype.$_un=j9.prototype.uF;j9.prototype.$_r=j9.prototype.remove;j9.prototype.$_gs=j9.prototype.Ej;j9.prototype.$_gos=j9.prototype.rN;j9.prototype.$_s=j9.prototype.subscribe;j9.prototype.$_ubk=j9.prototype.Tg;var d$=null,g$=!1,U9=null,V9=null,Igb=null,Z9=[];g.v(Ngb,g.L);g.k=Ngb.prototype;g.k.ra=function(){g.L.prototype.ra.call(this);this.u.stop();this.B.stop();this.S.stop();var a=this.vc;a.unsubscribe("proxyStateChange",this.jS,this);a.unsubscribe("remotePlayerChange",this.wA,this);a.unsubscribe("remoteQueueChange",this.mE,this);a.unsubscribe("previousNextChange",this.gS,this);a.unsubscribe("nowAutoplaying",this.aS,this);a.unsubscribe("autoplayDismissed",this.BR,this);this.vc=this.j=null};
g.k.Ik=function(a){var b=g.Aa.apply(1,arguments);if(2!=this.vc.B)if(h$(this)){if(!K9(this.vc).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":K9(this.vc).Sc()?this.vc.pause():this.vc.play();break;case "control_play":this.vc.play();break;case "control_pause":this.vc.pause();break;case "control_seek":this.J.ZF(b[0],b[1]);break;case "control_subtitles_set_track":Pgb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();i$(this,0===b?void 0:b);break;case "control_seek":i$(this,b[0]);break;case "control_subtitles_set_track":Pgb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.B1=function(a){this.S.BV(a)};
g.k.M6=function(a){this.Ik("control_subtitles_set_track",g.Cf(a)?null:a)};
g.k.FT=function(){var a=this.G.getOption("captions","track");g.Cf(a)||Pgb(this,a)};
g.k.jc=function(a){this.j.jc(a,this.G.getVideoData().lengthSeconds)};
g.k.l2=function(){g.Cf(this.C)||Qgb(this,this.C);this.F=!1};
g.k.jS=function(a,b){this.B.stop();2===b&&this.xT()};
g.k.wA=function(){if(h$(this)){this.u.stop();var a=K9(this.vc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.j.Ng=1;break;case 1082:case 1083:this.j.Ng=0;break;default:this.j.Ng=-1}switch(a.playerState){case 1081:case 1:this.Zb(new g.hK(8));this.wT();break;case 1085:case 3:this.Zb(new g.hK(9));break;case 1083:case 0:this.Zb(new g.hK(2));this.J.stop();this.jc(this.G.getVideoData().lengthSeconds);break;case 1084:this.Zb(new g.hK(4));break;case 2:this.Zb(new g.hK(4));this.jc(G9(a));
break;case -1:this.Zb(new g.hK(64));break;case -1E3:this.Zb(new g.hK(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",IC:2}))}a=K9(this.vc).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,Qgb(this,a));a=K9(this.vc);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.Z.isActive()||this.mU()}else Ogb(this)};
g.k.gS=function(){this.G.ma("mdxpreviousnextchange")};
g.k.mE=function(){h$(this)||Ogb(this)};
g.k.aS=function(a){isNaN(a)||this.G.ma("mdxnowautoplaying",a)};
g.k.BR=function(){this.G.ma("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){h$(this)&&this.vc.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===K9(this.vc).playerState?i$(this,a):b&&this.vc.seekTo(a)};
g.k.mU=function(){var a=this;if(h$(this)){var b=K9(this.vc);this.events.zc(this.ea);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.ea=this.events.T(this.G,"onVolumeChange",function(c){Lgb(a,c)})}};
g.k.wT=function(){this.u.stop();if(!this.vc.isDisposed()){var a=K9(this.vc);a.Sc()&&this.Zb(new g.hK(8));this.jc(G9(a));this.u.start()}};
g.k.xT=function(){this.B.stop();this.u.stop();var a=this.vc.kq();2==this.vc.B&&!isNaN(a)&&this.B.start()};
g.k.Zb=function(a){this.B.stop();var b=this.I;if(!g.mK(b,a)){var c=g.W(a,2);c!==g.W(this.I,2)&&this.G.xx(c);this.I=a;Sgb(this.j,b,a)}};g.v(j$,g.X);j$.prototype.Rc=function(){this.j.show()};
j$.prototype.Db=function(){this.j.hide()};
j$.prototype.u=function(){a8("mdx-privacy-popup-cancel");this.Db()};
j$.prototype.B=function(){a8("mdx-privacy-popup-confirm");this.Db()};g.v(k$,g.X);k$.prototype.onStateChange=function(a){this.Xc(a.state)};
k$.prototype.Xc=function(a){if(3===this.api.getPresentingPlayerType()){var b={RECEIVER_NAME:this.api.getOption("remote","currentReceiver").name};a=g.W(a,128)?g.PJ("Error on $RECEIVER_NAME",b):a.Sc()||g.nK(a)?g.PJ("Playing on $RECEIVER_NAME",b):g.PJ("Connected to $RECEIVER_NAME",b);this.Ma("statustext",a);this.j.show()}else this.j.hide()};g.v(l$,g.HR);l$.prototype.u=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.er=g.vc(a,this.j,this),g.IR(this,g.Uk(a,this.j)),a=this.G.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.Ki(a),this.enable(!0)):this.enable(!1)};
l$.prototype.j=function(a){return a.key};
l$.prototype.rk=function(a){return"cast-selector-receiver"===a?"Cast...":this.er[a].name};
l$.prototype.Ug=function(a){g.HR.prototype.Ug.call(this,a);this.G.setOption("remote","currentReceiver",this.er[a]);this.rb.Db()};g.v(Rgb,g.vO);g.k=Rgb.prototype;
g.k.create=function(){var a=this.player.V(),b=g.ZF(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};Cgb(b,a);this.subscriptions.push(g.Ox("yt-remote-before-disconnect",this.z1,this));this.subscriptions.push(g.Ox("yt-remote-connection-change",this.e3,this));this.subscriptions.push(g.Ox("yt-remote-receiver-availability-change",this.iS,
this));this.subscriptions.push(g.Ox("yt-remote-auto-connect",this.b3,this));this.subscriptions.push(g.Ox("yt-remote-receiver-resumed",this.Z2,this));this.subscriptions.push(g.Ox("mdx-privacy-popup-confirm",this.E4,this));this.subscriptions.push(g.Ox("mdx-privacy-popup-cancel",this.D4,this));this.iS()};
g.k.load=function(){this.player.cancelPlayback();g.vO.prototype.load.call(this);this.xk=new Ngb(this,this.player,this.vc);var a=(a=Kgb())?a.currentTime:0;var b=Hgb()?new J9(c$(),void 0):null;0==a&&b&&(a=G9(K9(b)));0!==a&&this.jc(a);Sgb(this,this.Fd,this.Fd);this.player.Kn(6)};
g.k.unload=function(){this.player.ma("mdxautoplaycanceled");this.Rp=this.Cn;g.$e(this.xk,this.vc);this.vc=this.xk=null;g.vO.prototype.unload.call(this);this.player.Kn(5);m$(this)};
g.k.ra=function(){g.Px(this.subscriptions);g.vO.prototype.ra.call(this)};
g.k.Dn=function(a){var b=g.Aa.apply(1,arguments);this.loaded&&this.xk.Ik.apply(this.xk,[a].concat(g.u(b)))};
g.k.getAdState=function(){return this.Ng};
g.k.cn=function(){return this.vc?K9(this.vc).cn:!1};
g.k.hasNext=function(){return this.vc?K9(this.vc).hasNext:!1};
g.k.jc=function(a,b){this.SQ=a||0;this.player.ma("progresssync",a,b);this.player.Pa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.SQ};
g.k.getProgressState=function(){var a=K9(this.vc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().N("web_player_mdx_allow_seeking_change_killswitch")?this.player.jg():!a.isAdPlaying()&&this.player.jg(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+E9(a):a.B,isAtLiveHead:1>=(a.u?a.j+E9(a):a.j)-this.getCurrentTime(),loaded:a.S,seekableEnd:a.u?a.j+E9(a):a.j,seekableStart:0<
a.C?a.C+E9(a):a.C}};
g.k.nextVideo=function(){this.vc&&this.vc.nextVideo()};
g.k.BE=function(){this.vc&&this.vc.BE()};
g.k.z1=function(a){1===a&&(this.KK=this.vc?K9(this.vc):null)};
g.k.e3=function(){var a=Hgb()?new J9(c$(),void 0):null;if(a){var b=this.Rp;this.loaded&&this.unload();this.vc=a;this.KK=null;b.key!==this.Cn.key&&(this.Rp=b,this.load())}else g.Ze(this.vc),this.vc=null,this.loaded&&(this.unload(),(a=this.KK)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,G9(a)));this.player.ma("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.iS=function(){var a=[this.Cn],b=a.concat,c=Dgb();A9()&&g.Nz("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.er=b.call(a,c);a=Fgb()||this.Cn;n$(this,a);this.player.Pa("onMdxReceiversChange")};
g.k.b3=function(){var a=Fgb();n$(this,a)};
g.k.Z2=function(){this.Rp=Fgb()};
g.k.E4=function(){this.FA=!0;m$(this);g$=!1;d$&&f$(d$,1);d$=null};
g.k.D4=function(){this.FA=!1;m$(this);n$(this,this.Cn);this.Rp=this.Cn;g$=!1;d$=null;this.player.playVideo()};
g.k.Eg=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.er;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Vfb():n$(this,b)),this.loaded?this.Rp:this.Cn;case "quickCast":return 2===this.er.length&&"cast-selector-receiver"===this.er[1].key?(b&&Vfb(),!0):!1}};
g.k.SL=function(){this.vc.SL()};
g.k.Sj=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.uO("remote",Rgb);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:05:39 Oct 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:44:06 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 81.042
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.059
  cdx.remote: 0.059
  esindex: 0.008
  LoadShardBlock: 37.216 (3)
  PetaboxLoader3.datanode: 109.837 (5)
  load_resource: 544.017 (2)
  PetaboxLoader3.resolve: 456.028 (2)
*/