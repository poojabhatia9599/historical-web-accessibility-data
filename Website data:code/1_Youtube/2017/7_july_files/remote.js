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

(function(g){var window=this;var Lwa=function(a,b){var c=[];g.El(b,function(a){try{var b=g.rD.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.qD(b)&&c.push(a):c.push(a)},a);
return c},Mwa=function(a,b){var c=Lwa(a,b);
(0,g.H)(c,function(a){g.rD.prototype.remove.call(this,a)},a)},w8=function(a,b){g.m1.call(this,g.U("YTP_MDX_TITLE"),0,a,b);
this.T=a;this.F={};this.P(a,"onMdxReceiversChange",this.I);this.P(a,"presentingplayerstatechange",this.I);this.I()},Nwa=function(){var a=g.SG;
Mwa(a,a.g.Yd(!0))},x8=function(a){g.uH.call(this,"ScreenServiceProxy");
this.dd=a;this.o=[];this.o.push(this.dd.$_s("screenChange",(0,g.z)(this.UT,this)));this.o.push(this.dd.$_s("onlineScreenChange",(0,g.z)(this.fQ,this)))},y8=function(a){g.hH("cloudview",a)},Owa=function(a){y8("setApiReady_ "+a);
g.sa("yt.mdx.remote.cloudview.apiReady_",a,void 0)},z8=function(){return g.x("yt.mdx.remote.cloudview.instance_")},Pwa=function(a){g.kG[a]&&(a=g.kG[a],(0,g.H)(a,function(a){g.iG[a]&&delete g.iG[a]}),a.length=0)},Qwa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},A8=function(){return g.x("yt.mdx.remote.connection_")},B8=function(a){g.sa("yt.mdx.remote.connectData_",a,void 0)},Rwa=function(a){g.sa("yt.mdx.remote.currentScreenId_",a,void 0)},C8=function(){return g.x("yt.mdx.remote.currentScreenId_")},
E8=function(){if(!D8){var a=g.x("yt.mdx.remote.screenService_");
D8=a?new x8(a):null}return D8},F8=function(a){g.sa("yt.mdx.remote.cloudview.initializing_",a,void 0)},G8=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},H8=function(a){y8("setCastInstalled_ "+a);
g.UG("yt-remote-cast-installed",a)},I8=function(a){g.hH("cloudview",a)},Swa=function(a,b){z8().init(a,b)},J8=function(){return!!g.VG("yt-remote-cast-installed")},Twa=function(){y8("dispose");
var a=z8();a&&a.dispose();g.sa("yt.mdx.remote.cloudview.instance_",null,void 0);Owa(!1);g.mG(K8);K8.length=0},Uwa=function(){var a=window.document.createElement("a");
g.Md(a,"https://web.archive.org/web/20170701000142/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ua(a)},Vwa=function(a,b){var c=g.qe("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.Nd(c,g.ih("https://web.archive.org/web/20170701000142/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},Wwa=function(a){var b=g.hG();
if(b)if(b.clear(a),a)Pwa(a);else for(var c in g.kG)Pwa(c)},L8=function(){var a=Qwa();
a&&a(!1,"No cast extension found")},M8=function(a){return 0<=window.navigator.userAgent.indexOf(a)},N8=function(a,b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},Xwa=function(a,b){var c=new window.XMLHttpRequest;
c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}},O8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},Q8=function(a){var b=A8();
B8(null);a||Rwa("");g.sa("yt.mdx.remote.connection_",a,void 0);P8&&((0,g.H)(P8,function(b){b(a)}),P8.length=0);
b&&!a?g.pG("yt-remote-connection-change",!1):!b&&a&&g.pG("yt-remote-connection-change",!0)},Ywa=function(){return g.x("yt.mdx.remote.connectData_")},R8=function(){var a=C8();
if(!a)return null;var b=E8().ge();return g.tH(b,a)},Zwa=function(a,b){H8(!0);
F8(!1);Swa(a,function(a){a?(Owa(!0),g.nG("yt-remote-cast2-api-ready")):(I8("Failed to initialize cast API."),H8(!1),g.WG("yt-remote-cast-available"),g.WG("yt-remote-cast-receiver"),Twa());b(a)})},$wa=function(){return J8()?z8()?z8().getCastSession():(I8("getCastSelector: Cast is not initialized."),null):(I8("getCastSelector: Cast API is not installed!"),null)},axa=function(){var a=Uwa(),b=window.document.getElementById(a),c=b&&g.xF(b,"loaded");
c||b&&!c||(b=Vwa(a,function(){g.xF(b,"loaded")||(g.yF(b,"loaded","true"),g.nG(a),g.BE(g.Ba(Wwa,a),0))}))},bxa=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},cxa=function(){if(g.Epa){var a=2,b=Qwa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;N8("//web.archive.org/web/20170701000142/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",L8,c)}},S8=function(a){if(a>=g.Gpa.length)L8();
else{var b=g.Gpa[a],c="chrome-extension://"+b+g.Dpa;0<=g.H2.indexOf(b)?Xwa(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,N8(c,L8)):S8(a+1)}):N8(c,function(){S8(a+1)})}},U8=function(a,b){C8();
R8()&&R8();Rwa(a.id);var c=new g.zI(T8,a,O8());c.connect(b,Ywa());c.subscribe("beforeDisconnect",function(a){g.pG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){A8()&&(A8(),Q8(null))});
Q8(c)},V8=function(){var a=g.BH();
if(!a)return null;var b=E8().ge();return g.tH(b,a)},W8=function(a){g.hH("remote",a)},X8=function(){var a=A8();
return!!a&&3!=a.getProxyState()},Y8=function(){G8()?z8().stopSession():I8("stopSession called before API ready.");
var a=A8();a&&(a.disconnect(1),Q8(null))},dxa=function(){var a=E8().dd.$_gos();
var b=R8();b&&A8()&&(g.sH(a,b)||a.push(b));return bxa(a)},$8=function(a,b){g.ZF.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.FB;this.A=this.o=null;this.I=(0,g.z)(this.nO,this);this.F=(0,g.z)(this.pl,this);this.G=(0,g.z)(this.mO,this);this.J=(0,g.z)(this.AO,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.pu,this),exa(this))):c=3;0!=c&&(b?this.pu(c):g.BE((0,g.z)(function(){this.pu(c)},this),0));
var d=$wa();d&&Z8(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},a9=function(a){return new g.oI(a.B.getPlayerContextData())},fxa=function(a,b,c,d,e){var f=a9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.sI(f,b,d);g.t(c)&&(g.qI(f,c),l.currentTime=c);g.t(k)&&(l.listId=k);b9(a,"setPlaylist",l);e||c9(a,f)},exa=function(a){(0,g.H)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.Ba(this.wQ,a),this))},a)},gxa=function(a){(0,g.H)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},d9=function(a,b){50>a.C.Kc()&&g.HB(a.C,b)},e9=function(a,b,c){var d=a9(a);
g.qI(d,c);-1E3!=d.g&&(d.g=b);c9(a,d)},b9=function(a,b,c){a.B.sendMessage(b,c)},c9=function(a,b){gxa(a);
a.B.setPlayerContextData(g.tI(b));exa(a)},Z8=function(a,b){a.A&&(a.A.removeUpdateListener(a.I),a.A.removeMediaListener(a.F),a.pl(null));
a.A=b;a.A&&(f9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.I),a.A.addMediaListener(a.F),a.A.media.length&&a.pl(a.A.media[0]))},hxa=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&f9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.qI(d,a.o.getEstimatedTime());c9(a,d)}else f9("No cast media video. Ignoring state update.")},f9=function(a){g.hH("CP",a)},g9=function(a,b,c){return(0,g.z)(function(a){this.hc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.hc("Retrying "+b+" using MDx browser channel."),b9(this,b,c))},a)},ixa=function(a,b){var c=!1;
z8()||(c=new g.iI(a,b),c.subscribe("yt-remote-cast2-availability-change",function(a){g.UG("yt-remote-cast-available",a);g.pG("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){y8("onReceiverSelected: "+a.friendlyName);
g.UG("yt-remote-cast-receiver",a);g.pG("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){y8("onReceiverResumed: "+a.friendlyName);
g.UG("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){y8("onSessionChange: "+g.pH(a));
a||g.WG("yt-remote-cast-receiver");g.pG("yt-remote-cast2-session-change",a)}),g.sa("yt.mdx.remote.cloudview.instance_",c,void 0),c=!0);
y8("cloudview.createSingleton_: "+c);return c},jxa=function(){var a=0<=g.Jb.search(/\ (CrMo|Chrome|CriOS)\//);
return g.VE||a},h9=function(a,b){G8()?z8().setConnectedScreenStatus(a,b):I8("setConnectedScreenStatus called before ready.")},kxa=function(){y8("clearCurrentReceiver");
g.WG("yt-remote-cast-receiver")},lxa=function(){if(M8("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){cxa();a({command:"cast.sender.init"});return}}if(!window.chrome||M8("Edge"))L8();else if(cxa(),M8("Android")&&M8("Chrome/")&&window.navigator.presentation){var a="",b=g.Kh();55<=b?a="55":50<=b&&(a="50");N8("//web.archive.org/web/20170701000142/https://www.gstatic.com/eureka/clank"+a+g.Dpa,L8)}else S8(0)},mxa=function(a){a?(g.UG("yt-remote-session-app",a.app),g.UG("yt-remote-session-name",a.name)):(g.WG("yt-remote-session-app"),g.WG("yt-remote-session-name"));
g.sa("yt.mdx.remote.channelParams_",a,void 0)},nxa=function(){var a=O8();
if(g.Wb(a)){var a=g.AH(),b=g.VG("yt-remote-session-name")||"",c=g.VG("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.sa("yt.mdx.remote.channelParams_",a,void 0)}},oxa=function(){var a=V8();
a?(W8("Resume connection to: "+g.pH(a)),U8(a,0)):(g.IH(),kxa(),W8("Skipping connecting because no session screen found."))},pxa=function(a){W8("remote.onCastSessionChange_: "+g.pH(a));
if(a){var b=R8();b&&b.id==a.id?h9(b.id,"YouTube TV"):(b&&Y8(),U8(a,1))}else A8()&&Y8()},qxa=function(){var a=dxa(),b=R8();
b||(b=V8());return g.bb(a,function(a){return b&&g.mH(b,a.key)?!0:!1})},rxa=function(){var a=g.VG("yt-remote-cast-receiver");
return a?a.friendlyName:null},sxa=function(a,b,c,d,e){jxa()?ixa(b,e)&&(F8(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?Zwa(a,c):(window.__onGCastApiAvailable=function(b,d){b?Zwa(a,c):(I8("Failed to load cast API: "+d),H8(!1),F8(!1),g.WG("yt-remote-cast-available"),g.WG("yt-remote-cast-receiver"),Twa(),c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20170701000142/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):axa():lxa())):y8("Cannot initialize because not running Chrome")},
txa=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Dg(a)||"";b&&(this.port=":"+b);this.domain=g.Cg(a)||"";a=g.Jb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Ta(a,"10.0")&&(this.o=!1))},i9=function(){var a=qxa();
!a&&J8()&&rxa()&&(a={key:"cast-selector-receiver",name:rxa()});return a},uxa=function(){var a=dxa();
J8()&&g.VG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},vxa=function(a){var b={device:"Desktop",
app:"youtube-desktop"},b=g.SD("MDX_CONFIG")||b;g.SG&&Nwa();g.CH();T8||(T8=new txa(b?b.loungeApiHost:void 0),g.KH()&&(T8.g="/api/loungedev"));P8||(P8=g.x("yt.mdx.remote.deferredProxies_")||[],g.sa("yt.mdx.remote.deferredProxies_",P8,void 0));nxa();var c=E8();if(!c){var d=new g.VH(T8);g.sa("yt.mdx.remote.screenService_",d,void 0);c=E8();sxa(a,d,function(a){a?C8()&&h9(C8(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.pG("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript),
b?b.appId:void 0)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.sa("yt.mdx.remote.initialized_",!0,void 0),W8("Initializing: "+g.ug(b)),j9.push(g.lG("yt-remote-cast2-availability-change",function(){g.pG("yt-remote-receiver-availability-change")})),j9.push(g.lG("yt-remote-cast2-receiver-selected",function(){B8(null);
g.pG("yt-remote-auto-connect","cast-selector-receiver")})),j9.push(g.lG("yt-remote-cast2-receiver-resumed",function(){g.pG("yt-remote-receiver-resumed","cast-selector-receiver")})),j9.push(g.lG("yt-remote-cast2-session-change",pxa)),j9.push(g.lG("yt-remote-connection-change",function(a){a?h9(C8(),"YouTube TV"):V8()||(h9(null,null),kxa())})),a=O8(),b.isAuto&&(a.id+="#dial"),g.dF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),W8(" -- with channel params: "+
g.ug(a)),mxa(a),c.start(),C8()||oxa())},k9=function(){J8()?z8()?G8()?(y8("Requesting cast selector."),z8().requestSession()):(y8("Wait for cast API to be ready to request the session."),K8.push(g.lG("yt-remote-cast2-api-ready",k9))):I8("requestCastSelector: Cast is not initialized."):I8("requestCastSelector: Cast API is not installed!")},l9=function(a,b,c){g.L.call(this);
this.F=a;this.T=b;this.o=new g.WF(this);g.M(this,this.o);this.o.P(b,"onCaptionsTrackListChanged",this.zP);this.o.P(b,"captionschanged",this.lO);this.o.P(b,"captionssettingschanged",this.xC);this.o.P(b,"videoplayerreset",this.mo);this.o.P(b,"mdxautoplaycancel",this.ZG);this.N=this.o.P(b,"onVolumeChange",this.RA);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.cB,this);c.subscribe("remotePlayerChange",this.sl,this);c.subscribe("remoteQueueChange",this.mo,this);c.subscribe("autoplayUpNext",this.EA,
this);c.subscribe("previousNextChange",this.ZA,this);c.subscribe("nowAutoplaying",this.SA,this);c.subscribe("autoplayDismissed",this.DA,this);this.suggestion=null;this.G=new g.lQ(64);this.A=new g.tt(this.sC,500,this);g.M(this,this.A);this.B=new g.tt(this.tC,1E3,this);g.M(this,this.B);this.C={};this.J=new g.tt(this.KC,1E3,this);g.M(this,this.J);this.I=new g.nk(this.jM,1E3,this);g.M(this,this.I);this.L=g.y;this.xC();this.mo();this.sl()},m9=function(a,b){var c=a.F,d=a.T.ga().lengthSeconds;
c.I=b||0;c.g.X("progresssync",b,d)},wxa=function(a){m9(a,0);
a.A.stop();n9(a,new g.lQ(64))},p9=function(a,b){if(o9(a)&&!a.D){var c=null;
b&&(c={style:a.T.si()},g.bc(c,b));a.g.lC(a.T.ga().videoId,c);a.C=a9(a.g).o}},q9=function(a,b){var c=a.T.Uf();
c?fxa(a.g,a.T.ga().videoId,b,c.de(),c.listId.toString()):fxa(a.g,a.T.ga().videoId,b);n9(a,new g.lQ(1))},xxa=function(a,b){if(b){var c=a.T.xc("captions","tracklist",{ty:1});
c&&c.length?(a.T.Cd("captions","track",b),a.D=!1):(a.T.Xk("captions"),a.D=!0)}else a.T.Cd("captions","track",{})},o9=function(a){return a9(a.g).videoId==a.T.ga().videoId},n9=function(a,b){a.B.stop();
var c=a.G;if(!g.rQ(c,b)){var d=g.W(b,2);if(d!=g.W(a.G,2)){var e=a.T;g.e2(e.app,d,e.playerType)}a.G=b;yxa(a.F,c,b)}},r9=function(a){g.Y.call(this,{H:"div",
M:"ytp-remote",K:[{H:"div",M:"ytp-remote-display-status",K:[{H:"div",M:"ytp-remote-display-status-icon",K:[g.XD()]},{H:"div",M:"ytp-remote-display-status-text",K:["{{statustext}}"]}]}]});this.o=new g.nW(this,250);g.M(this,this.o);this.A=a;this.P(a,"presentingplayerstatechange",this.B);zxa(this,g.lV(a))},zxa=function(a,b){if(3==a.A.Ya()){var c={RECEIVER_NAME:a.A.xc("remote","currentReceiver").name},c=g.W(b,128)?g.U("YTP_MDX_STATUS_ERROR_2",c):b.xb()||g.W(b,4)?g.U("YTP_MDX_STATUS_PLAYING_2",c):g.U("YTP_MDX_STATUS_CONNECTED_2",
c);
a.Ga("statustext",c);a.o.show()}else a.o.hide()},s9=function(a){g.hW.call(this,a);
this.A={key:g.rH(),name:g.U("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.lQ(64);this.I=0;var b=g.eV(a).F;b&&(b=b.A&&b.A.g)&&(b=new w8(a,b),g.M(this,b));b=new r9(a);g.M(this,b);g.GV(a,b.element,4)},yxa=function(a,b,c){a.F=c;
a.g.X("presentingplayerstatechange",new g.wQ(c,b))},t9=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)Y8();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ga().videoId;if(c||d){var e=a.g.Uf();if(e){var f=[];for(var k=0;k<e.getLength();k++)f[k]=e.dc(k).videoId}else f=[a.g.ga().videoId];c={videoIds:f,listId:c,videoId:d,index:Math.max(a.g.fz(),0),currentTime:a.g.getCurrentTime()}}else c=null;W8("Connecting to: "+g.ug(b));"cast-selector-receiver"==b.key?(B8(c||null),c=c||null,G8()?z8().setLaunchParams(c):I8("setLaunchParams called before ready.")):!c&&X8()&&C8()==b.key?g.pG("yt-remote-connection-change",!0):
(Y8(),B8(c||null),c=E8().ge(),(c=g.tH(c,b.key))&&U8(c,1))}};
g.p(w8,g.m1);w8.prototype.I=function(){var a=this.T.xc("remote","receivers");a&&1<a.length&&!this.T.xc("remote","quickCast")?(this.F=g.Fb(a,this.B,this),g.n1(this,(0,g.I)(a,this.B)),a=this.T.xc("remote","currentReceiver"),this.qf(this.B(a)),this.enable(!0)):this.enable(!1)};
w8.prototype.B=function(a){return a.key};
w8.prototype.pf=function(a){return"cast-selector-receiver"==a?g.U("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
w8.prototype.qd=function(a){g.m1.prototype.qd.call(this,a);this.T.Cd("remote","currentReceiver",this.F[a]);this.A.Ub()};
g.D(x8,g.uH);g.h=x8.prototype;g.h.ge=function(a){return this.dd.$_gs(a)};
g.h.contains=function(a){return!!this.dd.$_c(a)};
g.h.get=function(a){return this.dd.$_g(a)};
g.h.start=function(){this.dd.$_st()};
g.h.ip=function(a,b,c){this.dd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.dd.$_r(a,b,c)};
g.h.Ro=function(a,b,c,d){this.dd.$_un(a,b,c,d)};
g.h.W=function(){for(var a=0,b=this.o.length;a<b;++a)this.dd.$_ubk(this.o[a]);this.o.length=0;this.dd=null;x8.Z.W.call(this)};
g.h.UT=function(){this.X("screenChange")};
g.h.fQ=function(){this.X("onlineScreenChange")};
var D8=null,K8=[],P8=null,T8=null;g.D($8,g.ZF);g.h=$8.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,g9(this,"play")):b9(this,"play"),e9(this,1,g.rI(a9(this))),this.X("remotePlayerChange")):d9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,g9(this,"pause")):b9(this,"pause"),e9(this,2,g.rI(a9(this))),this.X("remotePlayerChange")):d9(this,this.pause)};
g.h.XC=function(a){if(1==this.g){if(this.o){var b=a9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.xb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,g9(this,"seekTo",{newTime:a}))}else b9(this,"seekTo",{newTime:a});e9(this,3,a);this.X("remotePlayerChange")}else d9(this,g.Ba(this.XC,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,g9(this,"stopVideo")):b9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";g.pI(a);c9(this,a);this.X("remotePlayerChange")}else d9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=a9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){f9("set receiver volume: "+d)},this),(0,g.z)(function(){this.hc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){f9("set receiver muted: "+b)},this),(0,g.z)(function(){this.hc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);b9(this,"setVolume",e)}c.muted=b;c.volume=a;c9(this,c)}else d9(this,g.Ba(this.setVolume,a,b))};
g.h.lC=function(a,b){if(1==this.g){var c=a9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.ug(b.style),g.bc(d,c.o));b9(this,"setSubtitlesTrack",d);c9(this,c)}else d9(this,g.Ba(this.lC,a,b))};
g.h.ou=function(a,b){if(1==this.g){b9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Tc.id});var c=a9(this);c.audioTrackId=b.Tc.id;c9(this,c)}else d9(this,g.Ba(this.ou,a,b))};
g.h.WC=function(a,b){if(1==this.g){if(a&&b){var c=a9(this);g.sI(c,a,b);c9(this,c)}b9(this,"previous")}else d9(this,g.Ba(this.WC,a,b))};
g.h.VC=function(a,b){if(1==this.g){if(a&&b){var c=a9(this);g.sI(c,a,b);c9(this,c)}b9(this,"next")}else d9(this,g.Ba(this.VC,a,b))};
g.h.Kw=function(){1==this.g?b9(this,"dismissAutoplay"):d9(this,this.Kw)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.X("proxyStateChange",a,this.g)}$8.Z.dispose.call(this)};
g.h.W=function(){gxa(this);this.B=null;this.C.clear();Z8(this,null);$8.Z.W.call(this)};
g.h.pu=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.X("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.IB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.wQ=function(a,b){this.X(a,b)};
g.h.nO=function(a){if(!a)this.pl(null),Z8(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)f9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,c9(this,b)}};
g.h.pl=function(a){f9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),hxa(this),this.X("remotePlayerChange")};
g.h.mO=function(a){a?(hxa(this),this.X("remotePlayerChange")):this.pl(null)};
g.h.AO=function(){var a=$wa();a&&Z8(this,a)};
g.h.hc=function(a){g.hH("CP",a)};
var j9=[];g.h=txa.prototype;g.h.di=function(a){var b=this.g;if(g.t(void 0)?0:this.o)b="https://"+this.domain+this.port+this.g;return g.Kg(b+a,{})};
g.h.nu=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Vb:g.Ba(this.PT,c,!0),onError:g.Ba(this.OT,d),Ed:g.Ba(this.QT,d)};b&&(c.Ob=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.PE(a,c)};
g.h.PT=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.OT=function(a,b){a(Error("Request error: "+b.status))};
g.h.QT=function(a){a(Error("request timed out"))};g.p(l9,g.L);g.h=l9.prototype;g.h.W=function(){g.L.prototype.W.call(this);this.A.stop();this.B.stop();this.L();this.g.unsubscribe("proxyStateChange",this.cB,this);this.g.unsubscribe("remotePlayerChange",this.sl,this);this.g.unsubscribe("remoteQueueChange",this.mo,this);this.g.unsubscribe("autoplayUpNext",this.EA,this);this.g.unsubscribe("previousNextChange",this.ZA,this);this.g.unsubscribe("nowAutoplaying",this.SA,this);this.g.unsubscribe("autoplayDismissed",this.DA,this);this.g=this.F=null};
g.h.Ez=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(o9(this)){if(1081!=a9(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":a9(this.g).xb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.gj(c[0],c[1]);break;case "control_subtitles_set_track":p9(this,c[0]);break;case "control_set_audio_track":c=c[0],o9(this)&&this.g.ou(this.T.ga().videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":q9(this,this.T.getCurrentTime());break;case "control_seek":q9(this,c[0]);break;case "control_subtitles_set_track":p9(this,c[0]);break;case "control_set_audio_track":c=c[0],o9(this)&&this.g.ou(this.T.ga().videoId,c)}};
g.h.lO=function(a){this.Ez("control_subtitles_set_track",g.Wb(a)?null:a)};
g.h.xC=function(){var a=this.T.xc("captions","track");g.Wb(a)||p9(this,a)};
g.h.RA=function(a){if(o9(this)){this.g.unsubscribe("remotePlayerChange",this.sl,this);var b=Math.round(a.volume);a=!!a.muted;var c=a9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.J.start();this.g.subscribe("remotePlayerChange",this.sl,this)}};
g.h.zP=function(){g.Wb(this.C)||xxa(this,this.C);this.D=!1};
g.h.cB=function(a,b){this.B.stop();2==b&&this.tC()};
g.h.sl=function(){if(o9(this)){this.A.stop();var a=a9(this.g);switch(a.g){case 1081:n9(this,new g.lQ(8));break;case 1:this.sC();n9(this,new g.lQ(8));break;case 1083:case 3:n9(this,new g.lQ(9));break;case 0:n9(this,new g.lQ(2));this.I.stop();m9(this,this.T.ga().lengthSeconds);break;case 1082:n9(this,new g.lQ(4));break;case 2:n9(this,new g.lQ(4));m9(this,g.rI(a));break;case -1:n9(this,new g.lQ(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.U("YTP_MDX_PLAYER_ERROR")},n9(this,new g.lQ(128,
a))}var a=a9(this.g).o,b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,xxa(this,a));a=a9(this.g);-1==a.volume||Math.round(this.T.getVolume())==a.volume&&this.T.Le()==a.muted||this.J.isActive()||this.KC()}else wxa(this)};
g.h.ZA=function(){this.T.X("mdxpreviousnextchange")};
g.h.mo=function(){o9(this)||wxa(this)};
g.h.ZG=function(){this.g.Kw()};
g.h.EA=function(a){a&&(a=g.PE("/watch_queue_ajax",{method:"GET",Zc:{action_get_watch_queue_item:1,video_id:a},Vb:(0,g.z)(this.wR,this)}))&&(this.L=(0,g.z)(a.abort,a))};
g.h.wR=function(a,b){var c=new g.jP({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.T.X("mdxautoplayupnext",c)};
g.h.SA=function(a){(0,window.isNaN)(a)||this.T.X("mdxnowautoplaying",a)};
g.h.DA=function(){this.T.X("mdxautoplaycanceled")};
g.h.jM=function(a,b){-1==a9(this.g).g?q9(this,a):b&&this.g.XC(a)};
g.h.KC=function(){if(o9(this)){var a=a9(this.g);this.o.Ca(this.N);a.muted?this.T.mute():this.T.Xf();this.T.setVolume(a.volume);this.N=this.o.P(this.T,"onVolumeChange",this.RA)}};
g.h.sC=function(){this.A.stop();if(!this.g.na()){var a=a9(this.g);a.xb()&&n9(this,new g.lQ(8));m9(this,g.rI(a));this.A.start()}};
g.h.tC=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(r9,g.Y);r9.prototype.B=function(a){zxa(this,a.state)};g.p(s9,g.hW);g.h=s9.prototype;g.h.create=function(){vxa(g.wN(g.X(this.g)));this.D.push(g.lG("yt-remote-before-disconnect",this.iO,this));this.D.push(g.lG("yt-remote-connection-change",this.GQ,this));this.D.push(g.lG("yt-remote-receiver-availability-change",this.aB,this));this.D.push(g.lG("yt-remote-auto-connect",this.EQ,this));this.D.push(g.lG("yt-remote-receiver-resumed",this.DQ,this));this.aB()};
g.h.load=function(){this.g.Zp();g.hW.prototype.load.call(this);this.C=new l9(this,this.g,this.o);var a=Ywa(),a=a?a.currentTime:0,b=X8()?new $8(A8(),void 0):null;0==a&&b&&(a=g.rI(a9(b)));0!=a&&(this.I=a||0,this.g.X("progresssync",a,void 0));yxa(this,this.F,this.F);g.j2(this.g.app,6)};
g.h.unload=function(){this.g.X("mdxautoplaycanceled");this.B=this.A;g.Ue(this.C,this.o);this.o=this.C=null;g.hW.prototype.unload.call(this);g.j2(this.g.app,5)};
g.h.W=function(){g.mG(this.D);g.hW.prototype.W.call(this)};
g.h.dl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.Ez.apply(this.C,[].concat([a],g.na(c)))};
g.h.LH=function(){return this.loaded?this.C.suggestion:null};
g.h.Of=function(){return this.o?a9(this.o).Of:!1};
g.h.hasNext=function(){return this.o?a9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.I};
g.h.PL=function(){var a=a9(this.o),b=this.g.ga();return{allowSeeking:this.g.Rd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+((0,g.G)()-a.A)/1E3:a.C,isPeggedToLive:1>=(a.F?a.B+((0,g.G)()-a.A)/1E3:a.B)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.F?a.B+((0,g.G)()-a.A)/1E3:a.B,seekableStart:0<a.D?a.D+((0,g.G)()-a.A)/1E3:a.D}};
g.h.QL=function(){this.o&&this.o.VC()};
g.h.RL=function(){this.o&&this.o.WC()};
g.h.iO=function(a){1==a&&(this.J=this.o?a9(this.o):null)};
g.h.GQ=function(){var a=X8()?new $8(A8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Te(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.ga().videoId&&this.g.dz(a.videoId,g.rI(a)));this.g.X("videodatachange","newdata",this.g.ga(),3)};
g.h.aB=function(){this.G=[this.A].concat(uxa());var a=i9()||this.A;t9(this,a);this.g.ya("onMdxReceiversChange")};
g.h.EQ=function(){var a=i9();t9(this,a)};
g.h.DQ=function(){this.B=i9()};
g.h.OL=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?k9():t9(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&k9(),!0):!1}};
g.h.SL=function(){b9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Fd=function(){return!1};g.wZ.remote=s9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:01:42 Jul 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:29:20 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 86.996
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.059
  cdx.remote: 0.055
  esindex: 0.01
  LoadShardBlock: 48.161 (3)
  PetaboxLoader3.datanode: 46.721 (4)
  load_resource: 99.32
  PetaboxLoader3.resolve: 84.344
*/