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

(function(g){var window=this;var cza=function(a,b){var c=[];g.Ol(b,function(a){try{var b=g.DD.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.CD(b)&&c.push(a):c.push(a)},a);
return c},dza=function(a,b){var c=cza(a,b);
(0,g.H)(c,function(a){g.DD.prototype.remove.call(this,a)},a)},P7=function(a,b){g.H0.call(this,g.U("YTP_MDX_TITLE"),0,a,b);
this.R=a;this.F={};this.P(a,"onMdxReceiversChange",this.I);this.P(a,"presentingplayerstatechange",this.I);this.I()},eza=function(){var a=g.nH;
dza(a,a.g.Yd(!0))},Q7=function(a){g.QH.call(this,"ScreenServiceProxy");
this.ed=a;this.o=[];this.o.push(this.ed.$_s("screenChange",(0,g.z)(this.HU,this)));this.o.push(this.ed.$_s("onlineScreenChange",(0,g.z)(this.UQ,this)))},R7=function(a){g.DH("cloudview",a)},fza=function(a){R7("setApiReady_ "+a);
g.ua("yt.mdx.remote.cloudview.apiReady_",a,void 0)},S7=function(){return g.x("yt.mdx.remote.cloudview.instance_")},gza=function(a){g.FG[a]&&(a=g.FG[a],(0,g.H)(a,function(a){g.DG[a]&&delete g.DG[a]}),a.length=0)},hza=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},T7=function(){return g.x("yt.mdx.remote.connection_")},U7=function(a){g.ua("yt.mdx.remote.connectData_",a,void 0)},iza=function(a){g.ua("yt.mdx.remote.currentScreenId_",a,void 0)},V7=function(){return g.x("yt.mdx.remote.currentScreenId_")},
X7=function(){if(!W7){var a=g.x("yt.mdx.remote.screenService_");
W7=a?new Q7(a):null}return W7},Y7=function(a){g.ua("yt.mdx.remote.cloudview.initializing_",a,void 0)},Z7=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},$7=function(a){R7("setCastInstalled_ "+a);
g.pH("yt-remote-cast-installed",a)},a8=function(a){g.DH("cloudview",a)},jza=function(a,b){S7().init(a,b)},b8=function(){return!!g.qH("yt-remote-cast-installed")},kza=function(){R7("dispose");
var a=S7();a&&a.dispose();g.ua("yt.mdx.remote.cloudview.instance_",null,void 0);fza(!1);g.HG(c8);c8.length=0},lza=function(){var a=window.document.createElement("a");
g.Zc(a,"https://web.archive.org/web/20170731235111/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.$a(a)},mza=function(a,b){var c=g.Ed("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.$c(c,g.ee("https://web.archive.org/web/20170731235111/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},nza=function(a){var b=g.CG();
if(b)if(b.clear(a),a)gza(a);else for(var c in g.FG)gza(c)},d8=function(){var a=hza();
a&&a(!1,"No cast extension found")},e8=function(a){return 0<=window.navigator.userAgent.indexOf(a)},f8=function(a,b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},oza=function(a,b){var c=new window.XMLHttpRequest;
c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}},g8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},i8=function(a){var b=T7();
U7(null);a||iza("");g.ua("yt.mdx.remote.connection_",a,void 0);h8&&((0,g.H)(h8,function(b){b(a)}),h8.length=0);
b&&!a?g.KG("yt-remote-connection-change",!1):!b&&a&&g.KG("yt-remote-connection-change",!0)},pza=function(){return g.x("yt.mdx.remote.connectData_")},j8=function(){var a=V7();
if(!a)return null;var b=X7().fe();return g.PH(b,a)},qza=function(a,b){$7(!0);
Y7(!1);jza(a,function(a){a?(fza(!0),g.IG("yt-remote-cast2-api-ready")):(a8("Failed to initialize cast API."),$7(!1),g.rH("yt-remote-cast-available"),g.rH("yt-remote-cast-receiver"),kza());b(a)})},rza=function(){return b8()?S7()?S7().getCastSession():(a8("getCastSelector: Cast is not initialized."),null):(a8("getCastSelector: Cast API is not installed!"),null)},sza=function(){var a=lza(),b=window.document.getElementById(a),c=b&&g.SF(b,"loaded");
c||b&&!c||(b=mza(a,function(){g.SF(b,"loaded")||(g.TF(b,"loaded","true"),g.IG(a),g.UE(g.Ga(nza,a),0))}))},tza=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},uza=function(){if(g.Tra){var a=2,b=hza(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;f8("//web.archive.org/web/20170731235111/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",d8,c)}},k8=function(a){if(a>=g.Vra.length)d8();
else{var b=g.Vra[a],c="chrome-extension://"+b+g.Sra;0<=g.d2.indexOf(b)?oza(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,f8(c,d8)):k8(a+1)}):f8(c,function(){k8(a+1)})}},m8=function(a,b){V7();
j8()&&j8();iza(a.id);var c=new g.VI(l8,a,g8());c.connect(b,pza());c.subscribe("beforeDisconnect",function(a){g.KG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){T7()&&(T7(),i8(null))});
i8(c)},n8=function(){var a=g.XH();
if(!a)return null;var b=X7().fe();return g.PH(b,a)},o8=function(a){g.DH("remote",a)},p8=function(){var a=T7();
return!!a&&3!=a.getProxyState()},q8=function(){Z7()?S7().stopSession():a8("stopSession called before API ready.");
var a=T7();a&&(a.disconnect(1),i8(null))},vza=function(){var a=X7().ed.$_gos();
var b=j8();b&&T7()&&(g.OH(a,b)||a.push(b));return tza(a)},s8=function(a,b){g.tG.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.RB;this.A=this.o=null;this.I=(0,g.z)(this.bP,this);this.F=(0,g.z)(this.Fl,this);this.G=(0,g.z)(this.aP,this);this.J=(0,g.z)(this.oP,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Nu,this),wza(this))):c=3;0!=c&&(b?this.Nu(c):g.UE((0,g.z)(function(){this.Nu(c)},this),0));
var d=rza();d&&r8(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},t8=function(a){return new g.KI(a.B.getPlayerContextData())},xza=function(a,b,c,d,e){var f=t8(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.OI(f,b,d);g.t(c)&&(g.MI(f,c),l.currentTime=c);g.t(k)&&(l.listId=k);u8(a,"setPlaylist",l);e||v8(a,f)},wza=function(a){(0,g.H)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.Ga(this.mR,a),this))},a)},yza=function(a){(0,g.H)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},w8=function(a,b){50>a.C.Lc()&&g.TB(a.C,b)},x8=function(a,b,c){var d=t8(a);
g.MI(d,c);-1E3!=d.g&&(d.g=b);v8(a,d)},u8=function(a,b,c){a.B.sendMessage(b,c)},v8=function(a,b){yza(a);
a.B.setPlayerContextData(g.PI(b));wza(a)},r8=function(a,b){a.A&&(a.A.removeUpdateListener(a.I),a.A.removeMediaListener(a.F),a.Fl(null));
a.A=b;a.A&&(y8("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.I),a.A.addMediaListener(a.F),a.A.media.length&&a.Fl(a.A.media[0]))},zza=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=t8(a);b.contentId!=d.videoId&&y8("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.MI(d,a.o.getEstimatedTime());v8(a,d)}else y8("No cast media video. Ignoring state update.")},y8=function(a){g.DH("CP",a)},z8=function(a,b,c){return(0,g.z)(function(a){this.dc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.dc("Retrying "+b+" using MDx browser channel."),u8(this,b,c))},a)},Aza=function(a,b,c){var d=!1;
S7()||(a=new g.EI(a,b,c),a.subscribe("yt-remote-cast2-availability-change",function(a){g.pH("yt-remote-cast-available",a);g.KG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){R7("onReceiverSelected: "+a.friendlyName);
g.pH("yt-remote-cast-receiver",a);g.KG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){R7("onReceiverResumed: "+a.friendlyName);
g.pH("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){R7("onSessionChange: "+g.LH(a));
a||g.rH("yt-remote-cast-receiver");g.KG("yt-remote-cast2-session-change",a)}),g.ua("yt.mdx.remote.cloudview.instance_",a,void 0),d=!0);
R7("cloudview.createSingleton_: "+d);return d},Bza=function(){var a=0<=g.Lb.search(/\ (CrMo|Chrome|CriOS)\//);
return g.pF||a},A8=function(a,b){Z7()?S7().setConnectedScreenStatus(a,b):a8("setConnectedScreenStatus called before ready.")},Cza=function(){R7("clearCurrentReceiver");
g.rH("yt-remote-cast-receiver")},Dza=function(){if(e8("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){uza();a({command:"cast.sender.init"});return}}if(!window.chrome||e8("Edge"))d8();else if(uza(),e8("Android")&&e8("Chrome/")&&window.navigator.presentation){a="";var b=g.Ph();55<=b?a="55":50<=b&&(a="50");f8("//web.archive.org/web/20170731235111/https://www.gstatic.com/eureka/clank"+a+g.Sra,d8)}else k8(0)},Eza=function(a){a?(g.pH("yt-remote-session-app",a.app),g.pH("yt-remote-session-name",a.name)):(g.rH("yt-remote-session-app"),g.rH("yt-remote-session-name"));
g.ua("yt.mdx.remote.channelParams_",a,void 0)},Fza=function(){var a=g8();
if(g.bc(a)){a=g.WH();var b=g.qH("yt-remote-session-name")||"",c=g.qH("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.ua("yt.mdx.remote.channelParams_",a,void 0)}},Gza=function(){var a=n8();
a?(o8("Resume connection to: "+g.LH(a)),m8(a,0)):(g.dI(),Cza(),o8("Skipping connecting because no session screen found."))},Hza=function(a){o8("remote.onCastSessionChange_: "+g.LH(a));
if(a){var b=j8();b&&b.id==a.id?A8(b.id,"YouTube TV"):(b&&q8(),m8(a,1))}else T7()&&q8()},Iza=function(){var a=vza(),b=j8();
b||(b=n8());return g.gb(a,function(a){return b&&g.IH(b,a.key)?!0:!1})},Jza=function(){var a=g.qH("yt-remote-cast-receiver");
return a?a.friendlyName:null},Kza=function(a,b,c,d,e,f){Bza()?Aza(b,e,f)&&(Y7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?qza(a,c):(window.__onGCastApiAvailable=function(b,d){b?qza(a,c):(a8("Failed to load cast API: "+d),$7(!1),Y7(!1),g.rH("yt-remote-cast-available"),g.rH("yt-remote-cast-receiver"),kza(),c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20170731235111/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):sza():Dza())):R7("Cannot initialize because not running Chrome")},
Lza=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Kg(a)||"";b&&(this.port=":"+b);this.domain=g.Jg(a)||"";a=g.Lb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Ya(a,"10.0")&&(this.o=!1))},B8=function(){var a=Iza();
!a&&b8()&&Jza()&&(a={key:"cast-selector-receiver",name:Jza()});return a},Mza=function(){var a=vza();
b8()&&g.qH("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Nza=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.kE("MDX_CONFIG")||b;g.nH&&eza();g.YH();l8||(l8=new Lza(b?b.loungeApiHost:void 0),g.fI()&&(l8.g="/api/loungedev"));h8||(h8=g.x("yt.mdx.remote.deferredProxies_")||[],g.ua("yt.mdx.remote.deferredProxies_",h8,void 0));Fza();var c=X7();if(!c){var d=new g.qI(l8);g.ua("yt.mdx.remote.screenService_",d,void 0);c=X7();Kza(a,d,function(a){a?V7()&&A8(V7(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.KG("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript),
b?b.appId:void 0,b?b.n3:!1)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.ua("yt.mdx.remote.initialized_",!0,void 0),o8("Initializing: "+g.Bg(b)),C8.push(g.GG("yt-remote-cast2-availability-change",function(){g.KG("yt-remote-receiver-availability-change")})),C8.push(g.GG("yt-remote-cast2-receiver-selected",function(){U7(null);
g.KG("yt-remote-auto-connect","cast-selector-receiver")})),C8.push(g.GG("yt-remote-cast2-receiver-resumed",function(){g.KG("yt-remote-receiver-resumed","cast-selector-receiver")})),C8.push(g.GG("yt-remote-cast2-session-change",Hza)),C8.push(g.GG("yt-remote-connection-change",function(a){a?A8(V7(),"YouTube TV"):n8()||(A8(null,null),Cza())})),a=g8(),b.isAuto&&(a.id+="#dial"),g.zF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),o8(" -- with channel params: "+
g.Bg(a)),Eza(a),c.start(),V7()||Gza())},D8=function(){b8()?S7()?Z7()?(R7("Requesting cast selector."),S7().requestSession()):(R7("Wait for cast API to be ready to request the session."),c8.push(g.GG("yt-remote-cast2-api-ready",D8))):a8("requestCastSelector: Cast is not initialized."):a8("requestCastSelector: Cast API is not installed!")},E8=function(a,b,c){g.K.call(this);
this.F=a;this.R=b;this.o=new g.qG(this);g.L(this,this.o);this.o.P(b,"onCaptionsTrackListChanged",this.nQ);this.o.P(b,"captionschanged",this.ZO);this.o.P(b,"captionssettingschanged",this.VC);this.o.P(b,"videoplayerreset",this.Eo);this.o.P(b,"mdxautoplaycancel",this.LH);this.N=this.o.P(b,"onVolumeChange",this.rB);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.DB,this);c.subscribe("remotePlayerChange",this.Il,this);c.subscribe("remoteQueueChange",this.Eo,this);c.subscribe("autoplayUpNext",this.eB,
this);c.subscribe("previousNextChange",this.AB,this);c.subscribe("nowAutoplaying",this.sB,this);c.subscribe("autoplayDismissed",this.dB,this);this.suggestion=null;this.G=new g.lR(64);this.A=new g.Ft(this.QC,500,this);g.L(this,this.A);this.B=new g.Ft(this.RC,1E3,this);g.L(this,this.B);this.C={};this.J=new g.Ft(this.rD,1E3,this);g.L(this,this.J);this.I=new g.vk(this.VM,1E3,this);g.L(this,this.I);this.L=g.y;this.VC();this.Eo();this.Il()},F8=function(a,b){var c=a.F,d=a.R.ga().lengthSeconds;
c.I=b||0;c.g.W("progresssync",b,d)},Oza=function(a){F8(a,0);
a.A.stop();G8(a,new g.lR(64))},I8=function(a,b){if(H8(a)&&!a.D){var c=null;
b&&(c={style:a.R.wi()},g.hc(c,b));a.g.JC(a.R.ga().videoId,c);a.C=t8(a.g).o}},J8=function(a,b){var c=a.R.Xf();
c?xza(a.g,a.R.ga().videoId,b,c.ce(),c.listId.toString()):xza(a.g,a.R.ga().videoId,b);G8(a,new g.lR(1))},Pza=function(a,b){if(b){var c=a.R.xc("captions","tracklist",{Vy:1});
c&&c.length?(a.R.Gd("captions","track",b),a.D=!1):(a.R.rl("captions"),a.D=!0)}else a.R.Gd("captions","track",{})},H8=function(a){return t8(a.g).videoId==a.R.ga().videoId},G8=function(a,b){a.B.stop();
var c=a.G;if(!g.rR(c,b)){var d=g.W(b,2);if(d!=g.W(a.G,2)){var e=a.R;g.z1(e.app,d,e.playerType)}a.G=b;Qza(a.F,c,b)}},K8=function(a){g.Y.call(this,{H:"div",
M:"ytp-remote",K:[{H:"div",M:"ytp-remote-display-status",K:[{H:"div",M:"ytp-remote-display-status-icon",K:[g.pE()]},{H:"div",M:"ytp-remote-display-status-text",K:["{{statustext}}"]}]}]});this.o=new g.wX(this,250);g.L(this,this.o);this.A=a;this.P(a,"presentingplayerstatechange",this.B);Rza(this,g.uW(a))},Rza=function(a,b){if(3==a.A.Ua()){var c={RECEIVER_NAME:a.A.xc("remote","currentReceiver").name};
c=g.W(b,128)?g.U("YTP_MDX_STATUS_ERROR_2",c):b.rb()||g.W(b,4)?g.U("YTP_MDX_STATUS_PLAYING_2",c):g.U("YTP_MDX_STATUS_CONNECTED_2",c);a.updateValue("statustext",c);a.o.show()}else a.o.hide()},L8=function(a){g.pX.call(this,a);
this.A={key:g.NH(),name:g.U("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.lR(64);this.I=0;var b=g.nW(a).F;b&&(b=b.A&&b.A.g)&&(b=new P7(a,b),g.L(this,b));b=new K8(a);g.L(this,b);g.OW(a,b.element,4)},Qza=function(a,b,c){a.F=c;
a.g.W("presentingplayerstatechange",new g.wR(c,b))},M8=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)q8();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ga(1).videoId;if(c||d){var e=a.g.Xf();if(e){var f=[];for(var k=0;k<e.getLength();k++)f[k]=e.kc(k).videoId}else f=[d];c={videoIds:f,listId:c,videoId:d,index:Math.max(a.g.Jz(),0),currentTime:a.g.getCurrentTime()}}else c=null;o8("Connecting to: "+g.Bg(b));"cast-selector-receiver"==b.key?(U7(c||null),c=c||null,Z7()?S7().setLaunchParams(c):a8("setLaunchParams called before ready.")):!c&&p8()&&V7()==b.key?g.KG("yt-remote-connection-change",!0):(q8(),U7(c||
null),c=X7().fe(),(c=g.PH(c,b.key))&&m8(c,1))}};
g.p(P7,g.H0);P7.prototype.I=function(){var a=this.R.xc("remote","receivers");a&&1<a.length&&!this.R.xc("remote","quickCast")?(this.F=g.Ib(a,this.B,this),g.I0(this,(0,g.I)(a,this.B)),a=this.R.xc("remote","currentReceiver"),this.nf(this.B(a)),this.enable(!0)):this.enable(!1)};
P7.prototype.B=function(a){return a.key};
P7.prototype.mf=function(a){return"cast-selector-receiver"==a?g.U("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
P7.prototype.td=function(a){g.H0.prototype.td.call(this,a);this.R.Gd("remote","currentReceiver",this.F[a]);this.A.Sb()};
g.B(Q7,g.QH);g.h=Q7.prototype;g.h.fe=function(a){return this.ed.$_gs(a)};
g.h.contains=function(a){return!!this.ed.$_c(a)};
g.h.get=function(a){return this.ed.$_g(a)};
g.h.start=function(){this.ed.$_st()};
g.h.Dp=function(a,b,c){this.ed.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.ed.$_r(a,b,c)};
g.h.np=function(a,b,c,d){this.ed.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.o.length;a<b;++a)this.ed.$_ubk(this.o[a]);this.o.length=0;this.ed=null;Q7.Z.X.call(this)};
g.h.HU=function(){this.W("screenChange")};
g.h.UQ=function(){this.W("onlineScreenChange")};
var W7=null,c8=[],h8=null,l8=null;g.B(s8,g.tG);g.h=s8.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,z8(this,"play")):u8(this,"play"),x8(this,1,g.NI(t8(this))),this.W("remotePlayerChange")):w8(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,z8(this,"pause")):u8(this,"pause"),x8(this,2,g.NI(t8(this))),this.W("remotePlayerChange")):w8(this,this.pause)};
g.h.CD=function(a){if(1==this.g){if(this.o){var b=t8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.rb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,z8(this,"seekTo",{newTime:a}))}else u8(this,"seekTo",{newTime:a});x8(this,3,a);this.W("remotePlayerChange")}else w8(this,g.Ga(this.CD,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,z8(this,"stopVideo")):u8(this,"stopVideo");var a=t8(this);a.index=-1;a.videoId="";g.LI(a);v8(this,a);this.W("remotePlayerChange")}else w8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=t8(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){y8("set receiver volume: "+d)},this),(0,g.z)(function(){this.dc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){y8("set receiver muted: "+b)},this),(0,g.z)(function(){this.dc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);u8(this,"setVolume",e)}c.muted=b;c.volume=a;v8(this,c)}else w8(this,g.Ga(this.setVolume,a,b))};
g.h.JC=function(a,b){if(1==this.g){var c=t8(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Bg(b.style),g.hc(d,c.o));u8(this,"setSubtitlesTrack",d);v8(this,c)}else w8(this,g.Ga(this.JC,a,b))};
g.h.Mu=function(a,b){if(1==this.g){u8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Tc.id});var c=t8(this);c.audioTrackId=b.Tc.id;v8(this,c)}else w8(this,g.Ga(this.Mu,a,b))};
g.h.BD=function(a,b){if(1==this.g){if(a&&b){var c=t8(this);g.OI(c,a,b);v8(this,c)}u8(this,"previous")}else w8(this,g.Ga(this.BD,a,b))};
g.h.AD=function(a,b){if(1==this.g){if(a&&b){var c=t8(this);g.OI(c,a,b);v8(this,c)}u8(this,"next")}else w8(this,g.Ga(this.AD,a,b))};
g.h.ox=function(){1==this.g?u8(this,"dismissAutoplay"):w8(this,this.ox)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.W("proxyStateChange",a,this.g)}s8.Z.dispose.call(this)};
g.h.X=function(){yza(this);this.B=null;this.C.clear();r8(this,null);s8.Z.X.call(this)};
g.h.Nu=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.W("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.UB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.mR=function(a,b){this.W(a,b)};
g.h.bP=function(a){if(!a)this.Fl(null),r8(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=t8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)y8("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,v8(this,b)}};
g.h.Fl=function(a){y8("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),zza(this),this.W("remotePlayerChange")};
g.h.aP=function(a){a?(zza(this),this.W("remotePlayerChange")):this.Fl(null)};
g.h.oP=function(){var a=rza();a&&r8(this,a)};
g.h.dc=function(a){g.DH("CP",a)};
var C8=[];g.h=Lza.prototype;g.h.ii=function(a){var b=this.g;if(g.t(void 0)?0:this.o)b="https://"+this.domain+this.port+this.g;return g.Rg(b+a,{})};
g.h.Lu=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Tb:g.Ga(this.CU,c,!0),onError:g.Ga(this.BU,d),Id:g.Ga(this.DU,d)};b&&(c.Lb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.hF(a,c)};
g.h.CU=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.BU=function(a,b){a(Error("Request error: "+b.status))};
g.h.DU=function(a){a(Error("request timed out"))};g.p(E8,g.K);g.h=E8.prototype;g.h.X=function(){g.K.prototype.X.call(this);this.A.stop();this.B.stop();this.L();this.g.unsubscribe("proxyStateChange",this.DB,this);this.g.unsubscribe("remotePlayerChange",this.Il,this);this.g.unsubscribe("remoteQueueChange",this.Eo,this);this.g.unsubscribe("autoplayUpNext",this.eB,this);this.g.unsubscribe("previousNextChange",this.AB,this);this.g.unsubscribe("nowAutoplaying",this.sB,this);this.g.unsubscribe("autoplayDismissed",this.dB,this);this.g=this.F=null};
g.h.jA=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(H8(this)){if(1081!=t8(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":t8(this.g).rb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.lj(c[0],c[1]);break;case "control_subtitles_set_track":I8(this,c[0]);break;case "control_set_audio_track":c=c[0],H8(this)&&this.g.Mu(this.R.ga().videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":J8(this,this.R.getCurrentTime());break;case "control_seek":J8(this,c[0]);break;case "control_subtitles_set_track":I8(this,c[0]);break;case "control_set_audio_track":c=c[0],H8(this)&&this.g.Mu(this.R.ga().videoId,c)}};
g.h.ZO=function(a){this.jA("control_subtitles_set_track",g.bc(a)?null:a)};
g.h.VC=function(){var a=this.R.xc("captions","track");g.bc(a)||I8(this,a)};
g.h.rB=function(a){if(H8(this)){this.g.unsubscribe("remotePlayerChange",this.Il,this);var b=Math.round(a.volume);a=!!a.muted;var c=t8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.J.start();this.g.subscribe("remotePlayerChange",this.Il,this)}};
g.h.nQ=function(){g.bc(this.C)||Pza(this,this.C);this.D=!1};
g.h.DB=function(a,b){this.B.stop();2==b&&this.RC()};
g.h.Il=function(){if(H8(this)){this.A.stop();var a=t8(this.g);switch(a.g){case 1081:G8(this,new g.lR(8));break;case 1:this.QC();G8(this,new g.lR(8));break;case 1083:case 3:G8(this,new g.lR(9));break;case 0:G8(this,new g.lR(2));this.I.stop();F8(this,this.R.ga().lengthSeconds);break;case 1082:G8(this,new g.lR(4));break;case 2:G8(this,new g.lR(4));F8(this,g.NI(a));break;case -1:G8(this,new g.lR(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.U("YTP_MDX_PLAYER_ERROR")},G8(this,new g.lR(128,
a))}a=t8(this.g).o;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,Pza(this,a));a=t8(this.g);-1==a.volume||Math.round(this.R.getVolume())==a.volume&&this.R.Je()==a.muted||this.J.isActive()||this.rD()}else Oza(this)};
g.h.AB=function(){this.R.W("mdxpreviousnextchange")};
g.h.Eo=function(){H8(this)||Oza(this)};
g.h.LH=function(){this.g.ox()};
g.h.eB=function(a){a&&(a=g.hF("/watch_queue_ajax",{method:"GET",ad:{action_get_watch_queue_item:1,video_id:a},Tb:(0,g.z)(this.oS,this)}))&&(this.L=(0,g.z)(a.abort,a))};
g.h.oS=function(a,b){var c=new g.kQ({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.R.W("mdxautoplayupnext",c)};
g.h.sB=function(a){(0,window.isNaN)(a)||this.R.W("mdxnowautoplaying",a)};
g.h.dB=function(){this.R.W("mdxautoplaycanceled")};
g.h.VM=function(a,b){-1==t8(this.g).g?J8(this,a):b&&this.g.CD(a)};
g.h.rD=function(){if(H8(this)){var a=t8(this.g);this.o.Ca(this.N);a.muted?this.R.mute():this.R.Cg();this.R.setVolume(a.volume);this.N=this.o.P(this.R,"onVolumeChange",this.rB)}};
g.h.QC=function(){this.A.stop();if(!this.g.la()){var a=t8(this.g);a.rb()&&G8(this,new g.lR(8));F8(this,g.NI(a));this.A.start()}};
g.h.RC=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(K8,g.Y);K8.prototype.B=function(a){Rza(this,a.state)};g.p(L8,g.pX);g.h=L8.prototype;g.h.create=function(){Nza(g.fO(g.X(this.g)));this.D.push(g.GG("yt-remote-before-disconnect",this.WO,this));this.D.push(g.GG("yt-remote-connection-change",this.wR,this));this.D.push(g.GG("yt-remote-receiver-availability-change",this.BB,this));this.D.push(g.GG("yt-remote-auto-connect",this.uR,this));this.D.push(g.GG("yt-remote-receiver-resumed",this.tR,this));this.BB()};
g.h.load=function(){this.g.uq();g.pX.prototype.load.call(this);this.C=new E8(this,this.g,this.o);var a=pza();a=a?a.currentTime:0;var b=p8()?new s8(T7(),void 0):null;0==a&&b&&(a=g.NI(t8(b)));0!=a&&(this.I=a||0,this.g.W("progresssync",a,void 0));Qza(this,this.F,this.F);g.E1(this.g.app,6)};
g.h.unload=function(){this.g.W("mdxautoplaycanceled");this.B=this.A;g.df(this.C,this.o);this.o=this.C=null;g.pX.prototype.unload.call(this);g.E1(this.g.app,5)};
g.h.X=function(){g.HG(this.D);g.pX.prototype.X.call(this)};
g.h.xl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.jA.apply(this.C,[].concat([a],g.pa(c)))};
g.h.wI=function(){return this.loaded?this.C.suggestion:null};
g.h.Qf=function(){return this.o?t8(this.o).Qf:!1};
g.h.hasNext=function(){return this.o?t8(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.I};
g.h.yM=function(){var a=t8(this.o),b=this.g.ga();return{allowSeeking:this.g.fd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+((0,g.G)()-a.A)/1E3:a.C,isPeggedToLive:1>=(a.F?a.B+((0,g.G)()-a.A)/1E3:a.B)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.F?a.B+((0,g.G)()-a.A)/1E3:a.B,seekableStart:0<a.D?a.D+((0,g.G)()-a.A)/1E3:a.D}};
g.h.zM=function(){this.o&&this.o.AD()};
g.h.AM=function(){this.o&&this.o.BD()};
g.h.WO=function(a){1==a&&(this.J=this.o?t8(this.o):null)};
g.h.wR=function(){var a=p8()?new s8(T7(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.cf(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.ga().videoId&&this.g.Hz(a.videoId,g.NI(a)));this.g.W("videodatachange","newdata",this.g.ga(),3)};
g.h.BB=function(){this.G=[this.A].concat(Mza());var a=B8()||this.A;M8(this,a);this.g.ya("onMdxReceiversChange")};
g.h.uR=function(){var a=B8();M8(this,a)};
g.h.tR=function(){this.B=B8()};
g.h.xM=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?D8():M8(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&D8(),!0):!1}};
g.h.BM=function(){u8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.ud=function(){return!1};g.KZ.remote=L8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 23:51:11 Jul 31, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:30:05 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 295.604
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.06
  cdx.remote: 0.059
  esindex: 0.009
  LoadShardBlock: 231.985 (3)
  PetaboxLoader3.resolve: 224.894 (4)
  PetaboxLoader3.datanode: 40.553 (4)
  load_resource: 77.165
*/