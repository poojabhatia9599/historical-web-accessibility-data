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

(function(g){var window=this;'use strict';var Rab=function(a,b){this.u=a>>>0;this.j=b>>>0},Uab=function(a){if(!a)return Sab||(Sab=new Rab(0,0));
if(!/^\d+$/.test(a))return null;g.Dba(a);return new Rab(g.be,g.ce)},Vab=function(a,b,c){null!=c&&("string"===typeof c&&Uab(c),g.Ae(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.be=b,g.ce=c,g.ye(a,g.be),g.ye(a,g.ce)):(c=Uab(c),a=a.j,b=c.j,g.ye(a,c.u),g.ye(a,b)))},Wab=function(a,b,c){b=g.rba(b,c);
null!=b&&(g.Ae(a,c,0),a.j.j.push(b?1:0))},Yab=function(a){g.I.call(this,a,-1,Xab)},Zab=function(a){g.I.call(this,a)},$ab=function(a){g.I.call(this,a)},abb=function(a){g.I.call(this,a)},bbb=function(a){g.I.call(this,a)},Y7=function(a){g.Lj(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ra()).toString(36));
return a},Z7=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.dga(a.u,b,c)},cbb=function(a){if(a instanceof g.qm)return a;
if("function"==typeof a.gj)return a.gj(!1);if(g.La(a)){var b=0,c=new g.qm;c.next=function(){for(;;){if(b>=a.length)return g.z3;if(b in a)return g.rm(a[b++]);b++}};
return c}throw Error("Not implemented");},dbb=function(a,b,c){if(g.La(a))g.qc(a,b,c);
else for(a=cbb(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},ebb=function(a,b){var c=[];
dbb(b,function(d){try{var e=g.Fo.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Lka(e)&&c.push(d)},a);
return c},fbb=function(a,b){ebb(a,b).forEach(function(c){g.Fo.prototype.remove.call(this,c)},a)},gbb=function(a){if(a.oa){if(a.oa.locationOverrideToken)return{locationOverrideToken:a.oa.locationOverrideToken};
if(null!=a.oa.latitudeE7&&null!=a.oa.longitudeE7)return{latitudeE7:a.oa.latitudeE7,longitudeE7:a.oa.longitudeE7}}return null},hbb=function(a,b){g.Sb(a,b)||a.push(b)},ibb=function(a){var b=0,c;
for(c in a)b++;return b},jbb=function(a,b){return g.tf(a,b)},kbb=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},$7=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return kbb(a)},lbb=function(a,b,c,d){var e=new g.Dj(null);
a&&g.Ej(e,a);b&&g.Fj(e,b);c&&g.Gj(e,c);d&&(e.J=d);return e},a8=function(a,b){g.Qx[a]=!0;
var c=g.Ox();c&&c.publish.apply(c,arguments);g.Qx[a]=!1},b8=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.oo;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",mbb(this,a.capabilities||""),nbb(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},mbb=function(a,b){a.capabilities.clear();
g.vm(b.split(","),g.Qa(jbb,obb)).forEach(function(c){a.capabilities.add(c)})},nbb=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},c8=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},d8=function(a,b){return!!b&&(a.id==b||a.uuid==b)},pbb=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},qbb=function(a){return new c8(a)},rbb=function(a){return Array.isArray(a)?g.Ok(a,qbb):[]},e8=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},sbb=function(a){return Array.isArray(a)?"["+g.Ok(a,e8).join(",")+"]":"null"},tbb=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},ubb=function(a){return g.Ok(a,function(b){return{key:b.id,
name:b.name}})},vbb=function(a,b){return g.Pb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},f8=function(a,b){return g.Pb(a,function(c){return d8(c,b)})},wbb=function(){var a=(0,g.Lz)();
a&&fbb(a,a.j.gj(!0))},g8=function(){var a=g.Oz("yt-remote-connected-devices")||[];
g.lc(a);return a},xbb=function(a){if(g.Vb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Ok(a,function(d,e){return 0==e?d:d.substring(c.length)})},ybb=function(a){g.Nz("yt-remote-connected-devices",a,86400)},h8=function(){if(zbb)return zbb;
var a=g.Oz("yt-remote-device-id");a||(a=tbb(),g.Nz("yt-remote-device-id",a,31536E3));for(var b=g8(),c=1,d=a;g.Sb(b,d);)c++,d=a+"#"+c;return zbb=d},Abb=function(){var a=g8(),b=h8();
g.Qz()&&g.nc(a,b);a=xbb(a);if(g.Vb(a))try{g.Lu("remote_sid")}catch(c){}else try{g.Ju("remote_sid",a.join(","),-1)}catch(c){}},Bbb=function(){return g.Oz("yt-remote-session-browser-channel")},Cbb=function(){return g.Oz("yt-remote-local-screens")||[]},Dbb=function(){g.Nz("yt-remote-lounge-token-expiration",!0,86400)},Ebb=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Ok(Cbb(),function(d){return d.loungeToken}),c=g.Ok(a,function(d){return d.loungeToken});
g.Td(c,function(d){return!g.Sb(b,d)})&&Dbb();
g.Nz("yt-remote-local-screens",a,31536E3)},i8=function(a){a||(g.Pz("yt-remote-session-screen-id"),g.Pz("yt-remote-session-video-id"));
Abb();a=g8();g.Xb(a,h8());ybb(a)},Fbb=function(){if(!j8){var a=g.Oo();
a&&(j8=new g.Co(a))}},Gbb=function(){Fbb();
return j8?!!j8.get("yt-remote-use-staging-server"):!1},Hbb=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},Ibb=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},Jbb=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},k8=function(a){a.length?Kbb(a.shift(),function(){k8(a)}):Lbb()},Mbb=function(a){return"chrome-extension://"+a+"/cast_sender.js"},Kbb=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.bj(d,g.lg(a));(document.head||document.documentElement).appendChild(d)},Nbb=function(){var a=Hbb(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20220831235837/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20220831235837/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},Lbb=function(){var a=Jbb();
a&&a(!1,"No cast extension found")},Pbb=function(){if(Obb){var a=2,b=Jbb(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Kbb("//web.archive.org/web/20220831235837/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Lbb,c)}},Qbb=function(){Pbb();
var a=Nbb();a.push("//web.archive.org/web/20220831235837/https://www.gstatic.com/eureka/clank/cast_sender.js");k8(a)},Sbb=function(){Pbb();
var a=Nbb();a.push.apply(a,g.u(Rbb.map(Mbb)));a.push("//web.archive.org/web/20220831235837/https://www.gstatic.com/eureka/clank/cast_sender.js");k8(a)},Tbb=function(){this.j=l8();
this.j.rp("/client_streamz/youtube/living_room/mdx/channel/opened",{Ph:3,Oh:"channel_type"})},Ubb=function(a,b){a.j.Br("/client_streamz/youtube/living_room/mdx/channel/opened",b)},Vbb=function(){this.j=l8();
this.j.rp("/client_streamz/youtube/living_room/mdx/channel/closed",{Ph:3,Oh:"channel_type"})},Wbb=function(a,b){a.j.Br("/client_streamz/youtube/living_room/mdx/channel/closed",b)},Xbb=function(){this.j=l8();
this.j.rp("/client_streamz/youtube/living_room/mdx/channel/message_received",{Ph:3,Oh:"channel_type"})},Ybb=function(a,b){a.j.Br("/client_streamz/youtube/living_room/mdx/channel/message_received",b)},Zbb=function(){this.j=l8();
this.j.rp("/client_streamz/youtube/living_room/mdx/channel/error",{Ph:3,Oh:"channel_type"})},$bb=function(a,b){a.j.Br("/client_streamz/youtube/living_room/mdx/channel/error",b)},acb=function(){this.j=l8();
this.j.rp("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},bcb=function(){this.j=l8();
this.j.rp("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},m8=function(a,b,c){g.K.call(this);
this.I=null!=c?(0,g.Pa)(a,c):a;this.uh=b;this.D=(0,g.Pa)(this.OU,this);this.j=!1;this.u=0;this.B=this.wc=null;this.C=[]},n8=function(a,b,c){g.K.call(this);
this.C=null!=c?a.bind(c):a;this.uh=b;this.B=null;this.j=!1;this.u=0;this.wc=null},ccb=function(a){a.wc=g.Mh(function(){a.wc=null;
a.j&&!a.u&&(a.j=!1,ccb(a))},a.uh);
var b=a.B;a.B=null;a.C.apply(null,b)},o8=function(){},dcb=function(){g.af.call(this,"p")},ecb=function(){g.af.call(this,"o")},fcb=function(){var a=new g.C.TextEncoder;
return new g.C.ReadableStream({start:function(b){for(var c=g.r(["test\r\n","test\r\n"]),d=c.next();!d.done;d=c.next())b.enqueue(a.encode(d.value));b.close()}})},gcb=function(a){return(a=/\/\/([^\/]+)\//.exec(a))?a[1].endsWith("google.com"):!1},icb=function(a,b){if(!hcb){hcb=!0;
var c;a:{if(c=g.C.navigator)if(c=c.userAgent)break a;c=""}(-1==c.indexOf("Chrome")||-1!=c.indexOf("Edg")?0:90<=parseInt(/Chrome\/(\d+)/.exec(c)[1],10))&&gcb(a)&&window&&window.document&&gcb(window.document.URL)&&(c=document.createElement("meta"),c.httpEquiv="origin-trial",c.content="A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
document.head.appendChild(c),(new Request("",{body:new ReadableStream,method:"POST"})).headers.has("Content-Type")||(g.C.fetch(a+"?ot=1",{method:"POST",body:"test\r\n"}).catch(b),g.C.fetch(a+"?ot=2",{method:"POST",body:fcb(),qX:!1}).catch(b),g.C.fetch(a+"?ot=3",{method:"POST",body:fcb(),qX:!0}).catch(b)))}},kcb=function(){return jcb=jcb||new g.Uf},lcb=function(a){g.af.call(this,"serverreachability",a)},p8=function(a){var b=kcb();
b.dispatchEvent(new lcb(b,a))},mcb=function(a,b){g.af.call(this,"statevent",a);
this.stat=b},q8=function(a){var b=kcb();
b.dispatchEvent(new mcb(b,a))},ncb=function(a,b,c,d){g.af.call(this,"timingevent",a);
this.size=b;this.Qw=d},r8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},ocb=function(){},s8=function(a,b,c,d){this.D=a;
this.C=b;this.Rc=c;this.zc=d||1;this.jb=new g.Qj(this);this.zb=45E3;a=g.oG?125:void 0;this.kb=new g.Lh(a);this.La=null;this.B=!1;this.S=this.bb=this.J=this.Qa=this.ya=this.Lb=this.Z=null;this.oa=[];this.j=null;this.ea=0;this.I=this.Aa=null;this.Ub=-1;this.Ia=!1;this.rb=0;this.Xa=null;this.xc=this.Ta=this.kc=this.Ba=!1;this.u=new pcb},pcb=function(){this.B=null;
this.j="";this.u=!1},rcb=function(a,b,c){a.Qa=1;
a.J=Y7(b.clone());a.S=c;a.Ba=!0;qcb(a,null)},qcb=function(a,b){a.ya=Date.now();
t8(a);a.bb=a.J.clone();Z7(a.bb,"t",a.zc);a.ea=0;var c=a.D.Qa;a.u=new pcb;a.j=scb(a.D,c?b:null,!a.S);0<a.rb&&(a.Xa=new n8((0,g.Pa)(a.jM,a,a.j),a.rb));a.jb.Ra(a.j,"readystatechange",a.RU);b=a.La?g.Gf(a.La):{};a.S?(a.Aa||(a.Aa="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.bb,a.Aa,a.S,b)):(a.Aa="GET",a.j.send(a.bb,a.Aa,null,b));p8(1)},tcb=function(a){return a.j?"GET"==a.Aa&&2!=a.Qa&&a.D.me:!1},xcb=function(a,b,c){for(var d=!0,e;!a.Ia&&a.ea<c.length;)if(e=ucb(a,c),e==u8){4==
b&&(a.I=4,q8(14),d=!1);
break}else if(e==vcb){a.I=4;q8(15);d=!1;break}else wcb(a,e);tcb(a)&&e!=u8&&e!=vcb&&(a.u.j="",a.ea=0);4!=b||0!=c.length||a.u.u||(a.I=1,q8(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.xc&&(a.xc=!0,a.D.yJ(a)):(v8(a),w8(a))},ucb=function(a,b){var c=a.ea,d=b.indexOf("\n",c);
if(-1==d)return u8;c=Number(b.substring(c,d));if(isNaN(c))return vcb;d+=1;if(d+c>b.length)return u8;b=b.slice(d,d+c);a.ea=d+c;return b},t8=function(a){a.Lb=Date.now()+a.zb;
ycb(a,a.zb)},ycb=function(a,b){if(null!=a.Z)throw Error("WatchDog timer not null");
a.Z=r8((0,g.Pa)(a.PU,a),b)},x8=function(a){a.Z&&(g.C.clearTimeout(a.Z),a.Z=null)},w8=function(a){a.D.Wf()||a.Ia||zcb(a.D,a)},v8=function(a){x8(a);
g.Ye(a.Xa);a.Xa=null;a.kb.stop();g.Rj(a.jb);if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},wcb=function(a,b){try{var c=a.D;
if(0!=c.qg&&(c.j==a||Acb(c.u,a)))if(!a.Ta&&Acb(c.u,a)&&3==c.qg){try{var d=c.oe.j.parse(b)}catch(z){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.S){if(c.j)if(c.j.ya+3E3<a.ya)y8(c),z8(c);else break a;Bcb(c);q8(18)}}else c.Hd=e[1],0<c.Hd-c.Ta&&37500>e[2]&&c.kb&&0==c.oa&&!c.ea&&(c.ea=r8((0,g.Pa)(c.SU,c),6E3));if(1>=Ccb(c.u)&&c.Lc){try{c.Lc()}catch(z){}c.Lc=void 0}}else A8(c,11)}else if((a.Ta||c.j==a)&&y8(c),!g.cb(b))for(e=c.oe.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Ta=f[0];
f=f[1];if(2==c.qg)if("c"==f[0]){c.C=f[1];c.xc=f[2];var h=f[3];null!=h&&(c.kM=h);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.bb=1.5*l);d=c;var m=a.j;if(m){var n=g.Hi(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.eb(n,"spdy")||g.eb(n,"quic")||g.eb(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(Dcb(p,p.u),p.u=null))}if(d.Ba){var q=g.Hi(m,"X-HTTP-Session-Id");q&&(d.Nd=q,g.Lj(d.La,d.Ba,q))}}c.qg=3;c.D&&c.D.qM();c.Hc&&(c.jd=Date.now()-a.ya);d=c;var t=a;d.wd=Ecb(d,d.Qa?d.xc:null,d.zc);if(t.Ta){Fcb(d.u,
t);var w=t,y=d.bb;y&&w.setTimeout(y);w.Z&&(x8(w),t8(w));d.j=t}else Gcb(d);0<c.B.length&&B8(c)}else"stop"!=f[0]&&"close"!=f[0]||A8(c,7);else 3==c.qg&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?A8(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.pM(f),c.oa=0)}p8(4)}catch(z){}},Hcb=function(a,b){this.j=a;
this.map=b;this.context=null},Icb=function(a){this.D=a||10;
g.C.PerformanceNavigationTiming?(a=g.C.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.C.chrome&&g.C.chrome.loadTimes&&g.C.chrome.loadTimes()&&g.C.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},Jcb=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},Ccb=function(a){return a.u?1:a.j?a.j.size:0},Acb=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},Dcb=function(a,
b){a.j?a.j.add(b):a.u=b},Fcb=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},Kcb=function(a){if(null!=a.u)return a.B.concat(a.u.oa);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.r(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.oa);return b}return g.bc(a.B)},Lcb=function(a,b){var c=new ocb;
if(g.C.Image){var d=new Image;d.onload=g.Qa(C8,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Qa(C8,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Qa(C8,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Qa(C8,c,d,"TestLoadImage: timeout",!1,b);g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},C8=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},Mcb=function(){this.j=new o8},Ncb=function(a,b,c){var d=c||"";
try{g.Cj(a,function(e,f){var h=e;g.Ma(e)&&(h=g.di(e));b.push(d+f+"="+encodeURIComponent(h))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},D8=function(a,b,c){return c&&c.NZ?c.NZ[a]||b:b},Ocb=function(a){this.B=[];
this.xc=this.wd=this.La=this.zc=this.j=this.Nd=this.Ba=this.Ia=this.J=this.Lb=this.Z=null;this.Oe=this.Xa=0;this.Ce=D8("failFast",!1,a);this.kb=this.ea=this.S=this.I=this.D=null;this.Rc=!0;this.Hd=this.Ta=-1;this.kc=this.oa=this.ya=0;this.Be=D8("baseRetryDelayMs",5E3,a);this.jf=D8("retryDelaySeedMs",1E4,a);this.Ne=D8("forwardChannelMaxRetries",2,a);this.Ud=D8("forwardChannelRequestTimeoutMs",2E4,a);this.Id=a&&a.w6a||void 0;this.me=a&&a.u6a||!1;this.bb=void 0;this.Qa=a&&a.h5||!1;this.C="";this.u=new Icb(a&&
a.c5a);this.oe=new Mcb;this.zb=a&&a.r5a||!1;this.rb=a&&a.j5a||!1;this.zb&&this.rb&&(this.rb=!1);this.kf=a&&a.X4a||!1;a&&a.t5a&&(this.Rc=!1);this.Hc=!this.zb&&this.Rc&&a&&a.g5a||!1;this.Lc=void 0;this.jd=0;this.jb=!1;this.Aa=null;this.zf=!a||!1!==a.i5a;this.Ub=null},z8=function(a){a.j&&(Pcb(a),a.j.cancel(),a.j=null)},Qcb=function(a){z8(a);
a.S&&(g.C.clearTimeout(a.S),a.S=null);y8(a);a.u.cancel();a.I&&("number"===typeof a.I&&g.C.clearTimeout(a.I),a.I=null)},B8=function(a){Jcb(a.u)||a.I||(a.I=!0,g.Bh(a.mM,a),a.ya=0)},Scb=function(a,b){if(Ccb(a.u)>=a.u.C-(a.I?1:0))return!1;
if(a.I)return a.B=b.oa.concat(a.B),!0;if(1==a.qg||2==a.qg||a.ya>=(a.Ce?0:a.Ne))return!1;a.I=r8((0,g.Pa)(a.mM,a,b),Rcb(a,a.ya));a.ya++;return!0},Ucb=function(a,b){var c;
b?c=b.Rc:c=a.Xa++;var d=a.La.clone();g.Lj(d,"SID",a.C);g.Lj(d,"RID",c);g.Lj(d,"AID",a.Ta);E8(a,d);a.J&&a.Z&&g.Pj(d,a.J,a.Z);c=new s8(a,a.C,c,a.ya+1);null===a.J&&(c.La=a.Z);b&&(a.B=b.oa.concat(a.B));b=Tcb(a,c,1E3);c.setTimeout(Math.round(.5*a.Ud)+Math.round(.5*a.Ud*Math.random()));Dcb(a.u,c);rcb(c,d,b)},E8=function(a,b){a.Ia&&g.lf(a.Ia,function(c,d){g.Lj(b,d,c)});
a.D&&g.Cj({},function(c,d){g.Lj(b,d,c)})},Tcb=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Pa)(a.D.TU,a.D,a):null;a:for(var e=a.B,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].j,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{Ncb(p,h,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=h.join("&");break a}}a=a.B.splice(0,c);b.oa=a;return d},Gcb=function(a){a.j||a.S||(a.kc=1,g.Bh(a.lM,a),a.oa=0)},Bcb=function(a){if(a.j||a.S||3<=a.oa)return!1;
a.kc++;a.S=r8((0,g.Pa)(a.lM,a),Rcb(a,a.oa));a.oa++;return!0},Pcb=function(a){null!=a.Aa&&(g.C.clearTimeout(a.Aa),a.Aa=null)},Vcb=function(a){a.j=new s8(a,a.C,"rpc",a.kc);
null===a.J&&(a.j.La=a.Z);a.j.rb=0;var b=a.wd.clone();g.Lj(b,"RID","rpc");g.Lj(b,"SID",a.C);g.Lj(b,"CI",a.kb?"0":"1");g.Lj(b,"AID",a.Ta);g.Lj(b,"TYPE","xmlhttp");E8(a,b);a.J&&a.Z&&g.Pj(b,a.J,a.Z);a.bb&&a.j.setTimeout(a.bb);var c=a.j;a=a.xc;c.Qa=1;c.J=Y7(b.clone());c.S=null;c.Ba=!0;qcb(c,a)},y8=function(a){null!=a.ea&&(g.C.clearTimeout(a.ea),a.ea=null)},zcb=function(a,b){var c=null;
if(a.j==b){y8(a);Pcb(a);a.j=null;var d=2}else if(Acb(a.u,b))c=b.oa,Fcb(a.u,b),d=1;else return;if(0!=a.qg)if(b.B)if(1==d){c=b.S?b.S.length:0;b=Date.now()-b.ya;var e=a.ya;d=kcb();d.dispatchEvent(new ncb(d,c,b,e));B8(a)}else Gcb(a);else{var f=b.Ub;e=b.getLastError();if(3==e||0==e&&0<f||!(1==d&&Scb(a,b)||2==d&&Bcb(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:A8(a,5);break;case 4:A8(a,10);break;case 3:A8(a,6);break;default:A8(a,2)}}},Rcb=function(a,b){var c=a.Be+Math.floor(Math.random()*
a.jf);
a.isActive()||(c*=2);return c*b},A8=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Pa)(a.q5,a);c||(c=new g.Dj("//web.archive.org/web/20220831235837/https://www.google.com/images/cleardot.gif"),g.C.location&&"http"==g.C.location.protocol||g.Ej(c,"https"),Y7(c));Lcb(c.toString(),d)}else q8(2);a.qg=0;a.D&&a.D.oM(b);Wcb(a);Qcb(a)},Wcb=function(a){a.qg=0;
a.Ub=[];if(a.D){var b=Kcb(a.u);if(0!=b.length||0!=a.B.length)g.cc(a.Ub,b),g.cc(a.Ub,a.B),a.u.B.length=0,g.bc(a.B),a.B.length=0;a.D.nM()}},Xcb=function(a){if(0==a.qg)return a.Ub;
var b=[];g.cc(b,Kcb(a.u));g.cc(b,a.B);return b},Ecb=function(a,b,c){var d=g.Mj(c);
""!=d.j?(b&&g.Fj(d,b+"."+d.j),g.Gj(d,d.B)):(d=g.C.location,d=lbb(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.Ba;c=a.Nd;b&&c&&g.Lj(d,b,c);g.Lj(d,"VER",a.kM);E8(a,d);return d},scb=function(a,b,c){if(b&&!a.Qa)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.me&&!a.Id?new g.Ai(new g.yj({IS:!0})):new g.Ai(a.Id);b.J=a.Qa;return b},Ycb=function(){},Zcb=function(){if(g.Ac&&!g.wc(10))throw Error("Environmental error: no available transport.");
},G8=function(a,b){g.Uf.call(this);
this.j=new Ocb(b);this.I=a;this.u=b&&b.v_||null;a=b&&b.u_||null;b&&b.b5a&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.Z=a;a=b&&b.x5a||null;b&&b.rQ&&(a?a["X-WebChannel-Content-Type"]=b.rQ:a={"X-WebChannel-Content-Type":b.rQ});b&&b.oO&&(a?a["X-WebChannel-Client-Profile"]=b.oO:a={"X-WebChannel-Client-Profile":b.oO});this.j.Lb=a;(a=b&&b.v5a)&&!g.cb(a)&&(this.j.J=a);this.J=b&&b.h5||!1;this.D=b&&b.g6a||!1;(b=b&&b.FZ)&&!g.cb(b)&&(this.j.Ba=b,g.sf(this.u,b)&&g.wf(this.u,
b));this.C=new F8(this)},$cb=function(a){dcb.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.pf(b))?g.Ef(b,this.metadataKey):b:this.data=a},adb=function(a){ecb.call(this);
this.status=1;this.errorCode=a},F8=function(a){this.j=a},bdb=function(a,b){this.u=a;
this.j=b},cdb=function(a){return Xcb(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?kbb(b):b);return b})},H8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},J8=function(a){I8.dispatchEvent(new ddb(I8,a))},ddb=function(a,b){g.af.call(this,"statevent",a);
this.stat=b},K8=function(a,b,c,d){this.j=a;
this.C=b;this.J=c;this.I=d||1;this.u=45E3;this.B=new g.Qj(this);this.D=new g.Lh;this.D.setInterval(250)},fdb=function(a,b,c){a.xu=1;
a.ep=Y7(b.clone());a.yr=c;a.Ba=!0;edb(a,null)},gdb=function(a,b,c,d,e){a.xu=1;
a.ep=Y7(b.clone());a.yr=null;a.Ba=c;e&&(a.rS=!1);edb(a,d)},edb=function(a,b){a.wu=Date.now();
L8(a);a.gp=a.ep.clone();Z7(a.gp,"t",a.I);a.kB=0;a.Gh=a.j.yF(a.j.Ix()?b:null);0<a.wF&&(a.iB=new n8((0,g.Pa)(a.rM,a,a.Gh),a.wF));a.B.Ra(a.Gh,"readystatechange",a.VU);b=a.xr?g.Gf(a.xr):{};a.yr?(a.jB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Gh.send(a.gp,a.jB,a.yr,b)):(a.jB="GET",a.rS&&!g.gf&&(b.Connection="close"),a.Gh.send(a.gp,a.jB,null,b));a.j.zl(1)},jdb=function(a,b){var c=a.kB,d=b.indexOf("\n",c);
if(-1==d)return hdb;c=Number(b.substring(c,d));if(isNaN(c))return idb;d+=1;if(d+c>b.length)return hdb;b=b.slice(d,d+c);a.kB=d+c;return b},ldb=function(a,b){a.wu=Date.now();
L8(a);var c=b?window.location.hostname:"";a.gp=a.ep.clone();g.Lj(a.gp,"DOMAIN",c);g.Lj(a.gp,"t",a.I);try{a.Jl=new ActiveXObject("htmlfile")}catch(m){M8(a);a.fp=7;J8(22);N8(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in O8)f=O8[f];else if(f in kdb)f=O8[f]=kdb[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
O8[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Ag(g.ig("b/12014412"),d);a.Jl.open();a.Jl.write(g.yg(c));a.Jl.close();a.Jl.parentWindow.m=(0,g.Pa)(a.d3,a);a.Jl.parentWindow.d=(0,g.Pa)(a.wR,a,!0);a.Jl.parentWindow.rpcClose=(0,g.Pa)(a.wR,a,!1);c=a.Jl.createElement("DIV");a.Jl.parentWindow.document.body.appendChild(c);d=g.pg(a.gp.toString());d=g.Tg(g.og(d));d=g.Ag(g.ig("b/12014412"),'<iframe src="'+d+'"></iframe>');g.sda(c,d);a.j.zl(1)},L8=function(a){a.xF=
Date.now()+a.u;
mdb(a,a.u)},mdb=function(a,b){if(null!=a.yu)throw Error("WatchDog timer not null");
a.yu=H8((0,g.Pa)(a.UU,a),b)},ndb=function(a){a.yu&&(g.C.clearTimeout(a.yu),a.yu=null)},N8=function(a){a.j.Wf()||a.wr||a.j.lB(a)},M8=function(a){ndb(a);
g.Ye(a.iB);a.iB=null;a.D.stop();g.Rj(a.B);if(a.Gh){var b=a.Gh;a.Gh=null;b.abort();b.dispose()}a.Jl&&(a.Jl=null)},odb=function(a,b){try{a.j.sM(a,b),a.j.zl(4)}catch(c){}},qdb=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;pdb(a,b,function(h){h?c(!0):g.C.setTimeout(function(){qdb(a,b,c,d,f)},f)})}},pdb=function(a,b,c){var d=new Image;
d.onload=function(){try{P8(d),c(!0)}catch(e){}};
d.onerror=function(){try{P8(d),c(!1)}catch(e){}};
d.onabort=function(){try{P8(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{P8(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},P8=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},rdb=function(a){this.j=a;
this.u=new o8},sdb=function(a){var b=Q8(a.j,a.ey,"/mail/images/cleardot.gif");
Y7(b);qdb(b.toString(),5E3,(0,g.Pa)(a.IX,a),3,2E3);a.zl(1)},tdb=function(a){var b=a.j.Z;
if(null!=b)J8(5),b?(J8(11),R8(a.j,a,!1)):(J8(12),R8(a.j,a,!0));else if(a.zi=new K8(a),a.zi.xr=a.zF,b=a.j,b=Q8(b,b.Ix()?a.Hx:null,a.AF),J8(5),!g.Ac||g.wc(10))Z7(b,"TYPE","xmlhttp"),gdb(a.zi,b,!1,a.Hx,!1);else{Z7(b,"TYPE","html");var c=a.zi;a=!!a.Hx;c.xu=3;c.ep=Y7(b.clone());ldb(c,a)}},udb=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new o8;this.S=a||null;this.Z=null!=b?b:null;this.J=c||!1},vdb=function(a,b){this.j=a;
this.map=b;this.context=null},wdb=function(a,b,c,d){g.af.call(this,"timingevent",a);
this.size=b;this.Qw=d},xdb=function(a){g.af.call(this,"serverreachability",a)},zdb=function(a){a.WU(1,0);
a.mB=Q8(a,null,a.BF);ydb(a)},Adb=function(a){a.Ap&&(a.Ap.abort(),a.Ap=null);
a.If&&(a.If.cancel(),a.If=null);a.Ln&&(g.C.clearTimeout(a.Ln),a.Ln=null);S8(a);a.Fi&&(a.Fi.cancel(),a.Fi=null);a.hp&&(g.C.clearTimeout(a.hp),a.hp=null)},Bdb=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new vdb(a.XU++,b));2!=a.j&&3!=a.j||ydb(a)},Cdb=function(a){var b=0;
a.If&&b++;a.Fi&&b++;return b},ydb=function(a){a.Fi||a.hp||(a.hp=H8((0,g.Pa)(a.wM,a),0),a.Bu=0)},Fdb=function(a,b){if(1==a.j){if(!b){a.Kx=Math.floor(1E5*Math.random());
b=a.Kx++;var c=new K8(a,"",b);c.xr=a.Nl;var d=Ddb(a),e=a.mB.clone();g.Lj(e,"RID",b);g.Lj(e,"CVER","1");T8(a,e);fdb(c,e,d);a.Fi=c;a.j=2}}else 3==a.j&&(b?Edb(a,b):0==a.u.length||a.Fi||Edb(a))},Edb=function(a,b){if(b)if(6<a.zr){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.Kx-1;b=Ddb(a)}else c=b.J,b=b.yr;else c=a.Kx++,b=Ddb(a);var d=a.mB.clone();g.Lj(d,"SID",a.C);g.Lj(d,"RID",c);g.Lj(d,"AID",a.Cu);T8(a,d);c=new K8(a,a.C,c,a.Bu+1);c.xr=a.Nl;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Fi=c;fdb(c,d,b)},T8=function(a,b){a.nh&&(a=a.nh.AM())&&g.lf(a,function(c,d){g.Lj(b,d,c)})},Ddb=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.zr&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={mu:e.mu},f++){e.mu=a.u[f].j;var h=a.u[f].map;e.mu=6>=a.zr?f:e.mu-d;try{g.lf(h,function(l){return function(m,n){c.push("req"+l.mu+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.mu+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},Gdb=function(a){a.If||a.Ln||(a.I=1,a.Ln=H8((0,g.Pa)(a.vM,a),0),a.Au=0)},Idb=function(a){if(a.If||a.Ln||3<=a.Au)return!1;
a.I++;a.Ln=H8((0,g.Pa)(a.vM,a),Hdb(a,a.Au));a.Au++;return!0},R8=function(a,b,c){a.RE=c;
a.Ol=b.Kn;a.J||zdb(a)},S8=function(a){null!=a.Ar&&(g.C.clearTimeout(a.Ar),a.Ar=null)},Hdb=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},U8=function(a,b){if(2==b||9==b){var c=null;
a.nh&&(c=null);var d=(0,g.Pa)(a.p5,a);c||(c=new g.Dj("//web.archive.org/web/20220831235837/https://www.google.com/images/cleardot.gif"),Y7(c));pdb(c.toString(),1E4,d)}else J8(2);Jdb(a,b)},Jdb=function(a,b){a.j=0;
a.nh&&a.nh.xM(b);Kdb(a);Adb(a)},Kdb=function(a){a.j=0;
a.Ol=-1;if(a.nh)if(0==a.B.length&&0==a.u.length)a.nh.CF();else{var b=g.bc(a.B),c=g.bc(a.u);a.B.length=0;a.u.length=0;a.nh.CF(b,c)}},Q8=function(a,b,c){var d=g.Mj(c);
if(""!=d.j)b&&g.Fj(d,b+"."+d.j),g.Gj(d,d.B);else{var e=window.location;d=lbb(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Jx&&g.lf(a.Jx,function(f,h){g.Lj(d,h,f)});
g.Lj(d,"VER",a.zr);T8(a,d);return d},Ldb=function(){},Mdb=function(){this.j=[];
this.u=[]},Ndb=function(a){g.af.call(this,"channelMessage");
this.message=a},Odb=function(a){g.af.call(this,"channelError");
this.error=a},Pdb=function(a,b){this.action=a;
this.params=b||{}},V8=function(a,b){g.K.call(this);
this.j=new g.Xn(this.T2,0,this);g.M(this,this.j);this.uh=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Pa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Pa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},Qdb=function(){},l8=function(){if(!W8){W8=new g.Oh(new Qdb);
var a=g.au("client_streamz_web_flush_count",-1);-1!==a&&(W8.C=a)}return W8},Rdb=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ya=a;this.J=b;this.B=new g.Bo;this.u=new V8(this.o4,this);this.j=null;this.ea=!1;this.I=null;this.Z="";this.S=this.D=0;this.C=[];this.Qa=c;this.oa=d;this.Ta=e;this.La=new Tbb;this.Aa=new Vbb;this.Ia=new Xbb;this.Ba=new Zbb;this.Xa=new acb;this.bb=new bcb},Sdb=function(a){if(a.j){var b=a.oa(),c=a.j.Nl||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Nl=c}},X8=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.ji(4,a))||"";b&&(this.port=":"+b);this.domain=g.pi(a)||"";a=g.nb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.lb(a,"10.0")&&(this.u=!1))},Y8=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.wi(c+b,{})},Tdb=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Qa(a.C,d,!0),onError:g.Qa(a.B,e),onTimeout:g.Qa(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Au(b,a)},Udb=function(a,b){g.Uf.call(this);
var c=this;this.Wc=a();this.Wc.subscribe("handlerOpened",this.bV,this);this.Wc.subscribe("handlerClosed",this.ZU,this);this.Wc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Wc.subscribe("handlerMessage",this.aV,this);this.j=b},Vdb=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new Zcb:e;var f=void 0===f?new g.Bo:f;this.pathPrefix=a;this.j=b;this.ya=c;this.D=f;this.S=null;this.Z=this.J=0;this.channel=null;this.I=0;this.B=new V8(function(){d.B.isActive();var h;0===(null==(h=d.channel)?void 0:Ccb((new bdb(h,h.j)).j.u))&&d.connect(d.S,d.J)});
this.C={};this.u={};this.ea=!1;this.logger=null;this.oa=[];this.Hg=void 0;this.La=new Tbb;this.Aa=new Vbb;this.Ia=new Xbb;this.Ba=new Zbb},Wdb=function(a){g.Nf(a.channel,"m",function(){a.I=3;
a.B.reset();a.S=null;a.J=0;for(var b=g.r(a.oa),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.oa=[];a.ma("webChannelOpened");Ubb(a.La,"WEB_CHANNEL")});
g.Nf(a.channel,"n",function(){a.I=0;a.B.isActive()||a.ma("webChannelClosed");var b,c=null==(b=a.channel)?void 0:cdb(new bdb(b,b.j));c&&(a.oa=[].concat(g.u(c)));Wbb(a.Aa,"WEB_CHANNEL")});
g.Nf(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.ma("webChannelMessage",new Pdb(c[0],c[1]));a.Hg=b.statusCode;Ybb(a.Ia,"WEB_CHANNEL")});
g.Nf(a.channel,"o",function(){401===a.Hg||a.B.start();a.ma("webChannelError");$bb(a.Ba,"WEB_CHANNEL")})},Xdb=function(a){var b=a.ya();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},Ydb=function(a){g.Uf.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.eV,this);this.j.subscribe("webChannelClosed",this.cV,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.dV,this)},Zdb=function(a,b,c,d,e){function f(){return new Rdb(Y8(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.S("enable_mdx_web_channel_desktop")?new Ydb(function(){return new Vdb(Y8(a,"/wc"),b,c)}):new Udb(f,e)},ceb=function(){var a=$db;
aeb();Z8.push(a);beb()},$8=function(a,b){aeb();
var c=deb(a,String(b));g.Vb(Z8)?eeb(c):(beb(),g.qc(Z8,function(d){d(c)}))},a9=function(a){$8("CP",a)},aeb=function(){Z8||(Z8=g.Ga("yt.mdx.remote.debug.handlers_")||[],g.Fa("yt.mdx.remote.debug.handlers_",Z8))},eeb=function(a){var b=(b9+1)%50;
b9=b;c9[b]=a;d9||(d9=49==b)},beb=function(){var a=Z8;
if(c9[0]){var b=d9?b9:-1;do{b=(b+1)%50;var c=c9[b];g.qc(a,function(d){d(c)})}while(b!=b9);
c9=Array(50);b9=-1;d9=!1}},deb=function(a,b){var c=(Date.now()-feb)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},e9=function(a){g.az.call(this);
this.I=a;this.screens=[]},geb=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},heb=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.vm(a.screens,function(f){return!!vbb(b,f)});
for(var d=0,e=b.length;d<e;d++)c=geb(a,b[d])||c;return c},ieb=function(a,b){var c=a.screens.length;
a.screens=g.vm(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},jeb=function(a,b,c,d,e){g.az.call(this);
this.B=a;this.J=b;this.C=c;this.I=d;this.D=e;this.u=0;this.j=null;this.wc=NaN},g9=function(a){e9.call(this,"LocalScreenService");
this.u=a;this.j=NaN;f9(this);this.info("Initializing with "+sbb(this.screens))},keb=function(a){if(a.screens.length){var b=g.Ok(a.screens,function(d){return d.id}),c=Y8(a.u,"/pairing/get_lounge_token_batch");
Tdb(a.u,c,{screen_ids:b.join(",")},(0,g.Pa)(a.gZ,a),(0,g.Pa)(a.fZ,a))}},f9=function(a){if(g.S("deprecate_pair_servlet_enabled"))return heb(a,[]);
var b=rbb(Cbb());b=g.vm(b,function(c){return!c.uuid});
return heb(a,b)},h9=function(a,b){Ebb(g.Ok(a.screens,pbb));
b&&Dbb()},meb=function(a,b){g.az.call(this);
this.I=b;b=(b=g.Oz("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.Sb(b,h)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;leb("Initialized with "+g.di(this.j))},neb=function(a,b,c){var d=Y8(a.D,"/pairing/get_screen_availability");
Tdb(a.D,d,{lounge_token:b.token},(0,g.Pa)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Pa)(function(){c(!1)},a))},peb=function(a,b){a:if(ibb(b)!=ibb(a.j))var c=!1;
else{c=g.rf(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(leb("Updated online screens: "+g.di(a.j)),a.j=b,a.ma("screenChange"));oeb(a)},i9=function(a){isNaN(a.B)||g.xu(a.B);
a.B=g.vu((0,g.Pa)(a.qK,a),0<a.C&&a.C<g.Ra()?2E4:1E4)},leb=function(a){$8("OnlineScreenService",a)},qeb=function(a){var b={};
g.qc(a.I(),function(c){c.token?b[c.token]=c.id:this.hf("Requesting availability of screen w/o lounge token.")});
return b},oeb=function(a){a=g.rf(g.mf(a.j,function(b){return b}));
g.lc(a);a.length?g.Nz("yt-remote-online-screen-ids",a.join(","),60):g.Pz("yt-remote-online-screen-ids")},j9=function(a,b){b=void 0===b?!1:b;
e9.call(this,"ScreenService");this.C=a;this.J=b;this.j=this.u=null;this.B=[];this.D={};reb(this)},teb=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.nj(),l=c?f8(h,c):null;c&&(a.J||l)||(l=f8(h,b));if(l){l.uuid=b;var m=k9(a,l);neb(a.j,m,function(n){e(n?m:null)})}else c?seb(a,c,(0,g.Pa)(function(n){var p=k9(this,new c8({name:d,
screenId:c,loungeToken:n,dialId:b||""}));neb(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},ueb=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},veb=function(a,b,c){neb(a.j,b,c)},seb=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Au(Y8(a.C,"/pairing/get_lounge_token_batch"),e)},web=function(a){a.screens=a.u.nj();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+sbb(a.screens))},reb=function(a){xeb(a);
a.u=new g9(a.C);a.u.subscribe("screenChange",(0,g.Pa)(a.pZ,a));web(a);a.J||(a.B=rbb(g.Oz("yt-remote-automatic-screen-cache")||[]));xeb(a);a.info("Initializing automatic screens: "+sbb(a.B));a.j=new meb(a.C,(0,g.Pa)(a.nj,a,!0));a.j.subscribe("screenChange",(0,g.Pa)(function(){this.ma("onlineScreenChange")},a))},k9=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=f8(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.J||yeb(a));xeb(a);a.D[b.uuid]=b.id;g.Nz("yt-remote-device-id-map",a.D,31536E3);return b},yeb=function(a){a=g.vm(a.B,function(b){return"shortLived"!=b.idType});
g.Nz("yt-remote-automatic-screen-cache",g.Ok(a,pbb))},xeb=function(a){a.D=g.Oz("yt-remote-device-id-map")||{}},l9=function(a,b,c){g.az.call(this);
this.Ba=c;this.B=a;this.j=b;this.C=null},m9=function(a,b){a.C=b;
a.ma("sessionScreen",a.C)},zeb=function(a,b){a.C&&(a.C.token=b,k9(a.B,a.C));
a.ma("sessionScreen",a.C)},n9=function(a,b){$8(a.Ba,b)},o9=function(a,b,c){l9.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.oa=(0,g.Pa)(this.jV,this);this.Aa=(0,g.Pa)(this.q3,this);this.ea=g.vu(function(){Aeb(d,null)},12E4);
this.J=this.D=this.I=this.S=0;this.ya=!1;this.Z="unknown"},Ceb=function(a,b){g.xu(a.J);
a.J=0;0==b?Beb(a):a.J=g.vu(function(){Beb(a)},b)},Beb=function(a){Deb(a,"getLoungeToken");
g.xu(a.D);a.D=g.vu(function(){Eeb(a,null)},3E4)},Deb=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.di());
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Pa)(function(){n9(this,"Failed to send message: "+b+".")},a)):n9(a,"Sending yt message without session: "+g.di(c))},Feb=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.hP(b,function(c){m9(a,c)},function(){return a.Xh()},5)):a.Xh(Error("Waiting for session status timed out."))},Heb=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new c8(b);Geb(a,d,function(e){e?(a.ya=!0,k9(a.B,d),m9(a,d),a.Z="unknown",Ceb(a,c)):(g.eu(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Xh())},5)},Aeb=function(a,b){g.xu(a.ea);
a.ea=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?Heb(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.eu(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),Feb(a,b.screenId))):(g.eu(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),Feb(a,b.screenId)):Feb(a,b.screenId):a.Xh(Error("Waiting for session status timed out."))},Eeb=function(a,b){g.xu(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.Z=c,Ceb(a,3E4)):(zeb(a,b.loungeToken),a.ya=!1,a.Z="unknown",Ceb(a,b.loungeTokenRefreshIntervalMs))},Geb=function(a,b,c,d){g.xu(a.I);
a.I=0;veb(a.B,b,function(e){e||0>d?c(e):a.I=g.vu(function(){Geb(a,b,c,d-1)},300)})},Ieb=function(a){g.xu(a.S);
a.S=0;g.xu(a.I);a.I=0;g.xu(a.ea);a.ea=0;g.xu(a.D);a.D=0;g.xu(a.J);a.J=0},p9=function(a,b,c,d){l9.call(this,a,b,"DialSession");
this.config_=d;this.u=this.S=null;this.Aa="";this.Qa=c;this.La=null;this.ea=function(){};
this.Z=NaN;this.Ia=(0,g.Pa)(this.kV,this);this.D=function(){};
this.J=this.I=0;this.oa=!1;this.ya="unknown"},q9=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},Jeb=function(a){a.D=a.B.CM(a.Aa,a.j.label,a.j.friendlyName,q9(a),function(b,c){a.D=function(){};
a.oa=!0;m9(a,b);"shortLived"==b.idType&&0<c&&r9(a,c)},function(b){a.D=function(){};
a.Xh(b)})},Keb=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.Qa;Gbb()&&(b.env_useStageMdx=1);return g.ui(b)},Leb=function(a){return new Promise(function(b){a.Aa=tbb();
if(a.La){var c=new chrome.cast.DialLaunchResponse(!0,Keb(a));b(c);Jeb(a)}else a.ea=function(){g.xu(a.Z);a.ea=function(){};
a.Z=NaN;var d=new chrome.cast.DialLaunchResponse(!0,Keb(a));b(d);Jeb(a)},a.Z=g.vu(function(){a.ea()},100)})},Neb=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new c8(b);return(new Promise(function(e){Meb(a,d,function(f){f?(a.oa=!0,k9(a.B,d),m9(a,d),r9(a,c)):g.eu(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):Leb(a)})},Oeb=function(a,b){var c=a.S.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){teb(a.B,c,b,d,function(f){f&&f.token&&m9(a,f);e(f)},function(f){n9(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):Leb(a)})},Meb=function(a,b,c,d){g.xu(a.I);
a.I=0;veb(a.B,b,function(e){e||0>d?c(e):a.I=g.vu(function(){Meb(a,b,c,d-1)},300)})},r9=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
q9(a)&&(g.xu(a.J),a.J=0,0==b?Peb(a):a.J=g.vu(function(){Peb(a)},b))},Peb=function(a){q9(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ya=c,r9(a,3E4)):(a.oa=!1,a.ya="unknown",zeb(a,b.loungeToken),r9(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ya="noLoungeTokenResponse";r9(a,3E4)})},Qeb=function(a){g.xu(a.I);
a.I=0;g.xu(a.J);a.J=0;a.D();a.D=function(){};
g.xu(a.Z)},s9=function(a,b){l9.call(this,a,b,"ManualSession");
this.u=g.vu((0,g.Pa)(this.qw,this,null),150)},t9=function(a,b){g.az.call(this);
this.config_=b;this.u=a;this.S=b.appId||"233637DE";this.C=b.theme||"cl";this.Z=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.j=null;this.J=!1;this.B=[];this.D=(0,g.Pa)(this.Z1,this)},Reb=function(a,b){return b?g.Pb(a.B,function(c){return d8(b,c.label)},a):null},u9=function(a){$8("Controller",a)},$db=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},v9=function(a){return a.J||!!a.B.length||!!a.j},w9=function(a,b,c){b!=a.j&&(g.Ye(a.j),(a.j=b)?(c?a.ma("yt-remote-cast2-receiver-resumed",
b.j):a.ma("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Pa)(a.uR,a,b)),b.subscribe("sessionFailed",function(){return Seb(a,b)}),b.getScreen()?a.ma("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.qw(null)):a.ma("yt-remote-cast2-session-change",null))},Seb=function(a,b){a.j==b&&a.ma("yt-remote-cast2-session-failed")},Teb=function(a){var b=a.u.BM(),c=a.j&&a.j.j;
a=g.Ok(b,function(d){c&&d8(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Reb(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},$eb=function(a,b,c,d){d.disableCastApi?x9("Cannot initialize because disabled by Mdx config."):Ueb()?Veb(b,d)&&(Web(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Xeb(a,c):(window.__onGCastApiAvailable=function(e,f){e?Xeb(a,c):(y9("Failed to load cast API: "+f),Yeb(!1),Web(!1),g.Pz("yt-remote-cast-available"),g.Pz("yt-remote-cast-receiver"),
Zeb(),c(!1))},d.loadCastApiSetupScript?g.Rz("https://web.archive.org/web/20220831235837/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=Hbb()&&Qbb():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?Lbb():89<=Hbb()?Sbb():(Pbb(),k8(Rbb.map(Mbb))))):x9("Cannot initialize because not running Chrome")},Zeb=function(){x9("dispose");
var a=z9();a&&a.dispose();g.Fa("yt.mdx.remote.cloudview.instance_",null);afb(!1);g.Tx(bfb);bfb.length=0},A9=function(){return!!g.Oz("yt-remote-cast-installed")},cfb=function(){var a=g.Oz("yt-remote-cast-receiver");
return a?a.friendlyName:null},dfb=function(){x9("clearCurrentReceiver");
g.Pz("yt-remote-cast-receiver")},efb=function(){return A9()?z9()?z9().getCastSession():(y9("getCastSelector: Cast is not initialized."),null):(y9("getCastSelector: Cast API is not installed!"),null)},ffb=function(){A9()?z9()?B9()?(x9("Requesting cast selector."),z9().requestSession()):(x9("Wait for cast API to be ready to request the session."),bfb.push(g.Sx("yt-remote-cast2-api-ready",ffb))):y9("requestCastSelector: Cast is not initialized."):y9("requestCastSelector: Cast API is not installed!")},
C9=function(a,b){B9()?z9().setConnectedScreenStatus(a,b):y9("setConnectedScreenStatus called before ready.")},Ueb=function(){var a=0<=g.nb().search(/ (CrMo|Chrome|CriOS)\//);
return g.ZD||a},gfb=function(a,b){z9().init(a,b)},Veb=function(a,b){var c=!1;
z9()||(a=new t9(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Nz("yt-remote-cast-available",d);a8("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){x9("onReceiverSelected: "+d.friendlyName);
g.Nz("yt-remote-cast-receiver",d);a8("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){x9("onReceiverResumed: "+d.friendlyName);
g.Nz("yt-remote-cast-receiver",d);a8("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){x9("onSessionChange: "+e8(d));
d||g.Pz("yt-remote-cast-receiver");a8("yt-remote-cast2-session-change",d)}),g.Fa("yt.mdx.remote.cloudview.instance_",a),c=!0);
x9("cloudview.createSingleton_: "+c);return c},z9=function(){return g.Ga("yt.mdx.remote.cloudview.instance_")},Xeb=function(a,b){Yeb(!0);
Web(!1);gfb(a,function(c){c?(afb(!0),g.Ux("yt-remote-cast2-api-ready")):(y9("Failed to initialize cast API."),Yeb(!1),g.Pz("yt-remote-cast-available"),g.Pz("yt-remote-cast-receiver"),Zeb());b(c)})},x9=function(a){$8("cloudview",a)},y9=function(a){$8("cloudview",a)},Yeb=function(a){x9("setCastInstalled_ "+a);
g.Nz("yt-remote-cast-installed",a)},B9=function(){return!!g.Ga("yt.mdx.remote.cloudview.apiReady_")},afb=function(a){x9("setApiReady_ "+a);
g.Fa("yt.mdx.remote.cloudview.apiReady_",a)},Web=function(a){g.Fa("yt.mdx.remote.cloudview.initializing_",a)},D9=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.Nm=!1;this.S=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},hfb=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Nm=!1;a.hasNext=!1;a.J=0;a.I=g.Ra();a.C=0;a.j=0;a.D=0;a.S=0;a.B=NaN;a.u=!1},E9=function(a){return a.Sc()?(g.Ra()-a.I)/1E3:0},F9=function(a,b){a.J=b;
a.I=g.Ra()},G9=function(a){switch(a.playerState){case 1:case 1081:return(g.Ra()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},H9=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&hfb(a)},ifb=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Hf(a.trackData);b.hasPrevious=a.Nm;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.S;b.liveIngestionTime=a.B;return b},J9=function(a,b){g.az.call(this);
this.B=0;this.C=a;this.I=[];this.D=new Mdb;this.u=this.j=null;this.Z=(0,g.Pa)(this.F0,this);this.J=(0,g.Pa)(this.Tz,this);this.S=(0,g.Pa)(this.E0,this);this.ea=(0,g.Pa)(this.I0,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.KK,this),jfb(this))):c=3;0!=c&&(b?this.KK(c):g.vu((0,g.Pa)(function(){this.KK(c)},this),0));
(a=efb())&&I9(this,a);this.subscribe("yt-remote-cast2-session-change",this.ea)},K9=function(a){return new D9(a.C.getPlayerContextData())},jfb=function(a){g.qc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Qa(this.X1,b),this))},a)},kfb=function(a){g.qc(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},L9=function(a){return 1==a.getState()},M9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.enqueue(b)},lfb=function(a,b,c){var d=K9(a);
F9(d,c);-1E3!=d.playerState&&(d.playerState=b);N9(a,d)},O9=function(a,b,c){a.C.sendMessage(b,c)},N9=function(a,b){kfb(a);
a.C.setPlayerContextData(ifb(b));jfb(a)},I9=function(a,b){a.u&&(a.u.removeUpdateListener(a.Z),a.u.removeMediaListener(a.J),a.Tz(null));
a.u=b;a.u&&(a9("Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.Z),a.u.addMediaListener(a.J),a.u.media.length&&a.Tz(a.u.media[0]))},mfb=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=K9(a);b.contentId!=d.videoId&&a9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;F9(d,a.j.getEstimatedTime());N9(a,d)}else a9("No cast media video. Ignoring state update.")},P9=function(a,b,c){return(0,g.Pa)(function(d){this.hf("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.hf("Retrying "+b+" using MDx browser channel."),O9(this,b,c))},a)},S9=function(a,b,c,d){d=void 0===d?!1:d;
g.az.call(this);var e=this;this.I=NaN;this.Aa=!1;this.Z=this.S=this.oa=this.ya=NaN;this.ea=[];this.D=this.J=this.C=this.j=this.u=null;this.La=a;this.Ia=d;this.ea.push(g.yx(window,"beforeunload",function(){e.Ev(2)}));
this.B=[];this.j=new D9;this.Qa=b.id;this.Ba=b.idType;this.u=Zdb(this.La,c,this.GM,"shortLived"==this.Ba,this.Qa);this.u.Ra("channelOpened",function(){nfb(e)});
this.u.Ra("channelClosed",function(){Q9("Channel closed");isNaN(e.I)?i8(!0):i8();e.dispose()});
this.u.Ra("channelError",function(f){i8();isNaN(e.Xy())?(1==f&&"shortLived"==e.Ba&&e.ma("browserChannelAuthError",f),Q9("Channel error: "+f+" without reconnection"),e.dispose()):(e.Aa=!0,Q9("Channel error: "+f+" with reconnection in "+e.Xy()+" ms"),R9(e,2))});
this.u.Ra("channelMessage",function(f){ofb(e,f)});
this.u.To(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.Qz()&&g.Nz("yt-remote-session-video-id",f)})},pfb=function(a){return g.Pb(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},Q9=function(a){$8("conn",a)},R9=function(a,b){a.ma("proxyStateChange",b)},qfb=function(a){a.I=g.vu(function(){Q9("Connecting timeout");
a.Ev(1)},2E4)},rfb=function(a){g.xu(a.I);
a.I=NaN},sfb=function(a){g.xu(a.ya);
a.ya=NaN},ufb=function(a){tfb(a);
a.oa=g.vu(function(){T9(a,"getNowPlaying")},2E4)},tfb=function(a){g.xu(a.oa);
a.oa=NaN},nfb=function(a){Q9("Channel opened");
a.Aa&&(a.Aa=!1,sfb(a),a.ya=g.vu(function(){Q9("Timing out waiting for a screen.");a.Ev(1)},15E3))},wfb=function(a,b){var c=null;
if(b){var d=pfb(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Fa("yt.mdx.remote.remoteClient_",c);b&&(rfb(a),sfb(a));c=a.u.ew()&&isNaN(a.I);b==c?b&&(R9(a,1),T9(a,"getSubtitlesTrack")):b?(a.gP()&&a.j.reset(),R9(a,1),T9(a,"getNowPlaying"),vfb(a)):a.Ev(1)},xfb=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.vf(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.ma("remotePlayerChange"))},yfb=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;H9(a.j,d,e);a.ma("remoteQueueChange",c)},Afb=function(a,b){b.params=b.params||{};
yfb(a,b,"NOW_PLAYING_MAY_CHANGE");zfb(a,b);a.ma("autoplayDismissed")},zfb=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
F9(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.S=isNaN(c)?0:c;a.j.Bj(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?ufb(a):tfb(a);a.ma("remotePlayerChange")},Bfb=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);F9(a.j,isNaN(b)?0:b);a.ma("remotePlayerChange")}},Cfb=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.ma("remotePlayerChange")},Dfb=function(a,b){a.J=b.params.videoId;
a.ma("nowAutoplaying",parseInt(b.params.timeout,10))},Efb=function(a,b){a.J=b.params.videoId||null;
a.ma("autoplayUpNext",a.J)},Ffb=function(a,b){a.D=b.params.autoplayMode;
a.ma("autoplayModeChange",a.D);"DISABLED"==a.D&&a.ma("autoplayDismissed")},Gfb=function(a,b){var c="true"==b.params.hasNext;
a.j.Nm="true"==b.params.hasPrevious;a.j.hasNext=c;a.ma("previousNextChange")},ofb=function(a,b){b=b.message;
b.params?Q9("Received: action="+b.action+", params="+g.di(b.params)):Q9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=$7(b.params.devices);a.B=g.Ok(b,function(d){return new b8(d)});
b=!!g.Pb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
wfb(a,b);b=a.QP("mlm");a.ma("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.$b(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
wfb(a,!1);break;case "remoteConnected":var c=new b8($7(b.params.device));g.Pb(a.B,function(d){return d.equals(c)})||hbb(a.B,c);
break;case "remoteDisconnected":c=new b8($7(b.params.device));g.$b(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":yfb(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":Afb(a,b);break;case "onStateChange":zfb(a,b);break;case "onAdStateChange":Bfb(a,b);break;case "onVolumeChanged":Cfb(a,b);break;case "onSubtitlesTrackChanged":xfb(a,b);break;case "nowAutoplaying":Dfb(a,b);break;case "autoplayDismissed":a.ma("autoplayDismissed");break;case "autoplayUpNext":Efb(a,b);break;case "onAutoplayModeChanged":Ffb(a,b);break;case "onHasPreviousNextChanged":Gfb(a,b);
break;case "requestAssistedSignIn":a.ma("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.ma("loopModeChange",b.params.loopMode);break;default:Q9("Unrecognized action: "+b.action)}},vfb=function(a){g.xu(a.Z);
a.Z=g.vu(function(){a.Ev(1)},864E5)},T9=function(a,b,c){c?Q9("Sending: action="+b+", params="+g.di(c)):Q9("Sending: action="+b);
a.u.sendMessage(b,c)},Hfb=function(a){e9.call(this,"ScreenServiceProxy");
this.Uf=a;this.j=[];this.j.push(this.Uf.$_s("screenChange",(0,g.Pa)(this.oV,this)));this.j.push(this.Uf.$_s("onlineScreenChange",(0,g.Pa)(this.F1,this)))},Mfb=function(a,b){Fbb();
if(!j8||!j8.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;wbb();Abb();U9||(U9=new X8(b?b.loungeApiHost:void 0),Gbb()&&(U9.j="/api/loungedev"));V9||(V9=g.Ga("yt.mdx.remote.deferredProxies_")||[],g.Fa("yt.mdx.remote.deferredProxies_",V9));Ifb();var c=W9();if(!c){var d=new j9(U9,b?b.disableAutomaticScreenCache||!1:!1);g.Fa("yt.mdx.remote.screenService_",d);c=W9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Fa("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);$eb(a,d,function(f){f?X9()&&C9(X9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){a8("yt-remote-receiver-availability-change")})},e)}b&&!g.Ga("yt.mdx.remote.initialized_")&&(g.Fa("yt.mdx.remote.initialized_",!0),Y9("Initializing: "+g.di(b)),
Z9.push(g.Sx("yt-remote-cast2-api-ready",function(){a8("yt-remote-api-ready")})),Z9.push(g.Sx("yt-remote-cast2-availability-change",function(){a8("yt-remote-receiver-availability-change")})),Z9.push(g.Sx("yt-remote-cast2-receiver-selected",function(){$9(null);
a8("yt-remote-auto-connect","cast-selector-receiver")})),Z9.push(g.Sx("yt-remote-cast2-receiver-resumed",function(){a8("yt-remote-receiver-resumed","cast-selector-receiver")})),Z9.push(g.Sx("yt-remote-cast2-session-change",Jfb)),Z9.push(g.Sx("yt-remote-connection-change",function(f){f?C9(X9(),"YouTube TV"):a$()||(C9(null,null),dfb())})),Z9.push(g.Sx("yt-remote-cast2-session-failed",function(){a8("yt-remote-connection-failed")})),a=Kfb(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.S("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),Y9(" -- with channel params: "+g.di(a)),a?(g.Nz("yt-remote-session-app",a.app),g.Nz("yt-remote-session-name",a.name)):(g.Pz("yt-remote-session-app"),g.Pz("yt-remote-session-name")),g.Fa("yt.mdx.remote.channelParams_",a),c.start(),X9()||Lfb())}},Nfb=function(){var a=W9().Uf.$_gos();
var b=b$();b&&c$()&&(vbb(a,b)||a.push(b));return ubb(a)},Pfb=function(){var a=Ofb();
!a&&A9()&&cfb()&&(a={key:"cast-selector-receiver",name:cfb()});return a},Ofb=function(){var a=Nfb(),b=b$();
b||(b=a$());return g.Pb(a,function(c){return b&&d8(b,c.key)?!0:!1})},b$=function(){var a=X9();
if(!a)return null;var b=W9().nj();return f8(b,a)},Jfb=function(a){Y9("remote.onCastSessionChange_: "+e8(a));
if(a){var b=b$();if(b&&b.id==a.id){if(C9(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))d$&&(d$.token=a),(b=c$())&&b.To(a)}else b&&e$(),f$(a,1)}else c$()&&e$()},e$=function(){B9()?z9().stopSession():y9("stopSession called before API ready.");
var a=c$();a&&(a.disconnect(1),Qfb(null))},Rfb=function(){var a=c$();
return!!a&&3!=a.getProxyState()},Y9=function(a){$8("remote",a)},W9=function(){if(!Sfb){var a=g.Ga("yt.mdx.remote.screenService_");
Sfb=a?new Hfb(a):null}return Sfb},X9=function(){return g.Ga("yt.mdx.remote.currentScreenId_")},Tfb=function(a){g.Fa("yt.mdx.remote.currentScreenId_",a)},Ufb=function(){return g.Ga("yt.mdx.remote.connectData_")},$9=function(a){g.Fa("yt.mdx.remote.connectData_",a)},c$=function(){return g.Ga("yt.mdx.remote.connection_")},Qfb=function(a){var b=c$();
$9(null);a||Tfb("");g.Fa("yt.mdx.remote.connection_",a);V9&&(g.qc(V9,function(c){c(a)}),V9.length=0);
b&&!a?a8("yt-remote-connection-change",!1):!b&&a&&a8("yt-remote-connection-change",!0)},a$=function(){var a=g.Qz();
if(!a)return null;var b=W9();if(!b)return null;b=b.nj();return f8(b,a)},f$=function(a,b){X9();
b$()&&b$();if(g$)d$=a;else{Tfb(a.id);var c=g.Ga("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new S9(U9,a,Kfb(),c);a.connect(b,Ufb());a.subscribe("beforeDisconnect",function(d){a8("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){c$()&&(c$(),Qfb(null))});
a.subscribe("browserChannelAuthError",function(){var d=b$();d&&"shortLived"==d.idType&&(B9()?z9().handleBrowserChannelAuthError():y9("refreshLoungeToken called before API ready."))});
Qfb(a)}},Lfb=function(){var a=a$();
a?(Y9("Resume connection to: "+e8(a)),f$(a,0)):(i8(),dfb(),Y9("Skipping connecting because no session screen found."))},Ifb=function(){var a=Kfb();
if(g.vf(a)){a=h8();var b=g.Oz("yt-remote-session-name")||"",c=g.Oz("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Fa("yt.mdx.remote.channelParams_",a)}},Kfb=function(){return g.Ga("yt.mdx.remote.channelParams_")||{}},Xfb=function(a,b,c){g.K.call(this);
var d=this;this.j=a;this.G=b;this.qc=c;this.events=new g.WD(this);this.ea=this.events.T(this.G,"onVolumeChange",function(e){Vfb(d,e)});
this.D=!1;this.I=new g.XJ(64);this.u=new g.Xn(this.ES,500,this);this.B=new g.Xn(this.GS,1E3,this);this.S=new m8(this.V5,0,this);this.C={};this.Z=new g.Xn(this.sT,1E3,this);this.J=new n8(this.seekTo,1E3,this);g.M(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.m1);this.events.T(b,"captionschanged",this.C0);this.events.T(b,"captionssettingschanged",this.NS);this.events.T(b,"videoplayerreset",this.JD);this.events.T(b,"mdxautoplaycancel",function(){d.qc.CO()});
b.K("enable_mdx_video_play_directly")&&this.events.T(b,"videodatachange",function(){Wfb(d.j)||h$(d)||i$(d,0)});
a=this.qc;a.isDisposed();a.subscribe("proxyStateChange",this.rR,this);a.subscribe("remotePlayerChange",this.Yz,this);a.subscribe("remoteQueueChange",this.JD,this);a.subscribe("previousNextChange",this.oR,this);a.subscribe("nowAutoplaying",this.iR,this);a.subscribe("autoplayDismissed",this.LQ,this);g.M(this,this.u);g.M(this,this.B);g.M(this,this.S);g.M(this,this.Z);g.M(this,this.J);this.NS();this.JD();this.Yz()},Vfb=function(a,b){if(h$(a)){a.qc.unsubscribe("remotePlayerChange",a.Yz,a);
var c=Math.round(b.volume);b=!!b.muted;var d=K9(a.qc);if(c!==d.volume||b!==d.muted)a.qc.setVolume(c,b),a.Z.start();a.qc.subscribe("remotePlayerChange",a.Yz,a)}},Yfb=function(a){a.dc(0);
a.u.stop();a.Wb(new g.XJ(64))},Zfb=function(a,b){if(h$(a)&&!a.D){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.If(c,b));a.qc.FM(a.G.getVideoData(1).videoId,c);a.C=K9(a.qc).trackData}},i$=function(a,b){var c=a.G.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.qc.playVideo(c.videoId,b,d,e,c.playerParams,c.La,gbb(c));a.Wb(new g.XJ(1))},$fb=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{IP:1});
c&&c.length?(a.G.setOption("captions","track",b),a.D=!1):(a.G.loadModule("captions"),a.D=!0)}else a.G.setOption("captions","track",{})},h$=function(a){return K9(a.qc).videoId===a.G.getVideoData(1).videoId},j$=function(){g.W.call(this,{F:"div",
N:"ytp-mdx-popup-dialog",X:{role:"dialog"},W:[{F:"div",N:"ytp-mdx-popup-dialog-inner-content",W:[{F:"div",N:"ytp-mdx-popup-title",qa:"You're signed out"},{F:"div",N:"ytp-mdx-popup-description",qa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{F:"div",N:"ytp-mdx-privacy-popup-buttons",W:[{F:"button",Fa:["ytp-button","ytp-mdx-privacy-popup-cancel"],qa:"Cancel"},{F:"button",Fa:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],qa:"Confirm"}]}]}]});this.j=new g.HL(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.M(this,this.j);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},k$=function(a){g.W.call(this,{F:"div",
N:"ytp-remote",W:[{F:"div",N:"ytp-remote-display-status",W:[{F:"div",N:"ytp-remote-display-status-icon",W:[g.ZEa()]},{F:"div",N:"ytp-remote-display-status-text",qa:"{{statustext}}"}]}]});this.api=a;this.j=new g.HL(this,250);g.M(this,this.j);this.T(a,"presentingplayerstatechange",this.onStateChange);this.Uc(a.Eb())},l$=function(a,b){g.kR.call(this,"Play on",1,a,b);
this.G=a;this.Jq={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},agb=function(a){g.bO.call(this,a);
this.hn={key:tbb(),name:"This computer"};this.Wj=null;this.subscriptions=[];this.aK=this.qc=null;this.Jq=[this.hn];this.Cp=this.hn;this.Cd=new g.XJ(64);this.bQ=0;this.Gg=-1;this.gA=!1;this.eA=this.Kw=null;if(!g.RF(this.player.V())&&!g.SF(this.player.V())){a=this.player;var b=g.oN(a);b&&(b=b.Hm())&&(b=new l$(a,b),g.M(this,b));b=new k$(a);g.M(this,b);g.yN(a,b.element,4);this.Kw=new j$;g.M(this,this.Kw);g.yN(a,this.Kw.element,4);this.gA=!!a$()}},m$=function(a){a.eA&&(a.player.removeEventListener("presentingplayerstatechange",
a.eA),a.eA=null)},bgb=function(a,b,c){a.Cd=c;
a.player.ma("presentingplayerstatechange",new g.pJ(c,b))},n$=function(a,b){if(b.key!==a.Cp.key)if(b.key===a.hn.key)e$();
else if(Wfb(a)&&cgb(a),a.Cp=b,!a.player.V().K("disable_mdx_connection_in_mdx_module_for_music_web")||!g.SF(a.player.V())){var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(!c&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().K("should_clear_video_data_on_player_cued_unstarted"))d=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.XN(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:c,
videoId:e,playerParams:d.playerParams,clickTrackingParams:d.La,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(d=gbb(d))&&(a.locationInfo=d);d=a}Y9("Connecting to: "+g.di(b));"cast-selector-receiver"==b.key?($9(d||null),b=d||null,B9()?z9().setLaunchParams(b):y9("setLaunchParams called before ready.")):!d&&Rfb()&&X9()==b.key?a8("yt-remote-connection-change",!0):(e$(),$9(d||null),d=W9().nj(),(b=f8(d,b.key))&&f$(b,1))}},Wfb=function(a){var b;
(b=!a.player.V().K("mdx_enable_privacy_disclosure_ui"))||(b=((b=g.O("PLAYER_CONFIG"))&&b.args&&void 0!==b.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.gA||!a.Kw);return b?!1:g.iG(a.player.V())||g.lG(a.player.V())},cgb=function(a){a.player.Eb().Sc()?a.player.pauseVideo():(a.eA=function(b){!a.gA&&g.rJ(b,8)&&(a.player.pauseVideo(),m$(a))},a.player.addEventListener("presentingplayerstatechange",a.eA));
a.Kw&&a.Kw.Pc();c$()||(g$=!0)};
g.eq.prototype.Np=g.ba(1,function(){return g.nd(this,6)});
g.de.prototype.pB=g.ba(0,function(){var a=g.je(this);return 4294967296*g.je(this)+(a>>>0)});
var Sab,dgb=g.Pe(function(a,b,c){if(1!==a.u)return!1;g.E(b,c,g.ke(a.j));return!0},g.Qe),egb=g.Pe(function(a,b,c,d){if(1!==a.u)return!1;
g.Dd(b,c,d,g.ke(a.j));return!0},g.Qe),fgb=g.Pe(function(a,b,c){if(0!==a.u)return!1;
g.E(b,c,g.fe(a.j));return!0},g.Re),ggb=g.Pe(function(a,b,c,d){if(0!==a.u)return!1;
g.Dd(b,c,d,g.fe(a.j));return!0},g.Re),igb=g.Pe(function(a,b,c){if(0!==a.u)return!1;
g.E(b,c,g.ge(a.j));return!0},g.Se),jgb=g.Pe(function(a,b,c,d){if(0!==a.u)return!1;
g.Dd(b,c,d,g.ge(a.j));return!0},g.Se),kgb=g.Pe(function(a,b,c){if(1!==a.u)return!1;
g.E(b,c,a.j.pB());return!0},function(a,b,c){Vab(a,c,g.nd(b,c))}),lgb=g.Pe(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.sd(b,c);if(2==a.u){c=g.de.prototype.pB;var d=g.ge(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.pB());return!0},function(a,b,c){b=g.sd(b,c);
if(null!=b)for(var d=0;d<b.length;d++)Vab(a,c,b[d])}),mgb=g.Pe(function(a,b,c){if(0!==a.u)return!1;
g.E(b,c,g.le(a.j));return!0},Wab),ngb=g.Pe(function(a,b,c,d){if(0!==a.u)return!1;
g.Dd(b,c,d,g.le(a.j));return!0},Wab),ogb=g.Pe(function(a,b,c){if(2!==a.u)return!1;
a=g.ve(a);g.Bd(b,c,a);return!0},function(a,b,c){b=g.sd(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.Be(a,c,g.vaa(e))}}),pgb=g.Pe(function(a,b,c,d){if(2!==a.u)return!1;
g.Dd(b,c,d,g.ve(a));return!0},g.oca),qgb=g.Pe(function(a,b,c,d,e){if(2!==a.u)return!1;
g.se(a,g.vba(b,d,c),e);return!0},g.pca),Xab=[1];
g.v(Yab,g.I);g.v(Zab,g.I);var rgb=[Yab,1,g.O2,[Zab,1,dgb,2,fgb]];g.v($ab,g.I);g.v(abb,g.I);g.v(bbb,g.I);
var sgb=[1,2],tgb=[g.Ph,1,g.N2,5,kgb,2,qgb,[$ab,1,g.P2,[abb,1,g.N2,2,g.N2,3,mgb],sgb,2,g.P2,[bbb,1,g.N2,2,g.N2,3,igb,4,mgb],sgb],3,ogb,6,lgb,4,g.O2,[g.Rh,1,g.O2,[g.Sh,1,pgb,g.Vh,2,jgb,g.Vh,3,ngb,g.Vh],2,qgb,[g.Th,1,ggb,g.Uh,2,egb,g.Uh,3,g.P2,rgb,g.Uh]]],kdb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},O8={"'":"\\'"},obb={mda:"atp",MSa:"ska",qPa:"que",pGa:"mus",LSa:"sus",Zta:"dsp",KQa:"seq",EFa:"mic",ana:"dpa",iea:"cds",fGa:"mlm",
Vma:"dsdtr",JHa:"ntb"};b8.prototype.equals=function(a){return a?this.id==a.id:!1};
var j8,zbb="",Obb=Ibb("loadCastFramework")||Ibb("loadCastApplicationFramework"),Rbb=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Va(m8,g.K);g.k=m8.prototype;g.k.NU=function(a){this.C=arguments;this.j=!1;this.wc?this.B=g.Ra()+this.uh:this.wc=g.Mh(this.D,this.uh)};
g.k.stop=function(){this.wc&&(g.C.clearTimeout(this.wc),this.wc=null);this.B=null;this.j=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.I.apply(null,this.C)))};
g.k.ra=function(){this.stop();m8.Se.ra.call(this)};
g.k.OU=function(){this.wc&&(g.C.clearTimeout(this.wc),this.wc=null);this.B?(this.wc=g.Mh(this.D,this.B-g.Ra()),this.B=null):this.u?this.j=!0:(this.j=!1,this.I.apply(null,this.C))};g.v(n8,g.K);g.k=n8.prototype;g.k.vF=function(a){this.B=arguments;this.wc||this.u?this.j=!0:ccb(this)};
g.k.stop=function(){this.wc&&(g.C.clearTimeout(this.wc),this.wc=null,this.j=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.j||this.wc||(this.j=!1,ccb(this))};
g.k.ra=function(){g.K.prototype.ra.call(this);this.stop()};o8.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
o8.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};g.Va(dcb,g.af);g.Va(ecb,g.af);var hcb=!1;var jcb=null;g.Va(lcb,g.af);g.Va(mcb,g.af);g.Va(ncb,g.af);ocb.prototype.info=function(){};
ocb.prototype.warning=function(){};var vcb={},u8={};g.k=s8.prototype;g.k.setTimeout=function(a){this.zb=a};
g.k.RU=function(a){a=a.target;var b=this.Xa;b&&3==g.Di(a)?b.vF():this.jM(a)};
g.k.jM=function(a){try{if(a==this.j)a:{var b=g.Di(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b)&&(3!=b||g.oG||this.j&&(this.u.u||g.Fi(this.j)||g.Gi(this.j)))){this.Ia||4!=b||7==c||(8==c||0>=d?p8(3):p8(2));x8(this);var e=this.j.getStatus();this.Ub=e;b:if(tcb(this)){var f=g.Gi(this.j);a="";var h=f.length,l=4==g.Di(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){v8(this);w8(this);var m="";break b}this.u.B=new g.C.TextDecoder}for(c=0;c<h;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&
c==h-1});f.splice(0,h);this.u.j+=a;this.ea=0;m=this.u.j}else m=g.Fi(this.j);if(this.B=200==e){if(this.kc&&!this.Ta){b:{if(this.j){var n=g.Hi(this.j,"X-HTTP-Initial-Response");if(n&&!g.cb(n)){var p=n;break b}}p=null}if(e=p)this.Ta=!0,wcb(this,e);else{this.B=!1;this.I=3;q8(12);v8(this);w8(this);break a}}this.Ba?(xcb(this,b,m),g.oG&&this.B&&3==b&&(this.jb.Ra(this.kb,"tick",this.QU),this.kb.start())):wcb(this,m);4==b&&v8(this);this.B&&!this.Ia&&(4==b?zcb(this.D,this):(this.B=!1,t8(this)))}else g.Vea(this.j),
400==e&&0<m.indexOf("Unknown SID")?(this.I=3,q8(12)):(this.I=0,q8(13)),v8(this),w8(this)}}}catch(q){}finally{}};
g.k.QU=function(){if(this.j){var a=g.Di(this.j),b=g.Fi(this.j);this.ea<b.length&&(x8(this),xcb(this,a,b),this.B&&4!=a&&t8(this))}};
g.k.cancel=function(){this.Ia=!0;v8(this)};
g.k.PU=function(){this.Z=null;var a=Date.now();0<=a-this.Lb?(2!=this.Qa&&(p8(3),q8(17)),v8(this),this.I=2,w8(this)):ycb(this,this.Lb-a)};
g.k.getLastError=function(){return this.I};Icb.prototype.cancel=function(){this.B=Kcb(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.r(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.k=Ocb.prototype;g.k.kM=8;g.k.qg=1;g.k.connect=function(a,b,c,d){this.zf&&g.Bh((0,g.Pa)(this.m4,this,a));q8(0);this.zc=a;this.Ia=b||{};c&&void 0!==d&&(this.Ia.OSID=c,this.Ia.OAID=d);this.kb=this.Rc;this.La=Ecb(this,null,this.zc);B8(this)};
g.k.disconnect=function(){Qcb(this);if(3==this.qg){var a=this.Xa++,b=this.La.clone();g.Lj(b,"SID",this.C);g.Lj(b,"RID",a);g.Lj(b,"TYPE","terminate");E8(this,b);a=new s8(this,this.C,a);a.Qa=2;a.J=Y7(b.clone());b=!1;g.C.navigator&&g.C.navigator.sendBeacon&&(b=g.C.navigator.sendBeacon(a.J.toString(),""));!b&&g.C.Image&&((new Image).src=a.J,b=!0);b||(a.j=scb(a.D,null),a.j.send(a.J));a.ya=Date.now();t8(a)}Wcb(this)};
g.k.m4=function(a){try{icb(a,function(){})}catch(b){}};
g.k.Wf=function(){return 0==this.qg};
g.k.getState=function(){return this.qg};
g.k.mM=function(a){if(this.I)if(this.I=null,1==this.qg){if(!a){this.Xa=Math.floor(1E5*Math.random());a=this.Xa++;var b=new s8(this,"",a),c=this.Z;this.Lb&&(c?(c=g.Gf(c),g.If(c,this.Lb)):c=this.Lb);null!==this.J||this.rb||(b.La=c,c=null);var d;if(this.zb)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=Tcb(this,b,d);e=this.La.clone();g.Lj(e,"RID",a);g.Lj(e,"CVER",22);this.Ba&&g.Lj(e,"X-HTTP-Session-Id",this.Ba);E8(this,e);c&&(this.rb?d="headers="+g.Rg(g.ega(c))+"&"+d:this.J&&g.Pj(e,this.J,c));Dcb(this.u,b);this.kf&&g.Lj(e,"TYPE","init");this.zb?(g.Lj(e,"$req",d),g.Lj(e,"SID","null"),b.kc=!0,rcb(b,e,null)):rcb(b,e,d);this.qg=2}}else 3==this.qg&&(a?Ucb(this,a):0==this.B.length||Jcb(this.u)||Ucb(this))};
g.k.lM=function(){this.S=null;Vcb(this);if(this.Hc&&!(this.jb||null==this.j||0>=this.jd)){var a=2*this.jd;this.Aa=r8((0,g.Pa)(this.B0,this),a)}};
g.k.B0=function(){this.Aa&&(this.Aa=null,this.kb=!1,this.jb=!0,q8(10),z8(this),Vcb(this))};
g.k.yJ=function(a){this.j==a&&this.Hc&&!this.jb&&(Pcb(this),this.jb=!0,q8(11))};
g.k.SU=function(){null!=this.ea&&(this.ea=null,z8(this),Bcb(this),q8(19))};
g.k.q5=function(a){a?q8(2):q8(1)};
g.k.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.k=Ycb.prototype;g.k.qM=function(){};
g.k.pM=function(){};
g.k.oM=function(){};
g.k.nM=function(){};
g.k.isActive=function(){return!0};
g.k.TU=function(){};g.Va(G8,g.Uf);G8.prototype.open=function(){this.j.D=this.C;this.J&&(this.j.Qa=!0);this.j.connect(this.I,this.u||void 0)};
G8.prototype.close=function(){this.j.disconnect()};
G8.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.di(a),a=c);b.B.push(new Hcb(b.Oe++,a));3==b.qg&&B8(b)};
G8.prototype.ra=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;G8.Se.ra.call(this)};
g.Va($cb,dcb);g.Va(adb,ecb);g.Va(F8,Ycb);F8.prototype.qM=function(){this.j.dispatchEvent("m")};
F8.prototype.pM=function(a){this.j.dispatchEvent(new $cb(a))};
F8.prototype.oM=function(a){this.j.dispatchEvent(new adb(a))};
F8.prototype.nM=function(){this.j.dispatchEvent("n")};var I8=new g.Uf;g.v(ddb,g.af);g.k=K8.prototype;g.k.xr=null;g.k.Jn=!1;g.k.yu=null;g.k.xF=null;g.k.wu=null;g.k.xu=null;g.k.ep=null;g.k.gp=null;g.k.yr=null;g.k.Gh=null;g.k.kB=0;g.k.Jl=null;g.k.jB=null;g.k.fp=null;g.k.Gx=-1;g.k.rS=!0;g.k.wr=!1;g.k.wF=0;g.k.iB=null;var idb={},hdb={};g.k=K8.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.VU=function(a){a=a.target;var b=this.iB;b&&3==g.Di(a)?b.vF():this.rM(a)};
g.k.rM=function(a){try{if(a==this.Gh)a:{var b=g.Di(this.Gh),c=this.Gh.u,d=this.Gh.getStatus();if(g.Ac&&!g.wc(10)||g.gf&&!g.vc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Fi(this.Gh))break a;this.wr||4!=b||7==c||(8==c||0>=d?this.j.zl(3):this.j.zl(2));ndb(this);var e=this.Gh.getStatus();this.Gx=e;var f=g.Fi(this.Gh);if(this.Jn=200==e){4==b&&M8(this);if(this.Ba){for(a=!0;!this.wr&&this.kB<f.length;){var h=jdb(this,f);if(h==hdb){4==b&&(this.fp=4,J8(15),a=!1);break}else if(h==idb){this.fp=4;J8(16);a=
!1;break}else odb(this,h)}4==b&&0==f.length&&(this.fp=1,J8(17),a=!1);this.Jn=this.Jn&&a;a||(M8(this),N8(this))}else odb(this,f);this.Jn&&!this.wr&&(4==b?this.j.lB(this):(this.Jn=!1,L8(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.fp=3,J8(13)):(this.fp=0,J8(14)),M8(this),N8(this)}}catch(l){}finally{}};
g.k.d3=function(a){H8((0,g.Pa)(this.b3,this,a),0)};
g.k.b3=function(a){this.wr||(ndb(this),odb(this,a),L8(this))};
g.k.wR=function(a){H8((0,g.Pa)(this.Z2,this,a),0)};
g.k.Z2=function(a){this.wr||(M8(this),this.Jn=a,this.j.lB(this),this.j.zl(4))};
g.k.cancel=function(){this.wr=!0;M8(this)};
g.k.UU=function(){this.yu=null;var a=Date.now();0<=a-this.xF?(2!=this.xu&&this.j.zl(3),M8(this),this.fp=2,J8(18),N8(this)):mdb(this,this.xF-a)};
g.k.getLastError=function(){return this.fp};g.k=rdb.prototype;g.k.zF=null;g.k.zi=null;g.k.fE=!1;g.k.HS=null;g.k.pC=null;g.k.NI=null;g.k.AF=null;g.k.Rj=null;g.k.Kn=-1;g.k.Hx=null;g.k.ey=null;g.k.connect=function(a){this.AF=a;a=Q8(this.j,null,this.AF);J8(3);this.HS=Date.now();var b=this.j.S;null!=b?(this.Hx=b[0],(this.ey=b[1])?(this.Rj=1,sdb(this)):(this.Rj=2,tdb(this))):(Z7(a,"MODE","init"),this.zi=new K8(this),this.zi.xr=this.zF,gdb(this.zi,a,!1,null,!0),this.Rj=0)};
g.k.IX=function(a){if(a)this.Rj=2,tdb(this);else{J8(4);var b=this.j;b.Ol=b.Ap.Kn;U8(b,9)}a&&this.zl(2)};
g.k.yF=function(a){return this.j.yF(a)};
g.k.abort=function(){this.zi&&(this.zi.cancel(),this.zi=null);this.Kn=-1};
g.k.Wf=function(){return!1};
g.k.sM=function(a,b){this.Kn=a.Gx;if(0==this.Rj)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.Ol=this.Kn;U8(a,2);return}this.Hx=c[0];this.ey=c[1]}else a=this.j,a.Ol=this.Kn,U8(a,2);else if(2==this.Rj)if(this.fE)J8(7),this.NI=Date.now();else if("11111"==b){if(J8(6),this.fE=!0,this.pC=Date.now(),a=this.pC-this.HS,!g.Ac||g.wc(10)||500>a)this.Kn=200,this.zi.cancel(),J8(12),R8(this.j,this,!0)}else J8(8),this.pC=this.NI=Date.now(),this.fE=!1};
g.k.lB=function(){this.Kn=this.zi.Gx;if(this.zi.Jn)0==this.Rj?this.ey?(this.Rj=1,sdb(this)):(this.Rj=2,tdb(this)):2==this.Rj&&((!g.Ac||g.wc(10)?!this.fE:200>this.NI-this.pC)?(J8(11),R8(this.j,this,!1)):(J8(12),R8(this.j,this,!0)));else{0==this.Rj?J8(9):2==this.Rj&&J8(10);var a=this.j;this.zi.getLastError();a.Ol=this.Kn;U8(a,2)}};
g.k.Ix=function(){return this.j.Ix()};
g.k.isActive=function(){return this.j.isActive()};
g.k.zl=function(a){this.j.zl(a)};g.k=udb.prototype;g.k.Nl=null;g.k.Jx=null;g.k.Fi=null;g.k.If=null;g.k.BF=null;g.k.mB=null;g.k.tM=null;g.k.nB=null;g.k.Kx=0;g.k.XU=0;g.k.nh=null;g.k.hp=null;g.k.Ln=null;g.k.Ar=null;g.k.Ap=null;g.k.RE=null;g.k.Cu=-1;g.k.uM=-1;g.k.Ol=-1;g.k.Bu=0;g.k.Au=0;g.k.zr=8;g.Va(wdb,g.af);g.Va(xdb,g.af);g.k=udb.prototype;g.k.connect=function(a,b,c,d,e){J8(0);this.BF=b;this.Jx=c||{};d&&void 0!==e&&(this.Jx.OSID=d,this.Jx.OAID=e);this.J?(H8((0,g.Pa)(this.pO,this,a),100),zdb(this)):this.pO(a)};
g.k.disconnect=function(){Adb(this);if(3==this.j){var a=this.Kx++,b=this.mB.clone();g.Lj(b,"SID",this.C);g.Lj(b,"RID",a);g.Lj(b,"TYPE","terminate");T8(this,b);a=new K8(this,this.C,a);a.xu=2;a.ep=Y7(b.clone());(new Image).src=a.ep.toString();a.wu=Date.now();L8(a)}Kdb(this)};
g.k.pO=function(a){this.Ap=new rdb(this);this.Ap.zF=this.Nl;this.Ap.u=this.D;this.Ap.connect(a)};
g.k.Wf=function(){return 0==this.j};
g.k.getState=function(){return this.j};
g.k.wM=function(a){this.hp=null;Fdb(this,a)};
g.k.vM=function(){this.Ln=null;this.If=new K8(this,this.C,"rpc",this.I);this.If.xr=this.Nl;this.If.wF=0;var a=this.tM.clone();g.Lj(a,"RID","rpc");g.Lj(a,"SID",this.C);g.Lj(a,"CI",this.RE?"0":"1");g.Lj(a,"AID",this.Cu);T8(this,a);if(!g.Ac||g.wc(10))g.Lj(a,"TYPE","xmlhttp"),gdb(this.If,a,!0,this.nB,!1);else{g.Lj(a,"TYPE","html");var b=this.If,c=!!this.nB;b.xu=3;b.ep=Y7(a.clone());ldb(b,c)}};
g.k.sM=function(a,b){if(0!=this.j&&(this.If==a||this.Fi==a))if(this.Ol=a.Gx,this.Fi==a&&3==this.j)if(7<this.zr){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Ln){if(this.If)if(this.If.wu+3E3<this.Fi.wu)S8(this),this.If.cancel(),this.If=null;else break a;Idb(this);J8(19)}}else this.uM=a[1],0<this.uM-this.Cu&&37500>a[2]&&this.RE&&0==this.Au&&!this.Ar&&(this.Ar=H8((0,g.Pa)(this.YU,this),6E3));else U8(this,11)}else null!=b&&U8(this,11);else if(this.If==
a&&S8(this),!g.cb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.Cu=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.nB=c[2],c=c[3],null!=c?this.zr=c:this.zr=6,this.j=3,this.nh&&this.nh.zM(),this.tM=Q8(this,this.Ix()?this.nB:null,this.BF),Gdb(this)):"stop"==c[0]&&U8(this,7):3==this.j&&("stop"==c[0]?U8(this,7):"noop"!=c[0]&&this.nh&&this.nh.yM(c),this.Au=0)};
g.k.YU=function(){null!=this.Ar&&(this.Ar=null,this.If.cancel(),this.If=null,Idb(this),J8(20))};
g.k.lB=function(a){if(this.If==a){S8(this);this.If=null;var b=2}else if(this.Fi==a)this.Fi=null,b=1;else return;this.Ol=a.Gx;if(0!=this.j)if(a.Jn)if(1==b){b=Date.now()-a.wu;var c=I8;c.dispatchEvent(new wdb(c,a.yr?a.yr.length:0,b,this.Bu));ydb(this);this.B.length=0}else Gdb(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Ol)){if(d=1==b)this.Fi||this.hp||1==this.j||2<=this.Bu?d=!1:(this.hp=H8((0,g.Pa)(this.wM,this,a),Hdb(this,this.Bu)),this.Bu++,d=!0);d=!(d||2==b&&Idb(this))}if(d)switch(c){case 1:U8(this,
5);break;case 4:U8(this,10);break;case 3:U8(this,6);break;case 7:U8(this,12);break;default:U8(this,2)}}};
g.k.WU=function(a){if(!g.Sb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.k.p5=function(a){a?J8(2):(J8(1),Jdb(this,8))};
g.k.yF=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Ai;a.J=!1;return a};
g.k.isActive=function(){return!!this.nh&&this.nh.isActive(this)};
g.k.zl=function(a){var b=I8;b.dispatchEvent(new xdb(b,a))};
g.k.Ix=function(){return!(!g.Ac||g.wc(10))};
g.k=Ldb.prototype;g.k.zM=function(){};
g.k.yM=function(){};
g.k.xM=function(){};
g.k.CF=function(){};
g.k.AM=function(){return{}};
g.k.isActive=function(){return!0};g.k=Mdb.prototype;g.k.enqueue=function(a){this.u.push(a)};
g.k.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.k.clear=function(){this.j=[];this.u=[]};
g.k.contains=function(a){return g.Sb(this.j,a)||g.Sb(this.u,a)};
g.k.remove=function(a){var b=this.j;var c=(0,g.gYa)(b,a);0<=c?(g.Wb(b,c),b=!0):b=!1;return b||g.Xb(this.u,a)};
g.k.fk=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.v(Ndb,g.af);g.v(Odb,g.af);g.Va(V8,g.K);g.k=V8.prototype;g.k.T2=function(){this.uh=Math.min(3E5,2*this.uh);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.uh+15E3*Math.random();g.Yn(this.j,a);this.u=Date.now()+a};
g.k.stop=function(){this.j.stop();this.u=0};
g.k.isActive=function(){return this.j.isActive()};
g.k.reset=function(){this.j.stop();this.uh=5E3};Qdb.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.S("enable_client_streamz_web")){a=g.r(a);for(var c=a.next();!c.done;c=a.next())c=g.mea(c.value),c={serializedIncrementBatch:g.xc(g.Je(c,tgb))},g.cpa("streamzIncremented",c,{EK:b})}};var W8;g.Va(Rdb,Ldb);g.k=Rdb.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.Mg=function(a){return this.B.Mg(a)};
g.k.ma=function(a,b){return this.B.ma.apply(this.B,arguments)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.Ye(this.B),this.disconnect(),g.Ye(this.u),this.u=null,this.oa=function(){return""})};
g.k.isDisposed=function(){return this.ea};
g.k.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.Z="";this.u.stop();this.I=a||null;this.D=b||0;a=this.ya+"/test";b=this.ya+"/bind";var d=new udb(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Qa),e=this.j;e&&(e.nh=null);d.nh=this;this.j=d;Sdb(this);if(this.j){d=g.O("ID_TOKEN");var f=this.j.Nl||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Nl=f}e?(3!=e.getState()&&0==Cdb(e)||e.getState(),this.j.connect(a,b,this.J,e.C,e.Cu)):c?this.j.connect(a,
b,this.J,c.sessionId,c.arrayId):this.j.connect(a,b,this.J)}};
g.k.disconnect=function(a){this.S=a||0;this.u.stop();Sdb(this);this.j&&(3==this.j.getState()&&Fdb(this.j),this.j.disconnect());this.S=0};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.If(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.ew()&&(Sdb(this),Bdb(this.j,a))};
g.k.zM=function(){this.u.reset();this.I=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)Bdb(this.j,a[b])}this.ma("handlerOpened");Ubb(this.La,"BROWSER_CHANNEL")};
g.k.xM=function(a){var b=2==a&&401==this.j.Ol;4==a||b||this.u.start();this.ma("handlerError",a,b);$bb(this.Ba,"BROWSER_CHANNEL")};
g.k.CF=function(a,b){if(!this.u.isActive())this.ma("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}Wbb(this.Aa,"BROWSER_CHANNEL");a&&this.Xa.j.FF("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.bb.j.FF("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.AM=function(){var a={v:2};this.Z&&(a.gsessionid=this.Z);0!=this.D&&(a.ui=""+this.D);0!=this.S&&(a.ui=""+this.S);this.I&&g.If(a,this.I);return a};
g.k.yM=function(a){"S"==a[0]?this.Z=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.ma("handlerMessage",new Pdb(a[0],a[1]));Ybb(this.Ia,"BROWSER_CHANNEL")};
g.k.ew=function(){return!!this.j&&3==this.j.getState()};
g.k.To=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Ta&&this.j){var b=this.j.Nl||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Nl=b}};
g.k.Np=function(){return this.J.id};
g.k.Up=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.k.Et=function(){var a=this.u;g.Zn(a.j);a.start()};
g.k.o4=function(){this.u.isActive();0==Cdb(this.j)&&this.connect(this.I,this.D)};X8.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
X8.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
X8.prototype.D=function(a){a(Error("request timed out"))};g.v(Udb,g.Uf);g.k=Udb.prototype;g.k.connect=function(a,b,c){this.Wc.connect(a,b,c)};
g.k.disconnect=function(a){this.Wc.disconnect(a)};
g.k.Et=function(){this.Wc.Et()};
g.k.Np=function(){return this.Wc.Np()};
g.k.Up=function(){return this.Wc.Up()};
g.k.ew=function(){return this.Wc.ew()};
g.k.bV=function(){this.dispatchEvent("channelOpened");var a=this.Wc,b=this.j;g.Nz("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.RE,sessionId:a.j.C,arrayId:a.j.Cu});g.Nz("yt-remote-session-screen-id",b);a=g8();b=h8();g.Sb(a,b)||a.push(b);ybb(a);Abb()};
g.k.ZU=function(){this.dispatchEvent("channelClosed")};
g.k.aV=function(a){this.dispatchEvent(new Ndb(a))};
g.k.onError=function(a){this.dispatchEvent(new Odb(a?1:0))};
g.k.sendMessage=function(a,b){this.Wc.sendMessage(a,b)};
g.k.To=function(a){this.Wc.To(a)};
g.k.dispose=function(){this.Wc.dispose()};g.k=Vdb.prototype;
g.k.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.I&&(this.B.stop(),this.S=a,this.J=b,Xdb(this),(a=g.O("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.r_&&(this.u.mdxVersion=""+this.j.r_),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.J?this.u.ui=""+this.J:delete this.u.ui,
Object.assign(this.u,this.S),this.channel=new G8(this.pathPrefix,{FZ:"gsessionid",u_:this.C,v_:this.u}),this.channel.open(),this.I=2,Wdb(this))};
g.k.disconnect=function(a){this.Z=void 0===a?0:a;this.B.stop();Xdb(this);this.channel&&(0!==this.Z?this.u.ui=""+this.Z:delete this.u.ui,this.channel.close());this.Z=0};
g.k.Up=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.k.Et=function(){var a=this.B;g.Zn(a.j);a.start()};
g.k.sendMessage=function(a,b){this.channel&&(Xdb(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.k.To=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.k.Np=function(){return this.j?this.j.id:""};
g.k.ma=function(a){return this.D.ma.apply(this.D,[a].concat(g.u(g.za.apply(1,arguments))))};
g.k.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.k.Mg=function(a){return this.D.Mg(a)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.Ye(this.D),this.disconnect(),g.Ye(this.B),this.ya=function(){return""})};
g.k.isDisposed=function(){return this.ea};g.v(Ydb,g.Uf);g.k=Ydb.prototype;g.k.connect=function(a,b){this.j.connect(a,b)};
g.k.disconnect=function(a){this.j.disconnect(a)};
g.k.Et=function(){this.j.Et()};
g.k.Np=function(){return this.j.Np()};
g.k.Up=function(){return this.j.Up()};
g.k.ew=function(){return 3===this.j.I};
g.k.eV=function(){this.dispatchEvent("channelOpened")};
g.k.cV=function(){this.dispatchEvent("channelClosed")};
g.k.dV=function(a){this.dispatchEvent(new Ndb(a))};
g.k.onError=function(){this.dispatchEvent(new Odb(401===this.j.Hg?1:0))};
g.k.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.k.To=function(a){this.j.To(a)};
g.k.dispose=function(){this.j.dispose()};var feb=Date.now(),Z8=null,c9=Array(50),b9=-1,d9=!1;g.Va(e9,g.az);e9.prototype.nj=function(){return this.screens};
e9.prototype.contains=function(a){return!!vbb(this.screens,a)};
e9.prototype.get=function(a){return a?f8(this.screens,a):null};
e9.prototype.info=function(a){$8(this.I,a)};g.v(jeb,g.az);g.k=jeb.prototype;g.k.start=function(){!this.j&&isNaN(this.wc)&&this.KR()};
g.k.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.wc)||(g.xu(this.wc),this.wc=NaN)};
g.k.ra=function(){this.stop();g.az.prototype.ra.call(this)};
g.k.KR=function(){this.wc=NaN;this.j=g.Au(Y8(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Pa)(this.gV,this),onError:(0,g.Pa)(this.fV,this),onTimeout:(0,g.Pa)(this.hV,this)})};
g.k.gV=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ma("pairingComplete",new c8(a),b)};
g.k.fV=function(a){this.j=null;a.status&&404==a.status?this.u>=ugb.length?this.ma("pairingFailed",Error("DIAL polling timed out")):(a=ugb[this.u],this.wc=g.vu((0,g.Pa)(this.KR,this),a),this.u++):this.ma("pairingFailed",Error("Server error "+a.status))};
g.k.hV=function(){this.j=null;this.ma("pairingFailed",Error("Server not responding"))};
var ugb=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Va(g9,e9);g.k=g9.prototype;g.k.start=function(){f9(this)&&this.ma("screenChange");!g.Oz("yt-remote-lounge-token-expiration")&&keb(this);g.xu(this.j);this.j=g.vu((0,g.Pa)(this.start,this),1E4)};
g.k.add=function(a,b){f9(this);geb(this,a);h9(this,!1);this.ma("screenChange");b(a);a.token||keb(this)};
g.k.remove=function(a,b){var c=f9(this);ieb(this,a)&&(h9(this,!1),c=!0);b(a);c&&this.ma("screenChange")};
g.k.QE=function(a,b,c,d){var e=f9(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,h9(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ma("screenChange")};
g.k.ra=function(){g.xu(this.j);g9.Se.ra.call(this)};
g.k.gZ=function(a){f9(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}h9(this,!b);b&&$8(this.I,"Missed "+b+" lounge tokens.")};
g.k.fZ=function(a){$8(this.I,"Requesting lounge tokens failed: "+a)};g.v(meb,g.az);g.k=meb.prototype;g.k.start=function(){var a=parseInt(g.Oz("yt-remote-fast-check-period")||"0",10);(this.C=g.Ra()-144E5<a?0:a)?i9(this):(this.C=g.Ra()+3E5,g.Nz("yt-remote-fast-check-period",this.C),this.qK())};
g.k.isEmpty=function(){return g.vf(this.j)};
g.k.update=function(){leb("Updating availability on schedule.");var a=this.I(),b=g.mf(this.j,function(c,d){return c&&!!f8(a,d)},this);
peb(this,b)};
g.k.ra=function(){g.xu(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.az.prototype.ra.call(this)};
g.k.qK=function(){g.xu(this.B);this.B=NaN;this.u&&this.u.abort();var a=qeb(this);if(ibb(a)){var b=Y8(this.D,"/pairing/get_screen_availability");this.u=Tdb(this.D,b,{lounge_token:g.rf(a).join(",")},(0,g.Pa)(this.z2,this,a),(0,g.Pa)(this.w2,this))}else peb(this,{}),i9(this)};
g.k.z2=function(a,b){this.u=null;var c=g.rf(qeb(this));if(g.mc(c,g.rf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;peb(this,c);i9(this)}else this.hf("Changing Screen set during request."),this.qK()};
g.k.w2=function(a){this.hf("Screen availability failed: "+a);this.u=null;i9(this)};
g.k.hf=function(a){$8("OnlineScreenService",a)};g.Va(j9,e9);g.k=j9.prototype;g.k.start=function(){this.u.start();this.j.start();this.screens.length&&(this.ma("screenChange"),this.j.isEmpty()||this.ma("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.k.QE=function(a,b,c,d){this.u.contains(a)?this.u.QE(a,b,c,d):(a="Updating name of unknown screen: "+a.name,$8(this.I,a),d(Error(a)))};
g.k.nj=function(a){return a?this.screens:g.ac(this.screens,g.vm(this.B,function(b){return!this.contains(b)},this))};
g.k.BM=function(){return g.vm(this.nj(!0),function(a){return!!this.j.j[a.id]},this)};
g.k.CM=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new jeb(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.Ye(l);e(k9(h,m),n)});
l.subscribe("pairingFailed",function(m){g.Ye(l);f(m)});
l.start();return(0,g.Pa)(l.stop,l)};
g.k.iV=function(a,b,c,d){g.Au(Y8(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Pa)(function(e,f){e=new c8(f.screen||{});if(!e.name||ueb(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);ueb(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(k9(this,e))},this),
onError:(0,g.Pa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Pa)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ra=function(){g.Ye(this.u);g.Ye(this.j);j9.Se.ra.call(this)};
g.k.pZ=function(){web(this);this.ma("screenChange");this.j.update()};
j9.prototype.dispose=j9.prototype.dispose;g.Va(l9,g.az);g.k=l9.prototype;g.k.getScreen=function(){return this.C};
g.k.Xh=function(a){this.isDisposed()||(a&&(n9(this,""+a),this.ma("sessionFailed")),this.C=null,this.ma("sessionScreen",null))};
g.k.info=function(a){$8(this.Ba,a)};
g.k.DM=function(){return null};
g.k.IK=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Pa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Pa)(function(){n9(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ra=function(){this.IK("");l9.Se.ra.call(this)};g.v(o9,l9);g.k=o9.prototype;g.k.HK=function(a){if(this.u){if(this.u==a)return;n9(this,"Overriding cast session with new session object");Ieb(this);this.ya=!1;this.Z="unknown";this.u.removeUpdateListener(this.oa);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.oa);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);Deb(this,"getMdxSessionStatus")};
g.k.qw=function(a){this.info("launchWithParams no-op for Cast: "+g.di(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.Pa)(function(){this.Xh()},this),(0,g.Pa)(function(){this.Xh(Error("Failed to stop receiver app."))},this)):this.Xh(Error("Stopping cast device without session."))};
g.k.IK=function(){};
g.k.ra=function(){this.info("disposeInternal");Ieb(this);this.u&&(this.u.removeUpdateListener(this.oa),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;l9.prototype.ra.call(this)};
g.k.q3=function(a,b){if(!this.isDisposed())if(b)if(b=$7(b),g.Ma(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.di(b)),a){case "mdxSessionStatus":Aeb(this,b);break;case "loungeToken":Eeb(this,b);break;default:n9(this,"Unknown youtube message: "+a)}else n9(this,"Unable to parse message.");else n9(this,"No data in message.")};
g.k.hP=function(a,b,c,d){g.xu(this.S);this.S=0;teb(this.B,this.j.label,a,this.j.friendlyName,(0,g.Pa)(function(e){e?b(e):0<=d?(n9(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.S=g.vu((0,g.Pa)(this.hP,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.DM=function(){return this.u};
g.k.jV=function(a){this.isDisposed()||a||(n9(this,"Cast session died."),this.Xh())};g.v(p9,l9);g.k=p9.prototype;g.k.HK=function(a){this.u=a;this.u.addUpdateListener(this.Ia)};
g.k.qw=function(a){this.La=a;this.ea()};
g.k.stop=function(){Qeb(this);this.u?this.u.stop((0,g.Pa)(this.Xh,this,null),(0,g.Pa)(this.Xh,this,"Failed to stop DIAL device.")):this.Xh()};
g.k.ra=function(){Qeb(this);this.u&&this.u.removeUpdateListener(this.Ia);this.u=null;l9.prototype.ra.call(this)};
g.k.kV=function(a){this.isDisposed()||a||(n9(this,"DIAL session died."),this.D(),this.D=function(){},this.Xh())};g.v(s9,l9);s9.prototype.stop=function(){this.Xh()};
s9.prototype.HK=function(){};
s9.prototype.qw=function(){g.xu(this.u);this.u=NaN;var a=f8(this.B.nj(),this.j.label);a?m9(this,a):this.Xh(Error("No such screen"))};
s9.prototype.ra=function(){g.xu(this.u);this.u=NaN;l9.prototype.ra.call(this)};g.v(t9,g.az);g.k=t9.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.S,[chrome.cast.Capability.AUDIO_OUT]);this.Z||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Pa)(this.e2,this);c=new chrome.cast.ApiConfig(c,(0,g.Pa)(this.sR,this),e,d,a);c.customDialLaunchCallback=(0,g.Pa)(this.Q0,this);
chrome.cast.initialize(c,(0,g.Pa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),ceb(),this.u.subscribe("onlineScreenChange",(0,g.Pa)(this.EM,this)),this.B=Teb(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Pa)(function(f){this.hf("Failed to set initial custom receivers: "+g.di(f))},this)),this.ma("yt-remote-cast2-availability-change",v9(this)),b(!0))},this),(0,g.Pa)(function(f){this.hf("Failed to initialize API: "+g.di(f));
b(!1)},this))};
g.k.z4=function(a,b){u9("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)u9("Unsetting old screen status: "+this.j.j.friendlyName),w9(this,null)}if(a&&b){if(!this.j){c=f8(this.u.nj(),a);if(!c){u9("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){u9("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=Reb(this,c);a||(u9("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Pa)(function(d){this.hf("Failed to set initial custom receivers: "+g.di(d))},this)));
u9("setConnectedScreenStatus: new active receiver: "+a.friendlyName);w9(this,new s9(this.u,a),!0)}this.j.IK(b)}else u9("setConnectedScreenStatus: no screen.")};
g.k.A4=function(a){this.isDisposed()?this.hf("Setting connection data on disposed cast v2"):this.j?this.j.qw(a):this.hf("Setting connection data without a session")};
g.k.mV=function(){this.isDisposed()?this.hf("Stopping session on disposed cast v2"):this.j?(this.j.stop(),w9(this,null)):u9("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Pa)(this.sR,this),(0,g.Pa)(this.C2,this))};
g.k.ra=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Pa)(this.EM,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=$db,b=g.Ga("yt.mdx.remote.debug.handlers_");g.Xb(b||[],a);g.Ye(this.j);g.az.prototype.ra.call(this)};
g.k.hf=function(a){$8("Controller",a)};
g.k.uR=function(a,b){this.j==a&&(b||w9(this,null),this.ma("yt-remote-cast2-session-change",b))};
g.k.Z1=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),u9("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)u9("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{u9("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.ma("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:w9(this,
new s9(this.u,a));break;case chrome.cast.ReceiverType.DIAL:w9(this,new p9(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:w9(this,new o9(this.u,a,this.config_));break;default:this.hf("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.hf("Stopping receiver w/o session: "+a.friendlyName)}else this.hf("onReceiverAction_ called without receiver.")};
g.k.Q0=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.hf("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.hf("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return u9("Reselecting dial screen."),
this.ma("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.hf('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);w9(this,new p9(this.u,b,this.C,this.config_))}b=this.j;b.S=a;b.S.appState==chrome.cast.DialAppState.RUNNING?(a=b.S.extraData||{},c=a.screenId||null,q9(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=Neb(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.S.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.eu(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=Oeb(b,c)):a=Oeb(b,c)):a=Leb(b);return a};
g.k.sR=function(a){var b=this;if(!this.isDisposed()&&!this.I){u9("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)u9("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),w9(this,new o9(this.u,c,this.config_),!0);else{this.hf("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=f8(this.u.nj(),
d.label);e&&d8(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(u9("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.Ye(this.j),this.j=new o9(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Pa)(this.uR,this,this.j)),this.j.subscribe("sessionFailed",function(){return Seb(b,b.j)}),this.j.qw(null));
this.j.HK(a)}}};
g.k.lV=function(){return this.j?this.j.DM():null};
g.k.C2=function(a){this.isDisposed()||(this.hf("Failed to estabilish a session: "+g.di(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&w9(this,null),this.ma("yt-remote-cast2-session-failed"))};
g.k.e2=function(a){u9("Receiver availability updated: "+a);if(!this.isDisposed()){var b=v9(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;v9(this)!=b&&this.ma("yt-remote-cast2-availability-change",v9(this))}};
g.k.EM=function(){this.isDisposed()||(this.B=Teb(this),u9("Updating custom receivers: "+g.di(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Pa)(function(){this.hf("Failed to set custom receivers.")},this)),this.ma("yt-remote-cast2-availability-change",v9(this)))};
t9.prototype.setLaunchParams=t9.prototype.A4;t9.prototype.setConnectedScreenStatus=t9.prototype.z4;t9.prototype.stopSession=t9.prototype.mV;t9.prototype.getCastSession=t9.prototype.lV;t9.prototype.requestSession=t9.prototype.requestSession;t9.prototype.init=t9.prototype.init;t9.prototype.dispose=t9.prototype.dispose;var bfb=[];g.k=D9.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";hfb(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Nm=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.S=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Sc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Bj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+E9(this):this.D};
g.k.clone=function(){return new D9(ifb(this))};g.v(J9,g.az);g.k=J9.prototype;g.k.getState=function(){return this.B};
g.k.Up=function(){return this.C.getReconnectTimeout()};
g.k.Et=function(){this.C.reconnect()};
g.k.play=function(){L9(this)?(this.j?this.j.play(null,g.Yf,P9(this,"play")):O9(this,"play"),lfb(this,1,G9(K9(this))),this.ma("remotePlayerChange")):M9(this,this.play)};
g.k.pause=function(){L9(this)?(this.j?this.j.pause(null,g.Yf,P9(this,"pause")):O9(this,"pause"),lfb(this,2,G9(K9(this))),this.ma("remotePlayerChange")):M9(this,this.pause)};
g.k.seekTo=function(a){if(L9(this)){if(this.j){var b=K9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Sc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.Yf,P9(this,"seekTo",{newTime:a}))}else O9(this,"seekTo",{newTime:a});lfb(this,3,a);this.ma("remotePlayerChange")}else M9(this,g.Qa(this.seekTo,a))};
g.k.stop=function(){if(L9(this)){this.j?this.j.stop(null,g.Yf,P9(this,"stopVideo")):O9(this,"stopVideo");var a=K9(this);a.index=-1;a.videoId="";hfb(a);N9(this,a);this.ma("remotePlayerChange")}else M9(this,this.stop)};
g.k.setVolume=function(a,b){if(L9(this)){var c=K9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Pa)(function(){a9("set receiver volume: "+d)},this),(0,g.Pa)(function(){this.hf("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Pa)(function(){a9("set receiver muted: "+b)},this),(0,g.Pa)(function(){this.hf("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);O9(this,"setVolume",e)}c.muted=b;c.volume=a;N9(this,c)}else M9(this,g.Qa(this.setVolume,a,b))};
g.k.FM=function(a,b){if(L9(this)){var c=K9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.di(b.style),g.If(a,c.trackData));O9(this,"setSubtitlesTrack",a);N9(this,c)}else M9(this,g.Qa(this.FM,a,b))};
g.k.setAudioTrack=function(a,b){L9(this)?(b=b.getLanguageInfo().getId(),O9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=K9(this),a.audioTrackId=b,N9(this,a)):M9(this,g.Qa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=K9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);H9(l,a,c||0);void 0!==b&&(F9(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.di(h));O9(this,"setPlaylist",m);d||N9(this,l)};
g.k.YD=function(a,b){if(L9(this)){if(a&&b){var c=K9(this);H9(c,a,b);N9(this,c)}O9(this,"previous")}else M9(this,g.Qa(this.YD,a,b))};
g.k.nextVideo=function(a,b){if(L9(this)){if(a&&b){var c=K9(this);H9(c,a,b);N9(this,c)}O9(this,"next")}else M9(this,g.Qa(this.nextVideo,a,b))};
g.k.vv=function(){if(L9(this)){O9(this,"clearPlaylist");var a=K9(this);a.reset();N9(this,a);this.ma("remotePlayerChange")}else M9(this,this.vv)};
g.k.CO=function(){L9(this)?O9(this,"dismissAutoplay"):M9(this,this.CO)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ma("proxyStateChange",a,this.B)}g.az.prototype.dispose.call(this)};
g.k.ra=function(){kfb(this);this.C=null;this.D.clear();I9(this,null);g.az.prototype.ra.call(this)};
g.k.KK=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ma("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.k.X1=function(a,b){this.ma(a,b)};
g.k.F0=function(a){if(!a)this.Tz(null),I9(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=K9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)a9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,N9(this,b)}};
g.k.Tz=function(a){a9("Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.S);if(this.j=a)this.j.addUpdateListener(this.S),mfb(this),this.ma("remotePlayerChange")};
g.k.E0=function(a){a?(mfb(this),this.ma("remotePlayerChange")):this.Tz(null)};
g.k.hL=function(){O9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.I0=function(){var a=efb();a&&I9(this,a)};
g.k.hf=function(a){$8("CP",a)};g.v(S9,g.az);g.k=S9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ia&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;F9(this.j,
n);this.D="UNSUPPORTED";c=this.Ia?"setInitialState":"setPlaylist";Q9("Connecting with "+c+" and params: "+g.di(m));this.u.connect({method:c,params:g.di(m)},a,Bbb())}else Q9("Connecting without params"),this.u.connect({},a,Bbb());qfb(this)};
g.k.To=function(a){this.u.To(a)};
g.k.dispose=function(){this.isDisposed()||(g.Fa("yt.mdx.remote.remoteClient_",null),this.ma("beforeDispose"),R9(this,3));g.az.prototype.dispose.call(this)};
g.k.ra=function(){rfb(this);tfb(this);sfb(this);g.xu(this.S);this.S=NaN;g.xu(this.Z);this.Z=NaN;this.C=null;g.zx(this.ea);this.ea.length=0;this.u.dispose();g.az.prototype.ra.call(this);this.D=this.J=this.B=this.j=this.u=null};
g.k.QP=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.r(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.XY=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Xy())?this.u.ew()&&isNaN(this.I)&&(a=1):a=2);return a};
g.k.Ev=function(a){Q9("Disconnecting with "+a);g.Fa("yt.mdx.remote.remoteClient_",null);rfb(this);this.ma("beforeDisconnect",a);1==a&&i8();this.u.disconnect(a);this.dispose()};
g.k.VY=function(){var a=this.j;this.C&&(a=this.j.clone(),H9(a,this.C,a.index));return ifb(a)};
g.k.B4=function(a){var b=this,c=new D9(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.xu(this.S),this.S=g.vu(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&T9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&G9(this.j)==G9(c)&&g.di(this.j.trackData)==g.di(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.qc(d,function(e){this.ma(e)},this)};
g.k.gP=function(){var a=this.u.Np(),b=g.Pb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Xy=function(){return this.u.Up()};
g.k.SY=function(){return this.D||"UNSUPPORTED"};
g.k.TY=function(){return this.J||""};
g.k.nV=function(){!isNaN(this.Xy())&&this.u.Et()};
g.k.x4=function(a,b){T9(this,a,b);vfb(this)};
g.k.GM=function(){var a=g.Ku("SID","")||"",b=g.Ku("SAPISID","")||"",c=g.Ku("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.xc(g.ab(a),2);b=g.xc(g.ab(b),2);c=g.xc(g.ab(c),2);return g.xc(g.ab(a+","+b+","+c),2)};
S9.prototype.subscribe=S9.prototype.subscribe;S9.prototype.unsubscribeByKey=S9.prototype.Mg;S9.prototype.getProxyState=S9.prototype.XY;S9.prototype.disconnect=S9.prototype.Ev;S9.prototype.getPlayerContextData=S9.prototype.VY;S9.prototype.setPlayerContextData=S9.prototype.B4;S9.prototype.getOtherConnectedRemoteId=S9.prototype.gP;S9.prototype.getReconnectTimeout=S9.prototype.Xy;S9.prototype.getAutoplayMode=S9.prototype.SY;S9.prototype.getAutoplayVideoId=S9.prototype.TY;S9.prototype.reconnect=S9.prototype.nV;
S9.prototype.sendMessage=S9.prototype.x4;S9.prototype.getXsrfToken=S9.prototype.GM;S9.prototype.isCapabilitySupportedOnConnectedDevices=S9.prototype.QP;g.v(Hfb,e9);g.k=Hfb.prototype;g.k.nj=function(a){return this.Uf.$_gs(a)};
g.k.contains=function(a){return!!this.Uf.$_c(a)};
g.k.get=function(a){return this.Uf.$_g(a)};
g.k.start=function(){this.Uf.$_st()};
g.k.add=function(a,b,c){this.Uf.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Uf.$_r(a,b,c)};
g.k.QE=function(a,b,c,d){this.Uf.$_un(a,b,c,d)};
g.k.ra=function(){for(var a=0,b=this.j.length;a<b;++a)this.Uf.$_ubk(this.j[a]);this.j.length=0;this.Uf=null;e9.prototype.ra.call(this)};
g.k.oV=function(){this.ma("screenChange")};
g.k.F1=function(){this.ma("onlineScreenChange")};
j9.prototype.$_st=j9.prototype.start;j9.prototype.$_gspc=j9.prototype.iV;j9.prototype.$_gsppc=j9.prototype.CM;j9.prototype.$_c=j9.prototype.contains;j9.prototype.$_g=j9.prototype.get;j9.prototype.$_a=j9.prototype.add;j9.prototype.$_un=j9.prototype.QE;j9.prototype.$_r=j9.prototype.remove;j9.prototype.$_gs=j9.prototype.nj;j9.prototype.$_gos=j9.prototype.BM;j9.prototype.$_s=j9.prototype.subscribe;j9.prototype.$_ubk=j9.prototype.Mg;var d$=null,g$=!1,U9=null,V9=null,Sfb=null,Z9=[];g.v(Xfb,g.K);g.k=Xfb.prototype;g.k.ra=function(){g.K.prototype.ra.call(this);this.u.stop();this.B.stop();this.S.stop();var a=this.qc;a.unsubscribe("proxyStateChange",this.rR,this);a.unsubscribe("remotePlayerChange",this.Yz,this);a.unsubscribe("remoteQueueChange",this.JD,this);a.unsubscribe("previousNextChange",this.oR,this);a.unsubscribe("nowAutoplaying",this.iR,this);a.unsubscribe("autoplayDismissed",this.LQ,this);this.qc=this.j=null};
g.k.hk=function(a){var b=g.za.apply(1,arguments);if(2!=this.qc.B)if(h$(this)){if(!K9(this.qc).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":K9(this.qc).Sc()?this.qc.pause():this.qc.play();break;case "control_play":this.qc.play();break;case "control_pause":this.qc.pause();break;case "control_seek":this.J.vF(b[0],b[1]);break;case "control_subtitles_set_track":Zfb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();i$(this,0===b?void 0:b);break;case "control_seek":i$(this,b[0]);break;case "control_subtitles_set_track":Zfb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.C0=function(a){this.S.NU(a)};
g.k.V5=function(a){this.hk("control_subtitles_set_track",g.vf(a)?null:a)};
g.k.NS=function(){var a=this.G.getOption("captions","track");g.vf(a)||Zfb(this,a)};
g.k.dc=function(a){this.j.dc(a,this.G.getVideoData().lengthSeconds)};
g.k.m1=function(){g.vf(this.C)||$fb(this,this.C);this.D=!1};
g.k.rR=function(a,b){this.B.stop();2===b&&this.GS()};
g.k.Yz=function(){if(h$(this)){this.u.stop();var a=K9(this.qc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.j.Gg=1;break;case 1082:case 1083:this.j.Gg=0;break;default:this.j.Gg=-1}switch(a.playerState){case 1081:case 1:this.Wb(new g.XJ(8));this.ES();break;case 1085:case 3:this.Wb(new g.XJ(9));break;case 1083:case 0:this.Wb(new g.XJ(2));this.J.stop();this.dc(this.G.getVideoData().lengthSeconds);break;case 1084:this.Wb(new g.XJ(4));break;case 2:this.Wb(new g.XJ(4));this.dc(G9(a));
break;case -1:this.Wb(new g.XJ(64));break;case -1E3:this.Wb(new g.XJ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",lC:2}))}a=K9(this.qc).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,$fb(this,a));a=K9(this.qc);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.Z.isActive()||this.sT()}else Yfb(this)};
g.k.oR=function(){this.G.ma("mdxpreviousnextchange")};
g.k.JD=function(){h$(this)||Yfb(this)};
g.k.iR=function(a){isNaN(a)||this.G.ma("mdxnowautoplaying",a)};
g.k.LQ=function(){this.G.ma("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){h$(this)&&this.qc.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===K9(this.qc).playerState?i$(this,a):b&&this.qc.seekTo(a)};
g.k.sT=function(){var a=this;if(h$(this)){var b=K9(this.qc);this.events.yc(this.ea);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.ea=this.events.T(this.G,"onVolumeChange",function(c){Vfb(a,c)})}};
g.k.ES=function(){this.u.stop();if(!this.qc.isDisposed()){var a=K9(this.qc);a.Sc()&&this.Wb(new g.XJ(8));this.dc(G9(a));this.u.start()}};
g.k.GS=function(){this.B.stop();this.u.stop();var a=this.qc.Up();2==this.qc.B&&!isNaN(a)&&this.B.start()};
g.k.Wb=function(a){this.B.stop();var b=this.I;if(!g.bK(b,a)){var c=g.V(a,2);c!==g.V(this.I,2)&&this.G.Vw(c);this.I=a;bgb(this.j,b,a)}};g.v(j$,g.W);j$.prototype.Pc=function(){this.j.show()};
j$.prototype.Bb=function(){this.j.hide()};
j$.prototype.u=function(){a8("mdx-privacy-popup-cancel");this.Bb()};
j$.prototype.B=function(){a8("mdx-privacy-popup-confirm");this.Bb()};g.v(k$,g.W);k$.prototype.onStateChange=function(a){this.Uc(a.state)};
k$.prototype.Uc=function(a){if(3===this.api.getPresentingPlayerType()){var b={RECEIVER_NAME:this.api.getOption("remote","currentReceiver").name};a=g.V(a,128)?g.EJ("Error on $RECEIVER_NAME",b):a.Sc()||g.V(a,4)?g.EJ("Playing on $RECEIVER_NAME",b):g.EJ("Connected to $RECEIVER_NAME",b);this.Oa("statustext",a);this.j.show()}else this.j.hide()};g.v(l$,g.kR);l$.prototype.D=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.Jq=g.rc(a,this.j,this),g.lR(this,g.Ok(a,this.j)),a=this.G.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.Tj(a),this.enable(!0)):this.enable(!1)};
l$.prototype.j=function(a){return a.key};
l$.prototype.Vk=function(a){return"cast-selector-receiver"===a?"Cast...":this.Jq[a].name};
l$.prototype.Ng=function(a){g.kR.prototype.Ng.call(this,a);this.G.setOption("remote","currentReceiver",this.Jq[a]);this.ob.Bb()};g.v(agb,g.bO);g.k=agb.prototype;
g.k.create=function(){var a=this.player.V(),b=g.PF(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.K("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.K("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.K("enable_cast_short_lived_lounge_token")};Mfb(b,a);this.subscriptions.push(g.Sx("yt-remote-before-disconnect",this.A0,this));this.subscriptions.push(g.Sx("yt-remote-connection-change",this.f2,this));this.subscriptions.push(g.Sx("yt-remote-receiver-availability-change",this.qR,
this));this.subscriptions.push(g.Sx("yt-remote-auto-connect",this.d2,this));this.subscriptions.push(g.Sx("yt-remote-receiver-resumed",this.b2,this));this.subscriptions.push(g.Sx("mdx-privacy-popup-confirm",this.L3,this));this.subscriptions.push(g.Sx("mdx-privacy-popup-cancel",this.K3,this));this.qR()};
g.k.load=function(){this.player.cancelPlayback();g.bO.prototype.load.call(this);this.Wj=new Xfb(this,this.player,this.qc);var a=(a=Ufb())?a.currentTime:0;var b=Rfb()?new J9(c$(),void 0):null;0==a&&b&&(a=G9(K9(b)));0!==a&&this.dc(a);bgb(this,this.Cd,this.Cd);this.player.zn(6)};
g.k.unload=function(){this.player.ma("mdxautoplaycanceled");this.Cp=this.hn;g.Ze(this.Wj,this.qc);this.qc=this.Wj=null;g.bO.prototype.unload.call(this);this.player.zn(5);m$(this)};
g.k.ra=function(){g.Tx(this.subscriptions);g.bO.prototype.ra.call(this)};
g.k.jn=function(a){var b=g.za.apply(1,arguments);this.loaded&&this.Wj.hk.apply(this.Wj,[a].concat(g.u(b)))};
g.k.getAdState=function(){return this.Gg};
g.k.Nm=function(){return this.qc?K9(this.qc).Nm:!1};
g.k.hasNext=function(){return this.qc?K9(this.qc).hasNext:!1};
g.k.dc=function(a,b){this.bQ=a||0;this.player.ma("progresssync",a,b);this.player.Pa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.bQ};
g.k.getProgressState=function(){var a=K9(this.qc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().K("web_player_mdx_allow_seeking_change_killswitch")?this.player.fg():!a.isAdPlaying()&&this.player.fg(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+E9(a):a.B,isAtLiveHead:1>=(a.u?a.j+E9(a):a.j)-this.getCurrentTime(),loaded:a.S,seekableEnd:a.u?a.j+E9(a):a.j,seekableStart:0<
a.C?a.C+E9(a):a.C}};
g.k.nextVideo=function(){this.qc&&this.qc.nextVideo()};
g.k.YD=function(){this.qc&&this.qc.YD()};
g.k.A0=function(a){1===a&&(this.aK=this.qc?K9(this.qc):null)};
g.k.f2=function(){var a=Rfb()?new J9(c$(),void 0):null;if(a){var b=this.Cp;this.loaded&&this.unload();this.qc=a;this.aK=null;b.key!==this.hn.key&&(this.Cp=b,this.load())}else g.Ye(this.qc),this.qc=null,this.loaded&&(this.unload(),(a=this.aK)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,G9(a)));this.player.ma("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.qR=function(){var a=[this.hn],b=a.concat,c=Nfb();A9()&&g.Oz("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Jq=b.call(a,c);a=Pfb()||this.hn;n$(this,a);this.player.Pa("onMdxReceiversChange")};
g.k.d2=function(){var a=Pfb();n$(this,a)};
g.k.b2=function(){this.Cp=Pfb()};
g.k.L3=function(){this.gA=!0;m$(this);g$=!1;d$&&f$(d$,1);d$=null};
g.k.K3=function(){this.gA=!1;m$(this);n$(this,this.hn);this.Cp=this.hn;g$=!1;d$=null;this.player.playVideo()};
g.k.zg=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Jq;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?ffb():n$(this,b)),this.loaded?this.Cp:this.hn;case "quickCast":return 2===this.Jq.length&&"cast-selector-receiver"===this.Jq[1].key?(b&&ffb(),!0):!1}};
g.k.hL=function(){this.qc.hL()};
g.k.Cj=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.aO("remote",agb);})(_yt_player);


}
/*
     FILE ARCHIVED ON 23:58:37 Aug 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:43:29 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 182.943
  exclusion.robots: 0.079
  exclusion.robots.policy: 0.07
  cdx.remote: 0.058
  esindex: 0.01
  LoadShardBlock: 143.881 (3)
  PetaboxLoader3.datanode: 145.138 (4)
  load_resource: 153.823
  PetaboxLoader3.resolve: 136.748
*/