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

(function(g){var window=this;var Nya=function(a,b){var c=[];g.pi(b,function(a){try{var b=g.mD.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.lD(b)&&c.push(a):c.push(a)},a);
return c},Oya=function(a,b){var c=Nya(a,b);
(0,g.G)(c,function(a){g.mD.prototype.remove.call(this,a)},a)},Pya=function(){var a=g.VG;
Oya(a,a.g.Ud(!0))},P7=function(a,b){g.P0.call(this,g.T("YTP_MDX_TITLE"),0,a,b);
this.T=a;this.F={};this.P(a,"onMdxReceiversChange",this.I);this.P(a,"presentingplayerstatechange",this.I);this.I()},Qya=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},Rya=function(a,b){var c=new window.XMLHttpRequest;
c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}},Q7=function(){var a=Qya();
a&&a(!1,"No cast extension found")},R7=function(a,b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},S7=function(a){if(a>=g.Dra.length)Q7();
else{var b=g.Dra[a],c="chrome-extension://"+b+g.Ara;0<=g.k2.indexOf(b)?Rya(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,R7(c,Q7)):S7(a+1)}):R7(c,function(){S7(a+1)})}},T7=function(a){return 0<=window.navigator.userAgent.indexOf(a)},Sya=function(){if(g.Bra){var a=2,b=Qya(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;R7("//web.archive.org/web/20170901000947/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Q7,c)}},Tya=function(){if(T7("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){Sya();a({command:"cast.sender.init"});return}}if(!window.chrome||T7("Edge"))Q7();else if(Sya(),T7("Android")&&T7("Chrome/")&&window.navigator.presentation){a="";var b=g.Mh();55<=b?a="55":50<=b&&(a="50");R7("//web.archive.org/web/20170901000947/https://www.gstatic.com/eureka/clank"+a+g.Ara,Q7)}else S7(0)},Uya=function(a){g.nG[a]&&(a=g.nG[a],(0,g.G)(a,function(a){g.lG[a]&&delete g.lG[a]}),a.length=0)},Vya=function(a){var b=g.kG();
if(b)if(b.clear(a),a)Uya(a);else for(var c in g.nG)Uya(c)},Wya=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Fg(a)||"";b&&(this.port=":"+b);this.domain=g.Eg(a)||"";a=g.Hb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Ya(a,"10.0")&&(this.o=!1))},Xya=function(a){return(0,g.J)(a,function(a){return{key:a.id,
name:a.name}})},Yya=function(){var a=window.document.createElement("a");
g.Wc(a,"https://web.archive.org/web/20170901000947/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Za(a)},Zya=function(a,b){var c=g.Bd("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.Xc(c,g.ae("https://web.archive.org/web/20170901000947/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},$ya=function(){var a=Yya(),b=window.document.getElementById(a),c=b&&g.AF(b,"loaded");
c||b&&!c||(b=Zya(a,function(){g.AF(b,"loaded")||(g.zF(b,"loaded","true"),g.rG(a),g.CE(g.Ea(Vya,a),0))}))},aza=function(){var a=0<=g.Hb.search(/\ (CrMo|Chrome|CriOS)\//);
return g.$K||a},U7=function(a){g.kH("cloudview",a)},V7=function(a){g.ua("yt.mdx.remote.cloudview.initializing_",a,void 0)},W7=function(){return g.x("yt.mdx.remote.cloudview.instance_")},bza=function(a,b,c,d){var e=!1;
W7()||(a=new g.lI(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.XG("yt-remote-cast-available",a);g.sG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){U7("onReceiverSelected: "+a.friendlyName);
g.XG("yt-remote-cast-receiver",a);g.sG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){U7("onReceiverResumed: "+a.friendlyName);
g.XG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){U7("onSessionChange: "+g.sH(a));
a||g.ZG("yt-remote-cast-receiver");g.sG("yt-remote-cast2-session-change",a)}),g.ua("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
U7("cloudview.createSingleton_: "+e);return e},cza=function(a){U7("setApiReady_ "+a);
g.ua("yt.mdx.remote.cloudview.apiReady_",a,void 0)},dza=function(){U7("dispose");
var a=W7();a&&a.dispose();g.ua("yt.mdx.remote.cloudview.instance_",null,void 0);cza(!1);g.pG(X7);X7.length=0},Y7=function(){return!!g.YG("yt-remote-cast-installed")},eza=function(){var a=g.YG("yt-remote-cast-receiver");
return a?a.friendlyName:null},fza=function(){U7("clearCurrentReceiver");
g.ZG("yt-remote-cast-receiver")},Z7=function(a){g.kH("cloudview",a)},gza=function(){return Y7()?W7()?W7().getCastSession():(Z7("getCastSelector: Cast is not initialized."),null):(Z7("getCastSelector: Cast API is not installed!"),null)},$7=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},a8=function(){Y7()?W7()?$7()?(U7("Requesting cast selector."),W7().requestSession()):(U7("Wait for cast API to be ready to request the session."),X7.push(g.oG("yt-remote-cast2-api-ready",a8))):Z7("requestCastSelector: Cast is not initialized."):
Z7("requestCastSelector: Cast API is not installed!")},b8=function(a,b){$7()?W7().setConnectedScreenStatus(a,b):Z7("setConnectedScreenStatus called before ready.")},c8=function(a){U7("setCastInstalled_ "+a);
g.XG("yt-remote-cast-installed",a)},hza=function(a,b){W7().init(a,b)},iza=function(a,b){c8(!0);
V7(!1);hza(a,function(a){a?(cza(!0),g.rG("yt-remote-cast2-api-ready")):(Z7("Failed to initialize cast API."),c8(!1),g.ZG("yt-remote-cast-available"),g.ZG("yt-remote-cast-receiver"),dza());b(a)})},jza=function(a,b,c,d,e,f,k){aza()?bza(b,e,f,k)&&(V7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?iza(a,c):(window.__onGCastApiAvailable=function(b,d){b?iza(a,c):(Z7("Failed to load cast API: "+d),c8(!1),V7(!1),g.ZG("yt-remote-cast-available"),g.ZG("yt-remote-cast-receiver"),dza(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20170901000947/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):$ya():Tya())):U7("Cannot initialize because not running Chrome")},e8=function(a,b){g.bG.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.AB;this.A=this.o=null;this.I=(0,g.z)(this.SN,this);this.F=(0,g.z)(this.rl,this);this.G=(0,g.z)(this.RN,this);this.J=(0,g.z)(this.fO,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.hu,this),kza(this))):c=3;0!=c&&(b?this.hu(c):g.CE((0,g.z)(function(){this.hu(c)},this),0));
var d=gza();d&&d8(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},f8=function(a){return new g.rI(a.B.getPlayerContextData())},lza=function(a,b,c,d,e){var f=f8(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.vI(f,b,d);g.t(c)&&(g.tI(f,c),l.currentTime=c);g.t(k)&&(l.listId=k);g8(a,"setPlaylist",l);e||h8(a,f)},kza=function(a){(0,g.G)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.Ea(this.jQ,a),this))},a)},mza=function(a){(0,g.G)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},i8=function(a,b){50>a.C.Ic()&&g.CB(a.C,b)},j8=function(a,b,c){var d=f8(a);
g.tI(d,c);-1E3!=d.g&&(d.g=b);h8(a,d)},g8=function(a,b,c){a.B.sendMessage(b,c)},h8=function(a,b){mza(a);
a.B.setPlayerContextData(g.wI(b));kza(a)},d8=function(a,b){a.A&&(a.A.removeUpdateListener(a.I),a.A.removeMediaListener(a.F),a.rl(null));
a.A=b;a.A&&(k8("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.I),a.A.addMediaListener(a.F),a.A.media.length&&a.rl(a.A.media[0]))},nza=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=f8(a);b.contentId!=d.videoId&&k8("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.tI(d,a.o.getEstimatedTime());h8(a,d)}else k8("No cast media video. Ignoring state update.")},k8=function(a){g.kH("CP",a)},l8=function(a,b,c){return(0,g.z)(function(a){this.Zb("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.Zb("Retrying "+b+" using MDx browser channel."),g8(this,b,c))},a)},m8=function(a){g.xH.call(this,"ScreenServiceProxy");
this.cd=a;this.o=[];this.o.push(this.cd.$_s("screenChange",(0,g.z)(this.xT,this)));this.o.push(this.cd.$_s("onlineScreenChange",(0,g.z)(this.PP,this)))},n8=function(){return g.x("yt.mdx.remote.currentScreenId_")},o8=function(a){g.kH("remote",a)},p8=function(a){g.ua("yt.mdx.remote.connectData_",a,void 0)},q8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},oza=function(){var a=q8();
if(g.Xb(a)){a=g.DH();var b=g.YG("yt-remote-session-name")||"",c=g.YG("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.ua("yt.mdx.remote.channelParams_",a,void 0)}},pza=function(a){a?(g.XG("yt-remote-session-app",a.app),g.XG("yt-remote-session-name",a.name)):(g.ZG("yt-remote-session-app"),g.ZG("yt-remote-session-name"));
g.ua("yt.mdx.remote.channelParams_",a,void 0)},r8=function(){return g.x("yt.mdx.remote.connection_")},s8=function(){var a=r8();
return!!a&&3!=a.getProxyState()},qza=function(){return g.x("yt.mdx.remote.connectData_")},u8=function(){if(!t8){var a=g.x("yt.mdx.remote.screenService_");
t8=a?new m8(a):null}return t8},v8=function(){var a=g.EH();
if(!a)return null;var b=u8().de();return g.wH(b,a)},w8=function(){var a=n8();
if(!a)return null;var b=u8().de();return g.wH(b,a)},rza=function(){var a=u8().cd.$_gos();
var b=w8();b&&r8()&&(g.vH(a,b)||a.push(b));return Xya(a)},sza=function(){var a=rza(),b=w8();
b||(b=v8());return g.fb(a,function(a){return b&&g.pH(b,a.key)?!0:!1})},x8=function(){var a=sza();
!a&&Y7()&&eza()&&(a={key:"cast-selector-receiver",name:eza()});return a},tza=function(){var a=rza();
Y7()&&g.YG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},uza=function(a){g.ua("yt.mdx.remote.currentScreenId_",a,void 0)},z8=function(a){var b=r8();
p8(null);a||uza("");g.ua("yt.mdx.remote.connection_",a,void 0);y8&&((0,g.G)(y8,function(b){b(a)}),y8.length=0);
b&&!a?g.sG("yt-remote-connection-change",!1):!b&&a&&g.sG("yt-remote-connection-change",!0)},B8=function(a,b){w8()&&w8();
uza(a.id);var c=new g.CI(A8,a,q8());c.connect(b,qza());c.subscribe("beforeDisconnect",function(a){g.sG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){r8()&&z8(null)});
z8(c)},vza=function(){var a=v8();
a?(o8("Resume connection to: "+g.sH(a)),B8(a,0)):(g.LH(),fza(),o8("Skipping connecting because no session screen found."))},C8=function(){$7()?W7().stopSession():Z7("stopSession called before API ready.");
var a=r8();a&&(a.disconnect(1),z8(null))},wza=function(a){o8("remote.onCastSessionChange_: "+g.sH(a));
if(a){var b=w8();b&&b.id==a.id?b8(b.id,"YouTube TV"):(b&&C8(),B8(a,1))}else r8()&&C8()},xza=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.UD("MDX_CONFIG")||b;g.VG&&Pya();g.FH();A8||(A8=new Wya(b?b.loungeApiHost:void 0),g.NH()&&(A8.g="/api/loungedev"));y8||(y8=g.x("yt.mdx.remote.deferredProxies_")||[],g.ua("yt.mdx.remote.deferredProxies_",y8,void 0));oza();var c=u8();if(!c){var d=new g.YH(A8);g.ua("yt.mdx.remote.screenService_",d,void 0);c=u8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);jza(a,d,function(a){a?n8()&&b8(n8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.sG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.ua("yt.mdx.remote.initialized_",!0,void 0),o8("Initializing: "+g.wg(b)),O8.push(g.oG("yt-remote-cast2-availability-change",function(){g.sG("yt-remote-receiver-availability-change")})),O8.push(g.oG("yt-remote-cast2-receiver-selected",function(){p8(null);
g.sG("yt-remote-auto-connect","cast-selector-receiver")})),O8.push(g.oG("yt-remote-cast2-receiver-resumed",function(){g.sG("yt-remote-receiver-resumed","cast-selector-receiver")})),O8.push(g.oG("yt-remote-cast2-session-change",wza)),O8.push(g.oG("yt-remote-connection-change",function(a){a?b8(n8(),"YouTube TV"):v8()||(b8(null,null),fza())})),a=q8(),b.isAuto&&(a.id+="#dial"),g.hF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),o8(" -- with channel params: "+
g.wg(a)),pza(a),c.start(),n8()||vza())},$8=function(a,b,c){g.L.call(this);
this.F=a;this.T=b;this.o=new g.ZF(this);g.M(this,this.o);this.o.P(b,"onCaptionsTrackListChanged",this.iP);this.o.P(b,"captionschanged",this.QN);this.o.P(b,"captionssettingschanged",this.gC);this.o.P(b,"videoplayerreset",this.oo);this.o.P(b,"mdxautoplaycancel",this.yG);this.N=this.o.P(b,"onVolumeChange",this.AA);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.NA,this);c.subscribe("remotePlayerChange",this.tl,this);c.subscribe("remoteQueueChange",this.oo,this);c.subscribe("autoplayUpNext",this.nA,
this);c.subscribe("previousNextChange",this.KA,this);c.subscribe("nowAutoplaying",this.CA,this);c.subscribe("autoplayDismissed",this.mA,this);this.suggestion=null;this.G=new g.MQ(64);this.A=new g.ot(this.bC,500,this);g.M(this,this.A);this.B=new g.ot(this.cC,1E3,this);g.M(this,this.B);this.C={};this.J=new g.ot(this.EC,1E3,this);g.M(this,this.J);this.I=new g.mk(this.FK,1E3,this);g.M(this,this.I);this.L=g.y;this.gC();this.oo();this.tl()},a9=function(a,b){var c=a.F,d=a.T.ga().lengthSeconds;
c.I=b||0;c.g.V("progresssync",b,d)},yza=function(a){a9(a,0);
a.A.stop();i9(a,new g.MQ(64))},m9=function(a,b){if(l9(a)&&!a.D){var c=null;
b&&(c={style:a.T.oi()},g.dc(c,b));a.g.UB(a.T.ga().videoId,c);a.C=f8(a.g).o}},n9=function(a,b){var c=a.T.Qf();
c?lza(a.g,a.T.ga().videoId,b,c.Zd(),c.listId.toString()):lza(a.g,a.T.ga().videoId,b);i9(a,new g.MQ(1))},zza=function(a,b){if(b){var c=a.T.uc("captions","tracklist",{Ux:1});
c&&c.length?(a.T.Dd("captions","track",b),a.D=!1):(a.T.fl("captions"),a.D=!0)}else a.T.Dd("captions","track",{})},l9=function(a){return f8(a.g).videoId==a.T.ga().videoId},i9=function(a,b){a.B.stop();
var c=a.G;if(!g.RQ(c,b)){var d=g.W(b,2);if(d!=g.W(a.G,2)){var e=a.T;g.H1(e.app,d,e.playerType)}a.G=b;Aza(a.F,c,b)}},o9=function(a){g.Y.call(this,{H:"div",
M:"ytp-remote",K:[{H:"div",M:"ytp-remote-display-status",K:[{H:"div",M:"ytp-remote-display-status-icon",K:[g.ZD()]},{H:"div",M:"ytp-remote-display-status-text",K:["{{statustext}}"]}]}]});this.o=new g.pX(this,250);g.M(this,this.o);this.A=a;this.P(a,"presentingplayerstatechange",this.B);Bza(this,g.mW(a))},Bza=function(a,b){if(3==a.A.Va()){var c={RECEIVER_NAME:a.A.uc("remote","currentReceiver").name};
c=g.W(b,128)?g.T("YTP_MDX_STATUS_ERROR_2",c):b.jb()||g.W(b,4)?g.T("YTP_MDX_STATUS_PLAYING_2",c):g.T("YTP_MDX_STATUS_CONNECTED_2",c);a.updateValue("statustext",c);a.o.show()}else a.o.hide()},p9=function(a){g.hX.call(this,a);
this.A={key:g.uH(),name:g.T("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.MQ(64);this.I=0;var b=g.fW(a).G;b&&(b=b.A&&b.A.g)&&(b=new P7(a,b),g.M(this,b));b=new o9(a);g.M(this,b);g.GW(a,b.element,4)},Aza=function(a,b,c){a.F=c;
a.g.V("presentingplayerstatechange",new g.WQ(c,b))},q9=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)C8();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ga(1),e=d.videoId;if(c||e){var f=a.g.Qf();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.gc(l).videoId}else k=[e];c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,index:Math.max(a.g.ez(),0),currentTime:a.g.getCurrentTime()}}else c=null;o8("Connecting to: "+g.wg(b));"cast-selector-receiver"==b.key?(p8(c||null),$7()?W7().setLaunchParams(c||null):Z7("setLaunchParams called before ready.")):!c&&s8()&&n8()==b.key?g.sG("yt-remote-connection-change",
!0):(C8(),p8(c||null),c=u8().de(),(c=g.wH(c,b.key))&&B8(c,1))}};
g.p(P7,g.P0);P7.prototype.I=function(){var a=this.T.uc("remote","receivers");a&&1<a.length&&!this.T.uc("remote","quickCast")?(this.F=g.Gb(a,this.B,this),g.Q0(this,(0,g.J)(a,this.B)),a=this.T.uc("remote","currentReceiver"),this.jf(this.B(a)),this.enable(!0)):this.enable(!1)};
P7.prototype.B=function(a){return a.key};
P7.prototype.hf=function(a){return"cast-selector-receiver"==a?g.T("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
P7.prototype.rd=function(a){g.P0.prototype.rd.call(this,a);this.T.Dd("remote","currentReceiver",this.F[a]);this.A.Mb()};
g.h=Wya.prototype;g.h.Yh=function(a){var b=this.g;if(g.t(void 0)?0:this.o)b="https://"+this.domain+this.port+this.g;return g.Og(b+a,{})};
g.h.fu=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Tb:g.Ea(this.sT,c,!0),onError:g.Ea(this.rT,d),Fd:g.Ea(this.tT,d)};b&&(c.Nb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.SE(a,c)};
g.h.sT=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.rT=function(a,b){a(Error("Request error: "+b.status))};
g.h.tT=function(a){a(Error("request timed out"))};
var X7=[];g.A(e8,g.bG);g.h=e8.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,l8(this,"play")):g8(this,"play"),j8(this,1,g.uI(f8(this))),this.V("remotePlayerChange")):i8(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,l8(this,"pause")):g8(this,"pause"),j8(this,2,g.uI(f8(this))),this.V("remotePlayerChange")):i8(this,this.pause)};
g.h.PC=function(a){if(1==this.g){if(this.o){var b=f8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.jb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,l8(this,"seekTo",{newTime:a}))}else g8(this,"seekTo",{newTime:a});j8(this,3,a);this.V("remotePlayerChange")}else i8(this,g.Ea(this.PC,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,l8(this,"stopVideo")):g8(this,"stopVideo");var a=f8(this);a.index=-1;a.videoId="";g.sI(a);h8(this,a);this.V("remotePlayerChange")}else i8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=f8(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){k8("set receiver volume: "+d)},this),(0,g.z)(function(){this.Zb("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){k8("set receiver muted: "+b)},this),(0,g.z)(function(){this.Zb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);g8(this,"setVolume",e)}c.muted=b;c.volume=a;h8(this,c)}else i8(this,g.Ea(this.setVolume,a,b))};
g.h.UB=function(a,b){if(1==this.g){var c=f8(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.wg(b.style),g.dc(d,c.o));g8(this,"setSubtitlesTrack",d);h8(this,c)}else i8(this,g.Ea(this.UB,a,b))};
g.h.gu=function(a,b){if(1==this.g){g8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Qc.id});var c=f8(this);c.audioTrackId=b.Qc.id;h8(this,c)}else i8(this,g.Ea(this.gu,a,b))};
g.h.OC=function(a,b){if(1==this.g){if(a&&b){var c=f8(this);g.vI(c,a,b);h8(this,c)}g8(this,"previous")}else i8(this,g.Ea(this.OC,a,b))};
g.h.NC=function(a,b){if(1==this.g){if(a&&b){var c=f8(this);g.vI(c,a,b);h8(this,c)}g8(this,"next")}else i8(this,g.Ea(this.NC,a,b))};
g.h.mw=function(){1==this.g?g8(this,"dismissAutoplay"):i8(this,this.mw)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.V("proxyStateChange",a,this.g)}e8.Z.dispose.call(this)};
g.h.X=function(){mza(this);this.B=null;this.C.clear();d8(this,null);e8.Z.X.call(this)};
g.h.hu=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.DB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.jQ=function(a,b){this.V(a,b)};
g.h.SN=function(a){if(!a)this.rl(null),d8(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=f8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)k8("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,h8(this,b)}};
g.h.rl=function(a){k8("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),nza(this),this.V("remotePlayerChange")};
g.h.RN=function(a){a?(nza(this),this.V("remotePlayerChange")):this.rl(null)};
g.h.fO=function(){var a=gza();a&&d8(this,a)};
g.h.Zb=function(a){g.kH("CP",a)};
g.A(m8,g.xH);g.h=m8.prototype;g.h.de=function(a){return this.cd.$_gs(a)};
g.h.contains=function(a){return!!this.cd.$_c(a)};
g.h.get=function(a){return this.cd.$_g(a)};
g.h.start=function(){this.cd.$_st()};
g.h.qp=function(a,b,c){this.cd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.cd.$_r(a,b,c)};
g.h.Xo=function(a,b,c,d){this.cd.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.o.length;a<b;++a)this.cd.$_ubk(this.o[a]);this.o.length=0;this.cd=null;m8.Z.X.call(this)};
g.h.xT=function(){this.V("screenChange")};
g.h.PP=function(){this.V("onlineScreenChange")};
var A8=null,y8=null,O8=[],t8=null;g.p($8,g.L);g.h=$8.prototype;g.h.X=function(){g.L.prototype.X.call(this);this.A.stop();this.B.stop();this.L();this.g.unsubscribe("proxyStateChange",this.NA,this);this.g.unsubscribe("remotePlayerChange",this.tl,this);this.g.unsubscribe("remoteQueueChange",this.oo,this);this.g.unsubscribe("autoplayUpNext",this.nA,this);this.g.unsubscribe("previousNextChange",this.KA,this);this.g.unsubscribe("nowAutoplaying",this.CA,this);this.g.unsubscribe("autoplayDismissed",this.mA,this);this.g=this.F=null};
g.h.Uy=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(l9(this)){if(1081!=f8(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":f8(this.g).jb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.dj(c[0],c[1]);break;case "control_subtitles_set_track":m9(this,c[0]);break;case "control_set_audio_track":c=c[0],l9(this)&&this.g.gu(this.T.ga().videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":n9(this,this.T.getCurrentTime());break;case "control_seek":n9(this,c[0]);break;case "control_subtitles_set_track":m9(this,c[0]);break;case "control_set_audio_track":c=c[0],l9(this)&&this.g.gu(this.T.ga().videoId,c)}};
g.h.QN=function(a){this.Uy("control_subtitles_set_track",g.Xb(a)?null:a)};
g.h.gC=function(){var a=this.T.uc("captions","track");g.Xb(a)||m9(this,a)};
g.h.AA=function(a){if(l9(this)){this.g.unsubscribe("remotePlayerChange",this.tl,this);var b=Math.round(a.volume);a=!!a.muted;var c=f8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.J.start();this.g.subscribe("remotePlayerChange",this.tl,this)}};
g.h.iP=function(){g.Xb(this.C)||zza(this,this.C);this.D=!1};
g.h.NA=function(a,b){this.B.stop();2==b&&this.cC()};
g.h.tl=function(){if(l9(this)){this.A.stop();var a=f8(this.g);switch(a.g){case 1081:i9(this,new g.MQ(8));break;case 1:this.bC();i9(this,new g.MQ(8));break;case 1083:case 3:i9(this,new g.MQ(9));break;case 0:i9(this,new g.MQ(2));this.I.stop();a9(this,this.T.ga().lengthSeconds);break;case 1082:i9(this,new g.MQ(4));break;case 2:i9(this,new g.MQ(4));a9(this,g.uI(a));break;case -1:i9(this,new g.MQ(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.T("YTP_MDX_PLAYER_ERROR")},i9(this,new g.MQ(128,
a))}a=f8(this.g).o;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,zza(this,a));a=f8(this.g);-1==a.volume||Math.round(this.T.getVolume())==a.volume&&this.T.isMuted()==a.muted||this.J.isActive()||this.EC()}else yza(this)};
g.h.KA=function(){this.T.V("mdxpreviousnextchange")};
g.h.oo=function(){l9(this)||yza(this)};
g.h.yG=function(){this.g.mw()};
g.h.nA=function(a){a&&(a=g.SE("/watch_queue_ajax",{method:"GET",Xc:{action_get_watch_queue_item:1,video_id:a},Tb:(0,g.z)(this.jR,this)}))&&(this.L=(0,g.z)(a.abort,a))};
g.h.jR=function(a,b){var c=new g.FP({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.T.V("mdxautoplayupnext",c)};
g.h.CA=function(a){(0,window.isNaN)(a)||this.T.V("mdxnowautoplaying",a)};
g.h.mA=function(){this.T.V("mdxautoplaycanceled")};
g.h.FK=function(a,b){-1==f8(this.g).g?n9(this,a):b&&this.g.PC(a)};
g.h.EC=function(){if(l9(this)){var a=f8(this.g);this.o.Ba(this.N);a.muted?this.T.mute():this.T.Rf();this.T.setVolume(a.volume);this.N=this.o.P(this.T,"onVolumeChange",this.AA)}};
g.h.bC=function(){this.A.stop();if(!this.g.ka()){var a=f8(this.g);a.jb()&&i9(this,new g.MQ(8));a9(this,g.uI(a));this.A.start()}};
g.h.cC=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(o9,g.Y);o9.prototype.B=function(a){Bza(this,a.state)};g.p(p9,g.hX);g.h=p9.prototype;g.h.create=function(){xza(g.GN(g.X(this.g)));this.D.push(g.oG("yt-remote-before-disconnect",this.MN,this));this.D.push(g.oG("yt-remote-connection-change",this.sQ,this));this.D.push(g.oG("yt-remote-receiver-availability-change",this.LA,this));this.D.push(g.oG("yt-remote-auto-connect",this.qQ,this));this.D.push(g.oG("yt-remote-receiver-resumed",this.pQ,this));this.LA()};
g.h.load=function(){this.g.Tp();g.hX.prototype.load.call(this);this.C=new $8(this,this.g,this.o);var a=qza();a=a?a.currentTime:0;var b=s8()?new e8(r8(),void 0):null;0==a&&b&&(a=g.uI(f8(b)));0!=a&&(this.I=a||0,this.g.V("progresssync",a,void 0));Aza(this,this.F,this.F);g.L1(this.g.app,6)};
g.h.unload=function(){this.g.V("mdxautoplaycanceled");this.B=this.A;g.Ze(this.C,this.o);this.o=this.C=null;g.hX.prototype.unload.call(this);g.L1(this.g.app,5)};
g.h.X=function(){g.pG(this.D);g.hX.prototype.X.call(this)};
g.h.Xk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.Uy.apply(this.C,[].concat([a],g.pa(c)))};
g.h.lH=function(){return this.loaded?this.C.suggestion:null};
g.h.Gf=function(){return this.o?f8(this.o).Gf:!1};
g.h.hasNext=function(){return this.o?f8(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.I};
g.h.iK=function(){var a=f8(this.o),b=this.g.ga();return{allowSeeking:this.g.dd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+((0,g.F)()-a.A)/1E3:a.C,isPeggedToLive:1>=(a.F?a.B+((0,g.F)()-a.A)/1E3:a.B)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.F?a.B+((0,g.F)()-a.A)/1E3:a.B,seekableStart:0<a.D?a.D+((0,g.F)()-a.A)/1E3:a.D}};
g.h.jK=function(){this.o&&this.o.NC()};
g.h.kK=function(){this.o&&this.o.OC()};
g.h.MN=function(a){1==a&&(this.J=this.o?f8(this.o):null)};
g.h.sQ=function(){var a=s8()?new e8(r8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Ye(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.ga().videoId&&this.g.bz(a.videoId,g.uI(a)));this.g.V("videodatachange","newdata",this.g.ga(),3)};
g.h.LA=function(){this.G=[this.A].concat(tza());var a=x8()||this.A;q9(this,a);this.g.va("onMdxReceiversChange")};
g.h.qQ=function(){var a=x8();q9(this,a)};
g.h.pQ=function(){this.B=x8()};
g.h.hK=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?a8():q9(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&a8(),!0):!1}};
g.h.lK=function(){g8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.td=function(){return!1};g.UZ.remote=p9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:09:47 Sep 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:29:21 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 204.31
  exclusion.robots: 0.072
  exclusion.robots.policy: 0.064
  cdx.remote: 0.048
  esindex: 0.008
  LoadShardBlock: 179.047 (3)
  PetaboxLoader3.datanode: 194.497 (5)
  load_resource: 113.137 (2)
  PetaboxLoader3.resolve: 57.252 (2)
*/