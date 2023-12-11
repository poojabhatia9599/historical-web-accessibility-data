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

(function(g){var window=this;var $Ea=function(a,b){return g.Rb(a,b)},$5=function(a,b,c){a.A.set(b,c)},a6=function(a){$5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.z()).toString(36));
return a},b6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.gn(a.A,b,c)},aFa=function(a,b){var c=[];
g.Zi(b,function(d){try{var e=g.Un.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Tn(e)&&c.push(d)},a);
return c},bFa=function(a,b){var c=aFa(a,b);
g.B(c,function(d){g.Un.prototype.remove.call(this,d)},a)},cFa=function(a){if(a.Ed){if(a.Ed.locationOverrideToken)return{locationOverrideToken:a.Ed.locationOverrideToken};
if(null!=a.Ed.latitudeE7&&null!=a.Ed.longitudeE7)return{latitudeE7:a.Ed.latitudeE7,longitudeE7:a.Ed.longitudeE7}}return null},dFa=function(a,b){g.nb(a,b)||a.push(b)},c6=function(a){var b=0,c;
for(c in a)b++;return b},eFa=function(a,b){var c=b instanceof g.Dc?b:g.Jc(b,/^data:image\//i.test(b));
a.src=g.Ec(c)},d6=function(){},fFa=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},gFa=function(a){if(a.Fe&&"function"==typeof a.Fe)return a.Fe();
if("string"===typeof a)return a.split("");if(g.Qa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Nb(a)},hFa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Qa(a)||"string"===typeof a)g.B(a,b,void 0);else{if(a.Tf&&"function"==typeof a.Tf)var c=a.Tf();else if(a.Fe&&"function"==typeof a.Fe)c=void 0;else if(g.Qa(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Ob(a);d=gFa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},iFa=function(a,b,c,d){var e=new g.Vm(null,void 0);
a&&g.Wm(e,a);b&&g.Xm(e,b);c&&g.Ym(e,c);d&&(e.u=d);return e},e6=function(a,b){g.Io[a]=!0;
var c=g.Go();c&&c.publish.apply(c,arguments);g.Io[a]=!1},f6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Sm;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",jFa(this,a.capabilities||""),kFa(this,a.experiments||""))},jFa=function(a,b){a.capabilities.clear();
g.He(b.split(","),g.Ua($Ea,lFa)).forEach(function(c){a.capabilities.add(c)})},kFa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},g6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},h6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},mFa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},nFa=function(a){return new g6(a)},oFa=function(a){return Array.isArray(a)?g.Nc(a,nFa):[]},i6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},j6=function(a){return Array.isArray(a)?"["+g.Nc(a,i6).join(",")+"]":"null"},k6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},pFa=function(a){return g.Nc(a,function(b){return{key:b.id,
name:b.name}})},l6=function(a,b){return g.gb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},m6=function(a,b){return g.gb(a,function(c){return h6(c,b)})},qFa=function(){var a=(0,g.et)();
a&&bFa(a,a.o.Sh(!0))},n6=function(){var a=g.ht("yt-remote-connected-devices")||[];
g.Cb(a);return a},rFa=function(a){if(g.ob(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Nc(a,function(d,e){return 0==e?d:d.substring(c.length)})},sFa=function(a){g.gt("yt-remote-connected-devices",a,86400)},p6=function(){if(o6)return o6;
var a=g.ht("yt-remote-device-id");a||(a=k6(),g.gt("yt-remote-device-id",a,31536E3));for(var b=n6(),c=1,d=a;g.nb(b,d);)c++,d=a+"#"+c;return o6=d},q6=function(){var a=n6(),b=p6();
g.nb(a,b);g.jt()&&g.Fb(a,b);a=rFa(a);if(g.ob(a))try{g.xq("remote_sid")}catch(c){}else try{g.vq("remote_sid",a.join(","),-1)}catch(c){}},tFa=function(){return g.ht("yt-remote-session-browser-channel")},uFa=function(){return g.ht("yt-remote-local-screens")||[]},vFa=function(){g.gt("yt-remote-lounge-token-expiration",!0,86400)},wFa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Nc(uFa(),function(d){return d.loungeToken}),c=g.Nc(a,function(d){return d.loungeToken});
g.fh(c,function(d){return!g.nb(b,d)})&&vFa();
g.gt("yt-remote-local-screens",a,31536E3)},xFa=function(a,b){g.gt("yt-remote-session-browser-channel",a);
g.gt("yt-remote-session-screen-id",b);var c=n6(),d=p6();g.nb(c,d)||c.push(d);sFa(c);q6()},r6=function(a){a||(g.it("yt-remote-session-screen-id"),g.it("yt-remote-session-video-id"));
q6();a=n6();g.rb(a,p6());sFa(a)},yFa=function(){if(!s6){var a=g.eo();
a&&(s6=new g.On(a))}return s6?!!s6.get("yt-remote-use-staging-server"):!1},zFa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},AFa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},t6=function(a){a.length?BFa(a.shift(),function(){t6(a)}):u6()},CFa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},BFa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},u6=function(){var a=AFa();
a&&a(!1,"No cast extension found")},EFa=function(){if(DFa){var a=2,b=AFa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;BFa("//web.archive.org/web/20200930235616/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",u6,c)}},FFa=function(){EFa();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);t6(["//web.archive.org/web/20200930235616/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20200930235616/https://www.gstatic.com/eureka/clank/cast_sender.js"])},v6=function(a,b,c){g.C.call(this);
this.F=null!=c?(0,g.y)(a,c):a;this.pe=b;this.C=(0,g.y)(this.FH,this);this.o=!1;this.u=0;this.A=this.Ka=null;this.B=[]},w6=function(a,b,c){g.C.call(this);
this.B=null!=c?a.bind(c):a;this.pe=b;this.A=null;this.o=!1;this.u=0;this.Ka=null},x6=function(a){a.Ka=g.Qm(function(){a.Ka=null;
a.o&&!a.u&&(a.o=!1,x6(a))},a.pe);
var b=a.A;a.A=null;a.B.apply(null,b)},y6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return fFa(a)},z6=function(){},A6=function(){},GFa=function(){},IFa=function(a){return(a=HFa(a))?new ActiveXObject(a):new XMLHttpRequest},HFa=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},B6=function(a,b,c,d){this.o=a;
this.A=b;this.J=c;this.H=d||1;this.C=45E3;this.B=new g.$0(this);this.u=new g.Pm;this.u.setInterval(250)},KFa=function(a,b,c){a.Xm=1;
a.Si=a6(b.clone());a.ll=c;a.F=!0;JFa(a,null)},C6=function(a,b,c,d,e){a.Xm=1;
a.Si=a6(b.clone());a.ll=null;a.F=c;e&&(a.zE=!1);JFa(a,d)},JFa=function(a,b){a.Qm=g.z();
D6(a);a.Ij=a.Si.clone();b6(a.Ij,"t",a.H);a.Ep=0;a.Fd=a.o.Au(a.o.mp()?b:null);0<a.kv&&(a.Js=new w6((0,g.y)(a.vF,a,a.Fd),a.kv));a.B.ia(a.Fd,"readystatechange",a.SO);var c=a.zk?g.Xb(a.zk):{};a.ll?(a.Ct="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Fd.send(a.Ij,a.Ct,a.ll,c)):(a.Ct="GET",a.zE&&!g.xe&&(c.Connection="close"),a.Fd.send(a.Ij,a.Ct,null,c));a.o.Kg(1)},OFa=function(a,b,c){for(var d=!0;!a.ck&&a.Ep<c.length;){var e=LFa(a,c);
if(e==E6){4==b&&(a.gj=4,F6(15),d=!1);break}else if(e==MFa){a.gj=4;F6(16);d=!1;break}else G6(a,e)}4==b&&0==c.length&&(a.gj=1,F6(17),d=!1);a.Tg=a.Tg&&d;d||(H6(a),I6(a))},LFa=function(a,b){var c=a.Ep,d=b.indexOf("\n",c);
if(-1==d)return E6;c=Number(b.substring(c,d));if(isNaN(c))return MFa;d+=1;if(d+c>b.length)return E6;var e=b.substr(d,c);a.Ep=d+c;return e},QFa=function(a,b){a.Qm=g.z();
D6(a);var c=b?window.location.hostname:"";a.Ij=a.Si.clone();$5(a.Ij,"DOMAIN",c);$5(a.Ij,"t",a.H);try{a.Yg=new ActiveXObject("htmlfile")}catch(n){H6(a);a.gj=7;F6(22);I6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{var l=h;if(l in J6)h=J6[l];else if(l in PFa)h=J6[l]=PFa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)h=l;else{if(256>m){if(h="\\x",16>m||256<m)h+="0"}else h="\\u",4096>m&&(h+="0");h+=m.toString(16).toUpperCase()}h=
J6[l]=h}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.dd(g.ic("b/12014412"),d+"</body></html>");a.Yg.open();a.Yg.write(g.$c(c));a.Yg.close();a.Yg.parentWindow.m=(0,g.y)(a.fO,a);a.Yg.parentWindow.d=(0,g.y)(a.CD,a,!0);a.Yg.parentWindow.rpcClose=(0,g.y)(a.CD,a,!1);c=a.Yg.createElement("DIV");a.Yg.parentWindow.document.body.appendChild(c);d=g.Ic(a.Ij.toString());d=g.kd(g.Ec(d));d=g.dd(g.ic("b/12014412"),'<iframe src="'+d+'"></iframe>');g.ed(c,d);a.o.Kg(1)},D6=function(a){a.iy=g.z()+a.C;
RFa(a,a.C)},RFa=function(a,b){if(null!=a.cn)throw Error("WatchDog timer not null");
a.cn=K6((0,g.y)(a.rO,a),b)},L6=function(a){a.cn&&(g.v.clearTimeout(a.cn),a.cn=null)},I6=function(a){a.o.GA()||a.ck||a.o.Yq(a)},H6=function(a){L6(a);
g.Zf(a.Js);a.Js=null;a.u.stop();g.aza(a.B);if(a.Fd){var b=a.Fd;a.Fd=null;b.abort();b.dispose()}a.Yg&&(a.Yg=null)},G6=function(a,b){try{a.o.uD(a,b),a.o.Kg(4)}catch(c){}},TFa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;SFa(a,b,function(h){h?c(!0):g.v.setTimeout(function(){TFa(a,b,c,d,f)},f)})}},SFa=function(a,b,c){var d=new Image;
d.onload=function(){try{M6(d),c(!0)}catch(e){}};
d.onerror=function(){try{M6(d),c(!1)}catch(e){}};
d.onabort=function(){try{M6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{M6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
eFa(d,a)},M6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},UFa=function(a){this.o=a;
this.u=new z6},VFa=function(a){var b=N6(a.o,a.qn,"/mail/images/cleardot.gif");
a6(b);TFa(b.toString(),5E3,(0,g.y)(a.EG,a),3,2E3);a.Kg(1)},P6=function(a){var b=a.o.M;
if(null!=b)F6(5),b?(F6(11),O6(a.o,a,!1)):(F6(12),O6(a.o,a,!0));else if(a.ff=new B6(a,void 0,void 0,void 0),a.ff.zk=a.hv,b=a.o,b=N6(b,b.mp()?a.Xn:null,a.jv),F6(5),!g.ve||g.Xd(10))b6(b,"TYPE","xmlhttp"),C6(a.ff,b,!1,a.Xn,!1);else{b6(b,"TYPE","html");var c=a.ff;a=!!a.Xn;c.Xm=3;c.Si=a6(b.clone());QFa(c,a)}},Q6=function(a){g.fm.call(this);
this.headers=new g.Sm;this.W=a||null;this.A=!1;this.T=this.o=null;this.na=this.M="";this.F=0;this.B="";this.C=this.ca=this.J=this.X=!1;this.H=0;this.P=null;this.oa="";this.S=this.aa=!1},WFa=function(a){return g.ve&&g.Wd(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},XFa=function(a){return"content-type"==a.toLowerCase()},ZFa=function(a,b){a.A=!1;
a.o&&(a.C=!0,a.o.abort(),a.C=!1);a.B=b;a.F=5;YFa(a);R6(a)},YFa=function(a){a.X||(a.X=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},aGa=function(a){if(a.A&&"undefined"!=typeof g.e1)if(a.T[1]&&4==S6(a)&&2==a.getStatus())T6(a,"Local request error detected and ignored");
else if(a.J&&4==S6(a))g.Qm(a.qD,0,a);else if(a.dispatchEvent("readystatechange"),4==S6(a)){T6(a,"Request complete");a.A=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.ud(1,String(a.M));if(!f&&g.v.self&&g.v.self.location){var h=g.v.self.location.protocol;f=h.substr(0,h.length-1)}e=!$Fa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.F=6;try{var l=2<S6(a)?a.o.statusText:""}catch(m){l=""}a.B=l+" ["+a.getStatus()+"]";YFa(a)}}finally{R6(a)}}},R6=function(a,b){if(a.o){bGa(a);
var c=a.o,d=a.T[0]?g.Ma:null;a.o=null;a.T=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},bGa=function(a){a.o&&a.S&&(a.o.ontimeout=null);
a.P&&(g.v.clearTimeout(a.P),a.P=null)},S6=function(a){return a.o?a.o.readyState:0},U6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},T6=function(a,b){return b+" ["+a.na+" "+a.M+" "+a.getStatus()+"]"},V6=function(a,b,c){this.o=1;
this.u=[];this.B=[];this.C=new z6;this.J=a||null;this.M=null!=b?b:null;this.F=c||!1},cGa=function(a,b){this.o=a;
this.map=b;this.context=null},dGa=function(a){g.Jl.call(this,"statevent",a)},eGa=function(a,b,c,d){g.Jl.call(this,"timingevent",a);
this.size=b;this.ep=d},fGa=function(a){g.Jl.call(this,"serverreachability",a)},iGa=function(a){gGa(a);
if(3==a.o){var b=a.Go++,c=a.Iq.clone();$5(c,"SID",a.A);$5(c,"RID",b);$5(c,"TYPE","terminate");W6(a,c);b=new B6(a,a.A,b,void 0);b.Xm=2;b.Si=a6(c.clone());eFa(new Image,b.Si.toString());b.Qm=g.z();D6(b)}hGa(a)},jGa=function(a){a.cH(1,0);
a.Iq=N6(a,null,a.gv);X6(a)},gGa=function(a){a.Ui&&(a.Ui.abort(),a.Ui=null);
a.Zc&&(a.Zc.cancel(),a.Zc=null);a.Th&&(g.v.clearTimeout(a.Th),a.Th=null);Y6(a);a.Ve&&(a.Ve.cancel(),a.Ve=null);a.Yi&&(g.v.clearTimeout(a.Yi),a.Yi=null)},kGa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new cGa(a.PK++,b));2!=a.o&&3!=a.o||X6(a)},X6=function(a){a.Ve||a.Yi||(a.Yi=K6((0,g.y)(a.BD,a),0),a.Wl=0)},mGa=function(a,b){if(1==a.o){if(!b){a.Go=Math.floor(1E5*Math.random());
var c=a.Go++,d=new B6(a,"",c,void 0);d.zk=a.dm;var e=Z6(a),f=a.Iq.clone();$5(f,"RID",c);$5(f,"CVER","1");W6(a,f);KFa(d,f,e);a.Ve=d;a.o=2}}else 3==a.o&&(b?lGa(a,b):0==a.u.length||a.Ve||lGa(a))},lGa=function(a,b){if(b)if(6<a.dk){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.Go-1;var d=Z6(a)}else c=b.J,d=b.ll;else c=a.Go++,d=Z6(a);var e=a.Iq.clone();$5(e,"SID",a.A);$5(e,"RID",c);$5(e,"AID",a.qm);W6(a,e);c=new B6(a,a.A,c,a.Wl+1);c.zk=a.dm;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Ve=c;KFa(c,e,d)},W6=function(a,b){if(a.me){var c=a.me.hA();
c&&g.Hb(c,function(d,e){$5(b,e,d)})}},Z6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.dk&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,h=a.u[e].map;f=6>=a.dk?e:f-d;try{g.Hb(h,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},nGa=function(a){a.Zc||a.Th||(a.H=1,a.Th=K6((0,g.y)(a.AD,a),0),a.Jl=0)},$6=function(a){if(a.Zc||a.Th||3<=a.Jl)return!1;
a.H++;a.Th=K6((0,g.y)(a.AD,a),oGa(a,a.Jl));a.Jl++;return!0},O6=function(a,b,c){a.At=c;
a.oh=b.ji;a.F||jGa(a)},Y6=function(a){null!=a.ik&&(g.v.clearTimeout(a.ik),a.ik=null)},oGa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},a7=function(a,b){if(2==b||9==b){var c=null;
a.me&&(c=null);var d=(0,g.y)(a.zP,a);c||(c=new g.Vm("//web.archive.org/web/20200930235616/https://www.google.com/images/cleardot.gif"),a6(c));SFa(c.toString(),1E4,d)}else F6(2);pGa(a,b)},pGa=function(a,b){a.o=0;
a.me&&a.me.xz(b);hGa(a);gGa(a)},hGa=function(a){a.o=0;
a.oh=-1;if(a.me)if(0==a.B.length&&0==a.u.length)a.me.nu();else{g.ub(a.B);var b=g.ub(a.u);a.B.length=0;a.u.length=0;a.me.nu(b)}},N6=function(a,b,c){var d=g.cn(c);
if(""!=d.o)b&&g.Xm(d,b+"."+d.o),g.Ym(d,d.B);else{var e=window.location;d=iFa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Kn&&g.Hb(a.Kn,function(f,h){$5(d,h,f)});
$5(d,"VER",a.dk);W6(a,d);return d},K6=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},F6=function(a){b7.dispatchEvent(new dGa(b7,a))},qGa=function(){},rGa=function(){this.o=[];
this.u=[]},sGa=function(a,b){this.action=a;
this.params=b||{}},c7=function(a,b){g.C.call(this);
this.o=new g.G(this.YN,0,this);g.E(this,this.o);this.pe=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.y)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.y)(a.handleEvent,a);else throw Error("Invalid listener argument");this.A=a},d7=function(a,b,c,d){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
this.P=a;this.F=b;this.A=new g.Nn;this.u=new c7(this.eP,this);this.o=null;this.sd=!1;this.C=null;this.M="";this.J=this.B=0;this.H=[];this.T=c;this.S=d},tGa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.At,sessionId:a.o.A,arrayId:a.o.qm}},uGa=function(a,b){a.J=b||0;
a.u.stop();e7(a);a.o&&(3==a.o.o&&mGa(a.o),iGa(a.o));a.J=0},f7=function(a){return!!a.o&&3==a.o.o},e7=function(a){if(a.o){var b=a.S(),c=a.o.dm||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.o.dm=c}},vGa=function(a,b){(a.F.loungeIdToken=b)||a.u.stop()},g7=function(a){this.scheme="https";
this.port=this.domain="";this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.ud(4,a))||"";b&&(this.port=":"+b);this.domain=g.vd(a)||"";a=g.Tc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Bc(a,"10.0")&&(this.u=!1))},h7=function(a,b){var c=a.o;
a.u&&(c=a.scheme+"://"+a.domain+a.port+a.o);return g.Id(c+b,{})},i7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ua(a.B,d,!0),onError:g.Ua(a.A,e),Gf:g.Ua(a.C,e)};c&&(a.Lb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.nq(b,a)},zGa=function(){var a=wGa;
xGa();j7.push(a);yGa(j7)},k7=function(a,b){xGa();
var c=j7,d=AGa(a,String(b));g.ob(c)?BGa(d):(yGa(c),g.B(c,function(e){e(d)}))},xGa=function(){j7||(j7=g.La("yt.mdx.remote.debug.handlers_")||[],g.Ha("yt.mdx.remote.debug.handlers_",j7,void 0))},BGa=function(a){var b=(l7+1)%50;
l7=b;m7[b]=a;n7||(n7=49==b)},yGa=function(a){var b=m7;
if(b[0]){var c=l7,d=n7?c:-1;do{d=(d+1)%50;var e=b[d];g.B(a,function(f){f(e)})}while(d!=c);
m7=Array(50);l7=-1;n7=!1}},AGa=function(a,b){var c=(g.z()-CGa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},o7=function(a){g.N.call(this);
this.F=a;this.screens=[]},DGa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0},EGa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.He(a.screens,function(f){return!!l6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=DGa(a,b[d])||c;return c},FGa=function(a,b){var c=a.screens.length;
a.screens=g.He(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},p7=function(a,b,c,d){g.N.call(this);
this.F=a;this.C=b;this.A=c;this.B=d;this.u=0;this.o=null;this.Ka=NaN},r7=function(a){o7.call(this,"LocalScreenService");
this.u=a;this.o=NaN;q7(this);this.info("Initializing with "+j6(this.screens))},GGa=function(a){if(a.screens.length){var b=g.Nc(a.screens,function(d){return d.id}),c=h7(a.u,"/pairing/get_lounge_token_batch");
i7(a.u,c,{screen_ids:b.join(",")},(0,g.y)(a.OH,a),(0,g.y)(a.NH,a))}},q7=function(a){var b=oFa(uFa());
b=g.He(b,function(c){return!c.uuid});
return EGa(a,b)},s7=function(a,b){wFa(g.Nc(a.screens,mFa));
b&&vFa()},u7=function(a,b){g.N.call(this);
this.F=b;var c=g.ht("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.F(),f=0,h=e.length;f<h;++f){var l=e[f].id;d[l]=g.nb(c,l)}this.o=d;this.C=a;this.A=this.B=NaN;this.u=null;t7("Initialized with "+g.Bj(this.o))},HGa=function(a,b,c){var d=h7(a.C,"/pairing/get_screen_availability");
i7(a.C,d,{lounge_token:b.token},(0,g.y)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.y)(function(){c(!1)},a))},v7=function(a,b){a:if(c6(b)!=c6(a.o))var c=!1;
else{c=g.Ob(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(t7("Updated online screens: "+g.Bj(a.o)),a.o=b,a.R("screenChange"));IGa(a)},w7=function(a){isNaN(a.A)||g.Fo(a.A);
a.A=g.Do((0,g.y)(a.gx,a),0<a.B&&a.B<g.z()?2E4:1E4)},t7=function(a){k7("OnlineScreenService",a)},JGa=function(a){var b={};
g.B(a.F(),function(c){c.token?b[c.token]=c.id:this.Lc("Requesting availability of screen w/o lounge token.")});
return b},IGa=function(a){a=g.Ob(g.Ib(a.o,function(b){return b}));
g.Cb(a);a.length?g.gt("yt-remote-online-screen-ids",a.join(","),60):g.it("yt-remote-online-screen-ids")},x7=function(a){o7.call(this,"ScreenService");
this.C=a;this.o=this.u=null;this.A=[];this.B={};KGa(this)},MGa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var h=a.vf();if(h=(c?m6(h,c):null)||m6(h,b)){h.uuid=b;var l=y7(a,h);HGa(a.o,l,function(m){e(m?l:null)})}else c?LGa(a,c,(0,g.y)(function(m){var n=y7(this,new g6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));HGa(this.o,n,function(p){e(p?n:null)})},a),f):e(null)},NGa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},LGa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Lb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){var l=h&&h.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.nq(h7(a.C,"/pairing/get_lounge_token_batch"),e)},OGa=function(a){a.screens=a.u.vf();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+j6(a.screens))},KGa=function(a){z7(a);
a.u=new r7(a.C);a.u.subscribe("screenChange",(0,g.y)(a.VH,a));OGa(a);a.A=oFa(g.ht("yt-remote-automatic-screen-cache")||[]);z7(a);a.info("Initializing automatic screens: "+j6(a.A));a.o=new u7(a.C,(0,g.y)(a.vf,a,!0));a.o.subscribe("screenChange",(0,g.y)(function(){this.R("onlineScreenChange")},a))},y7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=m6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.gt("yt-remote-automatic-screen-cache",g.Nc(a.A,mFa)));z7(a);a.B[b.uuid]=b.id;g.gt("yt-remote-device-id-map",a.B,31536E3);return b},z7=function(a){a.B=g.ht("yt-remote-device-id-map")||{}},A7=function(a,b,c){g.N.call(this);
this.T=c;this.J=a;this.o=b;this.H=null},B7=function(a,b){k7(a.T,b)},C7=function(a,b){A7.call(this,a,b,"CastSession");
this.u=null;this.A=0;this.C=(0,g.y)(this.hQ,this);this.B=(0,g.y)(this.zO,this);this.A=g.Do((0,g.y)(function(){PGa(this,null)},this),12E4)},QGa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Bj(void 0));
var b={type:"getMdxSessionStatus"};a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ma,(0,g.y)(function(){B7(this,"Failed to send message: getMdxSessionStatus.")},a)):B7(a,"Sending yt message without session: "+g.Bj(b))},PGa=function(a,b){g.Fo(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.getScreen()||a.getScreen().id!=b){var c=(0,g.y)(a.zs,a),d=(0,g.y)(a.Ff,a);a.zA(b,c,d,5)}}else a.Ff(Error("Waiting for session status timed out."))},D7=function(a,b,c){A7.call(this,a,b,"DialSession");
this.A=this.F=null;this.M="";this.W=c;this.P=null;this.C=g.Ma;this.B=NaN;this.S=(0,g.y)(this.kQ,this);this.u=g.Ma},RGa=function(a){a.u=a.J.CF(a.M,a.o.label,a.o.friendlyName,(0,g.y)(function(b){this.u=g.Ma;
this.zs(b)},a),(0,g.y)(function(b){this.u=g.Ma;
this.Ff(b)},a))},SGa=function(a){var b={};
b.pairingCode=a.M;b.theme=a.W;yFa()&&(b.env_useStageMdx=1);return g.Gd(b)},E7=function(a,b){A7.call(this,a,b,"ManualSession");
this.u=g.Do((0,g.y)(this.rm,this,null),150)},F7=function(a,b,c,d){g.N.call(this);
this.u=a;this.H=b||"233637DE";this.F=c||"cl";this.J=d||!1;this.o=null;this.C=!1;this.A=[];this.B=(0,g.y)(this.pN,this)},TGa=function(a,b){return b?g.gb(a.A,function(c){return h6(b,c.label)},a):null},G7=function(a){k7("Controller",a)},wGa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},H7=function(a){return a.C||!!a.A.length||!!a.o},I7=function(a,b,c){b!=a.o&&(g.Zf(a.o),(a.o=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.o):a.R("yt-remote-cast2-receiver-selected",
b.o),b.subscribe("sessionScreen",(0,g.y)(a.yD,a,b)),b.getScreen()?a.R("yt-remote-cast2-session-change",b.getScreen()):c&&a.o.rm(null)):a.R("yt-remote-cast2-session-change",null))},UGa=function(a){var b=a.u.BF(),c=a.o&&a.o.o;
a=g.Nc(b,function(d){c&&h6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=TGa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},$Ga=function(a,b,c,d,e,f,h){VGa()?WGa(b,e,f,h)&&(K7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?XGa(a,c):(window.__onGCastApiAvailable=function(l,m){l?XGa(a,c):(L7("Failed to load cast API: "+m),M7(!1),K7(!1),g.it("yt-remote-cast-available"),g.it("yt-remote-cast-receiver"),YGa(),c(!1))},d?g.Po("https://web.archive.org/web/20200930235616/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?FFa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?u6():(EFa(),t6(ZGa.map(CFa))))):J7("Cannot initialize because not running Chrome")},YGa=function(){J7("dispose");
var a=N7();a&&a.dispose();g.Ha("yt.mdx.remote.cloudview.instance_",null,void 0);aHa(!1);g.Lo(O7);O7.length=0},P7=function(){return!!g.ht("yt-remote-cast-installed")},bHa=function(){var a=g.ht("yt-remote-cast-receiver");
return a?a.friendlyName:null},cHa=function(){J7("clearCurrentReceiver");
g.it("yt-remote-cast-receiver")},dHa=function(){return P7()?N7()?N7().getCastSession():(L7("getCastSelector: Cast is not initialized."),null):(L7("getCastSelector: Cast API is not installed!"),null)},R7=function(){P7()?N7()?Q7()?(J7("Requesting cast selector."),N7().requestSession()):(J7("Wait for cast API to be ready to request the session."),O7.push(g.Ko("yt-remote-cast2-api-ready",R7))):L7("requestCastSelector: Cast is not initialized."):L7("requestCastSelector: Cast API is not installed!")},S7=
function(a,b){Q7()?N7().setConnectedScreenStatus(a,b):L7("setConnectedScreenStatus called before ready.")},VGa=function(){var a=0<=g.Tc.search(/ (CrMo|Chrome|CriOS)\//);
return g.fB||a},eHa=function(a,b){N7().init(a,b)},WGa=function(a,b,c,d){var e=!1;
N7()||(a=new F7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.gt("yt-remote-cast-available",f);e6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){J7("onReceiverSelected: "+f.friendlyName);
g.gt("yt-remote-cast-receiver",f);e6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){J7("onReceiverResumed: "+f.friendlyName);
g.gt("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){J7("onSessionChange: "+i6(f));
f||g.it("yt-remote-cast-receiver");e6("yt-remote-cast2-session-change",f)}),g.Ha("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
J7("cloudview.createSingleton_: "+e);return e},N7=function(){return g.La("yt.mdx.remote.cloudview.instance_")},XGa=function(a,b){M7(!0);
K7(!1);eHa(a,function(c){c?(aHa(!0),g.Mo("yt-remote-cast2-api-ready")):(L7("Failed to initialize cast API."),M7(!1),g.it("yt-remote-cast-available"),g.it("yt-remote-cast-receiver"),YGa());b(c)})},J7=function(a){k7("cloudview",a)},L7=function(a){k7("cloudview",a)},M7=function(a){J7("setCastInstalled_ "+a);
g.gt("yt-remote-cast-installed",a)},Q7=function(){return!!g.La("yt.mdx.remote.cloudview.apiReady_")},aHa=function(a){J7("setApiReady_ "+a);
g.Ha("yt.mdx.remote.cloudview.apiReady_",a,void 0)},K7=function(a){g.Ha("yt.mdx.remote.cloudview.initializing_",a,void 0)},T7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.F=this.H=0;this.o=null;this.hasNext=this.ph=!1;this.M=this.J=this.u=this.C=0;this.B=NaN;this.A=!1;this.reset(a)},U7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.ph=!1;a.hasNext=!1;a.H=0;a.F=g.z();a.C=0;a.u=0;a.J=0;a.M=0;a.B=NaN;a.A=!1},V7=function(a){return a.tb()?(g.z()-a.F)/1E3:0},W7=function(a,b){a.H=b;
a.F=g.z()},X7=function(a){switch(a.playerState){case 1:case 1081:return(g.z()-a.F)/1E3+a.H;
case -1E3:return 0}return a.H},Y7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&U7(a)},Z7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Yb(a.o);b.hasPrevious=a.ph;b.hasNext=a.hasNext;b.playerTime=a.H;b.playerTimeAt=a.F;b.seekableStart=a.C;b.seekableEnd=a.u;b.duration=a.J;b.loadedTime=a.M;b.liveIngestionTime=a.B;return b},a8=function(a,b){g.N.call(this);
this.o=0;this.B=a;this.F=[];this.C=new rGa;this.A=this.u=null;this.M=(0,g.y)(this.BL,this);this.H=(0,g.y)(this.Ko,this);this.J=(0,g.y)(this.AL,this);this.P=(0,g.y)(this.JL,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.ky,this),fHa(this))):c=3;0!=c&&(b?this.ky(c):g.Do((0,g.y)(function(){this.ky(c)},this),0));
var d=dHa();d&&$7(this,d);this.subscribe("yt-remote-cast2-session-change",this.P)},b8=function(a){return new T7(a.B.getPlayerContextData())},fHa=function(a){g.B("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.F.push(this.B.subscribe(b,g.Ua(this.lN,b),this))},a)},gHa=function(a){g.B(a.F,function(b){this.B.unsubscribeByKey(b)},a);
a.F.length=0},c8=function(a,b){var c=a.C;
50>c.o.length+c.u.length&&a.C.u.push(b)},e8=function(a,b,c){var d=b8(a);
W7(d,c);-1E3!=d.playerState&&(d.playerState=b);d8(a,d)},f8=function(a,b,c){a.B.sendMessage(b,c)},d8=function(a,b){gHa(a);
a.B.setPlayerContextData(Z7(b));fHa(a)},$7=function(a,b){a.A&&(a.A.removeUpdateListener(a.M),a.A.removeMediaListener(a.H),a.Ko(null));
a.A=b;a.A&&(k7("CP","Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.M),a.A.addMediaListener(a.H),a.A.media.length&&a.Ko(a.A.media[0]))},hHa=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=b8(a);b.contentId!=d.videoId&&k7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;W7(d,a.u.getEstimatedTime());d8(a,d)}else k7("CP","No cast media video. Ignoring state update.")},g8=function(a,b,c){return(0,g.y)(function(d){this.Lc("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Lc("Retrying "+b+" using MDx browser channel."),f8(this,b,c))},a)},h8=function(a,b,c){g.N.call(this);
this.C=NaN;this.S=!1;this.J=this.H=this.M=this.P=NaN;this.T=[];this.B=this.F=this.A=this.qb=this.o=null;this.X=a;this.T.push(g.$o(window,"beforeunload",(0,g.y)(this.HH,this)));this.u=[];this.qb=new T7;this.W=b.id;this.o=iHa(this,c);this.o.subscribe("handlerOpened",this.FL,this);this.o.subscribe("handlerClosed",this.CL,this);this.o.subscribe("handlerError",this.DL,this);this.o.subscribe("handlerMessage",this.EL,this);vGa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.qb.videoId;
g.jt()&&g.gt("yt-remote-session-video-id",d)},this)},i8=function(a){k7("conn",a)},iHa=function(a,b){return new d7(h7(a.X,"/bc"),b,!1,function(){return a.yF()})},j8=function(a,b){a.R("proxyStateChange",b)},jHa=function(a){a.C=g.Do((0,g.y)(function(){i8("Connecting timeout");
this.Sl(1)},a),2E4)},k8=function(a){g.Fo(a.C);
a.C=NaN},l8=function(a){g.Fo(a.P);
a.P=NaN},kHa=function(a){m8(a);
a.M=g.Do((0,g.y)(function(){n8(this,"getNowPlaying")},a),2E4)},m8=function(a){g.Fo(a.M);
a.M=NaN},mHa=function(a,b){b&&(k8(a),l8(a));
b==(f7(a.o)&&isNaN(a.C))?b&&(j8(a,1),n8(a,"getSubtitlesTrack")):b?(a.xA()&&a.qb.reset(),j8(a,1),n8(a,"getNowPlaying"),lHa(a)):a.Sl(1)},nHa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.qb.videoId&&(g.Ub(b.params)?a.qb.o=null:a.qb.o=b.params,a.R("remotePlayerChange"))},oHa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.qb.listId=b.params.listId||a.qb.listId;Y7(a.qb,c,d);a.R("remoteQueueChange")},qHa=function(a,b){b.params=b.params||{};
oHa(a,b);pHa(a,b);a.R("autoplayDismissed")},pHa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
W7(a.qb,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.qb.playerState&&(c=-1E3);a.qb.playerState=c;c=Number(b.params.loadedTime);a.qb.M=isNaN(c)?0:c;c=Number(b.params.duration);a.qb.J=isNaN(c)?0:c;c=a.qb;var d=Number(b.params.liveIngestionTime);c.B=d;c.A=isNaN(d)?!1:!0;c=a.qb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.qb.playerState?kHa(a):m8(a);a.R("remotePlayerChange")},rHa=function(a,b){if(-1E3!=
a.qb.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.qb.playerState=c;c=parseInt(b.params.currentTime,10);W7(a.qb,isNaN(c)?0:c);a.R("remotePlayerChange")}},sHa=function(a,b){var c="true"==b.params.muted;
a.qb.volume=parseInt(b.params.volume,10);a.qb.muted=c;a.R("remotePlayerChange")},tHa=function(a,b){a.F=b.params.videoId;
a.R("nowAutoplaying",parseInt(b.params.timeout,10))},uHa=function(a,b){var c="true"==b.params.hasNext;
a.qb.ph="true"==b.params.hasPrevious;a.qb.hasNext=c;a.R("previousNextChange")},lHa=function(a){g.Fo(a.J);
a.J=g.Do((0,g.y)(a.Sl,a,1),864E5)},n8=function(a,b,c){c?i8("Sending: action="+b+", params="+g.Bj(c)):i8("Sending: action="+b);
a.o.sendMessage(b,c)},o8=function(a){o7.call(this,"ScreenServiceProxy");
this.oe=a;this.o=[];this.o.push(this.oe.$_s("screenChange",(0,g.y)(this.fQ,this)));this.o.push(this.oe.$_s("onlineScreenChange",(0,g.y)(this.RM,this)))},zHa=function(a,b){b=g.K("MDX_CONFIG")||b;
qFa();q6();p8||(p8=new g7(b?b.loungeApiHost:void 0),yFa()&&(p8.o="/api/loungedev"));q8||(q8=g.La("yt.mdx.remote.deferredProxies_")||[],g.Ha("yt.mdx.remote.deferredProxies_",q8,void 0));vHa();var c=r8();if(!c){var d=new x7(p8);g.Ha("yt.mdx.remote.screenService_",d,void 0);c=r8();var e=!1,f=void 0,h=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,h=b.theme,l=!!b.disableDial);$Ga(a,d,function(m){m?s8()&&S7(s8(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){e6("yt-remote-receiver-availability-change")})},
e,f,h,l)}b&&!g.La("yt.mdx.remote.initialized_")&&(g.Ha("yt.mdx.remote.initialized_",!0,void 0),t8("Initializing: "+g.Bj(b)),u8.push(g.Ko("yt-remote-cast2-availability-change",function(){e6("yt-remote-receiver-availability-change")})),u8.push(g.Ko("yt-remote-cast2-receiver-selected",function(){v8(null);
e6("yt-remote-auto-connect","cast-selector-receiver")})),u8.push(g.Ko("yt-remote-cast2-receiver-resumed",function(){e6("yt-remote-receiver-resumed","cast-selector-receiver")})),u8.push(g.Ko("yt-remote-cast2-session-change",wHa)),u8.push(g.Ko("yt-remote-connection-change",function(m){m?S7(s8(),"YouTube TV"):w8()||(S7(null,null),cHa())})),e=x8(),b.isAuto&&(e.id+="#dial"),g.qo("desktop_enable_autoplay")&&(e.capabilities=["atp"]),e.name=b.device,e.app=b.app,(h=b.theme)&&(e.theme=h),t8(" -- with channel params: "+
g.Bj(e)),xHa(e),c.start(),s8()||yHa())},BHa=function(){var a=AHa();
P7()&&g.ht("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},AHa=function(){var a=r8().oe.$_gos();
var b=y8();b&&z8()&&(l6(a,b)||a.push(b));return pFa(a)},A8=function(){var a=CHa();
!a&&P7()&&bHa()&&(a={key:"cast-selector-receiver",name:bHa()});return a},CHa=function(){var a=AHa(),b=y8();
b||(b=w8());return g.gb(a,function(c){return b&&h6(b,c.key)?!0:!1})},y8=function(){var a=s8();
if(!a)return null;var b=r8().vf();return m6(b,a)},wHa=function(a){t8("remote.onCastSessionChange_: "+i6(a));
if(a){var b=y8();b&&b.id==a.id?S7(b.id,"YouTube TV"):(b&&B8(),C8(a,1))}else z8()&&B8()},B8=function(){Q7()?N7().stopSession():L7("stopSession called before API ready.");
var a=z8();a&&(a.disconnect(1),D8(null))},E8=function(){var a=z8();
return!!a&&3!=a.getProxyState()},t8=function(a){k7("remote",a)},r8=function(){if(!F8){var a=g.La("yt.mdx.remote.screenService_");
F8=a?new o8(a):null}return F8},s8=function(){return g.La("yt.mdx.remote.currentScreenId_")},DHa=function(a){g.Ha("yt.mdx.remote.currentScreenId_",a,void 0)},EHa=function(){return g.La("yt.mdx.remote.connectData_")},v8=function(a){g.Ha("yt.mdx.remote.connectData_",a,void 0)},z8=function(){return g.La("yt.mdx.remote.connection_")},D8=function(a){var b=z8();
v8(null);a||DHa("");g.Ha("yt.mdx.remote.connection_",a,void 0);q8&&(g.B(q8,function(c){c(a)}),q8.length=0);
b&&!a?e6("yt-remote-connection-change",!1):!b&&a&&e6("yt-remote-connection-change",!0)},w8=function(){var a=g.jt();
if(!a)return null;var b=r8();if(!b)return null;b=b.vf();return m6(b,a)},C8=function(a,b){s8();
y8()&&y8();if(G8)H8=a;else{DHa(a.id);var c=new h8(p8,a,x8());c.connect(b,EHa());c.subscribe("beforeDisconnect",function(d){e6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){z8()&&(z8(),D8(null))});
D8(c)}},yHa=function(){var a=w8();
a?(t8("Resume connection to: "+i6(a)),C8(a,0)):(r6(),cHa(),t8("Skipping connecting because no session screen found."))},vHa=function(){var a=x8();
if(g.Ub(a)){a=p6();var b=g.ht("yt-remote-session-name")||"",c=g.ht("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ha("yt.mdx.remote.channelParams_",a,void 0)}},x8=function(){return g.La("yt.mdx.remote.channelParams_")||{}},xHa=function(a){a?(g.gt("yt-remote-session-app",a.app),g.gt("yt-remote-session-name",a.name)):(g.it("yt-remote-session-app"),g.it("yt-remote-session-name"));
g.Ha("yt.mdx.remote.channelParams_",a,void 0)},I8=function(a,b,c){g.C.call(this);
var d=this;this.module=a;this.G=b;this.ab=c;this.events=new g.gs(this);this.M=this.events.K(this.G,"onVolumeChange",this.aD);this.B=!1;this.suggestion=null;this.C=new g.HK(64);this.o=new g.G(this.JE,500,this);this.u=new g.G(this.KE,1E3,this);this.H=new v6(this.KP,0,this);this.A={};this.J=new g.G(this.lF,1E3,this);this.F=new w6(this.seekTo,1E3,this);this.P=g.Ma;g.E(this,this.events);this.events.K(b,"onCaptionsTrackListChanged",this.sM);this.events.K(b,"captionschanged",this.zL);this.events.K(b,"captionssettingschanged",
this.NE);this.events.K(b,"videoplayerreset",this.As);this.events.K(b,"mdxautoplaycancel",function(){d.ab.Pz()});
a=this.ab;a.ea();a.subscribe("proxyStateChange",this.tD,this);a.subscribe("remotePlayerChange",this.Qo,this);a.subscribe("remoteQueueChange",this.As,this);a.subscribe("previousNextChange",this.pD,this);a.subscribe("nowAutoplaying",this.kD,this);a.subscribe("autoplayDismissed",this.KC,this);g.E(this,this.o);g.E(this,this.u);g.E(this,this.H);g.E(this,this.J);g.E(this,this.F);this.NE();this.As();this.Qo()},FHa=function(a){a.wc(0);
a.o.stop();a.qd(new g.HK(64))},K8=function(a,b){if(J8(a)&&!a.B){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.$b(c,b));a.ab.zF(a.G.getVideoData(1).videoId,c);a.A=b8(a.ab).o}},L8=function(a,b){var c=a.G.getPlaylist();
if(c){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.ab.playVideo(c.videoId,b,d,e,c.playerParams,c.yf,cFa(c));a.qd(new g.HK(1))},GHa=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{WA:1});
c&&c.length?(a.G.setOption("captions","track",b),a.B=!1):(a.G.loadModule("captions"),a.B=!0)}else a.G.setOption("captions","track",{})},J8=function(a){return b8(a.ab).videoId===a.G.getVideoData(1).videoId},M8=function(){g.V.call(this,{D:"div",
I:"ytp-mdx-manual-pairing-popup-dialog",O:{role:"dialog"},L:[{D:"div",I:"ytp-mdx-manual-pairing-popup-dialog-inner-content",L:[{D:"div",I:"ytp-mdx-manual-pairing-popup-title",U:"Connecting to your TV on web using a code will be going away soon"},{D:"div",I:"ytp-mdx-manual-pairing-popup-buttons",L:[{D:"button",da:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],U:"Learn more"},{D:"button",da:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],U:"OK"}]}]}]});this.o=new g.qN(this,250);this.learnMoreButton=
this.ba("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.ba("ytp-mdx-manual-pairing-popup-ok");g.E(this,this.o);this.K(this.learnMoreButton,"click",this.u);this.K(this.okButton,"click",this.A)},N8=function(){g.V.call(this,{D:"div",
I:"ytp-mdx-popup-dialog",O:{role:"dialog"},L:[{D:"div",I:"ytp-mdx-popup-dialog-inner-content",L:[{D:"div",I:"ytp-mdx-popup-title",U:"You're signed out"},{D:"div",I:"ytp-mdx-popup-description",U:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",I:"ytp-mdx-privacy-popup-buttons",L:[{D:"button",da:["ytp-button","ytp-mdx-privacy-popup-cancel"],U:"Cancel"},{D:"button",da:["ytp-button","ytp-mdx-privacy-popup-confirm"],
U:"Confirm"}]}]}]});this.o=new g.qN(this,250);this.cancelButton=this.ba("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.ba("ytp-mdx-privacy-popup-confirm");g.E(this,this.o);this.K(this.cancelButton,"click",this.u);this.K(this.confirmButton,"click",this.A)},O8=function(a){g.V.call(this,{D:"div",
I:"ytp-remote",L:[{D:"div",I:"ytp-remote-display-status",L:[{D:"div",I:"ytp-remote-display-status-icon",L:[g.KM()]},{D:"div",I:"ytp-remote-display-status-text",U:"{{statustext}}"}]}]});this.api=a;this.o=new g.qN(this,250);g.E(this,this.o);this.K(a,"presentingplayerstatechange",this.u);HHa(this,g.eI(a))},HHa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
c=g.T(b,128)?g.WI("Error on $RECEIVER_NAME",c):b.tb()||g.T(b,4)?g.WI("Playing on $RECEIVER_NAME",c):g.WI("Connected to $RECEIVER_NAME",c);a.ka("statustext",c);a.o.show()}else a.o.hide()},P8=function(a,b){g.PZ.call(this,"Play on",0,a,b);
this.G=a;this.Hj={};this.K(a,"onMdxReceiversChange",this.B);this.K(a,"presentingplayerstatechange",this.B);this.B()},Q8=function(a){g.IS.call(this,a);
this.Eg={key:k6(),name:"This computer"};this.eh=null;this.subscriptions=[];this.Pw=this.ab=null;this.Hj=[this.Eg];this.Wi=this.Eg;this.sc=new g.HK(64);this.pB=0;this.Kd=-1;this.tm=null;this.To=this.Dr=!1;this.kl=this.Mm=null;if(!g.dC(this.player.N())){a=this.player;var b=g.QW(a);b&&(b=b.vk())&&(b=new P8(a,b),g.E(this,b));b=new O8(a);g.E(this,b);g.GO(a,b.element,4);this.Mm=new N8;g.E(this,this.Mm);g.GO(a,this.Mm.element,4);g.Q(this.player.N().experiments,"pair_servlet_deprecation_warning_enabled")&&
(this.tm=new M8,g.E(this,this.tm),g.GO(a,this.tm.element,4));this.To=!!w8();this.Dr=!!g.ht("yt-remote-manual-pairing-warning-shown")}},R8=function(a){a.kl&&(a.player.removeEventListener("presentingplayerstatechange",a.kl),a.kl=null)},IHa=function(a,b,c){a.sc=c;
a.player.R("presentingplayerstatechange",new g.mI(c,b))},JHa=function(a,b,c){var d=!1;
1===b?d=!a.To:2===b&&(d=!a.Dr);d&&g.oI(c,8)&&(a.player.pauseVideo(),R8(a))},S8=function(a,b){if(b.key!==a.Wi.key)if(b.key===a.Eg.key)B8();
else{if(a.tm&&!a.Dr&&b!==a.Eg&&"cast-selector-receiver"!==b.key&&g.mC(a.player.N()))KHa(a);else{var c;(c=!g.Q(a.player.N().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.K("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.K("SESSION_INDEX")&&!g.K("LOGGED_IN")))||a.To||!a.Mm);(c?0:g.mC(a.player.N())||g.qC(a.player.N()))&&LHa(a)}a.Wi=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&
g.Q(a.player.N().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.getLength();l++)h[l]=f.Aa(l).videoId}else h=[e];f=a.player.getCurrentTime(1);d={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.yf,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=cFa(c))&&(d.locationInfo=c);c=d}t8("Connecting to: "+g.Bj(b));"cast-selector-receiver"==b.key?(v8(c||null),c=
c||null,Q7()?N7().setLaunchParams(c):L7("setLaunchParams called before ready.")):!c&&E8()&&s8()==b.key?e6("yt-remote-connection-change",!0):(B8(),v8(c||null),c=r8().vf(),(c=m6(c,b.key))&&C8(c,1))}},LHa=function(a){g.eI(a.player).tb()?a.player.pauseVideo():(a.kl=function(b){JHa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.kl));
a.Mm&&a.Mm.dc();z8()||(G8=!0)},KHa=function(a){g.eI(a.player).tb()?a.player.pauseVideo():(a.kl=function(b){JHa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.kl));
a.tm&&a.tm.dc();z8()||(G8=!0)},PFa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},J6={"'":"\\'"},MHa={},lFa={LQ:"atp",BT:"ska",mT:"que",BS:"mus",AT:"sus",IR:"dsp",tT:"seq"},s6,o6="",DFa=zFa("loadCastFramework")||zFa("loadCastApplicationFramework"),ZGa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Xa(v6,g.C);g.k=v6.prototype;g.k.EH=function(a){this.B=arguments;this.o=!1;this.Ka?this.A=g.z()+this.pe:this.Ka=g.Qm(this.C,this.pe)};
g.k.stop=function(){this.Ka&&(g.v.clearTimeout(this.Ka),this.Ka=null);this.A=null;this.o=!1;this.B=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.F.apply(null,this.B)))};
g.k.V=function(){this.stop();v6.Pc.V.call(this)};
g.k.FH=function(){this.A?(this.Ka=g.Qm(this.C,this.A-g.z()),this.A=null):(this.Ka=null,this.u?this.o=!0:(this.o=!1,this.F.apply(null,this.B)))};g.u(w6,g.C);g.k=w6.prototype;g.k.FB=function(a){this.A=arguments;this.Ka||this.u?this.o=!0:x6(this)};
g.k.stop=function(){this.Ka&&(g.v.clearTimeout(this.Ka),this.Ka=null,this.o=!1,this.A=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.o||this.Ka||(this.o=!1,x6(this))};
g.k.V=function(){g.C.prototype.V.call(this);this.stop()};z6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
z6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};A6.prototype.o=null;A6.prototype.getOptions=function(){var a;(a=this.o)||(a={},HFa(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var T8;g.Xa(GFa,A6);T8=new GFa;g.k=B6.prototype;g.k.zk=null;g.k.Tg=!1;g.k.cn=null;g.k.iy=null;g.k.Qm=null;g.k.Xm=null;g.k.Si=null;g.k.Ij=null;g.k.ll=null;g.k.Fd=null;g.k.Ep=0;g.k.Yg=null;g.k.Ct=null;g.k.gj=null;g.k.Yn=-1;g.k.zE=!0;g.k.ck=!1;g.k.kv=0;g.k.Js=null;var MFa={},E6={};g.k=B6.prototype;g.k.setTimeout=function(a){this.C=a};
g.k.SO=function(a){a=a.target;var b=this.Js;b&&3==S6(a)?b.FB():this.vF(a)};
g.k.vF=function(a){try{if(a==this.Fd)a:{var b=S6(this.Fd),c=this.Fd.F,d=this.Fd.getStatus();if(g.ve&&!g.Xd(10)||g.xe&&!g.Wd("420+")){if(4>b)break a}else if(3>b||3==b&&!g.mg&&!U6(this.Fd))break a;this.ck||4!=b||7==c||(8==c||0>=d?this.o.Kg(3):this.o.Kg(2));L6(this);var e=this.Fd.getStatus();this.Yn=e;var f=U6(this.Fd);(this.Tg=200==e)?(4==b&&H6(this),this.F?(OFa(this,b,f),g.mg&&this.Tg&&3==b&&(this.B.ia(this.u,"tick",this.MO),this.u.start())):G6(this,f),this.Tg&&!this.ck&&(4==b?this.o.Yq(this):(this.Tg=
!1,D6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.gj=3,F6(13)):(this.gj=0,F6(14)),H6(this),I6(this))}}catch(h){this.Fd&&U6(this.Fd)}finally{}};
g.k.MO=function(){var a=S6(this.Fd),b=U6(this.Fd);this.Ep<b.length&&(L6(this),OFa(this,a,b),this.Tg&&4!=a&&D6(this))};
g.k.fO=function(a){K6((0,g.y)(this.eO,this,a),0)};
g.k.eO=function(a){this.ck||(L6(this),G6(this,a),D6(this))};
g.k.CD=function(a){K6((0,g.y)(this.dO,this,a),0)};
g.k.dO=function(a){this.ck||(H6(this),this.Tg=a,this.o.Yq(this),this.o.Kg(4))};
g.k.cancel=function(){this.ck=!0;H6(this)};
g.k.rO=function(){this.cn=null;var a=g.z();0<=a-this.iy?(2!=this.Xm&&this.o.Kg(3),H6(this),this.gj=2,F6(18),I6(this)):RFa(this,this.iy-a)};
g.k.getLastError=function(){return this.gj};g.k=UFa.prototype;g.k.hv=null;g.k.ff=null;g.k.Ks=!1;g.k.HA=null;g.k.Gq=null;g.k.Rv=null;g.k.jv=null;g.k.Vf=null;g.k.ji=-1;g.k.Xn=null;g.k.qn=null;g.k.connect=function(a){this.jv=a;a=N6(this.o,null,this.jv);F6(3);this.HA=g.z();var b=this.o.J;null!=b?(this.Xn=b[0],(this.qn=b[1])?(this.Vf=1,VFa(this)):(this.Vf=2,P6(this))):(b6(a,"MODE","init"),this.ff=new B6(this,void 0,void 0,void 0),this.ff.zk=this.hv,C6(this.ff,a,!1,null,!0),this.Vf=0)};
g.k.EG=function(a){if(a)this.Vf=2,P6(this);else{F6(4);var b=this.o;b.oh=b.Ui.ji;a7(b,9)}a&&this.Kg(2)};
g.k.Au=function(a){return this.o.Au(a)};
g.k.abort=function(){this.ff&&(this.ff.cancel(),this.ff=null);this.ji=-1};
g.k.GA=function(){return!1};
g.k.uD=function(a,b){this.ji=a.Yn;if(0==this.Vf)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.oh=this.ji;a7(c,2);return}this.Xn=c[0];this.qn=c[1]}else c=this.o,c.oh=this.ji,a7(c,2);else if(2==this.Vf)if(this.Ks)F6(7),this.Rv=g.z();else if("11111"==b){if(F6(6),this.Ks=!0,this.Gq=g.z(),c=this.Gq-this.HA,!g.ve||g.Xd(10)||500>c)this.ji=200,this.ff.cancel(),F6(12),O6(this.o,this,!0)}else F6(8),this.Gq=this.Rv=g.z(),this.Ks=!1};
g.k.Yq=function(){this.ji=this.ff.Yn;if(this.ff.Tg)0==this.Vf?this.qn?(this.Vf=1,VFa(this)):(this.Vf=2,P6(this)):2==this.Vf&&((!g.ve||g.Xd(10)?!this.Ks:200>this.Rv-this.Gq)?(F6(11),O6(this.o,this,!1)):(F6(12),O6(this.o,this,!0)));else{0==this.Vf?F6(9):2==this.Vf&&F6(10);var a=this.o;this.ff.getLastError();a.oh=this.ji;a7(a,2)}};
g.k.mp=function(){return this.o.mp()};
g.k.isActive=function(){return this.o.isActive()};
g.k.Kg=function(a){this.o.Kg(a)};g.Xa(Q6,g.fm);var $Fa=/^https?$/i,NHa=["POST","PUT"];g.k=Q6.prototype;
g.k.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.M+"; newUri="+a);b=b?b.toUpperCase():"GET";this.M=a;this.B="";this.F=0;this.na=b;this.X=!1;this.A=!0;this.o=this.W?IFa(this.W):IFa(T8);this.T=this.W?this.W.getOptions():T8.getOptions();this.o.onreadystatechange=(0,g.y)(this.qD,this);try{d6(T6(this,"Opening Xhr")),this.ca=!0,this.o.open(b,String(a),!0),this.ca=!1}catch(f){d6(T6(this,"Error opening Xhr: "+f.message));ZFa(this,f);return}a=
c||"";var e=this.headers.clone();d&&hFa(d,function(f,h){e.set(h,f)});
d=g.gb(e.Tf(),XFa);c=g.v.FormData&&a instanceof g.v.FormData;!g.nb(NHa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.o.setRequestHeader(h,f)},this);
this.oa&&(this.o.responseType=this.oa);"withCredentials"in this.o&&this.o.withCredentials!==this.aa&&(this.o.withCredentials=this.aa);try{bGa(this),0<this.H&&(this.S=WFa(this.o),d6(T6(this,"Will abort after "+this.H+"ms if incomplete, xhr2 "+this.S)),this.S?(this.o.timeout=this.H,this.o.ontimeout=(0,g.y)(this.IA,this)):this.P=g.Qm(this.IA,this.H,this)),d6(T6(this,"Sending request")),this.J=!0,this.o.send(a),this.J=!1}catch(f){d6(T6(this,"Send error: "+f.message)),ZFa(this,f)}};
g.k.IA=function(){"undefined"!=typeof g.e1&&this.o&&(this.B="Timed out after "+this.H+"ms, aborting",this.F=8,T6(this,this.B),this.dispatchEvent("timeout"),this.abort(8))};
g.k.abort=function(a){this.o&&this.A&&(T6(this,"Aborting"),this.A=!1,this.C=!0,this.o.abort(),this.C=!1,this.F=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),R6(this))};
g.k.V=function(){this.o&&(this.A&&(this.A=!1,this.C=!0,this.o.abort(),this.C=!1),R6(this,!0));Q6.Pc.V.call(this)};
g.k.qD=function(){this.ea()||(this.ca||this.J||this.C?aGa(this):this.oN())};
g.k.oN=function(){aGa(this)};
g.k.isActive=function(){return!!this.o};
g.k.getStatus=function(){try{return 2<S6(this)?this.o.status:-1}catch(a){return-1}};
g.k.getLastError=function(){return"string"===typeof this.B?this.B:String(this.B)};g.k=V6.prototype;g.k.dm=null;g.k.Kn=null;g.k.Ve=null;g.k.Zc=null;g.k.gv=null;g.k.Iq=null;g.k.mz=null;g.k.Xq=null;g.k.Go=0;g.k.PK=0;g.k.me=null;g.k.Yi=null;g.k.Th=null;g.k.ik=null;g.k.Ui=null;g.k.At=null;g.k.qm=-1;g.k.oB=-1;g.k.oh=-1;g.k.Wl=0;g.k.Jl=0;g.k.dk=8;var b7=new g.fm;g.Xa(dGa,g.Jl);g.Xa(eGa,g.Jl);g.Xa(fGa,g.Jl);g.k=V6.prototype;g.k.connect=function(a,b,c,d,e){F6(0);this.gv=b;this.Kn=c||{};d&&void 0!==e&&(this.Kn.OSID=d,this.Kn.OAID=e);this.F?(K6((0,g.y)(this.Dz,this,a),100),jGa(this)):this.Dz(a)};
g.k.Dz=function(a){this.Ui=new UFa(this);this.Ui.hv=this.dm;this.Ui.u=this.C;this.Ui.connect(a)};
g.k.GA=function(){return 0==this.o};
g.k.BD=function(a){this.Yi=null;mGa(this,a)};
g.k.AD=function(){this.Th=null;this.Zc=new B6(this,this.A,"rpc",this.H);this.Zc.zk=this.dm;this.Zc.kv=0;var a=this.mz.clone();$5(a,"RID","rpc");$5(a,"SID",this.A);$5(a,"CI",this.At?"0":"1");$5(a,"AID",this.qm);W6(this,a);if(!g.ve||g.Xd(10))$5(a,"TYPE","xmlhttp"),C6(this.Zc,a,!0,this.Xq,!1);else{$5(a,"TYPE","html");var b=this.Zc,c=!!this.Xq;b.Xm=3;b.Si=a6(a.clone());QFa(b,c)}};
g.k.uD=function(a,b){if(0!=this.o&&(this.Zc==a||this.Ve==a))if(this.oh=a.Yn,this.Ve==a&&3==this.o)if(7<this.dk){try{var c=this.C.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Th){if(this.Zc)if(this.Zc.Qm+3E3<this.Ve.Qm)Y6(this),this.Zc.cancel(),this.Zc=null;else break a;$6(this);F6(19)}}else this.oB=c[1],0<this.oB-this.qm&&37500>c[2]&&this.At&&0==this.Jl&&!this.ik&&(this.ik=K6((0,g.y)(this.tL,this),6E3));else a7(this,11)}else b!=MHa.iR.o&&a7(this,11);else if(this.Zc==
a&&Y6(this),!g.qc(b)){c=this.C.parse(b);for(var d=0;d<c.length;d++){var e=c[d];this.qm=e[0];e=e[1];2==this.o?"c"==e[0]?(this.A=e[1],this.Xq=e[2],e=e[3],null!=e?this.dk=e:this.dk=6,this.o=3,this.me&&this.me.zz(),this.mz=N6(this,this.mp()?this.Xq:null,this.gv),nGa(this)):"stop"==e[0]&&a7(this,7):3==this.o&&("stop"==e[0]?a7(this,7):"noop"!=e[0]&&this.me&&this.me.yz(e),this.Jl=0)}}};
g.k.tL=function(){null!=this.ik&&(this.ik=null,this.Zc.cancel(),this.Zc=null,$6(this),F6(20))};
g.k.Yq=function(a){if(this.Zc==a){Y6(this);this.Zc=null;var b=2}else if(this.Ve==a)this.Ve=null,b=1;else return;this.oh=a.Yn;if(0!=this.o)if(a.Tg)1==b?(b7.dispatchEvent(new eGa(b7,a.ll?a.ll.length:0,g.z()-a.Qm,this.Wl)),X6(this),this.B.length=0):nGa(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.oh)){if(d=1==b)this.Ve||this.Yi||1==this.o||2<=this.Wl?d=!1:(this.Yi=K6((0,g.y)(this.BD,this,a),oGa(this,this.Wl)),this.Wl++,d=!0);d=!(d||2==b&&$6(this))}if(d)switch(c){case 1:a7(this,
5);break;case 4:a7(this,10);break;case 3:a7(this,6);break;case 7:a7(this,12);break;default:a7(this,2)}}};
g.k.cH=function(a){if(!g.nb(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.k.zP=function(a){a?F6(2):(F6(1),pGa(this,8))};
g.k.Au=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Q6;a.aa=!1;return a};
g.k.isActive=function(){return!!this.me&&this.me.isActive(this)};
g.k.Kg=function(a){b7.dispatchEvent(new fGa(b7,a))};
g.k.mp=function(){return!(!g.ve||g.Xd(10))};
g.k=qGa.prototype;g.k.zz=function(){};
g.k.yz=function(){};
g.k.xz=function(){};
g.k.nu=function(){};
g.k.hA=function(){return{}};
g.k.isActive=function(){return!0};g.k=rGa.prototype;g.k.isEmpty=function(){return g.ob(this.o)&&g.ob(this.u)};
g.k.clear=function(){this.o=[];this.u=[]};
g.k.contains=function(a){return g.nb(this.o,a)||g.nb(this.u,a)};
g.k.remove=function(a){var b=this.o;var c=(0,g.fza)(b,a);0<=c?(g.qb(b,c),b=!0):b=!1;return b||g.rb(this.u,a)};
g.k.Fe=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Xa(c7,g.C);g.k=c7.prototype;g.k.YN=function(){this.pe=Math.min(3E5,2*this.pe);this.A();this.u&&this.start()};
g.k.start=function(){var a=this.pe+15E3*Math.random();this.o.jb(a);this.u=g.z()+a};
g.k.stop=function(){this.o.stop();this.u=0};
g.k.isActive=function(){return this.o.isActive()};
g.k.reset=function(){this.o.stop();this.pe=5E3};g.Xa(d7,qGa);g.k=d7.prototype;g.k.subscribe=function(a,b,c){return this.A.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.A.unsubscribe(a,b,c)};
g.k.yj=function(a){return this.A.Ak(a)};
g.k.R=function(a,b){return this.A.R.apply(this.A,arguments)};
g.k.dispose=function(){this.sd||(this.sd=!0,g.Zf(this.A),uGa(this),g.Zf(this.u),this.u=null,this.S=function(){return""})};
g.k.ea=function(){return this.sd};
g.k.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.M="";this.u.stop();this.C=a||null;this.B=b||0;a=this.P+"/test";b=this.P+"/bind";var d=new V6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.T),e=this.o;e&&(e.me=null);d.me=this;this.o=d;e7(this);e?this.o.connect(a,b,this.F,e.A,e.qm):c?this.o.connect(a,b,this.F,c.sessionId,c.arrayId):this.o.connect(a,b,this.F)}};
g.k.sendMessage=function(a,b){var c={_sc:a};b&&g.$b(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.H.push(c):f7(this)&&(e7(this),kGa(this.o,c))};
g.k.zz=function(){this.u.reset();this.C=null;this.B=0;if(this.H.length){var a=this.H;this.H=[];for(var b=0,c=a.length;b<c;++b)kGa(this.o,a[b])}this.R("handlerOpened")};
g.k.xz=function(a){var b=2==a&&401==this.o.oh;4==a||b||this.u.start();this.R("handlerError",a)};
g.k.nu=function(a){if(!this.u.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.H.push(d)}};
g.k.hA=function(){var a={v:2};this.M&&(a.gsessionid=this.M);0!=this.B&&(a.ui=""+this.B);0!=this.J&&(a.ui=""+this.J);this.C&&g.$b(a,this.C);return a};
g.k.yz=function(a){"S"==a[0]?this.M=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),iGa(this.o)):this.R("handlerMessage",new sGa(a[0],a[1]))};
g.k.eP=function(){this.u.isActive();var a=this.o,b=0;a.Zc&&b++;a.Ve&&b++;0==b&&this.connect(this.C,this.B)};g7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g7.prototype.A=function(a,b){a(Error("Request error: "+b.status))};
g7.prototype.C=function(a){a(Error("request timed out"))};var CGa=g.z(),j7=null,m7=Array(50),l7=-1,n7=!1;g.Xa(o7,g.N);o7.prototype.vf=function(){return this.screens};
o7.prototype.contains=function(a){return!!l6(this.screens,a)};
o7.prototype.get=function(a){return a?m6(this.screens,a):null};
o7.prototype.info=function(a){k7(this.F,a)};g.u(p7,g.N);g.k=p7.prototype;g.k.start=function(){!this.o&&isNaN(this.Ka)&&this.AF()};
g.k.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.Ka)||(g.Fo(this.Ka),this.Ka=NaN)};
g.k.V=function(){this.stop();g.N.prototype.V.call(this)};
g.k.AF=function(){this.Ka=NaN;this.o=g.nq(h7(this.F,"/pairing/get_screen"),{method:"POST",Lb:{pairing_code:this.C},timeout:5E3,onSuccess:(0,g.y)(this.dQ,this),onError:(0,g.y)(this.cQ,this),Gf:(0,g.y)(this.eQ,this)})};
g.k.dQ=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.A;c.name=this.B;this.R("pairingComplete",new g6(c))};
g.k.cQ=function(a){this.o=null;a.status&&404==a.status?this.u>=OHa.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=OHa[this.u],this.Ka=g.Do((0,g.y)(this.AF,this),a),this.u++):this.R("pairingFailed",Error("Server error "+a.status))};
g.k.eQ=function(){this.o=null;this.R("pairingFailed",Error("Server not responding"))};
var OHa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Xa(r7,o7);g.k=r7.prototype;g.k.start=function(){q7(this)&&this.R("screenChange");!g.ht("yt-remote-lounge-token-expiration")&&GGa(this);g.Fo(this.o);this.o=g.Do((0,g.y)(this.start,this),1E4)};
g.k.add=function(a,b){q7(this);DGa(this,a);s7(this,!1);this.R("screenChange");b(a);a.token||GGa(this)};
g.k.remove=function(a,b){var c=q7(this);FGa(this,a)&&(s7(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.k.xt=function(a,b,c,d){var e=q7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,s7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.k.V=function(){g.Fo(this.o);r7.Pc.V.call(this)};
g.k.OH=function(a){q7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}s7(this,!b);b&&k7(this.F,"Missed "+b+" lounge tokens.")};
g.k.NH=function(a){k7(this.F,"Requesting lounge tokens failed: "+a)};g.u(u7,g.N);g.k=u7.prototype;g.k.start=function(){var a=parseInt(g.ht("yt-remote-fast-check-period")||"0",10);(this.B=g.z()-144E5<a?0:a)?w7(this):(this.B=g.z()+3E5,g.gt("yt-remote-fast-check-period",this.B),this.gx())};
g.k.isEmpty=function(){return g.Ub(this.o)};
g.k.update=function(){t7("Updating availability on schedule.");var a=this.F(),b=g.Ib(this.o,function(c,d){return c&&!!m6(a,d)},this);
v7(this,b)};
g.k.V=function(){g.Fo(this.A);this.A=NaN;this.u&&(this.u.abort(),this.u=null);g.N.prototype.V.call(this)};
g.k.gx=function(){g.Fo(this.A);this.A=NaN;this.u&&this.u.abort();var a=JGa(this);if(c6(a)){var b=h7(this.C,"/pairing/get_screen_availability");this.u=i7(this.C,b,{lounge_token:g.Ob(a).join(",")},(0,g.y)(this.JN,this,a),(0,g.y)(this.IN,this))}else v7(this,{}),w7(this)};
g.k.JN=function(a,b){this.u=null;var c=g.Ob(JGa(this));if(g.Eb(c,g.Ob(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;v7(this,d);w7(this)}else this.Lc("Changing Screen set during request."),this.gx()};
g.k.IN=function(a){this.Lc("Screen availability failed: "+a);this.u=null;w7(this)};
g.k.Lc=function(a){k7("OnlineScreenService",a)};g.Xa(x7,o7);g.k=x7.prototype;g.k.start=function(){this.u.start();this.o.start();this.screens.length&&(this.R("screenChange"),this.o.isEmpty()||this.R("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.o.update()};
g.k.xt=function(a,b,c,d){this.u.contains(a)?this.u.xt(a,b,c,d):(a="Updating name of unknown screen: "+a.name,k7(this.F,a),d(Error(a)))};
g.k.vf=function(a){return a?this.screens:g.tb(this.screens,g.He(this.A,function(b){return!this.contains(b)},this))};
g.k.BF=function(){return g.He(this.vf(!0),function(a){return!!this.o.o[a.id]},this)};
g.k.CF=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new p7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.y)(function(h){g.Zf(f);d(y7(this,h))},this));
f.subscribe("pairingFailed",function(h){g.Zf(f);e(h)});
f.start();return(0,g.y)(f.stop,f)};
g.k.gQ=function(a,b,c,d){g.nq(h7(this.C,"/pairing/get_screen"),{method:"POST",Lb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.y)(function(e,f){var h=new g6(f.screen||{});if(!h.name||NGa(this,h.name)){a:{var l=h.name;for(var m=2,n=b(l,m);NGa(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}h.name=l}c(y7(this,h))},this),
onError:(0,g.y)(function(e){d(Error("pairing request failed: "+e.status))},this),
Gf:(0,g.y)(function(){d(Error("pairing request timed out."))},this)})};
g.k.V=function(){g.Zf(this.u);g.Zf(this.o);x7.Pc.V.call(this)};
g.k.VH=function(){OGa(this);this.R("screenChange");this.o.update()};
x7.prototype.dispose=x7.prototype.dispose;g.Xa(A7,g.N);g.k=A7.prototype;g.k.getScreen=function(){return this.H};
g.k.zs=function(a){this.H=a;this.R("sessionScreen",this.H)};
g.k.Ff=function(a){this.ea()||(a&&B7(this,""+a),this.H=null,this.R("sessionScreen",null))};
g.k.info=function(a){k7(this.T,a)};
g.k.EF=function(){return null};
g.k.rx=function(a){var b=this.o;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.y)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.y)(function(){B7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.V=function(){this.rx("");A7.Pc.V.call(this)};g.u(C7,A7);g.k=C7.prototype;g.k.qx=function(a){if(this.u){if(this.u==a)return;B7(this,"Overriding cast sesison with new session object");this.u.removeUpdateListener(this.C);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.u=a;this.u.addUpdateListener(this.C);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);QGa(this)};
g.k.rm=function(a){this.info("launchWithParams no-op for Cast: "+g.Bj(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.y)(function(){this.Ff()},this),(0,g.y)(function(){this.Ff(Error("Failed to stop receiver app."))},this)):this.Ff(Error("Stopping cast device witout session."))};
g.k.rx=function(){};
g.k.V=function(){this.info("disposeInternal");g.Fo(this.A);this.A=0;this.u&&(this.u.removeUpdateListener(this.C),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.u=null;A7.prototype.V.call(this)};
g.k.zO=function(a,b){if(!this.ea())if(b){var c=y6(b);if(g.Ra(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Bj(c));switch(d){case "mdxSessionStatus":PGa(this,c.screenId);break;default:B7(this,"Unknown youtube message: "+d)}}else B7(this,"Unable to parse message.")}else B7(this,"No data in message.")};
g.k.zA=function(a,b,c,d){MGa(this.J,this.o.label,a,this.o.friendlyName,(0,g.y)(function(e){e?b(e):0<=d?(B7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Do((0,g.y)(this.zA,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.EF=function(){return this.u};
g.k.hQ=function(a){this.ea()||a||(B7(this,"Cast session died."),this.Ff())};g.u(D7,A7);g.k=D7.prototype;g.k.qx=function(a){this.A=a;this.A.addUpdateListener(this.S)};
g.k.rm=function(a){this.P=a;this.C()};
g.k.stop=function(){this.u();this.u=g.Ma;g.Fo(this.B);this.A?this.A.stop((0,g.y)(this.Ff,this,null),(0,g.y)(this.Ff,this,"Failed to stop DIAL device.")):this.Ff()};
g.k.V=function(){this.u();this.u=g.Ma;g.Fo(this.B);this.A&&this.A.removeUpdateListener(this.S);this.A=null;A7.prototype.V.call(this)};
g.k.kQ=function(a){this.ea()||a||(B7(this,"DIAL session died."),this.u(),this.u=g.Ma,this.Ff())};
g.k.zv=function(a){this.M=k6();if(this.P){var b=new chrome.cast.DialLaunchResponse(!0,SGa(this));a(b);RGa(this)}else this.C=(0,g.y)(function(){g.Fo(this.B);this.C=g.Ma;this.B=NaN;var c=new chrome.cast.DialLaunchResponse(!0,SGa(this));a(c);RGa(this)},this),this.B=g.Do((0,g.y)(function(){this.C()},this),100)};
g.k.lI=function(a,b,c){MGa(this.J,this.F.receiver.label,a,this.o.friendlyName,(0,g.y)(function(d){d&&d.token?(this.zs(d),b(new chrome.cast.DialLaunchResponse(!1))):this.zv(b,c)},this),(0,g.y)(function(d){B7(this,"Failed to get DIAL screen: "+d);
this.zv(b,c)},this))};g.u(E7,A7);E7.prototype.stop=function(){this.Ff()};
E7.prototype.qx=function(){};
E7.prototype.rm=function(){g.Fo(this.u);this.u=NaN;var a=m6(this.J.vf(),this.o.label);a?this.zs(a):this.Ff(Error("No such screen"))};
E7.prototype.V=function(){g.Fo(this.u);this.u=NaN;A7.prototype.V.call(this)};g.u(F7,g.N);g.k=F7.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.H);this.J||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.y)(this.tN,this);c=new chrome.cast.ApiConfig(c,(0,g.y)(this.wD,this),f,d,e);c.customDialLaunchCallback=(0,g.y)(this.OL,this);chrome.cast.initialize(c,(0,g.y)(function(){this.ea()||
(chrome.cast.addReceiverActionListener(this.B),zGa(),this.u.subscribe("onlineScreenChange",(0,g.y)(this.DF,this)),this.A=UGa(this),chrome.cast.setCustomReceivers(this.A,g.Ma,(0,g.y)(function(h){this.Lc("Failed to set initial custom receivers: "+g.Bj(h))},this)),this.R("yt-remote-cast2-availability-change",H7(this)),b(!0))},this),(0,g.y)(function(h){this.Lc("Failed to initialize API: "+g.Bj(h));
b(!1)},this))};
g.k.kP=function(a,b){G7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.getScreen();if(!a||c&&c.id!=a)G7("Unsetting old screen status: "+this.o.o.friendlyName),I7(this,null)}if(a&&b){if(!this.o){c=m6(this.u.vf(),a);if(!c){G7("setConnectedScreenStatus: Unknown screen.");return}var d=TGa(this,c);d||(G7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.A.push(d),chrome.cast.setCustomReceivers(this.A,
g.Ma,(0,g.y)(function(e){this.Lc("Failed to set initial custom receivers: "+g.Bj(e))},this)));
G7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);I7(this,new E7(this.u,d),!0)}this.o.rx(b)}else G7("setConnectedScreenStatus: no screen.")};
g.k.lP=function(a){this.ea()?this.Lc("Setting connection data on disposed cast v2"):this.o?this.o.rm(a):this.Lc("Setting connection data without a session")};
g.k.jQ=function(){this.ea()?this.Lc("Stopping session on disposed cast v2"):this.o?(this.o.stop(),I7(this,null)):G7("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.y)(this.wD,this),(0,g.y)(this.LN,this))};
g.k.V=function(){this.u.unsubscribe("onlineScreenChange",(0,g.y)(this.DF,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.B);var a=wGa,b=g.La("yt.mdx.remote.debug.handlers_");g.rb(b||[],a);g.Zf(this.o);g.N.prototype.V.call(this)};
g.k.Lc=function(a){k7("Controller",a)};
g.k.yD=function(a,b){this.o==a&&(b||I7(this,null),this.R("yt-remote-cast2-session-change",b))};
g.k.pN=function(a,b){if(!this.ea())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),G7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.o.label!=a.label)G7("onReceiverAction_: Stopping active receiver: "+this.o.o.friendlyName),this.o.stop();else{G7("onReceiverAction_: Casting to active receiver.");this.o.getScreen()&&this.R("yt-remote-cast2-session-change",this.o.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:I7(this,
new E7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:I7(this,new D7(this.u,a,this.F));break;case chrome.cast.ReceiverType.CAST:I7(this,new C7(this.u,a));break;default:this.Lc("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.o.label==a.label?this.o.stop():this.Lc("Stopping receiver w/o session: "+a.friendlyName)}else this.Lc("onReceiverAction_ called without receiver.")};
g.k.OL=function(a){if(this.ea())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Lc("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.o:null;if(!c||c.label!=b.label)return this.Lc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.getScreen())return G7("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.o.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Lc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);I7(this,new D7(this.u,b,this.F))}b=this.o;b.F=a;return b.F.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.y)(b.lI,b,(b.F.extraData||{}).screenId||null)):new Promise((0,g.y)(b.zv,b))};
g.k.wD=function(a){if(!this.ea()){G7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)G7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),I7(this,new C7(this.u,b),!0);else{this.Lc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.o,d=m6(this.u.vf(),c.label);d&&h6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(G7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Zf(this.o),this.o=new C7(this.u,b),this.o.subscribe("sessionScreen",(0,g.y)(this.yD,this,this.o)),this.o.rm(null));this.o.qx(a)}}};
g.k.iQ=function(){return this.o?this.o.EF():null};
g.k.LN=function(a){this.ea()||(this.Lc("Failed to estabilish a session: "+g.Bj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&I7(this,null))};
g.k.tN=function(a){G7("Receiver availability updated: "+a);if(!this.ea()){var b=H7(this);this.C=a==chrome.cast.ReceiverAvailability.AVAILABLE;H7(this)!=b&&this.R("yt-remote-cast2-availability-change",H7(this))}};
g.k.DF=function(){this.ea()||(this.A=UGa(this),G7("Updating custom receivers: "+g.Bj(this.A)),chrome.cast.setCustomReceivers(this.A,g.Ma,(0,g.y)(function(){this.Lc("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",H7(this)))};
F7.prototype.setLaunchParams=F7.prototype.lP;F7.prototype.setConnectedScreenStatus=F7.prototype.kP;F7.prototype.stopSession=F7.prototype.jQ;F7.prototype.getCastSession=F7.prototype.iQ;F7.prototype.requestSession=F7.prototype.requestSession;F7.prototype.init=F7.prototype.init;F7.prototype.dispose=F7.prototype.dispose;var O7=[];g.k=T7.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";U7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.ph=a.hasPrevious,this.hasNext=a.hasNext,this.H=a.playerTime,this.F=a.playerTimeAt,this.C=a.seekableStart,this.u=a.seekableEnd,this.J=a.duration,this.M=a.loadedTime,this.B=a.liveIngestionTime,this.A=!isNaN(this.B))};
g.k.tb=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.getDuration=function(){return this.A?this.J+V7(this):this.J};
g.k.clone=function(){return new T7(Z7(this))};g.u(a8,g.N);g.k=a8.prototype;g.k.play=function(){1==this.o?(this.u?this.u.play(null,g.Ma,g8(this,"play")):f8(this,"play"),e8(this,1,X7(b8(this))),this.R("remotePlayerChange")):c8(this,this.play)};
g.k.pause=function(){1==this.o?(this.u?this.u.pause(null,g.Ma,g8(this,"pause")):f8(this,"pause"),e8(this,2,X7(b8(this))),this.R("remotePlayerChange")):c8(this,this.pause)};
g.k.seekTo=function(a){if(1==this.o){if(this.u){var b=b8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.tb()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Ma,g8(this,"seekTo",{newTime:a}))}else f8(this,"seekTo",{newTime:a});e8(this,3,a);this.R("remotePlayerChange")}else c8(this,g.Ua(this.seekTo,a))};
g.k.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.Ma,g8(this,"stopVideo")):f8(this,"stopVideo");var a=b8(this);a.index=-1;a.videoId="";U7(a);d8(this,a);this.R("remotePlayerChange")}else c8(this,this.stop)};
g.k.setVolume=function(a,b){if(1==this.o){var c=b8(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.y)(function(){k7("CP","set receiver volume: "+d)},this),(0,g.y)(function(){this.Lc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.y)(function(){k7("CP","set receiver muted: "+b)},this),(0,g.y)(function(){this.Lc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f8(this,"setVolume",e)}c.muted=b;c.volume=a;d8(this,c)}else c8(this,g.Ua(this.setVolume,a,b))};
g.k.zF=function(a,b){if(1==this.o){var c=b8(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Bj(b.style),g.$b(d,c.o));f8(this,"setSubtitlesTrack",d);d8(this,c)}else c8(this,g.Ua(this.zF,a,b))};
g.k.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();f8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=b8(this);d.audioTrackId=c;d8(this,d)}else c8(this,g.Ua(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){var l=b8(this);c=c||0;var m={videoId:a,currentIndex:c};Y7(l,a,c);void 0!==b&&(W7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=h&&(m.locationInfo=g.Bj(h));f8(this,"setPlaylist",m);d||d8(this,l)};
g.k.Fs=function(a,b){if(1==this.o){if(a&&b){var c=b8(this);Y7(c,a,b);d8(this,c)}f8(this,"previous")}else c8(this,g.Ua(this.Fs,a,b))};
g.k.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=b8(this);Y7(c,a,b);d8(this,c)}f8(this,"next")}else c8(this,g.Ua(this.nextVideo,a,b))};
g.k.Pz=function(){1==this.o?f8(this,"dismissAutoplay"):c8(this,this.Pz)};
g.k.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.R("proxyStateChange",a,this.o)}g.N.prototype.dispose.call(this)};
g.k.V=function(){gHa(this);this.B=null;this.C.clear();$7(this,null);g.N.prototype.V.call(this)};
g.k.ky=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)b=a=this.C,g.ob(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.k.lN=function(a,b){this.R(a,b)};
g.k.BL=function(a){if(!a)this.Ko(null),$7(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=b8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)k7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d8(this,b)}};
g.k.Ko=function(a){k7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.J);if(this.u=a)this.u.addUpdateListener(this.J),hHa(this),this.R("remotePlayerChange")};
g.k.AL=function(a){a?(hHa(this),this.R("remotePlayerChange")):this.Ko(null)};
g.k.Ix=function(){f8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.JL=function(){var a=dHa();a&&$7(this,a)};
g.k.Lc=function(a){k7("CP",a)};g.u(h8,g.N);g.k=h8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,h=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==h&&(l.currentIndex=h);c&&(this.qb.listId=c);this.qb.videoId=d;this.qb.index=h||0;this.qb.state=3;W7(this.qb,m);this.B="UNSUPPORTED";i8("Connecting with setPlaylist and params: "+g.Bj(l));this.o.connect({method:"setPlaylist",
params:g.Bj(l)},a,tFa())}else i8("Connecting without params"),this.o.connect({},a,tFa());jHa(this)};
g.k.dispose=function(){this.ea()||(this.R("beforeDispose"),j8(this,3));g.N.prototype.dispose.call(this)};
g.k.V=function(){k8(this);m8(this);l8(this);g.Fo(this.H);this.H=NaN;g.Fo(this.J);this.J=NaN;this.A=null;g.ap(this.T);this.T.length=0;this.o.dispose();g.N.prototype.V.call(this);this.B=this.F=this.u=this.qb=this.o=null};
g.k.HH=function(){this.Sl(2)};
g.k.FL=function(){i8("Channel opened");this.S&&(this.S=!1,l8(this),this.P=g.Do((0,g.y)(function(){i8("Timing out waiting for a screen.");this.Sl(1)},this),15E3));
xFa(tGa(this.o),this.W)};
g.k.CL=function(){i8("Channel closed");isNaN(this.C)?r6(!0):r6();this.dispose()};
g.k.DL=function(a){r6();isNaN(this.Tn())?(i8("Channel error: "+a+" without reconnection"),this.dispose()):(this.S=!0,i8("Channel error: "+a+" with reconnection in "+this.Tn()+" ms"),j8(this,2))};
g.k.EL=function(a){a.params?i8("Received: action="+a.action+", params="+g.Bj(a.params)):i8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=y6(a.params.devices);this.u=g.Nc(a,function(c){return new f6(c)});
a=!!g.gb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
mHa(this,a);break;case "loungeScreenDisconnected":g.sb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
mHa(this,!1);break;case "remoteConnected":var b=new f6(y6(a.params.device));g.gb(this.u,function(c){return b?c.id==b.id:!1})||dFa(this.u,b);
break;case "remoteDisconnected":b=new f6(y6(a.params.device));g.sb(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":oHa(this,a);break;case "nowPlaying":qHa(this,a);break;case "onStateChange":pHa(this,a);break;case "onAdStateChange":rHa(this,a);break;case "onVolumeChanged":sHa(this,a);break;case "onSubtitlesTrackChanged":nHa(this,a);break;case "nowAutoplaying":tHa(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.F=a.params.videoId||null;this.R("autoplayUpNext",this.F);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.R("autoplayModeChange",this.B);"DISABLED"==this.B&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":uHa(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:i8("Unrecognized action: "+a.action)}};
g.k.aP=function(){if(this.A){var a=this.A;this.A=null;this.qb.videoId!=a&&n8(this,"getNowPlaying")}};
g.k.xH=function(){var a=3;this.ea()||(a=0,isNaN(this.Tn())?f7(this.o)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.Sl=function(a){i8("Disconnecting with "+a);k8(this);this.R("beforeDisconnect",a);1==a&&r6();uGa(this.o,a);this.dispose()};
g.k.vH=function(){var a=this.qb;this.A&&(a=this.qb.clone(),Y7(a,this.A,a.index));return Z7(a)};
g.k.mP=function(a){var b=new T7(a);b.videoId&&b.videoId!=this.qb.videoId&&(this.A=b.videoId,g.Fo(this.H),this.H=g.Do((0,g.y)(this.aP,this),5E3));var c=[];this.qb.listId==b.listId&&this.qb.videoId==b.videoId&&this.qb.index==b.index||c.push("remoteQueueChange");this.qb.playerState==b.playerState&&this.qb.volume==b.volume&&this.qb.muted==b.muted&&X7(this.qb)==X7(b)&&g.Bj(this.qb.o)==g.Bj(b.o)||c.push("remotePlayerChange");this.qb.reset(a);g.B(c,function(d){this.R(d)},this)};
g.k.xA=function(){var a=this.o.F.id,b=g.gb(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Tn=function(){var a=this.o;return a.u.isActive()?a.u.u-g.z():NaN};
g.k.kH=function(){return this.B||"UNSUPPORTED"};
g.k.lH=function(){return this.F||""};
g.k.bQ=function(){if(!isNaN(this.Tn())){var a=this.o.u;g.pn(a.o);a.start()}};
g.k.iP=function(a,b){n8(this,a,b);lHa(this)};
g.k.yF=function(){var a=g.wq("SID","")||"",b=g.wq("SAPISID","")||"";if(!a&&!b)return"";a=g.lf(g.Re(a),2);b=g.lf(g.Re(b),2);return g.lf(g.Re(a+","+b),2)};
h8.prototype.subscribe=h8.prototype.subscribe;h8.prototype.unsubscribeByKey=h8.prototype.yj;h8.prototype.getProxyState=h8.prototype.xH;h8.prototype.disconnect=h8.prototype.Sl;h8.prototype.getPlayerContextData=h8.prototype.vH;h8.prototype.setPlayerContextData=h8.prototype.mP;h8.prototype.getOtherConnectedRemoteId=h8.prototype.xA;h8.prototype.getReconnectTimeout=h8.prototype.Tn;h8.prototype.getAutoplayMode=h8.prototype.kH;h8.prototype.getAutoplayVideoId=h8.prototype.lH;h8.prototype.reconnect=h8.prototype.bQ;
h8.prototype.sendMessage=h8.prototype.iP;h8.prototype.getXsrfToken=h8.prototype.yF;g.u(o8,o7);g.k=o8.prototype;g.k.vf=function(a){return this.oe.$_gs(a)};
g.k.contains=function(a){return!!this.oe.$_c(a)};
g.k.get=function(a){return this.oe.$_g(a)};
g.k.start=function(){this.oe.$_st()};
g.k.add=function(a,b,c){this.oe.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.oe.$_r(a,b,c)};
g.k.xt=function(a,b,c,d){this.oe.$_un(a,b,c,d)};
g.k.V=function(){for(var a=0,b=this.o.length;a<b;++a)this.oe.$_ubk(this.o[a]);this.o.length=0;this.oe=null;o7.prototype.V.call(this)};
g.k.fQ=function(){this.R("screenChange")};
g.k.RM=function(){this.R("onlineScreenChange")};
x7.prototype.$_st=x7.prototype.start;x7.prototype.$_gspc=x7.prototype.gQ;x7.prototype.$_gsppc=x7.prototype.CF;x7.prototype.$_c=x7.prototype.contains;x7.prototype.$_g=x7.prototype.get;x7.prototype.$_a=x7.prototype.add;x7.prototype.$_un=x7.prototype.xt;x7.prototype.$_r=x7.prototype.remove;x7.prototype.$_gs=x7.prototype.vf;x7.prototype.$_gos=x7.prototype.BF;x7.prototype.$_s=x7.prototype.subscribe;x7.prototype.$_ubk=x7.prototype.yj;var H8=null,G8=!1,p8=null,q8=null,F8=null,u8=[];g.u(I8,g.C);g.k=I8.prototype;g.k.V=function(){g.C.prototype.V.call(this);this.o.stop();this.u.stop();this.H.stop();this.P();var a=this.ab;a.unsubscribe("proxyStateChange",this.tD,this);a.unsubscribe("remotePlayerChange",this.Qo,this);a.unsubscribe("remoteQueueChange",this.As,this);a.unsubscribe("previousNextChange",this.pD,this);a.unsubscribe("nowAutoplaying",this.kD,this);a.unsubscribe("autoplayDismissed",this.KC,this);this.ab=this.module=null};
g.k.VB=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.ab.o)if(J8(this)){if(!b8(this.ab).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":b8(this.ab).tb()?this.ab.pause():this.ab.play();break;case "control_play":this.ab.play();break;case "control_pause":this.ab.pause();break;case "control_seek":this.F.FB(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.G.getCurrentTime();L8(this,0===c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.zL=function(a){this.H.EH(a)};
g.k.KP=function(a){this.VB("control_subtitles_set_track",g.Ub(a)?null:a)};
g.k.NE=function(){var a=this.G.getOption("captions","track");g.Ub(a)||K8(this,a)};
g.k.wc=function(a){this.module.wc(a,this.G.getVideoData().lengthSeconds)};
g.k.aD=function(a){if(J8(this)){this.ab.unsubscribe("remotePlayerChange",this.Qo,this);var b=Math.round(a.volume);a=!!a.muted;var c=b8(this.ab);if(b!==c.volume||a!==c.muted)this.ab.setVolume(b,a),this.J.start();this.ab.subscribe("remotePlayerChange",this.Qo,this)}};
g.k.sM=function(){g.Ub(this.A)||GHa(this,this.A);this.B=!1};
g.k.tD=function(a,b){this.u.stop();2===b&&this.KE()};
g.k.Qo=function(){if(J8(this)){this.o.stop();var a=b8(this.ab);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.module.Kd=1;break;case 1082:case 1083:this.module.Kd=0;break;default:this.module.Kd=-1}switch(a.playerState){case 1081:case 1:this.qd(new g.HK(8));this.JE();break;case 1085:case 3:this.qd(new g.HK(9));break;case 1083:case 0:this.qd(new g.HK(2));this.F.stop();this.wc(this.G.getVideoData().lengthSeconds);break;case 1084:this.qd(new g.HK(4));break;case 2:this.qd(new g.HK(4));
this.wc(X7(a));break;case -1:this.qd(new g.HK(64));break;case -1E3:this.qd(new g.HK(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=b8(this.ab).o;var b=this.A;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.A=a,GHa(this,a));a=b8(this.ab);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.J.isActive()||this.lF()}else FHa(this)};
g.k.pD=function(){this.G.R("mdxpreviousnextchange")};
g.k.As=function(){J8(this)||FHa(this)};
g.k.kD=function(a){isNaN(a)||this.G.R("mdxnowautoplaying",a)};
g.k.KC=function(){this.G.R("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){J8(this)&&this.ab.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===b8(this.ab).playerState?L8(this,a):b&&this.ab.seekTo(a)};
g.k.lF=function(){if(J8(this)){var a=b8(this.ab);this.events.sb(this.M);a.muted?this.G.mute():this.G.unMute();this.G.setVolume(a.volume);this.M=this.events.K(this.G,"onVolumeChange",this.aD)}};
g.k.JE=function(){this.o.stop();if(!this.ab.ea()){var a=b8(this.ab);a.tb()&&this.qd(new g.HK(8));this.wc(X7(a));this.o.start()}};
g.k.KE=function(){this.u.stop();this.o.stop();var a=this.ab.B.getReconnectTimeout();2==this.ab.o&&!isNaN(a)&&this.u.start()};
g.k.qd=function(a){this.u.stop();var b=this.C;if(!g.MK(b,a)){var c=g.T(a,2);c!==g.T(this.C,2)&&g.y0(this.G.app,c);this.C=a;IHa(this.module,b,a)}};g.u(M8,g.V);M8.prototype.dc=function(){this.o.show()};
M8.prototype.Sa=function(){this.o.hide()};
M8.prototype.u=function(){g.eK("https://web.archive.org/web/20200930235616/https://support.google.com/youtube/answer/7640706")};
M8.prototype.A=function(){e6("mdx-manual-pairing-popup-ok");this.Sa()};g.u(N8,g.V);N8.prototype.dc=function(){this.o.show()};
N8.prototype.Sa=function(){this.o.hide()};
N8.prototype.u=function(){e6("mdx-privacy-popup-cancel");this.Sa()};
N8.prototype.A=function(){e6("mdx-privacy-popup-confirm");this.Sa()};g.u(O8,g.V);O8.prototype.u=function(a){HHa(this,a.state)};g.u(P8,g.PZ);P8.prototype.B=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.Hj=g.Gb(a,this.o,this),g.QZ(this,g.Nc(a,this.o)),a=this.G.getOption("remote","currentReceiver"),this.hc(this.o(a)),this.enable(!0)):this.enable(!1)};
P8.prototype.o=function(a){return a.key};
P8.prototype.Hg=function(a){return"cast-selector-receiver"===a?"Cast...":this.Hj[a].name};
P8.prototype.Xd=function(a){g.PZ.prototype.Xd.call(this,a);this.G.setOption("remote","currentReceiver",this.Hj[a]);this.Ja.Sa()};g.u(Q8,g.IS);g.k=Q8.prototype;
g.k.create=function(){var a=this.player.N(),b=g.UB(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:g.Q(a.experiments,"mdx_load_cast_api_bootstrap_script")};zHa(b,a);this.subscriptions.push(g.Ko("yt-remote-before-disconnect",this.xL,this));this.subscriptions.push(g.Ko("yt-remote-connection-change",this.uN,this));this.subscriptions.push(g.Ko("yt-remote-receiver-availability-change",this.rD,this));this.subscriptions.push(g.Ko("yt-remote-auto-connect",this.sN,this));this.subscriptions.push(g.Ko("yt-remote-receiver-resumed",
this.rN,this));this.subscriptions.push(g.Ko("mdx-privacy-popup-confirm",this.QO,this));this.subscriptions.push(g.Ko("mdx-privacy-popup-cancel",this.PO,this));this.subscriptions.push(g.Ko("mdx-manual-pairing-popup-ok",this.zI,this));this.rD()};
g.k.load=function(){this.player.cancelPlayback();g.IS.prototype.load.call(this);this.eh=new I8(this,this.player,this.ab);var a=(a=EHa())?a.currentTime:0;var b=E8()?new a8(z8(),void 0):null;0==a&&b&&(a=X7(b8(b)));0!==a&&this.wc(a);IHa(this,this.sc,this.sc);g.G0(this.player.app,6)};
g.k.unload=function(){this.player.R("mdxautoplaycanceled");this.Wi=this.Eg;g.$f(this.eh,this.ab);this.ab=this.eh=null;g.IS.prototype.unload.call(this);g.G0(this.player.app,5);R8(this)};
g.k.V=function(){g.Lo(this.subscriptions);g.IS.prototype.V.call(this)};
g.k.Dh=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.eh.VB.apply(this.eh,[a].concat(g.la(c)))};
g.k.getAdState=function(){return this.Kd};
g.k.zH=function(){return this.loaded?this.eh.suggestion:null};
g.k.ph=function(){return this.ab?b8(this.ab).ph:!1};
g.k.hasNext=function(){return this.ab?b8(this.ab).hasNext:!1};
g.k.wc=function(a,b){this.pB=a||0;this.player.R("progresssync",a,b)};
g.k.getCurrentTime=function(){return this.pB};
g.k.getProgressState=function(){var a=b8(this.ab),b=this.player.getVideoData();return{allowSeeking:g.Q(this.player.N().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.Jd():!a.isAdPlaying()&&this.player.Jd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.A?a.B+V7(a):a.B,isAtLiveHead:1>=(a.A?a.u+V7(a):a.u)-this.getCurrentTime(),loaded:a.M,seekableEnd:a.A?a.u+V7(a):a.u,seekableStart:0<a.C?a.C+
V7(a):a.C}};
g.k.nextVideo=function(){this.ab&&this.ab.nextVideo()};
g.k.Fs=function(){this.ab&&this.ab.Fs()};
g.k.xL=function(a){1===a&&(this.Pw=this.ab?b8(this.ab):null)};
g.k.uN=function(){var a=E8()?new a8(z8(),void 0):null;if(a){var b=this.Wi;this.loaded&&this.unload();this.ab=a;this.Pw=null;b.key!==this.Eg.key&&(this.Wi=b,this.load())}else g.Zf(this.ab),this.ab=null,this.loaded&&(this.unload(),(a=this.Pw)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,X7(a)));this.player.R("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.rD=function(){this.Hj=[this.Eg].concat(BHa());var a=A8()||this.Eg;S8(this,a);this.player.la("onMdxReceiversChange")};
g.k.sN=function(){var a=A8();S8(this,a)};
g.k.rN=function(){this.Wi=A8()};
g.k.QO=function(){this.To=!0;R8(this);G8=!1;H8&&C8(H8,1);H8=null};
g.k.PO=function(){this.To=!1;R8(this);S8(this,this.Eg);this.Wi=this.Eg;G8=!1;H8=null;this.player.playVideo()};
g.k.zI=function(){this.Dr=!0;R8(this);g.gt("yt-remote-manual-pairing-warning-shown",!0,2592E3);G8=!1;H8&&C8(H8,1);H8=null};
g.k.Gd=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Hj;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?R7():S8(this,b)),this.loaded?this.Wi:this.Eg;case "quickCast":return 2===this.Hj.length&&"cast-selector-receiver"===this.Hj[1].key?(b&&R7(),!0):!1}};
g.k.Ix=function(){this.ab.Ix()};
g.k.Sg=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.xX.remote=Q8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 23:56:16 Sep 30, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:19 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 178.218
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.077
  cdx.remote: 0.066
  esindex: 0.013
  LoadShardBlock: 139.807 (3)
  PetaboxLoader3.datanode: 141.154 (5)
  load_resource: 98.578 (2)
  PetaboxLoader3.resolve: 23.157
*/