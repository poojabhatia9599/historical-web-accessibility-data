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

(function(g){var window=this;var YCa=function(a,b){return g.Vb(a,b)},i6=function(a){g.Rm(a,"zx",g.yb());
return a},j6=function(a,b,c){g.za(c)||(c=[String(c)]);
g.Um(a.o,b,c)},ZCa=function(a,b){var c=[];
g.Gk(b,function(a){try{var b=g.rD.prototype.A.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.u(b)?g.qD(b)&&c.push(a):c.push(a)},a);
return c},$Ca=function(a,b){var c=ZCa(a,b);
(0,g.D)(c,function(a){g.rD.prototype.remove.call(this,a)},a)},aDa=function(a){if(a.Jd){if(a.Jd.locationOverrideToken)return{locationOverrideToken:a.Jd.locationOverrideToken};
if(null!=a.Jd.latitudeE7&&null!=a.Jd.longitudeE7)return{latitudeE7:a.Jd.latitudeE7,longitudeE7:a.Jd.longitudeE7}}return null},bDa=function(a,b,c,d){var e=new g.Im(null,void 0);
a&&g.Jm(e,a);b&&g.Km(e,b);c&&g.Lm(e,c);d&&g.Mm(e,d);return e},cDa=function(a){g.gG[a]&&(a=g.gG[a],(0,g.D)(a,function(a){g.eG[a]&&delete g.eG[a]}),a.length=0)},dDa=function(a){var b=g.dG();
if(b)if(b.clear(a),a)cDa(a);else for(var c in g.gG)cDa(c)},k6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.B=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.Cm;this.o=this.A="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",eDa(this,a.capabilities||""),fDa(this,a.experiments||""),this.A=a.remoteControllerUrl||"",
this.o=a.localChannelEncryptionKey||"")},eDa=function(a,b){a.capabilities.clear();
(0,g.Vd)(b.split(","),g.Fa(YCa,gDa)).forEach(function(b){a.capabilities.add(b)})},fDa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},l6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},m6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},hDa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},iDa=function(a){return new l6(a)},jDa=function(a){return g.za(a)?(0,g.I)(a,iDa):[]},n6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},o6=function(a){return g.za(a)?"["+(0,g.I)(a,n6).join(",")+"]":"null"},p6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},kDa=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},q6=function(a,b){return g.La(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},r6=function(a,b){return g.La(a,function(a){return m6(a,b)})},lDa=function(){var a=(0,g.eH)();
a&&$Ca(a,a.o.ee(!0))},s6=function(){var a=g.hH("yt-remote-connected-devices")||[];
g.gb(a);return a},mDa=function(a){if(g.Qa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.I)(a,function(a,b){return 0==b?a:a.substring(c.length)})},nDa=function(a){g.gH("yt-remote-connected-devices",a,86400)},u6=function(){if(t6)return t6;
var a=g.hH("yt-remote-device-id");a||(a=p6(),g.gH("yt-remote-device-id",a,31536E3));for(var b=s6(),c=1,d=a;g.Pa(b,d);)c++,d=a+"#"+c;return t6=d},v6=function(){var a=s6(),b=u6();
g.Pa(a,b);g.jH()&&g.jb(a,b);a=mDa(a);if(g.Qa(a))try{g.PG("remote_sid")}catch(c){}else try{g.OG("remote_sid",a.join(","),-1)}catch(c){}},oDa=function(){return g.hH("yt-remote-session-browser-channel")},pDa=function(){return g.hH("yt-remote-local-screens")||[]},qDa=function(){g.gH("yt-remote-lounge-token-expiration",!0,86400)},rDa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.I)(pDa(),function(a){return a.loungeToken}),c=(0,g.I)(a,function(a){return a.loungeToken});
(0,g.qm)(c,function(a){return!g.Pa(b,a)})&&qDa();
g.gH("yt-remote-local-screens",a,31536E3)},sDa=function(a,b){g.gH("yt-remote-session-browser-channel",a);
g.gH("yt-remote-session-screen-id",b);var c=s6(),d=u6();g.Pa(c,d)||c.push(d);nDa(c);v6()},w6=function(a){a||(g.iH("yt-remote-session-screen-id"),g.iH("yt-remote-session-video-id"));
v6();a=s6();g.Va(a,u6());nDa(a)},tDa=function(){if(!x6){var a=g.CD();
a&&(x6=new g.lD(a))}return x6?!!x6.get("yt-remote-use-staging-server"):!1},uDa=function(){var a=window.document.createElement("a");
g.jd(a,"https://web.archive.org/web/20180901000415/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Cb(a)},vDa=function(a,b){var c=g.Od("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.kd(c,g.me("https://web.archive.org/web/20180901000415/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},wDa=function(){var a=uDa(),b=window.document.getElementById(a),c=b&&g.oF(b,"loaded");
c||b&&!c||(b=vDa(a,function(){g.oF(b,"loaded")||(g.nF(b,"loaded","true"),g.kG(a),g.kE(g.Fa(dDa,a),0))}))},y6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},xDa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},z6=function(a){a.length?yDa(a.shift(),function(){z6(a)}):A6()},zDa=function(a){return"chrome-extension://"+a+B6},yDa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},C6=function(a){return 0<=window.navigator.userAgent.indexOf(a)},A6=function(){var a=xDa();
a&&a(!1,"No cast extension found")},D6=function(){if(ADa){var a=2,b=xDa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;yDa("//web.archive.org/web/20180901000415/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",A6,c)}},BDa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(D6(),a({command:"cast.sender.init"}))},CDa=function(){D6();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);z6(["//web.archive.org/web/20180901000415/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+B6,"//web.archive.org/web/20180901000415/https://www.gstatic.com/eureka/clank"+B6])},E6=function(a,b,c){g.M.call(this);
this.F=null!=c?(0,g.B)(a,c):a;this.Cd=b;this.D=(0,g.B)(this.wL,this);this.o=!1;this.A=0;this.B=this.Ea=null;this.C=[]},F6=function(){},G6=function(a,b,c,d){this.o=a;
this.B=b;this.G=c;this.F=d||1;this.C=45E3;this.Z=new g.Ym(this);this.A=new g.Dg;this.A.setInterval(250)},EDa=function(a,b,c){a.yk=1;
a.Rh=i6(b.clone());a.Cj=c;a.D=!0;DDa(a,null)},H6=function(a,b,c,d,e){a.yk=1;
a.Rh=i6(b.clone());a.Cj=null;a.D=c;e&&(a.xF=!1);DDa(a,d)},DDa=function(a,b){a.rl=(0,g.H)();
I6(a);a.xi=a.Rh.clone();j6(a.xi,"t",a.F);a.Vn=0;a.Vc=a.o.Zs(a.o.Mn()?b:null);0<a.St&&(a.Uq=new g.hl((0,g.B)(a.NG,a,a.Vc),a.St));a.Z.W(a.Vc,"readystatechange",a.LW);var c=a.cj?g.ec(a.cj):{};a.Cj?(a.Or="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Vc.send(a.xi,a.Or,a.Cj,c)):(a.Or="GET",a.xF&&!g.Kd&&(c.Connection="close"),a.Vc.send(a.xi,a.Or,null,c));a.o.Kf(1)},HDa=function(a,b,c){for(var d=!0;!a.Oi&&a.Vn<c.length;){var e=FDa(a,c);
if(e==J6){4==b&&(a.Sh=4,K6(15),d=!1);break}else if(e==GDa){a.Sh=4;K6(16);d=!1;break}else L6(a,e)}4==b&&0==c.length&&(a.Sh=1,K6(17),d=!1);a.Rf=a.Rf&&d;d||(M6(a),N6(a))},FDa=function(a,b){var c=a.Vn,d=b.indexOf("\n",c);
if(-1==d)return J6;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return GDa;d+=1;if(d+c>b.length)return J6;var e=b.substr(d,c);a.Vn=d+c;return e},JDa=function(a,b){a.rl=(0,g.H)();
I6(a);var c=b?window.location.hostname:"";a.xi=a.Rh.clone();g.Rm(a.xi,"DOMAIN",c);g.Rm(a.xi,"t",a.F);try{a.Sf=new window.ActiveXObject("htmlfile")}catch(n){M6(a);a.Sh=7;K6(22);N6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in O6)k=O6[l];else if(l in IDa)k=O6[l]=IDa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=O6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.ld(g.Cc("b/12014412"),d+"</body></html>");a.Sf.open();a.Sf.write(g.cd(c));a.Sf.close();a.Sf.parentWindow.m=(0,g.B)(a.TV,a);a.Sf.parentWindow.d=(0,g.B)(a.FE,a,!0);a.Sf.parentWindow.rpcClose=(0,g.B)(a.FE,a,!1);c=a.Sf.createElement("DIV");a.Sf.parentWindow.document.body.appendChild(c);d=g.Qc(a.xi.toString());d=g.sb(g.Nc(d));d=g.ld(g.Cc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.id(c,g.cd(d));a.o.Kf(1)},
I6=function(a){a.Bx=(0,g.H)()+a.C;
KDa(a,a.C)},KDa=function(a,b){if(null!=a.Il)throw Error("WatchDog timer not null");
a.Il=P6((0,g.B)(a.jW,a),b)},Q6=function(a){a.Il&&(g.x.clearTimeout(a.Il),a.Il=null)},N6=function(a){a.o.JA()||a.Oi||a.o.Eq(a)},M6=function(a){Q6(a);
g.mf(a.Uq);a.Uq=null;a.A.stop();g.dn(a.Z);if(a.Vc){var b=a.Vc;a.Vc=null;b.abort();b.dispose()}a.Sf&&(a.Sf=null)},L6=function(a,b){try{a.o.xE(a,b),a.o.Kf(4)}catch(c){}},MDa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;LDa(a,b,function(e){e?c(!0):g.x.setTimeout(function(){MDa(a,b,c,d,f)},f)})}},LDa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{R6(d),c(!0)}catch(e){}};
d.onerror=function(){try{R6(d),c(!1)}catch(e){}};
d.onabort=function(){try{R6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{R6(d),c(!1)}catch(e){}};
g.x.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},R6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},NDa=function(a){this.o=a;
this.A=new F6},ODa=function(a){var b=S6(a.o,a.Rl,"/mail/images/cleardot.gif");
i6(b);MDa(b.toString(),5E3,(0,g.B)(a.BK,a),3,2E3);a.Kf(1)},U6=function(a){var b=a.o.J;
if(null!=b)K6(5),b?(K6(11),T6(a.o,a,!1)):(K6(12),T6(a.o,a,!0));else if(a.Je=new G6(a,void 0,void 0,void 0),a.Je.cj=a.Qt,b=a.o,b=S6(b,b.Mn()?a.Fm:null,a.Rt),K6(5),!g.Id||g.uc(10))j6(b,"TYPE","xmlhttp"),H6(a.Je,b,!1,a.Fm,!1);else{j6(b,"TYPE","html");var c=a.Je;a=!!a.Fm;c.yk=3;c.Rh=i6(b.clone());JDa(c,a)}},V6=function(a,b,c){this.o=1;
this.A=[];this.C=[];this.D=new F6;this.H=a||null;this.J=null!=b?b:null;this.F=c||!1},PDa=function(a,b){this.o=a;
this.map=b;this.context=null},QDa=function(a){g.of.call(this,"statevent",a)},RDa=function(a,b){g.of.call(this,"timingevent",a);
this.size=b},SDa=function(a){g.of.call(this,"serverreachability",a)},VDa=function(a){TDa(a);
if(3==a.o){var b=a.wn++,c=a.lp.clone();g.Rm(c,"SID",a.B);g.Rm(c,"RID",b);g.Rm(c,"TYPE","terminate");W6(a,c);b=new G6(a,a.B,b,void 0);b.yk=2;b.Rh=i6(c.clone());(new window.Image).src=b.Rh;b.rl=(0,g.H)();I6(b)}UDa(a)},WDa=function(a){a.XK(1,0);
a.lp=S6(a,null,a.Pt);X6(a)},TDa=function(a){a.Dh&&(a.Dh.abort(),a.Dh=null);
a.Bc&&(a.Bc.cancel(),a.Bc=null);a.Jg&&(g.x.clearTimeout(a.Jg),a.Jg=null);Y6(a);a.ke&&(a.ke.cancel(),a.ke=null);a.Jh&&(g.x.clearTimeout(a.Jh),a.Jh=null)},XDa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.A.push(new PDa(a.HR++,b));2!=a.o&&3!=a.o||X6(a)},X6=function(a){a.ke||a.Jh||(a.Jh=P6((0,g.B)(a.DE,a),0),a.mk=0)},ZDa=function(a,b){if(1==a.o){if(!b){a.wn=Math.floor(1E5*Math.random());
var c=a.wn++,d=new G6(a,"",c,void 0);d.cj=null;var e=Z6(a),f=a.lp.clone();g.Rm(f,"RID",c);g.Rm(f,"CVER","1");W6(a,f);EDa(d,f,e);a.ke=d;a.o=2}}else 3==a.o&&(b?YDa(a,b):0==a.A.length||a.ke||YDa(a))},YDa=function(a,b){if(b)if(6<a.Qi){a.A=a.C.concat(a.A);
a.C.length=0;var c=a.wn-1;var d=Z6(a)}else c=b.G,d=b.Cj;else c=a.wn++,d=Z6(a);var e=a.lp.clone();g.Rm(e,"SID",a.B);g.Rm(e,"RID",c);g.Rm(e,"AID",a.Mk);W6(a,e);c=new G6(a,a.B,c,a.mk+1);c.cj=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ke=c;EDa(c,e,d)},W6=function(a,b){if(a.Bd){var c=a.Bd.pA();
c&&g.Kb(c,function(a,c){g.Rm(b,c,a)})}},Z6=function(a){var b=Math.min(a.A.length,1E3),c=["count="+b];
if(6<a.Qi&&0<b){var d=a.A[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.A[e].o,k=a.A[e].map;f=6>=a.Qi?e:f-d;try{g.Kb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.C=a.C.concat(a.A.splice(0,b));
return c.join("&")},$Da=function(a){a.Bc||a.Jg||(a.G=1,a.Jg=P6((0,g.B)(a.CE,a),0),a.Zj=0)},$6=function(a){if(a.Bc||a.Jg||3<=a.Zj)return!1;
a.G++;a.Jg=P6((0,g.B)(a.CE,a),aEa(a,a.Zj));a.Zj++;return!0},T6=function(a,b,c){a.Mr=c;
a.jg=b.Xg;a.F||WDa(a)},Y6=function(a){null!=a.Ri&&(g.x.clearTimeout(a.Ri),a.Ri=null)},aEa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},a7=function(a,b){if(2==b||9==b){var c=null;
a.Bd&&(c=null);var d=(0,g.B)(a.CX,a);c||(c=new g.Im("//web.archive.org/web/20180901000415/https://www.google.com/images/cleardot.gif"),i6(c));LDa(c.toString(),1E4,d)}else K6(2);bEa(a,b)},bEa=function(a,b){a.o=0;
a.Bd&&a.Bd.qz(b);UDa(a);TDa(a)},UDa=function(a){a.o=0;
a.jg=-1;if(a.Bd)if(0==a.C.length&&0==a.A.length)a.Bd.Ls();else{g.Ya(a.C);var b=g.Ya(a.A);a.C.length=0;a.A.length=0;a.Bd.Ls(b)}},S6=function(a,b,c){var d=g.Sm(c);
if(""!=d.A)b&&g.Km(d,b+"."+d.A),g.Lm(d,d.D);else{var e=window.location;d=bDa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.km&&g.Kb(a.km,function(a,b){g.Rm(d,b,a)});
g.Rm(d,"VER",a.Qi);W6(a,d);return d},P6=function(a,b){if(!g.Ba(a))throw Error("Fn must not be null and must be a function");
return g.x.setTimeout(function(){a()},b)},K6=function(a){b7.dispatchEvent(new QDa(b7,a))},cEa=function(){},dEa=function(a,b){this.action=a;
this.params=b||{}},c7=function(a,b){g.M.call(this);
this.o=new g.nu(this.KV,0,this);g.N(this,this.o);this.Cd=5E3;this.A=0;if(g.Ba(a))b&&(a=(0,g.B)(a,b));else if(a&&g.Ba(a.handleEvent))a=(0,g.B)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},d7=function(a,b,c){this.L=a;
this.F=b;this.B=new g.kD;this.A=new c7(this.mY,this);this.o=this.gb=null;this.K=!1;this.D=null;this.J="";this.H=this.C=0;this.G=[];this.N=c||!1},eEa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.Mr,sessionId:a.o.B,arrayId:a.o.Mk}},fEa=function(a,b){a.H=b||0;
a.A.stop();a.o&&(3==a.o.o&&ZDa(a.o),VDa(a.o));a.H=0},e7=function(a){return!!a.o&&3==a.o.o},gEa=function(a,b){(a.F.loungeIdToken=b)||a.A.stop()},f7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.A=!0;a=a||window.document.location.href;var b=g.Tg(a)||"";b&&(this.port=":"+b);this.domain=g.Sg(a)||"";a=g.Ib;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Bb(a,"10.0")&&(this.A=!1))},g7=function(a,b){var c=a.o;
if(g.u(void 0)?0:a.A)c="https://"+a.domain+a.port+a.o;return g.bh(c+b,{})},h7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Fa(a.C,d,!0),onError:g.Fa(a.B,e),Gd:g.Fa(a.D,e)};c&&(a.Qb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.BE(b,a)},kEa=function(){var a=hEa;
iEa();i7.push(a);jEa(i7)},j7=function(a,b){iEa();
var c=i7,d=lEa(a,String(b));g.Qa(c)?mEa(d):(jEa(c),(0,g.D)(c,function(a){a(d)}))},iEa=function(){i7||(i7=g.y("yt.mdx.remote.debug.handlers_")||[],g.ua("yt.mdx.remote.debug.handlers_",i7,void 0))},mEa=function(a){var b=(k7+1)%50;
k7=b;l7[b]=a;m7||(m7=49==b)},jEa=function(a){var b=l7;
if(b[0]){var c=k7,d=m7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.D)(a,function(a){a(e)})}while(d!=c);
l7=Array(50);k7=-1;m7=!1}},lEa=function(a,b){var c=((0,g.H)()-nEa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},n7=function(a){g.WF.call(this);
this.G=a;this.o=[]},oEa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},pEa=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Vd)(a.o,function(a){return!!q6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=oEa(a,b[d])||c;return c},qEa=function(a,b){var c=a.o.length;
a.o=(0,g.Vd)(a.o,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.o.length<c},o7=function(a,b,c,d){g.WF.call(this);
this.F=a;this.D=b;this.B=c;this.C=d;this.A=0;this.o=null;this.Ea=window.NaN},q7=function(a){n7.call(this,"LocalScreenService");
this.B=a;this.A=window.NaN;p7(this);this.info("Initializing with "+o6(this.o))},rEa=function(a){if(a.o.length){var b=(0,g.I)(a.o,function(a){return a.id}),c=g7(a.B,"/pairing/get_lounge_token_batch");
h7(a.B,c,{screen_ids:b.join(",")},(0,g.B)(a.KL,a),(0,g.B)(a.JL,a))}},p7=function(a){var b=jDa(pDa());
b=(0,g.Vd)(b,function(a){return!a.uuid});
return pEa(a,b)},r7=function(a,b){rDa((0,g.I)(a.o,hDa));
b&&qDa()},t7=function(a,b){g.WF.call(this);
this.F=b;var c=g.hH("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.F(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Pa(c,l)}this.o=d;this.D=a;this.B=this.C=window.NaN;this.A=null;s7("Initialized with "+g.Kg(this.o))},sEa=function(a,b,c){var d=g7(a.D,"/pairing/get_screen_availability");
h7(a.D,d,{lounge_token:b.token},(0,g.B)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.B)(function(){c(!1)},a))},u7=function(a,b){a:if(g.Pb(b)!=g.Pb(a.o))var c=!1;
else{c=g.Sb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(s7("Updated online screens: "+g.Kg(a.o)),a.o=b,a.V("screenChange"));tEa(a)},v7=function(a){(0,window.isNaN)(a.B)||g.mE(a.B);
a.B=g.kE((0,g.B)(a.Fw,a),0<a.C&&a.C<(0,g.H)()?2E4:1E4)},s7=function(a){j7("OnlineScreenService",a)},uEa=function(a){var b={};
(0,g.D)(a.F(),function(a){a.token?b[a.token]=a.id:this.jc("Requesting availability of screen w/o lounge token.")});
return b},tEa=function(a){a=g.Sb(g.Lb(a.o,function(a){return a}));
g.gb(a);a.length?g.gH("yt-remote-online-screen-ids",a.join(","),60):g.iH("yt-remote-online-screen-ids")},w7=function(a){n7.call(this,"ScreenService");
this.F=a;this.A=this.B=null;this.C=[];this.D={};vEa(this)},xEa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.Ce();if(k=(c?r6(k,c):null)||r6(k,b)){k.uuid=b;var l=x7(a,k);sEa(a.A,l,function(a){e(a?l:null)})}else c?wEa(a,c,(0,g.B)(function(a){var f=x7(this,new l6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));sEa(this.A,f,function(a){e(a?f:null)})},a),f):e(null)},yEa=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},wEa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Qb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.BE(g7(a.F,"/pairing/get_lounge_token_batch"),e)},zEa=function(a){a.o=a.B.Ce();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+o6(a.o))},vEa=function(a){y7(a);
a.B=new q7(a.F);a.B.subscribe("screenChange",(0,g.B)(a.YL,a));zEa(a);a.C=jDa(g.hH("yt-remote-automatic-screen-cache")||[]);y7(a);a.info("Initializing automatic screens: "+o6(a.C));a.A=new t7(a.F,(0,g.B)(a.Ce,a,!0));a.A.subscribe("screenChange",(0,g.B)(function(){this.V("onlineScreenChange")},a))},x7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=r6(a.C,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.C.push(b),g.gH("yt-remote-automatic-screen-cache",(0,g.I)(a.C,hDa)));y7(a);a.D[b.uuid]=b.id;g.gH("yt-remote-device-id-map",a.D,31536E3);return b},y7=function(a){a.D=g.hH("yt-remote-device-id-map")||{}},z7=function(a,b,c){g.WF.call(this);
this.N=c;this.J=a;this.A=b;this.B=null},A7=function(a,b){j7(a.N,b)},B7=function(a,b){z7.call(this,a,b,"CastSession");
this.o=null;this.C=0;this.F=(0,g.B)(this.sY,this);this.D=(0,g.B)(this.vW,this);this.C=g.kE((0,g.B)(function(){AEa(this,null)},this),12E4)},BEa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Kg(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.z,(0,g.B)(function(){A7(this,"Failed to send message: getMdxSessionStatus.")},a)):A7(a,"Sending yt message without session: "+g.Kg(b))},AEa=function(a,b){g.mE(a.C);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.B||a.B.id!=b){var c=(0,g.B)(a.Fq,a),d=(0,g.B)(a.Ie,a);a.zA(b,c,d,5)}}else a.Ie(Error("Waiting for session status timed out."))},C7=function(a,b,c){z7.call(this,a,b,"DialSession");
this.C=this.H=null;this.K="";this.O=c;this.D=null;this.G=g.z;this.F=window.NaN;this.L=(0,g.B)(this.vY,this);this.o=g.z},CEa=function(a){a.o=a.J.VG(a.K,a.A.label,a.A.friendlyName,(0,g.B)(function(a){this.o=g.z;
this.Fq(a)},a),(0,g.B)(function(a){this.o=g.z;
this.Ie(a)},a))},DEa=function(a){var b={};
b.pairingCode=a.K;b.theme=a.O;if(a.D){var c=a.D.currentTime||0;b.v=a.D.videoId;b.t=c}tDa()&&(b.env_useStageMdx=1);return g.$g(b)},D7=function(a,b){z7.call(this,a,b,"ManualSession");
this.o=g.kE((0,g.B)(this.Ok,this,null),150)},E7=function(a,b,c,d){g.WF.call(this);
this.A=a;this.G=b||"233637DE";this.F=c||"cl";this.H=d||!1;this.o=null;this.D=!1;this.B=[];this.C=(0,g.B)(this.WU,this)},EEa=function(a,b){return b?g.La(a.B,function(a){return m6(b,a.label)},a):null},F7=function(a){j7("Controller",a)},hEa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},G7=function(a){return a.D||!!a.B.length||!!a.o},H7=function(a,b,c){b!=a.o&&(g.mf(a.o),(a.o=b)?(c?a.V("yt-remote-cast2-receiver-resumed",b.A):a.V("yt-remote-cast2-receiver-selected",
b.A),b.subscribe("sessionScreen",(0,g.B)(a.AE,a,b)),b.B?a.V("yt-remote-cast2-session-change",b.B):c&&a.o.Ok(null)):a.V("yt-remote-cast2-session-change",null))},FEa=function(a){var b=a.A.UG(),c=a.o&&a.o.A;
a=(0,g.I)(b,function(a){c&&m6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=EEa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},LEa=function(a,b,c,d,e,f,k){GEa()?HEa(b,e,f,k)&&(J7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?IEa(a,c):(window.__onGCastApiAvailable=function(b,d){b?IEa(a,c):(K7("Failed to load cast API: "+d),L7(!1),J7(!1),g.iH("yt-remote-cast-available"),g.iH("yt-remote-cast-receiver"),JEa(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20180901000415/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):wDa():C6("CriOS")?BDa():C6("Android")&&C6("Chrome/")&&window.navigator.presentation?CDa():window.chrome&&window.navigator.presentation&&!C6("Edge")?(D6(),z6(KEa.map(zDa))):A6())):I7("Cannot initialize because not running Chrome")},JEa=function(){I7("dispose");
var a=M7();a&&a.dispose();g.ua("yt.mdx.remote.cloudview.instance_",null,void 0);MEa(!1);g.iG(N7);N7.length=0},O7=function(){return!!g.hH("yt-remote-cast-installed")},NEa=function(){var a=g.hH("yt-remote-cast-receiver");
return a?a.friendlyName:null},OEa=function(){I7("clearCurrentReceiver");
g.iH("yt-remote-cast-receiver")},PEa=function(){return O7()?M7()?M7().getCastSession():(K7("getCastSelector: Cast is not initialized."),null):(K7("getCastSelector: Cast API is not installed!"),null)},Q7=function(){O7()?M7()?P7()?(I7("Requesting cast selector."),M7().requestSession()):(I7("Wait for cast API to be ready to request the session."),N7.push(g.hG("yt-remote-cast2-api-ready",Q7))):K7("requestCastSelector: Cast is not initialized."):K7("requestCastSelector: Cast API is not installed!")},R7=
function(a,b){P7()?M7().setConnectedScreenStatus(a,b):K7("setConnectedScreenStatus called before ready.")},GEa=function(){var a=0<=g.Ib.search(/ (CrMo|Chrome|CriOS)\//);
return g.xI||a},QEa=function(a,b){M7().init(a,b)},HEa=function(a,b,c,d){var e=!1;
M7()||(a=new E7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.gH("yt-remote-cast-available",a);g.lG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){I7("onReceiverSelected: "+a.friendlyName);
g.gH("yt-remote-cast-receiver",a);g.lG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){I7("onReceiverResumed: "+a.friendlyName);
g.gH("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){I7("onSessionChange: "+n6(a));
a||g.iH("yt-remote-cast-receiver");g.lG("yt-remote-cast2-session-change",a)}),g.ua("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
I7("cloudview.createSingleton_: "+e);return e},M7=function(){return g.y("yt.mdx.remote.cloudview.instance_")},IEa=function(a,b){L7(!0);
J7(!1);QEa(a,function(a){a?(MEa(!0),g.kG("yt-remote-cast2-api-ready")):(K7("Failed to initialize cast API."),L7(!1),g.iH("yt-remote-cast-available"),g.iH("yt-remote-cast-receiver"),JEa());b(a)})},I7=function(a){j7("cloudview",a)},K7=function(a){j7("cloudview",a)},L7=function(a){I7("setCastInstalled_ "+a);
g.gH("yt-remote-cast-installed",a)},P7=function(){return!!g.y("yt.mdx.remote.cloudview.apiReady_")},MEa=function(a){I7("setApiReady_ "+a);
g.ua("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J7=function(a){g.ua("yt.mdx.remote.cloudview.initializing_",a,void 0)},S7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.o=-1;this.muted=!1;this.audioTrackId=null;this.G=this.H=0;this.A=null;this.hasNext=this.ng=!1;this.K=this.J=this.B=this.D=0;this.C=window.NaN;this.F=!1;this.reset(a)},T7=function(a){a.audioTrackId=null;
a.A=null;a.o=-1;a.ng=!1;a.hasNext=!1;a.H=0;a.G=(0,g.H)();a.D=0;a.B=0;a.J=0;a.K=0;a.C=window.NaN;a.F=!1},U7=function(a){return a.rb()?((0,g.H)()-a.G)/1E3:0},V7=function(a,b){a.H=b;
a.G=(0,g.H)()},W7=function(a){switch(a.o){case 1:case 1081:return((0,g.H)()-a.G)/1E3+a.H;
case -1E3:return 0}return a.H},X7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T7(a)},Y7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.o;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.fc(a.A);b.hasPrevious=a.ng;b.hasNext=a.hasNext;b.playerTime=a.H;b.playerTimeAt=a.G;b.seekableStart=a.D;b.seekableEnd=a.B;b.duration=a.J;b.loadedTime=a.K;b.liveIngestionTime=a.C;return b},$7=function(a,b){g.WF.call(this);
this.o=0;this.C=a;this.F=[];this.D=new g.AC;this.B=this.A=null;this.J=(0,g.B)(this.qS,this);this.G=(0,g.B)(this.zn,this);this.H=(0,g.B)(this.pS,this);this.K=(0,g.B)(this.CS,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Ix,this),REa(this))):c=3;0!=c&&(b?this.Ix(c):g.kE((0,g.B)(function(){this.Ix(c)},this),0));
var d=PEa();d&&Z7(this,d);this.subscribe("yt-remote-cast2-session-change",this.K)},a8=function(a){return new S7(a.C.getPlayerContextData())},REa=function(a){(0,g.D)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.F.push(this.C.subscribe(a,g.Fa(this.RU,a),this))},a)},SEa=function(a){(0,g.D)(a.F,function(a){this.C.unsubscribeByKey(a)},a);
a.F.length=0},b8=function(a,b){50>a.D.Cc()&&g.CC(a.D,b)},d8=function(a,b,c){var d=a8(a);
V7(d,c);-1E3!=d.o&&(d.o=b);c8(a,d)},e8=function(a,b,c){a.C.sendMessage(b,c)},c8=function(a,b){SEa(a);
a.C.setPlayerContextData(Y7(b));REa(a)},Z7=function(a,b){a.B&&(a.B.removeUpdateListener(a.J),a.B.removeMediaListener(a.G),a.zn(null));
a.B=b;a.B&&(j7("CP","Setting cast session: "+a.B.sessionId),a.B.addUpdateListener(a.J),a.B.addMediaListener(a.G),a.B.media.length&&a.zn(a.B.media[0]))},TEa=function(a){var b=a.A.media,c=a.A.customData;
if(b&&c){var d=a8(a);b.contentId!=d.videoId&&j7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.o=c.playerState;V7(d,a.A.getEstimatedTime());c8(a,d)}else j7("CP","No cast media video. Ignoring state update.")},f8=function(a,b,c){return(0,g.B)(function(a){this.jc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.jc("Retrying "+b+" using MDx browser channel."),e8(this,b,c))},a)},g8=function(a,b,c){g.WF.call(this);
this.D=window.NaN;this.O=!1;this.K=this.J=this.L=this.N=window.NaN;this.Y=[];this.C=this.G=this.B=this.ib=this.o=null;this.ua=a;this.Y.push(g.FF(window,"beforeunload",(0,g.B)(this.AL,this)));this.A=[];this.ib=new S7;this.ca=b.id;this.o=UEa(this,c);this.o.subscribe("handlerOpened",this.uS,this);this.o.subscribe("handlerClosed",this.rS,this);this.o.subscribe("handlerError",this.sS,this);this.o.subscribe("handlerMessage",this.tS,this);gEa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.ib.videoId;g.jH()&&g.gH("yt-remote-session-video-id",a)},this)},h8=function(a){j7("conn",a)},UEa=function(a,b){return new d7(g7(a.ua,"/bc"),b)},i8=function(a,b){a.V("proxyStateChange",b)},VEa=function(a){a.D=g.kE((0,g.B)(function(){h8("Connecting timeout");
this.F(1)},a),2E4)},j8=function(a){g.mE(a.D);
a.D=window.NaN},k8=function(a){g.mE(a.N);
a.N=window.NaN},WEa=function(a){l8(a);
a.L=g.kE((0,g.B)(function(){m8(this,"getNowPlaying")},a),2E4)},l8=function(a){g.mE(a.L);
a.L=window.NaN},YEa=function(a,b){b&&(j8(a),k8(a));
b==(e7(a.o)&&(0,window.isNaN)(a.D))?b&&(i8(a,1),m8(a,"getSubtitlesTrack")):b?(a.aa()&&a.ib.reset(),i8(a,1),m8(a,"getNowPlaying"),XEa(a)):a.F(1)},ZEa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.ib.videoId&&(g.$b(b.params)?a.ib.A=null:a.ib.A=b.params,a.V("remotePlayerChange"))},$Ea=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.ib.listId=b.params.listId||a.ib.listId;X7(a.ib,c,d);a.V("remoteQueueChange")},bFa=function(a,b){b.params=b.params||{};
$Ea(a,b);aFa(a,b);a.V("autoplayDismissed")},aFa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
V7(a.ib,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.ib.o&&(c=-1E3);a.ib.o=c;c=Number(b.params.loadedTime);a.ib.K=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.ib.J=(0,window.isNaN)(c)?0:c;c=a.ib;var d=Number(b.params.liveIngestionTime);c.C=d;c.F=(0,window.isNaN)(d)?!1:!0;c=a.ib;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.D=(0,window.isNaN)(d)?0:d;c.B=(0,window.isNaN)(e)?0:e;1==a.ib.o?WEa(a):l8(a);
a.V("remotePlayerChange")},cFa=function(a,b){if(-1E3!=a.ib.o){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.ib.o=c;c=(0,window.parseInt)(b.params.currentTime,10);V7(a.ib,(0,window.isNaN)(c)?0:c);a.V("remotePlayerChange")}},dFa=function(a,b){var c="true"==b.params.muted;
a.ib.volume=(0,window.parseInt)(b.params.volume,10);a.ib.muted=c;a.V("remotePlayerChange")},eFa=function(a,b){a.G=b.params.videoId;
a.V("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},fFa=function(a,b){var c="true"==b.params.hasNext;
a.ib.ng="true"==b.params.hasPrevious;a.ib.hasNext=c;a.V("previousNextChange")},XEa=function(a){g.mE(a.K);
a.K=g.kE((0,g.B)(a.F,a,1),864E5)},m8=function(a,b,c){c?h8("Sending: action="+b+", params="+g.Kg(c)):h8("Sending: action="+b);
a.o.sendMessage(b,c)},n8=function(a){n7.call(this,"ScreenServiceProxy");
this.ld=a;this.A=[];this.A.push(this.ld.$_s("screenChange",(0,g.B)(this.qY,this)));this.A.push(this.ld.$_s("onlineScreenChange",(0,g.B)(this.rU,this)))},kFa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.eE("MDX_CONFIG")||b;lDa();v6();o8||(o8=new f7(b?b.loungeApiHost:void 0),tDa()&&(o8.o="/api/loungedev"));p8||(p8=g.y("yt.mdx.remote.deferredProxies_")||[],g.ua("yt.mdx.remote.deferredProxies_",p8,void 0));gFa();var c=q8();if(!c){var d=new w7(o8);g.ua("yt.mdx.remote.screenService_",d,void 0);c=q8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);LEa(a,d,function(a){a?r8()&&R7(r8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.lG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.y("yt.mdx.remote.initialized_")&&(g.ua("yt.mdx.remote.initialized_",!0,void 0),s8("Initializing: "+g.Kg(b)),t8.push(g.hG("yt-remote-cast2-availability-change",function(){g.lG("yt-remote-receiver-availability-change")})),t8.push(g.hG("yt-remote-cast2-receiver-selected",function(){u8(null);
g.lG("yt-remote-auto-connect","cast-selector-receiver")})),t8.push(g.hG("yt-remote-cast2-receiver-resumed",function(){g.lG("yt-remote-receiver-resumed","cast-selector-receiver")})),t8.push(g.hG("yt-remote-cast2-session-change",hFa)),t8.push(g.hG("yt-remote-connection-change",function(a){a?R7(r8(),"YouTube TV"):v8()||(R7(null,null),OEa())})),a=w8(),b.isAuto&&(a.id+="#dial"),g.bG("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),s8(" -- with channel params: "+
g.Kg(a)),iFa(a),c.start(),r8()||jFa())},mFa=function(){var a=lFa();
O7()&&g.hH("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},lFa=function(){var a=q8().ld.$_gos();
var b=x8();b&&y8()&&(q6(a,b)||a.push(b));return kDa(a)},z8=function(){var a=nFa();
!a&&O7()&&NEa()&&(a={key:"cast-selector-receiver",name:NEa()});return a},nFa=function(){var a=lFa(),b=x8();
b||(b=v8());return g.La(a,function(a){return b&&m6(b,a.key)?!0:!1})},x8=function(){var a=r8();
if(!a)return null;var b=q8().Ce();return r6(b,a)},hFa=function(a){s8("remote.onCastSessionChange_: "+n6(a));
if(a){var b=x8();b&&b.id==a.id?R7(b.id,"YouTube TV"):(b&&A8(),B8(a,1))}else y8()&&A8()},A8=function(){P7()?M7().stopSession():K7("stopSession called before API ready.");
var a=y8();a&&(a.disconnect(1),C8(null))},D8=function(){var a=y8();
return!!a&&3!=a.getProxyState()},s8=function(a){j7("remote",a)},q8=function(){if(!E8){var a=g.y("yt.mdx.remote.screenService_");
E8=a?new n8(a):null}return E8},r8=function(){return g.y("yt.mdx.remote.currentScreenId_")},oFa=function(a){g.ua("yt.mdx.remote.currentScreenId_",a,void 0)},pFa=function(){return g.y("yt.mdx.remote.connectData_")},u8=function(a){g.ua("yt.mdx.remote.connectData_",a,void 0)},y8=function(){return g.y("yt.mdx.remote.connection_")},C8=function(a){var b=y8();
u8(null);a||oFa("");g.ua("yt.mdx.remote.connection_",a,void 0);p8&&((0,g.D)(p8,function(b){b(a)}),p8.length=0);
b&&!a?g.lG("yt-remote-connection-change",!1):!b&&a&&g.lG("yt-remote-connection-change",!0)},v8=function(){var a=g.jH();
if(!a)return null;var b=q8().Ce();return r6(b,a)},B8=function(a,b){x8()&&x8();
oFa(a.id);var c=new g8(o8,a,w8());c.connect(b,pFa());c.subscribe("beforeDisconnect",function(a){g.lG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){y8()&&C8(null)});
C8(c)},jFa=function(){var a=v8();
a?(s8("Resume connection to: "+n6(a)),B8(a,0)):(w6(),OEa(),s8("Skipping connecting because no session screen found."))},gFa=function(){var a=w8();
if(g.$b(a)){a=u6();var b=g.hH("yt-remote-session-name")||"",c=g.hH("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.ua("yt.mdx.remote.channelParams_",a,void 0)}},w8=function(){return g.y("yt.mdx.remote.channelParams_")||{}},iFa=function(a){a?(g.gH("yt-remote-session-app",a.app),g.gH("yt-remote-session-name",a.name)):(g.iH("yt-remote-session-app"),g.iH("yt-remote-session-name"));
g.ua("yt.mdx.remote.channelParams_",a,void 0)},F8=function(a,b,c){g.M.call(this);
this.G=a;this.T=b;this.A=new g.TF(this);g.N(this,this.A);this.A.R(b,"onCaptionsTrackListChanged",this.JT);this.A.R(b,"captionschanged",this.oS);this.A.R(b,"captionssettingschanged",this.gG);this.A.R(b,"videoplayerreset",this.Gq);this.A.R(b,"mdxautoplaycancel",this.AK);this.O=this.A.R(b,"onVolumeChange",this.hE);this.F=!1;this.o=c;c.subscribe("proxyStateChange",this.wE,this);c.subscribe("remotePlayerChange",this.Cn,this);c.subscribe("remoteQueueChange",this.Gq,this);c.subscribe("autoplayUpNext",this.SD,
this);c.subscribe("previousNextChange",this.tE,this);c.subscribe("nowAutoplaying",this.kE,this);c.subscribe("autoplayDismissed",this.RD,this);this.suggestion=null;this.H=new g.XP(64);this.B=new g.nu(this.cG,500,this);g.N(this,this.B);this.C=new g.nu(this.dG,1E3,this);g.N(this,this.C);this.K=new E6(this.RX,0,this);g.N(this,this.K);this.D={};this.L=new g.nu(this.CG,1E3,this);g.N(this,this.L);this.J=new g.hl(this.sQ,1E3,this);g.N(this,this.J);this.N=g.z;this.gG();this.Gq();this.Cn()},G8=function(a,b){var c=
a.G,d=a.T.getVideoData().lengthSeconds;
c.J=b||0;c.o.V("progresssync",b,d)},qFa=function(a){G8(a,0);
a.B.stop();H8(a,new g.XP(64))},J8=function(a,b){if(I8(a)&&!a.F){var c=null;
b&&(c={style:a.T.vj()},g.hc(c,b));a.o.RF(a.T.getVideoData(1).videoId,c);a.D=a8(a.o).A}},K8=function(a,b){var c=a.T.vg();
if(c){var d=c.Ae();var e=c.listId.toString()}var f=a.T.getVideoData(1);c=a.o;var k=f.videoId,l=d;d=f.playerParams;var m=f.Hk;f=aDa(f);var n=a8(c);l=l||0;var p={videoId:k,currentIndex:l};X7(n,k,l);g.u(b)&&(V7(n,b),p.currentTime=b);g.u(e)&&(p.listId=e);null!=d&&(p.playerParams=d);null!=m&&(p.clickTrackingParams=m);null!=f&&(p.locationInfo=g.Kg(f));e8(c,"setPlaylist",p);e||c8(c,n);H8(a,new g.XP(1))},rFa=function(a,b){if(b){var c=a.T.Fc("captions","tracklist",{tB:1});
c&&c.length?(a.T.Vd("captions","track",b),a.F=!1):(a.T.Wk("captions"),a.F=!0)}else a.T.Vd("captions","track",{})},I8=function(a){return a8(a.o).videoId==a.T.getVideoData(1).videoId},H8=function(a,b){a.C.stop();
var c=a.H;if(!g.bQ(c,b)){var d=g.X(b,2);d!=g.X(a.H,2)&&g.fU(a.T,d);a.H=b;sFa(a.G,c,b)}},L8=function(a){g.W.call(this,{I:"div",
M:"ytp-remote",P:[{I:"div",M:"ytp-remote-display-status",P:[{I:"div",M:"ytp-remote-display-status-icon",P:[g.Gqa()]},{I:"div",M:"ytp-remote-display-status-text",da:"{{statustext}}"}]}]});this.B=new g.fV(this,250);g.N(this,this.B);this.C=a;this.R(a,"presentingplayerstatechange",this.D);tFa(this,g.aU(a))},tFa=function(a,b){if(3==a.C.Sa()){var c={RECEIVER_NAME:a.C.Fc("remote","currentReceiver").name};
c=g.X(b,128)?g.f0("Error on $RECEIVER_NAME",c):b.rb()||g.X(b,4)?g.f0("Playing on $RECEIVER_NAME",c):g.f0("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.B.show()}else a.B.hide()},M8=function(a,b){g.CY.call(this,"Play on",0,a,b);
this.T=a;this.H={};this.R(a,"onMdxReceiversChange",this.K);this.R(a,"presentingplayerstatechange",this.K);this.K()},N8=function(a){g.GU.call(this,a);
this.B={key:p6(),name:"This computer"};this.D=null;this.F=[];this.K=this.A=null;this.H=[this.B];this.C=this.B;this.G=new g.XP(64);this.J=0;if(!g.aN(g.Y(this.o))){a=this.o;var b=g.ZH(a);b&&(b=b.mn())&&(b=new M8(a,b),g.N(this,b));b=new L8(a);g.N(this,b);g.wU(a,b.element,4)}},sFa=function(a,b,c){a.G=c;
a.o.V("presentingplayerstatechange",new g.gQ(c,b))},O8=function(a,b){if(b.key!=a.C.key)if(b.key==a.B.key)A8();
else{a.C=b;var c=a.o.getPlaylistId();var d=a.o.getVideoData(1);var e=d.videoId;if(c||e){var f=a.o.vg();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.Zb(l).videoId}else k=[e];f=a.o.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.Hk,index:Math.max(a.o.vC(),0),currentTime:0==f?void 0:f};(d=aDa(d))&&(c.locationInfo=d);d=c}else d=null;s8("Connecting to: "+g.Kg(b));"cast-selector-receiver"==b.key?(u8(d||null),P7()?M7().setLaunchParams(d||null):
K7("setLaunchParams called before ready.")):!d&&D8()&&r8()==b.key?g.lG("yt-remote-connection-change",!0):(A8(),u8(d||null),d=q8().Ce(),(d=r6(d,b.key))&&B8(d,1))}},IDa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},O6={"'":"\\'"},uFa={},gDa={FZ:"atp",n4:"ska",C3:"que",N2:"mus",i4:"sus",P0:"dsp"};
k6.prototype.Ro=function(){var a=new k6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.B=this.B;a.A=this.A;a.o=this.o};
var x6,t6="",B6=y6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",ADa=y6("loadCastFramework")||y6("loadCastApplicationFramework"),KEa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.C(E6,g.M);g.h=E6.prototype;g.h.vL=function(a){this.C=arguments;this.o=!1;this.Ea?this.B=(0,g.H)()+this.Cd:this.Ea=g.Eg(this.D,this.Cd)};
g.h.stop=function(){this.Ea&&(g.Fg(this.Ea),this.Ea=null);this.B=null;this.o=!1;this.C=[]};
g.h.pause=function(){++this.A};
g.h.resume=function(){this.A&&(--this.A,!this.A&&this.o&&(this.o=!1,this.F.apply(null,this.C)))};
g.h.X=function(){this.stop();E6.fa.X.call(this)};
g.h.wL=function(){this.B?(this.Ea=g.Eg(this.D,this.B-(0,g.H)()),this.B=null):(this.Ea=null,this.A?this.o=!0:(this.o=!1,this.F.apply(null,this.C)))};F6.prototype.stringify=function(a){return g.x.JSON.stringify(a,void 0)};
F6.prototype.parse=function(a){return g.x.JSON.parse(a,void 0)};g.h=G6.prototype;g.h.cj=null;g.h.Rf=!1;g.h.Il=null;g.h.Bx=null;g.h.rl=null;g.h.yk=null;g.h.Rh=null;g.h.xi=null;g.h.Cj=null;g.h.Vc=null;g.h.Vn=0;g.h.Sf=null;g.h.Or=null;g.h.Sh=null;g.h.Gm=-1;g.h.xF=!0;g.h.Oi=!1;g.h.St=0;g.h.Uq=null;var GDa={},J6={};g.h=G6.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.LW=function(a){a=a.target;var b=this.Uq;b&&3==g.wx(a)?b.Cm():this.NG(a)};
g.h.NG=function(a){try{if(a==this.Vc)a:{var b=g.wx(this.Vc),c=this.Vc.A,d=this.Vc.getStatus();if(g.Id&&!g.uc(10)||g.Kd&&!g.tc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.qf&&!g.Ax(this.Vc))break a;this.Oi||4!=b||7==c||(8==c||0>=d?this.o.Kf(3):this.o.Kf(2));Q6(this);var e=this.Vc.getStatus();this.Gm=e;var f=g.Ax(this.Vc);(this.Rf=200==e)?(4==b&&M6(this),this.D?(HDa(this,b,f),g.qf&&this.Rf&&3==b&&(this.Z.W(this.A,"tick",this.HW),this.A.start())):L6(this,f),this.Rf&&!this.Oi&&(4==b?this.o.Eq(this):
(this.Rf=!1,I6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Sh=3,K6(13)):(this.Sh=0,K6(14)),M6(this),N6(this))}}catch(k){this.Vc&&g.Ax(this.Vc)}finally{}};
g.h.HW=function(){var a=g.wx(this.Vc),b=g.Ax(this.Vc);this.Vn<b.length&&(Q6(this),HDa(this,a,b),this.Rf&&4!=a&&I6(this))};
g.h.TV=function(a){P6((0,g.B)(this.SV,this,a),0)};
g.h.SV=function(a){this.Oi||(Q6(this),L6(this,a),I6(this))};
g.h.FE=function(a){P6((0,g.B)(this.RV,this,a),0)};
g.h.RV=function(a){this.Oi||(M6(this),this.Rf=a,this.o.Eq(this),this.o.Kf(4))};
g.h.cancel=function(){this.Oi=!0;M6(this)};
g.h.jW=function(){this.Il=null;var a=(0,g.H)();0<=a-this.Bx?(2!=this.yk&&this.o.Kf(3),M6(this),this.Sh=2,K6(18),N6(this)):KDa(this,this.Bx-a)};g.h=NDa.prototype;g.h.Qt=null;g.h.Je=null;g.h.Vq=!1;g.h.KA=null;g.h.hp=null;g.h.Lu=null;g.h.Rt=null;g.h.bf=null;g.h.Xg=-1;g.h.Fm=null;g.h.Rl=null;g.h.connect=function(a){this.Rt=a;a=S6(this.o,null,this.Rt);K6(3);this.KA=(0,g.H)();var b=this.o.H;null!=b?(this.Fm=b[0],(this.Rl=b[1])?(this.bf=1,ODa(this)):(this.bf=2,U6(this))):(j6(a,"MODE","init"),this.Je=new G6(this,void 0,void 0,void 0),this.Je.cj=this.Qt,H6(this.Je,a,!1,null,!0),this.bf=0)};
g.h.BK=function(a){if(a)this.bf=2,U6(this);else{K6(4);var b=this.o;b.jg=b.Dh.Xg;a7(b,9)}a&&this.Kf(2)};
g.h.Zs=function(a){return this.o.Zs(a)};
g.h.abort=function(){this.Je&&(this.Je.cancel(),this.Je=null);this.Xg=-1};
g.h.JA=function(){return!1};
g.h.xE=function(a,b){this.Xg=a.Gm;if(0==this.bf)if(b){try{var c=this.A.parse(b)}catch(d){c=this.o;c.jg=this.Xg;a7(c,2);return}this.Fm=c[0];this.Rl=c[1]}else c=this.o,c.jg=this.Xg,a7(c,2);else if(2==this.bf)if(this.Vq)K6(7),this.Lu=(0,g.H)();else if("11111"==b){if(K6(6),this.Vq=!0,this.hp=(0,g.H)(),c=this.hp-this.KA,!g.Id||g.uc(10)||500>c)this.Xg=200,this.Je.cancel(),K6(12),T6(this.o,this,!0)}else K6(8),this.hp=this.Lu=(0,g.H)(),this.Vq=!1};
g.h.Eq=function(){this.Xg=this.Je.Gm;if(this.Je.Rf)0==this.bf?this.Rl?(this.bf=1,ODa(this)):(this.bf=2,U6(this)):2==this.bf&&((!g.Id||g.uc(10)?!this.Vq:200>this.Lu-this.hp)?(K6(11),T6(this.o,this,!1)):(K6(12),T6(this.o,this,!0)));else{0==this.bf?K6(9):2==this.bf&&K6(10);var a=this.o;a.jg=this.Xg;a7(a,2)}};
g.h.Mn=function(){return this.o.Mn()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Kf=function(a){this.o.Kf(a)};g.h=V6.prototype;g.h.km=null;g.h.ke=null;g.h.Bc=null;g.h.Pt=null;g.h.lp=null;g.h.gz=null;g.h.Ap=null;g.h.wn=0;g.h.HR=0;g.h.Bd=null;g.h.Jh=null;g.h.Jg=null;g.h.Ri=null;g.h.Dh=null;g.h.Mr=null;g.h.Mk=-1;g.h.IB=-1;g.h.jg=-1;g.h.mk=0;g.h.Zj=0;g.h.Qi=8;var b7=new g.Pf;g.C(QDa,g.of);g.C(RDa,g.of);g.C(SDa,g.of);g.h=V6.prototype;g.h.connect=function(a,b,c,d,e){K6(0);this.Pt=b;this.km=c||{};d&&g.u(e)&&(this.km.OSID=d,this.km.OAID=e);this.F?(P6((0,g.B)(this.Cz,this,a),100),WDa(this)):this.Cz(a)};
g.h.Cz=function(a){this.Dh=new NDa(this);this.Dh.Qt=null;this.Dh.A=this.D;this.Dh.connect(a)};
g.h.JA=function(){return 0==this.o};
g.h.DE=function(a){this.Jh=null;ZDa(this,a)};
g.h.CE=function(){this.Jg=null;this.Bc=new G6(this,this.B,"rpc",this.G);this.Bc.cj=null;this.Bc.St=0;var a=this.gz.clone();g.Rm(a,"RID","rpc");g.Rm(a,"SID",this.B);g.Rm(a,"CI",this.Mr?"0":"1");g.Rm(a,"AID",this.Mk);W6(this,a);if(!g.Id||g.uc(10))g.Rm(a,"TYPE","xmlhttp"),H6(this.Bc,a,!0,this.Ap,!1);else{g.Rm(a,"TYPE","html");var b=this.Bc,c=!!this.Ap;b.yk=3;b.Rh=i6(a.clone());JDa(b,c)}};
g.h.xE=function(a,b){if(0!=this.o&&(this.Bc==a||this.ke==a))if(this.jg=a.Gm,this.ke==a&&3==this.o)if(7<this.Qi){try{var c=this.D.parse(b)}catch(f){c=null}if(g.za(c)&&3==c.length)if(0==c[0])a:{if(!this.Jg){if(this.Bc)if(this.Bc.rl+3E3<this.ke.rl)Y6(this),this.Bc.cancel(),this.Bc=null;else break a;$6(this);K6(19)}}else this.IB=c[1],0<this.IB-this.Mk&&37500>c[2]&&this.Mr&&0==this.Zj&&!this.Ri&&(this.Ri=P6((0,g.B)(this.jS,this),6E3));else a7(this,11)}else b!=uFa.I_.o&&a7(this,11);else if(this.Bc==a&&
Y6(this),!g.F(b)){c=this.D.parse(b);g.za(c);for(var d=0;d<c.length;d++){var e=c[d];this.Mk=e[0];e=e[1];2==this.o?"c"==e[0]?(this.B=e[1],this.Ap=e[2],e=e[3],null!=e?this.Qi=e:this.Qi=6,this.o=3,this.Bd&&this.Bd.uz(),this.gz=S6(this,this.Mn()?this.Ap:null,this.Pt),$Da(this)):"stop"==e[0]&&a7(this,7):3==this.o&&("stop"==e[0]?a7(this,7):"noop"!=e[0]&&this.Bd&&this.Bd.rz(e),this.Zj=0)}}};
g.h.jS=function(){null!=this.Ri&&(this.Ri=null,this.Bc.cancel(),this.Bc=null,$6(this),K6(20))};
g.h.Eq=function(a){if(this.Bc==a){Y6(this);this.Bc=null;var b=2}else if(this.ke==a)this.ke=null,b=1;else return;this.jg=a.Gm;if(0!=this.o)if(a.Rf)1==b?(b=(0,g.H)()-a.rl,b7.dispatchEvent(new RDa(b7,a.Cj?a.Cj.length:0,b,this.mk)),X6(this),this.C.length=0):$Da(this);else{var c=a.Sh,d;if(!(d=3==c||7==c||0==c&&0<this.jg)){if(d=1==b)this.ke||this.Jh||1==this.o||2<=this.mk?d=!1:(this.Jh=P6((0,g.B)(this.DE,this,a),aEa(this,this.mk)),this.mk++,d=!0);d=!(d||2==b&&$6(this))}if(d)switch(c){case 1:a7(this,5);
break;case 4:a7(this,10);break;case 3:a7(this,6);break;case 7:a7(this,12);break;default:a7(this,2)}}};
g.h.XK=function(a){if(!g.Pa(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.CX=function(a){a?K6(2):(K6(1),bEa(this,8))};
g.h.Zs=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.qx;a.H=!1;return a};
g.h.isActive=function(){return!!this.Bd&&this.Bd.isActive(this)};
g.h.Kf=function(a){b7.dispatchEvent(new SDa(b7,a))};
g.h.Mn=function(){return!(!g.Id||g.uc(10))};
g.h=cEa.prototype;g.h.uz=function(){};
g.h.rz=function(){};
g.h.qz=function(){};
g.h.Ls=function(){};
g.h.pA=function(){return{}};
g.h.isActive=function(){return!0};g.C(c7,g.M);g.h=c7.prototype;g.h.KV=function(){this.Cd=Math.min(3E5,2*this.Cd);this.B();this.A&&this.start()};
g.h.start=function(){var a=this.Cd+15E3*Math.random();g.ou(this.o,a);this.A=(0,g.H)()+a};
g.h.stop=function(){this.o.stop();this.A=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.Cd=5E3};g.C(d7,cEa);g.h=d7.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.be=function(a){return this.B.be(a)};
g.h.V=function(a,b){return this.B.V.apply(this.B,arguments)};
g.h.dispose=function(){this.K||(this.K=!0,g.mf(this.B),fEa(this),g.mf(this.A),this.A=null)};
g.h.la=function(){return this.K};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.J="";this.A.stop();this.D=a||null;this.C=b||0;a=this.L+"/test";b=this.L+"/bind";var d=new V6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.N),e=this.o;e&&(e.Bd=null);d.Bd=this;this.o=d;e?this.o.connect(a,b,this.F,e.B,e.Mk):c?this.o.connect(a,b,this.F,c.sessionId,c.arrayId):this.o.connect(a,b,this.F)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.hc(c,b);this.A.isActive()||2==(this.o?this.o.o:0)?this.G.push(c):e7(this)&&XDa(this.o,c)};
g.h.uz=function(){this.A.reset();this.D=null;this.C=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)XDa(this.o,a[b])}this.V("handlerOpened")};
g.h.qz=function(a){var b=2==a&&401==this.o.jg;4==a||b||this.A.start();this.V("handlerError",a)};
g.h.Ls=function(a){if(!this.A.isActive())this.V("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
g.h.pA=function(){var a={v:2};this.J&&(a.gsessionid=this.J);0!=this.C&&(a.ui=""+this.C);0!=this.H&&(a.ui=""+this.H);this.D&&g.hc(a,this.D);return a};
g.h.rz=function(a){"S"==a[0]?this.J=a[1]:"gracefulReconnect"==a[0]?(this.A.start(),VDa(this.o)):this.V("handlerMessage",new dEa(a[0],a[1]))};
g.h.mY=function(){this.A.isActive();var a=this.o,b=0;a.Bc&&b++;a.ke&&b++;0!=b||this.connect(this.D,this.C)};f7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
f7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
f7.prototype.D=function(a){a(Error("request timed out"))};var nEa=(0,g.H)(),i7=null,l7=Array(50),k7=-1,m7=!1;g.C(n7,g.WF);n7.prototype.Ce=function(){return this.o};
n7.prototype.contains=function(a){return!!q6(this.o,a)};
n7.prototype.get=function(a){return a?r6(this.o,a):null};
n7.prototype.info=function(a){j7(this.G,a)};g.C(o7,g.WF);var vFa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=o7.prototype;g.h.start=function(){!this.o&&(0,window.isNaN)(this.Ea)&&this.TG()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);(0,window.isNaN)(this.Ea)||(g.mE(this.Ea),this.Ea=window.NaN)};
g.h.X=function(){this.stop();o7.fa.X.call(this)};
g.h.TG=function(){this.Ea=window.NaN;this.o=g.BE(g7(this.F,"/pairing/get_screen"),{method:"POST",Qb:{pairing_code:this.D},timeout:5E3,onSuccess:(0,g.B)(this.oY,this),onError:(0,g.B)(this.nY,this),Gd:(0,g.B)(this.pY,this)})};
g.h.oY=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.B;c.name=this.C;this.V("pairingComplete",new l6(c))};
g.h.nY=function(a){this.o=null;a.status&&404==a.status?this.A>=vFa.length?this.V("pairingFailed",Error("DIAL polling timed out")):(a=vFa[this.A],this.Ea=g.kE((0,g.B)(this.TG,this),a),this.A++):this.V("pairingFailed",Error("Server error "+a.status))};
g.h.pY=function(){this.o=null;this.V("pairingFailed",Error("Server not responding"))};g.C(q7,n7);g.h=q7.prototype;g.h.start=function(){p7(this)&&this.V("screenChange");!g.hH("yt-remote-lounge-token-expiration")&&rEa(this);g.mE(this.A);this.A=g.kE((0,g.B)(this.start,this),1E4)};
g.h.add=function(a,b){p7(this);oEa(this,a);r7(this,!1);this.V("screenChange");b(a);a.token||rEa(this)};
g.h.remove=function(a,b){var c=p7(this);qEa(this,a)&&(r7(this,!1),c=!0);b(a);c&&this.V("screenChange")};
g.h.Hr=function(a,b,c,d){var e=p7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,r7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.V("screenChange")};
g.h.X=function(){g.mE(this.A);q7.fa.X.call(this)};
g.h.KL=function(a){p7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}r7(this,!b);b&&j7(this.G,"Missed "+b+" lounge tokens.")};
g.h.JL=function(a){j7(this.G,"Requesting lounge tokens failed: "+a)};g.C(t7,g.WF);g.h=t7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.hH("yt-remote-fast-check-period")||"0",10);(this.C=(0,g.H)()-144E5<a?0:a)?v7(this):(this.C=(0,g.H)()+3E5,g.gH("yt-remote-fast-check-period",this.C),this.Fw())};
g.h.isEmpty=function(){return g.$b(this.o)};
g.h.update=function(){s7("Updating availability on schedule.");var a=this.F(),b=g.Lb(this.o,function(b,d){return b&&!!r6(a,d)},this);
u7(this,b)};
g.h.X=function(){g.mE(this.B);this.B=window.NaN;this.A&&(this.A.abort(),this.A=null);t7.fa.X.call(this)};
g.h.Fw=function(){g.mE(this.B);this.B=window.NaN;this.A&&this.A.abort();var a=uEa(this);if(g.Pb(a)){var b=g7(this.D,"/pairing/get_screen_availability");this.A=h7(this.D,b,{lounge_token:g.Sb(a).join(",")},(0,g.B)(this.rV,this,a),(0,g.B)(this.qV,this))}else u7(this,{}),v7(this)};
g.h.rV=function(a,b){this.A=null;var c=g.Sb(uEa(this));if(g.ib(c,g.Sb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;u7(this,d);v7(this)}else this.jc("Changing Screen set during request."),this.Fw()};
g.h.qV=function(a){this.jc("Screen availability failed: "+a);this.A=null;v7(this)};
g.h.jc=function(a){j7("OnlineScreenService",a)};g.C(w7,n7);g.h=w7.prototype;g.h.start=function(){this.B.start();this.A.start();this.o.length&&(this.V("screenChange"),this.A.isEmpty()||this.V("onlineScreenChange"))};
g.h.add=function(a,b,c){this.B.add(a,b,c)};
g.h.remove=function(a,b,c){this.B.remove(a,b,c);this.A.update()};
g.h.Hr=function(a,b,c,d){this.B.contains(a)?this.B.Hr(a,b,c,d):(a="Updating name of unknown screen: "+a.name,j7(this.G,a),d(Error(a)))};
g.h.Ce=function(a){return a?this.o:g.Xa(this.o,(0,g.Vd)(this.C,function(a){return!this.contains(a)},this))};
g.h.UG=function(){return(0,g.Vd)(this.Ce(!0),function(a){return!!this.A.o[a.id]},this)};
g.h.VG=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new o7(this.F,a,b,c);f.subscribe("pairingComplete",(0,g.B)(function(a){g.mf(f);d(x7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.mf(f);e(a)});
f.start();return(0,g.B)(f.stop,f)};
g.h.rY=function(a,b,c,d){g.BE(g7(this.F,"/pairing/get_screen"),{method:"POST",Qb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.B)(function(a,d){var e=new l6(d.screen||{});if(!e.name||yEa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);yEa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(x7(this,e))},this),
onError:(0,g.B)(function(a){d(Error("pairing request failed: "+a.status))},this),
Gd:(0,g.B)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.mf(this.B);g.mf(this.A);w7.fa.X.call(this)};
g.h.YL=function(){zEa(this);this.V("screenChange");this.A.update()};
w7.prototype.dispose=w7.prototype.dispose;g.C(z7,g.WF);g.h=z7.prototype;g.h.Fq=function(a){this.B=a;this.V("sessionScreen",this.B)};
g.h.Ie=function(a){this.la()||(a&&A7(this,""+a),this.B=null,this.V("sessionScreen",null))};
g.h.info=function(a){j7(this.N,a)};
g.h.XG=function(){return null};
g.h.Mw=function(a){var b=this.A;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.B)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.B)(function(){A7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.Mw("");z7.fa.X.call(this)};g.C(B7,z7);g.h=B7.prototype;g.h.Lw=function(a){if(this.o){if(this.o==a)return;A7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.F);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D)}this.o=a;this.o.addUpdateListener(this.F);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.D);BEa(this)};
g.h.Ok=function(a){this.info("launchWithParams no-op for Cast: "+g.Kg(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.B)(function(){this.Ie()},this),(0,g.B)(function(){this.Ie(Error("Failed to stop receiver app."))},this)):this.Ie(Error("Stopping cast device witout session."))};
g.h.Mw=g.z;g.h.X=function(){this.info("disposeInternal");g.mE(this.C);this.C=0;this.o&&(this.o.removeUpdateListener(this.F),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D));this.o=null;B7.fa.X.call(this)};
g.h.vW=function(a,b){if(!this.la())if(b){var c=g.kx(b);if(g.Ca(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Kg(c));switch(d){case "mdxSessionStatus":AEa(this,c.screenId);break;default:A7(this,"Unknown youtube message: "+d)}}else A7(this,"Unable to parse message.")}else A7(this,"No data in message.")};
g.h.zA=function(a,b,c,d){xEa(this.J,this.A.label,a,this.A.friendlyName,(0,g.B)(function(e){e?b(e):0<=d?(A7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.kE((0,g.B)(this.zA,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.XG=function(){return this.o};
g.h.sY=function(a){this.la()||a||(A7(this,"Cast session died."),this.Ie())};g.C(C7,z7);g.h=C7.prototype;g.h.Lw=function(a){this.C=a;this.C.addUpdateListener(this.L)};
g.h.Ok=function(a){this.D=a;this.G()};
g.h.stop=function(){this.o();this.o=g.z;g.mE(this.F);this.C?this.C.stop((0,g.B)(this.Ie,this,null),(0,g.B)(this.Ie,this,"Failed to stop DIAL device.")):this.Ie()};
g.h.X=function(){this.o();this.o=g.z;g.mE(this.F);this.C&&this.C.removeUpdateListener(this.L);this.C=null;C7.fa.X.call(this)};
g.h.vY=function(a){this.la()||a||(A7(this,"DIAL session died."),this.o(),this.o=g.z,this.Ie())};
g.h.yu=function(a){this.K=p6();if(this.D){var b=new window.chrome.cast.DialLaunchResponse(!0,DEa(this));a(b);CEa(this)}else this.G=(0,g.B)(function(){g.mE(this.F);this.G=g.z;this.F=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,DEa(this));a(b);CEa(this)},this),this.F=g.kE((0,g.B)(function(){this.G()},this),100)};
g.h.mN=function(a,b,c){xEa(this.J,this.H.receiver.label,a,this.A.friendlyName,(0,g.B)(function(a){a&&a.token?(this.Fq(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.yu(b,c)},this),(0,g.B)(function(a){A7(this,"Failed to get DIAL screen: "+a);
this.yu(b,c)},this))};g.C(D7,z7);D7.prototype.stop=function(){this.Ie()};
D7.prototype.Lw=g.z;D7.prototype.Ok=function(){g.mE(this.o);this.o=window.NaN;var a=r6(this.J.Ce(),this.A.label);a?this.Fq(a):this.Ie(Error("No such screen"))};
D7.prototype.X=function(){g.mE(this.o);this.o=window.NaN;D7.fa.X.call(this)};g.C(E7,g.WF);g.h=E7.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.G);this.H||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.B)(this.zE,this),(0,g.B)(this.aV,this),d,e);c.customDialLaunchCallback=(0,g.B)(this.US,this);window.chrome.cast.initialize(c,
(0,g.B)(function(){this.la()||(window.chrome.cast.addReceiverActionListener(this.C),kEa(),this.A.subscribe("onlineScreenChange",(0,g.B)(this.WG,this)),this.B=FEa(this),window.chrome.cast.setCustomReceivers(this.B,g.z,(0,g.B)(function(a){this.jc("Failed to set initial custom receivers: "+g.Kg(a))},this)),this.V("yt-remote-cast2-availability-change",G7(this)),b(!0))},this),(0,g.B)(function(a){this.jc("Failed to initialize API: "+g.Kg(a));
b(!1)},this))};
g.h.kX=function(a,b){F7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.B;if(!a||c&&c.id!=a)F7("Unsetting old screen status: "+this.o.A.friendlyName),H7(this,null)}if(a&&b){if(!this.o){c=r6(this.A.Ce(),a);if(!c){F7("setConnectedScreenStatus: Unknown screen.");return}var d=EEa(this,c);d||(F7("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.B.push(d),
window.chrome.cast.setCustomReceivers(this.B,g.z,(0,g.B)(function(a){this.jc("Failed to set initial custom receivers: "+g.Kg(a))},this)));
F7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);H7(this,new D7(this.A,d),!0)}this.o.Mw(b)}else F7("setConnectedScreenStatus: no screen.")};
g.h.lX=function(a){this.la()?this.jc("Setting connection data on disposed cast v2"):this.o?this.o.Ok(a):this.jc("Setting connection data without a session")};
g.h.uY=function(){this.la()?this.jc("Stopping session on disposed cast v2"):this.o?(this.o.stop(),H7(this,null)):F7("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.B)(this.zE,this),(0,g.B)(this.vV,this))};
g.h.X=function(){this.A.unsubscribe("onlineScreenChange",(0,g.B)(this.WG,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.C);g.Va(g.y("yt.mdx.remote.debug.handlers_")||[],hEa);g.mf(this.o);E7.fa.X.call(this)};
g.h.jc=function(a){j7("Controller",a)};
g.h.AE=function(a,b){this.o==a&&(b||H7(this,null),this.V("yt-remote-cast2-session-change",b))};
g.h.WU=function(a,b){if(!this.la())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),F7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.A.label!=a.label)F7("onReceiverAction_: Stopping active receiver: "+this.o.A.friendlyName),this.o.stop();else{F7("onReceiverAction_: Casting to active receiver.");this.o.B&&this.V("yt-remote-cast2-session-change",this.o.B);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:H7(this,
new D7(this.A,a));break;case window.chrome.cast.ReceiverType.DIAL:H7(this,new C7(this.A,a,this.F));break;case window.chrome.cast.ReceiverType.CAST:H7(this,new B7(this.A,a));break;default:this.jc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.o&&this.o.A.label==a.label?this.o.stop():this.jc("Stopping receiver w/o session: "+a.friendlyName)}else this.jc("onReceiverAction_ called without receiver.")};
g.h.US=function(a){if(this.la())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.jc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.A:null;if(!c||c.label!=b.label)return this.jc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.o.B)return F7("Reselecting dial screen."),
this.V("yt-remote-cast2-session-change",this.o.B),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.jc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H7(this,new C7(this.A,b,this.F))}b=this.o;b.H=a;return b.H.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.B)(b.mN,b,(b.H.extraData||{}).screenId||null)):new window.Promise((0,g.B)(b.yu,b))};
g.h.zE=function(a){if(!this.la()){F7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)F7("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),H7(this,new B7(this.A,b),!0);else{this.jc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.A,d=r6(this.A.Ce(),c.label);
d&&m6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(F7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.mf(this.o),this.o=new B7(this.A,b),this.o.subscribe("sessionScreen",(0,g.B)(this.AE,this,this.o)),this.o.Ok(null));this.o.Lw(a)}}};
g.h.tY=function(){return this.o?this.o.XG():null};
g.h.vV=function(a){this.la()||(this.jc("Failed to estabilish a session: "+g.Kg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&H7(this,null))};
g.h.aV=function(a){F7("Receiver availability updated: "+a);if(!this.la()){var b=G7(this);this.D=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;G7(this)!=b&&this.V("yt-remote-cast2-availability-change",G7(this))}};
g.h.WG=function(){this.la()||(this.B=FEa(this),F7("Updating custom receivers: "+g.Kg(this.B)),window.chrome.cast.setCustomReceivers(this.B,g.z,(0,g.B)(function(){this.jc("Failed to set custom receivers.")},this)),this.V("yt-remote-cast2-availability-change",G7(this)))};
E7.prototype.setLaunchParams=E7.prototype.lX;E7.prototype.setConnectedScreenStatus=E7.prototype.kX;E7.prototype.stopSession=E7.prototype.uY;E7.prototype.getCastSession=E7.prototype.tY;E7.prototype.requestSession=E7.prototype.requestSession;E7.prototype.init=E7.prototype.init;E7.prototype.dispose=E7.prototype.dispose;var N7=[];g.h=S7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";T7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.o=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.A=a.trackData,this.ng=a.hasPrevious,this.hasNext=a.hasNext,this.H=a.playerTime,this.G=a.playerTimeAt,this.D=a.seekableStart,this.B=a.seekableEnd,this.J=a.duration,this.K=a.loadedTime,this.C=a.liveIngestionTime,this.F=!(0,window.isNaN)(this.C))};
g.h.rb=function(){return 1==this.o};
g.h.isAdPlaying=function(){return 1081==this.o};
g.h.getDuration=function(){return this.F?this.J+U7(this):this.J};
g.h.clone=function(){return new S7(Y7(this))};g.C($7,g.WF);g.h=$7.prototype;g.h.play=function(){1==this.o?(this.A?this.A.play(null,g.z,f8(this,"play")):e8(this,"play"),d8(this,1,W7(a8(this))),this.V("remotePlayerChange")):b8(this,this.play)};
g.h.pause=function(){1==this.o?(this.A?this.A.pause(null,g.z,f8(this,"pause")):e8(this,"pause"),d8(this,2,W7(a8(this))),this.V("remotePlayerChange")):b8(this,this.pause)};
g.h.SG=function(a){if(1==this.o){if(this.A){var b=a8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.rb()||3==b.o?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.A.seek(c,g.z,f8(this,"seekTo",{newTime:a}))}else e8(this,"seekTo",{newTime:a});d8(this,3,a);this.V("remotePlayerChange")}else b8(this,g.Fa(this.SG,a))};
g.h.stop=function(){if(1==this.o){this.A?this.A.stop(null,g.z,f8(this,"stopVideo")):e8(this,"stopVideo");var a=a8(this);a.index=-1;a.videoId="";T7(a);c8(this,a);this.V("remotePlayerChange")}else b8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=a8(this);if(this.B){if(c.volume!=a){var d=Math.round(a)/100;this.B.setReceiverVolumeLevel(d,(0,g.B)(function(){j7("CP","set receiver volume: "+d)},this),(0,g.B)(function(){this.jc("failed to set receiver volume.")},this))}c.muted!=b&&this.B.setReceiverMuted(b,(0,g.B)(function(){j7("CP","set receiver muted: "+b)},this),(0,g.B)(function(){this.jc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);e8(this,"setVolume",e)}c.muted=b;c.volume=a;c8(this,c)}else b8(this,g.Fa(this.setVolume,a,b))};
g.h.RF=function(a,b){if(1==this.o){var c=a8(this),d={videoId:a};b&&(c.A={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Kg(b.style),g.hc(d,c.A));e8(this,"setSubtitlesTrack",d);c8(this,c)}else b8(this,g.Fa(this.RF,a,b))};
g.h.Hx=function(a,b){if(1==this.o){e8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Lb.id});var c=a8(this);c.audioTrackId=b.Lb.id;c8(this,c)}else b8(this,g.Fa(this.Hx,a,b))};
g.h.QG=function(a,b){if(1==this.o){if(a&&b){var c=a8(this);X7(c,a,b);c8(this,c)}e8(this,"previous")}else b8(this,g.Fa(this.QG,a,b))};
g.h.PG=function(a,b){if(1==this.o){if(a&&b){var c=a8(this);X7(c,a,b);c8(this,c)}e8(this,"next")}else b8(this,g.Fa(this.PG,a,b))};
g.h.Uz=function(){1==this.o?e8(this,"dismissAutoplay"):b8(this,this.Uz)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.V("proxyStateChange",a,this.o)}$7.fa.dispose.call(this)};
g.h.X=function(){SEa(this);this.C=null;this.D.clear();Z7(this,null);$7.fa.X.call(this)};
g.h.Ix=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)g.DC(this.D).apply(this);else 3==a&&this.dispose()}};
g.h.RU=function(a,b){this.V(a,b)};
g.h.qS=function(a){if(!a)this.zn(null),Z7(this,null);else if(this.B.receiver.volume){a=this.B.receiver.volume;var b=a8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)j7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,c8(this,b)}};
g.h.zn=function(a){j7("CP","Cast media: "+!!a);this.A&&this.A.removeUpdateListener(this.H);if(this.A=a)this.A.addUpdateListener(this.H),TEa(this),this.V("remotePlayerChange")};
g.h.pS=function(a){a?(TEa(this),this.V("remotePlayerChange")):this.zn(null)};
g.h.CS=function(){var a=PEa();a&&Z7(this,a)};
g.h.jc=function(a){j7("CP",a)};g.C(g8,g.WF);g.h=g8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.u(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.u(k)&&(l.currentIndex=k);c&&(this.ib.listId=c);this.ib.videoId=d;this.ib.index=k||0;this.ib.state=3;V7(this.ib,m);this.C="UNSUPPORTED";h8("Connecting with setPlaylist and params: "+g.Kg(l));this.o.connect({method:"setPlaylist",
params:g.Kg(l)},a,oDa())}else h8("Connecting without params"),this.o.connect({},a,oDa());VEa(this)};
g.h.dispose=function(){this.la()||(this.V("beforeDispose"),i8(this,3));g8.fa.dispose.call(this)};
g.h.X=function(){j8(this);l8(this);k8(this);g.mE(this.J);this.J=window.NaN;g.mE(this.K);this.K=window.NaN;this.B=null;g.GF(this.Y);this.Y.length=0;this.o.dispose();g8.fa.X.call(this);this.C=this.G=this.A=this.ib=this.o=null};
g.h.AL=function(){this.F(2)};
g.h.uS=function(){h8("Channel opened");this.O&&(this.O=!1,k8(this),this.N=g.kE((0,g.B)(function(){h8("Timing out waiting for a screen.");this.F(1)},this),15E3));
sDa(eEa(this.o),this.ca)};
g.h.rS=function(){h8("Channel closed");(0,window.isNaN)(this.D)?w6(!0):w6();this.dispose()};
g.h.sS=function(a){w6();(0,window.isNaN)(this.H())?(h8("Channel error: "+a+" without reconnection"),this.dispose()):(this.O=!0,h8("Channel error: "+a+" with reconnection in "+this.H()+" ms"),i8(this,2))};
g.h.tS=function(a){a.params?h8("Received: action="+a.action+", params="+g.Kg(a.params)):h8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.kx(a.params.devices);this.A=(0,g.I)(a,function(a){return new k6(a)});
a=!!g.La(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
YEa(this,a);break;case "loungeScreenDisconnected":g.Wa(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
YEa(this,!1);break;case "remoteConnected":var b=new k6(g.kx(a.params.device));g.La(this.A,function(a){return b?a.id==b.id:!1})||g.Sa(this.A,b);
break;case "remoteDisconnected":b=new k6(g.kx(a.params.device));g.Wa(this.A,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":$Ea(this,a);break;case "nowPlaying":bFa(this,a);break;case "onStateChange":aFa(this,a);break;case "onAdStateChange":cFa(this,a);break;case "onVolumeChanged":dFa(this,a);break;case "onSubtitlesTrackChanged":ZEa(this,a);break;case "nowAutoplaying":eFa(this,a);break;case "autoplayDismissed":this.V("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.V("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.V("autoplayModeChange",this.C);"DISABLED"==this.C&&this.V("autoplayDismissed");break;case "onHasPreviousNextChanged":fFa(this,a);break;case "requestAssistedSignIn":this.V("assistedSignInRequested",a.params.authCode);break;default:h8("Unrecognized action: "+a.action)}};
g.h.WW=function(){if(this.B){var a=this.B;this.B=null;this.ib.videoId!=a&&m8(this,"getNowPlaying")}};
g8.prototype.subscribe=g8.prototype.subscribe;g8.prototype.unsubscribeByKey=g8.prototype.be;g8.prototype.ka=function(){var a=3;this.la()||(a=0,(0,window.isNaN)(this.H())?e7(this.o)&&(0,window.isNaN)(this.D)&&(a=1):a=2);return a};
g8.prototype.getProxyState=g8.prototype.ka;g8.prototype.F=function(a){h8("Disconnecting with "+a);j8(this);this.V("beforeDisconnect",a);1==a&&w6();fEa(this.o,a);this.dispose()};
g8.prototype.disconnect=g8.prototype.F;g8.prototype.ia=function(){var a=this.ib;this.B&&(a=this.ib.clone(),X7(a,this.B,a.index));return Y7(a)};
g8.prototype.getPlayerContextData=g8.prototype.ia;
g8.prototype.pa=function(a){var b=new S7(a);b.videoId&&b.videoId!=this.ib.videoId&&(this.B=b.videoId,g.mE(this.J),this.J=g.kE((0,g.B)(this.WW,this),5E3));var c=[];this.ib.listId==b.listId&&this.ib.videoId==b.videoId&&this.ib.index==b.index||c.push("remoteQueueChange");this.ib.o==b.o&&this.ib.volume==b.volume&&this.ib.muted==b.muted&&W7(this.ib)==W7(b)&&g.Kg(this.ib.A)==g.Kg(b.A)||c.push("remotePlayerChange");this.ib.reset(a);(0,g.D)(c,function(a){this.V(a)},this)};
g8.prototype.setPlayerContextData=g8.prototype.pa;g8.prototype.aa=function(){var a=this.o.F.id,b=g.La(this.A,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
g8.prototype.getOtherConnectedRemoteId=g8.prototype.aa;g8.prototype.H=function(){var a=this.o;return a.A.isActive()?a.A.A-(0,g.H)():window.NaN};
g8.prototype.getReconnectTimeout=g8.prototype.H;g8.prototype.ba=function(){return this.C||"UNSUPPORTED"};
g8.prototype.getAutoplayMode=g8.prototype.ba;g8.prototype.ga=function(){return this.G||""};
g8.prototype.getAutoplayVideoId=g8.prototype.ga;g8.prototype.xa=function(){if(!(0,window.isNaN)(this.H())){var a=this.o.A;g.pu(a.o);a.start()}};
g8.prototype.reconnect=g8.prototype.xa;g8.prototype.ma=function(a,b){m8(this,a,b);XEa(this)};
g8.prototype.sendMessage=g8.prototype.ma;g.C(n8,n7);g.h=n8.prototype;g.h.Ce=function(a){return this.ld.$_gs(a)};
g.h.contains=function(a){return!!this.ld.$_c(a)};
g.h.get=function(a){return this.ld.$_g(a)};
g.h.start=function(){this.ld.$_st()};
g.h.add=function(a,b,c){this.ld.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.ld.$_r(a,b,c)};
g.h.Hr=function(a,b,c,d){this.ld.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.A.length;a<b;++a)this.ld.$_ubk(this.A[a]);this.A.length=0;this.ld=null;n8.fa.X.call(this)};
g.h.qY=function(){this.V("screenChange")};
g.h.rU=function(){this.V("onlineScreenChange")};
w7.prototype.$_st=w7.prototype.start;w7.prototype.$_gspc=w7.prototype.rY;w7.prototype.$_gsppc=w7.prototype.VG;w7.prototype.$_c=w7.prototype.contains;w7.prototype.$_g=w7.prototype.get;w7.prototype.$_a=w7.prototype.add;w7.prototype.$_un=w7.prototype.Hr;w7.prototype.$_r=w7.prototype.remove;w7.prototype.$_gs=w7.prototype.Ce;w7.prototype.$_gos=w7.prototype.UG;w7.prototype.$_s=w7.prototype.subscribe;w7.prototype.$_ubk=w7.prototype.be;var o8=null,p8=null,E8=null,t8=[];g.r(F8,g.M);g.h=F8.prototype;
g.h.X=function(){g.M.prototype.X.call(this);this.B.stop();this.C.stop();this.K.stop();this.N();this.o.unsubscribe("proxyStateChange",this.wE,this);this.o.unsubscribe("remotePlayerChange",this.Cn,this);this.o.unsubscribe("remoteQueueChange",this.Gq,this);this.o.unsubscribe("autoplayUpNext",this.SD,this);this.o.unsubscribe("previousNextChange",this.tE,this);this.o.unsubscribe("nowAutoplaying",this.kE,this);this.o.unsubscribe("autoplayDismissed",this.RD,this);this.o=this.G=null};
g.h.PC=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(I8(this)){if(!a8(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":a8(this.o).rb()?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.J.Cm(c[0],c[1]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":c=c[0],I8(this)&&this.o.Hx(this.T.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.T.getCurrentTime();K8(this,0==c?void 0:c);break;case "control_seek":K8(this,c[0]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":c=c[0],I8(this)&&this.o.Hx(this.T.getVideoData(1).videoId,c)}};
g.h.oS=function(a){this.K.vL(a)};
g.h.RX=function(a){this.PC("control_subtitles_set_track",g.$b(a)?null:a)};
g.h.gG=function(){var a=this.T.Fc("captions","track");g.$b(a)||J8(this,a)};
g.h.hE=function(a){if(I8(this)){this.o.unsubscribe("remotePlayerChange",this.Cn,this);var b=Math.round(a.volume);a=!!a.muted;var c=a8(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.L.start();this.o.subscribe("remotePlayerChange",this.Cn,this)}};
g.h.JT=function(){g.$b(this.D)||rFa(this,this.D);this.F=!1};
g.h.wE=function(a,b){this.C.stop();2==b&&this.dG()};
g.h.Cn=function(){if(I8(this)){this.B.stop();var a=a8(this.o);switch(a.o){case 1081:case 1:H8(this,new g.XP(8));this.cG();break;case 1085:case 3:H8(this,new g.XP(9));break;case 1083:case 0:H8(this,new g.XP(2));this.J.stop();G8(this,this.T.getVideoData().lengthSeconds);break;case 1084:H8(this,new g.XP(4));break;case 2:H8(this,new g.XP(4));G8(this,W7(a));break;case -1:H8(this,new g.XP(64));break;case -1E3:H8(this,new g.XP(128,{errorCode:"mdx.remoteerror",message:"This video is not available for remote playback."}))}a=
a8(this.o).A;var b=this.D;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.D=a,rFa(this,a));a=a8(this.o);-1==a.volume||Math.round(this.T.getVolume())==a.volume&&this.T.isMuted()==a.muted||this.L.isActive()||this.CG()}else qFa(this)};
g.h.tE=function(){this.T.V("mdxpreviousnextchange")};
g.h.Gq=function(){I8(this)||qFa(this)};
g.h.AK=function(){this.o.Uz()};
g.h.SD=function(a){a&&(a=g.BE("/watch_queue_ajax",{method:"GET",cd:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.B)(this.WV,this)}))&&(this.N=(0,g.B)(a.abort,a))};
g.h.WV=function(a,b){var c=new g.KO(g.Y(this.T),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.T.V("mdxautoplayupnext",c)};
g.h.kE=function(a){(0,window.isNaN)(a)||this.T.V("mdxnowautoplaying",a)};
g.h.RD=function(){this.T.V("mdxautoplaycanceled")};
g.h.sQ=function(a,b){-1==a8(this.o).o?K8(this,a):b&&this.o.SG(a)};
g.h.CG=function(){if(I8(this)){var a=a8(this.o);this.A.Ga(this.O);a.muted?this.T.mute():this.T.wg();this.T.setVolume(a.volume);this.O=this.A.R(this.T,"onVolumeChange",this.hE)}};
g.h.cG=function(){this.B.stop();if(!this.o.la()){var a=a8(this.o);a.rb()&&H8(this,new g.XP(8));G8(this,W7(a));this.B.start()}};
g.h.dG=function(){this.C.stop();this.B.stop();var a=this.o.C.getReconnectTimeout();2==this.o.o&&!(0,window.isNaN)(a)&&this.C.start()};g.r(L8,g.W);L8.prototype.D=function(a){tFa(this,a.state)};g.r(M8,g.CY);M8.prototype.K=function(){var a=this.T.Fc("remote","receivers");a&&1<a.length&&!this.T.Fc("remote","quickCast")?(this.H=g.kb(a,this.D,this),g.DY(this,(0,g.I)(a,this.D)),a=this.T.Fc("remote","currentReceiver"),this.Jf(this.D(a)),this.enable(!0)):this.enable(!1)};
M8.prototype.D=function(a){return a.key};
M8.prototype.If=function(a){return"cast-selector-receiver"==a?"Cast...":this.H[a].name};
M8.prototype.Ed=function(a){g.CY.prototype.Ed.call(this,a);this.T.Vd("remote","currentReceiver",this.H[a]);this.C.Pb()};g.r(N8,g.GU);g.h=N8.prototype;g.h.create=function(){kFa(g.NM(g.Y(this.o)));this.F.push(g.hG("yt-remote-before-disconnect",this.kS,this));this.F.push(g.hG("yt-remote-connection-change",this.bV,this));this.F.push(g.hG("yt-remote-receiver-availability-change",this.uE,this));this.F.push(g.hG("yt-remote-auto-connect",this.ZU,this));this.F.push(g.hG("yt-remote-receiver-resumed",this.YU,this));this.uE()};
g.h.load=function(){this.o.qv();g.GU.prototype.load.call(this);this.D=new F8(this,this.o,this.A);var a=(a=pFa())?a.currentTime:0;var b=D8()?new $7(y8(),void 0):null;0==a&&b&&(a=W7(a8(b)));0!=a&&(this.J=a||0,this.o.V("progresssync",a,void 0));sFa(this,this.G,this.G);g.N_(this.o.app,6)};
g.h.unload=function(){this.o.V("mdxautoplaycanceled");this.C=this.B;g.nf(this.D,this.A);this.A=this.D=null;g.GU.prototype.unload.call(this);g.N_(this.o.app,5)};
g.h.X=function(){g.iG(this.F);g.GU.prototype.X.call(this)};
g.h.ln=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.D.PC.apply(this.D,[a].concat(g.oa(c)))};
g.h.qL=function(){return this.loaded?this.D.suggestion:null};
g.h.ng=function(){return this.A?a8(this.A).ng:!1};
g.h.hasNext=function(){return this.A?a8(this.A).hasNext:!1};
g.h.getCurrentTime=function(){return this.J};
g.h.gQ=function(){var a=a8(this.A),b=this.o.getVideoData();return{allowSeeking:this.o.nd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+U7(a):a.C,isPeggedToLive:1>=(a.F?a.B+U7(a):a.B)-this.getCurrentTime(),loaded:a.K,seekableEnd:a.F?a.B+U7(a):a.B,seekableStart:0<a.D?a.D+U7(a):a.D}};
g.h.hQ=function(){this.A&&this.A.PG()};
g.h.iQ=function(){this.A&&this.A.QG()};
g.h.kS=function(a){1==a&&(this.K=this.A?a8(this.A):null)};
g.h.bV=function(){var a=D8()?new $7(y8(),void 0):null;if(a){var b=this.C;this.loaded&&this.unload();this.A=a;this.K=null;b.key!=this.B.key&&(this.C=b,this.load())}else g.mf(this.A),this.A=null,this.loaded&&(this.unload(),(a=this.K)&&a.videoId==this.o.getVideoData().videoId&&this.o.tC(a.videoId,W7(a)));this.o.V("videodatachange","newdata",this.o.getVideoData(),3)};
g.h.uE=function(){this.H=[this.B].concat(mFa());var a=z8()||this.B;O8(this,a);this.o.ya("onMdxReceiversChange")};
g.h.ZU=function(){var a=z8();O8(this,a)};
g.h.YU=function(){this.C=z8()};
g.h.fQ=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.H;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?Q7():O8(this,b)),this.loaded?this.C:this.B;case "quickCast":return 2==this.H.length&&"cast-selector-receiver"==this.H[1].key?(b&&Q7(),!0):!1}};
g.h.jQ=function(){e8(this.A,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Nc=function(){return!1};g.CX.remote=N8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:04:15 Sep 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:39:05 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 135.91
  exclusion.robots: 0.085
  exclusion.robots.policy: 0.076
  cdx.remote: 0.054
  esindex: 0.009
  LoadShardBlock: 45.924 (3)
  PetaboxLoader3.datanode: 72.417 (5)
  load_resource: 78.3 (2)
  PetaboxLoader3.resolve: 26.276
*/