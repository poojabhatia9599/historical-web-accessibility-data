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

(function(g){var window=this;'use strict';var ZZa=function(a,b){this.u=a>>>0;this.j=b>>>0},a_a=function(a){if(!a)return $Za||($Za=new ZZa(0,0));
if(!/^\d+$/.test(a))return null;g.bd(a);return new ZZa(g.ad,g.$c)},b_a=function(a,b,c){null!=c&&("string"===typeof c&&a_a(c),g.Gd(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.ad=b,g.$c=c,g.Ed(a,g.ad),g.Ed(a,g.$c)):(c=a_a(c),a=a.j,b=c.j,g.Ed(a,c.u),g.Ed(a,b)))},c_a=function(a,b,c){b=g.ce(b,c);
null!=b&&(g.Gd(a,c,0),a.j.j.push(b?1:0))},d_a=function(a,b){return g.Qf(a,b)},e_a=function(a,b){b=b instanceof g.Sg?b:g.Yg(b,/^data:image\//i.test(b));
a.src=g.Tg(b)},g_a=function(a){g.F.call(this,a,-1,f_a)},h_a=function(a){g.F.call(this,a)},k_a=function(){return[1,
i_a,2,j_a]},l_a=function(){return[1,
g.nq,h_a,k_a]},m_a=function(a){g.F.call(this,a)},n_a=function(a){g.F.call(this,a)},p_a=function(){return[1,
g.pq,2,g.pq,3,o_a]},q_a=function(a){g.F.call(this,a)},s_a=function(){return[1,
g.pq,2,g.pq,3,r_a,4,o_a]},u_a=function(){return[1,
g.lf,n_a,p_a,t_a,2,g.lf,q_a,s_a,t_a]},y_a=function(){return[1,
v_a,g.Ii,2,w_a,g.Ii,3,x_a,g.Ii]},B_a=function(){return[1,
z_a,g.Hi,2,A_a,g.Hi,3,g.lf,g_a,l_a,g.Hi]},D_a=function(){return[1,
g.nq,g.Fi,y_a,2,C_a,g.Gi,B_a]},H_a=function(){return[1,
g.pq,5,E_a,2,C_a,m_a,u_a,3,F_a,6,G_a,4,g.nq,g.Ei,D_a]},m6=function(a){g.Ck(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Va()).toString(36));
return a},n6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Yda(a.B,b,c)},I_a=function(a){if(a instanceof g.zn)return a;
if("function"==typeof a.Kh)return a.Kh(!1);if(g.Oa(a)){var b=0,c=new g.zn;c.next=function(){for(;;){if(b>=a.length)return g.I_;if(b in a)return g.An(a[b++]);b++}};
return c}throw Error("Not implemented");},J_a=function(a,b,c){if(g.Oa(a))g.pc(a,b,c);
else for(a=I_a(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},K_a=function(a,b){var c=[];
J_a(b,function(d){try{var e=g.Wp.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Oia(e)&&c.push(d)},a);
return c},L_a=function(a,b){K_a(a,b).forEach(function(c){g.Wp.prototype.remove.call(this,c)},a)},M_a=function(a){if(a.ma){if(a.ma.locationOverrideToken)return{locationOverrideToken:a.ma.locationOverrideToken};
if(null!=a.ma.latitudeE7&&null!=a.ma.longitudeE7)return{latitudeE7:a.ma.latitudeE7,longitudeE7:a.ma.longitudeE7}}return null},N_a=function(a,b){g.Ub(a,b)||a.push(b)},o6=function(a){var b=0,c;
for(c in a)b++;return b},O_a=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},p6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return O_a(a)},P_a=function(a,b,c,d){var e=new g.uk(null);
a&&g.vk(e,a);b&&g.wk(e,b);c&&g.xk(e,c);d&&(e.K=d);return e},q6=function(a,b){g.Au[a]=!0;
var c=g.yu();c&&c.publish.apply(c,arguments);g.Au[a]=!1},r6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Fp;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Q_a(this,a.capabilities||""),R_a(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},Q_a=function(a,b){a.capabilities.clear();
g.En(b.split(","),g.Ua(d_a,S_a)).forEach(function(c){a.capabilities.add(c)})},R_a=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},s6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},t6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},T_a=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},U_a=function(a){return new s6(a)},V_a=function(a){return Array.isArray(a)?g.Nl(a,U_a):[]},u6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},v6=function(a){return Array.isArray(a)?"["+g.Nl(a,u6).join(",")+"]":"null"},w6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},W_a=function(a){return g.Nl(a,function(b){return{key:b.id,
name:b.name}})},x6=function(a,b){return g.Rb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},y6=function(a,b){return g.Rb(a,function(c){return t6(c,b)})},X_a=function(){var a=(0,g.Yv)();
a&&L_a(a,a.j.Kh(!0))},z6=function(){var a=g.aw("yt-remote-connected-devices")||[];
g.mc(a);return a},Y_a=function(a){if(g.Xb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Nl(a,function(d,e){return 0==e?d:d.substring(c.length)})},Z_a=function(a){g.$v("yt-remote-connected-devices",a,86400)},B6=function(){if(A6)return A6;
var a=g.aw("yt-remote-device-id");a||(a=w6(),g.$v("yt-remote-device-id",a,31536E3));for(var b=z6(),c=1,d=a;g.Ub(b,d);)c++,d=a+"#"+c;return A6=d},C6=function(){var a=z6(),b=B6();
g.Ub(a,b);g.cw()&&g.oc(a,b);a=Y_a(a);if(g.Xb(a))try{g.vma("remote_sid")}catch(c){}else try{g.Jr("remote_sid",a.join(","),-1)}catch(c){}},$_a=function(){return g.aw("yt-remote-session-browser-channel")},a0a=function(){return g.aw("yt-remote-local-screens")||[]},b0a=function(){g.$v("yt-remote-lounge-token-expiration",!0,86400)},c0a=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Nl(a0a(),function(d){return d.loungeToken}),c=g.Nl(a,function(d){return d.loungeToken});
g.Ol(c,function(d){return!g.Ub(b,d)})&&b0a();
g.$v("yt-remote-local-screens",a,31536E3)},D6=function(a){a||(g.bw("yt-remote-session-screen-id"),g.bw("yt-remote-session-video-id"));
C6();a=z6();g.$b(a,B6());Z_a(a)},d0a=function(){if(!E6){var a=g.eq();
a&&(E6=new g.Tp(a))}},e0a=function(){d0a();
return E6?!!E6.get("yt-remote-use-staging-server"):!1},F6=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},f0a=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},g0a=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},G6=function(a){a.length?h0a(a.shift(),function(){G6(a)}):H6()},i0a=function(a){return"chrome-extension://"+a+"/cast_sender.js"},h0a=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Vj(d,g.Qg(a));(document.head||document.documentElement).appendChild(d)},j0a=function(){var a=F6(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20220401000240/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20220401000240/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},H6=function(){var a=g0a();
a&&a(!1,"No cast extension found")},I6=function(){if(k0a){var a=2,b=g0a(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;h0a("//web.archive.org/web/20220401000240/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",H6,c)}},l0a=function(){I6();
var a=j0a();a.push("//web.archive.org/web/20220401000240/https://www.gstatic.com/eureka/clank/cast_sender.js");G6(a)},n0a=function(){I6();
var a=j0a();a.push.apply(a,g.u(m0a.map(i0a)));a.push("//web.archive.org/web/20220401000240/https://www.gstatic.com/eureka/clank/cast_sender.js");G6(a)},o0a=function(){this.j=J6();
this.j.Fz("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},p0a=function(){this.j=J6();
this.j.Fz("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},q0a=function(){this.j=J6();
this.j.Fz("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},K6=function(a,b,c){g.G.call(this);
this.J=null!=c?(0,g.Ta)(a,c):a;this.hg=b;this.D=(0,g.Ta)(this.bT,this);this.j=!1;this.u=0;this.B=this.Rb=null;this.C=[]},L6=function(a,b,c){g.G.call(this);
this.C=null!=c?a.bind(c):a;this.hg=b;this.B=null;this.j=!1;this.u=0;this.Rb=null},M6=function(a){a.Rb=g.Bi(function(){a.Rb=null;
a.j&&!a.u&&(a.j=!1,M6(a))},a.hg);
var b=a.B;a.B=null;a.C.apply(null,b)},N6=function(){},O6=function(){g.wf.call(this,"p")},P6=function(){g.wf.call(this,"o")},r0a=function(){var a=new g.C.TextEncoder;
return new g.C.ReadableStream({start:function(b){for(var c=g.r(["test\r\n","test\r\n"]),d=c.next();!d.done;d=c.next())b.enqueue(a.encode(d.value));b.close()}})},s0a=function(a){return(a=/\/\/([^\/]+)\//.exec(a))?a[1].endsWith("google.com"):!1},u0a=function(a,b){if(!t0a){t0a=!0;
var c;a:{if(c=g.C.navigator)if(c=c.userAgent)break a;c=""}(-1==c.indexOf("Chrome")||-1!=c.indexOf("Edg")?0:90<=parseInt(/Chrome\/(\d+)/.exec(c)[1],10))&&s0a(a)&&window&&window.document&&s0a(window.document.URL)&&(c=document.createElement("meta"),c.httpEquiv="origin-trial",c.content="A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
document.head.appendChild(c),(new Request("",{body:new ReadableStream,method:"POST"})).headers.has("Content-Type")||(g.C.fetch(a+"?ot=1",{method:"POST",body:"test\r\n"}).catch(b),g.C.fetch(a+"?ot=2",{method:"POST",body:r0a(),JT:!1}).catch(b),g.C.fetch(a+"?ot=3",{method:"POST",body:r0a(),JT:!0}).catch(b)))}},Q6=function(){return v0a=v0a||new g.tg},w0a=function(a){g.wf.call(this,"serverreachability",a)},R6=function(a){var b=Q6();
b.dispatchEvent(new w0a(b,a))},x0a=function(a,b){g.wf.call(this,"statevent",a);
this.stat=b},S6=function(a){var b=Q6();
b.dispatchEvent(new x0a(b,a))},y0a=function(a,b,c,d){g.wf.call(this,"timingevent",a);
this.size=b;this.yu=d},T6=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},U6=function(){},V6=function(a,b,c,d){this.D=a;
this.C=b;this.Hb=c;this.Fb=d||1;this.Wa=new g.Hk(this);this.ib=45E3;a=g.RC?125:void 0;this.Xa=new g.Ai(a);this.Ha=null;this.B=!1;this.N=this.Va=this.K=this.Ia=this.ra=this.ob=this.X=null;this.ma=[];this.j=null;this.Z=0;this.J=this.va=null;this.qb=-1;this.Da=!1;this.fb=0;this.Ra=null;this.Cb=this.Qa=this.ub=this.xa=!1;this.u=new z0a},z0a=function(){this.B=null;
this.j="";this.u=!1},W6=function(a,b,c){a.Ia=1;
a.K=m6(b.clone());a.N=c;a.xa=!0;A0a(a,null)},A0a=function(a,b){a.ra=Date.now();
X6(a);a.Va=a.K.clone();n6(a.Va,"t",a.Fb);a.Z=0;var c=a.D.Ia;a.u=new z0a;a.j=B0a(a.D,c?b:null,!a.N);0<a.fb&&(a.Ra=new L6((0,g.Ta)(a.dK,a,a.j),a.fb));a.Wa.Pa(a.j,"readystatechange",a.eT);b=a.Ha?g.$f(a.Ha):{};a.N?(a.va||(a.va="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Va,a.va,a.N,b)):(a.va="GET",a.j.send(a.Va,a.va,null,b));R6(1)},Y6=function(a){return a.j?a.u.u?!0:!(!g.Bj(a.j)&&!g.Cj(a.j)):!1},C0a=function(a){return a.j?"GET"==a.va&&2!=a.Ia&&a.D.Zf:!1},E0a=function(a,b,
c){for(var d=!0,e;!a.Da&&a.Z<c.length;)if(e=D0a(a,c),e==Z6){4==b&&(a.J=4,S6(14),d=!1);
break}else if(e==$6){a.J=4;S6(15);d=!1;break}else a7(a,e);C0a(a)&&e!=Z6&&e!=$6&&(a.u.j="",a.Z=0);4!=b||0!=c.length||a.u.u||(a.J=1,S6(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.Cb&&(a.Cb=!0,a.D.QG(a)):(b7(a),c7(a))},D0a=function(a,b){var c=a.Z,d=b.indexOf("\n",c);
if(-1==d)return Z6;c=Number(b.substring(c,d));if(isNaN(c))return $6;d+=1;if(d+c>b.length)return Z6;b=b.substr(d,c);a.Z=d+c;return b},X6=function(a){a.ob=Date.now()+a.ib;
F0a(a,a.ib)},F0a=function(a,b){if(null!=a.X)throw Error("WatchDog timer not null");
a.X=T6((0,g.Ta)(a.cT,a),b)},d7=function(a){a.X&&(g.C.clearTimeout(a.X),a.X=null)},c7=function(a){a.D.cf()||a.Da||G0a(a.D,a)},b7=function(a){d7(a);
g.rf(a.Ra);a.Ra=null;a.Xa.stop();g.Ik(a.Wa);if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},a7=function(a,b){try{var c=a.D;
if(0!=c.nf&&(c.j==a||e7(c.u,a)))if(!a.Qa&&e7(c.u,a)&&3==c.nf){try{var d=c.bd.j.parse(b)}catch(y){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.N){if(c.j)if(c.j.ra+3E3<a.ra)f7(c),g7(c);else break a;h7(c);S6(18)}}else c.pc=e[1],0<c.pc-c.Qa&&37500>e[2]&&c.Xa&&0==c.ma&&!c.Z&&(c.Z=T6((0,g.Ta)(c.gT,c),6E3));if(1>=i7(c.u)&&c.Qb){try{c.Qb()}catch(y){}c.Qb=void 0}}else j7(c,11)}else if((a.Qa||c.j==a)&&f7(c),!g.nb(b))for(e=c.bd.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Qa=f[0];f=f[1];
if(2==c.nf)if("c"==f[0]){c.C=f[1];c.Cb=f[2];var k=f[3];null!=k&&(c.eK=k);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Va=1.5*l);d=c;var m=a.j;if(m){var n=g.Dj(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.pb(n,"spdy")||g.pb(n,"quic")||g.pb(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(k7(p,p.u),p.u=null))}if(d.xa){var q=g.Dj(m,"X-HTTP-Session-Id");q&&(d.Vc=q,g.Ck(d.Ha,d.xa,q))}}c.nf=3;c.D&&c.D.kK();c.Kb&&(c.Sb=Date.now()-a.ra);d=c;var t=a;d.Ub=H0a(d,d.Ia?d.Cb:null,d.Fb);if(t.Qa){I0a(d.u,t);var w=
t,x=d.Va;x&&w.setTimeout(x);w.X&&(d7(w),X6(w));d.j=t}else J0a(d);0<c.B.length&&l7(c)}else"stop"!=f[0]&&"close"!=f[0]||j7(c,7);else 3==c.nf&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?j7(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.jK(f),c.ma=0)}R6(4)}catch(y){}},K0a=function(a,b){this.j=a;
this.map=b;this.context=null},L0a=function(a){this.D=a||10;
g.C.PerformanceNavigationTiming?(a=g.C.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.C.chrome&&g.C.chrome.loadTimes&&g.C.chrome.loadTimes()&&g.C.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},M0a=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},i7=function(a){return a.u?1:a.j?a.j.size:0},e7=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},k7=function(a,
b){a.j?a.j.add(b):a.u=b},I0a=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},m7=function(a){if(null!=a.u)return a.B.concat(a.u.ma);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.r(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.ma);return b}return g.dc(a.B)},N0a=function(a,b){var c=new U6;
if(g.C.Image){var d=new Image;d.onload=g.Ua(n7,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Ua(n7,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Ua(n7,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Ua(n7,c,d,"TestLoadImage: timeout",!1,b);g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},n7=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},O0a=function(){this.j=new N6},P0a=function(a,b,c){var d=c||"";
try{g.tk(a,function(e,f){var k=e;g.Pa(e)&&(k=g.Si(e));b.push(d+f+"="+encodeURIComponent(k))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},o7=function(a,b,c){return c&&c.wV?c.wV[a]||b:b},Q0a=function(a){this.B=[];
this.Cb=this.Ub=this.Ha=this.Fb=this.j=this.Vc=this.xa=this.Da=this.K=this.ob=this.X=null;this.Qd=this.Ra=0;this.Dd=o7("failFast",!1,a);this.Xa=this.Z=this.N=this.J=this.D=null;this.Hb=!0;this.Dc=this.pc=this.Qa=-1;this.ub=this.ma=this.ra=0;this.pd=o7("baseRetryDelayMs",5E3,a);this.Ud=o7("retryDelaySeedMs",1E4,a);this.Pd=o7("forwardChannelMaxRetries",2,a);this.Wb=o7("forwardChannelRequestTimeoutMs",2E4,a);this.Pc=a&&a.ria||void 0;this.Zf=a&&a.pia||!1;this.Va=void 0;this.Ia=a&&a.h_||!1;this.C="";this.u=
new L0a(a&&a.cha);this.bd=new O0a;this.ib=a&&a.tha||!1;this.fb=a&&a.lha||!1;this.ib&&this.fb&&(this.fb=!1);this.me=a&&a.Yga||!1;a&&a.vha&&(this.Hb=!1);this.Kb=!this.ib&&this.Hb&&a&&a.hha||!1;this.Qb=void 0;this.Sb=0;this.Wa=!1;this.va=null;this.xe=!a||!1!==a.jha;this.qb=null},g7=function(a){a.j&&(p7(a),a.j.cancel(),a.j=null)},R0a=function(a){g7(a);
a.N&&(g.C.clearTimeout(a.N),a.N=null);f7(a);a.u.cancel();a.J&&("number"===typeof a.J&&g.C.clearTimeout(a.J),a.J=null)},l7=function(a){M0a(a.u)||a.J||(a.J=!0,g.qi(a.gK,a),a.ra=0)},T0a=function(a,b){if(i7(a.u)>=a.u.C-(a.J?1:0))return!1;
if(a.J)return a.B=b.ma.concat(a.B),!0;if(1==a.nf||2==a.nf||a.ra>=(a.Dd?0:a.Pd))return!1;a.J=T6((0,g.Ta)(a.gK,a,b),S0a(a,a.ra));a.ra++;return!0},V0a=function(a,b){var c;
b?c=b.Hb:c=a.Ra++;var d=a.Ha.clone();g.Ck(d,"SID",a.C);g.Ck(d,"RID",c);g.Ck(d,"AID",a.Qa);q7(a,d);a.K&&a.X&&g.Gk(d,a.K,a.X);c=new V6(a,a.C,c,a.ra+1);null===a.K&&(c.Ha=a.X);b&&(a.B=b.ma.concat(a.B));b=U0a(a,c,1E3);c.setTimeout(Math.round(.5*a.Wb)+Math.round(.5*a.Wb*Math.random()));k7(a.u,c);W6(c,d,b)},q7=function(a,b){a.Da&&g.Gf(a.Da,function(c,d){g.Ck(b,d,c)});
a.D&&g.tk({},function(c,d){g.Ck(b,d,c)})},U0a=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Ta)(a.D.hT,a.D,a):null;a:for(var e=a.B,f=-1;;){var k=["count="+c];-1==f?0<c?(f=e[0].j,k.push("ofs="+f)):f=0:k.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{P0a(p,k,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=k.join("&");break a}}a=a.B.splice(0,c);b.ma=a;return d},J0a=function(a){a.j||a.N||(a.ub=1,g.qi(a.fK,a),a.ma=0)},h7=function(a){if(a.j||a.N||3<=a.ma)return!1;
a.ub++;a.N=T6((0,g.Ta)(a.fK,a),S0a(a,a.ma));a.ma++;return!0},p7=function(a){null!=a.va&&(g.C.clearTimeout(a.va),a.va=null)},W0a=function(a){a.j=new V6(a,a.C,"rpc",a.ub);
null===a.K&&(a.j.Ha=a.X);a.j.fb=0;var b=a.Ub.clone();g.Ck(b,"RID","rpc");g.Ck(b,"SID",a.C);g.Ck(b,"CI",a.Xa?"0":"1");g.Ck(b,"AID",a.Qa);g.Ck(b,"TYPE","xmlhttp");q7(a,b);a.K&&a.X&&g.Gk(b,a.K,a.X);a.Va&&a.j.setTimeout(a.Va);var c=a.j;a=a.Cb;c.Ia=1;c.K=m6(b.clone());c.N=null;c.xa=!0;A0a(c,a)},f7=function(a){null!=a.Z&&(g.C.clearTimeout(a.Z),a.Z=null)},G0a=function(a,b){var c=null;
if(a.j==b){f7(a);p7(a);a.j=null;var d=2}else if(e7(a.u,b))c=b.ma,I0a(a.u,b),d=1;else return;if(0!=a.nf)if(a.Dc=b.qb,b.B)if(1==d){c=b.N?b.N.length:0;b=Date.now()-b.ra;var e=a.ra;d=Q6();d.dispatchEvent(new y0a(d,c,b,e));l7(a)}else J0a(a);else if(e=b.getLastError(),3==e||0==e&&0<a.Dc||!(1==d&&T0a(a,b)||2==d&&h7(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:j7(a,5);break;case 4:j7(a,10);break;case 3:j7(a,6);break;default:j7(a,2)}},S0a=function(a,b){var c=a.pd+Math.floor(Math.random()*
a.Ud);
a.isActive()||(c*=2);return c*b},j7=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Ta)(a.n_,a);c||(c=new g.uk("//web.archive.org/web/20220401000240/https://www.google.com/images/cleardot.gif"),g.C.location&&"http"==g.C.location.protocol||g.vk(c,"https"),m6(c));N0a(c.toString(),d)}else S6(2);a.nf=0;a.D&&a.D.iK(b);X0a(a);R0a(a)},X0a=function(a){a.nf=0;
a.qb=[];if(a.D){var b=m7(a.u);if(0!=b.length||0!=a.B.length)g.ec(a.qb,b),g.ec(a.qb,a.B),a.u.B.length=0,g.dc(a.B),a.B.length=0;a.D.hK()}},Y0a=function(a){if(0==a.nf)return a.qb;
var b=[];g.ec(b,m7(a.u));g.ec(b,a.B);return b},H0a=function(a,b,c){var d=g.Dk(c);
""!=d.j?(b&&g.wk(d,b+"."+d.j),g.xk(d,d.u)):(d=g.C.location,d=P_a(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.xa;c=a.Vc;b&&c&&g.Ck(d,b,c);g.Ck(d,"VER",a.eK);q7(a,d);return d},B0a=function(a,b,c){if(b&&!a.Ia)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.Zf&&!a.Pc?new g.vj(new g.pk({dQ:!0})):new g.vj(a.Pc);b.K=a.Ia;return b},Z0a=function(){},$0a=function(){if(g.Ic&&!g.yc(10))throw Error("Environmental error: no available transport.");
},s7=function(a,b){g.tg.call(this);
this.j=new Q0a(b);this.J=a;this.u=b&&b.aW||null;a=b&&b.ZV||null;b&&b.bha&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.X=a;a=b&&b.Bha||null;b&&b.PN&&(a?a["X-WebChannel-Content-Type"]=b.PN:a={"X-WebChannel-Content-Type":b.PN});b&&b.FL&&(a?a["X-WebChannel-Client-Profile"]=b.FL:a={"X-WebChannel-Client-Profile":b.FL});this.j.ob=a;(a=b&&b.yha)&&!g.nb(a)&&(this.j.K=a);this.K=b&&b.h_||!1;this.D=b&&b.dia||!1;(b=b&&b.sV)&&!g.nb(b)&&(this.j.xa=b,g.Pf(this.u,b)&&g.Xf(this.u,
b));this.C=new r7(this)},a1a=function(a){O6.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.Lf(b))?g.Yf(b,this.metadataKey):b:this.data=a},b1a=function(a){P6.call(this);
this.status=1;this.errorCode=a},r7=function(a){this.j=a},c1a=function(a,b){this.u=a;
this.j=b},d1a=function(a){return Y0a(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?O_a(b):b);return b})},t7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},v7=function(a){u7.dispatchEvent(new e1a(u7,a))},e1a=function(a,b){g.wf.call(this,"statevent",a);
this.stat=b},w7=function(a,b,c,d){this.j=a;
this.C=b;this.K=c;this.J=d||1;this.u=45E3;this.B=new g.Hk(this);this.D=new g.Ai;this.D.setInterval(250)},g1a=function(a,b,c){a.Cs=1;
a.Cn=m6(b.clone());a.Op=c;a.xa=!0;f1a(a,null)},x7=function(a,b,c,d,e){a.Cs=1;
a.Cn=m6(b.clone());a.Op=null;a.xa=c;e&&(a.OP=!1);f1a(a,d)},f1a=function(a,b){a.Bs=Date.now();
y7(a);a.En=a.Cn.clone();n6(a.En,"t",a.J);a.yz=0;a.Of=a.j.DD(a.j.Iv()?b:null);0<a.BD&&(a.wz=new L6((0,g.Ta)(a.lK,a,a.Of),a.BD));a.B.Pa(a.Of,"readystatechange",a.jT);b=a.Np?g.$f(a.Np):{};a.Op?(a.xz="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Of.send(a.En,a.xz,a.Op,b)):(a.xz="GET",a.OP&&!g.Af&&(b.Connection="close"),a.Of.send(a.En,a.xz,null,b));a.j.Xj(1)},i1a=function(a,b){var c=a.yz,d=b.indexOf("\n",c);
if(-1==d)return z7;c=Number(b.substring(c,d));if(isNaN(c))return h1a;d+=1;if(d+c>b.length)return z7;b=b.substr(d,c);a.yz=d+c;return b},k1a=function(a,b){a.Bs=Date.now();
y7(a);var c=b?window.location.hostname:"";a.En=a.Cn.clone();g.Ck(a.En,"DOMAIN",c);g.Ck(a.En,"t",a.J);try{a.rk=new ActiveXObject("htmlfile")}catch(m){A7(a);a.Dn=7;v7(22);B7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in C7)f=C7[f];else if(f in j1a)f=C7[f]=j1a[f];else{var k=f.charCodeAt(0);if(31<k&&127>k)var l=f;else{if(256>k){if(l="\\x",16>k||256<k)l+="0"}else l="\\u",4096>k&&(l+="0");l+=k.toString(16).toUpperCase()}f=
C7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.rh(g.Kg("b/12014412"),d);a.rk.open();a.rk.write(g.nh(c));a.rk.close();a.rk.parentWindow.m=(0,g.Ta)(a.dZ,a);a.rk.parentWindow.d=(0,g.Ta)(a.UO,a,!0);a.rk.parentWindow.rpcClose=(0,g.Ta)(a.UO,a,!1);c=a.rk.createElement("DIV");a.rk.parentWindow.document.body.appendChild(c);d=g.Xg(a.En.toString());d=g.Hh(g.Tg(d));d=g.rh(g.Kg("b/12014412"),'<iframe src="'+d+'"></iframe>');g.tba(c,d);a.j.Xj(1)},y7=function(a){a.CD=
Date.now()+a.u;
l1a(a,a.u)},l1a=function(a,b){if(null!=a.Ds)throw Error("WatchDog timer not null");
a.Ds=t7((0,g.Ta)(a.iT,a),b)},D7=function(a){a.Ds&&(g.C.clearTimeout(a.Ds),a.Ds=null)},B7=function(a){a.j.cf()||a.Mp||a.j.zz(a)},A7=function(a){D7(a);
g.rf(a.wz);a.wz=null;a.D.stop();g.Ik(a.B);if(a.Of){var b=a.Of;a.Of=null;b.abort();b.dispose()}a.rk&&(a.rk=null)},E7=function(a,b){try{a.j.mK(a,b),a.j.Xj(4)}catch(c){}},n1a=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;m1a(a,b,function(k){k?c(!0):g.C.setTimeout(function(){n1a(a,b,c,d,f)},f)})}},m1a=function(a,b,c){var d=new Image;
d.onload=function(){try{F7(d),c(!0)}catch(e){}};
d.onerror=function(){try{F7(d),c(!1)}catch(e){}};
d.onabort=function(){try{F7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{F7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
e_a(d,a)},F7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},o1a=function(a){this.j=a;
this.u=new N6},p1a=function(a){var b=G7(a.j,a.gw,"/mail/images/cleardot.gif");
m6(b);n1a(b.toString(),5E3,(0,g.Ta)(a.RT,a),3,2E3);a.Xj(1)},I7=function(a){var b=a.j.X;
if(null!=b)v7(5),b?(v7(11),H7(a.j,a,!1)):(v7(12),H7(a.j,a,!0));else if(a.Wg=new w7(a),a.Wg.Np=a.ED,b=a.j,b=G7(b,b.Iv()?a.Hv:null,a.FD),v7(5),!g.Ic||g.yc(10))n6(b,"TYPE","xmlhttp"),x7(a.Wg,b,!1,a.Hv,!1);else{n6(b,"TYPE","html");var c=a.Wg;a=!!a.Hv;c.Cs=3;c.Cn=m6(b.clone());k1a(c,a)}},J7=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new N6;this.N=a||null;this.X=null!=b?b:null;this.K=c||!1},q1a=function(a,b){this.j=a;
this.map=b;this.context=null},r1a=function(a,b,c,d){g.wf.call(this,"timingevent",a);
this.size=b;this.yu=d},s1a=function(a){g.wf.call(this,"serverreachability",a)},t1a=function(a){a.kT(1,0);
a.Az=G7(a,null,a.GD);K7(a)},u1a=function(a){a.On&&(a.On.abort(),a.On=null);
a.Qe&&(a.Qe.cancel(),a.Qe=null);a.Vl&&(g.C.clearTimeout(a.Vl),a.Vl=null);L7(a);a.hh&&(a.hh.cancel(),a.hh=null);a.Fn&&(g.C.clearTimeout(a.Fn),a.Fn=null)},v1a=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new q1a(a.lT++,b));2!=a.j&&3!=a.j||K7(a)},w1a=function(a){var b=0;
a.Qe&&b++;a.hh&&b++;return b},K7=function(a){a.hh||a.Fn||(a.Fn=t7((0,g.Ta)(a.qK,a),0),a.Fs=0)},y1a=function(a,b){if(1==a.j){if(!b){a.Kv=Math.floor(1E5*Math.random());
b=a.Kv++;var c=new w7(a,"",b);c.Np=a.Hk;var d=M7(a),e=a.Az.clone();g.Ck(e,"RID",b);g.Ck(e,"CVER","1");N7(a,e);g1a(c,e,d);a.hh=c;a.j=2}}else 3==a.j&&(b?x1a(a,b):0==a.u.length||a.hh||x1a(a))},x1a=function(a,b){if(b)if(6<a.Pp){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.Kv-1;b=M7(a)}else c=b.K,b=b.Op;else c=a.Kv++,b=M7(a);var d=a.Az.clone();g.Ck(d,"SID",a.C);g.Ck(d,"RID",c);g.Ck(d,"AID",a.Gs);N7(a,d);c=new w7(a,a.C,c,a.Fs+1);c.Np=a.Hk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.hh=c;g1a(c,d,b)},N7=function(a,b){a.Yf&&(a=a.Yf.uK())&&g.Gf(a,function(c,d){g.Ck(b,d,c)})},M7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Pp&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Vr:e.Vr},f++){e.Vr=a.u[f].j;var k=a.u[f].map;e.Vr=6>=a.Pp?f:e.Vr-d;try{g.Gf(k,function(l){return function(m,n){c.push("req"+l.Vr+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Vr+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},z1a=function(a){a.Qe||a.Vl||(a.J=1,a.Vl=t7((0,g.Ta)(a.pK,a),0),a.Es=0)},O7=function(a){if(a.Qe||a.Vl||3<=a.Es)return!1;
a.J++;a.Vl=t7((0,g.Ta)(a.pK,a),A1a(a,a.Es));a.Es++;return!0},H7=function(a,b,c){a.FC=c;
a.Ik=b.Ul;a.K||t1a(a)},L7=function(a){null!=a.Qp&&(g.C.clearTimeout(a.Qp),a.Qp=null)},A1a=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},P7=function(a,b){if(2==b||9==b){var c=null;
a.Yf&&(c=null);var d=(0,g.Ta)(a.m_,a);c||(c=new g.uk("//web.archive.org/web/20220401000240/https://www.google.com/images/cleardot.gif"),m6(c));m1a(c.toString(),1E4,d)}else v7(2);B1a(a,b)},B1a=function(a,b){a.j=0;
a.Yf&&a.Yf.rK(b);C1a(a);u1a(a)},C1a=function(a){a.j=0;
a.Ik=-1;if(a.Yf)if(0==a.B.length&&0==a.u.length)a.Yf.HD();else{var b=g.dc(a.B),c=g.dc(a.u);a.B.length=0;a.u.length=0;a.Yf.HD(b,c)}},G7=function(a,b,c){var d=g.Dk(c);
if(""!=d.j)b&&g.wk(d,b+"."+d.j),g.xk(d,d.u);else{var e=window.location;d=P_a(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Jv&&g.Gf(a.Jv,function(f,k){g.Ck(d,k,f)});
g.Ck(d,"VER",a.Pp);N7(a,d);return d},D1a=function(){},E1a=function(){this.j=[];
this.u=[]},F1a=function(){},J6=function(){if(!Q7){Q7=new g.Di(new F1a);
var a=g.Yq("client_streamz_web_flush_count",-1);-1!==a&&(Q7.C=a)}return Q7},R7=function(a){g.wf.call(this,"channelMessage");
this.message=a},S7=function(a){g.wf.call(this,"channelError");
this.error=a},G1a=function(a,b){this.action=a;
this.params=b||{}},T7=function(a,b){g.G.call(this);
this.j=new g.L(this.VY,0,this);g.H(this,this.j);this.hg=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Ta)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Ta)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},U7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ra=a;this.K=b;this.B=new g.Sp;this.u=new T7(this.QZ,this);this.j=null;this.Z=!1;this.J=null;this.X="";this.N=this.D=0;this.C=[];this.xa=c;this.ma=d;this.Da=e;this.va=new o0a;this.Ha=new p0a;this.Ia=new q0a},V7=function(a){if(a.j){var b=a.ma(),c=a.j.Hk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Hk=c}},W7=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.Yi(4,a))||"";b&&(this.port=":"+b);this.domain=g.Zi(a)||"";a=g.ub();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.tb(a,"10.0")&&(this.u=!1))},X7=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.ej(c+b,{})},Y7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ua(a.C,d,!0),onError:g.Ua(a.B,e),onTimeout:g.Ua(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Ar(b,a)},Z7=function(a,b){g.tg.call(this);
var c=this;this.Lc=a();this.Lc.subscribe("handlerOpened",this.sR,this);this.Lc.subscribe("handlerClosed",this.qR,this);this.Lc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Lc.subscribe("handlerMessage",this.rR,this);this.j=b},H1a=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new $0a:e;var f=void 0===f?new g.Sp:f;this.pathPrefix=a;this.j=b;this.va=c;this.D=f;this.N=null;this.X=this.K=0;this.channel=null;this.J=0;this.B=new T7(function(){d.B.isActive();var k;0===(null==(k=d.channel)?void 0:i7((new c1a(k,k.j)).j.u))&&d.connect(d.N,d.K)});
this.C={};this.u={};this.Z=!1;this.logger=null;this.ra=[];this.ma=void 0},I1a=function(a){g.ig(a.channel,"m",function(){a.J=3;
a.B.reset();a.N=null;a.K=0;for(var b=g.r(a.ra),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.ra=[];a.ea("webChannelOpened")});
g.ig(a.channel,"n",function(){a.J=0;a.B.isActive()||a.ea("webChannelClosed");var b,c=null==(b=a.channel)?void 0:d1a(new c1a(b,b.j));c&&(a.ra=[].concat(g.u(c)))});
g.ig(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.ea("webChannelMessage",new G1a(c[0],c[1]));a.ma=b.statusCode});
g.ig(a.channel,"o",function(){401===a.ma||a.B.start();a.ea("webChannelError")})},$7=function(a){var b=a.va();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},a8=function(a){g.tg.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.vR,this);this.j.subscribe("webChannelClosed",this.tR,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.uR,this)},J1a=function(a,b,c,d,e){function f(){return new U7(X7(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.Q("enable_mdx_web_channel_desktop")?new a8(function(){return new H1a(X7(a,"/wc"),b,c)}):new Z7(f,e)},N1a=function(){var a=K1a;
L1a();b8.push(a);M1a()},c8=function(a,b){L1a();
var c=O1a(a,String(b));g.Xb(b8)?P1a(c):(M1a(),g.pc(b8,function(d){d(c)}))},L1a=function(){b8||(b8=g.Ka("yt.mdx.remote.debug.handlers_")||[],g.Ja("yt.mdx.remote.debug.handlers_",b8))},P1a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},M1a=function(){var a=b8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.pc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},O1a=function(a,b){var c=(Date.now()-Q1a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.cv.call(this);
this.J=a;this.screens=[]},R1a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},S1a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.En(a.screens,function(f){return!!x6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=R1a(a,b[d])||c;return c},T1a=function(a,b){var c=a.screens.length;
a.screens=g.En(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.cv.call(this);
this.B=a;this.K=b;this.C=c;this.J=d;this.D=e;this.u=0;this.j=null;this.Rb=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.u=a;this.j=NaN;i8(this);this.info("Initializing with "+v6(this.screens))},U1a=function(a){if(a.screens.length){var b=g.Nl(a.screens,function(d){return d.id}),c=X7(a.u,"/pairing/get_lounge_token_batch");
Y7(a.u,c,{screen_ids:b.join(",")},(0,g.Ta)(a.TU,a),(0,g.Ta)(a.SU,a))}},i8=function(a){if(g.Q("deprecate_pair_servlet_enabled"))return S1a(a,[]);
var b=V_a(a0a());b=g.En(b,function(c){return!c.uuid});
return S1a(a,b)},k8=function(a,b){c0a(g.Nl(a.screens,T_a));
b&&b0a()},m8=function(a,b){g.cv.call(this);
this.J=b;b=(b=g.aw("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.J(),e=0,f=d.length;e<f;++e){var k=d[e].id;c[k]=g.Ub(b,k)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;l8("Initialized with "+g.Si(this.j))},n8=function(a,b,c){var d=X7(a.D,"/pairing/get_screen_availability");
Y7(a.D,d,{lounge_token:b.token},(0,g.Ta)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Ta)(function(){c(!1)},a))},o8=function(a,b){a:if(o6(b)!=o6(a.j))var c=!1;
else{c=g.Of(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.Si(a.j)),a.j=b,a.ea("screenChange"));V1a(a)},p8=function(a){isNaN(a.B)||g.xr(a.B);
a.B=g.rr((0,g.Ta)(a.GH,a),0<a.C&&a.C<g.Va()?2E4:1E4)},l8=function(a){c8("OnlineScreenService",a)},W1a=function(a){var b={};
g.pc(a.J(),function(c){c.token?b[c.token]=c.id:this.De("Requesting availability of screen w/o lounge token.")});
return b},V1a=function(a){a=g.Of(g.Hf(a.j,function(b){return b}));
g.mc(a);a.length?g.$v("yt-remote-online-screen-ids",a.join(","),60):g.bw("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.C=a;this.K=b;this.j=this.u=null;this.B=[];this.D={};X1a(this)},Z1a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.Oh(),l=c?y6(k,c):null;c&&(a.K||l)||(l=y6(k,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.j,m,function(n){e(n?m:null)})}else c?Y1a(a,c,(0,g.Ta)(function(n){var p=r8(this,new s6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},$1a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},a2a=function(a,b,c){n8(a.j,b,c)},Y1a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){f=k&&k.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Ar(X7(a.C,"/pairing/get_lounge_token_batch"),e)},b2a=function(a){a.screens=a.u.Oh();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+v6(a.screens))},X1a=function(a){s8(a);
a.u=new j8(a.C);a.u.subscribe("screenChange",(0,g.Ta)(a.cV,a));b2a(a);a.K||(a.B=V_a(g.aw("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+v6(a.B));a.j=new m8(a.C,(0,g.Ta)(a.Oh,a,!0));a.j.subscribe("screenChange",(0,g.Ta)(function(){this.ea("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=y6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||c2a(a));s8(a);a.D[b.uuid]=b.id;g.$v("yt-remote-device-id-map",a.D,31536E3);return b},c2a=function(a){a=g.En(a.B,function(b){return"shortLived"!=b.idType});
g.$v("yt-remote-automatic-screen-cache",g.Nl(a,T_a))},s8=function(a){a.D=g.aw("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.cv.call(this);
this.xa=c;this.B=a;this.j=b;this.C=null},u8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},d2a=function(a,b){a.C&&(a.C.token=b,r8(a.B,a.C));
a.ea("sessionScreen",a.C)},v8=function(a,b){c8(a.xa,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.ma=(0,g.Ta)(this.AR,this);this.va=(0,g.Ta)(this.nZ,this);this.Z=g.rr(function(){e2a(d,null)},12E4);
this.K=this.D=this.J=this.N=0;this.ra=!1;this.X="unknown"},x8=function(a,b){g.xr(a.K);
a.K=0;0==b?f2a(a):a.K=g.rr(function(){f2a(a)},b)},f2a=function(a){g2a(a,"getLoungeToken");
g.xr(a.D);a.D=g.rr(function(){h2a(a,null)},3E4)},g2a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Si());
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Ta)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.Si(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.zM(b,function(c){u8(a,c)},function(){return a.Kg()},5)):a.Kg(Error("Waiting for session status timed out."))},j2a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new s6(b);i2a(a,d,function(e){e?(a.ra=!0,r8(a.B,d),u8(a,d),a.X="unknown",x8(a,c)):(g.br(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Kg())},5)},e2a=function(a,b){g.xr(a.Z);
a.Z=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?j2a(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.br(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.br(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Kg(Error("Waiting for session status timed out."))},h2a=function(a,b){g.xr(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.X=c,x8(a,3E4)):(d2a(a,b.loungeToken),a.ra=!1,a.X="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},i2a=function(a,b,c,d){g.xr(a.J);
a.J=0;a2a(a.B,b,function(e){e||0>d?c(e):a.J=g.rr(function(){i2a(a,b,c,d-1)},300)})},k2a=function(a){g.xr(a.N);
a.N=0;g.xr(a.J);a.J=0;g.xr(a.Z);a.Z=0;g.xr(a.D);a.D=0;g.xr(a.K);a.K=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.N=null;this.va="";this.Ia=c;this.Ha=null;this.Z=function(){};
this.X=NaN;this.Da=(0,g.Ta)(this.BR,this);this.D=function(){};
this.K=this.J=0;this.ma=!1;this.ra="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},l2a=function(a){a.D=a.B.nJ(a.va,a.j.label,a.j.friendlyName,A8(a),function(b,c){a.D=function(){};
a.ma=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.D=function(){};
a.Kg(b)})},m2a=function(a){var b={};
b.pairingCode=a.va;b.theme=a.Ia;e0a()&&(b.env_useStageMdx=1);return g.cj(b)},C8=function(a){return new Promise(function(b){a.va=w6();
if(a.Ha){var c=new chrome.cast.DialLaunchResponse(!0,m2a(a));b(c);l2a(a)}else a.Z=function(){g.xr(a.X);a.Z=function(){};
a.X=NaN;var d=new chrome.cast.DialLaunchResponse(!0,m2a(a));b(d);l2a(a)},a.X=g.rr(function(){a.Z()},100)})},o2a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new s6(b);return(new Promise(function(e){n2a(a,d,function(f){f?(a.ma=!0,r8(a.B,d),u8(a,d),B8(a,c)):g.br(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},p2a=function(a,b){var c=a.N.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){Z1a(a.B,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},n2a=function(a,b,c,d){g.xr(a.J);
a.J=0;a2a(a.B,b,function(e){e||0>d?c(e):a.J=g.rr(function(){n2a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.xr(a.K),a.K=0,0==b?q2a(a):a.K=g.rr(function(){q2a(a)},b))},q2a=function(a){A8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.ra=c,B8(a,3E4)):(a.ma=!1,a.ra="unknown",d2a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.ra="noLoungeTokenResponse";B8(a,3E4)})},r2a=function(a){g.xr(a.J);
a.J=0;g.xr(a.K);a.K=0;a.D();a.D=function(){};
g.xr(a.X)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.u=g.rr((0,g.Ta)(this.Qt,this,null),150)},E8=function(a,b){g.cv.call(this);
this.config_=b;this.u=a;this.N=b.appId||"233637DE";this.C=b.theme||"cl";this.X=b.disableCastApi||!1;this.J=b.forceMirroring||!1;this.j=null;this.K=!1;this.B=[];this.D=(0,g.Ta)(this.iY,this)},s2a=function(a,b){return b?g.Rb(a.B,function(c){return t6(b,c.label)},a):null},F8=function(a){c8("Controller",a)},K1a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.K||!!a.B.length||!!a.j},H8=function(a,b,c){b!=a.j&&(g.rf(a.j),(a.j=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.j):a.ea("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Ta)(a.SO,a,b)),b.subscribe("sessionFailed",function(){return t2a(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Qt(null)):a.ea("yt-remote-cast2-session-change",null))},t2a=function(a,b){a.j==b&&a.ea("yt-remote-cast2-session-failed")},u2a=function(a){var b=a.u.mJ(),c=a.j&&a.j.j;
a=g.Nl(b,function(d){c&&t6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=s2a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},z2a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):v2a()?w2a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?x2a(a,c):(window.__onGCastApiAvailable=function(e,f){e?x2a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.bw("yt-remote-cast-available"),g.bw("yt-remote-cast-receiver"),
y2a(),c(!1))},d.loadCastApiSetupScript?g.dw("https://web.archive.org/web/20220401000240/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=F6()&&l0a():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?H6():89<=F6()?n0a():(I6(),G6(m0a.map(i0a))))):I8("Cannot initialize because not running Chrome")},y2a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ja("yt.mdx.remote.cloudview.instance_",null);A2a(!1);g.Du(N8);N8.length=0},O8=function(){return!!g.aw("yt-remote-cast-installed")},B2a=function(){var a=g.aw("yt-remote-cast-receiver");
return a?a.friendlyName:null},C2a=function(){I8("clearCurrentReceiver");
g.bw("yt-remote-cast-receiver")},D2a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.Cu("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},v2a=function(){var a=0<=g.ub().search(/ (CrMo|Chrome|CriOS)\//);
return g.gA||a},E2a=function(a,b){M8().init(a,b)},w2a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.$v("yt-remote-cast-available",d);q6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.$v("yt-remote-cast-receiver",d);q6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.$v("yt-remote-cast-receiver",d);q6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+u6(d));
d||g.bw("yt-remote-cast-receiver");q6("yt-remote-cast2-session-change",d)}),g.Ja("yt.mdx.remote.cloudview.instance_",a),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.Ka("yt.mdx.remote.cloudview.instance_")},x2a=function(a,b){L8(!0);
J8(!1);E2a(a,function(c){c?(A2a(!0),g.Eu("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.bw("yt-remote-cast-available"),g.bw("yt-remote-cast-receiver"),y2a());b(c)})},I8=function(a){c8("cloudview",a)},K8=function(a){c8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.$v("yt-remote-cast-installed",a)},P8=function(){return!!g.Ka("yt.mdx.remote.cloudview.apiReady_")},A2a=function(a){I8("setApiReady_ "+a);
g.Ja("yt.mdx.remote.cloudview.apiReady_",a)},J8=function(a){g.Ja("yt.mdx.remote.cloudview.initializing_",a)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.J=this.K=0;this.trackData=null;this.hasNext=this.ul=!1;this.N=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.ul=!1;a.hasNext=!1;a.K=0;a.J=g.Va();a.C=0;a.j=0;a.D=0;a.N=0;a.B=NaN;a.u=!1},U8=function(a){return a.Jc()?(g.Va()-a.J)/1E3:0},V8=function(a,b){a.K=b;
a.J=g.Va()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Va()-a.J)/1E3+a.K;
case -1E3:return 0}return a.K},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.ag(a.trackData);b.hasPrevious=a.ul;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.J;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.N;b.liveIngestionTime=a.B;return b},$8=function(a,b){g.cv.call(this);
this.B=0;this.C=a;this.J=[];this.D=new E1a;this.u=this.j=null;this.X=(0,g.Ta)(this.UW,this);this.K=(0,g.Ta)(this.Kx,this);this.N=(0,g.Ta)(this.TW,this);this.Z=(0,g.Ta)(this.XW,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.YH,this),F2a(this))):c=3;0!=c&&(b?this.YH(c):g.rr((0,g.Ta)(function(){this.YH(c)},this),0));
(a=D2a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Z)},a9=function(a){return new S8(a.C.getPlayerContextData())},F2a=function(a){g.pc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.J.push(this.C.subscribe(b,g.Ua(this.gY,b),this))},a)},G2a=function(a){g.pc(a.J,function(b){this.C.unsubscribeByKey(b)},a);
a.J.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.enqueue(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.C.sendMessage(b,c)},d9=function(a,b){G2a(a);
a.C.setPlayerContextData(Y8(b));F2a(a)},Z8=function(a,b){a.u&&(a.u.removeUpdateListener(a.X),a.u.removeMediaListener(a.K),a.Kx(null));
a.u=b;a.u&&(c8("CP","Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.X),a.u.addMediaListener(a.K),a.u.media.length&&a.Kx(a.u.media[0]))},H2a=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.j.getEstimatedTime());d9(a,d)}else c8("CP","No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Ta)(function(d){this.De("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.De("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},j9=function(a,b,c,d){d=void 0===d?!1:d;
g.cv.call(this);var e=this;this.J=NaN;this.va=!1;this.X=this.N=this.ma=this.ra=NaN;this.Z=[];this.D=this.K=this.C=this.j=this.u=null;this.Ha=a;this.Da=d;this.Z.push(g.iu(window,"beforeunload",function(){e.Zs(2)}));
this.B=[];this.j=new S8;this.Ia=b.id;this.xa=b.idType;this.u=J1a(this.Ha,c,this.rJ,"shortLived"==this.xa,this.Ia);this.u.Pa("channelOpened",function(){I2a(e)});
this.u.Pa("channelClosed",function(){h9("Channel closed");isNaN(e.J)?D6(!0):D6();e.dispose()});
this.u.Pa("channelError",function(f){D6();isNaN(e.Vw())?(1==f&&"shortLived"==e.xa&&e.ea("browserChannelAuthError",f),h9("Channel error: "+f+" without reconnection"),e.dispose()):(e.va=!0,h9("Channel error: "+f+" with reconnection in "+e.Vw()+" ms"),i9(e,2))});
this.u.Pa("channelMessage",function(f){J2a(e,f)});
this.u.hn(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.cw()&&g.$v("yt-remote-session-video-id",f)})},K2a=function(a){return g.Rb(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},h9=function(a){c8("conn",a)},i9=function(a,b){a.ea("proxyStateChange",b)},L2a=function(a){a.J=g.rr(function(){h9("Connecting timeout");
a.Zs(1)},2E4)},k9=function(a){g.xr(a.J);
a.J=NaN},l9=function(a){g.xr(a.ra);
a.ra=NaN},M2a=function(a){m9(a);
a.ma=g.rr(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.xr(a.ma);
a.ma=NaN},I2a=function(a){h9("Channel opened");
a.va&&(a.va=!1,l9(a),a.ra=g.rr(function(){h9("Timing out waiting for a screen.");a.Zs(1)},15E3))},O2a=function(a,b){var c=null;
if(b){var d=K2a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ja("yt.mdx.remote.remoteClient_",c);b&&(k9(a),l9(a));c=a.u.Gt()&&isNaN(a.J);b==c?b&&(i9(a,1),n9(a,"getSubtitlesTrack")):b?(a.yM()&&a.j.reset(),i9(a,1),n9(a,"getNowPlaying"),N2a(a)):a.Zs(1)},P2a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.Vf(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.ea("remotePlayerChange"))},Q2a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;X8(a.j,d,e);a.ea("remoteQueueChange",c)},S2a=function(a,b){b.params=b.params||{};
Q2a(a,b,"NOW_PLAYING_MAY_CHANGE");R2a(a,b);a.ea("autoplayDismissed")},R2a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.N=isNaN(c)?0:c;a.j.jk(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?M2a(a):m9(a);a.ea("remotePlayerChange")},T2a=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.j,isNaN(b)?0:b);a.ea("remotePlayerChange")}},U2a=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.ea("remotePlayerChange")},V2a=function(a,b){a.K=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},W2a=function(a,b){a.K=b.params.videoId||null;
a.ea("autoplayUpNext",a.K)},X2a=function(a,b){a.D=b.params.autoplayMode;
a.ea("autoplayModeChange",a.D);"DISABLED"==a.D&&a.ea("autoplayDismissed")},Y2a=function(a,b){var c="true"==b.params.hasNext;
a.j.ul="true"==b.params.hasPrevious;a.j.hasNext=c;a.ea("previousNextChange")},J2a=function(a,b){b=b.message;
b.params?h9("Received: action="+b.action+", params="+g.Si(b.params)):h9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=p6(b.params.devices);a.B=g.Nl(b,function(d){return new r6(d)});
b=!!g.Rb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
O2a(a,b);b=a.iN("mlm");a.ea("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.bc(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
O2a(a,!1);break;case "remoteConnected":var c=new r6(p6(b.params.device));g.Rb(a.B,function(d){return d.equals(c)})||N_a(a.B,c);
break;case "remoteDisconnected":c=new r6(p6(b.params.device));g.bc(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":Q2a(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":S2a(a,b);break;case "onStateChange":R2a(a,b);break;case "onAdStateChange":T2a(a,b);break;case "onVolumeChanged":U2a(a,b);break;case "onSubtitlesTrackChanged":P2a(a,b);break;case "nowAutoplaying":V2a(a,b);break;case "autoplayDismissed":a.ea("autoplayDismissed");break;case "autoplayUpNext":W2a(a,b);break;case "onAutoplayModeChanged":X2a(a,b);break;case "onHasPreviousNextChanged":Y2a(a,b);
break;case "requestAssistedSignIn":a.ea("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.ea("loopModeChange",b.params.loopMode);break;default:h9("Unrecognized action: "+b.action)}},N2a=function(a){g.xr(a.X);
a.X=g.rr(function(){a.Zs(1)},864E5)},n9=function(a,b,c){c?h9("Sending: action="+b+", params="+g.Si(c)):h9("Sending: action="+b);
a.u.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.Ze=a;this.j=[];this.j.push(this.Ze.$_s("screenChange",(0,g.Ta)(this.FR,this)));this.j.push(this.Ze.$_s("onlineScreenChange",(0,g.Ta)(this.OX,this)))},b3a=function(a,b){d0a();
if(!E6||!E6.get("yt-remote-disable-remote-module-for-dev")){b=g.O("MDX_CONFIG")||b;X_a();C6();p9||(p9=new W7(b?b.loungeApiHost:void 0),e0a()&&(p9.j="/api/loungedev"));q9||(q9=g.Ka("yt.mdx.remote.deferredProxies_")||[],g.Ja("yt.mdx.remote.deferredProxies_",q9));Z2a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ja("yt.mdx.remote.screenService_",d);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ja("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);z2a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){q6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ka("yt.mdx.remote.initialized_")&&(g.Ja("yt.mdx.remote.initialized_",!0),t9("Initializing: "+g.Si(b)),
u9.push(g.Cu("yt-remote-cast2-api-ready",function(){q6("yt-remote-api-ready")})),u9.push(g.Cu("yt-remote-cast2-availability-change",function(){q6("yt-remote-receiver-availability-change")})),u9.push(g.Cu("yt-remote-cast2-receiver-selected",function(){v9(null);
q6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.Cu("yt-remote-cast2-receiver-resumed",function(){q6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.Cu("yt-remote-cast2-session-change",$2a)),u9.push(g.Cu("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),C2a())})),u9.push(g.Cu("yt-remote-cast2-session-failed",function(){q6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.Q("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.Si(a)),a?(g.$v("yt-remote-session-app",a.app),g.$v("yt-remote-session-name",a.name)):(g.bw("yt-remote-session-app"),g.bw("yt-remote-session-name")),g.Ja("yt.mdx.remote.channelParams_",a),c.start(),s9()||a3a())}},c3a=function(){var a=r9().Ze.$_gos();
var b=y9();b&&z9()&&(x6(a,b)||a.push(b));return W_a(a)},A9=function(){var a=d3a();
!a&&O8()&&B2a()&&(a={key:"cast-selector-receiver",name:B2a()});return a},d3a=function(){var a=c3a(),b=y9();
b||(b=w9());return g.Rb(a,function(c){return b&&t6(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Oh();return y6(b,a)},$2a=function(a){t9("remote.onCastSessionChange_: "+u6(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.hn(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){c8("remote",a)},r9=function(){if(!G9){var a=g.Ka("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.Ka("yt.mdx.remote.currentScreenId_")},e3a=function(a){g.Ja("yt.mdx.remote.currentScreenId_",a)},f3a=function(){return g.Ka("yt.mdx.remote.connectData_")},v9=function(a){g.Ja("yt.mdx.remote.connectData_",a)},z9=function(){return g.Ka("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||e3a("");g.Ja("yt.mdx.remote.connection_",a);q9&&(g.pc(q9,function(c){c(a)}),q9.length=0);
b&&!a?q6("yt-remote-connection-change",!1):!b&&a&&q6("yt-remote-connection-change",!0)},w9=function(){var a=g.cw();
if(!a)return null;var b=r9();if(!b)return null;b=b.Oh();return y6(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{e3a(a.id);var c=g.Ka("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new j9(p9,a,x9(),c);a.connect(b,f3a());a.subscribe("beforeDisconnect",function(d){q6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},a3a=function(){var a=w9();
a?(t9("Resume connection to: "+u6(a)),D9(a,0)):(D6(),C2a(),t9("Skipping connecting because no session screen found."))},Z2a=function(){var a=x9();
if(g.Vf(a)){a=B6();var b=g.aw("yt-remote-session-name")||"",c=g.aw("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ja("yt.mdx.remote.channelParams_",a)}},x9=function(){return g.Ka("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.G.call(this);
var d=this;this.u=a;this.I=b;this.dc=c;this.events=new g.cA(this);this.Z=this.events.T(this.I,"onVolumeChange",function(e){g3a(d,e)});
this.D=!1;this.J=new g.kH(64);this.j=new g.L(this.aQ,500,this);this.B=new g.L(this.bQ,1E3,this);this.N=new K6(this.G_,0,this);this.C={};this.X=new g.L(this.IQ,1E3,this);this.K=new L6(this.seekTo,1E3,this);g.H(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.yX);this.events.T(b,"captionschanged",this.RW);this.events.T(b,"captionssettingschanged",this.iQ);this.events.T(b,"videoplayerreset",this.EB);this.events.T(b,"mdxautoplaycancel",function(){d.dc.UL()});
a=this.dc;a.isDisposed();a.subscribe("proxyStateChange",this.PO,this);a.subscribe("remotePlayerChange",this.Px,this);a.subscribe("remoteQueueChange",this.EB,this);a.subscribe("previousNextChange",this.MO,this);a.subscribe("nowAutoplaying",this.GO,this);a.subscribe("autoplayDismissed",this.jO,this);g.H(this,this.j);g.H(this,this.B);g.H(this,this.N);g.H(this,this.X);g.H(this,this.K);this.iQ();this.EB();this.Px()},g3a=function(a,b){if(J9(a)){a.dc.unsubscribe("remotePlayerChange",a.Px,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.dc);if(c!==d.volume||b!==d.muted)a.dc.setVolume(c,b),a.X.start();a.dc.subscribe("remotePlayerChange",a.Px,a)}},h3a=function(a){a.Pb(0);
a.j.stop();a.Vb(new g.kH(64))},K9=function(a,b){if(J9(a)&&!a.D){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.cg(c,b));a.dc.qJ(a.I.getVideoData(1).videoId,c);a.C=a9(a.dc).trackData}},L9=function(a,b){var c=a.I.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.dc.playVideo(c.videoId,b,d,e,c.playerParams,c.Wa,M_a(c));a.Vb(new g.kH(1))},i3a=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{ZM:1});
c&&c.length?(a.I.setOption("captions","track",b),a.D=!1):(a.I.loadModule("captions"),a.D=!0)}else a.I.setOption("captions","track",{})},J9=function(a){return a9(a.dc).videoId===a.I.getVideoData(1).videoId},M9=function(){g.W.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-popup-title",oa:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",oa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",U:[{G:"button",Fa:["ytp-button","ytp-mdx-privacy-popup-cancel"],oa:"Cancel"},{G:"button",Fa:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],oa:"Confirm"}]}]}]});this.j=new g.SI(this,250);this.cancelButton=this.Ca("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Ca("ytp-mdx-privacy-popup-confirm");g.H(this,this.j);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},N9=function(a){g.W.call(this,{G:"div",
L:"ytp-remote",U:[{G:"div",L:"ytp-remote-display-status",U:[{G:"div",L:"ytp-remote-display-status-icon",U:[g.Eza()]},{G:"div",L:"ytp-remote-display-status-text",oa:"{{statustext}}"}]}]});this.api=a;this.j=new g.SI(this,250);g.H(this,this.j);this.T(a,"presentingplayerstatechange",this.onStateChange);j3a(this,a.yb())},j3a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.V(b,128)?g.HF("Error on $RECEIVER_NAME",c):b.Jc()||g.V(b,4)?g.HF("Playing on $RECEIVER_NAME",c):g.HF("Connected to $RECEIVER_NAME",c);a.Ma("statustext",b);a.j.show()}else a.j.hide()},O9=function(a,b){g.rO.call(this,"Play on",0,a,b);
this.I=a;this.kp={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},P9=function(a){g.jL.call(this,a);
this.Al={key:w6(),name:"This computer"};this.Fi=null;this.subscriptions=[];this.rH=this.dc=null;this.kp=[this.Al];this.Rn=this.Al;this.Md=new g.kH(64);this.wN=0;this.Ff=-1;this.Xx=!1;this.Vx=this.ou=null;if(!g.sC(this.player.V())&&!g.tC(this.player.V())){a=this.player;var b=g.NK(a);b&&(b=b.Do())&&(b=new O9(a,b),g.H(this,b));b=new N9(a);g.H(this,b);g.XK(a,b.element,4);this.ou=new M9;g.H(this,this.ou);g.XK(a,this.ou.element,4);this.Xx=!!w9()}},Q9=function(a){a.Vx&&(a.player.removeEventListener("presentingplayerstatechange",
a.Vx),a.Vx=null)},k3a=function(a,b,c){a.Md=c;
a.player.ea("presentingplayerstatechange",new g.pF(c,b))},R9=function(a,b){if(b.key!==a.Rn.key)if(b.key===a.Al.key)C9();
else{var c;(c=!a.player.V().S("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.O("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.O("SESSION_INDEX")&&!g.O("LOGGED_IN")))||a.Xx||!a.ou);(c?0:g.KC(a.player.V())||g.NC(a.player.V()))&&l3a(a);a.Rn=b;if(!a.player.V().S("disable_mdx_connection_in_mdx_module_for_music_web")||!g.tC(a.player.V())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().S("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.length;l++)k[l]=g.eL(f,l).videoId}else k=[e];f=a.player.getCurrentTime(1);a={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Wa,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=M_a(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.Si(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?q6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Oh(),(b=y6(a,b.key))&&D9(b,1))}}},l3a=function(a){a.player.yb().Jc()?a.player.pauseVideo():(a.Vx=function(b){!a.Xx&&g.rF(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.Vx));
a.ou&&a.ou.jd();z9()||(H9=!0)};
g.uq.prototype.qo=g.da(1,function(){return g.ce(this,6)});
g.cd.prototype.iz=g.da(0,function(){var a=g.gd(this);return 4294967296*g.gd(this)+(a>>>0)});
var $Za,i_a=g.Xe(function(a,b,c){if(1!==a.u)return!1;g.D(b,c,g.rd(a));return!0},g.Ye),A_a=g.Xe(function(a,b,c,d){if(1!==a.u)return!1;
g.ne(b,c,d,g.rd(a));return!0},g.Ye),j_a=g.Xe(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.ed(a.j));return!0},g.$e),z_a=g.Xe(function(a,b,c,d){if(0!==a.u)return!1;
g.ne(b,c,d,g.ed(a.j));return!0},g.$e),r_a=g.Xe(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.fd(a.j));return!0},g.af),w_a=g.Xe(function(a,b,c,d){if(0!==a.u)return!1;
g.ne(b,c,d,g.fd(a.j));return!0},g.af),E_a=g.Xe(function(a,b,c){if(1!==a.u)return!1;
g.D(b,c,a.j.iz());return!0},function(a,b,c){b_a(a,c,g.ce(b,c))}),G_a=g.Xe(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.ee(b,c);if(2==a.u){c=g.cd.prototype.iz;var d=g.fd(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.iz());return!0},function(a,b,c){b=g.ee(b,c);
if(null!=b)for(var d=0;d<b.length;d++)b_a(a,c,b[d])}),o_a=g.Xe(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.hd(a.j));return!0},c_a),x_a=g.Xe(function(a,b,c,d){if(0!==a.u)return!1;
g.ne(b,c,d,g.hd(a.j));return!0},c_a),F_a=g.Xe(function(a,b,c){if(2!==a.u)return!1;
a=g.vd(a);g.le(b,c,a);return!0},function(a,b,c){b=g.ee(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.Ld(a,c,g.fb(e))}}),v_a=g.Xe(function(a,b,c,d){if(2!==a.u)return!1;
g.ne(b,c,d,g.vd(a));return!0},g.bf),C_a=g.Xe(function(a,b,c,d,e){if(2!==a.u)return!1;
g.qd(a,g.qe(b,d,c),e);return!0},g.cf),f_a=[1];
g.v(g_a,g.F);g.v(h_a,g.F);g.v(m_a,g.F);g.v(n_a,g.F);var t_a=[1,2];g.v(q_a,g.F);var j1a={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},C7={"'":"\\'"},S_a={m1:"atp",Wda:"ska",zca:"que",jaa:"mus",Vda:"sus",T6:"dsp",Xca:"seq",L$:"mic",J5:"dpa",F1:"cds",haa:"mlm",G5:"dsdtr",Raa:"ntb"};r6.prototype.equals=function(a){return a?this.id==a.id:!1};
var E6,A6="",k0a=f0a("loadCastFramework")||f0a("loadCastApplicationFramework"),m0a=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Wa(K6,g.G);g.h=K6.prototype;g.h.aT=function(a){this.C=arguments;this.j=!1;this.Rb?this.B=g.Va()+this.hg:this.Rb=g.Bi(this.D,this.hg)};
g.h.stop=function(){this.Rb&&(g.C.clearTimeout(this.Rb),this.Rb=null);this.B=null;this.j=!1;this.C=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.J.apply(null,this.C)))};
g.h.qa=function(){this.stop();K6.re.qa.call(this)};
g.h.bT=function(){this.Rb&&(g.C.clearTimeout(this.Rb),this.Rb=null);this.B?(this.Rb=g.Bi(this.D,this.B-g.Va()),this.B=null):this.u?this.j=!0:(this.j=!1,this.J.apply(null,this.C))};g.v(L6,g.G);g.h=L6.prototype;g.h.AD=function(a){this.B=arguments;this.Rb||this.u?this.j=!0:M6(this)};
g.h.stop=function(){this.Rb&&(g.C.clearTimeout(this.Rb),this.Rb=null,this.j=!1,this.B=null)};
g.h.pause=function(){this.u++};
g.h.resume=function(){this.u--;this.u||!this.j||this.Rb||(this.j=!1,M6(this))};
g.h.qa=function(){g.G.prototype.qa.call(this);this.stop()};N6.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
N6.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};g.Wa(O6,g.wf);g.Wa(P6,g.wf);var t0a=!1;var v0a=null;g.Wa(w0a,g.wf);g.Wa(x0a,g.wf);g.Wa(y0a,g.wf);U6.prototype.info=function(){};
U6.prototype.warning=function(){};var $6={},Z6={};g.h=V6.prototype;g.h.setTimeout=function(a){this.ib=a};
g.h.eT=function(a){a=a.target;var b=this.Ra;b&&3==g.yj(a)?b.AD():this.dK(a)};
g.h.dK=function(a){try{if(a==this.j)a:{var b=g.yj(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b||3==b&&!g.RC&&!Y6(this))){this.Da||4!=b||7==c||(8==c||0>=d?R6(3):R6(2));d7(this);var e=this.j.getStatus();this.qb=e;b:if(C0a(this)){var f=g.Cj(this.j);a="";var k=f.length,l=4==g.yj(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){b7(this);c7(this);var m="";break b}this.u.B=new g.C.TextDecoder}for(c=0;c<k;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&c==k-1});f.splice(0,k);this.u.j+=a;
this.Z=0;m=this.u.j}else m=g.Bj(this.j);Y6(this);if(this.B=200==e){if(this.ub&&!this.Qa){b:{if(this.j){var n=g.Dj(this.j,"X-HTTP-Initial-Response");if(n&&!g.nb(n)){var p=n;break b}}p=null}if(e=p)this.Qa=!0,a7(this,e);else{this.B=!1;this.J=3;S6(12);b7(this);c7(this);break a}}this.xa?(E0a(this,b,m),g.RC&&this.B&&3==b&&(this.Wa.Pa(this.Xa,"tick",this.dT),this.Xa.start())):a7(this,m);4==b&&b7(this);this.B&&!this.Da&&(4==b?G0a(this.D,this):(this.B=!1,X6(this)))}else 400==e&&0<m.indexOf("Unknown SID")?
(this.J=3,S6(12)):(this.J=0,S6(13)),b7(this),c7(this)}}}catch(q){Y6(this)}finally{}};
g.h.dT=function(){if(this.j){var a=g.yj(this.j),b=g.Bj(this.j);this.Z<b.length&&(d7(this),E0a(this,a,b),this.B&&4!=a&&X6(this))}};
g.h.cancel=function(){this.Da=!0;b7(this)};
g.h.cT=function(){this.X=null;var a=Date.now();0<=a-this.ob?(2!=this.Ia&&(R6(3),S6(17)),b7(this),this.J=2,c7(this)):F0a(this,this.ob-a)};
g.h.getLastError=function(){return this.J};L0a.prototype.cancel=function(){this.B=m7(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.r(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.h=Q0a.prototype;g.h.eK=8;g.h.nf=1;g.h.connect=function(a,b,c,d){this.xe&&g.qi((0,g.Ta)(this.OZ,this,a));S6(0);this.Fb=a;this.Da=b||{};c&&void 0!==d&&(this.Da.OSID=c,this.Da.OAID=d);this.Xa=this.Hb;this.fT(1,0);this.Ha=H0a(this,null,this.Fb);l7(this)};
g.h.disconnect=function(){R0a(this);if(3==this.nf){var a=this.Ra++,b=this.Ha.clone();g.Ck(b,"SID",this.C);g.Ck(b,"RID",a);g.Ck(b,"TYPE","terminate");q7(this,b);a=new V6(this,this.C,a);a.Ia=2;a.K=m6(b.clone());b=!1;g.C.navigator&&g.C.navigator.sendBeacon&&(b=g.C.navigator.sendBeacon(a.K.toString(),""));!b&&g.C.Image&&((new Image).src=a.K,b=!0);b||(a.j=B0a(a.D,null),a.j.send(a.K));a.ra=Date.now();X6(a)}X0a(this)};
g.h.OZ=function(a){try{u0a(a,function(){})}catch(b){}};
g.h.cf=function(){return 0==this.nf};
g.h.getState=function(){return this.nf};
g.h.gK=function(a){if(this.J)if(this.J=null,1==this.nf){if(!a){this.Ra=Math.floor(1E5*Math.random());a=this.Ra++;var b=new V6(this,"",a),c=this.X;this.ob&&(c?(c=g.$f(c),g.cg(c,this.ob)):c=this.ob);null!==this.K||this.fb||(b.Ha=c,c=null);var d;if(this.ib)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=U0a(this,b,d);e=this.Ha.clone();g.Ck(e,"RID",a);g.Ck(e,"CVER",22);this.xa&&g.Ck(e,"X-HTTP-Session-Id",this.xa);q7(this,e);c&&(this.fb?d="headers="+g.Fh(g.Zda(c))+"&"+d:this.K&&g.Gk(e,this.K,c));k7(this.u,b);this.me&&g.Ck(e,"TYPE","init");this.ib?(g.Ck(e,"$req",d),g.Ck(e,"SID","null"),b.ub=!0,W6(b,e,null)):W6(b,e,d);this.nf=2}}else 3==this.nf&&(a?V0a(this,a):0==this.B.length||M0a(this.u)||V0a(this))};
g.h.fK=function(){this.N=null;W0a(this);if(this.Kb&&!(this.Wa||null==this.j||0>=this.Sb)){var a=2*this.Sb;this.va=T6((0,g.Ta)(this.QW,this),a)}};
g.h.QW=function(){this.va&&(this.va=null,null!=this.j.j&&g.Bj(this.j.j),this.Xa=!1,this.Wa=!0,S6(10),g7(this),W0a(this))};
g.h.QG=function(a){this.j==a&&this.Kb&&!this.Wa&&(p7(this),this.Wa=!0,S6(11))};
g.h.gT=function(){null!=this.Z&&(this.Z=null,g7(this),h7(this),S6(19))};
g.h.fT=function(a){g.Ub(arguments,this.nf)};
g.h.n_=function(a){a?S6(2):S6(1)};
g.h.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.h=Z0a.prototype;g.h.kK=function(){};
g.h.jK=function(){};
g.h.iK=function(){};
g.h.hK=function(){};
g.h.isActive=function(){return!0};
g.h.hT=function(){};g.Wa(s7,g.tg);s7.prototype.open=function(){this.j.D=this.C;this.K&&(this.j.Ia=!0);this.j.connect(this.J,this.u||void 0)};
s7.prototype.close=function(){this.j.disconnect()};
s7.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.Si(a),a=c);b.B.push(new K0a(b.Qd++,a));3==b.nf&&l7(b)};
s7.prototype.qa=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;s7.re.qa.call(this)};
g.Wa(a1a,O6);g.Wa(b1a,P6);g.Wa(r7,Z0a);r7.prototype.kK=function(){this.j.dispatchEvent("m")};
r7.prototype.jK=function(a){this.j.dispatchEvent(new a1a(a))};
r7.prototype.iK=function(a){this.j.dispatchEvent(new b1a(a))};
r7.prototype.hK=function(){this.j.dispatchEvent("n")};var u7=new g.tg;g.v(e1a,g.wf);g.h=w7.prototype;g.h.Np=null;g.h.Tl=!1;g.h.Ds=null;g.h.CD=null;g.h.Bs=null;g.h.Cs=null;g.h.Cn=null;g.h.En=null;g.h.Op=null;g.h.Of=null;g.h.yz=0;g.h.rk=null;g.h.xz=null;g.h.Dn=null;g.h.Gv=-1;g.h.OP=!0;g.h.Mp=!1;g.h.BD=0;g.h.wz=null;var h1a={},z7={};g.h=w7.prototype;g.h.setTimeout=function(a){this.u=a};
g.h.jT=function(a){a=a.target;var b=this.wz;b&&3==g.yj(a)?b.AD():this.lK(a)};
g.h.lK=function(a){try{if(a==this.Of)a:{var b=g.yj(this.Of),c=this.Of.u,d=this.Of.getStatus();if(g.Ic&&!g.yc(10)||g.Af&&!g.xc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Bj(this.Of))break a;this.Mp||4!=b||7==c||(8==c||0>=d?this.j.Xj(3):this.j.Xj(2));D7(this);var e=this.Of.getStatus();this.Gv=e;var f=g.Bj(this.Of);if(this.Tl=200==e){4==b&&A7(this);if(this.xa){for(a=!0;!this.Mp&&this.yz<f.length;){var k=i1a(this,f);if(k==z7){4==b&&(this.Dn=4,v7(15),a=!1);break}else if(k==h1a){this.Dn=4;v7(16);a=!1;
break}else E7(this,k)}4==b&&0==f.length&&(this.Dn=1,v7(17),a=!1);this.Tl=this.Tl&&a;a||(A7(this),B7(this))}else E7(this,f);this.Tl&&!this.Mp&&(4==b?this.j.zz(this):(this.Tl=!1,y7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Dn=3,v7(13)):(this.Dn=0,v7(14)),A7(this),B7(this)}}catch(l){this.Of&&g.Bj(this.Of)}finally{}};
g.h.dZ=function(a){t7((0,g.Ta)(this.cZ,this,a),0)};
g.h.cZ=function(a){this.Mp||(D7(this),E7(this,a),y7(this))};
g.h.UO=function(a){t7((0,g.Ta)(this.bZ,this,a),0)};
g.h.bZ=function(a){this.Mp||(A7(this),this.Tl=a,this.j.zz(this),this.j.Xj(4))};
g.h.cancel=function(){this.Mp=!0;A7(this)};
g.h.iT=function(){this.Ds=null;var a=Date.now();0<=a-this.CD?(2!=this.Cs&&this.j.Xj(3),A7(this),this.Dn=2,v7(18),B7(this)):l1a(this,this.CD-a)};
g.h.getLastError=function(){return this.Dn};g.h=o1a.prototype;g.h.ED=null;g.h.Wg=null;g.h.YB=!1;g.h.cQ=null;g.h.kA=null;g.h.kG=null;g.h.FD=null;g.h.Di=null;g.h.Ul=-1;g.h.Hv=null;g.h.gw=null;g.h.connect=function(a){this.FD=a;a=G7(this.j,null,this.FD);v7(3);this.cQ=Date.now();var b=this.j.N;null!=b?(this.Hv=b[0],(this.gw=b[1])?(this.Di=1,p1a(this)):(this.Di=2,I7(this))):(n6(a,"MODE","init"),this.Wg=new w7(this),this.Wg.Np=this.ED,x7(this.Wg,a,!1,null,!0),this.Di=0)};
g.h.RT=function(a){if(a)this.Di=2,I7(this);else{v7(4);var b=this.j;b.Ik=b.On.Ul;P7(b,9)}a&&this.Xj(2)};
g.h.DD=function(a){return this.j.DD(a)};
g.h.abort=function(){this.Wg&&(this.Wg.cancel(),this.Wg=null);this.Ul=-1};
g.h.cf=function(){return!1};
g.h.mK=function(a,b){this.Ul=a.Gv;if(0==this.Di)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.Ik=this.Ul;P7(a,2);return}this.Hv=c[0];this.gw=c[1]}else a=this.j,a.Ik=this.Ul,P7(a,2);else if(2==this.Di)if(this.YB)v7(7),this.kG=Date.now();else if("11111"==b){if(v7(6),this.YB=!0,this.kA=Date.now(),a=this.kA-this.cQ,!g.Ic||g.yc(10)||500>a)this.Ul=200,this.Wg.cancel(),v7(12),H7(this.j,this,!0)}else v7(8),this.kA=this.kG=Date.now(),this.YB=!1};
g.h.zz=function(){this.Ul=this.Wg.Gv;if(this.Wg.Tl)0==this.Di?this.gw?(this.Di=1,p1a(this)):(this.Di=2,I7(this)):2==this.Di&&((!g.Ic||g.yc(10)?!this.YB:200>this.kG-this.kA)?(v7(11),H7(this.j,this,!1)):(v7(12),H7(this.j,this,!0)));else{0==this.Di?v7(9):2==this.Di&&v7(10);var a=this.j;this.Wg.getLastError();a.Ik=this.Ul;P7(a,2)}};
g.h.Iv=function(){return this.j.Iv()};
g.h.isActive=function(){return this.j.isActive()};
g.h.Xj=function(a){this.j.Xj(a)};g.h=J7.prototype;g.h.Hk=null;g.h.Jv=null;g.h.hh=null;g.h.Qe=null;g.h.GD=null;g.h.Az=null;g.h.nK=null;g.h.Bz=null;g.h.Kv=0;g.h.lT=0;g.h.Yf=null;g.h.Fn=null;g.h.Vl=null;g.h.Qp=null;g.h.On=null;g.h.FC=null;g.h.Gs=-1;g.h.oK=-1;g.h.Ik=-1;g.h.Fs=0;g.h.Es=0;g.h.Pp=8;g.Wa(r1a,g.wf);g.Wa(s1a,g.wf);g.h=J7.prototype;g.h.connect=function(a,b,c,d,e){v7(0);this.GD=b;this.Jv=c||{};d&&void 0!==e&&(this.Jv.OSID=d,this.Jv.OAID=e);this.K?(t7((0,g.Ta)(this.GL,this,a),100),t1a(this)):this.GL(a)};
g.h.disconnect=function(){u1a(this);if(3==this.j){var a=this.Kv++,b=this.Az.clone();g.Ck(b,"SID",this.C);g.Ck(b,"RID",a);g.Ck(b,"TYPE","terminate");N7(this,b);a=new w7(this,this.C,a);a.Cs=2;a.Cn=m6(b.clone());e_a(new Image,a.Cn.toString());a.Bs=Date.now();y7(a)}C1a(this)};
g.h.GL=function(a){this.On=new o1a(this);this.On.ED=this.Hk;this.On.u=this.D;this.On.connect(a)};
g.h.cf=function(){return 0==this.j};
g.h.getState=function(){return this.j};
g.h.qK=function(a){this.Fn=null;y1a(this,a)};
g.h.pK=function(){this.Vl=null;this.Qe=new w7(this,this.C,"rpc",this.J);this.Qe.Np=this.Hk;this.Qe.BD=0;var a=this.nK.clone();g.Ck(a,"RID","rpc");g.Ck(a,"SID",this.C);g.Ck(a,"CI",this.FC?"0":"1");g.Ck(a,"AID",this.Gs);N7(this,a);if(!g.Ic||g.yc(10))g.Ck(a,"TYPE","xmlhttp"),x7(this.Qe,a,!0,this.Bz,!1);else{g.Ck(a,"TYPE","html");var b=this.Qe,c=!!this.Bz;b.Cs=3;b.Cn=m6(a.clone());k1a(b,c)}};
g.h.mK=function(a,b){if(0!=this.j&&(this.Qe==a||this.hh==a))if(this.Ik=a.Gv,this.hh==a&&3==this.j)if(7<this.Pp){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Vl){if(this.Qe)if(this.Qe.Bs+3E3<this.hh.Bs)L7(this),this.Qe.cancel(),this.Qe=null;else break a;O7(this);v7(19)}}else this.oK=a[1],0<this.oK-this.Gs&&37500>a[2]&&this.FC&&0==this.Es&&!this.Qp&&(this.Qp=t7((0,g.Ta)(this.mT,this),6E3));else P7(this,11)}else null!=b&&P7(this,11);else if(this.Qe==
a&&L7(this),!g.nb(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.Gs=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.Bz=c[2],c=c[3],null!=c?this.Pp=c:this.Pp=6,this.j=3,this.Yf&&this.Yf.tK(),this.nK=G7(this,this.Iv()?this.Bz:null,this.GD),z1a(this)):"stop"==c[0]&&P7(this,7):3==this.j&&("stop"==c[0]?P7(this,7):"noop"!=c[0]&&this.Yf&&this.Yf.sK(c),this.Es=0)};
g.h.mT=function(){null!=this.Qp&&(this.Qp=null,this.Qe.cancel(),this.Qe=null,O7(this),v7(20))};
g.h.zz=function(a){if(this.Qe==a){L7(this);this.Qe=null;var b=2}else if(this.hh==a)this.hh=null,b=1;else return;this.Ik=a.Gv;if(0!=this.j)if(a.Tl)if(1==b){b=Date.now()-a.Bs;var c=u7;c.dispatchEvent(new r1a(c,a.Op?a.Op.length:0,b,this.Fs));K7(this);this.B.length=0}else z1a(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Ik)){if(d=1==b)this.hh||this.Fn||1==this.j||2<=this.Fs?d=!1:(this.Fn=t7((0,g.Ta)(this.qK,this,a),A1a(this,this.Fs)),this.Fs++,d=!0);d=!(d||2==b&&O7(this))}if(d)switch(c){case 1:P7(this,
5);break;case 4:P7(this,10);break;case 3:P7(this,6);break;case 7:P7(this,12);break;default:P7(this,2)}}};
g.h.kT=function(a){if(!g.Ub(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.h.m_=function(a){a?v7(2):(v7(1),B1a(this,8))};
g.h.DD=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.vj;a.K=!1;return a};
g.h.isActive=function(){return!!this.Yf&&this.Yf.isActive(this)};
g.h.Xj=function(a){var b=u7;b.dispatchEvent(new s1a(b,a))};
g.h.Iv=function(){return!(!g.Ic||g.yc(10))};
g.h=D1a.prototype;g.h.tK=function(){};
g.h.sK=function(){};
g.h.rK=function(){};
g.h.HD=function(){};
g.h.uK=function(){return{}};
g.h.isActive=function(){return!0};g.h=E1a.prototype;g.h.enqueue=function(a){this.u.push(a)};
g.h.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.h.clear=function(){this.j=[];this.u=[]};
g.h.contains=function(a){return g.Ub(this.j,a)||g.Ub(this.u,a)};
g.h.remove=function(a){var b=this.j;var c=(0,g.uRa)(b,a);0<=c?(g.Zb(b,c),b=!0):b=!1;return b||g.$b(this.u,a)};
g.h.Mi=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};F1a.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.Q("enable_client_streamz_web")){a=g.r(a);for(var c=a.next();!c.done;c=a.next())c=g.oca(c.value),c={serializedIncrementBatch:g.Bc(g.We(c,H_a))},g.xs("streamzIncremented",c,{SH:b})}};var Q7;g.v(R7,g.wf);g.v(S7,g.wf);g.Wa(T7,g.G);g.h=T7.prototype;g.h.VY=function(){this.hg=Math.min(3E5,2*this.hg);this.B();this.u&&this.start()};
g.h.start=function(){var a=this.hg+15E3*Math.random();g.rp(this.j,a);this.u=Date.now()+a};
g.h.stop=function(){this.j.stop();this.u=0};
g.h.isActive=function(){return this.j.isActive()};
g.h.reset=function(){this.j.stop();this.hg=5E3};g.Wa(U7,D1a);g.h=U7.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.Mf=function(a){return this.B.Mf(a)};
g.h.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.h.dispose=function(){this.Z||(this.Z=!0,g.rf(this.B),this.disconnect(),g.rf(this.u),this.u=null,this.ma=function(){return""})};
g.h.isDisposed=function(){return this.Z};
g.h.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.X="";this.u.stop();this.J=a||null;this.D=b||0;a=this.ra+"/test";b=this.ra+"/bind";var d=new J7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.xa),e=this.j;e&&(e.Yf=null);d.Yf=this;this.j=d;V7(this);if(this.j){d=g.O("ID_TOKEN");var f=this.j.Hk||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Hk=f}e?(3!=e.getState()&&0==w1a(e)||e.getState(),this.j.connect(a,b,this.K,e.C,e.Gs)):c?this.j.connect(a,
b,this.K,c.sessionId,c.arrayId):this.j.connect(a,b,this.K)}};
g.h.disconnect=function(a){this.N=a||0;this.u.stop();V7(this);this.j&&(3==this.j.getState()&&y1a(this.j),this.j.disconnect());this.N=0};
g.h.sendMessage=function(a,b){a={_sc:a};b&&g.cg(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Gt()&&(V7(this),v1a(this.j,a))};
g.h.tK=function(){this.u.reset();this.J=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)v1a(this.j,a[b])}this.ea("handlerOpened")};
g.h.rK=function(a){var b=2==a&&401==this.j.Ik;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.h.HD=function(a,b){if(!this.u.isActive())this.ea("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}this.va.j.wJ("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ha.j.hD("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Ia.j.hD("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.h.uK=function(){var a={v:2};this.X&&(a.gsessionid=this.X);0!=this.D&&(a.ui=""+this.D);0!=this.N&&(a.ui=""+this.N);this.J&&g.cg(a,this.J);return a};
g.h.sK=function(a){"S"==a[0]?this.X=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.ea("handlerMessage",new G1a(a[0],a[1]))};
g.h.Gt=function(){return!!this.j&&3==this.j.getState()};
g.h.hn=function(a){(this.K.loungeIdToken=a)||this.u.stop();if(this.Da&&this.j){var b=this.j.Hk||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Hk=b}};
g.h.qo=function(){return this.K.id};
g.h.Co=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.h.vr=function(){var a=this.u;g.sp(a.j);a.start()};
g.h.QZ=function(){this.u.isActive();0==w1a(this.j)&&this.connect(this.J,this.D)};W7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
W7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
W7.prototype.D=function(a){a(Error("request timed out"))};g.v(Z7,g.tg);g.h=Z7.prototype;g.h.connect=function(a,b,c){this.Lc.connect(a,b,c)};
g.h.disconnect=function(a){this.Lc.disconnect(a)};
g.h.vr=function(){this.Lc.vr()};
g.h.qo=function(){return this.Lc.qo()};
g.h.Co=function(){return this.Lc.Co()};
g.h.Gt=function(){return this.Lc.Gt()};
g.h.sR=function(){this.dispatchEvent("channelOpened");var a=this.Lc,b=this.j;g.$v("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.FC,sessionId:a.j.C,arrayId:a.j.Gs});g.$v("yt-remote-session-screen-id",b);a=z6();b=B6();g.Ub(a,b)||a.push(b);Z_a(a);C6()};
g.h.qR=function(){this.dispatchEvent("channelClosed")};
g.h.rR=function(a){this.dispatchEvent(new R7(a))};
g.h.onError=function(a){this.dispatchEvent(new S7(a?1:0))};
g.h.sendMessage=function(a,b){this.Lc.sendMessage(a,b)};
g.h.hn=function(a){this.Lc.hn(a)};
g.h.dispose=function(){this.Lc.dispose()};g.h=H1a.prototype;
g.h.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.J&&(this.B.stop(),this.N=a,this.K=b,$7(this),(a=g.O("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.WV&&(this.u.mdxVersion=""+this.j.WV),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.K?this.u.ui=""+this.K:delete this.u.ui,
Object.assign(this.u,this.N),this.channel=new s7(this.pathPrefix,{sV:"gsessionid",ZV:this.C,aW:this.u}),this.channel.open(),this.J=2,I1a(this))};
g.h.disconnect=function(a){this.X=void 0===a?0:a;this.B.stop();$7(this);this.channel&&(0!==this.X?this.u.ui=""+this.X:delete this.u.ui,this.channel.close());this.X=0};
g.h.Co=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.h.vr=function(){var a=this.B;g.sp(a.j);a.start()};
g.h.sendMessage=function(a,b){this.channel&&($7(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.h.hn=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.h.qo=function(){return this.j?this.j.id:""};
g.h.ea=function(a){return this.D.ea.apply(this.D,[a].concat(g.u(g.Ca.apply(1,arguments))))};
g.h.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.h.Mf=function(a){return this.D.Mf(a)};
g.h.dispose=function(){this.Z||(this.Z=!0,g.rf(this.D),this.disconnect(),g.rf(this.B),this.va=function(){return""})};
g.h.isDisposed=function(){return this.Z};g.v(a8,g.tg);g.h=a8.prototype;g.h.connect=function(a,b){this.j.connect(a,b)};
g.h.disconnect=function(a){this.j.disconnect(a)};
g.h.vr=function(){this.j.vr()};
g.h.qo=function(){return this.j.qo()};
g.h.Co=function(){return this.j.Co()};
g.h.Gt=function(){return 3===this.j.J};
g.h.vR=function(){this.dispatchEvent("channelOpened")};
g.h.tR=function(){this.dispatchEvent("channelClosed")};
g.h.uR=function(a){this.dispatchEvent(new R7(a))};
g.h.onError=function(){this.dispatchEvent(new S7(401===this.j.ma?1:0))};
g.h.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.h.hn=function(a){this.j.hn(a)};
g.h.dispose=function(){this.j.dispose()};var Q1a=Date.now(),b8=null,e8=Array(50),d8=-1,f8=!1;g.Wa(g8,g.cv);g8.prototype.Oh=function(){return this.screens};
g8.prototype.contains=function(a){return!!x6(this.screens,a)};
g8.prototype.get=function(a){return a?y6(this.screens,a):null};
g8.prototype.info=function(a){c8(this.J,a)};g.v(h8,g.cv);g.h=h8.prototype;g.h.start=function(){!this.j&&isNaN(this.Rb)&&this.fP()};
g.h.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.Rb)||(g.xr(this.Rb),this.Rb=NaN)};
g.h.qa=function(){this.stop();g.cv.prototype.qa.call(this)};
g.h.fP=function(){this.Rb=NaN;this.j=g.Ar(X7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.Ta)(this.xR,this),onError:(0,g.Ta)(this.wR,this),onTimeout:(0,g.Ta)(this.yR,this)})};
g.h.xR=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.J;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new s6(a),b)};
g.h.wR=function(a){this.j=null;a.status&&404==a.status?this.u>=m3a.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=m3a[this.u],this.Rb=g.rr((0,g.Ta)(this.fP,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.h.yR=function(){this.j=null;this.ea("pairingFailed",Error("Server not responding"))};
var m3a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Wa(j8,g8);g.h=j8.prototype;g.h.start=function(){i8(this)&&this.ea("screenChange");!g.aw("yt-remote-lounge-token-expiration")&&U1a(this);g.xr(this.j);this.j=g.rr((0,g.Ta)(this.start,this),1E4)};
g.h.add=function(a,b){i8(this);R1a(this,a);k8(this,!1);this.ea("screenChange");b(a);a.token||U1a(this)};
g.h.remove=function(a,b){var c=i8(this);T1a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.h.DC=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.h.qa=function(){g.xr(this.j);j8.re.qa.call(this)};
g.h.TU=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&c8(this.J,"Missed "+b+" lounge tokens.")};
g.h.SU=function(a){c8(this.J,"Requesting lounge tokens failed: "+a)};g.v(m8,g.cv);g.h=m8.prototype;g.h.start=function(){var a=parseInt(g.aw("yt-remote-fast-check-period")||"0",10);(this.C=g.Va()-144E5<a?0:a)?p8(this):(this.C=g.Va()+3E5,g.$v("yt-remote-fast-check-period",this.C),this.GH())};
g.h.isEmpty=function(){return g.Vf(this.j)};
g.h.update=function(){l8("Updating availability on schedule.");var a=this.J(),b=g.Hf(this.j,function(c,d){return c&&!!y6(a,d)},this);
o8(this,b)};
g.h.qa=function(){g.xr(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.cv.prototype.qa.call(this)};
g.h.GH=function(){g.xr(this.B);this.B=NaN;this.u&&this.u.abort();var a=W1a(this);if(o6(a)){var b=X7(this.D,"/pairing/get_screen_availability");this.u=Y7(this.D,b,{lounge_token:g.Of(a).join(",")},(0,g.Ta)(this.AY,this,a),(0,g.Ta)(this.zY,this))}else o8(this,{}),p8(this)};
g.h.AY=function(a,b){this.u=null;var c=g.Of(W1a(this));if(g.nc(c,g.Of(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.De("Changing Screen set during request."),this.GH()};
g.h.zY=function(a){this.De("Screen availability failed: "+a);this.u=null;p8(this)};
g.h.De=function(a){c8("OnlineScreenService",a)};g.Wa(q8,g8);g.h=q8.prototype;g.h.start=function(){this.u.start();this.j.start();this.screens.length&&(this.ea("screenChange"),this.j.isEmpty()||this.ea("onlineScreenChange"))};
g.h.add=function(a,b,c){this.u.add(a,b,c)};
g.h.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.h.DC=function(a,b,c,d){this.u.contains(a)?this.u.DC(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c8(this.J,a),d(Error(a)))};
g.h.Oh=function(a){return a?this.screens:g.cc(this.screens,g.En(this.B,function(b){return!this.contains(b)},this))};
g.h.mJ=function(){return g.En(this.Oh(!0),function(a){return!!this.j.j[a.id]},this)};
g.h.nJ=function(a,b,c,d,e,f){var k=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.rf(l);e(r8(k,m),n)});
l.subscribe("pairingFailed",function(m){g.rf(l);f(m)});
l.start();return(0,g.Ta)(l.stop,l)};
g.h.zR=function(a,b,c,d){g.Ar(X7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Ta)(function(e,f){e=new s6(f.screen||{});if(!e.name||$1a(this,e.name)){a:{f=e.name;for(var k=2,l=b(f,k);$1a(this,l);){k++;if(20<k)break a;l=b(f,k)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Ta)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Ta)(function(){d(Error("pairing request timed out."))},this)})};
g.h.qa=function(){g.rf(this.u);g.rf(this.j);q8.re.qa.call(this)};
g.h.cV=function(){b2a(this);this.ea("screenChange");this.j.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Wa(t8,g.cv);g.h=t8.prototype;g.h.getScreen=function(){return this.C};
g.h.Kg=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.h.info=function(a){c8(this.xa,a)};
g.h.oJ=function(){return null};
g.h.XH=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Ta)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Ta)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.qa=function(){this.XH("");t8.re.qa.call(this)};g.v(w8,t8);g.h=w8.prototype;g.h.WH=function(a){if(this.u){if(this.u==a)return;v8(this,"Overriding cast session with new session object");k2a(this);this.ra=!1;this.X="unknown";this.u.removeUpdateListener(this.ma);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.va)}this.u=a;this.u.addUpdateListener(this.ma);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.va);g2a(this,"getMdxSessionStatus")};
g.h.Qt=function(a){this.info("launchWithParams no-op for Cast: "+g.Si(a))};
g.h.stop=function(){this.u?this.u.stop((0,g.Ta)(function(){this.Kg()},this),(0,g.Ta)(function(){this.Kg(Error("Failed to stop receiver app."))},this)):this.Kg(Error("Stopping cast device without session."))};
g.h.XH=function(){};
g.h.qa=function(){this.info("disposeInternal");k2a(this);this.u&&(this.u.removeUpdateListener(this.ma),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.va));this.u=null;t8.prototype.qa.call(this)};
g.h.nZ=function(a,b){if(!this.isDisposed())if(b)if(b=p6(b),g.Pa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Si(b)),a){case "mdxSessionStatus":e2a(this,b);break;case "loungeToken":h2a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.h.zM=function(a,b,c,d){g.xr(this.N);this.N=0;Z1a(this.B,this.j.label,a,this.j.friendlyName,(0,g.Ta)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.rr((0,g.Ta)(this.zM,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.oJ=function(){return this.u};
g.h.AR=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Kg())};g.v(z8,t8);g.h=z8.prototype;g.h.WH=function(a){this.u=a;this.u.addUpdateListener(this.Da)};
g.h.Qt=function(a){this.Ha=a;this.Z()};
g.h.stop=function(){r2a(this);this.u?this.u.stop((0,g.Ta)(this.Kg,this,null),(0,g.Ta)(this.Kg,this,"Failed to stop DIAL device.")):this.Kg()};
g.h.qa=function(){r2a(this);this.u&&this.u.removeUpdateListener(this.Da);this.u=null;t8.prototype.qa.call(this)};
g.h.BR=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.D(),this.D=function(){},this.Kg())};g.v(D8,t8);D8.prototype.stop=function(){this.Kg()};
D8.prototype.WH=function(){};
D8.prototype.Qt=function(){g.xr(this.u);this.u=NaN;var a=y6(this.B.Oh(),this.j.label);a?u8(this,a):this.Kg(Error("No such screen"))};
D8.prototype.qa=function(){g.xr(this.u);this.u=NaN;t8.prototype.qa.call(this)};g.v(E8,g.cv);g.h=E8.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.X||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.J?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Ta)(this.lY,this);c=new chrome.cast.ApiConfig(c,(0,g.Ta)(this.QO,this),e,d,a);c.customDialLaunchCallback=(0,g.Ta)(this.fX,this);
chrome.cast.initialize(c,(0,g.Ta)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),N1a(),this.u.subscribe("onlineScreenChange",(0,g.Ta)(this.pJ,this)),this.B=u2a(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ta)(function(f){this.De("Failed to set initial custom receivers: "+g.Si(f))},this)),this.ea("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Ta)(function(f){this.De("Failed to initialize API: "+g.Si(f));
b(!1)},this))};
g.h.UZ=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.j.j.friendlyName),H8(this,null)}if(a&&b){if(!this.j){c=y6(this.u.Oh(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=s2a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ta)(function(d){this.De("Failed to set initial custom receivers: "+g.Si(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.u,a),!0)}this.j.XH(b)}else F8("setConnectedScreenStatus: no screen.")};
g.h.VZ=function(a){this.isDisposed()?this.De("Setting connection data on disposed cast v2"):this.j?this.j.Qt(a):this.De("Setting connection data without a session")};
g.h.DR=function(){this.isDisposed()?this.De("Stopping session on disposed cast v2"):this.j?(this.j.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.Ta)(this.QO,this),(0,g.Ta)(this.DY,this))};
g.h.qa=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Ta)(this.pJ,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=K1a,b=g.Ka("yt.mdx.remote.debug.handlers_");g.$b(b||[],a);g.rf(this.j);g.cv.prototype.qa.call(this)};
g.h.De=function(a){c8("Controller",a)};
g.h.SO=function(a,b){this.j==a&&(b||H8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.h.iY=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.ea("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.u,a,this.config_));break;default:this.De("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.De("Stopping receiver w/o session: "+a.friendlyName)}else this.De("onReceiverAction_ called without receiver.")};
g.h.fX=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.De("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.De("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return F8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.De('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.u,b,this.C,this.config_))}b=this.j;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=o2a(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.br(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=p2a(b,c)):a=p2a(b,c)):a=C8(b);return a};
g.h.QO=function(a){var b=this;if(!this.isDisposed()&&!this.J){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.u,c,this.config_),!0);else{this.De("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=y6(this.u.Oh(),
d.label);e&&t6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.rf(this.j),this.j=new w8(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Ta)(this.SO,this,this.j)),this.j.subscribe("sessionFailed",function(){return t2a(b,b.j)}),this.j.Qt(null));
this.j.WH(a)}}};
g.h.CR=function(){return this.j?this.j.oJ():null};
g.h.DY=function(a){this.isDisposed()||(this.De("Failed to estabilish a session: "+g.Si(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.h.lY=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.ea("yt-remote-cast2-availability-change",G8(this))}};
g.h.pJ=function(){this.isDisposed()||(this.B=u2a(this),F8("Updating custom receivers: "+g.Si(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ta)(function(){this.De("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.VZ;E8.prototype.setConnectedScreenStatus=E8.prototype.UZ;E8.prototype.stopSession=E8.prototype.DR;E8.prototype.getCastSession=E8.prototype.CR;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.h=S8.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.ul=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.J=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.N=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.h.Jc=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.jk=function(a){this.D=isNaN(a)?0:a};
g.h.getDuration=function(){return this.u?this.D+U8(this):this.D};
g.h.clone=function(){return new S8(Y8(this))};g.v($8,g.cv);g.h=$8.prototype;g.h.getState=function(){return this.B};
g.h.Co=function(){return this.C.getReconnectTimeout()};
g.h.vr=function(){this.C.reconnect()};
g.h.play=function(){b9(this)?(this.j?this.j.play(null,g.Bg,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.play)};
g.h.pause=function(){b9(this)?(this.j?this.j.pause(null,g.Bg,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.pause)};
g.h.seekTo=function(a){if(b9(this)){if(this.j){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Jc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.Bg,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.ea("remotePlayerChange")}else c9(this,g.Ua(this.seekTo,a))};
g.h.stop=function(){if(b9(this)){this.j?this.j.stop(null,g.Bg,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.stop)};
g.h.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Ta)(function(){c8("CP","set receiver volume: "+d)},this),(0,g.Ta)(function(){this.De("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Ta)(function(){c8("CP","set receiver muted: "+b)},this),(0,g.Ta)(function(){this.De("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Ua(this.setVolume,a,b))};
g.h.qJ=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Si(b.style),g.cg(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Ua(this.qJ,a,b))};
g.h.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Ua(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;k=void 0===k?null:k;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);k&&(m.locationInfo=g.Si(k));f9(this,"setPlaylist",m);d||d9(this,l)};
g.h.RB=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Ua(this.RB,a,b))};
g.h.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Ua(this.nextVideo,a,b))};
g.h.Rs=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.Rs)};
g.h.UL=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.UL)};
g.h.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.cv.prototype.dispose.call(this)};
g.h.qa=function(){G2a(this);this.C=null;this.D.clear();Z8(this,null);g.cv.prototype.qa.call(this)};
g.h.YH=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.h.gY=function(a,b){this.ea(a,b)};
g.h.UW=function(a){if(!a)this.Kx(null),Z8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.h.Kx=function(a){c8("CP","Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.N);if(this.j=a)this.j.addUpdateListener(this.N),H2a(this),this.ea("remotePlayerChange")};
g.h.TW=function(a){a?(H2a(this),this.ea("remotePlayerChange")):this.Kx(null)};
g.h.uI=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.XW=function(){var a=D2a();a&&Z8(this,a)};
g.h.De=function(a){c8("CP",a)};g.v(j9,g.cv);g.h=j9.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,k=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);k&&(m.clickTrackingParams=k);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Da&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;V8(this.j,
n);this.D="UNSUPPORTED";c=this.Da?"setInitialState":"setPlaylist";h9("Connecting with "+c+" and params: "+g.Si(m));this.u.connect({method:c,params:g.Si(m)},a,$_a())}else h9("Connecting without params"),this.u.connect({},a,$_a());L2a(this)};
g.h.hn=function(a){this.u.hn(a)};
g.h.dispose=function(){this.isDisposed()||(g.Ja("yt.mdx.remote.remoteClient_",null),this.ea("beforeDispose"),i9(this,3));g.cv.prototype.dispose.call(this)};
g.h.qa=function(){k9(this);m9(this);l9(this);g.xr(this.N);this.N=NaN;g.xr(this.X);this.X=NaN;this.C=null;g.ju(this.Z);this.Z.length=0;this.u.dispose();g.cv.prototype.qa.call(this);this.D=this.K=this.B=this.j=this.u=null};
g.h.iN=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.r(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.h.MU=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Vw())?this.u.Gt()&&isNaN(this.J)&&(a=1):a=2);return a};
g.h.Zs=function(a){h9("Disconnecting with "+a);g.Ja("yt.mdx.remote.remoteClient_",null);k9(this);this.ea("beforeDisconnect",a);1==a&&D6();this.u.disconnect(a);this.dispose()};
g.h.KU=function(){var a=this.j;this.C&&(a=this.j.clone(),X8(a,this.C,a.index));return Y8(a)};
g.h.WZ=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.xr(this.N),this.N=g.rr(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&W8(this.j)==W8(c)&&g.Si(this.j.trackData)==g.Si(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.pc(d,function(e){this.ea(e)},this)};
g.h.yM=function(){var a=this.u.qo(),b=g.Rb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.Vw=function(){return this.u.Co()};
g.h.HU=function(){return this.D||"UNSUPPORTED"};
g.h.IU=function(){return this.K||""};
g.h.ER=function(){!isNaN(this.Vw())&&this.u.vr()};
g.h.TZ=function(a,b){n9(this,a,b);N2a(this)};
g.h.rJ=function(){var a=g.Kr("SID","")||"",b=g.Kr("SAPISID","")||"",c=g.Kr("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Bc(g.gb(a),2);b=g.Bc(g.gb(b),2);c=g.Bc(g.gb(c),2);return g.Bc(g.gb(a+","+b+","+c),2)};
j9.prototype.subscribe=j9.prototype.subscribe;j9.prototype.unsubscribeByKey=j9.prototype.Mf;j9.prototype.getProxyState=j9.prototype.MU;j9.prototype.disconnect=j9.prototype.Zs;j9.prototype.getPlayerContextData=j9.prototype.KU;j9.prototype.setPlayerContextData=j9.prototype.WZ;j9.prototype.getOtherConnectedRemoteId=j9.prototype.yM;j9.prototype.getReconnectTimeout=j9.prototype.Vw;j9.prototype.getAutoplayMode=j9.prototype.HU;j9.prototype.getAutoplayVideoId=j9.prototype.IU;j9.prototype.reconnect=j9.prototype.ER;
j9.prototype.sendMessage=j9.prototype.TZ;j9.prototype.getXsrfToken=j9.prototype.rJ;j9.prototype.isCapabilitySupportedOnConnectedDevices=j9.prototype.iN;g.v(o9,g8);g.h=o9.prototype;g.h.Oh=function(a){return this.Ze.$_gs(a)};
g.h.contains=function(a){return!!this.Ze.$_c(a)};
g.h.get=function(a){return this.Ze.$_g(a)};
g.h.start=function(){this.Ze.$_st()};
g.h.add=function(a,b,c){this.Ze.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Ze.$_r(a,b,c)};
g.h.DC=function(a,b,c,d){this.Ze.$_un(a,b,c,d)};
g.h.qa=function(){for(var a=0,b=this.j.length;a<b;++a)this.Ze.$_ubk(this.j[a]);this.j.length=0;this.Ze=null;g8.prototype.qa.call(this)};
g.h.FR=function(){this.ea("screenChange")};
g.h.OX=function(){this.ea("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.zR;q8.prototype.$_gsppc=q8.prototype.nJ;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.DC;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Oh;q8.prototype.$_gos=q8.prototype.mJ;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.Mf;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.v(I9,g.G);g.h=I9.prototype;g.h.qa=function(){g.G.prototype.qa.call(this);this.j.stop();this.B.stop();this.N.stop();var a=this.dc;a.unsubscribe("proxyStateChange",this.PO,this);a.unsubscribe("remotePlayerChange",this.Px,this);a.unsubscribe("remoteQueueChange",this.EB,this);a.unsubscribe("previousNextChange",this.MO,this);a.unsubscribe("nowAutoplaying",this.GO,this);a.unsubscribe("autoplayDismissed",this.jO,this);this.dc=this.u=null};
g.h.Oj=function(a){var b=g.Ca.apply(1,arguments);if(2!=this.dc.B)if(J9(this)){var c=a;if(!a9(this.dc).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":a9(this.dc).Jc()?this.dc.pause():this.dc.play();break;case "control_play":this.dc.play();break;case "control_pause":this.dc.pause();break;case "control_seek":this.K.AD(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.I.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.h.RW=function(a){this.N.aT(a)};
g.h.G_=function(a){this.Oj("control_subtitles_set_track",g.Vf(a)?null:a)};
g.h.iQ=function(){var a=this.I.getOption("captions","track");g.Vf(a)||K9(this,a)};
g.h.Pb=function(a){this.u.Pb(a,this.I.getVideoData().lengthSeconds)};
g.h.yX=function(){g.Vf(this.C)||i3a(this,this.C);this.D=!1};
g.h.PO=function(a,b){this.B.stop();2===b&&this.bQ()};
g.h.Px=function(){if(J9(this)){this.j.stop();var a=a9(this.dc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.Ff=1;break;case 1082:case 1083:this.u.Ff=0;break;default:this.u.Ff=-1}switch(a.playerState){case 1081:case 1:this.Vb(new g.kH(8));this.aQ();break;case 1085:case 3:this.Vb(new g.kH(9));break;case 1083:case 0:this.Vb(new g.kH(2));this.K.stop();this.Pb(this.I.getVideoData().lengthSeconds);break;case 1084:this.Vb(new g.kH(4));break;case 2:this.Vb(new g.kH(4));this.Pb(W8(a));
break;case -1:this.Vb(new g.kH(64));break;case -1E3:this.Vb(new g.kH(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",WE:2}))}a=a9(this.dc).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,i3a(this,a));a=a9(this.dc);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.X.isActive()||this.IQ()}else h3a(this)};
g.h.MO=function(){this.I.ea("mdxpreviousnextchange")};
g.h.EB=function(){J9(this)||h3a(this)};
g.h.GO=function(a){isNaN(a)||this.I.ea("mdxnowautoplaying",a)};
g.h.jO=function(){this.I.ea("mdxautoplaycanceled")};
g.h.setAudioTrack=function(a){J9(this)&&this.dc.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.h.seekTo=function(a,b){-1===a9(this.dc).playerState?L9(this,a):b&&this.dc.seekTo(a)};
g.h.IQ=function(){var a=this;if(J9(this)){var b=a9(this.dc);this.events.vc(this.Z);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.Z=this.events.T(this.I,"onVolumeChange",function(c){g3a(a,c)})}};
g.h.aQ=function(){this.j.stop();if(!this.dc.isDisposed()){var a=a9(this.dc);a.Jc()&&this.Vb(new g.kH(8));this.Pb(W8(a));this.j.start()}};
g.h.bQ=function(){this.B.stop();this.j.stop();var a=this.dc.Co();2==this.dc.B&&!isNaN(a)&&this.B.start()};
g.h.Vb=function(a){this.B.stop();var b=this.J;if(!g.pH(b,a)){var c=g.V(a,2);c!==g.V(this.J,2)&&this.I.Eu(c);this.J=a;k3a(this.u,b,a)}};g.v(M9,g.W);M9.prototype.jd=function(){this.j.show()};
M9.prototype.Db=function(){this.j.hide()};
M9.prototype.u=function(){q6("mdx-privacy-popup-cancel");this.Db()};
M9.prototype.B=function(){q6("mdx-privacy-popup-confirm");this.Db()};g.v(N9,g.W);N9.prototype.onStateChange=function(a){j3a(this,a.state)};g.v(O9,g.rO);O9.prototype.D=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.kp=g.qc(a,this.j,this),g.sO(this,g.Nl(a,this.j)),a=this.I.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.Ci(a),this.enable(!0)):this.enable(!1)};
O9.prototype.j=function(a){return a.key};
O9.prototype.Dj=function(a){return"cast-selector-receiver"===a?"Cast...":this.kp[a].name};
O9.prototype.Nf=function(a){g.rO.prototype.Nf.call(this,a);this.I.setOption("remote","currentReceiver",this.kp[a]);this.rb.Db()};g.v(P9,g.jL);g.h=P9.prototype;
g.h.create=function(){var a=this.player.V(),b=g.qC(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.S("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.S("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.S("enable_cast_short_lived_lounge_token")};b3a(b,a);this.subscriptions.push(g.Cu("yt-remote-before-disconnect",this.PW,this));this.subscriptions.push(g.Cu("yt-remote-connection-change",this.mY,this));this.subscriptions.push(g.Cu("yt-remote-receiver-availability-change",this.OO,
this));this.subscriptions.push(g.Cu("yt-remote-auto-connect",this.kY,this));this.subscriptions.push(g.Cu("yt-remote-receiver-resumed",this.jY,this));this.subscriptions.push(g.Cu("mdx-privacy-popup-confirm",this.zZ,this));this.subscriptions.push(g.Cu("mdx-privacy-popup-cancel",this.yZ,this));this.OO()};
g.h.load=function(){this.player.cancelPlayback();g.jL.prototype.load.call(this);this.Fi=new I9(this,this.player,this.dc);var a=(a=f3a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Pb(a);k3a(this,this.Md,this.Md);this.player.Il(6)};
g.h.unload=function(){this.player.ea("mdxautoplaycanceled");this.Rn=this.Al;g.sf(this.Fi,this.dc);this.dc=this.Fi=null;g.jL.prototype.unload.call(this);this.player.Il(5);Q9(this)};
g.h.qa=function(){g.Du(this.subscriptions);g.jL.prototype.qa.call(this)};
g.h.Bl=function(a){var b=g.Ca.apply(1,arguments);this.loaded&&this.Fi.Oj.apply(this.Fi,[a].concat(g.u(b)))};
g.h.getAdState=function(){return this.Ff};
g.h.ul=function(){return this.dc?a9(this.dc).ul:!1};
g.h.hasNext=function(){return this.dc?a9(this.dc).hasNext:!1};
g.h.Pb=function(a,b){this.wN=a||0;this.player.ea("progresssync",a,b);this.player.Na("onVideoProgress",a||0)};
g.h.getCurrentTime=function(){return this.wN};
g.h.getProgressState=function(){var a=a9(this.dc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().S("web_player_mdx_allow_seeking_change_killswitch")?this.player.rf():!a.isAdPlaying()&&this.player.rf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+U8(a):a.B,isAtLiveHead:1>=(a.u?a.j+U8(a):a.j)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.u?a.j+U8(a):a.j,seekableStart:0<
a.C?a.C+U8(a):a.C}};
g.h.nextVideo=function(){this.dc&&this.dc.nextVideo()};
g.h.RB=function(){this.dc&&this.dc.RB()};
g.h.PW=function(a){1===a&&(this.rH=this.dc?a9(this.dc):null)};
g.h.mY=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Rn;this.loaded&&this.unload();this.dc=a;this.rH=null;b.key!==this.Al.key&&(this.Rn=b,this.load())}else g.rf(this.dc),this.dc=null,this.loaded&&(this.unload(),(a=this.rH)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.OO=function(){var a=[this.Al],b=a.concat,c=c3a();O8()&&g.aw("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.kp=b.call(a,c);a=A9()||this.Al;R9(this,a);this.player.Na("onMdxReceiversChange")};
g.h.kY=function(){var a=A9();R9(this,a)};
g.h.jY=function(){this.Rn=A9()};
g.h.zZ=function(){this.Xx=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.h.yZ=function(){this.Xx=!1;Q9(this);R9(this,this.Al);this.Rn=this.Al;H9=!1;B9=null;this.player.playVideo()};
g.h.xf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.kp;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Rn:this.Al;case "quickCast":return 2===this.kp.length&&"cast-selector-receiver"===this.kp[1].key?(b&&Q8(),!0):!1}};
g.h.uI=function(){this.dc.uI()};
g.h.gi=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.iL("remote",P9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:02:40 Apr 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:15:36 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 132.747
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.056
  cdx.remote: 0.052
  esindex: 0.011
  LoadShardBlock: 77.68 (3)
  PetaboxLoader3.datanode: 107.672 (4)
  load_resource: 92.363
  PetaboxLoader3.resolve: 47.843
*/