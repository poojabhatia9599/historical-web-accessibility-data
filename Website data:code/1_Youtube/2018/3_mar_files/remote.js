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

(function(g){var window=this;var NAa=function(a,b){return g.Ub(a,b)},c6=function(a){g.Im(a,"zx",g.wb());
return a},d6=function(a,b,c){g.za(c)||(c=[String(c)]);
g.Lm(a.g,b,c)},OAa=function(a,b){var c=[];
g.qk(b,function(a){try{var b=g.YC.prototype.l.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.XC(b)&&c.push(a):c.push(a)},a);
return c},PAa=function(a,b){var c=OAa(a,b);
(0,g.B)(c,function(a){g.YC.prototype.remove.call(this,a)},a)},QAa=function(a,b,c,d){var e=new g.zm(null,void 0);
a&&g.Am(e,a);b&&g.Bm(e,b);c&&g.Cm(e,c);d&&g.Dm(e,d);return e},RAa=function(a){g.SF[a]&&(a=g.SF[a],(0,g.B)(a,function(a){g.QF[a]&&delete g.QF[a]}),a.length=0)},SAa=function(a){var b=g.PF();
if(b)if(b.clear(a),a)RAa(a);else for(var c in g.SF)RAa(c)},e6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.o=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.tm;this.g=this.l="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",TAa(this,a.capabilities||""),UAa(this,a.experiments||""),this.l=a.remoteControllerUrl||"",
this.g=a.localChannelEncryptionKey||"")},TAa=function(a,b){a.capabilities.clear();
(0,g.Id)(b.split(","),g.Fa(NAa,VAa)).forEach(function(b){a.capabilities.add(b)})},UAa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},f6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},g6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},WAa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},XAa=function(a){return new f6(a)},YAa=function(a){return g.za(a)?(0,g.I)(a,XAa):[]},h6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},i6=function(a){return g.za(a)?"["+(0,g.I)(a,h6).join(",")+"]":"null"},j6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},ZAa=function(a){return(0,g.I)(a,function(a){return{key:a.id,
name:a.name}})},k6=function(a,b){return g.La(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},l6=function(a,b){return g.La(a,function(a){return g6(a,b)})},$Aa=function(){var a=(0,g.LG)();
a&&PAa(a,a.g.Qd(!0))},m6=function(){var a=g.OG("yt-remote-connected-devices")||[];
g.gb(a);return a},aBa=function(a){if(g.Pa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.I)(a,function(a,b){return 0==b?a:a.substring(c.length)})},bBa=function(a){g.NG("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.OG("yt-remote-device-id");a||(a=j6(),g.NG("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.D(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.D(a,b);g.QG()&&g.jb(a,b);a=aBa(a);if(g.Pa(a))try{g.yG("remote_sid")}catch(c){}else try{g.xG("remote_sid",a.join(","),-1)}catch(c){}},cBa=function(){return g.OG("yt-remote-session-browser-channel")},dBa=function(){return g.OG("yt-remote-local-screens")||[]},eBa=function(){g.NG("yt-remote-lounge-token-expiration",!0,86400)},fBa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.I)(dBa(),function(a){return a.loungeToken}),c=(0,g.I)(a,function(a){return a.loungeToken});
(0,g.im)(c,function(a){return!g.D(b,a)})&&eBa();
g.NG("yt-remote-local-screens",a,31536E3)},gBa=function(a,b){g.NG("yt-remote-session-browser-channel",a);
g.NG("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.D(c,d)||c.push(d);bBa(c);p6()},q6=function(a){a||(g.PG("yt-remote-session-screen-id"),g.PG("yt-remote-session-video-id"));
p6();a=m6();g.Ta(a,o6());bBa(a)},hBa=function(){if(!r6){var a=g.iD();
a&&(r6=new g.SC(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},iBa=function(){var a=window.document.createElement("a");
g.Xc(a,"https://web.archive.org/web/20180228003804/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Ab(a)},jBa=function(a,b){var c=g.Bd("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.Yc(c,g.ae("https://web.archive.org/web/20180228003804/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},kBa=function(){var a=iBa(),b=window.document.getElementById(a),c=b&&g.dF(b,"loaded");
c||b&&!c||(b=jBa(a,function(){g.dF(b,"loaded")||(g.cF(b,"loaded","true"),g.WF(a),g.RD(g.Fa(SAa,a),0))}))},s6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},lBa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},t6=function(a){a.length?mBa(a.shift(),function(){t6(a)}):u6()},nBa=function(a){return"chrome-extension://"+a+v6},mBa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},w6=function(a){return 0<=window.navigator.userAgent.indexOf(a)},u6=function(){var a=lBa();
a&&a(!1,"No cast extension found")},x6=function(){if(oBa){var a=2,b=lBa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;mBa("//web.archive.org/web/20180228003804/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",u6,c)}},pBa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(x6(),a({command:"cast.sender.init"}))},qBa=function(){x6();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);t6(["//web.archive.org/web/20180228003804/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+v6,"//web.archive.org/web/20180228003804/https://www.gstatic.com/eureka/clank"+v6])},y6=function(a,b,c){g.L.call(this);
this.C=null!=c?(0,g.z)(a,c):a;this.ed=b;this.B=(0,g.z)(this.vI,this);this.g=!1;this.l=0;this.o=this.ya=null;this.A=[]},z6=function(){},A6=function(a,b,c,d){this.g=a;
this.o=b;this.F=c;this.D=d||1;this.B=45E3;this.A=new g.Pm(this);this.l=new g.rg;this.l.setInterval(250)},sBa=function(a,b,c){a.xj=1;
a.hh=c6(b.clone());a.Ji=c;a.C=!0;rBa(a,null)},B6=function(a,b,c,d,e){a.xj=1;
a.hh=c6(b.clone());a.Ji=null;a.C=c;e&&(a.UC=!1);rBa(a,d)},rBa=function(a,b){a.dk=(0,g.G)();
C6(a);a.Ah=a.hh.clone();d6(a.Ah,"t",a.D);a.im=0;a.Sc=a.g.Nq(a.g.Yl()?b:null);0<a.ur&&(a.Vo=new g.Sk((0,g.z)(a.kE,a,a.Sc),a.ur));a.A.T(a.Sc,"readystatechange",a.yT);var c=a.ki?g.ac(a.ki):{};a.Ji?(a.Fp="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Sc.send(a.Ah,a.Fp,a.Ji,c)):(a.Fp="GET",a.UC&&!g.xd&&(c.Connection="close"),a.Sc.send(a.Ah,a.Fp,null,c));a.g.rf(1)},vBa=function(a,b,c){for(var d=!0;!a.Uh&&a.im<c.length;){var e=tBa(a,c);
if(e==D6){4==b&&(a.ih=4,E6(15),d=!1);break}else if(e==uBa){a.ih=4;E6(16);d=!1;break}else F6(a,e)}4==b&&0==c.length&&(a.ih=1,E6(17),d=!1);a.xf=a.xf&&d;d||(G6(a),H6(a))},tBa=function(a,b){var c=a.im,d=b.indexOf("\n",c);
if(-1==d)return D6;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return uBa;d+=1;if(d+c>b.length)return D6;var e=b.substr(d,c);a.im=d+c;return e},xBa=function(a,b){a.dk=(0,g.G)();
C6(a);var c=b?window.location.hostname:"";a.Ah=a.hh.clone();g.Im(a.Ah,"DOMAIN",c);g.Im(a.Ah,"t",a.D);try{a.yf=new window.ActiveXObject("htmlfile")}catch(n){G6(a);a.ih=7;E6(22);H6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in I6)k=I6[l];else if(l in wBa)k=I6[l]=wBa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=I6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Zc(g.uc("b/12014412"),d);a.yf.open();a.yf.write(g.Qc(c));a.yf.close();a.yf.parentWindow.m=(0,g.z)(a.GS,a);a.yf.parentWindow.d=(0,g.z)(a.hC,a,!0);a.yf.parentWindow.rpcClose=(0,g.z)(a.hC,a,!1);c=a.yf.createElement("DIV");a.yf.parentWindow.document.body.appendChild(c);d=g.Hc(a.Ah.toString());d=g.qb(g.Ec(d));d=g.Zc(g.uc("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=g.Qc(d);
a.g.rf(1)},C6=function(a){a.gv=(0,g.G)()+a.B;
yBa(a,a.B)},yBa=function(a,b){if(null!=a.xk)throw Error("WatchDog timer not null");
a.xk=J6((0,g.z)(a.XS,a),b)},K6=function(a){a.xk&&(g.w.clearTimeout(a.xk),a.xk=null)},H6=function(a){a.g.my()||a.Uh||a.g.Jo(a)},G6=function(a){K6(a);
g.$e(a.Vo);a.Vo=null;a.l.stop();g.Vm(a.A);if(a.Sc){var b=a.Sc;a.Sc=null;b.abort();b.dispose()}a.yf&&(a.yf=null)},F6=function(a,b){try{a.g.aC(a,b),a.g.rf(4)}catch(c){}},ABa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;zBa(a,b,function(e){e?c(!0):g.w.setTimeout(function(){ABa(a,b,c,d,f)},f)})}},zBa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{L6(d),c(!0)}catch(e){}};
d.onerror=function(){try{L6(d),c(!1)}catch(e){}};
d.onabort=function(){try{L6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{L6(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},L6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},BBa=function(a){this.g=a;
this.l=new z6},CBa=function(a){var b=M6(a.g,a.Ck,"/mail/images/cleardot.gif");
c6(b);ABa(b.toString(),5E3,(0,g.z)(a.HH,a),3,2E3);a.rf(1)},O6=function(a){var b=a.g.H;
if(null!=b)E6(5),b?(E6(11),N6(a.g,a,!1)):(E6(12),N6(a.g,a,!0));else if(a.ue=new A6(a,void 0,void 0,void 0),a.ue.ki=a.rr,b=a.g,b=M6(b,b.Yl()?a.bl:null,a.tr),E6(5),!g.vd||g.qc(10))d6(b,"TYPE","xmlhttp"),B6(a.ue,b,!1,a.bl,!1);else{d6(b,"TYPE","html");var c=a.ue;a=!!a.bl;c.xj=3;c.hh=c6(b.clone());xBa(c,a)}},P6=function(a,b,c){this.g=1;
this.l=[];this.A=[];this.B=new z6;this.F=a||null;this.H=null!=b?b:null;this.C=c||!1},DBa=function(a,b){this.g=a;
this.map=b;this.context=null},EBa=function(a){g.bf.call(this,"statevent",a)},FBa=function(a,b){g.bf.call(this,"timingevent",a);
this.size=b},GBa=function(a){g.bf.call(this,"serverreachability",a)},JBa=function(a){HBa(a);
if(3==a.g){var b=a.Jl++,c=a.Fn.clone();g.Im(c,"SID",a.o);g.Im(c,"RID",b);g.Im(c,"TYPE","terminate");Q6(a,c);b=new A6(a,a.o,b,void 0);b.xj=2;b.hh=c6(c.clone());(new window.Image).src=b.hh;b.dk=(0,g.G)();C6(b)}IBa(a)},KBa=function(a){a.cI(1,0);
a.Fn=M6(a,null,a.qr);R6(a)},HBa=function(a){a.Wg&&(a.Wg.abort(),a.Wg=null);
a.wc&&(a.wc.cancel(),a.wc=null);a.pg&&(g.w.clearTimeout(a.pg),a.pg=null);S6(a);a.Vd&&(a.Vd.cancel(),a.Vd=null);a.Yg&&(g.w.clearTimeout(a.Yg),a.Yg=null)},LBa=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.l.push(new DBa(a.xO++,b));2!=a.g&&3!=a.g||R6(a)},R6=function(a){a.Vd||a.Yg||(a.Yg=J6((0,g.z)(a.fC,a),0),a.pj=0)},NBa=function(a,b){if(1==a.g){if(!b){a.Jl=Math.floor(1E5*Math.random());
var c=a.Jl++,d=new A6(a,"",c,void 0);d.ki=null;var e=T6(a),f=a.Fn.clone();g.Im(f,"RID",c);g.Im(f,"CVER","1");Q6(a,f);sBa(d,f,e);a.Vd=d;a.g=2}}else 3==a.g&&(b?MBa(a,b):0==a.l.length||a.Vd||MBa(a))},MBa=function(a,b){if(b)if(6<a.Wh){a.l=a.A.concat(a.l);
a.A.length=0;var c=a.Jl-1;var d=T6(a)}else c=b.F,d=b.Ji;else c=a.Jl++,d=T6(a);var e=a.Fn.clone();g.Im(e,"SID",a.o);g.Im(e,"RID",c);g.Im(e,"AID",a.Mj);Q6(a,e);c=new A6(a,a.o,c,a.pj+1);c.ki=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Vd=c;sBa(c,e,d)},Q6=function(a,b){if(a.qd){var c=a.qd.Sx();
c&&g.Jb(c,function(a,c){g.Im(b,c,a)})}},T6=function(a){var b=Math.min(a.l.length,1E3),c=["count="+b];
if(6<a.Wh&&0<b){var d=a.l[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.l[e].g,k=a.l[e].map;f=6>=a.Wh?e:f-d;try{g.Jb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.A=a.A.concat(a.l.splice(0,b));
return c.join("&")},OBa=function(a){a.wc||a.pg||(a.D=1,a.pg=J6((0,g.z)(a.eC,a),0),a.dj=0)},U6=function(a){if(a.wc||a.pg||3<=a.dj)return!1;
a.D++;a.pg=J6((0,g.z)(a.eC,a),PBa(a,a.dj));a.dj++;return!0},N6=function(a,b,c){a.Ep=c;
a.If=b.xg;a.C||KBa(a)},S6=function(a){null!=a.Yh&&(g.w.clearTimeout(a.Yh),a.Yh=null)},PBa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},V6=function(a,b){if(2==b||9==b){var c=null;
a.qd&&(c=null);var d=(0,g.z)(a.tU,a);c||(c=new g.zm("//web.archive.org/web/20180228003804/https://www.google.com/images/cleardot.gif"),c6(c));zBa(c.toString(),1E4,d)}else E6(2);QBa(a,b)},QBa=function(a,b){a.g=0;
a.qd&&a.qd.Kw(b);IBa(a);HBa(a)},IBa=function(a){a.g=0;
a.If=-1;if(a.qd)if(0==a.A.length&&0==a.l.length)a.qd.Cq();else{g.Wa(a.A);var b=g.Wa(a.l);a.A.length=0;a.l.length=0;a.qd.Cq(b)}},M6=function(a,b,c){var d=g.Jm(c);
if(""!=d.l)b&&g.Bm(d,b+"."+d.l),g.Cm(d,d.B);else{var e=window.location;d=QAa(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c)}a.Nk&&g.Jb(a.Nk,function(a,b){g.Im(d,b,a)});
g.Im(d,"VER",a.Wh);Q6(a,d);return d},J6=function(a,b){if(!g.Ba(a))throw Error("Fn must not be null and must be a function");
return g.w.setTimeout(function(){a()},b)},E6=function(a){W6.dispatchEvent(new EBa(W6,a))},RBa=function(){},SBa=function(a,b){this.action=a;
this.params=b||{}},X6=function(a,b){g.L.call(this);
this.g=new g.Wt(this.xS,0,this);g.M(this,this.g);this.ed=5E3;this.l=0;if(g.Ba(a))b&&(a=(0,g.z)(a,b));else if(a&&g.Ba(a.handleEvent))a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.o=a},Y6=function(a,b,c){this.K=a;
this.C=b;this.o=new g.RC;this.l=new X6(this.YU,this);this.g=this.Ya=null;this.I=!1;this.B=null;this.H="";this.F=this.A=0;this.D=[];this.M=c||!1},TBa=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.Ep,sessionId:a.g.o,arrayId:a.g.Mj}},UBa=function(a,b){a.F=b||0;
a.l.stop();a.g&&(3==a.g.g&&NBa(a.g),JBa(a.g));a.F=0},Z6=function(a){return!!a.g&&3==a.g.g},VBa=function(a,b){(a.C.loungeIdToken=b)||a.l.stop()},$6=function(a){this.port=this.domain="";
this.g="/api/lounge";this.l=!0;a=a||window.document.location.href;var b=g.Ig(a)||"";b&&(this.port=":"+b);this.domain=g.Hg(a)||"";a=g.Hb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.zb(a,"10.0")&&(this.l=!1))},a7=function(a,b){var c=a.g;
if(g.t(void 0)?0:a.l)c="https://"+a.domain+a.port+a.g;return g.Rg(c+b,{})},b7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,Ib:g.Fa(a.A,d,!0),onError:g.Fa(a.o,e),wd:g.Fa(a.B,e)};c&&(a.Mb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.oE(b,a)},ZBa=function(){var a=WBa;
XBa();c7.push(a);YBa(c7)},d7=function(a,b){XBa();
var c=c7,d=$Ba(a,String(b));g.Pa(c)?aCa(d):(YBa(c),(0,g.B)(c,function(a){a(d)}))},XBa=function(){c7||(c7=g.x("yt.mdx.remote.debug.handlers_")||[],g.wa("yt.mdx.remote.debug.handlers_",c7,void 0))},aCa=function(a){var b=(e7+1)%50;
e7=b;f7[b]=a;g7||(g7=49==b)},YBa=function(a){var b=f7;
if(b[0]){var c=e7,d=g7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.B)(a,function(a){a(e)})}while(d!=c);
f7=Array(50);e7=-1;g7=!1}},$Ba=function(a,b){var c=((0,g.G)()-bCa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},h7=function(a){g.IF.call(this);
this.D=a;this.g=[]},cCa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},dCa=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Id)(a.g,function(a){return!!k6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=cCa(a,b[d])||c;return c},eCa=function(a,b){var c=a.g.length;
a.g=(0,g.Id)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c},i7=function(a,b,c,d){g.IF.call(this);
this.C=a;this.B=b;this.o=c;this.A=d;this.l=0;this.g=null;this.ya=window.NaN},k7=function(a){h7.call(this,"LocalScreenService");
this.o=a;this.l=window.NaN;j7(this);this.info("Initializing with "+i6(this.g))},fCa=function(a){if(a.g.length){var b=(0,g.I)(a.g,function(a){return a.id}),c=a7(a.o,"/pairing/get_lounge_token_batch");
b7(a.o,c,{screen_ids:b.join(",")},(0,g.z)(a.II,a),(0,g.z)(a.HI,a))}},j7=function(a){var b=YAa(dBa());
b=(0,g.Id)(b,function(a){return!a.uuid});
return dCa(a,b)},l7=function(a,b){fBa((0,g.I)(a.g,WAa));
b&&eBa()},n7=function(a,b){g.IF.call(this);
this.C=b;var c=g.OG("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.D(c,l)}this.g=d;this.B=a;this.o=this.A=window.NaN;this.l=null;m7("Initialized with "+g.yg(this.g))},gCa=function(a,b,c){var d=a7(a.B,"/pairing/get_screen_availability");
b7(a.B,d,{lounge_token:b.token},(0,g.z)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},o7=function(a,b){a:if(g.Ob(b)!=g.Ob(a.g))var c=!1;
else{c=g.Rb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(m7("Updated online screens: "+g.yg(a.g)),a.g=b,a.R("screenChange"));hCa(a)},p7=function(a){(0,window.isNaN)(a.o)||g.TD(a.o);
a.o=g.RD((0,g.z)(a.pu,a),0<a.A&&a.A<(0,g.G)()?2E4:1E4)},m7=function(a){d7("OnlineScreenService",a)},iCa=function(a){var b={};
(0,g.B)(a.C(),function(a){a.token?b[a.token]=a.id:this.gc("Requesting availability of screen w/o lounge token.")});
return b},hCa=function(a){a=g.Rb(g.Kb(a.g,function(a){return a}));
g.gb(a);a.length?g.NG("yt-remote-online-screen-ids",a.join(","),60):g.PG("yt-remote-online-screen-ids")},q7=function(a){h7.call(this,"ScreenService");
this.C=a;this.l=this.o=null;this.A=[];this.B={};jCa(this)},lCa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.ne();if(k=(c?l6(k,c):null)||l6(k,b)){k.uuid=b;var l=r7(a,k);gCa(a.l,l,function(a){e(a?l:null)})}else c?kCa(a,c,(0,g.z)(function(a){var f=r7(this,new f6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));gCa(this.l,f,function(a){e(a?f:null)})},a),f):e(null)},mCa=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},kCa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Mb:{screen_ids:b},method:"POST",context:a,Ib:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.oE(a7(a.C,"/pairing/get_lounge_token_batch"),e)},nCa=function(a){a.g=a.o.ne();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+i6(a.g))},jCa=function(a){s7(a);
a.o=new k7(a.C);a.o.subscribe("screenChange",(0,g.z)(a.ZI,a));nCa(a);a.A=YAa(g.OG("yt-remote-automatic-screen-cache")||[]);s7(a);a.info("Initializing automatic screens: "+i6(a.A));a.l=new n7(a.C,(0,g.z)(a.ne,a,!0));a.l.subscribe("screenChange",(0,g.z)(function(){this.R("onlineScreenChange")},a))},r7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=l6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.NG("yt-remote-automatic-screen-cache",(0,g.I)(a.A,WAa)));s7(a);a.B[b.uuid]=b.id;g.NG("yt-remote-device-id-map",a.B,31536E3);return b},s7=function(a){a.B=g.OG("yt-remote-device-id-map")||{}},t7=function(a,b,c){g.IF.call(this);
this.M=c;this.H=a;this.l=b;this.o=null},u7=function(a,b){d7(a.M,b)},v7=function(a,b){t7.call(this,a,b,"CastSession");
this.g=null;this.A=0;this.C=(0,g.z)(this.eV,this);this.B=(0,g.z)(this.iT,this);this.A=g.RD((0,g.z)(function(){oCa(this,null)},this),12E4)},pCa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.yg(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.y,(0,g.z)(function(){u7(this,"Failed to send message: getMdxSessionStatus.")},a)):u7(a,"Sending yt message without session: "+g.yg(b))},oCa=function(a,b){g.TD(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.o||a.o.id!=b){var c=(0,g.z)(a.Ko,a),d=(0,g.z)(a.se,a);a.fy(b,c,d,5)}}else a.se(Error("Waiting for session status timed out."))},w7=function(a,b,c){t7.call(this,a,b,"DialSession");
this.A=this.F=null;this.I="";this.N=c;this.B=null;this.D=g.y;this.C=window.NaN;this.K=(0,g.z)(this.hV,this);this.g=g.y},qCa=function(a){a.g=a.H.rE(a.I,a.l.label,a.l.friendlyName,(0,g.z)(function(a){this.g=g.y;
this.Ko(a)},a),(0,g.z)(function(a){this.g=g.y;
this.se(a)},a))},rCa=function(a){var b={};
b.pairingCode=a.I;b.theme=a.N;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}hBa()&&(b.env_useStageMdx=1);return g.Pg(b)},x7=function(a,b){t7.call(this,a,b,"ManualSession");
this.g=g.RD((0,g.z)(this.Nj,this,null),150)},y7=function(a,b,c,d){g.IF.call(this);
this.l=a;this.D=b||"233637DE";this.C=c||"cl";this.F=d||!1;this.g=null;this.B=!1;this.o=[];this.A=(0,g.z)(this.LR,this)},sCa=function(a,b){return b?g.La(a.o,function(a){return g6(b,a.label)},a):null},z7=function(a){d7("Controller",a)},WBa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},A7=function(a){return a.B||!!a.o.length||!!a.g},B7=function(a,b,c){b!=a.g&&(g.$e(a.g),(a.g=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.l):a.R("yt-remote-cast2-receiver-selected",
b.l),b.subscribe("sessionScreen",(0,g.z)(a.cC,a,b)),b.o?a.R("yt-remote-cast2-session-change",b.o):c&&a.g.Nj(null)):a.R("yt-remote-cast2-session-change",null))},tCa=function(a){var b=a.l.qE(),c=a.g&&a.g.l;
a=(0,g.I)(b,function(a){c&&g6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=sCa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},zCa=function(a,b,c,d,e,f,k){uCa()?vCa(b,e,f,k)&&(D7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?wCa(a,c):(window.__onGCastApiAvailable=function(b,d){b?wCa(a,c):(E7("Failed to load cast API: "+d),F7(!1),D7(!1),g.PG("yt-remote-cast-available"),g.PG("yt-remote-cast-receiver"),xCa(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20180228003804/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):kBa():w6("CriOS")?pBa():w6("Android")&&w6("Chrome/")&&window.navigator.presentation?qBa():window.chrome&&window.navigator.presentation&&!w6("Edge")?(x6(),t6(yCa.map(nBa))):u6())):C7("Cannot initialize because not running Chrome")},xCa=function(){C7("dispose");
var a=G7();a&&a.dispose();g.wa("yt.mdx.remote.cloudview.instance_",null,void 0);ACa(!1);g.UF(H7);H7.length=0},I7=function(){return!!g.OG("yt-remote-cast-installed")},BCa=function(){var a=g.OG("yt-remote-cast-receiver");
return a?a.friendlyName:null},CCa=function(){C7("clearCurrentReceiver");
g.PG("yt-remote-cast-receiver")},DCa=function(){return I7()?G7()?G7().getCastSession():(E7("getCastSelector: Cast is not initialized."),null):(E7("getCastSelector: Cast API is not installed!"),null)},K7=function(){I7()?G7()?J7()?(C7("Requesting cast selector."),G7().requestSession()):(C7("Wait for cast API to be ready to request the session."),H7.push(g.TF("yt-remote-cast2-api-ready",K7))):E7("requestCastSelector: Cast is not initialized."):E7("requestCastSelector: Cast API is not installed!")},L7=
function(a,b){J7()?G7().setConnectedScreenStatus(a,b):E7("setConnectedScreenStatus called before ready.")},uCa=function(){var a=0<=g.Hb.search(/ (CrMo|Chrome|CriOS)\//);
return g.QJ||a},ECa=function(a,b){G7().init(a,b)},vCa=function(a,b,c,d){var e=!1;
G7()||(a=new y7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.NG("yt-remote-cast-available",a);g.XF("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){C7("onReceiverSelected: "+a.friendlyName);
g.NG("yt-remote-cast-receiver",a);g.XF("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){C7("onReceiverResumed: "+a.friendlyName);
g.NG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){C7("onSessionChange: "+h6(a));
a||g.PG("yt-remote-cast-receiver");g.XF("yt-remote-cast2-session-change",a)}),g.wa("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
C7("cloudview.createSingleton_: "+e);return e},G7=function(){return g.x("yt.mdx.remote.cloudview.instance_")},wCa=function(a,b){F7(!0);
D7(!1);ECa(a,function(a){a?(ACa(!0),g.WF("yt-remote-cast2-api-ready")):(E7("Failed to initialize cast API."),F7(!1),g.PG("yt-remote-cast-available"),g.PG("yt-remote-cast-receiver"),xCa());b(a)})},C7=function(a){d7("cloudview",a)},E7=function(a){d7("cloudview",a)},F7=function(a){C7("setCastInstalled_ "+a);
g.NG("yt-remote-cast-installed",a)},J7=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},ACa=function(a){C7("setApiReady_ "+a);
g.wa("yt.mdx.remote.cloudview.apiReady_",a,void 0)},D7=function(a){g.wa("yt.mdx.remote.cloudview.initializing_",a,void 0)},M7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.g=-1;this.muted=!1;this.audioTrackId=null;this.D=this.F=0;this.l=null;this.hasNext=this.Lf=!1;this.I=this.H=this.o=this.B=0;this.A=window.NaN;this.C=!1;this.reset(a)},N7=function(a){a.audioTrackId=null;
a.l=null;a.g=-1;a.Lf=!1;a.hasNext=!1;a.F=0;a.D=(0,g.G)();a.B=0;a.o=0;a.H=0;a.I=0;a.A=window.NaN;a.C=!1},O7=function(a){return a.kb()?((0,g.G)()-a.D)/1E3:0},P7=function(a,b){a.F=b;
a.D=(0,g.G)()},Q7=function(a){switch(a.g){case 1:case 1081:return((0,g.G)()-a.D)/1E3+a.F;
case -1E3:return 0}return a.F},R7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&N7(a)},S7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.g;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.bc(a.l);b.hasPrevious=a.Lf;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.D;b.seekableStart=a.B;b.seekableEnd=a.o;b.duration=a.H;b.loadedTime=a.I;b.liveIngestionTime=a.A;return b},U7=function(a,b){g.IF.call(this);
this.g=0;this.A=a;this.C=[];this.B=new g.hC;this.o=this.l=null;this.H=(0,g.z)(this.hP,this);this.D=(0,g.z)(this.Ml,this);this.F=(0,g.z)(this.gP,this);this.I=(0,g.z)(this.uP,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.qv,this),FCa(this))):c=3;0!=c&&(b?this.qv(c):g.RD((0,g.z)(function(){this.qv(c)},this),0));
var d=DCa();d&&T7(this,d);this.subscribe("yt-remote-cast2-session-change",this.I)},V7=function(a){return new M7(a.A.getPlayerContextData())},FCa=function(a){(0,g.B)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.C.push(this.A.subscribe(a,g.Fa(this.HR,a),this))},a)},GCa=function(a){(0,g.B)(a.C,function(a){this.A.unsubscribeByKey(a)},a);
a.C.length=0},W7=function(a,b){50>a.B.Fc()&&g.jC(a.B,b)},Y7=function(a,b,c){var d=V7(a);
P7(d,c);-1E3!=d.g&&(d.g=b);X7(a,d)},Z7=function(a,b,c){a.A.sendMessage(b,c)},X7=function(a,b){GCa(a);
a.A.setPlayerContextData(S7(b));FCa(a)},T7=function(a,b){a.o&&(a.o.removeUpdateListener(a.H),a.o.removeMediaListener(a.D),a.Ml(null));
a.o=b;a.o&&(d7("CP","Setting cast session: "+a.o.sessionId),a.o.addUpdateListener(a.H),a.o.addMediaListener(a.D),a.o.media.length&&a.Ml(a.o.media[0]))},HCa=function(a){var b=a.l.media,c=a.l.customData;
if(b&&c){var d=V7(a);b.contentId!=d.videoId&&d7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;P7(d,a.l.getEstimatedTime());X7(a,d)}else d7("CP","No cast media video. Ignoring state update.")},$7=function(a,b,c){return(0,g.z)(function(a){this.gc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.gc("Retrying "+b+" using MDx browser channel."),Z7(this,b,c))},a)},a8=function(a,b,c){g.IF.call(this);
this.B=window.NaN;this.N=!1;this.I=this.H=this.K=this.M=window.NaN;this.P=[];this.A=this.D=this.o=this.Za=this.g=null;this.oa=a;this.P.push(g.sF(window,"beforeunload",(0,g.z)(this.zI,this)));this.l=[];this.Za=new M7;this.X=b.id;this.g=ICa(this,c);this.g.subscribe("handlerOpened",this.lP,this);this.g.subscribe("handlerClosed",this.iP,this);this.g.subscribe("handlerError",this.jP,this);this.g.subscribe("handlerMessage",this.kP,this);VBa(this.g,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.Za.videoId;g.QG()&&g.NG("yt-remote-session-video-id",a)},this)},b8=function(a){d7("conn",a)},ICa=function(a,b){return new Y6(a7(a.oa,"/bc"),b)},c8=function(a,b){a.R("proxyStateChange",b)},JCa=function(a){a.B=g.RD((0,g.z)(function(){b8("Connecting timeout");
this.C(1)},a),2E4)},d8=function(a){g.TD(a.B);
a.B=window.NaN},e8=function(a){g.TD(a.M);
a.M=window.NaN},KCa=function(a){f8(a);
a.K=g.RD((0,g.z)(function(){g8(this,"getNowPlaying")},a),2E4)},f8=function(a){g.TD(a.K);
a.K=window.NaN},MCa=function(a,b){b&&(d8(a),e8(a));
b==(Z6(a.g)&&(0,window.isNaN)(a.B))?b&&(c8(a,1),g8(a,"getSubtitlesTrack")):b?(a.W()&&a.Za.reset(),c8(a,1),g8(a,"getNowPlaying"),LCa(a)):a.C(1)},NCa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Za.videoId&&(g.Xb(b.params)?a.Za.l=null:a.Za.l=b.params,a.R("remotePlayerChange"))},OCa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.Za.listId=b.params.listId||a.Za.listId;R7(a.Za,c,d);a.R("remoteQueueChange")},QCa=function(a,b){b.params=b.params||{};
OCa(a,b);PCa(a,b);a.R("autoplayDismissed")},PCa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
P7(a.Za,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.Za.g&&(c=-1E3);a.Za.g=c;c=Number(b.params.loadedTime);a.Za.I=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.Za.H=(0,window.isNaN)(c)?0:c;c=a.Za;var d=Number(b.params.liveIngestionTime);c.A=d;c.C=(0,window.isNaN)(d)?!1:!0;c=a.Za;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.B=(0,window.isNaN)(d)?0:d;c.o=(0,window.isNaN)(e)?0:e;1==a.Za.g?KCa(a):f8(a);
a.R("remotePlayerChange")},RCa=function(a,b){if(-1E3!=a.Za.g){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Za.g=c;c=(0,window.parseInt)(b.params.currentTime,10);P7(a.Za,(0,window.isNaN)(c)?0:c);a.R("remotePlayerChange")}},SCa=function(a,b){var c="true"==b.params.muted;
a.Za.volume=(0,window.parseInt)(b.params.volume,10);a.Za.muted=c;a.R("remotePlayerChange")},TCa=function(a,b){a.D=b.params.videoId;
a.R("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},UCa=function(a,b){var c="true"==b.params.hasNext;
a.Za.Lf="true"==b.params.hasPrevious;a.Za.hasNext=c;a.R("previousNextChange")},LCa=function(a){g.TD(a.I);
a.I=g.RD((0,g.z)(a.C,a,1),864E5)},g8=function(a,b,c){c?b8("Sending: action="+b+", params="+g.yg(c)):b8("Sending: action="+b);
a.g.sendMessage(b,c)},h8=function(a){h7.call(this,"ScreenServiceProxy");
this.dd=a;this.l=[];this.l.push(this.dd.$_s("screenChange",(0,g.z)(this.cV,this)));this.l.push(this.dd.$_s("onlineScreenChange",(0,g.z)(this.hR,this)))},ZCa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.LD("MDX_CONFIG")||b;$Aa();p6();i8||(i8=new $6(b?b.loungeApiHost:void 0),hBa()&&(i8.g="/api/loungedev"));j8||(j8=g.x("yt.mdx.remote.deferredProxies_")||[],g.wa("yt.mdx.remote.deferredProxies_",j8,void 0));VCa();var c=k8();if(!c){var d=new q7(i8);g.wa("yt.mdx.remote.screenService_",d,void 0);c=k8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);zCa(a,d,function(a){a?l8()&&L7(l8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.XF("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.wa("yt.mdx.remote.initialized_",!0,void 0),m8("Initializing: "+g.yg(b)),n8.push(g.TF("yt-remote-cast2-availability-change",function(){g.XF("yt-remote-receiver-availability-change")})),n8.push(g.TF("yt-remote-cast2-receiver-selected",function(){o8(null);
g.XF("yt-remote-auto-connect","cast-selector-receiver")})),n8.push(g.TF("yt-remote-cast2-receiver-resumed",function(){g.XF("yt-remote-receiver-resumed","cast-selector-receiver")})),n8.push(g.TF("yt-remote-cast2-session-change",WCa)),n8.push(g.TF("yt-remote-connection-change",function(a){a?L7(l8(),"YouTube TV"):p8()||(L7(null,null),CCa())})),a=q8(),b.isAuto&&(a.id+="#dial"),g.JE("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),m8(" -- with channel params: "+
g.yg(a)),XCa(a),c.start(),l8()||YCa())},aDa=function(){var a=$Ca();
I7()&&g.OG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},$Ca=function(){var a=k8().dd.$_gos();
var b=r8();b&&s8()&&(k6(a,b)||a.push(b));return ZAa(a)},t8=function(){var a=bDa();
!a&&I7()&&BCa()&&(a={key:"cast-selector-receiver",name:BCa()});return a},bDa=function(){var a=$Ca(),b=r8();
b||(b=p8());return g.La(a,function(a){return b&&g6(b,a.key)?!0:!1})},r8=function(){var a=l8();
if(!a)return null;var b=k8().ne();return l6(b,a)},WCa=function(a){m8("remote.onCastSessionChange_: "+h6(a));
if(a){var b=r8();b&&b.id==a.id?L7(b.id,"YouTube TV"):(b&&u8(),v8(a,1))}else s8()&&u8()},u8=function(){J7()?G7().stopSession():E7("stopSession called before API ready.");
var a=s8();a&&(a.disconnect(1),w8(null))},x8=function(){var a=s8();
return!!a&&3!=a.getProxyState()},m8=function(a){d7("remote",a)},k8=function(){if(!y8){var a=g.x("yt.mdx.remote.screenService_");
y8=a?new h8(a):null}return y8},l8=function(){return g.x("yt.mdx.remote.currentScreenId_")},cDa=function(a){g.wa("yt.mdx.remote.currentScreenId_",a,void 0)},dDa=function(){return g.x("yt.mdx.remote.connectData_")},o8=function(a){g.wa("yt.mdx.remote.connectData_",a,void 0)},s8=function(){return g.x("yt.mdx.remote.connection_")},w8=function(a){var b=s8();
o8(null);a||cDa("");g.wa("yt.mdx.remote.connection_",a,void 0);j8&&((0,g.B)(j8,function(b){b(a)}),j8.length=0);
b&&!a?g.XF("yt-remote-connection-change",!1):!b&&a&&g.XF("yt-remote-connection-change",!0)},p8=function(){var a=g.QG();
if(!a)return null;var b=k8().ne();return l6(b,a)},v8=function(a,b){r8()&&r8();
cDa(a.id);var c=new a8(i8,a,q8());c.connect(b,dDa());c.subscribe("beforeDisconnect",function(a){g.XF("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){s8()&&w8(null)});
w8(c)},YCa=function(){var a=p8();
a?(m8("Resume connection to: "+h6(a)),v8(a,0)):(q6(),CCa(),m8("Skipping connecting because no session screen found."))},VCa=function(){var a=q8();
if(g.Xb(a)){a=o6();var b=g.OG("yt-remote-session-name")||"",c=g.OG("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.wa("yt.mdx.remote.channelParams_",a,void 0)}},q8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},XCa=function(a){a?(g.NG("yt-remote-session-app",a.app),g.NG("yt-remote-session-name",a.name)):(g.PG("yt-remote-session-app"),g.PG("yt-remote-session-name"));
g.wa("yt.mdx.remote.channelParams_",a,void 0)},z8=function(a,b,c){g.L.call(this);
this.F=a;this.l=b;this.o=new g.FF(this);g.M(this,this.o);this.o.O(b,"onCaptionsTrackListChanged",this.zQ);this.o.O(b,"captionschanged",this.fP);this.o.O(b,"captionssettingschanged",this.zD);this.o.O(b,"videoplayerreset",this.Lo);this.o.O(b,"mdxautoplaycancel",this.GH);this.P=this.o.O(b,"onVolumeChange",this.MB);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.ZB,this);c.subscribe("remotePlayerChange",this.Pl,this);c.subscribe("remoteQueueChange",this.Lo,this);c.subscribe("autoplayUpNext",this.vB,
this);c.subscribe("previousNextChange",this.WB,this);c.subscribe("nowAutoplaying",this.OB,this);c.subscribe("autoplayDismissed",this.uB,this);this.suggestion=null;this.H=new g.XO(64);this.A=new g.Wt(this.vD,500,this);g.M(this,this.A);this.B=new g.Wt(this.wD,1E3,this);g.M(this,this.B);this.K=new y6(this.FU,0,this);g.M(this,this.K);this.C={};this.M=new g.Wt(this.cE,1E3,this);g.M(this,this.M);this.I=new g.Sk(this.jN,1E3,this);g.M(this,this.I);this.N=g.y;this.zD();this.Lo();this.Pl()},A8=function(a,b){var c=
a.F,d=a.l.ea().lengthSeconds;
c.H=b||0;c.g.R("progresssync",b,d)},eDa=function(a){A8(a,0);
a.A.stop();B8(a,new g.XO(64))},D8=function(a,b){if(C8(a)&&!a.D){var c=null;
b&&(c={style:a.l.Ci()},g.dc(c,b));a.g.nD(a.l.ea(1).videoId,c);a.C=V7(a.g).l}},E8=function(a,b){var c=a.l.Vf();
if(c){var d=c.je();var e=c.listId.toString()}var f=a.l.ea(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;f=f.Ij;var m=V7(c),n=e||m.listId;l=l||0;var q={videoId:k,currentIndex:l};R7(m,k,l);g.t(b)&&(P7(m,b),q.currentTime=b);g.t(n)&&(q.listId=n);null!=d&&(q.playerParams=d);null!=f&&(q.clickTrackingParams=f);Z7(c,"setPlaylist",q);e||X7(c,m);B8(a,new g.XO(1))},fDa=function(a,b){if(b){var c=a.l.Ac("captions","tracklist",{az:1});
c&&c.length?(a.l.Id("captions","track",b),a.D=!1):(a.l.Qj("captions"),a.D=!0)}else a.l.Id("captions","track",{})},C8=function(a){return V7(a.g).videoId==a.l.ea(1).videoId},B8=function(a,b){a.B.stop();
var c=a.H;if(!g.eP(c,b)){var d=g.X(b,2);d!=g.X(a.H,2)&&g.ZU(a.l,d);a.H=b;gDa(a.F,c,b)}},F8=function(a){g.W.call(this,{G:"div",
L:"ytp-remote",J:[{G:"div",L:"ytp-remote-display-status",J:[{G:"div",L:"ytp-remote-display-status-icon",J:[g.uoa()]},{G:"div",L:"ytp-remote-display-status-text",J:["{{statustext}}"]}]}]});this.l=new g.FV(this,250);g.M(this,this.l);this.o=a;this.O(a,"presentingplayerstatechange",this.A);hDa(this,g.WU(a))},hDa=function(a,b){if(3==a.o.Ta()){var c={RECEIVER_NAME:a.o.Ac("remote","currentReceiver").name};
c=g.X(b,128)?g.V("YTP_MDX_STATUS_ERROR_2",c):b.kb()||g.X(b,4)?g.V("YTP_MDX_STATUS_PLAYING_2",c):g.V("YTP_MDX_STATUS_CONNECTED_2",c);a.updateValue("statustext",c);a.l.show()}else a.l.hide()},G8=function(a,b){g.LZ.call(this,g.V("YTP_MDX_TITLE"),0,a,b);
this.l=a;this.F={};this.O(a,"onMdxReceiversChange",this.I);this.O(a,"presentingplayerstatechange",this.I);this.I()},H8=function(a){g.tV.call(this,a);
g.SG({YTP_MDX_CAST_SELECTOR:"Caster sur\u2026",YTP_MDX_MY_COMPUTER:"Cet ordinateur",YTP_MDX_PLAYER_ERROR:"Cette vid\u00e9o ne peut pas \u00eatre visionn\u00e9e \u00e0 distance.",YTP_MDX_STATUS_CONNECTED_2:"Connect\u00e9 \u00e0 $RECEIVER_NAME",YTP_MDX_STATUS_ERROR_2:"Erreur sur $RECEIVER_NAME",YTP_MDX_STATUS_PLAYING_2:"Lecture sur $RECEIVER_NAME",YTP_MDX_TITLE:"Lire sur"});this.o={key:j6(),name:g.V("YTP_MDX_MY_COMPUTER")};this.B=null;this.C=[];this.I=this.l=null;this.F=[this.o];this.A=this.o;this.D=
new g.XO(64);this.H=0;if(!g.CM(g.Y(this.g))){a=this.g;var b=g.iI(a);b&&(b=b.vo())&&(b=new G8(a,b),g.M(this,b));b=new F8(a);g.M(this,b);g.nV(a,b.element,4)}},gDa=function(a,b,c){a.D=c;
a.g.R("presentingplayerstatechange",new g.kP(c,b))},I8=function(a,b){if(b.key!=a.A.key)if(b.key==a.o.key)u8();
else{a.A=b;var c=a.g.getPlaylistId();var d=a.g.ea(1),e=d.videoId;if(c||e){var f=a.g.Vf();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.kc(l).videoId}else k=[e];f=a.g.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.Ij,index:Math.max(a.g.bA(),0),currentTime:0==f?void 0:f}}else c=null;m8("Connecting to: "+g.yg(b));"cast-selector-receiver"==b.key?(o8(c||null),J7()?G7().setLaunchParams(c||null):E7("setLaunchParams called before ready.")):!c&&
x8()&&l8()==b.key?g.XF("yt-remote-connection-change",!0):(u8(),o8(c||null),c=k8().ne(),(c=l6(c,b.key))&&v8(c,1))}},wBa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},I6={"'":"\\'"},iDa={},VAa={tW:"atp",K0:"ska",a0:"que",n_:"mus",G0:"sus"};
e6.prototype.nn=function(){var a=new e6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.o=this.o;a.l=this.l;a.g=this.g};
var r6,n6="",v6=s6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",oBa=s6("loadCastFramework")||s6("loadCastApplicationFramework"),yCa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.A(y6,g.L);g.h=y6.prototype;g.h.uI=function(a){this.A=arguments;this.g=!1;this.ya?this.o=(0,g.G)()+this.ed:this.ya=g.sg(this.B,this.ed)};
g.h.stop=function(){this.ya&&(g.tg(this.ya),this.ya=null);this.o=null;this.g=!1;this.A=[]};
g.h.pause=function(){++this.l};
g.h.resume=function(){this.l&&(--this.l,!this.l&&this.g&&(this.g=!1,this.C.apply(null,this.A)))};
g.h.V=function(){this.stop();y6.Y.V.call(this)};
g.h.vI=function(){this.o?(this.ya=g.sg(this.B,this.o-(0,g.G)()),this.o=null):(this.ya=null,this.l?this.g=!0:(this.g=!1,this.C.apply(null,this.A)))};z6.prototype.stringify=function(a){return g.w.JSON.stringify(a,void 0)};
z6.prototype.parse=function(a){return g.w.JSON.parse(a,void 0)};g.h=A6.prototype;g.h.ki=null;g.h.xf=!1;g.h.xk=null;g.h.gv=null;g.h.dk=null;g.h.xj=null;g.h.hh=null;g.h.Ah=null;g.h.Ji=null;g.h.Sc=null;g.h.im=0;g.h.yf=null;g.h.Fp=null;g.h.ih=null;g.h.dl=-1;g.h.UC=!0;g.h.Uh=!1;g.h.ur=0;g.h.Vo=null;var uBa={},D6={};g.h=A6.prototype;g.h.setTimeout=function(a){this.B=a};
g.h.yT=function(a){a=a.target;var b=this.Vo;b&&3==g.gx(a)?b.vj():this.kE(a)};
g.h.kE=function(a){try{if(a==this.Sc)a:{var b=g.gx(this.Sc),c=this.Sc.l,d=this.Sc.getStatus();if(g.vd&&!g.qc(10)||g.xd&&!g.pc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.df&&!g.kx(this.Sc))break a;this.Uh||4!=b||7==c||(8==c||0>=d?this.g.rf(3):this.g.rf(2));K6(this);var e=this.Sc.getStatus();this.dl=e;var f=g.kx(this.Sc);(this.xf=200==e)?(4==b&&G6(this),this.C?(vBa(this,b,f),g.df&&this.xf&&3==b&&(this.A.T(this.l,"tick",this.vT),this.l.start())):F6(this,f),this.xf&&!this.Uh&&(4==b?this.g.Jo(this):
(this.xf=!1,C6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.ih=3,E6(13)):(this.ih=0,E6(14)),G6(this),H6(this))}}catch(k){this.Sc&&g.kx(this.Sc)}finally{}};
g.h.vT=function(){var a=g.gx(this.Sc),b=g.kx(this.Sc);this.im<b.length&&(K6(this),vBa(this,a,b),this.xf&&4!=a&&C6(this))};
g.h.GS=function(a){J6((0,g.z)(this.FS,this,a),0)};
g.h.FS=function(a){this.Uh||(K6(this),F6(this,a),C6(this))};
g.h.hC=function(a){J6((0,g.z)(this.ES,this,a),0)};
g.h.ES=function(a){this.Uh||(G6(this),this.xf=a,this.g.Jo(this),this.g.rf(4))};
g.h.cancel=function(){this.Uh=!0;G6(this)};
g.h.XS=function(){this.xk=null;var a=(0,g.G)();0<=a-this.gv?(2!=this.xj&&this.g.rf(3),G6(this),this.ih=2,E6(18),H6(this)):yBa(this,this.gv-a)};g.h=BBa.prototype;g.h.rr=null;g.h.ue=null;g.h.Wo=!1;g.h.oy=null;g.h.Cn=null;g.h.sr=null;g.h.tr=null;g.h.Me=null;g.h.xg=-1;g.h.bl=null;g.h.Ck=null;g.h.connect=function(a){this.tr=a;a=M6(this.g,null,this.tr);E6(3);this.oy=(0,g.G)();var b=this.g.F;null!=b?(this.bl=b[0],(this.Ck=b[1])?(this.Me=1,CBa(this)):(this.Me=2,O6(this))):(d6(a,"MODE","init"),this.ue=new A6(this,void 0,void 0,void 0),this.ue.ki=this.rr,B6(this.ue,a,!1,null,!0),this.Me=0)};
g.h.HH=function(a){if(a)this.Me=2,O6(this);else{E6(4);var b=this.g;b.If=b.Wg.xg;V6(b,9)}a&&this.rf(2)};
g.h.Nq=function(a){return this.g.Nq(a)};
g.h.abort=function(){this.ue&&(this.ue.cancel(),this.ue=null);this.xg=-1};
g.h.my=function(){return!1};
g.h.aC=function(a,b){this.xg=a.dl;if(0==this.Me)if(b){try{var c=this.l.parse(b)}catch(d){c=this.g;c.If=this.xg;V6(c,2);return}this.bl=c[0];this.Ck=c[1]}else c=this.g,c.If=this.xg,V6(c,2);else if(2==this.Me)if(this.Wo)E6(7),this.sr=(0,g.G)();else if("11111"==b){if(E6(6),this.Wo=!0,this.Cn=(0,g.G)(),c=this.Cn-this.oy,!g.vd||g.qc(10)||500>c)this.xg=200,this.ue.cancel(),E6(12),N6(this.g,this,!0)}else E6(8),this.Cn=this.sr=(0,g.G)(),this.Wo=!1};
g.h.Jo=function(){this.xg=this.ue.dl;if(this.ue.xf)0==this.Me?this.Ck?(this.Me=1,CBa(this)):(this.Me=2,O6(this)):2==this.Me&&((!g.vd||g.qc(10)?!this.Wo:200>this.sr-this.Cn)?(E6(11),N6(this.g,this,!1)):(E6(12),N6(this.g,this,!0)));else{0==this.Me?E6(9):2==this.Me&&E6(10);var a=this.g;a.If=this.xg;V6(a,2)}};
g.h.Yl=function(){return this.g.Yl()};
g.h.isActive=function(){return this.g.isActive()};
g.h.rf=function(a){this.g.rf(a)};g.h=P6.prototype;g.h.Nk=null;g.h.Vd=null;g.h.wc=null;g.h.qr=null;g.h.Fn=null;g.h.Aw=null;g.h.Tn=null;g.h.Jl=0;g.h.xO=0;g.h.qd=null;g.h.Yg=null;g.h.pg=null;g.h.Yh=null;g.h.Wg=null;g.h.Ep=null;g.h.Mj=-1;g.h.oz=-1;g.h.If=-1;g.h.pj=0;g.h.dj=0;g.h.Wh=8;var W6=new g.Df;g.A(EBa,g.bf);g.A(FBa,g.bf);g.A(GBa,g.bf);g.h=P6.prototype;g.h.connect=function(a,b,c,d,e){E6(0);this.qr=b;this.Nk=c||{};d&&g.t(e)&&(this.Nk.OSID=d,this.Nk.OAID=e);this.C?(J6((0,g.z)(this.Yw,this,a),100),KBa(this)):this.Yw(a)};
g.h.Yw=function(a){this.Wg=new BBa(this);this.Wg.rr=null;this.Wg.l=this.B;this.Wg.connect(a)};
g.h.my=function(){return 0==this.g};
g.h.fC=function(a){this.Yg=null;NBa(this,a)};
g.h.eC=function(){this.pg=null;this.wc=new A6(this,this.o,"rpc",this.D);this.wc.ki=null;this.wc.ur=0;var a=this.Aw.clone();g.Im(a,"RID","rpc");g.Im(a,"SID",this.o);g.Im(a,"CI",this.Ep?"0":"1");g.Im(a,"AID",this.Mj);Q6(this,a);if(!g.vd||g.qc(10))g.Im(a,"TYPE","xmlhttp"),B6(this.wc,a,!0,this.Tn,!1);else{g.Im(a,"TYPE","html");var b=this.wc,c=!!this.Tn;b.xj=3;b.hh=c6(a.clone());xBa(b,c)}};
g.h.aC=function(a,b){if(0!=this.g&&(this.wc==a||this.Vd==a))if(this.If=a.dl,this.Vd==a&&3==this.g)if(7<this.Wh){try{var c=this.B.parse(b)}catch(f){c=null}if(g.za(c)&&3==c.length)if(0==c[0])a:{if(!this.pg){if(this.wc)if(this.wc.dk+3E3<this.Vd.dk)S6(this),this.wc.cancel(),this.wc=null;else break a;U6(this);E6(19)}}else this.oz=c[1],0<this.oz-this.Mj&&37500>c[2]&&this.Ep&&0==this.dj&&!this.Yh&&(this.Yh=J6((0,g.z)(this.aP,this),6E3));else V6(this,11)}else b!=iDa.yX.g&&V6(this,11);else if(this.wc==a&&
S6(this),!g.E(b)){c=this.B.parse(b);g.za(c);for(var d=0;d<c.length;d++){var e=c[d];this.Mj=e[0];e=e[1];2==this.g?"c"==e[0]?(this.o=e[1],this.Tn=e[2],e=e[3],null!=e?this.Wh=e:this.Wh=6,this.g=3,this.qd&&this.qd.Nw(),this.Aw=M6(this,this.Yl()?this.Tn:null,this.qr),OBa(this)):"stop"==e[0]&&V6(this,7):3==this.g&&("stop"==e[0]?V6(this,7):"noop"!=e[0]&&this.qd&&this.qd.Mw(e),this.dj=0)}}};
g.h.aP=function(){null!=this.Yh&&(this.Yh=null,this.wc.cancel(),this.wc=null,U6(this),E6(20))};
g.h.Jo=function(a){if(this.wc==a){S6(this);this.wc=null;var b=2}else if(this.Vd==a)this.Vd=null,b=1;else return;this.If=a.dl;if(0!=this.g)if(a.xf)1==b?(b=(0,g.G)()-a.dk,W6.dispatchEvent(new FBa(W6,a.Ji?a.Ji.length:0,b,this.pj)),R6(this),this.A.length=0):OBa(this);else{var c=a.ih,d;if(!(d=3==c||7==c||0==c&&0<this.If)){if(d=1==b)this.Vd||this.Yg||1==this.g||2<=this.pj?d=!1:(this.Yg=J6((0,g.z)(this.fC,this,a),PBa(this,this.pj)),this.pj++,d=!0);d=!(d||2==b&&U6(this))}if(d)switch(c){case 1:V6(this,5);
break;case 4:V6(this,10);break;case 3:V6(this,6);break;case 7:V6(this,12);break;default:V6(this,2)}}};
g.h.cI=function(a){if(!g.D(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.tU=function(a){a?E6(2):(E6(1),QBa(this,8))};
g.h.Nq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.ax;a.F=!1;return a};
g.h.isActive=function(){return!!this.qd&&this.qd.isActive(this)};
g.h.rf=function(a){W6.dispatchEvent(new GBa(W6,a))};
g.h.Yl=function(){return!(!g.vd||g.qc(10))};
g.h=RBa.prototype;g.h.Nw=function(){};
g.h.Mw=function(){};
g.h.Kw=function(){};
g.h.Cq=function(){};
g.h.Sx=function(){return{}};
g.h.isActive=function(){return!0};g.A(X6,g.L);g.h=X6.prototype;g.h.xS=function(){this.ed=Math.min(3E5,2*this.ed);this.o();this.l&&this.start()};
g.h.start=function(){var a=this.ed+15E3*Math.random();g.Xt(this.g,a);this.l=(0,g.G)()+a};
g.h.stop=function(){this.g.stop();this.l=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.ed=5E3};g.A(Y6,RBa);g.h=Y6.prototype;g.h.subscribe=function(a,b,c){return this.o.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.o.unsubscribe(a,b,c)};
g.h.Ld=function(a){return this.o.Ld(a)};
g.h.R=function(a,b){return this.o.R.apply(this.o,arguments)};
g.h.dispose=function(){this.I||(this.I=!0,g.$e(this.o),UBa(this),g.$e(this.l),this.l=null)};
g.h.ha=function(){return this.I};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.H="";this.l.stop();this.B=a||null;this.A=b||0;a=this.K+"/test";b=this.K+"/bind";var d=new P6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.M),e=this.g;e&&(e.qd=null);d.qd=this;this.g=d;e?this.g.connect(a,b,this.C,e.o,e.Mj):c?this.g.connect(a,b,this.C,c.sessionId,c.arrayId):this.g.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.dc(c,b);this.l.isActive()||2==(this.g?this.g.g:0)?this.D.push(c):Z6(this)&&LBa(this.g,c)};
g.h.Nw=function(){this.l.reset();this.B=null;this.A=0;if(this.D.length){var a=this.D;this.D=[];for(var b=0,c=a.length;b<c;++b)LBa(this.g,a[b])}this.R("handlerOpened")};
g.h.Kw=function(a){var b=2==a&&401==this.g.If;4==a||b||this.l.start();this.R("handlerError",a)};
g.h.Cq=function(a){if(!this.l.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.D.push(d)}};
g.h.Sx=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.F&&(a.ui=""+this.F);this.B&&g.dc(a,this.B);return a};
g.h.Mw=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),JBa(this.g)):this.R("handlerMessage",new SBa(a[0],a[1]))};
g.h.YU=function(){this.l.isActive();var a=this.g,b=0;a.wc&&b++;a.Vd&&b++;0!=b||this.connect(this.B,this.A)};$6.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
$6.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
$6.prototype.B=function(a){a(Error("request timed out"))};var bCa=(0,g.G)(),c7=null,f7=Array(50),e7=-1,g7=!1;g.A(h7,g.IF);h7.prototype.ne=function(){return this.g};
h7.prototype.contains=function(a){return!!k6(this.g,a)};
h7.prototype.get=function(a){return a?l6(this.g,a):null};
h7.prototype.info=function(a){d7(this.D,a)};g.A(i7,g.IF);var jDa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=i7.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.ya)&&this.pE()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.ya)||(g.TD(this.ya),this.ya=window.NaN)};
g.h.V=function(){this.stop();i7.Y.V.call(this)};
g.h.pE=function(){this.ya=window.NaN;this.g=g.oE(a7(this.C,"/pairing/get_screen"),{method:"POST",Mb:{pairing_code:this.B},timeout:5E3,Ib:(0,g.z)(this.aV,this),onError:(0,g.z)(this.ZU,this),wd:(0,g.z)(this.bV,this)})};
g.h.aV=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.R("pairingComplete",new f6(c))};
g.h.ZU=function(a){this.g=null;a.status&&404==a.status?this.l>=jDa.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=jDa[this.l],this.ya=g.RD((0,g.z)(this.pE,this),a),this.l++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.bV=function(){this.g=null;this.R("pairingFailed",Error("Server not responding"))};g.A(k7,h7);g.h=k7.prototype;g.h.start=function(){j7(this)&&this.R("screenChange");!g.OG("yt-remote-lounge-token-expiration")&&fCa(this);g.TD(this.l);this.l=g.RD((0,g.z)(this.start,this),1E4)};
g.h.add=function(a,b){j7(this);cCa(this,a);l7(this,!1);this.R("screenChange");b(a);a.token||fCa(this)};
g.h.remove=function(a,b){var c=j7(this);eCa(this,a)&&(l7(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.Ap=function(a,b,c,d){var e=j7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,l7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.V=function(){g.TD(this.l);k7.Y.V.call(this)};
g.h.II=function(a){j7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}l7(this,!b);b&&d7(this.D,"Missed "+b+" lounge tokens.")};
g.h.HI=function(a){d7(this.D,"Requesting lounge tokens failed: "+a)};g.A(n7,g.IF);g.h=n7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.OG("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.G)()-144E5<a?0:a)?p7(this):(this.A=(0,g.G)()+3E5,g.NG("yt-remote-fast-check-period",this.A),this.pu())};
g.h.isEmpty=function(){return g.Xb(this.g)};
g.h.update=function(){m7("Updating availability on schedule.");var a=this.C(),b=g.Kb(this.g,function(b,d){return b&&!!l6(a,d)},this);
o7(this,b)};
g.h.V=function(){g.TD(this.o);this.o=window.NaN;this.l&&(this.l.abort(),this.l=null);n7.Y.V.call(this)};
g.h.pu=function(){g.TD(this.o);this.o=window.NaN;this.l&&this.l.abort();var a=iCa(this);if(g.Ob(a)){var b=a7(this.B,"/pairing/get_screen_availability");this.l=b7(this.B,b,{lounge_token:g.Rb(a).join(",")},(0,g.z)(this.fS,this,a),(0,g.z)(this.eS,this))}else o7(this,{}),p7(this)};
g.h.fS=function(a,b){this.l=null;var c=g.Rb(iCa(this));if(g.ib(c,g.Rb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;o7(this,d);p7(this)}else this.gc("Changing Screen set during request."),this.pu()};
g.h.eS=function(a){this.gc("Screen availability failed: "+a);this.l=null;p7(this)};
g.h.gc=function(a){d7("OnlineScreenService",a)};g.A(q7,h7);g.h=q7.prototype;g.h.start=function(){this.o.start();this.l.start();this.g.length&&(this.R("screenChange"),this.l.isEmpty()||this.R("onlineScreenChange"))};
g.h.add=function(a,b,c){this.o.add(a,b,c)};
g.h.remove=function(a,b,c){this.o.remove(a,b,c);this.l.update()};
g.h.Ap=function(a,b,c,d){this.o.contains(a)?this.o.Ap(a,b,c,d):(a="Updating name of unknown screen: "+a.name,d7(this.D,a),d(Error(a)))};
g.h.ne=function(a){return a?this.g:g.Va(this.g,(0,g.Id)(this.A,function(a){return!this.contains(a)},this))};
g.h.qE=function(){return(0,g.Id)(this.ne(!0),function(a){return!!this.l.g[a.id]},this)};
g.h.rE=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new i7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(a){g.$e(f);d(r7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.$e(f);e(a)});
f.start();return(0,g.z)(f.stop,f)};
g.h.dV=function(a,b,c,d){g.oE(a7(this.C,"/pairing/get_screen"),{method:"POST",Mb:{pairing_code:a},timeout:5E3,Ib:(0,g.z)(function(a,d){var e=new f6(d.screen||{});if(!e.name||mCa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);mCa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(r7(this,e))},this),
onError:(0,g.z)(function(a){d(Error("pairing request failed: "+a.status))},this),
wd:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.h.V=function(){g.$e(this.o);g.$e(this.l);q7.Y.V.call(this)};
g.h.ZI=function(){nCa(this);this.R("screenChange");this.l.update()};
q7.prototype.dispose=q7.prototype.dispose;g.A(t7,g.IF);g.h=t7.prototype;g.h.Ko=function(a){this.o=a;this.R("sessionScreen",this.o)};
g.h.se=function(a){this.ha()||(a&&u7(this,""+a),this.o=null,this.R("sessionScreen",null))};
g.h.info=function(a){d7(this.M,a)};
g.h.tE=function(){return null};
g.h.zu=function(a){var b=this.l;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){u7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.V=function(){this.zu("");t7.Y.V.call(this)};g.A(v7,t7);g.h=v7.prototype;g.h.yu=function(a){if(this.g){if(this.g==a)return;u7(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.C);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.g=a;this.g.addUpdateListener(this.C);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);pCa(this)};
g.h.Nj=function(a){this.info("launchWithParams no-op for Cast: "+g.yg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.z)(function(){this.se()},this),(0,g.z)(function(){this.se(Error("Failed to stop receiver app."))},this)):this.se(Error("Stopping cast device witout session."))};
g.h.zu=g.y;g.h.V=function(){this.info("disposeInternal");g.TD(this.A);this.A=0;this.g&&(this.g.removeUpdateListener(this.C),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.g=null;v7.Y.V.call(this)};
g.h.iT=function(a,b){if(!this.ha())if(b){var c=g.Vw(b);if(g.Ca(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.yg(c));switch(d){case "mdxSessionStatus":oCa(this,c.screenId);break;default:u7(this,"Unknown youtube message: "+d)}}else u7(this,"Unable to parse message.")}else u7(this,"No data in message.")};
g.h.fy=function(a,b,c,d){lCa(this.H,this.l.label,a,this.l.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(u7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.RD((0,g.z)(this.fy,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.tE=function(){return this.g};
g.h.eV=function(a){this.ha()||a||(u7(this,"Cast session died."),this.se())};g.A(w7,t7);g.h=w7.prototype;g.h.yu=function(a){this.A=a;this.A.addUpdateListener(this.K)};
g.h.Nj=function(a){this.B=a;this.D()};
g.h.stop=function(){this.g();this.g=g.y;g.TD(this.C);this.A?this.A.stop((0,g.z)(this.se,this,null),(0,g.z)(this.se,this,"Failed to stop DIAL device.")):this.se()};
g.h.V=function(){this.g();this.g=g.y;g.TD(this.C);this.A&&this.A.removeUpdateListener(this.K);this.A=null;w7.Y.V.call(this)};
g.h.hV=function(a){this.ha()||a||(u7(this,"DIAL session died."),this.g(),this.g=g.y,this.se())};
g.h.es=function(a){this.I=j6();if(this.B){var b=new window.chrome.cast.DialLaunchResponse(!0,rCa(this));a(b);qCa(this)}else this.D=(0,g.z)(function(){g.TD(this.C);this.D=g.y;this.C=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,rCa(this));a(b);qCa(this)},this),this.C=g.RD((0,g.z)(function(){this.D()},this),100)};
g.h.mK=function(a,b,c){lCa(this.H,this.F.receiver.label,a,this.l.friendlyName,(0,g.z)(function(a){a&&a.token?(this.Ko(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.es(b,c)},this),(0,g.z)(function(a){u7(this,"Failed to get DIAL screen: "+a);
this.es(b,c)},this))};g.A(x7,t7);x7.prototype.stop=function(){this.se()};
x7.prototype.yu=g.y;x7.prototype.Nj=function(){g.TD(this.g);this.g=window.NaN;var a=l6(this.H.ne(),this.l.label);a?this.Ko(a):this.se(Error("No such screen"))};
x7.prototype.V=function(){g.TD(this.g);this.g=window.NaN;x7.Y.V.call(this)};g.A(y7,g.IF);g.h=y7.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.D);this.F||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.z)(this.bC,this),(0,g.z)(this.PR,this),d,e);c.customDialLaunchCallback=(0,g.z)(this.LP,this);window.chrome.cast.initialize(c,
(0,g.z)(function(){this.ha()||(window.chrome.cast.addReceiverActionListener(this.A),ZBa(),this.l.subscribe("onlineScreenChange",(0,g.z)(this.sE,this)),this.o=tCa(this),window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(a){this.gc("Failed to set initial custom receivers: "+g.yg(a))},this)),this.R("yt-remote-cast2-availability-change",A7(this)),b(!0))},this),(0,g.z)(function(a){this.gc("Failed to initialize API: "+g.yg(a));
b(!1)},this))};
g.h.cU=function(a,b){z7("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.o;if(!a||c&&c.id!=a)z7("Unsetting old screen status: "+this.g.l.friendlyName),B7(this,null)}if(a&&b){if(!this.g){c=l6(this.l.ne(),a);if(!c){z7("setConnectedScreenStatus: Unknown screen.");return}var d=sCa(this,c);d||(z7("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.o.push(d),
window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(a){this.gc("Failed to set initial custom receivers: "+g.yg(a))},this)));
z7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);B7(this,new x7(this.l,d),!0)}this.g.zu(b)}else z7("setConnectedScreenStatus: no screen.")};
g.h.dU=function(a){this.ha()?this.gc("Setting connection data on disposed cast v2"):this.g?this.g.Nj(a):this.gc("Setting connection data without a session")};
g.h.gV=function(){this.ha()?this.gc("Stopping session on disposed cast v2"):this.g?(this.g.stop(),B7(this,null)):z7("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.z)(this.bC,this),(0,g.z)(this.kS,this))};
g.h.V=function(){this.l.unsubscribe("onlineScreenChange",(0,g.z)(this.sE,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.A);g.Ta(g.x("yt.mdx.remote.debug.handlers_")||[],WBa);g.$e(this.g);y7.Y.V.call(this)};
g.h.gc=function(a){d7("Controller",a)};
g.h.cC=function(a,b){this.g==a&&(b||B7(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.LR=function(a,b){if(!this.ha())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),z7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.l.label!=a.label)z7("onReceiverAction_: Stopping active receiver: "+this.g.l.friendlyName),this.g.stop();else{z7("onReceiverAction_: Casting to active receiver.");this.g.o&&this.R("yt-remote-cast2-session-change",this.g.o);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:B7(this,
new x7(this.l,a));break;case window.chrome.cast.ReceiverType.DIAL:B7(this,new w7(this.l,a,this.C));break;case window.chrome.cast.ReceiverType.CAST:B7(this,new v7(this.l,a));break;default:this.gc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.l.label==a.label?this.g.stop():this.gc("Stopping receiver w/o session: "+a.friendlyName)}else this.gc("onReceiverAction_ called without receiver.")};
g.h.LP=function(a){if(this.ha())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.gc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.l:null;if(!c||c.label!=b.label)return this.gc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.o)return z7("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.g.o),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.gc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);B7(this,new w7(this.l,b,this.C))}b=this.g;b.F=a;return b.F.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.z)(b.mK,b,(b.F.extraData||{}).screenId||null)):new window.Promise((0,g.z)(b.es,b))};
g.h.bC=function(a){if(!this.ha()){z7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)z7("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),B7(this,new v7(this.l,b),!0);else{this.gc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.l,d=l6(this.l.ne(),c.label);
d&&g6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(z7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.$e(this.g),this.g=new v7(this.l,b),this.g.subscribe("sessionScreen",(0,g.z)(this.cC,this,this.g)),this.g.Nj(null));this.g.yu(a)}}};
g.h.fV=function(){return this.g?this.g.tE():null};
g.h.kS=function(a){this.ha()||(this.gc("Failed to estabilish a session: "+g.yg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&B7(this,null))};
g.h.PR=function(a){z7("Receiver availability updated: "+a);if(!this.ha()){var b=A7(this);this.B=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;A7(this)!=b&&this.R("yt-remote-cast2-availability-change",A7(this))}};
g.h.sE=function(){this.ha()||(this.o=tCa(this),z7("Updating custom receivers: "+g.yg(this.o)),window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(){this.gc("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",A7(this)))};
y7.prototype.setLaunchParams=y7.prototype.dU;y7.prototype.setConnectedScreenStatus=y7.prototype.cU;y7.prototype.stopSession=y7.prototype.gV;y7.prototype.getCastSession=y7.prototype.fV;y7.prototype.requestSession=y7.prototype.requestSession;y7.prototype.init=y7.prototype.init;y7.prototype.dispose=y7.prototype.dispose;var H7=[];g.h=M7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";N7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.g=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.l=a.trackData,this.Lf=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.D=a.playerTimeAt,this.B=a.seekableStart,this.o=a.seekableEnd,this.H=a.duration,this.I=a.loadedTime,this.A=a.liveIngestionTime,this.C=!(0,window.isNaN)(this.A))};
g.h.kb=function(){return 1==this.g};
g.h.isAdPlaying=function(){return 1081==this.g};
g.h.getDuration=function(){return this.C?this.H+O7(this):this.H};
g.h.clone=function(){return new M7(S7(this))};g.A(U7,g.IF);g.h=U7.prototype;g.h.play=function(){1==this.g?(this.l?this.l.play(null,g.y,$7(this,"play")):Z7(this,"play"),Y7(this,1,Q7(V7(this))),this.R("remotePlayerChange")):W7(this,this.play)};
g.h.pause=function(){1==this.g?(this.l?this.l.pause(null,g.y,$7(this,"pause")):Z7(this,"pause"),Y7(this,2,Q7(V7(this))),this.R("remotePlayerChange")):W7(this,this.pause)};
g.h.oE=function(a){if(1==this.g){if(this.l){var b=V7(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.kb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.l.seek(c,g.y,$7(this,"seekTo",{newTime:a}))}else Z7(this,"seekTo",{newTime:a});Y7(this,3,a);this.R("remotePlayerChange")}else W7(this,g.Fa(this.oE,a))};
g.h.stop=function(){if(1==this.g){this.l?this.l.stop(null,g.y,$7(this,"stopVideo")):Z7(this,"stopVideo");var a=V7(this);a.index=-1;a.videoId="";N7(a);X7(this,a);this.R("remotePlayerChange")}else W7(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=V7(this);if(this.o){if(c.volume!=a){var d=Math.round(a)/100;this.o.setReceiverVolumeLevel(d,(0,g.z)(function(){d7("CP","set receiver volume: "+d)},this),(0,g.z)(function(){this.gc("failed to set receiver volume.")},this))}c.muted!=b&&this.o.setReceiverMuted(b,(0,g.z)(function(){d7("CP","set receiver muted: "+b)},this),(0,g.z)(function(){this.gc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);Z7(this,"setVolume",e)}c.muted=b;c.volume=a;X7(this,c)}else W7(this,g.Fa(this.setVolume,a,b))};
g.h.nD=function(a,b){if(1==this.g){var c=V7(this),d={videoId:a};b&&(c.l={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.yg(b.style),g.dc(d,c.l));Z7(this,"setSubtitlesTrack",d);X7(this,c)}else W7(this,g.Fa(this.nD,a,b))};
g.h.ov=function(a,b){if(1==this.g){Z7(this,"setAudioTrack",{videoId:a,audioTrackId:b.Pb.id});var c=V7(this);c.audioTrackId=b.Pb.id;X7(this,c)}else W7(this,g.Fa(this.ov,a,b))};
g.h.nE=function(a,b){if(1==this.g){if(a&&b){var c=V7(this);R7(c,a,b);X7(this,c)}Z7(this,"previous")}else W7(this,g.Fa(this.nE,a,b))};
g.h.mE=function(a,b){if(1==this.g){if(a&&b){var c=V7(this);R7(c,a,b);X7(this,c)}Z7(this,"next")}else W7(this,g.Fa(this.mE,a,b))};
g.h.xx=function(){1==this.g?Z7(this,"dismissAutoplay"):W7(this,this.xx)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.R("proxyStateChange",a,this.g)}U7.Y.dispose.call(this)};
g.h.V=function(){GCa(this);this.A=null;this.B.clear();T7(this,null);U7.Y.V.call(this)};
g.h.qv=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)g.kC(this.B).apply(this);else 3==a&&this.dispose()}};
g.h.HR=function(a,b){this.R(a,b)};
g.h.hP=function(a){if(!a)this.Ml(null),T7(this,null);else if(this.o.receiver.volume){a=this.o.receiver.volume;var b=V7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)d7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,X7(this,b)}};
g.h.Ml=function(a){d7("CP","Cast media: "+!!a);this.l&&this.l.removeUpdateListener(this.F);if(this.l=a)this.l.addUpdateListener(this.F),HCa(this),this.R("remotePlayerChange")};
g.h.gP=function(a){a?(HCa(this),this.R("remotePlayerChange")):this.Ml(null)};
g.h.uP=function(){var a=DCa();a&&T7(this,a)};
g.h.gc=function(a){d7("CP",a)};g.A(a8,g.IF);g.h=a8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime;g.t(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.t(k)&&(l.currentIndex=k);c&&(this.Za.listId=c);this.Za.videoId=d;this.Za.index=k||0;this.Za.state=3;P7(this.Za,m);this.A="UNSUPPORTED";b8("Connecting with setPlaylist and params: "+g.yg(l));this.g.connect({method:"setPlaylist",params:g.yg(l)},a,cBa())}else b8("Connecting without params"),
this.g.connect({},a,cBa());JCa(this)};
g.h.dispose=function(){this.ha()||(this.R("beforeDispose"),c8(this,3));a8.Y.dispose.call(this)};
g.h.V=function(){d8(this);f8(this);e8(this);g.TD(this.H);this.H=window.NaN;g.TD(this.I);this.I=window.NaN;this.o=null;g.tF(this.P);this.P.length=0;this.g.dispose();a8.Y.V.call(this);this.A=this.D=this.l=this.Za=this.g=null};
g.h.zI=function(){this.C(2)};
g.h.lP=function(){b8("Channel opened");this.N&&(this.N=!1,e8(this),this.M=g.RD((0,g.z)(function(){b8("Timing out waiting for a screen.");this.C(1)},this),15E3));
gBa(TBa(this.g),this.X)};
g.h.iP=function(){b8("Channel closed");(0,window.isNaN)(this.B)?q6(!0):q6();this.dispose()};
g.h.jP=function(a){q6();(0,window.isNaN)(this.F())?(b8("Channel error: "+a+" without reconnection"),this.dispose()):(this.N=!0,b8("Channel error: "+a+" with reconnection in "+this.F()+" ms"),c8(this,2))};
g.h.kP=function(a){a.params?b8("Received: action="+a.action+", params="+g.yg(a.params)):b8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.Vw(a.params.devices);this.l=(0,g.I)(a,function(a){return new e6(a)});
a=!!g.La(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
MCa(this,a);break;case "loungeScreenDisconnected":g.Ua(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
MCa(this,!1);break;case "remoteConnected":var b=new e6(g.Vw(a.params.device));g.La(this.l,function(a){return b?a.id==b.id:!1})||g.Ra(this.l,b);
break;case "remoteDisconnected":b=new e6(g.Vw(a.params.device));g.Ua(this.l,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":OCa(this,a);break;case "nowPlaying":QCa(this,a);break;case "onStateChange":PCa(this,a);break;case "onAdStateChange":RCa(this,a);break;case "onVolumeChanged":SCa(this,a);break;case "onSubtitlesTrackChanged":NCa(this,a);break;case "nowAutoplaying":TCa(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.D=a.params.videoId||null;this.R("autoplayUpNext",this.D);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.R("autoplayModeChange",this.A);"DISABLED"==this.A&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":UCa(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:b8("Unrecognized action: "+a.action)}};
g.h.KT=function(){if(this.o){var a=this.o;this.o=null;this.Za.videoId!=a&&g8(this,"getNowPlaying")}};
a8.prototype.subscribe=a8.prototype.subscribe;a8.prototype.unsubscribeByKey=a8.prototype.Ld;a8.prototype.fa=function(){var a=3;this.ha()||(a=0,(0,window.isNaN)(this.F())?Z6(this.g)&&(0,window.isNaN)(this.B)&&(a=1):a=2);return a};
a8.prototype.getProxyState=a8.prototype.fa;a8.prototype.C=function(a){b8("Disconnecting with "+a);d8(this);this.R("beforeDisconnect",a);1==a&&q6();UBa(this.g,a);this.dispose()};
a8.prototype.disconnect=a8.prototype.C;a8.prototype.da=function(){var a=this.Za;this.o&&(a=this.Za.clone(),R7(a,this.o,a.index));return S7(a)};
a8.prototype.getPlayerContextData=a8.prototype.da;
a8.prototype.ma=function(a){var b=new M7(a);b.videoId&&b.videoId!=this.Za.videoId&&(this.o=b.videoId,g.TD(this.H),this.H=g.RD((0,g.z)(this.KT,this),5E3));var c=[];this.Za.listId==b.listId&&this.Za.videoId==b.videoId&&this.Za.index==b.index||c.push("remoteQueueChange");this.Za.g==b.g&&this.Za.volume==b.volume&&this.Za.muted==b.muted&&Q7(this.Za)==Q7(b)&&g.yg(this.Za.l)==g.yg(b.l)||c.push("remotePlayerChange");this.Za.reset(a);(0,g.B)(c,function(a){this.R(a)},this)};
a8.prototype.setPlayerContextData=a8.prototype.ma;a8.prototype.W=function(){var a=this.g.C.id,b=g.La(this.l,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
a8.prototype.getOtherConnectedRemoteId=a8.prototype.W;a8.prototype.F=function(){var a=this.g;return a.l.isActive()?a.l.l-(0,g.G)():window.NaN};
a8.prototype.getReconnectTimeout=a8.prototype.F;a8.prototype.ba=function(){return this.A||"UNSUPPORTED"};
a8.prototype.getAutoplayMode=a8.prototype.ba;a8.prototype.ca=function(){return this.D||""};
a8.prototype.getAutoplayVideoId=a8.prototype.ca;a8.prototype.ra=function(){if(!(0,window.isNaN)(this.F())){var a=this.g.l;g.Yt(a.g);a.start()}};
a8.prototype.reconnect=a8.prototype.ra;a8.prototype.ka=function(a,b){g8(this,a,b);LCa(this)};
a8.prototype.sendMessage=a8.prototype.ka;g.A(h8,h7);g.h=h8.prototype;g.h.ne=function(a){return this.dd.$_gs(a)};
g.h.contains=function(a){return!!this.dd.$_c(a)};
g.h.get=function(a){return this.dd.$_g(a)};
g.h.start=function(){this.dd.$_st()};
g.h.add=function(a,b,c){this.dd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.dd.$_r(a,b,c)};
g.h.Ap=function(a,b,c,d){this.dd.$_un(a,b,c,d)};
g.h.V=function(){for(var a=0,b=this.l.length;a<b;++a)this.dd.$_ubk(this.l[a]);this.l.length=0;this.dd=null;h8.Y.V.call(this)};
g.h.cV=function(){this.R("screenChange")};
g.h.hR=function(){this.R("onlineScreenChange")};
q7.prototype.$_st=q7.prototype.start;q7.prototype.$_gspc=q7.prototype.dV;q7.prototype.$_gsppc=q7.prototype.rE;q7.prototype.$_c=q7.prototype.contains;q7.prototype.$_g=q7.prototype.get;q7.prototype.$_a=q7.prototype.add;q7.prototype.$_un=q7.prototype.Ap;q7.prototype.$_r=q7.prototype.remove;q7.prototype.$_gs=q7.prototype.ne;q7.prototype.$_gos=q7.prototype.qE;q7.prototype.$_s=q7.prototype.subscribe;q7.prototype.$_ubk=q7.prototype.Ld;var i8=null,j8=null,y8=null,n8=[];g.p(z8,g.L);g.h=z8.prototype;
g.h.V=function(){g.L.prototype.V.call(this);this.A.stop();this.B.stop();this.K.stop();this.N();this.g.unsubscribe("proxyStateChange",this.ZB,this);this.g.unsubscribe("remotePlayerChange",this.Pl,this);this.g.unsubscribe("remoteQueueChange",this.Lo,this);this.g.unsubscribe("autoplayUpNext",this.vB,this);this.g.unsubscribe("previousNextChange",this.WB,this);this.g.unsubscribe("nowAutoplaying",this.OB,this);this.g.unsubscribe("autoplayDismissed",this.uB,this);this.g=this.F=null};
g.h.xA=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(C8(this)){if(!V7(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":V7(this.g).kb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.vj(c[0],c[1]);break;case "control_subtitles_set_track":D8(this,c[0]);break;case "control_set_audio_track":c=c[0],C8(this)&&this.g.ov(this.l.ea(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.l.getCurrentTime();E8(this,0==c?void 0:c);break;case "control_seek":E8(this,c[0]);break;case "control_subtitles_set_track":D8(this,c[0]);break;case "control_set_audio_track":c=c[0],C8(this)&&this.g.ov(this.l.ea(1).videoId,c)}};
g.h.fP=function(a){this.K.uI(a)};
g.h.FU=function(a){this.xA("control_subtitles_set_track",g.Xb(a)?null:a)};
g.h.zD=function(){var a=this.l.Ac("captions","track");g.Xb(a)||D8(this,a)};
g.h.MB=function(a){if(C8(this)){this.g.unsubscribe("remotePlayerChange",this.Pl,this);var b=Math.round(a.volume);a=!!a.muted;var c=V7(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.M.start();this.g.subscribe("remotePlayerChange",this.Pl,this)}};
g.h.zQ=function(){g.Xb(this.C)||fDa(this,this.C);this.D=!1};
g.h.ZB=function(a,b){this.B.stop();2==b&&this.wD()};
g.h.Pl=function(){if(C8(this)){this.A.stop();var a=V7(this.g);switch(a.g){case 1081:case 1:B8(this,new g.XO(8));this.vD();break;case 1085:case 3:B8(this,new g.XO(9));break;case 1083:case 0:B8(this,new g.XO(2));this.I.stop();A8(this,this.l.ea().lengthSeconds);break;case 1084:B8(this,new g.XO(4));break;case 2:B8(this,new g.XO(4));A8(this,Q7(a));break;case -1:B8(this,new g.XO(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.V("YTP_MDX_PLAYER_ERROR")},B8(this,new g.XO(128,a))}a=V7(this.g).l;
var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,fDa(this,a));a=V7(this.g);-1==a.volume||Math.round(this.l.getVolume())==a.volume&&this.l.isMuted()==a.muted||this.M.isActive()||this.cE()}else eDa(this)};
g.h.WB=function(){this.l.R("mdxpreviousnextchange")};
g.h.Lo=function(){C8(this)||eDa(this)};
g.h.GH=function(){this.g.xx()};
g.h.vB=function(a){a&&(a=g.oE("/watch_queue_ajax",{method:"GET",Zc:{action_get_watch_queue_item:1,video_id:a},Ib:(0,g.z)(this.JS,this)}))&&(this.N=(0,g.z)(a.abort,a))};
g.h.JS=function(a,b){var c=new g.XN({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.l.R("mdxautoplayupnext",c)};
g.h.OB=function(a){(0,window.isNaN)(a)||this.l.R("mdxnowautoplaying",a)};
g.h.uB=function(){this.l.R("mdxautoplaycanceled")};
g.h.jN=function(a,b){-1==V7(this.g).g?E8(this,a):b&&this.g.oE(a)};
g.h.cE=function(){if(C8(this)){var a=V7(this.g);this.o.Ba(this.P);a.muted?this.l.mute():this.l.Wf();this.l.setVolume(a.volume);this.P=this.o.O(this.l,"onVolumeChange",this.MB)}};
g.h.vD=function(){this.A.stop();if(!this.g.ha()){var a=V7(this.g);a.kb()&&B8(this,new g.XO(8));A8(this,Q7(a));this.A.start()}};
g.h.wD=function(){this.B.stop();this.A.stop();var a=this.g.A.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(F8,g.W);F8.prototype.A=function(a){hDa(this,a.state)};g.p(G8,g.LZ);G8.prototype.I=function(){var a=this.l.Ac("remote","receivers");a&&1<a.length&&!this.l.Ac("remote","quickCast")?(this.F=g.kb(a,this.B,this),g.MZ(this,(0,g.I)(a,this.B)),a=this.l.Ac("remote","currentReceiver"),this.qf(this.B(a)),this.enable(!0)):this.enable(!1)};
G8.prototype.B=function(a){return a.key};
G8.prototype.pf=function(a){return"cast-selector-receiver"==a?g.V("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
G8.prototype.td=function(a){g.LZ.prototype.td.call(this,a);this.l.Id("remote","currentReceiver",this.F[a]);this.A.Qb()};g.p(H8,g.tV);g.h=H8.prototype;g.h.create=function(){ZCa(g.qM(g.Y(this.g)));this.C.push(g.TF("yt-remote-before-disconnect",this.bP,this));this.C.push(g.TF("yt-remote-connection-change",this.QR,this));this.C.push(g.TF("yt-remote-receiver-availability-change",this.XB,this));this.C.push(g.TF("yt-remote-auto-connect",this.OR,this));this.C.push(g.TF("yt-remote-receiver-resumed",this.NR,this));this.XB()};
g.h.load=function(){this.g.it();g.tV.prototype.load.call(this);this.B=new z8(this,this.g,this.l);var a=(a=dDa())?a.currentTime:0;var b=x8()?new U7(s8(),void 0):null;0==a&&b&&(a=Q7(V7(b)));0!=a&&(this.H=a||0,this.g.R("progresssync",a,void 0));gDa(this,this.D,this.D);g.W_(this.g.app,6)};
g.h.unload=function(){this.g.R("mdxautoplaycanceled");this.A=this.o;g.af(this.B,this.l);this.l=this.B=null;g.tV.prototype.unload.call(this);g.W_(this.g.app,5)};
g.h.V=function(){g.UF(this.C);g.tV.prototype.V.call(this)};
g.h.El=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.xA.apply(this.B,[].concat([a],g.qa(c)))};
g.h.qI=function(){return this.loaded?this.B.suggestion:null};
g.h.Lf=function(){return this.l?V7(this.l).Lf:!1};
g.h.hasNext=function(){return this.l?V7(this.l).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.XM=function(){var a=V7(this.l),b=this.g.ea();return{allowSeeking:this.g.gd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.C?a.A+O7(a):a.A,isPeggedToLive:1>=(a.C?a.o+O7(a):a.o)-this.getCurrentTime(),loaded:a.I,seekableEnd:a.C?a.o+O7(a):a.o,seekableStart:0<a.B?a.B+O7(a):a.B}};
g.h.YM=function(){this.l&&this.l.mE()};
g.h.ZM=function(){this.l&&this.l.nE()};
g.h.bP=function(a){1==a&&(this.I=this.l?V7(this.l):null)};
g.h.QR=function(){var a=x8()?new U7(s8(),void 0):null;if(a){var b=this.A;this.loaded&&this.unload();this.l=a;this.I=null;b.key!=this.o.key&&(this.A=b,this.load())}else g.$e(this.l),this.l=null,this.loaded&&(this.unload(),(a=this.I)&&a.videoId==this.g.ea().videoId&&this.g.Zz(a.videoId,Q7(a)));this.g.R("videodatachange","newdata",this.g.ea(),3)};
g.h.XB=function(){this.F=[this.o].concat(aDa());var a=t8()||this.o;I8(this,a);this.g.sa("onMdxReceiversChange")};
g.h.OR=function(){var a=t8();I8(this,a)};
g.h.NR=function(){this.A=t8()};
g.h.WM=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.F;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?K7():I8(this,b)),this.loaded?this.A:this.o;case "quickCast":return 2==this.F.length&&"cast-selector-receiver"==this.F[1].key?(b&&K7(),!0):!1}};
g.h.aN=function(){Z7(this.l,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Rc=function(){return!1};g.fY.remote=H8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:38:04 Feb 28, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:38:34 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 202.111
  exclusion.robots: 0.096
  exclusion.robots.policy: 0.086
  cdx.remote: 0.069
  esindex: 0.012
  LoadShardBlock: 152.962 (3)
  PetaboxLoader3.datanode: 1060.425 (4)
  load_resource: 1033.991
  PetaboxLoader3.resolve: 37.199
*/