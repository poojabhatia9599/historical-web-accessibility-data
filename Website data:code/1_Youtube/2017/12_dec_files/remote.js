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

(function(g){var window=this;var Oxa=function(a,b){return g.Tb(a,b)},I6=function(a){g.tm(a,"zx",g.yb());
return a},J6=function(a,b,c){g.xa(c)||(c=[String(c)]);
g.wm(a.g,b,c)},Pxa=function(a,b){var c=[];
g.ek(b,function(a){try{var b=g.PC.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.OC(b)&&c.push(a):c.push(a)},a);
return c},Qxa=function(a,b){var c=Pxa(a,b);
(0,g.C)(c,function(a){g.PC.prototype.remove.call(this,a)},a)},Rxa=function(){var a=g.iG;
Qxa(a,a.g.Xd(!0))},Sxa=function(a,b,c,d){var e=new g.km(null,void 0);
a&&g.lm(e,a);b&&g.mm(e,b);c&&g.nm(e,c);d&&g.om(e,d);return e},Txa=function(a){g.wF[a]&&(a=g.wF[a],(0,g.C)(a,function(a){g.uF[a]&&delete g.uF[a]}),a.length=0)},Uxa=function(a){var b=g.tF();
if(b)if(b.clear(a),a)Txa(a);else for(var c in g.wF)Txa(c)},K6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.A=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.em;this.g=this.o="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Vxa(this,a.capabilities||""),Wxa(this,a.experiments||""),this.o=a.remoteControllerUrl||"",
this.g=a.localChannelEncryptionKey||"")},Vxa=function(a,b){a.capabilities.clear();
(0,g.Gd)(b.split(","),g.Da(Oxa,Xxa)).forEach(function(b){a.capabilities.add(b)})},Wxa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},L6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},M6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},Yxa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Zxa=function(a){return new L6(a)},$xa=function(a){return g.xa(a)?(0,g.J)(a,Zxa):[]},N6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},O6=function(a){return g.xa(a)?"["+(0,g.J)(a,N6).join(",")+"]":"null"},P6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},aya=function(a){return(0,g.J)(a,function(a){return{key:a.id,
name:a.name}})},Q6=function(a,b){return g.Ja(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},R6=function(a,b){return g.Ja(a,function(a){return M6(a,b)})},S6=function(){var a=g.lG("yt-remote-connected-devices")||[];
g.fb(a);return a},bya=function(a){if(g.Pa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.J)(a,function(a,b){return 0==b?a:a.substring(c.length)})},cya=function(a){g.kG("yt-remote-connected-devices",a,86400)},U6=function(){if(T6)return T6;
var a=g.lG("yt-remote-device-id");a||(a=P6(),g.kG("yt-remote-device-id",a,31536E3));for(var b=S6(),c=1,d=a;g.D(b,d);)c++,d=a+"#"+c;return T6=d},V6=function(){var a=S6(),b=U6();
g.D(a,b);g.qG()&&g.ib(a,b);a=bya(a);if(g.Pa(a))try{g.oG.remove("remote_sid","/","youtube.com")}catch(c){}else try{g.pG("remote_sid",a.join(","),-1)}catch(c){}},dya=function(){return g.lG("yt-remote-session-browser-channel")},eya=function(){return g.lG("yt-remote-local-screens")||[]},fya=function(){g.kG("yt-remote-lounge-token-expiration",!0,86400)},gya=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.J)(eya(),function(a){return a.loungeToken}),c=(0,g.J)(a,function(a){return a.loungeToken});
(0,g.Tl)(c,function(a){return!g.D(b,a)})&&fya();
g.kG("yt-remote-local-screens",a,31536E3)},hya=function(a,b){g.kG("yt-remote-session-browser-channel",a);
g.kG("yt-remote-session-screen-id",b);var c=S6(),d=U6();g.D(c,d)||c.push(d);cya(c);V6()},W6=function(a){a||(g.mG("yt-remote-session-screen-id"),g.mG("yt-remote-session-video-id"));
V6();a=S6();g.Ta(a,U6());cya(a)},iya=function(){if(!X6){var a=g.VC();
a&&(X6=new g.JC(a))}return X6?!!X6.get("yt-remote-use-staging-server"):!1},jya=function(){var a=window.document.createElement("a");
g.Vc(a,"https://web.archive.org/web/20171201000840/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Db(a)},kya=function(a,b){var c=g.yd("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.Wc(c,g.Yd("https://web.archive.org/web/20171201000840/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},lya=function(){var a=jya(),b=window.document.getElementById(a),c=b&&g.HE(b,"loaded");
c||b&&!c||(b=kya(a,function(){g.HE(b,"loaded")||(g.GE(b,"loaded","true"),g.AF(a),g.DD(g.Da(Uxa,a),0))}))},mya=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?(0,window.parseInt)(a[1],10):0},Y6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},nya=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},oya=function(a,b){var c=new window.XMLHttpRequest;
c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}},b7=function(a){if(a>=pya.length)Z6();
else{var b=pya[a],c="chrome-extension://"+b+qya;0<=$6.indexOf(b)?oya(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,a7(c,Z6)):b7(a+1)}):a7(c,function(){b7(a+1)})}},a7=function(a,b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},c7=function(a){return 0<=window.navigator.userAgent.indexOf(a)},Z6=function(){var a=nya();
a&&a(!1,"No cast extension found")},sya=function(){if(rya){var a=2,b=nya(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;a7("//web.archive.org/web/20171201000840/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Z6,c)}},tya=function(){if(c7("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){sya();a({command:"cast.sender.init"});return}}if(!window.chrome||c7("Edge"))Z6();else if(sya(),c7("Android")&&c7("Chrome/")&&window.navigator.presentation){a="";var b=mya();55<=b?a="55":50<=b&&(a="50");a7("//web.archive.org/web/20171201000840/https://www.gstatic.com/eureka/clank"+a+qya,Z6)}else b7(0)},d7=function(a,b,c){g.M.call(this);
this.D=null!=c?(0,g.z)(a,c):a;this.tc=b;this.C=(0,g.z)(this.JH,this);this.g=!1;this.o=0;this.A=this.Aa=null;this.B=[]},e7=function(){},f7=function(a,b,c,d){this.g=a;
this.A=b;this.G=c;this.F=d||1;this.C=45E3;this.B=new g.Am(this);this.o=new g.ng;this.o.setInterval(250)},vya=function(a,b,c){a.mj=1;
a.jh=I6(b.clone());a.Gi=c;a.D=!0;uya(a,null)},g7=function(a,b,c,d,e){a.mj=1;
a.jh=I6(b.clone());a.Gi=null;a.D=c;e&&(a.ZB=!1);uya(a,d)},uya=function(a,b){a.Rj=(0,g.H)();
h7(a);a.Dh=a.jh.clone();J6(a.Dh,"t",a.F);a.Pl=0;a.Mc=a.g.xq(a.g.Jl()?b:null);0<a.ar&&(a.Io=new g.Jk((0,g.z)(a.jD,a,a.Mc),a.ar));a.B.R(a.Mc,"readystatechange",a.CS);var c=a.gi?g.$b(a.gi):{};a.Gi?(a.rp="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Mc.send(a.Dh,a.rp,a.Gi,c)):(a.rp="GET",a.ZB&&!g.ud&&(c.Connection="close"),a.Mc.send(a.Dh,a.rp,null,c));a.g.rf(1)},yya=function(a,b,c){for(var d=!0;!a.Qh&&a.Pl<c.length;){var e=wya(a,c);
if(e==i7){4==b&&(a.kh=4,j7(15),d=!1);break}else if(e==xya){a.kh=4;j7(16);d=!1;break}else k7(a,e)}4==b&&0==c.length&&(a.kh=1,j7(17),d=!1);a.vf=a.vf&&d;d||(l7(a),m7(a))},wya=function(a,b){var c=a.Pl,d=b.indexOf("\n",c);
if(-1==d)return i7;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return xya;d+=1;if(d+c>b.length)return i7;var e=b.substr(d,c);a.Pl=d+c;return e},Aya=function(a,b){a.Rj=(0,g.H)();
h7(a);var c=b?window.location.hostname:"";a.Dh=a.jh.clone();g.tm(a.Dh,"DOMAIN",c);g.tm(a.Dh,"t",a.F);try{a.wf=new window.ActiveXObject("htmlfile")}catch(n){l7(a);a.kh=7;j7(22);m7(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in n7)k=n7[l];else if(l in zya)k=n7[l]=zya[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=n7[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Xc(g.uc("b/12014412"),d);a.wf.open();a.wf.write(g.Pc(c));a.wf.close();a.wf.parentWindow.m=(0,g.z)(a.HR,a);a.wf.parentWindow.d=(0,g.z)(a.qB,a,!0);a.wf.parentWindow.rpcClose=(0,g.z)(a.qB,a,!1);c=a.wf.createElement("DIV");a.wf.parentWindow.document.body.appendChild(c);d=g.Gc(a.Dh.toString());d=g.pb(g.Dc(d));d=g.Xc(g.uc("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=g.Pc(d);
a.g.rf(1)},h7=function(a){a.Du=(0,g.H)()+a.C;
Bya(a,a.C)},Bya=function(a,b){if(null!=a.mk)throw Error("WatchDog timer not null");
a.mk=o7((0,g.z)(a.YR,a),b)},p7=function(a){a.mk&&(g.w.clearTimeout(a.mk),a.mk=null)},m7=function(a){a.g.Ex()||a.Qh||a.g.yo(a)},l7=function(a){p7(a);
g.We(a.Io);a.Io=null;a.o.stop();g.Gm(a.B);if(a.Mc){var b=a.Mc;a.Mc=null;b.abort();b.dispose()}a.wf&&(a.wf=null)},k7=function(a,b){try{a.g.jB(a,b),a.g.rf(4)}catch(c){}},Dya=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;Cya(a,b,function(e){e?c(!0):g.w.setTimeout(function(){Dya(a,b,c,d,f)},f)})}},Cya=function(a,b,c){var d=new window.Image;
d.onload=function(){try{q7(d),c(!0)}catch(e){}};
d.onerror=function(){try{q7(d),c(!1)}catch(e){}};
d.onabort=function(){try{q7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{q7(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},q7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},Eya=function(a){this.g=a;
this.o=new e7},Fya=function(a){var b=r7(a.g,a.rk,"/mail/images/cleardot.gif");
I6(b);Dya(b.toString(),5E3,(0,g.z)(a.RG,a),3,2E3);a.rf(1)},t7=function(a){var b=a.g.I;
if(null!=b)j7(5),b?(j7(11),s7(a.g,a,!1)):(j7(12),s7(a.g,a,!0));else if(a.ne=new f7(a,void 0,void 0,void 0),a.ne.gi=a.Xq,b=a.g,b=r7(b,b.Jl()?a.Qk:null,a.Zq),j7(5),!g.sd||g.qc(10))J6(b,"TYPE","xmlhttp"),g7(a.ne,b,!1,a.Qk,!1);else{J6(b,"TYPE","html");var c=a.ne;a=!!a.Qk;c.mj=3;c.jh=I6(b.clone());Aya(c,a)}},u7=function(a,b,c){this.g=1;
this.o=[];this.B=[];this.C=new e7;this.G=a||null;this.I=null!=b?b:null;this.D=c||!1},Gya=function(a,b){this.g=a;
this.map=b;this.context=null},Hya=function(a){g.Ye.call(this,"statevent",a)},Iya=function(a,b){g.Ye.call(this,"timingevent",a);
this.size=b},Jya=function(a){g.Ye.call(this,"serverreachability",a)},Mya=function(a){Kya(a);
if(3==a.g){var b=a.yl++,c=a.un.clone();g.tm(c,"SID",a.A);g.tm(c,"RID",b);g.tm(c,"TYPE","terminate");v7(a,c);b=new f7(a,a.A,b,void 0);b.mj=2;b.jh=I6(c.clone());(new window.Image).src=b.jh;b.Rj=(0,g.H)();h7(b)}Lya(a)},Nya=function(a){a.pH(1,0);
a.un=r7(a,null,a.Wq);w7(a)},Kya=function(a){a.Yg&&(a.Yg.abort(),a.Yg=null);
a.qc&&(a.qc.cancel(),a.qc=null);a.tg&&(g.w.clearTimeout(a.tg),a.tg=null);x7(a);a.Md&&(a.Md.cancel(),a.Md=null);a.ah&&(g.w.clearTimeout(a.ah),a.ah=null)},Oya=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.o.push(new Gya(a.DN++,b));2!=a.g&&3!=a.g||w7(a)},w7=function(a){a.Md||a.ah||(a.ah=o7((0,g.z)(a.oB,a),0),a.ej=0)},Qya=function(a,b){if(1==a.g){if(!b){a.yl=Math.floor(1E5*Math.random());
var c=a.yl++,d=new f7(a,"",c,void 0);d.gi=null;var e=y7(a),f=a.un.clone();g.tm(f,"RID",c);g.tm(f,"CVER","1");v7(a,f);vya(d,f,e);a.Md=d;a.g=2}}else 3==a.g&&(b?Pya(a,b):0==a.o.length||a.Md||Pya(a))},Pya=function(a,b){if(b)if(6<a.Sh){a.o=a.B.concat(a.o);
a.B.length=0;var c=a.yl-1;var d=y7(a)}else c=b.G,d=b.Gi;else c=a.yl++,d=y7(a);var e=a.un.clone();g.tm(e,"SID",a.A);g.tm(e,"RID",c);g.tm(e,"AID",a.zj);v7(a,e);c=new f7(a,a.A,c,a.ej+1);c.gi=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.Md=c;vya(c,e,d)},v7=function(a,b){if(a.pd){var c=a.pd.gx();
c&&g.Kb(c,function(a,c){g.tm(b,c,a)})}},y7=function(a){var b=Math.min(a.o.length,1E3),c=["count="+b];
if(6<a.Sh&&0<b){var d=a.o[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.o[e].g,k=a.o[e].map;f=6>=a.Sh?e:f-d;try{g.Kb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.B=a.B.concat(a.o.splice(0,b));
return c.join("&")},Rya=function(a){a.qc||a.tg||(a.F=1,a.tg=o7((0,g.z)(a.nB,a),0),a.Vi=0)},z7=function(a){if(a.qc||a.tg||3<=a.Vi)return!1;
a.F++;a.tg=o7((0,g.z)(a.nB,a),Sya(a,a.Vi));a.Vi++;return!0},s7=function(a,b,c){a.qp=c;
a.ff=b.zg;a.D||Nya(a)},x7=function(a){null!=a.Uh&&(g.w.clearTimeout(a.Uh),a.Uh=null)},Sya=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},A7=function(a,b){if(2==b||9==b){var c=null;
a.pd&&(c=null);var d=(0,g.z)(a.AT,a);c||(c=new g.km("//web.archive.org/web/20171201000840/https://www.google.com/images/cleardot.gif"),I6(c));Cya(c.toString(),1E4,d)}else j7(2);Tya(a,b)},Tya=function(a,b){a.g=0;
a.pd&&a.pd.ew(b);Lya(a);Kya(a)},Lya=function(a){a.g=0;
a.ff=-1;if(a.pd)if(0==a.B.length&&0==a.o.length)a.pd.kq();else{g.Wa(a.B);var b=g.Wa(a.o);a.B.length=0;a.o.length=0;a.pd.kq(b)}},r7=function(a,b,c){var d=g.um(c);
if(""!=d.o)b&&g.mm(d,b+"."+d.o),g.nm(d,d.C);else{var e=window.location;d=Sxa(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c)}a.Dk&&g.Kb(a.Dk,function(a,b){g.tm(d,b,a)});
g.tm(d,"VER",a.Sh);v7(a,d);return d},o7=function(a,b){if(!g.za(a))throw Error("Fn must not be null and must be a function");
return g.w.setTimeout(function(){a()},b)},j7=function(a){B7.dispatchEvent(new Hya(B7,a))},Uya=function(){},Vya=function(a,b){this.action=a;
this.params=b||{}},D7=function(a,b){g.M.call(this);
this.g=new g.Nt(this.A,0,this);g.N(this,this.g);this.o=this.tc=0;if(g.za(a))b&&(a=(0,g.z)(a,b));else if(a&&g.za(a.handleEvent))a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a;C7(this)},C7=function(a){a.g.stop();
a.tc=5E3+2E4*Math.random()},E7=function(a,b,c){this.L=a;
this.D=b;this.A=new g.IC;this.o=new D7(this.gU,this);this.g=this.bb=null;this.J=!1;this.C=null;this.I="";this.G=this.B=0;this.F=[];this.N=c||!1},Wya=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.qp,sessionId:a.g.A,arrayId:a.g.zj}},Xya=function(a,b){a.G=b||0;
a.o.stop();a.g&&(3==a.g.g&&Qya(a.g),Mya(a.g));a.G=0},F7=function(a){return!!a.g&&3==a.g.g},Yya=function(a,b){(a.D.loungeIdToken=b)||a.o.stop()},G7=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Dg(a)||"";b&&(this.port=":"+b);this.domain=g.Cg(a)||"";a=g.Ib;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Cb(a,"10.0")&&(this.o=!1))},H7=function(a,b){var c=a.g;
if(g.t(void 0)?0:a.o)c="https://"+a.domain+a.port+a.g;return g.Mg(c+b,{})},I7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,Jb:g.Da(a.B,d,!0),onError:g.Da(a.A,e),sd:g.Da(a.C,e)};c&&(a.Nb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.TD(b,a)},bza=function(){var a=Zya;
$ya();J7.push(a);aza(J7)},K7=function(a,b){$ya();
var c=J7,d=cza(a,String(b));g.Pa(c)?dza(d):(aza(c),(0,g.C)(c,function(a){a(d)}))},$ya=function(){J7||(J7=g.x("yt.mdx.remote.debug.handlers_")||[],g.ua("yt.mdx.remote.debug.handlers_",J7,void 0))},dza=function(a){var b=(L7+1)%50;
L7=b;M7[b]=a;N7||(N7=49==b)},aza=function(a){var b=M7;
if(b[0]){var c=L7,d=N7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.C)(a,function(a){a(e)})}while(d!=c);
M7=Array(50);L7=-1;N7=!1}},cza=function(a,b){var c=((0,g.H)()-eza)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},O7=function(a){g.lF.call(this);
this.F=a;this.g=[]},fza=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},gza=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Gd)(a.g,function(a){return!!Q6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=fza(a,b[d])||c;return c},hza=function(a,b){var c=a.g.length;
a.g=(0,g.Gd)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c},P7=function(a,b,c,d){g.lF.call(this);
this.D=a;this.C=b;this.A=c;this.B=d;this.o=0;this.g=null;this.Aa=window.NaN},R7=function(a){O7.call(this,"LocalScreenService");
this.A=a;this.o=window.NaN;Q7(this);this.info("Initializing with "+O6(this.g))},iza=function(a){if(a.g.length){var b=(0,g.J)(a.g,function(a){return a.id}),c=H7(a.A,"/pairing/get_lounge_token_batch");
I7(a.A,c,{screen_ids:b.join(",")},(0,g.z)(a.VH,a),(0,g.z)(a.UH,a))}},Q7=function(a){var b=$xa(eya());
b=(0,g.Gd)(b,function(a){return!a.uuid});
return gza(a,b)},S7=function(a,b){gya((0,g.J)(a.g,Yxa));
b&&fya()},U7=function(a,b){g.lF.call(this);
this.D=b;var c=g.lG("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.D(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.D(c,l)}this.g=d;this.C=a;this.A=this.B=window.NaN;this.o=null;T7("Initialized with "+g.ug(this.g))},jza=function(a,b,c){var d=H7(a.C,"/pairing/get_screen_availability");
I7(a.C,d,{lounge_token:b.token},(0,g.z)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},V7=function(a,b){a:if(g.Ob(b)!=g.Ob(a.g))var c=!1;
else{c=g.Qb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(T7("Updated online screens: "+g.ug(a.g)),a.g=b,a.T("screenChange"));kza(a)},W7=function(a){(0,window.isNaN)(a.A)||g.FD(a.A);
a.A=g.DD((0,g.z)(a.Nt,a),0<a.B&&a.B<(0,g.H)()?2E4:1E4)},T7=function(a){K7("OnlineScreenService",a)},lza=function(a){var b={};
(0,g.C)(a.D(),function(a){a.token?b[a.token]=a.id:this.Zb("Requesting availability of screen w/o lounge token.")});
return b},kza=function(a){a=g.Qb(g.Lb(a.g,function(a){return a}));
g.fb(a);a.length?g.kG("yt-remote-online-screen-ids",a.join(","),60):g.mG("yt-remote-online-screen-ids")},X7=function(a){O7.call(this,"ScreenService");
this.D=a;this.o=this.A=null;this.B=[];this.C={};mza(this)},oza=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var k=a.fe();if(k=(c?R6(k,c):null)||R6(k,b)){k.uuid=b;var l=Y7(a,k);jza(a.o,l,function(a){e(a?l:null)})}else c?nza(a,c,(0,g.z)(function(a){var f=Y7(this,new L6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));jza(this.o,f,function(a){e(a?f:null)})},a),f):e(null)},pza=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},nza=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Nb:{screen_ids:b},method:"POST",context:a,Jb:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.TD(H7(a.D,"/pairing/get_lounge_token_batch"),e)},qza=function(a){a.g=a.A.fe();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+O6(a.g))},mza=function(a){Z7(a);
a.A=new R7(a.D);a.A.subscribe("screenChange",(0,g.z)(a.lI,a));qza(a);a.B=$xa(g.lG("yt-remote-automatic-screen-cache")||[]);Z7(a);a.info("Initializing automatic screens: "+O6(a.B));a.o=new U7(a.D,(0,g.z)(a.fe,a,!0));a.o.subscribe("screenChange",(0,g.z)(function(){this.T("onlineScreenChange")},a))},Y7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=R6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),g.kG("yt-remote-automatic-screen-cache",(0,g.J)(a.B,Yxa)));Z7(a);a.C[b.uuid]=b.id;g.kG("yt-remote-device-id-map",a.C,31536E3);return b},Z7=function(a){a.C=g.lG("yt-remote-device-id-map")||{}},$7=function(a,b,c){g.lF.call(this);
this.N=c;this.I=a;this.o=b;this.A=null},a8=function(a,b){K7(a.N,b)},b8=function(a,b){$7.call(this,a,b,"CastSession");
this.g=null;this.B=0;this.D=(0,g.z)(this.mU,this);this.C=(0,g.z)(this.iS,this);this.B=g.DD((0,g.z)(function(){rza(this,null)},this),12E4)},sza=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.ug(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.y,(0,g.z)(function(){a8(this,"Failed to send message: getMdxSessionStatus.")},a)):a8(a,"Sending yt message without session: "+g.ug(b))},rza=function(a,b){g.FD(a.B);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.A||a.A.id!=b){var c=(0,g.z)(a.zo,a),d=(0,g.z)(a.je,a);a.xx(b,c,d,5)}}else a.je(Error("Waiting for session status timed out."))},c8=function(a,b,c){$7.call(this,a,b,"DialSession");
this.B=this.G=null;this.J="";this.O=c;this.C=null;this.F=g.y;this.D=window.NaN;this.L=(0,g.z)(this.pU,this);this.g=g.y},tza=function(a){a.g=a.I.pD(a.J,a.o.label,a.o.friendlyName,(0,g.z)(function(a){this.g=g.y;
this.zo(a)},a),(0,g.z)(function(a){this.g=g.y;
this.je(a)},a))},uza=function(a){var b={};
b.pairingCode=a.J;b.theme=a.O;if(a.C){var c=a.C.currentTime||0;b.v=a.C.videoId;b.t=c}iya()&&(b.env_useStageMdx=1);return g.Kg(b)},d8=function(a,b){$7.call(this,a,b,"ManualSession");
this.g=g.DD((0,g.z)(this.Aj,this,null),150)},e8=function(a,b,c,d){g.lF.call(this);
this.o=a;this.F=b||"233637DE";this.D=c||"cl";this.G=d||!1;this.g=null;this.C=!1;this.A=[];this.B=(0,g.z)(this.OQ,this)},vza=function(a,b){return b?g.Ja(a.A,function(a){return M6(b,a.label)},a):null},f8=function(a){K7("Controller",a)},Zya=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},g8=function(a){return a.C||!!a.A.length||!!a.g},h8=function(a,b,c){b!=a.g&&(g.We(a.g),(a.g=b)?(c?a.T("yt-remote-cast2-receiver-resumed",b.o):a.T("yt-remote-cast2-receiver-selected",
b.o),b.subscribe("sessionScreen",(0,g.z)(a.lB,a,b)),b.A?a.T("yt-remote-cast2-session-change",b.A):c&&a.g.Aj(null)):a.T("yt-remote-cast2-session-change",null))},wza=function(a){var b=a.o.oD(),c=a.g&&a.g.o;
a=(0,g.J)(b,function(a){c&&M6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=vza(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Bza=function(a,b,c,d,e,f,k){xza()?yza(b,e,f,k)&&(j8(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?zza(a,c):(window.__onGCastApiAvailable=function(b,d){b?zza(a,c):(k8("Failed to load cast API: "+d),l8(!1),j8(!1),g.mG("yt-remote-cast-available"),g.mG("yt-remote-cast-receiver"),Aza(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20171201000840/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):lya():tya())):i8("Cannot initialize because not running Chrome")},Aza=function(){i8("dispose");
var a=m8();a&&a.dispose();g.ua("yt.mdx.remote.cloudview.instance_",null,void 0);Cza(!1);g.yF(n8);n8.length=0},o8=function(){return!!g.lG("yt-remote-cast-installed")},Dza=function(){var a=g.lG("yt-remote-cast-receiver");
return a?a.friendlyName:null},Eza=function(){i8("clearCurrentReceiver");
g.mG("yt-remote-cast-receiver")},Fza=function(){return o8()?m8()?m8().getCastSession():(k8("getCastSelector: Cast is not initialized."),null):(k8("getCastSelector: Cast API is not installed!"),null)},q8=function(){o8()?m8()?p8()?(i8("Requesting cast selector."),m8().requestSession()):(i8("Wait for cast API to be ready to request the session."),n8.push(g.xF("yt-remote-cast2-api-ready",q8))):k8("requestCastSelector: Cast is not initialized."):k8("requestCastSelector: Cast API is not installed!")},r8=
function(a,b){p8()?m8().setConnectedScreenStatus(a,b):k8("setConnectedScreenStatus called before ready.")},xza=function(){var a=0<=g.Ib.search(/ (CrMo|Chrome|CriOS)\//);
return g.aJ||a},Gza=function(a,b){m8().init(a,b)},yza=function(a,b,c,d){var e=!1;
m8()||(a=new e8(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.kG("yt-remote-cast-available",a);g.BF("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){i8("onReceiverSelected: "+a.friendlyName);
g.kG("yt-remote-cast-receiver",a);g.BF("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){i8("onReceiverResumed: "+a.friendlyName);
g.kG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){i8("onSessionChange: "+N6(a));
a||g.mG("yt-remote-cast-receiver");g.BF("yt-remote-cast2-session-change",a)}),g.ua("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
i8("cloudview.createSingleton_: "+e);return e},m8=function(){return g.x("yt.mdx.remote.cloudview.instance_")},zza=function(a,b){l8(!0);
j8(!1);Gza(a,function(a){a?(Cza(!0),g.AF("yt-remote-cast2-api-ready")):(k8("Failed to initialize cast API."),l8(!1),g.mG("yt-remote-cast-available"),g.mG("yt-remote-cast-receiver"),Aza());b(a)})},i8=function(a){K7("cloudview",a)},k8=function(a){K7("cloudview",a)},l8=function(a){i8("setCastInstalled_ "+a);
g.kG("yt-remote-cast-installed",a)},p8=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},Cza=function(a){i8("setApiReady_ "+a);
g.ua("yt.mdx.remote.cloudview.apiReady_",a,void 0)},j8=function(a){g.ua("yt.mdx.remote.cloudview.initializing_",a,void 0)},s8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.g=-1;this.muted=!1;this.audioTrackId=null;this.F=this.G=0;this.o=null;this.hasNext=this.Lf=!1;this.J=this.I=this.A=this.C=0;this.B=window.NaN;this.D=!1;this.reset(a)},t8=function(a){a.audioTrackId=null;
a.o=null;a.g=-1;a.Lf=!1;a.hasNext=!1;a.G=0;a.F=(0,g.H)();a.C=0;a.A=0;a.I=0;a.J=0;a.B=window.NaN;a.D=!1},u8=function(a){return a.kb()?((0,g.H)()-a.F)/1E3:0},v8=function(a,b){a.G=b;
a.F=(0,g.H)()},w8=function(a){switch(a.g){case 1:case 1081:return((0,g.H)()-a.F)/1E3+a.G;
case -1E3:return 0}return a.G},x8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&t8(a)},y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.g;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.ac(a.o);b.hasPrevious=a.Lf;b.hasNext=a.hasNext;b.playerTime=a.G;b.playerTimeAt=a.F;b.seekableStart=a.C;b.seekableEnd=a.A;b.duration=a.I;b.loadedTime=a.J;b.liveIngestionTime=a.B;return b},A8=function(a,b){g.lF.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.ZB;this.A=this.o=null;this.I=(0,g.z)(this.mO,this);this.F=(0,g.z)(this.Al,this);this.G=(0,g.z)(this.lO,this);this.J=(0,g.z)(this.zO,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Ju,this),Hza(this))):c=3;0!=c&&(b?this.Ju(c):g.DD((0,g.z)(function(){this.Ju(c)},this),0));
var d=Fza();d&&z8(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},B8=function(a){return new s8(a.B.getPlayerContextData())},Hza=function(a){(0,g.C)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.Da(this.KQ,a),this))},a)},Iza=function(a){(0,g.C)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},C8=function(a,b){50>a.C.Jc()&&g.aC(a.C,b)},E8=function(a,b,c){var d=B8(a);
v8(d,c);-1E3!=d.g&&(d.g=b);D8(a,d)},F8=function(a,b,c){a.B.sendMessage(b,c)},D8=function(a,b){Iza(a);
a.B.setPlayerContextData(y8(b));Hza(a)},z8=function(a,b){a.A&&(a.A.removeUpdateListener(a.I),a.A.removeMediaListener(a.F),a.Al(null));
a.A=b;a.A&&(K7("CP","Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.I),a.A.addMediaListener(a.F),a.A.media.length&&a.Al(a.A.media[0]))},Jza=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=B8(a);b.contentId!=d.videoId&&K7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;v8(d,a.o.getEstimatedTime());D8(a,d)}else K7("CP","No cast media video. Ignoring state update.")},G8=function(a,b,c){return(0,g.z)(function(a){this.Zb("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.Zb("Retrying "+b+" using MDx browser channel."),F8(this,b,c))},a)},H8=function(a,b,c){g.lF.call(this);
this.C=window.NaN;this.O=!1;this.J=this.I=this.L=this.N=window.NaN;this.W=[];this.B=this.F=this.A=this.fb=this.g=null;this.na=a;this.W.push(g.WE(window,"beforeunload",(0,g.z)(this.MH,this)));this.o=[];this.fb=new s8;this.aa=b.id;this.g=Kza(this,c);this.g.subscribe("handlerOpened",this.qO,this);this.g.subscribe("handlerClosed",this.nO,this);this.g.subscribe("handlerError",this.oO,this);this.g.subscribe("handlerMessage",this.pO,this);Yya(this.g,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.fb.videoId;g.qG()&&g.kG("yt-remote-session-video-id",a)},this)},I8=function(a){K7("conn",a)},Kza=function(a,b){return new E7(H7(a.na,"/bc"),b)},J8=function(a,b){a.T("proxyStateChange",b)},Lza=function(a){a.C=g.DD((0,g.z)(function(){I8("Connecting timeout");
this.D(1)},a),2E4)},K8=function(a){g.FD(a.C);
a.C=window.NaN},L8=function(a){g.FD(a.N);
a.N=window.NaN},Mza=function(a){M8(a);
a.L=g.DD((0,g.z)(function(){N8(this,"getNowPlaying")},a),2E4)},M8=function(a){g.FD(a.L);
a.L=window.NaN},Oza=function(a,b){b&&(K8(a),L8(a));
b==(F7(a.g)&&(0,window.isNaN)(a.C))?b&&(J8(a,1),N8(a,"getSubtitlesTrack")):b?(a.X()&&a.fb.reset(),J8(a,1),N8(a,"getNowPlaying"),Nza(a)):a.D(1)},Pza=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.fb.videoId&&(g.Wb(b.params)?a.fb.o=null:a.fb.o=b.params,a.T("remotePlayerChange"))},Qza=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.fb.listId=b.params.listId||a.fb.listId;x8(a.fb,c,d);a.T("remoteQueueChange")},Sza=function(a,b){b.params=b.params||{};
Qza(a,b);Rza(a,b);a.T("autoplayDismissed")},Rza=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
v8(a.fb,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.fb.g&&(c=-1E3);a.fb.g=c;c=Number(b.params.loadedTime);a.fb.J=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.fb.I=(0,window.isNaN)(c)?0:c;c=a.fb;var d=Number(b.params.liveIngestionTime);c.B=d;c.D=(0,window.isNaN)(d)?!1:!0;c=a.fb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=(0,window.isNaN)(d)?0:d;c.A=(0,window.isNaN)(e)?0:e;1==a.fb.g?Mza(a):M8(a);
a.T("remotePlayerChange")},Tza=function(a,b){if(-1E3!=a.fb.g){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.fb.g=c;c=(0,window.parseInt)(b.params.currentTime,10);v8(a.fb,(0,window.isNaN)(c)?0:c);a.T("remotePlayerChange")}},Uza=function(a,b){var c="true"==b.params.muted;
a.fb.volume=(0,window.parseInt)(b.params.volume,10);a.fb.muted=c;a.T("remotePlayerChange")},Vza=function(a,b){a.F=b.params.videoId;
a.T("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},Wza=function(a,b){var c="true"==b.params.hasNext;
a.fb.Lf="true"==b.params.hasPrevious;a.fb.hasNext=c;a.T("previousNextChange")},Nza=function(a){g.FD(a.J);
a.J=g.DD((0,g.z)(a.D,a,1),864E5)},N8=function(a,b,c){c?I8("Sending: action="+b+", params="+g.ug(c)):I8("Sending: action="+b);
a.g.sendMessage(b,c)},O8=function(a){O7.call(this,"ScreenServiceProxy");
this.cd=a;this.o=[];this.o.push(this.cd.$_s("screenChange",(0,g.z)(this.kU,this)));this.o.push(this.cd.$_s("onlineScreenChange",(0,g.z)(this.lQ,this)))},aAa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.xD("MDX_CONFIG")||b;g.iG&&Rxa();V6();P8||(P8=new G7(b?b.loungeApiHost:void 0),iya()&&(P8.g="/api/loungedev"));Q8||(Q8=g.x("yt.mdx.remote.deferredProxies_")||[],g.ua("yt.mdx.remote.deferredProxies_",Q8,void 0));Xza();var c=R8();if(!c){var d=new X7(P8);g.ua("yt.mdx.remote.screenService_",d,void 0);c=R8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);Bza(a,d,function(a){a?S8()&&r8(S8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.BF("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.ua("yt.mdx.remote.initialized_",!0,void 0),T8("Initializing: "+g.ug(b)),U8.push(g.xF("yt-remote-cast2-availability-change",function(){g.BF("yt-remote-receiver-availability-change")})),U8.push(g.xF("yt-remote-cast2-receiver-selected",function(){V8(null);
g.BF("yt-remote-auto-connect","cast-selector-receiver")})),U8.push(g.xF("yt-remote-cast2-receiver-resumed",function(){g.BF("yt-remote-receiver-resumed","cast-selector-receiver")})),U8.push(g.xF("yt-remote-cast2-session-change",Yza)),U8.push(g.xF("yt-remote-connection-change",function(a){a?r8(S8(),"YouTube TV"):W8()||(r8(null,null),Eza())})),a=X8(),b.isAuto&&(a.id+="#dial"),g.mE("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),T8(" -- with channel params: "+
g.ug(a)),Zza(a),c.start(),S8()||$za())},cAa=function(){var a=bAa();
o8()&&g.lG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},bAa=function(){var a=R8().cd.$_gos();
var b=Y8();b&&Z8()&&(Q6(a,b)||a.push(b));return aya(a)},$8=function(){var a=dAa();
!a&&o8()&&Dza()&&(a={key:"cast-selector-receiver",name:Dza()});return a},dAa=function(){var a=bAa(),b=Y8();
b||(b=W8());return g.Ja(a,function(a){return b&&M6(b,a.key)?!0:!1})},Y8=function(){var a=S8();
if(!a)return null;var b=R8().fe();return R6(b,a)},Yza=function(a){T8("remote.onCastSessionChange_: "+N6(a));
if(a){var b=Y8();b&&b.id==a.id?r8(b.id,"YouTube TV"):(b&&a9(),b9(a,1))}else Z8()&&a9()},a9=function(){p8()?m8().stopSession():k8("stopSession called before API ready.");
var a=Z8();a&&(a.disconnect(1),c9(null))},d9=function(){var a=Z8();
return!!a&&3!=a.getProxyState()},T8=function(a){K7("remote",a)},R8=function(){if(!e9){var a=g.x("yt.mdx.remote.screenService_");
e9=a?new O8(a):null}return e9},S8=function(){return g.x("yt.mdx.remote.currentScreenId_")},eAa=function(a){g.ua("yt.mdx.remote.currentScreenId_",a,void 0)},fAa=function(){return g.x("yt.mdx.remote.connectData_")},V8=function(a){g.ua("yt.mdx.remote.connectData_",a,void 0)},Z8=function(){return g.x("yt.mdx.remote.connection_")},c9=function(a){var b=Z8();
V8(null);a||eAa("");g.ua("yt.mdx.remote.connection_",a,void 0);Q8&&((0,g.C)(Q8,function(b){b(a)}),Q8.length=0);
b&&!a?g.BF("yt-remote-connection-change",!1):!b&&a&&g.BF("yt-remote-connection-change",!0)},W8=function(){var a=g.qG();
if(!a)return null;var b=R8().fe();return R6(b,a)},b9=function(a,b){Y8()&&Y8();
eAa(a.id);var c=new H8(P8,a,X8());c.connect(b,fAa());c.subscribe("beforeDisconnect",function(a){g.BF("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){Z8()&&c9(null)});
c9(c)},$za=function(){var a=W8();
a?(T8("Resume connection to: "+N6(a)),b9(a,0)):(W6(),Eza(),T8("Skipping connecting because no session screen found."))},Xza=function(){var a=X8();
if(g.Wb(a)){a=U6();var b=g.lG("yt-remote-session-name")||"",c=g.lG("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.ua("yt.mdx.remote.channelParams_",a,void 0)}},X8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},Zza=function(a){a?(g.kG("yt-remote-session-app",a.app),g.kG("yt-remote-session-name",a.name)):(g.mG("yt-remote-session-app"),g.mG("yt-remote-session-name"));
g.ua("yt.mdx.remote.channelParams_",a,void 0)},f9=function(a,b,c){g.M.call(this);
this.G=a;this.o=b;this.A=new g.iF(this);g.N(this,this.A);this.A.P(b,"onCaptionsTrackListChanged",this.EP);this.A.P(b,"captionschanged",this.kO);this.A.P(b,"captionssettingschanged",this.DC);this.A.P(b,"videoplayerreset",this.Ao);this.A.P(b,"mdxautoplaycancel",this.QG);this.W=this.A.P(b,"onVolumeChange",this.VA);this.F=!1;this.g=c;c.subscribe("proxyStateChange",this.iB,this);c.subscribe("remotePlayerChange",this.Cl,this);c.subscribe("remoteQueueChange",this.Ao,this);c.subscribe("autoplayUpNext",this.EA,
this);c.subscribe("previousNextChange",this.fB,this);c.subscribe("nowAutoplaying",this.XA,this);c.subscribe("autoplayDismissed",this.DA,this);this.suggestion=null;this.I=new g.eO(64);this.B=new g.Nt(this.zC,500,this);g.N(this,this.B);this.C=new g.Nt(this.AC,1E3,this);g.N(this,this.C);this.L=new d7(this.JT,0,this);g.N(this,this.L);this.D={};this.N=new g.Nt(this.dD,1E3,this);g.N(this,this.N);this.J=new g.Jk(this.kL,1E3,this);g.N(this,this.J);this.O=g.y;this.DC();this.Ao();this.Cl()},g9=function(a,b){var c=
a.G,d=a.o.fa().lengthSeconds;
c.I=b||0;c.g.T("progresssync",b,d)},gAa=function(a){g9(a,0);
a.B.stop();h9(a,new g.eO(64))},j9=function(a,b){if(i9(a)&&!a.F){var c=null;
b&&(c={style:a.o.yi()},g.dc(c,b));a.g.qC(a.o.fa(1).videoId,c);a.D=B8(a.g).o}},k9=function(a,b){var c=a.o.Xf();
if(c){var d=c.ce();var e=c.listId.toString()}var f=a.o.fa(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;f=f.wj;var m=B8(c),n=e||m.listId;l=l||0;var q={videoId:k,currentIndex:l};x8(m,k,l);g.t(b)&&(v8(m,b),q.currentTime=b);g.t(n)&&(q.listId=n);null!=d&&(q.playerParams=d);null!=f&&(q.clickTrackingParams=f);F8(c,"setPlaylist",q);e||D8(c,m);h9(a,new g.eO(1))},hAa=function(a,b){if(b){var c=a.o.yc("captions","tracklist",{uy:1});
c&&c.length?(a.o.Ed("captions","track",b),a.F=!1):(a.o.rl("captions"),a.F=!0)}else a.o.Ed("captions","track",{})},i9=function(a){return B8(a.g).videoId==a.o.fa(1).videoId},h9=function(a,b){a.C.stop();
var c=a.I;if(!g.lO(c,b)){var d=g.V(b,2);d!=g.V(a.I,2)&&g.WT(a.o,d);a.I=b;iAa(a.G,c,b)}},l9=function(a){g.X.call(this,{H:"div",
M:"ytp-remote",K:[{H:"div",M:"ytp-remote-display-status",K:[{H:"div",M:"ytp-remote-display-status-icon",K:[g.UU()]},{H:"div",M:"ytp-remote-display-status-text",K:["{{statustext}}"]}]}]});this.o=new g.qV(this,250);g.N(this,this.o);this.A=a;this.P(a,"presentingplayerstatechange",this.B);jAa(this,g.TT(a))},jAa=function(a,b){if(3==a.A.Ra()){var c={RECEIVER_NAME:a.A.yc("remote","currentReceiver").name};
c=g.V(b,128)?g.U("YTP_MDX_STATUS_ERROR_2",c):b.kb()||g.V(b,4)?g.U("YTP_MDX_STATUS_PLAYING_2",c):g.U("YTP_MDX_STATUS_CONNECTED_2",c);a.updateValue("statustext",c);a.o.show()}else a.o.hide()},m9=function(a,b){g.K_.call(this,g.U("YTP_MDX_TITLE"),0,a,b);
this.o=a;this.G={};this.P(a,"onMdxReceiversChange",this.J);this.P(a,"presentingplayerstatechange",this.J);this.J()},n9=function(a){g.uU.call(this,a);
g.sG({YTP_MDX_CAST_SELECTOR:"Cast...",YTP_MDX_MY_COMPUTER:"This computer",YTP_MDX_PLAYER_ERROR:"This video is not available for remote playback.",YTP_MDX_STATUS_CONNECTED_2:"Connected to $RECEIVER_NAME",YTP_MDX_STATUS_ERROR_2:"Error on $RECEIVER_NAME",YTP_MDX_STATUS_PLAYING_2:"Playing on $RECEIVER_NAME",YTP_MDX_TITLE:"Play on"});this.A={key:P6(),name:g.U("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.eO(64);this.I=0;if(!g.NL(g.W(this.g))){a=
this.g;var b=g.MT(a).F;b&&(b=b.A&&b.A.g)&&(b=new m9(a,b),g.N(this,b));b=new l9(a);g.N(this,b);g.oU(a,b.element,4)}},iAa=function(a,b,c){a.F=c;
a.g.T("presentingplayerstatechange",new g.rO(c,b))},o9=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)a9();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.fa(1),e=d.videoId;if(c||e){var f=a.g.Xf();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.gc(l).videoId}else k=[e];f=a.g.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.wj,index:Math.max(a.g.Dz(),0),currentTime:0==f?void 0:f}}else c=null;T8("Connecting to: "+g.ug(b));"cast-selector-receiver"==b.key?(V8(c||null),p8()?m8().setLaunchParams(c||null):k8("setLaunchParams called before ready.")):!c&&
d9()&&S8()==b.key?g.BF("yt-remote-connection-change",!0):(a9(),V8(c||null),c=R8().fe(),(c=R6(c,b.key))&&b9(c,1))}},zya={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},n7={"'":"\\'"},kAa={},Xxa={SV:"atp",s0:"ska",H_:"que",UZ:"mus",o0:"sus"};
K6.prototype.an=function(){var a=new K6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.A=this.A;a.o=this.o;a.g=this.g};
var X6,T6="",qya=Y6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",rya=Y6("loadCastFramework")||Y6("loadCastApplicationFramework"),$6=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],lAa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],pya=50<=mya()?lAa.concat($6):$6.concat(lAa);g.A(d7,g.M);g.h=d7.prototype;g.h.IH=function(a){this.B=arguments;this.g=!1;this.Aa?this.A=(0,g.H)()+this.tc:this.Aa=g.og(this.C,this.tc)};
g.h.stop=function(){this.Aa&&(g.pg(this.Aa),this.Aa=null);this.A=null;this.g=!1;this.B=[]};
g.h.pause=function(){++this.o};
g.h.resume=function(){this.o&&(--this.o,!this.o&&this.g&&(this.g=!1,this.D.apply(null,this.B)))};
g.h.V=function(){this.stop();d7.Y.V.call(this)};
g.h.JH=function(){this.A?(this.Aa=g.og(this.C,this.A-(0,g.H)()),this.A=null):(this.Aa=null,this.o?this.g=!0:(this.g=!1,this.D.apply(null,this.B)))};e7.prototype.stringify=function(a){return g.w.JSON.stringify(a,void 0)};
e7.prototype.parse=function(a){return g.w.JSON.parse(a,void 0)};g.h=f7.prototype;g.h.gi=null;g.h.vf=!1;g.h.mk=null;g.h.Du=null;g.h.Rj=null;g.h.mj=null;g.h.jh=null;g.h.Dh=null;g.h.Gi=null;g.h.Mc=null;g.h.Pl=0;g.h.wf=null;g.h.rp=null;g.h.kh=null;g.h.Rk=-1;g.h.ZB=!0;g.h.Qh=!1;g.h.ar=0;g.h.Io=null;var xya={},i7={};g.h=f7.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.CS=function(a){a=a.target;var b=this.Io;b&&3==g.fx(a)?b.kj():this.jD(a)};
g.h.jD=function(a){try{if(a==this.Mc)a:{var b=g.fx(this.Mc),c=this.Mc.o,d=this.Mc.getStatus();if(g.sd&&!g.qc(10)||g.ud&&!g.pc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.$e&&!g.jx(this.Mc))break a;this.Qh||4!=b||7==c||(8==c||0>=d?this.g.rf(3):this.g.rf(2));p7(this);var e=this.Mc.getStatus();this.Rk=e;var f=g.jx(this.Mc);(this.vf=200==e)?(4==b&&l7(this),this.D?(yya(this,b,f),g.$e&&this.vf&&3==b&&(this.B.R(this.o,"tick",this.vS),this.o.start())):k7(this,f),this.vf&&!this.Qh&&(4==b?this.g.yo(this):
(this.vf=!1,h7(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.kh=3,j7(13)):(this.kh=0,j7(14)),l7(this),m7(this))}}catch(k){this.Mc&&g.jx(this.Mc)}finally{}};
g.h.vS=function(){var a=g.fx(this.Mc),b=g.jx(this.Mc);this.Pl<b.length&&(p7(this),yya(this,a,b),this.vf&&4!=a&&h7(this))};
g.h.HR=function(a){o7((0,g.z)(this.GR,this,a),0)};
g.h.GR=function(a){this.Qh||(p7(this),k7(this,a),h7(this))};
g.h.qB=function(a){o7((0,g.z)(this.FR,this,a),0)};
g.h.FR=function(a){this.Qh||(l7(this),this.vf=a,this.g.yo(this),this.g.rf(4))};
g.h.cancel=function(){this.Qh=!0;l7(this)};
g.h.YR=function(){this.mk=null;var a=(0,g.H)();0<=a-this.Du?(2!=this.mj&&this.g.rf(3),l7(this),this.kh=2,j7(18),m7(this)):Bya(this,this.Du-a)};g.h=Eya.prototype;g.h.Xq=null;g.h.ne=null;g.h.Jo=!1;g.h.Fx=null;g.h.qn=null;g.h.Yq=null;g.h.Zq=null;g.h.Ke=null;g.h.zg=-1;g.h.Qk=null;g.h.rk=null;g.h.connect=function(a){this.Zq=a;a=r7(this.g,null,this.Zq);j7(3);this.Fx=(0,g.H)();var b=this.g.G;null!=b?(this.Qk=b[0],(this.rk=b[1])?(this.Ke=1,Fya(this)):(this.Ke=2,t7(this))):(J6(a,"MODE","init"),this.ne=new f7(this,void 0,void 0,void 0),this.ne.gi=this.Xq,g7(this.ne,a,!1,null,!0),this.Ke=0)};
g.h.RG=function(a){if(a)this.Ke=2,t7(this);else{j7(4);var b=this.g;b.ff=b.Yg.zg;A7(b,9)}a&&this.rf(2)};
g.h.xq=function(a){return this.g.xq(a)};
g.h.abort=function(){this.ne&&(this.ne.cancel(),this.ne=null);this.zg=-1};
g.h.Ex=function(){return!1};
g.h.jB=function(a,b){this.zg=a.Rk;if(0==this.Ke)if(b){try{var c=this.o.parse(b)}catch(d){c=this.g;c.ff=this.zg;A7(c,2);return}this.Qk=c[0];this.rk=c[1]}else c=this.g,c.ff=this.zg,A7(c,2);else if(2==this.Ke)if(this.Jo)j7(7),this.Yq=(0,g.H)();else if("11111"==b){if(j7(6),this.Jo=!0,this.qn=(0,g.H)(),c=this.qn-this.Fx,!g.sd||g.qc(10)||500>c)this.zg=200,this.ne.cancel(),j7(12),s7(this.g,this,!0)}else j7(8),this.qn=this.Yq=(0,g.H)(),this.Jo=!1};
g.h.yo=function(){this.zg=this.ne.Rk;if(this.ne.vf)0==this.Ke?this.rk?(this.Ke=1,Fya(this)):(this.Ke=2,t7(this)):2==this.Ke&&((!g.sd||g.qc(10)?!this.Jo:200>this.Yq-this.qn)?(j7(11),s7(this.g,this,!1)):(j7(12),s7(this.g,this,!0)));else{0==this.Ke?j7(9):2==this.Ke&&j7(10);var a=this.g;a.ff=this.zg;A7(a,2)}};
g.h.Jl=function(){return this.g.Jl()};
g.h.isActive=function(){return this.g.isActive()};
g.h.rf=function(a){this.g.rf(a)};g.h=u7.prototype;g.h.Dk=null;g.h.Md=null;g.h.qc=null;g.h.Wq=null;g.h.un=null;g.h.Uv=null;g.h.Jn=null;g.h.yl=0;g.h.DN=0;g.h.pd=null;g.h.ah=null;g.h.tg=null;g.h.Uh=null;g.h.Yg=null;g.h.qp=null;g.h.zj=-1;g.h.Ey=-1;g.h.ff=-1;g.h.ej=0;g.h.Vi=0;g.h.Sh=8;var B7=new g.zf;g.A(Hya,g.Ye);g.A(Iya,g.Ye);g.A(Jya,g.Ye);g.h=u7.prototype;g.h.connect=function(a,b,c,d,e){j7(0);this.Wq=b;this.Dk=c||{};d&&g.t(e)&&(this.Dk.OSID=d,this.Dk.OAID=e);this.D?(o7((0,g.z)(this.uw,this,a),100),Nya(this)):this.uw(a)};
g.h.uw=function(a){this.Yg=new Eya(this);this.Yg.Xq=null;this.Yg.o=this.C;this.Yg.connect(a)};
g.h.Ex=function(){return 0==this.g};
g.h.oB=function(a){this.ah=null;Qya(this,a)};
g.h.nB=function(){this.tg=null;this.qc=new f7(this,this.A,"rpc",this.F);this.qc.gi=null;this.qc.ar=0;var a=this.Uv.clone();g.tm(a,"RID","rpc");g.tm(a,"SID",this.A);g.tm(a,"CI",this.qp?"0":"1");g.tm(a,"AID",this.zj);v7(this,a);if(!g.sd||g.qc(10))g.tm(a,"TYPE","xmlhttp"),g7(this.qc,a,!0,this.Jn,!1);else{g.tm(a,"TYPE","html");var b=this.qc,c=!!this.Jn;b.mj=3;b.jh=I6(a.clone());Aya(b,c)}};
g.h.jB=function(a,b){if(0!=this.g&&(this.qc==a||this.Md==a))if(this.ff=a.Rk,this.Md==a&&3==this.g)if(7<this.Sh){try{var c=this.C.parse(b)}catch(f){c=null}if(g.xa(c)&&3==c.length)if(0==c[0])a:{if(!this.tg){if(this.qc)if(this.qc.Rj+3E3<this.Md.Rj)x7(this),this.qc.cancel(),this.qc=null;else break a;z7(this);j7(19)}}else this.Ey=c[1],0<this.Ey-this.zj&&37500>c[2]&&this.qp&&0==this.Vi&&!this.Uh&&(this.Uh=o7((0,g.z)(this.fO,this),6E3));else A7(this,11)}else b!=kAa.VW.g&&A7(this,11);else if(this.qc==a&&
x7(this),!g.E(b)){c=this.C.parse(b);g.xa(c);for(var d=0;d<c.length;d++){var e=c[d];this.zj=e[0];e=e[1];2==this.g?"c"==e[0]?(this.A=e[1],this.Jn=e[2],e=e[3],null!=e?this.Sh=e:this.Sh=6,this.g=3,this.pd&&this.pd.hw(),this.Uv=r7(this,this.Jl()?this.Jn:null,this.Wq),Rya(this)):"stop"==e[0]&&A7(this,7):3==this.g&&("stop"==e[0]?A7(this,7):"noop"!=e[0]&&this.pd&&this.pd.gw(e),this.Vi=0)}}};
g.h.fO=function(){null!=this.Uh&&(this.Uh=null,this.qc.cancel(),this.qc=null,z7(this),j7(20))};
g.h.yo=function(a){if(this.qc==a){x7(this);this.qc=null;var b=2}else if(this.Md==a)this.Md=null,b=1;else return;this.ff=a.Rk;if(0!=this.g)if(a.vf)1==b?(b=(0,g.H)()-a.Rj,B7.dispatchEvent(new Iya(B7,a.Gi?a.Gi.length:0,b,this.ej)),w7(this),this.B.length=0):Rya(this);else{var c=a.kh,d;if(!(d=3==c||7==c||0==c&&0<this.ff)){if(d=1==b)this.Md||this.ah||1==this.g||2<=this.ej?d=!1:(this.ah=o7((0,g.z)(this.oB,this,a),Sya(this,this.ej)),this.ej++,d=!0);d=!(d||2==b&&z7(this))}if(d)switch(c){case 1:A7(this,5);
break;case 4:A7(this,10);break;case 3:A7(this,6);break;case 7:A7(this,12);break;default:A7(this,2)}}};
g.h.pH=function(a){if(!g.D(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.AT=function(a){a?j7(2):(j7(1),Tya(this,8))};
g.h.xq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.$w;a.G=!1;return a};
g.h.isActive=function(){return!!this.pd&&this.pd.isActive(this)};
g.h.rf=function(a){B7.dispatchEvent(new Jya(B7,a))};
g.h.Jl=function(){return!(!g.sd||g.qc(10))};
g.h=Uya.prototype;g.h.hw=function(){};
g.h.gw=function(){};
g.h.ew=function(){};
g.h.kq=function(){};
g.h.gx=function(){return{}};
g.h.isActive=function(){return!0};g.A(D7,g.M);D7.prototype.A=function(){500<this.tc&&24E4>2*this.tc&&(this.tc*=2);this.B();this.o&&this.start()};
D7.prototype.start=function(){g.Ot(this.g,this.tc);this.o=(0,g.H)()+this.tc};
D7.prototype.stop=function(){this.g.stop();this.o=0};
D7.prototype.isActive=function(){return this.g.isActive()};g.A(E7,Uya);g.h=E7.prototype;g.h.subscribe=function(a,b,c){return this.A.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.A.unsubscribe(a,b,c)};
g.h.Gd=function(a){return this.A.Gd(a)};
g.h.T=function(a,b){return this.A.T.apply(this.A,arguments)};
g.h.dispose=function(){this.J||(this.J=!0,g.We(this.A),Xya(this),g.We(this.o),this.o=null)};
g.h.ia=function(){return this.J};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.I="";this.o.stop();this.C=a||null;this.B=b||0;a=this.L+"/test";b=this.L+"/bind";var d=new u7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.N),e=this.g;e&&(e.pd=null);d.pd=this;this.g=d;e?this.g.connect(a,b,this.D,e.A,e.zj):c?this.g.connect(a,b,this.D,c.sessionId,c.arrayId):this.g.connect(a,b,this.D)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.dc(c,b);this.o.isActive()||2==(this.g?this.g.g:0)?this.F.push(c):F7(this)&&Oya(this.g,c)};
g.h.hw=function(){C7(this.o);this.C=null;this.B=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)Oya(this.g,a[b])}this.T("handlerOpened")};
g.h.ew=function(a){var b=2==a&&401==this.g.ff;if(4!=a&&!b){if(6==a||410==this.g.ff)b=this.o,b.g.stop(),b.tc=500;this.o.start()}this.T("handlerError",a)};
g.h.kq=function(a){if(!this.o.isActive())this.T("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.F.push(d)}};
g.h.gx=function(){var a={v:2};this.I&&(a.gsessionid=this.I);0!=this.B&&(a.ui=""+this.B);0!=this.G&&(a.ui=""+this.G);this.C&&g.dc(a,this.C);return a};
g.h.gw=function(a){"S"==a[0]?this.I=a[1]:"gracefulReconnect"==a[0]?(C7(this.o),this.o.start(),Mya(this.g)):this.T("handlerMessage",new Vya(a[0],a[1]))};
g.h.gU=function(){this.o.isActive();var a=this.g,b=0;a.qc&&b++;a.Md&&b++;0!=b?this.o.start():this.connect(this.C,this.B)};G7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
G7.prototype.A=function(a,b){a(Error("Request error: "+b.status))};
G7.prototype.C=function(a){a(Error("request timed out"))};var eza=(0,g.H)(),J7=null,M7=Array(50),L7=-1,N7=!1;g.A(O7,g.lF);O7.prototype.fe=function(){return this.g};
O7.prototype.contains=function(a){return!!Q6(this.g,a)};
O7.prototype.get=function(a){return a?R6(this.g,a):null};
O7.prototype.info=function(a){K7(this.F,a)};g.A(P7,g.lF);var mAa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=P7.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.Aa)&&this.nD()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.Aa)||(g.FD(this.Aa),this.Aa=window.NaN)};
g.h.V=function(){this.stop();P7.Y.V.call(this)};
g.h.nD=function(){this.Aa=window.NaN;this.g=g.TD(H7(this.D,"/pairing/get_screen"),{method:"POST",Nb:{pairing_code:this.C},timeout:5E3,Jb:(0,g.z)(this.iU,this),onError:(0,g.z)(this.hU,this),sd:(0,g.z)(this.jU,this)})};
g.h.iU=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.A;c.name=this.B;this.T("pairingComplete",new L6(c))};
g.h.hU=function(a){this.g=null;a.status&&404==a.status?this.o>=mAa.length?this.T("pairingFailed",Error("DIAL polling timed out")):(a=mAa[this.o],this.Aa=g.DD((0,g.z)(this.nD,this),a),this.o++):this.T("pairingFailed",Error("Server error "+a.status))};
g.h.jU=function(){this.g=null;this.T("pairingFailed",Error("Server not responding"))};g.A(R7,O7);g.h=R7.prototype;g.h.start=function(){Q7(this)&&this.T("screenChange");!g.lG("yt-remote-lounge-token-expiration")&&iza(this);g.FD(this.o);this.o=g.DD((0,g.z)(this.start,this),1E4)};
g.h.add=function(a,b){Q7(this);fza(this,a);S7(this,!1);this.T("screenChange");b(a);a.token||iza(this)};
g.h.remove=function(a,b){var c=Q7(this);hza(this,a)&&(S7(this,!1),c=!0);b(a);c&&this.T("screenChange")};
g.h.lp=function(a,b,c,d){var e=Q7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,S7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.T("screenChange")};
g.h.V=function(){g.FD(this.o);R7.Y.V.call(this)};
g.h.VH=function(a){Q7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}S7(this,!b);b&&K7(this.F,"Missed "+b+" lounge tokens.")};
g.h.UH=function(a){K7(this.F,"Requesting lounge tokens failed: "+a)};g.A(U7,g.lF);g.h=U7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.lG("yt-remote-fast-check-period")||"0",10);(this.B=(0,g.H)()-144E5<a?0:a)?W7(this):(this.B=(0,g.H)()+3E5,g.kG("yt-remote-fast-check-period",this.B),this.Nt())};
g.h.isEmpty=function(){return g.Wb(this.g)};
g.h.update=function(){T7("Updating availability on schedule.");var a=this.D(),b=g.Lb(this.g,function(b,d){return b&&!!R6(a,d)},this);
V7(this,b)};
g.h.V=function(){g.FD(this.A);this.A=window.NaN;this.o&&(this.o.abort(),this.o=null);U7.Y.V.call(this)};
g.h.Nt=function(){g.FD(this.A);this.A=window.NaN;this.o&&this.o.abort();var a=lza(this);if(g.Ob(a)){var b=H7(this.C,"/pairing/get_screen_availability");this.o=I7(this.C,b,{lounge_token:g.Qb(a).join(",")},(0,g.z)(this.hR,this,a),(0,g.z)(this.gR,this))}else V7(this,{}),W7(this)};
g.h.hR=function(a,b){this.o=null;var c=g.Qb(lza(this));if(g.gb(c,g.Qb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;V7(this,d);W7(this)}else this.Zb("Changing Screen set during request."),this.Nt()};
g.h.gR=function(a){this.Zb("Screen availability failed: "+a);this.o=null;W7(this)};
g.h.Zb=function(a){K7("OnlineScreenService",a)};g.A(X7,O7);g.h=X7.prototype;g.h.start=function(){this.A.start();this.o.start();this.g.length&&(this.T("screenChange"),this.o.isEmpty()||this.T("onlineScreenChange"))};
g.h.add=function(a,b,c){this.A.add(a,b,c)};
g.h.remove=function(a,b,c){this.A.remove(a,b,c);this.o.update()};
g.h.lp=function(a,b,c,d){this.A.contains(a)?this.A.lp(a,b,c,d):(a="Updating name of unknown screen: "+a.name,K7(this.F,a),d(Error(a)))};
g.h.fe=function(a){return a?this.g:g.Va(this.g,(0,g.Gd)(this.B,function(a){return!this.contains(a)},this))};
g.h.oD=function(){return(0,g.Gd)(this.fe(!0),function(a){return!!this.o.g[a.id]},this)};
g.h.pD=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new P7(this.D,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(a){g.We(f);d(Y7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.We(f);e(a)});
f.start();return(0,g.z)(f.stop,f)};
g.h.lU=function(a,b,c,d){g.TD(H7(this.D,"/pairing/get_screen"),{method:"POST",Nb:{pairing_code:a},timeout:5E3,Jb:(0,g.z)(function(a,d){var e=new L6(d.screen||{});if(!e.name||pza(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);pza(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(Y7(this,e))},this),
onError:(0,g.z)(function(a){d(Error("pairing request failed: "+a.status))},this),
sd:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.h.V=function(){g.We(this.A);g.We(this.o);X7.Y.V.call(this)};
g.h.lI=function(){qza(this);this.T("screenChange");this.o.update()};
X7.prototype.dispose=X7.prototype.dispose;g.A($7,g.lF);g.h=$7.prototype;g.h.zo=function(a){this.A=a;this.T("sessionScreen",this.A)};
g.h.je=function(a){this.ia()||(a&&a8(this,""+a),this.A=null,this.T("sessionScreen",null))};
g.h.info=function(a){K7(this.N,a)};
g.h.rD=function(){return null};
g.h.Ut=function(a){var b=this.o;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){a8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.V=function(){this.Ut("");$7.Y.V.call(this)};g.A(b8,$7);g.h=b8.prototype;g.h.Tt=function(a){if(this.g){if(this.g==a)return;a8(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.D);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.C)}this.g=a;this.g.addUpdateListener(this.D);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.C);sza(this)};
g.h.Aj=function(a){this.info("launchWithParams no-op for Cast: "+g.ug(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.z)(function(){this.je()},this),(0,g.z)(function(){this.je(Error("Failed to stop receiver app."))},this)):this.je(Error("Stopping cast device witout session."))};
g.h.Ut=g.y;g.h.V=function(){this.info("disposeInternal");g.FD(this.B);this.B=0;this.g&&(this.g.removeUpdateListener(this.D),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.C));this.g=null;b8.Y.V.call(this)};
g.h.iS=function(a,b){if(!this.ia())if(b){var c=g.Uw(b);if(c){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.ug(c));switch(d){case "mdxSessionStatus":rza(this,c.screenId);break;default:a8(this,"Unknown youtube message: "+d)}}else a8(this,"Unable to parse message.")}else a8(this,"No data in message.")};
g.h.xx=function(a,b,c,d){oza(this.I,this.o.label,a,this.o.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(a8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.DD((0,g.z)(this.xx,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.rD=function(){return this.g};
g.h.mU=function(a){this.ia()||a||(a8(this,"Cast session died."),this.je())};g.A(c8,$7);g.h=c8.prototype;g.h.Tt=function(a){this.B=a;this.B.addUpdateListener(this.L)};
g.h.Aj=function(a){this.C=a;this.F()};
g.h.stop=function(){this.g();this.g=g.y;g.FD(this.D);this.B?this.B.stop((0,g.z)(this.je,this,null),(0,g.z)(this.je,this,"Failed to stop DIAL device.")):this.je()};
g.h.V=function(){this.g();this.g=g.y;g.FD(this.D);this.B&&this.B.removeUpdateListener(this.L);this.B=null;c8.Y.V.call(this)};
g.h.pU=function(a){this.ia()||a||(a8(this,"DIAL session died."),this.g(),this.g=g.y,this.je())};
g.h.Mr=function(a){this.J=P6();if(this.C){var b=new window.chrome.cast.DialLaunchResponse(!0,uza(this));a(b);tza(this)}else this.F=(0,g.z)(function(){g.FD(this.D);this.F=g.y;this.D=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,uza(this));a(b);tza(this)},this),this.D=g.DD((0,g.z)(function(){this.F()},this),100)};
g.h.CJ=function(a,b,c){oza(this.I,this.G.receiver.label,a,this.o.friendlyName,(0,g.z)(function(a){a&&a.token?(this.zo(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.Mr(b,c)},this),(0,g.z)(function(a){a8(this,"Failed to get DIAL screen: "+a);
this.Mr(b,c)},this))};g.A(d8,$7);d8.prototype.stop=function(){this.je()};
d8.prototype.Tt=g.y;d8.prototype.Aj=function(){g.FD(this.g);this.g=window.NaN;var a=R6(this.I.fe(),this.o.label);a?this.zo(a):this.je(Error("No such screen"))};
d8.prototype.V=function(){g.FD(this.g);this.g=window.NaN;d8.Y.V.call(this)};g.A(e8,g.lF);g.h=e8.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.F);this.G||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.z)(this.kB,this),(0,g.z)(this.SQ,this),d,e);c.customDialLaunchCallback=(0,g.z)(this.QO,this);window.chrome.cast.initialize(c,
(0,g.z)(function(){this.ia()||(window.chrome.cast.addReceiverActionListener(this.B),bza(),this.o.subscribe("onlineScreenChange",(0,g.z)(this.qD,this)),this.A=wza(this),window.chrome.cast.setCustomReceivers(this.A,g.y,(0,g.z)(function(a){this.Zb("Failed to set initial custom receivers: "+g.ug(a))},this)),this.T("yt-remote-cast2-availability-change",g8(this)),b(!0))},this),(0,g.z)(function(a){this.Zb("Failed to initialize API: "+g.ug(a));
b(!1)},this))};
g.h.iT=function(a,b){f8("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.A;if(!a||c&&c.id!=a)f8("Unsetting old screen status: "+this.g.o.friendlyName),h8(this,null)}if(a&&b){if(!this.g){c=R6(this.o.fe(),a);if(!c){f8("setConnectedScreenStatus: Unknown screen.");return}var d=vza(this,c);d||(f8("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.A.push(d),
window.chrome.cast.setCustomReceivers(this.A,g.y,(0,g.z)(function(a){this.Zb("Failed to set initial custom receivers: "+g.ug(a))},this)));
f8("setConnectedScreenStatus: new active receiver: "+d.friendlyName);h8(this,new d8(this.o,d),!0)}this.g.Ut(b)}else f8("setConnectedScreenStatus: no screen.")};
g.h.jT=function(a){this.ia()?this.Zb("Setting connection data on disposed cast v2"):this.g?this.g.Aj(a):this.Zb("Setting connection data without a session")};
g.h.oU=function(){this.ia()?this.Zb("Stopping session on disposed cast v2"):this.g?(this.g.stop(),h8(this,null)):f8("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.z)(this.kB,this),(0,g.z)(this.lR,this))};
g.h.V=function(){this.o.unsubscribe("onlineScreenChange",(0,g.z)(this.qD,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.B);g.Ta(g.x("yt.mdx.remote.debug.handlers_")||[],Zya);g.We(this.g);e8.Y.V.call(this)};
g.h.Zb=function(a){K7("Controller",a)};
g.h.lB=function(a,b){this.g==a&&(b||h8(this,null),this.T("yt-remote-cast2-session-change",b))};
g.h.OQ=function(a,b){if(!this.ia())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),f8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.o.label!=a.label)f8("onReceiverAction_: Stopping active receiver: "+this.g.o.friendlyName),this.g.stop();else{f8("onReceiverAction_: Casting to active receiver.");this.g.A&&this.T("yt-remote-cast2-session-change",this.g.A);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:h8(this,
new d8(this.o,a));break;case window.chrome.cast.ReceiverType.DIAL:h8(this,new c8(this.o,a,this.D));break;case window.chrome.cast.ReceiverType.CAST:h8(this,new b8(this.o,a));break;default:this.Zb("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.o.label==a.label?this.g.stop():this.Zb("Stopping receiver w/o session: "+a.friendlyName)}else this.Zb("onReceiverAction_ called without receiver.")};
g.h.QO=function(a){if(this.ia())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.Zb("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.o:null;if(!c||c.label!=b.label)return this.Zb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.A)return f8("Reselecting dial screen."),
this.T("yt-remote-cast2-session-change",this.g.A),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.Zb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);h8(this,new c8(this.o,b,this.D))}b=this.g;b.G=a;return b.G.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.z)(b.CJ,b,(b.G.extraData||{}).screenId||null)):new window.Promise((0,g.z)(b.Mr,b))};
g.h.kB=function(a){if(!this.ia()){f8("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)f8("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),h8(this,new b8(this.o,b),!0);else{this.Zb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.o,d=R6(this.o.fe(),c.label);
d&&M6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(f8("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.We(this.g),this.g=new b8(this.o,b),this.g.subscribe("sessionScreen",(0,g.z)(this.lB,this,this.g)),this.g.Aj(null));this.g.Tt(a)}}};
g.h.nU=function(){return this.g?this.g.rD():null};
g.h.lR=function(a){this.ia()||(this.Zb("Failed to estabilish a session: "+g.ug(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&h8(this,null))};
g.h.SQ=function(a){f8("Receiver availability updated: "+a);if(!this.ia()){var b=g8(this);this.C=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;g8(this)!=b&&this.T("yt-remote-cast2-availability-change",g8(this))}};
g.h.qD=function(){this.ia()||(this.A=wza(this),f8("Updating custom receivers: "+g.ug(this.A)),window.chrome.cast.setCustomReceivers(this.A,g.y,(0,g.z)(function(){this.Zb("Failed to set custom receivers.")},this)),this.T("yt-remote-cast2-availability-change",g8(this)))};
e8.prototype.setLaunchParams=e8.prototype.jT;e8.prototype.setConnectedScreenStatus=e8.prototype.iT;e8.prototype.stopSession=e8.prototype.oU;e8.prototype.getCastSession=e8.prototype.nU;e8.prototype.requestSession=e8.prototype.requestSession;e8.prototype.init=e8.prototype.init;e8.prototype.dispose=e8.prototype.dispose;var n8=[];s8.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";t8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.g=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.Lf=a.hasPrevious,this.hasNext=a.hasNext,this.G=a.playerTime,this.F=a.playerTimeAt,this.C=a.seekableStart,this.A=a.seekableEnd,this.I=a.duration,this.J=a.loadedTime,this.B=a.liveIngestionTime,this.D=!(0,window.isNaN)(this.B))};
s8.prototype.kb=function(){return 1==this.g};
s8.prototype.getDuration=function(){return this.D?this.I+u8(this):this.I};
s8.prototype.clone=function(){return new s8(y8(this))};g.A(A8,g.lF);g.h=A8.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,G8(this,"play")):F8(this,"play"),E8(this,1,w8(B8(this))),this.T("remotePlayerChange")):C8(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,G8(this,"pause")):F8(this,"pause"),E8(this,2,w8(B8(this))),this.T("remotePlayerChange")):C8(this,this.pause)};
g.h.mD=function(a){if(1==this.g){if(this.o){var b=B8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.kb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,G8(this,"seekTo",{newTime:a}))}else F8(this,"seekTo",{newTime:a});E8(this,3,a);this.T("remotePlayerChange")}else C8(this,g.Da(this.mD,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,G8(this,"stopVideo")):F8(this,"stopVideo");var a=B8(this);a.index=-1;a.videoId="";t8(a);D8(this,a);this.T("remotePlayerChange")}else C8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=B8(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){K7("CP","set receiver volume: "+d)},this),(0,g.z)(function(){this.Zb("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){K7("CP","set receiver muted: "+b)},this),(0,g.z)(function(){this.Zb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);F8(this,"setVolume",e)}c.muted=b;c.volume=a;D8(this,c)}else C8(this,g.Da(this.setVolume,a,b))};
g.h.qC=function(a,b){if(1==this.g){var c=B8(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.ug(b.style),g.dc(d,c.o));F8(this,"setSubtitlesTrack",d);D8(this,c)}else C8(this,g.Da(this.qC,a,b))};
g.h.Iu=function(a,b){if(1==this.g){F8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Qc.id});var c=B8(this);c.audioTrackId=b.Qc.id;D8(this,c)}else C8(this,g.Da(this.Iu,a,b))};
g.h.lD=function(a,b){if(1==this.g){if(a&&b){var c=B8(this);x8(c,a,b);D8(this,c)}F8(this,"previous")}else C8(this,g.Da(this.lD,a,b))};
g.h.kD=function(a,b){if(1==this.g){if(a&&b){var c=B8(this);x8(c,a,b);D8(this,c)}F8(this,"next")}else C8(this,g.Da(this.kD,a,b))};
g.h.Kw=function(){1==this.g?F8(this,"dismissAutoplay"):C8(this,this.Kw)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.T("proxyStateChange",a,this.g)}A8.Y.dispose.call(this)};
g.h.V=function(){Iza(this);this.B=null;this.C.clear();z8(this,null);A8.Y.V.call(this)};
g.h.Ju=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.T("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.bC(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.KQ=function(a,b){this.T(a,b)};
g.h.mO=function(a){if(!a)this.Al(null),z8(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=B8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)K7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,D8(this,b)}};
g.h.Al=function(a){K7("CP","Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),Jza(this),this.T("remotePlayerChange")};
g.h.lO=function(a){a?(Jza(this),this.T("remotePlayerChange")):this.Al(null)};
g.h.zO=function(){var a=Fza();a&&z8(this,a)};
g.h.Zb=function(a){K7("CP",a)};g.A(H8,g.lF);g.h=H8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime;g.t(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.t(k)&&(l.currentIndex=k);c&&(this.fb.listId=c);this.fb.videoId=d;this.fb.index=k||0;this.fb.state=3;v8(this.fb,m);this.B="UNSUPPORTED";I8("Connecting with setPlaylist and params: "+g.ug(l));this.g.connect({method:"setPlaylist",params:g.ug(l)},a,dya())}else I8("Connecting without params"),
this.g.connect({},a,dya());Lza(this)};
g.h.dispose=function(){this.ia()||(this.T("beforeDispose"),J8(this,3));H8.Y.dispose.call(this)};
g.h.V=function(){K8(this);M8(this);L8(this);g.FD(this.I);this.I=window.NaN;g.FD(this.J);this.J=window.NaN;this.A=null;g.XE(this.W);this.W.length=0;this.g.dispose();H8.Y.V.call(this);this.B=this.F=this.o=this.fb=this.g=null};
g.h.MH=function(){this.D(2)};
g.h.qO=function(){I8("Channel opened");this.O&&(this.O=!1,L8(this),this.N=g.DD((0,g.z)(function(){I8("Timing out waiting for a screen.");this.D(1)},this),15E3));
hya(Wya(this.g),this.aa)};
g.h.nO=function(){I8("Channel closed");(0,window.isNaN)(this.C)?W6(!0):W6();this.dispose()};
g.h.oO=function(a){W6();(0,window.isNaN)(this.G())?(I8("Channel error: "+a+" without reconnection"),this.dispose()):(this.O=!0,I8("Channel error: "+a+" with reconnection in "+this.G()+" ms"),J8(this,2))};
g.h.pO=function(a){a.params?I8("Received: action="+a.action+", params="+g.ug(a.params)):I8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.Uw(a.params.devices);this.o=(0,g.J)(a,function(a){return new K6(a)});
a=!!g.Ja(this.o,function(a){return"LOUNGE_SCREEN"==a.type});
Oza(this,a);break;case "loungeScreenDisconnected":g.Ua(this.o,function(a){return"LOUNGE_SCREEN"==a.type});
Oza(this,!1);break;case "remoteConnected":var b=new K6(g.Uw(a.params.device));g.Ja(this.o,function(a){return b?a.id==b.id:!1})||g.Ra(this.o,b);
break;case "remoteDisconnected":b=new K6(g.Uw(a.params.device));g.Ua(this.o,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":Qza(this,a);break;case "nowPlaying":Sza(this,a);break;case "onStateChange":Rza(this,a);break;case "onAdStateChange":Tza(this,a);break;case "onVolumeChanged":Uza(this,a);break;case "onSubtitlesTrackChanged":Pza(this,a);break;case "nowAutoplaying":Vza(this,a);break;case "autoplayDismissed":this.T("autoplayDismissed");break;case "autoplayUpNext":this.F=a.params.videoId||null;this.T("autoplayUpNext",this.F);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.T("autoplayModeChange",this.B);"DISABLED"==this.B&&this.T("autoplayDismissed");break;case "onHasPreviousNextChanged":Wza(this,a);break;case "requestAssistedSignIn":this.T("assistedSignInRequested",a.params.authCode);break;default:I8("Unrecognized action: "+a.action)}};
g.h.RS=function(){if(this.A){var a=this.A;this.A=null;this.fb.videoId!=a&&N8(this,"getNowPlaying")}};
H8.prototype.subscribe=H8.prototype.subscribe;H8.prototype.unsubscribeByKey=H8.prototype.Gd;H8.prototype.ea=function(){var a=3;this.ia()||(a=0,(0,window.isNaN)(this.G())?F7(this.g)&&(0,window.isNaN)(this.C)&&(a=1):a=2);return a};
H8.prototype.getProxyState=H8.prototype.ea;H8.prototype.D=function(a){I8("Disconnecting with "+a);K8(this);this.T("beforeDisconnect",a);1==a&&W6();Xya(this.g,a);this.dispose()};
H8.prototype.disconnect=H8.prototype.D;H8.prototype.da=function(){var a=this.fb;this.A&&(a=this.fb.clone(),x8(a,this.A,a.index));return y8(a)};
H8.prototype.getPlayerContextData=H8.prototype.da;
H8.prototype.la=function(a){var b=new s8(a);b.videoId&&b.videoId!=this.fb.videoId&&(this.A=b.videoId,g.FD(this.I),this.I=g.DD((0,g.z)(this.RS,this),5E3));var c=[];this.fb.listId==b.listId&&this.fb.videoId==b.videoId&&this.fb.index==b.index||c.push("remoteQueueChange");this.fb.g==b.g&&this.fb.volume==b.volume&&this.fb.muted==b.muted&&w8(this.fb)==w8(b)&&g.ug(this.fb.o)==g.ug(b.o)||c.push("remotePlayerChange");this.fb.reset(a);(0,g.C)(c,function(a){this.T(a)},this)};
H8.prototype.setPlayerContextData=H8.prototype.la;H8.prototype.X=function(){var a=this.g.D.id,b=g.Ja(this.o,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
H8.prototype.getOtherConnectedRemoteId=H8.prototype.X;H8.prototype.G=function(){var a=this.g;return a.o.isActive()?a.o.o-(0,g.H)():window.NaN};
H8.prototype.getReconnectTimeout=H8.prototype.G;H8.prototype.Z=function(){return this.B||"UNSUPPORTED"};
H8.prototype.getAutoplayMode=H8.prototype.Z;H8.prototype.ca=function(){return this.F||""};
H8.prototype.getAutoplayVideoId=H8.prototype.ca;H8.prototype.pa=function(){if(!(0,window.isNaN)(this.G())){var a=this.g.o;g.Pt(a.g);a.start()}};
H8.prototype.reconnect=H8.prototype.pa;H8.prototype.ga=function(a,b){N8(this,a,b);Nza(this)};
H8.prototype.sendMessage=H8.prototype.ga;g.A(O8,O7);g.h=O8.prototype;g.h.fe=function(a){return this.cd.$_gs(a)};
g.h.contains=function(a){return!!this.cd.$_c(a)};
g.h.get=function(a){return this.cd.$_g(a)};
g.h.start=function(){this.cd.$_st()};
g.h.add=function(a,b,c){this.cd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.cd.$_r(a,b,c)};
g.h.lp=function(a,b,c,d){this.cd.$_un(a,b,c,d)};
g.h.V=function(){for(var a=0,b=this.o.length;a<b;++a)this.cd.$_ubk(this.o[a]);this.o.length=0;this.cd=null;O8.Y.V.call(this)};
g.h.kU=function(){this.T("screenChange")};
g.h.lQ=function(){this.T("onlineScreenChange")};
X7.prototype.$_st=X7.prototype.start;X7.prototype.$_gspc=X7.prototype.lU;X7.prototype.$_gsppc=X7.prototype.pD;X7.prototype.$_c=X7.prototype.contains;X7.prototype.$_g=X7.prototype.get;X7.prototype.$_a=X7.prototype.add;X7.prototype.$_un=X7.prototype.lp;X7.prototype.$_r=X7.prototype.remove;X7.prototype.$_gs=X7.prototype.fe;X7.prototype.$_gos=X7.prototype.oD;X7.prototype.$_s=X7.prototype.subscribe;X7.prototype.$_ubk=X7.prototype.Gd;var P8=null,Q8=null,e9=null,U8=[];g.p(f9,g.M);g.h=f9.prototype;
g.h.V=function(){g.M.prototype.V.call(this);this.B.stop();this.C.stop();this.L.stop();this.O();this.g.unsubscribe("proxyStateChange",this.iB,this);this.g.unsubscribe("remotePlayerChange",this.Cl,this);this.g.unsubscribe("remoteQueueChange",this.Ao,this);this.g.unsubscribe("autoplayUpNext",this.EA,this);this.g.unsubscribe("previousNextChange",this.fB,this);this.g.unsubscribe("nowAutoplaying",this.XA,this);this.g.unsubscribe("autoplayDismissed",this.DA,this);this.g=this.G=null};
g.h.uz=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(i9(this)){if(1081!=B8(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":B8(this.g).kb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.J.kj(c[0],c[1]);break;case "control_subtitles_set_track":j9(this,c[0]);break;case "control_set_audio_track":c=c[0],i9(this)&&this.g.Iu(this.o.fa(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.o.getCurrentTime();k9(this,0==c?void 0:c);break;case "control_seek":k9(this,c[0]);break;case "control_subtitles_set_track":j9(this,c[0]);break;case "control_set_audio_track":c=c[0],i9(this)&&this.g.Iu(this.o.fa(1).videoId,c)}};
g.h.kO=function(a){this.L.IH(a)};
g.h.JT=function(a){this.uz("control_subtitles_set_track",g.Wb(a)?null:a)};
g.h.DC=function(){var a=this.o.yc("captions","track");g.Wb(a)||j9(this,a)};
g.h.VA=function(a){if(i9(this)){this.g.unsubscribe("remotePlayerChange",this.Cl,this);var b=Math.round(a.volume);a=!!a.muted;var c=B8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.N.start();this.g.subscribe("remotePlayerChange",this.Cl,this)}};
g.h.EP=function(){g.Wb(this.D)||hAa(this,this.D);this.F=!1};
g.h.iB=function(a,b){this.C.stop();2==b&&this.AC()};
g.h.Cl=function(){if(i9(this)){this.B.stop();var a=B8(this.g);switch(a.g){case 1081:case 1:h9(this,new g.eO(8));this.zC();break;case 1085:case 3:h9(this,new g.eO(9));break;case 1083:case 0:h9(this,new g.eO(2));this.J.stop();g9(this,this.o.fa().lengthSeconds);break;case 1084:h9(this,new g.eO(4));break;case 2:h9(this,new g.eO(4));g9(this,w8(a));break;case -1:h9(this,new g.eO(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.U("YTP_MDX_PLAYER_ERROR")},h9(this,new g.eO(128,a))}a=B8(this.g).o;
var b=this.D;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.D=a,hAa(this,a));a=B8(this.g);-1==a.volume||Math.round(this.o.getVolume())==a.volume&&this.o.isMuted()==a.muted||this.N.isActive()||this.dD()}else gAa(this)};
g.h.fB=function(){this.o.T("mdxpreviousnextchange")};
g.h.Ao=function(){i9(this)||gAa(this)};
g.h.QG=function(){this.g.Kw()};
g.h.EA=function(a){a&&(a=g.TD("/watch_queue_ajax",{method:"GET",Yc:{action_get_watch_queue_item:1,video_id:a},Jb:(0,g.z)(this.KR,this)}))&&(this.O=(0,g.z)(a.abort,a))};
g.h.KR=function(a,b){var c=new g.fN({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.o.T("mdxautoplayupnext",c)};
g.h.XA=function(a){(0,window.isNaN)(a)||this.o.T("mdxnowautoplaying",a)};
g.h.DA=function(){this.o.T("mdxautoplaycanceled")};
g.h.kL=function(a,b){-1==B8(this.g).g?k9(this,a):b&&this.g.mD(a)};
g.h.dD=function(){if(i9(this)){var a=B8(this.g);this.A.Ea(this.W);a.muted?this.o.mute():this.o.Yf();this.o.setVolume(a.volume);this.W=this.A.P(this.o,"onVolumeChange",this.VA)}};
g.h.zC=function(){this.B.stop();if(!this.g.ia()){var a=B8(this.g);a.kb()&&h9(this,new g.eO(8));g9(this,w8(a));this.B.start()}};
g.h.AC=function(){this.C.stop();this.B.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.C.start()};g.p(l9,g.X);l9.prototype.B=function(a){jAa(this,a.state)};g.p(m9,g.K_);m9.prototype.J=function(){var a=this.o.yc("remote","receivers");a&&1<a.length&&!this.o.yc("remote","quickCast")?(this.G=g.jb(a,this.C,this),g.L_(this,(0,g.J)(a,this.C)),a=this.o.yc("remote","currentReceiver"),this.qf(this.C(a)),this.enable(!0)):this.enable(!1)};
m9.prototype.C=function(a){return a.key};
m9.prototype.pf=function(a){return"cast-selector-receiver"==a?g.U("YTP_MDX_CAST_SELECTOR"):this.G[a].name};
m9.prototype.rd=function(a){g.K_.prototype.rd.call(this,a);this.o.Ed("remote","currentReceiver",this.G[a]);this.B.Ob()};g.p(n9,g.uU);g.h=n9.prototype;g.h.create=function(){aAa(g.CL(g.W(this.g)));this.D.push(g.xF("yt-remote-before-disconnect",this.gO,this));this.D.push(g.xF("yt-remote-connection-change",this.TQ,this));this.D.push(g.xF("yt-remote-receiver-availability-change",this.gB,this));this.D.push(g.xF("yt-remote-auto-connect",this.RQ,this));this.D.push(g.xF("yt-remote-receiver-resumed",this.QQ,this));this.gB()};
g.h.load=function(){this.g.Ms();g.uU.prototype.load.call(this);this.C=new f9(this,this.g,this.o);var a=(a=fAa())?a.currentTime:0;var b=d9()?new A8(Z8(),void 0):null;0==a&&b&&(a=w8(B8(b)));0!=a&&(this.I=a||0,this.g.T("progresssync",a,void 0));iAa(this,this.F,this.F);g.G0(this.g.app,6)};
g.h.unload=function(){this.g.T("mdxautoplaycanceled");this.B=this.A;g.Xe(this.C,this.o);this.o=this.C=null;g.uU.prototype.unload.call(this);g.G0(this.g.app,5)};
g.h.V=function(){g.yF(this.D);g.uU.prototype.V.call(this)};
g.h.kl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.uz.apply(this.C,[].concat([a],g.pa(c)))};
g.h.EH=function(){return this.loaded?this.C.suggestion:null};
g.h.Lf=function(){return this.o?B8(this.o).Lf:!1};
g.h.hasNext=function(){return this.o?B8(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.I};
g.h.KK=function(){var a=B8(this.o),b=this.g.fa();return{allowSeeking:this.g.dd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.D?a.B+u8(a):a.B,isPeggedToLive:1>=(a.D?a.A+u8(a):a.A)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.D?a.A+u8(a):a.A,seekableStart:0<a.C?a.C+u8(a):a.C}};
g.h.LK=function(){this.o&&this.o.kD()};
g.h.MK=function(){this.o&&this.o.lD()};
g.h.gO=function(a){1==a&&(this.J=this.o?B8(this.o):null)};
g.h.TQ=function(){var a=d9()?new A8(Z8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.We(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.fa().videoId&&this.g.Bz(a.videoId,w8(a)));this.g.T("videodatachange","newdata",this.g.fa(),3)};
g.h.gB=function(){this.G=[this.A].concat(cAa());var a=$8()||this.A;o9(this,a);this.g.ua("onMdxReceiversChange")};
g.h.RQ=function(){var a=$8();o9(this,a)};
g.h.QQ=function(){this.B=$8()};
g.h.JK=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?q8():o9(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&q8(),!0):!1}};
g.h.NK=function(){F8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.td=function(){return!1};g.CY.remote=n9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:08:40 Dec 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:29:20 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 461.089
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.073
  cdx.remote: 0.064
  esindex: 0.01
  LoadShardBlock: 384.873 (3)
  PetaboxLoader3.resolve: 355.518 (2)
  PetaboxLoader3.datanode: 51.624 (5)
  load_resource: 105.628 (2)
*/