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

(function(g){var window=this;var Wya=function(a,b){return g.Vb(a,b)},d6=function(a){g.zm(a,"zx",g.Va());
return a},e6=function(a,b,c){g.xa(c)||(c=[String(c)]);
g.Cm(a.g,b,c)},Xya=function(a,b){var c=[];
g.jk(b,function(a){try{var b=g.ZC.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.YC(b)&&c.push(a):c.push(a)},a);
return c},Yya=function(a,b){var c=Xya(a,b);
(0,g.G)(c,function(a){g.ZC.prototype.remove.call(this,a)},a)},Zya=function(){var a=g.SG;
Yya(a,a.g.Zd(!0))},$ya=function(a,b,c,d){var e=new g.qm(null,void 0);
a&&g.rm(e,a);b&&g.sm(e,b);c&&g.tm(e,c);d&&g.um(e,d);return e},aza=function(a){g.kG[a]&&(a=g.kG[a],(0,g.G)(a,function(a){g.iG[a]&&delete g.iG[a]}),a.length=0)},bza=function(a){var b=g.hG();
if(b)if(b.clear(a),a)aza(a);else for(var c in g.kG)aza(c)},f6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.A=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.km;this.g=this.o="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",cza(this,a.capabilities||""),dza(this,a.experiments||""),this.o=a.remoteControllerUrl||"",
this.g=a.localChannelEncryptionKey||"")},cza=function(a,b){a.capabilities.clear();
(0,g.Jd)(b.split(","),g.Da(Wya,eza)).forEach(function(b){a.capabilities.add(b)})},dza=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},g6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},h6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},fza=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},gza=function(a){return new g6(a)},hza=function(a){return g.xa(a)?(0,g.H)(a,gza):[]},i6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},j6=function(a){return g.xa(a)?"["+(0,g.H)(a,i6).join(",")+"]":"null"},k6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},iza=function(a){return(0,g.H)(a,function(a){return{key:a.id,
name:a.name}})},l6=function(a,b){return g.fb(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},m6=function(a,b){return g.fb(a,function(a){return h6(a,b)})},n6=function(){var a=g.VG("yt-remote-connected-devices")||[];
g.Eb(a);return a},jza=function(a){if(g.lb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.H)(a,function(a,b){return 0==b?a:a.substring(c.length)})},kza=function(a){g.UG("yt-remote-connected-devices",a,86400)},p6=function(){if(o6)return o6;
var a=g.VG("yt-remote-device-id");a||(a=k6(),g.UG("yt-remote-device-id",a,31536E3));for(var b=n6(),c=1,d=a;g.kb(b,d);)c++,d=a+"#"+c;return o6=d},q6=function(){var a=n6(),b=p6();
g.kb(a,b);g.$G()&&g.Gb(a,b);a=jza(a);if(g.lb(a))try{g.YG.remove("remote_sid","/","youtube.com")}catch(c){}else try{g.ZG("remote_sid",a.join(","),-1)}catch(c){}},lza=function(){return g.VG("yt-remote-session-browser-channel")},mza=function(){return g.VG("yt-remote-local-screens")||[]},nza=function(){g.UG("yt-remote-lounge-token-expiration",!0,86400)},oza=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.H)(mza(),function(a){return a.loungeToken}),c=(0,g.H)(a,function(a){return a.loungeToken});
(0,g.Zl)(c,function(a){return!g.kb(b,a)})&&nza();
g.UG("yt-remote-local-screens",a,31536E3)},pza=function(a,b){g.UG("yt-remote-session-browser-channel",a);
g.UG("yt-remote-session-screen-id",b);var c=n6(),d=p6();g.kb(c,d)||c.push(d);kza(c);q6()},r6=function(a){a||(g.WG("yt-remote-session-screen-id"),g.WG("yt-remote-session-video-id"));
q6();a=n6();g.sb(a,p6());kza(a)},qza=function(){if(!s6){var a=g.eD();
a&&(s6=new g.TC(a))}return s6?!!s6.get("yt-remote-use-staging-server"):!1},rza=function(){var a=window.document.createElement("a");
g.Xc(a,"https://web.archive.org/web/20171101014021/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Za(a)},sza=function(a,b){var c=g.Bd("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.Yc(c,g.ae("https://web.archive.org/web/20171101014021/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},tza=function(){var a=rza(),b=window.document.getElementById(a),c=b&&g.xF(b,"loaded");
c||b&&!c||(b=sza(a,function(){g.xF(b,"loaded")||(g.wF(b,"loaded","true"),g.oG(a),g.vE(g.Da(bza,a),0))}))},uza=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?(0,window.parseInt)(a[1],10):0},t6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},vza=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},wza=function(a,b){var c=new window.XMLHttpRequest;
c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}},x6=function(a){if(a>=xza.length)u6();
else{var b=xza[a],c="chrome-extension://"+b+yza;0<=v6.indexOf(b)?wza(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,w6(c,u6)):x6(a+1)}):w6(c,function(){x6(a+1)})}},w6=function(a,b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},y6=function(a){return 0<=window.navigator.userAgent.indexOf(a)},u6=function(){var a=vza();
a&&a(!1,"No cast extension found")},Aza=function(){if(zza){var a=2,b=vza(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;w6("//web.archive.org/web/20171101014021/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",u6,c)}},Bza=function(){if(y6("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){Aza();a({command:"cast.sender.init"});return}}if(!window.chrome||y6("Edge"))u6();else if(Aza(),y6("Android")&&y6("Chrome/")&&window.navigator.presentation){a="";var b=uza();55<=b?a="55":50<=b&&(a="50");w6("//web.archive.org/web/20171101014021/https://www.gstatic.com/eureka/clank"+a+yza,u6)}else x6(0)},z6=function(a,b,c){g.L.call(this);
this.D=null!=c?(0,g.z)(a,c):a;this.sc=b;this.C=(0,g.z)(this.JH,this);this.g=!1;this.o=0;this.A=this.Aa=null;this.B=[]},A6=function(a,b){this.g=a;
this.o=b},B6=function(a,b,c,d,e){this.g=a;
this.A=c;this.G=d;this.F=e||1;this.C=45E3;this.B=new g.Gm(this);this.o=new g.qg;this.o.setInterval(250)},Dza=function(a,b,c){a.nj=1;
a.nh=d6(b.clone());a.Hi=c;a.D=!0;Cza(a,null)},C6=function(a,b,c,d,e){a.nj=1;
a.nh=d6(b.clone());a.Hi=null;a.D=c;e&&(a.bC=!1);Cza(a,d)},Cza=function(a,b){a.Ll=(0,g.F)();
D6(a);a.Eh=a.nh.clone();e6(a.Eh,"t",a.F);a.Tl=0;a.Nc=a.g.xq(a.g.Nl()?b:null);0<a.dr&&(a.Lo=new g.Nk((0,g.z)(a.jD,a,a.Nc),a.dr));a.B.U(a.Nc,"readystatechange",a.AS);var c=a.gi?g.ac(a.gi):{};a.Hi?(a.up="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Nc.send(a.Eh,a.up,a.Hi,c)):(a.up="GET",a.bC&&!g.xd&&(c.Connection="close"),a.Nc.send(a.Eh,a.up,null,c));a.g.rf(1)},Gza=function(a,b,c){for(var d=!0;!a.Qh&&a.Tl<c.length;){var e=Eza(a,c);
if(e==E6){4==b&&(a.hi=4,F6(),d=!1);break}else if(e==Fza){a.hi=4;F6();d=!1;break}else G6(a,e)}4==b&&0==c.length&&(a.hi=1,F6(),d=!1);a.vf=a.vf&&d;d||(H6(a),I6(a))},Eza=function(a,b){var c=a.Tl,d=b.indexOf("\n",c);
if(-1==d)return E6;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return Fza;d+=1;if(d+c>b.length)return E6;var e=b.substr(d,c);a.Tl=d+c;return e},Iza=function(a,b){a.Ll=(0,g.F)();
D6(a);var c=b?window.location.hostname:"";a.Eh=a.nh.clone();g.zm(a.Eh,"DOMAIN",c);g.zm(a.Eh,"t",a.F);try{a.wf=new window.ActiveXObject("htmlfile")}catch(n){H6(a);a.hi=7;F6();I6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in J6)k=J6[l];else if(l in Hza)k=J6[l]=Hza[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
J6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Zc(g.vc("b/12014412"),d);a.wf.open();a.wf.write(g.Rc(c));a.wf.close();a.wf.parentWindow.m=(0,g.z)(a.FR,a);a.wf.parentWindow.d=(0,g.z)(a.tB,a,!0);a.wf.parentWindow.rpcClose=(0,g.z)(a.tB,a,!1);c=a.wf.createElement("DIV");a.wf.parentWindow.document.body.appendChild(c);d=g.Hc(a.Eh.toString());d=g.Oa(g.Ec(d));d=g.Zc(g.vc("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=g.Rc(d);a.g.rf(1)},D6=function(a){a.Cu=
(0,g.F)()+a.C;
Jza(a,a.C)},Jza=function(a,b){if(null!=a.pk)throw Error("WatchDog timer not null");
a.pk=K6((0,g.z)(a.WR,a),b)},L6=function(a){a.pk&&(g.w.clearTimeout(a.pk),a.pk=null)},I6=function(a){a.g.Fx()||a.Qh||a.g.Co(a)},H6=function(a){L6(a);
g.We(a.Lo);a.Lo=null;a.o.stop();g.Mm(a.B);if(a.Nc){var b=a.Nc;a.Nc=null;b.abort();b.dispose()}a.wf&&(a.wf=null)},G6=function(a,b){try{a.g.mB(a,b),a.g.rf(4)}catch(c){}},Lza=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;Kza(a,b,function(e){e?c(!0):g.w.setTimeout(function(){Lza(a,b,c,d,f)},f)})}},Kza=function(a,b,c){var d=new window.Image;
d.onload=function(){try{M6(d),c(!0)}catch(e){}};
d.onerror=function(){try{M6(d),c(!1)}catch(e){}};
d.onabort=function(){try{M6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{M6(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},M6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},Mza=function(a){this.g=a;
this.o=new A6},Nza=function(a){var b=N6(a.g,a.tk,"/mail/images/cleardot.gif");
d6(b);Lza(b.toString(),5E3,(0,g.z)(a.SG,a),3,2E3);a.rf(1)},P6=function(a){var b=a.g.J;
if(null!=b)F6(),b?(F6(),O6(a.g,a,!1)):(F6(),O6(a.g,a,!0));else if(a.qe=new B6(a,0,void 0,void 0,void 0),a.qe.gi=a.Yq,b=a.g,b=N6(b,b.Nl()?a.Uk:null,a.ar),F6(),!g.vd||g.rc(10))e6(b,"TYPE","xmlhttp"),C6(a.qe,b,!1,a.Uk,!1);else{e6(b,"TYPE","html");var c=a.qe;a=!!a.Uk;c.nj=3;c.nh=d6(b.clone());Iza(c,a)}},Q6=function(a,b,c,d){this.G=a||null;
this.g=1;this.o=[];this.B=[];this.C=new A6;this.I=b||null;this.J=null!=c?c:null;this.D=d||!1},Oza=function(a,b){this.g=a;
this.map=b;this.context=null},Pza=function(a){g.Ye.call(this,"statevent",a)},Qza=function(a,b){g.Ye.call(this,"timingevent",a);
this.size=b},Rza=function(a){g.Ye.call(this,"serverreachability",a)},Uza=function(a){Sza(a);
if(3==a.g){var b=a.Cl++,c=a.wn.clone();g.zm(c,"SID",a.A);g.zm(c,"RID",b);g.zm(c,"TYPE","terminate");R6(a,c);b=new B6(a,0,a.A,b,void 0);b.nj=2;b.nh=d6(c.clone());(new window.Image).src=b.nh;b.Ll=(0,g.F)();D6(b)}Tza(a)},Vza=function(a){a.pH(1,0);
a.wn=N6(a,null,a.Xq);S6(a)},Sza=function(a){a.bh&&(a.bh.abort(),a.bh=null);
a.oc&&(a.oc.cancel(),a.oc=null);a.tg&&(g.w.clearTimeout(a.tg),a.tg=null);T6(a);a.Od&&(a.Od.cancel(),a.Od=null);a.eh&&(g.w.clearTimeout(a.eh),a.eh=null)},Wza=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.o.push(new Oza(a.GN++,b));2!=a.g&&3!=a.g||S6(a)},S6=function(a){a.Od||a.eh||(a.eh=K6((0,g.z)(a.rB,a),0),a.Jk=0)},Yza=function(a,b){if(1==a.g){if(!b){a.Cl=Math.floor(1E5*Math.random());
var c=a.Cl++,d=new B6(a,0,"",c,void 0);d.gi=null;var e=U6(a),f=a.wn.clone();g.zm(f,"RID",c);a.G&&g.zm(f,"CVER",a.G);R6(a,f);Dza(d,f,e);a.Od=d;a.g=2}}else 3==a.g&&(b?Xza(a,b):0==a.o.length||a.Od||Xza(a))},Xza=function(a,b){if(b)if(6<a.Sh){a.o=a.B.concat(a.o);
a.B.length=0;var c=a.Cl-1;var d=U6(a)}else c=b.G,d=b.Hi;else c=a.Cl++,d=U6(a);var e=a.wn.clone();g.zm(e,"SID",a.A);g.zm(e,"RID",c);g.zm(e,"AID",a.Bj);R6(a,e);c=new B6(a,0,a.A,c,a.Jk+1);c.gi=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.Od=c;Dza(c,e,d)},R6=function(a,b){if(a.qd){var c=a.qd.hx(a);
c&&g.Lb(c,function(a,c){g.zm(b,c,a)})}},U6=function(a){var b=Math.min(a.o.length,1E3),c=["count="+b];
if(6<a.Sh&&0<b){var d=a.o[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.o[e].g,k=a.o[e].map;f=6>=a.Sh?e:f-d;try{g.Lb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.B=a.B.concat(a.o.splice(0,b));
return c.join("&")},Zza=function(a){a.oc||a.tg||(a.F=1,a.tg=K6((0,g.z)(a.qB,a),0),a.Xi=0)},V6=function(a){if(a.oc||a.tg||3<=a.Xi)return!1;
a.F++;a.tg=K6((0,g.z)(a.qB,a),$za(a,a.Xi));a.Xi++;return!0},O6=function(a,b,c){a.tp=c;
a.ff=b.Ag;a.D||Vza(a)},T6=function(a){null!=a.Uh&&(g.w.clearTimeout(a.Uh),a.Uh=null)},$za=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},W6=function(a,b){if(2==b||9==b){var c=null;
a.qd&&(c=null);var d=(0,g.z)(a.tT,a);c||(c=new g.qm("//web.archive.org/web/20171101014021/https://www.google.com/images/cleardot.gif"),d6(c));Kza(c.toString(),1E4,d)}else F6();aAa(a,b)},aAa=function(a,b){a.g=0;
a.qd&&a.qd.hw(a,b);Tza(a);Sza(a)},Tza=function(a){a.g=0;
a.ff=-1;if(a.qd)if(0==a.B.length&&0==a.o.length)a.qd.lq(a);else{var b=g.vb(a.B),c=g.vb(a.o);a.B.length=0;a.o.length=0;a.qd.lq(a,b,c)}},N6=function(a,b,c){var d=g.Am(c);
if(""!=d.o)b&&g.sm(d,b+"."+d.o),g.tm(d,d.C);else{var e=window.location;d=$ya(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c)}a.Gk&&g.Lb(a.Gk,function(a,b){g.zm(d,b,a)});
g.zm(d,"VER",a.Sh);R6(a,d);return d},K6=function(a,b){if(!g.za(a))throw Error("Fn must not be null and must be a function");
return g.w.setTimeout(function(){a()},b)},F6=function(){X6.dispatchEvent(new Pza(X6))},bAa=function(){},cAa=function(a,b){this.action=a;
this.params=b||{}},Z6=function(a,b){g.L.call(this);
this.g=new g.Xt(this.A,0,this);g.M(this,this.g);this.o=this.sc=0;if(g.za(a))b&&(a=(0,g.z)(a,b));else if(a&&g.za(a.handleEvent))a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a;Y6(this)},Y6=function(a){a.g.stop();
a.sc=5E3+2E4*Math.random()},$6=function(a,b,c){this.L=a;
this.D=b;this.A=new g.SC;this.o=new Z6(this.VT,this);this.g=this.bb=null;this.J=!1;this.C=null;this.I="";this.G=this.B=0;this.F=[];this.M=c||!1},dAa=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.tp,sessionId:a.g.A,arrayId:a.g.Bj}},eAa=function(a,b){a.G=b||0;
a.o.stop();a.g&&(3==a.g.g&&Yza(a.g),Uza(a.g));a.G=0},a7=function(a){return!!a.g&&3==a.g.g},fAa=function(a,b){(a.D.loungeIdToken=b)||a.o.stop()},b7=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Gg(a)||"";b&&(this.port=":"+b);this.domain=g.Fg(a)||"";a=g.Ib;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Ya(a,"10.0")&&(this.o=!1))},c7=function(a,b){var c=a.g;
if(g.t(void 0)?0:a.o)c="https://"+a.domain+a.port+a.g;return g.Pg(c+b,{})},d7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,Hb:g.Da(a.B,d,!0),onError:g.Da(a.A,e),td:g.Da(a.C,e)};c&&(a.Ob=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.LE(b,a)},jAa=function(){var a=gAa;
hAa();e7.push(a);iAa(e7)},f7=function(a,b){hAa();
var c=e7,d=kAa(a,String(b));g.lb(c)?lAa(d):(iAa(c),(0,g.G)(c,function(a){a(d)}))},hAa=function(){e7||(e7=g.x("yt.mdx.remote.debug.handlers_")||[],g.ua("yt.mdx.remote.debug.handlers_",e7,void 0))},lAa=function(a){var b=(g7+1)%50;
g7=b;h7[b]=a;i7||(i7=49==b)},iAa=function(a){var b=h7;
if(b[0]){var c=g7,d=i7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.G)(a,function(a){a(e)})}while(d!=c);
h7=Array(50);g7=-1;i7=!1}},kAa=function(a,b){var c=((0,g.F)()-mAa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},j7=function(a){g.ZF.call(this);
this.F=a;this.g=[]},nAa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},oAa=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Jd)(a.g,function(a){return!!l6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=nAa(a,b[d])||c;return c},pAa=function(a,b){var c=a.g.length;
a.g=(0,g.Jd)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c},k7=function(a,b,c,d){g.ZF.call(this);
this.D=a;this.C=b;this.A=c;this.B=d;this.o=0;this.g=null;this.Aa=window.NaN},m7=function(a){j7.call(this,"LocalScreenService");
this.A=a;this.o=window.NaN;l7(this);this.info("Initializing with "+j6(this.g))},qAa=function(a){if(a.g.length){var b=(0,g.H)(a.g,function(a){return a.id}),c=c7(a.A,"/pairing/get_lounge_token_batch");
d7(a.A,c,{screen_ids:b.join(",")},(0,g.z)(a.VH,a),(0,g.z)(a.UH,a))}},l7=function(a){var b=hza(mza());
b=(0,g.Jd)(b,function(a){return!a.uuid});
return oAa(a,b)},n7=function(a,b){oza((0,g.H)(a.g,fza));
b&&nza()},p7=function(a,b){g.ZF.call(this);
this.D=b;var c=g.VG("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.D(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.kb(c,l)}this.g=d;this.C=a;this.A=this.B=window.NaN;this.o=null;o7("Initialized with "+g.xg(this.g))},rAa=function(a,b,c){var d=c7(a.C,"/pairing/get_screen_availability");
d7(a.C,d,{lounge_token:b.token},(0,g.z)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},q7=function(a,b){a:if(g.Qb(b)!=g.Qb(a.g))var c=!1;
else{c=g.Sb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(o7("Updated online screens: "+g.xg(a.g)),a.g=b,a.T("screenChange"));sAa(a)},r7=function(a){(0,window.isNaN)(a.A)||g.xE(a.A);
a.A=g.vE((0,g.z)(a.Mt,a),0<a.B&&a.B<(0,g.F)()?2E4:1E4)},o7=function(a){f7("OnlineScreenService",a)},tAa=function(a){var b={};
(0,g.G)(a.D(),function(a){a.token?b[a.token]=a.id:this.ac("Requesting availability of screen w/o lounge token.")});
return b},sAa=function(a){a=g.Sb(g.Mb(a.g,function(a){return a}));
g.Eb(a);a.length?g.UG("yt-remote-online-screen-ids",a.join(","),60):g.WG("yt-remote-online-screen-ids")},s7=function(a){j7.call(this,"ScreenService");
this.D=a;this.o=this.A=null;this.B=[];this.C={};uAa(this)},wAa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var k=a.he();if(k=(c?m6(k,c):null)||m6(k,b)){k.uuid=b;var l=t7(a,k);rAa(a.o,l,function(a){e(a?l:null)})}else c?vAa(a,c,(0,g.z)(function(a){var f=t7(this,new g6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));rAa(this.o,f,function(a){e(a?f:null)})},a),f):e(null)},xAa=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},vAa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Ob:{screen_ids:b},method:"POST",context:a,Hb:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.LE(c7(a.D,"/pairing/get_lounge_token_batch"),e)},yAa=function(a){a.g=a.A.he();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+j6(a.g))},uAa=function(a){u7(a);
a.A=new m7(a.D);a.A.subscribe("screenChange",(0,g.z)(a.hI,a));yAa(a);a.B=hza(g.VG("yt-remote-automatic-screen-cache")||[]);u7(a);a.info("Initializing automatic screens: "+j6(a.B));a.o=new p7(a.D,(0,g.z)(a.he,a,!0));a.o.subscribe("screenChange",(0,g.z)(function(){this.T("onlineScreenChange")},a))},t7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=m6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),g.UG("yt-remote-automatic-screen-cache",(0,g.H)(a.B,fza)));u7(a);a.C[b.uuid]=b.id;g.UG("yt-remote-device-id-map",a.C,31536E3);return b},u7=function(a){a.C=g.VG("yt-remote-device-id-map")||{}},v7=function(a,b,c){g.ZF.call(this);
this.M=c;this.I=a;this.o=b;this.A=null},w7=function(a,b){f7(a.M,b)},x7=function(a,b){v7.call(this,a,b,"CastSession");
this.g=null;this.B=0;this.D=(0,g.z)(this.dU,this);this.C=(0,g.z)(this.gS,this);this.B=g.vE((0,g.z)(function(){zAa(this,null)},this),12E4)},AAa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.xg(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.y,(0,g.z)(function(){w7(this,"Failed to send message: getMdxSessionStatus.")},a)):w7(a,"Sending yt message without session: "+g.xg(b))},zAa=function(a,b){g.xE(a.B);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.A||a.A.id!=b){var c=(0,g.z)(a.Do,a),d=(0,g.z)(a.oe,a);a.yx(b,c,d,5)}}else a.oe(Error("Waiting for session status timed out."))},y7=function(a,b,c){v7.call(this,a,b,"DialSession");
this.B=this.G=null;this.J="";this.O=c;this.C=null;this.F=g.y;this.D=window.NaN;this.L=(0,g.z)(this.gU,this);this.g=g.y},BAa=function(a){a.g=a.I.pD(a.J,a.o.label,a.o.friendlyName,(0,g.z)(function(a){this.g=g.y;
this.Do(a)},a),(0,g.z)(function(a){this.g=g.y;
this.oe(a)},a))},CAa=function(a){var b={};
b.pairingCode=a.J;b.theme=a.O;if(a.C){var c=a.C.currentTime||0;b.v=a.C.videoId;b.t=c}qza()&&(b.env_useStageMdx=1);return g.Ng(b)},z7=function(a,b){v7.call(this,a,b,"ManualSession");
this.g=g.vE((0,g.z)(this.Cj,this,null),150)},A7=function(a,b,c,d){g.ZF.call(this);
this.o=a;this.F=b||"233637DE";this.D=c||"cl";this.G=d||!1;this.g=null;this.C=!1;this.A=[];this.B=(0,g.z)(this.MQ,this)},DAa=function(a,b){return b?g.fb(a.A,function(a){return h6(b,a.label)},a):null},B7=function(a){f7("Controller",a)},gAa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},C7=function(a){return a.C||!!a.A.length||!!a.g},D7=function(a,b,c){b!=a.g&&(g.We(a.g),(a.g=b)?(c?a.T("yt-remote-cast2-receiver-resumed",b.o):a.T("yt-remote-cast2-receiver-selected",
b.o),b.subscribe("sessionScreen",(0,g.z)(a.oB,a,b)),b.A?a.T("yt-remote-cast2-session-change",b.A):c&&a.g.Cj(null)):a.T("yt-remote-cast2-session-change",null))},EAa=function(a){var b=a.o.oD(),c=a.g&&a.g.o;
a=(0,g.H)(b,function(a){c&&h6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=DAa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},JAa=function(a,b,c,d,e,f,k){FAa()?GAa(b,e,f,k)&&(F7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?HAa(a,c):(window.__onGCastApiAvailable=function(b,d){b?HAa(a,c):(G7("Failed to load cast API: "+d),H7(!1),F7(!1),g.WG("yt-remote-cast-available"),g.WG("yt-remote-cast-receiver"),IAa(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20171101014021/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):tza():Bza())):E7("Cannot initialize because not running Chrome")},IAa=function(){E7("dispose");
var a=I7();a&&a.dispose();g.ua("yt.mdx.remote.cloudview.instance_",null,void 0);KAa(!1);g.mG(J7);J7.length=0},K7=function(){return!!g.VG("yt-remote-cast-installed")},LAa=function(){var a=g.VG("yt-remote-cast-receiver");
return a?a.friendlyName:null},MAa=function(){E7("clearCurrentReceiver");
g.WG("yt-remote-cast-receiver")},NAa=function(){return K7()?I7()?I7().getCastSession():(G7("getCastSelector: Cast is not initialized."),null):(G7("getCastSelector: Cast API is not installed!"),null)},M7=function(){K7()?I7()?L7()?(E7("Requesting cast selector."),I7().requestSession()):(E7("Wait for cast API to be ready to request the session."),J7.push(g.lG("yt-remote-cast2-api-ready",M7))):G7("requestCastSelector: Cast is not initialized."):G7("requestCastSelector: Cast API is not installed!")},N7=
function(a,b){L7()?I7().setConnectedScreenStatus(a,b):G7("setConnectedScreenStatus called before ready.")},FAa=function(){var a=0<=g.Ib.search(/ (CrMo|Chrome|CriOS)\//);
return g.GJ||a},OAa=function(a,b){I7().init(a,b)},GAa=function(a,b,c,d){var e=!1;
I7()||(a=new A7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.UG("yt-remote-cast-available",a);g.pG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){E7("onReceiverSelected: "+a.friendlyName);
g.UG("yt-remote-cast-receiver",a);g.pG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){E7("onReceiverResumed: "+a.friendlyName);
g.UG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){E7("onSessionChange: "+i6(a));
a||g.WG("yt-remote-cast-receiver");g.pG("yt-remote-cast2-session-change",a)}),g.ua("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
E7("cloudview.createSingleton_: "+e);return e},I7=function(){return g.x("yt.mdx.remote.cloudview.instance_")},HAa=function(a,b){H7(!0);
F7(!1);OAa(a,function(a){a?(KAa(!0),g.oG("yt-remote-cast2-api-ready")):(G7("Failed to initialize cast API."),H7(!1),g.WG("yt-remote-cast-available"),g.WG("yt-remote-cast-receiver"),IAa());b(a)})},E7=function(a){f7("cloudview",a)},G7=function(a){f7("cloudview",a)},H7=function(a){E7("setCastInstalled_ "+a);
g.UG("yt-remote-cast-installed",a)},L7=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},KAa=function(a){E7("setApiReady_ "+a);
g.ua("yt.mdx.remote.cloudview.apiReady_",a,void 0)},F7=function(a){g.ua("yt.mdx.remote.cloudview.initializing_",a,void 0)},O7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.g=-1;this.muted=!1;this.audioTrackId=null;this.F=this.G=0;this.o=null;this.hasNext=this.Lf=!1;this.J=this.I=this.A=this.C=0;this.B=window.NaN;this.D=!1;this.reset(a)},P7=function(a){a.audioTrackId=null;
a.o=null;a.g=-1;a.Lf=!1;a.hasNext=!1;a.G=0;a.F=(0,g.F)();a.C=0;a.A=0;a.I=0;a.J=0;a.B=window.NaN;a.D=!1},Q7=function(a){return a.kb()?((0,g.F)()-a.F)/1E3:0},R7=function(a,b){a.G=b;
a.F=(0,g.F)()},S7=function(a){switch(a.g){case 1:case 1081:return((0,g.F)()-a.F)/1E3+a.G;
case -1E3:return 0}return a.G},T7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&P7(a)},U7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.g;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.bc(a.o);b.hasPrevious=a.Lf;b.hasNext=a.hasNext;b.playerTime=a.G;b.playerTimeAt=a.F;b.seekableStart=a.C;b.seekableEnd=a.A;b.duration=a.I;b.loadedTime=a.J;b.liveIngestionTime=a.B;return b},W7=function(a,b){g.ZF.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.iC;this.A=this.o=null;this.I=(0,g.z)(this.qO,this);this.F=(0,g.z)(this.El,this);this.G=(0,g.z)(this.pO,this);this.J=(0,g.z)(this.DO,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Iu,this),PAa(this))):c=3;0!=c&&(b?this.Iu(c):g.vE((0,g.z)(function(){this.Iu(c)},this),0));
var d=NAa();d&&V7(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},X7=function(a){return new O7(a.B.getPlayerContextData())},PAa=function(a){(0,g.G)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.Da(this.IQ,a),this))},a)},QAa=function(a){(0,g.G)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},Y7=function(a,b){50>a.C.Jc()&&g.kC(a.C,b)},$7=function(a,b,c){var d=X7(a);
R7(d,c);-1E3!=d.g&&(d.g=b);Z7(a,d)},a8=function(a,b,c){a.B.sendMessage(b,c)},Z7=function(a,b){QAa(a);
a.B.setPlayerContextData(U7(b));PAa(a)},V7=function(a,b){a.A&&(a.A.removeUpdateListener(a.I),a.A.removeMediaListener(a.F),a.El(null));
a.A=b;a.A&&(b8("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.I),a.A.addMediaListener(a.F),a.A.media.length&&a.El(a.A.media[0]))},RAa=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=X7(a);b.contentId!=d.videoId&&b8("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;R7(d,a.o.getEstimatedTime());Z7(a,d)}else b8("No cast media video. Ignoring state update.")},b8=function(a){f7("CP",a)},c8=function(a,b,c){return(0,g.z)(function(a){this.ac("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.ac("Retrying "+b+" using MDx browser channel."),a8(this,b,c))},a)},d8=function(a,b,c){g.ZF.call(this);
this.C=window.NaN;this.O=!1;this.J=this.I=this.L=this.M=window.NaN;this.R=[];this.B=this.F=this.A=this.fb=this.g=null;this.oa=a;this.R.push(g.KF(window,"beforeunload",(0,g.z)(this.MH,this)));this.o=[];this.fb=new O7;this.Y=b.id;this.g=SAa(this,c);this.g.subscribe("handlerOpened",this.uO,this);this.g.subscribe("handlerClosed",this.rO,this);this.g.subscribe("handlerError",this.sO,this);this.g.subscribe("handlerMessage",this.tO,this);fAa(this.g,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.fb.videoId;g.$G()&&g.UG("yt-remote-session-video-id",a)},this)},e8=function(a){f7("conn",a)},SAa=function(a,b){return new $6(c7(a.oa,"/bc"),b)},f8=function(a,b){a.T("proxyStateChange",b)},TAa=function(a){a.C=g.vE((0,g.z)(function(){e8("Connecting timeout");
this.D(1)},a),2E4)},g8=function(a){g.xE(a.C);
a.C=window.NaN},h8=function(a){g.xE(a.M);
a.M=window.NaN},UAa=function(a){i8(a);
a.L=g.vE((0,g.z)(function(){j8(this,"getNowPlaying")},a),2E4)},i8=function(a){g.xE(a.L);
a.L=window.NaN},WAa=function(a,b){b&&(g8(a),h8(a));
b==(a7(a.g)&&(0,window.isNaN)(a.C))?b&&(f8(a,1),j8(a,"getSubtitlesTrack")):b?(a.X()&&a.fb.reset(),f8(a,1),j8(a,"getNowPlaying"),VAa(a)):a.D(1)},XAa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.fb.videoId&&(g.Yb(b.params)?a.fb.o=null:a.fb.o=b.params,a.T("remotePlayerChange"))},YAa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.fb.listId=b.params.listId||a.fb.listId;T7(a.fb,c,d);a.T("remoteQueueChange")},$Aa=function(a,b){b.params=b.params||{};
YAa(a,b);ZAa(a,b);a.T("autoplayDismissed")},ZAa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
R7(a.fb,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.fb.g&&(c=-1E3);a.fb.g=c;c=Number(b.params.loadedTime);a.fb.J=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.fb.I=(0,window.isNaN)(c)?0:c;c=a.fb;var d=Number(b.params.liveIngestionTime);c.B=d;c.D=(0,window.isNaN)(d)?!1:!0;c=a.fb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=(0,window.isNaN)(d)?0:d;c.A=(0,window.isNaN)(e)?0:e;1==a.fb.g?UAa(a):i8(a);
a.T("remotePlayerChange")},aBa=function(a,b){if(-1E3!=a.fb.g){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.fb.g=c;c=(0,window.parseInt)(b.params.currentTime,10);R7(a.fb,(0,window.isNaN)(c)?0:c);a.T("remotePlayerChange")}},bBa=function(a,b){var c="true"==b.params.muted;
a.fb.volume=(0,window.parseInt)(b.params.volume,10);a.fb.muted=c;a.T("remotePlayerChange")},cBa=function(a,b){a.F=b.params.videoId;
a.T("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},dBa=function(a,b){var c="true"==b.params.hasNext;
a.fb.Lf="true"==b.params.hasPrevious;a.fb.hasNext=c;a.T("previousNextChange")},VAa=function(a){g.xE(a.J);
a.J=g.vE((0,g.z)(a.D,a,1),864E5)},j8=function(a,b,c){c?e8("Sending: action="+b+", params="+g.xg(c)):e8("Sending: action="+b);
a.g.sendMessage(b,c)},k8=function(a){j7.call(this,"ScreenServiceProxy");
this.cd=a;this.o=[];this.o.push(this.cd.$_s("screenChange",(0,g.z)(this.bU,this)));this.o.push(this.cd.$_s("onlineScreenChange",(0,g.z)(this.oQ,this)))},iBa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.OD("MDX_CONFIG")||b;g.SG&&Zya();q6();l8||(l8=new b7(b?b.loungeApiHost:void 0),qza()&&(l8.g="/api/loungedev"));m8||(m8=g.x("yt.mdx.remote.deferredProxies_")||[],g.ua("yt.mdx.remote.deferredProxies_",m8,void 0));eBa();var c=n8();if(!c){var d=new s7(l8);g.ua("yt.mdx.remote.screenService_",d,void 0);c=n8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);JAa(a,d,function(a){a?o8()&&N7(o8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.pG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.ua("yt.mdx.remote.initialized_",!0,void 0),p8("Initializing: "+g.xg(b)),q8.push(g.lG("yt-remote-cast2-availability-change",function(){g.pG("yt-remote-receiver-availability-change")})),q8.push(g.lG("yt-remote-cast2-receiver-selected",function(){r8(null);
g.pG("yt-remote-auto-connect","cast-selector-receiver")})),q8.push(g.lG("yt-remote-cast2-receiver-resumed",function(){g.pG("yt-remote-receiver-resumed","cast-selector-receiver")})),q8.push(g.lG("yt-remote-cast2-session-change",fBa)),q8.push(g.lG("yt-remote-connection-change",function(a){a?N7(o8(),"YouTube TV"):s8()||(N7(null,null),MAa())})),a=t8(),b.isAuto&&(a.id+="#dial"),g.cF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),p8(" -- with channel params: "+
g.xg(a)),gBa(a),c.start(),o8()||hBa())},kBa=function(){var a=jBa();
K7()&&g.VG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},jBa=function(){var a=n8().cd.$_gos();
var b=u8();b&&v8()&&(l6(a,b)||a.push(b));return iza(a)},w8=function(){var a=lBa();
!a&&K7()&&LAa()&&(a={key:"cast-selector-receiver",name:LAa()});return a},lBa=function(){var a=jBa(),b=u8();
b||(b=s8());return g.fb(a,function(a){return b&&h6(b,a.key)?!0:!1})},u8=function(){var a=o8();
if(!a)return null;var b=n8().he();return m6(b,a)},fBa=function(a){p8("remote.onCastSessionChange_: "+i6(a));
if(a){var b=u8();b&&b.id==a.id?N7(b.id,"YouTube TV"):(b&&x8(),y8(a,1))}else v8()&&x8()},x8=function(){L7()?I7().stopSession():G7("stopSession called before API ready.");
var a=v8();a&&(a.disconnect(1),z8(null))},A8=function(){var a=v8();
return!!a&&3!=a.getProxyState()},p8=function(a){f7("remote",a)},n8=function(){if(!B8){var a=g.x("yt.mdx.remote.screenService_");
B8=a?new k8(a):null}return B8},o8=function(){return g.x("yt.mdx.remote.currentScreenId_")},mBa=function(a){g.ua("yt.mdx.remote.currentScreenId_",a,void 0)},nBa=function(){return g.x("yt.mdx.remote.connectData_")},r8=function(a){g.ua("yt.mdx.remote.connectData_",a,void 0)},v8=function(){return g.x("yt.mdx.remote.connection_")},z8=function(a){var b=v8();
r8(null);a||mBa("");g.ua("yt.mdx.remote.connection_",a,void 0);m8&&((0,g.G)(m8,function(b){b(a)}),m8.length=0);
b&&!a?g.pG("yt-remote-connection-change",!1):!b&&a&&g.pG("yt-remote-connection-change",!0)},s8=function(){var a=g.$G();
if(!a)return null;var b=n8().he();return m6(b,a)},y8=function(a,b){u8()&&u8();
mBa(a.id);var c=new d8(l8,a,t8());c.connect(b,nBa());c.subscribe("beforeDisconnect",function(a){g.pG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){v8()&&z8(null)});
z8(c)},hBa=function(){var a=s8();
a?(p8("Resume connection to: "+i6(a)),y8(a,0)):(r6(),MAa(),p8("Skipping connecting because no session screen found."))},eBa=function(){var a=t8();
if(g.Yb(a)){a=p6();var b=g.VG("yt-remote-session-name")||"",c=g.VG("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.ua("yt.mdx.remote.channelParams_",a,void 0)}},t8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},gBa=function(a){a?(g.UG("yt-remote-session-app",a.app),g.UG("yt-remote-session-name",a.name)):(g.WG("yt-remote-session-app"),g.WG("yt-remote-session-name"));
g.ua("yt.mdx.remote.channelParams_",a,void 0)},C8=function(a,b,c){g.L.call(this);
this.G=a;this.o=b;this.A=new g.WF(this);g.M(this,this.A);this.A.P(b,"onCaptionsTrackListChanged",this.HP);this.A.P(b,"captionschanged",this.oO);this.A.P(b,"captionssettingschanged",this.FC);this.A.P(b,"videoplayerreset",this.Eo);this.A.P(b,"mdxautoplaycancel",this.RG);this.R=this.A.P(b,"onVolumeChange",this.YA);this.F=!1;this.g=c;c.subscribe("proxyStateChange",this.lB,this);c.subscribe("remotePlayerChange",this.Gl,this);c.subscribe("remoteQueueChange",this.Eo,this);c.subscribe("autoplayUpNext",this.KA,
this);c.subscribe("previousNextChange",this.iB,this);c.subscribe("nowAutoplaying",this.aB,this);c.subscribe("autoplayDismissed",this.JA,this);this.suggestion=null;this.I=new g.FO(64);this.B=new g.Xt(this.AC,500,this);g.M(this,this.B);this.C=new g.Xt(this.BC,1E3,this);g.M(this,this.C);this.L=new z6(this.BT,0,this);g.M(this,this.L);this.D={};this.M=new g.Xt(this.dD,1E3,this);g.M(this,this.M);this.J=new g.Nk(this.ZK,1E3,this);g.M(this,this.J);this.O=g.y;this.FC();this.Eo();this.Gl()},D8=function(a,b){var c=
a.G,d=a.o.ga().lengthSeconds;
c.I=b||0;c.g.T("progresssync",b,d)},oBa=function(a){D8(a,0);
a.B.stop();E8(a,new g.FO(64))},G8=function(a,b){if(F8(a)&&!a.F){var c=null;
b&&(c={style:a.o.yi()},g.ec(c,b));a.g.sC(a.o.ga(1).videoId,c);a.D=X7(a.g).o}},H8=function(a,b){var c=a.o.Xf();
if(c){var d=c.ee();var e=c.listId.toString()}var f=a.o.ga(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;f=f.xj;var m=X7(c),n=e||m.listId;l=l||0;var q={videoId:k,currentIndex:l};T7(m,k,l);g.t(b)&&(R7(m,b),q.currentTime=b);g.t(n)&&(q.listId=n);null!=d&&(q.playerParams=d);null!=f&&(q.clickTrackingParams=f);a8(c,"setPlaylist",q);e||Z7(c,m);E8(a,new g.FO(1))},pBa=function(a,b){if(b){var c=a.o.xc("captions","tracklist",{vy:1});
c&&c.length?(a.o.Gd("captions","track",b),a.F=!1):(a.o.vl("captions"),a.F=!0)}else a.o.Gd("captions","track",{})},F8=function(a){return X7(a.g).videoId==a.o.ga(1).videoId},E8=function(a,b){a.C.stop();
var c=a.I;if(!g.LO(c,b)){var d=g.W(b,2);d!=g.W(a.I,2)&&g.LU(a.o,d);a.I=b;qBa(a.G,c,b)}},I8=function(a){g.Y.call(this,{H:"div",
N:"ytp-remote",K:[{H:"div",N:"ytp-remote-display-status",K:[{H:"div",N:"ytp-remote-display-status-icon",K:[g.TD()]},{H:"div",N:"ytp-remote-display-status-text",K:["{{statustext}}"]}]}]});this.o=new g.MV(this,250);g.M(this,this.o);this.A=a;this.P(a,"presentingplayerstatechange",this.B);rBa(this,g.IU(a))},rBa=function(a,b){if(3==a.A.Ra()){var c={RECEIVER_NAME:a.A.xc("remote","currentReceiver").name};
c=g.W(b,128)?g.T("YTP_MDX_STATUS_ERROR_2",c):b.kb()||g.W(b,4)?g.T("YTP_MDX_STATUS_PLAYING_2",c):g.T("YTP_MDX_STATUS_CONNECTED_2",c);a.updateValue("statustext",c);a.o.show()}else a.o.hide()},J8=function(a,b){g.d_.call(this,g.T("YTP_MDX_TITLE"),0,a,b);
this.o=a;this.G={};this.P(a,"onMdxReceiversChange",this.J);this.P(a,"presentingplayerstatechange",this.J);this.J()},K8=function(a){g.EV.call(this,a);
this.A={key:k6(),name:g.T("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.FO(64);this.I=0;if(!g.mM(g.X(this.g))){a=this.g;var b=g.BU(a).I;b&&(b=b.A&&b.A.g)&&(b=new J8(a,b),g.M(this,b));b=new I8(a);g.M(this,b);g.bV(a,b.element,4)}},qBa=function(a,b,c){a.F=c;
a.g.T("presentingplayerstatechange",new g.QO(c,b))},L8=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)x8();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ga(1),e=d.videoId;if(c||e){var f=a.g.Xf();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.gc(l).videoId}else k=[e];f=a.g.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.xj,index:Math.max(a.g.Ez(),0),currentTime:0==f?void 0:f}}else c=null;p8("Connecting to: "+g.xg(b));"cast-selector-receiver"==b.key?(r8(c||null),L7()?I7().setLaunchParams(c||null):G7("setLaunchParams called before ready.")):!c&&
A8()&&o8()==b.key?g.pG("yt-remote-connection-change",!0):(x8(),r8(c||null),c=n8().he(),(c=m6(c,b.key))&&y8(c,1))}},Hza={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},J6={"'":"\\'"},sBa={},eza={IV:"atp",j0:"ska",z_:"que",MZ:"mus",e0:"sus"};
f6.prototype.cn=function(){var a=new f6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.A=this.A;a.o=this.o;a.g=this.g;return a};
var s6,o6="",yza=t6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",zza=t6("loadCastFramework")||t6("loadCastApplicationFramework"),v6=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],tBa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],xza=50<=uza()?tBa.concat(v6):v6.concat(tBa);g.A(z6,g.L);g.h=z6.prototype;g.h.IH=function(a){this.B=arguments;this.g=!1;this.Aa?this.A=(0,g.F)()+this.sc:this.Aa=g.rg(this.C,this.sc)};
g.h.stop=function(){this.Aa&&(g.sg(this.Aa),this.Aa=null);this.A=null;this.g=!1;this.B=[]};
g.h.pause=function(){++this.o};
g.h.resume=function(){this.o&&(--this.o,!this.o&&this.g&&(this.g=!1,this.D.apply(null,this.B)))};
g.h.W=function(){this.stop();z6.Z.W.call(this)};
g.h.JH=function(){this.A?(this.Aa=g.rg(this.C,this.A-(0,g.F)()),this.A=null):(this.Aa=null,this.o?this.g=!0:(this.g=!1,this.D.apply(null,this.B)))};A6.prototype.stringify=function(a){return g.w.JSON.stringify(a,this.g)};
A6.prototype.parse=function(a){return g.w.JSON.parse(a,this.o)};g.h=B6.prototype;g.h.gi=null;g.h.vf=!1;g.h.pk=null;g.h.Cu=null;g.h.Ll=null;g.h.nj=null;g.h.nh=null;g.h.Eh=null;g.h.Hi=null;g.h.Nc=null;g.h.Tl=0;g.h.wf=null;g.h.up=null;g.h.hi=null;g.h.Vk=-1;g.h.bC=!0;g.h.Qh=!1;g.h.dr=0;g.h.Lo=null;var Fza={},E6={};g.h=B6.prototype;g.h.setTimeout=function(a){this.C=a};
g.h.AS=function(a){a=a.target;var b=this.Lo;b&&3==g.qx(a)?b.lj():this.jD(a)};
g.h.jD=function(a){try{if(a==this.Nc)a:{var b=g.qx(this.Nc),c=this.Nc.o,d=this.Nc.getStatus();if(g.vd&&!g.rc(10)||g.xd&&!g.qc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.$e&&!g.ux(this.Nc))break a;this.Qh||4!=b||7==c||(8==c||0>=d?this.g.rf(3):this.g.rf(2));L6(this);var e=this.Nc.getStatus();this.Vk=e;var f=g.ux(this.Nc);(this.vf=200==e)?(4==b&&H6(this),this.D?(Gza(this,b,f),g.$e&&this.vf&&3==b&&(this.B.U(this.o,"tick",this.sS),this.o.start())):G6(this,f),this.vf&&!this.Qh&&(4==b?this.g.Co(this):
(this.vf=!1,D6(this)))):(this.hi=400==e&&0<f.indexOf("Unknown SID")?3:0,F6(),H6(this),I6(this))}}catch(k){this.Nc&&g.ux(this.Nc)}finally{}};
g.h.sS=function(){var a=g.qx(this.Nc),b=g.ux(this.Nc);this.Tl<b.length&&(L6(this),Gza(this,a,b),this.vf&&4!=a&&D6(this))};
g.h.FR=function(a){K6((0,g.z)(this.ER,this,a),0)};
g.h.ER=function(a){this.Qh||(L6(this),G6(this,a),D6(this))};
g.h.tB=function(a){K6((0,g.z)(this.DR,this,a),0)};
g.h.DR=function(a){this.Qh||(H6(this),this.vf=a,this.g.Co(this),this.g.rf(4))};
g.h.cancel=function(){this.Qh=!0;H6(this)};
g.h.WR=function(){this.pk=null;var a=(0,g.F)();0<=a-this.Cu?(2!=this.nj&&this.g.rf(3),H6(this),this.hi=2,F6(),I6(this)):Jza(this,this.Cu-a)};g.h=Mza.prototype;g.h.Yq=null;g.h.qe=null;g.h.No=!1;g.h.Gx=null;g.h.tn=null;g.h.Zq=null;g.h.ar=null;g.h.Je=null;g.h.Ag=-1;g.h.Uk=null;g.h.tk=null;g.h.connect=function(a){this.ar=a;a=N6(this.g,null,this.ar);F6();this.Gx=(0,g.F)();var b=this.g.I;null!=b?(this.Uk=b[0],(this.tk=b[1])?(this.Je=1,Nza(this)):(this.Je=2,P6(this))):(e6(a,"MODE","init"),this.qe=new B6(this,0,void 0,void 0,void 0),this.qe.gi=this.Yq,C6(this.qe,a,!1,null,!0),this.Je=0)};
g.h.SG=function(a){if(a)this.Je=2,P6(this);else{F6();var b=this.g;b.ff=b.bh.Ag;W6(b,9)}a&&this.rf(2)};
g.h.xq=function(a){return this.g.xq(a)};
g.h.abort=function(){this.qe&&(this.qe.cancel(),this.qe=null);this.Ag=-1};
g.h.Fx=function(){return!1};
g.h.mB=function(a,b){this.Ag=a.Vk;if(0==this.Je)if(b){try{var c=this.o.parse(b)}catch(d){c=this.g;c.ff=this.Ag;W6(c,2);return}this.Uk=c[0];this.tk=c[1]}else c=this.g,c.ff=this.Ag,W6(c,2);else if(2==this.Je)if(this.No)F6(),this.Zq=(0,g.F)();else if("11111"==b){if(F6(),this.No=!0,this.tn=(0,g.F)(),c=this.tn-this.Gx,!g.vd||g.rc(10)||500>c)this.Ag=200,this.qe.cancel(),F6(),O6(this.g,this,!0)}else F6(),this.tn=this.Zq=(0,g.F)(),this.No=!1};
g.h.Co=function(){this.Ag=this.qe.Vk;if(this.qe.vf)0==this.Je?this.tk?(this.Je=1,Nza(this)):(this.Je=2,P6(this)):2==this.Je&&((!g.vd||g.rc(10)?!this.No:200>this.Zq-this.tn)?(F6(),O6(this.g,this,!1)):(F6(),O6(this.g,this,!0)));else{0==this.Je?F6():2==this.Je&&F6();var a=this.g;a.ff=this.Ag;W6(a,2)}};
g.h.Nl=function(){return this.g.Nl()};
g.h.isActive=function(){return this.g.isActive()};
g.h.rf=function(a){this.g.rf(a)};g.h=Q6.prototype;g.h.Gk=null;g.h.Od=null;g.h.oc=null;g.h.Xq=null;g.h.wn=null;g.h.Wv=null;g.h.Ln=null;g.h.Cl=0;g.h.GN=0;g.h.qd=null;g.h.eh=null;g.h.tg=null;g.h.Uh=null;g.h.bh=null;g.h.tp=null;g.h.Bj=-1;g.h.Fy=-1;g.h.ff=-1;g.h.Jk=0;g.h.Xi=0;g.h.Sh=8;var X6=new g.zf;g.A(Pza,g.Ye);g.A(Qza,g.Ye);g.A(Rza,g.Ye);g.h=Q6.prototype;g.h.connect=function(a,b,c,d,e){F6();this.Xq=b;this.Gk=c||{};d&&g.t(e)&&(this.Gk.OSID=d,this.Gk.OAID=e);this.D?(K6((0,g.z)(this.xw,this,a),100),Vza(this)):this.xw(a)};
g.h.xw=function(a){this.bh=new Mza(this);this.bh.Yq=null;this.bh.o=this.C;this.bh.connect(a)};
g.h.Fx=function(){return 0==this.g};
g.h.rB=function(a){this.eh=null;Yza(this,a)};
g.h.qB=function(){this.tg=null;this.oc=new B6(this,0,this.A,"rpc",this.F);this.oc.gi=null;this.oc.dr=0;var a=this.Wv.clone();g.zm(a,"RID","rpc");g.zm(a,"SID",this.A);g.zm(a,"CI",this.tp?"0":"1");g.zm(a,"AID",this.Bj);R6(this,a);if(!g.vd||g.rc(10))g.zm(a,"TYPE","xmlhttp"),C6(this.oc,a,!0,this.Ln,!1);else{g.zm(a,"TYPE","html");var b=this.oc,c=!!this.Ln;b.nj=3;b.nh=d6(a.clone());Iza(b,c)}};
g.h.mB=function(a,b){if(0!=this.g&&(this.oc==a||this.Od==a))if(this.ff=a.Vk,this.Od==a&&3==this.g)if(7<this.Sh){try{var c=this.C.parse(b)}catch(f){c=null}if(g.xa(c)&&3==c.length)if(0==c[0])a:{if(!this.tg){if(this.oc)if(this.oc.Ll+3E3<this.Od.Ll)T6(this),this.oc.cancel(),this.oc=null;else break a;V6(this);F6()}}else this.Fy=c[1],0<this.Fy-this.Bj&&37500>c[2]&&this.tp&&0==this.Xi&&!this.Uh&&(this.Uh=K6((0,g.z)(this.jO,this),6E3));else W6(this,11)}else b!=sBa.LW.g&&W6(this,11);else if(this.oc==a&&T6(this),
!g.C(b)){c=this.C.parse(b);g.xa(c);for(var d=0;d<c.length;d++){var e=c[d];this.Bj=e[0];e=e[1];2==this.g?"c"==e[0]?(this.A=e[1],this.Ln=e[2],e=e[3],null!=e?this.Sh=e:this.Sh=6,this.g=3,this.qd&&this.qd.jw(this),this.Wv=N6(this,this.Nl()?this.Ln:null,this.Xq),Zza(this)):"stop"==e[0]&&W6(this,7):3==this.g&&("stop"==e[0]?W6(this,7):"noop"!=e[0]&&this.qd&&this.qd.iw(this,e),this.Xi=0)}}};
g.h.jO=function(){null!=this.Uh&&(this.Uh=null,this.oc.cancel(),this.oc=null,V6(this),F6())};
g.h.Co=function(a){if(this.oc==a){T6(this);this.oc=null;var b=2}else if(this.Od==a)this.Od=null,b=1;else return;this.ff=a.Vk;if(0!=this.g)if(a.vf)1==b?((0,g.F)(),X6.dispatchEvent(new Qza(X6,a.Hi?a.Hi.length:0)),S6(this),this.B.length=0):Zza(this);else{var c=a.hi,d;if(!(d=3==c||7==c||0==c&&0<this.ff)){if(d=1==b)this.Od||this.eh||1==this.g||2<=this.Jk?d=!1:(this.eh=K6((0,g.z)(this.rB,this,a),$za(this,this.Jk)),this.Jk++,d=!0);d=!(d||2==b&&V6(this))}if(d)switch(c){case 1:W6(this,5);break;case 4:W6(this,
10);break;case 3:W6(this,6);break;case 7:W6(this,12);break;default:W6(this,2)}}};
g.h.pH=function(a){if(!g.kb(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.tT=function(a){a?F6():(F6(),aAa(this,8))};
g.h.xq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.kx;a.G=!1;return a};
g.h.isActive=function(){return!!this.qd&&this.qd.isActive(this)};
g.h.rf=function(){X6.dispatchEvent(new Rza(X6))};
g.h.Nl=function(){return!(!g.vd||g.rc(10))};
g.h=bAa.prototype;g.h.jw=function(){};
g.h.iw=function(){};
g.h.hw=function(){};
g.h.lq=function(){};
g.h.hx=function(){return{}};
g.h.isActive=function(){return!0};g.A(Z6,g.L);Z6.prototype.A=function(){500<this.sc&&24E4>2*this.sc&&(this.sc*=2);this.B();this.o&&this.start()};
Z6.prototype.start=function(){g.Yt(this.g,this.sc);this.o=(0,g.F)()+this.sc};
Z6.prototype.stop=function(){this.g.stop();this.o=0};
Z6.prototype.isActive=function(){return this.g.isActive()};g.A($6,bAa);g.h=$6.prototype;g.h.subscribe=function(a,b,c){return this.A.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.A.unsubscribe(a,b,c)};
g.h.Id=function(a){return this.A.Id(a)};
g.h.T=function(a,b){return this.A.T.apply(this.A,arguments)};
g.h.dispose=function(){this.J||(this.J=!0,g.We(this.A),eAa(this),g.We(this.o),this.o=null)};
g.h.ka=function(){return this.J};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.I="";this.o.stop();this.C=a||null;this.B=b||0;a=this.L+"/test";b=this.L+"/bind";var d=new Q6("1",c?c.firstTestResults:null,c?c.secondTestResults:null,this.M),e=this.g;e&&(e.qd=null);d.qd=this;this.g=d;e?this.g.connect(a,b,this.D,e.A,e.Bj):c?this.g.connect(a,b,this.D,c.sessionId,c.arrayId):this.g.connect(a,b,this.D)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.ec(c,b);this.o.isActive()||2==(this.g?this.g.g:0)?this.F.push(c):a7(this)&&Wza(this.g,c)};
g.h.jw=function(){Y6(this.o);this.C=null;this.B=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)Wza(this.g,a[b])}this.T("handlerOpened")};
g.h.hw=function(a,b){var c=2==b&&401==this.g.ff;if(4!=b&&!c){if(6==b||410==this.g.ff)c=this.o,c.g.stop(),c.sc=500;this.o.start()}this.T("handlerError",b)};
g.h.lq=function(a,b,c){if(!this.o.isActive())this.T("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.F.push(d)}};
g.h.hx=function(){var a={v:2};this.I&&(a.gsessionid=this.I);0!=this.B&&(a.ui=""+this.B);0!=this.G&&(a.ui=""+this.G);this.C&&g.ec(a,this.C);return a};
g.h.iw=function(a,b){"S"==b[0]?this.I=b[1]:"gracefulReconnect"==b[0]?(Y6(this.o),this.o.start(),Uza(this.g)):this.T("handlerMessage",new cAa(b[0],b[1]))};
g.h.VT=function(){this.o.isActive();var a=this.g,b=0;a.oc&&b++;a.Od&&b++;0!=b?this.o.start():this.connect(this.C,this.B)};b7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
b7.prototype.A=function(a,b){a(Error("Request error: "+b.status))};
b7.prototype.C=function(a){a(Error("request timed out"))};var mAa=(0,g.F)(),e7=null,h7=Array(50),g7=-1,i7=!1;g.A(j7,g.ZF);j7.prototype.he=function(){return this.g};
j7.prototype.contains=function(a){return!!l6(this.g,a)};
j7.prototype.get=function(a){return a?m6(this.g,a):null};
j7.prototype.info=function(a){f7(this.F,a)};g.A(k7,g.ZF);var uBa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=k7.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.Aa)&&this.nD()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.Aa)||(g.xE(this.Aa),this.Aa=window.NaN)};
g.h.W=function(){this.stop();k7.Z.W.call(this)};
g.h.nD=function(){this.Aa=window.NaN;this.g=g.LE(c7(this.D,"/pairing/get_screen"),{method:"POST",Ob:{pairing_code:this.C},timeout:5E3,Hb:(0,g.z)(this.ZT,this),onError:(0,g.z)(this.XT,this),td:(0,g.z)(this.aU,this)})};
g.h.ZT=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.A;c.name=this.B;this.T("pairingComplete",new g6(c))};
g.h.XT=function(a){this.g=null;a.status&&404==a.status?this.o>=uBa.length?this.T("pairingFailed",Error("DIAL polling timed out")):(a=uBa[this.o],this.Aa=g.vE((0,g.z)(this.nD,this),a),this.o++):this.T("pairingFailed",Error("Server error "+a.status))};
g.h.aU=function(){this.g=null;this.T("pairingFailed",Error("Server not responding"))};g.A(m7,j7);g.h=m7.prototype;g.h.start=function(){l7(this)&&this.T("screenChange");!g.VG("yt-remote-lounge-token-expiration")&&qAa(this);g.xE(this.o);this.o=g.vE((0,g.z)(this.start,this),1E4)};
g.h.add=function(a,b){l7(this);nAa(this,a);n7(this,!1);this.T("screenChange");b(a);a.token||qAa(this)};
g.h.remove=function(a,b){var c=l7(this);pAa(this,a)&&(n7(this,!1),c=!0);b(a);c&&this.T("screenChange")};
g.h.pp=function(a,b,c,d){var e=l7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,n7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.T("screenChange")};
g.h.W=function(){g.xE(this.o);m7.Z.W.call(this)};
g.h.VH=function(a){l7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}n7(this,!b);b&&f7(this.F,"Missed "+b+" lounge tokens.")};
g.h.UH=function(a){f7(this.F,"Requesting lounge tokens failed: "+a)};g.A(p7,g.ZF);g.h=p7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.VG("yt-remote-fast-check-period")||"0",10);(this.B=(0,g.F)()-144E5<a?0:a)?r7(this):(this.B=(0,g.F)()+3E5,g.UG("yt-remote-fast-check-period",this.B),this.Mt())};
g.h.isEmpty=function(){return g.Yb(this.g)};
g.h.update=function(){o7("Updating availability on schedule.");var a=this.D(),b=g.Mb(this.g,function(b,d){return b&&!!m6(a,d)},this);
q7(this,b)};
g.h.W=function(){g.xE(this.A);this.A=window.NaN;this.o&&(this.o.abort(),this.o=null);p7.Z.W.call(this)};
g.h.Mt=function(){g.xE(this.A);this.A=window.NaN;this.o&&this.o.abort();var a=tAa(this);if(g.Qb(a)){var b=c7(this.C,"/pairing/get_screen_availability");this.o=d7(this.C,b,{lounge_token:g.Sb(a).join(",")},(0,g.z)(this.fR,this,a),(0,g.z)(this.eR,this))}else q7(this,{}),r7(this)};
g.h.fR=function(a,b){this.o=null;var c=g.Sb(tAa(this));if(g.Fb(c,g.Sb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;q7(this,d);r7(this)}else this.ac("Changing Screen set during request."),this.Mt()};
g.h.eR=function(a){this.ac("Screen availability failed: "+a);this.o=null;r7(this)};
g.h.ac=function(a){f7("OnlineScreenService",a)};g.A(s7,j7);g.h=s7.prototype;g.h.start=function(){this.A.start();this.o.start();this.g.length&&(this.T("screenChange"),this.o.isEmpty()||this.T("onlineScreenChange"))};
g.h.add=function(a,b,c){this.A.add(a,b,c)};
g.h.remove=function(a,b,c){this.A.remove(a,b,c);this.o.update()};
g.h.pp=function(a,b,c,d){this.A.contains(a)?this.A.pp(a,b,c,d):(a="Updating name of unknown screen: "+a.name,f7(this.F,a),d(Error(a)))};
g.h.he=function(a){return a?this.g:g.ub(this.g,(0,g.Jd)(this.B,function(a){return!this.contains(a)},this))};
g.h.oD=function(){return(0,g.Jd)(this.he(!0),function(a){return!!this.o.g[a.id]},this)};
g.h.pD=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new k7(this.D,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(a){g.We(f);d(t7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.We(f);e(a)});
f.start();return(0,g.z)(f.stop,f)};
g.h.cU=function(a,b,c,d){g.LE(c7(this.D,"/pairing/get_screen"),{method:"POST",Ob:{pairing_code:a},timeout:5E3,Hb:(0,g.z)(function(a,d){var e=new g6(d.screen||{});if(!e.name||xAa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);xAa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(t7(this,e))},this),
onError:(0,g.z)(function(a){d(Error("pairing request failed: "+a.status))},this),
td:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.h.W=function(){g.We(this.A);g.We(this.o);s7.Z.W.call(this)};
g.h.hI=function(){yAa(this);this.T("screenChange");this.o.update()};
s7.prototype.dispose=s7.prototype.dispose;g.A(v7,g.ZF);g.h=v7.prototype;g.h.Do=function(a){this.A=a;this.T("sessionScreen",this.A)};
g.h.oe=function(a){this.ka()||(a&&w7(this,""+a),this.A=null,this.T("sessionScreen",null))};
g.h.info=function(a){f7(this.M,a)};
g.h.rD=function(){return null};
g.h.Tt=function(a){var b=this.o;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){w7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.W=function(){this.Tt("");v7.Z.W.call(this)};g.A(x7,v7);g.h=x7.prototype;g.h.St=function(a){if(this.g){if(this.g==a)return;w7(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.D);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.C)}this.g=a;this.g.addUpdateListener(this.D);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.C);AAa(this)};
g.h.Cj=function(a){this.info("launchWithParams no-op for Cast: "+g.xg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.z)(function(){this.oe()},this),(0,g.z)(function(){this.oe(Error("Failed to stop receiver app."))},this)):this.oe(Error("Stopping cast device witout session."))};
g.h.Tt=g.y;g.h.W=function(){this.info("disposeInternal");g.xE(this.B);this.B=0;this.g&&(this.g.removeUpdateListener(this.D),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.C));this.g=null;x7.Z.W.call(this)};
g.h.gS=function(a,b){if(!this.ka())if(b){var c=g.ex(b);if(c){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.xg(c));switch(d){case "mdxSessionStatus":zAa(this,c.screenId);break;default:w7(this,"Unknown youtube message: "+d)}}else w7(this,"Unable to parse message.")}else w7(this,"No data in message.")};
g.h.yx=function(a,b,c,d){wAa(this.I,this.o.label,a,this.o.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(w7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.vE((0,g.z)(this.yx,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.rD=function(){return this.g};
g.h.dU=function(a){this.ka()||a||(w7(this,"Cast session died."),this.oe())};g.A(y7,v7);g.h=y7.prototype;g.h.St=function(a){this.B=a;this.B.addUpdateListener(this.L)};
g.h.Cj=function(a){this.C=a;this.F()};
g.h.stop=function(){this.g();this.g=g.y;g.xE(this.D);this.B?this.B.stop((0,g.z)(this.oe,this,null),(0,g.z)(this.oe,this,"Failed to stop DIAL device.")):this.oe()};
g.h.W=function(){this.g();this.g=g.y;g.xE(this.D);this.B&&this.B.removeUpdateListener(this.L);this.B=null;y7.Z.W.call(this)};
g.h.gU=function(a){this.ka()||a||(w7(this,"DIAL session died."),this.g(),this.g=g.y,this.oe())};
g.h.Nr=function(a){this.J=k6();if(this.C){var b=new window.chrome.cast.DialLaunchResponse(!0,CAa(this));a(b);BAa(this)}else this.F=(0,g.z)(function(){g.xE(this.D);this.F=g.y;this.D=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,CAa(this));a(b);BAa(this)},this),this.D=g.vE((0,g.z)(function(){this.F()},this),100)};
g.h.xJ=function(a,b){wAa(this.I,this.G.receiver.label,a,this.o.friendlyName,(0,g.z)(function(a){a&&a.token?(this.Do(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.Nr(b)},this),(0,g.z)(function(a){w7(this,"Failed to get DIAL screen: "+a);
this.Nr(b)},this))};g.A(z7,v7);z7.prototype.stop=function(){this.oe()};
z7.prototype.St=g.y;z7.prototype.Cj=function(){g.xE(this.g);this.g=window.NaN;var a=m6(this.I.he(),this.o.label);a?this.Do(a):this.oe(Error("No such screen"))};
z7.prototype.W=function(){g.xE(this.g);this.g=window.NaN;z7.Z.W.call(this)};g.A(A7,g.ZF);g.h=A7.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.F);this.G||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.z)(this.nB,this),(0,g.z)(this.QQ,this),d,e);c.customDialLaunchCallback=(0,g.z)(this.UO,this);window.chrome.cast.initialize(c,
(0,g.z)(function(){this.ka()||(window.chrome.cast.addReceiverActionListener(this.B),jAa(),this.o.subscribe("onlineScreenChange",(0,g.z)(this.qD,this)),this.A=EAa(this),window.chrome.cast.setCustomReceivers(this.A,g.y,(0,g.z)(function(a){this.ac("Failed to set initial custom receivers: "+g.xg(a))},this)),this.T("yt-remote-cast2-availability-change",C7(this)),b(!0))},this),(0,g.z)(function(a){this.ac("Failed to initialize API: "+g.xg(a));
b(!1)},this))};
g.h.dT=function(a,b){B7("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.A;if(!a||c&&c.id!=a)B7("Unsetting old screen status: "+this.g.o.friendlyName),D7(this,null)}if(a&&b){if(!this.g){c=m6(this.o.he(),a);if(!c){B7("setConnectedScreenStatus: Unknown screen.");return}var d=DAa(this,c);d||(B7("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.A.push(d),
window.chrome.cast.setCustomReceivers(this.A,g.y,(0,g.z)(function(a){this.ac("Failed to set initial custom receivers: "+g.xg(a))},this)));
B7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);D7(this,new z7(this.o,d),!0)}this.g.Tt(b)}else B7("setConnectedScreenStatus: no screen.")};
g.h.eT=function(a){this.ka()?this.ac("Setting connection data on disposed cast v2"):this.g?this.g.Cj(a):this.ac("Setting connection data without a session")};
g.h.fU=function(){this.ka()?this.ac("Stopping session on disposed cast v2"):this.g?(this.g.stop(),D7(this,null)):B7("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.z)(this.nB,this),(0,g.z)(this.jR,this))};
g.h.W=function(){this.o.unsubscribe("onlineScreenChange",(0,g.z)(this.qD,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.B);g.sb(g.x("yt.mdx.remote.debug.handlers_")||[],gAa);g.We(this.g);A7.Z.W.call(this)};
g.h.ac=function(a){f7("Controller",a)};
g.h.oB=function(a,b){this.g==a&&(b||D7(this,null),this.T("yt-remote-cast2-session-change",b))};
g.h.MQ=function(a,b){if(!this.ka())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),B7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.o.label!=a.label)B7("onReceiverAction_: Stopping active receiver: "+this.g.o.friendlyName),this.g.stop();else{B7("onReceiverAction_: Casting to active receiver.");this.g.A&&this.T("yt-remote-cast2-session-change",this.g.A);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:D7(this,
new z7(this.o,a));break;case window.chrome.cast.ReceiverType.DIAL:D7(this,new y7(this.o,a,this.D));break;case window.chrome.cast.ReceiverType.CAST:D7(this,new x7(this.o,a));break;default:this.ac("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.o.label==a.label?this.g.stop():this.ac("Stopping receiver w/o session: "+a.friendlyName)}else this.ac("onReceiverAction_ called without receiver.")};
g.h.UO=function(a){if(this.ka())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.ac("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.o:null;if(!c||c.label!=b.label)return this.ac("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.A)return B7("Reselecting dial screen."),
this.T("yt-remote-cast2-session-change",this.g.A),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.ac('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);D7(this,new y7(this.o,b,this.D))}b=this.g;b.G=a;return b.G.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.z)(b.xJ,b,(b.G.extraData||{}).screenId||null)):new window.Promise((0,g.z)(b.Nr,b))};
g.h.nB=function(a){if(!this.ka()){B7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)B7("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),D7(this,new x7(this.o,b),!0);else{this.ac("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.o,d=m6(this.o.he(),c.label);
d&&h6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(B7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.We(this.g),this.g=new x7(this.o,b),this.g.subscribe("sessionScreen",(0,g.z)(this.oB,this,this.g)),this.g.Cj(null));this.g.St(a)}}};
g.h.eU=function(){return this.g?this.g.rD():null};
g.h.jR=function(a){this.ka()||(this.ac("Failed to estabilish a session: "+g.xg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&D7(this,null))};
g.h.QQ=function(a){B7("Receiver availability updated: "+a);if(!this.ka()){var b=C7(this);this.C=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;C7(this)!=b&&this.T("yt-remote-cast2-availability-change",C7(this))}};
g.h.qD=function(){this.ka()||(this.A=EAa(this),B7("Updating custom receivers: "+g.xg(this.A)),window.chrome.cast.setCustomReceivers(this.A,g.y,(0,g.z)(function(){this.ac("Failed to set custom receivers.")},this)),this.T("yt-remote-cast2-availability-change",C7(this)))};
A7.prototype.setLaunchParams=A7.prototype.eT;A7.prototype.setConnectedScreenStatus=A7.prototype.dT;A7.prototype.stopSession=A7.prototype.fU;A7.prototype.getCastSession=A7.prototype.eU;A7.prototype.requestSession=A7.prototype.requestSession;A7.prototype.init=A7.prototype.init;A7.prototype.dispose=A7.prototype.dispose;var J7=[];O7.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";P7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.g=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.Lf=a.hasPrevious,this.hasNext=a.hasNext,this.G=a.playerTime,this.F=a.playerTimeAt,this.C=a.seekableStart,this.A=a.seekableEnd,this.I=a.duration,this.J=a.loadedTime,this.B=a.liveIngestionTime,this.D=!(0,window.isNaN)(this.B))};
O7.prototype.kb=function(){return 1==this.g};
O7.prototype.getDuration=function(){return this.D?this.I+Q7(this):this.I};
O7.prototype.clone=function(){return new O7(U7(this))};g.A(W7,g.ZF);g.h=W7.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.y,c8(this,"play")):a8(this,"play"),$7(this,1,S7(X7(this))),this.T("remotePlayerChange")):Y7(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.y,c8(this,"pause")):a8(this,"pause"),$7(this,2,S7(X7(this))),this.T("remotePlayerChange")):Y7(this,this.pause)};
g.h.mD=function(a){if(1==this.g){if(this.o){var b=X7(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.kb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.y,c8(this,"seekTo",{newTime:a}))}else a8(this,"seekTo",{newTime:a});$7(this,3,a);this.T("remotePlayerChange")}else Y7(this,g.Da(this.mD,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.y,c8(this,"stopVideo")):a8(this,"stopVideo");var a=X7(this);a.index=-1;a.videoId="";P7(a);Z7(this,a);this.T("remotePlayerChange")}else Y7(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=X7(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.z)(function(){b8("set receiver volume: "+d)},this),(0,g.z)(function(){this.ac("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.z)(function(){b8("set receiver muted: "+b)},this),(0,g.z)(function(){this.ac("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);a8(this,"setVolume",e)}c.muted=b;c.volume=a;Z7(this,c)}else Y7(this,g.Da(this.setVolume,a,b))};
g.h.sC=function(a,b){if(1==this.g){var c=X7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.xg(b.style),g.ec(d,c.o));a8(this,"setSubtitlesTrack",d);Z7(this,c)}else Y7(this,g.Da(this.sC,a,b))};
g.h.Hu=function(a,b){if(1==this.g){a8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Rc.id});var c=X7(this);c.audioTrackId=b.Rc.id;Z7(this,c)}else Y7(this,g.Da(this.Hu,a,b))};
g.h.lD=function(a,b){if(1==this.g){if(a&&b){var c=X7(this);T7(c,a,b);Z7(this,c)}a8(this,"previous")}else Y7(this,g.Da(this.lD,a,b))};
g.h.kD=function(a,b){if(1==this.g){if(a&&b){var c=X7(this);T7(c,a,b);Z7(this,c)}a8(this,"next")}else Y7(this,g.Da(this.kD,a,b))};
g.h.Lw=function(){1==this.g?a8(this,"dismissAutoplay"):Y7(this,this.Lw)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.T("proxyStateChange",a,this.g)}W7.Z.dispose.call(this)};
g.h.W=function(){QAa(this);this.B=null;this.C.clear();V7(this,null);W7.Z.W.call(this)};
g.h.Iu=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.T("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.lC(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.IQ=function(a,b){this.T(a,b)};
g.h.qO=function(a){if(!a)this.El(null),V7(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=X7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)b8("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,Z7(this,b)}};
g.h.El=function(a){b8("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),RAa(this),this.T("remotePlayerChange")};
g.h.pO=function(a){a?(RAa(this),this.T("remotePlayerChange")):this.El(null)};
g.h.DO=function(){var a=NAa();a&&V7(this,a)};
g.h.ac=function(a){f7("CP",a)};g.A(d8,g.ZF);g.h=d8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime;g.t(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.t(k)&&(l.currentIndex=k);c&&(this.fb.listId=c);this.fb.videoId=d;this.fb.index=k||0;this.fb.state=3;R7(this.fb,m);this.B="UNSUPPORTED";e8("Connecting with setPlaylist and params: "+g.xg(l));this.g.connect({method:"setPlaylist",params:g.xg(l)},a,lza())}else e8("Connecting without params"),
this.g.connect({},a,lza());TAa(this)};
g.h.dispose=function(){this.ka()||(this.T("beforeDispose"),f8(this,3));d8.Z.dispose.call(this)};
g.h.W=function(){g8(this);i8(this);h8(this);g.xE(this.I);this.I=window.NaN;g.xE(this.J);this.J=window.NaN;this.A=null;g.LF(this.R);this.R.length=0;this.g.dispose();d8.Z.W.call(this);this.B=this.F=this.o=this.fb=this.g=null};
g.h.MH=function(){this.D(2)};
g.h.uO=function(){e8("Channel opened");this.O&&(this.O=!1,h8(this),this.M=g.vE((0,g.z)(function(){e8("Timing out waiting for a screen.");this.D(1)},this),15E3));
pza(dAa(this.g),this.Y)};
g.h.rO=function(){e8("Channel closed");(0,window.isNaN)(this.C)?r6(!0):r6();this.dispose()};
g.h.sO=function(a){r6();(0,window.isNaN)(this.G())?(e8("Channel error: "+a+" without reconnection"),this.dispose()):(this.O=!0,e8("Channel error: "+a+" with reconnection in "+this.G()+" ms"),f8(this,2))};
g.h.tO=function(a){a.params?e8("Received: action="+a.action+", params="+g.xg(a.params)):e8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.ex(a.params.devices);this.o=(0,g.H)(a,function(a){return new f6(a)});
a=!!g.fb(this.o,function(a){return"LOUNGE_SCREEN"==a.type});
WAa(this,a);break;case "loungeScreenDisconnected":g.tb(this.o,function(a){return"LOUNGE_SCREEN"==a.type});
WAa(this,!1);break;case "remoteConnected":var b=new f6(g.ex(a.params.device));g.fb(this.o,function(a){return b?a.id==b.id:!1})||g.qb(this.o,b);
break;case "remoteDisconnected":b=new f6(g.ex(a.params.device));g.tb(this.o,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":YAa(this,a);break;case "nowPlaying":$Aa(this,a);break;case "onStateChange":ZAa(this,a);break;case "onAdStateChange":aBa(this,a);break;case "onVolumeChanged":bBa(this,a);break;case "onSubtitlesTrackChanged":XAa(this,a);break;case "nowAutoplaying":cBa(this,a);break;case "autoplayDismissed":this.T("autoplayDismissed");break;case "autoplayUpNext":this.F=a.params.videoId||null;this.T("autoplayUpNext",this.F);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.T("autoplayModeChange",this.B);"DISABLED"==this.B&&this.T("autoplayDismissed");break;case "onHasPreviousNextChanged":dBa(this,a);break;case "requestAssistedSignIn":this.T("assistedSignInRequested",a.params.authCode);break;default:e8("Unrecognized action: "+a.action)}};
g.h.OS=function(){if(this.A){var a=this.A;this.A=null;this.fb.videoId!=a&&j8(this,"getNowPlaying")}};
d8.prototype.subscribe=d8.prototype.subscribe;d8.prototype.unsubscribeByKey=d8.prototype.Id;d8.prototype.ea=function(){var a=3;this.ka()||(a=0,(0,window.isNaN)(this.G())?a7(this.g)&&(0,window.isNaN)(this.C)&&(a=1):a=2);return a};
d8.prototype.getProxyState=d8.prototype.ea;d8.prototype.D=function(a){e8("Disconnecting with "+a);g8(this);this.T("beforeDisconnect",a);1==a&&r6();eAa(this.g,a);this.dispose()};
d8.prototype.disconnect=d8.prototype.D;d8.prototype.da=function(){var a=this.fb;this.A&&(a=this.fb.clone(),T7(a,this.A,a.index));return U7(a)};
d8.prototype.getPlayerContextData=d8.prototype.da;
d8.prototype.ma=function(a){var b=new O7(a);b.videoId&&b.videoId!=this.fb.videoId&&(this.A=b.videoId,g.xE(this.I),this.I=g.vE((0,g.z)(this.OS,this),5E3));var c=[];this.fb.listId==b.listId&&this.fb.videoId==b.videoId&&this.fb.index==b.index||c.push("remoteQueueChange");this.fb.g==b.g&&this.fb.volume==b.volume&&this.fb.muted==b.muted&&S7(this.fb)==S7(b)&&g.xg(this.fb.o)==g.xg(b.o)||c.push("remotePlayerChange");this.fb.reset(a);(0,g.G)(c,function(a){this.T(a)},this)};
d8.prototype.setPlayerContextData=d8.prototype.ma;d8.prototype.X=function(){var a=this.g.D.id,b=g.fb(this.o,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
d8.prototype.getOtherConnectedRemoteId=d8.prototype.X;d8.prototype.G=function(){var a=this.g;return a.o.isActive()?a.o.o-(0,g.F)():window.NaN};
d8.prototype.getReconnectTimeout=d8.prototype.G;d8.prototype.aa=function(){return this.B||"UNSUPPORTED"};
d8.prototype.getAutoplayMode=d8.prototype.aa;d8.prototype.ca=function(){return this.F||""};
d8.prototype.getAutoplayVideoId=d8.prototype.ca;d8.prototype.ra=function(){if(!(0,window.isNaN)(this.G())){var a=this.g.o;g.Zt(a.g);a.start()}};
d8.prototype.reconnect=d8.prototype.ra;d8.prototype.ha=function(a,b){j8(this,a,b);VAa(this)};
d8.prototype.sendMessage=d8.prototype.ha;g.A(k8,j7);g.h=k8.prototype;g.h.he=function(a){return this.cd.$_gs(a)};
g.h.contains=function(a){return!!this.cd.$_c(a)};
g.h.get=function(a){return this.cd.$_g(a)};
g.h.start=function(){this.cd.$_st()};
g.h.add=function(a,b,c){this.cd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.cd.$_r(a,b,c)};
g.h.pp=function(a,b,c,d){this.cd.$_un(a,b,c,d)};
g.h.W=function(){for(var a=0,b=this.o.length;a<b;++a)this.cd.$_ubk(this.o[a]);this.o.length=0;this.cd=null;k8.Z.W.call(this)};
g.h.bU=function(){this.T("screenChange")};
g.h.oQ=function(){this.T("onlineScreenChange")};
s7.prototype.$_st=s7.prototype.start;s7.prototype.$_gspc=s7.prototype.cU;s7.prototype.$_gsppc=s7.prototype.pD;s7.prototype.$_c=s7.prototype.contains;s7.prototype.$_g=s7.prototype.get;s7.prototype.$_a=s7.prototype.add;s7.prototype.$_un=s7.prototype.pp;s7.prototype.$_r=s7.prototype.remove;s7.prototype.$_gs=s7.prototype.he;s7.prototype.$_gos=s7.prototype.oD;s7.prototype.$_s=s7.prototype.subscribe;s7.prototype.$_ubk=s7.prototype.Id;var l8=null,m8=null,B8=null,q8=[];g.p(C8,g.L);g.h=C8.prototype;
g.h.W=function(){g.L.prototype.W.call(this);this.B.stop();this.C.stop();this.L.stop();this.O();this.g.unsubscribe("proxyStateChange",this.lB,this);this.g.unsubscribe("remotePlayerChange",this.Gl,this);this.g.unsubscribe("remoteQueueChange",this.Eo,this);this.g.unsubscribe("autoplayUpNext",this.KA,this);this.g.unsubscribe("previousNextChange",this.iB,this);this.g.unsubscribe("nowAutoplaying",this.aB,this);this.g.unsubscribe("autoplayDismissed",this.JA,this);this.g=this.G=null};
g.h.vz=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(F8(this)){if(1081!=X7(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":X7(this.g).kb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.J.lj(c[0],c[1]);break;case "control_subtitles_set_track":G8(this,c[0]);break;case "control_set_audio_track":c=c[0],F8(this)&&this.g.Hu(this.o.ga(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.o.getCurrentTime();H8(this,0==c?void 0:c);break;case "control_seek":H8(this,c[0]);break;case "control_subtitles_set_track":G8(this,c[0]);break;case "control_set_audio_track":c=c[0],F8(this)&&this.g.Hu(this.o.ga(1).videoId,c)}};
g.h.oO=function(a){this.L.IH(a)};
g.h.BT=function(a){this.vz("control_subtitles_set_track",g.Yb(a)?null:a)};
g.h.FC=function(){var a=this.o.xc("captions","track");g.Yb(a)||G8(this,a)};
g.h.YA=function(a){if(F8(this)){this.g.unsubscribe("remotePlayerChange",this.Gl,this);var b=Math.round(a.volume);a=!!a.muted;var c=X7(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.M.start();this.g.subscribe("remotePlayerChange",this.Gl,this)}};
g.h.HP=function(){g.Yb(this.D)||pBa(this,this.D);this.F=!1};
g.h.lB=function(a,b){this.C.stop();2==b&&this.BC()};
g.h.Gl=function(){if(F8(this)){this.B.stop();var a=X7(this.g);switch(a.g){case 1081:case 1:E8(this,new g.FO(8));this.AC();break;case 1085:case 3:E8(this,new g.FO(9));break;case 1083:case 0:E8(this,new g.FO(2));this.J.stop();D8(this,this.o.ga().lengthSeconds);break;case 1084:E8(this,new g.FO(4));break;case 2:E8(this,new g.FO(4));D8(this,S7(a));break;case -1:E8(this,new g.FO(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.T("YTP_MDX_PLAYER_ERROR")},E8(this,new g.FO(128,a))}a=X7(this.g).o;
var b=this.D;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.D=a,pBa(this,a));a=X7(this.g);-1==a.volume||Math.round(this.o.getVolume())==a.volume&&this.o.isMuted()==a.muted||this.M.isActive()||this.dD()}else oBa(this)};
g.h.iB=function(){this.o.T("mdxpreviousnextchange")};
g.h.Eo=function(){F8(this)||oBa(this)};
g.h.RG=function(){this.g.Lw()};
g.h.KA=function(a){a&&(a=g.LE("/watch_queue_ajax",{method:"GET",Xc:{action_get_watch_queue_item:1,video_id:a},Hb:(0,g.z)(this.IR,this)}))&&(this.O=(0,g.z)(a.abort,a))};
g.h.IR=function(a,b){var c=new g.HN({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.o.T("mdxautoplayupnext",c)};
g.h.aB=function(a){(0,window.isNaN)(a)||this.o.T("mdxnowautoplaying",a)};
g.h.JA=function(){this.o.T("mdxautoplaycanceled")};
g.h.ZK=function(a,b){-1==X7(this.g).g?H8(this,a):b&&this.g.mD(a)};
g.h.dD=function(){if(F8(this)){var a=X7(this.g);this.A.Fa(this.R);a.muted?this.o.mute():this.o.Yf();this.o.setVolume(a.volume);this.R=this.A.P(this.o,"onVolumeChange",this.YA)}};
g.h.AC=function(){this.B.stop();if(!this.g.ka()){var a=X7(this.g);a.kb()&&E8(this,new g.FO(8));D8(this,S7(a));this.B.start()}};
g.h.BC=function(){this.C.stop();this.B.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.C.start()};g.p(I8,g.Y);I8.prototype.B=function(a){rBa(this,a.state)};g.p(J8,g.d_);J8.prototype.J=function(){var a=this.o.xc("remote","receivers");a&&1<a.length&&!this.o.xc("remote","quickCast")?(this.G=g.Hb(a,this.C,this),g.e_(this,(0,g.H)(a,this.C)),a=this.o.xc("remote","currentReceiver"),this.qf(this.C(a)),this.enable(!0)):this.enable(!1)};
J8.prototype.C=function(a){return a.key};
J8.prototype.pf=function(a){return"cast-selector-receiver"==a?g.T("YTP_MDX_CAST_SELECTOR"):this.G[a].name};
J8.prototype.sd=function(a){g.d_.prototype.sd.call(this,a);this.o.Gd("remote","currentReceiver",this.G[a]);this.B.Nb()};g.p(K8,g.EV);g.h=K8.prototype;g.h.create=function(){iBa(g.aM(g.X(this.g)));this.D.push(g.lG("yt-remote-before-disconnect",this.kO,this));this.D.push(g.lG("yt-remote-connection-change",this.RQ,this));this.D.push(g.lG("yt-remote-receiver-availability-change",this.jB,this));this.D.push(g.lG("yt-remote-auto-connect",this.PQ,this));this.D.push(g.lG("yt-remote-receiver-resumed",this.OQ,this));this.jB()};
g.h.load=function(){this.g.Ks();g.EV.prototype.load.call(this);this.C=new C8(this,this.g,this.o);var a=(a=nBa())?a.currentTime:0;var b=A8()?new W7(v8(),void 0):null;0==a&&b&&(a=S7(X7(b)));0!=a&&(this.I=a||0,this.g.T("progresssync",a,void 0));qBa(this,this.F,this.F);g.$_(this.g.app,6)};
g.h.unload=function(){this.g.T("mdxautoplaycanceled");this.B=this.A;g.Xe(this.C,this.o);this.o=this.C=null;g.EV.prototype.unload.call(this);g.$_(this.g.app,5)};
g.h.W=function(){g.mG(this.D);g.EV.prototype.W.call(this)};
g.h.pl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.vz.apply(this.C,[].concat([a],g.pa(c)))};
g.h.EH=function(){return this.loaded?this.C.suggestion:null};
g.h.Lf=function(){return this.o?X7(this.o).Lf:!1};
g.h.hasNext=function(){return this.o?X7(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.I};
g.h.CK=function(){var a=X7(this.o),b=this.g.ga();return{allowSeeking:this.g.dd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.D?a.B+Q7(a):a.B,isPeggedToLive:1>=(a.D?a.A+Q7(a):a.A)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.D?a.A+Q7(a):a.A,seekableStart:0<a.C?a.C+Q7(a):a.C}};
g.h.DK=function(){this.o&&this.o.kD()};
g.h.EK=function(){this.o&&this.o.lD()};
g.h.kO=function(a){1==a&&(this.J=this.o?X7(this.o):null)};
g.h.RQ=function(){var a=A8()?new W7(v8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.We(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.ga().videoId&&this.g.Cz(a.videoId,S7(a)));this.g.T("videodatachange","newdata",this.g.ga(),3)};
g.h.jB=function(){this.G=[this.A].concat(kBa());var a=w8()||this.A;L8(this,a);this.g.va("onMdxReceiversChange")};
g.h.PQ=function(){var a=w8();L8(this,a)};
g.h.OQ=function(){this.B=w8()};
g.h.BK=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?M7():L8(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&M7(),!0):!1}};
g.h.FK=function(){a8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.ud=function(){return!1};g.gY.remote=K8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 01:40:21 Nov 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:30:04 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 243.928
  exclusion.robots: 0.094
  exclusion.robots.policy: 0.082
  cdx.remote: 0.062
  esindex: 0.01
  LoadShardBlock: 107.963 (3)
  PetaboxLoader3.datanode: 114.475 (4)
  load_resource: 120.924
  PetaboxLoader3.resolve: 84.579
*/