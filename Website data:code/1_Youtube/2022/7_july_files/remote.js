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

(function(g){var window=this;'use strict';var N6a=function(a,b){this.u=a>>>0;this.j=b>>>0},P6a=function(a){if(!a)return O6a||(O6a=new N6a(0,0));
if(!/^\d+$/.test(a))return null;g.wba(a);return new N6a(g.Jd,g.Kd)},Q6a=function(a,b,c){null!=c&&("string"===typeof c&&P6a(c),g.ke(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Jd=b,g.Kd=c,g.be(a,g.Jd),g.be(a,g.Kd)):(c=P6a(c),a=a.j,b=c.j,g.be(a,c.u),g.be(a,b)))},R6a=function(a,b,c){b=g.bd(b,c);
null!=b&&(g.ke(a,c,0),a.j.j.push(b?1:0))},S6a=function(a,b){b=b instanceof g.Xf?b:g.ag(b,/^data:image\//i.test(b));
a.src=g.Yf(b)},U6a=function(a){g.I.call(this,a,-1,T6a)},V6a=function(a){g.I.call(this,a)},W6a=function(a){g.I.call(this,a)},X6a=function(a){g.I.call(this,a)},Y6a=function(a){g.I.call(this,a)},Z7=function(a){g.xj(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Qa()).toString(36));
return a},$7=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Sfa(a.u,b,c)},Z6a=function(a){if(a instanceof g.lm)return a;
if("function"==typeof a.Ri)return a.Ri(!1);if(g.Ja(a)){var b=0,c=new g.lm;c.next=function(){for(;;){if(b>=a.length)return g.t2;if(b in a)return g.mm(a[b++]);b++}};
return c}throw Error("Not implemented");},$6a=function(a,b,c){if(g.Ja(a))g.hc(a,b,c);
else for(a=Z6a(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},a7a=function(a,b){var c=[];
$6a(b,function(d){try{var e=g.Co.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Cka(e)&&c.push(d)},a);
return c},b7a=function(a,b){a7a(a,b).forEach(function(c){g.Co.prototype.remove.call(this,c)},a)},c7a=function(a){if(a.Y){if(a.Y.locationOverrideToken)return{locationOverrideToken:a.Y.locationOverrideToken};
if(null!=a.Y.latitudeE7&&null!=a.Y.longitudeE7)return{latitudeE7:a.Y.latitudeE7,longitudeE7:a.Y.longitudeE7}}return null},d7a=function(a,b){g.Nb(a,b)||a.push(b)},e7a=function(a){var b=0,c;
for(c in a)b++;return b},f7a=function(a,b){return g.gf(a,b)},g7a=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},a8=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return g7a(a)},h7a=function(a,b,c,d){var e=new g.pj(null);
a&&g.qj(e,a);b&&g.rj(e,b);c&&g.sj(e,c);d&&(e.J=d);return e},b8=function(a,b){g.Aw[a]=!0;
var c=g.yw();c&&c.publish.apply(c,arguments);g.Aw[a]=!1},c8=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.lo;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",i7a(this,a.capabilities||""),j7a(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},i7a=function(a,b){a.capabilities.clear();
g.qm(b.split(","),g.Pa(f7a,k7a)).forEach(function(c){a.capabilities.add(c)})},j7a=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},d8=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},e8=function(a,b){return!!b&&(a.id==b||a.uuid==b)},l7a=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},m7a=function(a){return new d8(a)},n7a=function(a){return Array.isArray(a)?g.Gk(a,m7a):[]},f8=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},o7a=function(a){return Array.isArray(a)?"["+g.Gk(a,f8).join(",")+"]":"null"},p7a=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},q7a=function(a){return g.Gk(a,function(b){return{key:b.id,
name:b.name}})},r7a=function(a,b){return g.Lb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},g8=function(a,b){return g.Lb(a,function(c){return e8(c,b)})},s7a=function(){var a=(0,g.ty)();
a&&b7a(a,a.j.Ri(!0))},h8=function(){var a=g.wy("yt-remote-connected-devices")||[];
g.ec(a);return a},t7a=function(a){if(g.Qb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Gk(a,function(d,e){return 0==e?d:d.substring(c.length)})},u7a=function(a){g.vy("yt-remote-connected-devices",a,86400)},i8=function(){if(v7a)return v7a;
var a=g.wy("yt-remote-device-id");a||(a=p7a(),g.vy("yt-remote-device-id",a,31536E3));for(var b=h8(),c=1,d=a;g.Nb(b,d);)c++,d=a+"#"+c;return v7a=d},w7a=function(){var a=h8(),b=i8();
g.zy()&&g.gc(a,b);a=t7a(a);if(g.Qb(a))try{g.mma("remote_sid")}catch(c){}else try{g.Bt("remote_sid",a.join(","),-1)}catch(c){}},x7a=function(){return g.wy("yt-remote-session-browser-channel")},y7a=function(){return g.wy("yt-remote-local-screens")||[]},z7a=function(){g.vy("yt-remote-lounge-token-expiration",!0,86400)},A7a=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Gk(y7a(),function(d){return d.loungeToken}),c=g.Gk(a,function(d){return d.loungeToken});
g.Hk(c,function(d){return!g.Nb(b,d)})&&z7a();
g.vy("yt-remote-local-screens",a,31536E3)},j8=function(a){a||(g.yy("yt-remote-session-screen-id"),g.yy("yt-remote-session-video-id"));
w7a();a=h8();g.Ub(a,i8());u7a(a)},B7a=function(){if(!k8){var a=g.Lo();
a&&(k8=new g.zo(a))}},C7a=function(){B7a();
return k8?!!k8.get("yt-remote-use-staging-server"):!1},D7a=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},E7a=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},F7a=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},l8=function(a){a.length?G7a(a.shift(),function(){l8(a)}):H7a()},I7a=function(a){return"chrome-extension://"+a+"/cast_sender.js"},G7a=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Oi(d,g.Rf(a));(document.head||document.documentElement).appendChild(d)},J7a=function(){var a=D7a(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20220701001156/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20220701001156/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},H7a=function(){var a=F7a();
a&&a(!1,"No cast extension found")},L7a=function(){if(K7a){var a=2,b=F7a(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;G7a("//web.archive.org/web/20220701001156/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",H7a,c)}},M7a=function(){L7a();
var a=J7a();a.push("//web.archive.org/web/20220701001156/https://www.gstatic.com/eureka/clank/cast_sender.js");l8(a)},O7a=function(){L7a();
var a=J7a();a.push.apply(a,g.u(N7a.map(I7a)));a.push("//web.archive.org/web/20220701001156/https://www.gstatic.com/eureka/clank/cast_sender.js");l8(a)},P7a=function(){this.j=m8();
this.j.Po("/client_streamz/youtube/living_room/mdx/channel/opened",{Dh:3,Ch:"channel_type"})},Q7a=function(a,b){a.j.Eq("/client_streamz/youtube/living_room/mdx/channel/opened",b)},R7a=function(){this.j=m8();
this.j.Po("/client_streamz/youtube/living_room/mdx/channel/closed",{Dh:3,Ch:"channel_type"})},S7a=function(a,b){a.j.Eq("/client_streamz/youtube/living_room/mdx/channel/closed",b)},T7a=function(){this.j=m8();
this.j.Po("/client_streamz/youtube/living_room/mdx/channel/message_received",{Dh:3,Ch:"channel_type"})},U7a=function(a,b){a.j.Eq("/client_streamz/youtube/living_room/mdx/channel/message_received",b)},V7a=function(){this.j=m8();
this.j.Po("/client_streamz/youtube/living_room/mdx/channel/error",{Dh:3,Ch:"channel_type"})},W7a=function(a,b){a.j.Eq("/client_streamz/youtube/living_room/mdx/channel/error",b)},X7a=function(){this.j=m8();
this.j.Po("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},Y7a=function(){this.j=m8();
this.j.Po("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},n8=function(a,b,c){g.J.call(this);
this.I=null!=c?(0,g.Oa)(a,c):a;this.eh=b;this.D=(0,g.Oa)(this.UT,this);this.j=!1;this.u=0;this.B=this.pc=null;this.C=[]},o8=function(a,b,c){g.J.call(this);
this.C=null!=c?a.bind(c):a;this.eh=b;this.B=null;this.j=!1;this.u=0;this.pc=null},Z7a=function(a){a.pc=g.yh(function(){a.pc=null;
a.j&&!a.u&&(a.j=!1,Z7a(a))},a.eh);
var b=a.B;a.B=null;a.C.apply(null,b)},p8=function(){},$7a=function(){g.Ne.call(this,"p")},a8a=function(){g.Ne.call(this,"o")},b8a=function(){var a=new g.C.TextEncoder;
return new g.C.ReadableStream({start:function(b){for(var c=g.r(["test\r\n","test\r\n"]),d=c.next();!d.done;d=c.next())b.enqueue(a.encode(d.value));b.close()}})},c8a=function(a){return(a=/\/\/([^\/]+)\//.exec(a))?a[1].endsWith("google.com"):!1},e8a=function(a,b){if(!d8a){d8a=!0;
var c;a:{if(c=g.C.navigator)if(c=c.userAgent)break a;c=""}(-1==c.indexOf("Chrome")||-1!=c.indexOf("Edg")?0:90<=parseInt(/Chrome\/(\d+)/.exec(c)[1],10))&&c8a(a)&&window&&window.document&&c8a(window.document.URL)&&(c=document.createElement("meta"),c.httpEquiv="origin-trial",c.content="A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
document.head.appendChild(c),(new Request("",{body:new ReadableStream,method:"POST"})).headers.has("Content-Type")||(g.C.fetch(a+"?ot=1",{method:"POST",body:"test\r\n"}).catch(b),g.C.fetch(a+"?ot=2",{method:"POST",body:b8a(),iW:!1}).catch(b),g.C.fetch(a+"?ot=3",{method:"POST",body:b8a(),iW:!0}).catch(b)))}},g8a=function(){return f8a=f8a||new g.Df},h8a=function(a){g.Ne.call(this,"serverreachability",a)},q8=function(a){var b=g8a();
b.dispatchEvent(new h8a(b,a))},i8a=function(a,b){g.Ne.call(this,"statevent",a);
this.stat=b},r8=function(a){var b=g8a();
b.dispatchEvent(new i8a(b,a))},j8a=function(a,b,c,d){g.Ne.call(this,"timingevent",a);
this.size=b;this.Pv=d},s8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},k8a=function(){},t8=function(a,b,c,d){this.D=a;
this.C=b;this.Jc=c;this.Ic=d||1;this.bb=new g.Cj(this);this.sb=45E3;a=g.UE?125:void 0;this.eb=new g.xh(a);this.Ha=null;this.B=!1;this.N=this.Ua=this.J=this.Ka=this.ma=this.Ib=this.V=null;this.Y=[];this.j=null;this.W=0;this.I=this.oa=null;this.Jb=-1;this.Da=!1;this.ob=0;this.Sa=null;this.qc=this.Oa=this.jc=this.va=!1;this.u=new l8a},l8a=function(){this.B=null;
this.j="";this.u=!1},n8a=function(a,b,c){a.Ka=1;
a.J=Z7(b.clone());a.N=c;a.va=!0;m8a(a,null)},m8a=function(a,b){a.ma=Date.now();
u8(a);a.Ua=a.J.clone();$7(a.Ua,"t",a.Ic);a.W=0;var c=a.D.Ka;a.u=new l8a;a.j=o8a(a.D,c?b:null,!a.N);0<a.ob&&(a.Sa=new o8((0,g.Oa)(a.lL,a,a.j),a.ob));a.bb.Ma(a.j,"readystatechange",a.ZT);b=a.Ha?g.nf(a.Ha):{};a.N?(a.oa||(a.oa="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Ua,a.oa,a.N,b)):(a.oa="GET",a.j.send(a.Ua,a.oa,null,b));q8(1)},p8a=function(a){return a.j?"GET"==a.oa&&2!=a.Ka&&a.D.Be:!1},t8a=function(a,b,c){for(var d=!0,e;!a.Da&&a.W<c.length;)if(e=q8a(a,c),e==v8){4==b&&
(a.I=4,r8(14),d=!1);
break}else if(e==r8a){a.I=4;r8(15);d=!1;break}else s8a(a,e);p8a(a)&&e!=v8&&e!=r8a&&(a.u.j="",a.W=0);4!=b||0!=c.length||a.u.u||(a.I=1,r8(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.qc&&(a.qc=!0,a.D.FI(a)):(w8(a),x8(a))},q8a=function(a,b){var c=a.W,d=b.indexOf("\n",c);
if(-1==d)return v8;c=Number(b.substring(c,d));if(isNaN(c))return r8a;d+=1;if(d+c>b.length)return v8;b=b.slice(d,d+c);a.W=d+c;return b},u8=function(a){a.Ib=Date.now()+a.sb;
u8a(a,a.sb)},u8a=function(a,b){if(null!=a.V)throw Error("WatchDog timer not null");
a.V=s8((0,g.Oa)(a.VT,a),b)},y8=function(a){a.V&&(g.C.clearTimeout(a.V),a.V=null)},x8=function(a){a.D.Jf()||a.Da||v8a(a.D,a)},w8=function(a){y8(a);
g.Ke(a.Sa);a.Sa=null;a.eb.stop();g.Dj(a.bb);if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},s8a=function(a,b){try{var c=a.D;
if(0!=c.Yf&&(c.j==a||w8a(c.u,a)))if(!a.Oa&&w8a(c.u,a)&&3==c.Yf){try{var d=c.Wg.j.parse(b)}catch(z){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.N){if(c.j)if(c.j.ma+3E3<a.ma)z8(c),A8(c);else break a;x8a(c);r8(18)}}else c.Ad=e[1],0<c.Ad-c.Oa&&37500>e[2]&&c.eb&&0==c.Y&&!c.W&&(c.W=s8((0,g.Oa)(c.aU,c),6E3));if(1>=y8a(c.u)&&c.Tc){try{c.Tc()}catch(z){}c.Tc=void 0}}else B8(c,11)}else if((a.Oa||c.j==a)&&z8(c),!g.db(b))for(e=c.Wg.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Oa=f[0];f=
f[1];if(2==c.Yf)if("c"==f[0]){c.C=f[1];c.qc=f[2];var h=f[3];null!=h&&(c.mL=h);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Ua=1.5*l);d=c;var m=a.j;if(m){var n=g.oi(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.fb(n,"spdy")||g.fb(n,"quic")||g.fb(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(z8a(p,p.u),p.u=null))}if(d.va){var q=g.oi(m,"X-HTTP-Session-Id");q&&(d.Ae=q,g.xj(d.Ha,d.va,q))}}c.Yf=3;c.D&&c.D.sL();c.Oc&&(c.hd=Date.now()-a.ma);d=c;var t=a;d.od=A8a(d,d.Ka?d.qc:null,d.Ic);if(t.Oa){B8a(d.u,t);
var v=t,y=d.Ua;y&&v.setTimeout(y);v.V&&(y8(v),u8(v));d.j=t}else C8a(d);0<c.B.length&&C8(c)}else"stop"!=f[0]&&"close"!=f[0]||B8(c,7);else 3==c.Yf&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?B8(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.rL(f),c.Y=0)}q8(4)}catch(z){}},D8a=function(a,b){this.j=a;
this.map=b;this.context=null},E8a=function(a){this.D=a||10;
g.C.PerformanceNavigationTiming?(a=g.C.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.C.chrome&&g.C.chrome.loadTimes&&g.C.chrome.loadTimes()&&g.C.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},F8a=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},y8a=function(a){return a.u?1:a.j?a.j.size:0},w8a=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},z8a=function(a,
b){a.j?a.j.add(b):a.u=b},B8a=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},G8a=function(a){if(null!=a.u)return a.B.concat(a.u.Y);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.r(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.Y);return b}return g.Yb(a.B)},H8a=function(a,b){var c=new k8a;
if(g.C.Image){var d=new Image;d.onload=g.Pa(D8,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Pa(D8,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Pa(D8,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Pa(D8,c,d,"TestLoadImage: timeout",!1,b);g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},D8=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},I8a=function(){this.j=new p8},J8a=function(a,b,c){var d=c||"";
try{g.oj(a,function(e,f){var h=e;g.Ka(e)&&(h=g.Rh(e));b.push(d+f+"="+encodeURIComponent(h))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},E8=function(a,b,c){return c&&c.uY?c.uY[a]||b:b},K8a=function(a){this.B=[];
this.qc=this.od=this.Ha=this.Ic=this.j=this.Ae=this.va=this.Da=this.J=this.Ib=this.V=null;this.Le=this.Sa=0;this.Je=E8("failFast",!1,a);this.eb=this.W=this.N=this.I=this.D=null;this.Jc=!0;this.Fd=this.Ad=this.Oa=-1;this.jc=this.Y=this.ma=0;this.Ie=E8("baseRetryDelayMs",5E3,a);this.We=E8("retryDelaySeedMs",1E4,a);this.Ke=E8("forwardChannelMaxRetries",2,a);this.qd=E8("forwardChannelRequestTimeoutMs",2E4,a);this.Nd=a&&a.tTa||void 0;this.Be=a&&a.rTa||!1;this.Ua=void 0;this.Ka=a&&a.m3||!1;this.C="";this.u=
new E8a(a&&a.gSa);this.Wg=new I8a;this.sb=a&&a.vSa||!1;this.ob=a&&a.nSa||!1;this.sb&&this.ob&&(this.ob=!1);this.Xe=a&&a.aSa||!1;a&&a.xSa&&(this.Jc=!1);this.Oc=!this.sb&&this.Jc&&a&&a.kSa||!1;this.Tc=void 0;this.hd=0;this.bb=!1;this.oa=null;this.lf=!a||!1!==a.mSa;this.Jb=null},A8=function(a){a.j&&(L8a(a),a.j.cancel(),a.j=null)},M8a=function(a){A8(a);
a.N&&(g.C.clearTimeout(a.N),a.N=null);z8(a);a.u.cancel();a.I&&("number"===typeof a.I&&g.C.clearTimeout(a.I),a.I=null)},C8=function(a){F8a(a.u)||a.I||(a.I=!0,g.oh(a.oL,a),a.ma=0)},O8a=function(a,b){if(y8a(a.u)>=a.u.C-(a.I?1:0))return!1;
if(a.I)return a.B=b.Y.concat(a.B),!0;if(1==a.Yf||2==a.Yf||a.ma>=(a.Je?0:a.Ke))return!1;a.I=s8((0,g.Oa)(a.oL,a,b),N8a(a,a.ma));a.ma++;return!0},Q8a=function(a,b){var c;
b?c=b.Jc:c=a.Sa++;var d=a.Ha.clone();g.xj(d,"SID",a.C);g.xj(d,"RID",c);g.xj(d,"AID",a.Oa);F8(a,d);a.J&&a.V&&g.Bj(d,a.J,a.V);c=new t8(a,a.C,c,a.ma+1);null===a.J&&(c.Ha=a.V);b&&(a.B=b.Y.concat(a.B));b=P8a(a,c,1E3);c.setTimeout(Math.round(.5*a.qd)+Math.round(.5*a.qd*Math.random()));z8a(a.u,c);n8a(c,d,b)},F8=function(a,b){a.Da&&g.Ze(a.Da,function(c,d){g.xj(b,d,c)});
a.D&&g.oj({},function(c,d){g.xj(b,d,c)})},P8a=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Oa)(a.D.bU,a.D,a):null;a:for(var e=a.B,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].j,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{J8a(p,h,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=h.join("&");break a}}a=a.B.splice(0,c);b.Y=a;return d},C8a=function(a){a.j||a.N||(a.jc=1,g.oh(a.nL,a),a.Y=0)},x8a=function(a){if(a.j||a.N||3<=a.Y)return!1;
a.jc++;a.N=s8((0,g.Oa)(a.nL,a),N8a(a,a.Y));a.Y++;return!0},L8a=function(a){null!=a.oa&&(g.C.clearTimeout(a.oa),a.oa=null)},R8a=function(a){a.j=new t8(a,a.C,"rpc",a.jc);
null===a.J&&(a.j.Ha=a.V);a.j.ob=0;var b=a.od.clone();g.xj(b,"RID","rpc");g.xj(b,"SID",a.C);g.xj(b,"CI",a.eb?"0":"1");g.xj(b,"AID",a.Oa);g.xj(b,"TYPE","xmlhttp");F8(a,b);a.J&&a.V&&g.Bj(b,a.J,a.V);a.Ua&&a.j.setTimeout(a.Ua);var c=a.j;a=a.qc;c.Ka=1;c.J=Z7(b.clone());c.N=null;c.va=!0;m8a(c,a)},z8=function(a){null!=a.W&&(g.C.clearTimeout(a.W),a.W=null)},v8a=function(a,b){var c=null;
if(a.j==b){z8(a);L8a(a);a.j=null;var d=2}else if(w8a(a.u,b))c=b.Y,B8a(a.u,b),d=1;else return;if(0!=a.Yf)if(a.Fd=b.Jb,b.B)if(1==d){c=b.N?b.N.length:0;b=Date.now()-b.ma;var e=a.ma;d=g8a();d.dispatchEvent(new j8a(d,c,b,e));C8(a)}else C8a(a);else if(e=b.getLastError(),3==e||0==e&&0<a.Fd||!(1==d&&O8a(a,b)||2==d&&x8a(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:B8(a,5);break;case 4:B8(a,10);break;case 3:B8(a,6);break;default:B8(a,2)}},N8a=function(a,b){var c=a.Ie+Math.floor(Math.random()*
a.We);
a.isActive()||(c*=2);return c*b},B8=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Oa)(a.w3,a);c||(c=new g.pj("//web.archive.org/web/20220701001156/https://www.google.com/images/cleardot.gif"),g.C.location&&"http"==g.C.location.protocol||g.qj(c,"https"),Z7(c));H8a(c.toString(),d)}else r8(2);a.Yf=0;a.D&&a.D.qL(b);S8a(a);M8a(a)},S8a=function(a){a.Yf=0;
a.Jb=[];if(a.D){var b=G8a(a.u);if(0!=b.length||0!=a.B.length)g.Zb(a.Jb,b),g.Zb(a.Jb,a.B),a.u.B.length=0,g.Yb(a.B),a.B.length=0;a.D.pL()}},T8a=function(a){if(0==a.Yf)return a.Jb;
var b=[];g.Zb(b,G8a(a.u));g.Zb(b,a.B);return b},A8a=function(a,b,c){var d=g.yj(c);
""!=d.j?(b&&g.rj(d,b+"."+d.j),g.sj(d,d.B)):(d=g.C.location,d=h7a(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.va;c=a.Ae;b&&c&&g.xj(d,b,c);g.xj(d,"VER",a.mL);F8(a,d);return d},o8a=function(a,b,c){if(b&&!a.Ka)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.Be&&!a.Nd?new g.hi(new g.kj({WR:!0})):new g.hi(a.Nd);b.J=a.Ka;return b},U8a=function(){},V8a=function(){if(g.sc&&!g.pc(10))throw Error("Environmental error: no available transport.");
},H8=function(a,b){g.Df.call(this);
this.j=new K8a(b);this.I=a;this.u=b&&b.aZ||null;a=b&&b.ZY||null;b&&b.fSa&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.V=a;a=b&&b.ASa||null;b&&b.GP&&(a?a["X-WebChannel-Content-Type"]=b.GP:a={"X-WebChannel-Content-Type":b.GP});b&&b.zN&&(a?a["X-WebChannel-Client-Profile"]=b.zN:a={"X-WebChannel-Client-Profile":b.zN});this.j.Ib=a;(a=b&&b.ySa)&&!g.db(a)&&(this.j.J=a);this.J=b&&b.m3||!1;this.D=b&&b.dTa||!1;(b=b&&b.mY)&&!g.db(b)&&(this.j.va=b,g.ff(this.u,b)&&g.kf(this.u,
b));this.C=new G8(this)},W8a=function(a){$7a.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.cf(b))?g.lf(b,this.metadataKey):b:this.data=a},X8a=function(a){a8a.call(this);
this.status=1;this.errorCode=a},G8=function(a){this.j=a},Y8a=function(a,b){this.u=a;
this.j=b},Z8a=function(a){return T8a(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?g7a(b):b);return b})},I8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},K8=function(a){J8.dispatchEvent(new $8a(J8,a))},$8a=function(a,b){g.Ne.call(this,"statevent",a);
this.stat=b},L8=function(a,b,c,d){this.j=a;
this.C=b;this.J=c;this.I=d||1;this.u=45E3;this.B=new g.Cj(this);this.D=new g.xh;this.D.setInterval(250)},b9a=function(a,b,c){a.Mt=1;
a.Go=Z7(b.clone());a.Bq=c;a.va=!0;a9a(a,null)},c9a=function(a,b,c,d,e){a.Mt=1;
a.Go=Z7(b.clone());a.Bq=null;a.va=c;e&&(a.IR=!1);a9a(a,d)},a9a=function(a,b){a.Lt=Date.now();
M8(a);a.Io=a.Go.clone();$7(a.Io,"t",a.I);a.AA=0;a.ph=a.j.JE(a.j.Hw()?b:null);0<a.HE&&(a.yA=new o8((0,g.Oa)(a.tL,a,a.ph),a.HE));a.B.Ma(a.ph,"readystatechange",a.dU);b=a.Aq?g.nf(a.Aq):{};a.Bq?(a.zA="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.ph.send(a.Io,a.zA,a.Bq,b)):(a.zA="GET",a.IR&&!g.Pe&&(b.Connection="close"),a.ph.send(a.Io,a.zA,null,b));a.j.Tk(1)},f9a=function(a,b){var c=a.AA,d=b.indexOf("\n",c);
if(-1==d)return d9a;c=Number(b.substring(c,d));if(isNaN(c))return e9a;d+=1;if(d+c>b.length)return d9a;b=b.slice(d,d+c);a.AA=d+c;return b},h9a=function(a,b){a.Lt=Date.now();
M8(a);var c=b?window.location.hostname:"";a.Io=a.Go.clone();g.xj(a.Io,"DOMAIN",c);g.xj(a.Io,"t",a.I);try{a.il=new ActiveXObject("htmlfile")}catch(m){N8(a);a.Ho=7;K8(22);O8(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in P8)f=P8[f];else if(f in g9a)f=P8[f]=g9a[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
P8[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.kg(g.Of("b/12014412"),d);a.il.open();a.il.write(g.hg(c));a.il.close();a.il.parentWindow.m=(0,g.Oa)(a.s1,a);a.il.parentWindow.d=(0,g.Oa)(a.KQ,a,!0);a.il.parentWindow.rpcClose=(0,g.Oa)(a.KQ,a,!1);c=a.il.createElement("DIV");a.il.parentWindow.document.body.appendChild(c);d=g.$f(a.Io.toString());d=g.Bg(g.Yf(d));d=g.kg(g.Of("b/12014412"),'<iframe src="'+d+'"></iframe>');g.jda(c,d);a.j.Tk(1)},M8=function(a){a.IE=
Date.now()+a.u;
i9a(a,a.u)},i9a=function(a,b){if(null!=a.Nt)throw Error("WatchDog timer not null");
a.Nt=I8((0,g.Oa)(a.cU,a),b)},j9a=function(a){a.Nt&&(g.C.clearTimeout(a.Nt),a.Nt=null)},O8=function(a){a.j.Jf()||a.zq||a.j.BA(a)},N8=function(a){j9a(a);
g.Ke(a.yA);a.yA=null;a.D.stop();g.Dj(a.B);if(a.ph){var b=a.ph;a.ph=null;b.abort();b.dispose()}a.il&&(a.il=null)},k9a=function(a,b){try{a.j.uL(a,b),a.j.Tk(4)}catch(c){}},m9a=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;l9a(a,b,function(h){h?c(!0):g.C.setTimeout(function(){m9a(a,b,c,d,f)},f)})}},l9a=function(a,b,c){var d=new Image;
d.onload=function(){try{Q8(d),c(!0)}catch(e){}};
d.onerror=function(){try{Q8(d),c(!1)}catch(e){}};
d.onabort=function(){try{Q8(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Q8(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
S6a(d,a)},Q8=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},n9a=function(a){this.j=a;
this.u=new p8},o9a=function(a){var b=R8(a.j,a.vx,"/mail/images/cleardot.gif");
Z7(b);m9a(b.toString(),5E3,(0,g.Oa)(a.xW,a),3,2E3);a.Tk(1)},p9a=function(a){var b=a.j.V;
if(null!=b)K8(5),b?(K8(11),S8(a.j,a,!1)):(K8(12),S8(a.j,a,!0));else if(a.Rh=new L8(a),a.Rh.Aq=a.KE,b=a.j,b=R8(b,b.Hw()?a.Gw:null,a.LE),K8(5),!g.sc||g.pc(10))$7(b,"TYPE","xmlhttp"),c9a(a.Rh,b,!1,a.Gw,!1);else{$7(b,"TYPE","html");var c=a.Rh;a=!!a.Gw;c.Mt=3;c.Go=Z7(b.clone());h9a(c,a)}},q9a=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new p8;this.N=a||null;this.V=null!=b?b:null;this.J=c||!1},r9a=function(a,b){this.j=a;
this.map=b;this.context=null},s9a=function(a,b,c,d){g.Ne.call(this,"timingevent",a);
this.size=b;this.Pv=d},t9a=function(a){g.Ne.call(this,"serverreachability",a)},v9a=function(a){a.eU(1,0);
a.CA=R8(a,null,a.ME);u9a(a)},w9a=function(a){a.Xo&&(a.Xo.abort(),a.Xo=null);
a.xf&&(a.xf.cancel(),a.xf=null);a.Wm&&(g.C.clearTimeout(a.Wm),a.Wm=null);T8(a);a.ji&&(a.ji.cancel(),a.ji=null);a.Jo&&(g.C.clearTimeout(a.Jo),a.Jo=null)},x9a=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new r9a(a.fU++,b));2!=a.j&&3!=a.j||u9a(a)},y9a=function(a){var b=0;
a.xf&&b++;a.ji&&b++;return b},u9a=function(a){a.ji||a.Jo||(a.Jo=I8((0,g.Oa)(a.yL,a),0),a.Pt=0)},B9a=function(a,b){if(1==a.j){if(!b){a.Jw=Math.floor(1E5*Math.random());
b=a.Jw++;var c=new L8(a,"",b);c.Aq=a.Fl;var d=z9a(a),e=a.CA.clone();g.xj(e,"RID",b);g.xj(e,"CVER","1");U8(a,e);b9a(c,e,d);a.ji=c;a.j=2}}else 3==a.j&&(b?A9a(a,b):0==a.u.length||a.ji||A9a(a))},A9a=function(a,b){if(b)if(6<a.Cq){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.Jw-1;b=z9a(a)}else c=b.J,b=b.Bq;else c=a.Jw++,b=z9a(a);var d=a.CA.clone();g.xj(d,"SID",a.C);g.xj(d,"RID",c);g.xj(d,"AID",a.Qt);U8(a,d);c=new L8(a,a.C,c,a.Pt+1);c.Aq=a.Fl;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ji=c;b9a(c,d,b)},U8=function(a,b){a.Vg&&(a=a.Vg.CL())&&g.Ze(a,function(c,d){g.xj(b,d,c)})},z9a=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Cq&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={xt:e.xt},f++){e.xt=a.u[f].j;var h=a.u[f].map;e.xt=6>=a.Cq?f:e.xt-d;try{g.Ze(h,function(l){return function(m,n){c.push("req"+l.xt+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.xt+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},C9a=function(a){a.xf||a.Wm||(a.I=1,a.Wm=I8((0,g.Oa)(a.xL,a),0),a.Ot=0)},E9a=function(a){if(a.xf||a.Wm||3<=a.Ot)return!1;
a.I++;a.Wm=I8((0,g.Oa)(a.xL,a),D9a(a,a.Ot));a.Ot++;return!0},S8=function(a,b,c){a.eE=c;
a.Gl=b.Vm;a.J||v9a(a)},T8=function(a){null!=a.Dq&&(g.C.clearTimeout(a.Dq),a.Dq=null)},D9a=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},V8=function(a,b){if(2==b||9==b){var c=null;
a.Vg&&(c=null);var d=(0,g.Oa)(a.v3,a);c||(c=new g.pj("//web.archive.org/web/20220701001156/https://www.google.com/images/cleardot.gif"),Z7(c));l9a(c.toString(),1E4,d)}else K8(2);F9a(a,b)},F9a=function(a,b){a.j=0;
a.Vg&&a.Vg.zL(b);G9a(a);w9a(a)},G9a=function(a){a.j=0;
a.Gl=-1;if(a.Vg)if(0==a.B.length&&0==a.u.length)a.Vg.NE();else{var b=g.Yb(a.B),c=g.Yb(a.u);a.B.length=0;a.u.length=0;a.Vg.NE(b,c)}},R8=function(a,b,c){var d=g.yj(c);
if(""!=d.j)b&&g.rj(d,b+"."+d.j),g.sj(d,d.B);else{var e=window.location;d=h7a(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Iw&&g.Ze(a.Iw,function(f,h){g.xj(d,h,f)});
g.xj(d,"VER",a.Cq);U8(a,d);return d},H9a=function(){},I9a=function(){this.j=[];
this.u=[]},J9a=function(){},m8=function(){if(!W8){W8=new g.Ah(new J9a);
var a=g.Rs("client_streamz_web_flush_count",-1);-1!==a&&(W8.C=a)}return W8},K9a=function(a){g.Ne.call(this,"channelMessage");
this.message=a},L9a=function(a){g.Ne.call(this,"channelError");
this.error=a},M9a=function(a,b){this.action=a;
this.params=b||{}},X8=function(a,b){g.J.call(this);
this.j=new g.Vn(this.g1,0,this);g.M(this,this.j);this.eh=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Oa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Oa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},N9a=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ma=a;this.J=b;this.B=new g.yo;this.u=new X8(this.C2,this);this.j=null;this.W=!1;this.I=null;this.V="";this.N=this.D=0;this.C=[];this.Ka=c;this.Y=d;this.Oa=e;this.Ha=new P7a;this.oa=new R7a;this.Da=new T7a;this.va=new V7a;this.Sa=new X7a;this.Ua=new Y7a},O9a=function(a){if(a.j){var b=a.Y(),c=a.j.Fl||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Fl=c}},Y8=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.Xh(4,a))||"";b&&(this.port=":"+b);this.domain=g.Yh(a)||"";a=g.nb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.lb(a,"10.0")&&(this.u=!1))},Z8=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.di(c+b,{})},P9a=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Pa(a.C,d,!0),onError:g.Pa(a.B,e),onTimeout:g.Pa(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.qt(b,a)},Q9a=function(a,b){g.Df.call(this);
var c=this;this.Pc=a();this.Pc.subscribe("handlerOpened",this.jU,this);this.Pc.subscribe("handlerClosed",this.hU,this);this.Pc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Pc.subscribe("handlerMessage",this.iU,this);this.j=b},R9a=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new V8a:e;var f=void 0===f?new g.yo:f;this.pathPrefix=a;this.j=b;this.oa=c;this.D=f;this.N=null;this.V=this.J=0;this.channel=null;this.I=0;this.B=new X8(function(){d.B.isActive();var h;0===(null==(h=d.channel)?void 0:y8a((new Y8a(h,h.j)).j.u))&&d.connect(d.N,d.J)});
this.C={};this.u={};this.W=!1;this.logger=null;this.ma=[];this.Y=void 0;this.Ka=new P7a;this.va=new R7a;this.Ha=new T7a;this.Da=new V7a},S9a=function(a){g.uf(a.channel,"m",function(){a.I=3;
a.B.reset();a.N=null;a.J=0;for(var b=g.r(a.ma),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.ma=[];a.X("webChannelOpened");Q7a(a.Ka,"WEB_CHANNEL")});
g.uf(a.channel,"n",function(){a.I=0;a.B.isActive()||a.X("webChannelClosed");var b,c=null==(b=a.channel)?void 0:Z8a(new Y8a(b,b.j));c&&(a.ma=[].concat(g.u(c)));S7a(a.va,"WEB_CHANNEL")});
g.uf(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.X("webChannelMessage",new M9a(c[0],c[1]));a.Y=b.statusCode;U7a(a.Ha,"WEB_CHANNEL")});
g.uf(a.channel,"o",function(){401===a.Y||a.B.start();a.X("webChannelError");W7a(a.Da,"WEB_CHANNEL")})},T9a=function(a){var b=a.oa();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},U9a=function(a){g.Df.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.mU,this);this.j.subscribe("webChannelClosed",this.kU,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.lU,this)},V9a=function(a,b,c,d,e){function f(){return new N9a(Z8(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.T("enable_mdx_web_channel_desktop")?new U9a(function(){return new R9a(Z8(a,"/wc"),b,c)}):new Q9a(f,e)},Z9a=function(){var a=W9a;
X9a();$8.push(a);Y9a()},a9=function(a,b){X9a();
var c=$9a(a,String(b));g.Qb($8)?a$a(c):(Y9a(),g.hc($8,function(d){d(c)}))},b9=function(a){a9("CP",a)},X9a=function(){$8||($8=g.Ga("yt.mdx.remote.debug.handlers_")||[],g.Fa("yt.mdx.remote.debug.handlers_",$8))},a$a=function(a){var b=(c9+1)%50;
c9=b;d9[b]=a;e9||(e9=49==b)},Y9a=function(){var a=$8;
if(d9[0]){var b=e9?c9:-1;do{b=(b+1)%50;var c=d9[b];g.hc(a,function(d){d(c)})}while(b!=c9);
d9=Array(50);c9=-1;e9=!1}},$9a=function(a,b){var c=(Date.now()-b$a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},f9=function(a){g.Ix.call(this);
this.I=a;this.screens=[]},c$a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},d$a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.qm(a.screens,function(f){return!!r7a(b,f)});
for(var d=0,e=b.length;d<e;d++)c=c$a(a,b[d])||c;return c},e$a=function(a,b){var c=a.screens.length;
a.screens=g.qm(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},f$a=function(a,b,c,d,e){g.Ix.call(this);
this.B=a;this.J=b;this.C=c;this.I=d;this.D=e;this.u=0;this.j=null;this.pc=NaN},h9=function(a){f9.call(this,"LocalScreenService");
this.u=a;this.j=NaN;g9(this);this.info("Initializing with "+o7a(this.screens))},g$a=function(a){if(a.screens.length){var b=g.Gk(a.screens,function(d){return d.id}),c=Z8(a.u,"/pairing/get_lounge_token_batch");
P9a(a.u,c,{screen_ids:b.join(",")},(0,g.Oa)(a.MX,a),(0,g.Oa)(a.LX,a))}},g9=function(a){if(g.T("deprecate_pair_servlet_enabled"))return d$a(a,[]);
var b=n7a(y7a());b=g.qm(b,function(c){return!c.uuid});
return d$a(a,b)},i9=function(a,b){A7a(g.Gk(a.screens,l7a));
b&&z7a()},i$a=function(a,b){g.Ix.call(this);
this.I=b;b=(b=g.wy("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.Nb(b,h)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;h$a("Initialized with "+g.Rh(this.j))},j$a=function(a,b,c){var d=Z8(a.D,"/pairing/get_screen_availability");
P9a(a.D,d,{lounge_token:b.token},(0,g.Oa)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Oa)(function(){c(!1)},a))},l$a=function(a,b){a:if(e7a(b)!=e7a(a.j))var c=!1;
else{c=g.ef(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(h$a("Updated online screens: "+g.Rh(a.j)),a.j=b,a.X("screenChange"));k$a(a)},j9=function(a){isNaN(a.B)||g.nt(a.B);
a.B=g.lt((0,g.Oa)(a.xJ,a),0<a.C&&a.C<g.Qa()?2E4:1E4)},h$a=function(a){a9("OnlineScreenService",a)},m$a=function(a){var b={};
g.hc(a.I(),function(c){c.token?b[c.token]=c.id:this.Ve("Requesting availability of screen w/o lounge token.")});
return b},k$a=function(a){a=g.ef(g.$e(a.j,function(b){return b}));
g.ec(a);a.length?g.vy("yt-remote-online-screen-ids",a.join(","),60):g.yy("yt-remote-online-screen-ids")},k9=function(a,b){b=void 0===b?!1:b;
f9.call(this,"ScreenService");this.C=a;this.J=b;this.j=this.u=null;this.B=[];this.D={};n$a(this)},p$a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Xi(),l=c?g8(h,c):null;c&&(a.J||l)||(l=g8(h,b));if(l){l.uuid=b;var m=l9(a,l);j$a(a.j,m,function(n){e(n?m:null)})}else c?o$a(a,c,(0,g.Oa)(function(n){var p=l9(this,new d8({name:d,
screenId:c,loungeToken:n,dialId:b||""}));j$a(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},q$a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},r$a=function(a,b,c){j$a(a.j,b,c)},o$a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.qt(Z8(a.C,"/pairing/get_lounge_token_batch"),e)},s$a=function(a){a.screens=a.u.Xi();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+o7a(a.screens))},n$a=function(a){t$a(a);
a.u=new h9(a.C);a.u.subscribe("screenChange",(0,g.Oa)(a.WX,a));s$a(a);a.J||(a.B=n7a(g.wy("yt-remote-automatic-screen-cache")||[]));t$a(a);a.info("Initializing automatic screens: "+o7a(a.B));a.j=new i$a(a.C,(0,g.Oa)(a.Xi,a,!0));a.j.subscribe("screenChange",(0,g.Oa)(function(){this.X("onlineScreenChange")},a))},l9=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=g8(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.J||u$a(a));t$a(a);a.D[b.uuid]=b.id;g.vy("yt-remote-device-id-map",a.D,31536E3);return b},u$a=function(a){a=g.qm(a.B,function(b){return"shortLived"!=b.idType});
g.vy("yt-remote-automatic-screen-cache",g.Gk(a,l7a))},t$a=function(a){a.D=g.wy("yt-remote-device-id-map")||{}},m9=function(a,b,c){g.Ix.call(this);
this.va=c;this.B=a;this.j=b;this.C=null},n9=function(a,b){a.C=b;
a.X("sessionScreen",a.C)},v$a=function(a,b){a.C&&(a.C.token=b,l9(a.B,a.C));
a.X("sessionScreen",a.C)},o9=function(a,b){a9(a.va,b)},p9=function(a,b,c){m9.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.Y=(0,g.Oa)(this.rU,this);this.oa=(0,g.Oa)(this.E1,this);this.W=g.lt(function(){w$a(d,null)},12E4);
this.J=this.D=this.I=this.N=0;this.ma=!1;this.V="unknown"},y$a=function(a,b){g.nt(a.J);
a.J=0;0==b?x$a(a):a.J=g.lt(function(){x$a(a)},b)},x$a=function(a){z$a(a,"getLoungeToken");
g.nt(a.D);a.D=g.lt(function(){A$a(a,null)},3E4)},z$a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Rh());
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Oa)(function(){o9(this,"Failed to send message: "+b+".")},a)):o9(a,"Sending yt message without session: "+g.Rh(c))},B$a=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.tO(b,function(c){n9(a,c)},function(){return a.Hh()},5)):a.Hh(Error("Waiting for session status timed out."))},D$a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new d8(b);C$a(a,d,function(e){e?(a.ma=!0,l9(a.B,d),n9(a,d),a.V="unknown",y$a(a,c)):(g.Vs(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Hh())},5)},w$a=function(a,b){g.nt(a.W);
a.W=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?D$a(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.Vs(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),B$a(a,b.screenId))):(g.Vs(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),B$a(a,b.screenId)):B$a(a,b.screenId):a.Hh(Error("Waiting for session status timed out."))},A$a=function(a,b){g.nt(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.V=c,y$a(a,3E4)):(v$a(a,b.loungeToken),a.ma=!1,a.V="unknown",y$a(a,b.loungeTokenRefreshIntervalMs))},C$a=function(a,b,c,d){g.nt(a.I);
a.I=0;r$a(a.B,b,function(e){e||0>d?c(e):a.I=g.lt(function(){C$a(a,b,c,d-1)},300)})},E$a=function(a){g.nt(a.N);
a.N=0;g.nt(a.I);a.I=0;g.nt(a.W);a.W=0;g.nt(a.D);a.D=0;g.nt(a.J);a.J=0},q9=function(a,b,c,d){m9.call(this,a,b,"DialSession");
this.config_=d;this.u=this.N=null;this.oa="";this.Ka=c;this.Ha=null;this.W=function(){};
this.V=NaN;this.Da=(0,g.Oa)(this.sU,this);this.D=function(){};
this.J=this.I=0;this.Y=!1;this.ma="unknown"},r9=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},F$a=function(a){a.D=a.B.EL(a.oa,a.j.label,a.j.friendlyName,r9(a),function(b,c){a.D=function(){};
a.Y=!0;n9(a,b);"shortLived"==b.idType&&0<c&&s9(a,c)},function(b){a.D=function(){};
a.Hh(b)})},G$a=function(a){var b={};
b.pairingCode=a.oa;b.theme=a.Ka;C7a()&&(b.env_useStageMdx=1);return g.bi(b)},H$a=function(a){return new Promise(function(b){a.oa=p7a();
if(a.Ha){var c=new chrome.cast.DialLaunchResponse(!0,G$a(a));b(c);F$a(a)}else a.W=function(){g.nt(a.V);a.W=function(){};
a.V=NaN;var d=new chrome.cast.DialLaunchResponse(!0,G$a(a));b(d);F$a(a)},a.V=g.lt(function(){a.W()},100)})},J$a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new d8(b);return(new Promise(function(e){I$a(a,d,function(f){f?(a.Y=!0,l9(a.B,d),n9(a,d),s9(a,c)):g.Vs(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):H$a(a)})},K$a=function(a,b){var c=a.N.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){p$a(a.B,c,b,d,function(f){f&&f.token&&n9(a,f);e(f)},function(f){o9(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):H$a(a)})},I$a=function(a,b,c,d){g.nt(a.I);
a.I=0;r$a(a.B,b,function(e){e||0>d?c(e):a.I=g.lt(function(){I$a(a,b,c,d-1)},300)})},s9=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
r9(a)&&(g.nt(a.J),a.J=0,0==b?L$a(a):a.J=g.lt(function(){L$a(a)},b))},L$a=function(a){r9(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ma=c,s9(a,3E4)):(a.Y=!1,a.ma="unknown",v$a(a,b.loungeToken),s9(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ma="noLoungeTokenResponse";s9(a,3E4)})},M$a=function(a){g.nt(a.I);
a.I=0;g.nt(a.J);a.J=0;a.D();a.D=function(){};
g.nt(a.V)},t9=function(a,b){m9.call(this,a,b,"ManualSession");
this.u=g.lt((0,g.Oa)(this.tv,this,null),150)},u9=function(a,b){g.Ix.call(this);
this.config_=b;this.u=a;this.N=b.appId||"233637DE";this.C=b.theme||"cl";this.V=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.j=null;this.J=!1;this.B=[];this.D=(0,g.Oa)(this.s0,this)},N$a=function(a,b){return b?g.Lb(a.B,function(c){return e8(b,c.label)},a):null},v9=function(a){a9("Controller",a)},W9a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},w9=function(a){return a.J||!!a.B.length||!!a.j},x9=function(a,b,c){b!=a.j&&(g.Ke(a.j),(a.j=b)?(c?a.X("yt-remote-cast2-receiver-resumed",
b.j):a.X("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Oa)(a.IQ,a,b)),b.subscribe("sessionFailed",function(){return O$a(a,b)}),b.getScreen()?a.X("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.tv(null)):a.X("yt-remote-cast2-session-change",null))},O$a=function(a,b){a.j==b&&a.X("yt-remote-cast2-session-failed")},P$a=function(a){var b=a.u.DL(),c=a.j&&a.j.j;
a=g.Gk(b,function(d){c&&e8(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=N$a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},W$a=function(a,b,c,d){d.disableCastApi?y9("Cannot initialize because disabled by Mdx config."):Q$a()?R$a(b,d)&&(S$a(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?T$a(a,c):(window.__onGCastApiAvailable=function(e,f){e?T$a(a,c):(z9("Failed to load cast API: "+f),U$a(!1),S$a(!1),g.yy("yt-remote-cast-available"),g.yy("yt-remote-cast-receiver"),
V$a(),c(!1))},d.loadCastApiSetupScript?g.Ay("https://web.archive.org/web/20220701001156/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=D7a()&&M7a():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?H7a():89<=D7a()?O7a():(L7a(),l8(N7a.map(I7a))))):y9("Cannot initialize because not running Chrome")},V$a=function(){y9("dispose");
var a=A9();a&&a.dispose();g.Fa("yt.mdx.remote.cloudview.instance_",null);X$a(!1);g.Dw(Y$a);Y$a.length=0},B9=function(){return!!g.wy("yt-remote-cast-installed")},Z$a=function(){var a=g.wy("yt-remote-cast-receiver");
return a?a.friendlyName:null},$$a=function(){y9("clearCurrentReceiver");
g.yy("yt-remote-cast-receiver")},aab=function(){return B9()?A9()?A9().getCastSession():(z9("getCastSelector: Cast is not initialized."),null):(z9("getCastSelector: Cast API is not installed!"),null)},bab=function(){B9()?A9()?C9()?(y9("Requesting cast selector."),A9().requestSession()):(y9("Wait for cast API to be ready to request the session."),Y$a.push(g.Cw("yt-remote-cast2-api-ready",bab))):z9("requestCastSelector: Cast is not initialized."):z9("requestCastSelector: Cast API is not installed!")},
D9=function(a,b){C9()?A9().setConnectedScreenStatus(a,b):z9("setConnectedScreenStatus called before ready.")},Q$a=function(){var a=0<=g.nb().search(/ (CrMo|Chrome|CriOS)\//);
return g.FC||a},cab=function(a,b){A9().init(a,b)},R$a=function(a,b){var c=!1;
A9()||(a=new u9(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.vy("yt-remote-cast-available",d);b8("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){y9("onReceiverSelected: "+d.friendlyName);
g.vy("yt-remote-cast-receiver",d);b8("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){y9("onReceiverResumed: "+d.friendlyName);
g.vy("yt-remote-cast-receiver",d);b8("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){y9("onSessionChange: "+f8(d));
d||g.yy("yt-remote-cast-receiver");b8("yt-remote-cast2-session-change",d)}),g.Fa("yt.mdx.remote.cloudview.instance_",a),c=!0);
y9("cloudview.createSingleton_: "+c);return c},A9=function(){return g.Ga("yt.mdx.remote.cloudview.instance_")},T$a=function(a,b){U$a(!0);
S$a(!1);cab(a,function(c){c?(X$a(!0),g.Ew("yt-remote-cast2-api-ready")):(z9("Failed to initialize cast API."),U$a(!1),g.yy("yt-remote-cast-available"),g.yy("yt-remote-cast-receiver"),V$a());b(c)})},y9=function(a){a9("cloudview",a)},z9=function(a){a9("cloudview",a)},U$a=function(a){y9("setCastInstalled_ "+a);
g.vy("yt-remote-cast-installed",a)},C9=function(){return!!g.Ga("yt.mdx.remote.cloudview.apiReady_")},X$a=function(a){y9("setApiReady_ "+a);
g.Fa("yt.mdx.remote.cloudview.apiReady_",a)},S$a=function(a){g.Fa("yt.mdx.remote.cloudview.initializing_",a)},E9=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.qm=!1;this.N=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},dab=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.qm=!1;a.hasNext=!1;a.J=0;a.I=g.Qa();a.C=0;a.j=0;a.D=0;a.N=0;a.B=NaN;a.u=!1},F9=function(a){return a.Lc()?(g.Qa()-a.I)/1E3:0},G9=function(a,b){a.J=b;
a.I=g.Qa()},H9=function(a){switch(a.playerState){case 1:case 1081:return(g.Qa()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},I9=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&dab(a)},eab=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.of(a.trackData);b.hasPrevious=a.qm;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.N;b.liveIngestionTime=a.B;return b},K9=function(a,b){g.Ix.call(this);
this.B=0;this.C=a;this.I=[];this.D=new I9a;this.u=this.j=null;this.V=(0,g.Oa)(this.a_,this);this.J=(0,g.Oa)(this.fz,this);this.N=(0,g.Oa)(this.ZZ,this);this.W=(0,g.Oa)(this.d_,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.RJ,this),fab(this))):c=3;0!=c&&(b?this.RJ(c):g.lt((0,g.Oa)(function(){this.RJ(c)},this),0));
(a=aab())&&J9(this,a);this.subscribe("yt-remote-cast2-session-change",this.W)},L9=function(a){return new E9(a.C.getPlayerContextData())},fab=function(a){g.hc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Pa(this.q0,b),this))},a)},gab=function(a){g.hc(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},M9=function(a){return 1==a.getState()},N9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.enqueue(b)},hab=function(a,b,c){var d=L9(a);
G9(d,c);-1E3!=d.playerState&&(d.playerState=b);O9(a,d)},P9=function(a,b,c){a.C.sendMessage(b,c)},O9=function(a,b){gab(a);
a.C.setPlayerContextData(eab(b));fab(a)},J9=function(a,b){a.u&&(a.u.removeUpdateListener(a.V),a.u.removeMediaListener(a.J),a.fz(null));
a.u=b;a.u&&(b9("Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.V),a.u.addMediaListener(a.J),a.u.media.length&&a.fz(a.u.media[0]))},iab=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=L9(a);b.contentId!=d.videoId&&b9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;G9(d,a.j.getEstimatedTime());O9(a,d)}else b9("No cast media video. Ignoring state update.")},Q9=function(a,b,c){return(0,g.Oa)(function(d){this.Ve("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Ve("Retrying "+b+" using MDx browser channel."),P9(this,b,c))},a)},T9=function(a,b,c,d){d=void 0===d?!1:d;
g.Ix.call(this);var e=this;this.I=NaN;this.oa=!1;this.V=this.N=this.Y=this.ma=NaN;this.W=[];this.D=this.J=this.C=this.j=this.u=null;this.Ha=a;this.Da=d;this.W.push(g.iw(window,"beforeunload",function(){e.Cu(2)}));
this.B=[];this.j=new E9;this.Ka=b.id;this.va=b.idType;this.u=V9a(this.Ha,c,this.IL,"shortLived"==this.va,this.Ka);this.u.Ma("channelOpened",function(){jab(e)});
this.u.Ma("channelClosed",function(){R9("Channel closed");isNaN(e.I)?j8(!0):j8();e.dispose()});
this.u.Ma("channelError",function(f){j8();isNaN(e.jy())?(1==f&&"shortLived"==e.va&&e.X("browserChannelAuthError",f),R9("Channel error: "+f+" without reconnection"),e.dispose()):(e.oa=!0,R9("Channel error: "+f+" with reconnection in "+e.jy()+" ms"),S9(e,2))});
this.u.Ma("channelMessage",function(f){kab(e,f)});
this.u.xo(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.zy()&&g.vy("yt-remote-session-video-id",f)})},lab=function(a){return g.Lb(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},R9=function(a){a9("conn",a)},S9=function(a,b){a.X("proxyStateChange",b)},mab=function(a){a.I=g.lt(function(){R9("Connecting timeout");
a.Cu(1)},2E4)},nab=function(a){g.nt(a.I);
a.I=NaN},oab=function(a){g.nt(a.ma);
a.ma=NaN},qab=function(a){pab(a);
a.Y=g.lt(function(){U9(a,"getNowPlaying")},2E4)},pab=function(a){g.nt(a.Y);
a.Y=NaN},jab=function(a){R9("Channel opened");
a.oa&&(a.oa=!1,oab(a),a.ma=g.lt(function(){R9("Timing out waiting for a screen.");a.Cu(1)},15E3))},sab=function(a,b){var c=null;
if(b){var d=lab(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Fa("yt.mdx.remote.remoteClient_",c);b&&(nab(a),oab(a));c=a.u.Yu()&&isNaN(a.I);b==c?b&&(S9(a,1),U9(a,"getSubtitlesTrack")):b?(a.sO()&&a.j.reset(),S9(a,1),U9(a,"getNowPlaying"),rab(a)):a.Cu(1)},tab=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.jf(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.X("remotePlayerChange"))},uab=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;I9(a.j,d,e);a.X("remoteQueueChange",c)},wab=function(a,b){b.params=b.params||{};
uab(a,b,"NOW_PLAYING_MAY_CHANGE");vab(a,b);a.X("autoplayDismissed")},vab=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
G9(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.N=isNaN(c)?0:c;a.j.Zk(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?qab(a):pab(a);a.X("remotePlayerChange")},xab=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);G9(a.j,isNaN(b)?0:b);a.X("remotePlayerChange")}},yab=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.X("remotePlayerChange")},zab=function(a,b){a.J=b.params.videoId;
a.X("nowAutoplaying",parseInt(b.params.timeout,10))},Aab=function(a,b){a.J=b.params.videoId||null;
a.X("autoplayUpNext",a.J)},Bab=function(a,b){a.D=b.params.autoplayMode;
a.X("autoplayModeChange",a.D);"DISABLED"==a.D&&a.X("autoplayDismissed")},Cab=function(a,b){var c="true"==b.params.hasNext;
a.j.qm="true"==b.params.hasPrevious;a.j.hasNext=c;a.X("previousNextChange")},kab=function(a,b){b=b.message;
b.params?R9("Received: action="+b.action+", params="+g.Rh(b.params)):R9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=a8(b.params.devices);a.B=g.Gk(b,function(d){return new c8(d)});
b=!!g.Lb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
sab(a,b);b=a.bP("mlm");a.X("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.Vb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
sab(a,!1);break;case "remoteConnected":var c=new c8(a8(b.params.device));g.Lb(a.B,function(d){return d.equals(c)})||d7a(a.B,c);
break;case "remoteDisconnected":c=new c8(a8(b.params.device));g.Vb(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":uab(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":wab(a,b);break;case "onStateChange":vab(a,b);break;case "onAdStateChange":xab(a,b);break;case "onVolumeChanged":yab(a,b);break;case "onSubtitlesTrackChanged":tab(a,b);break;case "nowAutoplaying":zab(a,b);break;case "autoplayDismissed":a.X("autoplayDismissed");break;case "autoplayUpNext":Aab(a,b);break;case "onAutoplayModeChanged":Bab(a,b);break;case "onHasPreviousNextChanged":Cab(a,b);break;
case "requestAssistedSignIn":a.X("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.X("loopModeChange",b.params.loopMode);break;default:R9("Unrecognized action: "+b.action)}},rab=function(a){g.nt(a.V);
a.V=g.lt(function(){a.Cu(1)},864E5)},U9=function(a,b,c){c?R9("Sending: action="+b+", params="+g.Rh(c)):R9("Sending: action="+b);
a.u.sendMessage(b,c)},Dab=function(a){f9.call(this,"ScreenServiceProxy");
this.Hf=a;this.j=[];this.j.push(this.Hf.$_s("screenChange",(0,g.Oa)(this.wU,this)));this.j.push(this.Hf.$_s("onlineScreenChange",(0,g.Oa)(this.U_,this)))},Iab=function(a,b){B7a();
if(!k8||!k8.get("yt-remote-disable-remote-module-for-dev")){b=g.Q("MDX_CONFIG")||b;s7a();w7a();V9||(V9=new Y8(b?b.loungeApiHost:void 0),C7a()&&(V9.j="/api/loungedev"));W9||(W9=g.Ga("yt.mdx.remote.deferredProxies_")||[],g.Fa("yt.mdx.remote.deferredProxies_",W9));Eab();var c=X9();if(!c){var d=new k9(V9,b?b.disableAutomaticScreenCache||!1:!1);g.Fa("yt.mdx.remote.screenService_",d);c=X9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Fa("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);W$a(a,d,function(f){f?Y9()&&D9(Y9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){b8("yt-remote-receiver-availability-change")})},e)}b&&!g.Ga("yt.mdx.remote.initialized_")&&(g.Fa("yt.mdx.remote.initialized_",!0),Z9("Initializing: "+g.Rh(b)),
$9.push(g.Cw("yt-remote-cast2-api-ready",function(){b8("yt-remote-api-ready")})),$9.push(g.Cw("yt-remote-cast2-availability-change",function(){b8("yt-remote-receiver-availability-change")})),$9.push(g.Cw("yt-remote-cast2-receiver-selected",function(){a$(null);
b8("yt-remote-auto-connect","cast-selector-receiver")})),$9.push(g.Cw("yt-remote-cast2-receiver-resumed",function(){b8("yt-remote-receiver-resumed","cast-selector-receiver")})),$9.push(g.Cw("yt-remote-cast2-session-change",Fab)),$9.push(g.Cw("yt-remote-connection-change",function(f){f?D9(Y9(),"YouTube TV"):b$()||(D9(null,null),$$a())})),$9.push(g.Cw("yt-remote-cast2-session-failed",function(){b8("yt-remote-connection-failed")})),a=Gab(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.T("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),Z9(" -- with channel params: "+g.Rh(a)),a?(g.vy("yt-remote-session-app",a.app),g.vy("yt-remote-session-name",a.name)):(g.yy("yt-remote-session-app"),g.yy("yt-remote-session-name")),g.Fa("yt.mdx.remote.channelParams_",a),c.start(),Y9()||Hab())}},Jab=function(){var a=X9().Hf.$_gos();
var b=c$();b&&d$()&&(r7a(a,b)||a.push(b));return q7a(a)},Lab=function(){var a=Kab();
!a&&B9()&&Z$a()&&(a={key:"cast-selector-receiver",name:Z$a()});return a},Kab=function(){var a=Jab(),b=c$();
b||(b=b$());return g.Lb(a,function(c){return b&&e8(b,c.key)?!0:!1})},c$=function(){var a=Y9();
if(!a)return null;var b=X9().Xi();return g8(b,a)},Fab=function(a){Z9("remote.onCastSessionChange_: "+f8(a));
if(a){var b=c$();if(b&&b.id==a.id){if(D9(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))e$&&(e$.token=a),(b=d$())&&b.xo(a)}else b&&f$(),g$(a,1)}else d$()&&f$()},f$=function(){C9()?A9().stopSession():z9("stopSession called before API ready.");
var a=d$();a&&(a.disconnect(1),Mab(null))},Nab=function(){var a=d$();
return!!a&&3!=a.getProxyState()},Z9=function(a){a9("remote",a)},X9=function(){if(!Oab){var a=g.Ga("yt.mdx.remote.screenService_");
Oab=a?new Dab(a):null}return Oab},Y9=function(){return g.Ga("yt.mdx.remote.currentScreenId_")},Pab=function(a){g.Fa("yt.mdx.remote.currentScreenId_",a)},Qab=function(){return g.Ga("yt.mdx.remote.connectData_")},a$=function(a){g.Fa("yt.mdx.remote.connectData_",a)},d$=function(){return g.Ga("yt.mdx.remote.connection_")},Mab=function(a){var b=d$();
a$(null);a||Pab("");g.Fa("yt.mdx.remote.connection_",a);W9&&(g.hc(W9,function(c){c(a)}),W9.length=0);
b&&!a?b8("yt-remote-connection-change",!1):!b&&a&&b8("yt-remote-connection-change",!0)},b$=function(){var a=g.zy();
if(!a)return null;var b=X9();if(!b)return null;b=b.Xi();return g8(b,a)},g$=function(a,b){Y9();
c$()&&c$();if(h$)e$=a;else{Pab(a.id);var c=g.Ga("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new T9(V9,a,Gab(),c);a.connect(b,Qab());a.subscribe("beforeDisconnect",function(d){b8("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){d$()&&(d$(),Mab(null))});
a.subscribe("browserChannelAuthError",function(){var d=c$();d&&"shortLived"==d.idType&&(C9()?A9().handleBrowserChannelAuthError():z9("refreshLoungeToken called before API ready."))});
Mab(a)}},Hab=function(){var a=b$();
a?(Z9("Resume connection to: "+f8(a)),g$(a,0)):(j8(),$$a(),Z9("Skipping connecting because no session screen found."))},Eab=function(){var a=Gab();
if(g.jf(a)){a=i8();var b=g.wy("yt-remote-session-name")||"",c=g.wy("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Fa("yt.mdx.remote.channelParams_",a)}},Gab=function(){return g.Ga("yt.mdx.remote.channelParams_")||{}},Sab=function(a,b,c){g.J.call(this);
var d=this;this.u=a;this.G=b;this.Zb=c;this.events=new g.yC(this);this.W=this.events.P(this.G,"onVolumeChange",function(e){Rab(d,e)});
this.D=!1;this.I=new g.xI(64);this.j=new g.Vn(this.TR,500,this);this.B=new g.Vn(this.UR,1E3,this);this.N=new n8(this.a4,0,this);this.C={};this.V=new g.Vn(this.ES,1E3,this);this.J=new o8(this.seekTo,1E3,this);g.M(this,this.events);this.events.P(b,"onCaptionsTrackListChanged",this.F_);this.events.P(b,"captionschanged",this.XZ);this.events.P(b,"captionssettingschanged",this.bS);this.events.P(b,"videoplayerreset",this.YC);this.events.P(b,"mdxautoplaycancel",function(){d.Zb.NN()});
a=this.Zb;a.isDisposed();a.subscribe("proxyStateChange",this.FQ,this);a.subscribe("remotePlayerChange",this.lz,this);a.subscribe("remoteQueueChange",this.YC,this);a.subscribe("previousNextChange",this.CQ,this);a.subscribe("nowAutoplaying",this.wQ,this);a.subscribe("autoplayDismissed",this.aQ,this);g.M(this,this.j);g.M(this,this.B);g.M(this,this.N);g.M(this,this.V);g.M(this,this.J);this.bS();this.YC();this.lz()},Rab=function(a,b){if(i$(a)){a.Zb.unsubscribe("remotePlayerChange",a.lz,a);
var c=Math.round(b.volume);b=!!b.muted;var d=L9(a.Zb);if(c!==d.volume||b!==d.muted)a.Zb.setVolume(c,b),a.V.start();a.Zb.subscribe("remotePlayerChange",a.lz,a)}},Uab=function(a){a.Vb(0);
a.j.stop();a.Tb(new g.xI(64))},Vab=function(a,b){if(i$(a)&&!a.D){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.pf(c,b));a.Zb.HL(a.G.getVideoData(1).videoId,c);a.C=L9(a.Zb).trackData}},Wab=function(a,b){var c=a.G.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.Zb.playVideo(c.videoId,b,d,e,c.playerParams,c.oa,c7a(c));a.Tb(new g.xI(1))},Xab=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{TO:1});
c&&c.length?(a.G.setOption("captions","track",b),a.D=!1):(a.G.loadModule("captions"),a.D=!0)}else a.G.setOption("captions","track",{})},i$=function(a){return L9(a.Zb).videoId===a.G.getVideoData(1).videoId},j$=function(){g.X.call(this,{F:"div",
L:"ytp-mdx-popup-dialog",T:{role:"dialog"},R:[{F:"div",L:"ytp-mdx-popup-dialog-inner-content",R:[{F:"div",L:"ytp-mdx-popup-title",Z:"You're signed out"},{F:"div",L:"ytp-mdx-popup-description",Z:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{F:"div",L:"ytp-mdx-privacy-popup-buttons",R:[{F:"button",Ca:["ytp-button","ytp-mdx-privacy-popup-cancel"],Z:"Cancel"},{F:"button",Ca:["ytp-button","ytp-mdx-privacy-popup-confirm"],
Z:"Confirm"}]}]}]});this.j=new g.fK(this,250);this.cancelButton=this.ya("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.ya("ytp-mdx-privacy-popup-confirm");g.M(this,this.j);this.P(this.cancelButton,"click",this.u);this.P(this.confirmButton,"click",this.B)},Zab=function(a){g.X.call(this,{F:"div",
L:"ytp-remote",R:[{F:"div",L:"ytp-remote-display-status",R:[{F:"div",L:"ytp-remote-display-status-icon",R:[g.DDa()]},{F:"div",L:"ytp-remote-display-status-text",Z:"{{statustext}}"}]}]});this.api=a;this.j=new g.fK(this,250);g.M(this,this.j);this.P(a,"presentingplayerstatechange",this.onStateChange);Yab(this,a.yb())},Yab=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.W(b,128)?g.eI("Error on $RECEIVER_NAME",c):b.Lc()||g.W(b,4)?g.eI("Playing on $RECEIVER_NAME",c):g.eI("Connected to $RECEIVER_NAME",c);a.Ja("statustext",b);a.j.show()}else a.j.hide()},k$=function(a,b){g.tP.call(this,"Play on",0,a,b);
this.G=a;this.gq={};this.P(a,"onMdxReceiversChange",this.D);this.P(a,"presentingplayerstatechange",this.D);this.D()},$ab=function(a){g.jM.call(this,a);
this.Dm={key:p7a(),name:"This computer"};this.Bj=null;this.subscriptions=[];this.iJ=this.Zb=null;this.gq=[this.Dm];this.Zo=this.Dm;this.Td=new g.xI(64);this.oP=0;this.qg=-1;this.vz=!1;this.rz=this.Jv=null;if(!g.wE(this.player.S())&&!g.xE(this.player.S())){a=this.player;var b=g.yL(a);b&&(b=b.Ap())&&(b=new k$(a,b),g.M(this,b));b=new Zab(a);g.M(this,b);g.IL(a,b.element,4);this.Jv=new j$;g.M(this,this.Jv);g.IL(a,this.Jv.element,4);this.vz=!!b$()}},l$=function(a){a.rz&&(a.player.removeEventListener("presentingplayerstatechange",
a.rz),a.rz=null)},abb=function(a,b,c){a.Td=c;
a.player.X("presentingplayerstatechange",new g.QH(c,b))},m$=function(a,b){if(b.key!==a.Zo.key)if(b.key===a.Dm.key)f$();
else{var c;(c=!a.player.S().K("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.Q("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.Q("SESSION_INDEX")&&!g.Q("LOGGED_IN")))||a.vz||!a.Jv);(c?0:g.OE(a.player.S())||g.RE(a.player.S()))&&bbb(a);a.Zo=b;if(!a.player.S().K("disable_mdx_connection_in_mdx_module_for_music_web")||!g.xE(a.player.S())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.S().K("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.eM(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.oa,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=c7a(c))&&(a.locationInfo=c)}Z9("Connecting to: "+g.Rh(b));"cast-selector-receiver"==b.key?(a$(a||null),b=a||null,C9()?A9().setLaunchParams(b):z9("setLaunchParams called before ready.")):!a&&Nab()&&
Y9()==b.key?b8("yt-remote-connection-change",!0):(f$(),a$(a||null),a=X9().Xi(),(b=g8(a,b.key))&&g$(b,1))}}},bbb=function(a){a.player.yb().Lc()?a.player.pauseVideo():(a.rz=function(b){!a.vz&&g.SH(b,8)&&(a.player.pauseVideo(),l$(a))},a.player.addEventListener("presentingplayerstatechange",a.rz));
a.Jv&&a.Jv.td();d$()||(h$=!0)};
g.Zp.prototype.rp=g.ba(1,function(){return g.bd(this,6)});
g.Ld.prototype.FA=g.ba(0,function(){var a=g.Rd(this);return 4294967296*g.Rd(this)+(a>>>0)});
var O6a,cbb=g.ze(function(a,b,c){if(1!==a.u)return!1;g.D(b,c,g.Sd(a.j));return!0},g.Ae),dbb=g.ze(function(a,b,c,d){if(1!==a.u)return!1;
g.nd(b,c,d,g.Sd(a.j));return!0},g.Ae),ebb=g.ze(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.Nd(a.j));return!0},g.Be),fbb=g.ze(function(a,b,c,d){if(0!==a.u)return!1;
g.nd(b,c,d,g.Nd(a.j));return!0},g.Be),gbb=g.ze(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.Od(a.j));return!0},g.Ce),hbb=g.ze(function(a,b,c,d){if(0!==a.u)return!1;
g.nd(b,c,d,g.Od(a.j));return!0},g.Ce),ibb=g.ze(function(a,b,c){if(1!==a.u)return!1;
g.D(b,c,a.j.FA());return!0},function(a,b,c){Q6a(a,c,g.bd(b,c))}),jbb=g.ze(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.dd(b,c);if(2==a.u){c=g.Ld.prototype.FA;var d=g.Od(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.FA());return!0},function(a,b,c){b=g.dd(b,c);
if(null!=b)for(var d=0;d<b.length;d++)Q6a(a,c,b[d])}),kbb=g.ze(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.Td(a.j));return!0},R6a),lbb=g.ze(function(a,b,c,d){if(0!==a.u)return!1;
g.nd(b,c,d,g.Td(a.j));return!0},R6a),mbb=g.ze(function(a,b,c){if(2!==a.u)return!1;
a=g.Zd(a);g.ld(b,c,a);return!0},function(a,b,c){b=g.dd(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.le(a,c,g.uaa(e))}}),nbb=g.ze(function(a,b,c,d){if(2!==a.u)return!1;
g.nd(b,c,d,g.Zd(a));return!0},g.gca),obb=g.ze(function(a,b,c,d,e){if(2!==a.u)return!1;
g.Wd(a,g.oba(b,d,c),e);return!0},g.hca),T6a=[1];
g.w(U6a,g.I);g.w(V6a,g.I);var pbb=[U6a,1,g.i2,[V6a,1,cbb,2,ebb]];g.w(W6a,g.I);g.w(X6a,g.I);g.w(Y6a,g.I);
var qbb=[1,2],rbb=[g.Bh,1,g.h2,5,ibb,2,obb,[W6a,1,g.j2,[X6a,1,g.h2,2,g.h2,3,kbb],qbb,2,g.j2,[Y6a,1,g.h2,2,g.h2,3,gbb,4,kbb],qbb],3,mbb,6,jbb,4,g.i2,[g.Ch,1,g.i2,[g.Dh,1,nbb,g.Gh,2,hbb,g.Gh,3,lbb,g.Gh],2,obb,[g.Eh,1,fbb,g.Fh,2,dbb,g.Fh,3,g.j2,pbb,g.Fh]]],g9a={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},P8={"'":"\\'"},k7a={L$:"atp",RFa:"ska",VCa:"que",lwa:"mus",QFa:"sus",ema:"dsp",pEa:"seq",Iva:"mic",Sia:"dpa",Daa:"cds",jwa:"mlm",
Nia:"dsdtr",Cxa:"ntb"};c8.prototype.equals=function(a){return a?this.id==a.id:!1};
var k8,v7a="",K7a=E7a("loadCastFramework")||E7a("loadCastApplicationFramework"),N7a=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ta(n8,g.J);g.k=n8.prototype;g.k.TT=function(a){this.C=arguments;this.j=!1;this.pc?this.B=g.Qa()+this.eh:this.pc=g.yh(this.D,this.eh)};
g.k.stop=function(){this.pc&&(g.C.clearTimeout(this.pc),this.pc=null);this.B=null;this.j=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.I.apply(null,this.C)))};
g.k.ea=function(){this.stop();n8.Ge.ea.call(this)};
g.k.UT=function(){this.pc&&(g.C.clearTimeout(this.pc),this.pc=null);this.B?(this.pc=g.yh(this.D,this.B-g.Qa()),this.B=null):this.u?this.j=!0:(this.j=!1,this.I.apply(null,this.C))};g.w(o8,g.J);g.k=o8.prototype;g.k.GE=function(a){this.B=arguments;this.pc||this.u?this.j=!0:Z7a(this)};
g.k.stop=function(){this.pc&&(g.C.clearTimeout(this.pc),this.pc=null,this.j=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.j||this.pc||(this.j=!1,Z7a(this))};
g.k.ea=function(){g.J.prototype.ea.call(this);this.stop()};p8.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
p8.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};g.Ta($7a,g.Ne);g.Ta(a8a,g.Ne);var d8a=!1;var f8a=null;g.Ta(h8a,g.Ne);g.Ta(i8a,g.Ne);g.Ta(j8a,g.Ne);k8a.prototype.info=function(){};
k8a.prototype.warning=function(){};var r8a={},v8={};g.k=t8.prototype;g.k.setTimeout=function(a){this.sb=a};
g.k.ZT=function(a){a=a.target;var b=this.Sa;b&&3==g.ki(a)?b.GE():this.lL(a)};
g.k.lL=function(a){try{if(a==this.j)a:{var b=g.ki(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b)&&(3!=b||g.UE||this.j&&(this.u.u||g.mi(this.j)||g.ni(this.j)))){this.Da||4!=b||7==c||(8==c||0>=d?q8(3):q8(2));y8(this);var e=this.j.getStatus();this.Jb=e;b:if(p8a(this)){var f=g.ni(this.j);a="";var h=f.length,l=4==g.ki(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){w8(this);x8(this);var m="";break b}this.u.B=new g.C.TextDecoder}for(c=0;c<h;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&
c==h-1});f.splice(0,h);this.u.j+=a;this.W=0;m=this.u.j}else m=g.mi(this.j);if(this.B=200==e){if(this.jc&&!this.Oa){b:{if(this.j){var n=g.oi(this.j,"X-HTTP-Initial-Response");if(n&&!g.db(n)){var p=n;break b}}p=null}if(e=p)this.Oa=!0,s8a(this,e);else{this.B=!1;this.I=3;r8(12);w8(this);x8(this);break a}}this.va?(t8a(this,b,m),g.UE&&this.B&&3==b&&(this.bb.Ma(this.eb,"tick",this.XT),this.eb.start())):s8a(this,m);4==b&&w8(this);this.B&&!this.Da&&(4==b?v8a(this.D,this):(this.B=!1,u8(this)))}else 400==e&&
0<m.indexOf("Unknown SID")?(this.I=3,r8(12)):(this.I=0,r8(13)),w8(this),x8(this)}}}catch(q){}finally{}};
g.k.XT=function(){if(this.j){var a=g.ki(this.j),b=g.mi(this.j);this.W<b.length&&(y8(this),t8a(this,a,b),this.B&&4!=a&&u8(this))}};
g.k.cancel=function(){this.Da=!0;w8(this)};
g.k.VT=function(){this.V=null;var a=Date.now();0<=a-this.Ib?(2!=this.Ka&&(q8(3),r8(17)),w8(this),this.I=2,x8(this)):u8a(this,this.Ib-a)};
g.k.getLastError=function(){return this.I};E8a.prototype.cancel=function(){this.B=G8a(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.r(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.k=K8a.prototype;g.k.mL=8;g.k.Yf=1;g.k.connect=function(a,b,c,d){this.lf&&g.oh((0,g.Oa)(this.A2,this,a));r8(0);this.Ic=a;this.Da=b||{};c&&void 0!==d&&(this.Da.OSID=c,this.Da.OAID=d);this.eb=this.Jc;this.Ha=A8a(this,null,this.Ic);C8(this)};
g.k.disconnect=function(){M8a(this);if(3==this.Yf){var a=this.Sa++,b=this.Ha.clone();g.xj(b,"SID",this.C);g.xj(b,"RID",a);g.xj(b,"TYPE","terminate");F8(this,b);a=new t8(this,this.C,a);a.Ka=2;a.J=Z7(b.clone());b=!1;g.C.navigator&&g.C.navigator.sendBeacon&&(b=g.C.navigator.sendBeacon(a.J.toString(),""));!b&&g.C.Image&&((new Image).src=a.J,b=!0);b||(a.j=o8a(a.D,null),a.j.send(a.J));a.ma=Date.now();u8(a)}S8a(this)};
g.k.A2=function(a){try{e8a(a,function(){})}catch(b){}};
g.k.Jf=function(){return 0==this.Yf};
g.k.getState=function(){return this.Yf};
g.k.oL=function(a){if(this.I)if(this.I=null,1==this.Yf){if(!a){this.Sa=Math.floor(1E5*Math.random());a=this.Sa++;var b=new t8(this,"",a),c=this.V;this.Ib&&(c?(c=g.nf(c),g.pf(c,this.Ib)):c=this.Ib);null!==this.J||this.ob||(b.Ha=c,c=null);var d;if(this.sb)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=P8a(this,b,d);e=this.Ha.clone();g.xj(e,"RID",a);g.xj(e,"CVER",22);this.va&&g.xj(e,"X-HTTP-Session-Id",this.va);F8(this,e);c&&(this.ob?d="headers="+g.zg(g.Tfa(c))+"&"+d:this.J&&g.Bj(e,this.J,c));z8a(this.u,b);this.Xe&&g.xj(e,"TYPE","init");this.sb?(g.xj(e,"$req",d),g.xj(e,"SID","null"),b.jc=!0,n8a(b,e,null)):n8a(b,e,d);this.Yf=2}}else 3==this.Yf&&(a?Q8a(this,a):0==this.B.length||F8a(this.u)||Q8a(this))};
g.k.nL=function(){this.N=null;R8a(this);if(this.Oc&&!(this.bb||null==this.j||0>=this.hd)){var a=2*this.hd;this.oa=s8((0,g.Oa)(this.WZ,this),a)}};
g.k.WZ=function(){this.oa&&(this.oa=null,this.eb=!1,this.bb=!0,r8(10),A8(this),R8a(this))};
g.k.FI=function(a){this.j==a&&this.Oc&&!this.bb&&(L8a(this),this.bb=!0,r8(11))};
g.k.aU=function(){null!=this.W&&(this.W=null,A8(this),x8a(this),r8(19))};
g.k.w3=function(a){a?r8(2):r8(1)};
g.k.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.k=U8a.prototype;g.k.sL=function(){};
g.k.rL=function(){};
g.k.qL=function(){};
g.k.pL=function(){};
g.k.isActive=function(){return!0};
g.k.bU=function(){};g.Ta(H8,g.Df);H8.prototype.open=function(){this.j.D=this.C;this.J&&(this.j.Ka=!0);this.j.connect(this.I,this.u||void 0)};
H8.prototype.close=function(){this.j.disconnect()};
H8.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.Rh(a),a=c);b.B.push(new D8a(b.Le++,a));3==b.Yf&&C8(b)};
H8.prototype.ea=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;H8.Ge.ea.call(this)};
g.Ta(W8a,$7a);g.Ta(X8a,a8a);g.Ta(G8,U8a);G8.prototype.sL=function(){this.j.dispatchEvent("m")};
G8.prototype.rL=function(a){this.j.dispatchEvent(new W8a(a))};
G8.prototype.qL=function(a){this.j.dispatchEvent(new X8a(a))};
G8.prototype.pL=function(){this.j.dispatchEvent("n")};var J8=new g.Df;g.w($8a,g.Ne);g.k=L8.prototype;g.k.Aq=null;g.k.Um=!1;g.k.Nt=null;g.k.IE=null;g.k.Lt=null;g.k.Mt=null;g.k.Go=null;g.k.Io=null;g.k.Bq=null;g.k.ph=null;g.k.AA=0;g.k.il=null;g.k.zA=null;g.k.Ho=null;g.k.Fw=-1;g.k.IR=!0;g.k.zq=!1;g.k.HE=0;g.k.yA=null;var e9a={},d9a={};g.k=L8.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.dU=function(a){a=a.target;var b=this.yA;b&&3==g.ki(a)?b.GE():this.tL(a)};
g.k.tL=function(a){try{if(a==this.ph)a:{var b=g.ki(this.ph),c=this.ph.u,d=this.ph.getStatus();if(g.sc&&!g.pc(10)||g.Pe&&!g.oc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.mi(this.ph))break a;this.zq||4!=b||7==c||(8==c||0>=d?this.j.Tk(3):this.j.Tk(2));j9a(this);var e=this.ph.getStatus();this.Fw=e;var f=g.mi(this.ph);if(this.Um=200==e){4==b&&N8(this);if(this.va){for(a=!0;!this.zq&&this.AA<f.length;){var h=f9a(this,f);if(h==d9a){4==b&&(this.Ho=4,K8(15),a=!1);break}else if(h==e9a){this.Ho=4;K8(16);a=
!1;break}else k9a(this,h)}4==b&&0==f.length&&(this.Ho=1,K8(17),a=!1);this.Um=this.Um&&a;a||(N8(this),O8(this))}else k9a(this,f);this.Um&&!this.zq&&(4==b?this.j.BA(this):(this.Um=!1,M8(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Ho=3,K8(13)):(this.Ho=0,K8(14)),N8(this),O8(this)}}catch(l){}finally{}};
g.k.s1=function(a){I8((0,g.Oa)(this.q1,this,a),0)};
g.k.q1=function(a){this.zq||(j9a(this),k9a(this,a),M8(this))};
g.k.KQ=function(a){I8((0,g.Oa)(this.o1,this,a),0)};
g.k.o1=function(a){this.zq||(N8(this),this.Um=a,this.j.BA(this),this.j.Tk(4))};
g.k.cancel=function(){this.zq=!0;N8(this)};
g.k.cU=function(){this.Nt=null;var a=Date.now();0<=a-this.IE?(2!=this.Mt&&this.j.Tk(3),N8(this),this.Ho=2,K8(18),O8(this)):i9a(this,this.IE-a)};
g.k.getLastError=function(){return this.Ho};g.k=n9a.prototype;g.k.KE=null;g.k.Rh=null;g.k.tD=!1;g.k.VR=null;g.k.FB=null;g.k.VH=null;g.k.LE=null;g.k.wj=null;g.k.Vm=-1;g.k.Gw=null;g.k.vx=null;g.k.connect=function(a){this.LE=a;a=R8(this.j,null,this.LE);K8(3);this.VR=Date.now();var b=this.j.N;null!=b?(this.Gw=b[0],(this.vx=b[1])?(this.wj=1,o9a(this)):(this.wj=2,p9a(this))):($7(a,"MODE","init"),this.Rh=new L8(this),this.Rh.Aq=this.KE,c9a(this.Rh,a,!1,null,!0),this.wj=0)};
g.k.xW=function(a){if(a)this.wj=2,p9a(this);else{K8(4);var b=this.j;b.Gl=b.Xo.Vm;V8(b,9)}a&&this.Tk(2)};
g.k.JE=function(a){return this.j.JE(a)};
g.k.abort=function(){this.Rh&&(this.Rh.cancel(),this.Rh=null);this.Vm=-1};
g.k.Jf=function(){return!1};
g.k.uL=function(a,b){this.Vm=a.Fw;if(0==this.wj)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.Gl=this.Vm;V8(a,2);return}this.Gw=c[0];this.vx=c[1]}else a=this.j,a.Gl=this.Vm,V8(a,2);else if(2==this.wj)if(this.tD)K8(7),this.VH=Date.now();else if("11111"==b){if(K8(6),this.tD=!0,this.FB=Date.now(),a=this.FB-this.VR,!g.sc||g.pc(10)||500>a)this.Vm=200,this.Rh.cancel(),K8(12),S8(this.j,this,!0)}else K8(8),this.FB=this.VH=Date.now(),this.tD=!1};
g.k.BA=function(){this.Vm=this.Rh.Fw;if(this.Rh.Um)0==this.wj?this.vx?(this.wj=1,o9a(this)):(this.wj=2,p9a(this)):2==this.wj&&((!g.sc||g.pc(10)?!this.tD:200>this.VH-this.FB)?(K8(11),S8(this.j,this,!1)):(K8(12),S8(this.j,this,!0)));else{0==this.wj?K8(9):2==this.wj&&K8(10);var a=this.j;this.Rh.getLastError();a.Gl=this.Vm;V8(a,2)}};
g.k.Hw=function(){return this.j.Hw()};
g.k.isActive=function(){return this.j.isActive()};
g.k.Tk=function(a){this.j.Tk(a)};g.k=q9a.prototype;g.k.Fl=null;g.k.Iw=null;g.k.ji=null;g.k.xf=null;g.k.ME=null;g.k.CA=null;g.k.vL=null;g.k.DA=null;g.k.Jw=0;g.k.fU=0;g.k.Vg=null;g.k.Jo=null;g.k.Wm=null;g.k.Dq=null;g.k.Xo=null;g.k.eE=null;g.k.Qt=-1;g.k.wL=-1;g.k.Gl=-1;g.k.Pt=0;g.k.Ot=0;g.k.Cq=8;g.Ta(s9a,g.Ne);g.Ta(t9a,g.Ne);g.k=q9a.prototype;g.k.connect=function(a,b,c,d,e){K8(0);this.ME=b;this.Iw=c||{};d&&void 0!==e&&(this.Iw.OSID=d,this.Iw.OAID=e);this.J?(I8((0,g.Oa)(this.AN,this,a),100),v9a(this)):this.AN(a)};
g.k.disconnect=function(){w9a(this);if(3==this.j){var a=this.Jw++,b=this.CA.clone();g.xj(b,"SID",this.C);g.xj(b,"RID",a);g.xj(b,"TYPE","terminate");U8(this,b);a=new L8(this,this.C,a);a.Mt=2;a.Go=Z7(b.clone());S6a(new Image,a.Go.toString());a.Lt=Date.now();M8(a)}G9a(this)};
g.k.AN=function(a){this.Xo=new n9a(this);this.Xo.KE=this.Fl;this.Xo.u=this.D;this.Xo.connect(a)};
g.k.Jf=function(){return 0==this.j};
g.k.getState=function(){return this.j};
g.k.yL=function(a){this.Jo=null;B9a(this,a)};
g.k.xL=function(){this.Wm=null;this.xf=new L8(this,this.C,"rpc",this.I);this.xf.Aq=this.Fl;this.xf.HE=0;var a=this.vL.clone();g.xj(a,"RID","rpc");g.xj(a,"SID",this.C);g.xj(a,"CI",this.eE?"0":"1");g.xj(a,"AID",this.Qt);U8(this,a);if(!g.sc||g.pc(10))g.xj(a,"TYPE","xmlhttp"),c9a(this.xf,a,!0,this.DA,!1);else{g.xj(a,"TYPE","html");var b=this.xf,c=!!this.DA;b.Mt=3;b.Go=Z7(a.clone());h9a(b,c)}};
g.k.uL=function(a,b){if(0!=this.j&&(this.xf==a||this.ji==a))if(this.Gl=a.Fw,this.ji==a&&3==this.j)if(7<this.Cq){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Wm){if(this.xf)if(this.xf.Lt+3E3<this.ji.Lt)T8(this),this.xf.cancel(),this.xf=null;else break a;E9a(this);K8(19)}}else this.wL=a[1],0<this.wL-this.Qt&&37500>a[2]&&this.eE&&0==this.Ot&&!this.Dq&&(this.Dq=I8((0,g.Oa)(this.gU,this),6E3));else V8(this,11)}else null!=b&&V8(this,11);else if(this.xf==
a&&T8(this),!g.db(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.Qt=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.DA=c[2],c=c[3],null!=c?this.Cq=c:this.Cq=6,this.j=3,this.Vg&&this.Vg.BL(),this.vL=R8(this,this.Hw()?this.DA:null,this.ME),C9a(this)):"stop"==c[0]&&V8(this,7):3==this.j&&("stop"==c[0]?V8(this,7):"noop"!=c[0]&&this.Vg&&this.Vg.AL(c),this.Ot=0)};
g.k.gU=function(){null!=this.Dq&&(this.Dq=null,this.xf.cancel(),this.xf=null,E9a(this),K8(20))};
g.k.BA=function(a){if(this.xf==a){T8(this);this.xf=null;var b=2}else if(this.ji==a)this.ji=null,b=1;else return;this.Gl=a.Fw;if(0!=this.j)if(a.Um)if(1==b){b=Date.now()-a.Lt;var c=J8;c.dispatchEvent(new s9a(c,a.Bq?a.Bq.length:0,b,this.Pt));u9a(this);this.B.length=0}else C9a(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Gl)){if(d=1==b)this.ji||this.Jo||1==this.j||2<=this.Pt?d=!1:(this.Jo=I8((0,g.Oa)(this.yL,this,a),D9a(this,this.Pt)),this.Pt++,d=!0);d=!(d||2==b&&E9a(this))}if(d)switch(c){case 1:V8(this,
5);break;case 4:V8(this,10);break;case 3:V8(this,6);break;case 7:V8(this,12);break;default:V8(this,2)}}};
g.k.eU=function(a){if(!g.Nb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.k.v3=function(a){a?K8(2):(K8(1),F9a(this,8))};
g.k.JE=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.hi;a.J=!1;return a};
g.k.isActive=function(){return!!this.Vg&&this.Vg.isActive(this)};
g.k.Tk=function(a){var b=J8;b.dispatchEvent(new t9a(b,a))};
g.k.Hw=function(){return!(!g.sc||g.pc(10))};
g.k=H9a.prototype;g.k.BL=function(){};
g.k.AL=function(){};
g.k.zL=function(){};
g.k.NE=function(){};
g.k.CL=function(){return{}};
g.k.isActive=function(){return!0};g.k=I9a.prototype;g.k.enqueue=function(a){this.u.push(a)};
g.k.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.k.clear=function(){this.j=[];this.u=[]};
g.k.contains=function(a){return g.Nb(this.j,a)||g.Nb(this.u,a)};
g.k.remove=function(a){var b=this.j;var c=(0,g.MVa)(b,a);0<=c?(g.Rb(b,c),b=!0):b=!1;return b||g.Ub(this.u,a)};
g.k.Gj=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};J9a.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.T("enable_client_streamz_web")){a=g.r(a);for(var c=a.next();!c.done;c=a.next())c=g.dea(c.value),c={serializedIncrementBatch:g.qc(g.ye(c,rbb))},g.yu("streamzIncremented",c,{LJ:b})}};var W8;g.w(K9a,g.Ne);g.w(L9a,g.Ne);g.Ta(X8,g.J);g.k=X8.prototype;g.k.g1=function(){this.eh=Math.min(3E5,2*this.eh);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.eh+15E3*Math.random();g.Wn(this.j,a);this.u=Date.now()+a};
g.k.stop=function(){this.j.stop();this.u=0};
g.k.isActive=function(){return this.j.isActive()};
g.k.reset=function(){this.j.stop();this.eh=5E3};g.Ta(N9a,H9a);g.k=N9a.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.zg=function(a){return this.B.zg(a)};
g.k.X=function(a,b){return this.B.X.apply(this.B,arguments)};
g.k.dispose=function(){this.W||(this.W=!0,g.Ke(this.B),this.disconnect(),g.Ke(this.u),this.u=null,this.Y=function(){return""})};
g.k.isDisposed=function(){return this.W};
g.k.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.V="";this.u.stop();this.I=a||null;this.D=b||0;a=this.ma+"/test";b=this.ma+"/bind";var d=new q9a(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Ka),e=this.j;e&&(e.Vg=null);d.Vg=this;this.j=d;O9a(this);if(this.j){d=g.Q("ID_TOKEN");var f=this.j.Fl||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Fl=f}e?(3!=e.getState()&&0==y9a(e)||e.getState(),this.j.connect(a,b,this.J,e.C,e.Qt)):c?this.j.connect(a,
b,this.J,c.sessionId,c.arrayId):this.j.connect(a,b,this.J)}};
g.k.disconnect=function(a){this.N=a||0;this.u.stop();O9a(this);this.j&&(3==this.j.getState()&&B9a(this.j),this.j.disconnect());this.N=0};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.pf(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Yu()&&(O9a(this),x9a(this.j,a))};
g.k.BL=function(){this.u.reset();this.I=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)x9a(this.j,a[b])}this.X("handlerOpened");Q7a(this.Ha,"BROWSER_CHANNEL")};
g.k.zL=function(a){var b=2==a&&401==this.j.Gl;4==a||b||this.u.start();this.X("handlerError",a,b);W7a(this.va,"BROWSER_CHANNEL")};
g.k.NE=function(a,b){if(!this.u.isActive())this.X("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}S7a(this.oa,"BROWSER_CHANNEL");a&&this.Sa.j.QE("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Ua.j.QE("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.CL=function(){var a={v:2};this.V&&(a.gsessionid=this.V);0!=this.D&&(a.ui=""+this.D);0!=this.N&&(a.ui=""+this.N);this.I&&g.pf(a,this.I);return a};
g.k.AL=function(a){"S"==a[0]?this.V=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.X("handlerMessage",new M9a(a[0],a[1]));U7a(this.Da,"BROWSER_CHANNEL")};
g.k.Yu=function(){return!!this.j&&3==this.j.getState()};
g.k.xo=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Oa&&this.j){var b=this.j.Fl||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Fl=b}};
g.k.rp=function(){return this.J.id};
g.k.zp=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.k.Js=function(){var a=this.u;g.Xn(a.j);a.start()};
g.k.C2=function(){this.u.isActive();0==y9a(this.j)&&this.connect(this.I,this.D)};Y8.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Y8.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
Y8.prototype.D=function(a){a(Error("request timed out"))};g.w(Q9a,g.Df);g.k=Q9a.prototype;g.k.connect=function(a,b,c){this.Pc.connect(a,b,c)};
g.k.disconnect=function(a){this.Pc.disconnect(a)};
g.k.Js=function(){this.Pc.Js()};
g.k.rp=function(){return this.Pc.rp()};
g.k.zp=function(){return this.Pc.zp()};
g.k.Yu=function(){return this.Pc.Yu()};
g.k.jU=function(){this.dispatchEvent("channelOpened");var a=this.Pc,b=this.j;g.vy("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.eE,sessionId:a.j.C,arrayId:a.j.Qt});g.vy("yt-remote-session-screen-id",b);a=h8();b=i8();g.Nb(a,b)||a.push(b);u7a(a);w7a()};
g.k.hU=function(){this.dispatchEvent("channelClosed")};
g.k.iU=function(a){this.dispatchEvent(new K9a(a))};
g.k.onError=function(a){this.dispatchEvent(new L9a(a?1:0))};
g.k.sendMessage=function(a,b){this.Pc.sendMessage(a,b)};
g.k.xo=function(a){this.Pc.xo(a)};
g.k.dispose=function(){this.Pc.dispose()};g.k=R9a.prototype;
g.k.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.I&&(this.B.stop(),this.N=a,this.J=b,T9a(this),(a=g.Q("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.WY&&(this.u.mdxVersion=""+this.j.WY),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.J?this.u.ui=""+this.J:delete this.u.ui,
Object.assign(this.u,this.N),this.channel=new H8(this.pathPrefix,{mY:"gsessionid",ZY:this.C,aZ:this.u}),this.channel.open(),this.I=2,S9a(this))};
g.k.disconnect=function(a){this.V=void 0===a?0:a;this.B.stop();T9a(this);this.channel&&(0!==this.V?this.u.ui=""+this.V:delete this.u.ui,this.channel.close());this.V=0};
g.k.zp=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.k.Js=function(){var a=this.B;g.Xn(a.j);a.start()};
g.k.sendMessage=function(a,b){this.channel&&(T9a(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.k.xo=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.k.rp=function(){return this.j?this.j.id:""};
g.k.X=function(a){return this.D.X.apply(this.D,[a].concat(g.u(g.za.apply(1,arguments))))};
g.k.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.k.zg=function(a){return this.D.zg(a)};
g.k.dispose=function(){this.W||(this.W=!0,g.Ke(this.D),this.disconnect(),g.Ke(this.B),this.oa=function(){return""})};
g.k.isDisposed=function(){return this.W};g.w(U9a,g.Df);g.k=U9a.prototype;g.k.connect=function(a,b){this.j.connect(a,b)};
g.k.disconnect=function(a){this.j.disconnect(a)};
g.k.Js=function(){this.j.Js()};
g.k.rp=function(){return this.j.rp()};
g.k.zp=function(){return this.j.zp()};
g.k.Yu=function(){return 3===this.j.I};
g.k.mU=function(){this.dispatchEvent("channelOpened")};
g.k.kU=function(){this.dispatchEvent("channelClosed")};
g.k.lU=function(a){this.dispatchEvent(new K9a(a))};
g.k.onError=function(){this.dispatchEvent(new L9a(401===this.j.Y?1:0))};
g.k.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.k.xo=function(a){this.j.xo(a)};
g.k.dispose=function(){this.j.dispose()};var b$a=Date.now(),$8=null,d9=Array(50),c9=-1,e9=!1;g.Ta(f9,g.Ix);f9.prototype.Xi=function(){return this.screens};
f9.prototype.contains=function(a){return!!r7a(this.screens,a)};
f9.prototype.get=function(a){return a?g8(this.screens,a):null};
f9.prototype.info=function(a){a9(this.I,a)};g.w(f$a,g.Ix);g.k=f$a.prototype;g.k.start=function(){!this.j&&isNaN(this.pc)&&this.ZQ()};
g.k.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.pc)||(g.nt(this.pc),this.pc=NaN)};
g.k.ea=function(){this.stop();g.Ix.prototype.ea.call(this)};
g.k.ZQ=function(){this.pc=NaN;this.j=g.qt(Z8(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Oa)(this.oU,this),onError:(0,g.Oa)(this.nU,this),onTimeout:(0,g.Oa)(this.pU,this)})};
g.k.oU=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.X("pairingComplete",new d8(a),b)};
g.k.nU=function(a){this.j=null;a.status&&404==a.status?this.u>=sbb.length?this.X("pairingFailed",Error("DIAL polling timed out")):(a=sbb[this.u],this.pc=g.lt((0,g.Oa)(this.ZQ,this),a),this.u++):this.X("pairingFailed",Error("Server error "+a.status))};
g.k.pU=function(){this.j=null;this.X("pairingFailed",Error("Server not responding"))};
var sbb=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ta(h9,f9);g.k=h9.prototype;g.k.start=function(){g9(this)&&this.X("screenChange");!g.wy("yt-remote-lounge-token-expiration")&&g$a(this);g.nt(this.j);this.j=g.lt((0,g.Oa)(this.start,this),1E4)};
g.k.add=function(a,b){g9(this);c$a(this,a);i9(this,!1);this.X("screenChange");b(a);a.token||g$a(this)};
g.k.remove=function(a,b){var c=g9(this);e$a(this,a)&&(i9(this,!1),c=!0);b(a);c&&this.X("screenChange")};
g.k.cE=function(a,b,c,d){var e=g9(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,i9(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.X("screenChange")};
g.k.ea=function(){g.nt(this.j);h9.Ge.ea.call(this)};
g.k.MX=function(a){g9(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}i9(this,!b);b&&a9(this.I,"Missed "+b+" lounge tokens.")};
g.k.LX=function(a){a9(this.I,"Requesting lounge tokens failed: "+a)};g.w(i$a,g.Ix);g.k=i$a.prototype;g.k.start=function(){var a=parseInt(g.wy("yt-remote-fast-check-period")||"0",10);(this.C=g.Qa()-144E5<a?0:a)?j9(this):(this.C=g.Qa()+3E5,g.vy("yt-remote-fast-check-period",this.C),this.xJ())};
g.k.isEmpty=function(){return g.jf(this.j)};
g.k.update=function(){h$a("Updating availability on schedule.");var a=this.I(),b=g.$e(this.j,function(c,d){return c&&!!g8(a,d)},this);
l$a(this,b)};
g.k.ea=function(){g.nt(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.Ix.prototype.ea.call(this)};
g.k.xJ=function(){g.nt(this.B);this.B=NaN;this.u&&this.u.abort();var a=m$a(this);if(e7a(a)){var b=Z8(this.D,"/pairing/get_screen_availability");this.u=P9a(this.D,b,{lounge_token:g.ef(a).join(",")},(0,g.Oa)(this.K0,this,a),(0,g.Oa)(this.J0,this))}else l$a(this,{}),j9(this)};
g.k.K0=function(a,b){this.u=null;var c=g.ef(m$a(this));if(g.fc(c,g.ef(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;l$a(this,c);j9(this)}else this.Ve("Changing Screen set during request."),this.xJ()};
g.k.J0=function(a){this.Ve("Screen availability failed: "+a);this.u=null;j9(this)};
g.k.Ve=function(a){a9("OnlineScreenService",a)};g.Ta(k9,f9);g.k=k9.prototype;g.k.start=function(){this.u.start();this.j.start();this.screens.length&&(this.X("screenChange"),this.j.isEmpty()||this.X("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.k.cE=function(a,b,c,d){this.u.contains(a)?this.u.cE(a,b,c,d):(a="Updating name of unknown screen: "+a.name,a9(this.I,a),d(Error(a)))};
g.k.Xi=function(a){return a?this.screens:g.Xb(this.screens,g.qm(this.B,function(b){return!this.contains(b)},this))};
g.k.DL=function(){return g.qm(this.Xi(!0),function(a){return!!this.j.j[a.id]},this)};
g.k.EL=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new f$a(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.Ke(l);e(l9(h,m),n)});
l.subscribe("pairingFailed",function(m){g.Ke(l);f(m)});
l.start();return(0,g.Oa)(l.stop,l)};
g.k.qU=function(a,b,c,d){g.qt(Z8(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Oa)(function(e,f){e=new d8(f.screen||{});if(!e.name||q$a(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);q$a(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(l9(this,e))},this),
onError:(0,g.Oa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Oa)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ea=function(){g.Ke(this.u);g.Ke(this.j);k9.Ge.ea.call(this)};
g.k.WX=function(){s$a(this);this.X("screenChange");this.j.update()};
k9.prototype.dispose=k9.prototype.dispose;g.Ta(m9,g.Ix);g.k=m9.prototype;g.k.getScreen=function(){return this.C};
g.k.Hh=function(a){this.isDisposed()||(a&&(o9(this,""+a),this.X("sessionFailed")),this.C=null,this.X("sessionScreen",null))};
g.k.info=function(a){a9(this.va,a)};
g.k.FL=function(){return null};
g.k.PJ=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Oa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Oa)(function(){o9(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ea=function(){this.PJ("");m9.Ge.ea.call(this)};g.w(p9,m9);g.k=p9.prototype;g.k.OJ=function(a){if(this.u){if(this.u==a)return;o9(this,"Overriding cast session with new session object");E$a(this);this.ma=!1;this.V="unknown";this.u.removeUpdateListener(this.Y);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.oa)}this.u=a;this.u.addUpdateListener(this.Y);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.oa);z$a(this,"getMdxSessionStatus")};
g.k.tv=function(a){this.info("launchWithParams no-op for Cast: "+g.Rh(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.Oa)(function(){this.Hh()},this),(0,g.Oa)(function(){this.Hh(Error("Failed to stop receiver app."))},this)):this.Hh(Error("Stopping cast device without session."))};
g.k.PJ=function(){};
g.k.ea=function(){this.info("disposeInternal");E$a(this);this.u&&(this.u.removeUpdateListener(this.Y),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.oa));this.u=null;m9.prototype.ea.call(this)};
g.k.E1=function(a,b){if(!this.isDisposed())if(b)if(b=a8(b),g.Ka(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Rh(b)),a){case "mdxSessionStatus":w$a(this,b);break;case "loungeToken":A$a(this,b);break;default:o9(this,"Unknown youtube message: "+a)}else o9(this,"Unable to parse message.");else o9(this,"No data in message.")};
g.k.tO=function(a,b,c,d){g.nt(this.N);this.N=0;p$a(this.B,this.j.label,a,this.j.friendlyName,(0,g.Oa)(function(e){e?b(e):0<=d?(o9(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.lt((0,g.Oa)(this.tO,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.FL=function(){return this.u};
g.k.rU=function(a){this.isDisposed()||a||(o9(this,"Cast session died."),this.Hh())};g.w(q9,m9);g.k=q9.prototype;g.k.OJ=function(a){this.u=a;this.u.addUpdateListener(this.Da)};
g.k.tv=function(a){this.Ha=a;this.W()};
g.k.stop=function(){M$a(this);this.u?this.u.stop((0,g.Oa)(this.Hh,this,null),(0,g.Oa)(this.Hh,this,"Failed to stop DIAL device.")):this.Hh()};
g.k.ea=function(){M$a(this);this.u&&this.u.removeUpdateListener(this.Da);this.u=null;m9.prototype.ea.call(this)};
g.k.sU=function(a){this.isDisposed()||a||(o9(this,"DIAL session died."),this.D(),this.D=function(){},this.Hh())};g.w(t9,m9);t9.prototype.stop=function(){this.Hh()};
t9.prototype.OJ=function(){};
t9.prototype.tv=function(){g.nt(this.u);this.u=NaN;var a=g8(this.B.Xi(),this.j.label);a?n9(this,a):this.Hh(Error("No such screen"))};
t9.prototype.ea=function(){g.nt(this.u);this.u=NaN;m9.prototype.ea.call(this)};g.w(u9,g.Ix);g.k=u9.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.V||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Oa)(this.v0,this);c=new chrome.cast.ApiConfig(c,(0,g.Oa)(this.GQ,this),e,d,a);c.customDialLaunchCallback=(0,g.Oa)(this.n_,this);
chrome.cast.initialize(c,(0,g.Oa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),Z9a(),this.u.subscribe("onlineScreenChange",(0,g.Oa)(this.GL,this)),this.B=P$a(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(f){this.Ve("Failed to set initial custom receivers: "+g.Rh(f))},this)),this.X("yt-remote-cast2-availability-change",w9(this)),b(!0))},this),(0,g.Oa)(function(f){this.Ve("Failed to initialize API: "+g.Rh(f));
b(!1)},this))};
g.k.L2=function(a,b){v9("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)v9("Unsetting old screen status: "+this.j.j.friendlyName),x9(this,null)}if(a&&b){if(!this.j){c=g8(this.u.Xi(),a);if(!c){v9("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){v9("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=N$a(this,c);a||(v9("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(d){this.Ve("Failed to set initial custom receivers: "+g.Rh(d))},this)));
v9("setConnectedScreenStatus: new active receiver: "+a.friendlyName);x9(this,new t9(this.u,a),!0)}this.j.PJ(b)}else v9("setConnectedScreenStatus: no screen.")};
g.k.M2=function(a){this.isDisposed()?this.Ve("Setting connection data on disposed cast v2"):this.j?this.j.tv(a):this.Ve("Setting connection data without a session")};
g.k.uU=function(){this.isDisposed()?this.Ve("Stopping session on disposed cast v2"):this.j?(this.j.stop(),x9(this,null)):v9("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Oa)(this.GQ,this),(0,g.Oa)(this.N0,this))};
g.k.ea=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Oa)(this.GL,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=W9a,b=g.Ga("yt.mdx.remote.debug.handlers_");g.Ub(b||[],a);g.Ke(this.j);g.Ix.prototype.ea.call(this)};
g.k.Ve=function(a){a9("Controller",a)};
g.k.IQ=function(a,b){this.j==a&&(b||x9(this,null),this.X("yt-remote-cast2-session-change",b))};
g.k.s0=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),v9("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)v9("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{v9("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.X("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:x9(this,
new t9(this.u,a));break;case chrome.cast.ReceiverType.DIAL:x9(this,new q9(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:x9(this,new p9(this.u,a,this.config_));break;default:this.Ve("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.Ve("Stopping receiver w/o session: "+a.friendlyName)}else this.Ve("onReceiverAction_ called without receiver.")};
g.k.n_=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Ve("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.Ve("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return v9("Reselecting dial screen."),
this.X("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Ve('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);x9(this,new q9(this.u,b,this.C,this.config_))}b=this.j;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,r9(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=J$a(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.Vs(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=K$a(b,c)):a=K$a(b,c)):a=H$a(b);return a};
g.k.GQ=function(a){var b=this;if(!this.isDisposed()&&!this.I){v9("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)v9("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),x9(this,new p9(this.u,c,this.config_),!0);else{this.Ve("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=g8(this.u.Xi(),
d.label);e&&e8(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(v9("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.Ke(this.j),this.j=new p9(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Oa)(this.IQ,this,this.j)),this.j.subscribe("sessionFailed",function(){return O$a(b,b.j)}),this.j.tv(null));
this.j.OJ(a)}}};
g.k.tU=function(){return this.j?this.j.FL():null};
g.k.N0=function(a){this.isDisposed()||(this.Ve("Failed to estabilish a session: "+g.Rh(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&x9(this,null),this.X("yt-remote-cast2-session-failed"))};
g.k.v0=function(a){v9("Receiver availability updated: "+a);if(!this.isDisposed()){var b=w9(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;w9(this)!=b&&this.X("yt-remote-cast2-availability-change",w9(this))}};
g.k.GL=function(){this.isDisposed()||(this.B=P$a(this),v9("Updating custom receivers: "+g.Rh(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(){this.Ve("Failed to set custom receivers.")},this)),this.X("yt-remote-cast2-availability-change",w9(this)))};
u9.prototype.setLaunchParams=u9.prototype.M2;u9.prototype.setConnectedScreenStatus=u9.prototype.L2;u9.prototype.stopSession=u9.prototype.uU;u9.prototype.getCastSession=u9.prototype.tU;u9.prototype.requestSession=u9.prototype.requestSession;u9.prototype.init=u9.prototype.init;u9.prototype.dispose=u9.prototype.dispose;var Y$a=[];g.k=E9.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";dab(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.qm=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.N=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Lc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Zk=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+F9(this):this.D};
g.k.clone=function(){return new E9(eab(this))};g.w(K9,g.Ix);g.k=K9.prototype;g.k.getState=function(){return this.B};
g.k.zp=function(){return this.C.getReconnectTimeout()};
g.k.Js=function(){this.C.reconnect()};
g.k.play=function(){M9(this)?(this.j?this.j.play(null,g.Hf,Q9(this,"play")):P9(this,"play"),hab(this,1,H9(L9(this))),this.X("remotePlayerChange")):N9(this,this.play)};
g.k.pause=function(){M9(this)?(this.j?this.j.pause(null,g.Hf,Q9(this,"pause")):P9(this,"pause"),hab(this,2,H9(L9(this))),this.X("remotePlayerChange")):N9(this,this.pause)};
g.k.seekTo=function(a){if(M9(this)){if(this.j){var b=L9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Lc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.Hf,Q9(this,"seekTo",{newTime:a}))}else P9(this,"seekTo",{newTime:a});hab(this,3,a);this.X("remotePlayerChange")}else N9(this,g.Pa(this.seekTo,a))};
g.k.stop=function(){if(M9(this)){this.j?this.j.stop(null,g.Hf,Q9(this,"stopVideo")):P9(this,"stopVideo");var a=L9(this);a.index=-1;a.videoId="";dab(a);O9(this,a);this.X("remotePlayerChange")}else N9(this,this.stop)};
g.k.setVolume=function(a,b){if(M9(this)){var c=L9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Oa)(function(){b9("set receiver volume: "+d)},this),(0,g.Oa)(function(){this.Ve("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Oa)(function(){b9("set receiver muted: "+b)},this),(0,g.Oa)(function(){this.Ve("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);P9(this,"setVolume",e)}c.muted=b;c.volume=a;O9(this,c)}else N9(this,g.Pa(this.setVolume,a,b))};
g.k.HL=function(a,b){if(M9(this)){var c=L9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Rh(b.style),g.pf(a,c.trackData));P9(this,"setSubtitlesTrack",a);O9(this,c)}else N9(this,g.Pa(this.HL,a,b))};
g.k.setAudioTrack=function(a,b){M9(this)?(b=b.getLanguageInfo().getId(),P9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=L9(this),a.audioTrackId=b,O9(this,a)):N9(this,g.Pa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=L9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);I9(l,a,c||0);void 0!==b&&(G9(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.Rh(h));P9(this,"setPlaylist",m);d||O9(this,l)};
g.k.mD=function(a,b){if(M9(this)){if(a&&b){var c=L9(this);I9(c,a,b);O9(this,c)}P9(this,"previous")}else N9(this,g.Pa(this.mD,a,b))};
g.k.nextVideo=function(a,b){if(M9(this)){if(a&&b){var c=L9(this);I9(c,a,b);O9(this,c)}P9(this,"next")}else N9(this,g.Pa(this.nextVideo,a,b))};
g.k.pu=function(){if(M9(this)){P9(this,"clearPlaylist");var a=L9(this);a.reset();O9(this,a);this.X("remotePlayerChange")}else N9(this,this.pu)};
g.k.NN=function(){M9(this)?P9(this,"dismissAutoplay"):N9(this,this.NN)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.X("proxyStateChange",a,this.B)}g.Ix.prototype.dispose.call(this)};
g.k.ea=function(){gab(this);this.C=null;this.D.clear();J9(this,null);g.Ix.prototype.ea.call(this)};
g.k.RJ=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.X("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.k.q0=function(a,b){this.X(a,b)};
g.k.a_=function(a){if(!a)this.fz(null),J9(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=L9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)b9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,O9(this,b)}};
g.k.fz=function(a){b9("Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.N);if(this.j=a)this.j.addUpdateListener(this.N),iab(this),this.X("remotePlayerChange")};
g.k.ZZ=function(a){a?(iab(this),this.X("remotePlayerChange")):this.fz(null)};
g.k.pK=function(){P9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.d_=function(){var a=aab();a&&J9(this,a)};
g.k.Ve=function(a){a9("CP",a)};g.w(T9,g.Ix);g.k=T9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Da&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;G9(this.j,
n);this.D="UNSUPPORTED";c=this.Da?"setInitialState":"setPlaylist";R9("Connecting with "+c+" and params: "+g.Rh(m));this.u.connect({method:c,params:g.Rh(m)},a,x7a())}else R9("Connecting without params"),this.u.connect({},a,x7a());mab(this)};
g.k.xo=function(a){this.u.xo(a)};
g.k.dispose=function(){this.isDisposed()||(g.Fa("yt.mdx.remote.remoteClient_",null),this.X("beforeDispose"),S9(this,3));g.Ix.prototype.dispose.call(this)};
g.k.ea=function(){nab(this);pab(this);oab(this);g.nt(this.N);this.N=NaN;g.nt(this.V);this.V=NaN;this.C=null;g.jw(this.W);this.W.length=0;this.u.dispose();g.Ix.prototype.ea.call(this);this.D=this.J=this.B=this.j=this.u=null};
g.k.bP=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.r(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.EX=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.jy())?this.u.Yu()&&isNaN(this.I)&&(a=1):a=2);return a};
g.k.Cu=function(a){R9("Disconnecting with "+a);g.Fa("yt.mdx.remote.remoteClient_",null);nab(this);this.X("beforeDisconnect",a);1==a&&j8();this.u.disconnect(a);this.dispose()};
g.k.CX=function(){var a=this.j;this.C&&(a=this.j.clone(),I9(a,this.C,a.index));return eab(a)};
g.k.N2=function(a){var b=this,c=new E9(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.nt(this.N),this.N=g.lt(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&U9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&H9(this.j)==H9(c)&&g.Rh(this.j.trackData)==g.Rh(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.hc(d,function(e){this.X(e)},this)};
g.k.sO=function(){var a=this.u.rp(),b=g.Lb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.jy=function(){return this.u.zp()};
g.k.zX=function(){return this.D||"UNSUPPORTED"};
g.k.AX=function(){return this.J||""};
g.k.vU=function(){!isNaN(this.jy())&&this.u.Js()};
g.k.K2=function(a,b){U9(this,a,b);rab(this)};
g.k.IL=function(){var a=g.Ct("SID","")||"",b=g.Ct("SAPISID","")||"",c=g.Ct("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.qc(g.ab(a),2);b=g.qc(g.ab(b),2);c=g.qc(g.ab(c),2);return g.qc(g.ab(a+","+b+","+c),2)};
T9.prototype.subscribe=T9.prototype.subscribe;T9.prototype.unsubscribeByKey=T9.prototype.zg;T9.prototype.getProxyState=T9.prototype.EX;T9.prototype.disconnect=T9.prototype.Cu;T9.prototype.getPlayerContextData=T9.prototype.CX;T9.prototype.setPlayerContextData=T9.prototype.N2;T9.prototype.getOtherConnectedRemoteId=T9.prototype.sO;T9.prototype.getReconnectTimeout=T9.prototype.jy;T9.prototype.getAutoplayMode=T9.prototype.zX;T9.prototype.getAutoplayVideoId=T9.prototype.AX;T9.prototype.reconnect=T9.prototype.vU;
T9.prototype.sendMessage=T9.prototype.K2;T9.prototype.getXsrfToken=T9.prototype.IL;T9.prototype.isCapabilitySupportedOnConnectedDevices=T9.prototype.bP;g.w(Dab,f9);g.k=Dab.prototype;g.k.Xi=function(a){return this.Hf.$_gs(a)};
g.k.contains=function(a){return!!this.Hf.$_c(a)};
g.k.get=function(a){return this.Hf.$_g(a)};
g.k.start=function(){this.Hf.$_st()};
g.k.add=function(a,b,c){this.Hf.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Hf.$_r(a,b,c)};
g.k.cE=function(a,b,c,d){this.Hf.$_un(a,b,c,d)};
g.k.ea=function(){for(var a=0,b=this.j.length;a<b;++a)this.Hf.$_ubk(this.j[a]);this.j.length=0;this.Hf=null;f9.prototype.ea.call(this)};
g.k.wU=function(){this.X("screenChange")};
g.k.U_=function(){this.X("onlineScreenChange")};
k9.prototype.$_st=k9.prototype.start;k9.prototype.$_gspc=k9.prototype.qU;k9.prototype.$_gsppc=k9.prototype.EL;k9.prototype.$_c=k9.prototype.contains;k9.prototype.$_g=k9.prototype.get;k9.prototype.$_a=k9.prototype.add;k9.prototype.$_un=k9.prototype.cE;k9.prototype.$_r=k9.prototype.remove;k9.prototype.$_gs=k9.prototype.Xi;k9.prototype.$_gos=k9.prototype.DL;k9.prototype.$_s=k9.prototype.subscribe;k9.prototype.$_ubk=k9.prototype.zg;var e$=null,h$=!1,V9=null,W9=null,Oab=null,$9=[];g.w(Sab,g.J);g.k=Sab.prototype;g.k.ea=function(){g.J.prototype.ea.call(this);this.j.stop();this.B.stop();this.N.stop();var a=this.Zb;a.unsubscribe("proxyStateChange",this.FQ,this);a.unsubscribe("remotePlayerChange",this.lz,this);a.unsubscribe("remoteQueueChange",this.YC,this);a.unsubscribe("previousNextChange",this.CQ,this);a.unsubscribe("nowAutoplaying",this.wQ,this);a.unsubscribe("autoplayDismissed",this.aQ,this);this.Zb=this.u=null};
g.k.Mk=function(a){var b=g.za.apply(1,arguments);if(2!=this.Zb.B)if(i$(this)){if(!L9(this.Zb).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":L9(this.Zb).Lc()?this.Zb.pause():this.Zb.play();break;case "control_play":this.Zb.play();break;case "control_pause":this.Zb.pause();break;case "control_seek":this.J.GE(b[0],b[1]);break;case "control_subtitles_set_track":Vab(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();Wab(this,0===b?void 0:b);break;case "control_seek":Wab(this,b[0]);break;case "control_subtitles_set_track":Vab(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.XZ=function(a){this.N.TT(a)};
g.k.a4=function(a){this.Mk("control_subtitles_set_track",g.jf(a)?null:a)};
g.k.bS=function(){var a=this.G.getOption("captions","track");g.jf(a)||Vab(this,a)};
g.k.Vb=function(a){this.u.Vb(a,this.G.getVideoData().lengthSeconds)};
g.k.F_=function(){g.jf(this.C)||Xab(this,this.C);this.D=!1};
g.k.FQ=function(a,b){this.B.stop();2===b&&this.UR()};
g.k.lz=function(){if(i$(this)){this.j.stop();var a=L9(this.Zb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.qg=1;break;case 1082:case 1083:this.u.qg=0;break;default:this.u.qg=-1}switch(a.playerState){case 1081:case 1:this.Tb(new g.xI(8));this.TR();break;case 1085:case 3:this.Tb(new g.xI(9));break;case 1083:case 0:this.Tb(new g.xI(2));this.J.stop();this.Vb(this.G.getVideoData().lengthSeconds);break;case 1084:this.Tb(new g.xI(4));break;case 2:this.Tb(new g.xI(4));this.Vb(H9(a));
break;case -1:this.Tb(new g.xI(64));break;case -1E3:this.Tb(new g.xI(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",AB:2}))}a=L9(this.Zb).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,Xab(this,a));a=L9(this.Zb);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.V.isActive()||this.ES()}else Uab(this)};
g.k.CQ=function(){this.G.X("mdxpreviousnextchange")};
g.k.YC=function(){i$(this)||Uab(this)};
g.k.wQ=function(a){isNaN(a)||this.G.X("mdxnowautoplaying",a)};
g.k.aQ=function(){this.G.X("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){i$(this)&&this.Zb.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===L9(this.Zb).playerState?Wab(this,a):b&&this.Zb.seekTo(a)};
g.k.ES=function(){var a=this;if(i$(this)){var b=L9(this.Zb);this.events.wc(this.W);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.W=this.events.P(this.G,"onVolumeChange",function(c){Rab(a,c)})}};
g.k.TR=function(){this.j.stop();if(!this.Zb.isDisposed()){var a=L9(this.Zb);a.Lc()&&this.Tb(new g.xI(8));this.Vb(H9(a));this.j.start()}};
g.k.UR=function(){this.B.stop();this.j.stop();var a=this.Zb.zp();2==this.Zb.B&&!isNaN(a)&&this.B.start()};
g.k.Tb=function(a){this.B.stop();var b=this.I;if(!g.CI(b,a)){var c=g.W(a,2);c!==g.W(this.I,2)&&this.G.Vv(c);this.I=a;abb(this.u,b,a)}};g.w(j$,g.X);j$.prototype.td=function(){this.j.show()};
j$.prototype.Gb=function(){this.j.hide()};
j$.prototype.u=function(){b8("mdx-privacy-popup-cancel");this.Gb()};
j$.prototype.B=function(){b8("mdx-privacy-popup-confirm");this.Gb()};g.w(Zab,g.X);Zab.prototype.onStateChange=function(a){Yab(this,a.state)};g.w(k$,g.tP);k$.prototype.D=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.gq=g.ic(a,this.j,this),g.uP(this,g.Gk(a,this.j)),a=this.G.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.yj(a),this.enable(!0)):this.enable(!1)};
k$.prototype.j=function(a){return a.key};
k$.prototype.yk=function(a){return"cast-selector-receiver"===a?"Cast...":this.gq[a].name};
k$.prototype.Bg=function(a){g.tP.prototype.Bg.call(this,a);this.G.setOption("remote","currentReceiver",this.gq[a]);this.kb.Gb()};g.w($ab,g.jM);g.k=$ab.prototype;
g.k.create=function(){var a=this.player.S(),b=g.uE(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.K("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.K("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.K("enable_cast_short_lived_lounge_token")};Iab(b,a);this.subscriptions.push(g.Cw("yt-remote-before-disconnect",this.VZ,this));this.subscriptions.push(g.Cw("yt-remote-connection-change",this.w0,this));this.subscriptions.push(g.Cw("yt-remote-receiver-availability-change",this.EQ,
this));this.subscriptions.push(g.Cw("yt-remote-auto-connect",this.u0,this));this.subscriptions.push(g.Cw("yt-remote-receiver-resumed",this.t0,this));this.subscriptions.push(g.Cw("mdx-privacy-popup-confirm",this.X1,this));this.subscriptions.push(g.Cw("mdx-privacy-popup-cancel",this.W1,this));this.EQ()};
g.k.load=function(){this.player.cancelPlayback();g.jM.prototype.load.call(this);this.Bj=new Sab(this,this.player,this.Zb);var a=(a=Qab())?a.currentTime:0;var b=Nab()?new K9(d$(),void 0):null;0==a&&b&&(a=H9(L9(b)));0!==a&&this.Vb(a);abb(this,this.Td,this.Td);this.player.Km(6)};
g.k.unload=function(){this.player.X("mdxautoplaycanceled");this.Zo=this.Dm;g.Le(this.Bj,this.Zb);this.Zb=this.Bj=null;g.jM.prototype.unload.call(this);this.player.Km(5);l$(this)};
g.k.ea=function(){g.Dw(this.subscriptions);g.jM.prototype.ea.call(this)};
g.k.Em=function(a){var b=g.za.apply(1,arguments);this.loaded&&this.Bj.Mk.apply(this.Bj,[a].concat(g.u(b)))};
g.k.getAdState=function(){return this.qg};
g.k.qm=function(){return this.Zb?L9(this.Zb).qm:!1};
g.k.hasNext=function(){return this.Zb?L9(this.Zb).hasNext:!1};
g.k.Vb=function(a,b){this.oP=a||0;this.player.X("progresssync",a,b);this.player.La("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.oP};
g.k.getProgressState=function(){var a=L9(this.Zb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.S().K("web_player_mdx_allow_seeking_change_killswitch")?this.player.Rf():!a.isAdPlaying()&&this.player.Rf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+F9(a):a.B,isAtLiveHead:1>=(a.u?a.j+F9(a):a.j)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.u?a.j+F9(a):a.j,seekableStart:0<
a.C?a.C+F9(a):a.C}};
g.k.nextVideo=function(){this.Zb&&this.Zb.nextVideo()};
g.k.mD=function(){this.Zb&&this.Zb.mD()};
g.k.VZ=function(a){1===a&&(this.iJ=this.Zb?L9(this.Zb):null)};
g.k.w0=function(){var a=Nab()?new K9(d$(),void 0):null;if(a){var b=this.Zo;this.loaded&&this.unload();this.Zb=a;this.iJ=null;b.key!==this.Dm.key&&(this.Zo=b,this.load())}else g.Ke(this.Zb),this.Zb=null,this.loaded&&(this.unload(),(a=this.iJ)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,H9(a)));this.player.X("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.EQ=function(){var a=[this.Dm],b=a.concat,c=Jab();B9()&&g.wy("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.gq=b.call(a,c);a=Lab()||this.Dm;m$(this,a);this.player.La("onMdxReceiversChange")};
g.k.u0=function(){var a=Lab();m$(this,a)};
g.k.t0=function(){this.Zo=Lab()};
g.k.X1=function(){this.vz=!0;l$(this);h$=!1;e$&&g$(e$,1);e$=null};
g.k.W1=function(){this.vz=!1;l$(this);m$(this,this.Dm);this.Zo=this.Dm;h$=!1;e$=null;this.player.playVideo()};
g.k.ag=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.gq;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?bab():m$(this,b)),this.loaded?this.Zo:this.Dm;case "quickCast":return 2===this.gq.length&&"cast-selector-receiver"===this.gq[1].key?(b&&bab(),!0):!1}};
g.k.pK=function(){this.Zb.pK()};
g.k.nj=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.iM("remote",$ab);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:11:56 Jul 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:26:19 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 146.614
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.059
  cdx.remote: 0.055
  esindex: 0.009
  LoadShardBlock: 87.164 (3)
  PetaboxLoader3.datanode: 111.534 (5)
  load_resource: 127.556 (2)
  PetaboxLoader3.resolve: 78.848 (2)
*/