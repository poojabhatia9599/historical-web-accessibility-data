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

(function(g){var window=this;var hra=function(a,b){var c=[];g.Cf(b,function(a){var b;try{b=g.Vi.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.p(b)?g.Ui(b)&&c.push(a):c.push(a)},a);
return c},ira=function(a,b){var c=hra(a,b);
(0,g.H)(c,function(a){g.Vi.prototype.remove.call(this,a)},a)},p9=function(a){return a.H?a.F+((0,g.G)()-a.A)/1E3:a.F},jra=function(){var a=g.Wi;
ira(a,a.g.yd(!0))},q9=function(a){g.Tz.call(this,"ScreenServiceProxy");
this.Lc=a;this.o=[];this.o.push(this.Lc.$_s("screenChange",(0,g.z)(this.GJ,this)));this.o.push(this.Lc.$_s("onlineScreenChange",(0,g.z)(this.pG,this)))},r9=function(a){g.Pz("cloudview",a)},s9=function(a){r9("setApiReady_ "+a);
g.ka("yt.mdx.remote.cloudview.apiReady_",a,void 0)},t9=function(){return g.u("yt.mdx.remote.cloudview.instance_")},u9=function(a){g.Ai[a]&&(a=g.Ai[a],(0,g.H)(a,function(a){g.yi[a]&&delete g.yi[a]}),a.length=0)},v9=function(){return g.u("yt.mdx.remote.connection_")},w9=function(a){g.ka("yt.mdx.remote.connectData_",a,void 0)},x9=function(a){g.ka("yt.mdx.remote.currentScreenId_",a,void 0)},y9=function(){return g.u("yt.mdx.remote.currentScreenId_")},A9=function(){if(!z9){var a=g.u("yt.mdx.remote.screenService_");
z9=a?new q9(a):null}return z9},B9=function(a){g.ka("yt.mdx.remote.cloudview.initializing_",a,void 0)},C9=function(){return!!g.u("yt.mdx.remote.cloudview.apiReady_")},D9=function(a){r9("setCastInstalled_ "+a);
g.Yi("yt-remote-cast-installed",a)},E9=function(a){g.Pz("cloudview",a)},kra=function(a,b){t9().init(a,b)},F9=function(){return!!g.Zi("yt-remote-cast-installed")},H9=function(){r9("dispose");
var a=t9();a&&a.dispose();g.ka("yt.mdx.remote.cloudview.instance_",null,void 0);s9(!1);g.Ci(G9);G9.length=0},lra=function(){var a=window.document.createElement("a");
g.te(a,"https://web.archive.org/web/20170201000354/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Oa(a)},mra=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://web.archive.org/web/20170201000354/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},nra=function(a){var b=g.wi();
if(b)if(b.clear(a),a)u9(a);else for(var c in g.Ai)u9(c)},I9=function(a,b){g.zi[a]=!0;
var c=g.wi();c&&c.publish.apply(c,arguments);g.zi[a]=!1},ora=function(a){return a?a.dataset?a.dataset[g.ah("loaded")]:a.getAttribute("data-loaded"):null},J9=function(){return g.u("yt.mdx.remote.channelParams_")||{}},L9=function(a){var b=v9();
w9(null);a||x9("");g.ka("yt.mdx.remote.connection_",a,void 0);K9&&((0,g.H)(K9,function(b){b(a)}),K9.length=0);
b&&!a?I9("yt-remote-connection-change",!1):!b&&a&&I9("yt-remote-connection-change",!0)},pra=function(){return g.u("yt.mdx.remote.connectData_")},M9=function(){var a=y9();
if(!a)return null;var b=A9().Bd();return g.fi(b,a)},qra=function(a,b){D9(!0);
B9(!1);kra(a,function(a){a?(s9(!0),g.Ei("yt-remote-cast2-api-ready")):(E9("Failed to initialize cast API."),D9(!1),g.$i("yt-remote-cast-available"),g.$i("yt-remote-cast-receiver"),H9());b(a)})},rra=function(){return F9()?t9()?t9().getCastSession():(E9("getCastSelector: Cast is not initialized."),null):(E9("getCastSelector: Cast API is not installed!"),null)},sra=function(){if(g.fqa){var a=2,b=g.Ez(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.Jz("//web.archive.org/web/20170201000354/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.Gz,c)}},tra=function(){var a=lra(),b=window.document.getElementById(a),c=b&&ora(b);
c||b&&!c||(b=mra(a,function(){ora(b)||(g.bh(b,"loaded","true"),g.Ei(a),g.ki(g.A(nra,a),0))}))},ura=function(a){return(0,g.R)(a,function(a){return{key:a.id,
name:a.name}})},O9=function(a,b){y9();
M9()&&M9();x9(a.id);var c=new g.dC(N9,a,J9());c.connect(b,pra());c.subscribe("beforeDisconnect",function(a){I9("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){v9()&&(v9(),L9(null))});
L9(c)},P9=function(){var a=g.cj();
if(!a)return null;var b=A9().Bd();return g.fi(b,a)},Q9=function(a){g.Pz("remote",a)},R9=function(){var a=v9();
return!!a&&3!=a.getProxyState()},S9=function(){C9()?t9().stopSession():E9("stopSession called before API ready.");
var a=v9();a&&(a.disconnect(1),L9(null))},vra=function(){var a;
a=A9().Lc.$_gos();var b=M9();b&&v9()&&(g.ei(a,b)||a.push(b));return ura(a)},U9=function(a,b){g.Jn.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.TB;this.A=this.o=null;this.H=(0,g.z)(this.IE,this);this.F=(0,g.z)(this.Li,this);this.G=(0,g.z)(this.HE,this);this.J=(0,g.z)(this.RE,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.pp,this),wra(this))):c=3;0!=c&&(b?this.pp(c):g.ki((0,g.z)(function(){this.pp(c)},this),0));
var d=rra();d&&T9(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},V9=function(a){return new g.YB(a.B.getPlayerContextData())},xra=function(a,b,c,d,e){var f=V9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.bC(f,b,d);g.p(c)&&(g.$B(f,c),l.currentTime=c);g.p(k)&&(l.listId=k);W9(a,"setPlaylist",l);e||X9(a,f)},wra=function(a){(0,g.H)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.A(this.JG,a),this))},a)},yra=function(a){(0,g.H)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},Y9=function(a,b){50>a.C.yc()&&g.VB(a.C,b)},Z9=function(a,b,c){var d=V9(a);
g.$B(d,c);-1E3!=d.g&&(d.g=b);X9(a,d)},W9=function(a,b,c){a.B.sendMessage(b,c)},X9=function(a,b){yra(a);
a.B.setPlayerContextData(g.cC(b));wra(a)},T9=function(a,b){a.A&&(a.A.removeUpdateListener(a.H),a.A.removeMediaListener(a.F),a.Li(null));
a.A=b;a.A&&($9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.H),a.A.addMediaListener(a.F),a.A.media.length&&a.Li(a.A.media[0]))},zra=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=V9(a);b.contentId!=d.videoId&&$9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.$B(d,a.o.getEstimatedTime());X9(a,d)}else $9("No cast media video. Ignoring state update.")},$9=function(a){g.Pz("CP",a)},a$=function(a,b,c){return(0,g.z)(function(a){this.Qb("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.Qb("Retrying "+b+" using MDx browser channel."),W9(this,b,c))},a)},Ara=function(a){var b=!1;
t9()||(a=new g.tA(a),a.subscribe("yt-remote-cast2-availability-change",function(a){g.Yi("yt-remote-cast-available",a);I9("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){r9("onReceiverSelected: "+a.friendlyName);
g.Yi("yt-remote-cast-receiver",a);I9("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){r9("onReceiverResumed: "+a.friendlyName);
g.Yi("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){r9("onSessionChange: "+g.bi(a));
a||g.$i("yt-remote-cast-receiver");I9("yt-remote-cast2-session-change",a)}),g.ka("yt.mdx.remote.cloudview.instance_",a,void 0),b=!0);
r9("cloudview.createSingleton_: "+b);return b},Bra=function(){var a=0<=g.ec.search(/\ (CrMo|Chrome|CriOS)\//);
return g.si||a},b$=function(a,b){C9()?t9().setConnectedScreenStatus(a,b):E9("setConnectedScreenStatus called before ready.")},Cra=function(){r9("clearCurrentReceiver");
g.$i("yt-remote-cast-receiver")},Dra=function(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){sra();a({command:"cast.sender.init"});return}}if(window.chrome)if(sra(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation){var a="",b=g.Cz();55<=b?a="55":50<=b&&(a="50");g.Jz("//web.archive.org/web/20170201000354/https://www.gstatic.com/eureka/clank"+a+g.Hz,g.Gz)}else g.Kz(0);else g.Gz()},Era=function(a){a?(g.Yi("yt-remote-session-app",a.app),g.Yi("yt-remote-session-name",a.name)):(g.$i("yt-remote-session-app"),g.$i("yt-remote-session-name"));
g.ka("yt.mdx.remote.channelParams_",a,void 0)},Fra=function(){var a=J9();
if(g.Tb(a)){var a=g.bj(),b=g.Zi("yt-remote-session-name")||"",c=g.Zi("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.ka("yt.mdx.remote.channelParams_",a,void 0)}},Gra=function(){var a=P9();
a?(Q9("Resume connection to: "+g.bi(a)),O9(a,0)):(g.lj(),Cra(),Q9("Skipping connecting because no session screen found."))},Hra=function(a){Q9("remote.onCastSessionChange_: "+g.bi(a));
if(a){var b=M9();b&&b.id==a.id?b$(b.id,"YouTube TV"):(b&&S9(),O9(a,1))}else v9()&&S9()},Ira=function(){var a=vra(),b=M9();
b||(b=P9());return g.Xa(a,function(a){return b&&g.Zh(b,a.key)?!0:!1})},Jra=function(){var a=g.Zi("yt-remote-cast-receiver");
return a?a.friendlyName:null},Kra=function(a,b,c,d){Bra()?Ara(b)&&(B9(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?qra(a,c):(window.__onGCastApiAvailable=function(b,d){b?qra(a,c):(E9("Failed to load cast API: "+d),D9(!1),B9(!1),g.$i("yt-remote-cast-available"),g.$i("yt-remote-cast-receiver"),H9(),c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20170201000354/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):tra():Dra())):r9("Cannot initialize because not running Chrome")},
Lra=function(a){this.B=this.A="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Of(a)||"";b&&(this.B=":"+b);this.A=g.Nf(a)||"";a=g.ec;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Na(a,"10.0")&&(this.o=!1))},c$=function(a,b,c){g.L.call(this);
this.H=a;this.Z=b;b.addEventListener("onVolumeChange",this.Mk,this);b.addEventListener("onCaptionsTrackListChanged",this.vu,this);b.addEventListener("captionschanged",this.ju,this);b.addEventListener("captionssettingschanged",this.Lo,this);b.addEventListener("videoplayerreset",this.Oi,this);b.addEventListener("mdxautoplaycancel",this.tr,this);this.C=!1;this.g=c;c.isDisposed();c.subscribe("proxyStateChange",this.Iu,this);c.subscribe("remotePlayerChange",this.Ni,this);c.subscribe("remoteQueueChange",
this.Oi,this);c.subscribe("autoplayUpNext",this.hu,this);c.subscribe("previousNextChange",this.Fu,this);c.subscribe("nowAutoplaying",this.yu,this);c.subscribe("autoplayDismissed",this.gu,this);this.suggestion=null;this.D=new g.nl(64);this.o=new g.Id(this.Mv,500,this);g.M(this,this.o);this.A=new g.Id(this.Nv,1E3,this);g.M(this,this.A);this.B={};this.G=new g.Id(this.Wv,1E3,this);g.M(this,this.G);this.F=new g.Vr(this.JL,1E3,this);g.M(this,this.F);this.J=g.w;this.Lo();this.Oi();this.Ni()},d$=function(a,
b){var c=a.H,d=a.Z.getVideoData().lengthSeconds;
c.H=b||0;c.g.Qa("progresssync",b,d)},Mra=function(a){d$(a,0);
a.o.stop();e$(a,new g.nl(64))},h$=function(a,b){if(f$(a)&&!a.C){var c=null;
b&&(c={style:a.Z.mj()},g.Zb(c,b));a.g.Gv(g$(a),c);a.B=V9(a.g).o}},i$=function(a,b){var c=a.Z.te();
c?xra(a.g,g$(a),b,c.g,c.listId.toString()):xra(a.g,g$(a),b);e$(a,new g.nl(1))},Nra=function(a,b){if(b){var c=a.Z.Fc("captions","tracklist",{Ft:1});
c&&c.length?(a.Z.af("captions","track",b),a.C=!1):(a.Z.tp("captions"),a.C=!0)}else a.Z.af("captions","track",{})},f$=function(a){return V9(a.g).videoId==g$(a)},g$=function(a){return a.Z.getVideoData().videoId},e$=function(a,b){a.A.stop();
var c=a.D;if(b.o!=c.o||b.g!=c.g){var d=g.T(b,2);if(d!=g.T(a.D,2)){var e=a.Z;(e=g.Ql(e.app,e.playerType||1))&&g.SX(e,d)}a.D=b;Ora(a.H,c,b)}},j$=function(){var a=Ira();
!a&&F9()&&Jra()&&(a={key:"cast-selector-receiver",name:Jra()});return a},Pra=function(){var a=vra();
F9()&&g.Zi("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Qra=function(a){var b={device:"Desktop",
app:"youtube-desktop"};g.Wi&&jra();g.ej();N9||(N9=new Lra,g.nj()&&(N9.g="/api/loungedev"));K9||(K9=g.u("yt.mdx.remote.deferredProxies_")||[],g.ka("yt.mdx.remote.deferredProxies_",K9,void 0));Fra();var c=A9();if(!c){var d=new g.fA(N9);g.ka("yt.mdx.remote.screenService_",d,void 0);c=A9();Kra(a,d,function(a){a?y9()&&b$(y9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){I9("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript))}b&&!g.u("yt.mdx.remote.initialized_")&&
(g.ka("yt.mdx.remote.initialized_",!0,void 0),Q9("Initializing: "+g.mf(b)),k$.push(g.Bi("yt-remote-cast2-availability-change",function(){I9("yt-remote-receiver-availability-change")})),k$.push(g.Bi("yt-remote-cast2-receiver-selected",function(){w9(null);
I9("yt-remote-auto-connect","cast-selector-receiver")})),k$.push(g.Bi("yt-remote-cast2-receiver-resumed",function(){I9("yt-remote-receiver-resumed","cast-selector-receiver")})),k$.push(g.Bi("yt-remote-cast2-session-change",Hra)),k$.push(g.Bi("yt-remote-connection-change",function(a){a?b$(y9(),"YouTube TV"):P9()||(b$(null,null),Cra())})),a=J9(),b.isAuto&&(a.id+="#dial"),g.Hm("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,Q9(" -- with channel params: "+g.mf(a)),Era(a),
c.start(),y9()||Gra())},l$=function(){F9()?t9()?C9()?(r9("Requesting cast selector."),t9().requestSession()):(r9("Wait for cast API to be ready to request the session."),G9.push(g.Bi("yt-remote-cast2-api-ready",l$))):E9("requestCastSelector: Cast is not initialized."):E9("requestCastSelector: Cast API is not installed!")},m$=function(a){g.oz.call(this,a);
this.A={key:g.di(),name:g.Q("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.nl(64);this.H=0},Ora=function(a,b,c){a.F=c;
a.g.Qa("presentingplayerstatechange",new g.oC(c,b))},n$=function(a,b,c){if(b.key!=a.B.key)if(b.key==a.A.key)S9();
else{a.B=b;var d;if(!c){c=a.g.te();d=a.g.getVideoData().videoId;var e;if(c){e=[];for(var f=0;f<c.B;f++)e[f]=c.Pb(f).videoId}else e=[a.g.getVideoData().videoId];d={videoIds:e,listId:a.g.Ze(),videoId:d,index:Math.max(a.g.Bw(),0),currentTime:a.g.getCurrentTime()}}a=d;Q9("Connecting to: "+g.mf(b));"cast-selector-receiver"==b.key?(w9(a||null),b=a||null,C9()?t9().setLaunchParams(b):E9("setLaunchParams called before ready.")):!a&&R9()&&y9()==b.key?I9("yt-remote-connection-change",!0):(S9(),w9(a||null),a=
A9().Bd(),(b=g.fi(a,b.key))&&O9(b,1))}};
g.C(q9,g.Tz);g.h=q9.prototype;g.h.Bd=function(a){return this.Lc.$_gs(a)};
g.h.contains=function(a){return!!this.Lc.$_c(a)};
g.h.get=function(a){return this.Lc.$_g(a)};
g.h.start=function(){this.Lc.$_st()};
g.h.Dl=function(a,b,c){this.Lc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Lc.$_r(a,b,c)};
g.h.sl=function(a,b,c,d){this.Lc.$_un(a,b,c,d)};
g.h.R=function(){for(var a=0,b=this.o.length;a<b;++a)this.Lc.$_ubk(this.o[a]);this.o.length=0;this.Lc=null;q9.M.R.call(this)};
g.h.GJ=function(){this.aa("screenChange")};
g.h.pG=function(){this.aa("onlineScreenChange")};
var z9=null,G9=[],K9=null,N9=null;g.C(U9,g.Jn);g.h=U9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.w,a$(this,"play")):W9(this,"play"),Z9(this,1,g.aC(V9(this))),this.aa("remotePlayerChange")):Y9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.w,a$(this,"pause")):W9(this,"pause"),Z9(this,2,g.aC(V9(this))),this.aa("remotePlayerChange")):Y9(this,this.pause)};
g.h.ow=function(a){if(1==this.g){if(this.o){var b=V9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.gb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.w,a$(this,"seekTo",{newTime:a}))}else W9(this,"seekTo",{newTime:a});Z9(this,3,a);this.aa("remotePlayerChange")}else Y9(this,g.A(this.ow,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.w,a$(this,"stopVideo")):W9(this,"stopVideo");var a=V9(this);a.index=-1;a.videoId="";g.ZB(a);X9(this,a);this.aa("remotePlayerChange")}else Y9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=V9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){$9("set receiver volume: "+d)},this),(0,g.z)(function(){this.Qb("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){$9("set receiver muted: "+b)},this),(0,g.z)(function(){this.Qb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);W9(this,"setVolume",e)}c.muted=b;c.volume=a;X9(this,c)}else Y9(this,g.A(this.setVolume,a,b))};
g.h.Gv=function(a,b){if(1==this.g){var c=V9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.mf(b.style),g.Zb(d,c.o));W9(this,"setSubtitlesTrack",d);X9(this,c)}else Y9(this,g.A(this.Gv,a,b))};
g.h.np=function(a,b){if(1==this.g){W9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Ac.id});var c=V9(this);c.audioTrackId=b.Ac.id;X9(this,c)}else Y9(this,g.A(this.np,a,b))};
g.h.mw=function(a,b){if(1==this.g){if(a&&b){var c=V9(this);g.bC(c,a,b);X9(this,c)}W9(this,"previous")}else Y9(this,g.A(this.mw,a,b))};
g.h.lw=function(a,b){if(1==this.g){if(a&&b){var c=V9(this);g.bC(c,a,b);X9(this,c)}W9(this,"next")}else Y9(this,g.A(this.lw,a,b))};
g.h.Vr=function(){1==this.g?W9(this,"dismissAutoplay"):Y9(this,this.Vr)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.aa("proxyStateChange",a,this.g)}U9.M.dispose.call(this)};
g.h.R=function(){yra(this);this.B=null;this.C.clear();T9(this,null);U9.M.R.call(this)};
g.h.pp=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.aa("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.WB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.JG=function(a,b){this.aa(a,b)};
g.h.IE=function(a){if(!a)this.Li(null),T9(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=V9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)$9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,X9(this,b)}};
g.h.Li=function(a){$9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),zra(this),this.aa("remotePlayerChange")};
g.h.HE=function(a){a?(zra(this),this.aa("remotePlayerChange")):this.Li(null)};
g.h.RE=function(){var a=rra();a&&T9(this,a)};
g.h.Qb=function(a){g.Pz("CP",a)};
var k$=[];g.h=Lra.prototype;g.h.ng=function(a,b,c){var d=this.g;if(g.p(c)?c:this.o)d="https://"+this.A+this.B+this.g;return g.Wf(d+a,b||{})};
g.h.mp=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Db:g.A(this.BJ,c,!0),onError:g.A(this.AJ,d),Vc:g.A(this.CJ,d)};b&&(c.Sb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Ii(a,c)};
g.h.BJ=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.AJ=function(a,b){a(Error("Request error: "+b.status))};
g.h.CJ=function(a){a(Error("request timed out"))};
g.C(c$,g.L);g.h=c$.prototype;
g.h.R=function(){c$.M.R.call(this);this.o.stop();this.A.stop();this.J();this.Z.removeEventListener("onVolumeChange",this.Mk,this);this.Z.removeEventListener("onCaptionsTrackListChanged",this.vu,this);this.Z.removeEventListener("captionschanged",this.ju,this);this.Z.removeEventListener("videoplayerreset",this.Oi,this);this.Z.removeEventListener("captionssettingschanged",this.Lo,this);this.Z.removeEventListener("mdxautoplaycancel",this.tr,this);this.g.Ja("proxyStateChange",this.Iu,this);this.g.Ja("remotePlayerChange",
this.Ni,this);this.g.Ja("remoteQueueChange",this.Oi,this);this.g.Ja("autoplayUpNext",this.hu,this);this.g.Ja("previousNextChange",this.Fu,this);this.g.Ja("nowAutoplaying",this.yu,this);this.g.Ja("autoplayDismissed",this.gu,this);this.g=this.H=null};
g.h.ix=function(a,b){2==this.g.g||(f$(this)?this.fC.apply(this,arguments):this.cC.apply(this,arguments))};
g.h.ju=function(a){this.ix("control_subtitles_set_track",g.Tb(a)?null:a)};
g.h.Lo=function(){var a=this.Z.Fc("captions","track");g.Tb(a)||h$(this,a)};
g.h.cC=function(a,b){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":i$(this,this.Z.getCurrentTime());break;case "control_seek":i$(this,c[0]);break;case "control_subtitles_set_track":h$(this,c[0]);break;case "control_set_audio_track":c=c[0],f$(this)&&this.g.np(g$(this),c)}};
g.h.fC=function(a,b){if(1081!=V9(this.g).g||"control_seek"!=a){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":V9(this.g).gb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.F.Wg(c[0],c[1]);break;case "control_subtitles_set_track":h$(this,c[0]);break;case "control_set_audio_track":c=c[0],f$(this)&&this.g.np(g$(this),c)}}};
g.h.Mk=function(a){if(f$(this)){this.g.Ja("remotePlayerChange",this.Ni,this);var b=Math.round(a.volume);a=!!a.muted;var c=V9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.G.start();this.g.subscribe("remotePlayerChange",this.Ni,this)}};
g.h.vu=function(){g.Tb(this.B)||Nra(this,this.B);this.C=!1};
g.h.Iu=function(a,b){this.A.stop();2==b&&this.Nv()};
g.h.Ni=function(){if(f$(this)){this.o.stop();var a=V9(this.g);switch(a.g){case 1081:e$(this,new g.nl(8));break;case 1:this.Mv();e$(this,new g.nl(8));break;case 1083:case 3:e$(this,new g.nl(9));break;case 0:e$(this,new g.nl(2));this.F.stop();d$(this,this.Z.getVideoData().lengthSeconds);break;case 1082:e$(this,new g.nl(4));break;case 2:e$(this,new g.nl(4));d$(this,g.aC(a));break;case -1:e$(this,new g.nl(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.Q("YTP_MDX_PLAYER_ERROR")},e$(this,
new g.nl(128,a))}var a=V9(this.g).o,b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.B=a,Nra(this,a));a=V9(this.g);-1==a.volume||Math.round(this.Z.getVolume())==a.volume&&this.Z.Gd()==a.muted||this.G.isActive()||this.Wv()}else Mra(this)};
g.h.Fu=function(){this.Z.Qa("mdxpreviousnextchange")};
g.h.Oi=function(){f$(this)||Mra(this)};
g.h.tr=function(){this.g.Vr()};
g.h.hu=function(a){a&&(a=g.Ii("/watch_queue_ajax",{method:"GET",Dc:{action_get_watch_queue_item:1,video_id:a},Db:(0,g.z)(this.DH,this)}))&&(this.J=(0,g.z)(a.abort,a))};
g.h.DH=function(a,b){var c=new g.Hy({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.Z.Qa("mdxautoplayupnext",c)};
g.h.yu=function(a){(0,window.isNaN)(a)||this.Z.Qa("mdxnowautoplaying",a)};
g.h.gu=function(){this.Z.Qa("mdxautoplaycanceled")};
g.h.JL=function(a,b){-1==V9(this.g).g?i$(this,a):b&&this.g.ow(a)};
g.h.Wv=function(){if(f$(this)){var a=V9(this.g);this.Z.removeEventListener("onVolumeChange",this.Mk,this);a.muted?this.Z.mute():this.Z.uf();this.Z.setVolume(a.volume);this.Z.addEventListener("onVolumeChange",this.Mk,this)}};
g.h.Mv=function(){this.o.stop();if(!this.g.isDisposed()){var a=V9(this.g);a.gb()&&e$(this,new g.nl(8));d$(this,g.aC(a));this.o.start()}};
g.h.Nv=function(){this.A.stop();this.o.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.A.start()};
g.C(m$,g.oz);g.h=m$.prototype;g.h.create=function(){Qra("embedded"==g.V(this.g).g);this.D.push(g.Bi("yt-remote-before-disconnect",this.EE,this));this.D.push(g.Bi("yt-remote-connection-change",this.RG,this));this.D.push(g.Bi("yt-remote-receiver-availability-change",this.Gu,this));this.D.push(g.Bi("yt-remote-auto-connect",this.PG,this));this.D.push(g.Bi("yt-remote-receiver-resumed",this.OG,this));this.Gu()};
g.h.load=function(){this.g.Fm();m$.M.load.call(this);this.C=new c$(this,this.g,this.o);var a;a=(a=pra())?a.currentTime:0;var b=R9()?new U9(v9(),void 0):null;0==a&&b&&(a=g.aC(V9(b)));0!=a&&(this.H=a||0,this.g.Qa("progresssync",a,void 0));Ora(this,this.F,this.F);g.o5(this.g.app,6)};
g.h.unload=function(){this.g.Qa("mdxautoplaycanceled");this.B=this.A;g.Db(this.C,this.o);this.o=this.C=null;m$.M.unload.call(this);g.o5(this.g.app,5)};
g.h.R=function(){g.Ci(this.D);m$.M.R.call(this)};
g.h.oj=function(a,b){this.loaded&&this.C.ix.apply(this.C,arguments)};
g.h.IB=function(){return this.loaded?this.C.suggestion:null};
g.h.Zw=function(){return this.o?V9(this.o).L:!1};
g.h.hasNext=function(){return this.o?V9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.jL=function(){var a=V9(this.o),b=this.g.getVideoData(),c=g.jm(this.g),d=b.clipEnd,b=b.clipStart,e=this.getCurrentTime(),f=a.getDuration(),k;k=a.H?a.B+((0,g.G)()-a.A)/1E3:a.B;var l=1>=p9(a)-this.getCurrentTime(),m=a.J,n=p9(a),a=0<a.C?a.C+((0,g.G)()-a.A)/1E3:a.C;return{allowSeeking:c,clipEnd:d,clipStart:b,current:e,displayedStart:-1,duration:f,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:n,seekableStart:a}};
g.h.kL=function(){this.o&&this.o.lw()};
g.h.lL=function(){this.o&&this.o.mw()};
g.h.EE=function(a){1==a&&(this.J=this.o?V9(this.o):null)};
g.h.RG=function(){var a=R9()?new U9(v9(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Cb(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.getVideoData().videoId&&this.g.Gc(g.aC(a)));this.g.Qa("videodatachange","newdata",this.g.getVideoData(),3)};
g.h.Gu=function(){this.G=[this.A].concat(Pra());var a=j$()||this.A;n$(this,a,!this.loaded);this.g.ya("onMdxReceiversChange")};
g.h.PG=function(){var a=j$();n$(this,a)};
g.h.OG=function(){this.B=j$()};
g.h.iL=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?l$():n$(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&l$(),!0):!1}};
g.h.mL=function(){W9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Ve=function(){return!1};
window._exportCheck==g.xa&&g.ka("ytmod.player.remote",m$,void 0);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:03:54 Feb 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:30:04 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 109.898
  exclusion.robots: 0.114
  exclusion.robots.policy: 0.102
  cdx.remote: 0.076
  esindex: 0.011
  LoadShardBlock: 57.25 (3)
  PetaboxLoader3.datanode: 167.746 (5)
  load_resource: 361.518 (2)
  PetaboxLoader3.resolve: 232.134 (2)
*/