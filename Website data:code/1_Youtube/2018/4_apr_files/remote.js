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

(function(g){var window=this;var $Aa=function(a,b){return g.Wb(a,b)},f6=function(a){g.Km(a,"zx",g.yb());
return a},g6=function(a,b,c){g.za(c)||(c=[String(c)]);
g.Nm(a.g,b,c)},aBa=function(a,b){var c=[];
g.uk(b,function(a){try{var b=g.bD.prototype.l.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.aD(b)&&c.push(a):c.push(a)},a);
return c},bBa=function(a,b){var c=aBa(a,b);
(0,g.B)(c,function(a){g.bD.prototype.remove.call(this,a)},a)},cBa=function(a,b,c,d){var e=new g.Bm(null,void 0);
a&&g.Cm(e,a);b&&g.Dm(e,b);c&&g.Em(e,c);d&&g.Fm(e,d);return e},dBa=function(a){g.XF[a]&&(a=g.XF[a],(0,g.B)(a,function(a){g.VF[a]&&delete g.VF[a]}),a.length=0)},eBa=function(a){var b=g.UF();
if(b)if(b.clear(a),a)dBa(a);else for(var c in g.XF)dBa(c)},h6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.o=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.vm;this.g=this.l="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",fBa(this,a.capabilities||""),gBa(this,a.experiments||""),this.l=a.remoteControllerUrl||"",
this.g=a.localChannelEncryptionKey||"")},fBa=function(a,b){a.capabilities.clear();
(0,g.Ld)(b.split(","),g.Fa($Aa,hBa)).forEach(function(b){a.capabilities.add(b)})},gBa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},i6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},j6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},iBa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},jBa=function(a){return new i6(a)},kBa=function(a){return g.za(a)?(0,g.G)(a,jBa):[]},k6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},l6=function(a){return g.za(a)?"["+(0,g.G)(a,k6).join(",")+"]":"null"},m6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},lBa=function(a){return(0,g.G)(a,function(a){return{key:a.id,
name:a.name}})},n6=function(a,b){return g.Ma(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},o6=function(a,b){return g.Ma(a,function(a){return j6(a,b)})},mBa=function(){var a=(0,g.QG)();
a&&bBa(a,a.g.Od(!0))},p6=function(){var a=g.TG("yt-remote-connected-devices")||[];
g.jb(a);return a},nBa=function(a){if(g.Ra(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.G)(a,function(a,b){return 0==b?a:a.substring(c.length)})},oBa=function(a){g.SG("yt-remote-connected-devices",a,86400)},r6=function(){if(q6)return q6;
var a=g.TG("yt-remote-device-id");a||(a=m6(),g.SG("yt-remote-device-id",a,31536E3));for(var b=p6(),c=1,d=a;g.Qa(b,d);)c++,d=a+"#"+c;return q6=d},s6=function(){var a=p6(),b=r6();
g.Qa(a,b);g.VG()&&g.lb(a,b);a=nBa(a);if(g.Ra(a))try{g.DG("remote_sid")}catch(c){}else try{g.CG("remote_sid",a.join(","),-1)}catch(c){}},pBa=function(){return g.TG("yt-remote-session-browser-channel")},qBa=function(){return g.TG("yt-remote-local-screens")||[]},rBa=function(){g.SG("yt-remote-lounge-token-expiration",!0,86400)},sBa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.G)(qBa(),function(a){return a.loungeToken}),c=(0,g.G)(a,function(a){return a.loungeToken});
(0,g.km)(c,function(a){return!g.Qa(b,a)})&&rBa();
g.SG("yt-remote-local-screens",a,31536E3)},tBa=function(a,b){g.SG("yt-remote-session-browser-channel",a);
g.SG("yt-remote-session-screen-id",b);var c=p6(),d=r6();g.Qa(c,d)||c.push(d);oBa(c);s6()},t6=function(a){a||(g.UG("yt-remote-session-screen-id"),g.UG("yt-remote-session-video-id"));
s6();a=p6();g.Va(a,r6());oBa(a)},uBa=function(){if(!u6){var a=g.mD();
a&&(u6=new g.WC(a))}return u6?!!u6.get("yt-remote-use-staging-server"):!1},vBa=function(){var a=window.document.createElement("a");
g.$c(a,"https://web.archive.org/web/20180331235657/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Cb(a)},wBa=function(a,b){var c=g.Ed("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.ad(c,g.de("https://web.archive.org/web/20180331235657/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},xBa=function(){var a=vBa(),b=window.document.getElementById(a),c=b&&g.gF(b,"loaded");
c||b&&!c||(b=wBa(a,function(){g.gF(b,"loaded")||(g.fF(b,"loaded","true"),g.aG(a),g.VD(g.Fa(eBa,a),0))}))},v6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},yBa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},w6=function(a){a.length?zBa(a.shift(),function(){w6(a)}):x6()},ABa=function(a){return"chrome-extension://"+a+y6},zBa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},z6=function(a){return 0<=window.navigator.userAgent.indexOf(a)},x6=function(){var a=yBa();
a&&a(!1,"No cast extension found")},A6=function(){if(BBa){var a=2,b=yBa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;zBa("//web.archive.org/web/20180331235657/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",x6,c)}},CBa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(A6(),a({command:"cast.sender.init"}))},DBa=function(){A6();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);w6(["//web.archive.org/web/20180331235657/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+y6,"//web.archive.org/web/20180331235657/https://www.gstatic.com/eureka/clank"+y6])},B6=function(a,b,c){g.K.call(this);
this.C=null!=c?(0,g.z)(a,c):a;this.ed=b;this.B=(0,g.z)(this.OI,this);this.g=!1;this.l=0;this.o=this.wa=null;this.A=[]},C6=function(){},D6=function(a,b,c,d){this.g=a;
this.o=b;this.F=c;this.D=d||1;this.B=45E3;this.A=new g.Rm(this);this.l=new g.ug;this.l.setInterval(250)},FBa=function(a,b,c){a.Aj=1;
a.kh=f6(b.clone());a.Ji=c;a.C=!0;EBa(a,null)},E6=function(a,b,c,d,e){a.Aj=1;
a.kh=f6(b.clone());a.Ji=null;a.C=c;e&&(a.gD=!1);EBa(a,d)},EBa=function(a,b){a.gk=(0,g.F)();
F6(a);a.Dh=a.kh.clone();g6(a.Dh,"t",a.D);a.im=0;a.Qc=a.g.Oq(a.g.Yl()?b:null);0<a.vr&&(a.Zo=new g.Vk((0,g.z)(a.vE,a,a.Qc),a.vr));a.A.T(a.Qc,"readystatechange",a.eU);var c=a.ji?g.dc(a.ji):{};a.Ji?(a.Lp="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Qc.send(a.Dh,a.Lp,a.Ji,c)):(a.Lp="GET",a.gD&&!g.Ad&&(c.Connection="close"),a.Qc.send(a.Dh,a.Lp,null,c));a.g.sf(1)},IBa=function(a,b,c){for(var d=!0;!a.Th&&a.im<c.length;){var e=GBa(a,c);
if(e==G6){4==b&&(a.lh=4,H6(15),d=!1);break}else if(e==HBa){a.lh=4;H6(16);d=!1;break}else I6(a,e)}4==b&&0==c.length&&(a.lh=1,H6(17),d=!1);a.yf=a.yf&&d;d||(J6(a),K6(a))},GBa=function(a,b){var c=a.im,d=b.indexOf("\n",c);
if(-1==d)return G6;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return HBa;d+=1;if(d+c>b.length)return G6;var e=b.substr(d,c);a.im=d+c;return e},KBa=function(a,b){a.gk=(0,g.F)();
F6(a);var c=b?window.location.hostname:"";a.Dh=a.kh.clone();g.Km(a.Dh,"DOMAIN",c);g.Km(a.Dh,"t",a.D);try{a.zf=new window.ActiveXObject("htmlfile")}catch(n){J6(a);a.lh=7;H6(22);K6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in L6)k=L6[l];else if(l in JBa)k=L6[l]=JBa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=L6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.bd(g.xc("b/12014412"),d);a.zf.open();a.zf.write(g.Uc(c));a.zf.close();a.zf.parentWindow.m=(0,g.z)(a.iT,a);a.zf.parentWindow.d=(0,g.z)(a.sC,a,!0);a.zf.parentWindow.rpcClose=(0,g.z)(a.sC,a,!1);c=a.zf.createElement("DIV");a.zf.parentWindow.document.body.appendChild(c);d=g.Lc(a.Dh.toString());d=g.sb(g.Hc(d));d=g.bd(g.xc("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=g.Uc(d);
a.g.sf(1)},F6=function(a){a.kv=(0,g.F)()+a.B;
LBa(a,a.B)},LBa=function(a,b){if(null!=a.zk)throw Error("WatchDog timer not null");
a.zk=M6((0,g.z)(a.yT,a),b)},N6=function(a){a.zk&&(g.w.clearTimeout(a.zk),a.zk=null)},K6=function(a){a.g.By()||a.Th||a.g.Mo(a)},J6=function(a){N6(a);
g.cf(a.Zo);a.Zo=null;a.l.stop();g.Xm(a.A);if(a.Qc){var b=a.Qc;a.Qc=null;b.abort();b.dispose()}a.zf&&(a.zf=null)},I6=function(a,b){try{a.g.lC(a,b),a.g.sf(4)}catch(c){}},NBa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;MBa(a,b,function(e){e?c(!0):g.w.setTimeout(function(){NBa(a,b,c,d,f)},f)})}},MBa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{O6(d),c(!0)}catch(e){}};
d.onerror=function(){try{O6(d),c(!1)}catch(e){}};
d.onabort=function(){try{O6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{O6(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},O6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},OBa=function(a){this.g=a;
this.l=new C6},PBa=function(a){var b=P6(a.g,a.Ek,"/mail/images/cleardot.gif");
f6(b);NBa(b.toString(),5E3,(0,g.z)(a.bI,a),3,2E3);a.sf(1)},R6=function(a){var b=a.g.H;
if(null!=b)H6(5),b?(H6(11),Q6(a.g,a,!1)):(H6(12),Q6(a.g,a,!0));else if(a.ue=new D6(a,void 0,void 0,void 0),a.ue.ji=a.sr,b=a.g,b=P6(b,b.Yl()?a.dl:null,a.ur),H6(5),!g.yd||g.tc(10))g6(b,"TYPE","xmlhttp"),E6(a.ue,b,!1,a.dl,!1);else{g6(b,"TYPE","html");var c=a.ue;a=!!a.dl;c.Aj=3;c.kh=f6(b.clone());KBa(c,a)}},S6=function(a,b,c){this.g=1;
this.l=[];this.A=[];this.B=new C6;this.F=a||null;this.H=null!=b?b:null;this.C=c||!1},QBa=function(a,b){this.g=a;
this.map=b;this.context=null},RBa=function(a){g.ef.call(this,"statevent",a)},SBa=function(a,b){g.ef.call(this,"timingevent",a);
this.size=b},TBa=function(a){g.ef.call(this,"serverreachability",a)},WBa=function(a){UBa(a);
if(3==a.g){var b=a.Kl++,c=a.Fn.clone();g.Km(c,"SID",a.o);g.Km(c,"RID",b);g.Km(c,"TYPE","terminate");T6(a,c);b=new D6(a,a.o,b,void 0);b.Aj=2;b.kh=f6(c.clone());(new window.Image).src=b.kh;b.gk=(0,g.F)();F6(b)}VBa(a)},XBa=function(a){a.vI(1,0);
a.Fn=P6(a,null,a.rr);U6(a)},UBa=function(a){a.ah&&(a.ah.abort(),a.ah=null);
a.xc&&(a.xc.cancel(),a.xc=null);a.rg&&(g.w.clearTimeout(a.rg),a.rg=null);V6(a);a.Td&&(a.Td.cancel(),a.Td=null);a.bh&&(g.w.clearTimeout(a.bh),a.bh=null)},YBa=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.l.push(new QBa(a.YO++,b));2!=a.g&&3!=a.g||U6(a)},U6=function(a){a.Td||a.bh||(a.bh=M6((0,g.z)(a.qC,a),0),a.rj=0)},$Ba=function(a,b){if(1==a.g){if(!b){a.Kl=Math.floor(1E5*Math.random());
var c=a.Kl++,d=new D6(a,"",c,void 0);d.ji=null;var e=W6(a),f=a.Fn.clone();g.Km(f,"RID",c);g.Km(f,"CVER","1");T6(a,f);FBa(d,f,e);a.Td=d;a.g=2}}else 3==a.g&&(b?ZBa(a,b):0==a.l.length||a.Td||ZBa(a))},ZBa=function(a,b){if(b)if(6<a.Vh){a.l=a.A.concat(a.l);
a.A.length=0;var c=a.Kl-1;var d=W6(a)}else c=b.F,d=b.Ji;else c=a.Kl++,d=W6(a);var e=a.Fn.clone();g.Km(e,"SID",a.o);g.Km(e,"RID",c);g.Km(e,"AID",a.Oj);T6(a,e);c=new D6(a,a.o,c,a.rj+1);c.ji=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Td=c;FBa(c,e,d)},T6=function(a,b){if(a.rd){var c=a.rd.fy();
c&&g.Mb(c,function(a,c){g.Km(b,c,a)})}},W6=function(a){var b=Math.min(a.l.length,1E3),c=["count="+b];
if(6<a.Vh&&0<b){var d=a.l[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.l[e].g,k=a.l[e].map;f=6>=a.Vh?e:f-d;try{g.Mb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.A=a.A.concat(a.l.splice(0,b));
return c.join("&")},aCa=function(a){a.xc||a.rg||(a.D=1,a.rg=M6((0,g.z)(a.pC,a),0),a.ej=0)},X6=function(a){if(a.xc||a.rg||3<=a.ej)return!1;
a.D++;a.rg=M6((0,g.z)(a.pC,a),bCa(a,a.ej));a.ej++;return!0},Q6=function(a,b,c){a.Jp=c;
a.Of=b.Ag;a.C||XBa(a)},V6=function(a){null!=a.Xh&&(g.w.clearTimeout(a.Xh),a.Xh=null)},bCa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},Y6=function(a,b){if(2==b||9==b){var c=null;
a.rd&&(c=null);var d=(0,g.z)(a.VU,a);c||(c=new g.Bm("//web.archive.org/web/20180331235657/https://www.google.com/images/cleardot.gif"),f6(c));MBa(c.toString(),1E4,d)}else H6(2);cCa(a,b)},cCa=function(a,b){a.g=0;
a.rd&&a.rd.Yw(b);VBa(a);UBa(a)},VBa=function(a){a.g=0;
a.Of=-1;if(a.rd)if(0==a.A.length&&0==a.l.length)a.rd.Cq();else{g.Za(a.A);var b=g.Za(a.l);a.A.length=0;a.l.length=0;a.rd.Cq(b)}},P6=function(a,b,c){var d=g.Lm(c);
if(""!=d.l)b&&g.Dm(d,b+"."+d.l),g.Em(d,d.B);else{var e=window.location;d=cBa(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c)}a.Pk&&g.Mb(a.Pk,function(a,b){g.Km(d,b,a)});
g.Km(d,"VER",a.Vh);T6(a,d);return d},M6=function(a,b){if(!g.Ba(a))throw Error("Fn must not be null and must be a function");
return g.w.setTimeout(function(){a()},b)},H6=function(a){Z6.dispatchEvent(new RBa(Z6,a))},dCa=function(){},eCa=function(a,b){this.action=a;
this.params=b||{}},$6=function(a,b){g.K.call(this);
this.g=new g.Zt(this.ZS,0,this);g.L(this,this.g);this.ed=5E3;this.l=0;if(g.Ba(a))b&&(a=(0,g.z)(a,b));else if(a&&g.Ba(a.handleEvent))a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.o=a},a7=function(a,b,c){this.K=a;
this.C=b;this.o=new g.VC;this.l=new $6(this.AV,this);this.g=this.Ya=null;this.I=!1;this.B=null;this.H="";this.F=this.A=0;this.D=[];this.M=c||!1},fCa=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.Jp,sessionId:a.g.o,arrayId:a.g.Oj}},gCa=function(a,b){a.F=b||0;
a.l.stop();a.g&&(3==a.g.g&&$Ba(a.g),WBa(a.g));a.F=0},b7=function(a){return!!a.g&&3==a.g.g},hCa=function(a,b){(a.C.loungeIdToken=b)||a.l.stop()},c7=function(a){this.port=this.domain="";
this.g="/api/lounge";this.l=!0;a=a||window.document.location.href;var b=g.Lg(a)||"";b&&(this.port=":"+b);this.domain=g.Kg(a)||"";a=g.Jb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Bb(a,"10.0")&&(this.l=!1))},d7=function(a,b){var c=a.g;
if(g.t(void 0)?0:a.l)c="https://"+a.domain+a.port+a.g;return g.Ug(c+b,{})},e7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Fa(a.A,d,!0),onError:g.Fa(a.o,e),xd:g.Fa(a.B,e)};c&&(a.Lb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.kE(b,a)},lCa=function(){var a=iCa;
jCa();f7.push(a);kCa(f7)},g7=function(a,b){jCa();
var c=f7,d=mCa(a,String(b));g.Ra(c)?nCa(d):(kCa(c),(0,g.B)(c,function(a){a(d)}))},jCa=function(){f7||(f7=g.x("yt.mdx.remote.debug.handlers_")||[],g.wa("yt.mdx.remote.debug.handlers_",f7,void 0))},nCa=function(a){var b=(h7+1)%50;
h7=b;i7[b]=a;j7||(j7=49==b)},kCa=function(a){var b=i7;
if(b[0]){var c=h7,d=j7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.B)(a,function(a){a(e)})}while(d!=c);
i7=Array(50);h7=-1;j7=!1}},mCa=function(a,b){var c=((0,g.F)()-oCa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},k7=function(a){g.MF.call(this);
this.D=a;this.g=[]},pCa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},qCa=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Ld)(a.g,function(a){return!!n6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=pCa(a,b[d])||c;return c},rCa=function(a,b){var c=a.g.length;
a.g=(0,g.Ld)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c},l7=function(a,b,c,d){g.MF.call(this);
this.C=a;this.B=b;this.o=c;this.A=d;this.l=0;this.g=null;this.wa=window.NaN},n7=function(a){k7.call(this,"LocalScreenService");
this.o=a;this.l=window.NaN;m7(this);this.info("Initializing with "+l6(this.g))},sCa=function(a){if(a.g.length){var b=(0,g.G)(a.g,function(a){return a.id}),c=d7(a.o,"/pairing/get_lounge_token_batch");
e7(a.o,c,{screen_ids:b.join(",")},(0,g.z)(a.dJ,a),(0,g.z)(a.cJ,a))}},m7=function(a){var b=kBa(qBa());
b=(0,g.Ld)(b,function(a){return!a.uuid});
return qCa(a,b)},o7=function(a,b){sBa((0,g.G)(a.g,iBa));
b&&rBa()},q7=function(a,b){g.MF.call(this);
this.C=b;var c=g.TG("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Qa(c,l)}this.g=d;this.B=a;this.o=this.A=window.NaN;this.l=null;p7("Initialized with "+g.Bg(this.g))},tCa=function(a,b,c){var d=d7(a.B,"/pairing/get_screen_availability");
e7(a.B,d,{lounge_token:b.token},(0,g.z)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},r7=function(a,b){a:if(g.Qb(b)!=g.Qb(a.g))var c=!1;
else{c=g.Tb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(p7("Updated online screens: "+g.Bg(a.g)),a.g=b,a.R("screenChange"));uCa(a)},s7=function(a){(0,window.isNaN)(a.o)||g.XD(a.o);
a.o=g.VD((0,g.z)(a.qu,a),0<a.A&&a.A<(0,g.F)()?2E4:1E4)},p7=function(a){g7("OnlineScreenService",a)},vCa=function(a){var b={};
(0,g.B)(a.C(),function(a){a.token?b[a.token]=a.id:this.gc("Requesting availability of screen w/o lounge token.")});
return b},uCa=function(a){a=g.Tb(g.Nb(a.g,function(a){return a}));
g.jb(a);a.length?g.SG("yt-remote-online-screen-ids",a.join(","),60):g.UG("yt-remote-online-screen-ids")},t7=function(a){k7.call(this,"ScreenService");
this.C=a;this.l=this.o=null;this.A=[];this.B={};wCa(this)},yCa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.oe();if(k=(c?o6(k,c):null)||o6(k,b)){k.uuid=b;var l=u7(a,k);tCa(a.l,l,function(a){e(a?l:null)})}else c?xCa(a,c,(0,g.z)(function(a){var f=u7(this,new i6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));tCa(this.l,f,function(a){e(a?f:null)})},a),f):e(null)},zCa=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},xCa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Lb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.kE(d7(a.C,"/pairing/get_lounge_token_batch"),e)},ACa=function(a){a.g=a.o.oe();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+l6(a.g))},wCa=function(a){v7(a);
a.o=new n7(a.C);a.o.subscribe("screenChange",(0,g.z)(a.sJ,a));ACa(a);a.A=kBa(g.TG("yt-remote-automatic-screen-cache")||[]);v7(a);a.info("Initializing automatic screens: "+l6(a.A));a.l=new q7(a.C,(0,g.z)(a.oe,a,!0));a.l.subscribe("screenChange",(0,g.z)(function(){this.R("onlineScreenChange")},a))},u7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=o6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.SG("yt-remote-automatic-screen-cache",(0,g.G)(a.A,iBa)));v7(a);a.B[b.uuid]=b.id;g.SG("yt-remote-device-id-map",a.B,31536E3);return b},v7=function(a){a.B=g.TG("yt-remote-device-id-map")||{}},w7=function(a,b,c){g.MF.call(this);
this.M=c;this.H=a;this.l=b;this.o=null},x7=function(a,b){g7(a.M,b)},y7=function(a,b){w7.call(this,a,b,"CastSession");
this.g=null;this.A=0;this.C=(0,g.z)(this.HV,this);this.B=(0,g.z)(this.KT,this);this.A=g.VD((0,g.z)(function(){BCa(this,null)},this),12E4)},CCa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Bg(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.y,(0,g.z)(function(){x7(this,"Failed to send message: getMdxSessionStatus.")},a)):x7(a,"Sending yt message without session: "+g.Bg(b))},BCa=function(a,b){g.XD(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.o||a.o.id!=b){var c=(0,g.z)(a.No,a),d=(0,g.z)(a.te,a);a.ty(b,c,d,5)}}else a.te(Error("Waiting for session status timed out."))},z7=function(a,b,c){w7.call(this,a,b,"DialSession");
this.A=this.F=null;this.I="";this.N=c;this.B=null;this.D=g.y;this.C=window.NaN;this.K=(0,g.z)(this.KV,this);this.g=g.y},DCa=function(a){a.g=a.H.CE(a.I,a.l.label,a.l.friendlyName,(0,g.z)(function(a){this.g=g.y;
this.No(a)},a),(0,g.z)(function(a){this.g=g.y;
this.te(a)},a))},ECa=function(a){var b={};
b.pairingCode=a.I;b.theme=a.N;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}uBa()&&(b.env_useStageMdx=1);return g.Sg(b)},A7=function(a,b){w7.call(this,a,b,"ManualSession");
this.g=g.VD((0,g.z)(this.Pj,this,null),150)},B7=function(a,b,c,d){g.MF.call(this);
this.l=a;this.D=b||"233637DE";this.C=c||"cl";this.F=d||!1;this.g=null;this.B=!1;this.o=[];this.A=(0,g.z)(this.mS,this)},FCa=function(a,b){return b?g.Ma(a.o,function(a){return j6(b,a.label)},a):null},C7=function(a){g7("Controller",a)},iCa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},D7=function(a){return a.B||!!a.o.length||!!a.g},E7=function(a,b,c){b!=a.g&&(g.cf(a.g),(a.g=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.l):a.R("yt-remote-cast2-receiver-selected",
b.l),b.subscribe("sessionScreen",(0,g.z)(a.nC,a,b)),b.o?a.R("yt-remote-cast2-session-change",b.o):c&&a.g.Pj(null)):a.R("yt-remote-cast2-session-change",null))},GCa=function(a){var b=a.l.BE(),c=a.g&&a.g.l;
a=(0,g.G)(b,function(a){c&&j6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=FCa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},MCa=function(a,b,c,d,e,f,k){HCa()?ICa(b,e,f,k)&&(G7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?JCa(a,c):(window.__onGCastApiAvailable=function(b,d){b?JCa(a,c):(H7("Failed to load cast API: "+d),I7(!1),G7(!1),g.UG("yt-remote-cast-available"),g.UG("yt-remote-cast-receiver"),KCa(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20180331235657/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):xBa():z6("CriOS")?CBa():z6("Android")&&z6("Chrome/")&&window.navigator.presentation?DBa():window.chrome&&window.navigator.presentation&&!z6("Edge")?(A6(),w6(LCa.map(ABa))):x6())):F7("Cannot initialize because not running Chrome")},KCa=function(){F7("dispose");
var a=J7();a&&a.dispose();g.wa("yt.mdx.remote.cloudview.instance_",null,void 0);NCa(!1);g.ZF(K7);K7.length=0},L7=function(){return!!g.TG("yt-remote-cast-installed")},OCa=function(){var a=g.TG("yt-remote-cast-receiver");
return a?a.friendlyName:null},PCa=function(){F7("clearCurrentReceiver");
g.UG("yt-remote-cast-receiver")},QCa=function(){return L7()?J7()?J7().getCastSession():(H7("getCastSelector: Cast is not initialized."),null):(H7("getCastSelector: Cast API is not installed!"),null)},N7=function(){L7()?J7()?M7()?(F7("Requesting cast selector."),J7().requestSession()):(F7("Wait for cast API to be ready to request the session."),K7.push(g.YF("yt-remote-cast2-api-ready",N7))):H7("requestCastSelector: Cast is not initialized."):H7("requestCastSelector: Cast API is not installed!")},O7=
function(a,b){M7()?J7().setConnectedScreenStatus(a,b):H7("setConnectedScreenStatus called before ready.")},HCa=function(){var a=0<=g.Jb.search(/ (CrMo|Chrome|CriOS)\//);
return g.DH||a},RCa=function(a,b){J7().init(a,b)},ICa=function(a,b,c,d){var e=!1;
J7()||(a=new B7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.SG("yt-remote-cast-available",a);g.bG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){F7("onReceiverSelected: "+a.friendlyName);
g.SG("yt-remote-cast-receiver",a);g.bG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){F7("onReceiverResumed: "+a.friendlyName);
g.SG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){F7("onSessionChange: "+k6(a));
a||g.UG("yt-remote-cast-receiver");g.bG("yt-remote-cast2-session-change",a)}),g.wa("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
F7("cloudview.createSingleton_: "+e);return e},J7=function(){return g.x("yt.mdx.remote.cloudview.instance_")},JCa=function(a,b){I7(!0);
G7(!1);RCa(a,function(a){a?(NCa(!0),g.aG("yt-remote-cast2-api-ready")):(H7("Failed to initialize cast API."),I7(!1),g.UG("yt-remote-cast-available"),g.UG("yt-remote-cast-receiver"),KCa());b(a)})},F7=function(a){g7("cloudview",a)},H7=function(a){g7("cloudview",a)},I7=function(a){F7("setCastInstalled_ "+a);
g.SG("yt-remote-cast-installed",a)},M7=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},NCa=function(a){F7("setApiReady_ "+a);
g.wa("yt.mdx.remote.cloudview.apiReady_",a,void 0)},G7=function(a){g.wa("yt.mdx.remote.cloudview.initializing_",a,void 0)},P7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.g=-1;this.muted=!1;this.audioTrackId=null;this.D=this.F=0;this.l=null;this.hasNext=this.Rf=!1;this.I=this.H=this.o=this.B=0;this.A=window.NaN;this.C=!1;this.reset(a)},Q7=function(a){a.audioTrackId=null;
a.l=null;a.g=-1;a.Rf=!1;a.hasNext=!1;a.F=0;a.D=(0,g.F)();a.B=0;a.o=0;a.H=0;a.I=0;a.A=window.NaN;a.C=!1},R7=function(a){return a.kb()?((0,g.F)()-a.D)/1E3:0},S7=function(a,b){a.F=b;
a.D=(0,g.F)()},T7=function(a){switch(a.g){case 1:case 1081:return((0,g.F)()-a.D)/1E3+a.F;
case -1E3:return 0}return a.F},U7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&Q7(a)},V7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.g;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.ec(a.l);b.hasPrevious=a.Rf;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.D;b.seekableStart=a.B;b.seekableEnd=a.o;b.duration=a.H;b.loadedTime=a.I;b.liveIngestionTime=a.A;return b},X7=function(a,b){g.MF.call(this);
this.g=0;this.A=a;this.C=[];this.B=new g.lC;this.o=this.l=null;this.H=(0,g.z)(this.IP,this);this.D=(0,g.z)(this.Nl,this);this.F=(0,g.z)(this.HP,this);this.I=(0,g.z)(this.VP,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.uv,this),SCa(this))):c=3;0!=c&&(b?this.uv(c):g.VD((0,g.z)(function(){this.uv(c)},this),0));
var d=QCa();d&&W7(this,d);this.subscribe("yt-remote-cast2-session-change",this.I)},Y7=function(a){return new P7(a.A.getPlayerContextData())},SCa=function(a){(0,g.B)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.C.push(this.A.subscribe(a,g.Fa(this.iS,a),this))},a)},TCa=function(a){(0,g.B)(a.C,function(a){this.A.unsubscribeByKey(a)},a);
a.C.length=0},Z7=function(a,b){50>a.B.Fc()&&g.nC(a.B,b)},a8=function(a,b,c){var d=Y7(a);
S7(d,c);-1E3!=d.g&&(d.g=b);$7(a,d)},b8=function(a,b,c){a.A.sendMessage(b,c)},$7=function(a,b){TCa(a);
a.A.setPlayerContextData(V7(b));SCa(a)},W7=function(a,b){a.o&&(a.o.removeUpdateListener(a.H),a.o.removeMediaListener(a.D),a.Nl(null));
a.o=b;a.o&&(g7("CP","Setting cast session: "+a.o.sessionId),a.o.addUpdateListener(a.H),a.o.addMediaListener(a.D),a.o.media.length&&a.Nl(a.o.media[0]))},UCa=function(a){var b=a.l.media,c=a.l.customData;
if(b&&c){var d=Y7(a);b.contentId!=d.videoId&&g7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;S7(d,a.l.getEstimatedTime());$7(a,d)}else g7("CP","No cast media video. Ignoring state update.")},c8=function(a,b,c){return(0,g.z)(function(a){this.gc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.gc("Retrying "+b+" using MDx browser channel."),b8(this,b,c))},a)},d8=function(a,b,c){g.MF.call(this);
this.B=window.NaN;this.N=!1;this.I=this.H=this.K=this.M=window.NaN;this.P=[];this.A=this.D=this.o=this.Za=this.g=null;this.pa=a;this.P.push(g.wF(window,"beforeunload",(0,g.z)(this.TI,this)));this.l=[];this.Za=new P7;this.X=b.id;this.g=VCa(this,c);this.g.subscribe("handlerOpened",this.MP,this);this.g.subscribe("handlerClosed",this.JP,this);this.g.subscribe("handlerError",this.KP,this);this.g.subscribe("handlerMessage",this.LP,this);hCa(this.g,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.Za.videoId;g.VG()&&g.SG("yt-remote-session-video-id",a)},this)},e8=function(a){g7("conn",a)},VCa=function(a,b){return new a7(d7(a.pa,"/bc"),b)},f8=function(a,b){a.R("proxyStateChange",b)},WCa=function(a){a.B=g.VD((0,g.z)(function(){e8("Connecting timeout");
this.C(1)},a),2E4)},g8=function(a){g.XD(a.B);
a.B=window.NaN},h8=function(a){g.XD(a.M);
a.M=window.NaN},XCa=function(a){i8(a);
a.K=g.VD((0,g.z)(function(){j8(this,"getNowPlaying")},a),2E4)},i8=function(a){g.XD(a.K);
a.K=window.NaN},ZCa=function(a,b){b&&(g8(a),h8(a));
b==(b7(a.g)&&(0,window.isNaN)(a.B))?b&&(f8(a,1),j8(a,"getSubtitlesTrack")):b?(a.W()&&a.Za.reset(),f8(a,1),j8(a,"getNowPlaying"),YCa(a)):a.C(1)},$Ca=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Za.videoId&&(g.Zb(b.params)?a.Za.l=null:a.Za.l=b.params,a.R("remotePlayerChange"))},aDa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.Za.listId=b.params.listId||a.Za.listId;U7(a.Za,c,d);a.R("remoteQueueChange")},cDa=function(a,b){b.params=b.params||{};
aDa(a,b);bDa(a,b);a.R("autoplayDismissed")},bDa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
S7(a.Za,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.Za.g&&(c=-1E3);a.Za.g=c;c=Number(b.params.loadedTime);a.Za.I=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.Za.H=(0,window.isNaN)(c)?0:c;c=a.Za;var d=Number(b.params.liveIngestionTime);c.A=d;c.C=(0,window.isNaN)(d)?!1:!0;c=a.Za;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.B=(0,window.isNaN)(d)?0:d;c.o=(0,window.isNaN)(e)?0:e;1==a.Za.g?XCa(a):i8(a);
a.R("remotePlayerChange")},dDa=function(a,b){if(-1E3!=a.Za.g){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Za.g=c;c=(0,window.parseInt)(b.params.currentTime,10);S7(a.Za,(0,window.isNaN)(c)?0:c);a.R("remotePlayerChange")}},eDa=function(a,b){var c="true"==b.params.muted;
a.Za.volume=(0,window.parseInt)(b.params.volume,10);a.Za.muted=c;a.R("remotePlayerChange")},fDa=function(a,b){a.D=b.params.videoId;
a.R("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},gDa=function(a,b){var c="true"==b.params.hasNext;
a.Za.Rf="true"==b.params.hasPrevious;a.Za.hasNext=c;a.R("previousNextChange")},YCa=function(a){g.XD(a.I);
a.I=g.VD((0,g.z)(a.C,a,1),864E5)},j8=function(a,b,c){c?e8("Sending: action="+b+", params="+g.Bg(c)):e8("Sending: action="+b);
a.g.sendMessage(b,c)},k8=function(a){k7.call(this,"ScreenServiceProxy");
this.dd=a;this.l=[];this.l.push(this.dd.$_s("screenChange",(0,g.z)(this.FV,this)));this.l.push(this.dd.$_s("onlineScreenChange",(0,g.z)(this.JR,this)))},lDa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.PD("MDX_CONFIG")||b;mBa();s6();l8||(l8=new c7(b?b.loungeApiHost:void 0),uBa()&&(l8.g="/api/loungedev"));m8||(m8=g.x("yt.mdx.remote.deferredProxies_")||[],g.wa("yt.mdx.remote.deferredProxies_",m8,void 0));hDa();var c=n8();if(!c){var d=new t7(l8);g.wa("yt.mdx.remote.screenService_",d,void 0);c=n8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);MCa(a,d,function(a){a?o8()&&O7(o8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.bG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.wa("yt.mdx.remote.initialized_",!0,void 0),p8("Initializing: "+g.Bg(b)),q8.push(g.YF("yt-remote-cast2-availability-change",function(){g.bG("yt-remote-receiver-availability-change")})),q8.push(g.YF("yt-remote-cast2-receiver-selected",function(){r8(null);
g.bG("yt-remote-auto-connect","cast-selector-receiver")})),q8.push(g.YF("yt-remote-cast2-receiver-resumed",function(){g.bG("yt-remote-receiver-resumed","cast-selector-receiver")})),q8.push(g.YF("yt-remote-cast2-session-change",iDa)),q8.push(g.YF("yt-remote-connection-change",function(a){a?O7(o8(),"YouTube TV"):s8()||(O7(null,null),PCa())})),a=t8(),b.isAuto&&(a.id+="#dial"),g.SF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),p8(" -- with channel params: "+
g.Bg(a)),jDa(a),c.start(),o8()||kDa())},nDa=function(){var a=mDa();
L7()&&g.TG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},mDa=function(){var a=n8().dd.$_gos();
var b=u8();b&&v8()&&(n6(a,b)||a.push(b));return lBa(a)},w8=function(){var a=oDa();
!a&&L7()&&OCa()&&(a={key:"cast-selector-receiver",name:OCa()});return a},oDa=function(){var a=mDa(),b=u8();
b||(b=s8());return g.Ma(a,function(a){return b&&j6(b,a.key)?!0:!1})},u8=function(){var a=o8();
if(!a)return null;var b=n8().oe();return o6(b,a)},iDa=function(a){p8("remote.onCastSessionChange_: "+k6(a));
if(a){var b=u8();b&&b.id==a.id?O7(b.id,"YouTube TV"):(b&&x8(),y8(a,1))}else v8()&&x8()},x8=function(){M7()?J7().stopSession():H7("stopSession called before API ready.");
var a=v8();a&&(a.disconnect(1),z8(null))},A8=function(){var a=v8();
return!!a&&3!=a.getProxyState()},p8=function(a){g7("remote",a)},n8=function(){if(!B8){var a=g.x("yt.mdx.remote.screenService_");
B8=a?new k8(a):null}return B8},o8=function(){return g.x("yt.mdx.remote.currentScreenId_")},pDa=function(a){g.wa("yt.mdx.remote.currentScreenId_",a,void 0)},qDa=function(){return g.x("yt.mdx.remote.connectData_")},r8=function(a){g.wa("yt.mdx.remote.connectData_",a,void 0)},v8=function(){return g.x("yt.mdx.remote.connection_")},z8=function(a){var b=v8();
r8(null);a||pDa("");g.wa("yt.mdx.remote.connection_",a,void 0);m8&&((0,g.B)(m8,function(b){b(a)}),m8.length=0);
b&&!a?g.bG("yt-remote-connection-change",!1):!b&&a&&g.bG("yt-remote-connection-change",!0)},s8=function(){var a=g.VG();
if(!a)return null;var b=n8().oe();return o6(b,a)},y8=function(a,b){u8()&&u8();
pDa(a.id);var c=new d8(l8,a,t8());c.connect(b,qDa());c.subscribe("beforeDisconnect",function(a){g.bG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){v8()&&z8(null)});
z8(c)},kDa=function(){var a=s8();
a?(p8("Resume connection to: "+k6(a)),y8(a,0)):(t6(),PCa(),p8("Skipping connecting because no session screen found."))},hDa=function(){var a=t8();
if(g.Zb(a)){a=r6();var b=g.TG("yt-remote-session-name")||"",c=g.TG("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.wa("yt.mdx.remote.channelParams_",a,void 0)}},t8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},jDa=function(a){a?(g.SG("yt-remote-session-app",a.app),g.SG("yt-remote-session-name",a.name)):(g.UG("yt-remote-session-app"),g.UG("yt-remote-session-name"));
g.wa("yt.mdx.remote.channelParams_",a,void 0)},C8=function(a,b,c){g.K.call(this);
this.F=a;this.l=b;this.o=new g.JF(this);g.L(this,this.o);this.o.O(b,"onCaptionsTrackListChanged",this.bR);this.o.O(b,"captionschanged",this.GP);this.o.O(b,"captionssettingschanged",this.LD);this.o.O(b,"videoplayerreset",this.Oo);this.o.O(b,"mdxautoplaycancel",this.aI);this.P=this.o.O(b,"onVolumeChange",this.XB);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.kC,this);c.subscribe("remotePlayerChange",this.Ql,this);c.subscribe("remoteQueueChange",this.Oo,this);c.subscribe("autoplayUpNext",this.HB,
this);c.subscribe("previousNextChange",this.hC,this);c.subscribe("nowAutoplaying",this.ZB,this);c.subscribe("autoplayDismissed",this.GB,this);this.suggestion=null;this.H=new g.jP(64);this.A=new g.Zt(this.HD,500,this);g.L(this,this.A);this.B=new g.Zt(this.ID,1E3,this);g.L(this,this.B);this.K=new B6(this.hV,0,this);g.L(this,this.K);this.C={};this.M=new g.Zt(this.mE,1E3,this);g.L(this,this.M);this.I=new g.Vk(this.LN,1E3,this);g.L(this,this.I);this.N=g.y;this.LD();this.Oo();this.Ql()},D8=function(a,b){var c=
a.F,d=a.l.ea().lengthSeconds;
c.H=b||0;c.g.R("progresssync",b,d)},rDa=function(a){D8(a,0);
a.A.stop();E8(a,new g.jP(64))},G8=function(a,b){if(F8(a)&&!a.D){var c=null;
b&&(c={style:a.l.Ci()},g.gc(c,b));a.g.zD(a.l.ea(1).videoId,c);a.C=Y7(a.g).l}},H8=function(a,b){var c=a.l.cg();
if(c){var d=c.je();var e=c.listId.toString()}var f=a.l.ea(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;f=f.Kj;var m=Y7(c);l=l||0;var n={videoId:k,currentIndex:l};U7(m,k,l);g.t(b)&&(S7(m,b),n.currentTime=b);g.t(e)&&(n.listId=e);null!=d&&(n.playerParams=d);null!=f&&(n.clickTrackingParams=f);b8(c,"setPlaylist",n);e||$7(c,m);E8(a,new g.jP(1))},sDa=function(a,b){if(b){var c=a.l.Ac("captions","tracklist",{mz:1});
c&&c.length?(a.l.Id("captions","track",b),a.D=!1):(a.l.Sj("captions"),a.D=!0)}else a.l.Id("captions","track",{})},F8=function(a){return Y7(a.g).videoId==a.l.ea(1).videoId},E8=function(a,b){a.B.stop();
var c=a.H;if(!g.rP(c,b)){var d=g.W(b,2);d!=g.W(a.H,2)&&g.SU(a.l,d);a.H=b;tDa(a.F,c,b)}},I8=function(a){g.V.call(this,{G:"div",
L:"ytp-remote",J:[{G:"div",L:"ytp-remote-display-status",J:[{G:"div",L:"ytp-remote-display-status-icon",J:[g.Moa()]},{G:"div",L:"ytp-remote-display-status-text",J:["{{statustext}}"]}]}]});this.l=new g.yV(this,250);g.L(this,this.l);this.o=a;this.O(a,"presentingplayerstatechange",this.A);uDa(this,g.PU(a))},uDa=function(a,b){if(3==a.o.Ua()){var c={RECEIVER_NAME:a.o.Ac("remote","currentReceiver").name};
c=g.W(b,128)?g.U("YTP_MDX_STATUS_ERROR_2",c):b.kb()||g.W(b,4)?g.U("YTP_MDX_STATUS_PLAYING_2",c):g.U("YTP_MDX_STATUS_CONNECTED_2",c);a.updateValue("statustext",c);a.l.show()}else a.l.hide()},J8=function(a,b){g.HZ.call(this,g.U("YTP_MDX_TITLE"),0,a,b);
this.l=a;this.F={};this.O(a,"onMdxReceiversChange",this.I);this.O(a,"presentingplayerstatechange",this.I);this.I()},K8=function(a){g.mV.call(this,a);
g.XG({YTP_MDX_CAST_SELECTOR:"Cast...",YTP_MDX_MY_COMPUTER:"This computer",YTP_MDX_PLAYER_ERROR:"This video is not available for remote playback.",YTP_MDX_STATUS_CONNECTED_2:"Connected to $RECEIVER_NAME",YTP_MDX_STATUS_ERROR_2:"Error on $RECEIVER_NAME",YTP_MDX_STATUS_PLAYING_2:"Playing on $RECEIVER_NAME",YTP_MDX_TITLE:"Play on"});this.o={key:m6(),name:g.U("YTP_MDX_MY_COMPUTER")};this.B=null;this.C=[];this.I=this.l=null;this.F=[this.o];this.A=this.o;this.D=new g.jP(64);this.H=0;if(!g.BM(g.X(this.g))){a=
this.g;var b=g.QI(a);b&&(b=b.vo())&&(b=new J8(a,b),g.L(this,b));b=new I8(a);g.L(this,b);g.gV(a,b.element,4)}},tDa=function(a,b,c){a.D=c;
a.g.R("presentingplayerstatechange",new g.xP(c,b))},L8=function(a,b){if(b.key!=a.A.key)if(b.key==a.o.key)x8();
else{a.A=b;var c=a.g.getPlaylistId();var d=a.g.ea(1),e=d.videoId;if(c||e){var f=a.g.cg();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.oc(l).videoId}else k=[e];f=a.g.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.Kj,index:Math.max(a.g.nA(),0),currentTime:0==f?void 0:f}}else c=null;p8("Connecting to: "+g.Bg(b));"cast-selector-receiver"==b.key?(r8(c||null),M7()?J7().setLaunchParams(c||null):H7("setLaunchParams called before ready.")):!c&&
A8()&&o8()==b.key?g.bG("yt-remote-connection-change",!0):(x8(),r8(c||null),c=n8().oe(),(c=o6(c,b.key))&&y8(c,1))}},JBa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},L6={"'":"\\'"},vDa={},hBa={XW:"atp",q1:"ska",G0:"que",S_:"mus",m1:"sus",gZ:"dsp"};
h6.prototype.mn=function(){var a=new h6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.o=this.o;a.l=this.l;a.g=this.g};
var u6,q6="",y6=v6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",BBa=v6("loadCastFramework")||v6("loadCastApplicationFramework"),LCa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.A(B6,g.K);g.h=B6.prototype;g.h.NI=function(a){this.A=arguments;this.g=!1;this.wa?this.o=(0,g.F)()+this.ed:this.wa=g.vg(this.B,this.ed)};
g.h.stop=function(){this.wa&&(g.wg(this.wa),this.wa=null);this.o=null;this.g=!1;this.A=[]};
g.h.pause=function(){++this.l};
g.h.resume=function(){this.l&&(--this.l,!this.l&&this.g&&(this.g=!1,this.C.apply(null,this.A)))};
g.h.V=function(){this.stop();B6.Z.V.call(this)};
g.h.OI=function(){this.o?(this.wa=g.vg(this.B,this.o-(0,g.F)()),this.o=null):(this.wa=null,this.l?this.g=!0:(this.g=!1,this.C.apply(null,this.A)))};C6.prototype.stringify=function(a){return g.w.JSON.stringify(a,void 0)};
C6.prototype.parse=function(a){return g.w.JSON.parse(a,void 0)};g.h=D6.prototype;g.h.ji=null;g.h.yf=!1;g.h.zk=null;g.h.kv=null;g.h.gk=null;g.h.Aj=null;g.h.kh=null;g.h.Dh=null;g.h.Ji=null;g.h.Qc=null;g.h.im=0;g.h.zf=null;g.h.Lp=null;g.h.lh=null;g.h.fl=-1;g.h.gD=!0;g.h.Th=!1;g.h.vr=0;g.h.Zo=null;var HBa={},G6={};g.h=D6.prototype;g.h.setTimeout=function(a){this.B=a};
g.h.eU=function(a){a=a.target;var b=this.Zo;b&&3==g.jx(a)?b.yj():this.vE(a)};
g.h.vE=function(a){try{if(a==this.Qc)a:{var b=g.jx(this.Qc),c=this.Qc.l,d=this.Qc.getStatus();if(g.yd&&!g.tc(10)||g.Ad&&!g.sc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.gf&&!g.nx(this.Qc))break a;this.Th||4!=b||7==c||(8==c||0>=d?this.g.sf(3):this.g.sf(2));N6(this);var e=this.Qc.getStatus();this.fl=e;var f=g.nx(this.Qc);(this.yf=200==e)?(4==b&&J6(this),this.C?(IBa(this,b,f),g.gf&&this.yf&&3==b&&(this.A.T(this.l,"tick",this.aU),this.l.start())):I6(this,f),this.yf&&!this.Th&&(4==b?this.g.Mo(this):
(this.yf=!1,F6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.lh=3,H6(13)):(this.lh=0,H6(14)),J6(this),K6(this))}}catch(k){this.Qc&&g.nx(this.Qc)}finally{}};
g.h.aU=function(){var a=g.jx(this.Qc),b=g.nx(this.Qc);this.im<b.length&&(N6(this),IBa(this,a,b),this.yf&&4!=a&&F6(this))};
g.h.iT=function(a){M6((0,g.z)(this.hT,this,a),0)};
g.h.hT=function(a){this.Th||(N6(this),I6(this,a),F6(this))};
g.h.sC=function(a){M6((0,g.z)(this.gT,this,a),0)};
g.h.gT=function(a){this.Th||(J6(this),this.yf=a,this.g.Mo(this),this.g.sf(4))};
g.h.cancel=function(){this.Th=!0;J6(this)};
g.h.yT=function(){this.zk=null;var a=(0,g.F)();0<=a-this.kv?(2!=this.Aj&&this.g.sf(3),J6(this),this.lh=2,H6(18),K6(this)):LBa(this,this.kv-a)};g.h=OBa.prototype;g.h.sr=null;g.h.ue=null;g.h.bp=!1;g.h.Cy=null;g.h.Bn=null;g.h.tr=null;g.h.ur=null;g.h.Me=null;g.h.Ag=-1;g.h.dl=null;g.h.Ek=null;g.h.connect=function(a){this.ur=a;a=P6(this.g,null,this.ur);H6(3);this.Cy=(0,g.F)();var b=this.g.F;null!=b?(this.dl=b[0],(this.Ek=b[1])?(this.Me=1,PBa(this)):(this.Me=2,R6(this))):(g6(a,"MODE","init"),this.ue=new D6(this,void 0,void 0,void 0),this.ue.ji=this.sr,E6(this.ue,a,!1,null,!0),this.Me=0)};
g.h.bI=function(a){if(a)this.Me=2,R6(this);else{H6(4);var b=this.g;b.Of=b.ah.Ag;Y6(b,9)}a&&this.sf(2)};
g.h.Oq=function(a){return this.g.Oq(a)};
g.h.abort=function(){this.ue&&(this.ue.cancel(),this.ue=null);this.Ag=-1};
g.h.By=function(){return!1};
g.h.lC=function(a,b){this.Ag=a.fl;if(0==this.Me)if(b){try{var c=this.l.parse(b)}catch(d){c=this.g;c.Of=this.Ag;Y6(c,2);return}this.dl=c[0];this.Ek=c[1]}else c=this.g,c.Of=this.Ag,Y6(c,2);else if(2==this.Me)if(this.bp)H6(7),this.tr=(0,g.F)();else if("11111"==b){if(H6(6),this.bp=!0,this.Bn=(0,g.F)(),c=this.Bn-this.Cy,!g.yd||g.tc(10)||500>c)this.Ag=200,this.ue.cancel(),H6(12),Q6(this.g,this,!0)}else H6(8),this.Bn=this.tr=(0,g.F)(),this.bp=!1};
g.h.Mo=function(){this.Ag=this.ue.fl;if(this.ue.yf)0==this.Me?this.Ek?(this.Me=1,PBa(this)):(this.Me=2,R6(this)):2==this.Me&&((!g.yd||g.tc(10)?!this.bp:200>this.tr-this.Bn)?(H6(11),Q6(this.g,this,!1)):(H6(12),Q6(this.g,this,!0)));else{0==this.Me?H6(9):2==this.Me&&H6(10);var a=this.g;a.Of=this.Ag;Y6(a,2)}};
g.h.Yl=function(){return this.g.Yl()};
g.h.isActive=function(){return this.g.isActive()};
g.h.sf=function(a){this.g.sf(a)};g.h=S6.prototype;g.h.Pk=null;g.h.Td=null;g.h.xc=null;g.h.rr=null;g.h.Fn=null;g.h.Pw=null;g.h.Tn=null;g.h.Kl=0;g.h.YO=0;g.h.rd=null;g.h.bh=null;g.h.rg=null;g.h.Xh=null;g.h.ah=null;g.h.Jp=null;g.h.Oj=-1;g.h.Bz=-1;g.h.Of=-1;g.h.rj=0;g.h.ej=0;g.h.Vh=8;var Z6=new g.Gf;g.A(RBa,g.ef);g.A(SBa,g.ef);g.A(TBa,g.ef);g.h=S6.prototype;g.h.connect=function(a,b,c,d,e){H6(0);this.rr=b;this.Pk=c||{};d&&g.t(e)&&(this.Pk.OSID=d,this.Pk.OAID=e);this.C?(M6((0,g.z)(this.qx,this,a),100),XBa(this)):this.qx(a)};
g.h.qx=function(a){this.ah=new OBa(this);this.ah.sr=null;this.ah.l=this.B;this.ah.connect(a)};
g.h.By=function(){return 0==this.g};
g.h.qC=function(a){this.bh=null;$Ba(this,a)};
g.h.pC=function(){this.rg=null;this.xc=new D6(this,this.o,"rpc",this.D);this.xc.ji=null;this.xc.vr=0;var a=this.Pw.clone();g.Km(a,"RID","rpc");g.Km(a,"SID",this.o);g.Km(a,"CI",this.Jp?"0":"1");g.Km(a,"AID",this.Oj);T6(this,a);if(!g.yd||g.tc(10))g.Km(a,"TYPE","xmlhttp"),E6(this.xc,a,!0,this.Tn,!1);else{g.Km(a,"TYPE","html");var b=this.xc,c=!!this.Tn;b.Aj=3;b.kh=f6(a.clone());KBa(b,c)}};
g.h.lC=function(a,b){if(0!=this.g&&(this.xc==a||this.Td==a))if(this.Of=a.fl,this.Td==a&&3==this.g)if(7<this.Vh){try{var c=this.B.parse(b)}catch(f){c=null}if(g.za(c)&&3==c.length)if(0==c[0])a:{if(!this.rg){if(this.xc)if(this.xc.gk+3E3<this.Td.gk)V6(this),this.xc.cancel(),this.xc=null;else break a;X6(this);H6(19)}}else this.Bz=c[1],0<this.Bz-this.Oj&&37500>c[2]&&this.Jp&&0==this.ej&&!this.Xh&&(this.Xh=M6((0,g.z)(this.BP,this),6E3));else Y6(this,11)}else b!=vDa.bY.g&&Y6(this,11);else if(this.xc==a&&
V6(this),!g.D(b)){c=this.B.parse(b);g.za(c);for(var d=0;d<c.length;d++){var e=c[d];this.Oj=e[0];e=e[1];2==this.g?"c"==e[0]?(this.o=e[1],this.Tn=e[2],e=e[3],null!=e?this.Vh=e:this.Vh=6,this.g=3,this.rd&&this.rd.ax(),this.Pw=P6(this,this.Yl()?this.Tn:null,this.rr),aCa(this)):"stop"==e[0]&&Y6(this,7):3==this.g&&("stop"==e[0]?Y6(this,7):"noop"!=e[0]&&this.rd&&this.rd.Zw(e),this.ej=0)}}};
g.h.BP=function(){null!=this.Xh&&(this.Xh=null,this.xc.cancel(),this.xc=null,X6(this),H6(20))};
g.h.Mo=function(a){if(this.xc==a){V6(this);this.xc=null;var b=2}else if(this.Td==a)this.Td=null,b=1;else return;this.Of=a.fl;if(0!=this.g)if(a.yf)1==b?(b=(0,g.F)()-a.gk,Z6.dispatchEvent(new SBa(Z6,a.Ji?a.Ji.length:0,b,this.rj)),U6(this),this.A.length=0):aCa(this);else{var c=a.lh,d;if(!(d=3==c||7==c||0==c&&0<this.Of)){if(d=1==b)this.Td||this.bh||1==this.g||2<=this.rj?d=!1:(this.bh=M6((0,g.z)(this.qC,this,a),bCa(this,this.rj)),this.rj++,d=!0);d=!(d||2==b&&X6(this))}if(d)switch(c){case 1:Y6(this,5);
break;case 4:Y6(this,10);break;case 3:Y6(this,6);break;case 7:Y6(this,12);break;default:Y6(this,2)}}};
g.h.vI=function(a){if(!g.Qa(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.VU=function(a){a?H6(2):(H6(1),cCa(this,8))};
g.h.Oq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.dx;a.F=!1;return a};
g.h.isActive=function(){return!!this.rd&&this.rd.isActive(this)};
g.h.sf=function(a){Z6.dispatchEvent(new TBa(Z6,a))};
g.h.Yl=function(){return!(!g.yd||g.tc(10))};
g.h=dCa.prototype;g.h.ax=function(){};
g.h.Zw=function(){};
g.h.Yw=function(){};
g.h.Cq=function(){};
g.h.fy=function(){return{}};
g.h.isActive=function(){return!0};g.A($6,g.K);g.h=$6.prototype;g.h.ZS=function(){this.ed=Math.min(3E5,2*this.ed);this.o();this.l&&this.start()};
g.h.start=function(){var a=this.ed+15E3*Math.random();g.$t(this.g,a);this.l=(0,g.F)()+a};
g.h.stop=function(){this.g.stop();this.l=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.ed=5E3};g.A(a7,dCa);g.h=a7.prototype;g.h.subscribe=function(a,b,c){return this.o.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.o.unsubscribe(a,b,c)};
g.h.Kd=function(a){return this.o.Kd(a)};
g.h.R=function(a,b){return this.o.R.apply(this.o,arguments)};
g.h.dispose=function(){this.I||(this.I=!0,g.cf(this.o),gCa(this),g.cf(this.l),this.l=null)};
g.h.ha=function(){return this.I};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.H="";this.l.stop();this.B=a||null;this.A=b||0;a=this.K+"/test";b=this.K+"/bind";var d=new S6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.M),e=this.g;e&&(e.rd=null);d.rd=this;this.g=d;e?this.g.connect(a,b,this.C,e.o,e.Oj):c?this.g.connect(a,b,this.C,c.sessionId,c.arrayId):this.g.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.gc(c,b);this.l.isActive()||2==(this.g?this.g.g:0)?this.D.push(c):b7(this)&&YBa(this.g,c)};
g.h.ax=function(){this.l.reset();this.B=null;this.A=0;if(this.D.length){var a=this.D;this.D=[];for(var b=0,c=a.length;b<c;++b)YBa(this.g,a[b])}this.R("handlerOpened")};
g.h.Yw=function(a){var b=2==a&&401==this.g.Of;4==a||b||this.l.start();this.R("handlerError",a)};
g.h.Cq=function(a){if(!this.l.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.D.push(d)}};
g.h.fy=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.F&&(a.ui=""+this.F);this.B&&g.gc(a,this.B);return a};
g.h.Zw=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),WBa(this.g)):this.R("handlerMessage",new eCa(a[0],a[1]))};
g.h.AV=function(){this.l.isActive();var a=this.g,b=0;a.xc&&b++;a.Td&&b++;0!=b||this.connect(this.B,this.A)};c7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
c7.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
c7.prototype.B=function(a){a(Error("request timed out"))};var oCa=(0,g.F)(),f7=null,i7=Array(50),h7=-1,j7=!1;g.A(k7,g.MF);k7.prototype.oe=function(){return this.g};
k7.prototype.contains=function(a){return!!n6(this.g,a)};
k7.prototype.get=function(a){return a?o6(this.g,a):null};
k7.prototype.info=function(a){g7(this.D,a)};g.A(l7,g.MF);var wDa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=l7.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.wa)&&this.AE()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.wa)||(g.XD(this.wa),this.wa=window.NaN)};
g.h.V=function(){this.stop();l7.Z.V.call(this)};
g.h.AE=function(){this.wa=window.NaN;this.g=g.kE(d7(this.C,"/pairing/get_screen"),{method:"POST",Lb:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.z)(this.CV,this),onError:(0,g.z)(this.BV,this),xd:(0,g.z)(this.EV,this)})};
g.h.CV=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.R("pairingComplete",new i6(c))};
g.h.BV=function(a){this.g=null;a.status&&404==a.status?this.l>=wDa.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=wDa[this.l],this.wa=g.VD((0,g.z)(this.AE,this),a),this.l++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.EV=function(){this.g=null;this.R("pairingFailed",Error("Server not responding"))};g.A(n7,k7);g.h=n7.prototype;g.h.start=function(){m7(this)&&this.R("screenChange");!g.TG("yt-remote-lounge-token-expiration")&&sCa(this);g.XD(this.l);this.l=g.VD((0,g.z)(this.start,this),1E4)};
g.h.add=function(a,b){m7(this);pCa(this,a);o7(this,!1);this.R("screenChange");b(a);a.token||sCa(this)};
g.h.remove=function(a,b){var c=m7(this);rCa(this,a)&&(o7(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.Fp=function(a,b,c,d){var e=m7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,o7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.V=function(){g.XD(this.l);n7.Z.V.call(this)};
g.h.dJ=function(a){m7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}o7(this,!b);b&&g7(this.D,"Missed "+b+" lounge tokens.")};
g.h.cJ=function(a){g7(this.D,"Requesting lounge tokens failed: "+a)};g.A(q7,g.MF);g.h=q7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.TG("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.F)()-144E5<a?0:a)?s7(this):(this.A=(0,g.F)()+3E5,g.SG("yt-remote-fast-check-period",this.A),this.qu())};
g.h.isEmpty=function(){return g.Zb(this.g)};
g.h.update=function(){p7("Updating availability on schedule.");var a=this.C(),b=g.Nb(this.g,function(b,d){return b&&!!o6(a,d)},this);
r7(this,b)};
g.h.V=function(){g.XD(this.o);this.o=window.NaN;this.l&&(this.l.abort(),this.l=null);q7.Z.V.call(this)};
g.h.qu=function(){g.XD(this.o);this.o=window.NaN;this.l&&this.l.abort();var a=vCa(this);if(g.Qb(a)){var b=d7(this.B,"/pairing/get_screen_availability");this.l=e7(this.B,b,{lounge_token:g.Tb(a).join(",")},(0,g.z)(this.GS,this,a),(0,g.z)(this.FS,this))}else r7(this,{}),s7(this)};
g.h.GS=function(a,b){this.l=null;var c=g.Tb(vCa(this));if(g.kb(c,g.Tb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;r7(this,d);s7(this)}else this.gc("Changing Screen set during request."),this.qu()};
g.h.FS=function(a){this.gc("Screen availability failed: "+a);this.l=null;s7(this)};
g.h.gc=function(a){g7("OnlineScreenService",a)};g.A(t7,k7);g.h=t7.prototype;g.h.start=function(){this.o.start();this.l.start();this.g.length&&(this.R("screenChange"),this.l.isEmpty()||this.R("onlineScreenChange"))};
g.h.add=function(a,b,c){this.o.add(a,b,c)};
g.h.remove=function(a,b,c){this.o.remove(a,b,c);this.l.update()};
g.h.Fp=function(a,b,c,d){this.o.contains(a)?this.o.Fp(a,b,c,d):(a="Updating name of unknown screen: "+a.name,g7(this.D,a),d(Error(a)))};
g.h.oe=function(a){return a?this.g:g.Ya(this.g,(0,g.Ld)(this.A,function(a){return!this.contains(a)},this))};
g.h.BE=function(){return(0,g.Ld)(this.oe(!0),function(a){return!!this.l.g[a.id]},this)};
g.h.CE=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new l7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(a){g.cf(f);d(u7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.cf(f);e(a)});
f.start();return(0,g.z)(f.stop,f)};
g.h.GV=function(a,b,c,d){g.kE(d7(this.C,"/pairing/get_screen"),{method:"POST",Lb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.z)(function(a,d){var e=new i6(d.screen||{});if(!e.name||zCa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);zCa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(u7(this,e))},this),
onError:(0,g.z)(function(a){d(Error("pairing request failed: "+a.status))},this),
xd:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.h.V=function(){g.cf(this.o);g.cf(this.l);t7.Z.V.call(this)};
g.h.sJ=function(){ACa(this);this.R("screenChange");this.l.update()};
t7.prototype.dispose=t7.prototype.dispose;g.A(w7,g.MF);g.h=w7.prototype;g.h.No=function(a){this.o=a;this.R("sessionScreen",this.o)};
g.h.te=function(a){this.ha()||(a&&x7(this,""+a),this.o=null,this.R("sessionScreen",null))};
g.h.info=function(a){g7(this.M,a)};
g.h.EE=function(){return null};
g.h.Au=function(a){var b=this.l;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){x7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.V=function(){this.Au("");w7.Z.V.call(this)};g.A(y7,w7);g.h=y7.prototype;g.h.zu=function(a){if(this.g){if(this.g==a)return;x7(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.C);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.g=a;this.g.addUpdateListener(this.C);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);CCa(this)};
g.h.Pj=function(a){this.info("launchWithParams no-op for Cast: "+g.Bg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.z)(function(){this.te()},this),(0,g.z)(function(){this.te(Error("Failed to stop receiver app."))},this)):this.te(Error("Stopping cast device witout session."))};
g.h.Au=g.y;g.h.V=function(){this.info("disposeInternal");g.XD(this.A);this.A=0;this.g&&(this.g.removeUpdateListener(this.C),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.g=null;y7.Z.V.call(this)};
g.h.KT=function(a,b){if(!this.ha())if(b){var c=g.Yw(b);if(g.Ca(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Bg(c));switch(d){case "mdxSessionStatus":BCa(this,c.screenId);break;default:x7(this,"Unknown youtube message: "+d)}}else x7(this,"Unable to parse message.")}else x7(this,"No data in message.")};
g.h.ty=function(a,b,c,d){yCa(this.H,this.l.label,a,this.l.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(x7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.VD((0,g.z)(this.ty,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.EE=function(){return this.g};
g.h.HV=function(a){this.ha()||a||(x7(this,"Cast session died."),this.te())};g.A(z7,w7);g.h=z7.prototype;g.h.zu=function(a){this.A=a;this.A.addUpdateListener(this.K)};
g.h.Pj=function(a){this.B=a;this.D()};
g.h.stop=function(){this.g();this.g=g.y;g.XD(this.C);this.A?this.A.stop((0,g.z)(this.te,this,null),(0,g.z)(this.te,this,"Failed to stop DIAL device.")):this.te()};
g.h.V=function(){this.g();this.g=g.y;g.XD(this.C);this.A&&this.A.removeUpdateListener(this.K);this.A=null;z7.Z.V.call(this)};
g.h.KV=function(a){this.ha()||a||(x7(this,"DIAL session died."),this.g(),this.g=g.y,this.te())};
g.h.hs=function(a){this.I=m6();if(this.B){var b=new window.chrome.cast.DialLaunchResponse(!0,ECa(this));a(b);DCa(this)}else this.D=(0,g.z)(function(){g.XD(this.C);this.D=g.y;this.C=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,ECa(this));a(b);DCa(this)},this),this.C=g.VD((0,g.z)(function(){this.D()},this),100)};
g.h.GK=function(a,b,c){yCa(this.H,this.F.receiver.label,a,this.l.friendlyName,(0,g.z)(function(a){a&&a.token?(this.No(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.hs(b,c)},this),(0,g.z)(function(a){x7(this,"Failed to get DIAL screen: "+a);
this.hs(b,c)},this))};g.A(A7,w7);A7.prototype.stop=function(){this.te()};
A7.prototype.zu=g.y;A7.prototype.Pj=function(){g.XD(this.g);this.g=window.NaN;var a=o6(this.H.oe(),this.l.label);a?this.No(a):this.te(Error("No such screen"))};
A7.prototype.V=function(){g.XD(this.g);this.g=window.NaN;A7.Z.V.call(this)};g.A(B7,g.MF);g.h=B7.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.D);this.F||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.z)(this.mC,this),(0,g.z)(this.qS,this),d,e);c.customDialLaunchCallback=(0,g.z)(this.mQ,this);window.chrome.cast.initialize(c,
(0,g.z)(function(){this.ha()||(window.chrome.cast.addReceiverActionListener(this.A),lCa(),this.l.subscribe("onlineScreenChange",(0,g.z)(this.DE,this)),this.o=GCa(this),window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(a){this.gc("Failed to set initial custom receivers: "+g.Bg(a))},this)),this.R("yt-remote-cast2-availability-change",D7(this)),b(!0))},this),(0,g.z)(function(a){this.gc("Failed to initialize API: "+g.Bg(a));
b(!1)},this))};
g.h.FU=function(a,b){C7("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.o;if(!a||c&&c.id!=a)C7("Unsetting old screen status: "+this.g.l.friendlyName),E7(this,null)}if(a&&b){if(!this.g){c=o6(this.l.oe(),a);if(!c){C7("setConnectedScreenStatus: Unknown screen.");return}var d=FCa(this,c);d||(C7("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.o.push(d),
window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(a){this.gc("Failed to set initial custom receivers: "+g.Bg(a))},this)));
C7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);E7(this,new A7(this.l,d),!0)}this.g.Au(b)}else C7("setConnectedScreenStatus: no screen.")};
g.h.GU=function(a){this.ha()?this.gc("Setting connection data on disposed cast v2"):this.g?this.g.Pj(a):this.gc("Setting connection data without a session")};
g.h.JV=function(){this.ha()?this.gc("Stopping session on disposed cast v2"):this.g?(this.g.stop(),E7(this,null)):C7("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.z)(this.mC,this),(0,g.z)(this.LS,this))};
g.h.V=function(){this.l.unsubscribe("onlineScreenChange",(0,g.z)(this.DE,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.A);g.Va(g.x("yt.mdx.remote.debug.handlers_")||[],iCa);g.cf(this.g);B7.Z.V.call(this)};
g.h.gc=function(a){g7("Controller",a)};
g.h.nC=function(a,b){this.g==a&&(b||E7(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.mS=function(a,b){if(!this.ha())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),C7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.l.label!=a.label)C7("onReceiverAction_: Stopping active receiver: "+this.g.l.friendlyName),this.g.stop();else{C7("onReceiverAction_: Casting to active receiver.");this.g.o&&this.R("yt-remote-cast2-session-change",this.g.o);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:E7(this,
new A7(this.l,a));break;case window.chrome.cast.ReceiverType.DIAL:E7(this,new z7(this.l,a,this.C));break;case window.chrome.cast.ReceiverType.CAST:E7(this,new y7(this.l,a));break;default:this.gc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.l.label==a.label?this.g.stop():this.gc("Stopping receiver w/o session: "+a.friendlyName)}else this.gc("onReceiverAction_ called without receiver.")};
g.h.mQ=function(a){if(this.ha())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.gc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.l:null;if(!c||c.label!=b.label)return this.gc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.o)return C7("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.g.o),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.gc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);E7(this,new z7(this.l,b,this.C))}b=this.g;b.F=a;return b.F.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.z)(b.GK,b,(b.F.extraData||{}).screenId||null)):new window.Promise((0,g.z)(b.hs,b))};
g.h.mC=function(a){if(!this.ha()){C7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)C7("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),E7(this,new y7(this.l,b),!0);else{this.gc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.l,d=o6(this.l.oe(),c.label);
d&&j6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(C7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.cf(this.g),this.g=new y7(this.l,b),this.g.subscribe("sessionScreen",(0,g.z)(this.nC,this,this.g)),this.g.Pj(null));this.g.zu(a)}}};
g.h.IV=function(){return this.g?this.g.EE():null};
g.h.LS=function(a){this.ha()||(this.gc("Failed to estabilish a session: "+g.Bg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&E7(this,null))};
g.h.qS=function(a){C7("Receiver availability updated: "+a);if(!this.ha()){var b=D7(this);this.B=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;D7(this)!=b&&this.R("yt-remote-cast2-availability-change",D7(this))}};
g.h.DE=function(){this.ha()||(this.o=GCa(this),C7("Updating custom receivers: "+g.Bg(this.o)),window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(){this.gc("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",D7(this)))};
B7.prototype.setLaunchParams=B7.prototype.GU;B7.prototype.setConnectedScreenStatus=B7.prototype.FU;B7.prototype.stopSession=B7.prototype.JV;B7.prototype.getCastSession=B7.prototype.IV;B7.prototype.requestSession=B7.prototype.requestSession;B7.prototype.init=B7.prototype.init;B7.prototype.dispose=B7.prototype.dispose;var K7=[];g.h=P7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";Q7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.g=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.l=a.trackData,this.Rf=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.D=a.playerTimeAt,this.B=a.seekableStart,this.o=a.seekableEnd,this.H=a.duration,this.I=a.loadedTime,this.A=a.liveIngestionTime,this.C=!(0,window.isNaN)(this.A))};
g.h.kb=function(){return 1==this.g};
g.h.isAdPlaying=function(){return 1081==this.g};
g.h.getDuration=function(){return this.C?this.H+R7(this):this.H};
g.h.clone=function(){return new P7(V7(this))};g.A(X7,g.MF);g.h=X7.prototype;g.h.play=function(){1==this.g?(this.l?this.l.play(null,g.y,c8(this,"play")):b8(this,"play"),a8(this,1,T7(Y7(this))),this.R("remotePlayerChange")):Z7(this,this.play)};
g.h.pause=function(){1==this.g?(this.l?this.l.pause(null,g.y,c8(this,"pause")):b8(this,"pause"),a8(this,2,T7(Y7(this))),this.R("remotePlayerChange")):Z7(this,this.pause)};
g.h.zE=function(a){if(1==this.g){if(this.l){var b=Y7(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.kb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.l.seek(c,g.y,c8(this,"seekTo",{newTime:a}))}else b8(this,"seekTo",{newTime:a});a8(this,3,a);this.R("remotePlayerChange")}else Z7(this,g.Fa(this.zE,a))};
g.h.stop=function(){if(1==this.g){this.l?this.l.stop(null,g.y,c8(this,"stopVideo")):b8(this,"stopVideo");var a=Y7(this);a.index=-1;a.videoId="";Q7(a);$7(this,a);this.R("remotePlayerChange")}else Z7(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=Y7(this);if(this.o){if(c.volume!=a){var d=Math.round(a)/100;this.o.setReceiverVolumeLevel(d,(0,g.z)(function(){g7("CP","set receiver volume: "+d)},this),(0,g.z)(function(){this.gc("failed to set receiver volume.")},this))}c.muted!=b&&this.o.setReceiverMuted(b,(0,g.z)(function(){g7("CP","set receiver muted: "+b)},this),(0,g.z)(function(){this.gc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);b8(this,"setVolume",e)}c.muted=b;c.volume=a;$7(this,c)}else Z7(this,g.Fa(this.setVolume,a,b))};
g.h.zD=function(a,b){if(1==this.g){var c=Y7(this),d={videoId:a};b&&(c.l={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Bg(b.style),g.gc(d,c.l));b8(this,"setSubtitlesTrack",d);$7(this,c)}else Z7(this,g.Fa(this.zD,a,b))};
g.h.tv=function(a,b){if(1==this.g){b8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Qb.id});var c=Y7(this);c.audioTrackId=b.Qb.id;$7(this,c)}else Z7(this,g.Fa(this.tv,a,b))};
g.h.yE=function(a,b){if(1==this.g){if(a&&b){var c=Y7(this);U7(c,a,b);$7(this,c)}b8(this,"previous")}else Z7(this,g.Fa(this.yE,a,b))};
g.h.xE=function(a,b){if(1==this.g){if(a&&b){var c=Y7(this);U7(c,a,b);$7(this,c)}b8(this,"next")}else Z7(this,g.Fa(this.xE,a,b))};
g.h.Jx=function(){1==this.g?b8(this,"dismissAutoplay"):Z7(this,this.Jx)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.R("proxyStateChange",a,this.g)}X7.Z.dispose.call(this)};
g.h.V=function(){TCa(this);this.A=null;this.B.clear();W7(this,null);X7.Z.V.call(this)};
g.h.uv=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)g.oC(this.B).apply(this);else 3==a&&this.dispose()}};
g.h.iS=function(a,b){this.R(a,b)};
g.h.IP=function(a){if(!a)this.Nl(null),W7(this,null);else if(this.o.receiver.volume){a=this.o.receiver.volume;var b=Y7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)g7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,$7(this,b)}};
g.h.Nl=function(a){g7("CP","Cast media: "+!!a);this.l&&this.l.removeUpdateListener(this.F);if(this.l=a)this.l.addUpdateListener(this.F),UCa(this),this.R("remotePlayerChange")};
g.h.HP=function(a){a?(UCa(this),this.R("remotePlayerChange")):this.Nl(null)};
g.h.VP=function(){var a=QCa();a&&W7(this,a)};
g.h.gc=function(a){g7("CP",a)};g.A(d8,g.MF);g.h=d8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime;g.t(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.t(k)&&(l.currentIndex=k);c&&(this.Za.listId=c);this.Za.videoId=d;this.Za.index=k||0;this.Za.state=3;S7(this.Za,m);this.A="UNSUPPORTED";e8("Connecting with setPlaylist and params: "+g.Bg(l));this.g.connect({method:"setPlaylist",params:g.Bg(l)},a,pBa())}else e8("Connecting without params"),
this.g.connect({},a,pBa());WCa(this)};
g.h.dispose=function(){this.ha()||(this.R("beforeDispose"),f8(this,3));d8.Z.dispose.call(this)};
g.h.V=function(){g8(this);i8(this);h8(this);g.XD(this.H);this.H=window.NaN;g.XD(this.I);this.I=window.NaN;this.o=null;g.xF(this.P);this.P.length=0;this.g.dispose();d8.Z.V.call(this);this.A=this.D=this.l=this.Za=this.g=null};
g.h.TI=function(){this.C(2)};
g.h.MP=function(){e8("Channel opened");this.N&&(this.N=!1,h8(this),this.M=g.VD((0,g.z)(function(){e8("Timing out waiting for a screen.");this.C(1)},this),15E3));
tBa(fCa(this.g),this.X)};
g.h.JP=function(){e8("Channel closed");(0,window.isNaN)(this.B)?t6(!0):t6();this.dispose()};
g.h.KP=function(a){t6();(0,window.isNaN)(this.F())?(e8("Channel error: "+a+" without reconnection"),this.dispose()):(this.N=!0,e8("Channel error: "+a+" with reconnection in "+this.F()+" ms"),f8(this,2))};
g.h.LP=function(a){a.params?e8("Received: action="+a.action+", params="+g.Bg(a.params)):e8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.Yw(a.params.devices);this.l=(0,g.G)(a,function(a){return new h6(a)});
a=!!g.Ma(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
ZCa(this,a);break;case "loungeScreenDisconnected":g.Wa(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
ZCa(this,!1);break;case "remoteConnected":var b=new h6(g.Yw(a.params.device));g.Ma(this.l,function(a){return b?a.id==b.id:!1})||g.Ta(this.l,b);
break;case "remoteDisconnected":b=new h6(g.Yw(a.params.device));g.Wa(this.l,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":aDa(this,a);break;case "nowPlaying":cDa(this,a);break;case "onStateChange":bDa(this,a);break;case "onAdStateChange":dDa(this,a);break;case "onVolumeChanged":eDa(this,a);break;case "onSubtitlesTrackChanged":$Ca(this,a);break;case "nowAutoplaying":fDa(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.D=a.params.videoId||null;this.R("autoplayUpNext",this.D);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.R("autoplayModeChange",this.A);"DISABLED"==this.A&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":gDa(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:e8("Unrecognized action: "+a.action)}};
g.h.qU=function(){if(this.o){var a=this.o;this.o=null;this.Za.videoId!=a&&j8(this,"getNowPlaying")}};
d8.prototype.subscribe=d8.prototype.subscribe;d8.prototype.unsubscribeByKey=d8.prototype.Kd;d8.prototype.fa=function(){var a=3;this.ha()||(a=0,(0,window.isNaN)(this.F())?b7(this.g)&&(0,window.isNaN)(this.B)&&(a=1):a=2);return a};
d8.prototype.getProxyState=d8.prototype.fa;d8.prototype.C=function(a){e8("Disconnecting with "+a);g8(this);this.R("beforeDisconnect",a);1==a&&t6();gCa(this.g,a);this.dispose()};
d8.prototype.disconnect=d8.prototype.C;d8.prototype.da=function(){var a=this.Za;this.o&&(a=this.Za.clone(),U7(a,this.o,a.index));return V7(a)};
d8.prototype.getPlayerContextData=d8.prototype.da;
d8.prototype.ma=function(a){var b=new P7(a);b.videoId&&b.videoId!=this.Za.videoId&&(this.o=b.videoId,g.XD(this.H),this.H=g.VD((0,g.z)(this.qU,this),5E3));var c=[];this.Za.listId==b.listId&&this.Za.videoId==b.videoId&&this.Za.index==b.index||c.push("remoteQueueChange");this.Za.g==b.g&&this.Za.volume==b.volume&&this.Za.muted==b.muted&&T7(this.Za)==T7(b)&&g.Bg(this.Za.l)==g.Bg(b.l)||c.push("remotePlayerChange");this.Za.reset(a);(0,g.B)(c,function(a){this.R(a)},this)};
d8.prototype.setPlayerContextData=d8.prototype.ma;d8.prototype.W=function(){var a=this.g.C.id,b=g.Ma(this.l,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
d8.prototype.getOtherConnectedRemoteId=d8.prototype.W;d8.prototype.F=function(){var a=this.g;return a.l.isActive()?a.l.l-(0,g.F)():window.NaN};
d8.prototype.getReconnectTimeout=d8.prototype.F;d8.prototype.Y=function(){return this.A||"UNSUPPORTED"};
d8.prototype.getAutoplayMode=d8.prototype.Y;d8.prototype.aa=function(){return this.D||""};
d8.prototype.getAutoplayVideoId=d8.prototype.aa;d8.prototype.ra=function(){if(!(0,window.isNaN)(this.F())){var a=this.g.l;g.au(a.g);a.start()}};
d8.prototype.reconnect=d8.prototype.ra;d8.prototype.ia=function(a,b){j8(this,a,b);YCa(this)};
d8.prototype.sendMessage=d8.prototype.ia;g.A(k8,k7);g.h=k8.prototype;g.h.oe=function(a){return this.dd.$_gs(a)};
g.h.contains=function(a){return!!this.dd.$_c(a)};
g.h.get=function(a){return this.dd.$_g(a)};
g.h.start=function(){this.dd.$_st()};
g.h.add=function(a,b,c){this.dd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.dd.$_r(a,b,c)};
g.h.Fp=function(a,b,c,d){this.dd.$_un(a,b,c,d)};
g.h.V=function(){for(var a=0,b=this.l.length;a<b;++a)this.dd.$_ubk(this.l[a]);this.l.length=0;this.dd=null;k8.Z.V.call(this)};
g.h.FV=function(){this.R("screenChange")};
g.h.JR=function(){this.R("onlineScreenChange")};
t7.prototype.$_st=t7.prototype.start;t7.prototype.$_gspc=t7.prototype.GV;t7.prototype.$_gsppc=t7.prototype.CE;t7.prototype.$_c=t7.prototype.contains;t7.prototype.$_g=t7.prototype.get;t7.prototype.$_a=t7.prototype.add;t7.prototype.$_un=t7.prototype.Fp;t7.prototype.$_r=t7.prototype.remove;t7.prototype.$_gs=t7.prototype.oe;t7.prototype.$_gos=t7.prototype.BE;t7.prototype.$_s=t7.prototype.subscribe;t7.prototype.$_ubk=t7.prototype.Kd;var l8=null,m8=null,B8=null,q8=[];g.p(C8,g.K);g.h=C8.prototype;
g.h.V=function(){g.K.prototype.V.call(this);this.A.stop();this.B.stop();this.K.stop();this.N();this.g.unsubscribe("proxyStateChange",this.kC,this);this.g.unsubscribe("remotePlayerChange",this.Ql,this);this.g.unsubscribe("remoteQueueChange",this.Oo,this);this.g.unsubscribe("autoplayUpNext",this.HB,this);this.g.unsubscribe("previousNextChange",this.hC,this);this.g.unsubscribe("nowAutoplaying",this.ZB,this);this.g.unsubscribe("autoplayDismissed",this.GB,this);this.g=this.F=null};
g.h.JA=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(F8(this)){if(!Y7(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":Y7(this.g).kb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.yj(c[0],c[1]);break;case "control_subtitles_set_track":G8(this,c[0]);break;case "control_set_audio_track":c=c[0],F8(this)&&this.g.tv(this.l.ea(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.l.getCurrentTime();H8(this,0==c?void 0:c);break;case "control_seek":H8(this,c[0]);break;case "control_subtitles_set_track":G8(this,c[0]);break;case "control_set_audio_track":c=c[0],F8(this)&&this.g.tv(this.l.ea(1).videoId,c)}};
g.h.GP=function(a){this.K.NI(a)};
g.h.hV=function(a){this.JA("control_subtitles_set_track",g.Zb(a)?null:a)};
g.h.LD=function(){var a=this.l.Ac("captions","track");g.Zb(a)||G8(this,a)};
g.h.XB=function(a){if(F8(this)){this.g.unsubscribe("remotePlayerChange",this.Ql,this);var b=Math.round(a.volume);a=!!a.muted;var c=Y7(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.M.start();this.g.subscribe("remotePlayerChange",this.Ql,this)}};
g.h.bR=function(){g.Zb(this.C)||sDa(this,this.C);this.D=!1};
g.h.kC=function(a,b){this.B.stop();2==b&&this.ID()};
g.h.Ql=function(){if(F8(this)){this.A.stop();var a=Y7(this.g);switch(a.g){case 1081:case 1:E8(this,new g.jP(8));this.HD();break;case 1085:case 3:E8(this,new g.jP(9));break;case 1083:case 0:E8(this,new g.jP(2));this.I.stop();D8(this,this.l.ea().lengthSeconds);break;case 1084:E8(this,new g.jP(4));break;case 2:E8(this,new g.jP(4));D8(this,T7(a));break;case -1:E8(this,new g.jP(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.U("YTP_MDX_PLAYER_ERROR")},E8(this,new g.jP(128,a))}a=Y7(this.g).l;
var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,sDa(this,a));a=Y7(this.g);-1==a.volume||Math.round(this.l.getVolume())==a.volume&&this.l.isMuted()==a.muted||this.M.isActive()||this.mE()}else rDa(this)};
g.h.hC=function(){this.l.R("mdxpreviousnextchange")};
g.h.Oo=function(){F8(this)||rDa(this)};
g.h.aI=function(){this.g.Jx()};
g.h.HB=function(a){a&&(a=g.kE("/watch_queue_ajax",{method:"GET",Yc:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.z)(this.lT,this)}))&&(this.N=(0,g.z)(a.abort,a))};
g.h.lT=function(a,b){var c=new g.XN({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.l.R("mdxautoplayupnext",c)};
g.h.ZB=function(a){(0,window.isNaN)(a)||this.l.R("mdxnowautoplaying",a)};
g.h.GB=function(){this.l.R("mdxautoplaycanceled")};
g.h.LN=function(a,b){-1==Y7(this.g).g?H8(this,a):b&&this.g.zE(a)};
g.h.mE=function(){if(F8(this)){var a=Y7(this.g);this.o.Ba(this.P);a.muted?this.l.mute():this.l.dg();this.l.setVolume(a.volume);this.P=this.o.O(this.l,"onVolumeChange",this.XB)}};
g.h.HD=function(){this.A.stop();if(!this.g.ha()){var a=Y7(this.g);a.kb()&&E8(this,new g.jP(8));D8(this,T7(a));this.A.start()}};
g.h.ID=function(){this.B.stop();this.A.stop();var a=this.g.A.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(I8,g.V);I8.prototype.A=function(a){uDa(this,a.state)};g.p(J8,g.HZ);J8.prototype.I=function(){var a=this.l.Ac("remote","receivers");a&&1<a.length&&!this.l.Ac("remote","quickCast")?(this.F=g.nb(a,this.B,this),g.IZ(this,(0,g.G)(a,this.B)),a=this.l.Ac("remote","currentReceiver"),this.rf(this.B(a)),this.enable(!0)):this.enable(!1)};
J8.prototype.B=function(a){return a.key};
J8.prototype.qf=function(a){return"cast-selector-receiver"==a?g.U("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
J8.prototype.ud=function(a){g.HZ.prototype.ud.call(this,a);this.l.Id("remote","currentReceiver",this.F[a]);this.A.Rb()};g.p(K8,g.mV);g.h=K8.prototype;g.h.create=function(){lDa(g.oM(g.X(this.g)));this.C.push(g.YF("yt-remote-before-disconnect",this.CP,this));this.C.push(g.YF("yt-remote-connection-change",this.rS,this));this.C.push(g.YF("yt-remote-receiver-availability-change",this.iC,this));this.C.push(g.YF("yt-remote-auto-connect",this.pS,this));this.C.push(g.YF("yt-remote-receiver-resumed",this.oS,this));this.iC()};
g.h.load=function(){this.g.jt();g.mV.prototype.load.call(this);this.B=new C8(this,this.g,this.l);var a=(a=qDa())?a.currentTime:0;var b=A8()?new X7(v8(),void 0):null;0==a&&b&&(a=T7(Y7(b)));0!=a&&(this.H=a||0,this.g.R("progresssync",a,void 0));tDa(this,this.D,this.D);g.T_(this.g.app,6)};
g.h.unload=function(){this.g.R("mdxautoplaycanceled");this.A=this.o;g.df(this.B,this.l);this.l=this.B=null;g.mV.prototype.unload.call(this);g.T_(this.g.app,5)};
g.h.V=function(){g.ZF(this.C);g.mV.prototype.V.call(this)};
g.h.Fl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.JA.apply(this.B,[a].concat(g.pa(c)))};
g.h.JI=function(){return this.loaded?this.B.suggestion:null};
g.h.Rf=function(){return this.l?Y7(this.l).Rf:!1};
g.h.hasNext=function(){return this.l?Y7(this.l).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.zN=function(){var a=Y7(this.l),b=this.g.ea();return{allowSeeking:this.g.fd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.C?a.A+R7(a):a.A,isPeggedToLive:1>=(a.C?a.o+R7(a):a.o)-this.getCurrentTime(),loaded:a.I,seekableEnd:a.C?a.o+R7(a):a.o,seekableStart:0<a.B?a.B+R7(a):a.B}};
g.h.AN=function(){this.l&&this.l.xE()};
g.h.BN=function(){this.l&&this.l.yE()};
g.h.CP=function(a){1==a&&(this.I=this.l?Y7(this.l):null)};
g.h.rS=function(){var a=A8()?new X7(v8(),void 0):null;if(a){var b=this.A;this.loaded&&this.unload();this.l=a;this.I=null;b.key!=this.o.key&&(this.A=b,this.load())}else g.cf(this.l),this.l=null,this.loaded&&(this.unload(),(a=this.I)&&a.videoId==this.g.ea().videoId&&this.g.lA(a.videoId,T7(a)));this.g.R("videodatachange","newdata",this.g.ea(),3)};
g.h.iC=function(){this.F=[this.o].concat(nDa());var a=w8()||this.o;L8(this,a);this.g.ua("onMdxReceiversChange")};
g.h.pS=function(){var a=w8();L8(this,a)};
g.h.oS=function(){this.A=w8()};
g.h.yN=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.F;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?N7():L8(this,b)),this.loaded?this.A:this.o;case "quickCast":return 2==this.F.length&&"cast-selector-receiver"==this.F[1].key?(b&&N7(),!0):!1}};
g.h.CN=function(){b8(this.l,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Pc=function(){return!1};g.aY.remote=K8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 23:56:57 Mar 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:39:07 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 114.468
  exclusion.robots: 0.135
  exclusion.robots.policy: 0.119
  cdx.remote: 0.131
  esindex: 0.016
  LoadShardBlock: 46.503 (3)
  PetaboxLoader3.datanode: 70.832 (5)
  load_resource: 185.726 (2)
  PetaboxLoader3.resolve: 145.293 (2)
*/