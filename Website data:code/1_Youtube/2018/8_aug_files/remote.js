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

(function(g){var window=this;var lCa=function(a,b){return g.Xb(a,b)},m6=function(a){g.Om(a,"zx",g.yb());
return a},n6=function(a,b,c){g.Aa(c)||(c=[String(c)]);
g.Rm(a.o,b,c)},mCa=function(a,b){var c=[];
g.Ck(b,function(a){try{var b=g.lD.prototype.A.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.sa(b)?g.kD(b)&&c.push(a):c.push(a)},a);
return c},nCa=function(a,b){var c=mCa(a,b);
(0,g.B)(c,function(a){g.lD.prototype.remove.call(this,a)},a)},oCa=function(a){if(a.Fd){if(a.Fd.locationOverrideToken)return{locationOverrideToken:a.Fd.locationOverrideToken};
if(null!=a.Fd.latitudeE7&&null!=a.Fd.longitudeE7)return{latitudeE7:a.Fd.latitudeE7,longitudeE7:a.Fd.longitudeE7}}return null},pCa=function(a,b,c,d){var e=new g.Fm(null,void 0);
a&&g.Gm(e,a);b&&g.Hm(e,b);c&&g.Im(e,c);d&&g.Jm(e,d);return e},qCa=function(a){g.aG[a]&&(a=g.aG[a],(0,g.B)(a,function(a){g.ZF[a]&&delete g.ZF[a]}),a.length=0)},rCa=function(a){var b=g.YF();
if(b)if(b.clear(a),a)qCa(a);else for(var c in g.aG)qCa(c)},o6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.B=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.zm;this.o=this.A="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",sCa(this,a.capabilities||""),tCa(this,a.experiments||""),this.A=a.remoteControllerUrl||"",
this.o=a.localChannelEncryptionKey||"")},sCa=function(a,b){a.capabilities.clear();
(0,g.Rd)(b.split(","),g.Ga(lCa,uCa)).forEach(function(b){a.capabilities.add(b)})},tCa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},p6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},q6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},vCa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},wCa=function(a){return new p6(a)},xCa=function(a){return g.Aa(a)?(0,g.G)(a,wCa):[]},r6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},s6=function(a){return g.Aa(a)?"["+(0,g.G)(a,r6).join(",")+"]":"null"},t6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},yCa=function(a){return(0,g.G)(a,function(a){return{key:a.id,
name:a.name}})},u6=function(a,b){return g.La(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},v6=function(a,b){return g.La(a,function(a){return q6(a,b)})},zCa=function(){var a=(0,g.XG)();
a&&nCa(a,a.o.Yd(!0))},w6=function(){var a=g.$G("yt-remote-connected-devices")||[];
g.gb(a);return a},ACa=function(a){if(g.Qa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.G)(a,function(a,b){return 0==b?a:a.substring(c.length)})},BCa=function(a){g.ZG("yt-remote-connected-devices",a,86400)},y6=function(){if(x6)return x6;
var a=g.$G("yt-remote-device-id");a||(a=t6(),g.ZG("yt-remote-device-id",a,31536E3));for(var b=w6(),c=1,d=a;g.Pa(b,d);)c++,d=a+"#"+c;return x6=d},z6=function(){var a=w6(),b=y6();
g.Pa(a,b);g.bH()&&g.kb(a,b);a=ACa(a);if(g.Qa(a))try{g.JG("remote_sid")}catch(c){}else try{g.IG("remote_sid",a.join(","),-1)}catch(c){}},CCa=function(){return g.$G("yt-remote-session-browser-channel")},DCa=function(){return g.$G("yt-remote-local-screens")||[]},ECa=function(){g.ZG("yt-remote-lounge-token-expiration",!0,86400)},FCa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.G)(DCa(),function(a){return a.loungeToken}),c=(0,g.G)(a,function(a){return a.loungeToken});
(0,g.nm)(c,function(a){return!g.Pa(b,a)})&&ECa();
g.ZG("yt-remote-local-screens",a,31536E3)},GCa=function(a,b){g.ZG("yt-remote-session-browser-channel",a);
g.ZG("yt-remote-session-screen-id",b);var c=w6(),d=y6();g.Pa(c,d)||c.push(d);BCa(c);z6()},A6=function(a){a||(g.aH("yt-remote-session-screen-id"),g.aH("yt-remote-session-video-id"));
z6();a=w6();g.Ua(a,y6());BCa(a)},HCa=function(){if(!B6){var a=g.wD();
a&&(B6=new g.fD(a))}return B6?!!B6.get("yt-remote-use-staging-server"):!1},ICa=function(){var a=window.document.createElement("a");
g.fd(a,"https://web.archive.org/web/20180731112316/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Cb(a)},JCa=function(a,b){var c=g.Kd("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.gd(c,g.ie("https://web.archive.org/web/20180731112316/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},KCa=function(){var a=ICa(),b=window.document.getElementById(a),c=b&&g.iF(b,"loaded");
c||b&&!c||(b=JCa(a,function(){g.iF(b,"loaded")||(g.hF(b,"loaded","true"),g.eG(a),g.eE(g.Ga(rCa,a),0))}))},C6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},LCa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},D6=function(a){a.length?MCa(a.shift(),function(){D6(a)}):E6()},NCa=function(a){return"chrome-extension://"+a+F6},MCa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},G6=function(a){return 0<=window.navigator.userAgent.indexOf(a)},E6=function(){var a=LCa();
a&&a(!1,"No cast extension found")},H6=function(){if(OCa){var a=2,b=LCa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;MCa("//web.archive.org/web/20180731112316/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",E6,c)}},PCa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(H6(),a({command:"cast.sender.init"}))},QCa=function(){H6();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);D6(["//web.archive.org/web/20180731112316/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+F6,"//web.archive.org/web/20180731112316/https://www.gstatic.com/eureka/clank"+F6])},I6=function(a,b,c){g.K.call(this);
this.F=null!=c?(0,g.z)(a,c):a;this.xd=b;this.D=(0,g.z)(this.LK,this);this.o=!1;this.A=0;this.B=this.Fa=null;this.C=[]},J6=function(){},K6=function(a,b,c,d){this.o=a;
this.B=b;this.G=c;this.F=d||1;this.C=45E3;this.Y=new g.Vm(this);this.A=new g.Ag;this.A.setInterval(250)},SCa=function(a,b,c){a.Zj=1;
a.Ah=m6(b.clone());a.fj=c;a.D=!0;RCa(a,null)},L6=function(a,b,c,d,e){a.Zj=1;
a.Ah=m6(b.clone());a.fj=null;a.D=c;e&&(a.UE=!1);RCa(a,d)},RCa=function(a,b){a.Pk=(0,g.F)();
M6(a);a.bi=a.Ah.clone();n6(a.bi,"t",a.F);a.sn=0;a.Qc=a.o.Bs(a.o.fn()?b:null);0<a.qt&&(a.oq=new g.el((0,g.z)(a.jG,a,a.Qc),a.qt));a.Y.W(a.Qc,"readystatechange",a.gW);var c=a.Ei?g.ec(a.Ei):{};a.fj?(a.gr="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Qc.send(a.bi,a.gr,a.fj,c)):(a.gr="GET",a.UE&&!g.Gd&&(c.Connection="close"),a.Qc.send(a.bi,a.gr,null,c));a.o.Ef(1)},VCa=function(a,b,c){for(var d=!0;!a.pi&&a.sn<c.length;){var e=TCa(a,c);
if(e==N6){4==b&&(a.Bh=4,O6(15),d=!1);break}else if(e==UCa){a.Bh=4;O6(16);d=!1;break}else P6(a,e)}4==b&&0==c.length&&(a.Bh=1,O6(17),d=!1);a.Kf=a.Kf&&d;d||(Q6(a),R6(a))},TCa=function(a,b){var c=a.sn,d=b.indexOf("\n",c);
if(-1==d)return N6;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return UCa;d+=1;if(d+c>b.length)return N6;var e=b.substr(d,c);a.sn=d+c;return e},XCa=function(a,b){a.Pk=(0,g.F)();
M6(a);var c=b?window.location.hostname:"";a.bi=a.Ah.clone();g.Om(a.bi,"DOMAIN",c);g.Om(a.bi,"t",a.F);try{a.Lf=new window.ActiveXObject("htmlfile")}catch(n){Q6(a);a.Bh=7;O6(22);R6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in S6)k=S6[l];else if(l in WCa)k=S6[l]=WCa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=S6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.hd(g.Ac("b/12014412"),d);a.Lf.open();a.Lf.write(g.Zc(c));a.Lf.close();a.Lf.parentWindow.m=(0,g.z)(a.oV,a);a.Lf.parentWindow.d=(0,g.z)(a.dE,a,!0);a.Lf.parentWindow.rpcClose=(0,g.z)(a.dE,a,!1);c=a.Lf.createElement("DIV");a.Lf.parentWindow.document.body.appendChild(c);d=g.Oc(a.bi.toString());d=g.sb(g.Lc(d));d=g.hd(g.Ac("b/12014412"),'<iframe src="'+d+'"></iframe>');g.ed(c,g.Zc(d));a.o.Ef(1)},
M6=function(a){a.Uw=(0,g.F)()+a.C;
YCa(a,a.C)},YCa=function(a,b){if(null!=a.jl)throw Error("WatchDog timer not null");
a.jl=T6((0,g.z)(a.FV,a),b)},U6=function(a){a.jl&&(g.w.clearTimeout(a.jl),a.jl=null)},R6=function(a){a.o.hA()||a.pi||a.o.Zp(a)},Q6=function(a){U6(a);
g.jf(a.oq);a.oq=null;a.A.stop();g.an(a.Y);if(a.Qc){var b=a.Qc;a.Qc=null;b.abort();b.dispose()}a.Lf&&(a.Lf=null)},P6=function(a,b){try{a.o.VD(a,b),a.o.Ef(4)}catch(c){}},$Ca=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;ZCa(a,b,function(e){e?c(!0):g.w.setTimeout(function(){$Ca(a,b,c,d,f)},f)})}},ZCa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{V6(d),c(!0)}catch(e){}};
d.onerror=function(){try{V6(d),c(!1)}catch(e){}};
d.onabort=function(){try{V6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{V6(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},V6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},aDa=function(a){this.o=a;
this.A=new J6},bDa=function(a){var b=W6(a.o,a.vl,"/mail/images/cleardot.gif");
m6(b);$Ca(b.toString(),5E3,(0,g.z)(a.QJ,a),3,2E3);a.Ef(1)},Y6=function(a){var b=a.o.I;
if(null!=b)O6(5),b?(O6(11),X6(a.o,a,!1)):(O6(12),X6(a.o,a,!0));else if(a.Be=new K6(a,void 0,void 0,void 0),a.Be.Ei=a.kt,b=a.o,b=W6(b,b.fn()?a.Xl:null,a.lt),O6(5),!g.Ed||g.tc(10))n6(b,"TYPE","xmlhttp"),L6(a.Be,b,!1,a.Xl,!1);else{n6(b,"TYPE","html");var c=a.Be;a=!!a.Xl;c.Zj=3;c.Ah=m6(b.clone());XCa(c,a)}},Z6=function(a,b,c){this.o=1;
this.A=[];this.C=[];this.D=new J6;this.H=a||null;this.I=null!=b?b:null;this.F=c||!1},cDa=function(a,b){this.o=a;
this.map=b;this.context=null},dDa=function(a){g.lf.call(this,"statevent",a)},eDa=function(a,b){g.lf.call(this,"timingevent",a);
this.size=b},fDa=function(a){g.lf.call(this,"serverreachability",a)},iDa=function(a){gDa(a);
if(3==a.o){var b=a.Mm++,c=a.Go.clone();g.Om(c,"SID",a.B);g.Om(c,"RID",b);g.Om(c,"TYPE","terminate");$6(a,c);b=new K6(a,a.B,b,void 0);b.Zj=2;b.Ah=m6(c.clone());(new window.Image).src=b.Ah;b.Pk=(0,g.F)();M6(b)}hDa(a)},jDa=function(a){a.mK(1,0);
a.Go=W6(a,null,a.jt);a7(a)},gDa=function(a){a.nh&&(a.nh.abort(),a.nh=null);
a.xc&&(a.xc.cancel(),a.xc=null);a.xg&&(g.w.clearTimeout(a.xg),a.xg=null);b7(a);a.de&&(a.de.cancel(),a.de=null);a.sh&&(g.w.clearTimeout(a.sh),a.sh=null)},kDa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.A.push(new cDa(a.bR++,b));2!=a.o&&3!=a.o||a7(a)},a7=function(a){a.de||a.sh||(a.sh=T6((0,g.z)(a.bE,a),0),a.Oj=0)},mDa=function(a,b){if(1==a.o){if(!b){a.Mm=Math.floor(1E5*Math.random());
var c=a.Mm++,d=new K6(a,"",c,void 0);d.Ei=null;var e=c7(a),f=a.Go.clone();g.Om(f,"RID",c);g.Om(f,"CVER","1");$6(a,f);SCa(d,f,e);a.de=d;a.o=2}}else 3==a.o&&(b?lDa(a,b):0==a.A.length||a.de||lDa(a))},lDa=function(a,b){if(b)if(6<a.si){a.A=a.C.concat(a.A);
a.C.length=0;var c=a.Mm-1;var d=c7(a)}else c=b.G,d=b.fj;else c=a.Mm++,d=c7(a);var e=a.Go.clone();g.Om(e,"SID",a.B);g.Om(e,"RID",c);g.Om(e,"AID",a.pk);$6(a,e);c=new K6(a,a.B,c,a.Oj+1);c.Ei=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.de=c;SCa(c,e,d)},$6=function(a,b){if(a.wd){var c=a.wd.Oz();
c&&g.Kb(c,function(a,c){g.Om(b,c,a)})}},c7=function(a){var b=Math.min(a.A.length,1E3),c=["count="+b];
if(6<a.si&&0<b){var d=a.A[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.A[e].o,k=a.A[e].map;f=6>=a.si?e:f-d;try{g.Kb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.C=a.C.concat(a.A.splice(0,b));
return c.join("&")},nDa=function(a){a.xc||a.xg||(a.G=1,a.xg=T6((0,g.z)(a.aE,a),0),a.Bj=0)},d7=function(a){if(a.xc||a.xg||3<=a.Bj)return!1;
a.G++;a.xg=T6((0,g.z)(a.aE,a),oDa(a,a.Bj));a.Bj++;return!0},X6=function(a,b,c){a.fr=c;
a.Zf=b.Ig;a.F||jDa(a)},b7=function(a){null!=a.ti&&(g.w.clearTimeout(a.ti),a.ti=null)},oDa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},e7=function(a,b){if(2==b||9==b){var c=null;
a.wd&&(c=null);var d=(0,g.z)(a.bX,a);c||(c=new g.Fm("//web.archive.org/web/20180731112316/https://www.google.com/images/cleardot.gif"),m6(c));ZCa(c.toString(),1E4,d)}else O6(2);pDa(a,b)},pDa=function(a,b){a.o=0;
a.wd&&a.wd.Ny(b);hDa(a);gDa(a)},hDa=function(a){a.o=0;
a.Zf=-1;if(a.wd)if(0==a.C.length&&0==a.A.length)a.wd.ls();else{g.Ya(a.C);var b=g.Ya(a.A);a.C.length=0;a.A.length=0;a.wd.ls(b)}},W6=function(a,b,c){var d=g.Pm(c);
if(""!=d.A)b&&g.Hm(d,b+"."+d.A),g.Im(d,d.D);else{var e=window.location;d=pCa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Hl&&g.Kb(a.Hl,function(a,b){g.Om(d,b,a)});
g.Om(d,"VER",a.si);$6(a,d);return d},T6=function(a,b){if(!g.Ca(a))throw Error("Fn must not be null and must be a function");
return g.w.setTimeout(function(){a()},b)},O6=function(a){f7.dispatchEvent(new dDa(f7,a))},qDa=function(){},rDa=function(a,b){this.action=a;
this.params=b||{}},g7=function(a,b){g.K.call(this);
this.o=new g.gu(this.fV,0,this);g.M(this,this.o);this.xd=5E3;this.A=0;if(g.Ca(a))b&&(a=(0,g.z)(a,b));else if(a&&g.Ca(a.handleEvent))a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},h7=function(a,b,c){this.L=a;
this.F=b;this.B=new g.eD;this.A=new g7(this.LX,this);this.o=this.gb=null;this.K=!1;this.D=null;this.I="";this.H=this.C=0;this.G=[];this.M=c||!1},sDa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.fr,sessionId:a.o.B,arrayId:a.o.pk}},tDa=function(a,b){a.H=b||0;
a.A.stop();a.o&&(3==a.o.o&&mDa(a.o),iDa(a.o));a.H=0},i7=function(a){return!!a.o&&3==a.o.o},uDa=function(a,b){(a.F.loungeIdToken=b)||a.A.stop()},j7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.A=!0;a=a||window.document.location.href;var b=g.Qg(a)||"";b&&(this.port=":"+b);this.domain=g.Pg(a)||"";a=g.Ib;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Bb(a,"10.0")&&(this.A=!1))},k7=function(a,b){var c=a.o;
if(g.sa(void 0)?0:a.A)c="https://"+a.domain+a.port+a.o;return g.Zg(c+b,{})},l7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ga(a.C,d,!0),onError:g.Ga(a.B,e),Cd:g.Ga(a.D,e)};c&&(a.Pb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.vE(b,a)},yDa=function(){var a=vDa;
wDa();m7.push(a);xDa(m7)},n7=function(a,b){wDa();
var c=m7,d=zDa(a,String(b));g.Qa(c)?ADa(d):(xDa(c),(0,g.B)(c,function(a){a(d)}))},wDa=function(){m7||(m7=g.x("yt.mdx.remote.debug.handlers_")||[],g.va("yt.mdx.remote.debug.handlers_",m7,void 0))},ADa=function(a){var b=(o7+1)%50;
o7=b;p7[b]=a;q7||(q7=49==b)},xDa=function(a){var b=p7;
if(b[0]){var c=o7,d=q7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.B)(a,function(a){a(e)})}while(d!=c);
p7=Array(50);o7=-1;q7=!1}},zDa=function(a,b){var c=((0,g.F)()-BDa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},r7=function(a){g.QF.call(this);
this.G=a;this.o=[]},CDa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},DDa=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Rd)(a.o,function(a){return!!u6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=CDa(a,b[d])||c;return c},EDa=function(a,b){var c=a.o.length;
a.o=(0,g.Rd)(a.o,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.o.length<c},s7=function(a,b,c,d){g.QF.call(this);
this.F=a;this.D=b;this.B=c;this.C=d;this.A=0;this.o=null;this.Fa=window.NaN},u7=function(a){r7.call(this,"LocalScreenService");
this.B=a;this.A=window.NaN;t7(this);this.info("Initializing with "+s6(this.o))},FDa=function(a){if(a.o.length){var b=(0,g.G)(a.o,function(a){return a.id}),c=k7(a.B,"/pairing/get_lounge_token_batch");
l7(a.B,c,{screen_ids:b.join(",")},(0,g.z)(a.YK,a),(0,g.z)(a.XK,a))}},t7=function(a){var b=xCa(DCa());
b=(0,g.Rd)(b,function(a){return!a.uuid});
return DDa(a,b)},v7=function(a,b){FCa((0,g.G)(a.o,vCa));
b&&ECa()},x7=function(a,b){g.QF.call(this);
this.F=b;var c=g.$G("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.F(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Pa(c,l)}this.o=d;this.D=a;this.B=this.C=window.NaN;this.A=null;w7("Initialized with "+g.Hg(this.o))},GDa=function(a,b,c){var d=k7(a.D,"/pairing/get_screen_availability");
l7(a.D,d,{lounge_token:b.token},(0,g.z)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},y7=function(a,b){a:if(g.Pb(b)!=g.Pb(a.o))var c=!1;
else{c=g.Ub(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(w7("Updated online screens: "+g.Hg(a.o)),a.o=b,a.V("screenChange"));HDa(a)},z7=function(a){(0,window.isNaN)(a.B)||g.gE(a.B);
a.B=g.eE((0,g.z)(a.dw,a),0<a.C&&a.C<(0,g.F)()?2E4:1E4)},w7=function(a){n7("OnlineScreenService",a)},IDa=function(a){var b={};
(0,g.B)(a.F(),function(a){a.token?b[a.token]=a.id:this.hc("Requesting availability of screen w/o lounge token.")});
return b},HDa=function(a){a=g.Ub(g.Mb(a.o,function(a){return a}));
g.gb(a);a.length?g.ZG("yt-remote-online-screen-ids",a.join(","),60):g.aH("yt-remote-online-screen-ids")},A7=function(a){r7.call(this,"ScreenService");
this.F=a;this.A=this.B=null;this.C=[];this.D={};JDa(this)},LDa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.te();if(k=(c?v6(k,c):null)||v6(k,b)){k.uuid=b;var l=B7(a,k);GDa(a.A,l,function(a){e(a?l:null)})}else c?KDa(a,c,(0,g.z)(function(a){var f=B7(this,new p6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));GDa(this.A,f,function(a){e(a?f:null)})},a),f):e(null)},MDa=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},KDa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Pb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.vE(k7(a.F,"/pairing/get_lounge_token_batch"),e)},NDa=function(a){a.o=a.B.te();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+s6(a.o))},JDa=function(a){C7(a);
a.B=new u7(a.F);a.B.subscribe("screenChange",(0,g.z)(a.nL,a));NDa(a);a.C=xCa(g.$G("yt-remote-automatic-screen-cache")||[]);C7(a);a.info("Initializing automatic screens: "+s6(a.C));a.A=new x7(a.F,(0,g.z)(a.te,a,!0));a.A.subscribe("screenChange",(0,g.z)(function(){this.V("onlineScreenChange")},a))},B7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=v6(a.C,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.C.push(b),g.ZG("yt-remote-automatic-screen-cache",(0,g.G)(a.C,vCa)));C7(a);a.D[b.uuid]=b.id;g.ZG("yt-remote-device-id-map",a.D,31536E3);return b},C7=function(a){a.D=g.$G("yt-remote-device-id-map")||{}},D7=function(a,b,c){g.QF.call(this);
this.M=c;this.I=a;this.A=b;this.B=null},E7=function(a,b){n7(a.M,b)},F7=function(a,b){D7.call(this,a,b,"CastSession");
this.o=null;this.C=0;this.F=(0,g.z)(this.RX,this);this.D=(0,g.z)(this.RV,this);this.C=g.eE((0,g.z)(function(){ODa(this,null)},this),12E4)},PDa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Hg(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.y,(0,g.z)(function(){E7(this,"Failed to send message: getMdxSessionStatus.")},a)):E7(a,"Sending yt message without session: "+g.Hg(b))},ODa=function(a,b){g.gE(a.C);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.B||a.B.id!=b){var c=(0,g.z)(a.aq,a),d=(0,g.z)(a.ze,a);a.Yz(b,c,d,5)}}else a.ze(Error("Waiting for session status timed out."))},G7=function(a,b,c){D7.call(this,a,b,"DialSession");
this.C=this.H=null;this.K="";this.O=c;this.D=null;this.G=g.y;this.F=window.NaN;this.L=(0,g.z)(this.UX,this);this.o=g.y},QDa=function(a){a.o=a.I.qG(a.K,a.A.label,a.A.friendlyName,(0,g.z)(function(a){this.o=g.y;
this.aq(a)},a),(0,g.z)(function(a){this.o=g.y;
this.ze(a)},a))},RDa=function(a){var b={};
b.pairingCode=a.K;b.theme=a.O;if(a.D){var c=a.D.currentTime||0;b.v=a.D.videoId;b.t=c}HCa()&&(b.env_useStageMdx=1);return g.Xg(b)},H7=function(a,b){D7.call(this,a,b,"ManualSession");
this.o=g.eE((0,g.z)(this.rk,this,null),150)},I7=function(a,b,c,d){g.QF.call(this);
this.A=a;this.G=b||"233637DE";this.F=c||"cl";this.H=d||!1;this.o=null;this.D=!1;this.B=[];this.C=(0,g.z)(this.sU,this)},SDa=function(a,b){return b?g.La(a.B,function(a){return q6(b,a.label)},a):null},J7=function(a){n7("Controller",a)},vDa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},K7=function(a){return a.D||!!a.B.length||!!a.o},L7=function(a,b,c){b!=a.o&&(g.jf(a.o),(a.o=b)?(c?a.V("yt-remote-cast2-receiver-resumed",b.A):a.V("yt-remote-cast2-receiver-selected",
b.A),b.subscribe("sessionScreen",(0,g.z)(a.YD,a,b)),b.B?a.V("yt-remote-cast2-session-change",b.B):c&&a.o.rk(null)):a.V("yt-remote-cast2-session-change",null))},TDa=function(a){var b=a.A.pG(),c=a.o&&a.o.A;
a=(0,g.G)(b,function(a){c&&q6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=SDa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},ZDa=function(a,b,c,d,e,f,k){UDa()?VDa(b,e,f,k)&&(N7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?WDa(a,c):(window.__onGCastApiAvailable=function(b,d){b?WDa(a,c):(O7("Failed to load cast API: "+d),P7(!1),N7(!1),g.aH("yt-remote-cast-available"),g.aH("yt-remote-cast-receiver"),XDa(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20180731112316/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):KCa():G6("CriOS")?PCa():G6("Android")&&G6("Chrome/")&&window.navigator.presentation?QCa():window.chrome&&window.navigator.presentation&&!G6("Edge")?(H6(),D6(YDa.map(NCa))):E6())):M7("Cannot initialize because not running Chrome")},XDa=function(){M7("dispose");
var a=Q7();a&&a.dispose();g.va("yt.mdx.remote.cloudview.instance_",null,void 0);$Da(!1);g.cG(R7);R7.length=0},S7=function(){return!!g.$G("yt-remote-cast-installed")},aEa=function(){var a=g.$G("yt-remote-cast-receiver");
return a?a.friendlyName:null},bEa=function(){M7("clearCurrentReceiver");
g.aH("yt-remote-cast-receiver")},cEa=function(){return S7()?Q7()?Q7().getCastSession():(O7("getCastSelector: Cast is not initialized."),null):(O7("getCastSelector: Cast API is not installed!"),null)},U7=function(){S7()?Q7()?T7()?(M7("Requesting cast selector."),Q7().requestSession()):(M7("Wait for cast API to be ready to request the session."),R7.push(g.bG("yt-remote-cast2-api-ready",U7))):O7("requestCastSelector: Cast is not initialized."):O7("requestCastSelector: Cast API is not installed!")},V7=
function(a,b){T7()?Q7().setConnectedScreenStatus(a,b):O7("setConnectedScreenStatus called before ready.")},UDa=function(){var a=0<=g.Ib.search(/ (CrMo|Chrome|CriOS)\//);
return g.NI||a},dEa=function(a,b){Q7().init(a,b)},VDa=function(a,b,c,d){var e=!1;
Q7()||(a=new I7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.ZG("yt-remote-cast-available",a);g.fG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){M7("onReceiverSelected: "+a.friendlyName);
g.ZG("yt-remote-cast-receiver",a);g.fG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){M7("onReceiverResumed: "+a.friendlyName);
g.ZG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){M7("onSessionChange: "+r6(a));
a||g.aH("yt-remote-cast-receiver");g.fG("yt-remote-cast2-session-change",a)}),g.va("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
M7("cloudview.createSingleton_: "+e);return e},Q7=function(){return g.x("yt.mdx.remote.cloudview.instance_")},WDa=function(a,b){P7(!0);
N7(!1);dEa(a,function(a){a?($Da(!0),g.eG("yt-remote-cast2-api-ready")):(O7("Failed to initialize cast API."),P7(!1),g.aH("yt-remote-cast-available"),g.aH("yt-remote-cast-receiver"),XDa());b(a)})},M7=function(a){n7("cloudview",a)},O7=function(a){n7("cloudview",a)},P7=function(a){M7("setCastInstalled_ "+a);
g.ZG("yt-remote-cast-installed",a)},T7=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},$Da=function(a){M7("setApiReady_ "+a);
g.va("yt.mdx.remote.cloudview.apiReady_",a,void 0)},N7=function(a){g.va("yt.mdx.remote.cloudview.initializing_",a,void 0)},W7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.o=-1;this.muted=!1;this.audioTrackId=null;this.G=this.H=0;this.A=null;this.hasNext=this.eg=!1;this.K=this.I=this.B=this.D=0;this.C=window.NaN;this.F=!1;this.reset(a)},X7=function(a){a.audioTrackId=null;
a.A=null;a.o=-1;a.eg=!1;a.hasNext=!1;a.H=0;a.G=(0,g.F)();a.D=0;a.B=0;a.I=0;a.K=0;a.C=window.NaN;a.F=!1},Y7=function(a){return a.qb()?((0,g.F)()-a.G)/1E3:0},Z7=function(a,b){a.H=b;
a.G=(0,g.F)()},$7=function(a){switch(a.o){case 1:case 1081:return((0,g.F)()-a.G)/1E3+a.H;
case -1E3:return 0}return a.H},a8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&X7(a)},b8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.o;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.fc(a.A);b.hasPrevious=a.eg;b.hasNext=a.hasNext;b.playerTime=a.H;b.playerTimeAt=a.G;b.seekableStart=a.D;b.seekableEnd=a.B;b.duration=a.I;b.loadedTime=a.K;b.liveIngestionTime=a.C;return b},d8=function(a,b){g.QF.call(this);
this.o=0;this.C=a;this.F=[];this.D=new g.uC;this.B=this.A=null;this.I=(0,g.z)(this.LR,this);this.G=(0,g.z)(this.Pm,this);this.H=(0,g.z)(this.KR,this);this.K=(0,g.z)(this.XR,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.bx,this),eEa(this))):c=3;0!=c&&(b?this.bx(c):g.eE((0,g.z)(function(){this.bx(c)},this),0));
var d=cEa();d&&c8(this,d);this.subscribe("yt-remote-cast2-session-change",this.K)},e8=function(a){return new W7(a.C.getPlayerContextData())},eEa=function(a){(0,g.B)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.F.push(this.C.subscribe(a,g.Ga(this.nU,a),this))},a)},fEa=function(a){(0,g.B)(a.F,function(a){this.C.unsubscribeByKey(a)},a);
a.F.length=0},f8=function(a,b){50>a.D.yc()&&g.wC(a.D,b)},h8=function(a,b,c){var d=e8(a);
Z7(d,c);-1E3!=d.o&&(d.o=b);g8(a,d)},i8=function(a,b,c){a.C.sendMessage(b,c)},g8=function(a,b){fEa(a);
a.C.setPlayerContextData(b8(b));eEa(a)},c8=function(a,b){a.B&&(a.B.removeUpdateListener(a.I),a.B.removeMediaListener(a.G),a.Pm(null));
a.B=b;a.B&&(n7("CP","Setting cast session: "+a.B.sessionId),a.B.addUpdateListener(a.I),a.B.addMediaListener(a.G),a.B.media.length&&a.Pm(a.B.media[0]))},gEa=function(a){var b=a.A.media,c=a.A.customData;
if(b&&c){var d=e8(a);b.contentId!=d.videoId&&n7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.o=c.playerState;Z7(d,a.A.getEstimatedTime());g8(a,d)}else n7("CP","No cast media video. Ignoring state update.")},j8=function(a,b,c){return(0,g.z)(function(a){this.hc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.hc("Retrying "+b+" using MDx browser channel."),i8(this,b,c))},a)},k8=function(a,b,c){g.QF.call(this);
this.D=window.NaN;this.O=!1;this.K=this.I=this.L=this.M=window.NaN;this.T=[];this.C=this.G=this.B=this.ib=this.o=null;this.sa=a;this.T.push(g.zF(window,"beforeunload",(0,g.z)(this.PK,this)));this.A=[];this.ib=new W7;this.ba=b.id;this.o=hEa(this,c);this.o.subscribe("handlerOpened",this.PR,this);this.o.subscribe("handlerClosed",this.MR,this);this.o.subscribe("handlerError",this.NR,this);this.o.subscribe("handlerMessage",this.OR,this);uDa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.ib.videoId;g.bH()&&g.ZG("yt-remote-session-video-id",a)},this)},l8=function(a){n7("conn",a)},hEa=function(a,b){return new h7(k7(a.sa,"/bc"),b)},m8=function(a,b){a.V("proxyStateChange",b)},iEa=function(a){a.D=g.eE((0,g.z)(function(){l8("Connecting timeout");
this.F(1)},a),2E4)},n8=function(a){g.gE(a.D);
a.D=window.NaN},o8=function(a){g.gE(a.M);
a.M=window.NaN},jEa=function(a){p8(a);
a.L=g.eE((0,g.z)(function(){q8(this,"getNowPlaying")},a),2E4)},p8=function(a){g.gE(a.L);
a.L=window.NaN},lEa=function(a,b){b&&(n8(a),o8(a));
b==(i7(a.o)&&(0,window.isNaN)(a.D))?b&&(m8(a,1),q8(a,"getSubtitlesTrack")):b?(a.Z()&&a.ib.reset(),m8(a,1),q8(a,"getNowPlaying"),kEa(a)):a.F(1)},mEa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.ib.videoId&&(g.$b(b.params)?a.ib.A=null:a.ib.A=b.params,a.V("remotePlayerChange"))},nEa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.ib.listId=b.params.listId||a.ib.listId;a8(a.ib,c,d);a.V("remoteQueueChange")},pEa=function(a,b){b.params=b.params||{};
nEa(a,b);oEa(a,b);a.V("autoplayDismissed")},oEa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
Z7(a.ib,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.ib.o&&(c=-1E3);a.ib.o=c;c=Number(b.params.loadedTime);a.ib.K=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.ib.I=(0,window.isNaN)(c)?0:c;c=a.ib;var d=Number(b.params.liveIngestionTime);c.C=d;c.F=(0,window.isNaN)(d)?!1:!0;c=a.ib;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.D=(0,window.isNaN)(d)?0:d;c.B=(0,window.isNaN)(e)?0:e;1==a.ib.o?jEa(a):p8(a);
a.V("remotePlayerChange")},qEa=function(a,b){if(-1E3!=a.ib.o){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.ib.o=c;c=(0,window.parseInt)(b.params.currentTime,10);Z7(a.ib,(0,window.isNaN)(c)?0:c);a.V("remotePlayerChange")}},rEa=function(a,b){var c="true"==b.params.muted;
a.ib.volume=(0,window.parseInt)(b.params.volume,10);a.ib.muted=c;a.V("remotePlayerChange")},sEa=function(a,b){a.G=b.params.videoId;
a.V("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},tEa=function(a,b){var c="true"==b.params.hasNext;
a.ib.eg="true"==b.params.hasPrevious;a.ib.hasNext=c;a.V("previousNextChange")},kEa=function(a){g.gE(a.K);
a.K=g.eE((0,g.z)(a.F,a,1),864E5)},q8=function(a,b,c){c?l8("Sending: action="+b+", params="+g.Hg(c)):l8("Sending: action="+b);
a.o.sendMessage(b,c)},r8=function(a){r7.call(this,"ScreenServiceProxy");
this.gd=a;this.A=[];this.A.push(this.gd.$_s("screenChange",(0,g.z)(this.PX,this)));this.A.push(this.gd.$_s("onlineScreenChange",(0,g.z)(this.LT,this)))},yEa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.ZD("MDX_CONFIG")||b;zCa();z6();s8||(s8=new j7(b?b.loungeApiHost:void 0),HCa()&&(s8.o="/api/loungedev"));t8||(t8=g.x("yt.mdx.remote.deferredProxies_")||[],g.va("yt.mdx.remote.deferredProxies_",t8,void 0));uEa();var c=u8();if(!c){var d=new A7(s8);g.va("yt.mdx.remote.screenService_",d,void 0);c=u8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);ZDa(a,d,function(a){a?v8()&&V7(v8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.fG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.va("yt.mdx.remote.initialized_",!0,void 0),w8("Initializing: "+g.Hg(b)),x8.push(g.bG("yt-remote-cast2-availability-change",function(){g.fG("yt-remote-receiver-availability-change")})),x8.push(g.bG("yt-remote-cast2-receiver-selected",function(){y8(null);
g.fG("yt-remote-auto-connect","cast-selector-receiver")})),x8.push(g.bG("yt-remote-cast2-receiver-resumed",function(){g.fG("yt-remote-receiver-resumed","cast-selector-receiver")})),x8.push(g.bG("yt-remote-cast2-session-change",vEa)),x8.push(g.bG("yt-remote-connection-change",function(a){a?V7(v8(),"YouTube TV"):z8()||(V7(null,null),bEa())})),a=A8(),b.isAuto&&(a.id+="#dial"),g.WF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),w8(" -- with channel params: "+
g.Hg(a)),wEa(a),c.start(),v8()||xEa())},AEa=function(){var a=zEa();
S7()&&g.$G("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},zEa=function(){var a=u8().gd.$_gos();
var b=B8();b&&C8()&&(u6(a,b)||a.push(b));return yCa(a)},D8=function(){var a=BEa();
!a&&S7()&&aEa()&&(a={key:"cast-selector-receiver",name:aEa()});return a},BEa=function(){var a=zEa(),b=B8();
b||(b=z8());return g.La(a,function(a){return b&&q6(b,a.key)?!0:!1})},B8=function(){var a=v8();
if(!a)return null;var b=u8().te();return v6(b,a)},vEa=function(a){w8("remote.onCastSessionChange_: "+r6(a));
if(a){var b=B8();b&&b.id==a.id?V7(b.id,"YouTube TV"):(b&&E8(),F8(a,1))}else C8()&&E8()},E8=function(){T7()?Q7().stopSession():O7("stopSession called before API ready.");
var a=C8();a&&(a.disconnect(1),G8(null))},H8=function(){var a=C8();
return!!a&&3!=a.getProxyState()},w8=function(a){n7("remote",a)},u8=function(){if(!I8){var a=g.x("yt.mdx.remote.screenService_");
I8=a?new r8(a):null}return I8},v8=function(){return g.x("yt.mdx.remote.currentScreenId_")},CEa=function(a){g.va("yt.mdx.remote.currentScreenId_",a,void 0)},DEa=function(){return g.x("yt.mdx.remote.connectData_")},y8=function(a){g.va("yt.mdx.remote.connectData_",a,void 0)},C8=function(){return g.x("yt.mdx.remote.connection_")},G8=function(a){var b=C8();
y8(null);a||CEa("");g.va("yt.mdx.remote.connection_",a,void 0);t8&&((0,g.B)(t8,function(b){b(a)}),t8.length=0);
b&&!a?g.fG("yt-remote-connection-change",!1):!b&&a&&g.fG("yt-remote-connection-change",!0)},z8=function(){var a=g.bH();
if(!a)return null;var b=u8().te();return v6(b,a)},F8=function(a,b){B8()&&B8();
CEa(a.id);var c=new k8(s8,a,A8());c.connect(b,DEa());c.subscribe("beforeDisconnect",function(a){g.fG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){C8()&&G8(null)});
G8(c)},xEa=function(){var a=z8();
a?(w8("Resume connection to: "+r6(a)),F8(a,0)):(A6(),bEa(),w8("Skipping connecting because no session screen found."))},uEa=function(){var a=A8();
if(g.$b(a)){a=y6();var b=g.$G("yt-remote-session-name")||"",c=g.$G("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.va("yt.mdx.remote.channelParams_",a,void 0)}},A8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},wEa=function(a){a?(g.ZG("yt-remote-session-app",a.app),g.ZG("yt-remote-session-name",a.name)):(g.aH("yt-remote-session-app"),g.aH("yt-remote-session-name"));
g.va("yt.mdx.remote.channelParams_",a,void 0)},J8=function(a,b,c){g.K.call(this);
this.H=a;this.A=b;this.B=new g.NF(this);g.M(this,this.B);this.B.R(b,"onCaptionsTrackListChanged",this.eT);this.B.R(b,"captionschanged",this.JR);this.B.R(b,"captionssettingschanged",this.DF);this.B.R(b,"videoplayerreset",this.bq);this.B.R(b,"mdxautoplaycancel",this.PJ);this.T=this.B.R(b,"onVolumeChange",this.GD);this.G=!1;this.o=c;c.subscribe("proxyStateChange",this.UD,this);c.subscribe("remotePlayerChange",this.Sm,this);c.subscribe("remoteQueueChange",this.bq,this);c.subscribe("autoplayUpNext",this.rD,
this);c.subscribe("previousNextChange",this.RD,this);c.subscribe("nowAutoplaying",this.ID,this);c.subscribe("autoplayDismissed",this.qD,this);this.suggestion=null;this.I=new g.DP(64);this.C=new g.gu(this.zF,500,this);g.M(this,this.C);this.D=new g.gu(this.AF,1E3,this);g.M(this,this.D);this.L=new I6(this.qX,0,this);g.M(this,this.L);this.F={};this.M=new g.gu(this.ZF,1E3,this);g.M(this,this.M);this.K=new g.el(this.JP,1E3,this);g.M(this,this.K);this.O=g.y;this.DF();this.bq();this.Sm()},K8=function(a,b){var c=
a.H,d=a.A.getVideoData().lengthSeconds;
c.I=b||0;c.o.V("progresssync",b,d)},EEa=function(a){K8(a,0);
a.C.stop();L8(a,new g.DP(64))},N8=function(a,b){if(M8(a)&&!a.G){var c=null;
b&&(c={style:a.A.Yi()},g.hc(c,b));a.o.oF(a.A.getVideoData(1).videoId,c);a.F=e8(a.o).A}},O8=function(a,b){var c=a.A.mg();
if(c){var d=c.re();var e=c.listId.toString()}var f=a.A.getVideoData(1);c=a.o;var k=f.videoId,l=d;d=f.playerParams;var m=f.jk;f=oCa(f);var n=e8(c);l=l||0;var p={videoId:k,currentIndex:l};a8(n,k,l);g.sa(b)&&(Z7(n,b),p.currentTime=b);g.sa(e)&&(p.listId=e);null!=d&&(p.playerParams=d);null!=m&&(p.clickTrackingParams=m);null!=f&&(p.locationInfo=g.Hg(f));i8(c,"setPlaylist",p);e||g8(c,n);L8(a,new g.DP(1))},FEa=function(a,b){if(b){var c=a.A.Bc("captions","tracklist",{RA:1});
c&&c.length?(a.A.Sd("captions","track",b),a.G=!1):(a.A.yk("captions"),a.G=!0)}else a.A.Sd("captions","track",{})},M8=function(a){return e8(a.o).videoId==a.A.getVideoData(1).videoId},L8=function(a,b){a.D.stop();
var c=a.I;if(!g.IP(c,b)){var d=g.W(b,2);d!=g.W(a.I,2)&&g.gU(a.A,d);a.I=b;GEa(a.H,c,b)}},P8=function(a){g.V.call(this,{J:"div",
N:"ytp-remote",P:[{J:"div",N:"ytp-remote-display-status",P:[{J:"div",N:"ytp-remote-display-status-icon",P:[g.aqa()]},{J:"div",N:"ytp-remote-display-status-text",ca:"{{statustext}}"}]}]});this.A=new g.XU(this,250);g.M(this,this.A);this.C=a;this.R(a,"presentingplayerstatechange",this.D);HEa(this,g.dU(a))},HEa=function(a,b){if(3==a.C.Ra()){var c={RECEIVER_NAME:a.C.Bc("remote","currentReceiver").name};
c=g.W(b,128)?g.e0("Fehler auf $RECEIVER_NAME",c):b.qb()||g.W(b,4)?g.e0("Wiedergabe \u00fcber $RECEIVER_NAME",c):g.e0("Verbunden mit $RECEIVER_NAME",c);a.updateValue("statustext",c);a.A.show()}else a.A.hide()},Q8=function(a,b){g.gZ.call(this,"Wiedergeben auf",0,a,b);
this.A=a;this.I={};this.R(a,"onMdxReceiversChange",this.L);this.R(a,"presentingplayerstatechange",this.L);this.L()},R8=function(a){g.DU.call(this,a);
this.B={key:t6(),name:"Dieser Computer"};this.D=null;this.F=[];this.K=this.A=null;this.H=[this.B];this.C=this.B;this.G=new g.DP(64);this.I=0;if(!g.OM(g.X(this.o))){a=this.o;var b=g.RH(a);b&&(b=b.yp())&&(b=new Q8(a,b),g.M(this,b));b=new P8(a);g.M(this,b);g.wU(a,b.element,4)}},GEa=function(a,b,c){a.G=c;
a.o.V("presentingplayerstatechange",new g.NP(c,b))},S8=function(a,b){if(b.key!=a.C.key)if(b.key==a.B.key)E8();
else{a.C=b;var c=a.o.getPlaylistId();var d=a.o.getVideoData(1);var e=d.videoId;if(c||e){var f=a.o.mg();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.ac(l).videoId}else k=[e];f=a.o.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.jk,index:Math.max(a.o.WB(),0),currentTime:0==f?void 0:f};(d=oCa(d))&&(c.locationInfo=d);d=c}else d=null;w8("Connecting to: "+g.Hg(b));"cast-selector-receiver"==b.key?(y8(d||null),T7()?Q7().setLaunchParams(d||null):
O7("setLaunchParams called before ready.")):!d&&H8()&&v8()==b.key?g.fG("yt-remote-connection-change",!0):(E8(),y8(d||null),d=u8().te(),(d=v6(d,b.key))&&F8(d,1))}},WCa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},S6={"'":"\\'"},IEa={},uCa={eZ:"atp",I3:"ska",X2:"que",h2:"mus",E3:"sus",n0:"dsp"};
o6.prototype.oo=function(){var a=new o6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.B=this.B;a.A=this.A;a.o=this.o};
var B6,x6="",F6=C6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",OCa=C6("loadCastFramework")||C6("loadCastApplicationFramework"),YDa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.A(I6,g.K);g.h=I6.prototype;g.h.KK=function(a){this.C=arguments;this.o=!1;this.Fa?this.B=(0,g.F)()+this.xd:this.Fa=g.Bg(this.D,this.xd)};
g.h.stop=function(){this.Fa&&(g.Cg(this.Fa),this.Fa=null);this.B=null;this.o=!1;this.C=[]};
g.h.pause=function(){++this.A};
g.h.resume=function(){this.A&&(--this.A,!this.A&&this.o&&(this.o=!1,this.F.apply(null,this.C)))};
g.h.X=function(){this.stop();I6.ea.X.call(this)};
g.h.LK=function(){this.B?(this.Fa=g.Bg(this.D,this.B-(0,g.F)()),this.B=null):(this.Fa=null,this.A?this.o=!0:(this.o=!1,this.F.apply(null,this.C)))};J6.prototype.stringify=function(a){return g.w.JSON.stringify(a,void 0)};
J6.prototype.parse=function(a){return g.w.JSON.parse(a,void 0)};g.h=K6.prototype;g.h.Ei=null;g.h.Kf=!1;g.h.jl=null;g.h.Uw=null;g.h.Pk=null;g.h.Zj=null;g.h.Ah=null;g.h.bi=null;g.h.fj=null;g.h.Qc=null;g.h.sn=0;g.h.Lf=null;g.h.gr=null;g.h.Bh=null;g.h.Yl=-1;g.h.UE=!0;g.h.pi=!1;g.h.qt=0;g.h.oq=null;var UCa={},N6={};g.h=K6.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.gW=function(a){a=a.target;var b=this.oq;b&&3==g.qx(a)?b.Xj():this.jG(a)};
g.h.jG=function(a){try{if(a==this.Qc)a:{var b=g.qx(this.Qc),c=this.Qc.A,d=this.Qc.getStatus();if(g.Ed&&!g.tc(10)||g.Gd&&!g.sc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.nf&&!g.ux(this.Qc))break a;this.pi||4!=b||7==c||(8==c||0>=d?this.o.Ef(3):this.o.Ef(2));U6(this);var e=this.Qc.getStatus();this.Yl=e;var f=g.ux(this.Qc);(this.Kf=200==e)?(4==b&&Q6(this),this.D?(VCa(this,b,f),g.nf&&this.Kf&&3==b&&(this.Y.W(this.A,"tick",this.cW),this.A.start())):P6(this,f),this.Kf&&!this.pi&&(4==b?this.o.Zp(this):
(this.Kf=!1,M6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Bh=3,O6(13)):(this.Bh=0,O6(14)),Q6(this),R6(this))}}catch(k){this.Qc&&g.ux(this.Qc)}finally{}};
g.h.cW=function(){var a=g.qx(this.Qc),b=g.ux(this.Qc);this.sn<b.length&&(U6(this),VCa(this,a,b),this.Kf&&4!=a&&M6(this))};
g.h.oV=function(a){T6((0,g.z)(this.nV,this,a),0)};
g.h.nV=function(a){this.pi||(U6(this),P6(this,a),M6(this))};
g.h.dE=function(a){T6((0,g.z)(this.mV,this,a),0)};
g.h.mV=function(a){this.pi||(Q6(this),this.Kf=a,this.o.Zp(this),this.o.Ef(4))};
g.h.cancel=function(){this.pi=!0;Q6(this)};
g.h.FV=function(){this.jl=null;var a=(0,g.F)();0<=a-this.Uw?(2!=this.Zj&&this.o.Ef(3),Q6(this),this.Bh=2,O6(18),R6(this)):YCa(this,this.Uw-a)};g.h=aDa.prototype;g.h.kt=null;g.h.Be=null;g.h.pq=!1;g.h.iA=null;g.h.Co=null;g.h.mu=null;g.h.lt=null;g.h.Ve=null;g.h.Ig=-1;g.h.Xl=null;g.h.vl=null;g.h.connect=function(a){this.lt=a;a=W6(this.o,null,this.lt);O6(3);this.iA=(0,g.F)();var b=this.o.H;null!=b?(this.Xl=b[0],(this.vl=b[1])?(this.Ve=1,bDa(this)):(this.Ve=2,Y6(this))):(n6(a,"MODE","init"),this.Be=new K6(this,void 0,void 0,void 0),this.Be.Ei=this.kt,L6(this.Be,a,!1,null,!0),this.Ve=0)};
g.h.QJ=function(a){if(a)this.Ve=2,Y6(this);else{O6(4);var b=this.o;b.Zf=b.nh.Ig;e7(b,9)}a&&this.Ef(2)};
g.h.Bs=function(a){return this.o.Bs(a)};
g.h.abort=function(){this.Be&&(this.Be.cancel(),this.Be=null);this.Ig=-1};
g.h.hA=function(){return!1};
g.h.VD=function(a,b){this.Ig=a.Yl;if(0==this.Ve)if(b){try{var c=this.A.parse(b)}catch(d){c=this.o;c.Zf=this.Ig;e7(c,2);return}this.Xl=c[0];this.vl=c[1]}else c=this.o,c.Zf=this.Ig,e7(c,2);else if(2==this.Ve)if(this.pq)O6(7),this.mu=(0,g.F)();else if("11111"==b){if(O6(6),this.pq=!0,this.Co=(0,g.F)(),c=this.Co-this.iA,!g.Ed||g.tc(10)||500>c)this.Ig=200,this.Be.cancel(),O6(12),X6(this.o,this,!0)}else O6(8),this.Co=this.mu=(0,g.F)(),this.pq=!1};
g.h.Zp=function(){this.Ig=this.Be.Yl;if(this.Be.Kf)0==this.Ve?this.vl?(this.Ve=1,bDa(this)):(this.Ve=2,Y6(this)):2==this.Ve&&((!g.Ed||g.tc(10)?!this.pq:200>this.mu-this.Co)?(O6(11),X6(this.o,this,!1)):(O6(12),X6(this.o,this,!0)));else{0==this.Ve?O6(9):2==this.Ve&&O6(10);var a=this.o;a.Zf=this.Ig;e7(a,2)}};
g.h.fn=function(){return this.o.fn()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Ef=function(a){this.o.Ef(a)};g.h=Z6.prototype;g.h.Hl=null;g.h.de=null;g.h.xc=null;g.h.jt=null;g.h.Go=null;g.h.Dy=null;g.h.To=null;g.h.Mm=0;g.h.bR=0;g.h.wd=null;g.h.sh=null;g.h.xg=null;g.h.ti=null;g.h.nh=null;g.h.fr=null;g.h.pk=-1;g.h.hB=-1;g.h.Zf=-1;g.h.Oj=0;g.h.Bj=0;g.h.si=8;var f7=new g.Mf;g.A(dDa,g.lf);g.A(eDa,g.lf);g.A(fDa,g.lf);g.h=Z6.prototype;g.h.connect=function(a,b,c,d,e){O6(0);this.jt=b;this.Hl=c||{};d&&g.sa(e)&&(this.Hl.OSID=d,this.Hl.OAID=e);this.F?(T6((0,g.z)(this.Yy,this,a),100),jDa(this)):this.Yy(a)};
g.h.Yy=function(a){this.nh=new aDa(this);this.nh.kt=null;this.nh.A=this.D;this.nh.connect(a)};
g.h.hA=function(){return 0==this.o};
g.h.bE=function(a){this.sh=null;mDa(this,a)};
g.h.aE=function(){this.xg=null;this.xc=new K6(this,this.B,"rpc",this.G);this.xc.Ei=null;this.xc.qt=0;var a=this.Dy.clone();g.Om(a,"RID","rpc");g.Om(a,"SID",this.B);g.Om(a,"CI",this.fr?"0":"1");g.Om(a,"AID",this.pk);$6(this,a);if(!g.Ed||g.tc(10))g.Om(a,"TYPE","xmlhttp"),L6(this.xc,a,!0,this.To,!1);else{g.Om(a,"TYPE","html");var b=this.xc,c=!!this.To;b.Zj=3;b.Ah=m6(a.clone());XCa(b,c)}};
g.h.VD=function(a,b){if(0!=this.o&&(this.xc==a||this.de==a))if(this.Zf=a.Yl,this.de==a&&3==this.o)if(7<this.si){try{var c=this.D.parse(b)}catch(f){c=null}if(g.Aa(c)&&3==c.length)if(0==c[0])a:{if(!this.xg){if(this.xc)if(this.xc.Pk+3E3<this.de.Pk)b7(this),this.xc.cancel(),this.xc=null;else break a;d7(this);O6(19)}}else this.hB=c[1],0<this.hB-this.pk&&37500>c[2]&&this.fr&&0==this.Bj&&!this.ti&&(this.ti=T6((0,g.z)(this.ER,this),6E3));else e7(this,11)}else b!=IEa.h_.o&&e7(this,11);else if(this.xc==a&&
b7(this),!g.C(b)){c=this.D.parse(b);g.Aa(c);for(var d=0;d<c.length;d++){var e=c[d];this.pk=e[0];e=e[1];2==this.o?"c"==e[0]?(this.B=e[1],this.To=e[2],e=e[3],null!=e?this.si=e:this.si=6,this.o=3,this.wd&&this.wd.Py(),this.Dy=W6(this,this.fn()?this.To:null,this.jt),nDa(this)):"stop"==e[0]&&e7(this,7):3==this.o&&("stop"==e[0]?e7(this,7):"noop"!=e[0]&&this.wd&&this.wd.Oy(e),this.Bj=0)}}};
g.h.ER=function(){null!=this.ti&&(this.ti=null,this.xc.cancel(),this.xc=null,d7(this),O6(20))};
g.h.Zp=function(a){if(this.xc==a){b7(this);this.xc=null;var b=2}else if(this.de==a)this.de=null,b=1;else return;this.Zf=a.Yl;if(0!=this.o)if(a.Kf)1==b?(b=(0,g.F)()-a.Pk,f7.dispatchEvent(new eDa(f7,a.fj?a.fj.length:0,b,this.Oj)),a7(this),this.C.length=0):nDa(this);else{var c=a.Bh,d;if(!(d=3==c||7==c||0==c&&0<this.Zf)){if(d=1==b)this.de||this.sh||1==this.o||2<=this.Oj?d=!1:(this.sh=T6((0,g.z)(this.bE,this,a),oDa(this,this.Oj)),this.Oj++,d=!0);d=!(d||2==b&&d7(this))}if(d)switch(c){case 1:e7(this,5);
break;case 4:e7(this,10);break;case 3:e7(this,6);break;case 7:e7(this,12);break;default:e7(this,2)}}};
g.h.mK=function(a){if(!g.Pa(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.bX=function(a){a?O6(2):(O6(1),pDa(this,8))};
g.h.Bs=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.kx;a.H=!1;return a};
g.h.isActive=function(){return!!this.wd&&this.wd.isActive(this)};
g.h.Ef=function(a){f7.dispatchEvent(new fDa(f7,a))};
g.h.fn=function(){return!(!g.Ed||g.tc(10))};
g.h=qDa.prototype;g.h.Py=function(){};
g.h.Oy=function(){};
g.h.Ny=function(){};
g.h.ls=function(){};
g.h.Oz=function(){return{}};
g.h.isActive=function(){return!0};g.A(g7,g.K);g.h=g7.prototype;g.h.fV=function(){this.xd=Math.min(3E5,2*this.xd);this.B();this.A&&this.start()};
g.h.start=function(){var a=this.xd+15E3*Math.random();g.hu(this.o,a);this.A=(0,g.F)()+a};
g.h.stop=function(){this.o.stop();this.A=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.xd=5E3};g.A(h7,qDa);g.h=h7.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.Xd=function(a){return this.B.Xd(a)};
g.h.V=function(a,b){return this.B.V.apply(this.B,arguments)};
g.h.dispose=function(){this.K||(this.K=!0,g.jf(this.B),tDa(this),g.jf(this.A),this.A=null)};
g.h.ma=function(){return this.K};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.I="";this.A.stop();this.D=a||null;this.C=b||0;a=this.L+"/test";b=this.L+"/bind";var d=new Z6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.M),e=this.o;e&&(e.wd=null);d.wd=this;this.o=d;e?this.o.connect(a,b,this.F,e.B,e.pk):c?this.o.connect(a,b,this.F,c.sessionId,c.arrayId):this.o.connect(a,b,this.F)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.hc(c,b);this.A.isActive()||2==(this.o?this.o.o:0)?this.G.push(c):i7(this)&&kDa(this.o,c)};
g.h.Py=function(){this.A.reset();this.D=null;this.C=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)kDa(this.o,a[b])}this.V("handlerOpened")};
g.h.Ny=function(a){var b=2==a&&401==this.o.Zf;4==a||b||this.A.start();this.V("handlerError",a)};
g.h.ls=function(a){if(!this.A.isActive())this.V("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
g.h.Oz=function(){var a={v:2};this.I&&(a.gsessionid=this.I);0!=this.C&&(a.ui=""+this.C);0!=this.H&&(a.ui=""+this.H);this.D&&g.hc(a,this.D);return a};
g.h.Oy=function(a){"S"==a[0]?this.I=a[1]:"gracefulReconnect"==a[0]?(this.A.start(),iDa(this.o)):this.V("handlerMessage",new rDa(a[0],a[1]))};
g.h.LX=function(){this.A.isActive();var a=this.o,b=0;a.xc&&b++;a.de&&b++;0!=b||this.connect(this.D,this.C)};j7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
j7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
j7.prototype.D=function(a){a(Error("request timed out"))};var BDa=(0,g.F)(),m7=null,p7=Array(50),o7=-1,q7=!1;g.A(r7,g.QF);r7.prototype.te=function(){return this.o};
r7.prototype.contains=function(a){return!!u6(this.o,a)};
r7.prototype.get=function(a){return a?v6(this.o,a):null};
r7.prototype.info=function(a){n7(this.G,a)};g.A(s7,g.QF);var JEa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=s7.prototype;g.h.start=function(){!this.o&&(0,window.isNaN)(this.Fa)&&this.oG()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);(0,window.isNaN)(this.Fa)||(g.gE(this.Fa),this.Fa=window.NaN)};
g.h.X=function(){this.stop();s7.ea.X.call(this)};
g.h.oG=function(){this.Fa=window.NaN;this.o=g.vE(k7(this.F,"/pairing/get_screen"),{method:"POST",Pb:{pairing_code:this.D},timeout:5E3,onSuccess:(0,g.z)(this.NX,this),onError:(0,g.z)(this.MX,this),Cd:(0,g.z)(this.OX,this)})};
g.h.NX=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.B;c.name=this.C;this.V("pairingComplete",new p6(c))};
g.h.MX=function(a){this.o=null;a.status&&404==a.status?this.A>=JEa.length?this.V("pairingFailed",Error("DIAL polling timed out")):(a=JEa[this.A],this.Fa=g.eE((0,g.z)(this.oG,this),a),this.A++):this.V("pairingFailed",Error("Server error "+a.status))};
g.h.OX=function(){this.o=null;this.V("pairingFailed",Error("Server not responding"))};g.A(u7,r7);g.h=u7.prototype;g.h.start=function(){t7(this)&&this.V("screenChange");!g.$G("yt-remote-lounge-token-expiration")&&FDa(this);g.gE(this.A);this.A=g.eE((0,g.z)(this.start,this),1E4)};
g.h.add=function(a,b){t7(this);CDa(this,a);v7(this,!1);this.V("screenChange");b(a);a.token||FDa(this)};
g.h.remove=function(a,b){var c=t7(this);EDa(this,a)&&(v7(this,!1),c=!0);b(a);c&&this.V("screenChange")};
g.h.Wq=function(a,b,c,d){var e=t7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,v7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.V("screenChange")};
g.h.X=function(){g.gE(this.A);u7.ea.X.call(this)};
g.h.YK=function(a){t7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}v7(this,!b);b&&n7(this.G,"Missed "+b+" lounge tokens.")};
g.h.XK=function(a){n7(this.G,"Requesting lounge tokens failed: "+a)};g.A(x7,g.QF);g.h=x7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.$G("yt-remote-fast-check-period")||"0",10);(this.C=(0,g.F)()-144E5<a?0:a)?z7(this):(this.C=(0,g.F)()+3E5,g.ZG("yt-remote-fast-check-period",this.C),this.dw())};
g.h.isEmpty=function(){return g.$b(this.o)};
g.h.update=function(){w7("Updating availability on schedule.");var a=this.F(),b=g.Mb(this.o,function(b,d){return b&&!!v6(a,d)},this);
y7(this,b)};
g.h.X=function(){g.gE(this.B);this.B=window.NaN;this.A&&(this.A.abort(),this.A=null);x7.ea.X.call(this)};
g.h.dw=function(){g.gE(this.B);this.B=window.NaN;this.A&&this.A.abort();var a=IDa(this);if(g.Pb(a)){var b=k7(this.D,"/pairing/get_screen_availability");this.A=l7(this.D,b,{lounge_token:g.Ub(a).join(",")},(0,g.z)(this.NU,this,a),(0,g.z)(this.MU,this))}else y7(this,{}),z7(this)};
g.h.NU=function(a,b){this.A=null;var c=g.Ub(IDa(this));if(g.ib(c,g.Ub(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;y7(this,d);z7(this)}else this.hc("Changing Screen set during request."),this.dw()};
g.h.MU=function(a){this.hc("Screen availability failed: "+a);this.A=null;z7(this)};
g.h.hc=function(a){n7("OnlineScreenService",a)};g.A(A7,r7);g.h=A7.prototype;g.h.start=function(){this.B.start();this.A.start();this.o.length&&(this.V("screenChange"),this.A.isEmpty()||this.V("onlineScreenChange"))};
g.h.add=function(a,b,c){this.B.add(a,b,c)};
g.h.remove=function(a,b,c){this.B.remove(a,b,c);this.A.update()};
g.h.Wq=function(a,b,c,d){this.B.contains(a)?this.B.Wq(a,b,c,d):(a="Updating name of unknown screen: "+a.name,n7(this.G,a),d(Error(a)))};
g.h.te=function(a){return a?this.o:g.Xa(this.o,(0,g.Rd)(this.C,function(a){return!this.contains(a)},this))};
g.h.pG=function(){return(0,g.Rd)(this.te(!0),function(a){return!!this.A.o[a.id]},this)};
g.h.qG=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new s7(this.F,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(a){g.jf(f);d(B7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.jf(f);e(a)});
f.start();return(0,g.z)(f.stop,f)};
g.h.QX=function(a,b,c,d){g.vE(k7(this.F,"/pairing/get_screen"),{method:"POST",Pb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.z)(function(a,d){var e=new p6(d.screen||{});if(!e.name||MDa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);MDa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(B7(this,e))},this),
onError:(0,g.z)(function(a){d(Error("pairing request failed: "+a.status))},this),
Cd:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.jf(this.B);g.jf(this.A);A7.ea.X.call(this)};
g.h.nL=function(){NDa(this);this.V("screenChange");this.A.update()};
A7.prototype.dispose=A7.prototype.dispose;g.A(D7,g.QF);g.h=D7.prototype;g.h.aq=function(a){this.B=a;this.V("sessionScreen",this.B)};
g.h.ze=function(a){this.ma()||(a&&E7(this,""+a),this.B=null,this.V("sessionScreen",null))};
g.h.info=function(a){n7(this.M,a)};
g.h.sG=function(){return null};
g.h.kw=function(a){var b=this.A;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){E7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.kw("");D7.ea.X.call(this)};g.A(F7,D7);g.h=F7.prototype;g.h.jw=function(a){if(this.o){if(this.o==a)return;E7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.F);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D)}this.o=a;this.o.addUpdateListener(this.F);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.D);PDa(this)};
g.h.rk=function(a){this.info("launchWithParams no-op for Cast: "+g.Hg(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.z)(function(){this.ze()},this),(0,g.z)(function(){this.ze(Error("Failed to stop receiver app."))},this)):this.ze(Error("Stopping cast device witout session."))};
g.h.kw=g.y;g.h.X=function(){this.info("disposeInternal");g.gE(this.C);this.C=0;this.o&&(this.o.removeUpdateListener(this.F),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D));this.o=null;F7.ea.X.call(this)};
g.h.RV=function(a,b){if(!this.ma())if(b){var c=g.ex(b);if(g.Da(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Hg(c));switch(d){case "mdxSessionStatus":ODa(this,c.screenId);break;default:E7(this,"Unknown youtube message: "+d)}}else E7(this,"Unable to parse message.")}else E7(this,"No data in message.")};
g.h.Yz=function(a,b,c,d){LDa(this.I,this.A.label,a,this.A.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(E7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.eE((0,g.z)(this.Yz,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.sG=function(){return this.o};
g.h.RX=function(a){this.ma()||a||(E7(this,"Cast session died."),this.ze())};g.A(G7,D7);g.h=G7.prototype;g.h.jw=function(a){this.C=a;this.C.addUpdateListener(this.L)};
g.h.rk=function(a){this.D=a;this.G()};
g.h.stop=function(){this.o();this.o=g.y;g.gE(this.F);this.C?this.C.stop((0,g.z)(this.ze,this,null),(0,g.z)(this.ze,this,"Failed to stop DIAL device.")):this.ze()};
g.h.X=function(){this.o();this.o=g.y;g.gE(this.F);this.C&&this.C.removeUpdateListener(this.L);this.C=null;G7.ea.X.call(this)};
g.h.UX=function(a){this.ma()||a||(E7(this,"DIAL session died."),this.o(),this.o=g.y,this.ze())};
g.h.Zt=function(a){this.K=t6();if(this.D){var b=new window.chrome.cast.DialLaunchResponse(!0,RDa(this));a(b);QDa(this)}else this.G=(0,g.z)(function(){g.gE(this.F);this.G=g.y;this.F=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,RDa(this));a(b);QDa(this)},this),this.F=g.eE((0,g.z)(function(){this.G()},this),100)};
g.h.CM=function(a,b,c){LDa(this.I,this.H.receiver.label,a,this.A.friendlyName,(0,g.z)(function(a){a&&a.token?(this.aq(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.Zt(b,c)},this),(0,g.z)(function(a){E7(this,"Failed to get DIAL screen: "+a);
this.Zt(b,c)},this))};g.A(H7,D7);H7.prototype.stop=function(){this.ze()};
H7.prototype.jw=g.y;H7.prototype.rk=function(){g.gE(this.o);this.o=window.NaN;var a=v6(this.I.te(),this.A.label);a?this.aq(a):this.ze(Error("No such screen"))};
H7.prototype.X=function(){g.gE(this.o);this.o=window.NaN;H7.ea.X.call(this)};g.A(I7,g.QF);g.h=I7.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.G);this.H||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.z)(this.XD,this),(0,g.z)(this.wU,this),d,e);c.customDialLaunchCallback=(0,g.z)(this.oS,this);window.chrome.cast.initialize(c,
(0,g.z)(function(){this.ma()||(window.chrome.cast.addReceiverActionListener(this.C),yDa(),this.A.subscribe("onlineScreenChange",(0,g.z)(this.rG,this)),this.B=TDa(this),window.chrome.cast.setCustomReceivers(this.B,g.y,(0,g.z)(function(a){this.hc("Failed to set initial custom receivers: "+g.Hg(a))},this)),this.V("yt-remote-cast2-availability-change",K7(this)),b(!0))},this),(0,g.z)(function(a){this.hc("Failed to initialize API: "+g.Hg(a));
b(!1)},this))};
g.h.HW=function(a,b){J7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.B;if(!a||c&&c.id!=a)J7("Unsetting old screen status: "+this.o.A.friendlyName),L7(this,null)}if(a&&b){if(!this.o){c=v6(this.A.te(),a);if(!c){J7("setConnectedScreenStatus: Unknown screen.");return}var d=SDa(this,c);d||(J7("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.B.push(d),
window.chrome.cast.setCustomReceivers(this.B,g.y,(0,g.z)(function(a){this.hc("Failed to set initial custom receivers: "+g.Hg(a))},this)));
J7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);L7(this,new H7(this.A,d),!0)}this.o.kw(b)}else J7("setConnectedScreenStatus: no screen.")};
g.h.JW=function(a){this.ma()?this.hc("Setting connection data on disposed cast v2"):this.o?this.o.rk(a):this.hc("Setting connection data without a session")};
g.h.TX=function(){this.ma()?this.hc("Stopping session on disposed cast v2"):this.o?(this.o.stop(),L7(this,null)):J7("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.z)(this.XD,this),(0,g.z)(this.RU,this))};
g.h.X=function(){this.A.unsubscribe("onlineScreenChange",(0,g.z)(this.rG,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.C);g.Ua(g.x("yt.mdx.remote.debug.handlers_")||[],vDa);g.jf(this.o);I7.ea.X.call(this)};
g.h.hc=function(a){n7("Controller",a)};
g.h.YD=function(a,b){this.o==a&&(b||L7(this,null),this.V("yt-remote-cast2-session-change",b))};
g.h.sU=function(a,b){if(!this.ma())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),J7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.A.label!=a.label)J7("onReceiverAction_: Stopping active receiver: "+this.o.A.friendlyName),this.o.stop();else{J7("onReceiverAction_: Casting to active receiver.");this.o.B&&this.V("yt-remote-cast2-session-change",this.o.B);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:L7(this,
new H7(this.A,a));break;case window.chrome.cast.ReceiverType.DIAL:L7(this,new G7(this.A,a,this.F));break;case window.chrome.cast.ReceiverType.CAST:L7(this,new F7(this.A,a));break;default:this.hc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.o&&this.o.A.label==a.label?this.o.stop():this.hc("Stopping receiver w/o session: "+a.friendlyName)}else this.hc("onReceiverAction_ called without receiver.")};
g.h.oS=function(a){if(this.ma())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.hc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.A:null;if(!c||c.label!=b.label)return this.hc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.o.B)return J7("Reselecting dial screen."),
this.V("yt-remote-cast2-session-change",this.o.B),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.hc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);L7(this,new G7(this.A,b,this.F))}b=this.o;b.H=a;return b.H.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.z)(b.CM,b,(b.H.extraData||{}).screenId||null)):new window.Promise((0,g.z)(b.Zt,b))};
g.h.XD=function(a){if(!this.ma()){J7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)J7("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),L7(this,new F7(this.A,b),!0);else{this.hc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.A,d=v6(this.A.te(),c.label);
d&&q6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(J7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.jf(this.o),this.o=new F7(this.A,b),this.o.subscribe("sessionScreen",(0,g.z)(this.YD,this,this.o)),this.o.rk(null));this.o.jw(a)}}};
g.h.SX=function(){return this.o?this.o.sG():null};
g.h.RU=function(a){this.ma()||(this.hc("Failed to estabilish a session: "+g.Hg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&L7(this,null))};
g.h.wU=function(a){J7("Receiver availability updated: "+a);if(!this.ma()){var b=K7(this);this.D=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;K7(this)!=b&&this.V("yt-remote-cast2-availability-change",K7(this))}};
g.h.rG=function(){this.ma()||(this.B=TDa(this),J7("Updating custom receivers: "+g.Hg(this.B)),window.chrome.cast.setCustomReceivers(this.B,g.y,(0,g.z)(function(){this.hc("Failed to set custom receivers.")},this)),this.V("yt-remote-cast2-availability-change",K7(this)))};
I7.prototype.setLaunchParams=I7.prototype.JW;I7.prototype.setConnectedScreenStatus=I7.prototype.HW;I7.prototype.stopSession=I7.prototype.TX;I7.prototype.getCastSession=I7.prototype.SX;I7.prototype.requestSession=I7.prototype.requestSession;I7.prototype.init=I7.prototype.init;I7.prototype.dispose=I7.prototype.dispose;var R7=[];g.h=W7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";X7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.o=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.A=a.trackData,this.eg=a.hasPrevious,this.hasNext=a.hasNext,this.H=a.playerTime,this.G=a.playerTimeAt,this.D=a.seekableStart,this.B=a.seekableEnd,this.I=a.duration,this.K=a.loadedTime,this.C=a.liveIngestionTime,this.F=!(0,window.isNaN)(this.C))};
g.h.qb=function(){return 1==this.o};
g.h.isAdPlaying=function(){return 1081==this.o};
g.h.getDuration=function(){return this.F?this.I+Y7(this):this.I};
g.h.clone=function(){return new W7(b8(this))};g.A(d8,g.QF);g.h=d8.prototype;g.h.play=function(){1==this.o?(this.A?this.A.play(null,g.y,j8(this,"play")):i8(this,"play"),h8(this,1,$7(e8(this))),this.V("remotePlayerChange")):f8(this,this.play)};
g.h.pause=function(){1==this.o?(this.A?this.A.pause(null,g.y,j8(this,"pause")):i8(this,"pause"),h8(this,2,$7(e8(this))),this.V("remotePlayerChange")):f8(this,this.pause)};
g.h.nG=function(a){if(1==this.o){if(this.A){var b=e8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.qb()||3==b.o?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.A.seek(c,g.y,j8(this,"seekTo",{newTime:a}))}else i8(this,"seekTo",{newTime:a});h8(this,3,a);this.V("remotePlayerChange")}else f8(this,g.Ga(this.nG,a))};
g.h.stop=function(){if(1==this.o){this.A?this.A.stop(null,g.y,j8(this,"stopVideo")):i8(this,"stopVideo");var a=e8(this);a.index=-1;a.videoId="";X7(a);g8(this,a);this.V("remotePlayerChange")}else f8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=e8(this);if(this.B){if(c.volume!=a){var d=Math.round(a)/100;this.B.setReceiverVolumeLevel(d,(0,g.z)(function(){n7("CP","set receiver volume: "+d)},this),(0,g.z)(function(){this.hc("failed to set receiver volume.")},this))}c.muted!=b&&this.B.setReceiverMuted(b,(0,g.z)(function(){n7("CP","set receiver muted: "+b)},this),(0,g.z)(function(){this.hc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);i8(this,"setVolume",e)}c.muted=b;c.volume=a;g8(this,c)}else f8(this,g.Ga(this.setVolume,a,b))};
g.h.oF=function(a,b){if(1==this.o){var c=e8(this),d={videoId:a};b&&(c.A={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Hg(b.style),g.hc(d,c.A));i8(this,"setSubtitlesTrack",d);g8(this,c)}else f8(this,g.Ga(this.oF,a,b))};
g.h.ax=function(a,b){if(1==this.o){i8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Jb.id});var c=e8(this);c.audioTrackId=b.Jb.id;g8(this,c)}else f8(this,g.Ga(this.ax,a,b))};
g.h.mG=function(a,b){if(1==this.o){if(a&&b){var c=e8(this);a8(c,a,b);g8(this,c)}i8(this,"previous")}else f8(this,g.Ga(this.mG,a,b))};
g.h.lG=function(a,b){if(1==this.o){if(a&&b){var c=e8(this);a8(c,a,b);g8(this,c)}i8(this,"next")}else f8(this,g.Ga(this.lG,a,b))};
g.h.rz=function(){1==this.o?i8(this,"dismissAutoplay"):f8(this,this.rz)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.V("proxyStateChange",a,this.o)}d8.ea.dispose.call(this)};
g.h.X=function(){fEa(this);this.C=null;this.D.clear();c8(this,null);d8.ea.X.call(this)};
g.h.bx=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)g.yC(this.D).apply(this);else 3==a&&this.dispose()}};
g.h.nU=function(a,b){this.V(a,b)};
g.h.LR=function(a){if(!a)this.Pm(null),c8(this,null);else if(this.B.receiver.volume){a=this.B.receiver.volume;var b=e8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)n7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,g8(this,b)}};
g.h.Pm=function(a){n7("CP","Cast media: "+!!a);this.A&&this.A.removeUpdateListener(this.H);if(this.A=a)this.A.addUpdateListener(this.H),gEa(this),this.V("remotePlayerChange")};
g.h.KR=function(a){a?(gEa(this),this.V("remotePlayerChange")):this.Pm(null)};
g.h.XR=function(){var a=cEa();a&&c8(this,a)};
g.h.hc=function(a){n7("CP",a)};g.A(k8,g.QF);g.h=k8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.sa(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.sa(k)&&(l.currentIndex=k);c&&(this.ib.listId=c);this.ib.videoId=d;this.ib.index=k||0;this.ib.state=3;Z7(this.ib,m);this.C="UNSUPPORTED";l8("Connecting with setPlaylist and params: "+g.Hg(l));this.o.connect({method:"setPlaylist",
params:g.Hg(l)},a,CCa())}else l8("Connecting without params"),this.o.connect({},a,CCa());iEa(this)};
g.h.dispose=function(){this.ma()||(this.V("beforeDispose"),m8(this,3));k8.ea.dispose.call(this)};
g.h.X=function(){n8(this);p8(this);o8(this);g.gE(this.I);this.I=window.NaN;g.gE(this.K);this.K=window.NaN;this.B=null;g.AF(this.T);this.T.length=0;this.o.dispose();k8.ea.X.call(this);this.C=this.G=this.A=this.ib=this.o=null};
g.h.PK=function(){this.F(2)};
g.h.PR=function(){l8("Channel opened");this.O&&(this.O=!1,o8(this),this.M=g.eE((0,g.z)(function(){l8("Timing out waiting for a screen.");this.F(1)},this),15E3));
GCa(sDa(this.o),this.ba)};
g.h.MR=function(){l8("Channel closed");(0,window.isNaN)(this.D)?A6(!0):A6();this.dispose()};
g.h.NR=function(a){A6();(0,window.isNaN)(this.H())?(l8("Channel error: "+a+" without reconnection"),this.dispose()):(this.O=!0,l8("Channel error: "+a+" with reconnection in "+this.H()+" ms"),m8(this,2))};
g.h.OR=function(a){a.params?l8("Received: action="+a.action+", params="+g.Hg(a.params)):l8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.ex(a.params.devices);this.A=(0,g.G)(a,function(a){return new o6(a)});
a=!!g.La(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
lEa(this,a);break;case "loungeScreenDisconnected":g.Wa(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
lEa(this,!1);break;case "remoteConnected":var b=new o6(g.ex(a.params.device));g.La(this.A,function(a){return b?a.id==b.id:!1})||g.Sa(this.A,b);
break;case "remoteDisconnected":b=new o6(g.ex(a.params.device));g.Wa(this.A,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":nEa(this,a);break;case "nowPlaying":pEa(this,a);break;case "onStateChange":oEa(this,a);break;case "onAdStateChange":qEa(this,a);break;case "onVolumeChanged":rEa(this,a);break;case "onSubtitlesTrackChanged":mEa(this,a);break;case "nowAutoplaying":sEa(this,a);break;case "autoplayDismissed":this.V("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.V("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.V("autoplayModeChange",this.C);"DISABLED"==this.C&&this.V("autoplayDismissed");break;case "onHasPreviousNextChanged":tEa(this,a);break;case "requestAssistedSignIn":this.V("assistedSignInRequested",a.params.authCode);break;default:l8("Unrecognized action: "+a.action)}};
g.h.rW=function(){if(this.B){var a=this.B;this.B=null;this.ib.videoId!=a&&q8(this,"getNowPlaying")}};
k8.prototype.subscribe=k8.prototype.subscribe;k8.prototype.unsubscribeByKey=k8.prototype.Xd;k8.prototype.ia=function(){var a=3;this.ma()||(a=0,(0,window.isNaN)(this.H())?i7(this.o)&&(0,window.isNaN)(this.D)&&(a=1):a=2);return a};
k8.prototype.getProxyState=k8.prototype.ia;k8.prototype.F=function(a){l8("Disconnecting with "+a);n8(this);this.V("beforeDisconnect",a);1==a&&A6();tDa(this.o,a);this.dispose()};
k8.prototype.disconnect=k8.prototype.F;k8.prototype.ga=function(){var a=this.ib;this.B&&(a=this.ib.clone(),a8(a,this.B,a.index));return b8(a)};
k8.prototype.getPlayerContextData=k8.prototype.ga;
k8.prototype.oa=function(a){var b=new W7(a);b.videoId&&b.videoId!=this.ib.videoId&&(this.B=b.videoId,g.gE(this.I),this.I=g.eE((0,g.z)(this.rW,this),5E3));var c=[];this.ib.listId==b.listId&&this.ib.videoId==b.videoId&&this.ib.index==b.index||c.push("remoteQueueChange");this.ib.o==b.o&&this.ib.volume==b.volume&&this.ib.muted==b.muted&&$7(this.ib)==$7(b)&&g.Hg(this.ib.A)==g.Hg(b.A)||c.push("remotePlayerChange");this.ib.reset(a);(0,g.B)(c,function(a){this.V(a)},this)};
k8.prototype.setPlayerContextData=k8.prototype.oa;k8.prototype.Z=function(){var a=this.o.F.id,b=g.La(this.A,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
k8.prototype.getOtherConnectedRemoteId=k8.prototype.Z;k8.prototype.H=function(){var a=this.o;return a.A.isActive()?a.A.A-(0,g.F)():window.NaN};
k8.prototype.getReconnectTimeout=k8.prototype.H;k8.prototype.aa=function(){return this.C||"UNSUPPORTED"};
k8.prototype.getAutoplayMode=k8.prototype.aa;k8.prototype.da=function(){return this.G||""};
k8.prototype.getAutoplayVideoId=k8.prototype.da;k8.prototype.va=function(){if(!(0,window.isNaN)(this.H())){var a=this.o.A;g.iu(a.o);a.start()}};
k8.prototype.reconnect=k8.prototype.va;k8.prototype.ka=function(a,b){q8(this,a,b);kEa(this)};
k8.prototype.sendMessage=k8.prototype.ka;g.A(r8,r7);g.h=r8.prototype;g.h.te=function(a){return this.gd.$_gs(a)};
g.h.contains=function(a){return!!this.gd.$_c(a)};
g.h.get=function(a){return this.gd.$_g(a)};
g.h.start=function(){this.gd.$_st()};
g.h.add=function(a,b,c){this.gd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.gd.$_r(a,b,c)};
g.h.Wq=function(a,b,c,d){this.gd.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.A.length;a<b;++a)this.gd.$_ubk(this.A[a]);this.A.length=0;this.gd=null;r8.ea.X.call(this)};
g.h.PX=function(){this.V("screenChange")};
g.h.LT=function(){this.V("onlineScreenChange")};
A7.prototype.$_st=A7.prototype.start;A7.prototype.$_gspc=A7.prototype.QX;A7.prototype.$_gsppc=A7.prototype.qG;A7.prototype.$_c=A7.prototype.contains;A7.prototype.$_g=A7.prototype.get;A7.prototype.$_a=A7.prototype.add;A7.prototype.$_un=A7.prototype.Wq;A7.prototype.$_r=A7.prototype.remove;A7.prototype.$_gs=A7.prototype.te;A7.prototype.$_gos=A7.prototype.pG;A7.prototype.$_s=A7.prototype.subscribe;A7.prototype.$_ubk=A7.prototype.Xd;var s8=null,t8=null,I8=null,x8=[];g.t(J8,g.K);g.h=J8.prototype;
g.h.X=function(){g.K.prototype.X.call(this);this.C.stop();this.D.stop();this.L.stop();this.O();this.o.unsubscribe("proxyStateChange",this.UD,this);this.o.unsubscribe("remotePlayerChange",this.Sm,this);this.o.unsubscribe("remoteQueueChange",this.bq,this);this.o.unsubscribe("autoplayUpNext",this.rD,this);this.o.unsubscribe("previousNextChange",this.RD,this);this.o.unsubscribe("nowAutoplaying",this.ID,this);this.o.unsubscribe("autoplayDismissed",this.qD,this);this.o=this.H=null};
g.h.qC=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(M8(this)){if(!e8(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":e8(this.o).qb()?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.K.Xj(c[0],c[1]);break;case "control_subtitles_set_track":N8(this,c[0]);break;case "control_set_audio_track":c=c[0],M8(this)&&this.o.ax(this.A.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.A.getCurrentTime();O8(this,0==c?void 0:c);break;case "control_seek":O8(this,c[0]);break;case "control_subtitles_set_track":N8(this,c[0]);break;case "control_set_audio_track":c=c[0],M8(this)&&this.o.ax(this.A.getVideoData(1).videoId,c)}};
g.h.JR=function(a){this.L.KK(a)};
g.h.qX=function(a){this.qC("control_subtitles_set_track",g.$b(a)?null:a)};
g.h.DF=function(){var a=this.A.Bc("captions","track");g.$b(a)||N8(this,a)};
g.h.GD=function(a){if(M8(this)){this.o.unsubscribe("remotePlayerChange",this.Sm,this);var b=Math.round(a.volume);a=!!a.muted;var c=e8(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.M.start();this.o.subscribe("remotePlayerChange",this.Sm,this)}};
g.h.eT=function(){g.$b(this.F)||FEa(this,this.F);this.G=!1};
g.h.UD=function(a,b){this.D.stop();2==b&&this.AF()};
g.h.Sm=function(){if(M8(this)){this.C.stop();var a=e8(this.o);switch(a.o){case 1081:case 1:L8(this,new g.DP(8));this.zF();break;case 1085:case 3:L8(this,new g.DP(9));break;case 1083:case 0:L8(this,new g.DP(2));this.K.stop();K8(this,this.A.getVideoData().lengthSeconds);break;case 1084:L8(this,new g.DP(4));break;case 2:L8(this,new g.DP(4));K8(this,$7(a));break;case -1:L8(this,new g.DP(64));break;case -1E3:L8(this,new g.DP(128,{errorCode:"mdx.remoteerror",message:"Dieses Video ist nicht f\u00fcr die Remote-Wiedergabe verf\u00fcgbar."}))}a=
e8(this.o).A;var b=this.F;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.F=a,FEa(this,a));a=e8(this.o);-1==a.volume||Math.round(this.A.getVolume())==a.volume&&this.A.isMuted()==a.muted||this.M.isActive()||this.ZF()}else EEa(this)};
g.h.RD=function(){this.A.V("mdxpreviousnextchange")};
g.h.bq=function(){M8(this)||EEa(this)};
g.h.PJ=function(){this.o.rz()};
g.h.rD=function(a){a&&(a=g.vE("/watch_queue_ajax",{method:"GET",Zc:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.z)(this.rV,this)}))&&(this.O=(0,g.z)(a.abort,a))};
g.h.rV=function(a,b){var c=new g.yO({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.A.V("mdxautoplayupnext",c)};
g.h.ID=function(a){(0,window.isNaN)(a)||this.A.V("mdxnowautoplaying",a)};
g.h.qD=function(){this.A.V("mdxautoplaycanceled")};
g.h.JP=function(a,b){-1==e8(this.o).o?O8(this,a):b&&this.o.nG(a)};
g.h.ZF=function(){if(M8(this)){var a=e8(this.o);this.B.Ha(this.T);a.muted?this.A.mute():this.A.ng();this.A.setVolume(a.volume);this.T=this.B.R(this.A,"onVolumeChange",this.GD)}};
g.h.zF=function(){this.C.stop();if(!this.o.ma()){var a=e8(this.o);a.qb()&&L8(this,new g.DP(8));K8(this,$7(a));this.C.start()}};
g.h.AF=function(){this.D.stop();this.C.stop();var a=this.o.C.getReconnectTimeout();2==this.o.o&&!(0,window.isNaN)(a)&&this.D.start()};g.t(P8,g.V);P8.prototype.D=function(a){HEa(this,a.state)};g.t(Q8,g.gZ);Q8.prototype.L=function(){var a=this.A.Bc("remote","receivers");a&&1<a.length&&!this.A.Bc("remote","quickCast")?(this.I=g.lb(a,this.F,this),g.hZ(this,(0,g.G)(a,this.F)),a=this.A.Bc("remote","currentReceiver"),this.Df(this.F(a)),this.enable(!0)):this.enable(!1)};
Q8.prototype.F=function(a){return a.key};
Q8.prototype.Cf=function(a){return"cast-selector-receiver"==a?"Streamen\u2026":this.I[a].name};
Q8.prototype.Ad=function(a){g.gZ.prototype.Ad.call(this,a);this.A.Sd("remote","currentReceiver",this.I[a]);this.D.Sb()};g.t(R8,g.DU);g.h=R8.prototype;g.h.create=function(){yEa(g.AM(g.X(this.o)));this.F.push(g.bG("yt-remote-before-disconnect",this.FR,this));this.F.push(g.bG("yt-remote-connection-change",this.xU,this));this.F.push(g.bG("yt-remote-receiver-availability-change",this.SD,this));this.F.push(g.bG("yt-remote-auto-connect",this.vU,this));this.F.push(g.bG("yt-remote-receiver-resumed",this.uU,this));this.SD()};
g.h.load=function(){this.o.Su();g.DU.prototype.load.call(this);this.D=new J8(this,this.o,this.A);var a=(a=DEa())?a.currentTime:0;var b=H8()?new d8(C8(),void 0):null;0==a&&b&&(a=$7(e8(b)));0!=a&&(this.I=a||0,this.o.V("progresssync",a,void 0));GEa(this,this.G,this.G);g.I_(this.o.app,6)};
g.h.unload=function(){this.o.V("mdxautoplaycanceled");this.C=this.B;g.kf(this.D,this.A);this.A=this.D=null;g.DU.prototype.unload.call(this);g.I_(this.o.app,5)};
g.h.X=function(){g.cG(this.F);g.DU.prototype.X.call(this)};
g.h.Im=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.D.qC.apply(this.D,[a].concat(g.oa(c)))};
g.h.FK=function(){return this.loaded?this.D.suggestion:null};
g.h.eg=function(){return this.A?e8(this.A).eg:!1};
g.h.hasNext=function(){return this.A?e8(this.A).hasNext:!1};
g.h.getCurrentTime=function(){return this.I};
g.h.xP=function(){var a=e8(this.A),b=this.o.getVideoData();return{allowSeeking:this.o.hd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+Y7(a):a.C,isPeggedToLive:1>=(a.F?a.B+Y7(a):a.B)-this.getCurrentTime(),loaded:a.K,seekableEnd:a.F?a.B+Y7(a):a.B,seekableStart:0<a.D?a.D+Y7(a):a.D}};
g.h.yP=function(){this.A&&this.A.lG()};
g.h.zP=function(){this.A&&this.A.mG()};
g.h.FR=function(a){1==a&&(this.K=this.A?e8(this.A):null)};
g.h.xU=function(){var a=H8()?new d8(C8(),void 0):null;if(a){var b=this.C;this.loaded&&this.unload();this.A=a;this.K=null;b.key!=this.B.key&&(this.C=b,this.load())}else g.jf(this.A),this.A=null,this.loaded&&(this.unload(),(a=this.K)&&a.videoId==this.o.getVideoData().videoId&&this.o.UB(a.videoId,$7(a)));this.o.V("videodatachange","newdata",this.o.getVideoData(),3)};
g.h.SD=function(){this.H=[this.B].concat(AEa());var a=D8()||this.B;S8(this,a);this.o.xa("onMdxReceiversChange")};
g.h.vU=function(){var a=D8();S8(this,a)};
g.h.uU=function(){this.C=D8()};
g.h.wP=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.H;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?U7():S8(this,b)),this.loaded?this.C:this.B;case "quickCast":return 2==this.H.length&&"cast-selector-receiver"==this.H[1].key?(b&&U7(),!0):!1}};
g.h.AP=function(){i8(this.A,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Dc=function(){return!1};g.uX.remote=R8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 11:23:16 Jul 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:39:08 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 421.933
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.056
  cdx.remote: 0.058
  esindex: 0.01
  LoadShardBlock: 390.858 (3)
  PetaboxLoader3.datanode: 397.222 (4)
  load_resource: 143.957
  PetaboxLoader3.resolve: 72.816
*/