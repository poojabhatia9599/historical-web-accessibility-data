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

(function(g){var window=this;var YAa=function(a,b){return g.Sb(a,b)},P6=function(a){g.Em(a,"zx",g.wb());
return a},Q6=function(a,b,c){g.ya(c)||(c=[String(c)]);
g.Hm(a.g,b,c)},ZAa=function(a,b){var c=[];
g.sk(b,function(a){try{var b=g.dD.prototype.l.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.u(b)?g.cD(b)&&c.push(a):c.push(a)},a);
return c},$Aa=function(a,b){var c=ZAa(a,b);
(0,g.C)(c,function(a){g.dD.prototype.remove.call(this,a)},a)},aBa=function(a){if(a.zd){if(a.zd.locationOverrideToken)return{locationOverrideToken:a.zd.locationOverrideToken};
if(null!=a.zd.latitudeE7&&null!=a.zd.longitudeE7)return{latitudeE7:a.zd.latitudeE7,longitudeE7:a.zd.longitudeE7}}return null},bBa=function(a,b,c,d){var e=new g.vm(null,void 0);
a&&g.wm(e,a);b&&g.xm(e,b);c&&g.ym(e,c);d&&g.zm(e,d);return e},cBa=function(a){g.TF[a]&&(a=g.TF[a],(0,g.C)(a,function(a){g.RF[a]&&delete g.RF[a]}),a.length=0)},dBa=function(a){var b=g.QF();
if(b)if(b.clear(a),a)cBa(a);else for(var c in g.TF)cBa(c)},R6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.o=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.pm;this.g=this.l="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",eBa(this,a.capabilities||""),fBa(this,a.experiments||""),this.l=a.remoteControllerUrl||"",
this.g=a.localChannelEncryptionKey||"")},eBa=function(a,b){a.capabilities.clear();
(0,g.Jd)(b.split(","),g.Ea(YAa,gBa)).forEach(function(b){a.capabilities.add(b)})},fBa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},S6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},T6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},hBa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},iBa=function(a){return new S6(a)},jBa=function(a){return g.ya(a)?(0,g.I)(a,iBa):[]},U6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},V6=function(a){return g.ya(a)?"["+(0,g.I)(a,U6).join(",")+"]":"null"},W6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},kBa=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},X6=function(a,b){return g.Ka(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},Y6=function(a,b){return g.Ka(a,function(a){return T6(a,b)})},lBa=function(){var a=(0,g.MG)();
a&&$Aa(a,a.g.Pd(!0))},Z6=function(){var a=g.PG("yt-remote-connected-devices")||[];
g.fb(a);return a},mBa=function(a){if(g.Pa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.I)(a,function(a,b){return 0==b?a:a.substring(c.length)})},nBa=function(a){g.OG("yt-remote-connected-devices",a,86400)},a7=function(){if($6)return $6;
var a=g.PG("yt-remote-device-id");a||(a=W6(),g.OG("yt-remote-device-id",a,31536E3));for(var b=Z6(),c=1,d=a;g.Oa(b,d);)c++,d=a+"#"+c;return $6=d},b7=function(){var a=Z6(),b=a7();
g.Oa(a,b);g.RG()&&g.ib(a,b);a=mBa(a);if(g.Pa(a))try{g.zG("remote_sid")}catch(c){}else try{g.yG("remote_sid",a.join(","),-1)}catch(c){}},oBa=function(){return g.PG("yt-remote-session-browser-channel")},pBa=function(){return g.PG("yt-remote-local-screens")||[]},qBa=function(){g.OG("yt-remote-lounge-token-expiration",!0,86400)},rBa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.I)(pBa(),function(a){return a.loungeToken}),c=(0,g.I)(a,function(a){return a.loungeToken});
(0,g.dm)(c,function(a){return!g.Oa(b,a)})&&qBa();
g.OG("yt-remote-local-screens",a,31536E3)},sBa=function(a,b){g.OG("yt-remote-session-browser-channel",a);
g.OG("yt-remote-session-screen-id",b);var c=Z6(),d=a7();g.Oa(c,d)||c.push(d);nBa(c);b7()},c7=function(a){a||(g.QG("yt-remote-session-screen-id"),g.QG("yt-remote-session-video-id"));
b7();a=Z6();g.Ta(a,a7());nBa(a)},tBa=function(){if(!d7){var a=g.oD();
a&&(d7=new g.YC(a))}return d7?!!d7.get("yt-remote-use-staging-server"):!1},uBa=function(){var a=window.document.createElement("a");
g.Xc(a,"https://web.archive.org/web/20180601001808/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ab(a)},vBa=function(a,b){var c=g.Cd("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.Zc(c,g.ae("https://web.archive.org/web/20180601001808/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},wBa=function(){var a=uBa(),b=window.document.getElementById(a),c=b&&g.bF(b,"loaded");
c||b&&!c||(b=vBa(a,function(){g.bF(b,"loaded")||(g.aF(b,"loaded","true"),g.XF(a),g.XD(g.Ea(dBa,a),0))}))},e7=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},xBa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},f7=function(a){a.length?yBa(a.shift(),function(){f7(a)}):g7()},zBa=function(a){return"chrome-extension://"+a+h7},yBa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},i7=function(a){return 0<=window.navigator.userAgent.indexOf(a)},g7=function(){var a=xBa();
a&&a(!1,"No cast extension found")},j7=function(){if(ABa){var a=2,b=xBa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;yBa("//web.archive.org/web/20180601001808/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",g7,c)}},BBa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(j7(),a({command:"cast.sender.init"}))},CBa=function(){j7();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);f7(["//web.archive.org/web/20180601001808/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+h7,"//web.archive.org/web/20180601001808/https://www.gstatic.com/eureka/clank"+h7])},k7=function(a,b,c){g.M.call(this);
this.C=null!=c?(0,g.A)(a,c):a;this.pd=b;this.B=(0,g.A)(this.sJ,this);this.g=!1;this.l=0;this.o=this.Ba=null;this.A=[]},l7=function(){},m7=function(a,b,c,d){this.g=a;
this.o=b;this.D=c;this.C=d||1;this.A=45E3;this.W=new g.Lm(this);this.l=new g.qg;this.l.setInterval(250)},EBa=function(a,b,c){a.Hj=1;
a.ih=P6(b.clone());a.Li=c;a.B=!0;DBa(a,null)},n7=function(a,b,c,d,e){a.Hj=1;
a.ih=P6(b.clone());a.Li=null;a.B=c;e&&(a.FD=!1);DBa(a,d)},DBa=function(a,b){a.uk=(0,g.G)();
o7(a);a.Gh=a.ih.clone();Q6(a.Gh,"t",a.C);a.Hm=0;a.Qc=a.g.xr(a.g.ym()?b:null);0<a.es&&(a.Bp=new g.Vk((0,g.A)(a.UE,a,a.Qc),a.es));a.W.U(a.Qc,"readystatechange",a.LU);var c=a.ji?g.$b(a.ji):{};a.Li?(a.mq="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Qc.send(a.Gh,a.mq,a.Li,c)):(a.mq="GET",a.FD&&!g.yd&&(c.Connection="close"),a.Qc.send(a.Gh,a.mq,null,c));a.g.wf(1)},HBa=function(a,b,c){for(var d=!0;!a.Th&&a.Hm<c.length;){var e=FBa(a,c);
if(e==p7){4==b&&(a.jh=4,q7(15),d=!1);break}else if(e==GBa){a.jh=4;q7(16);d=!1;break}else r7(a,e)}4==b&&0==c.length&&(a.jh=1,q7(17),d=!1);a.Cf=a.Cf&&d;d||(s7(a),t7(a))},FBa=function(a,b){var c=a.Hm,d=b.indexOf("\n",c);
if(-1==d)return p7;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return GBa;d+=1;if(d+c>b.length)return p7;var e=b.substr(d,c);a.Hm=d+c;return e},JBa=function(a,b){a.uk=(0,g.G)();
o7(a);var c=b?window.location.hostname:"";a.Gh=a.ih.clone();g.Em(a.Gh,"DOMAIN",c);g.Em(a.Gh,"t",a.C);try{a.Df=new window.ActiveXObject("htmlfile")}catch(n){s7(a);a.jh=7;q7(22);t7(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in u7)k=u7[l];else if(l in IBa)k=u7[l]=IBa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=u7[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.$c(g.vc("b/12014412"),d);a.Df.open();a.Df.write(g.Rc(c));a.Df.close();a.Df.parentWindow.m=(0,g.A)(a.ST,a);a.Df.parentWindow.d=(0,g.A)(a.RC,a,!0);a.Df.parentWindow.rpcClose=(0,g.A)(a.RC,a,!1);c=a.Df.createElement("DIV");a.Df.parentWindow.document.body.appendChild(c);d=g.Ic(a.Gh.toString());d=g.pb(g.Fc(d));d=g.$c(g.vc("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=g.Rc(d);
a.g.wf(1)},o7=function(a){a.Nv=(0,g.G)()+a.A;
KBa(a,a.A)},KBa=function(a,b){if(null!=a.Lk)throw Error("WatchDog timer not null");
a.Lk=v7((0,g.A)(a.kU,a),b)},w7=function(a){a.Lk&&(g.x.clearTimeout(a.Lk),a.Lk=null)},t7=function(a){a.g.Zy()||a.Th||a.g.mp(a)},s7=function(a){w7(a);
g.Ze(a.Bp);a.Bp=null;a.l.stop();g.Rm(a.W);if(a.Qc){var b=a.Qc;a.Qc=null;b.abort();b.dispose()}a.Df&&(a.Df=null)},r7=function(a,b){try{a.g.KC(a,b),a.g.wf(4)}catch(c){}},MBa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;LBa(a,b,function(e){e?c(!0):g.x.setTimeout(function(){MBa(a,b,c,d,f)},f)})}},LBa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{x7(d),c(!0)}catch(e){}};
d.onerror=function(){try{x7(d),c(!1)}catch(e){}};
d.onabort=function(){try{x7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{x7(d),c(!1)}catch(e){}};
g.x.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},x7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},NBa=function(a){this.g=a;
this.l=new l7},OBa=function(a){var b=y7(a.g,a.Sk,"/mail/images/cleardot.gif");
P6(b);MBa(b.toString(),5E3,(0,g.A)(a.DI,a),3,2E3);a.wf(1)},A7=function(a){var b=a.g.H;
if(null!=b)q7(5),b?(q7(11),z7(a.g,a,!1)):(q7(12),z7(a.g,a,!0));else if(a.re=new m7(a,void 0,void 0,void 0),a.re.ji=a.Zr,b=a.g,b=y7(b,b.ym()?a.vl:null,a.ds),q7(5),!g.wd||g.pc(10))Q6(b,"TYPE","xmlhttp"),n7(a.re,b,!1,a.vl,!1);else{Q6(b,"TYPE","html");var c=a.re;a=!!a.vl;c.Hj=3;c.ih=P6(b.clone());JBa(c,a)}},B7=function(a,b,c){this.g=1;
this.l=[];this.A=[];this.B=new l7;this.F=a||null;this.H=null!=b?b:null;this.C=c||!1},PBa=function(a,b){this.g=a;
this.map=b;this.context=null},QBa=function(a){g.af.call(this,"statevent",a)},RBa=function(a,b){g.af.call(this,"timingevent",a);
this.size=b},SBa=function(a){g.af.call(this,"serverreachability",a)},VBa=function(a){TBa(a);
if(3==a.g){var b=a.Zl++,c=a.Wn.clone();g.Em(c,"SID",a.o);g.Em(c,"RID",b);g.Em(c,"TYPE","terminate");C7(a,c);b=new m7(a,a.o,b,void 0);b.Hj=2;b.ih=P6(c.clone());(new window.Image).src=b.ih;b.uk=(0,g.G)();o7(b)}UBa(a)},WBa=function(a){a.aJ(1,0);
a.Wn=y7(a,null,a.Yr);D7(a)},TBa=function(a){a.Zg&&(a.Zg.abort(),a.Zg=null);
a.uc&&(a.uc.cancel(),a.uc=null);a.qg&&(g.x.clearTimeout(a.qg),a.qg=null);E7(a);a.Vd&&(a.Vd.cancel(),a.Vd=null);a.bh&&(g.x.clearTimeout(a.bh),a.bh=null)},XBa=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.l.push(new PBa(a.IP++,b));2!=a.g&&3!=a.g||D7(a)},D7=function(a){a.Vd||a.bh||(a.bh=v7((0,g.A)(a.PC,a),0),a.sj=0)},ZBa=function(a,b){if(1==a.g){if(!b){a.Zl=Math.floor(1E5*Math.random());
var c=a.Zl++,d=new m7(a,"",c,void 0);d.ji=null;var e=F7(a),f=a.Wn.clone();g.Em(f,"RID",c);g.Em(f,"CVER","1");C7(a,f);EBa(d,f,e);a.Vd=d;a.g=2}}else 3==a.g&&(b?YBa(a,b):0==a.l.length||a.Vd||YBa(a))},YBa=function(a,b){if(b)if(6<a.Vh){a.l=a.A.concat(a.l);
a.A.length=0;var c=a.Zl-1;var d=F7(a)}else c=b.D,d=b.Li;else c=a.Zl++,d=F7(a);var e=a.Wn.clone();g.Em(e,"SID",a.o);g.Em(e,"RID",c);g.Em(e,"AID",a.Vj);C7(a,e);c=new m7(a,a.o,c,a.sj+1);c.ji=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Vd=c;EBa(c,e,d)},C7=function(a,b){if(a.od){var c=a.od.Hy();
c&&g.Ib(c,function(a,c){g.Em(b,c,a)})}},F7=function(a){var b=Math.min(a.l.length,1E3),c=["count="+b];
if(6<a.Vh&&0<b){var d=a.l[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.l[e].g,k=a.l[e].map;f=6>=a.Vh?e:f-d;try{g.Ib(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.A=a.A.concat(a.l.splice(0,b));
return c.join("&")},$Ba=function(a){a.uc||a.qg||(a.D=1,a.qg=v7((0,g.A)(a.OC,a),0),a.fj=0)},G7=function(a){if(a.uc||a.qg||3<=a.fj)return!1;
a.D++;a.qg=v7((0,g.A)(a.OC,a),aCa(a,a.fj));a.fj++;return!0},z7=function(a,b,c){a.lq=c;
a.Pf=b.Bg;a.C||WBa(a)},E7=function(a){null!=a.Xh&&(g.x.clearTimeout(a.Xh),a.Xh=null)},aCa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},H7=function(a,b){if(2==b||9==b){var c=null;
a.od&&(c=null);var d=(0,g.A)(a.CV,a);c||(c=new g.vm("//web.archive.org/web/20180601001808/https://www.google.com/images/cleardot.gif"),P6(c));LBa(c.toString(),1E4,d)}else q7(2);bCa(a,b)},bCa=function(a,b){a.g=0;
a.od&&a.od.Bx(b);UBa(a);TBa(a)},UBa=function(a){a.g=0;
a.Pf=-1;if(a.od)if(0==a.A.length&&0==a.l.length)a.od.jr();else{g.Wa(a.A);var b=g.Wa(a.l);a.A.length=0;a.l.length=0;a.od.jr(b)}},y7=function(a,b,c){var d=g.Fm(c);
if(""!=d.l)b&&g.xm(d,b+"."+d.l),g.ym(d,d.B);else{var e=window.location;d=bBa(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c)}a.fl&&g.Ib(a.fl,function(a,b){g.Em(d,b,a)});
g.Em(d,"VER",a.Vh);C7(a,d);return d},v7=function(a,b){if(!g.Aa(a))throw Error("Fn must not be null and must be a function");
return g.x.setTimeout(function(){a()},b)},q7=function(a){I7.dispatchEvent(new QBa(I7,a))},cCa=function(){},dCa=function(a,b){this.action=a;
this.params=b||{}},J7=function(a,b){g.M.call(this);
this.g=new g.Yt(this.IT,0,this);g.N(this,this.g);this.pd=5E3;this.l=0;if(g.Aa(a))b&&(a=(0,g.A)(a,b));else if(a&&g.Aa(a.handleEvent))a=(0,g.A)(a.handleEvent,a);else throw Error("Invalid listener argument");this.o=a},K7=function(a,b,c){this.J=a;
this.C=b;this.o=new g.XC;this.l=new J7(this.jW,this);this.g=this.Ya=null;this.I=!1;this.B=null;this.H="";this.F=this.A=0;this.D=[];this.K=c||!1},eCa=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.lq,sessionId:a.g.o,arrayId:a.g.Vj}},fCa=function(a,b){a.F=b||0;
a.l.stop();a.g&&(3==a.g.g&&ZBa(a.g),VBa(a.g));a.F=0},L7=function(a){return!!a.g&&3==a.g.g},gCa=function(a,b){(a.C.loungeIdToken=b)||a.l.stop()},M7=function(a){this.port=this.domain="";
this.g="/api/lounge";this.l=!0;a=a||window.document.location.href;var b=g.Gg(a)||"";b&&(this.port=":"+b);this.domain=g.Fg(a)||"";a=g.Gb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.zb(a,"10.0")&&(this.l=!1))},N7=function(a,b){var c=a.g;
if(g.u(void 0)?0:a.l)c="https://"+a.domain+a.port+a.g;return g.Pg(c+b,{})},O7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ea(a.A,d,!0),onError:g.Ea(a.o,e),wd:g.Ea(a.B,e)};c&&(a.Lb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.nE(b,a)},kCa=function(){var a=hCa;
iCa();P7.push(a);jCa(P7)},Q7=function(a,b){iCa();
var c=P7,d=lCa(a,String(b));g.Pa(c)?mCa(d):(jCa(c),(0,g.C)(c,function(a){a(d)}))},iCa=function(){P7||(P7=g.y("yt.mdx.remote.debug.handlers_")||[],g.va("yt.mdx.remote.debug.handlers_",P7,void 0))},mCa=function(a){var b=(R7+1)%50;
R7=b;S7[b]=a;T7||(T7=49==b)},jCa=function(a){var b=S7;
if(b[0]){var c=R7,d=T7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.C)(a,function(a){a(e)})}while(d!=c);
S7=Array(50);R7=-1;T7=!1}},lCa=function(a,b){var c=((0,g.G)()-nCa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},U7=function(a){g.IF.call(this);
this.D=a;this.g=[]},oCa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},pCa=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Jd)(a.g,function(a){return!!X6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=oCa(a,b[d])||c;return c},qCa=function(a,b){var c=a.g.length;
a.g=(0,g.Jd)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c},V7=function(a,b,c,d){g.IF.call(this);
this.C=a;this.B=b;this.o=c;this.A=d;this.l=0;this.g=null;this.Ba=window.NaN},X7=function(a){U7.call(this,"LocalScreenService");
this.o=a;this.l=window.NaN;W7(this);this.info("Initializing with "+V6(this.g))},rCa=function(a){if(a.g.length){var b=(0,g.I)(a.g,function(a){return a.id}),c=N7(a.o,"/pairing/get_lounge_token_batch");
O7(a.o,c,{screen_ids:b.join(",")},(0,g.A)(a.FJ,a),(0,g.A)(a.EJ,a))}},W7=function(a){var b=jBa(pBa());
b=(0,g.Jd)(b,function(a){return!a.uuid});
return pCa(a,b)},Y7=function(a,b){rBa((0,g.I)(a.g,hBa));
b&&qBa()},$7=function(a,b){g.IF.call(this);
this.C=b;var c=g.PG("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Oa(c,l)}this.g=d;this.B=a;this.o=this.A=window.NaN;this.l=null;Z7("Initialized with "+g.xg(this.g))},sCa=function(a,b,c){var d=N7(a.B,"/pairing/get_screen_availability");
O7(a.B,d,{lounge_token:b.token},(0,g.A)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.A)(function(){c(!1)},a))},a8=function(a,b){a:if(g.Mb(b)!=g.Mb(a.g))var c=!1;
else{c=g.Pb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(Z7("Updated online screens: "+g.xg(a.g)),a.g=b,a.T("screenChange"));tCa(a)},b8=function(a){(0,window.isNaN)(a.o)||g.ZD(a.o);
a.o=g.XD((0,g.A)(a.Zu,a),0<a.A&&a.A<(0,g.G)()?2E4:1E4)},Z7=function(a){Q7("OnlineScreenService",a)},uCa=function(a){var b={};
(0,g.C)(a.C(),function(a){a.token?b[a.token]=a.id:this.dc("Requesting availability of screen w/o lounge token.")});
return b},tCa=function(a){a=g.Pb(g.Jb(a.g,function(a){return a}));
g.fb(a);a.length?g.OG("yt-remote-online-screen-ids",a.join(","),60):g.QG("yt-remote-online-screen-ids")},c8=function(a){U7.call(this,"ScreenService");
this.C=a;this.l=this.o=null;this.A=[];this.B={};vCa(this)},xCa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.ie();if(k=(c?Y6(k,c):null)||Y6(k,b)){k.uuid=b;var l=d8(a,k);sCa(a.l,l,function(a){e(a?l:null)})}else c?wCa(a,c,(0,g.A)(function(a){var f=d8(this,new S6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));sCa(this.l,f,function(a){e(a?f:null)})},a),f):e(null)},yCa=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},wCa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Lb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.nE(N7(a.C,"/pairing/get_lounge_token_batch"),e)},zCa=function(a){a.g=a.o.ie();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+V6(a.g))},vCa=function(a){e8(a);
a.o=new X7(a.C);a.o.subscribe("screenChange",(0,g.A)(a.UJ,a));zCa(a);a.A=jBa(g.PG("yt-remote-automatic-screen-cache")||[]);e8(a);a.info("Initializing automatic screens: "+V6(a.A));a.l=new $7(a.C,(0,g.A)(a.ie,a,!0));a.l.subscribe("screenChange",(0,g.A)(function(){this.T("onlineScreenChange")},a))},d8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=Y6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.OG("yt-remote-automatic-screen-cache",(0,g.I)(a.A,hBa)));e8(a);a.B[b.uuid]=b.id;g.OG("yt-remote-device-id-map",a.B,31536E3);return b},e8=function(a){a.B=g.PG("yt-remote-device-id-map")||{}},f8=function(a,b,c){g.IF.call(this);
this.K=c;this.H=a;this.l=b;this.o=null},g8=function(a,b){Q7(a.K,b)},h8=function(a,b){f8.call(this,a,b,"CastSession");
this.g=null;this.A=0;this.C=(0,g.A)(this.pW,this);this.B=(0,g.A)(this.wU,this);this.A=g.XD((0,g.A)(function(){ACa(this,null)},this),12E4)},BCa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.xg(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.z,(0,g.A)(function(){g8(this,"Failed to send message: getMdxSessionStatus.")},a)):g8(a,"Sending yt message without session: "+g.xg(b))},ACa=function(a,b){g.ZD(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.o||a.o.id!=b){var c=(0,g.A)(a.np,a),d=(0,g.A)(a.pe,a);a.Ry(b,c,d,5)}}else a.pe(Error("Waiting for session status timed out."))},i8=function(a,b,c){f8.call(this,a,b,"DialSession");
this.A=this.F=null;this.I="";this.M=c;this.B=null;this.D=g.z;this.C=window.NaN;this.J=(0,g.A)(this.sW,this);this.g=g.z},CCa=function(a){a.g=a.H.bF(a.I,a.l.label,a.l.friendlyName,(0,g.A)(function(a){this.g=g.z;
this.np(a)},a),(0,g.A)(function(a){this.g=g.z;
this.pe(a)},a))},DCa=function(a){var b={};
b.pairingCode=a.I;b.theme=a.M;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}tBa()&&(b.env_useStageMdx=1);return g.Ng(b)},j8=function(a,b){f8.call(this,a,b,"ManualSession");
this.g=g.XD((0,g.A)(this.Xj,this,null),150)},k8=function(a,b,c,d){g.IF.call(this);
this.l=a;this.D=b||"233637DE";this.C=c||"cl";this.F=d||!1;this.g=null;this.B=!1;this.o=[];this.A=(0,g.A)(this.VS,this)},ECa=function(a,b){return b?g.Ka(a.o,function(a){return T6(b,a.label)},a):null},l8=function(a){Q7("Controller",a)},hCa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},m8=function(a){return a.B||!!a.o.length||!!a.g},n8=function(a,b,c){b!=a.g&&(g.Ze(a.g),(a.g=b)?(c?a.T("yt-remote-cast2-receiver-resumed",b.l):a.T("yt-remote-cast2-receiver-selected",
b.l),b.subscribe("sessionScreen",(0,g.A)(a.MC,a,b)),b.o?a.T("yt-remote-cast2-session-change",b.o):c&&a.g.Xj(null)):a.T("yt-remote-cast2-session-change",null))},FCa=function(a){var b=a.l.aF(),c=a.g&&a.g.l;
a=(0,g.I)(b,function(a){c&&T6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=ECa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},LCa=function(a,b,c,d,e,f,k){GCa()?HCa(b,e,f,k)&&(p8(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?ICa(a,c):(window.__onGCastApiAvailable=function(b,d){b?ICa(a,c):(q8("Failed to load cast API: "+d),r8(!1),p8(!1),g.QG("yt-remote-cast-available"),g.QG("yt-remote-cast-receiver"),JCa(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20180601001808/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):wBa():i7("CriOS")?BBa():i7("Android")&&i7("Chrome/")&&window.navigator.presentation?CBa():window.chrome&&window.navigator.presentation&&!i7("Edge")?(j7(),f7(KCa.map(zBa))):g7())):o8("Cannot initialize because not running Chrome")},JCa=function(){o8("dispose");
var a=s8();a&&a.dispose();g.va("yt.mdx.remote.cloudview.instance_",null,void 0);MCa(!1);g.VF(t8);t8.length=0},u8=function(){return!!g.PG("yt-remote-cast-installed")},NCa=function(){var a=g.PG("yt-remote-cast-receiver");
return a?a.friendlyName:null},OCa=function(){o8("clearCurrentReceiver");
g.QG("yt-remote-cast-receiver")},PCa=function(){return u8()?s8()?s8().getCastSession():(q8("getCastSelector: Cast is not initialized."),null):(q8("getCastSelector: Cast API is not installed!"),null)},w8=function(){u8()?s8()?v8()?(o8("Requesting cast selector."),s8().requestSession()):(o8("Wait for cast API to be ready to request the session."),t8.push(g.UF("yt-remote-cast2-api-ready",w8))):q8("requestCastSelector: Cast is not initialized."):q8("requestCastSelector: Cast API is not installed!")},x8=
function(a,b){v8()?s8().setConnectedScreenStatus(a,b):q8("setConnectedScreenStatus called before ready.")},GCa=function(){var a=0<=g.Gb.search(/ (CrMo|Chrome|CriOS)\//);
return g.zI||a},QCa=function(a,b){s8().init(a,b)},HCa=function(a,b,c,d){var e=!1;
s8()||(a=new k8(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.OG("yt-remote-cast-available",a);g.YF("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){o8("onReceiverSelected: "+a.friendlyName);
g.OG("yt-remote-cast-receiver",a);g.YF("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){o8("onReceiverResumed: "+a.friendlyName);
g.OG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){o8("onSessionChange: "+U6(a));
a||g.QG("yt-remote-cast-receiver");g.YF("yt-remote-cast2-session-change",a)}),g.va("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
o8("cloudview.createSingleton_: "+e);return e},s8=function(){return g.y("yt.mdx.remote.cloudview.instance_")},ICa=function(a,b){r8(!0);
p8(!1);QCa(a,function(a){a?(MCa(!0),g.XF("yt-remote-cast2-api-ready")):(q8("Failed to initialize cast API."),r8(!1),g.QG("yt-remote-cast-available"),g.QG("yt-remote-cast-receiver"),JCa());b(a)})},o8=function(a){Q7("cloudview",a)},q8=function(a){Q7("cloudview",a)},r8=function(a){o8("setCastInstalled_ "+a);
g.OG("yt-remote-cast-installed",a)},v8=function(){return!!g.y("yt.mdx.remote.cloudview.apiReady_")},MCa=function(a){o8("setApiReady_ "+a);
g.va("yt.mdx.remote.cloudview.apiReady_",a,void 0)},p8=function(a){g.va("yt.mdx.remote.cloudview.initializing_",a,void 0)},y8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.g=-1;this.muted=!1;this.audioTrackId=null;this.D=this.F=0;this.l=null;this.hasNext=this.Sf=!1;this.I=this.H=this.o=this.B=0;this.A=window.NaN;this.C=!1;this.reset(a)},z8=function(a){a.audioTrackId=null;
a.l=null;a.g=-1;a.Sf=!1;a.hasNext=!1;a.F=0;a.D=(0,g.G)();a.B=0;a.o=0;a.H=0;a.I=0;a.A=window.NaN;a.C=!1},A8=function(a){return a.ib()?((0,g.G)()-a.D)/1E3:0},B8=function(a,b){a.F=b;
a.D=(0,g.G)()},C8=function(a){switch(a.g){case 1:case 1081:return((0,g.G)()-a.D)/1E3+a.F;
case -1E3:return 0}return a.F},D8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&z8(a)},E8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.g;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.ac(a.l);b.hasPrevious=a.Sf;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.D;b.seekableStart=a.B;b.seekableEnd=a.o;b.duration=a.H;b.loadedTime=a.I;b.liveIngestionTime=a.A;return b},G8=function(a,b){g.IF.call(this);
this.g=0;this.A=a;this.C=[];this.B=new g.nC;this.o=this.l=null;this.H=(0,g.A)(this.sQ,this);this.D=(0,g.A)(this.gm,this);this.F=(0,g.A)(this.rQ,this);this.I=(0,g.A)(this.EQ,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Uv,this),RCa(this))):c=3;0!=c&&(b?this.Uv(c):g.XD((0,g.A)(function(){this.Uv(c)},this),0));
var d=PCa();d&&F8(this,d);this.subscribe("yt-remote-cast2-session-change",this.I)},H8=function(a){return new y8(a.A.getPlayerContextData())},RCa=function(a){(0,g.C)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.C.push(this.A.subscribe(a,g.Ea(this.PS,a),this))},a)},SCa=function(a){(0,g.C)(a.C,function(a){this.A.unsubscribeByKey(a)},a);
a.C.length=0},I8=function(a,b){50>a.B.Bc()&&g.pC(a.B,b)},K8=function(a,b,c){var d=H8(a);
B8(d,c);-1E3!=d.g&&(d.g=b);J8(a,d)},L8=function(a,b,c){a.A.sendMessage(b,c)},J8=function(a,b){SCa(a);
a.A.setPlayerContextData(E8(b));RCa(a)},F8=function(a,b){a.o&&(a.o.removeUpdateListener(a.H),a.o.removeMediaListener(a.D),a.gm(null));
a.o=b;a.o&&(Q7("CP","Setting cast session: "+a.o.sessionId),a.o.addUpdateListener(a.H),a.o.addMediaListener(a.D),a.o.media.length&&a.gm(a.o.media[0]))},TCa=function(a){var b=a.l.media,c=a.l.customData;
if(b&&c){var d=H8(a);b.contentId!=d.videoId&&Q7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;B8(d,a.l.getEstimatedTime());J8(a,d)}else Q7("CP","No cast media video. Ignoring state update.")},M8=function(a,b,c){return(0,g.A)(function(a){this.dc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.dc("Retrying "+b+" using MDx browser channel."),L8(this,b,c))},a)},N8=function(a,b,c){g.IF.call(this);
this.B=window.NaN;this.M=!1;this.I=this.H=this.J=this.K=window.NaN;this.R=[];this.A=this.D=this.o=this.Za=this.g=null;this.ra=a;this.R.push(g.rF(window,"beforeunload",(0,g.A)(this.wJ,this)));this.l=[];this.Za=new y8;this.Y=b.id;this.g=UCa(this,c);this.g.subscribe("handlerOpened",this.wQ,this);this.g.subscribe("handlerClosed",this.tQ,this);this.g.subscribe("handlerError",this.uQ,this);this.g.subscribe("handlerMessage",this.vQ,this);gCa(this.g,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.Za.videoId;g.RG()&&g.OG("yt-remote-session-video-id",a)},this)},O8=function(a){Q7("conn",a)},UCa=function(a,b){return new K7(N7(a.ra,"/bc"),b)},P8=function(a,b){a.T("proxyStateChange",b)},VCa=function(a){a.B=g.XD((0,g.A)(function(){O8("Connecting timeout");
this.C(1)},a),2E4)},Q8=function(a){g.ZD(a.B);
a.B=window.NaN},R8=function(a){g.ZD(a.K);
a.K=window.NaN},WCa=function(a){S8(a);
a.J=g.XD((0,g.A)(function(){T8(this,"getNowPlaying")},a),2E4)},S8=function(a){g.ZD(a.J);
a.J=window.NaN},YCa=function(a,b){b&&(Q8(a),R8(a));
b==(L7(a.g)&&(0,window.isNaN)(a.B))?b&&(P8(a,1),T8(a,"getSubtitlesTrack")):b?(a.X()&&a.Za.reset(),P8(a,1),T8(a,"getNowPlaying"),XCa(a)):a.C(1)},ZCa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Za.videoId&&(g.Vb(b.params)?a.Za.l=null:a.Za.l=b.params,a.T("remotePlayerChange"))},$Ca=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.Za.listId=b.params.listId||a.Za.listId;D8(a.Za,c,d);a.T("remoteQueueChange")},bDa=function(a,b){b.params=b.params||{};
$Ca(a,b);aDa(a,b);a.T("autoplayDismissed")},aDa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
B8(a.Za,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.Za.g&&(c=-1E3);a.Za.g=c;c=Number(b.params.loadedTime);a.Za.I=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.Za.H=(0,window.isNaN)(c)?0:c;c=a.Za;var d=Number(b.params.liveIngestionTime);c.A=d;c.C=(0,window.isNaN)(d)?!1:!0;c=a.Za;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.B=(0,window.isNaN)(d)?0:d;c.o=(0,window.isNaN)(e)?0:e;1==a.Za.g?WCa(a):S8(a);
a.T("remotePlayerChange")},cDa=function(a,b){if(-1E3!=a.Za.g){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Za.g=c;c=(0,window.parseInt)(b.params.currentTime,10);B8(a.Za,(0,window.isNaN)(c)?0:c);a.T("remotePlayerChange")}},dDa=function(a,b){var c="true"==b.params.muted;
a.Za.volume=(0,window.parseInt)(b.params.volume,10);a.Za.muted=c;a.T("remotePlayerChange")},eDa=function(a,b){a.D=b.params.videoId;
a.T("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},fDa=function(a,b){var c="true"==b.params.hasNext;
a.Za.Sf="true"==b.params.hasPrevious;a.Za.hasNext=c;a.T("previousNextChange")},XCa=function(a){g.ZD(a.I);
a.I=g.XD((0,g.A)(a.C,a,1),864E5)},T8=function(a,b,c){c?O8("Sending: action="+b+", params="+g.xg(c)):O8("Sending: action="+b);
a.g.sendMessage(b,c)},U8=function(a){U7.call(this,"ScreenServiceProxy");
this.dd=a;this.l=[];this.l.push(this.dd.$_s("screenChange",(0,g.A)(this.nW,this)));this.l.push(this.dd.$_s("onlineScreenChange",(0,g.A)(this.rS,this)))},kDa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.RD("MDX_CONFIG")||b;lBa();b7();V8||(V8=new M7(b?b.loungeApiHost:void 0),tBa()&&(V8.g="/api/loungedev"));W8||(W8=g.y("yt.mdx.remote.deferredProxies_")||[],g.va("yt.mdx.remote.deferredProxies_",W8,void 0));gDa();var c=X8();if(!c){var d=new c8(V8);g.va("yt.mdx.remote.screenService_",d,void 0);c=X8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);LCa(a,d,function(a){a?Y8()&&x8(Y8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.YF("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.y("yt.mdx.remote.initialized_")&&(g.va("yt.mdx.remote.initialized_",!0,void 0),Z8("Initializing: "+g.xg(b)),$8.push(g.UF("yt-remote-cast2-availability-change",function(){g.YF("yt-remote-receiver-availability-change")})),$8.push(g.UF("yt-remote-cast2-receiver-selected",function(){a9(null);
g.YF("yt-remote-auto-connect","cast-selector-receiver")})),$8.push(g.UF("yt-remote-cast2-receiver-resumed",function(){g.YF("yt-remote-receiver-resumed","cast-selector-receiver")})),$8.push(g.UF("yt-remote-cast2-session-change",hDa)),$8.push(g.UF("yt-remote-connection-change",function(a){a?x8(Y8(),"YouTube TV"):b9()||(x8(null,null),OCa())})),a=c9(),b.isAuto&&(a.id+="#dial"),g.OF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),Z8(" -- with channel params: "+
g.xg(a)),iDa(a),c.start(),Y8()||jDa())},mDa=function(){var a=lDa();
u8()&&g.PG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},lDa=function(){var a=X8().dd.$_gos();
var b=d9();b&&e9()&&(X6(a,b)||a.push(b));return kBa(a)},f9=function(){var a=nDa();
!a&&u8()&&NCa()&&(a={key:"cast-selector-receiver",name:NCa()});return a},nDa=function(){var a=lDa(),b=d9();
b||(b=b9());return g.Ka(a,function(a){return b&&T6(b,a.key)?!0:!1})},d9=function(){var a=Y8();
if(!a)return null;var b=X8().ie();return Y6(b,a)},hDa=function(a){Z8("remote.onCastSessionChange_: "+U6(a));
if(a){var b=d9();b&&b.id==a.id?x8(b.id,"YouTube TV"):(b&&g9(),h9(a,1))}else e9()&&g9()},g9=function(){v8()?s8().stopSession():q8("stopSession called before API ready.");
var a=e9();a&&(a.disconnect(1),i9(null))},j9=function(){var a=e9();
return!!a&&3!=a.getProxyState()},Z8=function(a){Q7("remote",a)},X8=function(){if(!k9){var a=g.y("yt.mdx.remote.screenService_");
k9=a?new U8(a):null}return k9},Y8=function(){return g.y("yt.mdx.remote.currentScreenId_")},oDa=function(a){g.va("yt.mdx.remote.currentScreenId_",a,void 0)},pDa=function(){return g.y("yt.mdx.remote.connectData_")},a9=function(a){g.va("yt.mdx.remote.connectData_",a,void 0)},e9=function(){return g.y("yt.mdx.remote.connection_")},i9=function(a){var b=e9();
a9(null);a||oDa("");g.va("yt.mdx.remote.connection_",a,void 0);W8&&((0,g.C)(W8,function(b){b(a)}),W8.length=0);
b&&!a?g.YF("yt-remote-connection-change",!1):!b&&a&&g.YF("yt-remote-connection-change",!0)},b9=function(){var a=g.RG();
if(!a)return null;var b=X8().ie();return Y6(b,a)},h9=function(a,b){d9()&&d9();
oDa(a.id);var c=new N8(V8,a,c9());c.connect(b,pDa());c.subscribe("beforeDisconnect",function(a){g.YF("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){e9()&&i9(null)});
i9(c)},jDa=function(){var a=b9();
a?(Z8("Resume connection to: "+U6(a)),h9(a,0)):(c7(),OCa(),Z8("Skipping connecting because no session screen found."))},gDa=function(){var a=c9();
if(g.Vb(a)){a=a7();var b=g.PG("yt-remote-session-name")||"",c=g.PG("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.va("yt.mdx.remote.channelParams_",a,void 0)}},c9=function(){return g.y("yt.mdx.remote.channelParams_")||{}},iDa=function(a){a?(g.OG("yt-remote-session-app",a.app),g.OG("yt-remote-session-name",a.name)):(g.QG("yt-remote-session-app"),g.QG("yt-remote-session-name"));
g.va("yt.mdx.remote.channelParams_",a,void 0)},l9=function(a,b,c){g.M.call(this);
this.F=a;this.l=b;this.o=new g.FF(this);g.N(this,this.o);this.o.O(b,"onCaptionsTrackListChanged",this.LR);this.o.O(b,"captionschanged",this.qQ);this.o.O(b,"captionssettingschanged",this.oE);this.o.O(b,"videoplayerreset",this.pp);this.o.O(b,"mdxautoplaycancel",this.CI);this.R=this.o.O(b,"onVolumeChange",this.wC);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.JC,this);c.subscribe("remotePlayerChange",this.jm,this);c.subscribe("remoteQueueChange",this.pp,this);c.subscribe("autoplayUpNext",this.hC,
this);c.subscribe("previousNextChange",this.GC,this);c.subscribe("nowAutoplaying",this.yC,this);c.subscribe("autoplayDismissed",this.gC,this);this.suggestion=null;this.H=new g.DP(64);this.A=new g.Yt(this.kE,500,this);g.N(this,this.A);this.B=new g.Yt(this.lE,1E3,this);g.N(this,this.B);this.J=new k7(this.RV,0,this);g.N(this,this.J);this.C={};this.K=new g.Yt(this.LE,1E3,this);g.N(this,this.K);this.I=new g.Vk(this.pO,1E3,this);g.N(this,this.I);this.M=g.z;this.oE();this.pp();this.jm()},m9=function(a,b){var c=
a.F,d=a.l.getVideoData().lengthSeconds;
c.H=b||0;c.g.T("progresssync",b,d)},qDa=function(a){m9(a,0);
a.A.stop();n9(a,new g.DP(64))},p9=function(a,b){if(o9(a)&&!a.D){var c=null;
b&&(c={style:a.l.Ei()},g.cc(c,b));a.g.YD(a.l.getVideoData(1).videoId,c);a.C=H8(a.g).l}},q9=function(a,b){var c=a.l.cg();
if(c){var d=c.ge();var e=c.listId.toString()}var f=a.l.getVideoData(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;var m=f.Qj;f=aBa(f);var n=H8(c);l=l||0;var q={videoId:k,currentIndex:l};D8(n,k,l);g.u(b)&&(B8(n,b),q.currentTime=b);g.u(e)&&(q.listId=e);null!=d&&(q.playerParams=d);null!=m&&(q.clickTrackingParams=m);null!=f&&(q.locationInfo=g.xg(f));L8(c,"setPlaylist",q);e||J8(c,n);n9(a,new g.DP(1))},rDa=function(a,b){if(b){var c=a.l.wc("captions","tracklist",{Mz:1});
c&&c.length?(a.l.Kd("captions","track",b),a.D=!1):(a.l.ek("captions"),a.D=!0)}else a.l.Kd("captions","track",{})},o9=function(a){return H8(a.g).videoId==a.l.getVideoData(1).videoId},n9=function(a,b){a.B.stop();
var c=a.H;if(!g.IP(c,b)){var d=g.X(b,2);d!=g.X(a.H,2)&&g.eV(a.l,d);a.H=b;sDa(a.F,c,b)}},r9=function(a){g.W.call(this,{G:"div",
L:"ytp-remote",N:[{G:"div",L:"ytp-remote-display-status",N:[{G:"div",L:"ytp-remote-display-status-icon",N:[g.$oa()]},{G:"div",L:"ytp-remote-display-status-text",aa:"{{statustext}}"}]}]});this.o=new g.TV(this,250);g.N(this,this.o);this.A=a;this.O(a,"presentingplayerstatechange",this.B);tDa(this,g.bV(a))},tDa=function(a,b){if(3==a.A.Ra()){var c={RECEIVER_NAME:a.A.wc("remote","currentReceiver").name};
c=g.X(b,128)?g.Q0("Error on $RECEIVER_NAME",c):b.ib()||g.X(b,4)?g.Q0("Playing on $RECEIVER_NAME",c):g.Q0("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.o.show()}else a.o.hide()},s9=function(a,b){g.$Z.call(this,"Play on",0,a,b);
this.o=a;this.H={};this.O(a,"onMdxReceiversChange",this.J);this.O(a,"presentingplayerstatechange",this.J);this.J()},t9=function(a){g.zV.call(this,a);
this.o={key:W6(),name:"This computer"};this.B=null;this.C=[];this.I=this.l=null;this.F=[this.o];this.A=this.o;this.D=new g.DP(64);this.H=0;if(!g.XM(g.Y(this.g))){a=this.g;var b=g.EH(a);b&&(b=b.Lo())&&(b=new s9(a,b),g.N(this,b));b=new r9(a);g.N(this,b);g.tV(a,b.element,4)}},sDa=function(a,b,c){a.D=c;
a.g.T("presentingplayerstatechange",new g.NP(c,b))},u9=function(a,b){if(b.key!=a.A.key)if(b.key==a.o.key)g9();
else{a.A=b;var c=a.g.getPlaylistId();var d=a.g.getVideoData(1);var e=d.videoId;if(c||e){var f=a.g.cg();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.Xb(l).videoId}else k=[e];f=a.g.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.Qj,index:Math.max(a.g.NA(),0),currentTime:0==f?void 0:f};(d=aBa(d))&&(c.locationInfo=d);d=c}else d=null;Z8("Connecting to: "+g.xg(b));"cast-selector-receiver"==b.key?(a9(d||null),v8()?s8().setLaunchParams(d||null):
q8("setLaunchParams called before ready.")):!d&&j9()&&Y8()==b.key?g.YF("yt-remote-connection-change",!0):(g9(),a9(d||null),d=X8().ie(),(d=Y6(d,b.key))&&h9(d,1))}},IBa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},u7={"'":"\\'"},uDa={},gBa={EX:"atp",d2:"ska",t1:"que",D0:"mus",Z1:"sus",MZ:"dsp"};
R6.prototype.Fn=function(){var a=new R6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.o=this.o;a.l=this.l;a.g=this.g};
var d7,$6="",h7=e7("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",ABa=e7("loadCastFramework")||e7("loadCastApplicationFramework"),KCa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.B(k7,g.M);g.h=k7.prototype;g.h.rJ=function(a){this.A=arguments;this.g=!1;this.Ba?this.o=(0,g.G)()+this.pd:this.Ba=g.rg(this.B,this.pd)};
g.h.stop=function(){this.Ba&&(g.sg(this.Ba),this.Ba=null);this.o=null;this.g=!1;this.A=[]};
g.h.pause=function(){++this.l};
g.h.resume=function(){this.l&&(--this.l,!this.l&&this.g&&(this.g=!1,this.C.apply(null,this.A)))};
g.h.V=function(){this.stop();k7.ca.V.call(this)};
g.h.sJ=function(){this.o?(this.Ba=g.rg(this.B,this.o-(0,g.G)()),this.o=null):(this.Ba=null,this.l?this.g=!0:(this.g=!1,this.C.apply(null,this.A)))};l7.prototype.stringify=function(a){return g.x.JSON.stringify(a,void 0)};
l7.prototype.parse=function(a){return g.x.JSON.parse(a,void 0)};g.h=m7.prototype;g.h.ji=null;g.h.Cf=!1;g.h.Lk=null;g.h.Nv=null;g.h.uk=null;g.h.Hj=null;g.h.ih=null;g.h.Gh=null;g.h.Li=null;g.h.Qc=null;g.h.Hm=0;g.h.Df=null;g.h.mq=null;g.h.jh=null;g.h.wl=-1;g.h.FD=!0;g.h.Th=!1;g.h.es=0;g.h.Bp=null;var GBa={},p7={};g.h=m7.prototype;g.h.setTimeout=function(a){this.A=a};
g.h.LU=function(a){a=a.target;var b=this.Bp;b&&3==g.ix(a)?b.Fj():this.UE(a)};
g.h.UE=function(a){try{if(a==this.Qc)a:{var b=g.ix(this.Qc),c=this.Qc.l,d=this.Qc.getStatus();if(g.wd&&!g.pc(10)||g.yd&&!g.oc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.cf&&!g.mx(this.Qc))break a;this.Th||4!=b||7==c||(8==c||0>=d?this.g.wf(3):this.g.wf(2));w7(this);var e=this.Qc.getStatus();this.wl=e;var f=g.mx(this.Qc);(this.Cf=200==e)?(4==b&&s7(this),this.B?(HBa(this,b,f),g.cf&&this.Cf&&3==b&&(this.W.U(this.l,"tick",this.HU),this.l.start())):r7(this,f),this.Cf&&!this.Th&&(4==b?this.g.mp(this):
(this.Cf=!1,o7(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.jh=3,q7(13)):(this.jh=0,q7(14)),s7(this),t7(this))}}catch(k){this.Qc&&g.mx(this.Qc)}finally{}};
g.h.HU=function(){var a=g.ix(this.Qc),b=g.mx(this.Qc);this.Hm<b.length&&(w7(this),HBa(this,a,b),this.Cf&&4!=a&&o7(this))};
g.h.ST=function(a){v7((0,g.A)(this.RT,this,a),0)};
g.h.RT=function(a){this.Th||(w7(this),r7(this,a),o7(this))};
g.h.RC=function(a){v7((0,g.A)(this.QT,this,a),0)};
g.h.QT=function(a){this.Th||(s7(this),this.Cf=a,this.g.mp(this),this.g.wf(4))};
g.h.cancel=function(){this.Th=!0;s7(this)};
g.h.kU=function(){this.Lk=null;var a=(0,g.G)();0<=a-this.Nv?(2!=this.Hj&&this.g.wf(3),s7(this),this.jh=2,q7(18),t7(this)):KBa(this,this.Nv-a)};g.h=NBa.prototype;g.h.Zr=null;g.h.re=null;g.h.Cp=!1;g.h.az=null;g.h.Sn=null;g.h.jt=null;g.h.ds=null;g.h.Me=null;g.h.Bg=-1;g.h.vl=null;g.h.Sk=null;g.h.connect=function(a){this.ds=a;a=y7(this.g,null,this.ds);q7(3);this.az=(0,g.G)();var b=this.g.F;null!=b?(this.vl=b[0],(this.Sk=b[1])?(this.Me=1,OBa(this)):(this.Me=2,A7(this))):(Q6(a,"MODE","init"),this.re=new m7(this,void 0,void 0,void 0),this.re.ji=this.Zr,n7(this.re,a,!1,null,!0),this.Me=0)};
g.h.DI=function(a){if(a)this.Me=2,A7(this);else{q7(4);var b=this.g;b.Pf=b.Zg.Bg;H7(b,9)}a&&this.wf(2)};
g.h.xr=function(a){return this.g.xr(a)};
g.h.abort=function(){this.re&&(this.re.cancel(),this.re=null);this.Bg=-1};
g.h.Zy=function(){return!1};
g.h.KC=function(a,b){this.Bg=a.wl;if(0==this.Me)if(b){try{var c=this.l.parse(b)}catch(d){c=this.g;c.Pf=this.Bg;H7(c,2);return}this.vl=c[0];this.Sk=c[1]}else c=this.g,c.Pf=this.Bg,H7(c,2);else if(2==this.Me)if(this.Cp)q7(7),this.jt=(0,g.G)();else if("11111"==b){if(q7(6),this.Cp=!0,this.Sn=(0,g.G)(),c=this.Sn-this.az,!g.wd||g.pc(10)||500>c)this.Bg=200,this.re.cancel(),q7(12),z7(this.g,this,!0)}else q7(8),this.Sn=this.jt=(0,g.G)(),this.Cp=!1};
g.h.mp=function(){this.Bg=this.re.wl;if(this.re.Cf)0==this.Me?this.Sk?(this.Me=1,OBa(this)):(this.Me=2,A7(this)):2==this.Me&&((!g.wd||g.pc(10)?!this.Cp:200>this.jt-this.Sn)?(q7(11),z7(this.g,this,!1)):(q7(12),z7(this.g,this,!0)));else{0==this.Me?q7(9):2==this.Me&&q7(10);var a=this.g;a.Pf=this.Bg;H7(a,2)}};
g.h.ym=function(){return this.g.ym()};
g.h.isActive=function(){return this.g.isActive()};
g.h.wf=function(a){this.g.wf(a)};g.h=B7.prototype;g.h.fl=null;g.h.Vd=null;g.h.uc=null;g.h.Yr=null;g.h.Wn=null;g.h.ox=null;g.h.lo=null;g.h.Zl=0;g.h.IP=0;g.h.od=null;g.h.bh=null;g.h.qg=null;g.h.Xh=null;g.h.Zg=null;g.h.lq=null;g.h.Vj=-1;g.h.bA=-1;g.h.Pf=-1;g.h.sj=0;g.h.fj=0;g.h.Vh=8;var I7=new g.Cf;g.B(QBa,g.af);g.B(RBa,g.af);g.B(SBa,g.af);g.h=B7.prototype;g.h.connect=function(a,b,c,d,e){q7(0);this.Yr=b;this.fl=c||{};d&&g.u(e)&&(this.fl.OSID=d,this.fl.OAID=e);this.C?(v7((0,g.A)(this.Mx,this,a),100),WBa(this)):this.Mx(a)};
g.h.Mx=function(a){this.Zg=new NBa(this);this.Zg.Zr=null;this.Zg.l=this.B;this.Zg.connect(a)};
g.h.Zy=function(){return 0==this.g};
g.h.PC=function(a){this.bh=null;ZBa(this,a)};
g.h.OC=function(){this.qg=null;this.uc=new m7(this,this.o,"rpc",this.D);this.uc.ji=null;this.uc.es=0;var a=this.ox.clone();g.Em(a,"RID","rpc");g.Em(a,"SID",this.o);g.Em(a,"CI",this.lq?"0":"1");g.Em(a,"AID",this.Vj);C7(this,a);if(!g.wd||g.pc(10))g.Em(a,"TYPE","xmlhttp"),n7(this.uc,a,!0,this.lo,!1);else{g.Em(a,"TYPE","html");var b=this.uc,c=!!this.lo;b.Hj=3;b.ih=P6(a.clone());JBa(b,c)}};
g.h.KC=function(a,b){if(0!=this.g&&(this.uc==a||this.Vd==a))if(this.Pf=a.wl,this.Vd==a&&3==this.g)if(7<this.Vh){try{var c=this.B.parse(b)}catch(f){c=null}if(g.ya(c)&&3==c.length)if(0==c[0])a:{if(!this.qg){if(this.uc)if(this.uc.uk+3E3<this.Vd.uk)E7(this),this.uc.cancel(),this.uc=null;else break a;G7(this);q7(19)}}else this.bA=c[1],0<this.bA-this.Vj&&37500>c[2]&&this.lq&&0==this.fj&&!this.Xh&&(this.Xh=v7((0,g.A)(this.lQ,this),6E3));else H7(this,11)}else b!=uDa.HY.g&&H7(this,11);else if(this.uc==a&&
E7(this),!g.E(b)){c=this.B.parse(b);g.ya(c);for(var d=0;d<c.length;d++){var e=c[d];this.Vj=e[0];e=e[1];2==this.g?"c"==e[0]?(this.o=e[1],this.lo=e[2],e=e[3],null!=e?this.Vh=e:this.Vh=6,this.g=3,this.od&&this.od.Dx(),this.ox=y7(this,this.ym()?this.lo:null,this.Yr),$Ba(this)):"stop"==e[0]&&H7(this,7):3==this.g&&("stop"==e[0]?H7(this,7):"noop"!=e[0]&&this.od&&this.od.Cx(e),this.fj=0)}}};
g.h.lQ=function(){null!=this.Xh&&(this.Xh=null,this.uc.cancel(),this.uc=null,G7(this),q7(20))};
g.h.mp=function(a){if(this.uc==a){E7(this);this.uc=null;var b=2}else if(this.Vd==a)this.Vd=null,b=1;else return;this.Pf=a.wl;if(0!=this.g)if(a.Cf)1==b?(b=(0,g.G)()-a.uk,I7.dispatchEvent(new RBa(I7,a.Li?a.Li.length:0,b,this.sj)),D7(this),this.A.length=0):$Ba(this);else{var c=a.jh,d;if(!(d=3==c||7==c||0==c&&0<this.Pf)){if(d=1==b)this.Vd||this.bh||1==this.g||2<=this.sj?d=!1:(this.bh=v7((0,g.A)(this.PC,this,a),aCa(this,this.sj)),this.sj++,d=!0);d=!(d||2==b&&G7(this))}if(d)switch(c){case 1:H7(this,5);
break;case 4:H7(this,10);break;case 3:H7(this,6);break;case 7:H7(this,12);break;default:H7(this,2)}}};
g.h.aJ=function(a){if(!g.Oa(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.CV=function(a){a?q7(2):(q7(1),bCa(this,8))};
g.h.xr=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.cx;a.F=!1;return a};
g.h.isActive=function(){return!!this.od&&this.od.isActive(this)};
g.h.wf=function(a){I7.dispatchEvent(new SBa(I7,a))};
g.h.ym=function(){return!(!g.wd||g.pc(10))};
g.h=cCa.prototype;g.h.Dx=function(){};
g.h.Cx=function(){};
g.h.Bx=function(){};
g.h.jr=function(){};
g.h.Hy=function(){return{}};
g.h.isActive=function(){return!0};g.B(J7,g.M);g.h=J7.prototype;g.h.IT=function(){this.pd=Math.min(3E5,2*this.pd);this.o();this.l&&this.start()};
g.h.start=function(){var a=this.pd+15E3*Math.random();g.Zt(this.g,a);this.l=(0,g.G)()+a};
g.h.stop=function(){this.g.stop();this.l=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.pd=5E3};g.B(K7,cCa);g.h=K7.prototype;g.h.subscribe=function(a,b,c){return this.o.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.o.unsubscribe(a,b,c)};
g.h.Od=function(a){return this.o.Od(a)};
g.h.T=function(a,b){return this.o.T.apply(this.o,arguments)};
g.h.dispose=function(){this.I||(this.I=!0,g.Ze(this.o),fCa(this),g.Ze(this.l),this.l=null)};
g.h.ka=function(){return this.I};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.H="";this.l.stop();this.B=a||null;this.A=b||0;a=this.J+"/test";b=this.J+"/bind";var d=new B7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.K),e=this.g;e&&(e.od=null);d.od=this;this.g=d;e?this.g.connect(a,b,this.C,e.o,e.Vj):c?this.g.connect(a,b,this.C,c.sessionId,c.arrayId):this.g.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.cc(c,b);this.l.isActive()||2==(this.g?this.g.g:0)?this.D.push(c):L7(this)&&XBa(this.g,c)};
g.h.Dx=function(){this.l.reset();this.B=null;this.A=0;if(this.D.length){var a=this.D;this.D=[];for(var b=0,c=a.length;b<c;++b)XBa(this.g,a[b])}this.T("handlerOpened")};
g.h.Bx=function(a){var b=2==a&&401==this.g.Pf;4==a||b||this.l.start();this.T("handlerError",a)};
g.h.jr=function(a){if(!this.l.isActive())this.T("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.D.push(d)}};
g.h.Hy=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.F&&(a.ui=""+this.F);this.B&&g.cc(a,this.B);return a};
g.h.Cx=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),VBa(this.g)):this.T("handlerMessage",new dCa(a[0],a[1]))};
g.h.jW=function(){this.l.isActive();var a=this.g,b=0;a.uc&&b++;a.Vd&&b++;0!=b||this.connect(this.B,this.A)};M7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
M7.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
M7.prototype.B=function(a){a(Error("request timed out"))};var nCa=(0,g.G)(),P7=null,S7=Array(50),R7=-1,T7=!1;g.B(U7,g.IF);U7.prototype.ie=function(){return this.g};
U7.prototype.contains=function(a){return!!X6(this.g,a)};
U7.prototype.get=function(a){return a?Y6(this.g,a):null};
U7.prototype.info=function(a){Q7(this.D,a)};g.B(V7,g.IF);var vDa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=V7.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.Ba)&&this.ZE()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.Ba)||(g.ZD(this.Ba),this.Ba=window.NaN)};
g.h.V=function(){this.stop();V7.ca.V.call(this)};
g.h.ZE=function(){this.Ba=window.NaN;this.g=g.nE(N7(this.C,"/pairing/get_screen"),{method:"POST",Lb:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.A)(this.lW,this),onError:(0,g.A)(this.kW,this),wd:(0,g.A)(this.mW,this)})};
g.h.lW=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.T("pairingComplete",new S6(c))};
g.h.kW=function(a){this.g=null;a.status&&404==a.status?this.l>=vDa.length?this.T("pairingFailed",Error("DIAL polling timed out")):(a=vDa[this.l],this.Ba=g.XD((0,g.A)(this.ZE,this),a),this.l++):this.T("pairingFailed",Error("Server error "+a.status))};
g.h.mW=function(){this.g=null;this.T("pairingFailed",Error("Server not responding"))};g.B(X7,U7);g.h=X7.prototype;g.h.start=function(){W7(this)&&this.T("screenChange");!g.PG("yt-remote-lounge-token-expiration")&&rCa(this);g.ZD(this.l);this.l=g.XD((0,g.A)(this.start,this),1E4)};
g.h.add=function(a,b){W7(this);oCa(this,a);Y7(this,!1);this.T("screenChange");b(a);a.token||rCa(this)};
g.h.remove=function(a,b){var c=W7(this);qCa(this,a)&&(Y7(this,!1),c=!0);b(a);c&&this.T("screenChange")};
g.h.gq=function(a,b,c,d){var e=W7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Y7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.T("screenChange")};
g.h.V=function(){g.ZD(this.l);X7.ca.V.call(this)};
g.h.FJ=function(a){W7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Y7(this,!b);b&&Q7(this.D,"Missed "+b+" lounge tokens.")};
g.h.EJ=function(a){Q7(this.D,"Requesting lounge tokens failed: "+a)};g.B($7,g.IF);g.h=$7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.PG("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.G)()-144E5<a?0:a)?b8(this):(this.A=(0,g.G)()+3E5,g.OG("yt-remote-fast-check-period",this.A),this.Zu())};
g.h.isEmpty=function(){return g.Vb(this.g)};
g.h.update=function(){Z7("Updating availability on schedule.");var a=this.C(),b=g.Jb(this.g,function(b,d){return b&&!!Y6(a,d)},this);
a8(this,b)};
g.h.V=function(){g.ZD(this.o);this.o=window.NaN;this.l&&(this.l.abort(),this.l=null);$7.ca.V.call(this)};
g.h.Zu=function(){g.ZD(this.o);this.o=window.NaN;this.l&&this.l.abort();var a=uCa(this);if(g.Mb(a)){var b=N7(this.B,"/pairing/get_screen_availability");this.l=O7(this.B,b,{lounge_token:g.Pb(a).join(",")},(0,g.A)(this.pT,this,a),(0,g.A)(this.oT,this))}else a8(this,{}),b8(this)};
g.h.pT=function(a,b){this.l=null;var c=g.Pb(uCa(this));if(g.gb(c,g.Pb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;a8(this,d);b8(this)}else this.dc("Changing Screen set during request."),this.Zu()};
g.h.oT=function(a){this.dc("Screen availability failed: "+a);this.l=null;b8(this)};
g.h.dc=function(a){Q7("OnlineScreenService",a)};g.B(c8,U7);g.h=c8.prototype;g.h.start=function(){this.o.start();this.l.start();this.g.length&&(this.T("screenChange"),this.l.isEmpty()||this.T("onlineScreenChange"))};
g.h.add=function(a,b,c){this.o.add(a,b,c)};
g.h.remove=function(a,b,c){this.o.remove(a,b,c);this.l.update()};
g.h.gq=function(a,b,c,d){this.o.contains(a)?this.o.gq(a,b,c,d):(a="Updating name of unknown screen: "+a.name,Q7(this.D,a),d(Error(a)))};
g.h.ie=function(a){return a?this.g:g.Va(this.g,(0,g.Jd)(this.A,function(a){return!this.contains(a)},this))};
g.h.aF=function(){return(0,g.Jd)(this.ie(!0),function(a){return!!this.l.g[a.id]},this)};
g.h.bF=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new V7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.A)(function(a){g.Ze(f);d(d8(this,a))},this));
f.subscribe("pairingFailed",function(a){g.Ze(f);e(a)});
f.start();return(0,g.A)(f.stop,f)};
g.h.oW=function(a,b,c,d){g.nE(N7(this.C,"/pairing/get_screen"),{method:"POST",Lb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.A)(function(a,d){var e=new S6(d.screen||{});if(!e.name||yCa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);yCa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(d8(this,e))},this),
onError:(0,g.A)(function(a){d(Error("pairing request failed: "+a.status))},this),
wd:(0,g.A)(function(){d(Error("pairing request timed out."))},this)})};
g.h.V=function(){g.Ze(this.o);g.Ze(this.l);c8.ca.V.call(this)};
g.h.UJ=function(){zCa(this);this.T("screenChange");this.l.update()};
c8.prototype.dispose=c8.prototype.dispose;g.B(f8,g.IF);g.h=f8.prototype;g.h.np=function(a){this.o=a;this.T("sessionScreen",this.o)};
g.h.pe=function(a){this.ka()||(a&&g8(this,""+a),this.o=null,this.T("sessionScreen",null))};
g.h.info=function(a){Q7(this.K,a)};
g.h.dF=function(){return null};
g.h.fv=function(a){var b=this.l;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.A)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.A)(function(){g8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.V=function(){this.fv("");f8.ca.V.call(this)};g.B(h8,f8);g.h=h8.prototype;g.h.ev=function(a){if(this.g){if(this.g==a)return;g8(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.C);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.g=a;this.g.addUpdateListener(this.C);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);BCa(this)};
g.h.Xj=function(a){this.info("launchWithParams no-op for Cast: "+g.xg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.A)(function(){this.pe()},this),(0,g.A)(function(){this.pe(Error("Failed to stop receiver app."))},this)):this.pe(Error("Stopping cast device witout session."))};
g.h.fv=g.z;g.h.V=function(){this.info("disposeInternal");g.ZD(this.A);this.A=0;this.g&&(this.g.removeUpdateListener(this.C),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.g=null;h8.ca.V.call(this)};
g.h.wU=function(a,b){if(!this.ka())if(b){var c=g.Xw(b);if(g.Ba(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.xg(c));switch(d){case "mdxSessionStatus":ACa(this,c.screenId);break;default:g8(this,"Unknown youtube message: "+d)}}else g8(this,"Unable to parse message.")}else g8(this,"No data in message.")};
g.h.Ry=function(a,b,c,d){xCa(this.H,this.l.label,a,this.l.friendlyName,(0,g.A)(function(e){e?b(e):0<=d?(g8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.XD((0,g.A)(this.Ry,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.dF=function(){return this.g};
g.h.pW=function(a){this.ka()||a||(g8(this,"Cast session died."),this.pe())};g.B(i8,f8);g.h=i8.prototype;g.h.ev=function(a){this.A=a;this.A.addUpdateListener(this.J)};
g.h.Xj=function(a){this.B=a;this.D()};
g.h.stop=function(){this.g();this.g=g.z;g.ZD(this.C);this.A?this.A.stop((0,g.A)(this.pe,this,null),(0,g.A)(this.pe,this,"Failed to stop DIAL device.")):this.pe()};
g.h.V=function(){this.g();this.g=g.z;g.ZD(this.C);this.A&&this.A.removeUpdateListener(this.J);this.A=null;i8.ca.V.call(this)};
g.h.sW=function(a){this.ka()||a||(g8(this,"DIAL session died."),this.g(),this.g=g.z,this.pe())};
g.h.Ps=function(a){this.I=W6();if(this.B){var b=new window.chrome.cast.DialLaunchResponse(!0,DCa(this));a(b);CCa(this)}else this.D=(0,g.A)(function(){g.ZD(this.C);this.D=g.z;this.C=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,DCa(this));a(b);CCa(this)},this),this.C=g.XD((0,g.A)(function(){this.D()},this),100)};
g.h.iL=function(a,b,c){xCa(this.H,this.F.receiver.label,a,this.l.friendlyName,(0,g.A)(function(a){a&&a.token?(this.np(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.Ps(b,c)},this),(0,g.A)(function(a){g8(this,"Failed to get DIAL screen: "+a);
this.Ps(b,c)},this))};g.B(j8,f8);j8.prototype.stop=function(){this.pe()};
j8.prototype.ev=g.z;j8.prototype.Xj=function(){g.ZD(this.g);this.g=window.NaN;var a=Y6(this.H.ie(),this.l.label);a?this.np(a):this.pe(Error("No such screen"))};
j8.prototype.V=function(){g.ZD(this.g);this.g=window.NaN;j8.ca.V.call(this)};g.B(k8,g.IF);g.h=k8.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.D);this.F||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.A)(this.LC,this),(0,g.A)(this.ZS,this),d,e);c.customDialLaunchCallback=(0,g.A)(this.VQ,this);window.chrome.cast.initialize(c,
(0,g.A)(function(){this.ka()||(window.chrome.cast.addReceiverActionListener(this.A),kCa(),this.l.subscribe("onlineScreenChange",(0,g.A)(this.cF,this)),this.o=FCa(this),window.chrome.cast.setCustomReceivers(this.o,g.z,(0,g.A)(function(a){this.dc("Failed to set initial custom receivers: "+g.xg(a))},this)),this.T("yt-remote-cast2-availability-change",m8(this)),b(!0))},this),(0,g.A)(function(a){this.dc("Failed to initialize API: "+g.xg(a));
b(!1)},this))};
g.h.mV=function(a,b){l8("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.o;if(!a||c&&c.id!=a)l8("Unsetting old screen status: "+this.g.l.friendlyName),n8(this,null)}if(a&&b){if(!this.g){c=Y6(this.l.ie(),a);if(!c){l8("setConnectedScreenStatus: Unknown screen.");return}var d=ECa(this,c);d||(l8("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.o.push(d),
window.chrome.cast.setCustomReceivers(this.o,g.z,(0,g.A)(function(a){this.dc("Failed to set initial custom receivers: "+g.xg(a))},this)));
l8("setConnectedScreenStatus: new active receiver: "+d.friendlyName);n8(this,new j8(this.l,d),!0)}this.g.fv(b)}else l8("setConnectedScreenStatus: no screen.")};
g.h.nV=function(a){this.ka()?this.dc("Setting connection data on disposed cast v2"):this.g?this.g.Xj(a):this.dc("Setting connection data without a session")};
g.h.rW=function(){this.ka()?this.dc("Stopping session on disposed cast v2"):this.g?(this.g.stop(),n8(this,null)):l8("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.A)(this.LC,this),(0,g.A)(this.uT,this))};
g.h.V=function(){this.l.unsubscribe("onlineScreenChange",(0,g.A)(this.cF,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.A);g.Ta(g.y("yt.mdx.remote.debug.handlers_")||[],hCa);g.Ze(this.g);k8.ca.V.call(this)};
g.h.dc=function(a){Q7("Controller",a)};
g.h.MC=function(a,b){this.g==a&&(b||n8(this,null),this.T("yt-remote-cast2-session-change",b))};
g.h.VS=function(a,b){if(!this.ka())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),l8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.l.label!=a.label)l8("onReceiverAction_: Stopping active receiver: "+this.g.l.friendlyName),this.g.stop();else{l8("onReceiverAction_: Casting to active receiver.");this.g.o&&this.T("yt-remote-cast2-session-change",this.g.o);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:n8(this,
new j8(this.l,a));break;case window.chrome.cast.ReceiverType.DIAL:n8(this,new i8(this.l,a,this.C));break;case window.chrome.cast.ReceiverType.CAST:n8(this,new h8(this.l,a));break;default:this.dc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.l.label==a.label?this.g.stop():this.dc("Stopping receiver w/o session: "+a.friendlyName)}else this.dc("onReceiverAction_ called without receiver.")};
g.h.VQ=function(a){if(this.ka())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.dc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.l:null;if(!c||c.label!=b.label)return this.dc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.o)return l8("Reselecting dial screen."),
this.T("yt-remote-cast2-session-change",this.g.o),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.dc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);n8(this,new i8(this.l,b,this.C))}b=this.g;b.F=a;return b.F.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.A)(b.iL,b,(b.F.extraData||{}).screenId||null)):new window.Promise((0,g.A)(b.Ps,b))};
g.h.LC=function(a){if(!this.ka()){l8("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)l8("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),n8(this,new h8(this.l,b),!0);else{this.dc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.l,d=Y6(this.l.ie(),c.label);
d&&T6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(l8("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Ze(this.g),this.g=new h8(this.l,b),this.g.subscribe("sessionScreen",(0,g.A)(this.MC,this,this.g)),this.g.Xj(null));this.g.ev(a)}}};
g.h.qW=function(){return this.g?this.g.dF():null};
g.h.uT=function(a){this.ka()||(this.dc("Failed to estabilish a session: "+g.xg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&n8(this,null))};
g.h.ZS=function(a){l8("Receiver availability updated: "+a);if(!this.ka()){var b=m8(this);this.B=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;m8(this)!=b&&this.T("yt-remote-cast2-availability-change",m8(this))}};
g.h.cF=function(){this.ka()||(this.o=FCa(this),l8("Updating custom receivers: "+g.xg(this.o)),window.chrome.cast.setCustomReceivers(this.o,g.z,(0,g.A)(function(){this.dc("Failed to set custom receivers.")},this)),this.T("yt-remote-cast2-availability-change",m8(this)))};
k8.prototype.setLaunchParams=k8.prototype.nV;k8.prototype.setConnectedScreenStatus=k8.prototype.mV;k8.prototype.stopSession=k8.prototype.rW;k8.prototype.getCastSession=k8.prototype.qW;k8.prototype.requestSession=k8.prototype.requestSession;k8.prototype.init=k8.prototype.init;k8.prototype.dispose=k8.prototype.dispose;var t8=[];g.h=y8.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";z8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.g=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.l=a.trackData,this.Sf=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.D=a.playerTimeAt,this.B=a.seekableStart,this.o=a.seekableEnd,this.H=a.duration,this.I=a.loadedTime,this.A=a.liveIngestionTime,this.C=!(0,window.isNaN)(this.A))};
g.h.ib=function(){return 1==this.g};
g.h.isAdPlaying=function(){return 1081==this.g};
g.h.getDuration=function(){return this.C?this.H+A8(this):this.H};
g.h.clone=function(){return new y8(E8(this))};g.B(G8,g.IF);g.h=G8.prototype;g.h.play=function(){1==this.g?(this.l?this.l.play(null,g.z,M8(this,"play")):L8(this,"play"),K8(this,1,C8(H8(this))),this.T("remotePlayerChange")):I8(this,this.play)};
g.h.pause=function(){1==this.g?(this.l?this.l.pause(null,g.z,M8(this,"pause")):L8(this,"pause"),K8(this,2,C8(H8(this))),this.T("remotePlayerChange")):I8(this,this.pause)};
g.h.YE=function(a){if(1==this.g){if(this.l){var b=H8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.ib()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.l.seek(c,g.z,M8(this,"seekTo",{newTime:a}))}else L8(this,"seekTo",{newTime:a});K8(this,3,a);this.T("remotePlayerChange")}else I8(this,g.Ea(this.YE,a))};
g.h.stop=function(){if(1==this.g){this.l?this.l.stop(null,g.z,M8(this,"stopVideo")):L8(this,"stopVideo");var a=H8(this);a.index=-1;a.videoId="";z8(a);J8(this,a);this.T("remotePlayerChange")}else I8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=H8(this);if(this.o){if(c.volume!=a){var d=Math.round(a)/100;this.o.setReceiverVolumeLevel(d,(0,g.A)(function(){Q7("CP","set receiver volume: "+d)},this),(0,g.A)(function(){this.dc("failed to set receiver volume.")},this))}c.muted!=b&&this.o.setReceiverMuted(b,(0,g.A)(function(){Q7("CP","set receiver muted: "+b)},this),(0,g.A)(function(){this.dc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);L8(this,"setVolume",e)}c.muted=b;c.volume=a;J8(this,c)}else I8(this,g.Ea(this.setVolume,a,b))};
g.h.YD=function(a,b){if(1==this.g){var c=H8(this),d={videoId:a};b&&(c.l={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.xg(b.style),g.cc(d,c.l));L8(this,"setSubtitlesTrack",d);J8(this,c)}else I8(this,g.Ea(this.YD,a,b))};
g.h.Tv=function(a,b){if(1==this.g){L8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Fb.id});var c=H8(this);c.audioTrackId=b.Fb.id;J8(this,c)}else I8(this,g.Ea(this.Tv,a,b))};
g.h.XE=function(a,b){if(1==this.g){if(a&&b){var c=H8(this);D8(c,a,b);J8(this,c)}L8(this,"previous")}else I8(this,g.Ea(this.XE,a,b))};
g.h.WE=function(a,b){if(1==this.g){if(a&&b){var c=H8(this);D8(c,a,b);J8(this,c)}L8(this,"next")}else I8(this,g.Ea(this.WE,a,b))};
g.h.gy=function(){1==this.g?L8(this,"dismissAutoplay"):I8(this,this.gy)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.T("proxyStateChange",a,this.g)}G8.ca.dispose.call(this)};
g.h.V=function(){SCa(this);this.A=null;this.B.clear();F8(this,null);G8.ca.V.call(this)};
g.h.Uv=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.T("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)g.qC(this.B).apply(this);else 3==a&&this.dispose()}};
g.h.PS=function(a,b){this.T(a,b)};
g.h.sQ=function(a){if(!a)this.gm(null),F8(this,null);else if(this.o.receiver.volume){a=this.o.receiver.volume;var b=H8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)Q7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,J8(this,b)}};
g.h.gm=function(a){Q7("CP","Cast media: "+!!a);this.l&&this.l.removeUpdateListener(this.F);if(this.l=a)this.l.addUpdateListener(this.F),TCa(this),this.T("remotePlayerChange")};
g.h.rQ=function(a){a?(TCa(this),this.T("remotePlayerChange")):this.gm(null)};
g.h.EQ=function(){var a=PCa();a&&F8(this,a)};
g.h.dc=function(a){Q7("CP",a)};g.B(N8,g.IF);g.h=N8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.u(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.u(k)&&(l.currentIndex=k);c&&(this.Za.listId=c);this.Za.videoId=d;this.Za.index=k||0;this.Za.state=3;B8(this.Za,m);this.A="UNSUPPORTED";O8("Connecting with setPlaylist and params: "+g.xg(l));this.g.connect({method:"setPlaylist",
params:g.xg(l)},a,oBa())}else O8("Connecting without params"),this.g.connect({},a,oBa());VCa(this)};
g.h.dispose=function(){this.ka()||(this.T("beforeDispose"),P8(this,3));N8.ca.dispose.call(this)};
g.h.V=function(){Q8(this);S8(this);R8(this);g.ZD(this.H);this.H=window.NaN;g.ZD(this.I);this.I=window.NaN;this.o=null;g.sF(this.R);this.R.length=0;this.g.dispose();N8.ca.V.call(this);this.A=this.D=this.l=this.Za=this.g=null};
g.h.wJ=function(){this.C(2)};
g.h.wQ=function(){O8("Channel opened");this.M&&(this.M=!1,R8(this),this.K=g.XD((0,g.A)(function(){O8("Timing out waiting for a screen.");this.C(1)},this),15E3));
sBa(eCa(this.g),this.Y)};
g.h.tQ=function(){O8("Channel closed");(0,window.isNaN)(this.B)?c7(!0):c7();this.dispose()};
g.h.uQ=function(a){c7();(0,window.isNaN)(this.F())?(O8("Channel error: "+a+" without reconnection"),this.dispose()):(this.M=!0,O8("Channel error: "+a+" with reconnection in "+this.F()+" ms"),P8(this,2))};
g.h.vQ=function(a){a.params?O8("Received: action="+a.action+", params="+g.xg(a.params)):O8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.Xw(a.params.devices);this.l=(0,g.I)(a,function(a){return new R6(a)});
a=!!g.Ka(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
YCa(this,a);break;case "loungeScreenDisconnected":g.Ua(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
YCa(this,!1);break;case "remoteConnected":var b=new R6(g.Xw(a.params.device));g.Ka(this.l,function(a){return b?a.id==b.id:!1})||g.Ra(this.l,b);
break;case "remoteDisconnected":b=new R6(g.Xw(a.params.device));g.Ua(this.l,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":$Ca(this,a);break;case "nowPlaying":bDa(this,a);break;case "onStateChange":aDa(this,a);break;case "onAdStateChange":cDa(this,a);break;case "onVolumeChanged":dDa(this,a);break;case "onSubtitlesTrackChanged":ZCa(this,a);break;case "nowAutoplaying":eDa(this,a);break;case "autoplayDismissed":this.T("autoplayDismissed");break;case "autoplayUpNext":this.D=a.params.videoId||null;this.T("autoplayUpNext",this.D);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.T("autoplayModeChange",this.A);"DISABLED"==this.A&&this.T("autoplayDismissed");break;case "onHasPreviousNextChanged":fDa(this,a);break;case "requestAssistedSignIn":this.T("assistedSignInRequested",a.params.authCode);break;default:O8("Unrecognized action: "+a.action)}};
g.h.WU=function(){if(this.o){var a=this.o;this.o=null;this.Za.videoId!=a&&T8(this,"getNowPlaying")}};
N8.prototype.subscribe=N8.prototype.subscribe;N8.prototype.unsubscribeByKey=N8.prototype.Od;N8.prototype.ga=function(){var a=3;this.ka()||(a=0,(0,window.isNaN)(this.F())?L7(this.g)&&(0,window.isNaN)(this.B)&&(a=1):a=2);return a};
N8.prototype.getProxyState=N8.prototype.ga;N8.prototype.C=function(a){O8("Disconnecting with "+a);Q8(this);this.T("beforeDisconnect",a);1==a&&c7();fCa(this.g,a);this.dispose()};
N8.prototype.disconnect=N8.prototype.C;N8.prototype.fa=function(){var a=this.Za;this.o&&(a=this.Za.clone(),D8(a,this.o,a.index));return E8(a)};
N8.prototype.getPlayerContextData=N8.prototype.fa;
N8.prototype.na=function(a){var b=new y8(a);b.videoId&&b.videoId!=this.Za.videoId&&(this.o=b.videoId,g.ZD(this.H),this.H=g.XD((0,g.A)(this.WU,this),5E3));var c=[];this.Za.listId==b.listId&&this.Za.videoId==b.videoId&&this.Za.index==b.index||c.push("remoteQueueChange");this.Za.g==b.g&&this.Za.volume==b.volume&&this.Za.muted==b.muted&&C8(this.Za)==C8(b)&&g.xg(this.Za.l)==g.xg(b.l)||c.push("remotePlayerChange");this.Za.reset(a);(0,g.C)(c,function(a){this.T(a)},this)};
N8.prototype.setPlayerContextData=N8.prototype.na;N8.prototype.X=function(){var a=this.g.C.id,b=g.Ka(this.l,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
N8.prototype.getOtherConnectedRemoteId=N8.prototype.X;N8.prototype.F=function(){var a=this.g;return a.l.isActive()?a.l.l-(0,g.G)():window.NaN};
N8.prototype.getReconnectTimeout=N8.prototype.F;N8.prototype.Z=function(){return this.A||"UNSUPPORTED"};
N8.prototype.getAutoplayMode=N8.prototype.Z;N8.prototype.ba=function(){return this.D||""};
N8.prototype.getAutoplayVideoId=N8.prototype.ba;N8.prototype.sa=function(){if(!(0,window.isNaN)(this.F())){var a=this.g.l;g.$t(a.g);a.start()}};
N8.prototype.reconnect=N8.prototype.sa;N8.prototype.ia=function(a,b){T8(this,a,b);XCa(this)};
N8.prototype.sendMessage=N8.prototype.ia;g.B(U8,U7);g.h=U8.prototype;g.h.ie=function(a){return this.dd.$_gs(a)};
g.h.contains=function(a){return!!this.dd.$_c(a)};
g.h.get=function(a){return this.dd.$_g(a)};
g.h.start=function(){this.dd.$_st()};
g.h.add=function(a,b,c){this.dd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.dd.$_r(a,b,c)};
g.h.gq=function(a,b,c,d){this.dd.$_un(a,b,c,d)};
g.h.V=function(){for(var a=0,b=this.l.length;a<b;++a)this.dd.$_ubk(this.l[a]);this.l.length=0;this.dd=null;U8.ca.V.call(this)};
g.h.nW=function(){this.T("screenChange")};
g.h.rS=function(){this.T("onlineScreenChange")};
c8.prototype.$_st=c8.prototype.start;c8.prototype.$_gspc=c8.prototype.oW;c8.prototype.$_gsppc=c8.prototype.bF;c8.prototype.$_c=c8.prototype.contains;c8.prototype.$_g=c8.prototype.get;c8.prototype.$_a=c8.prototype.add;c8.prototype.$_un=c8.prototype.gq;c8.prototype.$_r=c8.prototype.remove;c8.prototype.$_gs=c8.prototype.ie;c8.prototype.$_gos=c8.prototype.aF;c8.prototype.$_s=c8.prototype.subscribe;c8.prototype.$_ubk=c8.prototype.Od;var V8=null,W8=null,k9=null,$8=[];g.t(l9,g.M);g.h=l9.prototype;
g.h.V=function(){g.M.prototype.V.call(this);this.A.stop();this.B.stop();this.J.stop();this.M();this.g.unsubscribe("proxyStateChange",this.JC,this);this.g.unsubscribe("remotePlayerChange",this.jm,this);this.g.unsubscribe("remoteQueueChange",this.pp,this);this.g.unsubscribe("autoplayUpNext",this.hC,this);this.g.unsubscribe("previousNextChange",this.GC,this);this.g.unsubscribe("nowAutoplaying",this.yC,this);this.g.unsubscribe("autoplayDismissed",this.gC,this);this.g=this.F=null};
g.h.hB=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(o9(this)){if(!H8(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":H8(this.g).ib()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.Fj(c[0],c[1]);break;case "control_subtitles_set_track":p9(this,c[0]);break;case "control_set_audio_track":c=c[0],o9(this)&&this.g.Tv(this.l.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.l.getCurrentTime();q9(this,0==c?void 0:c);break;case "control_seek":q9(this,c[0]);break;case "control_subtitles_set_track":p9(this,c[0]);break;case "control_set_audio_track":c=c[0],o9(this)&&this.g.Tv(this.l.getVideoData(1).videoId,c)}};
g.h.qQ=function(a){this.J.rJ(a)};
g.h.RV=function(a){this.hB("control_subtitles_set_track",g.Vb(a)?null:a)};
g.h.oE=function(){var a=this.l.wc("captions","track");g.Vb(a)||p9(this,a)};
g.h.wC=function(a){if(o9(this)){this.g.unsubscribe("remotePlayerChange",this.jm,this);var b=Math.round(a.volume);a=!!a.muted;var c=H8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.K.start();this.g.subscribe("remotePlayerChange",this.jm,this)}};
g.h.LR=function(){g.Vb(this.C)||rDa(this,this.C);this.D=!1};
g.h.JC=function(a,b){this.B.stop();2==b&&this.lE()};
g.h.jm=function(){if(o9(this)){this.A.stop();var a=H8(this.g);switch(a.g){case 1081:case 1:n9(this,new g.DP(8));this.kE();break;case 1085:case 3:n9(this,new g.DP(9));break;case 1083:case 0:n9(this,new g.DP(2));this.I.stop();m9(this,this.l.getVideoData().lengthSeconds);break;case 1084:n9(this,new g.DP(4));break;case 2:n9(this,new g.DP(4));m9(this,C8(a));break;case -1:n9(this,new g.DP(64));break;case -1E3:n9(this,new g.DP(128,{errorCode:"mdx.remoteerror",message:"This video is not available for remote playback."}))}a=
H8(this.g).l;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,rDa(this,a));a=H8(this.g);-1==a.volume||Math.round(this.l.getVolume())==a.volume&&this.l.isMuted()==a.muted||this.K.isActive()||this.LE()}else qDa(this)};
g.h.GC=function(){this.l.T("mdxpreviousnextchange")};
g.h.pp=function(){o9(this)||qDa(this)};
g.h.CI=function(){this.g.gy()};
g.h.hC=function(a){a&&(a=g.nE("/watch_queue_ajax",{method:"GET",Wc:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.A)(this.VT,this)}))&&(this.M=(0,g.A)(a.abort,a))};
g.h.VT=function(a,b){var c=new g.vO({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.l.T("mdxautoplayupnext",c)};
g.h.yC=function(a){(0,window.isNaN)(a)||this.l.T("mdxnowautoplaying",a)};
g.h.gC=function(){this.l.T("mdxautoplaycanceled")};
g.h.pO=function(a,b){-1==H8(this.g).g?q9(this,a):b&&this.g.YE(a)};
g.h.LE=function(){if(o9(this)){var a=H8(this.g);this.o.Da(this.R);a.muted?this.l.mute():this.l.dg();this.l.setVolume(a.volume);this.R=this.o.O(this.l,"onVolumeChange",this.wC)}};
g.h.kE=function(){this.A.stop();if(!this.g.ka()){var a=H8(this.g);a.ib()&&n9(this,new g.DP(8));m9(this,C8(a));this.A.start()}};
g.h.lE=function(){this.B.stop();this.A.stop();var a=this.g.A.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.t(r9,g.W);r9.prototype.B=function(a){tDa(this,a.state)};g.t(s9,g.$Z);s9.prototype.J=function(){var a=this.o.wc("remote","receivers");a&&1<a.length&&!this.o.wc("remote","quickCast")?(this.H=g.jb(a,this.C,this),g.a_(this,(0,g.I)(a,this.C)),a=this.o.wc("remote","currentReceiver"),this.vf(this.C(a)),this.enable(!0)):this.enable(!1)};
s9.prototype.C=function(a){return a.key};
s9.prototype.uf=function(a){return"cast-selector-receiver"==a?"Cast...":this.H[a].name};
s9.prototype.td=function(a){g.$Z.prototype.td.call(this,a);this.o.Kd("remote","currentReceiver",this.H[a]);this.B.Pb()};g.t(t9,g.zV);g.h=t9.prototype;g.h.create=function(){kDa(g.KM(g.Y(this.g)));this.C.push(g.UF("yt-remote-before-disconnect",this.mQ,this));this.C.push(g.UF("yt-remote-connection-change",this.aT,this));this.C.push(g.UF("yt-remote-receiver-availability-change",this.HC,this));this.C.push(g.UF("yt-remote-auto-connect",this.YS,this));this.C.push(g.UF("yt-remote-receiver-resumed",this.XS,this));this.HC()};
g.h.load=function(){this.g.Wt();g.zV.prototype.load.call(this);this.B=new l9(this,this.g,this.l);var a=(a=pDa())?a.currentTime:0;var b=j9()?new G8(e9(),void 0):null;0==a&&b&&(a=C8(H8(b)));0!=a&&(this.H=a||0,this.g.T("progresssync",a,void 0));sDa(this,this.D,this.D);g.v0(this.g.app,6)};
g.h.unload=function(){this.g.T("mdxautoplaycanceled");this.A=this.o;g.$e(this.B,this.l);this.l=this.B=null;g.zV.prototype.unload.call(this);g.v0(this.g.app,5)};
g.h.V=function(){g.VF(this.C);g.zV.prototype.V.call(this)};
g.h.Vl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.hB.apply(this.B,[a].concat(g.oa(c)))};
g.h.nJ=function(){return this.loaded?this.B.suggestion:null};
g.h.Sf=function(){return this.l?H8(this.l).Sf:!1};
g.h.hasNext=function(){return this.l?H8(this.l).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.dO=function(){var a=H8(this.l),b=this.g.getVideoData();return{allowSeeking:this.g.ed(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.C?a.A+A8(a):a.A,isPeggedToLive:1>=(a.C?a.o+A8(a):a.o)-this.getCurrentTime(),loaded:a.I,seekableEnd:a.C?a.o+A8(a):a.o,seekableStart:0<a.B?a.B+A8(a):a.B}};
g.h.eO=function(){this.l&&this.l.WE()};
g.h.fO=function(){this.l&&this.l.XE()};
g.h.mQ=function(a){1==a&&(this.I=this.l?H8(this.l):null)};
g.h.aT=function(){var a=j9()?new G8(e9(),void 0):null;if(a){var b=this.A;this.loaded&&this.unload();this.l=a;this.I=null;b.key!=this.o.key&&(this.A=b,this.load())}else g.Ze(this.l),this.l=null,this.loaded&&(this.unload(),(a=this.I)&&a.videoId==this.g.getVideoData().videoId&&this.g.LA(a.videoId,C8(a)));this.g.T("videodatachange","newdata",this.g.getVideoData(),3)};
g.h.HC=function(){this.F=[this.o].concat(mDa());var a=f9()||this.o;u9(this,a);this.g.va("onMdxReceiversChange")};
g.h.YS=function(){var a=f9();u9(this,a)};
g.h.XS=function(){this.A=f9()};
g.h.cO=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.F;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?w8():u9(this,b)),this.loaded?this.A:this.o;case "quickCast":return 2==this.F.length&&"cast-selector-receiver"==this.F[1].key?(b&&w8(),!0):!1}};
g.h.gO=function(){L8(this.l,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Gc=function(){return!1};g.pY.remote=t9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:18:08 Jun 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:38:20 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 164.018
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.06
  cdx.remote: 0.067
  esindex: 0.011
  LoadShardBlock: 127.743 (3)
  PetaboxLoader3.datanode: 161.804 (5)
  load_resource: 527.086 (2)
  PetaboxLoader3.resolve: 367.173 (2)
*/