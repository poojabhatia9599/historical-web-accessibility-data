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

(function(g){var window=this;'use strict';var Yib=function(a){return a},Zib=function(a){return a},$ib=function(a,b,c){g.$f(a);
var d=g.gg(a,c);b=g.wg(g.eda(d,b,!0));d!==b&&g.hg(a,c,b);return b},ajb=function(a,b){this.u=a>>>0;
this.j=b>>>0},cjb=function(a){if(!a)return bjb||(bjb=new ajb(0,0));
if(!/^\d+$/.test(a))return null;g.Dda(a);return new ajb(g.Rg,g.Sg)},djb=function(a,b,c){null!=c&&("string"===typeof c&&cjb(c),g.kh(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Rg=b,g.Sg=c,g.ih(a,g.Rg),g.ih(a,g.Sg)):(c=cjb(c),a=a.j,b=c.j,g.ih(a,c.u),g.ih(a,b)))},ejb=function(a,b,c){b=g.nda(b,c);
null!=b&&(g.kh(a,c,0),a.j.j.push(b?1:0))},fjb=function(a,b,c,d,e){b=g.xg(b,d,c);
null!=b&&(c=g.Rda(a,c),e(b,a),g.Sda(a,c))},hjb=function(a){g.M.call(this,a,-1,gjb)},ijb=function(a){g.M.call(this,a)},jjb=function(a){g.M.call(this,a)},kjb=function(a){g.M.call(this,a)},ljb=function(a){g.M.call(this,a)},Z7=function(a){g.Fj(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ra()).toString(36));
return a},$7=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.nga(a.u,b,c)},mjb=function(a){if(a instanceof g.qm)return a;
if("function"==typeof a.Vj)return a.Vj(!1);if(g.Ka(a)){var b=0,c=new g.qm;c.next=function(){for(;;){if(b>=a.length)return g.E2;if(b in a)return g.rm(a[b++]);b++}};
return c}throw Error("Not implemented");},njb=function(a,b,c){if(g.Ka(a))g.Fb(a,b,c);
else for(a=mjb(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},ojb=function(a,b){var c=[];
njb(b,function(d){try{var e=g.Qo.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Tka(e)&&c.push(d)},a);
return c},pjb=function(a,b){ojb(a,b).forEach(function(c){g.Qo.prototype.remove.call(this,c)},a)},qjb=function(a){if(a.oa){if(a.oa.locationOverrideToken)return{locationOverrideToken:a.oa.locationOverrideToken};
if(null!=a.oa.latitudeE7&&null!=a.oa.longitudeE7)return{latitudeE7:a.oa.latitudeE7,longitudeE7:a.oa.longitudeE7}}return null},rjb=function(a,b){g.nb(a,b)||a.push(b)},sjb=function(a){var b=0,c;
for(c in a)b++;return b},tjb=function(a,b){return g.Sc(a,b)},ujb=function(a){try{return g.D.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},a8=function(a){if(g.D.JSON)try{return g.D.JSON.parse(a)}catch(b){}return ujb(a)},vjb=function(a,b,c,d){var e=new g.xj(null);
a&&g.yj(e,a);b&&g.zj(e,b);c&&g.Aj(e,c);d&&(e.B=d);return e},b8=function(a,b){g.iz[a]=!0;
var c=g.gz();c&&c.publish.apply(c,arguments);g.iz[a]=!1},c8=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.compatibleSenderThemes=new Set;this.experiments=new Set;this.theme="u";new g.qo;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=
a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",wjb(this,a.capabilities||""),xjb(this,a.compatibleSenderThemes||""),yjb(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=
a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},wjb=function(a,b){a.capabilities.clear();
g.vm(b.split(","),g.Qa(tjb,zjb)).forEach(function(c){a.capabilities.add(c)})},xjb=function(a,b){a.compatibleSenderThemes.clear();
g.vm(b.split(","),g.Qa(tjb,Ajb)).forEach(function(c){a.compatibleSenderThemes.add(c)})},yjb=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},d8=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},e8=function(a,b){return!!b&&(a.id==b||a.uuid==b)},Bjb=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},Cjb=function(a){return new d8(a)},Djb=function(a){return Array.isArray(a)?g.Lg(a,Cjb):[]},f8=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},Ejb=function(a){return Array.isArray(a)?"["+g.Lg(a,f8).join(",")+"]":"null"},Fjb=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Gjb=function(a){return g.Lg(a,function(b){return{key:b.id,
name:b.name}})},Hjb=function(a,b){return g.ib(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},g8=function(a,b){return g.ib(a,function(c){return e8(c,b)})},Ijb=function(){var a=(0,g.SA)();
a&&pjb(a,a.j.Vj(!0))},h8=function(){var a=g.VA("yt-remote-connected-devices")||[];
g.Cb(a);return a},Jjb=function(a){if(g.ob(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Lg(a,function(d,e){return 0==e?d:d.substring(c.length)})},Kjb=function(a){g.UA("yt-remote-connected-devices",a,86400)},i8=function(){if(Ljb)return Ljb;
var a=g.VA("yt-remote-device-id");a||(a=Fjb(),g.UA("yt-remote-device-id",a,31536E3));for(var b=h8(),c=1,d=a;g.nb(b,d);)c++,d=a+"#"+c;return Ljb=d},Mjb=function(){var a=h8(),b=i8();
g.XA()&&g.Eb(a,b);a=Jjb(a);if(g.ob(a))try{g.aw("remote_sid")}catch(c){}else try{g.Zv("remote_sid",a.join(","),-1)}catch(c){}},Njb=function(){return g.VA("yt-remote-session-browser-channel")},Ojb=function(){return g.VA("yt-remote-local-screens")||[]},Pjb=function(){g.UA("yt-remote-lounge-token-expiration",!0,86400)},Qjb=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Lg(Ojb(),function(d){return d.loungeToken}),c=g.Lg(a,function(d){return d.loungeToken});
g.Nk(c,function(d){return!g.nb(b,d)})&&Pjb();
g.UA("yt-remote-local-screens",a,31536E3)},j8=function(a){a||(g.WA("yt-remote-session-screen-id"),g.WA("yt-remote-session-video-id"));
Mjb();a=h8();g.qb(a,i8());Kjb(a)},Rjb=function(){if(!k8){var a=g.Zo();
a&&(k8=new g.No(a))}},Sjb=function(){Rjb();
return k8?!!k8.get("yt-remote-use-staging-server"):!1},Tjb=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},Ujb=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},Vjb=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},l8=function(a){a.length?Wjb(a.shift(),function(){l8(a)}):Xjb()},Yjb=function(a){return"chrome-extension://"+a+"/cast_sender.js"},Wjb=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Wi(d,g.Jd(a));(document.head||document.documentElement).appendChild(d)},Zjb=function(){var a=Tjb(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20221231235216/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20221231235216/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},Xjb=function(){var a=Vjb();
a&&a(!1,"No cast extension found")},akb=function(){if($jb){var a=2,b=Vjb(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Wjb("//web.archive.org/web/20221231235216/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Xjb,c)}},bkb=function(){akb();
var a=Zjb();a.push("//web.archive.org/web/20221231235216/https://www.gstatic.com/eureka/clank/cast_sender.js");l8(a)},dkb=function(){akb();
var a=Zjb();a.push.apply(a,g.u(ckb.map(Yjb)));a.push("//web.archive.org/web/20221231235216/https://www.gstatic.com/eureka/clank/cast_sender.js");l8(a)},ekb=function(){this.j=m8();
this.j.In("/client_streamz/youtube/living_room/mdx/channel/opened",{Qg:3,Pg:"channel_type"})},fkb=function(a,b){a.j.cn("/client_streamz/youtube/living_room/mdx/channel/opened",b)},gkb=function(){this.j=m8();
this.j.In("/client_streamz/youtube/living_room/mdx/channel/closed",{Qg:3,Pg:"channel_type"})},hkb=function(a,b){a.j.cn("/client_streamz/youtube/living_room/mdx/channel/closed",b)},ikb=function(){this.j=m8();
this.j.In("/client_streamz/youtube/living_room/mdx/channel/message_received",{Qg:3,Pg:"channel_type"})},jkb=function(a,b){a.j.cn("/client_streamz/youtube/living_room/mdx/channel/message_received",b)},kkb=function(){this.j=m8();
this.j.In("/client_streamz/youtube/living_room/mdx/channel/error",{Qg:3,Pg:"channel_type"})},lkb=function(a,b){a.j.cn("/client_streamz/youtube/living_room/mdx/channel/error",b)},mkb=function(){this.j=m8();
this.j.In("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},nkb=function(){this.j=m8();
this.j.In("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},n8=function(a,b,c){g.E.call(this);
this.I=null!=c?(0,g.Oa)(a,c):a;this.di=b;this.D=(0,g.Oa)(this.PX,this);this.j=!1;this.u=0;this.B=this.Cc=null;this.C=[]},o8=function(a,b,c){g.E.call(this);
this.C=null!=c?a.bind(c):a;this.di=b;this.B=null;this.j=!1;this.u=0;this.Cc=null},okb=function(a){a.Cc=g.tf(function(){a.Cc=null;
a.j&&!a.u&&(a.j=!1,okb(a))},a.di);
var b=a.B;a.B=null;a.C.apply(null,b)},p8=function(){},pkb=function(){g.eb.call(this,"p")},qkb=function(){g.eb.call(this,"o")},skb=function(){return rkb=rkb||new g.rd},tkb=function(a){g.eb.call(this,"serverreachability",a)},q8=function(a){var b=skb();
b.dispatchEvent(new tkb(b,a))},ukb=function(a){g.eb.call(this,"statevent",a)},r8=function(a){var b=skb();
b.dispatchEvent(new ukb(b,a))},vkb=function(a,b,c,d){g.eb.call(this,"timingevent",a);
this.size=b;this.Dy=d},s8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.D.setTimeout(function(){a()},b)},wkb=function(){},t8=function(a,b,c,d){this.D=a;
this.C=b;this.Ec=c;this.Ac=d||1;this.gb=new g.Kj(this);this.Fb=45E3;a=g.WH?125:void 0;this.kb=new g.sf(a);this.Ma=null;this.B=!1;this.T=this.Xa=this.J=this.Pa=this.ya=this.Rb=this.Z=null;this.oa=[];this.j=null;this.ea=0;this.I=this.Aa=null;this.Pb=-1;this.Ka=!1;this.tb=0;this.Wa=null;this.zc=this.Va=this.dc=this.Ba=!1;this.u=new xkb},xkb=function(){this.B=null;
this.j="";this.u=!1},zkb=function(a,b,c){a.Pa=1;
a.J=Z7(b.clone());a.T=c;a.Ba=!0;ykb(a,null)},ykb=function(a,b){a.ya=Date.now();
u8(a);a.Xa=a.J.clone();$7(a.Xa,"t",a.Ac);a.ea=0;var c=a.D.Pa;a.u=new xkb;a.j=Akb(a.D,c?b:null,!a.T);0<a.tb&&(a.Wa=new o8((0,g.Oa)(a.WO,a,a.j),a.tb));a.gb.Qa(a.j,"readystatechange",a.SX);b=a.Ma?g.Yc(a.Ma):{};a.T?(a.Aa||(a.Aa="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Xa,a.Aa,a.T,b)):(a.Aa="GET",a.j.send(a.Xa,a.Aa,null,b));q8(1)},Bkb=function(a){return a.j?"GET"==a.Aa&&2!=a.Pa&&a.D.Oe:!1},Fkb=function(a,b,c){for(var d=!0,e;!a.Ka&&a.ea<c.length;)if(e=Ckb(a,c),e==v8){4==
b&&(a.I=4,r8(14),d=!1);
break}else if(e==Dkb){a.I=4;r8(15);d=!1;break}else Ekb(a,e);Bkb(a)&&e!=v8&&e!=Dkb&&(a.u.j="",a.ea=0);4!=b||0!=c.length||a.u.u||(a.I=1,r8(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.zc&&(a.zc=!0,a.D.TL(a)):(w8(a),x8(a))},Ckb=function(a,b){var c=a.ea,d=b.indexOf("\n",c);
if(-1==d)return v8;c=Number(b.substring(c,d));if(isNaN(c))return Dkb;d+=1;if(d+c>b.length)return v8;b=b.slice(d,d+c);a.ea=d+c;return b},u8=function(a){a.Rb=Date.now()+a.Fb;
Gkb(a,a.Fb)},Gkb=function(a,b){if(null!=a.Z)throw Error("WatchDog timer not null");
a.Z=s8((0,g.Oa)(a.QX,a),b)},y8=function(a){a.Z&&(g.D.clearTimeout(a.Z),a.Z=null)},x8=function(a){a.D.Eg()||a.Ka||Hkb(a.D,a)},w8=function(a){y8(a);
g.ab(a.Wa);a.Wa=null;a.kb.stop();a.gb.yg();if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},Ekb=function(a,b){try{var c=a.D;
if(0!=c.dh&&(c.j==a||Ikb(c.u,a)))if(!a.Va&&Ikb(c.u,a)&&3==c.dh){try{var d=c.Xe.j.parse(b)}catch(z){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.T){if(c.j)if(c.j.ya+3E3<a.ya)z8(c),A8(c);else break a;Jkb(c);r8(18)}}else c.Md=e[1],0<c.Md-c.Va&&37500>e[2]&&c.kb&&0==c.oa&&!c.ea&&(c.ea=s8((0,g.Oa)(c.TX,c),6E3));if(1>=Kkb(c.u)&&c.Fd){try{c.Fd()}catch(z){}c.Fd=void 0}}else B8(c,11)}else if((a.Va||c.j==a)&&z8(c),!g.Lb(b))for(e=c.Xe.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Va=f[0];
f=f[1];if(2==c.dh)if("c"==f[0]){c.C=f[1];c.zc=f[2];var h=f[3];null!=h&&(c.XO=h);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Xa=1.5*l);d=c;var m=a.vK();if(m){var n=g.ti(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.Ob(n,"spdy")||g.Ob(n,"quic")||g.Ob(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(Lkb(p,p.u),p.u=null))}if(d.Ba){var q=g.ti(m,"X-HTTP-Session-Id");q&&(d.Xd=q,g.Fj(d.Ma,d.Ba,q))}}c.dh=3;c.D&&c.D.dP();c.Lc&&(c.jd=Date.now()-a.ya);d=c;var r=a;d.xd=Mkb(d,d.Pa?d.zc:null,d.Ac);if(r.Va){Nkb(d.u,
r);var w=r,x=d.Xa;x&&w.setTimeout(x);w.Z&&(y8(w),u8(w));d.j=r}else Okb(d);0<c.B.length&&C8(c)}else"stop"!=f[0]&&"close"!=f[0]||B8(c,7);else 3==c.dh&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?B8(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.cP(f),c.oa=0)}q8(4)}catch(z){}},Pkb=function(a,b){this.j=a;
this.map=b;this.context=null},Qkb=function(a){this.D=a||10;
g.D.PerformanceNavigationTiming?(a=g.D.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.D.chrome&&g.D.chrome.loadTimes&&g.D.chrome.loadTimes()&&g.D.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},Rkb=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},Kkb=function(a){return a.u?1:a.j?a.j.size:0},Ikb=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},Lkb=function(a,
b){a.j?a.j.add(b):a.u=b},Nkb=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},Skb=function(a){if(null!=a.u)return a.B.concat(a.u.oa);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.t(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.oa);return b}return g.ub(a.B)},Tkb=function(a,b){var c=new wkb;
if(g.D.Image){var d=new Image;d.onload=g.Qa(D8,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Qa(D8,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Qa(D8,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Qa(D8,c,d,"TestLoadImage: timeout",!1,b);g.D.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},D8=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},Ukb=function(){this.j=new p8},Vkb=function(a,b,c){var d=c||"";
try{g.wj(a,function(e,f){var h=e;g.La(e)&&(h=g.Oh(e));b.push(d+f+"="+encodeURIComponent(h))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},E8=function(a,b,c){return c&&c.A1?c.A1[a]||b:b},Wkb=function(a){this.B=[];
this.zc=this.xd=this.Ma=this.Ac=this.j=this.Xd=this.Ba=this.Ka=this.J=this.Rb=this.Z=null;this.qf=this.Wa=0;this.mf=E8("failFast",!1,a);this.kb=this.ea=this.T=this.I=this.D=null;this.Ec=!0;this.Md=this.Va=-1;this.dc=this.oa=this.ya=0;this.lf=E8("baseRetryDelayMs",5E3,a);this.Rf=E8("retryDelaySeedMs",1E4,a);this.nf=E8("forwardChannelMaxRetries",2,a);this.Gd=E8("forwardChannelRequestTimeoutMs",2E4,a);this.Wd=a&&a.Dab||void 0;this.Oe=a&&a.Bab||!1;this.Xa=void 0;this.Pa=a&&a.B6||!1;this.C="";this.u=new Qkb(a&&
a.t9a);this.Xe=new Ukb;this.Fb=a&&a.H9a||!1;this.tb=a&&a.z9a||!1;this.Fb&&this.tb&&(this.tb=!1);this.Sf=a&&a.n9a||!1;a&&a.J9a&&(this.Ec=!1);this.Lc=!this.Fb&&this.Ec&&a&&a.x9a||!1;this.Fd=void 0;this.jd=0;this.gb=!1;this.Pb=this.Aa=null},A8=function(a){a.j&&(Xkb(a),a.j.cancel(),a.j=null)},Ykb=function(a){A8(a);
a.T&&(g.D.clearTimeout(a.T),a.T=null);z8(a);a.u.cancel();a.I&&("number"===typeof a.I&&g.D.clearTimeout(a.I),a.I=null)},C8=function(a){Rkb(a.u)||a.I||(a.I=!0,g.hf(a.ZO,a),a.ya=0)},$kb=function(a,b){if(Kkb(a.u)>=a.u.C-(a.I?1:0))return!1;
if(a.I)return a.B=b.oa.concat(a.B),!0;if(1==a.dh||2==a.dh||a.ya>=(a.mf?0:a.nf))return!1;a.I=s8((0,g.Oa)(a.ZO,a,b),Zkb(a,a.ya));a.ya++;return!0},blb=function(a,b){var c;
b?c=b.Ec:c=a.Wa++;var d=a.Ma.clone();g.Fj(d,"SID",a.C);g.Fj(d,"RID",c);g.Fj(d,"AID",a.Va);F8(a,d);a.J&&a.Z&&g.Jj(d,a.J,a.Z);c=new t8(a,a.C,c,a.ya+1);null===a.J&&(c.Ma=a.Z);b&&(a.B=b.oa.concat(a.B));b=alb(a,c,1E3);c.setTimeout(Math.round(.5*a.Gd)+Math.round(.5*a.Gd*Math.random()));Lkb(a.u,c);zkb(c,d,b)},F8=function(a,b){a.Ka&&g.Jc(a.Ka,function(c,d){g.Fj(b,d,c)});
a.D&&g.wj({},function(c,d){g.Fj(b,d,c)})},alb=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Oa)(a.D.UX,a.D,a):null;a:for(var e=a.B,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].j,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{Vkb(p,h,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=h.join("&");break a}}a=a.B.splice(0,c);b.oa=a;return d},Okb=function(a){a.j||a.T||(a.dc=1,g.hf(a.YO,a),a.oa=0)},Jkb=function(a){if(a.j||a.T||3<=a.oa)return!1;
a.dc++;a.T=s8((0,g.Oa)(a.YO,a),Zkb(a,a.oa));a.oa++;return!0},Xkb=function(a){null!=a.Aa&&(g.D.clearTimeout(a.Aa),a.Aa=null)},clb=function(a){a.j=new t8(a,a.C,"rpc",a.dc);
null===a.J&&(a.j.Ma=a.Z);a.j.tb=0;var b=a.xd.clone();g.Fj(b,"RID","rpc");g.Fj(b,"SID",a.C);g.Fj(b,"CI",a.kb?"0":"1");g.Fj(b,"AID",a.Va);g.Fj(b,"TYPE","xmlhttp");F8(a,b);a.J&&a.Z&&g.Jj(b,a.J,a.Z);a.Xa&&a.j.setTimeout(a.Xa);var c=a.j;a=a.zc;c.Pa=1;c.J=Z7(b.clone());c.T=null;c.Ba=!0;ykb(c,a)},z8=function(a){null!=a.ea&&(g.D.clearTimeout(a.ea),a.ea=null)},Hkb=function(a,b){var c=null;
if(a.j==b){z8(a);Xkb(a);a.j=null;var d=2}else if(Ikb(a.u,b))c=b.oa,Nkb(a.u,b),d=1;else return;if(0!=a.dh)if(b.B)if(1==d){c=b.T?b.T.length:0;b=Date.now()-b.ya;var e=a.ya;d=skb();d.dispatchEvent(new vkb(d,c,b,e));C8(a)}else Okb(a);else{var f=b.Pb;e=b.getLastError();if(3==e||0==e&&0<f||!(1==d&&$kb(a,b)||2==d&&Jkb(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:B8(a,5);break;case 4:B8(a,10);break;case 3:B8(a,6);break;default:B8(a,2)}}},Zkb=function(a,b){var c=a.lf+Math.floor(Math.random()*
a.Rf);
a.isActive()||(c*=2);return c*b},B8=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Oa)(a.H6,a);c||(c=new g.xj("//web.archive.org/web/20221231235216/https://www.google.com/images/cleardot.gif"),g.D.location&&"http"==g.D.location.protocol||g.yj(c,"https"),Z7(c));Tkb(c.toString(),d)}else r8(2);a.dh=0;a.D&&a.D.bP(b);dlb(a);Ykb(a)},dlb=function(a){a.dh=0;
a.Pb=[];if(a.D){var b=Skb(a.u);if(0!=b.length||0!=a.B.length)g.wb(a.Pb,b),g.wb(a.Pb,a.B),a.u.B.length=0,g.ub(a.B),a.B.length=0;a.D.aP()}},elb=function(a){if(0==a.dh)return a.Pb;
var b=[];g.wb(b,Skb(a.u));g.wb(b,a.B);return b},Mkb=function(a,b,c){var d=g.Gj(c);
""!=d.j?(b&&g.zj(d,b+"."+d.j),g.Aj(d,d.C)):(d=g.D.location,d=vjb(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.Ba;c=a.Xd;b&&c&&g.Fj(d,b,c);g.Fj(d,"VER",a.XO);F8(a,d);return d},Akb=function(a,b,c){if(b&&!a.Pa)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.Oe&&!a.Wd?new g.gi(new g.sj({KV:!0})):new g.gi(a.Wd);b.J=a.Pa;return b},flb=function(){},glb=function(){if(g.Je&&!g.Cc(10))throw Error("Environmental error: no available transport.");
},H8=function(a,b){g.rd.call(this);
this.j=new Wkb(b);this.I=a;this.u=b&&b.j2||null;a=b&&b.h2||null;b&&b.s9a&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.Z=a;a=b&&b.q$a||null;b&&b.sT&&(a?a["X-WebChannel-Content-Type"]=b.sT:a={"X-WebChannel-Content-Type":b.sT});b&&b.dR&&(a?a["X-WebChannel-Client-Profile"]=b.dR:a={"X-WebChannel-Client-Profile":b.dR});this.j.Rb=a;(a=b&&b.o$a)&&!g.Lb(a)&&(this.j.J=a);this.J=b&&b.B6||!1;this.D=b&&b.aab||!1;(b=b&&b.u1)&&!g.Lb(b)&&(this.j.Ba=b,g.Rc(this.u,b)&&g.Vc(this.u,
b));this.C=new G8(this)},hlb=function(a){pkb.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.Nc(b))?g.Wc(b,this.metadataKey):b:this.data=a},ilb=function(a){qkb.call(this);
this.status=1;this.errorCode=a},G8=function(a){this.j=a},jlb=function(a,b){this.u=a;
this.j=b},klb=function(a){return elb(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?ujb(b):b);return b})},I8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.D.setTimeout(function(){a()},b)},K8=function(a){J8.dispatchEvent(new llb(J8,a))},llb=function(a){g.eb.call(this,"statevent",a)},L8=function(a,b,c,d){this.j=a;
this.C=b;this.J=c;this.I=d||1;this.u=45E3;this.B=new g.Kj(this);this.D=new g.sf;this.D.setInterval(250)},nlb=function(a,b,c){a.hw=1;
a.Dq=Z7(b.clone());a.vt=c;a.Ba=!0;mlb(a,null)},olb=function(a,b,c,d,e){a.hw=1;
a.Dq=Z7(b.clone());a.vt=null;a.Ba=c;e&&(a.sV=!1);mlb(a,d)},mlb=function(a,b){a.gw=Date.now();
M8(a);a.Fq=a.Dq.clone();$7(a.Fq,"t",a.I);a.hD=0;a.Ci=a.j.MH(a.j.Bz()?b:null);0<a.KH&&(a.fD=new o8((0,g.Oa)(a.eP,a,a.Ci),a.KH));a.B.Qa(a.Ci,"readystatechange",a.WX);b=a.ut?g.Yc(a.ut):{};a.vt?(a.gD="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Ci.send(a.Fq,a.gD,a.vt,b)):(a.gD="GET",a.sV&&!g.Fc&&(b.Connection="close"),a.Ci.send(a.Fq,a.gD,null,b));a.j.Fm(1)},rlb=function(a,b){var c=a.hD,d=b.indexOf("\n",c);
if(-1==d)return plb;c=Number(b.substring(c,d));if(isNaN(c))return qlb;d+=1;if(d+c>b.length)return plb;b=b.slice(d,d+c);a.hD=d+c;return b},tlb=function(a,b){a.gw=Date.now();
M8(a);var c=b?window.location.hostname:"";a.Fq=a.Dq.clone();g.Fj(a.Fq,"DOMAIN",c);g.Fj(a.Fq,"t",a.I);try{a.Tm=new ActiveXObject("htmlfile")}catch(m){N8(a);a.Eq=7;K8(22);O8(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in P8)f=P8[f];else if(f in slb)f=P8[f]=slb[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
P8[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";g.Ed("b/12014412");c=g.Wd(d);a.Tm.open();a.Tm.write(g.Vd(c));a.Tm.close();a.Tm.parentWindow.m=(0,g.Oa)(a.n5,a);a.Tm.parentWindow.d=(0,g.Oa)(a.yU,a,!0);a.Tm.parentWindow.rpcClose=(0,g.Oa)(a.yU,a,!1);c=a.Tm.createElement("DIV");a.Tm.parentWindow.document.body.appendChild(c);d=g.Od(a.Fq.toString());d=g.pe(g.Ld(d));g.Ed("b/12014412");d=g.Wd('<iframe src="'+d+'"></iframe>');g.Wba(c,d);a.j.Fm(1)},M8=function(a){a.LH=
Date.now()+a.u;
ulb(a,a.u)},ulb=function(a,b){if(null!=a.jw)throw Error("WatchDog timer not null");
a.jw=I8((0,g.Oa)(a.VX,a),b)},vlb=function(a){a.jw&&(g.D.clearTimeout(a.jw),a.jw=null)},O8=function(a){a.j.Eg()||a.qt||a.j.iD(a)},N8=function(a){vlb(a);
g.ab(a.fD);a.fD=null;a.D.stop();a.B.yg();if(a.Ci){var b=a.Ci;a.Ci=null;b.abort();b.dispose()}a.Tm&&(a.Tm=null)},wlb=function(a,b){try{a.j.fP(a,b),a.j.Fm(4)}catch(c){}},ylb=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;xlb(a,b,function(h){h?c(!0):g.D.setTimeout(function(){ylb(a,b,c,d,f)},f)})}},xlb=function(a,b,c){var d=new Image;
d.onload=function(){try{Q8(d),c(!0)}catch(e){}};
d.onerror=function(){try{Q8(d),c(!1)}catch(e){}};
d.onabort=function(){try{Q8(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{Q8(d),c(!1)}catch(e){}};
g.D.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},Q8=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},zlb=function(a){this.j=a;
this.u=new p8},Alb=function(a){var b=R8(a.j,a.Wz,"/mail/images/cleardot.gif");
Z7(b);ylb(b.toString(),5E3,(0,g.Oa)(a.z_,a),3,2E3);a.Fm(1)},Blb=function(a){var b=a.j.Z;
if(null!=b)K8(5),b?(K8(11),S8(a.j,a,!1)):(K8(12),S8(a.j,a,!0));else if(a.cj=new L8(a),a.cj.ut=a.NH,b=a.j,b=R8(b,b.Bz()?a.Az:null,a.OH),K8(5),!g.Je||g.Cc(10))$7(b,"TYPE","xmlhttp"),olb(a.cj,b,!1,a.Az,!1);else{$7(b,"TYPE","html");var c=a.cj;a=!!a.Az;c.hw=3;c.Dq=Z7(b.clone());tlb(c,a)}},Clb=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new p8;this.T=a||null;this.Z=null!=b?b:null;this.J=c||!1},Dlb=function(a,b){this.j=a;
this.map=b;this.context=null},Elb=function(a,b,c,d){g.eb.call(this,"timingevent",a);
this.size=b;this.Dy=d},Flb=function(a){g.eb.call(this,"serverreachability",a)},Hlb=function(a){a.XX(1,0);
a.jD=R8(a,null,a.PH);Glb(a)},Ilb=function(a){a.Tq&&(a.Tq.abort(),a.Tq=null);
a.og&&(a.og.cancel(),a.og=null);a.bp&&(g.D.clearTimeout(a.bp),a.bp=null);T8(a);a.pj&&(a.pj.cancel(),a.pj=null);a.Gq&&(g.D.clearTimeout(a.Gq),a.Gq=null)},Jlb=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new Dlb(a.YX++,b));2!=a.j&&3!=a.j||Glb(a)},Klb=function(a){var b=0;
a.og&&b++;a.pj&&b++;return b},Glb=function(a){a.pj||a.Gq||(a.Gq=I8((0,g.Oa)(a.jP,a),0),a.mw=0)},Nlb=function(a,b){if(1==a.j){if(!b){a.Dz=Math.floor(1E5*Math.random());
b=a.Dz++;var c=new L8(a,"",b);c.ut=a.Ym;var d=Llb(a),e=a.jD.clone();g.Fj(e,"RID",b);g.Fj(e,"CVER","1");U8(a,e);nlb(c,e,d);a.pj=c;a.j=2}}else 3==a.j&&(b?Mlb(a,b):0==a.u.length||a.pj||Mlb(a))},Mlb=function(a,b){if(b)if(6<a.wt){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.Dz-1;b=Llb(a)}else c=b.J,b=b.vt;else c=a.Dz++,b=Llb(a);var d=a.jD.clone();g.Fj(d,"SID",a.C);g.Fj(d,"RID",c);g.Fj(d,"AID",a.nw);U8(a,d);c=new L8(a,a.C,c,a.mw+1);c.ut=a.Ym;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.pj=c;nlb(c,d,b)},U8=function(a,b){a.Sh&&(a=a.Sh.nP())&&g.Jc(a,function(c,d){g.Fj(b,d,c)})},Llb=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.wt&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Pv:e.Pv},f++){e.Pv=a.u[f].j;var h=a.u[f].map;e.Pv=6>=a.wt?f:e.Pv-d;try{g.Jc(h,function(l){return function(m,n){c.push("req"+l.Pv+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Pv+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},Olb=function(a){a.og||a.bp||(a.I=1,a.bp=I8((0,g.Oa)(a.iP,a),0),a.lw=0)},Qlb=function(a){if(a.og||a.bp||3<=a.lw)return!1;
a.I++;a.bp=I8((0,g.Oa)(a.iP,a),Plb(a,a.lw));a.lw++;return!0},S8=function(a,b,c){a.aH=c;
a.Zm=b.Zo;a.J||Hlb(a)},T8=function(a){null!=a.xt&&(g.D.clearTimeout(a.xt),a.xt=null)},Plb=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},V8=function(a,b){if(2==b||9==b){var c=null;
a.Sh&&(c=null);var d=(0,g.Oa)(a.G6,a);c||(c=new g.xj("//web.archive.org/web/20221231235216/https://www.google.com/images/cleardot.gif"),Z7(c));xlb(c.toString(),1E4,d)}else K8(2);Rlb(a,b)},Rlb=function(a,b){a.j=0;
a.Sh&&a.Sh.kP(b);Slb(a);Ilb(a)},Slb=function(a){a.j=0;
a.Zm=-1;if(a.Sh)if(0==a.B.length&&0==a.u.length)a.Sh.QH();else{var b=g.ub(a.B),c=g.ub(a.u);a.B.length=0;a.u.length=0;a.Sh.QH(b,c)}},R8=function(a,b,c){var d=g.Gj(c);
if(""!=d.j)b&&g.zj(d,b+"."+d.j),g.Aj(d,d.C);else{var e=window.location;d=vjb(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Cz&&g.Jc(a.Cz,function(f,h){g.Fj(d,h,f)});
g.Fj(d,"VER",a.wt);U8(a,d);return d},Tlb=function(){},Ulb=function(){this.j=[];
this.u=[]},Vlb=function(a){g.eb.call(this,"channelMessage");
this.message=a},Wlb=function(a){g.eb.call(this,"channelError");
this.error=a},Xlb=function(a,b){this.action=a;
this.params=b||{}},W8=function(a,b){g.E.call(this);
this.j=new g.Zn(this.f5,0,this);g.H(this,this.j);this.di=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Oa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Oa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},Ylb=function(){},m8=function(){if(!X8){X8=new g.Af(new Ylb);
var a=g.pv("client_streamz_web_flush_count",-1);-1!==a&&(X8.C=a)}return X8},Zlb=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ya=a;this.J=b;this.B=new g.Mo;this.u=new W8(this.e6,this);this.j=null;this.ea=!1;this.I=null;this.Z="";this.T=this.D=0;this.C=[];this.Pa=c;this.oa=d;this.Va=e;this.Ma=new ekb;this.Aa=new gkb;this.Ka=new ikb;this.Ba=new kkb;this.Wa=new mkb;this.Xa=new nkb},$lb=function(a){if(a.j){var b=a.oa(),c=a.j.Ym||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Ym=c}},Y8=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.Wh(4,a))||"";b&&(this.port=":"+b);this.domain=g.Xh(a)||"";a=g.Wb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Vb(a,"10.0")&&(this.u=!1))},Z8=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.ci(c+b,{})},amb=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Qa(a.C,d,!0),onError:g.Qa(a.B,e),onTimeout:g.Qa(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Pv(b,a)},bmb=function(a,b){g.rd.call(this);
var c=this;this.md=a();this.md.subscribe("handlerOpened",this.cY,this);this.md.subscribe("handlerClosed",this.aY,this);this.md.subscribe("handlerError",function(d,e){c.onError(e)});
this.md.subscribe("handlerMessage",this.bY,this);this.j=b},cmb=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new glb:e;var f=void 0===f?new g.Mo:f;this.pathPrefix=a;this.j=b;this.ya=c;this.D=f;this.T=null;this.Z=this.J=0;this.channel=null;this.I=0;this.B=new W8(function(){d.B.isActive();var h;0===(null==(h=d.channel)?void 0:Kkb((new jlb(h,h.j)).j.u))&&d.connect(d.T,d.J)});
this.C={};this.u={};this.ea=!1;this.logger=null;this.oa=[];this.Tg=void 0;this.Ma=new ekb;this.Aa=new gkb;this.Ka=new ikb;this.Ba=new kkb},dmb=function(a){g.gd(a.channel,"m",function(){a.I=3;
a.B.reset();a.T=null;a.J=0;for(var b=g.t(a.oa),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.oa=[];a.ma("webChannelOpened");fkb(a.Ma,"WEB_CHANNEL")});
g.gd(a.channel,"n",function(){a.I=0;a.B.isActive()||a.ma("webChannelClosed");var b,c=null==(b=a.channel)?void 0:klb(new jlb(b,b.j));c&&(a.oa=[].concat(g.u(c)));hkb(a.Aa,"WEB_CHANNEL")});
g.gd(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.ma("webChannelMessage",new Xlb(c[0],c[1]));a.Tg=b.statusCode;jkb(a.Ka,"WEB_CHANNEL")});
g.gd(a.channel,"o",function(){401===a.Tg||a.B.start();a.ma("webChannelError");lkb(a.Ba,"WEB_CHANNEL")})},emb=function(a){var b=a.ya();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},fmb=function(a){g.rd.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.fY,this);this.j.subscribe("webChannelClosed",this.dY,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.eY,this)},gmb=function(a,b,c,d,e){function f(){return new Zlb(Z8(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.ov("enable_mdx_web_channel_desktop")?new fmb(function(){return new cmb(Z8(a,"/wc"),b,c)}):new bmb(f,e)},kmb=function(){var a=hmb;
imb();$8.push(a);jmb()},a9=function(a,b){imb();
var c=lmb(a,String(b));g.ob($8)?mmb(c):(jmb(),g.Fb($8,function(d){d(c)}))},b9=function(a){a9("CP",a)},imb=function(){$8||($8=g.Fa("yt.mdx.remote.debug.handlers_")||[],g.Da("yt.mdx.remote.debug.handlers_",$8))},mmb=function(a){var b=(c9+1)%50;
c9=b;d9[b]=a;e9||(e9=49==b)},jmb=function(){var a=$8;
if(d9[0]){var b=e9?c9:-1;do{b=(b+1)%50;var c=d9[b];g.Fb(a,function(d){d(c)})}while(b!=c9);
d9=Array(50);c9=-1;e9=!1}},lmb=function(a,b){var c=(Date.now()-nmb)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},f9=function(a){g.FB.call(this);
this.I=a;this.screens=[]},omb=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},pmb=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.vm(a.screens,function(f){return!!Hjb(b,f)});
for(var d=0,e=b.length;d<e;d++)c=omb(a,b[d])||c;return c},qmb=function(a,b){var c=a.screens.length;
a.screens=g.vm(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},rmb=function(a,b,c,d,e){g.FB.call(this);
this.B=a;this.J=b;this.C=c;this.I=d;this.D=e;this.u=0;this.j=null;this.Cc=NaN},h9=function(a){f9.call(this,"LocalScreenService");
this.u=a;this.j=NaN;g9(this);this.info("Initializing with "+Ejb(this.screens))},smb=function(a){if(a.screens.length){var b=g.Lg(a.screens,function(d){return d.id}),c=Z8(a.u,"/pairing/get_lounge_token_batch");
amb(a.u,c,{screen_ids:b.join(",")},(0,g.Oa)(a.Q0,a),(0,g.Oa)(a.P0,a))}},g9=function(a){if(g.ov("deprecate_pair_servlet_enabled"))return pmb(a,[]);
var b=Djb(Ojb());b=g.vm(b,function(c){return!c.uuid});
return pmb(a,b)},i9=function(a,b){Qjb(g.Lg(a.screens,Bjb));
b&&Pjb()},umb=function(a,b){g.FB.call(this);
this.I=b;b=(b=g.VA("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=d.length,f=0;f<e;++f){var h=d[f].id;c[h]=g.nb(b,h)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;tmb("Initialized with "+g.Oh(this.j))},vmb=function(a,b,c){var d=Z8(a.D,"/pairing/get_screen_availability");
amb(a.D,d,{lounge_token:b.token},(0,g.Oa)(function(e){e=e.screens||[];for(var f=e.length,h=0;h<f;++h)if(e[h].loungeToken==b.token){c("online"==e[h].status);return}c(!1)},a),(0,g.Oa)(function(){c(!1)},a))},xmb=function(a,b){a:if(sjb(b)!=sjb(a.j))var c=!1;
else{c=g.Pc(b);for(var d=c.length,e=0;e<d;++e)if(!a.j[c[e]]){c=!1;break a}c=!0}c||(tmb("Updated online screens: "+g.Oh(a.j)),a.j=b,a.ma("screenChange"));wmb(a)},j9=function(a){isNaN(a.B)||g.Mv(a.B);
a.B=g.Kv((0,g.Oa)(a.TM,a),0<a.C&&a.C<g.Ra()?2E4:1E4)},tmb=function(a){a9("OnlineScreenService",a)},ymb=function(a){var b={};
g.Fb(a.I(),function(c){c.token?b[c.token]=c.id:this.If("Requesting availability of screen w/o lounge token.")});
return b},wmb=function(a){a=g.Pc(g.Kc(a.j,function(b){return b}));
g.Cb(a);a.length?g.UA("yt-remote-online-screen-ids",a.join(","),60):g.WA("yt-remote-online-screen-ids")},k9=function(a,b){b=void 0===b?!1:b;
f9.call(this,"ScreenService");this.C=a;this.J=b;this.j=this.u=null;this.B=[];this.D={};zmb(this)},Bmb=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.bk(),l=c?g8(h,c):null;c&&(a.J||l)||(l=g8(h,b));if(l){l.uuid=b;var m=l9(a,l);vmb(a.j,m,function(n){e(n?m:null)})}else c?Amb(a,c,(0,g.Oa)(function(n){var p=l9(this,new d8({name:d,
screenId:c,loungeToken:n,dialId:b||""}));vmb(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},Cmb=function(a,b){for(var c=a.screens.length,d=0;d<c;++d)if(a.screens[d].name==b)return a.screens[d];
return null},Dmb=function(a,b,c){vmb(a.j,b,c)},Amb=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Pv(Z8(a.C,"/pairing/get_lounge_token_batch"),e)},Emb=function(a){a.screens=a.u.bk();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=a.screens.length;for(d=0;d<b;++d){var e=a.screens[d];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Ejb(a.screens))},zmb=function(a){Fmb(a);
a.u=new h9(a.C);a.u.subscribe("screenChange",(0,g.Oa)(a.Z0,a));Emb(a);a.J||(a.B=Djb(g.VA("yt-remote-automatic-screen-cache")||[]));Fmb(a);a.info("Initializing automatic screens: "+Ejb(a.B));a.j=new umb(a.C,(0,g.Oa)(a.bk,a,!0));a.j.subscribe("screenChange",(0,g.Oa)(function(){this.ma("onlineScreenChange")},a))},l9=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=g8(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.J||Gmb(a));Fmb(a);a.D[b.uuid]=b.id;g.UA("yt-remote-device-id-map",a.D,31536E3);return b},Gmb=function(a){a=g.vm(a.B,function(b){return"shortLived"!=b.idType});
g.UA("yt-remote-automatic-screen-cache",g.Lg(a,Bjb))},Fmb=function(a){a.D=g.VA("yt-remote-device-id-map")||{}},m9=function(a,b,c){g.FB.call(this);
this.Ba=c;this.B=a;this.j=b;this.C=null},n9=function(a,b){a.C=b;
a.ma("sessionScreen",a.C)},Hmb=function(a,b){a.C&&(a.C.token=b,l9(a.B,a.C));
a.ma("sessionScreen",a.C)},o9=function(a,b){a9(a.Ba,b)},p9=function(a,b,c){m9.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.oa=(0,g.Oa)(this.kY,this);this.Aa=(0,g.Oa)(this.x5,this);this.ea=g.Kv(function(){Imb(d,null)},12E4);
this.J=this.D=this.I=this.T=0;this.ya=!1;this.Z="unknown"},Kmb=function(a,b){g.Mv(a.J);
a.J=0;0==b?Jmb(a):a.J=g.Kv(function(){Jmb(a)},b)},Jmb=function(a){Lmb(a,"getLoungeToken");
g.Mv(a.D);a.D=g.Kv(function(){Mmb(a,null)},3E4)},Lmb=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Oh());
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Oa)(function(){o9(this,"Failed to send message: "+b+".")},a)):o9(a,"Sending yt message without session: "+g.Oh(c))},Nmb=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.cS(b,function(c){n9(a,c)},function(){return a.Qi()},5)):a.Qi(Error("Waiting for session status timed out."))},Pmb=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new d8(b);Omb(a,d,function(e){e?(a.ya=!0,l9(a.B,d),n9(a,d),a.Z="unknown",Kmb(a,c)):(g.uv(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Qi())},5)},Imb=function(a,b){g.Mv(a.ea);
a.ea=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?Pmb(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.uv(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),Nmb(a,b.screenId))):(g.uv(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),Nmb(a,b.screenId)):Nmb(a,b.screenId):a.Qi(Error("Waiting for session status timed out."))},Mmb=function(a,b){g.Mv(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.Z=c,Kmb(a,3E4)):(Hmb(a,b.loungeToken),a.ya=!1,a.Z="unknown",Kmb(a,b.loungeTokenRefreshIntervalMs))},Omb=function(a,b,c,d){g.Mv(a.I);
a.I=0;Dmb(a.B,b,function(e){e||0>d?c(e):a.I=g.Kv(function(){Omb(a,b,c,d-1)},300)})},Qmb=function(a){g.Mv(a.T);
a.T=0;g.Mv(a.I);a.I=0;g.Mv(a.ea);a.ea=0;g.Mv(a.D);a.D=0;g.Mv(a.J);a.J=0},q9=function(a,b,c,d){m9.call(this,a,b,"DialSession");
this.config_=d;this.u=this.T=null;this.Aa="";this.Pa=c;this.Ma=null;this.ea=function(){};
this.Z=NaN;this.Ka=(0,g.Oa)(this.lY,this);this.D=function(){};
this.J=this.I=0;this.oa=!1;this.ya="unknown"},r9=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},Rmb=function(a){a.D=a.B.pP(a.Aa,a.j.label,a.j.friendlyName,r9(a),function(b,c){a.D=function(){};
a.oa=!0;n9(a,b);"shortLived"==b.idType&&0<c&&s9(a,c)},function(b){a.D=function(){};
a.Qi(b)})},Smb=function(a){var b={};
b.pairingCode=a.Aa;b.theme=a.Pa;Sjb()&&(b.env_useStageMdx=1);return g.ai(b)},Tmb=function(a){return new Promise(function(b){a.Aa=Fjb();
if(a.Ma){var c=new chrome.cast.DialLaunchResponse(!0,Smb(a));b(c);Rmb(a)}else a.ea=function(){g.Mv(a.Z);a.ea=function(){};
a.Z=NaN;var d=new chrome.cast.DialLaunchResponse(!0,Smb(a));b(d);Rmb(a)},a.Z=g.Kv(function(){a.ea()},100)})},Vmb=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new d8(b);return(new Promise(function(e){Umb(a,d,function(f){f?(a.oa=!0,l9(a.B,d),n9(a,d),s9(a,c)):g.uv(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):Tmb(a)})},Wmb=function(a,b){var c=a.T.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){Bmb(a.B,c,b,d,function(f){f&&f.token&&n9(a,f);e(f)},function(f){o9(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):Tmb(a)})},Umb=function(a,b,c,d){g.Mv(a.I);
a.I=0;Dmb(a.B,b,function(e){e||0>d?c(e):a.I=g.Kv(function(){Umb(a,b,c,d-1)},300)})},s9=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
r9(a)&&(g.Mv(a.J),a.J=0,0==b?Xmb(a):a.J=g.Kv(function(){Xmb(a)},b))},Xmb=function(a){r9(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ya=c,s9(a,3E4)):(a.oa=!1,a.ya="unknown",Hmb(a,b.loungeToken),s9(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ya="noLoungeTokenResponse";s9(a,3E4)})},Ymb=function(a){g.Mv(a.I);
a.I=0;g.Mv(a.J);a.J=0;a.D();a.D=function(){};
g.Mv(a.Z)},t9=function(a,b){m9.call(this,a,b,"ManualSession");
this.u=g.Kv((0,g.Oa)(this.Sx,this,null),150)},u9=function(a,b){g.FB.call(this);
this.config_=b;this.u=a;this.T=b.appId||"233637DE";this.C=b.theme||"cl";this.Z=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.j=null;this.J=!1;this.B=[];this.D=(0,g.Oa)(this.t4,this)},Zmb=function(a,b){return b?g.ib(a.B,function(c){return e8(b,c.label)},a):null},v9=function(a){a9("Controller",a)},hmb=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},w9=function(a){return a.J||!!a.B.length||!!a.j},x9=function(a,b,c){b!=a.j&&(g.ab(a.j),(a.j=b)?(c?a.ma("yt-remote-cast2-receiver-resumed",
b.j):a.ma("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Oa)(a.wU,a,b)),b.subscribe("sessionFailed",function(){return $mb(a,b)}),b.getScreen()?a.ma("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Sx(null)):a.ma("yt-remote-cast2-session-change",null))},$mb=function(a,b){a.j==b&&a.ma("yt-remote-cast2-session-failed")},anb=function(a){var b=a.u.oP(),c=a.j&&a.j.j;
a=g.Lg(b,function(d){c&&e8(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Zmb(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},hnb=function(a,b,c,d){d.disableCastApi?y9("Cannot initialize because disabled by Mdx config."):bnb()?cnb(b,d)&&(dnb(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?enb(a,c):(window.__onGCastApiAvailable=function(e,f){e?enb(a,c):(z9("Failed to load cast API: "+f),fnb(!1),dnb(!1),g.WA("yt-remote-cast-available"),g.WA("yt-remote-cast-receiver"),
gnb(),c(!1))},d.loadCastApiSetupScript?g.YA("https://web.archive.org/web/20221231235216/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=Tjb()&&bkb():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?Xjb():89<=Tjb()?dkb():(akb(),l8(ckb.map(Yjb))))):y9("Cannot initialize because not running Chrome")},gnb=function(){y9("dispose");
var a=A9();a&&a.dispose();g.Da("yt.mdx.remote.cloudview.instance_",null);inb(!1);g.lz(jnb);jnb.length=0},B9=function(){return!!g.VA("yt-remote-cast-installed")},knb=function(){var a=g.VA("yt-remote-cast-receiver");
return a?a.friendlyName:null},lnb=function(){y9("clearCurrentReceiver");
g.WA("yt-remote-cast-receiver")},mnb=function(){return B9()?A9()?A9().getCastSession():(z9("getCastSelector: Cast is not initialized."),null):(z9("getCastSelector: Cast API is not installed!"),null)},nnb=function(){B9()?A9()?C9()?(y9("Requesting cast selector."),A9().requestSession()):(y9("Wait for cast API to be ready to request the session."),jnb.push(g.kz("yt-remote-cast2-api-ready",nnb))):z9("requestCastSelector: Cast is not initialized."):z9("requestCastSelector: Cast API is not installed!")},
D9=function(a,b){C9()?A9().setConnectedScreenStatus(a,b):z9("setConnectedScreenStatus called before ready.")},bnb=function(){var a=0<=g.Wb().search(/ (CrMo|Chrome|CriOS)\//);
return g.yF||a},onb=function(a,b){A9().init(a,b)},cnb=function(a,b){var c=!1;
A9()||(a=new u9(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.UA("yt-remote-cast-available",d);b8("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){y9("onReceiverSelected: "+d.friendlyName);
g.UA("yt-remote-cast-receiver",d);b8("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){y9("onReceiverResumed: "+d.friendlyName);
g.UA("yt-remote-cast-receiver",d);b8("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){y9("onSessionChange: "+f8(d));
d||g.WA("yt-remote-cast-receiver");b8("yt-remote-cast2-session-change",d)}),g.Da("yt.mdx.remote.cloudview.instance_",a),c=!0);
y9("cloudview.createSingleton_: "+c);return c},A9=function(){return g.Fa("yt.mdx.remote.cloudview.instance_")},enb=function(a,b){fnb(!0);
dnb(!1);onb(a,function(c){c?(inb(!0),g.mz("yt-remote-cast2-api-ready")):(z9("Failed to initialize cast API."),fnb(!1),g.WA("yt-remote-cast-available"),g.WA("yt-remote-cast-receiver"),gnb());b(c)})},y9=function(a){a9("cloudview",a)},z9=function(a){a9("cloudview",a)},fnb=function(a){y9("setCastInstalled_ "+a);
g.UA("yt-remote-cast-installed",a)},C9=function(){return!!g.Fa("yt.mdx.remote.cloudview.apiReady_")},inb=function(a){y9("setApiReady_ "+a);
g.Da("yt.mdx.remote.cloudview.apiReady_",a)},dnb=function(a){g.Da("yt.mdx.remote.cloudview.initializing_",a)},E9=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.ao=!1;this.T=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},pnb=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.ao=!1;a.hasNext=!1;a.J=0;a.I=g.Ra();a.C=0;a.j=0;a.D=0;a.T=0;a.B=NaN;a.u=!1},F9=function(a){return a.Wc()?(g.Ra()-a.I)/1E3:0},G9=function(a,b){a.J=b;
a.I=g.Ra()},H9=function(a){switch(a.playerState){case 1:case 1081:return(g.Ra()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},I9=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&pnb(a)},qnb=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Zc(a.trackData);b.hasPrevious=a.ao;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.T;b.liveIngestionTime=a.B;return b},K9=function(a,b){g.FB.call(this);
this.B=0;this.C=a;this.I=[];this.D=new Ulb;this.u=this.j=null;this.Z=(0,g.Oa)(this.g3,this);this.J=(0,g.Oa)(this.IB,this);this.T=(0,g.Oa)(this.f3,this);this.ea=(0,g.Oa)(this.h3,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.nN,this),rnb(this))):c=3;0!=c&&(b?this.nN(c):g.Kv((0,g.Oa)(function(){this.nN(c)},this),0));
(a=mnb())&&J9(this,a);this.subscribe("yt-remote-cast2-session-change",this.ea)},L9=function(a){return new E9(a.C.getPlayerContextData())},rnb=function(a){g.Fb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Qa(this.r4,b),this))},a)},snb=function(a){g.Fb(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},M9=function(a){return 1==a.getState()},N9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.u.push(b)},tnb=function(a,b,c){var d=L9(a);
G9(d,c);-1E3!=d.playerState&&(d.playerState=b);O9(a,d)},P9=function(a,b,c){a.C.sendMessage(b,c)},O9=function(a,b){snb(a);
a.C.setPlayerContextData(qnb(b));rnb(a)},J9=function(a,b){a.u&&(a.u.removeUpdateListener(a.Z),a.u.removeMediaListener(a.J),a.IB(null));
a.u=b;a.u&&(b9("Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.Z),a.u.addMediaListener(a.J),a.u.media.length&&a.IB(a.u.media[0]))},unb=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=L9(a);b.contentId!=d.videoId&&b9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;G9(d,a.j.getEstimatedTime());O9(a,d)}else b9("No cast media video. Ignoring state update.")},Q9=function(a,b,c){return(0,g.Oa)(function(d){this.If("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.If("Retrying "+b+" using MDx browser channel."),P9(this,b,c))},a)},T9=function(a,b,c,d){d=void 0===d?!1:d;
g.FB.call(this);var e=this;this.I=NaN;this.Aa=!1;this.Z=this.T=this.oa=this.ya=NaN;this.ea=[];this.D=this.J=this.C=this.j=this.u=null;this.Ma=a;this.Ka=d;this.ea.push(g.Ry(window,"beforeunload",function(){e.lx(2)}));
this.B=[];this.j=new E9;this.Pa=b.id;this.Ba=b.idType;this.u=gmb(this.Ma,c,this.tP,"shortLived"==this.Ba,this.Pa);this.u.Qa("channelOpened",function(){vnb(e)});
this.u.Qa("channelClosed",function(){R9("Channel closed");isNaN(e.I)?j8(!0):j8();e.dispose()});
this.u.Qa("channelError",function(f){j8();isNaN(e.PA())?(1==f&&"shortLived"==e.Ba&&e.ma("browserChannelAuthError",f),R9("Channel error: "+f+" without reconnection"),e.dispose()):(e.Aa=!0,R9("Channel error: "+f+" with reconnection in "+e.PA()+" ms"),S9(e,2))});
this.u.Qa("channelMessage",function(f){wnb(e,f)});
this.u.rq(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.XA()&&g.UA("yt-remote-session-video-id",f)})},xnb=function(a){return g.ib(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},R9=function(a){a9("conn",a)},S9=function(a,b){a.ma("proxyStateChange",b)},ynb=function(a){a.I=g.Kv(function(){R9("Connecting timeout");
a.lx(1)},2E4)},znb=function(a){g.Mv(a.I);
a.I=NaN},Anb=function(a){g.Mv(a.ya);
a.ya=NaN},Cnb=function(a){Bnb(a);
a.oa=g.Kv(function(){U9(a,"getNowPlaying")},2E4)},Bnb=function(a){g.Mv(a.oa);
a.oa=NaN},vnb=function(a){R9("Channel opened");
a.Aa&&(a.Aa=!1,Anb(a),a.ya=g.Kv(function(){R9("Timing out waiting for a screen.");a.lx(1)},15E3))},Enb=function(a,b){var c=null;
if(b){var d=xnb(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Da("yt.mdx.remote.remoteClient_",c);b&&(znb(a),Anb(a));c=a.u.Ix()&&isNaN(a.I);b==c?b&&(S9(a,1),U9(a,"getSubtitlesTrack")):b?(a.aS()&&a.j.reset(),S9(a,1),U9(a,"getNowPlaying"),Dnb(a)):a.lx(1)},Fnb=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.Uc(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.ma("remotePlayerChange"))},Gnb=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;I9(a.j,d,e);a.ma("remoteQueueChange",c)},Inb=function(a,b){b.params=b.params||{};
Gnb(a,b,"NOW_PLAYING_MAY_CHANGE");Hnb(a,b);a.ma("autoplayDismissed")},Hnb=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
G9(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.T=isNaN(c)?0:c;a.j.Bk(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?Cnb(a):Bnb(a);a.ma("remotePlayerChange")},Jnb=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);G9(a.j,isNaN(b)?0:b);a.ma("remotePlayerChange")}},Knb=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.ma("remotePlayerChange")},Lnb=function(a,b){a.J=b.params.videoId;
a.ma("nowAutoplaying",parseInt(b.params.timeout,10))},Mnb=function(a,b){a.J=b.params.videoId||null;
a.ma("autoplayUpNext",a.J)},Nnb=function(a,b){a.D=b.params.autoplayMode;
a.ma("autoplayModeChange",a.D);"DISABLED"==a.D&&a.ma("autoplayDismissed")},Onb=function(a,b){var c="true"==b.params.hasNext;
a.j.ao="true"==b.params.hasPrevious;a.j.hasNext=c;a.ma("previousNextChange")},wnb=function(a,b){b=b.message;
b.params?R9("Received: action="+b.action+", params="+g.Oh(b.params)):R9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=a8(b.params.devices);a.B=g.Lg(b,function(d){return new c8(d)});
b=!!g.ib(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
Enb(a,b);b=a.OS("mlm");a.ma("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.sb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
Enb(a,!1);break;case "remoteConnected":var c=new c8(a8(b.params.device));g.ib(a.B,function(d){return d.equals(c)})||rjb(a.B,c);
break;case "remoteDisconnected":c=new c8(a8(b.params.device));g.sb(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":Gnb(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":Inb(a,b);break;case "onStateChange":Hnb(a,b);break;case "onAdStateChange":Jnb(a,b);break;case "onVolumeChanged":Knb(a,b);break;case "onSubtitlesTrackChanged":Fnb(a,b);break;case "nowAutoplaying":Lnb(a,b);break;case "autoplayDismissed":a.ma("autoplayDismissed");break;case "autoplayUpNext":Mnb(a,b);break;case "onAutoplayModeChanged":Nnb(a,b);break;case "onHasPreviousNextChanged":Onb(a,b);
break;case "requestAssistedSignIn":a.ma("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.ma("loopModeChange",b.params.loopMode);break;default:R9("Unrecognized action: "+b.action)}},Dnb=function(a){g.Mv(a.Z);
a.Z=g.Kv(function(){a.lx(1)},864E5)},U9=function(a,b,c){c?R9("Sending: action="+b+", params="+g.Oh(c)):R9("Sending: action="+b);
a.u.sendMessage(b,c)},Pnb=function(a){f9.call(this,"ScreenServiceProxy");
this.Dg=a;this.j=[];this.j.push(this.Dg.$_s("screenChange",(0,g.Oa)(this.pY,this)));this.j.push(this.Dg.$_s("onlineScreenChange",(0,g.Oa)(this.X3,this)))},Unb=function(a,b){Rjb();
if(!k8||!k8.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;Ijb();Mjb();V9||(V9=new Y8(b?b.loungeApiHost:void 0),Sjb()&&(V9.j="/api/loungedev"));W9||(W9=g.Fa("yt.mdx.remote.deferredProxies_")||[],g.Da("yt.mdx.remote.deferredProxies_",W9));Qnb();var c=X9();if(!c){var d=new k9(V9,b?b.disableAutomaticScreenCache||!1:!1);g.Da("yt.mdx.remote.screenService_",d);c=X9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Da("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);hnb(a,d,function(f){f?Y9()&&D9(Y9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){b8("yt-remote-receiver-availability-change")})},e)}b&&!g.Fa("yt.mdx.remote.initialized_")&&(g.Da("yt.mdx.remote.initialized_",!0),Z9("Initializing: "+g.Oh(b)),
$9.push(g.kz("yt-remote-cast2-api-ready",function(){b8("yt-remote-api-ready")})),$9.push(g.kz("yt-remote-cast2-availability-change",function(){b8("yt-remote-receiver-availability-change")})),$9.push(g.kz("yt-remote-cast2-receiver-selected",function(){a$(null);
b8("yt-remote-auto-connect","cast-selector-receiver")})),$9.push(g.kz("yt-remote-cast2-receiver-resumed",function(){b8("yt-remote-receiver-resumed","cast-selector-receiver")})),$9.push(g.kz("yt-remote-cast2-session-change",Rnb)),$9.push(g.kz("yt-remote-connection-change",function(f){f?D9(Y9(),"YouTube TV"):b$()||(D9(null,null),lnb())})),$9.push(g.kz("yt-remote-cast2-session-failed",function(){b8("yt-remote-connection-failed")})),a=Snb(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.ov("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),Z9(" -- with channel params: "+g.Oh(a)),a?(g.UA("yt-remote-session-app",a.app),g.UA("yt-remote-session-name",a.name)):(g.WA("yt-remote-session-app"),g.WA("yt-remote-session-name")),g.Da("yt.mdx.remote.channelParams_",a),c.start(),Y9()||Tnb())}},Vnb=function(){var a=X9().Dg.$_gos();
var b=c$();b&&d$()&&(Hjb(a,b)||a.push(b));return Gjb(a)},Xnb=function(){var a=Wnb();
!a&&B9()&&knb()&&(a={key:"cast-selector-receiver",name:knb()});return a},Wnb=function(){var a=Vnb(),b=c$();
b||(b=b$());return g.ib(a,function(c){return b&&e8(b,c.key)?!0:!1})},c$=function(){var a=Y9();
if(!a)return null;var b=X9().bk();return g8(b,a)},Rnb=function(a){Z9("remote.onCastSessionChange_: "+f8(a));
if(a){var b=c$();if(b&&b.id==a.id){if(D9(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))e$&&(e$.token=a),(b=d$())&&b.rq(a)}else b&&f$(),g$(a,1)}else d$()&&f$()},f$=function(){C9()?A9().stopSession():z9("stopSession called before API ready.");
var a=d$();a&&(a.disconnect(1),Ynb(null))},Znb=function(){var a=d$();
return!!a&&3!=a.getProxyState()},Z9=function(a){a9("remote",a)},X9=function(){if(!$nb){var a=g.Fa("yt.mdx.remote.screenService_");
$nb=a?new Pnb(a):null}return $nb},Y9=function(){return g.Fa("yt.mdx.remote.currentScreenId_")},aob=function(a){g.Da("yt.mdx.remote.currentScreenId_",a)},bob=function(){return g.Fa("yt.mdx.remote.connectData_")},a$=function(a){g.Da("yt.mdx.remote.connectData_",a)},d$=function(){return g.Fa("yt.mdx.remote.connection_")},Ynb=function(a){var b=d$();
a$(null);a||aob("");g.Da("yt.mdx.remote.connection_",a);W9&&(g.Fb(W9,function(c){c(a)}),W9.length=0);
b&&!a?b8("yt-remote-connection-change",!1):!b&&a&&b8("yt-remote-connection-change",!0)},b$=function(){var a=g.XA();
if(!a)return null;var b=X9();if(!b)return null;b=b.bk();return g8(b,a)},g$=function(a,b){Y9();
c$()&&c$();if(h$)e$=a;else{aob(a.id);var c=g.Fa("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new T9(V9,a,Snb(),c);a.connect(b,bob());a.subscribe("beforeDisconnect",function(d){b8("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){d$()&&(d$(),Ynb(null))});
a.subscribe("browserChannelAuthError",function(){var d=c$();d&&"shortLived"==d.idType&&(C9()?A9().handleBrowserChannelAuthError():z9("refreshLoungeToken called before API ready."))});
Ynb(a)}},Tnb=function(){var a=b$();
a?(Z9("Resume connection to: "+f8(a)),g$(a,0)):(j8(),lnb(),Z9("Skipping connecting because no session screen found."))},Qnb=function(){var a=Snb();
if(g.Uc(a)){a=i8();var b=g.VA("yt-remote-session-name")||"",c=g.VA("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Da("yt.mdx.remote.channelParams_",a)}},Snb=function(){return g.Fa("yt.mdx.remote.channelParams_")||{}},eob=function(a,b,c){g.E.call(this);
var d=this;this.module=a;this.G=b;this.xc=c;this.events=new g.vF(this);this.Z=this.events.S(this.G,"onVolumeChange",function(e){cob(d,e)});
this.C=!1;this.D=new g.IL(64);this.j=new g.Zn(this.GV,500,this);this.u=new g.Zn(this.HV,1E3,this);this.J=new n8(this.a7,0,this);this.B={};this.T=new g.Zn(this.uW,1E3,this);this.I=new o8(this.seekTo,1E3,this);g.H(this,this.events);this.events.S(b,"onCaptionsTrackListChanged",this.I3);this.events.S(b,"captionschanged",this.d3);this.events.S(b,"captionssettingschanged",this.QV);this.events.S(b,"videoplayerreset",this.RF);this.events.S(b,"mdxautoplaycancel",function(){d.xc.rR()});
b.N("enable_mdx_video_play_directly")&&this.events.S(b,"videodatachange",function(){dob(d.module)||i$(d)||j$(d,0)});
a=this.xc;a.isDisposed();a.subscribe("proxyStateChange",this.tU,this);a.subscribe("remotePlayerChange",this.MB,this);a.subscribe("remoteQueueChange",this.RF,this);a.subscribe("previousNextChange",this.qU,this);a.subscribe("nowAutoplaying",this.kU,this);a.subscribe("autoplayDismissed",this.KT,this);g.H(this,this.j);g.H(this,this.u);g.H(this,this.J);g.H(this,this.T);g.H(this,this.I);this.QV();this.RF();this.MB()},cob=function(a,b){if(i$(a)){a.xc.unsubscribe("remotePlayerChange",a.MB,a);
var c=Math.round(b.volume);b=!!b.muted;var d=L9(a.xc);if(c!==d.volume||b!==d.muted)a.xc.setVolume(c,b),a.T.start();a.xc.subscribe("remotePlayerChange",a.MB,a)}},fob=function(a){a.uc(0);
a.j.stop();a.kc(new g.IL(64))},gob=function(a,b){if(i$(a)&&!a.C){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.$c(c,b));a.xc.sP(a.G.getVideoData(1).videoId,c);a.B=L9(a.xc).trackData}},j$=function(a,b){var c=a.G.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.xc.playVideo(c.videoId,b,d,e,c.playerParams,c.ya,qjb(c));a.kc(new g.IL(1))},hob=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{FS:1});
c&&c.length?(a.G.setOption("captions","track",b),a.C=!1):(a.G.loadModule("captions"),a.C=!0)}else a.G.setOption("captions","track",{})},i$=function(a){return L9(a.xc).videoId===a.G.getVideoData(1).videoId},k$=function(){g.W.call(this,{F:"div",
K:"ytp-mdx-popup-dialog",X:{role:"dialog"},W:[{F:"div",K:"ytp-mdx-popup-dialog-inner-content",W:[{F:"div",K:"ytp-mdx-popup-title",qa:"You're signed out"},{F:"div",K:"ytp-mdx-popup-description",qa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{F:"div",K:"ytp-mdx-privacy-popup-buttons",W:[{F:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-cancel"],qa:"Cancel"},{F:"button",Ga:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],qa:"Confirm"}]}]}]});this.j=new g.FN(this,250);this.cancelButton=this.Ea("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Ea("ytp-mdx-privacy-popup-confirm");g.H(this,this.j);this.S(this.cancelButton,"click",this.u);this.S(this.confirmButton,"click",this.B)},l$=function(a){g.W.call(this,{F:"div",
K:"ytp-remote",W:[{F:"div",K:"ytp-remote-display-status",W:[{F:"div",K:"ytp-remote-display-status-icon",W:[g.OEa()]},{F:"div",K:"ytp-remote-display-status-text",qa:"{{statustext}}"}]}]});this.api=a;this.j=new g.FN(this,250);g.H(this,this.j);this.S(a,"presentingplayerstatechange",this.onStateChange);this.Fc(a.Eb())},m$=function(a,b){g.bU.call(this,"Play on",1,a,b);
this.G=a;this.Js={};this.S(a,"onMdxReceiversChange",this.B);this.S(a,"presentingplayerstatechange",this.B);this.B()},iob=function(a){g.LQ.call(this,a);
this.Ao={key:Fjb(),name:"This computer"};this.Wk=null;this.subscriptions=[];this.CM=this.xc=null;this.Js=[this.Ao];this.Xq=this.Ao;this.Qd=new g.IL(64);this.bT=0;this.lh=-1;this.YB=!1;this.WB=this.zy=null;if(!g.BH(this.player.V())&&!g.CH(this.player.V())){a=this.player;var b=g.QP(a);b&&(b=b.nm())&&(b=new m$(a,b),g.H(this,b));b=new l$(a);g.H(this,b);g.cQ(a,b.element,4);this.zy=new k$;g.H(this,this.zy);g.cQ(a,this.zy.element,4);this.YB=!!b$()}},n$=function(a){a.WB&&(a.player.removeEventListener("presentingplayerstatechange",
a.WB),a.WB=null)},job=function(a,b,c){a.Qd=c;
a.player.ma("presentingplayerstatechange",new g.aL(c,b))},o$=function(a,b){if(b.key!==a.Xq.key)if(b.key===a.Ao.key)f$();
else if(dob(a)&&kob(a),a.Xq=b,!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.CH(a.player.V())){var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(!c&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))d=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.GQ(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:c,
videoId:e,playerParams:d.playerParams,clickTrackingParams:d.ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(d=qjb(d))&&(a.locationInfo=d);d=a}Z9("Connecting to: "+g.Oh(b));"cast-selector-receiver"==b.key?(a$(d||null),b=d||null,C9()?A9().setLaunchParams(b):z9("setLaunchParams called before ready.")):!d&&Znb()&&Y9()==b.key?b8("yt-remote-connection-change",!0):(f$(),a$(d||null),d=X9().bk(),(b=g8(d,b.key))&&g$(b,1))}},dob=function(a){var b;
(b=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(b=((b=g.O("PLAYER_CONFIG"))&&b.args&&void 0!==b.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.YB||!a.zy);return b?!1:g.SH(a.player.V())||g.VH(a.player.V())},kob=function(a){a.player.Eb().Wc()?a.player.pauseVideo():(a.WB=function(b){!a.YB&&g.cL(b,8)&&(a.player.pauseVideo(),n$(a))},a.player.addEventListener("presentingplayerstatechange",a.WB));
a.zy&&a.zy.Pc();d$()||(h$=!0)};
g.cr.prototype.zr=g.ca(1,function(){return g.gg(this,6)});
g.Tg.prototype.mD=g.ca(0,function(){var a=g.Xg(this);return 4294967296*g.Xg(this)+(a>>>0)});
var bjb,lob=g.wh(function(a,b,c){if(1!==a.u)return!1;g.I(b,c,g.Yg(a.j));return!0},g.xh),mob=g.wh(function(a,b,c,d){if(1!==a.u)return!1;
g.vg(b,c,d,g.Yg(a.j));return!0},g.xh),nob=g.wh(function(a,b,c){if(0!==a.u)return!1;
g.I(b,c,g.Vg(a.j));return!0},g.yh),oob=g.wh(function(a,b,c,d){if(0!==a.u)return!1;
g.vg(b,c,d,g.Vg(a.j));return!0},g.yh),pob=g.wh(function(a,b,c,d){if(0!==a.u)return!1;
g.vg(b,c,d,g.Wg(a.j));return!0},g.zh),qob=g.wh(function(a,b,c){if(1!==a.u)return!1;
g.I(b,c,a.j.mD());return!0},function(a,b,c){djb(a,c,g.gg(b,c))}),rob=g.wh(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.kg(b,c,0,!1,g.Tf(b.Le));if(2==a.u){c=g.Tg.prototype.mD;var d=g.Wg(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.mD());return!0},function(a,b,c){b=g.ng(b,c,Yib);
if(null!=b)for(var d=0;d<b.length;d++)djb(a,c,b[d])}),sob=g.wh(function(a,b,c){if(0!==a.u)return!1;
g.I(b,c,g.Zg(a.j));return!0},ejb),tob=g.wh(function(a,b,c,d){if(0!==a.u)return!1;
g.vg(b,c,d,g.Zg(a.j));return!0},ejb),uob=g.wh(function(a,b,c){if(2!==a.u)return!1;
a=g.fh(a);g.tg(b,c,a);return!0},function(a,b,c){b=g.ng(b,c,Zib,!1);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.lh(a,c,g.Pca(e))}}),vob=g.wh(function(a,b,c,d){if(2!==a.u)return!1;
g.vg(b,c,d,g.fh(a));return!0},g.mea),wob=g.wh(function(a,b,c,d,e){if(2!==a.u)return!1;
g.ch(a,$ib(b,d,c),e);return!0},fjb),xob=g.wh(function(a,b,c,d,e,f){if(2!==a.u)return!1;
(f=g.ug(b,f))&&f!==c&&g.I(b,f,void 0,!1);b=$ib(b,d,c);g.ch(a,b,e);return!0},fjb),gjb=[1];
g.v(hjb,g.M);g.v(ijb,g.M);var yob=[hjb,1,g.y2,[ijb,1,lob,2,nob]];g.v(jjb,g.M);g.v(kjb,g.M);g.v(ljb,g.M);
var zob=[1,2],Aob=[g.Ah,1,g.x2,5,qob,2,wob,[jjb,1,xob,[kjb,1,g.x2,2,g.x2,3,sob],zob,2,xob,[ljb,1,g.x2,2,g.x2,3,g.Q4a,4,sob],zob],3,uob,6,rob,4,g.y2,[g.Bh,1,g.y2,[g.Ch,1,vob,g.Fh,2,pob,g.Fh,3,tob,g.Fh],2,wob,[g.Dh,1,oob,g.Eh,2,mob,g.Eh,3,xob,yob,g.Eh]]],slb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},P8={"'":"\\'"},zjb={wfa:"atp",wWa:"ska",GSa:"que",RJa:"mus",vWa:"sus",Wwa:"dsp",eUa:"seq",fJa:"mic",Cpa:"dpa",Iga:"cds",GJa:"mlm",
xpa:"dsdtr",UKa:"ntb"},Ajb={WZ:"u",CLASSIC:"cl",xZ:"k",pX:"i",bX:"cr",FZ:"m",lX:"g",pQ:"up"};c8.prototype.equals=function(a){return a?this.id==a.id:!1};
var k8,Ljb="",$jb=Ujb("loadCastFramework")||Ujb("loadCastApplicationFramework"),ckb=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.Sa(n8,g.E);g.k=n8.prototype;g.k.OX=function(a){this.C=arguments;this.j=!1;this.Cc?this.B=g.Ra()+this.di:this.Cc=g.tf(this.D,this.di)};
g.k.stop=function(){this.Cc&&(g.D.clearTimeout(this.Cc),this.Cc=null);this.B=null;this.j=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.I.apply(null,this.C)))};
g.k.ra=function(){this.stop();n8.vf.ra.call(this)};
g.k.PX=function(){this.Cc&&(g.D.clearTimeout(this.Cc),this.Cc=null);this.B?(this.Cc=g.tf(this.D,this.B-g.Ra()),this.B=null):this.u?this.j=!0:(this.j=!1,this.I.apply(null,this.C))};g.v(o8,g.E);g.k=o8.prototype;g.k.JH=function(a){this.B=arguments;this.Cc||this.u?this.j=!0:okb(this)};
g.k.stop=function(){this.Cc&&(g.D.clearTimeout(this.Cc),this.Cc=null,this.j=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.j||this.Cc||(this.j=!1,okb(this))};
g.k.ra=function(){g.E.prototype.ra.call(this);this.stop()};p8.prototype.stringify=function(a){return g.D.JSON.stringify(a,void 0)};
p8.prototype.parse=function(a){return g.D.JSON.parse(a,void 0)};g.Sa(pkb,g.eb);g.Sa(qkb,g.eb);var rkb=null;g.Sa(tkb,g.eb);g.Sa(ukb,g.eb);g.Sa(vkb,g.eb);wkb.prototype.info=function(){};
wkb.prototype.warning=function(){};var Dkb={},v8={};g.k=t8.prototype;g.k.setTimeout=function(a){this.Fb=a};
g.k.SX=function(a){a=a.target;var b=this.Wa;b&&3==g.ji(a)?b.JH():this.WO(a)};
g.k.WO=function(a){try{if(a==this.j)a:{var b=g.ji(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b)&&(3!=b||g.WH||this.j&&(this.u.u||g.ni(this.j)||g.oi(this.j)))){this.Ka||4!=b||7==c||(8==c||0>=d?q8(3):q8(2));y8(this);var e=this.j.getStatus();this.Pb=e;b:if(Bkb(this)){var f=g.oi(this.j);a="";var h=f.length,l=4==g.ji(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){w8(this);x8(this);var m="";break b}this.u.B=new g.D.TextDecoder}for(c=0;c<h;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&
c==h-1});f.splice(0,h);this.u.j+=a;this.ea=0;m=this.u.j}else m=g.ni(this.j);if(this.B=200==e){if(this.dc&&!this.Va){b:{if(this.j){var n=g.ti(this.j,"X-HTTP-Initial-Response");if(n&&!g.Lb(n)){var p=n;break b}}p=null}if(e=p)this.Va=!0,Ekb(this,e);else{this.B=!1;this.I=3;r8(12);w8(this);x8(this);break a}}this.Ba?(Fkb(this,b,m),g.WH&&this.B&&3==b&&(this.gb.Qa(this.kb,"tick",this.RX),this.kb.start())):Ekb(this,m);4==b&&w8(this);this.B&&!this.Ka&&(4==b?Hkb(this.D,this):(this.B=!1,u8(this)))}else g.$ea(this.j),
400==e&&0<m.indexOf("Unknown SID")?(this.I=3,r8(12)):(this.I=0,r8(13)),w8(this),x8(this)}}}catch(q){}finally{}};
g.k.RX=function(){if(this.j){var a=g.ji(this.j),b=g.ni(this.j);this.ea<b.length&&(y8(this),Fkb(this,a,b),this.B&&4!=a&&u8(this))}};
g.k.cancel=function(){this.Ka=!0;w8(this)};
g.k.QX=function(){this.Z=null;var a=Date.now();0<=a-this.Rb?(2!=this.Pa&&(q8(3),r8(17)),w8(this),this.I=2,x8(this)):Gkb(this,this.Rb-a)};
g.k.getLastError=function(){return this.I};
g.k.vK=function(){return this.j};Qkb.prototype.cancel=function(){this.B=Skb(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.t(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.k=Wkb.prototype;g.k.XO=8;g.k.dh=1;g.k.connect=function(a,b,c,d){r8(0);this.Ac=a;this.Ka=b||{};c&&void 0!==d&&(this.Ka.OSID=c,this.Ka.OAID=d);this.kb=this.Ec;this.Ma=Mkb(this,null,this.Ac);C8(this)};
g.k.disconnect=function(){Ykb(this);if(3==this.dh){var a=this.Wa++,b=this.Ma.clone();g.Fj(b,"SID",this.C);g.Fj(b,"RID",a);g.Fj(b,"TYPE","terminate");F8(this,b);a=new t8(this,this.C,a);a.Pa=2;a.J=Z7(b.clone());b=!1;g.D.navigator&&g.D.navigator.sendBeacon&&(b=g.D.navigator.sendBeacon(a.J.toString(),""));!b&&g.D.Image&&((new Image).src=a.J,b=!0);b||(a.j=Akb(a.D,null),a.j.send(a.J));a.ya=Date.now();u8(a)}dlb(this)};
g.k.Eg=function(){return 0==this.dh};
g.k.getState=function(){return this.dh};
g.k.ZO=function(a){if(this.I)if(this.I=null,1==this.dh){if(!a){this.Wa=Math.floor(1E5*Math.random());a=this.Wa++;var b=new t8(this,"",a),c=this.Z;this.Rb&&(c?(c=g.Yc(c),g.$c(c,this.Rb)):c=this.Rb);null!==this.J||this.tb||(b.Ma=c,c=null);var d;if(this.Fb)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=alb(this,b,d);e=this.Ma.clone();g.Fj(e,"RID",a);g.Fj(e,"CVER",22);this.Ba&&g.Fj(e,"X-HTTP-Session-Id",this.Ba);F8(this,e);c&&(this.tb?d="headers="+g.ne(g.oga(c))+"&"+d:this.J&&g.Jj(e,this.J,c));Lkb(this.u,b);this.Sf&&g.Fj(e,"TYPE","init");this.Fb?(g.Fj(e,"$req",d),g.Fj(e,"SID","null"),b.dc=!0,zkb(b,e,null)):zkb(b,e,d);this.dh=2}}else 3==this.dh&&(a?blb(this,a):0==this.B.length||Rkb(this.u)||blb(this))};
g.k.YO=function(){this.T=null;clb(this);if(this.Lc&&!(this.gb||null==this.j||0>=this.jd)){var a=2*this.jd;this.Aa=s8((0,g.Oa)(this.b3,this),a)}};
g.k.b3=function(){this.Aa&&(this.Aa=null,this.kb=!1,this.gb=!0,r8(10),A8(this),clb(this))};
g.k.TL=function(a){this.j==a&&this.Lc&&!this.gb&&(Xkb(this),this.gb=!0,r8(11))};
g.k.TX=function(){null!=this.ea&&(this.ea=null,A8(this),Jkb(this),r8(19))};
g.k.H6=function(a){a?r8(2):r8(1)};
g.k.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.k=flb.prototype;g.k.dP=function(){};
g.k.cP=function(){};
g.k.bP=function(){};
g.k.aP=function(){};
g.k.isActive=function(){return!0};
g.k.UX=function(){};g.Sa(H8,g.rd);H8.prototype.open=function(){this.j.D=this.C;this.J&&(this.j.Pa=!0);this.j.connect(this.I,this.u||void 0)};
H8.prototype.close=function(){this.j.disconnect()};
H8.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.Oh(a),a=c);b.B.push(new Pkb(b.qf++,a));3==b.dh&&C8(b)};
H8.prototype.ra=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;H8.vf.ra.call(this)};
g.Sa(hlb,pkb);g.Sa(ilb,qkb);g.Sa(G8,flb);G8.prototype.dP=function(){this.j.dispatchEvent("m")};
G8.prototype.cP=function(a){this.j.dispatchEvent(new hlb(a))};
G8.prototype.bP=function(a){this.j.dispatchEvent(new ilb(a))};
G8.prototype.aP=function(){this.j.dispatchEvent("n")};var J8=new g.rd;g.v(llb,g.eb);g.k=L8.prototype;g.k.ut=null;g.k.Yo=!1;g.k.jw=null;g.k.LH=null;g.k.gw=null;g.k.hw=null;g.k.Dq=null;g.k.Fq=null;g.k.vt=null;g.k.Ci=null;g.k.hD=0;g.k.Tm=null;g.k.gD=null;g.k.Eq=null;g.k.zz=-1;g.k.sV=!0;g.k.qt=!1;g.k.KH=0;g.k.fD=null;var qlb={},plb={};g.k=L8.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.WX=function(a){a=a.target;var b=this.fD;b&&3==g.ji(a)?b.JH():this.eP(a)};
g.k.eP=function(a){try{if(a==this.Ci)a:{var b=g.ji(this.Ci),c=this.Ci.u,d=this.Ci.getStatus();if(g.Je&&!g.Cc(10)||g.Fc&&!g.Bc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.ni(this.Ci))break a;this.qt||4!=b||7==c||(8==c||0>=d?this.j.Fm(3):this.j.Fm(2));vlb(this);var e=this.Ci.getStatus();this.zz=e;var f=g.ni(this.Ci);if(this.Yo=200==e){4==b&&N8(this);if(this.Ba){for(a=!0;!this.qt&&this.hD<f.length;){var h=rlb(this,f);if(h==plb){4==b&&(this.Eq=4,K8(15),a=!1);break}else if(h==qlb){this.Eq=4;K8(16);a=
!1;break}else wlb(this,h)}4==b&&0==f.length&&(this.Eq=1,K8(17),a=!1);this.Yo=this.Yo&&a;a||(N8(this),O8(this))}else wlb(this,f);this.Yo&&!this.qt&&(4==b?this.j.iD(this):(this.Yo=!1,M8(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Eq=3,K8(13)):(this.Eq=0,K8(14)),N8(this),O8(this)}}catch(l){}finally{}};
g.k.n5=function(a){I8((0,g.Oa)(this.m5,this,a),0)};
g.k.m5=function(a){this.qt||(vlb(this),wlb(this,a),M8(this))};
g.k.yU=function(a){I8((0,g.Oa)(this.l5,this,a),0)};
g.k.l5=function(a){this.qt||(N8(this),this.Yo=a,this.j.iD(this),this.j.Fm(4))};
g.k.cancel=function(){this.qt=!0;N8(this)};
g.k.VX=function(){this.jw=null;var a=Date.now();0<=a-this.LH?(2!=this.hw&&this.j.Fm(3),N8(this),this.Eq=2,K8(18),O8(this)):ulb(this,this.LH-a)};
g.k.getLastError=function(){return this.Eq};g.k=zlb.prototype;g.k.NH=null;g.k.cj=null;g.k.nG=!1;g.k.IV=null;g.k.nE=null;g.k.nL=null;g.k.OH=null;g.k.Tk=null;g.k.Zo=-1;g.k.Az=null;g.k.Wz=null;g.k.connect=function(a){this.OH=a;a=R8(this.j,null,this.OH);K8(3);this.IV=Date.now();var b=this.j.T;null!=b?(this.Az=b[0],(this.Wz=b[1])?(this.Tk=1,Alb(this)):(this.Tk=2,Blb(this))):($7(a,"MODE","init"),this.cj=new L8(this),this.cj.ut=this.NH,olb(this.cj,a,!1,null,!0),this.Tk=0)};
g.k.z_=function(a){if(a)this.Tk=2,Blb(this);else{K8(4);var b=this.j;b.Zm=b.Tq.Zo;V8(b,9)}a&&this.Fm(2)};
g.k.MH=function(a){return this.j.MH(a)};
g.k.abort=function(){this.cj&&(this.cj.cancel(),this.cj=null);this.Zo=-1};
g.k.Eg=function(){return!1};
g.k.fP=function(a,b){this.Zo=a.zz;if(0==this.Tk)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.Zm=this.Zo;V8(a,2);return}this.Az=c[0];this.Wz=c[1]}else a=this.j,a.Zm=this.Zo,V8(a,2);else if(2==this.Tk)if(this.nG)K8(7),this.nL=Date.now();else if("11111"==b){if(K8(6),this.nG=!0,this.nE=Date.now(),a=this.nE-this.IV,!g.Je||g.Cc(10)||500>a)this.Zo=200,this.cj.cancel(),K8(12),S8(this.j,this,!0)}else K8(8),this.nE=this.nL=Date.now(),this.nG=!1};
g.k.iD=function(){this.Zo=this.cj.zz;if(this.cj.Yo)0==this.Tk?this.Wz?(this.Tk=1,Alb(this)):(this.Tk=2,Blb(this)):2==this.Tk&&((!g.Je||g.Cc(10)?!this.nG:200>this.nL-this.nE)?(K8(11),S8(this.j,this,!1)):(K8(12),S8(this.j,this,!0)));else{0==this.Tk?K8(9):2==this.Tk&&K8(10);var a=this.j;this.cj.getLastError();a.Zm=this.Zo;V8(a,2)}};
g.k.Bz=function(){return this.j.Bz()};
g.k.isActive=function(){return this.j.isActive()};
g.k.Fm=function(a){this.j.Fm(a)};g.k=Clb.prototype;g.k.Ym=null;g.k.Cz=null;g.k.pj=null;g.k.og=null;g.k.PH=null;g.k.jD=null;g.k.gP=null;g.k.kD=null;g.k.Dz=0;g.k.YX=0;g.k.Sh=null;g.k.Gq=null;g.k.bp=null;g.k.xt=null;g.k.Tq=null;g.k.aH=null;g.k.nw=-1;g.k.hP=-1;g.k.Zm=-1;g.k.mw=0;g.k.lw=0;g.k.wt=8;g.Sa(Elb,g.eb);g.Sa(Flb,g.eb);g.k=Clb.prototype;g.k.connect=function(a,b,c,d,e){K8(0);this.PH=b;this.Cz=c||{};d&&void 0!==e&&(this.Cz.OSID=d,this.Cz.OAID=e);this.J?(I8((0,g.Oa)(this.eR,this,a),100),Hlb(this)):this.eR(a)};
g.k.disconnect=function(){Ilb(this);if(3==this.j){var a=this.Dz++,b=this.jD.clone();g.Fj(b,"SID",this.C);g.Fj(b,"RID",a);g.Fj(b,"TYPE","terminate");U8(this,b);a=new L8(this,this.C,a);a.hw=2;a.Dq=Z7(b.clone());(new Image).src=a.Dq.toString();a.gw=Date.now();M8(a)}Slb(this)};
g.k.eR=function(a){this.Tq=new zlb(this);this.Tq.NH=this.Ym;this.Tq.u=this.D;this.Tq.connect(a)};
g.k.Eg=function(){return 0==this.j};
g.k.getState=function(){return this.j};
g.k.jP=function(a){this.Gq=null;Nlb(this,a)};
g.k.iP=function(){this.bp=null;this.og=new L8(this,this.C,"rpc",this.I);this.og.ut=this.Ym;this.og.KH=0;var a=this.gP.clone();g.Fj(a,"RID","rpc");g.Fj(a,"SID",this.C);g.Fj(a,"CI",this.aH?"0":"1");g.Fj(a,"AID",this.nw);U8(this,a);if(!g.Je||g.Cc(10))g.Fj(a,"TYPE","xmlhttp"),olb(this.og,a,!0,this.kD,!1);else{g.Fj(a,"TYPE","html");var b=this.og,c=!!this.kD;b.hw=3;b.Dq=Z7(a.clone());tlb(b,c)}};
g.k.fP=function(a,b){if(0!=this.j&&(this.og==a||this.pj==a))if(this.Zm=a.zz,this.pj==a&&3==this.j)if(7<this.wt){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.bp){if(this.og)if(this.og.gw+3E3<this.pj.gw)T8(this),this.og.cancel(),this.og=null;else break a;Qlb(this);K8(19)}}else this.hP=a[1],0<this.hP-this.nw&&37500>a[2]&&this.aH&&0==this.lw&&!this.xt&&(this.xt=I8((0,g.Oa)(this.ZX,this),6E3));else V8(this,11)}else null!=b&&V8(this,11);else if(this.og==
a&&T8(this),!g.Lb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.nw=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.kD=c[2],c=c[3],null!=c?this.wt=c:this.wt=6,this.j=3,this.Sh&&this.Sh.mP(),this.gP=R8(this,this.Bz()?this.kD:null,this.PH),Olb(this)):"stop"==c[0]&&V8(this,7):3==this.j&&("stop"==c[0]?V8(this,7):"noop"!=c[0]&&this.Sh&&this.Sh.lP(c),this.lw=0)};
g.k.ZX=function(){null!=this.xt&&(this.xt=null,this.og.cancel(),this.og=null,Qlb(this),K8(20))};
g.k.iD=function(a){if(this.og==a){T8(this);this.og=null;var b=2}else if(this.pj==a)this.pj=null,b=1;else return;this.Zm=a.zz;if(0!=this.j)if(a.Yo)if(1==b){b=Date.now()-a.gw;var c=J8;c.dispatchEvent(new Elb(c,a.vt?a.vt.length:0,b,this.mw));Glb(this);this.B.length=0}else Olb(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Zm)){if(d=1==b)this.pj||this.Gq||1==this.j||2<=this.mw?d=!1:(this.Gq=I8((0,g.Oa)(this.jP,this,a),Plb(this,this.mw)),this.mw++,d=!0);d=!(d||2==b&&Qlb(this))}if(d)switch(c){case 1:V8(this,
5);break;case 4:V8(this,10);break;case 3:V8(this,6);break;case 7:V8(this,12);break;default:V8(this,2)}}};
g.k.XX=function(a){if(!g.nb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.k.G6=function(a){a?K8(2):(K8(1),Rlb(this,8))};
g.k.MH=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.gi;a.J=!1;return a};
g.k.isActive=function(){return!!this.Sh&&this.Sh.isActive(this)};
g.k.Fm=function(a){var b=J8;b.dispatchEvent(new Flb(b,a))};
g.k.Bz=function(){return!(!g.Je||g.Cc(10))};
g.k=Tlb.prototype;g.k.mP=function(){};
g.k.lP=function(){};
g.k.kP=function(){};
g.k.QH=function(){};
g.k.nP=function(){return{}};
g.k.isActive=function(){return!0};g.k=Ulb.prototype;g.k.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.k.clear=function(){this.j=[];this.u=[]};
g.k.contains=function(a){return g.nb(this.j,a)||g.nb(this.u,a)};
g.k.remove=function(a){var b=this.j;var c=(0,g.v4a)(b,a);0<=c?(g.pb(b,c),b=!0):b=!1;return b||g.qb(this.u,a)};
g.k.ll=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.v(Vlb,g.eb);g.v(Wlb,g.eb);g.Sa(W8,g.E);g.k=W8.prototype;g.k.f5=function(){this.di=Math.min(3E5,2*this.di);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.di+15E3*Math.random();g.$n(this.j,a);this.u=Date.now()+a};
g.k.stop=function(){this.j.stop();this.u=0};
g.k.isActive=function(){return this.j.isActive()};
g.k.reset=function(){this.j.stop();this.di=5E3};Ylb.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.ov("enable_client_streamz_web")){a=g.t(a);for(var c=a.next();!c.done;c=a.next())c=g.uea(c.value),c={serializedIncrementBatch:g.Df(g.vh(c,Aob))},g.ax("streamzIncremented",c,{sendIsolatedPayload:b})}};var X8;g.Sa(Zlb,Tlb);g.k=Zlb.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.rh=function(a){return this.B.rh(a)};
g.k.ma=function(a,b){return this.B.ma.apply(this.B,arguments)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.ab(this.B),this.disconnect(),g.ab(this.u),this.u=null,this.oa=function(){return""})};
g.k.isDisposed=function(){return this.ea};
g.k.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.Z="";this.u.stop();this.I=a||null;this.D=b||0;a=this.ya+"/test";b=this.ya+"/bind";var d=new Clb(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Pa),e=this.j;e&&(e.Sh=null);d.Sh=this;this.j=d;$lb(this);if(this.j){d=g.O("ID_TOKEN");var f=this.j.Ym||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Ym=f}e?(3!=e.getState()&&0==Klb(e)||e.getState(),this.j.connect(a,b,this.J,e.C,e.nw)):c?this.j.connect(a,
b,this.J,c.sessionId,c.arrayId):this.j.connect(a,b,this.J)}};
g.k.disconnect=function(a){this.T=a||0;this.u.stop();$lb(this);this.j&&(3==this.j.getState()&&Nlb(this.j),this.j.disconnect());this.T=0};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.$c(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Ix()&&($lb(this),Jlb(this.j,a))};
g.k.mP=function(){this.u.reset();this.I=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)Jlb(this.j,a[b])}this.ma("handlerOpened");fkb(this.Ma,"BROWSER_CHANNEL")};
g.k.kP=function(a){var b=2==a&&401==this.j.Zm;4==a||b||this.u.start();this.ma("handlerError",a,b);lkb(this.Ba,"BROWSER_CHANNEL")};
g.k.QH=function(a,b){if(!this.u.isActive())this.ma("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}hkb(this.Aa,"BROWSER_CHANNEL");a&&this.Wa.j.TH("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Xa.j.TH("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.nP=function(){var a={v:2};this.Z&&(a.gsessionid=this.Z);0!=this.D&&(a.ui=""+this.D);0!=this.T&&(a.ui=""+this.T);this.I&&g.$c(a,this.I);return a};
g.k.lP=function(a){"S"==a[0]?this.Z=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.ma("handlerMessage",new Xlb(a[0],a[1]));jkb(this.Ka,"BROWSER_CHANNEL")};
g.k.Ix=function(){return!!this.j&&3==this.j.getState()};
g.k.rq=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Va&&this.j){var b=this.j.Ym||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Ym=b}};
g.k.zr=function(){return this.J.id};
g.k.Jr=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.k.tv=function(){var a=this.u;g.ao(a.j);a.start()};
g.k.e6=function(){this.u.isActive();0==Klb(this.j)&&this.connect(this.I,this.D)};Y8.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Y8.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
Y8.prototype.D=function(a){a(Error("request timed out"))};g.v(bmb,g.rd);g.k=bmb.prototype;g.k.connect=function(a,b,c){this.md.connect(a,b,c)};
g.k.disconnect=function(a){this.md.disconnect(a)};
g.k.tv=function(){this.md.tv()};
g.k.zr=function(){return this.md.zr()};
g.k.Jr=function(){return this.md.Jr()};
g.k.Ix=function(){return this.md.Ix()};
g.k.cY=function(){this.dispatchEvent("channelOpened");var a=this.md,b=this.j;g.UA("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.aH,sessionId:a.j.C,arrayId:a.j.nw});g.UA("yt-remote-session-screen-id",b);a=h8();b=i8();g.nb(a,b)||a.push(b);Kjb(a);Mjb()};
g.k.aY=function(){this.dispatchEvent("channelClosed")};
g.k.bY=function(a){this.dispatchEvent(new Vlb(a))};
g.k.onError=function(a){this.dispatchEvent(new Wlb(a?1:0))};
g.k.sendMessage=function(a,b){this.md.sendMessage(a,b)};
g.k.rq=function(a){this.md.rq(a)};
g.k.dispose=function(){this.md.dispose()};g.k=cmb.prototype;
g.k.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.I&&(this.B.stop(),this.T=a,this.J=b,emb(this),(a=g.O("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.d2&&(this.u.mdxVersion=""+this.j.d2),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities),this.j.P_&&(this.u.cst=this.j.P_)),
0!==this.J?this.u.ui=""+this.J:delete this.u.ui,Object.assign(this.u,this.T),this.channel=new H8(this.pathPrefix,{u1:"gsessionid",h2:this.C,j2:this.u}),this.channel.open(),this.I=2,dmb(this))};
g.k.disconnect=function(a){this.Z=void 0===a?0:a;this.B.stop();emb(this);this.channel&&(0!==this.Z?this.u.ui=""+this.Z:delete this.u.ui,this.channel.close());this.Z=0};
g.k.Jr=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.k.tv=function(){var a=this.B;g.ao(a.j);a.start()};
g.k.sendMessage=function(a,b){this.channel&&(emb(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.k.rq=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.k.zr=function(){return this.j?this.j.id:""};
g.k.ma=function(a){return this.D.ma.apply(this.D,[a].concat(g.u(g.ya.apply(1,arguments))))};
g.k.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.k.rh=function(a){return this.D.rh(a)};
g.k.dispose=function(){this.ea||(this.ea=!0,g.ab(this.D),this.disconnect(),g.ab(this.B),this.ya=function(){return""})};
g.k.isDisposed=function(){return this.ea};g.v(fmb,g.rd);g.k=fmb.prototype;g.k.connect=function(a,b){this.j.connect(a,b)};
g.k.disconnect=function(a){this.j.disconnect(a)};
g.k.tv=function(){this.j.tv()};
g.k.zr=function(){return this.j.zr()};
g.k.Jr=function(){return this.j.Jr()};
g.k.Ix=function(){return 3===this.j.I};
g.k.fY=function(){this.dispatchEvent("channelOpened")};
g.k.dY=function(){this.dispatchEvent("channelClosed")};
g.k.eY=function(a){this.dispatchEvent(new Vlb(a))};
g.k.onError=function(){this.dispatchEvent(new Wlb(401===this.j.Tg?1:0))};
g.k.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.k.rq=function(a){this.j.rq(a)};
g.k.dispose=function(){this.j.dispose()};var nmb=Date.now(),$8=null,d9=Array(50),c9=-1,e9=!1;g.Sa(f9,g.FB);f9.prototype.bk=function(){return this.screens};
f9.prototype.contains=function(a){return!!Hjb(this.screens,a)};
f9.prototype.get=function(a){return a?g8(this.screens,a):null};
f9.prototype.info=function(a){a9(this.I,a)};g.v(rmb,g.FB);g.k=rmb.prototype;g.k.start=function(){!this.j&&isNaN(this.Cc)&&this.KU()};
g.k.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.Cc)||(g.Mv(this.Cc),this.Cc=NaN)};
g.k.ra=function(){this.stop();g.FB.prototype.ra.call(this)};
g.k.KU=function(){this.Cc=NaN;this.j=g.Pv(Z8(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Oa)(this.hY,this),onError:(0,g.Oa)(this.gY,this),onTimeout:(0,g.Oa)(this.iY,this)})};
g.k.hY=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ma("pairingComplete",new d8(a),b)};
g.k.gY=function(a){this.j=null;a.status&&404==a.status?this.u>=Bob.length?this.ma("pairingFailed",Error("DIAL polling timed out")):(a=Bob[this.u],this.Cc=g.Kv((0,g.Oa)(this.KU,this),a),this.u++):this.ma("pairingFailed",Error("Server error "+a.status))};
g.k.iY=function(){this.j=null;this.ma("pairingFailed",Error("Server not responding"))};
var Bob=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Sa(h9,f9);g.k=h9.prototype;g.k.start=function(){g9(this)&&this.ma("screenChange");!g.VA("yt-remote-lounge-token-expiration")&&smb(this);g.Mv(this.j);this.j=g.Kv((0,g.Oa)(this.start,this),1E4)};
g.k.add=function(a,b){g9(this);omb(this,a);i9(this,!1);this.ma("screenChange");b(a);a.token||smb(this)};
g.k.remove=function(a,b){var c=g9(this);qmb(this,a)&&(i9(this,!1),c=!0);b(a);c&&this.ma("screenChange")};
g.k.ZG=function(a,b,c,d){var e=g9(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,i9(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ma("screenChange")};
g.k.ra=function(){g.Mv(this.j);h9.vf.ra.call(this)};
g.k.Q0=function(a){g9(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}i9(this,!b);b&&a9(this.I,"Missed "+b+" lounge tokens.")};
g.k.P0=function(a){a9(this.I,"Requesting lounge tokens failed: "+a)};g.v(umb,g.FB);g.k=umb.prototype;g.k.start=function(){var a=parseInt(g.VA("yt-remote-fast-check-period")||"0",10);(this.C=g.Ra()-144E5<a?0:a)?j9(this):(this.C=g.Ra()+3E5,g.UA("yt-remote-fast-check-period",this.C),this.TM())};
g.k.isEmpty=function(){return g.Uc(this.j)};
g.k.update=function(){tmb("Updating availability on schedule.");var a=this.I(),b=g.Kc(this.j,function(c,d){return c&&!!g8(a,d)},this);
xmb(this,b)};
g.k.ra=function(){g.Mv(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.FB.prototype.ra.call(this)};
g.k.TM=function(){g.Mv(this.B);this.B=NaN;this.u&&this.u.abort();var a=ymb(this);if(sjb(a)){var b=Z8(this.D,"/pairing/get_screen_availability");this.u=amb(this.D,b,{lounge_token:g.Pc(a).join(",")},(0,g.Oa)(this.L4,this,a),(0,g.Oa)(this.K4,this))}else xmb(this,{}),j9(this)};
g.k.L4=function(a,b){this.u=null;var c=g.Pc(ymb(this));if(g.Db(c,g.Pc(a))){b=b.screens||[];c={};for(var d=b.length,e=0;e<d;++e)c[a[b[e].loungeToken]]="online"==b[e].status;xmb(this,c);j9(this)}else this.If("Changing Screen set during request."),this.TM()};
g.k.K4=function(a){this.If("Screen availability failed: "+a);this.u=null;j9(this)};
g.k.If=function(a){a9("OnlineScreenService",a)};g.Sa(k9,f9);g.k=k9.prototype;g.k.start=function(){this.u.start();this.j.start();this.screens.length&&(this.ma("screenChange"),this.j.isEmpty()||this.ma("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.k.ZG=function(a,b,c,d){this.u.contains(a)?this.u.ZG(a,b,c,d):(a="Updating name of unknown screen: "+a.name,a9(this.I,a),d(Error(a)))};
g.k.bk=function(a){return a?this.screens:g.tb(this.screens,g.vm(this.B,function(b){return!this.contains(b)},this))};
g.k.oP=function(){return g.vm(this.bk(!0),function(a){return!!this.j.j[a.id]},this)};
g.k.pP=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new rmb(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.ab(l);e(l9(h,m),n)});
l.subscribe("pairingFailed",function(m){g.ab(l);f(m)});
l.start();return(0,g.Oa)(l.stop,l)};
g.k.jY=function(a,b,c,d){g.Pv(Z8(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Oa)(function(e,f){e=new d8(f.screen||{});if(!e.name||Cmb(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);Cmb(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(l9(this,e))},this),
onError:(0,g.Oa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Oa)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ra=function(){g.ab(this.u);g.ab(this.j);k9.vf.ra.call(this)};
g.k.Z0=function(){Emb(this);this.ma("screenChange");this.j.update()};
k9.prototype.dispose=k9.prototype.dispose;g.Sa(m9,g.FB);g.k=m9.prototype;g.k.getScreen=function(){return this.C};
g.k.Qi=function(a){this.isDisposed()||(a&&(o9(this,""+a),this.ma("sessionFailed")),this.C=null,this.ma("sessionScreen",null))};
g.k.info=function(a){a9(this.Ba,a)};
g.k.qP=function(){return null};
g.k.lN=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Oa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Oa)(function(){o9(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ra=function(){this.lN("");m9.vf.ra.call(this)};g.v(p9,m9);g.k=p9.prototype;g.k.kN=function(a){if(this.u){if(this.u==a)return;o9(this,"Overriding cast session with new session object");Qmb(this);this.ya=!1;this.Z="unknown";this.u.removeUpdateListener(this.oa);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa)}this.u=a;this.u.addUpdateListener(this.oa);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa);Lmb(this,"getMdxSessionStatus")};
g.k.Sx=function(a){this.info("launchWithParams no-op for Cast: "+g.Oh(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.Oa)(function(){this.Qi()},this),(0,g.Oa)(function(){this.Qi(Error("Failed to stop receiver app."))},this)):this.Qi(Error("Stopping cast device without session."))};
g.k.lN=function(){};
g.k.ra=function(){this.info("disposeInternal");Qmb(this);this.u&&(this.u.removeUpdateListener(this.oa),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.Aa));this.u=null;m9.prototype.ra.call(this)};
g.k.x5=function(a,b){if(!this.isDisposed())if(b)if(b=a8(b),g.La(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Oh(b)),a){case "mdxSessionStatus":Imb(this,b);break;case "loungeToken":Mmb(this,b);break;default:o9(this,"Unknown youtube message: "+a)}else o9(this,"Unable to parse message.");else o9(this,"No data in message.")};
g.k.cS=function(a,b,c,d){g.Mv(this.T);this.T=0;Bmb(this.B,this.j.label,a,this.j.friendlyName,(0,g.Oa)(function(e){e?b(e):0<=d?(o9(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.T=g.Kv((0,g.Oa)(this.cS,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.qP=function(){return this.u};
g.k.kY=function(a){this.isDisposed()||a||(o9(this,"Cast session died."),this.Qi())};g.v(q9,m9);g.k=q9.prototype;g.k.kN=function(a){this.u=a;this.u.addUpdateListener(this.Ka)};
g.k.Sx=function(a){this.Ma=a;this.ea()};
g.k.stop=function(){Ymb(this);this.u?this.u.stop((0,g.Oa)(this.Qi,this,null),(0,g.Oa)(this.Qi,this,"Failed to stop DIAL device.")):this.Qi()};
g.k.ra=function(){Ymb(this);this.u&&this.u.removeUpdateListener(this.Ka);this.u=null;m9.prototype.ra.call(this)};
g.k.lY=function(a){this.isDisposed()||a||(o9(this,"DIAL session died."),this.D(),this.D=function(){},this.Qi())};g.v(t9,m9);t9.prototype.stop=function(){this.Qi()};
t9.prototype.kN=function(){};
t9.prototype.Sx=function(){g.Mv(this.u);this.u=NaN;var a=g8(this.B.bk(),this.j.label);a?n9(this,a):this.Qi(Error("No such screen"))};
t9.prototype.ra=function(){g.Mv(this.u);this.u=NaN;m9.prototype.ra.call(this)};g.v(u9,g.FB);g.k=u9.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.T,[chrome.cast.Capability.AUDIO_OUT]);this.Z||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Oa)(this.w4,this);c=new chrome.cast.ApiConfig(c,(0,g.Oa)(this.uU,this),e,d,a);c.customDialLaunchCallback=(0,g.Oa)(this.s3,this);
chrome.cast.initialize(c,(0,g.Oa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),kmb(),this.u.subscribe("onlineScreenChange",(0,g.Oa)(this.rP,this)),this.B=anb(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(f){this.If("Failed to set initial custom receivers: "+g.Oh(f))},this)),this.ma("yt-remote-cast2-availability-change",w9(this)),b(!0))},this),(0,g.Oa)(function(f){this.If("Failed to initialize API: "+g.Oh(f));
b(!1)},this))};
g.k.j6=function(a,b){v9("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)v9("Unsetting old screen status: "+this.j.j.friendlyName),x9(this,null)}if(a&&b){if(!this.j){c=g8(this.u.bk(),a);if(!c){v9("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){v9("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=Zmb(this,c);a||(v9("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(d){this.If("Failed to set initial custom receivers: "+g.Oh(d))},this)));
v9("setConnectedScreenStatus: new active receiver: "+a.friendlyName);x9(this,new t9(this.u,a),!0)}this.j.lN(b)}else v9("setConnectedScreenStatus: no screen.")};
g.k.k6=function(a){this.isDisposed()?this.If("Setting connection data on disposed cast v2"):this.j?this.j.Sx(a):this.If("Setting connection data without a session")};
g.k.nY=function(){this.isDisposed()?this.If("Stopping session on disposed cast v2"):this.j?(this.j.stop(),x9(this,null)):v9("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Oa)(this.uU,this),(0,g.Oa)(this.O4,this))};
g.k.ra=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Oa)(this.rP,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=hmb,b=g.Fa("yt.mdx.remote.debug.handlers_");g.qb(b||[],a);g.ab(this.j);g.FB.prototype.ra.call(this)};
g.k.If=function(a){a9("Controller",a)};
g.k.wU=function(a,b){this.j==a&&(b||x9(this,null),this.ma("yt-remote-cast2-session-change",b))};
g.k.t4=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),v9("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)v9("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{v9("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.ma("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:x9(this,
new t9(this.u,a));break;case chrome.cast.ReceiverType.DIAL:x9(this,new q9(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:x9(this,new p9(this.u,a,this.config_));break;default:this.If("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.If("Stopping receiver w/o session: "+a.friendlyName)}else this.If("onReceiverAction_ called without receiver.")};
g.k.s3=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.If("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.If("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return v9("Reselecting dial screen."),
this.ma("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.If('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);x9(this,new q9(this.u,b,this.C,this.config_))}b=this.j;b.T=a;b.T.appState==chrome.cast.DialAppState.RUNNING?(a=b.T.extraData||{},c=a.screenId||null,r9(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=Vmb(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.T.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.uv(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=Wmb(b,c)):a=Wmb(b,c)):a=Tmb(b);return a};
g.k.uU=function(a){var b=this;if(!this.isDisposed()&&!this.I){v9("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)v9("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),x9(this,new p9(this.u,c,this.config_),!0);else{this.If("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=g8(this.u.bk(),
d.label);e&&e8(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(v9("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.ab(this.j),this.j=new p9(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Oa)(this.wU,this,this.j)),this.j.subscribe("sessionFailed",function(){return $mb(b,b.j)}),this.j.Sx(null));
this.j.kN(a)}}};
g.k.mY=function(){return this.j?this.j.qP():null};
g.k.O4=function(a){this.isDisposed()||(this.If("Failed to estabilish a session: "+g.Oh(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&x9(this,null),this.ma("yt-remote-cast2-session-failed"))};
g.k.w4=function(a){v9("Receiver availability updated: "+a);if(!this.isDisposed()){var b=w9(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;w9(this)!=b&&this.ma("yt-remote-cast2-availability-change",w9(this))}};
g.k.rP=function(){this.isDisposed()||(this.B=anb(this),v9("Updating custom receivers: "+g.Oh(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Oa)(function(){this.If("Failed to set custom receivers.")},this)),this.ma("yt-remote-cast2-availability-change",w9(this)))};
u9.prototype.setLaunchParams=u9.prototype.k6;u9.prototype.setConnectedScreenStatus=u9.prototype.j6;u9.prototype.stopSession=u9.prototype.nY;u9.prototype.getCastSession=u9.prototype.mY;u9.prototype.requestSession=u9.prototype.requestSession;u9.prototype.init=u9.prototype.init;u9.prototype.dispose=u9.prototype.dispose;var jnb=[];g.k=E9.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";pnb(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.ao=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.T=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Wc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.Bk=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+F9(this):this.D};
g.k.clone=function(){return new E9(qnb(this))};g.v(K9,g.FB);g.k=K9.prototype;g.k.getState=function(){return this.B};
g.k.Jr=function(){return this.C.getReconnectTimeout()};
g.k.tv=function(){this.C.reconnect()};
g.k.play=function(){M9(this)?(this.j?this.j.play(null,g.vd,Q9(this,"play")):P9(this,"play"),tnb(this,1,H9(L9(this))),this.ma("remotePlayerChange")):N9(this,this.play)};
g.k.pause=function(){M9(this)?(this.j?this.j.pause(null,g.vd,Q9(this,"pause")):P9(this,"pause"),tnb(this,2,H9(L9(this))),this.ma("remotePlayerChange")):N9(this,this.pause)};
g.k.seekTo=function(a){if(M9(this)){if(this.j){var b=L9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Wc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.vd,Q9(this,"seekTo",{newTime:a}))}else P9(this,"seekTo",{newTime:a});tnb(this,3,a);this.ma("remotePlayerChange")}else N9(this,g.Qa(this.seekTo,a))};
g.k.stop=function(){if(M9(this)){this.j?this.j.stop(null,g.vd,Q9(this,"stopVideo")):P9(this,"stopVideo");var a=L9(this);a.index=-1;a.videoId="";pnb(a);O9(this,a);this.ma("remotePlayerChange")}else N9(this,this.stop)};
g.k.setVolume=function(a,b){if(M9(this)){var c=L9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Oa)(function(){b9("set receiver volume: "+d)},this),(0,g.Oa)(function(){this.If("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Oa)(function(){b9("set receiver muted: "+b)},this),(0,g.Oa)(function(){this.If("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);P9(this,"setVolume",e)}c.muted=b;c.volume=a;O9(this,c)}else N9(this,g.Qa(this.setVolume,a,b))};
g.k.sP=function(a,b){if(M9(this)){var c=L9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Oh(b.style),g.$c(a,c.trackData));P9(this,"setSubtitlesTrack",a);O9(this,c)}else N9(this,g.Qa(this.sP,a,b))};
g.k.setAudioTrack=function(a,b){M9(this)?(b=b.getLanguageInfo().getId(),P9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=L9(this),a.audioTrackId=b,O9(this,a)):N9(this,g.Qa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=L9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);I9(l,a,c||0);void 0!==b&&(G9(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.Oh(h));P9(this,"setPlaylist",m);d||O9(this,l)};
g.k.fG=function(a,b){if(M9(this)){if(a&&b){var c=L9(this);I9(c,a,b);O9(this,c)}P9(this,"previous")}else N9(this,g.Qa(this.fG,a,b))};
g.k.nextVideo=function(a,b){if(M9(this)){if(a&&b){var c=L9(this);I9(c,a,b);O9(this,c)}P9(this,"next")}else N9(this,g.Qa(this.nextVideo,a,b))};
g.k.Uw=function(){if(M9(this)){P9(this,"clearPlaylist");var a=L9(this);a.reset();O9(this,a);this.ma("remotePlayerChange")}else N9(this,this.Uw)};
g.k.rR=function(){M9(this)?P9(this,"dismissAutoplay"):N9(this,this.rR)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ma("proxyStateChange",a,this.B)}g.FB.prototype.dispose.call(this)};
g.k.ra=function(){snb(this);this.C=null;this.D.clear();J9(this,null);g.FB.prototype.ra.call(this)};
g.k.nN=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ma("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.k.r4=function(a,b){this.ma(a,b)};
g.k.g3=function(a){if(!a)this.IB(null),J9(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=L9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)b9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,O9(this,b)}};
g.k.IB=function(a){b9("Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.T);if(this.j=a)this.j.addUpdateListener(this.T),unb(this),this.ma("remotePlayerChange")};
g.k.f3=function(a){a?(unb(this),this.ma("remotePlayerChange")):this.IB(null)};
g.k.PN=function(){P9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.h3=function(){var a=mnb();a&&J9(this,a)};
g.k.If=function(a){a9("CP",a)};g.v(T9,g.FB);g.k=T9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ka&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;G9(this.j,
n);this.D="UNSUPPORTED";c=this.Ka?"setInitialState":"setPlaylist";R9("Connecting with "+c+" and params: "+g.Oh(m));this.u.connect({method:c,params:g.Oh(m)},a,Njb())}else R9("Connecting without params"),this.u.connect({},a,Njb());ynb(this)};
g.k.rq=function(a){this.u.rq(a)};
g.k.dispose=function(){this.isDisposed()||(g.Da("yt.mdx.remote.remoteClient_",null),this.ma("beforeDispose"),S9(this,3));g.FB.prototype.dispose.call(this)};
g.k.ra=function(){znb(this);Bnb(this);Anb(this);g.Mv(this.T);this.T=NaN;g.Mv(this.Z);this.Z=NaN;this.C=null;g.Sy(this.ea);this.ea.length=0;this.u.dispose();g.FB.prototype.ra.call(this);this.D=this.J=this.B=this.j=this.u=null};
g.k.OS=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.t(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.F0=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.PA())?this.u.Ix()&&isNaN(this.I)&&(a=1):a=2);return a};
g.k.lx=function(a){R9("Disconnecting with "+a);g.Da("yt.mdx.remote.remoteClient_",null);znb(this);this.ma("beforeDisconnect",a);1==a&&j8();this.u.disconnect(a);this.dispose()};
g.k.D0=function(){var a=this.j;this.C&&(a=this.j.clone(),I9(a,this.C,a.index));return qnb(a)};
g.k.l6=function(a){var b=this,c=new E9(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.Mv(this.T),this.T=g.Kv(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&U9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&H9(this.j)==H9(c)&&g.Oh(this.j.trackData)==g.Oh(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.Fb(d,function(e){this.ma(e)},this)};
g.k.aS=function(){var a=this.u.zr(),b=g.ib(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.PA=function(){return this.u.Jr()};
g.k.y0=function(){return this.D||"UNSUPPORTED"};
g.k.z0=function(){return this.J||""};
g.k.oY=function(){!isNaN(this.PA())&&this.u.tv()};
g.k.h6=function(a,b){U9(this,a,b);Dnb(this)};
g.k.tP=function(){var a=g.$v("SID","")||"",b=g.$v("SAPISID","")||"",c=g.$v("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Df(g.Cf(a),2);b=g.Df(g.Cf(b),2);c=g.Df(g.Cf(c),2);return g.Df(g.Cf(a+","+b+","+c),2)};
T9.prototype.subscribe=T9.prototype.subscribe;T9.prototype.unsubscribeByKey=T9.prototype.rh;T9.prototype.getProxyState=T9.prototype.F0;T9.prototype.disconnect=T9.prototype.lx;T9.prototype.getPlayerContextData=T9.prototype.D0;T9.prototype.setPlayerContextData=T9.prototype.l6;T9.prototype.getOtherConnectedRemoteId=T9.prototype.aS;T9.prototype.getReconnectTimeout=T9.prototype.PA;T9.prototype.getAutoplayMode=T9.prototype.y0;T9.prototype.getAutoplayVideoId=T9.prototype.z0;T9.prototype.reconnect=T9.prototype.oY;
T9.prototype.sendMessage=T9.prototype.h6;T9.prototype.getXsrfToken=T9.prototype.tP;T9.prototype.isCapabilitySupportedOnConnectedDevices=T9.prototype.OS;g.v(Pnb,f9);g.k=Pnb.prototype;g.k.bk=function(a){return this.Dg.$_gs(a)};
g.k.contains=function(a){return!!this.Dg.$_c(a)};
g.k.get=function(a){return this.Dg.$_g(a)};
g.k.start=function(){this.Dg.$_st()};
g.k.add=function(a,b,c){this.Dg.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Dg.$_r(a,b,c)};
g.k.ZG=function(a,b,c,d){this.Dg.$_un(a,b,c,d)};
g.k.ra=function(){for(var a=0,b=this.j.length;a<b;++a)this.Dg.$_ubk(this.j[a]);this.j.length=0;this.Dg=null;f9.prototype.ra.call(this)};
g.k.pY=function(){this.ma("screenChange")};
g.k.X3=function(){this.ma("onlineScreenChange")};
k9.prototype.$_st=k9.prototype.start;k9.prototype.$_gspc=k9.prototype.jY;k9.prototype.$_gsppc=k9.prototype.pP;k9.prototype.$_c=k9.prototype.contains;k9.prototype.$_g=k9.prototype.get;k9.prototype.$_a=k9.prototype.add;k9.prototype.$_un=k9.prototype.ZG;k9.prototype.$_r=k9.prototype.remove;k9.prototype.$_gs=k9.prototype.bk;k9.prototype.$_gos=k9.prototype.oP;k9.prototype.$_s=k9.prototype.subscribe;k9.prototype.$_ubk=k9.prototype.rh;var e$=null,h$=!1,V9=null,W9=null,$nb=null,$9=[];g.v(eob,g.E);g.k=eob.prototype;g.k.ra=function(){g.E.prototype.ra.call(this);this.j.stop();this.u.stop();this.J.stop();var a=this.xc;a.unsubscribe("proxyStateChange",this.tU,this);a.unsubscribe("remotePlayerChange",this.MB,this);a.unsubscribe("remoteQueueChange",this.RF,this);a.unsubscribe("previousNextChange",this.qU,this);a.unsubscribe("nowAutoplaying",this.kU,this);a.unsubscribe("autoplayDismissed",this.KT,this);this.xc=this.module=null};
g.k.ek=function(a){var b=g.ya.apply(1,arguments);if(2!=this.xc.B)if(i$(this)){if(!L9(this.xc).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":L9(this.xc).Wc()?this.xc.pause():this.xc.play();break;case "control_play":this.xc.play();break;case "control_pause":this.xc.pause();break;case "control_seek":this.I.JH(b[0],b[1]);break;case "control_subtitles_set_track":gob(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();j$(this,0===b?void 0:b);break;case "control_seek":j$(this,b[0]);break;case "control_subtitles_set_track":gob(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.d3=function(a){this.J.OX(a)};
g.k.a7=function(a){this.ek("control_subtitles_set_track",g.Uc(a)?null:a)};
g.k.QV=function(){var a=this.G.getOption("captions","track");g.Uc(a)||gob(this,a)};
g.k.uc=function(a){this.module.uc(a,this.G.getVideoData().lengthSeconds)};
g.k.I3=function(){g.Uc(this.B)||hob(this,this.B);this.C=!1};
g.k.tU=function(a,b){this.u.stop();2===b&&this.HV()};
g.k.MB=function(){if(i$(this)){this.j.stop();var a=L9(this.xc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.module.lh=1;break;case 1082:case 1083:this.module.lh=0;break;default:this.module.lh=-1}switch(a.playerState){case 1081:case 1:this.kc(new g.IL(8));this.GV();break;case 1085:case 3:this.kc(new g.IL(9));break;case 1083:case 0:this.kc(new g.IL(2));this.I.stop();this.uc(this.G.getVideoData().lengthSeconds);break;case 1084:this.kc(new g.IL(4));break;case 2:this.kc(new g.IL(4));
this.uc(H9(a));break;case -1:this.kc(new g.IL(64));break;case -1E3:this.kc(new g.IL(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",jE:2}))}a=L9(this.xc).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,hob(this,a));a=L9(this.xc);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.T.isActive()||this.uW()}else fob(this)};
g.k.qU=function(){this.G.ma("mdxpreviousnextchange")};
g.k.RF=function(){i$(this)||fob(this)};
g.k.kU=function(a){isNaN(a)||this.G.ma("mdxnowautoplaying",a)};
g.k.KT=function(){this.G.ma("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){i$(this)&&this.xc.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===L9(this.xc).playerState?j$(this,a):b&&this.xc.seekTo(a)};
g.k.uW=function(){var a=this;if(i$(this)){var b=L9(this.xc);this.events.Dc(this.Z);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.Z=this.events.S(this.G,"onVolumeChange",function(c){cob(a,c)})}};
g.k.GV=function(){this.j.stop();if(!this.xc.isDisposed()){var a=L9(this.xc);a.Wc()&&this.kc(new g.IL(8));this.uc(H9(a));this.j.start()}};
g.k.HV=function(){this.u.stop();this.j.stop();var a=this.xc.Jr();2==this.xc.B&&!isNaN(a)&&this.u.start()};
g.k.kc=function(a){this.u.stop();var b=this.D;if(!g.NL(b,a)){var c=g.V(a,2);c!==g.V(this.D,2)&&this.G.Jy(c);this.D=a;job(this.module,b,a)}};g.v(k$,g.W);k$.prototype.Pc=function(){this.j.show()};
k$.prototype.yb=function(){this.j.hide()};
k$.prototype.u=function(){b8("mdx-privacy-popup-cancel");this.yb()};
k$.prototype.B=function(){b8("mdx-privacy-popup-confirm");this.yb()};g.v(l$,g.W);l$.prototype.onStateChange=function(a){this.Fc(a.state)};
l$.prototype.Fc=function(a){if(3===this.api.getPresentingPlayerType()){var b={RECEIVER_NAME:this.api.getOption("remote","currentReceiver").name};a=g.V(a,128)?g.qL("Error on $RECEIVER_NAME",b):a.Wc()||g.OL(a)?g.qL("Playing on $RECEIVER_NAME",b):g.qL("Connected to $RECEIVER_NAME",b);this.updateValue("statustext",a);this.j.show()}else this.j.hide()};g.v(m$,g.bU);m$.prototype.B=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.Js=g.Gb(a,this.j,this),g.cU(this,g.Lg(a,this.j)),a=this.G.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.dj(a),this.enable(!0)):this.enable(!1)};
m$.prototype.j=function(a){return a.key};
m$.prototype.Vk=function(a){return"cast-selector-receiver"===a?"Cast...":this.Js[a].name};
m$.prototype.Lg=function(a){g.bU.prototype.Lg.call(this,a);this.G.setOption("remote","currentReceiver",this.Js[a]);this.ob.yb()};g.v(iob,g.LQ);g.k=iob.prototype;
g.k.create=function(){var a=this.player.V(),b=g.zH(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};Unb(b,a);this.subscriptions.push(g.kz("yt-remote-before-disconnect",this.Z2,this));this.subscriptions.push(g.kz("yt-remote-connection-change",this.x4,this));this.subscriptions.push(g.kz("yt-remote-receiver-availability-change",this.sU,
this));this.subscriptions.push(g.kz("yt-remote-auto-connect",this.v4,this));this.subscriptions.push(g.kz("yt-remote-receiver-resumed",this.u4,this));this.subscriptions.push(g.kz("mdx-privacy-popup-confirm",this.L5,this));this.subscriptions.push(g.kz("mdx-privacy-popup-cancel",this.K5,this));this.sU()};
g.k.load=function(){this.player.cancelPlayback();g.LQ.prototype.load.call(this);this.Wk=new eob(this,this.player,this.xc);var a=(a=bob())?a.currentTime:0;var b=Znb()?new K9(d$(),void 0):null;0==a&&b&&(a=H9(L9(b)));0!==a&&this.uc(a);job(this,this.Qd,this.Qd);this.player.Jo(6)};
g.k.unload=function(){this.player.ma("mdxautoplaycanceled");this.Xq=this.Ao;g.bb(this.Wk,this.xc);this.xc=this.Wk=null;g.LQ.prototype.unload.call(this);this.player.Jo(5);n$(this)};
g.k.ra=function(){g.lz(this.subscriptions);g.LQ.prototype.ra.call(this)};
g.k.Co=function(a){var b=g.ya.apply(1,arguments);this.loaded&&this.Wk.ek.apply(this.Wk,[a].concat(g.u(b)))};
g.k.getAdState=function(){return this.lh};
g.k.ao=function(){return this.xc?L9(this.xc).ao:!1};
g.k.hasNext=function(){return this.xc?L9(this.xc).hasNext:!1};
g.k.uc=function(a,b){this.bT=a||0;this.player.ma("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.bT};
g.k.getProgressState=function(){var a=L9(this.xc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:!a.isAdPlaying()&&this.player.kh(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+F9(a):a.B,isAtLiveHead:1>=(a.u?a.j+F9(a):a.j)-this.getCurrentTime(),loaded:a.T,seekableEnd:a.u?a.j+F9(a):a.j,seekableStart:0<a.C?a.C+F9(a):a.C,offset:0}};
g.k.nextVideo=function(){this.xc&&this.xc.nextVideo()};
g.k.fG=function(){this.xc&&this.xc.fG()};
g.k.Z2=function(a){1===a&&(this.CM=this.xc?L9(this.xc):null)};
g.k.x4=function(){var a=Znb()?new K9(d$(),void 0):null;if(a){var b=this.Xq;this.loaded&&this.unload();this.xc=a;this.CM=null;b.key!==this.Ao.key&&(this.Xq=b,this.load())}else g.ab(this.xc),this.xc=null,this.loaded&&(this.unload(),(a=this.CM)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,H9(a)));this.player.ma("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.sU=function(){var a=[this.Ao],b=a.concat,c=Vnb();B9()&&g.VA("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Js=b.call(a,c);a=Xnb()||this.Ao;o$(this,a);this.player.Oa("onMdxReceiversChange")};
g.k.v4=function(){var a=Xnb();o$(this,a)};
g.k.u4=function(){this.Xq=Xnb()};
g.k.L5=function(){this.YB=!0;n$(this);h$=!1;e$&&g$(e$,1);e$=null};
g.k.K5=function(){this.YB=!1;n$(this);o$(this,this.Ao);this.Xq=this.Ao;h$=!1;e$=null;this.player.playVideo()};
g.k.hh=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Js;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?nnb():o$(this,b)),this.loaded?this.Xq:this.Ao;case "quickCast":return 2===this.Js.length&&"cast-selector-receiver"===this.Js[1].key?(b&&nnb(),!0):!1}};
g.k.PN=function(){this.xc.PN()};
g.k.Ck=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.KQ("remote",iob);})(_yt_player);


}
/*
     FILE ARCHIVED ON 23:52:16 Dec 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:44:04 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 474.989
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.055
  cdx.remote: 0.055
  esindex: 0.008
  LoadShardBlock: 86.014 (3)
  PetaboxLoader3.datanode: 112.704 (5)
  load_resource: 142.208 (2)
  PetaboxLoader3.resolve: 105.967 (2)
*/