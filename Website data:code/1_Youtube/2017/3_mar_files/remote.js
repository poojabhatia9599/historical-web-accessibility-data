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

(function(g){var window=this;var fua=function(a,b){var c=[];g.Nf(b,function(a){var b;try{b=g.hj.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.p(b)?g.gj(b)&&c.push(a):c.push(a)},a);
return c},gua=function(a,b){var c=fua(a,b);
(0,g.I)(c,function(a){g.hj.prototype.remove.call(this,a)},a)},hua=function(a){return a.H?a.F+((0,g.G)()-a.A)/1E3:a.F},iua=function(){var a=g.ij;
gua(a,a.g.Gd(!0))},v9=function(a){g.Iw.call(this,"ScreenServiceProxy");
this.Qc=a;this.o=[];this.o.push(this.Qc.$_s("screenChange",(0,g.A)(this.bO,this)));this.o.push(this.Qc.$_s("onlineScreenChange",(0,g.A)(this.DK,this)))},w9=function(a){g.Ew("cloudview",a)},jua=function(a){w9("setApiReady_ "+a);
g.u("yt.mdx.remote.cloudview.apiReady_",a,void 0)},x9=function(){return g.x("yt.mdx.remote.cloudview.instance_")},kua=function(a){g.Mi[a]&&(a=g.Mi[a],(0,g.I)(a,function(a){g.Ki[a]&&delete g.Ki[a]}),a.length=0)},y9=function(){return g.x("yt.mdx.remote.connection_")},z9=function(a){g.u("yt.mdx.remote.connectData_",a,void 0)},lua=function(a){g.u("yt.mdx.remote.currentScreenId_",a,void 0)},A9=function(){return g.x("yt.mdx.remote.currentScreenId_")},C9=function(){if(!B9){var a=g.x("yt.mdx.remote.screenService_");
B9=a?new v9(a):null}return B9},D9=function(a){g.u("yt.mdx.remote.cloudview.initializing_",a,void 0)},E9=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},F9=function(a){w9("setCastInstalled_ "+a);
g.kj("yt-remote-cast-installed",a)},G9=function(a){g.Ew("cloudview",a)},mua=function(a,b){x9().init(a,b)},H9=function(){return!!g.lj("yt-remote-cast-installed")},nua=function(){w9("dispose");
var a=x9();a&&a.dispose();g.u("yt.mdx.remote.cloudview.instance_",null,void 0);jua(!1);g.Oi(I9);I9.length=0},oua=function(){var a=window.document.createElement("a");
g.Ae(a,"https://web.archive.org/web/20170301000843/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ta(a)},pua=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://web.archive.org/web/20170301000843/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},qua=function(a){var b=g.Ii();
if(b)if(b.clear(a),a)kua(a);else for(var c in g.Mi)kua(c)},J9=function(){return g.x("yt.mdx.remote.channelParams_")||{}},L9=function(a){var b=y9();
z9(null);a||lua("");g.u("yt.mdx.remote.connection_",a,void 0);K9&&((0,g.I)(K9,function(b){b(a)}),K9.length=0);
b&&!a?g.Ri("yt-remote-connection-change",!1):!b&&a&&g.Ri("yt-remote-connection-change",!0)},rua=function(){return g.x("yt.mdx.remote.connectData_")},M9=function(){var a=A9();
if(!a)return null;var b=C9().Md();return g.mi(b,a)},sua=function(a,b){F9(!0);
D9(!1);mua(a,function(a){a?(jua(!0),g.Qi("yt-remote-cast2-api-ready")):(G9("Failed to initialize cast API."),F9(!1),g.mj("yt-remote-cast-available"),g.mj("yt-remote-cast-receiver"),nua());b(a)})},tua=function(){return H9()?x9()?x9().getCastSession():(G9("getCastSelector: Cast is not initialized."),null):(G9("getCastSelector: Cast API is not installed!"),null)},uua=function(){if(g.Aoa){var a=2,b=g.tw(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.yw("//web.archive.org/web/20170301000843/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.vw,c)}},vua=function(){var a=oua(),b=window.document.getElementById(a),c=b&&g.hh(b,"loaded");
c||b&&!c||(b=pua(a,function(){g.hh(b,"loaded")||(g.ih(b,"loaded","true"),g.Qi(a),g.ui(g.ya(qua,a),0))}))},wua=function(a){return(0,g.R)(a,function(a){return{key:a.id,
name:a.name}})},O9=function(a,b){A9();
M9()&&M9();lua(a.id);var c=new g.Uy(N9,a,J9());c.connect(b,rua());c.subscribe("beforeDisconnect",function(a){g.Ri("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){y9()&&(y9(),L9(null))});
L9(c)},P9=function(){var a=g.pj();
if(!a)return null;var b=C9().Md();return g.mi(b,a)},Q9=function(a){g.Ew("remote",a)},R9=function(){var a=y9();
return!!a&&3!=a.getProxyState()},S9=function(){E9()?x9().stopSession():G9("stopSession called before API ready.");
var a=y9();a&&(a.disconnect(1),L9(null))},xua=function(){var a;
a=C9().Qc.$_gos();var b=M9();b&&y9()&&(g.li(a,b)||a.push(b));return wua(a)},U9=function(a,b){g.dl.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.Jy;this.A=this.o=null;this.H=(0,g.A)(this.NI,this);this.F=(0,g.A)(this.Xj,this);this.G=(0,g.A)(this.MI,this);this.J=(0,g.A)(this.bJ,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Gr,this),yua(this))):c=3;0!=c&&(b?this.Gr(c):g.ui((0,g.A)(function(){this.Gr(c)},this),0));
var d=tua();d&&T9(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},V9=function(a){return new g.Oy(a.B.getPlayerContextData())},zua=function(a,b,c,d,e){var f=V9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.Sy(f,b,d);g.p(c)&&(g.Qy(f,c),l.currentTime=c);g.p(k)&&(l.listId=k);W9(a,"setPlaylist",l);e||X9(a,f)},yua=function(a){(0,g.I)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.ya(this.WK,a),this))},a)},Aua=function(a){(0,g.I)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},Y9=function(a,b){50>a.C.Ac()&&g.Ly(a.C,b)},Z9=function(a,b,c){var d=V9(a);
g.Qy(d,c);-1E3!=d.g&&(d.g=b);X9(a,d)},W9=function(a,b,c){a.B.sendMessage(b,c)},X9=function(a,b){Aua(a);
a.B.setPlayerContextData(g.Ty(b));yua(a)},T9=function(a,b){a.A&&(a.A.removeUpdateListener(a.H),a.A.removeMediaListener(a.F),a.Xj(null));
a.A=b;a.A&&($9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.H),a.A.addMediaListener(a.F),a.A.media.length&&a.Xj(a.A.media[0]))},Bua=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=V9(a);b.contentId!=d.videoId&&$9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.Qy(d,a.o.getEstimatedTime());X9(a,d)}else $9("No cast media video. Ignoring state update.")},$9=function(a){g.Ew("CP",a)},a$=function(a,b,c){return(0,g.A)(function(a){this.Wb("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.Wb("Retrying "+b+" using MDx browser channel."),W9(this,b,c))},a)},Cua=function(a){var b=!1;
x9()||(a=new g.ix(a),a.subscribe("yt-remote-cast2-availability-change",function(a){g.kj("yt-remote-cast-available",a);g.Ri("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){w9("onReceiverSelected: "+a.friendlyName);
g.kj("yt-remote-cast-receiver",a);g.Ri("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){w9("onReceiverResumed: "+a.friendlyName);
g.kj("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){w9("onSessionChange: "+g.ii(a));
a||g.mj("yt-remote-cast-receiver");g.Ri("yt-remote-cast2-session-change",a)}),g.u("yt.mdx.remote.cloudview.instance_",a,void 0),b=!0);
w9("cloudview.createSingleton_: "+b);return b},Dua=function(){var a=0<=g.hc.search(/\ (CrMo|Chrome|CriOS)\//);
return g.Ci||a},b$=function(a,b){E9()?x9().setConnectedScreenStatus(a,b):G9("setConnectedScreenStatus called before ready.")},Eua=function(){w9("clearCurrentReceiver");
g.mj("yt-remote-cast-receiver")},Fua=function(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){uua();a({command:"cast.sender.init"});return}}if(window.chrome)if(uua(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation){var a="",b=g.qw();55<=b?a="55":50<=b&&(a="50");g.yw("//web.archive.org/web/20170301000843/https://www.gstatic.com/eureka/clank"+a+g.ww,g.vw)}else g.zw(0);else g.vw()},Gua=function(a){a?(g.kj("yt-remote-session-app",a.app),g.kj("yt-remote-session-name",a.name)):(g.mj("yt-remote-session-app"),g.mj("yt-remote-session-name"));
g.u("yt.mdx.remote.channelParams_",a,void 0)},Hua=function(){var a=J9();
if(g.Vb(a)){var a=g.oj(),b=g.lj("yt-remote-session-name")||"",c=g.lj("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.u("yt.mdx.remote.channelParams_",a,void 0)}},Iua=function(){var a=P9();
a?(Q9("Resume connection to: "+g.ii(a)),O9(a,0)):(g.yj(),Eua(),Q9("Skipping connecting because no session screen found."))},Jua=function(a){Q9("remote.onCastSessionChange_: "+g.ii(a));
if(a){var b=M9();b&&b.id==a.id?b$(b.id,"YouTube TV"):(b&&S9(),O9(a,1))}else y9()&&S9()},Kua=function(){var a=xua(),b=M9();
b||(b=P9());return g.ab(a,function(a){return b&&g.fi(b,a.key)?!0:!1})},Lua=function(){var a=g.lj("yt-remote-cast-receiver");
return a?a.friendlyName:null},Mua=function(a,b,c,d){Dua()?Cua(b)&&(D9(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?sua(a,c):(window.__onGCastApiAvailable=function(b,d){b?sua(a,c):(G9("Failed to load cast API: "+d),F9(!1),D9(!1),g.mj("yt-remote-cast-available"),g.mj("yt-remote-cast-receiver"),nua(),c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20170301000843/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):vua():Fua())):w9("Cannot initialize because not running Chrome")},
Nua=function(a){this.port=this.A="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Zf(a)||"";b&&(this.port=":"+b);this.A=g.Yf(a)||"";a=g.hc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Sa(a,"10.0")&&(this.o=!1))},c$=function(a,b,c){g.K.call(this);
this.H=a;this.Z=b;b.addEventListener("onVolumeChange",this.Gm,this);b.addEventListener("onCaptionsTrackListChanged",this.kx,this);b.addEventListener("captionschanged",this.Ww,this);b.addEventListener("captionssettingschanged",this.Yq,this);b.addEventListener("videoplayerreset",this.$j,this);b.addEventListener("mdxautoplaycancel",this.Ht,this);this.C=!1;this.g=c;c.isDisposed();c.subscribe("proxyStateChange",this.Bx,this);c.subscribe("remotePlayerChange",this.Zj,this);c.subscribe("remoteQueueChange",
this.$j,this);c.subscribe("autoplayUpNext",this.Uw,this);c.subscribe("previousNextChange",this.yx,this);c.subscribe("nowAutoplaying",this.ox,this);c.subscribe("autoplayDismissed",this.Tw,this);this.suggestion=null;this.D=new g.Pl(64);this.o=new g.Od(this.Ty,500,this);g.L(this,this.o);this.A=new g.Od(this.Uy,1E3,this);g.L(this,this.A);this.B={};this.G=new g.Od(this.lz,1E3,this);g.L(this,this.G);this.F=new g.kw(this.YP,1E3,this);g.L(this,this.F);this.J=g.y;this.Yq();this.$j();this.Zj()},d$=function(a,
b){var c=a.H,d=a.Z.getVideoData().lengthSeconds;
c.H=b||0;c.g.V("progresssync",b,d)},Oua=function(a){d$(a,0);
a.o.stop();e$(a,new g.Pl(64))},h$=function(a,b){if(f$(a)&&!a.C){var c=null;
b&&(c={style:a.Z.Ck()},g.bc(c,b));a.g.My(g$(a),c);a.B=V9(a.g).o}},i$=function(a,b){var c=a.Z.Oe();
c?zua(a.g,g$(a),b,c.Kd(),c.listId.toString()):zua(a.g,g$(a),b);e$(a,new g.Pl(1))},Pua=function(a,b){if(b){var c=a.Z.Sc("captions","tracklist",{Rv:1});
c&&c.length?(a.Z.qe("captions","track",b),a.C=!1):(a.Z.yk("captions"),a.C=!0)}else a.Z.qe("captions","track",{})},f$=function(a){return V9(a.g).videoId==g$(a)},g$=function(a){return a.Z.getVideoData().videoId},e$=function(a,b){a.A.stop();
var c=a.D;if(b.o!=c.o||b.g!=c.g){var d=g.T(b,2);if(d!=g.T(a.D,2)){var e=a.Z;(e=g.qm(e.app,e.playerType||1))&&g.WU(e,d)}a.D=b;Qua(a.H,c,b)}},j$=function(){var a=Kua();
!a&&H9()&&Lua()&&(a={key:"cast-selector-receiver",name:Lua()});return a},Rua=function(){var a=xua();
H9()&&g.lj("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Sua=function(a){var b={device:"Desktop",
app:"youtube-desktop"};g.ij&&iua();g.rj();N9||(N9=new Nua,g.Aj()&&(N9.g="/api/loungedev"));K9||(K9=g.x("yt.mdx.remote.deferredProxies_")||[],g.u("yt.mdx.remote.deferredProxies_",K9,void 0));Hua();var c=C9();if(!c){var d=new g.Vw(N9);g.u("yt.mdx.remote.screenService_",d,void 0);c=C9();Mua(a,d,function(a){a?A9()&&b$(A9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.Ri("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript))}b&&!g.x("yt.mdx.remote.initialized_")&&
(g.u("yt.mdx.remote.initialized_",!0,void 0),Q9("Initializing: "+g.xf(b)),k$.push(g.Ni("yt-remote-cast2-availability-change",function(){g.Ri("yt-remote-receiver-availability-change")})),k$.push(g.Ni("yt-remote-cast2-receiver-selected",function(){z9(null);
g.Ri("yt-remote-auto-connect","cast-selector-receiver")})),k$.push(g.Ni("yt-remote-cast2-receiver-resumed",function(){g.Ri("yt-remote-receiver-resumed","cast-selector-receiver")})),k$.push(g.Ni("yt-remote-cast2-session-change",Jua)),k$.push(g.Ni("yt-remote-connection-change",function(a){a?b$(A9(),"YouTube TV"):P9()||(b$(null,null),Eua())})),a=J9(),b.isAuto&&(a.id+="#dial"),g.Fh("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,Q9(" -- with channel params: "+g.xf(a)),
Gua(a),c.start(),A9()||Iua())},l$=function(){H9()?x9()?E9()?(w9("Requesting cast selector."),x9().requestSession()):(w9("Wait for cast API to be ready to request the session."),I9.push(g.Ni("yt-remote-cast2-api-ready",l$))):G9("requestCastSelector: Cast is not initialized."):G9("requestCastSelector: Cast API is not installed!")},m$=function(a){g.qu.call(this,a);
this.A={key:g.ki(),name:g.Q("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.Pl(64);this.H=0},Qua=function(a,b,c){a.F=c;
a.g.V("presentingplayerstatechange",new g.ez(c,b))},n$=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)S9();
else{a.B=b;var c;c=a.g.getPlaylistId();var d=a.g.getVideoData().videoId;if(c||d){var e,f=a.g.Oe();if(f){e=[];for(var k=0;k<f.getLength();k++)e[k]=f.Ub(k).videoId}else e=[a.g.getVideoData().videoId];c={videoIds:e,listId:c,videoId:d,index:Math.max(a.g.Nz(),0),currentTime:a.g.getCurrentTime()}}else c=null;Q9("Connecting to: "+g.xf(b));"cast-selector-receiver"==b.key?(z9(c||null),c=c||null,E9()?x9().setLaunchParams(c):G9("setLaunchParams called before ready.")):!c&&R9()&&A9()==b.key?g.Ri("yt-remote-connection-change",
!0):(S9(),z9(c||null),c=C9().Md(),(c=g.mi(c,b.key))&&O9(c,1))}};
g.C(v9,g.Iw);g.h=v9.prototype;g.h.Md=function(a){return this.Qc.$_gs(a)};
g.h.contains=function(a){return!!this.Qc.$_c(a)};
g.h.get=function(a){return this.Qc.$_g(a)};
g.h.start=function(){this.Qc.$_st()};
g.h.Bn=function(a,b,c){this.Qc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Qc.$_r(a,b,c)};
g.h.pn=function(a,b,c,d){this.Qc.$_un(a,b,c,d)};
g.h.R=function(){for(var a=0,b=this.o.length;a<b;++a)this.Qc.$_ubk(this.o[a]);this.o.length=0;this.Qc=null;v9.M.R.call(this)};
g.h.bO=function(){this.V("screenChange")};
g.h.DK=function(){this.V("onlineScreenChange")};
var B9=null,I9=[],K9=null,N9=null;g.C(U9,g.dl);g.h=U9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,a$(this,"play")):W9(this,"play"),Z9(this,1,g.Ry(V9(this))),this.V("remotePlayerChange")):Y9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,a$(this,"pause")):W9(this,"pause"),Z9(this,2,g.Ry(V9(this))),this.V("remotePlayerChange")):Y9(this,this.pause)};
g.h.Cz=function(a){if(1==this.g){if(this.o){var b=V9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.ob()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,a$(this,"seekTo",{newTime:a}))}else W9(this,"seekTo",{newTime:a});Z9(this,3,a);this.V("remotePlayerChange")}else Y9(this,g.ya(this.Cz,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,a$(this,"stopVideo")):W9(this,"stopVideo");var a=V9(this);a.index=-1;a.videoId="";g.Py(a);X9(this,a);this.V("remotePlayerChange")}else Y9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=V9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.A)(function(){$9("set receiver volume: "+d)},this),(0,g.A)(function(){this.Wb("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.A)(function(){$9("set receiver muted: "+b)},this),(0,g.A)(function(){this.Wb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);W9(this,"setVolume",e)}c.muted=b;c.volume=a;X9(this,c)}else Y9(this,g.ya(this.setVolume,a,b))};
g.h.My=function(a,b){if(1==this.g){var c=V9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.xf(b.style),g.bc(d,c.o));W9(this,"setSubtitlesTrack",d);X9(this,c)}else Y9(this,g.ya(this.My,a,b))};
g.h.Er=function(a,b){if(1==this.g){W9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Hc.id});var c=V9(this);c.audioTrackId=b.Hc.id;X9(this,c)}else Y9(this,g.ya(this.Er,a,b))};
g.h.Bz=function(a,b){if(1==this.g){if(a&&b){var c=V9(this);g.Sy(c,a,b);X9(this,c)}W9(this,"previous")}else Y9(this,g.ya(this.Bz,a,b))};
g.h.Az=function(a,b){if(1==this.g){if(a&&b){var c=V9(this);g.Sy(c,a,b);X9(this,c)}W9(this,"next")}else Y9(this,g.ya(this.Az,a,b))};
g.h.nu=function(){1==this.g?W9(this,"dismissAutoplay"):Y9(this,this.nu)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.V("proxyStateChange",a,this.g)}U9.M.dispose.call(this)};
g.h.R=function(){Aua(this);this.B=null;this.C.clear();T9(this,null);U9.M.R.call(this)};
g.h.Gr=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.My(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.WK=function(a,b){this.V(a,b)};
g.h.NI=function(a){if(!a)this.Xj(null),T9(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=V9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)$9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,X9(this,b)}};
g.h.Xj=function(a){$9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),Bua(this),this.V("remotePlayerChange")};
g.h.MI=function(a){a?(Bua(this),this.V("remotePlayerChange")):this.Xj(null)};
g.h.bJ=function(){var a=tua();a&&T9(this,a)};
g.h.Wb=function(a){g.Ew("CP",a)};
var k$=[];g.h=Nua.prototype;g.h.ph=function(a,b,c){var d=this.g;if(g.p(c)?c:this.o)d="https://"+this.A+this.port+this.g;return g.gg(d+a,b||{})};
g.h.Dr=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Hb:g.ya(this.XN,c,!0),onError:g.ya(this.WN,d),ad:g.ya(this.YN,d)};b&&(c.Nb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Vi(a,c)};
g.h.XN=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.WN=function(a,b){a(Error("Request error: "+b.status))};
g.h.YN=function(a){a(Error("request timed out"))};
g.C(c$,g.K);g.h=c$.prototype;
g.h.R=function(){c$.M.R.call(this);this.o.stop();this.A.stop();this.J();this.Z.removeEventListener("onVolumeChange",this.Gm,this);this.Z.removeEventListener("onCaptionsTrackListChanged",this.kx,this);this.Z.removeEventListener("captionschanged",this.Ww,this);this.Z.removeEventListener("videoplayerreset",this.$j,this);this.Z.removeEventListener("captionssettingschanged",this.Yq,this);this.Z.removeEventListener("mdxautoplaycancel",this.Ht,this);this.g.unsubscribe("proxyStateChange",this.Bx,this);this.g.unsubscribe("remotePlayerChange",
this.Zj,this);this.g.unsubscribe("remoteQueueChange",this.$j,this);this.g.unsubscribe("autoplayUpNext",this.Uw,this);this.g.unsubscribe("previousNextChange",this.yx,this);this.g.unsubscribe("nowAutoplaying",this.ox,this);this.g.unsubscribe("autoplayDismissed",this.Tw,this);this.g=this.H=null};
g.h.tA=function(a,b){2==this.g.g||(f$(this)?this.CF.apply(this,arguments):this.yF.apply(this,arguments))};
g.h.Ww=function(a){this.tA("control_subtitles_set_track",g.Vb(a)?null:a)};
g.h.Yq=function(){var a=this.Z.Sc("captions","track");g.Vb(a)||h$(this,a)};
g.h.yF=function(a,b){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":i$(this,this.Z.getCurrentTime());break;case "control_seek":i$(this,c[0]);break;case "control_subtitles_set_track":h$(this,c[0]);break;case "control_set_audio_track":c=c[0],f$(this)&&this.g.Er(g$(this),c)}};
g.h.CF=function(a,b){if(1081!=V9(this.g).g||"control_seek"!=a){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":V9(this.g).ob()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.F.ii(c[0],c[1]);break;case "control_subtitles_set_track":h$(this,c[0]);break;case "control_set_audio_track":c=c[0],f$(this)&&this.g.Er(g$(this),c)}}};
g.h.Gm=function(a){if(f$(this)){this.g.unsubscribe("remotePlayerChange",this.Zj,this);var b=Math.round(a.volume);a=!!a.muted;var c=V9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.G.start();this.g.subscribe("remotePlayerChange",this.Zj,this)}};
g.h.kx=function(){g.Vb(this.B)||Pua(this,this.B);this.C=!1};
g.h.Bx=function(a,b){this.A.stop();2==b&&this.Uy()};
g.h.Zj=function(){if(f$(this)){this.o.stop();var a=V9(this.g);switch(a.g){case 1081:e$(this,new g.Pl(8));break;case 1:this.Ty();e$(this,new g.Pl(8));break;case 1083:case 3:e$(this,new g.Pl(9));break;case 0:e$(this,new g.Pl(2));this.F.stop();d$(this,this.Z.getVideoData().lengthSeconds);break;case 1082:e$(this,new g.Pl(4));break;case 2:e$(this,new g.Pl(4));d$(this,g.Ry(a));break;case -1:e$(this,new g.Pl(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.Q("YTP_MDX_PLAYER_ERROR")},e$(this,
new g.Pl(128,a))}var a=V9(this.g).o,b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.B=a,Pua(this,a));a=V9(this.g);-1==a.volume||Math.round(this.Z.getVolume())==a.volume&&this.Z.Td()==a.muted||this.G.isActive()||this.lz()}else Oua(this)};
g.h.yx=function(){this.Z.V("mdxpreviousnextchange")};
g.h.$j=function(){f$(this)||Oua(this)};
g.h.Ht=function(){this.g.nu()};
g.h.Uw=function(a){a&&(a=g.Vi("/watch_queue_ajax",{method:"GET",Dc:{action_get_watch_queue_item:1,video_id:a},Hb:(0,g.A)(this.UL,this)}))&&(this.J=(0,g.A)(a.abort,a))};
g.h.UL=function(a,b){var c=new g.et({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.Z.V("mdxautoplayupnext",c)};
g.h.ox=function(a){(0,window.isNaN)(a)||this.Z.V("mdxnowautoplaying",a)};
g.h.Tw=function(){this.Z.V("mdxautoplaycanceled")};
g.h.YP=function(a,b){-1==V9(this.g).g?i$(this,a):b&&this.g.Cz(a)};
g.h.lz=function(){if(f$(this)){var a=V9(this.g);this.Z.removeEventListener("onVolumeChange",this.Gm,this);a.muted?this.Z.mute():this.Z.fg();this.Z.setVolume(a.volume);this.Z.addEventListener("onVolumeChange",this.Gm,this)}};
g.h.Ty=function(){this.o.stop();if(!this.g.isDisposed()){var a=V9(this.g);a.ob()&&e$(this,new g.Pl(8));d$(this,g.Ry(a));this.o.start()}};
g.h.Uy=function(){this.A.stop();this.o.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.A.start()};
g.C(m$,g.qu);g.h=m$.prototype;g.h.create=function(){Sua("embedded"==g.V(this.g).g);this.D.push(g.Ni("yt-remote-before-disconnect",this.JI,this));this.D.push(g.Ni("yt-remote-connection-change",this.eL,this));this.D.push(g.Ni("yt-remote-receiver-availability-change",this.zx,this));this.D.push(g.Ni("yt-remote-auto-connect",this.cL,this));this.D.push(g.Ni("yt-remote-receiver-resumed",this.bL,this));this.zx()};
g.h.load=function(){this.g.yo();m$.M.load.call(this);this.C=new c$(this,this.g,this.o);var a;a=(a=rua())?a.currentTime:0;var b=R9()?new U9(y9(),void 0):null;0==a&&b&&(a=g.Ry(V9(b)));0!=a&&(this.H=a||0,this.g.V("progresssync",a,void 0));Qua(this,this.F,this.F);g.A2(this.g.app,6)};
g.h.unload=function(){this.g.V("mdxautoplaycanceled");this.B=this.A;g.Hb(this.C,this.o);this.o=this.C=null;m$.M.unload.call(this);g.A2(this.g.app,5)};
g.h.R=function(){g.Oi(this.D);m$.M.R.call(this)};
g.h.Gk=function(a,b){this.loaded&&this.C.tA.apply(this.C,arguments)};
g.h.cF=function(){return this.loaded?this.C.suggestion:null};
g.h.hf=function(){return this.o?V9(this.o).hf:!1};
g.h.hasNext=function(){return this.o?V9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.DP=function(){var a=V9(this.o),b=this.g.getVideoData(),c=this.g.xh(),d=b.clipEnd,b=b.clipStart,e=this.getCurrentTime(),f=a.getDuration(),k;k=a.H?a.B+((0,g.G)()-a.A)/1E3:a.B;var l=1>=hua(a)-this.getCurrentTime(),m=a.J,n=hua(a),a=0<a.C?a.C+((0,g.G)()-a.A)/1E3:a.C;return{allowSeeking:c,clipEnd:d,clipStart:b,current:e,displayedStart:-1,duration:f,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:n,seekableStart:a}};
g.h.EP=function(){this.o&&this.o.Az()};
g.h.FP=function(){this.o&&this.o.Bz()};
g.h.JI=function(a){1==a&&(this.J=this.o?V9(this.o):null)};
g.h.eL=function(){var a=R9()?new U9(y9(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Gb(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.getVideoData().videoId&&this.g.Mc(g.Ry(a)));this.g.V("videodatachange","newdata",this.g.getVideoData(),3)};
g.h.zx=function(){this.G=[this.A].concat(Rua());var a=j$()||this.A;n$(this,a);this.g.wa("onMdxReceiversChange")};
g.h.cL=function(){var a=j$();n$(this,a)};
g.h.bL=function(){this.B=j$()};
g.h.CP=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?l$():n$(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&l$(),!0):!1}};
g.h.GP=function(){W9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.je=function(){return!1};
window._exportCheck==g.Ca&&g.u("ytmod.player.remote",m$,void 0);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:08:43 Mar 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:29:27 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 110.801
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.062
  cdx.remote: 0.056
  esindex: 0.01
  LoadShardBlock: 42.7 (3)
  PetaboxLoader3.datanode: 361.526 (5)
  load_resource: 405.708 (2)
  PetaboxLoader3.resolve: 64.903 (2)
*/