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

(function(g){var window=this;var iya=function(a,b){return g.Vb(a,b)},I6=function(a){g.Cm(a,"zx",g.Bb());
return a},J6=function(a,b,c){g.ya(c)||(c=[String(c)]);
g.Fm(a.g,b,c)},jya=function(a,b){var c=[];
g.lk(b,function(a){try{var b=g.OC.prototype.l.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.u(b)?g.NC(b)&&c.push(a):c.push(a)},a);
return c},kya=function(a,b){var c=jya(a,b);
(0,g.C)(c,function(a){g.OC.prototype.remove.call(this,a)},a)},lya=function(){var a=g.lG;
kya(a,a.g.ce(!0))},mya=function(a,b,c,d){var e=new g.tm(null,void 0);
a&&g.um(e,a);b&&g.vm(e,b);c&&g.wm(e,c);d&&g.xm(e,d);return e},nya=function(a){g.vF[a]&&(a=g.vF[a],(0,g.C)(a,function(a){g.tF[a]&&delete g.tF[a]}),a.length=0)},oya=function(a){var b=g.sF();
if(b)if(b.clear(a),a)nya(a);else for(var c in g.vF)nya(c)},K6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.o=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.nm;this.g=this.l="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",pya(this,a.capabilities||""),qya(this,a.experiments||""),this.l=a.remoteControllerUrl||"",
this.g=a.localChannelEncryptionKey||"")},pya=function(a,b){a.capabilities.clear();
(0,g.Id)(b.split(","),g.Ea(iya,rya)).forEach(function(b){a.capabilities.add(b)})},qya=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},L6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},M6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},sya=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},tya=function(a){return new L6(a)},uya=function(a){return g.ya(a)?(0,g.G)(a,tya):[]},N6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},O6=function(a){return g.ya(a)?"["+(0,g.G)(a,N6).join(",")+"]":"null"},P6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},vya=function(a){return(0,g.G)(a,function(a){return{key:a.id,
name:a.name}})},Q6=function(a,b){return g.Ka(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},R6=function(a,b){return g.Ka(a,function(a){return M6(a,b)})},S6=function(){var a=g.oG("yt-remote-connected-devices")||[];
g.ib(a);return a},wya=function(a){if(g.Ra(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.G)(a,function(a,b){return 0==b?a:a.substring(c.length)})},xya=function(a){g.nG("yt-remote-connected-devices",a,86400)},U6=function(){if(T6)return T6;
var a=g.oG("yt-remote-device-id");a||(a=P6(),g.nG("yt-remote-device-id",a,31536E3));for(var b=S6(),c=1,d=a;g.Qa(b,d);)c++,d=a+"#"+c;return T6=d},V6=function(){var a=S6(),b=U6();
g.Qa(a,b);g.tG()&&g.kb(a,b);a=wya(a);if(g.Ra(a))try{g.rG.remove("remote_sid","/","youtube.com")}catch(c){}else try{g.sG("remote_sid",a.join(","),-1)}catch(c){}},yya=function(){return g.oG("yt-remote-session-browser-channel")},zya=function(){return g.oG("yt-remote-local-screens")||[]},Aya=function(){g.nG("yt-remote-lounge-token-expiration",!0,86400)},Bya=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.G)(zya(),function(a){return a.loungeToken}),c=(0,g.G)(a,function(a){return a.loungeToken});
(0,g.bm)(c,function(a){return!g.Qa(b,a)})&&Aya();
g.nG("yt-remote-local-screens",a,31536E3)},Cya=function(a,b){g.nG("yt-remote-session-browser-channel",a);
g.nG("yt-remote-session-screen-id",b);var c=S6(),d=U6();g.Qa(c,d)||c.push(d);xya(c);V6()},W6=function(a){a||(g.pG("yt-remote-session-screen-id"),g.pG("yt-remote-session-video-id"));
V6();a=S6();g.Va(a,U6());xya(a)},Dya=function(){if(!X6){var a=g.UC();
a&&(X6=new g.IC(a))}return X6?!!X6.get("yt-remote-use-staging-server"):!1},Eya=function(){var a=window.document.createElement("a");
g.Xc(a,"https://web.archive.org/web/20171231235121/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Fb(a)},Fya=function(a,b){var c=g.Ad("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.Yc(c,g.$d("https://web.archive.org/web/20171231235121/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},Gya=function(){var a=Eya(),b=window.document.getElementById(a),c=b&&g.HE(b,"loaded");
c||b&&!c||(b=Fya(a,function(){g.HE(b,"loaded")||(g.GE(b,"loaded","true"),g.zF(a),g.CD(g.Ea(oya,a),0))}))},Y6=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},Hya=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},Z6=function(a){a.length?Iya(a.shift(),function(){Z6(a)}):$6()},Jya=function(a){return"chrome-extension://"+a+a7},Iya=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},b7=function(a){return 0<=window.navigator.userAgent.indexOf(a)},$6=function(){var a=Hya();
a&&a(!1,"No cast extension found")},c7=function(){if(Kya){var a=2,b=Hya(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Iya("//web.archive.org/web/20171231235121/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",$6,c)}},Lya=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(c7(),a({command:"cast.sender.init"}))},Mya=function(){c7();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);Z6(["//web.archive.org/web/20171231235121/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+a7,"//web.archive.org/web/20171231235121/https://www.gstatic.com/eureka/clank"+a7])},d7=function(a,b,c){g.M.call(this);
this.C=null!=c?(0,g.z)(a,c):a;this.sc=b;this.B=(0,g.z)(this.KH,this);this.g=!1;this.l=0;this.o=this.va=null;this.A=[]},e7=function(){},f7=function(a,b,c,d){this.g=a;
this.o=b;this.F=c;this.D=d||1;this.B=45E3;this.A=new g.Jm(this);this.l=new g.pg;this.l.setInterval(250)},Oya=function(a,b,c){a.pj=1;
a.mh=I6(b.clone());a.Ji=c;a.C=!0;Nya(a,null)},g7=function(a,b,c,d,e){a.pj=1;
a.mh=I6(b.clone());a.Ji=null;a.C=c;e&&(a.dC=!1);Nya(a,d)},Nya=function(a,b){a.Tj=(0,g.F)();
h7(a);a.Fh=a.mh.clone();J6(a.Fh,"t",a.D);a.Sl=0;a.Kc=a.g.xq(a.g.Ml()?b:null);0<a.ar&&(a.Ko=new g.Rk((0,g.z)(a.qD,a,a.Kc),a.ar));a.A.P(a.Kc,"readystatechange",a.GS);var c=a.ji?g.cc(a.ji):{};a.Ji?(a.tp="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Kc.send(a.Fh,a.tp,a.Ji,c)):(a.tp="GET",a.dC&&!g.wd&&(c.Connection="close"),a.Kc.send(a.Fh,a.tp,null,c));a.g.sf(1)},Rya=function(a,b,c){for(var d=!0;!a.Th&&a.Sl<c.length;){var e=Pya(a,c);
if(e==i7){4==b&&(a.nh=4,j7(15),d=!1);break}else if(e==Qya){a.nh=4;j7(16);d=!1;break}else k7(a,e)}4==b&&0==c.length&&(a.nh=1,j7(17),d=!1);a.wf=a.wf&&d;d||(l7(a),m7(a))},Pya=function(a,b){var c=a.Sl,d=b.indexOf("\n",c);
if(-1==d)return i7;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return Qya;d+=1;if(d+c>b.length)return i7;var e=b.substr(d,c);a.Sl=d+c;return e},Tya=function(a,b){a.Tj=(0,g.F)();
h7(a);var c=b?window.location.hostname:"";a.Fh=a.mh.clone();g.Cm(a.Fh,"DOMAIN",c);g.Cm(a.Fh,"t",a.D);try{a.xf=new window.ActiveXObject("htmlfile")}catch(n){l7(a);a.nh=7;j7(22);m7(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in n7)k=n7[l];else if(l in Sya)k=n7[l]=Sya[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=
m.toString(16).toUpperCase()}k=n7[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Zc(g.wc("b/12014412"),d);a.xf.open();a.xf.write(g.Rc(c));a.xf.close();a.xf.parentWindow.m=(0,g.z)(a.LR,a);a.xf.parentWindow.d=(0,g.z)(a.uB,a,!0);a.xf.parentWindow.rpcClose=(0,g.z)(a.uB,a,!1);c=a.xf.createElement("DIV");a.xf.parentWindow.document.body.appendChild(c);d=g.Ic(a.Fh.toString());d=g.rb(g.Fc(d));d=g.Zc(g.wc("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=g.Rc(d);
a.g.sf(1)},h7=function(a){a.Iu=(0,g.F)()+a.B;
Uya(a,a.B)},Uya=function(a,b){if(null!=a.nk)throw Error("WatchDog timer not null");
a.nk=o7((0,g.z)(a.cS,a),b)},p7=function(a){a.nk&&(g.w.clearTimeout(a.nk),a.nk=null)},m7=function(a){a.g.Hx()||a.Th||a.g.Ao(a)},l7=function(a){p7(a);
g.Ye(a.Ko);a.Ko=null;a.l.stop();g.Pm(a.A);if(a.Kc){var b=a.Kc;a.Kc=null;b.abort();b.dispose()}a.xf&&(a.xf=null)},k7=function(a,b){try{a.g.nB(a,b),a.g.sf(4)}catch(c){}},Wya=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;Vya(a,b,function(e){e?c(!0):g.w.setTimeout(function(){Wya(a,b,c,d,f)},f)})}},Vya=function(a,b,c){var d=new window.Image;
d.onload=function(){try{q7(d),c(!0)}catch(e){}};
d.onerror=function(){try{q7(d),c(!1)}catch(e){}};
d.onabort=function(){try{q7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{q7(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},q7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},Xya=function(a){this.g=a;
this.l=new e7},Yya=function(a){var b=r7(a.g,a.tk,"/mail/images/cleardot.gif");
I6(b);Wya(b.toString(),5E3,(0,g.z)(a.VG,a),3,2E3);a.sf(1)},t7=function(a){var b=a.g.H;
if(null!=b)j7(5),b?(j7(11),s7(a.g,a,!1)):(j7(12),s7(a.g,a,!0));else if(a.se=new f7(a,void 0,void 0,void 0),a.se.ji=a.Xq,b=a.g,b=r7(b,b.Ml()?a.Sk:null,a.Zq),j7(5),!g.ud||g.sc(10))J6(b,"TYPE","xmlhttp"),g7(a.se,b,!1,a.Sk,!1);else{J6(b,"TYPE","html");var c=a.se;a=!!a.Sk;c.pj=3;c.mh=I6(b.clone());Tya(c,a)}},u7=function(a,b,c){this.g=1;
this.l=[];this.A=[];this.B=new e7;this.F=a||null;this.H=null!=b?b:null;this.C=c||!1},Zya=function(a,b){this.g=a;
this.map=b;this.context=null},$ya=function(a){g.$e.call(this,"statevent",a)},aza=function(a,b){g.$e.call(this,"timingevent",a);
this.size=b},bza=function(a){g.$e.call(this,"serverreachability",a)},eza=function(a){cza(a);
if(3==a.g){var b=a.Al++,c=a.wn.clone();g.Cm(c,"SID",a.o);g.Cm(c,"RID",b);g.Cm(c,"TYPE","terminate");v7(a,c);b=new f7(a,a.o,b,void 0);b.pj=2;b.mh=I6(c.clone());(new window.Image).src=b.mh;b.Tj=(0,g.F)();h7(b)}dza(a)},fza=function(a){a.rH(1,0);
a.wn=r7(a,null,a.Wq);w7(a)},cza=function(a){a.bh&&(a.bh.abort(),a.bh=null);
a.oc&&(a.oc.cancel(),a.oc=null);a.sg&&(g.w.clearTimeout(a.sg),a.sg=null);x7(a);a.Pd&&(a.Pd.cancel(),a.Pd=null);a.eh&&(g.w.clearTimeout(a.eh),a.eh=null)},gza=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.l.push(new Zya(a.HN++,b));2!=a.g&&3!=a.g||w7(a)},w7=function(a){a.Pd||a.eh||(a.eh=o7((0,g.z)(a.sB,a),0),a.hj=0)},iza=function(a,b){if(1==a.g){if(!b){a.Al=Math.floor(1E5*Math.random());
var c=a.Al++,d=new f7(a,"",c,void 0);d.ji=null;var e=y7(a),f=a.wn.clone();g.Cm(f,"RID",c);g.Cm(f,"CVER","1");v7(a,f);Oya(d,f,e);a.Pd=d;a.g=2}}else 3==a.g&&(b?hza(a,b):0==a.l.length||a.Pd||hza(a))},hza=function(a,b){if(b)if(6<a.Vh){a.l=a.A.concat(a.l);
a.A.length=0;var c=a.Al-1;var d=y7(a)}else c=b.F,d=b.Ji;else c=a.Al++,d=y7(a);var e=a.wn.clone();g.Cm(e,"SID",a.o);g.Cm(e,"RID",c);g.Cm(e,"AID",a.Cj);v7(a,e);c=new f7(a,a.o,c,a.hj+1);c.ji=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.Pd=c;Oya(c,e,d)},v7=function(a,b){if(a.nd){var c=a.nd.lx();
c&&g.Mb(c,function(a,c){g.Cm(b,c,a)})}},y7=function(a){var b=Math.min(a.l.length,1E3),c=["count="+b];
if(6<a.Vh&&0<b){var d=a.l[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.l[e].g,k=a.l[e].map;f=6>=a.Vh?e:f-d;try{g.Mb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.A=a.A.concat(a.l.splice(0,b));
return c.join("&")},jza=function(a){a.oc||a.sg||(a.D=1,a.sg=o7((0,g.z)(a.rB,a),0),a.Yi=0)},z7=function(a){if(a.oc||a.sg||3<=a.Yi)return!1;
a.D++;a.sg=o7((0,g.z)(a.rB,a),kza(a,a.Yi));a.Yi++;return!0},s7=function(a,b,c){a.sp=c;
a.hf=b.Ag;a.C||fza(a)},x7=function(a){null!=a.Xh&&(g.w.clearTimeout(a.Xh),a.Xh=null)},kza=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},A7=function(a,b){if(2==b||9==b){var c=null;
a.nd&&(c=null);var d=(0,g.z)(a.DT,a);c||(c=new g.tm("//web.archive.org/web/20171231235121/https://www.google.com/images/cleardot.gif"),I6(c));Vya(c.toString(),1E4,d)}else j7(2);lza(a,b)},lza=function(a,b){a.g=0;
a.nd&&a.nd.iw(b);dza(a);cza(a)},dza=function(a){a.g=0;
a.hf=-1;if(a.nd)if(0==a.A.length&&0==a.l.length)a.nd.kq();else{g.Ya(a.A);var b=g.Ya(a.l);a.A.length=0;a.l.length=0;a.nd.kq(b)}},r7=function(a,b,c){var d=g.Dm(c);
if(""!=d.l)b&&g.vm(d,b+"."+d.l),g.wm(d,d.B);else{var e=window.location;d=mya(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c)}a.Fk&&g.Mb(a.Fk,function(a,b){g.Cm(d,b,a)});
g.Cm(d,"VER",a.Vh);v7(a,d);return d},o7=function(a,b){if(!g.Aa(a))throw Error("Fn must not be null and must be a function");
return g.w.setTimeout(function(){a()},b)},j7=function(a){B7.dispatchEvent(new $ya(B7,a))},mza=function(){},nza=function(a,b){this.action=a;
this.params=b||{}},D7=function(a,b){g.M.call(this);
this.g=new g.Wt(this.o,0,this);g.N(this,this.g);this.l=this.sc=0;if(g.Aa(a))b&&(a=(0,g.z)(a,b));else if(a&&g.Aa(a.handleEvent))a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.A=a;C7(this)},C7=function(a){a.g.stop();
a.sc=5E3+2E4*Math.random()},E7=function(a,b,c){this.K=a;
this.C=b;this.o=new g.HC;this.l=new D7(this.oU,this);this.g=this.bb=null;this.I=!1;this.B=null;this.H="";this.F=this.A=0;this.D=[];this.L=c||!1},oza=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.sp,sessionId:a.g.o,arrayId:a.g.Cj}},pza=function(a,b){a.F=b||0;
a.l.stop();a.g&&(3==a.g.g&&iza(a.g),eza(a.g));a.F=0},F7=function(a){return!!a.g&&3==a.g.g},qza=function(a,b){(a.C.loungeIdToken=b)||a.l.stop()},G7=function(a){this.port=this.domain="";
this.g="/api/lounge";this.l=!0;a=a||window.document.location.href;var b=g.Fg(a)||"";b&&(this.port=":"+b);this.domain=g.Eg(a)||"";a=g.Kb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Eb(a,"10.0")&&(this.l=!1))},H7=function(a,b){var c=a.g;
if(g.u(void 0)?0:a.l)c="https://"+a.domain+a.port+a.g;return g.Og(c+b,{})},I7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,Jb:g.Ea(a.A,d,!0),onError:g.Ea(a.o,e),rd:g.Ea(a.B,e)};c&&(a.Mb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.SD(b,a)},uza=function(){var a=rza;
sza();J7.push(a);tza(J7)},K7=function(a,b){sza();
var c=J7,d=vza(a,String(b));g.Ra(c)?wza(d):(tza(c),(0,g.C)(c,function(a){a(d)}))},sza=function(){J7||(J7=g.x("yt.mdx.remote.debug.handlers_")||[],g.va("yt.mdx.remote.debug.handlers_",J7,void 0))},wza=function(a){var b=(L7+1)%50;
L7=b;M7[b]=a;N7||(N7=49==b)},tza=function(a){var b=M7;
if(b[0]){var c=L7,d=N7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.C)(a,function(a){a(e)})}while(d!=c);
M7=Array(50);L7=-1;N7=!1}},vza=function(a,b){var c=((0,g.F)()-xza)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},O7=function(a){g.lF.call(this);
this.D=a;this.g=[]},yza=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},zza=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Id)(a.g,function(a){return!!Q6(b,a)});
for(var d=0,e=b.length;d<e;d++)c=yza(a,b[d])||c;return c},Aza=function(a,b){var c=a.g.length;
a.g=(0,g.Id)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c},P7=function(a,b,c,d){g.lF.call(this);
this.C=a;this.B=b;this.o=c;this.A=d;this.l=0;this.g=null;this.va=window.NaN},R7=function(a){O7.call(this,"LocalScreenService");
this.o=a;this.l=window.NaN;Q7(this);this.info("Initializing with "+O6(this.g))},Bza=function(a){if(a.g.length){var b=(0,g.G)(a.g,function(a){return a.id}),c=H7(a.o,"/pairing/get_lounge_token_batch");
I7(a.o,c,{screen_ids:b.join(",")},(0,g.z)(a.WH,a),(0,g.z)(a.VH,a))}},Q7=function(a){var b=uya(zya());
b=(0,g.Id)(b,function(a){return!a.uuid});
return zza(a,b)},S7=function(a,b){Bya((0,g.G)(a.g,sya));
b&&Aya()},U7=function(a,b){g.lF.call(this);
this.C=b;var c=g.oG("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Qa(c,l)}this.g=d;this.B=a;this.o=this.A=window.NaN;this.l=null;T7("Initialized with "+g.wg(this.g))},Cza=function(a,b,c){var d=H7(a.B,"/pairing/get_screen_availability");
I7(a.B,d,{lounge_token:b.token},(0,g.z)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},V7=function(a,b){a:if(g.Qb(b)!=g.Qb(a.g))var c=!1;
else{c=g.Sb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(T7("Updated online screens: "+g.wg(a.g)),a.g=b,a.R("screenChange"));Dza(a)},W7=function(a){(0,window.isNaN)(a.o)||g.ED(a.o);
a.o=g.CD((0,g.z)(a.St,a),0<a.A&&a.A<(0,g.F)()?2E4:1E4)},T7=function(a){K7("OnlineScreenService",a)},Eza=function(a){var b={};
(0,g.C)(a.C(),function(a){a.token?b[a.token]=a.id:this.ac("Requesting availability of screen w/o lounge token.")});
return b},Dza=function(a){a=g.Sb(g.Nb(a.g,function(a){return a}));
g.ib(a);a.length?g.nG("yt-remote-online-screen-ids",a.join(","),60):g.pG("yt-remote-online-screen-ids")},X7=function(a){O7.call(this,"ScreenService");
this.C=a;this.l=this.o=null;this.A=[];this.B={};Fza(this)},Hza=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.ke();if(k=(c?R6(k,c):null)||R6(k,b)){k.uuid=b;var l=Y7(a,k);Cza(a.l,l,function(a){e(a?l:null)})}else c?Gza(a,c,(0,g.z)(function(a){var f=Y7(this,new L6({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Cza(this.l,f,function(a){e(a?f:null)})},a),f):e(null)},Iza=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},Gza=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Mb:{screen_ids:b},method:"POST",context:a,Jb:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.SD(H7(a.C,"/pairing/get_lounge_token_batch"),e)},Jza=function(a){a.g=a.o.ke();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+O6(a.g))},Fza=function(a){Z7(a);
a.o=new R7(a.C);a.o.subscribe("screenChange",(0,g.z)(a.mI,a));Jza(a);a.A=uya(g.oG("yt-remote-automatic-screen-cache")||[]);Z7(a);a.info("Initializing automatic screens: "+O6(a.A));a.l=new U7(a.C,(0,g.z)(a.ke,a,!0));a.l.subscribe("screenChange",(0,g.z)(function(){this.R("onlineScreenChange")},a))},Y7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=R6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.nG("yt-remote-automatic-screen-cache",(0,g.G)(a.A,sya)));Z7(a);a.B[b.uuid]=b.id;g.nG("yt-remote-device-id-map",a.B,31536E3);return b},Z7=function(a){a.B=g.oG("yt-remote-device-id-map")||{}},$7=function(a,b,c){g.lF.call(this);
this.L=c;this.H=a;this.l=b;this.o=null},a8=function(a,b){K7(a.L,b)},b8=function(a,b){$7.call(this,a,b,"CastSession");
this.g=null;this.A=0;this.C=(0,g.z)(this.uU,this);this.B=(0,g.z)(this.mS,this);this.A=g.CD((0,g.z)(function(){Kza(this,null)},this),12E4)},Lza=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.wg(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.y,(0,g.z)(function(){a8(this,"Failed to send message: getMdxSessionStatus.")},a)):a8(a,"Sending yt message without session: "+g.wg(b))},Kza=function(a,b){g.ED(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.o||a.o.id!=b){var c=(0,g.z)(a.Bo,a),d=(0,g.z)(a.qe,a);a.Ax(b,c,d,5)}}else a.qe(Error("Waiting for session status timed out."))},c8=function(a,b,c){$7.call(this,a,b,"DialSession");
this.A=this.F=null;this.I="";this.N=c;this.B=null;this.D=g.y;this.C=window.NaN;this.K=(0,g.z)(this.xU,this);this.g=g.y},Mza=function(a){a.g=a.H.wD(a.I,a.l.label,a.l.friendlyName,(0,g.z)(function(a){this.g=g.y;
this.Bo(a)},a),(0,g.z)(function(a){this.g=g.y;
this.qe(a)},a))},Nza=function(a){var b={};
b.pairingCode=a.I;b.theme=a.N;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}Dya()&&(b.env_useStageMdx=1);return g.Mg(b)},d8=function(a,b){$7.call(this,a,b,"ManualSession");
this.g=g.CD((0,g.z)(this.Dj,this,null),150)},e8=function(a,b,c,d){g.lF.call(this);
this.l=a;this.D=b||"233637DE";this.C=c||"cl";this.F=d||!1;this.g=null;this.B=!1;this.o=[];this.A=(0,g.z)(this.SQ,this)},Oza=function(a,b){return b?g.Ka(a.o,function(a){return M6(b,a.label)},a):null},f8=function(a){K7("Controller",a)},rza=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},g8=function(a){return a.B||!!a.o.length||!!a.g},h8=function(a,b,c){b!=a.g&&(g.Ye(a.g),(a.g=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.l):a.R("yt-remote-cast2-receiver-selected",
b.l),b.subscribe("sessionScreen",(0,g.z)(a.pB,a,b)),b.o?a.R("yt-remote-cast2-session-change",b.o):c&&a.g.Dj(null)):a.R("yt-remote-cast2-session-change",null))},Pza=function(a){var b=a.l.vD(),c=a.g&&a.g.l;
a=(0,g.G)(b,function(a){c&&M6(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=Oza(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Vza=function(a,b,c,d,e,f,k){Qza()?Rza(b,e,f,k)&&(j8(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?Sza(a,c):(window.__onGCastApiAvailable=function(b,d){b?Sza(a,c):(k8("Failed to load cast API: "+d),l8(!1),j8(!1),g.pG("yt-remote-cast-available"),g.pG("yt-remote-cast-receiver"),Tza(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20171231235121/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):Gya():b7("CriOS")?Lya():b7("Android")&&b7("Chrome/")&&window.navigator.presentation?Mya():window.chrome&&window.navigator.presentation&&!b7("Edge")?(c7(),Z6(Uza.map(Jya))):$6())):i8("Cannot initialize because not running Chrome")},Tza=function(){i8("dispose");
var a=m8();a&&a.dispose();g.va("yt.mdx.remote.cloudview.instance_",null,void 0);Wza(!1);g.xF(n8);n8.length=0},o8=function(){return!!g.oG("yt-remote-cast-installed")},Xza=function(){var a=g.oG("yt-remote-cast-receiver");
return a?a.friendlyName:null},Yza=function(){i8("clearCurrentReceiver");
g.pG("yt-remote-cast-receiver")},Zza=function(){return o8()?m8()?m8().getCastSession():(k8("getCastSelector: Cast is not initialized."),null):(k8("getCastSelector: Cast API is not installed!"),null)},q8=function(){o8()?m8()?p8()?(i8("Requesting cast selector."),m8().requestSession()):(i8("Wait for cast API to be ready to request the session."),n8.push(g.wF("yt-remote-cast2-api-ready",q8))):k8("requestCastSelector: Cast is not initialized."):k8("requestCastSelector: Cast API is not installed!")},r8=
function(a,b){p8()?m8().setConnectedScreenStatus(a,b):k8("setConnectedScreenStatus called before ready.")},Qza=function(){var a=0<=g.Kb.search(/ (CrMo|Chrome|CriOS)\//);
return g.fJ||a},$za=function(a,b){m8().init(a,b)},Rza=function(a,b,c,d){var e=!1;
m8()||(a=new e8(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.nG("yt-remote-cast-available",a);g.AF("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){i8("onReceiverSelected: "+a.friendlyName);
g.nG("yt-remote-cast-receiver",a);g.AF("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){i8("onReceiverResumed: "+a.friendlyName);
g.nG("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){i8("onSessionChange: "+N6(a));
a||g.pG("yt-remote-cast-receiver");g.AF("yt-remote-cast2-session-change",a)}),g.va("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
i8("cloudview.createSingleton_: "+e);return e},m8=function(){return g.x("yt.mdx.remote.cloudview.instance_")},Sza=function(a,b){l8(!0);
j8(!1);$za(a,function(a){a?(Wza(!0),g.zF("yt-remote-cast2-api-ready")):(k8("Failed to initialize cast API."),l8(!1),g.pG("yt-remote-cast-available"),g.pG("yt-remote-cast-receiver"),Tza());b(a)})},i8=function(a){K7("cloudview",a)},k8=function(a){K7("cloudview",a)},l8=function(a){i8("setCastInstalled_ "+a);
g.nG("yt-remote-cast-installed",a)},p8=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},Wza=function(a){i8("setApiReady_ "+a);
g.va("yt.mdx.remote.cloudview.apiReady_",a,void 0)},j8=function(a){g.va("yt.mdx.remote.cloudview.initializing_",a,void 0)},s8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.g=-1;this.muted=!1;this.audioTrackId=null;this.D=this.F=0;this.l=null;this.hasNext=this.Lf=!1;this.I=this.H=this.o=this.B=0;this.A=window.NaN;this.C=!1;this.reset(a)},t8=function(a){a.audioTrackId=null;
a.l=null;a.g=-1;a.Lf=!1;a.hasNext=!1;a.F=0;a.D=(0,g.F)();a.B=0;a.o=0;a.H=0;a.I=0;a.A=window.NaN;a.C=!1},u8=function(a){return a.jb()?((0,g.F)()-a.D)/1E3:0},v8=function(a,b){a.F=b;
a.D=(0,g.F)()},w8=function(a){switch(a.g){case 1:case 1081:return((0,g.F)()-a.D)/1E3+a.F;
case -1E3:return 0}return a.F},x8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&t8(a)},y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.g;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.dc(a.l);b.hasPrevious=a.Lf;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.D;b.seekableStart=a.B;b.seekableEnd=a.o;b.duration=a.H;b.loadedTime=a.I;b.liveIngestionTime=a.A;return b},A8=function(a,b){g.lF.call(this);
this.g=0;this.A=a;this.C=[];this.B=new g.YB;this.o=this.l=null;this.H=(0,g.z)(this.qO,this);this.D=(0,g.z)(this.Cl,this);this.F=(0,g.z)(this.pO,this);this.I=(0,g.z)(this.DO,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Ou,this),aAa(this))):c=3;0!=c&&(b?this.Ou(c):g.CD((0,g.z)(function(){this.Ou(c)},this),0));
var d=Zza();d&&z8(this,d);this.subscribe("yt-remote-cast2-session-change",this.I)},B8=function(a){return new s8(a.A.getPlayerContextData())},aAa=function(a){(0,g.C)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.C.push(this.A.subscribe(a,g.Ea(this.OQ,a),this))},a)},bAa=function(a){(0,g.C)(a.C,function(a){this.A.unsubscribeByKey(a)},a);
a.C.length=0},C8=function(a,b){50>a.B.Hc()&&g.$B(a.B,b)},E8=function(a,b,c){var d=B8(a);
v8(d,c);-1E3!=d.g&&(d.g=b);D8(a,d)},F8=function(a,b,c){a.A.sendMessage(b,c)},D8=function(a,b){bAa(a);
a.A.setPlayerContextData(y8(b));aAa(a)},z8=function(a,b){a.o&&(a.o.removeUpdateListener(a.H),a.o.removeMediaListener(a.D),a.Cl(null));
a.o=b;a.o&&(K7("CP","Setting cast session: "+a.o.sessionId),a.o.addUpdateListener(a.H),a.o.addMediaListener(a.D),a.o.media.length&&a.Cl(a.o.media[0]))},cAa=function(a){var b=a.l.media,c=a.l.customData;
if(b&&c){var d=B8(a);b.contentId!=d.videoId&&K7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;v8(d,a.l.getEstimatedTime());D8(a,d)}else K7("CP","No cast media video. Ignoring state update.")},G8=function(a,b,c){return(0,g.z)(function(a){this.ac("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.ac("Retrying "+b+" using MDx browser channel."),F8(this,b,c))},a)},H8=function(a,b,c){g.lF.call(this);
this.B=window.NaN;this.N=!1;this.I=this.H=this.K=this.L=window.NaN;this.V=[];this.A=this.D=this.o=this.fb=this.g=null;this.na=a;this.V.push(g.WE(window,"beforeunload",(0,g.z)(this.NH,this)));this.l=[];this.fb=new s8;this.X=b.id;this.g=dAa(this,c);this.g.subscribe("handlerOpened",this.uO,this);this.g.subscribe("handlerClosed",this.rO,this);this.g.subscribe("handlerError",this.sO,this);this.g.subscribe("handlerMessage",this.tO,this);qza(this.g,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.fb.videoId;g.tG()&&g.nG("yt-remote-session-video-id",a)},this)},I8=function(a){K7("conn",a)},dAa=function(a,b){return new E7(H7(a.na,"/bc"),b)},J8=function(a,b){a.R("proxyStateChange",b)},eAa=function(a){a.B=g.CD((0,g.z)(function(){I8("Connecting timeout");
this.C(1)},a),2E4)},K8=function(a){g.ED(a.B);
a.B=window.NaN},L8=function(a){g.ED(a.L);
a.L=window.NaN},fAa=function(a){M8(a);
a.K=g.CD((0,g.z)(function(){N8(this,"getNowPlaying")},a),2E4)},M8=function(a){g.ED(a.K);
a.K=window.NaN},hAa=function(a,b){b&&(K8(a),L8(a));
b==(F7(a.g)&&(0,window.isNaN)(a.B))?b&&(J8(a,1),N8(a,"getSubtitlesTrack")):b?(a.W()&&a.fb.reset(),J8(a,1),N8(a,"getNowPlaying"),gAa(a)):a.C(1)},iAa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.fb.videoId&&(g.Yb(b.params)?a.fb.l=null:a.fb.l=b.params,a.R("remotePlayerChange"))},jAa=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.fb.listId=b.params.listId||a.fb.listId;x8(a.fb,c,d);a.R("remoteQueueChange")},lAa=function(a,b){b.params=b.params||{};
jAa(a,b);kAa(a,b);a.R("autoplayDismissed")},kAa=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
v8(a.fb,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.fb.g&&(c=-1E3);a.fb.g=c;c=Number(b.params.loadedTime);a.fb.I=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.fb.H=(0,window.isNaN)(c)?0:c;c=a.fb;var d=Number(b.params.liveIngestionTime);c.A=d;c.C=(0,window.isNaN)(d)?!1:!0;c=a.fb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.B=(0,window.isNaN)(d)?0:d;c.o=(0,window.isNaN)(e)?0:e;1==a.fb.g?fAa(a):M8(a);
a.R("remotePlayerChange")},mAa=function(a,b){if(-1E3!=a.fb.g){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.fb.g=c;c=(0,window.parseInt)(b.params.currentTime,10);v8(a.fb,(0,window.isNaN)(c)?0:c);a.R("remotePlayerChange")}},nAa=function(a,b){var c="true"==b.params.muted;
a.fb.volume=(0,window.parseInt)(b.params.volume,10);a.fb.muted=c;a.R("remotePlayerChange")},oAa=function(a,b){a.D=b.params.videoId;
a.R("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},pAa=function(a,b){var c="true"==b.params.hasNext;
a.fb.Lf="true"==b.params.hasPrevious;a.fb.hasNext=c;a.R("previousNextChange")},gAa=function(a){g.ED(a.I);
a.I=g.CD((0,g.z)(a.C,a,1),864E5)},N8=function(a,b,c){c?I8("Sending: action="+b+", params="+g.wg(c)):I8("Sending: action="+b);
a.g.sendMessage(b,c)},O8=function(a){O7.call(this,"ScreenServiceProxy");
this.ad=a;this.l=[];this.l.push(this.ad.$_s("screenChange",(0,g.z)(this.sU,this)));this.l.push(this.ad.$_s("onlineScreenChange",(0,g.z)(this.pQ,this)))},uAa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.wD("MDX_CONFIG")||b;g.lG&&lya();V6();P8||(P8=new G7(b?b.loungeApiHost:void 0),Dya()&&(P8.g="/api/loungedev"));Q8||(Q8=g.x("yt.mdx.remote.deferredProxies_")||[],g.va("yt.mdx.remote.deferredProxies_",Q8,void 0));qAa();var c=R8();if(!c){var d=new X7(P8);g.va("yt.mdx.remote.screenService_",d,void 0);c=R8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);Vza(a,d,function(a){a?S8()&&r8(S8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.AF("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.va("yt.mdx.remote.initialized_",!0,void 0),T8("Initializing: "+g.wg(b)),U8.push(g.wF("yt-remote-cast2-availability-change",function(){g.AF("yt-remote-receiver-availability-change")})),U8.push(g.wF("yt-remote-cast2-receiver-selected",function(){V8(null);
g.AF("yt-remote-auto-connect","cast-selector-receiver")})),U8.push(g.wF("yt-remote-cast2-receiver-resumed",function(){g.AF("yt-remote-receiver-resumed","cast-selector-receiver")})),U8.push(g.wF("yt-remote-cast2-session-change",rAa)),U8.push(g.wF("yt-remote-connection-change",function(a){a?r8(S8(),"YouTube TV"):W8()||(r8(null,null),Yza())})),a=X8(),b.isAuto&&(a.id+="#dial"),g.mE("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),T8(" -- with channel params: "+
g.wg(a)),sAa(a),c.start(),S8()||tAa())},wAa=function(){var a=vAa();
o8()&&g.oG("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},vAa=function(){var a=R8().ad.$_gos();
var b=Y8();b&&Z8()&&(Q6(a,b)||a.push(b));return vya(a)},$8=function(){var a=xAa();
!a&&o8()&&Xza()&&(a={key:"cast-selector-receiver",name:Xza()});return a},xAa=function(){var a=vAa(),b=Y8();
b||(b=W8());return g.Ka(a,function(a){return b&&M6(b,a.key)?!0:!1})},Y8=function(){var a=S8();
if(!a)return null;var b=R8().ke();return R6(b,a)},rAa=function(a){T8("remote.onCastSessionChange_: "+N6(a));
if(a){var b=Y8();b&&b.id==a.id?r8(b.id,"YouTube TV"):(b&&a9(),b9(a,1))}else Z8()&&a9()},a9=function(){p8()?m8().stopSession():k8("stopSession called before API ready.");
var a=Z8();a&&(a.disconnect(1),c9(null))},d9=function(){var a=Z8();
return!!a&&3!=a.getProxyState()},T8=function(a){K7("remote",a)},R8=function(){if(!e9){var a=g.x("yt.mdx.remote.screenService_");
e9=a?new O8(a):null}return e9},S8=function(){return g.x("yt.mdx.remote.currentScreenId_")},yAa=function(a){g.va("yt.mdx.remote.currentScreenId_",a,void 0)},zAa=function(){return g.x("yt.mdx.remote.connectData_")},V8=function(a){g.va("yt.mdx.remote.connectData_",a,void 0)},Z8=function(){return g.x("yt.mdx.remote.connection_")},c9=function(a){var b=Z8();
V8(null);a||yAa("");g.va("yt.mdx.remote.connection_",a,void 0);Q8&&((0,g.C)(Q8,function(b){b(a)}),Q8.length=0);
b&&!a?g.AF("yt-remote-connection-change",!1):!b&&a&&g.AF("yt-remote-connection-change",!0)},W8=function(){var a=g.tG();
if(!a)return null;var b=R8().ke();return R6(b,a)},b9=function(a,b){Y8()&&Y8();
yAa(a.id);var c=new H8(P8,a,X8());c.connect(b,zAa());c.subscribe("beforeDisconnect",function(a){g.AF("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){Z8()&&c9(null)});
c9(c)},tAa=function(){var a=W8();
a?(T8("Resume connection to: "+N6(a)),b9(a,0)):(W6(),Yza(),T8("Skipping connecting because no session screen found."))},qAa=function(){var a=X8();
if(g.Yb(a)){a=U6();var b=g.oG("yt-remote-session-name")||"",c=g.oG("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.va("yt.mdx.remote.channelParams_",a,void 0)}},X8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},sAa=function(a){a?(g.nG("yt-remote-session-app",a.app),g.nG("yt-remote-session-name",a.name)):(g.pG("yt-remote-session-app"),g.pG("yt-remote-session-name"));
g.va("yt.mdx.remote.channelParams_",a,void 0)},f9=function(a,b,c){g.M.call(this);
this.F=a;this.l=b;this.o=new g.iF(this);g.N(this,this.o);this.o.O(b,"onCaptionsTrackListChanged",this.IP);this.o.O(b,"captionschanged",this.oO);this.o.O(b,"captionssettingschanged",this.HC);this.o.O(b,"videoplayerreset",this.Co);this.o.O(b,"mdxautoplaycancel",this.UG);this.V=this.o.O(b,"onVolumeChange",this.ZA);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.mB,this);c.subscribe("remotePlayerChange",this.El,this);c.subscribe("remoteQueueChange",this.Co,this);c.subscribe("autoplayUpNext",this.IA,
this);c.subscribe("previousNextChange",this.jB,this);c.subscribe("nowAutoplaying",this.bB,this);c.subscribe("autoplayDismissed",this.HA,this);this.suggestion=null;this.H=new g.gO(64);this.A=new g.Wt(this.DC,500,this);g.N(this,this.A);this.B=new g.Wt(this.EC,1E3,this);g.N(this,this.B);this.K=new d7(this.QT,0,this);g.N(this,this.K);this.C={};this.L=new g.Wt(this.kD,1E3,this);g.N(this,this.L);this.I=new g.Rk(this.jL,1E3,this);g.N(this,this.I);this.N=g.y;this.HC();this.Co();this.El()},g9=function(a,b){var c=
a.F,d=a.l.ea().lengthSeconds;
c.H=b||0;c.g.R("progresssync",b,d)},AAa=function(a){g9(a,0);
a.A.stop();h9(a,new g.gO(64))},j9=function(a,b){if(i9(a)&&!a.D){var c=null;
b&&(c={style:a.l.Bi()},g.fc(c,b));a.g.uC(a.l.ea(1).videoId,c);a.C=B8(a.g).l}},k9=function(a,b){var c=a.l.Yf();
if(c){var d=c.he();var e=c.listId.toString()}var f=a.l.ea(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;f=f.zj;var m=B8(c),n=e||m.listId;l=l||0;var q={videoId:k,currentIndex:l};x8(m,k,l);g.u(b)&&(v8(m,b),q.currentTime=b);g.u(n)&&(q.listId=n);null!=d&&(q.playerParams=d);null!=f&&(q.clickTrackingParams=f);F8(c,"setPlaylist",q);e||D8(c,m);h9(a,new g.gO(1))},BAa=function(a,b){if(b){var c=a.l.xc("captions","tracklist",{vy:1});
c&&c.length?(a.l.Hd("captions","track",b),a.D=!1):(a.l.tl("captions"),a.D=!0)}else a.l.Hd("captions","track",{})},i9=function(a){return B8(a.g).videoId==a.l.ea(1).videoId},h9=function(a,b){a.B.stop();
var c=a.H;if(!g.nO(c,b)){var d=g.V(b,2);d!=g.V(a.H,2)&&g.bU(a.l,d);a.H=b;CAa(a.F,c,b)}},l9=function(a){g.Y.call(this,{G:"div",
M:"ytp-remote",J:[{G:"div",M:"ytp-remote-display-status",J:[{G:"div",M:"ytp-remote-display-status-icon",J:[g.WU()]},{G:"div",M:"ytp-remote-display-status-text",J:["{{statustext}}"]}]}]});this.l=new g.sV(this,250);g.N(this,this.l);this.o=a;this.O(a,"presentingplayerstatechange",this.A);DAa(this,g.ZT(a))},DAa=function(a,b){if(3==a.o.Qa()){var c={RECEIVER_NAME:a.o.xc("remote","currentReceiver").name};
c=g.V(b,128)?g.U("YTP_MDX_STATUS_ERROR_2",c):b.jb()||g.V(b,4)?g.U("YTP_MDX_STATUS_PLAYING_2",c):g.U("YTP_MDX_STATUS_CONNECTED_2",c);a.updateValue("statustext",c);a.l.show()}else a.l.hide()},m9=function(a,b){g.J_.call(this,g.U("YTP_MDX_TITLE"),0,a,b);
this.l=a;this.F={};this.O(a,"onMdxReceiversChange",this.I);this.O(a,"presentingplayerstatechange",this.I);this.I()},n9=function(a){g.zU.call(this,a);
g.vG({YTP_MDX_CAST_SELECTOR:"Cast...",YTP_MDX_MY_COMPUTER:"This computer",YTP_MDX_PLAYER_ERROR:"This video is not available for remote playback.",YTP_MDX_STATUS_CONNECTED_2:"Connected to $RECEIVER_NAME",YTP_MDX_STATUS_ERROR_2:"Error on $RECEIVER_NAME",YTP_MDX_STATUS_PLAYING_2:"Playing on $RECEIVER_NAME",YTP_MDX_TITLE:"Play on"});this.o={key:P6(),name:g.U("YTP_MDX_MY_COMPUTER")};this.B=null;this.C=[];this.I=this.l=null;this.F=[this.o];this.A=this.o;this.D=new g.gO(64);this.H=0;if(!g.OL(g.W(this.g))){a=
this.g;var b=g.RT(a).H;b&&(b=b.o&&b.o.g)&&(b=new m9(a,b),g.N(this,b));b=new l9(a);g.N(this,b);g.tU(a,b.element,4)}},CAa=function(a,b,c){a.D=c;
a.g.R("presentingplayerstatechange",new g.tO(c,b))},o9=function(a,b){if(b.key!=a.A.key)if(b.key==a.o.key)a9();
else{a.A=b;var c=a.g.getPlaylistId();var d=a.g.ea(1),e=d.videoId;if(c||e){var f=a.g.Yf();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.fc(l).videoId}else k=[e];f=a.g.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.zj,index:Math.max(a.g.Hz(),0),currentTime:0==f?void 0:f}}else c=null;T8("Connecting to: "+g.wg(b));"cast-selector-receiver"==b.key?(V8(c||null),p8()?m8().setLaunchParams(c||null):k8("setLaunchParams called before ready.")):!c&&
d9()&&S8()==b.key?g.AF("yt-remote-connection-change",!0):(a9(),V8(c||null),c=R8().ke(),(c=R6(c,b.key))&&b9(c,1))}},Sya={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},n7={"'":"\\'"},EAa={},rya={IV:"atp",d0:"ska",s_:"que",CZ:"mus",Z_:"sus"};
K6.prototype.cn=function(){var a=new K6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.o=this.o;a.l=this.l;a.g=this.g};
var X6,T6="",a7=Y6("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",Kya=Y6("loadCastFramework")||Y6("loadCastApplicationFramework"),Uza=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.A(d7,g.M);g.h=d7.prototype;g.h.JH=function(a){this.A=arguments;this.g=!1;this.va?this.o=(0,g.F)()+this.sc:this.va=g.qg(this.B,this.sc)};
g.h.stop=function(){this.va&&(g.rg(this.va),this.va=null);this.o=null;this.g=!1;this.A=[]};
g.h.pause=function(){++this.l};
g.h.resume=function(){this.l&&(--this.l,!this.l&&this.g&&(this.g=!1,this.C.apply(null,this.A)))};
g.h.U=function(){this.stop();d7.Z.U.call(this)};
g.h.KH=function(){this.o?(this.va=g.qg(this.B,this.o-(0,g.F)()),this.o=null):(this.va=null,this.l?this.g=!0:(this.g=!1,this.C.apply(null,this.A)))};e7.prototype.stringify=function(a){return g.w.JSON.stringify(a,void 0)};
e7.prototype.parse=function(a){return g.w.JSON.parse(a,void 0)};g.h=f7.prototype;g.h.ji=null;g.h.wf=!1;g.h.nk=null;g.h.Iu=null;g.h.Tj=null;g.h.pj=null;g.h.mh=null;g.h.Fh=null;g.h.Ji=null;g.h.Kc=null;g.h.Sl=0;g.h.xf=null;g.h.tp=null;g.h.nh=null;g.h.Tk=-1;g.h.dC=!0;g.h.Th=!1;g.h.ar=0;g.h.Ko=null;var Qya={},i7={};g.h=f7.prototype;g.h.setTimeout=function(a){this.B=a};
g.h.GS=function(a){a=a.target;var b=this.Ko;b&&3==g.ex(a)?b.nj():this.qD(a)};
g.h.qD=function(a){try{if(a==this.Kc)a:{var b=g.ex(this.Kc),c=this.Kc.l,d=this.Kc.getStatus();if(g.ud&&!g.sc(10)||g.wd&&!g.rc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.bf&&!g.ix(this.Kc))break a;this.Th||4!=b||7==c||(8==c||0>=d?this.g.sf(3):this.g.sf(2));p7(this);var e=this.Kc.getStatus();this.Tk=e;var f=g.ix(this.Kc);(this.wf=200==e)?(4==b&&l7(this),this.C?(Rya(this,b,f),g.bf&&this.wf&&3==b&&(this.A.P(this.l,"tick",this.zS),this.l.start())):k7(this,f),this.wf&&!this.Th&&(4==b?this.g.Ao(this):
(this.wf=!1,h7(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.nh=3,j7(13)):(this.nh=0,j7(14)),l7(this),m7(this))}}catch(k){this.Kc&&g.ix(this.Kc)}finally{}};
g.h.zS=function(){var a=g.ex(this.Kc),b=g.ix(this.Kc);this.Sl<b.length&&(p7(this),Rya(this,a,b),this.wf&&4!=a&&h7(this))};
g.h.LR=function(a){o7((0,g.z)(this.KR,this,a),0)};
g.h.KR=function(a){this.Th||(p7(this),k7(this,a),h7(this))};
g.h.uB=function(a){o7((0,g.z)(this.JR,this,a),0)};
g.h.JR=function(a){this.Th||(l7(this),this.wf=a,this.g.Ao(this),this.g.sf(4))};
g.h.cancel=function(){this.Th=!0;l7(this)};
g.h.cS=function(){this.nk=null;var a=(0,g.F)();0<=a-this.Iu?(2!=this.pj&&this.g.sf(3),l7(this),this.nh=2,j7(18),m7(this)):Uya(this,this.Iu-a)};g.h=Xya.prototype;g.h.Xq=null;g.h.se=null;g.h.Lo=!1;g.h.Ix=null;g.h.tn=null;g.h.Yq=null;g.h.Zq=null;g.h.Me=null;g.h.Ag=-1;g.h.Sk=null;g.h.tk=null;g.h.connect=function(a){this.Zq=a;a=r7(this.g,null,this.Zq);j7(3);this.Ix=(0,g.F)();var b=this.g.F;null!=b?(this.Sk=b[0],(this.tk=b[1])?(this.Me=1,Yya(this)):(this.Me=2,t7(this))):(J6(a,"MODE","init"),this.se=new f7(this,void 0,void 0,void 0),this.se.ji=this.Xq,g7(this.se,a,!1,null,!0),this.Me=0)};
g.h.VG=function(a){if(a)this.Me=2,t7(this);else{j7(4);var b=this.g;b.hf=b.bh.Ag;A7(b,9)}a&&this.sf(2)};
g.h.xq=function(a){return this.g.xq(a)};
g.h.abort=function(){this.se&&(this.se.cancel(),this.se=null);this.Ag=-1};
g.h.Hx=function(){return!1};
g.h.nB=function(a,b){this.Ag=a.Tk;if(0==this.Me)if(b){try{var c=this.l.parse(b)}catch(d){c=this.g;c.hf=this.Ag;A7(c,2);return}this.Sk=c[0];this.tk=c[1]}else c=this.g,c.hf=this.Ag,A7(c,2);else if(2==this.Me)if(this.Lo)j7(7),this.Yq=(0,g.F)();else if("11111"==b){if(j7(6),this.Lo=!0,this.tn=(0,g.F)(),c=this.tn-this.Ix,!g.ud||g.sc(10)||500>c)this.Ag=200,this.se.cancel(),j7(12),s7(this.g,this,!0)}else j7(8),this.tn=this.Yq=(0,g.F)(),this.Lo=!1};
g.h.Ao=function(){this.Ag=this.se.Tk;if(this.se.wf)0==this.Me?this.tk?(this.Me=1,Yya(this)):(this.Me=2,t7(this)):2==this.Me&&((!g.ud||g.sc(10)?!this.Lo:200>this.Yq-this.tn)?(j7(11),s7(this.g,this,!1)):(j7(12),s7(this.g,this,!0)));else{0==this.Me?j7(9):2==this.Me&&j7(10);var a=this.g;a.hf=this.Ag;A7(a,2)}};
g.h.Ml=function(){return this.g.Ml()};
g.h.isActive=function(){return this.g.isActive()};
g.h.sf=function(a){this.g.sf(a)};g.h=u7.prototype;g.h.Fk=null;g.h.Pd=null;g.h.oc=null;g.h.Wq=null;g.h.wn=null;g.h.Xv=null;g.h.Ln=null;g.h.Al=0;g.h.HN=0;g.h.nd=null;g.h.eh=null;g.h.sg=null;g.h.Xh=null;g.h.bh=null;g.h.sp=null;g.h.Cj=-1;g.h.Gy=-1;g.h.hf=-1;g.h.hj=0;g.h.Yi=0;g.h.Vh=8;var B7=new g.Bf;g.A($ya,g.$e);g.A(aza,g.$e);g.A(bza,g.$e);g.h=u7.prototype;g.h.connect=function(a,b,c,d,e){j7(0);this.Wq=b;this.Fk=c||{};d&&g.u(e)&&(this.Fk.OSID=d,this.Fk.OAID=e);this.C?(o7((0,g.z)(this.yw,this,a),100),fza(this)):this.yw(a)};
g.h.yw=function(a){this.bh=new Xya(this);this.bh.Xq=null;this.bh.l=this.B;this.bh.connect(a)};
g.h.Hx=function(){return 0==this.g};
g.h.sB=function(a){this.eh=null;iza(this,a)};
g.h.rB=function(){this.sg=null;this.oc=new f7(this,this.o,"rpc",this.D);this.oc.ji=null;this.oc.ar=0;var a=this.Xv.clone();g.Cm(a,"RID","rpc");g.Cm(a,"SID",this.o);g.Cm(a,"CI",this.sp?"0":"1");g.Cm(a,"AID",this.Cj);v7(this,a);if(!g.ud||g.sc(10))g.Cm(a,"TYPE","xmlhttp"),g7(this.oc,a,!0,this.Ln,!1);else{g.Cm(a,"TYPE","html");var b=this.oc,c=!!this.Ln;b.pj=3;b.mh=I6(a.clone());Tya(b,c)}};
g.h.nB=function(a,b){if(0!=this.g&&(this.oc==a||this.Pd==a))if(this.hf=a.Tk,this.Pd==a&&3==this.g)if(7<this.Vh){try{var c=this.B.parse(b)}catch(f){c=null}if(g.ya(c)&&3==c.length)if(0==c[0])a:{if(!this.sg){if(this.oc)if(this.oc.Tj+3E3<this.Pd.Tj)x7(this),this.oc.cancel(),this.oc=null;else break a;z7(this);j7(19)}}else this.Gy=c[1],0<this.Gy-this.Cj&&37500>c[2]&&this.sp&&0==this.Yi&&!this.Xh&&(this.Xh=o7((0,g.z)(this.jO,this),6E3));else A7(this,11)}else b!=EAa.NW.g&&A7(this,11);else if(this.oc==a&&
x7(this),!g.D(b)){c=this.B.parse(b);g.ya(c);for(var d=0;d<c.length;d++){var e=c[d];this.Cj=e[0];e=e[1];2==this.g?"c"==e[0]?(this.o=e[1],this.Ln=e[2],e=e[3],null!=e?this.Vh=e:this.Vh=6,this.g=3,this.nd&&this.nd.kw(),this.Xv=r7(this,this.Ml()?this.Ln:null,this.Wq),jza(this)):"stop"==e[0]&&A7(this,7):3==this.g&&("stop"==e[0]?A7(this,7):"noop"!=e[0]&&this.nd&&this.nd.jw(e),this.Yi=0)}}};
g.h.jO=function(){null!=this.Xh&&(this.Xh=null,this.oc.cancel(),this.oc=null,z7(this),j7(20))};
g.h.Ao=function(a){if(this.oc==a){x7(this);this.oc=null;var b=2}else if(this.Pd==a)this.Pd=null,b=1;else return;this.hf=a.Tk;if(0!=this.g)if(a.wf)1==b?(b=(0,g.F)()-a.Tj,B7.dispatchEvent(new aza(B7,a.Ji?a.Ji.length:0,b,this.hj)),w7(this),this.A.length=0):jza(this);else{var c=a.nh,d;if(!(d=3==c||7==c||0==c&&0<this.hf)){if(d=1==b)this.Pd||this.eh||1==this.g||2<=this.hj?d=!1:(this.eh=o7((0,g.z)(this.sB,this,a),kza(this,this.hj)),this.hj++,d=!0);d=!(d||2==b&&z7(this))}if(d)switch(c){case 1:A7(this,5);
break;case 4:A7(this,10);break;case 3:A7(this,6);break;case 7:A7(this,12);break;default:A7(this,2)}}};
g.h.rH=function(a){if(!g.Qa(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.DT=function(a){a?j7(2):(j7(1),lza(this,8))};
g.h.xq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Zw;a.F=!1;return a};
g.h.isActive=function(){return!!this.nd&&this.nd.isActive(this)};
g.h.sf=function(a){B7.dispatchEvent(new bza(B7,a))};
g.h.Ml=function(){return!(!g.ud||g.sc(10))};
g.h=mza.prototype;g.h.kw=function(){};
g.h.jw=function(){};
g.h.iw=function(){};
g.h.kq=function(){};
g.h.lx=function(){return{}};
g.h.isActive=function(){return!0};g.A(D7,g.M);D7.prototype.o=function(){500<this.sc&&24E4>2*this.sc&&(this.sc*=2);this.A();this.l&&this.start()};
D7.prototype.start=function(){g.Xt(this.g,this.sc);this.l=(0,g.F)()+this.sc};
D7.prototype.stop=function(){this.g.stop();this.l=0};
D7.prototype.isActive=function(){return this.g.isActive()};g.A(E7,mza);g.h=E7.prototype;g.h.subscribe=function(a,b,c){return this.o.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.o.unsubscribe(a,b,c)};
g.h.Jd=function(a){return this.o.Jd(a)};
g.h.R=function(a,b){return this.o.R.apply(this.o,arguments)};
g.h.dispose=function(){this.I||(this.I=!0,g.Ye(this.o),pza(this),g.Ye(this.l),this.l=null)};
g.h.ha=function(){return this.I};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.H="";this.l.stop();this.B=a||null;this.A=b||0;a=this.K+"/test";b=this.K+"/bind";var d=new u7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.L),e=this.g;e&&(e.nd=null);d.nd=this;this.g=d;e?this.g.connect(a,b,this.C,e.o,e.Cj):c?this.g.connect(a,b,this.C,c.sessionId,c.arrayId):this.g.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.fc(c,b);this.l.isActive()||2==(this.g?this.g.g:0)?this.D.push(c):F7(this)&&gza(this.g,c)};
g.h.kw=function(){C7(this.l);this.B=null;this.A=0;if(this.D.length){var a=this.D;this.D=[];for(var b=0,c=a.length;b<c;++b)gza(this.g,a[b])}this.R("handlerOpened")};
g.h.iw=function(a){var b=2==a&&401==this.g.hf;if(4!=a&&!b){if(6==a||410==this.g.hf)b=this.l,b.g.stop(),b.sc=500;this.l.start()}this.R("handlerError",a)};
g.h.kq=function(a){if(!this.l.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.D.push(d)}};
g.h.lx=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.F&&(a.ui=""+this.F);this.B&&g.fc(a,this.B);return a};
g.h.jw=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(C7(this.l),this.l.start(),eza(this.g)):this.R("handlerMessage",new nza(a[0],a[1]))};
g.h.oU=function(){this.l.isActive();var a=this.g,b=0;a.oc&&b++;a.Pd&&b++;0!=b?this.l.start():this.connect(this.B,this.A)};G7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
G7.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
G7.prototype.B=function(a){a(Error("request timed out"))};var xza=(0,g.F)(),J7=null,M7=Array(50),L7=-1,N7=!1;g.A(O7,g.lF);O7.prototype.ke=function(){return this.g};
O7.prototype.contains=function(a){return!!Q6(this.g,a)};
O7.prototype.get=function(a){return a?R6(this.g,a):null};
O7.prototype.info=function(a){K7(this.D,a)};g.A(P7,g.lF);var FAa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=P7.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.va)&&this.uD()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.va)||(g.ED(this.va),this.va=window.NaN)};
g.h.U=function(){this.stop();P7.Z.U.call(this)};
g.h.uD=function(){this.va=window.NaN;this.g=g.SD(H7(this.C,"/pairing/get_screen"),{method:"POST",Mb:{pairing_code:this.B},timeout:5E3,Jb:(0,g.z)(this.qU,this),onError:(0,g.z)(this.pU,this),rd:(0,g.z)(this.rU,this)})};
g.h.qU=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.R("pairingComplete",new L6(c))};
g.h.pU=function(a){this.g=null;a.status&&404==a.status?this.l>=FAa.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=FAa[this.l],this.va=g.CD((0,g.z)(this.uD,this),a),this.l++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.rU=function(){this.g=null;this.R("pairingFailed",Error("Server not responding"))};g.A(R7,O7);g.h=R7.prototype;g.h.start=function(){Q7(this)&&this.R("screenChange");!g.oG("yt-remote-lounge-token-expiration")&&Bza(this);g.ED(this.l);this.l=g.CD((0,g.z)(this.start,this),1E4)};
g.h.add=function(a,b){Q7(this);yza(this,a);S7(this,!1);this.R("screenChange");b(a);a.token||Bza(this)};
g.h.remove=function(a,b){var c=Q7(this);Aza(this,a)&&(S7(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.np=function(a,b,c,d){var e=Q7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,S7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.U=function(){g.ED(this.l);R7.Z.U.call(this)};
g.h.WH=function(a){Q7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}S7(this,!b);b&&K7(this.D,"Missed "+b+" lounge tokens.")};
g.h.VH=function(a){K7(this.D,"Requesting lounge tokens failed: "+a)};g.A(U7,g.lF);g.h=U7.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.oG("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.F)()-144E5<a?0:a)?W7(this):(this.A=(0,g.F)()+3E5,g.nG("yt-remote-fast-check-period",this.A),this.St())};
g.h.isEmpty=function(){return g.Yb(this.g)};
g.h.update=function(){T7("Updating availability on schedule.");var a=this.C(),b=g.Nb(this.g,function(b,d){return b&&!!R6(a,d)},this);
V7(this,b)};
g.h.U=function(){g.ED(this.o);this.o=window.NaN;this.l&&(this.l.abort(),this.l=null);U7.Z.U.call(this)};
g.h.St=function(){g.ED(this.o);this.o=window.NaN;this.l&&this.l.abort();var a=Eza(this);if(g.Qb(a)){var b=H7(this.B,"/pairing/get_screen_availability");this.l=I7(this.B,b,{lounge_token:g.Sb(a).join(",")},(0,g.z)(this.lR,this,a),(0,g.z)(this.kR,this))}else V7(this,{}),W7(this)};
g.h.lR=function(a,b){this.l=null;var c=g.Sb(Eza(this));if(g.jb(c,g.Sb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;V7(this,d);W7(this)}else this.ac("Changing Screen set during request."),this.St()};
g.h.kR=function(a){this.ac("Screen availability failed: "+a);this.l=null;W7(this)};
g.h.ac=function(a){K7("OnlineScreenService",a)};g.A(X7,O7);g.h=X7.prototype;g.h.start=function(){this.o.start();this.l.start();this.g.length&&(this.R("screenChange"),this.l.isEmpty()||this.R("onlineScreenChange"))};
g.h.add=function(a,b,c){this.o.add(a,b,c)};
g.h.remove=function(a,b,c){this.o.remove(a,b,c);this.l.update()};
g.h.np=function(a,b,c,d){this.o.contains(a)?this.o.np(a,b,c,d):(a="Updating name of unknown screen: "+a.name,K7(this.D,a),d(Error(a)))};
g.h.ke=function(a){return a?this.g:g.Xa(this.g,(0,g.Id)(this.A,function(a){return!this.contains(a)},this))};
g.h.vD=function(){return(0,g.Id)(this.ke(!0),function(a){return!!this.l.g[a.id]},this)};
g.h.wD=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new P7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(a){g.Ye(f);d(Y7(this,a))},this));
f.subscribe("pairingFailed",function(a){g.Ye(f);e(a)});
f.start();return(0,g.z)(f.stop,f)};
g.h.tU=function(a,b,c,d){g.SD(H7(this.C,"/pairing/get_screen"),{method:"POST",Mb:{pairing_code:a},timeout:5E3,Jb:(0,g.z)(function(a,d){var e=new L6(d.screen||{});if(!e.name||Iza(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);Iza(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(Y7(this,e))},this),
onError:(0,g.z)(function(a){d(Error("pairing request failed: "+a.status))},this),
rd:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.h.U=function(){g.Ye(this.o);g.Ye(this.l);X7.Z.U.call(this)};
g.h.mI=function(){Jza(this);this.R("screenChange");this.l.update()};
X7.prototype.dispose=X7.prototype.dispose;g.A($7,g.lF);g.h=$7.prototype;g.h.Bo=function(a){this.o=a;this.R("sessionScreen",this.o)};
g.h.qe=function(a){this.ha()||(a&&a8(this,""+a),this.o=null,this.R("sessionScreen",null))};
g.h.info=function(a){K7(this.L,a)};
g.h.yD=function(){return null};
g.h.au=function(a){var b=this.l;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){a8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.U=function(){this.au("");$7.Z.U.call(this)};g.A(b8,$7);g.h=b8.prototype;g.h.Zt=function(a){if(this.g){if(this.g==a)return;a8(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.C);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.g=a;this.g.addUpdateListener(this.C);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);Lza(this)};
g.h.Dj=function(a){this.info("launchWithParams no-op for Cast: "+g.wg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.z)(function(){this.qe()},this),(0,g.z)(function(){this.qe(Error("Failed to stop receiver app."))},this)):this.qe(Error("Stopping cast device witout session."))};
g.h.au=g.y;g.h.U=function(){this.info("disposeInternal");g.ED(this.A);this.A=0;this.g&&(this.g.removeUpdateListener(this.C),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.g=null;b8.Z.U.call(this)};
g.h.mS=function(a,b){if(!this.ha())if(b){var c=g.Tw(b);if(c){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.wg(c));switch(d){case "mdxSessionStatus":Kza(this,c.screenId);break;default:a8(this,"Unknown youtube message: "+d)}}else a8(this,"Unable to parse message.")}else a8(this,"No data in message.")};
g.h.Ax=function(a,b,c,d){Hza(this.H,this.l.label,a,this.l.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(a8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.CD((0,g.z)(this.Ax,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.yD=function(){return this.g};
g.h.uU=function(a){this.ha()||a||(a8(this,"Cast session died."),this.qe())};g.A(c8,$7);g.h=c8.prototype;g.h.Zt=function(a){this.A=a;this.A.addUpdateListener(this.K)};
g.h.Dj=function(a){this.B=a;this.D()};
g.h.stop=function(){this.g();this.g=g.y;g.ED(this.C);this.A?this.A.stop((0,g.z)(this.qe,this,null),(0,g.z)(this.qe,this,"Failed to stop DIAL device.")):this.qe()};
g.h.U=function(){this.g();this.g=g.y;g.ED(this.C);this.A&&this.A.removeUpdateListener(this.K);this.A=null;c8.Z.U.call(this)};
g.h.xU=function(a){this.ha()||a||(a8(this,"DIAL session died."),this.g(),this.g=g.y,this.qe())};
g.h.Mr=function(a){this.I=P6();if(this.B){var b=new window.chrome.cast.DialLaunchResponse(!0,Nza(this));a(b);Mza(this)}else this.D=(0,g.z)(function(){g.ED(this.C);this.D=g.y;this.C=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,Nza(this));a(b);Mza(this)},this),this.C=g.CD((0,g.z)(function(){this.D()},this),100)};
g.h.DJ=function(a,b,c){Hza(this.H,this.F.receiver.label,a,this.l.friendlyName,(0,g.z)(function(a){a&&a.token?(this.Bo(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.Mr(b,c)},this),(0,g.z)(function(a){a8(this,"Failed to get DIAL screen: "+a);
this.Mr(b,c)},this))};g.A(d8,$7);d8.prototype.stop=function(){this.qe()};
d8.prototype.Zt=g.y;d8.prototype.Dj=function(){g.ED(this.g);this.g=window.NaN;var a=R6(this.H.ke(),this.l.label);a?this.Bo(a):this.qe(Error("No such screen"))};
d8.prototype.U=function(){g.ED(this.g);this.g=window.NaN;d8.Z.U.call(this)};g.A(e8,g.lF);g.h=e8.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.D);this.F||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.z)(this.oB,this),(0,g.z)(this.WQ,this),d,e);c.customDialLaunchCallback=(0,g.z)(this.UO,this);window.chrome.cast.initialize(c,
(0,g.z)(function(){this.ha()||(window.chrome.cast.addReceiverActionListener(this.A),uza(),this.l.subscribe("onlineScreenChange",(0,g.z)(this.xD,this)),this.o=Pza(this),window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(a){this.ac("Failed to set initial custom receivers: "+g.wg(a))},this)),this.R("yt-remote-cast2-availability-change",g8(this)),b(!0))},this),(0,g.z)(function(a){this.ac("Failed to initialize API: "+g.wg(a));
b(!1)},this))};
g.h.mT=function(a,b){f8("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.o;if(!a||c&&c.id!=a)f8("Unsetting old screen status: "+this.g.l.friendlyName),h8(this,null)}if(a&&b){if(!this.g){c=R6(this.l.ke(),a);if(!c){f8("setConnectedScreenStatus: Unknown screen.");return}var d=Oza(this,c);d||(f8("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.o.push(d),
window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(a){this.ac("Failed to set initial custom receivers: "+g.wg(a))},this)));
f8("setConnectedScreenStatus: new active receiver: "+d.friendlyName);h8(this,new d8(this.l,d),!0)}this.g.au(b)}else f8("setConnectedScreenStatus: no screen.")};
g.h.nT=function(a){this.ha()?this.ac("Setting connection data on disposed cast v2"):this.g?this.g.Dj(a):this.ac("Setting connection data without a session")};
g.h.wU=function(){this.ha()?this.ac("Stopping session on disposed cast v2"):this.g?(this.g.stop(),h8(this,null)):f8("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.z)(this.oB,this),(0,g.z)(this.pR,this))};
g.h.U=function(){this.l.unsubscribe("onlineScreenChange",(0,g.z)(this.xD,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.A);g.Va(g.x("yt.mdx.remote.debug.handlers_")||[],rza);g.Ye(this.g);e8.Z.U.call(this)};
g.h.ac=function(a){K7("Controller",a)};
g.h.pB=function(a,b){this.g==a&&(b||h8(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.SQ=function(a,b){if(!this.ha())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),f8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.l.label!=a.label)f8("onReceiverAction_: Stopping active receiver: "+this.g.l.friendlyName),this.g.stop();else{f8("onReceiverAction_: Casting to active receiver.");this.g.o&&this.R("yt-remote-cast2-session-change",this.g.o);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:h8(this,
new d8(this.l,a));break;case window.chrome.cast.ReceiverType.DIAL:h8(this,new c8(this.l,a,this.C));break;case window.chrome.cast.ReceiverType.CAST:h8(this,new b8(this.l,a));break;default:this.ac("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.l.label==a.label?this.g.stop():this.ac("Stopping receiver w/o session: "+a.friendlyName)}else this.ac("onReceiverAction_ called without receiver.")};
g.h.UO=function(a){if(this.ha())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.ac("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.l:null;if(!c||c.label!=b.label)return this.ac("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.o)return f8("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.g.o),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.ac('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);h8(this,new c8(this.l,b,this.C))}b=this.g;b.F=a;return b.F.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.z)(b.DJ,b,(b.F.extraData||{}).screenId||null)):new window.Promise((0,g.z)(b.Mr,b))};
g.h.oB=function(a){if(!this.ha()){f8("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)f8("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),h8(this,new b8(this.l,b),!0);else{this.ac("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.l,d=R6(this.l.ke(),c.label);
d&&M6(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(f8("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Ye(this.g),this.g=new b8(this.l,b),this.g.subscribe("sessionScreen",(0,g.z)(this.pB,this,this.g)),this.g.Dj(null));this.g.Zt(a)}}};
g.h.vU=function(){return this.g?this.g.yD():null};
g.h.pR=function(a){this.ha()||(this.ac("Failed to estabilish a session: "+g.wg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&h8(this,null))};
g.h.WQ=function(a){f8("Receiver availability updated: "+a);if(!this.ha()){var b=g8(this);this.B=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;g8(this)!=b&&this.R("yt-remote-cast2-availability-change",g8(this))}};
g.h.xD=function(){this.ha()||(this.o=Pza(this),f8("Updating custom receivers: "+g.wg(this.o)),window.chrome.cast.setCustomReceivers(this.o,g.y,(0,g.z)(function(){this.ac("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",g8(this)))};
e8.prototype.setLaunchParams=e8.prototype.nT;e8.prototype.setConnectedScreenStatus=e8.prototype.mT;e8.prototype.stopSession=e8.prototype.wU;e8.prototype.getCastSession=e8.prototype.vU;e8.prototype.requestSession=e8.prototype.requestSession;e8.prototype.init=e8.prototype.init;e8.prototype.dispose=e8.prototype.dispose;var n8=[];s8.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";t8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.g=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.l=a.trackData,this.Lf=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.D=a.playerTimeAt,this.B=a.seekableStart,this.o=a.seekableEnd,this.H=a.duration,this.I=a.loadedTime,this.A=a.liveIngestionTime,this.C=!(0,window.isNaN)(this.A))};
s8.prototype.jb=function(){return 1==this.g};
s8.prototype.getDuration=function(){return this.C?this.H+u8(this):this.H};
s8.prototype.clone=function(){return new s8(y8(this))};g.A(A8,g.lF);g.h=A8.prototype;g.h.play=function(){1==this.g?(this.l?this.l.play(null,g.y,G8(this,"play")):F8(this,"play"),E8(this,1,w8(B8(this))),this.R("remotePlayerChange")):C8(this,this.play)};
g.h.pause=function(){1==this.g?(this.l?this.l.pause(null,g.y,G8(this,"pause")):F8(this,"pause"),E8(this,2,w8(B8(this))),this.R("remotePlayerChange")):C8(this,this.pause)};
g.h.tD=function(a){if(1==this.g){if(this.l){var b=B8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.jb()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.l.seek(c,g.y,G8(this,"seekTo",{newTime:a}))}else F8(this,"seekTo",{newTime:a});E8(this,3,a);this.R("remotePlayerChange")}else C8(this,g.Ea(this.tD,a))};
g.h.stop=function(){if(1==this.g){this.l?this.l.stop(null,g.y,G8(this,"stopVideo")):F8(this,"stopVideo");var a=B8(this);a.index=-1;a.videoId="";t8(a);D8(this,a);this.R("remotePlayerChange")}else C8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=B8(this);if(this.o){if(c.volume!=a){var d=Math.round(a)/100;this.o.setReceiverVolumeLevel(d,(0,g.z)(function(){K7("CP","set receiver volume: "+d)},this),(0,g.z)(function(){this.ac("failed to set receiver volume.")},this))}c.muted!=b&&this.o.setReceiverMuted(b,(0,g.z)(function(){K7("CP","set receiver muted: "+b)},this),(0,g.z)(function(){this.ac("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);F8(this,"setVolume",e)}c.muted=b;c.volume=a;D8(this,c)}else C8(this,g.Ea(this.setVolume,a,b))};
g.h.uC=function(a,b){if(1==this.g){var c=B8(this),d={videoId:a};b&&(c.l={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.wg(b.style),g.fc(d,c.l));F8(this,"setSubtitlesTrack",d);D8(this,c)}else C8(this,g.Ea(this.uC,a,b))};
g.h.Nu=function(a,b){if(1==this.g){F8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Nc.id});var c=B8(this);c.audioTrackId=b.Nc.id;D8(this,c)}else C8(this,g.Ea(this.Nu,a,b))};
g.h.sD=function(a,b){if(1==this.g){if(a&&b){var c=B8(this);x8(c,a,b);D8(this,c)}F8(this,"previous")}else C8(this,g.Ea(this.sD,a,b))};
g.h.rD=function(a,b){if(1==this.g){if(a&&b){var c=B8(this);x8(c,a,b);D8(this,c)}F8(this,"next")}else C8(this,g.Ea(this.rD,a,b))};
g.h.Nw=function(){1==this.g?F8(this,"dismissAutoplay"):C8(this,this.Nw)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.R("proxyStateChange",a,this.g)}A8.Z.dispose.call(this)};
g.h.U=function(){bAa(this);this.A=null;this.B.clear();z8(this,null);A8.Z.U.call(this)};
g.h.Ou=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)g.aC(this.B).apply(this);else 3==a&&this.dispose()}};
g.h.OQ=function(a,b){this.R(a,b)};
g.h.qO=function(a){if(!a)this.Cl(null),z8(this,null);else if(this.o.receiver.volume){a=this.o.receiver.volume;var b=B8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)K7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,D8(this,b)}};
g.h.Cl=function(a){K7("CP","Cast media: "+!!a);this.l&&this.l.removeUpdateListener(this.F);if(this.l=a)this.l.addUpdateListener(this.F),cAa(this),this.R("remotePlayerChange")};
g.h.pO=function(a){a?(cAa(this),this.R("remotePlayerChange")):this.Cl(null)};
g.h.DO=function(){var a=Zza();a&&z8(this,a)};
g.h.ac=function(a){K7("CP",a)};g.A(H8,g.lF);g.h=H8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime;g.u(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.u(k)&&(l.currentIndex=k);c&&(this.fb.listId=c);this.fb.videoId=d;this.fb.index=k||0;this.fb.state=3;v8(this.fb,m);this.A="UNSUPPORTED";I8("Connecting with setPlaylist and params: "+g.wg(l));this.g.connect({method:"setPlaylist",params:g.wg(l)},a,yya())}else I8("Connecting without params"),
this.g.connect({},a,yya());eAa(this)};
g.h.dispose=function(){this.ha()||(this.R("beforeDispose"),J8(this,3));H8.Z.dispose.call(this)};
g.h.U=function(){K8(this);M8(this);L8(this);g.ED(this.H);this.H=window.NaN;g.ED(this.I);this.I=window.NaN;this.o=null;g.XE(this.V);this.V.length=0;this.g.dispose();H8.Z.U.call(this);this.A=this.D=this.l=this.fb=this.g=null};
g.h.NH=function(){this.C(2)};
g.h.uO=function(){I8("Channel opened");this.N&&(this.N=!1,L8(this),this.L=g.CD((0,g.z)(function(){I8("Timing out waiting for a screen.");this.C(1)},this),15E3));
Cya(oza(this.g),this.X)};
g.h.rO=function(){I8("Channel closed");(0,window.isNaN)(this.B)?W6(!0):W6();this.dispose()};
g.h.sO=function(a){W6();(0,window.isNaN)(this.F())?(I8("Channel error: "+a+" without reconnection"),this.dispose()):(this.N=!0,I8("Channel error: "+a+" with reconnection in "+this.F()+" ms"),J8(this,2))};
g.h.tO=function(a){a.params?I8("Received: action="+a.action+", params="+g.wg(a.params)):I8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.Tw(a.params.devices);this.l=(0,g.G)(a,function(a){return new K6(a)});
a=!!g.Ka(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
hAa(this,a);break;case "loungeScreenDisconnected":g.Wa(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
hAa(this,!1);break;case "remoteConnected":var b=new K6(g.Tw(a.params.device));g.Ka(this.l,function(a){return b?a.id==b.id:!1})||g.Ta(this.l,b);
break;case "remoteDisconnected":b=new K6(g.Tw(a.params.device));g.Wa(this.l,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":jAa(this,a);break;case "nowPlaying":lAa(this,a);break;case "onStateChange":kAa(this,a);break;case "onAdStateChange":mAa(this,a);break;case "onVolumeChanged":nAa(this,a);break;case "onSubtitlesTrackChanged":iAa(this,a);break;case "nowAutoplaying":oAa(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.D=a.params.videoId||null;this.R("autoplayUpNext",this.D);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.R("autoplayModeChange",this.A);"DISABLED"==this.A&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":pAa(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:I8("Unrecognized action: "+a.action)}};
g.h.WS=function(){if(this.o){var a=this.o;this.o=null;this.fb.videoId!=a&&N8(this,"getNowPlaying")}};
H8.prototype.subscribe=H8.prototype.subscribe;H8.prototype.unsubscribeByKey=H8.prototype.Jd;H8.prototype.da=function(){var a=3;this.ha()||(a=0,(0,window.isNaN)(this.F())?F7(this.g)&&(0,window.isNaN)(this.B)&&(a=1):a=2);return a};
H8.prototype.getProxyState=H8.prototype.da;H8.prototype.C=function(a){I8("Disconnecting with "+a);K8(this);this.R("beforeDisconnect",a);1==a&&W6();pza(this.g,a);this.dispose()};
H8.prototype.disconnect=H8.prototype.C;H8.prototype.ca=function(){var a=this.fb;this.o&&(a=this.fb.clone(),x8(a,this.o,a.index));return y8(a)};
H8.prototype.getPlayerContextData=H8.prototype.ca;
H8.prototype.ka=function(a){var b=new s8(a);b.videoId&&b.videoId!=this.fb.videoId&&(this.o=b.videoId,g.ED(this.H),this.H=g.CD((0,g.z)(this.WS,this),5E3));var c=[];this.fb.listId==b.listId&&this.fb.videoId==b.videoId&&this.fb.index==b.index||c.push("remoteQueueChange");this.fb.g==b.g&&this.fb.volume==b.volume&&this.fb.muted==b.muted&&w8(this.fb)==w8(b)&&g.wg(this.fb.l)==g.wg(b.l)||c.push("remotePlayerChange");this.fb.reset(a);(0,g.C)(c,function(a){this.R(a)},this)};
H8.prototype.setPlayerContextData=H8.prototype.ka;H8.prototype.W=function(){var a=this.g.C.id,b=g.Ka(this.l,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
H8.prototype.getOtherConnectedRemoteId=H8.prototype.W;H8.prototype.F=function(){var a=this.g;return a.l.isActive()?a.l.l-(0,g.F)():window.NaN};
H8.prototype.getReconnectTimeout=H8.prototype.F;H8.prototype.Y=function(){return this.A||"UNSUPPORTED"};
H8.prototype.getAutoplayMode=H8.prototype.Y;H8.prototype.ba=function(){return this.D||""};
H8.prototype.getAutoplayVideoId=H8.prototype.ba;H8.prototype.ma=function(){if(!(0,window.isNaN)(this.F())){var a=this.g.l;g.Yt(a.g);a.start()}};
H8.prototype.reconnect=H8.prototype.ma;H8.prototype.fa=function(a,b){N8(this,a,b);gAa(this)};
H8.prototype.sendMessage=H8.prototype.fa;g.A(O8,O7);g.h=O8.prototype;g.h.ke=function(a){return this.ad.$_gs(a)};
g.h.contains=function(a){return!!this.ad.$_c(a)};
g.h.get=function(a){return this.ad.$_g(a)};
g.h.start=function(){this.ad.$_st()};
g.h.add=function(a,b,c){this.ad.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.ad.$_r(a,b,c)};
g.h.np=function(a,b,c,d){this.ad.$_un(a,b,c,d)};
g.h.U=function(){for(var a=0,b=this.l.length;a<b;++a)this.ad.$_ubk(this.l[a]);this.l.length=0;this.ad=null;O8.Z.U.call(this)};
g.h.sU=function(){this.R("screenChange")};
g.h.pQ=function(){this.R("onlineScreenChange")};
X7.prototype.$_st=X7.prototype.start;X7.prototype.$_gspc=X7.prototype.tU;X7.prototype.$_gsppc=X7.prototype.wD;X7.prototype.$_c=X7.prototype.contains;X7.prototype.$_g=X7.prototype.get;X7.prototype.$_a=X7.prototype.add;X7.prototype.$_un=X7.prototype.np;X7.prototype.$_r=X7.prototype.remove;X7.prototype.$_gs=X7.prototype.ke;X7.prototype.$_gos=X7.prototype.vD;X7.prototype.$_s=X7.prototype.subscribe;X7.prototype.$_ubk=X7.prototype.Jd;var P8=null,Q8=null,e9=null,U8=[];g.p(f9,g.M);g.h=f9.prototype;
g.h.U=function(){g.M.prototype.U.call(this);this.A.stop();this.B.stop();this.K.stop();this.N();this.g.unsubscribe("proxyStateChange",this.mB,this);this.g.unsubscribe("remotePlayerChange",this.El,this);this.g.unsubscribe("remoteQueueChange",this.Co,this);this.g.unsubscribe("autoplayUpNext",this.IA,this);this.g.unsubscribe("previousNextChange",this.jB,this);this.g.unsubscribe("nowAutoplaying",this.bB,this);this.g.unsubscribe("autoplayDismissed",this.HA,this);this.g=this.F=null};
g.h.vz=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(i9(this)){if(1081!=B8(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":B8(this.g).jb()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.nj(c[0],c[1]);break;case "control_subtitles_set_track":j9(this,c[0]);break;case "control_set_audio_track":c=c[0],i9(this)&&this.g.Nu(this.l.ea(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.l.getCurrentTime();k9(this,0==c?void 0:c);break;case "control_seek":k9(this,c[0]);break;case "control_subtitles_set_track":j9(this,c[0]);break;case "control_set_audio_track":c=c[0],i9(this)&&this.g.Nu(this.l.ea(1).videoId,c)}};
g.h.oO=function(a){this.K.JH(a)};
g.h.QT=function(a){this.vz("control_subtitles_set_track",g.Yb(a)?null:a)};
g.h.HC=function(){var a=this.l.xc("captions","track");g.Yb(a)||j9(this,a)};
g.h.ZA=function(a){if(i9(this)){this.g.unsubscribe("remotePlayerChange",this.El,this);var b=Math.round(a.volume);a=!!a.muted;var c=B8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.L.start();this.g.subscribe("remotePlayerChange",this.El,this)}};
g.h.IP=function(){g.Yb(this.C)||BAa(this,this.C);this.D=!1};
g.h.mB=function(a,b){this.B.stop();2==b&&this.EC()};
g.h.El=function(){if(i9(this)){this.A.stop();var a=B8(this.g);switch(a.g){case 1081:case 1:h9(this,new g.gO(8));this.DC();break;case 1085:case 3:h9(this,new g.gO(9));break;case 1083:case 0:h9(this,new g.gO(2));this.I.stop();g9(this,this.l.ea().lengthSeconds);break;case 1084:h9(this,new g.gO(4));break;case 2:h9(this,new g.gO(4));g9(this,w8(a));break;case -1:h9(this,new g.gO(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.U("YTP_MDX_PLAYER_ERROR")},h9(this,new g.gO(128,a))}a=B8(this.g).l;
var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,BAa(this,a));a=B8(this.g);-1==a.volume||Math.round(this.l.getVolume())==a.volume&&this.l.isMuted()==a.muted||this.L.isActive()||this.kD()}else AAa(this)};
g.h.jB=function(){this.l.R("mdxpreviousnextchange")};
g.h.Co=function(){i9(this)||AAa(this)};
g.h.UG=function(){this.g.Nw()};
g.h.IA=function(a){a&&(a=g.SD("/watch_queue_ajax",{method:"GET",Vc:{action_get_watch_queue_item:1,video_id:a},Jb:(0,g.z)(this.OR,this)}))&&(this.N=(0,g.z)(a.abort,a))};
g.h.OR=function(a,b){var c=new g.hN({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.l.R("mdxautoplayupnext",c)};
g.h.bB=function(a){(0,window.isNaN)(a)||this.l.R("mdxnowautoplaying",a)};
g.h.HA=function(){this.l.R("mdxautoplaycanceled")};
g.h.jL=function(a,b){-1==B8(this.g).g?k9(this,a):b&&this.g.tD(a)};
g.h.kD=function(){if(i9(this)){var a=B8(this.g);this.o.Da(this.V);a.muted?this.l.mute():this.l.Zf();this.l.setVolume(a.volume);this.V=this.o.O(this.l,"onVolumeChange",this.ZA)}};
g.h.DC=function(){this.A.stop();if(!this.g.ha()){var a=B8(this.g);a.jb()&&h9(this,new g.gO(8));g9(this,w8(a));this.A.start()}};
g.h.EC=function(){this.B.stop();this.A.stop();var a=this.g.A.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(l9,g.Y);l9.prototype.A=function(a){DAa(this,a.state)};g.p(m9,g.J_);m9.prototype.I=function(){var a=this.l.xc("remote","receivers");a&&1<a.length&&!this.l.xc("remote","quickCast")?(this.F=g.lb(a,this.B,this),g.K_(this,(0,g.G)(a,this.B)),a=this.l.xc("remote","currentReceiver"),this.rf(this.B(a)),this.enable(!0)):this.enable(!1)};
m9.prototype.B=function(a){return a.key};
m9.prototype.qf=function(a){return"cast-selector-receiver"==a?g.U("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
m9.prototype.qd=function(a){g.J_.prototype.qd.call(this,a);this.l.Hd("remote","currentReceiver",this.F[a]);this.A.Ob()};g.p(n9,g.zU);g.h=n9.prototype;g.h.create=function(){uAa(g.DL(g.W(this.g)));this.C.push(g.wF("yt-remote-before-disconnect",this.kO,this));this.C.push(g.wF("yt-remote-connection-change",this.XQ,this));this.C.push(g.wF("yt-remote-receiver-availability-change",this.kB,this));this.C.push(g.wF("yt-remote-auto-connect",this.VQ,this));this.C.push(g.wF("yt-remote-receiver-resumed",this.UQ,this));this.kB()};
g.h.load=function(){this.g.Ps();g.zU.prototype.load.call(this);this.B=new f9(this,this.g,this.l);var a=(a=zAa())?a.currentTime:0;var b=d9()?new A8(Z8(),void 0):null;0==a&&b&&(a=w8(B8(b)));0!=a&&(this.H=a||0,this.g.R("progresssync",a,void 0));CAa(this,this.D,this.D);g.E0(this.g.app,6)};
g.h.unload=function(){this.g.R("mdxautoplaycanceled");this.A=this.o;g.Ze(this.B,this.l);this.l=this.B=null;g.zU.prototype.unload.call(this);g.E0(this.g.app,5)};
g.h.U=function(){g.xF(this.C);g.zU.prototype.U.call(this)};
g.h.nl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.vz.apply(this.B,[].concat([a],g.pa(c)))};
g.h.FH=function(){return this.loaded?this.B.suggestion:null};
g.h.Lf=function(){return this.l?B8(this.l).Lf:!1};
g.h.hasNext=function(){return this.l?B8(this.l).hasNext:!1};
g.h.getCurrentTime=function(){return this.H};
g.h.KK=function(){var a=B8(this.l),b=this.g.ea();return{allowSeeking:this.g.bd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.C?a.A+u8(a):a.A,isPeggedToLive:1>=(a.C?a.o+u8(a):a.o)-this.getCurrentTime(),loaded:a.I,seekableEnd:a.C?a.o+u8(a):a.o,seekableStart:0<a.B?a.B+u8(a):a.B}};
g.h.LK=function(){this.l&&this.l.rD()};
g.h.MK=function(){this.l&&this.l.sD()};
g.h.kO=function(a){1==a&&(this.I=this.l?B8(this.l):null)};
g.h.XQ=function(){var a=d9()?new A8(Z8(),void 0):null;if(a){var b=this.A;this.loaded&&this.unload();this.l=a;this.I=null;b.key!=this.o.key&&(this.A=b,this.load())}else g.Ye(this.l),this.l=null,this.loaded&&(this.unload(),(a=this.I)&&a.videoId==this.g.ea().videoId&&this.g.Fz(a.videoId,w8(a)));this.g.R("videodatachange","newdata",this.g.ea(),3)};
g.h.kB=function(){this.F=[this.o].concat(wAa());var a=$8()||this.o;o9(this,a);this.g.ra("onMdxReceiversChange")};
g.h.VQ=function(){var a=$8();o9(this,a)};
g.h.UQ=function(){this.A=$8()};
g.h.JK=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.F;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?q8():o9(this,b)),this.loaded?this.A:this.o;case "quickCast":return 2==this.F.length&&"cast-selector-receiver"==this.F[1].key?(b&&q8(),!0):!1}};
g.h.NK=function(){F8(this.l,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.td=function(){return!1};g.KY.remote=n9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 23:51:21 Dec 31, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:39:25 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 195.16
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.093
  cdx.remote: 0.056
  esindex: 0.01
  LoadShardBlock: 111.834 (3)
  PetaboxLoader3.datanode: 147.38 (5)
  load_resource: 405.417 (2)
  PetaboxLoader3.resolve: 216.351 (2)
*/