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

(function(g){var window=this;var QBa=function(a,b){return g.Vb(a,b)},m6=function(a){g.Gm(a,"zx",g.wb());
return a},n6=function(a,b,c){g.ya(c)||(c=[String(c)]);
g.Jm(a.g,b,c)},RBa=function(a,b){var c=[];
g.vk(b,function(a){try{var b=g.fD.prototype.l.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.eD(b)&&c.push(a):c.push(a)},a);
return c},SBa=function(a,b){var c=RBa(a,b);
(0,g.B)(c,function(a){g.fD.prototype.remove.call(this,a)},a)},TBa=function(a){if(a.yd){if(a.yd.locationOverrideToken)return{locationOverrideToken:a.yd.locationOverrideToken};
if(null!=a.yd.latitudeE7&&null!=a.yd.longitudeE7)return{latitudeE7:a.yd.latitudeE7,longitudeE7:a.yd.longitudeE7}}return null},UBa=function(a,b,c,d){var e=new g.xm(null,void 0);
a&&g.ym(e,a);b&&g.zm(e,b);c&&g.Am(e,c);d&&g.Bm(e,d);return e},VBa=function(a){g.bG[a]&&(a=g.bG[a],(0,g.B)(a,function(a){g.$F[a]&&delete g.$F[a]}),a.length=0)},WBa=function(a){var b=g.ZF();
if(b)if(b.clear(a),a)VBa(a);else for(var c in g.bG)VBa(c)},o6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.o=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.rm;this.g=this.l="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",XBa(this,a.capabilities||""),YBa(this,a.experiments||""),this.l=a.remoteControllerUrl||"",
this.g=a.localChannelEncryptionKey||"")},XBa=function(a,b){a.capabilities.clear();
(0,g.Ld)(b.split(","),g.Ea(QBa,ZBa)).forEach(function(b){a.capabilities.add(b)})},YBa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},p6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},q6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},$Ba=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},aCa=function(a){return new p6(a)},bCa=function(a){return g.ya(a)?(0,g.G)(a,aCa):[]},r6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},s6=function(a){return g.ya(a)?"["+(0,g.G)(a,r6).join(",")+"]":"null"},t6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},cCa=function(a){return(0,g.G)(a,function(a){return{key:a.id,
name:a.name}})},u6=function(a,b){return g.La(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},v6=function(a,b){return g.La(a,function(a){return q6(a,b)})},dCa=function(){var a=(0,g.VG)();
a&&SBa(a,a.g.Nd(!0))},w6=function(){var a=g.YG("yt-remote-connected-devices")||[];
g.gb(a);return a},eCa=function(a){if(g.Qa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.G)(a,function(a,b){return 0==b?a:a.substring(c.length)})},fCa=function(a){g.XG("yt-remote-connected-devices",a,86400)},y6=function(){if(x6)return x6;
var a=g.YG("yt-remote-device-id");a||(a=t6(),g.XG("yt-remote-device-id",a,31536E3));for(var b=w6(),c=1,d=a;g.Pa(b,d);)c++,d=a+"#"+c;return x6=d},z6=function(){var a=w6(),b=y6();
g.Pa(a,b);g.$G()&&g.jb(a,b);a=eCa(a);if(g.Qa(a))try{g.IG("remote_sid")}catch(c){}else try{g.HG("remote_sid",a.join(","),-1)}catch(c){}},gCa=function(){return g.YG("yt-remote-session-browser-channel")},hCa=function(){return g.YG("yt-remote-local-screens")||[]},iCa=function(){g.XG("yt-remote-lounge-token-expiration",!0,86400)},jCa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.G)(hCa(),function(a){return a.loungeToken}),c=(0,g.G)(a,function(a){return a.loungeToken});
(0,g.dm)(c,function(a){return!g.Pa(b,a)})&&iCa();
g.XG("yt-remote-local-screens",a,31536E3)},kCa=function(a,b){g.XG("yt-remote-session-browser-channel",a);
g.XG("yt-remote-session-screen-id",b);var c=w6(),d=y6();g.Pa(c,d)||c.push(d);fCa(c);z6()},A6=function(a){a||(g.ZG("yt-remote-session-screen-id"),g.ZG("yt-remote-session-video-id"));
z6();a=w6();g.Ua(a,y6());fCa(a)},lCa=function(){if(!B6){var a=g.qD();
a&&(B6=new g.$C(a))}return B6?!!B6.get("yt-remote-use-staging-server"):!1},mCa=function(){var a=window.document.createElement("a");
g.Zc(a,"https://web.archive.org/web/20180501000024/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ab(a)},nCa=function(a,b){var c=g.Ed("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.ad(c,g.de("https://web.archive.org/web/20180501000024/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},oCa=function(){var a=mCa(),b=window.document.getElementById(a),c=b&&g.kF(b,"loaded");
c||b&&!c||(b=nCa(a,function(){g.kF(b,"loaded")||(g.jF(b,"loaded","true"),g.fG(a),g.ZD(g.Ea(WBa,a),0))}))},C6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},pCa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},D6=function(a){a.length?qCa(a.shift(),function(){D6(a)}):E6()},rCa=function(a){return"chrome-extension://"+a+F6},qCa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},G6=function(a){return 0<=window.navigator.userAgent.indexOf(a)},E6=function(){var a=pCa();
a&&a(!1,"No cast extension found")},H6=function(){if(sCa){var a=2,b=pCa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;qCa("//web.archive.org/web/20180501000024/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",E6,c)}},tCa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(H6(),a({command:"cast.sender.init"}))},uCa=function(){H6();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);D6(["//web.archive.org/web/20180501000024/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+F6,"//web.archive.org/web/20180501000024/https://www.gstatic.com/eureka/clank"+F6])},I6=function(a,b,c){g.K.call(this);
this.C=null!=c?(0,g.z)(a,c):a;this.dd=b;this.B=(0,g.z)(this.yI,this);this.g=!1;this.l=0;this.o=this.ya=null;this.A=[]},J6=function(){},K6=function(a,b,c,d){this.g=a;
this.o=b;this.D=c;this.C=d||1;this.A=45E3;this.W=new g.Nm(this);this.l=new g.ug;this.l.setInterval(250)},wCa=function(a,b,c){a.qj=1;
a.Xg=m6(b.clone());a.yi=c;a.B=!0;vCa(a,null)},L6=function(a,b,c,d,e){a.qj=1;
a.Xg=m6(b.clone());a.yi=null;a.B=c;e&&(a.SC=!1);vCa(a,d)},vCa=function(a,b){a.Yj=(0,g.F)();
M6(a);a.vh=a.Xg.clone();n6(a.vh,"t",a.C);a.Zl=0;a.Pc=a.g.Kq(a.g.Tl()?b:null);0<a.sr&&(a.Qo=new g.Vk((0,g.z)(a.fE,a,a.Pc),a.sr));a.W.T(a.Pc,"readystatechange",a.UT);var c=a.Yh?g.cc(a.Yh):{};a.yi?(a.Ep="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Pc.send(a.vh,a.Ep,a.yi,c)):(a.Ep="GET",a.SC&&!g.Ad&&(c.Connection="close"),a.Pc.send(a.vh,a.Ep,null,c));a.g.pf(1)},zCa=function(a,b,c){for(var d=!0;!a.Lh&&a.Zl<c.length;){var e=xCa(a,c);
if(e==N6){4==b&&(a.Yg=4,O6(15),d=!1);break}else if(e==yCa){a.Yg=4;O6(16);d=!1;break}else P6(a,e)}4==b&&0==c.length&&(a.Yg=1,O6(17),d=!1);a.vf=a.vf&&d;d||(Q6(a),R6(a))},xCa=function(a,b){var c=a.Zl,d=b.indexOf("\n",c);
if(-1==d)return N6;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return yCa;d+=1;if(d+c>b.length)return N6;var e=b.substr(d,c);a.Zl=d+c;return e},BCa=function(a,b){a.Yj=(0,g.F)();
M6(a);var c=b?window.location.hostname:"";a.vh=a.Xg.clone();g.Gm(a.vh,"DOMAIN",c);g.Gm(a.vh,"t",a.C);try{a.wf=new window.ActiveXObject("htmlfile")}catch(n){Q6(a);a.Yg=7;O6(22);R6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in S6)k=S6[l];else if(l in ACa)k=S6[l]=ACa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=S6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.bd(g.wc("b/12014412"),d);a.wf.open();a.wf.write(g.Tc(c));a.wf.close();a.wf.parentWindow.m=(0,g.z)(a.cT,a);a.wf.parentWindow.d=(0,g.z)(a.eC,a,!0);a.wf.parentWindow.rpcClose=(0,g.z)(a.eC,a,!1);c=a.wf.createElement("DIV");a.wf.parentWindow.document.body.appendChild(c);d=g.Jc(a.vh.toString());d=g.qb(g.Gc(d));d=g.bd(g.wc("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=g.Tc(d);
a.g.pf(1)},M6=function(a){a.Xu=(0,g.F)()+a.A;
CCa(a,a.A)},CCa=function(a,b){if(null!=a.sk)throw Error("WatchDog timer not null");
a.sk=T6((0,g.z)(a.sT,a),b)},U6=function(a){a.sk&&(g.w.clearTimeout(a.sk),a.sk=null)},R6=function(a){a.g.jy()||a.Lh||a.g.Bo(a)},Q6=function(a){U6(a);
g.cf(a.Qo);a.Qo=null;a.l.stop();g.Tm(a.W);if(a.Pc){var b=a.Pc;a.Pc=null;b.abort();b.dispose()}a.wf&&(a.wf=null)},P6=function(a,b){try{a.g.XB(a,b),a.g.pf(4)}catch(c){}},ECa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;DCa(a,b,function(e){e?c(!0):g.w.setTimeout(function(){ECa(a,b,c,d,f)},f)})}},DCa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{V6(d),c(!0)}catch(e){}};
d.onerror=function(){try{V6(d),c(!1)}catch(e){}};
d.onabort=function(){try{V6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{V6(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},V6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},FCa=function(a){this.g=a;
this.l=new J6},GCa=function(a){var b=W6(a.g,a.yk,"/mail/images/cleardot.gif");
m6(b);ECa(b.toString(),5E3,(0,g.z)(a.LH,a),3,2E3);a.pf(1)},Y6=function(a){var b=a.g.H;
if(null!=b)O6(5),b?(O6(11),X6(a.g,a,!1)):(O6(12),X6(a.g,a,!0));else if(a.oe=new K6(a,void 0,void 0,void 0),a.oe.Yh=a.qr,b=a.g,b=W6(b,b.Tl()?a.Wk:null,a.rr),O6(5),!g.yd||g.sc(10))n6(b,"TYPE","xmlhttp"),L6(a.oe,b,!1,a.Wk,!1);else{n6(b,"TYPE","html");var c=a.oe;a=!!a.Wk;c.qj=3;c.Xg=m6(b.clone());BCa(c,a)}},Z6=function(a,b,c){this.g=1;
this.l=[];this.A=[];this.B=new J6;this.F=a||null;this.H=null!=b?b:null;this.C=c||!1},HCa=function(a,b){this.g=a;
this.map=b;this.context=null},ICa=function(a){g.ef.call(this,"statevent",a)},JCa=function(a,b){g.ef.call(this,"timingevent",a);
this.size=b},KCa=function(a){g.ef.call(this,"serverreachability",a)},NCa=function(a){LCa(a);
if(3==a.g){var b=a.Fl++,c=a.xn.clone();g.Gm(c,"SID",a.o);g.Gm(c,"RID",b);g.Gm(c,"TYPE","terminate");$6(a,c);b=new K6(a,a.o,b,void 0);b.qj=2;b.Xg=m6(c.clone());(new window.Image).src=b.Xg;b.Yj=(0,g.F)();M6(b)}MCa(a)},OCa=function(a){a.gI(1,0);
a.xn=W6(a,null,a.pr);a7(a)},LCa=function(a){a.Mg&&(a.Mg.abort(),a.Mg=null);
a.uc&&(a.uc.cancel(),a.uc=null);a.mg&&(g.w.clearTimeout(a.mg),a.mg=null);b7(a);a.Td&&(a.Td.cancel(),a.Td=null);a.Og&&(g.w.clearTimeout(a.Og),a.Og=null)},PCa=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.l.push(new HCa(a.RO++,b));2!=a.g&&3!=a.g||a7(a)},a7=function(a){a.Td||a.Og||(a.Og=T6((0,g.z)(a.cC,a),0),a.dj=0)},RCa=function(a,b){if(1==a.g){if(!b){a.Fl=Math.floor(1E5*Math.random());
var c=a.Fl++,d=new K6(a,"",c,void 0);d.Yh=null;var e=c7(a),f=a.xn.clone();g.Gm(f,"RID",c);g.Gm(f,"CVER","1");$6(a,f);wCa(d,f,e);a.Td=d;a.g=2}}else 3==a.g&&(b?QCa(a,b):0==a.l.length||a.Td||QCa(a))},QCa=function(a,b){if(b)if(6<a.Nh){a.l=a.A.concat(a.l);
a.A.length=0;var c=a.Fl-1;var d=c7(a)}else c=b.D,d=b.yi;else c=a.Fl++,d=c7(a);var e=a.xn.clone();g.Gm(e,"SID",a.o);g.Gm(e,"RID",c);g.Gm(e,"AID",a.Ej);$6(a,e);c=new K6(a,a.o,c,a.dj+1);c.Yh=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Td=c;wCa(c,e,d)},$6=function(a,b){if(a.pd){var c=a.pd.Px();
c&&g.Jb(c,function(a,c){g.Gm(b,c,a)})}},c7=function(a){var b=Math.min(a.l.length,1E3),c=["count="+b];
if(6<a.Nh&&0<b){var d=a.l[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.l[e].g,k=a.l[e].map;f=6>=a.Nh?e:f-d;try{g.Jb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.A=a.A.concat(a.l.splice(0,b));
return c.join("&")},SCa=function(a){a.uc||a.mg||(a.D=1,a.mg=T6((0,g.z)(a.bC,a),0),a.Oi=0)},d7=function(a){if(a.uc||a.mg||3<=a.Oi)return!1;
a.D++;a.mg=T6((0,g.z)(a.bC,a),TCa(a,a.Oi));a.Oi++;return!0},X6=function(a,b,c){a.Dp=c;
a.If=b.rg;a.C||OCa(a)},b7=function(a){null!=a.Ph&&(g.w.clearTimeout(a.Ph),a.Ph=null)},TCa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},e7=function(a,b){if(2==b||9==b){var c=null;
a.pd&&(c=null);var d=(0,g.z)(a.OU,a);c||(c=new g.xm("//web.archive.org/web/20180501000024/https://www.google.com/images/cleardot.gif"),m6(c));DCa(c.toString(),1E4,d)}else O6(2);UCa(a,b)},UCa=function(a,b){a.g=0;
a.pd&&a.pd.Jw(b);MCa(a);LCa(a)},MCa=function(a){a.g=0;
a.If=-1;if(a.pd)if(0==a.A.length&&0==a.l.length)a.pd.yq();else{g.Xa(a.A);var b=g.Xa(a.l);a.A.length=0;a.l.length=0;a.pd.yq(b)}},W6=function(a,b,c){var d=g.Hm(c);
if(""!=d.l)b&&g.zm(d,b+"."+d.l),g.Am(d,d.B);else{var e=window.location;d=UBa(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c)}a.Jk&&g.Jb(a.Jk,function(a,b){g.Gm(d,b,a)});
g.Gm(d,"VER",a.Nh);$6(a,d);return d},T6=function(a,b){if(!g.Aa(a))throw Error("Fn must not be null and must be a function");
return g.w.setTimeout(function(){a()},b)},O6=function(a){f7.dispatchEvent(new ICa(f7,a))},VCa=function(){},WCa=function(a,b){this.action=a;
this.params=b||{}},g7=function(a,b){g.K.call(this);
this.g=new g.$t(this.SS,0,this);g.M(this,this.g);this.dd=5E3;this.l=0;if(g.Aa(a))b&&(a=(0,g.z)(a,b));else if(a&&g.Aa(a.handleEvent))a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.o=a},h7=function(a,b,c){this.K=a;
this.C=b;this.o=new g.ZC;this.l=new g7(this.tV,this);this.g=this.Wa=null;this.I=!1;this.B=null;this.H="";this.F=this.A=0;this.D=[];this.L=c||!1},XCa=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.Dp,sessionId:a.g.o,arrayId:a.g.Ej}},YCa=function(a,b){a.F=b||0;
a.l.stop();a.g&&(3==a.g.g&&RCa(a.g),NCa(a.g));a.F=0},i7=function(a){return!!a.g&&3==a.g.g},ZCa=function(a,b){(a.C.loungeIdToken=b)||a.l.stop()},j7=function(a){this.port=this.domain="";
this.g="/api/lounge";this.l=!0;a=a||window.document.location.href;var b=g.Kg(a)||"";b&&(this.port=":"+b);this.domain=g.Jg(a)||"";a=g.Hb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.zb(a,"10.0")&&(this.l=!1))},k7=function(a,b){var c=a.g;
if(g.t(void 0)?0:a.l)c="https://"+a.domain+a.port+a.g;return g.Ug(c+b,{})},l7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ea(a.A,d,!0),onError:g.Ea(a.o,e),ud:g.Ea(a.B,e)};c&&(a.Kb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.oE(b,a)},cDa=function(){var a=$Ca;
aDa();m7.push(a);bDa(m7)},n7=function(a,b){aDa();
var c=m7,d=dDa(a,String(b));g.Qa(c)?eDa(d):(bDa(c),(0,g.B)(c,function(a){a(d)}))},aDa=function(){m7||(m7=g.x("yt.mdx.remote.debug.handlers_")||[],g.va("yt.mdx.remote.debug.handlers_",m7,void 0))},eDa=function(a){var b=(o7+1)%50;
o7=b;p7[b]=a;q7||(q7=49==b)},bDa=function(a){var b=p7;
if(b[0]){var c=o7,d=q7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.B)(a,function(a){a(e)})}while(d!=c);
p7=Array(50);o7=-1;q7=!1}},dDa=function(a,b){var c=((0,g.F)()-fDa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},r7=function(a){g.RF.call(this);
this.D=a;this.g=[]},gDa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},hDa=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Ld)(a.g,function(a){return!!u6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=gDa(a,b[d])||c;return c},iDa=function(a,b){var c=a.g.length;
a.g=(0,g.Ld)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c},s7=function(a,b,c,d){g.RF.call(this);
this.C=a;this.B=b;this.o=c;this.A=d;this.l=0;this.g=null;this.ya=window.NaN},u7=function(a){r7.call(this,"LocalScreenService");
this.o=a;this.l=window.NaN;t7(this);this.info("Initializing with "+s6(this.g))},jDa=function(a){if(a.g.length){var b=(0,g.G)(a.g,function(a){return a.id}),c=k7(a.o,"/pairing/get_lounge_token_batch");
l7(a.o,c,{screen_ids:b.join(",")},(0,g.z)(a.LI,a),(0,g.z)(a.KI,a))}},t7=function(a){var b=bCa(hCa());
b=(0,g.Ld)(b,function(a){return!a.uuid});
return hDa(a,b)},v7=function(a,b){jCa((0,g.G)(a.g,$Ba));
b&&iCa()},x7=function(a,b){g.RF.call(this);
this.C=b;var c=g.YG("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Pa(c,l)}this.g=d;this.B=a;this.o=this.A=window.NaN;this.l=null;w7("Initialized with "+g.Bg(this.g))},kDa=function(a,b,c){var d=k7(a.B,"/pairing/get_screen_availability");
l7(a.B,d,{lounge_token:b.token},(0,g.z)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},y7=function(a,b){a:if(g.Nb(b)!=g.Nb(a.g))var c=!1;
else{c=g.Rb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(w7("Updated online screens: "+g.Bg(a.g)),a.g=b,a.R("screenChange"));lDa(a)},z7=function(a){(0,window.isNaN)(a.o)||g.aE(a.o);
a.o=g.ZD((0,g.z)(a.ou,a),0<a.A&&a.A<(0,g.F)()?2E4:1E4)},w7=function(a){n7("OnlineScreenService",a)},mDa=function(a){var b={};
(0,g.B)(a.C(),function(a){a.token?b[a.token]=a.id:this.fc("Requesting availability of screen w/o lounge token.")});
return b},lDa=function(a){a=g.Rb(g.Kb(a.g,function(a){return a}));
g.gb(a);a.length?g.XG("yt-remote-online-screen-ids",a.join(","),60):g.ZG("yt-remote-online-screen-ids")},A7=function(a){r7.call(this,"ScreenService");
this.C=a;this.l=this.o=null;this.A=[];this.B={};nDa(this)},pDa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.he();if(k=(c?v6(k,c):null)||v6(k,b)){k.uuid=b;var l=B7(a,k);kDa(a.l,l,function(a){e(a?l:null)})}else c?oDa(a,c,(0,g.z)(function(a){var f=B7(this,new p6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));kDa(this.l,f,function(a){e(a?f:null)})},a),f):e(null)},qDa=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},oDa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Kb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.oE(k7(a.C,"/pairing/get_lounge_token_batch"),e)},rDa=function(a){a.g=a.o.he();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+s6(a.g))},nDa=function(a){C7(a);
a.o=new u7(a.C);a.o.subscribe("screenChange",(0,g.z)(a.cJ,a));rDa(a);a.A=bCa(g.YG("yt-remote-automatic-screen-cache")||[]);C7(a);a.info("Initializing automatic screens: "+s6(a.A));a.l=new x7(a.C,(0,g.z)(a.he,a,!0));a.l.subscribe("screenChange",(0,g.z)(function(){this.R("onlineScreenChange")},a))},B7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=v6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.XG("yt-remote-automatic-screen-cache",(0,g.G)(a.A,$Ba)));C7(a);a.B[b.uuid]=b.id;g.XG("yt-remote-device-id-map",a.B,31536E3);return b},C7=function(a){a.B=g.YG("yt-remote-device-id-map")||{}},D7=function(a,b,c){g.RF.call(this);
this.L=c;this.H=a;this.l=b;this.o=null},E7=function(a,b){n7(a.L,b)},F7=function(a,b){D7.call(this,a,b,"CastSession");
this.g=null;this.A=0;this.C=(0,g.z)(this.zV,this);this.B=(0,g.z)(this.ET,this);this.A=g.ZD((0,g.z)(function(){sDa(this,null)},this),12E4)},tDa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Bg(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.y,(0,g.z)(function(){E7(this,"Failed to send message: getMdxSessionStatus.")},a)):E7(a,"Sending yt message without session: "+g.Bg(b))},sDa=function(a,b){g.aE(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.o||a.o.id!=b){var c=(0,g.z)(a.Co,a),d=(0,g.z)(a.ne,a);a.ay(b,c,d,5)}}else a.ne(Error("Waiting for session status timed out."))},G7=function(a,b,c){D7.call(this,a,b,"DialSession");
this.A=this.F=null;this.I="";this.N=c;this.B=null;this.D=g.y;this.C=window.NaN;this.K=(0,g.z)(this.CV,this);this.g=g.y},uDa=function(a){a.g=a.H.mE(a.I,a.l.label,a.l.friendlyName,(0,g.z)(function(a){this.g=g.y;
this.Co(a)},a),(0,g.z)(function(a){this.g=g.y;
this.ne(a)},a))},vDa=function(a){var b={};
b.pairingCode=a.I;b.theme=a.N;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}lCa()&&(b.env_useStageMdx=1);return g.Sg(b)},H7=function(a,b){D7.call(this,a,b,"ManualSession");
this.g=g.ZD((0,g.z)(this.Gj,this,null),150)},I7=function(a,b,c,d){g.RF.call(this);
this.l=a;this.D=b||"233637DE";this.C=c||"cl";this.F=d||!1;this.g=null;this.B=!1;this.o=[];this.A=(0,g.z)(this.fS,this)},wDa=function(a,b){return b?g.La(a.o,function(a){return q6(b,a.label)},a):null},J7=function(a){n7("Controller",a)},$Ca=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},K7=function(a){return a.B||!!a.o.length||!!a.g},L7=function(a,b,c){b!=a.g&&(g.cf(a.g),(a.g=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.l):a.R("yt-remote-cast2-receiver-selected",
b.l),b.subscribe("sessionScreen",(0,g.z)(a.ZB,a,b)),b.o?a.R("yt-remote-cast2-session-change",b.o):c&&a.g.Gj(null)):a.R("yt-remote-cast2-session-change",null))},xDa=function(a){var b=a.l.lE(),c=a.g&&a.g.l;
a=(0,g.G)(b,function(a){c&&q6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=wDa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},DDa=function(a,b,c,d,e,f,k){yDa()?zDa(b,e,f,k)&&(N7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?ADa(a,c):(window.__onGCastApiAvailable=function(b,d){b?ADa(a,c):(O7("Failed to load cast API: "+d),P7(!1),N7(!1),g.ZG("yt-remote-cast-available"),g.ZG("yt-remote-cast-receiver"),BDa(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20180501000024/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):oCa():G6("CriOS")?tCa():G6("Android")&&G6("Chrome/")&&window.navigator.presentation?uCa():window.chrome&&window.navigator.presentation&&!G6("Edge")?(H6(),D6(CDa.map(rCa))):E6())):M7("Cannot initialize because not running Chrome")},BDa=function(){M7("dispose");
var a=Q7();a&&a.dispose();g.va("yt.mdx.remote.cloudview.instance_",null,void 0);EDa(!1);g.dG(R7);R7.length=0},S7=function(){return!!g.YG("yt-remote-cast-installed")},FDa=function(){var a=g.YG("yt-remote-cast-receiver");
return a?a.friendlyName:null},GDa=function(){M7("clearCurrentReceiver");
g.ZG("yt-remote-cast-receiver")},HDa=function(){return S7()?Q7()?Q7().getCastSession():(O7("getCastSelector: Cast is not initialized."),null):(O7("getCastSelector: Cast API is not installed!"),null)},U7=function(){S7()?Q7()?T7()?(M7("Requesting cast selector."),Q7().requestSession()):(M7("Wait for cast API to be ready to request the session."),R7.push(g.cG("yt-remote-cast2-api-ready",U7))):O7("requestCastSelector: Cast is not initialized."):O7("requestCastSelector: Cast API is not installed!")},V7=
function(a,b){T7()?Q7().setConnectedScreenStatus(a,b):O7("setConnectedScreenStatus called before ready.")},yDa=function(){var a=0<=g.Hb.search(/ (CrMo|Chrome|CriOS)\//);
return g.GI||a},IDa=function(a,b){Q7().init(a,b)},zDa=function(a,b,c,d){var e=!1;
Q7()||(a=new I7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.XG("yt-remote-cast-available",a);g.gG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){M7("onReceiverSelected: "+a.friendlyName);
g.XG("yt-remote-cast-receiver",a);g.gG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){M7("onReceiverResumed: "+a.friendlyName);
g.XG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){M7("onSessionChange: "+r6(a));
a||g.ZG("yt-remote-cast-receiver");g.gG("yt-remote-cast2-session-change",a)}),g.va("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
M7("cloudview.createSingleton_: "+e);return e},Q7=function(){return g.x("yt.mdx.remote.cloudview.instance_")},ADa=function(a,b){P7(!0);
N7(!1);IDa(a,function(a){a?(EDa(!0),g.fG("yt-remote-cast2-api-ready")):(O7("Failed to initialize cast API."),P7(!1),g.ZG("yt-remote-cast-available"),g.ZG("yt-remote-cast-receiver"),BDa());b(a)})},M7=function(a){n7("cloudview",a)},O7=function(a){n7("cloudview",a)},P7=function(a){M7("setCastInstalled_ "+a);
g.XG("yt-remote-cast-installed",a)},T7=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},EDa=function(a){M7("setApiReady_ "+a);
g.va("yt.mdx.remote.cloudview.apiReady_",a,void 0)},N7=function(a){g.va("yt.mdx.remote.cloudview.initializing_",a,void 0)},W7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.g=-1;this.muted=!1;this.audioTrackId=null;this.D=this.F=0;this.l=null;this.hasNext=this.Lf=!1;this.I=this.H=this.o=this.B=0;this.A=window.NaN;this.C=!1;this.reset(a)},X7=function(a){a.audioTrackId=null;
a.l=null;a.g=-1;a.Lf=!1;a.hasNext=!1;a.F=0;a.D=(0,g.F)();a.B=0;a.o=0;a.H=0;a.I=0;a.A=window.NaN;a.C=!1},Y7=function(a){return a.jb()?((0,g.F)()-a.D)/1E3:0},Z7=function(a,b){a.F=b;
a.D=(0,g.F)()},$7=function(a){switch(a.g){case 1:case 1081:return((0,g.F)()-a.D)/1E3+a.F;
case -1E3:return 0}return a.F},a8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&X7(a)},b8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.g;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.dc(a.l);b.hasPrevious=a.Lf;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.D;b.seekableStart=a.B;b.seekableEnd=a.o;b.duration=a.H;b.loadedTime=a.I;b.liveIngestionTime=a.A;return b},d8=function(a,b){g.RF.call(this);
this.g=0;this.A=a;this.C=[];this.B=new g.pC;this.o=this.l=null;this.H=(0,g.z)(this.BP,this);this.D=(0,g.z)(this.Il,this);this.F=(0,g.z)(this.AP,this);this.I=(0,g.z)(this.NP,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.ev,this),JDa(this))):c=3;0!=c&&(b?this.ev(c):g.ZD((0,g.z)(function(){this.ev(c)},this),0));
var d=HDa();d&&c8(this,d);this.subscribe("yt-remote-cast2-session-change",this.I)},e8=function(a){return new W7(a.A.getPlayerContextData())},JDa=function(a){(0,g.B)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.C.push(this.A.subscribe(a,g.Ea(this.aS,a),this))},a)},KDa=function(a){(0,g.B)(a.C,function(a){this.A.unsubscribeByKey(a)},a);
a.C.length=0},f8=function(a,b){50>a.B.Bc()&&g.rC(a.B,b)},h8=function(a,b,c){var d=e8(a);
Z7(d,c);-1E3!=d.g&&(d.g=b);g8(a,d)},i8=function(a,b,c){a.A.sendMessage(b,c)},g8=function(a,b){KDa(a);
a.A.setPlayerContextData(b8(b));JDa(a)},c8=function(a,b){a.o&&(a.o.removeUpdateListener(a.H),a.o.removeMediaListener(a.D),a.Il(null));
a.o=b;a.o&&(n7("CP","Setting cast session: "+a.o.sessionId),a.o.addUpdateListener(a.H),a.o.addMediaListener(a.D),a.o.media.length&&a.Il(a.o.media[0]))},LDa=function(a){var b=a.l.media,c=a.l.customData;
if(b&&c){var d=e8(a);b.contentId!=d.videoId&&n7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;Z7(d,a.l.getEstimatedTime());g8(a,d)}else n7("CP","No cast media video. Ignoring state update.")},j8=function(a,b,c){return(0,g.z)(function(a){this.fc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.fc("Retrying "+b+" using MDx browser channel."),i8(this,b,c))},a)},k8=function(a,b,c){g.RF.call(this);
this.B=window.NaN;this.N=!1;this.I=this.H=this.K=this.L=window.NaN;this.U=[];this.A=this.D=this.o=this.Xa=this.g=null;this.pa=a;this.U.push(g.AF(window,"beforeunload",(0,g.z)(this.CI,this)));this.l=[];this.Xa=new W7;this.Z=b.id;this.g=MDa(this,c);this.g.subscribe("handlerOpened",this.FP,this);this.g.subscribe("handlerClosed",this.CP,this);this.g.subscribe("handlerError",this.DP,this);this.g.subscribe("handlerMessage",this.EP,this);ZCa(this.g,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.Xa.videoId;g.$G()&&g.XG("yt-remote-session-video-id",a)},this)},l8=function(a){n7("conn",a)},MDa=function(a,b){return new h7(k7(a.pa,"/bc"),b)},m8=function(a,b){a.R("proxyStateChange",b)},NDa=function(a){a.B=g.ZD((0,g.z)(function(){l8("Connecting timeout");
this.C(1)},a),2E4)},n8=function(a){g.aE(a.B);
a.B=window.NaN},o8=function(a){g.aE(a.L);
a.L=window.NaN},ODa=function(a){p8(a);
a.K=g.ZD((0,g.z)(function(){q8(this,"getNowPlaying")},a),2E4)},p8=function(a){g.aE(a.K);
a.K=window.NaN},QDa=function(a,b){b&&(n8(a),o8(a));
b==(i7(a.g)&&(0,window.isNaN)(a.B))?b&&(m8(a,1),q8(a,"getSubtitlesTrack")):b?(a.X()&&a.Xa.reset(),m8(a,1),q8(a,"getNowPlaying"),PDa(a)):a.C(1)},RDa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Xa.videoId&&(g.Yb(b.params)?a.Xa.l=null:a.Xa.l=b.params,a.R("remotePlayerChange"))},SDa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.Xa.listId=b.params.listId||a.Xa.listId;a8(a.Xa,c,d);a.R("remoteQueueChange")},UDa=function(a,b){b.params=b.params||{};
SDa(a,b);TDa(a,b);a.R("autoplayDismissed")},TDa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
Z7(a.Xa,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.Xa.g&&(c=-1E3);a.Xa.g=c;c=Number(b.params.loadedTime);a.Xa.I=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.Xa.H=(0,window.isNaN)(c)?0:c;c=a.Xa;var d=Number(b.params.liveIngestionTime);c.A=d;c.C=(0,window.isNaN)(d)?!1:!0;c=a.Xa;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.B=(0,window.isNaN)(d)?0:d;c.o=(0,window.isNaN)(e)?0:e;1==a.Xa.g?ODa(a):p8(a);
a.R("remotePlayerChange")},VDa=function(a,b){if(-1E3!=a.Xa.g){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Xa.g=c;c=(0,window.parseInt)(b.params.currentTime,10);Z7(a.Xa,(0,window.isNaN)(c)?0:c);a.R("remotePlayerChange")}},WDa=function(a,b){var c="true"==b.params.muted;
a.Xa.volume=(0,window.parseInt)(b.params.volume,10);a.Xa.muted=c;a.R("remotePlayerChange")},XDa=function(a,b){a.D=b.params.videoId;
a.R("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},YDa=function(a,b){var c="true"==b.params.hasNext;
a.Xa.Lf="true"==b.params.hasPrevious;a.Xa.hasNext=c;a.R("previousNextChange")},PDa=function(a){g.aE(a.I);
a.I=g.ZD((0,g.z)(a.C,a,1),864E5)},q8=function(a,b,c){c?l8("Sending: action="+b+", params="+g.Bg(c)):l8("Sending: action="+b);
a.g.sendMessage(b,c)},r8=function(a){r7.call(this,"ScreenServiceProxy");
this.cd=a;this.l=[];this.l.push(this.cd.$_s("screenChange",(0,g.z)(this.xV,this)));this.l.push(this.cd.$_s("onlineScreenChange",(0,g.z)(this.AR,this)))},cEa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.TD("MDX_CONFIG")||b;dCa();z6();s8||(s8=new j7(b?b.loungeApiHost:void 0),lCa()&&(s8.g="/api/loungedev"));t8||(t8=g.x("yt.mdx.remote.deferredProxies_")||[],g.va("yt.mdx.remote.deferredProxies_",t8,void 0));ZDa();var c=u8();if(!c){var d=new A7(s8);g.va("yt.mdx.remote.screenService_",d,void 0);c=u8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);DDa(a,d,function(a){a?v8()&&V7(v8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.gG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.va("yt.mdx.remote.initialized_",!0,void 0),w8("Initializing: "+g.Bg(b)),x8.push(g.cG("yt-remote-cast2-availability-change",function(){g.gG("yt-remote-receiver-availability-change")})),x8.push(g.cG("yt-remote-cast2-receiver-selected",function(){y8(null);
g.gG("yt-remote-auto-connect","cast-selector-receiver")})),x8.push(g.cG("yt-remote-cast2-receiver-resumed",function(){g.gG("yt-remote-receiver-resumed","cast-selector-receiver")})),x8.push(g.cG("yt-remote-cast2-session-change",$Da)),x8.push(g.cG("yt-remote-connection-change",function(a){a?V7(v8(),"YouTube TV"):z8()||(V7(null,null),GDa())})),a=A8(),b.isAuto&&(a.id+="#dial"),g.XF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),w8(" -- with channel params: "+
g.Bg(a)),aEa(a),c.start(),v8()||bEa())},eEa=function(){var a=dEa();
S7()&&g.YG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},dEa=function(){var a=u8().cd.$_gos();
var b=B8();b&&C8()&&(u6(a,b)||a.push(b));return cCa(a)},D8=function(){var a=fEa();
!a&&S7()&&FDa()&&(a={key:"cast-selector-receiver",name:FDa()});return a},fEa=function(){var a=dEa(),b=B8();
b||(b=z8());return g.La(a,function(a){return b&&q6(b,a.key)?!0:!1})},B8=function(){var a=v8();
if(!a)return null;var b=u8().he();return v6(b,a)},$Da=function(a){w8("remote.onCastSessionChange_: "+r6(a));
if(a){var b=B8();b&&b.id==a.id?V7(b.id,"YouTube TV"):(b&&E8(),F8(a,1))}else C8()&&E8()},E8=function(){T7()?Q7().stopSession():O7("stopSession called before API ready.");
var a=C8();a&&(a.disconnect(1),G8(null))},H8=function(){var a=C8();
return!!a&&3!=a.getProxyState()},w8=function(a){n7("remote",a)},u8=function(){if(!I8){var a=g.x("yt.mdx.remote.screenService_");
I8=a?new r8(a):null}return I8},v8=function(){return g.x("yt.mdx.remote.currentScreenId_")},gEa=function(a){g.va("yt.mdx.remote.currentScreenId_",a,void 0)},hEa=function(){return g.x("yt.mdx.remote.connectData_")},y8=function(a){g.va("yt.mdx.remote.connectData_",a,void 0)},C8=function(){return g.x("yt.mdx.remote.connection_")},G8=function(a){var b=C8();
y8(null);a||gEa("");g.va("yt.mdx.remote.connection_",a,void 0);t8&&((0,g.B)(t8,function(b){b(a)}),t8.length=0);
b&&!a?g.gG("yt-remote-connection-change",!1):!b&&a&&g.gG("yt-remote-connection-change",!0)},z8=function(){var a=g.$G();
if(!a)return null;var b=u8().he();return v6(b,a)},F8=function(a,b){B8()&&B8();
gEa(a.id);var c=new k8(s8,a,A8());c.connect(b,hEa());c.subscribe("beforeDisconnect",function(a){g.gG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){C8()&&G8(null)});
G8(c)},bEa=function(){var a=z8();
a?(w8("Resume connection to: "+r6(a)),F8(a,0)):(A6(),GDa(),w8("Skipping connecting because no session screen found."))},ZDa=function(){var a=A8();
if(g.Yb(a)){a=y6();var b=g.YG("yt-remote-session-name")||"",c=g.YG("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.va("yt.mdx.remote.channelParams_",a,void 0)}},A8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},aEa=function(a){a?(g.XG("yt-remote-session-app",a.app),g.XG("yt-remote-session-name",a.name)):(g.ZG("yt-remote-session-app"),g.ZG("yt-remote-session-name"));
g.va("yt.mdx.remote.channelParams_",a,void 0)},J8=function(a,b,c){g.K.call(this);
this.F=a;this.l=b;this.o=new g.OF(this);g.M(this,this.o);this.o.O(b,"onCaptionsTrackListChanged",this.UQ);this.o.O(b,"captionschanged",this.zP);this.o.O(b,"captionssettingschanged",this.AD);this.o.O(b,"videoplayerreset",this.Do);this.o.O(b,"mdxautoplaycancel",this.KH);this.U=this.o.O(b,"onVolumeChange",this.JB);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.WB,this);c.subscribe("remotePlayerChange",this.Ll,this);c.subscribe("remoteQueueChange",this.Do,this);c.subscribe("autoplayUpNext",this.tB,
this);c.subscribe("previousNextChange",this.TB,this);c.subscribe("nowAutoplaying",this.LB,this);c.subscribe("autoplayDismissed",this.sB,this);this.suggestion=null;this.H=new g.xP(64);this.A=new g.$t(this.wD,500,this);g.M(this,this.A);this.B=new g.$t(this.xD,1E3,this);g.M(this,this.B);this.K=new I6(this.bV,0,this);g.M(this,this.K);this.C={};this.L=new g.$t(this.XD,1E3,this);g.M(this,this.L);this.I=new g.Vk(this.zN,1E3,this);g.M(this,this.I);this.N=g.y;this.AD();this.Do();this.Ll()},K8=function(a,b){var c=
a.F,d=a.l.getVideoData().lengthSeconds;
c.H=b||0;c.g.R("progresssync",b,d)},iEa=function(a){K8(a,0);
a.A.stop();L8(a,new g.xP(64))},N8=function(a,b){if(M8(a)&&!a.D){var c=null;
b&&(c={style:a.l.oi()},g.fc(c,b));a.g.lD(a.l.getVideoData(1).videoId,c);a.C=e8(a.g).l}},O8=function(a,b){var c=a.l.Vf();
if(c){var d=c.ee();var e=c.listId.toString()}var f=a.l.getVideoData(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;var m=f.Aj;f=TBa(f);var n=e8(c);l=l||0;var q={videoId:k,currentIndex:l};a8(n,k,l);g.t(b)&&(Z7(n,b),q.currentTime=b);g.t(e)&&(q.listId=e);null!=d&&(q.playerParams=d);null!=m&&(q.clickTrackingParams=m);null!=f&&(q.locationInfo=g.Bg(f));i8(c,"setPlaylist",q);e||g8(c,n);L8(a,new g.xP(1))},jEa=function(a,b){if(b){var c=a.l.wc("captions","tracklist",{Wy:1});
c&&c.length?(a.l.Id("captions","track",b),a.D=!1):(a.l.Jj("captions"),a.D=!0)}else a.l.Id("captions","track",{})},M8=function(a){return e8(a.g).videoId==a.l.getVideoData(1).videoId},L8=function(a,b){a.B.stop();
var c=a.H;if(!g.FP(c,b)){var d=g.V(b,2);d!=g.V(a.H,2)&&g.LU(a.l,d);a.H=b;kEa(a.F,c,b)}},P8=function(a){g.U.call(this,{G:"div",
M:"ytp-remote",J:[{G:"div",M:"ytp-remote-display-status",J:[{G:"div",M:"ytp-remote-display-status-icon",J:[g.wpa()]},{G:"div",M:"ytp-remote-display-status-text",J:["{{statustext}}"]}]}]});this.o=new g.AV(this,250);g.M(this,this.o);this.A=a;this.O(a,"presentingplayerstatechange",this.B);lEa(this,g.IU(a))},lEa=function(a,b){if(3==a.A.Sa()){var c={RECEIVER_NAME:a.A.wc("remote","currentReceiver").name};
c=g.V(b,128)?g.T("YTP_MDX_STATUS_ERROR_2",c):b.jb()||g.V(b,4)?g.T("YTP_MDX_STATUS_PLAYING_2",c):g.T("YTP_MDX_STATUS_CONNECTED_2",c);a.updateValue("statustext",c);a.o.show()}else a.o.hide()},Q8=function(a,b){g.JZ.call(this,g.T("YTP_MDX_TITLE"),0,a,b);
this.o=a;this.H={};this.O(a,"onMdxReceiversChange",this.K);this.O(a,"presentingplayerstatechange",this.K);this.K()},R8=function(a){g.fV.call(this,a);
g.bH({YTP_MDX_CAST_SELECTOR:"Cast...",YTP_MDX_MY_COMPUTER:"This computer",YTP_MDX_PLAYER_ERROR:"This video is not available for remote playback.",YTP_MDX_STATUS_CONNECTED_2:"Connected to $RECEIVER_NAME",YTP_MDX_STATUS_ERROR_2:"Error on $RECEIVER_NAME",YTP_MDX_STATUS_PLAYING_2:"Playing on $RECEIVER_NAME",YTP_MDX_TITLE:"Play on"});this.o={key:t6(),name:g.T("YTP_MDX_MY_COMPUTER")};this.B=null;this.C=[];this.I=this.l=null;this.F=[this.o];this.A=this.o;this.D=new g.xP(64);this.H=0;if(!g.QM(g.W(this.g))){a=
this.g;var b=g.OH(a);b&&(b=b.ko())&&(b=new Q8(a,b),g.M(this,b));b=new P8(a);g.M(this,b);g.$U(a,b.element,4)}},kEa=function(a,b,c){a.D=c;
a.g.R("presentingplayerstatechange",new g.LP(c,b))},S8=function(a,b){if(b.key!=a.A.key)if(b.key==a.o.key)E8();
else{a.A=b;var c=a.g.getPlaylistId();var d=a.g.getVideoData(1);var e=d.videoId;if(c||e){var f=a.g.Vf();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.Yb(l).videoId}else k=[e];f=a.g.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.Aj,index:Math.max(a.g.Zz(),0),currentTime:0==f?void 0:f};(d=TBa(d))&&(c.locationInfo=d);d=c}else d=null;w8("Connecting to: "+g.Bg(b));"cast-selector-receiver"==b.key?(y8(d||null),T7()?Q7().setLaunchParams(d||null):
O7("setLaunchParams called before ready.")):!d&&H8()&&v8()==b.key?g.gG("yt-remote-connection-change",!0):(E8(),y8(d||null),d=u8().he(),(d=v6(d,b.key))&&F8(d,1))}},ACa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},S6={"'":"\\'"},mEa={},ZBa={PW:"atp",j1:"ska",z0:"que",M_:"mus",e1:"sus",XY:"dsp"};
o6.prototype.an=function(){var a=new o6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.o=this.o;a.l=this.l;a.g=this.g};
var B6,x6="",F6=C6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",sCa=C6("loadCastFramework")||C6("loadCastApplicationFramework"),CDa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.A(I6,g.K);g.h=I6.prototype;g.h.xI=function(a){this.A=arguments;this.g=!1;this.ya?this.o=(0,g.F)()+this.dd:this.ya=g.vg(this.B,this.dd)};
g.h.stop=function(){this.ya&&(g.wg(this.ya),this.ya=null);this.o=null;this.g=!1;this.A=[]};
g.h.pause=function(){++this.l};
g.h.resume=function(){this.l&&(--this.l,!this.l&&this.g&&(this.g=!1,this.C.apply(null,this.A)))};
g.h.V=function(){this.stop();I6.aa.V.call(this)};
g.h.yI=function(){this.o?(this.ya=g.vg(this.B,this.o-(0,g.F)()),this.o=null):(this.ya=null,this.l?this.g=!0:(this.g=!1,this.C.apply(null,this.A)))};J6.prototype.stringify=function(a){return g.w.JSON.stringify(a,void 0)};
J6.prototype.parse=function(a){return g.w.JSON.parse(a,void 0)};g.h=K6.prototype;g.h.Yh=null;g.h.vf=!1;g.h.sk=null;g.h.Xu=null;g.h.Yj=null;g.h.qj=null;g.h.Xg=null;g.h.vh=null;g.h.yi=null;g.h.Pc=null;g.h.Zl=0;g.h.wf=null;g.h.Ep=null;g.h.Yg=null;g.h.Xk=-1;g.h.SC=!0;g.h.Lh=!1;g.h.sr=0;g.h.Qo=null;var yCa={},N6={};g.h=K6.prototype;g.h.setTimeout=function(a){this.A=a};
g.h.UT=function(a){a=a.target;var b=this.Qo;b&&3==g.kx(a)?b.oj():this.fE(a)};
g.h.fE=function(a){try{if(a==this.Pc)a:{var b=g.kx(this.Pc),c=this.Pc.l,d=this.Pc.getStatus();if(g.yd&&!g.sc(10)||g.Ad&&!g.rc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.gf&&!g.qx(this.Pc))break a;this.Lh||4!=b||7==c||(8==c||0>=d?this.g.pf(3):this.g.pf(2));U6(this);var e=this.Pc.getStatus();this.Xk=e;var f=g.qx(this.Pc);(this.vf=200==e)?(4==b&&Q6(this),this.B?(zCa(this,b,f),g.gf&&this.vf&&3==b&&(this.W.T(this.l,"tick",this.QT),this.l.start())):P6(this,f),this.vf&&!this.Lh&&(4==b?this.g.Bo(this):
(this.vf=!1,M6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Yg=3,O6(13)):(this.Yg=0,O6(14)),Q6(this),R6(this))}}catch(k){this.Pc&&g.qx(this.Pc)}finally{}};
g.h.QT=function(){var a=g.kx(this.Pc),b=g.qx(this.Pc);this.Zl<b.length&&(U6(this),zCa(this,a,b),this.vf&&4!=a&&M6(this))};
g.h.cT=function(a){T6((0,g.z)(this.bT,this,a),0)};
g.h.bT=function(a){this.Lh||(U6(this),P6(this,a),M6(this))};
g.h.eC=function(a){T6((0,g.z)(this.aT,this,a),0)};
g.h.aT=function(a){this.Lh||(Q6(this),this.vf=a,this.g.Bo(this),this.g.pf(4))};
g.h.cancel=function(){this.Lh=!0;Q6(this)};
g.h.sT=function(){this.sk=null;var a=(0,g.F)();0<=a-this.Xu?(2!=this.qj&&this.g.pf(3),Q6(this),this.Yg=2,O6(18),R6(this)):CCa(this,this.Xu-a)};g.h=FCa.prototype;g.h.qr=null;g.h.oe=null;g.h.Ro=!1;g.h.ky=null;g.h.tn=null;g.h.xs=null;g.h.rr=null;g.h.Ke=null;g.h.rg=-1;g.h.Wk=null;g.h.yk=null;g.h.connect=function(a){this.rr=a;a=W6(this.g,null,this.rr);O6(3);this.ky=(0,g.F)();var b=this.g.F;null!=b?(this.Wk=b[0],(this.yk=b[1])?(this.Ke=1,GCa(this)):(this.Ke=2,Y6(this))):(n6(a,"MODE","init"),this.oe=new K6(this,void 0,void 0,void 0),this.oe.Yh=this.qr,L6(this.oe,a,!1,null,!0),this.Ke=0)};
g.h.LH=function(a){if(a)this.Ke=2,Y6(this);else{O6(4);var b=this.g;b.If=b.Mg.rg;e7(b,9)}a&&this.pf(2)};
g.h.Kq=function(a){return this.g.Kq(a)};
g.h.abort=function(){this.oe&&(this.oe.cancel(),this.oe=null);this.rg=-1};
g.h.jy=function(){return!1};
g.h.XB=function(a,b){this.rg=a.Xk;if(0==this.Ke)if(b){try{var c=this.l.parse(b)}catch(d){c=this.g;c.If=this.rg;e7(c,2);return}this.Wk=c[0];this.yk=c[1]}else c=this.g,c.If=this.rg,e7(c,2);else if(2==this.Ke)if(this.Ro)O6(7),this.xs=(0,g.F)();else if("11111"==b){if(O6(6),this.Ro=!0,this.tn=(0,g.F)(),c=this.tn-this.ky,!g.yd||g.sc(10)||500>c)this.rg=200,this.oe.cancel(),O6(12),X6(this.g,this,!0)}else O6(8),this.tn=this.xs=(0,g.F)(),this.Ro=!1};
g.h.Bo=function(){this.rg=this.oe.Xk;if(this.oe.vf)0==this.Ke?this.yk?(this.Ke=1,GCa(this)):(this.Ke=2,Y6(this)):2==this.Ke&&((!g.yd||g.sc(10)?!this.Ro:200>this.xs-this.tn)?(O6(11),X6(this.g,this,!1)):(O6(12),X6(this.g,this,!0)));else{0==this.Ke?O6(9):2==this.Ke&&O6(10);var a=this.g;a.If=this.rg;e7(a,2)}};
g.h.Tl=function(){return this.g.Tl()};
g.h.isActive=function(){return this.g.isActive()};
g.h.pf=function(a){this.g.pf(a)};g.h=Z6.prototype;g.h.Jk=null;g.h.Td=null;g.h.uc=null;g.h.pr=null;g.h.xn=null;g.h.Bw=null;g.h.Hn=null;g.h.Fl=0;g.h.RO=0;g.h.pd=null;g.h.Og=null;g.h.mg=null;g.h.Ph=null;g.h.Mg=null;g.h.Dp=null;g.h.Ej=-1;g.h.mz=-1;g.h.If=-1;g.h.dj=0;g.h.Oi=0;g.h.Nh=8;var f7=new g.Gf;g.A(ICa,g.ef);g.A(JCa,g.ef);g.A(KCa,g.ef);g.h=Z6.prototype;g.h.connect=function(a,b,c,d,e){O6(0);this.pr=b;this.Jk=c||{};d&&g.t(e)&&(this.Jk.OSID=d,this.Jk.OAID=e);this.C?(T6((0,g.z)(this.Vw,this,a),100),OCa(this)):this.Vw(a)};
g.h.Vw=function(a){this.Mg=new FCa(this);this.Mg.qr=null;this.Mg.l=this.B;this.Mg.connect(a)};
g.h.jy=function(){return 0==this.g};
g.h.cC=function(a){this.Og=null;RCa(this,a)};
g.h.bC=function(){this.mg=null;this.uc=new K6(this,this.o,"rpc",this.D);this.uc.Yh=null;this.uc.sr=0;var a=this.Bw.clone();g.Gm(a,"RID","rpc");g.Gm(a,"SID",this.o);g.Gm(a,"CI",this.Dp?"0":"1");g.Gm(a,"AID",this.Ej);$6(this,a);if(!g.yd||g.sc(10))g.Gm(a,"TYPE","xmlhttp"),L6(this.uc,a,!0,this.Hn,!1);else{g.Gm(a,"TYPE","html");var b=this.uc,c=!!this.Hn;b.qj=3;b.Xg=m6(a.clone());BCa(b,c)}};
g.h.XB=function(a,b){if(0!=this.g&&(this.uc==a||this.Td==a))if(this.If=a.Xk,this.Td==a&&3==this.g)if(7<this.Nh){try{var c=this.B.parse(b)}catch(f){c=null}if(g.ya(c)&&3==c.length)if(0==c[0])a:{if(!this.mg){if(this.uc)if(this.uc.Yj+3E3<this.Td.Yj)b7(this),this.uc.cancel(),this.uc=null;else break a;d7(this);O6(19)}}else this.mz=c[1],0<this.mz-this.Ej&&37500>c[2]&&this.Dp&&0==this.Oi&&!this.Ph&&(this.Ph=T6((0,g.z)(this.uP,this),6E3));else e7(this,11)}else b!=mEa.SX.g&&e7(this,11);else if(this.uc==a&&
b7(this),!g.D(b)){c=this.B.parse(b);g.ya(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ej=e[0];e=e[1];2==this.g?"c"==e[0]?(this.o=e[1],this.Hn=e[2],e=e[3],null!=e?this.Nh=e:this.Nh=6,this.g=3,this.pd&&this.pd.Lw(),this.Bw=W6(this,this.Tl()?this.Hn:null,this.pr),SCa(this)):"stop"==e[0]&&e7(this,7):3==this.g&&("stop"==e[0]?e7(this,7):"noop"!=e[0]&&this.pd&&this.pd.Kw(e),this.Oi=0)}}};
g.h.uP=function(){null!=this.Ph&&(this.Ph=null,this.uc.cancel(),this.uc=null,d7(this),O6(20))};
g.h.Bo=function(a){if(this.uc==a){b7(this);this.uc=null;var b=2}else if(this.Td==a)this.Td=null,b=1;else return;this.If=a.Xk;if(0!=this.g)if(a.vf)1==b?(b=(0,g.F)()-a.Yj,f7.dispatchEvent(new JCa(f7,a.yi?a.yi.length:0,b,this.dj)),a7(this),this.A.length=0):SCa(this);else{var c=a.Yg,d;if(!(d=3==c||7==c||0==c&&0<this.If)){if(d=1==b)this.Td||this.Og||1==this.g||2<=this.dj?d=!1:(this.Og=T6((0,g.z)(this.cC,this,a),TCa(this,this.dj)),this.dj++,d=!0);d=!(d||2==b&&d7(this))}if(d)switch(c){case 1:e7(this,5);
break;case 4:e7(this,10);break;case 3:e7(this,6);break;case 7:e7(this,12);break;default:e7(this,2)}}};
g.h.gI=function(a){if(!g.Pa(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.OU=function(a){a?O6(2):(O6(1),UCa(this,8))};
g.h.Kq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.ex;a.F=!1;return a};
g.h.isActive=function(){return!!this.pd&&this.pd.isActive(this)};
g.h.pf=function(a){f7.dispatchEvent(new KCa(f7,a))};
g.h.Tl=function(){return!(!g.yd||g.sc(10))};
g.h=VCa.prototype;g.h.Lw=function(){};
g.h.Kw=function(){};
g.h.Jw=function(){};
g.h.yq=function(){};
g.h.Px=function(){return{}};
g.h.isActive=function(){return!0};g.A(g7,g.K);g.h=g7.prototype;g.h.SS=function(){this.dd=Math.min(3E5,2*this.dd);this.o();this.l&&this.start()};
g.h.start=function(){var a=this.dd+15E3*Math.random();g.au(this.g,a);this.l=(0,g.F)()+a};
g.h.stop=function(){this.g.stop();this.l=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.dd=5E3};g.A(h7,VCa);g.h=h7.prototype;g.h.subscribe=function(a,b,c){return this.o.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.o.unsubscribe(a,b,c)};
g.h.Ld=function(a){return this.o.Ld(a)};
g.h.R=function(a,b){return this.o.R.apply(this.o,arguments)};
g.h.dispose=function(){this.I||(this.I=!0,g.cf(this.o),YCa(this),g.cf(this.l),this.l=null)};
g.h.ia=function(){return this.I};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.H="";this.l.stop();this.B=a||null;this.A=b||0;a=this.K+"/test";b=this.K+"/bind";var d=new Z6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.L),e=this.g;e&&(e.pd=null);d.pd=this;this.g=d;e?this.g.connect(a,b,this.C,e.o,e.Ej):c?this.g.connect(a,b,this.C,c.sessionId,c.arrayId):this.g.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.fc(c,b);this.l.isActive()||2==(this.g?this.g.g:0)?this.D.push(c):i7(this)&&PCa(this.g,c)};
g.h.Lw=function(){this.l.reset();this.B=null;this.A=0;if(this.D.length){var a=this.D;this.D=[];for(var b=0,c=a.length;b<c;++b)PCa(this.g,a[b])}this.R("handlerOpened")};
g.h.Jw=function(a){var b=2==a&&401==this.g.If;4==a||b||this.l.start();this.R("handlerError",a)};
g.h.yq=function(a){if(!this.l.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.D.push(d)}};
g.h.Px=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.F&&(a.ui=""+this.F);this.B&&g.fc(a,this.B);return a};
g.h.Kw=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),NCa(this.g)):this.R("handlerMessage",new WCa(a[0],a[1]))};
g.h.tV=function(){this.l.isActive();var a=this.g,b=0;a.uc&&b++;a.Td&&b++;0!=b||this.connect(this.B,this.A)};j7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
j7.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
j7.prototype.B=function(a){a(Error("request timed out"))};var fDa=(0,g.F)(),m7=null,p7=Array(50),o7=-1,q7=!1;g.A(r7,g.RF);r7.prototype.he=function(){return this.g};
r7.prototype.contains=function(a){return!!u6(this.g,a)};
r7.prototype.get=function(a){return a?v6(this.g,a):null};
r7.prototype.info=function(a){n7(this.D,a)};g.A(s7,g.RF);var nEa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=s7.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.ya)&&this.kE()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.ya)||(g.aE(this.ya),this.ya=window.NaN)};
g.h.V=function(){this.stop();s7.aa.V.call(this)};
g.h.kE=function(){this.ya=window.NaN;this.g=g.oE(k7(this.C,"/pairing/get_screen"),{method:"POST",Kb:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.z)(this.vV,this),onError:(0,g.z)(this.uV,this),ud:(0,g.z)(this.wV,this)})};
g.h.vV=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.R("pairingComplete",new p6(c))};
g.h.uV=function(a){this.g=null;a.status&&404==a.status?this.l>=nEa.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=nEa[this.l],this.ya=g.ZD((0,g.z)(this.kE,this),a),this.l++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.wV=function(){this.g=null;this.R("pairingFailed",Error("Server not responding"))};g.A(u7,r7);g.h=u7.prototype;g.h.start=function(){t7(this)&&this.R("screenChange");!g.YG("yt-remote-lounge-token-expiration")&&jDa(this);g.aE(this.l);this.l=g.ZD((0,g.z)(this.start,this),1E4)};
g.h.add=function(a,b){t7(this);gDa(this,a);v7(this,!1);this.R("screenChange");b(a);a.token||jDa(this)};
g.h.remove=function(a,b){var c=t7(this);iDa(this,a)&&(v7(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.yp=function(a,b,c,d){var e=t7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,v7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.V=function(){g.aE(this.l);u7.aa.V.call(this)};
g.h.LI=function(a){t7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}v7(this,!b);b&&n7(this.D,"Missed "+b+" lounge tokens.")};
g.h.KI=function(a){n7(this.D,"Requesting lounge tokens failed: "+a)};g.A(x7,g.RF);g.h=x7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.YG("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.F)()-144E5<a?0:a)?z7(this):(this.A=(0,g.F)()+3E5,g.XG("yt-remote-fast-check-period",this.A),this.ou())};
g.h.isEmpty=function(){return g.Yb(this.g)};
g.h.update=function(){w7("Updating availability on schedule.");var a=this.C(),b=g.Kb(this.g,function(b,d){return b&&!!v6(a,d)},this);
y7(this,b)};
g.h.V=function(){g.aE(this.o);this.o=window.NaN;this.l&&(this.l.abort(),this.l=null);x7.aa.V.call(this)};
g.h.ou=function(){g.aE(this.o);this.o=window.NaN;this.l&&this.l.abort();var a=mDa(this);if(g.Nb(a)){var b=k7(this.B,"/pairing/get_screen_availability");this.l=l7(this.B,b,{lounge_token:g.Rb(a).join(",")},(0,g.z)(this.zS,this,a),(0,g.z)(this.yS,this))}else y7(this,{}),z7(this)};
g.h.zS=function(a,b){this.l=null;var c=g.Rb(mDa(this));if(g.ib(c,g.Rb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;y7(this,d);z7(this)}else this.fc("Changing Screen set during request."),this.ou()};
g.h.yS=function(a){this.fc("Screen availability failed: "+a);this.l=null;z7(this)};
g.h.fc=function(a){n7("OnlineScreenService",a)};g.A(A7,r7);g.h=A7.prototype;g.h.start=function(){this.o.start();this.l.start();this.g.length&&(this.R("screenChange"),this.l.isEmpty()||this.R("onlineScreenChange"))};
g.h.add=function(a,b,c){this.o.add(a,b,c)};
g.h.remove=function(a,b,c){this.o.remove(a,b,c);this.l.update()};
g.h.yp=function(a,b,c,d){this.o.contains(a)?this.o.yp(a,b,c,d):(a="Updating name of unknown screen: "+a.name,n7(this.D,a),d(Error(a)))};
g.h.he=function(a){return a?this.g:g.Wa(this.g,(0,g.Ld)(this.A,function(a){return!this.contains(a)},this))};
g.h.lE=function(){return(0,g.Ld)(this.he(!0),function(a){return!!this.l.g[a.id]},this)};
g.h.mE=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new s7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(a){g.cf(f);d(B7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.cf(f);e(a)});
f.start();return(0,g.z)(f.stop,f)};
g.h.yV=function(a,b,c,d){g.oE(k7(this.C,"/pairing/get_screen"),{method:"POST",Kb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.z)(function(a,d){var e=new p6(d.screen||{});if(!e.name||qDa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);qDa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(B7(this,e))},this),
onError:(0,g.z)(function(a){d(Error("pairing request failed: "+a.status))},this),
ud:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.h.V=function(){g.cf(this.o);g.cf(this.l);A7.aa.V.call(this)};
g.h.cJ=function(){rDa(this);this.R("screenChange");this.l.update()};
A7.prototype.dispose=A7.prototype.dispose;g.A(D7,g.RF);g.h=D7.prototype;g.h.Co=function(a){this.o=a;this.R("sessionScreen",this.o)};
g.h.ne=function(a){this.ia()||(a&&E7(this,""+a),this.o=null,this.R("sessionScreen",null))};
g.h.info=function(a){n7(this.L,a)};
g.h.oE=function(){return null};
g.h.vu=function(a){var b=this.l;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){E7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.V=function(){this.vu("");D7.aa.V.call(this)};g.A(F7,D7);g.h=F7.prototype;g.h.uu=function(a){if(this.g){if(this.g==a)return;E7(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.C);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.g=a;this.g.addUpdateListener(this.C);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);tDa(this)};
g.h.Gj=function(a){this.info("launchWithParams no-op for Cast: "+g.Bg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.z)(function(){this.ne()},this),(0,g.z)(function(){this.ne(Error("Failed to stop receiver app."))},this)):this.ne(Error("Stopping cast device witout session."))};
g.h.vu=g.y;g.h.V=function(){this.info("disposeInternal");g.aE(this.A);this.A=0;this.g&&(this.g.removeUpdateListener(this.C),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.g=null;F7.aa.V.call(this)};
g.h.ET=function(a,b){if(!this.ia())if(b){var c=g.Zw(b);if(g.Ba(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Bg(c));switch(d){case "mdxSessionStatus":sDa(this,c.screenId);break;default:E7(this,"Unknown youtube message: "+d)}}else E7(this,"Unable to parse message.")}else E7(this,"No data in message.")};
g.h.ay=function(a,b,c,d){pDa(this.H,this.l.label,a,this.l.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(E7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.ZD((0,g.z)(this.ay,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.oE=function(){return this.g};
g.h.zV=function(a){this.ia()||a||(E7(this,"Cast session died."),this.ne())};g.A(G7,D7);g.h=G7.prototype;g.h.uu=function(a){this.A=a;this.A.addUpdateListener(this.K)};
g.h.Gj=function(a){this.B=a;this.D()};
g.h.stop=function(){this.g();this.g=g.y;g.aE(this.C);this.A?this.A.stop((0,g.z)(this.ne,this,null),(0,g.z)(this.ne,this,"Failed to stop DIAL device.")):this.ne()};
g.h.V=function(){this.g();this.g=g.y;g.aE(this.C);this.A&&this.A.removeUpdateListener(this.K);this.A=null;G7.aa.V.call(this)};
g.h.CV=function(a){this.ia()||a||(E7(this,"DIAL session died."),this.g(),this.g=g.y,this.ne())};
g.h.Yr=function(a){this.I=t6();if(this.B){var b=new window.chrome.cast.DialLaunchResponse(!0,vDa(this));a(b);uDa(this)}else this.D=(0,g.z)(function(){g.aE(this.C);this.D=g.y;this.C=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,vDa(this));a(b);uDa(this)},this),this.C=g.ZD((0,g.z)(function(){this.D()},this),100)};
g.h.rK=function(a,b,c){pDa(this.H,this.F.receiver.label,a,this.l.friendlyName,(0,g.z)(function(a){a&&a.token?(this.Co(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.Yr(b,c)},this),(0,g.z)(function(a){E7(this,"Failed to get DIAL screen: "+a);
this.Yr(b,c)},this))};g.A(H7,D7);H7.prototype.stop=function(){this.ne()};
H7.prototype.uu=g.y;H7.prototype.Gj=function(){g.aE(this.g);this.g=window.NaN;var a=v6(this.H.he(),this.l.label);a?this.Co(a):this.ne(Error("No such screen"))};
H7.prototype.V=function(){g.aE(this.g);this.g=window.NaN;H7.aa.V.call(this)};g.A(I7,g.RF);g.h=I7.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.D);this.F||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.z)(this.YB,this),(0,g.z)(this.jS,this),d,e);c.customDialLaunchCallback=(0,g.z)(this.eQ,this);window.chrome.cast.initialize(c,
(0,g.z)(function(){this.ia()||(window.chrome.cast.addReceiverActionListener(this.A),cDa(),this.l.subscribe("onlineScreenChange",(0,g.z)(this.nE,this)),this.o=xDa(this),window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(a){this.fc("Failed to set initial custom receivers: "+g.Bg(a))},this)),this.R("yt-remote-cast2-availability-change",K7(this)),b(!0))},this),(0,g.z)(function(a){this.fc("Failed to initialize API: "+g.Bg(a));
b(!1)},this))};
g.h.yU=function(a,b){J7("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.o;if(!a||c&&c.id!=a)J7("Unsetting old screen status: "+this.g.l.friendlyName),L7(this,null)}if(a&&b){if(!this.g){c=v6(this.l.he(),a);if(!c){J7("setConnectedScreenStatus: Unknown screen.");return}var d=wDa(this,c);d||(J7("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.o.push(d),
window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(a){this.fc("Failed to set initial custom receivers: "+g.Bg(a))},this)));
J7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);L7(this,new H7(this.l,d),!0)}this.g.vu(b)}else J7("setConnectedScreenStatus: no screen.")};
g.h.zU=function(a){this.ia()?this.fc("Setting connection data on disposed cast v2"):this.g?this.g.Gj(a):this.fc("Setting connection data without a session")};
g.h.BV=function(){this.ia()?this.fc("Stopping session on disposed cast v2"):this.g?(this.g.stop(),L7(this,null)):J7("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.z)(this.YB,this),(0,g.z)(this.ES,this))};
g.h.V=function(){this.l.unsubscribe("onlineScreenChange",(0,g.z)(this.nE,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.A);g.Ua(g.x("yt.mdx.remote.debug.handlers_")||[],$Ca);g.cf(this.g);I7.aa.V.call(this)};
g.h.fc=function(a){n7("Controller",a)};
g.h.ZB=function(a,b){this.g==a&&(b||L7(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.fS=function(a,b){if(!this.ia())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),J7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.l.label!=a.label)J7("onReceiverAction_: Stopping active receiver: "+this.g.l.friendlyName),this.g.stop();else{J7("onReceiverAction_: Casting to active receiver.");this.g.o&&this.R("yt-remote-cast2-session-change",this.g.o);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:L7(this,
new H7(this.l,a));break;case window.chrome.cast.ReceiverType.DIAL:L7(this,new G7(this.l,a,this.C));break;case window.chrome.cast.ReceiverType.CAST:L7(this,new F7(this.l,a));break;default:this.fc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.l.label==a.label?this.g.stop():this.fc("Stopping receiver w/o session: "+a.friendlyName)}else this.fc("onReceiverAction_ called without receiver.")};
g.h.eQ=function(a){if(this.ia())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.fc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.l:null;if(!c||c.label!=b.label)return this.fc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.o)return J7("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.g.o),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.fc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);L7(this,new G7(this.l,b,this.C))}b=this.g;b.F=a;return b.F.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.z)(b.rK,b,(b.F.extraData||{}).screenId||null)):new window.Promise((0,g.z)(b.Yr,b))};
g.h.YB=function(a){if(!this.ia()){J7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)J7("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),L7(this,new F7(this.l,b),!0);else{this.fc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.l,d=v6(this.l.he(),c.label);
d&&q6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(J7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.cf(this.g),this.g=new F7(this.l,b),this.g.subscribe("sessionScreen",(0,g.z)(this.ZB,this,this.g)),this.g.Gj(null));this.g.uu(a)}}};
g.h.AV=function(){return this.g?this.g.oE():null};
g.h.ES=function(a){this.ia()||(this.fc("Failed to estabilish a session: "+g.Bg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&L7(this,null))};
g.h.jS=function(a){J7("Receiver availability updated: "+a);if(!this.ia()){var b=K7(this);this.B=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;K7(this)!=b&&this.R("yt-remote-cast2-availability-change",K7(this))}};
g.h.nE=function(){this.ia()||(this.o=xDa(this),J7("Updating custom receivers: "+g.Bg(this.o)),window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(){this.fc("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",K7(this)))};
I7.prototype.setLaunchParams=I7.prototype.zU;I7.prototype.setConnectedScreenStatus=I7.prototype.yU;I7.prototype.stopSession=I7.prototype.BV;I7.prototype.getCastSession=I7.prototype.AV;I7.prototype.requestSession=I7.prototype.requestSession;I7.prototype.init=I7.prototype.init;I7.prototype.dispose=I7.prototype.dispose;var R7=[];g.h=W7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";X7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.g=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.l=a.trackData,this.Lf=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.D=a.playerTimeAt,this.B=a.seekableStart,this.o=a.seekableEnd,this.H=a.duration,this.I=a.loadedTime,this.A=a.liveIngestionTime,this.C=!(0,window.isNaN)(this.A))};
g.h.jb=function(){return 1==this.g};
g.h.isAdPlaying=function(){return 1081==this.g};
g.h.getDuration=function(){return this.C?this.H+Y7(this):this.H};
g.h.clone=function(){return new W7(b8(this))};g.A(d8,g.RF);g.h=d8.prototype;g.h.play=function(){1==this.g?(this.l?this.l.play(null,g.y,j8(this,"play")):i8(this,"play"),h8(this,1,$7(e8(this))),this.R("remotePlayerChange")):f8(this,this.play)};
g.h.pause=function(){1==this.g?(this.l?this.l.pause(null,g.y,j8(this,"pause")):i8(this,"pause"),h8(this,2,$7(e8(this))),this.R("remotePlayerChange")):f8(this,this.pause)};
g.h.jE=function(a){if(1==this.g){if(this.l){var b=e8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.jb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.l.seek(c,g.y,j8(this,"seekTo",{newTime:a}))}else i8(this,"seekTo",{newTime:a});h8(this,3,a);this.R("remotePlayerChange")}else f8(this,g.Ea(this.jE,a))};
g.h.stop=function(){if(1==this.g){this.l?this.l.stop(null,g.y,j8(this,"stopVideo")):i8(this,"stopVideo");var a=e8(this);a.index=-1;a.videoId="";X7(a);g8(this,a);this.R("remotePlayerChange")}else f8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=e8(this);if(this.o){if(c.volume!=a){var d=Math.round(a)/100;this.o.setReceiverVolumeLevel(d,(0,g.z)(function(){n7("CP","set receiver volume: "+d)},this),(0,g.z)(function(){this.fc("failed to set receiver volume.")},this))}c.muted!=b&&this.o.setReceiverMuted(b,(0,g.z)(function(){n7("CP","set receiver muted: "+b)},this),(0,g.z)(function(){this.fc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);i8(this,"setVolume",e)}c.muted=b;c.volume=a;g8(this,c)}else f8(this,g.Ea(this.setVolume,a,b))};
g.h.lD=function(a,b){if(1==this.g){var c=e8(this),d={videoId:a};b&&(c.l={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Bg(b.style),g.fc(d,c.l));i8(this,"setSubtitlesTrack",d);g8(this,c)}else f8(this,g.Ea(this.lD,a,b))};
g.h.dv=function(a,b){if(1==this.g){i8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Ob.id});var c=e8(this);c.audioTrackId=b.Ob.id;g8(this,c)}else f8(this,g.Ea(this.dv,a,b))};
g.h.iE=function(a,b){if(1==this.g){if(a&&b){var c=e8(this);a8(c,a,b);g8(this,c)}i8(this,"previous")}else f8(this,g.Ea(this.iE,a,b))};
g.h.hE=function(a,b){if(1==this.g){if(a&&b){var c=e8(this);a8(c,a,b);g8(this,c)}i8(this,"next")}else f8(this,g.Ea(this.hE,a,b))};
g.h.tx=function(){1==this.g?i8(this,"dismissAutoplay"):f8(this,this.tx)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.R("proxyStateChange",a,this.g)}d8.aa.dispose.call(this)};
g.h.V=function(){KDa(this);this.A=null;this.B.clear();c8(this,null);d8.aa.V.call(this)};
g.h.ev=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)g.sC(this.B).apply(this);else 3==a&&this.dispose()}};
g.h.aS=function(a,b){this.R(a,b)};
g.h.BP=function(a){if(!a)this.Il(null),c8(this,null);else if(this.o.receiver.volume){a=this.o.receiver.volume;var b=e8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)n7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,g8(this,b)}};
g.h.Il=function(a){n7("CP","Cast media: "+!!a);this.l&&this.l.removeUpdateListener(this.F);if(this.l=a)this.l.addUpdateListener(this.F),LDa(this),this.R("remotePlayerChange")};
g.h.AP=function(a){a?(LDa(this),this.R("remotePlayerChange")):this.Il(null)};
g.h.NP=function(){var a=HDa();a&&c8(this,a)};
g.h.fc=function(a){n7("CP",a)};g.A(k8,g.RF);g.h=k8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.t(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.t(k)&&(l.currentIndex=k);c&&(this.Xa.listId=c);this.Xa.videoId=d;this.Xa.index=k||0;this.Xa.state=3;Z7(this.Xa,m);this.A="UNSUPPORTED";l8("Connecting with setPlaylist and params: "+g.Bg(l));this.g.connect({method:"setPlaylist",
params:g.Bg(l)},a,gCa())}else l8("Connecting without params"),this.g.connect({},a,gCa());NDa(this)};
g.h.dispose=function(){this.ia()||(this.R("beforeDispose"),m8(this,3));k8.aa.dispose.call(this)};
g.h.V=function(){n8(this);p8(this);o8(this);g.aE(this.H);this.H=window.NaN;g.aE(this.I);this.I=window.NaN;this.o=null;g.BF(this.U);this.U.length=0;this.g.dispose();k8.aa.V.call(this);this.A=this.D=this.l=this.Xa=this.g=null};
g.h.CI=function(){this.C(2)};
g.h.FP=function(){l8("Channel opened");this.N&&(this.N=!1,o8(this),this.L=g.ZD((0,g.z)(function(){l8("Timing out waiting for a screen.");this.C(1)},this),15E3));
kCa(XCa(this.g),this.Z)};
g.h.CP=function(){l8("Channel closed");(0,window.isNaN)(this.B)?A6(!0):A6();this.dispose()};
g.h.DP=function(a){A6();(0,window.isNaN)(this.F())?(l8("Channel error: "+a+" without reconnection"),this.dispose()):(this.N=!0,l8("Channel error: "+a+" with reconnection in "+this.F()+" ms"),m8(this,2))};
g.h.EP=function(a){a.params?l8("Received: action="+a.action+", params="+g.Bg(a.params)):l8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.Zw(a.params.devices);this.l=(0,g.G)(a,function(a){return new o6(a)});
a=!!g.La(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
QDa(this,a);break;case "loungeScreenDisconnected":g.Va(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
QDa(this,!1);break;case "remoteConnected":var b=new o6(g.Zw(a.params.device));g.La(this.l,function(a){return b?a.id==b.id:!1})||g.Sa(this.l,b);
break;case "remoteDisconnected":b=new o6(g.Zw(a.params.device));g.Va(this.l,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":SDa(this,a);break;case "nowPlaying":UDa(this,a);break;case "onStateChange":TDa(this,a);break;case "onAdStateChange":VDa(this,a);break;case "onVolumeChanged":WDa(this,a);break;case "onSubtitlesTrackChanged":RDa(this,a);break;case "nowAutoplaying":XDa(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.D=a.params.videoId||null;this.R("autoplayUpNext",this.D);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.R("autoplayModeChange",this.A);"DISABLED"==this.A&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":YDa(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:l8("Unrecognized action: "+a.action)}};
g.h.iU=function(){if(this.o){var a=this.o;this.o=null;this.Xa.videoId!=a&&q8(this,"getNowPlaying")}};
k8.prototype.subscribe=k8.prototype.subscribe;k8.prototype.unsubscribeByKey=k8.prototype.Ld;k8.prototype.fa=function(){var a=3;this.ia()||(a=0,(0,window.isNaN)(this.F())?i7(this.g)&&(0,window.isNaN)(this.B)&&(a=1):a=2);return a};
k8.prototype.getProxyState=k8.prototype.fa;k8.prototype.C=function(a){l8("Disconnecting with "+a);n8(this);this.R("beforeDisconnect",a);1==a&&A6();YCa(this.g,a);this.dispose()};
k8.prototype.disconnect=k8.prototype.C;k8.prototype.ea=function(){var a=this.Xa;this.o&&(a=this.Xa.clone(),a8(a,this.o,a.index));return b8(a)};
k8.prototype.getPlayerContextData=k8.prototype.ea;
k8.prototype.ma=function(a){var b=new W7(a);b.videoId&&b.videoId!=this.Xa.videoId&&(this.o=b.videoId,g.aE(this.H),this.H=g.ZD((0,g.z)(this.iU,this),5E3));var c=[];this.Xa.listId==b.listId&&this.Xa.videoId==b.videoId&&this.Xa.index==b.index||c.push("remoteQueueChange");this.Xa.g==b.g&&this.Xa.volume==b.volume&&this.Xa.muted==b.muted&&$7(this.Xa)==$7(b)&&g.Bg(this.Xa.l)==g.Bg(b.l)||c.push("remotePlayerChange");this.Xa.reset(a);(0,g.B)(c,function(a){this.R(a)},this)};
k8.prototype.setPlayerContextData=k8.prototype.ma;k8.prototype.X=function(){var a=this.g.C.id,b=g.La(this.l,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
k8.prototype.getOtherConnectedRemoteId=k8.prototype.X;k8.prototype.F=function(){var a=this.g;return a.l.isActive()?a.l.l-(0,g.F)():window.NaN};
k8.prototype.getReconnectTimeout=k8.prototype.F;k8.prototype.Y=function(){return this.A||"UNSUPPORTED"};
k8.prototype.getAutoplayMode=k8.prototype.Y;k8.prototype.ba=function(){return this.D||""};
k8.prototype.getAutoplayVideoId=k8.prototype.ba;k8.prototype.ra=function(){if(!(0,window.isNaN)(this.F())){var a=this.g.l;g.bu(a.g);a.start()}};
k8.prototype.reconnect=k8.prototype.ra;k8.prototype.ha=function(a,b){q8(this,a,b);PDa(this)};
k8.prototype.sendMessage=k8.prototype.ha;g.A(r8,r7);g.h=r8.prototype;g.h.he=function(a){return this.cd.$_gs(a)};
g.h.contains=function(a){return!!this.cd.$_c(a)};
g.h.get=function(a){return this.cd.$_g(a)};
g.h.start=function(){this.cd.$_st()};
g.h.add=function(a,b,c){this.cd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.cd.$_r(a,b,c)};
g.h.yp=function(a,b,c,d){this.cd.$_un(a,b,c,d)};
g.h.V=function(){for(var a=0,b=this.l.length;a<b;++a)this.cd.$_ubk(this.l[a]);this.l.length=0;this.cd=null;r8.aa.V.call(this)};
g.h.xV=function(){this.R("screenChange")};
g.h.AR=function(){this.R("onlineScreenChange")};
A7.prototype.$_st=A7.prototype.start;A7.prototype.$_gspc=A7.prototype.yV;A7.prototype.$_gsppc=A7.prototype.mE;A7.prototype.$_c=A7.prototype.contains;A7.prototype.$_g=A7.prototype.get;A7.prototype.$_a=A7.prototype.add;A7.prototype.$_un=A7.prototype.yp;A7.prototype.$_r=A7.prototype.remove;A7.prototype.$_gs=A7.prototype.he;A7.prototype.$_gos=A7.prototype.lE;A7.prototype.$_s=A7.prototype.subscribe;A7.prototype.$_ubk=A7.prototype.Ld;var s8=null,t8=null,I8=null,x8=[];g.p(J8,g.K);g.h=J8.prototype;
g.h.V=function(){g.K.prototype.V.call(this);this.A.stop();this.B.stop();this.K.stop();this.N();this.g.unsubscribe("proxyStateChange",this.WB,this);this.g.unsubscribe("remotePlayerChange",this.Ll,this);this.g.unsubscribe("remoteQueueChange",this.Do,this);this.g.unsubscribe("autoplayUpNext",this.tB,this);this.g.unsubscribe("previousNextChange",this.TB,this);this.g.unsubscribe("nowAutoplaying",this.LB,this);this.g.unsubscribe("autoplayDismissed",this.sB,this);this.g=this.F=null};
g.h.uA=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(M8(this)){if(!e8(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":e8(this.g).jb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.oj(c[0],c[1]);break;case "control_subtitles_set_track":N8(this,c[0]);break;case "control_set_audio_track":c=c[0],M8(this)&&this.g.dv(this.l.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.l.getCurrentTime();O8(this,0==c?void 0:c);break;case "control_seek":O8(this,c[0]);break;case "control_subtitles_set_track":N8(this,c[0]);break;case "control_set_audio_track":c=c[0],M8(this)&&this.g.dv(this.l.getVideoData(1).videoId,c)}};
g.h.zP=function(a){this.K.xI(a)};
g.h.bV=function(a){this.uA("control_subtitles_set_track",g.Yb(a)?null:a)};
g.h.AD=function(){var a=this.l.wc("captions","track");g.Yb(a)||N8(this,a)};
g.h.JB=function(a){if(M8(this)){this.g.unsubscribe("remotePlayerChange",this.Ll,this);var b=Math.round(a.volume);a=!!a.muted;var c=e8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.L.start();this.g.subscribe("remotePlayerChange",this.Ll,this)}};
g.h.UQ=function(){g.Yb(this.C)||jEa(this,this.C);this.D=!1};
g.h.WB=function(a,b){this.B.stop();2==b&&this.xD()};
g.h.Ll=function(){if(M8(this)){this.A.stop();var a=e8(this.g);switch(a.g){case 1081:case 1:L8(this,new g.xP(8));this.wD();break;case 1085:case 3:L8(this,new g.xP(9));break;case 1083:case 0:L8(this,new g.xP(2));this.I.stop();K8(this,this.l.getVideoData().lengthSeconds);break;case 1084:L8(this,new g.xP(4));break;case 2:L8(this,new g.xP(4));K8(this,$7(a));break;case -1:L8(this,new g.xP(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.T("YTP_MDX_PLAYER_ERROR")},L8(this,new g.xP(128,a))}a=
e8(this.g).l;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,jEa(this,a));a=e8(this.g);-1==a.volume||Math.round(this.l.getVolume())==a.volume&&this.l.isMuted()==a.muted||this.L.isActive()||this.XD()}else iEa(this)};
g.h.TB=function(){this.l.R("mdxpreviousnextchange")};
g.h.Do=function(){M8(this)||iEa(this)};
g.h.KH=function(){this.g.tx()};
g.h.tB=function(a){a&&(a=g.oE("/watch_queue_ajax",{method:"GET",Wc:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.z)(this.fT,this)}))&&(this.N=(0,g.z)(a.abort,a))};
g.h.fT=function(a,b){var c=new g.nO({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.l.R("mdxautoplayupnext",c)};
g.h.LB=function(a){(0,window.isNaN)(a)||this.l.R("mdxnowautoplaying",a)};
g.h.sB=function(){this.l.R("mdxautoplaycanceled")};
g.h.zN=function(a,b){-1==e8(this.g).g?O8(this,a):b&&this.g.jE(a)};
g.h.XD=function(){if(M8(this)){var a=e8(this.g);this.o.Ca(this.U);a.muted?this.l.mute():this.l.Wf();this.l.setVolume(a.volume);this.U=this.o.O(this.l,"onVolumeChange",this.JB)}};
g.h.wD=function(){this.A.stop();if(!this.g.ia()){var a=e8(this.g);a.jb()&&L8(this,new g.xP(8));K8(this,$7(a));this.A.start()}};
g.h.xD=function(){this.B.stop();this.A.stop();var a=this.g.A.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(P8,g.U);P8.prototype.B=function(a){lEa(this,a.state)};g.p(Q8,g.JZ);Q8.prototype.K=function(){var a=this.o.wc("remote","receivers");a&&1<a.length&&!this.o.wc("remote","quickCast")?(this.H=g.kb(a,this.C,this),g.KZ(this,(0,g.G)(a,this.C)),a=this.o.wc("remote","currentReceiver"),this.nf(this.C(a)),this.enable(!0)):this.enable(!1)};
Q8.prototype.C=function(a){return a.key};
Q8.prototype.mf=function(a){return"cast-selector-receiver"==a?g.T("YTP_MDX_CAST_SELECTOR"):this.H[a].name};
Q8.prototype.sd=function(a){g.JZ.prototype.sd.call(this,a);this.o.Id("remote","currentReceiver",this.H[a]);this.B.Pb()};g.p(R8,g.fV);g.h=R8.prototype;g.h.create=function(){cEa(g.DM(g.W(this.g)));this.C.push(g.cG("yt-remote-before-disconnect",this.vP,this));this.C.push(g.cG("yt-remote-connection-change",this.kS,this));this.C.push(g.cG("yt-remote-receiver-availability-change",this.UB,this));this.C.push(g.cG("yt-remote-auto-connect",this.iS,this));this.C.push(g.cG("yt-remote-receiver-resumed",this.hS,this));this.UB()};
g.h.load=function(){this.g.gt();g.fV.prototype.load.call(this);this.B=new J8(this,this.g,this.l);var a=(a=hEa())?a.currentTime:0;var b=H8()?new d8(C8(),void 0):null;0==a&&b&&(a=$7(e8(b)));0!=a&&(this.H=a||0,this.g.R("progresssync",a,void 0));kEa(this,this.D,this.D);g.$_(this.g.app,6)};
g.h.unload=function(){this.g.R("mdxautoplaycanceled");this.A=this.o;g.df(this.B,this.l);this.l=this.B=null;g.fV.prototype.unload.call(this);g.$_(this.g.app,5)};
g.h.V=function(){g.dG(this.C);g.fV.prototype.V.call(this)};
g.h.Bl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.uA.apply(this.B,[a].concat(g.oa(c)))};
g.h.tI=function(){return this.loaded?this.B.suggestion:null};
g.h.Lf=function(){return this.l?e8(this.l).Lf:!1};
g.h.hasNext=function(){return this.l?e8(this.l).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.nN=function(){var a=e8(this.l),b=this.g.getVideoData();return{allowSeeking:this.g.ed(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.C?a.A+Y7(a):a.A,isPeggedToLive:1>=(a.C?a.o+Y7(a):a.o)-this.getCurrentTime(),loaded:a.I,seekableEnd:a.C?a.o+Y7(a):a.o,seekableStart:0<a.B?a.B+Y7(a):a.B}};
g.h.oN=function(){this.l&&this.l.hE()};
g.h.pN=function(){this.l&&this.l.iE()};
g.h.vP=function(a){1==a&&(this.I=this.l?e8(this.l):null)};
g.h.kS=function(){var a=H8()?new d8(C8(),void 0):null;if(a){var b=this.A;this.loaded&&this.unload();this.l=a;this.I=null;b.key!=this.o.key&&(this.A=b,this.load())}else g.cf(this.l),this.l=null,this.loaded&&(this.unload(),(a=this.I)&&a.videoId==this.g.getVideoData().videoId&&this.g.Xz(a.videoId,$7(a)));this.g.R("videodatachange","newdata",this.g.getVideoData(),3)};
g.h.UB=function(){this.F=[this.o].concat(eEa());var a=D8()||this.o;S8(this,a);this.g.ua("onMdxReceiversChange")};
g.h.iS=function(){var a=D8();S8(this,a)};
g.h.hS=function(){this.A=D8()};
g.h.mN=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.F;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?U7():S8(this,b)),this.loaded?this.A:this.o;case "quickCast":return 2==this.F.length&&"cast-selector-receiver"==this.F[1].key?(b&&U7(),!0):!1}};
g.h.qN=function(){i8(this.l,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Mc=function(){return!1};g.YX.remote=R8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:00:24 May 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:38:55 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 91.154
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.063
  cdx.remote: 0.059
  esindex: 0.009
  LoadShardBlock: 31.521 (3)
  PetaboxLoader3.datanode: 58.451 (5)
  load_resource: 208.597 (2)
  PetaboxLoader3.resolve: 84.38
*/