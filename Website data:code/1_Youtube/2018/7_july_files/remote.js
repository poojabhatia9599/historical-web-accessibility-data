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

(function(g){var window=this;var gBa=function(a,b){return g.Vb(a,b)},S6=function(a){g.Fm(a,"zx",g.zb());
return a},T6=function(a,b,c){g.Aa(c)||(c=[String(c)]);
g.Im(a.g,b,c)},hBa=function(a,b){var c=[];
g.rk(b,function(a){try{var b=g.fD.prototype.l.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.eD(b)&&c.push(a):c.push(a)},a);
return c},iBa=function(a,b){var c=hBa(a,b);
(0,g.B)(c,function(a){g.fD.prototype.remove.call(this,a)},a)},jBa=function(a){if(a.zd){if(a.zd.locationOverrideToken)return{locationOverrideToken:a.zd.locationOverrideToken};
if(null!=a.zd.latitudeE7&&null!=a.zd.longitudeE7)return{latitudeE7:a.zd.latitudeE7,longitudeE7:a.zd.longitudeE7}}return null},kBa=function(a,b,c,d){var e=new g.wm(null,void 0);
a&&g.xm(e,a);b&&g.ym(e,b);c&&g.zm(e,c);d&&g.Am(e,d);return e},lBa=function(a){g.VF[a]&&(a=g.VF[a],(0,g.B)(a,function(a){g.TF[a]&&delete g.TF[a]}),a.length=0)},mBa=function(a){var b=g.SF();
if(b)if(b.clear(a),a)lBa(a);else for(var c in g.VF)lBa(c)},U6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.o=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.qm;this.g=this.l="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",nBa(this,a.capabilities||""),oBa(this,a.experiments||""),this.l=a.remoteControllerUrl||"",
this.g=a.localChannelEncryptionKey||"")},nBa=function(a,b){a.capabilities.clear();
(0,g.Ld)(b.split(","),g.Ga(gBa,pBa)).forEach(function(b){a.capabilities.add(b)})},oBa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},V6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},W6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},qBa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},rBa=function(a){return new V6(a)},sBa=function(a){return g.Aa(a)?(0,g.G)(a,rBa):[]},X6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},Y6=function(a){return g.Aa(a)?"["+(0,g.G)(a,X6).join(",")+"]":"null"},Z6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},tBa=function(a){return(0,g.G)(a,function(a){return{key:a.id,
name:a.name}})},$6=function(a,b){return g.Ma(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},a7=function(a,b){return g.Ma(a,function(a){return W6(a,b)})},uBa=function(){var a=(0,g.PG)();
a&&iBa(a,a.g.Vd(!0))},b7=function(){var a=g.SG("yt-remote-connected-devices")||[];
g.ib(a);return a},vBa=function(a){if(g.Ra(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.G)(a,function(a,b){return 0==b?a:a.substring(c.length)})},wBa=function(a){g.RG("yt-remote-connected-devices",a,86400)},d7=function(){if(c7)return c7;
var a=g.SG("yt-remote-device-id");a||(a=Z6(),g.RG("yt-remote-device-id",a,31536E3));for(var b=b7(),c=1,d=a;g.Qa(b,d);)c++,d=a+"#"+c;return c7=d},e7=function(){var a=b7(),b=d7();
g.Qa(a,b);g.UG()&&g.kb(a,b);a=vBa(a);if(g.Ra(a))try{g.BG("remote_sid")}catch(c){}else try{g.AG("remote_sid",a.join(","),-1)}catch(c){}},xBa=function(){return g.SG("yt-remote-session-browser-channel")},yBa=function(){return g.SG("yt-remote-local-screens")||[]},zBa=function(){g.RG("yt-remote-lounge-token-expiration",!0,86400)},ABa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.G)(yBa(),function(a){return a.loungeToken}),c=(0,g.G)(a,function(a){return a.loungeToken});
(0,g.em)(c,function(a){return!g.Qa(b,a)})&&zBa();
g.RG("yt-remote-local-screens",a,31536E3)},BBa=function(a,b){g.RG("yt-remote-session-browser-channel",a);
g.RG("yt-remote-session-screen-id",b);var c=b7(),d=d7();g.Qa(c,d)||c.push(d);wBa(c);e7()},f7=function(a){a||(g.TG("yt-remote-session-screen-id"),g.TG("yt-remote-session-video-id"));
e7();a=b7();g.Va(a,d7());wBa(a)},CBa=function(){if(!g7){var a=g.qD();
a&&(g7=new g.$C(a))}return g7?!!g7.get("yt-remote-use-staging-server"):!1},DBa=function(){var a=window.document.createElement("a");
g.ad(a,"https://web.archive.org/web/20180701003416/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Db(a)},EBa=function(a,b){var c=g.Ed("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.bd(c,g.ce("https://web.archive.org/web/20180701003416/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},FBa=function(){var a=DBa(),b=window.document.getElementById(a),c=b&&g.dF(b,"loaded");
c||b&&!c||(b=EBa(a,function(){g.dF(b,"loaded")||(g.cF(b,"loaded","true"),g.ZF(a),g.ZD(g.Ga(mBa,a),0))}))},h7=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},GBa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},i7=function(a){a.length?HBa(a.shift(),function(){i7(a)}):j7()},IBa=function(a){return"chrome-extension://"+a+k7},HBa=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},l7=function(a){return 0<=window.navigator.userAgent.indexOf(a)},j7=function(){var a=GBa();
a&&a(!1,"No cast extension found")},m7=function(){if(JBa){var a=2,b=GBa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;HBa("//web.archive.org/web/20180701003416/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",j7,c)}},KBa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(m7(),a({command:"cast.sender.init"}))},LBa=function(){m7();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);i7(["//web.archive.org/web/20180701003416/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+k7,"//web.archive.org/web/20180701003416/https://www.gstatic.com/eureka/clank"+k7])},n7=function(a,b,c){g.M.call(this);
this.C=null!=c?(0,g.z)(a,c):a;this.qd=b;this.B=(0,g.z)(this.TJ,this);this.g=!1;this.l=0;this.o=this.Ca=null;this.A=[]},o7=function(){},p7=function(a,b,c,d){this.g=a;
this.o=b;this.D=c;this.C=d||1;this.A=45E3;this.W=new g.Mm(this);this.l=new g.sg;this.l.setInterval(250)},NBa=function(a,b,c){a.Lj=1;
a.mh=S6(b.clone());a.Si=c;a.B=!0;MBa(a,null)},q7=function(a,b,c,d,e){a.Lj=1;
a.mh=S6(b.clone());a.Si=null;a.B=c;e&&(a.cE=!1);MBa(a,d)},MBa=function(a,b){a.Ck=(0,g.F)();
r7(a);a.Jh=a.mh.clone();T6(a.Jh,"t",a.C);a.Rm=0;a.Qc=a.g.Hr(a.g.Hm()?b:null);0<a.ws&&(a.Op=new g.Vk((0,g.z)(a.uF,a,a.Qc),a.ws));a.W.U(a.Qc,"readystatechange",a.sV);var c=a.ni?g.cc(a.ni):{};a.Si?(a.Cq="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Qc.send(a.Jh,a.Cq,a.Si,c)):(a.Cq="GET",a.cE&&!g.Ad&&(c.Connection="close"),a.Qc.send(a.Jh,a.Cq,null,c));a.g.yf(1)},QBa=function(a,b,c){for(var d=!0;!a.Xh&&a.Rm<c.length;){var e=OBa(a,c);
if(e==s7){4==b&&(a.nh=4,t7(15),d=!1);break}else if(e==PBa){a.nh=4;t7(16);d=!1;break}else u7(a,e)}4==b&&0==c.length&&(a.nh=1,t7(17),d=!1);a.Ef=a.Ef&&d;d||(v7(a),w7(a))},OBa=function(a,b){var c=a.Rm,d=b.indexOf("\n",c);
if(-1==d)return s7;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return PBa;d+=1;if(d+c>b.length)return s7;var e=b.substr(d,c);a.Rm=d+c;return e},SBa=function(a,b){a.Ck=(0,g.F)();
r7(a);var c=b?window.location.hostname:"";a.Jh=a.mh.clone();g.Fm(a.Jh,"DOMAIN",c);g.Fm(a.Jh,"t",a.C);try{a.Ff=new window.ActiveXObject("htmlfile")}catch(n){v7(a);a.nh=7;t7(22);w7(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in x7)k=x7[l];else if(l in RBa)k=x7[l]=RBa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=x7[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.cd(g.yc("b/12014412"),d);a.Ff.open();a.Ff.write(g.Vc(c));a.Ff.close();a.Ff.parentWindow.m=(0,g.z)(a.BU,a);a.Ff.parentWindow.d=(0,g.z)(a.lD,a,!0);a.Ff.parentWindow.rpcClose=(0,g.z)(a.lD,a,!1);c=a.Ff.createElement("DIV");a.Ff.parentWindow.document.body.appendChild(c);d=g.Mc(a.Jh.toString());d=g.sb(g.Jc(d));d=g.cd(g.yc("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=g.Vc(d);
a.g.yf(1)},r7=function(a){a.Yv=(0,g.F)()+a.A;
TBa(a,a.A)},TBa=function(a,b){if(null!=a.Sk)throw Error("WatchDog timer not null");
a.Sk=y7((0,g.z)(a.RU,a),b)},z7=function(a){a.Sk&&(g.w.clearTimeout(a.Sk),a.Sk=null)},w7=function(a){a.g.rz()||a.Xh||a.g.Ap(a)},v7=function(a){z7(a);
g.$e(a.Op);a.Op=null;a.l.stop();g.Sm(a.W);if(a.Qc){var b=a.Qc;a.Qc=null;b.abort();b.dispose()}a.Ff&&(a.Ff=null)},u7=function(a,b){try{a.g.eD(a,b),a.g.yf(4)}catch(c){}},VBa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;UBa(a,b,function(e){e?c(!0):g.w.setTimeout(function(){VBa(a,b,c,d,f)},f)})}},UBa=function(a,b,c){var d=new window.Image;
d.onload=function(){try{A7(d),c(!0)}catch(e){}};
d.onerror=function(){try{A7(d),c(!1)}catch(e){}};
d.onabort=function(){try{A7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{A7(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},A7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},WBa=function(a){this.g=a;
this.l=new o7},XBa=function(a){var b=B7(a.g,a.al,"/mail/images/cleardot.gif");
S6(b);VBa(b.toString(),5E3,(0,g.z)(a.fJ,a),3,2E3);a.yf(1)},D7=function(a){var b=a.g.H;
if(null!=b)t7(5),b?(t7(11),C7(a.g,a,!1)):(t7(12),C7(a.g,a,!0));else if(a.we=new p7(a,void 0,void 0,void 0),a.we.ni=a.ts,b=a.g,b=B7(b,b.Hm()?a.Fl:null,a.us),t7(5),!g.yd||g.uc(10))T6(b,"TYPE","xmlhttp"),q7(a.we,b,!1,a.Fl,!1);else{T6(b,"TYPE","html");var c=a.we;a=!!a.Fl;c.Lj=3;c.mh=S6(b.clone());SBa(c,a)}},E7=function(a,b,c){this.g=1;
this.l=[];this.A=[];this.B=new o7;this.F=a||null;this.H=null!=b?b:null;this.C=c||!1},YBa=function(a,b){this.g=a;
this.map=b;this.context=null},ZBa=function(a){g.bf.call(this,"statevent",a)},$Ba=function(a,b){g.bf.call(this,"timingevent",a);
this.size=b},aCa=function(a){g.bf.call(this,"serverreachability",a)},dCa=function(a){bCa(a);
if(3==a.g){var b=a.pm++,c=a.ko.clone();g.Fm(c,"SID",a.o);g.Fm(c,"RID",b);g.Fm(c,"TYPE","terminate");F7(a,c);b=new p7(a,a.o,b,void 0);b.Lj=2;b.mh=S6(c.clone());(new window.Image).src=b.mh;b.Ck=(0,g.F)();r7(b)}cCa(a)},eCa=function(a){a.AJ(1,0);
a.ko=B7(a,null,a.rs);G7(a)},bCa=function(a){a.ah&&(a.ah.abort(),a.ah=null);
a.tc&&(a.tc.cancel(),a.tc=null);a.sg&&(g.w.clearTimeout(a.sg),a.sg=null);H7(a);a.be&&(a.be.cancel(),a.be=null);a.eh&&(g.w.clearTimeout(a.eh),a.eh=null)},fCa=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.l.push(new YBa(a.kQ++,b));2!=a.g&&3!=a.g||G7(a)},G7=function(a){a.be||a.eh||(a.eh=y7((0,g.z)(a.jD,a),0),a.Aj=0)},hCa=function(a,b){if(1==a.g){if(!b){a.pm=Math.floor(1E5*Math.random());
var c=a.pm++,d=new p7(a,"",c,void 0);d.ni=null;var e=I7(a),f=a.ko.clone();g.Fm(f,"RID",c);g.Fm(f,"CVER","1");F7(a,f);NBa(d,f,e);a.be=d;a.g=2}}else 3==a.g&&(b?gCa(a,b):0==a.l.length||a.be||gCa(a))},gCa=function(a,b){if(b)if(6<a.Zh){a.l=a.A.concat(a.l);
a.A.length=0;var c=a.pm-1;var d=I7(a)}else c=b.D,d=b.Si;else c=a.pm++,d=I7(a);var e=a.ko.clone();g.Fm(e,"SID",a.o);g.Fm(e,"RID",c);g.Fm(e,"AID",a.Zj);F7(a,e);c=new p7(a,a.o,c,a.Aj+1);c.ni=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.be=c;NBa(c,e,d)},F7=function(a,b){if(a.pd){var c=a.pd.Xy();
c&&g.Lb(c,function(a,c){g.Fm(b,c,a)})}},I7=function(a){var b=Math.min(a.l.length,1E3),c=["count="+b];
if(6<a.Zh&&0<b){var d=a.l[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.l[e].g,k=a.l[e].map;f=6>=a.Zh?e:f-d;try{g.Lb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.A=a.A.concat(a.l.splice(0,b));
return c.join("&")},iCa=function(a){a.tc||a.sg||(a.D=1,a.sg=y7((0,g.z)(a.iD,a),0),a.nj=0)},J7=function(a){if(a.tc||a.sg||3<=a.nj)return!1;
a.D++;a.sg=y7((0,g.z)(a.iD,a),jCa(a,a.nj));a.nj++;return!0},C7=function(a,b,c){a.Bq=c;
a.Uf=b.Dg;a.C||eCa(a)},H7=function(a){null!=a.ci&&(g.w.clearTimeout(a.ci),a.ci=null)},jCa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},K7=function(a,b){if(2==b||9==b){var c=null;
a.pd&&(c=null);var d=(0,g.z)(a.lW,a);c||(c=new g.wm("//web.archive.org/web/20180701003416/https://www.google.com/images/cleardot.gif"),S6(c));UBa(c.toString(),1E4,d)}else t7(2);kCa(a,b)},kCa=function(a,b){a.g=0;
a.pd&&a.pd.Px(b);cCa(a);bCa(a)},cCa=function(a){a.g=0;
a.Uf=-1;if(a.pd)if(0==a.A.length&&0==a.l.length)a.pd.ur();else{g.Ya(a.A);var b=g.Ya(a.l);a.A.length=0;a.l.length=0;a.pd.ur(b)}},B7=function(a,b,c){var d=g.Gm(c);
if(""!=d.l)b&&g.ym(d,b+"."+d.l),g.zm(d,d.B);else{var e=window.location;d=kBa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.rl&&g.Lb(a.rl,function(a,b){g.Fm(d,b,a)});
g.Fm(d,"VER",a.Zh);F7(a,d);return d},y7=function(a,b){if(!g.Ca(a))throw Error("Fn must not be null and must be a function");
return g.w.setTimeout(function(){a()},b)},t7=function(a){L7.dispatchEvent(new ZBa(L7,a))},lCa=function(){},mCa=function(a,b){this.action=a;
this.params=b||{}},M7=function(a,b){g.M.call(this);
this.g=new g.Yt(this.sU,0,this);g.N(this,this.g);this.qd=5E3;this.l=0;if(g.Ca(a))b&&(a=(0,g.z)(a,b));else if(a&&g.Ca(a.handleEvent))a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.o=a},N7=function(a,b,c){this.J=a;
this.C=b;this.o=new g.ZC;this.l=new M7(this.VW,this);this.g=this.Ya=null;this.I=!1;this.B=null;this.H="";this.F=this.A=0;this.D=[];this.K=c||!1},nCa=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.Bq,sessionId:a.g.o,arrayId:a.g.Zj}},oCa=function(a,b){a.F=b||0;
a.l.stop();a.g&&(3==a.g.g&&hCa(a.g),dCa(a.g));a.F=0},O7=function(a){return!!a.g&&3==a.g.g},pCa=function(a,b){(a.C.loungeIdToken=b)||a.l.stop()},P7=function(a){this.port=this.domain="";
this.g="/api/lounge";this.l=!0;a=a||window.document.location.href;var b=g.Ig(a)||"";b&&(this.port=":"+b);this.domain=g.Hg(a)||"";a=g.Jb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Cb(a,"10.0")&&(this.l=!1))},Q7=function(a,b){var c=a.g;
if(g.t(void 0)?0:a.l)c="https://"+a.domain+a.port+a.g;return g.Rg(c+b,{})},R7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ga(a.A,d,!0),onError:g.Ga(a.o,e),wd:g.Ga(a.B,e)};c&&(a.Nb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.pE(b,a)},tCa=function(){var a=qCa;
rCa();S7.push(a);sCa(S7)},T7=function(a,b){rCa();
var c=S7,d=uCa(a,String(b));g.Ra(c)?vCa(d):(sCa(c),(0,g.B)(c,function(a){a(d)}))},rCa=function(){S7||(S7=g.x("yt.mdx.remote.debug.handlers_")||[],g.va("yt.mdx.remote.debug.handlers_",S7,void 0))},vCa=function(a){var b=(U7+1)%50;
U7=b;V7[b]=a;W7||(W7=49==b)},sCa=function(a){var b=V7;
if(b[0]){var c=U7,d=W7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.B)(a,function(a){a(e)})}while(d!=c);
V7=Array(50);U7=-1;W7=!1}},uCa=function(a,b){var c=((0,g.F)()-wCa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},X7=function(a){g.KF.call(this);
this.D=a;this.g=[]},xCa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},yCa=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Ld)(a.g,function(a){return!!$6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=xCa(a,b[d])||c;return c},zCa=function(a,b){var c=a.g.length;
a.g=(0,g.Ld)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c},Y7=function(a,b,c,d){g.KF.call(this);
this.C=a;this.B=b;this.o=c;this.A=d;this.l=0;this.g=null;this.Ca=window.NaN},$7=function(a){X7.call(this,"LocalScreenService");
this.o=a;this.l=window.NaN;Z7(this);this.info("Initializing with "+Y6(this.g))},ACa=function(a){if(a.g.length){var b=(0,g.G)(a.g,function(a){return a.id}),c=Q7(a.o,"/pairing/get_lounge_token_batch");
R7(a.o,c,{screen_ids:b.join(",")},(0,g.z)(a.gK,a),(0,g.z)(a.fK,a))}},Z7=function(a){var b=sBa(yBa());
b=(0,g.Ld)(b,function(a){return!a.uuid});
return yCa(a,b)},a8=function(a,b){ABa((0,g.G)(a.g,qBa));
b&&zBa()},c8=function(a,b){g.KF.call(this);
this.C=b;var c=g.SG("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Qa(c,l)}this.g=d;this.B=a;this.o=this.A=window.NaN;this.l=null;b8("Initialized with "+g.zg(this.g))},BCa=function(a,b,c){var d=Q7(a.B,"/pairing/get_screen_availability");
R7(a.B,d,{lounge_token:b.token},(0,g.z)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},d8=function(a,b){a:if(g.Pb(b)!=g.Pb(a.g))var c=!1;
else{c=g.Sb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(b8("Updated online screens: "+g.zg(a.g)),a.g=b,a.T("screenChange"));CCa(a)},e8=function(a){(0,window.isNaN)(a.o)||g.aE(a.o);
a.o=g.ZD((0,g.z)(a.kv,a),0<a.A&&a.A<(0,g.F)()?2E4:1E4)},b8=function(a){T7("OnlineScreenService",a)},DCa=function(a){var b={};
(0,g.B)(a.C(),function(a){a.token?b[a.token]=a.id:this.fc("Requesting availability of screen w/o lounge token.")});
return b},CCa=function(a){a=g.Sb(g.Mb(a.g,function(a){return a}));
g.ib(a);a.length?g.RG("yt-remote-online-screen-ids",a.join(","),60):g.TG("yt-remote-online-screen-ids")},f8=function(a){X7.call(this,"ScreenService");
this.C=a;this.l=this.o=null;this.A=[];this.B={};ECa(this)},GCa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.oe();if(k=(c?a7(k,c):null)||a7(k,b)){k.uuid=b;var l=g8(a,k);BCa(a.l,l,function(a){e(a?l:null)})}else c?FCa(a,c,(0,g.z)(function(a){var f=g8(this,new V6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));BCa(this.l,f,function(a){e(a?f:null)})},a),f):e(null)},HCa=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},FCa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Nb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.pE(Q7(a.C,"/pairing/get_lounge_token_batch"),e)},ICa=function(a){a.g=a.o.oe();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+Y6(a.g))},ECa=function(a){h8(a);
a.o=new $7(a.C);a.o.subscribe("screenChange",(0,g.z)(a.vK,a));ICa(a);a.A=sBa(g.SG("yt-remote-automatic-screen-cache")||[]);h8(a);a.info("Initializing automatic screens: "+Y6(a.A));a.l=new c8(a.C,(0,g.z)(a.oe,a,!0));a.l.subscribe("screenChange",(0,g.z)(function(){this.T("onlineScreenChange")},a))},g8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=a7(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.RG("yt-remote-automatic-screen-cache",(0,g.G)(a.A,qBa)));h8(a);a.B[b.uuid]=b.id;g.RG("yt-remote-device-id-map",a.B,31536E3);return b},h8=function(a){a.B=g.SG("yt-remote-device-id-map")||{}},i8=function(a,b,c){g.KF.call(this);
this.K=c;this.H=a;this.l=b;this.o=null},j8=function(a,b){T7(a.K,b)},k8=function(a,b){i8.call(this,a,b,"CastSession");
this.g=null;this.A=0;this.C=(0,g.z)(this.bX,this);this.B=(0,g.z)(this.dV,this);this.A=g.ZD((0,g.z)(function(){JCa(this,null)},this),12E4)},KCa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.zg(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.y,(0,g.z)(function(){j8(this,"Failed to send message: getMdxSessionStatus.")},a)):j8(a,"Sending yt message without session: "+g.zg(b))},JCa=function(a,b){g.aE(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.o||a.o.id!=b){var c=(0,g.z)(a.Bp,a),d=(0,g.z)(a.te,a);a.iz(b,c,d,5)}}else a.te(Error("Waiting for session status timed out."))},l8=function(a,b,c){i8.call(this,a,b,"DialSession");
this.A=this.F=null;this.I="";this.M=c;this.B=null;this.D=g.y;this.C=window.NaN;this.J=(0,g.z)(this.eX,this);this.g=g.y},LCa=function(a){a.g=a.H.BF(a.I,a.l.label,a.l.friendlyName,(0,g.z)(function(a){this.g=g.y;
this.Bp(a)},a),(0,g.z)(function(a){this.g=g.y;
this.te(a)},a))},MCa=function(a){var b={};
b.pairingCode=a.I;b.theme=a.M;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}CBa()&&(b.env_useStageMdx=1);return g.Pg(b)},m8=function(a,b){i8.call(this,a,b,"ManualSession");
this.g=g.ZD((0,g.z)(this.bk,this,null),150)},n8=function(a,b,c,d){g.KF.call(this);
this.l=a;this.D=b||"233637DE";this.C=c||"cl";this.F=d||!1;this.g=null;this.B=!1;this.o=[];this.A=(0,g.z)(this.AT,this)},NCa=function(a,b){return b?g.Ma(a.o,function(a){return W6(b,a.label)},a):null},o8=function(a){T7("Controller",a)},qCa=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},p8=function(a){return a.B||!!a.o.length||!!a.g},q8=function(a,b,c){b!=a.g&&(g.$e(a.g),(a.g=b)?(c?a.T("yt-remote-cast2-receiver-resumed",b.l):a.T("yt-remote-cast2-receiver-selected",
b.l),b.subscribe("sessionScreen",(0,g.z)(a.gD,a,b)),b.o?a.T("yt-remote-cast2-session-change",b.o):c&&a.g.bk(null)):a.T("yt-remote-cast2-session-change",null))},OCa=function(a){var b=a.l.AF(),c=a.g&&a.g.l;
a=(0,g.G)(b,function(a){c&&W6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=NCa(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},UCa=function(a,b,c,d,e,f,k){PCa()?QCa(b,e,f,k)&&(s8(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?RCa(a,c):(window.__onGCastApiAvailable=function(b,d){b?RCa(a,c):(t8("Failed to load cast API: "+d),u8(!1),s8(!1),g.TG("yt-remote-cast-available"),g.TG("yt-remote-cast-receiver"),SCa(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20180701003416/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):FBa():l7("CriOS")?KBa():l7("Android")&&l7("Chrome/")&&window.navigator.presentation?LBa():window.chrome&&window.navigator.presentation&&!l7("Edge")?(m7(),i7(TCa.map(IBa))):j7())):r8("Cannot initialize because not running Chrome")},SCa=function(){r8("dispose");
var a=v8();a&&a.dispose();g.va("yt.mdx.remote.cloudview.instance_",null,void 0);VCa(!1);g.XF(w8);w8.length=0},x8=function(){return!!g.SG("yt-remote-cast-installed")},WCa=function(){var a=g.SG("yt-remote-cast-receiver");
return a?a.friendlyName:null},XCa=function(){r8("clearCurrentReceiver");
g.TG("yt-remote-cast-receiver")},YCa=function(){return x8()?v8()?v8().getCastSession():(t8("getCastSelector: Cast is not initialized."),null):(t8("getCastSelector: Cast API is not installed!"),null)},z8=function(){x8()?v8()?y8()?(r8("Requesting cast selector."),v8().requestSession()):(r8("Wait for cast API to be ready to request the session."),w8.push(g.WF("yt-remote-cast2-api-ready",z8))):t8("requestCastSelector: Cast is not initialized."):t8("requestCastSelector: Cast API is not installed!")},A8=
function(a,b){y8()?v8().setConnectedScreenStatus(a,b):t8("setConnectedScreenStatus called before ready.")},PCa=function(){var a=0<=g.Jb.search(/ (CrMo|Chrome|CriOS)\//);
return g.EI||a},ZCa=function(a,b){v8().init(a,b)},QCa=function(a,b,c,d){var e=!1;
v8()||(a=new n8(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.RG("yt-remote-cast-available",a);g.$F("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){r8("onReceiverSelected: "+a.friendlyName);
g.RG("yt-remote-cast-receiver",a);g.$F("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){r8("onReceiverResumed: "+a.friendlyName);
g.RG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){r8("onSessionChange: "+X6(a));
a||g.TG("yt-remote-cast-receiver");g.$F("yt-remote-cast2-session-change",a)}),g.va("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
r8("cloudview.createSingleton_: "+e);return e},v8=function(){return g.x("yt.mdx.remote.cloudview.instance_")},RCa=function(a,b){u8(!0);
s8(!1);ZCa(a,function(a){a?(VCa(!0),g.ZF("yt-remote-cast2-api-ready")):(t8("Failed to initialize cast API."),u8(!1),g.TG("yt-remote-cast-available"),g.TG("yt-remote-cast-receiver"),SCa());b(a)})},r8=function(a){T7("cloudview",a)},t8=function(a){T7("cloudview",a)},u8=function(a){r8("setCastInstalled_ "+a);
g.RG("yt-remote-cast-installed",a)},y8=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},VCa=function(a){r8("setApiReady_ "+a);
g.va("yt.mdx.remote.cloudview.apiReady_",a,void 0)},s8=function(a){g.va("yt.mdx.remote.cloudview.initializing_",a,void 0)},B8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.g=-1;this.muted=!1;this.audioTrackId=null;this.D=this.F=0;this.l=null;this.hasNext=this.Xf=!1;this.I=this.H=this.o=this.B=0;this.A=window.NaN;this.C=!1;this.reset(a)},C8=function(a){a.audioTrackId=null;
a.l=null;a.g=-1;a.Xf=!1;a.hasNext=!1;a.F=0;a.D=(0,g.F)();a.B=0;a.o=0;a.H=0;a.I=0;a.A=window.NaN;a.C=!1},D8=function(a){return a.kb()?((0,g.F)()-a.D)/1E3:0},E8=function(a,b){a.F=b;
a.D=(0,g.F)()},F8=function(a){switch(a.g){case 1:case 1081:return((0,g.F)()-a.D)/1E3+a.F;
case -1E3:return 0}return a.F},G8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&C8(a)},H8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.g;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.dc(a.l);b.hasPrevious=a.Xf;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.D;b.seekableStart=a.B;b.seekableEnd=a.o;b.duration=a.H;b.loadedTime=a.I;b.liveIngestionTime=a.A;return b},J8=function(a,b){g.KF.call(this);
this.g=0;this.A=a;this.C=[];this.B=new g.pC;this.o=this.l=null;this.H=(0,g.z)(this.UQ,this);this.D=(0,g.z)(this.sm,this);this.F=(0,g.z)(this.TQ,this);this.I=(0,g.z)(this.gR,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.gw,this),$Ca(this))):c=3;0!=c&&(b?this.gw(c):g.ZD((0,g.z)(function(){this.gw(c)},this),0));
var d=YCa();d&&I8(this,d);this.subscribe("yt-remote-cast2-session-change",this.I)},K8=function(a){return new B8(a.A.getPlayerContextData())},$Ca=function(a){(0,g.B)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.C.push(this.A.subscribe(a,g.Ga(this.vT,a),this))},a)},aDa=function(a){(0,g.B)(a.C,function(a){this.A.unsubscribeByKey(a)},a);
a.C.length=0},L8=function(a,b){50>a.B.Dc()&&g.rC(a.B,b)},N8=function(a,b,c){var d=K8(a);
E8(d,c);-1E3!=d.g&&(d.g=b);M8(a,d)},O8=function(a,b,c){a.A.sendMessage(b,c)},M8=function(a,b){aDa(a);
a.A.setPlayerContextData(H8(b));$Ca(a)},I8=function(a,b){a.o&&(a.o.removeUpdateListener(a.H),a.o.removeMediaListener(a.D),a.sm(null));
a.o=b;a.o&&(T7("CP","Setting cast session: "+a.o.sessionId),a.o.addUpdateListener(a.H),a.o.addMediaListener(a.D),a.o.media.length&&a.sm(a.o.media[0]))},bDa=function(a){var b=a.l.media,c=a.l.customData;
if(b&&c){var d=K8(a);b.contentId!=d.videoId&&T7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;E8(d,a.l.getEstimatedTime());M8(a,d)}else T7("CP","No cast media video. Ignoring state update.")},P8=function(a,b,c){return(0,g.z)(function(a){this.fc("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.fc("Retrying "+b+" using MDx browser channel."),O8(this,b,c))},a)},Q8=function(a,b,c){g.KF.call(this);
this.B=window.NaN;this.M=!1;this.I=this.H=this.J=this.K=window.NaN;this.R=[];this.A=this.D=this.o=this.Za=this.g=null;this.ra=a;this.R.push(g.tF(window,"beforeunload",(0,g.z)(this.XJ,this)));this.l=[];this.Za=new B8;this.Z=b.id;this.g=cDa(this,c);this.g.subscribe("handlerOpened",this.YQ,this);this.g.subscribe("handlerClosed",this.VQ,this);this.g.subscribe("handlerError",this.WQ,this);this.g.subscribe("handlerMessage",this.XQ,this);pCa(this.g,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.Za.videoId;g.UG()&&g.RG("yt-remote-session-video-id",a)},this)},R8=function(a){T7("conn",a)},cDa=function(a,b){return new N7(Q7(a.ra,"/bc"),b)},S8=function(a,b){a.T("proxyStateChange",b)},dDa=function(a){a.B=g.ZD((0,g.z)(function(){R8("Connecting timeout");
this.C(1)},a),2E4)},T8=function(a){g.aE(a.B);
a.B=window.NaN},U8=function(a){g.aE(a.K);
a.K=window.NaN},eDa=function(a){V8(a);
a.J=g.ZD((0,g.z)(function(){W8(this,"getNowPlaying")},a),2E4)},V8=function(a){g.aE(a.J);
a.J=window.NaN},gDa=function(a,b){b&&(T8(a),U8(a));
b==(O7(a.g)&&(0,window.isNaN)(a.B))?b&&(S8(a,1),W8(a,"getSubtitlesTrack")):b?(a.X()&&a.Za.reset(),S8(a,1),W8(a,"getNowPlaying"),fDa(a)):a.C(1)},hDa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Za.videoId&&(g.Yb(b.params)?a.Za.l=null:a.Za.l=b.params,a.T("remotePlayerChange"))},iDa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.Za.listId=b.params.listId||a.Za.listId;G8(a.Za,c,d);a.T("remoteQueueChange")},kDa=function(a,b){b.params=b.params||{};
iDa(a,b);jDa(a,b);a.T("autoplayDismissed")},jDa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
E8(a.Za,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.Za.g&&(c=-1E3);a.Za.g=c;c=Number(b.params.loadedTime);a.Za.I=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.Za.H=(0,window.isNaN)(c)?0:c;c=a.Za;var d=Number(b.params.liveIngestionTime);c.A=d;c.C=(0,window.isNaN)(d)?!1:!0;c=a.Za;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.B=(0,window.isNaN)(d)?0:d;c.o=(0,window.isNaN)(e)?0:e;1==a.Za.g?eDa(a):V8(a);
a.T("remotePlayerChange")},lDa=function(a,b){if(-1E3!=a.Za.g){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Za.g=c;c=(0,window.parseInt)(b.params.currentTime,10);E8(a.Za,(0,window.isNaN)(c)?0:c);a.T("remotePlayerChange")}},mDa=function(a,b){var c="true"==b.params.muted;
a.Za.volume=(0,window.parseInt)(b.params.volume,10);a.Za.muted=c;a.T("remotePlayerChange")},nDa=function(a,b){a.D=b.params.videoId;
a.T("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},oDa=function(a,b){var c="true"==b.params.hasNext;
a.Za.Xf="true"==b.params.hasPrevious;a.Za.hasNext=c;a.T("previousNextChange")},fDa=function(a){g.aE(a.I);
a.I=g.ZD((0,g.z)(a.C,a,1),864E5)},W8=function(a,b,c){c?R8("Sending: action="+b+", params="+g.zg(c)):R8("Sending: action="+b);
a.g.sendMessage(b,c)},X8=function(a){X7.call(this,"ScreenServiceProxy");
this.fd=a;this.l=[];this.l.push(this.fd.$_s("screenChange",(0,g.z)(this.ZW,this)));this.l.push(this.fd.$_s("onlineScreenChange",(0,g.z)(this.XS,this)))},tDa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.TD("MDX_CONFIG")||b;uBa();e7();Y8||(Y8=new P7(b?b.loungeApiHost:void 0),CBa()&&(Y8.g="/api/loungedev"));Z8||(Z8=g.x("yt.mdx.remote.deferredProxies_")||[],g.va("yt.mdx.remote.deferredProxies_",Z8,void 0));pDa();var c=$8();if(!c){var d=new f8(Y8);g.va("yt.mdx.remote.screenService_",d,void 0);c=$8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);UCa(a,d,function(a){a?a9()&&A8(a9(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.$F("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.va("yt.mdx.remote.initialized_",!0,void 0),b9("Initializing: "+g.zg(b)),c9.push(g.WF("yt-remote-cast2-availability-change",function(){g.$F("yt-remote-receiver-availability-change")})),c9.push(g.WF("yt-remote-cast2-receiver-selected",function(){d9(null);
g.$F("yt-remote-auto-connect","cast-selector-receiver")})),c9.push(g.WF("yt-remote-cast2-receiver-resumed",function(){g.$F("yt-remote-receiver-resumed","cast-selector-receiver")})),c9.push(g.WF("yt-remote-cast2-session-change",qDa)),c9.push(g.WF("yt-remote-connection-change",function(a){a?A8(a9(),"YouTube TV"):e9()||(A8(null,null),XCa())})),a=f9(),b.isAuto&&(a.id+="#dial"),g.QF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),b9(" -- with channel params: "+
g.zg(a)),rDa(a),c.start(),a9()||sDa())},vDa=function(){var a=uDa();
x8()&&g.SG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},uDa=function(){var a=$8().fd.$_gos();
var b=g9();b&&h9()&&($6(a,b)||a.push(b));return tBa(a)},i9=function(){var a=wDa();
!a&&x8()&&WCa()&&(a={key:"cast-selector-receiver",name:WCa()});return a},wDa=function(){var a=uDa(),b=g9();
b||(b=e9());return g.Ma(a,function(a){return b&&W6(b,a.key)?!0:!1})},g9=function(){var a=a9();
if(!a)return null;var b=$8().oe();return a7(b,a)},qDa=function(a){b9("remote.onCastSessionChange_: "+X6(a));
if(a){var b=g9();b&&b.id==a.id?A8(b.id,"YouTube TV"):(b&&j9(),k9(a,1))}else h9()&&j9()},j9=function(){y8()?v8().stopSession():t8("stopSession called before API ready.");
var a=h9();a&&(a.disconnect(1),l9(null))},m9=function(){var a=h9();
return!!a&&3!=a.getProxyState()},b9=function(a){T7("remote",a)},$8=function(){if(!n9){var a=g.x("yt.mdx.remote.screenService_");
n9=a?new X8(a):null}return n9},a9=function(){return g.x("yt.mdx.remote.currentScreenId_")},xDa=function(a){g.va("yt.mdx.remote.currentScreenId_",a,void 0)},yDa=function(){return g.x("yt.mdx.remote.connectData_")},d9=function(a){g.va("yt.mdx.remote.connectData_",a,void 0)},h9=function(){return g.x("yt.mdx.remote.connection_")},l9=function(a){var b=h9();
d9(null);a||xDa("");g.va("yt.mdx.remote.connection_",a,void 0);Z8&&((0,g.B)(Z8,function(b){b(a)}),Z8.length=0);
b&&!a?g.$F("yt-remote-connection-change",!1):!b&&a&&g.$F("yt-remote-connection-change",!0)},e9=function(){var a=g.UG();
if(!a)return null;var b=$8().oe();return a7(b,a)},k9=function(a,b){g9()&&g9();
xDa(a.id);var c=new Q8(Y8,a,f9());c.connect(b,yDa());c.subscribe("beforeDisconnect",function(a){g.$F("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){h9()&&l9(null)});
l9(c)},sDa=function(){var a=e9();
a?(b9("Resume connection to: "+X6(a)),k9(a,0)):(f7(),XCa(),b9("Skipping connecting because no session screen found."))},pDa=function(){var a=f9();
if(g.Yb(a)){a=d7();var b=g.SG("yt-remote-session-name")||"",c=g.SG("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.va("yt.mdx.remote.channelParams_",a,void 0)}},f9=function(){return g.x("yt.mdx.remote.channelParams_")||{}},rDa=function(a){a?(g.RG("yt-remote-session-app",a.app),g.RG("yt-remote-session-name",a.name)):(g.TG("yt-remote-session-app"),g.TG("yt-remote-session-name"));
g.va("yt.mdx.remote.channelParams_",a,void 0)},o9=function(a,b,c){g.M.call(this);
this.F=a;this.l=b;this.o=new g.HF(this);g.N(this,this.o);this.o.O(b,"onCaptionsTrackListChanged",this.oS);this.o.O(b,"captionschanged",this.SQ);this.o.O(b,"captionssettingschanged",this.NE);this.o.O(b,"videoplayerreset",this.Cp);this.o.O(b,"mdxautoplaycancel",this.eJ);this.R=this.o.O(b,"onVolumeChange",this.QC);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.dD,this);c.subscribe("remotePlayerChange",this.xm,this);c.subscribe("remoteQueueChange",this.Cp,this);c.subscribe("autoplayUpNext",this.BC,
this);c.subscribe("previousNextChange",this.aD,this);c.subscribe("nowAutoplaying",this.SC,this);c.subscribe("autoplayDismissed",this.AC,this);this.suggestion=null;this.H=new g.sP(64);this.A=new g.Yt(this.JE,500,this);g.N(this,this.A);this.B=new g.Yt(this.KE,1E3,this);g.N(this,this.B);this.J=new n7(this.AW,0,this);g.N(this,this.J);this.C={};this.K=new g.Yt(this.kF,1E3,this);g.N(this,this.K);this.I=new g.Vk(this.RO,1E3,this);g.N(this,this.I);this.M=g.y;this.NE();this.Cp();this.xm()},p9=function(a,b){var c=
a.F,d=a.l.getVideoData().lengthSeconds;
c.H=b||0;c.g.T("progresssync",b,d)},zDa=function(a){p9(a,0);
a.A.stop();q9(a,new g.sP(64))},s9=function(a,b){if(r9(a)&&!a.D){var c=null;
b&&(c={style:a.l.Ki()},g.fc(c,b));a.g.xE(a.l.getVideoData(1).videoId,c);a.C=K8(a.g).l}},t9=function(a,b){var c=a.l.fg();
if(c){var d=c.ke();var e=c.listId.toString()}var f=a.l.getVideoData(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;var m=f.Uj;f=jBa(f);var n=K8(c);l=l||0;var p={videoId:k,currentIndex:l};G8(n,k,l);g.t(b)&&(E8(n,b),p.currentTime=b);g.t(e)&&(p.listId=e);null!=d&&(p.playerParams=d);null!=m&&(p.clickTrackingParams=m);null!=f&&(p.locationInfo=g.zg(f));O8(c,"setPlaylist",p);e||M8(c,n);q9(a,new g.sP(1))},ADa=function(a,b){if(b){var c=a.l.xc("captions","tracklist",{eA:1});
c&&c.length?(a.l.Od("captions","track",b),a.D=!1):(a.l.kk("captions"),a.D=!0)}else a.l.Od("captions","track",{})},r9=function(a){return K8(a.g).videoId==a.l.getVideoData(1).videoId},q9=function(a,b){a.B.stop();
var c=a.H;if(!g.xP(c,b)){var d=g.X(b,2);d!=g.X(a.H,2)&&g.VU(a.l,d);a.H=b;BDa(a.F,c,b)}},u9=function(a){g.W.call(this,{G:"div",
L:"ytp-remote",N:[{G:"div",L:"ytp-remote-display-status",N:[{G:"div",L:"ytp-remote-display-status-icon",N:[g.bpa()]},{G:"div",L:"ytp-remote-display-status-text",aa:"{{statustext}}"}]}]});this.l=new g.LV(this,250);g.N(this,this.l);this.A=a;this.O(a,"presentingplayerstatechange",this.B);CDa(this,g.SU(a))},CDa=function(a,b){if(3==a.A.Oa()){var c={RECEIVER_NAME:a.A.xc("remote","currentReceiver").name};
c=g.X(b,128)?g.O0("Error on $RECEIVER_NAME",c):b.kb()||g.X(b,4)?g.O0("Playing on $RECEIVER_NAME",c):g.O0("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.l.show()}else a.l.hide()},v9=function(a,b){g.UZ.call(this,"Play on",0,a,b);
this.l=a;this.H={};this.O(a,"onMdxReceiversChange",this.J);this.O(a,"presentingplayerstatechange",this.J);this.J()},w9=function(a){g.rV.call(this,a);
this.o={key:Z6(),name:"This computer"};this.B=null;this.C=[];this.I=this.l=null;this.F=[this.o];this.A=this.o;this.D=new g.sP(64);this.H=0;if(!g.WM(g.Y(this.g))){a=this.g;var b=g.JH(a);b&&(b=b.Xo())&&(b=new v9(a,b),g.N(this,b));b=new u9(a);g.N(this,b);g.kV(a,b.element,4)}},BDa=function(a,b,c){a.D=c;
a.g.T("presentingplayerstatechange",new g.CP(c,b))},x9=function(a,b){if(b.key!=a.A.key)if(b.key==a.o.key)j9();
else{a.A=b;var c=a.g.getPlaylistId();var d=a.g.getVideoData(1);var e=d.videoId;if(c||e){var f=a.g.fg();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.Yb(l).videoId}else k=[e];f=a.g.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.Uj,index:Math.max(a.g.iB(),0),currentTime:0==f?void 0:f};(d=jBa(d))&&(c.locationInfo=d);d=c}else d=null;b9("Connecting to: "+g.zg(b));"cast-selector-receiver"==b.key?(d9(d||null),y8()?v8().setLaunchParams(d||null):
t8("setLaunchParams called before ready.")):!d&&m9()&&a9()==b.key?g.$F("yt-remote-connection-change",!0):(j9(),d9(d||null),d=$8().oe(),(d=a7(d,b.key))&&k9(d,1))}},RBa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},x7={"'":"\\'"},DDa={},pBa={pY:"atp",S2:"ska",f2:"que",p1:"mus",O2:"sus",x_:"dsp"};
U6.prototype.Qn=function(){var a=new U6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.o=this.o;a.l=this.l;a.g=this.g};
var g7,c7="",k7=h7("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",JBa=h7("loadCastFramework")||h7("loadCastApplicationFramework"),TCa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.A(n7,g.M);g.h=n7.prototype;g.h.SJ=function(a){this.A=arguments;this.g=!1;this.Ca?this.o=(0,g.F)()+this.qd:this.Ca=g.tg(this.B,this.qd)};
g.h.stop=function(){this.Ca&&(g.ug(this.Ca),this.Ca=null);this.o=null;this.g=!1;this.A=[]};
g.h.pause=function(){++this.l};
g.h.resume=function(){this.l&&(--this.l,!this.l&&this.g&&(this.g=!1,this.C.apply(null,this.A)))};
g.h.V=function(){this.stop();n7.ba.V.call(this)};
g.h.TJ=function(){this.o?(this.Ca=g.tg(this.B,this.o-(0,g.F)()),this.o=null):(this.Ca=null,this.l?this.g=!0:(this.g=!1,this.C.apply(null,this.A)))};o7.prototype.stringify=function(a){return g.w.JSON.stringify(a,void 0)};
o7.prototype.parse=function(a){return g.w.JSON.parse(a,void 0)};g.h=p7.prototype;g.h.ni=null;g.h.Ef=!1;g.h.Sk=null;g.h.Yv=null;g.h.Ck=null;g.h.Lj=null;g.h.mh=null;g.h.Jh=null;g.h.Si=null;g.h.Qc=null;g.h.Rm=0;g.h.Ff=null;g.h.Cq=null;g.h.nh=null;g.h.Gl=-1;g.h.cE=!0;g.h.Xh=!1;g.h.ws=0;g.h.Op=null;var PBa={},s7={};g.h=p7.prototype;g.h.setTimeout=function(a){this.A=a};
g.h.sV=function(a){a=a.target;var b=this.Op;b&&3==g.ix(a)?b.Jj():this.uF(a)};
g.h.uF=function(a){try{if(a==this.Qc)a:{var b=g.ix(this.Qc),c=this.Qc.l,d=this.Qc.getStatus();if(g.yd&&!g.uc(10)||g.Ad&&!g.rc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.df&&!g.mx(this.Qc))break a;this.Xh||4!=b||7==c||(8==c||0>=d?this.g.yf(3):this.g.yf(2));z7(this);var e=this.Qc.getStatus();this.Gl=e;var f=g.mx(this.Qc);(this.Ef=200==e)?(4==b&&v7(this),this.B?(QBa(this,b,f),g.df&&this.Ef&&3==b&&(this.W.U(this.l,"tick",this.oV),this.l.start())):u7(this,f),this.Ef&&!this.Xh&&(4==b?this.g.Ap(this):
(this.Ef=!1,r7(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.nh=3,t7(13)):(this.nh=0,t7(14)),v7(this),w7(this))}}catch(k){this.Qc&&g.mx(this.Qc)}finally{}};
g.h.oV=function(){var a=g.ix(this.Qc),b=g.mx(this.Qc);this.Rm<b.length&&(z7(this),QBa(this,a,b),this.Ef&&4!=a&&r7(this))};
g.h.BU=function(a){y7((0,g.z)(this.AU,this,a),0)};
g.h.AU=function(a){this.Xh||(z7(this),u7(this,a),r7(this))};
g.h.lD=function(a){y7((0,g.z)(this.zU,this,a),0)};
g.h.zU=function(a){this.Xh||(v7(this),this.Ef=a,this.g.Ap(this),this.g.yf(4))};
g.h.cancel=function(){this.Xh=!0;v7(this)};
g.h.RU=function(){this.Sk=null;var a=(0,g.F)();0<=a-this.Yv?(2!=this.Lj&&this.g.yf(3),v7(this),this.nh=2,t7(18),w7(this)):TBa(this,this.Yv-a)};g.h=WBa.prototype;g.h.ts=null;g.h.we=null;g.h.Pp=!1;g.h.uz=null;g.h.eo=null;g.h.Bt=null;g.h.us=null;g.h.Ne=null;g.h.Dg=-1;g.h.Fl=null;g.h.al=null;g.h.connect=function(a){this.us=a;a=B7(this.g,null,this.us);t7(3);this.uz=(0,g.F)();var b=this.g.F;null!=b?(this.Fl=b[0],(this.al=b[1])?(this.Ne=1,XBa(this)):(this.Ne=2,D7(this))):(T6(a,"MODE","init"),this.we=new p7(this,void 0,void 0,void 0),this.we.ni=this.ts,q7(this.we,a,!1,null,!0),this.Ne=0)};
g.h.fJ=function(a){if(a)this.Ne=2,D7(this);else{t7(4);var b=this.g;b.Uf=b.ah.Dg;K7(b,9)}a&&this.yf(2)};
g.h.Hr=function(a){return this.g.Hr(a)};
g.h.abort=function(){this.we&&(this.we.cancel(),this.we=null);this.Dg=-1};
g.h.rz=function(){return!1};
g.h.eD=function(a,b){this.Dg=a.Gl;if(0==this.Ne)if(b){try{var c=this.l.parse(b)}catch(d){c=this.g;c.Uf=this.Dg;K7(c,2);return}this.Fl=c[0];this.al=c[1]}else c=this.g,c.Uf=this.Dg,K7(c,2);else if(2==this.Ne)if(this.Pp)t7(7),this.Bt=(0,g.F)();else if("11111"==b){if(t7(6),this.Pp=!0,this.eo=(0,g.F)(),c=this.eo-this.uz,!g.yd||g.uc(10)||500>c)this.Dg=200,this.we.cancel(),t7(12),C7(this.g,this,!0)}else t7(8),this.eo=this.Bt=(0,g.F)(),this.Pp=!1};
g.h.Ap=function(){this.Dg=this.we.Gl;if(this.we.Ef)0==this.Ne?this.al?(this.Ne=1,XBa(this)):(this.Ne=2,D7(this)):2==this.Ne&&((!g.yd||g.uc(10)?!this.Pp:200>this.Bt-this.eo)?(t7(11),C7(this.g,this,!1)):(t7(12),C7(this.g,this,!0)));else{0==this.Ne?t7(9):2==this.Ne&&t7(10);var a=this.g;a.Uf=this.Dg;K7(a,2)}};
g.h.Hm=function(){return this.g.Hm()};
g.h.isActive=function(){return this.g.isActive()};
g.h.yf=function(a){this.g.yf(a)};g.h=E7.prototype;g.h.rl=null;g.h.be=null;g.h.tc=null;g.h.rs=null;g.h.ko=null;g.h.Fx=null;g.h.xo=null;g.h.pm=0;g.h.kQ=0;g.h.pd=null;g.h.eh=null;g.h.sg=null;g.h.ci=null;g.h.ah=null;g.h.Bq=null;g.h.Zj=-1;g.h.uA=-1;g.h.Uf=-1;g.h.Aj=0;g.h.nj=0;g.h.Zh=8;var L7=new g.Df;g.A(ZBa,g.bf);g.A($Ba,g.bf);g.A(aCa,g.bf);g.h=E7.prototype;g.h.connect=function(a,b,c,d,e){t7(0);this.rs=b;this.rl=c||{};d&&g.t(e)&&(this.rl.OSID=d,this.rl.OAID=e);this.C?(y7((0,g.z)(this.ay,this,a),100),eCa(this)):this.ay(a)};
g.h.ay=function(a){this.ah=new WBa(this);this.ah.ts=null;this.ah.l=this.B;this.ah.connect(a)};
g.h.rz=function(){return 0==this.g};
g.h.jD=function(a){this.eh=null;hCa(this,a)};
g.h.iD=function(){this.sg=null;this.tc=new p7(this,this.o,"rpc",this.D);this.tc.ni=null;this.tc.ws=0;var a=this.Fx.clone();g.Fm(a,"RID","rpc");g.Fm(a,"SID",this.o);g.Fm(a,"CI",this.Bq?"0":"1");g.Fm(a,"AID",this.Zj);F7(this,a);if(!g.yd||g.uc(10))g.Fm(a,"TYPE","xmlhttp"),q7(this.tc,a,!0,this.xo,!1);else{g.Fm(a,"TYPE","html");var b=this.tc,c=!!this.xo;b.Lj=3;b.mh=S6(a.clone());SBa(b,c)}};
g.h.eD=function(a,b){if(0!=this.g&&(this.tc==a||this.be==a))if(this.Uf=a.Gl,this.be==a&&3==this.g)if(7<this.Zh){try{var c=this.B.parse(b)}catch(f){c=null}if(g.Aa(c)&&3==c.length)if(0==c[0])a:{if(!this.sg){if(this.tc)if(this.tc.Ck+3E3<this.be.Ck)H7(this),this.tc.cancel(),this.tc=null;else break a;J7(this);t7(19)}}else this.uA=c[1],0<this.uA-this.Zj&&37500>c[2]&&this.Bq&&0==this.nj&&!this.ci&&(this.ci=y7((0,g.z)(this.NQ,this),6E3));else K7(this,11)}else b!=DDa.sZ.g&&K7(this,11);else if(this.tc==a&&
H7(this),!g.C(b)){c=this.B.parse(b);g.Aa(c);for(var d=0;d<c.length;d++){var e=c[d];this.Zj=e[0];e=e[1];2==this.g?"c"==e[0]?(this.o=e[1],this.xo=e[2],e=e[3],null!=e?this.Zh=e:this.Zh=6,this.g=3,this.pd&&this.pd.Rx(),this.Fx=B7(this,this.Hm()?this.xo:null,this.rs),iCa(this)):"stop"==e[0]&&K7(this,7):3==this.g&&("stop"==e[0]?K7(this,7):"noop"!=e[0]&&this.pd&&this.pd.Qx(e),this.nj=0)}}};
g.h.NQ=function(){null!=this.ci&&(this.ci=null,this.tc.cancel(),this.tc=null,J7(this),t7(20))};
g.h.Ap=function(a){if(this.tc==a){H7(this);this.tc=null;var b=2}else if(this.be==a)this.be=null,b=1;else return;this.Uf=a.Gl;if(0!=this.g)if(a.Ef)1==b?(b=(0,g.F)()-a.Ck,L7.dispatchEvent(new $Ba(L7,a.Si?a.Si.length:0,b,this.Aj)),G7(this),this.A.length=0):iCa(this);else{var c=a.nh,d;if(!(d=3==c||7==c||0==c&&0<this.Uf)){if(d=1==b)this.be||this.eh||1==this.g||2<=this.Aj?d=!1:(this.eh=y7((0,g.z)(this.jD,this,a),jCa(this,this.Aj)),this.Aj++,d=!0);d=!(d||2==b&&J7(this))}if(d)switch(c){case 1:K7(this,5);
break;case 4:K7(this,10);break;case 3:K7(this,6);break;case 7:K7(this,12);break;default:K7(this,2)}}};
g.h.AJ=function(a){if(!g.Qa(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.lW=function(a){a?t7(2):(t7(1),kCa(this,8))};
g.h.Hr=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.cx;a.F=!1;return a};
g.h.isActive=function(){return!!this.pd&&this.pd.isActive(this)};
g.h.yf=function(a){L7.dispatchEvent(new aCa(L7,a))};
g.h.Hm=function(){return!(!g.yd||g.uc(10))};
g.h=lCa.prototype;g.h.Rx=function(){};
g.h.Qx=function(){};
g.h.Px=function(){};
g.h.ur=function(){};
g.h.Xy=function(){return{}};
g.h.isActive=function(){return!0};g.A(M7,g.M);g.h=M7.prototype;g.h.sU=function(){this.qd=Math.min(3E5,2*this.qd);this.o();this.l&&this.start()};
g.h.start=function(){var a=this.qd+15E3*Math.random();g.Zt(this.g,a);this.l=(0,g.F)()+a};
g.h.stop=function(){this.g.stop();this.l=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.qd=5E3};g.A(N7,lCa);g.h=N7.prototype;g.h.subscribe=function(a,b,c){return this.o.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.o.unsubscribe(a,b,c)};
g.h.Td=function(a){return this.o.Td(a)};
g.h.T=function(a,b){return this.o.T.apply(this.o,arguments)};
g.h.dispose=function(){this.I||(this.I=!0,g.$e(this.o),oCa(this),g.$e(this.l),this.l=null)};
g.h.ka=function(){return this.I};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.H="";this.l.stop();this.B=a||null;this.A=b||0;a=this.J+"/test";b=this.J+"/bind";var d=new E7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.K),e=this.g;e&&(e.pd=null);d.pd=this;this.g=d;e?this.g.connect(a,b,this.C,e.o,e.Zj):c?this.g.connect(a,b,this.C,c.sessionId,c.arrayId):this.g.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.fc(c,b);this.l.isActive()||2==(this.g?this.g.g:0)?this.D.push(c):O7(this)&&fCa(this.g,c)};
g.h.Rx=function(){this.l.reset();this.B=null;this.A=0;if(this.D.length){var a=this.D;this.D=[];for(var b=0,c=a.length;b<c;++b)fCa(this.g,a[b])}this.T("handlerOpened")};
g.h.Px=function(a){var b=2==a&&401==this.g.Uf;4==a||b||this.l.start();this.T("handlerError",a)};
g.h.ur=function(a){if(!this.l.isActive())this.T("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.D.push(d)}};
g.h.Xy=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.F&&(a.ui=""+this.F);this.B&&g.fc(a,this.B);return a};
g.h.Qx=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),dCa(this.g)):this.T("handlerMessage",new mCa(a[0],a[1]))};
g.h.VW=function(){this.l.isActive();var a=this.g,b=0;a.tc&&b++;a.be&&b++;0!=b||this.connect(this.B,this.A)};P7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
P7.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
P7.prototype.B=function(a){a(Error("request timed out"))};var wCa=(0,g.F)(),S7=null,V7=Array(50),U7=-1,W7=!1;g.A(X7,g.KF);X7.prototype.oe=function(){return this.g};
X7.prototype.contains=function(a){return!!$6(this.g,a)};
X7.prototype.get=function(a){return a?a7(this.g,a):null};
X7.prototype.info=function(a){T7(this.D,a)};g.A(Y7,g.KF);var EDa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=Y7.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.Ca)&&this.zF()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.Ca)||(g.aE(this.Ca),this.Ca=window.NaN)};
g.h.V=function(){this.stop();Y7.ba.V.call(this)};
g.h.zF=function(){this.Ca=window.NaN;this.g=g.pE(Q7(this.C,"/pairing/get_screen"),{method:"POST",Nb:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.z)(this.XW,this),onError:(0,g.z)(this.WW,this),wd:(0,g.z)(this.YW,this)})};
g.h.XW=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.T("pairingComplete",new V6(c))};
g.h.WW=function(a){this.g=null;a.status&&404==a.status?this.l>=EDa.length?this.T("pairingFailed",Error("DIAL polling timed out")):(a=EDa[this.l],this.Ca=g.ZD((0,g.z)(this.zF,this),a),this.l++):this.T("pairingFailed",Error("Server error "+a.status))};
g.h.YW=function(){this.g=null;this.T("pairingFailed",Error("Server not responding"))};g.A($7,X7);g.h=$7.prototype;g.h.start=function(){Z7(this)&&this.T("screenChange");!g.SG("yt-remote-lounge-token-expiration")&&ACa(this);g.aE(this.l);this.l=g.ZD((0,g.z)(this.start,this),1E4)};
g.h.add=function(a,b){Z7(this);xCa(this,a);a8(this,!1);this.T("screenChange");b(a);a.token||ACa(this)};
g.h.remove=function(a,b){var c=Z7(this);zCa(this,a)&&(a8(this,!1),c=!0);b(a);c&&this.T("screenChange")};
g.h.wq=function(a,b,c,d){var e=Z7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,a8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.T("screenChange")};
g.h.V=function(){g.aE(this.l);$7.ba.V.call(this)};
g.h.gK=function(a){Z7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}a8(this,!b);b&&T7(this.D,"Missed "+b+" lounge tokens.")};
g.h.fK=function(a){T7(this.D,"Requesting lounge tokens failed: "+a)};g.A(c8,g.KF);g.h=c8.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.SG("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.F)()-144E5<a?0:a)?e8(this):(this.A=(0,g.F)()+3E5,g.RG("yt-remote-fast-check-period",this.A),this.kv())};
g.h.isEmpty=function(){return g.Yb(this.g)};
g.h.update=function(){b8("Updating availability on schedule.");var a=this.C(),b=g.Mb(this.g,function(b,d){return b&&!!a7(a,d)},this);
d8(this,b)};
g.h.V=function(){g.aE(this.o);this.o=window.NaN;this.l&&(this.l.abort(),this.l=null);c8.ba.V.call(this)};
g.h.kv=function(){g.aE(this.o);this.o=window.NaN;this.l&&this.l.abort();var a=DCa(this);if(g.Pb(a)){var b=Q7(this.B,"/pairing/get_screen_availability");this.l=R7(this.B,b,{lounge_token:g.Sb(a).join(",")},(0,g.z)(this.XT,this,a),(0,g.z)(this.VT,this))}else d8(this,{}),e8(this)};
g.h.XT=function(a,b){this.l=null;var c=g.Sb(DCa(this));if(g.jb(c,g.Sb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;d8(this,d);e8(this)}else this.fc("Changing Screen set during request."),this.kv()};
g.h.VT=function(a){this.fc("Screen availability failed: "+a);this.l=null;e8(this)};
g.h.fc=function(a){T7("OnlineScreenService",a)};g.A(f8,X7);g.h=f8.prototype;g.h.start=function(){this.o.start();this.l.start();this.g.length&&(this.T("screenChange"),this.l.isEmpty()||this.T("onlineScreenChange"))};
g.h.add=function(a,b,c){this.o.add(a,b,c)};
g.h.remove=function(a,b,c){this.o.remove(a,b,c);this.l.update()};
g.h.wq=function(a,b,c,d){this.o.contains(a)?this.o.wq(a,b,c,d):(a="Updating name of unknown screen: "+a.name,T7(this.D,a),d(Error(a)))};
g.h.oe=function(a){return a?this.g:g.Xa(this.g,(0,g.Ld)(this.A,function(a){return!this.contains(a)},this))};
g.h.AF=function(){return(0,g.Ld)(this.oe(!0),function(a){return!!this.l.g[a.id]},this)};
g.h.BF=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new Y7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(a){g.$e(f);d(g8(this,a))},this));
f.subscribe("pairingFailed",function(a){g.$e(f);e(a)});
f.start();return(0,g.z)(f.stop,f)};
g.h.aX=function(a,b,c,d){g.pE(Q7(this.C,"/pairing/get_screen"),{method:"POST",Nb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.z)(function(a,d){var e=new V6(d.screen||{});if(!e.name||HCa(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);HCa(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(g8(this,e))},this),
onError:(0,g.z)(function(a){d(Error("pairing request failed: "+a.status))},this),
wd:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.h.V=function(){g.$e(this.o);g.$e(this.l);f8.ba.V.call(this)};
g.h.vK=function(){ICa(this);this.T("screenChange");this.l.update()};
f8.prototype.dispose=f8.prototype.dispose;g.A(i8,g.KF);g.h=i8.prototype;g.h.Bp=function(a){this.o=a;this.T("sessionScreen",this.o)};
g.h.te=function(a){this.ka()||(a&&j8(this,""+a),this.o=null,this.T("sessionScreen",null))};
g.h.info=function(a){T7(this.K,a)};
g.h.DF=function(){return null};
g.h.uv=function(a){var b=this.l;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){j8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.V=function(){this.uv("");i8.ba.V.call(this)};g.A(k8,i8);g.h=k8.prototype;g.h.tv=function(a){if(this.g){if(this.g==a)return;j8(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.C);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.g=a;this.g.addUpdateListener(this.C);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);KCa(this)};
g.h.bk=function(a){this.info("launchWithParams no-op for Cast: "+g.zg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.z)(function(){this.te()},this),(0,g.z)(function(){this.te(Error("Failed to stop receiver app."))},this)):this.te(Error("Stopping cast device witout session."))};
g.h.uv=g.y;g.h.V=function(){this.info("disposeInternal");g.aE(this.A);this.A=0;this.g&&(this.g.removeUpdateListener(this.C),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.g=null;k8.ba.V.call(this)};
g.h.dV=function(a,b){if(!this.ka())if(b){var c=g.Xw(b);if(g.Da(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.zg(c));switch(d){case "mdxSessionStatus":JCa(this,c.screenId);break;default:j8(this,"Unknown youtube message: "+d)}}else j8(this,"Unable to parse message.")}else j8(this,"No data in message.")};
g.h.iz=function(a,b,c,d){GCa(this.H,this.l.label,a,this.l.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(j8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.ZD((0,g.z)(this.iz,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.DF=function(){return this.g};
g.h.bX=function(a){this.ka()||a||(j8(this,"Cast session died."),this.te())};g.A(l8,i8);g.h=l8.prototype;g.h.tv=function(a){this.A=a;this.A.addUpdateListener(this.J)};
g.h.bk=function(a){this.B=a;this.D()};
g.h.stop=function(){this.g();this.g=g.y;g.aE(this.C);this.A?this.A.stop((0,g.z)(this.te,this,null),(0,g.z)(this.te,this,"Failed to stop DIAL device.")):this.te()};
g.h.V=function(){this.g();this.g=g.y;g.aE(this.C);this.A&&this.A.removeUpdateListener(this.J);this.A=null;l8.ba.V.call(this)};
g.h.eX=function(a){this.ka()||a||(j8(this,"DIAL session died."),this.g(),this.g=g.y,this.te())};
g.h.ht=function(a){this.I=Z6();if(this.B){var b=new window.chrome.cast.DialLaunchResponse(!0,MCa(this));a(b);LCa(this)}else this.D=(0,g.z)(function(){g.aE(this.C);this.D=g.y;this.C=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,MCa(this));a(b);LCa(this)},this),this.C=g.ZD((0,g.z)(function(){this.D()},this),100)};
g.h.KL=function(a,b,c){GCa(this.H,this.F.receiver.label,a,this.l.friendlyName,(0,g.z)(function(a){a&&a.token?(this.Bp(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.ht(b,c)},this),(0,g.z)(function(a){j8(this,"Failed to get DIAL screen: "+a);
this.ht(b,c)},this))};g.A(m8,i8);m8.prototype.stop=function(){this.te()};
m8.prototype.tv=g.y;m8.prototype.bk=function(){g.aE(this.g);this.g=window.NaN;var a=a7(this.H.oe(),this.l.label);a?this.Bp(a):this.te(Error("No such screen"))};
m8.prototype.V=function(){g.aE(this.g);this.g=window.NaN;m8.ba.V.call(this)};g.A(n8,g.KF);g.h=n8.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.D);this.F||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.z)(this.fD,this),(0,g.z)(this.ET,this),d,e);c.customDialLaunchCallback=(0,g.z)(this.xR,this);window.chrome.cast.initialize(c,
(0,g.z)(function(){this.ka()||(window.chrome.cast.addReceiverActionListener(this.A),tCa(),this.l.subscribe("onlineScreenChange",(0,g.z)(this.CF,this)),this.o=OCa(this),window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(a){this.fc("Failed to set initial custom receivers: "+g.zg(a))},this)),this.T("yt-remote-cast2-availability-change",p8(this)),b(!0))},this),(0,g.z)(function(a){this.fc("Failed to initialize API: "+g.zg(a));
b(!1)},this))};
g.h.UV=function(a,b){o8("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.o;if(!a||c&&c.id!=a)o8("Unsetting old screen status: "+this.g.l.friendlyName),q8(this,null)}if(a&&b){if(!this.g){c=a7(this.l.oe(),a);if(!c){o8("setConnectedScreenStatus: Unknown screen.");return}var d=NCa(this,c);d||(o8("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.o.push(d),
window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(a){this.fc("Failed to set initial custom receivers: "+g.zg(a))},this)));
o8("setConnectedScreenStatus: new active receiver: "+d.friendlyName);q8(this,new m8(this.l,d),!0)}this.g.uv(b)}else o8("setConnectedScreenStatus: no screen.")};
g.h.VV=function(a){this.ka()?this.fc("Setting connection data on disposed cast v2"):this.g?this.g.bk(a):this.fc("Setting connection data without a session")};
g.h.dX=function(){this.ka()?this.fc("Stopping session on disposed cast v2"):this.g?(this.g.stop(),q8(this,null)):o8("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.z)(this.fD,this),(0,g.z)(this.dU,this))};
g.h.V=function(){this.l.unsubscribe("onlineScreenChange",(0,g.z)(this.CF,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.A);g.Va(g.x("yt.mdx.remote.debug.handlers_")||[],qCa);g.$e(this.g);n8.ba.V.call(this)};
g.h.fc=function(a){T7("Controller",a)};
g.h.gD=function(a,b){this.g==a&&(b||q8(this,null),this.T("yt-remote-cast2-session-change",b))};
g.h.AT=function(a,b){if(!this.ka())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),o8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.l.label!=a.label)o8("onReceiverAction_: Stopping active receiver: "+this.g.l.friendlyName),this.g.stop();else{o8("onReceiverAction_: Casting to active receiver.");this.g.o&&this.T("yt-remote-cast2-session-change",this.g.o);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:q8(this,
new m8(this.l,a));break;case window.chrome.cast.ReceiverType.DIAL:q8(this,new l8(this.l,a,this.C));break;case window.chrome.cast.ReceiverType.CAST:q8(this,new k8(this.l,a));break;default:this.fc("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.l.label==a.label?this.g.stop():this.fc("Stopping receiver w/o session: "+a.friendlyName)}else this.fc("onReceiverAction_ called without receiver.")};
g.h.xR=function(a){if(this.ka())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.fc("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.l:null;if(!c||c.label!=b.label)return this.fc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.o)return o8("Reselecting dial screen."),
this.T("yt-remote-cast2-session-change",this.g.o),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.fc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);q8(this,new l8(this.l,b,this.C))}b=this.g;b.F=a;return b.F.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.z)(b.KL,b,(b.F.extraData||{}).screenId||null)):new window.Promise((0,g.z)(b.ht,b))};
g.h.fD=function(a){if(!this.ka()){o8("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)o8("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),q8(this,new k8(this.l,b),!0);else{this.fc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.l,d=a7(this.l.oe(),c.label);
d&&W6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(o8("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.$e(this.g),this.g=new k8(this.l,b),this.g.subscribe("sessionScreen",(0,g.z)(this.gD,this,this.g)),this.g.bk(null));this.g.tv(a)}}};
g.h.cX=function(){return this.g?this.g.DF():null};
g.h.dU=function(a){this.ka()||(this.fc("Failed to estabilish a session: "+g.zg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&q8(this,null))};
g.h.ET=function(a){o8("Receiver availability updated: "+a);if(!this.ka()){var b=p8(this);this.B=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;p8(this)!=b&&this.T("yt-remote-cast2-availability-change",p8(this))}};
g.h.CF=function(){this.ka()||(this.o=OCa(this),o8("Updating custom receivers: "+g.zg(this.o)),window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(){this.fc("Failed to set custom receivers.")},this)),this.T("yt-remote-cast2-availability-change",p8(this)))};
n8.prototype.setLaunchParams=n8.prototype.VV;n8.prototype.setConnectedScreenStatus=n8.prototype.UV;n8.prototype.stopSession=n8.prototype.dX;n8.prototype.getCastSession=n8.prototype.cX;n8.prototype.requestSession=n8.prototype.requestSession;n8.prototype.init=n8.prototype.init;n8.prototype.dispose=n8.prototype.dispose;var w8=[];g.h=B8.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";C8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.g=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.l=a.trackData,this.Xf=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.D=a.playerTimeAt,this.B=a.seekableStart,this.o=a.seekableEnd,this.H=a.duration,this.I=a.loadedTime,this.A=a.liveIngestionTime,this.C=!(0,window.isNaN)(this.A))};
g.h.kb=function(){return 1==this.g};
g.h.isAdPlaying=function(){return 1081==this.g};
g.h.getDuration=function(){return this.C?this.H+D8(this):this.H};
g.h.clone=function(){return new B8(H8(this))};g.A(J8,g.KF);g.h=J8.prototype;g.h.play=function(){1==this.g?(this.l?this.l.play(null,g.y,P8(this,"play")):O8(this,"play"),N8(this,1,F8(K8(this))),this.T("remotePlayerChange")):L8(this,this.play)};
g.h.pause=function(){1==this.g?(this.l?this.l.pause(null,g.y,P8(this,"pause")):O8(this,"pause"),N8(this,2,F8(K8(this))),this.T("remotePlayerChange")):L8(this,this.pause)};
g.h.yF=function(a){if(1==this.g){if(this.l){var b=K8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.kb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.l.seek(c,g.y,P8(this,"seekTo",{newTime:a}))}else O8(this,"seekTo",{newTime:a});N8(this,3,a);this.T("remotePlayerChange")}else L8(this,g.Ga(this.yF,a))};
g.h.stop=function(){if(1==this.g){this.l?this.l.stop(null,g.y,P8(this,"stopVideo")):O8(this,"stopVideo");var a=K8(this);a.index=-1;a.videoId="";C8(a);M8(this,a);this.T("remotePlayerChange")}else L8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=K8(this);if(this.o){if(c.volume!=a){var d=Math.round(a)/100;this.o.setReceiverVolumeLevel(d,(0,g.z)(function(){T7("CP","set receiver volume: "+d)},this),(0,g.z)(function(){this.fc("failed to set receiver volume.")},this))}c.muted!=b&&this.o.setReceiverMuted(b,(0,g.z)(function(){T7("CP","set receiver muted: "+b)},this),(0,g.z)(function(){this.fc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);O8(this,"setVolume",e)}c.muted=b;c.volume=a;M8(this,c)}else L8(this,g.Ga(this.setVolume,a,b))};
g.h.xE=function(a,b){if(1==this.g){var c=K8(this),d={videoId:a};b&&(c.l={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.zg(b.style),g.fc(d,c.l));O8(this,"setSubtitlesTrack",d);M8(this,c)}else L8(this,g.Ga(this.xE,a,b))};
g.h.ew=function(a,b){if(1==this.g){O8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Hb.id});var c=K8(this);c.audioTrackId=b.Hb.id;M8(this,c)}else L8(this,g.Ga(this.ew,a,b))};
g.h.xF=function(a,b){if(1==this.g){if(a&&b){var c=K8(this);G8(c,a,b);M8(this,c)}O8(this,"previous")}else L8(this,g.Ga(this.xF,a,b))};
g.h.wF=function(a,b){if(1==this.g){if(a&&b){var c=K8(this);G8(c,a,b);M8(this,c)}O8(this,"next")}else L8(this,g.Ga(this.wF,a,b))};
g.h.zy=function(){1==this.g?O8(this,"dismissAutoplay"):L8(this,this.zy)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.T("proxyStateChange",a,this.g)}J8.ba.dispose.call(this)};
g.h.V=function(){aDa(this);this.A=null;this.B.clear();I8(this,null);J8.ba.V.call(this)};
g.h.gw=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.T("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)g.sC(this.B).apply(this);else 3==a&&this.dispose()}};
g.h.vT=function(a,b){this.T(a,b)};
g.h.UQ=function(a){if(!a)this.sm(null),I8(this,null);else if(this.o.receiver.volume){a=this.o.receiver.volume;var b=K8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)T7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,M8(this,b)}};
g.h.sm=function(a){T7("CP","Cast media: "+!!a);this.l&&this.l.removeUpdateListener(this.F);if(this.l=a)this.l.addUpdateListener(this.F),bDa(this),this.T("remotePlayerChange")};
g.h.TQ=function(a){a?(bDa(this),this.T("remotePlayerChange")):this.sm(null)};
g.h.gR=function(){var a=YCa();a&&I8(this,a)};
g.h.fc=function(a){T7("CP",a)};g.A(Q8,g.KF);g.h=Q8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.t(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.t(k)&&(l.currentIndex=k);c&&(this.Za.listId=c);this.Za.videoId=d;this.Za.index=k||0;this.Za.state=3;E8(this.Za,m);this.A="UNSUPPORTED";R8("Connecting with setPlaylist and params: "+g.zg(l));this.g.connect({method:"setPlaylist",
params:g.zg(l)},a,xBa())}else R8("Connecting without params"),this.g.connect({},a,xBa());dDa(this)};
g.h.dispose=function(){this.ka()||(this.T("beforeDispose"),S8(this,3));Q8.ba.dispose.call(this)};
g.h.V=function(){T8(this);V8(this);U8(this);g.aE(this.H);this.H=window.NaN;g.aE(this.I);this.I=window.NaN;this.o=null;g.uF(this.R);this.R.length=0;this.g.dispose();Q8.ba.V.call(this);this.A=this.D=this.l=this.Za=this.g=null};
g.h.XJ=function(){this.C(2)};
g.h.YQ=function(){R8("Channel opened");this.M&&(this.M=!1,U8(this),this.K=g.ZD((0,g.z)(function(){R8("Timing out waiting for a screen.");this.C(1)},this),15E3));
BBa(nCa(this.g),this.Z)};
g.h.VQ=function(){R8("Channel closed");(0,window.isNaN)(this.B)?f7(!0):f7();this.dispose()};
g.h.WQ=function(a){f7();(0,window.isNaN)(this.F())?(R8("Channel error: "+a+" without reconnection"),this.dispose()):(this.M=!0,R8("Channel error: "+a+" with reconnection in "+this.F()+" ms"),S8(this,2))};
g.h.XQ=function(a){a.params?R8("Received: action="+a.action+", params="+g.zg(a.params)):R8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.Xw(a.params.devices);this.l=(0,g.G)(a,function(a){return new U6(a)});
a=!!g.Ma(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
gDa(this,a);break;case "loungeScreenDisconnected":g.Wa(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
gDa(this,!1);break;case "remoteConnected":var b=new U6(g.Xw(a.params.device));g.Ma(this.l,function(a){return b?a.id==b.id:!1})||g.Ta(this.l,b);
break;case "remoteDisconnected":b=new U6(g.Xw(a.params.device));g.Wa(this.l,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":iDa(this,a);break;case "nowPlaying":kDa(this,a);break;case "onStateChange":jDa(this,a);break;case "onAdStateChange":lDa(this,a);break;case "onVolumeChanged":mDa(this,a);break;case "onSubtitlesTrackChanged":hDa(this,a);break;case "nowAutoplaying":nDa(this,a);break;case "autoplayDismissed":this.T("autoplayDismissed");break;case "autoplayUpNext":this.D=a.params.videoId||null;this.T("autoplayUpNext",this.D);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.T("autoplayModeChange",this.A);"DISABLED"==this.A&&this.T("autoplayDismissed");break;case "onHasPreviousNextChanged":oDa(this,a);break;case "requestAssistedSignIn":this.T("assistedSignInRequested",a.params.authCode);break;default:R8("Unrecognized action: "+a.action)}};
g.h.EV=function(){if(this.o){var a=this.o;this.o=null;this.Za.videoId!=a&&W8(this,"getNowPlaying")}};
Q8.prototype.subscribe=Q8.prototype.subscribe;Q8.prototype.unsubscribeByKey=Q8.prototype.Td;Q8.prototype.ga=function(){var a=3;this.ka()||(a=0,(0,window.isNaN)(this.F())?O7(this.g)&&(0,window.isNaN)(this.B)&&(a=1):a=2);return a};
Q8.prototype.getProxyState=Q8.prototype.ga;Q8.prototype.C=function(a){R8("Disconnecting with "+a);T8(this);this.T("beforeDisconnect",a);1==a&&f7();oCa(this.g,a);this.dispose()};
Q8.prototype.disconnect=Q8.prototype.C;Q8.prototype.fa=function(){var a=this.Za;this.o&&(a=this.Za.clone(),G8(a,this.o,a.index));return H8(a)};
Q8.prototype.getPlayerContextData=Q8.prototype.fa;
Q8.prototype.na=function(a){var b=new B8(a);b.videoId&&b.videoId!=this.Za.videoId&&(this.o=b.videoId,g.aE(this.H),this.H=g.ZD((0,g.z)(this.EV,this),5E3));var c=[];this.Za.listId==b.listId&&this.Za.videoId==b.videoId&&this.Za.index==b.index||c.push("remoteQueueChange");this.Za.g==b.g&&this.Za.volume==b.volume&&this.Za.muted==b.muted&&F8(this.Za)==F8(b)&&g.zg(this.Za.l)==g.zg(b.l)||c.push("remotePlayerChange");this.Za.reset(a);(0,g.B)(c,function(a){this.T(a)},this)};
Q8.prototype.setPlayerContextData=Q8.prototype.na;Q8.prototype.X=function(){var a=this.g.C.id,b=g.Ma(this.l,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Q8.prototype.getOtherConnectedRemoteId=Q8.prototype.X;Q8.prototype.F=function(){var a=this.g;return a.l.isActive()?a.l.l-(0,g.F)():window.NaN};
Q8.prototype.getReconnectTimeout=Q8.prototype.F;Q8.prototype.Y=function(){return this.A||"UNSUPPORTED"};
Q8.prototype.getAutoplayMode=Q8.prototype.Y;Q8.prototype.da=function(){return this.D||""};
Q8.prototype.getAutoplayVideoId=Q8.prototype.da;Q8.prototype.ua=function(){if(!(0,window.isNaN)(this.F())){var a=this.g.l;g.$t(a.g);a.start()}};
Q8.prototype.reconnect=Q8.prototype.ua;Q8.prototype.ia=function(a,b){W8(this,a,b);fDa(this)};
Q8.prototype.sendMessage=Q8.prototype.ia;g.A(X8,X7);g.h=X8.prototype;g.h.oe=function(a){return this.fd.$_gs(a)};
g.h.contains=function(a){return!!this.fd.$_c(a)};
g.h.get=function(a){return this.fd.$_g(a)};
g.h.start=function(){this.fd.$_st()};
g.h.add=function(a,b,c){this.fd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.fd.$_r(a,b,c)};
g.h.wq=function(a,b,c,d){this.fd.$_un(a,b,c,d)};
g.h.V=function(){for(var a=0,b=this.l.length;a<b;++a)this.fd.$_ubk(this.l[a]);this.l.length=0;this.fd=null;X8.ba.V.call(this)};
g.h.ZW=function(){this.T("screenChange")};
g.h.XS=function(){this.T("onlineScreenChange")};
f8.prototype.$_st=f8.prototype.start;f8.prototype.$_gspc=f8.prototype.aX;f8.prototype.$_gsppc=f8.prototype.BF;f8.prototype.$_c=f8.prototype.contains;f8.prototype.$_g=f8.prototype.get;f8.prototype.$_a=f8.prototype.add;f8.prototype.$_un=f8.prototype.wq;f8.prototype.$_r=f8.prototype.remove;f8.prototype.$_gs=f8.prototype.oe;f8.prototype.$_gos=f8.prototype.AF;f8.prototype.$_s=f8.prototype.subscribe;f8.prototype.$_ubk=f8.prototype.Td;var Y8=null,Z8=null,n9=null,c9=[];g.q(o9,g.M);g.h=o9.prototype;
g.h.V=function(){g.M.prototype.V.call(this);this.A.stop();this.B.stop();this.J.stop();this.M();this.g.unsubscribe("proxyStateChange",this.dD,this);this.g.unsubscribe("remotePlayerChange",this.xm,this);this.g.unsubscribe("remoteQueueChange",this.Cp,this);this.g.unsubscribe("autoplayUpNext",this.BC,this);this.g.unsubscribe("previousNextChange",this.aD,this);this.g.unsubscribe("nowAutoplaying",this.SC,this);this.g.unsubscribe("autoplayDismissed",this.AC,this);this.g=this.F=null};
g.h.CB=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(r9(this)){if(!K8(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":K8(this.g).kb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.Jj(c[0],c[1]);break;case "control_subtitles_set_track":s9(this,c[0]);break;case "control_set_audio_track":c=c[0],r9(this)&&this.g.ew(this.l.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.l.getCurrentTime();t9(this,0==c?void 0:c);break;case "control_seek":t9(this,c[0]);break;case "control_subtitles_set_track":s9(this,c[0]);break;case "control_set_audio_track":c=c[0],r9(this)&&this.g.ew(this.l.getVideoData(1).videoId,c)}};
g.h.SQ=function(a){this.J.SJ(a)};
g.h.AW=function(a){this.CB("control_subtitles_set_track",g.Yb(a)?null:a)};
g.h.NE=function(){var a=this.l.xc("captions","track");g.Yb(a)||s9(this,a)};
g.h.QC=function(a){if(r9(this)){this.g.unsubscribe("remotePlayerChange",this.xm,this);var b=Math.round(a.volume);a=!!a.muted;var c=K8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.K.start();this.g.subscribe("remotePlayerChange",this.xm,this)}};
g.h.oS=function(){g.Yb(this.C)||ADa(this,this.C);this.D=!1};
g.h.dD=function(a,b){this.B.stop();2==b&&this.KE()};
g.h.xm=function(){if(r9(this)){this.A.stop();var a=K8(this.g);switch(a.g){case 1081:case 1:q9(this,new g.sP(8));this.JE();break;case 1085:case 3:q9(this,new g.sP(9));break;case 1083:case 0:q9(this,new g.sP(2));this.I.stop();p9(this,this.l.getVideoData().lengthSeconds);break;case 1084:q9(this,new g.sP(4));break;case 2:q9(this,new g.sP(4));p9(this,F8(a));break;case -1:q9(this,new g.sP(64));break;case -1E3:q9(this,new g.sP(128,{errorCode:"mdx.remoteerror",message:"This video is not available for remote playback."}))}a=
K8(this.g).l;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,ADa(this,a));a=K8(this.g);-1==a.volume||Math.round(this.l.getVolume())==a.volume&&this.l.isMuted()==a.muted||this.K.isActive()||this.kF()}else zDa(this)};
g.h.aD=function(){this.l.T("mdxpreviousnextchange")};
g.h.Cp=function(){r9(this)||zDa(this)};
g.h.eJ=function(){this.g.zy()};
g.h.BC=function(a){a&&(a=g.pE("/watch_queue_ajax",{method:"GET",ad:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.z)(this.EU,this)}))&&(this.M=(0,g.z)(a.abort,a))};
g.h.EU=function(a,b){var c=new g.mO({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.l.T("mdxautoplayupnext",c)};
g.h.SC=function(a){(0,window.isNaN)(a)||this.l.T("mdxnowautoplaying",a)};
g.h.AC=function(){this.l.T("mdxautoplaycanceled")};
g.h.RO=function(a,b){-1==K8(this.g).g?t9(this,a):b&&this.g.yF(a)};
g.h.kF=function(){if(r9(this)){var a=K8(this.g);this.o.Ea(this.R);a.muted?this.l.mute():this.l.gg();this.l.setVolume(a.volume);this.R=this.o.O(this.l,"onVolumeChange",this.QC)}};
g.h.JE=function(){this.A.stop();if(!this.g.ka()){var a=K8(this.g);a.kb()&&q9(this,new g.sP(8));p9(this,F8(a));this.A.start()}};
g.h.KE=function(){this.B.stop();this.A.stop();var a=this.g.A.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.q(u9,g.W);u9.prototype.B=function(a){CDa(this,a.state)};g.q(v9,g.UZ);v9.prototype.J=function(){var a=this.l.xc("remote","receivers");a&&1<a.length&&!this.l.xc("remote","quickCast")?(this.H=g.lb(a,this.C,this),g.VZ(this,(0,g.G)(a,this.C)),a=this.l.xc("remote","currentReceiver"),this.xf(this.C(a)),this.enable(!0)):this.enable(!1)};
v9.prototype.C=function(a){return a.key};
v9.prototype.wf=function(a){return"cast-selector-receiver"==a?"Cast...":this.H[a].name};
v9.prototype.td=function(a){g.UZ.prototype.td.call(this,a);this.l.Od("remote","currentReceiver",this.H[a]);this.B.Qb()};g.q(w9,g.rV);g.h=w9.prototype;g.h.create=function(){tDa(g.JM(g.Y(this.g)));this.C.push(g.WF("yt-remote-before-disconnect",this.OQ,this));this.C.push(g.WF("yt-remote-connection-change",this.FT,this));this.C.push(g.WF("yt-remote-receiver-availability-change",this.bD,this));this.C.push(g.WF("yt-remote-auto-connect",this.DT,this));this.C.push(g.WF("yt-remote-receiver-resumed",this.CT,this));this.bD()};
g.h.load=function(){this.g.hu();g.rV.prototype.load.call(this);this.B=new o9(this,this.g,this.l);var a=(a=yDa())?a.currentTime:0;var b=m9()?new J8(h9(),void 0):null;0==a&&b&&(a=F8(K8(b)));0!=a&&(this.H=a||0,this.g.T("progresssync",a,void 0));BDa(this,this.D,this.D);g.r0(this.g.app,6)};
g.h.unload=function(){this.g.T("mdxautoplaycanceled");this.A=this.o;g.af(this.B,this.l);this.l=this.B=null;g.rV.prototype.unload.call(this);g.r0(this.g.app,5)};
g.h.V=function(){g.XF(this.C);g.rV.prototype.V.call(this)};
g.h.im=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.CB.apply(this.B,[a].concat(g.pa(c)))};
g.h.OJ=function(){return this.loaded?this.B.suggestion:null};
g.h.Xf=function(){return this.l?K8(this.l).Xf:!1};
g.h.hasNext=function(){return this.l?K8(this.l).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.FO=function(){var a=K8(this.l),b=this.g.getVideoData();return{allowSeeking:this.g.gd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.C?a.A+D8(a):a.A,isPeggedToLive:1>=(a.C?a.o+D8(a):a.o)-this.getCurrentTime(),loaded:a.I,seekableEnd:a.C?a.o+D8(a):a.o,seekableStart:0<a.B?a.B+D8(a):a.B}};
g.h.GO=function(){this.l&&this.l.wF()};
g.h.HO=function(){this.l&&this.l.xF()};
g.h.OQ=function(a){1==a&&(this.I=this.l?K8(this.l):null)};
g.h.FT=function(){var a=m9()?new J8(h9(),void 0):null;if(a){var b=this.A;this.loaded&&this.unload();this.l=a;this.I=null;b.key!=this.o.key&&(this.A=b,this.load())}else g.$e(this.l),this.l=null,this.loaded&&(this.unload(),(a=this.I)&&a.videoId==this.g.getVideoData().videoId&&this.g.gB(a.videoId,F8(a)));this.g.T("videodatachange","newdata",this.g.getVideoData(),3)};
g.h.bD=function(){this.F=[this.o].concat(vDa());var a=i9()||this.o;x9(this,a);this.g.va("onMdxReceiversChange")};
g.h.DT=function(){var a=i9();x9(this,a)};
g.h.CT=function(){this.A=i9()};
g.h.EO=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.F;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?z8():x9(this,b)),this.loaded?this.A:this.o;case "quickCast":return 2==this.F.length&&"cast-selector-receiver"==this.F[1].key?(b&&z8(),!0):!1}};
g.h.IO=function(){O8(this.l,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Ac=function(){return!1};g.hY.remote=w9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:34:16 Jul 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:38:36 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 122.899
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.056
  cdx.remote: 0.058
  esindex: 0.007
  LoadShardBlock: 81.955 (3)
  PetaboxLoader3.datanode: 138.008 (5)
  load_resource: 190.684 (2)
  PetaboxLoader3.resolve: 59.707 (2)
*/