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

(function(g){var window=this;var vza=function(a,b){return g.Lb(a,b)},$5=function(a,b,c){a.A.set(b,c)},a6=function(a){$5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.E)()).toString(36));
return a},b6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.jn(a.A,b,c)},wza=function(a,b){var c=[];
g.nk(b,function(d){try{var e=g.io.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.ho(e)&&c.push(d)},a);
return c},xza=function(a,b){var c=wza(a,b);
(0,g.y)(c,function(d){g.io.prototype.remove.call(this,d)},a)},yza=function(a){if(a.Zc){if(a.Zc.locationOverrideToken)return{locationOverrideToken:a.Zc.locationOverrideToken};
if(null!=a.Zc.latitudeE7&&null!=a.Zc.longitudeE7)return{latitudeE7:a.Zc.latitudeE7,longitudeE7:a.Zc.longitudeE7}}return null},zza=function(a,b){g.gb(a,b)||a.push(b)},c6=function(a){var b=0,c;
for(c in a)b++;return b},Aza=function(a,b){var c=b instanceof g.zc?b:g.Ec(b,/^data:image\//i.test(b));
a.src=g.Ac(c)},d6=function(){},Bza=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Cza=function(a){if(a.Sd&&"function"==typeof a.Sd)return a.Sd();
if("string"===typeof a)return a.split("");if(g.Oa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Hb(a)},Dza=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Oa(a)||"string"===typeof a)(0,g.y)(a,b,void 0);else{if(a.df&&"function"==typeof a.df)var c=a.df();else if(a.Sd&&"function"==typeof a.Sd)c=void 0;else if(g.Oa(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Ib(a);d=Cza(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},Eza=function(a,b,c,d){var e=new g.Xm(null,void 0);
a&&g.Ym(e,a);b&&g.Zm(e,b);c&&g.$m(e,c);d&&(e.u=d);return e},e6=function(a,b){g.Qo[a]=!0;
var c=g.Oo();c&&c.publish.apply(c,arguments);g.Qo[a]=!1},f6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Um;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Fza(this,a.capabilities||""),Gza(this,a.experiments||""))},Fza=function(a,b){a.capabilities.clear();
(0,g.Ce)(b.split(","),g.Ta(vza,Hza)).forEach(function(c){a.capabilities.add(c)})},Gza=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},g6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},h6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},Iza=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Jza=function(a){return new g6(a)},Kza=function(a){return Array.isArray(a)?(0,g.Kc)(a,Jza):[]},i6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},j6=function(a){return Array.isArray(a)?"["+(0,g.Kc)(a,i6).join(",")+"]":"null"},k6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|
0;
return("x"==a?b:b&3|8).toString(16)})},Lza=function(a){return(0,g.Kc)(a,function(b){return{key:b.id,
name:b.name}})},l6=function(a,b){return g.db(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},m6=function(a,b){return g.db(a,function(c){return h6(c,b)})},Mza=function(){var a=(0,g.Xs)();
a&&xza(a,a.o.Vh(!0))},n6=function(){var a=g.$s("yt-remote-connected-devices")||[];
g.xb(a);return a},Nza=function(a){if(g.ib(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.Kc)(a,function(d,e){return 0==e?d:d.substring(c.length)})},Oza=function(a){g.Zs("yt-remote-connected-devices",a,86400)},p6=function(){if(o6)return o6;
var a=g.$s("yt-remote-device-id");a||(a=k6(),g.Zs("yt-remote-device-id",a,31536E3));for(var b=n6(),c=1,d=a;g.gb(b,d);)c++,d=a+"#"+c;return o6=d},q6=function(){var a=n6(),b=p6();
g.gb(a,b);g.bt()&&g.zb(a,b);a=Nza(a);if(g.ib(a))try{g.Bq.remove("remote_sid","/","youtube.com")}catch(c){}else try{g.Cq("remote_sid",a.join(","),-1)}catch(c){}},Pza=function(){return g.$s("yt-remote-session-browser-channel")},Qza=function(){return g.$s("yt-remote-local-screens")||[]},Rza=function(){g.Zs("yt-remote-lounge-token-expiration",!0,86400)},Sza=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.Kc)(Qza(),function(d){return d.loungeToken}),c=(0,g.Kc)(a,function(d){return d.loungeToken});
(0,g.Ai)(c,function(d){return!g.gb(b,d)})&&Rza();
g.Zs("yt-remote-local-screens",a,31536E3)},Tza=function(a,b){g.Zs("yt-remote-session-browser-channel",a);
g.Zs("yt-remote-session-screen-id",b);var c=n6(),d=p6();g.gb(c,d)||c.push(d);Oza(c);q6()},r6=function(a){a||(g.at("yt-remote-session-screen-id"),g.at("yt-remote-session-video-id"));
q6();a=n6();g.lb(a,p6());Oza(a)},Uza=function(){if(!s6){var a=g.oo();
a&&(s6=new g.bo(a))}return s6?!!s6.get("yt-remote-use-staging-server"):!1},Vza=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},Wza=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},t6=function(a){a.length?Xza(a.shift(),function(){t6(a)}):u6()},Yza=function(a){return"chrome-extension://"+a+"/cast_sender.js"},Xza=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},u6=function(){var a=Wza();
a&&a(!1,"No cast extension found")},$za=function(){if(Zza){var a=2,b=Wza(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Xza("//web.archive.org/web/20200801012131/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",u6,c)}},aAa=function(){$za();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);t6(["//web.archive.org/web/20200801012131/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20200801012131/https://www.gstatic.com/eureka/clank/cast_sender.js"])},v6=function(a,b,c){g.B.call(this);
this.F=null!=c?(0,g.x)(a,c):a;this.Kd=b;this.C=(0,g.x)(this.VG,this);this.o=!1;this.u=0;this.A=this.Ka=null;this.B=[]},w6=function(a,b,c){g.B.call(this);
this.B=null!=c?a.bind(c):a;this.Kd=b;this.A=null;this.o=!1;this.u=0;this.Ka=null},x6=function(a){a.Ka=g.cg(function(){a.Ka=null;
a.o&&!a.u&&(a.o=!1,x6(a))},a.Kd);
var b=a.A;a.A=null;a.B.apply(null,b)},y6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return Bza(a)},z6=function(){},A6=function(){},bAa=function(){},dAa=function(a){return(a=cAa(a))?new ActiveXObject(a):new XMLHttpRequest},cAa=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},B6=function(a,b,c,d){this.o=a;
this.A=b;this.I=c;this.G=d||1;this.C=45E3;this.B=new g.A1(this);this.u=new g.bg;this.u.setInterval(250)},fAa=function(a,b,c){a.Tl=1;
a.Yh=a6(b.clone());a.pk=c;a.F=!0;eAa(a,null)},C6=function(a,b,c,d,e){a.Tl=1;
a.Yh=a6(b.clone());a.pk=null;a.F=c;e&&(a.ED=!1);eAa(a,d)},eAa=function(a,b){a.Ol=(0,g.E)();
D6(a);a.Vi=a.Yh.clone();b6(a.Vi,"t",a.G);a.Ao=0;a.bd=a.o.Gt(a.o.ko()?b:null);0<a.ou&&(a.Hr=new w6((0,g.x)(a.EE,a,a.bd),a.ou));a.B.na(a.bd,"readystatechange",a.BO);var c=a.Gj?g.Sb(a.Gj):{};a.pk?(a.As="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.bd.send(a.Vi,a.As,a.pk,c)):(a.As="GET",a.ED&&!g.re&&(c.Connection="close"),a.bd.send(a.Vi,a.As,null,c));a.o.Sf(1)},iAa=function(a,b,c){for(var d=!0;!a.mj&&a.Ao<c.length;){var e=gAa(a,c);
if(e==E6){4==b&&(a.ni=4,F6(15),d=!1);break}else if(e==hAa){a.ni=4;F6(16);d=!1;break}else G6(a,e)}4==b&&0==c.length&&(a.ni=1,F6(17),d=!1);a.cg=a.cg&&d;d||(H6(a),I6(a))},gAa=function(a,b){var c=a.Ao,d=b.indexOf("\n",c);
if(-1==d)return E6;c=Number(b.substring(c,d));if(isNaN(c))return hAa;d+=1;if(d+c>b.length)return E6;var e=b.substr(d,c);a.Ao=d+c;return e},kAa=function(a,b){a.Ol=(0,g.E)();
D6(a);var c=b?window.location.hostname:"";a.Vi=a.Yh.clone();$5(a.Vi,"DOMAIN",c);$5(a.Vi,"t",a.G);try{a.hg=new ActiveXObject("htmlfile")}catch(n){H6(a);a.ni=7;F6(22);I6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{var l=h;if(l in J6)h=J6[l];else if(l in jAa)h=J6[l]=jAa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)h=l;else{if(256>m){if(h="\\x",16>m||256<m)h+="0"}else h="\\u",4096>m&&(h+="0");h+=m.toString(16).toUpperCase()}h=
J6[l]=h}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.cd(g.cc("b/12014412"),d+"</body></html>");a.hg.open();a.hg.write(g.Yc(c));a.hg.close();a.hg.parentWindow.m=(0,g.x)(a.TN,a);a.hg.parentWindow.d=(0,g.x)(a.IC,a,!0);a.hg.parentWindow.rpcClose=(0,g.x)(a.IC,a,!1);c=a.hg.createElement("DIV");a.hg.parentWindow.document.body.appendChild(c);d=g.Dc(a.Vi.toString());d=g.kd(g.Ac(d));d=g.cd(g.cc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.dd(c,d);a.o.Sf(1)},D6=function(a){a.ix=(0,g.E)()+a.C;
lAa(a,a.C)},lAa=function(a,b){if(null!=a.cm)throw Error("WatchDog timer not null");
a.cm=K6((0,g.x)(a.bO,a),b)},L6=function(a){a.cm&&(g.v.clearTimeout(a.cm),a.cm=null)},I6=function(a){a.o.Lz()||a.mj||a.o.Xp(a)},H6=function(a){L6(a);
g.Oe(a.Hr);a.Hr=null;a.u.stop();g.eua(a.B);if(a.bd){var b=a.bd;a.bd=null;b.abort();b.dispose()}a.hg&&(a.hg=null)},G6=function(a,b){try{a.o.zC(a,b),a.o.Sf(4)}catch(c){}},nAa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;mAa(a,b,function(h){h?c(!0):g.v.setTimeout(function(){nAa(a,b,c,d,f)},f)})}},mAa=function(a,b,c){var d=new Image;
d.onload=function(){try{M6(d),c(!0)}catch(e){}};
d.onerror=function(){try{M6(d),c(!1)}catch(e){}};
d.onabort=function(){try{M6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{M6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
Aza(d,a)},M6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},oAa=function(a){this.o=a;
this.u=new z6},pAa=function(a){var b=N6(a.o,a.om,"/mail/images/cleardot.gif");
a6(b);nAa(b.toString(),5E3,(0,g.x)(a.RF,a),3,2E3);a.Sf(1)},P6=function(a){var b=a.o.M;
if(null!=b)F6(5),b?(F6(11),O6(a.o,a,!1)):(F6(12),O6(a.o,a,!0));else if(a.se=new B6(a,void 0,void 0,void 0),a.se.Gj=a.mu,b=a.o,b=N6(b,b.ko()?a.Tm:null,a.nu),F6(5),!g.pe||g.Ud(10))b6(b,"TYPE","xmlhttp"),C6(a.se,b,!1,a.Tm,!1);else{b6(b,"TYPE","html");var c=a.se;a=!!a.Tm;c.Tl=3;c.Yh=a6(b.clone());kAa(c,a)}},Q6=function(a){g.rf.call(this);
this.headers=new g.Um;this.U=a||null;this.A=!1;this.T=this.o=null;this.fa=this.M="";this.F=0;this.B="";this.C=this.ba=this.I=this.Z=!1;this.G=0;this.N=null;this.ga="";this.R=this.aa=!1},qAa=function(a){return g.pe&&g.Td(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},rAa=function(a){return"content-type"==a.toLowerCase()},tAa=function(a,b){a.A=!1;
a.o&&(a.C=!0,a.o.abort(),a.C=!1);a.B=b;a.F=5;sAa(a);R6(a)},sAa=function(a){a.Z||(a.Z=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},vAa=function(a){if(a.A&&"undefined"!=typeof g.F1)if(a.T[1]&&4==S6(a)&&2==a.getStatus())T6(a,"Local request error detected and ignored");
else if(a.I&&4==S6(a))g.cg(a.vC,0,a);else if(a.dispatchEvent("readystatechange"),4==S6(a)){T6(a,"Request complete");a.A=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.ud(1,String(a.M));if(!f&&g.v.self&&g.v.self.location){var h=g.v.self.location.protocol;f=h.substr(0,h.length-1)}e=!uAa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.F=6;try{var l=2<S6(a)?a.o.statusText:""}catch(m){l=""}a.B=l+" ["+a.getStatus()+"]";sAa(a)}}finally{R6(a)}}},R6=function(a,b){if(a.o){wAa(a);
var c=a.o,d=a.T[0]?g.La:null;a.o=null;a.T=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},wAa=function(a){a.o&&a.R&&(a.o.ontimeout=null);
a.N&&(g.v.clearTimeout(a.N),a.N=null)},S6=function(a){return a.o?a.o.readyState:0},U6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},T6=function(a,b){return b+" ["+a.fa+" "+a.M+" "+a.getStatus()+"]"},V6=function(a,b,c){this.o=1;
this.u=[];this.B=[];this.C=new z6;this.I=a||null;this.M=null!=b?b:null;this.F=c||!1},xAa=function(a,b){this.o=a;
this.map=b;this.context=null},yAa=function(a){g.Qe.call(this,"statevent",a)},zAa=function(a,b){g.Qe.call(this,"timingevent",a);
this.size=b},AAa=function(a){g.Qe.call(this,"serverreachability",a)},DAa=function(a){BAa(a);
if(3==a.o){var b=a.En++,c=a.Gp.clone();$5(c,"SID",a.A);$5(c,"RID",b);$5(c,"TYPE","terminate");W6(a,c);b=new B6(a,a.A,b,void 0);b.Tl=2;b.Yh=a6(c.clone());Aza(new Image,b.Yh.toString());b.Ol=(0,g.E)();D6(b)}CAa(a)},EAa=function(a){a.sG(1,0);
a.Gp=N6(a,null,a.lu);X6(a)},BAa=function(a){a.bi&&(a.bi.abort(),a.bi=null);
a.Ec&&(a.Ec.cancel(),a.Ec=null);a.Zg&&(g.v.clearTimeout(a.Zg),a.Zg=null);Y6(a);a.ie&&(a.ie.cancel(),a.ie=null);a.gi&&(g.v.clearTimeout(a.gi),a.gi=null)},FAa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new xAa(a.DK++,b));2!=a.o&&3!=a.o||X6(a)},X6=function(a){a.ie||a.gi||(a.gi=K6((0,g.x)(a.HC,a),0),a.Uk=0)},HAa=function(a,b){if(1==a.o){if(!b){a.En=Math.floor(1E5*Math.random());
var c=a.En++,d=new B6(a,"",c,void 0);d.Gj=null;var e=Z6(a),f=a.Gp.clone();$5(f,"RID",c);$5(f,"CVER","1");W6(a,f);fAa(d,f,e);a.ie=d;a.o=2}}else 3==a.o&&(b?GAa(a,b):0==a.u.length||a.ie||GAa(a))},GAa=function(a,b){if(b)if(6<a.nj){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.En-1;var d=Z6(a)}else c=b.I,d=b.pk;else c=a.En++,d=Z6(a);var e=a.Gp.clone();$5(e,"SID",a.A);$5(e,"RID",c);$5(e,"AID",a.ql);W6(a,e);c=new B6(a,a.A,c,a.Uk+1);c.Gj=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ie=c;fAa(c,e,d)},W6=function(a,b){if(a.Hd){var c=a.Hd.jz();
c&&g.Bb(c,function(d,e){$5(b,e,d)})}},Z6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.nj&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,h=a.u[e].map;f=6>=a.nj?e:f-d;try{g.Bb(h,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},IAa=function(a){a.Ec||a.Zg||(a.G=1,a.Zg=K6((0,g.x)(a.GC,a),0),a.Gk=0)},$6=function(a){if(a.Ec||a.Zg||3<=a.Gk)return!1;
a.G++;a.Zg=K6((0,g.x)(a.GC,a),JAa(a,a.Gk));a.Gk++;return!0},O6=function(a,b,c){a.ys=c;
a.sg=b.qh;a.F||EAa(a)},Y6=function(a){null!=a.rj&&(g.v.clearTimeout(a.rj),a.rj=null)},JAa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},a7=function(a,b){if(2==b||9==b){var c=null;
a.Hd&&(c=null);var d=(0,g.x)(a.lP,a);c||(c=new g.Xm("//web.archive.org/web/20200801012131/https://www.google.com/images/cleardot.gif"),a6(c));mAa(c.toString(),1E4,d)}else F6(2);KAa(a,b)},KAa=function(a,b){a.o=0;
a.Hd&&a.Hd.zy(b);CAa(a);BAa(a)},CAa=function(a){a.o=0;
a.sg=-1;if(a.Hd)if(0==a.B.length&&0==a.u.length)a.Hd.qt();else{g.pb(a.B);var b=g.pb(a.u);a.B.length=0;a.u.length=0;a.Hd.qt(b)}},N6=function(a,b,c){var d=g.en(c);
if(""!=d.o)b&&g.Zm(d,b+"."+d.o),g.$m(d,d.B);else{var e=window.location;d=Eza(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Im&&g.Bb(a.Im,function(f,h){$5(d,h,f)});
$5(d,"VER",a.nj);W6(a,d);return d},K6=function(a,b){if(!g.Pa(a))throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},F6=function(a){b7.dispatchEvent(new yAa(b7,a))},LAa=function(){},MAa=function(){this.o=[];
this.u=[]},NAa=function(a,b){this.action=a;
this.params=b||{}},c7=function(a,b){g.B.call(this);
this.o=new g.H(this.MN,0,this);g.C(this,this.o);this.Kd=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.x)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.A=a},d7=function(a,b,c){this.N=a;
this.F=b;this.A=new g.ao;this.u=new c7(this.OO,this);this.o=null;this.Nb=!1;this.C=null;this.M="";this.I=this.B=0;this.G=[];this.R=c||!1},OAa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.ys,sessionId:a.o.A,arrayId:a.o.ql}},PAa=function(a,b){a.I=b||0;
a.u.stop();a.o&&(3==a.o.o&&HAa(a.o),DAa(a.o));a.I=0},e7=function(a){return!!a.o&&3==a.o.o},QAa=function(a,b){(a.F.loungeIdToken=b)||a.u.stop()},f7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.ud(4,a))||"";b&&(this.port=":"+b);this.domain=g.vd(a)||"";a=g.Qc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.wc(a,"10.0")&&(this.u=!1))},g7=function(a,b){var c=a.o;
a.u&&(c="https://"+a.domain+a.port+a.o);return g.Fd(c+b,{})},h7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ta(a.B,d,!0),onError:g.Ta(a.A,e),Re:g.Ta(a.C,e)};c&&(a.Eb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.vq(b,a)},UAa=function(){var a=RAa;
SAa();i7.push(a);TAa(i7)},j7=function(a,b){SAa();
var c=i7,d=VAa(a,String(b));g.ib(c)?WAa(d):(TAa(c),(0,g.y)(c,function(e){e(d)}))},SAa=function(){i7||(i7=g.Ka("yt.mdx.remote.debug.handlers_")||[],g.Ia("yt.mdx.remote.debug.handlers_",i7,void 0))},WAa=function(a){var b=(k7+1)%50;
k7=b;l7[b]=a;m7||(m7=49==b)},TAa=function(a){var b=l7;
if(b[0]){var c=k7,d=m7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.y)(a,function(f){f(e)})}while(d!=c);
l7=Array(50);k7=-1;m7=!1}},VAa=function(a,b){var c=((0,g.E)()-XAa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},n7=function(a){g.N.call(this);
this.F=a;this.screens=[]},YAa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0},ZAa=function(a,b){var c=a.screens.length!=b.length;
a.screens=(0,g.Ce)(a.screens,function(f){return!!l6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=YAa(a,b[d])||c;return c},$Aa=function(a,b){var c=a.screens.length;
a.screens=(0,g.Ce)(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},o7=function(a,b,c,d){g.N.call(this);
this.F=a;this.C=b;this.A=c;this.B=d;this.u=0;this.o=null;this.Ka=NaN},q7=function(a){n7.call(this,"LocalScreenService");
this.u=a;this.o=NaN;p7(this);this.info("Initializing with "+j6(this.screens))},aBa=function(a){if(a.screens.length){var b=(0,g.Kc)(a.screens,function(d){return d.id}),c=g7(a.u,"/pairing/get_lounge_token_batch");
h7(a.u,c,{screen_ids:b.join(",")},(0,g.x)(a.eH,a),(0,g.x)(a.dH,a))}},p7=function(a){var b=Kza(Qza());
b=(0,g.Ce)(b,function(c){return!c.uuid});
return ZAa(a,b)},r7=function(a,b){Sza((0,g.Kc)(a.screens,Iza));
b&&Rza()},t7=function(a,b){g.N.call(this);
this.F=b;var c=g.$s("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.F(),f=0,h=e.length;f<h;++f){var l=e[f].id;d[l]=g.gb(c,l)}this.o=d;this.C=a;this.A=this.B=NaN;this.u=null;s7("Initialized with "+g.Pk(this.o))},bBa=function(a,b,c){var d=g7(a.C,"/pairing/get_screen_availability");
h7(a.C,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},u7=function(a,b){a:if(c6(b)!=c6(a.o))var c=!1;
else{c=g.Ib(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(s7("Updated online screens: "+g.Pk(a.o)),a.o=b,a.S("screenChange"));cBa(a)},v7=function(a){isNaN(a.A)||g.No(a.A);
a.A=g.Lo((0,g.x)(a.hw,a),0<a.B&&a.B<(0,g.E)()?2E4:1E4)},s7=function(a){j7("OnlineScreenService",a)},dBa=function(a){var b={};
(0,g.y)(a.F(),function(c){c.token?b[c.token]=c.id:this.qc("Requesting availability of screen w/o lounge token.")});
return b},cBa=function(a){a=g.Ib(g.Cb(a.o,function(b){return b}));
g.xb(a);a.length?g.Zs("yt-remote-online-screen-ids",a.join(","),60):g.at("yt-remote-online-screen-ids")},w7=function(a){n7.call(this,"ScreenService");
this.C=a;this.o=this.u=null;this.A=[];this.B={};eBa(this)},gBa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var h=a.Ie();if(h=(c?m6(h,c):null)||m6(h,b)){h.uuid=b;var l=x7(a,h);bBa(a.o,l,function(m){e(m?l:null)})}else c?fBa(a,c,(0,g.x)(function(m){var n=x7(this,new g6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));bBa(this.o,n,function(q){e(q?n:null)})},a),f):e(null)},hBa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},fBa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Eb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){var l=h&&h.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.vq(g7(a.C,"/pairing/get_lounge_token_batch"),e)},iBa=function(a){a.screens=a.u.Ie();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+j6(a.screens))},eBa=function(a){y7(a);
a.u=new q7(a.C);a.u.subscribe("screenChange",(0,g.x)(a.lH,a));iBa(a);a.A=Kza(g.$s("yt-remote-automatic-screen-cache")||[]);y7(a);a.info("Initializing automatic screens: "+j6(a.A));a.o=new t7(a.C,(0,g.x)(a.Ie,a,!0));a.o.subscribe("screenChange",(0,g.x)(function(){this.S("onlineScreenChange")},a))},x7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=m6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.Zs("yt-remote-automatic-screen-cache",(0,g.Kc)(a.A,Iza)));y7(a);a.B[b.uuid]=b.id;g.Zs("yt-remote-device-id-map",a.B,31536E3);return b},y7=function(a){a.B=g.$s("yt-remote-device-id-map")||{}},z7=function(a,b,c){g.N.call(this);
this.T=c;this.M=a;this.o=b;this.I=null},A7=function(a,b){j7(a.T,b)},B7=function(a,b){z7.call(this,a,b,"CastSession");
this.u=null;this.A=0;this.C=(0,g.x)(this.PP,this);this.B=(0,g.x)(this.iO,this);this.A=g.Lo((0,g.x)(function(){jBa(this,null)},this),12E4)},kBa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Pk(void 0));
var b={type:"getMdxSessionStatus"};a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.La,(0,g.x)(function(){A7(this,"Failed to send message: getMdxSessionStatus.")},a)):A7(a,"Sending yt message without session: "+g.Pk(b))},jBa=function(a,b){g.No(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.getScreen()||a.getScreen().id!=b){var c=(0,g.x)(a.wr,a),d=(0,g.x)(a.Qe,a);a.Ez(b,c,d,5)}}else a.Qe(Error("Waiting for session status timed out."))},C7=function(a,b,c){z7.call(this,a,b,"DialSession");
this.A=this.G=null;this.N="";this.U=c;this.B=null;this.F=g.La;this.C=NaN;this.R=(0,g.x)(this.SP,this);this.u=g.La},lBa=function(a){a.u=a.M.KE(a.N,a.o.label,a.o.friendlyName,(0,g.x)(function(b){this.u=g.La;
this.wr(b)},a),(0,g.x)(function(b){this.u=g.La;
this.Qe(b)},a))},mBa=function(a){var b={};
b.pairingCode=a.N;b.theme=a.U;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}Uza()&&(b.env_useStageMdx=1);return g.Dd(b)},D7=function(a,b){z7.call(this,a,b,"ManualSession");
this.u=g.Lo((0,g.x)(this.rl,this,null),150)},E7=function(a,b,c,d){g.N.call(this);
this.u=a;this.G=b||"233637DE";this.F=c||"cl";this.I=d||!1;this.o=null;this.C=!1;this.A=[];this.B=(0,g.x)(this.bN,this)},nBa=function(a,b){return b?g.db(a.A,function(c){return h6(b,c.label)},a):null},F7=function(a){j7("Controller",a)},RAa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G7=function(a){return a.C||!!a.A.length||!!a.o},H7=function(a,b,c){b!=a.o&&(g.Oe(a.o),(a.o=b)?(c?a.S("yt-remote-cast2-receiver-resumed",b.o):a.S("yt-remote-cast2-receiver-selected",
b.o),b.subscribe("sessionScreen",(0,g.x)(a.EC,a,b)),b.getScreen()?a.S("yt-remote-cast2-session-change",b.getScreen()):c&&a.o.rl(null)):a.S("yt-remote-cast2-session-change",null))},oBa=function(a){var b=a.u.JE(),c=a.o&&a.o.o;
a=(0,g.Kc)(b,function(d){c&&h6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=nBa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},uBa=function(a,b,c,d,e,f,h){pBa()?qBa(b,e,f,h)&&(J7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?rBa(a,c):(window.__onGCastApiAvailable=function(l,m){l?rBa(a,c):(K7("Failed to load cast API: "+m),L7(!1),J7(!1),g.at("yt-remote-cast-available"),g.at("yt-remote-cast-receiver"),sBa(),c(!1))},d?g.Xo("https://web.archive.org/web/20200801012131/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?aAa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?u6():($za(),t6(tBa.map(Yza))))):I7("Cannot initialize because not running Chrome")},sBa=function(){I7("dispose");
var a=M7();a&&a.dispose();g.Ia("yt.mdx.remote.cloudview.instance_",null,void 0);vBa(!1);g.To(N7);N7.length=0},O7=function(){return!!g.$s("yt-remote-cast-installed")},wBa=function(){var a=g.$s("yt-remote-cast-receiver");
return a?a.friendlyName:null},xBa=function(){I7("clearCurrentReceiver");
g.at("yt-remote-cast-receiver")},yBa=function(){return O7()?M7()?M7().getCastSession():(K7("getCastSelector: Cast is not initialized."),null):(K7("getCastSelector: Cast API is not installed!"),null)},Q7=function(){O7()?M7()?P7()?(I7("Requesting cast selector."),M7().requestSession()):(I7("Wait for cast API to be ready to request the session."),N7.push(g.So("yt-remote-cast2-api-ready",Q7))):K7("requestCastSelector: Cast is not initialized."):K7("requestCastSelector: Cast API is not installed!")},R7=
function(a,b){P7()?M7().setConnectedScreenStatus(a,b):K7("setConnectedScreenStatus called before ready.")},pBa=function(){var a=0<=g.Qc.search(/ (CrMo|Chrome|CriOS)\//);
return g.Rw||a},zBa=function(a,b){M7().init(a,b)},qBa=function(a,b,c,d){var e=!1;
M7()||(a=new E7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.Zs("yt-remote-cast-available",f);e6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){I7("onReceiverSelected: "+f.friendlyName);
g.Zs("yt-remote-cast-receiver",f);e6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){I7("onReceiverResumed: "+f.friendlyName);
g.Zs("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){I7("onSessionChange: "+i6(f));
f||g.at("yt-remote-cast-receiver");e6("yt-remote-cast2-session-change",f)}),g.Ia("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
I7("cloudview.createSingleton_: "+e);return e},M7=function(){return g.Ka("yt.mdx.remote.cloudview.instance_")},rBa=function(a,b){L7(!0);
J7(!1);zBa(a,function(c){c?(vBa(!0),g.Uo("yt-remote-cast2-api-ready")):(K7("Failed to initialize cast API."),L7(!1),g.at("yt-remote-cast-available"),g.at("yt-remote-cast-receiver"),sBa());b(c)})},I7=function(a){j7("cloudview",a)},K7=function(a){j7("cloudview",a)},L7=function(a){I7("setCastInstalled_ "+a);
g.Zs("yt-remote-cast-installed",a)},P7=function(){return!!g.Ka("yt.mdx.remote.cloudview.apiReady_")},vBa=function(a){I7("setApiReady_ "+a);
g.Ia("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J7=function(a){g.Ia("yt.mdx.remote.cloudview.initializing_",a,void 0)},S7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.F=this.G=0;this.o=null;this.hasNext=this.tg=!1;this.M=this.I=this.u=this.C=0;this.B=NaN;this.A=!1;this.reset(a)},T7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.tg=!1;a.hasNext=!1;a.G=0;a.F=(0,g.E)();a.C=0;a.u=0;a.I=0;a.M=0;a.B=NaN;a.A=!1},U7=function(a){return a.sb()?((0,g.E)()-a.F)/1E3:0},V7=function(a,b){a.G=b;
a.F=(0,g.E)()},W7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.E)()-a.F)/1E3+a.G;
case -1E3:return 0}return a.G},X7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T7(a)},Y7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Tb(a.o);b.hasPrevious=a.tg;b.hasNext=a.hasNext;b.playerTime=a.G;b.playerTimeAt=a.F;b.seekableStart=a.C;b.seekableEnd=a.u;b.duration=a.I;b.loadedTime=a.M;b.liveIngestionTime=a.B;return b},$7=function(a,b){g.N.call(this);
this.o=0;this.B=a;this.F=[];this.C=new MAa;this.A=this.u=null;this.M=(0,g.x)(this.lL,this);this.G=(0,g.x)(this.In,this);this.I=(0,g.x)(this.kL,this);this.N=(0,g.x)(this.tL,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.lx,this),ABa(this))):c=3;0!=c&&(b?this.lx(c):g.Lo((0,g.x)(function(){this.lx(c)},this),0));
var d=yBa();d&&Z7(this,d);this.subscribe("yt-remote-cast2-session-change",this.N)},a8=function(a){return new S7(a.B.getPlayerContextData())},ABa=function(a){(0,g.y)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.F.push(this.B.subscribe(b,g.Ta(this.YM,b),this))},a)},BBa=function(a){(0,g.y)(a.F,function(b){this.B.unsubscribeByKey(b)},a);
a.F.length=0},b8=function(a,b){var c=a.C;
50>c.o.length+c.u.length&&a.C.u.push(b)},d8=function(a,b,c){var d=a8(a);
V7(d,c);-1E3!=d.playerState&&(d.playerState=b);c8(a,d)},e8=function(a,b,c){a.B.sendMessage(b,c)},c8=function(a,b){BBa(a);
a.B.setPlayerContextData(Y7(b));ABa(a)},Z7=function(a,b){a.A&&(a.A.removeUpdateListener(a.M),a.A.removeMediaListener(a.G),a.In(null));
a.A=b;a.A&&(j7("CP","Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.M),a.A.addMediaListener(a.G),a.A.media.length&&a.In(a.A.media[0]))},CBa=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=a8(a);b.contentId!=d.videoId&&j7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V7(d,a.u.getEstimatedTime());c8(a,d)}else j7("CP","No cast media video. Ignoring state update.")},f8=function(a,b,c){return(0,g.x)(function(d){this.qc("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.qc("Retrying "+b+" using MDx browser channel."),e8(this,b,c))},a)},g8=function(a,b,c){g.N.call(this);
this.C=NaN;this.R=!1;this.I=this.G=this.M=this.N=NaN;this.T=[];this.B=this.F=this.A=this.gb=this.o=null;this.Z=a;this.T.push(g.hp(window,"beforeunload",(0,g.x)(this.XG,this)));this.u=[];this.gb=new S7;this.U=b.id;this.o=DBa(this,c);this.o.subscribe("handlerOpened",this.pL,this);this.o.subscribe("handlerClosed",this.mL,this);this.o.subscribe("handlerError",this.nL,this);this.o.subscribe("handlerMessage",this.oL,this);QAa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.gb.videoId;
g.bt()&&g.Zs("yt-remote-session-video-id",d)},this)},h8=function(a){j7("conn",a)},DBa=function(a,b){return new d7(g7(a.Z,"/bc"),b)},i8=function(a,b){a.S("proxyStateChange",b)},EBa=function(a){a.C=g.Lo((0,g.x)(function(){h8("Connecting timeout");
this.Pk(1)},a),2E4)},j8=function(a){g.No(a.C);
a.C=NaN},k8=function(a){g.No(a.N);
a.N=NaN},FBa=function(a){l8(a);
a.M=g.Lo((0,g.x)(function(){m8(this,"getNowPlaying")},a),2E4)},l8=function(a){g.No(a.M);
a.M=NaN},HBa=function(a,b){b&&(j8(a),k8(a));
b==(e7(a.o)&&isNaN(a.C))?b&&(i8(a,1),m8(a,"getSubtitlesTrack")):b?(a.Cz()&&a.gb.reset(),i8(a,1),m8(a,"getNowPlaying"),GBa(a)):a.Pk(1)},IBa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.gb.videoId&&(g.Ob(b.params)?a.gb.o=null:a.gb.o=b.params,a.S("remotePlayerChange"))},JBa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.gb.listId=b.params.listId||a.gb.listId;X7(a.gb,c,d);a.S("remoteQueueChange")},LBa=function(a,b){b.params=b.params||{};
JBa(a,b);KBa(a,b);a.S("autoplayDismissed")},KBa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V7(a.gb,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.gb.playerState&&(c=-1E3);a.gb.playerState=c;c=Number(b.params.loadedTime);a.gb.M=isNaN(c)?0:c;c=Number(b.params.duration);a.gb.I=isNaN(c)?0:c;c=a.gb;var d=Number(b.params.liveIngestionTime);c.B=d;c.A=isNaN(d)?!1:!0;c=a.gb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.gb.playerState?FBa(a):l8(a);a.S("remotePlayerChange")},MBa=function(a,b){if(-1E3!=
a.gb.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.gb.playerState=c;c=parseInt(b.params.currentTime,10);V7(a.gb,isNaN(c)?0:c);a.S("remotePlayerChange")}},NBa=function(a,b){var c="true"==b.params.muted;
a.gb.volume=parseInt(b.params.volume,10);a.gb.muted=c;a.S("remotePlayerChange")},OBa=function(a,b){a.F=b.params.videoId;
a.S("nowAutoplaying",parseInt(b.params.timeout,10))},PBa=function(a,b){var c="true"==b.params.hasNext;
a.gb.tg="true"==b.params.hasPrevious;a.gb.hasNext=c;a.S("previousNextChange")},GBa=function(a){g.No(a.I);
a.I=g.Lo((0,g.x)(a.Pk,a,1),864E5)},m8=function(a,b,c){c?h8("Sending: action="+b+", params="+g.Pk(c)):h8("Sending: action="+b);
a.o.sendMessage(b,c)},n8=function(a){n7.call(this,"ScreenServiceProxy");
this.Jd=a;this.o=[];this.o.push(this.Jd.$_s("screenChange",(0,g.x)(this.NP,this)));this.o.push(this.Jd.$_s("onlineScreenChange",(0,g.x)(this.BM,this)))},UBa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.K("MDX_CONFIG")||b;Mza();q6();o8||(o8=new f7(b?b.loungeApiHost:void 0),Uza()&&(o8.o="/api/loungedev"));p8||(p8=g.Ka("yt.mdx.remote.deferredProxies_")||[],g.Ia("yt.mdx.remote.deferredProxies_",p8,void 0));QBa();var c=q8();if(!c){var d=new w7(o8);g.Ia("yt.mdx.remote.screenService_",d,void 0);c=q8();var e=!1,f=void 0,h=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,h=b.theme,l=!!b.disableDial);uBa(a,d,function(m){m?r8()&&R7(r8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){e6("yt-remote-receiver-availability-change")})},e,f,h,l)}b&&!g.Ka("yt.mdx.remote.initialized_")&&(g.Ia("yt.mdx.remote.initialized_",!0,void 0),s8("Initializing: "+g.Pk(b)),t8.push(g.So("yt-remote-cast2-availability-change",function(){e6("yt-remote-receiver-availability-change")})),t8.push(g.So("yt-remote-cast2-receiver-selected",function(){u8(null);
e6("yt-remote-auto-connect","cast-selector-receiver")})),t8.push(g.So("yt-remote-cast2-receiver-resumed",function(){e6("yt-remote-receiver-resumed","cast-selector-receiver")})),t8.push(g.So("yt-remote-cast2-session-change",RBa)),t8.push(g.So("yt-remote-connection-change",function(m){m?R7(r8(),"YouTube TV"):v8()||(R7(null,null),xBa())})),a=w8(),b.isAuto&&(a.id+="#dial"),g.Bo("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(h=b.theme)&&(a.theme=h),s8(" -- with channel params: "+
g.Pk(a)),SBa(a),c.start(),r8()||TBa())},WBa=function(){var a=VBa();
O7()&&g.$s("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},VBa=function(){var a=q8().Jd.$_gos();
var b=x8();b&&y8()&&(l6(a,b)||a.push(b));return Lza(a)},z8=function(){var a=XBa();
!a&&O7()&&wBa()&&(a={key:"cast-selector-receiver",name:wBa()});return a},XBa=function(){var a=VBa(),b=x8();
b||(b=v8());return g.db(a,function(c){return b&&h6(b,c.key)?!0:!1})},x8=function(){var a=r8();
if(!a)return null;var b=q8().Ie();return m6(b,a)},RBa=function(a){s8("remote.onCastSessionChange_: "+i6(a));
if(a){var b=x8();b&&b.id==a.id?R7(b.id,"YouTube TV"):(b&&A8(),B8(a,1))}else y8()&&A8()},A8=function(){P7()?M7().stopSession():K7("stopSession called before API ready.");
var a=y8();a&&(a.disconnect(1),C8(null))},D8=function(){var a=y8();
return!!a&&3!=a.getProxyState()},s8=function(a){j7("remote",a)},q8=function(){if(!E8){var a=g.Ka("yt.mdx.remote.screenService_");
E8=a?new n8(a):null}return E8},r8=function(){return g.Ka("yt.mdx.remote.currentScreenId_")},YBa=function(a){g.Ia("yt.mdx.remote.currentScreenId_",a,void 0)},ZBa=function(){return g.Ka("yt.mdx.remote.connectData_")},u8=function(a){g.Ia("yt.mdx.remote.connectData_",a,void 0)},y8=function(){return g.Ka("yt.mdx.remote.connection_")},C8=function(a){var b=y8();
u8(null);a||YBa("");g.Ia("yt.mdx.remote.connection_",a,void 0);p8&&((0,g.y)(p8,function(c){c(a)}),p8.length=0);
b&&!a?e6("yt-remote-connection-change",!1):!b&&a&&e6("yt-remote-connection-change",!0)},v8=function(){var a=g.bt();
if(!a)return null;var b=q8();if(!b)return null;b=b.Ie();return m6(b,a)},B8=function(a,b){r8();
x8()&&x8();if(F8)G8=a;else{YBa(a.id);var c=new g8(o8,a,w8());c.connect(b,ZBa());c.subscribe("beforeDisconnect",function(d){e6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){y8()&&(y8(),C8(null))});
C8(c)}},TBa=function(){var a=v8();
a?(s8("Resume connection to: "+i6(a)),B8(a,0)):(r6(),xBa(),s8("Skipping connecting because no session screen found."))},QBa=function(){var a=w8();
if(g.Ob(a)){a=p6();var b=g.$s("yt-remote-session-name")||"",c=g.$s("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ia("yt.mdx.remote.channelParams_",a,void 0)}},w8=function(){return g.Ka("yt.mdx.remote.channelParams_")||{}},SBa=function(a){a?(g.Zs("yt-remote-session-app",a.app),g.Zs("yt-remote-session-name",a.name)):(g.at("yt-remote-session-app"),g.at("yt-remote-session-name"));
g.Ia("yt.mdx.remote.channelParams_",a,void 0)},H8=function(a,b,c){g.B.call(this);
var d=this;this.module=a;this.H=b;this.Ya=c;this.events=new g.ds(this);this.M=this.events.L(this.H,"onVolumeChange",this.fC);this.B=!1;this.suggestion=null;this.C=new g.hH(64);this.o=new g.H(this.OD,500,this);this.u=new g.H(this.PD,1E3,this);this.G=new v6(this.tP,0,this);this.A={};this.I=new g.H(this.uE,1E3,this);this.F=new w6(this.seekTo,1E3,this);this.N=g.La;g.C(this,this.events);this.events.L(b,"onCaptionsTrackListChanged",this.bM);this.events.L(b,"captionschanged",this.jL);this.events.L(b,"captionssettingschanged",
this.RD);this.events.L(b,"videoplayerreset",this.xr);this.events.L(b,"mdxautoplaycancel",function(){d.Ya.Ty()});
a=this.Ya;a.ia();a.subscribe("proxyStateChange",this.yC,this);a.subscribe("remotePlayerChange",this.Pn,this);a.subscribe("remoteQueueChange",this.xr,this);a.subscribe("previousNextChange",this.uC,this);a.subscribe("nowAutoplaying",this.qC,this);a.subscribe("autoplayDismissed",this.QB,this);g.C(this,this.o);g.C(this,this.u);g.C(this,this.G);g.C(this,this.I);g.C(this,this.F);this.RD();this.xr();this.Pn()},$Ba=function(a){a.Wb(0);
a.o.stop();a.Nc(new g.hH(64))},J8=function(a,b){if(I8(a)&&!a.B){var c=null;
b&&(c={style:a.H.getSubtitlesUserSettings()},g.Vb(c,b));a.Ya.HE(a.H.getVideoData(1).videoId,c);a.A=a8(a.Ya).o}},K8=function(a,b){var c=a.H.getPlaylist();
if(c){var d=c.index;var e=c.listId.toString()}c=a.H.getVideoData(1);a.Ya.playVideo(c.videoId,b,d,e,c.playerParams,c.hf,yza(c));a.Nc(new g.hH(1))},aCa=function(a,b){if(b){var c=a.H.getOption("captions","tracklist",{cA:1});
c&&c.length?(a.H.setOption("captions","track",b),a.B=!1):(a.H.loadModule("captions"),a.B=!0)}else a.H.setOption("captions","track",{})},I8=function(a){return a8(a.Ya).videoId===a.H.getVideoData(1).videoId},L8=function(){g.U.call(this,{D:"div",
J:"ytp-mdx-manual-pairing-popup-dialog",P:{role:"dialog"},K:[{D:"div",J:"ytp-mdx-manual-pairing-popup-dialog-inner-content",K:[{D:"div",J:"ytp-mdx-manual-pairing-popup-title",W:"Connecting to your TV on web using a code will be going away soon"},{D:"div",J:"ytp-mdx-manual-pairing-popup-buttons",K:[{D:"button",Y:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],W:"Learn more"},{D:"button",Y:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],W:"OK"}]}]}]});this.o=new g.lO(this,250);this.learnMoreButton=
this.da("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.da("ytp-mdx-manual-pairing-popup-ok");g.C(this,this.o);this.L(this.learnMoreButton,"click",this.u);this.L(this.okButton,"click",this.A)},M8=function(){g.U.call(this,{D:"div",
J:"ytp-mdx-popup-dialog",P:{role:"dialog"},K:[{D:"div",J:"ytp-mdx-popup-dialog-inner-content",K:[{D:"div",J:"ytp-mdx-popup-title",W:"You're signed out"},{D:"div",J:"ytp-mdx-popup-description",W:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",J:"ytp-mdx-privacy-popup-buttons",K:[{D:"button",Y:["ytp-button","ytp-mdx-privacy-popup-cancel"],W:"Cancel"},{D:"button",Y:["ytp-button","ytp-mdx-privacy-popup-confirm"],
W:"Confirm"}]}]}]});this.o=new g.lO(this,250);this.cancelButton=this.da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.da("ytp-mdx-privacy-popup-confirm");g.C(this,this.o);this.L(this.cancelButton,"click",this.u);this.L(this.confirmButton,"click",this.A)},N8=function(a){g.U.call(this,{D:"div",
J:"ytp-remote",K:[{D:"div",J:"ytp-remote-display-status",K:[{D:"div",J:"ytp-remote-display-status-icon",K:[g.sM()]},{D:"div",J:"ytp-remote-display-status-text",W:"{{statustext}}"}]}]});this.api=a;this.o=new g.lO(this,250);g.C(this,this.o);this.L(a,"presentingplayerstatechange",this.u);bCa(this,g.qM(a))},bCa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
c=g.T(b,128)?g.TL("Error on $RECEIVER_NAME",c):b.sb()||g.T(b,4)?g.TL("Playing on $RECEIVER_NAME",c):g.TL("Connected to $RECEIVER_NAME",c);a.ma("statustext",c);a.o.show()}else a.o.hide()},O8=function(a,b){g.FR.call(this,"Play on",0,a,b);
this.H=a;this.Ui={};this.L(a,"onMdxReceiversChange",this.B);this.L(a,"presentingplayerstatechange",this.B);this.B()},P8=function(a){g.RN.call(this,a);
this.Nf={key:k6(),name:"This computer"};this.De=null;this.subscriptions=[];this.Sv=this.Ya=null;this.Ui=[this.Nf];this.di=this.Nf;this.Sb=new g.hH(64);this.tA=0;this.jd=-1;this.ul=null;this.Qn=this.Bq=!1;this.nk=this.Kl=null;if(!g.Hy(this.player.O())){a=this.player;var b=g.dN(a);b&&(b=b.Dj())&&(b=new O8(a,b),g.C(this,b));b=new N8(a);g.C(this,b);g.DN(a,b.element,4);this.Kl=new M8;g.C(this,this.Kl);g.DN(a,this.Kl.element,4);g.P(this.player.O().experiments,"pair_servlet_deprecation_warning_enabled")&&
(this.ul=new L8,g.C(this,this.ul),g.DN(a,this.ul.element,4));this.Qn=!!v8();this.Bq=!!g.$s("yt-remote-manual-pairing-warning-shown")}},Q8=function(a){a.nk&&(a.player.removeEventListener("presentingplayerstatechange",a.nk),a.nk=null)},cCa=function(a,b,c){a.Sb=c;
a.player.S("presentingplayerstatechange",new g.qH(c,b))},dCa=function(a,b,c){var d=!1;
1===b?d=!a.Qn:2===b&&(d=!a.Bq);d&&g.sH(c,8)&&(a.player.pauseVideo(),Q8(a))},R8=function(a,b){if(b.key!==a.di.key)if(b.key===a.Nf.key)A8();
else{if(a.ul&&!a.Bq&&b!==a.Nf&&"cast-selector-receiver"!==b.key&&g.Qy(a.player.O()))eCa(a);else{var c;(c=!g.P(a.player.O().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.K("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.K("SESSION_INDEX")&&!g.K("LOGGED_IN")))||a.Qn||!a.Kl);(c?0:g.Qy(a.player.O())||g.Uy(a.player.O()))&&fCa(a)}a.di=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&
g.P(a.player.O().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.getLength();l++)h[l]=f.Ca(l).videoId}else h=[e];f=a.player.getCurrentTime(1);d={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.hf,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=yza(c))&&(d.locationInfo=c);c=d}s8("Connecting to: "+g.Pk(b));"cast-selector-receiver"==b.key?(u8(c||null),c=
c||null,P7()?M7().setLaunchParams(c):K7("setLaunchParams called before ready.")):!c&&D8()&&r8()==b.key?e6("yt-remote-connection-change",!0):(A8(),u8(c||null),c=q8().Ie(),(c=m6(c,b.key))&&B8(c,1))}},fCa=function(a){g.qM(a.player).sb()?a.player.pauseVideo():(a.nk=function(b){dCa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.nk));
a.Kl&&a.Kl.Yb();y8()||(F8=!0)},eCa=function(a){g.qM(a.player).sb()?a.player.pauseVideo():(a.nk=function(b){dCa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.nk));
a.ul&&a.ul.Yb();y8()||(F8=!0)},jAa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},J6={"'":"\\'"},gCa={},Hza={uQ:"atp",mT:"ska",XS:"que",lS:"mus",lT:"sus",tR:"dsp",eT:"seq"},s6,o6="",Zza=Vza("loadCastFramework")||Vza("loadCastApplicationFramework"),tBa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Va(v6,g.B);g.k=v6.prototype;g.k.UG=function(a){this.B=arguments;this.o=!1;this.Ka?this.A=(0,g.E)()+this.Kd:this.Ka=g.cg(this.C,this.Kd)};
g.k.stop=function(){this.Ka&&(g.v.clearTimeout(this.Ka),this.Ka=null);this.A=null;this.o=!1;this.B=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.F.apply(null,this.B)))};
g.k.X=function(){this.stop();v6.uc.X.call(this)};
g.k.VG=function(){this.A?(this.Ka=g.cg(this.C,this.A-(0,g.E)()),this.A=null):(this.Ka=null,this.u?this.o=!0:(this.o=!1,this.F.apply(null,this.B)))};g.t(w6,g.B);g.k=w6.prototype;g.k.HA=function(a){this.A=arguments;this.Ka||this.u?this.o=!0:x6(this)};
g.k.stop=function(){this.Ka&&(g.v.clearTimeout(this.Ka),this.Ka=null,this.o=!1,this.A=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.o||this.Ka||(this.o=!1,x6(this))};
g.k.X=function(){g.B.prototype.X.call(this);this.stop()};z6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
z6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};A6.prototype.o=null;A6.prototype.getOptions=function(){var a;(a=this.o)||(a={},cAa(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var S8;g.Va(bAa,A6);S8=new bAa;g.k=B6.prototype;g.k.Gj=null;g.k.cg=!1;g.k.cm=null;g.k.ix=null;g.k.Ol=null;g.k.Tl=null;g.k.Yh=null;g.k.Vi=null;g.k.pk=null;g.k.bd=null;g.k.Ao=0;g.k.hg=null;g.k.As=null;g.k.ni=null;g.k.Um=-1;g.k.ED=!0;g.k.mj=!1;g.k.ou=0;g.k.Hr=null;var hAa={},E6={};g.k=B6.prototype;g.k.setTimeout=function(a){this.C=a};
g.k.BO=function(a){a=a.target;var b=this.Hr;b&&3==S6(a)?b.HA():this.EE(a)};
g.k.EE=function(a){try{if(a==this.bd)a:{var b=S6(this.bd),c=this.bd.F,d=this.bd.getStatus();if(g.pe&&!g.Ud(10)||g.re&&!g.Td("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Eh&&!U6(this.bd))break a;this.mj||4!=b||7==c||(8==c||0>=d?this.o.Sf(3):this.o.Sf(2));L6(this);var e=this.bd.getStatus();this.Um=e;var f=U6(this.bd);(this.cg=200==e)?(4==b&&H6(this),this.F?(iAa(this,b,f),g.Eh&&this.cg&&3==b&&(this.B.na(this.u,"tick",this.vO),this.u.start())):G6(this,f),this.cg&&!this.mj&&(4==b?this.o.Xp(this):(this.cg=
!1,D6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.ni=3,F6(13)):(this.ni=0,F6(14)),H6(this),I6(this))}}catch(h){this.bd&&U6(this.bd)}finally{}};
g.k.vO=function(){var a=S6(this.bd),b=U6(this.bd);this.Ao<b.length&&(L6(this),iAa(this,a,b),this.cg&&4!=a&&D6(this))};
g.k.TN=function(a){K6((0,g.x)(this.SN,this,a),0)};
g.k.SN=function(a){this.mj||(L6(this),G6(this,a),D6(this))};
g.k.IC=function(a){K6((0,g.x)(this.RN,this,a),0)};
g.k.RN=function(a){this.mj||(H6(this),this.cg=a,this.o.Xp(this),this.o.Sf(4))};
g.k.cancel=function(){this.mj=!0;H6(this)};
g.k.bO=function(){this.cm=null;var a=(0,g.E)();0<=a-this.ix?(2!=this.Tl&&this.o.Sf(3),H6(this),this.ni=2,F6(18),I6(this)):lAa(this,this.ix-a)};
g.k.getLastError=function(){return this.ni};g.k=oAa.prototype;g.k.mu=null;g.k.se=null;g.k.Ir=!1;g.k.Mz=null;g.k.Dp=null;g.k.Qu=null;g.k.nu=null;g.k.gf=null;g.k.qh=-1;g.k.Tm=null;g.k.om=null;g.k.connect=function(a){this.nu=a;a=N6(this.o,null,this.nu);F6(3);this.Mz=(0,g.E)();var b=this.o.I;null!=b?(this.Tm=b[0],(this.om=b[1])?(this.gf=1,pAa(this)):(this.gf=2,P6(this))):(b6(a,"MODE","init"),this.se=new B6(this,void 0,void 0,void 0),this.se.Gj=this.mu,C6(this.se,a,!1,null,!0),this.gf=0)};
g.k.RF=function(a){if(a)this.gf=2,P6(this);else{F6(4);var b=this.o;b.sg=b.bi.qh;a7(b,9)}a&&this.Sf(2)};
g.k.Gt=function(a){return this.o.Gt(a)};
g.k.abort=function(){this.se&&(this.se.cancel(),this.se=null);this.qh=-1};
g.k.Lz=function(){return!1};
g.k.zC=function(a,b){this.qh=a.Um;if(0==this.gf)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.sg=this.qh;a7(c,2);return}this.Tm=c[0];this.om=c[1]}else c=this.o,c.sg=this.qh,a7(c,2);else if(2==this.gf)if(this.Ir)F6(7),this.Qu=(0,g.E)();else if("11111"==b){if(F6(6),this.Ir=!0,this.Dp=(0,g.E)(),c=this.Dp-this.Mz,!g.pe||g.Ud(10)||500>c)this.qh=200,this.se.cancel(),F6(12),O6(this.o,this,!0)}else F6(8),this.Dp=this.Qu=(0,g.E)(),this.Ir=!1};
g.k.Xp=function(){this.qh=this.se.Um;if(this.se.cg)0==this.gf?this.om?(this.gf=1,pAa(this)):(this.gf=2,P6(this)):2==this.gf&&((!g.pe||g.Ud(10)?!this.Ir:200>this.Qu-this.Dp)?(F6(11),O6(this.o,this,!1)):(F6(12),O6(this.o,this,!0)));else{0==this.gf?F6(9):2==this.gf&&F6(10);var a=this.o;this.se.getLastError();a.sg=this.qh;a7(a,2)}};
g.k.ko=function(){return this.o.ko()};
g.k.isActive=function(){return this.o.isActive()};
g.k.Sf=function(a){this.o.Sf(a)};g.Va(Q6,g.rf);var uAa=/^https?$/i,hCa=["POST","PUT"];g.k=Q6.prototype;
g.k.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.M+"; newUri="+a);b=b?b.toUpperCase():"GET";this.M=a;this.B="";this.F=0;this.fa=b;this.Z=!1;this.A=!0;this.o=this.U?dAa(this.U):dAa(S8);this.T=this.U?this.U.getOptions():S8.getOptions();this.o.onreadystatechange=(0,g.x)(this.vC,this);try{d6(T6(this,"Opening Xhr")),this.ba=!0,this.o.open(b,String(a),!0),this.ba=!1}catch(f){d6(T6(this,"Error opening Xhr: "+f.message));tAa(this,f);return}a=
c||"";var e=this.headers.clone();d&&Dza(d,function(f,h){e.set(h,f)});
d=g.db(e.df(),rAa);c=g.v.FormData&&a instanceof g.v.FormData;!g.gb(hCa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.o.setRequestHeader(h,f)},this);
this.ga&&(this.o.responseType=this.ga);"withCredentials"in this.o&&this.o.withCredentials!==this.aa&&(this.o.withCredentials=this.aa);try{wAa(this),0<this.G&&(this.R=qAa(this.o),d6(T6(this,"Will abort after "+this.G+"ms if incomplete, xhr2 "+this.R)),this.R?(this.o.timeout=this.G,this.o.ontimeout=(0,g.x)(this.Nz,this)):this.N=g.cg(this.Nz,this.G,this)),d6(T6(this,"Sending request")),this.I=!0,this.o.send(a),this.I=!1}catch(f){d6(T6(this,"Send error: "+f.message)),tAa(this,f)}};
g.k.Nz=function(){"undefined"!=typeof g.F1&&this.o&&(this.B="Timed out after "+this.G+"ms, aborting",this.F=8,T6(this,this.B),this.dispatchEvent("timeout"),this.abort(8))};
g.k.abort=function(a){this.o&&this.A&&(T6(this,"Aborting"),this.A=!1,this.C=!0,this.o.abort(),this.C=!1,this.F=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),R6(this))};
g.k.X=function(){this.o&&(this.A&&(this.A=!1,this.C=!0,this.o.abort(),this.C=!1),R6(this,!0));Q6.uc.X.call(this)};
g.k.vC=function(){this.ia()||(this.ba||this.I||this.C?vAa(this):this.aN())};
g.k.aN=function(){vAa(this)};
g.k.isActive=function(){return!!this.o};
g.k.getStatus=function(){try{return 2<S6(this)?this.o.status:-1}catch(a){return-1}};
g.k.getLastError=function(){return"string"===typeof this.B?this.B:String(this.B)};g.k=V6.prototype;g.k.Im=null;g.k.ie=null;g.k.Ec=null;g.k.lu=null;g.k.Gp=null;g.k.ny=null;g.k.Wp=null;g.k.En=0;g.k.DK=0;g.k.Hd=null;g.k.gi=null;g.k.Zg=null;g.k.rj=null;g.k.bi=null;g.k.ys=null;g.k.ql=-1;g.k.sA=-1;g.k.sg=-1;g.k.Uk=0;g.k.Gk=0;g.k.nj=8;var b7=new g.rf;g.Va(yAa,g.Qe);g.Va(zAa,g.Qe);g.Va(AAa,g.Qe);g.k=V6.prototype;g.k.connect=function(a,b,c,d,e){F6(0);this.lu=b;this.Im=c||{};d&&void 0!==e&&(this.Im.OSID=d,this.Im.OAID=e);this.F?(K6((0,g.x)(this.Gy,this,a),100),EAa(this)):this.Gy(a)};
g.k.Gy=function(a){this.bi=new oAa(this);this.bi.mu=null;this.bi.u=this.C;this.bi.connect(a)};
g.k.Lz=function(){return 0==this.o};
g.k.HC=function(a){this.gi=null;HAa(this,a)};
g.k.GC=function(){this.Zg=null;this.Ec=new B6(this,this.A,"rpc",this.G);this.Ec.Gj=null;this.Ec.ou=0;var a=this.ny.clone();$5(a,"RID","rpc");$5(a,"SID",this.A);$5(a,"CI",this.ys?"0":"1");$5(a,"AID",this.ql);W6(this,a);if(!g.pe||g.Ud(10))$5(a,"TYPE","xmlhttp"),C6(this.Ec,a,!0,this.Wp,!1);else{$5(a,"TYPE","html");var b=this.Ec,c=!!this.Wp;b.Tl=3;b.Yh=a6(a.clone());kAa(b,c)}};
g.k.zC=function(a,b){if(0!=this.o&&(this.Ec==a||this.ie==a))if(this.sg=a.Um,this.ie==a&&3==this.o)if(7<this.nj){try{var c=this.C.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Zg){if(this.Ec)if(this.Ec.Ol+3E3<this.ie.Ol)Y6(this),this.Ec.cancel(),this.Ec=null;else break a;$6(this);F6(19)}}else this.sA=c[1],0<this.sA-this.ql&&37500>c[2]&&this.ys&&0==this.Gk&&!this.rj&&(this.rj=K6((0,g.x)(this.fL,this),6E3));else a7(this,11)}else b!=gCa.SQ.o&&a7(this,11);else if(this.Ec==
a&&Y6(this),!g.lc(b)){c=this.C.parse(b);for(var d=0;d<c.length;d++){var e=c[d];this.ql=e[0];e=e[1];2==this.o?"c"==e[0]?(this.A=e[1],this.Wp=e[2],e=e[3],null!=e?this.nj=e:this.nj=6,this.o=3,this.Hd&&this.Hd.By(),this.ny=N6(this,this.ko()?this.Wp:null,this.lu),IAa(this)):"stop"==e[0]&&a7(this,7):3==this.o&&("stop"==e[0]?a7(this,7):"noop"!=e[0]&&this.Hd&&this.Hd.Ay(e),this.Gk=0)}}};
g.k.fL=function(){null!=this.rj&&(this.rj=null,this.Ec.cancel(),this.Ec=null,$6(this),F6(20))};
g.k.Xp=function(a){if(this.Ec==a){Y6(this);this.Ec=null;var b=2}else if(this.ie==a)this.ie=null,b=1;else return;this.sg=a.Um;if(0!=this.o)if(a.cg)1==b?(b=(0,g.E)()-a.Ol,b7.dispatchEvent(new zAa(b7,a.pk?a.pk.length:0,b,this.Uk)),X6(this),this.B.length=0):IAa(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.sg)){if(d=1==b)this.ie||this.gi||1==this.o||2<=this.Uk?d=!1:(this.gi=K6((0,g.x)(this.HC,this,a),JAa(this,this.Uk)),this.Uk++,d=!0);d=!(d||2==b&&$6(this))}if(d)switch(c){case 1:a7(this,
5);break;case 4:a7(this,10);break;case 3:a7(this,6);break;case 7:a7(this,12);break;default:a7(this,2)}}};
g.k.sG=function(a){if(!g.gb(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.k.lP=function(a){a?F6(2):(F6(1),KAa(this,8))};
g.k.Gt=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Q6;a.aa=!1;return a};
g.k.isActive=function(){return!!this.Hd&&this.Hd.isActive(this)};
g.k.Sf=function(a){b7.dispatchEvent(new AAa(b7,a))};
g.k.ko=function(){return!(!g.pe||g.Ud(10))};
g.k=LAa.prototype;g.k.By=function(){};
g.k.Ay=function(){};
g.k.zy=function(){};
g.k.qt=function(){};
g.k.jz=function(){return{}};
g.k.isActive=function(){return!0};g.k=MAa.prototype;g.k.isEmpty=function(){return g.ib(this.o)&&g.ib(this.u)};
g.k.clear=function(){this.o=[];this.u=[]};
g.k.contains=function(a){return g.gb(this.o,a)||g.gb(this.u,a)};
g.k.remove=function(a){var b=this.o;var c=(0,g.jua)(b,a);0<=c?(g.kb(b,c),b=!0):b=!1;return b||g.lb(this.u,a)};
g.k.Sd=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Va(c7,g.B);g.k=c7.prototype;g.k.MN=function(){this.Kd=Math.min(3E5,2*this.Kd);this.A();this.u&&this.start()};
g.k.start=function(){var a=this.Kd+15E3*Math.random();this.o.ib(a);this.u=(0,g.E)()+a};
g.k.stop=function(){this.o.stop();this.u=0};
g.k.isActive=function(){return this.o.isActive()};
g.k.reset=function(){this.o.stop();this.Kd=5E3};g.Va(d7,LAa);g.k=d7.prototype;g.k.subscribe=function(a,b,c){return this.A.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.A.unsubscribe(a,b,c)};
g.k.Li=function(a){return this.A.Hj(a)};
g.k.S=function(a,b){return this.A.S.apply(this.A,arguments)};
g.k.dispose=function(){this.Nb||(this.Nb=!0,g.Oe(this.A),PAa(this),g.Oe(this.u),this.u=null)};
g.k.ia=function(){return this.Nb};
g.k.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.M="";this.u.stop();this.C=a||null;this.B=b||0;a=this.N+"/test";b=this.N+"/bind";var d=new V6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.R),e=this.o;e&&(e.Hd=null);d.Hd=this;this.o=d;e?this.o.connect(a,b,this.F,e.A,e.ql):c?this.o.connect(a,b,this.F,c.sessionId,c.arrayId):this.o.connect(a,b,this.F)}};
g.k.sendMessage=function(a,b){var c={_sc:a};b&&g.Vb(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.G.push(c):e7(this)&&FAa(this.o,c)};
g.k.By=function(){this.u.reset();this.C=null;this.B=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)FAa(this.o,a[b])}this.S("handlerOpened")};
g.k.zy=function(a){var b=2==a&&401==this.o.sg;4==a||b||this.u.start();this.S("handlerError",a)};
g.k.qt=function(a){if(!this.u.isActive())this.S("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
g.k.jz=function(){var a={v:2};this.M&&(a.gsessionid=this.M);0!=this.B&&(a.ui=""+this.B);0!=this.I&&(a.ui=""+this.I);this.C&&g.Vb(a,this.C);return a};
g.k.Ay=function(a){"S"==a[0]?this.M=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),DAa(this.o)):this.S("handlerMessage",new NAa(a[0],a[1]))};
g.k.OO=function(){this.u.isActive();var a=this.o,b=0;a.Ec&&b++;a.ie&&b++;0==b&&this.connect(this.C,this.B)};f7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
f7.prototype.A=function(a,b){a(Error("Request error: "+b.status))};
f7.prototype.C=function(a){a(Error("request timed out"))};var XAa=(0,g.E)(),i7=null,l7=Array(50),k7=-1,m7=!1;g.Va(n7,g.N);n7.prototype.Ie=function(){return this.screens};
n7.prototype.contains=function(a){return!!l6(this.screens,a)};
n7.prototype.get=function(a){return a?m6(this.screens,a):null};
n7.prototype.info=function(a){j7(this.F,a)};g.t(o7,g.N);g.k=o7.prototype;g.k.start=function(){!this.o&&isNaN(this.Ka)&&this.IE()};
g.k.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.Ka)||(g.No(this.Ka),this.Ka=NaN)};
g.k.X=function(){this.stop();g.N.prototype.X.call(this)};
g.k.IE=function(){this.Ka=NaN;this.o=g.vq(g7(this.F,"/pairing/get_screen"),{method:"POST",Eb:{pairing_code:this.C},timeout:5E3,onSuccess:(0,g.x)(this.LP,this),onError:(0,g.x)(this.KP,this),Re:(0,g.x)(this.MP,this)})};
g.k.LP=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.A;c.name=this.B;this.S("pairingComplete",new g6(c))};
g.k.KP=function(a){this.o=null;a.status&&404==a.status?this.u>=iCa.length?this.S("pairingFailed",Error("DIAL polling timed out")):(a=iCa[this.u],this.Ka=g.Lo((0,g.x)(this.IE,this),a),this.u++):this.S("pairingFailed",Error("Server error "+a.status))};
g.k.MP=function(){this.o=null;this.S("pairingFailed",Error("Server not responding"))};
var iCa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Va(q7,n7);g.k=q7.prototype;g.k.start=function(){p7(this)&&this.S("screenChange");!g.$s("yt-remote-lounge-token-expiration")&&aBa(this);g.No(this.o);this.o=g.Lo((0,g.x)(this.start,this),1E4)};
g.k.add=function(a,b){p7(this);YAa(this,a);r7(this,!1);this.S("screenChange");b(a);a.token||aBa(this)};
g.k.remove=function(a,b){var c=p7(this);$Aa(this,a)&&(r7(this,!1),c=!0);b(a);c&&this.S("screenChange")};
g.k.ws=function(a,b,c,d){var e=p7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,r7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.S("screenChange")};
g.k.X=function(){g.No(this.o);q7.uc.X.call(this)};
g.k.eH=function(a){p7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}r7(this,!b);b&&j7(this.F,"Missed "+b+" lounge tokens.")};
g.k.dH=function(a){j7(this.F,"Requesting lounge tokens failed: "+a)};g.t(t7,g.N);g.k=t7.prototype;g.k.start=function(){var a=parseInt(g.$s("yt-remote-fast-check-period")||"0",10);(this.B=(0,g.E)()-144E5<a?0:a)?v7(this):(this.B=(0,g.E)()+3E5,g.Zs("yt-remote-fast-check-period",this.B),this.hw())};
g.k.isEmpty=function(){return g.Ob(this.o)};
g.k.update=function(){s7("Updating availability on schedule.");var a=this.F(),b=g.Cb(this.o,function(c,d){return c&&!!m6(a,d)},this);
u7(this,b)};
g.k.X=function(){g.No(this.A);this.A=NaN;this.u&&(this.u.abort(),this.u=null);g.N.prototype.X.call(this)};
g.k.hw=function(){g.No(this.A);this.A=NaN;this.u&&this.u.abort();var a=dBa(this);if(c6(a)){var b=g7(this.C,"/pairing/get_screen_availability");this.u=h7(this.C,b,{lounge_token:g.Ib(a).join(",")},(0,g.x)(this.wN,this,a),(0,g.x)(this.vN,this))}else u7(this,{}),v7(this)};
g.k.wN=function(a,b){this.u=null;var c=g.Ib(dBa(this));if(g.yb(c,g.Ib(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;u7(this,d);v7(this)}else this.qc("Changing Screen set during request."),this.hw()};
g.k.vN=function(a){this.qc("Screen availability failed: "+a);this.u=null;v7(this)};
g.k.qc=function(a){j7("OnlineScreenService",a)};g.Va(w7,n7);g.k=w7.prototype;g.k.start=function(){this.u.start();this.o.start();this.screens.length&&(this.S("screenChange"),this.o.isEmpty()||this.S("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.o.update()};
g.k.ws=function(a,b,c,d){this.u.contains(a)?this.u.ws(a,b,c,d):(a="Updating name of unknown screen: "+a.name,j7(this.F,a),d(Error(a)))};
g.k.Ie=function(a){return a?this.screens:g.ob(this.screens,(0,g.Ce)(this.A,function(b){return!this.contains(b)},this))};
g.k.JE=function(){return(0,g.Ce)(this.Ie(!0),function(a){return!!this.o.o[a.id]},this)};
g.k.KE=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new o7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(h){g.Oe(f);d(x7(this,h))},this));
f.subscribe("pairingFailed",function(h){g.Oe(f);e(h)});
f.start();return(0,g.x)(f.stop,f)};
g.k.OP=function(a,b,c,d){g.vq(g7(this.C,"/pairing/get_screen"),{method:"POST",Eb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var h=new g6(f.screen||{});if(!h.name||hBa(this,h.name)){a:{var l=h.name;for(var m=2,n=b(l,m);hBa(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}h.name=l}c(x7(this,h))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Re:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.k.X=function(){g.Oe(this.u);g.Oe(this.o);w7.uc.X.call(this)};
g.k.lH=function(){iBa(this);this.S("screenChange");this.o.update()};
w7.prototype.dispose=w7.prototype.dispose;g.Va(z7,g.N);g.k=z7.prototype;g.k.getScreen=function(){return this.I};
g.k.wr=function(a){this.I=a;this.S("sessionScreen",this.I)};
g.k.Qe=function(a){this.ia()||(a&&A7(this,""+a),this.I=null,this.S("sessionScreen",null))};
g.k.info=function(a){j7(this.T,a)};
g.k.ME=function(){return null};
g.k.rw=function(a){var b=this.o;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){A7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.X=function(){this.rw("");z7.uc.X.call(this)};g.t(B7,z7);g.k=B7.prototype;g.k.qw=function(a){if(this.u){if(this.u==a)return;A7(this,"Overriding cast sesison with new session object");this.u.removeUpdateListener(this.C);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.u=a;this.u.addUpdateListener(this.C);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);kBa(this)};
g.k.rl=function(a){this.info("launchWithParams no-op for Cast: "+g.Pk(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.x)(function(){this.Qe()},this),(0,g.x)(function(){this.Qe(Error("Failed to stop receiver app."))},this)):this.Qe(Error("Stopping cast device witout session."))};
g.k.rw=function(){};
g.k.X=function(){this.info("disposeInternal");g.No(this.A);this.A=0;this.u&&(this.u.removeUpdateListener(this.C),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.u=null;z7.prototype.X.call(this)};
g.k.iO=function(a,b){if(!this.ia())if(b){var c=y6(b);if(g.Qa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Pk(c));switch(d){case "mdxSessionStatus":jBa(this,c.screenId);break;default:A7(this,"Unknown youtube message: "+d)}}else A7(this,"Unable to parse message.")}else A7(this,"No data in message.")};
g.k.Ez=function(a,b,c,d){gBa(this.M,this.o.label,a,this.o.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(A7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Lo((0,g.x)(this.Ez,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.ME=function(){return this.u};
g.k.PP=function(a){this.ia()||a||(A7(this,"Cast session died."),this.Qe())};g.t(C7,z7);g.k=C7.prototype;g.k.qw=function(a){this.A=a;this.A.addUpdateListener(this.R)};
g.k.rl=function(a){this.B=a;this.F()};
g.k.stop=function(){this.u();this.u=g.La;g.No(this.C);this.A?this.A.stop((0,g.x)(this.Qe,this,null),(0,g.x)(this.Qe,this,"Failed to stop DIAL device.")):this.Qe()};
g.k.X=function(){this.u();this.u=g.La;g.No(this.C);this.A&&this.A.removeUpdateListener(this.R);this.A=null;z7.prototype.X.call(this)};
g.k.SP=function(a){this.ia()||a||(A7(this,"DIAL session died."),this.u(),this.u=g.La,this.Qe())};
g.k.Au=function(a){this.N=k6();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,mBa(this));a(b);lBa(this)}else this.F=(0,g.x)(function(){g.No(this.C);this.F=g.La;this.C=NaN;var c=new chrome.cast.DialLaunchResponse(!0,mBa(this));a(c);lBa(this)},this),this.C=g.Lo((0,g.x)(function(){this.F()},this),100)};
g.k.DH=function(a,b,c){gBa(this.M,this.G.receiver.label,a,this.o.friendlyName,(0,g.x)(function(d){d&&d.token?(this.wr(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Au(b,c)},this),(0,g.x)(function(d){A7(this,"Failed to get DIAL screen: "+d);
this.Au(b,c)},this))};g.t(D7,z7);D7.prototype.stop=function(){this.Qe()};
D7.prototype.qw=function(){};
D7.prototype.rl=function(){g.No(this.u);this.u=NaN;var a=m6(this.M.Ie(),this.o.label);a?this.wr(a):this.Qe(Error("No such screen"))};
D7.prototype.X=function(){g.No(this.u);this.u=NaN;z7.prototype.X.call(this)};g.t(E7,g.N);g.k=E7.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.G);this.I||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.fN,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.CC,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.AL,this);chrome.cast.initialize(c,(0,g.x)(function(){this.ia()||
(chrome.cast.addReceiverActionListener(this.B),UAa(),this.u.subscribe("onlineScreenChange",(0,g.x)(this.LE,this)),this.A=oBa(this),chrome.cast.setCustomReceivers(this.A,g.La,(0,g.x)(function(h){this.qc("Failed to set initial custom receivers: "+g.Pk(h))},this)),this.S("yt-remote-cast2-availability-change",G7(this)),b(!0))},this),(0,g.x)(function(h){this.qc("Failed to initialize API: "+g.Pk(h));
b(!1)},this))};
g.k.VO=function(a,b){F7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.getScreen();if(!a||c&&c.id!=a)F7("Unsetting old screen status: "+this.o.o.friendlyName),H7(this,null)}if(a&&b){if(!this.o){c=m6(this.u.Ie(),a);if(!c){F7("setConnectedScreenStatus: Unknown screen.");return}var d=nBa(this,c);d||(F7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.A.push(d),chrome.cast.setCustomReceivers(this.A,
g.La,(0,g.x)(function(e){this.qc("Failed to set initial custom receivers: "+g.Pk(e))},this)));
F7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);H7(this,new D7(this.u,d),!0)}this.o.rw(b)}else F7("setConnectedScreenStatus: no screen.")};
g.k.WO=function(a){this.ia()?this.qc("Setting connection data on disposed cast v2"):this.o?this.o.rl(a):this.qc("Setting connection data without a session")};
g.k.RP=function(){this.ia()?this.qc("Stopping session on disposed cast v2"):this.o?(this.o.stop(),H7(this,null)):F7("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.CC,this),(0,g.x)(this.zN,this))};
g.k.X=function(){this.u.unsubscribe("onlineScreenChange",(0,g.x)(this.LE,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.B);var a=RAa,b=g.Ka("yt.mdx.remote.debug.handlers_");g.lb(b||[],a);g.Oe(this.o);g.N.prototype.X.call(this)};
g.k.qc=function(a){j7("Controller",a)};
g.k.EC=function(a,b){this.o==a&&(b||H7(this,null),this.S("yt-remote-cast2-session-change",b))};
g.k.bN=function(a,b){if(!this.ia())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.o.label!=a.label)F7("onReceiverAction_: Stopping active receiver: "+this.o.o.friendlyName),this.o.stop();else{F7("onReceiverAction_: Casting to active receiver.");this.o.getScreen()&&this.S("yt-remote-cast2-session-change",this.o.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H7(this,
new D7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:H7(this,new C7(this.u,a,this.F));break;case chrome.cast.ReceiverType.CAST:H7(this,new B7(this.u,a));break;default:this.qc("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.o.label==a.label?this.o.stop():this.qc("Stopping receiver w/o session: "+a.friendlyName)}else this.qc("onReceiverAction_ called without receiver.")};
g.k.AL=function(a){if(this.ia())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.qc("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.o:null;if(!c||c.label!=b.label)return this.qc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.getScreen())return F7("Reselecting dial screen."),
this.S("yt-remote-cast2-session-change",this.o.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.qc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H7(this,new C7(this.u,b,this.F))}b=this.o;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.DH,b,(b.G.extraData||{}).screenId||null)):new Promise((0,g.x)(b.Au,b))};
g.k.CC=function(a){if(!this.ia()){F7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)F7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),H7(this,new B7(this.u,b),!0);else{this.qc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.o,d=m6(this.u.Ie(),c.label);d&&h6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(F7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Oe(this.o),this.o=new B7(this.u,b),this.o.subscribe("sessionScreen",(0,g.x)(this.EC,this,this.o)),this.o.rl(null));this.o.qw(a)}}};
g.k.QP=function(){return this.o?this.o.ME():null};
g.k.zN=function(a){this.ia()||(this.qc("Failed to estabilish a session: "+g.Pk(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H7(this,null))};
g.k.fN=function(a){F7("Receiver availability updated: "+a);if(!this.ia()){var b=G7(this);this.C=a==chrome.cast.ReceiverAvailability.AVAILABLE;G7(this)!=b&&this.S("yt-remote-cast2-availability-change",G7(this))}};
g.k.LE=function(){this.ia()||(this.A=oBa(this),F7("Updating custom receivers: "+g.Pk(this.A)),chrome.cast.setCustomReceivers(this.A,g.La,(0,g.x)(function(){this.qc("Failed to set custom receivers.")},this)),this.S("yt-remote-cast2-availability-change",G7(this)))};
E7.prototype.setLaunchParams=E7.prototype.WO;E7.prototype.setConnectedScreenStatus=E7.prototype.VO;E7.prototype.stopSession=E7.prototype.RP;E7.prototype.getCastSession=E7.prototype.QP;E7.prototype.requestSession=E7.prototype.requestSession;E7.prototype.init=E7.prototype.init;E7.prototype.dispose=E7.prototype.dispose;var N7=[];g.k=S7.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";T7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.tg=a.hasPrevious,this.hasNext=a.hasNext,this.G=a.playerTime,this.F=a.playerTimeAt,this.C=a.seekableStart,this.u=a.seekableEnd,this.I=a.duration,this.M=a.loadedTime,this.B=a.liveIngestionTime,this.A=!isNaN(this.B))};
g.k.sb=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.getDuration=function(){return this.A?this.I+U7(this):this.I};
g.k.clone=function(){return new S7(Y7(this))};g.t($7,g.N);g.k=$7.prototype;g.k.play=function(){1==this.o?(this.u?this.u.play(null,g.La,f8(this,"play")):e8(this,"play"),d8(this,1,W7(a8(this))),this.S("remotePlayerChange")):b8(this,this.play)};
g.k.pause=function(){1==this.o?(this.u?this.u.pause(null,g.La,f8(this,"pause")):e8(this,"pause"),d8(this,2,W7(a8(this))),this.S("remotePlayerChange")):b8(this,this.pause)};
g.k.seekTo=function(a){if(1==this.o){if(this.u){var b=a8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.sb()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.La,f8(this,"seekTo",{newTime:a}))}else e8(this,"seekTo",{newTime:a});d8(this,3,a);this.S("remotePlayerChange")}else b8(this,g.Ta(this.seekTo,a))};
g.k.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.La,f8(this,"stopVideo")):e8(this,"stopVideo");var a=a8(this);a.index=-1;a.videoId="";T7(a);c8(this,a);this.S("remotePlayerChange")}else b8(this,this.stop)};
g.k.setVolume=function(a,b){if(1==this.o){var c=a8(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.x)(function(){j7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.qc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.x)(function(){j7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.qc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);e8(this,"setVolume",e)}c.muted=b;c.volume=a;c8(this,c)}else b8(this,g.Ta(this.setVolume,a,b))};
g.k.HE=function(a,b){if(1==this.o){var c=a8(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Pk(b.style),g.Vb(d,c.o));e8(this,"setSubtitlesTrack",d);c8(this,c)}else b8(this,g.Ta(this.HE,a,b))};
g.k.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();e8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=a8(this);d.audioTrackId=c;c8(this,d)}else b8(this,g.Ta(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){var l=a8(this);c=c||0;var m={videoId:a,currentIndex:c};X7(l,a,c);void 0!==b&&(V7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=h&&(m.locationInfo=g.Pk(h));e8(this,"setPlaylist",m);d||c8(this,l)};
g.k.Dr=function(a,b){if(1==this.o){if(a&&b){var c=a8(this);X7(c,a,b);c8(this,c)}e8(this,"previous")}else b8(this,g.Ta(this.Dr,a,b))};
g.k.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=a8(this);X7(c,a,b);c8(this,c)}e8(this,"next")}else b8(this,g.Ta(this.nextVideo,a,b))};
g.k.Ty=function(){1==this.o?e8(this,"dismissAutoplay"):b8(this,this.Ty)};
g.k.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.S("proxyStateChange",a,this.o)}g.N.prototype.dispose.call(this)};
g.k.X=function(){BBa(this);this.B=null;this.C.clear();Z7(this,null);g.N.prototype.X.call(this)};
g.k.lx=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.S("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)b=a=this.C,g.ib(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.k.YM=function(a,b){this.S(a,b)};
g.k.lL=function(a){if(!a)this.In(null),Z7(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=a8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)j7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,c8(this,b)}};
g.k.In=function(a){j7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.I);if(this.u=a)this.u.addUpdateListener(this.I),CBa(this),this.S("remotePlayerChange")};
g.k.kL=function(a){a?(CBa(this),this.S("remotePlayerChange")):this.In(null)};
g.k.Mw=function(){e8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.tL=function(){var a=yBa();a&&Z7(this,a)};
g.k.qc=function(a){j7("CP",a)};g.t(g8,g.N);g.k=g8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,h=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==h&&(l.currentIndex=h);c&&(this.gb.listId=c);this.gb.videoId=d;this.gb.index=h||0;this.gb.state=3;V7(this.gb,m);this.B="UNSUPPORTED";h8("Connecting with setPlaylist and params: "+g.Pk(l));this.o.connect({method:"setPlaylist",
params:g.Pk(l)},a,Pza())}else h8("Connecting without params"),this.o.connect({},a,Pza());EBa(this)};
g.k.dispose=function(){this.ia()||(this.S("beforeDispose"),i8(this,3));g.N.prototype.dispose.call(this)};
g.k.X=function(){j8(this);l8(this);k8(this);g.No(this.G);this.G=NaN;g.No(this.I);this.I=NaN;this.A=null;g.ip(this.T);this.T.length=0;this.o.dispose();g.N.prototype.X.call(this);this.B=this.F=this.u=this.gb=this.o=null};
g.k.XG=function(){this.Pk(2)};
g.k.pL=function(){h8("Channel opened");this.R&&(this.R=!1,k8(this),this.N=g.Lo((0,g.x)(function(){h8("Timing out waiting for a screen.");this.Pk(1)},this),15E3));
Tza(OAa(this.o),this.U)};
g.k.mL=function(){h8("Channel closed");isNaN(this.C)?r6(!0):r6();this.dispose()};
g.k.nL=function(a){r6();isNaN(this.Pm())?(h8("Channel error: "+a+" without reconnection"),this.dispose()):(this.R=!0,h8("Channel error: "+a+" with reconnection in "+this.Pm()+" ms"),i8(this,2))};
g.k.oL=function(a){a.params?h8("Received: action="+a.action+", params="+g.Pk(a.params)):h8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=y6(a.params.devices);this.u=(0,g.Kc)(a,function(c){return new f6(c)});
a=!!g.db(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
HBa(this,a);break;case "loungeScreenDisconnected":g.nb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
HBa(this,!1);break;case "remoteConnected":var b=new f6(y6(a.params.device));g.db(this.u,function(c){return b?c.id==b.id:!1})||zza(this.u,b);
break;case "remoteDisconnected":b=new f6(y6(a.params.device));g.nb(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":JBa(this,a);break;case "nowPlaying":LBa(this,a);break;case "onStateChange":KBa(this,a);break;case "onAdStateChange":MBa(this,a);break;case "onVolumeChanged":NBa(this,a);break;case "onSubtitlesTrackChanged":IBa(this,a);break;case "nowAutoplaying":OBa(this,a);break;case "autoplayDismissed":this.S("autoplayDismissed");break;case "autoplayUpNext":this.F=a.params.videoId||null;this.S("autoplayUpNext",this.F);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.S("autoplayModeChange",this.B);"DISABLED"==this.B&&this.S("autoplayDismissed");break;case "onHasPreviousNextChanged":PBa(this,a);break;case "requestAssistedSignIn":this.S("assistedSignInRequested",a.params.authCode);break;default:h8("Unrecognized action: "+a.action)}};
g.k.KO=function(){if(this.A){var a=this.A;this.A=null;this.gb.videoId!=a&&m8(this,"getNowPlaying")}};
g.k.NG=function(){var a=3;this.ia()||(a=0,isNaN(this.Pm())?e7(this.o)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.Pk=function(a){h8("Disconnecting with "+a);j8(this);this.S("beforeDisconnect",a);1==a&&r6();PAa(this.o,a);this.dispose()};
g.k.LG=function(){var a=this.gb;this.A&&(a=this.gb.clone(),X7(a,this.A,a.index));return Y7(a)};
g.k.XO=function(a){var b=new S7(a);b.videoId&&b.videoId!=this.gb.videoId&&(this.A=b.videoId,g.No(this.G),this.G=g.Lo((0,g.x)(this.KO,this),5E3));var c=[];this.gb.listId==b.listId&&this.gb.videoId==b.videoId&&this.gb.index==b.index||c.push("remoteQueueChange");this.gb.playerState==b.playerState&&this.gb.volume==b.volume&&this.gb.muted==b.muted&&W7(this.gb)==W7(b)&&g.Pk(this.gb.o)==g.Pk(b.o)||c.push("remotePlayerChange");this.gb.reset(a);(0,g.y)(c,function(d){this.S(d)},this)};
g.k.Cz=function(){var a=this.o.F.id,b=g.db(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Pm=function(){var a=this.o;return a.u.isActive()?a.u.u-(0,g.E)():NaN};
g.k.AG=function(){return this.B||"UNSUPPORTED"};
g.k.BG=function(){return this.F||""};
g.k.JP=function(){if(!isNaN(this.Pm())){var a=this.o.u;g.Cn(a.o);a.start()}};
g.k.SO=function(a,b){m8(this,a,b);GBa(this)};
g8.prototype.subscribe=g8.prototype.subscribe;g8.prototype.unsubscribeByKey=g8.prototype.Li;g8.prototype.getProxyState=g8.prototype.NG;g8.prototype.disconnect=g8.prototype.Pk;g8.prototype.getPlayerContextData=g8.prototype.LG;g8.prototype.setPlayerContextData=g8.prototype.XO;g8.prototype.getOtherConnectedRemoteId=g8.prototype.Cz;g8.prototype.getReconnectTimeout=g8.prototype.Pm;g8.prototype.getAutoplayMode=g8.prototype.AG;g8.prototype.getAutoplayVideoId=g8.prototype.BG;g8.prototype.reconnect=g8.prototype.JP;
g8.prototype.sendMessage=g8.prototype.SO;g.t(n8,n7);g.k=n8.prototype;g.k.Ie=function(a){return this.Jd.$_gs(a)};
g.k.contains=function(a){return!!this.Jd.$_c(a)};
g.k.get=function(a){return this.Jd.$_g(a)};
g.k.start=function(){this.Jd.$_st()};
g.k.add=function(a,b,c){this.Jd.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Jd.$_r(a,b,c)};
g.k.ws=function(a,b,c,d){this.Jd.$_un(a,b,c,d)};
g.k.X=function(){for(var a=0,b=this.o.length;a<b;++a)this.Jd.$_ubk(this.o[a]);this.o.length=0;this.Jd=null;n7.prototype.X.call(this)};
g.k.NP=function(){this.S("screenChange")};
g.k.BM=function(){this.S("onlineScreenChange")};
w7.prototype.$_st=w7.prototype.start;w7.prototype.$_gspc=w7.prototype.OP;w7.prototype.$_gsppc=w7.prototype.KE;w7.prototype.$_c=w7.prototype.contains;w7.prototype.$_g=w7.prototype.get;w7.prototype.$_a=w7.prototype.add;w7.prototype.$_un=w7.prototype.ws;w7.prototype.$_r=w7.prototype.remove;w7.prototype.$_gs=w7.prototype.Ie;w7.prototype.$_gos=w7.prototype.JE;w7.prototype.$_s=w7.prototype.subscribe;w7.prototype.$_ubk=w7.prototype.Li;var G8=null,F8=!1,o8=null,p8=null,E8=null,t8=[];g.t(H8,g.B);g.k=H8.prototype;g.k.X=function(){g.B.prototype.X.call(this);this.o.stop();this.u.stop();this.G.stop();this.N();var a=this.Ya;a.unsubscribe("proxyStateChange",this.yC,this);a.unsubscribe("remotePlayerChange",this.Pn,this);a.unsubscribe("remoteQueueChange",this.xr,this);a.unsubscribe("previousNextChange",this.uC,this);a.unsubscribe("nowAutoplaying",this.qC,this);a.unsubscribe("autoplayDismissed",this.QB,this);this.Ya=this.module=null};
g.k.WA=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.Ya.o)if(I8(this)){if(!a8(this.Ya).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":a8(this.Ya).sb()?this.Ya.pause():this.Ya.play();break;case "control_play":this.Ya.play();break;case "control_pause":this.Ya.pause();break;case "control_seek":this.F.HA(c[0],c[1]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.H.getCurrentTime();K8(this,0===c?void 0:c);break;case "control_seek":K8(this,c[0]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.jL=function(a){this.G.UG(a)};
g.k.tP=function(a){this.WA("control_subtitles_set_track",g.Ob(a)?null:a)};
g.k.RD=function(){var a=this.H.getOption("captions","track");g.Ob(a)||J8(this,a)};
g.k.Wb=function(a){this.module.Wb(a,this.H.getVideoData().lengthSeconds)};
g.k.fC=function(a){if(I8(this)){this.Ya.unsubscribe("remotePlayerChange",this.Pn,this);var b=Math.round(a.volume);a=!!a.muted;var c=a8(this.Ya);if(b!==c.volume||a!==c.muted)this.Ya.setVolume(b,a),this.I.start();this.Ya.subscribe("remotePlayerChange",this.Pn,this)}};
g.k.bM=function(){g.Ob(this.A)||aCa(this,this.A);this.B=!1};
g.k.yC=function(a,b){this.u.stop();2===b&&this.PD()};
g.k.Pn=function(){if(I8(this)){this.o.stop();var a=a8(this.Ya);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.module.jd=1;break;case 1082:case 1083:this.module.jd=0;break;default:this.module.jd=-1}switch(a.playerState){case 1081:case 1:this.Nc(new g.hH(8));this.OD();break;case 1085:case 3:this.Nc(new g.hH(9));break;case 1083:case 0:this.Nc(new g.hH(2));this.F.stop();this.Wb(this.H.getVideoData().lengthSeconds);break;case 1084:this.Nc(new g.hH(4));break;case 2:this.Nc(new g.hH(4));
this.Wb(W7(a));break;case -1:this.Nc(new g.hH(64));break;case -1E3:this.Nc(new g.hH(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=a8(this.Ya).o;var b=this.A;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.A=a,aCa(this,a));a=a8(this.Ya);-1===a.volume||Math.round(this.H.getVolume())===a.volume&&this.H.isMuted()===a.muted||this.I.isActive()||this.uE()}else $Ba(this)};
g.k.uC=function(){this.H.S("mdxpreviousnextchange")};
g.k.xr=function(){I8(this)||$Ba(this)};
g.k.qC=function(a){isNaN(a)||this.H.S("mdxnowautoplaying",a)};
g.k.QB=function(){this.H.S("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){I8(this)&&this.Ya.setAudioTrack(this.H.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===a8(this.Ya).playerState?K8(this,a):b&&this.Ya.seekTo(a)};
g.k.uE=function(){if(I8(this)){var a=a8(this.Ya);this.events.ob(this.M);a.muted?this.H.mute():this.H.unMute();this.H.setVolume(a.volume);this.M=this.events.L(this.H,"onVolumeChange",this.fC)}};
g.k.OD=function(){this.o.stop();if(!this.Ya.ia()){var a=a8(this.Ya);a.sb()&&this.Nc(new g.hH(8));this.Wb(W7(a));this.o.start()}};
g.k.PD=function(){this.u.stop();this.o.stop();var a=this.Ya.B.getReconnectTimeout();2==this.Ya.o&&!isNaN(a)&&this.u.start()};
g.k.Nc=function(a){this.u.stop();var b=this.C;if(!g.mH(b,a)){var c=g.T(a,2);c!==g.T(this.C,2)&&g.VT(this.H.app,c);this.C=a;cCa(this.module,b,a)}};g.t(L8,g.U);L8.prototype.Yb=function(){this.o.show()};
L8.prototype.Sa=function(){this.o.hide()};
L8.prototype.u=function(){g.sO("https://web.archive.org/web/20200801012131/https://support.google.com/youtube/answer/7640706")};
L8.prototype.A=function(){e6("mdx-manual-pairing-popup-ok");this.Sa()};g.t(M8,g.U);M8.prototype.Yb=function(){this.o.show()};
M8.prototype.Sa=function(){this.o.hide()};
M8.prototype.u=function(){e6("mdx-privacy-popup-cancel");this.Sa()};
M8.prototype.A=function(){e6("mdx-privacy-popup-confirm");this.Sa()};g.t(N8,g.U);N8.prototype.u=function(a){bCa(this,a.state)};g.t(O8,g.FR);O8.prototype.B=function(){var a=this.H.getOption("remote","receivers");a&&1<a.length&&!this.H.getOption("remote","quickCast")?(this.Ui=g.Ab(a,this.o,this),g.HR(this,(0,g.Kc)(a,this.o)),a=this.H.getOption("remote","currentReceiver"),this.Lb(this.o(a)),this.enable(!0)):this.enable(!1)};
O8.prototype.o=function(a){return a.key};
O8.prototype.Qf=function(a){return"cast-selector-receiver"===a?"Cast...":this.Ui[a].name};
O8.prototype.wd=function(a){g.FR.prototype.wd.call(this,a);this.H.setOption("remote","currentReceiver",this.Ui[a]);this.Na.Sa()};g.t(P8,g.RN);g.k=P8.prototype;
g.k.create=function(){UBa(g.wy(this.player.O()));this.subscriptions.push(g.So("yt-remote-before-disconnect",this.hL,this));this.subscriptions.push(g.So("yt-remote-connection-change",this.gN,this));this.subscriptions.push(g.So("yt-remote-receiver-availability-change",this.wC,this));this.subscriptions.push(g.So("yt-remote-auto-connect",this.eN,this));this.subscriptions.push(g.So("yt-remote-receiver-resumed",this.dN,this));this.subscriptions.push(g.So("mdx-privacy-popup-confirm",this.zO,this));this.subscriptions.push(g.So("mdx-privacy-popup-cancel",
this.yO,this));this.subscriptions.push(g.So("mdx-manual-pairing-popup-ok",this.VH,this));this.wC()};
g.k.load=function(){this.player.cancelPlayback();g.RN.prototype.load.call(this);this.De=new H8(this,this.player,this.Ya);var a=(a=ZBa())?a.currentTime:0;var b=D8()?new $7(y8(),void 0):null;0==a&&b&&(a=W7(a8(b)));0!==a&&this.Wb(a);cCa(this,this.Sb,this.Sb);g.cU(this.player.app,6)};
g.k.unload=function(){this.player.S("mdxautoplaycanceled");this.di=this.Nf;g.Pe(this.De,this.Ya);this.Ya=this.De=null;g.RN.prototype.unload.call(this);g.cU(this.player.app,5);Q8(this)};
g.k.X=function(){g.To(this.subscriptions);g.RN.prototype.X.call(this)};
g.k.Ig=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.De.WA.apply(this.De,[a].concat(g.ma(c)))};
g.k.getAdState=function(){return this.jd};
g.k.PG=function(){return this.loaded?this.De.suggestion:null};
g.k.tg=function(){return this.Ya?a8(this.Ya).tg:!1};
g.k.hasNext=function(){return this.Ya?a8(this.Ya).hasNext:!1};
g.k.Wb=function(a,b){this.tA=a||0;this.player.S("progresssync",a,b)};
g.k.getCurrentTime=function(){return this.tA};
g.k.getProgressState=function(){var a=a8(this.Ya),b=this.player.getVideoData();return{allowSeeking:g.P(this.player.O().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.hd():!a.isAdPlaying()&&this.player.hd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.A?a.B+U7(a):a.B,isAtLiveHead:1>=(a.A?a.u+U7(a):a.u)-this.getCurrentTime(),loaded:a.M,seekableEnd:a.A?a.u+U7(a):a.u,seekableStart:0<a.C?a.C+
U7(a):a.C}};
g.k.nextVideo=function(){this.Ya&&this.Ya.nextVideo()};
g.k.Dr=function(){this.Ya&&this.Ya.Dr()};
g.k.hL=function(a){1===a&&(this.Sv=this.Ya?a8(this.Ya):null)};
g.k.gN=function(){var a=D8()?new $7(y8(),void 0):null;if(a){var b=this.di;this.loaded&&this.unload();this.Ya=a;this.Sv=null;b.key!==this.Nf.key&&(this.di=b,this.load())}else g.Oe(this.Ya),this.Ya=null,this.loaded&&(this.unload(),(a=this.Sv)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W7(a)));this.player.S("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.wC=function(){this.Ui=[this.Nf].concat(WBa());var a=z8()||this.Nf;R8(this,a);this.player.ra("onMdxReceiversChange")};
g.k.eN=function(){var a=z8();R8(this,a)};
g.k.dN=function(){this.di=z8()};
g.k.zO=function(){this.Qn=!0;Q8(this);F8=!1;G8&&B8(G8,1);G8=null};
g.k.yO=function(){this.Qn=!1;Q8(this);R8(this,this.Nf);this.di=this.Nf;F8=!1;G8=null;this.player.playVideo()};
g.k.VH=function(){this.Bq=!0;Q8(this);g.Zs("yt-remote-manual-pairing-warning-shown",!0,2592E3);F8=!1;G8&&B8(G8,1);G8=null};
g.k.cd=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Ui;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q7():R8(this,b)),this.loaded?this.di:this.Nf;case "quickCast":return 2===this.Ui.length&&"cast-selector-receiver"===this.Ui[1].key?(b&&Q7(),!0):!1}};
g.k.Mw=function(){this.Ya.Mw()};
g.k.Zf=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.bO.remote=P8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 01:21:31 Aug 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:29 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 157.274
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.056
  cdx.remote: 0.056
  esindex: 0.01
  LoadShardBlock: 48.778 (3)
  PetaboxLoader3.datanode: 173.623 (5)
  load_resource: 357.908 (2)
  PetaboxLoader3.resolve: 200.774 (2)
*/