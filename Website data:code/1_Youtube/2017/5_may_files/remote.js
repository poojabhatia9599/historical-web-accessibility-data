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

(function(g){var window=this;var jva=function(a,b){var c=[];g.Dl(b,function(a){try{var b=g.lD.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.kD(b)&&c.push(a):c.push(a)},a);
return c},kva=function(a,b){var c=jva(a,b);
(0,g.H)(c,function(a){g.lD.prototype.remove.call(this,a)},a)},j9=function(a,b){g.S0.call(this,g.T("YTP_MDX_TITLE"),0,a,b);
this.Y=a;this.F={};this.U(a,"onMdxReceiversChange",this.H);this.U(a,"presentingplayerstatechange",this.H);this.H()},lva=function(a){return a.H?a.F+((0,g.G)()-a.A)/1E3:a.F},mva=function(){var a=g.GG;
kva(a,a.g.Od(!0))},k9=function(a){g.iH.call(this,"ScreenServiceProxy");
this.Wc=a;this.o=[];this.o.push(this.Wc.$_s("screenChange",(0,g.B)(this.EQ,this)));this.o.push(this.Wc.$_s("onlineScreenChange",(0,g.B)(this.UM,this)))},l9=function(a){g.WG("cloudview",a)},nva=function(a){l9("setApiReady_ "+a);
g.u("yt.mdx.remote.cloudview.apiReady_",a,void 0)},m9=function(){return g.w("yt.mdx.remote.cloudview.instance_")},ova=function(a){g.ZF[a]&&(a=g.ZF[a],(0,g.H)(a,function(a){g.XF[a]&&delete g.XF[a]}),a.length=0)},n9=function(){return g.w("yt.mdx.remote.connection_")},o9=function(a){g.u("yt.mdx.remote.connectData_",a,void 0)},pva=function(a){g.u("yt.mdx.remote.currentScreenId_",a,void 0)},p9=function(){return g.w("yt.mdx.remote.currentScreenId_")},r9=function(){if(!q9){var a=g.w("yt.mdx.remote.screenService_");
q9=a?new k9(a):null}return q9},s9=function(a){g.u("yt.mdx.remote.cloudview.initializing_",a,void 0)},t9=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},u9=function(a){l9("setCastInstalled_ "+a);
g.IG("yt-remote-cast-installed",a)},v9=function(a){g.WG("cloudview",a)},qva=function(a,b){m9().init(a,b)},w9=function(){return!!g.JG("yt-remote-cast-installed")},rva=function(){l9("dispose");
var a=m9();a&&a.dispose();g.u("yt.mdx.remote.cloudview.instance_",null,void 0);nva(!1);g.aG(x9);x9.length=0},sva=function(){var a=window.document.createElement("a");
g.Od(a,"https://web.archive.org/web/20170430234025/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Sa(a)},tva=function(a,b){var c=window.document.createElement("script");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
c.src="https://web.archive.org/web/20170430234025/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js";var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},uva=function(a){var b=g.WF();
if(b)if(b.clear(a),a)ova(a);else for(var c in g.ZF)ova(c)},y9=function(){return g.w("yt.mdx.remote.channelParams_")||{}},A9=function(a){var b=n9();
o9(null);a||pva("");g.u("yt.mdx.remote.connection_",a,void 0);z9&&((0,g.H)(z9,function(b){b(a)}),z9.length=0);
b&&!a?g.dG("yt-remote-connection-change",!1):!b&&a&&g.dG("yt-remote-connection-change",!0)},vva=function(){return g.w("yt.mdx.remote.connectData_")},B9=function(){var a=p9();
if(!a)return null;var b=r9().Td();return g.hH(b,a)},wva=function(a,b){u9(!0);
s9(!1);qva(a,function(a){a?(nva(!0),g.bG("yt-remote-cast2-api-ready")):(v9("Failed to initialize cast API."),u9(!1),g.KG("yt-remote-cast-available"),g.KG("yt-remote-cast-receiver"),rva());b(a)})},xva=function(){return w9()?m9()?m9().getCastSession():(v9("getCastSelector: Cast is not initialized."),null):(v9("getCastSelector: Cast API is not installed!"),null)},yva=function(){var a=sva(),b=window.document.getElementById(a),c=b&&g.lF(b,"loaded");
c||b&&!c||(b=tva(a,function(){g.lF(b,"loaded")||(g.mF(b,"loaded","true"),g.bG(a),g.tE(g.ya(uva,a),0))}))},zva=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},Ava=function(){if(g.toa){var a=2,b=g.Eh(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;g.Jh("//web.archive.org/web/20170430234025/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g.Gh,c)}},D9=function(a,b){p9();
B9()&&B9();pva(a.id);var c=new g.mI(C9,a,y9());c.connect(b,vva());c.subscribe("beforeDisconnect",function(a){g.dG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){n9()&&(n9(),A9(null))});
A9(c)},E9=function(){var a=g.nH();
if(!a)return null;var b=r9().Td();return g.hH(b,a)},F9=function(a){g.WG("remote",a)},G9=function(){var a=n9();
return!!a&&3!=a.getProxyState()},H9=function(){t9()?m9().stopSession():v9("stopSession called before API ready.");
var a=n9();a&&(a.disconnect(1),A9(null))},Bva=function(){var a=r9().Wc.$_gos();
var b=B9();b&&n9()&&(g.gH(a,b)||a.push(b));return zva(a)},J9=function(a,b){g.MF.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.zB;this.A=this.o=null;this.H=(0,g.B)(this.aL,this);this.F=(0,g.B)(this.Bk,this);this.G=(0,g.B)(this.ZK,this);this.J=(0,g.B)(this.nL,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Us,this),Cva(this))):c=3;0!=c&&(b?this.Us(c):g.tE((0,g.B)(function(){this.Us(c)},this),0));
var d=xva();d&&I9(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},K9=function(a){return new g.bI(a.B.getPlayerContextData())},Dva=function(a,b,c,d,e){var f=K9(a),k=e||f.listId;
d=d||0;var l={videoId:b,currentIndex:d};g.fI(f,b,d);g.t(c)&&(g.dI(f,c),l.currentTime=c);g.t(k)&&(l.listId=k);L9(a,"setPlaylist",l);e||M9(a,f)},Cva=function(a){(0,g.H)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.ya(this.oN,a),this))},a)},Eva=function(a){(0,g.H)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},N9=function(a,b){50>a.C.Hc()&&g.BB(a.C,b)},O9=function(a,b,c){var d=K9(a);
g.dI(d,c);-1E3!=d.g&&(d.g=b);M9(a,d)},L9=function(a,b,c){a.B.sendMessage(b,c)},M9=function(a,b){Eva(a);
a.B.setPlayerContextData(g.gI(b));Cva(a)},I9=function(a,b){a.A&&(a.A.removeUpdateListener(a.H),a.A.removeMediaListener(a.F),a.Bk(null));
a.A=b;a.A&&(P9("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.H),a.A.addMediaListener(a.F),a.A.media.length&&a.Bk(a.A.media[0]))},Fva=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=K9(a);b.contentId!=d.videoId&&P9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.dI(d,a.o.getEstimatedTime());M9(a,d)}else P9("No cast media video. Ignoring state update.")},P9=function(a){g.WG("CP",a)},Q9=function(a,b,c){return(0,g.B)(function(a){this.kc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.kc("Retrying "+b+" using MDx browser channel."),L9(this,b,c))},a)},Gva=function(a){var b=!1;
m9()||(a=new g.WH(a),a.subscribe("yt-remote-cast2-availability-change",function(a){g.IG("yt-remote-cast-available",a);g.dG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){l9("onReceiverSelected: "+a.friendlyName);
g.IG("yt-remote-cast-receiver",a);g.dG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){l9("onReceiverResumed: "+a.friendlyName);
g.IG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){l9("onSessionChange: "+g.dH(a));
a||g.KG("yt-remote-cast-receiver");g.dG("yt-remote-cast2-session-change",a)}),g.u("yt.mdx.remote.cloudview.instance_",a,void 0),b=!0);
l9("cloudview.createSingleton_: "+b);return b},Hva=function(){var a=0<=g.Gb.search(/\ (CrMo|Chrome|CriOS)\//);
return g.QE||a},R9=function(a,b){t9()?m9().setConnectedScreenStatus(a,b):v9("setConnectedScreenStatus called before ready.")},Iva=function(){l9("clearCurrentReceiver");
g.KG("yt-remote-cast-receiver")},Jva=function(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){Ava();a({command:"cast.sender.init"});return}}if(window.chrome)if(Ava(),a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation){var a="",b=g.Ch();55<=b?a="55":50<=b&&(a="50");g.Jh("//web.archive.org/web/20170430234025/https://www.gstatic.com/eureka/clank"+a+g.Hh,g.Gh)}else g.Kh(0);else g.Gh()},Kva=function(a){a?(g.IG("yt-remote-session-app",a.app),g.IG("yt-remote-session-name",a.name)):(g.KG("yt-remote-session-app"),g.KG("yt-remote-session-name"));
g.u("yt.mdx.remote.channelParams_",a,void 0)},Lva=function(){var a=y9();
if(g.Tb(a)){var a=g.mH(),b=g.JG("yt-remote-session-name")||"",c=g.JG("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.u("yt.mdx.remote.channelParams_",a,void 0)}},Mva=function(){var a=E9();
a?(F9("Resume connection to: "+g.dH(a)),D9(a,0)):(g.vH(),Iva(),F9("Skipping connecting because no session screen found."))},Nva=function(a){F9("remote.onCastSessionChange_: "+g.dH(a));
if(a){var b=B9();b&&b.id==a.id?R9(b.id,"YouTube TV"):(b&&H9(),D9(a,1))}else n9()&&H9()},Ova=function(){var a=Bva(),b=B9();
b||(b=E9());return g.$a(a,function(a){return b&&g.aH(b,a.key)?!0:!1})},Pva=function(){var a=g.JG("yt-remote-cast-receiver");
return a?a.friendlyName:null},Qva=function(a,b,c,d){Hva()?Gva(b)&&(s9(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?wva(a,c):(window.__onGCastApiAvailable=function(b,d){b?wva(a,c):(v9("Failed to load cast API: "+d),u9(!1),s9(!1),g.KG("yt-remote-cast-available"),g.KG("yt-remote-cast-receiver"),rva(),c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20170430234025/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):yva():Jva())):l9("Cannot initialize because not running Chrome")},
Rva=function(a){this.port=this.A="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.wg(a)||"";b&&(this.port=":"+b);this.A=g.vg(a)||"";a=g.Gb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Ra(a,"10.0")&&(this.o=!1))},S9=function(){var a=Ova();
!a&&w9()&&Pva()&&(a={key:"cast-selector-receiver",name:Pva()});return a},Sva=function(){var a=Bva();
w9()&&g.JG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Tva=function(a){var b={device:"Desktop",
app:"youtube-desktop"};g.GG&&mva();g.pH();C9||(C9=new Rva,g.xH()&&(C9.g="/api/loungedev"));z9||(z9=g.w("yt.mdx.remote.deferredProxies_")||[],g.u("yt.mdx.remote.deferredProxies_",z9,void 0));Lva();var c=r9();if(!c){var d=new g.IH(C9);g.u("yt.mdx.remote.screenService_",d,void 0);c=r9();Qva(a,d,function(a){a?p9()&&R9(p9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){g.dG("yt-remote-receiver-availability-change")})},!(!b||!b.loadCastApiSetupScript))}b&&!g.w("yt.mdx.remote.initialized_")&&
(g.u("yt.mdx.remote.initialized_",!0,void 0),F9("Initializing: "+g.Mc(b)),T9.push(g.$F("yt-remote-cast2-availability-change",function(){g.dG("yt-remote-receiver-availability-change")})),T9.push(g.$F("yt-remote-cast2-receiver-selected",function(){o9(null);
g.dG("yt-remote-auto-connect","cast-selector-receiver")})),T9.push(g.$F("yt-remote-cast2-receiver-resumed",function(){g.dG("yt-remote-receiver-resumed","cast-selector-receiver")})),T9.push(g.$F("yt-remote-cast2-session-change",Nva)),T9.push(g.$F("yt-remote-connection-change",function(a){a?R9(p9(),"YouTube TV"):E9()||(R9(null,null),Iva())})),a=y9(),b.isAuto&&(a.id+="#dial"),g.SF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,F9(" -- with channel params: "+g.Mc(a)),
Kva(a),c.start(),p9()||Mva())},U9=function(){w9()?m9()?t9()?(l9("Requesting cast selector."),m9().requestSession()):(l9("Wait for cast API to be ready to request the session."),x9.push(g.$F("yt-remote-cast2-api-ready",U9))):v9("requestCastSelector: Cast is not initialized."):v9("requestCastSelector: Cast API is not installed!")},V9=function(a,b,c){g.M.call(this);
this.J=a;this.Y=b;this.o=new g.AL(this);g.N(this,this.o);this.o.U(b,"onCaptionsTrackListChanged",this.nM);this.o.U(b,"captionschanged",this.YK);this.o.U(b,"captionssettingschanged",this.DA);this.o.U(b,"videoplayerreset",this.xn);this.o.U(b,"mdxautoplaycancel",this.xF);this.M=this.o.U(b,"onVolumeChange",this.az);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.mz,this);c.subscribe("remotePlayerChange",this.Dk,this);c.subscribe("remoteQueueChange",this.xn,this);c.subscribe("autoplayUpNext",this.Ny,
this);c.subscribe("previousNextChange",this.jz,this);c.subscribe("nowAutoplaying",this.bz,this);c.subscribe("autoplayDismissed",this.My,this);this.suggestion=null;this.F=new g.LQ(64);this.A=new g.ot(this.yA,500,this);g.N(this,this.A);this.B=new g.ot(this.zA,1E3,this);g.N(this,this.B);this.C={};this.H=new g.ot(this.NA,1E3,this);g.N(this,this.H);this.G=new g.ck(this.zS,1E3,this);g.N(this,this.G);this.L=g.y;this.DA();this.xn();this.Dk()},W9=function(a,b){var c=a.J,d=a.Y.ha().lengthSeconds;
c.H=b||0;c.g.V("progresssync",b,d)},Uva=function(a){W9(a,0);
a.A.stop();X9(a,new g.LQ(64))},$9=function(a,b){if(Y9(a)&&!a.D){var c=null;
b&&(c={style:a.Y.dl()},g.$b(c,b));a.g.sA(Z9(a),c);a.C=K9(a.g).o}},a$=function(a,b){var c=a.Y.Uf();
c?Dva(a.g,Z9(a),b,c.Rd(),c.listId.toString()):Dva(a.g,Z9(a),b);X9(a,new g.LQ(1))},Vva=function(a,b){if(b){var c=a.Y.Zc("captions","tracklist",{Zw:1});
c&&c.length?(a.Y.Ie("captions","track",b),a.D=!1):(a.Y.Yk("captions"),a.D=!0)}else a.Y.Ie("captions","track",{})},Y9=function(a){return K9(a.g).videoId==Z9(a)},Z9=function(a){return a.Y.ha().videoId},X9=function(a,b){a.B.stop();
var c=a.F;if(!g.RQ(c,b)){var d=g.V(b,2);if(d!=g.V(a.F,2)){var e=a.Y;(e=g.ZU(e.app,e.playerType||1))&&g.WT(e,d)}a.F=b;Wva(a.J,c,b)}},b$=function(a){g.W.call(this,{K:"div",
X:"ytp-remote",O:[{K:"div",X:"ytp-remote-display-status",O:[{K:"div",X:"ytp-remote-display-status-icon",O:[g.QD()]},{K:"div",X:"ytp-remote-display-status-text",O:["{{statustext}}"]}]}]});this.g=new g.MV(this,250);g.N(this,this.g);this.A=a;this.U(a,"presentingplayerstatechange",this.B);Xva(this,g.$U(a))},Xva=function(a,b){if(3==a.A.Za()){var c={RECEIVER_NAME:a.A.Zc("remote","currentReceiver").name},c=g.V(b,128)?g.T("YTP_MDX_STATUS_ERROR_2",c):b.vb()||g.V(b,4)?g.T("YTP_MDX_STATUS_PLAYING_2",c):g.T("YTP_MDX_STATUS_CONNECTED_2",
c);
a.Ca("statustext",c);a.g.show()}else g.OV(a.g)},c$=function(a){g.BV.call(this,a);
this.A={key:g.fH(),name:g.T("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.LQ(64);this.H=0;var b=g.TU(a).D;b&&(b=b.A&&b.A.g)&&(b=new j9(a,b),g.N(this,b));b=new b$(a);g.N(this,b);g.qV(a,b.element,5)},Wva=function(a,b,c){a.F=c;
a.g.V("presentingplayerstatechange",new g.MT(c,b))},d$=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)H9();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ha().videoId;if(c||d){var e=a.g.Uf();if(e){var f=[];for(var k=0;k<e.getLength();k++)f[k]=e.gc(k).videoId}else f=[a.g.ha().videoId];c={videoIds:f,listId:c,videoId:d,index:Math.max(a.g.jB(),0),currentTime:a.g.getCurrentTime()}}else c=null;F9("Connecting to: "+g.Mc(b));"cast-selector-receiver"==b.key?(o9(c||null),c=c||null,t9()?m9().setLaunchParams(c):v9("setLaunchParams called before ready.")):!c&&G9()&&p9()==b.key?g.dG("yt-remote-connection-change",!0):
(H9(),o9(c||null),c=r9().Td(),(c=g.hH(c,b.key))&&D9(c,1))}};
g.p(j9,g.S0);j9.prototype.H=function(){var a=this.Y.Zc("remote","receivers");a&&1<a.length&&!this.Y.Zc("remote","quickCast")?(this.F=g.Cb(a,this.B,this),g.U0(this,(0,g.I)(a,this.B)),a=this.Y.Zc("remote","currentReceiver"),g.T0(this,this.B(a)),this.enable(!0)):this.enable(!1)};
j9.prototype.B=function(a){return a.key};
j9.prototype.Oe=function(a){return"cast-selector-receiver"==a?g.T("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
j9.prototype.hd=function(a){g.S0.prototype.hd.call(this,a);this.Y.Ie("remote","currentReceiver",this.F[a]);this.A.Yb()};
g.C(k9,g.iH);g.h=k9.prototype;g.h.Td=function(a){return this.Wc.$_gs(a)};
g.h.contains=function(a){return!!this.Wc.$_c(a)};
g.h.get=function(a){return this.Wc.$_g(a)};
g.h.start=function(){this.Wc.$_st()};
g.h.po=function(a,b,c){this.Wc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Wc.$_r(a,b,c)};
g.h.ao=function(a,b,c,d){this.Wc.$_un(a,b,c,d)};
g.h.P=function(){for(var a=0,b=this.o.length;a<b;++a)this.Wc.$_ubk(this.o[a]);this.o.length=0;this.Wc=null;k9.R.P.call(this)};
g.h.EQ=function(){this.V("screenChange")};
g.h.UM=function(){this.V("onlineScreenChange")};
var q9=null,x9=[],z9=null,C9=null;g.C(J9,g.MF);g.h=J9.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,Q9(this,"play")):L9(this,"play"),O9(this,1,g.eI(K9(this))),this.V("remotePlayerChange")):N9(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,Q9(this,"pause")):L9(this,"pause"),O9(this,2,g.eI(K9(this))),this.V("remotePlayerChange")):N9(this,this.pause)};
g.h.XA=function(a){if(1==this.g){if(this.o){var b=K9(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.vb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,Q9(this,"seekTo",{newTime:a}))}else L9(this,"seekTo",{newTime:a});O9(this,3,a);this.V("remotePlayerChange")}else N9(this,g.ya(this.XA,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,Q9(this,"stopVideo")):L9(this,"stopVideo");var a=K9(this);a.index=-1;a.videoId="";g.cI(a);M9(this,a);this.V("remotePlayerChange")}else N9(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=K9(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.B)(function(){P9("set receiver volume: "+d)},this),(0,g.B)(function(){this.kc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.B)(function(){P9("set receiver muted: "+b)},this),(0,g.B)(function(){this.kc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);L9(this,"setVolume",e)}c.muted=b;c.volume=a;M9(this,c)}else N9(this,g.ya(this.setVolume,a,b))};
g.h.sA=function(a,b){if(1==this.g){var c=K9(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Mc(b.style),g.$b(d,c.o));L9(this,"setSubtitlesTrack",d);M9(this,c)}else N9(this,g.ya(this.sA,a,b))};
g.h.Ts=function(a,b){if(1==this.g){L9(this,"setAudioTrack",{videoId:a,audioTrackId:b.Nc.id});var c=K9(this);c.audioTrackId=b.Nc.id;M9(this,c)}else N9(this,g.ya(this.Ts,a,b))};
g.h.WA=function(a,b){if(1==this.g){if(a&&b){var c=K9(this);g.fI(c,a,b);M9(this,c)}L9(this,"previous")}else N9(this,g.ya(this.WA,a,b))};
g.h.VA=function(a,b){if(1==this.g){if(a&&b){var c=K9(this);g.fI(c,a,b);M9(this,c)}L9(this,"next")}else N9(this,g.ya(this.VA,a,b))};
g.h.Bv=function(){1==this.g?L9(this,"dismissAutoplay"):N9(this,this.Bv)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.V("proxyStateChange",a,this.g)}J9.R.dispose.call(this)};
g.h.P=function(){Eva(this);this.B=null;this.C.clear();I9(this,null);J9.R.P.call(this)};
g.h.Us=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.CB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.oN=function(a,b){this.V(a,b)};
g.h.aL=function(a){if(!a)this.Bk(null),I9(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=K9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)P9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,M9(this,b)}};
g.h.Bk=function(a){P9("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),Fva(this),this.V("remotePlayerChange")};
g.h.ZK=function(a){a?(Fva(this),this.V("remotePlayerChange")):this.Bk(null)};
g.h.nL=function(){var a=xva();a&&I9(this,a)};
g.h.kc=function(a){g.WG("CP",a)};
var T9=[];g.h=Rva.prototype;g.h.Ih=function(a,b,c){var d=this.g;if(g.t(c)?c:this.o)d="https://"+this.A+this.port+this.g;return g.Fg(d+a,b||{})};
g.h.Ss=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Mb:g.ya(this.zQ,c,!0),onError:g.ya(this.yQ,d),Xc:g.ya(this.AQ,d)};b&&(c.Rb=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.GE(a,c)};
g.h.zQ=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.yQ=function(a,b){a(Error("Request error: "+b.status))};
g.h.AQ=function(a){a(Error("request timed out"))};
g.C(V9,g.M);g.h=V9.prototype;g.h.P=function(){V9.R.P.call(this);this.A.stop();this.B.stop();this.L();this.g.unsubscribe("proxyStateChange",this.mz,this);this.g.unsubscribe("remotePlayerChange",this.Dk,this);this.g.unsubscribe("remoteQueueChange",this.xn,this);this.g.unsubscribe("autoplayUpNext",this.Ny,this);this.g.unsubscribe("previousNextChange",this.jz,this);this.g.unsubscribe("nowAutoplaying",this.bz,this);this.g.unsubscribe("autoplayDismissed",this.My,this);this.g=this.J=null};
g.h.IB=function(a,b){2==this.g.g||(Y9(this)?this.JG.apply(this,arguments):this.FG.apply(this,arguments))};
g.h.YK=function(a){this.IB("control_subtitles_set_track",g.Tb(a)?null:a)};
g.h.DA=function(){var a=this.Y.Zc("captions","track");g.Tb(a)||$9(this,a)};
g.h.FG=function(a,b){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":a$(this,this.Y.getCurrentTime());break;case "control_seek":a$(this,c[0]);break;case "control_subtitles_set_track":$9(this,c[0]);break;case "control_set_audio_track":c=c[0],Y9(this)&&this.g.Ts(Z9(this),c)}};
g.h.JG=function(a,b){if(1081!=K9(this.g).g||"control_seek"!=a){var c=Array.prototype.slice.call(arguments,1);switch(a){case "control_toggle_play_pause":K9(this.g).vb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.G.Pi(c[0],c[1]);break;case "control_subtitles_set_track":$9(this,c[0]);break;case "control_set_audio_track":c=c[0],Y9(this)&&this.g.Ts(Z9(this),c)}}};
g.h.az=function(a){if(Y9(this)){this.g.unsubscribe("remotePlayerChange",this.Dk,this);var b=Math.round(a.volume);a=!!a.muted;var c=K9(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.H.start();this.g.subscribe("remotePlayerChange",this.Dk,this)}};
g.h.nM=function(){g.Tb(this.C)||Vva(this,this.C);this.D=!1};
g.h.mz=function(a,b){this.B.stop();2==b&&this.zA()};
g.h.Dk=function(){if(Y9(this)){this.A.stop();var a=K9(this.g);switch(a.g){case 1081:X9(this,new g.LQ(8));break;case 1:this.yA();X9(this,new g.LQ(8));break;case 1083:case 3:X9(this,new g.LQ(9));break;case 0:X9(this,new g.LQ(2));this.G.stop();W9(this,this.Y.ha().lengthSeconds);break;case 1082:X9(this,new g.LQ(4));break;case 2:X9(this,new g.LQ(4));W9(this,g.eI(a));break;case -1:X9(this,new g.LQ(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.T("YTP_MDX_PLAYER_ERROR")},X9(this,new g.LQ(128,
a))}var a=K9(this.g).o,b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,Vva(this,a));a=K9(this.g);-1==a.volume||Math.round(this.Y.getVolume())==a.volume&&this.Y.Ge()==a.muted||this.H.isActive()||this.NA()}else Uva(this)};
g.h.jz=function(){this.Y.V("mdxpreviousnextchange")};
g.h.xn=function(){Y9(this)||Uva(this)};
g.h.xF=function(){this.g.Bv()};
g.h.Ny=function(a){a&&(a=g.GE("/watch_queue_ajax",{method:"GET",Rc:{action_get_watch_queue_item:1,video_id:a},Mb:(0,g.B)(this.pO,this)}))&&(this.L=(0,g.B)(a.abort,a))};
g.h.pO=function(a,b){var c=new g.cQ({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.Y.V("mdxautoplayupnext",c)};
g.h.bz=function(a){(0,window.isNaN)(a)||this.Y.V("mdxnowautoplaying",a)};
g.h.My=function(){this.Y.V("mdxautoplaycanceled")};
g.h.zS=function(a,b){-1==K9(this.g).g?a$(this,a):b&&this.g.XA(a)};
g.h.NA=function(){if(Y9(this)){var a=K9(this.g);this.o.Ba(this.M);a.muted?this.Y.mute():this.Y.xg();this.Y.setVolume(a.volume);this.M=this.o.U(this.Y,"onVolumeChange",this.az)}};
g.h.yA=function(){this.A.stop();if(!this.g.ma()){var a=K9(this.g);a.vb()&&X9(this,new g.LQ(8));W9(this,g.eI(a));this.A.start()}};
g.h.zA=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(b$,g.W);b$.prototype.B=function(a){Xva(this,a.state)};g.C(c$,g.BV);g.h=c$.prototype;g.h.create=function(){Tva("embedded"==g.X(this.g).g);this.D.push(g.$F("yt-remote-before-disconnect",this.VK,this));this.D.push(g.$F("yt-remote-connection-change",this.yN,this));this.D.push(g.$F("yt-remote-receiver-availability-change",this.kz,this));this.D.push(g.$F("yt-remote-auto-connect",this.wN,this));this.D.push(g.$F("yt-remote-receiver-resumed",this.vN,this));this.kz()};
g.h.load=function(){this.g.qp();c$.R.load.call(this);this.C=new V9(this,this.g,this.o);var a=(a=vva())?a.currentTime:0;var b=G9()?new J9(n9(),void 0):null;0==a&&b&&(a=g.eI(K9(b)));0!=a&&(this.H=a||0,this.g.V("progresssync",a,void 0));Wva(this,this.F,this.F);g.i2(this.g.app,6)};
g.h.unload=function(){this.g.V("mdxautoplaycanceled");this.B=this.A;g.Te(this.C,this.o);this.o=this.C=null;c$.R.unload.call(this);g.i2(this.g.app,5)};
g.h.P=function(){g.aG(this.D);c$.R.P.call(this)};
g.h.jl=function(a,b){this.loaded&&this.C.IB.apply(this.C,arguments)};
g.h.kG=function(){return this.loaded?this.C.suggestion:null};
g.h.Af=function(){return this.o?K9(this.o).Af:!1};
g.h.hasNext=function(){return this.o?K9(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.eS=function(){var a=K9(this.o),b=this.g.ha(),c=this.g.Ed(),d=b.clipEnd,b=b.clipStart,e=this.getCurrentTime(),f=a.getDuration();var k=a.H?a.B+((0,g.G)()-a.A)/1E3:a.B;var l=1>=lva(a)-this.getCurrentTime(),m=a.J,n=lva(a),a=0<a.C?a.C+((0,g.G)()-a.A)/1E3:a.C;return{allowSeeking:c,clipEnd:d,clipStart:b,current:e,displayedStart:-1,duration:f,ingestionTime:k,isPeggedToLive:l,loaded:m,seekableEnd:n,seekableStart:a}};
g.h.fS=function(){this.o&&this.o.VA()};
g.h.gS=function(){this.o&&this.o.WA()};
g.h.VK=function(a){1==a&&(this.J=this.o?K9(this.o):null)};
g.h.yN=function(){var a=G9()?new J9(n9(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.Se(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.ha().videoId&&this.g.gB(a.videoId,g.eI(a)));this.g.V("videodatachange","newdata",this.g.ha(),3)};
g.h.kz=function(){this.G=[this.A].concat(Sva());var a=S9()||this.A;d$(this,a);this.g.ya("onMdxReceiversChange")};
g.h.wN=function(){var a=S9();d$(this,a)};
g.h.vN=function(){this.B=S9()};
g.h.dS=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?U9():d$(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&U9(),!0):!1}};
g.h.hS=function(){L9(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Jd=function(){return!1};window._exportCheck==g.Ba&&g.u("ytmod.player.remote",c$,void 0);})(_yt_player);


}
/*
     FILE ARCHIVED ON 23:40:25 Apr 30, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:30:05 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 68.475
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.059
  cdx.remote: 0.053
  esindex: 0.008
  LoadShardBlock: 31.343 (3)
  PetaboxLoader3.datanode: 72.161 (5)
  load_resource: 238.437 (2)
  PetaboxLoader3.resolve: 146.837 (2)
*/