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

(function(g){var window=this;var pna=function(a,b){return g.hc(a,b)},k4=function(){},qna=function(a){if(a.yc&&"function"==typeof a.yc)return a.yc();
if(g.v(a))return a.split("");if(g.Aa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.dc(a)},rna=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Aa(a)||g.v(a))(0,g.C)(a,b,void 0);else{if(a.Hd&&"function"==typeof a.Hd)var c=a.Hd();else if(a.yc&&"function"==typeof a.yc)c=void 0;else if(g.Aa(a)||g.v(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.ec(a);d=qna(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},l4=function(a){g.Gn(a,"zx",g.Lb());
return a},m4=function(a,b,c){g.za(c)||(c=[String(c)]);
g.Ln(a.o,b,c)},n4=function(a){if(!a.l&&"undefined"==typeof window.XMLHttpRequest&&"undefined"!=typeof window.ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new window.ActiveXObject(d),a.l=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.l},o4=function(a){var b;
(b=a.g)||(b={},n4(a)&&(b[0]=!0,b[1]=!0),b=a.g=b);return b},p4=function(a){return(a=n4(a))?new window.ActiveXObject(a):new window.XMLHttpRequest},q4=function(a,b){return b+" ["+a.Y+" "+a.H+" "+a.getStatus()+"]"},sna=function(a){return"content-type"==a.toLowerCase()},r4=function(a){a.g&&a.M&&(a.g.ontimeout=null);
a.F&&(g.w.clearTimeout(a.F),a.F=null)},tna=function(a){return g.Vd&&g.Ec(9)&&g.va(a.timeout)&&g.t(a.ontimeout)},s4=function(a){a.T||(a.T=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},t4=function(a,b){if(a.g){r4(a);
var c=a.g,d=a.R[0]?g.wa:null;a.g=null;a.R=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},u4=function(a,b){a.l=!1;
a.g&&(a.o=!0,a.g.abort(),a.o=!1);a.B=b;a.A=5;s4(a);t4(a)},v4=function(a){return a.g?a.g.readyState:0},w4=function(a){if(a.l&&"undefined"!=typeof g.rW)if(a.R[1]&&4==v4(a)&&2==a.getStatus())q4(a,"Local request error detected and ignored");
else if(a.G&&4==v4(a))g.Jg(a.Hu,0,a);else if(a.dispatchEvent("readystatechange"),4==v4(a)){q4(a,"Request complete");a.l=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.ah(String(a.H))[1]||null;if(!f&&g.w.self&&g.w.self.location){var k=g.w.self.location.protocol;f=k.substr(0,k.length-1)}e=!una.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.A=6;try{var l=2<v4(a)?a.g.statusText:""}catch(m){l=""}a.B=l+" ["+a.getStatus()+"]";s4(a)}}finally{t4(a)}}},x4=function(a){g.Qf.call(this);
this.headers=new g.vn;this.U=a||null;this.l=!1;this.R=this.g=null;this.Y=this.H="";this.A=0;this.B="";this.o=this.Z=this.G=this.T=!1;this.C=0;this.F=null;this.ga="";this.M=this.ba=!1},y4=function(a){try{return a.g?a.g.responseText:""}catch(b){return""}},vna=function(a,b){var c=[];
g.xl(b,function(a){try{var b=g.op.prototype.l.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.np(b)&&c.push(a):c.push(a)},a);
return c},wna=function(a,b){var c=vna(a,b);
(0,g.C)(c,function(a){g.op.prototype.remove.call(this,a)},a)},z4=function(a){if(a.bd){if(a.bd.locationOverrideToken)return{locationOverrideToken:a.bd.locationOverrideToken};
if(null!=a.bd.latitudeE7&&null!=a.bd.longitudeE7)return{latitudeE7:a.bd.latitudeE7,longitudeE7:a.bd.longitudeE7}}return null},xna=function(a,b,c,d){var e=new g.yn(null,void 0);
a&&g.zn(e,a);b&&g.An(e,b);c&&g.Bn(e,c);d&&(e.l=d);return e},A4=function(){this.g=[];
this.l=[]},B4=function(a){g.Kr[a]&&(a=g.Kr[a],(0,g.C)(a,function(a){g.Ir[a]&&delete g.Ir[a]}),a.length=0)},yna=function(a){var b=g.Hr();
if(b)if(b.clear(a),a)B4(a);else for(var c in g.Kr)B4(c)},C4=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.o=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.vn;this.g=this.l="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",zna(this,a.capabilities||""),Ana(this,a.experiments||""),this.l=a.remoteControllerUrl||"",
this.g=a.localChannelEncryptionKey||"")},zna=function(a,b){a.capabilities.clear();
(0,g.ke)(b.split(","),g.Ia(pna,Bna)).forEach(function(b){a.capabilities.add(b)})},Ana=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},D4=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},E4=function(a,b){return!!b&&(a.id==b||a.uuid==b)},F4=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Cna=function(a){return new D4(a)},G4=function(a){return g.za(a)?(0,g.E)(a,Cna):[]},H4=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},I4=function(a){return g.za(a)?"["+(0,g.E)(a,H4).join(",")+"]":"null"},J4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Dna=function(a){return(0,g.E)(a,function(a){return{key:a.id,
name:a.name}})},K4=function(a,b){return g.Pa(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},L4=function(a,b){return g.Pa(a,function(a){return E4(a,b)})},Ena=function(){var a=(0,g.Ws)();
a&&wna(a,a.g.jf(!0))},M4=function(){var a=g.Zs("yt-remote-connected-devices")||[];
g.lb(a);return a},Fna=function(a){if(0==a.length)return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.E)(a,function(a,b){return 0==b?a:a.substring(c.length)})},N4=function(a){g.Ys("yt-remote-connected-devices",a,86400)},P4=function(){if(O4)return O4;
var a=g.Zs("yt-remote-device-id");a||(a=J4(),g.Ys("yt-remote-device-id",a,31536E3));for(var b=M4(),c=1,d=a;g.Ta(b,d);)c++,d=a+"#"+c;return O4=d},Q4=function(){var a=M4(),b=P4();
g.Ta(a,b);g.at()&&g.qb(a,b);a=Fna(a);if(0==a.length)try{g.ts("remote_sid")}catch(c){}else try{g.rs("remote_sid",a.join(","),-1)}catch(c){}},R4=function(){return g.Zs("yt-remote-session-browser-channel")},S4=function(){return g.Zs("yt-remote-local-screens")||[]},T4=function(){g.Ys("yt-remote-lounge-token-expiration",!0,86400)},Gna=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.E)(S4(),function(a){return a.loungeToken}),c=(0,g.E)(a,function(a){return a.loungeToken});
(0,g.hn)(c,function(a){return!g.Ta(b,a)})&&T4();
g.Ys("yt-remote-local-screens",a,31536E3)},Hna=function(a,b){g.Ys("yt-remote-session-browser-channel",a);
g.Ys("yt-remote-session-screen-id",b);var c=M4(),d=P4();g.Ta(c,d)||c.push(d);N4(c);Q4()},U4=function(a){a||(g.$s("yt-remote-session-screen-id"),g.$s("yt-remote-session-video-id"));
Q4();a=M4();g.Ya(a,P4());N4(a)},W4=function(){if(!V4){var a=g.yp();
a&&(V4=new g.ip(a))}return V4?!!V4.get("yt-remote-use-staging-server"):!1},Ina=function(){var a=window.document.createElement("a");
g.ud(a,"https://web.archive.org/web/20181031223946/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Pb(a)},Jna=function(a,b,c){c=void 0===c?null:c;
var d=g.de("SCRIPT");d.id=a;d.onload=function(){b&&(0,window.setTimeout)(b,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
c&&d.setAttribute("nonce",c);g.xd(d,g.Ae("https://web.archive.org/web/20181031223946/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));a=window.document.getElementsByTagName("head")[0]||window.document.body;a.insertBefore(d,a.firstChild);return d},Kna=function(a){a=void 0===a?null:a;
var b=Ina(),c=window.document.getElementById(b),d=c&&g.Wq(c,"loaded");d||c&&!d||(c=Jna(b,function(){g.Wq(c,"loaded")||(g.Vq(c,"loaded","true"),g.Or(b),g.Xp(g.Ia(yna,b),0))},a))},Lna=function(){var a=void 0===a?null:a;
window.spf?window.spf.script.load("https://web.archive.org/web/20181031223946/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):Kna(a)},X4=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},Y4=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},$4=function(a){a.length?Z4(a.shift(),function(){$4(a)}):a5()},Mna=function(a){return"chrome-extension://"+a+b5},Z4=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},c5=function(a){return 0<=window.navigator.userAgent.indexOf(a)},a5=function(){var a=Y4();
a&&a(!1,"No cast extension found")},d5=function(){if(Nna){var a=2,b=Y4(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Z4("//web.archive.org/web/20181031223946/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",a5,c)}},Ona=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(d5(),a({command:"cast.sender.init"}))},Pna=function(){d5();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);$4(["//web.archive.org/web/20181031223946/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+b5,"//web.archive.org/web/20181031223946/https://www.gstatic.com/eureka/clank"+b5])},e5=function(a,b,c){g.I.call(this);
this.C=null!=c?(0,g.A)(a,c):a;this.Wc=b;this.B=(0,g.A)(this.oC,this);this.g=!1;this.l=0;this.o=this.Ea=null;this.A=[]},f5=function(){},g5=function(a,b,c,d){this.g=a;
this.o=b;this.F=c;this.C=d||1;this.A=45E3;this.da=new g.Mn(this);this.l=new g.Ig;this.l.setInterval(250)},i5=function(a,b,c){a.ki=1;
a.pg=l4(b.clone());a.Dh=c;a.B=!0;h5(a,null)},j5=function(a,b,c,d,e){a.ki=1;
a.pg=l4(b.clone());a.Dh=null;a.B=c;e&&(a.iz=!1);h5(a,d)},h5=function(a,b){a.Qi=(0,g.D)();
k5(a);a.Dg=a.pg.clone();m4(a.Dg,"t",a.C);a.Mk=0;a.uc=a.g.Ao(a.g.Ek()?b:null);0<a.bp&&(a.jn=new g.cm((0,g.A)(a.rA,a,a.uc),a.bp));a.da.ea(a.uc,"readystatechange",a.ZL);var c=a.hh?g.pc(a.hh):{};a.Dh?(a.Qn="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.uc.send(a.Dg,a.Qn,a.Dh,c)):(a.Qn="GET",a.iz&&!g.Xd&&(c.Connection="close"),a.uc.send(a.Dg,a.Qn,null,c));a.g.ye(1)},r5=function(a,b,c){for(var d=!0;!a.Wg&&a.Mk<c.length;){var e=Qna(a,c);
if(e==l5){4==b&&(a.qg=4,m5(15),d=!1);break}else if(e==n5){a.qg=4;m5(16);d=!1;break}else o5(a,e)}4==b&&0==c.length&&(a.qg=1,m5(17),d=!1);a.Ce=a.Ce&&d;d||(p5(a),q5(a))},Qna=function(a,b){var c=a.Mk,d=b.indexOf("\n",c);
if(-1==d)return l5;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return n5;d+=1;if(d+c>b.length)return l5;var e=b.substr(d,c);a.Mk=d+c;return e},u5=function(a,b){a.Qi=(0,g.D)();
k5(a);var c=b?window.location.hostname:"";a.Dg=a.pg.clone();g.Gn(a.Dg,"DOMAIN",c);g.Gn(a.Dg,"t",a.C);try{a.De=new window.ActiveXObject("htmlfile")}catch(n){p5(a);a.qg=7;m5(22);q5(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in s5)k=s5[l];else if(l in t5)k=s5[l]=t5[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
s5[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.yd(g.Pc("b/12014412"),d+"</body></html>");a.De.open();a.De.write(g.od(c));a.De.close();a.De.parentWindow.m=(0,g.A)(a.uL,a);a.De.parentWindow.d=(0,g.A)(a.ry,a,!0);a.De.parentWindow.rpcClose=(0,g.A)(a.ry,a,!1);c=a.De.createElement("DIV");a.De.parentWindow.document.body.appendChild(c);d=g.$c(a.Dg.toString());d=g.Fb(g.Xc(d));d=g.yd(g.Pc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.td(c,g.od(d));a.g.ye(1)},k5=function(a){a.Xr=(0,g.D)()+
a.A;
v5(a,a.A)},v5=function(a,b){if(null!=a.bj)throw Error("WatchDog timer not null");
a.bj=w5((0,g.A)(a.FL,a),b)},x5=function(a){a.bj&&(g.w.clearTimeout(a.bj),a.bj=null)},q5=function(a){a.g.Fu()||a.Wg||a.g.Vm(a)},p5=function(a){x5(a);
g.lf(a.jn);a.jn=null;a.l.stop();g.On(a.da);if(a.uc){var b=a.uc;a.uc=null;b.abort();b.dispose()}a.De&&(a.De=null)},o5=function(a,b){try{a.g.jy(a,b),a.g.ye(4)}catch(c){}},z5=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;y5(a,b,function(e){e?c(!0):g.w.setTimeout(function(){z5(a,b,c,d,f)},f)})}},y5=function(a,b,c){var d=new window.Image;
d.onload=function(){try{A5(d),c(!0)}catch(e){}};
d.onerror=function(){try{A5(d),c(!1)}catch(e){}};
d.onabort=function(){try{A5(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{A5(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},A5=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},B5=function(a){this.g=a;
this.l=new f5},D5=function(a){var b=C5(a.g,a.hj,"/mail/images/cleardot.gif");
l4(b);z5(b.toString(),5E3,(0,g.A)(a.MB,a),3,2E3);a.ye(1)},F5=function(a){var b=a.g.H;
if(null!=b)m5(5),b?(m5(11),E5(a.g,a,!1)):(m5(12),E5(a.g,a,!0));else if(a.Nd=new g5(a,void 0,void 0,void 0),a.Nd.hh=a.Yo,b=a.g,b=C5(b,b.Ek()?a.Jj:null,a.Zo),m5(5),!g.Vd||g.Gc(10))m4(b,"TYPE","xmlhttp"),j5(a.Nd,b,!1,a.Jj,!1);else{m4(b,"TYPE","html");var c=a.Nd;a=!!a.Jj;c.ki=3;c.pg=l4(b.clone());u5(c,a)}},G5=function(a,b,c){this.g=1;
this.l=[];this.A=[];this.B=new f5;this.G=a||null;this.H=null!=b?b:null;this.C=c||!1},Rna=function(a,b){this.g=a;
this.map=b;this.context=null},H5=function(a){g.nf.call(this,"statevent",a)},I5=function(a,b){g.nf.call(this,"timingevent",a);
this.size=b},J5=function(a){g.nf.call(this,"serverreachability",a)},N5=function(a){K5(a);
if(3==a.g){var b=a.uk++,c=a.Ll.clone();g.Gn(c,"SID",a.o);g.Gn(c,"RID",b);g.Gn(c,"TYPE","terminate");L5(a,c);b=new g5(a,a.o,b,void 0);b.ki=2;b.pg=l4(c.clone());(new window.Image).src=b.pg;b.Qi=(0,g.D)();k5(b)}M5(a)},P5=function(a){a.YB(1,0);
a.Ll=C5(a,null,a.Xo);O5(a)},K5=function(a){a.ig&&(a.ig.abort(),a.ig=null);
a.Ub&&(a.Ub.cancel(),a.Ub=null);a.nf&&(g.w.clearTimeout(a.nf),a.nf=null);Q5(a);a.wd&&(a.wd.cancel(),a.wd=null);a.ng&&(g.w.clearTimeout(a.ng),a.ng=null)},R5=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.l.push(new Rna(a.FH++,b));2!=a.g&&3!=a.g||O5(a)},O5=function(a){a.wd||a.ng||(a.ng=w5((0,g.A)(a.oy,a),0),a.di=0)},U5=function(a,b){if(1==a.g){if(!b){a.uk=Math.floor(1E5*Math.random());
var c=a.uk++,d=new g5(a,"",c,void 0);d.hh=null;var e=S5(a),f=a.Ll.clone();g.Gn(f,"RID",c);g.Gn(f,"CVER","1");L5(a,f);i5(d,f,e);a.wd=d;a.g=2}}else 3==a.g&&(b?T5(a,b):0==a.l.length||a.wd||T5(a))},T5=function(a,b){if(b)if(6<a.Xg){a.l=a.A.concat(a.l);
a.A.length=0;var c=a.uk-1;var d=S5(a)}else c=b.F,d=b.Dh;else c=a.uk++,d=S5(a);var e=a.Ll.clone();g.Gn(e,"SID",a.o);g.Gn(e,"RID",c);g.Gn(e,"AID",a.ti);L5(a,e);c=new g5(a,a.o,c,a.di+1);c.hh=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.wd=c;i5(c,e,d)},L5=function(a,b){if(a.Uc){var c=a.Uc.lu();
c&&g.Xb(c,function(a,c){g.Gn(b,c,a)})}},S5=function(a){var b=Math.min(a.l.length,1E3),c=["count="+b];
if(6<a.Xg&&0<b){var d=a.l[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.l[e].g,k=a.l[e].map;f=6>=a.Xg?e:f-d;try{g.Xb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.A=a.A.concat(a.l.splice(0,b));
return c.join("&")},V5=function(a){a.Ub||a.nf||(a.F=1,a.nf=w5((0,g.A)(a.ny,a),0),a.Wh=0)},X5=function(a){if(a.Ub||a.nf||3<=a.Wh)return!1;
a.F++;a.nf=w5((0,g.A)(a.ny,a),W5(a,a.Wh));a.Wh++;return!0},E5=function(a,b,c){a.On=c;
a.Pe=b.Af;a.C||P5(a)},Q5=function(a){null!=a.Yg&&(g.w.clearTimeout(a.Yg),a.Yg=null)},W5=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},Z5=function(a,b){if(2==b||9==b){var c=null;
a.Uc&&(c=null);var d=(0,g.A)(a.yM,a);c||(c=new g.yn("//web.archive.org/web/20181031223946/https://www.google.com/images/cleardot.gif"),l4(c));y5(c.toString(),1E4,d)}else m5(2);Y5(a,b)},Y5=function(a,b){a.g=0;
a.Uc&&a.Uc.qt(b);M5(a);K5(a)},M5=function(a){a.g=0;
a.Pe=-1;if(a.Uc)if(0==a.A.length&&0==a.l.length)a.Uc.ro();else{g.bb(a.A);var b=g.bb(a.l);a.A.length=0;a.l.length=0;a.Uc.ro(b)}},C5=function(a,b,c){var d=g.Hn(c);
if(""!=d.g)b&&g.An(d,b+"."+d.g),g.Bn(d,d.B);else{var e=window.location;d=xna(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.tj&&g.Xb(a.tj,function(a,b){g.Gn(d,b,a)});
g.Gn(d,"VER",a.Xg);L5(a,d);return d},w5=function(a,b){if(!g.Ba(a))throw Error("Fn must not be null and must be a function");
return g.w.setTimeout(function(){a()},b)},m5=function(a){$5.dispatchEvent(new H5($5,a))},a6=function(){},Sna=function(a,b){this.action=a;
this.params=b||{}},b6=function(a,b){g.I.call(this);
this.g=new g.M(this.nL,0,this);g.J(this,this.g);this.Wc=5E3;this.l=0;if(g.Ba(a))b&&(a=(0,g.A)(a,b));else if(a&&g.Ba(a.handleEvent))a=(0,g.A)(a.handleEvent,a);else throw Error("Invalid listener argument");this.o=a},c6=function(a,b,c){this.M=a;
this.C=b;this.o=new g.hp;this.l=new b6(this.ZM,this);this.g=null;this.J=!1;this.B=null;this.H="";this.G=this.A=0;this.F=[];this.R=c||!1},Tna=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.On,sessionId:a.g.o,arrayId:a.g.ti}},d6=function(a,b){a.G=b||0;
a.l.stop();a.g&&(3==a.g.g&&U5(a.g),N5(a.g));a.G=0},e6=function(a){return!!a.g&&3==a.g.g},Una=function(a,b){(a.C.loungeIdToken=b)||a.l.stop()},f6=function(a){this.port=this.domain="";
this.g="/api/lounge";this.l=!0;a=a||window.document.location.href;var b=g.dh(a)||"";b&&(this.port=":"+b);this.domain=g.ch(a)||"";a=g.Vb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Ob(a,"10.0")&&(this.l=!1))},g6=function(a,b){var c=a.g;
if(g.t(void 0)?0:a.l)c="https://"+a.domain+a.port+a.g;return g.mh(c+b,{})},h6=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ia(a.A,d,!0),onError:g.Ia(a.o,e),od:g.Ia(a.B,e)};c&&(a.ob=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.nq(b,a)},Vna=function(){var a=i6;
j6();k6.push(a);l6(k6)},m6=function(a,b){j6();
var c=k6,d=Wna(a,String(b));0==c.length?Xna(d):(l6(c),(0,g.C)(c,function(a){a(d)}))},j6=function(){k6||(k6=g.z("yt.mdx.remote.debug.handlers_")||[],g.y("yt.mdx.remote.debug.handlers_",k6,void 0))},Xna=function(a){var b=(n6+1)%50;
n6=b;o6[b]=a;p6||(p6=49==b)},l6=function(a){var b=o6;
if(b[0]){var c=n6,d=p6?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.C)(a,function(a){a(e)})}while(d!=c);
o6=Array(50);n6=-1;p6=!1}},Wna=function(a,b){var c=((0,g.D)()-Yna)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},q6=function(a){g.O.call(this);
this.F=a;this.g=[]},r6=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},Zna=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.ke)(a.g,function(a){return!!K4(b,a)});
for(var d=0,e=b.length;d<e;d++)c=r6(a,b[d])||c;return c},$na=function(a,b){var c=a.g.length;
a.g=(0,g.ke)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c},s6=function(a,b,c,d){g.O.call(this);
this.C=a;this.B=b;this.o=c;this.A=d;this.l=0;this.g=null;this.Ea=window.NaN},u6=function(a){q6.call(this,"LocalScreenService");
this.o=a;this.l=window.NaN;t6(this);this.info("Initializing with "+I4(this.g))},v6=function(a){if(a.g.length){var b=(0,g.E)(a.g,function(a){return a.id}),c=g6(a.o,"/pairing/get_lounge_token_batch");
h6(a.o,c,{screen_ids:b.join(",")},(0,g.A)(a.zC,a),(0,g.A)(a.yC,a))}},t6=function(a){var b=G4(S4());
b=(0,g.ke)(b,function(a){return!a.uuid});
return Zna(a,b)},w6=function(a,b){Gna((0,g.E)(a.g,F4));
b&&T4()},y6=function(a,b){g.O.call(this);
this.C=b;var c=g.Zs("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Ta(c,l)}this.g=d;this.B=a;this.o=this.A=window.NaN;this.l=null;x6("Initialized with "+g.Tg(this.g))},z6=function(a,b,c){var d=g6(a.B,"/pairing/get_screen_availability");
h6(a.B,d,{lounge_token:b.token},(0,g.A)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.A)(function(){c(!1)},a))},A6=function(a,b){a:if(g.bc(b)!=g.bc(a.g))var c=!1;
else{c=g.ec(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(x6("Updated online screens: "+g.Tg(a.g)),a.g=b,a.P("screenChange"));aoa(a)},B6=function(a){(0,window.isNaN)(a.o)||g.Zp(a.o);
a.o=g.Xp((0,g.A)(a.qr,a),0<a.A&&a.A<(0,g.D)()?2E4:1E4)},x6=function(a){m6("OnlineScreenService",a)},C6=function(a){var b={};
(0,g.C)(a.C(),function(a){a.token?b[a.token]=a.id:this.Hb("Requesting availability of screen w/o lounge token.")});
return b},aoa=function(a){a=g.ec(g.Yb(a.g,function(a){return a}));
g.lb(a);a.length?g.Ys("yt-remote-online-screen-ids",a.join(","),60):g.$s("yt-remote-online-screen-ids")},D6=function(a){q6.call(this,"ScreenService");
this.C=a;this.l=this.o=null;this.A=[];this.B={};boa(this)},F6=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.Jd();if(k=(c?L4(k,c):null)||L4(k,b)){k.uuid=b;var l=E6(a,k);z6(a.l,l,function(a){e(a?l:null)})}else c?coa(a,c,(0,g.A)(function(a){var f=E6(this,new D4({name:d,
screenId:c,loungeToken:a,dialId:b||""}));z6(this.l,f,function(a){e(a?f:null)})},a),f):e(null)},G6=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},coa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={ob:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.nq(g6(a.C,"/pairing/get_lounge_token_batch"),e)},H6=function(a){a.g=a.o.Jd();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+I4(a.g))},boa=function(a){I6(a);
a.o=new u6(a.C);a.o.subscribe("screenChange",(0,g.A)(a.KC,a));H6(a);a.A=G4(g.Zs("yt-remote-automatic-screen-cache")||[]);I6(a);a.info("Initializing automatic screens: "+I4(a.A));a.l=new y6(a.C,(0,g.A)(a.Jd,a,!0));a.l.subscribe("screenChange",(0,g.A)(function(){this.P("onlineScreenChange")},a))},E6=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=L4(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.Ys("yt-remote-automatic-screen-cache",(0,g.E)(a.A,F4)));I6(a);a.B[b.uuid]=b.id;g.Ys("yt-remote-device-id-map",a.B,31536E3);return b},I6=function(a){a.B=g.Zs("yt-remote-device-id-map")||{}},J6=function(a,b,c){g.O.call(this);
this.R=c;this.H=a;this.l=b;this.o=null},K6=function(a,b){m6(a.R,b)},M6=function(a,b){J6.call(this,a,b,"CastSession");
this.g=null;this.A=0;this.C=(0,g.A)(this.fN,this);this.B=(0,g.A)(this.QL,this);this.A=g.Xp((0,g.A)(function(){L6(this,null)},this),12E4)},doa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Tg(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.wa,(0,g.A)(function(){K6(this,"Failed to send message: getMdxSessionStatus.")},a)):K6(a,"Sending yt message without session: "+g.Tg(b))},L6=function(a,b){g.Zp(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.o||a.o.id!=b){var c=(0,g.A)(a.Wm,a),d=(0,g.A)(a.Md,a);a.xu(b,c,d,5)}}else a.Md(Error("Waiting for session status timed out."))},N6=function(a,b,c){J6.call(this,a,b,"DialSession");
this.A=this.G=null;this.J="";this.U=c;this.B=null;this.F=g.wa;this.C=window.NaN;this.M=(0,g.A)(this.iN,this);this.g=g.wa},O6=function(a){a.g=a.H.yA(a.J,a.l.label,a.l.friendlyName,(0,g.A)(function(a){this.g=g.wa;
this.Wm(a)},a),(0,g.A)(function(a){this.g=g.wa;
this.Md(a)},a))},P6=function(a){var b={};
b.pairingCode=a.J;b.theme=a.U;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}W4()&&(b.env_useStageMdx=1);return g.kh(b)},Q6=function(a,b){J6.call(this,a,b,"ManualSession");
this.g=g.Xp((0,g.A)(this.wi,this,null),150)},R6=function(a,b,c,d){g.O.call(this);
this.l=a;this.F=b||"233637DE";this.C=c||"cl";this.G=d||!1;this.g=null;this.B=!1;this.o=[];this.A=(0,g.A)(this.zK,this)},S6=function(a,b){return b?g.Pa(a.o,function(a){return E4(b,a.label)},a):null},T6=function(a){m6("Controller",a)},i6=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},U6=function(a){return a.B||!!a.o.length||!!a.g},V6=function(a,b,c){b!=a.g&&(g.lf(a.g),(a.g=b)?(c?a.P("yt-remote-cast2-receiver-resumed",b.l):a.P("yt-remote-cast2-receiver-selected",
b.l),b.subscribe("sessionScreen",(0,g.A)(a.my,a,b)),b.o?a.P("yt-remote-cast2-session-change",b.o):c&&a.g.wi(null)):a.P("yt-remote-cast2-session-change",null))},W6=function(a){var b=a.l.xA(),c=a.g&&a.g.l;
a=(0,g.E)(b,function(a){c&&E4(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=S6(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},hoa=function(a,b,c,d,e,f,k){eoa()?foa(b,e,f,k)&&(Y6(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?Z6(a,c):(window.__onGCastApiAvailable=function(b,d){b?Z6(a,c):($6("Failed to load cast API: "+d),a7(!1),Y6(!1),g.$s("yt-remote-cast-available"),g.$s("yt-remote-cast-receiver"),b7(),c(!1))},
d?Lna():c5("CriOS")?Ona():c5("Android")&&c5("Chrome/")&&window.navigator.presentation?Pna():window.chrome&&window.navigator.presentation&&!c5("Edge")?(d5(),$4(goa.map(Mna))):a5())):X6("Cannot initialize because not running Chrome")},b7=function(){X6("dispose");
var a=c7();a&&a.dispose();g.y("yt.mdx.remote.cloudview.instance_",null,void 0);d7(!1);g.Mr(e7);e7.length=0},f7=function(){return!!g.Zs("yt-remote-cast-installed")},g7=function(){var a=g.Zs("yt-remote-cast-receiver");
return a?a.friendlyName:null},h7=function(){X6("clearCurrentReceiver");
g.$s("yt-remote-cast-receiver")},i7=function(){return f7()?c7()?c7().getCastSession():($6("getCastSelector: Cast is not initialized."),null):($6("getCastSelector: Cast API is not installed!"),null)},k7=function(){f7()?c7()?j7()?(X6("Requesting cast selector."),c7().requestSession()):(X6("Wait for cast API to be ready to request the session."),e7.push(g.Lr("yt-remote-cast2-api-ready",k7))):$6("requestCastSelector: Cast is not initialized."):$6("requestCastSelector: Cast API is not installed!")},l7=
function(a,b){j7()?c7().setConnectedScreenStatus(a,b):$6("setConnectedScreenStatus called before ready.")},eoa=function(){var a=0<=g.Vb.search(/ (CrMo|Chrome|CriOS)\//);
return g.ou||a},ioa=function(a,b){c7().init(a,b)},foa=function(a,b,c,d){var e=!1;
c7()||(a=new R6(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.Ys("yt-remote-cast-available",a);g.Pr("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){X6("onReceiverSelected: "+a.friendlyName);
g.Ys("yt-remote-cast-receiver",a);g.Pr("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){X6("onReceiverResumed: "+a.friendlyName);
g.Ys("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){X6("onSessionChange: "+H4(a));
a||g.$s("yt-remote-cast-receiver");g.Pr("yt-remote-cast2-session-change",a)}),g.y("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
X6("cloudview.createSingleton_: "+e);return e},c7=function(){return g.z("yt.mdx.remote.cloudview.instance_")},Z6=function(a,b){a7(!0);
Y6(!1);ioa(a,function(a){a?(d7(!0),g.Or("yt-remote-cast2-api-ready")):($6("Failed to initialize cast API."),a7(!1),g.$s("yt-remote-cast-available"),g.$s("yt-remote-cast-receiver"),b7());b(a)})},X6=function(a){m6("cloudview",a)},$6=function(a){m6("cloudview",a)},a7=function(a){X6("setCastInstalled_ "+a);
g.Ys("yt-remote-cast-installed",a)},j7=function(){return!!g.z("yt.mdx.remote.cloudview.apiReady_")},d7=function(a){X6("setApiReady_ "+a);
g.y("yt.mdx.remote.cloudview.apiReady_",a,void 0)},Y6=function(a){g.y("yt.mdx.remote.cloudview.initializing_",a,void 0)},m7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.g=-1;this.muted=!1;this.audioTrackId=null;this.F=this.G=0;this.l=null;this.hasNext=this.Re=!1;this.J=this.H=this.o=this.B=0;this.A=window.NaN;this.C=!1;this.reset(a)},n7=function(a){a.audioTrackId=null;
a.l=null;a.g=-1;a.Re=!1;a.hasNext=!1;a.G=0;a.F=(0,g.D)();a.B=0;a.o=0;a.H=0;a.J=0;a.A=window.NaN;a.C=!1},o7=function(a){return 1==a.g?((0,g.D)()-a.F)/1E3:0},p7=function(a,b){a.G=b;
a.F=(0,g.D)()},q7=function(a){switch(a.g){case 1:case 1081:return((0,g.D)()-a.F)/1E3+a.G;
case -1E3:return 0}return a.G},r7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&n7(a)},s7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.g;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.qc(a.l);b.hasPrevious=a.Re;b.hasNext=a.hasNext;b.playerTime=a.G;b.playerTimeAt=a.F;b.seekableStart=a.B;b.seekableEnd=a.o;b.duration=a.H;b.loadedTime=a.J;b.liveIngestionTime=a.A;return b},v7=function(a,b){g.O.call(this);
this.g=0;this.A=a;this.C=[];this.B=new A4;this.o=this.l=null;this.H=(0,g.A)(this.nI,this);this.F=(0,g.A)(this.vk,this);this.G=(0,g.A)(this.mI,this);this.J=(0,g.A)(this.zI,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Zr,this),t7(this))):c=3;0!=c&&(b?this.Zr(c):g.Xp((0,g.A)(function(){this.Zr(c)},this),0));
var d=i7();d&&u7(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},w7=function(a){return new m7(a.A.getPlayerContextData())},t7=function(a){(0,g.C)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.C.push(this.A.subscribe(a,g.Ia(this.vK,a),this))},a)},x7=function(a){(0,g.C)(a.C,function(a){this.A.unsubscribeByKey(a)},a);
a.C.length=0},y7=function(a,b){var c=a.B;
50>c.g.length+c.l.length&&a.B.l.push(b)},A7=function(a,b,c){var d=w7(a);
p7(d,c);-1E3!=d.g&&(d.g=b);z7(a,d)},B7=function(a,b,c){a.A.sendMessage(b,c)},z7=function(a,b){x7(a);
a.A.setPlayerContextData(s7(b));t7(a)},u7=function(a,b){a.o&&(a.o.removeUpdateListener(a.H),a.o.removeMediaListener(a.F),a.vk(null));
a.o=b;a.o&&(m6("CP","Setting cast session: "+a.o.sessionId),a.o.addUpdateListener(a.H),a.o.addMediaListener(a.F),a.o.media.length&&a.vk(a.o.media[0]))},C7=function(a){var b=a.l.media,c=a.l.customData;
if(b&&c){var d=w7(a);b.contentId!=d.videoId&&m6("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;p7(d,a.l.getEstimatedTime());z7(a,d)}else m6("CP","No cast media video. Ignoring state update.")},D7=function(a,b,c){return(0,g.A)(function(a){this.Hb("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.Hb("Retrying "+b+" using MDx browser channel."),B7(this,b,c))},a)},E7=function(a,b,c){g.O.call(this);
this.B=window.NaN;this.U=!1;this.J=this.H=this.M=this.R=window.NaN;this.T=[];this.A=this.F=this.o=this.Sa=this.g=null;this.ra=a;this.T.push(g.kr(window,"beforeunload",(0,g.A)(this.sC,this)));this.l=[];this.Sa=new m7;this.Z=b.id;this.g=joa(this,c);this.g.subscribe("handlerOpened",this.rI,this);this.g.subscribe("handlerClosed",this.oI,this);this.g.subscribe("handlerError",this.pI,this);this.g.subscribe("handlerMessage",this.qI,this);Una(this.g,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.Sa.videoId;g.at()&&g.Ys("yt-remote-session-video-id",a)},this)},F7=function(a){m6("conn",a)},joa=function(a,b){return new c6(g6(a.ra,"/bc"),b)},G7=function(a,b){a.P("proxyStateChange",b)},koa=function(a){a.B=g.Xp((0,g.A)(function(){F7("Connecting timeout");
this.C(1)},a),2E4)},H7=function(a){g.Zp(a.B);
a.B=window.NaN},I7=function(a){g.Zp(a.R);
a.R=window.NaN},loa=function(a){J7(a);
a.M=g.Xp((0,g.A)(function(){K7(this,"getNowPlaying")},a),2E4)},J7=function(a){g.Zp(a.M);
a.M=window.NaN},M7=function(a,b){b&&(H7(a),I7(a));
b==(e6(a.g)&&(0,window.isNaN)(a.B))?b&&(G7(a,1),K7(a,"getSubtitlesTrack")):b?(a.ba()&&a.Sa.reset(),G7(a,1),K7(a,"getNowPlaying"),L7(a)):a.C(1)},moa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Sa.videoId&&(g.kc(b.params)?a.Sa.l=null:a.Sa.l=b.params,a.P("remotePlayerChange"))},N7=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.Sa.listId=b.params.listId||a.Sa.listId;r7(a.Sa,c,d);a.P("remoteQueueChange")},noa=function(a,b){b.params=b.params||{};
N7(a,b);O7(a,b);a.P("autoplayDismissed")},O7=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
p7(a.Sa,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.Sa.g&&(c=-1E3);a.Sa.g=c;c=Number(b.params.loadedTime);a.Sa.J=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.Sa.H=(0,window.isNaN)(c)?0:c;c=a.Sa;var d=Number(b.params.liveIngestionTime);c.A=d;c.C=(0,window.isNaN)(d)?!1:!0;c=a.Sa;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.B=(0,window.isNaN)(d)?0:d;c.o=(0,window.isNaN)(e)?0:e;1==a.Sa.g?loa(a):J7(a);
a.P("remotePlayerChange")},ooa=function(a,b){if(-1E3!=a.Sa.g){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Sa.g=c;c=(0,window.parseInt)(b.params.currentTime,10);p7(a.Sa,(0,window.isNaN)(c)?0:c);a.P("remotePlayerChange")}},poa=function(a,b){var c="true"==b.params.muted;
a.Sa.volume=(0,window.parseInt)(b.params.volume,10);a.Sa.muted=c;a.P("remotePlayerChange")},qoa=function(a,b){a.F=b.params.videoId;
a.P("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},roa=function(a,b){var c="true"==b.params.hasNext;
a.Sa.Re="true"==b.params.hasPrevious;a.Sa.hasNext=c;a.P("previousNextChange")},L7=function(a){g.Zp(a.J);
a.J=g.Xp((0,g.A)(a.C,a,1),864E5)},K7=function(a,b,c){c?F7("Sending: action="+b+", params="+g.Tg(c)):F7("Sending: action="+b);
a.g.sendMessage(b,c)},P7=function(a){q6.call(this,"ScreenServiceProxy");
this.Gc=a;this.l=[];this.l.push(this.Gc.$_s("screenChange",(0,g.A)(this.dN,this)));this.l.push(this.Gc.$_s("onlineScreenChange",(0,g.A)(this.ZJ,this)))},woa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.Rp("MDX_CONFIG")||b;Ena();Q4();Q7||(Q7=new f6(b?b.loungeApiHost:void 0),W4()&&(Q7.g="/api/loungedev"));R7||(R7=g.z("yt.mdx.remote.deferredProxies_")||[],g.y("yt.mdx.remote.deferredProxies_",R7,void 0));soa();var c=S7();if(!c){var d=new D6(Q7);g.y("yt.mdx.remote.screenService_",d,void 0);c=S7();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);hoa(a,d,function(a){a?T7()&&l7(T7(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.Pr("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.z("yt.mdx.remote.initialized_")&&(g.y("yt.mdx.remote.initialized_",!0,void 0),U7("Initializing: "+g.Tg(b)),V7.push(g.Lr("yt-remote-cast2-availability-change",function(){g.Pr("yt-remote-receiver-availability-change")})),V7.push(g.Lr("yt-remote-cast2-receiver-selected",function(){W7(null);
g.Pr("yt-remote-auto-connect","cast-selector-receiver")})),V7.push(g.Lr("yt-remote-cast2-receiver-resumed",function(){g.Pr("yt-remote-receiver-resumed","cast-selector-receiver")})),V7.push(g.Lr("yt-remote-cast2-session-change",toa)),V7.push(g.Lr("yt-remote-connection-change",function(a){a?l7(T7(),"YouTube TV"):X7()||(l7(null,null),h7())})),a=Y7(),b.isAuto&&(a.id+="#dial"),g.Up("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),U7(" -- with channel params: "+
g.Tg(a)),uoa(a),c.start(),T7()||voa())},xoa=function(){var a=Z7();
f7()&&g.Zs("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Z7=function(){var a=S7().Gc.$_gos();
var b=$7();b&&a8()&&(K4(a,b)||a.push(b));return Dna(a)},b8=function(){var a=yoa();
!a&&f7()&&g7()&&(a={key:"cast-selector-receiver",name:g7()});return a},yoa=function(){var a=Z7(),b=$7();
b||(b=X7());return g.Pa(a,function(a){return b&&E4(b,a.key)?!0:!1})},$7=function(){var a=T7();
if(!a)return null;var b=S7().Jd();return L4(b,a)},toa=function(a){U7("remote.onCastSessionChange_: "+H4(a));
if(a){var b=$7();b&&b.id==a.id?l7(b.id,"YouTube TV"):(b&&c8(),d8(a,1))}else a8()&&c8()},c8=function(){j7()?c7().stopSession():$6("stopSession called before API ready.");
var a=a8();a&&(a.disconnect(1),e8(null))},f8=function(){var a=a8();
return!!a&&3!=a.getProxyState()},U7=function(a){m6("remote",a)},S7=function(){if(!g8){var a=g.z("yt.mdx.remote.screenService_");
g8=a?new P7(a):null}return g8},T7=function(){return g.z("yt.mdx.remote.currentScreenId_")},h8=function(a){g.y("yt.mdx.remote.currentScreenId_",a,void 0)},i8=function(){return g.z("yt.mdx.remote.connectData_")},W7=function(a){g.y("yt.mdx.remote.connectData_",a,void 0)},a8=function(){return g.z("yt.mdx.remote.connection_")},e8=function(a){var b=a8();
W7(null);a||h8("");g.y("yt.mdx.remote.connection_",a,void 0);R7&&((0,g.C)(R7,function(b){b(a)}),R7.length=0);
b&&!a?g.Pr("yt-remote-connection-change",!1):!b&&a&&g.Pr("yt-remote-connection-change",!0)},X7=function(){var a=g.at();
if(!a)return null;var b=S7().Jd();return L4(b,a)},d8=function(a,b){$7()&&$7();
h8(a.id);var c=new E7(Q7,a,Y7());c.connect(b,i8());c.subscribe("beforeDisconnect",function(a){g.Pr("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){a8()&&e8(null)});
e8(c)},voa=function(){var a=X7();
a?(U7("Resume connection to: "+H4(a)),d8(a,0)):(U4(),h7(),U7("Skipping connecting because no session screen found."))},soa=function(){var a=Y7();
if(g.kc(a)){a=P4();var b=g.Zs("yt-remote-session-name")||"",c=g.Zs("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.y("yt.mdx.remote.channelParams_",a,void 0)}},Y7=function(){return g.z("yt.mdx.remote.channelParams_")||{}},uoa=function(a){a?(g.Ys("yt-remote-session-app",a.app),g.Ys("yt-remote-session-name",a.name)):(g.$s("yt-remote-session-app"),g.$s("yt-remote-session-name"));
g.y("yt.mdx.remote.channelParams_",a,void 0)},j8=function(a,b,c){g.I.call(this);
this.A=a;this.L=b;this.l=new g.xr(this);g.J(this,this.l);this.l.N(b,"onCaptionsTrackListChanged",this.sJ);this.l.N(b,"captionschanged",this.lI);this.l.N(b,"captionssettingschanged",this.Hz);this.l.N(b,"videoplayerreset",this.Xm);this.l.N(b,"mdxautoplaycancel",this.LB);this.U=this.l.N(b,"onVolumeChange",this.Ux);this.F=!1;this.g=c;c.subscribe("proxyStateChange",this.iy,this);c.subscribe("remotePlayerChange",this.wk,this);c.subscribe("remoteQueueChange",this.Xm,this);c.subscribe("autoplayUpNext",this.Hx,
this);c.subscribe("previousNextChange",this.fy,this);c.subscribe("nowAutoplaying",this.Yx,this);c.subscribe("autoplayDismissed",this.Gx,this);this.suggestion=null;this.G=new g.QB(64);this.o=new g.M(this.Ez,500,this);g.J(this,this.o);this.B=new g.M(this.Fz,1E3,this);g.J(this,this.B);this.J=new e5(this.JM,0,this);g.J(this,this.J);this.C={};this.M=new g.M(this.iA,1E3,this);g.J(this,this.M);this.H=new g.cm(this.cG,1E3,this);g.J(this,this.H);this.R=g.wa;this.Hz();this.Xm();this.wk()},k8=function(a,b){var c=
a.A,d=a.L.getVideoData().lengthSeconds;
c.C=b||0;c.player.P("progresssync",b,d)},m8=function(a){k8(a,0);
a.o.stop();l8(a,new g.QB(64))},o8=function(a,b){if(n8(a)&&!a.F){var c=null;
b&&(c={style:a.L.zh()},g.sc(c,b));a.g.vz(a.L.getVideoData(1).videoId,c);a.C=w7(a.g).l}},p8=function(a,b){var c=a.L.Ue();
if(c){var d=c.Wa;var e=c.listId.toString()}var f=a.L.getVideoData(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;var m=f.ni;f=z4(f);var n=w7(c);l=l||0;var p={videoId:k,currentIndex:l};r7(n,k,l);g.t(b)&&(p7(n,b),p.currentTime=b);g.t(e)&&(p.listId=e);null!=d&&(p.playerParams=d);null!=m&&(p.clickTrackingParams=m);null!=f&&(p.locationInfo=g.Tg(f));B7(c,"setPlaylist",p);e||z7(c,n);l8(a,new g.QB(1))},q8=function(a,b){if(b){var c=a.L.Yb("captions","tracklist",{Yu:1});
c&&c.length?(a.L.kd("captions","track",b),a.F=!1):(a.L.Di("captions"),a.F=!0)}else a.L.kd("captions","track",{})},n8=function(a){return w7(a.g).videoId==a.L.getVideoData(1).videoId},l8=function(a,b){a.B.stop();
var c=a.G;if(!g.WB(c,b)){var d=g.T(b,2);d!=g.T(a.G,2)&&g.EI(a.L,d);a.G=b;r8(a.A,c,b)}},t8=function(a){g.P.call(this,{D:"div",
I:"ytp-remote",K:[{D:"div",I:"ytp-remote-display-status",K:[{D:"div",I:"ytp-remote-display-status-icon",K:[g.GN()]},{D:"div",I:"ytp-remote-display-status-text",W:"{{statustext}}"}]}]});this.l=new g.kO(this,250);g.J(this,this.l);this.o=a;this.N(a,"presentingplayerstatechange",this.A);s8(this,g.AI(a))},s8=function(a,b){if(3==a.o.Ca()){var c={RECEIVER_NAME:a.o.Yb("remote","currentReceiver").name};
c=g.T(b,128)?g.BM("Error on $RECEIVER_NAME",c):g.XB(b)||g.T(b,4)?g.BM("Playing on $RECEIVER_NAME",c):g.BM("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.l.show()}else a.l.hide()},u8=function(a,b){g.aS.call(this,"Play on",0,a,b);
this.L=a;this.F={};this.N(a,"onMdxReceiversChange",this.H);this.N(a,"presentingplayerstatechange",this.H);this.H()},v8=function(a){g.jJ.call(this,a);
this.l={key:J4(),name:"This computer"};this.A=null;this.B=[];this.J=this.g=null;this.H=[this.l];this.o=this.l;this.F=new g.QB(64);this.C=0;this.G=-1;if(!g.Ry(g.U(this.player))){a=this.player;var b=g.Qt(a);b&&(b=b.Gm())&&(b=new u8(a,b),g.J(this,b));b=new t8(a);g.J(this,b);g.VI(a,b.element,4)}},r8=function(a,b,c){a.F=c;
a.player.P("presentingplayerstatechange",new g.bC(c,b))},w8=function(a,b){if(b.key!=a.o.key)if(b.key==a.l.key)c8();
else{a.o=b;var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(c||e){var f=a.player.Ue();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.Oa(l).videoId}else k=[e];f=a.player.va(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.ni,index:Math.max(a.player.cw(),0),currentTime:0==f?void 0:f};(d=z4(d))&&(c.locationInfo=d);d=c}else d=null;U7("Connecting to: "+g.Tg(b));"cast-selector-receiver"==b.key?(W7(d||null),j7()?c7().setLaunchParams(d||
null):$6("setLaunchParams called before ready.")):!d&&f8()&&T7()==b.key?g.Pr("yt-remote-connection-change",!0):(c8(),W7(d||null),d=S7().Jd(),(d=L4(d,b.key))&&d8(d,1))}},una=/^https?$/i,zoa=["POST",
"PUT"];g.B(x4,g.Qf);g.h=x4.prototype;
g.h.send=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET";this.H=a;this.B="";this.A=0;this.Y=b;this.T=!1;this.l=!0;this.g=this.U?p4(this.U):p4(g.OW);this.R=this.U?o4(this.U):o4(g.OW);this.g.onreadystatechange=(0,g.A)(this.Hu,this);try{k4(q4(this,"Opening Xhr")),this.Z=!0,this.g.open(b,String(a),!0),this.Z=!1}catch(f){k4(q4(this,"Error opening Xhr: "+f.message));u4(this,f);return}a=c||"";var e=this.headers.clone();
d&&rna(d,function(a,b){e.set(b,a)});
d=g.Pa(e.Hd(),sna);c=g.w.FormData&&a instanceof g.w.FormData;!g.Ta(zoa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.g.setRequestHeader(b,a)},this);
this.ga&&(this.g.responseType=this.ga);"withCredentials"in this.g&&this.g.withCredentials!==this.ba&&(this.g.withCredentials=this.ba);try{r4(this),0<this.C&&(this.M=tna(this.g),k4(q4(this,"Will abort after "+this.C+"ms if incomplete, xhr2 "+this.M)),this.M?(this.g.timeout=this.C,this.g.ontimeout=(0,g.A)(this.Iu,this)):this.F=g.Jg(this.Iu,this.C,this)),k4(q4(this,"Sending request")),this.G=!0,this.g.send(a),this.G=!1}catch(f){k4(q4(this,"Send error: "+f.message)),u4(this,f)}};
g.h.Iu=function(){"undefined"!=typeof g.rW&&this.g&&(this.B="Timed out after "+this.C+"ms, aborting",this.A=8,q4(this,this.B),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.g&&this.l&&(q4(this,"Aborting"),this.l=!1,this.o=!0,this.g.abort(),this.o=!1,this.A=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),t4(this))};
g.h.V=function(){this.g&&(this.l&&(this.l=!1,this.o=!0,this.g.abort(),this.o=!1),t4(this,!0));x4.Aa.V.call(this)};
g.h.Hu=function(){this.fa()||(this.Z||this.G||this.o?w4(this):this.yK())};
g.h.yK=function(){w4(this)};
g.h.isActive=function(){return!!this.g};
g.h.getStatus=function(){try{return 2<v4(this)?this.g.status:-1}catch(a){return-1}};
var t5={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},s5={"'":"\\'"},Aoa={};g.h=A4.prototype;g.h.isEmpty=function(){return 0==this.g.length&&0==this.l.length};
g.h.clear=function(){this.g=[];this.l=[]};
g.h.contains=function(a){return g.Ta(this.g,a)||g.Ta(this.l,a)};
g.h.remove=function(a){var b=this.g;var c=(0,g.oja)(b,a);0<=c?(g.Xa(b,c),b=!0):b=!1;return b||g.Ya(this.l,a)};
g.h.yc=function(){for(var a=[],b=this.g.length-1;0<=b;--b)a.push(this.g[b]);var c=this.l.length;for(b=0;b<c;++b)a.push(this.l[b]);return a};
var Bna={sN:"atp",BP:"ska",sP:"que",TO:"mus",AP:"sus",kO:"dsp"};C4.prototype.ul=function(){var a=new C4({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.o=this.o;a.l=this.l;a.g=this.g};
var V4,O4="",b5=X4("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",Nna=X4("loadCastFramework")||X4("loadCastApplicationFramework"),goa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.B(e5,g.I);g.h=e5.prototype;g.h.nC=function(a){this.A=arguments;this.g=!1;this.Ea?this.o=(0,g.D)()+this.Wc:this.Ea=g.Jg(this.B,this.Wc)};
g.h.stop=function(){this.Ea&&(g.w.clearTimeout(this.Ea),this.Ea=null);this.o=null;this.g=!1;this.A=[]};
g.h.pause=function(){++this.l};
g.h.resume=function(){this.l&&(--this.l,!this.l&&this.g&&(this.g=!1,this.C.apply(null,this.A)))};
g.h.V=function(){this.stop();e5.Aa.V.call(this)};
g.h.oC=function(){this.o?(this.Ea=g.Jg(this.B,this.o-(0,g.D)()),this.o=null):(this.Ea=null,this.l?this.g=!0:(this.g=!1,this.C.apply(null,this.A)))};f5.prototype.stringify=function(a){return g.w.JSON.stringify(a,void 0)};
f5.prototype.parse=function(a){return g.w.JSON.parse(a,void 0)};g.h=g5.prototype;g.h.hh=null;g.h.Ce=!1;g.h.bj=null;g.h.Xr=null;g.h.Qi=null;g.h.ki=null;g.h.pg=null;g.h.Dg=null;g.h.Dh=null;g.h.uc=null;g.h.Mk=0;g.h.De=null;g.h.Qn=null;g.h.qg=null;g.h.Kj=-1;g.h.iz=!0;g.h.Wg=!1;g.h.bp=0;g.h.jn=null;var n5={},l5={};g.h=g5.prototype;g.h.setTimeout=function(a){this.A=a};
g.h.ZL=function(a){a=a.target;var b=this.jn;b&&3==v4(a)?b.Gj():this.rA(a)};
g.h.rA=function(a){try{if(a==this.uc)a:{var b=v4(this.uc),c=this.uc.A,d=this.uc.getStatus();if(g.Vd&&!g.Gc(10)||g.Xd&&!g.Ec("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Rh&&!y4(this.uc))break a;this.Wg||4!=b||7==c||(8==c||0>=d?this.g.ye(3):this.g.ye(2));x5(this);var e=this.uc.getStatus();this.Kj=e;var f=y4(this.uc);(this.Ce=200==e)?(4==b&&p5(this),this.B?(r5(this,b,f),g.Rh&&this.Ce&&3==b&&(this.da.ea(this.l,"tick",this.WL),this.l.start())):o5(this,f),this.Ce&&!this.Wg&&(4==b?this.g.Vm(this):(this.Ce=
!1,k5(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.qg=3,m5(13)):(this.qg=0,m5(14)),p5(this),q5(this))}}catch(k){this.uc&&y4(this.uc)}finally{}};
g.h.WL=function(){var a=v4(this.uc),b=y4(this.uc);this.Mk<b.length&&(x5(this),r5(this,a,b),this.Ce&&4!=a&&k5(this))};
g.h.uL=function(a){w5((0,g.A)(this.tL,this,a),0)};
g.h.tL=function(a){this.Wg||(x5(this),o5(this,a),k5(this))};
g.h.ry=function(a){w5((0,g.A)(this.sL,this,a),0)};
g.h.sL=function(a){this.Wg||(p5(this),this.Ce=a,this.g.Vm(this),this.g.ye(4))};
g.h.cancel=function(){this.Wg=!0;p5(this)};
g.h.FL=function(){this.bj=null;var a=(0,g.D)();0<=a-this.Xr?(2!=this.ki&&this.g.ye(3),p5(this),this.qg=2,m5(18),q5(this)):v5(this,this.Xr-a)};g.h=B5.prototype;g.h.Yo=null;g.h.Nd=null;g.h.kn=!1;g.h.Gu=null;g.h.Hl=null;g.h.Ep=null;g.h.Zo=null;g.h.Zd=null;g.h.Af=-1;g.h.Jj=null;g.h.hj=null;g.h.connect=function(a){this.Zo=a;a=C5(this.g,null,this.Zo);m5(3);this.Gu=(0,g.D)();var b=this.g.G;null!=b?(this.Jj=b[0],(this.hj=b[1])?(this.Zd=1,D5(this)):(this.Zd=2,F5(this))):(m4(a,"MODE","init"),this.Nd=new g5(this,void 0,void 0,void 0),this.Nd.hh=this.Yo,j5(this.Nd,a,!1,null,!0),this.Zd=0)};
g.h.MB=function(a){if(a)this.Zd=2,F5(this);else{m5(4);var b=this.g;b.Pe=b.ig.Af;Z5(b,9)}a&&this.ye(2)};
g.h.Ao=function(a){return this.g.Ao(a)};
g.h.abort=function(){this.Nd&&(this.Nd.cancel(),this.Nd=null);this.Af=-1};
g.h.Fu=function(){return!1};
g.h.jy=function(a,b){this.Af=a.Kj;if(0==this.Zd)if(b){try{var c=this.l.parse(b)}catch(d){c=this.g;c.Pe=this.Af;Z5(c,2);return}this.Jj=c[0];this.hj=c[1]}else c=this.g,c.Pe=this.Af,Z5(c,2);else if(2==this.Zd)if(this.kn)m5(7),this.Ep=(0,g.D)();else if("11111"==b){if(m5(6),this.kn=!0,this.Hl=(0,g.D)(),c=this.Hl-this.Gu,!g.Vd||g.Gc(10)||500>c)this.Af=200,this.Nd.cancel(),m5(12),E5(this.g,this,!0)}else m5(8),this.Hl=this.Ep=(0,g.D)(),this.kn=!1};
g.h.Vm=function(){this.Af=this.Nd.Kj;if(this.Nd.Ce)0==this.Zd?this.hj?(this.Zd=1,D5(this)):(this.Zd=2,F5(this)):2==this.Zd&&((!g.Vd||g.Gc(10)?!this.kn:200>this.Ep-this.Hl)?(m5(11),E5(this.g,this,!1)):(m5(12),E5(this.g,this,!0)));else{0==this.Zd?m5(9):2==this.Zd&&m5(10);var a=this.g;a.Pe=this.Af;Z5(a,2)}};
g.h.Ek=function(){return this.g.Ek()};
g.h.isActive=function(){return this.g.isActive()};
g.h.ye=function(a){this.g.ye(a)};g.h=G5.prototype;g.h.tj=null;g.h.wd=null;g.h.Ub=null;g.h.Xo=null;g.h.Ll=null;g.h.it=null;g.h.Ul=null;g.h.uk=0;g.h.FH=0;g.h.Uc=null;g.h.ng=null;g.h.nf=null;g.h.Yg=null;g.h.ig=null;g.h.On=null;g.h.ti=-1;g.h.rv=-1;g.h.Pe=-1;g.h.di=0;g.h.Wh=0;g.h.Xg=8;var $5=new g.Qf;g.B(H5,g.nf);g.B(I5,g.nf);g.B(J5,g.nf);g.h=G5.prototype;g.h.connect=function(a,b,c,d,e){m5(0);this.Xo=b;this.tj=c||{};d&&g.t(e)&&(this.tj.OSID=d,this.tj.OAID=e);this.C?(w5((0,g.A)(this.Ht,this,a),100),P5(this)):this.Ht(a)};
g.h.Ht=function(a){this.ig=new B5(this);this.ig.Yo=null;this.ig.l=this.B;this.ig.connect(a)};
g.h.Fu=function(){return 0==this.g};
g.h.oy=function(a){this.ng=null;U5(this,a)};
g.h.ny=function(){this.nf=null;this.Ub=new g5(this,this.o,"rpc",this.F);this.Ub.hh=null;this.Ub.bp=0;var a=this.it.clone();g.Gn(a,"RID","rpc");g.Gn(a,"SID",this.o);g.Gn(a,"CI",this.On?"0":"1");g.Gn(a,"AID",this.ti);L5(this,a);if(!g.Vd||g.Gc(10))g.Gn(a,"TYPE","xmlhttp"),j5(this.Ub,a,!0,this.Ul,!1);else{g.Gn(a,"TYPE","html");var b=this.Ub,c=!!this.Ul;b.ki=3;b.pg=l4(a.clone());u5(b,c)}};
g.h.jy=function(a,b){if(0!=this.g&&(this.Ub==a||this.wd==a))if(this.Pe=a.Kj,this.wd==a&&3==this.g)if(7<this.Xg){try{var c=this.B.parse(b)}catch(f){c=null}if(g.za(c)&&3==c.length)if(0==c[0])a:{if(!this.nf){if(this.Ub)if(this.Ub.Qi+3E3<this.wd.Qi)Q5(this),this.Ub.cancel(),this.Ub=null;else break a;X5(this);m5(19)}}else this.rv=c[1],0<this.rv-this.ti&&37500>c[2]&&this.On&&0==this.Wh&&!this.Yg&&(this.Yg=w5((0,g.A)(this.hI,this),6E3));else Z5(this,11)}else b!=Aoa.QN.g&&Z5(this,11);else if(this.Ub==a&&
Q5(this),!g.vb(b)){c=this.B.parse(b);g.za(c);for(var d=0;d<c.length;d++){var e=c[d];this.ti=e[0];e=e[1];2==this.g?"c"==e[0]?(this.o=e[1],this.Ul=e[2],e=e[3],null!=e?this.Xg=e:this.Xg=6,this.g=3,this.Uc&&this.Uc.wt(),this.it=C5(this,this.Ek()?this.Ul:null,this.Xo),V5(this)):"stop"==e[0]&&Z5(this,7):3==this.g&&("stop"==e[0]?Z5(this,7):"noop"!=e[0]&&this.Uc&&this.Uc.vt(e),this.Wh=0)}}};
g.h.hI=function(){null!=this.Yg&&(this.Yg=null,this.Ub.cancel(),this.Ub=null,X5(this),m5(20))};
g.h.Vm=function(a){if(this.Ub==a){Q5(this);this.Ub=null;var b=2}else if(this.wd==a)this.wd=null,b=1;else return;this.Pe=a.Kj;if(0!=this.g)if(a.Ce)1==b?(b=(0,g.D)()-a.Qi,$5.dispatchEvent(new I5($5,a.Dh?a.Dh.length:0,b,this.di)),O5(this),this.A.length=0):V5(this);else{var c=a.qg,d;if(!(d=3==c||7==c||0==c&&0<this.Pe)){if(d=1==b)this.wd||this.ng||1==this.g||2<=this.di?d=!1:(this.ng=w5((0,g.A)(this.oy,this,a),W5(this,this.di)),this.di++,d=!0);d=!(d||2==b&&X5(this))}if(d)switch(c){case 1:Z5(this,5);break;
case 4:Z5(this,10);break;case 3:Z5(this,6);break;case 7:Z5(this,12);break;default:Z5(this,2)}}};
g.h.YB=function(a){if(!g.Ta(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.yM=function(a){a?m5(2):(m5(1),Y5(this,8))};
g.h.Ao=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new x4;a.ba=!1;return a};
g.h.isActive=function(){return!!this.Uc&&this.Uc.isActive(this)};
g.h.ye=function(a){$5.dispatchEvent(new J5($5,a))};
g.h.Ek=function(){return!(!g.Vd||g.Gc(10))};
g.h=a6.prototype;g.h.wt=function(){};
g.h.vt=function(){};
g.h.qt=function(){};
g.h.ro=function(){};
g.h.lu=function(){return{}};
g.h.isActive=function(){return!0};g.B(b6,g.I);g.h=b6.prototype;g.h.nL=function(){this.Wc=Math.min(3E5,2*this.Wc);this.o();this.l&&this.start()};
g.h.start=function(){var a=this.Wc+15E3*Math.random();g.Mo(this.g,a);this.l=(0,g.D)()+a};
g.h.stop=function(){this.g.stop();this.l=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.Wc=5E3};g.B(c6,a6);g.h=c6.prototype;g.h.subscribe=function(a,b,c){return this.o.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.o.unsubscribe(a,b,c)};
g.h.Jc=function(a){return this.o.Jc(a)};
g.h.P=function(a,b){return this.o.P.apply(this.o,arguments)};
g.h.dispose=function(){this.J||(this.J=!0,g.lf(this.o),d6(this),g.lf(this.l),this.l=null)};
g.h.fa=function(){return this.J};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.H="";this.l.stop();this.B=a||null;this.A=b||0;a=this.M+"/test";b=this.M+"/bind";var d=new G5(c?c.firstTestResults:null,c?c.secondTestResults:null,this.R),e=this.g;e&&(e.Uc=null);d.Uc=this;this.g=d;e?this.g.connect(a,b,this.C,e.o,e.ti):c?this.g.connect(a,b,this.C,c.sessionId,c.arrayId):this.g.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.sc(c,b);this.l.isActive()||2==(this.g?this.g.g:0)?this.F.push(c):e6(this)&&R5(this.g,c)};
g.h.wt=function(){this.l.reset();this.B=null;this.A=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)R5(this.g,a[b])}this.P("handlerOpened")};
g.h.qt=function(a){var b=2==a&&401==this.g.Pe;4==a||b||this.l.start();this.P("handlerError",a)};
g.h.ro=function(a){if(!this.l.isActive())this.P("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.F.push(d)}};
g.h.lu=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.G&&(a.ui=""+this.G);this.B&&g.sc(a,this.B);return a};
g.h.vt=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),N5(this.g)):this.P("handlerMessage",new Sna(a[0],a[1]))};
g.h.ZM=function(){this.l.isActive();var a=this.g,b=0;a.Ub&&b++;a.wd&&b++;0!=b||this.connect(this.B,this.A)};f6.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
f6.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
f6.prototype.B=function(a){a(Error("request timed out"))};var Yna=(0,g.D)(),k6=null,o6=Array(50),n6=-1,p6=!1;g.B(q6,g.O);q6.prototype.Jd=function(){return this.g};
q6.prototype.contains=function(a){return!!K4(this.g,a)};
q6.prototype.get=function(a){return a?L4(this.g,a):null};
q6.prototype.info=function(a){m6(this.F,a)};g.B(s6,g.O);var x8=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=s6.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.Ea)&&this.wA()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.Ea)||(g.Zp(this.Ea),this.Ea=window.NaN)};
g.h.V=function(){this.stop();s6.Aa.V.call(this)};
g.h.wA=function(){this.Ea=window.NaN;this.g=g.nq(g6(this.C,"/pairing/get_screen"),{method:"POST",ob:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.A)(this.bN,this),onError:(0,g.A)(this.aN,this),od:(0,g.A)(this.cN,this)})};
g.h.bN=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.P("pairingComplete",new D4(c))};
g.h.aN=function(a){this.g=null;a.status&&404==a.status?this.l>=x8.length?this.P("pairingFailed",Error("DIAL polling timed out")):(a=x8[this.l],this.Ea=g.Xp((0,g.A)(this.wA,this),a),this.l++):this.P("pairingFailed",Error("Server error "+a.status))};
g.h.cN=function(){this.g=null;this.P("pairingFailed",Error("Server not responding"))};g.B(u6,q6);g.h=u6.prototype;g.h.start=function(){t6(this)&&this.P("screenChange");!g.Zs("yt-remote-lounge-token-expiration")&&v6(this);g.Zp(this.l);this.l=g.Xp((0,g.A)(this.start,this),1E4)};
g.h.add=function(a,b){t6(this);r6(this,a);w6(this,!1);this.P("screenChange");b(a);a.token||v6(this)};
g.h.remove=function(a,b){var c=t6(this);$na(this,a)&&(w6(this,!1),c=!0);b(a);c&&this.P("screenChange")};
g.h.Jn=function(a,b,c,d){var e=t6(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,w6(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.P("screenChange")};
g.h.V=function(){g.Zp(this.l);u6.Aa.V.call(this)};
g.h.zC=function(a){t6(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}w6(this,!b);b&&m6(this.F,"Missed "+b+" lounge tokens.")};
g.h.yC=function(a){m6(this.F,"Requesting lounge tokens failed: "+a)};g.B(y6,g.O);g.h=y6.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.Zs("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.D)()-144E5<a?0:a)?B6(this):(this.A=(0,g.D)()+3E5,g.Ys("yt-remote-fast-check-period",this.A),this.qr())};
g.h.isEmpty=function(){return g.kc(this.g)};
g.h.update=function(){x6("Updating availability on schedule.");var a=this.C(),b=g.Yb(this.g,function(b,d){return b&&!!L4(a,d)},this);
A6(this,b)};
g.h.V=function(){g.Zp(this.o);this.o=window.NaN;this.l&&(this.l.abort(),this.l=null);y6.Aa.V.call(this)};
g.h.qr=function(){g.Zp(this.o);this.o=window.NaN;this.l&&this.l.abort();var a=C6(this);if(g.bc(a)){var b=g6(this.B,"/pairing/get_screen_availability");this.l=h6(this.B,b,{lounge_token:g.ec(a).join(",")},(0,g.A)(this.UK,this,a),(0,g.A)(this.TK,this))}else A6(this,{}),B6(this)};
g.h.UK=function(a,b){this.l=null;var c=g.ec(C6(this));if(g.pb(c,g.ec(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;A6(this,d);B6(this)}else this.Hb("Changing Screen set during request."),this.qr()};
g.h.TK=function(a){this.Hb("Screen availability failed: "+a);this.l=null;B6(this)};
g.h.Hb=function(a){m6("OnlineScreenService",a)};g.B(D6,q6);g.h=D6.prototype;g.h.start=function(){this.o.start();this.l.start();this.g.length&&(this.P("screenChange"),this.l.isEmpty()||this.P("onlineScreenChange"))};
g.h.add=function(a,b,c){this.o.add(a,b,c)};
g.h.remove=function(a,b,c){this.o.remove(a,b,c);this.l.update()};
g.h.Jn=function(a,b,c,d){this.o.contains(a)?this.o.Jn(a,b,c,d):(a="Updating name of unknown screen: "+a.name,m6(this.F,a),d(Error(a)))};
g.h.Jd=function(a){return a?this.g:g.ab(this.g,(0,g.ke)(this.A,function(a){return!this.contains(a)},this))};
g.h.xA=function(){return(0,g.ke)(this.Jd(!0),function(a){return!!this.l.g[a.id]},this)};
g.h.yA=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new s6(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.A)(function(a){g.lf(f);d(E6(this,a))},this));
f.subscribe("pairingFailed",function(a){g.lf(f);e(a)});
f.start();return(0,g.A)(f.stop,f)};
g.h.eN=function(a,b,c,d){g.nq(g6(this.C,"/pairing/get_screen"),{method:"POST",ob:{pairing_code:a},timeout:5E3,onSuccess:(0,g.A)(function(a,d){var e=new D4(d.screen||{});if(!e.name||G6(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);G6(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(E6(this,e))},this),
onError:(0,g.A)(function(a){d(Error("pairing request failed: "+a.status))},this),
od:(0,g.A)(function(){d(Error("pairing request timed out."))},this)})};
g.h.V=function(){g.lf(this.o);g.lf(this.l);D6.Aa.V.call(this)};
g.h.KC=function(){H6(this);this.P("screenChange");this.l.update()};
D6.prototype.dispose=D6.prototype.dispose;g.B(J6,g.O);g.h=J6.prototype;g.h.Wm=function(a){this.o=a;this.P("sessionScreen",this.o)};
g.h.Md=function(a){this.fa()||(a&&K6(this,""+a),this.o=null,this.P("sessionScreen",null))};
g.h.info=function(a){m6(this.R,a)};
g.h.AA=function(){return null};
g.h.yr=function(a){var b=this.l;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.A)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.A)(function(){K6(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.V=function(){this.yr("");J6.Aa.V.call(this)};g.B(M6,J6);g.h=M6.prototype;g.h.xr=function(a){if(this.g){if(this.g==a)return;K6(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.C);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.g=a;this.g.addUpdateListener(this.C);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);doa(this)};
g.h.wi=function(a){this.info("launchWithParams no-op for Cast: "+g.Tg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.A)(function(){this.Md()},this),(0,g.A)(function(){this.Md(Error("Failed to stop receiver app."))},this)):this.Md(Error("Stopping cast device witout session."))};
g.h.yr=g.wa;g.h.V=function(){this.info("disposeInternal");g.Zp(this.A);this.A=0;this.g&&(this.g.removeUpdateListener(this.C),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.g=null;M6.Aa.V.call(this)};
g.h.QL=function(a,b){if(!this.fa())if(b){var c=g.Xo(b);if(g.Ca(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Tg(c));switch(d){case "mdxSessionStatus":L6(this,c.screenId);break;default:K6(this,"Unknown youtube message: "+d)}}else K6(this,"Unable to parse message.")}else K6(this,"No data in message.")};
g.h.xu=function(a,b,c,d){F6(this.H,this.l.label,a,this.l.friendlyName,(0,g.A)(function(e){e?b(e):0<=d?(K6(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Xp((0,g.A)(this.xu,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.AA=function(){return this.g};
g.h.fN=function(a){this.fa()||a||(K6(this,"Cast session died."),this.Md())};g.B(N6,J6);g.h=N6.prototype;g.h.xr=function(a){this.A=a;this.A.addUpdateListener(this.M)};
g.h.wi=function(a){this.B=a;this.F()};
g.h.stop=function(){this.g();this.g=g.wa;g.Zp(this.C);this.A?this.A.stop((0,g.A)(this.Md,this,null),(0,g.A)(this.Md,this,"Failed to stop DIAL device.")):this.Md()};
g.h.V=function(){this.g();this.g=g.wa;g.Zp(this.C);this.A&&this.A.removeUpdateListener(this.M);this.A=null;N6.Aa.V.call(this)};
g.h.iN=function(a){this.fa()||a||(K6(this,"DIAL session died."),this.g(),this.g=g.wa,this.Md())};
g.h.pp=function(a){this.J=J4();if(this.B){var b=new window.chrome.cast.DialLaunchResponse(!0,P6(this));a(b);O6(this)}else this.F=(0,g.A)(function(){g.Zp(this.C);this.F=g.wa;this.C=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,P6(this));a(b);O6(this)},this),this.C=g.Xp((0,g.A)(function(){this.F()},this),100)};
g.h.gD=function(a,b,c){F6(this.H,this.G.receiver.label,a,this.l.friendlyName,(0,g.A)(function(a){a&&a.token?(this.Wm(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.pp(b,c)},this),(0,g.A)(function(a){K6(this,"Failed to get DIAL screen: "+a);
this.pp(b,c)},this))};g.B(Q6,J6);Q6.prototype.stop=function(){this.Md()};
Q6.prototype.xr=g.wa;Q6.prototype.wi=function(){g.Zp(this.g);this.g=window.NaN;var a=L4(this.H.Jd(),this.l.label);a?this.Wm(a):this.Md(Error("No such screen"))};
Q6.prototype.V=function(){g.Zp(this.g);this.g=window.NaN;Q6.Aa.V.call(this)};g.B(R6,g.O);g.h=R6.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.F);this.G||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.A)(this.ly,this),(0,g.A)(this.DK,this),d,e);c.customDialLaunchCallback=(0,g.A)(this.KI,this);window.chrome.cast.initialize(c,
(0,g.A)(function(){this.fa()||(window.chrome.cast.addReceiverActionListener(this.A),Vna(),this.l.subscribe("onlineScreenChange",(0,g.A)(this.zA,this)),this.o=W6(this),window.chrome.cast.setCustomReceivers(this.o,g.wa,(0,g.A)(function(a){this.Hb("Failed to set initial custom receivers: "+g.Tg(a))},this)),this.P("yt-remote-cast2-availability-change",U6(this)),b(!0))},this),(0,g.A)(function(a){this.Hb("Failed to initialize API: "+g.Tg(a));
b(!1)},this))};
g.h.oM=function(a,b){T6("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.o;if(!a||c&&c.id!=a)T6("Unsetting old screen status: "+this.g.l.friendlyName),V6(this,null)}if(a&&b){if(!this.g){c=L4(this.l.Jd(),a);if(!c){T6("setConnectedScreenStatus: Unknown screen.");return}var d=S6(this,c);d||(T6("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.o.push(d),
window.chrome.cast.setCustomReceivers(this.o,g.wa,(0,g.A)(function(a){this.Hb("Failed to set initial custom receivers: "+g.Tg(a))},this)));
T6("setConnectedScreenStatus: new active receiver: "+d.friendlyName);V6(this,new Q6(this.l,d),!0)}this.g.yr(b)}else T6("setConnectedScreenStatus: no screen.")};
g.h.pM=function(a){this.fa()?this.Hb("Setting connection data on disposed cast v2"):this.g?this.g.wi(a):this.Hb("Setting connection data without a session")};
g.h.hN=function(){this.fa()?this.Hb("Stopping session on disposed cast v2"):this.g?(this.g.stop(),V6(this,null)):T6("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.A)(this.ly,this),(0,g.A)(this.ZK,this))};
g.h.V=function(){this.l.unsubscribe("onlineScreenChange",(0,g.A)(this.zA,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.A);g.Ya(g.z("yt.mdx.remote.debug.handlers_")||[],i6);g.lf(this.g);R6.Aa.V.call(this)};
g.h.Hb=function(a){m6("Controller",a)};
g.h.my=function(a,b){this.g==a&&(b||V6(this,null),this.P("yt-remote-cast2-session-change",b))};
g.h.zK=function(a,b){if(!this.fa())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),T6("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.l.label!=a.label)T6("onReceiverAction_: Stopping active receiver: "+this.g.l.friendlyName),this.g.stop();else{T6("onReceiverAction_: Casting to active receiver.");this.g.o&&this.P("yt-remote-cast2-session-change",this.g.o);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:V6(this,
new Q6(this.l,a));break;case window.chrome.cast.ReceiverType.DIAL:V6(this,new N6(this.l,a,this.C));break;case window.chrome.cast.ReceiverType.CAST:V6(this,new M6(this.l,a));break;default:this.Hb("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.l.label==a.label?this.g.stop():this.Hb("Stopping receiver w/o session: "+a.friendlyName)}else this.Hb("onReceiverAction_ called without receiver.")};
g.h.KI=function(a){if(this.fa())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.Hb("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.l:null;if(!c||c.label!=b.label)return this.Hb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.o)return T6("Reselecting dial screen."),
this.P("yt-remote-cast2-session-change",this.g.o),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.Hb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);V6(this,new N6(this.l,b,this.C))}b=this.g;b.G=a;return b.G.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.A)(b.gD,b,(b.G.extraData||{}).screenId||null)):new window.Promise((0,g.A)(b.pp,b))};
g.h.ly=function(a){if(!this.fa()){T6("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)T6("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),V6(this,new M6(this.l,b),!0);else{this.Hb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.l,d=L4(this.l.Jd(),c.label);
d&&E4(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(T6("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.lf(this.g),this.g=new M6(this.l,b),this.g.subscribe("sessionScreen",(0,g.A)(this.my,this,this.g)),this.g.wi(null));this.g.xr(a)}}};
g.h.gN=function(){return this.g?this.g.AA():null};
g.h.ZK=function(a){this.fa()||(this.Hb("Failed to estabilish a session: "+g.Tg(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&V6(this,null))};
g.h.DK=function(a){T6("Receiver availability updated: "+a);if(!this.fa()){var b=U6(this);this.B=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;U6(this)!=b&&this.P("yt-remote-cast2-availability-change",U6(this))}};
g.h.zA=function(){this.fa()||(this.o=W6(this),T6("Updating custom receivers: "+g.Tg(this.o)),window.chrome.cast.setCustomReceivers(this.o,g.wa,(0,g.A)(function(){this.Hb("Failed to set custom receivers.")},this)),this.P("yt-remote-cast2-availability-change",U6(this)))};
R6.prototype.setLaunchParams=R6.prototype.pM;R6.prototype.setConnectedScreenStatus=R6.prototype.oM;R6.prototype.stopSession=R6.prototype.hN;R6.prototype.getCastSession=R6.prototype.gN;R6.prototype.requestSession=R6.prototype.requestSession;R6.prototype.init=R6.prototype.init;R6.prototype.dispose=R6.prototype.dispose;var e7=[];m7.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";n7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.g=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.l=a.trackData,this.Re=a.hasPrevious,this.hasNext=a.hasNext,this.G=a.playerTime,this.F=a.playerTimeAt,this.B=a.seekableStart,this.o=a.seekableEnd,this.H=a.duration,this.J=a.loadedTime,this.A=a.liveIngestionTime,this.C=!(0,window.isNaN)(this.A))};
m7.prototype.isAdPlaying=function(){return 1081==this.g};
m7.prototype.clone=function(){return new m7(s7(this))};g.B(v7,g.O);g.h=v7.prototype;g.h.play=function(){1==this.g?(this.l?this.l.play(null,g.wa,D7(this,"play")):B7(this,"play"),A7(this,1,q7(w7(this))),this.P("remotePlayerChange")):y7(this,this.play)};
g.h.pause=function(){1==this.g?(this.l?this.l.pause(null,g.wa,D7(this,"pause")):B7(this,"pause"),A7(this,2,q7(w7(this))),this.P("remotePlayerChange")):y7(this,this.pause)};
g.h.vA=function(a){if(1==this.g){if(this.l){var b=w7(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.g||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.l.seek(c,g.wa,D7(this,"seekTo",{newTime:a}))}else B7(this,"seekTo",{newTime:a});A7(this,3,a);this.P("remotePlayerChange")}else y7(this,g.Ia(this.vA,a))};
g.h.stop=function(){if(1==this.g){this.l?this.l.stop(null,g.wa,D7(this,"stopVideo")):B7(this,"stopVideo");var a=w7(this);a.index=-1;a.videoId="";n7(a);z7(this,a);this.P("remotePlayerChange")}else y7(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=w7(this);if(this.o){if(c.volume!=a){var d=Math.round(a)/100;this.o.setReceiverVolumeLevel(d,(0,g.A)(function(){m6("CP","set receiver volume: "+d)},this),(0,g.A)(function(){this.Hb("failed to set receiver volume.")},this))}c.muted!=b&&this.o.setReceiverMuted(b,(0,g.A)(function(){m6("CP","set receiver muted: "+b)},this),(0,g.A)(function(){this.Hb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);B7(this,"setVolume",e)}c.muted=b;c.volume=a;z7(this,c)}else y7(this,g.Ia(this.setVolume,a,b))};
g.h.vz=function(a,b){if(1==this.g){var c=w7(this),d={videoId:a};b&&(c.l={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.Tg(b.style),g.sc(d,c.l));B7(this,"setSubtitlesTrack",d);z7(this,c)}else y7(this,g.Ia(this.vz,a,b))};
g.h.Yr=function(a,b){if(1==this.g){B7(this,"setAudioTrack",{videoId:a,audioTrackId:b.jb.id});var c=w7(this);c.audioTrackId=b.jb.id;z7(this,c)}else y7(this,g.Ia(this.Yr,a,b))};
g.h.uA=function(a,b){if(1==this.g){if(a&&b){var c=w7(this);r7(c,a,b);z7(this,c)}B7(this,"previous")}else y7(this,g.Ia(this.uA,a,b))};
g.h.tA=function(a,b){if(1==this.g){if(a&&b){var c=w7(this);r7(c,a,b);z7(this,c)}B7(this,"next")}else y7(this,g.Ia(this.tA,a,b))};
g.h.Xt=function(){1==this.g?B7(this,"dismissAutoplay"):y7(this,this.Xt)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.P("proxyStateChange",a,this.g)}v7.Aa.dispose.call(this)};
g.h.V=function(){x7(this);this.A=null;this.B.clear();u7(this,null);v7.Aa.V.call(this)};
g.h.Zr=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.P("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,0==b.g.length&&(b.g=b.l,b.g.reverse(),b.l=[]),a.g.pop().apply(this);else 3==a&&this.dispose()}};
g.h.vK=function(a,b){this.P(a,b)};
g.h.nI=function(a){if(!a)this.vk(null),u7(this,null);else if(this.o.receiver.volume){a=this.o.receiver.volume;var b=w7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)m6("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,z7(this,b)}};
g.h.vk=function(a){m6("CP","Cast media: "+!!a);this.l&&this.l.removeUpdateListener(this.G);if(this.l=a)this.l.addUpdateListener(this.G),C7(this),this.P("remotePlayerChange")};
g.h.mI=function(a){a?(C7(this),this.P("remotePlayerChange")):this.vk(null)};
g.h.zI=function(){var a=i7();a&&u7(this,a)};
g.h.Hb=function(a){m6("CP",a)};g.B(E7,g.O);g.h=E7.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.t(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.t(k)&&(l.currentIndex=k);c&&(this.Sa.listId=c);this.Sa.videoId=d;this.Sa.index=k||0;this.Sa.state=3;p7(this.Sa,m);this.A="UNSUPPORTED";F7("Connecting with setPlaylist and params: "+g.Tg(l));this.g.connect({method:"setPlaylist",params:g.Tg(l)},
a,R4())}else F7("Connecting without params"),this.g.connect({},a,R4());koa(this)};
g.h.dispose=function(){this.fa()||(this.P("beforeDispose"),G7(this,3));E7.Aa.dispose.call(this)};
g.h.V=function(){H7(this);J7(this);I7(this);g.Zp(this.H);this.H=window.NaN;g.Zp(this.J);this.J=window.NaN;this.o=null;g.lr(this.T);this.T.length=0;this.g.dispose();E7.Aa.V.call(this);this.A=this.F=this.l=this.Sa=this.g=null};
g.h.sC=function(){this.C(2)};
g.h.rI=function(){F7("Channel opened");this.U&&(this.U=!1,I7(this),this.R=g.Xp((0,g.A)(function(){F7("Timing out waiting for a screen.");this.C(1)},this),15E3));
Hna(Tna(this.g),this.Z)};
g.h.oI=function(){F7("Channel closed");(0,window.isNaN)(this.B)?U4(!0):U4();this.dispose()};
g.h.pI=function(a){U4();(0,window.isNaN)(this.G())?(F7("Channel error: "+a+" without reconnection"),this.dispose()):(this.U=!0,F7("Channel error: "+a+" with reconnection in "+this.G()+" ms"),G7(this,2))};
g.h.qI=function(a){a.params?F7("Received: action="+a.action+", params="+g.Tg(a.params)):F7("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.Xo(a.params.devices);this.l=(0,g.E)(a,function(a){return new C4(a)});
a=!!g.Pa(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
M7(this,a);break;case "loungeScreenDisconnected":g.Za(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
M7(this,!1);break;case "remoteConnected":var b=new C4(g.Xo(a.params.device));g.Pa(this.l,function(a){return b?a.id==b.id:!1})||g.Va(this.l,b);
break;case "remoteDisconnected":b=new C4(g.Xo(a.params.device));g.Za(this.l,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":N7(this,a);break;case "nowPlaying":noa(this,a);break;case "onStateChange":O7(this,a);break;case "onAdStateChange":ooa(this,a);break;case "onVolumeChanged":poa(this,a);break;case "onSubtitlesTrackChanged":moa(this,a);break;case "nowAutoplaying":qoa(this,a);break;case "autoplayDismissed":this.P("autoplayDismissed");break;case "autoplayUpNext":this.F=a.params.videoId||null;this.P("autoplayUpNext",this.F);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.P("autoplayModeChange",this.A);"DISABLED"==this.A&&this.P("autoplayDismissed");break;case "onHasPreviousNextChanged":roa(this,a);break;case "requestAssistedSignIn":this.P("assistedSignInRequested",a.params.authCode);break;default:F7("Unrecognized action: "+a.action)}};
g.h.fM=function(){if(this.o){var a=this.o;this.o=null;this.Sa.videoId!=a&&K7(this,"getNowPlaying")}};
E7.prototype.subscribe=E7.prototype.subscribe;E7.prototype.unsubscribeByKey=E7.prototype.Jc;E7.prototype.ha=function(){var a=3;this.fa()||(a=0,(0,window.isNaN)(this.G())?e6(this.g)&&(0,window.isNaN)(this.B)&&(a=1):a=2);return a};
E7.prototype.getProxyState=E7.prototype.ha;E7.prototype.C=function(a){F7("Disconnecting with "+a);H7(this);this.P("beforeDisconnect",a);1==a&&U4();d6(this.g,a);this.dispose()};
E7.prototype.disconnect=E7.prototype.C;E7.prototype.ca=function(){var a=this.Sa;this.o&&(a=this.Sa.clone(),r7(a,this.o,a.index));return s7(a)};
E7.prototype.getPlayerContextData=E7.prototype.ca;
E7.prototype.oa=function(a){var b=new m7(a);b.videoId&&b.videoId!=this.Sa.videoId&&(this.o=b.videoId,g.Zp(this.H),this.H=g.Xp((0,g.A)(this.fM,this),5E3));var c=[];this.Sa.listId==b.listId&&this.Sa.videoId==b.videoId&&this.Sa.index==b.index||c.push("remoteQueueChange");this.Sa.g==b.g&&this.Sa.volume==b.volume&&this.Sa.muted==b.muted&&q7(this.Sa)==q7(b)&&g.Tg(this.Sa.l)==g.Tg(b.l)||c.push("remotePlayerChange");this.Sa.reset(a);(0,g.C)(c,function(a){this.P(a)},this)};
E7.prototype.setPlayerContextData=E7.prototype.oa;E7.prototype.ba=function(){var a=this.g.C.id,b=g.Pa(this.l,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
E7.prototype.getOtherConnectedRemoteId=E7.prototype.ba;E7.prototype.G=function(){var a=this.g;return a.l.isActive()?a.l.l-(0,g.D)():window.NaN};
E7.prototype.getReconnectTimeout=E7.prototype.G;E7.prototype.Y=function(){return this.A||"UNSUPPORTED"};
E7.prototype.getAutoplayMode=E7.prototype.Y;E7.prototype.ga=function(){return this.F||""};
E7.prototype.getAutoplayVideoId=E7.prototype.ga;E7.prototype.sa=function(){if(!(0,window.isNaN)(this.G())){var a=this.g.l;g.No(a.g);a.start()}};
E7.prototype.reconnect=E7.prototype.sa;E7.prototype.ka=function(a,b){K7(this,a,b);L7(this)};
E7.prototype.sendMessage=E7.prototype.ka;g.B(P7,q6);g.h=P7.prototype;g.h.Jd=function(a){return this.Gc.$_gs(a)};
g.h.contains=function(a){return!!this.Gc.$_c(a)};
g.h.get=function(a){return this.Gc.$_g(a)};
g.h.start=function(){this.Gc.$_st()};
g.h.add=function(a,b,c){this.Gc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Gc.$_r(a,b,c)};
g.h.Jn=function(a,b,c,d){this.Gc.$_un(a,b,c,d)};
g.h.V=function(){for(var a=0,b=this.l.length;a<b;++a)this.Gc.$_ubk(this.l[a]);this.l.length=0;this.Gc=null;P7.Aa.V.call(this)};
g.h.dN=function(){this.P("screenChange")};
g.h.ZJ=function(){this.P("onlineScreenChange")};
D6.prototype.$_st=D6.prototype.start;D6.prototype.$_gspc=D6.prototype.eN;D6.prototype.$_gsppc=D6.prototype.yA;D6.prototype.$_c=D6.prototype.contains;D6.prototype.$_g=D6.prototype.get;D6.prototype.$_a=D6.prototype.add;D6.prototype.$_un=D6.prototype.Jn;D6.prototype.$_r=D6.prototype.remove;D6.prototype.$_gs=D6.prototype.Jd;D6.prototype.$_gos=D6.prototype.xA;D6.prototype.$_s=D6.prototype.subscribe;D6.prototype.$_ubk=D6.prototype.Jc;var Q7=null,R7=null,g8=null,V7=[];g.r(j8,g.I);g.h=j8.prototype;
g.h.V=function(){g.I.prototype.V.call(this);this.o.stop();this.B.stop();this.J.stop();this.R();this.g.unsubscribe("proxyStateChange",this.iy,this);this.g.unsubscribe("remotePlayerChange",this.wk,this);this.g.unsubscribe("remoteQueueChange",this.Xm,this);this.g.unsubscribe("autoplayUpNext",this.Hx,this);this.g.unsubscribe("previousNextChange",this.fy,this);this.g.unsubscribe("nowAutoplaying",this.Yx,this);this.g.unsubscribe("autoplayDismissed",this.Gx,this);this.g=this.A=null};
g.h.zw=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(n8(this)){if(!w7(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==w7(this.g).g?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.H.Gj(c[0],c[1]);break;case "control_subtitles_set_track":o8(this,c[0]);break;case "control_set_audio_track":c=c[0],n8(this)&&this.g.Yr(this.L.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.L.va();p8(this,0==c?void 0:c);break;case "control_seek":p8(this,c[0]);break;case "control_subtitles_set_track":o8(this,c[0]);break;case "control_set_audio_track":c=c[0],n8(this)&&this.g.Yr(this.L.getVideoData(1).videoId,c)}};
g.h.lI=function(a){this.J.nC(a)};
g.h.JM=function(a){this.zw("control_subtitles_set_track",g.kc(a)?null:a)};
g.h.Hz=function(){var a=this.L.Yb("captions","track");g.kc(a)||o8(this,a)};
g.h.Ux=function(a){if(n8(this)){this.g.unsubscribe("remotePlayerChange",this.wk,this);var b=Math.round(a.volume);a=!!a.muted;var c=w7(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.M.start();this.g.subscribe("remotePlayerChange",this.wk,this)}};
g.h.sJ=function(){g.kc(this.C)||q8(this,this.C);this.F=!1};
g.h.iy=function(a,b){this.B.stop();2==b&&this.Fz()};
g.h.wk=function(){if(n8(this)){this.o.stop();var a=w7(this.g);switch(a.g){case 1080:case 1081:case 1084:case 1085:this.A.G=1;break;case 1082:case 1083:this.A.G=0;break;default:this.A.G=-1}switch(a.g){case 1081:case 1:l8(this,new g.QB(8));this.Ez();break;case 1085:case 3:l8(this,new g.QB(9));break;case 1083:case 0:l8(this,new g.QB(2));this.H.stop();k8(this,this.L.getVideoData().lengthSeconds);break;case 1084:l8(this,new g.QB(4));break;case 2:l8(this,new g.QB(4));k8(this,q7(a));break;case -1:l8(this,
new g.QB(64));break;case -1E3:l8(this,new g.QB(128,{errorCode:"mdx.remoteerror",message:"This video is not available for remote playback."}))}a=w7(this.g).l;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,q8(this,a));a=w7(this.g);-1==a.volume||Math.round(this.L.Jb())==a.volume&&this.L.isMuted()==a.muted||this.M.isActive()||this.iA()}else m8(this)};
g.h.fy=function(){this.L.P("mdxpreviousnextchange")};
g.h.Xm=function(){n8(this)||m8(this)};
g.h.LB=function(){this.g.Xt()};
g.h.Hx=function(a){a&&(a=g.nq("/watch_queue_ajax",{method:"GET",Dc:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.A)(this.yL,this)}))&&(this.R=(0,g.A)(a.abort,a))};
g.h.yL=function(a,b){var c=new g.GA(g.U(this.L),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.L.P("mdxautoplayupnext",c)};
g.h.Yx=function(a){(0,window.isNaN)(a)||this.L.P("mdxnowautoplaying",a)};
g.h.Gx=function(){this.L.P("mdxautoplaycanceled")};
g.h.cG=function(a,b){-1==w7(this.g).g?p8(this,a):b&&this.g.vA(a)};
g.h.iA=function(){if(n8(this)){var a=w7(this.g);this.l.Na(this.U);a.muted?this.L.mute():this.L.Ve();this.L.setVolume(a.volume);this.U=this.l.N(this.L,"onVolumeChange",this.Ux)}};
g.h.Ez=function(){this.o.stop();if(!this.g.fa()){var a=w7(this.g);1==a.g&&l8(this,new g.QB(8));k8(this,q7(a));this.o.start()}};
g.h.Fz=function(){this.B.stop();this.o.stop();var a=this.g.A.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.r(t8,g.P);t8.prototype.A=function(a){s8(this,a.state)};g.r(u8,g.aS);u8.prototype.H=function(){var a=this.L.Yb("remote","receivers");a&&1<a.length&&!this.L.Yb("remote","quickCast")?(this.F=g.rb(a,this.A,this),g.bS(this,(0,g.E)(a,this.A)),a=this.L.Yb("remote","currentReceiver"),this.xe(this.A(a)),this.enable(!0)):this.enable(!1)};
u8.prototype.A=function(a){return a.key};
u8.prototype.we=function(a){return"cast-selector-receiver"==a?"Cast...":this.F[a].name};
u8.prototype.Xc=function(a){g.aS.prototype.Xc.call(this,a);this.L.kd("remote","currentReceiver",this.F[a]);this.o.tb()};g.r(v8,g.jJ);g.h=v8.prototype;g.h.create=function(){woa(g.Iy(g.U(this.player)));this.B.push(g.Lr("yt-remote-before-disconnect",this.iI,this));this.B.push(g.Lr("yt-remote-connection-change",this.EK,this));this.B.push(g.Lr("yt-remote-receiver-availability-change",this.gy,this));this.B.push(g.Lr("yt-remote-auto-connect",this.CK,this));this.B.push(g.Lr("yt-remote-receiver-resumed",this.BK,this));this.gy()};
g.h.load=function(){this.player.hq();g.jJ.prototype.load.call(this);this.A=new j8(this,this.player,this.g);var a=(a=i8())?a.currentTime:0;var b=f8()?new v7(a8(),void 0):null;0==a&&b&&(a=q7(w7(b)));0!=a&&(this.C=a||0,this.player.P("progresssync",a,void 0));r8(this,this.F,this.F);g.CV(this.player.app,6)};
g.h.unload=function(){this.player.P("mdxautoplaycanceled");this.o=this.l;g.mf(this.A,this.g);this.g=this.A=null;g.jJ.prototype.unload.call(this);g.CV(this.player.app,5)};
g.h.V=function(){g.Mr(this.B);g.jJ.prototype.V.call(this)};
g.h.kk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.A.zw.apply(this.A,[a].concat(g.fa(c)))};
g.h.kC=function(){return this.loaded?this.A.suggestion:null};
g.h.Re=function(){return this.g?w7(this.g).Re:!1};
g.h.hasNext=function(){return this.g?w7(this.g).hasNext:!1};
g.h.SF=function(){var a=w7(this.g),b=this.player.getVideoData();return{allowSeeking:g.Q(g.U(this.player).experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.zc():!a.isAdPlaying()&&this.player.zc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.C,displayedStart:-1,duration:a.C?a.H+o7(a):a.H,ingestionTime:a.C?a.A+o7(a):a.A,isPeggedToLive:1>=(a.C?a.o+o7(a):a.o)-this.C,loaded:a.J,seekableEnd:a.C?a.o+o7(a):a.o,seekableStart:0<a.B?a.B+o7(a):a.B}};
g.h.TF=function(){this.g&&this.g.tA()};
g.h.UF=function(){this.g&&this.g.uA()};
g.h.iI=function(a){1==a&&(this.J=this.g?w7(this.g):null)};
g.h.EK=function(){var a=f8()?new v7(a8(),void 0):null;if(a){var b=this.o;this.loaded&&this.unload();this.g=a;this.J=null;b.key!=this.l.key&&(this.o=b,this.load())}else g.lf(this.g),this.g=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.player.getVideoData().videoId&&this.player.aw(a.videoId,q7(a)));this.player.P("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.gy=function(){this.H=[this.l].concat(xoa());var a=b8()||this.l;w8(this,a);this.player.ma("onMdxReceiversChange")};
g.h.CK=function(){var a=b8();w8(this,a)};
g.h.BK=function(){this.o=b8()};
g.h.RF=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.H;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?k7():w8(this,b)),this.loaded?this.o:this.l;case "quickCast":return 2==this.H.length&&"cast-selector-receiver"==this.H[1].key?(b&&k7(),!0):!1}};
g.h.VF=function(){B7(this.g,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.ac=function(){return!1};g.mQ.remote=v8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 22:39:46 Oct 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:38:39 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 288.837
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.058
  cdx.remote: 0.055
  esindex: 0.008
  LoadShardBlock: 234.863 (3)
  PetaboxLoader3.datanode: 149.866 (4)
  load_resource: 75.877
  PetaboxLoader3.resolve: 43.383
*/