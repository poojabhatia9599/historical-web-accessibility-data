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

(function(g){var window=this;var RGa=function(a,b){return g.Ob(a,b)},f4=function(a,b,c){a.C.set(b,c)},g4=function(a){f4(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.A()).toString(36));
return a},h4=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.fn(a.C,b,c)},SGa=function(a,b){var c=[];
g.nj(b,function(d){try{var e=g.bo.prototype.B.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.ao(e)&&c.push(d)},a);
return c},TGa=function(a,b){var c=SGa(a,b);
g.Bb(c,function(d){g.bo.prototype.remove.call(this,d)},a)},UGa=function(a){if(a.U){if(a.U.locationOverrideToken)return{locationOverrideToken:a.U.locationOverrideToken};
if(null!=a.U.latitudeE7&&null!=a.U.longitudeE7)return{latitudeE7:a.U.latitudeE7,longitudeE7:a.U.longitudeE7}}return null},VGa=function(a,b){g.gb(a,b)||a.push(b)},i4=function(a){var b=0,c;
for(c in a)b++;return b},WGa=function(a,b){var c=b instanceof g.Cc?b:g.Ic(b,/^data:image\//i.test(b));
a.src=g.Dc(c)},j4=function(){},XGa=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},YGa=function(a){if(a.Yf&&"function"==typeof a.Yf)return a.Yf();
if("string"===typeof a)return a.split("");if(g.Ma(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Kb(a)},ZGa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ma(a)||"string"===typeof a)g.Bb(a,b,void 0);else{if(a.sh&&"function"==typeof a.sh)var c=a.sh();else if(a.Yf&&"function"==typeof a.Yf)c=void 0;else if(g.Ma(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Lb(a);d=YGa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},$Ga=function(a,b,c,d){var e=new g.Um(null,void 0);
a&&g.Vm(e,a);b&&g.Wm(e,b);c&&g.Xm(e,c);d&&(e.B=d);return e},k4=function(a,b){g.Lo[a]=!0;
var c=g.Jo();c&&c.publish.apply(c,arguments);g.Lo[a]=!1},l4=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Rm;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",aHa(this,a.capabilities||""),bHa(this,a.experiments||""))},aHa=function(a,b){a.capabilities.clear();
g.Ne(b.split(","),g.Ra(RGa,cHa)).forEach(function(c){a.capabilities.add(c)})},bHa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},m4=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},n4=function(a,b){return!!b&&(a.id==b||a.uuid==b)},dHa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},eHa=function(a){return new m4(a)},fHa=function(a){return Array.isArray(a)?g.Mc(a,eHa):[]},o4=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},p4=function(a){return Array.isArray(a)?"["+g.Mc(a,o4).join(",")+"]":"null"},q4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},gHa=function(a){return g.Mc(a,function(b){return{key:b.id,
name:b.name}})},r4=function(a,b){return g.cb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},s4=function(a,b){return g.cb(a,function(c){return n4(c,b)})},hHa=function(){var a=(0,g.yu)();
a&&TGa(a,a.u.Xj(!0))},t4=function(){var a=g.Bu("yt-remote-connected-devices")||[];
g.yb(a);return a},iHa=function(a){if(g.ib(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Mc(a,function(d,e){return 0==e?d:d.substring(c.length)})},jHa=function(a){g.Au("yt-remote-connected-devices",a,86400)},v4=function(){if(u4)return u4;
var a=g.Bu("yt-remote-device-id");a||(a=q4(),g.Au("yt-remote-device-id",a,31536E3));for(var b=t4(),c=1,d=a;g.gb(b,d);)c++,d=a+"#"+c;return u4=d},w4=function(){var a=t4(),b=v4();
g.gb(a,b);g.Du()&&g.Ab(a,b);a=iHa(a);if(g.ib(a))try{g.Dq("remote_sid")}catch(c){}else try{g.Bq("remote_sid",a.join(","),-1)}catch(c){}},kHa=function(){return g.Bu("yt-remote-session-browser-channel")},lHa=function(){return g.Bu("yt-remote-local-screens")||[]},mHa=function(){g.Au("yt-remote-lounge-token-expiration",!0,86400)},nHa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Mc(lHa(),function(d){return d.loungeToken}),c=g.Mc(a,function(d){return d.loungeToken});
g.xh(c,function(d){return!g.gb(b,d)})&&mHa();
g.Au("yt-remote-local-screens",a,31536E3)},oHa=function(a,b){g.Au("yt-remote-session-browser-channel",a);
g.Au("yt-remote-session-screen-id",b);var c=t4(),d=v4();g.gb(c,d)||c.push(d);jHa(c);w4()},x4=function(a){a||(g.Cu("yt-remote-session-screen-id"),g.Cu("yt-remote-session-video-id"));
w4();a=t4();g.nb(a,v4());jHa(a)},pHa=function(){if(!y4){var a=g.mo();
a&&(y4=new g.Pn(a))}},qHa=function(){pHa();
return y4?!!y4.get("yt-remote-use-staging-server"):!1},rHa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},sHa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},z4=function(a){a.length?tHa(a.shift(),function(){z4(a)}):A4()},uHa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},tHa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.hd(d,g.rg(a));(document.head||document.documentElement).appendChild(d)},A4=function(){var a=sHa();
a&&a(!1,"No cast extension found")},wHa=function(){if(vHa){var a=2,b=sHa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;tHa("//web.archive.org/web/20210201000927/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",A4,c)}},xHa=function(){wHa();
var a=(a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/))?parseInt(a[1],10):0;var b=[];if(0!=a){var c=a-1;b.push("//web.archive.org/web/20210201000927/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20210201000927/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}b.push("//web.archive.org/web/20210201000927/https://www.gstatic.com/eureka/clank/cast_sender.js");z4(b)},B4=function(a,b,c){g.B.call(this);
this.I=null!=c?(0,g.z)(a,c):a;this.Kf=b;this.F=(0,g.z)(this.WJ,this);this.u=!1;this.B=0;this.C=this.gb=null;this.D=[]},C4=function(a,b,c){g.B.call(this);
this.D=null!=c?a.bind(c):a;this.Kf=b;this.C=null;this.u=!1;this.B=0;this.gb=null},D4=function(a){a.gb=g.Pm(function(){a.gb=null;
a.u&&!a.B&&(a.u=!1,D4(a))},a.Kf);
var b=a.C;a.C=null;a.D.apply(null,b)},E4=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return XGa(a)},F4=function(){},G4=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},I4=function(a){H4.dispatchEvent(new yHa(H4,a))},yHa=function(a){g.Il.call(this,"statevent",a)},J4=function(){},zHa=function(){},BHa=function(a){return(a=AHa(a))?new ActiveXObject(a):new XMLHttpRequest},AHa=function(a){if(!a.B&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.B=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.B},K4=function(a,b,c,d){this.u=a;
this.B=b;this.N=c;this.K=d||1;this.F=45E3;this.D=new g.l_(this);this.C=new g.Om;this.C.setInterval(250)},DHa=function(a,b,c){a.aq=1;
a.fl=g4(b.clone());a.Mn=c;a.I=!0;CHa(a,null)},L4=function(a,b,c,d,e){a.aq=1;
a.fl=g4(b.clone());a.Mn=null;a.I=c;e&&(a.dH=!1);CHa(a,d)},CHa=function(a,b){a.Qp=g.A();
M4(a);a.im=a.fl.clone();h4(a.im,"t",a.K);a.Ys=0;a.Ce=a.u.Ax(a.u.Gs()?b:null);0<a.ty&&(a.wv=new C4((0,g.z)(a.ZH,a,a.Ce),a.ty));a.D.ya(a.Ce,"readystatechange",a.KQ);var c=a.pn?g.Ub(a.pn):{};a.Mn?(a.hw="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Ce.send(a.im,a.hw,a.Mn,c)):(a.hw="GET",a.dH&&!g.Be&&(c.Connection="close"),a.Ce.send(a.im,a.hw,null,c));a.u.li(1)},GHa=function(a,b,c){for(var d=!0;!a.Xm&&a.Ys<c.length;){var e=EHa(a,c);
if(e==N4){4==b&&(a.Fl=4,I4(15),d=!1);break}else if(e==FHa){a.Fl=4;I4(16);d=!1;break}else O4(a,e)}4==b&&0==c.length&&(a.Fl=1,I4(17),d=!1);a.Ci=a.Ci&&d;d||(P4(a),Q4(a))},EHa=function(a,b){var c=a.Ys,d=b.indexOf("\n",c);
if(-1==d)return N4;c=Number(b.substring(c,d));if(isNaN(c))return FHa;d+=1;if(d+c>b.length)return N4;var e=b.substr(d,c);a.Ys=d+c;return e},IHa=function(a,b){a.Qp=g.A();
M4(a);var c=b?window.location.hostname:"";a.im=a.fl.clone();f4(a.im,"DOMAIN",c);f4(a.im,"t",a.K);try{a.Gi=new ActiveXObject("htmlfile")}catch(n){P4(a);a.Fl=7;I4(22);Q4(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)h=e+"\\x3c";else if(">"==h)h=e+"\\x3e";else{if(h in R4)h=R4[h];else if(h in HHa)h=R4[h]=HHa[h];else{var l=h.charCodeAt(0);if(31<l&&127>l)var m=h;else{if(256>l){if(m="\\x",16>l||256<l)m+="0"}else m="\\u",4096>l&&(m+="0");m+=l.toString(16).toUpperCase()}h=
R4[h]=m}h=e+h}e=h}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.ed(g.fc("b/12014412"),d+"</body></html>");a.Gi.open();a.Gi.write(g.ad(c));a.Gi.close();a.Gi.parentWindow.m=(0,g.z)(a.cQ,a);a.Gi.parentWindow.d=(0,g.z)(a.nG,a,!0);a.Gi.parentWindow.rpcClose=(0,g.z)(a.nG,a,!1);c=a.Gi.createElement("DIV");a.Gi.parentWindow.document.body.appendChild(c);d=g.Hc(a.im.toString());d=g.md(g.Dc(d));d=g.ed(g.fc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.fd(c,d);a.u.li(1)},M4=function(a){a.ZA=g.A()+a.F;
JHa(a,a.F)},JHa=function(a,b){if(null!=a.hq)throw Error("WatchDog timer not null");
a.hq=G4((0,g.z)(a.kQ,a),b)},S4=function(a){a.hq&&(g.v.clearTimeout(a.hq),a.hq=null)},Q4=function(a){a.u.nD()||a.Xm||a.u.cu(a)},P4=function(a){S4(a);
g.bg(a.wv);a.wv=null;a.C.stop();g.iBa(a.D);if(a.Ce){var b=a.Ce;a.Ce=null;b.abort();b.dispose()}a.Gi&&(a.Gi=null)},O4=function(a,b){try{a.u.eG(a,b),a.u.li(4)}catch(c){}},LHa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;KHa(a,b,function(h){h?c(!0):g.v.setTimeout(function(){LHa(a,b,c,d,f)},f)})}},KHa=function(a,b,c){var d=new Image;
d.onload=function(){try{T4(d),c(!0)}catch(e){}};
d.onerror=function(){try{T4(d),c(!1)}catch(e){}};
d.onabort=function(){try{T4(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{T4(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
WGa(d,a)},T4=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},U4=function(a){g.em.call(this);
this.headers=new g.Rm;this.da=a||null;this.C=!1;this.Z=this.u=null;this.wa=this.U="";this.I=0;this.D="";this.F=this.ka=this.N=this.ga=!1;this.K=0;this.W=null;this.Aa="";this.X=this.ea=!1},MHa=function(a){return g.ze&&g.ce(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},NHa=function(a){return"content-type"==a.toLowerCase()},PHa=function(a,b){a.C=!1;
a.u&&(a.F=!0,a.u.abort(),a.F=!1);a.D=b;a.I=5;OHa(a);V4(a)},OHa=function(a){a.ga||(a.ga=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},RHa=function(a){if(a.C&&"undefined"!=typeof g.q_)if(a.Z[1]&&4==W4(a)&&2==a.getStatus())X4(a,"Local request error detected and ignored");
else if(a.N&&4==W4(a))g.Pm(a.bG,0,a);else if(a.dispatchEvent("readystatechange"),a.isComplete()){X4(a,"Request complete");a.C=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.vd(1,String(a.U));if(!f&&g.v.self&&g.v.self.location){var h=g.v.self.location.protocol;f=h.substr(0,h.length-1)}e=!QHa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.I=6;try{var l=2<W4(a)?a.u.statusText:""}catch(m){l=""}a.D=l+" ["+a.getStatus()+"]";OHa(a)}}finally{V4(a)}}},V4=function(a,b){if(a.u){SHa(a);
var c=a.u,d=a.Z[0]?g.Ja:null;a.u=null;a.Z=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},SHa=function(a){a.u&&a.X&&(a.u.ontimeout=null);
a.W&&(g.v.clearTimeout(a.W),a.W=null)},W4=function(a){return a.u?a.u.readyState:0},Y4=function(a){try{return a.u?a.u.responseText:""}catch(b){return""}},X4=function(a,b){return b+" ["+a.wa+" "+a.U+" "+a.getStatus()+"]"},THa=function(a){this.u=a;
this.B=new F4},UHa=function(a){var b=Z4(a.u,a.wq,"/mail/images/cleardot.gif");
g4(b);LHa(b.toString(),5E3,(0,g.z)(a.ZI,a),3,2E3);a.li(1)},a5=function(a){var b=a.u.N;
if(null!=b)I4(5),b?(I4(11),$4(a.u,a,!1)):(I4(12),$4(a.u,a,!0));else if(a.Fg=new K4(a,void 0,void 0,void 0),a.Fg.pn=a.qy,b=a.u,b=Z4(b,b.Gs()?a.rr:null,a.sy),I4(5),!g.ze||g.de(10))h4(b,"TYPE","xmlhttp"),L4(a.Fg,b,!1,a.rr,!1);else{h4(b,"TYPE","html");var c=a.Fg;a=!!a.rr;c.aq=3;c.fl=g4(b.clone());IHa(c,a)}},b5=function(a,b,c){this.Ka=1;
this.u=[];this.C=[];this.D=new F4;this.K=a||null;this.N=null!=b?b:null;this.F=c||!1},VHa=function(a,b){this.u=a;
this.map=b;this.context=null},WHa=function(a,b,c,d){g.Il.call(this,"timingevent",a);
this.size=b;this.ys=d},XHa=function(a){g.Il.call(this,"serverreachability",a)},$Ha=function(a){YHa(a);
if(3==a.Ka){var b=a.Ur++,c=a.Dt.clone();f4(c,"SID",a.B);f4(c,"RID",b);f4(c,"TYPE","terminate");c5(a,c);b=new K4(a,a.B,b,void 0);b.aq=2;b.fl=g4(c.clone());WGa(new Image,b.fl.toString());b.Qp=g.A();M4(b)}ZHa(a)},aIa=function(a){a.uJ(1,0);
a.Dt=Z4(a,null,a.py);d5(a)},YHa=function(a){a.ll&&(a.ll.abort(),a.ll=null);
a.Zd&&(a.Zd.cancel(),a.Zd=null);a.Zj&&(g.v.clearTimeout(a.Zj),a.Zj=null);e5(a);a.sg&&(a.sg.cancel(),a.sg=null);a.ul&&(g.v.clearTimeout(a.ul),a.ul=null)},bIa=function(a,b){if(0==a.Ka)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new VHa(a.aN++,b));2!=a.Ka&&3!=a.Ka||d5(a)},cIa=function(a){var b=0;
a.Zd&&b++;a.sg&&b++;return b},d5=function(a){a.sg||a.ul||(a.ul=G4((0,g.z)(a.lG,a),0),a.Mo=0)},eIa=function(a,b){if(1==a.Ka){if(!b){a.Ur=Math.floor(1E5*Math.random());
var c=a.Ur++,d=new K4(a,"",c,void 0);d.pn=a.jj;var e=f5(a),f=a.Dt.clone();f4(f,"RID",c);f4(f,"CVER","1");c5(a,f);DHa(d,f,e);a.sg=d;a.Ka=2}}else 3==a.Ka&&(b?dIa(a,b):0==a.u.length||a.sg||dIa(a))},dIa=function(a,b){if(b)if(6<a.Ym){a.u=a.C.concat(a.u);
a.C.length=0;var c=a.Ur-1;var d=f5(a)}else c=b.N,d=b.Mn;else c=a.Ur++,d=f5(a);var e=a.Dt.clone();f4(e,"SID",a.B);f4(e,"RID",c);f4(e,"AID",a.ip);c5(a,e);c=new K4(a,a.B,c,a.Mo+1);c.pn=a.jj;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.sg=c;DHa(c,e,d)},c5=function(a,b){if(a.If){var c=a.If.RC();
c&&g.Db(c,function(d,e){f4(b,e,d)})}},f5=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Ym&&0<b){var d=a.u[0].u;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={ko:e.ko},f++){e.ko=a.u[f].u;var h=a.u[f].map;e.ko=6>=a.Ym?f:e.ko-d;try{g.Db(h,function(l){return function(m,n){c.push("req"+l.ko+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.ko+"_type="+encodeURIComponent("_badmap"))}}a.C=a.C.concat(a.u.splice(0,b));
return c.join("&")},fIa=function(a){a.Zd||a.Zj||(a.I=1,a.Zj=G4((0,g.z)(a.kG,a),0),a.wo=0)},g5=function(a){if(a.Zd||a.Zj||3<=a.wo)return!1;
a.I++;a.Zj=G4((0,g.z)(a.kG,a),gIa(a,a.wo));a.wo++;return!0},$4=function(a,b,c){a.dw=c;
a.kj=b.tk;a.F||aIa(a)},e5=function(a){null!=a.en&&(g.v.clearTimeout(a.en),a.en=null)},gIa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},h5=function(a,b){if(2==b||9==b){var c=null;
a.If&&(c=null);var d=(0,g.z)(a.vR,a);c||(c=new g.Um("//web.archive.org/web/20210201000927/https://www.google.com/images/cleardot.gif"),g4(c));KHa(c.toString(),1E4,d)}else I4(2);hIa(a,b)},hIa=function(a,b){a.Ka=0;
a.If&&a.If.gC(b);ZHa(a);YHa(a)},ZHa=function(a){a.Ka=0;
a.kj=-1;if(a.If)if(0==a.C.length&&0==a.u.length)a.If.kx();else{g.qb(a.C);var b=g.qb(a.u);a.C.length=0;a.u.length=0;a.If.kx(b)}},Z4=function(a,b,c){var d=g.bn(c);
if(""!=d.u)b&&g.Wm(d,b+"."+d.u),g.Xm(d,d.D);else{var e=window.location;d=$Ga(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Pq&&g.Db(a.Pq,function(f,h){f4(d,h,f)});
f4(d,"VER",a.Ym);c5(a,d);return d},iIa=function(){},jIa=function(){this.u=[];
this.B=[]},kIa=function(a,b){this.action=a;
this.params=b||{}},i5=function(a,b){g.B.call(this);
this.u=new g.E(this.UP,0,this);g.C(this,this.u);this.Kf=5E3;this.B=0;if("function"===typeof a)b&&(a=(0,g.z)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.z)(a.handleEvent,a);else throw Error("Invalid listener argument");this.C=a},j5=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.Z=a;this.I=b;this.C=new g.On;this.B=new i5(this.VQ,this);this.u=null;this.W=!1;this.F=null;this.U="";this.N=this.D=0;this.K=[];this.da=c;this.X=d;this.ga=e},lIa=function(a){return{firstTestResults:[""],
secondTestResults:!a.u.dw,sessionId:a.u.B,arrayId:a.u.ip}},mIa=function(a,b){a.N=b||0;
a.B.stop();k5(a);a.u&&(3==a.u.getState()&&eIa(a.u),$Ha(a.u));a.N=0},l5=function(a){return!!a.u&&3==a.u.getState()},k5=function(a){if(a.u){var b=a.X(),c=a.u.jj||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.u.jj=c}},m5=function(a){this.scheme="https";
this.port=this.domain="";this.u="/api/lounge";this.B=!0;a=a||document.location.href;var b=Number(g.vd(4,a))||"";b&&(this.port=":"+b);this.domain=g.wd(a)||"";a=g.Uc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Ac(a,"10.0")&&(this.B=!1))},n5=function(a,b){var c=a.u;
a.B&&(c=a.scheme+"://"+a.domain+a.port+a.u);return g.Nd(c+b,{})},o5=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ra(a.D,d,!0),onError:g.Ra(a.C,e),onTimeout:g.Ra(a.F,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.vq(b,a)},qIa=function(){var a=nIa;
oIa();p5.push(a);pIa()},q5=function(a,b){oIa();
var c=rIa(a,String(b));g.ib(p5)?sIa(c):(pIa(),g.Bb(p5,function(d){d(c)}))},oIa=function(){p5||(p5=g.Ia("yt.mdx.remote.debug.handlers_")||[],g.Ea("yt.mdx.remote.debug.handlers_",p5,void 0))},sIa=function(a){var b=(r5+1)%50;
r5=b;s5[b]=a;t5||(t5=49==b)},pIa=function(){var a=p5;
if(s5[0]){var b=t5?r5:-1;do{b=(b+1)%50;var c=s5[b];g.Bb(a,function(d){d(c)})}while(b!=r5);
s5=Array(50);r5=-1;t5=!1}},rIa=function(a,b){var c=(g.A()-tIa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},u5=function(a){g.N.call(this);
this.I=a;this.screens=[]},uIa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0},vIa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Ne(a.screens,function(f){return!!r4(b,f)});
for(var d=0,e=b.length;d<e;d++)c=uIa(a,b[d])||c;return c},wIa=function(a,b){var c=a.screens.length;
a.screens=g.Ne(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},v5=function(a,b,c,d){g.N.call(this);
this.F=a;this.I=b;this.C=c;this.D=d;this.B=0;this.u=null;this.gb=NaN},x5=function(a){u5.call(this,"LocalScreenService");
this.B=a;this.u=NaN;w5(this);this.info("Initializing with "+p4(this.screens))},xIa=function(a){if(a.screens.length){var b=g.Mc(a.screens,function(d){return d.id}),c=n5(a.B,"/pairing/get_lounge_token_batch");
o5(a.B,c,{screen_ids:b.join(",")},(0,g.z)(a.eK,a),(0,g.z)(a.dK,a))}},w5=function(a){if(g.Wo("deprecate_pair_servlet_enabled"))return vIa(a,[]);
var b=fHa(lHa());b=g.Ne(b,function(c){return!c.uuid});
return vIa(a,b)},y5=function(a,b){nHa(g.Mc(a.screens,dHa));
b&&mHa()},A5=function(a,b){g.N.call(this);
this.I=b;var c=g.Bu("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.I(),f=0,h=e.length;f<h;++f){var l=e[f].id;d[l]=g.gb(c,l)}this.u=d;this.F=a;this.C=this.D=NaN;this.B=null;z5("Initialized with "+g.Tj(this.u))},B5=function(a,b,c){var d=n5(a.F,"/pairing/get_screen_availability");
o5(a.F,d,{lounge_token:b.token},(0,g.z)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.z)(function(){c(!1)},a))},C5=function(a,b){a:if(i4(b)!=i4(a.u))var c=!1;
else{c=g.Lb(b);for(var d=0,e=c.length;d<e;++d)if(!a.u[c[d]]){c=!1;break a}c=!0}c||(z5("Updated online screens: "+g.Tj(a.u)),a.u=b,a.V("screenChange"));yIa(a)},D5=function(a){isNaN(a.C)||g.Io(a.C);
a.C=g.Go((0,g.z)(a.cA,a),0<a.D&&a.D<g.A()?2E4:1E4)},z5=function(a){q5("OnlineScreenService",a)},zIa=function(a){var b={};
g.Bb(a.I(),function(c){c.token?b[c.token]=c.id:this.Fd("Requesting availability of screen w/o lounge token.")});
return b},yIa=function(a){a=g.Lb(g.Eb(a.u,function(b){return b}));
g.yb(a);a.length?g.Au("yt-remote-online-screen-ids",a.join(","),60):g.Cu("yt-remote-online-screen-ids")},E5=function(a){u5.call(this,"ScreenService");
this.F=a;this.u=this.B=null;this.C=[];this.D={};AIa(this)},CIa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.Qg();if(h=(c?s4(h,c):null)||s4(h,b)){h.uuid=b;var l=F5(a,h);B5(a.u,l,function(m){e(m?l:null)})}else c?BIa(a,c,(0,g.z)(function(m){var n=F5(this,new m4({name:d,
screenId:c,loungeToken:m,dialId:b||""}));B5(this.u,n,function(p){e(p?n:null)})},a),f):e(null)},DIa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},EIa=function(a,b,c){B5(a.u,b,c)},BIa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){var l=h&&h.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.vq(n5(a.F,"/pairing/get_lounge_token_batch"),e)},FIa=function(a){a.screens=a.B.Qg();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+p4(a.screens))},AIa=function(a){G5(a);
a.B=new x5(a.F);a.B.subscribe("screenChange",(0,g.z)(a.kK,a));FIa(a);a.C=fHa(g.Bu("yt-remote-automatic-screen-cache")||[]);G5(a);a.info("Initializing automatic screens: "+p4(a.C));a.u=new A5(a.F,(0,g.z)(a.Qg,a,!0));a.u.subscribe("screenChange",(0,g.z)(function(){this.V("onlineScreenChange")},a))},F5=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=s4(a.C,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.C.push(b),GIa(a));G5(a);a.D[b.uuid]=b.id;g.Au("yt-remote-device-id-map",a.D,31536E3);return b},GIa=function(a){a=g.Ne(a.C,function(b){return"shortLived"!=b.idType});
g.Au("yt-remote-automatic-screen-cache",g.Mc(a,dHa))},G5=function(a){a.D=g.Bu("yt-remote-device-id-map")||{}},H5=function(a,b,c){g.N.call(this);
this.ga=c;this.F=a;this.u=b;this.C=null},I5=function(a,b){a.C=b;
a.V("sessionScreen",a.C)},J5=function(a,b){q5(a.ga,b)},K5=function(a,b,c){H5.call(this,a,b,"CastSession");
var d=this;this.ea=c;this.B=null;this.da=(0,g.z)(this.XR,this);this.X=(0,g.z)(this.rQ,this);this.W=g.Go(function(){HIa(d,null)},12E4);
this.K=this.D=this.I=this.N=0;this.Z=!1;this.U="unknown"},L5=function(a,b){g.Io(a.K);
a.K=0;0==b?IIa(a):a.K=g.Go(function(){IIa(a)},b)},IIa=function(a){JIa(a,"getLoungeToken");
g.Io(a.D);a.D=g.Go(function(){KIa(a,null)},3E4)},JIa=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Tj(void 0));
var c={};c.type=b;a.B?a.B.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ja,(0,g.z)(function(){J5(this,"Failed to send message: "+b+".")},a)):J5(a,"Sending yt message without session: "+g.Tj(c))},M5=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.iD(b,function(c){I5(a,c)},function(){return a.fg()},5)):a.fg(Error("Waiting for session status timed out."))},MIa=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new m4(b);LIa(a,d,function(e){e?(a.Z=!0,F5(a.F,d),I5(a,d),a.U="unknown",L5(a,c)):(g.Do(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.fg())},5)},HIa=function(a,b){g.Io(a.W);
a.W=0;b?a.ea.l4&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?MIa(a,{name:a.u.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.Do(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),M5(a,b.screenId))):(g.Do(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),M5(a,b.screenId)):
M5(a,b.screenId):a.fg(Error("Waiting for session status timed out."))},KIa=function(a,b){g.Io(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.U=c,L5(a,3E4)):(a.C&&(a.C.token=b.loungeToken,F5(a.F,a.C)),a.V("sessionScreen",a.C),a.Z=!1,a.U="unknown",L5(a,b.loungeTokenRefreshIntervalMs))},LIa=function(a,b,c,d){g.Io(a.I);
a.I=0;EIa(a.F,b,function(e){e||0>d?c(e):a.I=g.Go(function(){LIa(a,b,c,d-1)},300)})},NIa=function(a){g.Io(a.N);
a.N=0;g.Io(a.I);a.I=0;g.Io(a.W);a.W=0;g.Io(a.D);a.D=0;g.Io(a.K);a.K=0},N5=function(a,b,c){H5.call(this,a,b,"DialSession");
this.D=this.N=null;this.U="";this.Z=c;this.W=null;this.K=g.Ja;this.I=NaN;this.X=(0,g.z)(this.ZK,this);this.B=g.Ja},OIa=function(a){a.B=a.F.eI(a.U,a.u.label,a.u.friendlyName,(0,g.z)(function(b){this.B=g.Ja;
I5(this,b)},a),(0,g.z)(function(b){this.B=g.Ja;
this.fg(b)},a))},PIa=function(a){var b={};
b.pairingCode=a.U;b.theme=a.Z;qHa()&&(b.env_useStageMdx=1);return g.Jd(b)},O5=function(a,b){H5.call(this,a,b,"ManualSession");
this.B=g.Go((0,g.z)(this.jp,this,null),150)},P5=function(a,b){g.N.call(this);
this.D=b;this.B=a;this.N=b.appId||"233637DE";this.K=b.theme||"cl";this.U=b.disableCastApi||!1;this.u=null;this.I=!1;this.C=[];this.F=(0,g.z)(this.kP,this)},QIa=function(a,b){return b?g.cb(a.C,function(c){return n4(b,c.label)},a):null},Q5=function(a){q5("Controller",a)},nIa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},R5=function(a){return a.I||!!a.C.length||!!a.u},S5=function(a,b,c){b!=a.u&&(g.bg(a.u),(a.u=b)?(c?a.V("yt-remote-cast2-receiver-resumed",
b.u):a.V("yt-remote-cast2-receiver-selected",b.u),b.subscribe("sessionScreen",(0,g.z)(a.iG,a,b)),b.getScreen()?a.V("yt-remote-cast2-session-change",b.getScreen()):c&&a.u.jp(null)):a.V("yt-remote-cast2-session-change",null))},RIa=function(a){var b=a.B.dI(),c=a.u&&a.u.u;
a=g.Mc(b,function(d){c&&n4(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=QIa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},XIa=function(a,b,c,d){d.disableCastApi?T5("Cannot initialize because disabled by Mdx config."):SIa()?TIa(b,d)&&(U5(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?UIa(a,c):(window.__onGCastApiAvailable=function(e,f){e?UIa(a,c):(V5("Failed to load cast API: "+f),W5(!1),U5(!1),g.Cu("yt-remote-cast-available"),g.Cu("yt-remote-cast-receiver"),
VIa(),c(!1))},d.loadCastApiSetupScript?g.So("https://web.archive.org/web/20210201000927/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?xHa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?A4():(wHa(),z4(WIa.map(uHa))))):T5("Cannot initialize because not running Chrome")},VIa=function(){T5("dispose");
var a=X5();a&&a.dispose();g.Ea("yt.mdx.remote.cloudview.instance_",null,void 0);YIa(!1);g.Oo(Y5);Y5.length=0},Z5=function(){return!!g.Bu("yt-remote-cast-installed")},ZIa=function(){var a=g.Bu("yt-remote-cast-receiver");
return a?a.friendlyName:null},$Ia=function(){T5("clearCurrentReceiver");
g.Cu("yt-remote-cast-receiver")},aJa=function(){return Z5()?X5()?X5().getCastSession():(V5("getCastSelector: Cast is not initialized."),null):(V5("getCastSelector: Cast API is not installed!"),null)},a6=function(){Z5()?X5()?$5()?(T5("Requesting cast selector."),X5().requestSession()):(T5("Wait for cast API to be ready to request the session."),Y5.push(g.No("yt-remote-cast2-api-ready",a6))):V5("requestCastSelector: Cast is not initialized."):V5("requestCastSelector: Cast API is not installed!")},b6=
function(a,b){$5()?X5().setConnectedScreenStatus(a,b):V5("setConnectedScreenStatus called before ready.")},SIa=function(){var a=0<=g.Uc.search(/ (CrMo|Chrome|CriOS)\//);
return g.tB||a},bJa=function(a,b){X5().init(a,b)},TIa=function(a,b){var c=!1;
X5()||(c=new P5(a,b),c.subscribe("yt-remote-cast2-availability-change",function(d){g.Au("yt-remote-cast-available",d);k4("yt-remote-cast2-availability-change",d)}),c.subscribe("yt-remote-cast2-receiver-selected",function(d){T5("onReceiverSelected: "+d.friendlyName);
g.Au("yt-remote-cast-receiver",d);k4("yt-remote-cast2-receiver-selected",d)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(d){T5("onReceiverResumed: "+d.friendlyName);
g.Au("yt-remote-cast-receiver",d);k4("yt-remote-cast2-receiver-resumed",d)}),c.subscribe("yt-remote-cast2-session-change",function(d){T5("onSessionChange: "+o4(d));
d||g.Cu("yt-remote-cast-receiver");k4("yt-remote-cast2-session-change",d)}),g.Ea("yt.mdx.remote.cloudview.instance_",c,void 0),c=!0);
T5("cloudview.createSingleton_: "+c);return c},X5=function(){return g.Ia("yt.mdx.remote.cloudview.instance_")},UIa=function(a,b){W5(!0);
U5(!1);bJa(a,function(c){c?(YIa(!0),g.Po("yt-remote-cast2-api-ready")):(V5("Failed to initialize cast API."),W5(!1),g.Cu("yt-remote-cast-available"),g.Cu("yt-remote-cast-receiver"),VIa());b(c)})},T5=function(a){q5("cloudview",a)},V5=function(a){q5("cloudview",a)},W5=function(a){T5("setCastInstalled_ "+a);
g.Au("yt-remote-cast-installed",a)},$5=function(){return!!g.Ia("yt.mdx.remote.cloudview.apiReady_")},YIa=function(a){T5("setApiReady_ "+a);
g.Ea("yt.mdx.remote.cloudview.apiReady_",a,void 0)},U5=function(a){g.Ea("yt.mdx.remote.cloudview.initializing_",a,void 0)},c6=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.K=this.N=0;this.u=null;this.hasNext=this.mj=!1;this.U=this.I=this.B=this.F=0;this.D=NaN;this.C=!1;this.reset(a)},d6=function(a){a.audioTrackId=null;
a.u=null;a.playerState=-1;a.mj=!1;a.hasNext=!1;a.N=0;a.K=g.A();a.F=0;a.B=0;a.I=0;a.U=0;a.D=NaN;a.C=!1},e6=function(a){return a.Hb()?(g.A()-a.K)/1E3:0},f6=function(a,b){a.N=b;
a.K=g.A()},g6=function(a){switch(a.playerState){case 1:case 1081:return(g.A()-a.K)/1E3+a.N;
case -1E3:return 0}return a.N},h6=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&d6(a)},i6=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Vb(a.u);b.hasPrevious=a.mj;b.hasNext=a.hasNext;b.playerTime=a.N;b.playerTimeAt=a.K;b.seekableStart=a.F;b.seekableEnd=a.B;b.duration=a.I;b.loadedTime=a.U;b.liveIngestionTime=a.D;return b},k6=function(a,b){g.N.call(this);
this.Ka=0;this.C=a;this.F=[];this.D=new jIa;this.B=this.u=null;this.N=(0,g.z)(this.MN,this);this.I=(0,g.z)(this.Wr,this);this.K=(0,g.z)(this.LN,this);this.U=(0,g.z)(this.TN,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.qA,this),cJa(this))):c=3;0!=c&&(b?this.qA(c):g.Go((0,g.z)(function(){this.qA(c)},this),0));
var d=aJa();d&&j6(this,d);this.subscribe("yt-remote-cast2-session-change",this.U)},l6=function(a){return new c6(a.C.getPlayerContextData())},cJa=function(a){g.Bb("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.F.push(this.C.subscribe(b,g.Ra(this.hP,b),this))},a)},dJa=function(a){g.Bb(a.F,function(b){this.C.unsubscribeByKey(b)},a);
a.F.length=0},m6=function(a){return 1==a.getState()},n6=function(a,b){var c=a.D;
50>c.u.length+c.B.length&&a.D.B.push(b)},p6=function(a,b,c){var d=l6(a);
f6(d,c);-1E3!=d.playerState&&(d.playerState=b);o6(a,d)},q6=function(a,b,c){a.C.sendMessage(b,c)},o6=function(a,b){dJa(a);
a.C.setPlayerContextData(i6(b));cJa(a)},j6=function(a,b){a.B&&(a.B.removeUpdateListener(a.N),a.B.removeMediaListener(a.I),a.Wr(null));
a.B=b;a.B&&(q5("CP","Setting cast session: "+a.B.sessionId),a.B.addUpdateListener(a.N),a.B.addMediaListener(a.I),a.B.media.length&&a.Wr(a.B.media[0]))},eJa=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=l6(a);b.contentId!=d.videoId&&q5("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;f6(d,a.u.getEstimatedTime());o6(a,d)}else q5("CP","No cast media video. Ignoring state update.")},r6=function(a,b,c){return(0,g.z)(function(d){this.Fd("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Fd("Retrying "+b+" using MDx browser channel."),q6(this,b,c))},a)},s6=function(a,b,c){g.N.call(this);
this.F=NaN;this.X=!1;this.N=this.K=this.U=this.W=NaN;this.Z=[];this.D=this.I=this.C=this.Jb=this.u=null;this.ea=a;this.Z.push(g.hp(window,"beforeunload",(0,g.z)(this.YJ,this)));this.B=[];this.Jb=new c6;this.ga=b.id;this.da=b.idType;this.u=fJa(this,c);this.u.subscribe("handlerOpened",this.QN,this);this.u.subscribe("handlerClosed",this.NN,this);this.u.subscribe("handlerError",this.ON,this);this.u.subscribe("handlerMessage",this.PN,this);this.u.Gv(b.token);this.subscribe("remoteQueueChange",function(){var d=
this.Jb.videoId;g.Du()&&g.Au("yt-remote-session-video-id",d)},this)},t6=function(a){q5("conn",a)},fJa=function(a,b){return new j5(n5(a.ea,"/bc"),b,!1,function(){return a.bI()},"shortLived"==a.da)},u6=function(a,b){a.V("proxyStateChange",b)},gJa=function(a){a.F=g.Go((0,g.z)(function(){t6("Connecting timeout");
this.Io(1)},a),2E4)},v6=function(a){g.Io(a.F);
a.F=NaN},w6=function(a){g.Io(a.W);
a.W=NaN},hJa=function(a){x6(a);
a.U=g.Go((0,g.z)(function(){y6(this,"getNowPlaying")},a),2E4)},x6=function(a){g.Io(a.U);
a.U=NaN},jJa=function(a,b){b&&(v6(a),w6(a));
var c=l5(a.u)&&isNaN(a.F);b==c?b&&(u6(a,1),y6(a,"getSubtitlesTrack")):b?(a.hD()&&a.Jb.reset(),u6(a,1),y6(a,"getNowPlaying"),iJa(a)):a.Io(1)},kJa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Jb.videoId&&(g.Rb(b.params)?a.Jb.u=null:a.Jb.u=b.params,a.V("remotePlayerChange"))},lJa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Jb.listId=b.params.listId||a.Jb.listId;h6(a.Jb,c,d);a.V("remoteQueueChange")},nJa=function(a,b){b.params=b.params||{};
lJa(a,b);mJa(a,b);a.V("autoplayDismissed")},mJa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
f6(a.Jb,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Jb.playerState&&(c=-1E3);a.Jb.playerState=c;c=Number(b.params.loadedTime);a.Jb.U=isNaN(c)?0:c;c=Number(b.params.duration);a.Jb.I=isNaN(c)?0:c;c=a.Jb;var d=Number(b.params.liveIngestionTime);c.D=d;c.C=isNaN(d)?!1:!0;c=a.Jb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.F=isNaN(d)?0:d;c.B=isNaN(e)?0:e;1==a.Jb.playerState?hJa(a):x6(a);a.V("remotePlayerChange")},oJa=function(a,b){if(-1E3!=
a.Jb.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Jb.playerState=c;c=parseInt(b.params.currentTime,10);f6(a.Jb,isNaN(c)?0:c);a.V("remotePlayerChange")}},pJa=function(a,b){var c="true"==b.params.muted;
a.Jb.volume=parseInt(b.params.volume,10);a.Jb.muted=c;a.V("remotePlayerChange")},qJa=function(a,b){a.I=b.params.videoId;
a.V("nowAutoplaying",parseInt(b.params.timeout,10))},rJa=function(a,b){var c="true"==b.params.hasNext;
a.Jb.mj="true"==b.params.hasPrevious;a.Jb.hasNext=c;a.V("previousNextChange")},iJa=function(a){g.Io(a.N);
a.N=g.Go((0,g.z)(a.Io,a,1),864E5)},y6=function(a,b,c){c?t6("Sending: action="+b+", params="+g.Tj(c)):t6("Sending: action="+b);
a.u.sendMessage(b,c)},z6=function(a){u5.call(this,"ScreenServiceProxy");
this.Jf=a;this.u=[];this.u.push(this.Jf.$_s("screenChange",(0,g.z)(this.YK,this)));this.u.push(this.Jf.$_s("onlineScreenChange",(0,g.z)(this.OO,this)))},vJa=function(a,b){pHa();
if(!y4||!y4.get("yt-remote-disable-remote-module-for-dev")){b=g.L("MDX_CONFIG")||b;hHa();w4();A6||(A6=new m5(b?b.loungeApiHost:void 0),qHa()&&(A6.u="/api/loungedev"));B6||(B6=g.Ia("yt.mdx.remote.deferredProxies_")||[],g.Ea("yt.mdx.remote.deferredProxies_",B6,void 0));sJa();var c=C6();if(!c){var d=new E5(A6);g.Ea("yt.mdx.remote.screenService_",d,void 0);c=C6();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,disableCastApi:b.disableCastApi,
enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken});XIa(a,d,function(h){h?D6()&&b6(D6(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){k4("yt-remote-receiver-availability-change")})},e)}if(b&&!g.Ia("yt.mdx.remote.initialized_")){g.Ea("yt.mdx.remote.initialized_",!0,void 0);
E6("Initializing: "+g.Tj(b));F6.push(g.No("yt-remote-cast2-availability-change",function(){k4("yt-remote-receiver-availability-change")}));
F6.push(g.No("yt-remote-cast2-receiver-selected",function(){G6(null);k4("yt-remote-auto-connect","cast-selector-receiver")}));
F6.push(g.No("yt-remote-cast2-receiver-resumed",function(){k4("yt-remote-receiver-resumed","cast-selector-receiver")}));
F6.push(g.No("yt-remote-cast2-session-change",tJa));F6.push(g.No("yt-remote-connection-change",function(h){h?b6(D6(),"YouTube TV"):H6()||(b6(null,null),$Ia())}));
e=I6();b.isAuto&&(e.id+="#dial");g.Wo("desktop_enable_autoplay")&&(e.capabilities=["atp"]);e.name=b.device;e.app=b.app;var f=b.theme;f&&(e.theme=f);E6(" -- with channel params: "+g.Tj(e));e?(g.Au("yt-remote-session-app",e.app),g.Au("yt-remote-session-name",e.name)):(g.Cu("yt-remote-session-app"),g.Cu("yt-remote-session-name"));g.Ea("yt.mdx.remote.channelParams_",e,void 0);c.start();D6()||uJa()}}},wJa=function(){var a=C6().Jf.$_gos();
var b=J6();b&&K6()&&(r4(a,b)||a.push(b));return gHa(a)},L6=function(){var a=xJa();
!a&&Z5()&&ZIa()&&(a={key:"cast-selector-receiver",name:ZIa()});return a},xJa=function(){var a=wJa(),b=J6();
b||(b=H6());return g.cb(a,function(c){return b&&n4(b,c.key)?!0:!1})},J6=function(){var a=D6();
if(!a)return null;var b=C6().Qg();return s4(b,a)},tJa=function(a){E6("remote.onCastSessionChange_: "+o4(a));
if(a){var b=J6();if(b&&b.id==a.id){if(b6(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))M6&&(M6.token=a),(b=K6())&&b.Gv(a)}else b&&N6(),O6(a,1)}else K6()&&N6()},N6=function(){$5()?X5().stopSession():V5("stopSession called before API ready.");
var a=K6();a&&(a.disconnect(1),P6(null))},Q6=function(){var a=K6();
return!!a&&3!=a.getProxyState()},E6=function(a){q5("remote",a)},C6=function(){if(!R6){var a=g.Ia("yt.mdx.remote.screenService_");
R6=a?new z6(a):null}return R6},D6=function(){return g.Ia("yt.mdx.remote.currentScreenId_")},yJa=function(a){g.Ea("yt.mdx.remote.currentScreenId_",a,void 0)},zJa=function(){return g.Ia("yt.mdx.remote.connectData_")},G6=function(a){g.Ea("yt.mdx.remote.connectData_",a,void 0)},K6=function(){return g.Ia("yt.mdx.remote.connection_")},P6=function(a){var b=K6();
G6(null);a||yJa("");g.Ea("yt.mdx.remote.connection_",a,void 0);B6&&(g.Bb(B6,function(c){c(a)}),B6.length=0);
b&&!a?k4("yt-remote-connection-change",!1):!b&&a&&k4("yt-remote-connection-change",!0)},H6=function(){var a=g.Du();
if(!a)return null;var b=C6();if(!b)return null;b=b.Qg();return s4(b,a)},O6=function(a,b){D6();
J6()&&J6();if(S6)M6=a;else{yJa(a.id);var c=new s6(A6,a,I6());c.connect(b,zJa());c.subscribe("beforeDisconnect",function(d){k4("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){K6()&&(K6(),P6(null))});
c.subscribe("browserChannelAuthError",function(){var d=J6();d&&"shortLived"==d.idType&&($5()?X5().handleBrowserChannelAuthError():V5("refreshLoungeToken called before API ready."))});
P6(c)}},uJa=function(){var a=H6();
a?(E6("Resume connection to: "+o4(a)),O6(a,0)):(x4(),$Ia(),E6("Skipping connecting because no session screen found."))},sJa=function(){var a=I6();
if(g.Rb(a)){a=v4();var b=g.Bu("yt-remote-session-name")||"",c=g.Bu("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ea("yt.mdx.remote.channelParams_",a,void 0)}},I6=function(){return g.Ia("yt.mdx.remote.channelParams_")||{}},T6=function(a,b,c){g.B.call(this);
var d=this;this.B=a;this.J=b;this.wb=c;this.events=new g.YN(this);this.W=this.events.P(this.J,"onVolumeChange",function(e){AJa(d,e)});
this.F=!1;this.suggestion=null;this.I=new g.SK(64);this.u=new g.E(this.oH,500,this);this.C=new g.E(this.pH,1E3,this);this.N=new B4(this.LR,0,this);this.D={};this.U=new g.E(this.RH,1E3,this);this.K=new C4(this.seekTo,1E3,this);this.X=g.Ja;g.C(this,this.events);this.events.P(b,"onCaptionsTrackListChanged",this.xO);this.events.P(b,"captionschanged",this.JN);this.events.P(b,"captionssettingschanged",this.tH);this.events.P(b,"videoplayerreset",this.jv);this.events.P(b,"mdxautoplaycancel",function(){d.wb.AC()});
a=this.wb;a.ma();a.subscribe("proxyStateChange",this.dG,this);a.subscribe("remotePlayerChange",this.hs,this);a.subscribe("remoteQueueChange",this.jv,this);a.subscribe("previousNextChange",this.aG,this);a.subscribe("nowAutoplaying",this.VF,this);a.subscribe("autoplayDismissed",this.vF,this);g.C(this,this.u);g.C(this,this.C);g.C(this,this.N);g.C(this,this.U);g.C(this,this.K);this.tH();this.jv();this.hs()},AJa=function(a,b){if(U6(a)){a.wb.unsubscribe("remotePlayerChange",a.hs,a);
var c=Math.round(b.volume),d=!!b.muted,e=l6(a.wb);if(c!==e.volume||d!==e.muted)a.wb.setVolume(c,d),a.U.start();a.wb.subscribe("remotePlayerChange",a.hs,a)}},BJa=function(a){a.Cb(0);
a.u.stop();a.tb(new g.SK(64))},V6=function(a,b){if(U6(a)&&!a.F){var c=null;
b&&(c={style:a.J.getSubtitlesUserSettings()},g.Xb(c,b));a.wb.cI(a.J.getVideoData(1).videoId,c);a.D=l6(a.wb).u}},W6=function(a,b){var c=a.J.getPlaylist();
if(null===c||void 0===c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.J.getVideoData(1);a.wb.playVideo(c.videoId,b,d,e,c.playerParams,c.ea,UGa(c));a.tb(new g.SK(1))},CJa=function(a,b){if(b){var c=a.J.getOption("captions","tracklist",{HD:1});
c&&c.length?(a.J.setOption("captions","track",b),a.F=!1):(a.J.loadModule("captions"),a.F=!0)}else a.J.setOption("captions","track",{})},U6=function(a){return l6(a.wb).videoId===a.J.getVideoData(1).videoId},X6=function(){g.U.call(this,{G:"div",
L:"ytp-mdx-manual-pairing-popup-dialog",T:{role:"dialog"},R:[{G:"div",L:"ytp-mdx-manual-pairing-popup-dialog-inner-content",R:[{G:"div",L:"ytp-mdx-manual-pairing-popup-title",ba:"Connecting to your TV on web using a code will be going away soon"},{G:"div",L:"ytp-mdx-manual-pairing-popup-buttons",R:[{G:"button",ia:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],ba:"Learn more"},{G:"button",ia:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],ba:"OK"}]}]}]});this.u=new g.tM(this,250);this.learnMoreButton=
this.ha("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.ha("ytp-mdx-manual-pairing-popup-ok");g.C(this,this.u);this.P(this.learnMoreButton,"click",this.B);this.P(this.okButton,"click",this.C)},Y6=function(){g.U.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",T:{role:"dialog"},R:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",R:[{G:"div",L:"ytp-mdx-popup-title",ba:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",ba:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",R:[{G:"button",ia:["ytp-button","ytp-mdx-privacy-popup-cancel"],ba:"Cancel"},{G:"button",ia:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],ba:"Confirm"}]}]}]});this.u=new g.tM(this,250);this.cancelButton=this.ha("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.ha("ytp-mdx-privacy-popup-confirm");g.C(this,this.u);this.P(this.cancelButton,"click",this.B);this.P(this.confirmButton,"click",this.C)},Z6=function(a){g.U.call(this,{G:"div",
L:"ytp-remote",R:[{G:"div",L:"ytp-remote-display-status",R:[{G:"div",L:"ytp-remote-display-status-icon",R:[g.Yma()]},{G:"div",L:"ytp-remote-display-status-text",ba:"{{statustext}}"}]}]});this.api=a;this.u=new g.tM(this,250);g.C(this,this.u);this.P(a,"presentingplayerstatechange",this.B);DJa(this,a.Va())},DJa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
c=g.T(b,128)?g.sK("Error on $RECEIVER_NAME",c):b.Hb()||g.T(b,4)?g.sK("Playing on $RECEIVER_NAME",c):g.sK("Connected to $RECEIVER_NAME",c);a.za("statustext",c);a.u.show()}else a.u.hide()},$6=function(a,b){g.sR.call(this,"Play on",0,a,b);
this.J=a;this.gm={};this.P(a,"onMdxReceiversChange",this.D);this.P(a,"presentingplayerstatechange",this.D);this.D()},a7=function(a){g.hO.call(this,a);
this.gi={key:q4(),name:"This computer"};this.nh=null;this.subscriptions=[];this.Rz=this.wb=null;this.gm=[this.gi];this.ol=this.gi;this.Mc=new g.SK(64);this.dE=0;this.Pe=-1;this.np=null;this.ls=this.yu=!1;this.Ln=this.Mp=null;if(!g.DD(this.player.S())){a=this.player;var b=g.MN(a);b&&(b=b.Cl())&&(b=new $6(a,b),g.C(this,b));b=new Z6(a);g.C(this,b);g.WN(a,b.element,4);this.Mp=new Y6;g.C(this,this.Mp);g.WN(a,this.Mp.element,4);g.P(this.player.S().experiments,"pair_servlet_deprecation_warning_enabled")&&
!g.P(this.player.S().experiments,"deprecate_pair_servlet_enabled")&&(this.np=new X6,g.C(this,this.np),g.WN(a,this.np.element,4));this.ls=!!H6();this.yu=!!g.Bu("yt-remote-manual-pairing-warning-shown")}},b7=function(a){a.Ln&&(a.player.removeEventListener("presentingplayerstatechange",a.Ln),a.Ln=null)},EJa=function(a,b,c){a.Mc=c;
a.player.V("presentingplayerstatechange",new g.ZJ(c,b))},FJa=function(a,b,c){var d=!1;
1===b?d=!a.ls:2===b&&(d=!a.yu);d&&g.aK(c,8)&&(a.player.pauseVideo(),b7(a))},c7=function(a,b){if(b.key!==a.ol.key)if(b.key===a.gi.key)N6();
else{if(a.np&&!a.yu&&b!==a.gi&&"cast-selector-receiver"!==b.key&&g.OD(a.player.S()))GJa(a);else{var c;(c=!g.P(a.player.S().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.L("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.L("SESSION_INDEX")&&!g.L("LOGGED_IN")))||a.ls||!a.Mp);(c?0:g.OD(a.player.S())||g.SD(a.player.S()))&&HJa(a)}a.ol=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&
g.P(a.player.S().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=f.Ma(l).videoId}else h=[e];f=a.player.getCurrentTime(1);d={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.ea,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=UGa(c))&&(d.locationInfo=c);c=d}E6("Connecting to: "+g.Tj(b));"cast-selector-receiver"==b.key?(G6(c||null),c=c||null,
$5()?X5().setLaunchParams(c):V5("setLaunchParams called before ready.")):!c&&Q6()&&D6()==b.key?k4("yt-remote-connection-change",!0):(N6(),G6(c||null),c=C6().Qg(),(c=s4(c,b.key))&&O6(c,1))}},HJa=function(a){a.player.Va().Hb()?a.player.pauseVideo():(a.Ln=function(b){FJa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.Ln));
a.Mp&&a.Mp.Ec();K6()||(S6=!0)},GJa=function(a){a.player.Va().Hb()?a.player.pauseVideo():(a.Ln=function(b){FJa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.Ln));
a.np&&a.np.Ec();K6()||(S6=!0)},HHa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},R4={"'":"\\'"},IJa={},cHa={PS:"atp",d2:"ska",Z0:"que",i_:"mus",b2:"sus",EW:"dsp",v1:"seq",NZ:"mic",CV:"dpa"},y4,u4="",vHa=rHa("loadCastFramework")||rHa("loadCastApplicationFramework"),WIa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ta(B4,g.B);g.k=B4.prototype;g.k.VJ=function(a){this.D=arguments;this.u=!1;this.gb?this.C=g.A()+this.Kf:this.gb=g.Pm(this.F,this.Kf)};
g.k.stop=function(){this.gb&&(g.v.clearTimeout(this.gb),this.gb=null);this.C=null;this.u=!1;this.D=[]};
g.k.pause=function(){++this.B};
g.k.resume=function(){this.B&&(--this.B,!this.B&&this.u&&(this.u=!1,this.I.apply(null,this.D)))};
g.k.ca=function(){this.stop();B4.Dd.ca.call(this)};
g.k.WJ=function(){this.C?(this.gb=g.Pm(this.F,this.C-g.A()),this.C=null):(this.gb=null,this.B?this.u=!0:(this.u=!1,this.I.apply(null,this.D)))};g.u(C4,g.B);g.k=C4.prototype;g.k.vE=function(a){this.C=arguments;this.gb||this.B?this.u=!0:D4(this)};
g.k.stop=function(){this.gb&&(g.v.clearTimeout(this.gb),this.gb=null,this.u=!1,this.C=null)};
g.k.pause=function(){this.B++};
g.k.resume=function(){this.B--;this.B||!this.u||this.gb||(this.u=!1,D4(this))};
g.k.ca=function(){g.B.prototype.ca.call(this);this.stop()};F4.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
F4.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};var H4=new g.em;g.u(yHa,g.Il);J4.prototype.u=null;J4.prototype.getOptions=function(){var a;(a=this.u)||(a={},AHa(this)&&(a[0]=!0,a[1]=!0),a=this.u=a);return a};var d7;g.Ta(zHa,J4);d7=new zHa;g.k=K4.prototype;g.k.pn=null;g.k.Ci=!1;g.k.hq=null;g.k.ZA=null;g.k.Qp=null;g.k.aq=null;g.k.fl=null;g.k.im=null;g.k.Mn=null;g.k.Ce=null;g.k.Ys=0;g.k.Gi=null;g.k.hw=null;g.k.Fl=null;g.k.sr=-1;g.k.dH=!0;g.k.Xm=!1;g.k.ty=0;g.k.wv=null;var FHa={},N4={};g.k=K4.prototype;g.k.setTimeout=function(a){this.F=a};
g.k.KQ=function(a){a=a.target;var b=this.wv;b&&3==W4(a)?b.vE():this.ZH(a)};
g.k.ZH=function(a){try{if(a==this.Ce)a:{var b=W4(this.Ce),c=this.Ce.I,d=this.Ce.getStatus();if(g.ze&&!g.de(10)||g.Be&&!g.ce("420+")){if(4>b)break a}else if(3>b||3==b&&!g.wg&&!Y4(this.Ce))break a;this.Xm||4!=b||7==c||(8==c||0>=d?this.u.li(3):this.u.li(2));S4(this);var e=this.Ce.getStatus();this.sr=e;var f=Y4(this.Ce);(this.Ci=200==e)?(4==b&&P4(this),this.I?(GHa(this,b,f),g.wg&&this.Ci&&3==b&&(this.D.ya(this.C,"tick",this.DQ),this.C.start())):O4(this,f),this.Ci&&!this.Xm&&(4==b?this.u.cu(this):(this.Ci=
!1,M4(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Fl=3,I4(13)):(this.Fl=0,I4(14)),P4(this),Q4(this))}}catch(h){this.Ce&&Y4(this.Ce)}finally{}};
g.k.DQ=function(){var a=W4(this.Ce),b=Y4(this.Ce);this.Ys<b.length&&(S4(this),GHa(this,a,b),this.Ci&&4!=a&&M4(this))};
g.k.cQ=function(a){G4((0,g.z)(this.bQ,this,a),0)};
g.k.bQ=function(a){this.Xm||(S4(this),O4(this,a),M4(this))};
g.k.nG=function(a){G4((0,g.z)(this.aQ,this,a),0)};
g.k.aQ=function(a){this.Xm||(P4(this),this.Ci=a,this.u.cu(this),this.u.li(4))};
g.k.cancel=function(){this.Xm=!0;P4(this)};
g.k.kQ=function(){this.hq=null;var a=g.A();0<=a-this.ZA?(2!=this.aq&&this.u.li(3),P4(this),this.Fl=2,I4(18),Q4(this)):JHa(this,this.ZA-a)};
g.k.getLastError=function(){return this.Fl};g.Ta(U4,g.em);var QHa=/^https?$/i,JJa=["POST","PUT"];g.k=U4.prototype;
g.k.send=function(a,b,c,d){if(this.u)throw Error("[goog.net.XhrIo] Object is active with another request="+this.U+"; newUri="+a);b=b?b.toUpperCase():"GET";this.U=a;this.D="";this.I=0;this.wa=b;this.ga=!1;this.C=!0;this.u=this.da?BHa(this.da):BHa(d7);this.Z=this.da?this.da.getOptions():d7.getOptions();this.u.onreadystatechange=(0,g.z)(this.bG,this);try{j4(X4(this,"Opening Xhr")),this.ka=!0,this.u.open(b,String(a),!0),this.ka=!1}catch(f){j4(X4(this,"Error opening Xhr: "+f.message));PHa(this,f);return}a=
c||"";var e=this.headers.clone();d&&ZGa(d,function(f,h){e.set(h,f)});
d=g.cb(e.sh(),NHa);c=g.v.FormData&&a instanceof g.v.FormData;!g.gb(JJa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.u.setRequestHeader(h,f)},this);
this.Aa&&(this.u.responseType=this.Aa);"withCredentials"in this.u&&this.u.withCredentials!==this.ea&&(this.u.withCredentials=this.ea);try{SHa(this),0<this.K&&(this.X=MHa(this.u),j4(X4(this,"Will abort after "+this.K+"ms if incomplete, xhr2 "+this.X)),this.X?(this.u.timeout=this.K,this.u.ontimeout=(0,g.z)(this.pD,this)):this.W=g.Pm(this.pD,this.K,this)),j4(X4(this,"Sending request")),this.N=!0,this.u.send(a),this.N=!1}catch(f){j4(X4(this,"Send error: "+f.message)),PHa(this,f)}};
g.k.pD=function(){"undefined"!=typeof g.q_&&this.u&&(this.D="Timed out after "+this.K+"ms, aborting",this.I=8,X4(this,this.D),this.dispatchEvent("timeout"),this.abort(8))};
g.k.abort=function(a){this.u&&this.C&&(X4(this,"Aborting"),this.C=!1,this.F=!0,this.u.abort(),this.F=!1,this.I=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),V4(this))};
g.k.ca=function(){this.u&&(this.C&&(this.C=!1,this.F=!0,this.u.abort(),this.F=!1),V4(this,!0));U4.Dd.ca.call(this)};
g.k.bG=function(){this.ma()||(this.ka||this.N||this.F?RHa(this):this.jP())};
g.k.jP=function(){RHa(this)};
g.k.isActive=function(){return!!this.u};
g.k.isComplete=function(){return 4==W4(this)};
g.k.getStatus=function(){try{return 2<W4(this)?this.u.status:-1}catch(a){return-1}};
g.k.getResponseHeader=function(a){if(this.u&&this.isComplete())return a=this.u.getResponseHeader(a),null===a?void 0:a};
g.k.getLastError=function(){return"string"===typeof this.D?this.D:String(this.D)};g.k=THa.prototype;g.k.qy=null;g.k.Fg=null;g.k.xv=!1;g.k.oD=null;g.k.Ct=null;g.k.Uy=null;g.k.sy=null;g.k.Ka=null;g.k.tk=-1;g.k.rr=null;g.k.wq=null;g.k.connect=function(a){this.sy=a;a=Z4(this.u,null,this.sy);I4(3);this.oD=g.A();var b=this.u.K;null!=b?(this.rr=b[0],(this.wq=b[1])?(this.Ka=1,UHa(this)):(this.Ka=2,a5(this))):(h4(a,"MODE","init"),this.Fg=new K4(this,void 0,void 0,void 0),this.Fg.pn=this.qy,L4(this.Fg,a,!1,null,!0),this.Ka=0)};
g.k.ZI=function(a){if(a)this.Ka=2,a5(this);else{I4(4);var b=this.u;b.kj=b.ll.tk;h5(b,9)}a&&this.li(2)};
g.k.Ax=function(a){return this.u.Ax(a)};
g.k.abort=function(){this.Fg&&(this.Fg.cancel(),this.Fg=null);this.tk=-1};
g.k.nD=function(){return!1};
g.k.eG=function(a,b){this.tk=a.sr;if(0==this.Ka)if(b){try{var c=this.B.parse(b)}catch(d){c=this.u;c.kj=this.tk;h5(c,2);return}this.rr=c[0];this.wq=c[1]}else c=this.u,c.kj=this.tk,h5(c,2);else if(2==this.Ka)if(this.xv)I4(7),this.Uy=g.A();else if("11111"==b){if(I4(6),this.xv=!0,this.Ct=g.A(),c=this.Ct-this.oD,!g.ze||g.de(10)||500>c)this.tk=200,this.Fg.cancel(),I4(12),$4(this.u,this,!0)}else I4(8),this.Ct=this.Uy=g.A(),this.xv=!1};
g.k.cu=function(){this.tk=this.Fg.sr;if(this.Fg.Ci)0==this.Ka?this.wq?(this.Ka=1,UHa(this)):(this.Ka=2,a5(this)):2==this.Ka&&((!g.ze||g.de(10)?!this.xv:200>this.Uy-this.Ct)?(I4(11),$4(this.u,this,!1)):(I4(12),$4(this.u,this,!0)));else{0==this.Ka?I4(9):2==this.Ka&&I4(10);var a=this.u;this.Fg.getLastError();a.kj=this.tk;h5(a,2)}};
g.k.Gs=function(){return this.u.Gs()};
g.k.isActive=function(){return this.u.isActive()};
g.k.li=function(a){this.u.li(a)};g.k=b5.prototype;g.k.jj=null;g.k.Pq=null;g.k.sg=null;g.k.Zd=null;g.k.py=null;g.k.Dt=null;g.k.UB=null;g.k.au=null;g.k.Ur=0;g.k.aN=0;g.k.If=null;g.k.ul=null;g.k.Zj=null;g.k.en=null;g.k.ll=null;g.k.dw=null;g.k.ip=-1;g.k.cE=-1;g.k.kj=-1;g.k.Mo=0;g.k.wo=0;g.k.Ym=8;g.Ta(WHa,g.Il);g.Ta(XHa,g.Il);g.k=b5.prototype;g.k.connect=function(a,b,c,d,e){I4(0);this.py=b;this.Pq=c||{};d&&void 0!==e&&(this.Pq.OSID=d,this.Pq.OAID=e);this.F?(G4((0,g.z)(this.mC,this,a),100),aIa(this)):this.mC(a)};
g.k.mC=function(a){this.ll=new THa(this);this.ll.qy=this.jj;this.ll.B=this.D;this.ll.connect(a)};
g.k.nD=function(){return 0==this.Ka};
g.k.getState=function(){return this.Ka};
g.k.lG=function(a){this.ul=null;eIa(this,a)};
g.k.kG=function(){this.Zj=null;this.Zd=new K4(this,this.B,"rpc",this.I);this.Zd.pn=this.jj;this.Zd.ty=0;var a=this.UB.clone();f4(a,"RID","rpc");f4(a,"SID",this.B);f4(a,"CI",this.dw?"0":"1");f4(a,"AID",this.ip);c5(this,a);if(!g.ze||g.de(10))f4(a,"TYPE","xmlhttp"),L4(this.Zd,a,!0,this.au,!1);else{f4(a,"TYPE","html");var b=this.Zd,c=!!this.au;b.aq=3;b.fl=g4(a.clone());IHa(b,c)}};
g.k.eG=function(a,b){if(0!=this.Ka&&(this.Zd==a||this.sg==a))if(this.kj=a.sr,this.sg==a&&3==this.Ka)if(7<this.Ym){try{var c=this.D.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Zj){if(this.Zd)if(this.Zd.Qp+3E3<this.sg.Qp)e5(this),this.Zd.cancel(),this.Zd=null;else break a;g5(this);I4(19)}}else this.cE=c[1],0<this.cE-this.ip&&37500>c[2]&&this.dw&&0==this.wo&&!this.en&&(this.en=G4((0,g.z)(this.FN,this),6E3));else h5(this,11)}else b!=IJa.rV.u&&h5(this,11);else if(this.Zd==
a&&e5(this),!g.oc(b)){c=this.D.parse(b);for(var d=0;d<c.length;d++){var e=c[d];this.ip=e[0];e=e[1];2==this.Ka?"c"==e[0]?(this.B=e[1],this.au=e[2],e=e[3],null!=e?this.Ym=e:this.Ym=6,this.Ka=3,this.If&&this.If.iC(),this.UB=Z4(this,this.Gs()?this.au:null,this.py),fIa(this)):"stop"==e[0]&&h5(this,7):3==this.Ka&&("stop"==e[0]?h5(this,7):"noop"!=e[0]&&this.If&&this.If.hC(e),this.wo=0)}}};
g.k.FN=function(){null!=this.en&&(this.en=null,this.Zd.cancel(),this.Zd=null,g5(this),I4(20))};
g.k.cu=function(a){if(this.Zd==a){e5(this);this.Zd=null;var b=2}else if(this.sg==a)this.sg=null,b=1;else return;this.kj=a.sr;if(0!=this.Ka)if(a.Ci)1==b?(b=H4,b.dispatchEvent(new WHa(b,a.Mn?a.Mn.length:0,g.A()-a.Qp,this.Mo)),d5(this),this.C.length=0):fIa(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.kj)){if(d=1==b)this.sg||this.ul||1==this.Ka||2<=this.Mo?d=!1:(this.ul=G4((0,g.z)(this.lG,this,a),gIa(this,this.Mo)),this.Mo++,d=!0);d=!(d||2==b&&g5(this))}if(d)switch(c){case 1:h5(this,
5);break;case 4:h5(this,10);break;case 3:h5(this,6);break;case 7:h5(this,12);break;default:h5(this,2)}}};
g.k.uJ=function(a){if(!g.gb(arguments,this.Ka))throw Error("Unexpected channel state: "+this.Ka);};
g.k.vR=function(a){a?I4(2):(I4(1),hIa(this,8))};
g.k.Ax=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new U4;a.ea=!1;return a};
g.k.isActive=function(){return!!this.If&&this.If.isActive(this)};
g.k.li=function(a){var b=H4;b.dispatchEvent(new XHa(b,a))};
g.k.Gs=function(){return!(!g.ze||g.de(10))};
g.k=iIa.prototype;g.k.iC=function(){};
g.k.hC=function(){};
g.k.gC=function(){};
g.k.kx=function(){};
g.k.RC=function(){return{}};
g.k.isActive=function(){return!0};g.k=jIa.prototype;g.k.isEmpty=function(){return g.ib(this.u)&&g.ib(this.B)};
g.k.clear=function(){this.u=[];this.B=[]};
g.k.contains=function(a){return g.gb(this.u,a)||g.gb(this.B,a)};
g.k.remove=function(a){var b=this.u;var c=(0,g.nBa)(b,a);0<=c?(g.lb(b,c),b=!0):b=!1;return b||g.nb(this.B,a)};
g.k.Yf=function(){for(var a=[],b=this.u.length-1;0<=b;--b)a.push(this.u[b]);var c=this.B.length;for(b=0;b<c;++b)a.push(this.B[b]);return a};g.Ta(i5,g.B);g.k=i5.prototype;g.k.UP=function(){this.Kf=Math.min(3E5,2*this.Kf);this.C();this.B&&this.start()};
g.k.start=function(){var a=this.Kf+15E3*Math.random();g.pn(this.u,a);this.B=g.A()+a};
g.k.stop=function(){this.u.stop();this.B=0};
g.k.isActive=function(){return this.u.isActive()};
g.k.reset=function(){this.u.stop();this.Kf=5E3};g.Ta(j5,iIa);g.k=j5.prototype;g.k.subscribe=function(a,b,c){return this.C.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.C.unsubscribe(a,b,c)};
g.k.Qf=function(a){return this.C.Qf(a)};
g.k.V=function(a,b){return this.C.V.apply(this.C,arguments)};
g.k.dispose=function(){this.W||(this.W=!0,g.bg(this.C),mIa(this),g.bg(this.B),this.B=null,this.X=function(){return""})};
g.k.ma=function(){return this.W};
g.k.connect=function(a,b,c){if(!this.u||2!=this.u.getState()){this.U="";this.B.stop();this.F=a||null;this.D=b||0;a=this.Z+"/test";b=this.Z+"/bind";var d=new b5(c?c.firstTestResults:null,c?c.secondTestResults:null,this.da),e=this.u;e&&(e.If=null);d.If=this;this.u=d;k5(this);if(this.u){d=g.L("ID_TOKEN");var f=this.u.jj||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.u.jj=f}e?(3!=e.getState()&&0==cIa(e)||e.getState(),this.u.connect(a,b,this.I,e.B,e.ip)):c?this.u.connect(a,
b,this.I,c.sessionId,c.arrayId):this.u.connect(a,b,this.I)}};
g.k.sendMessage=function(a,b){var c={_sc:a};b&&g.Xb(c,b);this.B.isActive()||2==(this.u?this.u.getState():0)?this.K.push(c):l5(this)&&(k5(this),bIa(this.u,c))};
g.k.iC=function(){this.B.reset();this.F=null;this.D=0;if(this.K.length){var a=this.K;this.K=[];for(var b=0,c=a.length;b<c;++b)bIa(this.u,a[b])}this.V("handlerOpened")};
g.k.gC=function(a){var b=2==a&&401==this.u.kj;4==a||b||this.B.start();this.V("handlerError",a,b)};
g.k.kx=function(a){if(!this.B.isActive())this.V("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.K.push(d)}};
g.k.RC=function(){var a={v:2};this.U&&(a.gsessionid=this.U);0!=this.D&&(a.ui=""+this.D);0!=this.N&&(a.ui=""+this.N);this.F&&g.Xb(a,this.F);return a};
g.k.hC=function(a){"S"==a[0]?this.U=a[1]:"gracefulReconnect"==a[0]?(this.B.start(),$Ha(this.u)):this.V("handlerMessage",new kIa(a[0],a[1]))};
g.k.Gv=function(a){(this.I.loungeIdToken=a)||this.B.stop();if(this.ga&&this.u){var b=this.u.jj||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.u.jj=b}};
g.k.VQ=function(){this.B.isActive();0==cIa(this.u)&&this.connect(this.F,this.D)};m5.prototype.D=function(a,b,c,d){b?a(d):a({text:c.responseText})};
m5.prototype.C=function(a,b){a(Error("Request error: "+b.status))};
m5.prototype.F=function(a){a(Error("request timed out"))};var tIa=g.A(),p5=null,s5=Array(50),r5=-1,t5=!1;g.Ta(u5,g.N);u5.prototype.Qg=function(){return this.screens};
u5.prototype.contains=function(a){return!!r4(this.screens,a)};
u5.prototype.get=function(a){return a?s4(this.screens,a):null};
u5.prototype.info=function(a){q5(this.I,a)};g.u(v5,g.N);g.k=v5.prototype;g.k.start=function(){!this.u&&isNaN(this.gb)&&this.yG()};
g.k.stop=function(){this.u&&(this.u.abort(),this.u=null);isNaN(this.gb)||(g.Io(this.gb),this.gb=NaN)};
g.k.ca=function(){this.stop();g.N.prototype.ca.call(this)};
g.k.yG=function(){this.gb=NaN;this.u=g.vq(n5(this.F,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.I},timeout:5E3,onSuccess:(0,g.z)(this.WK,this),onError:(0,g.z)(this.VK,this),onTimeout:(0,g.z)(this.XK,this)})};
g.k.WK=function(a,b){this.u=null;var c=b.screen||{};c.dialId=this.C;c.name=this.D;this.V("pairingComplete",new m4(c))};
g.k.VK=function(a){this.u=null;a.status&&404==a.status?this.B>=KJa.length?this.V("pairingFailed",Error("DIAL polling timed out")):(a=KJa[this.B],this.gb=g.Go((0,g.z)(this.yG,this),a),this.B++):this.V("pairingFailed",Error("Server error "+a.status))};
g.k.XK=function(){this.u=null;this.V("pairingFailed",Error("Server not responding"))};
var KJa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ta(x5,u5);g.k=x5.prototype;g.k.start=function(){w5(this)&&this.V("screenChange");!g.Bu("yt-remote-lounge-token-expiration")&&xIa(this);g.Io(this.u);this.u=g.Go((0,g.z)(this.start,this),1E4)};
g.k.add=function(a,b){w5(this);uIa(this,a);y5(this,!1);this.V("screenChange");b(a);a.token||xIa(this)};
g.k.remove=function(a,b){var c=w5(this);wIa(this,a)&&(y5(this,!1),c=!0);b(a);c&&this.V("screenChange")};
g.k.Zv=function(a,b,c,d){var e=w5(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,y5(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.V("screenChange")};
g.k.ca=function(){g.Io(this.u);x5.Dd.ca.call(this)};
g.k.eK=function(a){w5(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}y5(this,!b);b&&q5(this.I,"Missed "+b+" lounge tokens.")};
g.k.dK=function(a){q5(this.I,"Requesting lounge tokens failed: "+a)};g.u(A5,g.N);g.k=A5.prototype;g.k.start=function(){var a=parseInt(g.Bu("yt-remote-fast-check-period")||"0",10);(this.D=g.A()-144E5<a?0:a)?D5(this):(this.D=g.A()+3E5,g.Au("yt-remote-fast-check-period",this.D),this.cA())};
g.k.isEmpty=function(){return g.Rb(this.u)};
g.k.update=function(){z5("Updating availability on schedule.");var a=this.I(),b=g.Eb(this.u,function(c,d){return c&&!!s4(a,d)},this);
C5(this,b)};
g.k.ca=function(){g.Io(this.C);this.C=NaN;this.B&&(this.B.abort(),this.B=null);g.N.prototype.ca.call(this)};
g.k.cA=function(){g.Io(this.C);this.C=NaN;this.B&&this.B.abort();var a=zIa(this);if(i4(a)){var b=n5(this.F,"/pairing/get_screen_availability");this.B=o5(this.F,b,{lounge_token:g.Lb(a).join(",")},(0,g.z)(this.DP,this,a),(0,g.z)(this.CP,this))}else C5(this,{}),D5(this)};
g.k.DP=function(a,b){this.B=null;var c=g.Lb(zIa(this));if(g.zb(c,g.Lb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;C5(this,d);D5(this)}else this.Fd("Changing Screen set during request."),this.cA()};
g.k.CP=function(a){this.Fd("Screen availability failed: "+a);this.B=null;D5(this)};
g.k.Fd=function(a){q5("OnlineScreenService",a)};g.Ta(E5,u5);g.k=E5.prototype;g.k.start=function(){this.B.start();this.u.start();this.screens.length&&(this.V("screenChange"),this.u.isEmpty()||this.V("onlineScreenChange"))};
g.k.add=function(a,b,c){this.B.add(a,b,c)};
g.k.remove=function(a,b,c){this.B.remove(a,b,c);this.u.update()};
g.k.Zv=function(a,b,c,d){this.B.contains(a)?this.B.Zv(a,b,c,d):(a="Updating name of unknown screen: "+a.name,q5(this.I,a),d(Error(a)))};
g.k.Qg=function(a){return a?this.screens:g.pb(this.screens,g.Ne(this.C,function(b){return!this.contains(b)},this))};
g.k.dI=function(){return g.Ne(this.Qg(!0),function(a){return!!this.u.u[a.id]},this)};
g.k.eI=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new v5(this.F,a,b,c);f.subscribe("pairingComplete",(0,g.z)(function(h){g.bg(f);d(F5(this,h))},this));
f.subscribe("pairingFailed",function(h){g.bg(f);e(h)});
f.start();return(0,g.z)(f.stop,f)};
g.k.WR=function(a,b,c,d){g.vq(n5(this.F,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.z)(function(e,f){var h=new m4(f.screen||{});if(!h.name||DIa(this,h.name)){a:{var l=h.name;for(var m=2,n=b(l,m);DIa(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}h.name=l}c(F5(this,h))},this),
onError:(0,g.z)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.z)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ca=function(){g.bg(this.B);g.bg(this.u);E5.Dd.ca.call(this)};
g.k.kK=function(){FIa(this);this.V("screenChange");this.u.update()};
E5.prototype.dispose=E5.prototype.dispose;g.Ta(H5,g.N);g.k=H5.prototype;g.k.getScreen=function(){return this.C};
g.k.fg=function(a){this.ma()||(a&&J5(this,""+a),this.C=null,this.V("sessionScreen",null))};
g.k.info=function(a){q5(this.ga,a)};
g.k.gI=function(){return null};
g.k.nA=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.z)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.z)(function(){J5(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ca=function(){this.nA("");H5.Dd.ca.call(this)};g.u(K5,H5);g.k=K5.prototype;g.k.mA=function(a){if(this.B){if(this.B==a)return;J5(this,"Overriding cast session with new session object");NIa(this);this.Z=!1;this.U="unknown";this.B.removeUpdateListener(this.da);this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.X)}this.B=a;this.B.addUpdateListener(this.da);this.B.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.X);JIa(this,"getMdxSessionStatus")};
g.k.jp=function(a){this.info("launchWithParams no-op for Cast: "+g.Tj(a))};
g.k.stop=function(){this.B?this.B.stop((0,g.z)(function(){this.fg()},this),(0,g.z)(function(){this.fg(Error("Failed to stop receiver app."))},this)):this.fg(Error("Stopping cast device without session."))};
g.k.nA=function(){};
g.k.ca=function(){this.info("disposeInternal");NIa(this);this.B&&(this.B.removeUpdateListener(this.da),this.B.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.X));this.B=null;H5.prototype.ca.call(this)};
g.k.rQ=function(a,b){if(!this.ma())if(b){var c=E4(b);if(g.Na(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Tj(c));switch(d){case "mdxSessionStatus":HIa(this,c);break;case "loungeToken":KIa(this,c);break;default:J5(this,"Unknown youtube message: "+d)}}else J5(this,"Unable to parse message.")}else J5(this,"No data in message.")};
g.k.iD=function(a,b,c,d){g.Io(this.N);this.N=0;CIa(this.F,this.u.label,a,this.u.friendlyName,(0,g.z)(function(e){e?b(e):0<=d?(J5(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.Go((0,g.z)(this.iD,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.gI=function(){return this.B};
g.k.XR=function(a){this.ma()||a||(J5(this,"Cast session died."),this.fg())};g.u(N5,H5);g.k=N5.prototype;g.k.mA=function(a){this.D=a;this.D.addUpdateListener(this.X)};
g.k.jp=function(a){this.W=a;this.K()};
g.k.stop=function(){this.B();this.B=g.Ja;g.Io(this.I);this.D?this.D.stop((0,g.z)(this.fg,this,null),(0,g.z)(this.fg,this,"Failed to stop DIAL device.")):this.fg()};
g.k.ca=function(){this.B();this.B=g.Ja;g.Io(this.I);this.D&&this.D.removeUpdateListener(this.X);this.D=null;H5.prototype.ca.call(this)};
g.k.ZK=function(a){this.ma()||a||(J5(this,"DIAL session died."),this.B(),this.B=g.Ja,this.fg())};
g.k.Hy=function(a){this.U=q4();if(this.W){var b=new chrome.cast.DialLaunchResponse(!0,PIa(this));a(b);OIa(this)}else this.K=(0,g.z)(function(){g.Io(this.I);this.K=g.Ja;this.I=NaN;var c=new chrome.cast.DialLaunchResponse(!0,PIa(this));a(c);OIa(this)},this),this.I=g.Go((0,g.z)(function(){this.K()},this),100)};
g.k.BK=function(a,b,c){CIa(this.F,this.N.receiver.label,a,this.u.friendlyName,(0,g.z)(function(d){d&&d.token?(I5(this,d),b(new chrome.cast.DialLaunchResponse(!1))):this.Hy(b,c)},this),(0,g.z)(function(d){J5(this,"Failed to get DIAL screen: "+d);
this.Hy(b,c)},this))};g.u(O5,H5);O5.prototype.stop=function(){this.fg()};
O5.prototype.mA=function(){};
O5.prototype.jp=function(){g.Io(this.B);this.B=NaN;var a=s4(this.F.Qg(),this.u.label);a?I5(this,a):this.fg(Error("No such screen"))};
O5.prototype.ca=function(){g.Io(this.B);this.B=NaN;H5.prototype.ca.call(this)};g.u(P5,g.N);g.k=P5.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N);this.U||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.z)(this.nP,this);c=new chrome.cast.ApiConfig(c,(0,g.z)(this.gG,this),f,d,e);c.customDialLaunchCallback=(0,g.z)(this.aO,this);chrome.cast.initialize(c,(0,g.z)(function(){this.ma()||
(chrome.cast.addReceiverActionListener(this.F),qIa(),this.B.subscribe("onlineScreenChange",(0,g.z)(this.fI,this)),this.C=RIa(this),chrome.cast.setCustomReceivers(this.C,g.Ja,(0,g.z)(function(h){this.Fd("Failed to set initial custom receivers: "+g.Tj(h))},this)),this.V("yt-remote-cast2-availability-change",R5(this)),b(!0))},this),(0,g.z)(function(h){this.Fd("Failed to initialize API: "+g.Tj(h));
b(!1)},this))};
g.k.cR=function(a,b){Q5("Setting connected screen ID: "+a+" -> "+b);if(this.u){var c=this.u.getScreen();if(!a||c&&c.id!=a)Q5("Unsetting old screen status: "+this.u.u.friendlyName),S5(this,null)}if(a&&b){if(!this.u){c=s4(this.B.Qg(),a);if(!c){Q5("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){Q5("setConnectedScreenStatus: Screen with id type to be short lived.");return}var d=QIa(this,c);d||(Q5("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.C.push(d),chrome.cast.setCustomReceivers(this.C,g.Ja,(0,g.z)(function(e){this.Fd("Failed to set initial custom receivers: "+g.Tj(e))},this)));
Q5("setConnectedScreenStatus: new active receiver: "+d.friendlyName);S5(this,new O5(this.B,d),!0)}this.u.nA(b)}else Q5("setConnectedScreenStatus: no screen.")};
g.k.dR=function(a){this.ma()?this.Fd("Setting connection data on disposed cast v2"):this.u?this.u.jp(a):this.Fd("Setting connection data without a session")};
g.k.ZR=function(){this.ma()?this.Fd("Stopping session on disposed cast v2"):this.u?(this.u.stop(),S5(this,null)):Q5("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.z)(this.gG,this),(0,g.z)(this.GP,this))};
g.k.ca=function(){this.B.unsubscribe("onlineScreenChange",(0,g.z)(this.fI,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.F);var a=nIa,b=g.Ia("yt.mdx.remote.debug.handlers_");g.nb(b||[],a);g.bg(this.u);g.N.prototype.ca.call(this)};
g.k.Fd=function(a){q5("Controller",a)};
g.k.iG=function(a,b){this.u==a&&(b||S5(this,null),this.V("yt-remote-cast2-session-change",b))};
g.k.kP=function(a,b){if(!this.ma())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),Q5("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.u)if(this.u.u.label!=a.label)Q5("onReceiverAction_: Stopping active receiver: "+this.u.u.friendlyName),this.u.stop();else{Q5("onReceiverAction_: Casting to active receiver.");this.u.getScreen()&&this.V("yt-remote-cast2-session-change",this.u.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:S5(this,
new O5(this.B,a));break;case chrome.cast.ReceiverType.DIAL:S5(this,new N5(this.B,a,this.K));break;case chrome.cast.ReceiverType.CAST:S5(this,new K5(this.B,a,this.D));break;default:this.Fd("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.u&&this.u.u.label==a.label?this.u.stop():this.Fd("Stopping receiver w/o session: "+a.friendlyName)}else this.Fd("onReceiverAction_ called without receiver.")};
g.k.aO=function(a){if(this.ma())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Fd("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.u?this.u.u:null;if(!c||c.label!=b.label)return this.Fd("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.u.getScreen())return Q5("Reselecting dial screen."),
this.V("yt-remote-cast2-session-change",this.u.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Fd('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);S5(this,new N5(this.B,b,this.K))}b=this.u;b.N=a;return b.N.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.z)(b.BK,b,(b.N.extraData||{}).screenId||null)):new Promise((0,g.z)(b.Hy,b))};
g.k.gG=function(a){if(!this.ma()){Q5("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.u)if(b.receiverType==chrome.cast.ReceiverType.CAST)Q5("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),S5(this,new K5(this.B,b,this.D),!0);else{this.Fd("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.u.u,d=s4(this.B.Qg(),c.label);d&&n4(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(Q5("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.bg(this.u),this.u=new K5(this.B,b,this.D),this.u.subscribe("sessionScreen",(0,g.z)(this.iG,this,this.u)),this.u.jp(null));this.u.mA(a)}}};
g.k.YR=function(){return this.u?this.u.gI():null};
g.k.GP=function(a){this.ma()||(this.Fd("Failed to estabilish a session: "+g.Tj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&S5(this,null))};
g.k.nP=function(a){Q5("Receiver availability updated: "+a);if(!this.ma()){var b=R5(this);this.I=a==chrome.cast.ReceiverAvailability.AVAILABLE;R5(this)!=b&&this.V("yt-remote-cast2-availability-change",R5(this))}};
g.k.fI=function(){this.ma()||(this.C=RIa(this),Q5("Updating custom receivers: "+g.Tj(this.C)),chrome.cast.setCustomReceivers(this.C,g.Ja,(0,g.z)(function(){this.Fd("Failed to set custom receivers.")},this)),this.V("yt-remote-cast2-availability-change",R5(this)))};
P5.prototype.setLaunchParams=P5.prototype.dR;P5.prototype.setConnectedScreenStatus=P5.prototype.cR;P5.prototype.stopSession=P5.prototype.ZR;P5.prototype.getCastSession=P5.prototype.YR;P5.prototype.requestSession=P5.prototype.requestSession;P5.prototype.init=P5.prototype.init;P5.prototype.dispose=P5.prototype.dispose;var Y5=[];g.k=c6.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";d6(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.u=a.trackData,this.mj=a.hasPrevious,this.hasNext=a.hasNext,this.N=a.playerTime,this.K=a.playerTimeAt,this.F=a.seekableStart,this.B=a.seekableEnd,this.I=a.duration,this.U=a.loadedTime,this.D=a.liveIngestionTime,this.C=!isNaN(this.D))};
g.k.Hb=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.getDuration=function(){return this.C?this.I+e6(this):this.I};
g.k.clone=function(){return new c6(i6(this))};g.u(k6,g.N);g.k=k6.prototype;g.k.getState=function(){return this.Ka};
g.k.play=function(){m6(this)?(this.u?this.u.play(null,g.Ja,r6(this,"play")):q6(this,"play"),p6(this,1,g6(l6(this))),this.V("remotePlayerChange")):n6(this,this.play)};
g.k.pause=function(){m6(this)?(this.u?this.u.pause(null,g.Ja,r6(this,"pause")):q6(this,"pause"),p6(this,2,g6(l6(this))),this.V("remotePlayerChange")):n6(this,this.pause)};
g.k.seekTo=function(a){if(m6(this)){if(this.u){var b=l6(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Hb()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Ja,r6(this,"seekTo",{newTime:a}))}else q6(this,"seekTo",{newTime:a});p6(this,3,a);this.V("remotePlayerChange")}else n6(this,g.Ra(this.seekTo,a))};
g.k.stop=function(){if(m6(this)){this.u?this.u.stop(null,g.Ja,r6(this,"stopVideo")):q6(this,"stopVideo");var a=l6(this);a.index=-1;a.videoId="";d6(a);o6(this,a);this.V("remotePlayerChange")}else n6(this,this.stop)};
g.k.setVolume=function(a,b){if(m6(this)){var c=l6(this);if(this.B){if(c.volume!=a){var d=Math.round(a)/100;this.B.setReceiverVolumeLevel(d,(0,g.z)(function(){q5("CP","set receiver volume: "+d)},this),(0,g.z)(function(){this.Fd("failed to set receiver volume.")},this))}c.muted!=b&&this.B.setReceiverMuted(b,(0,g.z)(function(){q5("CP","set receiver muted: "+b)},this),(0,g.z)(function(){this.Fd("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);q6(this,"setVolume",e)}c.muted=b;c.volume=a;o6(this,c)}else n6(this,g.Ra(this.setVolume,a,b))};
g.k.cI=function(a,b){if(m6(this)){var c=l6(this),d={videoId:a};b&&(c.u={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Tj(b.style),g.Xb(d,c.u));q6(this,"setSubtitlesTrack",d);o6(this,c)}else n6(this,g.Ra(this.cI,a,b))};
g.k.setAudioTrack=function(a,b){if(m6(this)){var c=b.getLanguageInfo().getId();q6(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=l6(this);d.audioTrackId=c;o6(this,d)}else n6(this,g.Ra(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){var l=l6(this);c=c||0;var m={videoId:a,currentIndex:c};h6(l,a,c);void 0!==b&&(f6(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=h&&(m.locationInfo=g.Tj(h));q6(this,"setPlaylist",m);d||o6(this,l)};
g.k.ov=function(a,b){if(m6(this)){if(a&&b){var c=l6(this);h6(c,a,b);o6(this,c)}q6(this,"previous")}else n6(this,g.Ra(this.ov,a,b))};
g.k.nextVideo=function(a,b){if(m6(this)){if(a&&b){var c=l6(this);h6(c,a,b);o6(this,c)}q6(this,"next")}else n6(this,g.Ra(this.nextVideo,a,b))};
g.k.AC=function(){m6(this)?q6(this,"dismissAutoplay"):n6(this,this.AC)};
g.k.dispose=function(){if(3!=this.Ka){var a=this.Ka;this.Ka=3;this.V("proxyStateChange",a,this.Ka)}g.N.prototype.dispose.call(this)};
g.k.ca=function(){dJa(this);this.C=null;this.D.clear();j6(this,null);g.N.prototype.ca.call(this)};
g.k.qA=function(a){if((a!=this.Ka||2==a)&&3!=this.Ka&&0!=a){var b=this.Ka;this.Ka=a;this.V("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,g.ib(b.u)&&(b.u=b.B,b.u.reverse(),b.B=[]),a.u.pop().apply(this);else 3==a&&this.dispose()}};
g.k.hP=function(a,b){this.V(a,b)};
g.k.MN=function(a){if(!a)this.Wr(null),j6(this,null);else if(this.B.receiver.volume){a=this.B.receiver.volume;var b=l6(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)q5("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,o6(this,b)}};
g.k.Wr=function(a){q5("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.K);if(this.u=a)this.u.addUpdateListener(this.K),eJa(this),this.V("remotePlayerChange")};
g.k.LN=function(a){a?(eJa(this),this.V("remotePlayerChange")):this.Wr(null)};
g.k.EA=function(){q6(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.TN=function(){var a=aJa();a&&j6(this,a)};
g.k.Fd=function(a){q5("CP",a)};g.u(s6,g.N);g.k=s6.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,h=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==h&&(l.currentIndex=h);c&&(this.Jb.listId=c);this.Jb.videoId=d;this.Jb.index=h||0;this.Jb.state=3;f6(this.Jb,m);this.D="UNSUPPORTED";t6("Connecting with setPlaylist and params: "+g.Tj(l));this.u.connect({method:"setPlaylist",
params:g.Tj(l)},a,kHa())}else t6("Connecting without params"),this.u.connect({},a,kHa());gJa(this)};
g.k.Gv=function(a){this.u.Gv(a)};
g.k.dispose=function(){this.ma()||(this.V("beforeDispose"),u6(this,3));g.N.prototype.dispose.call(this)};
g.k.ca=function(){v6(this);x6(this);w6(this);g.Io(this.K);this.K=NaN;g.Io(this.N);this.N=NaN;this.C=null;g.ip(this.Z);this.Z.length=0;this.u.dispose();g.N.prototype.ca.call(this);this.D=this.I=this.B=this.Jb=this.u=null};
g.k.YJ=function(){this.Io(2)};
g.k.QN=function(){t6("Channel opened");this.X&&(this.X=!1,w6(this),this.W=g.Go((0,g.z)(function(){t6("Timing out waiting for a screen.");this.Io(1)},this),15E3));
oHa(lIa(this.u),this.ga)};
g.k.NN=function(){t6("Channel closed");isNaN(this.F)?x4(!0):x4();this.dispose()};
g.k.ON=function(a,b){x4();isNaN(this.jr())?(b&&"shortLived"==this.da&&this.V("browserChannelAuthError",a),t6("Channel error: "+a+" without reconnection"),this.dispose()):(this.X=!0,t6("Channel error: "+a+" with reconnection in "+this.jr()+" ms"),u6(this,2))};
g.k.PN=function(a){a.params?t6("Received: action="+a.action+", params="+g.Tj(a.params)):t6("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=E4(a.params.devices);this.B=g.Mc(a,function(c){return new l4(c)});
a=!!g.cb(this.B,function(c){return"LOUNGE_SCREEN"==c.type});
jJa(this,a);break;case "loungeScreenDisconnected":g.ob(this.B,function(c){return"LOUNGE_SCREEN"==c.type});
jJa(this,!1);break;case "remoteConnected":var b=new l4(E4(a.params.device));g.cb(this.B,function(c){return b?c.id==b.id:!1})||VGa(this.B,b);
break;case "remoteDisconnected":b=new l4(E4(a.params.device));g.ob(this.B,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":lJa(this,a);break;case "nowPlaying":nJa(this,a);break;case "onStateChange":mJa(this,a);break;case "onAdStateChange":oJa(this,a);break;case "onVolumeChanged":pJa(this,a);break;case "onSubtitlesTrackChanged":kJa(this,a);break;case "nowAutoplaying":qJa(this,a);break;case "autoplayDismissed":this.V("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.V("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.D=
a.params.autoplayMode;this.V("autoplayModeChange",this.D);"DISABLED"==this.D&&this.V("autoplayDismissed");break;case "onHasPreviousNextChanged":rJa(this,a);break;case "requestAssistedSignIn":this.V("assistedSignInRequested",a.params.authCode);break;default:t6("Unrecognized action: "+a.action)}};
g.k.RQ=function(){if(this.C){var a=this.C;this.C=null;this.Jb.videoId!=a&&y6(this,"getNowPlaying")}};
g.k.PJ=function(){var a=3;this.ma()||(a=0,isNaN(this.jr())?l5(this.u)&&isNaN(this.F)&&(a=1):a=2);return a};
g.k.Io=function(a){t6("Disconnecting with "+a);v6(this);this.V("beforeDisconnect",a);1==a&&x4();mIa(this.u,a);this.dispose()};
g.k.NJ=function(){var a=this.Jb;this.C&&(a=this.Jb.clone(),h6(a,this.C,a.index));return i6(a)};
g.k.eR=function(a){var b=new c6(a);b.videoId&&b.videoId!=this.Jb.videoId&&(this.C=b.videoId,g.Io(this.K),this.K=g.Go((0,g.z)(this.RQ,this),5E3));var c=[];this.Jb.listId==b.listId&&this.Jb.videoId==b.videoId&&this.Jb.index==b.index||c.push("remoteQueueChange");this.Jb.playerState==b.playerState&&this.Jb.volume==b.volume&&this.Jb.muted==b.muted&&g6(this.Jb)==g6(b)&&g.Tj(this.Jb.u)==g.Tj(b.u)||c.push("remotePlayerChange");this.Jb.reset(a);g.Bb(c,function(d){this.V(d)},this)};
g.k.hD=function(){var a=this.u.I.id,b=g.cb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.jr=function(){var a=this.u;return a.B.isActive()?a.B.B-g.A():NaN};
g.k.EJ=function(){return this.D||"UNSUPPORTED"};
g.k.FJ=function(){return this.I||""};
g.k.VR=function(){if(!isNaN(this.jr())){var a=this.u.B;g.qn(a.u);a.start()}};
g.k.aR=function(a,b){y6(this,a,b);iJa(this)};
g.k.bI=function(){var a=g.Cq("SID","")||"",b=g.Cq("SAPISID","")||"",c=g.Cq("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.tf(g.Ye(a),2);b=g.tf(g.Ye(b),2);c=g.tf(g.Ye(c),2);return g.tf(g.Ye(a+","+b+","+c),2)};
s6.prototype.subscribe=s6.prototype.subscribe;s6.prototype.unsubscribeByKey=s6.prototype.Qf;s6.prototype.getProxyState=s6.prototype.PJ;s6.prototype.disconnect=s6.prototype.Io;s6.prototype.getPlayerContextData=s6.prototype.NJ;s6.prototype.setPlayerContextData=s6.prototype.eR;s6.prototype.getOtherConnectedRemoteId=s6.prototype.hD;s6.prototype.getReconnectTimeout=s6.prototype.jr;s6.prototype.getAutoplayMode=s6.prototype.EJ;s6.prototype.getAutoplayVideoId=s6.prototype.FJ;s6.prototype.reconnect=s6.prototype.VR;
s6.prototype.sendMessage=s6.prototype.aR;s6.prototype.getXsrfToken=s6.prototype.bI;g.u(z6,u5);g.k=z6.prototype;g.k.Qg=function(a){return this.Jf.$_gs(a)};
g.k.contains=function(a){return!!this.Jf.$_c(a)};
g.k.get=function(a){return this.Jf.$_g(a)};
g.k.start=function(){this.Jf.$_st()};
g.k.add=function(a,b,c){this.Jf.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Jf.$_r(a,b,c)};
g.k.Zv=function(a,b,c,d){this.Jf.$_un(a,b,c,d)};
g.k.ca=function(){for(var a=0,b=this.u.length;a<b;++a)this.Jf.$_ubk(this.u[a]);this.u.length=0;this.Jf=null;u5.prototype.ca.call(this)};
g.k.YK=function(){this.V("screenChange")};
g.k.OO=function(){this.V("onlineScreenChange")};
E5.prototype.$_st=E5.prototype.start;E5.prototype.$_gspc=E5.prototype.WR;E5.prototype.$_gsppc=E5.prototype.eI;E5.prototype.$_c=E5.prototype.contains;E5.prototype.$_g=E5.prototype.get;E5.prototype.$_a=E5.prototype.add;E5.prototype.$_un=E5.prototype.Zv;E5.prototype.$_r=E5.prototype.remove;E5.prototype.$_gs=E5.prototype.Qg;E5.prototype.$_gos=E5.prototype.dI;E5.prototype.$_s=E5.prototype.subscribe;E5.prototype.$_ubk=E5.prototype.Qf;var M6=null,S6=!1,A6=null,B6=null,R6=null,F6=[];g.u(T6,g.B);g.k=T6.prototype;g.k.ca=function(){g.B.prototype.ca.call(this);this.u.stop();this.C.stop();this.N.stop();this.X();var a=this.wb;a.unsubscribe("proxyStateChange",this.dG,this);a.unsubscribe("remotePlayerChange",this.hs,this);a.unsubscribe("remoteQueueChange",this.jv,this);a.unsubscribe("previousNextChange",this.aG,this);a.unsubscribe("nowAutoplaying",this.VF,this);a.unsubscribe("autoplayDismissed",this.vF,this);this.wb=this.B=null};
g.k.LE=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.wb.Ka)if(U6(this)){if(!l6(this.wb).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":l6(this.wb).Hb()?this.wb.pause():this.wb.play();break;case "control_play":this.wb.play();break;case "control_pause":this.wb.pause();break;case "control_seek":this.K.vE(c[0],c[1]);break;case "control_subtitles_set_track":V6(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.J.getCurrentTime();W6(this,0===c?void 0:c);break;case "control_seek":W6(this,c[0]);break;case "control_subtitles_set_track":V6(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.JN=function(a){this.N.VJ(a)};
g.k.LR=function(a){this.LE("control_subtitles_set_track",g.Rb(a)?null:a)};
g.k.tH=function(){var a=this.J.getOption("captions","track");g.Rb(a)||V6(this,a)};
g.k.Cb=function(a){this.B.Cb(a,this.J.getVideoData().lengthSeconds)};
g.k.xO=function(){g.Rb(this.D)||CJa(this,this.D);this.F=!1};
g.k.dG=function(a,b){this.C.stop();2===b&&this.pH()};
g.k.hs=function(){if(U6(this)){this.u.stop();var a=l6(this.wb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.Pe=1;break;case 1082:case 1083:this.B.Pe=0;break;default:this.B.Pe=-1}switch(a.playerState){case 1081:case 1:this.tb(new g.SK(8));this.oH();break;case 1085:case 3:this.tb(new g.SK(9));break;case 1083:case 0:this.tb(new g.SK(2));this.K.stop();this.Cb(this.J.getVideoData().lengthSeconds);break;case 1084:this.tb(new g.SK(4));break;case 2:this.tb(new g.SK(4));this.Cb(g6(a));
break;case -1:this.tb(new g.SK(64));break;case -1E3:this.tb(new g.SK(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=l6(this.wb).u;var b=this.D;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.D=a,CJa(this,a));a=l6(this.wb);-1===a.volume||Math.round(this.J.getVolume())===a.volume&&this.J.isMuted()===a.muted||this.U.isActive()||this.RH()}else BJa(this)};
g.k.aG=function(){this.J.V("mdxpreviousnextchange")};
g.k.jv=function(){U6(this)||BJa(this)};
g.k.VF=function(a){isNaN(a)||this.J.V("mdxnowautoplaying",a)};
g.k.vF=function(){this.J.V("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){U6(this)&&this.wb.setAudioTrack(this.J.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===l6(this.wb).playerState?W6(this,a):b&&this.wb.seekTo(a)};
g.k.RH=function(){var a=this;if(U6(this)){var b=l6(this.wb);this.events.Kb(this.W);b.muted?this.J.mute():this.J.unMute();this.J.setVolume(b.volume);this.W=this.events.P(this.J,"onVolumeChange",function(c){AJa(a,c)})}};
g.k.oH=function(){this.u.stop();if(!this.wb.ma()){var a=l6(this.wb);a.Hb()&&this.tb(new g.SK(8));this.Cb(g6(a));this.u.start()}};
g.k.pH=function(){this.C.stop();this.u.stop();var a=this.wb.C.getReconnectTimeout();2==this.wb.Ka&&!isNaN(a)&&this.C.start()};
g.k.tb=function(a){this.C.stop();var b=this.I;if(!g.XK(b,a)){var c=g.T(a,2);c!==g.T(this.I,2)&&this.J.Pn(c);this.I=a;EJa(this.B,b,a)}};g.u(X6,g.U);X6.prototype.Ec=function(){this.u.show()};
X6.prototype.jb=function(){this.u.hide()};
X6.prototype.B=function(){g.AK("https://web.archive.org/web/20210201000927/https://support.google.com/youtube/answer/7640706")};
X6.prototype.C=function(){k4("mdx-manual-pairing-popup-ok");this.jb()};g.u(Y6,g.U);Y6.prototype.Ec=function(){this.u.show()};
Y6.prototype.jb=function(){this.u.hide()};
Y6.prototype.B=function(){k4("mdx-privacy-popup-cancel");this.jb()};
Y6.prototype.C=function(){k4("mdx-privacy-popup-confirm");this.jb()};g.u(Z6,g.U);Z6.prototype.B=function(a){DJa(this,a.state)};g.u($6,g.sR);$6.prototype.D=function(){var a=this.J.getOption("remote","receivers");a&&1<a.length&&!this.J.getOption("remote","quickCast")?(this.gm=g.Cb(a,this.u,this),g.tR(this,g.Mc(a,this.u)),a=this.J.getOption("remote","currentReceiver"),a=this.u(a),this.options[a]&&this.zh(a),this.enable(!0)):this.enable(!1)};
$6.prototype.u=function(a){return a.key};
$6.prototype.ji=function(a){return"cast-selector-receiver"===a?"Cast...":this.gm[a].name};
$6.prototype.lf=function(a){g.sR.prototype.lf.call(this,a);this.J.setOption("remote","currentReceiver",this.gm[a]);this.Ya.jb()};g.u(a7,g.hO);g.k=a7.prototype;
g.k.create=function(){var a=this.player.S(),b=g.sD(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:g.P(a.experiments,"mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:g.P(a.experiments,"enable_dial_short_lived_lounge_token"),enableCastLoungeToken:g.P(a.experiments,"enable_cast_short_lived_lounge_token")};vJa(b,a);this.subscriptions.push(g.No("yt-remote-before-disconnect",this.HN,this));this.subscriptions.push(g.No("yt-remote-connection-change",this.oP,this));this.subscriptions.push(g.No("yt-remote-receiver-availability-change",
this.cG,this));this.subscriptions.push(g.No("yt-remote-auto-connect",this.mP,this));this.subscriptions.push(g.No("yt-remote-receiver-resumed",this.lP,this));this.subscriptions.push(g.No("mdx-privacy-popup-confirm",this.GQ,this));this.subscriptions.push(g.No("mdx-privacy-popup-cancel",this.FQ,this));this.subscriptions.push(g.No("mdx-manual-pairing-popup-ok",this.RK,this));this.cG()};
g.k.load=function(){this.player.cancelPlayback();g.hO.prototype.load.call(this);this.nh=new T6(this,this.player,this.wb);var a=(a=zJa())?a.currentTime:0;var b=Q6()?new k6(K6(),void 0):null;0==a&&b&&(a=g6(l6(b)));0!==a&&this.Cb(a);EJa(this,this.Mc,this.Mc);this.player.Qj(6)};
g.k.unload=function(){this.player.V("mdxautoplaycanceled");this.ol=this.gi;g.cg(this.nh,this.wb);this.wb=this.nh=null;g.hO.prototype.unload.call(this);this.player.Qj(5);b7(this)};
g.k.ca=function(){g.Oo(this.subscriptions);g.hO.prototype.ca.call(this)};
g.k.Hj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.nh.LE.apply(this.nh,[a].concat(g.ma(c)))};
g.k.getAdState=function(){return this.Pe};
g.k.QJ=function(){return this.loaded?this.nh.suggestion:null};
g.k.mj=function(){return this.wb?l6(this.wb).mj:!1};
g.k.hasNext=function(){return this.wb?l6(this.wb).hasNext:!1};
g.k.Cb=function(a,b){this.dE=a||0;this.player.V("progresssync",a,b)};
g.k.getCurrentTime=function(){return this.dE};
g.k.getProgressState=function(){var a=l6(this.wb),b=this.player.getVideoData();return{allowSeeking:g.P(this.player.S().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.Ne():!a.isAdPlaying()&&this.player.Ne(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.C?a.D+e6(a):a.D,isAtLiveHead:1>=(a.C?a.B+e6(a):a.B)-this.getCurrentTime(),loaded:a.U,seekableEnd:a.C?a.B+e6(a):a.B,seekableStart:0<a.F?a.F+
e6(a):a.F}};
g.k.nextVideo=function(){this.wb&&this.wb.nextVideo()};
g.k.ov=function(){this.wb&&this.wb.ov()};
g.k.HN=function(a){1===a&&(this.Rz=this.wb?l6(this.wb):null)};
g.k.oP=function(){var a=Q6()?new k6(K6(),void 0):null;if(a){var b=this.ol;this.loaded&&this.unload();this.wb=a;this.Rz=null;b.key!==this.gi.key&&(this.ol=b,this.load())}else g.bg(this.wb),this.wb=null,this.loaded&&(this.unload(),(a=this.Rz)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,g6(a)));this.player.V("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.cG=function(){var a=[this.gi],b=a.concat,c=wJa();Z5()&&g.Bu("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.gm=b.call(a,c);a=L6()||this.gi;c7(this,a);this.player.va("onMdxReceiversChange")};
g.k.mP=function(){var a=L6();c7(this,a)};
g.k.lP=function(){this.ol=L6()};
g.k.GQ=function(){this.ls=!0;b7(this);S6=!1;M6&&O6(M6,1);M6=null};
g.k.FQ=function(){this.ls=!1;b7(this);c7(this,this.gi);this.ol=this.gi;S6=!1;M6=null;this.player.playVideo()};
g.k.RK=function(){this.yu=!0;b7(this);g.Au("yt-remote-manual-pairing-warning-shown",!0,2592E3);S6=!1;M6&&O6(M6,1);M6=null};
g.k.Ge=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.gm;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?a6():c7(this,b)),this.loaded?this.ol:this.gi;case "quickCast":return 2===this.gm.length&&"cast-selector-receiver"===this.gm[1].key?(b&&a6(),!0):!1}};
g.k.EA=function(){this.wb.EA()};
g.k.Ai=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.nO.remote=a7;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:09:27 Feb 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:14:18 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 114.676
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.058
  cdx.remote: 0.052
  esindex: 0.008
  LoadShardBlock: 35.477 (3)
  PetaboxLoader3.datanode: 96.009 (5)
  load_resource: 295.687 (2)
  PetaboxLoader3.resolve: 149.08 (2)
*/