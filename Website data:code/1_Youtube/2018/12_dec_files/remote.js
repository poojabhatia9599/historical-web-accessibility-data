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

(function(g){var window=this;var Bpa=function(a,b){return g.Sb(a,b)},Y3=function(){},Cpa=function(a){if(a.uc&&"function"==typeof a.uc)return a.uc();
if(g.v(a))return a.split("");if(g.Aa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Ob(a)},Dpa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Aa(a)||g.v(a))(0,g.C)(a,b,void 0);else{if(a.Hd&&"function"==typeof a.Hd)var c=a.Hd();else if(a.uc&&"function"==typeof a.uc)c=void 0;else if(g.Aa(a)||g.v(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Pb(a);d=Cpa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},Z3=function(a){g.Em(a,"zx",g.wb());
return a},$3=function(a,b,c){g.za(c)||(c=[String(c)]);
g.Jm(a.o,b,c)},a4=function(a){if(!a.l&&"undefined"==typeof window.XMLHttpRequest&&"undefined"!=typeof window.ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new window.ActiveXObject(d),a.l=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.l},b4=function(a){var b;
(b=a.g)||(b={},a4(a)&&(b[0]=!0,b[1]=!0),b=a.g=b);return b},c4=function(a){return(a=a4(a))?new window.ActiveXObject(a):new window.XMLHttpRequest},d4=function(a,b){return b+" ["+a.X+" "+a.H+" "+a.getStatus()+"]"},Epa=function(a){return"content-type"==a.toLowerCase()},e4=function(a){a.g&&a.L&&(a.g.ontimeout=null);
a.F&&(g.w.clearTimeout(a.F),a.F=null)},Fpa=function(a){return g.ud&&g.oc(9)&&g.ua(a.timeout)&&g.t(a.ontimeout)},f4=function(a){a.R||(a.R=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},g4=function(a,b){if(a.g){e4(a);
var c=a.g,d=a.O[0]?g.wa:null;a.g=null;a.O=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},h4=function(a,b){a.l=!1;
a.g&&(a.o=!0,a.g.abort(),a.o=!1);a.B=b;a.A=5;f4(a);g4(a)},i4=function(a){return a.g?a.g.readyState:0},j4=function(a){if(a.l&&"undefined"!=typeof g.cW)if(a.O[1]&&4==i4(a)&&2==a.getStatus())d4(a,"Local request error detected and ignored");
else if(a.G&&4==i4(a))g.pg(a.Lu,0,a);else if(a.dispatchEvent("readystatechange"),4==i4(a)){d4(a,"Request complete");a.l=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.Ag(String(a.H))[1]||null;if(!f&&g.w.self&&g.w.self.location){var k=g.w.self.location.protocol;f=k.substr(0,k.length-1)}e=!Gpa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.A=6;try{var l=2<i4(a)?a.g.statusText:""}catch(m){l=""}a.B=l+" ["+a.getStatus()+"]";f4(a)}}finally{g4(a)}}},k4=function(a){g.Bf.call(this);
this.headers=new g.tm;this.T=a||null;this.l=!1;this.O=this.g=null;this.X=this.H="";this.A=0;this.B="";this.o=this.Y=this.G=this.R=!1;this.C=0;this.F=null;this.da="";this.L=this.Z=!1},l4=function(a){try{return a.g?a.g.responseText:""}catch(b){return""}},Hpa=function(a,b){var c=[];
g.wk(b,function(a){try{var b=g.oo.prototype.l.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.t(b)?g.no(b)&&c.push(a):c.push(a)},a);
return c},Ipa=function(a,b){var c=Hpa(a,b);
(0,g.C)(c,function(a){g.oo.prototype.remove.call(this,a)},a)},m4=function(a){if(a.bd){if(a.bd.locationOverrideToken)return{locationOverrideToken:a.bd.locationOverrideToken};
if(null!=a.bd.latitudeE7&&null!=a.bd.longitudeE7)return{latitudeE7:a.bd.latitudeE7,longitudeE7:a.bd.longitudeE7}}return null},Jpa=function(a,b,c,d){var e=new g.wm(null,void 0);
a&&g.xm(e,a);b&&g.ym(e,b);c&&g.zm(e,c);d&&(e.l=d);return e},n4=function(){this.g=[];
this.l=[]},o4=function(a){g.er[a]&&(a=g.er[a],(0,g.C)(a,function(a){g.cr[a]&&delete g.cr[a]}),a.length=0)},Kpa=function(a){var b=g.br();
if(b)if(b.clear(a),a)o4(a);else for(var c in g.er)o4(c)},p4=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.o=!1;this.capabilities=new window.Set;this.experiments=new window.Set;this.theme="u";new g.tm;this.g=this.l="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Lpa(this,a.capabilities||""),Mpa(this,a.experiments||""),this.l=a.remoteControllerUrl||"",
this.g=a.localChannelEncryptionKey||"")},Lpa=function(a,b){a.capabilities.clear();
(0,g.Gd)(b.split(","),g.Ia(Bpa,Npa)).forEach(function(b){a.capabilities.add(b)})},Mpa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(b){a.experiments.add(b)})},q4=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},r4=function(a,b){return!!b&&(a.id==b||a.uuid==b)},s4=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Opa=function(a){return new q4(a)},t4=function(a){return g.za(a)?(0,g.E)(a,Opa):[]},u4=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},v4=function(a){return g.za(a)?"["+(0,g.E)(a,u4).join(",")+"]":"null"},w4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Ppa=function(a){return(0,g.E)(a,function(a){return{key:a.id,
name:a.name}})},x4=function(a,b){return g.Oa(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})},y4=function(a,b){return g.Oa(a,function(a){return r4(a,b)})},Qpa=function(){var a=(0,g.os)();
a&&Ipa(a,a.g.ff(!0))},z4=function(){var a=g.rs("yt-remote-connected-devices")||[];
g.gb(a);return a},Rpa=function(a){if(0==a.length)return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.E)(a,function(a,b){return 0==b?a:a.substring(c.length)})},A4=function(a){g.qs("yt-remote-connected-devices",a,86400)},C4=function(){if(B4)return B4;
var a=g.rs("yt-remote-device-id");a||(a=w4(),g.qs("yt-remote-device-id",a,31536E3));for(var b=z4(),c=1,d=a;g.Ra(b,d);)c++,d=a+"#"+c;return B4=d},D4=function(){var a=z4(),b=C4();
g.Ra(a,b);g.us()&&g.jb(a,b);a=Rpa(a);if(0==a.length)try{g.Mr("remote_sid")}catch(c){}else try{g.Lr("remote_sid",a.join(","),-1)}catch(c){}},E4=function(){return g.rs("yt-remote-session-browser-channel")},F4=function(){return g.rs("yt-remote-local-screens")||[]},G4=function(){g.qs("yt-remote-lounge-token-expiration",!0,86400)},Spa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.E)(F4(),function(a){return a.loungeToken}),c=(0,g.E)(a,function(a){return a.loungeToken});
(0,g.gm)(c,function(a){return!g.Ra(b,a)})&&G4();
g.qs("yt-remote-local-screens",a,31536E3)},Tpa=function(a,b){g.qs("yt-remote-session-browser-channel",a);
g.qs("yt-remote-session-screen-id",b);var c=z4(),d=C4();g.Ra(c,d)||c.push(d);A4(c);D4()},H4=function(a){a||(g.ts("yt-remote-session-screen-id"),g.ts("yt-remote-session-video-id"));
D4();a=z4();g.Va(a,C4());A4(a)},J4=function(){if(!I4){var a=g.yo();
a&&(I4=new g.io(a))}return I4?!!I4.get("yt-remote-use-staging-server"):!1},Upa=function(){var a=window.document.createElement("a");
g.Vc(a,"https://web.archive.org/web/20181201001345/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.Bb(a)},Vpa=function(a,b,c){c=void 0===c?null:c;
var d=g.Ad("SCRIPT");d.id=a;d.onload=function(){b&&(0,window.setTimeout)(b,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
c&&d.setAttribute("nonce",c);g.Xc(d,g.Td("https://web.archive.org/web/20181201001345/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));a=window.document.getElementsByTagName("head")[0]||window.document.body;a.insertBefore(d,a.firstChild);return d},Wpa=function(a){a=void 0===a?null:a;
var b=Upa(),c=window.document.getElementById(b),d=c&&g.pq(c,"loaded");d||c&&!d||(c=Vpa(b,function(){g.pq(c,"loaded")||(g.oq(c,"loaded","true"),g.ir(b),g.qp(g.Ia(Kpa,b),0))},a))},Xpa=function(){var a=void 0===a?null:a;
window.spf?window.spf.script.load("https://web.archive.org/web/20181201001345/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):Wpa(a)},K4=function(a){return!!window.document.currentScript&&(-1!=window.document.currentScript.src.indexOf("?"+a)||-1!=window.document.currentScript.src.indexOf("&"+a))},L4=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},N4=function(a){a.length?M4(a.shift(),function(){N4(a)}):O4()},Ypa=function(a){return"chrome-extension://"+a+P4},M4=function(a,
b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},Q4=function(a){return 0<=window.navigator.userAgent.indexOf(a)},O4=function(){var a=L4();
a&&a(!1,"No cast extension found")},R4=function(){if(Zpa){var a=2,b=L4(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;M4("//web.archive.org/web/20181201001345/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",O4,c)}},$pa=function(){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
a&&(R4(),a({command:"cast.sender.init"}))},aqa=function(){R4();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);N4(["//web.archive.org/web/20181201001345/https://www.gstatic.com/eureka/clank/"+(a?(0,window.parseInt)(a[1],10):0)+P4,"//web.archive.org/web/20181201001345/https://www.gstatic.com/eureka/clank"+P4])},S4=function(a,b,c){g.G.call(this);
this.C=null!=c?(0,g.z)(a,c):a;this.Vc=b;this.B=(0,g.z)(this.xC,this);this.g=!1;this.l=0;this.o=this.Fa=null;this.A=[]},T4=function(){},U4=function(a,b,c,d){this.g=a;
this.o=b;this.F=c;this.C=d||1;this.A=45E3;this.ca=new g.Km(this);this.l=new g.og;this.l.setInterval(250)},W4=function(a,b,c){a.Mh=1;
a.dg=Z3(b.clone());a.lh=c;a.B=!0;V4(a,null)},X4=function(a,b,c,d,e){a.Mh=1;
a.dg=Z3(b.clone());a.lh=null;a.B=c;e&&(a.mz=!1);V4(a,d)},V4=function(a,b){a.xi=(0,g.D)();
Y4(a);a.rg=a.dg.clone();$3(a.rg,"t",a.C);a.Bk=0;a.oc=a.g.oo(a.g.sk()?b:null);0<a.Oo&&(a.Xm=new g.bl((0,g.z)(a.xA,a,a.oc),a.Oo));a.ca.fa(a.oc,"readystatechange",a.uM);var c=a.Mg?g.ac(a.Mg):{};a.lh?(a.Cn="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.oc.send(a.rg,a.Cn,a.lh,c)):(a.Cn="GET",a.mz&&!g.wd&&(c.Connection="close"),a.oc.send(a.rg,a.Cn,null,c));a.g.Ae(1)},e5=function(a,b,c){for(var d=!0;!a.Eg&&a.Bk<c.length;){var e=bqa(a,c);
if(e==Z4){4==b&&(a.eg=4,$4(15),d=!1);break}else if(e==a5){a.eg=4;$4(16);d=!1;break}else b5(a,e)}4==b&&0==c.length&&(a.eg=1,$4(17),d=!1);a.Ge=a.Ge&&d;d||(c5(a),d5(a))},bqa=function(a,b){var c=a.Bk,d=b.indexOf("\n",c);
if(-1==d)return Z4;c=Number(b.substring(c,d));if((0,window.isNaN)(c))return a5;d+=1;if(d+c>b.length)return Z4;var e=b.substr(d,c);a.Bk=d+c;return e},h5=function(a,b){a.xi=(0,g.D)();
Y4(a);var c=b?window.location.hostname:"";a.rg=a.dg.clone();g.Em(a.rg,"DOMAIN",c);g.Em(a.rg,"t",a.C);try{a.He=new window.ActiveXObject("htmlfile")}catch(n){c5(a);a.eg=7;$4(22);d5(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in f5)k=f5[l];else if(l in g5)k=f5[l]=g5[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
f5[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Yc(g.wc("b/12014412"),d+"</body></html>");a.He.open();a.He.write(g.Rc(c));a.He.close();a.He.parentWindow.m=(0,g.z)(a.JL,a);a.He.parentWindow.d=(0,g.z)(a.ty,a,!0);a.He.parentWindow.rpcClose=(0,g.z)(a.ty,a,!1);c=a.He.createElement("DIV");a.He.parentWindow.document.body.appendChild(c);d=g.Hc(a.rg.toString());d=g.rb(g.Ec(d));d=g.Yc(g.wc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Uc(c,g.Rc(d));a.g.Ae(1)},Y4=function(a){a.Yr=(0,g.D)()+
a.A;
i5(a,a.A)},i5=function(a,b){if(null!=a.Ii)throw Error("WatchDog timer not null");
a.Ii=j5((0,g.z)(a.UL,a),b)},k5=function(a){a.Ii&&(g.w.clearTimeout(a.Ii),a.Ii=null)},d5=function(a){a.g.Ju()||a.Eg||a.g.Lm(a)},c5=function(a){k5(a);
g.af(a.Xm);a.Xm=null;a.l.stop();g.Mm(a.ca);if(a.oc){var b=a.oc;a.oc=null;b.abort();b.dispose()}a.He&&(a.He=null)},b5=function(a,b){try{a.g.ky(a,b),a.g.Ae(4)}catch(c){}},m5=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;l5(a,b,function(e){e?c(!0):g.w.setTimeout(function(){m5(a,b,c,d,f)},f)})}},l5=function(a,b,c){var d=new window.Image;
d.onload=function(){try{n5(d),c(!0)}catch(e){}};
d.onerror=function(){try{n5(d),c(!1)}catch(e){}};
d.onabort=function(){try{n5(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{n5(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a},n5=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},o5=function(a){this.g=a;
this.l=new T4},q5=function(a){var b=p5(a.g,a.Ni,"/mail/images/cleardot.gif");
Z3(b);m5(b.toString(),5E3,(0,g.z)(a.RB,a),3,2E3);a.Ae(1)},s5=function(a){var b=a.g.H;
if(null!=b)$4(5),b?($4(11),r5(a.g,a,!1)):($4(12),r5(a.g,a,!0));else if(a.Od=new U4(a,void 0,void 0,void 0),a.Od.Mg=a.Mo,b=a.g,b=p5(b,b.sk()?a.qj:null,a.No),$4(5),!g.ud||g.pc(10))$3(b,"TYPE","xmlhttp"),X4(a.Od,b,!1,a.qj,!1);else{$3(b,"TYPE","html");var c=a.Od;a=!!a.qj;c.Mh=3;c.dg=Z3(b.clone());h5(c,a)}},t5=function(a,b,c){this.g=1;
this.l=[];this.A=[];this.B=new T4;this.G=a||null;this.H=null!=b?b:null;this.C=c||!1},cqa=function(a,b){this.g=a;
this.map=b;this.context=null},u5=function(a){g.cf.call(this,"statevent",a)},v5=function(a,b){g.cf.call(this,"timingevent",a);
this.size=b},w5=function(a){g.cf.call(this,"serverreachability",a)},A5=function(a){x5(a);
if(3==a.g){var b=a.dk++,c=a.Fl.clone();g.Em(c,"SID",a.o);g.Em(c,"RID",b);g.Em(c,"TYPE","terminate");y5(a,c);b=new U4(a,a.o,b,void 0);b.Mh=2;b.dg=Z3(c.clone());(new window.Image).src=b.dg;b.xi=(0,g.D)();Y4(b)}z5(a)},C5=function(a){a.fC(1,0);
a.Fl=p5(a,null,a.Lo);B5(a)},x5=function(a){a.Vf&&(a.Vf.abort(),a.Vf=null);
a.Qb&&(a.Qb.cancel(),a.Qb=null);a.hf&&(g.w.clearTimeout(a.hf),a.hf=null);D5(a);a.wd&&(a.wd.cancel(),a.wd=null);a.Zf&&(g.w.clearTimeout(a.Zf),a.Zf=null)},E5=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.l.push(new cqa(a.TH++,b));2!=a.g&&3!=a.g||B5(a)},B5=function(a){a.wd||a.Zf||(a.Zf=j5((0,g.z)(a.qy,a),0),a.Hh=0)},H5=function(a,b){if(1==a.g){if(!b){a.dk=Math.floor(1E5*Math.random());
var c=a.dk++,d=new U4(a,"",c,void 0);d.Mg=null;var e=F5(a),f=a.Fl.clone();g.Em(f,"RID",c);g.Em(f,"CVER","1");y5(a,f);W4(d,f,e);a.wd=d;a.g=2}}else 3==a.g&&(b?G5(a,b):0==a.l.length||a.wd||G5(a))},G5=function(a,b){if(b)if(6<a.Fg){a.l=a.A.concat(a.l);
a.A.length=0;var c=a.dk-1;var d=F5(a)}else c=b.F,d=b.lh;else c=a.dk++,d=F5(a);var e=a.Fl.clone();g.Em(e,"SID",a.o);g.Em(e,"RID",c);g.Em(e,"AID",a.Xh);y5(a,e);c=new U4(a,a.o,c,a.Hh+1);c.Mg=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.wd=c;W4(c,e,d)},y5=function(a,b){if(a.Tc){var c=a.Tc.ru();
c&&g.Hb(c,function(a,c){g.Em(b,c,a)})}},F5=function(a){var b=Math.min(a.l.length,1E3),c=["count="+b];
if(6<a.Fg&&0<b){var d=a.l[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.l[e].g,k=a.l[e].map;f=6>=a.Fg?e:f-d;try{g.Hb(k,function(a,b){c.push("req"+f+"_"+b+"="+(0,window.encodeURIComponent)(a))})}catch(l){c.push("req"+f+"_type="+(0,window.encodeURIComponent)("_badmap"))}}a.A=a.A.concat(a.l.splice(0,b));
return c.join("&")},I5=function(a){a.Qb||a.hf||(a.F=1,a.hf=j5((0,g.z)(a.oy,a),0),a.Ah=0)},K5=function(a){if(a.Qb||a.hf||3<=a.Ah)return!1;
a.F++;a.hf=j5((0,g.z)(a.oy,a),J5(a,a.Ah));a.Ah++;return!0},r5=function(a,b,c){a.An=c;
a.Ne=b.uf;a.C||C5(a)},D5=function(a){null!=a.Gg&&(g.w.clearTimeout(a.Gg),a.Gg=null)},J5=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},M5=function(a,b){if(2==b||9==b){var c=null;
a.Tc&&(c=null);var d=(0,g.z)(a.VM,a);c||(c=new g.wm("//web.archive.org/web/20181201001345/https://www.google.com/images/cleardot.gif"),Z3(c));l5(c.toString(),1E4,d)}else $4(2);L5(a,b)},L5=function(a,b){a.g=0;
a.Tc&&a.Tc.zt(b);z5(a);x5(a)},z5=function(a){a.g=0;
a.Ne=-1;if(a.Tc)if(0==a.A.length&&0==a.l.length)a.Tc.co();else{g.Ya(a.A);var b=g.Ya(a.l);a.A.length=0;a.l.length=0;a.Tc.co(b)}},p5=function(a,b,c){var d=g.Fm(c);
if(""!=d.g)b&&g.ym(d,b+"."+d.g),g.zm(d,d.B);else{var e=window.location;d=Jpa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.aj&&g.Hb(a.aj,function(a,b){g.Em(d,b,a)});
g.Em(d,"VER",a.Fg);y5(a,d);return d},j5=function(a,b){if(!g.Ba(a))throw Error("Fn must not be null and must be a function");
return g.w.setTimeout(function(){a()},b)},$4=function(a){N5.dispatchEvent(new u5(N5,a))},O5=function(){},dqa=function(a,b){this.action=a;
this.params=b||{}},P5=function(a,b){g.G.call(this);
this.g=new g.L(this.CL,0,this);g.I(this,this.g);this.Vc=5E3;this.l=0;if(g.Ba(a))b&&(a=(0,g.z)(a,b));else if(a&&g.Ba(a.handleEvent))a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.o=a},Q5=function(a,b,c){this.L=a;
this.C=b;this.o=new g.ho;this.l=new P5(this.sN,this);this.g=null;this.J=!1;this.B=null;this.H="";this.G=this.A=0;this.F=[];this.O=c||!1},eqa=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.An,sessionId:a.g.o,arrayId:a.g.Xh}},R5=function(a,b){a.G=b||0;
a.l.stop();a.g&&(3==a.g.g&&H5(a.g),A5(a.g));a.G=0},S5=function(a){return!!a.g&&3==a.g.g},fqa=function(a,b){(a.C.loungeIdToken=b)||a.l.stop()},T5=function(a){this.port=this.domain="";
this.g="/api/lounge";this.l=!0;a=a||window.document.location.href;var b=g.Dg(a)||"";b&&(this.port=":"+b);this.domain=g.Cg(a)||"";a=g.Fb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.zb(a,"10.0")&&(this.l=!1))},U5=function(a,b){var c=a.g;
if(g.t(void 0)?0:a.l)c="https://"+a.domain+a.port+a.g;return g.Mg(c+b,{})},V5=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ia(a.A,d,!0),onError:g.Ia(a.o,e),pd:g.Ia(a.B,e)};c&&(a.qb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Hp(b,a)},gqa=function(){var a=W5;
X5();Y5.push(a);Z5(Y5)},$5=function(a,b){X5();
var c=Y5,d=hqa(a,String(b));0==c.length?iqa(d):(Z5(c),(0,g.C)(c,function(a){a(d)}))},X5=function(){Y5||(Y5=g.y("yt.mdx.remote.debug.handlers_")||[],g.va("yt.mdx.remote.debug.handlers_",Y5,void 0))},iqa=function(a){var b=(a6+1)%50;
a6=b;b6[b]=a;c6||(c6=49==b)},Z5=function(a){var b=b6;
if(b[0]){var c=a6,d=c6?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.C)(a,function(a){a(e)})}while(d!=c);
b6=Array(50);a6=-1;c6=!1}},hqa=function(a,b){var c=((0,g.D)()-jqa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},d6=function(a){g.N.call(this);
this.F=a;this.g=[]},e6=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},kqa=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Gd)(a.g,function(a){return!!x4(b,a)});
for(var d=0,e=b.length;d<e;d++)c=e6(a,b[d])||c;return c},lqa=function(a,b){var c=a.g.length;
a.g=(0,g.Gd)(a.g,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.g.length<c},f6=function(a,b,c,d){g.N.call(this);
this.C=a;this.B=b;this.o=c;this.A=d;this.l=0;this.g=null;this.Fa=window.NaN},h6=function(a){d6.call(this,"LocalScreenService");
this.o=a;this.l=window.NaN;g6(this);this.info("Initializing with "+v4(this.g))},i6=function(a){if(a.g.length){var b=(0,g.E)(a.g,function(a){return a.id}),c=U5(a.o,"/pairing/get_lounge_token_batch");
V5(a.o,c,{screen_ids:b.join(",")},(0,g.z)(a.GC,a),(0,g.z)(a.FC,a))}},g6=function(a){var b=t4(F4());
b=(0,g.Gd)(b,function(a){return!a.uuid});
return kqa(a,b)},j6=function(a,b){Spa((0,g.E)(a.g,s4));
b&&G4()},l6=function(a,b){g.N.call(this);
this.C=b;var c=g.rs("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Ra(c,l)}this.g=d;this.B=a;this.o=this.A=window.NaN;this.l=null;k6("Initialized with "+g.ug(this.g))},m6=function(a,b,c){var d=U5(a.B,"/pairing/get_screen_availability");
V5(a.B,d,{lounge_token:b.token},(0,g.z)(function(a){a=a.screens||[];for(var d=0,e=a.length;d<e;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},n6=function(a,b){a:if(g.Mb(b)!=g.Mb(a.g))var c=!1;
else{c=g.Pb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(k6("Updated online screens: "+g.ug(a.g)),a.g=b,a.P("screenChange"));mqa(a)},o6=function(a){(0,window.isNaN)(a.o)||g.sp(a.o);
a.o=g.qp((0,g.z)(a.lr,a),0<a.A&&a.A<(0,g.D)()?2E4:1E4)},k6=function(a){$5("OnlineScreenService",a)},p6=function(a){var b={};
(0,g.C)(a.C(),function(a){a.token?b[a.token]=a.id:this.Hb("Requesting availability of screen w/o lounge token.")});
return b},mqa=function(a){a=g.Pb(g.Ib(a.g,function(a){return a}));
g.gb(a);a.length?g.qs("yt-remote-online-screen-ids",a.join(","),60):g.ts("yt-remote-online-screen-ids")},q6=function(a){d6.call(this,"ScreenService");
this.C=a;this.l=this.o=null;this.A=[];this.B={};nqa(this)},s6=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.Jd();if(k=(c?y4(k,c):null)||y4(k,b)){k.uuid=b;var l=r6(a,k);m6(a.l,l,function(a){e(a?l:null)})}else c?oqa(a,c,(0,g.z)(function(a){var f=r6(this,new q4({name:d,
screenId:c,loungeToken:a,dialId:b||""}));m6(this.l,f,function(a){e(a?f:null)})},a),f):e(null)},t6=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},oqa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={qb:{screen_ids:b},method:"POST",context:a,onSuccess:function(a,e){var f=e&&e.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Hp(U5(a.C,"/pairing/get_lounge_token_batch"),e)},u6=function(a){a.g=a.o.Jd();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+v4(a.g))},nqa=function(a){v6(a);
a.o=new h6(a.C);a.o.subscribe("screenChange",(0,g.z)(a.QC,a));u6(a);a.A=t4(g.rs("yt-remote-automatic-screen-cache")||[]);v6(a);a.info("Initializing automatic screens: "+v4(a.A));a.l=new l6(a.C,(0,g.z)(a.Jd,a,!0));a.l.subscribe("screenChange",(0,g.z)(function(){this.P("onlineScreenChange")},a))},r6=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=y4(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.qs("yt-remote-automatic-screen-cache",(0,g.E)(a.A,s4)));v6(a);a.B[b.uuid]=b.id;g.qs("yt-remote-device-id-map",a.B,31536E3);return b},v6=function(a){a.B=g.rs("yt-remote-device-id-map")||{}},w6=function(a,b,c){g.N.call(this);
this.O=c;this.H=a;this.l=b;this.o=null},x6=function(a,b){$5(a.O,b)},z6=function(a,b){w6.call(this,a,b,"CastSession");
this.g=null;this.A=0;this.C=(0,g.z)(this.yN,this);this.B=(0,g.z)(this.fM,this);this.A=g.qp((0,g.z)(function(){y6(this,null)},this),12E4)},pqa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.ug(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.wa,(0,g.z)(function(){x6(this,"Failed to send message: getMdxSessionStatus.")},a)):x6(a,"Sending yt message without session: "+g.ug(b))},y6=function(a,b){g.sp(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.o||a.o.id!=b){var c=(0,g.z)(a.Mm,a),d=(0,g.z)(a.Md,a);a.Bu(b,c,d,5)}}else a.Md(Error("Waiting for session status timed out."))},A6=function(a,b,c){w6.call(this,a,b,"DialSession");
this.A=this.G=null;this.J="";this.T=c;this.B=null;this.F=g.wa;this.C=window.NaN;this.L=(0,g.z)(this.BN,this);this.g=g.wa},B6=function(a){a.g=a.H.FA(a.J,a.l.label,a.l.friendlyName,(0,g.z)(function(a){this.g=g.wa;
this.Mm(a)},a),(0,g.z)(function(a){this.g=g.wa;
this.Md(a)},a))},C6=function(a){var b={};
b.pairingCode=a.J;b.theme=a.T;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}J4()&&(b.env_useStageMdx=1);return g.Kg(b)},D6=function(a,b){w6.call(this,a,b,"ManualSession");
this.g=g.qp((0,g.z)(this.Yh,this,null),150)},E6=function(a,b,c,d){g.N.call(this);
this.l=a;this.F=b||"233637DE";this.C=c||"cl";this.G=d||!1;this.g=null;this.B=!1;this.o=[];this.A=(0,g.z)(this.PK,this)},F6=function(a,b){return b?g.Oa(a.o,function(a){return r4(b,a.label)},a):null},G6=function(a){$5("Controller",a)},W5=function(a){window.chrome&&window.chrome.cast&&window.chrome.cast.logMessage&&window.chrome.cast.logMessage(a)},H6=function(a){return a.B||!!a.o.length||!!a.g},I6=function(a,b,c){b!=a.g&&(g.af(a.g),(a.g=b)?(c?a.P("yt-remote-cast2-receiver-resumed",b.l):a.P("yt-remote-cast2-receiver-selected",
b.l),b.subscribe("sessionScreen",(0,g.z)(a.ny,a,b)),b.o?a.P("yt-remote-cast2-session-change",b.o):c&&a.g.Yh(null)):a.P("yt-remote-cast2-session-change",null))},J6=function(a){var b=a.l.EA(),c=a.g&&a.g.l;
a=(0,g.E)(b,function(a){c&&r4(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,d=F6(this,a);d?(d.label=b,d.friendlyName=a.name):(d=new window.chrome.cast.Receiver(b,a.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM);return d},a);
c&&(c.receiverType!=window.chrome.cast.ReceiverType.CUSTOM&&(c=new window.chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=window.chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},tqa=function(a,b,c,d,e,f,k){qqa()?rqa(b,e,f,k)&&(L6(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?M6(a,c):(window.__onGCastApiAvailable=function(b,d){b?M6(a,c):(N6("Failed to load cast API: "+d),O6(!1),L6(!1),g.ts("yt-remote-cast-available"),g.ts("yt-remote-cast-receiver"),P6(),c(!1))},
d?Xpa():Q4("CriOS")?$pa():Q4("Android")&&Q4("Chrome/")&&window.navigator.presentation?aqa():window.chrome&&window.navigator.presentation&&!Q4("Edge")?(R4(),N4(sqa.map(Ypa))):O4())):K6("Cannot initialize because not running Chrome")},P6=function(){K6("dispose");
var a=Q6();a&&a.dispose();g.va("yt.mdx.remote.cloudview.instance_",null,void 0);R6(!1);g.gr(S6);S6.length=0},T6=function(){return!!g.rs("yt-remote-cast-installed")},U6=function(){var a=g.rs("yt-remote-cast-receiver");
return a?a.friendlyName:null},V6=function(){K6("clearCurrentReceiver");
g.ts("yt-remote-cast-receiver")},W6=function(){return T6()?Q6()?Q6().getCastSession():(N6("getCastSelector: Cast is not initialized."),null):(N6("getCastSelector: Cast API is not installed!"),null)},Y6=function(){T6()?Q6()?X6()?(K6("Requesting cast selector."),Q6().requestSession()):(K6("Wait for cast API to be ready to request the session."),S6.push(g.fr("yt-remote-cast2-api-ready",Y6))):N6("requestCastSelector: Cast is not initialized."):N6("requestCastSelector: Cast API is not installed!")},Z6=
function(a,b){X6()?Q6().setConnectedScreenStatus(a,b):N6("setConnectedScreenStatus called before ready.")},qqa=function(){var a=0<=g.Fb.search(/ (CrMo|Chrome|CriOS)\//);
return g.It||a},uqa=function(a,b){Q6().init(a,b)},rqa=function(a,b,c,d){var e=!1;
Q6()||(a=new E6(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.qs("yt-remote-cast-available",a);g.jr("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){K6("onReceiverSelected: "+a.friendlyName);
g.qs("yt-remote-cast-receiver",a);g.jr("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){K6("onReceiverResumed: "+a.friendlyName);
g.qs("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){K6("onSessionChange: "+u4(a));
a||g.ts("yt-remote-cast-receiver");g.jr("yt-remote-cast2-session-change",a)}),g.va("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
K6("cloudview.createSingleton_: "+e);return e},Q6=function(){return g.y("yt.mdx.remote.cloudview.instance_")},M6=function(a,b){O6(!0);
L6(!1);uqa(a,function(a){a?(R6(!0),g.ir("yt-remote-cast2-api-ready")):(N6("Failed to initialize cast API."),O6(!1),g.ts("yt-remote-cast-available"),g.ts("yt-remote-cast-receiver"),P6());b(a)})},K6=function(a){$5("cloudview",a)},N6=function(a){$5("cloudview",a)},O6=function(a){K6("setCastInstalled_ "+a);
g.qs("yt-remote-cast-installed",a)},X6=function(){return!!g.y("yt.mdx.remote.cloudview.apiReady_")},R6=function(a){K6("setApiReady_ "+a);
g.va("yt.mdx.remote.cloudview.apiReady_",a,void 0)},L6=function(a){g.va("yt.mdx.remote.cloudview.initializing_",a,void 0)},$6=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.C=this.F=0;this.g=null;this.hasNext=this.Pe=!1;this.H=this.G=this.l=this.A=0;this.o=window.NaN;this.B=!1;this.reset(a)},a7=function(a){a.audioTrackId=null;
a.g=null;a.playerState=-1;a.Pe=!1;a.hasNext=!1;a.F=0;a.C=(0,g.D)();a.A=0;a.l=0;a.G=0;a.H=0;a.o=window.NaN;a.B=!1},b7=function(a){return 1==a.playerState?((0,g.D)()-a.C)/1E3:0},c7=function(a,b){a.F=b;
a.C=(0,g.D)()},d7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.D)()-a.C)/1E3+a.F;
case -1E3:return 0}return a.F},e7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&a7(a)},f7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.bc(a.g);b.hasPrevious=a.Pe;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.C;b.seekableStart=a.A;b.seekableEnd=a.l;b.duration=a.G;b.loadedTime=a.H;b.liveIngestionTime=a.o;return b},i7=function(a,b){g.N.call(this);
this.g=0;this.A=a;this.C=[];this.B=new n4;this.o=this.l=null;this.H=(0,g.z)(this.BI,this);this.F=(0,g.z)(this.ek,this);this.G=(0,g.z)(this.AI,this);this.J=(0,g.z)(this.QI,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.es,this),g7(this))):c=3;0!=c&&(b?this.es(c):g.qp((0,g.z)(function(){this.es(c)},this),0));
var d=W6();d&&h7(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},j7=function(a){return new $6(a.A.getPlayerContextData())},g7=function(a){(0,g.C)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.C.push(this.A.subscribe(a,g.Ia(this.LK,a),this))},a)},k7=function(a){(0,g.C)(a.C,function(a){this.A.unsubscribeByKey(a)},a);
a.C.length=0},l7=function(a,b){var c=a.B;
50>c.g.length+c.l.length&&a.B.l.push(b)},n7=function(a,b,c){var d=j7(a);
c7(d,c);-1E3!=d.playerState&&(d.playerState=b);m7(a,d)},o7=function(a,b,c){a.A.sendMessage(b,c)},m7=function(a,b){k7(a);
a.A.setPlayerContextData(f7(b));g7(a)},h7=function(a,b){a.o&&(a.o.removeUpdateListener(a.H),a.o.removeMediaListener(a.F),a.ek(null));
a.o=b;a.o&&($5("CP","Setting cast session: "+a.o.sessionId),a.o.addUpdateListener(a.H),a.o.addMediaListener(a.F),a.o.media.length&&a.ek(a.o.media[0]))},p7=function(a){var b=a.l.media,c=a.l.customData;
if(b&&c){var d=j7(a);b.contentId!=d.videoId&&$5("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;c7(d,a.l.getEstimatedTime());m7(a,d)}else $5("CP","No cast media video. Ignoring state update.")},q7=function(a,b,c){return(0,g.z)(function(a){this.Hb("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.Hb("Retrying "+b+" using MDx browser channel."),o7(this,b,c))},a)},r7=function(a,b,c){g.N.call(this);
this.B=window.NaN;this.T=!1;this.J=this.H=this.L=this.O=window.NaN;this.R=[];this.A=this.F=this.o=this.Qa=this.g=null;this.pa=a;this.R.push(g.Eq(window,"beforeunload",(0,g.z)(this.zC,this)));this.l=[];this.Qa=new $6;this.Y=b.id;this.g=vqa(this,c);this.g.subscribe("handlerOpened",this.GI,this);this.g.subscribe("handlerClosed",this.CI,this);this.g.subscribe("handlerError",this.DI,this);this.g.subscribe("handlerMessage",this.FI,this);fqa(this.g,b.token);this.subscribe("remoteQueueChange",function(){var a=
this.Qa.videoId;g.us()&&g.qs("yt-remote-session-video-id",a)},this)},s7=function(a){$5("conn",a)},vqa=function(a,b){return new Q5(U5(a.pa,"/bc"),b)},t7=function(a,b){a.P("proxyStateChange",b)},wqa=function(a){a.B=g.qp((0,g.z)(function(){s7("Connecting timeout");
this.C(1)},a),2E4)},u7=function(a){g.sp(a.B);
a.B=window.NaN},v7=function(a){g.sp(a.O);
a.O=window.NaN},xqa=function(a){w7(a);
a.L=g.qp((0,g.z)(function(){x7(this,"getNowPlaying")},a),2E4)},w7=function(a){g.sp(a.L);
a.L=window.NaN},z7=function(a,b){b&&(u7(a),v7(a));
b==(S5(a.g)&&(0,window.isNaN)(a.B))?b&&(t7(a,1),x7(a,"getSubtitlesTrack")):b?(a.Z()&&a.Qa.reset(),t7(a,1),x7(a,"getNowPlaying"),y7(a)):a.C(1)},yqa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Qa.videoId&&(g.Wb(b.params)?a.Qa.g=null:a.Qa.g=b.params,a.P("remotePlayerChange"))},A7=function(a,b){var c=b.params.videoId||b.params.video_id,d=(0,window.parseInt)(b.params.currentIndex,10);
a.Qa.listId=b.params.listId||a.Qa.listId;e7(a.Qa,c,d);a.P("remoteQueueChange")},zqa=function(a,b){b.params=b.params||{};
A7(a,b);B7(a,b);a.P("autoplayDismissed")},B7=function(a,b){var c=(0,window.parseInt)(b.params.currentTime||b.params.current_time,10);
c7(a.Qa,(0,window.isNaN)(c)?0:c);c=(0,window.parseInt)(b.params.state,10);c=(0,window.isNaN)(c)?-1:c;-1==c&&-1E3==a.Qa.playerState&&(c=-1E3);a.Qa.playerState=c;c=Number(b.params.loadedTime);a.Qa.H=(0,window.isNaN)(c)?0:c;c=Number(b.params.duration);a.Qa.G=(0,window.isNaN)(c)?0:c;c=a.Qa;var d=Number(b.params.liveIngestionTime);c.o=d;c.B=(0,window.isNaN)(d)?!1:!0;c=a.Qa;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.A=(0,window.isNaN)(d)?0:d;c.l=(0,window.isNaN)(e)?0:
e;1==a.Qa.playerState?xqa(a):w7(a);a.P("remotePlayerChange")},Aqa=function(a,b){if(-1E3!=a.Qa.playerState){var c=1085;
switch((0,window.parseInt)(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Qa.playerState=c;c=(0,window.parseInt)(b.params.currentTime,10);c7(a.Qa,(0,window.isNaN)(c)?0:c);a.P("remotePlayerChange")}},Bqa=function(a,b){var c="true"==b.params.muted;
a.Qa.volume=(0,window.parseInt)(b.params.volume,10);a.Qa.muted=c;a.P("remotePlayerChange")},Cqa=function(a,b){a.F=b.params.videoId;
a.P("nowAutoplaying",(0,window.parseInt)(b.params.timeout,10))},Dqa=function(a,b){var c="true"==b.params.hasNext;
a.Qa.Pe="true"==b.params.hasPrevious;a.Qa.hasNext=c;a.P("previousNextChange")},y7=function(a){g.sp(a.J);
a.J=g.qp((0,g.z)(a.C,a,1),864E5)},x7=function(a,b,c){c?s7("Sending: action="+b+", params="+g.ug(c)):s7("Sending: action="+b);
a.g.sendMessage(b,c)},C7=function(a){d6.call(this,"ScreenServiceProxy");
this.Jc=a;this.l=[];this.l.push(this.Jc.$_s("screenChange",(0,g.z)(this.wN,this)));this.l.push(this.Jc.$_s("onlineScreenChange",(0,g.z)(this.oK,this)))},Iqa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.gp("MDX_CONFIG")||b;Qpa();D4();D7||(D7=new T5(b?b.loungeApiHost:void 0),J4()&&(D7.g="/api/loungedev"));E7||(E7=g.y("yt.mdx.remote.deferredProxies_")||[],g.va("yt.mdx.remote.deferredProxies_",E7,void 0));Eqa();var c=F7();if(!c){var d=new q6(D7);g.va("yt.mdx.remote.screenService_",d,void 0);c=F7();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);tqa(a,d,function(a){a?G7()&&Z6(G7(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.jr("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.y("yt.mdx.remote.initialized_")&&(g.va("yt.mdx.remote.initialized_",!0,void 0),H7("Initializing: "+g.ug(b)),I7.push(g.fr("yt-remote-cast2-availability-change",function(){g.jr("yt-remote-receiver-availability-change")})),I7.push(g.fr("yt-remote-cast2-receiver-selected",function(){J7(null);
g.jr("yt-remote-auto-connect","cast-selector-receiver")})),I7.push(g.fr("yt-remote-cast2-receiver-resumed",function(){g.jr("yt-remote-receiver-resumed","cast-selector-receiver")})),I7.push(g.fr("yt-remote-cast2-session-change",Fqa)),I7.push(g.fr("yt-remote-connection-change",function(a){a?Z6(G7(),"YouTube TV"):K7()||(Z6(null,null),V6())})),a=L7(),b.isAuto&&(a.id+="#dial"),g.np("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),H7(" -- with channel params: "+
g.ug(a)),Gqa(a),c.start(),G7()||Hqa())},Jqa=function(){var a=M7();
T6()&&g.rs("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},M7=function(){var a=F7().Jc.$_gos();
var b=N7();b&&O7()&&(x4(a,b)||a.push(b));return Ppa(a)},P7=function(){var a=Kqa();
!a&&T6()&&U6()&&(a={key:"cast-selector-receiver",name:U6()});return a},Kqa=function(){var a=M7(),b=N7();
b||(b=K7());return g.Oa(a,function(a){return b&&r4(b,a.key)?!0:!1})},N7=function(){var a=G7();
if(!a)return null;var b=F7().Jd();return y4(b,a)},Fqa=function(a){H7("remote.onCastSessionChange_: "+u4(a));
if(a){var b=N7();b&&b.id==a.id?Z6(b.id,"YouTube TV"):(b&&Q7(),R7(a,1))}else O7()&&Q7()},Q7=function(){X6()?Q6().stopSession():N6("stopSession called before API ready.");
var a=O7();a&&(a.disconnect(1),S7(null))},T7=function(){var a=O7();
return!!a&&3!=a.getProxyState()},H7=function(a){$5("remote",a)},F7=function(){if(!U7){var a=g.y("yt.mdx.remote.screenService_");
U7=a?new C7(a):null}return U7},G7=function(){return g.y("yt.mdx.remote.currentScreenId_")},V7=function(a){g.va("yt.mdx.remote.currentScreenId_",a,void 0)},W7=function(){return g.y("yt.mdx.remote.connectData_")},J7=function(a){g.va("yt.mdx.remote.connectData_",a,void 0)},O7=function(){return g.y("yt.mdx.remote.connection_")},S7=function(a){var b=O7();
J7(null);a||V7("");g.va("yt.mdx.remote.connection_",a,void 0);E7&&((0,g.C)(E7,function(b){b(a)}),E7.length=0);
b&&!a?g.jr("yt-remote-connection-change",!1):!b&&a&&g.jr("yt-remote-connection-change",!0)},K7=function(){var a=g.us();
if(!a)return null;var b=F7().Jd();return y4(b,a)},R7=function(a,b){N7()&&N7();
V7(a.id);var c=new r7(D7,a,L7());c.connect(b,W7());c.subscribe("beforeDisconnect",function(a){g.jr("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){O7()&&S7(null)});
S7(c)},Hqa=function(){var a=K7();
a?(H7("Resume connection to: "+u4(a)),R7(a,0)):(H4(),V6(),H7("Skipping connecting because no session screen found."))},Eqa=function(){var a=L7();
if(g.Wb(a)){a=C4();var b=g.rs("yt-remote-session-name")||"",c=g.rs("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.va("yt.mdx.remote.channelParams_",a,void 0)}},L7=function(){return g.y("yt.mdx.remote.channelParams_")||{}},Gqa=function(a){a?(g.qs("yt-remote-session-app",a.app),g.qs("yt-remote-session-name",a.name)):(g.ts("yt-remote-session-app"),g.ts("yt-remote-session-name"));
g.va("yt.mdx.remote.channelParams_",a,void 0)},X7=function(a,b,c){g.G.call(this);
this.B=a;this.l=b;this.o=new g.Rq(this);g.I(this,this.o);this.o.M(b,"onCaptionsTrackListChanged",this.GJ);this.o.M(b,"captionschanged",this.zI);this.o.M(b,"captionssettingschanged",this.Oz);this.o.M(b,"videoplayerreset",this.Nm);this.o.M(b,"mdxautoplaycancel",this.QB);this.R=this.o.M(b,"onVolumeChange",this.Xx);this.G=!1;this.g=c;c.subscribe("proxyStateChange",this.jy,this);c.subscribe("remotePlayerChange",this.gk,this);c.subscribe("remoteQueueChange",this.Nm,this);c.subscribe("autoplayUpNext",this.Lx,
this);c.subscribe("previousNextChange",this.gy,this);c.subscribe("nowAutoplaying",this.ay,this);c.subscribe("autoplayDismissed",this.Kx,this);this.suggestion=null;this.H=new g.mB(64);this.A=new g.L(this.Lz,500,this);g.I(this,this.A);this.C=new g.L(this.Mz,1E3,this);g.I(this,this.C);this.L=new S4(this.dN,0,this);g.I(this,this.L);this.F={};this.O=new g.L(this.oA,1E3,this);g.I(this,this.O);this.J=new g.bl(this.lG,1E3,this);g.I(this,this.J);this.T=g.wa;this.Oz();this.Nm();this.gk()},Y7=function(a,b){var c=
a.B,d=a.l.getVideoData().lengthSeconds;
c.C=b||0;c.player.P("progresssync",b,d)},$7=function(a){Y7(a,0);
a.A.stop();Z7(a,new g.mB(64))},b8=function(a,b){if(a8(a)&&!a.G){var c=null;
b&&(c={style:a.l.gh()},g.dc(c,b));a.g.Bz(a.l.getVideoData(1).videoId,c);a.F=j7(a.g).g}},c8=function(a,b){var c=a.l.Ve();
if(c){var d=c.Ua;var e=c.listId.toString()}var f=a.l.getVideoData(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;var m=f.Qh;f=m4(f);var n=j7(c);l=l||0;var p={videoId:k,currentIndex:l};e7(n,k,l);g.t(b)&&(c7(n,b),p.currentTime=b);g.t(e)&&(p.listId=e);null!=d&&(p.playerParams=d);null!=m&&(p.clickTrackingParams=m);null!=f&&(p.locationInfo=g.ug(f));o7(c,"setPlaylist",p);e||m7(c,n);Z7(a,new g.mB(1))},d8=function(a,b){if(b){var c=a.l.Ub("captions","tracklist",{cv:1});
c&&c.length?(a.l.ld("captions","track",b),a.G=!1):(a.l.hi("captions"),a.G=!0)}else a.l.ld("captions","track",{})},a8=function(a){return j7(a.g).videoId==a.l.getVideoData(1).videoId},Z7=function(a,b){a.C.stop();
var c=a.H;if(!g.sB(c,b)){var d=g.U(b,2);d!=g.U(a.H,2)&&g.cI(a.l,d);a.H=b;e8(a.B,c,b)}},g8=function(a){g.P.call(this,{D:"div",
I:"ytp-remote",K:[{D:"div",I:"ytp-remote-display-status",K:[{D:"div",I:"ytp-remote-display-status-icon",K:[g.hN()]},{D:"div",I:"ytp-remote-display-status-text",V:"{{statustext}}"}]}]});this.l=new g.RN(this,250);g.I(this,this.l);this.o=a;this.M(a,"presentingplayerstatechange",this.A);f8(this,g.ZH(a))},f8=function(a,b){if(3==a.o.Da()){var c={RECEIVER_NAME:a.o.Ub("remote","currentReceiver").name};
c=g.U(b,128)?g.bM("Error on $RECEIVER_NAME",c):g.tB(b)||g.U(b,4)?g.bM("Playing on $RECEIVER_NAME",c):g.bM("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.l.show()}else a.l.hide()},h8=function(a,b){g.GR.call(this,"Play on",0,a,b);
this.l=a;this.G={};this.M(a,"onMdxReceiversChange",this.J);this.M(a,"presentingplayerstatechange",this.J);this.J()},i8=function(a){g.II.call(this,a);
this.l={key:w4(),name:"This computer"};this.A=null;this.B=[];this.J=this.g=null;this.H=[this.l];this.o=this.l;this.F=new g.mB(64);this.C=0;this.G=-1;if(!g.ky(g.V(this.player))){a=this.player;var b=g.ht(a);b&&(b=b.xm())&&(b=new h8(a,b),g.I(this,b));b=new g8(a);g.I(this,b);g.tI(a,b.element,4)}},e8=function(a,b,c){a.F=c;
a.player.P("presentingplayerstatechange",new g.yB(c,b))},j8=function(a,b){if(b.key!=a.o.key)if(b.key==a.l.key)Q7();
else{a.o=b;var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(c||e){var f=a.player.Ve();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.Aa(l).videoId}else k=[e];f=a.player.xa(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.Qh,index:Math.max(a.player.hw(),0),currentTime:0==f?void 0:f};(d=m4(d))&&(c.locationInfo=d);d=c}else d=null;H7("Connecting to: "+g.ug(b));"cast-selector-receiver"==b.key?(J7(d||null),X6()?Q6().setLaunchParams(d||
null):N6("setLaunchParams called before ready.")):!d&&T7()&&G7()==b.key?g.jr("yt-remote-connection-change",!0):(Q7(),J7(d||null),d=F7().Jd(),(d=y4(d,b.key))&&R7(d,1))}},Gpa=/^https?$/i,Lqa=["POST",
"PUT"];g.B(k4,g.Bf);g.h=k4.prototype;
g.h.send=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET";this.H=a;this.B="";this.A=0;this.X=b;this.R=!1;this.l=!0;this.g=this.T?c4(this.T):c4(g.BW);this.O=this.T?b4(this.T):b4(g.BW);this.g.onreadystatechange=(0,g.z)(this.Lu,this);try{Y3(d4(this,"Opening Xhr")),this.Y=!0,this.g.open(b,String(a),!0),this.Y=!1}catch(f){Y3(d4(this,"Error opening Xhr: "+f.message));h4(this,f);return}a=c||"";var e=this.headers.clone();
d&&Dpa(d,function(a,b){e.set(b,a)});
d=g.Oa(e.Hd(),Epa);c=g.w.FormData&&a instanceof g.w.FormData;!g.Ra(Lqa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.g.setRequestHeader(b,a)},this);
this.da&&(this.g.responseType=this.da);"withCredentials"in this.g&&this.g.withCredentials!==this.Z&&(this.g.withCredentials=this.Z);try{e4(this),0<this.C&&(this.L=Fpa(this.g),Y3(d4(this,"Will abort after "+this.C+"ms if incomplete, xhr2 "+this.L)),this.L?(this.g.timeout=this.C,this.g.ontimeout=(0,g.z)(this.Mu,this)):this.F=g.pg(this.Mu,this.C,this)),Y3(d4(this,"Sending request")),this.G=!0,this.g.send(a),this.G=!1}catch(f){Y3(d4(this,"Send error: "+f.message)),h4(this,f)}};
g.h.Mu=function(){"undefined"!=typeof g.cW&&this.g&&(this.B="Timed out after "+this.C+"ms, aborting",this.A=8,d4(this,this.B),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.g&&this.l&&(d4(this,"Aborting"),this.l=!1,this.o=!0,this.g.abort(),this.o=!1,this.A=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),g4(this))};
g.h.U=function(){this.g&&(this.l&&(this.l=!1,this.o=!0,this.g.abort(),this.o=!1),g4(this,!0));k4.za.U.call(this)};
g.h.Lu=function(){this.ea()||(this.Y||this.G||this.o?j4(this):this.OK())};
g.h.OK=function(){j4(this)};
g.h.isActive=function(){return!!this.g};
g.h.getStatus=function(){try{return 2<i4(this)?this.g.status:-1}catch(a){return-1}};
var g5={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},f5={"'":"\\'"},Mqa={};g.h=n4.prototype;g.h.isEmpty=function(){return 0==this.g.length&&0==this.l.length};
g.h.clear=function(){this.g=[];this.l=[]};
g.h.contains=function(a){return g.Ra(this.g,a)||g.Ra(this.l,a)};
g.h.remove=function(a){var b=this.g;var c=(0,g.xla)(b,a);0<=c?(g.Ua(b,c),b=!0):b=!1;return b||g.Va(this.l,a)};
g.h.uc=function(){for(var a=[],b=this.g.length-1;0<=b;--b)a.push(this.g[b]);var c=this.l.length;for(b=0;b<c;++b)a.push(this.l[b]);return a};
var Npa={WN:"atp",fQ:"ska",WP:"que",xP:"mus",eQ:"sus",PO:"dsp"};p4.prototype.ul=function(){var a=new p4({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.o=this.o;a.l=this.l;a.g=this.g};
var I4,B4="",P4=K4("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",Zpa=K4("loadCastFramework")||K4("loadCastApplicationFramework"),sqa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.B(S4,g.G);g.h=S4.prototype;g.h.wC=function(a){this.A=arguments;this.g=!1;this.Fa?this.o=(0,g.D)()+this.Vc:this.Fa=g.pg(this.B,this.Vc)};
g.h.stop=function(){this.Fa&&(g.w.clearTimeout(this.Fa),this.Fa=null);this.o=null;this.g=!1;this.A=[]};
g.h.pause=function(){++this.l};
g.h.resume=function(){this.l&&(--this.l,!this.l&&this.g&&(this.g=!1,this.C.apply(null,this.A)))};
g.h.U=function(){this.stop();S4.za.U.call(this)};
g.h.xC=function(){this.o?(this.Fa=g.pg(this.B,this.o-(0,g.D)()),this.o=null):(this.Fa=null,this.l?this.g=!0:(this.g=!1,this.C.apply(null,this.A)))};T4.prototype.stringify=function(a){return g.w.JSON.stringify(a,void 0)};
T4.prototype.parse=function(a){return g.w.JSON.parse(a,void 0)};g.h=U4.prototype;g.h.Mg=null;g.h.Ge=!1;g.h.Ii=null;g.h.Yr=null;g.h.xi=null;g.h.Mh=null;g.h.dg=null;g.h.rg=null;g.h.lh=null;g.h.oc=null;g.h.Bk=0;g.h.He=null;g.h.Cn=null;g.h.eg=null;g.h.rj=-1;g.h.mz=!0;g.h.Eg=!1;g.h.Oo=0;g.h.Xm=null;var a5={},Z4={};g.h=U4.prototype;g.h.setTimeout=function(a){this.A=a};
g.h.uM=function(a){a=a.target;var b=this.Xm;b&&3==i4(a)?b.nj():this.xA(a)};
g.h.xA=function(a){try{if(a==this.oc)a:{var b=i4(this.oc),c=this.oc.A,d=this.oc.getStatus();if(g.ud&&!g.pc(10)||g.wd&&!g.oc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.oh&&!l4(this.oc))break a;this.Eg||4!=b||7==c||(8==c||0>=d?this.g.Ae(3):this.g.Ae(2));k5(this);var e=this.oc.getStatus();this.rj=e;var f=l4(this.oc);(this.Ge=200==e)?(4==b&&c5(this),this.B?(e5(this,b,f),g.oh&&this.Ge&&3==b&&(this.ca.fa(this.l,"tick",this.rM),this.l.start())):b5(this,f),this.Ge&&!this.Eg&&(4==b?this.g.Lm(this):(this.Ge=
!1,Y4(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.eg=3,$4(13)):(this.eg=0,$4(14)),c5(this),d5(this))}}catch(k){this.oc&&l4(this.oc)}finally{}};
g.h.rM=function(){var a=i4(this.oc),b=l4(this.oc);this.Bk<b.length&&(k5(this),e5(this,a,b),this.Ge&&4!=a&&Y4(this))};
g.h.JL=function(a){j5((0,g.z)(this.IL,this,a),0)};
g.h.IL=function(a){this.Eg||(k5(this),b5(this,a),Y4(this))};
g.h.ty=function(a){j5((0,g.z)(this.HL,this,a),0)};
g.h.HL=function(a){this.Eg||(c5(this),this.Ge=a,this.g.Lm(this),this.g.Ae(4))};
g.h.cancel=function(){this.Eg=!0;c5(this)};
g.h.UL=function(){this.Ii=null;var a=(0,g.D)();0<=a-this.Yr?(2!=this.Mh&&this.g.Ae(3),c5(this),this.eg=2,$4(18),d5(this)):i5(this,this.Yr-a)};g.h=o5.prototype;g.h.Mo=null;g.h.Od=null;g.h.Ym=!1;g.h.Ku=null;g.h.Bl=null;g.h.up=null;g.h.No=null;g.h.Yd=null;g.h.uf=-1;g.h.qj=null;g.h.Ni=null;g.h.connect=function(a){this.No=a;a=p5(this.g,null,this.No);$4(3);this.Ku=(0,g.D)();var b=this.g.G;null!=b?(this.qj=b[0],(this.Ni=b[1])?(this.Yd=1,q5(this)):(this.Yd=2,s5(this))):($3(a,"MODE","init"),this.Od=new U4(this,void 0,void 0,void 0),this.Od.Mg=this.Mo,X4(this.Od,a,!1,null,!0),this.Yd=0)};
g.h.RB=function(a){if(a)this.Yd=2,s5(this);else{$4(4);var b=this.g;b.Ne=b.Vf.uf;M5(b,9)}a&&this.Ae(2)};
g.h.oo=function(a){return this.g.oo(a)};
g.h.abort=function(){this.Od&&(this.Od.cancel(),this.Od=null);this.uf=-1};
g.h.Ju=function(){return!1};
g.h.ky=function(a,b){this.uf=a.rj;if(0==this.Yd)if(b){try{var c=this.l.parse(b)}catch(d){c=this.g;c.Ne=this.uf;M5(c,2);return}this.qj=c[0];this.Ni=c[1]}else c=this.g,c.Ne=this.uf,M5(c,2);else if(2==this.Yd)if(this.Ym)$4(7),this.up=(0,g.D)();else if("11111"==b){if($4(6),this.Ym=!0,this.Bl=(0,g.D)(),c=this.Bl-this.Ku,!g.ud||g.pc(10)||500>c)this.uf=200,this.Od.cancel(),$4(12),r5(this.g,this,!0)}else $4(8),this.Bl=this.up=(0,g.D)(),this.Ym=!1};
g.h.Lm=function(){this.uf=this.Od.rj;if(this.Od.Ge)0==this.Yd?this.Ni?(this.Yd=1,q5(this)):(this.Yd=2,s5(this)):2==this.Yd&&((!g.ud||g.pc(10)?!this.Ym:200>this.up-this.Bl)?($4(11),r5(this.g,this,!1)):($4(12),r5(this.g,this,!0)));else{0==this.Yd?$4(9):2==this.Yd&&$4(10);var a=this.g;a.Ne=this.uf;M5(a,2)}};
g.h.sk=function(){return this.g.sk()};
g.h.isActive=function(){return this.g.isActive()};
g.h.Ae=function(a){this.g.Ae(a)};g.h=t5.prototype;g.h.aj=null;g.h.wd=null;g.h.Qb=null;g.h.Lo=null;g.h.Fl=null;g.h.lt=null;g.h.Nl=null;g.h.dk=0;g.h.TH=0;g.h.Tc=null;g.h.Zf=null;g.h.hf=null;g.h.Gg=null;g.h.Vf=null;g.h.An=null;g.h.Xh=-1;g.h.vv=-1;g.h.Ne=-1;g.h.Hh=0;g.h.Ah=0;g.h.Fg=8;var N5=new g.Bf;g.B(u5,g.cf);g.B(v5,g.cf);g.B(w5,g.cf);g.h=t5.prototype;g.h.connect=function(a,b,c,d,e){$4(0);this.Lo=b;this.aj=c||{};d&&g.t(e)&&(this.aj.OSID=d,this.aj.OAID=e);this.C?(j5((0,g.z)(this.Kt,this,a),100),C5(this)):this.Kt(a)};
g.h.Kt=function(a){this.Vf=new o5(this);this.Vf.Mo=null;this.Vf.l=this.B;this.Vf.connect(a)};
g.h.Ju=function(){return 0==this.g};
g.h.qy=function(a){this.Zf=null;H5(this,a)};
g.h.oy=function(){this.hf=null;this.Qb=new U4(this,this.o,"rpc",this.F);this.Qb.Mg=null;this.Qb.Oo=0;var a=this.lt.clone();g.Em(a,"RID","rpc");g.Em(a,"SID",this.o);g.Em(a,"CI",this.An?"0":"1");g.Em(a,"AID",this.Xh);y5(this,a);if(!g.ud||g.pc(10))g.Em(a,"TYPE","xmlhttp"),X4(this.Qb,a,!0,this.Nl,!1);else{g.Em(a,"TYPE","html");var b=this.Qb,c=!!this.Nl;b.Mh=3;b.dg=Z3(a.clone());h5(b,c)}};
g.h.ky=function(a,b){if(0!=this.g&&(this.Qb==a||this.wd==a))if(this.Ne=a.rj,this.wd==a&&3==this.g)if(7<this.Fg){try{var c=this.B.parse(b)}catch(f){c=null}if(g.za(c)&&3==c.length)if(0==c[0])a:{if(!this.hf){if(this.Qb)if(this.Qb.xi+3E3<this.wd.xi)D5(this),this.Qb.cancel(),this.Qb=null;else break a;K5(this);$4(19)}}else this.vv=c[1],0<this.vv-this.Xh&&37500>c[2]&&this.An&&0==this.Ah&&!this.Gg&&(this.Gg=j5((0,g.z)(this.vI,this),6E3));else M5(this,11)}else b!=Mqa.vO.g&&M5(this,11);else if(this.Qb==a&&
D5(this),!g.ob(b)){c=this.B.parse(b);g.za(c);for(var d=0;d<c.length;d++){var e=c[d];this.Xh=e[0];e=e[1];2==this.g?"c"==e[0]?(this.o=e[1],this.Nl=e[2],e=e[3],null!=e?this.Fg=e:this.Fg=6,this.g=3,this.Tc&&this.Tc.Bt(),this.lt=p5(this,this.sk()?this.Nl:null,this.Lo),I5(this)):"stop"==e[0]&&M5(this,7):3==this.g&&("stop"==e[0]?M5(this,7):"noop"!=e[0]&&this.Tc&&this.Tc.At(e),this.Ah=0)}}};
g.h.vI=function(){null!=this.Gg&&(this.Gg=null,this.Qb.cancel(),this.Qb=null,K5(this),$4(20))};
g.h.Lm=function(a){if(this.Qb==a){D5(this);this.Qb=null;var b=2}else if(this.wd==a)this.wd=null,b=1;else return;this.Ne=a.rj;if(0!=this.g)if(a.Ge)1==b?(b=(0,g.D)()-a.xi,N5.dispatchEvent(new v5(N5,a.lh?a.lh.length:0,b,this.Hh)),B5(this),this.A.length=0):I5(this);else{var c=a.eg,d;if(!(d=3==c||7==c||0==c&&0<this.Ne)){if(d=1==b)this.wd||this.Zf||1==this.g||2<=this.Hh?d=!1:(this.Zf=j5((0,g.z)(this.qy,this,a),J5(this,this.Hh)),this.Hh++,d=!0);d=!(d||2==b&&K5(this))}if(d)switch(c){case 1:M5(this,5);break;
case 4:M5(this,10);break;case 3:M5(this,6);break;case 7:M5(this,12);break;default:M5(this,2)}}};
g.h.fC=function(a){if(!g.Ra(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.VM=function(a){a?$4(2):($4(1),L5(this,8))};
g.h.oo=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new k4;a.Z=!1;return a};
g.h.isActive=function(){return!!this.Tc&&this.Tc.isActive(this)};
g.h.Ae=function(a){N5.dispatchEvent(new w5(N5,a))};
g.h.sk=function(){return!(!g.ud||g.pc(10))};
g.h=O5.prototype;g.h.Bt=function(){};
g.h.At=function(){};
g.h.zt=function(){};
g.h.co=function(){};
g.h.ru=function(){return{}};
g.h.isActive=function(){return!0};g.B(P5,g.G);g.h=P5.prototype;g.h.CL=function(){this.Vc=Math.min(3E5,2*this.Vc);this.o();this.l&&this.start()};
g.h.start=function(){var a=this.Vc+15E3*Math.random();g.Kn(this.g,a);this.l=(0,g.D)()+a};
g.h.stop=function(){this.g.stop();this.l=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.Vc=5E3};g.B(Q5,O5);g.h=Q5.prototype;g.h.subscribe=function(a,b,c){return this.o.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.o.unsubscribe(a,b,c)};
g.h.Bc=function(a){return this.o.Bc(a)};
g.h.P=function(a,b){return this.o.P.apply(this.o,arguments)};
g.h.dispose=function(){this.J||(this.J=!0,g.af(this.o),R5(this),g.af(this.l),this.l=null)};
g.h.ea=function(){return this.J};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.H="";this.l.stop();this.B=a||null;this.A=b||0;a=this.L+"/test";b=this.L+"/bind";var d=new t5(c?c.firstTestResults:null,c?c.secondTestResults:null,this.O),e=this.g;e&&(e.Tc=null);d.Tc=this;this.g=d;e?this.g.connect(a,b,this.C,e.o,e.Xh):c?this.g.connect(a,b,this.C,c.sessionId,c.arrayId):this.g.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.dc(c,b);this.l.isActive()||2==(this.g?this.g.g:0)?this.F.push(c):S5(this)&&E5(this.g,c)};
g.h.Bt=function(){this.l.reset();this.B=null;this.A=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)E5(this.g,a[b])}this.P("handlerOpened")};
g.h.zt=function(a){var b=2==a&&401==this.g.Ne;4==a||b||this.l.start();this.P("handlerError",a)};
g.h.co=function(a){if(!this.l.isActive())this.P("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.F.push(d)}};
g.h.ru=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.G&&(a.ui=""+this.G);this.B&&g.dc(a,this.B);return a};
g.h.At=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),A5(this.g)):this.P("handlerMessage",new dqa(a[0],a[1]))};
g.h.sN=function(){this.l.isActive();var a=this.g,b=0;a.Qb&&b++;a.wd&&b++;0!=b||this.connect(this.B,this.A)};T5.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
T5.prototype.o=function(a,b){a(Error("Request error: "+b.status))};
T5.prototype.B=function(a){a(Error("request timed out"))};var jqa=(0,g.D)(),Y5=null,b6=Array(50),a6=-1,c6=!1;g.B(d6,g.N);d6.prototype.Jd=function(){return this.g};
d6.prototype.contains=function(a){return!!x4(this.g,a)};
d6.prototype.get=function(a){return a?y4(this.g,a):null};
d6.prototype.info=function(a){$5(this.F,a)};g.B(f6,g.N);var k8=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=f6.prototype;g.h.start=function(){!this.g&&(0,window.isNaN)(this.Fa)&&this.DA()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);(0,window.isNaN)(this.Fa)||(g.sp(this.Fa),this.Fa=window.NaN)};
g.h.U=function(){this.stop();f6.za.U.call(this)};
g.h.DA=function(){this.Fa=window.NaN;this.g=g.Hp(U5(this.C,"/pairing/get_screen"),{method:"POST",qb:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.z)(this.uN,this),onError:(0,g.z)(this.tN,this),pd:(0,g.z)(this.vN,this)})};
g.h.uN=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.o;c.name=this.A;this.P("pairingComplete",new q4(c))};
g.h.tN=function(a){this.g=null;a.status&&404==a.status?this.l>=k8.length?this.P("pairingFailed",Error("DIAL polling timed out")):(a=k8[this.l],this.Fa=g.qp((0,g.z)(this.DA,this),a),this.l++):this.P("pairingFailed",Error("Server error "+a.status))};
g.h.vN=function(){this.g=null;this.P("pairingFailed",Error("Server not responding"))};g.B(h6,d6);g.h=h6.prototype;g.h.start=function(){g6(this)&&this.P("screenChange");!g.rs("yt-remote-lounge-token-expiration")&&i6(this);g.sp(this.l);this.l=g.qp((0,g.z)(this.start,this),1E4)};
g.h.add=function(a,b){g6(this);e6(this,a);j6(this,!1);this.P("screenChange");b(a);a.token||i6(this)};
g.h.remove=function(a,b){var c=g6(this);lqa(this,a)&&(j6(this,!1),c=!0);b(a);c&&this.P("screenChange")};
g.h.wn=function(a,b,c,d){var e=g6(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,j6(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.P("screenChange")};
g.h.U=function(){g.sp(this.l);h6.za.U.call(this)};
g.h.GC=function(a){g6(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}j6(this,!b);b&&$5(this.F,"Missed "+b+" lounge tokens.")};
g.h.FC=function(a){$5(this.F,"Requesting lounge tokens failed: "+a)};g.B(l6,g.N);g.h=l6.prototype;g.h.start=function(){var a=(0,window.parseInt)(g.rs("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.D)()-144E5<a?0:a)?o6(this):(this.A=(0,g.D)()+3E5,g.qs("yt-remote-fast-check-period",this.A),this.lr())};
g.h.isEmpty=function(){return g.Wb(this.g)};
g.h.update=function(){k6("Updating availability on schedule.");var a=this.C(),b=g.Ib(this.g,function(b,d){return b&&!!y4(a,d)},this);
n6(this,b)};
g.h.U=function(){g.sp(this.o);this.o=window.NaN;this.l&&(this.l.abort(),this.l=null);l6.za.U.call(this)};
g.h.lr=function(){g.sp(this.o);this.o=window.NaN;this.l&&this.l.abort();var a=p6(this);if(g.Mb(a)){var b=U5(this.B,"/pairing/get_screen_availability");this.l=V5(this.B,b,{lounge_token:g.Pb(a).join(",")},(0,g.z)(this.jL,this,a),(0,g.z)(this.iL,this))}else n6(this,{}),o6(this)};
g.h.jL=function(a,b){this.l=null;var c=g.Pb(p6(this));if(g.ib(c,g.Pb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;n6(this,d);o6(this)}else this.Hb("Changing Screen set during request."),this.lr()};
g.h.iL=function(a){this.Hb("Screen availability failed: "+a);this.l=null;o6(this)};
g.h.Hb=function(a){$5("OnlineScreenService",a)};g.B(q6,d6);g.h=q6.prototype;g.h.start=function(){this.o.start();this.l.start();this.g.length&&(this.P("screenChange"),this.l.isEmpty()||this.P("onlineScreenChange"))};
g.h.add=function(a,b,c){this.o.add(a,b,c)};
g.h.remove=function(a,b,c){this.o.remove(a,b,c);this.l.update()};
g.h.wn=function(a,b,c,d){this.o.contains(a)?this.o.wn(a,b,c,d):(a="Updating name of unknown screen: "+a.name,$5(this.F,a),d(Error(a)))};
g.h.Jd=function(a){return a?this.g:g.Xa(this.g,(0,g.Gd)(this.A,function(a){return!this.contains(a)},this))};
g.h.EA=function(){return(0,g.Gd)(this.Jd(!0),function(a){return!!this.l.g[a.id]},this)};
g.h.FA=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new f6(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(a){g.af(f);d(r6(this,a))},this));
f.subscribe("pairingFailed",function(a){g.af(f);e(a)});
f.start();return(0,g.z)(f.stop,f)};
g.h.xN=function(a,b,c,d){g.Hp(U5(this.C,"/pairing/get_screen"),{method:"POST",qb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.z)(function(a,d){var e=new q4(d.screen||{});if(!e.name||t6(this,e.name)){a:{var f=e.name;for(var m=2,n=b(f,m);t6(this,n);){m++;if(20<m)break a;n=b(f,m)}f=n}e.name=f}c(r6(this,e))},this),
onError:(0,g.z)(function(a){d(Error("pairing request failed: "+a.status))},this),
pd:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.h.U=function(){g.af(this.o);g.af(this.l);q6.za.U.call(this)};
g.h.QC=function(){u6(this);this.P("screenChange");this.l.update()};
q6.prototype.dispose=q6.prototype.dispose;g.B(w6,g.N);g.h=w6.prototype;g.h.Mm=function(a){this.o=a;this.P("sessionScreen",this.o)};
g.h.Md=function(a){this.ea()||(a&&x6(this,""+a),this.o=null,this.P("sessionScreen",null))};
g.h.info=function(a){$5(this.O,a)};
g.h.HA=function(){return null};
g.h.wr=function(a){var b=this.l;a?(b.displayStatus=new window.chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;window.chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){x6(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.U=function(){this.wr("");w6.za.U.call(this)};g.B(z6,w6);g.h=z6.prototype;g.h.vr=function(a){if(this.g){if(this.g==a)return;x6(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.C);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.g=a;this.g.addUpdateListener(this.C);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);pqa(this)};
g.h.Yh=function(a){this.info("launchWithParams no-op for Cast: "+g.ug(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.z)(function(){this.Md()},this),(0,g.z)(function(){this.Md(Error("Failed to stop receiver app."))},this)):this.Md(Error("Stopping cast device witout session."))};
g.h.wr=g.wa;g.h.U=function(){this.info("disposeInternal");g.sp(this.A);this.A=0;this.g&&(this.g.removeUpdateListener(this.C),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.g=null;z6.za.U.call(this)};
g.h.fM=function(a,b){if(!this.ea())if(b){var c=g.Vn(b);if(g.Ca(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.ug(c));switch(d){case "mdxSessionStatus":y6(this,c.screenId);break;default:x6(this,"Unknown youtube message: "+d)}}else x6(this,"Unable to parse message.")}else x6(this,"No data in message.")};
g.h.Bu=function(a,b,c,d){s6(this.H,this.l.label,a,this.l.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(x6(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.qp((0,g.z)(this.Bu,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.HA=function(){return this.g};
g.h.yN=function(a){this.ea()||a||(x6(this,"Cast session died."),this.Md())};g.B(A6,w6);g.h=A6.prototype;g.h.vr=function(a){this.A=a;this.A.addUpdateListener(this.L)};
g.h.Yh=function(a){this.B=a;this.F()};
g.h.stop=function(){this.g();this.g=g.wa;g.sp(this.C);this.A?this.A.stop((0,g.z)(this.Md,this,null),(0,g.z)(this.Md,this,"Failed to stop DIAL device.")):this.Md()};
g.h.U=function(){this.g();this.g=g.wa;g.sp(this.C);this.A&&this.A.removeUpdateListener(this.L);this.A=null;A6.za.U.call(this)};
g.h.BN=function(a){this.ea()||a||(x6(this,"DIAL session died."),this.g(),this.g=g.wa,this.Md())};
g.h.bp=function(a){this.J=w4();if(this.B){var b=new window.chrome.cast.DialLaunchResponse(!0,C6(this));a(b);B6(this)}else this.F=(0,g.z)(function(){g.sp(this.C);this.F=g.wa;this.C=window.NaN;var b=new window.chrome.cast.DialLaunchResponse(!0,C6(this));a(b);B6(this)},this),this.C=g.qp((0,g.z)(function(){this.F()},this),100)};
g.h.mD=function(a,b,c){s6(this.H,this.G.receiver.label,a,this.l.friendlyName,(0,g.z)(function(a){a&&a.token?(this.Mm(a),b(new window.chrome.cast.DialLaunchResponse(!1))):this.bp(b,c)},this),(0,g.z)(function(a){x6(this,"Failed to get DIAL screen: "+a);
this.bp(b,c)},this))};g.B(D6,w6);D6.prototype.stop=function(){this.Md()};
D6.prototype.vr=g.wa;D6.prototype.Yh=function(){g.sp(this.g);this.g=window.NaN;var a=y4(this.H.Jd(),this.l.label);a?this.Mm(a):this.Md(Error("No such screen"))};
D6.prototype.U=function(){g.sp(this.g);this.g=window.NaN;D6.za.U.call(this)};g.B(E6,g.N);g.h=E6.prototype;
g.h.init=function(a,b){window.chrome.cast.timeout.requestSession=3E4;var c=new window.chrome.cast.SessionRequest(this.F);this.G||(c.dialRequest=new window.chrome.cast.DialRequest("YouTube"));var d=window.chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?window.chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:window.chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new window.chrome.cast.ApiConfig(c,(0,g.z)(this.my,this),(0,g.z)(this.TK,this),d,e);c.customDialLaunchCallback=(0,g.z)(this.ZI,this);window.chrome.cast.initialize(c,
(0,g.z)(function(){this.ea()||(window.chrome.cast.addReceiverActionListener(this.A),gqa(),this.l.subscribe("onlineScreenChange",(0,g.z)(this.GA,this)),this.o=J6(this),window.chrome.cast.setCustomReceivers(this.o,g.wa,(0,g.z)(function(a){this.Hb("Failed to set initial custom receivers: "+g.ug(a))},this)),this.P("yt-remote-cast2-availability-change",H6(this)),b(!0))},this),(0,g.z)(function(a){this.Hb("Failed to initialize API: "+g.ug(a));
b(!1)},this))};
g.h.LM=function(a,b){G6("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.o;if(!a||c&&c.id!=a)G6("Unsetting old screen status: "+this.g.l.friendlyName),I6(this,null)}if(a&&b){if(!this.g){c=y4(this.l.Jd(),a);if(!c){G6("setConnectedScreenStatus: Unknown screen.");return}var d=F6(this,c);d||(G6("setConnectedScreenStatus: Connected receiver not custom..."),d=new window.chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=window.chrome.cast.ReceiverType.CUSTOM,this.o.push(d),
window.chrome.cast.setCustomReceivers(this.o,g.wa,(0,g.z)(function(a){this.Hb("Failed to set initial custom receivers: "+g.ug(a))},this)));
G6("setConnectedScreenStatus: new active receiver: "+d.friendlyName);I6(this,new D6(this.l,d),!0)}this.g.wr(b)}else G6("setConnectedScreenStatus: no screen.")};
g.h.MM=function(a){this.ea()?this.Hb("Setting connection data on disposed cast v2"):this.g?this.g.Yh(a):this.Hb("Setting connection data without a session")};
g.h.AN=function(){this.ea()?this.Hb("Stopping session on disposed cast v2"):this.g?(this.g.stop(),I6(this,null)):G6("Stopping non-existing session")};
g.h.requestSession=function(){window.chrome.cast.requestSession((0,g.z)(this.my,this),(0,g.z)(this.oL,this))};
g.h.U=function(){this.l.unsubscribe("onlineScreenChange",(0,g.z)(this.GA,this));window.chrome&&window.chrome.cast&&window.chrome.cast.removeReceiverActionListener(this.A);g.Va(g.y("yt.mdx.remote.debug.handlers_")||[],W5);g.af(this.g);E6.za.U.call(this)};
g.h.Hb=function(a){$5("Controller",a)};
g.h.ny=function(a,b){this.g==a&&(b||I6(this,null),this.P("yt-remote-cast2-session-change",b))};
g.h.PK=function(a,b){if(!this.ea())if(a)switch(a.friendlyName=window.chrome.cast.unescape(a.friendlyName),G6("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case window.chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.l.label!=a.label)G6("onReceiverAction_: Stopping active receiver: "+this.g.l.friendlyName),this.g.stop();else{G6("onReceiverAction_: Casting to active receiver.");this.g.o&&this.P("yt-remote-cast2-session-change",this.g.o);break}switch(a.receiverType){case window.chrome.cast.ReceiverType.CUSTOM:I6(this,
new D6(this.l,a));break;case window.chrome.cast.ReceiverType.DIAL:I6(this,new A6(this.l,a,this.C));break;case window.chrome.cast.ReceiverType.CAST:I6(this,new z6(this.l,a));break;default:this.Hb("Unknown receiver type: "+a.receiverType)}break;case window.chrome.cast.ReceiverAction.STOP:this.g&&this.g.l.label==a.label?this.g.stop():this.Hb("Stopping receiver w/o session: "+a.friendlyName)}else this.Hb("onReceiverAction_ called without receiver.")};
g.h.ZI=function(a){if(this.ea())return window.Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=window.chrome.cast.ReceiverType.DIAL&&(this.Hb("Not DIAL receiver: "+b.friendlyName),b.receiverType=window.chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.l:null;if(!c||c.label!=b.label)return this.Hb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),window.Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=window.chrome.cast.ReceiverType.DIAL){if(this.g.o)return G6("Reselecting dial screen."),
this.P("yt-remote-cast2-session-change",this.g.o),window.Promise.resolve(new window.chrome.cast.DialLaunchResponse(!1));this.Hb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);I6(this,new A6(this.l,b,this.C))}b=this.g;b.G=a;return b.G.appState==window.chrome.cast.DialAppState.RUNNING?new window.Promise((0,g.z)(b.mD,b,(b.G.extraData||{}).screenId||null)):new window.Promise((0,g.z)(b.bp,b))};
g.h.my=function(a){if(!this.ea()){G6("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=window.chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==window.chrome.cast.ReceiverType.CAST)G6("Got resumed cast session before resumed mdx connection."),b.friendlyName=window.chrome.cast.unescape(b.friendlyName),I6(this,new z6(this.l,b),!0);else{this.Hb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.l,d=y4(this.l.Jd(),c.label);
d&&r4(d,b.label)&&c.receiverType!=window.chrome.cast.ReceiverType.CAST&&b.receiverType==window.chrome.cast.ReceiverType.CAST&&(G6("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.af(this.g),this.g=new z6(this.l,b),this.g.subscribe("sessionScreen",(0,g.z)(this.ny,this,this.g)),this.g.Yh(null));this.g.vr(a)}}};
g.h.zN=function(){return this.g?this.g.HA():null};
g.h.oL=function(a){this.ea()||(this.Hb("Failed to estabilish a session: "+g.ug(a)),a.code!=window.chrome.cast.ErrorCode.CANCEL&&I6(this,null))};
g.h.TK=function(a){G6("Receiver availability updated: "+a);if(!this.ea()){var b=H6(this);this.B=a==window.chrome.cast.ReceiverAvailability.AVAILABLE;H6(this)!=b&&this.P("yt-remote-cast2-availability-change",H6(this))}};
g.h.GA=function(){this.ea()||(this.o=J6(this),G6("Updating custom receivers: "+g.ug(this.o)),window.chrome.cast.setCustomReceivers(this.o,g.wa,(0,g.z)(function(){this.Hb("Failed to set custom receivers.")},this)),this.P("yt-remote-cast2-availability-change",H6(this)))};
E6.prototype.setLaunchParams=E6.prototype.MM;E6.prototype.setConnectedScreenStatus=E6.prototype.LM;E6.prototype.stopSession=E6.prototype.AN;E6.prototype.getCastSession=E6.prototype.zN;E6.prototype.requestSession=E6.prototype.requestSession;E6.prototype.init=E6.prototype.init;E6.prototype.dispose=E6.prototype.dispose;var S6=[];$6.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";a7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.g=a.trackData,this.Pe=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.C=a.playerTimeAt,this.A=a.seekableStart,this.l=a.seekableEnd,this.G=a.duration,this.H=a.loadedTime,this.o=a.liveIngestionTime,this.B=
!(0,window.isNaN)(this.o))};
$6.prototype.isAdPlaying=function(){return 1081==this.playerState};
$6.prototype.clone=function(){return new $6(f7(this))};g.B(i7,g.N);g.h=i7.prototype;g.h.play=function(){1==this.g?(this.l?this.l.play(null,g.wa,q7(this,"play")):o7(this,"play"),n7(this,1,d7(j7(this))),this.P("remotePlayerChange")):l7(this,this.play)};
g.h.pause=function(){1==this.g?(this.l?this.l.pause(null,g.wa,q7(this,"pause")):o7(this,"pause"),n7(this,2,d7(j7(this))),this.P("remotePlayerChange")):l7(this,this.pause)};
g.h.CA=function(a){if(1==this.g){if(this.l){var b=j7(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.l.seek(c,g.wa,q7(this,"seekTo",{newTime:a}))}else o7(this,"seekTo",{newTime:a});n7(this,3,a);this.P("remotePlayerChange")}else l7(this,g.Ia(this.CA,a))};
g.h.stop=function(){if(1==this.g){this.l?this.l.stop(null,g.wa,q7(this,"stopVideo")):o7(this,"stopVideo");var a=j7(this);a.index=-1;a.videoId="";a7(a);m7(this,a);this.P("remotePlayerChange")}else l7(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=j7(this);if(this.o){if(c.volume!=a){var d=Math.round(a)/100;this.o.setReceiverVolumeLevel(d,(0,g.z)(function(){$5("CP","set receiver volume: "+d)},this),(0,g.z)(function(){this.Hb("failed to set receiver volume.")},this))}c.muted!=b&&this.o.setReceiverMuted(b,(0,g.z)(function(){$5("CP","set receiver muted: "+b)},this),(0,g.z)(function(){this.Hb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);o7(this,"setVolume",e)}c.muted=b;c.volume=a;m7(this,c)}else l7(this,g.Ia(this.setVolume,a,b))};
g.h.Bz=function(a,b){if(1==this.g){var c=j7(this),d={videoId:a};b&&(c.g={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.ug(b.style),g.dc(d,c.g));o7(this,"setSubtitlesTrack",d);m7(this,c)}else l7(this,g.Ia(this.Bz,a,b))};
g.h.ds=function(a,b){if(1==this.g){o7(this,"setAudioTrack",{videoId:a,audioTrackId:b.ib.id});var c=j7(this);c.audioTrackId=b.ib.id;m7(this,c)}else l7(this,g.Ia(this.ds,a,b))};
g.h.BA=function(a,b){if(1==this.g){if(a&&b){var c=j7(this);e7(c,a,b);m7(this,c)}o7(this,"previous")}else l7(this,g.Ia(this.BA,a,b))};
g.h.AA=function(a,b){if(1==this.g){if(a&&b){var c=j7(this);e7(c,a,b);m7(this,c)}o7(this,"next")}else l7(this,g.Ia(this.AA,a,b))};
g.h.Zt=function(){1==this.g?o7(this,"dismissAutoplay"):l7(this,this.Zt)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.P("proxyStateChange",a,this.g)}i7.za.dispose.call(this)};
g.h.U=function(){k7(this);this.A=null;this.B.clear();h7(this,null);i7.za.U.call(this)};
g.h.es=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.P("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,0==b.g.length&&(b.g=b.l,b.g.reverse(),b.l=[]),a.g.pop().apply(this);else 3==a&&this.dispose()}};
g.h.LK=function(a,b){this.P(a,b)};
g.h.BI=function(a){if(!a)this.ek(null),h7(this,null);else if(this.o.receiver.volume){a=this.o.receiver.volume;var b=j7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)$5("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,m7(this,b)}};
g.h.ek=function(a){$5("CP","Cast media: "+!!a);this.l&&this.l.removeUpdateListener(this.G);if(this.l=a)this.l.addUpdateListener(this.G),p7(this),this.P("remotePlayerChange")};
g.h.AI=function(a){a?(p7(this),this.P("remotePlayerChange")):this.ek(null)};
g.h.QI=function(){var a=W6();a&&h7(this,a)};
g.h.Hb=function(a){$5("CP",a)};g.B(r7,g.N);g.h=r7.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.t(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.t(k)&&(l.currentIndex=k);c&&(this.Qa.listId=c);this.Qa.videoId=d;this.Qa.index=k||0;this.Qa.state=3;c7(this.Qa,m);this.A="UNSUPPORTED";s7("Connecting with setPlaylist and params: "+g.ug(l));this.g.connect({method:"setPlaylist",params:g.ug(l)},
a,E4())}else s7("Connecting without params"),this.g.connect({},a,E4());wqa(this)};
g.h.dispose=function(){this.ea()||(this.P("beforeDispose"),t7(this,3));r7.za.dispose.call(this)};
g.h.U=function(){u7(this);w7(this);v7(this);g.sp(this.H);this.H=window.NaN;g.sp(this.J);this.J=window.NaN;this.o=null;g.Fq(this.R);this.R.length=0;this.g.dispose();r7.za.U.call(this);this.A=this.F=this.l=this.Qa=this.g=null};
g.h.zC=function(){this.C(2)};
g.h.GI=function(){s7("Channel opened");this.T&&(this.T=!1,v7(this),this.O=g.qp((0,g.z)(function(){s7("Timing out waiting for a screen.");this.C(1)},this),15E3));
Tpa(eqa(this.g),this.Y)};
g.h.CI=function(){s7("Channel closed");(0,window.isNaN)(this.B)?H4(!0):H4();this.dispose()};
g.h.DI=function(a){H4();(0,window.isNaN)(this.G())?(s7("Channel error: "+a+" without reconnection"),this.dispose()):(this.T=!0,s7("Channel error: "+a+" with reconnection in "+this.G()+" ms"),t7(this,2))};
g.h.FI=function(a){a.params?s7("Received: action="+a.action+", params="+g.ug(a.params)):s7("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=g.Vn(a.params.devices);this.l=(0,g.E)(a,function(a){return new p4(a)});
a=!!g.Oa(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
z7(this,a);break;case "loungeScreenDisconnected":g.Wa(this.l,function(a){return"LOUNGE_SCREEN"==a.type});
z7(this,!1);break;case "remoteConnected":var b=new p4(g.Vn(a.params.device));g.Oa(this.l,function(a){return b?a.id==b.id:!1})||g.Ta(this.l,b);
break;case "remoteDisconnected":b=new p4(g.Vn(a.params.device));g.Wa(this.l,function(a){return b?a.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":A7(this,a);break;case "nowPlaying":zqa(this,a);break;case "onStateChange":B7(this,a);break;case "onAdStateChange":Aqa(this,a);break;case "onVolumeChanged":Bqa(this,a);break;case "onSubtitlesTrackChanged":yqa(this,a);break;case "nowAutoplaying":Cqa(this,a);break;case "autoplayDismissed":this.P("autoplayDismissed");break;case "autoplayUpNext":this.F=a.params.videoId||null;this.P("autoplayUpNext",this.F);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.P("autoplayModeChange",this.A);"DISABLED"==this.A&&this.P("autoplayDismissed");break;case "onHasPreviousNextChanged":Dqa(this,a);break;case "requestAssistedSignIn":this.P("assistedSignInRequested",a.params.authCode);break;default:s7("Unrecognized action: "+a.action)}};
g.h.AM=function(){if(this.o){var a=this.o;this.o=null;this.Qa.videoId!=a&&x7(this,"getNowPlaying")}};
r7.prototype.subscribe=r7.prototype.subscribe;r7.prototype.unsubscribeByKey=r7.prototype.Bc;r7.prototype.ga=function(){var a=3;this.ea()||(a=0,(0,window.isNaN)(this.G())?S5(this.g)&&(0,window.isNaN)(this.B)&&(a=1):a=2);return a};
r7.prototype.getProxyState=r7.prototype.ga;r7.prototype.C=function(a){s7("Disconnecting with "+a);u7(this);this.P("beforeDisconnect",a);1==a&&H4();R5(this.g,a);this.dispose()};
r7.prototype.disconnect=r7.prototype.C;r7.prototype.ba=function(){var a=this.Qa;this.o&&(a=this.Qa.clone(),e7(a,this.o,a.index));return f7(a)};
r7.prototype.getPlayerContextData=r7.prototype.ba;
r7.prototype.oa=function(a){var b=new $6(a);b.videoId&&b.videoId!=this.Qa.videoId&&(this.o=b.videoId,g.sp(this.H),this.H=g.qp((0,g.z)(this.AM,this),5E3));var c=[];this.Qa.listId==b.listId&&this.Qa.videoId==b.videoId&&this.Qa.index==b.index||c.push("remoteQueueChange");this.Qa.playerState==b.playerState&&this.Qa.volume==b.volume&&this.Qa.muted==b.muted&&d7(this.Qa)==d7(b)&&g.ug(this.Qa.g)==g.ug(b.g)||c.push("remotePlayerChange");this.Qa.reset(a);(0,g.C)(c,function(a){this.P(a)},this)};
r7.prototype.setPlayerContextData=r7.prototype.oa;r7.prototype.Z=function(){var a=this.g.C.id,b=g.Oa(this.l,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
r7.prototype.getOtherConnectedRemoteId=r7.prototype.Z;r7.prototype.G=function(){var a=this.g;return a.l.isActive()?a.l.l-(0,g.D)():window.NaN};
r7.prototype.getReconnectTimeout=r7.prototype.G;r7.prototype.X=function(){return this.A||"UNSUPPORTED"};
r7.prototype.getAutoplayMode=r7.prototype.X;r7.prototype.da=function(){return this.F||""};
r7.prototype.getAutoplayVideoId=r7.prototype.da;r7.prototype.sa=function(){if(!(0,window.isNaN)(this.G())){var a=this.g.l;g.Ln(a.g);a.start()}};
r7.prototype.reconnect=r7.prototype.sa;r7.prototype.ia=function(a,b){x7(this,a,b);y7(this)};
r7.prototype.sendMessage=r7.prototype.ia;g.B(C7,d6);g.h=C7.prototype;g.h.Jd=function(a){return this.Jc.$_gs(a)};
g.h.contains=function(a){return!!this.Jc.$_c(a)};
g.h.get=function(a){return this.Jc.$_g(a)};
g.h.start=function(){this.Jc.$_st()};
g.h.add=function(a,b,c){this.Jc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Jc.$_r(a,b,c)};
g.h.wn=function(a,b,c,d){this.Jc.$_un(a,b,c,d)};
g.h.U=function(){for(var a=0,b=this.l.length;a<b;++a)this.Jc.$_ubk(this.l[a]);this.l.length=0;this.Jc=null;C7.za.U.call(this)};
g.h.wN=function(){this.P("screenChange")};
g.h.oK=function(){this.P("onlineScreenChange")};
q6.prototype.$_st=q6.prototype.start;q6.prototype.$_gspc=q6.prototype.xN;q6.prototype.$_gsppc=q6.prototype.FA;q6.prototype.$_c=q6.prototype.contains;q6.prototype.$_g=q6.prototype.get;q6.prototype.$_a=q6.prototype.add;q6.prototype.$_un=q6.prototype.wn;q6.prototype.$_r=q6.prototype.remove;q6.prototype.$_gs=q6.prototype.Jd;q6.prototype.$_gos=q6.prototype.EA;q6.prototype.$_s=q6.prototype.subscribe;q6.prototype.$_ubk=q6.prototype.Bc;var D7=null,E7=null,U7=null,I7=[];g.r(X7,g.G);g.h=X7.prototype;
g.h.U=function(){g.G.prototype.U.call(this);this.A.stop();this.C.stop();this.L.stop();this.T();this.g.unsubscribe("proxyStateChange",this.jy,this);this.g.unsubscribe("remotePlayerChange",this.gk,this);this.g.unsubscribe("remoteQueueChange",this.Nm,this);this.g.unsubscribe("autoplayUpNext",this.Lx,this);this.g.unsubscribe("previousNextChange",this.gy,this);this.g.unsubscribe("nowAutoplaying",this.ay,this);this.g.unsubscribe("autoplayDismissed",this.Kx,this);this.g=this.B=null};
g.h.Bw=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(a8(this)){if(!j7(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==j7(this.g).playerState?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.J.nj(c[0],c[1]);break;case "control_subtitles_set_track":b8(this,c[0]);break;case "control_set_audio_track":c=c[0],a8(this)&&this.g.ds(this.l.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.l.xa();c8(this,0==c?void 0:c);break;case "control_seek":c8(this,c[0]);break;case "control_subtitles_set_track":b8(this,c[0]);break;case "control_set_audio_track":c=c[0],a8(this)&&this.g.ds(this.l.getVideoData(1).videoId,c)}};
g.h.zI=function(a){this.L.wC(a)};
g.h.dN=function(a){this.Bw("control_subtitles_set_track",g.Wb(a)?null:a)};
g.h.Oz=function(){var a=this.l.Ub("captions","track");g.Wb(a)||b8(this,a)};
g.h.Xx=function(a){if(a8(this)){this.g.unsubscribe("remotePlayerChange",this.gk,this);var b=Math.round(a.volume);a=!!a.muted;var c=j7(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.O.start();this.g.subscribe("remotePlayerChange",this.gk,this)}};
g.h.GJ=function(){g.Wb(this.F)||d8(this,this.F);this.G=!1};
g.h.jy=function(a,b){this.C.stop();2==b&&this.Mz()};
g.h.gk=function(){if(a8(this)){this.A.stop();var a=j7(this.g);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.G=1;break;case 1082:case 1083:this.B.G=0;break;default:this.B.G=-1}switch(a.playerState){case 1081:case 1:Z7(this,new g.mB(8));this.Lz();break;case 1085:case 3:Z7(this,new g.mB(9));break;case 1083:case 0:Z7(this,new g.mB(2));this.J.stop();Y7(this,this.l.getVideoData().lengthSeconds);break;case 1084:Z7(this,new g.mB(4));break;case 2:Z7(this,new g.mB(4));Y7(this,d7(a));
break;case -1:Z7(this,new g.mB(64));break;case -1E3:Z7(this,new g.mB(128,{errorCode:"mdx.remoteerror",message:"This video is not available for remote playback."}))}a=j7(this.g).g;var b=this.F;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.F=a,d8(this,a));a=j7(this.g);-1==a.volume||Math.round(this.l.Jb())==a.volume&&this.l.isMuted()==a.muted||this.O.isActive()||this.oA()}else $7(this)};
g.h.gy=function(){this.l.P("mdxpreviousnextchange")};
g.h.Nm=function(){a8(this)||$7(this)};
g.h.QB=function(){this.g.Zt()};
g.h.Lx=function(a){a&&(a=g.Hp("/watch_queue_ajax",{method:"GET",Cc:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.z)(this.NL,this)}))&&(this.T=(0,g.z)(a.abort,a))};
g.h.NL=function(a,b){var c=new g.aA(g.V(this.l),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.l.P("mdxautoplayupnext",c)};
g.h.ay=function(a){(0,window.isNaN)(a)||this.l.P("mdxnowautoplaying",a)};
g.h.Kx=function(){this.l.P("mdxautoplaycanceled")};
g.h.lG=function(a,b){-1==j7(this.g).playerState?c8(this,a):b&&this.g.CA(a)};
g.h.oA=function(){if(a8(this)){var a=j7(this.g);this.o.Pa(this.R);a.muted?this.l.mute():this.l.We();this.l.setVolume(a.volume);this.R=this.o.M(this.l,"onVolumeChange",this.Xx)}};
g.h.Lz=function(){this.A.stop();if(!this.g.ea()){var a=j7(this.g);1==a.playerState&&Z7(this,new g.mB(8));Y7(this,d7(a));this.A.start()}};
g.h.Mz=function(){this.C.stop();this.A.stop();var a=this.g.A.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.C.start()};g.r(g8,g.P);g8.prototype.A=function(a){f8(this,a.state)};g.r(h8,g.GR);h8.prototype.J=function(){var a=this.l.Ub("remote","receivers");a&&1<a.length&&!this.l.Ub("remote","quickCast")?(this.G=g.kb(a,this.B,this),g.HR(this,(0,g.E)(a,this.B)),a=this.l.Ub("remote","currentReceiver"),this.ze(this.B(a)),this.enable(!0)):this.enable(!1)};
h8.prototype.B=function(a){return a.key};
h8.prototype.ye=function(a){return"cast-selector-receiver"==a?"Cast...":this.G[a].name};
h8.prototype.Xc=function(a){g.GR.prototype.Xc.call(this,a);this.l.ld("remote","currentReceiver",this.G[a]);this.A.ub()};g.r(i8,g.II);g.h=i8.prototype;g.h.create=function(){Iqa(g.by(g.V(this.player)));this.B.push(g.fr("yt-remote-before-disconnect",this.wI,this));this.B.push(g.fr("yt-remote-connection-change",this.UK,this));this.B.push(g.fr("yt-remote-receiver-availability-change",this.hy,this));this.B.push(g.fr("yt-remote-auto-connect",this.SK,this));this.B.push(g.fr("yt-remote-receiver-resumed",this.RK,this));this.hy()};
g.h.load=function(){this.player.Wp();g.II.prototype.load.call(this);this.A=new X7(this,this.player,this.g);var a=(a=W7())?a.currentTime:0;var b=T7()?new i7(O7(),void 0):null;0==a&&b&&(a=d7(j7(b)));0!=a&&(this.C=a||0,this.player.P("progresssync",a,void 0));e8(this,this.F,this.F);g.lV(this.player.app,6)};
g.h.unload=function(){this.player.P("mdxautoplaycanceled");this.o=this.l;g.bf(this.A,this.g);this.g=this.A=null;g.II.prototype.unload.call(this);g.lV(this.player.app,5)};
g.h.U=function(){g.gr(this.B);g.II.prototype.U.call(this)};
g.h.Uj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.A.Bw.apply(this.A,[a].concat(g.ea(c)))};
g.h.tC=function(){return this.loaded?this.A.suggestion:null};
g.h.Pe=function(){return this.g?j7(this.g).Pe:!1};
g.h.hasNext=function(){return this.g?j7(this.g).hasNext:!1};
g.h.bG=function(){var a=j7(this.g),b=this.player.getVideoData();return{allowSeeking:g.R(g.V(this.player).experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.ac():!a.isAdPlaying()&&this.player.ac(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.C,displayedStart:-1,duration:a.B?a.G+b7(a):a.G,ingestionTime:a.B?a.o+b7(a):a.o,isPeggedToLive:1>=(a.B?a.l+b7(a):a.l)-this.C,loaded:a.H,seekableEnd:a.B?a.l+b7(a):a.l,seekableStart:0<a.A?a.A+b7(a):a.A}};
g.h.cG=function(){this.g&&this.g.AA()};
g.h.dG=function(){this.g&&this.g.BA()};
g.h.wI=function(a){1==a&&(this.J=this.g?j7(this.g):null)};
g.h.UK=function(){var a=T7()?new i7(O7(),void 0):null;if(a){var b=this.o;this.loaded&&this.unload();this.g=a;this.J=null;b.key!=this.l.key&&(this.o=b,this.load())}else g.af(this.g),this.g=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.player.getVideoData().videoId&&this.player.ew(a.videoId,d7(a)));this.player.P("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.hy=function(){this.H=[this.l].concat(Jqa());var a=P7()||this.l;j8(this,a);this.player.na("onMdxReceiversChange")};
g.h.SK=function(){var a=P7();j8(this,a)};
g.h.RK=function(){this.o=P7()};
g.h.aG=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.H;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?Y6():j8(this,b)),this.loaded?this.o:this.l;case "quickCast":return 2==this.H.length&&"cast-selector-receiver"==this.H[1].key?(b&&Y6(),!0):!1}};
g.h.eG=function(){o7(this.g,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Xb=function(){return!1};g.RP.remote=i8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:13:45 Dec 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:38:55 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 289.177
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.055
  cdx.remote: 0.06
  esindex: 0.008
  LoadShardBlock: 186.269 (3)
  PetaboxLoader3.datanode: 199.456 (4)
  load_resource: 109.939
  PetaboxLoader3.resolve: 37.52
*/