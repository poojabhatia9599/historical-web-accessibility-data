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

(function(g){var window=this;var VHa=function(a,b){return g.Lb(a,b)},w4=function(a,b,c){a.l.set(b,c)},x4=function(a){w4(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Sa()).toString(36));
return a},y4=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.bn(a.l,b,c)},WHa=function(a,b){var c=[];
g.lj(b,function(d){try{var e=g.Pn.prototype.l.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.On(e)&&c.push(d)},a);
return c},XHa=function(a,b){var c=WHa(a,b);
g.Ab(c,function(d){g.Pn.prototype.remove.call(this,d)},a)},YHa=function(a){if(a.W){if(a.W.locationOverrideToken)return{locationOverrideToken:a.W.locationOverrideToken};
if(null!=a.W.latitudeE7&&null!=a.W.longitudeE7)return{latitudeE7:a.W.latitudeE7,longitudeE7:a.W.longitudeE7}}return null},ZHa=function(a,b){g.fb(a,b)||a.push(b)},z4=function(a){var b=0,c;
for(c in a)b++;return b},$Ha=function(a,b){var c=b instanceof g.Fc?b:g.Lc(b,/^data:image\//i.test(b));
a.src=g.Gc(c)},A4=function(){},aIa=function(a){try{return g.A.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},bIa=function(a){if(a.sg&&"function"==typeof a.sg)return a.sg();
if("string"===typeof a)return a.split("");if(g.Ma(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Ib(a)},cIa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ma(a)||"string"===typeof a)g.Ab(a,b,void 0);else{if(a.rh&&"function"==typeof a.rh)var c=a.rh();else if(a.sg&&"function"==typeof a.sg)c=void 0;else if(g.Ma(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Jb(a);d=bIa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},dIa=function(a,b,c,d){var e=new g.Qm(null,void 0);
a&&g.Rm(e,a);b&&g.Sm(e,b);c&&g.Tm(e,c);d&&(e.J=d);return e},B4=function(a,b){g.Eo[a]=!0;
var c=g.Co();c&&c.publish.apply(c,arguments);g.Eo[a]=!1},C4=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Nm;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",eIa(this,a.capabilities||""),fIa(this,a.experiments||""))},eIa=function(a,b){a.capabilities.clear();
g.Me(b.split(","),g.Qa(VHa,gIa)).forEach(function(c){a.capabilities.add(c)})},fIa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},D4=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},E4=function(a,b){return!!b&&(a.id==b||a.uuid==b)},hIa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},iIa=function(a){return new D4(a)},jIa=function(a){return Array.isArray(a)?g.Pc(a,iIa):[]},F4=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},G4=function(a){return Array.isArray(a)?"["+g.Pc(a,F4).join(",")+"]":"null"},H4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},kIa=function(a){return g.Pc(a,function(b){return{key:b.id,
name:b.name}})},I4=function(a,b){return g.cb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},J4=function(a,b){return g.cb(a,function(c){return E4(c,b)})},lIa=function(){var a=(0,g.Cu)();
a&&XHa(a,a.i.Pj(!0))},K4=function(){var a=g.Fu("yt-remote-connected-devices")||[];
g.xb(a);return a},mIa=function(a){if(g.gb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Pc(a,function(d,e){return 0==e?d:d.substring(c.length)})},nIa=function(a){g.Eu("yt-remote-connected-devices",a,86400)},M4=function(){if(L4)return L4;
var a=g.Fu("yt-remote-device-id");a||(a=H4(),g.Eu("yt-remote-device-id",a,31536E3));for(var b=K4(),c=1,d=a;g.fb(b,d);)c++,d=a+"#"+c;return L4=d},N4=function(){var a=K4(),b=M4();
g.fb(a,b);g.Hu()&&g.zb(a,b);a=mIa(a);if(g.gb(a))try{g.Tq("remote_sid")}catch(c){}else try{g.Rq("remote_sid",a.join(","),-1)}catch(c){}},oIa=function(){return g.Fu("yt-remote-session-browser-channel")},pIa=function(){return g.Fu("yt-remote-local-screens")||[]},qIa=function(){g.Eu("yt-remote-lounge-token-expiration",!0,86400)},rIa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Pc(pIa(),function(d){return d.loungeToken}),c=g.Pc(a,function(d){return d.loungeToken});
g.ph(c,function(d){return!g.fb(b,d)})&&qIa();
g.Eu("yt-remote-local-screens",a,31536E3)},sIa=function(a,b){g.Eu("yt-remote-session-browser-channel",a);
g.Eu("yt-remote-session-screen-id",b);var c=K4(),d=M4();g.fb(c,d)||c.push(d);nIa(c);N4()},O4=function(a){a||(g.Gu("yt-remote-session-screen-id"),g.Gu("yt-remote-session-video-id"));
N4();a=K4();g.kb(a,M4());nIa(a)},tIa=function(){if(!P4){var a=g.go();
a&&(P4=new g.Jn(a))}},uIa=function(){tIa();
return P4?!!P4.get("yt-remote-use-staging-server"):!1},Q4=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},vIa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},wIa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},R4=function(a){a.length?xIa(a.shift(),function(){R4(a)}):S4()},yIa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},xIa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.md(d,g.pg(a));(document.head||document.documentElement).appendChild(d)},zIa=function(){var a=Q4(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20210301005222/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20210301005222/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},S4=function(){var a=wIa();
a&&a(!1,"No cast extension found")},T4=function(){if(AIa){var a=2,b=wIa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;xIa("//web.archive.org/web/20210301005222/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",S4,c)}},BIa=function(){T4();
var a=zIa();a.push("//web.archive.org/web/20210301005222/https://www.gstatic.com/eureka/clank/cast_sender.js");R4(a)},DIa=function(){T4();
var a=zIa();a.push.apply(a,g.la(CIa.map(yIa)));a.push("//web.archive.org/web/20210301005222/https://www.gstatic.com/eureka/clank/cast_sender.js");R4(a)},U4=function(a,b,c){g.E.call(this);
this.I=null!=c?(0,g.B)(a,c):a;this.If=b;this.C=(0,g.B)(this.JJ,this);this.i=!1;this.l=0;this.u=this.gb=null;this.B=[]},V4=function(a,b,c){g.E.call(this);
this.B=null!=c?a.bind(c):a;this.If=b;this.u=null;this.i=!1;this.l=0;this.gb=null},W4=function(a){a.gb=g.Lm(function(){a.gb=null;
a.i&&!a.l&&(a.i=!1,W4(a))},a.If);
var b=a.u;a.u=null;a.B.apply(null,b)},X4=function(a){if(g.A.JSON)try{return g.A.JSON.parse(a)}catch(b){}return aIa(a)},Y4=function(){},Z4=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.A.setTimeout(function(){a()},b)},a5=function(a){$4.dispatchEvent(new EIa($4,a))},EIa=function(a,b){g.Hl.call(this,"statevent",a);
this.stat=b},b5=function(){},FIa=function(){},HIa=function(a){return(a=GIa(a))?new ActiveXObject(a):new XMLHttpRequest},GIa=function(a){if(!a.l&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.l=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.l},c5=function(a,b,c,d){this.i=a;
this.l=b;this.L=c;this.J=d||1;this.C=45E3;this.B=new g.w_(this);this.u=new g.Km;this.u.setInterval(250)},JIa=function(a,b,c){a.Dp=1;
a.Uk=x4(b.clone());a.zn=c;a.I=!0;IIa(a,null)},d5=function(a,b,c,d,e){a.Dp=1;
a.Uk=x4(b.clone());a.zn=null;a.I=c;e&&(a.JG=!1);IIa(a,d)},IIa=function(a,b){a.rp=g.Sa();
e5(a);a.Pl=a.Uk.clone();y4(a.Pl,"t",a.J);a.Ds=0;a.De=a.i.xx(a.i.Yr()?b:null);0<a.tw&&(a.Pu=new V4((0,g.B)(a.GH,a,a.De),a.tw));a.B.ya(a.De,"readystatechange",a.ZP);var c=a.jm?g.Ub(a.jm):{};a.zn?(a.Cv="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.De.send(a.Pl,a.Cv,a.zn,c)):(a.Cv="GET",a.JG&&!g.Ce&&(c.Connection="close"),a.De.send(a.Pl,a.Cv,null,c));a.i.ii(1)},MIa=function(a,b,c){for(var d=!0;!a.Jm&&a.Ds<c.length;){var e=KIa(a,c);
if(e==f5){4==b&&(a.Ok=4,a5(15),d=!1);break}else if(e==LIa){a.Ok=4;a5(16);d=!1;break}else g5(a,e)}4==b&&0==c.length&&(a.Ok=1,a5(17),d=!1);a.yi=a.yi&&d;d||(h5(a),i5(a))},KIa=function(a,b){var c=a.Ds,d=b.indexOf("\n",c);
if(-1==d)return f5;c=Number(b.substring(c,d));if(isNaN(c))return LIa;d+=1;if(d+c>b.length)return f5;var e=b.substr(d,c);a.Ds=d+c;return e},OIa=function(a,b){a.rp=g.Sa();
e5(a);var c=b?window.location.hostname:"";a.Pl=a.Uk.clone();w4(a.Pl,"DOMAIN",c);w4(a.Pl,"t",a.J);try{a.Ci=new ActiveXObject("htmlfile")}catch(n){h5(a);a.Ok=7;a5(22);i5(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)h=e+"\\x3c";else if(">"==h)h=e+"\\x3e";else{if(h in j5)h=j5[h];else if(h in NIa)h=j5[h]=NIa[h];else{var l=h.charCodeAt(0);if(31<l&&127>l)var m=h;else{if(256>l){if(m="\\x",16>l||256<l)m+="0"}else m="\\u",4096>l&&(m+="0");m+=l.toString(16).toUpperCase()}h=
j5[h]=m}h=e+h}e=h}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.jd(g.fc("b/12014412"),d+"</body></html>");a.Ci.open();a.Ci.write(g.fd(c));a.Ci.close();a.Ci.parentWindow.m=(0,g.B)(a.tP,a);a.Ci.parentWindow.d=(0,g.B)(a.TF,a,!0);a.Ci.parentWindow.rpcClose=(0,g.B)(a.TF,a,!1);c=a.Ci.createElement("DIV");a.Ci.parentWindow.document.body.appendChild(c);d=g.Kc(a.Pl.toString());d=g.rd(g.Gc(d));d=g.jd(g.fc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.kd(c,d);a.i.ii(1)},e5=function(a){a.HA=g.Sa()+
a.C;
PIa(a,a.C)},PIa=function(a,b){if(null!=a.Jp)throw Error("WatchDog timer not null");
a.Jp=Z4((0,g.B)(a.BP,a),b)},k5=function(a){a.Jp&&(g.A.clearTimeout(a.Jp),a.Jp=null)},i5=function(a){a.i.GB()||a.Jm||a.i.Ss(a)},h5=function(a){k5(a);
g.Oi(a.Pu);a.Pu=null;a.u.stop();g.oCa(a.B);if(a.De){var b=a.De;a.De=null;b.abort();b.dispose()}a.Ci&&(a.Ci=null)},g5=function(a,b){try{a.i.KF(a,b),a.i.ii(4)}catch(c){}},RIa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;QIa(a,b,function(h){h?c(!0):g.A.setTimeout(function(){RIa(a,b,c,d,f)},f)})}},QIa=function(a,b,c){var d=new Image;
d.onload=function(){try{l5(d),c(!0)}catch(e){}};
d.onerror=function(){try{l5(d),c(!1)}catch(e){}};
d.onabort=function(){try{l5(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{l5(d),c(!1)}catch(e){}};
g.A.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
$Ha(d,a)},l5=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},m5=function(a){g.am.call(this);
this.headers=new g.Nm;this.ea=a||null;this.B=!1;this.ca=this.i=null;this.za=this.W="";this.I=0;this.u="";this.C=this.la=this.L=this.ga=!1;this.J=0;this.X=null;this.Ca="";this.Y=this.ia=!1},SIa=function(a){return g.Ae&&g.ae(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},TIa=function(a){return"content-type"==a.toLowerCase()},VIa=function(a,b){a.B=!1;
a.i&&(a.C=!0,a.i.abort(),a.C=!1);a.u=b;a.I=5;UIa(a);n5(a)},UIa=function(a){a.ga||(a.ga=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},XIa=function(a){if(a.B&&"undefined"!=typeof g.z_)if(a.ca[1]&&4==o5(a)&&2==a.getStatus())p5(a,"Local request error detected and ignored");
else if(a.L&&4==o5(a))g.Lm(a.HF,0,a);else if(a.dispatchEvent("readystatechange"),a.isComplete()){p5(a,"Request complete");a.B=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.Ad(1,String(a.W));if(!f&&g.A.self&&g.A.self.location){var h=g.A.self.location.protocol;f=h.substr(0,h.length-1)}e=!WIa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.I=6;try{var l=2<o5(a)?a.i.statusText:""}catch(m){l=""}a.u=l+" ["+a.getStatus()+"]";UIa(a)}}finally{n5(a)}}},n5=function(a,b){if(a.i){YIa(a);
var c=a.i,d=a.ca[0]?g.Ia:null;a.i=null;a.ca=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},YIa=function(a){a.i&&a.Y&&(a.i.ontimeout=null);
a.X&&(g.A.clearTimeout(a.X),a.X=null)},o5=function(a){return a.i?a.i.readyState:0},q5=function(a){try{return a.i?a.i.responseText:""}catch(b){return""}},p5=function(a,b){return b+" ["+a.za+" "+a.W+" "+a.getStatus()+"]"},ZIa=function(a){this.i=a;
this.l=new Y4},$Ia=function(a){var b=r5(a.i,a.kq,"/mail/images/cleardot.gif");
x4(b);RIa(b.toString(),5E3,(0,g.B)(a.AK,a),3,2E3);a.ii(1)},t5=function(a){var b=a.i.L;
if(null!=b)a5(5),b?(a5(11),s5(a.i,a,!1)):(a5(12),s5(a.i,a,!0));else if(a.Cg=new c5(a,void 0,void 0,void 0),a.Cg.jm=a.uw,b=a.i,b=r5(b,b.Yr()?a.aq:null,a.ww),a5(5),!g.Ae||g.ce(10))y4(b,"TYPE","xmlhttp"),d5(a.Cg,b,!1,a.aq,!1);else{y4(b,"TYPE","html");var c=a.Cg;a=!!a.aq;c.Dp=3;c.Uk=x4(b.clone());OIa(c,a)}},u5=function(a,b,c){this.Ma=1;
this.i=[];this.u=[];this.B=new Y4;this.J=a||null;this.L=null!=b?b:null;this.C=c||!1},aJa=function(a,b){this.i=a;
this.map=b;this.context=null},bJa=function(a,b,c,d){g.Hl.call(this,"timingevent",a);
this.size=b;this.Rr=d},cJa=function(a){g.Hl.call(this,"serverreachability",a)},fJa=function(a){dJa(a);
if(3==a.Ma){var b=a.yr++,c=a.xt.clone();w4(c,"SID",a.l);w4(c,"RID",b);w4(c,"TYPE","terminate");v5(a,c);b=new c5(a,a.l,b,void 0);b.Dp=2;b.Uk=x4(c.clone());$Ha(new Image,b.Uk.toString());b.rp=g.Sa();e5(b)}eJa(a)},gJa=function(a){a.UK(1,0);
a.xt=r5(a,null,a.xw);w5(a)},dJa=function(a){a.Yk&&(a.Yk.abort(),a.Yk=null);
a.Zd&&(a.Zd.cancel(),a.Zd=null);a.Qj&&(g.A.clearTimeout(a.Qj),a.Qj=null);x5(a);a.pg&&(a.pg.cancel(),a.pg=null);a.kl&&(g.A.clearTimeout(a.kl),a.kl=null)},hJa=function(a,b){if(0==a.Ma)throw Error("Invalid operation: sending map when state is closed");
a.i.push(new aJa(a.rM++,b));2!=a.Ma&&3!=a.Ma||w5(a)},iJa=function(a){var b=0;
a.Zd&&b++;a.pg&&b++;return b},w5=function(a){a.pg||a.kl||(a.kl=Z4((0,g.B)(a.RF,a),0),a.yo=0)},kJa=function(a,b){if(1==a.Ma){if(!b){a.yr=Math.floor(1E5*Math.random());
var c=a.yr++,d=new c5(a,"",c,void 0);d.jm=a.Ii;var e=y5(a),f=a.xt.clone();w4(f,"RID",c);w4(f,"CVER","1");v5(a,f);JIa(d,f,e);a.pg=d;a.Ma=2}}else 3==a.Ma&&(b?jJa(a,b):0==a.i.length||a.pg||jJa(a))},jJa=function(a,b){if(b)if(6<a.Km){a.i=a.u.concat(a.i);
a.u.length=0;var c=a.yr-1;var d=y5(a)}else c=b.L,d=b.zn;else c=a.yr++,d=y5(a);var e=a.xt.clone();w4(e,"SID",a.l);w4(e,"RID",c);w4(e,"AID",a.So);v5(a,e);c=new c5(a,a.l,c,a.yo+1);c.jm=a.Ii;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.pg=c;JIa(c,e,d)},v5=function(a,b){if(a.yf){var c=a.yf.rD();
c&&g.Cb(c,function(d,e){w4(b,e,d)})}},y5=function(a){var b=Math.min(a.i.length,1E3),c=["count="+b];
if(6<a.Km&&0<b){var d=a.i[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Qn:e.Qn},f++){e.Qn=a.i[f].i;var h=a.i[f].map;e.Qn=6>=a.Km?f:e.Qn-d;try{g.Cb(h,function(l){return function(m,n){c.push("req"+l.Qn+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Qn+"_type="+encodeURIComponent("_badmap"))}}a.u=a.u.concat(a.i.splice(0,b));
return c.join("&")},lJa=function(a){a.Zd||a.Qj||(a.I=1,a.Qj=Z4((0,g.B)(a.QF,a),0),a.fo=0)},z5=function(a){if(a.Zd||a.Qj||3<=a.fo)return!1;
a.I++;a.Qj=Z4((0,g.B)(a.QF,a),mJa(a,a.fo));a.fo++;return!0},s5=function(a,b,c){a.Av=c;
a.Ji=b.Nj;a.C||gJa(a)},x5=function(a){null!=a.Rm&&(g.A.clearTimeout(a.Rm),a.Rm=null)},mJa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},A5=function(a,b){if(2==b||9==b){var c=null;
a.yf&&(c=null);var d=(0,g.B)(a.HQ,a);c||(c=new g.Qm("//web.archive.org/web/20210301005222/https://www.google.com/images/cleardot.gif"),x4(c));QIa(c.toString(),1E4,d)}else a5(2);nJa(a,b)},nJa=function(a,b){a.Ma=0;
a.yf&&a.yf.HC(b);eJa(a);dJa(a)},eJa=function(a){a.Ma=0;
a.Ji=-1;if(a.yf)if(0==a.u.length&&0==a.i.length)a.yf.gx();else{g.ob(a.u);var b=g.ob(a.i);a.u.length=0;a.i.length=0;a.yf.gx(b)}},r5=function(a,b,c){var d=g.Ym(c);
if(""!=d.i)b&&g.Sm(d,b+"."+d.i),g.Tm(d,d.u);else{var e=window.location;d=dIa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Eq&&g.Cb(a.Eq,function(f,h){w4(d,h,f)});
w4(d,"VER",a.Km);v5(a,d);return d},oJa=function(){},pJa=function(){this.i=[];
this.l=[]},qJa=function(a,b){this.action=a;
this.params=b||{}},B5=function(a,b){g.E.call(this);
this.i=new g.M(this.lP,0,this);g.L(this,this.i);this.If=5E3;this.l=0;if("function"===typeof a)b&&(a=(0,g.B)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.B)(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a},C5=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.ca=a;this.I=b;this.u=new g.In;this.l=new B5(this.jQ,this);this.i=null;this.X=!1;this.C=null;this.W="";this.L=this.B=0;this.J=[];this.ea=c;this.Y=d;this.ia=e},rJa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.Av,sessionId:a.i.l,arrayId:a.i.So}},sJa=function(a,b){a.L=b||0;
a.l.stop();D5(a);a.i&&(3==a.i.getState()&&kJa(a.i),fJa(a.i));a.L=0},E5=function(a){return!!a.i&&3==a.i.getState()},D5=function(a){if(a.i){var b=a.Y(),c=a.i.Ii||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.Ii=c}},F5=function(a){this.scheme="https";
this.port=this.domain="";this.i="/api/lounge";this.l=!0;a=a||document.location.href;var b=Number(g.Ad(4,a))||"";b&&(this.port=":"+b);this.domain=g.Bd(a)||"";a=g.Vc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Dc(a,"10.0")&&(this.l=!1))},G5=function(a,b){var c=a.i;
a.l&&(c=a.scheme+"://"+a.domain+a.port+a.i);return g.Nd(c+b,{})},H5=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Qa(a.B,d,!0),onError:g.Qa(a.u,e),onTimeout:g.Qa(a.C,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Yp(b,a)},wJa=function(){var a=tJa;
uJa();I5.push(a);vJa()},J5=function(a,b){uJa();
var c=xJa(a,String(b));g.gb(I5)?yJa(c):(vJa(),g.Ab(I5,function(d){d(c)}))},uJa=function(){I5||(I5=g.Ha("yt.mdx.remote.debug.handlers_")||[],g.Da("yt.mdx.remote.debug.handlers_",I5,void 0))},yJa=function(a){var b=(K5+1)%50;
K5=b;L5[b]=a;M5||(M5=49==b)},vJa=function(){var a=I5;
if(L5[0]){var b=M5?K5:-1;do{b=(b+1)%50;var c=L5[b];g.Ab(a,function(d){d(c)})}while(b!=K5);
L5=Array(50);K5=-1;M5=!1}},xJa=function(a,b){var c=(g.Sa()-zJa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},N5=function(a){g.R.call(this);
this.I=a;this.screens=[]},AJa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0},BJa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Me(a.screens,function(f){return!!I4(b,f)});
for(var d=0,e=b.length;d<e;d++)c=AJa(a,b[d])||c;return c},CJa=function(a,b){var c=a.screens.length;
a.screens=g.Me(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},O5=function(a,b,c,d,e){g.R.call(this);
this.u=a;this.J=b;this.B=c;this.I=d;this.C=e;this.l=0;this.i=null;this.gb=NaN},Q5=function(a){N5.call(this,"LocalScreenService");
this.l=a;this.i=NaN;P5(this);this.info("Initializing with "+G4(this.screens))},DJa=function(a){if(a.screens.length){var b=g.Pc(a.screens,function(d){return d.id}),c=G5(a.l,"/pairing/get_lounge_token_batch");
H5(a.l,c,{screen_ids:b.join(",")},(0,g.B)(a.vL,a),(0,g.B)(a.uL,a))}},P5=function(a){if(g.Po("deprecate_pair_servlet_enabled"))return BJa(a,[]);
var b=jIa(pIa());b=g.Me(b,function(c){return!c.uuid});
return BJa(a,b)},R5=function(a,b){rIa(g.Pc(a.screens,hIa));
b&&qIa()},T5=function(a,b){g.R.call(this);
this.I=b;var c=g.Fu("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.I(),f=0,h=e.length;f<h;++f){var l=e[f].id;d[l]=g.fb(c,l)}this.i=d;this.C=a;this.u=this.B=NaN;this.l=null;S5("Initialized with "+g.Pj(this.i))},U5=function(a,b,c){var d=G5(a.C,"/pairing/get_screen_availability");
H5(a.C,d,{lounge_token:b.token},(0,g.B)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.B)(function(){c(!1)},a))},V5=function(a,b){a:if(z4(b)!=z4(a.i))var c=!1;
else{c=g.Jb(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(S5("Updated online screens: "+g.Pj(a.i)),a.i=b,a.V("screenChange"));EJa(a)},W5=function(a){isNaN(a.u)||g.Bo(a.u);
a.u=g.zo((0,g.B)(a.Hz,a),0<a.B&&a.B<g.Sa()?2E4:1E4)},S5=function(a){J5("OnlineScreenService",a)},FJa=function(a){var b={};
g.Ab(a.I(),function(c){c.token?b[c.token]=c.id:this.Fd("Requesting availability of screen w/o lounge token.")});
return b},EJa=function(a){a=g.Jb(g.Db(a.i,function(b){return b}));
g.xb(a);a.length?g.Eu("yt-remote-online-screen-ids",a.join(","),60):g.Gu("yt-remote-online-screen-ids")},X5=function(a){N5.call(this,"ScreenService");
this.B=a;this.i=this.l=null;this.u=[];this.C={};GJa(this)},IJa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var h=a.Pg();if(h=(c?J4(h,c):null)||J4(h,b)){h.uuid=b;var l=Y5(a,h);U5(a.i,l,function(m){e(m?l:null)})}else c?HJa(a,c,(0,g.B)(function(m){var n=Y5(this,new D4({name:d,
screenId:c,loungeToken:m,dialId:b||""}));U5(this.i,n,function(p){e(p?n:null)})},a),f):e(null)},JJa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},KJa=function(a,b,c){U5(a.i,b,c)},HJa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){var l=h&&h.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Yp(G5(a.B,"/pairing/get_lounge_token_batch"),e)},LJa=function(a){a.screens=a.l.Pg();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+G4(a.screens))},GJa=function(a){Z5(a);
a.l=new Q5(a.B);a.l.subscribe("screenChange",(0,g.B)(a.BL,a));LJa(a);a.u=jIa(g.Fu("yt-remote-automatic-screen-cache")||[]);Z5(a);a.info("Initializing automatic screens: "+G4(a.u));a.i=new T5(a.B,(0,g.B)(a.Pg,a,!0));a.i.subscribe("screenChange",(0,g.B)(function(){this.V("onlineScreenChange")},a))},Y5=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=J4(a.u,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.u.push(b),MJa(a));Z5(a);a.C[b.uuid]=b.id;g.Eu("yt-remote-device-id-map",a.C,31536E3);return b},MJa=function(a){a=g.Me(a.u,function(b){return"shortLived"!=b.idType});
g.Eu("yt-remote-automatic-screen-cache",g.Pc(a,hIa))},Z5=function(a){a.C=g.Fu("yt-remote-device-id-map")||{}},$5=function(a,b,c){g.R.call(this);
this.ia=c;this.u=a;this.i=b;this.B=null},a6=function(a,b){a.B=b;
a.V("sessionScreen",a.B)},b6=function(a,b){J5(a.ia,b)},c6=function(a,b,c){$5.call(this,a,b,"CastSession");
var d=this;this.ga=c;this.l=null;this.Y=(0,g.B)(this.OJ,this);this.ca=(0,g.B)(this.GP,this);this.X=g.zo(function(){NJa(d,null)},12E4);
this.J=this.C=this.I=this.L=0;this.ea=!1;this.W="unknown"},d6=function(a,b){g.Bo(a.J);
a.J=0;0==b?OJa(a):a.J=g.zo(function(){OJa(a)},b)},OJa=function(a){PJa(a,"getLoungeToken");
g.Bo(a.C);a.C=g.zo(function(){QJa(a,null)},3E4)},PJa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Pj(void 0));
var c={};c.type=b;a.l?a.l.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ia,(0,g.B)(function(){b6(this,"Failed to send message: "+b+".")},a)):b6(a,"Sending yt message without session: "+g.Pj(c))},e6=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.ID(b,function(c){a6(a,c)},function(){return a.cg()},5)):a.cg(Error("Waiting for session status timed out."))},SJa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new D4(b);RJa(a,d,function(e){e?(a.ea=!0,Y5(a.u,d),a6(a,d),a.W="unknown",d6(a,c)):(g.wo(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.cg())},5)},NJa=function(a,b){g.Bo(a.X);
a.X=0;b?a.ga.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?SJa(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.wo(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),e6(a,b.screenId))):(g.wo(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),
e6(a,b.screenId)):e6(a,b.screenId):a.cg(Error("Waiting for session status timed out."))},QJa=function(a,b){g.Bo(a.C);
a.C=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.W=c,d6(a,3E4)):(a.B&&(a.B.token=b.loungeToken,Y5(a.u,a.B)),a.V("sessionScreen",a.B),a.ea=!1,a.W="unknown",d6(a,b.loungeTokenRefreshIntervalMs))},RJa=function(a,b,c,d){g.Bo(a.I);
a.I=0;KJa(a.u,b,function(e){e||0>d?c(e):a.I=g.zo(function(){RJa(a,b,c,d-1)},300)})},TJa=function(a){g.Bo(a.L);
a.L=0;g.Bo(a.I);a.I=0;g.Bo(a.X);a.X=0;g.Bo(a.C);a.C=0;g.Bo(a.J);a.J=0},f6=function(a,b,c,d){$5.call(this,a,b,"DialSession");
this.ea=d;this.l=this.J=null;this.X="";this.ga=c;this.ca=null;this.W=g.Ia;this.L=NaN;this.Y=(0,g.B)(this.PJ,this);this.C=g.Ia;this.I=0},UJa=function(a){var b;
return!!(a.ea.enableDialLoungeToken&&(null==(b=a.l)?0:b.getDialAppInfo))},VJa=function(a){a.C=a.u.IB(a.X,a.i.label,a.i.friendlyName,UJa(a),function(b){a.C=g.Ia;
a6(a,b)},function(b){a.C=g.Ia;
a.cg(b)})},WJa=function(a){var b={};
b.pairingCode=a.X;b.theme=a.ga;uIa()&&(b.env_useStageMdx=1);return g.Ld(b)},g6=function(a){return new Promise(function(b){a.X=H4();
if(a.ca){var c=new chrome.cast.DialLaunchResponse(!0,WJa(a));b(c);VJa(a)}else a.W=function(){g.Bo(a.L);a.W=function(){};
a.L=NaN;var d=new chrome.cast.DialLaunchResponse(!0,WJa(a));b(d);VJa(a)},a.L=g.zo(function(){a.W()},100)})},YJa=function(a,b){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var c=new D4(b);return(new Promise(function(d){XJa(a,c,function(e){e?(Y5(a.u,c),a6(a,c)):g.wo(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));d(e)},5)})).then(function(d){return d?new chrome.cast.DialLaunchResponse(!1):g6(a)})},ZJa=function(a,b){var c=a.J.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){IJa(a.u,c,b,d,function(f){f&&f.token&&a6(a,f);e(f)},function(f){b6(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):g6(a)})},XJa=function(a,b,c,d){g.Bo(a.I);
a.I=0;KJa(a.u,b,function(e){e||0>d?c(e):a.I=g.zo(function(){XJa(a,b,c,d-1)},300)})},$Ja=function(a){g.Bo(a.I);
a.I=0;a.C();a.C=function(){};
g.Bo(a.L)},h6=function(a,b){$5.call(this,a,b,"ManualSession");
this.l=g.zo((0,g.B)(this.To,this,null),150)},i6=function(a,b){g.R.call(this);
this.B=b;this.l=a;this.L=b.appId||"233637DE";this.C=b.theme||"cl";this.W=b.disableCastApi||!1;this.i=null;this.J=!1;this.u=[];this.I=(0,g.B)(this.BO,this)},aKa=function(a,b){return b?g.cb(a.u,function(c){return E4(b,c.label)},a):null},j6=function(a){J5("Controller",a)},tJa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},k6=function(a){return a.J||!!a.u.length||!!a.i},l6=function(a,b,c){b!=a.i&&(g.Oi(a.i),(a.i=b)?(c?a.V("yt-remote-cast2-receiver-resumed",
b.i):a.V("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.B)(a.OF,a,b)),b.getScreen()?a.V("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.To(null)):a.V("yt-remote-cast2-session-change",null))},bKa=function(a){var b=a.l.HB(),c=a.i&&a.i.i;
a=g.Pc(b,function(d){c&&E4(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=aKa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},gKa=function(a,b,c,d){d.disableCastApi?m6("Cannot initialize because disabled by Mdx config."):cKa()?dKa(b,d)&&(n6(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?eKa(a,c):(window.__onGCastApiAvailable=function(e,f){e?eKa(a,c):(o6("Failed to load cast API: "+f),p6(!1),n6(!1),g.Gu("yt-remote-cast-available"),g.Gu("yt-remote-cast-receiver"),
fKa(),c(!1))},d.loadCastApiSetupScript?g.Lo("https://web.archive.org/web/20210301005222/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=Q4()&&BIa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?S4():89<=Q4()?DIa():(T4(),R4(CIa.map(yIa))))):m6("Cannot initialize because not running Chrome")},fKa=function(){m6("dispose");
var a=q6();a&&a.dispose();g.Da("yt.mdx.remote.cloudview.instance_",null,void 0);hKa(!1);g.Ho(r6);r6.length=0},s6=function(){return!!g.Fu("yt-remote-cast-installed")},iKa=function(){var a=g.Fu("yt-remote-cast-receiver");
return a?a.friendlyName:null},jKa=function(){m6("clearCurrentReceiver");
g.Gu("yt-remote-cast-receiver")},kKa=function(){return s6()?q6()?q6().getCastSession():(o6("getCastSelector: Cast is not initialized."),null):(o6("getCastSelector: Cast API is not installed!"),null)},u6=function(){s6()?q6()?t6()?(m6("Requesting cast selector."),q6().requestSession()):(m6("Wait for cast API to be ready to request the session."),r6.push(g.Go("yt-remote-cast2-api-ready",u6))):o6("requestCastSelector: Cast is not initialized."):o6("requestCastSelector: Cast API is not installed!")},v6=
function(a,b){t6()?q6().setConnectedScreenStatus(a,b):o6("setConnectedScreenStatus called before ready.")},cKa=function(){var a=0<=g.Vc.search(/ (CrMo|Chrome|CriOS)\//);
return g.DA||a},lKa=function(a,b){q6().init(a,b)},dKa=function(a,b){var c=!1;
q6()||(c=new i6(a,b),c.subscribe("yt-remote-cast2-availability-change",function(d){g.Eu("yt-remote-cast-available",d);B4("yt-remote-cast2-availability-change",d)}),c.subscribe("yt-remote-cast2-receiver-selected",function(d){m6("onReceiverSelected: "+d.friendlyName);
g.Eu("yt-remote-cast-receiver",d);B4("yt-remote-cast2-receiver-selected",d)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(d){m6("onReceiverResumed: "+d.friendlyName);
g.Eu("yt-remote-cast-receiver",d);B4("yt-remote-cast2-receiver-resumed",d)}),c.subscribe("yt-remote-cast2-session-change",function(d){m6("onSessionChange: "+F4(d));
d||g.Gu("yt-remote-cast-receiver");B4("yt-remote-cast2-session-change",d)}),g.Da("yt.mdx.remote.cloudview.instance_",c,void 0),c=!0);
m6("cloudview.createSingleton_: "+c);return c},q6=function(){return g.Ha("yt.mdx.remote.cloudview.instance_")},eKa=function(a,b){p6(!0);
n6(!1);lKa(a,function(c){c?(hKa(!0),g.Io("yt-remote-cast2-api-ready")):(o6("Failed to initialize cast API."),p6(!1),g.Gu("yt-remote-cast-available"),g.Gu("yt-remote-cast-receiver"),fKa());b(c)})},m6=function(a){J5("cloudview",a)},o6=function(a){J5("cloudview",a)},p6=function(a){m6("setCastInstalled_ "+a);
g.Eu("yt-remote-cast-installed",a)},t6=function(){return!!g.Ha("yt.mdx.remote.cloudview.apiReady_")},hKa=function(a){m6("setApiReady_ "+a);
g.Da("yt.mdx.remote.cloudview.apiReady_",a,void 0)},n6=function(a){g.Da("yt.mdx.remote.cloudview.initializing_",a,void 0)},w6=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.J=this.L=0;this.i=null;this.hasNext=this.bj=!1;this.W=this.I=this.l=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},x6=function(a){a.audioTrackId=null;
a.i=null;a.playerState=-1;a.bj=!1;a.hasNext=!1;a.L=0;a.J=g.Sa();a.C=0;a.l=0;a.I=0;a.W=0;a.B=NaN;a.u=!1},y6=function(a){return a.Kb()?(g.Sa()-a.J)/1E3:0},z6=function(a,b){a.L=b;
a.J=g.Sa()},A6=function(a){switch(a.playerState){case 1:case 1081:return(g.Sa()-a.J)/1E3+a.L;
case -1E3:return 0}return a.L},B6=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&x6(a)},C6=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Vb(a.i);b.hasPrevious=a.bj;b.hasNext=a.hasNext;b.playerTime=a.L;b.playerTimeAt=a.J;b.seekableStart=a.C;b.seekableEnd=a.l;b.duration=a.I;b.loadedTime=a.W;b.liveIngestionTime=a.B;return b},E6=function(a,b){g.R.call(this);
this.Ma=0;this.u=a;this.C=[];this.B=new pJa;this.l=this.i=null;this.L=(0,g.B)(this.dN,this);this.I=(0,g.B)(this.Ar,this);this.J=(0,g.B)(this.cN,this);this.W=(0,g.B)(this.kN,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Vz,this),mKa(this))):c=3;0!=c&&(b?this.Vz(c):g.zo((0,g.B)(function(){this.Vz(c)},this),0));
var d=kKa();d&&D6(this,d);this.subscribe("yt-remote-cast2-session-change",this.W)},F6=function(a){return new w6(a.u.getPlayerContextData())},mKa=function(a){g.Ab("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.C.push(this.u.subscribe(b,g.Qa(this.yO,b),this))},a)},nKa=function(a){g.Ab(a.C,function(b){this.u.unsubscribeByKey(b)},a);
a.C.length=0},G6=function(a){return 1==a.getState()},H6=function(a,b){var c=a.B;
50>c.i.length+c.l.length&&a.B.l.push(b)},J6=function(a,b,c){var d=F6(a);
z6(d,c);-1E3!=d.playerState&&(d.playerState=b);I6(a,d)},K6=function(a,b,c){a.u.sendMessage(b,c)},I6=function(a,b){nKa(a);
a.u.setPlayerContextData(C6(b));mKa(a)},D6=function(a,b){a.l&&(a.l.removeUpdateListener(a.L),a.l.removeMediaListener(a.I),a.Ar(null));
a.l=b;a.l&&(J5("CP","Setting cast session: "+a.l.sessionId),a.l.addUpdateListener(a.L),a.l.addMediaListener(a.I),a.l.media.length&&a.Ar(a.l.media[0]))},oKa=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=F6(a);b.contentId!=d.videoId&&J5("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;z6(d,a.i.getEstimatedTime());I6(a,d)}else J5("CP","No cast media video. Ignoring state update.")},L6=function(a,b,c){return(0,g.B)(function(d){this.Fd("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Fd("Retrying "+b+" using MDx browser channel."),K6(this,b,c))},a)},M6=function(a,b,c){g.R.call(this);
this.C=NaN;this.ca=!1;this.L=this.J=this.X=this.Y=NaN;this.W=[];this.B=this.I=this.u=this.Fb=this.i=null;this.ia=a;this.W.push(g.ap(window,"beforeunload",(0,g.B)(this.pL,this)));this.l=[];this.Fb=new w6;this.ga=b.id;this.ea=b.idType;this.i=pKa(this,c);this.i.subscribe("handlerOpened",this.hN,this);this.i.subscribe("handlerClosed",this.eN,this);this.i.subscribe("handlerError",this.fN,this);this.i.subscribe("handlerMessage",this.gN,this);this.i.Zu(b.token);this.subscribe("remoteQueueChange",function(){var d=
this.Fb.videoId;g.Hu()&&g.Eu("yt-remote-session-video-id",d)},this)},N6=function(a){J5("conn",a)},pKa=function(a,b){return new C5(G5(a.ia,"/bc"),b,!1,function(){return a.MB()},"shortLived"==a.ea)},O6=function(a,b){a.V("proxyStateChange",b)},qKa=function(a){a.C=g.zo((0,g.B)(function(){N6("Connecting timeout");
this.uo(1)},a),2E4)},P6=function(a){g.Bo(a.C);
a.C=NaN},Q6=function(a){g.Bo(a.Y);
a.Y=NaN},rKa=function(a){R6(a);
a.X=g.zo((0,g.B)(function(){S6(this,"getNowPlaying")},a),2E4)},R6=function(a){g.Bo(a.X);
a.X=NaN},tKa=function(a,b){b&&(P6(a),Q6(a));
var c=E5(a.i)&&isNaN(a.C);b==c?b&&(O6(a,1),S6(a,"getSubtitlesTrack")):b?(a.HD()&&a.Fb.reset(),O6(a,1),S6(a,"getNowPlaying"),sKa(a)):a.uo(1)},uKa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Fb.videoId&&(g.Ob(b.params)?a.Fb.i=null:a.Fb.i=b.params,a.V("remotePlayerChange"))},vKa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Fb.listId=b.params.listId||a.Fb.listId;B6(a.Fb,c,d);a.V("remoteQueueChange")},xKa=function(a,b){b.params=b.params||{};
vKa(a,b);wKa(a,b);a.V("autoplayDismissed")},wKa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
z6(a.Fb,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Fb.playerState&&(c=-1E3);a.Fb.playerState=c;c=Number(b.params.loadedTime);a.Fb.W=isNaN(c)?0:c;c=Number(b.params.duration);a.Fb.I=isNaN(c)?0:c;c=a.Fb;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.Fb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.l=isNaN(e)?0:e;1==a.Fb.playerState?rKa(a):R6(a);a.V("remotePlayerChange")},yKa=function(a,b){if(-1E3!=
a.Fb.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Fb.playerState=c;c=parseInt(b.params.currentTime,10);z6(a.Fb,isNaN(c)?0:c);a.V("remotePlayerChange")}},zKa=function(a,b){var c="true"==b.params.muted;
a.Fb.volume=parseInt(b.params.volume,10);a.Fb.muted=c;a.V("remotePlayerChange")},AKa=function(a,b){a.I=b.params.videoId;
a.V("nowAutoplaying",parseInt(b.params.timeout,10))},BKa=function(a,b){var c="true"==b.params.hasNext;
a.Fb.bj="true"==b.params.hasPrevious;a.Fb.hasNext=c;a.V("previousNextChange")},sKa=function(a){g.Bo(a.L);
a.L=g.zo((0,g.B)(a.uo,a,1),864E5)},S6=function(a,b,c){c?N6("Sending: action="+b+", params="+g.Pj(c)):N6("Sending: action="+b);
a.i.sendMessage(b,c)},T6=function(a){N5.call(this,"ScreenServiceProxy");
this.Hf=a;this.i=[];this.i.push(this.Hf.$_s("screenChange",(0,g.B)(this.TJ,this)));this.i.push(this.Hf.$_s("onlineScreenChange",(0,g.B)(this.fO,this)))},FKa=function(a,b){tIa();
if(!P4||!P4.get("yt-remote-disable-remote-module-for-dev")){b=g.P("MDX_CONFIG")||b;lIa();N4();U6||(U6=new F5(b?b.loungeApiHost:void 0),uIa()&&(U6.i="/api/loungedev"));V6||(V6=g.Ha("yt.mdx.remote.deferredProxies_")||[],g.Da("yt.mdx.remote.deferredProxies_",V6,void 0));CKa();var c=W6();if(!c){var d=new X5(U6);g.Da("yt.mdx.remote.screenService_",d,void 0);c=W6();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,disableCastApi:b.disableCastApi,
enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken});gKa(a,d,function(h){h?X6()&&v6(X6(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){B4("yt-remote-receiver-availability-change")})},e)}if(b&&!g.Ha("yt.mdx.remote.initialized_")){g.Da("yt.mdx.remote.initialized_",!0,void 0);
Y6("Initializing: "+g.Pj(b));Z6.push(g.Go("yt-remote-cast2-availability-change",function(){B4("yt-remote-receiver-availability-change")}));
Z6.push(g.Go("yt-remote-cast2-receiver-selected",function(){$6(null);B4("yt-remote-auto-connect","cast-selector-receiver")}));
Z6.push(g.Go("yt-remote-cast2-receiver-resumed",function(){B4("yt-remote-receiver-resumed","cast-selector-receiver")}));
Z6.push(g.Go("yt-remote-cast2-session-change",DKa));Z6.push(g.Go("yt-remote-connection-change",function(h){h?v6(X6(),"YouTube TV"):a7()||(v6(null,null),jKa())}));
e=b7();b.isAuto&&(e.id+="#dial");g.Po("desktop_enable_autoplay")&&(e.capabilities=["atp"]);e.name=b.device;e.app=b.app;var f=b.theme;f&&(e.theme=f);Y6(" -- with channel params: "+g.Pj(e));e?(g.Eu("yt-remote-session-app",e.app),g.Eu("yt-remote-session-name",e.name)):(g.Gu("yt-remote-session-app"),g.Gu("yt-remote-session-name"));g.Da("yt.mdx.remote.channelParams_",e,void 0);c.start();X6()||EKa()}}},GKa=function(){var a=W6().Hf.$_gos();
var b=c7();b&&d7()&&(I4(a,b)||a.push(b));return kIa(a)},e7=function(){var a=HKa();
!a&&s6()&&iKa()&&(a={key:"cast-selector-receiver",name:iKa()});return a},HKa=function(){var a=GKa(),b=c7();
b||(b=a7());return g.cb(a,function(c){return b&&E4(b,c.key)?!0:!1})},c7=function(){var a=X6();
if(!a)return null;var b=W6().Pg();return J4(b,a)},DKa=function(a){Y6("remote.onCastSessionChange_: "+F4(a));
if(a){var b=c7();if(b&&b.id==a.id){if(v6(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))f7&&(f7.token=a),(b=d7())&&b.Zu(a)}else b&&g7(),h7(a,1)}else d7()&&g7()},g7=function(){t6()?q6().stopSession():o6("stopSession called before API ready.");
var a=d7();a&&(a.disconnect(1),i7(null))},j7=function(){var a=d7();
return!!a&&3!=a.getProxyState()},Y6=function(a){J5("remote",a)},W6=function(){if(!k7){var a=g.Ha("yt.mdx.remote.screenService_");
k7=a?new T6(a):null}return k7},X6=function(){return g.Ha("yt.mdx.remote.currentScreenId_")},IKa=function(a){g.Da("yt.mdx.remote.currentScreenId_",a,void 0)},JKa=function(){return g.Ha("yt.mdx.remote.connectData_")},$6=function(a){g.Da("yt.mdx.remote.connectData_",a,void 0)},d7=function(){return g.Ha("yt.mdx.remote.connection_")},i7=function(a){var b=d7();
$6(null);a||IKa("");g.Da("yt.mdx.remote.connection_",a,void 0);V6&&(g.Ab(V6,function(c){c(a)}),V6.length=0);
b&&!a?B4("yt-remote-connection-change",!1):!b&&a&&B4("yt-remote-connection-change",!0)},a7=function(){var a=g.Hu();
if(!a)return null;var b=W6();if(!b)return null;b=b.Pg();return J4(b,a)},h7=function(a,b){X6();
c7()&&c7();if(l7)f7=a;else{IKa(a.id);var c=new M6(U6,a,b7());c.connect(b,JKa());c.subscribe("beforeDisconnect",function(d){B4("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){d7()&&(d7(),i7(null))});
c.subscribe("browserChannelAuthError",function(){var d=c7();d&&"shortLived"==d.idType&&(t6()?q6().handleBrowserChannelAuthError():o6("refreshLoungeToken called before API ready."))});
i7(c)}},EKa=function(){var a=a7();
a?(Y6("Resume connection to: "+F4(a)),h7(a,0)):(O4(),jKa(),Y6("Skipping connecting because no session screen found."))},CKa=function(){var a=b7();
if(g.Ob(a)){a=M4();var b=g.Fu("yt-remote-session-name")||"",c=g.Fu("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Da("yt.mdx.remote.channelParams_",a,void 0)}},b7=function(){return g.Ha("yt.mdx.remote.channelParams_")||{}},m7=function(a,b,c){g.E.call(this);
var d=this;this.l=a;this.G=b;this.wb=c;this.events=new g.zN(this);this.X=this.events.N(this.G,"onVolumeChange",function(e){KKa(d,e)});
this.C=!1;this.suggestion=null;this.I=new g.vK(64);this.i=new g.M(this.TG,500,this);this.u=new g.M(this.UG,1E3,this);this.L=new U4(this.YQ,0,this);this.B={};this.W=new g.M(this.wH,1E3,this);this.J=new V4(this.seekTo,1E3,this);this.Y=g.Ia;g.L(this,this.events);this.events.N(b,"onCaptionsTrackListChanged",this.ON);this.events.N(b,"captionschanged",this.aN);this.events.N(b,"captionssettingschanged",this.ZG);this.events.N(b,"videoplayerreset",this.Iu);this.events.N(b,"mdxautoplaycancel",function(){d.wb.bD()});
a=this.wb;a.na();a.subscribe("proxyStateChange",this.JF,this);a.subscribe("remotePlayerChange",this.Gr,this);a.subscribe("remoteQueueChange",this.Iu,this);a.subscribe("previousNextChange",this.GF,this);a.subscribe("nowAutoplaying",this.BF,this);a.subscribe("autoplayDismissed",this.bF,this);g.L(this,this.i);g.L(this,this.u);g.L(this,this.L);g.L(this,this.W);g.L(this,this.J);this.ZG();this.Iu();this.Gr()},KKa=function(a,b){if(n7(a)){a.wb.unsubscribe("remotePlayerChange",a.Gr,a);
var c=Math.round(b.volume),d=!!b.muted,e=F6(a.wb);if(c!==e.volume||d!==e.muted)a.wb.setVolume(c,d),a.W.start();a.wb.subscribe("remotePlayerChange",a.Gr,a)}},LKa=function(a){a.Bb(0);
a.i.stop();a.tb(new g.vK(64))},o7=function(a,b){if(n7(a)&&!a.C){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.Xb(c,b));a.wb.LB(a.G.getVideoData(1).videoId,c);a.B=F6(a.wb).i}},p7=function(a,b){var c=a.G.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.wb.playVideo(c.videoId,b,d,e,c.playerParams,c.ia,YHa(c));a.tb(new g.vK(1))},MKa=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{aE:1});
c&&c.length?(a.G.setOption("captions","track",b),a.C=!1):(a.G.loadModule("captions"),a.C=!0)}else a.G.setOption("captions","track",{})},n7=function(a){return F6(a.wb).videoId===a.G.getVideoData(1).videoId},q7=function(){g.X.call(this,{D:"div",
K:"ytp-mdx-manual-pairing-popup-dialog",U:{role:"dialog"},S:[{D:"div",K:"ytp-mdx-manual-pairing-popup-dialog-inner-content",S:[{D:"div",K:"ytp-mdx-manual-pairing-popup-title",ba:"Connecting to your TV on web using a code will be going away soon"},{D:"div",K:"ytp-mdx-manual-pairing-popup-buttons",S:[{D:"button",ka:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],ba:"Learn more"},{D:"button",ka:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],ba:"OK"}]}]}]});this.i=new g.eM(this,250);this.learnMoreButton=
this.ha("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.ha("ytp-mdx-manual-pairing-popup-ok");g.L(this,this.i);this.N(this.learnMoreButton,"click",this.l);this.N(this.okButton,"click",this.u)},r7=function(){g.X.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",U:{role:"dialog"},S:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",S:[{D:"div",K:"ytp-mdx-popup-title",ba:"You're signed out"},{D:"div",K:"ytp-mdx-popup-description",ba:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",K:"ytp-mdx-privacy-popup-buttons",S:[{D:"button",ka:["ytp-button","ytp-mdx-privacy-popup-cancel"],ba:"Cancel"},{D:"button",ka:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],ba:"Confirm"}]}]}]});this.i=new g.eM(this,250);this.cancelButton=this.ha("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.ha("ytp-mdx-privacy-popup-confirm");g.L(this,this.i);this.N(this.cancelButton,"click",this.l);this.N(this.confirmButton,"click",this.u)},s7=function(a){g.X.call(this,{D:"div",
K:"ytp-remote",S:[{D:"div",K:"ytp-remote-display-status",S:[{D:"div",K:"ytp-remote-display-status-icon",S:[g.Mma()]},{D:"div",K:"ytp-remote-display-status-text",ba:"{{statustext}}"}]}]});this.api=a;this.i=new g.eM(this,250);g.L(this,this.i);this.N(a,"presentingplayerstatechange",this.l);NKa(this,a.Wa())},NKa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
c=g.W(b,128)?g.UJ("Error on $RECEIVER_NAME",c):b.Kb()||g.W(b,4)?g.UJ("Playing on $RECEIVER_NAME",c):g.UJ("Connected to $RECEIVER_NAME",c);a.Aa("statustext",c);a.i.show()}else a.i.hide()},t7=function(a,b){g.SQ.call(this,"Play on",0,a,b);
this.G=a;this.Ml={};this.N(a,"onMdxReceiversChange",this.C);this.N(a,"presentingplayerstatechange",this.C);this.C()},u7=function(a){g.HN.call(this,a);
this.fi={key:H4(),name:"This computer"};this.lh=null;this.subscriptions=[];this.wz=this.wb=null;this.Ml=[this.fi];this.al=this.fi;this.Mc=new g.vK(64);this.wE=0;this.Ne=-1;this.Xo=null;this.Jr=this.nu=!1;this.yn=this.pp=null;if(!g.TC(this.player.T())){a=this.player;var b=g.nN(a);b&&(b=b.an())&&(b=new t7(a,b),g.L(this,b));b=new s7(a);g.L(this,b);g.xN(a,b.element,4);this.pp=new r7;g.L(this,this.pp);g.xN(a,this.pp.element,4);g.U(this.player.T().experiments,"pair_servlet_deprecation_warning_enabled")&&
!g.U(this.player.T().experiments,"deprecate_pair_servlet_enabled")&&(this.Xo=new q7,g.L(this,this.Xo),g.xN(a,this.Xo.element,4));this.Jr=!!a7();this.nu=!!g.Fu("yt-remote-manual-pairing-warning-shown")}},v7=function(a){a.yn&&(a.player.removeEventListener("presentingplayerstatechange",a.yn),a.yn=null)},OKa=function(a,b,c){a.Mc=c;
a.player.V("presentingplayerstatechange",new g.AJ(c,b))},PKa=function(a,b,c){var d=!1;
1===b?d=!a.Jr:2===b&&(d=!a.nu);d&&g.CJ(c,8)&&(a.player.pauseVideo(),v7(a))},w7=function(a,b){if(b.key!==a.al.key)if(b.key===a.fi.key)g7();
else{if(a.Xo&&!a.nu&&b!==a.fi&&"cast-selector-receiver"!==b.key&&g.mD(a.player.T()))QKa(a);else{var c;(c=!g.U(a.player.T().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.P("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.P("SESSION_INDEX")&&!g.P("LOGGED_IN")))||a.Jr||!a.pp);(c?0:g.mD(a.player.T())||g.qD(a.player.T()))&&RKa(a)}a.al=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&
g.U(a.player.T().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=f.Na(l).videoId}else h=[e];f=a.player.getCurrentTime(1);d={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.ia,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=YHa(c))&&(d.locationInfo=c);c=d}Y6("Connecting to: "+g.Pj(b));"cast-selector-receiver"==b.key?($6(c||null),c=c||null,
t6()?q6().setLaunchParams(c):o6("setLaunchParams called before ready.")):!c&&j7()&&X6()==b.key?B4("yt-remote-connection-change",!0):(g7(),$6(c||null),c=W6().Pg(),(c=J4(c,b.key))&&h7(c,1))}},RKa=function(a){a.player.Wa().Kb()?a.player.pauseVideo():(a.yn=function(b){PKa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.yn));
a.pp&&a.pp.Dc();d7()||(l7=!0)},QKa=function(a){a.player.Wa().Kb()?a.player.pauseVideo():(a.yn=function(b){PKa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.yn));
a.Xo&&a.Xo.Dc();d7()||(l7=!0)},NIa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},j5={"'":"\\'"},SKa={},gIa={VR:"atp",o1:"ska",n0:"que",vZ:"mus",n1:"sus",MV:"dsp",F0:"seq",ZY:"mic",MU:"dpa"},P4,L4="",AIa=vIa("loadCastFramework")||vIa("loadCastApplicationFramework"),CIa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ta(U4,g.E);g.k=U4.prototype;g.k.Og=function(a){this.B=arguments;this.i=!1;this.gb?this.u=g.Sa()+this.If:this.gb=g.Lm(this.C,this.If)};
g.k.stop=function(){this.gb&&(g.A.clearTimeout(this.gb),this.gb=null);this.u=null;this.i=!1;this.B=[]};
g.k.pause=function(){++this.l};
g.k.resume=function(){this.l&&(--this.l,!this.l&&this.i&&(this.i=!1,this.I.apply(null,this.B)))};
g.k.da=function(){this.stop();U4.Dd.da.call(this)};
g.k.JJ=function(){this.u?(this.gb=g.Lm(this.C,this.u-g.Sa()),this.u=null):(this.gb=null,this.l?this.i=!0:(this.i=!1,this.I.apply(null,this.B)))};g.u(V4,g.E);g.k=V4.prototype;g.k.Og=function(a){this.u=arguments;this.gb||this.l?this.i=!0:W4(this)};
g.k.stop=function(){this.gb&&(g.A.clearTimeout(this.gb),this.gb=null,this.i=!1,this.u=null)};
g.k.pause=function(){this.l++};
g.k.resume=function(){this.l--;this.l||!this.i||this.gb||(this.i=!1,W4(this))};
g.k.da=function(){g.E.prototype.da.call(this);this.stop()};Y4.prototype.stringify=function(a){return g.A.JSON.stringify(a,void 0)};
Y4.prototype.parse=function(a){return g.A.JSON.parse(a,void 0)};var $4=new g.am;g.u(EIa,g.Hl);b5.prototype.i=null;b5.prototype.getOptions=function(){var a;(a=this.i)||(a={},GIa(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var x7;g.Ta(FIa,b5);x7=new FIa;g.k=c5.prototype;g.k.jm=null;g.k.yi=!1;g.k.Jp=null;g.k.HA=null;g.k.rp=null;g.k.Dp=null;g.k.Uk=null;g.k.Pl=null;g.k.zn=null;g.k.De=null;g.k.Ds=0;g.k.Ci=null;g.k.Cv=null;g.k.Ok=null;g.k.Zp=-1;g.k.JG=!0;g.k.Jm=!1;g.k.tw=0;g.k.Pu=null;var LIa={},f5={};g.k=c5.prototype;g.k.setTimeout=function(a){this.C=a};
g.k.ZP=function(a){a=a.target;var b=this.Pu;b&&3==o5(a)?b.Og():this.GH(a)};
g.k.GH=function(a){try{if(a==this.De)a:{var b=o5(this.De),c=this.De.I,d=this.De.getStatus();if(g.Ae&&!g.ce(10)||g.Ce&&!g.ae("420+")){if(4>b)break a}else if(3>b||3==b&&!g.ug&&!q5(this.De))break a;this.Jm||4!=b||7==c||(8==c||0>=d?this.i.ii(3):this.i.ii(2));k5(this);var e=this.De.getStatus();this.Zp=e;var f=q5(this.De);(this.yi=200==e)?(4==b&&h5(this),this.I?(MIa(this,b,f),g.ug&&this.yi&&3==b&&(this.B.ya(this.u,"tick",this.SP),this.u.start())):g5(this,f),this.yi&&!this.Jm&&(4==b?this.i.Ss(this):(this.yi=
!1,e5(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Ok=3,a5(13)):(this.Ok=0,a5(14)),h5(this),i5(this))}}catch(h){this.De&&q5(this.De)}finally{}};
g.k.SP=function(){var a=o5(this.De),b=q5(this.De);this.Ds<b.length&&(k5(this),MIa(this,a,b),this.yi&&4!=a&&e5(this))};
g.k.tP=function(a){Z4((0,g.B)(this.sP,this,a),0)};
g.k.sP=function(a){this.Jm||(k5(this),g5(this,a),e5(this))};
g.k.TF=function(a){Z4((0,g.B)(this.rP,this,a),0)};
g.k.rP=function(a){this.Jm||(h5(this),this.yi=a,this.i.Ss(this),this.i.ii(4))};
g.k.cancel=function(){this.Jm=!0;h5(this)};
g.k.BP=function(){this.Jp=null;var a=g.Sa();0<=a-this.HA?(2!=this.Dp&&this.i.ii(3),h5(this),this.Ok=2,a5(18),i5(this)):PIa(this,this.HA-a)};
g.k.getLastError=function(){return this.Ok};g.Ta(m5,g.am);var WIa=/^https?$/i,TKa=["POST","PUT"];g.k=m5.prototype;
g.k.send=function(a,b,c,d){if(this.i)throw Error("[goog.net.XhrIo] Object is active with another request="+this.W+"; newUri="+a);b=b?b.toUpperCase():"GET";this.W=a;this.u="";this.I=0;this.za=b;this.ga=!1;this.B=!0;this.i=this.ea?HIa(this.ea):HIa(x7);this.ca=this.ea?this.ea.getOptions():x7.getOptions();this.i.onreadystatechange=(0,g.B)(this.HF,this);try{A4(p5(this,"Opening Xhr")),this.la=!0,this.i.open(b,String(a),!0),this.la=!1}catch(f){A4(p5(this,"Error opening Xhr: "+f.message));VIa(this,f);return}a=
c||"";var e=this.headers.clone();d&&cIa(d,function(f,h){e.set(h,f)});
d=g.cb(e.rh(),TIa);c=g.A.FormData&&a instanceof g.A.FormData;!g.fb(TKa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.i.setRequestHeader(h,f)},this);
this.Ca&&(this.i.responseType=this.Ca);"withCredentials"in this.i&&this.i.withCredentials!==this.ia&&(this.i.withCredentials=this.ia);try{YIa(this),0<this.J&&(this.Y=SIa(this.i),A4(p5(this,"Will abort after "+this.J+"ms if incomplete, xhr2 "+this.Y)),this.Y?(this.i.timeout=this.J,this.i.ontimeout=(0,g.B)(this.FB,this)):this.X=g.Lm(this.FB,this.J,this)),A4(p5(this,"Sending request")),this.L=!0,this.i.send(a),this.L=!1}catch(f){A4(p5(this,"Send error: "+f.message)),VIa(this,f)}};
g.k.FB=function(){"undefined"!=typeof g.z_&&this.i&&(this.u="Timed out after "+this.J+"ms, aborting",this.I=8,p5(this,this.u),this.dispatchEvent("timeout"),this.abort(8))};
g.k.abort=function(a){this.i&&this.B&&(p5(this,"Aborting"),this.B=!1,this.C=!0,this.i.abort(),this.C=!1,this.I=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),n5(this))};
g.k.da=function(){this.i&&(this.B&&(this.B=!1,this.C=!0,this.i.abort(),this.C=!1),n5(this,!0));m5.Dd.da.call(this)};
g.k.HF=function(){this.na()||(this.la||this.L||this.C?XIa(this):this.AO())};
g.k.AO=function(){XIa(this)};
g.k.isActive=function(){return!!this.i};
g.k.isComplete=function(){return 4==o5(this)};
g.k.getStatus=function(){try{return 2<o5(this)?this.i.status:-1}catch(a){return-1}};
g.k.getResponseHeader=function(a){if(this.i&&this.isComplete())return a=this.i.getResponseHeader(a),null===a?void 0:a};
g.k.getLastError=function(){return"string"===typeof this.u?this.u:String(this.u)};g.k=ZIa.prototype;g.k.uw=null;g.k.Cg=null;g.k.Qu=!1;g.k.VG=null;g.k.wt=null;g.k.Ny=null;g.k.ww=null;g.k.Ma=null;g.k.Nj=-1;g.k.aq=null;g.k.kq=null;g.k.connect=function(a){this.ww=a;a=r5(this.i,null,this.ww);a5(3);this.VG=g.Sa();var b=this.i.J;null!=b?(this.aq=b[0],(this.kq=b[1])?(this.Ma=1,$Ia(this)):(this.Ma=2,t5(this))):(y4(a,"MODE","init"),this.Cg=new c5(this,void 0,void 0,void 0),this.Cg.jm=this.uw,d5(this.Cg,a,!1,null,!0),this.Ma=0)};
g.k.AK=function(a){if(a)this.Ma=2,t5(this);else{a5(4);var b=this.i;b.Ji=b.Yk.Nj;A5(b,9)}a&&this.ii(2)};
g.k.xx=function(a){return this.i.xx(a)};
g.k.abort=function(){this.Cg&&(this.Cg.cancel(),this.Cg=null);this.Nj=-1};
g.k.GB=function(){return!1};
g.k.KF=function(a,b){this.Nj=a.Zp;if(0==this.Ma)if(b){try{var c=this.l.parse(b)}catch(d){c=this.i;c.Ji=this.Nj;A5(c,2);return}this.aq=c[0];this.kq=c[1]}else c=this.i,c.Ji=this.Nj,A5(c,2);else if(2==this.Ma)if(this.Qu)a5(7),this.Ny=g.Sa();else if("11111"==b){if(a5(6),this.Qu=!0,this.wt=g.Sa(),c=this.wt-this.VG,!g.Ae||g.ce(10)||500>c)this.Nj=200,this.Cg.cancel(),a5(12),s5(this.i,this,!0)}else a5(8),this.wt=this.Ny=g.Sa(),this.Qu=!1};
g.k.Ss=function(){this.Nj=this.Cg.Zp;if(this.Cg.yi)0==this.Ma?this.kq?(this.Ma=1,$Ia(this)):(this.Ma=2,t5(this)):2==this.Ma&&((!g.Ae||g.ce(10)?!this.Qu:200>this.Ny-this.wt)?(a5(11),s5(this.i,this,!1)):(a5(12),s5(this.i,this,!0)));else{0==this.Ma?a5(9):2==this.Ma&&a5(10);var a=this.i;this.Cg.getLastError();a.Ji=this.Nj;A5(a,2)}};
g.k.Yr=function(){return this.i.Yr()};
g.k.isActive=function(){return this.i.isActive()};
g.k.ii=function(a){this.i.ii(a)};g.k=u5.prototype;g.k.Ii=null;g.k.Eq=null;g.k.pg=null;g.k.Zd=null;g.k.xw=null;g.k.xt=null;g.k.uC=null;g.k.Ts=null;g.k.yr=0;g.k.rM=0;g.k.yf=null;g.k.kl=null;g.k.Qj=null;g.k.Rm=null;g.k.Yk=null;g.k.Av=null;g.k.So=-1;g.k.vE=-1;g.k.Ji=-1;g.k.yo=0;g.k.fo=0;g.k.Km=8;g.Ta(bJa,g.Hl);g.Ta(cJa,g.Hl);g.k=u5.prototype;g.k.connect=function(a,b,c,d,e){a5(0);this.xw=b;this.Eq=c||{};d&&void 0!==e&&(this.Eq.OSID=d,this.Eq.OAID=e);this.C?(Z4((0,g.B)(this.NC,this,a),100),gJa(this)):this.NC(a)};
g.k.NC=function(a){this.Yk=new ZIa(this);this.Yk.uw=this.Ii;this.Yk.l=this.B;this.Yk.connect(a)};
g.k.GB=function(){return 0==this.Ma};
g.k.getState=function(){return this.Ma};
g.k.RF=function(a){this.kl=null;kJa(this,a)};
g.k.QF=function(){this.Qj=null;this.Zd=new c5(this,this.l,"rpc",this.I);this.Zd.jm=this.Ii;this.Zd.tw=0;var a=this.uC.clone();w4(a,"RID","rpc");w4(a,"SID",this.l);w4(a,"CI",this.Av?"0":"1");w4(a,"AID",this.So);v5(this,a);if(!g.Ae||g.ce(10))w4(a,"TYPE","xmlhttp"),d5(this.Zd,a,!0,this.Ts,!1);else{w4(a,"TYPE","html");var b=this.Zd,c=!!this.Ts;b.Dp=3;b.Uk=x4(a.clone());OIa(b,c)}};
g.k.KF=function(a,b){if(0!=this.Ma&&(this.Zd==a||this.pg==a))if(this.Ji=a.Zp,this.pg==a&&3==this.Ma)if(7<this.Km){try{var c=this.B.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Qj){if(this.Zd)if(this.Zd.rp+3E3<this.pg.rp)x5(this),this.Zd.cancel(),this.Zd=null;else break a;z5(this);a5(19)}}else this.vE=c[1],0<this.vE-this.So&&37500>c[2]&&this.Av&&0==this.fo&&!this.Rm&&(this.Rm=Z4((0,g.B)(this.WM,this),6E3));else A5(this,11)}else b!=SKa.AU.i&&A5(this,11);else if(this.Zd==
a&&x5(this),!g.qc(b)){c=this.B.parse(b);for(var d=0;d<c.length;d++){var e=c[d];this.So=e[0];e=e[1];2==this.Ma?"c"==e[0]?(this.l=e[1],this.Ts=e[2],e=e[3],null!=e?this.Km=e:this.Km=6,this.Ma=3,this.yf&&this.yf.JC(),this.uC=r5(this,this.Yr()?this.Ts:null,this.xw),lJa(this)):"stop"==e[0]&&A5(this,7):3==this.Ma&&("stop"==e[0]?A5(this,7):"noop"!=e[0]&&this.yf&&this.yf.IC(e),this.fo=0)}}};
g.k.WM=function(){null!=this.Rm&&(this.Rm=null,this.Zd.cancel(),this.Zd=null,z5(this),a5(20))};
g.k.Ss=function(a){if(this.Zd==a){x5(this);this.Zd=null;var b=2}else if(this.pg==a)this.pg=null,b=1;else return;this.Ji=a.Zp;if(0!=this.Ma)if(a.yi)1==b?(b=$4,b.dispatchEvent(new bJa(b,a.zn?a.zn.length:0,g.Sa()-a.rp,this.yo)),w5(this),this.u.length=0):lJa(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Ji)){if(d=1==b)this.pg||this.kl||1==this.Ma||2<=this.yo?d=!1:(this.kl=Z4((0,g.B)(this.RF,this,a),mJa(this,this.yo)),this.yo++,d=!0);d=!(d||2==b&&z5(this))}if(d)switch(c){case 1:A5(this,
5);break;case 4:A5(this,10);break;case 3:A5(this,6);break;case 7:A5(this,12);break;default:A5(this,2)}}};
g.k.UK=function(a){if(!g.fb(arguments,this.Ma))throw Error("Unexpected channel state: "+this.Ma);};
g.k.HQ=function(a){a?a5(2):(a5(1),nJa(this,8))};
g.k.xx=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new m5;a.ia=!1;return a};
g.k.isActive=function(){return!!this.yf&&this.yf.isActive(this)};
g.k.ii=function(a){var b=$4;b.dispatchEvent(new cJa(b,a))};
g.k.Yr=function(){return!(!g.Ae||g.ce(10))};
g.k=oJa.prototype;g.k.JC=function(){};
g.k.IC=function(){};
g.k.HC=function(){};
g.k.gx=function(){};
g.k.rD=function(){return{}};
g.k.isActive=function(){return!0};g.k=pJa.prototype;g.k.isEmpty=function(){return g.gb(this.i)&&g.gb(this.l)};
g.k.clear=function(){this.i=[];this.l=[]};
g.k.contains=function(a){return g.fb(this.i,a)||g.fb(this.l,a)};
g.k.remove=function(a){var b=this.i;var c=(0,g.tCa)(b,a);0<=c?(g.jb(b,c),b=!0):b=!1;return b||g.kb(this.l,a)};
g.k.sg=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.l.length;for(b=0;b<c;++b)a.push(this.l[b]);return a};g.Ta(B5,g.E);g.k=B5.prototype;g.k.lP=function(){this.If=Math.min(3E5,2*this.If);this.u();this.l&&this.start()};
g.k.start=function(){var a=this.If+15E3*Math.random();g.kn(this.i,a);this.l=g.Sa()+a};
g.k.stop=function(){this.i.stop();this.l=0};
g.k.isActive=function(){return this.i.isActive()};
g.k.reset=function(){this.i.stop();this.If=5E3};g.Ta(C5,oJa);g.k=C5.prototype;g.k.subscribe=function(a,b,c){return this.u.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.u.unsubscribe(a,b,c)};
g.k.Of=function(a){return this.u.Of(a)};
g.k.V=function(a,b){return this.u.V.apply(this.u,arguments)};
g.k.dispose=function(){this.X||(this.X=!0,g.Oi(this.u),sJa(this),g.Oi(this.l),this.l=null,this.Y=function(){return""})};
g.k.na=function(){return this.X};
g.k.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.W="";this.l.stop();this.C=a||null;this.B=b||0;a=this.ca+"/test";b=this.ca+"/bind";var d=new u5(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ea),e=this.i;e&&(e.yf=null);d.yf=this;this.i=d;D5(this);if(this.i){d=g.P("ID_TOKEN");var f=this.i.Ii||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.Ii=f}e?(3!=e.getState()&&0==iJa(e)||e.getState(),this.i.connect(a,b,this.I,e.l,e.So)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){var c={_sc:a};b&&g.Xb(c,b);this.l.isActive()||2==(this.i?this.i.getState():0)?this.J.push(c):E5(this)&&(D5(this),hJa(this.i,c))};
g.k.JC=function(){this.l.reset();this.C=null;this.B=0;if(this.J.length){var a=this.J;this.J=[];for(var b=0,c=a.length;b<c;++b)hJa(this.i,a[b])}this.V("handlerOpened")};
g.k.HC=function(a){var b=2==a&&401==this.i.Ji;4==a||b||this.l.start();this.V("handlerError",a,b)};
g.k.gx=function(a){if(!this.l.isActive())this.V("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.J.push(d)}};
g.k.rD=function(){var a={v:2};this.W&&(a.gsessionid=this.W);0!=this.B&&(a.ui=""+this.B);0!=this.L&&(a.ui=""+this.L);this.C&&g.Xb(a,this.C);return a};
g.k.IC=function(a){"S"==a[0]?this.W=a[1]:"gracefulReconnect"==a[0]?(this.l.start(),fJa(this.i)):this.V("handlerMessage",new qJa(a[0],a[1]))};
g.k.Zu=function(a){(this.I.loungeIdToken=a)||this.l.stop();if(this.ia&&this.i){var b=this.i.Ii||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.Ii=b}};
g.k.jQ=function(){this.l.isActive();0==iJa(this.i)&&this.connect(this.C,this.B)};F5.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
F5.prototype.u=function(a,b){a(Error("Request error: "+b.status))};
F5.prototype.C=function(a){a(Error("request timed out"))};var zJa=g.Sa(),I5=null,L5=Array(50),K5=-1,M5=!1;g.Ta(N5,g.R);N5.prototype.Pg=function(){return this.screens};
N5.prototype.contains=function(a){return!!I4(this.screens,a)};
N5.prototype.get=function(a){return a?J4(this.screens,a):null};
N5.prototype.info=function(a){J5(this.I,a)};g.u(O5,g.R);g.k=O5.prototype;g.k.start=function(){!this.i&&isNaN(this.gb)&&this.dG()};
g.k.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.gb)||(g.Bo(this.gb),this.gb=NaN)};
g.k.da=function(){this.stop();g.R.prototype.da.call(this)};
g.k.dG=function(){this.gb=NaN;this.i=g.Yp(G5(this.u,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.B)(this.LJ,this),onError:(0,g.B)(this.KJ,this),onTimeout:(0,g.B)(this.MJ,this)})};
g.k.LJ=function(a,b){this.i=null;var c=b.screen||{};c.dialId=this.B;c.name=this.I;var d=-1;this.C&&c.shortLivedLoungeToken&&c.shortLivedLoungeToken.value&&c.shortLivedLoungeToken.refreshIntervalMs&&(c.screenIdType="shortLived",c.loungeToken=c.shortLivedLoungeToken.value,d=c.shortLivedLoungeToken.refreshIntervalMs);this.V("pairingComplete",new D4(c),d)};
g.k.KJ=function(a){this.i=null;a.status&&404==a.status?this.l>=UKa.length?this.V("pairingFailed",Error("DIAL polling timed out")):(a=UKa[this.l],this.gb=g.zo((0,g.B)(this.dG,this),a),this.l++):this.V("pairingFailed",Error("Server error "+a.status))};
g.k.MJ=function(){this.i=null;this.V("pairingFailed",Error("Server not responding"))};
var UKa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ta(Q5,N5);g.k=Q5.prototype;g.k.start=function(){P5(this)&&this.V("screenChange");!g.Fu("yt-remote-lounge-token-expiration")&&DJa(this);g.Bo(this.i);this.i=g.zo((0,g.B)(this.start,this),1E4)};
g.k.add=function(a,b){P5(this);AJa(this,a);R5(this,!1);this.V("screenChange");b(a);a.token||DJa(this)};
g.k.remove=function(a,b){var c=P5(this);CJa(this,a)&&(R5(this,!1),c=!0);b(a);c&&this.V("screenChange")};
g.k.yv=function(a,b,c,d){var e=P5(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,R5(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.V("screenChange")};
g.k.da=function(){g.Bo(this.i);Q5.Dd.da.call(this)};
g.k.vL=function(a){P5(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}R5(this,!b);b&&J5(this.I,"Missed "+b+" lounge tokens.")};
g.k.uL=function(a){J5(this.I,"Requesting lounge tokens failed: "+a)};g.u(T5,g.R);g.k=T5.prototype;g.k.start=function(){var a=parseInt(g.Fu("yt-remote-fast-check-period")||"0",10);(this.B=g.Sa()-144E5<a?0:a)?W5(this):(this.B=g.Sa()+3E5,g.Eu("yt-remote-fast-check-period",this.B),this.Hz())};
g.k.isEmpty=function(){return g.Ob(this.i)};
g.k.update=function(){S5("Updating availability on schedule.");var a=this.I(),b=g.Db(this.i,function(c,d){return c&&!!J4(a,d)},this);
V5(this,b)};
g.k.da=function(){g.Bo(this.u);this.u=NaN;this.l&&(this.l.abort(),this.l=null);g.R.prototype.da.call(this)};
g.k.Hz=function(){g.Bo(this.u);this.u=NaN;this.l&&this.l.abort();var a=FJa(this);if(z4(a)){var b=G5(this.C,"/pairing/get_screen_availability");this.l=H5(this.C,b,{lounge_token:g.Jb(a).join(",")},(0,g.B)(this.UO,this,a),(0,g.B)(this.TO,this))}else V5(this,{}),W5(this)};
g.k.UO=function(a,b){this.l=null;var c=g.Jb(FJa(this));if(g.yb(c,g.Jb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;V5(this,d);W5(this)}else this.Fd("Changing Screen set during request."),this.Hz()};
g.k.TO=function(a){this.Fd("Screen availability failed: "+a);this.l=null;W5(this)};
g.k.Fd=function(a){J5("OnlineScreenService",a)};g.Ta(X5,N5);g.k=X5.prototype;g.k.start=function(){this.l.start();this.i.start();this.screens.length&&(this.V("screenChange"),this.i.isEmpty()||this.V("onlineScreenChange"))};
g.k.add=function(a,b,c){this.l.add(a,b,c)};
g.k.remove=function(a,b,c){this.l.remove(a,b,c);this.i.update()};
g.k.yv=function(a,b,c,d){this.l.contains(a)?this.l.yv(a,b,c,d):(a="Updating name of unknown screen: "+a.name,J5(this.I,a),d(Error(a)))};
g.k.Pg=function(a){return a?this.screens:g.nb(this.screens,g.Me(this.u,function(b){return!this.contains(b)},this))};
g.k.HB=function(){return g.Me(this.Pg(!0),function(a){return!!this.i.i[a.id]},this)};
g.k.IB=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new O5(this.B,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.Oi(l);e(Y5(h,m),n)});
l.subscribe("pairingFailed",function(m){g.Oi(l);f(m)});
l.start();return(0,g.B)(l.stop,l)};
g.k.NJ=function(a,b,c,d){g.Yp(G5(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.B)(function(e,f){var h=new D4(f.screen||{});if(!h.name||JJa(this,h.name)){a:{var l=h.name;for(var m=2,n=b(l,m);JJa(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}h.name=l}c(Y5(this,h))},this),
onError:(0,g.B)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.B)(function(){d(Error("pairing request timed out."))},this)})};
g.k.da=function(){g.Oi(this.l);g.Oi(this.i);X5.Dd.da.call(this)};
g.k.BL=function(){LJa(this);this.V("screenChange");this.i.update()};
X5.prototype.dispose=X5.prototype.dispose;g.Ta($5,g.R);g.k=$5.prototype;g.k.getScreen=function(){return this.B};
g.k.cg=function(a){this.na()||(a&&b6(this,""+a),this.B=null,this.V("sessionScreen",null))};
g.k.info=function(a){J5(this.ia,a)};
g.k.JB=function(){return null};
g.k.Sz=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.B)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.B)(function(){b6(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.da=function(){this.Sz("");$5.Dd.da.call(this)};g.u(c6,$5);g.k=c6.prototype;g.k.Rz=function(a){if(this.l){if(this.l==a)return;b6(this,"Overriding cast session with new session object");TJa(this);this.ea=!1;this.W="unknown";this.l.removeUpdateListener(this.Y);this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ca)}this.l=a;this.l.addUpdateListener(this.Y);this.l.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.ca);PJa(this,"getMdxSessionStatus")};
g.k.To=function(a){this.info("launchWithParams no-op for Cast: "+g.Pj(a))};
g.k.stop=function(){this.l?this.l.stop((0,g.B)(function(){this.cg()},this),(0,g.B)(function(){this.cg(Error("Failed to stop receiver app."))},this)):this.cg(Error("Stopping cast device without session."))};
g.k.Sz=function(){};
g.k.da=function(){this.info("disposeInternal");TJa(this);this.l&&(this.l.removeUpdateListener(this.Y),this.l.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ca));this.l=null;$5.prototype.da.call(this)};
g.k.GP=function(a,b){if(!this.na())if(b){var c=X4(b);if(g.Na(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Pj(c));switch(d){case "mdxSessionStatus":NJa(this,c);break;case "loungeToken":QJa(this,c);break;default:b6(this,"Unknown youtube message: "+d)}}else b6(this,"Unable to parse message.")}else b6(this,"No data in message.")};
g.k.ID=function(a,b,c,d){g.Bo(this.L);this.L=0;IJa(this.u,this.i.label,a,this.i.friendlyName,(0,g.B)(function(e){e?b(e):0<=d?(b6(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.L=g.zo((0,g.B)(this.ID,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.JB=function(){return this.l};
g.k.OJ=function(a){this.na()||a||(b6(this,"Cast session died."),this.cg())};g.u(f6,$5);g.k=f6.prototype;g.k.Rz=function(a){this.l=a;this.l.addUpdateListener(this.Y)};
g.k.To=function(a){this.ca=a;this.W()};
g.k.stop=function(){$Ja(this);this.l?this.l.stop((0,g.B)(this.cg,this,null),(0,g.B)(this.cg,this,"Failed to stop DIAL device.")):this.cg()};
g.k.da=function(){$Ja(this);this.l&&this.l.removeUpdateListener(this.Y);this.l=null;$5.prototype.da.call(this)};
g.k.PJ=function(a){this.na()||a||(b6(this,"DIAL session died."),this.C(),this.C=g.Ia,this.cg())};g.u(h6,$5);h6.prototype.stop=function(){this.cg()};
h6.prototype.Rz=function(){};
h6.prototype.To=function(){g.Bo(this.l);this.l=NaN;var a=J4(this.u.Pg(),this.i.label);a?a6(this,a):this.cg(Error("No such screen"))};
h6.prototype.da=function(){g.Bo(this.l);this.l=NaN;$5.prototype.da.call(this)};g.u(i6,g.R);g.k=i6.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.L);this.W||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.B)(this.EO,this);c=new chrome.cast.ApiConfig(c,(0,g.B)(this.MF,this),f,d,e);c.customDialLaunchCallback=(0,g.B)(this.rN,this);chrome.cast.initialize(c,(0,g.B)(function(){this.na()||
(chrome.cast.addReceiverActionListener(this.I),wJa(),this.l.subscribe("onlineScreenChange",(0,g.B)(this.KB,this)),this.u=bKa(this),chrome.cast.setCustomReceivers(this.u,g.Ia,(0,g.B)(function(h){this.Fd("Failed to set initial custom receivers: "+g.Pj(h))},this)),this.V("yt-remote-cast2-availability-change",k6(this)),b(!0))},this),(0,g.B)(function(h){this.Fd("Failed to initialize API: "+g.Pj(h));
b(!1)},this))};
g.k.qQ=function(a,b){j6("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)j6("Unsetting old screen status: "+this.i.i.friendlyName),l6(this,null)}if(a&&b){if(!this.i){c=J4(this.l.Pg(),a);if(!c){j6("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){j6("setConnectedScreenStatus: Screen with id type to be short lived.");return}var d=aKa(this,c);d||(j6("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.u.push(d),chrome.cast.setCustomReceivers(this.u,g.Ia,(0,g.B)(function(e){this.Fd("Failed to set initial custom receivers: "+g.Pj(e))},this)));
j6("setConnectedScreenStatus: new active receiver: "+d.friendlyName);l6(this,new h6(this.l,d),!0)}this.i.Sz(b)}else j6("setConnectedScreenStatus: no screen.")};
g.k.rQ=function(a){this.na()?this.Fd("Setting connection data on disposed cast v2"):this.i?this.i.To(a):this.Fd("Setting connection data without a session")};
g.k.RJ=function(){this.na()?this.Fd("Stopping session on disposed cast v2"):this.i?(this.i.stop(),l6(this,null)):j6("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.B)(this.MF,this),(0,g.B)(this.XO,this))};
g.k.da=function(){this.l.unsubscribe("onlineScreenChange",(0,g.B)(this.KB,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.I);var a=tJa,b=g.Ha("yt.mdx.remote.debug.handlers_");g.kb(b||[],a);g.Oi(this.i);g.R.prototype.da.call(this)};
g.k.Fd=function(a){J5("Controller",a)};
g.k.OF=function(a,b){this.i==a&&(b||l6(this,null),this.V("yt-remote-cast2-session-change",b))};
g.k.BO=function(a,b){if(!this.na())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),j6("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)j6("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{j6("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.V("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:l6(this,
new h6(this.l,a));break;case chrome.cast.ReceiverType.DIAL:l6(this,new f6(this.l,a,this.C,this.B));break;case chrome.cast.ReceiverType.CAST:l6(this,new c6(this.l,a,this.B));break;default:this.Fd("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.Fd("Stopping receiver w/o session: "+a.friendlyName)}else this.Fd("onReceiverAction_ called without receiver.")};
g.k.rN=function(a){if(this.na())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Fd("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.Fd("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return j6("Reselecting dial screen."),
this.V("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Fd('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);l6(this,new f6(this.l,b,this.C,this.B))}b=this.i;b.J=a;b.J.appState==chrome.cast.DialAppState.RUNNING?(a=b.J.extraData||{},c=a.screenId||null,UJa(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=YJa(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.J.receiver.label,
screenIdType:"shortLived"}):(g.wo(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=ZJa(b,c)):a=ZJa(b,c)):a=g6(b);return a};
g.k.MF=function(a){if(!this.na()){j6("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(b.receiverType==chrome.cast.ReceiverType.CAST)j6("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),l6(this,new c6(this.l,b,this.B),!0);else{this.Fd("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.i.i,d=J4(this.l.Pg(),c.label);d&&E4(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(j6("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Oi(this.i),this.i=new c6(this.l,b,this.B),this.i.subscribe("sessionScreen",(0,g.B)(this.OF,this,this.i)),this.i.To(null));this.i.Rz(a)}}};
g.k.QJ=function(){return this.i?this.i.JB():null};
g.k.XO=function(a){this.na()||(this.Fd("Failed to estabilish a session: "+g.Pj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&l6(this,null))};
g.k.EO=function(a){j6("Receiver availability updated: "+a);if(!this.na()){var b=k6(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;k6(this)!=b&&this.V("yt-remote-cast2-availability-change",k6(this))}};
g.k.KB=function(){this.na()||(this.u=bKa(this),j6("Updating custom receivers: "+g.Pj(this.u)),chrome.cast.setCustomReceivers(this.u,g.Ia,(0,g.B)(function(){this.Fd("Failed to set custom receivers.")},this)),this.V("yt-remote-cast2-availability-change",k6(this)))};
i6.prototype.setLaunchParams=i6.prototype.rQ;i6.prototype.setConnectedScreenStatus=i6.prototype.qQ;i6.prototype.stopSession=i6.prototype.RJ;i6.prototype.getCastSession=i6.prototype.QJ;i6.prototype.requestSession=i6.prototype.requestSession;i6.prototype.init=i6.prototype.init;i6.prototype.dispose=i6.prototype.dispose;var r6=[];g.k=w6.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";x6(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.i=a.trackData,this.bj=a.hasPrevious,this.hasNext=a.hasNext,this.L=a.playerTime,this.J=a.playerTimeAt,this.C=a.seekableStart,this.l=a.seekableEnd,this.I=a.duration,this.W=a.loadedTime,this.B=a.liveIngestionTime,this.u=!isNaN(this.B))};
g.k.Kb=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.getDuration=function(){return this.u?this.I+y6(this):this.I};
g.k.clone=function(){return new w6(C6(this))};g.u(E6,g.R);g.k=E6.prototype;g.k.getState=function(){return this.Ma};
g.k.play=function(){G6(this)?(this.i?this.i.play(null,g.Ia,L6(this,"play")):K6(this,"play"),J6(this,1,A6(F6(this))),this.V("remotePlayerChange")):H6(this,this.play)};
g.k.pause=function(){G6(this)?(this.i?this.i.pause(null,g.Ia,L6(this,"pause")):K6(this,"pause"),J6(this,2,A6(F6(this))),this.V("remotePlayerChange")):H6(this,this.pause)};
g.k.seekTo=function(a){if(G6(this)){if(this.i){var b=F6(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Kb()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ia,L6(this,"seekTo",{newTime:a}))}else K6(this,"seekTo",{newTime:a});J6(this,3,a);this.V("remotePlayerChange")}else H6(this,g.Qa(this.seekTo,a))};
g.k.stop=function(){if(G6(this)){this.i?this.i.stop(null,g.Ia,L6(this,"stopVideo")):K6(this,"stopVideo");var a=F6(this);a.index=-1;a.videoId="";x6(a);I6(this,a);this.V("remotePlayerChange")}else H6(this,this.stop)};
g.k.setVolume=function(a,b){if(G6(this)){var c=F6(this);if(this.l){if(c.volume!=a){var d=Math.round(a)/100;this.l.setReceiverVolumeLevel(d,(0,g.B)(function(){J5("CP","set receiver volume: "+d)},this),(0,g.B)(function(){this.Fd("failed to set receiver volume.")},this))}c.muted!=b&&this.l.setReceiverMuted(b,(0,g.B)(function(){J5("CP","set receiver muted: "+b)},this),(0,g.B)(function(){this.Fd("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);K6(this,"setVolume",e)}c.muted=b;c.volume=a;I6(this,c)}else H6(this,g.Qa(this.setVolume,a,b))};
g.k.LB=function(a,b){if(G6(this)){var c=F6(this),d={videoId:a};b&&(c.i={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Pj(b.style),g.Xb(d,c.i));K6(this,"setSubtitlesTrack",d);I6(this,c)}else H6(this,g.Qa(this.LB,a,b))};
g.k.setAudioTrack=function(a,b){if(G6(this)){var c=b.getLanguageInfo().getId();K6(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=F6(this);d.audioTrackId=c;I6(this,d)}else H6(this,g.Qa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){var l=F6(this);c=c||0;var m={videoId:a,currentIndex:c};B6(l,a,c);void 0!==b&&(z6(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=h&&(m.locationInfo=g.Pj(h));K6(this,"setPlaylist",m);d||I6(this,l)};
g.k.Lu=function(a,b){if(G6(this)){if(a&&b){var c=F6(this);B6(c,a,b);I6(this,c)}K6(this,"previous")}else H6(this,g.Qa(this.Lu,a,b))};
g.k.nextVideo=function(a,b){if(G6(this)){if(a&&b){var c=F6(this);B6(c,a,b);I6(this,c)}K6(this,"next")}else H6(this,g.Qa(this.nextVideo,a,b))};
g.k.bD=function(){G6(this)?K6(this,"dismissAutoplay"):H6(this,this.bD)};
g.k.dispose=function(){if(3!=this.Ma){var a=this.Ma;this.Ma=3;this.V("proxyStateChange",a,this.Ma)}g.R.prototype.dispose.call(this)};
g.k.da=function(){nKa(this);this.u=null;this.B.clear();D6(this,null);g.R.prototype.da.call(this)};
g.k.Vz=function(a){if((a!=this.Ma||2==a)&&3!=this.Ma&&0!=a){var b=this.Ma;this.Ma=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,g.gb(b.i)&&(b.i=b.l,b.i.reverse(),b.l=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.k.yO=function(a,b){this.V(a,b)};
g.k.dN=function(a){if(!a)this.Ar(null),D6(this,null);else if(this.l.receiver.volume){a=this.l.receiver.volume;var b=F6(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)J5("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,I6(this,b)}};
g.k.Ar=function(a){J5("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.J);if(this.i=a)this.i.addUpdateListener(this.J),oKa(this),this.V("remotePlayerChange")};
g.k.cN=function(a){a?(oKa(this),this.V("remotePlayerChange")):this.Ar(null)};
g.k.mA=function(){K6(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.kN=function(){var a=kKa();a&&D6(this,a)};
g.k.Fd=function(a){J5("CP",a)};g.u(M6,g.R);g.k=M6.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,h=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==h&&(l.currentIndex=h);c&&(this.Fb.listId=c);this.Fb.videoId=d;this.Fb.index=h||0;this.Fb.state=3;z6(this.Fb,m);this.B="UNSUPPORTED";N6("Connecting with setPlaylist and params: "+g.Pj(l));this.i.connect({method:"setPlaylist",
params:g.Pj(l)},a,oIa())}else N6("Connecting without params"),this.i.connect({},a,oIa());qKa(this)};
g.k.Zu=function(a){this.i.Zu(a)};
g.k.dispose=function(){this.na()||(this.V("beforeDispose"),O6(this,3));g.R.prototype.dispose.call(this)};
g.k.da=function(){P6(this);R6(this);Q6(this);g.Bo(this.J);this.J=NaN;g.Bo(this.L);this.L=NaN;this.u=null;g.bp(this.W);this.W.length=0;this.i.dispose();g.R.prototype.da.call(this);this.B=this.I=this.l=this.Fb=this.i=null};
g.k.pL=function(){this.uo(2)};
g.k.hN=function(){N6("Channel opened");this.ca&&(this.ca=!1,Q6(this),this.Y=g.zo((0,g.B)(function(){N6("Timing out waiting for a screen.");this.uo(1)},this),15E3));
sIa(rJa(this.i),this.ga)};
g.k.eN=function(){N6("Channel closed");isNaN(this.C)?O4(!0):O4();this.dispose()};
g.k.fN=function(a,b){O4();isNaN(this.Vq())?(b&&"shortLived"==this.ea&&this.V("browserChannelAuthError",a),N6("Channel error: "+a+" without reconnection"),this.dispose()):(this.ca=!0,N6("Channel error: "+a+" with reconnection in "+this.Vq()+" ms"),O6(this,2))};
g.k.gN=function(a){a.params?N6("Received: action="+a.action+", params="+g.Pj(a.params)):N6("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=X4(a.params.devices);this.l=g.Pc(a,function(c){return new C4(c)});
a=!!g.cb(this.l,function(c){return"LOUNGE_SCREEN"==c.type});
tKa(this,a);break;case "loungeScreenDisconnected":g.lb(this.l,function(c){return"LOUNGE_SCREEN"==c.type});
tKa(this,!1);break;case "remoteConnected":var b=new C4(X4(a.params.device));g.cb(this.l,function(c){return b?c.id==b.id:!1})||ZHa(this.l,b);
break;case "remoteDisconnected":b=new C4(X4(a.params.device));g.lb(this.l,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":vKa(this,a);break;case "nowPlaying":xKa(this,a);break;case "onStateChange":wKa(this,a);break;case "onAdStateChange":yKa(this,a);break;case "onVolumeChanged":zKa(this,a);break;case "onSubtitlesTrackChanged":uKa(this,a);break;case "nowAutoplaying":AKa(this,a);break;case "autoplayDismissed":this.V("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.V("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.V("autoplayModeChange",this.B);"DISABLED"==this.B&&this.V("autoplayDismissed");break;case "onHasPreviousNextChanged":BKa(this,a);break;case "requestAssistedSignIn":this.V("assistedSignInRequested",a.params.authCode);break;default:N6("Unrecognized action: "+a.action)}};
g.k.fQ=function(){if(this.u){var a=this.u;this.u=null;this.Fb.videoId!=a&&S6(this,"getNowPlaying")}};
g.k.lL=function(){var a=3;this.na()||(a=0,isNaN(this.Vq())?E5(this.i)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.uo=function(a){N6("Disconnecting with "+a);P6(this);this.V("beforeDisconnect",a);1==a&&O4();sJa(this.i,a);this.dispose()};
g.k.jL=function(){var a=this.Fb;this.u&&(a=this.Fb.clone(),B6(a,this.u,a.index));return C6(a)};
g.k.sQ=function(a){var b=new w6(a);b.videoId&&b.videoId!=this.Fb.videoId&&(this.u=b.videoId,g.Bo(this.J),this.J=g.zo((0,g.B)(this.fQ,this),5E3));var c=[];this.Fb.listId==b.listId&&this.Fb.videoId==b.videoId&&this.Fb.index==b.index||c.push("remoteQueueChange");this.Fb.playerState==b.playerState&&this.Fb.volume==b.volume&&this.Fb.muted==b.muted&&A6(this.Fb)==A6(b)&&g.Pj(this.Fb.i)==g.Pj(b.i)||c.push("remotePlayerChange");this.Fb.reset(a);g.Ab(c,function(d){this.V(d)},this)};
g.k.HD=function(){var a=this.i.I.id,b=g.cb(this.l,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Vq=function(){var a=this.i;return a.l.isActive()?a.l.l-g.Sa():NaN};
g.k.fL=function(){return this.B||"UNSUPPORTED"};
g.k.gL=function(){return this.I||""};
g.k.SJ=function(){if(!isNaN(this.Vq())){var a=this.i.l;a.i.Og();a.start()}};
g.k.oQ=function(a,b){S6(this,a,b);sKa(this)};
g.k.MB=function(){var a=g.Sq("SID","")||"",b=g.Sq("SAPISID","")||"",c=g.Sq("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.rf(g.We(a),2);b=g.rf(g.We(b),2);c=g.rf(g.We(c),2);return g.rf(g.We(a+","+b+","+c),2)};
M6.prototype.subscribe=M6.prototype.subscribe;M6.prototype.unsubscribeByKey=M6.prototype.Of;M6.prototype.getProxyState=M6.prototype.lL;M6.prototype.disconnect=M6.prototype.uo;M6.prototype.getPlayerContextData=M6.prototype.jL;M6.prototype.setPlayerContextData=M6.prototype.sQ;M6.prototype.getOtherConnectedRemoteId=M6.prototype.HD;M6.prototype.getReconnectTimeout=M6.prototype.Vq;M6.prototype.getAutoplayMode=M6.prototype.fL;M6.prototype.getAutoplayVideoId=M6.prototype.gL;M6.prototype.reconnect=M6.prototype.SJ;
M6.prototype.sendMessage=M6.prototype.oQ;M6.prototype.getXsrfToken=M6.prototype.MB;g.u(T6,N5);g.k=T6.prototype;g.k.Pg=function(a){return this.Hf.$_gs(a)};
g.k.contains=function(a){return!!this.Hf.$_c(a)};
g.k.get=function(a){return this.Hf.$_g(a)};
g.k.start=function(){this.Hf.$_st()};
g.k.add=function(a,b,c){this.Hf.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Hf.$_r(a,b,c)};
g.k.yv=function(a,b,c,d){this.Hf.$_un(a,b,c,d)};
g.k.da=function(){for(var a=0,b=this.i.length;a<b;++a)this.Hf.$_ubk(this.i[a]);this.i.length=0;this.Hf=null;N5.prototype.da.call(this)};
g.k.TJ=function(){this.V("screenChange")};
g.k.fO=function(){this.V("onlineScreenChange")};
X5.prototype.$_st=X5.prototype.start;X5.prototype.$_gspc=X5.prototype.NJ;X5.prototype.$_gsppc=X5.prototype.IB;X5.prototype.$_c=X5.prototype.contains;X5.prototype.$_g=X5.prototype.get;X5.prototype.$_a=X5.prototype.add;X5.prototype.$_un=X5.prototype.yv;X5.prototype.$_r=X5.prototype.remove;X5.prototype.$_gs=X5.prototype.Pg;X5.prototype.$_gos=X5.prototype.HB;X5.prototype.$_s=X5.prototype.subscribe;X5.prototype.$_ubk=X5.prototype.Of;var f7=null,l7=!1,U6=null,V6=null,k7=null,Z6=[];g.u(m7,g.E);g.k=m7.prototype;g.k.da=function(){g.E.prototype.da.call(this);this.i.stop();this.u.stop();this.L.stop();this.Y();var a=this.wb;a.unsubscribe("proxyStateChange",this.JF,this);a.unsubscribe("remotePlayerChange",this.Gr,this);a.unsubscribe("remoteQueueChange",this.Iu,this);a.unsubscribe("previousNextChange",this.GF,this);a.unsubscribe("nowAutoplaying",this.BF,this);a.unsubscribe("autoplayDismissed",this.bF,this);this.wb=this.l=null};
g.k.NB=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.wb.Ma)if(n7(this)){if(!F6(this.wb).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":F6(this.wb).Kb()?this.wb.pause():this.wb.play();break;case "control_play":this.wb.play();break;case "control_pause":this.wb.pause();break;case "control_seek":this.J.Og(c[0],c[1]);break;case "control_subtitles_set_track":o7(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.G.getCurrentTime();p7(this,0===c?void 0:c);break;case "control_seek":p7(this,c[0]);break;case "control_subtitles_set_track":o7(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.aN=function(a){this.L.Og(a)};
g.k.YQ=function(a){this.NB("control_subtitles_set_track",g.Ob(a)?null:a)};
g.k.ZG=function(){var a=this.G.getOption("captions","track");g.Ob(a)||o7(this,a)};
g.k.Bb=function(a){this.l.Bb(a,this.G.getVideoData().lengthSeconds)};
g.k.ON=function(){g.Ob(this.B)||MKa(this,this.B);this.C=!1};
g.k.JF=function(a,b){this.u.stop();2===b&&this.UG()};
g.k.Gr=function(){if(n7(this)){this.i.stop();var a=F6(this.wb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.l.Ne=1;break;case 1082:case 1083:this.l.Ne=0;break;default:this.l.Ne=-1}switch(a.playerState){case 1081:case 1:this.tb(new g.vK(8));this.TG();break;case 1085:case 3:this.tb(new g.vK(9));break;case 1083:case 0:this.tb(new g.vK(2));this.J.stop();this.Bb(this.G.getVideoData().lengthSeconds);break;case 1084:this.tb(new g.vK(4));break;case 2:this.tb(new g.vK(4));this.Bb(A6(a));
break;case -1:this.tb(new g.vK(64));break;case -1E3:this.tb(new g.vK(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=F6(this.wb).i;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,MKa(this,a));a=F6(this.wb);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.W.isActive()||this.wH()}else LKa(this)};
g.k.GF=function(){this.G.V("mdxpreviousnextchange")};
g.k.Iu=function(){n7(this)||LKa(this)};
g.k.BF=function(a){isNaN(a)||this.G.V("mdxnowautoplaying",a)};
g.k.bF=function(){this.G.V("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){n7(this)&&this.wb.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===F6(this.wb).playerState?p7(this,a):b&&this.wb.seekTo(a)};
g.k.wH=function(){var a=this;if(n7(this)){var b=F6(this.wb);this.events.Gb(this.X);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.X=this.events.N(this.G,"onVolumeChange",function(c){KKa(a,c)})}};
g.k.TG=function(){this.i.stop();if(!this.wb.na()){var a=F6(this.wb);a.Kb()&&this.tb(new g.vK(8));this.Bb(A6(a));this.i.start()}};
g.k.UG=function(){this.u.stop();this.i.stop();var a=this.wb.u.getReconnectTimeout();2==this.wb.Ma&&!isNaN(a)&&this.u.start()};
g.k.tb=function(a){this.u.stop();var b=this.I;if(!g.AK(b,a)){var c=g.W(a,2);c!==g.W(this.I,2)&&this.G.Bn(c);this.I=a;OKa(this.l,b,a)}};g.u(q7,g.X);q7.prototype.Dc=function(){this.i.show()};
q7.prototype.kb=function(){this.i.hide()};
q7.prototype.l=function(){g.bK("https://web.archive.org/web/20210301005222/https://support.google.com/youtube/answer/7640706")};
q7.prototype.u=function(){B4("mdx-manual-pairing-popup-ok");this.kb()};g.u(r7,g.X);r7.prototype.Dc=function(){this.i.show()};
r7.prototype.kb=function(){this.i.hide()};
r7.prototype.l=function(){B4("mdx-privacy-popup-cancel");this.kb()};
r7.prototype.u=function(){B4("mdx-privacy-popup-confirm");this.kb()};g.u(s7,g.X);s7.prototype.l=function(a){NKa(this,a.state)};g.u(t7,g.SQ);t7.prototype.C=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.Ml=g.Bb(a,this.i,this),g.UQ(this,g.Pc(a,this.i)),a=this.G.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.gh(a),this.enable(!0)):this.enable(!1)};
t7.prototype.i=function(a){return a.key};
t7.prototype.Mh=function(a){return"cast-selector-receiver"===a?"Cast...":this.Ml[a].name};
t7.prototype.Te=function(a){g.SQ.prototype.Te.call(this,a);this.G.setOption("remote","currentReceiver",this.Ml[a]);this.bb.kb()};g.u(u7,g.HN);g.k=u7.prototype;
g.k.create=function(){var a=this.player.T(),b=g.RC(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:g.U(a.experiments,"mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:g.U(a.experiments,"enable_dial_short_lived_lounge_token"),enableCastLoungeToken:g.U(a.experiments,"enable_cast_short_lived_lounge_token")};FKa(b,a);this.subscriptions.push(g.Go("yt-remote-before-disconnect",this.YM,this));this.subscriptions.push(g.Go("yt-remote-connection-change",this.FO,this));this.subscriptions.push(g.Go("yt-remote-receiver-availability-change",
this.IF,this));this.subscriptions.push(g.Go("yt-remote-auto-connect",this.DO,this));this.subscriptions.push(g.Go("yt-remote-receiver-resumed",this.CO,this));this.subscriptions.push(g.Go("mdx-privacy-popup-confirm",this.VP,this));this.subscriptions.push(g.Go("mdx-privacy-popup-cancel",this.UP,this));this.subscriptions.push(g.Go("mdx-manual-pairing-popup-ok",this.gM,this));this.IF()};
g.k.load=function(){this.player.cancelPlayback();g.HN.prototype.load.call(this);this.lh=new m7(this,this.player,this.wb);var a=(a=JKa())?a.currentTime:0;var b=j7()?new E6(d7(),void 0):null;0==a&&b&&(a=A6(F6(b)));0!==a&&this.Bb(a);OKa(this,this.Mc,this.Mc);this.player.Cj(6)};
g.k.unload=function(){this.player.V("mdxautoplaycanceled");this.al=this.fi;g.Pi(this.lh,this.wb);this.wb=this.lh=null;g.HN.prototype.unload.call(this);this.player.Cj(5);v7(this)};
g.k.da=function(){g.Ho(this.subscriptions);g.HN.prototype.da.call(this)};
g.k.sj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.lh.NB.apply(this.lh,[a].concat(g.la(c)))};
g.k.getAdState=function(){return this.Ne};
g.k.mL=function(){return this.loaded?this.lh.suggestion:null};
g.k.bj=function(){return this.wb?F6(this.wb).bj:!1};
g.k.hasNext=function(){return this.wb?F6(this.wb).hasNext:!1};
g.k.Bb=function(a,b){this.wE=a||0;this.player.V("progresssync",a,b)};
g.k.getCurrentTime=function(){return this.wE};
g.k.getProgressState=function(){var a=F6(this.wb),b=this.player.getVideoData();return{allowSeeking:g.U(this.player.T().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.Le():!a.isAdPlaying()&&this.player.Le(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+y6(a):a.B,isAtLiveHead:1>=(a.u?a.l+y6(a):a.l)-this.getCurrentTime(),loaded:a.W,seekableEnd:a.u?a.l+y6(a):a.l,seekableStart:0<a.C?a.C+
y6(a):a.C}};
g.k.nextVideo=function(){this.wb&&this.wb.nextVideo()};
g.k.Lu=function(){this.wb&&this.wb.Lu()};
g.k.YM=function(a){1===a&&(this.wz=this.wb?F6(this.wb):null)};
g.k.FO=function(){var a=j7()?new E6(d7(),void 0):null;if(a){var b=this.al;this.loaded&&this.unload();this.wb=a;this.wz=null;b.key!==this.fi.key&&(this.al=b,this.load())}else g.Oi(this.wb),this.wb=null,this.loaded&&(this.unload(),(a=this.wz)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,A6(a)));this.player.V("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.IF=function(){var a=[this.fi],b=a.concat,c=GKa();s6()&&g.Fu("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Ml=b.call(a,c);a=e7()||this.fi;w7(this,a);this.player.xa("onMdxReceiversChange")};
g.k.DO=function(){var a=e7();w7(this,a)};
g.k.CO=function(){this.al=e7()};
g.k.VP=function(){this.Jr=!0;v7(this);l7=!1;f7&&h7(f7,1);f7=null};
g.k.UP=function(){this.Jr=!1;v7(this);w7(this,this.fi);this.al=this.fi;l7=!1;f7=null;this.player.playVideo()};
g.k.gM=function(){this.nu=!0;v7(this);g.Eu("yt-remote-manual-pairing-warning-shown",!0,2592E3);l7=!1;f7&&h7(f7,1);f7=null};
g.k.Ge=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Ml;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?u6():w7(this,b)),this.loaded?this.al:this.fi;case "quickCast":return 2===this.Ml.length&&"cast-selector-receiver"===this.Ml[1].key?(b&&u6(),!0):!1}};
g.k.mA=function(){this.wb.mA()};
g.k.wi=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.NN.remote=u7;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:52:22 Mar 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:20:46 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 109.559
  exclusion.robots: 0.087
  exclusion.robots.policy: 0.076
  cdx.remote: 0.067
  esindex: 0.01
  LoadShardBlock: 36.918 (3)
  PetaboxLoader3.datanode: 50.997 (4)
  load_resource: 115.506
  PetaboxLoader3.resolve: 69.595
*/