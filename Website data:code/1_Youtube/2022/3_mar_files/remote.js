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

(function(g){var window=this;'use strict';var CZa=function(a,b,c){null!=c&&(g.ud(a,b,1),a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Fe=b,g.Ee=c,g.sd(a,g.Fe),g.sd(a,g.Ee))},DZa=function(a,b,c){b=g.Jd(b,c);
null!=b&&(g.ud(a,c,0),a.j.j.push(b?1:0))},EZa=function(a,b){return g.Af(a,b)},FZa=function(a,b){b=b instanceof g.Cg?b:g.Ig(b,/^data:image\//i.test(b));
a.src=g.Dg(b)},HZa=function(a){g.F.call(this,a,-1,GZa)},IZa=function(a){g.F.call(this,a)},LZa=function(){return[1,
JZa,2,KZa]},MZa=function(){return[1,
g.Zp,IZa,LZa]},NZa=function(a){g.F.call(this,a)},OZa=function(a){g.F.call(this,a)},QZa=function(){return[1,
g.aq,2,g.aq,3,PZa]},RZa=function(a){g.F.call(this,a)},TZa=function(){return[1,
g.aq,2,g.aq,3,SZa,4,PZa]},VZa=function(){return[1,
g.Xe,OZa,QZa,UZa,2,g.Xe,RZa,TZa,UZa]},ZZa=function(){return[1,
WZa,g.Qi,2,XZa,g.Qi,3,YZa,g.Qi]},b_a=function(){return[1,
$Za,g.Pi,2,a_a,g.Pi,3,g.Xe,HZa,MZa,g.Pi]},d_a=function(){return[1,
g.Zp,g.Ni,ZZa,2,c_a,g.Oi,b_a]},h_a=function(){return[1,
g.aq,5,e_a,2,c_a,NZa,VZa,3,f_a,6,g_a,4,g.Zp,g.Mi,d_a]},l6=function(a){g.Ek(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ua()).toString(36));
return a},m6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.rda(a.B,b,c)},i_a=function(a){if(a===g.pn)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},j_a=function(a){if(a instanceof g.nn)return a;
if("function"==typeof a.Vg)return a.Vg(!1);if(g.Na(a)){var b=0,c=new g.nn;c.next=function(){for(;;){if(b>=a.length)return g.s1;if(b in a)return g.on(a[b++]);b++}};
var d=c.next;c.Rj=function(){return g.qn(d.call(c))};
return c}throw Error("Not implemented");},k_a=function(a,b,c){if(g.Na(a))try{g.wc(a,b,c)}catch(e){i_a(e)}else for(a=j_a(a);;){var d=void 0;
try{d=a.Rj()}catch(e){if(e===g.pn)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){i_a(e)}}},l_a=function(a,b){var c=[];
k_a(b,function(d){try{var e=g.Hp.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.mia(e)&&c.push(d)},a);
return c},m_a=function(a,b){l_a(a,b).forEach(function(c){g.Hp.prototype.remove.call(this,c)},a)},n_a=function(a){if(a.oa){if(a.oa.locationOverrideToken)return{locationOverrideToken:a.oa.locationOverrideToken};
if(null!=a.oa.latitudeE7&&null!=a.oa.longitudeE7)return{latitudeE7:a.oa.latitudeE7,longitudeE7:a.oa.longitudeE7}}return null},o_a=function(a,b){g.dc(a,b)||a.push(b)},n6=function(a){var b=0,c;
for(c in a)b++;return b},p_a=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},o6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return p_a(a)},q_a=function(a,b,c,d){var e=new g.wk(null,void 0);
a&&g.xk(e,a);b&&g.yk(e,b);c&&g.zk(e,c);d&&(e.K=d);return e},p6=function(a,b){g.Rs[a]=!0;
var c=g.Ps();c&&c.publish.apply(c,arguments);g.Rs[a]=!1},q6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.pp;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",r_a(this,a.capabilities||""),s_a(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},r_a=function(a,b){a.capabilities.clear();
g.un(b.split(","),g.Ta(EZa,t_a)).forEach(function(c){a.capabilities.add(c)})},s_a=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},r6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},s6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},u_a=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},v_a=function(a){return new r6(a)},w_a=function(a){return Array.isArray(a)?g.Fl(a,v_a):[]},t6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},u6=function(a){return Array.isArray(a)?"["+g.Fl(a,t6).join(",")+"]":"null"},v6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},x_a=function(a){return g.Fl(a,function(b){return{key:b.id,
name:b.name}})},w6=function(a,b){return g.Yb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},x6=function(a,b){return g.Yb(a,function(c){return s6(c,b)})},y_a=function(){var a=(0,g.yw)();
a&&m_a(a,a.j.Vg(!0))},y6=function(){var a=g.Bw("yt-remote-connected-devices")||[];
g.tc(a);return a},z_a=function(a){if(g.ec(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Fl(a,function(d,e){return 0==e?d:d.substring(c.length)})},A_a=function(a){g.Aw("yt-remote-connected-devices",a,86400)},A6=function(){if(z6)return z6;
var a=g.Bw("yt-remote-device-id");a||(a=v6(),g.Aw("yt-remote-device-id",a,31536E3));for(var b=y6(),c=1,d=a;g.dc(b,d);)c++,d=a+"#"+c;return z6=d},B6=function(){var a=y6(),b=A6();
g.dc(a,b);g.Dw()&&g.vc(a,b);a=z_a(a);if(g.ec(a))try{g.Nla("remote_sid")}catch(c){}else try{g.Vr("remote_sid",a.join(","),-1)}catch(c){}},B_a=function(){return g.Bw("yt-remote-session-browser-channel")},C_a=function(){return g.Bw("yt-remote-local-screens")||[]},D_a=function(){g.Aw("yt-remote-lounge-token-expiration",!0,86400)},E_a=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Fl(C_a(),function(d){return d.loungeToken}),c=g.Fl(a,function(d){return d.loungeToken});
g.Ml(c,function(d){return!g.dc(b,d)})&&D_a();
g.Aw("yt-remote-local-screens",a,31536E3)},C6=function(a){a||(g.Cw("yt-remote-session-screen-id"),g.Cw("yt-remote-session-video-id"));
B6();a=y6();g.hc(a,A6());A_a(a)},F_a=function(){if(!D6){var a=g.Qp();
a&&(D6=new g.Ep(a))}},G_a=function(){F_a();
return D6?!!D6.get("yt-remote-use-staging-server"):!1},E6=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},H_a=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},I_a=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},F6=function(a){a.length?J_a(a.shift(),function(){F6(a)}):G6()},K_a=function(a){return"chrome-extension://"+a+"/cast_sender.js"},J_a=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Uj(d,g.up(a));(document.head||document.documentElement).appendChild(d)},L_a=function(){var a=E6(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20220301000151/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20220301000151/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},G6=function(){var a=I_a();
a&&a(!1,"No cast extension found")},H6=function(){if(M_a){var a=2,b=I_a(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;J_a("//web.archive.org/web/20220301000151/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",G6,c)}},N_a=function(){H6();
var a=L_a();a.push("//web.archive.org/web/20220301000151/https://www.gstatic.com/eureka/clank/cast_sender.js");F6(a)},P_a=function(){H6();
var a=L_a();a.push.apply(a,g.v(O_a.map(K_a)));a.push("//web.archive.org/web/20220301000151/https://www.gstatic.com/eureka/clank/cast_sender.js");F6(a)},Q_a=function(){this.j=I6();
this.j.rz("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},R_a=function(){this.j=I6();
this.j.rz("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},S_a=function(){this.j=I6();
this.j.rz("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},J6=function(a,b,c){g.I.call(this);
this.J=null!=c?(0,g.Sa)(a,c):a;this.eg=b;this.D=(0,g.Sa)(this.uS,this);this.j=!1;this.u=0;this.B=this.Qb=null;this.C=[]},K6=function(a,b,c){g.I.call(this);
this.C=null!=c?a.bind(c):a;this.eg=b;this.B=null;this.j=!1;this.u=0;this.Qb=null},L6=function(a){a.Qb=g.Gi(function(){a.Qb=null;
a.j&&!a.u&&(a.j=!1,L6(a))},a.eg);
var b=a.B;a.B=null;a.C.apply(null,b)},M6=function(){},N6=function(){g.ff.call(this,"p")},O6=function(){g.ff.call(this,"o")},T_a=function(){var a=new g.C.TextEncoder;
return new g.C.ReadableStream({start:function(b){for(var c=g.q(["test\r\n","test\r\n"]),d=c.next();!d.done;d=c.next())b.enqueue(a.encode(d.value));b.close()}})},U_a=function(a){return(a=/\/\/([^\/]+)\//.exec(a))?a[1].endsWith("google.com"):!1},W_a=function(a,b){if(!V_a){V_a=!0;
var c;a:{if(c=g.C.navigator)if(c=c.userAgent)break a;c=""}(-1==c.indexOf("Chrome")||-1!=c.indexOf("Edg")?0:90<=parseInt(/Chrome\/(\d+)/.exec(c)[1],10))&&U_a(a)&&window&&window.document&&U_a(window.document.URL)&&(c=document.createElement("meta"),c.httpEquiv="origin-trial",c.content="A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
document.head.appendChild(c),(new Request("",{body:new ReadableStream,method:"POST"})).headers.has("Content-Type")||(g.C.fetch(a+"?ot=1",{method:"POST",body:"test\r\n"}).catch(b),g.C.fetch(a+"?ot=2",{method:"POST",body:T_a(),sT:!1}).catch(b),g.C.fetch(a+"?ot=3",{method:"POST",body:T_a(),sT:!0}).catch(b)))}},P6=function(){return X_a=X_a||new g.dg},Y_a=function(a){g.ff.call(this,"serverreachability",a)},Q6=function(a){var b=P6();
b.dispatchEvent(new Y_a(b,a))},Z_a=function(a,b){g.ff.call(this,"statevent",a);
this.stat=b},R6=function(a){var b=P6();
b.dispatchEvent(new Z_a(b,a))},$_a=function(a,b,c,d){g.ff.call(this,"timingevent",a);
this.size=b;this.vu=d},S6=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},T6=function(){},U6=function(a,b,c,d){this.D=a;
this.C=b;this.Gb=c;this.Eb=d||1;this.Ya=new g.Jk(this);this.kb=45E3;a=g.HD?125:void 0;this.bb=new g.Fi(a);this.Ia=null;this.B=!1;this.N=this.Va=this.K=this.Ja=this.oa=this.qb=this.X=null;this.ma=[];this.j=null;this.Z=0;this.J=this.xa=null;this.rb=-1;this.Ea=!1;this.jb=0;this.Sa=null;this.Cb=this.Na=this.tb=this.ya=!1;this.u=new a0a},a0a=function(){this.B=null;
this.j="";this.u=!1},V6=function(a,b,c){a.Ja=1;
a.K=l6(b.clone());a.N=c;a.ya=!0;b0a(a,null)},b0a=function(a,b){a.oa=Date.now();
W6(a);a.Va=a.K.clone();m6(a.Va,"t",a.Eb);a.Z=0;var c=a.D.Ja;a.u=new a0a;a.j=c0a(a.D,c?b:null,!a.N);0<a.jb&&(a.Sa=new K6((0,g.Sa)(a.QJ,a,a.j),a.jb));a.Ya.Qa(a.j,"readystatechange",a.xS);b=a.Ia?g.Kf(a.Ia):{};a.N?(a.xa||(a.xa="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Va,a.xa,a.N,b)):(a.xa="GET",a.j.send(a.Va,a.xa,null,b));Q6(1)},X6=function(a){return a.j?a.u.u?!0:!(!g.Cj(a.j)&&!g.Dj(a.j)):!1},d0a=function(a){return a.j?"GET"==a.xa&&2!=a.Ja&&a.D.bd:!1},f0a=function(a,b,
c){for(var d=!0,e;!a.Ea&&a.Z<c.length;)if(e=e0a(a,c),e==Y6){4==b&&(a.J=4,R6(14),d=!1);
break}else if(e==Z6){a.J=4;R6(15);d=!1;break}else $6(a,e);d0a(a)&&e!=Y6&&e!=Z6&&(a.u.j="",a.Z=0);4!=b||0!=c.length||a.u.u||(a.J=1,R6(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.Cb&&(a.Cb=!0,a.D.MG(a)):(a7(a),b7(a))},e0a=function(a,b){var c=a.Z,d=b.indexOf("\n",c);
if(-1==d)return Y6;c=Number(b.substring(c,d));if(isNaN(c))return Z6;d+=1;if(d+c>b.length)return Y6;b=b.substr(d,c);a.Z=d+c;return b},W6=function(a){a.qb=Date.now()+a.kb;
g0a(a,a.kb)},g0a=function(a,b){if(null!=a.X)throw Error("WatchDog timer not null");
a.X=S6((0,g.Sa)(a.vS,a),b)},c7=function(a){a.X&&(g.C.clearTimeout(a.X),a.X=null)},b7=function(a){a.D.bf()||a.Ea||h0a(a.D,a)},a7=function(a){c7(a);
g.cf(a.Sa);a.Sa=null;a.bb.stop();g.Kk(a.Ya);if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},$6=function(a,b){try{var c=a.D;
if(0!=c.nf&&(c.j==a||d7(c.u,a)))if(!a.Na&&d7(c.u,a)&&3==c.nf){try{var d=c.Vf.j.parse(b)}catch(y){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.N){if(c.j)if(c.j.oa+3E3<a.oa)e7(c),f7(c);else break a;g7(c);R6(18)}}else c.Dc=e[1],0<c.Dc-c.Na&&37500>e[2]&&c.bb&&0==c.ma&&!c.Z&&(c.Z=S6((0,g.Sa)(c.zS,c),6E3));if(1>=h7(c.u)&&c.Tb){try{c.Tb()}catch(y){}c.Tb=void 0}}else i7(c,11)}else if((a.Na||c.j==a)&&e7(c),!g.nb(b))for(e=c.Vf.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Na=f[0];f=f[1];
if(2==c.nf)if("c"==f[0]){c.C=f[1];c.Cb=f[2];var k=f[3];null!=k&&(c.RJ=k);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Va=1.5*l);d=c;var m=a.j;if(m){var n=g.Ej(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.vb(n,"spdy")||g.vb(n,"quic")||g.vb(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(j7(p,p.u),p.u=null))}if(d.ya){var r=g.Ej(m,"X-HTTP-Session-Id");r&&(d.Wc=r,g.Ek(d.Ia,d.ya,r))}}c.nf=3;c.D&&c.D.XJ();c.Sb&&(c.Ub=Date.now()-a.oa);d=c;var t=a;d.Wb=i0a(d,d.Ja?d.Cb:null,d.Gb);if(t.Na){j0a(d.u,t);var u=
t,x=d.Va;x&&u.setTimeout(x);u.X&&(c7(u),W6(u));d.j=t}else k0a(d);0<c.B.length&&k7(c)}else"stop"!=f[0]&&"close"!=f[0]||i7(c,7);else 3==c.nf&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?i7(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.WJ(f),c.ma=0)}Q6(4)}catch(y){}},l0a=function(a,b){this.j=a;
this.map=b;this.context=null},m0a=function(a){this.D=a||10;
g.C.PerformanceNavigationTiming?(a=g.C.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.C.chrome&&g.C.chrome.loadTimes&&g.C.chrome.loadTimes()&&g.C.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},n0a=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},h7=function(a){return a.u?1:a.j?a.j.size:0},d7=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},j7=function(a,
b){a.j?a.j.add(b):a.u=b},j0a=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},l7=function(a){if(null!=a.u)return a.B.concat(a.u.ma);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.q(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.ma);return b}return g.kc(a.B)},o0a=function(a,b){var c=new T6;
if(g.C.Image){var d=new Image;d.onload=g.Ta(m7,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Ta(m7,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Ta(m7,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Ta(m7,c,d,"TestLoadImage: timeout",!1,b);g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},m7=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},p0a=function(){this.j=new M6},q0a=function(a,b,c){var d=c||"";
try{g.vk(a,function(e,f){var k=e;g.Pa(e)&&(k=g.fj(e));b.push(d+f+"="+encodeURIComponent(k))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},n7=function(a,b,c){return c&&c.fV?c.fV[a]||b:b},r0a=function(a){this.B=[];
this.Cb=this.Wb=this.Ia=this.Gb=this.j=this.Wc=this.ya=this.Ea=this.K=this.qb=this.X=null;this.Pd=this.Sa=0;this.Fd=n7("failFast",!1,a);this.bb=this.Z=this.N=this.J=this.D=null;this.Lb=!0;this.Eb=this.Dc=this.Na=-1;this.tb=this.ma=this.oa=0;this.md=n7("baseRetryDelayMs",5E3,a);this.ge=n7("retryDelaySeedMs",1E4,a);this.Od=n7("forwardChannelMaxRetries",2,a);this.lc=n7("forwardChannelRequestTimeoutMs",2E4,a);this.Vc=a&&a.xha||void 0;this.bd=a&&a.vha||!1;this.Va=void 0;this.Ja=a&&a.RZ||!1;this.C="";this.u=
new m0a(a&&a.pga);this.Vf=new p0a;this.kb=a&&a.Bga||!1;this.jb=a&&a.zga||!1;this.kb&&this.jb&&(this.jb=!1);this.je=a&&a.kga||!1;a&&a.Dga&&(this.Lb=!1);this.Sb=!this.kb&&this.Lb&&a&&a.wga||!1;this.Tb=void 0;this.Ub=0;this.Ya=!1;this.xa=null;this.Tg=!a||!1!==a.yga;this.rb=null},f7=function(a){a.j&&(o7(a),a.j.cancel(),a.j=null)},s0a=function(a){f7(a);
a.N&&(g.C.clearTimeout(a.N),a.N=null);e7(a);a.u.cancel();a.J&&("number"===typeof a.J&&g.C.clearTimeout(a.J),a.J=null)},k7=function(a){n0a(a.u)||a.J||(a.J=!0,g.ii(a.TJ,a),a.oa=0)},u0a=function(a,b){if(h7(a.u)>=a.u.C-(a.J?1:0))return!1;
if(a.J)return a.B=b.ma.concat(a.B),!0;if(1==a.nf||2==a.nf||a.oa>=(a.Fd?0:a.Od))return!1;a.J=S6((0,g.Sa)(a.TJ,a,b),t0a(a,a.oa));a.oa++;return!0},w0a=function(a,b){var c;
b?c=b.Gb:c=a.Sa++;var d=a.Ia.clone();g.Ek(d,"SID",a.C);g.Ek(d,"RID",c);g.Ek(d,"AID",a.Na);p7(a,d);a.K&&a.X&&g.Ik(d,a.K,a.X);c=new U6(a,a.C,c,a.oa+1);null===a.K&&(c.Ia=a.X);b&&(a.B=b.ma.concat(a.B));b=v0a(a,c,1E3);c.setTimeout(Math.round(.5*a.lc)+Math.round(.5*a.lc*Math.random()));j7(a.u,c);V6(c,d,b)},p7=function(a,b){a.Ea&&g.qf(a.Ea,function(c,d){g.Ek(b,d,c)});
a.D&&g.vk({},function(c,d){g.Ek(b,d,c)})},v0a=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Sa)(a.D.AS,a.D,a):null;a:for(var e=a.B,f=-1;;){var k=["count="+c];-1==f?0<c?(f=e[0].j,k.push("ofs="+f)):f=0:k.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{q0a(p,k,"req"+n+"_")}catch(r){d&&d(p)}}if(l){d=k.join("&");break a}}a=a.B.splice(0,c);b.ma=a;return d},k0a=function(a){a.j||a.N||(a.tb=1,g.ii(a.SJ,a),a.ma=0)},g7=function(a){if(a.j||a.N||3<=a.ma)return!1;
a.tb++;a.N=S6((0,g.Sa)(a.SJ,a),t0a(a,a.ma));a.ma++;return!0},o7=function(a){null!=a.xa&&(g.C.clearTimeout(a.xa),a.xa=null)},x0a=function(a){a.j=new U6(a,a.C,"rpc",a.tb);
null===a.K&&(a.j.Ia=a.X);a.j.jb=0;var b=a.Wb.clone();g.Ek(b,"RID","rpc");g.Ek(b,"SID",a.C);g.Ek(b,"CI",a.bb?"0":"1");g.Ek(b,"AID",a.Na);g.Ek(b,"TYPE","xmlhttp");p7(a,b);a.K&&a.X&&g.Ik(b,a.K,a.X);a.Va&&a.j.setTimeout(a.Va);var c=a.j;a=a.Cb;c.Ja=1;c.K=l6(b.clone());c.N=null;c.ya=!0;b0a(c,a)},e7=function(a){null!=a.Z&&(g.C.clearTimeout(a.Z),a.Z=null)},h0a=function(a,b){var c=null;
if(a.j==b){e7(a);o7(a);a.j=null;var d=2}else if(d7(a.u,b))c=b.ma,j0a(a.u,b),d=1;else return;if(0!=a.nf)if(a.Eb=b.rb,b.B)if(1==d){c=b.N?b.N.length:0;b=Date.now()-b.oa;var e=a.oa;d=P6();d.dispatchEvent(new $_a(d,c,b,e));k7(a)}else k0a(a);else if(e=b.getLastError(),3==e||0==e&&0<a.Eb||!(1==d&&u0a(a,b)||2==d&&g7(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:i7(a,5);break;case 4:i7(a,10);break;case 3:i7(a,6);break;default:i7(a,2)}},t0a=function(a,b){var c=a.md+Math.floor(Math.random()*
a.ge);
a.isActive()||(c*=2);return c*b},i7=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Sa)(a.XZ,a);c||(c=new g.wk("//web.archive.org/web/20220301000151/https://www.google.com/images/cleardot.gif"),g.C.location&&"http"==g.C.location.protocol||g.xk(c,"https"),l6(c));o0a(c.toString(),d)}else R6(2);a.nf=0;a.D&&a.D.VJ(b);y0a(a);s0a(a)},y0a=function(a){a.nf=0;
a.rb=[];if(a.D){var b=l7(a.u);if(0!=b.length||0!=a.B.length)g.lc(a.rb,b),g.lc(a.rb,a.B),a.u.B.length=0,g.kc(a.B),a.B.length=0;a.D.UJ()}},z0a=function(a){if(0==a.nf)return a.rb;
var b=[];g.lc(b,l7(a.u));g.lc(b,a.B);return b},i0a=function(a,b,c){var d=g.Fk(c);
""!=d.j?(b&&g.yk(d,b+"."+d.j),g.zk(d,d.u)):(d=g.C.location,d=q_a(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.ya;c=a.Wc;b&&c&&g.Ek(d,b,c);g.Ek(d,"VER",a.RJ);p7(a,d);return d},c0a=function(a,b,c){if(b&&!a.Ja)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.bd&&!a.Vc?new g.wj(new g.rk({OP:!0})):new g.wj(a.Vc);b.K=a.Ja;return b},A0a=function(){},B0a=function(){if(g.Nc&&!g.Gc(10))throw Error("Environmental error: no available transport.");
},r7=function(a,b){g.dg.call(this);
this.j=new r0a(b);this.J=a;this.u=b&&b.HV||null;a=b&&b.GV||null;b&&b.oga&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.X=a;a=b&&b.Jga||null;b&&b.zN&&(a?a["X-WebChannel-Content-Type"]=b.zN:a={"X-WebChannel-Content-Type":b.zN});b&&b.uL&&(a?a["X-WebChannel-Client-Profile"]=b.uL:a={"X-WebChannel-Client-Profile":b.uL});this.j.qb=a;(a=b&&b.Gga)&&!g.nb(a)&&(this.j.K=a);this.K=b&&b.RZ||!1;this.D=b&&b.lha||!1;(b=b&&b.bV)&&!g.nb(b)&&(this.j.ya=b,g.zf(this.u,b)&&g.Ff(this.u,
b));this.C=new q7(this)},C0a=function(a){N6.call(this);
var b=a.__sm__;b?this.data=(this.metadataKey=g.vf(b))?g.Gf(b,this.metadataKey):b:this.data=a},D0a=function(a){O6.call(this);
this.status=1;this.errorCode=a},q7=function(a){this.j=a},s7=function(a){return new E0a(a,a.j)},E0a=function(a,b){this.u=a;
this.j=b},F0a=function(a){return z0a(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?p_a(b):b);return b})},t7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},v7=function(a){u7.dispatchEvent(new G0a(u7,a))},G0a=function(a,b){g.ff.call(this,"statevent",a);
this.stat=b},w7=function(a,b,c,d){this.j=a;
this.C=b;this.K=c;this.J=d||1;this.u=45E3;this.B=new g.Jk(this);this.D=new g.Fi;this.D.setInterval(250)},I0a=function(a,b,c){a.rs=1;
a.Bn=l6(b.clone());a.Kp=c;a.ya=!0;H0a(a,null)},x7=function(a,b,c,d,e){a.rs=1;
a.Bn=l6(b.clone());a.Kp=null;a.ya=c;e&&(a.AP=!1);H0a(a,d)},H0a=function(a,b){a.qs=Date.now();
y7(a);a.Dn=a.Bn.clone();m6(a.Dn,"t",a.J);a.kz=0;a.Mf=a.j.wD(a.j.Ev()?b:null);0<a.uD&&(a.iz=new K6((0,g.Sa)(a.YJ,a,a.Mf),a.uD));a.B.Qa(a.Mf,"readystatechange",a.CS);b=a.Jp?g.Kf(a.Jp):{};a.Kp?(a.jz="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Mf.send(a.Dn,a.jz,a.Kp,b)):(a.jz="GET",a.AP&&!g.kf&&(b.Connection="close"),a.Mf.send(a.Dn,a.jz,null,b));a.j.Sj(1)},K0a=function(a,b){var c=a.kz,d=b.indexOf("\n",c);
if(-1==d)return z7;c=Number(b.substring(c,d));if(isNaN(c))return J0a;d+=1;if(d+c>b.length)return z7;b=b.substr(d,c);a.kz=d+c;return b},M0a=function(a,b){a.qs=Date.now();
y7(a);var c=b?window.location.hostname:"";a.Dn=a.Bn.clone();g.Ek(a.Dn,"DOMAIN",c);g.Ek(a.Dn,"t",a.J);try{a.lk=new ActiveXObject("htmlfile")}catch(m){A7(a);a.Cn=7;v7(22);B7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in C7)f=C7[f];else if(f in L0a)f=C7[f]=L0a[f];else{var k=f.charCodeAt(0);if(31<k&&127>k)var l=f;else{if(256>k){if(l="\\x",16>k||256<k)l+="0"}else l="\\u",4096>k&&(l+="0");l+=k.toString(16).toUpperCase()}f=
C7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Xg(g.ug("b/12014412"),d);a.lk.open();a.lk.write(g.Tg(c));a.lk.close();a.lk.parentWindow.m=(0,g.Sa)(a.LY,a);a.lk.parentWindow.d=(0,g.Sa)(a.FO,a,!0);a.lk.parentWindow.rpcClose=(0,g.Sa)(a.FO,a,!1);c=a.lk.createElement("DIV");a.lk.parentWindow.document.body.appendChild(c);d=g.Hg(a.Dn.toString());d=g.ph(g.Dg(d));d=g.Xg(g.ug("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Zg(c,d);a.j.Sj(1)},y7=function(a){a.vD=Date.now()+
a.u;
N0a(a,a.u)},N0a=function(a,b){if(null!=a.us)throw Error("WatchDog timer not null");
a.us=t7((0,g.Sa)(a.BS,a),b)},D7=function(a){a.us&&(g.C.clearTimeout(a.us),a.us=null)},B7=function(a){a.j.bf()||a.Ip||a.j.lz(a)},A7=function(a){D7(a);
g.cf(a.iz);a.iz=null;a.D.stop();g.Kk(a.B);if(a.Mf){var b=a.Mf;a.Mf=null;b.abort();b.dispose()}a.lk&&(a.lk=null)},E7=function(a,b){try{a.j.ZJ(a,b),a.j.Sj(4)}catch(c){}},P0a=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;O0a(a,b,function(k){k?c(!0):g.C.setTimeout(function(){P0a(a,b,c,d,f)},f)})}},O0a=function(a,b,c){var d=new Image;
d.onload=function(){try{F7(d),c(!0)}catch(e){}};
d.onerror=function(){try{F7(d),c(!1)}catch(e){}};
d.onabort=function(){try{F7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{F7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
FZa(d,a)},F7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},Q0a=function(a){this.j=a;
this.u=new M6},R0a=function(a){var b=G7(a.j,a.Sv,"/mail/images/cleardot.gif");
l6(b);P0a(b.toString(),5E3,(0,g.Sa)(a.zT,a),3,2E3);a.Sj(1)},I7=function(a){var b=a.j.X;
if(null!=b)v7(5),b?(v7(11),H7(a.j,a,!1)):(v7(12),H7(a.j,a,!0));else if(a.Sg=new w7(a,void 0,void 0,void 0),a.Sg.Jp=a.xD,b=a.j,b=G7(b,b.Ev()?a.Dv:null,a.yD),v7(5),!g.Nc||g.Gc(10))m6(b,"TYPE","xmlhttp"),x7(a.Sg,b,!1,a.Dv,!1);else{m6(b,"TYPE","html");var c=a.Sg;a=!!a.Dv;c.rs=3;c.Bn=l6(b.clone());M0a(c,a)}},J7=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new M6;this.N=a||null;this.X=null!=b?b:null;this.K=c||!1},S0a=function(a,b){this.j=a;
this.map=b;this.context=null},T0a=function(a,b,c,d){g.ff.call(this,"timingevent",a);
this.size=b;this.vu=d},U0a=function(a){g.ff.call(this,"serverreachability",a)},V0a=function(a){a.DS(1,0);
a.mz=G7(a,null,a.zD);K7(a)},W0a=function(a){a.Nn&&(a.Nn.abort(),a.Nn=null);
a.Qe&&(a.Qe.cancel(),a.Qe=null);a.Rl&&(g.C.clearTimeout(a.Rl),a.Rl=null);L7(a);a.gh&&(a.gh.cancel(),a.gh=null);a.En&&(g.C.clearTimeout(a.En),a.En=null)},X0a=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new S0a(a.ES++,b));2!=a.j&&3!=a.j||K7(a)},Y0a=function(a){var b=0;
a.Qe&&b++;a.gh&&b++;return b},K7=function(a){a.gh||a.En||(a.En=t7((0,g.Sa)(a.dK,a),0),a.xs=0)},$0a=function(a,b){if(1==a.j){if(!b){a.Gv=Math.floor(1E5*Math.random());
b=a.Gv++;var c=new w7(a,"",b,void 0);c.Jp=a.Bk;var d=M7(a),e=a.mz.clone();g.Ek(e,"RID",b);g.Ek(e,"CVER","1");N7(a,e);I0a(c,e,d);a.gh=c;a.j=2}}else 3==a.j&&(b?Z0a(a,b):0==a.u.length||a.gh||Z0a(a))},Z0a=function(a,b){if(b)if(6<a.Lp){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.Gv-1;b=M7(a)}else c=b.K,b=b.Kp;else c=a.Gv++,b=M7(a);var d=a.mz.clone();g.Ek(d,"SID",a.C);g.Ek(d,"RID",c);g.Ek(d,"AID",a.ys);N7(a,d);c=new w7(a,a.C,c,a.xs+1);c.Jp=a.Bk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.gh=c;I0a(c,d,b)},N7=function(a,b){a.Uf&&(a=a.Uf.hK())&&g.qf(a,function(c,d){g.Ek(b,d,c)})},M7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Lp&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Mr:e.Mr},f++){e.Mr=a.u[f].j;var k=a.u[f].map;e.Mr=6>=a.Lp?f:e.Mr-d;try{g.qf(k,function(l){return function(m,n){c.push("req"+l.Mr+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Mr+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},a1a=function(a){a.Qe||a.Rl||(a.J=1,a.Rl=t7((0,g.Sa)(a.cK,a),0),a.ws=0)},O7=function(a){if(a.Qe||a.Rl||3<=a.ws)return!1;
a.J++;a.Rl=t7((0,g.Sa)(a.cK,a),b1a(a,a.ws));a.ws++;return!0},H7=function(a,b,c){a.yC=c;
a.Ck=b.Ql;a.K||V0a(a)},L7=function(a){null!=a.Mp&&(g.C.clearTimeout(a.Mp),a.Mp=null)},b1a=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},P7=function(a,b){if(2==b||9==b){var c=null;
a.Uf&&(c=null);var d=(0,g.Sa)(a.WZ,a);c||(c=new g.wk("//web.archive.org/web/20220301000151/https://www.google.com/images/cleardot.gif"),l6(c));O0a(c.toString(),1E4,d)}else v7(2);c1a(a,b)},c1a=function(a,b){a.j=0;
a.Uf&&a.Uf.eK(b);d1a(a);W0a(a)},d1a=function(a){a.j=0;
a.Ck=-1;if(a.Uf)if(0==a.B.length&&0==a.u.length)a.Uf.AD();else{var b=g.kc(a.B),c=g.kc(a.u);a.B.length=0;a.u.length=0;a.Uf.AD(b,c)}},G7=function(a,b,c){var d=g.Fk(c);
if(""!=d.j)b&&g.yk(d,b+"."+d.j),g.zk(d,d.u);else{var e=window.location;d=q_a(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Fv&&g.qf(a.Fv,function(f,k){g.Ek(d,k,f)});
g.Ek(d,"VER",a.Lp);N7(a,d);return d},e1a=function(){},f1a=function(){this.j=[];
this.u=[]},g1a=function(){},I6=function(){if(!Q7){Q7=new g.Ii(new g1a);
var a=g.mr("client_streamz_web_flush_count",-1);-1!==a&&(Q7.C=a)}return Q7},R7=function(a){g.ff.call(this,"channelMessage");
this.message=a},S7=function(a){g.ff.call(this,"channelError");
this.error=a},h1a=function(a,b){this.action=a;
this.params=b||{}},T7=function(a,b){g.I.call(this);
this.j=new g.K(this.CY,0,this);g.J(this,this.j);this.eg=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Sa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Sa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},U7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.oa=a;this.K=b;this.B=new g.Dp;this.u=new T7(this.zZ,this);this.j=null;this.Z=!1;this.J=null;this.X="";this.N=this.D=0;this.C=[];this.ya=c;this.ma=d;this.Ea=e;this.xa=new Q_a;this.Ia=new R_a;this.Ja=new S_a},V7=function(a){if(a.j){var b=a.ma(),c=a.j.Bk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Bk=c}},W7=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.lj(4,a))||"";b&&(this.port=":"+b);this.domain=g.mj(a)||"";a=g.Ab();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.zb(a,"10.0")&&(this.u=!1))},X7=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.sj(c+b,{})},Y7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ta(a.C,d,!0),onError:g.Ta(a.B,e),onTimeout:g.Ta(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Mr(b,a)},Z7=function(a,b){g.dg.call(this);
var c=this;this.Lc=a();this.Lc.subscribe("handlerOpened",this.JS,this);this.Lc.subscribe("handlerClosed",this.HS,this);this.Lc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Lc.subscribe("handlerMessage",this.IS,this);this.j=b},i1a=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new B0a:e;var f=void 0===f?new g.Dp:f;this.pathPrefix=a;this.j=b;this.oa=c;this.D=f;this.N=null;this.J=this.X=this.K=0;this.B=new T7(function(){var k;d.B.isActive();0===(null===(k=d.channel)||void 0===k?void 0:h7(s7(k).j.u))&&d.connect(d.N,d.K)});
this.C={};this.u={};this.Z=!1;this.logger=null;this.ma=[];this.channel=null},k1a=function(a){g.Tf(a.channel,"m",function(){a.J=3;
a.B.reset();a.N=null;a.K=0;for(var b=g.q(a.ma),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.ma=[];a.ea("webChannelOpened")});
g.Tf(a.channel,"n",function(){var b;a.J=0;a.B.isActive()||a.ea("webChannelClosed");var c=null===(b=a.channel)||void 0===b?void 0:F0a(s7(b));c&&(a.ma=[].concat(g.v(c)))});
g.Tf(a.channel,"p",function(b){b=b.data;"gracefulReconnect"===b[0]?(a.B.start(),a.channel&&a.channel.close()):a.ea("webChannelMessage",new h1a(b[0],b[1]))});
g.Tf(a.channel,"o",function(){j1a(a)||a.B.start();a.ea("webChannelError")})},j1a=function(a){var b;
return 401===(null===(b=a.channel)||void 0===b?void 0:s7(b).j.Eb)},$7=function(a){var b=a.oa();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},a8=function(a){g.dg.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.MS,this);this.j.subscribe("webChannelClosed",this.KS,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.LS,this)},l1a=function(a,b,c,d,e){function f(){return new U7(X7(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.P("enable_mdx_web_channel_desktop")?new a8(function(){return new i1a(X7(a,"/wc"),b,c)}):new Z7(f,e)},p1a=function(){var a=m1a;
n1a();b8.push(a);o1a()},c8=function(a,b){n1a();
var c=q1a(a,String(b));g.ec(b8)?r1a(c):(o1a(),g.wc(b8,function(d){d(c)}))},n1a=function(){b8||(b8=g.Ja("yt.mdx.remote.debug.handlers_")||[],g.Ia("yt.mdx.remote.debug.handlers_",b8,void 0))},r1a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},o1a=function(){var a=b8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.wc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},q1a=function(a,b){var c=(Date.now()-s1a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.Kv.call(this);
this.J=a;this.screens=[]},t1a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},u1a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.un(a.screens,function(f){return!!w6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=t1a(a,b[d])||c;return c},v1a=function(a,b){var c=a.screens.length;
a.screens=g.un(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.Kv.call(this);
this.B=a;this.K=b;this.C=c;this.J=d;this.D=e;this.u=0;this.j=null;this.Qb=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.u=a;this.j=NaN;i8(this);this.info("Initializing with "+u6(this.screens))},w1a=function(a){if(a.screens.length){var b=g.Fl(a.screens,function(d){return d.id}),c=X7(a.u,"/pairing/get_lounge_token_batch");
Y7(a.u,c,{screen_ids:b.join(",")},(0,g.Sa)(a.DU,a),(0,g.Sa)(a.CU,a))}},i8=function(a){if(g.P("deprecate_pair_servlet_enabled"))return u1a(a,[]);
var b=w_a(C_a());b=g.un(b,function(c){return!c.uuid});
return u1a(a,b)},k8=function(a,b){E_a(g.Fl(a.screens,u_a));
b&&D_a()},m8=function(a,b){g.Kv.call(this);
this.J=b;b=(b=g.Bw("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.J(),e=0,f=d.length;e<f;++e){var k=d[e].id;c[k]=g.dc(b,k)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;l8("Initialized with "+g.fj(this.j))},n8=function(a,b,c){var d=X7(a.D,"/pairing/get_screen_availability");
Y7(a.D,d,{lounge_token:b.token},(0,g.Sa)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Sa)(function(){c(!1)},a))},o8=function(a,b){a:if(n6(b)!=n6(a.j))var c=!1;
else{c=g.yf(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.fj(a.j)),a.j=b,a.ea("screenChange"));x1a(a)},p8=function(a){isNaN(a.B)||g.Ir(a.B);
a.B=g.Gr((0,g.Sa)(a.yH,a),0<a.C&&a.C<g.Ua()?2E4:1E4)},l8=function(a){c8("OnlineScreenService",a)},y1a=function(a){var b={};
g.wc(a.J(),function(c){c.token?b[c.token]=c.id:this.Be("Requesting availability of screen w/o lounge token.")});
return b},x1a=function(a){a=g.yf(g.rf(a.j,function(b){return b}));
g.tc(a);a.length?g.Aw("yt-remote-online-screen-ids",a.join(","),60):g.Cw("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.C=a;this.K=b;this.j=this.u=null;this.B=[];this.D={};z1a(this)},B1a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.Lh(),l=c?x6(k,c):null;c&&(a.K||l)||(l=x6(k,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.j,m,function(n){e(n?m:null)})}else c?A1a(a,c,(0,g.Sa)(function(n){var p=r8(this,new r6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.j,p,function(r){e(r?p:null)})},a),f):e(null)},C1a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},D1a=function(a,b,c){n8(a.j,b,c)},A1a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){f=k&&k.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Mr(X7(a.C,"/pairing/get_lounge_token_batch"),e)},E1a=function(a){a.screens=a.u.Lh();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+u6(a.screens))},z1a=function(a){s8(a);
a.u=new j8(a.C);a.u.subscribe("screenChange",(0,g.Sa)(a.MU,a));E1a(a);a.K||(a.B=w_a(g.Bw("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+u6(a.B));a.j=new m8(a.C,(0,g.Sa)(a.Lh,a,!0));a.j.subscribe("screenChange",(0,g.Sa)(function(){this.ea("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=x6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||F1a(a));s8(a);a.D[b.uuid]=b.id;g.Aw("yt-remote-device-id-map",a.D,31536E3);return b},F1a=function(a){a=g.un(a.B,function(b){return"shortLived"!=b.idType});
g.Aw("yt-remote-automatic-screen-cache",g.Fl(a,u_a))},s8=function(a){a.D=g.Bw("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.Kv.call(this);
this.ya=c;this.B=a;this.j=b;this.C=null},u8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},G1a=function(a,b){a.C&&(a.C.token=b,r8(a.B,a.C));
a.ea("sessionScreen",a.C)},v8=function(a,b){c8(a.ya,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.ma=(0,g.Sa)(this.RS,this);this.xa=(0,g.Sa)(this.WY,this);this.Z=g.Gr(function(){H1a(d,null)},12E4);
this.K=this.D=this.J=this.N=0;this.oa=!1;this.X="unknown"},x8=function(a,b){g.Ir(a.K);
a.K=0;0==b?I1a(a):a.K=g.Gr(function(){I1a(a)},b)},I1a=function(a){J1a(a,"getLoungeToken");
g.Ir(a.D);a.D=g.Gr(function(){K1a(a,null)},3E4)},J1a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.fj(void 0));
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Sa)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.fj(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.nM(b,function(c){u8(a,c)},function(){return a.Gg()},5)):a.Gg(Error("Waiting for session status timed out."))},M1a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new r6(b);L1a(a,d,function(e){e?(a.oa=!0,r8(a.B,d),u8(a,d),a.X="unknown",x8(a,c)):(g.qr(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Gg())},5)},H1a=function(a,b){g.Ir(a.Z);
a.Z=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?M1a(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.qr(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.qr(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Gg(Error("Waiting for session status timed out."))},K1a=function(a,b){g.Ir(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.X=c,x8(a,3E4)):(G1a(a,b.loungeToken),a.oa=!1,a.X="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},L1a=function(a,b,c,d){g.Ir(a.J);
a.J=0;D1a(a.B,b,function(e){e||0>d?c(e):a.J=g.Gr(function(){L1a(a,b,c,d-1)},300)})},N1a=function(a){g.Ir(a.N);
a.N=0;g.Ir(a.J);a.J=0;g.Ir(a.Z);a.Z=0;g.Ir(a.D);a.D=0;g.Ir(a.K);a.K=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.N=null;this.xa="";this.Ja=c;this.Ia=null;this.Z=function(){};
this.X=NaN;this.Ea=(0,g.Sa)(this.SS,this);this.D=function(){};
this.K=this.J=0;this.ma=!1;this.oa="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},O1a=function(a){a.D=a.B.jK(a.xa,a.j.label,a.j.friendlyName,A8(a),function(b,c){a.D=function(){};
a.ma=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.D=function(){};
a.Gg(b)})},P1a=function(a){var b={};
b.pairingCode=a.xa;b.theme=a.Ja;G_a()&&(b.env_useStageMdx=1);return g.qj(b)},C8=function(a){return new Promise(function(b){a.xa=v6();
if(a.Ia){var c=new chrome.cast.DialLaunchResponse(!0,P1a(a));b(c);O1a(a)}else a.Z=function(){g.Ir(a.X);a.Z=function(){};
a.X=NaN;var d=new chrome.cast.DialLaunchResponse(!0,P1a(a));b(d);O1a(a)},a.X=g.Gr(function(){a.Z()},100)})},R1a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new r6(b);return(new Promise(function(e){Q1a(a,d,function(f){f?(a.ma=!0,r8(a.B,d),u8(a,d),B8(a,c)):g.qr(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},S1a=function(a,b){var c=a.N.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){B1a(a.B,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},Q1a=function(a,b,c,d){g.Ir(a.J);
a.J=0;D1a(a.B,b,function(e){e||0>d?c(e):a.J=g.Gr(function(){Q1a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.Ir(a.K),a.K=0,0==b?T1a(a):a.K=g.Gr(function(){T1a(a)},b))},T1a=function(a){A8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.oa=c,B8(a,3E4)):(a.ma=!1,a.oa="unknown",G1a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.oa="noLoungeTokenResponse";B8(a,3E4)})},U1a=function(a){g.Ir(a.J);
a.J=0;g.Ir(a.K);a.K=0;a.D();a.D=function(){};
g.Ir(a.X)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.u=g.Gr((0,g.Sa)(this.Ot,this,null),150)},E8=function(a,b){g.Kv.call(this);
this.config_=b;this.u=a;this.N=b.appId||"233637DE";this.C=b.theme||"cl";this.X=b.disableCastApi||!1;this.J=b.forceMirroring||!1;this.j=null;this.K=!1;this.B=[];this.D=(0,g.Sa)(this.QX,this)},V1a=function(a,b){return b?g.Yb(a.B,function(c){return s6(b,c.label)},a):null},F8=function(a){c8("Controller",a)},m1a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.K||!!a.B.length||!!a.j},H8=function(a,b,c){b!=a.j&&(g.cf(a.j),(a.j=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.j):a.ea("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Sa)(a.DO,a,b)),b.subscribe("sessionFailed",function(){return W1a(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Ot(null)):a.ea("yt-remote-cast2-session-change",null))},W1a=function(a,b){a.j==b&&a.ea("yt-remote-cast2-session-failed")},X1a=function(a){var b=a.u.iK(),c=a.j&&a.j.j;
a=g.Fl(b,function(d){c&&s6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=V1a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},b2a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):Y1a()?Z1a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?$1a(a,c):(window.__onGCastApiAvailable=function(e,f){e?$1a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.Cw("yt-remote-cast-available"),g.Cw("yt-remote-cast-receiver"),
a2a(),c(!1))},d.loadCastApiSetupScript?g.Ew("https://web.archive.org/web/20220301000151/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=E6()&&N_a():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?G6():89<=E6()?P_a():(H6(),F6(O_a.map(K_a))))):I8("Cannot initialize because not running Chrome")},a2a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ia("yt.mdx.remote.cloudview.instance_",null,void 0);c2a(!1);g.Us(N8);N8.length=0},O8=function(){return!!g.Bw("yt-remote-cast-installed")},d2a=function(){var a=g.Bw("yt-remote-cast-receiver");
return a?a.friendlyName:null},e2a=function(){I8("clearCurrentReceiver");
g.Cw("yt-remote-cast-receiver")},f2a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.Ts("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},Y1a=function(){var a=0<=g.Ab().search(/ (CrMo|Chrome|CriOS)\//);
return g.CA||a},g2a=function(a,b){M8().init(a,b)},Z1a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.Aw("yt-remote-cast-available",d);p6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.Aw("yt-remote-cast-receiver",d);p6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.Aw("yt-remote-cast-receiver",d);p6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+t6(d));
d||g.Cw("yt-remote-cast-receiver");p6("yt-remote-cast2-session-change",d)}),g.Ia("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.Ja("yt.mdx.remote.cloudview.instance_")},$1a=function(a,b){L8(!0);
J8(!1);g2a(a,function(c){c?(c2a(!0),g.Vs("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.Cw("yt-remote-cast-available"),g.Cw("yt-remote-cast-receiver"),a2a());b(c)})},I8=function(a){c8("cloudview",a)},K8=function(a){c8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.Aw("yt-remote-cast-installed",a)},P8=function(){return!!g.Ja("yt.mdx.remote.cloudview.apiReady_")},c2a=function(a){I8("setApiReady_ "+a);
g.Ia("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J8=function(a){g.Ia("yt.mdx.remote.cloudview.initializing_",a,void 0)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.J=this.K=0;this.trackData=null;this.hasNext=this.il=!1;this.N=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.il=!1;a.hasNext=!1;a.K=0;a.J=g.Ua();a.C=0;a.j=0;a.D=0;a.N=0;a.B=NaN;a.u=!1},U8=function(a){return a.Jc()?(g.Ua()-a.J)/1E3:0},V8=function(a,b){a.K=b;
a.J=g.Ua()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Ua()-a.J)/1E3+a.K;
case -1E3:return 0}return a.K},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Lf(a.trackData);b.hasPrevious=a.il;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.J;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.N;b.liveIngestionTime=a.B;return b},$8=function(a,b){g.Kv.call(this);
this.B=0;this.C=a;this.J=[];this.D=new f1a;this.u=this.j=null;this.X=(0,g.Sa)(this.BW,this);this.K=(0,g.Sa)(this.zx,this);this.N=(0,g.Sa)(this.zW,this);this.Z=(0,g.Sa)(this.FW,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.QH,this),h2a(this))):c=3;0!=c&&(b?this.QH(c):g.Gr((0,g.Sa)(function(){this.QH(c)},this),0));
(a=f2a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Z)},a9=function(a){return new S8(a.C.getPlayerContextData())},h2a=function(a){g.wc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.J.push(this.C.subscribe(b,g.Ta(this.OX,b),this))},a)},i2a=function(a){g.wc(a.J,function(b){this.C.unsubscribeByKey(b)},a);
a.J.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.enqueue(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.C.sendMessage(b,c)},d9=function(a,b){i2a(a);
a.C.setPlayerContextData(Y8(b));h2a(a)},Z8=function(a,b){a.u&&(a.u.removeUpdateListener(a.X),a.u.removeMediaListener(a.K),a.zx(null));
a.u=b;a.u&&(c8("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.X),a.u.addMediaListener(a.K),a.u.media.length&&a.zx(a.u.media[0]))},j2a=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.j.getEstimatedTime());d9(a,d)}else c8("CP","No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Sa)(function(d){this.Be("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Be("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},j9=function(a,b,c,d){d=void 0===d?!1:d;
g.Kv.call(this);var e=this;this.J=NaN;this.xa=!1;this.X=this.N=this.ma=this.oa=NaN;this.Z=[];this.D=this.K=this.C=this.j=this.u=null;this.Ia=a;this.Ea=d;this.Z.push(g.zs(window,"beforeunload",function(){e.Ys(2)}));
this.B=[];this.j=new S8;this.Ja=b.id;this.ya=b.idType;this.u=l1a(this.Ia,c,this.eJ,"shortLived"==this.ya,this.Ja);this.u.Qa("channelOpened",function(){k2a(e)});
this.u.Qa("channelClosed",function(){h9("Channel closed");isNaN(e.J)?C6(!0):C6();e.dispose()});
this.u.Qa("channelError",function(f){C6();isNaN(e.Iw())?(1==f&&"shortLived"==e.ya&&e.ea("browserChannelAuthError",f),h9("Channel error: "+f+" without reconnection"),e.dispose()):(e.xa=!0,h9("Channel error: "+f+" with reconnection in "+e.Iw()+" ms"),i9(e,2))});
this.u.Qa("channelMessage",function(f){l2a(e,f)});
this.u.fn(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.Dw()&&g.Aw("yt-remote-session-video-id",f)})},m2a=function(a){return g.Yb(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},h9=function(a){c8("conn",a)},i9=function(a,b){a.ea("proxyStateChange",b)},n2a=function(a){a.J=g.Gr(function(){h9("Connecting timeout");
a.Ys(1)},2E4)},k9=function(a){g.Ir(a.J);
a.J=NaN},l9=function(a){g.Ir(a.oa);
a.oa=NaN},o2a=function(a){m9(a);
a.ma=g.Gr(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.Ir(a.ma);
a.ma=NaN},k2a=function(a){h9("Channel opened");
a.xa&&(a.xa=!1,l9(a),a.oa=g.Gr(function(){h9("Timing out waiting for a screen.");a.Ys(1)},15E3))},q2a=function(a,b){var c=null;
if(b){var d=m2a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ia("yt.mdx.remote.remoteClient_",c,void 0);b&&(k9(a),l9(a));c=a.u.It()&&isNaN(a.J);b==c?b&&(i9(a,1),n9(a,"getSubtitlesTrack")):b?(a.mM()&&a.j.reset(),i9(a,1),n9(a,"getNowPlaying"),p2a(a)):a.Ys(1)},r2a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.Df(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.ea("remotePlayerChange"))},s2a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;X8(a.j,d,e);a.ea("remoteQueueChange",c)},u2a=function(a,b){b.params=b.params||{};
s2a(a,b,"NOW_PLAYING_MAY_CHANGE");t2a(a,b);a.ea("autoplayDismissed")},t2a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.N=isNaN(c)?0:c;a.j.ek(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?o2a(a):m9(a);a.ea("remotePlayerChange")},v2a=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.j,isNaN(b)?0:b);a.ea("remotePlayerChange")}},w2a=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.ea("remotePlayerChange")},x2a=function(a,b){a.K=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},y2a=function(a,b){a.K=b.params.videoId||null;
a.ea("autoplayUpNext",a.K)},z2a=function(a,b){a.D=b.params.autoplayMode;
a.ea("autoplayModeChange",a.D);"DISABLED"==a.D&&a.ea("autoplayDismissed")},A2a=function(a,b){var c="true"==b.params.hasNext;
a.j.il="true"==b.params.hasPrevious;a.j.hasNext=c;a.ea("previousNextChange")},l2a=function(a,b){b=b.message;
b.params?h9("Received: action="+b.action+", params="+g.fj(b.params)):h9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=o6(b.params.devices);a.B=g.Fl(b,function(d){return new q6(d)});
b=!!g.Yb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
q2a(a,b);b=a.TM("mlm");a.ea("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.ic(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
q2a(a,!1);break;case "remoteConnected":var c=new q6(o6(b.params.device));g.Yb(a.B,function(d){return d.equals(c)})||o_a(a.B,c);
break;case "remoteDisconnected":c=new q6(o6(b.params.device));g.ic(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":s2a(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":u2a(a,b);break;case "onStateChange":t2a(a,b);break;case "onAdStateChange":v2a(a,b);break;case "onVolumeChanged":w2a(a,b);break;case "onSubtitlesTrackChanged":r2a(a,b);break;case "nowAutoplaying":x2a(a,b);break;case "autoplayDismissed":a.ea("autoplayDismissed");break;case "autoplayUpNext":y2a(a,b);break;case "onAutoplayModeChanged":z2a(a,b);break;case "onHasPreviousNextChanged":A2a(a,b);
break;case "requestAssistedSignIn":a.ea("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.ea("loopModeChange",b.params.loopMode);break;default:h9("Unrecognized action: "+b.action)}},p2a=function(a){g.Ir(a.X);
a.X=g.Gr(function(){a.Ys(1)},864E5)},n9=function(a,b,c){c?h9("Sending: action="+b+", params="+g.fj(c)):h9("Sending: action="+b);
a.u.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.Ye=a;this.j=[];this.j.push(this.Ye.$_s("screenChange",(0,g.Sa)(this.ZQ,this)));this.j.push(this.Ye.$_s("onlineScreenChange",(0,g.Sa)(this.vX,this)))},E2a=function(a,b){F_a();
if(!D6||!D6.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;y_a();B6();p9||(p9=new W7(b?b.loungeApiHost:void 0),G_a()&&(p9.j="/api/loungedev"));q9||(q9=g.Ja("yt.mdx.remote.deferredProxies_")||[],g.Ia("yt.mdx.remote.deferredProxies_",q9,void 0));B2a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ia("yt.mdx.remote.screenService_",d,void 0);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ia("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);b2a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){p6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ja("yt.mdx.remote.initialized_")&&(g.Ia("yt.mdx.remote.initialized_",!0,void 0),t9("Initializing: "+
g.fj(b)),u9.push(g.Ts("yt-remote-cast2-api-ready",function(){p6("yt-remote-api-ready")})),u9.push(g.Ts("yt-remote-cast2-availability-change",function(){p6("yt-remote-receiver-availability-change")})),u9.push(g.Ts("yt-remote-cast2-receiver-selected",function(){v9(null);
p6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.Ts("yt-remote-cast2-receiver-resumed",function(){p6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.Ts("yt-remote-cast2-session-change",C2a)),u9.push(g.Ts("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),e2a())})),u9.push(g.Ts("yt-remote-cast2-session-failed",function(){p6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.P("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.fj(a)),a?(g.Aw("yt-remote-session-app",a.app),g.Aw("yt-remote-session-name",a.name)):(g.Cw("yt-remote-session-app"),g.Cw("yt-remote-session-name")),g.Ia("yt.mdx.remote.channelParams_",a,void 0),c.start(),s9()||D2a())}},F2a=function(){var a=r9().Ye.$_gos();
var b=y9();b&&z9()&&(w6(a,b)||a.push(b));return x_a(a)},A9=function(){var a=G2a();
!a&&O8()&&d2a()&&(a={key:"cast-selector-receiver",name:d2a()});return a},G2a=function(){var a=F2a(),b=y9();
b||(b=w9());return g.Yb(a,function(c){return b&&s6(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Lh();return x6(b,a)},C2a=function(a){t9("remote.onCastSessionChange_: "+t6(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.fn(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){c8("remote",a)},r9=function(){if(!G9){var a=g.Ja("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.Ja("yt.mdx.remote.currentScreenId_")},H2a=function(a){g.Ia("yt.mdx.remote.currentScreenId_",a,void 0)},I2a=function(){return g.Ja("yt.mdx.remote.connectData_")},v9=function(a){g.Ia("yt.mdx.remote.connectData_",a,void 0)},z9=function(){return g.Ja("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||H2a("");g.Ia("yt.mdx.remote.connection_",a,void 0);q9&&(g.wc(q9,function(c){c(a)}),q9.length=0);
b&&!a?p6("yt-remote-connection-change",!1):!b&&a&&p6("yt-remote-connection-change",!0)},w9=function(){var a=g.Dw();
if(!a)return null;var b=r9();if(!b)return null;b=b.Lh();return x6(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{H2a(a.id);var c=g.Ja("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new j9(p9,a,x9(),c);a.connect(b,I2a());a.subscribe("beforeDisconnect",function(d){p6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},D2a=function(){var a=w9();
a?(t9("Resume connection to: "+t6(a)),D9(a,0)):(C6(),e2a(),t9("Skipping connecting because no session screen found."))},B2a=function(){var a=x9();
if(g.Df(a)){a=A6();var b=g.Bw("yt-remote-session-name")||"",c=g.Bw("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ia("yt.mdx.remote.channelParams_",a,void 0)}},x9=function(){return g.Ja("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.I.call(this);
var d=this;this.u=a;this.I=b;this.dc=c;this.events=new g.yA(this);this.Z=this.events.T(this.I,"onVolumeChange",function(e){J2a(d,e)});
this.D=!1;this.J=new g.ZH(64);this.j=new g.K(this.LP,500,this);this.B=new g.K(this.MP,1E3,this);this.N=new J6(this.q_,0,this);this.C={};this.X=new g.K(this.tQ,1E3,this);this.K=new K6(this.seekTo,1E3,this);g.J(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.gX);this.events.T(b,"captionschanged",this.xW);this.events.T(b,"captionssettingschanged",this.TP);this.events.T(b,"videoplayerreset",this.vB);this.events.T(b,"mdxautoplaycancel",function(){d.dc.IL()});
a=this.dc;a.isDisposed();a.subscribe("proxyStateChange",this.AO,this);a.subscribe("remotePlayerChange",this.Dx,this);a.subscribe("remoteQueueChange",this.vB,this);a.subscribe("previousNextChange",this.xO,this);a.subscribe("nowAutoplaying",this.rO,this);a.subscribe("autoplayDismissed",this.UN,this);g.J(this,this.j);g.J(this,this.B);g.J(this,this.N);g.J(this,this.X);g.J(this,this.K);this.TP();this.vB();this.Dx()},J2a=function(a,b){if(J9(a)){a.dc.unsubscribe("remotePlayerChange",a.Dx,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.dc);if(c!==d.volume||b!==d.muted)a.dc.setVolume(c,b),a.X.start();a.dc.subscribe("remotePlayerChange",a.Dx,a)}},K2a=function(a){a.Vb(0);
a.j.stop();a.hc(new g.ZH(64))},K9=function(a,b){if(J9(a)&&!a.D){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.Nf(c,b));a.dc.dJ(a.I.getVideoData(1).videoId,c);a.C=a9(a.dc).trackData}},L9=function(a,b){var c=a.I.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.dc.playVideo(c.videoId,b,d,e,c.playerParams,c.Ya,n_a(c));a.hc(new g.ZH(1))},L2a=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{JM:1});
c&&c.length?(a.I.setOption("captions","track",b),a.D=!1):(a.I.loadModule("captions"),a.D=!0)}else a.I.setOption("captions","track",{})},J9=function(a){return a9(a.dc).videoId===a.I.getVideoData(1).videoId},M9=function(){g.V.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-popup-title",qa:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",qa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",U:[{G:"button",Ha:["ytp-button","ytp-mdx-privacy-popup-cancel"],qa:"Cancel"},{G:"button",Ha:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],qa:"Confirm"}]}]}]});this.j=new g.GJ(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.J(this,this.j);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},N9=function(a){g.V.call(this,{G:"div",
L:"ytp-remote",U:[{G:"div",L:"ytp-remote-display-status",U:[{G:"div",L:"ytp-remote-display-status-icon",U:[g.Hza()]},{G:"div",L:"ytp-remote-display-status-text",qa:"{{statustext}}"}]}]});this.api=a;this.j=new g.GJ(this,250);g.J(this,this.j);this.T(a,"presentingplayerstatechange",this.onStateChange);M2a(this,a.zb())},M2a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.U(b,128)?g.tG("Error on $RECEIVER_NAME",c):b.Jc()||g.U(b,4)?g.tG("Playing on $RECEIVER_NAME",c):g.tG("Connected to $RECEIVER_NAME",c);a.Ma("statustext",b);a.j.show()}else a.j.hide()},O9=function(a,b){g.zP.call(this,"Play on",0,a,b);
this.I=a;this.hp={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},P9=function(a){g.sM.call(this,a);
this.vl={key:v6(),name:"This computer"};this.zi=null;this.subscriptions=[];this.lH=this.dc=null;this.hp=[this.vl];this.Qn=this.vl;this.Id=new g.ZH(64);this.hN=0;this.Ef=-1;this.Mx=!1;this.Kx=this.ju=null;if(!g.lD(this.player.V())&&!g.mD(this.player.V())){a=this.player;var b=g.WL(a);b&&(b=b.Co())&&(b=new O9(a,b),g.J(this,b));b=new N9(a);g.J(this,b);g.fM(a,b.element,4);this.ju=new M9;g.J(this,this.ju);g.fM(a,this.ju.element,4);this.Mx=!!w9()}},Q9=function(a){a.Kx&&(a.player.removeEventListener("presentingplayerstatechange",
a.Kx),a.Kx=null)},N2a=function(a,b,c){a.Id=c;
a.player.ea("presentingplayerstatechange",new g.bG(c,b))},R9=function(a,b){if(b.key!==a.Qn.key)if(b.key===a.vl.key)C9();
else{var c;(c=!a.player.V().S("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.O("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.Mx||!a.ju);(c?0:g.BD(a.player.V())||g.ED(a.player.V()))&&O2a(a);a.Qn=b;if(!a.player.V().S("disable_mdx_connection_in_mdx_module_for_music_web")||!g.mD(a.player.V())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().S("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.length;l++)k[l]=g.nM(f,l).videoId}else k=[e];f=a.player.getCurrentTime(1);a={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=n_a(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.fj(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?p6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Lh(),(b=x6(a,b.key))&&D9(b,1))}}},O2a=function(a){a.player.zb().Jc()?a.player.pauseVideo():(a.Kx=function(b){!a.Mx&&g.dG(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.Kx));
a.ju&&a.ju.pd();z9()||(H9=!0)};
g.iq.prototype.po=g.ca(1,function(){return g.Jd(this,6)});
g.$c.prototype.D=g.ca(0,function(){var a=g.ed(this);return 4294967296*g.ed(this)+(a>>>0)});
var JZa=g.De(function(a,b,c){if(1!==a.u)return!1;g.D(b,c,g.ld(a));return!0},g.Ge),a_a=g.De(function(a,b,c,d){if(1!==a.u)return!1;
g.Rd(b,c,d,g.ld(a));return!0},g.Ge),KZa=g.De(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.cd(a.j));return!0},g.He),$Za=g.De(function(a,b,c,d){if(0!==a.u)return!1;
g.Rd(b,c,d,g.cd(a.j));return!0},g.He),SZa=g.De(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.dd(a.j));return!0},g.Ie),XZa=g.De(function(a,b,c,d){if(0!==a.u)return!1;
g.Rd(b,c,d,g.dd(a.j));return!0},g.Ie),e_a=g.De(function(a,b,c){if(1!==a.u)return!1;
g.D(b,c,a.j.D());return!0},function(a,b,c){CZa(a,c,g.Jd(b,c))}),g_a=g.De(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.Ld(b,c);if(2==a.u){c=g.$c.prototype.D;var d=g.dd(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.D());return!0},function(a,b,c){b=g.Ld(b,c);
if(null!=b)for(var d=0;d<b.length;d++)CZa(a,c,b[d])}),PZa=g.De(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.fd(a.j));return!0},DZa),YZa=g.De(function(a,b,c,d){if(0!==a.u)return!1;
g.Rd(b,c,d,g.fd(a.j));return!0},DZa),f_a=g.De(function(a,b,c){if(2!==a.u)return!1;
a=g.nd(a);g.Gd(b);g.Ld(b,c).push(a);return!0},function(a,b,c){b=g.Ld(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.xd(a,c,g.ib(e))}}),WZa=g.De(function(a,b,c,d){if(2!==a.u)return!1;
g.Rd(b,c,d,g.nd(a));return!0},g.Je),c_a=g.De(function(a,b,c,d,e){if(2!==a.u)return!1;
g.kd(a,g.Sd(b,d,c),e);return!0},g.Ke),GZa=[1];
g.w(HZa,g.F);g.w(IZa,g.F);g.w(NZa,g.F);g.w(OZa,g.F);var UZa=[1,2];g.w(RZa,g.F);var L0a={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},C7={"'":"\\'"},t_a={Q0:"atp",oda:"ska",Uba:"que",D$:"mus",nda:"sus",p6:"dsp",sca:"seq",g$:"mic",k5:"dpa",g1:"cds",B$:"mlm",h5:"dsdtr",maa:"ntb"};q6.prototype.equals=function(a){return a?this.id==a.id:!1};
var D6,z6="",M_a=H_a("loadCastFramework")||H_a("loadCastApplicationFramework"),O_a=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Va(J6,g.I);g.h=J6.prototype;g.h.tS=function(a){this.C=arguments;this.j=!1;this.Qb?this.B=g.Ua()+this.eg:this.Qb=g.Gi(this.D,this.eg)};
g.h.stop=function(){this.Qb&&(g.C.clearTimeout(this.Qb),this.Qb=null);this.B=null;this.j=!1;this.C=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.J.apply(null,this.C)))};
g.h.va=function(){this.stop();J6.pe.va.call(this)};
g.h.uS=function(){this.Qb&&(g.C.clearTimeout(this.Qb),this.Qb=null);this.B?(this.Qb=g.Gi(this.D,this.B-g.Ua()),this.B=null):this.u?this.j=!0:(this.j=!1,this.J.apply(null,this.C))};g.w(K6,g.I);g.h=K6.prototype;g.h.tD=function(a){this.B=arguments;this.Qb||this.u?this.j=!0:L6(this)};
g.h.stop=function(){this.Qb&&(g.C.clearTimeout(this.Qb),this.Qb=null,this.j=!1,this.B=null)};
g.h.pause=function(){this.u++};
g.h.resume=function(){this.u--;this.u||!this.j||this.Qb||(this.j=!1,L6(this))};
g.h.va=function(){g.I.prototype.va.call(this);this.stop()};M6.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
M6.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};g.Va(N6,g.ff);g.Va(O6,g.ff);var V_a=!1;var X_a=null;g.Va(Y_a,g.ff);g.Va(Z_a,g.ff);g.Va($_a,g.ff);T6.prototype.info=function(){};
T6.prototype.warning=function(){};var Z6={},Y6={};g.h=U6.prototype;g.h.setTimeout=function(a){this.kb=a};
g.h.xS=function(a){a=a.target;var b=this.Sa;b&&3==g.zj(a)?b.tD():this.QJ(a)};
g.h.QJ=function(a){try{if(a==this.j)a:{var b=g.zj(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b||3==b&&!g.HD&&!X6(this))){this.Ea||4!=b||7==c||(8==c||0>=d?Q6(3):Q6(2));c7(this);var e=this.j.getStatus();this.rb=e;b:if(d0a(this)){var f=g.Dj(this.j);a="";var k=f.length,l=4==g.zj(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){a7(this);b7(this);var m="";break b}this.u.B=new g.C.TextDecoder}for(c=0;c<k;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&c==k-1});f.splice(0,k);this.u.j+=a;
this.Z=0;m=this.u.j}else m=g.Cj(this.j);X6(this);if(this.B=200==e){if(this.tb&&!this.Na){b:{if(this.j){var n=g.Ej(this.j,"X-HTTP-Initial-Response");if(n&&!g.nb(n)){var p=n;break b}}p=null}if(e=p)this.Na=!0,$6(this,e);else{this.B=!1;this.J=3;R6(12);a7(this);b7(this);break a}}this.ya?(f0a(this,b,m),g.HD&&this.B&&3==b&&(this.Ya.Qa(this.bb,"tick",this.wS),this.bb.start())):$6(this,m);4==b&&a7(this);this.B&&!this.Ea&&(4==b?h0a(this.D,this):(this.B=!1,W6(this)))}else 400==e&&0<m.indexOf("Unknown SID")?
(this.J=3,R6(12)):(this.J=0,R6(13)),a7(this),b7(this)}}}catch(r){X6(this)}finally{}};
g.h.wS=function(){if(this.j){var a=g.zj(this.j),b=g.Cj(this.j);this.Z<b.length&&(c7(this),f0a(this,a,b),this.B&&4!=a&&W6(this))}};
g.h.cancel=function(){this.Ea=!0;a7(this)};
g.h.vS=function(){this.X=null;var a=Date.now();0<=a-this.qb?(2!=this.Ja&&(Q6(3),R6(17)),a7(this),this.J=2,b7(this)):g0a(this,this.qb-a)};
g.h.getLastError=function(){return this.J};m0a.prototype.cancel=function(){this.B=l7(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.q(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.h=r0a.prototype;g.h.RJ=8;g.h.nf=1;g.h.connect=function(a,b,c,d){this.Tg&&g.ii((0,g.Sa)(this.xZ,this,a));R6(0);this.Gb=a;this.Ea=b||{};c&&void 0!==d&&(this.Ea.OSID=c,this.Ea.OAID=d);this.bb=this.Lb;this.yS(1,0);this.Ia=i0a(this,null,this.Gb);k7(this)};
g.h.disconnect=function(){s0a(this);if(3==this.nf){var a=this.Sa++,b=this.Ia.clone();g.Ek(b,"SID",this.C);g.Ek(b,"RID",a);g.Ek(b,"TYPE","terminate");p7(this,b);a=new U6(this,this.C,a,void 0);a.Ja=2;a.K=l6(b.clone());b=!1;g.C.navigator&&g.C.navigator.sendBeacon&&(b=g.C.navigator.sendBeacon(a.K.toString(),""));!b&&g.C.Image&&((new Image).src=a.K,b=!0);b||(a.j=c0a(a.D,null),a.j.send(a.K));a.oa=Date.now();W6(a)}y0a(this)};
g.h.xZ=function(a){try{W_a(a,function(){})}catch(b){}};
g.h.bf=function(){return 0==this.nf};
g.h.getState=function(){return this.nf};
g.h.TJ=function(a){if(this.J)if(this.J=null,1==this.nf){if(!a){this.Sa=Math.floor(1E5*Math.random());a=this.Sa++;var b=new U6(this,"",a,void 0),c=this.X;this.qb&&(c?(c=g.Kf(c),g.Nf(c,this.qb)):c=this.qb);null!==this.K||this.jb||(b.Ia=c,c=null);var d;if(this.kb)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=v0a(this,b,d);e=this.Ia.clone();g.Ek(e,"RID",a);g.Ek(e,"CVER",22);this.ya&&g.Ek(e,"X-HTTP-Session-Id",this.ya);p7(this,e);c&&(this.jb?d="headers="+g.nh(g.sda(c))+"&"+d:this.K&&g.Ik(e,this.K,c));j7(this.u,b);this.je&&g.Ek(e,"TYPE","init");this.kb?(g.Ek(e,"$req",d),g.Ek(e,"SID","null"),b.tb=!0,V6(b,e,null)):V6(b,e,d);this.nf=2}}else 3==this.nf&&(a?w0a(this,a):0==this.B.length||n0a(this.u)||w0a(this))};
g.h.SJ=function(){this.N=null;x0a(this);if(this.Sb&&!(this.Ya||null==this.j||0>=this.Ub)){var a=2*this.Ub;this.xa=S6((0,g.Sa)(this.wW,this),a)}};
g.h.wW=function(){this.xa&&(this.xa=null,null!=this.j.j&&g.Cj(this.j.j),this.bb=!1,this.Ya=!0,R6(10),f7(this),x0a(this))};
g.h.MG=function(a){this.j==a&&this.Sb&&!this.Ya&&(o7(this),this.Ya=!0,R6(11))};
g.h.zS=function(){null!=this.Z&&(this.Z=null,f7(this),g7(this),R6(19))};
g.h.yS=function(a){g.dc(arguments,this.nf)};
g.h.XZ=function(a){a?R6(2):R6(1)};
g.h.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.h=A0a.prototype;g.h.XJ=function(){};
g.h.WJ=function(){};
g.h.VJ=function(){};
g.h.UJ=function(){};
g.h.isActive=function(){return!0};
g.h.AS=function(){};g.Va(r7,g.dg);r7.prototype.open=function(){this.j.D=this.C;this.K&&(this.j.Ja=!0);this.j.connect(this.J,this.u||void 0)};
r7.prototype.close=function(){this.j.disconnect()};
r7.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.fj(a),a=c);b.B.push(new l0a(b.Pd++,a));3==b.nf&&k7(b)};
r7.prototype.va=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;r7.pe.va.call(this)};
g.Va(C0a,N6);g.Va(D0a,O6);g.Va(q7,A0a);q7.prototype.XJ=function(){this.j.dispatchEvent("m")};
q7.prototype.WJ=function(a){this.j.dispatchEvent(new C0a(a))};
q7.prototype.VJ=function(a){this.j.dispatchEvent(new D0a(a))};
q7.prototype.UJ=function(){this.j.dispatchEvent("n")};var u7=new g.dg;g.w(G0a,g.ff);g.h=w7.prototype;g.h.Jp=null;g.h.Pl=!1;g.h.us=null;g.h.vD=null;g.h.qs=null;g.h.rs=null;g.h.Bn=null;g.h.Dn=null;g.h.Kp=null;g.h.Mf=null;g.h.kz=0;g.h.lk=null;g.h.jz=null;g.h.Cn=null;g.h.Cv=-1;g.h.AP=!0;g.h.Ip=!1;g.h.uD=0;g.h.iz=null;var J0a={},z7={};g.h=w7.prototype;g.h.setTimeout=function(a){this.u=a};
g.h.CS=function(a){a=a.target;var b=this.iz;b&&3==g.zj(a)?b.tD():this.YJ(a)};
g.h.YJ=function(a){try{if(a==this.Mf)a:{var b=g.zj(this.Mf),c=this.Mf.u,d=this.Mf.getStatus();if(g.Nc&&!g.Gc(10)||g.kf&&!g.Fc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Cj(this.Mf))break a;this.Ip||4!=b||7==c||(8==c||0>=d?this.j.Sj(3):this.j.Sj(2));D7(this);var e=this.Mf.getStatus();this.Cv=e;var f=g.Cj(this.Mf);if(this.Pl=200==e){4==b&&A7(this);if(this.ya){for(a=!0;!this.Ip&&this.kz<f.length;){var k=K0a(this,f);if(k==z7){4==b&&(this.Cn=4,v7(15),a=!1);break}else if(k==J0a){this.Cn=4;v7(16);a=!1;
break}else E7(this,k)}4==b&&0==f.length&&(this.Cn=1,v7(17),a=!1);this.Pl=this.Pl&&a;a||(A7(this),B7(this))}else E7(this,f);this.Pl&&!this.Ip&&(4==b?this.j.lz(this):(this.Pl=!1,y7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Cn=3,v7(13)):(this.Cn=0,v7(14)),A7(this),B7(this)}}catch(l){this.Mf&&g.Cj(this.Mf)}finally{}};
g.h.LY=function(a){t7((0,g.Sa)(this.KY,this,a),0)};
g.h.KY=function(a){this.Ip||(D7(this),E7(this,a),y7(this))};
g.h.FO=function(a){t7((0,g.Sa)(this.JY,this,a),0)};
g.h.JY=function(a){this.Ip||(A7(this),this.Pl=a,this.j.lz(this),this.j.Sj(4))};
g.h.cancel=function(){this.Ip=!0;A7(this)};
g.h.BS=function(){this.us=null;var a=Date.now();0<=a-this.vD?(2!=this.rs&&this.j.Sj(3),A7(this),this.Cn=2,v7(18),B7(this)):N0a(this,this.vD-a)};
g.h.getLastError=function(){return this.Cn};g.h=Q0a.prototype;g.h.xD=null;g.h.Sg=null;g.h.QB=!1;g.h.NP=null;g.h.Zz=null;g.h.fG=null;g.h.yD=null;g.h.xi=null;g.h.Ql=-1;g.h.Dv=null;g.h.Sv=null;g.h.connect=function(a){this.yD=a;a=G7(this.j,null,this.yD);v7(3);this.NP=Date.now();var b=this.j.N;null!=b?(this.Dv=b[0],(this.Sv=b[1])?(this.xi=1,R0a(this)):(this.xi=2,I7(this))):(m6(a,"MODE","init"),this.Sg=new w7(this,void 0,void 0,void 0),this.Sg.Jp=this.xD,x7(this.Sg,a,!1,null,!0),this.xi=0)};
g.h.zT=function(a){if(a)this.xi=2,I7(this);else{v7(4);var b=this.j;b.Ck=b.Nn.Ql;P7(b,9)}a&&this.Sj(2)};
g.h.wD=function(a){return this.j.wD(a)};
g.h.abort=function(){this.Sg&&(this.Sg.cancel(),this.Sg=null);this.Ql=-1};
g.h.bf=function(){return!1};
g.h.ZJ=function(a,b){this.Ql=a.Cv;if(0==this.xi)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.Ck=this.Ql;P7(a,2);return}this.Dv=c[0];this.Sv=c[1]}else a=this.j,a.Ck=this.Ql,P7(a,2);else if(2==this.xi)if(this.QB)v7(7),this.fG=Date.now();else if("11111"==b){if(v7(6),this.QB=!0,this.Zz=Date.now(),a=this.Zz-this.NP,!g.Nc||g.Gc(10)||500>a)this.Ql=200,this.Sg.cancel(),v7(12),H7(this.j,this,!0)}else v7(8),this.Zz=this.fG=Date.now(),this.QB=!1};
g.h.lz=function(){this.Ql=this.Sg.Cv;if(this.Sg.Pl)0==this.xi?this.Sv?(this.xi=1,R0a(this)):(this.xi=2,I7(this)):2==this.xi&&((!g.Nc||g.Gc(10)?!this.QB:200>this.fG-this.Zz)?(v7(11),H7(this.j,this,!1)):(v7(12),H7(this.j,this,!0)));else{0==this.xi?v7(9):2==this.xi&&v7(10);var a=this.j;this.Sg.getLastError();a.Ck=this.Ql;P7(a,2)}};
g.h.Ev=function(){return this.j.Ev()};
g.h.isActive=function(){return this.j.isActive()};
g.h.Sj=function(a){this.j.Sj(a)};g.h=J7.prototype;g.h.Bk=null;g.h.Fv=null;g.h.gh=null;g.h.Qe=null;g.h.zD=null;g.h.mz=null;g.h.aK=null;g.h.nz=null;g.h.Gv=0;g.h.ES=0;g.h.Uf=null;g.h.En=null;g.h.Rl=null;g.h.Mp=null;g.h.Nn=null;g.h.yC=null;g.h.ys=-1;g.h.bK=-1;g.h.Ck=-1;g.h.xs=0;g.h.ws=0;g.h.Lp=8;g.Va(T0a,g.ff);g.Va(U0a,g.ff);g.h=J7.prototype;g.h.connect=function(a,b,c,d,e){v7(0);this.zD=b;this.Fv=c||{};d&&void 0!==e&&(this.Fv.OSID=d,this.Fv.OAID=e);this.K?(t7((0,g.Sa)(this.vL,this,a),100),V0a(this)):this.vL(a)};
g.h.disconnect=function(){W0a(this);if(3==this.j){var a=this.Gv++,b=this.mz.clone();g.Ek(b,"SID",this.C);g.Ek(b,"RID",a);g.Ek(b,"TYPE","terminate");N7(this,b);a=new w7(this,this.C,a,void 0);a.rs=2;a.Bn=l6(b.clone());FZa(new Image,a.Bn.toString());a.qs=Date.now();y7(a)}d1a(this)};
g.h.vL=function(a){this.Nn=new Q0a(this);this.Nn.xD=this.Bk;this.Nn.u=this.D;this.Nn.connect(a)};
g.h.bf=function(){return 0==this.j};
g.h.getState=function(){return this.j};
g.h.dK=function(a){this.En=null;$0a(this,a)};
g.h.cK=function(){this.Rl=null;this.Qe=new w7(this,this.C,"rpc",this.J);this.Qe.Jp=this.Bk;this.Qe.uD=0;var a=this.aK.clone();g.Ek(a,"RID","rpc");g.Ek(a,"SID",this.C);g.Ek(a,"CI",this.yC?"0":"1");g.Ek(a,"AID",this.ys);N7(this,a);if(!g.Nc||g.Gc(10))g.Ek(a,"TYPE","xmlhttp"),x7(this.Qe,a,!0,this.nz,!1);else{g.Ek(a,"TYPE","html");var b=this.Qe,c=!!this.nz;b.rs=3;b.Bn=l6(a.clone());M0a(b,c)}};
g.h.ZJ=function(a,b){if(0!=this.j&&(this.Qe==a||this.gh==a))if(this.Ck=a.Cv,this.gh==a&&3==this.j)if(7<this.Lp){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Rl){if(this.Qe)if(this.Qe.qs+3E3<this.gh.qs)L7(this),this.Qe.cancel(),this.Qe=null;else break a;O7(this);v7(19)}}else this.bK=a[1],0<this.bK-this.ys&&37500>a[2]&&this.yC&&0==this.ws&&!this.Mp&&(this.Mp=t7((0,g.Sa)(this.GS,this),6E3));else P7(this,11)}else null!=b&&P7(this,11);else if(this.Qe==
a&&L7(this),!g.nb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.ys=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.nz=c[2],c=c[3],null!=c?this.Lp=c:this.Lp=6,this.j=3,this.Uf&&this.Uf.gK(),this.aK=G7(this,this.Ev()?this.nz:null,this.zD),a1a(this)):"stop"==c[0]&&P7(this,7):3==this.j&&("stop"==c[0]?P7(this,7):"noop"!=c[0]&&this.Uf&&this.Uf.fK(c),this.ws=0)};
g.h.GS=function(){null!=this.Mp&&(this.Mp=null,this.Qe.cancel(),this.Qe=null,O7(this),v7(20))};
g.h.lz=function(a){if(this.Qe==a){L7(this);this.Qe=null;var b=2}else if(this.gh==a)this.gh=null,b=1;else return;this.Ck=a.Cv;if(0!=this.j)if(a.Pl)if(1==b){b=Date.now()-a.qs;var c=u7;c.dispatchEvent(new T0a(c,a.Kp?a.Kp.length:0,b,this.xs));K7(this);this.B.length=0}else a1a(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Ck)){if(d=1==b)this.gh||this.En||1==this.j||2<=this.xs?d=!1:(this.En=t7((0,g.Sa)(this.dK,this,a),b1a(this,this.xs)),this.xs++,d=!0);d=!(d||2==b&&O7(this))}if(d)switch(c){case 1:P7(this,
5);break;case 4:P7(this,10);break;case 3:P7(this,6);break;case 7:P7(this,12);break;default:P7(this,2)}}};
g.h.DS=function(a){if(!g.dc(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.h.WZ=function(a){a?v7(2):(v7(1),c1a(this,8))};
g.h.wD=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.wj;a.K=!1;return a};
g.h.isActive=function(){return!!this.Uf&&this.Uf.isActive(this)};
g.h.Sj=function(a){var b=u7;b.dispatchEvent(new U0a(b,a))};
g.h.Ev=function(){return!(!g.Nc||g.Gc(10))};
g.h=e1a.prototype;g.h.gK=function(){};
g.h.fK=function(){};
g.h.eK=function(){};
g.h.AD=function(){};
g.h.hK=function(){return{}};
g.h.isActive=function(){return!0};g.h=f1a.prototype;g.h.enqueue=function(a){this.u.push(a)};
g.h.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.h.clear=function(){this.j=[];this.u=[]};
g.h.contains=function(a){return g.dc(this.j,a)||g.dc(this.u,a)};
g.h.remove=function(a){var b=this.j;var c=(0,g.BTa)(b,a);0<=c?(g.gc(b,c),b=!0):b=!1;return b||g.hc(this.u,a)};
g.h.Ii=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g1a.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.P("enable_client_streamz_web")){a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=g.Jba(c.value),c={serializedIncrementBatch:g.Jc(g.Ce(c,h_a))},g.Dt("streamzIncremented",c,{KH:b})}};var Q7;g.w(R7,g.ff);g.w(S7,g.ff);g.Va(T7,g.I);g.h=T7.prototype;g.h.CY=function(){this.eg=Math.min(3E5,2*this.eg);this.B();this.u&&this.start()};
g.h.start=function(){var a=this.eg+15E3*Math.random();g.ap(this.j,a);this.u=Date.now()+a};
g.h.stop=function(){this.j.stop();this.u=0};
g.h.isActive=function(){return this.j.isActive()};
g.h.reset=function(){this.j.stop();this.eg=5E3};g.Va(U7,e1a);g.h=U7.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.Kf=function(a){return this.B.Kf(a)};
g.h.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.h.dispose=function(){this.Z||(this.Z=!0,g.cf(this.B),this.disconnect(),g.cf(this.u),this.u=null,this.ma=function(){return""})};
g.h.isDisposed=function(){return this.Z};
g.h.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.X="";this.u.stop();this.J=a||null;this.D=b||0;a=this.oa+"/test";b=this.oa+"/bind";var d=new J7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ya),e=this.j;e&&(e.Uf=null);d.Uf=this;this.j=d;V7(this);if(this.j){d=g.O("ID_TOKEN");var f=this.j.Bk||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Bk=f}e?(3!=e.getState()&&0==Y0a(e)||e.getState(),this.j.connect(a,b,this.K,e.C,e.ys)):c?this.j.connect(a,
b,this.K,c.sessionId,c.arrayId):this.j.connect(a,b,this.K)}};
g.h.disconnect=function(a){this.N=a||0;this.u.stop();V7(this);this.j&&(3==this.j.getState()&&$0a(this.j),this.j.disconnect());this.N=0};
g.h.sendMessage=function(a,b){a={_sc:a};b&&g.Nf(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.It()&&(V7(this),X0a(this.j,a))};
g.h.gK=function(){this.u.reset();this.J=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)X0a(this.j,a[b])}this.ea("handlerOpened")};
g.h.eK=function(a){var b=2==a&&401==this.j.Ck;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.h.AD=function(a,b){if(!this.u.isActive())this.ea("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}this.xa.j.jJ("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ia.j.aD("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Ja.j.aD("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.h.hK=function(){var a={v:2};this.X&&(a.gsessionid=this.X);0!=this.D&&(a.ui=""+this.D);0!=this.N&&(a.ui=""+this.N);this.J&&g.Nf(a,this.J);return a};
g.h.fK=function(a){"S"==a[0]?this.X=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.ea("handlerMessage",new h1a(a[0],a[1]))};
g.h.It=function(){return!!this.j&&3==this.j.getState()};
g.h.fn=function(a){(this.K.loungeIdToken=a)||this.u.stop();if(this.Ea&&this.j){var b=this.j.Bk||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Bk=b}};
g.h.po=function(){return this.K.id};
g.h.Bo=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.h.Zq=function(){var a=this.u;g.bp(a.j);a.start()};
g.h.zZ=function(){this.u.isActive();0==Y0a(this.j)&&this.connect(this.J,this.D)};W7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
W7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
W7.prototype.D=function(a){a(Error("request timed out"))};g.w(Z7,g.dg);g.h=Z7.prototype;g.h.connect=function(a,b,c){this.Lc.connect(a,b,c)};
g.h.disconnect=function(a){this.Lc.disconnect(a)};
g.h.Zq=function(){this.Lc.Zq()};
g.h.po=function(){return this.Lc.po()};
g.h.Bo=function(){return this.Lc.Bo()};
g.h.It=function(){return this.Lc.It()};
g.h.JS=function(){this.dispatchEvent("channelOpened");var a=this.Lc,b=this.j;g.Aw("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.yC,sessionId:a.j.C,arrayId:a.j.ys});g.Aw("yt-remote-session-screen-id",b);a=y6();b=A6();g.dc(a,b)||a.push(b);A_a(a);B6()};
g.h.HS=function(){this.dispatchEvent("channelClosed")};
g.h.IS=function(a){this.dispatchEvent(new R7(a))};
g.h.onError=function(a){this.dispatchEvent(new S7(a?1:0))};
g.h.sendMessage=function(a,b){this.Lc.sendMessage(a,b)};
g.h.fn=function(a){this.Lc.fn(a)};
g.h.dispose=function(){this.Lc.dispose()};g.h=i1a.prototype;
g.h.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.J&&(this.B.stop(),this.N=a,this.K=b,$7(this),(a=g.O("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.CV&&(this.u.mdxVersion=""+this.j.CV),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.K?this.u.ui=""+this.K:delete this.u.ui,
Object.assign(this.u,this.N),this.channel=new r7(this.pathPrefix,{bV:"gsessionid",GV:this.C,HV:this.u}),this.channel.open(),this.J=2,k1a(this))};
g.h.disconnect=function(a){this.X=void 0===a?0:a;this.B.stop();$7(this);this.channel&&(0!==this.X?this.u.ui=""+this.X:delete this.u.ui,this.channel.close());this.X=0};
g.h.Bo=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.h.Zq=function(){var a=this.B;g.bp(a.j);a.start()};
g.h.sendMessage=function(a,b){this.channel&&($7(this),a=Object.assign({_sc:a},b),this.channel.send(a))};
g.h.fn=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.h.po=function(){return this.j?this.j.id:""};
g.h.ea=function(a){return this.D.ea.apply(this.D,[a].concat(g.v(g.Ba.apply(1,arguments))))};
g.h.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.h.Kf=function(a){return this.D.Kf(a)};
g.h.dispose=function(){this.Z||(this.Z=!0,g.cf(this.D),this.disconnect(),g.cf(this.B),this.oa=function(){return""})};
g.h.isDisposed=function(){return this.Z};g.w(a8,g.dg);g.h=a8.prototype;g.h.connect=function(a,b){this.j.connect(a,b)};
g.h.disconnect=function(a){this.j.disconnect(a)};
g.h.Zq=function(){this.j.Zq()};
g.h.po=function(){return this.j.po()};
g.h.Bo=function(){return this.j.Bo()};
g.h.It=function(){return 3===this.j.J};
g.h.MS=function(){this.dispatchEvent("channelOpened")};
g.h.KS=function(){this.dispatchEvent("channelClosed")};
g.h.LS=function(a){this.dispatchEvent(new R7(a))};
g.h.onError=function(){this.dispatchEvent(new S7(j1a(this.j)?1:0))};
g.h.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.h.fn=function(a){this.j.fn(a)};
g.h.dispose=function(){this.j.dispose()};var s1a=Date.now(),b8=null,e8=Array(50),d8=-1,f8=!1;g.Va(g8,g.Kv);g8.prototype.Lh=function(){return this.screens};
g8.prototype.contains=function(a){return!!w6(this.screens,a)};
g8.prototype.get=function(a){return a?x6(this.screens,a):null};
g8.prototype.info=function(a){c8(this.J,a)};g.w(h8,g.Kv);g.h=h8.prototype;g.h.start=function(){!this.j&&isNaN(this.Qb)&&this.RO()};
g.h.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.Qb)||(g.Ir(this.Qb),this.Qb=NaN)};
g.h.va=function(){this.stop();g.Kv.prototype.va.call(this)};
g.h.RO=function(){this.Qb=NaN;this.j=g.Mr(X7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.Sa)(this.OS,this),onError:(0,g.Sa)(this.NS,this),onTimeout:(0,g.Sa)(this.PS,this)})};
g.h.OS=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.J;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new r6(a),b)};
g.h.NS=function(a){this.j=null;a.status&&404==a.status?this.u>=P2a.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=P2a[this.u],this.Qb=g.Gr((0,g.Sa)(this.RO,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.h.PS=function(){this.j=null;this.ea("pairingFailed",Error("Server not responding"))};
var P2a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Va(j8,g8);g.h=j8.prototype;g.h.start=function(){i8(this)&&this.ea("screenChange");!g.Bw("yt-remote-lounge-token-expiration")&&w1a(this);g.Ir(this.j);this.j=g.Gr((0,g.Sa)(this.start,this),1E4)};
g.h.add=function(a,b){i8(this);t1a(this,a);k8(this,!1);this.ea("screenChange");b(a);a.token||w1a(this)};
g.h.remove=function(a,b){var c=i8(this);v1a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.h.wC=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.h.va=function(){g.Ir(this.j);j8.pe.va.call(this)};
g.h.DU=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&c8(this.J,"Missed "+b+" lounge tokens.")};
g.h.CU=function(a){c8(this.J,"Requesting lounge tokens failed: "+a)};g.w(m8,g.Kv);g.h=m8.prototype;g.h.start=function(){var a=parseInt(g.Bw("yt-remote-fast-check-period")||"0",10);(this.C=g.Ua()-144E5<a?0:a)?p8(this):(this.C=g.Ua()+3E5,g.Aw("yt-remote-fast-check-period",this.C),this.yH())};
g.h.isEmpty=function(){return g.Df(this.j)};
g.h.update=function(){l8("Updating availability on schedule.");var a=this.J(),b=g.rf(this.j,function(c,d){return c&&!!x6(a,d)},this);
o8(this,b)};
g.h.va=function(){g.Ir(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.Kv.prototype.va.call(this)};
g.h.yH=function(){g.Ir(this.B);this.B=NaN;this.u&&this.u.abort();var a=y1a(this);if(n6(a)){var b=X7(this.D,"/pairing/get_screen_availability");this.u=Y7(this.D,b,{lounge_token:g.yf(a).join(",")},(0,g.Sa)(this.iY,this,a),(0,g.Sa)(this.hY,this))}else o8(this,{}),p8(this)};
g.h.iY=function(a,b){this.u=null;var c=g.yf(y1a(this));if(g.uc(c,g.yf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.Be("Changing Screen set during request."),this.yH()};
g.h.hY=function(a){this.Be("Screen availability failed: "+a);this.u=null;p8(this)};
g.h.Be=function(a){c8("OnlineScreenService",a)};g.Va(q8,g8);g.h=q8.prototype;g.h.start=function(){this.u.start();this.j.start();this.screens.length&&(this.ea("screenChange"),this.j.isEmpty()||this.ea("onlineScreenChange"))};
g.h.add=function(a,b,c){this.u.add(a,b,c)};
g.h.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.h.wC=function(a,b,c,d){this.u.contains(a)?this.u.wC(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c8(this.J,a),d(Error(a)))};
g.h.Lh=function(a){return a?this.screens:g.jc(this.screens,g.un(this.B,function(b){return!this.contains(b)},this))};
g.h.iK=function(){return g.un(this.Lh(!0),function(a){return!!this.j.j[a.id]},this)};
g.h.jK=function(a,b,c,d,e,f){var k=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.cf(l);e(r8(k,m),n)});
l.subscribe("pairingFailed",function(m){g.cf(l);f(m)});
l.start();return(0,g.Sa)(l.stop,l)};
g.h.QS=function(a,b,c,d){g.Mr(X7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Sa)(function(e,f){e=new r6(f.screen||{});if(!e.name||C1a(this,e.name)){a:{f=e.name;for(var k=2,l=b(f,k);C1a(this,l);){k++;if(20<k)break a;l=b(f,k)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Sa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Sa)(function(){d(Error("pairing request timed out."))},this)})};
g.h.va=function(){g.cf(this.u);g.cf(this.j);q8.pe.va.call(this)};
g.h.MU=function(){E1a(this);this.ea("screenChange");this.j.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Va(t8,g.Kv);g.h=t8.prototype;g.h.getScreen=function(){return this.C};
g.h.Gg=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.h.info=function(a){c8(this.ya,a)};
g.h.kK=function(){return null};
g.h.PH=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Sa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Sa)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.va=function(){this.PH("");t8.pe.va.call(this)};g.w(w8,t8);g.h=w8.prototype;g.h.OH=function(a){if(this.u){if(this.u==a)return;v8(this,"Overriding cast session with new session object");N1a(this);this.oa=!1;this.X="unknown";this.u.removeUpdateListener(this.ma);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa)}this.u=a;this.u.addUpdateListener(this.ma);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa);J1a(this,"getMdxSessionStatus")};
g.h.Ot=function(a){this.info("launchWithParams no-op for Cast: "+g.fj(a))};
g.h.stop=function(){this.u?this.u.stop((0,g.Sa)(function(){this.Gg()},this),(0,g.Sa)(function(){this.Gg(Error("Failed to stop receiver app."))},this)):this.Gg(Error("Stopping cast device without session."))};
g.h.PH=function(){};
g.h.va=function(){this.info("disposeInternal");N1a(this);this.u&&(this.u.removeUpdateListener(this.ma),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa));this.u=null;t8.prototype.va.call(this)};
g.h.WY=function(a,b){if(!this.isDisposed())if(b)if(b=o6(b),g.Pa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.fj(b)),a){case "mdxSessionStatus":H1a(this,b);break;case "loungeToken":K1a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.h.nM=function(a,b,c,d){g.Ir(this.N);this.N=0;B1a(this.B,this.j.label,a,this.j.friendlyName,(0,g.Sa)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.Gr((0,g.Sa)(this.nM,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.kK=function(){return this.u};
g.h.RS=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Gg())};g.w(z8,t8);g.h=z8.prototype;g.h.OH=function(a){this.u=a;this.u.addUpdateListener(this.Ea)};
g.h.Ot=function(a){this.Ia=a;this.Z()};
g.h.stop=function(){U1a(this);this.u?this.u.stop((0,g.Sa)(this.Gg,this,null),(0,g.Sa)(this.Gg,this,"Failed to stop DIAL device.")):this.Gg()};
g.h.va=function(){U1a(this);this.u&&this.u.removeUpdateListener(this.Ea);this.u=null;t8.prototype.va.call(this)};
g.h.SS=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.D(),this.D=function(){},this.Gg())};g.w(D8,t8);D8.prototype.stop=function(){this.Gg()};
D8.prototype.OH=function(){};
D8.prototype.Ot=function(){g.Ir(this.u);this.u=NaN;var a=x6(this.B.Lh(),this.j.label);a?u8(this,a):this.Gg(Error("No such screen"))};
D8.prototype.va=function(){g.Ir(this.u);this.u=NaN;t8.prototype.va.call(this)};g.w(E8,g.Kv);g.h=E8.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.X||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.J?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Sa)(this.TX,this);c=new chrome.cast.ApiConfig(c,(0,g.Sa)(this.BO,this),e,d,a);c.customDialLaunchCallback=(0,g.Sa)(this.NW,this);
chrome.cast.initialize(c,(0,g.Sa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),p1a(),this.u.subscribe("onlineScreenChange",(0,g.Sa)(this.lK,this)),this.B=X1a(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Sa)(function(f){this.Be("Failed to set initial custom receivers: "+g.fj(f))},this)),this.ea("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Sa)(function(f){this.Be("Failed to initialize API: "+g.fj(f));
b(!1)},this))};
g.h.DZ=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.j.j.friendlyName),H8(this,null)}if(a&&b){if(!this.j){c=x6(this.u.Lh(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=V1a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Sa)(function(d){this.Be("Failed to set initial custom receivers: "+g.fj(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.u,a),!0)}this.j.PH(b)}else F8("setConnectedScreenStatus: no screen.")};
g.h.EZ=function(a){this.isDisposed()?this.Be("Setting connection data on disposed cast v2"):this.j?this.j.Ot(a):this.Be("Setting connection data without a session")};
g.h.VS=function(){this.isDisposed()?this.Be("Stopping session on disposed cast v2"):this.j?(this.j.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.Sa)(this.BO,this),(0,g.Sa)(this.lY,this))};
g.h.va=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Sa)(this.lK,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=m1a,b=g.Ja("yt.mdx.remote.debug.handlers_");g.hc(b||[],a);g.cf(this.j);g.Kv.prototype.va.call(this)};
g.h.Be=function(a){c8("Controller",a)};
g.h.DO=function(a,b){this.j==a&&(b||H8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.h.QX=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.ea("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.u,a,this.config_));break;default:this.Be("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.Be("Stopping receiver w/o session: "+a.friendlyName)}else this.Be("onReceiverAction_ called without receiver.")};
g.h.NW=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Be("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.Be("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return F8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Be('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.u,b,this.C,this.config_))}b=this.j;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=R1a(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.qr(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=S1a(b,c)):a=S1a(b,c)):a=C8(b);return a};
g.h.BO=function(a){var b=this;if(!this.isDisposed()&&!this.J){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.u,c,this.config_),!0);else{this.Be("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=x6(this.u.Lh(),
d.label);e&&s6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.cf(this.j),this.j=new w8(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Sa)(this.DO,this,this.j)),this.j.subscribe("sessionFailed",function(){return W1a(b,b.j)}),this.j.Ot(null));
this.j.OH(a)}}};
g.h.US=function(){return this.j?this.j.kK():null};
g.h.lY=function(a){this.isDisposed()||(this.Be("Failed to estabilish a session: "+g.fj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.h.TX=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.ea("yt-remote-cast2-availability-change",G8(this))}};
g.h.lK=function(){this.isDisposed()||(this.B=X1a(this),F8("Updating custom receivers: "+g.fj(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Sa)(function(){this.Be("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.EZ;E8.prototype.setConnectedScreenStatus=E8.prototype.DZ;E8.prototype.stopSession=E8.prototype.VS;E8.prototype.getCastSession=E8.prototype.US;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.h=S8.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.il=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.J=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.N=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.h.Jc=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.ek=function(a){this.D=isNaN(a)?0:a};
g.h.getDuration=function(){return this.u?this.D+U8(this):this.D};
g.h.clone=function(){return new S8(Y8(this))};g.w($8,g.Kv);g.h=$8.prototype;g.h.getState=function(){return this.B};
g.h.Bo=function(){return this.C.getReconnectTimeout()};
g.h.Zq=function(){this.C.reconnect()};
g.h.play=function(){b9(this)?(this.j?this.j.play(null,g.Ka,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.play)};
g.h.pause=function(){b9(this)?(this.j?this.j.pause(null,g.Ka,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.pause)};
g.h.seekTo=function(a){if(b9(this)){if(this.j){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Jc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.Ka,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.ea("remotePlayerChange")}else c9(this,g.Ta(this.seekTo,a))};
g.h.stop=function(){if(b9(this)){this.j?this.j.stop(null,g.Ka,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.stop)};
g.h.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Sa)(function(){c8("CP","set receiver volume: "+d)},this),(0,g.Sa)(function(){this.Be("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Sa)(function(){c8("CP","set receiver muted: "+b)},this),(0,g.Sa)(function(){this.Be("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Ta(this.setVolume,a,b))};
g.h.dJ=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.fj(b.style),g.Nf(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Ta(this.dJ,a,b))};
g.h.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Ta(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;k=void 0===k?null:k;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);k&&(m.locationInfo=g.fj(k));f9(this,"setPlaylist",m);d||d9(this,l)};
g.h.JB=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Ta(this.JB,a,b))};
g.h.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Ta(this.nextVideo,a,b))};
g.h.Ps=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.Ps)};
g.h.IL=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.IL)};
g.h.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.Kv.prototype.dispose.call(this)};
g.h.va=function(){i2a(this);this.C=null;this.D.clear();Z8(this,null);g.Kv.prototype.va.call(this)};
g.h.QH=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.h.OX=function(a,b){this.ea(a,b)};
g.h.BW=function(a){if(!a)this.zx(null),Z8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.h.zx=function(a){c8("CP","Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.N);if(this.j=a)this.j.addUpdateListener(this.N),j2a(this),this.ea("remotePlayerChange")};
g.h.zW=function(a){a?(j2a(this),this.ea("remotePlayerChange")):this.zx(null)};
g.h.kI=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.FW=function(){var a=f2a();a&&Z8(this,a)};
g.h.Be=function(a){c8("CP",a)};g.w(j9,g.Kv);g.h=j9.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,k=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);k&&(m.clickTrackingParams=k);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ea&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;V8(this.j,
n);this.D="UNSUPPORTED";c=this.Ea?"setInitialState":"setPlaylist";h9("Connecting with "+c+" and params: "+g.fj(m));this.u.connect({method:c,params:g.fj(m)},a,B_a())}else h9("Connecting without params"),this.u.connect({},a,B_a());n2a(this)};
g.h.fn=function(a){this.u.fn(a)};
g.h.dispose=function(){this.isDisposed()||(g.Ia("yt.mdx.remote.remoteClient_",null,void 0),this.ea("beforeDispose"),i9(this,3));g.Kv.prototype.dispose.call(this)};
g.h.va=function(){k9(this);m9(this);l9(this);g.Ir(this.N);this.N=NaN;g.Ir(this.X);this.X=NaN;this.C=null;g.As(this.Z);this.Z.length=0;this.u.dispose();g.Kv.prototype.va.call(this);this.D=this.K=this.B=this.j=this.u=null};
g.h.TM=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.q(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.h.wU=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Iw())?this.u.It()&&isNaN(this.J)&&(a=1):a=2);return a};
g.h.Ys=function(a){h9("Disconnecting with "+a);g.Ia("yt.mdx.remote.remoteClient_",null,void 0);k9(this);this.ea("beforeDisconnect",a);1==a&&C6();this.u.disconnect(a);this.dispose()};
g.h.uU=function(){var a=this.j;this.C&&(a=this.j.clone(),X8(a,this.C,a.index));return Y8(a)};
g.h.FZ=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.Ir(this.N),this.N=g.Gr(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&W8(this.j)==W8(c)&&g.fj(this.j.trackData)==g.fj(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.wc(d,function(e){this.ea(e)},this)};
g.h.mM=function(){var a=this.u.po(),b=g.Yb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.Iw=function(){return this.u.Bo()};
g.h.rU=function(){return this.D||"UNSUPPORTED"};
g.h.sU=function(){return this.K||""};
g.h.YQ=function(){!isNaN(this.Iw())&&this.u.Zq()};
g.h.CZ=function(a,b){n9(this,a,b);p2a(this)};
g.h.eJ=function(){var a=g.Wr("SID","")||"",b=g.Wr("SAPISID","")||"",c=g.Wr("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Jc(g.jb(a),2);b=g.Jc(g.jb(b),2);c=g.Jc(g.jb(c),2);return g.Jc(g.jb(a+","+b+","+c),2)};
j9.prototype.subscribe=j9.prototype.subscribe;j9.prototype.unsubscribeByKey=j9.prototype.Kf;j9.prototype.getProxyState=j9.prototype.wU;j9.prototype.disconnect=j9.prototype.Ys;j9.prototype.getPlayerContextData=j9.prototype.uU;j9.prototype.setPlayerContextData=j9.prototype.FZ;j9.prototype.getOtherConnectedRemoteId=j9.prototype.mM;j9.prototype.getReconnectTimeout=j9.prototype.Iw;j9.prototype.getAutoplayMode=j9.prototype.rU;j9.prototype.getAutoplayVideoId=j9.prototype.sU;j9.prototype.reconnect=j9.prototype.YQ;
j9.prototype.sendMessage=j9.prototype.CZ;j9.prototype.getXsrfToken=j9.prototype.eJ;j9.prototype.isCapabilitySupportedOnConnectedDevices=j9.prototype.TM;g.w(o9,g8);g.h=o9.prototype;g.h.Lh=function(a){return this.Ye.$_gs(a)};
g.h.contains=function(a){return!!this.Ye.$_c(a)};
g.h.get=function(a){return this.Ye.$_g(a)};
g.h.start=function(){this.Ye.$_st()};
g.h.add=function(a,b,c){this.Ye.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Ye.$_r(a,b,c)};
g.h.wC=function(a,b,c,d){this.Ye.$_un(a,b,c,d)};
g.h.va=function(){for(var a=0,b=this.j.length;a<b;++a)this.Ye.$_ubk(this.j[a]);this.j.length=0;this.Ye=null;g8.prototype.va.call(this)};
g.h.ZQ=function(){this.ea("screenChange")};
g.h.vX=function(){this.ea("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.QS;q8.prototype.$_gsppc=q8.prototype.jK;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.wC;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Lh;q8.prototype.$_gos=q8.prototype.iK;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.Kf;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.w(I9,g.I);g.h=I9.prototype;g.h.va=function(){g.I.prototype.va.call(this);this.j.stop();this.B.stop();this.N.stop();var a=this.dc;a.unsubscribe("proxyStateChange",this.AO,this);a.unsubscribe("remotePlayerChange",this.Dx,this);a.unsubscribe("remoteQueueChange",this.vB,this);a.unsubscribe("previousNextChange",this.xO,this);a.unsubscribe("nowAutoplaying",this.rO,this);a.unsubscribe("autoplayDismissed",this.UN,this);this.dc=this.u=null};
g.h.Kj=function(a){var b=g.Ba.apply(1,arguments);if(2!=this.dc.B)if(J9(this)){var c=a;if(!a9(this.dc).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":a9(this.dc).Jc()?this.dc.pause():this.dc.play();break;case "control_play":this.dc.play();break;case "control_pause":this.dc.pause();break;case "control_seek":this.K.tD(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.I.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.h.xW=function(a){this.N.tS(a)};
g.h.q_=function(a){this.Kj("control_subtitles_set_track",g.Df(a)?null:a)};
g.h.TP=function(){var a=this.I.getOption("captions","track");g.Df(a)||K9(this,a)};
g.h.Vb=function(a){this.u.Vb(a,this.I.getVideoData().lengthSeconds)};
g.h.gX=function(){g.Df(this.C)||L2a(this,this.C);this.D=!1};
g.h.AO=function(a,b){this.B.stop();2===b&&this.MP()};
g.h.Dx=function(){if(J9(this)){this.j.stop();var a=a9(this.dc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.Ef=1;break;case 1082:case 1083:this.u.Ef=0;break;default:this.u.Ef=-1}switch(a.playerState){case 1081:case 1:this.hc(new g.ZH(8));this.LP();break;case 1085:case 3:this.hc(new g.ZH(9));break;case 1083:case 0:this.hc(new g.ZH(2));this.K.stop();this.Vb(this.I.getVideoData().lengthSeconds);break;case 1084:this.hc(new g.ZH(4));break;case 2:this.hc(new g.ZH(4));this.Vb(W8(a));
break;case -1:this.hc(new g.ZH(64));break;case -1E3:this.hc(new g.ZH(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",SE:2}))}a=a9(this.dc).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,L2a(this,a));a=a9(this.dc);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.X.isActive()||this.tQ()}else K2a(this)};
g.h.xO=function(){this.I.ea("mdxpreviousnextchange")};
g.h.vB=function(){J9(this)||K2a(this)};
g.h.rO=function(a){isNaN(a)||this.I.ea("mdxnowautoplaying",a)};
g.h.UN=function(){this.I.ea("mdxautoplaycanceled")};
g.h.setAudioTrack=function(a){J9(this)&&this.dc.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.h.seekTo=function(a,b){-1===a9(this.dc).playerState?L9(this,a):b&&this.dc.seekTo(a)};
g.h.tQ=function(){var a=this;if(J9(this)){var b=a9(this.dc);this.events.wc(this.Z);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.Z=this.events.T(this.I,"onVolumeChange",function(c){J2a(a,c)})}};
g.h.LP=function(){this.j.stop();if(!this.dc.isDisposed()){var a=a9(this.dc);a.Jc()&&this.hc(new g.ZH(8));this.Vb(W8(a));this.j.start()}};
g.h.MP=function(){this.B.stop();this.j.stop();var a=this.dc.Bo();2==this.dc.B&&!isNaN(a)&&this.B.start()};
g.h.hc=function(a){this.B.stop();var b=this.J;if(!g.dI(b,a)){var c=g.U(a,2);c!==g.U(this.J,2)&&this.I.Bu(c);this.J=a;N2a(this.u,b,a)}};g.w(M9,g.V);M9.prototype.pd=function(){this.j.show()};
M9.prototype.Fb=function(){this.j.hide()};
M9.prototype.u=function(){p6("mdx-privacy-popup-cancel");this.Fb()};
M9.prototype.B=function(){p6("mdx-privacy-popup-confirm");this.Fb()};g.w(N9,g.V);N9.prototype.onStateChange=function(a){M2a(this,a.state)};g.w(O9,g.zP);O9.prototype.D=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.hp=g.zc(a,this.j,this),g.AP(this,g.Fl(a,this.j)),a=this.I.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.wi(a),this.enable(!0)):this.enable(!1)};
O9.prototype.j=function(a){return a.key};
O9.prototype.Bj=function(a){return"cast-selector-receiver"===a?"Cast...":this.hp[a].name};
O9.prototype.Lf=function(a){g.zP.prototype.Lf.call(this,a);this.I.setOption("remote","currentReceiver",this.hp[a]);this.sb.Fb()};g.w(P9,g.sM);g.h=P9.prototype;
g.h.create=function(){var a=this.player.V(),b=g.jD(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.S("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.S("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.S("enable_cast_short_lived_lounge_token")};E2a(b,a);this.subscriptions.push(g.Ts("yt-remote-before-disconnect",this.vW,this));this.subscriptions.push(g.Ts("yt-remote-connection-change",this.UX,this));this.subscriptions.push(g.Ts("yt-remote-receiver-availability-change",this.zO,
this));this.subscriptions.push(g.Ts("yt-remote-auto-connect",this.SX,this));this.subscriptions.push(g.Ts("yt-remote-receiver-resumed",this.RX,this));this.subscriptions.push(g.Ts("mdx-privacy-popup-confirm",this.jZ,this));this.subscriptions.push(g.Ts("mdx-privacy-popup-cancel",this.iZ,this));this.zO()};
g.h.load=function(){this.player.cancelPlayback();g.sM.prototype.load.call(this);this.zi=new I9(this,this.player,this.dc);var a=(a=I2a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Vb(a);N2a(this,this.Id,this.Id);this.player.Dl(6)};
g.h.unload=function(){this.player.ea("mdxautoplaycanceled");this.Qn=this.vl;g.df(this.zi,this.dc);this.dc=this.zi=null;g.sM.prototype.unload.call(this);this.player.Dl(5);Q9(this)};
g.h.va=function(){g.Us(this.subscriptions);g.sM.prototype.va.call(this)};
g.h.wl=function(a){var b=g.Ba.apply(1,arguments);this.loaded&&this.zi.Kj.apply(this.zi,[a].concat(g.v(b)))};
g.h.getAdState=function(){return this.Ef};
g.h.il=function(){return this.dc?a9(this.dc).il:!1};
g.h.hasNext=function(){return this.dc?a9(this.dc).hasNext:!1};
g.h.Vb=function(a,b){this.hN=a||0;this.player.ea("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.h.getCurrentTime=function(){return this.hN};
g.h.getProgressState=function(){var a=a9(this.dc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().S("web_player_mdx_allow_seeking_change_killswitch")?this.player.rf():!a.isAdPlaying()&&this.player.rf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+U8(a):a.B,isAtLiveHead:1>=(a.u?a.j+U8(a):a.j)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.u?a.j+U8(a):a.j,seekableStart:0<
a.C?a.C+U8(a):a.C}};
g.h.nextVideo=function(){this.dc&&this.dc.nextVideo()};
g.h.JB=function(){this.dc&&this.dc.JB()};
g.h.vW=function(a){1===a&&(this.lH=this.dc?a9(this.dc):null)};
g.h.UX=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Qn;this.loaded&&this.unload();this.dc=a;this.lH=null;b.key!==this.vl.key&&(this.Qn=b,this.load())}else g.cf(this.dc),this.dc=null,this.loaded&&(this.unload(),(a=this.lH)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.zO=function(){var a=[this.vl],b=a.concat,c=F2a();O8()&&g.Bw("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.hp=b.call(a,c);a=A9()||this.vl;R9(this,a);this.player.Oa("onMdxReceiversChange")};
g.h.SX=function(){var a=A9();R9(this,a)};
g.h.RX=function(){this.Qn=A9()};
g.h.jZ=function(){this.Mx=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.h.iZ=function(){this.Mx=!1;Q9(this);R9(this,this.vl);this.Qn=this.vl;H9=!1;B9=null;this.player.playVideo()};
g.h.xf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.hp;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Qn:this.vl;case "quickCast":return 2===this.hp.length&&"cast-selector-receiver"===this.hp[1].key?(b&&Q8(),!0):!1}};
g.h.kI=function(){this.dc.kI()};
g.h.Yh=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.rM("remote",P9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:01:51 Mar 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:14:54 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 82.129
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.06
  cdx.remote: 0.054
  esindex: 0.009
  LoadShardBlock: 40.914 (3)
  PetaboxLoader3.datanode: 67.257 (4)
  load_resource: 90.126
  PetaboxLoader3.resolve: 41.243
*/