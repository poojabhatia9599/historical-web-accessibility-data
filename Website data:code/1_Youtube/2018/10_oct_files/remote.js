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

(function(g){var window=this;var TCa=function(a,b){return g.Tb(a,b)},i6=function(a){g.Rm(a,"zx",g.wb());
return a},j6=function(a,b,c){g.xa(c)||(c=[String(c)]);
g.Um(a.o,b,c)},UCa=function(a,b){var c=[];
g.Hk(b,function(a){try{var b=g.qD.prototype.A.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.u(b)?g.pD(b)&&c.push(a):c.push(a)},a);
return c},VCa=function(a,b){var c=UCa(a,b);
(0,g.D)(c,function(a){g.qD.prototype.remove.call(this,a)},a)},WCa=function(a){if(a.Jd){if(a.Jd.locationOverrideToken)return{locationOverrideToken:a.Jd.locationOverrideToken};
if(null!=a.Jd.latitudeE7&&null!=a.Jd.longitudeE7)return{latitudeE7:a.Jd.latitudeE7,longitudeE7:a.Jd.longitudeE7}}return null},XCa=function(a,b,c,d){var e=new g.Im(null,void 0);
a&&g.Jm(e,a);b&&g.Km(e,b);c&&g.Lm(e,c);d&&g.Mm(e,d);return e},YCa=function(a){g.WF[a]&&(a=g.WF[a],(0,g.D)(a,function(a){g.UF[a]&&delete g.UF[a]}),a.length=0)},ZCa=function(a){var b=g.TF();
if(b)if(b.clear(a),a)YCa(a);else for(var c in g.WF)YCa(c)},k6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.B=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.Cm;this.o=this.A="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",$Ca(this,a.capabilities||""),aDa(this,a.experiments||""),this.A=a.remoteControllerUrl||"",
this.o=a.localChannelEncryptionKey||"")},$Ca=function(a,b){a.capabilities.clear();
(0,g.Ud)(b.split(","),g.Da(TCa,bDa)).forEach(function(b){a.capabilities.add(b)})},aDa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},l6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},m6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},cDa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},dDa=function(a){return new l6(a)},eDa=function(a){return g.xa(a)?(0,g.I)(a,dDa):[]},n6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},o6=function(a){return g.xa(a)?"["+(0,g.I)(a,n6).join(",")+"]":"null"},p6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},fDa=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},q6=function(a,b){return g.Ja(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},r6=function(a,b){return g.Ja(a,function(a){return m6(a,b)})},gDa=function(){var a=(0,g.UG)();
a&&VCa(a,a.o.fe(!0))},s6=function(){var a=g.XG("yt-remote-connected-devices")||[];
g.eb(a);return a},hDa=function(a){if(g.Oa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.I)(a,function(a,b){return 0==b?a:a.substring(c.length)})},iDa=function(a){g.WG("yt-remote-connected-devices",a,86400)},u6=function(){if(t6)return t6;
var a=g.XG("yt-remote-device-id");a||(a=p6(),g.WG("yt-remote-device-id",a,31536E3));for(var b=s6(),c=1,d=a;g.Na(b,d);)c++,d=a+"#"+c;return t6=d},v6=function(){var a=s6(),b=u6();
g.Na(a,b);g.ZG()&&g.gb(a,b);a=hDa(a);if(g.Oa(a))try{g.EG("remote_sid")}catch(c){}else try{g.DG("remote_sid",a.join(","),-1)}catch(c){}},jDa=function(){return g.XG("yt-remote-session-browser-channel")},kDa=function(){return g.XG("yt-remote-local-screens")||[]},lDa=function(){g.WG("yt-remote-lounge-token-expiration",!0,86400)},mDa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.I)(kDa(),function(a){return a.loungeToken}),c=(0,g.I)(a,function(a){return a.loungeToken});
(0,g.qm)(c,function(a){return!g.Na(b,a)})&&lDa();
g.WG("yt-remote-local-screens",a,31536E3)},nDa=function(a,b){g.WG("yt-remote-session-browser-channel",a);
g.WG("yt-remote-session-screen-id",b);var c=s6(),d=u6();g.Na(c,d)||c.push(d);iDa(c);v6()},w6=function(a){a||(g.YG("yt-remote-session-screen-id"),g.YG("yt-remote-session-video-id"));
v6();a=s6();g.Sa(a,u6());iDa(a)},oDa=function(){if(!x6){var a=g.BD();
a&&(x6=new g.kD(a))}return x6?!!x6.get("yt-remote-use-staging-server"):!1},pDa=function(){var a=window.document.createElement("a");
g.hd(a,"https://web.archive.org/web/20181001000049/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ab(a)},qDa=function(a,b,c){c=void 0===c?null:c;
var d=g.Nd("SCRIPT");d.id=a;d.onload=function(){b&&(0,window.setTimeout)(b,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
c&&d.setAttribute("nonce",c);g.jd(d,g.le("https://web.archive.org/web/20181001000049/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));a=window.document.getElementsByTagName("head")[0]||window.document.body;a.insertBefore(d,a.firstChild);return d},rDa=function(a){a=void 0===a?null:a;
var b=pDa(),c=window.document.getElementById(b),d=c&&g.eF(c,"loaded");d||c&&!d||(c=qDa(b,function(){g.eF(c,"loaded")||(g.dF(c,"loaded","true"),g.$F(b),g.cE(g.Da(ZCa,b),0))},a))},sDa=function(){var a=void 0===a?null:a;
window.spf?window.spf.script.load("https://web.archive.org/web/20181001000049/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):rDa(a)},y6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},tDa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},z6=function(a){a.length?uDa(a.shift(),function(){z6(a)}):A6()},vDa=function(a){return"chrome-extension://"+a+B6},uDa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},C6=function(a){return 0<=window.navigator.userAgent.indexOf(a)},A6=function(){var a=tDa();
a&&a(!1,"No cast extension found")},D6=function(){if(wDa){var a=2,b=tDa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;uDa("//web.archive.org/web/20181001000049/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",A6,c)}},xDa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(D6(),a({command:"cast.sender.init"}))},yDa=function(){D6();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);z6(["//web.archive.org/web/20181001000049/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+B6,"//web.archive.org/web/20181001000049/https://www.gstatic.com/eureka/clank"+B6])},E6=function(a,b,c){g.M.call(this);
this.F=null!=c?(0,g.B)(a,c):a;this.Bd=b;this.D=(0,g.B)(this.uL,this);this.o=!1;this.A=0;this.B=this.Ea=null;this.C=[]},F6=function(){},G6=function(a,b,c,d){this.o=a;
this.B=b;this.G=c;this.F=d||1;this.C=45E3;this.Z=new g.Ym(this);this.A=new g.Ag;this.A.setInterval(250)},ADa=function(a,b,c){a.wk=1;
a.Rh=i6(b.clone());a.Cj=c;a.D=!0;zDa(a,null)},H6=function(a,b,c,d,e){a.wk=1;
a.Rh=i6(b.clone());a.Cj=null;a.D=c;e&&(a.uF=!1);zDa(a,d)},zDa=function(a,b){a.rl=(0,g.H)();
I6(a);a.yi=a.Rh.clone();j6(a.yi,"t",a.F);a.Vn=0;a.Wc=a.o.Ws(a.o.On()?b:null);0<a.Ot&&(a.Rq=new g.ml((0,g.B)(a.KG,a,a.Wc),a.Ot));a.Z.W(a.Wc,"readystatechange",a.KW);var c=a.dj?g.cc(a.dj):{};a.Cj?(a.Lr="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Wc.send(a.yi,a.Lr,a.Cj,c)):(a.Lr="GET",a.uF&&!g.Jd&&(c.Connection="close"),a.Wc.send(a.yi,a.Lr,null,c));a.o.Kf(1)},DDa=function(a,b,c){for(var d=!0;!a.Qi&&a.Vn<c.length;){var e=BDa(a,c);
if(e==J6){4==b&&(a.Sh=4,K6(15),d=!1);break}else if(e==CDa){a.Sh=4;K6(16);d=!1;break}else L6(a,e)}4==b&&0==c.length&&(a.Sh=1,K6(17),d=!1);a.Rf=a.Rf&&d;d||(M6(a),N6(a))},BDa=function(a,b){var c=a.Vn,d=b.indexOf("\n",c);
if(-1==d)return J6;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return CDa;d+=1;if(d+c>b.length)return J6;var e=b.substr(d,c);a.Vn=d+c;return e},FDa=function(a,b){a.rl=(0,g.H)();
I6(a);var c=b?window.location.hostname:"";a.yi=a.Rh.clone();g.Rm(a.yi,"DOMAIN",c);g.Rm(a.yi,"t",a.F);try{a.Sf=new window.ActiveXObject("htmlfile")}catch(n){M6(a);a.Sh=7;K6(22);N6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in O6)k=O6[l];else if(l in EDa)k=O6[l]=EDa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=O6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.kd(g.Ac("b/12014412"),d+"</body></html>");a.Sf.open();a.Sf.write(g.ad(c));a.Sf.close();a.Sf.parentWindow.m=(0,g.B)(a.SV,a);a.Sf.parentWindow.d=(0,g.B)(a.DE,a,!0);a.Sf.parentWindow.rpcClose=(0,g.B)(a.DE,a,!1);c=a.Sf.createElement("DIV");a.Sf.parentWindow.document.body.appendChild(c);d=g.Oc(a.yi.toString());d=g.pb(g.Lc(d));d=g.kd(g.Ac("b/12014412"),'<iframe src="'+d+'"></iframe>');g.gd(c,g.ad(d));a.o.Kf(1)},
I6=function(a){a.wx=(0,g.H)()+a.C;
GDa(a,a.C)},GDa=function(a,b){if(null!=a.Il)throw Error("WatchDog timer not null");
a.Il=P6((0,g.B)(a.iW,a),b)},Q6=function(a){a.Il&&(g.x.clearTimeout(a.Il),a.Il=null)},N6=function(a){a.o.EA()||a.Qi||a.o.Bq(a)},M6=function(a){Q6(a);
g.kf(a.Rq);a.Rq=null;a.A.stop();g.dn(a.Z);if(a.Wc){var b=a.Wc;a.Wc=null;b.abort();b.dispose()}a.Sf&&(a.Sf=null)},L6=function(a,b){try{a.o.vE(a,b),a.o.Kf(4)}catch(c){}},IDa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;HDa(a,b,function(e){e?c(!0):g.x.setTimeout(function(){IDa(a,b,c,d,f)},f)})}},HDa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{R6(d),c(!0)}catch(e){}};
d.onerror=function(){try{R6(d),c(!1)}catch(e){}};
d.onabort=function(){try{R6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{R6(d),c(!1)}catch(e){}};
g.x.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},R6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},JDa=function(a){this.o=a;
this.A=new F6},KDa=function(a){var b=S6(a.o,a.Ql,"/mail/images/cleardot.gif");
i6(b);IDa(b.toString(),5E3,(0,g.B)(a.yK,a),3,2E3);a.Kf(1)},U6=function(a){var b=a.o.J;
if(null!=b)K6(5),b?(K6(11),T6(a.o,a,!1)):(K6(12),T6(a.o,a,!0));else if(a.Le=new G6(a,void 0,void 0,void 0),a.Le.dj=a.Mt,b=a.o,b=S6(b,b.On()?a.Fm:null,a.Nt),K6(5),!g.Hd||g.sc(10))j6(b,"TYPE","xmlhttp"),H6(a.Le,b,!1,a.Fm,!1);else{j6(b,"TYPE","html");var c=a.Le;a=!!a.Fm;c.wk=3;c.Rh=i6(b.clone());FDa(c,a)}},V6=function(a,b,c){this.o=1;
this.A=[];this.C=[];this.D=new F6;this.H=a||null;this.J=null!=b?b:null;this.F=c||!1},LDa=function(a,b){this.o=a;
this.map=b;this.context=null},MDa=function(a){g.nf.call(this,"statevent",a)},NDa=function(a,b){g.nf.call(this,"timingevent",a);
this.size=b},ODa=function(a){g.nf.call(this,"serverreachability",a)},RDa=function(a){PDa(a);
if(3==a.o){var b=a.yn++,c=a.kp.clone();g.Rm(c,"SID",a.B);g.Rm(c,"RID",b);g.Rm(c,"TYPE","terminate");W6(a,c);b=new G6(a,a.B,b,void 0);b.wk=2;b.Rh=i6(c.clone());(new window.Image).src=b.Rh;b.rl=(0,g.H)();I6(b)}QDa(a)},SDa=function(a){a.VK(1,0);
a.kp=S6(a,null,a.Lt);X6(a)},PDa=function(a){a.Eh&&(a.Eh.abort(),a.Eh=null);
a.Ac&&(a.Ac.cancel(),a.Ac=null);a.Jg&&(g.x.clearTimeout(a.Jg),a.Jg=null);Y6(a);a.ke&&(a.ke.cancel(),a.ke=null);a.Jh&&(g.x.clearTimeout(a.Jh),a.Jh=null)},TDa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.A.push(new LDa(a.ER++,b));2!=a.o&&3!=a.o||X6(a)},X6=function(a){a.ke||a.Jh||(a.Jh=P6((0,g.B)(a.BE,a),0),a.kk=0)},VDa=function(a,b){if(1==a.o){if(!b){a.yn=Math.floor(1E5*Math.random());
var c=a.yn++,d=new G6(a,"",c,void 0);d.dj=null;var e=Z6(a),f=a.kp.clone();g.Rm(f,"RID",c);g.Rm(f,"CVER","1");W6(a,f);ADa(d,f,e);a.ke=d;a.o=2}}else 3==a.o&&(b?UDa(a,b):0==a.A.length||a.ke||UDa(a))},UDa=function(a,b){if(b)if(6<a.Si){a.A=a.C.concat(a.A);
a.C.length=0;var c=a.yn-1;var d=Z6(a)}else c=b.G,d=b.Cj;else c=a.yn++,d=Z6(a);var e=a.kp.clone();g.Rm(e,"SID",a.B);g.Rm(e,"RID",c);g.Rm(e,"AID",a.Mk);W6(a,e);c=new G6(a,a.B,c,a.kk+1);c.dj=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ke=c;ADa(c,e,d)},W6=function(a,b){if(a.Ad){var c=a.Ad.lA();
c&&g.Ib(c,function(a,c){g.Rm(b,c,a)})}},Z6=function(a){var b=Math.min(a.A.length,1E3),c=["count="+b];
if(6<a.Si&&0<b){var d=a.A[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.A[e].o,k=a.A[e].map;f=6>=a.Si?e:f-d;try{g.Ib(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.C=a.C.concat(a.A.splice(0,b));
return c.join("&")},WDa=function(a){a.Ac||a.Jg||(a.G=1,a.Jg=P6((0,g.B)(a.AE,a),0),a.Yj=0)},$6=function(a){if(a.Ac||a.Jg||3<=a.Yj)return!1;
a.G++;a.Jg=P6((0,g.B)(a.AE,a),XDa(a,a.Yj));a.Yj++;return!0},T6=function(a,b,c){a.Jr=c;
a.jg=b.Xg;a.F||SDa(a)},Y6=function(a){null!=a.Ti&&(g.x.clearTimeout(a.Ti),a.Ti=null)},XDa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},a7=function(a,b){if(2==b||9==b){var c=null;
a.Ad&&(c=null);var d=(0,g.B)(a.yX,a);c||(c=new g.Im("//web.archive.org/web/20181001000049/https://www.google.com/images/cleardot.gif"),i6(c));HDa(c.toString(),1E4,d)}else K6(2);YDa(a,b)},YDa=function(a,b){a.o=0;
a.Ad&&a.Ad.lz(b);QDa(a);PDa(a)},QDa=function(a){a.o=0;
a.jg=-1;if(a.Ad)if(0==a.C.length&&0==a.A.length)a.Ad.Js();else{g.Wa(a.C);var b=g.Wa(a.A);a.C.length=0;a.A.length=0;a.Ad.Js(b)}},S6=function(a,b,c){var d=g.Sm(c);
if(""!=d.A)b&&g.Km(d,b+"."+d.A),g.Lm(d,d.D);else{var e=window.location;d=XCa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.km&&g.Ib(a.km,function(a,b){g.Rm(d,b,a)});
g.Rm(d,"VER",a.Si);W6(a,d);return d},P6=function(a,b){if(!g.za(a))throw Error("Fn must not be null and must be a function");
return g.x.setTimeout(function(){a()},b)},K6=function(a){b7.dispatchEvent(new MDa(b7,a))},ZDa=function(){},$Da=function(a,b){this.action=a;
this.params=b||{}},c7=function(a,b){g.M.call(this);
this.o=new g.V(this.JV,0,this);g.N(this,this.o);this.Bd=5E3;this.A=0;if(g.za(a))b&&(a=(0,g.B)(a,b));else if(a&&g.za(a.handleEvent))a=(0,g.B)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},d7=function(a,b,c){this.L=a;
this.F=b;this.B=new g.jD;this.A=new c7(this.jY,this);this.o=this.fb=null;this.K=!1;this.D=null;this.J="";this.H=this.C=0;this.G=[];this.N=c||!1},aEa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.Jr,sessionId:a.o.B,arrayId:a.o.Mk}},bEa=function(a,b){a.H=b||0;
a.A.stop();a.o&&(3==a.o.o&&VDa(a.o),RDa(a.o));a.H=0},e7=function(a){return!!a.o&&3==a.o.o},cEa=function(a,b){(a.F.loungeIdToken=b)||a.A.stop()},f7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.A=!0;a=a||window.document.location.href;var b=g.Pg(a)||"";b&&(this.port=":"+b);this.domain=g.Og(a)||"";a=g.Gb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.zb(a,"10.0")&&(this.A=!1))},g7=function(a,b){var c=a.o;
if(g.u(void 0)?0:a.A)c="https://"+a.domain+a.port+a.o;return g.Yg(c+b,{})},h7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Da(a.C,d,!0),onError:g.Da(a.B,e),Fd:g.Da(a.D,e)};c&&(a.Qb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.tE(b,a)},gEa=function(){var a=dEa;
eEa();i7.push(a);fEa(i7)},j7=function(a,b){eEa();
var c=i7,d=hEa(a,String(b));g.Oa(c)?iEa(d):(fEa(c),(0,g.D)(c,function(a){a(d)}))},eEa=function(){i7||(i7=g.y("yt.mdx.remote.debug.handlers_")||[],g.ua("yt.mdx.remote.debug.handlers_",i7,void 0))},iEa=function(a){var b=(k7+1)%50;
k7=b;l7[b]=a;m7||(m7=49==b)},fEa=function(a){var b=l7;
if(b[0]){var c=k7,d=m7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.D)(a,function(a){a(e)})}while(d!=c);
l7=Array(50);k7=-1;m7=!1}},hEa=function(a,b){var c=((0,g.H)()-jEa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},n7=function(a){g.MF.call(this);
this.G=a;this.o=[]},kEa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},lEa=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Ud)(a.o,function(a){return!!q6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=kEa(a,b[d])||c;return c},mEa=function(a,b){var c=a.o.length;
a.o=(0,g.Ud)(a.o,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.o.length<c},o7=function(a,b,c,d){g.MF.call(this);
this.F=a;this.D=b;this.B=c;this.C=d;this.A=0;this.o=null;this.Ea=window.NaN},q7=function(a){n7.call(this,"LocalScreenService");
this.B=a;this.A=window.NaN;p7(this);this.info("Initializing with "+o6(this.o))},nEa=function(a){if(a.o.length){var b=(0,g.I)(a.o,function(a){return a.id}),c=g7(a.B,"/pairing/get_lounge_token_batch");
h7(a.B,c,{screen_ids:b.join(",")},(0,g.B)(a.IL,a),(0,g.B)(a.HL,a))}},p7=function(a){var b=eDa(kDa());
b=(0,g.Ud)(b,function(a){return!a.uuid});
return lEa(a,b)},r7=function(a,b){mDa((0,g.I)(a.o,cDa));
b&&lDa()},t7=function(a,b){g.MF.call(this);
this.F=b;var c=g.XG("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.F(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Na(c,l)}this.o=d;this.D=a;this.B=this.C=window.NaN;this.A=null;s7("Initialized with "+g.Gg(this.o))},oEa=function(a,b,c){var d=g7(a.D,"/pairing/get_screen_availability");
h7(a.D,d,{lounge_token:b.token},(0,g.B)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.B)(function(){c(!1)},a))},u7=function(a,b){a:if(g.Nb(b)!=g.Nb(a.o))var c=!1;
else{c=g.Qb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(s7("Updated online screens: "+g.Gg(a.o)),a.o=b,a.V("screenChange"));pEa(a)},v7=function(a){(0,window.isNaN)(a.B)||g.eE(a.B);
a.B=g.cE((0,g.B)(a.Aw,a),0<a.C&&a.C<(0,g.H)()?2E4:1E4)},s7=function(a){j7("OnlineScreenService",a)},qEa=function(a){var b={};
(0,g.D)(a.F(),function(a){a.token?b[a.token]=a.id:this.kc("Requesting availability of screen w/o lounge token.")});
return b},pEa=function(a){a=g.Qb(g.Jb(a.o,function(a){return a}));
g.eb(a);a.length?g.WG("yt-remote-online-screen-ids",a.join(","),60):g.YG("yt-remote-online-screen-ids")},w7=function(a){n7.call(this,"ScreenService");
this.F=a;this.A=this.B=null;this.C=[];this.D={};rEa(this)},tEa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.Fe();if(k=(c?r6(k,c):null)||r6(k,b)){k.uuid=b;var l=x7(a,k);oEa(a.A,l,function(a){e(a?l:null)})}else c?sEa(a,c,(0,g.B)(function(a){var f=x7(this,new l6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));oEa(this.A,f,function(a){e(a?f:null)})},a),f):e(null)},uEa=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},sEa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Qb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.tE(g7(a.F,"/pairing/get_lounge_token_batch"),e)},vEa=function(a){a.o=a.B.Fe();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+o6(a.o))},rEa=function(a){y7(a);
a.B=new q7(a.F);a.B.subscribe("screenChange",(0,g.B)(a.WL,a));vEa(a);a.C=eDa(g.XG("yt-remote-automatic-screen-cache")||[]);y7(a);a.info("Initializing automatic screens: "+o6(a.C));a.A=new t7(a.F,(0,g.B)(a.Fe,a,!0));a.A.subscribe("screenChange",(0,g.B)(function(){this.V("onlineScreenChange")},a))},x7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=r6(a.C,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.C.push(b),g.WG("yt-remote-automatic-screen-cache",(0,g.I)(a.C,cDa)));y7(a);a.D[b.uuid]=b.id;g.WG("yt-remote-device-id-map",a.D,31536E3);return b},y7=function(a){a.D=g.XG("yt-remote-device-id-map")||{}},z7=function(a,b,c){g.MF.call(this);
this.N=c;this.J=a;this.A=b;this.B=null},A7=function(a,b){j7(a.N,b)},B7=function(a,b){z7.call(this,a,b,"CastSession");
this.o=null;this.C=0;this.F=(0,g.B)(this.pY,this);this.D=(0,g.B)(this.uW,this);this.C=g.cE((0,g.B)(function(){wEa(this,null)},this),12E4)},xEa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Gg(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.A,(0,g.B)(function(){A7(this,"Failed to send message: getMdxSessionStatus.")},a)):A7(a,"Sending yt message without session: "+g.Gg(b))},wEa=function(a,b){g.eE(a.C);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.B||a.B.id!=b){var c=(0,g.B)(a.Cq,a),d=(0,g.B)(a.Ke,a);a.uA(b,c,d,5)}}else a.Ke(Error("Waiting for session status timed out."))},C7=function(a,b,c){z7.call(this,a,b,"DialSession");
this.C=this.H=null;this.K="";this.P=c;this.D=null;this.G=g.A;this.F=window.NaN;this.L=(0,g.B)(this.sY,this);this.o=g.A},yEa=function(a){a.o=a.J.SG(a.K,a.A.label,a.A.friendlyName,(0,g.B)(function(a){this.o=g.A;
this.Cq(a)},a),(0,g.B)(function(a){this.o=g.A;
this.Ke(a)},a))},zEa=function(a){var b={};
b.pairingCode=a.K;b.theme=a.P;if(a.D){var c=a.D.currentTime||0;b.v=a.D.videoId;b.t=c}oDa()&&(b.env_useStageMdx=1);return g.Wg(b)},D7=function(a,b){z7.call(this,a,b,"ManualSession");
this.o=g.cE((0,g.B)(this.Ok,this,null),150)},E7=function(a,b,c,d){g.MF.call(this);
this.A=a;this.G=b||"233637DE";this.F=c||"cl";this.H=d||!1;this.o=null;this.D=!1;this.B=[];this.C=(0,g.B)(this.VU,this)},AEa=function(a,b){return b?g.Ja(a.B,function(a){return m6(b,a.label)},a):null},F7=function(a){j7("Controller",a)},dEa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},G7=function(a){return a.D||!!a.B.length||!!a.o},H7=function(a,b,c){b!=a.o&&(g.kf(a.o),(a.o=b)?(c?a.V("yt-remote-cast2-receiver-resumed",b.A):a.V("yt-remote-cast2-receiver-selected",
b.A),b.subscribe("sessionScreen",(0,g.B)(a.yE,a,b)),b.B?a.V("yt-remote-cast2-session-change",b.B):c&&a.o.Ok(null)):a.V("yt-remote-cast2-session-change",null))},BEa=function(a){var b=a.A.QG(),c=a.o&&a.o.A;
a=(0,g.I)(b,function(a){c&&m6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=AEa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},HEa=function(a,b,c,d,e,f,k){CEa()?DEa(b,e,f,k)&&(J7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?EEa(a,c):(window.__onGCastApiAvailable=function(b,d){b?EEa(a,c):(K7("Failed to load cast API: "+d),L7(!1),J7(!1),g.YG("yt-remote-cast-available"),g.YG("yt-remote-cast-receiver"),FEa(),
c(!1))},d?sDa():C6("CriOS")?xDa():C6("Android")&&C6("Chrome/")&&window.navigator.presentation?yDa():window.chrome&&window.navigator.presentation&&!C6("Edge")?(D6(),z6(GEa.map(vDa))):A6())):I7("Cannot initialize because not running Chrome")},FEa=function(){I7("dispose");
var a=M7();a&&a.dispose();g.ua("yt.mdx.remote.cloudview.instance_",null,void 0);IEa(!1);g.YF(N7);N7.length=0},O7=function(){return!!g.XG("yt-remote-cast-installed")},JEa=function(){var a=g.XG("yt-remote-cast-receiver");
return a?a.friendlyName:null},KEa=function(){I7("clearCurrentReceiver");
g.YG("yt-remote-cast-receiver")},LEa=function(){return O7()?M7()?M7().getCastSession():(K7("getCastSelector: Cast is not initialized."),null):(K7("getCastSelector: Cast API is not installed!"),null)},Q7=function(){O7()?M7()?P7()?(I7("Requesting cast selector."),M7().requestSession()):(I7("Wait for cast API to be ready to request the session."),N7.push(g.XF("yt-remote-cast2-api-ready",Q7))):K7("requestCastSelector: Cast is not initialized."):K7("requestCastSelector: Cast API is not installed!")},R7=
function(a,b){P7()?M7().setConnectedScreenStatus(a,b):K7("setConnectedScreenStatus called before ready.")},CEa=function(){var a=0<=g.Gb.search(/ (CrMo|Chrome|CriOS)\//);
return g.nI||a},MEa=function(a,b){M7().init(a,b)},DEa=function(a,b,c,d){var e=!1;
M7()||(a=new E7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.WG("yt-remote-cast-available",a);g.aG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){I7("onReceiverSelected: "+a.friendlyName);
g.WG("yt-remote-cast-receiver",a);g.aG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){I7("onReceiverResumed: "+a.friendlyName);
g.WG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){I7("onSessionChange: "+n6(a));
a||g.YG("yt-remote-cast-receiver");g.aG("yt-remote-cast2-session-change",a)}),g.ua("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
I7("cloudview.createSingleton_: "+e);return e},M7=function(){return g.y("yt.mdx.remote.cloudview.instance_")},EEa=function(a,b){L7(!0);
J7(!1);MEa(a,function(a){a?(IEa(!0),g.$F("yt-remote-cast2-api-ready")):(K7("Failed to initialize cast API."),L7(!1),g.YG("yt-remote-cast-available"),g.YG("yt-remote-cast-receiver"),FEa());b(a)})},I7=function(a){j7("cloudview",a)},K7=function(a){j7("cloudview",a)},L7=function(a){I7("setCastInstalled_ "+a);
g.WG("yt-remote-cast-installed",a)},P7=function(){return!!g.y("yt.mdx.remote.cloudview.apiReady_")},IEa=function(a){I7("setApiReady_ "+a);
g.ua("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J7=function(a){g.ua("yt.mdx.remote.cloudview.initializing_",a,void 0)},S7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.o=-1;this.muted=!1;this.audioTrackId=null;this.G=this.H=0;this.A=null;this.hasNext=this.ng=!1;this.K=this.J=this.B=this.D=0;this.C=window.NaN;this.F=!1;this.reset(a)},T7=function(a){a.audioTrackId=null;
a.A=null;a.o=-1;a.ng=!1;a.hasNext=!1;a.H=0;a.G=(0,g.H)();a.D=0;a.B=0;a.J=0;a.K=0;a.C=window.NaN;a.F=!1},U7=function(a){return a.qb()?((0,g.H)()-a.G)/1E3:0},V7=function(a,b){a.H=b;
a.G=(0,g.H)()},W7=function(a){switch(a.o){case 1:case 1081:return((0,g.H)()-a.G)/1E3+a.H;
case -1E3:return 0}return a.H},X7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T7(a)},Y7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.o;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.dc(a.A);b.hasPrevious=a.ng;b.hasNext=a.hasNext;b.playerTime=a.H;b.playerTimeAt=a.G;b.seekableStart=a.D;b.seekableEnd=a.B;b.duration=a.J;b.loadedTime=a.K;b.liveIngestionTime=a.C;return b},$7=function(a,b){g.MF.call(this);
this.o=0;this.C=a;this.F=[];this.D=new g.AC;this.B=this.A=null;this.J=(0,g.B)(this.oS,this);this.G=(0,g.B)(this.Bn,this);this.H=(0,g.B)(this.mS,this);this.K=(0,g.B)(this.AS,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Dx,this),NEa(this))):c=3;0!=c&&(b?this.Dx(c):g.cE((0,g.B)(function(){this.Dx(c)},this),0));
var d=LEa();d&&Z7(this,d);this.subscribe("yt-remote-cast2-session-change",this.K)},a8=function(a){return new S7(a.C.getPlayerContextData())},NEa=function(a){(0,g.D)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.F.push(this.C.subscribe(a,g.Da(this.QU,a),this))},a)},OEa=function(a){(0,g.D)(a.F,function(a){this.C.unsubscribeByKey(a)},a);
a.F.length=0},b8=function(a,b){50>a.D.Bc()&&g.CC(a.D,b)},d8=function(a,b,c){var d=a8(a);
V7(d,c);-1E3!=d.o&&(d.o=b);c8(a,d)},e8=function(a,b,c){a.C.sendMessage(b,c)},c8=function(a,b){OEa(a);
a.C.setPlayerContextData(Y7(b));NEa(a)},Z7=function(a,b){a.B&&(a.B.removeUpdateListener(a.J),a.B.removeMediaListener(a.G),a.Bn(null));
a.B=b;a.B&&(j7("CP","Setting cast session: "+a.B.sessionId),a.B.addUpdateListener(a.J),a.B.addMediaListener(a.G),a.B.media.length&&a.Bn(a.B.media[0]))},PEa=function(a){var b=a.A.media,c=a.A.customData;
if(b&&c){var d=a8(a);b.contentId!=d.videoId&&j7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.o=c.playerState;V7(d,a.A.getEstimatedTime());c8(a,d)}else j7("CP","No cast media video. Ignoring state update.")},f8=function(a,b,c){return(0,g.B)(function(a){this.kc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.kc("Retrying "+b+" using MDx browser channel."),e8(this,b,c))},a)},g8=function(a,b,c){g.MF.call(this);
this.D=window.NaN;this.P=!1;this.K=this.J=this.L=this.N=window.NaN;this.Y=[];this.C=this.G=this.B=this.gb=this.o=null;this.ua=a;this.Y.push(g.vF(window,"beforeunload",(0,g.B)(this.yL,this)));this.A=[];this.gb=new S7;this.ba=b.id;this.o=QEa(this,c);this.o.subscribe("handlerOpened",this.sS,this);this.o.subscribe("handlerClosed",this.pS,this);this.o.subscribe("handlerError",this.qS,this);this.o.subscribe("handlerMessage",this.rS,this);cEa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.gb.videoId;g.ZG()&&g.WG("yt-remote-session-video-id",a)},this)},h8=function(a){j7("conn",a)},QEa=function(a,b){return new d7(g7(a.ua,"/bc"),b)},i8=function(a,b){a.V("proxyStateChange",b)},REa=function(a){a.D=g.cE((0,g.B)(function(){h8("Connecting timeout");
this.F(1)},a),2E4)},j8=function(a){g.eE(a.D);
a.D=window.NaN},k8=function(a){g.eE(a.N);
a.N=window.NaN},SEa=function(a){l8(a);
a.L=g.cE((0,g.B)(function(){m8(this,"getNowPlaying")},a),2E4)},l8=function(a){g.eE(a.L);
a.L=window.NaN},UEa=function(a,b){b&&(j8(a),k8(a));
b==(e7(a.o)&&(0,window.isNaN)(a.D))?b&&(i8(a,1),m8(a,"getSubtitlesTrack")):b?(a.aa()&&a.gb.reset(),i8(a,1),m8(a,"getNowPlaying"),TEa(a)):a.F(1)},VEa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.gb.videoId&&(g.Yb(b.params)?a.gb.A=null:a.gb.A=b.params,a.V("remotePlayerChange"))},WEa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.gb.listId=b.params.listId||a.gb.listId;X7(a.gb,c,d);a.V("remoteQueueChange")},YEa=function(a,b){b.params=b.params||{};
WEa(a,b);XEa(a,b);a.V("autoplayDismissed")},XEa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
V7(a.gb,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.gb.o&&(c=-1E3);a.gb.o=c;c=Number(b.params.loadedTime);a.gb.K=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.gb.J=(0,window.isNaN)(c)?0:c;c=a.gb;var d=Number(b.params.liveIngestionTime);c.C=d;c.F=(0,window.isNaN)(d)?!1:!0;c=a.gb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.D=(0,window.isNaN)(d)?0:d;c.B=(0,window.isNaN)(e)?0:e;1==a.gb.o?SEa(a):l8(a);
a.V("remotePlayerChange")},ZEa=function(a,b){if(-1E3!=a.gb.o){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.gb.o=c;c=(0,window.parseInt)(b.params.currentTime,10);V7(a.gb,(0,window.isNaN)(c)?0:c);a.V("remotePlayerChange")}},$Ea=function(a,b){var c="true"==b.params.muted;
a.gb.volume=(0,window.parseInt)(b.params.volume,10);a.gb.muted=c;a.V("remotePlayerChange")},aFa=function(a,b){a.G=b.params.videoId;
a.V("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},bFa=function(a,b){var c="true"==b.params.hasNext;
a.gb.ng="true"==b.params.hasPrevious;a.gb.hasNext=c;a.V("previousNextChange")},TEa=function(a){g.eE(a.K);
a.K=g.cE((0,g.B)(a.F,a,1),864E5)},m8=function(a,b,c){c?h8("Sending: action="+b+", params="+g.Gg(c)):h8("Sending: action="+b);
a.o.sendMessage(b,c)},n8=function(a){n7.call(this,"ScreenServiceProxy");
this.ld=a;this.A=[];this.A.push(this.ld.$_s("screenChange",(0,g.B)(this.nY,this)));this.A.push(this.ld.$_s("onlineScreenChange",(0,g.B)(this.qU,this)))},gFa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.WD("MDX_CONFIG")||b;gDa();v6();o8||(o8=new f7(b?b.loungeApiHost:void 0),oDa()&&(o8.o="/api/loungedev"));p8||(p8=g.y("yt.mdx.remote.deferredProxies_")||[],g.ua("yt.mdx.remote.deferredProxies_",p8,void 0));cFa();var c=q8();if(!c){var d=new w7(o8);g.ua("yt.mdx.remote.screenService_",d,void 0);c=q8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);HEa(a,d,function(a){a?r8()&&R7(r8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.aG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.y("yt.mdx.remote.initialized_")&&(g.ua("yt.mdx.remote.initialized_",!0,void 0),s8("Initializing: "+g.Gg(b)),t8.push(g.XF("yt-remote-cast2-availability-change",function(){g.aG("yt-remote-receiver-availability-change")})),t8.push(g.XF("yt-remote-cast2-receiver-selected",function(){u8(null);
g.aG("yt-remote-auto-connect","cast-selector-receiver")})),t8.push(g.XF("yt-remote-cast2-receiver-resumed",function(){g.aG("yt-remote-receiver-resumed","cast-selector-receiver")})),t8.push(g.XF("yt-remote-cast2-session-change",dFa)),t8.push(g.XF("yt-remote-connection-change",function(a){a?R7(r8(),"YouTube TV"):v8()||(R7(null,null),KEa())})),a=w8(),b.isAuto&&(a.id+="#dial"),g.$D("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),s8(" -- with channel params: "+
g.Gg(a)),eFa(a),c.start(),r8()||fFa())},iFa=function(){var a=hFa();
O7()&&g.XG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},hFa=function(){var a=q8().ld.$_gos();
var b=x8();b&&y8()&&(q6(a,b)||a.push(b));return fDa(a)},z8=function(){var a=jFa();
!a&&O7()&&JEa()&&(a={key:"cast-selector-receiver",name:JEa()});return a},jFa=function(){var a=hFa(),b=x8();
b||(b=v8());return g.Ja(a,function(a){return b&&m6(b,a.key)?!0:!1})},x8=function(){var a=r8();
if(!a)return null;var b=q8().Fe();return r6(b,a)},dFa=function(a){s8("remote.onCastSessionChange_: "+n6(a));
if(a){var b=x8();b&&b.id==a.id?R7(b.id,"YouTube TV"):(b&&A8(),B8(a,1))}else y8()&&A8()},A8=function(){P7()?M7().stopSession():K7("stopSession called before API ready.");
var a=y8();a&&(a.disconnect(1),C8(null))},D8=function(){var a=y8();
return!!a&&3!=a.getProxyState()},s8=function(a){j7("remote",a)},q8=function(){if(!E8){var a=g.y("yt.mdx.remote.screenService_");
E8=a?new n8(a):null}return E8},r8=function(){return g.y("yt.mdx.remote.currentScreenId_")},kFa=function(a){g.ua("yt.mdx.remote.currentScreenId_",a,void 0)},lFa=function(){return g.y("yt.mdx.remote.connectData_")},u8=function(a){g.ua("yt.mdx.remote.connectData_",a,void 0)},y8=function(){return g.y("yt.mdx.remote.connection_")},C8=function(a){var b=y8();
u8(null);a||kFa("");g.ua("yt.mdx.remote.connection_",a,void 0);p8&&((0,g.D)(p8,function(b){b(a)}),p8.length=0);
b&&!a?g.aG("yt-remote-connection-change",!1):!b&&a&&g.aG("yt-remote-connection-change",!0)},v8=function(){var a=g.ZG();
if(!a)return null;var b=q8().Fe();return r6(b,a)},B8=function(a,b){x8()&&x8();
kFa(a.id);var c=new g8(o8,a,w8());c.connect(b,lFa());c.subscribe("beforeDisconnect",function(a){g.aG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){y8()&&C8(null)});
C8(c)},fFa=function(){var a=v8();
a?(s8("Resume connection to: "+n6(a)),B8(a,0)):(w6(),KEa(),s8("Skipping connecting because no session screen found."))},cFa=function(){var a=w8();
if(g.Yb(a)){a=u6();var b=g.XG("yt-remote-session-name")||"",c=g.XG("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.ua("yt.mdx.remote.channelParams_",a,void 0)}},w8=function(){return g.y("yt.mdx.remote.channelParams_")||{}},eFa=function(a){a?(g.WG("yt-remote-session-app",a.app),g.WG("yt-remote-session-name",a.name)):(g.YG("yt-remote-session-app"),g.YG("yt-remote-session-name"));
g.ua("yt.mdx.remote.channelParams_",a,void 0)},F8=function(a,b,c){g.M.call(this);
this.C=a;this.T=b;this.A=new g.JF(this);g.N(this,this.A);this.A.R(b,"onCaptionsTrackListChanged",this.HT);this.A.R(b,"captionschanged",this.lS);this.A.R(b,"captionssettingschanged",this.dG);this.A.R(b,"videoplayerreset",this.Dq);this.A.R(b,"mdxautoplaycancel",this.xK);this.P=this.A.R(b,"onVolumeChange",this.fE);this.G=!1;this.o=c;c.subscribe("proxyStateChange",this.uE,this);c.subscribe("remotePlayerChange",this.En,this);c.subscribe("remoteQueueChange",this.Dq,this);c.subscribe("autoplayUpNext",this.QD,
this);c.subscribe("previousNextChange",this.rE,this);c.subscribe("nowAutoplaying",this.iE,this);c.subscribe("autoplayDismissed",this.PD,this);this.suggestion=null;this.H=new g.MP(64);this.B=new g.V(this.ZF,500,this);g.N(this,this.B);this.D=new g.V(this.aG,1E3,this);g.N(this,this.D);this.K=new E6(this.OX,0,this);g.N(this,this.K);this.F={};this.L=new g.V(this.zG,1E3,this);g.N(this,this.L);this.J=new g.ml(this.pQ,1E3,this);g.N(this,this.J);this.N=g.A;this.dG();this.Dq();this.En()},G8=function(a,b){var c=
a.C,d=a.T.getVideoData().lengthSeconds;
c.J=b||0;c.player.V("progresssync",b,d)},mFa=function(a){G8(a,0);
a.B.stop();H8(a,new g.MP(64))},J8=function(a,b){if(I8(a)&&!a.G){var c=null;
b&&(c={style:a.T.vj()},g.fc(c,b));a.o.OF(a.T.getVideoData(1).videoId,c);a.F=a8(a.o).A}},K8=function(a,b){var c=a.T.vg();
if(c){var d=c.De();var e=c.listId.toString()}var f=a.T.getVideoData(1);c=a.o;var k=f.videoId,l=d;d=f.playerParams;var m=f.Fk;f=WCa(f);var n=a8(c);l=l||0;var p={videoId:k,currentIndex:l};X7(n,k,l);g.u(b)&&(V7(n,b),p.currentTime=b);g.u(e)&&(p.listId=e);null!=d&&(p.playerParams=d);null!=m&&(p.clickTrackingParams=m);null!=f&&(p.locationInfo=g.Gg(f));e8(c,"setPlaylist",p);e||c8(c,n);H8(a,new g.MP(1))},nFa=function(a,b){if(b){var c=a.T.Ec("captions","tracklist",{oB:1});
c&&c.length?(a.T.Xd("captions","track",b),a.G=!1):(a.T.Wk("captions"),a.G=!0)}else a.T.Xd("captions","track",{})},I8=function(a){return a8(a.o).videoId==a.T.getVideoData(1).videoId},H8=function(a,b){a.D.stop();
var c=a.H;if(!g.RP(c,b)){var d=g.X(b,2);d!=g.X(a.H,2)&&g.dU(a.T,d);a.H=b;oFa(a.C,c,b)}},L8=function(a){g.W.call(this,{I:"div",
M:"ytp-remote",O:[{I:"div",M:"ytp-remote-display-status",O:[{I:"div",M:"ytp-remote-display-status-icon",O:[g.Bqa()]},{I:"div",M:"ytp-remote-display-status-text",ca:"{{statustext}}"}]}]});this.B=new g.aV(this,250);g.N(this,this.B);this.C=a;this.R(a,"presentingplayerstatechange",this.D);pFa(this,g.ZT(a))},pFa=function(a,b){if(3==a.C.Sa()){var c={RECEIVER_NAME:a.C.Ec("remote","currentReceiver").name};
c=g.X(b,128)?g.jX("Error on $RECEIVER_NAME",c):b.qb()||g.X(b,4)?g.jX("Playing on $RECEIVER_NAME",c):g.jX("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.B.show()}else a.B.hide()},M8=function(a,b){g.AY.call(this,"Play on",0,a,b);
this.T=a;this.H={};this.R(a,"onMdxReceiversChange",this.K);this.R(a,"presentingplayerstatechange",this.K);this.K()},N8=function(a){g.DU.call(this,a);
this.A={key:p6(),name:"This computer"};this.C=null;this.D=[];this.K=this.o=null;this.H=[this.A];this.B=this.A;this.F=new g.MP(64);this.J=0;this.G=-1;if(!g.PM(g.Y(this.player))){a=this.player;var b=g.PH(a);b&&(b=b.qn())&&(b=new M8(a,b),g.N(this,b));b=new L8(a);g.N(this,b);g.tU(a,b.element,4)}},oFa=function(a,b,c){a.F=c;
a.player.V("presentingplayerstatechange",new g.WP(c,b))},O8=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)A8();
else{a.B=b;var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(c||e){var f=a.player.vg();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.ac(l).videoId}else k=[e];f=a.player.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.Fk,index:Math.max(a.player.uC(),0),currentTime:0==f?void 0:f};(d=WCa(d))&&(c.locationInfo=d);d=c}else d=null;s8("Connecting to: "+g.Gg(b));"cast-selector-receiver"==b.key?(u8(d||null),P7()?M7().setLaunchParams(d||
null):K7("setLaunchParams called before ready.")):!d&&D8()&&r8()==b.key?g.aG("yt-remote-connection-change",!0):(A8(),u8(d||null),d=q8().Fe(),(d=r6(d,b.key))&&B8(d,1))}},EDa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},O6={"'":"\\'"},qFa={},bDa={CZ:"atp",j4:"ska",z3:"que",K2:"mus",f4:"sus",M0:"dsp"};
k6.prototype.Qo=function(){var a=new k6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.B=this.B;a.A=this.A;a.o=this.o};
var x6,t6="",B6=y6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",wDa=y6("loadCastFramework")||y6("loadCastApplicationFramework"),GEa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.C(E6,g.M);g.h=E6.prototype;g.h.tL=function(a){this.C=arguments;this.o=!1;this.Ea?this.B=(0,g.H)()+this.Bd:this.Ea=g.Bg(this.D,this.Bd)};
g.h.stop=function(){this.Ea&&(g.Cg(this.Ea),this.Ea=null);this.B=null;this.o=!1;this.C=[]};
g.h.pause=function(){++this.A};
g.h.resume=function(){this.A&&(--this.A,!this.A&&this.o&&(this.o=!1,this.F.apply(null,this.C)))};
g.h.X=function(){this.stop();E6.fa.X.call(this)};
g.h.uL=function(){this.B?(this.Ea=g.Bg(this.D,this.B-(0,g.H)()),this.B=null):(this.Ea=null,this.A?this.o=!0:(this.o=!1,this.F.apply(null,this.C)))};F6.prototype.stringify=function(a){return g.x.JSON.stringify(a,void 0)};
F6.prototype.parse=function(a){return g.x.JSON.parse(a,void 0)};g.h=G6.prototype;g.h.dj=null;g.h.Rf=!1;g.h.Il=null;g.h.wx=null;g.h.rl=null;g.h.wk=null;g.h.Rh=null;g.h.yi=null;g.h.Cj=null;g.h.Wc=null;g.h.Vn=0;g.h.Sf=null;g.h.Lr=null;g.h.Sh=null;g.h.Gm=-1;g.h.uF=!0;g.h.Qi=!1;g.h.Ot=0;g.h.Rq=null;var CDa={},J6={};g.h=G6.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.KW=function(a){a=a.target;var b=this.Rq;b&&3==g.vx(a)?b.Cm():this.KG(a)};
g.h.KG=function(a){try{if(a==this.Wc)a:{var b=g.vx(this.Wc),c=this.Wc.A,d=this.Wc.getStatus();if(g.Hd&&!g.sc(10)||g.Jd&&!g.rc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.pf&&!g.zx(this.Wc))break a;this.Qi||4!=b||7==c||(8==c||0>=d?this.o.Kf(3):this.o.Kf(2));Q6(this);var e=this.Wc.getStatus();this.Gm=e;var f=g.zx(this.Wc);(this.Rf=200==e)?(4==b&&M6(this),this.D?(DDa(this,b,f),g.pf&&this.Rf&&3==b&&(this.Z.W(this.A,"tick",this.GW),this.A.start())):L6(this,f),this.Rf&&!this.Qi&&(4==b?this.o.Bq(this):
(this.Rf=!1,I6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Sh=3,K6(13)):(this.Sh=0,K6(14)),M6(this),N6(this))}}catch(k){this.Wc&&g.zx(this.Wc)}finally{}};
g.h.GW=function(){var a=g.vx(this.Wc),b=g.zx(this.Wc);this.Vn<b.length&&(Q6(this),DDa(this,a,b),this.Rf&&4!=a&&I6(this))};
g.h.SV=function(a){P6((0,g.B)(this.RV,this,a),0)};
g.h.RV=function(a){this.Qi||(Q6(this),L6(this,a),I6(this))};
g.h.DE=function(a){P6((0,g.B)(this.QV,this,a),0)};
g.h.QV=function(a){this.Qi||(M6(this),this.Rf=a,this.o.Bq(this),this.o.Kf(4))};
g.h.cancel=function(){this.Qi=!0;M6(this)};
g.h.iW=function(){this.Il=null;var a=(0,g.H)();0<=a-this.wx?(2!=this.wk&&this.o.Kf(3),M6(this),this.Sh=2,K6(18),N6(this)):GDa(this,this.wx-a)};g.h=JDa.prototype;g.h.Mt=null;g.h.Le=null;g.h.Sq=!1;g.h.FA=null;g.h.gp=null;g.h.Gu=null;g.h.Nt=null;g.h.cf=null;g.h.Xg=-1;g.h.Fm=null;g.h.Ql=null;g.h.connect=function(a){this.Nt=a;a=S6(this.o,null,this.Nt);K6(3);this.FA=(0,g.H)();var b=this.o.H;null!=b?(this.Fm=b[0],(this.Ql=b[1])?(this.cf=1,KDa(this)):(this.cf=2,U6(this))):(j6(a,"MODE","init"),this.Le=new G6(this,void 0,void 0,void 0),this.Le.dj=this.Mt,H6(this.Le,a,!1,null,!0),this.cf=0)};
g.h.yK=function(a){if(a)this.cf=2,U6(this);else{K6(4);var b=this.o;b.jg=b.Eh.Xg;a7(b,9)}a&&this.Kf(2)};
g.h.Ws=function(a){return this.o.Ws(a)};
g.h.abort=function(){this.Le&&(this.Le.cancel(),this.Le=null);this.Xg=-1};
g.h.EA=function(){return!1};
g.h.vE=function(a,b){this.Xg=a.Gm;if(0==this.cf)if(b){try{var c=this.A.parse(b)}catch(d){c=this.o;c.jg=this.Xg;a7(c,2);return}this.Fm=c[0];this.Ql=c[1]}else c=this.o,c.jg=this.Xg,a7(c,2);else if(2==this.cf)if(this.Sq)K6(7),this.Gu=(0,g.H)();else if("11111"==b){if(K6(6),this.Sq=!0,this.gp=(0,g.H)(),c=this.gp-this.FA,!g.Hd||g.sc(10)||500>c)this.Xg=200,this.Le.cancel(),K6(12),T6(this.o,this,!0)}else K6(8),this.gp=this.Gu=(0,g.H)(),this.Sq=!1};
g.h.Bq=function(){this.Xg=this.Le.Gm;if(this.Le.Rf)0==this.cf?this.Ql?(this.cf=1,KDa(this)):(this.cf=2,U6(this)):2==this.cf&&((!g.Hd||g.sc(10)?!this.Sq:200>this.Gu-this.gp)?(K6(11),T6(this.o,this,!1)):(K6(12),T6(this.o,this,!0)));else{0==this.cf?K6(9):2==this.cf&&K6(10);var a=this.o;a.jg=this.Xg;a7(a,2)}};
g.h.On=function(){return this.o.On()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Kf=function(a){this.o.Kf(a)};g.h=V6.prototype;g.h.km=null;g.h.ke=null;g.h.Ac=null;g.h.Lt=null;g.h.kp=null;g.h.bz=null;g.h.zp=null;g.h.yn=0;g.h.ER=0;g.h.Ad=null;g.h.Jh=null;g.h.Jg=null;g.h.Ti=null;g.h.Eh=null;g.h.Jr=null;g.h.Mk=-1;g.h.DB=-1;g.h.jg=-1;g.h.kk=0;g.h.Yj=0;g.h.Si=8;var b7=new g.Of;g.C(MDa,g.nf);g.C(NDa,g.nf);g.C(ODa,g.nf);g.h=V6.prototype;g.h.connect=function(a,b,c,d,e){K6(0);this.Lt=b;this.km=c||{};d&&g.u(e)&&(this.km.OSID=d,this.km.OAID=e);this.F?(P6((0,g.B)(this.yz,this,a),100),SDa(this)):this.yz(a)};
g.h.yz=function(a){this.Eh=new JDa(this);this.Eh.Mt=null;this.Eh.A=this.D;this.Eh.connect(a)};
g.h.EA=function(){return 0==this.o};
g.h.BE=function(a){this.Jh=null;VDa(this,a)};
g.h.AE=function(){this.Jg=null;this.Ac=new G6(this,this.B,"rpc",this.G);this.Ac.dj=null;this.Ac.Ot=0;var a=this.bz.clone();g.Rm(a,"RID","rpc");g.Rm(a,"SID",this.B);g.Rm(a,"CI",this.Jr?"0":"1");g.Rm(a,"AID",this.Mk);W6(this,a);if(!g.Hd||g.sc(10))g.Rm(a,"TYPE","xmlhttp"),H6(this.Ac,a,!0,this.zp,!1);else{g.Rm(a,"TYPE","html");var b=this.Ac,c=!!this.zp;b.wk=3;b.Rh=i6(a.clone());FDa(b,c)}};
g.h.vE=function(a,b){if(0!=this.o&&(this.Ac==a||this.ke==a))if(this.jg=a.Gm,this.ke==a&&3==this.o)if(7<this.Si){try{var c=this.D.parse(b)}catch(f){c=null}if(g.xa(c)&&3==c.length)if(0==c[0])a:{if(!this.Jg){if(this.Ac)if(this.Ac.rl+3E3<this.ke.rl)Y6(this),this.Ac.cancel(),this.Ac=null;else break a;$6(this);K6(19)}}else this.DB=c[1],0<this.DB-this.Mk&&37500>c[2]&&this.Jr&&0==this.Yj&&!this.Ti&&(this.Ti=P6((0,g.B)(this.gS,this),6E3));else a7(this,11)}else b!=qFa.F_.o&&a7(this,11);else if(this.Ac==a&&
Y6(this),!g.F(b)){c=this.D.parse(b);g.xa(c);for(var d=0;d<c.length;d++){var e=c[d];this.Mk=e[0];e=e[1];2==this.o?"c"==e[0]?(this.B=e[1],this.zp=e[2],e=e[3],null!=e?this.Si=e:this.Si=6,this.o=3,this.Ad&&this.Ad.nz(),this.bz=S6(this,this.On()?this.zp:null,this.Lt),WDa(this)):"stop"==e[0]&&a7(this,7):3==this.o&&("stop"==e[0]?a7(this,7):"noop"!=e[0]&&this.Ad&&this.Ad.mz(e),this.Yj=0)}}};
g.h.gS=function(){null!=this.Ti&&(this.Ti=null,this.Ac.cancel(),this.Ac=null,$6(this),K6(20))};
g.h.Bq=function(a){if(this.Ac==a){Y6(this);this.Ac=null;var b=2}else if(this.ke==a)this.ke=null,b=1;else return;this.jg=a.Gm;if(0!=this.o)if(a.Rf)1==b?(b=(0,g.H)()-a.rl,b7.dispatchEvent(new NDa(b7,a.Cj?a.Cj.length:0,b,this.kk)),X6(this),this.C.length=0):WDa(this);else{var c=a.Sh,d;if(!(d=3==c||7==c||0==c&&0<this.jg)){if(d=1==b)this.ke||this.Jh||1==this.o||2<=this.kk?d=!1:(this.Jh=P6((0,g.B)(this.BE,this,a),XDa(this,this.kk)),this.kk++,d=!0);d=!(d||2==b&&$6(this))}if(d)switch(c){case 1:a7(this,5);
break;case 4:a7(this,10);break;case 3:a7(this,6);break;case 7:a7(this,12);break;default:a7(this,2)}}};
g.h.VK=function(a){if(!g.Na(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.yX=function(a){a?K6(2):(K6(1),YDa(this,8))};
g.h.Ws=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.px;a.H=!1;return a};
g.h.isActive=function(){return!!this.Ad&&this.Ad.isActive(this)};
g.h.Kf=function(a){b7.dispatchEvent(new ODa(b7,a))};
g.h.On=function(){return!(!g.Hd||g.sc(10))};
g.h=ZDa.prototype;g.h.nz=function(){};
g.h.mz=function(){};
g.h.lz=function(){};
g.h.Js=function(){};
g.h.lA=function(){return{}};
g.h.isActive=function(){return!0};g.C(c7,g.M);g.h=c7.prototype;g.h.JV=function(){this.Bd=Math.min(3E5,2*this.Bd);this.B();this.A&&this.start()};
g.h.start=function(){var a=this.Bd+15E3*Math.random();g.nu(this.o,a);this.A=(0,g.H)()+a};
g.h.stop=function(){this.o.stop();this.A=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.Bd=5E3};g.C(d7,ZDa);g.h=d7.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.ce=function(a){return this.B.ce(a)};
g.h.V=function(a,b){return this.B.V.apply(this.B,arguments)};
g.h.dispose=function(){this.K||(this.K=!0,g.kf(this.B),bEa(this),g.kf(this.A),this.A=null)};
g.h.la=function(){return this.K};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.J="";this.A.stop();this.D=a||null;this.C=b||0;a=this.L+"/test";b=this.L+"/bind";var d=new V6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.N),e=this.o;e&&(e.Ad=null);d.Ad=this;this.o=d;e?this.o.connect(a,b,this.F,e.B,e.Mk):c?this.o.connect(a,b,this.F,c.sessionId,c.arrayId):this.o.connect(a,b,this.F)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.fc(c,b);this.A.isActive()||2==(this.o?this.o.o:0)?this.G.push(c):e7(this)&&TDa(this.o,c)};
g.h.nz=function(){this.A.reset();this.D=null;this.C=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)TDa(this.o,a[b])}this.V("handlerOpened")};
g.h.lz=function(a){var b=2==a&&401==this.o.jg;4==a||b||this.A.start();this.V("handlerError",a)};
g.h.Js=function(a){if(!this.A.isActive())this.V("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
g.h.lA=function(){var a={v:2};this.J&&(a.gsessionid=this.J);0!=this.C&&(a.ui=""+this.C);0!=this.H&&(a.ui=""+this.H);this.D&&g.fc(a,this.D);return a};
g.h.mz=function(a){"S"==a[0]?this.J=a[1]:"gracefulReconnect"==a[0]?(this.A.start(),RDa(this.o)):this.V("handlerMessage",new $Da(a[0],a[1]))};
g.h.jY=function(){this.A.isActive();var a=this.o,b=0;a.Ac&&b++;a.ke&&b++;0!=b||this.connect(this.D,this.C)};f7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
f7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
f7.prototype.D=function(a){a(Error("request timed out"))};var jEa=(0,g.H)(),i7=null,l7=Array(50),k7=-1,m7=!1;g.C(n7,g.MF);n7.prototype.Fe=function(){return this.o};
n7.prototype.contains=function(a){return!!q6(this.o,a)};
n7.prototype.get=function(a){return a?r6(this.o,a):null};
n7.prototype.info=function(a){j7(this.G,a)};g.C(o7,g.MF);var rFa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=o7.prototype;g.h.start=function(){!this.o&&(0,window.isNaN)(this.Ea)&&this.PG()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);(0,window.isNaN)(this.Ea)||(g.eE(this.Ea),this.Ea=window.NaN)};
g.h.X=function(){this.stop();o7.fa.X.call(this)};
g.h.PG=function(){this.Ea=window.NaN;this.o=g.tE(g7(this.F,"/pairing/get_screen"),{method:"POST",Qb:{pairing_code:this.D},timeout:5E3,onSuccess:(0,g.B)(this.lY,this),onError:(0,g.B)(this.kY,this),Fd:(0,g.B)(this.mY,this)})};
g.h.lY=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.B;c.name=this.C;this.V("pairingComplete",new l6(c))};
g.h.kY=function(a){this.o=null;a.status&&404==a.status?this.A>=rFa.length?this.V("pairingFailed",Error("DIAL polling timed out")):(a=rFa[this.A],this.Ea=g.cE((0,g.B)(this.PG,this),a),this.A++):this.V("pairingFailed",Error("Server error "+a.status))};
g.h.mY=function(){this.o=null;this.V("pairingFailed",Error("Server not responding"))};g.C(q7,n7);g.h=q7.prototype;g.h.start=function(){p7(this)&&this.V("screenChange");!g.XG("yt-remote-lounge-token-expiration")&&nEa(this);g.eE(this.A);this.A=g.cE((0,g.B)(this.start,this),1E4)};
g.h.add=function(a,b){p7(this);kEa(this,a);r7(this,!1);this.V("screenChange");b(a);a.token||nEa(this)};
g.h.remove=function(a,b){var c=p7(this);mEa(this,a)&&(r7(this,!1),c=!0);b(a);c&&this.V("screenChange")};
g.h.Dr=function(a,b,c,d){var e=p7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,r7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.V("screenChange")};
g.h.X=function(){g.eE(this.A);q7.fa.X.call(this)};
g.h.IL=function(a){p7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}r7(this,!b);b&&j7(this.G,"Missed "+b+" lounge tokens.")};
g.h.HL=function(a){j7(this.G,"Requesting lounge tokens failed: "+a)};g.C(t7,g.MF);g.h=t7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.XG("yt-remote-fast-check-period")||"0",10);(this.C=(0,g.H)()-144E5<a?0:a)?v7(this):(this.C=(0,g.H)()+3E5,g.WG("yt-remote-fast-check-period",this.C),this.Aw())};
g.h.isEmpty=function(){return g.Yb(this.o)};
g.h.update=function(){s7("Updating availability on schedule.");var a=this.F(),b=g.Jb(this.o,function(b,d){return b&&!!r6(a,d)},this);
u7(this,b)};
g.h.X=function(){g.eE(this.B);this.B=window.NaN;this.A&&(this.A.abort(),this.A=null);t7.fa.X.call(this)};
g.h.Aw=function(){g.eE(this.B);this.B=window.NaN;this.A&&this.A.abort();var a=qEa(this);if(g.Nb(a)){var b=g7(this.D,"/pairing/get_screen_availability");this.A=h7(this.D,b,{lounge_token:g.Qb(a).join(",")},(0,g.B)(this.qV,this,a),(0,g.B)(this.pV,this))}else u7(this,{}),v7(this)};
g.h.qV=function(a,b){this.A=null;var c=g.Qb(qEa(this));if(g.fb(c,g.Qb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;u7(this,d);v7(this)}else this.kc("Changing Screen set during request."),this.Aw()};
g.h.pV=function(a){this.kc("Screen availability failed: "+a);this.A=null;v7(this)};
g.h.kc=function(a){j7("OnlineScreenService",a)};g.C(w7,n7);g.h=w7.prototype;g.h.start=function(){this.B.start();this.A.start();this.o.length&&(this.V("screenChange"),this.A.isEmpty()||this.V("onlineScreenChange"))};
g.h.add=function(a,b,c){this.B.add(a,b,c)};
g.h.remove=function(a,b,c){this.B.remove(a,b,c);this.A.update()};
g.h.Dr=function(a,b,c,d){this.B.contains(a)?this.B.Dr(a,b,c,d):(a="Updating name of unknown screen: "+a.name,j7(this.G,a),d(Error(a)))};
g.h.Fe=function(a){return a?this.o:g.Va(this.o,(0,g.Ud)(this.C,function(a){return!this.contains(a)},this))};
g.h.QG=function(){return(0,g.Ud)(this.Fe(!0),function(a){return!!this.A.o[a.id]},this)};
g.h.SG=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new o7(this.F,a,b,c);f.subscribe("pairingComplete",(0,g.B)(function(a){g.kf(f);d(x7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.kf(f);e(a)});
f.start();return(0,g.B)(f.stop,f)};
g.h.oY=function(a,b,c,d){g.tE(g7(this.F,"/pairing/get_screen"),{method:"POST",Qb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.B)(function(a,d){var e=new l6(d.screen||{});if(!e.name||uEa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);uEa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(x7(this,e))},this),
onError:(0,g.B)(function(a){d(Error("pairing request failed: "+a.status))},this),
Fd:(0,g.B)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.kf(this.B);g.kf(this.A);w7.fa.X.call(this)};
g.h.WL=function(){vEa(this);this.V("screenChange");this.A.update()};
w7.prototype.dispose=w7.prototype.dispose;g.C(z7,g.MF);g.h=z7.prototype;g.h.Cq=function(a){this.B=a;this.V("sessionScreen",this.B)};
g.h.Ke=function(a){this.la()||(a&&A7(this,""+a),this.B=null,this.V("sessionScreen",null))};
g.h.info=function(a){j7(this.N,a)};
g.h.UG=function(){return null};
g.h.Gw=function(a){var b=this.A;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.B)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.B)(function(){A7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.Gw("");z7.fa.X.call(this)};g.C(B7,z7);g.h=B7.prototype;g.h.Fw=function(a){if(this.o){if(this.o==a)return;A7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.F);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D)}this.o=a;this.o.addUpdateListener(this.F);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.D);xEa(this)};
g.h.Ok=function(a){this.info("launchWithParams no-op for Cast: "+g.Gg(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.B)(function(){this.Ke()},this),(0,g.B)(function(){this.Ke(Error("Failed to stop receiver app."))},this)):this.Ke(Error("Stopping cast device witout session."))};
g.h.Gw=g.A;g.h.X=function(){this.info("disposeInternal");g.eE(this.C);this.C=0;this.o&&(this.o.removeUpdateListener(this.F),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.D));this.o=null;B7.fa.X.call(this)};
g.h.uW=function(a,b){if(!this.la())if(b){var c=g.jx(b);if(g.Aa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Gg(c));switch(d){case "mdxSessionStatus":wEa(this,c.screenId);break;default:A7(this,"Unknown youtube message: "+d)}}else A7(this,"Unable to parse message.")}else A7(this,"No data in message.")};
g.h.uA=function(a,b,c,d){tEa(this.J,this.A.label,a,this.A.friendlyName,(0,g.B)(function(e){e?b(e):0<=d?(A7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.cE((0,g.B)(this.uA,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.UG=function(){return this.o};
g.h.pY=function(a){this.la()||a||(A7(this,"Cast session died."),this.Ke())};g.C(C7,z7);g.h=C7.prototype;g.h.Fw=function(a){this.C=a;this.C.addUpdateListener(this.L)};
g.h.Ok=function(a){this.D=a;this.G()};
g.h.stop=function(){this.o();this.o=g.A;g.eE(this.F);this.C?this.C.stop((0,g.B)(this.Ke,this,null),(0,g.B)(this.Ke,this,"Failed to stop DIAL device.")):this.Ke()};
g.h.X=function(){this.o();this.o=g.A;g.eE(this.F);this.C&&this.C.removeUpdateListener(this.L);this.C=null;C7.fa.X.call(this)};
g.h.sY=function(a){this.la()||a||(A7(this,"DIAL session died."),this.o(),this.o=g.A,this.Ke())};
g.h.ru=function(a){this.K=p6();if(this.D){var b=new window.chrome.cast.DialLaunchResponse(!0,zEa(this));a(b);yEa(this)}else this.G=(0,g.B)(function(){g.eE(this.F);this.G=g.A;this.F=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,zEa(this));a(b);yEa(this)},this),this.F=g.cE((0,g.B)(function(){this.G()},this),100)};
g.h.kN=function(a,b,c){tEa(this.J,this.H.receiver.label,a,this.A.friendlyName,(0,g.B)(function(a){a&&a.token?(this.Cq(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.ru(b,c)},this),(0,g.B)(function(a){A7(this,"Failed to get DIAL screen: "+a);
this.ru(b,c)},this))};g.C(D7,z7);D7.prototype.stop=function(){this.Ke()};
D7.prototype.Fw=g.A;D7.prototype.Ok=function(){g.eE(this.o);this.o=window.NaN;var a=r6(this.J.Fe(),this.A.label);a?this.Cq(a):this.Ke(Error("No such screen"))};
D7.prototype.X=function(){g.eE(this.o);this.o=window.NaN;D7.fa.X.call(this)};g.C(E7,g.MF);g.h=E7.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.G);this.H||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.B)(this.xE,this),(0,g.B)(this.ZU,this),d,e);c.customDialLaunchCallback=(0,g.B)(this.RS,this);window.chrome.cast.initialize(c,
(0,g.B)(function(){this.la()||(window.chrome.cast.addReceiverActionListener(this.C),gEa(),this.A.subscribe("onlineScreenChange",(0,g.B)(this.TG,this)),this.B=BEa(this),window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(a){this.kc("Failed to set initial custom receivers: "+g.Gg(a))},this)),this.V("yt-remote-cast2-availability-change",G7(this)),b(!0))},this),(0,g.B)(function(a){this.kc("Failed to initialize API: "+g.Gg(a));
b(!1)},this))};
g.h.gX=function(a,b){F7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.B;if(!a||c&&c.id!=a)F7("Unsetting old screen status: "+this.o.A.friendlyName),H7(this,null)}if(a&&b){if(!this.o){c=r6(this.A.Fe(),a);if(!c){F7("setConnectedScreenStatus: Unknown screen.");return}var d=AEa(this,c);d||(F7("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.B.push(d),
window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(a){this.kc("Failed to set initial custom receivers: "+g.Gg(a))},this)));
F7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);H7(this,new D7(this.A,d),!0)}this.o.Gw(b)}else F7("setConnectedScreenStatus: no screen.")};
g.h.hX=function(a){this.la()?this.kc("Setting connection data on disposed cast v2"):this.o?this.o.Ok(a):this.kc("Setting connection data without a session")};
g.h.rY=function(){this.la()?this.kc("Stopping session on disposed cast v2"):this.o?(this.o.stop(),H7(this,null)):F7("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.B)(this.xE,this),(0,g.B)(this.uV,this))};
g.h.X=function(){this.A.unsubscribe("onlineScreenChange",(0,g.B)(this.TG,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.C);g.Sa(g.y("yt.mdx.remote.debug.handlers_")||[],dEa);g.kf(this.o);E7.fa.X.call(this)};
g.h.kc=function(a){j7("Controller",a)};
g.h.yE=function(a,b){this.o==a&&(b||H7(this,null),this.V("yt-remote-cast2-session-change",b))};
g.h.VU=function(a,b){if(!this.la())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),F7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.A.label!=a.label)F7("onReceiverAction_: Stopping active receiver: "+this.o.A.friendlyName),this.o.stop();else{F7("onReceiverAction_: Casting to active receiver.");this.o.B&&this.V("yt-remote-cast2-session-change",this.o.B);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:H7(this,
new D7(this.A,a));break;case window.chrome.cast.ReceiverType.DIAL:H7(this,new C7(this.A,a,this.F));break;case window.chrome.cast.ReceiverType.CAST:H7(this,new B7(this.A,a));break;default:this.kc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.o&&this.o.A.label==a.label?this.o.stop():this.kc("Stopping receiver w/o session: "+a.friendlyName)}else this.kc("onReceiverAction_ called without receiver.")};
g.h.RS=function(a){if(this.la())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.kc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.A:null;if(!c||c.label!=b.label)return this.kc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.o.B)return F7("Reselecting dial screen."),
this.V("yt-remote-cast2-session-change",this.o.B),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.kc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H7(this,new C7(this.A,b,this.F))}b=this.o;b.H=a;return b.H.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.B)(b.kN,b,(b.H.extraData||{}).screenId||null)):new window.Promise((0,g.B)(b.ru,b))};
g.h.xE=function(a){if(!this.la()){F7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)F7("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),H7(this,new B7(this.A,b),!0);else{this.kc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.A,d=r6(this.A.Fe(),c.label);
d&&m6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(F7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.kf(this.o),this.o=new B7(this.A,b),this.o.subscribe("sessionScreen",(0,g.B)(this.yE,this,this.o)),this.o.Ok(null));this.o.Fw(a)}}};
g.h.qY=function(){return this.o?this.o.UG():null};
g.h.uV=function(a){this.la()||(this.kc("Failed to estabilish a session: "+g.Gg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&H7(this,null))};
g.h.ZU=function(a){F7("Receiver availability updated: "+a);if(!this.la()){var b=G7(this);this.D=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;G7(this)!=b&&this.V("yt-remote-cast2-availability-change",G7(this))}};
g.h.TG=function(){this.la()||(this.B=BEa(this),F7("Updating custom receivers: "+g.Gg(this.B)),window.chrome.cast.setCustomReceivers(this.B,g.A,(0,g.B)(function(){this.kc("Failed to set custom receivers.")},this)),this.V("yt-remote-cast2-availability-change",G7(this)))};
E7.prototype.setLaunchParams=E7.prototype.hX;E7.prototype.setConnectedScreenStatus=E7.prototype.gX;E7.prototype.stopSession=E7.prototype.rY;E7.prototype.getCastSession=E7.prototype.qY;E7.prototype.requestSession=E7.prototype.requestSession;E7.prototype.init=E7.prototype.init;E7.prototype.dispose=E7.prototype.dispose;var N7=[];g.h=S7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";T7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.o=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.A=a.trackData,this.ng=a.hasPrevious,this.hasNext=a.hasNext,this.H=a.playerTime,this.G=a.playerTimeAt,this.D=a.seekableStart,this.B=a.seekableEnd,this.J=a.duration,this.K=a.loadedTime,this.C=a.liveIngestionTime,this.F=!(0,window.isNaN)(this.C))};
g.h.qb=function(){return 1==this.o};
g.h.isAdPlaying=function(){return 1081==this.o};
g.h.getDuration=function(){return this.F?this.J+U7(this):this.J};
g.h.clone=function(){return new S7(Y7(this))};g.C($7,g.MF);g.h=$7.prototype;g.h.play=function(){1==this.o?(this.A?this.A.play(null,g.A,f8(this,"play")):e8(this,"play"),d8(this,1,W7(a8(this))),this.V("remotePlayerChange")):b8(this,this.play)};
g.h.pause=function(){1==this.o?(this.A?this.A.pause(null,g.A,f8(this,"pause")):e8(this,"pause"),d8(this,2,W7(a8(this))),this.V("remotePlayerChange")):b8(this,this.pause)};
g.h.OG=function(a){if(1==this.o){if(this.A){var b=a8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.qb()||3==b.o?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.A.seek(c,g.A,f8(this,"seekTo",{newTime:a}))}else e8(this,"seekTo",{newTime:a});d8(this,3,a);this.V("remotePlayerChange")}else b8(this,g.Da(this.OG,a))};
g.h.stop=function(){if(1==this.o){this.A?this.A.stop(null,g.A,f8(this,"stopVideo")):e8(this,"stopVideo");var a=a8(this);a.index=-1;a.videoId="";T7(a);c8(this,a);this.V("remotePlayerChange")}else b8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=a8(this);if(this.B){if(c.volume!=a){var d=Math.round(a)/100;this.B.setReceiverVolumeLevel(d,(0,g.B)(function(){j7("CP","set receiver volume: "+d)},this),(0,g.B)(function(){this.kc("failed to set receiver volume.")},this))}c.muted!=b&&this.B.setReceiverMuted(b,(0,g.B)(function(){j7("CP","set receiver muted: "+b)},this),(0,g.B)(function(){this.kc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);e8(this,"setVolume",e)}c.muted=b;c.volume=a;c8(this,c)}else b8(this,g.Da(this.setVolume,a,b))};
g.h.OF=function(a,b){if(1==this.o){var c=a8(this),d={videoId:a};b&&(c.A={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Gg(b.style),g.fc(d,c.A));e8(this,"setSubtitlesTrack",d);c8(this,c)}else b8(this,g.Da(this.OF,a,b))};
g.h.Cx=function(a,b){if(1==this.o){e8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Lb.id});var c=a8(this);c.audioTrackId=b.Lb.id;c8(this,c)}else b8(this,g.Da(this.Cx,a,b))};
g.h.NG=function(a,b){if(1==this.o){if(a&&b){var c=a8(this);X7(c,a,b);c8(this,c)}e8(this,"previous")}else b8(this,g.Da(this.NG,a,b))};
g.h.MG=function(a,b){if(1==this.o){if(a&&b){var c=a8(this);X7(c,a,b);c8(this,c)}e8(this,"next")}else b8(this,g.Da(this.MG,a,b))};
g.h.Qz=function(){1==this.o?e8(this,"dismissAutoplay"):b8(this,this.Qz)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.V("proxyStateChange",a,this.o)}$7.fa.dispose.call(this)};
g.h.X=function(){OEa(this);this.C=null;this.D.clear();Z7(this,null);$7.fa.X.call(this)};
g.h.Dx=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)g.DC(this.D).apply(this);else 3==a&&this.dispose()}};
g.h.QU=function(a,b){this.V(a,b)};
g.h.oS=function(a){if(!a)this.Bn(null),Z7(this,null);else if(this.B.receiver.volume){a=this.B.receiver.volume;var b=a8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)j7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,c8(this,b)}};
g.h.Bn=function(a){j7("CP","Cast media: "+!!a);this.A&&this.A.removeUpdateListener(this.H);if(this.A=a)this.A.addUpdateListener(this.H),PEa(this),this.V("remotePlayerChange")};
g.h.mS=function(a){a?(PEa(this),this.V("remotePlayerChange")):this.Bn(null)};
g.h.AS=function(){var a=LEa();a&&Z7(this,a)};
g.h.kc=function(a){j7("CP",a)};g.C(g8,g.MF);g.h=g8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.u(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.u(k)&&(l.currentIndex=k);c&&(this.gb.listId=c);this.gb.videoId=d;this.gb.index=k||0;this.gb.state=3;V7(this.gb,m);this.C="UNSUPPORTED";h8("Connecting with setPlaylist and params: "+g.Gg(l));this.o.connect({method:"setPlaylist",
params:g.Gg(l)},a,jDa())}else h8("Connecting without params"),this.o.connect({},a,jDa());REa(this)};
g.h.dispose=function(){this.la()||(this.V("beforeDispose"),i8(this,3));g8.fa.dispose.call(this)};
g.h.X=function(){j8(this);l8(this);k8(this);g.eE(this.J);this.J=window.NaN;g.eE(this.K);this.K=window.NaN;this.B=null;g.wF(this.Y);this.Y.length=0;this.o.dispose();g8.fa.X.call(this);this.C=this.G=this.A=this.gb=this.o=null};
g.h.yL=function(){this.F(2)};
g.h.sS=function(){h8("Channel opened");this.P&&(this.P=!1,k8(this),this.N=g.cE((0,g.B)(function(){h8("Timing out waiting for a screen.");this.F(1)},this),15E3));
nDa(aEa(this.o),this.ba)};
g.h.pS=function(){h8("Channel closed");(0,window.isNaN)(this.D)?w6(!0):w6();this.dispose()};
g.h.qS=function(a){w6();(0,window.isNaN)(this.H())?(h8("Channel error: "+a+" without reconnection"),this.dispose()):(this.P=!0,h8("Channel error: "+a+" with reconnection in "+this.H()+" ms"),i8(this,2))};
g.h.rS=function(a){a.params?h8("Received: action="+a.action+", params="+g.Gg(a.params)):h8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.jx(a.params.devices);this.A=(0,g.I)(a,function(a){return new k6(a)});
a=!!g.Ja(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
UEa(this,a);break;case "loungeScreenDisconnected":g.Ua(this.A,function(a){return"LOUNGE_SCREEN"==a.type});
UEa(this,!1);break;case "remoteConnected":var b=new k6(g.jx(a.params.device));g.Ja(this.A,function(a){return b?a.id==b.id:!1})||g.Qa(this.A,b);
break;case "remoteDisconnected":b=new k6(g.jx(a.params.device));g.Ua(this.A,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":WEa(this,a);break;case "nowPlaying":YEa(this,a);break;case "onStateChange":XEa(this,a);break;case "onAdStateChange":ZEa(this,a);break;case "onVolumeChanged":$Ea(this,a);break;case "onSubtitlesTrackChanged":VEa(this,a);break;case "nowAutoplaying":aFa(this,a);break;case "autoplayDismissed":this.V("autoplayDismissed");break;case "autoplayUpNext":this.G=a.params.videoId||null;this.V("autoplayUpNext",this.G);break;case "onAutoplayModeChanged":this.C=
a.params.autoplayMode;this.V("autoplayModeChange",this.C);"DISABLED"==this.C&&this.V("autoplayDismissed");break;case "onHasPreviousNextChanged":bFa(this,a);break;case "requestAssistedSignIn":this.V("assistedSignInRequested",a.params.authCode);break;default:h8("Unrecognized action: "+a.action)}};
g.h.SW=function(){if(this.B){var a=this.B;this.B=null;this.gb.videoId!=a&&m8(this,"getNowPlaying")}};
g8.prototype.subscribe=g8.prototype.subscribe;g8.prototype.unsubscribeByKey=g8.prototype.ce;g8.prototype.ka=function(){var a=3;this.la()||(a=0,(0,window.isNaN)(this.H())?e7(this.o)&&(0,window.isNaN)(this.D)&&(a=1):a=2);return a};
g8.prototype.getProxyState=g8.prototype.ka;g8.prototype.F=function(a){h8("Disconnecting with "+a);j8(this);this.V("beforeDisconnect",a);1==a&&w6();bEa(this.o,a);this.dispose()};
g8.prototype.disconnect=g8.prototype.F;g8.prototype.ia=function(){var a=this.gb;this.B&&(a=this.gb.clone(),X7(a,this.B,a.index));return Y7(a)};
g8.prototype.getPlayerContextData=g8.prototype.ia;
g8.prototype.pa=function(a){var b=new S7(a);b.videoId&&b.videoId!=this.gb.videoId&&(this.B=b.videoId,g.eE(this.J),this.J=g.cE((0,g.B)(this.SW,this),5E3));var c=[];this.gb.listId==b.listId&&this.gb.videoId==b.videoId&&this.gb.index==b.index||c.push("remoteQueueChange");this.gb.o==b.o&&this.gb.volume==b.volume&&this.gb.muted==b.muted&&W7(this.gb)==W7(b)&&g.Gg(this.gb.A)==g.Gg(b.A)||c.push("remotePlayerChange");this.gb.reset(a);(0,g.D)(c,function(a){this.V(a)},this)};
g8.prototype.setPlayerContextData=g8.prototype.pa;g8.prototype.aa=function(){var a=this.o.F.id,b=g.Ja(this.A,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
g8.prototype.getOtherConnectedRemoteId=g8.prototype.aa;g8.prototype.H=function(){var a=this.o;return a.A.isActive()?a.A.A-(0,g.H)():window.NaN};
g8.prototype.getReconnectTimeout=g8.prototype.H;g8.prototype.da=function(){return this.C||"UNSUPPORTED"};
g8.prototype.getAutoplayMode=g8.prototype.da;g8.prototype.ga=function(){return this.G||""};
g8.prototype.getAutoplayVideoId=g8.prototype.ga;g8.prototype.wa=function(){if(!(0,window.isNaN)(this.H())){var a=this.o.A;g.ou(a.o);a.start()}};
g8.prototype.reconnect=g8.prototype.wa;g8.prototype.ma=function(a,b){m8(this,a,b);TEa(this)};
g8.prototype.sendMessage=g8.prototype.ma;g.C(n8,n7);g.h=n8.prototype;g.h.Fe=function(a){return this.ld.$_gs(a)};
g.h.contains=function(a){return!!this.ld.$_c(a)};
g.h.get=function(a){return this.ld.$_g(a)};
g.h.start=function(){this.ld.$_st()};
g.h.add=function(a,b,c){this.ld.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.ld.$_r(a,b,c)};
g.h.Dr=function(a,b,c,d){this.ld.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.A.length;a<b;++a)this.ld.$_ubk(this.A[a]);this.A.length=0;this.ld=null;n8.fa.X.call(this)};
g.h.nY=function(){this.V("screenChange")};
g.h.qU=function(){this.V("onlineScreenChange")};
w7.prototype.$_st=w7.prototype.start;w7.prototype.$_gspc=w7.prototype.oY;w7.prototype.$_gsppc=w7.prototype.SG;w7.prototype.$_c=w7.prototype.contains;w7.prototype.$_g=w7.prototype.get;w7.prototype.$_a=w7.prototype.add;w7.prototype.$_un=w7.prototype.Dr;w7.prototype.$_r=w7.prototype.remove;w7.prototype.$_gs=w7.prototype.Fe;w7.prototype.$_gos=w7.prototype.QG;w7.prototype.$_s=w7.prototype.subscribe;w7.prototype.$_ubk=w7.prototype.ce;var o8=null,p8=null,E8=null,t8=[];g.r(F8,g.M);g.h=F8.prototype;
g.h.X=function(){g.M.prototype.X.call(this);this.B.stop();this.D.stop();this.K.stop();this.N();this.o.unsubscribe("proxyStateChange",this.uE,this);this.o.unsubscribe("remotePlayerChange",this.En,this);this.o.unsubscribe("remoteQueueChange",this.Dq,this);this.o.unsubscribe("autoplayUpNext",this.QD,this);this.o.unsubscribe("previousNextChange",this.rE,this);this.o.unsubscribe("nowAutoplaying",this.iE,this);this.o.unsubscribe("autoplayDismissed",this.PD,this);this.o=this.C=null};
g.h.NC=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(I8(this)){if(!a8(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":a8(this.o).qb()?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.J.Cm(c[0],c[1]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":c=c[0],I8(this)&&this.o.Cx(this.T.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.T.getCurrentTime();K8(this,0==c?void 0:c);break;case "control_seek":K8(this,c[0]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":c=c[0],I8(this)&&this.o.Cx(this.T.getVideoData(1).videoId,c)}};
g.h.lS=function(a){this.K.tL(a)};
g.h.OX=function(a){this.NC("control_subtitles_set_track",g.Yb(a)?null:a)};
g.h.dG=function(){var a=this.T.Ec("captions","track");g.Yb(a)||J8(this,a)};
g.h.fE=function(a){if(I8(this)){this.o.unsubscribe("remotePlayerChange",this.En,this);var b=Math.round(a.volume);a=!!a.muted;var c=a8(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.L.start();this.o.subscribe("remotePlayerChange",this.En,this)}};
g.h.HT=function(){g.Yb(this.F)||nFa(this,this.F);this.G=!1};
g.h.uE=function(a,b){this.D.stop();2==b&&this.aG()};
g.h.En=function(){if(I8(this)){this.B.stop();var a=a8(this.o);switch(a.o){case 1080:case 1081:case 1084:case 1085:this.C.G=1;break;case 1082:case 1083:this.C.G=0;break;default:this.C.G=-1}switch(a.o){case 1081:case 1:H8(this,new g.MP(8));this.ZF();break;case 1085:case 3:H8(this,new g.MP(9));break;case 1083:case 0:H8(this,new g.MP(2));this.J.stop();G8(this,this.T.getVideoData().lengthSeconds);break;case 1084:H8(this,new g.MP(4));break;case 2:H8(this,new g.MP(4));G8(this,W7(a));break;case -1:H8(this,
new g.MP(64));break;case -1E3:H8(this,new g.MP(128,{errorCode:"mdx.remoteerror",message:"This video is not available for remote playback."}))}a=a8(this.o).A;var b=this.F;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.F=a,nFa(this,a));a=a8(this.o);-1==a.volume||Math.round(this.T.getVolume())==a.volume&&this.T.isMuted()==a.muted||this.L.isActive()||this.zG()}else mFa(this)};
g.h.rE=function(){this.T.V("mdxpreviousnextchange")};
g.h.Dq=function(){I8(this)||mFa(this)};
g.h.xK=function(){this.o.Qz()};
g.h.QD=function(a){a&&(a=g.tE("/watch_queue_ajax",{method:"GET",ed:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.B)(this.VV,this)}))&&(this.N=(0,g.B)(a.abort,a))};
g.h.VV=function(a,b){var c=new g.BO(g.Y(this.T),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.T.V("mdxautoplayupnext",c)};
g.h.iE=function(a){(0,window.isNaN)(a)||this.T.V("mdxnowautoplaying",a)};
g.h.PD=function(){this.T.V("mdxautoplaycanceled")};
g.h.pQ=function(a,b){-1==a8(this.o).o?K8(this,a):b&&this.o.OG(a)};
g.h.zG=function(){if(I8(this)){var a=a8(this.o);this.A.Ha(this.P);a.muted?this.T.mute():this.T.wg();this.T.setVolume(a.volume);this.P=this.A.R(this.T,"onVolumeChange",this.fE)}};
g.h.ZF=function(){this.B.stop();if(!this.o.la()){var a=a8(this.o);a.qb()&&H8(this,new g.MP(8));G8(this,W7(a));this.B.start()}};
g.h.aG=function(){this.D.stop();this.B.stop();var a=this.o.C.getReconnectTimeout();2==this.o.o&&!(0,window.isNaN)(a)&&this.D.start()};g.r(L8,g.W);L8.prototype.D=function(a){pFa(this,a.state)};g.r(M8,g.AY);M8.prototype.K=function(){var a=this.T.Ec("remote","receivers");a&&1<a.length&&!this.T.Ec("remote","quickCast")?(this.H=g.ib(a,this.D,this),g.BY(this,(0,g.I)(a,this.D)),a=this.T.Ec("remote","currentReceiver"),this.Jf(this.D(a)),this.enable(!0)):this.enable(!1)};
M8.prototype.D=function(a){return a.key};
M8.prototype.If=function(a){return"cast-selector-receiver"==a?"Cast...":this.H[a].name};
M8.prototype.Dd=function(a){g.AY.prototype.Dd.call(this,a);this.T.Xd("remote","currentReceiver",this.H[a]);this.C.Pb()};g.r(N8,g.DU);g.h=N8.prototype;g.h.create=function(){gFa(g.BM(g.Y(this.player)));this.D.push(g.XF("yt-remote-before-disconnect",this.hS,this));this.D.push(g.XF("yt-remote-connection-change",this.aV,this));this.D.push(g.XF("yt-remote-receiver-availability-change",this.sE,this));this.D.push(g.XF("yt-remote-auto-connect",this.YU,this));this.D.push(g.XF("yt-remote-receiver-resumed",this.XU,this));this.sE()};
g.h.load=function(){this.player.hv();g.DU.prototype.load.call(this);this.C=new F8(this,this.player,this.o);var a=(a=lFa())?a.currentTime:0;var b=D8()?new $7(y8(),void 0):null;0==a&&b&&(a=W7(a8(b)));0!=a&&(this.J=a||0,this.player.V("progresssync",a,void 0));oFa(this,this.F,this.F);g.M_(this.player.app,6)};
g.h.unload=function(){this.player.V("mdxautoplaycanceled");this.B=this.A;g.lf(this.C,this.o);this.o=this.C=null;g.DU.prototype.unload.call(this);g.M_(this.player.app,5)};
g.h.X=function(){g.YF(this.D);g.DU.prototype.X.call(this)};
g.h.pn=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.NC.apply(this.C,[a].concat(g.oa(c)))};
g.h.oL=function(){return this.loaded?this.C.suggestion:null};
g.h.ng=function(){return this.o?a8(this.o).ng:!1};
g.h.hasNext=function(){return this.o?a8(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.J};
g.h.dQ=function(){var a=a8(this.o),b=this.player.getVideoData();return{allowSeeking:g.Y(this.player).experiments.o("web_player_mdx_allow_seeking_change_killswitch")?this.player.Yc():!a.isAdPlaying()&&this.player.Yc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.F?a.C+U7(a):a.C,isPeggedToLive:1>=(a.F?a.B+U7(a):a.B)-this.getCurrentTime(),loaded:a.K,seekableEnd:a.F?a.B+U7(a):a.B,seekableStart:0<a.D?a.D+U7(a):a.D}};
g.h.eQ=function(){this.o&&this.o.MG()};
g.h.fQ=function(){this.o&&this.o.NG()};
g.h.hS=function(a){1==a&&(this.K=this.o?a8(this.o):null)};
g.h.aV=function(){var a=D8()?new $7(y8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.K=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.kf(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.K)&&a.videoId==this.player.getVideoData().videoId&&this.player.sC(a.videoId,W7(a)));this.player.V("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.sE=function(){this.H=[this.A].concat(iFa());var a=z8()||this.A;O8(this,a);this.player.ya("onMdxReceiversChange")};
g.h.YU=function(){var a=z8();O8(this,a)};
g.h.XU=function(){this.B=z8()};
g.h.cQ=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.H;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?Q7():O8(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.H.length&&"cast-selector-receiver"==this.H[1].key?(b&&Q7(),!0):!1}};
g.h.gQ=function(){e8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Gc=function(){return!1};g.AX.remote=N8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:00:49 Oct 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:38:30 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1240.443
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.061
  cdx.remote: 0.057
  esindex: 0.008
  LoadShardBlock: 349.668 (3)
  PetaboxLoader3.datanode: 220.526 (4)
  PetaboxLoader3.resolve: 380.72 (3)
  load_resource: 264.255
*/